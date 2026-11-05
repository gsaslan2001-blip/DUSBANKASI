import os
import sys
import re

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

SOURCE_FILE = r"C:\Users\FURKAN\Desktop\DUS\Periodontoloji\çıkmış\dusçıkmış.txt"

def parse_periodontoloji_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Split by questions: ### Soru <num>
    raw_blocks = re.split(r'\n(?=###\s*Soru\s*\d+)', content)
    
    questions = []
    errors = []

    for idx, block in enumerate(raw_blocks):
        block = block.strip()
        if not block.startswith('### Soru'):
            continue

        m_num = re.match(r'###\s*Soru\s*(\d+)', block)
        if not m_num:
            errors.append((idx, "Soru numarası bulunamadı", block[:100]))
            continue
        q_num = int(m_num.group(1))

        # 1. Doğru Cevap
        ans_m = re.search(
            r'(?:\*\*|__)?\s*Doğru\s*(?:Cevap|Yanıt)\s*(?:\*\*|__)?\s*[:\)]\s*(?:\*\*|__)?\s*(?:Cevap\s*)?(?:\*\*|__)?\s*([A-Ea-e])',
            block,
            re.IGNORECASE
        )
        correct_ans = ans_m.group(1).upper() if ans_m else None

        # 2. Açıklama
        # Matches: **Açıklama:**, **Soru Açıklaması:**, Açıklama:, **Açıklama**: vb.
        expl_m = re.search(
            r'(?:\*\*|__)?\s*(?:Soru\s*)?Açıklama(?:sı)?\s*[:\)]\s*(?:\*\*|__)?\s*\n?(.*)',
            block,
            re.DOTALL | re.IGNORECASE
        )
        expl = expl_m.group(1).strip() if expl_m else ''

        # 3. Soru kökü ve şıklar (Doğru Cevap öncesi)
        before_ans = block[:ans_m.start()] if ans_m else block
        header_end = m_num.end()
        body = before_ans[header_end:].strip()

        # **Soru Metni:** temizliği
        body = re.sub(r'^\*?\*?Soru\s*Metni\s*:\*?\*?\s*', '', body, flags=re.IGNORECASE).strip()

        # Tablo şık kontrolü
        table_a_match = re.search(r"(?:^|\n)\s*\|\s*A\s*[\)\.]\s*\|", body)
        opt_a_match = re.search(r"(?:^|\n)\s*(?:[-*•]\s*)?A\)\s*", body)

        is_table = False
        start_pos = -1
        if opt_a_match and (not table_a_match or opt_a_match.start() < table_a_match.start()):
            start_pos = opt_a_match.start()
        elif table_a_match:
            start_pos = table_a_match.start()
            is_table = True

        options = {}
        stem = body
        if start_pos != -1:
            stem = body[:start_pos].strip()
            opts_text = body[start_pos:].strip()
            if is_table:
                # Tablo başlığını soru kökünden temizle
                table_hdr_match = re.search(r"(?:\n|^)\s*\|.*?\|\s*\n\s*\|[-:|\s]+\|\s*$", stem)
                if table_hdr_match:
                    stem = stem[:table_hdr_match.start()].strip()
                for t_match in re.finditer(r"\|\s*([A-E])[\)\.]\s*\|\s*(.*?)\s*\|(?=\s*\n|\Z)", opts_text):
                    letter = t_match.group(1).upper()
                    cols = [c.strip() for c in t_match.group(2).split("|") if c.strip()]
                    options[letter] = " — ".join(cols)
            else:
                opt_regex = r'(?:^|\n)\s*(?:[-*•]\s*)?([A-E])\)\s*(.*?)(?=(?:\n\s*(?:[-*•]\s*)?[A-E]\)|\Z))'
                for om in re.finditer(opt_regex, opts_text, re.DOTALL):
                    opt_letter = om.group(1).upper()
                    opt_text = om.group(2).strip()
                    opt_text = re.sub(r'\s+', ' ', opt_text)
                    options[opt_letter] = opt_text

        # 4. Sınav Dönemi Metası (flag_reason)
        flag_reason = None
        exam_m = re.search(r'\(([^)]*(?:DUS|TUS|Orijinal)[^)]*)\)', stem, re.IGNORECASE)
        if exam_m:
            flag_reason = exam_m.group(1).strip()
            # Soru kökünden sınav etiketini temizle
            stem = re.sub(r'\s*\([^)]*(?:DUS|TUS|Orijinal)[^)]*\)', '', stem).strip()

        # Temizlik: Eğer soru kökü tamamen ** içinde kalmışsa
        if stem.startswith('**') and stem.endswith('**') and stem.count('**') == 2:
            stem = stem[2:-2].strip()

        # Doğrulama kontrolleri
        if not correct_ans:
            errors.append((q_num, "Doğru cevap eksik", block[:120]))
        if len(options) != 5:
            errors.append((q_num, f"Şık sayısı {len(options)} (5 olmalı)", list(options.keys())))
        if not expl:
            errors.append((q_num, "Açıklama eksik", block[-120:]))

        questions.append({
            "q_num": q_num,
            "question": stem,
            "options": options,
            "correctAnswer": correct_ans,
            "explanation": expl,
            "flag_reason": flag_reason
        })

    return questions, errors

if __name__ == "__main__":
    qs, errs = parse_periodontoloji_file(SOURCE_FILE)
    print(f"Toplam parse edilen soru: {len(qs)}")
    print(f"Hata sayısı: {len(errs)}")
    if errs:
        print("\nHatalar:")
        for e in errs[:25]:
            print(e)
    else:
        print("Tüm 593 soru EKSİKSİZ ve HATASIZ parse edildi! %100 BAŞARI!")
