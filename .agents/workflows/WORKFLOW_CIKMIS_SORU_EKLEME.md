# Çıkmış Soru Çıkarma ve İçe Aktarma İş Akışı (v2.0)

> Bu iş akışı; çıkmış DUS ve TUS sınav sorularını Markdown (`.md`), metin veya kitap formatından eksiksiz biçimde ayrıştırmak, kanonik müfredat ünitelerine sınıflandırmak, JSON formatına dönüştürmek, 1536-dim çift embedding vektörleri üretmek ve Supabase veritabanına `quality_flag = 'cikmis'` ile sıfır kayıpla aktarmak için standartlaştırılmış operasyonel kılavuzdur.

---

## ⚡ 1. TEMEL DEĞİŞMEZLER VE VERİTABANI KURALLARI

1. **`quality_flag = 'cikmis'` Zorunluluğu:**  
   Sistemde çıkmış soruların Çıkmış Modu ekranında (`CikmisSelectionView.tsx`) filtrelenebilmesi ve genel soru havuzunda görünür olması için `quality_flag` alanı KESİNLİKLE tam olarak `"cikmis"` olmalıdır.
2. **Kanonik Ders ve Ünite Adları:**  
   Sorular veritabanına yazılırken `lesson` doğrudan 14 ana ders adından biri (`Biyokimya`, `Protez`, `Pedodonti` vb.) olmalıdır. `unit` ise `src/config/canonicalUnits.ts` içerisindeki `CANONICAL_UNITS[lesson]` listesindeki resmi ünite adıyla **birebir, harfi harfine** eşleşmelidir.
3. **Sınav Dönemi Metası (`flag_reason`):**  
   Veritabanında `metadata` JSON kolonu bulunmadığından, sınav yılı ve dönemi (`2018 DUS Orijinal`, `2014 Sonbahar TUS` vb.) soru kökünden ayıklanarak `flag_reason` kolonunda saklanır. Soru kökü temiz tutulmalıdır.
4. **Çift Vektör Zorunluluğu:**  
   Her sorunun hem soru kökü (`stem_embedding`) hem de detaylı açıklaması (`explanation_embedding`) OpenAI `text-embedding-3-large` (1536 boyut) ile vektörlenmelidir.
5. **10'arlı Chunked Yazım:**  
   Embedding vektörleri içeren büyük paketlerde Supabase REST API HTTP 500 hatası verir. Bu nedenle yazımlar kesinlikle 10'arlı gruplar (`_SUPABASE_WRITE_CHUNK = 10`) halinde exponential backoff ile yapılmalıdır.
6. **Çift Konumlu JSON Arşivleme:**  
   Oluşturulan ünite bazlı JSON dosyaları ve konsolide özet JSON hem kullanıcının yerel klasörüne (`.../<ders>/çıkmış json/`) hem de projenin `scripts/data/cikmis_<ders>/` dizinine kaydedilmelidir.

---

## 🛠️ 2. PARSER V2 — BİÇİMSEL DAYANIKLILIK VE FORMAT ÇÖZÜMLERİ

Gerçek sınav sorularının yer aldığı dosyalarda standart dışı markdown yapıları sıklıkla görülür. Parser aşağıdaki tüm varyasyonları tolere edecek şekilde kurgulanmalıdır:

### A. Markdown Tablosu Olarak Verilen Şıklar
Bazı dosyalarda şıklar standart alt alta satırlar yerine Markdown tablosu şeklinde dizilmiştir:
```markdown
| | Düzlem | Eksen |
|---|---|---|
| A) | Horizontal | Sagital |
| B) | Sagital | Horizontal |
```
* **Çözüm:** Parser tablo formatını (`\|\s*([A-E])[\)\.]\s*\|(.*?)\|`) otomatik algılamalı; hücreleri aralarına anlamlı bir tire koyarak birleştirmelidir:  
  `options["A"] = "Horizontal — Sagital"`  
* Soru kökünde kalan tablo başlık satırları (`| | Düzlem | Eksen |`) soru kökünden temizlenmelidir.

### B. Doğru Cevap Satırı Varyasyonları
Doğru cevap satırında görülen tüm varyasyonlar tek bir sağlam regex ile yakalanır:
* `**Doğru Cevap:** **D**` (Çift kalın)
* `**Doğru Cevap:** Cevap C` ("Cevap" kelimesi içeren)
* `**Doğru Cevap:** **A) Peptid bağı**` (Şık harfi ve şık metni birlikte)
* `**Doğru Cevap) B` (İki nokta yerine parantez kullanılan)
* `Doğru Cevap: ...` (Kalınlaştırma olmayan)

**Dayanıklı Regex:**
```python
r"(?:\*\*|__)?\s*Doğru\s*(?:Cevap|Yanıt)\s*(?:\*\*|__)?\s*[:\)]\s*(?:\*\*|__)?\s*(?:Cevap\s*)?(?:\*\*|__)?\s*([A-Ea-e])"
```

### C. Açıklama Başlıkları
* `**Açıklama:**`
* `**Detaylı Açıklama:**`
* `#### Açıklama:`
* `Açıklama:`

**Dayanıklı Regex:**
```python
r"(?:\*\*|__)?\s*(?:#{2,4}\s*)?(?:Detaylı\s*)?Açıklama\s*(?:\*\*|__)?\s*:\s*\n?(.*?)(?=\n---\s*|\Z)"
```

