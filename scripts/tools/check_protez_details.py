import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent.parent))

import requests
from scripts.config import SUPABASE_URL, SUPABASE_KEY

headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': f'Bearer {SUPABASE_KEY}'
}

r = requests.get(f'{SUPABASE_URL}/rest/v1/questions?select=id,unit,quality_flag,is_favorite&lesson=eq.Protez', headers={**headers, 'Range': '0-999'})
rows = r.json()

cikmis = [q for q in rows if q.get('quality_flag') == 'cikmis']
fav = [q for q in rows if q.get('is_favorite')]
both = [q for q in rows if q.get('quality_flag') == 'cikmis' and q.get('is_favorite')]
neither = [q for q in rows if q.get('quality_flag') != 'cikmis' and not q.get('is_favorite')]

print(f"DB Protez Kalan Soru: {len(rows)}")
print(f"  - quality_flag == cikmis: {len(cikmis)}")
print(f"  - is_favorite == True: {len(fav)}")
print(f"  - Her ikisi: {len(both)}")
print(f"  - Ne çıkmış ne favori: {len(neither)}")

# Hangi ünitelerde kaç tane çıkmış, kaç tane favori var?
print("\nÜnite bazında dağılım:")
unit_stat = {}
for q in rows:
    u = q.get('unit')
    if u not in unit_stat:
        unit_stat[u] = {'cikmis': 0, 'fav': 0, 'total': 0}
    unit_stat[u]['total'] += 1
    if q.get('quality_flag') == 'cikmis':
        unit_stat[u]['cikmis'] += 1
    if q.get('is_favorite'):
        unit_stat[u]['fav'] += 1

for u, s in sorted(unit_stat.items()):
    print(f"  {u}: Toplam={s['total']} (Çıkmış={s['cikmis']}, Favori={s['fav']})")
