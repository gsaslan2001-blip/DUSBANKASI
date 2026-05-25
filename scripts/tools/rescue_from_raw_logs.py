import os
import sys
import json
import re
import time
import urllib.request
from pathlib import Path

# --- Modül yolu ---
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from config import SUPABASE_URL, SUPABASE_KEY

# --- Ayarlar ---
LOG_DIR = Path(r"c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\logs\Yeni klasör")
COMPLETED_LOGS_DIR = LOG_DIR / "rescued"
COMPLETED_LOGS_DIR.mkdir(exist_ok=True)

HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

def _write_chunk(chunk):
    url = f"{SUPABASE_URL}/rest/v1/questions"
    payload = json.dumps(chunk, ensure_ascii=False).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers=HEADERS, method="POST")
    try:
        with urllib.request.urlopen(req) as r:
            return True, ""
    except Exception as e:
        return False, str(e)

def extract_json_from_log(file_path):
    """Log dosyası içindeki JSON bloğunu bulur ve parse eder."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # JSON bloğunu bul (```json ... ``` veya [ ... ])
    match = re.search(r"```json\s*(\[.*?\])\s*```", content, re.DOTALL)
    if not match:
        match = re.search(r"(\[.*\])", content, re.DOTALL)
    
    if match:
        try:
            return json.loads(match.group(1))
        except:
            return None
    return None

def rescue_log_file(file_path):
    print(f"\n📂 Ayıklanıyor: {file_path.name}")
    questions = extract_json_from_log(file_path)
    if not questions:
        print("  ❌ JSON bulunamadı veya parse edilemedi.")
        return False

    # Tüm soruları "Fizyoloji" dersine sabitle
    rows = []
    for q in questions:
        opts = q.get("options", {})
        row = {
            "lesson": "Fizyoloji", # Kullanıcı isteği üzerine sabitlendi
            "unit": q.get("unit", "Fizyoloji Ünite"),
            "question": q.get("question", ""),
            "option_a": opts.get("A", ""),
            "option_b": opts.get("B", ""),
            "option_c": opts.get("C", ""),
            "option_d": opts.get("D", ""),
            "option_e": opts.get("E", ""),
            "correct_answer": q.get("correctAnswer", ""),
            "explanation": q.get("explanation", ""),
            "embedding": q.get("embedding", None)
        }
        rows.append(row)

    # Self-healing upload (5 -> 1)
    idx = 0
    total = len(rows)
    success_count = 0
    chunk_size = 5
    
    while idx < total:
        chunk = rows[idx:idx + chunk_size]
        ok, err = _write_chunk(chunk)
        if ok:
            success_count += len(chunk)
            idx += chunk_size
            print(f"  ✅ [{success_count}/{total}] eklendi.", end="\r")
        else:
            print(f"\n  ⚠️ 5'li hata ({err}), tekli moda geçiliyor...")
            for s_idx in range(idx, min(idx + chunk_size, total)):
                s_ok, s_err = _write_chunk([rows[s_idx]])
                if s_ok:
                    success_count += 1
                else:
                    print(f"\n    ❌ Soru atlandı: {s_err}")
                time.sleep(0.1)
            idx += chunk_size
    
    print(f"\n  🎉 Toplam {success_count} soru Fizyoloji altına eklendi.")
    return True

def main():
    log_files = list(LOG_DIR.glob("exhaust_*.txt"))
    if not log_files:
        print("🔍 İşlenecek exhaust logu bulunamadı.")
        return

    print(f"🚀 {len(log_files)} ham log dosyası kurtarılacak.")
    for f in log_files:
        if rescue_log_file(f):
            # Taşı
            target = COMPLETED_LOGS_DIR / f.name
            try: os.rename(f, target)
            except: pass

if __name__ == "__main__":
    main()
