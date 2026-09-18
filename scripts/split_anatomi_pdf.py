"""
split_anatomi_pdf.py
====================
C:\\Users\\FURKAN\\Desktop\\DUS\\Anatomi\\anatomikonu.pdf dosyasını ünitelerine göre 10 ayrı PDF'e böler:
Hedef klasör: C:\\Users\\FURKAN\\Desktop\\DUS\\Anatomi\\anatomi ünite pdf
"""

import sys, os, pypdf

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

pdf_path = r"C:\Users\FURKAN\Desktop\DUS\Anatomi\anatomikonu.pdf"
out_dir = r"C:\Users\FURKAN\Desktop\DUS\Anatomi\anatomi ünite pdf"

os.makedirs(out_dir, exist_ok=True)

reader = pypdf.PdfReader(pdf_path)
total_pages = len(reader.pages)
print(f"📖 {pdf_path} okundu, toplam sayfa sayısı: {total_pages}")

units_spec = [
    (1, 1, 78, "1 KEMİKLER.pdf"),
    (2, 79, 103, "2 EKLEMLER.pdf"),
    (3, 104, 162, "3 KASLAR.pdf"),
    (4, 163, 180, "4 PLEKSUSLAR.pdf"),
    (5, 181, 213, "5 SOLUNUM SİSTEMİ.pdf"),
    (6, 214, 259, "6 DOLAŞIM SİSTEMİ.pdf"),
    (7, 260, 285, "7 SİNDİRİM SİSTEMİ.pdf"),
    (8, 286, 374, "8 MERKEZİ SİNİR SİSTEMİ.pdf"),
    (9, 375, 425, "9 PERİFERİK SİNİR SİSTEMİ VE KRANİYAL SİNİRLER.pdf"),
    (10, 426, 447, "10 DUYU ORGANLARI.pdf")
]

created_files = []

for u_num, start_p, end_p, filename in units_spec:
    writer = pypdf.PdfWriter()
    for page_idx in range(start_p - 1, end_p):
        writer.add_page(reader.pages[page_idx])
    
    out_filepath = os.path.join(out_dir, filename)
    with open(out_filepath, "wb") as f_out:
        writer.write(f_out)
    
    page_count = end_p - start_p + 1
    size_kb = os.path.getsize(out_filepath) / 1024
    created_files.append((filename, start_p, end_p, page_count, size_kb))
    print(f"✅ Created: {filename} (Slayt {start_p}-{end_p}, {page_count} sayfa, {size_kb:.1f} KB)")

print(f"\n🎉 TOPLAM {len(created_files)} ADET ÜNİTE PDF'İ OLUŞTURULDU.")
print(f"📁 Klasör: {out_dir}")
