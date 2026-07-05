# -*- coding: utf-8 -*-
"""
Temiz set içinde intra-set (kendi arasında) kopya ayıklama + deploy.
- Gate + sızıntı + şişme + zayıf-çürütme filtrelerinden geçen seti alır
- İçindeki yakın-kopya çiftlerini bulur (stem + doğru şık metni Jaccard ≥ eşik)
- Her çiftte daha zayıf olanı (kısa açıklama) eler, diğerini tutar
- --show: çiftleri tam metinle yazar · --deploy: nihai seti Supabase'e yazar
"""
import sys, os, re, json
sys.path.insert(0, os.path.dirname(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "scripts"))
sys.stdout.reconfigure(encoding="utf-8")
from shared import _validate_single_question, _SOURCE_LEAK_RE, deploy_to_supabase
from _analyze_unit import load_questions, norm, jacc, BLOAT_RE, refute_n

THRESH = 0.72

def is_clean(q):
    ok, _ = _validate_single_question(q)
    blob = q["question"] + " " + " ".join(q["options"].values()) + " " + q.get("explanation", "")
    return ok and not _SOURCE_LEAK_RE.search(blob) and not BLOAT_RE.search(q["question"]) and refute_n(q) >= 3

def sig(q):
    return norm(q["question"] + " " + q["options"].get(q["correctAnswer"], ""))

def main():
    unit = sys.argv[1] if len(sys.argv) > 1 and not sys.argv[1].startswith("--") else "Ünite 1 - Dişlerin Oluşum Dönemleri"
    show = "--show" in sys.argv
    do_deploy = "--deploy" in sys.argv
    _, qs = load_questions(unit)
    clean = [q for q in qs if is_clean(q)]
    print(f"Toplam {len(qs)} · temiz {len(clean)}")

    # intra-set çiftleri
    sigs = [sig(q) for q in clean]
    drop = set()
    pairs = []
    for i in range(len(clean)):
        if i in drop: continue
        for j in range(i + 1, len(clean)):
            if j in drop: continue
            s = jacc(sigs[i], sigs[j])
            if s >= THRESH:
                # daha kısa açıklamalı olanı ele
                li, lj = len(clean[i].get("explanation","")), len(clean[j].get("explanation",""))
                loser = j if lj <= li else i
                pairs.append((round(s,2), i, j, loser))
                drop.add(loser)

    print(f"\nİntra-set kopya çifti (temiz set içinde): {len(pairs)} · elenecek: {len(drop)}")
    for s, i, j, loser in pairs:
        print(f"\n  ── çift sim={s} · ELENEN=#{loser} ──")
        for k in (i, j):
            mark = "❌ELE" if k == loser else "✅TUT"
            q = clean[k]
            print(f"  {mark} [{q['correctAnswer']}] {q['question'][:90]}")
            if show:
                print(f"        Doğru şık: {q['options'].get(q['correctAnswer'],'')}")
                print(f"        Açıklama : {q.get('explanation','')[:160]}")

    final = [q for k, q in enumerate(clean) if k not in drop]
    for q in final: q.pop("_src", None)
    out = os.path.join(os.path.dirname(__file__), "_deploy_pedo_u1.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(final, f, ensure_ascii=False, indent=2)
    print(f"\n✅ Nihai deploy seti: {len(final)} soru → {out}")

    if do_deploy:
        print("\n🚀 Supabase'e yazılıyor (deploy_to_supabase kendi gate'ini de uygular)...")
        deploy_to_supabase(final, "Pedodonti", unit)

if __name__ == "__main__":
    main()
