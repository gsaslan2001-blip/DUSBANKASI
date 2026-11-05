import os
import glob
import re
import sys
from test_cerrahi_parser import parse_markdown_file, SOURCE_DIR

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
    print(f"Toplam soru: {len(all_q)}")
    for i in range(0, len(all_q), 25):
        q = all_q[i]
        stem = q["question"].replace("\n", " ")[:80]
        print(f"Soru {q['q_num']}: {stem}... | meta: {q.get('flag_reason')}")

if __name__ == "__main__":
    main()
