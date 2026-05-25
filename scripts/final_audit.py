import requests
import json

url = "https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions"
headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

def final_audit():
    page_size = 1000
    offset = 0
    non_openai_count = 0
    
    print("[*] Tüm tablo taranıyor (OpenAI 1536 boyutu kontrolü)...")
    
    while True:
        params = {"select": "id,embedding", "limit": page_size, "offset": offset}
        r = requests.get(url, headers=headers, params=params)
        data = r.json()
        if not data or not isinstance(data, list): break
        
        for item in data:
            emb_str = item.get('embedding')
            if not emb_str:
                non_openai_count += 1
                continue
            try:
                emb = json.loads(emb_str)
                if len(emb) != 1536:
                    non_openai_count += 1
            except:
                non_openai_count += 1
                
        offset += page_size
        if offset > 15000: break # Safety break
        print(f"[*] İşlenen: {min(offset, 12215)}...")

    print(f"\n[*] Tarama Tamamlandı.")
    print(f"    - OpenAI (1536) Olmayan Soru Sayısı: {non_openai_count}")

if __name__ == "__main__":
    final_audit()
