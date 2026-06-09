import os
import re
import json
import time
import urllib.request
import argparse

DIR = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\cloze_output"
STATE_FILE = os.path.join(DIR, "imported_tsvs.json")

def load_state():
    if os.path.exists(STATE_FILE):
        try:
            with open(STATE_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []
    return []

def save_state(state):
    with open(STATE_FILE, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False)

def anki_request(action, params):
    payload = {"action": action, "version": 6, "params": params}
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request("http://127.0.0.1:8765", data=data, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req) as resp:
        res = json.loads(resp.read().decode())
        if res.get("error"):
            print(f"Anki error ({action}): {res['error']}")
        return res.get("result")

def find_unit_number(lesson, unit_name):
    base_dus_dir = r"C:\Users\FURKAN\Desktop\DUS"
    if not os.path.exists(base_dus_dir):
        return 1
    
    def clean_str(s):
        translation_table = str.maketrans("ııııööüüşşççğğ", "iiiiouussccegg")
        s = s.translate(translation_table)
        return re.sub(r'[^\w]', '', s.lower())

    clean_unit = clean_str(unit_name)
    
    for root, dirs, files in os.walk(base_dus_dir):
        rel = os.path.relpath(root, base_dus_dir).lower()
        if lesson.lower() not in rel and "protez" not in rel:
            continue
            
        for f in files:
            if f.lower().endswith((".pdf", ".md")):
                clean_f = clean_str(f)
                if clean_unit in clean_f:
                    m = re.match(r'^(\d+)', f)
                    if m:
                        return int(m.group(1))
                    m2 = re.search(r'nite\s*(\d+)', f.lower().replace("ü", "u").replace("ö", "o").replace("ş", "s").replace("ç", "c").replace("ğ", "g"))
                    if m2:
                        return int(m2.group(1))
    return 1

def process_file(filepath):
    filename = os.path.basename(filepath)
    # Örnek: Ortodonti_Ünite_2_-_DENTAL_YAPILARIN_GELİŞİMİ_MERGED_20260604_011649.tsv
    # Using generic matcher to avoid encoding issues with Ü
    m = re.match(r'(.*?)_nite_(\d+)_-_(.*?)_MERGED_.*?\.tsv', filename.replace("Ünite", "nite").replace("ünite", "nite"), re.IGNORECASE)
    if m:
        lesson = m.group(1).replace("_", " ").strip()
        unit_num = int(m.group(2))
        unit_name = m.group(3).replace("_", " ").strip()
    else:
        # Alternatif eşleşme: Ders_ÜniteAdı_MERGED_Tarih.tsv
        m2 = re.match(r'(.*?)_(.*?)_MERGED_.*?\.tsv', filename, re.IGNORECASE)
        if not m2:
            return False, None
        lesson = m2.group(1).replace("_", " ").strip()
        raw_unit_name = m2.group(2)
        unit_name = raw_unit_name.replace("_", " ").strip()
        unit_num = find_unit_number(lesson, raw_unit_name)
    
    # Hedef deck formatı: DUS::🧲 Ortodonti::002-DENTAL YAPILARIN GELİŞİMİ
    deck_name = f"DUS::🧲 {lesson}::{unit_num:03d}-{unit_name}"
    
    # Hedef tags formatı: ortodonti, ortodonti::ankraj
    tag_lesson = lesson.lower()
    tag_unit = unit_name.lower().replace(" ", "_")
    tags = [tag_lesson, f"{tag_lesson}::{tag_unit}"]
    
    notes = []
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or line.startswith("Kart sayısı:"):
                    continue
                
                parts = line.split("\t")
                text = parts[0].strip() if len(parts) > 0 else ""
                baslik = parts[1].strip() if len(parts) > 1 else ""
                extra = parts[2].strip() if len(parts) > 2 else ""
                
                if not text:
                    continue
                    
                notes.append({
                    "deckName": deck_name,
                    "modelName": "Cloze-MAXXİNG",
                    "fields": {
                        "Text": text,
                        "Başlık": baslik,
                        "Terimler": extra
                    },
                    "tags": tags,
                    "options": {
                        "allowDuplicate": False,
                        "duplicateScope": "deck"
                    }
                })
    except Exception as e:
        print(f"[{time.strftime('%H:%M:%S')}] ❌ Dosya okunurken hata {filename}: {e}")
        return False, unit_num
        
    if not notes:
        print(f"[{time.strftime('%H:%M:%S')}] ⚠️ {filename} içinde geçerli kart bulunamadı.")
        return True, unit_num # Boşsa da işlendi sayabiliriz
        
    # Destenin var olduğundan emin ol (yoksa oluşturur)
    anki_request("createDeck", {"deck": deck_name})
        
    res = anki_request("addNotes", {"notes": notes})
    if res:
        added_count = len([x for x in res if x is not None])
        print(f"[{time.strftime('%H:%M:%S')}] ✅ {filename} → {deck_name} (Eklendi: {added_count}/{len(notes)})")
    else:
        print(f"[{time.strftime('%H:%M:%S')}] ❌ {filename} kartları eklenemedi.")
        return False, unit_num
        
    return True, unit_num

def run():
    parser = argparse.ArgumentParser(description="Anki TSV Otomatik Yükleyici")
    parser.add_argument("--last-unit", type=int, default=21, help="İşlem tamamlandığında scripti sonlandıracak son ünite numarası")
    args = parser.parse_args()

    print(f"[{time.strftime('%H:%M:%S')}] 🚀 Anki Otomatik Yükleyici Başladı. (10 dakikada bir kontrol edilecek)")
    print(f"[{time.strftime('%H:%M:%S')}] 🛑 Ünite {args.last_unit} başarıyla eklendiğinde script kendini durduracak.")
    
    while True:
        state = load_state()
        new_files = 0
        last_unit_reached = False
        
        if os.path.exists(DIR):
            for f in sorted(os.listdir(DIR)):
                if f.endswith(".tsv") and "_MERGED_" in f and f not in state:
                    filepath = os.path.join(DIR, f)
                    try:
                        success, unit_num = process_file(filepath)
                        if success:
                            state.append(f)
                            save_state(state)
                            new_files += 1
                            if unit_num == args.last_unit:
                                last_unit_reached = True
                    except Exception as e:
                        print(f"[{time.strftime('%H:%M:%S')}] ❌ Beklenmeyen hata ({f}): {e}")
        
        if last_unit_reached:
            print(f"[{time.strftime('%H:%M:%S')}] 🏁 Son ünite ({args.last_unit}) başarıyla eklendi. Yükleyici görevi tamamlandı ve sonlanıyor.")
            break

        # 10 dakika (600 saniye) bekle
        time.sleep(600)

if __name__ == "__main__":
    run()
