import os
import glob
import sys
from test_cerrahi_parser import parse_markdown_file, SOURCE_DIR
from classify_cerrahi import classify_question

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

def main():
    files = sorted(glob.glob(os.path.join(SOURCE_DIR, "*.md")))
    all_q = []
    for f in files:
        qs, _ = parse_markdown_file(f)
        all_q.extend(qs)
    all_q.sort(key=lambda x: x["q_num"])

    unit_9_q = [q for q in all_q if classify_question(q) == "9 OROANTRAL İLİŞKİ ve OROANTRAL FİSTÜL"]
    print(f"Unit 9 soru sayisi: {len(unit_9_q)}")
    for q in unit_9_q:
        stem = q["question"].replace("\n", " ")[:90]
        print(f"Soru {q['q_num']:03d}: {stem}")

if __name__ == "__main__":
    main()
