import json
import re

def parse_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()
    
    parts = re.split(r'═══ CEVAP ANAHTARI ═══', text)
    questions_text = parts[0]
    answers_text = parts[1]
    
    questions = {}
    
    q_blocks = re.split(r'\*\*\d+\.\*\*', questions_text)
    
    for i, block in enumerate(q_blocks):
        block = block.strip()
        if not block or "═══ DUS KONU TESTİ ═══" in block or "Top 10 DUS Stratejik Test Serisi" in block:
            continue
        
        q_num = str(i)
        
        opt_matches = list(re.finditer(r'(?:^|\n)\s*([A-E])\)\s+', block))
        if not opt_matches:
            continue
            
        first_opt_start = opt_matches[0].start()
        q_text = block[:first_opt_start].strip()
        
        opts = {}
        for j in range(len(opt_matches)):
            o_letter = opt_matches[j].group(1)
            o_start = opt_matches[j].end()
            o_end = opt_matches[j+1].start() if j + 1 < len(opt_matches) else len(block)
            
            opts[o_letter] = block[o_start:o_end].strip()
            
        questions[q_num] = {
            "question": q_text,
            "options": opts
        }
    
    a_matches = re.finditer(r'(?:\*\*|)\s*(\d+)\.\s*([A-E])\s*\|\s*(.*?)(?=(?:\n(?:\*\*|)\s*\d+\.\s*[A-E]\s*\||\Z))', answers_text, re.DOTALL)
    
    for match in a_matches:
        q_num = match.group(1)
        c_ans = match.group(2)
        explanation = match.group(3).strip()
        
        if explanation.endswith("**"):
            explanation = explanation[:-2].strip()
            
        if q_num in questions:
            questions[q_num]["correctAnswer"] = c_ans
            questions[q_num]["explanation"] = explanation
            
    out_list = []
    for q_num in sorted(questions.keys(), key=lambda x: int(x)):
        out_list.append(questions[q_num])
        
    with open('parsed_travma.json', 'w', encoding='utf-8') as f:
        json.dump(out_list, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    parse_file(r'C:\Users\FURKAN\Desktop\Yeni Metin Belgesi (2).txt')
