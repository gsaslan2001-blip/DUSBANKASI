# DUS Anki Cloze Kart Üretim Pipeline'ı — Ajan Uygulama Planı

> **Hazırlık:** 2026-06-03  
> **Kapsam:** `cloze_shared.py` + `notebooklm_mcp_cloze.py` + `config.py`  
> **Durum:** Standalone testler geçti, E2E henüz test edilmedi  
> **Amaç:** Pipeline'ı canlı üretim için %100 güvenilir hale getirmek

---

## 0. OKUMA KILAVUZU

Bu plan 5 fazdan oluşur. Her faz bağımsız uygulanabilir ve kendi test kriterlerine sahiptir. Sıra önemlidir: **Faz 1 kritik hatalar** giderilmeden gerçek üretim çalıştırılmamalıdır.

| Faz | Başlık | Öncelik | Dosya |
|---|---|---|---|
| 1 | Kritik Bug Düzeltmeleri | 🔴 BLOCKER | `cloze_shared.py` |
| 2 | Sağlamlık ve Hata Kurtarma | 🟠 PRE-PROD | her ikisi |
| 3 | Kalite Katmanı Güçlendirme | 🟡 QUALITY | `cloze_shared.py` |
| 4 | Operasyonel Gözlemlenebilirlik | 🟢 OPS | her ikisi |
| 5 | Opsiyonel Geliştirmeler | ⚪ NICE-TO-HAVE | her ikisi |

---

## FAZ 1 — KRİTİK BUG DÜZELTMELERİ 🔴

> Bu hataların her biri pipeline'ı ya tamamen kırar ya da sessizce yanlış çıktı üretir. E2E test öncesi mutlaka uygulanmalıdır.

---

### F1-01 — `get_existing_card_texts()`: Pinecone metadata asla dönmez

**Dosya:** `scripts/cloze_shared.py`, satır 215–253

**Sorun:**  
`vectors/list` endpoint'i (Pinecone data-plane v1) yalnızca vektör **ID'lerini** döner, `metadata` alanı içermez. Mevcut kod `v.get("metadata", {}).get("text", "")` okumaya çalışır — bu her zaman boş string döner. Sonuç: FAZ 1 kapsam kontrolü her zaman "tüm kavramlar kapsanmamış" sonucu verir ve her çalıştırmada mevcut kartların üstüne kart yazılır.

**Kök neden:**  
Pinecone API davranışı yanlış anlaşılmış. Metadata için iki adımlı çağrı gerekir:
1. `GET/POST vectors/list` → ID listesi (pagination ile)  
2. `GET vectors/fetch?ids=...&namespace=...` → her ID için tam metadata

**Düzeltme:**  
`cloze_shared.py`'ye yeni bir GET yardımcı fonksiyonu ekle ve `get_existing_card_texts()`'i iki adımlı hale getir.

```python
# cloze_shared.py — _pinecone_request fonksiyonunun ALTINA ekle

def _pinecone_get(endpoint: str, params: dict) -> dict:
    """Pinecone GET isteği — query parametreli (vectors/fetch için)."""
    from urllib.parse import urlencode
    url = f"{ANKI_INDEX_HOST}/{endpoint}?{urlencode(params, doseq=True)}"
    headers = {
        "Api-Key": PINECONE_API_KEY,
        "Accept": "application/json",
    }
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers=headers, method="GET")
            with urllib.request.urlopen(req, timeout=120) as resp:
                raw = resp.read().decode()
                return json.loads(raw) if raw.strip() else {}
        except urllib.error.HTTPError as e:
            body = ""
            try:
                body = e.read().decode()
            except Exception:
                pass
            if attempt == 2:
                raise RuntimeError(f"Pinecone GET {endpoint} HTTP {e.code}: {body[:300]}")
            time.sleep(2 ** attempt)
        except Exception as e:
            if attempt == 2:
                raise
            time.sleep(2 ** attempt)
    return {}
```

```python
# cloze_shared.py — get_existing_card_texts() komple yeniden yaz

def get_existing_card_texts(namespace: str) -> list[str]:
    """
    Namespace'teki tüm kartların text metinlerini döner.
    ADIM 1: vectors/list → ID listesi (pagination)
    ADIM 2: vectors/fetch → batch metadata
    """
    # ── Adım 1: Tüm ID'leri topla ──────────────────────────
    all_ids = []
    pagination_token = None

    while True:
        payload = {"namespace": namespace, "limit": 1000}
        if pagination_token:
            payload["paginationToken"] = pagination_token

        try:
            result = _pinecone_request("vectors/list", payload)
        except Exception as e:
            print(f"   ⚠️ Pinecone list hatası (ns={namespace}): {e}")
            break

        for v in result.get("vectors", []):
            vid = v.get("id")
            if vid:
                all_ids.append(vid)

        pagination_token = result.get("pagination", {}).get("next")
        if not pagination_token:
            break

    if not all_ids:
        return []

    print(f"   📥 Pinecone: {len(all_ids)} ID bulundu, metadata çekiliyor...")

    # ── Adım 2: Batch fetch metadata ────────────────────────
    all_texts = []
    batch_size = 100  # Pinecone fetch limit

    for i in range(0, len(all_ids), batch_size):
        batch = all_ids[i:i + batch_size]
        try:
            result = _pinecone_get("vectors/fetch", {
                "ids": batch,
                "namespace": namespace,
            })
            for v in result.get("vectors", {}).values():
                text = (v.get("metadata") or {}).get("text", "")
                if text:
                    all_texts.append(text)
        except Exception as e:
            print(f"   ⚠️ Pinecone fetch batch {i}-{i+len(batch)}: {e}")

        if i + batch_size < len(all_ids):
            time.sleep(0.15)

    print(f"   📥 {len(all_texts)} kart metni yüklendi.")
    return all_texts
```

