import sys, os, json, urllib.request
from collections import defaultdict
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path: sys.path.insert(0, _SCRIPT_DIR)
from config import SUPABASE_URL, SUPABASE_KEY

if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding="utf-8")
    except: pass

def purge_loop():
    iteration = 0
    while True:
        iteration += 1
        url = f"{SUPABASE_URL}/rest/v1/questions?select=id,question,unit,created_at&lesson=eq.Mikrobiyoloji&unit=like.0*"
        req = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
        res = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
        virus_questions = [r for r in res if any(r['unit'].startswith(f"0{i}") for i in range(18, 24))]
        
        groups = defaultdict(list)
        for q in virus_questions:
            groups[(q['unit'], q['question'].strip())].append(q)
            
        to_delete = []
        for (unit, stem), qlist in groups.items():
            if len(qlist) > 1:
                qlist.sort(key=lambda x: x.get('created_at') or '')
                to_delete.extend([q['id'] for q in qlist[1:]])
                
        print(f"[Tur {iteration}] Toplam Satır: {len(virus_questions)} | Benzersiz: {len(groups)} | Silinecek Mükerrer: {len(to_delete)}")
        if not to_delete:
            print("\n🎉 SIFIR MÜKERRER! TÜM BİREBİR TEKRARLAR TAMAMEN TEMİZLENDİ.")
            break
            
        for qid in to_delete:
            del_url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{qid}"
            del_req = urllib.request.Request(del_url, method="DELETE", headers={
                "apikey": SUPABASE_KEY,
                "Authorization": f"Bearer {SUPABASE_KEY}",
                "Prefer": "return=minimal"
            })
            try:
                with urllib.request.urlopen(del_req) as resp:
                    pass
            except Exception as e:
                print(f"Silme hata ({qid}): {e}")

if __name__ == "__main__":
    purge_loop()
