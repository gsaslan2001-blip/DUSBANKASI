import urllib.request
import json
import sys
import re
from collections import Counter

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

all_data = []
offset = 0
step = 1000

while True:
    url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=id,unit,updated_at&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        batch = json.loads(resp.read())
    if not batch:
        break
    all_data.extend(batch)
    offset += step
    if len(batch) < step:
        break

counts = Counter(d.get('unit') for d in all_data if d.get('unit'))

print("="*70)
print("📊 CANLI SUPABASE PROBE: PEDODONTİ DERSİ ÜNİTE VE SÜRE KONTROLÜ")
print("="*70)
print(f"Toplam Çekilen Pedodonti Soru Sayısı: {len(all_data)}")
print(f"Toplam Benzersiz Ünite Başlığı Sayısı: {len(counts)}")
print("-" * 70)

def sort_key(item):
    num_match = re.search(r'^\D*(\d+)', item[0])
    return int(num_match.group(1)) if num_match else 999

for unit, count in sorted(counts.items(), key=sort_key):
    print(f"  • {unit}: {count} soru")

print("-" * 70)
print("🕒 Son Güncellenme Zaman Damgası Kontrolü (Örnek İlk 5 Soru):")
for d in all_data[:5]:
    print(f"  - Soru ID {d['id'][:8]}... | Ünite: \"{d['unit']}\" | updated_at: {d['updated_at']}")
