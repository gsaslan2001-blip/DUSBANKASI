# Devir Raporu — DUS Anki Kart Üretim Pipeline'ı

> **Alıcı:** Fable 5
> **Gönderen:** Claude (Sonnet 5), bugünkü oturum
> **Tarih:** 2026-07-04
> **Proje:** DUSBANKASI — `C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI`

---

## 1. Bağlam — Bu Proje Nedir

Bu, bir diş hekimliği öğrencisinin (Furkan) kendi ders/kaynak PDF'lerinden **kişisel çalışma amaçlı Anki flashcard'ı** ürettiği bir otomasyon zinciridir. DUS (Diş Hekimliği Uzmanlık Sınavı), Türkiye'de lisanslı diş hekimlerinin girdiği resmi bir uzmanlık sınavıdır (tıp/diş hekimliğindeki board sınavlarına benzer bir yapı). Bu pipeline **sınav sorusu sızdırmaz, sınav güvenliğini aşmaz** — yalnızca kullanıcının kendi ders materyalinden, spaced-repetition (aralıklı tekrar) tekniğiyle çalışacağı flashcard'lar üretir. Anki, tıp/diş hekimliği öğrencileri arasında dünya çapında yaygın kullanılan, açık kaynaklı bir flashcard uygulamasıdır.

Teknik zincir: **PDF → NotebookLM (Google, LLM tabanlı özetleme/soru-cevap aracı) → TSV formatında Anki kartı → Pinecone (vektör DB, embedding tabanlı tekrar-kontrol) → Anki**.

İki kart katmanı üretilir:
1. **Cloze (atomik spot) kartları** — tek bir bilgiyi (terim, sayı, eşik değeri) test eder.
2. **Karşılaştırma (kontrast) kartları** — eş-hiyerarşideki iki/üç kavramı (örn. Th1 vs Th2, K file vs H file) aynı boyutta simetrik olarak gizleyip ayırt etme refleksi kazandırır. Pedagojik temel: "retrieval under interference" — literatürde bilinen bir öğrenme tekniği.

---

## 2. Bugün Yapılan Değişiklikler

### 2.1 İki sistem promptu sıfırdan yeniden yazıldı

| Dosya | Rol | Boyut |
|---|---|---|
| `notebooklm_cloze_system_prompt_v4.md` | Cloze kart üretim kuralları (NotebookLM cloze defterine yapıştırılır) | 7.862 karakter |
| `ANKİ KARŞILAŞTIRMA NOTEBOOKLM MASTERPROMPT_v3.txt` | Karşılaştırma kart üretim kuralları (NotebookLM karşılaştırma defterine yapıştırılır) | 7.144 karakter |

İkisi de NotebookLM'in ~10.000 karakter pratik sınırının altında.

**Düzeltilen iki somut hata:**
- **all-c1 tutarsızlığı:** Eski cloze promptu kıyas kartlarında "maks 2 farklı c numarası" (yani `{{c1::A}}` + `{{c2::B}}`) kullanımına izin veriyordu, ama kendi örnekleri hep tek `c1` kullanıyordu. `c1`+`c2` pedagojik olarak hatalıdır: Anki bunu iki ayrı karta böler, bir taraf açıkken diğeri sorulur — tam olarak kaçınılmak istenen "tanıma testi"ne döner. Artık iki promptta da tüm kıyas kutupları **aynı anda `{{c1::...}}`** ile gizleniyor (simetrik gizleme), gerekçesiyle birlikte yazılı.
- **Erken "doygunluk" önyargısı:** Pipeline log'larında bilinen bir davranış (rehberde "V3-02" olarak kayıtlı) — model kaynak tükenmeden "yeterli kart ürettim" sinyali veriyordu, bu da telafi turlarına ihtiyaç doğuruyordu. Kök neden promptun kendisiydi: doygunluk sinyali nötr bir seçenek gibi sunuluyordu. Yeni promptlarda varsayılan tersine çevrildi — "kaynak tükenmedi, üretmeye devam et" varsayılan, doygunluk sinyali yalnızca açık bir tükenme testinden geçince veriliyor.

Tam gerekçe ve önce/sonra karşılaştırması: proje kökündeki `Cloze Üretim Rehber.md` → **BÖLÜM S** (yeni eklendi).

### 2.2 Mimari değişiklik: Karşılaştırma turu artık ayrı bir NotebookLM defterinde

**Önceki durum:** Cloze (FAZ 0-4) ve karşılaştırma (FAZ 5) **aynı** NotebookLM defterini paylaşıyordu. FAZ 5'in runtime promptu, o konuşma içinde cloze sistem promptunu bir cümleyle ("BU TUR CLOZE ÜRETİMİ DEĞİL") override etmeye çalışıyordu — kırılgan bir yaklaşım.

