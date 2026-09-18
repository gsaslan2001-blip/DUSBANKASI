from pathlib import Path
from pypdf import PdfReader, PdfWriter

source = Path(r"C:\Users\FURKAN\Desktop\DUS\Fizyoloji\35. baskı tts fizyoloji 308.pdf")
output_dir = source.parent

# The printed book page 1 is PDF page 7, so the PDF page ranges are inclusive.
sections = [
    ("1-Hücre Histolojisi ve Fizyolojisi.pdf", 7, 22),
    ("2-Doku Histolojisi ve Fizyolojisi.pdf", 23, 42),
    ("3-İskelet Kası - Düz Kas Histolojisi ve Fizyolojisi.pdf", 43, 56),
    ("4-Genital Sistem Histolojisi ve Fizyolojisi.pdf", 57, 64),
    ("5-Genel Embriyoloji.pdf", 65, 98),
    ("6-Hematopoetik Sistem Histolojisi ve Fizyolojisi.pdf", 99, 121),
    ("7-Gastrointestinal Sistem Histolojisi ve Fizyolojisi.pdf", 122, 148),
    ("8-Kardiyovasküler Sistem Histolojisi ve Fizyolojisi.pdf", 149, 183),
    ("9-Endokrin Sistem Histolojisi ve Fizyolojisi.pdf", 184, 216),
    ("10-Solunum Sistemi Histolojisi ve Fizyolojisi.pdf", 217, 236),
    ("11-Santral Sinir Sistemi Histolojisi ve Fizyolojisi.pdf", 237, 286),
    ("12-Üriner Sistem Histolojisi ve Fizyolojisi.pdf", 287, 308),
]

reader = PdfReader(str(source))
if len(reader.pages) != 308:
    raise RuntimeError(f"Beklenen 308 sayfa yerine {len(reader.pages)} sayfa bulundu")

for filename, first, last in sections:
    writer = PdfWriter()
    for page_no in range(first, last + 1):
        writer.add_page(reader.pages[page_no - 1])
    target = output_dir / filename
    with target.open("wb") as stream:
        writer.write(stream)
    print(f"{filename}\t{last - first + 1} sayfa")

