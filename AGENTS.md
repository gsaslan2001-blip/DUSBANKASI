# AGENTS.md — DUSBANKASI LLM & Ajan Operasyon Kılavuzu

> Bu dosya, projeye **soğuk başlangıç (cold-start)** yapan tüm yapay zeka modelleri (Gemini, Claude, GPT-4, Codex, Cursor vb.) için **tek sayfalık mutlak operasyon rehberidir**. Detaylı sistem mimarisi için [gemini.md](./gemini.md) dosyasını referans alınız.

---

## ⚡ 1. HIZLI YOL (FAST-TRACK) — HAZIR DOSYADAN SORU İTHALATI

Kullanıcı sana bir dosya yolu verdiğinde (`.md`, `.txt`, `.json`, `.csv`) veya "şu soruları sisteme ekle" dediğinde:

> 🛑 **MUTLAK KURAL 1: ASLA GEÇİCİ PYTHON İTHALAT SCRİPTİ (`import_xxx.py`) YAZMA!**  
> DUSBANKASI'nda soru aktarımı için tüm doğrulama, normalizasyon, 1536-dim OpenAI çift vektörleme ve chunked DB yazma altyapısı `scripts/add_questions.py` içinde mevcuttur.

> 🛑 **MUTLAK KURAL 2: AŞIRI KEŞİF / DEDEKTİFLİK YASAKTIR!**  
> Kullanıcının verdiği ders/ünite, `scripts/canonical_units.json` içindeki mevcut sabit katalogdan çözülür. Veritabanında benzer ünite arama, DUSMERKEZİ müfredat tarama ve soru benzerlik kontrolü yapılmaz. Exact olmayan tekil bir ifade otomatik eşleştirilir; belirsiz veya katalog dışı ifade varsa mevcut adaylar gösterilip işlem durur. CLI bayrakları (`--lesson`, `--unit`) dosyadaki tüm AI etiketlerini ezer.

### Kanonik İthalat Protokolü (Tam Hız - 2 Adım):

```powershell
# ADIM 1: Dry-Run ile test et (veritabanına yazmaz, kabul/ret oranını gösterir ~3 sn)
python scripts/add_questions.py "<DOSYA_YOLU>" --lesson "<DERS>" --unit "<ÜNİTE>" --dry-run

# ADIM 2: Gerçek aktarım (kullanıcının belirttiği ünite için tereddütsüz --force-new-unit ekle)
python scripts/add_questions.py "<DOSYA_YOLU>" --lesson "<DERS>" --unit "<ÜNİTE>" --force-new-unit
```

> **Not:** Kullanıcı aksini istemedikçe ölüm maçı (`--audit`) ÇALIŞTIRMA. Doğrudan ekle ve canlı probe ile doğrula.

### Hızlı ekle modu

Kullanıcı “hızlı ekle” dediğinde yalnızca JSON ayrıştırma, soru kökü, A–E şıkları, doğru cevap ve açıklama biçimi kontrol edilir. Kalite gate, embedding, semantik denetim ve dry-run çalıştırılmaz:

```powershell
python scripts/add_questions.py "<DOSYA_YOLU>" --lesson "<DERS>" --unit "<ÜNİTE>" --fast
```

Hızlı modda sorular doğrudan `quality_flag = NULL` ile yazılır; `stem_embedding` ve `explanation_embedding` oluşturulmaz. Normal güvenli aktarım istenirse yukarıdaki kanonik iki adımlı protokol kullanılır.


---

## 🛠️ 2. OTOMATİK DÜZELTİLEN FORMAT BOZUKLUKLARI

`scripts/add_questions.py` ve `scripts/shared.py`, hazır soru dosyalarında sıkça görülen şu sorunları **otomatik olarak** giderir:

1. **NotebookLM Markdown Artıkları:** `<questions\_json>` etiketi, satır başındaki `**[**`, `\[`, `\]`, `\*` ve `\"option\_a\"` gibi markdown kaçış karakterleri `sanitize_raw_json()` ile anında temizlenir.
2. **Yalancı-Pozitif Kaynak Sızıntıları:** Açıklamalardaki "metinde belirtildiği üzere...", "kaynak metne göre...", "metin kuralı:" gibi benign AI meta-yorumları `clean_explanation_meta()` ile otomatik ayıklanır. Kalite kapısı bu sebeple soruları haksız yere **reddetmez**.
3. **Farklı JSON/Alan İsimleri:** `option_a..option_e`, `correct_answer`, `cevap`, `explanation` gibi varyasyonlar kanonik şemaya otomatik dönüştürülür.

---

## 🔒 3. VERİTABANI VE KALİTE DEĞİŞMEZLERİ (INVARIANTS)

1. **`quality_flag = NULL` Kuralı:**  
   Yeni eklenen kaliteli sorular veritabanına `quality_flag = NULL` (veya `None`) olarak yazılmalıdır. Supabase varsayılanı olan `high_quality` değerine **asla bırakılmamalıdır** (çünkü frontend `quality_flag IS NULL`, `reviewed_keep`, `high_yield` ve `cikmis` dışındaki bayrakları süzgeçten eler ve göstermez!). `deploy_to_supabase` bunu otomatik olarak `null` gönderir.
2. **Çift Vektör Zorunluluğu (normal mod):**  
   Normal aktarımda her sorunun hem soru kökü (`stem_embedding`) hem açıklaması (`explanation_embedding`) `text-embedding-3-large` (1536-dim) ile vektörlenir. `--fast` açıkça istendiğinde bu adım atlanır.
3. **10'arlı Chunk Yazımı:**  
   Supabase REST API'si embedding içeren büyük JSON paketlerinde HTTP 500 vermemesi için yazımlar 10'arlı paketler (`_SUPABASE_WRITE_CHUNK=10`) halinde yapılır.
4. **Aktif Ders Adları (Büyük/Küçük Harf Duyarlı):**  
   `Anatomi` · `Biyokimya` · `Cerrahi` · `Endodonti` · `Fizyoloji` · `Histoloji` · `Mikrobiyoloji` · `Ortodonti` · `Patoloji` · `Pedodonti` · `Periodontoloji` · `Protez` · `Radyoloji` · `Restoratif`.

---

## ⚔️ 4. ÖLÜM MAÇI (SMART AUDIT) VE KALİTE KONTROL

Eğer kullanıcı sorular yüklendikten sonra kopyaları ayıklamanı veya kalite kontrol yapmanı isterse:

```powershell
# Yalnızca ilgili ünitede hızlı semantik denetim (Önizleme - dry run):
python scripts/tools/smart_audit_pipeline.py --lesson "<DERS>" --unit "<ÜNİTE>" --dry-run

# Gerçek eleme (mükerrer soruları 'kavramsal_kopya' olarak işaretler):
python scripts/tools/smart_audit_pipeline.py --lesson "<DERS>" --unit "<ÜNİTE>" --concurrency 8
```

---

## 💻 5. WINDOWS POWERSHELL TUZAKLARI

- PowerShell konsolunda karmaşık inline `python -c "..."` komutları çalıştırmaktan kaçının; regex ve köşeli parantezler (`[a-e]`) PowerShell tırnak parser'ında bozulur.
- Her zaman doğrudan CLI scriptlerini parametreleriyle (`--lesson`, `--unit`, `--dry-run`) çağırın.
