import os
import sys
import urllib.request
import json

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
_PROJECT_DIR = os.path.abspath(os.path.join(_SCRIPT_DIR, ".."))
if _PROJECT_DIR not in sys.path:
    sys.path.insert(0, _PROJECT_DIR)

import config

def probe():
    headers = {
        "apikey": config.SUPABASE_KEY,
        "Authorization": f"Bearer {config.SUPABASE_KEY}"
    }

    # 1. Toplam Cerrahi Çıkmış Soru Sayısı
    url = f"{config.SUPABASE_URL}/rest/v1/questions?select=id,unit,stem_embedding,explanation_embedding,flag_reason&lesson=eq.Cerrahi&quality_flag=eq.cikmis&limit=1000"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode("utf-8"))

    print(f"===========================================================")
    print(f"CANLI SUPABASE CERRAHİ ÇIKMIŞ SORU PROBE SONUÇLARI")
    print(f"===========================================================")
    print(f"Toplam Çekilen Soru: {len(data)}")

    unit_counts = {}
    has_stem_emb = 0
    has_expl_emb = 0
    has_flag_reason = 0

    for row in data:
        u = row.get("unit")
        unit_counts[u] = unit_counts.get(u, 0) + 1
        if row.get("stem_embedding") is not None:
            has_stem_emb += 1
        if row.get("explanation_embedding") is not None:
            has_expl_emb += 1
        if row.get("flag_reason"):
            has_flag_reason += 1

    print(f"Stem Embedding Doluluk Oranı: {has_stem_emb} / {len(data)} (%{has_stem_emb/len(data)*100:.1f})")
    print(f"Explanation Embedding Doluluk: {has_expl_emb} / {len(data)} (%{has_expl_emb/len(data)*100:.1f})")
    print(f"Flag Reason (Sınav Dönemi) Doluluk: {has_flag_reason} / {len(data)}")

    print(f"\n--- Ünite Dağılımı ({len(unit_counts)} Ünite) ---")
    for u, cnt in sorted(unit_counts.items(), key=lambda x: str(x[0])):
        print(f"  {u:45s}: {cnt:3d} soru")

    print(f"===========================================================")

if __name__ == "__main__":
    probe()
