import sys
import os
import re
from collections import defaultdict, Counter

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
_PROJECT_DIR = os.path.abspath(os.path.join(_SCRIPT_DIR, "..", ".."))
if _PROJECT_DIR not in sys.path:
    sys.path.insert(0, _PROJECT_DIR)
sys.path.insert(0, os.path.join(_PROJECT_DIR, "scripts"))

from tools.test_periodontoloji_parser import parse_periodontoloji_file, SOURCE_FILE

CANONICAL_PERIODONTOLOJI_UNITS = [
    "Periodontal Anatomi",
    "Periodontal Epidemiyoloji",
    "Etiyoloji",
    "Periodontal Patoloji ve Mikrobiyoloji",
    "Gingival Hastalıklar",
    "Periodontitis ve Formları",
    "Periodontal Hastalıkların Sınıflandırılması",
    "Periodontal Tedavi Planlaması",
    "Cerrahi Teknikler",
    "Destekleyici Periodontal Tedavi"
]

def classify_question(q):
    n = q["q_num"]
    text = (q["question"] + " " + " ".join(q["options"].values()) + " " + q["explanation"]).lower()
    stem = q["question"].lower()

    # --- 1. Soru Numarası Özel Eşleşmeleri & Kesin Gruplar ---
    
    # 1.1. Periodontal Anatomi (Soru 1 - 70 arası anatomik sorular, istisnalar hariç)
    if 1 <= n <= 70:
        if n in [61, 62, 63]:
            return "Periodontal Patoloji ve Mikrobiyoloji" # RANKL/RANK/OPG kemik mekanizması
        return "Periodontal Anatomi"

    # 1.2. Periodontal Epidemiyoloji (Soru 71 - 90 arası indeksler ve epidemiyoloji)
    if 71 <= n <= 90:
        return "Periodontal Epidemiyoloji"

    # 1.3. Destekleyici Periodontal Tedavi (İdame, Faz IV, recall ve peri-implantitis idame/tedavisi)
    if n in [362, 364, 365]:
        return "Destekleyici Periodontal Tedavi"
    if 564 <= n <= 574 and n != 568:
        # Peri-implantitis risk faktörleri, tanımı, komplikasyonları ve tedavisi
        return "Destekleyici Periodontal Tedavi"

    # 1.4. Periodontal Hastalıkların Sınıflandırılması
    # Soru 168, 169, 170 (2017 peri-implant hastalıkları ve tanı kriterleri)
    if n in [168, 169, 170, 568]:
        return "Periodontal Hastalıkların Sınıflandırılması"
    # Soru 316 - 360 arasındaki sınıflama, ataşman kaybı, furkasyon, Cairo/Miller sınıflamaları
    if 316 <= n <= 360:
        if n in [354, 355, 356, 357, 358, 359, 360]:
            # Tedavi fazları (Faz I, II, III, IV genel planlama) -> Periodontal Tedavi Planlaması
            return "Periodontal Tedavi Planlaması"
        if any(k in text for k in ["evre", "derece", "staging", "grading", "sınıflama", "siniflama", "miller", "cairo", "glickman", "hamp"]):
            return "Periodontal Hastalıkların Sınıflandırılması"
        if any(k in text for k in ["ataşman kaybı", "cep derinliği", "furkasyon defekti"]):
            return "Periodontal Hastalıkların Sınıflandırılması"
        # Tanı ve histopatoloji soruları
        if "histopatolo" in text or "mikroskobik" in text or "biyolojik genişlik" in stem:
            return "Periodontal Anatomi"
        return "Periodontitis ve Formları"

    # 1.5. Cerrahi Teknikler (Soru 460 - 593 cerrahi, greft, flep, kron boyu uzatma, implant cerrahisi)
    if 460 <= n <= 593:
        if n in [561, 562]:
            return "Periodontal Anatomi" # Peri-implant yumuşak doku histolojisi/anatomisi
        if n in [547, 548, 549, 550, 551]:
            # Lazer dalga boyları ve fotodinamik terapi
            return "Periodontal Tedavi Planlaması"
        return "Cerrahi Teknikler"

    # 1.6. Periodontal Tedavi Planlaması (Soru 361 - 459: fırçalama, aletler, küretler, antibiyotikler, profilaksi)
    if 361 <= n < 460:
        return "Periodontal Tedavi Planlaması"

    # 1.7. Periodontal Patoloji ve Mikrobiyoloji & Etiyoloji (Soru 91 - 190)
    if 91 <= n <= 190:
        # Etiyoloji: Diştaşı, kalkulus, tükürük, beslenme, radyoterapi lokal etkileri
        if any(k in text for k in ["diştaşı", "diş taşı", "kalkulus", "tükürük"]):
            return "Etiyoloji"
        if any(k in text for k in ["etiyoloji", "materia alba", "plak retansiyon"]):
            return "Etiyoloji"
        return "Periodontal Patoloji ve Mikrobiyoloji"

    # 1.8. Periodontitis ve Formları (Soru 191 - 224: Genetik sendromlar, sistemik hastalıklar)
    if 191 <= n <= 224:
        return "Periodontitis ve Formları"

    # 1.9. Gingival Hastalıklar (Soru 225 - 315)
    if 225 <= n <= 315:
        if "apse" in text or "periodontal apse" in text:
            return "Periodontitis ve Formları"
        return "Gingival Hastalıklar"

    # Fallback
    return "Periodontitis ve Formları"

if __name__ == "__main__":
    qs, errs = parse_periodontoloji_file(SOURCE_FILE)
    print(f"Toplam soru: {len(qs)}")
    
    distribution = Counter()
    unit_questions = defaultdict(list)
    
    for q in qs:
        unit = classify_question(q)
        distribution[unit] += 1
        unit_questions[unit].append(q)
        
    print("\n--- Kesin Kanonik Ünite Dağılımı ---")
    for u in CANONICAL_PERIODONTOLOJI_UNITS:
        print(f"  {u}: {distribution[u]} soru")
        
    other_units = set(distribution.keys()) - set(CANONICAL_PERIODONTOLOJI_UNITS)
    if other_units:
        print(f"  UYARI: Tanımsız üniteler var: {other_units}")
    else:
        print(f"\n  Toplam: {sum(distribution.values())} soru")
        print("  TÜM 10 resmi kanonik ünite tam uyumlu!")
