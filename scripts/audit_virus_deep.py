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

def jaccard_sim(str1, str2):
    w1 = set(str1.lower().split())
    w2 = set(str2.lower().split())
    if not w1 or not w2:
        return 0.0
    return len(w1 & w2) / len(w1 | w2)

def deep_audit():
    # 1. DB'den tüm Mikrobiyoloji virüs sorularını çek
    url = f"{SUPABASE_URL}/rest/v1/questions?select=id,question,unit,created_at&lesson=eq.Mikrobiyoloji&unit=like.0*"
    req = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
    res = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
    
    questions = [r for r in res if any(r['unit'].startswith(f"0{i}") for i in range(18, 24))]
    print(f"🔍 SUPABASE VERİTABANINDAKİ TOPLAM MİKROBİYOLOJİ VİRÜS SORUSU: {len(questions)}")
    
    # 2. Birebir (Tam Metin) Mükerrer Kontrolü
    exact_groups = defaultdict(list)
    for q in questions:
        exact_groups[(q['unit'], q['question'].strip())].append(q)
        
    exact_dups = {k: v for k, v in exact_groups.items() if len(v) > 1}
    print(f"\n1. BİREBİR TAM EŞLEŞEN MÜKERRER SORU SAYISI: {sum(len(v)-1 for v in exact_dups.values())}")
    for (unit, stem), qlist in exact_dups.items():
        print(f"   ⚠️ Ünite [{unit}]: '{stem[:60]}...' ({len(qlist)} adet var)")

    # 3. Yüksek Benzerlikli (Semantik / Yakın Mükerrer) Kontrolü (Jaccard >= 0.85)
    unit_map = defaultdict(list)
    for q in questions:
        unit_map[q['unit']].append(q)
        
    near_dups = []
    for unit, qlist in unit_map.items():
        for i in range(len(qlist)):
            for j in range(i + 1, len(qlist)):
                sim = jaccard_sim(qlist[i]['question'], qlist[j]['question'])
                if sim >= 0.85 and qlist[i]['question'].strip() != qlist[j]['question'].strip():
                    near_dups.append((unit, sim, qlist[i], qlist[j]))
                    
    print(f"\n2. YAKIN ÇAKIŞAN (BENZERLİK >= %85) MÜKERRER CANDIDATE SAYISI: {len(near_dups)}")
    for unit, sim, q1, q2 in near_dups:
        print(f"   ⚠️ Ünite [{unit}] (Skor: {sim:.2f}):")
        print(f"      - ID1 ({q1['id']}): {q1['question'][:70]}...")
        print(f"      - ID2 ({q2['id']}): {q2['question'][:70]}...")

    # 4. Ünite Bazında Detaylı Dağılım
    print("\n3. ÜNİTE BAZINDA FİİLİ DB SAYILARI:")
    for unit in sorted(unit_map.keys()):
        print(f" - {unit}: {len(unit_map[unit])} soru (Tam Benzersiz: {len(set(q['question'].strip() for q in unit_map[unit]))})")

if __name__ == "__main__":
    deep_audit()
