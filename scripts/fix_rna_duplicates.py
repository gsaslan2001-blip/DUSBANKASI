import sys
import os
import json
import urllib.request
from collections import defaultdict

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

from config import SUPABASE_URL, SUPABASE_KEY

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

def fix_duplicates():
    # 020 - RNA Virüsleri altındaki tüm soruları al
    url = f"{SUPABASE_URL}/rest/v1/questions?select=id,question,created_at&lesson=eq.Mikrobiyoloji&unit=eq.020%20-%20RNA%20Vir%C3%BCsleri"
    req = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
    res = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
    
    print(f"020 - RNA Virüsleri DB Toplam Satır: {len(res)}")
    
    groups = defaultdict(list)
    for q in res:
        groups[q['question'].strip()].append(q)
        
    to_delete = []
    for stem, qlist in groups.items():
        if len(qlist) > 1:
            qlist.sort(key=lambda x: x.get('created_at') or '')
            to_delete.extend([q['id'] for q in qlist[1:]])
            
    print(f"Silinecek Mükerrer Satır Sayısı: {len(to_delete)}")
    
    if not to_delete:
        print("Silinecek mükerrer bulunamadı.")
        return
        
    chunk_size = 20
    for i in range(0, len(to_delete), chunk_size):
        chunk = to_delete[i:i+chunk_size]
        in_clause = ",".join(chunk)
        del_url = f"{SUPABASE_URL}/rest/v1/questions?id=in.({in_clause})"
        del_req = urllib.request.Request(del_url, method="DELETE", headers={
            "apikey": SUPABASE_KEY,
            "Authorization": f"Bearer {SUPABASE_KEY}"
        })
        try:
            with urllib.request.urlopen(del_req) as resp:
                print(f"   ✅ {len(chunk)} mükerrer RNA virüs sorusu silindi.")
        except Exception as e:
            print(f"   ❌ Silme hatası: {e}")
            
    # Tekrar kontrol et
    req2 = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
    res2 = json.loads(urllib.request.urlopen(req2).read().decode('utf-8'))
    print(f"\nSON DURUM - 020 RNA Virüsleri Temizlenmiş Sorular: {len(res2)} soru (Tam Benzersiz)")

if __name__ == "__main__":
    fix_duplicates()
