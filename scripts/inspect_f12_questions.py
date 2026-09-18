import re, json, sys

if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

filepath = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı\12 POSTERİOR İNDİREKT RESTORASYONLAR.txt"

with open(filepath, "r", encoding="utf-8") as f:
    text = f.read()

questions = re.findall(r'"question"\s*:\s*"(.*?)"', text)
print(f"12 POSTERİOR İNDİREKT RESTORASYONLAR.txt dosyasındaki toplam soru sayısı: {len(questions)}\n")

for idx, q in enumerate(questions, 1):
    print(f"{idx:2d}. Soru: {q}")
