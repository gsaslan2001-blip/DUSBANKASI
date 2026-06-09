import os
import sys
import re
import urllib.parse

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(_SCRIPT_DIR, "..", "..", "scripts"))
import shared

def extract_stem_and_e(s):
    s = s.strip()
    idx_nn = s.find('\n\n')
    idx_n = s.find('\n')
    idx_space = s.find('  ')
    
    candidates = []
    if idx_nn != -1: candidates.append(idx_nn)
    if idx_n != -1: candidates.append(idx_n)
    if idx_space != -1: candidates.append(idx_space)
    
    if not candidates:
        return s, ""
        
    best_idx = min(candidates)
    
    if best_idx == idx_nn:
        delim_len = 2
    elif best_idx == idx_space:
        delim_len = 2
    else:
        delim_len = 1
        
    return s[:best_idx].strip(), s[best_idx+delim_len:].strip()

def process_file(filepath, lesson, unit):
    print(f"\n--- Processing {unit} ---")
    
    encoded_lesson = urllib.parse.quote(lesson)
    encoded_unit = urllib.parse.quote(unit)
    
    print(f"Deleting existing high_yield questions for {lesson} - {unit}...")
    existing = shared.supabase_get(f"questions?lesson=eq.{encoded_lesson}&unit=eq.{encoded_unit}&quality_flag=eq.high_yield&select=id")
    if existing:
        print(f"Found {len(existing)} existing high_yield questions. Deleting...")
        ids = [q['id'] for q in existing]
        for idx in range(0, len(ids), 10):
            batch_ids = ids[idx:idx+10]
            ids_str = ",".join(batch_ids)
            url = f"{shared.SUPABASE_URL}/rest/v1/questions?id=in.({ids_str})"
            req = urllib.request.Request(url, method="DELETE", headers={
                "apikey": shared.SUPABASE_KEY,
                "Authorization": f"Bearer {shared.SUPABASE_KEY}"
            })
            with urllib.request.urlopen(req) as resp:
                pass
        print("Deletion complete.")
    else:
        print("No existing high_yield questions found.")

    print(f"Reading file: {filepath}")
    
    # Read with ignore to bypass broken characters like 'Doğru' encoded badly
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    marker_match = re.search(r'▸\s*\**Soru 1\b', content)
    if not marker_match:
        print(f"Error: Could not find '▸ Soru 1' marker in {filepath}.")
        return

    q_text = content[:marker_match.start()].strip()
    a_text = content[marker_match.start():]

    # --- Soru Parse ---
    a_splits = re.split(r'\s+A\)\s*', q_text)
    
    questions_data = []
    
    # a_splits[0] is the first stem
    current_stem = a_splits[0]
    current_stem = re.sub(r'^═══.*?═══\s*', '', current_stem).strip()

    for i in range(1, len(a_splits)):
        block = a_splits[i]
        
        # Split by B), C), D), E)
        b_split = re.split(r'\s+B\)\s*', block)
        if len(b_split) < 2: continue
        optA = b_split[0].strip()
        
        c_split = re.split(r'\s+C\)\s*', b_split[1])
        if len(c_split) < 2: continue
        optB = c_split[0].strip()
        
        d_split = re.split(r'\s+D\)\s*', c_split[1])
        if len(d_split) < 2: continue
        optC = d_split[0].strip()
        
        e_split = re.split(r'\s+E\)\s*', d_split[1])
        if len(e_split) < 2: continue
        optD = e_split[0].strip()
        
        e_plus_stem = e_split[1]
        
        optE, next_stem = extract_stem_and_e(e_plus_stem)
        
        if current_stem:
            questions_data.append({
                "stem": current_stem,
                "options": {
                    "A": optA,
                    "B": optB,
                    "C": optC,
                    "D": optD,
                    "E": optE
                }
            })
            
        current_stem = next_stem

    print(f"Parsed {len(questions_data)} questions.")

    # --- Cevap Parse ---
    # Doğru: A format is sometimes Do.ru: A
    ans_blocks = re.split(r'▸\s*\**Soru \d+', a_text)
    answers_data = []
    
    for ablock in ans_blocks:
        ablock = ablock.strip()
        if not ablock: continue
        
        c_match = re.search(r'Do(?:ğ|.)ru:\s*\**([A-E])\**', ablock)
        if c_match:
            correct = c_match.group(1)
            
            exp_match = re.search(r'(Neden [A-E]:.*)', ablock, re.DOTALL)
            if exp_match:
                explanation = exp_match.group(1).strip()
            else:
                # Eger neden yoksa, Doğru: X ten sonrasını al
                exp_match2 = re.search(r'Do(?:ğ|.+)ru:\s*[A-E]\s*(.*)', ablock, re.DOTALL)
                explanation = exp_match2.group(1).strip() if exp_match2 else ablock
                
            answers_data.append({
                "correct_answer": correct,
                "explanation": explanation
            })

    print(f"Parsed {len(answers_data)} answers.")

    min_len = min(len(questions_data), len(answers_data))
    if len(questions_data) != len(answers_data):
        print(f"Warning: Question count ({len(questions_data)}) and answer count ({len(answers_data)}) do not match! Truncating to {min_len}.")

    final_questions = []
    for i in range(min_len):
        q = questions_data[i]
        a = answers_data[i]
        final_questions.append({
            "question": q["stem"],
            "options": q["options"],
            "correctAnswer": a["correct_answer"],
            "explanation": a["explanation"],
            "lesson": lesson,
            "unit": unit
        })

    if not final_questions:
        print("No questions to deploy!")
        return

    print("Deploying to Supabase...")
    res = shared.deploy_to_supabase(final_questions, lesson, unit, quality_flag="high_yield")
    if res:
        success_count, err_count = res
        print(f"Deployment complete. Success: {success_count}, Errors: {err_count}\n")
    else:
        print("Deployment skipped or failed.\n")

def main():
    base_dir = r"C:\Users\FURKAN\Desktop\Orto sorular"
    
    files_to_process = [
        ("4-Ankraj.txt", "Ünite 4 - ANKRAJ"),
        ("7 malokluzyon-.txt", "Ünite 7 - DENTAL MALOKLÜZYONLAR"),
        ("8- ortodontik tedaviler .txt", "Ünite 8 - ORTODONTİK TEDAVİLER"),
        ("9 - sürme rehberliği .txt", "Ünite 9 - SÜRME REHBERLİĞİ (GUIDANCE ERUPTION)")
    ]
    
    for fname, unit in files_to_process:
        filepath = os.path.join(base_dir, fname)
        if os.path.exists(filepath):
            process_file(filepath, "Ortodonti", unit)
        else:
            print(f"File not found: {filepath}")

if __name__ == '__main__':
    main()
