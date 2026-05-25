import requests
import json
import math

url = "https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions"
headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

def audit():
    page_size = 1000
    offset = 0
    missing_ids = []
    total_processed = 0
    
    print("[*] Supabase questions tablosu taranıyor (flagged=false)...")
    
    while True:
        # Fetching in batches
        params = {
            "select": "id,embedding",
            "flagged": "eq.false",
            "limit": page_size,
            "offset": offset,
            "order": "id"
        }
        r = requests.get(url, headers=headers, params=params)
        if r.status_code != 200:
            print(f"[!] Hata: {r.status_code} - {r.text}")
            break
            
        data = r.json()
        if not data:
            break
            
        for item in data:
            total_processed += 1
            emb = item.get('embedding')
            is_valid = False
            
            if emb and isinstance(emb, str) and len(emb) > 1000:
                try:
                    # Quick check: does it look like a JSON array?
                    if emb.startswith('[') and emb.endswith(']'):
                        is_valid = True
                except:
                    pass
            
            if not is_valid:
                missing_ids.append(item['id'])
                
        offset += page_size
        print(f"[*] İşlenen: {total_processed}...")
        
    print(f"\n[*] Tarama Tamamlandı.")
    print(f"    - Toplam İncelenen: {total_processed}")
    print(f"    - Embedding'i Sorunlu/Eksik: {len(missing_ids)}")
    
    if missing_ids:
        with open("problematic_ids.json", "w") as f:
            json.dump(missing_ids, f)
        print(f"    - Sorunlu ID'ler 'problematic_ids.json' dosyasına kaydedildi.")
        if len(missing_ids) < 10:
            print(f"    - Örnek ID'ler: {missing_ids}")
    else:
        print("    - Tüm soruların geçerli görünümlü embedding'leri var.")

if __name__ == "__main__":
    audit()
