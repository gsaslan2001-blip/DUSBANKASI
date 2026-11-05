"""
DUS Bankası — Biyokimya Çıkmış Soruları İthalat ve JSON Dönüştürme Scripti

Kaynak: C:\\Users\\FURKAN\\Desktop\\DUS\\Biyokimya\\çıkmış md
Hedef 1: C:\\Users\\FURKAN\\Desktop\\DUS\\Biyokimya\\çıkmış json
Hedef 2: scripts/data/cikmis_biyokimya
Hedef DB: Supabase (quality_flag = 'cikmis', lesson = 'Biyokimya')
"""
import os
import glob
import re
import json
import sys
import time
import urllib.request
import urllib.parse

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass

# scripts klasörünü sys.path'e ekle
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import config
import shared

SOURCE_DIR = r"C:\Users\FURKAN\Desktop\DUS\Biyokimya\çıkmış md"
TARGET_JSON_DIR = r"C:\Users\FURKAN\Desktop\DUS\Biyokimya\çıkmış json"
PROJECT_DATA_DIR = os.path.join(_SCRIPT_DIR, "data", "cikmis_biyokimya")

FILE_ORDER_AND_UNITS = [
    ("09-bolum_1_karbonhidratlar_soru_bankasi_v2.md", "BÖLÜM 1 - KARBONHİDRATLAR", "01_Biyokimya_BOLUM_1_KARBONHIDRATLAR.json"),
    ("08-bolum_2_lipitler_soru_bankasi.md", "BÖLÜM 2 LİPİDLER", "02_Biyokimya_BOLUM_2_LIPIDLER.json"),
    ("07-bolum_4_aminoasitler_soru_bankasi.md", "BÖLÜM 4 - AMİNOASİTLER", "04_Biyokimya_BOLUM_4_AMINOASITLER.json"),
    ("06-bolum_5_proteinler_soru_bankasi.md", "BÖLÜM 5 - PROTEİNLER", "05_Biyokimya_BOLUM_5_PROTEINLER.json"),
    ("05-bolum_6_enzimler_soru_bankasi.md", "6 ENZİMLER VE KLİNİK", "06_Biyokimya_6_ENZIMLER_VE_KLINIK.json"),
    ("04-bolum_7_vitaminler_soru_bankasi.md", "7 VİTAMİNLER", "07_Biyokimya_7_VITAMINLER.json"),
    ("03-bolum_8_hormonlar_soru_bankasi.md", "BÖLÜM 8 - HORMONLAR", "08_Biyokimya_BOLUM_8_HORMONLAR.json"),
    ("02-bolum_9_hucre_ve_organeller_soru_bankasi.md", "BÖLÜM 9 - HÜCRE VE ORGANELLER", "09_Biyokimya_BOLUM_9_HUCRE_VE_ORGANELLER.json"),
    ("01-bolum_10_nukleik_asitler_ve_genetik_soru_bankasi.md", "BÖLÜM 10 - GENETİK Nükleotidler ve Genom", "10_Biyokimya_BOLUM_10_GENETIK.json"),
]

