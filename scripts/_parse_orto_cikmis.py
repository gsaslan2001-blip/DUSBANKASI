# -*- coding: utf-8 -*-
"""ORTO ÇIKMIŞLAR.txt → sağlam parse (pozisyon-temelli, 'Doğru Cevap' çıpalı).
Çıktı: scripts/_orto_cikmis_parsed.json  (analiz + sonradan insert için).
"""
import re, sys, json
sys.stdout.reconfigure(encoding="utf-8")

SRC = r"C:\Users\FURKAN\Desktop\ORTO ÇIKMIŞLAR.txt"
OUT = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\_orto_cikmis_parsed.json"

with open(SRC, encoding="utf-8") as f:
    raw = f.read()

text = raw.replace("**", "")

# Çıpalar
DC_RE = re.compile(r'Doğru\s*Cevap\s*:?\s*([A-E])', re.IGNORECASE)
# Soru-başı adayları: satır başında <num> . (noktadan sonra boşluk OLABİLİR/OLMAYABİLİR)
QS_RE = re.compile(r'(?m)^[ \t]*(\d{1,3})[ \t]*\.\s*(?=\S)')
# Sınav dönemi metası
EXAM_RE = re.compile(r'\(([^()]*?(?:Orijinal|orijinal|DUS|dus|İlkbahar|Sonbahar|Eylül|Nisan|ilkbahar|sonbahar)[^()]*?)\)')
OPT_RE = re.compile(r'([A-E])[\)\}]\s*(.*?)(?=[A-E][\)\}]|\Z)', re.DOTALL)

def clean(s: str) -> str:
    s = re.sub(r'\s*\n\s*', ' ', s)
    s = re.sub(r'\s+([.,;:])', r'\1', s)   # " ." -> "."
    s = re.sub(r'\s{2,}', ' ', s)
    return s.strip()

dcs = list(DC_RE.finditer(text))
qss = list(QS_RE.finditer(text))
qs_pos = [m.start() for m in qss]

questions = []
errors = []

for i, dc in enumerate(dcs):
    correct = dc.group(1).upper()
    dc_start, dc_end = dc.start(), dc.end()

    # bu soruya ait QS = dc_start'tan önceki son QS
    stem_qs = None
    for m in qss:
        if m.start() < dc_start:
            stem_qs = m
        else:
            break
    if stem_qs is None:
        errors.append(("?", "qs_yok", text[max(0,dc_start-80):dc_start]))
        continue
    num = stem_qs.group(1)
    pre = text[stem_qs.end():dc_start]   # stem + options

    # açıklama: dc_end'ten sonraki ilk QS'e kadar (yoksa EOF)
    nxt = None
    for p in qs_pos:
        if p > dc_end:
            nxt = p
            break
    post = text[dc_end: nxt if nxt is not None else len(text)]
    m_ac = re.search(r'Açıklama\s*:?\s*', post)
    explanation = clean(post[m_ac.end():] if m_ac else post)

    # şıklar
    opt = {}
    for mo in OPT_RE.finditer(pre):
        opt[mo.group(1)] = clean(mo.group(2))
    m_firstopt = re.search(r'[A-E][\)\}]', pre)
    stem = clean(pre[:m_firstopt.start()] if m_firstopt else pre)

    exam = None
    me = EXAM_RE.search(stem)
    if me:
        exam = me.group(0).strip()
        stem = clean(EXAM_RE.sub('', stem))

    # doğrulama: en az 4 şık + doğru cevap şıkta var + stem dolu
    present = [l for l in "ABCDE" if opt.get(l)]
    if len(present) < 4 or correct not in opt or not stem:
        errors.append((num, f"siklar={present} correct={correct} stemlen={len(stem)}", stem[:90]))
        continue

    questions.append({
        "num": num, "question": stem,
        "option_a": opt.get("A",""), "option_b": opt.get("B",""),
        "option_c": opt.get("C",""), "option_d": opt.get("D",""),
        "option_e": opt.get("E",""),
        "correctAnswer": correct, "explanation": explanation, "exam": exam,
    })

print(f"DC_count={len(dcs)}  QS_count={len(qss)}  PARSED={len(questions)}  ERRORS={len(errors)}")
print(f"exam_meta_olan={sum(1 for q in questions if q['exam'])}  yok={sum(1 for q in questions if not q['exam'])}")
print(f"5-şık={sum(1 for q in questions if q['option_e'])}  4-şık={sum(1 for q in questions if not q['option_e'])}")
print("\n=== HATALAR ===")
for e in errors:
    print(e)
print("\n=== exam yok olanlar (no) ===", [q['num'] for q in questions if not q['exam']])

with open(OUT, "w", encoding="utf-8") as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)
print(f"\n→ {OUT} yazıldı ({len(questions)} soru)")
