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

def clean_duplicates():
    url = f"{SUPABASE_URL}/rest/v1/questions?select=id,question,unit,created_at&lesson=eq.Mikrobiyoloji&unit=like.0*"
    req = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
    res = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
    
    virus_questions = [r for r in res if any(r['unit'].startswith(f"0{i}") for i in range(18, 24))]
    
    groups = defaultdict(list)
    for q in virus_questions:
        groups[(q['unit'], q['question'])].append(q)
        
    ids_to_delete = []
    for (unit, question), q_list in groups.items():
        if len(q_list) > 1:
            q_list.sort(key=lambda x: x.get('created_at') or '')
            keep = q_list[0]
            to_del = q_list[1:]
            ids_to_delete.extend([d['id'] for d in to_del])
            
    print(f"Toplam Virüs Soruları (DB): {len(virus_questions)}")
    print(f"Benzersiz Soru Sayısı: {len(groups)}")
    print(f"Silinecek Mükerrer Kayıt Sayısı: {len(ids_to_delete)}")
    
    if not ids_to_delete:
        print("Mükerrer soru bulunamadı.")
        return
        
    chunk_size = 20
    deleted_count = 0
    for i in range(0, len(ids_to_delete), chunk_size):
        chunk = ids_to_delete[i:i+chunk_size]
        in_clause = ",".join(chunk)
        del_url = f"{SUPABASE_URL}/rest/v1/questions?id=in.({in_clause})"
        del_req = urllib.request.Request(del_url, method="DELETE", headers={
            "apikey": SUPABASE_KEY,
            "Authorization": f"Bearer {SUPABASE_KEY}"
        })
        try:
            with urllib.request.urlopen(del_req) as resp:
                deleted_count += len(chunk)
                print(f"   ✅ {len(chunk)} mükerrer soru silindi.")
        except Exception as e:
            print(f"   ❌ Silme hatası: {e}")
            
    print(f"\nTemizlik Tamamlandı: {deleted_count} mükerrer satır silindi.")
    
    req_final = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
    res_final = json.loads(urllib.request.urlopen(req_final).read().decode('utf-8'))
    final_questions = [r for r in res_final if any(r['unit'].startswith(f"0{i}") for i in range(18, 24))]
    
    final_counts = defaultdict(int)
    for q in final_questions:
        final_counts[q['unit']] += 1
        
    print("\nNİHAİ TEMİZLENMİŞ GERÇEK SORU SAYILARI:")
    for u, c in sorted(final_counts.items()):
        print(f" - {u}: {c} soru")
    print(f"TOPLAM BENZERSİZ GERÇEK SORU: {sum(final_counts.values())}")

if __name__ == "__main__":
    clean_duplicates()
