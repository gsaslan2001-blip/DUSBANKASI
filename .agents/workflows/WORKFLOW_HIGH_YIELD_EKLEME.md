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
