Sen DUSBANKASI'nın baş klinik denetmeni ve medikal yapay zeka KARAR VERİCİSİSİN (Ölüm Maçı hakemi).
Diş Hekimliği Uzmanlık Sınavı (DUS) standartlarına hakim, titiz bir akademisyensin. Kararların bir soru bankasından KALICI SİLME ile sonuçlanır; bu yüzden son derece dikkatli ve gerekçeli ol.

GÖREV: Birbirine benzeyen iki DUS sorusunu kıyasla ve veritabanında HANGİSİNİN KALACAĞINA karar ver.
AMAÇ: Aynı bilgiyi neredeyse aynı SORU KÖKÜYLE tekrar sorgulayan kopyaları temizlemek; ama aynı konuyu FARKLI bir açıdan/zorlukta sorgulayan değerli varyasyonları KORUMAK.

Sana yalnızca DEĞERLENDİRİLECEK üçlü verilir: SORU KÖKÜ + DOĞRU ŞIK + AÇIKLAMA. Çeldirici (yanlış) şıklar bilinçli olarak verilmez; aynı çeldiricinin başka soruda olması bilgi tekrarı değildir, kararını yalnızca bu üçlüye dayandır.

═══ KOPYA TANIMI (en kritik kural) ═══
İki soru ancak şu durumda KOPYADIR: SORU KÖKÜ aynı bilgi parçasını, aynı yönelimle soruyor VE doğru şık aynı kavramı işaret ediyor.
  • Soru kökleri farklı kelimelerle yazılmış olsa bile AYNI tek gerçeği soruyorsa → KOPYA.
  • Soru kökleri benzer kelimeler içerse bile FARKLI bir alt-kavramı/yönelimi sorguluyorsa → KOPYA DEĞİL (keep_both).
Yani 'kavram benzerliği' tek başına kopya yapmaz; belirleyici olan AYNI SORUNUN tekrar sorulup sorulmadığıdır.

═══ DEĞERLENDİRME RUBRİĞİ (öncelik sırasıyla) ═══
1. AYNI SORU MU: İki soru kökü + doğru şık birlikte AYNI gerçeği mi test ediyor? (Yukarıdaki kopya tanımını uygula.)
2. KLİNİK DERİNLİK: Yaş/cinsiyet/anamnez/bulgu/radyoloji/laboratuvar içeren gerçek klinik vaka kurgusu en değerli soru tipidir; düz ezber/tanım sorusunu yener.
3. AÇIKLAMA ÖĞRETİCİLİĞİ: Açıklama doğru cevabın mekanizmasını gerçekten öğretiyor mu? Soru kökünü tekrarlayan totolojik açıklama zayıftır.
4. DİL SAĞLIĞI: Türkçe medikal terminoloji doğru, bozuk karakter (mojibake) yok, akıcı.
5. MUTLAK ELEME: Açıklamasında 'Tebrikler!', 'Bu önemli!', 'Unutmayın' gibi AI motivasyon/dolgu cümleleri olan soru bu boyutta kaybeder.

═══ KARAR SEÇENEKLERİ ═══
- keep_1  : İkisi AYNI soruyu soruyor → 1. soru daha güçlü, 2. elenir.
- keep_2  : İkisi AYNI soruyu soruyor → 2. soru daha güçlü, 1. elenir.
- keep_both: Sorular FARKLI alt-kavram/tip/evre/zıt durum ya da FARKLI bir AÇIDAN/YÖNELİMDEN test ediyor → ikisi de değerli, ikisi de kalır. Örnekler: Tip 1 vs Tip 2, maksiller vs mandibular, akut vs kronik, etyoloji vs tedavi, VE ÖZELLİKLE negatif kök vs pozitif kök ('… değildir?' ile '… nedir?' aynı kavramı sorsa ve aynı doğru cevaba sahip olsa bile FARKLI soru tipidir → keep_both).
- remove_both: İkisi de tıbben hatalı, bozuk veya öğretici değil → ikisi de elenir.

ÖNEMLİ: Emin değilsen ele ALMA. Şüphede kalırsan keep_both seç; yanlış silme, yanlış tutmadan daha pahalıdır.

Aşağıdaki çiftleri sırayla değerlendir ve elenecek soru kodlarını (ID) sebepleri ile birlikte bana ver.


---

### ÇİFT 1 (Benzerlik: 0.79)

**Soru 1 (ID: 51590ae8-07f5-446d-8af8-9e768cf7fe34)**
Soru Kökü: Maksillofasiyal travmalarda kompleks kırık varlığında posteroanterior (PA) veya Water's gibi iki boyutlu grafilerin yetersiz kaldığı durumlarda, üç boyutlu görüntüleme (BT veya KIBT) istenmesinin birincil cerrahi endikasyonu aşağıdakilerden hangisinde en doğru şekilde verilmiştir?
Doğru Şık (B): Yer değiştiren veya rotasyona uğrayan kırık parçalarını net belirlemek ve cerrahi planlama yapmak
Açıklama: Maksillofasiyal travmalarda kırık hatlarının labirent gibi birbirine girdiği (örneğin Le Fort serileri veya nazo-etmoido-orbital kırıklar) kompleks durumlarda, 2 boyutlu grafiler rotasyonu ve milimetrik yer değiştirmeyi maskeler. BT ve KIBT rekonstrüksiyonlarının asıl amacı, rotasyona uğramış kemik fragmanlarının tam deplasman yönünü saptamak ve redüksiyon (cerrahi plak-vida vb.) için doğru planlama yapmaktır.

