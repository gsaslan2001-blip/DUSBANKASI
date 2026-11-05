import os
import glob
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

    with open("scripts/tools/cerrahi_soru_listesi.txt", "w", encoding="utf-8") as out:
        for q in all_q:
            stem = q["question"].replace("\n", " ")[:90]
            out.write(f"Soru {q['q_num']:03d}: {stem} | meta: {q.get('flag_reason')}\n")

    print(f"573 soru cerrahi_soru_listesi.txt dosyasina yazildi.")

if __name__ == "__main__":
    main()
