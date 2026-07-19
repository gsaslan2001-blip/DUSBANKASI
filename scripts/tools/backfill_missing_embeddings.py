"""
Faz 4.3 — 241 soruda eksik stem_embedding/explanation_embedding'i doldurur.
manage-questions edge function'ıyla aynı model: text-embedding-3-large, 1536d.
Kaynak: canlı Supabase (questions tablosu), stale local backup değil.
"""
import os
import sys
import time

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import requests
from openai import OpenAI
from config import SUPABASE_URL, SUPABASE_KEY, OPENAI_API_KEY

if not OPENAI_API_KEY:
    print("[!] OPENAI_API_KEY tanımlı değil (config.py / env). Durduruluyor.")
    sys.exit(1)

client = OpenAI(api_key=OPENAI_API_KEY)
HEADERS = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
}

def fetch_missing():
    url = f"{SUPABASE_URL}/rest/v1/questions"
    params = {
        "select": "id,question,explanation,stem_embedding,explanation_embedding",
        "or": "(stem_embedding.is.null,explanation_embedding.is.null)",
        "limit": "1000",
    }
    r = requests.get(url, headers=HEADERS, params=params, timeout=30)
    r.raise_for_status()
    return r.json()

def embed_batch(texts):
    resp = client.embeddings.create(model="text-embedding-3-large", input=texts, dimensions=1536)
    return [d.embedding for d in resp.data]

def update_row(qid, stem_emb, expl_emb):
    url = f"{SUPABASE_URL}/rest/v1/questions"
    body = {}
    if stem_emb is not None:
        body["stem_embedding"] = stem_emb
    if expl_emb is not None:
        body["explanation_embedding"] = expl_emb
    r = requests.patch(url, headers=HEADERS, params={"id": f"eq.{qid}"}, json=body, timeout=30)
    r.raise_for_status()

def main():
    rows = fetch_missing()
    print(f"[*] {len(rows)} soru eksik embedding ile bulundu.")
    ok, fail = 0, 0
    for i in range(0, len(rows), 20):
        batch = rows[i:i+20]
        stem_texts = [(r.get("question") or " ") for r in batch]
        expl_texts = [(r.get("explanation") or " ") for r in batch]
        try:
            stem_embs = embed_batch(stem_texts)
            expl_embs = embed_batch(expl_texts)
        except Exception as e:
            print(f"[!] Batch {i}-{i+len(batch)} embed hatası: {e}")
            fail += len(batch)
            continue
        for row, s_emb, e_emb in zip(batch, stem_embs, expl_embs):
            try:
                need_stem = row.get("stem_embedding") is None
                need_expl = row.get("explanation_embedding") is None
                update_row(
                    row["id"],
                    s_emb if need_stem else None,
                    e_emb if need_expl else None,
                )
                ok += 1
            except Exception as e:
                print(f"[!] {row['id']} update hatası: {e}")
                fail += 1
        print(f"[*] {min(i+20, len(rows))}/{len(rows)} işlendi (ok={ok}, fail={fail})")
        time.sleep(0.3)
    print(f"\n[*] Tamamlandı. Başarılı: {ok}, Başarısız: {fail}")

if __name__ == "__main__":
    main()
