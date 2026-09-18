import urllib.request, json, re, sys

if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

url = "https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=unit&lesson=eq.Restoratif&limit=2000"
headers = {
    "apikey": "sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3",
    "Authorization": "Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3"
}

req = urllib.request.Request(url, headers=headers)
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read())

from collections import Counter
counts = Counter(d.get("unit") for d in data if d.get("unit"))

print("="*60)
print("📊 SUPABASE RESTORATİF DERSİ ÜNİTE BAZLI CANLI SORU SAYILARI")
print("="*60)

for unit, count in sorted(counts.items(), key=lambda x: [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', str(x[0]))]):
    print(f"  • {unit}: {count} soru")

print("-" * 60)
print(f"TOTAL RESTORATİF QUESTIONS IN SUPABASE: {len(data)}")
