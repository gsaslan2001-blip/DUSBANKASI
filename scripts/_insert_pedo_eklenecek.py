import sys, time, urllib.request, os, glob, re, json
sys.stdout.reconfigure(encoding="utf-8")

URL = "https://vblndoyjmkgaeuihydyd.supabase.co"
KEY = "sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3"
SRC_DIR = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedo soru anki\eklenecek"

files = glob.glob(os.path.join(SRC_DIR, "*.txt"))

rows = []

# This regex finds all 10 fields in order, regardless of commas or brackets.
# It matches "key": "value" patterns.
pattern = re.compile(
    r'"lesson"\s*:\s*"(.*?)"\s*,'
    r'.*?"unit"\s*:\s*"(.*?)"\s*,'
    r'.*?"question"\s*:\s*"(.*?)"\s*,'
    r'.*?"option_a"\s*:\s*"(.*?)"\s*,'
    r'.*?"option_b"\s*:\s*"(.*?)"\s*,'
    r'.*?"option_c"\s*:\s*"(.*?)"\s*,'
    r'.*?"option_d"\s*:\s*"(.*?)"\s*,'
    r'.*?"option_e"\s*:\s*"(.*?)"\s*,'
    r'.*?"correct[A_a]nswer"\s*:\s*"(.*?)"\s*,'
    r'.*?"explanation"\s*:\s*"(.*?)"',
    re.DOTALL
)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Try manual regex parsing first if JSON is broken
    content_fixed = re.sub(r'("\s*:\s*".*?")\s*\n\s*"', r'\1,\n"', content)
    content_fixed = re.sub(r'\}\s*\{', r'}, {', content_fixed)
    
    # Find JSON blocks
    blocks = []
    if "<questions_json>" in content_fixed:
        blocks = re.findall(r'<questions_json>\s*(.*?)\s*</questions_json>', content_fixed, re.DOTALL)
        if not blocks:
            # Fallback if tags are broken
            blocks = re.findall(r'\[\s*\{.*?\}\s*\]', content_fixed, re.DOTALL)
    else:
        blocks = re.findall(r'\[\s*\{.*?\}\s*\]', content_fixed, re.DOTALL)
        
    for block in blocks:
        block = block.strip()
        if not block: continue
        try:
            data = json.loads(block)
            if isinstance(data, list):
                for q in data:
                    rows.append({
                        "lesson": q["lesson"],
                        "unit": q["unit"],
                        "question": q["question"],
                        "option_a": q["option_a"],
                        "option_b": q["option_b"],
                        "option_c": q["option_c"],
                        "option_d": q["option_d"],
                        "option_e": q["option_e"],
                        "correct_answer": q.get("correct_answer") or q.get("correctAnswer"),
                        "explanation": q["explanation"],
                        "flagged": False
                    })
        except json.JSONDecodeError as e:
            print(f"JSON Parse failed for {os.path.basename(file)}, falling back to regex extraction...")
            # Fallback to regex extraction
            matches = re.findall(
                r'"lesson"\s*:\s*"(.*?)".*?'
                r'"unit"\s*:\s*"(.*?)".*?'
                r'"question"\s*:\s*"(.*?)".*?'
                r'"option_a"\s*:\s*"(.*?)".*?'
                r'"option_b"\s*:\s*"(.*?)".*?'
                r'"option_c"\s*:\s*"(.*?)".*?'
                r'"option_d"\s*:\s*"(.*?)".*?'
                r'"option_e"\s*:\s*"(.*?)".*?'
                r'"correct(?:_|A)nswer"\s*:\s*"(.*?)".*?'
                r'"explanation"\s*:\s*"(.*?)"',
                block, re.DOTALL
            )
            for m in matches:
                rows.append({
                    "lesson": m[0].replace('\\"', '"').replace('\\n', '\n'),
                    "unit": m[1].replace('\\"', '"').replace('\\n', '\n'),
                    "question": m[2].replace('\\"', '"').replace('\\n', '\n'),
                    "option_a": m[3].replace('\\"', '"').replace('\\n', '\n'),
                    "option_b": m[4].replace('\\"', '"').replace('\\n', '\n'),
                    "option_c": m[5].replace('\\"', '"').replace('\\n', '\n'),
                    "option_d": m[6].replace('\\"', '"').replace('\\n', '\n'),
                    "option_e": m[7].replace('\\"', '"').replace('\\n', '\n'),
                    "correct_answer": m[8].replace('\\"', '"').replace('\\n', '\n'),
                    "explanation": m[9].replace('\\"', '"').replace('\\n', '\n'),
                    "flagged": False
                })

headers = {
    "apikey": KEY, "Authorization": f"Bearer {KEY}",
    "Content-Type": "application/json", "Prefer": "return=minimal",
}
url = f"{URL}/rest/v1/questions"
CHUNK = 10
written = 0

print(f"Toplam {len(rows)} soru eklenecek...")

for i in range(0, len(rows), CHUNK):
    chunk = rows[i:i+CHUNK]
    payload = json.dumps(chunk, ensure_ascii=False).encode("utf-8")
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
            urllib.request.urlopen(req)
            written += len(chunk)
            print(f"  ✅ {written}/{len(rows)}")
            break
        except urllib.error.HTTPError as e:
            body = e.read().decode(errors="replace")
            print(f"  ❌ HTTP {e.code} (chunk {i}): {body[:300]}")
            if 500 <= e.code < 600 and attempt < 3:
                time.sleep([2,5,12][attempt]); continue
            sys.exit(1)
        except Exception as e:
            print(f"  ❌ {e} (deneme {attempt})")
            if attempt < 3:
                time.sleep([2,5,12][attempt]); continue
            sys.exit(1)

print(f"\n🎉 TOPLAM {written} soru eklendi!")
