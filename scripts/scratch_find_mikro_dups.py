import os
import requests
import json
from collections import defaultdict
import re

SUPABASE_URL = "https://vblndoyjmkgaeuihydyd.supabase.co"
SUPABASE_KEY = "sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3"

headers = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

def get_mikro_questions():
    print("Mikrobiyoloji soruları çekiliyor...")
    url = f"{SUPABASE_URL}/rest/v1/questions?lesson=eq.Mikrobiyoloji&select=id,question,unit,quality_flag"
    all_q = []
    offset = 0
    limit = 1000
    while True:
        res = requests.get(f"{url}&limit={limit}&offset={offset}", headers=headers)
        if res.status_code != 200:
            print("Error:", res.text)
            break
        data = res.json()
        all_q.extend(data)
        if len(data) < limit:
            break
        offset += limit
    return all_q

def jaccard_similarity(s1, s2):
    set1 = set(s1.split())
    set2 = set(s2.split())
    if not set1 or not set2:
        return 0.0
    intersection = len(set1.intersection(set2))
    union = len(set1.union(set2))
    return intersection / union

def normalize(text):
    if not text:
        return ""
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    return text.strip()

questions = get_mikro_questions()
active_qs = [q for q in questions if q.get("quality_flag") != "kavramsal_kopya"]
print(f"Toplam soru: {len(questions)}, Aktif soru: {len(active_qs)}")

print("\n--- Yüksek Benzerlik Gösterenler (Jaccard > 0.50) ---")
found_pairs = set()
count = 0
for i in range(len(active_qs)):
    for j in range(i + 1, len(active_qs)):
        q1 = active_qs[i]
        q2 = active_qs[j]
        norm1 = normalize(q1['question'])
        norm2 = normalize(q2['question'])
        if norm1 == norm2:
            continue
        
        sim = jaccard_similarity(norm1, norm2)
        if sim > 0.50:
            pair = tuple(sorted([q1['id'], q2['id']]))
            if pair not in found_pairs:
                found_pairs.add(pair)
                print(f"\nBenzerlik Skoru: {sim:.2f}")
                print(f"Soru 1 ({q1['unit']}): {q1['question']}")
                print(f"Soru 2 ({q2['unit']}): {q2['question']}")
                count += 1
                if count > 20:
                    break
    if count > 20:
        break

print(f"\nToplam tespit: {count}")