**Test kriteri:**  
Dolu bir namespace için (örn. `endodonti`, 2799 vektör) fonksiyon 0'dan fazla string döndürmelidir.

---

### F1-02 — `get_namespace_count()`: Endpoint yanlış parse ediliyor

**Dosya:** `scripts/cloze_shared.py`, satır 256–274

**Sorun:**  
İlk deneme `describe_index_stats` sonucunu hiç okumuyor (`pass` ile geçiyor). Yedek deneme `vectors/list` pagination'dan `total` çekmeye çalışıyor; bu alan Pinecone API'sinde standart olarak bulunmaz.

**Düzeltme:**

```python
def get_namespace_count(namespace: str) -> int:
    """Namespace'teki toplam vektör sayısı — describe_index_stats ile."""
    try:
        result = _pinecone_request("describe_index_stats", {})
        ns_stats = result.get("namespaces", {})
        return ns_stats.get(namespace, {}).get("vectorCount", 0)
    except Exception as e:
        print(f"   ⚠️ Namespace count hatası (ns={namespace}): {e}")
        return 0
```

**Test kriteri:**  
`periodontoloji` namespace için ≥ 3680 dönmeli.

---

### F1-03 — `classify_anchors_pinecone()`: Substring yanlış pozitif

**Dosya:** `scripts/cloze_shared.py`, satır 505–535

**Sorun:**  
`corpus = " ".join(t.lower() for t in existing_texts)` → `if w in corpus` kontrolü.  
Tüm kartlar bir string'e birleştirildiğinden `"period"` → `"periodontal"` içinde bulunur, `"dişeti"` → `"dişetiiltihabı"` içinde bulunur. Gerçekte kapsanmamış kavramlar yanlışlıkla kapsanmış sayılır.

**Düzeltme:**

```python
def classify_anchors_pinecone(
    anchors: list[str], existing_texts: list[str]
) -> tuple[list[str], list[str]]:
    """
    Kelime setine karşı anchor sınıflama — tam kelime eşleşmesi.
    Eşik: anchor kelimelerinin %60'ı corpus kelime setinde bulunmalı.
    """
    if not anchors:
        return [], []
    if not existing_texts:
        return [], list(anchors)

    # Corpus kelime seti — tam kelime sınırları
    corpus_words: set[str] = set()
    for text in existing_texts:
        for word in text.lower().split():
            # Noktalama temizle
            word = re.sub(r'[^\w]', '', word)
            if word:
                corpus_words.add(word)

    covered, uncovered = [], []
    for anchor in anchors:
        words = [
            re.sub(r'[^\w]', '', w.lower())
            for w in anchor.split()
            if len(w) >= 3
        ]
        if not words:
            uncovered.append(anchor)
            continue

        match_count = sum(1 for w in words if w in corpus_words)
        if match_count / len(words) >= 0.60:
            covered.append(anchor)
        else:
            uncovered.append(anchor)

    return covered, uncovered
```

**Test kriteri:**  
`classify_anchors_pinecone(["Phoenix apsesi", "period"], ["Phoenix apsesi olarak adlandırılır"])` →  
`"Phoenix apsesi"` covered, `"period"` uncovered olmalı (`"period"` != `"periodontal"`).

---

### F1-04 — `parse_anchor_response()`: Daraltılmış regex, kısa terimler atlanıyor

**Dosya:** `scripts/cloze_shared.py`, satır 486–502

**Sorun:**  
`r'^\d+[\.)\-]\s+'` sadece `1. `, `1) `, `1- ` formatını yakalar. NotebookLM bazen `1:`, `• `, veya satır başı olmayan format üretir. Ayrıca `len(concept) > 2` filtresi `"pH"`, `"IL"` gibi klinik kısaltmaları eler.

**Düzeltme:**

