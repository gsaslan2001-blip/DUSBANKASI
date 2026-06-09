import os
import sys
import re
import argparse
from collections import Counter

# Add parent directory of this tool to sys.path so we can import config and shared
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
_PROJ_ROOT = os.path.dirname(_SCRIPT_DIR)
if _PROJ_ROOT not in sys.path:
    sys.path.insert(0, _PROJ_ROOT)

import shared

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass


def parse_questions_file(path: str) -> list:
    """Parses ORTO 5 High Yield.txt format questions and answers."""
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    ans_pattern = r'\*\*Soru\s+(\d+)\s+[-–—]\s+Doğru\s+Cevap:\s*([A-E])'

    matches = list(re.finditer(ans_pattern, content))
    if not matches:
        raise ValueError("No matches found for answers pattern!")

    first_match_start = matches[0].start()
    questions_part = content[:first_match_start]
    answers_part = content[first_match_start:]

    questions = []
    current_stem_lines = []
    current_options = {}

    for line in questions_part.splitlines():
        line_str = line.strip()
        if not line_str:
            continue
        
        # Check if it's an option line
        opt_match = re.match(r'^([A-E])\)\s*(.*)$', line_str)
        if opt_match:
            opt_char = opt_match.group(1)
            opt_val = opt_match.group(2).strip()
            current_options[opt_char] = opt_val
            
            if opt_char == 'E':
                if current_stem_lines:
                    stem_text = '\n'.join(current_stem_lines).strip()
                    current_question = {
                        "question": stem_text,
                        "options": current_options.copy(),
                        "correctAnswer": "",
                        "explanation": "",
                        "lesson": "Ortodonti",
                        "unit": "Ünite 5 - ORTODONTİK TEŞHİS"
                    }
                    questions.append(current_question)
                current_stem_lines = []
                current_options = {}
        else:
            current_stem_lines.append(line_str)

    # Parse and associate answers
    matches_in_answers = list(re.finditer(ans_pattern, answers_part))
    for idx, match in enumerate(matches_in_answers):
        q_num = int(match.group(1))
        correct_letter = match.group(2)
        start_pos = match.end()
        end_pos = matches_in_answers[idx+1].start() if idx + 1 < len(matches_in_answers) else len(answers_part)
        explanation = answers_part[start_pos:end_pos].strip()
        
        if q_num <= len(questions):
            questions[q_num - 1]["correctAnswer"] = correct_letter
            questions[q_num - 1]["explanation"] = explanation
        else:
            print(f"⚠️ Warning: Answer for Soru {q_num} found, but questions list only has {len(questions)} items.")

    return questions


def main():
    parser = argparse.ArgumentParser(description="Upload Ortodonti 5 High Yield Questions")
    parser.add_argument("--dry-run", action="store_true", help="Perform a dry run (do not write to Supabase)")
    args = parser.parse_args()

    file_path = r"C:\Users\FURKAN\Desktop\ORTO 5 High Yield.txt"
    lesson_name = "Ortodonti"
    unit_name = "Ünite 5 - ORTODONTİK TEŞHİS"

    print(f"Reading and parsing questions from: {file_path}")
    try:
        questions = parse_questions_file(file_path)
        print(f"Successfully parsed {len(questions)} questions.")
    except Exception as e:
        print(f"❌ Error parsing file: {e}")
        sys.exit(1)

    # Run structural quality validation using validate_question_batch (only for logging / inspection)
    print("\nRunning structural validation (for reference only)...")
    accepted, rejected = shared.validate_question_batch(questions, lesson_name, unit_name)
    print(f"Validation summary: {len(accepted)} accepted, {len(rejected)} would be rejected.")

    if rejected:
        print("\n⚠️ Questions failing standard validation (will be FORCED to upload as requested):")
        for idx, item in enumerate(rejected):
            q = item["question"]
            reason = item["reason"]
            print(f"  {idx+1}. Reason: {reason}")
            print(f"     Stem: {q['question'][:120]}...")

    if args.dry_run:
        print("\n🔎 DRY RUN ONLY: No database changes will be made.")
        sys.exit(0)

    # Deploy all parsed questions to Supabase with quality flag high_yield (bypassing validation filter)
    print(f"\n🚀 Deploying all {len(questions)} questions to Supabase...")
    checkpoint_path = shared.save_checkpoint(questions, lesson_name, unit_name)
    success = shared._write_to_supabase(questions, lesson_name, unit_name, quality_flag="high_yield")
    
    if success:
        if checkpoint_path:
            shared.clear_checkpoint(checkpoint_path)
        print("\n✅ Upload completed successfully!")
    else:
        print("\n❌ Upload failed. Questions are preserved in checkpoint.")
        sys.exit(1)



if __name__ == "__main__":
    main()