**Soru 2 (ID: e9aab618-9946-477b-9073-8a8359736929)**
Soru Kökü: Maksillofasiyal fraktürlerin (örn. zigoma, orbita, frontobaziller kırıklar) teşhis ve tedavisinin planlanmasında, iki boyutlu grafilere ek olarak KIBT veya BT gibi üç boyutlu (3D) görüntüleme tekniklerinin tercih edilme nedeni aşağıdakilerden hangisi **değildir**?
Doğru Şık (C): Eşlik eden yumuşak doku laserasyonlarının genişliğinin ve sınırlarının histolojik netlikte haritalanması
Açıklama: BT ve KIBT gibi üç boyutlu görüntüleme yöntemleri, maksillofasiyal travmalarda sert dokudaki kırık hatlarını, yer değiştiren veya rotasyona uğrayan parçaları belirlemek ve cerrahiyi net şekilde planlamak için temel altın standarttır. Ancak bu cihazların birincil amacı dudak veya yanak gibi bölgelerdeki yumuşak doku laserasyonlarının veya yırtıklarının haritalanması değildir; yumuşak doku sınırları doğrudan klinik muayene ile saptanır. KIBT'nin yumuşak doku kontrast rezolüsyonu MR'a kıyasla oldukça zayıftır.

---

### ÇİFT 2 (Benzerlik: 0.77)

**Soru 1 (ID: a112c29b-6aa5-4eb4-b902-4b18713e1e55)**
Soru Kökü: Dentoalveolar travmaların Dünya Sağlık Örgütü (WHO) sınıflamasına göre aşağıdakilerden hangisi "Diş sert dokuları ve pulpa yaralanmaları" ana kategorisinde yer **almaz**?
Doğru Şık (A): Alveoler proses kırığı
Açıklama: Alveoler proses kırığı, WHO sınıflamasında "Destek kemik dokusu yaralanmaları" kategorisinde yer alan bir iskeletsel travmadır. Mine çatlağı, komplike/komplike olmayan kron ve kök kırıkları ise doğrudan "Diş sert dokuları ve pulpa yaralanmaları" başlığı altındadır. Bu durum klinik tedavi planlamasında yumuşak/sert doku stabilizasyon farkını belirler.

**Soru 2 (ID: c74858d4-1499-412c-8d20-acec9e2ffa7a)**
Soru Kökü: Maksillofasiyal fraktürlerle ilgili aşağıdakilerden hangisi Dünya Sağlık Örgütü (WHO) veya klasik anatomik bölge travma sınıflandırmasında bir "dentoalveolar travma" tipi olarak **değerlendirilemez**?
Doğru Şık (C): Sfenoid kemik ve nazo-etmoido-orbital fraktürler
Açıklama: Nazo-etmoido-orbital, frontobaziller veya maksiller sinüs fraktürleri ile Sfenoid kemik hasarları daha geniş kapsamlı olan 'Maksillofasiyal iskelet' fraktürleridir. Dentoalveolar travma tanımı ise dişleri (pulpa/sert doku), destek periodonsiyumu, soket etrafı alveol kemiğini ve doğrudan bu yapılara komşu oral mukozayı/gingivayı kapsar.

---

### ÇİFT 3 (Benzerlik: 0.75)

**Soru 1 (ID: 08bea222-bb1e-4752-ac82-576b15f814ce)**
Soru Kökü: 35 yaşında erkek hasta trafik kazası sonrası maksillofasiyal travma şüphesiyle başvuruyor. İki boyutlu grafilerde tam seçilemeyen kompleks bir Le Fort 1 kırığı tespit ediliyor. Bu vakada Konik Işınlı Bilgisayarlı Tomografi (KIBT) istenmesinin **en olası** birincil amacı aşağıdakilerden hangisidir?
Doğru Şık (B): Yer değiştiren veya rotasyona uğrayan kırık parçalarının belirlenmesi ve cerrahi planlama yapılması
Açıklama: Maksillofasiyal fraktürlerde BT veya KIBT gibi üç boyutlu görüntüleme yöntemleri, özellikle yer değiştiren veya rotasyona uğrayan kırık parçalarının kesin lokalizasyonunu belirlemek için kullanılır. Bu detaylı üç boyutlu anatomik veri, operasyonel cerrahi planlamanın temelini oluşturur. Diskin incelenmesi MR'ın alanına girerken, pulpa vitalitesi hiçbir radyografik teknikle doğrudan değerlendirilemez.

**Soru 2 (ID: 51590ae8-07f5-446d-8af8-9e768cf7fe34)**
Soru Kökü: Maksillofasiyal travmalarda kompleks kırık varlığında posteroanterior (PA) veya Water's gibi iki boyutlu grafilerin yetersiz kaldığı durumlarda, üç boyutlu görüntüleme (BT veya KIBT) istenmesinin birincil cerrahi endikasyonu aşağıdakilerden hangisinde en doğru şekilde verilmiştir?
Doğru Şık (B): Yer değiştiren veya rotasyona uğrayan kırık parçalarını net belirlemek ve cerrahi planlama yapmak
Açıklama: Maksillofasiyal travmalarda kırık hatlarının labirent gibi birbirine girdiği (örneğin Le Fort serileri veya nazo-etmoido-orbital kırıklar) kompleks durumlarda, 2 boyutlu grafiler rotasyonu ve milimetrik yer değiştirmeyi maskeler. BT ve KIBT rekonstrüksiyonlarının asıl amacı, rotasyona uğramış kemik fragmanlarının tam deplasman yönünü saptamak ve redüksiyon (cerrahi plak-vida vb.) için doğru planlama yapmaktır.

---

### ÇİFT 4 (Benzerlik: 0.74)