```python
def parse_anchor_response(text: str) -> tuple[list[str], int]:
    """PROMPT_ANCHOR yanıtından kavram listesi ve toplam sayı."""
    if not text or not text.strip():
        return [], 0

    lines = []
    for raw in text.split("\n"):
        line = raw.strip()
        if not line:
            continue

        # Format 1: "1. Kavram", "1) Kavram", "1- Kavram", "1: Kavram"
        m = re.match(r'^\d+[\.\)\-:]\s+(.+)', line)
        if m:
            concept = m.group(1).strip()
            if concept:
                lines.append(concept)
            continue

        # Format 2: Madde imi "- Kavram", "• Kavram", "* Kavram"
        m2 = re.match(r'^[-•*]\s+(.+)', line)
        if m2:
            concept = m2.group(1).strip()
            # TOPLAM_KAVRAM satırını engelle
            if concept and not concept.startswith("TOPLAM"):
                lines.append(concept)

    # TOPLAM_KAVRAM satırı
    total_match = re.search(r'TOPLAM_KAVRAM\s*=\s*(\d+)', text)
    reported_total = int(total_match.group(1)) if total_match else len(lines)

    # Min uzunluk: 2 karakter (kısaltmalar dahil: "pH", "IL")
    lines = [c for c in lines if len(c) >= 2]

    return lines, reported_total
```

**Test kriteri:**  
`"1. Phoenix apsesi\n2. pH\n• Karyoliz\nTOPLAM_KAVRAM = 3"` → 3 kavram, total=3.

---

### F1-05 — `add_file()`: Yükleme sonrası source ID kayıp senaryosu

**Dosya:** `scripts/notebooklm_mcp_cloze.py`, satır 172–201

**Sorun:**  
`add_file()` yükleme sonrası source ID'yi `p.stem.lower() in s.title.lower()` ile arar. Eşleşme bulamazsa `sid = None` → `MockSource(None)` → sonraki `source.id` referansı `None` → silme adımı başarısız olur ama sessizce devam eder. Bir sonraki çalıştırmada eski kaynak notebook'ta kalır, NotebookLM onu da sorgular — kirli bağlam.

**Düzeltme:**

```python
async def add_file(self, notebook_id, file_path, wait=True, wait_timeout=1500):
    p = Path(file_path)
    print(f"      [MCP] Kaynak yükleniyor: {p.name} ...")
    resp, _ = outer._post({
        "jsonrpc": "2.0", "id": 100, "method": "tools/call",
        "params": {"name": "source_add", "arguments": {
            "notebook_id": notebook_id,
            "source_type": "file",
            "file_path": str(p),
            "title": p.stem,
            "wait": bool(wait),
            "wait_timeout": float(wait_timeout),
        }},
    })
    if "error" in resp:
        raise Exception(f"Yükleme hatası: {resp['error']}")
    sc = resp.get("result", {}).get("structuredContent", {})
    if sc.get("status") not in (None, "success", ""):
        raise Exception(f"Yükleme başarısız: {sc}")

    # Tam eşleşme önce, ardından parçalı eşleşme
    sid = None
    stem_lower = p.stem.lower()
    sources = await self.list(notebook_id)
    for s in sources:
        if (s.title or "").lower() == stem_lower:          # tam eşleşme
            sid = s.id
            break
    if not sid:
        for s in sources:
            if stem_lower in (s.title or "").lower():      # parçalı eşleşme
                sid = s.id
                break

    if not sid:
        raise Exception(
            f"Kaynak yüklendi ancak ID bulunamadı. "
            f"Mevcut başlıklar: {[s.title for s in sources]}"
        )

    class MockSource:
        def __init__(self, source_id):
            self.id = source_id
    return MockSource(sid)
```

**Test kriteri:**  
Yükleme sonrası `source.id is not None` olmalı. ID bulunamazsa fonksiyon `Exception` fırlatmalı (sessiz geçmemeli).

---

## FAZ 2 — SAĞLAMLIK VE HATA KURTARMA 🟠

---

### F2-01 — `--dir` modu için checkpoint/resume sistemi

**Dosya:** `scripts/notebooklm_mcp_cloze.py` — `main_async()` fonksiyonu

**Sorun:**  
Çok dosyalı bir `--dir` çalıştırması saat 3'te bir hatayla dursa baştan başlamak gerekir. Tamamlanan üniteler yeniden işlenir.

**Uygulama:**  
`LOG_DIR` altında `{lesson}_progress.json` dosyası tut. Başarıyla tamamlanan her üniteyi dosyaya yaz. Yeniden başlatmada tamamlananları atla.

```python
# main_async() içindeki for döngüsünden ÖNCE ekle:

def _load_progress(lesson: str) -> set:
    """Tamamlanan ünite isimlerini yükle."""
    progress_path = os.path.join(LOG_DIR, f"{lesson}_progress.json")
    if os.path.exists(progress_path):
        try:
            with open(progress_path, "r", encoding="utf-8") as f:
                return set(json.load(f).get("completed", []))
        except Exception:
            pass
    return set()

def _save_progress(lesson: str, completed_units: set):
    """Tamamlanan üniteleri kaydet."""
    progress_path = os.path.join(LOG_DIR, f"{lesson}_progress.json")
    try:
        with open(progress_path, "w", encoding="utf-8") as f:
            json.dump({"completed": list(completed_units)}, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"   ⚠️ Progress kaydedilemedi: {e}")

# main_async() içinde:
completed_units = _load_progress(args.lesson)
if completed_units:
    print(f"   ♻️ Resume: {len(completed_units)} tamamlanan ünite atlanacak")

for i, file_path in enumerate(files):
    unit_name = args.unit if args.unit else _derive_unit_name(file_path)

    if unit_name in completed_units:
        print(f"   ⏭️  [{i+1}/{len(files)}] ATLANILDI (tamamlandı): {unit_name}")
        continue

    # ... mevcut işleme kodu ...

    if success and not args.dry_run:
        completed_units.add(unit_name)
        _save_progress(args.lesson, completed_units)
```

