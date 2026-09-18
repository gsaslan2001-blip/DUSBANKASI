import sys
import json
import os
import re
from pathlib import Path

def main():
    target_dir = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"
    files = ["mantar 1.txt", "mantar 2.txt", "mantar 3.txt"]
    
    all_questions = []
    
    for filename in files:
        filepath = os.path.join(target_dir, filename)
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()
            
        # Try to find all <questions_json> blocks
        matches = list(re.finditer(r'<questions_json>([\s\S]*?)(?:</questions_json>|$)', content))
        if matches:
            file_questions = 0
            for match in matches:
                json_text = match.group(1).strip()
                # Try to find the array if it has trailing garbage
                arr_match = re.search(r'\[\s*\{[\s\S]*\}\s*\]', json_text)
                if arr_match:
                    json_text = arr_match.group(0).strip()
                
                try:
                    # trailing comma fix
                    json_text = re.sub(r',\s*([\]}])', r'\1', json_text)
                    questions = json.loads(json_text)
                    
                    # Apply lesson and unit override
                    for q in questions:
                        q['lesson'] = "Mikrobiyoloji"
                        q['unit'] = "Mantarlar"
                    
                    file_questions += len(questions)
                    all_questions.extend(questions)
                except json.JSONDecodeError as e:
                    print(f"Error parsing JSON block in {filename}: {e}")
            print(f"Extracted {file_questions} questions from {filename}")
        else:
            print(f"Warning: No <questions_json> found in {filename}")
            
    print(f"Total extracted questions: {len(all_questions)}")
    
    out_path = os.path.join(target_dir, "mantar_combined.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)
        
    print(f"Successfully saved to {out_path}")

if __name__ == "__main__":
    main()
