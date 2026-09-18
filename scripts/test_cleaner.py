import re, json, glob, os

def fix_json_object(obj_str):
    lines = obj_str.split("\n")
    cleaned_lines = []
    
    known_keys = ("lesson", "unit", "question", "option_a", "option_b", "option_c", "option_d", "option_e", "correct_answer", "correctAnswer", "explanation")
    
    for i, line in enumerate(lines):
        l_strip = line.strip()
        # Check if line defines a known key
        matched_key = None
        for k in known_keys:
            if l_strip.startswith(f'"{k}":'):
                matched_key = k
                break
                
        if matched_key:
            # Find the position of the opening quote of the value
            colon_idx = line.find(":")
            first_quote = line.find('"', colon_idx)
            if first_quote != -1:
                # Suffix is usually "," or "" at the end of line
                last_quote = line.rfind('"')
                if last_quote > first_quote:
                    prefix = line[:first_quote + 1]
                    suffix = line[last_quote:]
                    val_content = line[first_quote + 1 : last_quote]
                    # Replace internal quotes with single quotes
                    val_clean = val_content.replace('"', "'")
                    line = prefix + val_clean + suffix
                    
        cleaned_lines.append(line)
        
    res_str = "\n".join(cleaned_lines)
    # Fix missing comma between fields: e.g. " \n "key": -> ", \n "key":
    res_str = re.sub(r'("\s*)\n(\s*"(?:correct_answer|correctAnswer|explanation|option_[a-e]|question|lesson|unit)")', r'\1,\n\2', res_str)
    # Fix trailing comma before }
    res_str = re.sub(r',\s*\}', '}', res_str)
    return res_str

def parse_question_objects(block_str):
    # Find all object blocks starting with { and ending with }
    raw_objects = re.findall(r'\{\s*"lesson"[\s\S]*?\n\s*\}', block_str)
    parsed_qs = []
    for raw in raw_objects:
        cleaned = fix_json_object(raw)
        try:
            q = json.loads(cleaned)
            parsed_qs.append(q)
        except Exception as e:
            print(f"  ❌ Failed object parse: {e}")
            print("  Cleaned snippet:", repr(cleaned[:150]))
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
            qs = json.loads(b.strip())
        except Exception:
            qs = parse_question_objects(b)
        file_total += len(qs)
        
    print(f"{filename}: {file_total} questions")
    total_all += file_total

print(f"\n🎉 TOTAL RECOVERED QUESTIONS ACROSS ALL 15 FILES: {total_all}")
