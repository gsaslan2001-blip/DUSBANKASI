import re, json

with open(r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı\17 RESTORATİF DİŞ HEKİMLİĞİNDE KULLANILAN ALETLER VE EKİPMANLAR.txt", "r", encoding="utf-8") as f:
    text = f.read()

blocks = re.findall(r'<questions_json>\s*(.*?)\s*</questions_json>', text, re.DOTALL)
b1 = blocks[0]

raw_objects = re.findall(r'\{\s*"lesson"[\s\S]*?\n\s*\}', b1)
print(f"File 17 Block 1 raw objects count: {len(raw_objects)}")

for i, raw in enumerate(raw_objects):
    try:
        q = json.loads(raw)
    except Exception as e:
        print(f"Object {i+1} failed: {e}")
        lines = raw.split("\n")
        for idx, l in enumerate(lines):
            print(f"  L{idx+1}: {repr(l)}")