**Test kriteri:**  
İlk çalıştırma 3 üniteden 2'sini tamamlasın. İkinci çalıştırma sadece 3. üniteden başlamalı.

---

### F2-02 — `CLOZE_MIN_CARDS_PER_BATCH` config değerini saturation'a bağla

**Dosya:** `scripts/notebooklm_mcp_cloze.py`, satır 419–476

**Sorun:**  
`config.py`'de `CLOZE_MIN_CARDS_PER_BATCH = 3` tanımlı ama hiç kullanılmıyor. Bir batch 1-2 kart üretip tümü validasyondan geçemezse `consecutive_dry` sayılmaz, ama tur gerçek anlamda verimsizdir.

**Düzeltme:**  
Import'a ekle ve saturation logic'i güncelle:

```python
# notebooklm_mcp_cloze.py — import bölümüne ekle:
from config import (
    ...
    CLOZE_MIN_CARDS_PER_BATCH,   # eksik olan
    INTER_BATCH_COOLDOWN,         # eksik olan
)

# Batch işleme döngüsünde, `consecutive_dry = 0` yerine:
if wrote < CLOZE_MIN_CARDS_PER_BATCH:
    consecutive_dry += 1
    print(f"   │  ⚠️ Düşük verim ({wrote} kart < eşik {CLOZE_MIN_CARDS_PER_BATCH}): {consecutive_dry}/{CLOZE_SATURATION_THRESHOLD}")
else:
    consecutive_dry = 0
```

**Not:** `INTER_BATCH_COOLDOWN` aynı isimle hem `config.py`'de (5s) hem de `notebooklm_mcp_cloze.py`'de (5s local değişken olarak) tanımlı. Local tanımı sil, config'den import et.

**Test kriteri:**  
Her batch'te 1 kart üretilip validasyondan geçemezse 2 ardışık turdan sonra doygunluk bildirmeli.

---

### F2-03 — Log dosya adlarındaki Türkçe karakter / Windows yolu güvenliği

**Dosya:** `scripts/notebooklm_mcp_cloze.py`, satır 393–398 ve 457–466

**Sorun:**  
`f"cloze_anchor_{unit_name}.txt"` — `unit_name` içinde `/`, `\`, `?`, `*`, `:` olabilir (Windows'ta geçersiz dosya adı).

**Düzeltme:**  
`_derive_unit_name()` fonksiyonuna ek sanitizasyon ekle ve log oluştururken ortak bir sanitize fonksiyonu kullan:

```python
# notebooklm_mcp_cloze.py — en üste yardımcı ekle:

def _safe_filename(s: str, max_len: int = 60) -> str:
    """Dosya adı için güvenli string üret."""
    # Windows'ta geçersiz karakterleri temizle
    s = re.sub(r'[<>:"/\\|?*\x00-\x1f]', '_', s)
    s = s.strip('. ')
    return s[:max_len] if len(s) > max_len else s

# Log yazma öncesinde:
safe_unit = _safe_filename(unit_name)
anchor_log = os.path.join(LOG_DIR, f"cloze_anchor_{safe_unit}.txt")
log_path   = os.path.join(LOG_DIR, f"cloze_{safe_unit}_batch{batch_num}.txt")
```

**Test kriteri:**  
`_safe_filename("Kök Kanal: Anatomisi / Giriş*")` → `"Kök Kanal_ Anatomisi _ Giriş_"` gibi geçerli bir dosya adı.

---

### F2-04 — Notebook cleanup retry (stale source bırakma riski)

**Dosya:** `scripts/notebooklm_mcp_cloze.py`, satır 357–368

**Sorun:**  
Cleanup başarısız olursa tek bir uyarı yazılıp geçilir. Önceki başarısız çalıştırmadan kalan kaynak notebook'ta kalır → bu sorgulara dahil edilir → kart kalitesi bozulur.

**Düzeltme:**  
Cleanup'ı 3 denemeyle retry et, başarısız olursa `FatalError` fırlat:

```python
# Cleanup bloğunu şununla değiştir:
for cleanup_attempt in range(3):
    try:
        existing = await client.sources.list(NOTEBOOK_ID)
        if not existing:
            break
        for s in existing:
            try:
                await client.sources.delete(NOTEBOOK_ID, s.id)
                print(f"      ✓ silindi: {s.title}")
            except Exception as de:
                print(f"      ⚠ silinemedi ({s.title}): {de}")
        remaining = await client.sources.list(NOTEBOOK_ID)
        if not remaining:
            break
        print(f"   ⚠️ Cleanup turu {cleanup_attempt+1}: {len(remaining)} kaynak hâlâ var...")
        await asyncio.sleep(5)
    except Exception as ce:
        print(f"   ⚠️ Cleanup hata (deneme {cleanup_attempt+1}/3): {ce}")
        await asyncio.sleep(5)
