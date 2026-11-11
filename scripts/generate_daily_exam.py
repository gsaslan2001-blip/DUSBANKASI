#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
DUSBANKASI — Günün Denemesi Üretim Scripti (v3)

Kurallar:
1. Pazartesi - Cumartesi (DOW 1..6):
   - Günde 4 Ana Ders, her dersten 25 soru (20 yeni + 5 zor/tekrar) = Toplam 100 Soru.
   - Sadece 14 Ana Ders referans alınır.
   - Yan dersler (ÇIKMIŞ SORULAR, Pedodonti Cikmis, Yanlışlarım vb.) KESİNLİKLE hariç tutulur.
   - Sorular dersler arası serpiştirilir (round-robin / interleaving).
2. Pazar (DOW 7):
   - "Haftanın Yanlışları" denemesi.
   - Kullanıcının son 7 günde yanlış yaptığı TÜM sorular (sınırsız sayıda) getirilir.

Kullanım:
    python scripts/generate_daily_exam.py [--date YYYY-MM-DD] [--force] [--dry-run]
"""

import sys
import os
import argparse
import random
import datetime
import urllib.request
import urllib.parse
import json
from collections import defaultdict

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

sys.path.insert(0, os.path.dirname(__file__))
from config import SUPABASE_URL, SUPABASE_KEY

MAIN_LESSONS = [
    'Anatomi', 'Biyokimya', 'Cerrahi', 'Endodonti',
    'Fizyoloji', 'Mikrobiyoloji', 'Ortodonti',
    'Patoloji', 'Pedodonti', 'Periodontoloji', 'Protez',
    'Radyoloji', 'Restoratif'
]

EXCLUDED_LESSONS = {'çıkmış sorular', 'pedodonti cikmis', 'yanlışlarım', 'cikmis', 'çıkmış'}

WEEKLY_PLAN = {
    1: ['Periodontoloji', 'Fizyoloji', 'Endodonti', 'Anatomi'],
    2: ['Protez', 'Fizyoloji', 'Biyokimya', 'Ortodonti'],
    3: ['Patoloji', 'Radyoloji', 'Cerrahi', 'Pedodonti'],
    4: ['Mikrobiyoloji', 'Restoratif', 'Endodonti', 'Periodontoloji'],
    5: ['Protez', 'Pedodonti', 'Ortodonti', 'Fizyoloji'],
    6: ['Radyoloji', 'Patoloji', 'Fizyoloji', 'Anatomi'],
}

DEFAULT_USER_ID = "cb5a05b8-a353-4701-b987-5df0404c7b0f"


def is_valid_main_lesson(lesson_name: str) -> bool:
    if not lesson_name:
        return False
    norm = lesson_name.strip().lower()
    if norm in EXCLUDED_LESSONS or 'cikmis' in norm or 'çıkmış' in norm:
        return False
    return any(m.lower() == norm for m in MAIN_LESSONS)


def supabase_request(endpoint: str, method: str = 'GET', data: dict = None, headers_extra: dict = None):
    url = f"{SUPABASE_URL}/rest/v1/{endpoint}"
    headers = {
        'apikey': SUPABASE_KEY,
        'Authorization': f"Bearer {SUPABASE_KEY}",
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
    }
    if headers_extra:
        headers.update(headers_extra)
        
    req_data = json.dumps(data).encode('utf-8') if data else None
    req = urllib.request.Request(url, data=req_data, headers=headers, method=method)
    
    try:
        with urllib.request.urlopen(req) as resp:
            body = resp.read().decode('utf-8')
            return json.loads(body) if body else None
    except urllib.error.HTTPError as e:
        err_msg = e.read().decode('utf-8')
        raise RuntimeError(f"Supabase HTTP {e.code}: {err_msg}")


def generate_daily_exam_local(target_date: datetime.date, user_id: str, force: bool = False, dry_run: bool = False):
    dow = target_date.isoweekday() # 1=Pzt..7=Paz
    date_str = target_date.strftime('%Y-%m-%d')
    date_tr_str = target_date.strftime('%d.%m.%Y')

    print(f"\n🚀 Günün Denemesi Üretimi Başlatılıyor: {date_str} (DOW: {dow})")
    print(f"👤 Kullanıcı ID: {user_id}")

    # 1. Idempotency kontrolü
    if not force:
        existing = supabase_request(f"daily_exams?user_id=eq.{user_id}&exam_date=eq.{date_str}&select=id,name,status")
        if existing and len(existing) > 0:
            print(f"ℹ️ Bugün ({date_str}) için zaten deneme mevcut: {existing[0].get('name')} (ID: {existing[0].get('id')}).")
            print("Yeniden üretmek için --force bayrağını kullanın.")
            return existing[0]

    # Sonraki day_number'ı bul
    all_exams = supabase_request(f"daily_exams?user_id=eq.{user_id}&select=day_number&order=day_number.desc&limit=1")
    day_number = (all_exams[0]['day_number'] + 1) if (all_exams and len(all_exams) > 0) else 1

    # ═════════════════════════════════════════════════════════════════════════
    # PAZAR (DOW 7): HAFTANIN YANLIŞLARI (SINIRSIZ SORU)
    # ═════════════════════════════════════════════════════════════════════════
    if dow == 7:
        print("📅 Gün: PAZAR → Haftanın Yanlışları Denemesi Hazırlanıyor...")
        since_date = (target_date - datetime.timedelta(days=7)).strftime('%Y-%m-%d')
        
        # Son 7 günün yanlışları
        answers = supabase_request(
            f"exam_answers?user_id=eq.{user_id}&is_correct=eq.false&created_at=gte.{since_date}T00:00:00&select=question_id"
        )
        wrong_ids = list(dict.fromkeys([a['question_id'] for a in (answers or []) if a.get('question_id')]))

        # Fallback: question_stats'ta difficulty >= 7 veya streak == 0 olanlar
        if len(wrong_ids) == 0:
            print("ℹ️ exam_answers'ta son 7 güne ait yanlış bulunamadı. question_stats hata havuzuna bakılıyor...")
            stats_rows = supabase_request(
                f"question_stats?user_id=eq.{user_id}&attempts=gt.0&difficulty=gte.7&select=question_id&limit=100"
            )
            wrong_ids = list(dict.fromkeys([s['question_id'] for s in (stats_rows or []) if s.get('question_id')]))

        if len(wrong_ids) == 0:
            print("🎉 Bu hafta hiç yanlış soru kaydı yok! Pazar denemesi üretilmedi.")
            return None

        # Soruların derslerini doğrula (yan dersleri filtrele)
        # 100'lük chunklarla çek
        valid_question_ids = []
        by_lesson_counts = defaultdict(int)
        
        for i in range(0, len(wrong_ids), 50):
            chunk = wrong_ids[i:i+50]
            ids_param = ",".join(chunk)
            qs = supabase_request(f"questions?id=in.({ids_param})&select=id,lesson,quality_flag")
            for q in (qs or []):
                q_lesson = q.get('lesson', '')
                q_flag = q.get('quality_flag')
                if is_valid_main_lesson(q_lesson) and (q_flag is None or q_flag in ('reviewed_keep', 'high_yield')):
                    valid_question_ids.append(q['id'])
                    by_lesson_counts[q_lesson] += 1

        if len(valid_question_ids) == 0:
            print("⚠️ Filtreleme sonrası geçerli ana ders sorusu kalmadı.")
            return None

        random.shuffle(valid_question_ids)
        exam_name = f"Haftanın Yanlışları — {date_tr_str}"
        breakdown = {
            "type": "weekly_mistakes",
            "total": len(valid_question_ids),
            "wrongCount": len(valid_question_ids),
            "byLesson": dict(by_lesson_counts),
            "generatedBy": "scripts/generate_daily_exam.py",
            "dow": 7
        }

        print(f"\n════ GÜNÜN DENEMESİ HAZIR (PAZAR) ═══════════════")
        print(f"📅  Tarih:      {date_str} ({day_number}. Gün — Pazar)")
        print(f"📝  İsim:       {exam_name}")
        print(f"📊  Toplam:     {len(valid_question_ids)} soru (SINIRSIZ HAFTALIK YANLIŞLAR)")
        print("DERS DAĞILIMI:")
        for les, cnt in sorted(by_lesson_counts.items(), key=lambda x: -x[1]):
            print(f"  • {les}: {cnt} soru")
        print("═════════════════════════════════════════════════")

        if dry_run:
            print("🔍 [DRY-RUN] Veritabanına yazılmadı.")
            return None

        saved = supabase_request("daily_exams", method="POST", data={
            "user_id": user_id,
            "day_number": day_number,
            "exam_date": date_str,
            "name": exam_name,
            "question_ids": valid_question_ids,
            "breakdown": breakdown,
            "status": "pending"
        })
        print(f"✅ Başarıyla kaydedildi! ID: {saved[0]['id'] if saved else 'OK'}")
        return saved[0] if saved else None

    # ═════════════════════════════════════════════════════════════════════════
    # PAZARTESİ - CUMARTESİ (DOW 1..6): 4 DERS x 25 SORU = 100 SORU
    # ═════════════════════════════════════════════════════════════════════════
    lessons_today = WEEKLY_PLAN.get(dow, [])
    print(f"📚 Bugünün 4 Ana Dersi: {', '.join(lessons_today)}")

    # Kullanıcının daha önce çözdüğü soru ID'leri
    solved_rows = supabase_request(f"question_stats?user_id=eq.{user_id}&attempts=gt.0&select=question_id,difficulty")
    solved_map = {r['question_id']: r.get('difficulty', 5) for r in (solved_rows or [])}

    # Daha önce denemelerde çıkan sorular
    used_rows = supabase_request(f"daily_exams?user_id=eq.{user_id}&select=question_ids")
    used_in_exams = set()
    for r in (used_rows or []):
        for qid in r.get('question_ids', []):
            used_in_exams.add(qid)

    picks_by_lesson = {}
    by_lesson_breakdown = {}
    total_new = 0
    total_review = 0

    for lesson in lessons_today:
        # Dersi ve sorularını çek
        encoded_lesson = urllib.parse.quote(lesson)
        qs = supabase_request(
            f"questions?lesson=eq.{encoded_lesson}&or=(quality_flag.is.null,quality_flag.eq.reviewed_keep,quality_flag.eq.high_yield)&select=id,unit"
        )
        if not qs:
            print(f"⚠️ {lesson} dersinde aktif soru bulunamadı, atlanıyor.")
            continue

        # Ünite bazlı grupla
        units_dict = defaultdict(list)
        for q in qs:
            units_dict[q['unit']].append(q['id'])

        unsolved_pool = []
        hard_pool = []
        other_solved_pool = []

        for q in qs:
            qid = q['id']
            if qid not in solved_map:
                unsolved_pool.append(q)
            elif solved_map[qid] >= 7:
                hard_pool.append(q)
            else:
                other_solved_pool.append(q)

        # 20 Yeni Soru Seç (Ünite yayılımlı)
        selected_new = []
        unit_keys = list(units_dict.keys())
        random.shuffle(unit_keys)

        # 1. tur: her üniteden 1 yeni soru
        for u in unit_keys:
            u_unsolved = [q['id'] for q in unsolved_pool if q['unit'] == u and q['id'] not in used_in_exams]
            if not u_unsolved:
                u_unsolved = [q['id'] for q in unsolved_pool if q['unit'] == u]
            if u_unsolved and len(selected_new) < 20:
                pick = random.choice(u_unsolved)
                selected_new.append(pick)

        # Kalan yeni soruları tamamla
        remaining_unsolved = [q['id'] for q in unsolved_pool if q['id'] not in selected_new]
        random.shuffle(remaining_unsolved)
        while len(selected_new) < 20 and remaining_unsolved:
            selected_new.append(remaining_unsolved.pop())

        # 5 Zor/Tekrar Soru Seç
        selected_hard = []
        random.shuffle(hard_pool)
        for q in hard_pool:
            if len(selected_hard) < 5 and q['id'] not in selected_new:
                selected_hard.append(q['id'])

        if len(selected_hard) < 5:
            random.shuffle(other_solved_pool)
            for q in other_solved_pool:
                if len(selected_hard) < 5 and q['id'] not in selected_new:
                    selected_hard.append(q['id'])

        # Fallback: Toplam 25'e tamamla
        lesson_picks = selected_new + selected_hard
        if len(lesson_picks) < 25:
            all_ids = [q['id'] for q in qs if q['id'] not in lesson_picks]
            random.shuffle(all_ids)
            while len(lesson_picks) < 25 and all_ids:
                lesson_picks.append(all_ids.pop())

        random.shuffle(lesson_picks)
        picks_by_lesson[lesson] = lesson_picks
        total_new += len(selected_new)
        total_review += len(selected_hard)
        by_lesson_breakdown[lesson] = {
            "new": len(selected_new),
            "review": len(selected_hard),
            "total": len(lesson_picks)
        }

    # Serpiştirme (Interleaving): 4 ders arasında round-robin
    final_question_ids = []
    max_len = max([len(v) for v in picks_by_lesson.values()]) if picks_by_lesson else 0
    lesson_keys = list(picks_by_lesson.keys())

    for pos in range(max_len):
        round_lessons = lesson_keys.copy()
        random.shuffle(round_lessons)
        for l in round_lessons:
            if pos < len(picks_by_lesson[l]):
                final_question_ids.append(picks_by_lesson[l][pos])

    exam_name = f"Karma Deneme — {date_tr_str}"
    breakdown = {
        "total": len(final_question_ids),
        "newCount": total_new,
        "reviewCount": total_review,
        "byLesson": by_lesson_breakdown,
        "generatedBy": "scripts/generate_daily_exam.py",
        "dow": dow,
        "interleaved": True
    }

    print(f"\n════ GÜNÜN DENEMESİ HAZIR ═══════════════════════")
    print(f"📅  Tarih:      {date_str} ({day_number}. Gün)")
    print(f"📝  İsim:       {exam_name}")
    print(f"📊  Toplam:     {len(final_question_ids)} soru (4 Ders x 25 Soru)")
    print(f"🆕  Yeni:       {total_new} soru")
    print(f"🔄  Tekrar/Zor: {total_review} soru")
    print("DERS DAĞILIMI:")
    for les, b in by_lesson_breakdown.items():
        print(f"  • {les}: {b['total']} soru ({b['new']} yeni, {b['review']} tekrar)")
    print("═════════════════════════════════════════════════")

    if dry_run:
        print("🔍 [DRY-RUN] Veritabanına yazılmadı.")
        return None

    saved = supabase_request("daily_exams", method="POST", data={
        "user_id": user_id,
        "day_number": day_number,
        "exam_date": date_str,
        "name": exam_name,
        "question_ids": final_question_ids,
        "breakdown": breakdown,
        "status": "pending"
    })
    print(f"✅ Başarıyla kaydedildi! ID: {saved[0]['id'] if saved else 'OK'}")
    return saved[0] if saved else None


def main():
    parser = argparse.ArgumentParser(description="DUSBANKASI Günün Denemesi Üreteci (v3)")
    parser.add_argument("--date", type=str, default=None, help="Tarih (YYYY-MM-DD)")
    parser.add_argument("--user-id", type=str, default=DEFAULT_USER_ID, help="Kullanıcı UUID")
    parser.add_argument("--force", action="store_true", help="Günün denemesi zaten varsa bile yeniden oluştur")
    parser.add_argument("--dry-run", action="store_true", help="DB'ye yazmadan sadece önizleme yap")
    args = parser.parse_args()

    if args.date:
        target_date = datetime.datetime.strptime(args.date, "%Y-%m-%d").date()
    else:
        # Türkiye saati (UTC+3)
        tz_tr = datetime.timezone(datetime.timedelta(hours=3))
        now_tr = datetime.datetime.now(tz_tr)
        target_date = now_tr.date()

    generate_daily_exam_local(target_date, args.user_id, force=args.force, dry_run=args.dry_run)


if __name__ == "__main__":
    main()
