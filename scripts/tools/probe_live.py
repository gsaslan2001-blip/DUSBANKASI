import requests
import time

url = 'https://odusbircanavari.vercel.app'
print(f"Checking {url}...", flush=True)

try:
    r = requests.get(url, timeout=10)
    print(f"Status Code: {r.status_code}", flush=True)
    print(f"Content-Length: {len(r.text)}", flush=True)
    print(f"Server: {r.headers.get('server')}", flush=True)
    print(f"Date: {r.headers.get('date')}", flush=True)
    print(f"Etag / Deploy ID: {r.headers.get('etag') or r.headers.get('x-vercel-id')}", flush=True)
    if r.status_code == 200:
        print("[+] Canlı production ortamı HTTP 200 OK ile aktif!", flush=True)
except Exception as e:
    print(f"Error: {e}", flush=True)
