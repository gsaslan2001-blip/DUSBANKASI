"""
DUS Bankası — Periodontoloji Çıkmış Soruları İthalat ve JSON Dönüştürme Scripti

Kaynak: C:\\Users\\FURKAN\\Desktop\\DUS\\Periodontoloji\\çıkmış\\dusçıkmış.txt
Hedef 1: C:\\Users\\FURKAN\\Desktop\\DUS\\Periodontoloji\\çıkmış json
Hedef 2: scripts/data/cikmis_periodontoloji
Hedef DB: Supabase (quality_flag = 'cikmis', lesson = 'Periodontoloji')
"""
import os
import glob
import re
import json
import sys
import time
import urllib.request
import urllib.parse
from collections import defaultdict, Counter

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import config
import shared
from tools.test_periodontoloji_parser import parse_periodontoloji_file
from tools.map_periodontoloji import get_canonical_unit, CANONICAL_PERIODONTOLOJI_UNITS

SOURCE_FILE = r"C:\Users\FURKAN\Desktop\DUS\Periodontoloji\çıkmış\dusçıkmış.txt"
TARGET_JSON_DIR = r"C:\Users\FURKAN\Desktop\DUS\Periodontoloji\çıkmış json"
PROJECT_DATA_DIR = os.path.join(_SCRIPT_DIR, "data", "cikmis_periodontoloji")

def sanitize_filename(name):
    # Dosya adı için Türkçe karakterleri ASCII'ye dönüştür
    trans = str.maketrans("çğıöşüÇĞİÖŞÜ -", "cgiosuCGIOSU__")
    clean = name.translate(trans)
    clean = re.sub(r"[^A-Za-z0-9_]", "", clean)
    return clean

