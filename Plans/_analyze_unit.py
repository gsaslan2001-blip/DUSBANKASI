# -*- coding: utf-8 -*-
"""
Üretilen ünite loglarını analiz eder: kalite gate + sızıntı/şişme/çürütme +
intra-set (kendi arasında) kopya kıyası. Temiz soruları deploy için JSON'a yazar.

Kullanım:
  python Plans/_analyze_unit.py "Ünite 1 - Dişlerin Oluşum Dönemleri"
  python Plans/_analyze_unit.py "<unit_name>" --deploy   # gate'ten geçenleri Supabase'e yazar
"""
import sys, os, re, json, glob
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "scripts"))
sys.stdout.reconfigure(encoding="utf-8")
from shared import _validate_single_question, extract_json, deploy_to_supabase, _SOURCE_LEAK_RE

LOG_DIR = os.path.join(os.path.dirname(__file__), "..", "scripts", "logs")
BLOAT_RE = re.compile(r"(?i)(incelendiğinde|bilinmektedir|göz önüne alınd|kabul gören teori|değerlendirildiğinde,)")

def norm(t):
    t = (t or "").translate(str.maketrans("İIÇŞĞÜÖ","iıcsğüö")).lower()
    t = re.sub(r"[^a-zçşğüöı0-9\s]", " ", t)
    return [w for w in t.split() if len(w) >= 3]

def jacc(a, b):
    sa, sb = set(a), set(b)
    return len(sa & sb) / len(sa | sb) if (sa | sb) else 0.0

def is_combined(q):
    opts = list(q["options"].values())
    return sum(1 for o in opts if re.search(r"\b(IV|I{1,3})\b", o) or "Yalnız" in o) >= 3

def refute_n(q):
    e = q.get("explanation", "")
    if is_combined(q):
        return len(set(re.findall(r"\b(IV|I{1,3})\b", e)))
    ca = q["correctAnswer"]
    return sum(1 for l in "ABCDE" if l != ca and re.search(rf"\b{l}\)", e))

def load_questions(unit_name):
    pat = os.path.join(LOG_DIR, f"exhaust_{unit_name}_batch*.txt")
    files = sorted(glob.glob(pat), key=lambda f: int(re.search(r"batch(\d+)", f).group(1)))
    allq = []
    for f in files:
        txt = open(f, encoding="utf-8").read()
        ans = txt.split("--- ANSWER ---", 1)[-1]
        qs = extract_json(ans) or []
        for q in qs:
            q["_src"] = os.path.basename(f)
        allq += qs
    return files, allq

def main():
    unit = sys.argv[1] if len(sys.argv) > 1 else "Ünite 1 - Dişlerin Oluşum Dönemleri"
    do_deploy = "--deploy" in sys.argv
    files, qs = load_questions(unit)
    print(f"📂 Log dosyası: {len(files)} · Çıkarılan soru: {len(qs)}\n")
    if not qs:
        print("❌ Soru çıkarılamadı (loglar boş ya da JSON parse edilemedi).")
        return

    clean, gate_fail, leak, bloat, weak_ref = [], [], [], [], []
    stem_lens = []
    ans_dist = {l: 0 for l in "ABCDE"}
    for q in qs:
        stem_lens.append(len(q.get("question", "")))
        ans_dist[q.get("correctAnswer", "?")] = ans_dist.get(q.get("correctAnswer", "?"), 0) + 1
        ok, reason = _validate_single_question(q)
        blob = q["question"] + " " + " ".join(q["options"].values()) + " " + q.get("explanation", "")
        if not ok: gate_fail.append((q, reason))
        if _SOURCE_LEAK_RE.search(blob): leak.append(q)
        if BLOAT_RE.search(q["question"]): bloat.append(q)
        if refute_n(q) < 3: weak_ref.append(q)
        if ok and not _SOURCE_LEAK_RE.search(blob) and not BLOAT_RE.search(q["question"]) and refute_n(q) >= 3:
            clean.append(q)

    # Intra-set kopya kıyası: stem + doğru şık metni (feedback_duplicate_comparison)
    dupes = []
    for i in range(len(qs)):
        ti = norm(qs[i]["question"] + " " + qs[i]["options"].get(qs[i]["correctAnswer"], ""))
        for j in range(i + 1, len(qs)):
            tj = norm(qs[j]["question"] + " " + qs[j]["options"].get(qs[j]["correctAnswer"], ""))
            s = jacc(ti, tj)
            if s >= 0.72:
                dupes.append((round(s, 2), i + 1, j + 1))

    avg = sum(stem_lens) / len(stem_lens)
    print("="*64)
    print(f"  KALİTE RAPORU — {unit}")
    print("="*64)
    print(f"  Toplam soru            : {len(qs)}")
    print(f"  Gate'ten geçen (temiz) : {len(clean)}  (%{100*len(clean)/len(qs):.0f})")
    print(f"  Gate FAIL              : {len(gate_fail)}")
    print(f"  Kaynak sızıntısı       : {len(leak)}")
    print(f"  Şişme (sahte önsöz)    : {len(bloat)}")
    print(f"  Zayıf çürütme (<3 şık) : {len(weak_ref)}")
    print(f"  Ort. kök uzunluğu      : {avg:.0f} krk")
    print(f"  Cevap dağılımı         : " + " ".join(f"{k}:{v}" for k,v in ans_dist.items()))
    print(f"  Intra-set kopya çifti  : {len(dupes)} (eşik 0.72)")
    if gate_fail[:8]:
        print("\n  ⚠️ Gate FAIL örnekleri:")
        for q, r in gate_fail[:8]:
            print(f"     [{r}] {q['question'][:70]}")
    if dupes[:10]:
        print("\n  ⚠️ Olası kopya çiftleri (sıra no):")
        for s, i, j in sorted(dupes, reverse=True)[:10]:
            print(f"     {s}  Q{i} ↔ Q{j}")
            print(f"        Q{i}: {qs[i-1]['question'][:65]}")
            print(f"        Q{j}: {qs[j-1]['question'][:65]}")

    # Temiz soruları kaydet
    out = os.path.join(os.path.dirname(__file__), f"_clean_{re.sub(r'[^0-9A-Za-z]','_',unit)}.json")
    for q in clean: q.pop("_src", None)
    with open(out, "w", encoding="utf-8") as f:
        json.dump(clean, f, ensure_ascii=False, indent=2)
    print(f"\n  💾 Temiz {len(clean)} soru → {out}")

    if do_deploy:
        print("\n  🚀 Supabase'e yazılıyor (deploy_to_supabase → kendi gate'i de uygular)...")
        deploy_to_supabase(clean, "Pedodonti", unit)

if __name__ == "__main__":
    main()
