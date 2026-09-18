import os, sys, glob, re, json

sys.path.insert(0, os.path.dirname(__file__))
if sys.platform == "win32":
    try: sys.stdout.reconfigure(encoding='utf-8')
    except: pass

from import_gemini_resto_15units import load_all_questions

SRC_DIR = r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı"
files = glob.glob(os.path.join(SRC_DIR, "*.txt"))

parsed_questions = load_all_questions()

print("="*60)
print("🔍 TAM KONTROL VE DOĞRULAMA RAPORU")
print("="*60)

unit_counts = {}
for q in parsed_questions:
    u = q["unit"]
    unit_counts[u] = unit_counts.get(u, 0) + 1

total_raw_question_blocks = 0
for filepath in sorted(files, key=lambda x: [int(c) if c.isdigit() else c for c in re.split(r'(\d+)', os.path.basename(x))]):
    fname = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Count occurrences of '"question":' in the entire raw file content
    q_matches = len(re.findall(r'"question"\s*:', content))
    total_raw_question_blocks += q_matches
    print(f"📄 {fname}:")
    print(f"   - Ham dosyadaki '\"question\":' etiketi sayısı: {q_matches}")

print("-" * 60)
print(f"📊 Ham Dosyalardaki Toplam Soru Sayısı : {total_raw_question_blocks}")
print(f"📊 Ayrıştırılan (Parsed) Toplam Soru  : {len(parsed_questions)}")

if total_raw_question_blocks == len(parsed_questions):
    print("\n✅ %100 EŞLEŞME MÜKEMMEL! HİÇBİR SORU KAÇIRILMADI VE KAYBOLMADI.")
else:
    print(f"\n⚠️ FARK VAR! Eksik: {total_raw_question_blocks - len(parsed_questions)} soru.")
