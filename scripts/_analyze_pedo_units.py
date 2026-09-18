import urllib.request
import json
import sys
import re
from collections import defaultdict, Counter

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

all_data = []
offset = 0
step = 1000
headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

while True:
    url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=unit&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
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

unit_groups = defaultdict(list)

for unit_str, q_count in counts.items():
    # Extract unit number
    m = re.search(r'^(?:Ünite\s+)?(\d+)', unit_str)
    if m:
        num = int(m.group(1))
    else:
        num = 999
    unit_groups[num].append((unit_str, q_count))

print("=== PEDODONTİ ÜNİTELERİNİN NUMARALARINA GÖRE ANALİZİ ===\n")

duplicates = {}
singletons = {}

for num in sorted(unit_groups.keys()):
    items = unit_groups[num]
    if len(items) > 1:
        duplicates[num] = items
    else:
        singletons[num] = items

print(f"Toplam Veritabanındaki Pedodonti Ünite Varyasyonu (Satır): {len(counts)}")
print(f"Tekrar Eden Ünite Numarası Sayısı: {len(duplicates)} grup")
print(f"Tekil Ünite Numarası Sayısı: {len(singletons)} ünite\n")

print("============================================================")
print("📌 TEKRAR EDEN AYNI ÜNİTE NUMARALARI VE ÜNİTE İSİMLERİ")
print("============================================================")
for num, items in sorted(duplicates.items()):
    total_q = sum(c for _, c in items)
    print(f"\n🔹 ÜNİTE {num} (Çakışan {len(items)} Varyasyon - Toplam {total_q} Soru):")
    for u_name, count in sorted(items):
        print(f"   - \"{u_name}\" ({count} soru)")

print("\n" + "="*60)
print("📌 TEKİL KALAN (ÇAKIŞMAYAN) ÜNİTE NUMARALARI VE İSİMLERİ")
print("="*60)
for num, items in sorted(singletons.items()):
    u_name, count = items[0]
    print(f"   • Ünite {num}: \"{u_name}\" ({count} soru)")