def deploy_unit_to_supabase(questions, lesson_name, unit_name):
    """Periodontoloji çıkmış sorularını embedding ile Supabase'e yazar."""
    url = f"{config.SUPABASE_URL}/rest/v1/questions"
    headers = {
        "apikey": config.SUPABASE_KEY,
        "Authorization": f"Bearer {config.SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }

    # 1. Embedding oluşturma (1536d text-embedding-3-large)
    stem_texts = [q.get('question', '') or " " for q in questions]
    expl_texts = [q.get('explanation', '') or " " for q in questions]

    stem_embeddings = []
    expl_embeddings = []

    if shared.openai_client and stem_texts:
        print(f"   🧠 OpenAI Embedding alınıyor ({len(stem_texts)} soru)...")
        for chunk_idx in range(0, len(stem_texts), 50):
            c_stem = stem_texts[chunk_idx:chunk_idx+50]
            c_expl = expl_texts[chunk_idx:chunk_idx+50]

            try:
                r_stem = shared.openai_client.embeddings.create(
                    model="text-embedding-3-large", input=c_stem, dimensions=1536
                )
                stem_embeddings.extend([item.embedding for item in r_stem.data])

                r_expl = shared.openai_client.embeddings.create(
                    model="text-embedding-3-large", input=c_expl, dimensions=1536
                )
                expl_embeddings.extend([item.embedding for item in r_expl.data])

                if chunk_idx + 50 < len(stem_texts):
                    time.sleep(0.5)
            except Exception as e:
                print(f"   ⚠️ Embedding hatası: {e}")

    # 2. Satırları oluştur
    rows = []
    for i, q in enumerate(questions):
        opts = q.get("options", {})
        row = {
            "lesson": lesson_name,
            "unit": unit_name,
            "question": q.get("question", ""),
            "option_a": opts.get("A", ""),
            "option_b": opts.get("B", ""),
            "option_c": opts.get("C", ""),
            "option_d": opts.get("D", ""),
            "option_e": opts.get("E", ""),
            "correct_answer": q.get("correctAnswer", ""),
            "explanation": q.get("explanation", ""),
            "quality_flag": "cikmis",
            "flag_reason": q.get("flag_reason")
        }
        if stem_embeddings and i < len(stem_embeddings):
            row["stem_embedding"] = stem_embeddings[i]
        if expl_embeddings and i < len(expl_embeddings):
            row["explanation_embedding"] = expl_embeddings[i]
        rows.append(row)

    # 3. 10'arlı chunk'lar halinde Supabase'e yaz
    chunk_size = 10
    total_written = 0
    for chunk_start in range(0, len(rows), chunk_size):
        chunk = rows[chunk_start:chunk_start + chunk_size]
        payload = json.dumps(chunk, ensure_ascii=False).encode("utf-8")
        
        req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
        success = False
        for attempt in range(4):
            try:
                with urllib.request.urlopen(req, timeout=30) as resp:
                    if resp.status in (200, 201):
                        total_written += len(chunk)
                        success = True
                        break
            except Exception as e:
                time.sleep(2 * (attempt + 1))
        
        if not success:
            print(f"   ❌ Chunk yazma başarısız: {chunk_start} - {chunk_start + len(chunk)}")
            return False

    print(f"   💾 {total_written}/{len(questions)} soru Supabase'e başarıyla yazıldı.")
    return True

def main():
    os.makedirs(TARGET_JSON_DIR, exist_ok=True)
    os.makedirs(PROJECT_DATA_DIR, exist_ok=True)

    print("════════════════════════════════════════════════════════════════")
    print(" 🚀 PERİODONTOLOJİ ÇIKMIŞ SORULARI JSON DÖNÜŞTÜRME & AKTARIM")
    print("════════════════════════════════════════════════════════════════\n")

    qs, issues = parse_periodontoloji_file(SOURCE_FILE)
    if issues:
        print(f"❌ Dosya içinde {len(issues)} sorun var!")
        for iss in issues[:20]:
            print(f"   - {iss}")
        return

    qs.sort(key=lambda x: x["q_num"])
    print(f"📦 Toplam ayrıştırılan ve biçimsel doğrulanan soru: {len(qs)}")

    # Soruları kanonik ünitelere göre grupla
    unit_grouped = defaultdict(list)
    for q in qs:
        unit = get_canonical_unit(q)
        q["unit"] = unit
        q["lesson"] = "Periodontoloji"
        q["quality_flag"] = "cikmis"
        unit_grouped[unit].append(q)

    print("\n--- Kanonik Ünite Dağılımı ---")
    for u in CANONICAL_PERIODONTOLOJI_UNITS:
        cnt = len(unit_grouped.get(u, []))
        print(f"  {u}: {cnt} soru")

    # JSON dosyalarını kaydet
    print("\n📂 JSON dosyaları diske yazılıyor...")
    for unit_name, unit_qs in sorted(unit_grouped.items()):
        json_filename = f"Periodontoloji_{sanitize_filename(unit_name)}.json"
        
        # 1. Masaüstü dizinine
        user_path = os.path.join(TARGET_JSON_DIR, json_filename)
        with open(user_path, "w", encoding="utf-8") as fp:
            json.dump(unit_qs, fp, ensure_ascii=False, indent=2)

        # 2. Proje reposuna
        proj_path = os.path.join(PROJECT_DATA_DIR, json_filename)
        with open(proj_path, "w", encoding="utf-8") as fp:
            json.dump(unit_qs, fp, ensure_ascii=False, indent=2)

    # Tüm soruları içeren ana JSON
    with open(os.path.join(TARGET_JSON_DIR, "periodontoloji_tum_cikmis_sorular.json"), "w", encoding="utf-8") as fp:
        json.dump(qs, fp, ensure_ascii=False, indent=2)
    with open(os.path.join(PROJECT_DATA_DIR, "periodontoloji_tum_cikmis_sorular.json"), "w", encoding="utf-8") as fp:
        json.dump(qs, fp, ensure_ascii=False, indent=2)

    print(f"✅ {len(unit_grouped)} ünite JSON dosyası ve özet JSON başarıyla kaydedildi:")
    print(f"   1. {TARGET_JSON_DIR}")
    print(f"   2. {PROJECT_DATA_DIR}")

    # Supabase'e aktarım
    print("\n⚡ Supabase aktarımı başlatılıyor...")
    total_deployed = 0
    for unit_name in CANONICAL_PERIODONTOLOJI_UNITS:
        unit_qs = unit_grouped.get(unit_name, [])
        if not unit_qs:
            continue
        print(f"\n▶ Aktarılıyor: Periodontoloji / {unit_name} ({len(unit_qs)} soru)...")
        ok = deploy_unit_to_supabase(unit_qs, "Periodontoloji", unit_name)
        if not ok:
            print(f"❌ {unit_name} aktarımı sırasında hata oluştu!")
            return
        total_deployed += len(unit_qs)

    print(f"\n🎉 TÜM İŞLEM BAŞARIYLA TAMAMLANDI!")
    print(f"   Toplam Aktarılan Soru Sayısı: {total_deployed} / {len(qs)}")

if __name__ == "__main__":
    main()