**Yeni durum:** İki ayrı NotebookLM defteri var, her birinin kendi kalıcı sistem promptu:

```
Cloze defteri:          NOTEBOOK_ID          = a6570b2e-36e5-4a84-8438-8460ad0329f8
Karşılaştırma defteri:  CONTRAST_NOTEBOOK_ID = b9e92a15-fccb-4da0-9836-e9c57960be67
```

Kod tarafında (`scripts/notebooklm_mcp_cloze.py`, FAZ 5 bloğu, satır ~723-825):
- `config.py`'ye `CONTRAST_NOTEBOOK_ID` sabiti eklendi.
- FAZ 5 başlamadan önce, o ünitenin PDF'i karşılaştırma defterine **ayrıca** yükleniyor (cleanup + `add_file`, cloze defterindeki adım 0 ile simetrik bir blok).
- Kaynak yükleme başarısız olursa FAZ 5 sessizce atlanıyor (pipeline'ın geri kalanı bozulmuyor).
- `client.chat.ask(...)` çağrısı artık `CONTRAST_NOTEBOOK_ID`'yi hedefliyor (önceden paylaşılan `NOTEBOOK_ID` idi).
- `finally` bloğunda karşılaştırma defterindeki kaynak da temizleniyor.

**Doğrulanmamış nokta (önemli):** `config.py`'de zaten var olan `NOTEBOOK_ID` örneğinde config değeri (`a6570b2e...`) ile NotebookLM tarayıcı URL slug'ı (`28b067b0...`) **farklı UUID'ler** — yani NotebookLM'in API'de kullandığı iç `notebook_id`, tarayıcı URL'inde görünen slug'dan sapabiliyor. Yeni `CONTRAST_NOTEBOOK_ID` şimdilik kullanıcının verdiği tarayıcı URL slug'ı ile ayarlandı. İlk gerçek (dry-run olmayan) çalıştırmadan önce `notebooklm list` veya `notebooklm metadata -n b9e92a15` komutuyla doğrulanması gerekiyor. Yanlışsa pipeline `source_add`/`chat.ask` adımında açık bir hata verir (sessiz başarısızlık riski yok), ama zaman kaybettirir.

### 2.3 Dosya temizliği

Silindi (yeni v4/v3 dosyalarıyla tamamen değiştirildi, içerik kaybı yok):
- `ANKİ ÜRETİM NOTEBOOKLM MASTERPROMPT.txt`
- `ANKİ KARŞILAŞTIRMA NOTEBOOKLM MASTERPROMPT.txt` (v3.txt öncesi sürüm)
- `notebooklm_cloze_system_prompt_v3.md`
- `karşılaştırma soruları.txt` (eski iki-blok DENETİM+İÇE AKTARIM mimarisi)

Korunan: `karşılaştırma örnek.txt` (eski format ama kart kalitesi hâlâ referans niteliğinde).

---

## 3. Fable 5'ten İstenen — Üç Görev

### Görev A: İki sistem promptunu denetle ve iyileştir

Dosyalar:
- `C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\notebooklm_cloze_system_prompt_v4.md`
- `C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\ANKİ KARŞILAŞTIRMA NOTEBOOKLM MASTERPROMPT_v3.txt`

Odaklan:
- Kural çelişkisi veya belirsizlik var mı? (Bugün tam da böyle bir çelişki — all-c1 vs c1+c2 — düzeltildi; benzer başka tutarsızlık kalmış olabilir.)
- Few-shot örnekleri kuralların tamamını gerçekten temsil ediyor mu?
- 10.000 karakter sınırı içinde kalırken sinyal yoğunluğu artırılabilir mi? (Şu an cloze 7.862, karşılaştırma 7.144 — ~%20-25 pay var.)
- NotebookLM'in (Gemini tabanlı) bilinen zayıflıklarına (erken durma, talimat unutma, uzun promptlarda kural atlama) karşı ek koruma gerekir mi?
- Referans kalite örneği: proje kökünde `karşılaştırma örnek.txt` ve `C:\Users\FURKAN\Desktop\DUS\Radyoloji\radyo anki\4.ünit\4cloz.txt` (gerçek üretim çıktısı, hedef kalite seviyesi).

### Görev B: Pipeline kodunu hızlandır

Ana dosya: `C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\scripts\notebooklm_mcp_cloze.py` (fonksiyon: `process_unit_cloze`, ~850 satır). Paylaşılan modül: `scripts\cloze_shared.py`. Config: `scripts\config.py`.

**En somut fırsat (bugünkü mimari değişikliğin doğrudan sonucu):** FAZ 5 artık cloze'dan (FAZ 0-4) **ayrı bir NotebookLM defterinde** çalışıyor — yani artık aynı konuşma/defter yuvasını paylaşmıyorlar. Şu anki kod hâlâ FAZ 5'i FAZ 0-4 tamamen bittikten SONRA, sıralı çalıştırıyor. Oysa FAZ 5'in tek gerçek bağımlılığı FAZ 0'ın ürettiği `anchors` listesi — FAZ 2-4'ün (cloze kart üretim döngüsü) bitmesini beklemesi gerekmiyor. **FAZ 0 bittikten hemen sonra FAZ 2-4 (cloze) ve FAZ 5 (karşılaştırma) iki bağımsız `asyncio` görevi olarak paralel başlatılabilir** — iki ayrı notebook_id, iki ayrı MCP konuşma bağlamı olduğu için çakışma riski düşük. Bu, ünite başına toplam süreyi kabaca yarıya indirebilir.

Diğer bakılabilecek noktalar:
- `notebooklm_mcp_parallel.py` dosyasında zaten çoklu-port/çoklu-defter paralel çalıştırma deseni var (exhaust pipeline için) — aynı desen cloze pipeline'a uyarlanabilir mi?
- `INTER_BATCH_COOLDOWN` (5s) ve `COOLDOWN_BETWEEN_UNITS` (25s) sabitleri muhtemelen Google'ın dokümante edilmemiş rate-limit'ine karşı konmuş — bunları agresifçe düşürmeden önce gerçek rate-limit davranışını (429/503 sıklığı) ölçmek gerekir; körlemesine küçültme önerilmez.
- Embedding + Pinecone upsert şu an her batch sonunda senkron yapılıyor; bir sonraki NotebookLM sorgusu bu I/O'yu beklemeden başlayabilir mi (fire-and-forget + sona toplu bekleme)?
- `CLOZE_CHUNK_SIZE` (25) ve `CONTRAST_CHUNK_SIZE` (30) — daha büyük chunk = daha az round-trip ama Google `INVALID_ARGUMENT` sınırına (~4-5K karakter, `PROMPT_CHAR_LIMIT=9500` olarak ayarlı) yaklaşma riski. Deneysel olarak optimum nokta bulunabilir.

### Görev C: Bug taraması

Pipeline'ın bilinen sınırlamaları ve geçmiş bug kaydı `Cloze Üretim Rehber.md` → **BÖLÜM M (Sorun Giderme Kartı)** ve **BÖLÜM O (Bilinen Sınırlamalar)** içinde. Kod değişikliği yapmadan önce bu iki bölümü oku — tekrar keşfedilmiş bir bug'ı düzeltmek yerine gerçekten yeni bir şey bulmaya odaklan.

---

## 4. Dosya Haritası (tam yollar)

```
C:\Users\FURKAN\Desktop\Projeler\DUSBANKASI\
├── Cloze Üretim Rehber.md                              ← TAM REFERANS (BÖLÜM S = bugünkü değişiklik kaydı)
├── notebooklm_cloze_system_prompt_v4.md                 ← Görev A hedefi
├── ANKİ KARŞILAŞTIRMA NOTEBOOKLM MASTERPROMPT_v3.txt    ← Görev A hedefi
├── karşılaştırma örnek.txt                              ← kalite referansı
├── scripts\
│   ├── config.py                                        ← CONTRAST_NOTEBOOK_ID burada
│   ├── notebooklm_mcp_cloze.py                          ← Görev B hedefi (process_unit_cloze)
│   ├── cloze_shared.py                                  ← runtime prompt builder'lar, validasyon
│   └── notebooklm_mcp_parallel.py                       ← mevcut paralel çalıştırma deseni (referans)
└── C:\Users\FURKAN\Desktop\DUS\Radyoloji\radyo anki\4.ünit\4cloz.txt   ← gerçek üretim çıktısı örneği
```

---

## 5. Beklenen Teslimat

1. İki sistem promptu için somut, satır/bölüm referanslı iyileştirme önerileri (veya doğrudan düzeltilmiş dosya).
2. FAZ 2-4 / FAZ 5 paralelleştirmesi dahil, ölçülebilir hızlanma sağlayacak kod değişikliği (mevcut retry/hata yönetimi davranışını bozmadan).
3. Varsa bulunan yeni bug'lar için kısa açıklama + düzeltme.

Değişiklik yaparken `Cloze Üretim Rehber.md`'yi güncel tut — bu dosya projenin tek referans kaynağıdır.
