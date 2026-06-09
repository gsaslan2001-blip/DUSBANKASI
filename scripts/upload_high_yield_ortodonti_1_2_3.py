import os
import re
import sys

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)
import shared

def parse_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    split_match = re.search(r'(?:---|═══.*?═══)\s*\n+(?=(?:<.*?>\n)*\s*▸)', content)
    if not split_match:
        split_match = re.search(r'\n+(?=(?:<.*?>\n)*\s*▸)', content)

    if not split_match:
        print("Ayrım bulunamadı!")
        return []

    top_part = content[:split_match.start()]
    bottom_part = content[split_match.end():]

    questions = {}

    q_matches = list(re.finditer(r'^(?:\*\*)?(\d+)\.\s*(?:\*\*)?', top_part, re.MULTILINE))
    
    for i in range(len(q_matches)):
        start_idx = q_matches[i].end()
        q_num = q_matches[i].group(1)
        end_idx = q_matches[i+1].start() if i + 1 < len(q_matches) else len(top_part)
        
        block = top_part[start_idx:end_idx].strip()
        
        opt_start = re.search(r'(?:^|\n)[A-E]\)\s', block)
        if opt_start:
            q_text = block[:opt_start.start()].strip()
            options_text = block[opt_start.start():].strip()
            
            opts = {}
            opt_matches = list(re.finditer(r'(?:^|\n)([A-E])\)\s', options_text))
            for j in range(len(opt_matches)):
                o_letter = opt_matches[j].group(1)
                o_start = opt_matches[j].end()
                o_end = opt_matches[j+1].start() if j + 1 < len(opt_matches) else len(options_text)
                
                opt_str = options_text[o_start:o_end].strip()
                opts[o_letter] = opt_str
            
            questions[q_num] = {
                "question": q_text,
                "options": opts
            }

    # Parse bottom part using finditer
    ans_matches = list(re.finditer(r'▸\s*(?:\*\*)?Soru\s*(\d+).*?(?=\n\s*▸|\Z)', bottom_part, re.DOTALL | re.IGNORECASE))
    
    for match in ans_matches:
        q_num = match.group(1)
        block = match.group(0)
        
        c_match = re.search(r'Doğru:\s*\**([A-E])\**', block)
        c_ans = c_match.group(1) if c_match else ""
        
        lines = block.strip().split('\n')
        expl_lines = []
        started = False
        for line in lines:
            if re.match(r'^(?:Neden|Anahtar|\*\*Neden)', line.strip(), re.IGNORECASE):
                started = True
            elif line.strip().startswith('Doğru:'):
                continue
            
            if started:
                expl_lines.append(line.strip())
        
        explanation = "\n".join(expl_lines).strip()
        if not explanation:
            explanation = "Açıklama bulunamadı."
            
        if str(q_num) in questions:
            questions[str(q_num)]["correctAnswer"] = c_ans
            questions[str(q_num)]["explanation"] = explanation

    output = []
    for q_num, q_data in sorted(questions.items(), key=lambda x: int(x[0])):
        if q_data.get("correctAnswer"):
            output.append({
                "q_num": q_num,
                "question": q_data["question"],
                "options": q_data["options"],
                "correctAnswer": q_data["correctAnswer"],
                "explanation": q_data["explanation"]
            })
        else:
            print(f"Soru {q_num} için cevap bulunamadı!")

    return output

if __name__ == "__main__":
    import json
    import os
    import sys
    
    # 1.txt: Load the 2 rejected questions from the recovery file and insert via _write_to_supabase
    rejected_1_file = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\recovery\rejected\Ortodonti_Ünite_1_-_BÜYÜME_ve_GELİŞİM_20260609_201110.json"
    if os.path.exists(rejected_1_file):
        with open(rejected_1_file, "r", encoding="utf-8") as f:
            rej_data = json.load(f)
            questions_to_add = [item["question"] for item in rej_data.get("items", [])]
            if questions_to_add:
                shared._write_to_supabase(questions_to_add, "Ortodonti", "Ünite 1 - BÜYÜME ve GELİŞİM", quality_flag="high_yield")
                print(f"1.txt: {len(questions_to_add)} reddedilen soru DB'ye yazıldı!")
    
    # 2.txt: Soru 1 was skipped.
    path2 = r"c:\Users\FURKAN\Desktop\Orto sorular\orto sorular\2.txt"
    unit2 = "Ünite 2 - DENTAL YAPILARIN GELİŞİMİ"
    print(f"İşleniyor: {path2} -> {unit2}")
    q2_all = parse_file(path2)
    to_deploy_2 = []
    for q in q2_all:
        if "Gum pad" in q["question"] or "dişeti yastıkları" in q["question"]:
            to_deploy_2.append(q)
    
    if to_deploy_2:
        shared._write_to_supabase(to_deploy_2, "Ortodonti", unit2, quality_flag="high_yield")
        print(f"2.txt: {len(to_deploy_2)} eksik soru DB'ye yazıldı!")

    # 3.txt: Q1-Q10 were sent to deploy. 9 accepted, 1 rejected. We must read the rejected 1 from the 3.txt recovery file,
    # and we must also parse 3.txt for Q11-Q50 and push them.
    rejected_3_file = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\recovery\rejected\Ortodonti_Ünite_3_-_ORTODONTİK_TEDAVİNİN_BİYOLOJİSİ_20260609_201314.json"
    if os.path.exists(rejected_3_file):
        with open(rejected_3_file, "r", encoding="utf-8") as f:
            rej_data_3 = json.load(f)
            questions_to_add_3 = [item["question"] for item in rej_data_3.get("items", [])]
            if questions_to_add_3:
                shared._write_to_supabase(questions_to_add_3, "Ortodonti", "Ünite 3 - ORTODONTİK TEDAVİNİN BİYOLOJİSİ", quality_flag="high_yield")
                print(f"3.txt: {len(questions_to_add_3)} reddedilen soru DB'ye yazıldı!")
    
    path3 = r"c:\Users\FURKAN\Desktop\Orto sorular\orto sorular\3.txt"
    unit3 = "Ünite 3 - ORTODONTİK TEDAVİNİN BİYOLOJİSİ"
    print(f"İşleniyor: {path3} -> {unit3}")
    q3_all = parse_file(path3)
    to_deploy_3_rest = []
    for q in q3_all:
        if int(q["q_num"]) > 10:
            to_deploy_3_rest.append(q)
            
    if to_deploy_3_rest:
        shared._write_to_supabase(to_deploy_3_rest, "Ortodonti", unit3, quality_flag="high_yield")
        print(f"3.txt: {len(to_deploy_3_rest)} soru (Q11-Q50) DB'ye yazıldı!")


