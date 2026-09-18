"""
Mikrobiyoloji Anki Kartları İthalat Scripti

C:\\Users\\FURKAN\\Desktop\\Projeler\\gemini soru üretim\\anki üretim klasöründeki
5 txt dosyasında yer alan 566 adet Anki Cloze kartını:
- Not tipi: Cloze-MAXXİNG
- Alan eşlemesi: Text (1. kolon), Başlık (2. kolon), Terimler (3. kolon)
- Desteler: DUS::Mikrobiyoloji::<001-005 Üniteler>
olarak Anki'ye ekler.
"""
import json
import os
import sys
import urllib.request

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

ANKI_CONNECT_URL = "http://127.0.0.1:8765"
INPUT_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\anki üretim"

FILE_DECK_MAP = [
    ("01 - Bakteri Genel Özellikleri.txt", "DUS::Mikrobiyoloji::001 - Bakteri Genel Özellikleri"),
    ("02 - Bakteri Çoğalması Metabolizması.txt", "DUS::Mikrobiyoloji::002 - Bakterilerin Çoğalması ve Metabolizması"),
    ("03 - Aşılar.txt", "DUS::Mikrobiyoloji::003 - Aşılar"),
    ("04 - Mikroorganizmaları Boyama Yöntemleri.txt", "DUS::Mikrobiyoloji::004 - Mikroorganizmaları Boyama Yöntemleri"),
    ("05 - ANTİMİKROBİYALLER.txt", "DUS::Mikrobiyoloji::005 - Antimikrobiyaller"),
]


def invoke_anki(action, **params):
    payload = json.dumps({"action": action, "version": 6, "params": params}).encode("utf-8")
    req = urllib.request.Request(ANKI_CONNECT_URL, data=payload)
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read())
    if res.get("error"):
        raise Exception(f"Anki-Connect Error on {action}: {res['error']}")
    return res["result"]


def create_deck_if_not_exists(deck_name):
    print(f"[*] Deste kontrol ediliyor / olusturuluyor: {deck_name}")
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


def main():
    print("[*] Mikrobiyoloji Anki Kart Ithalati Baslatiliyor...\n")

    # 1. Ana Deste Oluştur
    create_deck_if_not_exists("DUS::Mikrobiyoloji")

    grand_total_cards = 0
    grand_added_cards = 0

    for filename, deck_name in FILE_DECK_MAP:
        filepath = os.path.join(INPUT_DIR, filename)
        if not os.path.exists(filepath):
            print(f"[X] Dosya bulunamadi: {filepath}")
            continue

        # Alt desteyi oluştur
        create_deck_if_not_exists(deck_name)

        parsed_cards = parse_anki_file(filepath)
        grand_total_cards += len(parsed_cards)
        print(f"[+] {filename} -> {len(parsed_cards)} kart okundu.")

        # Anki addNotes için note objelerini hazırla
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

        # Batch olarak addNotes çağır
        if anki_notes:
            results = invoke_anki("addNotes", notes=anki_notes)
            added_count = sum(1 for r in results if r is not None)
            dup_count = sum(1 for r in results if r is None)
            grand_added_cards += added_count
            print(f"    OK: {added_count} kart eklendi ({dup_count} mukerrer atlandi) -> Desteye: [{deck_name}]")

    print("\n" + "=" * 60)
    print(f"ANKI ITHALATI TAMAMLANDI!")
    print(f"   Toplam Okunan Kart: {grand_total_cards}")
    print(f"   Anki'ye Eklenen Kart: {grand_added_cards}")
    print("=" * 60)


if __name__ == "__main__":
    main()
