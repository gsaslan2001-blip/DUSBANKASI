"""
DUS BANKASI — Çok-Ders MCP Pipeline Orkestratörü v2
=====================================================
Özellikler:
  - Checkpoint tabanlı: her ünite bitince durumu kaydeder, kaldığı yerden devam eder
  - MCP sunucusu sağlık kontrolü: başta ve her ünite öncesi :3000'i kontrol eder
  - Her 30 dakikada bir durum özeti loglar
  - Yükleme hatalarında otomatik retry (30s bekle)
  - Tüm stdout/stderr tek log dosyasına akar (PYTHONUTF8=1, -u unbuffered)

Kullanım:
  python -u scripts/run_mcp_pipeline.py
  python -u scripts/run_mcp_pipeline.py --resume   # checkpoint'ten devam
  python -u scripts/run_mcp_pipeline.py --status   # sadece durum göster
"""

import os
import sys
import json
import time
import urllib.request
import subprocess
import argparse
from pathlib import Path
from datetime import datetime

os.environ["PYTHONUTF8"] = "1"

# ─── Ayarlar ───────────────────────────────────────────────
SCRIPT_DIR = Path(__file__).parent
LOG_DIR = SCRIPT_DIR / "logs"
LOG_DIR.mkdir(exist_ok=True)

PIPELINE_LOG = LOG_DIR / "pipeline_master.log"
CHECKPOINT_FILE = LOG_DIR / "pipeline_checkpoint.json"
STATUS_INTERVAL = 1800  # 30 dakika

MCP_URL = "http://127.0.0.1:3000/mcp"
MCP_HEALTH_RETRIES = 3

# ─── Ders → PDF klasör eşlemesi ────────────────────────────
QUEUES = [
    {
        "lesson": "Endodonti",
        "dir": r"C:\Users\FURKAN\Desktop\DUS\Endodonti\Endodonti Ünite Pdf",
    },
    {
        "lesson": "Histoloji",
        "dir": r"C:\Users\FURKAN\Desktop\DUS\Histoloji\histo ünite pdf",
    },
    {
        "lesson": "Protez",
        "dir": r"C:\Users\FURKAN\Desktop\DUS\protez\Yeni klasör\Parcalanmis",
    },
]


# ─── Yardımcı Fonksiyonlar ────────────────────────────────

