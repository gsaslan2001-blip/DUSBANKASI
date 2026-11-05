import requests
import re

r = requests.get('https://odusbircanavari.vercel.app')
html = r.text
print('HTML length:', len(html))

scripts = re.findall(r'src=["\']([^"\']+)["\']', html)
print('Script sources:', scripts)

for s in scripts:
    js_url = 'https://odusbircanavari.vercel.app' + s if s.startswith('/') else s
    js_res = requests.get(js_url)
    print(f"\nChecking {js_url} (size {len(js_res.text)}):")
    if '2026-10-27' in js_res.text:
        print("  -> BULDUM: 2026-10-27 MEVCUT!")
    if '2026-11-01' in js_res.text:
        print("  -> DİKKAT: 2026-11-01 HALA MEVCUT (ESKİ SÜRÜM)!")
    dates = set(re.findall(r'202[0-9]-[0-9]{2}-[0-9]{2}', js_res.text))
    print(f"  -> Bulunan tarihler: {dates}")
