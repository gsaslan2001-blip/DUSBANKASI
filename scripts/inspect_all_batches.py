import os, sys, glob, re

sys.path.insert(0, os.path.dirname(__file__))
if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

SRC_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"
files = glob.glob(os.path.join(SRC_DIR, "*.txt"))

print(f"Total files: {len(files)}\n")

for filepath in sorted(files, key=lambda x: [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', os.path.basename(x))]):
    fname = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    kapsam_raporu_count = len(re.findall(r'KAPSAM RAPORU', content, re.IGNORECASE))
    ek_batch_count = len(re.findall(r'EK BATCH', content, re.IGNORECASE))
    open_q_tags = len(re.findall(r'<questions_json[^>]*>', content, re.IGNORECASE))
    close_q_tags = len(re.findall(r'</questions_json[^>]*>', content, re.IGNORECASE))
    open_brackets = len(re.findall(r'\[\s*\{', content))
    question_labels = len(re.findall(r'"question"\s*:', content))
    
    print(f"📄 {fname}:")
    print(f"   - KAPSAM RAPORU sayısı : {kapsam_raporu_count}")
    print(f"   - EK BATCH sayısı      : {ek_batch_count}")
    print(f"   - <questions_json> açılış: {open_q_tags}, kapanış: {close_q_tags}")
    print(f"   - JSON Array [ {{ sayısı: {open_brackets}")
    print(f"   - \"question\": sayısı   : {question_labels}")
    print()
