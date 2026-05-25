import requests
import json

MISSING_FILE = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\exports\questions_missing_embeddings.json"
url = "https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions"
headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

def verify_missing_ids():
    with open(MISSING_FILE, 'r', encoding='utf-8') as f:
        missing_data = json.load(f)
    
    missing_ids = [item['id'] for item in missing_data]
    print(f"[*] JSON dosyasında {len(missing_ids)} adet 'eksik' soru var.")
    
    # Check these IDs in Supabase in batches of 100
    batch_size = 100
    found_in_supabase = 0
    with_embedding = 0
    
    for i in range(0, len(missing_ids), batch_size):
        batch = missing_ids[i:i+batch_size]
        id_filter = f"in.({','.join(batch)})"
        params = {"select": "id,embedding", "id": id_filter}
        r = requests.get(url, headers=headers, params=params)
        data = r.json()
        
        found_in_supabase += len(data)
        for item in data:
            emb = item.get('embedding')
            if emb and len(str(emb)) > 100:
                with_embedding += 1
                
    print(f"\n[*] Sonuçlar:")
    print(f"    - Supabase'de Bulunan: {found_in_supabase} / {len(missing_ids)}")
    print(f"    - Supabase'de Embedding'i Olan: {with_embedding} / {found_in_supabase}")

if __name__ == "__main__":
    verify_missing_ids()
