import sys, os, json, urllib.request
from collections import defaultdict
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path: sys.path.insert(0, _SCRIPT_DIR)
from config import SUPABASE_URL, SUPABASE_KEY

if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding="utf-8")
    except: pass

def fix_strict():
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
            
    print(f"Toplam Virüs Satırı (DB): {len(virus_questions)}")
    print(f"Benzersiz Soru Sayısı: {len(groups)}")
    print(f"Silinecek Mükerrer Satır Sayısı: {len(to_delete)}")
    
    if not to_delete:
        print("Mükerrer yok! Veritabanı %100 temiz.")
        return

    deleted = 0
    for qid in to_delete:
        del_url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{qid}"
        del_req = urllib.request.Request(del_url, method="DELETE", headers={
            "apikey": SUPABASE_KEY,
            "Authorization": f"Bearer {SUPABASE_KEY}"
        })
        try:
            with urllib.request.urlopen(del_req) as resp:
                deleted += 1
        except Exception as e:
            print(f"Silme hatası ({qid}): {e}")

    print(f"\n✅ Toplam {deleted} adet mükerrer satır Supabase'den silindi.")

    req2 = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
    res2 = json.loads(urllib.request.urlopen(req2).read().decode('utf-8'))
    final_qs = [r for r in res2 if any(r['unit'].startswith(f"0{i}") for i in range(18, 24))]
    
    final_counts = defaultdict(int)
    for q in final_qs:
        final_counts[q['unit']] += 1
        
    print("\nNİHAİ DOĞRULANMIŞ BİREBİR GERÇEK SORU SAYILARI:")
    for u, c in sorted(final_counts.items()):
        print(f" - {u}: {c} soru")
    print(f"TOPLAM GERÇEK BENZERSİZ SORU: {sum(final_counts.values())}")

if __name__ == "__main__":
    fix_strict()
