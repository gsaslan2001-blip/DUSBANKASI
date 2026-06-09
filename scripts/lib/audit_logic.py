"""
audit_logic.py — Kalite Denetim İş Mantığı
Jaccard/Overlap hesapları, kural hiyerarşisi, kürasyon kararları.
Ağ veya dosya I/O içermez — saf hesaplama.
"""
import json
import os
import sys
import asyncio

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from shared import _tokenize
from config import (
    DEEPSEEK_API_KEY, DEEPSEEK_MODEL,
    AI_FILLER_PHRASES, MOJIBAKE_SIGNATURES,
)

# ─── Eşikler ──────────────────────────────────────────────────────────────────
DUPE_RATIO      = 0.50   # Açıklama benzerlik eşiği (Metinsel)
SEMANTIC_HIGH   = 0.92   # Bu eşiğin üstü → otomatik kavramsal_kopya
SEMANTIC_LOW    = 0.85   # 0.85–0.92 arası → borderline_kopya (manuel inceleme)
DIFF_STEM_RATIO = 0.03   # Bu değerin altında → soru kökleri neredeyse hiç ortak kelime taşımıyor.
                         # NOT: Yüksek semantik benzerlik + düşük lexical örtüşme = PARAFRAZ KOPYA
                         # (semantik tespitin asıl amacı). Eşik bilinçli olarak çok düşük tutuldu;
                         # yalnızca gerçekten alakasız (embedding gürültüsüyle eşleşen) çiftleri eler.

# Ölüm Maçı kalite tabanı: bu puanın altındaki sorular "düşük kalite" sayılır.
# İki soru da bu tabanın altındaysa karar verici ikisini birden eleyebilir (remove_both).
QUALITY_FLOOR = 0

import math


# ─── Temel Metrikler ──────────────────────────────────────────────────────────

def asymmetric(a: set, b: set, min_tokens: int = 10) -> float:
    """Overlap Coefficient. Kısa açıklamaları yanlış yüksek benzerlikten korur."""
    if not a or not b:
        return 0.0
    if min(len(a), len(b)) < min_tokens:
        return 0.0
    return len(a & b) / min(len(a), len(b))


def jaccard(a: set, b: set) -> float:
    if not a or not b:
        return 0.0
    return len(a & b) / len(a | b)


def cosine_similarity(v1, v2) -> float:
    """Vektörlerin string veya liste olma ihtimaline karşı dayanıklı kosinüs benzerliği."""
    if not v1 or not v2:
        return 0.0
    
    # String ise parse et
    if isinstance(v1, str): v1 = json.loads(v1)
    if isinstance(v2, str): v2 = json.loads(v2)
    
    try:
        # Float olduklarından emin ol
        v1 = [float(x) for x in v1]
        v2 = [float(x) for x in v2]
        
        dot = sum(x * y for x, y in zip(v1, v2))
        n1 = math.sqrt(sum(x * x for x in v1))
        n2 = math.sqrt(sum(x * x for x in v2))
        return dot / (n1 * n2) if n1 and n2 else 0.0
    except (ValueError, TypeError):
        return 0.0


def uniqueness_density(text: str) -> float:
    """Benzersiz token / toplam kelime. Yüksek → sıkışık, tekrarsız metin."""
    words = text.split()
    if not words:
        return 0.0
    return len(_tokenize(text)) / len(words)


def _normalize_roman(val: str) -> str:
    val = val.strip().lower()
    roman_map = {
        "i": "1", "ii": "2", "iii": "3", "iv": "4", "v": "5",
        "vi": "6", "vii": "7", "viii": "8", "ix": "9", "x": "10"
    }
    return roman_map.get(val, val)





def lexical_guard(q1_text: str, q2_text: str) -> bool:
    """
    Turkish Medical Lexical Guard.
    Eğer iki soruda da geçen evre/tip/sınıf numaraları farklıysa True döner (bloke eder).
    """
    import re
    stage_patterns = [
        r"\btip\s*([1-9]|[ivx]+)\b",
        r"\bevre\s*([1-9]|[ivx]+)\b",
        r"\bsınıf\s*([1-9]|[ivx]+)\b",
        r"\bfaz\s*([1-9]|[ivx]+)\b",
        r"\bgrade\s*([1-9]|[ivx]+)\b",
        r"\bstage\s*([1-9]|[ivx]+)\b",
        r"\bclass\s*([1-9]|[ivx]+)\b",
    ]
    q1_lower = q1_text.lower()
    q2_lower = q2_text.lower()
    for pattern in stage_patterns:
        m1 = re.findall(pattern, q1_lower)
        m2 = re.findall(pattern, q2_lower)
        if m1 and m2:
            # Her ikisinde de eşleşme var; normalize edip kıyasla
            v1 = {_normalize_roman(v) for v in m1}
            v2 = {_normalize_roman(v) for v in m2}
            if v1.isdisjoint(v2):   # Farklı numaralar → bloke et
                return True
    return False


def _correct_answer_text(q: dict) -> str:
    """Doğru şıkkın METNİNİ döndürür. Harf (A/B/C) konumsaldır ve şık
    karıştırmada değişir; bu yüzden kıyaslamada harf değil metin kullanılır."""
    ca = (q.get("correct_answer") or q.get("correctAnswer") or "").strip().lower()
    if not ca:
        return ""
    opts = q.get("options") if isinstance(q.get("options"), dict) else {}
    txt = opts.get(ca.upper()) or opts.get(ca) or q.get(f"option_{ca}") or ""
    return txt.strip()


# (answer_divergence_guard kaldırıldı; şık metin karşılaştırması ve kararı tamamen DeepSeek Ölüm Maçı'na bırakılmıştır)


# (question_orientation_guard kaldırıldı; negatif/pozitif yönelim kıyaslaması ve kararı tamamen DeepSeek Ölüm Maçı'na bırakılmıştır)


def numeric_divergence_guard(q1_text: str, q2_text: str) -> bool:
    import re
    # Sayı + birim çiftlerini çıkar: 3mm, 7.5mg, pH 6.0 vb.
    pattern = r"\b(\d+(?:[.,]\d+)?)\s*(mm|cm|mg|dl|mmhg|ph|µm|ml|hz|%)\b"
    nums1 = {(m.group(2).lower(), round(float(m.group(1).replace(',','.')), 1))
             for m in re.finditer(pattern, q1_text.lower())}
    nums2 = {(m.group(2).lower(), round(float(m.group(1).replace(',','.')), 1))
             for m in re.finditer(pattern, q2_text.lower())}
    shared_units = {u for u, _ in nums1} & {u for u, _ in nums2}
    for unit in shared_units:
        v1 = {v for u, v in nums1 if u == unit}
        v2 = {v for u, v in nums2 if u == unit}
        if v1 and v2 and v1.isdisjoint(v2):
            return True
    return False


