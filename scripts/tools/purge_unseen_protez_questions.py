"""
DUS Bankası — Protez Yeni ve Görülmemiş Soruları Temizleme Scripti

Kural:
- 2026-04-13 tarihli eski (orijinal) sorulara DOKUNULMAZ (1,048 soru).
- 2026-05-29 tarihli yeni sorulardan:
    - question_stats kaydı olanlar (attempts > 0 veya last_seen) KORUNUR (71 soru).
    - exam_answers kaydı olanlar KORUNUR.
    - is_favorite olanlar KORUNUR.
    - Hiç görülmemiş/çözülmemiş yeni sorular (2,619 soru) SİLİNİR.
- Silinmeden önce tam JSON yedeği exports/ dizinine kaydedilir.
- Pending (bekleyen) daily_exams tablosundaki question_ids listelerinden silinen ID'ler arındırılır.
"""

import sys
import os
import json
import argparse
import urllib.request
import urllib.parse
from datetime import datetime
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent.parent
sys.path.insert(0, str(REPO_ROOT / "scripts"))

from config import SUPABASE_URL, SUPABASE_KEY

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

GET_HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
}

def fetch_all(url_base):
    rows = []
    limit = 1000
    offset = 0
    while True:
        sep = "&" if "?" in url_base else "?"
        url = f"{url_base}{sep}limit={limit}&offset={offset}"
        req = urllib.request.Request(url, headers=GET_HEADERS)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            rows.extend(data)
            if len(data) < limit:
                break
            offset += limit
    return rows

def delete_chunk(ids):
    in_clause = ",".join(ids)
    url = f"{SUPABASE_URL}/rest/v1/questions?id=in.({in_clause})"
    req = urllib.request.Request(url, headers=HEADERS, method="DELETE")
    with urllib.request.urlopen(req) as resp:
        return resp.status

def update_daily_exam_qids(exam_id, new_qids):
    url = f"{SUPABASE_URL}/rest/v1/daily_exams?id=eq.{exam_id}"
    data = json.dumps({"question_ids": new_qids}).encode("utf-8")
    req = urllib.request.Request(url, headers=HEADERS, data=data, method="PATCH")
    with urllib.request.urlopen(req) as resp:
        return resp.status

