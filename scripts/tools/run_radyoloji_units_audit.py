"""
run_radyoloji_units_audit.py — Radyoloji Ünite-Bazlı Kalite Kontrol Orkestratörü

Kullanım:
    python scripts/tools/run_radyoloji_units_audit.py --dry-run
    python scripts/tools/run_radyoloji_units_audit.py --delete
    python scripts/tools/run_radyoloji_units_audit.py
"""

import sys
import os
import asyncio
import argparse
import urllib.parse
import re
from datetime import datetime

# Path setup
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "lib")))
sys.path.append(os.path.abspath(os.path.dirname(__file__)))

from shared import get_existing_units
from smart_audit_pipeline import run_audit

def natural_sort_key(s):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r"([0-9]+)", str(s))]

async def main_async():
    parser = argparse.ArgumentParser(description="DUSBANKASI Radyoloji Ünite-Bazlı Kalite Kontrol Orkestratörü")
    parser.add_argument("--delete", action="store_true", help="Kopyaları kalıcı olarak siler")
    parser.add_argument("--dry-run", action="store_true", help="İşlem yapmadan sadece raporlar")
    parser.add_argument("--concurrency", type=int, default=8, help="Paralel ölüm maçı eşzamanlılık limiti")
    args = parser.parse_args()

    mode = "delete" if args.delete else "flag"

    print(f"\n{'='*70}")
    print(f"   DUSBANKASI RADYOLOJİ ORKESTRATÖRÜ v1.0")
    print(f"   Mod : {'DRY-RUN' if args.dry_run else mode.upper()}")
    print(f"   {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*70}\n")

    # 1. Fetch all distinct units
    print("DB'den Radyoloji üniteleri çekiliyor (paginated)...")
    try:
        unit_counts = get_existing_units("Radyoloji")
        units = sorted(list(unit_counts.keys()), key=natural_sort_key)
    except Exception as e:
        print(f"❌ Üniteler çekilirken HATA oluştu: {e}")
        sys.exit(1)

    print(f"Toplam {len(units)} ünite bulundu. Sırayla işleniyor...\n")

    summary = []
    total_scanned_all = 0
    total_affected_all = 0

    for idx, unit in enumerate(units, 1):
        print(f"\n[{idx}/{len(units)}] Processing: {unit}")
        try:
            total_qs, total_affected = await run_audit(
                lesson="Radyoloji",
                mode=mode,
                dry_run=args.dry_run,
                interactive=False,
                unit=unit,
                concurrency=args.concurrency,
                cross_unit=False
            )
            summary.append({
                "unit": unit,
                "scanned": total_qs,
                "affected": total_affected,
                "status": "SUCCESS"
            })
            total_scanned_all += total_qs
            total_affected_all += total_affected
        except Exception as e:
            print(f"❌ {unit} işlenirken HATA oluştu: {e}")
            summary.append({
                "unit": unit,
                "scanned": 0,
                "affected": 0,
                "status": f"ERROR: {e}"
            })

    # Summary table
    print(f"\n\n{'='*70}")
    print(f"   GENEL RADYOLOJİ ANALİZ ÖZETİ")
    print(f"{'='*70}")
    print(f"{'Ünite Adı':<50} | {'Taranan':<8} | {'Etkilenen':<9} | {'Durum':<8}")
    print("-" * 75)
    for s in summary:
        unit_truncated = s["unit"][:48] + ".." if len(s["unit"]) > 50 else s["unit"]
        print(f"{unit_truncated:<50} | {s['scanned']:<8} | {s['affected']:<9} | {s['status']:<8}")
    print("-" * 75)
    action_label = "Önizlenen" if args.dry_run else ("İşaretlenen" if mode == "flag" else "Silinen")
    print(f"{'TOPLAM':<50} | {total_scanned_all:<8} | {total_affected_all:<9} | SUCCESS")
    print(f"{'='*70}\n")
    print(f"Genel Toplam: {total_scanned_all} soru tarandı. {total_affected_all} soru {action_label.lower()}.")

def main():
    try:
        asyncio.run(main_async())
    except KeyboardInterrupt:
        print("\n🛑 Orkestrasyon kullanıcı tarafından durduruldu.")
    except Exception as e:
        print(f"\n❌ Beklenmedik orkestrasyon HATA: {e}")

if __name__ == "__main__":
    main()
