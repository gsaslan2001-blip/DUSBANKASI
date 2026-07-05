import fitz
import re
import os

pdf_path = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedodonti.pdf"
out_dir = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedo ünite pdf"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

def clean_filename(name):
    # Remove invalid characters for Windows filenames
    name = re.sub(r'[\\/*?:"<>|]', "", name)
    name = name.replace('\n', ' ').replace('\r', '')
    return name.strip()

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
            match = re.match(rf"^{expected_unit}(\s+[A-ZŞÇÖĞÜİ].*)?$", line)
            
            is_valid = False
            if line == str(expected_unit):
                is_valid = True
            elif match:
                rest_of_line = line[len(str(expected_unit)):].strip()
                if rest_of_line.isupper() or len(rest_of_line) < 50:
                     is_valid = True
                     
            if is_valid:
                # Exclude false positives
                if len(line) > len(str(expected_unit)) and not line.isupper() and expected_unit != 29:
                    continue
                
                title = ""
                if expected_unit == 29:
                    title = f"{expected_unit} SÜT DİŞLERİ ÇEKİM ENDİKASYONLARI ve KONTRENDİKASYONLARI"
                else:
                    # Let's try to find a good title in the first 5 lines
                    possible_titles = [l for l in lines[:5] if l.isupper() and l != str(expected_unit) and len(l) > 5]
                    if possible_titles:
                        title = f"{expected_unit} {possible_titles[0]}"
                    else:
                        title = f"{expected_unit}. Ünite"
                
                unit_pages.append((expected_unit, i, clean_filename(title)))
                expected_unit += 1
                break

    if len(unit_pages) != 29:
        print(f"Warning: Expected 29 units but found {len(unit_pages)}")
        for u in unit_pages:
            print(u)
    
    # Now split the pdf
    for idx, (unit_num, start_page, title) in enumerate(unit_pages):
        end_page = unit_pages[idx+1][1] - 1 if idx + 1 < len(unit_pages) else len(doc) - 1
        
        doc_new = fitz.open()
        doc_new.insert_pdf(doc, from_page=start_page, to_page=end_page)
        
        # limit title length
        if len(title) > 100:
            title = title[:100] + "..."
            
        out_path = os.path.join(out_dir, f"{title}.pdf")
        doc_new.save(out_path)
        doc_new.close()
        print(f"Saved: {out_path} (Pages {start_page+1} to {end_page+1})")
        
except Exception as e:
    print(f"Error: {e}")
