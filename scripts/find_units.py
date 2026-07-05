import fitz
import re

pdf_path = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedodonti.pdf"
out_path = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\find_units.py"

try:
    doc = fitz.open(pdf_path)
    
    expected_unit = 1
    unit_pages = []
    
    for i in range(len(doc)):
        page = doc[i]
        text = page.get_text()
        lines = [line.strip() for line in text.split('\n') if line.strip()]
        
        if not lines:
            continue
            
        # Check first 10 lines of the page
        for j in range(min(10, len(lines))):
            line = lines[j]
            # Match standalone number OR number followed by space and Uppercase letter
            match = re.match(rf"^{expected_unit}(\s+[A-ZŞÇÖĞÜİ].*)?$", line)
            
            # To avoid matching sentences starting with a number (like "2 devre vardir..."),
            # we require that if there is text after the number, the text should be mostly uppercase,
            # or the line should be just the number.
            is_valid = False
            if line == str(expected_unit):
                is_valid = True
            elif match:
                rest_of_line = line[len(str(expected_unit)):].strip()
                # Check if rest_of_line is mostly uppercase (title casing)
                # or if the next line is mostly uppercase
                if rest_of_line.isupper() or len(rest_of_line) < 50:
                     # "29 SÜT DİŞLERİ..." is valid
                     is_valid = True
                     
            if is_valid:
                # To be absolutely sure it's a heading, it shouldn't be a random sentence
                # Let's just assume it's valid if it's the exact number on a line, 
                # or exactly matches the unit 29 string.
                title = line if len(line) > len(str(expected_unit)) else (lines[j+1] if j+1 < len(lines) else "")
                
                # Exclude false positives like "2 devre vardır..." by ensuring it's not lowercase letters
                if len(line) > len(str(expected_unit)) and not line.isupper() and expected_unit != 29:
                    continue
                    
                print(f"Found Unit {expected_unit} on page {i+1}: {title}")
                unit_pages.append((expected_unit, i))
                expected_unit += 1
                break
                
except Exception as e:
    print(f"Error: {e}")
