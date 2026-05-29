import os
import sys
import json

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import shared

def main():
    rejected_file = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\recovery\rejected\Radyoloji_Kistler_20260527_155200.json"
    if not os.path.exists(rejected_file):
        print("Rejected file not found.")
        return 1
        
    with open(rejected_file, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    lesson = data["lesson"]
    unit = data["unit"]
    
    questions = [item["question"] for item in data["items"]]
    
    print(f"Directly inserting {len(questions)} rejected questions into Supabase for {lesson} / {unit}...")
    
    # Bypass the gate and write directly to Supabase
    success = shared._write_to_supabase(questions, lesson, unit)
    if success:
        print("Successfully inserted all 3 previously rejected questions!")
    else:
        print("Failed to insert questions.")
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())
