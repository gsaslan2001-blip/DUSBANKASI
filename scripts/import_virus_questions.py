"""
Virüs Soruları Supabase İthalat Scripti
Çıktı klasöründeki 6 Virüs ünitesine ait soruları DUSBANKASI Supabase veritabanına aktarır.
"""
import os
import sys
import json
import re

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import shared

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

QUESTIONS_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"

FILE_MAPPING = [
    ("018 - Virüsler Genel Özellikleri.txt", "018 - Virüsler Genel Özellikleri"),
    ("019 - DNA Virüsleri.txt", "019 - DNA Virüsleri"),
    ("020 - RNA Virüsleri.txt", "020 - RNA Virüsleri"),
    ("021 - Hepatit Virüsleri.txt", "021 - Hepatit Virüsleri"),
    ("022 - Retrovirüsler.txt", "022 - Retrovirüsler"),
    ("023 - Gastroenterit.txt", "023 - Gastroenterit Etkeni Virüsler"),
    ("023 - Gastroenterit Etkeni Virüsler.txt", "023 - Gastroenterit Etkeni Virüsler"),
]

def load_questions_from_file(filepath: str, unit_name: str) -> list:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    matches = re.findall(r"\[\s*\{[\s\S]*?\}\s*\]", content)
    raw_questions = []
    for m in matches:
        try:
            qs = json.loads(m)
            raw_questions.extend(qs)
        except Exception as e:
            print(f"   ⚠️ Block parse hatası ({os.path.basename(filepath)}): {e}")

    normalized = []
    for q in raw_questions:
        opts = {}
        for k in ("A", "B", "C", "D", "E"):
            v = q.get(f"option_{k.lower()}")
            if v is None and isinstance(q.get("options"), dict):
                v = q.get("options").get(k) or q.get("options").get(k.lower())
            opts[k] = str(v or "").strip()

        ca = str(q.get("correct_answer") or q.get("correctAnswer") or "").strip().upper()
        stem = str(q.get("question") or q.get("soru") or "").strip()
        expl = str(q.get("explanation") or q.get("aciklama") or "").strip()

        if not stem or not ca or not all(opts.values()):
            continue

        normalized.append(
            {
                "question": stem,
                "options": opts,
                "correctAnswer": ca,
                "explanation": expl,
                "lesson": "Mikrobiyoloji",
                "unit": unit_name,
            }
        )

    return normalized

def import_to_supabase():
    print("\n══════════════════════════════════════════════════")
    print("VİRÜS SORULARI SUPABASE İTHALATI (Ünite 018 - 023)")
    print("══════════════════════════════════════════════════")
    total_loaded = 0
    total_deployed = 0

    for filename, unit_name in FILE_MAPPING:
        filepath = os.path.join(QUESTIONS_DIR, filename)
        if not os.path.exists(filepath):
            print(f"❌ Soru dosyası bulunamadı: {filepath}")
            continue

        questions = load_questions_from_file(filepath, unit_name)
        total_loaded += len(questions)
        print(f"\n📁 {filename} -> Ünite: '{unit_name}' ({len(questions)} soru okundu)")

        if not questions:
            print("   ⚠️ Soru bulunamadı, atlanıyor.")
            continue

        success = shared._write_to_supabase(questions, "Mikrobiyoloji", unit_name, quality_flag=None)
        if success:
            total_deployed += len(questions)
            print(f"   ✅ Supabase'e yazıldı: {len(questions)} soru")
        else:
            print(f"   ❌ Dağıtım başarısız oldu: {unit_name}")

    print(f"\n Supabase İthalat Özeti: {total_loaded} soru okundu | {total_deployed} soru eklendi.")

if __name__ == "__main__":
    import_to_supabase()