**Soru 1 (ID: 70ef69f1-5a14-455d-991e-62d2c8fab182)**
Soru Kökü: Şiddetli bir çarpma sonucu üst santral dişinde kuron kırığı meydana gelen 12 yaşındaki hastanın acil müdahalesinde, yumuşak doku tedavisi ve splintleme işlemleri başarıyla tamamlanmıştır. Travma acil uygulama protokolüne göre, bu seansta atılması gereken son adım (3. aşama) aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (B): Ekspoze dentinin korunması veya ekspoze ise pulpa ekstirpasyonu
Açıklama: Travma acil uygulama protokolünün üçüncü ve acil seanstaki son aşaması, pulpal ve dentinal dokuların biyolojik olarak korunmasına yöneliktir. Yumuşak doku müdahalesi (1. aşama) ve splintleme (2. aşama) yapıldıktan sonra, ekspoze dentinin örtülmesi veya komplike kırıklarda pulpanın ekstirpasyonu işlemi uygulanır. Ortodontik ekstrüzyon veya daimi estetik restorasyonlar acil protokolün değil, takip eden ardışık seansların konusudur.

**Soru 2 (ID: 843a018e-92be-4249-ab98-0147d4381d78)**
Soru Kökü: 22 yaşında kadın hasta, düşme sonucu alt çene ön bölgesinden darbe almıştır. Klinik muayenede alt dudakta derin bir laserasyon, 31 ve 41 numaralı dişlerde klinik sallanma (sublüksasyon) ve 41 numaralı dişte pulpayı da içine alan komplike kuron kırığı tespit edilmiştir. Bu hastanın acil tedavisinde izlenmesi gereken doğru işlem sırası aşağıdakilerin hangisinde verilmiştir?
Doğru Şık (A): Dudak laserasyonunun sütüre edilmesi - Splint uygulaması - Pulpa ekstirpasyonu
Açıklama: Travma vakalarında acil müdahale protokolü biyolojik doku hiyerarşisine göre katı bir sıralama izler. Öncelikle genel kanama odaklı olan ve görüş alanını bozan yumuşak doku yaralanmaları (dudak laserasyonu) tedavi edilir (1. aşama). Ardından operasyon sırasında ilave travmayı önlemek için mobil dişlerin stabilizasyonu amacıyla splint uygulanır (2. aşama). En son, stabilize edilmiş diş üzerinde sert doku ve pulpa hasarlarına (pulpa ekstirpasyonu) müdahale edilir (3. aşama).

---

### ÇİFT 5 (Benzerlik: 0.74)

**Soru 1 (ID: 70ef69f1-5a14-455d-991e-62d2c8fab182)**
Soru Kökü: Şiddetli bir çarpma sonucu üst santral dişinde kuron kırığı meydana gelen 12 yaşındaki hastanın acil müdahalesinde, yumuşak doku tedavisi ve splintleme işlemleri başarıyla tamamlanmıştır. Travma acil uygulama protokolüne göre, bu seansta atılması gereken son adım (3. aşama) aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (B): Ekspoze dentinin korunması veya ekspoze ise pulpa ekstirpasyonu
Açıklama: Travma acil uygulama protokolünün üçüncü ve acil seanstaki son aşaması, pulpal ve dentinal dokuların biyolojik olarak korunmasına yöneliktir. Yumuşak doku müdahalesi (1. aşama) ve splintleme (2. aşama) yapıldıktan sonra, ekspoze dentinin örtülmesi veya komplike kırıklarda pulpanın ekstirpasyonu işlemi uygulanır. Ortodontik ekstrüzyon veya daimi estetik restorasyonlar acil protokolün değil, takip eden ardışık seansların konusudur.

**Soru 2 (ID: c04b2673-41f6-4fca-9651-5e3654252db4)**
Soru Kökü: Komplike çoklu travma hastasında, oral dokularda yumuşak doku yırtıkları, dişlerde mobilite gerektiren destek doku hasarı ve açığa çıkmış pulpal kanamalar eş zamanlı izlenmektedir. Dentoalveolar travma vakalarındaki standart acil uygulama prosedürüne göre işlemlerin yapılış sırası aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (E): Yumuşak doku tedavisi -> Splint uygulamaları -> Pulpa ekstirpasyonu
Açıklama: Travma vakalarında acil müdahale algoritması hemostazı ve temel anatomik bütünlüğü önceleyerek başlar. Bu doğrultuda önce yumuşak doku yaralanmalarının dikilmesi/tedavisi yapılır, ardından sarsılmış veya yer değiştirmiş dişlerin stabilizasyonu için splint uygulanır ve son aşamada endodontik gereksinim olan ekspoze dentin/pulpaya müdahale (ekstirpasyon) edilir.

---

### ÇİFT 6 (Benzerlik: 0.73)

**Soru 1 (ID: 859d9ce8-cd98-4fc3-8e70-29e615978806)**
Soru Kökü: 18 yaşındaki erkek hasta, bisiklet kazası sonrası alt dudağında şişlik ve kanama şikayetiyle başvurmuştur. Yapılan intraoral muayenede 31 ve 41 numaralı dişlerde madde kaybı saptanmıştır. Alt dudak palpasyonunda sert bir kitle hissedilmiş, ancak kırık diş parçasının mukoza içine gömülüp gömülmediği klinik olarak kesinleştirilememiştir. Yabancı cismin tespiti için uygulanması gereken **en doğru** radyografik yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (A): Dudak ile dişler arasına dental film yerleştirip ışınlama süresini normalin çeyreğine veya yarısına düşürmek
Açıklama: Yumuşak dokulara (dudak, yanak vb.) gömülen kırık diş parçaları veya yabancı cisimlerin radyografik tespiti için dental filmin dudak ile dişler arasına yerleştirilmesi ve ışınlama süresinin standart sürenin yarısına veya dörtte birine düşürülmesi gerekir. Yüksek standart dozlar yumuşak doku içindeki kalsifiye yapıların kontrastının kaybolup radyografide yanmasına yol açacağından tespitlerini imkansız hale getirir.

