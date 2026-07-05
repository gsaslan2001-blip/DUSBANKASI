import fitz

pdf_path = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedodonti.pdf"
out_path = r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\inspect_pedo_output.txt"

with open(out_path, "w", encoding="utf-8") as f:
    try:
        doc = fitz.open(pdf_path)
        for i in range(min(50, len(doc))): # Print first 50 pages
            page = doc[i]
            text = page.get_text()
            f.write(f"--- Page {i+1} ---\n")
            lines = text.split('\n')
            for j, line in enumerate(lines[:20]):
                f.write(f"{j}: {line.strip()}\n")
            f.write("\n")
    except Exception as e:
        f.write(f"Error: {e}\n")
