import urllib.request
import urllib.parse
import json
import sys
from collections import Counter

sys.stdout.reconfigure(encoding='utf-8')

# Supabase Auth
API_KEY = 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
BASE_URL = 'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions'

all_questions = []
offset = 0
limit = 500

print("\n" + "="*50)
print("🔍 FİZYOLOJİ ÜNİTE DERİN ANALİZ (FULL SCAN)")
print("="*50 + "\n")

lesson_encoded = urllib.parse.quote("Fizyoloji")

while True:
    # Supabase pagination requires range-header or &limit=&offset
    url = f"{BASE_URL}?lesson=eq.{lesson_encoded}&select=unit,question&offset={offset}&limit={limit}"
    
    headers = {
        'apikey': API_KEY,
        'Authorization': f'Bearer {API_KEY}'
    }

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if not data:
                break
            all_questions.extend(data)
            print(f"  📥 {len(all_questions)} soru tarandı...", end="\r")
            
            if len(data) < limit:
                break
            offset += limit
            
    except Exception as e:
        print(f"\nHata: {e}")
        break

print(f"\n\n✅ Toplam Taranan Soru: {len(all_questions)}\n")

# 1. Ünite Dağılımı
units = [item.get('unit', 'Bilinmiyor') for item in all_questions]
counts = Counter(units)

print("--- ÜNİTE DAĞILIMI ---")
for unit, count in counts.most_common():
    print(f"🔹 {unit}: {count} Soru")

# 2. Böbrek Ünitesindeki Solunum Sorusu Tespiti
kidney_variants = ["Böbrek Fizyolojisi", "böbrek fizyolojisi", "Böbrek", "böbrek"]
resp_keywords = ["solunum", "akciğer", "ventilasyon", "alveol", "bronş", "oksijen", "karbondioksit", "pnomo", "surfaktan", "fick", "boyle"]

mixed_questions = []
for q in all_questions:
    u = q.get('unit', '')
    if u in kidney_variants:
        text = q.get('question', '').lower()
        for kw in resp_keywords:
            if kw in text:
                mixed_questions.append({"id_preview": text[:50], "kw": kw})
                break

print(f"\n⚠️ Böbrek ünitesine karıştığı tespit edilen (Solunum temalı) soru sayısı: {len(mixed_questions)}")
if mixed_hits := mixed_questions[:5]:
    print("   Örnekler:")
    for m in mixed_hits:
        print(f"   - [{m['kw']}] {m['id_preview']}...")

print("\n" + "="*50)
print("📊 Analiz Tamamlandı.")
print("="*50)
