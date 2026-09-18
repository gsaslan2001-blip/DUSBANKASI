import re, json, glob, os

def parse_question_objects(block_str):
    raw_objects = re.findall(r'\{\s*"lesson"[\s\S]*?\n\s*\}', block_str)
    parsed_qs = []
    for raw in raw_objects:
        # Fix missing comma between fields: e.g. " \n "key": -> ", \n "key":
        cleaned = re.sub(r'("\s*)\n(\s*"(?:correct_answer|explanation|option_[a-e]|question|lesson|unit)")', r'\1,\n\2', raw)
        # Fix trailing comma before }
        cleaned = re.sub(r',\s*\}', '}', cleaned)
        try:
            q = json.loads(cleaned)
            parsed_qs.append(q)
        except Exception as e:
            print("  ❌ Failed object parse:", e, "Raw snippet:", repr(cleaned[:100]))
    return parsed_qs

SRC_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"
files = glob.glob(os.path.join(SRC_DIR, "*.txt"))

total_all = 0
for filepath in sorted(files, key=lambda x: [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', os.path.basename(x))]):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    blocks = re.findall(r'<questions_json>\s*(.*?)\s*</questions_json>', content, re.DOTALL)
    if not blocks:
        blocks = [content]
        
    file_total = 0
    for idx, b in enumerate(blocks):
        try:
            # First try direct json.loads
            qs = json.loads(b.strip())
        except Exception:
            # Fallback to robust object extraction
            qs = parse_question_objects(b)
        file_total += len(qs)
        
    print(f"{filename}: {file_total} questions")
    total_all += file_total

print(f"\n🎉 TOTAL RECOVERED QUESTIONS ACROSS ALL 15 FILES: {total_all}")
