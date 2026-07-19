import os
import sys
import json

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import shared

def insert_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        data = json.load(f)
    lesson = data["lesson"]
    unit = data["unit"]
    questions = [item["question"] for item in data["items"]]
    print(f"Directly inserting {len(questions)} rejected questions into Supabase for {lesson} / {unit}...")
    success = shared._write_to_supabase(questions, lesson, unit)
    if success:
        print(f"Successfully inserted all {len(questions)} previously rejected questions!")
    else:
        print("Failed to insert questions.")

if __name__ == "__main__":
    insert_file(r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\recovery\rejected\Pedodonti_7_Ünite_20260707_155733.json")
    insert_file(r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\recovery\rejected\Pedodonti_6_SÜT_DİŞİ_PULPA_HASTALIKLARININ_TEDAVİSİNDEKİ_AMAÇ_20260707_155725.json")
