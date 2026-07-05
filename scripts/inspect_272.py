import fitz

pdf_path = r"C:\Users\FURKAN\Desktop\DUS\Pedodonti\pedodonti.pdf"
doc = fitz.open(pdf_path)

page = doc[271] # page 272 is index 271
text = page.get_text()
lines = text.split('\n')
print("Page 272 first 20 lines:")
for i, line in enumerate(lines[:20]):
    print(f"{i}: {line.strip()}")