### D. Öncüllü Sorularda Eksik Şıkların Tamamlanması
Bazı öncüllü çıkmış sorularda kaynak dosyada yalnızca doğru cevap ve birkaç şık yazılmış, D veya E şıkları eksik bırakılmış olabilir.
* **Kural:** Sistemde eksik şıklı soru bırakılamaz. Orijinal ÖSYM soru metnine sadık kalarak eksik öncül kombinasyonları (`D) II ve IV`, `E) I, II ve III` vb.) şıklara tamamlanmalı ve 5 şık kuralı (A–E) sağlanmalıdır.

### E. Soru Kökü ve Sınav Metası Temizliği
* Başlıktaki veya soru kökünün sonundaki `(2018 DUS)`, `(2014 Sonbahar TUS)` parantezleri ayıklanır.
* Soru kökünün başında kalan `**Soru:**` veya etraftaki `**` kalınlaştırma karakterleri temizlenir.
* Öncüllü sorulardaki Romen rakamları (I. II. III.) soru köküyle birlikte eksiksiz korunur.

---

## 🎯 3. KANONİK ÜNİTEYE SINIFLANDIRMA VE SUBSTRING TUZAKLARI

Kitap veya fasikül formatındaki ardışık numaralı sorular (örn. 1-568) kanonik ünitelere dağıtılırken şu ilkelere uyulur:

1. **Substring Tuzağı Uyarısı (Kritik):**  
   Düz substring araması (`if "day" in text:`) asla yapılmamalıdır! Örn: `12-Çalışma Modelleri ve Day` ünitesi için `"day"` arandığında, sabit protezlerdeki yüzlerce `"dayanak"` sorusu yanlış üniteye çekilir.  
   **Çözüm:** Kesinlikle regex kelime sınırları (`\bday\b`) kullanılmalı ve anahtar kelimeler klinik bağlamına göre önceliklendirilmelidir:
   - `05-Eksik Diş Varlığında Tedavi Planlaması`: dayanak, ante kuralı, pier abutment, köprü planlaması, kantilever.
   - `12-Çalışma Modelleri ve Day`: çalışma modeli, hareketli day, güdük, pindex, alçı modeli.
   - `10-Sıvı ve Yumuşak Doku Kontrolü`: retraksiyon kordu, dişeti oluğu sıvısı, hemostatik ajan.

2. **Kanonik Liste Karşılığı:**  
   Belirlenen ünite isimleri `scripts/canonical_units.json` ve `src/config/canonicalUnits.ts` içindeki listeyle %100 örtüşmelidir.

---

## 🚫 4. KALİTE KAPISI MUAFİYETLERİ (BYPASS)

`shared.py` içerisindeki `validate_question_batch` ve `_validate_single_question` fonksiyonları, `quality_flag == 'cikmis'` olduğunda şu filtreleri **otomatik olarak bypass eder**:
* `kisa_stem` (Kısa soru gövdesi)
* `ai_dolgu_cumlesi` (AI dolgu kelimeleri)
* `kaynak_sizintisi` ("Metne göre / kitaba göre" ifadeleri)
* `bilgi_sizintisi` (Doğru cevabın soru kökünde geçmesi)
* `zayif_aciklama` (Kısa/öz açıklamalar)

> [!WARNING]
> Çıkmış sorulara ASLA yapay zeka kürasyonu, eleme, silme veya smart audit (`--audit`) uygulanmaz! Sorular tarihsel sınav gerçeğidir; yalnızca biçimsel doğruluğu (A-E şık, doğru cevap, açıklama) garanti edilir.

---

## 📋 5. STANDART İTHALAT PROTOKOLÜ (PYTHON CLI)

Çıkmış soru aktarımı için `scripts/import_<ders>_cikmis.py` dosyası yazılır ve şu adımlarla çalıştırılır:

```powershell
# 1. Biçimsel test ve ayrıştırma doğrulaması (sıfır kayıp probe'u)
python scripts/import_<ders>_cikmis.py

# 2. Canlı veritabanı probe'u (soru sayısı ve embedding kontrolü)
python -c "import sys, urllib.parse; sys.path.insert(0, 'scripts'); import shared; print(len(shared.supabase_get('questions?select=id&lesson=eq.<DERS>&quality_flag=eq.cikmis&limit=1000')))"

# 3. Test paketinin çalıştırılması
npm test -- --run
```

---

## 📌 Genel `quality_flag` Referans Tablosu

| `quality_flag` Değeri | Açıklama | App İçi Görünürlük |
|---|---|---|
| `NULL` / `None` | Standart Kaliteli Üretim Sorusu | **EVET** (Genel Soru Havuzu) |
| `"high_yield"` | Yüksek Verimli Özel Çalışma Sorusu | **EVET** (High Yield Çalışma Havuzu) |
| `"cikmis"` | Gerçek Çıkmış DUS/TUS Sınav Sorusu | **EVET** (Çıkmış Sorular & Genel Havuz) |
| `"reviewed_keep"` | Manuel İncelenip Onaylanmış Soru | **EVET** (Genel Soru Havuzu) |
| `"high_quality"` *(YASAK)* | DB varsayılanı (Eski/Hatalı) | **HAYIR** (Ön yüz filtresi reddeder!) |
| `"kavramsal_kopya"` | Mükerrer / Kopya İşaretli Soru | **HAYIR** (Filtrelenir) |
