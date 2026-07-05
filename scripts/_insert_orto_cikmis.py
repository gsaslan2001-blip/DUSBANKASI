# -*- coding: utf-8 -*-
"""ÇIKMIŞ SORULAR / Ortodonti — parse edilmiş çıkmış soruları Supabase'e ekler.
quality_flag='cikmis', flag_reason=sınav dönemi (metadata), flagged=False.
"""
import json, sys, time, urllib.request
sys.stdout.reconfigure(encoding="utf-8")

URL = "https://vblndoyjmkgaeuihydyd.supabase.co"
KEY = "sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3"
LESSON, UNIT = "ÇIKMIŞ SORULAR", "Ortodonti"
SRC = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\_orto_cikmis_parsed.json"

qs = json.load(open(SRC, encoding="utf-8"))

rows = []
for q in qs:
    exam = q.get("exam")
    if exam:
        exam = exam.strip().lstrip("(").rstrip(")").strip()  # parantezsiz
    rows.append({
        "lesson": LESSON, "unit": UNIT,
        "question": q["question"],
        "option_a": q["option_a"], "option_b": q["option_b"],
        "option_c": q["option_c"], "option_d": q["option_d"],
        "option_e": q["option_e"],
        "correct_answer": q["correctAnswer"],
        "explanation": q["explanation"],
        "quality_flag": "cikmis",
        "flagged": False,
        "flag_reason": exam,   # None olabilir (q169)
    })

headers = {
    "apikey": KEY, "Authorization": f"Bearer {KEY}",
    "Content-Type": "application/json", "Prefer": "return=minimal",
}
url = f"{URL}/rest/v1/questions"
CHUNK = 10
written = 0
for i in range(0, len(rows), CHUNK):
    chunk = rows[i:i+CHUNK]
    payload = json.dumps(chunk, ensure_ascii=False).encode("utf-8")
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
            urllib.request.urlopen(req)
            written += len(chunk)
            print(f"  ✅ {written}/{len(rows)}")
            break
        except urllib.error.HTTPError as e:
            body = e.read().decode(errors="replace")
            print(f"  ❌ HTTP {e.code} (chunk {i}): {body[:300]}")
            if 500 <= e.code < 600 and attempt < 3:
                time.sleep([2,5,12][attempt]); continue
            sys.exit(1)
        except Exception as e:
            print(f"  ❌ {e} (deneme {attempt})")
            if attempt < 3:
                time.sleep([2,5,12][attempt]); continue
            sys.exit(1)

print(f"\n🎉 TOPLAM {written} çıkmış soru eklendi → {LESSON} / {UNIT}")
