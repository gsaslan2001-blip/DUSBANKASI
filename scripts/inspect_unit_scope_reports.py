import os, sys, glob, re

sys.path.insert(0, os.path.dirname(__file__))
if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

SRC_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"
files = glob.glob(os.path.join(SRC_DIR, "*.txt"))

print("="*70)
print("🔍 15 ÜNİTENİN GEMAİNİ KAPSAM VE BATCH RAPORU İNCELEMESİ")
print("="*70)

for filepath in sorted(files, key=lambda x: [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', os.path.basename(x))]):
    fname = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    print(f"\n📄 {fname}:")
    
    # Extract KAPSAM RAPORU lines
    kapsam_matches = re.findall(r'═══ KAPSAM RAPORU.*?(?=<questions_json>|$)', content, re.DOTALL)
    for k_idx, km in enumerate(kapsam_matches):
        lines = [line.strip() for line in km.strip().split("\n") if line.strip()]
        header_text = " | ".join(lines[:5])
        print(f"   [Rapor #{k_idx+1}]: {header_text}")
        
    # Extract kapsamm_defteri or kalite_denetimi
    defter_matches = re.findall(r'<(?:kapsam_defteri|kalite_denetimi)>(.*?)</(?:kapsam_defteri|kalite_denetimi)>', content, re.DOTALL)
    for d_idx, dm in enumerate(defter_matches):
        lines = [line.strip() for line in dm.strip().split("\n") if line.strip()]
        defter_text = " | ".join(lines[:3])
        print(f"   [Defter/Denetim #{d_idx+1}]: {defter_text}")
        
    # Total questions in file
    q_count = len(re.findall(r'"question"\s*:', content))
    print(f"   👉 Toplam Dosyadaki Soru Sayısı: {q_count}")