def calc_quality_score(q: dict) -> int:
    """
    Gelişmiş Manifesto Puanlama Sistemi (Ölüm Maçı)
    - Klinik Vaka: +10
    - Pozitif Kök (hangisidir/nedir): +5
    - Negatif Kök (değildir/yanlıştır): +15
    - Klinik Tanı Derinliği (biyopsi, BT, radyografi vb.): +10
    - Klinik Tahlil/Laboratuvar Derinliği (mg/dl, pH, tahlil vb.): +10
    - Açıklama Derinliği (stop-words hariç > 20 kelime): +10
    - Çok Kısa Açıklama (<8 kelime): -15
    - Kısa Soru Kökü (<10 kelime): -5
    - AI Motivasyonel / Dolgu Cümle Cezası (Tebrikler, bu önemli, unutulmamalıdır vb.): -30
    - Bozuk Karakter: -50
    """
    score = 0
    text = q.get("question", "").lower()
    expl = q.get("explanation", "").lower()
    words = len(text.split())

    # 1. Klinik Vaka Kontrolü
    klinik_keywords = {"hasta", "yaş", "vaka", "kliniğe", "başvur", "muayene", "bulgu", "lezyon", "radyograf", "semptom", "tedavi", "tanı"}
    if any(k in text for k in klinik_keywords):
        score += 10

    # 2. Soru Kökü Analizi
    if "hangisidir" in text or "nedir" in text:
        score += 5
    
    negative_keywords = {"değildir", "yanlıştır", "yoktur", "bulunmaz", "hariç", "olmaz"}
    if any(k in text for k in negative_keywords):
        score += 15 # DUS tarzı olduğu için artı puan

    # 3. Klinik Tanı Yöntemleri Derinliği
    tani_keywords = {"radyografi", "mr", "biyopsi", "histopatolojik", "bt", "tomografi", "radyolojik", "ultrason", "panoramik", "periapikal"}
    if any(k in text or k in expl for k in tani_keywords):
        score += 10

    # 4. Klinik Tahlil ve Laboratuvar Derinliği
    lab_keywords = {"mg/dl", "mleq", "tahlil", "laboratuvar", "seviye", "konsantrasyon", "mmhg", "ph"}
    if any(k in text or k in expl for k in lab_keywords):
        score += 10

    # 5. Açıklama Kalitesi ve Derinliği
    clean_expl = expl
    for phrase in AI_FILLER_PHRASES:
        clean_expl = clean_expl.replace(phrase, "")

    try:
        expl_tokens = _tokenize(clean_expl)
        if len(expl_tokens) > 20:
            score += 10
        elif len(expl_tokens) < 8:
            score -= 15
    except Exception:
        expl_words = len(clean_expl.split())
        if expl_words > 30:
            score += 10
        elif expl_words < 12:
            score -= 15

    # 6. Uzunluk
    if words < 10:
        score -= 5
    elif 15 <= words <= 45:
        score += 2

    # 7. AI Motivasyonel Cümle / Boş Dolgu Cezası (AGENTS.md Kurallarına Göre)
    if any(phrase in expl for phrase in AI_FILLER_PHRASES):
        score -= 30

    # 8. Karakter Sağlığı — yalnızca GERÇEK mojibake/bozuk kodlama cezalandırılır.
    #    ⚠️ "periodontal", "dişeti" gibi geçerli tıbbi terimler ASLA ceza almaz
    #    (eski sürümdeki r"periodontal" deseni her perio sorusunu haksızca eliyordu).
    raw_blob = (q.get("question", "") or "") + " " + (q.get("explanation", "") or "")
    if any(sig in raw_blob for sig in MOJIBAKE_SIGNATURES):
        score -= 50

    return score


VALID_VERDICTS = ("keep_1", "keep_2", "keep_both", "remove_both")


def _format_question_block(q: dict, idx: int) -> str:
    """Ölüm Maçı karar vericisine yalnızca DEĞERLENDİRİLECEK üçlü gönderilir:
    soru kökü + DOĞRU şık + açıklama.

    Çeldirici (yanlış) şıklar bilinçli olarak dahil EDİLMEZ: amacımız sorgulanmış
    bilginin tekrar sorgulanmasını engellemektir. Aynı çeldiricinin birden çok
    soruda görünmesi bilgi tekrarı sayılmaz ve kararı gereksiz yere etkilerdi."""
    ca = q.get("correct_answer") or q.get("correctAnswer") or "?"
    opts = q.get("options") if isinstance(q.get("options"), dict) else {}
    correct_text = (opts.get(ca) or q.get(f"option_{str(ca).lower()}") or "").strip()

    return (
        f"=== SORU {idx} ===\n"
        f"Soru Kökü: {q.get('question', '').strip()}\n"
        f"Doğru Şık ({ca}): {correct_text}\n"
        f"Açıklama: {q.get('explanation', '').strip()}\n"
    )


def _local_verdict(q1: dict, q2: dict, note: str = "") -> dict:
    """DeepSeek erişilemediğinde çalışan yapılandırılmış yerel karar motoru.
    Yalnızca 'kazanan' değil; ikisini de koru / ikisini de ele kararlarını da üretir."""
    s1 = calc_quality_score(q1)
    s2 = calc_quality_score(q2)
    prefix = f"Yerel Puanlama{(' — ' + note) if note else ''}"

    # İki soru da kalite tabanının altındaysa, kopyayı korumak yerine ikisini birden ele.
    if s1 < QUALITY_FLOOR and s2 < QUALITY_FLOOR:
        return {
            "verdict": "remove_both",
            "confidence": 0.5,
            "reason": f"{prefix}: ikisi de kalite tabanının altında (S1: {s1}, S2: {s2}).",
        }

    if s1 >= s2:
        return {
            "verdict": "keep_1",
            "confidence": 0.5,
            "reason": f"{prefix}: S1 ({s1}) ≥ S2 ({s2}).",
        }
    return {
        "verdict": "keep_2",
        "confidence": 0.5,
        "reason": f"{prefix}: S2 ({s2}) > S1 ({s1}).",
    }


