"""
İmmünoloji Soruları ve Anki Kartları İthalat Scripti

C:\\Users\\FURKAN\\Desktop\\Projeler\\gemini soru üretim\\Çıktı ve anki üretim klasörlerindeki
4 txt dosyasında yer alan:
- 186 Soru -> Supabase (06-09 Üniteler olarak)
- 390 Anki Cloze kartı -> Anki (DUS::Mikrobiyoloji::006-009 Üniteler olarak)
yüklenir.
"""
import json
import os
import re
import sys
import urllib.request

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

ANKI_CONNECT_URL = "http://127.0.0.1:8765"
QUESTIONS_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"
ANKI_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\anki üretim"

FILE_MAPPING = [
    (
        "01 - İMMÜNOLOJİ GİRİŞ.txt",
        "06 - İmmünoloji Giriş",
        "DUS::Mikrobiyoloji::006 - İmmünoloji Giriş",
    ),
    (
        "02 - KOMPLEMAN SİSTEMİ.txt",
        "07 - Kompleman Sistemi",
        "DUS::Mikrobiyoloji::007 - Kompleman Sistemi",
    ),
    (
        "03 - AŞIRI DUYARLILIK REAKSİYONLARI.txt",
        "08 - Aşırı Duyarlılık Reaksiyonları",
        "DUS::Mikrobiyoloji::008 - Aşırı Duyarlılık Reaksiyonları",
    ),
    (
        "04 - İMMÜNOLOJİ VE NEOPLAZİ.txt",
        "09 - İmmünoloji ve Neoplazi",
        "DUS::Mikrobiyoloji::009 - İmmünoloji ve Neoplazi",
    ),
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


def invoke_anki(action, **params):
    payload = json.dumps({"action": action, "version": 6, "params": params}).encode("utf-8")
    req = urllib.request.Request(ANKI_CONNECT_URL, data=payload)
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read())
    if res.get("error"):
        raise Exception(f"Anki-Connect Error on {action}: {res['error']}")
    return res["result"]


def create_deck_if_not_exists(deck_name):
    invoke_anki("createDeck", deck=deck_name)


def parse_anki_file(filepath):
    notes = []
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line_str = line.strip("\n")
            if not line_str.strip() or line_str.startswith("#"):
                continue

            parts = line_str.split("\t")
            if len(parts) >= 2:
                text_col = parts[0].strip()
                title_col = parts[1].strip() if len(parts) >= 2 else ""
                terms_col = parts[2].strip() if len(parts) >= 3 else ""

                notes.append(
                    {
                        "text": text_col,
                        "title": title_col,
                        "terms": terms_col,
                    }
                )
    return notes


def import_to_supabase():
    print("\n══════════════════════════════════════════════════")
    print("1. SUPABASE SORU İTHALATI (Ünite 06 - 09)")
    print("══════════════════════════════════════════════════")
    total_loaded = 0
    total_deployed = 0

    for filename, unit_name, _ in FILE_MAPPING:
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


def import_to_anki():
    print("\n══════════════════════════════════════════════════")
    print("2. ANKI CLOZE KART İTHALATI (Ünite 06 - 09)")
    print("══════════════════════════════════════════════════")

    create_deck_if_not_exists("DUS::Mikrobiyoloji")

    grand_total_cards = 0
    grand_added_cards = 0

    for filename, _, deck_name in FILE_MAPPING:
        filepath = os.path.join(ANKI_DIR, filename)
        if not os.path.exists(filepath):
            print(f"❌ Anki dosyası bulunamadı: {filepath}")
            continue

        create_deck_if_not_exists(deck_name)
        parsed_cards = parse_anki_file(filepath)
        grand_total_cards += len(parsed_cards)
        print(f"\n📁 {filename} -> Deste: [{deck_name}] ({len(parsed_cards)} kart okundu)")

        anki_notes = []
        for c in parsed_cards:
            anki_notes.append(
                {
                    "deckName": deck_name,
                    "modelName": "Cloze-MAXXİNG",
                    "fields": {
                        "Text": c["text"],
                        "Başlık": c["title"],
                        "Terimler": c["terms"],
                    },
                    "options": {
                        "allowDuplicate": False,
                        "duplicateScope": "deck",
                    },
                }
            )

        if anki_notes:
            results = invoke_anki("addNotes", notes=anki_notes)
            added_count = sum(1 for r in results if r is not None)
            dup_count = sum(1 for r in results if r is None)
            grand_added_cards += added_count
            print(f"   ✅ Anki'ye eklendi: {added_count} kart ({dup_count} mükerrer atlandı)")

    print(f"\n Anki İthalat Özeti: {grand_total_cards} kart okundu | {grand_added_cards} kart eklendi.")


def main():
    import_to_supabase()
    import_to_anki()


if __name__ == "__main__":
    main()
