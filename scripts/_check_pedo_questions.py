import sys, os, glob, re, json
sys.path.insert(0, r"c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts")
sys.stdout.reconfigure(encoding="utf-8")
from shared import extract_json

src_dir = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedo soru anki\eklenecek"
files = glob.glob(os.path.join(src_dir, "*.txt"))

questions = []

for f in files:
    filename = os.path.basename(f)
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
    
    parsed = None
    try:
        parsed = json.loads(content)
    except Exception:
        blocks = re.findall(r'<questions_json>\s*(.*?)\s*</questions_json>', content, re.DOTALL)
        if not blocks:
            blocks = re.findall(r'\[\s*\{.*?\}\s*\]', content, re.DOTALL)
        
        parsed_list = []
        for b in blocks:
            res = extract_json(b)
            if res and isinstance(res, list):
                parsed_list.extend(res)
        parsed = parsed_list

    if isinstance(parsed, list):
        for q in parsed:
            ca = q.get("correct_answer") or q.get("correctAnswer") or q.get("correct_option")
            if ca:
                ca = str(ca).strip().upper()
                if ca.startswith("OPTION_"):
                    ca = ca.replace("OPTION_", "")
                if ca in ("A", "B", "C", "D", "E"):
                    q["correct_answer"] = ca
            
            keys = ["lesson", "unit", "question", "option_a", "option_b", "option_c", "option_d", "option_e", "correct_answer", "explanation"]
            valid = True
            for k in keys:
                if not q.get(k) or not str(q.get(k)).strip():
                    valid = False
                    break
            if valid:
                questions.append({
                    "lesson": str(q["lesson"]).strip(),
                    "unit": str(q["unit"]).strip(),
                    "question": str(q["question"]).strip(),
                    "option_a": str(q["option_a"]).strip(),
                    "option_b": str(q["option_b"]).strip(),
                    "option_c": str(q["option_c"]).strip(),
                    "option_d": str(q["option_d"]).strip(),
                    "option_e": str(q["option_e"]).strip(),
                    "correct_answer": str(q["correct_answer"]).strip(),
                    "explanation": str(q["explanation"]).strip(),
                    "flagged": False
                })
            else:
                q_summary = str(q.get("question", ""))[:40]
                print(f"⚠️ Eksik alanlı soru ({filename}): {q_summary}...")

print(f"\nGeçerli Soru Sayısı: {len(questions)}")

units = {}
for q in questions:
    u = q["unit"]
    units[u] = units.get(u, 0) + 1

print("\nÜnite Dağılımı:")
for u, c in sorted(units.items()):
    print(f"  - {u}: {c} soru")