_DECISION_SYSTEM_PROMPT = (
    "Sen DUSBANKASI'nın baş klinik denetmeni ve medikal yapay zeka KARAR VERİCİSİSİN (Ölüm Maçı hakemi).\n"
    "Diş Hekimliği Uzmanlık Sınavı (DUS) standartlarına hakim, titiz bir akademisyensin. "
    "Kararların bir soru bankasından KALICI SİLME ile sonuçlanır; bu yüzden son derece dikkatli ve gerekçeli ol.\n\n"
    "GÖREV: Birbirine benzeyen iki DUS sorusunu kıyasla ve veritabanında HANGİSİNİN KALACAĞINA karar ver.\n"
    "AMAÇ: Aynı bilgiyi neredeyse aynı SORU KÖKÜYLE tekrar sorgulayan kopyaları temizlemek; "
    "ama aynı konuyu FARKLI bir açıdan/zorlukta sorgulayan değerli varyasyonları KORUMAK.\n\n"
    "Sana yalnızca DEĞERLENDİRİLECEK üçlü verilir: SORU KÖKÜ + DOĞRU ŞIK + AÇIKLAMA. "
    "Çeldirici (yanlış) şıklar bilinçli olarak verilmez; aynı çeldiricinin başka soruda olması bilgi tekrarı değildir, "
    "kararını yalnızca bu üçlüye dayandır.\n\n"
    "═══ KOPYA TANIMI (en kritik kural) ═══\n"
    "İki soru ancak şu durumda KOPYADIR: SORU KÖKÜ aynı bilgi parçasını, aynı yönelimle soruyor VE doğru şık aynı kavramı işaret ediyor.\n"
    "  • Soru kökleri farklı kelimelerle yazılmış olsa bile AYNI tek gerçeği soruyorsa → KOPYA.\n"
    "  • Soru kökleri benzer kelimeler içerse bile FARKLI bir alt-kavramı/yönelimi sorguluyorsa → KOPYA DEĞİL (keep_both).\n"
    "Yani 'kavram benzerliği' tek başına kopya yapmaz; belirleyici olan AYNI SORUNUN tekrar sorulup sorulmadığıdır.\n\n"
    "═══ DEĞERLENDİRME RUBRİĞİ (öncelik sırasıyla) ═══\n"
    "1. AYNI SORU MU: İki soru kökü + doğru şık birlikte AYNI gerçeği mi test ediyor? (Yukarıdaki kopya tanımını uygula.)\n"
    "2. KLİNİK DERİNLİK: Yaş/cinsiyet/anamnez/bulgu/radyoloji/laboratuvar içeren gerçek klinik vaka kurgusu "
    "en değerli soru tipidir; düz ezber/tanım sorusunu yener.\n"
    "3. AÇIKLAMA ÖĞRETİCİLİĞİ: Açıklama doğru cevabın mekanizmasını gerçekten öğretiyor mu? "
    "Soru kökünü tekrarlayan totolojik açıklama zayıftır.\n"
    "4. DİL SAĞLIĞI: Türkçe medikal terminoloji doğru, bozuk karakter (mojibake) yok, akıcı.\n"
    "5. MUTLAK ELEME: Açıklamasında 'Tebrikler!', 'Bu önemli!', 'Unutmayın' gibi AI motivasyon/dolgu "
    "cümleleri olan soru bu boyutta kaybeder.\n\n"
    "═══ KARAR SEÇENEKLERİ ═══\n"
    "- keep_1  : İkisi AYNI soruyu soruyor → 1. soru daha güçlü, 2. elenir.\n"
    "- keep_2  : İkisi AYNI soruyu soruyor → 2. soru daha güçlü, 1. elenir.\n"
    "- keep_both: Sorular FARKLI alt-kavram/tip/evre/zıt durum ya da FARKLI bir AÇIDAN/YÖNELİMDEN test ediyor "
    "→ ikisi de değerli, ikisi de kalır. Örnekler: Tip 1 vs Tip 2, maksiller vs mandibular, akut vs kronik, "
    "etyoloji vs tedavi, VE ÖZELLİKLE negatif kök vs pozitif kök ('… değildir?' ile '… nedir?' aynı kavramı "
    "sorsa ve aynı doğru cevaba sahip olsa bile FARKLI soru tipidir → keep_both).\n"
    "- remove_both: İkisi de tıbben hatalı, bozuk veya öğretici değil → ikisi de elenir.\n\n"
    "ÖNEMLİ: Emin değilsen ele ALMA. Şüphede kalırsan keep_both seç; yanlış silme, yanlış tutmadan daha pahalıdır.\n\n"
    "═══ ÇIKTI ŞEMASI (KESİNLİKLE bu JSON) ═══\n"
    "{\n"
    '  "analiz": "İki soru kökünün aynı gerçeği mi sorduğunu, klinik derinlik ve açıklama farkını 1-3 cümlede çöz (zincirleme akıl yürüt).",\n'
    '  "verdict": "keep_1" | "keep_2" | "keep_both" | "remove_both",\n'
    '  "confidence": 0.0 ile 1.0 arası bir sayı,\n'
    '  "reason": "Nihai gerekçen (en fazla 2 cümle)"\n'
    "}\n"
    "Önce 'analiz' alanını doldur, kararı ondan türet."
)


def _build_decision_messages(q1: dict, q2: dict, is_expl_clone: bool = False) -> list:
    """Ölüm Maçı karar vericisi için system+user mesaj listesi üretir.
    Sync ve async çağrılar bu tek kaynağı paylaşır."""
    system_prompt = _DECISION_SYSTEM_PROMPT
    if is_expl_clone:
        system_prompt += (
            "\n\n⚠️ ÖNEMLİ UYARI: Bu iki sorunun açıklamaları neredeyse birebir aynıdır (AÇIKLAMA KLONU). "
            "Soru kökleri farklı bilgileri ölçüyor olabilir. Eğer iki soru kökü de klinik olarak değerli ve farklı "
            "alt-kavramları test ediyorsa 'keep_both' seçmelisin. Ancak soru kökleri de aynı bilgiyi tekrarlıyorsa "
            "daha kaliteli olan soruyu tut (keep_1 veya keep_2), diğerini ele."
        )
    user_msg = (
        "Aşağıdaki iki DUS sorusunu kıyasla ve JSON kararını döndür.\n\n"
        f"{_format_question_block(q1, 1)}\n"
        f"{_format_question_block(q2, 2)}"
    )
    return [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_msg},
    ]


