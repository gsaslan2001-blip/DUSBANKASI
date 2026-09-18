"""Add previously rejected Cerrahi questions after explicit review override."""
from __future__ import annotations

import json
import re
from collections import defaultdict
from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import shared


def key(q: dict) -> str:
    return re.sub(r"\W+", " ", (q.get("question") or "").lower()).strip()

def canonical(q: dict) -> dict:
    if "options" in q:
        return q
    return {
        "lesson": q.get("lesson"), "unit": q.get("unit"),
        "question": q.get("question", ""),
        "options": {k: q.get(f"option_{k.lower()}", "") for k in "ABCDE"},
        "correctAnswer": q.get("correct_answer", ""),
        "explanation": q.get("explanation", ""),
    }


def main() -> int:
    root = Path(__file__).resolve().parents[1] / "recovery" / "rejected"
    grouped: dict[str, list[dict]] = defaultdict(list)
    seen: set[str] = set()
    for path in sorted(root.glob("Cerrahi_*.json")):
        envelope = json.loads(path.read_text(encoding="utf-8"))
        for item in envelope.get("items", []):
            q = canonical(item.get("question") or {})
            if q.get("lesson") != "Cerrahi" or not q.get("unit"):
                continue
            k = key(q)
            if k and k not in seen:
                seen.add(k)
                grouped[q["unit"]].append(q)

    total = 0
    for unit, questions in sorted(grouped.items()):
        existing = {key(q) for q in shared.get_questions_for_unit("Cerrahi", unit)}
        fresh = [q for q in questions if key(q) not in existing]
        if not fresh:
            print(f"{unit}: 0 yeni (mükerrerlerin tümü atlandı)")
            continue
        # Explicit user-requested override: preserve the audit provenance.
        if shared._write_to_supabase(fresh, "Cerrahi", unit, "reviewed_keep"):
            total += len(fresh)
            print(f"{unit}: {len(fresh)} reddedilmiş soru reviewed_keep olarak eklendi")
    print(f"TOPLAM_REJECTED_ADDED={total}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
