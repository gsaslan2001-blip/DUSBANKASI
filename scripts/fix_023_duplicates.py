import sys, os, json, urllib.request
from collections import defaultdict
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path: sys.path.insert(0, _SCRIPT_DIR)
from config import SUPABASE_URL, SUPABASE_KEY

if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding="utf-8")
    except: pass

def fix_023():
    url = f"{SUPABASE_URL}/rest/v1/questions?select=id,question,created_at&lesson=eq.Mikrobiyoloji&unit=eq.023%20-%20Gastroenterit%20Etkeni%20Vir%C3%BCsler"
    req = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
    res = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
    
    print(f"023 DB Toplam Satır: {len(res)}")
    groups = defaultdict(list)
    for q in res:
        groups[q['question'].strip()].append(q)
        
    to_delete = []
    for stem, qlist in groups.items():
        if len(qlist) > 1:
            qlist.sort(key=lambda x: x.get('created_at') or '')
            to_delete.extend([q['id'] for q in qlist[1:]])
            
    print(f"023 Silinecek Mükerrer Satır Sayısı: {len(to_delete)}")
    
    for qid in to_delete:
        del_url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{qid}"
        del_req = urllib.request.Request(del_url, method="DELETE", headers={
            "apikey": SUPABASE_KEY,
            "Authorization": f"Bearer {SUPABASE_KEY}"
        })
        try:
            with urllib.request.urlopen(del_req) as resp:
                pass
        except Exception as e:
            print(f"Silme hata ({qid}): {e}")

    req2 = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
    res2 = json.loads(urllib.request.urlopen(req2).read().decode('utf-8'))
    print(f"023 SON DURUM BENZERSIZ SORULAR: {len(res2)}")

if __name__ == "__main__":
    fix_023()