def _parse_decision(res: dict) -> dict | None:
    """Ham JSON yanıtını standart karar sözlüğüne çevirir. Geçersizse None."""
    verdict = res.get("verdict")
    # Geriye dönük uyumluluk: eski "winner" alanı gelirse verdict'e çevir.
    if verdict not in VALID_VERDICTS and res.get("winner") in (1, 2):
        verdict = "keep_1" if res["winner"] == 1 else "keep_2"
    if verdict not in VALID_VERDICTS:
        return None
    reason = res.get("reason", "")
    analiz = res.get("analiz", "")
    if analiz and analiz not in reason:
        reason = f"{reason} | analiz: {analiz}" if reason else analiz
    return {
        "verdict": verdict,
        "confidence": float(res.get("confidence", 0.7)),
        "reason": reason,
    }


def call_deepseek_decision(q1: dict, q2: dict, is_expl_clone: bool = False) -> dict:
    """
    DeepSeek-v4-pro tabanlı son karar verici (Ölüm Maçı hakemi) — SENKRON.

    İki kopya/benzer soruyu klinik vaka kalitesi, açıklama öğreticiliği ve Türkçe
    medikal dil sağlığı açısından kıyaslar ve şu yapılandırılmış kararı döndürür:
        {"verdict": "keep_1"|"keep_2"|"keep_both"|"remove_both",
         "confidence": 0.0-1.0, "reason": "..."}
    """
    from openai import OpenAI
    import json

    if not DEEPSEEK_API_KEY:
        return _local_verdict(q1, q2, "API Key Eksik")

    try:
        client = OpenAI(api_key=DEEPSEEK_API_KEY, base_url="https://api.deepseek.com/v1")
        response = client.chat.completions.create(
            model=DEEPSEEK_MODEL or "deepseek-chat",
            messages=_build_decision_messages(q1, q2, is_expl_clone=is_expl_clone),
            temperature=0.2,
            response_format={"type": "json_object"},
        )
        parsed = _parse_decision(json.loads(response.choices[0].message.content))
        if parsed:
            return parsed
        print(f"   ⚠️ DeepSeek geçersiz verdict döndürdü, failsafe (keep_both) uygulanıyor.")
    except Exception as e:
        print(f"   ⚠️ DeepSeek API hatası, failsafe (keep_both) uygulanıyor: {e}")

    return {"verdict": "keep_both", "confidence": 0.0, "reason": "API_Hata_Failsafe"}


async def call_deepseek_decision_async(q1: dict, q2: dict, client, semaphore, is_expl_clone: bool = False) -> dict:
    """call_deepseek_decision'ın async eşi. Paralel ölüm maçı için.

    client: paylaşılan AsyncOpenAI istemcisi · semaphore: eşzamanlılık limiti.
    Hatada/anahtar yokken senkrondaki ile aynı yerel puanlama motoruna düşer."""
    import json
    import asyncio

    if client is None:
        return _local_verdict(q1, q2, "API Key Eksik")

    for attempt in range(3):
        try:
            async with semaphore:
                response = await client.chat.completions.create(
                    model=DEEPSEEK_MODEL or "deepseek-chat",
                    messages=_build_decision_messages(q1, q2, is_expl_clone=is_expl_clone),
                    temperature=0.2,
                    response_format={"type": "json_object"},
                )
            parsed = _parse_decision(json.loads(response.choices[0].message.content))
            if parsed:
                return parsed
            print(f"   ⚠️ DeepSeek geçersiz verdict döndürdü (Deneme {attempt+1}/3).")
        except Exception as e:
            print(f"   ⚠️ DeepSeek async hatası (Deneme {attempt+1}/3): {str(e)[:120]}")
            
        if attempt < 2:
            await asyncio.sleep(2 ** attempt)

    print("   ❌ DeepSeek 3 deneme sonrası başarısız, failsafe (keep_both) uygulanıyor.")
    return {"verdict": "keep_both", "confidence": 0.0, "reason": "API_Hata_Failsafe"}


def decide_winner(q1: dict, q2: dict) -> int:
    """Geriye dönük uyumluluk sarmalayıcısı. keep_2 dışındaki tüm kararlarda 1 döner."""
    verdict = call_deepseek_decision(q1, q2).get("verdict", "keep_1")
    return 2 if verdict == "keep_2" else 1


# ─── Çapraz Tarama (pgvector HNSW RPC Offloaded) ───────────────────────────────

def supabase_post(endpoint, payload):
    """Supabase REST POST (RPC) call helper.

    Hata gövdesini (PostgREST JSON: code/message/hint) yüzeye çıkarır; aksi
    halde her şey çıplak "HTTP Error 500" olarak görünür ve kök neden gizlenir.
    pgvector self-join statement-timeout'u PG kodu 57014 ile döner.
    """
    import urllib.request, urllib.error, json
    from config import SUPABASE_URL, SUPABASE_KEY
    url = f"{SUPABASE_URL}/rest/v1/{endpoint}"
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json"
    }
    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers=headers,
        method="POST"
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = ""
        try:
            body = e.read().decode("utf-8", "replace")
        except Exception:
            pass
        code = msg = ""
        try:
            j = json.loads(body)
            code, msg = j.get("code", ""), j.get("message", "")
        except Exception:
            msg = body[:200]
        if code == "57014":
            print(f"   ⚠️ Supabase RPC timeout ({endpoint}): statement_timeout aşıldı "
                  f"(PG 57014). Kapsamı daralt (--unit) veya RPC'ye function-local "
                  f"statement_timeout tanımla. Yerel taramaya düşülüyor.")
        else:
            print(f"   ⚠️ Supabase RPC hatası ({endpoint}): HTTP {e.code} {code} {msg}")
        return None
    except Exception as e:
        print(f"   ⚠️ Supabase RPC hatası ({endpoint}): {e}")
        return None


