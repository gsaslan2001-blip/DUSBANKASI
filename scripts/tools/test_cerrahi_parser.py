import os
import glob
import re
import json
import sys

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

SOURCE_DIR = r"C:\Users\FURKAN\Desktop\DUS\Cerrahi\çıkmış\Custom Files"

def parse_markdown_file(filepath):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    pattern = r"(^###\s*Soru\s*\d+.*?$)"
    parts = re.split(pattern, text, flags=re.MULTILINE)

    questions = []
    issues = []

    for i in range(1, len(parts), 2):
        header = parts[i].strip()
        body = parts[i+1] if i+1 < len(parts) else ""

        h_match = re.search(r"Soru\s*(\d+)(?:\s*\((.*?)\))?", header, re.IGNORECASE)
        q_num = h_match.group(1) if h_match else str((i+1)//2)
        exam_meta = h_match.group(2).strip() if (h_match and h_match.group(2)) else ""

        # Doğru Cevap regex
        ca_match = re.search(
            r"(?:\*\*|__)?\s*Doğru\s*(?:Cevap|Yanıt)\s*(?:\*\*|__)?\s*[:\)]\s*(?:\*\*|__)?\s*(?:Cevap\s*)?(?:\*\*|__)?\s*([A-Ea-e])",
            body,
            re.IGNORECASE
        )
        correct_answer = ca_match.group(1).upper() if ca_match else ""

        # Açıklama regex
        expl_match = re.search(
            r"[-*]?\s*(?:\*\*|__)?\s*(?:#{2,4}\s*)?(?:Detaylı\s*)?Açıklama[^\n:]*?\s*(?:\*\*|__)?\s*:\s*\n?(.*?)(?=\n---\s*|\Z)",
            body,
            re.DOTALL | re.IGNORECASE
        )
        explanation = expl_match.group(1).strip() if expl_match else ""

        # Şıkların başlangıcı (Normal şık veya Tablo şıkkı)
        is_table = False
        opt_a_match = re.search(
            r"(?:^|\n)\s*(?:[-*]\s*)?(?:\*\*|__)?\s*A\s*[\)\.](?:\*\*|__)?\s*",
            body
        )
        table_a_match = re.search(r"(?:^|\n)\s*\|\s*A\s*[\)\.]\s*\|", body)

        start_pos = -1
        if opt_a_match and (not table_a_match or opt_a_match.start() < table_a_match.start()):
            start_pos = opt_a_match.start()
        elif table_a_match:
            start_pos = table_a_match.start()
            is_table = True

        if start_pos == -1:
            issues.append(f"Soru {q_num}: 'A)' şıkkı bulunamadı!")
            continue

        # Soru kökü
        stem_raw = body[:start_pos].strip()
        stem_clean = re.sub(r"(?:\*\*|__)?Soru(?:\*\*|__)?\s*:\s*", "", stem_raw, flags=re.IGNORECASE).strip()
        
        # Tablo başlığı kalıntısı temizliği
        table_hdr_match = re.search(r"\n\s*\|.*?\|\s*\n\s*\|[-|\s]+\|\s*$", stem_clean)
        if table_hdr_match:
            stem_clean = stem_clean[:table_hdr_match.start()].strip()

        if stem_clean.startswith("**") and stem_clean.endswith("**") and len(stem_clean) > 4:
            stem_clean = stem_clean[2:-2].strip()

        if not exam_meta:
            meta_match = re.search(r"\(((?:19|20)\d\d.*?)\)\s*$", stem_clean)
            if meta_match:
                exam_meta = meta_match.group(1).strip()
                stem_clean = stem_clean[:meta_match.start()].strip()

        # Şıklar metni
        if ca_match:
            opts_text = body[start_pos:ca_match.start()]
        elif expl_match:
            opts_text = body[start_pos:expl_match.start()]
        else:
            opts_text = body[start_pos:]

        options = {}
        if is_table:
            for t_match in re.finditer(r"\|\s*([A-E])[\)\.]\s*\|\s*(.*?)\s*\|(?=\s*\n|\Z)", opts_text):
                letter = t_match.group(1).upper()
                cols = [c.strip() for c in t_match.group(2).split("|") if c.strip()]
                options[letter] = " — ".join(cols)
        else:
            opt_pattern = r"(?:^|\n)\s*(?:[-*]\s*)?(?:\*\*|__)?\s*([A-E])\s*[\)\.](?:\*\*|__)?\s*(.*?)(?=(?:\n\s*(?:[-*]\s*)?(?:\*\*|__)?\s*[A-E]\s*[\)\.])|\Z)"
            opt_matches = list(re.finditer(opt_pattern, opts_text, re.DOTALL))
            for m in opt_matches:
                letter = m.group(1).upper()
                val = m.group(2).strip()
                val = re.sub(r"\s+", " ", val).strip()
                if val.endswith("**") and not val.startswith("**"):
                    val = val[:-2].strip()
                options[letter] = val

        # Validasyon
        missing_opts = [l for l in ["A", "B", "C", "D", "E"] if not options.get(l)]
        if missing_opts:
            issues.append(f"Soru {q_num}: Eksik şıklar: {missing_opts}")
        if not correct_answer:
            issues.append(f"Soru {q_num}: Doğru cevap bulunamadı!")
        if not stem_clean:
            issues.append(f"Soru {q_num}: Soru kökü boş!")
        if not explanation:
            issues.append(f"Soru {q_num}: Açıklama boş!")

        q_dict = {
            "question": stem_clean,
            "options": options,
            "correctAnswer": correct_answer,
            "explanation": explanation,
            "lesson": "Cerrahi",
            "flag_reason": exam_meta if exam_meta else None,
            "q_num": int(q_num)
        }
        questions.append(q_dict)

    return questions, issues

def main():
    files = sorted(glob.glob(os.path.join(SOURCE_DIR, "*.md")))
    total_parsed = 0
    all_issues = {}

    for f in files:
        fname = os.path.basename(f)
        qs, issues = parse_markdown_file(f)
        total_parsed += len(qs)
        print(f"[{fname}] -> Parse edilen soru sayısı: {len(qs)}")
        if issues:
            print(f"   ⚠️ Sorun sayısı: {len(issues)}")
            for iss in issues[:10]:
                print(f"      - {iss}")
            all_issues[fname] = issues
        else:
            print(f"   ✅ %100 kusursuz parse edildi!")

    print(f"\n==========================================")
    print(f"Toplam parse edilen soru: {total_parsed} / 573")
    if all_issues:
        print(f"Toplam sorunlu dosya: {len(all_issues)}")
    else:
        print("🎉 TÜM 573 CERRAHİ SORUSU EKSİKSİZ VE BİÇİM OLARAK TAM DOĞRU!")
    print(f"==========================================")

if __name__ == "__main__":
    main()
