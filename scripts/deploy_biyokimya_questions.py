import os
import sys
import re
import json
import time
from pathlib import Path

_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import shared

CIKTI_DIR = Path(r"C:\Users\FURKAN\Desktop\Projeler\gemini soru üretim\Çıktı")

# Dosya -> Onaylanan Kanonik Ünite Eşleştirmesi
FILE_TO_UNIT = {
    "001-Karbonhidratlar.txt": "BÖLÜM 1 - KARBONHİDRATLAR",
    "002-Lipidler.txt": "BÖLÜM 2 LİPİDLER",
    "003-Metabolizma.txt": "BÖLÜM 3 - METABOLİZMA",
    "004-Aminoasitler.txt": "BÖLÜM 4 - AMİNOASİTLER",
    "005-Proteinler.txt": "BÖLÜM 5 - PROTEİNLER",
    "006-Enzimler.txt": "6 ENZİMLER VE KLİNİK",
    "007-Vitaminler.txt": "7 VİTAMİNLER",
    "008-Hormonlar.txt": "BÖLÜM 8 - HORMONLAR",
    "009-Hücre ve Organeller.txt": "BÖLÜM 9 - HÜCRE VE ORGANELLER",
    "010-Nükleotidler ve Genom.txt": "BÖLÜM 10 - GENETİK Nükleotidler ve Genom",
    "011-RNA.txt": "BÖLÜM 10 - GENETİK Nükleotidler ve Genom"
}

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
        except Exception:
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
    return questions

def main():
    print("=" * 80)
    print("🚀 BİYOKİMYA SORULARI DUSBANKASI SUPABASE AKTARIMI BAŞLATILIYOR")
    print("=" * 80)

    # 1. Supabase'den mevcut tüm Biyokimya sorularını çek ve deduplication hash'lerini oluştur
    print("\n1. Supabase mevcut Biyokimya soru havuzu taranıyor...")
    existing_units = shared.get_existing_units("Biyokimya")
    print(f"Mevcut DB Üniteleri ({len(existing_units)}): {existing_units}")

    all_existing_keys = set()
    for u in existing_units:
        db_qs = shared.get_questions_for_unit("Biyokimya", u)
        for q in db_qs:
            k = re.sub(r"\W+", " ", (q.get("question") or "").lower()).strip()
            if k:
                all_existing_keys.add(k)
    print(f"Mevcut DB'de toplam {len(all_existing_keys)} benzersiz soru var.")

    # 2. Dosyaları parse et, normalize et ve üniteye göre grupla
    questions_by_unit = {}
    total_parsed = 0
    total_valid = 0
    total_rejected = 0
    total_duplicates = 0

    for filename, target_unit in FILE_TO_UNIT.items():
        filepath = CIKTI_DIR / filename
        if not filepath.exists():
            print(f"⚠️ Dosya bulunamadı: {filename}")
            continue

        raw_qs = parse_txt_file(filepath)
        total_parsed += len(raw_qs)

        normalized = []
        for raw in raw_qs:
            options = {}
            for k in ("a", "b", "c", "d", "e"):
                opt_val = raw.get(f"option_{k}") or raw.get(k) or raw.get(k.upper()) or (raw.get("options") or {}).get(k.upper())
                if opt_val:
                    options[k.upper()] = str(opt_val).strip()
            
            ca = raw.get("correct_answer") or raw.get("correctAnswer") or ""
            ca = str(ca).strip().upper()

            normalized.append({
                "lesson": "Biyokimya",
                "unit": target_unit,
                "question": str(raw.get("question") or "").strip(),
                "options": options,
                "correctAnswer": ca,
                "explanation": str(raw.get("explanation") or "").strip()
            })

        valid_qs, rejected_qs = shared.validate_question_batch(normalized, "Biyokimya", target_unit)
        total_valid += len(valid_qs)
        total_rejected += len(rejected_qs)

        # Mükerrer filtreleme
        unique_to_insert = []
        for q in valid_qs:
            k = re.sub(r"\W+", " ", (q.get("question") or "").lower()).strip()
            if k in all_existing_keys:
                total_duplicates += 1
            else:
                all_existing_keys.add(k)
                unique_to_insert.append(q)

        if unique_to_insert:
            if target_unit not in questions_by_unit:
                questions_by_unit[target_unit] = []
            questions_by_unit[target_unit].extend(unique_to_insert)

        print(f"  📄 {filename:30} -> {target_unit:35} | +{len(unique_to_insert)} soru")

    total_to_insert = sum(len(qs) for qs in questions_by_unit.values())
    print("\n" + "-" * 80)
    print(f"Özet: Parse={total_parsed}, Geçerli={total_valid}, Red={total_rejected}, Mükerrer={total_duplicates}")
    print(f"SUPABASE'E YAZILACAK TOPLAM YENİ SORU: {total_to_insert}")
    print("-" * 80)

    if total_to_insert == 0:
        print("Eklenecek yeni soru bulunamadı.")
        return

    # 3. Supabase'e ünite ünite deploy et
    deployed_counts = {}
    for unit_name, unit_qs in questions_by_unit.items():
        print(f"\n📦 [{unit_name}] ünitesine {len(unit_qs)} soru yazılıyor (Embedding + Supabase)...")
        success = shared.deploy_to_supabase(unit_qs, "Biyokimya", unit_name, quality_flag=None)
        if not success:
            print(f"❌ HATA: [{unit_name}] aktarımı başarısız oldu!")
            sys.exit(1)
        deployed_counts[unit_name] = len(unit_qs)
        time.sleep(1)

    # 4. Canlı DB Doğrulaması
    print("\n" + "=" * 80)
    print("🔍 CANLI SUPABASE DOĞRULAMASI YAPILIYOR...")
    print("=" * 80)
    final_units = shared.get_existing_units("Biyokimya")
    total_db_biyokimya = 0
    for u, count in sorted(final_units.items()):
        total_db_biyokimya += count
        added = deployed_counts.get(u, 0)
        print(f"  ✅ {u:40} : {count:3d} soru (+{added} yeni)")

    print(f"\n🎉 BİYOKİMYA TOPLAM SORU SAYISI: {total_db_biyokimya}")

if __name__ == "__main__":
    main()
