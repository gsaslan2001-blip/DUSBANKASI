# DUSBANKASI — Deneme Analizi & RAG Otomasyonu (v3.0)

> Son güncelleme: 2026-05-11 | v3.0 — Async-first pipeline, S5 v9.0 tam protokol, hata dayanıklılığı.
> Çalışma dizini her zaman `DUSBANKASI/` kök dizini olmalıdır.

---

## Genel Akış

```
Supabase (question_stats)
    │  today UTC, wrong_choices, null-guard, dedup
    ▼
analyze_deneme_followup.get_today_mistakes()
    │  lesson / unit / question_text / question_id
    ▼
asyncio.gather (Semaphore=3)  ←── her hata izole try/except içinde
    │
    ├── pinecone_client.get_rag_context()
    │       index: myppdfs  |  namespace: lesson.lower()
    │       top_k=15  →  bge-reranker-v2-m3 top_n=5
    │       boş namespace → global fallback (namespace'siz arama)
    │
    ├── openai_client.generate_completion()
    │       model: gpt-4o  |  temperature: 0.3
    │       retry: 3×  |  backoff: 1s→2s→4s  |  429→60s bekle
    │
    └── .md dosyası → C:\Users\FURKAN\Desktop\DUS\Deneme Analizi\Tekrar Hataları\YYYY-MM-DD\
            dosya adı: [Ders]_[Unite]_[QID].md  (Türkçe karakterler korunur: ş→s, ğ→g vb.)

    ▼
progress_sync.update_progress()
    └── C:\Users\FURKAN\.claude\DUS\PROGRESS.md  →  "Tamamlanan Deneme Analizleri" bölümüne ekle
```

---

## Script Konumları

| Dosya | Rol |
|---|---|
| `scripts/generate_deneme_rag_reports.py` | Ana orkestratör — async pipeline |
| `scripts/analyze_deneme_followup.py` | Supabase hata çekici (UTC-aware, dedup, null-guard) |
| `scripts/lib/pinecone_client.py` | Async Pinecone wrapper + global fallback |
| `scripts/lib/openai_client.py` | Async OpenAI wrapper + retry + rate limit |
| `scripts/lib/progress_sync.py` | PROGRESS.md güncelleyici |
| `scripts/templates/s5_prompt.jinja2` | S5 v9.0 tam sistem promptu (Jinja2) |
| `scripts/config.py` | Merkezi sabitler — absolute path, RAG parametreleri |

---

## Çevre Değişkenleri

`.env.local` (DUSBANKASI kök dizininde) içinde tanımlı olmalı:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
PINECONE_API_KEY=...
MYPPDFS_HOST=myppdfs-0crkhvy.svc.aped-4627-b74a.pinecone.io
OPENAI_API_KEY=...
```

> `.env.local` yüklemesi absolute `Path(__file__)` referansıyla yapılır — farklı dizinden çalıştırmak güvenlidir.

---

## Çalıştırma Komutları

```powershell
# Tam çalıştırma — bugünkü tüm yanlışlar için raporlar üret
python scripts/generate_deneme_rag_reports.py

# Test: sadece ilk 3 yanlış (API kredisi harcamadan önce doğrulama)
python scripts/generate_deneme_rag_reports.py --limit 3

# Dry-run: rapor üretme, yanlışları listele
python scripts/generate_deneme_rag_reports.py --dry-run
```

---

## Pinecone Parametre Referansı

| Parametre | Değer | Açıklama |
|---|---|---|
| `index` | `myppdfs` | Akademik PDF indeksi |
| `namespace` | `lesson.lower()` | Ders bazlı bölümleme (radyoloji, patoloji…) |
| `top_k` | 15 | İlk arama sonuç sayısı |
| `rerank model` | `bge-reranker-v2-m3` | Çapraz-kodlayıcı yeniden sıralama |
| `top_n` | 5 | Rerank sonrası LLM'e giden parça sayısı |
| `fallback` | namespace kaldır | Namespace boş → global indeks araması |

---

## S5 v9.0 Sistem Promptu (Tam Kayıt)

Kaynak dosya: `scripts/templates/s5_prompt.jinja2`
Değişkenler: `{{ context }}`, `{{ lesson }}`, `{{ unit }}`, `{{ question_text }}`

```
Sen elit bir DUS (Diş Hekimliği Uzmanlık Sınavı) mentörü ve akademik içerik üreticisisin.
Görevin, Pinecone'dan gelen kaynak verileri kullanarak, kullanıcının yanlış yaptığı bir soru
üzerinden derinlemesine bir konu analizi raporu oluşturmaktır.

Aşağıdaki protokole (S5 Full Pipeline v9.0) KESİNLİKLE uymalısın.

═══════════════════════════════════════════════
MUTLAK YASAKLAR (İSTİSNASIZ UYGULANIR)
═══════════════════════════════════════════════

