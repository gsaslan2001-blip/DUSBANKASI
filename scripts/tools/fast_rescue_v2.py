import os
import sys
import json
import time
import urllib.request
import urllib.parse
from pathlib import Path

# --- Modül yolu ---
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from config import SUPABASE_URL, SUPABASE_KEY

# --- Ayarlar ---
if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

PENDING_DIR = Path(os.path.join(os.path.dirname(os.path.dirname(__file__)), "recovery", "pending"))
COMPLETED_DIR = Path(os.path.join(os.path.dirname(os.path.dirname(__file__)), "recovery", "completed"))
COMPLETED_DIR.mkdir(parents=True, exist_ok=True)

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

def _write_chunk(chunk):
    """Tek bir chunk'ı (liste) Supabase'e yollar."""
    url = f"{SUPABASE_URL}/rest/v1/questions"
    payload = json.dumps(chunk, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers=HEADERS, method="POST")
    try:
        with urllib.request.urlopen(req) as r:
            return True, ""
    except Exception as e:
        return False, str(e)

def rescue_file(file_path):
    print(f"\n📂 İşleniyor: {file_path.name}")
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        questions = data.get("questions", [])
        lesson_name = data.get("lesson", "Unknown")
        unit_name = data.get("unit", "Unknown")
        
        # Row'ları hazırla (embedding zaten içinde olmalı, değilse boş kalsın)
        rows = []
        for q in questions:
            opts = q.get("options", {})
            row = {
                "lesson": lesson_name,
                "unit": unit_name,
                "question": q.get("question", ""),
                "option_a": opts.get("A", opts.get("option_a", "")),
                "option_b": opts.get("B", opts.get("option_b", "")),
                "option_c": opts.get("C", opts.get("option_c", "")),
                "option_d": opts.get("D", opts.get("option_d", "")),
                "option_e": opts.get("E", opts.get("option_e", "")),
                "correct_answer": q.get("correctAnswer", q.get("correct_answer", "")),
                "explanation": q.get("explanation", ""),
                "embedding": q.get("embedding", None)
            }
            rows.append(row)

        # Self-Healing Chunked Upload
        base_chunk_size = 5
        idx = 0
        total = len(rows)
        success_count = 0
        
        while idx < total:
            # 5'li dene
            current_chunk = rows[idx:idx + base_chunk_size]
            ok, err = _write_chunk(current_chunk)
            
            if ok:
                success_count += len(current_chunk)
                idx += base_chunk_size
                print(f"  ✅ [{success_count}/{total}] eklendi.", end="\r")
                time.sleep(0.1)
            else:
                # Hata aldıysak 1'li dene (Daha yavaş ama garantili)
                if "500" in err or "502" in err:
                    print(f"\n  ⚠️ Paket hatası ({err}), 1'li moda düşülüyor...")
                    for sub_idx in range(idx, min(idx + base_chunk_size, total)):
                        single_ok, single_err = _write_chunk([rows[sub_idx]])
                        if single_ok:
                            success_count += 1
                            print(f"    ✨ Tekli kurtarıldı: {success_count}/{total}", end="\r")
                        else:
                            print(f"\n    ❌ ERROR: Bu soru kurtarılamadı: {single_err}")
                        time.sleep(0.05)
                    idx += base_chunk_size
                else:
                    print(f"\n  ❌ Kritik Hata: {err}")
                    return False

        print(f"\n  🎉 Başarıyla tamamlandı: {success_count} soru.")
        return True

    except Exception as e:
        print(f"  🛑 Dosya okuma hatası: {e}")
        return False

def main():
    pending_files = sorted(list(PENDING_DIR.glob("*.json")))
    if not pending_files:
        print("🔍 Bekleyen dosya bulunamadı.")
        return

    print(f"🚀 {len(pending_files)} dosya kurtarılacak.")
    
    for f in pending_files:
        if rescue_file(f):
            # Başarılıysa completed klasörüne taşı
            target = COMPLETED_DIR / f.name
            try:
                os.rename(f, target)
                print(f"  📦 Arşivlendi: {f.name}")
            except Exception as e:
                print(f"  ⚠️ Arşivleme hatası: {e}")
        else:
            print(f"  ❌ {f.name} dosyasında bir sorun oluştu.")

if __name__ == "__main__":
    main()