**Soru 2 (ID: d5cc71e0-0c9a-4c2d-9b59-bf70abfcf3f6)**
Soru Kökü: 22 yaşındaki erkek hasta, bisiklet kazası sonrası ön dişlerinde ağrı şikayetiyle başvurmuştur. Klinik muayenede 12 numaralı dişin soket doğrultusu dışında, palatinal yöne doğru yer değiştirdiği saptanmıştır. İki boyutlu intraoral grafilerde süperpozisyonlar nedeniyle yaralanmanın şiddeti tam olarak anlaşılamamıştır. Sagital yöndeki hareketin ve eşlik etmesi muhtemel alveol fraktürünün net belirlenebilmesi için bu aşamada istenmesi gereken **en uygun** radyolojik tetkik aşağıdakilerden hangisidir?
Doğru Şık (D): Konik Işınlı Bilgisayarlı Tomografi (KIBT)
Açıklama: Lateral lüksasyon vakalarında dişin sagital yöndeki hareketi ve alveol kırığı varlığı iki boyutlu grafilerde süperpozisyonlar nedeniyle gözden kaçabilir; bu yüzden net saptama ancak KIBT (Konik Işınlı Bilgisayarlı Tomografi) kesitleri aracılığıyla yapılabilir. Okluzal grafiler bu boyutta bir 3D algı yaratamazken, MR sert dokuları (kemik ve diş) değerlendirmede KIBT kadar başarılı değildir.

---

### ÇİFT 7 (Benzerlik: 0.73)

**Soru 1 (ID: 08bea222-bb1e-4752-ac82-576b15f814ce)**
Soru Kökü: 35 yaşında erkek hasta trafik kazası sonrası maksillofasiyal travma şüphesiyle başvuruyor. İki boyutlu grafilerde tam seçilemeyen kompleks bir Le Fort 1 kırığı tespit ediliyor. Bu vakada Konik Işınlı Bilgisayarlı Tomografi (KIBT) istenmesinin **en olası** birincil amacı aşağıdakilerden hangisidir?
Doğru Şık (B): Yer değiştiren veya rotasyona uğrayan kırık parçalarının belirlenmesi ve cerrahi planlama yapılması
Açıklama: Maksillofasiyal fraktürlerde BT veya KIBT gibi üç boyutlu görüntüleme yöntemleri, özellikle yer değiştiren veya rotasyona uğrayan kırık parçalarının kesin lokalizasyonunu belirlemek için kullanılır. Bu detaylı üç boyutlu anatomik veri, operasyonel cerrahi planlamanın temelini oluşturur. Diskin incelenmesi MR'ın alanına girerken, pulpa vitalitesi hiçbir radyografik teknikle doğrudan değerlendirilemez.

**Soru 2 (ID: e9aab618-9946-477b-9073-8a8359736929)**
Soru Kökü: Maksillofasiyal fraktürlerin (örn. zigoma, orbita, frontobaziller kırıklar) teşhis ve tedavisinin planlanmasında, iki boyutlu grafilere ek olarak KIBT veya BT gibi üç boyutlu (3D) görüntüleme tekniklerinin tercih edilme nedeni aşağıdakilerden hangisi **değildir**?
Doğru Şık (C): Eşlik eden yumuşak doku laserasyonlarının genişliğinin ve sınırlarının histolojik netlikte haritalanması
Açıklama: BT ve KIBT gibi üç boyutlu görüntüleme yöntemleri, maksillofasiyal travmalarda sert dokudaki kırık hatlarını, yer değiştiren veya rotasyona uğrayan parçaları belirlemek ve cerrahiyi net şekilde planlamak için temel altın standarttır. Ancak bu cihazların birincil amacı dudak veya yanak gibi bölgelerdeki yumuşak doku laserasyonlarının veya yırtıklarının haritalanması değildir; yumuşak doku sınırları doğrudan klinik muayene ile saptanır. KIBT'nin yumuşak doku kontrast rezolüsyonu MR'a kıyasla oldukça zayıftır.

---

### ÇİFT 8 (Benzerlik: 0.73)

**Soru 1 (ID: 5f132f3e-8624-4ca2-886a-0b1e6529b3bc)**
Soru Kökü: Dental travma olgularında acil başvuru seansında gerçekleştirilen müdahaleler ve bu müdahalelerin ait olduğu aşamalarla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): 2. Aşama - Komplike kuron kırığında açıkta kalan ve kontamine olan pulpanın ekstirpe edilmesi
Açıklama: Travma vakalarında acil uygulama sırasının 2. aşaması münhasıran mekanik fiksasyonu sağlayan splint uygulamalarını kapsar. Komplike kuron kırıklarında açıkta kalan pulpanın ekstirpe edilmesi veya açık dentinin korunması protokolün 3. aşamasında yer alan bir işlemdir. Öğrenciler genellikle endodontik müdahalenin fiksasyondan önce yapılacağı yanılgısına düşer, oysa diş önce mekanik olarak sabitlenmeli, pulpa müdahalesi stabilize dişte yapılmalıdır.

**Soru 2 (ID: c04b2673-41f6-4fca-9651-5e3654252db4)**
Soru Kökü: Komplike çoklu travma hastasında, oral dokularda yumuşak doku yırtıkları, dişlerde mobilite gerektiren destek doku hasarı ve açığa çıkmış pulpal kanamalar eş zamanlı izlenmektedir. Dentoalveolar travma vakalarındaki standart acil uygulama prosedürüne göre işlemlerin yapılış sırası aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (E): Yumuşak doku tedavisi -> Splint uygulamaları -> Pulpa ekstirpasyonu
Açıklama: Travma vakalarında acil müdahale algoritması hemostazı ve temel anatomik bütünlüğü önceleyerek başlar. Bu doğrultuda önce yumuşak doku yaralanmalarının dikilmesi/tedavisi yapılır, ardından sarsılmış veya yer değiştirmiş dişlerin stabilizasyonu için splint uygulanır ve son aşamada endodontik gereksinim olan ekspoze dentin/pulpaya müdahale (ekstirpasyon) edilir.

