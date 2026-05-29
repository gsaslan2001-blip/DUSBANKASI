"""Detached 3-folder MCP production launcher — INLINE invocation (no subprocess).

Subprocess.call ile başlatılan child Python urllib bağlantısı ConnectionRefused alıyor;
parent process aynı port'a bağlanabiliyor. Bu yüzden notebooklm_mcp_exhaust.main'i
aynı process içinde import edip sys.argv set ederek sırayla çağırıyoruz."""
import os, sys, asyncio, datetime, contextlib, importlib

os.environ["PYTHONUTF8"] = "1"
os.environ["PYTHONUNBUFFERED"] = "1"
os.environ["NO_PROXY"] = "127.0.0.1,localhost"
os.environ["MCP_URL"] = "http://127.0.0.1:8000/mcp"

THIS_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, THIS_DIR)
sys.path.insert(0, os.path.join(THIS_DIR, "tools"))

LOGD = os.path.join(THIS_DIR, "logs")
DIAG = os.path.join(LOGD, "detached_diag.log")

def diag(msg):
    with open(DIAG, "a", encoding="utf-8") as f:
        f.write(f"[{datetime.datetime.now().isoformat()}] {msg}\n")

open(DIAG, "w", encoding="utf-8").close()
diag(f"START · USER={os.environ.get('USERNAME')} · PY={sys.executable}")

RUNS = [
    ("Endodonti", r"C:\Users\FURKAN\Desktop\DUS\Endodonti\Endodonti Ünite Pdf",     "run_endodonti.log"),
    ("Histoloji", r"C:\Users\FURKAN\Desktop\DUS\Histoloji\histo ünite pdf",         "run_histoloji.log"),
    ("Protez",    r"C:\Users\FURKAN\Desktop\DUS\protez\Yeni klasör\Parcalanmis",    "run_protez.log"),
]

# Eski logları temizle
for _, _, logf in RUNS:
    p = os.path.join(LOGD, logf)
    if os.path.exists(p):
        os.remove(p)

# notebooklm_mcp_exhaust modülünü import et
exhaust = importlib.import_module("notebooklm_mcp_exhaust")
diag(f"modül yüklendi: {exhaust.__file__}")

for lesson, folder, logf in RUNS:
    log_path = os.path.join(LOGD, logf)
    diag(f"BAŞLIYOR: {lesson} → {folder}")
    if not os.path.isdir(folder):
        diag(f"  ❌ klasör yok: {folder}")
        continue

    # sys.argv'yi exhaust main()'in beklediği şekilde set et
    sys.argv = [
        os.path.join(THIS_DIR, "notebooklm_mcp_exhaust.py"),
        "--input", folder,
        "--lesson", lesson,
    ]

    # Tüm çıktıyı log dosyasına yönlendir, sonra eski stdout'u geri al
    with open(log_path, "w", encoding="utf-8") as fh:
        with contextlib.redirect_stdout(fh), contextlib.redirect_stderr(fh):
            try:
                asyncio.run(exhaust.main())
                rc = 0
            except SystemExit as se:
                rc = se.code if isinstance(se.code, int) else 1
            except Exception as e:
                rc = 1
                fh.write(f"\n\n[WRAPPER] Yakalanmamış exception: {type(e).__name__}: {e}\n")

    diag(f"BİTTİ: {lesson} → exit={rc}")

diag("TÜM KOŞULAR TAMAMLANDI")
