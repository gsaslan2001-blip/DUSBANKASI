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
import unicodedata
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
_CATALOG_PATH = os.path.join(_SCRIPT_DIR, "canonical_units.json")


def _resolve_unit_smart(lesson: str, requested_unit: str) -> str:
    """Kullanıcı veya dosya tarafından verilen üniteyi kanonik üniteye dönüştürür."""
    if not requested_unit or not requested_unit.strip():
        return requested_unit

    raw = requested_unit.strip()
    def fold(v):
        return "".join(
            c for c in unicodedata.normalize("NFKD", v.casefold())
            if not unicodedata.combining(c)
        )

    f_raw = fold(raw)

    # 1. Önceden onaylanmış eşleme kuralları
    mappings = {
        "Ortodonti": {
            "buyume ve gelisim": "Ünite 1 - BÜYÜME ve GELİŞİM",
            "dental yapilarin gelisimi": "Ünite 2 - DENTAL YAPILARIN GELİŞİMİ",
            "ortodontik tedavi biyolojisi": "Ünite 3 - ORTODONTİK TEDAVİNİN BİYOLOJİSİ",
            "ankraj": "Ünite 4 - ANKRAJ",
            "ortodontide teshis": "Ünite 5 - ORTODONTİK TEŞHİS",
            "maturasyon analizi": "Ünite 6 - MATURASYON ANALİZİ",
            "malokluzyonlar": "Ünite 7 - DENTAL MALOKLÜZYONLAR",
            "ortodontik tedaviler": "Ünite 8 - ORTODONTİK TEDAVİLER",
            "surme rehberligi": "Ünite 9 - SÜRME REHBERLİĞİ (GUIDANCE ERUPTION)",
            "ortodontik tedavi apareyleri": "Ünite 10 - ORTODONTİK TEDAVİ APAREYLERİ",
            "ekstraoral apareyler": "Ünite 11 - EKSTRAORAL APAREYLER",
            "ortodontik tedavi planlamasi": "Ünite 12 - ORTODONTİK TEDAVİ PLANLAMASI",
            "dudak ve damak yariklari": "Ünite 16 - DUDAK VE DAMAK YARIKLARI",
            "ortognatik cerrahi": "Ünite 17 - ORTOGNATİK CERRAHİ ILE ORTODONTİK TEDAVİ",
            "ortodontik tedavi komplikasyonlari": "Ünite 18 - ORTODONTİK TEDAVİ KOMPLİKASYONLARI",
            "ortodontik materyaller": "Ünite 19 - ORTODONTİK MATERYALLER",
            "retansiyon": "Ünite 20 - RETANSİYON – RELAPS",
        },
        "Mikrobiyoloji": {
            "temel mikrobiyoloji": "1 Temel Mikrobiyoloji",
            "genel mikrobiyoloji": "1 Temel Mikrobiyoloji",
            "immunoloji": "2 İmmunoloji",
            "bakteriyoloji": "3 Bakteriler",
            "bakteri": "3 Bakteriler",
            "viroloji": "4 virüsler",
            "virus": "4 virüsler",
            "mikoloji": "Mantarlar",
            "mantar": "Mantarlar",
            "parazitoloji": "Parazitoloji",
        },
        "Cerrahi": {
            "temel prensipler": "1 CERRAHİYE GİRİŞ",
            "dentoalveoler cerrahi": "3 DİŞ ÇEKİMİ",
            "artroskopi": "17 OROFASİYAL AĞRI TEMPOROMANDİBULER EKLEM",
            "tme cerrahisi": "17 OROFASİYAL AĞRI TEMPOROMANDİBULER EKLEM",
            "ddy": "15 DUDAK - DAMAK YARIĞI",
            "travma": "12 MAKSİLLOFASİAL TRAVMA",
            "implantoloji": "11 İMPLANT CERRAHİSİ",
            "kist tumor": "6 KİST ve TÜMÖR CERRAHİSİ",
            "sendrom": "14 KRANİOFASİAL DEFORMİTE ve SENDROMLAR",
            "anestezi": "2 ANESTEZİ",
            "gomulu disler": "4 GÖMÜLÜ DİŞLER",
            "periapikal cerrahi": "5 PERİAPİKAL CERRAHİ",
            "preprotetik cerrahi": "10 PREPROTETİK CERRAHİ",
            "enfeksiyon": "7 ENFEKSİYON",
            "ortognatik cerrahi": "13 ORTOGNATİK CERRAHİ",
            "orofasiyal agri ve temporomandibuler eklem": "17 OROFASİYAL AĞRI TEMPOROMANDİBULER EKLEM",
        },
        "Pedodonti": {
            "dental erozyon": "5. Ünite",
            "genc surekli dislerde endodontik tedaviler": "7. Ünite",
            "vital endodontik tedaviler": "7. Ünite",
            "curuk riski ve curuk aktivitesi": "8. Ünite",
            "curuk riski ve tayin yontemleri": "8. Ünite",
            "pedodontide muayene ve tedavi planlamasi": "23. Ünite",
            "cocuk dis hekimliginde muayene": "23. Ünite",
            "oral patoloji": "16 ÇOCUKLUK DÖNEMİ HASTALIKLARININ AĞIZ İÇİ BELİRTİLERİ",
            "koruyucu ve oyeliyici ortodonti": "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK",
            "koruyucu ve onleyici ortodonti": "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK",
            "koruyucu dis hekimligi": "11 ÇÜRÜK PROFİLAKSİSİNDE FLORİDLER",
            "sut dislerinde restoratif tedaviler": "28 ANTERİOR VE POSTERİOR SÜT DİŞLERİNİN RESTORASYONLARI",
            "sut dislerinde cekim": "29 SÜT DİŞLERİ ÇEKİM ENDİKASYONLARI VE KONTRENDİKASYONLARI",
            "okluzyonun gelismesi": "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK",
            "okluzal rehberlik": "13 ÇOCUKLARDA KAPANIŞ İLİŞKİLERİ ve OKLUZAL REHBERLİK",
            "sut dislerinin pulpal hastaliklari": "6 SÜT DİŞİ PULPA HASTALIKLARININ TEDAVİSİNDEKİ AMAÇ",
            "sut dislerinin ozellikleri": "24 SÜT DİŞLERİNİN MORFOLOJİK VE HİSTOLOJİK ÖZELLİKLERİ",
            "kronik/sistemik hastaliklari": "17 ÇOCUKLARDA SİSTEMİK HASTALIKLAR VE AĞIZ İÇİ BULGULARI",
            "ozel bakim gerektiren": "20 ENGELLİ ÇOCUKLARDA SINIFLAMA VE TEDAVİ YAKLAŞIMLARI",
            "enfeksiyon hastaliklarin agiz ici bulgulari": "16 ÇOCUKLUK DÖNEMİ HASTALIKLARININ AĞIZ İÇİ BELİRTİLERİ",
            "dis embrilojisi ve surmesi": "1 DİŞLERİN OLUŞUM DÖNEMLERİ",
            "dis embriyolojisi": "1 DİŞLERİN OLUŞUM DÖNEMLERİ",
            "sut ve daimi diserin olusum ve surme": "2 DİŞ SÜRME EVRELERİ",
            "sut ve surekli dislerin surmesi": "2 DİŞ SÜRME EVRELERİ",
            "dis gelisim anomalileri": "3 DİŞLERİN GELİŞİM ANOMALİLERİ",
            "sut dislerinde curuk": "4 SÜT DENTİSYONDA ÇÜRÜK",
            "sut dentisyonda curuk": "4 SÜT DENTİSYONDA ÇÜRÜK",
            "kavite prensipleri": "26 SÜT DİŞLERİNDE KAVİTE HAZIRLAMA VE BLACK PRENSİPLERİ",
            "periodontal hastaliklar": "15 ÇOCUKLARDA PERİODONSİYUM VE GİNGİVAL HASTALIKLAR",
            "travmatik dental yaralanmalar": "14 DİŞ YARALANMALARI VE TRAVMA",
            "destek doku yaralanmalari": "14 DİŞ YARALANMALARI VE TRAVMA",
            "recete yazimi": "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI VE ANTİBİYOTİKLER",
            "ilac kullanimi": "18 ÇOCUK DİŞ HEKİMLİĞİNDE İLAÇ KULLANIMI VE ANTİBİYOTİKLER",
        }
    }

    lesson_maps = mappings.get(lesson, {})
    for k, v in lesson_maps.items():
        if fold(k) in f_raw:
            return v

    catalog = _load_canonical_units()
    units = catalog.get(lesson, [])
    # 2. Exact match
    exact = next((u for u in units if fold(u) == f_raw), None)
    if exact:
        return exact

    # 3. Strip numbers and check
    u_stripped = re.sub(r"^\d+[\s\.\-]+", "", raw).strip()
    f_stripped = fold(u_stripped)
    for u in units:
        cu_stripped = fold(re.sub(r"^\d+[\s\.\-]+", "", u).strip())
        if cu_stripped and (cu_stripped in f_stripped or f_stripped in cu_stripped):
            return u

    # 4. Partial substring
    candidates = [u for u in units if f_stripped in fold(u) or fold(u) in f_stripped]
    if len(candidates) == 1:
        return candidates[0]

    return raw


