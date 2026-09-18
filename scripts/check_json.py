import json
with open(r'C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı\04- GRAM NEGATİF BAKTERİLER.txt', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.findall(r"\[\s*\{[\s\S]*?\}\s*\]", text)
questions = []
for m in matches:
    qs = json.loads(m)
    questions.extend(qs)
print(f"Found {len(questions)} questions")