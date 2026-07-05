"""
DUS Bankası — Evrensel Cloze Kart Pipeline Runner v2
=====================================================
Her ders için ayrı script yazmaya gerek yok.

Kullanım:
  python scripts/run_cloze.py --lesson Pedodonti --dir "C:\\DUS\\Pedodonti\\pedo ünite pdf"
  python scripts/run_cloze.py --lesson Radyoloji --dir "C:\\DUS\\Radyoloji\\Radyoloji Ünite PDF"
  python scripts/run_cloze.py --lesson Endodonti --file "C:\\DUS\\Endo\\unite1.pdf"

Özellikler:
  - MCP sunucu kontrolü + PowerShell Start-Process ile otomatik başlatma
  - Checkpoint/resume: scripts/logs/{lesson}_cloze_progress.json
  - Natural sort (1, 2, 10... doğal sıra)
  - Birden fazla --dir veya --file argümanı desteklenir
"""

import os
import sys
import re
import json
import time
import socket
import subprocess
import argparse
from pathlib import Path

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

sys.path.insert(0, os.path.dirname(__file__))
from config import MCP_URL

LOG_DIR = os.path.join(os.path.dirname(__file__), "logs")
os.makedirs(LOG_DIR, exist_ok=True)


# ─── MCP Sunucu Kontrolü ─────────────────────────────────────────────────────

def _port_open(host: str, port: int, timeout: float = 3.0) -> bool:
    try:
        with socket.create_connection((host, port), timeout=timeout):
            return True
    except OSError:
        return False


def ensure_mcp_running(mcp_url: str = MCP_URL, wait_secs: int = 60) -> bool:
    """
    MCP sunucusunu kontrol eder. Kapalıysa PowerShell Start-Process ile başlatır.
    Port 8000'e TCP bağlantısı yaparak kontrol eder (HTTP 406 da 'açık' anlamına gelir).
    """
    from urllib.parse import urlparse
    parsed = urlparse(mcp_url)
    host = parsed.hostname or "127.0.0.1"
    port = parsed.port or 8000

    if _port_open(host, port):
        print(f"✅ MCP sunucusu hazır ({mcp_url})")
        return True

    print(f"⚠️  MCP sunucusu kapalı ({mcp_url}) — başlatılıyor...")

    # PowerShell Start-Process: yeni pencerede uvx başlat
    ps_cmd = (
        'Start-Process -FilePath "uvx" '
        '-ArgumentList '
        '"--from","git+https://github.com/jacob-bd/notebooklm-mcp-cli.git",'
        '"notebooklm-mcp","--transport","http","--host","127.0.0.1","--port","8000","--path","/mcp" '
        '-WindowStyle Normal'
    )
    try:
        subprocess.Popen(
            ["powershell", "-NonInteractive", "-Command", ps_cmd],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
    except Exception as e:
        print(f"❌ Start-Process başarısız: {e}")
        print("   Manuel: scripts\\start_notebooklm_mcp.bat")
        return False

    print(f"   Sunucu başlatıldı, {wait_secs}s bekleniyor...")
    start = time.time()
    while time.time() - start < wait_secs:
        time.sleep(5)
        elapsed = int(time.time() - start)
        if _port_open(host, port):
            print(f"✅ MCP sunucusu {elapsed}s'de hazır.")
            return True
        print(f"   ⏳ {elapsed}s/{wait_secs}s...")

    print(f"❌ MCP sunucusu {wait_secs}s içinde başlamadı.")
    print("   Manuel başlatma: scripts\\start_notebooklm_mcp.bat")
    return False


# ─── Checkpoint / Resume ─────────────────────────────────────────────────────

def load_progress(lesson: str) -> set:
    path = os.path.join(LOG_DIR, f"{lesson}_cloze_progress.json")
    if os.path.exists(path):
        try:
            with open(path, "r", encoding="utf-8") as f:
                return set(json.load(f).get("completed", []))
        except Exception:
            pass
    return set()


def save_progress(lesson: str, completed: set):
    path = os.path.join(LOG_DIR, f"{lesson}_cloze_progress.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump({"completed": list(completed)}, f, ensure_ascii=False, indent=2)


# ─── Dosya Listesi ───────────────────────────────────────────────────────────

def natural_sort_key(name: str) -> list:
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"(\d+)", name)]


