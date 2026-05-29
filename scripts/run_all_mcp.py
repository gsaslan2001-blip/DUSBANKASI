import os
import sys
import subprocess

log_file = open("scripts/logs/run_all_mcp_output.txt", "w", encoding="utf-8")

folders = [
    (r"C:\Users\FURKAN\Desktop\DUS\Endodonti\Endodonti Ünite Pdf", "Endodonti"),
    (r"C:\Users\FURKAN\Desktop\DUS\Histoloji\histo ünite pdf", "Histoloji"),
    (r"C:\Users\FURKAN\Desktop\DUS\protez\Yeni klasör\Parcalanmis", "Protez")
]

os.environ["PYTHONUTF8"] = "1"

for folder, lesson in folders:
    msg = f"\n[{lesson}] İşleniyor: {folder}\n"
    print(msg)
    log_file.write(msg)
    log_file.flush()
    
    cmd = [
        sys.executable, "-u", "scripts/notebooklm_mcp_exhaust.py",
        "--input", folder,
        "--lesson", lesson,
        "--audit"
    ]
    
    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, encoding="utf-8")
    
    for line in process.stdout:
        log_file.write(line)
        log_file.flush()
        
    process.wait()

msg = "\nTüm işlemler tamamlandı.\n"
print(msg)
log_file.write(msg)
log_file.close()
