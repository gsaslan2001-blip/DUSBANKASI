import requests
import json

ids = ['67fb7640-cab6-4d97-af42-248a55e99456', 'db5432e8-33a0-4e87-9bd0-c3d7d122f8ec', '9a4830bb-e4cb-4318-a5d6-03f129821f73', '3b2d5859-d57b-479f-a127-13f41b59fec7', '816a62e8-0261-4753-b830-06cb14114354']
url = f"https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=id,embedding,flagged&id=in.({','.join(ids)})"
headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

r = requests.get(url, headers=headers)
data = r.json()

print(f"Found {len(data)} rows in Supabase for the 5 sample IDs.")
for item in data:
    emb = item.get('embedding')
    flagged = item.get('flagged')
    print(f"ID: {item['id']}, Flagged: {flagged}, Embedding Type: {type(emb)}, Length: {len(emb) if emb else 0}")