def collect_files(dirs: list, files: list) -> list:
    result = []
    for d in dirs:
        p = Path(d)
        if not p.is_dir():
            print(f"   ⚠️ Dizin bulunamadı, atlandı: {d}")
            continue
        pdfs = [f for f in p.iterdir() if f.suffix.lower() in (".pdf", ".md")]
        pdfs.sort(key=lambda f: natural_sort_key(f.name))
        result.extend(pdfs)
    for f in files:
        p = Path(f)
        if p.is_file() and p.suffix.lower() in (".pdf", ".md"):
            result.append(p)
        else:
            print(f"   ⚠️ Dosya bulunamadı/geçersiz, atlandı: {f}")
    return result


# ─── Ana Akış ────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Evrensel Cloze Pipeline Runner — her ders için ayrı script gerekmez",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Örnekler:
  python scripts/run_cloze.py --lesson Pedodonti --dir "C:\\DUS\\Pedodonti\\pedo ünite pdf"
  python scripts/run_cloze.py --lesson Radyoloji --dir "C:\\DUS\\Radyoloji\\Radyoloji Ünite PDF"
  python scripts/run_cloze.py --lesson Endodonti --file "C:\\endo\\unite1.pdf"
  python scripts/run_cloze.py --lesson Protez --dir "..." --skip-mcp-check
        """
    )
    parser.add_argument("--lesson", required=True, help="Ders adı (Pedodonti, Radyoloji...)")
    parser.add_argument("--dir", dest="dirs", action="append", default=[],
                        metavar="DIZIN", help="PDF/MD klasörü (tekrarlanabilir)")
    parser.add_argument("--file", dest="files", action="append", default=[],
                        metavar="DOSYA", help="Tek PDF/MD dosyası (tekrarlanabilir)")
    parser.add_argument("--skip-mcp-check", action="store_true",
                        help="MCP sunucu kontrolünü ve otomatik başlatmayı atla")
    args = parser.parse_args()

    print("=" * 60)
    print(f" {args.lesson} — Cloze Kart Üretimi")
    print("=" * 60)

    # 1. MCP kontrol
    if not args.skip_mcp_check:
        if not ensure_mcp_running():
            sys.exit(1)

    # 2. Dosya listesi
    if not args.dirs and not args.files:
        parser.error("En az bir --dir veya --file gerekli.")

    all_files = collect_files(args.dirs, args.files)
    if not all_files:
        print("❌ Hiç PDF/MD bulunamadı.")
        sys.exit(1)

    print(f"📂 {len(all_files)} dosya bulundu.")

    # 3. Checkpoint yükle
    completed = load_progress(args.lesson)
    if completed:
        print(f"📋 Checkpoint: {len(completed)} ünite zaten tamamlandı, atlanacak.")

    env = os.environ.copy()
    env["PYTHONUTF8"] = "1"
    total = len(all_files)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    cloze_script = os.path.join(script_dir, "notebooklm_mcp_cloze.py")

    # 4. Ünite döngüsü
    for i, fp in enumerate(all_files, 1):
        fname = fp.name
        if fname in completed:
            print(f"[{i}/{total}] ATLANDI: {fname}")
            continue

        print(f"\n{'=' * 60}")
        print(f">>> [{i}/{total}] Başlıyor: {fname}")
        print(f"{'=' * 60}\n")

        result = subprocess.run(
            [sys.executable, "-u", cloze_script,
             "--file", str(fp),
             "--lesson", args.lesson],
            env=env,
        )

        if result.returncode == 0:
            print(f"\n[OK] Tamamlandı: {fname}")
            completed.add(fname)
            save_progress(args.lesson, completed)
        else:
            print(f"\n[HATA] Başarısız: {fname} (kod: {result.returncode})")
            print("Pipeline durdu. Devam için scripti yeniden çalıştırın (checkpoint korundu).")
            sys.exit(1)

    print(f"\n{'=' * 60}")
    print(f"[TAMAM] {args.lesson} — tüm {total} ünite tamamlandı!")
    print(f"{'=' * 60}")


if __name__ == "__main__":
    main()
