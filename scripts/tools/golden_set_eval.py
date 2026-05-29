import os
import sys
import json
import urllib.request
import urllib.parse

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
from scripts.config import SUPABASE_URL, SUPABASE_KEY
from scripts.tools.calculate_dynamic_thresholds import cosine_similarity, parse_vector

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

def get_question_data(q_id):
    endpoint = f"questions?select=id,unit,stem_embedding,explanation_embedding&id=eq.{q_id}"
    res = supabase_get(endpoint)
    if res and len(res) > 0:
        return res[0]
    return None

def get_unit_threshold(lesson, unit):
    # Düz mantık, hızlı olması için db'den çek
    endpoint = f"unit_thresholds?select=dynamic_threshold&unit=eq.{urllib.parse.quote(unit)}"
    res = supabase_get(endpoint)
    if res and len(res) > 0:
        return float(res[0]["dynamic_threshold"])
    return 0.75

def evaluate_golden_set():
    print("=== DUSBANKASI Bi-Encoder Golden Set Evaluation ===")
    
    # ⚠️ ÖNEMLİ: Bu listeyi veritabanınızdaki GERÇEK soru ID'leri ve manuel etiketlerinizle doldurun!
    # label=True -> Gerçekten kopya (duplicate)
    # label=False -> Kopya DEĞİL (farklı sorular)
    golden_set = [
        {"q1_id": "e43a7dda-4482-4c8e-bbc9-ea4df156fdc0", "q2_id": "c3468ca3-592c-4f1b-bb85-a373adaf4d56", "label": True},
        {"q1_id": "2b749972-cb7f-4e9b-af94-9967d423a406", "q2_id": "d7141612-9c7f-4d59-a0aa-d707e8550c43", "label": True},
        {"q1_id": "daf229b4-36d1-49bf-a8a5-fbb8a01c3618", "q2_id": "559c3052-4d93-494a-83ac-8ffa66111de5", "label": True},
        {"q1_id": "87513508-2085-4320-88b2-44117159bea7", "q2_id": "17efc9ec-4c4d-40e8-95d8-be2ea0124e68", "label": True},
        {"q1_id": "3dbc4933-06b3-40e9-bed2-8eac8c5dff1c", "q2_id": "a7e31791-0653-40de-bdd7-ebd9fbf6e11c", "label": True},
        {"q1_id": "fec29da5-7f5c-42af-a3ce-0f99df8187f0", "q2_id": "a6fa4b7f-683c-4d09-8f64-b4c4efd01053", "label": True},
        {"q1_id": "597e774b-a08f-4617-93fe-0fa364cc74c8", "q2_id": "23292f7f-08f4-4672-8837-3650054caa2d", "label": True},
        {"q1_id": "3fbf5622-02f5-4c94-9cd9-8f0b000b5374", "q2_id": "963a1237-6dbf-493b-9a4b-55a8f01e5a85", "label": True},
        {"q1_id": "1da1ad5a-5d81-491e-ab7b-1e33fd0723d8", "q2_id": "e3eafe44-4c5f-46a6-b4f5-85e00c1ccb3b", "label": True},
        {"q1_id": "08af972f-b261-4474-8873-d445fa94664f", "q2_id": "6e9c73c5-15f9-45c8-8d9a-ee1880074859", "label": True},
        {"q1_id": "a84467f0-04b2-4fd5-a911-fd4838d7fda3", "q2_id": "becdf780-09c6-48b8-97a7-81e65ded330c", "label": True},

        {"q1_id": "fcb77765-8f17-44a1-b8b7-77d2f50ddb9f", "q2_id": "b2925ca9-e678-4d91-80ed-f276cff21cc0", "label": False},
        {"q1_id": "6d550a06-3bb9-4d90-ab98-a20f4f9ed36d", "q2_id": "4a650784-c119-4b49-b652-e25945080d9b", "label": False},
        {"q1_id": "158ef85c-f370-4f21-958b-0dbdd3293183", "q2_id": "9e6206e0-586f-4681-ba54-ae175e30546a", "label": False},
        {"q1_id": "e206a327-e483-4a68-a917-ca8b640b9507", "q2_id": "8ff5b0d0-c1ff-4168-b538-b9c7a11011ef", "label": False},
        {"q1_id": "158ef85c-f370-4f21-958b-0dbdd3293183", "q2_id": "2b658630-a5fc-45b6-8b51-78c48fbb177e", "label": False},
        {"q1_id": "042de10d-84d8-4318-80ec-9afece038032", "q2_id": "26fc6fc6-a4a6-4648-adcf-2c1432da8caf", "label": False},
        {"q1_id": "9be278f1-3e91-45c8-a290-fa361d6ed9f3", "q2_id": "a6ef3d90-6460-44b3-965d-b570290fda6c", "label": False},
        {"q1_id": "540ff68e-5b68-4870-bdbf-bf3c0aaa69be", "q2_id": "55faee88-0d0e-4b69-993d-ba1ec08d29c7", "label": False},
        {"q1_id": "2b658630-a5fc-45b6-8b51-78c48fbb177e", "q2_id": "042de10d-84d8-4318-80ec-9afece038032", "label": False},
        {"q1_id": "c79b4d4e-dcbc-4d63-8c00-6b4861383284", "q2_id": "bf550878-d8d6-4a45-bcea-0a7cfb91376c", "label": False}
    ]

    if not golden_set:
        print("\n[UYARI] golden_set listesi boş! Lütfen scripts/tools/golden_set_eval.py dosyasını açıp test çiftlerini girin.")
        return

    TP = 0
    FP = 0
    TN = 0
    FN = 0

    thresholds_cache = {}

    for i, pair in enumerate(golden_set):
        q1_id = pair["q1_id"]
        q2_id = pair["q2_id"]
        is_duplicate_actual = pair["label"]

        q1 = get_question_data(q1_id)
        q2 = get_question_data(q2_id)

        if not q1 or not q2:
            print(f"[{i+1}/{len(golden_set)}] HATA: Sorular bulunamadı ({q1_id}, {q2_id})")
            continue
            
        unit1 = q1.get("unit", "")
        unit2 = q2.get("unit", "")
        
        # Check thresholds cache
        if unit1 not in thresholds_cache:
            thresholds_cache[unit1] = get_unit_threshold("", unit1)
        if unit2 not in thresholds_cache:
            thresholds_cache[unit2] = get_unit_threshold("", unit2)
            
        threshold = min(thresholds_cache[unit1], thresholds_cache[unit2])

        if q1.get('stem_embedding') and q2.get('stem_embedding') and q1.get('explanation_embedding') and q2.get('explanation_embedding'):
            v1_stem = parse_vector(q1['stem_embedding'])
            v2_stem = parse_vector(q2['stem_embedding'])
            v1_exp = parse_vector(q1['explanation_embedding'])
            v2_exp = parse_vector(q2['explanation_embedding'])
            
            sim_stem = cosine_similarity(v1_stem, v2_stem)
            sim_exp = cosine_similarity(v1_exp, v2_exp)
            sim_total = (0.7 * sim_stem) + (0.3 * sim_exp)
        else:
            print(f"[{i+1}/{len(golden_set)}] HATA: Eksik embedding ({q1_id}, {q2_id})")
            continue

        is_duplicate_predicted = sim_total >= threshold

        if is_duplicate_predicted and is_duplicate_actual:
            TP += 1
            res = "🟢 TP"
        elif is_duplicate_predicted and not is_duplicate_actual:
            FP += 1
            res = "🔴 FP (Sahte Kopya)"
        elif not is_duplicate_predicted and not is_duplicate_actual:
            TN += 1
            res = "🟢 TN"
        elif not is_duplicate_predicted and is_duplicate_actual:
            FN += 1
            res = "🔴 FN (Kaçırılan Kopya)"

        print(f"[{i+1}/{len(golden_set)}] Sim: {sim_total:.3f} | Thresh: {threshold:.3f} | Pred: {is_duplicate_predicted} | Act: {is_duplicate_actual} => {res}")

    print("\n--- SONUÇLAR ---")
    print(f"True Positives (TP) : {TP} (Doğru yakalanan kopyalar)")
    print(f"False Positives (FP): {FP} (Yanlışlıkla kopya sanılanlar - GÜRÜLTÜ)")
    print(f"True Negatives (TN) : {TN} (Doğru ayrılan farklı sorular)")
    print(f"False Negatives (FN): {FN} (Gözden kaçan gerçek kopyalar - KAÇAK)")
    print("-" * 20)

    precision = TP / (TP + FP) if (TP + FP) > 0 else 0
    recall = TP / (TP + FN) if (TP + FN) > 0 else 0
    f1 = 2 * (precision * recall) / (precision + recall) if (precision + recall) > 0 else 0

    print(f"Precision (Kesinlik): {precision:.2%}")
    print(f"Recall    (Duyarlılık): {recall:.2%}")
    print(f"F1 Score            : {f1:.2%}")
    print("\nİdeal Hedef: Yüksek F1 skoru. FP yüksekse 'sahte kopyalar' siliyor, FN yüksekse 'gerçek kopyaları' gözden kaçırıyoruz demektir.")

if __name__ == "__main__":
    evaluate_golden_set()
