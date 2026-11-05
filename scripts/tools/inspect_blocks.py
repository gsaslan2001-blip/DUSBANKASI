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
    
    # Her 10 sorunun konusunu özetleyelim
    for i in range(0, len(all_q), 10):
        chunk = all_q[i:i+10]
        start_num = chunk[0]["q_num"]
        end_num = chunk[-1]["q_num"]
        samples = [q["question"].replace("\n", " ")[:40] for q in chunk[:3]]
        print(f"[{start_num:03d} - {end_num:03d}] {samples[0]} | {samples[1]} | {samples[2]}")

if __name__ == "__main__":
    main()
