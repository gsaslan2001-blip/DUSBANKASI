import os, sys, glob, re, json

sys.path.insert(0, os.path.dirname(__file__))
if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

from shared import extract_json

SRC_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"

files = glob.glob(os.path.join(SRC_DIR, "*.txt"))

for filepath in sorted(files, key=lambda x: [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', os.path.basename(x))]):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    blocks = re.findall(r'<questions_json>\s*(.*?)\s*</questions_json>', content, re.DOTALL)
    print(f"=== {filename} ===")
    print(f"  Found {len(blocks)} <questions_json> blocks")
    total_q = 0
    for idx, b in enumerate(blocks):
        res = extract_json(b)
        q_count = len(res) if isinstance(res, list) else 0
        print(f"  Block {idx+1}: {q_count} questions extracted")
        total_q += q_count
    print(f"  Total for file: {total_q}\n")
