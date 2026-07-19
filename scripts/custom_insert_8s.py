import json
import os
import sys

# Ensure we can import shared
_SCRIPT_DIR = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts"
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import shared

def main():
    file_path = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedo soru anki\8s.txt"
    
    with open(file_path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Eleme yapılmaması istendiği için validate_question_batch çağrılmıyor.
    # Doğrudan Supabase'e yazıyoruz.
    print(f"{len(data)} adet soru okundu. Supabase'e ekleniyor...")
    
    # 8s.txt dosyasındaki ilk sorudan lesson ve unit bilgilerini alalım veya elle verelim
    lesson_name = data[0].get("lesson", "Pedodonti")
    unit_name = data[0].get("unit", "8. Ünite")
    
    success = shared._write_to_supabase(data, lesson_name, unit_name)
    
    if success:
        print("Tüm sorular başarıyla (eleme olmadan) eklendi.")
    else:
        print("Supabase'e yazarken bir hata oluştu.")

if __name__ == "__main__":
    main()
