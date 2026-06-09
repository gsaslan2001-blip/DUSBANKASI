import os
import subprocess
import sys

base_dir = r"C:\Users\FURKAN\Desktop\DUS\Ortodonti\Ortodonti Ünite PDF"
files = [
    "Ünite 3 - ORTODONTİK TEDAVİNİN BİYOLOJİSİ.pdf",
    "Ünite 4 - ANKRAJ.pdf",
    "Ünite 5 - ORTODONTİK TEŞHİS.pdf",
    "Ünite 6 - MATURASYON ANALİZİ.pdf",
    "Ünite 7 - DENTAL MALOKLÜZYONLAR.pdf",
    "Ünite 8 - ORTODONTİK TEDAVİLER.pdf",
    "Ünite 9 - SÜRME REHBERLİĞİ (GUIDANCE ERUPTION).pdf",
    "Ünite 10 - ORTODONTİK TEDAVİ APAREYLERİ.pdf",
    "Ünite 11 - EKSTRAORAL APAREYLER.pdf",
    "Ünite 12 - ORTODONTİK TEDAVİ PLANLAMASI.pdf",
    "Ünite 13 - GÖMÜLÜ DİŞLERİN ORTODONTİK TEDAVİSİ.pdf",
    "Ünite 14 - YETİŞKİN HASTALARDA ORTODONTİK TEDAVİ.pdf",
    "Ünite 15 - SENDROMLAR.pdf",
    "Ünite 16 - DUDAK VE DAMAK YARIKLARI.pdf",
    "Ünite 17 - ORTOGNATİK CERRAHİ ILE ORTODONTİK TEDAVİ.pdf",
    "Ünite 18 - ORTODONTİK TEDAVİ KOMPLİKASYONLARI.pdf",
    "Ünite 19 - ORTODONTİK MATERYALLER.pdf",
    "Ünite 20 - RETANSİYON – RELAPS.pdf",
    "Ünite 21 - EK BİLGİLER.pdf"
]

env = os.environ.copy()
env["PYTHONUTF8"] = "1"

for f in files:
    full_path = os.path.join(base_dir, f)
    if os.path.exists(full_path):
        print(f"\n============================================================")
        print(f">>> Başlıyor: {f}")
        print(f"============================================================\n")
        subprocess.run(
            [sys.executable, "-u", "scripts/notebooklm_mcp_cloze.py", "--file", full_path, "--lesson", "Ortodonti"],
            env=env
        )
    else:
        print(f"Dosya bulunamadı: {full_path}")

print("Tüm üniteler (3-21) tamamlandı!")