---

### ÇİFT 9 (Benzerlik: 0.73)

**Soru 1 (ID: 843a018e-92be-4249-ab98-0147d4381d78)**
Soru Kökü: 22 yaşında kadın hasta, düşme sonucu alt çene ön bölgesinden darbe almıştır. Klinik muayenede alt dudakta derin bir laserasyon, 31 ve 41 numaralı dişlerde klinik sallanma (sublüksasyon) ve 41 numaralı dişte pulpayı da içine alan komplike kuron kırığı tespit edilmiştir. Bu hastanın acil tedavisinde izlenmesi gereken doğru işlem sırası aşağıdakilerin hangisinde verilmiştir?
Doğru Şık (A): Dudak laserasyonunun sütüre edilmesi - Splint uygulaması - Pulpa ekstirpasyonu
Açıklama: Travma vakalarında acil müdahale protokolü biyolojik doku hiyerarşisine göre katı bir sıralama izler. Öncelikle genel kanama odaklı olan ve görüş alanını bozan yumuşak doku yaralanmaları (dudak laserasyonu) tedavi edilir (1. aşama). Ardından operasyon sırasında ilave travmayı önlemek için mobil dişlerin stabilizasyonu amacıyla splint uygulanır (2. aşama). En son, stabilize edilmiş diş üzerinde sert doku ve pulpa hasarlarına (pulpa ekstirpasyonu) müdahale edilir (3. aşama).

**Soru 2 (ID: c04b2673-41f6-4fca-9651-5e3654252db4)**
Soru Kökü: Komplike çoklu travma hastasında, oral dokularda yumuşak doku yırtıkları, dişlerde mobilite gerektiren destek doku hasarı ve açığa çıkmış pulpal kanamalar eş zamanlı izlenmektedir. Dentoalveolar travma vakalarındaki standart acil uygulama prosedürüne göre işlemlerin yapılış sırası aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (E): Yumuşak doku tedavisi -> Splint uygulamaları -> Pulpa ekstirpasyonu
Açıklama: Travma vakalarında acil müdahale algoritması hemostazı ve temel anatomik bütünlüğü önceleyerek başlar. Bu doğrultuda önce yumuşak doku yaralanmalarının dikilmesi/tedavisi yapılır, ardından sarsılmış veya yer değiştirmiş dişlerin stabilizasyonu için splint uygulanır ve son aşamada endodontik gereksinim olan ekspoze dentin/pulpaya müdahale (ekstirpasyon) edilir.

---

### ÇİFT 10 (Benzerlik: 0.73)

**Soru 1 (ID: 5f132f3e-8624-4ca2-886a-0b1e6529b3bc)**
Soru Kökü: Dental travma olgularında acil başvuru seansında gerçekleştirilen müdahaleler ve bu müdahalelerin ait olduğu aşamalarla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): 2. Aşama - Komplike kuron kırığında açıkta kalan ve kontamine olan pulpanın ekstirpe edilmesi
Açıklama: Travma vakalarında acil uygulama sırasının 2. aşaması münhasıran mekanik fiksasyonu sağlayan splint uygulamalarını kapsar. Komplike kuron kırıklarında açıkta kalan pulpanın ekstirpe edilmesi veya açık dentinin korunması protokolün 3. aşamasında yer alan bir işlemdir. Öğrenciler genellikle endodontik müdahalenin fiksasyondan önce yapılacağı yanılgısına düşer, oysa diş önce mekanik olarak sabitlenmeli, pulpa müdahalesi stabilize dişte yapılmalıdır.

**Soru 2 (ID: 70ef69f1-5a14-455d-991e-62d2c8fab182)**
Soru Kökü: Şiddetli bir çarpma sonucu üst santral dişinde kuron kırığı meydana gelen 12 yaşındaki hastanın acil müdahalesinde, yumuşak doku tedavisi ve splintleme işlemleri başarıyla tamamlanmıştır. Travma acil uygulama protokolüne göre, bu seansta atılması gereken son adım (3. aşama) aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (B): Ekspoze dentinin korunması veya ekspoze ise pulpa ekstirpasyonu
Açıklama: Travma acil uygulama protokolünün üçüncü ve acil seanstaki son aşaması, pulpal ve dentinal dokuların biyolojik olarak korunmasına yöneliktir. Yumuşak doku müdahalesi (1. aşama) ve splintleme (2. aşama) yapıldıktan sonra, ekspoze dentinin örtülmesi veya komplike kırıklarda pulpanın ekstirpasyonu işlemi uygulanır. Ortodontik ekstrüzyon veya daimi estetik restorasyonlar acil protokolün değil, takip eden ardışık seansların konusudur.

---

### ÇİFT 11 (Benzerlik: 0.72)

**Soru 1 (ID: 43b6935a-aca0-4595-be41-a0fefa2fb902)**
Soru Kökü: 9 yaşındaki kız çocuğu, parkta salıncaktan yüzüstü düşme sonrası üst ön dişinin kaybolduğu şikayetiyle kliniğe getirilmiştir. Hastanın ebeveyni dişi olay yerinde bulamadıklarını belirtmektedir. Klinik muayenede 21 numaralı dişin alveol soketinde bulunmadığı görülmektedir. Alınan KIBT incelemesinde dişin tam kron uzunluğu boyunca apikal yönde yer değiştirdiği ve alveol kemik içine bütünüyle girdiği saptanmıştır. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): İntrüziv lüksasyon
Açıklama: İntrüziv lüksasyon, dişin uzun ekseni boyunca apikal yönde yer değiştirmesidir ve şiddetli olgularda diş tamamen alveol kemiğine gömülerek klinik olarak avülsiyonu taklit edebilir. Avülsiyonda diş soketinden tamamen dışarı çıkarak ayrılırken, bu vakada radyografik olarak kemik içinde tespit edilmesi intrüzyonu kesinleştirir. Travmada bulunamayan dişlerin varlığını doğrulamak için radyografik inceleme bu sebeple hayatidir.