def parse_markdown_file(filepath, unit_name):
    filename = os.path.basename(filepath)
    with open(filepath, "r", encoding="utf-8") as f:
        text = f.read()

    pattern = r"(^#{2,4}\s*Soru\s*\d+.*?$)"
    parts = re.split(pattern, text, flags=re.MULTILINE)

    questions = []
    issues = []

    for i in range(1, len(parts), 2):
        header = parts[i].strip()
        body = parts[i+1] if i+1 < len(parts) else ""

        h_match = re.search(r"Soru\s*(\d+)(?:\s*\((.*?)\))?", header, re.IGNORECASE)
        q_num = h_match.group(1) if h_match else str((i+1)//2)
        exam_meta = h_match.group(2).strip() if (h_match and h_match.group(2)) else ""

        ca_match = re.search(
            r"(?:\*\*|__)?\s*Doğru\s*(?:Cevap|Yanıt)\s*(?:\*\*|__)?\s*:\s*(?:\*\*|__)?\s*(?:Cevap\s*)?(?:\*\*|__)?\s*([A-Ea-e])",
            body,
            re.IGNORECASE
        )
        correct_answer = ca_match.group(1).upper() if ca_match else ""

        expl_match = re.search(
            r"(?:\*\*|__)?\s*(?:Detaylı\s*)?Açıklama\s*(?:\*\*|__)?\s*:\s*\n?(.*?)(?=\n---\s*|\Z)",
            body,
            re.DOTALL | re.IGNORECASE
        )
        explanation = expl_match.group(1).strip() if expl_match else ""

        opt_a_match = re.search(
            r"(?:^|\n)\s*(?:[-*]\s*)?(?:\*\*|__)?\s*A\s*[\)\.](?:\*\*|__)?\s*",
            body
        )

        if not opt_a_match:
            issues.append(f"Soru {q_num}: 'A)' şıkkı bulunamadı!")
            continue

        stem_raw = body[:opt_a_match.start()].strip()
        stem_clean = re.sub(r"(?:\*\*|__)?Soru(?:\*\*|__)?\s*:\s*", "", stem_raw, flags=re.IGNORECASE).strip()
        
        if stem_clean.startswith("**") and stem_clean.endswith("**") and len(stem_clean) > 4:
            stem_clean = stem_clean[2:-2].strip()

        if not exam_meta:
            meta_match = re.search(r"\(((?:19|20)\d\d.*?)\)\s*$", stem_clean)
            if meta_match:
                exam_meta = meta_match.group(1).strip()
                stem_clean = stem_clean[:meta_match.start()].strip()

        if ca_match:
            opts_text = body[opt_a_match.start():ca_match.start()]
        elif expl_match:
            opts_text = body[opt_a_match.start():expl_match.start()]
        else:
            opts_text = body[opt_a_match.start():]

        opt_pattern = r"(?:^|\n)\s*(?:[-*]\s*)?(?:\*\*|__)?\s*([A-E])\s*[\)\.](?:\*\*|__)?\s*(.*?)(?=(?:\n\s*(?:[-*]\s*)?(?:\*\*|__)?\s*[A-E]\s*[\)\.])|\Z)"
        opt_matches = list(re.finditer(opt_pattern, opts_text, re.DOTALL))

        options = {}
        for m in opt_matches:
            letter = m.group(1).upper()
            val = m.group(2).strip()
            val = re.sub(r"\s+", " ", val).strip()
            if val.endswith("**") and not val.startswith("**"):
                val = val[:-2].strip()
            options[letter] = val

        # Validasyon
        missing_opts = [l for l in ["A", "B", "C", "D", "E"] if not options.get(l)]
        if missing_opts:
            issues.append(f"Soru {q_num}: Eksik şıklar: {missing_opts}")
        if not correct_answer:
            issues.append(f"Soru {q_num}: Doğru cevap bulunamadı!")
        if not stem_clean:
            issues.append(f"Soru {q_num}: Soru kökü boş!")
        if not explanation:
            issues.append(f"Soru {q_num}: Açıklama boş!")

        q_dict = {
            "question": stem_clean,
            "options": options,
            "correctAnswer": correct_answer,
            "explanation": explanation,
            "lesson": "Biyokimya",
            "unit": unit_name,
            "quality_flag": "cikmis",
            "flag_reason": exam_meta if exam_meta else None
        }
        questions.append(q_dict)

    return questions, issues

def deploy_unit_to_supabase(questions, lesson_name, unit_name):
    """Biyokimya çıkmış sorularını embedding ile Supabase'e yazar."""
    url = f"{config.SUPABASE_URL}/rest/v1/questions"
    headers = {
        "apikey": config.SUPABASE_KEY,
        "Authorization": f"Bearer {config.SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }

    # 1. Embedding oluşturma (1536d text-embedding-3-large)
    stem_texts = [q.get('question', '') or " " for q in questions]
    expl_texts = [q.get('explanation', '') or " " for q in questions]

    stem_embeddings = []
    expl_embeddings = []

    if shared.openai_client and stem_texts:
        print(f"   🧠 OpenAI Embedding alınıyor ({len(stem_texts)} soru)...")
        for chunk_idx in range(0, len(stem_texts), 50):
            c_stem = stem_texts[chunk_idx:chunk_idx+50]
            c_expl = expl_texts[chunk_idx:chunk_idx+50]

            try:
                r_stem = shared.openai_client.embeddings.create(
                    model="text-embedding-3-large", input=c_stem, dimensions=1536
                )
                stem_embeddings.extend([item.embedding for item in r_stem.data])

                r_expl = shared.openai_client.embeddings.create(
                    model="text-embedding-3-large", input=c_expl, dimensions=1536
                )
                expl_embeddings.extend([item.embedding for item in r_expl.data])

                if chunk_idx + 50 < len(stem_texts):
                    time.sleep(0.5)
            except Exception as e:
                print(f"   ⚠️ Embedding hatası: {e}")

    # 2. Satırları oluştur
    rows = []
    for i, q in enumerate(questions):
        opts = q.get("options", {})
        row = {
            "lesson": lesson_name,
            "unit": unit_name,
            "question": q.get("question", ""),
            "option_a": opts.get("A", ""),
            "option_b": opts.get("B", ""),
            "option_c": opts.get("C", ""),
            "option_d": opts.get("D", ""),
            "option_e": opts.get("E", ""),
            "correct_answer": q.get("correctAnswer", ""),
            "explanation": q.get("explanation", ""),
            "quality_flag": "cikmis",
            "flag_reason": q.get("flag_reason")
        }
        if stem_embeddings and i < len(stem_embeddings):
            row["stem_embedding"] = stem_embeddings[i]
        if expl_embeddings and i < len(expl_embeddings):
            row["explanation_embedding"] = expl_embeddings[i]
        rows.append(row)

    # 3. 10'arlı chunk'lar halinde Supabase'e yaz
    chunk_size = 10
    total_written = 0
    for chunk_start in range(0, len(rows), chunk_size):
        chunk = rows[chunk_start:chunk_start + chunk_size]
        payload = json.dumps(chunk, ensure_ascii=False).encode("utf-8")
        
        req = urllib.request.Request(url, data=payload, headers=headers, method="POST")
        success = False
        for attempt in range(4):
            try:
                with urllib.request.urlopen(req, timeout=30) as resp:
                    if resp.status in (200, 201):
                        total_written += len(chunk)
                        success = True
                        break
            except Exception as e:
                time.sleep(2 * (attempt + 1))
        
        if not success:
            print(f"   ❌ Chunk yazma başarısız: {chunk_start} - {chunk_start + len(chunk)}")
            return False

    print(f"   💾 {total_written}/{len(questions)} soru Supabase'e başarıyla yazıldı.")
    return True

def main():
    os.makedirs(TARGET_JSON_DIR, exist_ok=True)
    os.makedirs(PROJECT_DATA_DIR, exist_ok=True)

    all_questions = []
    unit_stats = {}

    print("═════════════════════════════════════════════════════════")
    print(" 🚀 BİYOKİMYA ÇIKMIŞ SORULARI JSON DÖNÜŞTÜRME & AKTARIM")
    print("═════════════════════════════════════════════════════════\n")

    # 1. Aşama: Dosyaları oku, parse et ve doğrula
    parsed_units_data = []
    for md_file, unit_name, json_name in FILE_ORDER_AND_UNITS:
        filepath = os.path.join(SOURCE_DIR, md_file)
        if not os.path.exists(filepath):
            print(f"❌ Dosya bulunamadı: {filepath}")
            return

        qs, issues = parse_markdown_file(filepath, unit_name)
        if issues:
            print(f"❌ '{md_file}' dosyasında {len(issues)} sorun tespit edildi!")
            for iss in issues:
                print(f"   - {iss}")
            print("İşlem durduruldu. Lütfen format sorunlarını giderin.")
            return

        print(f"✅ {md_file} -> {unit_name} ({len(qs)} soru ayrıştırıldı)")
        parsed_units_data.append((unit_name, json_name, qs))
        all_questions.extend(qs)
        unit_stats[unit_name] = len(qs)

    print(f"\n📦 Toplam ayrıştırılan soru sayısı: {len(all_questions)}")

    # 2. Aşama: JSON dosyalarını kaydet
    print("\n📂 JSON dosyaları diske yazılıyor...")
    for unit_name, json_name, qs in parsed_units_data:
        # 1. Kullanıcının masaüstü çıkmış json dizinine
        user_json_path = os.path.join(TARGET_JSON_DIR, json_name)
        with open(user_json_path, "w", encoding="utf-8") as f:
            json.dump(qs, f, ensure_ascii=False, indent=2)

        # 2. Proje veri dizinine
        proj_json_path = os.path.join(PROJECT_DATA_DIR, json_name)
        with open(proj_json_path, "w", encoding="utf-8") as f:
            json.dump(qs, f, ensure_ascii=False, indent=2)

    # Tüm soruları içeren ana JSON
    with open(os.path.join(TARGET_JSON_DIR, "biyokimya_tum_cikmis_sorular.json"), "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)
    with open(os.path.join(PROJECT_DATA_DIR, "biyokimya_tum_cikmis_sorular.json"), "w", encoding="utf-8") as f:
        json.dump(all_questions, f, ensure_ascii=False, indent=2)

    print(f"✅ 9 üniteye ait JSON dosyaları ve ana özet JSON başarıyla kaydedildi:")
    print(f"   1. {TARGET_JSON_DIR}")
    print(f"   2. {PROJECT_DATA_DIR}")

    # 3. Aşama: Supabase'e aktarım
    print("\n⚡ Supabase aktarımı başlatılıyor...")
    total_deployed = 0
    for unit_name, json_name, qs in parsed_units_data:
        print(f"\n▶ Aktarılıyor: Biyokimya / {unit_name} ({len(qs)} soru)...")
        ok = deploy_unit_to_supabase(qs, "Biyokimya", unit_name)
        if not ok:
            print(f"❌ {unit_name} aktarımı sırasında hata oluştu!")
            return
        total_deployed += len(qs)

    print(f"\n🎉 TÜM İŞLEM BAŞARIYLA TAMAMLANDI!")
    print(f"   Toplam Aktarılan Soru Sayısı: {total_deployed} / {len(all_questions)}")

if __name__ == "__main__":
    main()