def _lexical_only_fallback(questions: list, threshold: float, thresholds: dict = None) -> list:
    """
    RPC timeout durumunda çağrılır. Embedding indirmez (0 byte PostgREST egress).
    Sadece bellekteki soru metni üzerinden Jaccard benzerliği hesaplar.
    Semantik fallback'e kıyasla parafraz kopyaları kaçırabilir; asıl yol RPC'dir.
    """
    if thresholds is None:
        thresholds = {}

    tokenized = []
    for q in questions:
        tokens = _tokenize(q.get("question", ""))
        if tokens:
            tokenized.append((q["id"], q, tokens))

    results_map = {}
    n = len(tokenized)
    for i in range(n):
        q1_id, q1, t1 = tokenized[i]
        for j in range(i + 1, n):
            q2_id, q2, t2 = tokenized[j]
            union = t1 | t2
            if not union:
                continue
            sim = len(t1 & t2) / len(union)
            u1 = q1.get("unit", "")
            u2 = q2.get("unit", "")
            t_thresh = min(thresholds.get(u1, threshold), thresholds.get(u2, threshold))
            if sim >= t_thresh:
                p_key = tuple(sorted((q1_id, q2_id)))
                if p_key not in results_map:
                    results_map[p_key] = {
                        "question_1_id": q1_id,
                        "question_2_id": q2_id,
                        "overlap_ratio": sim,
                        "source": "Lexical-Fallback",
                        "flag_type": "kavramsal_kopya",
                        "question_1_text": q1.get("question", ""),
                        "question_2_text": q2.get("question", ""),
                        "question_1_expl": q1.get("explanation", ""),
                        "question_2_expl": q2.get("explanation", ""),
                        "pair_threshold": t_thresh,
                        "q1_raw": q1,
                        "q2_raw": q2,
                    }

    results = list(results_map.values())
    results.sort(key=lambda x: x["overlap_ratio"], reverse=True)
    print(f"  Leksikal fallback tamamlandı: {len(results)} aday çift (0 byte egress).")
    return results


def find_duplicates(questions: list) -> list:
    """
    OpenAI Semantic Hybrid Radar (Bi-Encoder).
    Huni Mimarisi 1. Aşama: Dinamik Eşik + Multi-Vector (text-embedding-3-large 1536d)
    Offloaded to Supabase HNSW pgvector and dynamically fetched candidate details.

    RPC başarısız olursa → _lexical_only_fallback() — 0 byte egress, embedding indirmez.
    """
    if not questions:
        return []

    lesson_name = questions[0].get("lesson", "")
    if not lesson_name:
        return []

    from shared import supabase_get
    import urllib.parse
    import json
    import math

    # 1. Fetch Thresholds
    thresholds = {}
    encoded_lesson = urllib.parse.quote(lesson_name)
    try:
        res = supabase_get(f"unit_thresholds?select=unit,dynamic_threshold&lesson=eq.{encoded_lesson}")
        for row in res:
            thresholds[row['unit']] = float(row['dynamic_threshold'])
    except Exception:
        pass

    # Calculate pre_filter_t dynamically
    pre_filter_t = max(0.65, min(thresholds.values(), default=0.72) - 0.03)

    # Tek ünite kapsamındaysak RPC'yi o üniteye sınırla: aksi halde RPC tüm dersi
    # (binlerce soru) O(N²) hibrit self-join ile tarar ve statement timeout'a (500) düşer.
    units_in_scope = {q.get("unit") for q in questions if q.get("unit")}
    scope_unit = next(iter(units_in_scope)) if len(units_in_scope) == 1 else None

    scope_label = f"Ünite='{scope_unit}'" if scope_unit else "ders geneli (çapraz ünite)"
    print(f"  Supabase pgvector Tarama (Eşik: {pre_filter_t:.2f}, kapsam: {scope_label})...")

    # 2. Call find_candidate_pairs RPC on Supabase
    payload = {"p_lesson": lesson_name, "p_threshold": pre_filter_t}
    if scope_unit:
        payload["p_unit"] = scope_unit
    candidate_pairs = supabase_post("rpc/find_candidate_pairs", payload)

    # Map questions by ID for easy lookup
    q_map = {q["id"]: q for q in questions}

    # ── EGRESS-SAFE FALLBACK: RPC timeout → leksikal (0 byte) ─────────────────
    if candidate_pairs is None:
        print(f"  ⚠️ RPC timeout. Embedding indirmeden leksikal fallback çalışıyor ({len(questions)} soru)...")
        return _lexical_only_fallback(questions, pre_filter_t, thresholds)
    # ──────────────────────────────────────────────────────────────────────────

    if not candidate_pairs:
        print("  Supabase pgvector: Hiç aday çift bulunamadı.")
        return []

    print(f"  Supabase pgvector: {len(candidate_pairs):,} potansiyel aday çift döndü.")
    valid_candidates = []
    unique_ids = set()
    for pair in candidate_pairs:
        q1_id = pair.get("q1_id")
        q2_id = pair.get("q2_id")
        if q1_id in q_map and q2_id in q_map:
            valid_candidates.append(pair)
            unique_ids.add(q1_id)
            unique_ids.add(q2_id)

    if not valid_candidates:
        print("  Filtrelenmiş aday çift kalmadı.")
        return []

    print(f"  Çözülecek benzersiz soru sayısı: {len(unique_ids):,}")

    # 3. Sadece aday çiftlerin embedding'lerini indir (RPC başarılı → küçük set)
    embeddings_map = {}
    id_list = list(unique_ids)

    for chunk_start in range(0, len(id_list), 100):
        chunk = id_list[chunk_start:chunk_start+100]
        ids_str = ",".join(chunk)
        try:
            res = supabase_get(f"questions?select=id,stem_embedding,explanation_embedding&id=in.({ids_str})")
            for row in res:
                stem = row.get("stem_embedding")
                exp = row.get("explanation_embedding")

                if isinstance(stem, str): stem = json.loads(stem)
                if isinstance(exp, str): exp = json.loads(exp)

                if stem:
                    stem = [float(x) for x in stem]
                    stem_mag = math.sqrt(sum(x*x for x in stem))
                else:
                    stem_mag = 0.0

                if exp:
                    exp = [float(x) for x in exp]
                    exp_mag = math.sqrt(sum(x*x for x in exp))
                else:
                    exp_mag = 0.0

                embeddings_map[row["id"]] = {
                    "stem": stem, "stem_mag": stem_mag,
                    "exp": exp, "exp_mag": exp_mag
                }
        except Exception as e:
            print(f"   ⚠️ Aday embedding'leri çekilirken hata: {e}")

    # 4. Calculate exact hybrid similarity (0.7 stem + 0.3 exp) in Python
    results_map = {}
    for pair in valid_candidates:
        q1_id = pair["q1_id"]
        q2_id = pair["q2_id"]

        q1 = q_map[q1_id]
        q2 = q_map[q2_id]

        emb1 = embeddings_map.get(q1_id)
        emb2 = embeddings_map.get(q2_id)

        if not emb1 or not emb2:
            continue

        stem1 = emb1.get("stem")
        stem2 = emb2.get("stem")
        exp1 = emb1.get("exp")
        exp2 = emb2.get("exp")

        if not stem1 or not stem2 or not exp1 or not exp2:
            continue

        sim_stem = cosine_similarity(stem1, stem2)
        sim_exp = cosine_similarity(exp1, exp2)
        sim = (0.7 * sim_stem) + (0.3 * sim_exp)

        u1 = q1.get("unit", "")
        u2 = q2.get("unit", "")
        t1 = thresholds.get(u1, 0.75)
        t2 = thresholds.get(u2, 0.75)
        t = min(t1, t2)

        if sim >= t:
            p_key = tuple(sorted((q1_id, q2_id)))
            if p_key not in results_map:
                results_map[p_key] = {
                    "question_1_id": q1_id,
                    "question_1_text": q1.get("question", ""),
                    "question_1_expl": q1.get("explanation", ""),
                    "question_2_id": q2_id,
                    "question_2_text": q2.get("question", ""),
                    "question_2_expl": q2.get("explanation", ""),
                    "overlap_ratio": sim,
                    "source": "Semantic-Funnel",
                    "flag_type": "kavramsal_kopya",
                    "pair_threshold": t,
                    "q1_raw": q1,
                    "q2_raw": q2
                }

    results = list(results_map.values())
    results.sort(key=lambda x: x["overlap_ratio"], reverse=True)
    return results


