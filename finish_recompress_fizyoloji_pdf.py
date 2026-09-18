from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

work = Path(r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\tmp\fizyoloji_recompress")
out = Path(r"C:\Users\FURKAN\Desktop\DUS\Fizyoloji")
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
size = (592.44, 841.89)
for name, first, last in sections:
    target = out / (".recompressed-" + name)
    if target.exists():
        continue
    c = canvas.Canvas(str(target), pagesize=size, pageCompression=1)
    for n in range(first, last + 1):
        c.drawImage(ImageReader(str(work / f"page-{n:03d}.jpg")), 0, 0, width=size[0], height=size[1])
        c.showPage()
    c.save()
    print(name, target.stat().st_size, flush=True)