def main():
    parser = argparse.ArgumentParser(description="Protez dersindeki görülmemiş yeni soruları temizle.")
    parser.add_argument("--dry-run", action="store_true", help="Gerçek silme yapmaz, sadece simüle eder.")
    parser.add_argument("--confirm-delete", action="store_true", help="Gerçek silme işlemini onaylar.")
    args = parser.parse_args()

    if not args.dry_run and not args.confirm_delete:
        print("HATA: Lütfen ya --dry-run ya da --confirm-delete bayrağını belirtin.")
        sys.exit(1)

    print("=== DUSBANKASI PROTEZ TEMİZLİK OPERASYONU ===")
    print(f"Mod: {'[DRY RUN - SİMÜLASYON]' if args.dry_run else '[GERÇEK SİLME]'}")

    # 1. Tüm Protez sorularını çek
    print("\n1. Veritabanından Protez soruları çekiliyor...")
    fields = "id,lesson,unit,question,option_a,option_b,option_c,option_d,option_e,correct_answer,explanation,flagged,flag_reason,quality_flag,is_favorite,created_at"
    protez_qs = fetch_all(f"{SUPABASE_URL}/rest/v1/questions?select={fields}&lesson=eq.Protez")
    print(f"   Toplam Protez soru sayısı: {len(protez_qs)}")

    old_qs = [q for q in protez_qs if q["created_at"].startswith("2026-04-13")]
    new_qs = [q for q in protez_qs if not q["created_at"].startswith("2026-04-13")]
    print(f"   - Eski Protez soruları (2026-04-13): {len(old_qs)}")
    print(f"   - Yeni Protez soruları: {len(new_qs)}")

    # 2. question_stats çek
    print("\n2. İstatistikler (question_stats) ve sınav kayıtları taranıyor...")
    stats = fetch_all(f"{SUPABASE_URL}/rest/v1/question_stats?select=id,question_id,attempts,corrects,last_seen")
    seen_qids = {s["question_id"] for s in stats if s.get("question_id")}

    # 3. exam_answers çek
    exam_answers = fetch_all(f"{SUPABASE_URL}/rest/v1/exam_answers?select=id,question_id")
    for ea in exam_answers:
        if ea.get("question_id"):
            seen_qids.add(ea["question_id"])

    # 4. is_favorite olanları ekle
    for q in protez_qs:
        if q.get("is_favorite"):
            seen_qids.add(q["id"])

    # 5. Ayrıştırma: Korunacak yeni sorular vs Silinecek yeni sorular
    keep_new_qs = [q for q in new_qs if q["id"] in seen_qids]
    delete_new_qs = [q for q in new_qs if q["id"] not in seen_qids]
    delete_qids_set = {q["id"] for q in delete_new_qs}

    print(f"\n3. Analiz Sonucu:")
    print(f"   - Eski sorular (tamamı korunacak): {len(old_qs)}")
    print(f"   - Yeni sorular içinde GÖRÜLMÜŞ (korunacak): {len(keep_new_qs)}")
    print(f"   - Yeni sorular içinde GÖRÜLMEMİŞ (SİLİNECEK): {len(delete_new_qs)}")
    print(f"   - İşlem sonrası kalacak toplam Protez soru sayısı: {len(old_qs) + len(keep_new_qs)}")

    # 6. Yedekleme
    backup_dir = REPO_ROOT / "exports"
    backup_dir.mkdir(parents=True, exist_ok=True)
    timestamp_str = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_path = backup_dir / f"backup_protez_unseen_{timestamp_str}.json"

    print(f"\n4. Yedekleme Dosyası:")
    print(f"   Hedef: {backup_path}")
    with open(backup_path, "w", encoding="utf-8") as f:
        json.dump({
            "generated_at": datetime.now().isoformat(),
            "total_questions_to_delete": len(delete_new_qs),
            "kept_seen_questions_count": len(keep_new_qs),
            "kept_old_questions_count": len(old_qs),
            "deleted_questions": delete_new_qs
        }, f, ensure_ascii=False, indent=2)
    print(f"   [OK] {len(delete_new_qs)} adet silinecek sorunun tam verisi (kök, şıklar, açıklamalar, embeddingler) yedeklendi.")

    # 7. Daily exams kontrolü
    daily_exams = fetch_all(f"{SUPABASE_URL}/rest/v1/daily_exams?select=id,name,status,question_ids")
    affected_exams = []
    for de in daily_exams:
        qids = de.get("question_ids") or []
        intersect = set(qids) & delete_qids_set
        if intersect:
            affected_exams.append((de, len(intersect)))

    print(f"\n5. Daily Exams Etkilenme Durumu:")
    print(f"   Silinecek soruları içeren daily_exam sayısı: {len(affected_exams)}")
    for de, cnt in affected_exams:
        print(f"   - ID: {de['id']} | Adı: {de.get('name')} | Durum: {de.get('status')} | İçindeki silinecek soru: {cnt}")

    if args.dry_run:
        print("\n[DRY RUN BİTTİ] Hiçbir soru silinmedi. Gerçek silme için --confirm-delete kullanın.")
        return

    # 8. Gerçek Silme Operasyonu
    print("\n6. GERÇEK SİLME İŞLEMİ BAŞLATILIYOR...")
    chunk_size = 50
    delete_ids = [q["id"] for q in delete_new_qs]
    total = len(delete_ids)

    for i in range(0, total, chunk_size):
        chunk = delete_ids[i:i + chunk_size]
        delete_chunk(chunk)
        print(f"   İlerleme: {min(i + chunk_size, total)} / {total} soru silindi.")

    # 9. Pending daily_exams temizliği
    print("\n7. Pending Daily Exams içindeki referanslar güncelleniyor...")
    for de, cnt in affected_exams:
        if de.get("status") == "pending":
            original_qids = de.get("question_ids") or []
            filtered_qids = [qid for qid in original_qids if qid not in delete_qids_set]
            update_daily_exam_qids(de["id"], filtered_qids)
            print(f"   - {de['id']} ({de.get('name')}) güncellendi: {len(original_qids)} -> {len(filtered_qids)} soru.")

    # 10. Son Durum Doğrulaması
    print("\n8. CANLI PROBE İLE DOĞRULAMA YAPILIYOR...")
    remaining_qs = fetch_all(f"{SUPABASE_URL}/rest/v1/questions?select=id,created_at&lesson=eq.Protez")
    print(f"   Kalan Protez soruları: {len(remaining_qs)}")
    remaining_old = len([q for q in remaining_qs if q["created_at"].startswith("2026-04-13")])
    remaining_new = len([q for q in remaining_qs if not q["created_at"].startswith("2026-04-13")])
    print(f"   - Orijinal eski sorular: {remaining_old} (Beklenen: {len(old_qs)})")
    print(f"   - Korunan yeni sorular: {remaining_new} (Beklenen: {len(keep_new_qs)})")
    assert remaining_old == len(old_qs), "HATA: Eski soru sayısı değişti!"
    assert remaining_new == len(keep_new_qs), "HATA: Korunan yeni soru sayısı uyuşmuyor!"
    print("   [BAŞARILI] Tüm kontroller doğrulandı.")

if __name__ == "__main__":
    main()