def find_duplicates_chunked(questions: list) -> list:
    """
    Çoklu-ünite listesi için otomatik ünite-bazlı bölme.
    Her ünite ayrı RPC çağrısıyla işlenir → timeout riski düşer, egress azalır.
    Tek ünite gelirse doğrudan find_duplicates()'e delege eder.
    """
    from collections import defaultdict

    units: dict = defaultdict(list)
    for q in questions:
        units[q.get("unit", "")].append(q)

    if len(units) <= 1:
        return find_duplicates(questions)

    print(f"  Çoklu ünite tespit edildi ({len(units)} ünite) → Ünite bazlı bölme aktif.")
    all_results = []
    seen_pairs: set = set()

    for unit_name, unit_questions in units.items():
        if not unit_name:
            continue
        print(f"  [{unit_name}] {len(unit_questions)} soru taranıyor...")
        results = find_duplicates(unit_questions)
        for r in results:
            p_key = tuple(sorted((r.get("question_1_id", ""), r.get("question_2_id", ""))))
            if p_key not in seen_pairs:
                seen_pairs.add(p_key)
                all_results.append(r)

    all_results.sort(key=lambda x: x["overlap_ratio"], reverse=True)
    print(f"  Toplam: {len(all_results)} benzersiz aday çift.")
    return all_results

# ─── Kürasyon ─────────────────────────────────────────────────────────────────

def _guard_keep_both(r: dict) -> str | None:
    """Ucuz (API'siz) koruma kapıları. İkisi de korunmalıysa gerekçe metni,
    aksi halde None döner (→ DeepSeek ölüm maçına gider)."""
    # (answer_divergence_guard kaldırıldı)

    q1_text = r.get("question_1_text", "")
    q2_text = r.get("question_2_text", "")

    if lexical_guard(q1_text, q2_text):
        return "lexical_guard (tip/evre/sınıf farkı)"
    # (question_orientation_guard kaldırıldı)
    if numeric_divergence_guard(q1_text, q2_text):
        return "numeric_divergence_guard (farklı sayısal değerler)"
    stem_sim = jaccard(_tokenize(q1_text), _tokenize(q2_text))
    if stem_sim < DIFF_STEM_RATIO:
        return f"stem_jaccard({stem_sim:.2f})<{DIFF_STEM_RATIO} (soru kökleri çok farklı)"
    return None


def _verdict_targets(verdict: str, r: dict) -> list:
    """verdict → elenecek hedefler: (loser_id, loser_text, loser_expl, winner_id, winner_text)."""
    id1, id2 = r.get("question_1_id", ""), r.get("question_2_id", "")
    t1, t2 = r.get("question_1_text", ""), r.get("question_2_text", "")
    e1, e2 = r.get("question_1_expl", ""), r.get("question_2_expl", "")
    if verdict == "remove_both":
        return [(id1, t1, e1, id2, t2), (id2, t2, e2, id1, t1)]
    if verdict == "keep_2":
        return [(id1, t1, e1, id2, t2)]
    return [(id2, t2, e2, id1, t1)]  # keep_1 (varsayılan)


def _apply_decision(r, decision, seen_ids, ids_to_action, curation_log) -> tuple[int, int]:
    """Bir çiftin DeepSeek kararını yapı listelerine işler.
    Döndürür: (kept_both_delta, eliminated_delta)."""
    verdict = decision.get("verdict", "keep_1")
    conf = decision.get("confidence", 0.0)
    reason = f"deepseek-v4-pro [{verdict} | güven={conf:.2f}]: {decision.get('reason', '')}"

    if verdict == "keep_both":
        curation_log.append({
            "action": "KORU_IKISINI", "reason": reason, "verdict": verdict,
            "confidence": conf, "pair": r,
        })
        return 1, 0

    eliminated = 0
    for loser_id, loser_text, loser_expl, winner_id, winner_text in _verdict_targets(verdict, r):
        if not loser_id:
            continue
        if loser_id in seen_ids:
            curation_log.append({"action": "ATLANDI", "loser_id": loser_id})
            continue
        ids_to_action.append({
            "id": loser_id,
            "text": loser_text,
            "text_short": loser_text[:120],
            "explanation": loser_expl,
            "reason": reason,
            "flag_type": r.get("flag_type", "kavramsal_kopya"),
            "winner_id": winner_id,
            "winner_text": winner_text,
            "winner_text_short": winner_text[:120],
        })
        seen_ids.add(loser_id)
        curation_log.append({
            "action": "ELENECEK", "reason": reason, "verdict": verdict,
            "confidence": conf, "pair": r,
            "loser_id": loser_id, "winner_id": winner_id,
        })
        eliminated += 1
    return 0, eliminated


def explanation_clone_guard(r: dict) -> str | None:
    """Açıklamalar neredeyse aynıysa ve stem farklıysa özel flag."""
    e1 = r.get("q1_raw", {}).get("explanation", "")
    e2 = r.get("q2_raw", {}).get("explanation", "")
    if len(e1) < 30 or len(e2) < 30:
        return None
    t1, t2 = _tokenize(e1), _tokenize(e2)
    j = len(t1 & t2) / len(t1 | t2) if t1 | t2 else 0
    if j >= 0.85:
        return f"explanation_clone (jaccard={j:.2f})"
    return None


