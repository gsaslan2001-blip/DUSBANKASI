import os
import sys
import urllib.request
import json

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
_PROJECT_DIR = os.path.abspath(os.path.join(_SCRIPT_DIR, ".."))
if _PROJECT_DIR not in sys.path:
    sys.path.insert(0, _PROJECT_DIR)

import config

def main():
    url = f"{config.SUPABASE_URL}/rest/v1/questions?select=id,unit,quality_flag&lesson=eq.Cerrahi&quality_flag=eq.cikmis"
    req = urllib.request.Request(url, headers={
        "apikey": config.SUPABASE_KEY,
        "Authorization": f"Bearer {config.SUPABASE_KEY}"
    })
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        print(f"Mevcut Cerrahi cikmis soru sayisi: {len(data)}")
    except Exception as e:
        print(f"Hata: {e}")

if __name__ == "__main__":
    main()
