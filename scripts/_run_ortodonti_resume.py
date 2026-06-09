"""
Ortodonti Resume Runner
-----------------------
1. Ünite 5 uncovered-only turu (32 kalan kavram)
2. Ünite 5 audit
3. Ünite 6-21 tam üretim + audit
"""
import asyncio
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "tools"))

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", line_buffering=True)
    except Exception:
        pass

from config import NOTEBOOK_ID, MCP_URL
from shared import get_existing_units, deploy_to_supabase, get_questions_for_unit, classify_error, RetryableError, FatalError
from notebooklm_mcp_exhaust import (
    NotebookLMMCPClient, ensure_auth,
    process_unit_exhaustive
)
from smart_audit_pipeline import run_audit

PDF_BASE = r"C:\Users\FURKAN\Desktop\DUS\Ortodonti\Ortodonti Ünite PDF"

# Ünite 5: sadece uncovered turu
UNIT5 = {
    "pdf": os.path.join(PDF_BASE, "Ünite 5 - ORTODONTİK TEŞHİS.pdf"),
    "name": "Ünite 5 - ORTODONTİK TEŞHİS",
}

# Ünite 6-21: tam üretim
REMAINING_UNITS = [
    "Ünite 6 - MATURASYON ANALİZİ",
    "Ünite 7 - DENTAL MALOKLÜZYONLAR",
    "Ünite 8 - ORTODONTİK TEDAVİLER",
    "Ünite 9 - SÜRME REHBERLİĞİ (GUIDANCE ERUPTION)",
    "Ünite 10 - ORTODONTİK TEDAVİ APAREYLERİ",
    "Ünite 11 - EKSTRAORAL APAREYLER",
    "Ünite 12 - ORTODONTİK TEDAVİ PLANLAMASI",
    "Ünite 13 - GÖMÜLÜ DİŞLERİN ORTODONTİK TEDAVİSİ",
    "Ünite 14 - YETİŞKİN HASTALARDA ORTODONTİK TEDAVİ",
    "Ünite 15 - SENDROMLAR",
    "Ünite 16 - DUDAK VE DAMAK YARIKLARI",
    "Ünite 17 - ORTOGNATİK CERRAHİ ILE ORTODONTİK TEDAVİ",
    "Ünite 18 - ORTODONTİK TEDAVİ KOMPLİKASYONLARI",
    "Ünite 19 - ORTODONTİK MATERYALLER",
    "Ünite 20 - RETANSİYON – RELAPS",
    "Ünite 21 - EK BİLGİLER",
]

COOLDOWN = 10  # saniye


async def main():
    print("=" * 60)
    print("ORTODONTI RESUME RUNNER")
    print(f"Adım 1: Ünite 5 uncovered-only ({UNIT5['name']})")
    print(f"Adım 2: Ünite 6-21 tam üretim ({len(REMAINING_UNITS)} ünite)")
    print("=" * 60)

    async with NotebookLMMCPClient() as client:
        if not await ensure_auth(client):
            print("❌ Auth başarısız — çıkılıyor.")
            sys.exit(1)

        # ── ADIM 1: Ünite 5 uncovered turu ──
        print(f"\n{'='*60}")
        print(f"[ADIM 1] {UNIT5['name']} — UNCOVERED TURU")
        print(f"{'='*60}")
        try:
            await process_unit_exhaustive(
                client,
                lesson="Ortodonti",
                unit_name=UNIT5["name"],
                file_path=UNIT5["pdf"],
                dry_run=False,
                uncovered_only=True,
            )
            print(f"\n  Audit başlatılıyor: {UNIT5['name']}")
            await run_audit("Ortodonti", mode="flag", dry_run=False, interactive=False, unit=UNIT5["name"])
        except FatalError as fe:
            print(f"  ❌ FATAL (Ünite 5): {fe}")

        await asyncio.sleep(COOLDOWN)

        # ── ADIM 2: Ünite 6-21 ──
        total = len(REMAINING_UNITS)
        for idx, unit_name in enumerate(REMAINING_UNITS, 1):
            pdf_path = os.path.join(PDF_BASE, f"{unit_name}.pdf")
            if not os.path.exists(pdf_path):
                print(f"\n  ⚠️ PDF bulunamadı, atlandı: {pdf_path}")
                continue

            print(f"\n{'='*60}")
            print(f"[ADIM 2 — {idx}/{total}] {unit_name}")
            print(f"{'='*60}")
            try:
                await process_unit_exhaustive(
                    client,
                    lesson="Ortodonti",
                    unit_name=unit_name,
                    file_path=pdf_path,
                    dry_run=False,
                    uncovered_only=False,
                )
                print(f"\n  Audit başlatılıyor: {unit_name}")
                await run_audit("Ortodonti", mode="flag", dry_run=False, interactive=False, unit=unit_name)
            except FatalError as fe:
                print(f"  ❌ FATAL ({unit_name}): {fe}")
                sys.exit(1)

            if idx < total:
                print(f"  ⏳ {COOLDOWN}s bekleniyor...")
                await asyncio.sleep(COOLDOWN)

    print("\n" + "=" * 60)
    print("🎉 ORTODONTI RESUME — TAMAMLANDI")
    print("=" * 60)


if __name__ == "__main__":
    asyncio.run(main())
