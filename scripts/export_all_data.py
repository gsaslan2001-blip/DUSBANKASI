import json
import os
import urllib.request
import urllib.parse
import sys

# Proje dizinini path'e ekle (config'i bulabilmesi için)
sys.path.append(os.path.join(os.path.dirname(__file__), ".."))
from scripts.config import SUPABASE_URL, SUPABASE_KEY

def fetch_all_from_table(table_name):
    print(f"Downloading {table_name}...")
    all_data = []
    offset = 0
    limit = 100  # Reduced to avoid HTTP 500 on vector columns
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}"
    }

    while True:
        # URL encode table name just in case
        url = f"{SUPABASE_URL}/rest/v1/{table_name}?select=*&limit={limit}&offset={offset}"
        req = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read())
                all_data.extend(data)
                print(f"  Fetched {len(all_data)} rows...")
                if len(data) < limit:
                    break
                offset += limit
        except Exception as e:
            print(f"Error fetching {table_name}: {e}")
            break
    return all_data

def export_to_json():
    tables = ["questions", "question_stats", "reference_sources", "active_sessions"]
    export_dir = os.path.join(os.getcwd(), "exports")
    os.makedirs(export_dir, exist_ok=True)

    for table in tables:
        data = fetch_all_from_table(table)
        file_path = os.path.join(export_dir, f"{table}_backup.json")
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"✅ Saved to {file_path}")

if __name__ == "__main__":
    if sys.platform == "win32":
        try:
            import codecs
            sys.stdout.reconfigure(encoding='utf-8')
        except:
            pass
    export_to_json()
