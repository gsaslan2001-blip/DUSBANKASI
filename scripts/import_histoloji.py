import os
import re
import json
import time
import urllib.request

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

# Eşleştirme tablosu: (Dosya adı içindeki benzersiz anahtar kelime) -> (Anki Deste Adı, Tag Unitesi)
DECK_MAPPING = {
    "Histoloji_Hücre_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::01-Hücre Histolojisi", "hücre"),
    "Histoloji_2epitel_bağ_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::02-Dokular::01-Epitel ve Bağ Dokusu", "epitel_bag"),
    "Histoloji_2yağ_kıkırdak_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::02-Dokular::03-Yağ ve Kıkırdak Dokusu", "yag_kikirdak"),
    "Histoloji_2kan_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::02-Dokular::06-Kan Dokusu", "kan"),
    "Histoloji_3kas_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::03-Kas Dokusu", "kas"),
    "Histoloji_3sinir_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::04-Sinir Dokusu", "sinir"),
    "Histoloji_Sindirim_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::04-Sindirim Histolojisi", "sindirim"),
    "Histoloji_Genel_Embriyoloji_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::05-Genel Embriyoloji", "genel_embriyoloji"),
    "Histoloji_Deri_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::05-Deri Histolojisi", "deri"),
    "Histoloji_Solunum_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::06- Solunum Histolojisi", "solunum"),
    "Histoloji_MSS_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::09-Merkezi Sinir Sistemi", "mss"),
    "Histoloji_Endokrin_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::10-Endokrin", "endokrin"),
    "Histoloji_İmmun_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::11-İmmün Organlar", "immun"),
    "Histoloji_Dolaşım_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::12-Dolaşım", "dolasim"),
    "Histoloji_Genital_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::13-Genital", "genital"),
    "Histoloji_Göz_Kulak_MERGED": ("DUS::🔬 Histoloji & Embriyoloji::14-Göz ve Kulak", "goz_kulak"),
}

def process_file(filepath, filename):
    matched_key = None
    for key in DECK_MAPPING.keys():
        if key in filename:
            matched_key = key
            break
            
    if not matched_key:
        return False
        
    deck_name, tag_suffix = DECK_MAPPING[matched_key]
    tags = ["histoloji", f"histoloji::{tag_suffix}"]
    
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
        return False
        
    if not notes:
        print(f"[{time.strftime('%H:%M:%S')}] ⚠️ {filename} içinde geçerli kart bulunamadı.")
        return True
        
    # Destenin var olduğundan emin ol (yoksa oluşturur)
    anki_request("createDeck", {"deck": deck_name})
        
    res = anki_request("addNotes", {"notes": notes})
    if res:
        added_count = len([x for x in res if x is not None])
        print(f"[{time.strftime('%H:%M:%S')}] ✅ {filename} → {deck_name} (Eklendi: {added_count}/{len(notes)})")
    else:
        print(f"[{time.strftime('%H:%M:%S')}] ❌ {filename} kartları eklenemedi.")
        return False
        
    return True

def run():
    print(f"[{time.strftime('%H:%M:%S')}] 🚀 Histoloji TSV İçe Aktarıcı Başladı.")
    
    state = load_state()
    new_files = 0
    
    if os.path.exists(DIR):
        for f in sorted(os.listdir(DIR)):
            if f.endswith(".tsv") and "Histoloji" in f and "MERGED" in f and f not in state:
                filepath = os.path.join(DIR, f)
                try:
                    success = process_file(filepath, f)
                    if success:
                        state.append(f)
                        save_state(state)
                        new_files += 1
                except Exception as e:
                    print(f"[{time.strftime('%H:%M:%S')}] ❌ Beklenmeyen hata ({f}): {e}")
                    
    print(f"[{time.strftime('%H:%M:%S')}] 🏁 İşlem tamamlandı. Aktarılan yeni dosya sayısı: {new_files}")

if __name__ == "__main__":
    run()