1. KISA YANIT YASAĞI
   Yanıtlar ASLA kısa, özetlenmiş veya sığ olamaz.
   "Kısaca", "özetle", "genel hatlarıyla" ifadeleri YASAKTIR.

2. BELİRSİZLİK YASAĞI
   "vb.", "gibi", "vs.", "ve benzeri", "ve diğerleri", "örneğin" YASAKTIR.
   Bunların yerine listedeki TÜM elemanları açıkça yaz.

3. MEKANİZMA ŞARTI
   Her biyolojik veya klinik bilgiyi EN AZ 3 BASAMAKLI nedensellik zinciriyle açıkla:
   [Tetikleyici] → [Ara mekanizma 1] → [Ara mekanizma 2] → [Klinik sonuç]

4. TABLO ŞARTI
   Konuyla ilgili EN AZ BİR detaylı Markdown karşılaştırma tablosu zorunludur.

5. KESİN SAYI ŞARTI
   "Yüksek oranda", "sıklıkla" gibi belirsiz nicelikler YASAK. Tam sayı/oran yaz.

═══════════════════════════════════════════════
KAYNAK VERİLER (Pinecone RAG)
═══════════════════════════════════════════════
{{ context }}

═══════════════════════════════════════════════
ANALİZ EDİLECEK YANLIŞ SORU
═══════════════════════════════════════════════
Ders: {{ lesson }}
Ünite: {{ unit }}
Soru: {{ question_text }}

═══════════════════════════════════════════════
RAPOR FORMATI
═══════════════════════════════════════════════

### ─── BÖLÜM 1: HIGH-YIELD 20/80 ÖZÜ ───
Patognomonik bulgular, ayırt edici özellikler ve sınavda kesin çıkacak "nokta atışı" bilgiler.
Numaralı liste. Her madde tam mekanistik açıklamayla.

### ─── BÖLÜM 2: KAPSAMLI KONU ANLATIMI ───
Alt başlıklar (hepsini doldur, uygun olmayanı "Bu konuda uygulanmaz" yaz):
  2.1 Tanım ve Sınıflandırma
  2.2 Etyoloji ve Risk Faktörleri
  2.3 Patogenez / Mekanizma  (3+ basamaklı zincirler zorunlu)
  2.4 Klinik Bulgular
  2.5 Radyolojik / Laboratuvar Bulgular
  2.6 Tedavi Protokolü
  2.7 Karşılaştırma Tablosu  (en az 1 tablo zorunlu)
  2.8 DUS Tuzakları ve Ayırıcı Tanı İpuçları

### ─── BÖLÜM 3: 5 KLASİK DUS SORUSU ───
5 adet, 5 şıklı (A-E) soru.
Her soru için:
  - Doğru cevap + 3+ basamaklı mekanistik açıklama
  - Her yanlış şıkkın neden yanlış olduğu (eliminasyon mantığıyla, mekanizma düzeyinde)
```

---

## Hata Dayanıklılığı

| Senaryo | Davranış |
|---|---|
| Tek soru Pinecone'da bulunamadı | context = "İlgili kaynak bulunamadı." → LLM yine de çalışır |
| Namespace boş döndü | Global fallback: namespace'siz arama başlatılır |
| OpenAI 429 (rate limit) | 60s bekle, 3 deneme; tükenirse o rapor atlanır, diğerleri devam eder |
| OpenAI geçici hata | 1s → 2s → 4s exponential backoff, 3 deneme |
| Supabase join None döndü | O kayıt loglanıp sessizce atlanır |
| Herhangi bir istisnai hata | İzole try/except — pipeline çökmez, sonraki hataya geçer |

---

## Rapor Çıktı Yapısı

```
C:\Users\FURKAN\Desktop\DUS\Deneme Analizi\Tekrar Hataları\
└── YYYY-MM-DD\
    ├── Histoloji_Epitel_Doku_807829e9.md
    ├── Radyoloji_Unite14_Periodontal_Radyoloji_0bf05d3b.md
    └── ...
```

Dosya adı: `[Ders]_[Unite]_[QID_ilk8karakter].md`
Türkçe karakter dönüşümü: `ş→s`, `ğ→g`, `ü→u`, `ç→c`, `ı→i`, `ö→o`

---

## PROGRESS.md Entegrasyonu

Her başarılı çalıştırma sonrası `C:\Users\FURKAN\.claude\DUS\PROGRESS.md` dosyasına otomatik eklenir:

```markdown
## Tamamlanan Deneme Analizleri

### YYYY-MM-DD — Deneme Analizi
- **Toplam rapor:** N
- **Dersler:** Histoloji (3 soru), Patoloji (6 soru), Fizyoloji (4 soru)
- **Çıktı dizini:** `C:\Users\FURKAN\Desktop\DUS\Deneme Analizi\Tekrar Hataları\YYYY-MM-DD`
```

---

*DUSBANKASI — Atlas v9.1 Entegrasyonu | 2026-05-11*
