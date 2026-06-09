import os
import sys
import re

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(_SCRIPT_DIR, "..", "..", "scripts"))
import shared

def main():
    lesson = "Ortodonti"
    unit = "Ünite 8 - Ortodontik Tedaviler"
    filepath = r"C:\Users\FURKAN\Desktop\Orto sorular\8- ortodontik tedaviler .txt"

    print(f"Deleting existing high_yield questions for {lesson} - {unit}...")
    existing = shared.supabase_get(f"questions?lesson=eq.{lesson}&unit=eq.{unit}&quality_flag=eq.high_yield&select=id")
    if existing:
        print(f"Found {len(existing)} existing high_yield questions. Deleting...")
        ids = [q['id'] for q in existing]
        for idx in range(0, len(ids), 10):
            batch_ids = ids[idx:idx+10]
            ids_str = ",".join(batch_ids)
            shared.supabase_delete(f"questions?id=in.({ids_str})")
        print("Deletion complete.")
    else:
        print("No existing high_yield questions found.")

    print(f"Reading file: {filepath}")
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Split into part 1 (Questions) and part 2 (Answers)
    parts = content.split("▸ Soru 1")
    if len(parts) < 2:
        print("Error: Could not find '▸ Soru 1' marker.")
        return

    q_text = parts[0].strip()
    a_text = "▸ Soru 1" + parts[1]

    # Parse questions
    raw_blocks = re.split(r'\n\s*\n', q_text)
    questions_data = []
    
    for block in raw_blocks:
        block = block.strip()
        if not block: continue
        if block.startswith("═══ DUS KONU TESTİ ═══"): continue
        
        lines = block.split('\n')
        stem_lines = []
        options = {}
        for line in lines:
            if re.match(r'^[A-E]\)', line):
                key = line[0]
                val = line[2:].strip()
                options[key] = val
            else:
                stem_lines.append(line)
        
        stem = " ".join(stem_lines).strip()
        if stem and len(options) == 5:
            questions_data.append({
                "stem": stem,
                "options": options
            })

    print(f"Parsed {len(questions_data)} questions.")

    # Parse answers
    ans_blocks = re.split(r'▸ Soru \d+', a_text)
    answers_data = []
    
    for ablock in ans_blocks:
        ablock = ablock.strip()
        if not ablock: continue
        
        correct = None
        exp_lines = []
        for line in ablock.split('\n'):
            line = line.strip()
            if line.startswith("Senin:"):
                # Senin: Belirtilmedi | Doğru: A
                m = re.search(r'Doğru:\s*([A-E])', line)
                if m:
                    correct = m.group(1)
            elif line.startswith("Neden") or line.startswith("Anahtar"):
                exp_lines.append(line)
                
        explanation = "\n".join(exp_lines).strip()
        if correct and explanation:
            answers_data.append({
                "correct_answer": correct,
                "explanation": explanation
            })

    print(f"Parsed {len(answers_data)} answers.")

    if len(questions_data) != len(answers_data):
        print("Error: Question count and answer count do not match!")
        return

    # Combine
    final_questions = []
    for i in range(len(questions_data)):
        q = questions_data[i]
        a = answers_data[i]
        final_questions.append({
            "stem": q["stem"],
            "options": q["options"],
            "correct_answer": a["correct_answer"],
            "explanation": a["explanation"],
            "lesson": lesson,
            "unit": unit
        })

    print("Deploying to Supabase...")
    success_count, err_count = shared.deploy_to_supabase(final_questions, quality_flag="high_yield")
    print(f"Deployment complete. Success: {success_count}, Errors: {err_count}")

if __name__ == '__main__':
    main()