def log(msg: str):
    """Hem stdout'a yaz (unbuffered) hem log dosyasına ekle."""
    ts = datetime.now().strftime("%H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line, flush=True)
    try:
        with open(PIPELINE_LOG, "a", encoding="utf-8") as f:
            f.write(line + "\n")
    except Exception:
        pass


def check_mcp_alive() -> bool:
    """MCP sunucusunun :3000'de canlı olup olmadığını kontrol eder."""
    import socket
    try:
        with socket.create_connection(("127.0.0.1", 3000), timeout=5):
            return True
    except Exception:
        return False


def wait_for_mcp(max_wait=120) -> bool:
    """MCP sunucusunu bekler. max_wait saniye içinde canlıya geçmezse False döner."""
    for i in range(max_wait // 5):
        if check_mcp_alive():
            return True
        if i == 0:
            log("⏳ MCP sunucusu bekleniyor (max 2 dk)...")
        time.sleep(5)
    return False


def natural_sort_key(p: Path) -> int:
    import re
    m = re.search(r'\d+', p.name)
    return int(m.group()) if m else 999


def get_pdf_files(folder: str) -> list:
    """Klasördeki PDF'leri doğal sırayla döner."""
    p = Path(folder)
    if not p.exists():
        log(f"❌ Klasör bulunamadı: {folder}")
        return []
    files = [f for f in p.iterdir() if f.suffix.lower() == ".pdf"]
    files.sort(key=natural_sort_key)
    return files


# ─── Checkpoint Yönetimi ──────────────────────────────────

def load_checkpoint() -> dict:
    if CHECKPOINT_FILE.exists():
        try:
            with open(CHECKPOINT_FILE, encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            pass
    return {"completed": [], "failed": [], "started_at": datetime.now().isoformat()}


def save_checkpoint(cp: dict):
    try:
        with open(CHECKPOINT_FILE, "w", encoding="utf-8") as f:
            json.dump(cp, f, ensure_ascii=False, indent=2)
    except Exception as e:
        log(f"⚠️ Checkpoint yazılamadı: {e}")


def checkpoint_key(lesson: str, unit_name: str) -> str:
    return f"{lesson}::{unit_name}"


# ─── Tek Ünite Çalıştır ─────────────────────────────────

def run_unit(lesson: str, pdf_path: Path, unit_index: int, total: int) -> bool:
    """Tek üniteyi notebooklm_mcp_exhaust.py ile işler. Başarı=True döner."""
    unit_name = pdf_path.stem
    log(f"\n{'─'*60}")
    log(f"📂 [{unit_index}/{total}] {lesson} → {unit_name}")
    log(f"   PDF: {pdf_path.name}")
    log(f"{'─'*60}")

    # Ünite başında MCP kontrolü
    if not check_mcp_alive():
        log("⚠️ MCP sunucusu cevap vermiyor, 30s bekleniyor...")
        time.sleep(30)
        if not check_mcp_alive():
            log("❌ MCP sunucusu hâlâ kapalı. Bu ünite atlanıyor.")
            return False

    unit_log = LOG_DIR / f"unit_{lesson}_{unit_name[:40].replace(' ', '_')}.log"

    cmd = [
        sys.executable, "-u",
        str(SCRIPT_DIR / "notebooklm_mcp_exhaust.py"),
        "--file", str(pdf_path),
        "--lesson", lesson,
        "--audit",
    ]

    try:
        with open(unit_log, "w", encoding="utf-8") as lf:
            proc = subprocess.Popen(
                cmd,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                encoding="utf-8",
                errors="replace",
                cwd=str(SCRIPT_DIR.parent),
                env={**os.environ, "PYTHONUTF8": "1"},
            )
            for line in proc.stdout:
                line = line.rstrip()
                print(line, flush=True)  # canlı çıktı
                lf.write(line + "\n")
                lf.flush()
            proc.wait()

        if proc.returncode == 0:
            log(f"✅ Tamamlandı: {lesson} → {unit_name}")
            return True
        else:
            log(f"❌ Hata (exit={proc.returncode}): {lesson} → {unit_name}")
            return False

    except Exception as e:
        log(f"❌ İstisna: {e}")
        return False


# ─── Durum Raporu ────────────────────────────────────────

def print_status(cp: dict, queues: list):
    total_units = sum(len(get_pdf_files(q["dir"])) for q in queues)
    done = len(cp.get("completed", []))
    failed = len(cp.get("failed", []))
    log(f"\n{'='*60}")
    log(f"📊 DURUM RAPORU — {datetime.now().strftime('%d.%m.%Y %H:%M')}")
    log(f"   Toplam ünite : {total_units}")
    log(f"   Tamamlanan   : {done}")
    log(f"   Hatalı       : {failed}")
    log(f"   Kalan        : {total_units - done - failed}")
    log(f"   MCP sunucu   : {'✅ Canlı' if check_mcp_alive() else '❌ Kapalı'}")
    if cp.get("failed"):
        log(f"   Hatalılar    : {', '.join(cp['failed'][-5:])}")
    log(f"{'='*60}\n")


# ─── Ana Orkestratör ─────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--resume", action="store_true", help="Checkpoint'ten devam et")
    parser.add_argument("--status", action="store_true", help="Sadece durum göster")
    parser.add_argument("--no-checkpoint", action="store_true", help="Checkpoint'i yoksay, baştan başla")
    args = parser.parse_args()

    log("=" * 60)
    log("🚀 DUS BANKASI — MCP Pipeline Orkestratörü v2")
    log(f"   Dersler: {', '.join(q['lesson'] for q in QUEUES)}")
    log(f"   Log: {PIPELINE_LOG}")
    log("=" * 60)

    # ── Checkpoint yükle ──
    if args.no_checkpoint:
        cp = {"completed": [], "failed": [], "started_at": datetime.now().isoformat()}
        save_checkpoint(cp)
        log("🔄 Checkpoint sıfırlandı, baştan başlanıyor.")
    else:
        cp = load_checkpoint()
        if cp.get("completed"):
            log(f"📌 Checkpoint bulundu: {len(cp['completed'])} ünite tamamlanmış")

    if args.status:
        print_status(cp, QUEUES)
        return

    # ── MCP sunucusu kontrolü ──
    log("\n🔍 MCP sunucusu kontrol ediliyor...")
    if check_mcp_alive():
        log("✅ MCP sunucusu aktif: http://127.0.0.1:3000/mcp")
    else:
        log("❌ MCP sunucusu cevap vermiyor!")
        log("   Lütfen ayrı bir terminalde çalıştırın:")
        log("   scripts\\start_notebooklm_mcp.bat")
        log("   60 saniye bekleniyor...")
        if not wait_for_mcp(60):
            log("🚫 MCP sunucusu başlatılamadı. Çıkılıyor.")
            sys.exit(1)

    # ── Tüm PDF'leri derle ──
    all_units = []
    for q in QUEUES:
        files = get_pdf_files(q["dir"])
        log(f"   {q['lesson']}: {len(files)} PDF bulundu")
        for f in files:
            all_units.append({"lesson": q["lesson"], "pdf": f})

    total = len(all_units)
    log(f"\n📋 Toplam: {total} ünite işlenecek")

    # ── İşlem döngüsü ──
    last_status_time = time.time()
    done_count = 0
    fail_count = 0

    for i, unit in enumerate(all_units, 1):
        lesson = unit["lesson"]
        pdf = unit["pdf"]
        key = checkpoint_key(lesson, pdf.stem)

        # Checkpoint kontrolü
        if key in cp.get("completed", []) and not args.no_checkpoint:
            log(f"⏭️  [{i}/{total}] Atlandı (tamamlanmış): {lesson} → {pdf.stem}")
            done_count += 1
            continue

        # 30 dakikalık durum raporu
        if time.time() - last_status_time >= STATUS_INTERVAL:
            print_status(cp, QUEUES)
            last_status_time = time.time()

        # Üniteyi çalıştır
        success = run_unit(lesson, pdf, i, total)

        if success:
            cp.setdefault("completed", []).append(key)
            # failed listesinden çıkar (retry başarılı)
            if key in cp.get("failed", []):
                cp["failed"].remove(key)
            done_count += 1
        else:
            cp.setdefault("failed", []).append(key)
            fail_count += 1

        cp["last_updated"] = datetime.now().isoformat()
        save_checkpoint(cp)

        # Üniteler arası bekleme (cooldown)
        if i < total:
            log("⏳ Sonraki ünite için 25s bekleniyor...")
            time.sleep(25)

    # ── Final Raporu ──
    log("\n" + "=" * 60)
    log("🎉 TÜM İŞLEMLER TAMAMLANDI!")
    log(f"   Başarılı  : {done_count}")
    log(f"   Hatalı    : {fail_count}")
    log(f"   Checkpoint: {CHECKPOINT_FILE}")
    log("=" * 60)

    if fail_count > 0:
        log(f"\n⚠️ Başarısız üniteler:")
        for key in cp.get("failed", []):
            log(f"   - {key}")
        log(f"\n💡 Tekrar denemek için:")
        log(f"   python -u scripts/run_mcp_pipeline.py --resume")


if __name__ == "__main__":
    main()
