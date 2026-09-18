"""
DUSBANKASI — Gemini Anatomi Çıktılarını Supabase'e Aktarma Scripti (v2)

C:\\Users\\FURKAN\\Desktop\\Projeler\\gemini soru üretim\\Çıktı klasöründeki
10 Anatomi çıktı dosyasını okur, DUSBANKASI kanonik şemasına dönüştürür,
kalite kapısından geçirir ve Supabase'e yazar.

Eleme / Ölüm maçı çalıştırılmaz.
"""

import os
import re
import json
import sys
from collections import defaultdict

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import shared
import add_questions

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

OUTPUT_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"
LESSON_NAME = "Anatomi"

UNIT_MAP = {
    "1 KEMİKLER": "1. Ünite - Kemikler",
    "2 EKLEMLER": "2. Ünite - Eklemler",
    "3 KASLAR": "3. Ünite - Kaslar",
    "4 PLEKSUSLAR": "4. Ünite - Pleksuslar",
    "5 SOLUNUM SİSTEMİ": "5. Ünite - Solunum Sistemi",
    "6 DOLAŞIM SİSTEMİ": "6. Ünite - Dolaşım Sistemi",
    "7 SİNDİRİM SİSTEMİ": "7. Ünite - Sindirim Sistemi",
    "8 MERKEZİ SİNİR SİSTEMİ": "8. Ünite - Merkezi Sinir Sistemi",
    "9 PERİFERİK SİNİR SİSTEMİ VE KRANİYAL SİNİRLER": "9. Ünite - Periferik Sinir Sistemi ve Kraniyal Sinirler",
    "10 DUYU ORGANLARI": "10. Ünite - Duyu Organları",
}


def load_all_questions(out_dir: str) -> dict:
    files = sorted(os.listdir(out_dir))
    grouped = defaultdict(list)

    for fname in files:
        if not fname.endswith(".txt") and not fname.endswith(".json"):
            continue
        fpath = os.path.join(out_dir, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            text = f.read()

        blocks = re.findall(r'<questions_json>\s*([\s\S]*?)(?:</questions_json>|(?=<[a-z_]+>)|$)', text)
        if not blocks:
            blocks = re.findall(r'\[\s*\{[\s\S]*?\}\s*\]', text)

        raw_items = []
        for b in blocks:
            b_clean = re.sub(r',\s*([\]}])', r'\1', b.strip())
            try:
                items = json.loads(b_clean)
                if isinstance(items, list):
                    raw_items.extend(items)
            except Exception as e:
                print(f"⚠️ {fname} içinde JSON parse uyarısı: {e}")

        for item in raw_items:
            norm = add_questions._normalize_one(item)
            norm["lesson"] = LESSON_NAME
            raw_unit = norm.get("unit") or ""
            target_unit = UNIT_MAP.get(raw_unit, raw_unit)
            norm["unit"] = target_unit
            grouped[target_unit].append(norm)

    return grouped


def main():
    print("🚀 Gemini Anatomi Çıktıları Supabase İthalat İşlemi Başlatılıyor...")
    print(f"📁 Kaynak Klasör: {OUTPUT_DIR}")
    print(f"📚 Ders: {LESSON_NAME}\n")

    grouped_questions = load_all_questions(OUTPUT_DIR)
    total_loaded = sum(len(qs) for qs in grouped_questions.values())
    print(f"📊 Toplam Yüklenen Soru Sayısı: {total_loaded} ({len(grouped_questions)} ünite)\n")

    grand_accepted = 0
    grand_rejected = 0

    for unit_name, questions in sorted(grouped_questions.items()):
        print(f"── 📖 {LESSON_NAME} / {unit_name} ({len(questions)} soru) ──")
        accepted, rejected = shared.validate_question_batch(questions, LESSON_NAME, unit_name)
        
        grand_accepted += len(accepted)
        grand_rejected += len(rejected)

        print(f"   🔎 Kalite Gate: {len(accepted)} kabul, {len(rejected)} ret")

        if rejected:
            for rej_item in rejected:
                reason = rej_item.get("reason", "bilinmeyen")
                q_obj = rej_item.get("question", {})
                stem = q_obj.get("question", "")[:60] if isinstance(q_obj, dict) else str(q_obj)[:60]
                print(f"      ❌ Reddedildi [{reason}]: {stem}...")

        if accepted:
            print(f"   💾 Supabase'e yazılıyor ({len(accepted)} soru + embedding)...")
            checkpoint_path = shared.save_checkpoint(accepted, LESSON_NAME, unit_name)
            success = shared._write_to_supabase(accepted, LESSON_NAME, unit_name)
            if success:
                if checkpoint_path:
                    shared.clear_checkpoint(checkpoint_path)
                print(f"   🎉 {unit_name} TAMAMLANDI!\n")
            else:
                print(f"   ❌ {unit_name} Supabase yazma hatası!\n")
        else:
            print("   ⚠️ Kabul edilen soru yok, bu ünite atlandı.\n")

    print("═══════════════════════════════════════════════")
    print("🏆 TÜM İTHALAT TAMAMLANDI!")
    print(f"   Toplam İşlenen : {total_loaded}")
    print(f"   Kabul Edilen  : {grand_accepted}")
    print(f"   Reddedilen    : {grand_rejected}")
    print("═══════════════════════════════════════════════")


if __name__ == "__main__":
    main()