**Soru 2 (ID: a4229df8-655e-4f9c-8456-57fd4d480f2c)**
Soru Kökü: Travmaya uğramış bir dişte travmanın soketinden tamamen ayrılması ile kökün alveol kemiği içerisinde uzun ekseni boyunca apikal yönde yer değiştirmesi, klinik açıdan benzer bir ''dişin yokluğu'' tablosu sergileyebilir. Bu iki tabloyu (Avülsiyon ve İntrüziv lüksasyon) kesin olarak birbirinden ayırt edebilmek için atılması gereken ilk adım aşağıdakilerden hangisidir?
Doğru Şık (D): Alveol soketini radyografik inceleme ile değerlendirmek
Açıklama: Şiddetli intrüziv lüksasyon (intrüzyon) vakalarında diş tüm kuronu boyunca alveol kemiği içine gömülebildiği için klinik olarak ağızda görülmez ve avülsiyonu taklit eder. Dişin kaza yerinde kaybedilip kaybedilmediğini (avülsiyon) veya kemik içine mi itildiğini (intrüzyon) anlamanın tek ve ilk yolu radyografik olarak alveol soketini ve komşu destek kemiklerini incelemektir.

---

### ÇİFT 12 (Benzerlik: 0.72)

**Soru 1 (ID: 08bea222-bb1e-4752-ac82-576b15f814ce)**
Soru Kökü: 35 yaşında erkek hasta trafik kazası sonrası maksillofasiyal travma şüphesiyle başvuruyor. İki boyutlu grafilerde tam seçilemeyen kompleks bir Le Fort 1 kırığı tespit ediliyor. Bu vakada Konik Işınlı Bilgisayarlı Tomografi (KIBT) istenmesinin **en olası** birincil amacı aşağıdakilerden hangisidir?
Doğru Şık (B): Yer değiştiren veya rotasyona uğrayan kırık parçalarının belirlenmesi ve cerrahi planlama yapılması
Açıklama: Maksillofasiyal fraktürlerde BT veya KIBT gibi üç boyutlu görüntüleme yöntemleri, özellikle yer değiştiren veya rotasyona uğrayan kırık parçalarının kesin lokalizasyonunu belirlemek için kullanılır. Bu detaylı üç boyutlu anatomik veri, operasyonel cerrahi planlamanın temelini oluşturur. Diskin incelenmesi MR'ın alanına girerken, pulpa vitalitesi hiçbir radyografik teknikle doğrudan değerlendirilemez.

**Soru 2 (ID: d5cc71e0-0c9a-4c2d-9b59-bf70abfcf3f6)**
Soru Kökü: 22 yaşındaki erkek hasta, bisiklet kazası sonrası ön dişlerinde ağrı şikayetiyle başvurmuştur. Klinik muayenede 12 numaralı dişin soket doğrultusu dışında, palatinal yöne doğru yer değiştirdiği saptanmıştır. İki boyutlu intraoral grafilerde süperpozisyonlar nedeniyle yaralanmanın şiddeti tam olarak anlaşılamamıştır. Sagital yöndeki hareketin ve eşlik etmesi muhtemel alveol fraktürünün net belirlenebilmesi için bu aşamada istenmesi gereken **en uygun** radyolojik tetkik aşağıdakilerden hangisidir?
Doğru Şık (D): Konik Işınlı Bilgisayarlı Tomografi (KIBT)
Açıklama: Lateral lüksasyon vakalarında dişin sagital yöndeki hareketi ve alveol kırığı varlığı iki boyutlu grafilerde süperpozisyonlar nedeniyle gözden kaçabilir; bu yüzden net saptama ancak KIBT (Konik Işınlı Bilgisayarlı Tomografi) kesitleri aracılığıyla yapılabilir. Okluzal grafiler bu boyutta bir 3D algı yaratamazken, MR sert dokuları (kemik ve diş) değerlendirmede KIBT kadar başarılı değildir.

---

### ÇİFT 13 (Benzerlik: 0.72)

**Soru 1 (ID: 08bea222-bb1e-4752-ac82-576b15f814ce)**
Soru Kökü: 35 yaşında erkek hasta trafik kazası sonrası maksillofasiyal travma şüphesiyle başvuruyor. İki boyutlu grafilerde tam seçilemeyen kompleks bir Le Fort 1 kırığı tespit ediliyor. Bu vakada Konik Işınlı Bilgisayarlı Tomografi (KIBT) istenmesinin **en olası** birincil amacı aşağıdakilerden hangisidir?
Doğru Şık (B): Yer değiştiren veya rotasyona uğrayan kırık parçalarının belirlenmesi ve cerrahi planlama yapılması
Açıklama: Maksillofasiyal fraktürlerde BT veya KIBT gibi üç boyutlu görüntüleme yöntemleri, özellikle yer değiştiren veya rotasyona uğrayan kırık parçalarının kesin lokalizasyonunu belirlemek için kullanılır. Bu detaylı üç boyutlu anatomik veri, operasyonel cerrahi planlamanın temelini oluşturur. Diskin incelenmesi MR'ın alanına girerken, pulpa vitalitesi hiçbir radyografik teknikle doğrudan değerlendirilemez.

