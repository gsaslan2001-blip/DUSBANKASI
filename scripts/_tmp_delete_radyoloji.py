import sys
import urllib.request
sys.path.insert(0, 'scripts')
import shared

url = f"{shared.SUPABASE_URL}/rest/v1/questions?lesson=eq.Radyoloji&unit=eq.Travma"
# URL encode unit=eq.Travma might not be needed, but let's be safe:
# Travma is just ascii, so it's fine.
req = urllib.request.Request(url, method='DELETE')
req.add_header('apikey', shared.SUPABASE_KEY)
req.add_header('Authorization', f'Bearer {shared.SUPABASE_KEY}')

try:
    with urllib.request.urlopen(req) as resp:
        print("Delete response:", resp.status)
except Exception as e:
    print("Error:", e)
