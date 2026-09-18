"""
Mikrobiyoloji Soruları Supabase İthalat Scripti (Sıfır Kayıp / Elemesiz)

C:\\Users\\FURKAN\\Desktop\\Projeler\\gemini soru üretim\\Çıktı klasöründeki
5 txt dosyasında yer alan 241 sorunun TAMAMINI hiçbir eleme, ret veya ölüm maçı
yapmaksızın Supabase veritabanına aktarır.

quality_flag = None olarak kaydedilir (uygulamada görünürlük için).
"""
import json
import os
import re
import sys

# scripts/ klasörünü sys.path'e ekle
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import shared  # noqa: E402

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

INPUT_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"

FILE_UNIT_MAP = [
    ("01 - Bakteri Genel Özellikleri.txt", "01 - Bakteri Genel Özellikleri"),
    ("02 - Bakteri Çoğalması Metabolizması.txt", "02 - Bakterilerin Çoğalması ve Metabolizması"),
    ("03 - Aşılar.txt", "03 - Aşılar"),
    ("04 - Mikroorganizmaları Boyama Yöntemleri.txt", "04 - Mikroorganizmaları Boyama Yöntemleri"),
    ("05 - ANTİMİKROBİYALLER.txt", "05 - Antimikrobiyaller"),
]


def load_all_questions_from_file(filepath: str, unit_name: str) -> list:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Dosyadaki tüm JSON array bloklarını bul
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

        # Fix File 02 Q#21 if option E is empty
        if not opts["E"] and "klorlama" in str(q.get("question", "")).lower():
            opts["E"] = "Entamoeba histolytica kistleri"

        ca = str(q.get("correct_answer") or q.get("correctAnswer") or "").strip().upper()
        stem = str(q.get("question") or q.get("soru") or "").strip()
        expl = str(q.get("explanation") or q.get("aciklama") or "").strip()

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


def main():
    print("🚀 Mikrobiyoloji Soru İthalatı Başlatılıyor (Elemesiz & Tam Kapsam)...")
    total_loaded = 0
    total_deployed = 0

    for filename, unit_name in FILE_UNIT_MAP:
        filepath = os.path.join(INPUT_DIR, filename)
        if not os.path.exists(filepath):
            print(f"❌ Dosya bulunamadı: {filepath}")
            continue

        questions = load_all_questions_from_file(filepath, unit_name)
        total_loaded += len(questions)
        print(f"\n📁 {filename} -> Ünite: '{unit_name}' ({len(questions)} soru okundu)")

        if not questions:
            print("   ⚠️ Soru bulunamadı, atlanıyor.")
            continue

        # Direct write to Supabase (bypassing validator so 0 questions are rejected)
        success = shared._write_to_supabase(questions, "Mikrobiyoloji", unit_name, quality_flag=None)
        if success:
            total_deployed += len(questions)
            print(f"   ✅ Supabase'e eksiksiz yazıldı: {len(questions)} soru")
        else:
            print(f"   ❌ Dağıtım başarısız oldu: {unit_name}")

    print("\n" + "═" * 50)
    print(f"🎉 İTHALAT TAMAMLANDI! Toplam Okunan: {total_loaded} | Supabase'e Eklenen: {total_deployed}")
    print("═" * 50)


if __name__ == "__main__":
    main()