def route_pair(sim: float, threshold: float) -> str:
    """Güven temelli yönlendirme.

    ⚠️ Eski sürümdeki `sim < threshold + 0.02 → auto_keep` tamponu, eşiğin hemen
    üstündeki GERÇEK kopyaları sessizce koruyordu (gerçek kopya zonu bu banttaydı).
    Tampon kaldırıldı: guard'lardan geçen TÜM adaylar (sim ≥ eşik) DeepSeek'e gider.
    Yalnızca neredeyse birebir (≥0.97) çiftler API'siz yerel kararla işlenir."""
    if sim >= 0.97:
        return "auto_remove"   # Neredeyse birebir → yerel kararla ele
    return "deepseek"          # Anlamlı/belirsiz zon → DeepSeek ölüm maçı


def curate_pairs(results: list, interactive: bool = False) -> tuple[list, list]:
    """
    Her şüpheli çift için ölüm maçı yapar (SENKRON, interaktif mod için).
    Hızlı toplu işleme için curate_pairs_async kullanın.
    Döndürür: (ids_to_action, curation_log)
    """
    ids_to_action, seen_ids, curation_log = [], set(), []
    kept_both = eliminated = 0

    for r in results:
        if not r.get("question_1_id") or not r.get("question_2_id"):
            continue

        clone_info = explanation_clone_guard(r)
        if clone_info:
            r["flag_type"] = "aciklama_klonu"
            r["clone_info"] = clone_info

        guard_reason = _guard_keep_both(r)
        if guard_reason:
            kept_both += 1
            curation_log.append({
                "action": "KORU_IKISINI", "reason": guard_reason,
                "verdict": "keep_both", "confidence": 1.0, "pair": r,
            })
            continue

        threshold = r.get("pair_threshold", 0.75)
        sim = r.get("overlap_ratio", 0.0)
        route = route_pair(sim, threshold)

        if route == "auto_remove":
            decision = _local_verdict(r.get("q1_raw", {}), r.get("q2_raw", {}), "Otomatik Kelime Kopyası (Benzerlik >= 97%)")
            decision["confidence"] = 1.0
        else:
            is_expl_clone = r.get("flag_type") == "aciklama_klonu"
            decision = call_deepseek_decision(r.get("q1_raw", {}), r.get("q2_raw", {}), is_expl_clone=is_expl_clone)

        verdict = decision.get("verdict", "keep_1")

        if interactive and verdict != "keep_both" and route == "deepseek":
            print(f"\n{'─'*60}")
            print(f"  Benzerlik: {r['overlap_ratio']:.0%} | Karar: {verdict} (güven {decision.get('confidence',0):.2f})")
            for loser_id, loser_text, _le, _wid, winner_text in _verdict_targets(verdict, r):
                print(f"  [KORUNAN]  {winner_text[:100]}")
                print(f"  [ELENECEK] {loser_text[:100]}")
            if input("  Uygula? [E=evet / n=atla]: ").strip().lower() == "n":
                curation_log.append({"action": "KULLANICI_ATLADI", "reason": "kullanıcı atladı", "pair": r})
                continue

        kb, el = _apply_decision(r, decision, seen_ids, ids_to_action, curation_log)
        kept_both += kb
        eliminated += el

    print(f"  İkisi de korunan: {kept_both} | Elenen: {eliminated}")
    return ids_to_action, curation_log


async def curate_pairs_async(results: list, concurrency: int = 8) -> tuple[list, list]:
    """
    Paralel ölüm maçı. Ucuz koruma kapıları önce API'siz uygulanır; kalan çiftler
    DeepSeek'e Semaphore(concurrency) ile EŞ ZAMANLI gönderilir. Sonuçlar, dedup
    belirlenimciliği için orijinal (benzerlik-sıralı) sırayla işlenir.

    Döndürür: (ids_to_action, curation_log)
    """
    from openai import AsyncOpenAI

    ids_to_action, seen_ids, curation_log = [], set(), []
    kept_both = eliminated = 0

    # Faz A — ucuz koruma kapıları (API yok) ve otomatik yönlendirmeler
    to_match = []  # DeepSeek'e gidecek çiftler
    for r in results:
        if not r.get("question_1_id") or not r.get("question_2_id"):
            continue

        clone_info = explanation_clone_guard(r)
        if clone_info:
            r["flag_type"] = "aciklama_klonu"
            r["clone_info"] = clone_info

        guard_reason = _guard_keep_both(r)
        if guard_reason:
            kept_both += 1
            curation_log.append({
                "action": "KORU_IKISINI", "reason": guard_reason,
                "verdict": "keep_both", "confidence": 1.0, "pair": r,
            })
            continue

        threshold = r.get("pair_threshold", 0.75)
        sim = r.get("overlap_ratio", 0.0)
        route = route_pair(sim, threshold)

        if route == "auto_remove":
            decision = _local_verdict(r.get("q1_raw", {}), r.get("q2_raw", {}), "Otomatik Kelime Kopyası (Benzerlik >= 97%)")
            decision["confidence"] = 1.0
            kb, el = _apply_decision(r, decision, seen_ids, ids_to_action, curation_log)
            kept_both += kb
            eliminated += el
        else:
            to_match.append(r)

    if not to_match:
        print(f"  İkisi de korunan: {kept_both} | Elenen: {eliminated} (koruma kapıları tüm çiftleri filtreledi)")
        return ids_to_action, curation_log

    # Faz B — paralel DeepSeek ölüm maçları
    client = AsyncOpenAI(api_key=DEEPSEEK_API_KEY, base_url="https://api.deepseek.com/v1") if DEEPSEEK_API_KEY else None
    semaphore = asyncio.Semaphore(concurrency)
    print(f"  ⚔️ {len(to_match)} çift paralel ölüm maçına giriyor (eşzamanlılık={concurrency})...")

    decisions = await asyncio.gather(*[
        call_deepseek_decision_async(
            r.get("q1_raw", {}), 
            r.get("q2_raw", {}), 
            client, 
            semaphore, 
            is_expl_clone=(r.get("flag_type") == "aciklama_klonu")
        )
        for r in to_match
    ])
    if client is not None:
        await client.close()

    # Faz C — sıralı (belirlenimci) dedup işleme
    for r, decision in zip(to_match, decisions):
        kb, el = _apply_decision(r, decision, seen_ids, ids_to_action, curation_log)
        kept_both += kb
        eliminated += el

    print(f"  İkisi de korunan: {kept_both} | Elenen: {eliminated}")
    return ids_to_action, curation_log


