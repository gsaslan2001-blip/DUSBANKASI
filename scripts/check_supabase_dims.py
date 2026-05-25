import requests
import json

url = "https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions"
headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

def check_dimensions():
    page_size = 1000
    offset = 0
    dims = {}
    
    print("[*] Supabase embedding boyutları kontrol ediliyor...")
    
    while offset < 5000: # Check first 5000
        params = {
            "select": "embedding",
            "limit": page_size,
            "offset": offset
        }
        r = requests.get(url, headers=headers, params=params)
        data = r.json()
        if not data: break
        
        for item in data:
            emb_str = item.get('embedding')
            if emb_str:
                try:
                    emb = json.loads(emb_str)
                    d = len(emb)
                    dims[d] = dims.get(d, 0) + 1
                except:
                    dims["invalid"] = dims.get("invalid", 0) + 1
            else:
                dims["none"] = dims.get("none", 0) + 1
        
        offset += page_size
        print(f"[*] İşlenen: {offset}...")
        
    print(f"\n[*] Boyut Dağılımı: {dims}")

if __name__ == "__main__":
    check_dimensions()