else:
    raise FatalError(f"Notebook temizlenemedi ({unit_name}). Manuel temizlik gerekiyor.")
```

---

### F2-05 — Auth hatası yalnızca FAZ 0'da değil batch seviyesinde de yakala

**Dosya:** `scripts/notebooklm_mcp_cloze.py`, FAZ 2 döngüsü

**Sorun:**  
Mevcut retry mekanizması `process_unit_cloze` fonksiyonunun tamamını tekrar başlatır. Auth hatası bir batch sırasında gelirse anchor çıkarma ve Pinecone kapsam kontrolü de tekrarlanır (gereksiz API çağrısı ve zaman kaybı). Üretilen kartlar kaybolmaz (Pinecone'a yazıldı), ama üretilecekler atlanır.

**Düzeltme:**  
Batch döngüsüne auth catch ekle:

```python
# FAZ 2 döngüsünde chat.ask() çağrısının try/except bloğunu güncelle:
try:
    res = await asyncio.wait_for(
        client.chat.ask(NOTEBOOK_ID, prompt),
        timeout=600
    )
except Exception as batch_err:
    classified = classify_error(batch_err)
    if isinstance(classified, AuthError):
        print(f"   │  🔐 Batch auth hatası — yenileniyor...")
        if await ensure_auth(client):
            # Aynı batch'i tekrar dene
            res = await asyncio.wait_for(
                client.chat.ask(NOTEBOOK_ID, prompt),
                timeout=600
            )
        else:
            raise FatalError("Auth yenilenemedi.")
    elif isinstance(classified, RetryableError):
        print(f"   │  🔄 Batch geçici hata: {batch_err} — atlanıyor.")
        batch_results.append((batch_num, 0, "HATA"))
        await asyncio.sleep(INTER_BATCH_COOLDOWN)
        continue
    else:
        raise
```

---

## FAZ 3 — KALİTE KATMANI GÜÇLENDİRME 🟡

---

### F3-01 — `validate_cloze_cards()`: Başlık sızıntısı tespitini güçlendir

**Dosya:** `scripts/cloze_shared.py`, satır 431–447

**Sorun:**  
`distinct_word = ans.split()[-1]` sadece son kelimeyi alır. `"Phoenix apsesi"` için `"apsesi"` → başlıkta tipik olarak bulunmaz; gerçek sızıntı olan `"Phoenix"` yakalanmaz.

**Düzeltme:**  
Cevabın tüm anlamlı kelimelerini başlık son bölümüne karşı kontrol et:

```python
# validate_cloze_cards() içindeki başlık sızıntısı bölümünü değiştir:
if baslik:
    cloze_answers = CLOZE_RE.findall(text_raw)
    baslik_parts = [p.strip() for p in re.split(r'\s*[-|]\s*', baslik)]
    last_level = baslik_parts[-1].lower() if baslik_parts else ""

    for ans in cloze_answers:
        ans_words = [
            w.lower() for w in ans.strip().split()
            if len(w) >= 3 and w.lower() not in {
                "ile", "için", "olan", "olan", "gibi",
                "veya", "veya", "bir", "bu", "ve", "de", "da"
            }
        ]
        for word in ans_words:
            if word in last_level:
                reasons.append(f"baslik_sizintisi:{word}")
                break
        else:
            continue
        break
```

---

### F3-02 — `parse_cloze_response()`: Kart sayısı doğrulama

**Dosya:** `scripts/cloze_shared.py`, satır 291–353

**Sorun:**  
NotebookLM `Kart sayısı: 35` diyebilir ama truncation veya format hatası nedeniyle yalnızca 20 kart parse edilmiş olabilir. Bu sessizce geçer.

**Düzeltme:**  
Son satırdan `reported_count` parse et ve uyuşmazlıkta uyar:

```python
# parse_cloze_response() sonuna ekle (return öncesi):
reported_count_match = re.search(
    r'[Kk]art\s+[Ss]ay[ıi][sş][ıi]:?\s*(\d+)', text
)
if reported_count_match:
    reported = int(reported_count_match.group(1))
    parsed = len(cards)
    if parsed < reported * 0.80:
        print(
            f"   ⚠️ Kart sayısı uyuşmazlığı: model {reported} bildirdi, "
            f"{parsed} parse edildi (muhtemel truncation)"
        )
