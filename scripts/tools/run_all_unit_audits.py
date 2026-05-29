import os
import sys
import subprocess
import urllib.request
import json
import argparse
from datetime import datetime

# Prevent encoding crashes on Windows cmd/powershell standard output
sys.stdout.reconfigure(encoding='utf-8')

# Path setups
SCRIPT_DIR = os.path.dirname(__file__)
PROJECT_DIR = os.path.abspath(os.path.join(SCRIPT_DIR, "..", ".."))
sys.path.insert(0, os.path.join(PROJECT_DIR, "scripts"))

from config import SUPABASE_URL, SUPABASE_KEY

def fetch_all_lesson_units():
    url = f"{SUPABASE_URL}/rest/v1/questions?select=lesson,unit"
    headers = {'apikey': SUPABASE_KEY, 'Authorization': f"Bearer {SUPABASE_KEY}"}
    
    data = []
    fr = 0
    limit = 1000
    
    print("[1/2] Supabase'den güncel lesson/unit listesi çekiliyor...")
    while True:
        req = urllib.request.Request(f"{url}", headers=headers)
        req.add_header('Range', f"{fr}-{fr+limit-1}")
        try:
            res = json.loads(urllib.request.urlopen(req).read())
            data.extend(res)
            if len(res) < limit:
                break
            fr += limit
        except Exception as e:
            print(f"Veri çekilirken hata oluştu: {e}")
            break
            
    # Extract unique combinations
    unique_pairs = set()
    for row in data:
        lesson = row.get('lesson')
        unit = row.get('unit')
        if lesson and unit:
            unique_pairs.add((lesson, unit))
            
    # Sort them by lesson and then by unit
    sorted_pairs = sorted(list(unique_pairs), key=lambda x: (x[0], x[1]))
    print(f"Toplam {len(sorted_pairs)} adet benzersiz (Ders, Ünite) kombinasyonu bulundu.\n")
    return sorted_pairs

def run_audit_for_unit(lesson, unit, dry_run, concurrency):
    audit_script = os.path.join(SCRIPT_DIR, "smart_audit_pipeline.py")
    
    cmd = [
        sys.executable,
        audit_script,
        "--lesson", lesson,
        "--unit", unit,
        "--concurrency", str(concurrency)
    ]
    
    if dry_run:
        cmd.append("--dry-run")
        
    print(f"\n>>>>> BAŞLATILIYOR: {lesson} - {unit}")
    try:
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError as e:
        print(f"❌ [HATA] {lesson} - {unit} işlenirken bir sorun oluştu: {e}")
        print(f"Kaldığınız yerden devam etmek için scripti şu parametrelerle çalıştırabilirsiniz:")
        print(f"python {os.path.basename(__file__)} --resume-lesson \"{lesson}\" --resume-unit \"{unit}\"")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n\n🛑 İşlem kullanıcı tarafından (Ctrl+C) durduruldu.")
        print(f"Kaldığınız yerden devam etmek için scripti şu parametrelerle çalıştırabilirsiniz:")
        print(f"python {os.path.basename(__file__)} --resume-lesson \"{lesson}\" --resume-unit \"{unit}\"")
        sys.exit(1)

def main():
    parser = argparse.ArgumentParser(description="Tüm üniteler için sırayla Kalite Kontrol (Ölüm Maçı) çalıştırır.")
    parser.add_argument("--dry-run", action="store_true", help="DB'ye yazmadan sadece sonuçları gösterir.")
    parser.add_argument("--resume-lesson", type=str, help="Devam edilecek Ders adı")
    parser.add_argument("--resume-unit", type=str, help="Devam edilecek Ünite adı")
    parser.add_argument("--concurrency", type=int, default=8, help="API istekleri için paralel işlem sayısı")
    args = parser.parse_args()

    pairs = fetch_all_lesson_units()
    
    resume_lesson_found = args.resume_lesson is None
    resume_unit_found = args.resume_unit is None

    print(f"======== ALL UNITS SMART AUDIT PIPELINE ========")
    print(f"Mod: {'DRY-RUN' if args.dry_run else 'FLAG'}")
    print(f"Zaman: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"================================================")

    for lesson, unit in pairs:
        if not resume_lesson_found:
            if lesson == args.resume_lesson:
                resume_lesson_found = True
            else:
                continue

        if not resume_unit_found and resume_lesson_found:
            if unit == args.resume_unit:
                resume_unit_found = True
            else:
                continue
                
        run_audit_for_unit(lesson, unit, args.dry_run, args.concurrency)
        
    print("\n✅ TÜM ÜNİTELER İÇİN DENETİM TAMAMLANDI!")

if __name__ == "__main__":
    main()
