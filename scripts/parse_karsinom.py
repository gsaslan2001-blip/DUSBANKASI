import sys
import os
import re

sys.path.insert(0, r'c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts')
import shared

def parse_karsinom():
    path = r"C:\Users\FURKAN\Desktop\Yeni Metin Belgesi (5).txt"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    parts = re.split(r'\n---\n', content)
    if len(parts) < 2:
        print("Could not split by '---'")
        return
        
    top_part = parts[0]
    bottom_part = parts[1]

    questions = {}
    
    # Parse Top Part
    q_blocks = re.split(r'\*\*(\d+)\.\*\*', top_part)
    for i in range(1, len(q_blocks), 2):
        q_num = q_blocks[i].strip()
        block = q_blocks[i+1].strip()
        
        opt_start = re.search(r'(?:^|\n)A\)\s', block)
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
                "options": opts,
                "lesson": "5. Sınıf Radyoloji",
                "unit": "Karsinom",
                "source_file": "Yeni Metin Belgesi (5).txt"
            }

    # Parse Bottom Part
    a_blocks = re.split(r'\*\*Soru (\d+)\*\*', bottom_part)
    for i in range(1, len(a_blocks), 2):
        q_num = a_blocks[i].strip()
        block = a_blocks[i+1].strip()
        
        c_match = re.search(r'Cevap:\*\s*\*\*([A-E])\*\*', block)
        if not c_match:
            c_match = re.search(r'Cevap:\*\s*([A-E])', block)
            
        c_ans = c_match.group(1) if c_match else ""
        
        exp_match = re.search(r'\*Neden.*', block, re.DOTALL | re.IGNORECASE)
        explanation = exp_match.group(0).strip() if exp_match else block.strip()
        
        if q_num in questions:
            questions[q_num]["correctAnswer"] = c_ans
            questions[q_num]["explanation"] = explanation

    # Normalize to array
    output = []
    for q_num in sorted(questions.keys(), key=lambda x: int(x)):
        q = questions[q_num]
        output.append({
            "lesson": q["lesson"],
            "unit": q["unit"],
            "question": q["question"],
            "options": q["options"],
            "correctAnswer": q.get("correctAnswer", ""),
            "explanation": q.get("explanation", ""),
            "source_file": q["source_file"]
        })
        
    print(f"Parsed {len(output)} questions")
    
    lesson = "5. Sınıf Radyoloji"
    unit = "Karsinom"
    
    accepted, rejected = shared.validate_question_batch(output, lesson, unit)
    print(f"Accepted: {len(accepted)}, Rejected: {len(rejected)}")
    if accepted:
        shared.deploy_to_supabase(accepted, lesson, unit, None)

if __name__ == "__main__":
    parse_karsinom()