return cards
```

---

### F3-03 — `validate_cloze_cards()`: 3+ cloze saydırma eşiğini düzelt

**Dosya:** `scripts/cloze_shared.py`, satır 449–454

**Sorun:**  
Gerçek kıyas kartları 2 cloze içerir (c1 + c2). 3+ kontrolü doğru, ancak rejection mesajı "şüphe" diyor ama her zaman reddediyor — kıyas kartı da dahil.

**Düzeltme:**  
Reject etmek yerine uyar ve Extra'ya not ekle; gerçek saydırmayı farklı bir kuralla tespit et:

```python
# Çoklu cloze bölümünü şununla değiştir:
unique_c_nums = set(re.findall(r'\{\{(c\d+)::', text_raw))
if len(unique_c_nums) > 2:
    # 3+ farklı c numarası → kesinlikle liste saydırma
    reasons.append("coklu_cloze_saydirma")
elif len(cloze_matches) >= 3 and len(unique_c_nums) == 1:
    # Tüm cloze'lar c1 ama 3+ tane → liste saydırma riski
    reasons.append("tek_c_cok_cloze_saydirma_suphesi")
# 2 farklı c numarası (c1+c2) → kıyas kartı, geçer
```

---

### F3-04 — `deploy_cards_to_pinecone()`: Başarısız embedding'i recovery'e yaz

**Dosya:** `scripts/cloze_shared.py`, satır 669–709

**Sorun:**  
Embedding hatası durumunda `return 0` ile dönülür. Kartlar TSV'ye yazılmış olabilir ama Pinecone'a ulaşmamıştır. Bu kartlar kaybolur.

**Düzeltme:**  
Embedding başarısız olursa kartları recovery klasörüne yaz:

```python
try:
    vectors = embed_texts(texts, dim=ANKI_EMBED_DIM)
except Exception as e:
    print(f"   ❌ Embedding hatası: {e}")
    # Recovery'e yaz — elle yeniden denenebilir
    _dump_failed_cards(accepted, lesson, unit_name)
    return 0
```

```python
def _dump_failed_cards(cards: list[dict], lesson: str, unit: str):
    """Embedding başarısız olan kartları recovery klasörüne yaz."""
    try:
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        path = os.path.join(RECOVERY_DIR, f"embed_failed_{lesson}_{ts}.json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump({"lesson": lesson, "unit": unit, "cards": cards}, f,
                      ensure_ascii=False, indent=2)
        print(f"   💾 Embedding başarısız kartlar kaydedildi: {path}")
    except Exception as e:
        print(f"   ⚠️ Recovery yazılamadı: {e}")
```

---

## FAZ 4 — OPERASYONELGÖZLEMLENEBİLİRLİK 🟢

---

### F4-01 — Session özet raporu (JSON)

**Dosya:** `scripts/notebooklm_mcp_cloze.py` — `main_async()` sonu

**Uygulama:**  
Pipeline tamamlandığında `LOG_DIR` altına `session_{lesson}_{timestamp}.json` yaz:

```python
session_report = {
    "timestamp": datetime.now().isoformat(),
    "lesson": args.lesson,
    "namespace": ns,
    "files_processed": len(files),
    "units_completed": list(completed_units),
    "pinecone_before": existing_count,
    "pinecone_after": final_count,
    "cards_added": final_count - existing_count,
    "dry_run": args.dry_run,
}
report_path = os.path.join(LOG_DIR, f"session_{ns}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json")
with open(report_path, "w", encoding="utf-8") as f:
    json.dump(session_report, f, ensure_ascii=False, indent=2)
print(f"\n📋 Oturum raporu: {report_path}")
```

---

### F4-02 — TSV dosyalarını ünite bazında birleştir

**Dosya:** `scripts/cloze_shared.py` — yeni fonksiyon

**Sorun:**  
Her batch ayrı TSV dosyası oluşturur. 10-batch'lik bir ünite 10 dosya oluşturur, Anki'ye ayrı ayrı import gerekir.

**Uygulama:**  
`process_unit_cloze()` sonunda tüm batch TSV'leri birleştiren fonksiyon çağır:

```python
def consolidate_unit_tsv(lesson: str, unit_name: str, output_dir: str = None) -> str | None:
    """
    Bir üniteye ait tüm batch TSV'lerini tek dosyaya birleştirir.
    Returns: birleşik dosya yolu.
    """
    if output_dir is None:
        output_dir = os.path.join(os.path.dirname(__file__), "cloze_output")

    safe = re.sub(r'[^\w\s-]', '', f"{lesson}_{unit_name}").replace(" ", "_")
    pattern = os.path.join(output_dir, f"{safe}_*.tsv")

    import glob
    batch_files = sorted(glob.glob(pattern))
    if not batch_files:
        return None

    all_card_lines = []
    for filepath in batch_files:
        with open(filepath, "r", encoding="utf-8") as f:
            for line in f:
                line = line.rstrip("\n")
                if line.startswith("#") or re.match(r'^[Kk]art\s', line) or not line:
                    continue
                all_card_lines.append(line)

    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    merged_path = os.path.join(output_dir, f"{safe}_MERGED_{ts}.tsv")
    with open(merged_path, "w", encoding="utf-8") as f:
        f.write("#separator:tab\n#html:false\n")
        for line in all_card_lines:
            f.write(line + "\n")
        f.write(f"Kart sayısı: {len(all_card_lines)}\n")

    print(f"   📦 TSV birleştirildi: {merged_path} ({len(all_card_lines)} kart, {len(batch_files)} batch)")
    return merged_path
