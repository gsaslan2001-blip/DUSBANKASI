import os
import sys
import re
import json
from pathlib import Path

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import shared

CIKTI_DIR = Path(r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı")

biyokimya_files = [
    "001-Karbonhidratlar.txt",
    "002-Lipidler.txt",
    "003-Metabolizma.txt",
    "004-Aminoasitler.txt",
    "005-Proteinler.txt",
    "006-Enzimler.txt",
    "007-Vitaminler.txt",
    "008-Hormonlar.txt",
    "009-Hücre ve Organeller.txt",
    "010-Nükleotidler ve Genom.txt",
    "011-RNA.txt"
]

def repair_json_strings(text: str) -> str:
    out: list[str] = []
    in_string = False
    escaped = False
    for index, ch in enumerate(text):
        if in_string:
            if escaped:
                out.append(ch)
                escaped = False
            elif ch == "\\":
                out.append(ch)
                escaped = True
            elif ch == '"':
                lookahead = text[index + 1 :].lstrip()
                if not lookahead or lookahead[0] in ",}]:":
                    out.append(ch)
                    in_string = False
                else:
                    out.append('\\"')
            elif ch in "\r\n":
                out.append("\\n")
            else:
                out.append(ch)
        else:
            out.append(ch)
            if ch == '"':
                in_string = True
    return "".join(out)

def parse_txt_file(path: Path):
    text = path.read_text(encoding="utf-8")
    blocks = re.findall(r"<questions_json>([\s\S]*?)</questions_json>", text)
    if not blocks:
        blocks = re.findall(r"```(?:json)?\s*(\[\s*\{[\s\S]*?\}\s*\])\s*```", text)
    
    questions = []
    for b_idx, block in enumerate(blocks):
        clean_block = block.strip()
        repaired = repair_json_strings(clean_block)
        try:
            parsed = json.loads(repaired)
            if isinstance(parsed, list):
                questions.extend(parsed)
            elif isinstance(parsed, dict) and "questions" in parsed:
                questions.extend(parsed["questions"])
        except Exception as exc:
            # Nesne nesne decode et
            starts = [m.start() for m in re.finditer(r"(?m)^\s*\{\s*$", repaired)]
            recovered = 0
            for idx, obj_start in enumerate(starts):
                obj_end = starts[idx + 1] if idx + 1 < len(starts) else len(repaired)
                candidate = repaired[obj_start:obj_end].rstrip().rstrip(",")
                try:
                    row, _ = json.JSONDecoder().raw_decode(candidate.lstrip())
                    if isinstance(row, dict) and "question" in row:
                        questions.append(row)
                        recovered += 1
                except Exception:
                    pass
            print(f"  [UYARI] {path.name} Blok #{b_idx+1}: Kurtarma ile {recovered} soru alındı.")

    return questions

# 1. Supabase'deki mevcut Biyokimya sorularını çek
print("Supabase'den mevcut Biyokimya soruları çekiliyor...")
existing_units = shared.get_existing_units("Biyokimya")
print("Mevcut DB Üniteleri:", existing_units)

all_existing_keys = set()
existing_db_questions_by_unit = {}
for u in existing_units:
    db_qs = shared.get_questions_for_unit("Biyokimya", u)
    existing_db_questions_by_unit[u] = db_qs
    for q in db_qs:
        k = re.sub(r"\W+", " ", (q.get("question") or "").lower()).strip()
        if k:
            all_existing_keys.add(k)

print(f"DB'de toplam {len(all_existing_keys)} benzersiz soru anahtarı mevcut.\n")

# 2. Dosyaları parse et ve kontrol et
summary = []
all_new_questions = []

for filename in biyokimya_files:
    filepath = CIKTI_DIR / filename
    if not filepath.exists():
        print(f"❌ {filename} BULUNAMADI")
        continue

    raw_qs = parse_txt_file(filepath)
    
    # Kanonik normalizasyon
    normalized = []
    for raw in raw_qs:
        # Şıklar
        options = {}
        for k in ("a", "b", "c", "d", "e"):
            opt_val = raw.get(f"option_{k}") or raw.get(k) or raw.get(k.upper()) or (raw.get("options") or {}).get(k.upper())
            if opt_val:
                options[k.upper()] = str(opt_val).strip()
        
        ca = raw.get("correct_answer") or raw.get("correctAnswer") or ""
        ca = str(ca).strip().upper()
        
        unit = raw.get("unit") or raw.get("ünite") or ""
        lesson = raw.get("lesson") or "Biyokimya"
        
        normalized.append({
            "lesson": lesson,
            "unit": unit,
            "question": str(raw.get("question") or "").strip(),
            "options": options,
            "correctAnswer": ca,
            "explanation": str(raw.get("explanation") or "").strip()
        })
    
    # Kalite kapısı & dedup
    valid_qs, rejected_qs = shared.validate_question_batch(normalized, "Biyokimya", None)
    
    # Mükerrer kontrolü
    unique_to_insert = []
    duplicates = []
    seen_in_batch = set()
    
    for q in valid_qs:
        q_key = re.sub(r"\W+", " ", (q.get("question") or "").lower()).strip()
        if q_key in all_existing_keys or q_key in seen_in_batch:
            duplicates.append(q)
        else:
            seen_in_batch.add(q_key)
            all_existing_keys.add(q_key)
            unique_to_insert.append(q)
    
    all_new_questions.extend(unique_to_insert)
    units_in_file = sorted(list(set(q.get("unit") for q in unique_to_insert)))
    
    summary.append({
        "file": filename,
        "parsed": len(raw_qs),
        "valid": len(valid_qs),
        "rejected": len(rejected_qs),
        "duplicates": len(duplicates),
        "to_insert": len(unique_to_insert),
        "units": units_in_file
    })
    
    print(f"📄 {filename:30} -> Toplam: {len(raw_qs):2d} | Geçerli: {len(valid_qs):2d} | Mükerrer: {len(duplicates):2d} | Eklenecek: {len(unique_to_insert):2d} | Ünite: {units_in_file}")

print("\n" + "="*80)
print(f"GENEL TOPLAM:")
print(f"  Toplam Parse Edilen   : {sum(s['parsed'] for s in summary)}")
print(f"  Kalite Kapısından Geçen: {sum(s['valid'] for s in summary)}")
print(f"  Reddedilen            : {sum(s['rejected'] for s in summary)}")
print(f"  Mükerrer (Atlanan)    : {sum(s['duplicates'] for s in summary)}")
print(f"  SUPABASE'E EKLENECEK  : {sum(s['to_insert'] for s in summary)} YENİ SORU")
print("="*80)
