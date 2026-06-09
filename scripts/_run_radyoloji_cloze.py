import os
import subprocess
import sys
import re
import json

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

base_dir = r"C:\Users\FURKAN\Desktop\DUS\Radyoloji\Radyoloji Ünite PDF"
log_file = os.path.join(os.path.dirname(__file__), "logs", "radyoloji_cloze_progress.json")

def load_progress():
    if os.path.exists(log_file):
        try:
            with open(log_file, "r", encoding="utf-8") as f:
                return set(json.load(f).get("completed", []))
        except Exception:
            pass
    return set()

def save_progress(completed_set):
    os.makedirs(os.path.dirname(log_file), exist_ok=True)
    with open(log_file, "w", encoding="utf-8") as f:
        json.dump({"completed": list(completed_set)}, f, ensure_ascii=False, indent=2)

def natural_sort_key(s):
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', s)]

def main():
    print("============================================================")
    print(" Radyoloji Cloze Kart Üretimi Başlatılıyor")
    print("============================================================")

    # Doğal sıralama ile dosyaları çek
    files = [f for f in os.listdir(base_dir) if f.endswith('.pdf')]
    files.sort(key=natural_sort_key)
    
    completed = load_progress()
    
    env = os.environ.copy()
    env["PYTHONUTF8"] = "1"

    total = len(files)
    
    for i, f in enumerate(files, 1):
        if f in completed:
            print(f"[{i}/{total}] ATLANDI (Zaten Tamamlandı): {f}")
            continue
            
        full_path = os.path.join(base_dir, f)
        print(f"\n============================================================")
        print(f">>> [{i}/{total}] Başlıyor: {f}")
        print(f"============================================================\n")
        
        # notebooklm_mcp_cloze.py scriptini çalıştır
        result = subprocess.run(
            [sys.executable, "-u", "scripts/notebooklm_mcp_cloze.py", "--file", full_path, "--lesson", "Radyoloji"],
            env=env
        )
        
        if result.returncode == 0:
            print(f"\n[OK] Basariyla tamamlandi: {f}")
            completed.add(f)
            save_progress(completed)
        else:
            print(f"\n[HATA] Uretim basarisiz oldu: {f} (Hata Kodu: {result.returncode})")
            print("Uretim durduruluyor. Devam etmek icin scripti tekrar calistirabilirsiniz.")
            sys.exit(1)

    print("\n[TAMAM] Tum Radyoloji uniteleri basariyla tamamlandi!")

if __name__ == "__main__":
    main()
