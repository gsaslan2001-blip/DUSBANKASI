import urllib.request
import json
import sys
import os
import re
import asyncio
from collections import Counter

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "tools")))
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "lib")))

from smart_audit_pipeline import run_audit

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

headers = {
    'apikey': 'sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3',
    'Authorization': 'Bearer sb_publishable_O5x_kW_yqNYJRwvmwevGcA_T-JTUhD3'
}

def fetch_pedo_units():
    all_data = []
    offset = 0
    step = 1000
    while True:
        url = f'https://vblndoyjmkgaeuihydyd.supabase.co/rest/v1/questions?select=unit&lesson=ilike.Pedodonti&offset={offset}&limit={step}'
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            batch = json.loads(resp.read())
        if not batch:
            break
        all_data.extend(batch)
        offset += step
        if len(batch) < step:
            break
    counts = Counter(d.get('unit') for d in all_data if d.get('unit'))
    
    def sort_key(item):
        m = re.search(r'^\D*(\d+)', item[0])
        return int(m.group(1)) if m else 999
    
    return sorted(counts.items(), key=sort_key)

async def main():
    print("=" * 70)
    print("🛡️ DUSBANKASI PEDODONTİ ÜNİTE BAZLI ÖLÜM MAÇI & KALİTE DENETİMİ")
    print("=" * 70)
    
    dry_run = "--dry-run" in sys.argv
    mode = "delete" if "--delete" in sys.argv else "flag"
    
    units = fetch_pedo_units()
    print(f"Toplam İşlenecek Ünite Sayısı: {len(units)}")
    print(f"Mod: {'DRY-RUN' if dry_run else mode.upper()}\n")
    
    total_scanned = 0
    total_flagged = 0
    summary_report = []

    for idx, (unit_name, q_count) in enumerate(units, 1):
        print(f"\n" + "─"*70)
        print(f"📌 [{idx}/{len(units)}] ÜNİTE DENETLENİYOR: \"{unit_name}\" ({q_count} soru)")
        print("─"*70)
        
        try:
            scanned, affected = await run_audit(
                lesson="Pedodonti",
                mode=mode,
                dry_run=dry_run,
                interactive=False,
                unit=unit_name,
                concurrency=8
            )
            total_scanned += scanned
            total_flagged += affected
            summary_report.append({
                "unit": unit_name,
                "scanned": scanned,
                "affected": affected,
                "status": "OK"
            })
        except Exception as e:
            print(f"❌ [{unit_name}] Denetim hatası: {e}")
            summary_report.append({
                "unit": unit_name,
                "scanned": q_count,
                "affected": 0,
                "status": f"HATA: {e}"
            })
        
        await asyncio.sleep(1)

    print("\n" + "="*70)
    print("📊 PEDODONTİ ÜNİTE BAZLI DENETİM ÖZETİ")
    print("="*70)
    for rep in summary_report:
        status_icon = "✅" if rep["status"] == "OK" else "❌"
        print(f"{status_icon} {rep['unit']} | Tarandı: {rep['scanned']} | Kopya/Pasif: {rep['affected']}")
    print("-" * 70)
    print(f"GENEL TOPLAM | Tarandı: {total_scanned} | Toplam İşaretlenen Kopya: {total_flagged}")
    print("="*70)

if __name__ == "__main__":
    asyncio.run(main())
