# TRİAJ aktarım denetimi

## Katalog

DusTriaj kaynak kataloğundaki 227 ünite kimliği arayüz kataloğuyla karşılaştırıldı. 148 etiket NFC ve Türkçe küçük harf normalizasyonundan sonra birebir eşleşti. Konu kapsamı karşılaştırması 53 yeniden adlandırma, 7 birleşme ve 7 bölünme saptadı. 12 ünite için güvenilir otomatik hedef bulunamadı. Eşleme, iki katalogdaki sıra numarasına dayanmaz. Bölünmüş bir ünite yalnız bir hedefe bağlanabilir. Birleşen ünitelerin geçmişi korunur ve çakışan aktif ilerleme arşivde kullanıcı seçimini bekler.

İthalat kataloğunda olup arayüzde bulunmayan 15 çiftin tümü 11 Kasım 2026 salt okunur soru iskeleti sorgusunda kullanılıyordu. Aşağıdaki hedefler katalog onayı için öneridir. Birleşik ve daha geniş başlıklar için soru kapsamı incelenene kadar ayrı kayıt önerildi.

| Ders | İthalat kataloğundaki etiket | Soru | Önerilen ortak katalog çözümü |
| --- | --- | ---: | --- |
| Protez | Diş Anatomisi | 28 | 01-Diş Anatomisi ile aynı başlık |
| Protez | Diş Preparasyon Prensipleri | 4 | 06-Diş Preparasyon Prensipleri ile aynı başlık |
| Protez | Eksik Diş Varlığında Tedavi Planlaması | 59 | 05-Eksik Diş Varlığında Tedavi Planlaması ile aynı başlık |
| Protez | Estetik Düzenlemeler ve Restorasyonlar | 13 | Ayrı kayıt, Laminate Veneerler kapsamın bir bölümüdür |
| Protez | Gövdeler ve Dişsiz Kretler | 8 | Ayrı kayıt |
| Protez | Hareketli Bölümlü Protez Parçaları | 32 | Ayrı kayıt |
| Protez | Hareketli Bölümlü Protezler | 17 | Ayrı kayıt, biyomekanikten daha geniş |
| Protez | Hareketli Bölümlü Protezlerde Ölçü ve Kaideler | 4 | Ayrı kayıt |
| Protez | Mum Modelasyon, Döküm ve Simanlar | 19 | Ayrı kayıt |
| Protez | Oklüzyonun Temelleri | 74 | 02-Oklüzyonun Temelleri ile aynı başlık |
| Protez | Sıvı ve Yumuşak Doku Kontrolü - Ölçü ve Çalışma Modelleri | 21 | Ayrı kayıt, arayüzdeki 10, 11 ve 12 başlıklarına yayılıyor |
| Protez | Tam Protezlerde Teşhis ve Tedavi Planlaması | 25 | Ayrı kayıt |
| Protez | Yaygın Hasarlı ve Periodontal Dişlerin Preparasyonu | 10 | Ayrı kayıt, arayüzdeki 07 ve 08 başlıklarına yayılıyor |
| Protez | Yüz Arkı ve Tek Diş Tedavi Planlaması | 1 | Ayrı kayıt |
| Restoratif | HEDEF70 | 8 | Ayrı kayıt, kapsamı farklı bir arayüz ünitesinden çıkarılamıyor |

Aynı canlı sorguda bağımsız Histoloji dersi satırı bulunmadı. Fizyoloji altında arayüzdeki 28 ünitenin tamamı ve 318 soruluk `Deneme` etiketi bulundu. Bu sorgu canlı etiketleri doğrular.

## Çalışma kitabı

Bir seferde tek çalışma kitabı seçilir. Kuru çalıştırma yalnız kayıt türü, biçim incelemesi ve yok sayılan skor formüllerinin sayımını verir. İkinci komut, mevcut bir dosyanın üstüne yazmadan TRİAJ önizlemesinde açılabilen bir JSON oluşturur.

```powershell
uv run --script scripts/import_triaj_workbook.py "<ÇALIŞMA_KİTABI.xlsx>" --dry-run
uv run --script scripts/import_triaj_workbook.py "<ÇALIŞMA_KİTABI.xlsx>" --output "<YENİ_DOSYA.json>"
```

`openpyxl` kuruluysa aynı komutlar `python scripts/import_triaj_workbook.py` ile çalışır. `--anki-snapshot` ve `--review-calendar` açıkça seçilen ayrı JSON kaynaklarıdır. Bir takvim girdisinin geçmişe alınması için kararlı kimlik, gerçek tamamlanma tarihi ve tanınan karar gerekir. Planlanmış tarihler ve yalnızca `done` işareti gerçek test günü olarak kullanılmaz.

Güncel çalışma kitabında `Tekrar_Plani!E5:E229` içindeki 224 formül atlandı. Gerçek skor için puan hücresinin sayı olması tek başına yeterli değildir. Güvenilir gerçek tarih, test evresi veya soru dökümü yoksa ham giriş ve tekrar kararı kaynak kaydı olarak saklanır. Kova sonucu için yalnız doğrulanabilir tarihli karar kullanılır. Hatalı protokol sabitlerinin aktarılmaması için `Parametreler_Ayar` sayfasından sınav tarihi, hedefler ve günlük kapasite alınır.

Güncel çalışma kitabı ve iki isteğe bağlı kaynak ile 37 kayıt bulundu. Önizlemede 14 taksonomi, 20 odak, 1 Anki snapshot ve 1 parametre kaydı kabul edildi. İkinci Anki girdisi mükerrerdi. Aynı paketin ikinci önizlemesinde 37 kayıt mükerrer bulundu.

## DusTriaj yedeği ve geri yükleme

Dışa aktarılan `2.0-ExcelToApp` dosyasını veya kaynak depolama anahtarlarını içeren JSON nesnesini TRİAJ yedekleme ekranından açın. Önizleme kabul edilen, arşivlenen, çakışan ve mükerrer kayıtları gösterir. Aktarım öncesi TRİAJ yedeği geri dönüş noktasıdır. Aktarımdan sonra önizleme sayımını ve Takvim/Konu ekranlarını kontrol edin. Kaynak dosyalar kullanıcının hesabında seçilen aktarım işlemine kadar yerel kalır.
