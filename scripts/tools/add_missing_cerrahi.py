"""Complete partially imported Cerrahi units without inserting duplicates."""
from __future__ import annotations
import json, re, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import shared

def key(q):
    return re.sub(r"\W+", " ", (q.get("question") or "").lower()).strip()

def canonical(q):
    if "options" in q:
        return q
    return {
        "lesson": q.get("lesson"), "unit": q.get("unit"),
        "question": q.get("question", ""),
        "options": {k: q.get(f"option_{k.lower()}", "") for k in "ABCDE"},
        "correctAnswer": q.get("correct_answer", ""),
        "explanation": q.get("explanation", ""),
    }

def main():
    root = Path(r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı\_cerrahi_json6")
    total = 0
    for path in sorted(root.glob("*.json")):
        rows = [canonical(q) for q in json.loads(path.read_text(encoding="utf-8"))]
        if not rows or rows[0].get("lesson") != "Cerrahi": continue
        unit = rows[0]["unit"]
        existing = {key(q) for q in shared.get_questions_for_unit("Cerrahi", unit)}
        fresh = [q for q in rows if key(q) not in existing]
        if not fresh:
            continue
        accepted, rejected = shared.validate_question_batch(fresh, "Cerrahi", unit)
        if accepted and shared._write_to_supabase(accepted, "Cerrahi", unit, None):
            total += len(accepted)
            print(f"{unit}: {len(accepted)} eksik soru eklendi; {len(rejected)} kalite reddi")
    print(f"TOPLAM_MISSING_ADDED={total}")

if __name__ == "__main__":
    raise SystemExit(main())
