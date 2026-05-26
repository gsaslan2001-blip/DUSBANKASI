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


def load_questions(path: str) -> list:
    ext = os.path.splitext(path)[1].lower()
    if ext == ".json":
        return _load_json(path)
    if ext == ".csv":
        return _load_csv(path)
    if ext in (".md", ".markdown", ".txt"):
        return _load_md(path)
    raise ValueError(f"Desteklenmeyen dosya türü: {ext} (JSON / CSV / MD bekleniyor)")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Dosyadan toplu soru ekleme (ajan-bağımsız). JSON / CSV / Markdown destekler."
    )
    parser.add_argument("dosya", help="Soru dosyası yolu (.json / .csv / .md)")
    parser.add_argument("--lesson", help="Ders adı (dosyada yoksa varsayılan olarak uygulanır)")
    parser.add_argument("--unit", help="Ünite adı (dosyada yoksa varsayılan olarak uygulanır)")
    parser.add_argument("--dry-run", action="store_true", help="Yalnız doğrula + rapor; Supabase'e yazma")
    parser.add_argument("--audit", action="store_true", help="Bitince smart_audit_pipeline.py --lesson çalıştır")
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
        shared.deploy_to_supabase(accepted, lesson, unit)
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
