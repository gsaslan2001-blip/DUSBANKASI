from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
w = Path(r"C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\tmp\fizyoloji_recompress")
o = Path(r"C:\Users\FURKAN\Desktop\DUS\Fizyoloji")
s = (592.44, 841.89)
for name, a, b in [
    ("11-Santral Sinir Sistemi Histolojisi ve Fizyolojisi.pdf", 237, 286),
    ("12-Üriner Sistem Histolojisi ve Fizyolojisi.pdf", 287, 308),
]:
    c = canvas.Canvas(str(o / (".recompressed-" + name)), pagesize=s, pageCompression=1)
    for i in range(a, b + 1):
        c.drawImage(ImageReader(str(w / f"page-{i:03d}.jpg")), 0, 0, width=s[0], height=s[1])
        c.showPage()
    c.save()
    print(name, flush=True)
