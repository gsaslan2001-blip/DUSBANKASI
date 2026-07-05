"""
DUS Bankası — Dosyadan Toplu Soru Ekleme CLI

Bir dosyadaki (JSON / CSV / Markdown) soruları kanonik şemaya çevirir,
shared.validate_question_batch ile kalite filtresinden geçirir ve
shared.deploy_to_supabase ile (OpenAI embedding + chunked write) Supabase'e yazar.

Bu araç bir LLM ajanına ihtiyaç DUYMAZ — ham dosyayı verip çalıştırırsın.

Kullanım:
    python scripts/add_questions.py sorular.json
    python scripts/add_questions.py sorular.csv --lesson Fizyoloji --unit "Kalp Fizyolojisi"
    python scripts/add_questions.py sorular.md  --lesson Fizyoloji --unit "Kalp" --dry-run
    python scripts/add_questions.py sorular.json --audit
    python scripts/add_questions.py sorular.json --lesson Fizyoloji --unit "Kalp" --high-yield
    python scripts/add_questions.py sorular.txt --lesson Radyoloji --unit "Ünite 38" --quality-flag high_yield

Kanonik soru şeması (.agent/workflows/soru_ekle.md ile birebir):
    {
      "question": "...",
      "options": {"A": "...", "B": "...", "C": "...", "D": "...", "E": "..."},
      "correctAnswer": "A",
      "explanation": "...",
      "lesson": "Fizyoloji",   # opsiyonel; --lesson ile override edilebilir
      "unit": "Kalp"           # opsiyonel; --unit ile override edilebilir
    }

JSON girdisi esnektir: düz `option_a..option_e` / `correct_answer` anahtarları
ve `{ "questions": [...] }` zarfı da kabul edilir.
"""
import argparse
import csv
import json
import os
import re
import subprocess
import sys
import difflib
from collections import defaultdict

# scripts/ klasörünü import yoluna ekle (config / shared)
_SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
if _SCRIPT_DIR not in sys.path:
    sys.path.insert(0, _SCRIPT_DIR)

import shared  # noqa: E402

if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass


_OPTION_KEYS = ("A", "B", "C", "D", "E")


def _normalize_one(raw: dict) -> dict:
    """Tek bir ham soru objesini kanonik şemaya çevirir.

    Hem `options` dict'ini hem de düz `option_a..option_e` anahtarlarını,
    hem `correctAnswer` hem `correct_answer` varyantlarını kabul eder.
    """
    # ── Şıklar ──
    options = {}
    raw_opts = raw.get("options")
    if isinstance(raw_opts, dict):
        for k in _OPTION_KEYS:
            v = raw_opts.get(k) or raw_opts.get(k.lower())
            if v is not None:
                options[k] = str(v).strip()
    else:
        for k in _OPTION_KEYS:
            v = raw.get(f"option_{k.lower()}")
            if v is None:
                v = raw.get(k) or raw.get(k.lower())
            if v is not None:
                options[k] = str(v).strip()

    # ── Doğru cevap ──
    ca = raw.get("correctAnswer") or raw.get("correct_answer") or ""
    ca = str(ca).strip().upper()

    return {
        "question": str(raw.get("question") or raw.get("soru") or "").strip(),
        "options": options,
        "correctAnswer": ca,
        "explanation": str(raw.get("explanation") or raw.get("aciklama") or raw.get("açıklama") or "").strip(),
        "lesson": (str(raw.get("lesson") or raw.get("ders") or "").strip() or None),
        "unit": (str(raw.get("unit") or raw.get("ünite") or raw.get("unite") or "").strip() or None),
    }


def _load_json(path: str) -> list:
    with open(path, "r", encoding="utf-8") as f:
        text = f.read()
    try:
        data = json.loads(text)
    except json.JSONDecodeError:
        # Ham NotebookLM çıktısı olabilir: <analiz>...</analiz> + ```json fence.
        # extract_json bu sarmalayıcıları soyar ve truncated JSON'u onarır.
        data = shared.extract_json(text)
    if isinstance(data, dict):
        data = data.get("questions", data.get("items", []))
    if not isinstance(data, list):
        raise ValueError("JSON kök öğesi bir liste ya da {questions:[...]} zarfı olmalı.")
    return [_normalize_one(item) for item in data if isinstance(item, dict)]


