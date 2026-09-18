import os, sys, glob, re

sys.path.insert(0, os.path.dirname(__file__))
if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

search_paths = [
    r"C:\Users\FURKAN\Desktop\Projeler",
    r"C:\Users\FURKAN\Desktop\DUS",
    r"C:\Users\FURKAN\Desktop"
]

found_files = []

for root_dir in search_paths:
    if not os.path.exists(root_dir):
        continue
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # Skip node_modules, .git, .next, etc.
        if any(x in dirpath for x in ["node_modules", ".git", ".next", "chrome_dev_profile"]):
            continue
        for f in filenames:
            if f.endswith(".txt") or f.endswith(".json"):
                full_p = os.path.join(dirpath, f)
                try:
                    with open(full_p, "r", encoding="utf-8", errors="ignore") as fp:
                        head = fp.read(4000)
                        if "questions_json" in head or "option_a" in head or "question" in head and "explanation" in head:
                            found_files.append(full_p)
                except Exception:
                    pass

print(f"Total matching files found: {len(found_files)}\n")
for fp in sorted(found_files):
    print(fp)