**Soru 2 (ID: ef510ca6-8a79-4273-87f9-38a4206f709f)**
Soru Kökü: 40 yaşındaki kadın hasta, trafik kazası sonrası alt çenede şiddetli ağrı ve oklüzyon bozukluğu şikayetiyle acil servise getirilmiştir. İki boyutlu grafilerde sol angulus bölgesinde kompleks bir mandibula fraktürü saptanmış, ancak parçaların deplasmanı tam anlaşılamamıştır. Üç boyutlu görüntüleme planlanan bu hastada, sert dokuları görüntüleyebilme kapasitesinin yetersizliği nedeniyle klinik rutinde çene kırığı tespiti için kullanılması **en az olası** olan radyolojik tetkik aşağıdakilerden hangisidir?
Doğru Şık (E): Manyetik Rezonans Görüntüleme (MR)
Açıklama: MR, kemik dokusunun yapısında bulunan yoğun kalsiyum ve düşük su içeriği sebebiyle sinyal üretmekte zayıf kalır ve kortikal kemiği siyah (sinyalsiz) bir boşluk olarak gösterir. Bu nedenle çene ve yüz kemik kırıklarının değerlendirilmesinde BT veya KIBT tercih edilirken; MR sert doku travmalarından ziyade disk veya kas yaralanmalarında endikedir.

---

### ÇİFT 14 (Benzerlik: 0.71)

**Soru 1 (ID: 43b6935a-aca0-4595-be41-a0fefa2fb902)**
Soru Kökü: 9 yaşındaki kız çocuğu, parkta salıncaktan yüzüstü düşme sonrası üst ön dişinin kaybolduğu şikayetiyle kliniğe getirilmiştir. Hastanın ebeveyni dişi olay yerinde bulamadıklarını belirtmektedir. Klinik muayenede 21 numaralı dişin alveol soketinde bulunmadığı görülmektedir. Alınan KIBT incelemesinde dişin tam kron uzunluğu boyunca apikal yönde yer değiştirdiği ve alveol kemik içine bütünüyle girdiği saptanmıştır. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): İntrüziv lüksasyon
Açıklama: İntrüziv lüksasyon, dişin uzun ekseni boyunca apikal yönde yer değiştirmesidir ve şiddetli olgularda diş tamamen alveol kemiğine gömülerek klinik olarak avülsiyonu taklit edebilir. Avülsiyonda diş soketinden tamamen dışarı çıkarak ayrılırken, bu vakada radyografik olarak kemik içinde tespit edilmesi intrüzyonu kesinleştirir. Travmada bulunamayan dişlerin varlığını doğrulamak için radyografik inceleme bu sebeple hayatidir.

**Soru 2 (ID: ac3e8326-a19d-4af2-9745-000e05ca32df)**
Soru Kökü: 35 yaşındaki kadın hasta, yüzüne aldığı darbe sonucu üst ön dişinin uzadığı hissiyle kliniğe başvurmuştur. Muayenede 22 numaralı dişin insizal yönde soketinden bir miktar çıktığı ancak tamamen ayrılmadığı saptanmıştır. Periapikal radyografide apikal bölgede periodontal ligament aralığının belirgin şekilde genişlediği izlenmektedir. Bu klinik ve radyografik tablo aşağıdaki periodontal doku yaralanmalarından hangisiyle uyumludur?
Doğru Şık (A): Ekstrüziv lüksasyon
Açıklama: Dişin insizal yönde, yani kendi soket doğrultusunda dışarı doğru yer değiştirmesine (fakat soketten tamamen ayrılmamasına) ekstrüziv lüksasyon (ekstrüzyon) denir; radyografide dişin soket tabanından uzaklaşmasına bağlı apikal PDL genişlemesi izlenir. Lateral lüksasyonda yer değiştirme aksiyal değildir, avülsiyonda ise diş tamamen kaybedilmiştir.

---

### ÇİFT 15 (Benzerlik: 0.71)

**Soru 1 (ID: 1b00bd6e-56c9-4a42-be42-154037a41e3e)**
Soru Kökü: 12 yaşındaki erkek hasta, okulda düşme şikayetiyle acil kliniğine başvurmuştur. Yapılan klinik muayenede 11 numaralı dişin kuronunda mine ve dentini içeren bir madde kaybı saptanmış, ancak pulpanın açığa çıkmadığı gözlenmiştir. Alınan periapikal radyografide kök kırığına veya periodontal genişlemeye rastlanmamıştır. Bu hastadaki en olası travma tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Komplike olmayan kron kırığı
Açıklama: Komplike olmayan kron kırığı, mine ve dentin dokusunu içeren ancak pulpanın açığa çıkmadığı (kapalı olduğu) dentoalveolar yaralanma tipidir. Komplike kron kırığında ise madde kaybı pulpayı da içine alacak şekilde derindir. Soruda sement dokusu veya pulpa tutulumu belirtilmediği için kron-kök kırığı ve komplike kırık seçenekleri elenir.

**Soru 2 (ID: 6863393f-cd4f-493c-b223-4a10a486b1e2)**
Soru Kökü: Mine-sement birleşiminin altına uzanan ve mine, dentin ile birlikte sementi de içeren, ancak kırık hattının pulpal dokuları kesinlikle İÇERMEDİĞİ dentoalveolar yaralanma tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Komplike olmayan kron-kök kırığı
Açıklama: Komplike olmayan kron-kök kırığı, mine, dentin ve sement dokularında madde kaybı oluşturan ancak pulpanın kapalı kaldığı (açılmadığı) kırıktır. Eğer kırık hattı pulpayı da açığa çıkarsaydı tanı komplike kron-kök kırığı olurdu. Sadece dentin ve sement varsa kök kırığı, sement yoksa kron kırığı olarak isimlendirilir.

---

### ÇİFT 16 (Benzerlik: 0.70)

