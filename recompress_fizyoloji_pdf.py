from pathlib import Path
import subprocess
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

source = Path(r"C:\Users\FURKAN\Desktop\DUS\Fizyoloji\35. baskı tts fizyoloji 308.pdf")
work = Path(r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\tmp\fizyoloji_recompress")
work.mkdir(parents=True, exist_ok=True)

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

prefix = work / "page"
subprocess.run([
    "pdftoppm", "-f", "7", "-l", "308", "-r", "150", "-jpeg",
    "-jpegopt", "quality=85,progressive=y", str(source), str(prefix)
], check=True)

page_size = (592.44, 841.89)
for filename, first, last in sections:
    target = source.parent / (".recompressed-" + filename)
    pdf = canvas.Canvas(str(target), pagesize=page_size, pageCompression=1)
    for pdf_page in range(first, last + 1):
        image = work / f"page-{pdf_page:03d}.jpg"
        pdf.drawImage(ImageReader(str(image)), 0, 0, width=page_size[0], height=page_size[1])
        pdf.showPage()
    pdf.save()
    print(filename, last - first + 1)

