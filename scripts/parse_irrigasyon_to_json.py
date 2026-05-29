import re
import json
import os

def parse_irrigasyon_txt():
    txt_path = r"C:\Users\FURKAN\Desktop\DUS\Endodonti\endo sorular\irrigasyon.txt"
    if not os.path.exists(txt_path):
        raise FileNotFoundError(f"Could not find {txt_path}")
        
    with open(txt_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    questions = {}
    
    current_q_num = None
    current_q_lines = []
    
    for idx, line in enumerate(lines):
        # We stop parsing question text once we hit the solutions section
        if idx >= 475: 
            break
            
        stripped = line.strip()
        
        # If we see metadata triggers, terminate the current question accumulation
        if current_q_num is not None:
            if stripped.startswith("Üst-Konsept") or stripped.startswith("═══") or stripped.startswith("---"):
                questions[current_q_num] = {
                    "raw_text": "\n".join(current_q_lines)
                }
                current_q_num = None
                current_q_lines = []
                continue
        
        # Match question start like: "1. 45 yaşında..." or "31. 38 yaşında..." or "10."
        m = re.match(r"^(\d+)\.(?:\s+(.*))?$", stripped)
        if m:
            if current_q_num is not None:
                # Save previous question
                questions[current_q_num] = {
                    "raw_text": "\n".join(current_q_lines)
                }
            current_q_num = int(m.group(1))
            val = m.group(2)
            if val:
                current_q_lines = [val.strip()]
            else:
                current_q_lines = []
        elif current_q_num is not None:
            current_q_lines.append(stripped)
            
    # Save the last question in the first part if still active
    if current_q_num is not None:
        questions[current_q_num] = {
            "raw_text": "\n".join(current_q_lines)
        }
        
    # Now let's process each raw text to extract question stem and options
    for q_num, data in questions.items():
        raw_text = data["raw_text"]
        # Find all options: A) to E)
        # We replace newline with space to simplify regex matching for inline options.
        normalized_text = raw_text.replace("\n", " ")
        
        # Let's find where the options start. Options start with A)
        opt_start = normalized_text.find("A)")
        if opt_start == -1:
            opt_start = normalized_text.find("A) ")
            
        if opt_start != -1:
            question_stem = normalized_text[:opt_start].strip()
            options_text = normalized_text[opt_start:]
            
            # Find options
            opt_matches = re.findall(r"([A-E])\)\s*(.*?)(?=\s*[A-E]\)\s*|\Z)", options_text)
            options = {}
            for opt_char, opt_val in opt_matches:
                options[opt_char] = opt_val.strip()
                
            data["question"] = question_stem
            data["options"] = options
        else:
            # Fallback if A) not found
            data["question"] = raw_text
            data["options"] = {}
            
    # Now let's parse explanations from line 475 to the end
    solutions = {}
    current_sol_num = None
    current_sol_lines = []
    
    for idx in range(475, len(lines)):
        line = lines[idx]
        stripped = line.strip()
        
        # Match: "▸ Soru 1 — ..."
        m = re.match(r"^▸\s*Soru\s*(\d+)", stripped)
        if m:
            if current_sol_num is not None:
                solutions[current_sol_num] = current_sol_lines
            current_sol_num = int(m.group(1))
            current_sol_lines = []
        elif current_sol_num is not None:
            current_sol_lines.append(line) # keep original line formatting
            
    if current_sol_num is not None:
        solutions[current_sol_num] = current_sol_lines
        
    # Now let's process solutions to extract correctAnswer and explanation
    for sol_num, sol_lines in solutions.items():
        # Join lines
        full_sol_text = "".join(sol_lines)
        
        # Extract Doğru Cevap
        ca_match = re.search(r"Doğru Cevap:\s*([A-E])", full_sol_text, re.IGNORECASE)
        correct_answer = ca_match.group(1).upper() if ca_match else ""
        
        # For the explanation, we want to keep everything losslessly except the "Doğru Cevap: X" line itself.
        explanation_lines = []
        for line in sol_lines:
            if re.search(r"Doğru Cevap:\s*[A-E]", line, re.IGNORECASE):
                continue
            explanation_lines.append(line)
            
        explanation = "".join(explanation_lines).strip()
        
        if sol_num in questions:
            questions[sol_num]["correctAnswer"] = correct_answer
            questions[sol_num]["explanation"] = explanation
            
    # Verify and format
    final_questions = []
    for q_num in sorted(questions.keys()):
        q_data = questions[q_num]
        
        q_text = q_data.get("question", "").strip()
        
        final_questions.append({
            "question": q_text,
            "options": q_data.get("options", {}),
            "correctAnswer": q_data.get("correctAnswer", ""),
            "explanation": q_data.get("explanation", ""),
            "lesson": "Endodonti",
            "unit": "Ünite 11 - Endodontide İrrigasyon"
        })
        
    # Save as JSON next to txt
    output_json_path = r"C:\Users\FURKAN\Desktop\DUS\Endodonti\endo sorular\irrigasyon.json"
    with open(output_json_path, "w", encoding="utf-8") as f:
        json.dump(final_questions, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully wrote {len(final_questions)} questions to {output_json_path}")
    return final_questions

if __name__ == "__main__":
    parse_irrigasyon_txt()
