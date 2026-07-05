import sys
import os
import re
import json

sys.path.insert(0, r'c:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts')
import shared

def parse():
    filepath = r'C:\Users\FURKAN\Desktop\Yeni Metin Belgesi (6).txt'
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    parts = re.split(r'\n---\n', content)
    if len(parts) >= 3:
        top_part = parts[0]
        bottom_part = "\n".join(parts[2:])
    else:
        print("Could not split by '---'")
        return

    # Regex to find each question block in top_part.
    # A block consists of some question text, followed by A) B) C) D) E) lines.
    # The question text is everything from the end of the previous E) to the next A).
    questions = {}
    q_index = 1
    
    # We find all options A-E and their preceding text.
    pattern = r'(?s)(.*?)\nA\)\s*(.*?)\nB\)\s*(.*?)\nC\)\s*(.*?)\nD\)\s*(.*?)\nE\)\s*(.*?)(?=\n.*?\nA\)|$)'
    for m in re.finditer(pattern, top_part):
        q_text = m.group(1).strip()
        # if q_text starts with any leftovers from previous, let's just strip it
        # Actually, the regex `(?=\n.*?\nA\)|$)` might fail if there's no `\nA)` ahead.
        # Let's just use it and see.
        opts = {
            "A": m.group(2).strip(),
            "B": m.group(3).strip(),
            "C": m.group(4).strip(),
            "D": m.group(5).strip(),
            "E": m.group(6).strip()
        }
        questions[str(q_index)] = {
            "lesson": "5. Sınıf Radyoloji",
            "unit": "2. ünite",
            "question": q_text,
            "options": opts,
            "source_file": "Yeni Metin Belgesi (6).txt"
        }
        q_index += 1

    print(f"Found {len(questions)} questions in top part")

    ans_matches = re.finditer(r'\*\*Soru (\d+)\s*—\s*Doğru:\s*([A-E])\*\*(.*?)(?=\*\*Soru|\Z)', bottom_part, flags=re.DOTALL)
    for m in ans_matches:
        q_num = m.group(1).strip()
        c_ans = m.group(2).strip()
        expl = m.group(3).strip()
        
        # Trim leading chars like "▸ " or " " or newlines from expl and previous text.
        # Wait, the lookahead `(?=\*\*Soru|\Z)` might include the next "▸ " in `expl`. We should strip it.
        expl = re.sub(r'[\s▸\-]+$', '', expl).strip()
        
        if q_num in questions:
            questions[q_num]["correctAnswer"] = c_ans
            questions[q_num]["explanation"] = expl

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

    accepted, rejected = shared.validate_question_batch(output, "5. Sınıf Radyoloji", "2. ünite")
    print(f"Accepted: {len(accepted)}, Rejected: {len(rejected)}")
    
    if accepted:
        shared.deploy_to_supabase(accepted, "5. Sınıf Radyoloji", "2. ünite", None)

if __name__ == "__main__":
    parse()
