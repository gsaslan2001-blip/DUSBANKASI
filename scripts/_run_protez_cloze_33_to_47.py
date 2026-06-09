import os
import subprocess
import sys

base_dir = r"C:\Users\FURKAN\Desktop\DUS\protez\Yeni klasör\Parcalanmis"
files = [
    "33-Çene İlişkilerinin Kaydı.pdf",
    "34-Tam Protezlerde Diş Seçimi ve Diş Dizimi.pdf",
    "35-Dişli Prova.pdf",
    "36-Total Protezlerde Bitim.pdf",
    "37-Tam Protezlerde Oklüzyon.pdf",
    "38-Yumuşak Astar Materyalleri.pdf",
    "39-Overdenture Protezler.pdf",
    "40-Tek Tam Protezler.pdf",
    "41-Protez Stomatit.pdf",
    "42-Tam Protezlerde Konuşma ve Ses Oluşumu.pdf",
    "43-Temporomandibular Eklem Anatomisi.pdf",
    "44-Diş Hekimliğinde Maddeler Bilgisi.pdf",
    "45-Diş Hekimliğinde Zirkonya.pdf",
    "46-İmplant Protezler.pdf",
    "47-Çene Yüz Protezleri.pdf"
]

env = os.environ.copy()
env["PYTHONUTF8"] = "1"

print(f"Başlatılıyor: {len(files)} ünite işlenecek.")

for i, f in enumerate(files, 33):
    full_path = os.path.join(base_dir, f)
    if os.path.exists(full_path):
        print(f"\n============================================================")
        print(f">>> [{i}/47] Protez Başlıyor: {f}")
        print(f"============================================================\n")
        
        # Run process
        res = subprocess.run(
            [sys.executable, "-u", "scripts/notebooklm_mcp_cloze.py", "--file", full_path, "--lesson", "Protez"],
            env=env
        )
        if res.returncode != 0:
            print(f"⚠️ Hata: {f} işlenirken hata oluştu (Exit code: {res.returncode}). Devam ediliyor...")
    else:
        print(f"Dosya bulunamadı: {full_path}")

print("Tüm Protez üniteleri (33-47) tamamlandı!")