def _full_question_md(q: dict, role: str) -> str:
    """Bir sorunun TAM metnini markdown olarak döker: kök + 5 şık + doğru cevap + açıklama."""
    qid = q.get("id", "?")
    ca = (q.get("correct_answer") or q.get("correctAnswer") or "?").strip().upper()
    stem = (q.get("question") or "").strip()
    expl = (q.get("explanation") or "").strip()
    lines = [f"**{role}** · `{qid}`\n\n", f"> {stem}\n\n"]
    for letter in ("a", "b", "c", "d", "e"):
        opt = (q.get(f"option_{letter}") or "").strip()
        if not opt:
            continue
        mark = " ✅" if letter.upper() == ca else ""
        lines.append(f"- **{letter.upper()})** {opt}{mark}\n")
    lines.append(f"\n*Doğru cevap:* **{ca}**\n\n")
    lines.append(f"*Açıklama:* {expl}\n")
    return "".join(lines)


def write_curation_summary(lesson: str, results: list, curation_log: list, report_dir: str):
    """Ölüm Maçı raporunu markdown olarak yazar — TAM METİNLİ.

    Her çift için: hangi soru hangiyle kıyaslandı, benzerlik skoru, DeepSeek kararı +
    gerekçesi, ve İKİ sorunun da tam metni (kök + 5 şık + doğru cevap + açıklama).
    """
    from datetime import datetime
    import re
    
    # Dosya ismi için güvenli bir isim oluştur (Radyoloji — Ünite_Adı -> Radyoloji_Unite_Adi_20260526_1430)
    safe_name = re.sub(r'[^\w\s-]', '_', lesson).replace(" ", "_")
    safe_name = re.sub(r'_+', '_', safe_name).strip('_')
    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    filename = f"curation_summary_{safe_name}_{ts}.md"
    path = os.path.join(report_dir, filename)

    total = len(results)
    kept = sum(1 for e in curation_log if e["action"] == "KORU_IKISINI")
    elim = sum(1 for e in curation_log if e["action"] == "ELENECEK")
    skipped = sum(1 for e in curation_log if e["action"] in ("KULLANICI_ATLADI", "ATLANDI"))

    lines = [
        f"# ⚔️ Ölüm Maçı Raporu — {lesson}\n\n",
        f"*Üretim: {datetime.now().strftime('%Y-%m-%d %H:%M')}* · Karar verici: **DeepSeek-v4-pro**\n\n",
        f"| Metrik | Değer |\n|---|---|\n",
        f"| Toplam şüpheli çift | {total} |\n",
        f"| İkisi de korundu | {kept} |\n",
        f"| Elenen soru | {elim} |\n",
        f"| Atlanan | {skipped} |\n\n---\n\n",
    ]

    pair_no = 0
    for entry in curation_log:
        action = entry["action"]
        pair = entry.get("pair")

        # "pair" taşımayan ikincil kayıtlar (ATLANDI dedup vb.) atlanır — bilgi yukarıda özetlendi
        if pair is None:
            continue
        pair_no += 1

        q1 = pair.get("q1_raw", {})
        q2 = pair.get("q2_raw", {})
        sim = pair.get("overlap_ratio", 0.0)
        sim_type = pair.get("type", "—")
        verdict = entry.get("verdict", "")
        conf = entry.get("confidence", 0.0)
        reason = entry.get("reason", "")

        if action == "KORU_IKISINI":
            header = f"## {pair_no}. 🟢 İKİSİ DE KORUNDU"
        elif action == "ELENECEK":
            loser = entry.get("loser_id", "")
            if verdict == "remove_both":
                header = f"## {pair_no}. ⚫ İKİSİ DE ELENDİ"
            else:
                header = f"## {pair_no}. 🔴 ELENDİ → `{loser}`"
        else:  # KULLANICI_ATLADI
            header = f"## {pair_no}. ⏭️ KULLANICI ATLADI"

        lines.append(f"{header}\n\n")
        lines.append(
            f"- **Benzerlik:** {sim:.0%} ({sim_type})  ·  **Karar:** `{verdict}`  ·  **Güven:** {conf:.2f}\n"
        )
        lines.append(f"- **Gerekçe:** {reason}\n\n")
        lines.append(_full_question_md(q1, "SORU 1"))
        lines.append("\n")
        lines.append(_full_question_md(q2, "SORU 2"))
        lines.append("\n\n---\n\n")

    with open(path, "w", encoding="utf-8") as f:
        f.write("".join(lines))


# ─── Yardımcılar ──────────────────────────────────────────────────────────────

def _tokenize_questions(questions: list) -> list:
    result = []
    for q in questions:
        expl = q.get("explanation") or ""
        result.append({
            "id": q.get("id"),
            "unit": q.get("unit", ""),
            "question": q.get("question", ""),
            "explanation": expl,
            # Ölüm Maçı karar vericisinin çeldiricileri ve doğru cevabı
            # değerlendirebilmesi için şıkları ve cevabı da taşı.
            "correct_answer": q.get("correct_answer") or q.get("correctAnswer", ""),
            "option_a": q.get("option_a", ""),
            "option_b": q.get("option_b", ""),
            "option_c": q.get("option_c", ""),
            "option_d": q.get("option_d", ""),
            "option_e": q.get("option_e", ""),
            "tokens": _tokenize(expl),
            "embedding": q.get("embedding")
        })
    return result


def _make_pair(q1: dict, q2: dict, ratio: float, type: str = "Lexical", flag_type: str = "kavramsal_kopya") -> dict:
    # Set objeleri JSON'a yazılamadığı için 'tokens' anahtarını rapordan çıkarıyoruz
    d1 = {k: v for k, v in q1.items() if k != "tokens"}
    d2 = {k: v for k, v in q2.items() if k != "tokens"}

    return {
        "overlap_ratio": round(ratio, 2),
        "type": type,
        "flag_type": flag_type,
        "question_1_id": q1["id"],
        "question_1_unit": q1["unit"],
        "question_1_text": q1["question"],
        "question_1_expl": q1["explanation"],
        "question_2_id": q2["id"],
        "question_2_unit": q2["unit"],
        "question_2_text": q2["question"],
        "question_2_expl": q2["explanation"],
        "q1_raw": d1,
        "q2_raw": d2
    }
