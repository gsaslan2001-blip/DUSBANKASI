"""Convert Gemini Cerrahi TXT exports to canonical JSON without changing sources."""
from __future__ import annotations

import argparse
import json
from pathlib import Path


REQUIRED = {"lesson", "unit", "question", "option_a", "option_b", "option_c", "option_d", "option_e", "correct_answer", "explanation"}


def repair_json_strings(text: str) -> str:
    out: list[str] = []
    in_string = False
    escaped = False
    for index, ch in enumerate(text):
        if in_string:
            if escaped:
                out.append(ch)
                escaped = False
            elif ch == "\\":
                out.append(ch)
                escaped = True
            elif ch == '"':
                # Gemini occasionally emits unescaped quotation marks inside
                # Turkish prose. A JSON string closes only when the next
                # significant character is a structural delimiter.
                lookahead = text[index + 1 :].lstrip()
                if not lookahead or lookahead[0] in ",}]:":
                    out.append(ch)
                    in_string = False
                else:
                    out.append('\\"')
            elif ch in "\r\n":
                out.append("\\n")
            else:
                out.append(ch)
        else:
            out.append(ch)
            if ch == '"':
                in_string = True
    return "".join(out)


def convert(source: Path, target: Path) -> int:
    raw = source.read_text(encoding="utf-8")
    blocks = __import__("re").findall(r"<questions_json>([\s\S]*?)</questions_json>", raw)
    if not blocks:
        raise ValueError("questions_json bloğu bulunamadı")
    payload = "\n".join(blocks).strip()
    try:
        rows = json.loads(repair_json_strings(payload))
    except json.JSONDecodeError as exc:
        # Recover each object independently. Gemini exports sometimes contain
        # raw newlines or a broken object later in the array; valid objects
        # before/after it should still be preserved.
        starts = [m.start() for m in __import__("re").finditer(r"(?m)^\s*\{\s*$", payload)]
        rows = []
        failed = 0
        for index, object_start in enumerate(starts):
            object_end = starts[index + 1] if index + 1 < len(starts) else len(payload)
            candidate = payload[object_start:object_end].rstrip().rstrip(",")
            try:
                repaired = repair_json_strings(candidate)
                row, _ = json.JSONDecoder().raw_decode(repaired.lstrip())
                rows.append(row)
            except json.JSONDecodeError:
                failed += 1
        if not rows:
            raise exc
        print(f"UYARI {source.name}: parça-parça kurtarma; {len(rows)} soru alındı, {failed} bozuk nesne dışarıda bırakıldı")
    if not isinstance(rows, list) or not rows:
        raise ValueError("soru listesi boş")
    for index, row in enumerate(rows, 1):
        missing = REQUIRED - row.keys()
        if missing:
            raise ValueError(f"{index}. soruda eksik alanlar: {sorted(missing)}")
        if row["lesson"] != "Cerrahi":
            raise ValueError(f"{index}. soru Cerrahi değil: {row['lesson']!r}")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
    return len(rows)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("source_dir", type=Path)
    parser.add_argument("target_dir", type=Path)
    args = parser.parse_args()
    sources = sorted(p for p in args.source_dir.glob("*.txt") if p.name[:3].isdigit() and 1 <= int(p.name[:3]) <= 17)
    total = 0
    for source in sources:
        target = args.target_dir / (source.stem + ".json")
        count = convert(source, target)
        total += count
        print(f"{source.name}: {count} soru -> {target}")
    print(f"TOPLAM: {len(sources)} dosya, {total} soru")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
