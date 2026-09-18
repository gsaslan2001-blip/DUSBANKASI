import urllib.request
import json
import sys
from datetime import datetime, timezone

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Content-Type': 'application/json',
    'Prefer': 'return=minimal'
}

# Fetch all Pedodonti question IDs
all_questions = []
offset = 0
step = 1000

while True:
    url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=id&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
    req = urllib.request.Request(url, headers={'apikey': headers['apikey'], 'Authorization': headers['Authorization']})
    with urllib.request.urlopen(req) as resp:
        batch = json.loads(resp.read())
    if not batch:
        break
    all_questions.extend(batch)
    offset += step
    if len(batch) < step:
        break

print(f"Toplam Pedodonti Sorusu: {len(all_questions)}")

now_iso = datetime.now(timezone.utc).isoformat()
ids = [q['id'] for q in all_questions]

chunk_size = 50
total_touched = 0

for i in range(0, len(ids), chunk_size):
    chunk = ids[i:i + chunk_size]
    ids_str = ",".join(str(qid) for qid in chunk)
    url = f"https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?id=in.({ids_str})"
    
    payload = json.dumps({"updated_at": now_iso}).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers=headers, method='PATCH')
    try:
        with urllib.request.urlopen(req) as resp:
            total_touched += len(chunk)
    except Exception as e:
        print(f"❌ HATA (Batch {i}): {e}")

print(f"✅ {total_touched} sorunun updated_at tarihi {now_iso} olarak tazelendi!")
