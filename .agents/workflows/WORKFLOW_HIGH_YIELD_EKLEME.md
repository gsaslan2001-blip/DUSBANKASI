# High Yield Soru Ekleme İş Akışı

Bu iş akışı, özel çalışma havuzlarına veya denemelere ait yüksek verimli (high_yield) soruların Supabase veritabanına doğrudan eklenmesi süreçlerini standartlaştırmak için oluşturulmuştur.

> [!WARNING]
> Frontend istatistik ve filtre mekanizması, `quality_flag` alanının TAM OLARAK `high_yield` olmasını bekler. `highyield`, `HighYield` gibi farklı yazımlar, soruların UI üzerinde görünmemesine veya istatistik filtrelerini bozmasına sebep olur. AJAN HATA YAPMAMALIDIR.

## Ön Koşullar ve Kurallar
1. Soru metni özel ayrıştırma (parsing) gerektiriyorsa özel bir parser yazılmalıdır (örn: `upload_ortodonti_5.py`).
2. Soru `_write_to_supabase` veya `deploy_to_supabase` kullanılarak yazılıyorsa, KESİNLİKLE `quality_flag='high_yield'` argümanı gönderilmelidir.
3. Ölüm Maçı (smart_audit_pipeline.py) gibi kopyaları filtreleyen adımlar, High Yield soruları için KULLANILMAZ.
4. Çıktıda Romen Rakamları veya özel karakter uyuşmazlığı nedeniyle soru kaybı yaşanıyorsa, `universal_parser.py` gibi standart scriptler kullanılabilir. Ancak `quality_flag` değeri `high_yield` olmak zorundadır.

## Standart Parser ile Yükleme

Ajan, serbest metni JSON formatına dönüştürüp `add_questions.py` aracını kullanabilir veya kendi parsing scriptini yazabilir. Her iki durumda da:

```python
# KESİNLİKLE UYGULANMASI GEREKEN KULLANIM
from scripts.shared import _write_to_supabase

# Soruları hazırladıktan sonra:
success = _write_to_supabase(
    questions=questions_list,
    lesson_name="Ortodonti",
    unit_name="Ünite 5 - Ortopedik Etkili Apareyler",
    quality_flag="high_yield"  # <--- DİKKAT: Tam olarak böyle yazılmalıdır!
)
```

## Doğrulama Adımı
Yükleme tamamlandıktan sonra, ajan Supabase'deki veriyi kontrol etmeli veya kullanıcıdan UI üzerinden kontrol etmesini istemelidir. İlgili soruların doğru filtrede görünmesi için kodun `high_yield` gönderdiğinden KESİN EMİN olunmalıdır.

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

## Çoklu `<questions_json>` TXT İçe Aktarma Kuralı

Gemini çıktı klasörlerinden ünite soruları aktarılırken tek TXT dosyası tek JSON bloğu
varsayılmayacaktır. Ajan şu sırayı izler:

1. Hedef aralıktaki tüm TXT dosyalarını ve dosya içindeki **tüm**
   `<questions_json>...</questions_json>` bloklarını bulur; blokları birleştirir.
2. Ham satır sonlarını ve JSON kaçış hatalarını düzelterek kanonik soru şemasına
   (`lesson`, `unit`, `question`, `option_a`–`option_e`, `correct_answer`,
   `explanation`) dönüştürür. Bozuk tek nesne tüm dosyayı düşürmez; nesne ayrı
   raporlanır ve diğer geçerli nesneler korunur.
3. Her dosyada en az 30 soru hedefini kontrol eder. 30 altındaysa önce dosyanın
   diğer JSON blokları ve bozuk nesneleri incelenir; veri gerçekten yoksa ajan
   sayı uydurmaz ve ekleme öncesi raporlar.
4. `add_questions.py` ile kalite kapısı, embedding üretimi ve 10'lu Supabase
   yazımı çalıştırılır. Aynı ünite daha önce kısmen yazılmışsa dosya tekrarının
   mükerrer oluşturmasına izin verilmez; mevcut soru kökleriyle karşılaştırılır.
5. Kalite kapısından reddedilenler kaybolmaz. Kullanıcı açıkça eklenmesini
   isterse reddedilen zarf kayıtları (`scripts/recovery/rejected`) ünite bazında
   çıkarılır, mükerrerleri elenir ve `quality_flag="reviewed_keep"` ile ayrı
   provenance korunarak yazılır. Normal kalite kapısı otomatik olarak bypass
   edilmez.
6. Sonunda Supabase ünite-soru sayıları, eklenen/reddedilen/mükerrer sayıları ve
   embedding durumları doğrulanarak kısa devir raporu verilir.