**Soru 1 (ID: 08694c83-b5b2-462c-b6a2-9ced3adbfe2a)**
Soru Kökü: Kök kırıklarının iki boyutlu radyografik teşhisinde, kökün servikal üçlüsündeki kırıklara göre kökün apikal üçlüsünde meydana gelen kırıkları saptamada daha üstün olduğu belirtilen görüntüleme tekniği aşağıdakilerden hangisidir?
Doğru Şık (E): Okluzal grafi
Açıklama: Periapikal grafiler kökün servikal üçlüsünde meydana gelen kırıkları saptamada başarılı iken, apikal üçlüde meydana gelen yatay yönlü kök kırıklarının teşhisinde okluzal grafilerin x-ışını geliş açısından dolayı daha üstün olduğu belirtilmektedir. Panoramik veya lateral oblik grafiler anterior kök detaylarını incelemek için yetersiz uzaysal çözünürlüğe sahiptir.

**Soru 2 (ID: 20ba24ff-ab7c-42bb-97ff-d3fd9982a872)**
Soru Kökü: Kron-kök kırıklarında, kırık hattının yerleşiminin ve palatinal/bukkal yöndeki apikal uzanımının net olarak saptanabilmesi için önerilen radyolojik yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (B): Üç boyutlu görüntüleme sağlayabilen Konik Işınlı Bilgisayarlı Tomografi (KIBT)
Açıklama: Kron-kök kırıkları genellikle oblik seyreder ve iki boyutlu periapikal grafiler (farklı açılardan alınsa dahi) kırığın palatinal veya bukkal yöndeki derin uzanımını süperpozisyonlar nedeniyle gösteremez. Bu kırıkların cerrahi/restoratif planlaması için kırık sınırlarının ve genişliğinin kesin olarak saptanabilmesi KIBT kullanımı ile önerilmektedir.

---

### ÇİFT 17 (Benzerlik: 0.70)

**Soru 1 (ID: 3eeca1fd-c81b-4a79-b59e-db52f84ddac0)**
Soru Kökü: Konküzyon (sarsılma) tipi periodontal doku yaralanmasıyla ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Radyografik incelemede PDL aralığında belirgin genişleme izlenir.
Açıklama: Konküzyon, dişin destek dokularında minör hasar yaratan ancak yer değiştirmeye veya radyografik bulguya yol açmayan bir durumdur; bu nedenle PDL aralığında genişleme izlenmez. Sublüksasyonda ise dişte yer değiştirme olmamasına rağmen PDL'de yırtılma meydana geldiği için radyografik muayenede PDL aralığında genişleme izlenebilir. Dolayısıyla PDL genişlemesi konküzyonun değil, sublüksasyonun veya lüksasyonların bulgusudur.

**Soru 2 (ID: a65067b4-8c9f-4389-8b6d-87ae373b0f7a)**
Soru Kökü: Sublüksasyon türü dentoalveolar yaralanma ile ilgili olarak aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Klinik muayenede dişte soket doğrultusunda belirgin yer değiştirme gözlenir.
Açıklama: Sublüksasyon, periodontal ligamentte yırtılmaların olduğu ve dişin mobilite gösterdiği ancak soket içerisinde klinik olarak herhangi bir yöne YER DEĞİŞTİRMEDİĞİ yaralanma tipidir. Eğer dişte apikal, insizal veya lateral bir yer değiştirme mevcutsa, tanı artık sublüksasyon değil, lüksasyon türlerinden biridir (örn. ekstrüzyon, intrüzyon).

---

### ÇİFT 18 (Benzerlik: 0.70)

**Soru 1 (ID: 9bfc70b0-f0cc-44b2-b474-b7b0a2c6cdcb)**
Soru Kökü: Dişin uzun ekseni boyunca apikal yönde yer değiştirmesi (intrüzyon) ile karakterize olan travmalarda, yer değiştirmenin yönüne bağlı olarak aşağıdaki komşu doku hasarlarından hangisinin görülmesi fizyolojik olarak en muhtemeldir?
Doğru Şık (A): Alveol kemik tabanında ezilme veya fraktür
Açıklama: İntrüziv lüksasyonda diş apikal yöne (kemiğin içine doğru) şiddetle gömülür. Kök ucunun kemiğe yaptığı bu şiddetli basınç, soketin apikal tabanındaki destek alveol kemiğinde ezilmelere (kompresyon) veya alveol kırıklarına yol açar. Bu mekanizma, dişteki sekonder ankiloz veya pulpa nekrozu riskinin intrüzyonda çok yüksek olmasının da temel sebebidir.

**Soru 2 (ID: a4229df8-655e-4f9c-8456-57fd4d480f2c)**
Soru Kökü: Travmaya uğramış bir dişte travmanın soketinden tamamen ayrılması ile kökün alveol kemiği içerisinde uzun ekseni boyunca apikal yönde yer değiştirmesi, klinik açıdan benzer bir ''dişin yokluğu'' tablosu sergileyebilir. Bu iki tabloyu (Avülsiyon ve İntrüziv lüksasyon) kesin olarak birbirinden ayırt edebilmek için atılması gereken ilk adım aşağıdakilerden hangisidir?
Doğru Şık (D): Alveol soketini radyografik inceleme ile değerlendirmek
Açıklama: Şiddetli intrüziv lüksasyon (intrüzyon) vakalarında diş tüm kuronu boyunca alveol kemiği içine gömülebildiği için klinik olarak ağızda görülmez ve avülsiyonu taklit eder. Dişin kaza yerinde kaybedilip kaybedilmediğini (avülsiyon) veya kemik içine mi itildiğini (intrüzyon) anlamanın tek ve ilk yolu radyografik olarak alveol soketini ve komşu destek kemiklerini incelemektir.

---

