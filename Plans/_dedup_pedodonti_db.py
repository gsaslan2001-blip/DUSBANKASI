# -*- coding: utf-8 -*-
"""
DB-geneli intra-Pedodonti kopya ayıklama (hafif/leksikal — LLM Ölüm Maçı DEĞİL).
Tüm Pedodonti sorularını çeker, stem + doğru-şık metni üzerinden yakın-kopya
çiftlerini bulur (Jaccard ≥ eşik), her çiftte zayıf olanı (kısa açıklama)
quality_flag='kavramsal_kopya' ile işaretler (geri alınabilir, sistemle tutarlı).

  python Plans/_dedup_pedodonti_db.py            # rapor (uygulamaz)
  python Plans/_dedup_pedodonti_db.py --apply    # işaretlemeyi uygular
"""
import sys, os, re, json, urllib.request, urllib.parse
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "scripts"))
sys.stdout.reconfigure(encoding="utf-8")
from config import SUPABASE_URL, SUPABASE_KEY

THRESH = 0.72

def norm(t):
    t = (t or "").translate(str.maketrans("İIÇŞĞÜÖ", "iıçşğüö")).lower()
    t = re.sub(r"[^a-zçşğüöı0-9\s]", " ", t)
    return {w for w in t.split() if len(w) >= 3}

def jacc(a, b):
    return len(a & b) / len(a | b) if (a | b) else 0.0

def fetch_all():
    rows, off, lim = [], 0, 1000
    while True:
        url = (f"{SUPABASE_URL}/rest/v1/questions?select=id,unit,question,correct_answer,"
               f"option_a,option_b,option_c,option_d,option_e,explanation,quality_flag"
               f"&lesson=eq.Pedodonti&limit={lim}&offset={off}")
        req = urllib.request.Request(url, headers={"apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}"})
        with urllib.request.urlopen(req) as r:
            d = json.loads(r.read())
        rows += d
        if len(d) < lim: break
        off += lim
    return rows

def flag(qid):
    url = f"{SUPABASE_URL}/rest/v1/questions?id=eq.{qid}"
    body = json.dumps({"quality_flag": "kavramsal_kopya"}).encode()
    req = urllib.request.Request(url, data=body, method="PATCH", headers={
        "apikey": SUPABASE_KEY, "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json", "Prefer": "return=minimal"})
    urllib.request.urlopen(req)

def main():
    apply = "--apply" in sys.argv
    rows = [r for r in fetch_all() if not r.get("quality_flag")]  # yalnızca aktif
    print(f"Aktif Pedodonti sorusu: {len(rows)}")
    optcol = {"A":"option_a","B":"option_b","C":"option_c","D":"option_d","E":"option_e"}
    sigs = [norm((r["question"] or "") + " " + (r.get(optcol.get(r["correct_answer"],""), "") or "")) for r in rows]

    drop, pairs = set(), []
    for i in range(len(rows)):
        if i in drop: continue
        for j in range(i+1, len(rows)):
            if j in drop: continue
            if jacc(sigs[i], sigs[j]) >= THRESH:
                li = len(rows[i].get("explanation") or "")
                lj = len(rows[j].get("explanation") or "")
                loser = j if lj <= li else i
                pairs.append((round(jacc(sigs[i],sigs[j]),2), i, j, loser))
                drop.add(loser)

    print(f"Kopya çifti: {len(pairs)} · işaretlenecek (kavramsal_kopya): {len(drop)}\n")
    for s,i,j,loser in pairs[:40]:
        print(f"  sim={s} ELE=#{loser}")
        print(f"     [{rows[i]['unit'][:22]}] {rows[i]['question'][:62]}")
        print(f"     [{rows[j]['unit'][:22]}] {rows[j]['question'][:62]}")

    if apply:
        n = 0
        for k in drop:
            try: flag(rows[k]["id"]); n += 1
            except Exception as e: print(f"  ⚠️ {rows[k]['id']}: {e}")
        print(f"\n✅ {n} soru kavramsal_kopya olarak işaretlendi. Kalan aktif: {len(rows)-n}")
    else:
        print(f"\n(Rapor modu — uygulamak için --apply)  Kalacak aktif: {len(rows)-len(drop)}")

if __name__ == "__main__":
    main()