def _load_canonical_units():
    with open(_CATALOG_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def _resolve_fast_unit(lesson, requested_unit):
    """Katalogdan exact veya tekil substring eşleşmesi yapar; yeni ünite açmaz."""
    def fold(value):
        return "".join(
            char for char in unicodedata.normalize("NFKD", value.casefold())
            if not unicodedata.combining(char)
        )

    catalog = _load_canonical_units()
    lesson_match = next((name for name in catalog if fold(name) == fold(lesson)), None)
    if lesson_match is None:
        raise ValueError(f"Ders katalogda yok: {lesson}. Mevcut dersler: {', '.join(catalog)}")

    units = catalog[lesson_match]
    exact = next((u for u in units if fold(u) == fold(requested_unit)), None)
    if exact:
        return lesson_match, exact

    candidates = [u for u in units if fold(requested_unit) in fold(u)]
    if len(candidates) == 1:
        print(f"   ↪ Ünite eşleştirildi: '{requested_unit}' → '{candidates[0]}'")
        return lesson_match, candidates[0]
    if len(candidates) > 1:
        raise ValueError(f"Ünite belirsiz: {requested_unit}. Adaylar: {' | '.join(candidates)}")
    raise ValueError(
        f"Ünite katalogda bulunamadı: {requested_unit}. "
        f"{lesson_match} mevcut üniteleri: {' | '.join(units)}"
    )


def _fast_format_errors(questions):
    """Hızlı modun tek kalite sınırı: parse edilebilir kanonik soru biçimi."""
    errors = []
    for index, q in enumerate(questions, 1):
        opts = q.get("options") if isinstance(q.get("options"), dict) else {}
        missing = [letter for letter in _OPTION_KEYS if not str(opts.get(letter, "")).strip()]
        answer = str(q.get("correctAnswer", "")).strip().upper()
        if not str(q.get("question", "")).strip():
            errors.append(f"{index}: soru kökü boş")
        if missing:
            errors.append(f"{index}: eksik şık: {','.join(missing)}")
        if answer not in _OPTION_KEYS:
            errors.append(f"{index}: doğru cevap A-E değil: {answer!r}")
        if not str(q.get("explanation", "")).strip():
            errors.append(f"{index}: açıklama boş")
    return errors


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

    raw_expl = str(raw.get("explanation") or raw.get("aciklama") or raw.get("açıklama") or "").strip()
    clean_expl = shared.clean_explanation_meta(raw_expl)

    return {
        "question": str(raw.get("question") or raw.get("soru") or "").strip(),
        "options": options,
        "correctAnswer": ca,
        "explanation": clean_expl,
        "lesson": (str(raw.get("lesson") or raw.get("ders") or "").strip() or None),
        "unit": (str(raw.get("unit") or raw.get("ünite") or raw.get("unite") or "").strip() or None),
        "flag_reason": (str(raw.get("flag_reason") or "").strip() or None),
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
    """Markdown / TXT soru-cevap formatını ayrıştırır.

    Desteklenen blok formatı:
        Soru N - [ÜNİTE ADI]
        **Soru Metni:** <metin> (veya Soru Metni: <metin>)

        - A) ...
        - B) ...
        ...
        **Doğru Cevap:** A (veya Doğru Cevap: A)
        **Soru Açıklaması:** <açıklama> (veya Soru Açıklaması: <açıklama>)
        ---
    """
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Soru bloklarını ayır (--- veya Soru \d+ ile başlama)
    sections = re.split(r"\n---+|\n(?=(?:###\s*)?Soru\s+\d+[\s:.\-–—]+)", content)
    questions = []
    for section in sections:
        sec_clean = section.strip()
        if not sec_clean:
            continue
        
        # Soru kökü var mı kontrol et
        has_stem = bool(re.search(r"(?:\*\*Soru Metni:\*\*|\*\*Soru Metni\*\*|Soru Metni)", sec_clean, re.IGNORECASE))
        if not has_stem:
            continue

        # Başlıktan üniteyi çıkar (Ör: Soru 1 - MALOKLÜZYONLAR)
        u_match = re.search(r"^(?:###\s*)?Soru\s+\d+[\s:.\-–—]+([^\r\n]*)", sec_clean, re.IGNORECASE)
        unit_label = None
        if u_match:
            u_cand = u_match.group(1).replace("**", "").strip()
            # Eğer başlık sadece 'Soru Metni' ile bitiyorsa veya boşsa None
            if u_cand and not re.match(r"^Soru\s+Metni", u_cand, re.IGNORECASE):
                unit_label = u_cand

        q_match = re.search(r"(?:\*\*Soru Metni:\*\*|\*\*Soru Metni\*\*|Soru Metni:?)\s*(.*?)(?=\n\s*[-*]?\s*A[).]\s)", sec_clean, re.DOTALL | re.IGNORECASE)
        question_text = q_match.group(1).strip() if q_match else ""

        options = {}
        opt_split = re.split(r"(?:\*\*Doğru Cevap:\*\*|\*\*Doğru Cevap\*\*|Doğru Cevap:?)", sec_clean, maxsplit=1, flags=re.IGNORECASE)
        option_section = opt_split[0]
        for opt_char, opt_text in re.findall(r"^\s*[-*]?\s*([A-E])[\)\.]\s*(.+)$", option_section, re.MULTILINE):
            options[opt_char] = opt_text.strip()

        ca_match = re.search(r"(?:\*\*Doğru Cevap:\*\*|\*\*Doğru Cevap\*\*|Doğru Cevap:?)\s*([A-E])", sec_clean, re.IGNORECASE)
        correct_answer = ca_match.group(1) if ca_match else ""

        expl_match = re.search(r"(?:\*\*Soru Açıklaması:\*\*|\*\*Soru Açıklaması\*\*|Soru Açıklaması:?)\s*(.*?)(?=\n---|\Z)", sec_clean, re.DOTALL | re.IGNORECASE)
        if not expl_match and ca_match:
            expl_match = re.search(r"(?:\*\*Soru Metni:\*\*|Soru Metni:?)\s*(.*?)(?=\n---|\Z)", sec_clean[ca_match.end():], re.DOTALL | re.IGNORECASE)
        explanation = expl_match.group(1).strip() if expl_match else ""

        questions.append(
            _normalize_one(
                {
                    "question": question_text,
                    "options": options,
                    "correctAnswer": correct_answer,
                    "explanation": explanation,
                    "unit": unit_label,
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
        # Aynı NotebookLM çıktısında birden fazla sorular_json batch'i olabilir.
        # Tek bir extract_json çağrısı yalnızca ilk diziyi alacağından tüm
        # işaretli batch'leri birleştir.
        batch_blocks = re.findall(
            r"<questions_json>\s*(.*?)\s*</questions_json>",
            content,
            re.DOTALL | re.IGNORECASE,
        )
        if batch_blocks:
            all_items = []
            for block in batch_blocks:
                batch = shared.extract_json(block)
                if isinstance(batch, list):
                    all_items.extend(item for item in batch if isinstance(item, dict))
            if all_items:
                return [_normalize_one(item) for item in all_items]
        # Eğer dosya içinde <questions... etiketi veya JSON array varsa öncelikle extract_json dene
        recovered = shared.extract_json(content)
        if recovered:
            return [_normalize_one(item) for item in recovered if isinstance(item, dict)]
        return _load_md(path)
    raise ValueError(f"Desteklenmeyen dosya türü: {ext} (JSON / CSV / MD / TXT bekleniyor)")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Dosyadan toplu soru ekleme (ajan-bağımsız). JSON / CSV / Markdown / TXT destekler."
    )
    parser.add_argument("dosya", nargs="?", help="Soru dosyası yolu (.json / .csv / .md / .txt)")
    parser.add_argument("--lesson", help="Ders adı (verilirse dosyadaki değeri ezer)")
    parser.add_argument("--unit", help="Ünite adı (verilirse dosyadaki değeri ezer)")
    parser.add_argument("--deneme", action="store_true", help="Soruları ünitesiz Denemeler havuzuna ekle")
    parser.add_argument("--cikmis", action="store_true", help="Çıkmış soruları yalnızca biçimsel doğrulamayla ve çift embedding ile ekle")
    parser.add_argument("--include-rejected", action="store_true", help="Kullanıcının açıkça istediği sorular için kalite elemesini atla; biçim ve embedding zorunludur")
    parser.add_argument("--dry-run", action="store_true", help="Yalnız doğrula + rapor; Supabase'e yazma")
    parser.add_argument("--audit", action="store_true", help="Bitince smart_audit_pipeline.py --lesson çalıştır")
    parser.add_argument("--high-yield", action="store_true", help="Soruları high_yield bayrağıyla ekle (Ölüm maçından kaçınır)")
    parser.add_argument("--quality-flag", help="Sorulara eklenecek özel kalite etiketi (örn. high_quality, high_yield)")
    parser.add_argument("--force-new-unit", action="store_true", help="Eğer ünite bulunamazsa sormadan yeni ünite olarak oluştur")
    parser.add_argument("--skip-existing", action="store_true", help="Aynı ders/ünitede soru kökü zaten varsa yeniden ekleme")
    parser.add_argument("--fast", action="store_true", help="Yalnızca JSON/soru/şık/doğru cevap biçimini doğrula; embedding ve kalite filtresi yapma")
    parser.add_argument("--list-units", action="store_true", help="Kayıtlı ders ve ünite kataloğunu yazdır")
    args = parser.parse_args()

    if args.cikmis:
        if args.deneme or args.include_rejected or args.fast or args.audit or args.skip_existing or args.quality_flag or args.high_yield:
            parser.error("--cikmis diğer özel aktarım, audit ve kalite seçenekleriyle birlikte kullanılamaz")
        if not args.lesson or not args.unit or args.unit not in _load_canonical_units().get(args.lesson, []):
            parser.error("--cikmis için kanonik --lesson ve --unit gereklidir")

    if args.include_rejected and (args.skip_existing or args.fast or args.audit or args.quality_flag or args.high_yield):
        parser.error("--include-rejected; --skip-existing, --fast, --audit veya kalite bayrağıyla kullanılamaz")

    if args.include_rejected and not args.deneme:
        if not args.lesson or not args.unit or args.unit not in _load_canonical_units().get(args.lesson, []):
            parser.error("--include-rejected için kanonik --lesson ve --unit gereklidir")

    if args.deneme:
        if not args.lesson or args.unit or args.fast or args.audit or args.quality_flag or args.high_yield:
            parser.error("--deneme için --lesson zorunludur; ünite, hızlı mod, audit veya kalite bayrağı kullanılamaz")
        if args.lesson not in _load_canonical_units() and args.lesson != "Farmakoloji":
            parser.error("--deneme için kanonik bir ders adı gereklidir")
        args.unit = "Deneme"
        args.force_new_unit = True

    if args.list_units:
        catalog = _load_canonical_units()
        for lesson, units in catalog.items():
            print(f"\n{lesson} ({len(units)} ünite)")
            for unit in units:
                print(f"  - {unit}")
        return 0

    if not args.dosya:
        parser.error("dosya yolu gerekli (veya yalnızca katalog için --list-units kullanın)")

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

    # lesson/unit doldur: CLI bayrağı (varsa) > satır değeri
    for q in questions:
        if args.lesson:
            q["lesson"] = args.lesson
        if args.unit:
            q["unit"] = args.unit
        elif q.get("unit") and q.get("lesson"):
            q["unit"] = _resolve_unit_smart(q["lesson"], q["unit"])

    if args.fast:
        if not args.lesson or not args.unit:
            print("❌ --fast için --lesson ve --unit zorunludur; yeni ünite oluşturulmaz.")
            return 1
        try:
            resolved_lesson, resolved_unit = _resolve_fast_unit(args.lesson, args.unit)
        except ValueError as e:
            print(f"❌ {e}")
            return 1
        for q in questions:
            q["lesson"] = resolved_lesson
            q["unit"] = resolved_unit

    missing = [i for i, q in enumerate(questions) if not q.get("lesson") or not q.get("unit")]
    if missing:
        print(
            f"❌ {len(missing)} soruda ders/ünite eksik. Dosyaya ekle ya da --lesson/--unit ver.\n"
            f"   İlk eksik indeks: {missing[0]}"
        )
        return 1

    if args.include_rejected or args.cikmis:
        format_errors = _fast_format_errors(questions)
        if format_errors:
            for error in format_errors:
                print(f"❌ {error}")
            return 1
        print(f"📦 {len(questions)} soru biçimsel olarak doğrulandı; kalite elemesi atlanacak.")
        if args.dry_run:
            print("   🔎 DRY-RUN: Supabase'e yazma yapılmadı.")
            return 0
        checkpoint = shared.save_checkpoint(questions, args.lesson, args.unit)
        if not shared._write_to_supabase(questions, args.lesson, args.unit, 'cikmis' if args.cikmis else None):
            print(f"❌ Aktarım tamamlanamadı. Checkpoint: {checkpoint}")
            return 1
        if checkpoint:
            shared.clear_checkpoint(checkpoint)
        return 0

    if args.skip_existing:
        existing_stems = set()
        for lesson, unit in set((q["lesson"], q["unit"]) for q in questions):
            existing = shared.get_questions_for_unit(lesson, unit)
            existing_stems.update(str(row.get("question") or "").strip() for row in existing)
        before = len(questions)
        questions = [q for q in questions if q["question"].strip() not in existing_stems]
        print(f"   ♻️ Mevcut soru kökü atlandı: {before - len(questions)}")
        if not questions:
            print("   ℹ️ Yeni soru yok — işlem sonlandırıldı.")
            return 0

    if args.fast:
        format_errors = _fast_format_errors(questions)
        if format_errors:
            print(f"❌ Hızlı format doğrulaması başarısız: {len(format_errors)} hata")
            for error in format_errors[:20]:
                print(f"   - {error}")
            return 1
        print(f"⚡ HIZLI MOD: {len(questions)} soru biçimsel olarak doğrulandı; kalite/embedding atlanıyor.")
        if args.dry_run:
            print("   🔎 DRY-RUN: Supabase'e yazma yapılmadı.")
            return 0
        ok = shared.write_fast_to_supabase(questions, resolved_lesson, resolved_unit)
        if not ok:
            return 1
        visible = shared.get_questions_for_unit(resolved_lesson, resolved_unit)
        print(f"   🔎 Canlı ünite görünürlüğü: {len(visible)} soru")
        return 0

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
        if not shared.deploy_to_supabase(accepted, lesson, unit, quality_flag):
            return 1
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