```

---

### F4-03 — `--status` CLI komutu ekle

**Dosya:** `scripts/notebooklm_mcp_cloze.py`

**Amaç:**  
Tüm namespace'lerin güncel vektör sayısını tek komutla göster.

```python
# argparse'a ekle:
parser.add_argument("--status", action="store_true",
                    help="Tüm Pinecone namespace'lerinin kartı durumunu göster")

# main_async() başına ekle:
if args.status:
    from cloze_shared import LESSON_TO_ANKI_NS, get_namespace_count
    print(f"\n{'='*50}")
    print(f"📊 PINECONE ANKİ INDEX DURUMU")
    print(f"{'='*50}")
    total = 0
    for lesson, ns in sorted(LESSON_TO_ANKI_NS.items(), key=lambda x: x[1]):
        count = get_namespace_count(ns)
        total += count
        bar = "█" * (count // 200)
        print(f"  {lesson:<20} {ns:<20} {count:>5} kart  {bar}")
    print(f"{'─'*50}")
    print(f"  {'TOPLAM':<20} {'':20} {total:>5} kart")
    print(f"{'='*50}\n")
    return 0
```

**Kullanım:** `python scripts/notebooklm_mcp_cloze.py --status --lesson dummy`

---

## FAZ 5 — OPSİYONEL GELİŞTİRMELER ⚪

Bu maddeler isteğe bağlıdır; pipeline doğru çalışıyor olsa bile uygulama kaliteyi artırır.

---

### F5-01 — Pinecone benzerlik tabanlı kapsam sınıflaması (isteğe bağlı)

**Mevcut yöntem:** Kelime overlap (%60) — hızlı ama kaba.  
**Gelişmiş yöntem:** Anchor metnini embed et → Pinecone `query` ile en yakın vektörü ara → cosine benzerlik > 0.85 ise kapsanmış say.

**Ne zaman uygulanmalı:** Namespace'ler büyüdükçe (>5000 kart) kelime eşleşmesi kapsanmamış kavramları atlamaya başlarsa.

---

### F5-02 — Anchor cache: aynı PDF tekrar yüklenmeden kavram listesi tekrar kullan

Eğer `cloze_anchor_{safe_unit}.txt` dosyası güncel bir tarihle mevcutsa PROMPT_ANCHOR atlanabilir ve doğrudan cache'den yüklenebilir. `--force-reanchor` flag'i eklenerek zorla yenileme sağlanabilir.

---

### F5-03 — Anki MediaRecovery entegrasyonu

Üretilen TSV'leri doğrudan `AnkiConnect` API'si üzerinden Anki'ye import et. Ön koşul: Anki açık, AnkiConnect eklentisi etkin.

```python
# Opsiyonel Anki import (dry-run değilse, --anki-import flag varsa):
import urllib.request, json
def anki_import_tsv(tsv_path: str, deck_name: str):
    """AnkiConnect ile TSV'yi Anki'ye import et."""
    ...
```

---

### F5-04 — Ders dizini klasör yapısı önerileri

Mevcut:
```
scripts/cloze_output/Endodonti_Kök_Kanal_Anatomisi_20260603_120000.tsv
```

Öneri (okunabilirlik ve Anki import kolaylığı için):
```
scripts/cloze_output/
  Endodonti/
    Kök_Kanal_Anatomisi_MERGED_20260603.tsv
    Periapikal_Patoloji_MERGED_20260603.tsv
  Periodontoloji/
    ...
```

`save_cloze_tsv()` ve `consolidate_unit_tsv()` fonksiyonlarında `output_dir` parametresi ders bazlı alt klasörü destekleyecek şekilde güncellenir.

---

## UYGULAMA SIRASI (AJAN İÇİN)

Aşağıdaki adımlar sırayla uygulanmalıdır. Her adımda test koşturulmalı, geçtikten sonra bir sonrakine geçilmeli.

### Adım 1 — Dosya kopyalama

```bash
cp scripts/cloze_shared.py scripts/cloze_shared_backup.py
cp scripts/notebooklm_mcp_cloze.py scripts/notebooklm_mcp_cloze_backup.py
```

### Adım 2 — FAZ 1 düzeltmeleri (`cloze_shared.py`)

Sıra: F1-01 → F1-02 → F1-03 → F1-04

Ardından unit test koştur:
```bash
python scripts/test_cloze_shared.py   # varsa
# Yoksa hızlı smoke test:
python -c "
from scripts.cloze_shared import (
    get_namespace_count, classify_anchors_pinecone, parse_anchor_response
)
print(get_namespace_count('endodonti'))   # >= 2799
covered, uncov = classify_anchors_pinecone(['Phoenix apsesi'], ['Phoenix apsesi tanımı'])
print(covered)   # ['Phoenix apsesi']
concepts, total = parse_anchor_response('1. Phoenix\n2. pH\nTOPLAM_KAVRAM = 2')
print(concepts, total)  # ['Phoenix', 'pH'] 2
"
```

### Adım 3 — F1-05 düzeltmesi (`notebooklm_mcp_cloze.py`)

`add_file()` içinde source ID kontrolü.

### Adım 4 — FAZ 2 düzeltmeleri

F2-01 (checkpoint) → F2-02 (saturation) → F2-03 (log sanitize) → F2-04 (cleanup retry) → F2-05 (batch-level auth)

### Adım 5 — FAZ 3 kalite iyileştirmeleri

F3-01 → F3-02 → F3-03 → F3-04

### Adım 6 — FAZ 4 gözlemlenebilirlik

F4-01 → F4-02 → F4-03

### Adım 7 — End-to-end dry-run testi

```bash
# MCP sunucusu çalışıyor olmalı
uvx --from git+https://github.com/jacob-bd/notebooklm-mcp-cli.git nlm serve

# Kuru çalıştırma
python scripts/notebooklm_mcp_cloze.py \
  --file "C:/PDFler/Endodonti/test_unit.pdf" \
  --lesson Endodonti \
  --unit "Test Ünitesi" \
  --dry-run

# Beklenen çıktı:
# ✅ Kaynak hazır
# 📌 FAZ 0: N kavram çapalama
# 📥 M kart metni yüklendi (get_existing_card_texts düzeltme sonrası)
# 📊 K kapsanmış / L kalan
# 📦 X kart üretildi, Y kabul edildi
# 🧪 DRY-RUN: Y kart yazılmadı
```

### Adım 8 — Gerçek üretim

```bash
python scripts/notebooklm_mcp_cloze.py \
  --file "C:/PDFler/Endodonti/Kök Kanal Anatomisi.pdf" \
  --lesson Endodonti \
  --unit "Kök Kanal Anatomisi"
```

---

## ÖNEMLİ KONFIGÜRASYON NOTLARI

### `config.py` — Mevcut değerler yeterli mi?

| Sabit | Mevcut | Öneri | Gerekçe |
|---|---|---|---|
| `CLOZE_CHUNK_SIZE` | 25 | 20 | NotebookLM bağlamı daha odaklı olur |
| `CLOZE_MAX_BATCHES` | 15 | 15 | Yeterli |
| `CLOZE_SATURATION_THRESHOLD` | 2 | 2 | Yeterli |
| `CLOZE_MIN_CARDS_PER_BATCH` | 3 | 3 | F2-02 ile kullanılmaya başlanmalı |
| `PROMPT_CHAR_LIMIT` | 9500 | 9500 | NotebookLM limiti |
| `INTER_BATCH_COOLDOWN` | 5 | 5 | Yeterli |
| `COOLDOWN_BETWEEN_UNITS` | 25 | 25 | Yeterli |

### Pinecone API limitleri

| İşlem | Limit | Mevcut kod |
|---|---|---|
| `vectors/fetch` | maks 1000 ID/istek | Batch 100 → ✅ |
| `vectors/upsert` | maks 100 vektör/istek | Batch 100 → ✅ |
| `embed_texts` | maks 2048 token/giriş | Kontrol yok ⚠️ |

**Öneri:** `embed_texts()` içinde uzun metinleri 500 token'a kırp (tipik kart metni çok daha kısa, risk düşük).

---

## ÖZETLENMİŞ SORUN KARTI

| ID | Sorun | Etki | Faz |
|---|---|---|---|
| F1-01 | `vectors/list` metadata dönmüyor → coverage her zaman sıfır | 🔴 KRİTİK | 1 |
| F1-02 | `get_namespace_count()` sıfır döndürüyor | 🟠 YÜKSEK | 1 |
| F1-03 | Substring match → yanlış pozitif kapsam | 🟠 YÜKSEK | 1 |
| F1-04 | Kısa terimler ve format varyantları atlanıyor | 🟠 YÜKSEK | 1 |
| F1-05 | Source ID bulunamazsa sessiz hata | 🟠 YÜKSEK | 1 |
| F2-01 | `--dir` modunda resume yok | 🟡 ORTA | 2 |
| F2-02 | `CLOZE_MIN_CARDS_PER_BATCH` kullanılmıyor | 🟡 ORTA | 2 |
| F2-03 | Windows'ta geçersiz log dosya adları | 🟡 ORTA | 2 |
| F2-04 | Stale source bırakma riski | 🟡 ORTA | 2 |
| F2-05 | Batch-level auth kurtarma yok | 🟡 ORTA | 2 |
| F3-01 | Başlık sızıntısı tespiti eksik | 🟡 ORTA | 3 |
| F3-02 | Kart sayısı truncation sessiz geçer | 🟢 DÜŞÜK | 3 |
| F3-03 | Kıyas kartı yanlış reddedilebilir | 🟢 DÜŞÜK | 3 |
| F3-04 | Embedding hatasında kart kaybı | 🟢 DÜŞÜK | 3 |

---

*Plan sonu. Soru, güncelleme veya spesifik implementasyon detayı için tekrar danışılabilir.*