def _load_csv(path: str) -> list:
    rows = []
    with open(path, "r", encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        for r in reader:
            rows.append(_normalize_one({(k or "").strip(): v for k, v in r.items()}))
    return rows


def _load_md(path: str) -> list:
    """Markdown soru-cevap formatını ayrıştırır.

    Beklenen blok formatı (manual_upload_md mantığının sağlamlaştırılmış hâli):
        ### Soru N
        **Soru Metni:**
        <metin>

        - A) ...
        - B) ...
        ...
        **Doğru Cevap:** A
        **Soru Açıklaması:**
        <açıklama>
        ---
    """
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    sections = re.split(r"\n---+|\n###\s*Soru\s*\d+", content)
    questions = []
    for section in sections:
        if not section.strip() or "**Soru Metni:**" not in section:
            continue

        q_match = re.search(r"\*\*Soru Metni:\*\*\s*\n(.*?)\n\s*\n", section, re.DOTALL)
        question_text = q_match.group(1).strip() if q_match else ""

        options = {}
        for opt_char, opt_text in re.findall(r"^\s*[-*]?\s*([A-E])[\)\.]\s*(.+)$", section, re.MULTILINE):
            options[opt_char] = opt_text.strip()

        ca_match = re.search(r"\*\*Doğru Cevap:\*\*\s*([A-E])", section)
        correct_answer = ca_match.group(1) if ca_match else ""

        expl_match = re.search(r"\*\*Soru Açıklaması:\*\*\s*\n(.*?)(?=\n---|\Z)", section, re.DOTALL)
        explanation = expl_match.group(1).strip() if expl_match else ""

        questions.append(
            _normalize_one(
                {
                    "question": question_text,
                    "options": options,
                    "correctAnswer": correct_answer,
                    "explanation": explanation,
                }
            )
        )

    # Markdown Q&A formatı bulunamadıysa, içerik ham NotebookLM JSON çıktısı
    # (<analiz> + ```json fence) olabilir — extract_json ile kurtarmayı dene.
    if not questions:
        recovered = shared.extract_json(content)
        if recovered:
            return [_normalize_one(item) for item in recovered if isinstance(item, dict)]

    return questions


def _load_dus_konu_testi_txt(path: str) -> list:
    """DUS KONU TESTİ özel txt formatını (çözümleri altta olan yapı) ayrıştırır."""
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    parts = content.split("═══ TÜM SORULARIN DETAYLI ÇÖZÜMLERİ ═══")
    top_part = parts[0]
    bottom_part = parts[1] if len(parts) > 1 else ""

    questions = {}

    q_matches = list(re.finditer(r'^(\d+)\.\s', top_part, re.MULTILINE))
    
    for i in range(len(q_matches)):
        start_idx = q_matches[i].end()
        q_num = q_matches[i].group(1)
        end_idx = q_matches[i+1].start() if i + 1 < len(q_matches) else len(top_part)
        
        block = top_part[start_idx:end_idx].strip()
        
        opt_start = re.search(r'(?:^|\s)A\)\s', block)
        if opt_start:
            q_text = block[:opt_start.start()].strip()
            options_text = block[opt_start.start():].strip()
            
            opts = {}
            opt_matches = list(re.finditer(r'(?:^|\s)([A-E])\)\s', options_text))
            for j in range(len(opt_matches)):
                o_letter = opt_matches[j].group(1)
                o_start = opt_matches[j].end()
                o_end = opt_matches[j+1].start() if j + 1 < len(opt_matches) else len(options_text)
                
                opt_str = options_text[o_start:o_end].strip()
                cleanup_match = re.search(r'═══', opt_str)
                if cleanup_match:
                    opt_str = opt_str[:cleanup_match.start()].strip()
                    
                opts[o_letter] = opt_str
            
            questions[q_num] = {
                "question": q_text,
                "options": opts
            }

    ans_blocks = re.split(r'▸ (?:\*\*)?Soru (\d+)', bottom_part)
    for i in range(1, len(ans_blocks), 2):
        q_num = ans_blocks[i]
        block = ans_blocks[i+1]
        
        c_match = re.search(r'Doğru:\s*(?:\*\*)?([A-E])(?:\*\*)?', block)
        c_ans = c_match.group(1) if c_match else ""
        
        n_match = re.search(r'Neden [A-E]:\s*(.*?)(?=\nAnahtar:|\Z)', block, re.DOTALL)
        explanation = n_match.group(1).strip() if n_match else ""
        
        if q_num in questions:
            questions[q_num]["correctAnswer"] = c_ans
            questions[q_num]["explanation"] = explanation

    output = []
    for q_num, q_data in sorted(questions.items(), key=lambda x: int(x[0])):
        output.append(_normalize_one(q_data))

    return output


def load_questions(path: str) -> list:
    ext = os.path.splitext(path)[1].lower()
    if ext == ".json":
        return _load_json(path)
    if ext == ".csv":
        return _load_csv(path)
    if ext in (".md", ".markdown", ".txt"):
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        if "TÜM SORULARIN DETAYLI ÇÖZÜMLERİ" in content:
            return _load_dus_konu_testi_txt(path)
        return _load_md(path)
    raise ValueError(f"Desteklenmeyen dosya türü: {ext} (JSON / CSV / MD / TXT bekleniyor)")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Dosyadan toplu soru ekleme (ajan-bağımsız). JSON / CSV / Markdown / TXT destekler."
    )
    parser.add_argument("dosya", help="Soru dosyası yolu (.json / .csv / .md / .txt)")
    parser.add_argument("--lesson", help="Ders adı (dosyada yoksa varsayılan olarak uygulanır)")
    parser.add_argument("--unit", help="Ünite adı (dosyada yoksa varsayılan olarak uygulanır)")
    parser.add_argument("--dry-run", action="store_true", help="Yalnız doğrula + rapor; Supabase'e yazma")
    parser.add_argument("--audit", action="store_true", help="Bitince smart_audit_pipeline.py --lesson çalıştır")
    parser.add_argument("--high-yield", action="store_true", help="Soruları high_yield bayrağıyla ekle (Ölüm maçından kaçınır)")
    parser.add_argument("--quality-flag", help="Sorulara eklenecek özel kalite etiketi (örn. high_quality, high_yield)")
    parser.add_argument("--force-new-unit", action="store_true", help="Eğer ünite bulunamazsa sormadan yeni ünite olarak oluştur")
    args = parser.parse_args()

    if not os.path.exists(args.dosya):
        print(f"❌ Dosya bulunamadı: {args.dosya}")
        return 1

    try:
        questions = load_questions(args.dosya)
    except Exception as e:
        print(f"❌ Dosya ayrıştırılamadı: {e}")
        return 1

    if not questions:
        print("⚠️ Dosyada soru bulunamadı.")
        return 1

    # lesson/unit doldur: satır değeri > CLI bayrağı
    for q in questions:
        if not q.get("lesson"):
            q["lesson"] = args.lesson
        if not q.get("unit"):
            q["unit"] = args.unit

    missing = [i for i, q in enumerate(questions) if not q.get("lesson") or not q.get("unit")]
    if missing:
        print(
            f"❌ {len(missing)} soruda ders/ünite eksik. Dosyaya ekle ya da --lesson/--unit ver.\n"
            f"   İlk eksik indeks: {missing[0]}"
        )
        return 1

    # (lesson, unit) bazında grupla — deploy_to_supabase tek ders/ünite alır
    groups = defaultdict(list)
    for q in questions:
        groups[(q["lesson"], q["unit"])].append(q)

    # ── YENİ: Ünite Adı Doğrulama ve Güvenlik Kilidi ──
    if not args.force_new_unit and not args.dry_run:
        lessons_needed = list(set(lesson for lesson, _ in groups.keys()))
        for lesson in lessons_needed:
            existing_units = shared.get_existing_units(lesson)
            existing_unit_names = list(existing_units.keys())
            
            for unit in set(u for l, u in groups.keys() if l == lesson):
                if unit not in existing_unit_names:
                    close_matches = difflib.get_close_matches(unit, existing_unit_names, n=3, cutoff=0.3)
                    print(f"\n❌ HATA: '{lesson}' dersinde '{unit}' adında bir ünite bulunamadı.")
                    if close_matches:
                        print("Bunu mu demek istediniz?")
                        for m in close_matches:
                            print(f"   - {m}")
                    else:
                        print(f"Mevcut ünitelerden hiçbiriyle eşleşmedi.")
                    print("\nLütfen doğru ünite adını girerek komutu tekrar çalıştırın.")
                    print("Eğer GERÇEKTEN yepyeni bir ünite oluşturmak istiyorsanız, komuta '--force-new-unit' bayrağını ekleyin.")
                    return 1

    print(f"📦 {len(questions)} soru, {len(groups)} ders/ünite grubu yüklendi: {os.path.basename(args.dosya)}")

    total_accepted = 0
    total_rejected = 0
    units_touched = set()

    for (lesson, unit), group in groups.items():
        print(f"\n── {lesson} / {unit}  ({len(group)} soru) ──")
        accepted, rejected = shared.validate_question_batch(group, lesson, unit)
        total_accepted += len(accepted)
        total_rejected += len(rejected)

        if args.dry_run:
            print(f"   🔎 DRY-RUN: {len(accepted)} kabul, {len(rejected)} ret (yazma yapılmadı).")
            continue

        if not accepted:
            print("   ⚠️ Kabul edilen soru yok — bu grup atlandı.")
            continue

        # deploy_to_supabase kendi içinde tekrar validate eder; checkpoint + embedding + chunked write yapar
        quality_flag = args.quality_flag if args.quality_flag else ("high_yield" if args.high_yield else None)
        shared.deploy_to_supabase(accepted, lesson, unit, quality_flag)
        units_touched.add((lesson, unit))

    print(
        f"\n══ ÖZET ══\n"
        f"   Toplam: {len(questions)} | Kabul: {total_accepted} | Ret: {total_rejected}"
        + ("  (DRY-RUN — hiçbir şey yazılmadı)" if args.dry_run else "")
    )

    if args.audit and not args.dry_run:
        audit_script = os.path.join(_SCRIPT_DIR, "tools", "smart_audit_pipeline.py")
        for lesson, unit in sorted(units_touched):
            print(f"\n⚔️  Ölüm Maçı (dry-run önizleme): {lesson} / {unit}")
            subprocess.run([sys.executable, audit_script, "--lesson", lesson, "--unit", unit, "--dry-run"])
        print("   ℹ️ Flag uygulamak için: python scripts/tools/smart_audit_pipeline.py --lesson <DERS> --unit <ÜNİTE>")

    return 0


if __name__ == "__main__":
    sys.exit(main())
