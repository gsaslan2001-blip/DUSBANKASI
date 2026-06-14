import os
import sys
import math
import json
import urllib.request
import urllib.parse
import argparse
from datetime import datetime
import numpy as np

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from config import SUPABASE_URL, SUPABASE_KEY
from shared import get_existing_units

def supabase_get(endpoint):
    url = f"{SUPABASE_URL}/rest/v1/{endpoint}"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}"
    }
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except Exception as e:
        print(f"Error fetching from {endpoint}: {e}")
        return []

def supabase_upsert(table, data):
    url = f"{SUPABASE_URL}/rest/v1/{table}"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
    }
    payload = json.dumps(data).encode('utf-8')
    req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.status
    except Exception as e:
        print(f"Error upserting to {table}: {e}")
        return None

def dot_product(v1, v2):
    return sum(a * b for a, b in zip(v1, v2))

def magnitude(v):
    return math.sqrt(sum(a * a for a in v))

def cosine_similarity(v1, v2):
    if not v1 or not v2: return 0
    mag = magnitude(v1) * magnitude(v2)
    if mag == 0: return 0
    return dot_product(v1, v2) / mag

def parse_vector(v):
    if isinstance(v, str):
        return json.loads(v)
    return v

def plot_similarities(lesson, unit, similarities, threshold, mu, sigma, percentile_val=None):
    try:
        import matplotlib.pyplot as plt
        plt.figure(figsize=(8, 5))
        plt.hist(similarities, bins=50, color='skyblue', edgecolor='black', alpha=0.7)
        plt.axvline(threshold, color='red', linestyle='dashed', linewidth=2, label=f'Threshold ({threshold:.3f})')
        
        if mu is not None and sigma is not None:
            plt.axvline(mu, color='green', linestyle='dotted', linewidth=2, label=f'Mean (μ={mu:.3f})')
            plt.axvline(mu + 1.5*sigma, color='purple', linestyle='dashed', linewidth=1, label=f'μ+1.5σ ({(mu + 1.5*sigma):.3f})')

        if percentile_val is not None:
            plt.axvline(percentile_val, color='orange', linestyle='dashed', linewidth=1, label=f'97th Percentile ({percentile_val:.3f})')
            
        plt.title(f"Similarity Distribution: {lesson} - {unit}")
        plt.xlabel("Cosine Similarity (70% Stem + 30% Expl)")
        plt.ylabel("Frequency")
        plt.legend()
        
        safe_lesson = lesson.replace(" ", "_")
        safe_unit = unit.replace(" ", "_").replace("/", "_")
        filename = f"dist_unit_{safe_lesson}_{safe_unit}.png"
        plt.savefig(filename)
        plt.close()
        # print(f"  [+] Saved plot: {filename}")
    except ImportError:
        pass

def compute_threshold_for_unit(lesson, unit, method="gaussian", k=1.5, percentile_q=97, do_plot=False):
    encoded_lesson = urllib.parse.quote(lesson)
    encoded_unit = urllib.parse.quote(unit)
    
    endpoint = f"questions?select=id,stem_embedding,explanation_embedding&lesson=eq.{encoded_lesson}&unit=eq.{encoded_unit}&limit=200"
    questions = supabase_get(endpoint)

    if not questions:
        return None

    similarities = []

    for i in range(len(questions)):
        for j in range(i + 1, len(questions)):
            q1 = questions[i]
            q2 = questions[j]

            if q1.get('stem_embedding') and q2.get('stem_embedding') and q1.get('explanation_embedding') and q2.get('explanation_embedding'):
                v1_stem = parse_vector(q1['stem_embedding'])
                v2_stem = parse_vector(q2['stem_embedding'])
                v1_exp = parse_vector(q1['explanation_embedding'])
                v2_exp = parse_vector(q2['explanation_embedding'])

                sim_stem = cosine_similarity(v1_stem, v2_stem)
                sim_exp = cosine_similarity(v1_exp, v2_exp)
                sim_total = (0.7 * sim_stem) + (0.3 * sim_exp)
                similarities.append(sim_total)
                
    if not similarities:
        return None
        
    mu = np.mean(similarities)
    sigma = np.std(similarities)
    perc = np.percentile(similarities, percentile_q)
    
    if method == "percentile":
        threshold = perc
    elif method == "gaussian":
        threshold = mu + (k * sigma)
    else: # robust
        q75, q25 = np.percentile(similarities, [75, 25])
        iqr = q75 - q25
        upper_fence = q75 + (k * iqr)
        threshold = min(upper_fence, perc)
        
    threshold = min(threshold, 0.99)

    # ⚠️ Güvenlik tabanı (TÜM üniteler): Tek-tipli bir ünitenin çift-benzerlik
    # dağılımı doğal olarak yüksektir (Radyoloji Ü1: mean≈0.43). IQR/Gaussian üst
    # çiti ~0.58–0.63'e oturur ki bu "ilişkili ama kopya değil" gürültü bölgesidir
    # (eşik 0.63 → ~569 yanlış aday). Gerçek kopya zonu ≥0.75'tir; bu yüzden
    # dinamik eşik 0.75'in ALTINA asla inmez. Dağılım daha yükseğini önerirse o kullanılır.
    threshold = max(threshold, 0.75)

    if do_plot:
        plot_similarities(lesson, unit, similarities, threshold, mu, sigma, perc)
        
    return threshold, mu, sigma, len(similarities)

def main():
    parser = argparse.ArgumentParser(description="Calculate dynamic unit thresholds for semantic duplicate detection.")
    parser.add_argument("--method", type=str, choices=["gaussian", "percentile", "robust"], default="robust", help="Method to calculate threshold (default: robust)")
    parser.add_argument("--percentile", type=int, default=97, help="Percentile to use if method=percentile (default: 97)")
    parser.add_argument("--plot", action="store_true", help="Generate similarity distribution histograms (PNG)")
    parser.add_argument("--dry-run", action="store_true", help="Do not save thresholds to database")
    args = parser.parse_args()

    lessons = [
        "Endodonti", "Fizyoloji", "Histoloji", "Patoloji", 
        "Periodontoloji", "Protez", "Radyoloji"
    ]
    
    for lesson in lessons:
        print(f"\n--- İşleniyor: {lesson} ---")
        units_dict = get_existing_units(lesson)
        
        for unit in units_dict.keys():
            print(f"Hesaplanıyor: {lesson} / {unit} ... ", end="")
            result = compute_threshold_for_unit(lesson, unit, method=args.method, percentile_q=args.percentile, do_plot=args.plot)
            if not result:
                print("Yeterli veri yok veya embedding eksik.")
                continue
                
            threshold, mu, sigma, pair_count = result
            print(f"Mu: {mu:.4f}, Sigma: {sigma:.4f}, T: {threshold:.4f} ({pair_count} çift)")
            
            if not args.dry_run:
                payload = [{
                    "lesson": lesson,
                    "unit": unit,
                    "dynamic_threshold": threshold,
                    "updated_at": datetime.now().isoformat()
                }]
                status = supabase_upsert("unit_thresholds", payload)
                if status in (200, 201):
                    print(f" -> DB Güncellendi: {threshold:.4f}")
                else:
                    print(f" -> DB Güncelleme HATASI: HTTP {status}")

if __name__ == "__main__":
    main()
