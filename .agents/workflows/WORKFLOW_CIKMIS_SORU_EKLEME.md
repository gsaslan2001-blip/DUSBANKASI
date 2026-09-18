# Çıkmış Soru Çıkarma ve İçe Aktarma İş Akışı (v1.0)

Bu iş akışı, NotebookLM üzerinde yüklü olan kitaplardan (örneğin 1+2 formatında: 1 çıkmış, 2 benzer soru) gerçek çıkmış DUS sınav sorularını ("orijinal" etiketli) alıp Supabase veritabanına `quality_flag = 'cikmis'` ile sıfır kayıpla aktarma sürecini standartlaştırmak için oluşturulmuştur.

> [!IMPORTANT]
> Sistemde çıkmış soruların istatistiklere doğru yansıması ve app içinde filtrelerden dışlanmaması için `quality_flag` alanı KESİNLİKLE tam olarak `"cikmis"` olmalıdır.

---

## 1. NotebookLM Soru Çıkarma Protokolü

Kitaplarda çıkmış sorular genellikle `(... Orijinal)` etiketi taşır. Her ünite için NotebookLM'e gönderilecek standart prompt şablonu şudur:

```text
"<Ünite/Alt Başlık Adı>" alt başlığı altındaki tüm orijinal etiketli soruları soru, şıklar, doğru cevap ve açıklaması ile listele.
```

**Beklenen Yanıt Formatı:**
NotebookLM'in soruları şu standartta döndürmesi beklenir (farklı markdown varyasyonları parser tarafından tolere edilir):
```text
**1. Soru 325**
Soru gövdesi metni buraya gelir... (... Orijinal)

A) Şık A metni
B) Şık B metni
C) Şık C metni
D) Şık D metni
E) Şık E metni

Doğru Cevap: D
Açıklama: Açıklama metni buraya gelir...
```

---

## 2. Ham Logların Kaydedilmesi

NotebookLM'den alınan yanıtlar, API harcamalarını engellemek ve işlemi deterministik kılmak için **mutlaka** yerel bir dosyaya kaydedilmelidir.
* **Klasör:** `scripts/logs/`
* **Dosya Adı Formatı:** `cikmis_<ders_adı>_<UNITE_ADI_YILAN_YAZIM>.txt`
* *Örnek:* `scripts/logs/cikmis_pedo_SUT_VE_SUREKLI_DIS_EMBRIYOLOJISI.txt`

---

## 3. Parser v2 Standartları (OCR / Markdown Dayanıklılığı)

NotebookLM çıktılarında sıklıkla kalın başlık kaymaları, Romen rakamlı sıralamaların bölünmesi ve `O)` / `□)` gibi OCR hataları yaşanır. Aşağıdaki regex kalıpları (Parser v2) bu hatalara dayanıklıdır:

1. **Soru Gövdesi (Stem):** Sorunun başlangıcından ilk şık olan `A)` satırına kadar olan kısmı bütün halinde alır. Başlıktaki soru numarasını temizler.
2. **Şık Toleransı:** D şıkkı için `[DO□▢]` karakterlerini, E şıkkı için `[E]` karakterlerini ve `)`, `}`, `]` gibi farklı parantezleri destekler.
3. **Açıklama Yakalama:** `Açıklama:` veya `Not:` kelimelerinden başlayıp bir sonraki soruya (`\n**\d+`) veya metin sonuna kadar olan tüm bloğu alır.

---

## 4. Kalite Kapısı Muafiyetleri (Bypass Kuralları)

Normal yapay zeka üretimlerinde kullanılan katı sızıntı filtreleri gerçek sınav soruları için false-positive (hatalı elenme) üretir. 
`shared.py` içerisindeki `validate_question_batch` ve `_validate_single_question` fonksiyonları, eğer `quality_flag == 'cikmis'` ise veya ders adında `cikmis`/`çıkmış` geçiyorsa şu filtreleri **otomatik olarak bypass eder**:

* `kisa_stem` (kısa soru gövdesi)
* `ai_dolgu_cumlesi` (AI motivasyonel kelimeleri)
* `kaynak_sizintisi` ("kaynağa göre/metne göre" ifadeleri)
* `bilgi_sizintisi` (doğru cevabın soru gövdesinde geçmesi)
* `zayif_aciklama` (açıklamanın soru gövdesini tekrarlaması)

---

## 5. Mükerrerliği Önleme & Sıfırdan Yükleme

Supabase doğrudan INSERT yaptığı için, scriptin birden fazla kez çalıştırılması durumunda sorular mükerrer (duplicate) hale gelir. Bu yüzden import öncesinde ilgili derse ait eski sorular veritabanından silinmelidir.

### Silme Sorgusu (HTTP DELETE):
```http
DELETE https://<SUPABASE_URL>/rest/v1/questions?lesson=eq.Pedodonti%20Cikmis
Headers:
  apikey: <SUPABASE_KEY>
  Authorization: Bearer <SUPABASE_KEY>
```

---

## 6. Örnek Python Import Kodu

Aşağıdaki şablon kod, kaydedilen log dosyalarını okur, parser v2 ile ayrıştırır, bypass kurallarını işletir ve Supabase'e yazar:

```python
import sys
import os
import re
from shared import deploy_to_supabase, _validate_single_question

# 1. Log dosyasını oku
with open("scripts/logs/cikmis_pedo_UNITE.txt", "r", encoding="utf-8") as f:
    text = f.read()

# 2. Parser v2 ile parse et
questions = parse_cikmis_response(text)

# 3. Kalite kapısından geçir (cikmis flag ile)
valid_questions = []
for q in questions:
    ok, reason = _validate_single_question(q, quality_flag="cikmis")
    if ok:
        valid_questions.append(q)

# 4. Supabase'e yaz
if valid_questions:
    deploy_to_supabase(
        questions=valid_questions,
        lesson_name="Pedodonti Cikmis",
        unit_name="Ünite Adı",
        quality_flag="cikmis"
    )
```

---

## 📌 Genel `quality_flag` Referans Tablosu (Frontend Görünürlük Rehberi)

| `quality_flag` Değeri | Açıklama | App İçi Görünürlük |
|---|---|---|
| `NULL` / `None` | Standart Kaliteli Üretim Sorusu | **EVET** (Genel Soru Havuzu) |
| `"high_yield"` | Yüksek Verimli Özel Çalışma Sorusu | **EVET** (High Yield Çalışma Havuzu) |
| `"cikmis"` | Gerçek Çıkmış DUS Sınav Sorusu | **EVET** (Çıkmış Sorular & Genel Havuz) |
| `"reviewed_keep"` | Manuel İncelenip Onaylanmış Soru | **EVET** (Genel Soru Havuzu) |
| `"high_quality"` *(YASAK)* | DB varsayılanı (Eski/Hatalı) | **HAYIR** (Ön yüz filtresi reddeder!) |
| `"kavramsal_kopya"` | Mükerrer / Kopya İşaretli Soru | **HAYIR** (Filtrelenir) |

