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

### ÇİFT 1 (Benzerlik: 0.84)

**Soru 1 (ID: ad62dd80-309a-449b-9c69-6fac1163cc6d)**
Soru Kökü: Aşağıdaki infrahyoid kaslardan hangisi anatomik lokasyonu itibarıyla tiroid kıkırdağı ile hyoid kemik arasında bağlantı kurarak, laringeal hareketler ve yutkunma esnasında mandibulaya dolaylı mekanik etki sağlar?
Doğru Şık (C): M. thyrohyoideus
Açıklama: M. thyrohyoideus, tiroid kıkırdağı (thyro-) ile hyoid kemik (-hyoideus) arasında uzanan, kasıldığında tiroid kıkırdağını yukarı çeken veya hyoid kemiği aşağı doğru sabitleyen kısa bir infrahyoid kastır. M. sternothyroideus sternumdan tiroid kıkırdağına uzanırken, M. sternohyoideus sternumdan hyoid kemiğe doğrudan uzanır.

**Soru 2 (ID: b9297056-7740-49b8-944e-554e12ff7c42)**
Soru Kökü: Suprahyoid ve infrahyoid kaslar mandibulanın pozisyonunu ve açılmasını koordine eden fonksiyonel kas zincirini oluşturur. Aşağıdakilerden hangisi sternumdan tiroid kıkırdağına uzanarak dolaylı destek sağlayan spesifik infrahyoid kastır?
Doğru Şık (D): M. sternothyroideus
Açıklama: M. sternothyroideus; sternumdan tiroid kıkırdağına uzanan, adından da anlaşıldığı üzere hyoid kemiğe direkt tutunmayan ancak tiroid kıkırdağını çekerek laringeal yapılara ve dolaylı olarak hyoide etki eden bir infrahyoid kastır. M. thyrohyoideus tiroid kıkırdağından hyoid kemiğe, M. sternohyoideus ise sternumdan doğrudan hyoid kemiğe uzanır.

---

### ÇİFT 2 (Benzerlik: 0.82)

**Soru 1 (ID: 15569193-fa46-47c3-9107-a28491789c5e)**
Soru Kökü: Aşağıdaki kaslardan hangisi çenenin açılma hareketine yardımcı elemanlardan biri **değildir**?
Doğru Şık (D): M. pterygoideus medialis
Açıklama: M. pterygoideus medialis, M. masseter ve M. temporalis ile birlikte mandibulayı eleve ederek çeneyi kapatan (elevatör) kaslardandır. Çenenin açılmasını (depresyon) başlatan ana kas lateral pterygoiddir, bu harekete suprahyoid ve infrahyoid kaslar ile yerçekimi yardım eder. Medial pterygoidin açılma mekanizmasında yeri yoktur.

**Soru 2 (ID: 7e3c8b99-2907-4060-a5b9-da78c90f5cd2)**
Soru Kökü: Trismus (çene açma kısıtlılığı) şikayetiyle başvuran otuz yaşındaki erkek hastada mandibula elevasyonundan (kapanmasından) sorumlu olan bir kasta spazm saptanmıştır. Aşağıdaki kaslardan hangisi mandibulayı eleve eden ana kaslardan biri **değildir**?
Doğru Şık (C): M. pterygoideus lateralis
Açıklama: Mandibula elevasyonunu (çeneyi kapatmayı) sağlayan asıl kaslar masseter, temporalis ve medial pterygoiddir. M. pterygoideus lateralis ise çenenin açılma (protrüzyon ve depresyon) hareketini başlatan antagonist kastır. Spazm durumlarında çeneyi açamamanın nedeni elevator kaslardaki tetanik kasılmadır.

---

### ÇİFT 3 (Benzerlik: 0.81)

**Soru 1 (ID: 65e0733b-95a7-40bb-8230-6134c35a19e1)**
Soru Kökü: Çene hareketleri kompleks bir kas aktivasyon zinciri ile yönetilir. Zigomatik arkın ön 2/3'ünün inferior kenarından köken alan ve angulus mandibula bölgesine yapışarak mandibula elevasyonunu gerçekleştiren kas aşağıdakilerden hangisidir?
Doğru Şık (B): M. masseter (superfisyal kısım)
Açıklama: M. masseter superfisyal (yüzeyel) kısmı zigomatik arkın ön 2/3'ünün inferior kenarından başlayıp angulus mandibula ve ramusun alt lateral kısmına yapışır. Masseter derin kısmı ise zigomatik arkın medial kenarı ve arka 1/3'ünden başlayarak koronoid çıkıntı ve superolateral ramusa iner. Orjin farklılıkları klinik palpasyonda kas lifi tespiti için önemlidir.

**Soru 2 (ID: 97a12473-f7f7-47ca-a770-325b263cee18)**
Soru Kökü: Zigomatik arkın medial kenarı ile arka 1/3'ünün inferior kenarından orjin alıp, superolateral ramus ve koronoid çıkıntıya insersiyo yapan çiğneme kası anatomik olarak aşağıdakilerden hangisidir?
Doğru Şık (A): M. masseter (derin kısım)
Açıklama: Zigomatik arkın arka 1/3'ü ve medialinden başlayıp koronoid çıkıntı ve ramusun üst-dış yüzeyine yapışan kas M. masseter'in derin kısmıdır. Temporalis kası temporal fossadan başlarken, masseterin yüzeyel lifleri zigomatik arkın ön 2/3'ünden köken alır.

---

### ÇİFT 4 (Benzerlik: 0.81)

**Soru 1 (ID: 4f63128d-1463-4c64-aceb-1555a832c0dc)**
Soru Kökü: Çiğneme sisteminin fonksiyonel hareketlerinde görev alan infrahyoid kaslar, hyoid kemiği stabilize ederek mandibulaya dolaylı mekanik destek sağlarlar. Aşağıdakilerden hangisi bu grupta yer alan infrahyoid kaslardan biri **değildir**?
Doğru Şık (B): M. stylohyoideus
Açıklama: M. stylohyoideus, anatomik ve fonksiyonel olarak suprahyoid kaslar grubunda sınıflandırılır. İnfrahyoid kaslar ise M. sternohyoideus, M. sternothyroideus, M. omohyoideus (venter superior/inferior) ve M. thyrohyoideus'tan oluşur. Bu kasların topografik ayrımı, çene açılma mekanizmasındaki disfonksiyonların ayırıcı tanısında önemlidir.

**Soru 2 (ID: b9297056-7740-49b8-944e-554e12ff7c42)**
Soru Kökü: Suprahyoid ve infrahyoid kaslar mandibulanın pozisyonunu ve açılmasını koordine eden fonksiyonel kas zincirini oluşturur. Aşağıdakilerden hangisi sternumdan tiroid kıkırdağına uzanarak dolaylı destek sağlayan spesifik infrahyoid kastır?
Doğru Şık (D): M. sternothyroideus
Açıklama: M. sternothyroideus; sternumdan tiroid kıkırdağına uzanan, adından da anlaşıldığı üzere hyoid kemiğe direkt tutunmayan ancak tiroid kıkırdağını çekerek laringeal yapılara ve dolaylı olarak hyoide etki eden bir infrahyoid kastır. M. thyrohyoideus tiroid kıkırdağından hyoid kemiğe, M. sternohyoideus ise sternumdan doğrudan hyoid kemiğe uzanır.

---

### ÇİFT 5 (Benzerlik: 0.80)

**Soru 1 (ID: 78eca000-5b34-4336-b44e-9482c760ffc5)**
Soru Kökü: Fizyolojik TME remodeling süreci ile dejeneratif eklem hastalığı (osteoartrit) radyolojik olarak ayırt edilirken, aşağıdaki bulgulardan hangisi sürecin patolojik dejenerasyona (DJD) dönüştüğünün kesin göstergesidir?
Doğru Şık (D): Kondil anterosuperior yüzünde osteofit ve korteks erozyonu varlığı
Açıklama: Remodeling, düzleşme ve subkondral sklerozis gibi adaptif ve kıkırdak-kemik bütünlüğünü koruyan radyolojik değişiklikler içerir. Bu sınırın aşılıp kıkırdağın yıkıldığı, korteksin erozyona uğradığı ve patolojik yeni kemik yapımı olan 'osteofitlerin' görüldüğü nokta, dejeneratif eklem hastalığının (osteoartrit) spesifik radyolojik evresidir.

**Soru 2 (ID: f686306d-d7d6-411d-9c21-3ad9ed8a3237)**
Soru Kökü: Radyografik incelemede kondilde tespit edilen aşağıdaki bulgulardan hangisi tek başına izlendiğinde dejeneratif eklem hastalığından ziyade başarılı bir adaptif 'remodeling' sürecini işaret eder?
Doğru Şık (C): Eklem yapan yüzeyde erozyon olmaksızın subkondral skleroz ve düzleşme
Açıklama: Remodeling radyografik olarak eklem yüzeyinde kortikal kalınlaşma, düzleşme ve subkondral skleroz ile karakterizedir. Kondil korteksinde erozyon, osteofit oluşumu ve subkondral kist varlığı ise adaptasyonun başarısız olduğunu ve sürecin dejeneratif eklem hastalığına (osteoartrite) dönüştüğünü gösterir.

---

### ÇİFT 6 (Benzerlik: 0.79)

**Soru 1 (ID: f43b88a1-78ad-408d-90c5-4c0ecd119350)**
Soru Kökü: TME remodeling süreci, kondile aşırı gelen kuvvetlere osseöz dokunun ve kartilajın gösterdiği adaptif bir cevaptır. Radyografik incelemede remodeling varlığını kesinleştiren ve osteoartritin yıkıcı bulgularından ayrılmasını sağlayan özellik aşağıdakilerden hangisidir?
Doğru Şık (D): Düzleşme, kortikal kalınlaşma ve subkondral skleroz varlığı
Açıklama: Remodeling, yıkıcı olmayan koruyucu bir adaptasyondur. Eklem yapan yüzeylerin düzleşmesi ve basınca karşı direnci artırmak için kortikal kalınlaşma (subkondral skleroz) görülür. Kemik erozyonu, osteofitler veya eklem boşluğu kaybı remodeling'i aşan dejeneratif eklem hastalığının (osteoartrit) patolojik bulgularıdır.

**Soru 2 (ID: f686306d-d7d6-411d-9c21-3ad9ed8a3237)**
Soru Kökü: Radyografik incelemede kondilde tespit edilen aşağıdaki bulgulardan hangisi tek başına izlendiğinde dejeneratif eklem hastalığından ziyade başarılı bir adaptif 'remodeling' sürecini işaret eder?
Doğru Şık (C): Eklem yapan yüzeyde erozyon olmaksızın subkondral skleroz ve düzleşme
Açıklama: Remodeling radyografik olarak eklem yüzeyinde kortikal kalınlaşma, düzleşme ve subkondral skleroz ile karakterizedir. Kondil korteksinde erozyon, osteofit oluşumu ve subkondral kist varlığı ise adaptasyonun başarısız olduğunu ve sürecin dejeneratif eklem hastalığına (osteoartrite) dönüştüğünü gösterir.

---

### ÇİFT 7 (Benzerlik: 0.79)

**Soru 1 (ID: 0b180e80-4193-4659-9c02-6cb9d13f5b98)**
Soru Kökü: TME'de yer alan ve artiküler diski medial ile lateral kutuplarından kondile bağlayan; temel fonksiyonu çene hareketleri sırasında diskin kondilden uzaklaşmasını önlemek olan bağ dokusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kollateral ligamentler
Açıklama: Kollateral (diskal) ligamentler diski kondilin medial ve lateral kutuplarına sıkıca bağlayarak, fonksiyon sırasında diskin kondil başından bağımsız şekilde uzağa gitmesini engeller. Temporomandibular ligament ise gerilerek maksimum ağız açıklığını sınırlar ve posterior deplasmanı korurken, diski kondile sabitleme işlevi kollateral ligamentlere aittir.

**Soru 2 (ID: b37a8360-a0da-44df-b3dd-b4fc7961350c)**
Soru Kökü: Ağız açıklığı sırasında TME diskinin ve kondilin posteriora doğru hareketini mekanik olarak sınırlayan ve böylece arkada yer alan vaskülarize retrodiskal yapıları travmadan koruyan spesifik ligament yapısı aşağıdakilerden hangisidir?
Doğru Şık (D): Temporomandibular ligamentin horizontal kısmı
Açıklama: Temporomandibular ligamentin horizontal bölümü, diskin ve kondilin posteriora doğru hareketini sınırlar ve retrodiskal dokuları sıkışma travmasına karşı korur. Aynı ligamentin oblik kısmı ise kondilin maksimum ağız açıklığını belirleyerek boyun kısmının daha ileri hareketini engeller. Kollateral ligamentler diskin kondilden uzaklaşmasını önlerken, kapsüler ligament sinoviyal sıvının dışarı çıkmasını ve eklemin dislokasyonunu engeller.

---

### ÇİFT 8 (Benzerlik: 0.79)

**Soru 1 (ID: 4f63128d-1463-4c64-aceb-1555a832c0dc)**
Soru Kökü: Çiğneme sisteminin fonksiyonel hareketlerinde görev alan infrahyoid kaslar, hyoid kemiği stabilize ederek mandibulaya dolaylı mekanik destek sağlarlar. Aşağıdakilerden hangisi bu grupta yer alan infrahyoid kaslardan biri **değildir**?
Doğru Şık (B): M. stylohyoideus
Açıklama: M. stylohyoideus, anatomik ve fonksiyonel olarak suprahyoid kaslar grubunda sınıflandırılır. İnfrahyoid kaslar ise M. sternohyoideus, M. sternothyroideus, M. omohyoideus (venter superior/inferior) ve M. thyrohyoideus'tan oluşur. Bu kasların topografik ayrımı, çene açılma mekanizmasındaki disfonksiyonların ayırıcı tanısında önemlidir.

**Soru 2 (ID: ad62dd80-309a-449b-9c69-6fac1163cc6d)**
Soru Kökü: Aşağıdaki infrahyoid kaslardan hangisi anatomik lokasyonu itibarıyla tiroid kıkırdağı ile hyoid kemik arasında bağlantı kurarak, laringeal hareketler ve yutkunma esnasında mandibulaya dolaylı mekanik etki sağlar?
Doğru Şık (C): M. thyrohyoideus
Açıklama: M. thyrohyoideus, tiroid kıkırdağı (thyro-) ile hyoid kemik (-hyoideus) arasında uzanan, kasıldığında tiroid kıkırdağını yukarı çeken veya hyoid kemiği aşağı doğru sabitleyen kısa bir infrahyoid kastır. M. sternothyroideus sternumdan tiroid kıkırdağına uzanırken, M. sternohyoideus sternumdan hyoid kemiğe doğrudan uzanır.

---

### ÇİFT 9 (Benzerlik: 0.79)

**Soru 1 (ID: 0a2a1571-0390-4070-b329-957eb48fa8b4)**
Soru Kökü: TME fonksiyonu sırasında, kondil ve diskin entegre hareketi bilaminar bölgeyi oluşturan bağ yapıları tarafından yönlendirilir. Çene açılırken ileri doğru hareket eden diski dengeleyen ve kondilin posterior yüzeyine tutunan yapı aşağıdakilerden hangisidir?
Doğru Şık (B): İnferior lamina
Açıklama: Retrodiskal dokunun inferior laminası doğrudan kondilin posterior yüzeyine tutunarak diskin hareketinde kondil-disk bağlantısının arka komponentini oluşturur. Superior lamina ise temporal kemiğe (tympanic plate) tutunur ve elastik yapısıyla kondil yer değiştirirken diskin ileri hareketine izin verecek şekilde gerilir. İki laminanın tutunma farkı stabilite için kritiktir.

**Soru 2 (ID: 0b180e80-4193-4659-9c02-6cb9d13f5b98)**
Soru Kökü: TME'de yer alan ve artiküler diski medial ile lateral kutuplarından kondile bağlayan; temel fonksiyonu çene hareketleri sırasında diskin kondilden uzaklaşmasını önlemek olan bağ dokusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kollateral ligamentler
Açıklama: Kollateral (diskal) ligamentler diski kondilin medial ve lateral kutuplarına sıkıca bağlayarak, fonksiyon sırasında diskin kondil başından bağımsız şekilde uzağa gitmesini engeller. Temporomandibular ligament ise gerilerek maksimum ağız açıklığını sınırlar ve posterior deplasmanı korurken, diski kondile sabitleme işlevi kollateral ligamentlere aittir.

---

### ÇİFT 10 (Benzerlik: 0.78)

**Soru 1 (ID: 78eca000-5b34-4336-b44e-9482c760ffc5)**
Soru Kökü: Fizyolojik TME remodeling süreci ile dejeneratif eklem hastalığı (osteoartrit) radyolojik olarak ayırt edilirken, aşağıdaki bulgulardan hangisi sürecin patolojik dejenerasyona (DJD) dönüştüğünün kesin göstergesidir?
Doğru Şık (D): Kondil anterosuperior yüzünde osteofit ve korteks erozyonu varlığı
Açıklama: Remodeling, düzleşme ve subkondral sklerozis gibi adaptif ve kıkırdak-kemik bütünlüğünü koruyan radyolojik değişiklikler içerir. Bu sınırın aşılıp kıkırdağın yıkıldığı, korteksin erozyona uğradığı ve patolojik yeni kemik yapımı olan 'osteofitlerin' görüldüğü nokta, dejeneratif eklem hastalığının (osteoartrit) spesifik radyolojik evresidir.

**Soru 2 (ID: f43b88a1-78ad-408d-90c5-4c0ecd119350)**
Soru Kökü: TME remodeling süreci, kondile aşırı gelen kuvvetlere osseöz dokunun ve kartilajın gösterdiği adaptif bir cevaptır. Radyografik incelemede remodeling varlığını kesinleştiren ve osteoartritin yıkıcı bulgularından ayrılmasını sağlayan özellik aşağıdakilerden hangisidir?
Doğru Şık (D): Düzleşme, kortikal kalınlaşma ve subkondral skleroz varlığı
Açıklama: Remodeling, yıkıcı olmayan koruyucu bir adaptasyondur. Eklem yapan yüzeylerin düzleşmesi ve basınca karşı direnci artırmak için kortikal kalınlaşma (subkondral skleroz) görülür. Kemik erozyonu, osteofitler veya eklem boşluğu kaybı remodeling'i aşan dejeneratif eklem hastalığının (osteoartrit) patolojik bulgularıdır.

---

### ÇİFT 11 (Benzerlik: 0.78)

**Soru 1 (ID: 337626cb-6905-49f2-b155-23581cccdb03)**
Soru Kökü: 35 yaşında kadın hasta, sağ preauriküler bölgede yavaş büyüyen ağrısız şişlik, çene hareketlerinde asimetri ve hareket kısıtlılığı şikayetiyle kliniğe başvuruyor. Alınan koronal BT kesitlerinde sağ kondil başında pedinküllü (saplı), sınırları düzensiz kemik büyümesi izleniyor ve kondilin orijinal anatomik şeklinin bozulduğu görülüyor. Bu lezyonun standart tedavisi için aşağıdaki yöntemlerden hangisi uygulanmalıdır?
Doğru Şık (C): Tümöral lezyonun cerrahi olarak eksizyonu
Açıklama: Hastadaki pedinküllü büyüme, yavaş seyir ve asimetri tablosu, TME'nin en yaygın benign tümörü olan osteokondromayı işaret etmektedir. TME'nin benign tümörlerinde standart küratif tedavi, lezyonun cerrahi olarak tamamen eksizyonudur. Splint tedavisi yalnızca disfonksiyon ve stresi azaltmada (remodeling/osteoartrit) kullanılırken, neoplazmlarda kitlenin cerrahi olarak çıkarılması zorunludur.

**Soru 2 (ID: b0f4cdb8-13a1-4158-a5bc-6aca4d64678a)**
Soru Kökü: 14 yaşında kadın hasta, alt çenesinde ilerleyici asimetri, çene ekleminde ses ve fonksiyon bozukluğu şikayetleriyle kliniğe başvuruyor. Alınan radyograflarda kondil başında belirgin düzleşme, şapkalı mantar görünümü, kondil boynunda kısalma ve antegonial çentikte derinleşme saptanıyor. Bu hastada en ideal tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Ortognatik cerrahi ve ortodontik tedavi kombinasyonu
Açıklama: Juvenil artrozis, kondil başında şapkalı mantar görünümü ve antegonial çentik derinleşmesi ile karakterize sekonder dejeneratif değişikliklere zemin hazırlayan bir büyüme bozukluğudur. Tedavisinde sekonder maloklüzyon ve asimetriyi düzeltmek amacıyla ortognatik cerrahi ile ortodontik tedavi kombinasyonu uygulanır. Splint tedavisi veya artrosentez, yapısal hipoplaziyi ve sekonder iskeletsel asimetriyi düzeltemeyeceği için yetersiz kalır.

---

### ÇİFT 12 (Benzerlik: 0.78)

**Soru 1 (ID: 4f63128d-1463-4c64-aceb-1555a832c0dc)**
Soru Kökü: Çiğneme sisteminin fonksiyonel hareketlerinde görev alan infrahyoid kaslar, hyoid kemiği stabilize ederek mandibulaya dolaylı mekanik destek sağlarlar. Aşağıdakilerden hangisi bu grupta yer alan infrahyoid kaslardan biri **değildir**?
Doğru Şık (B): M. stylohyoideus
Açıklama: M. stylohyoideus, anatomik ve fonksiyonel olarak suprahyoid kaslar grubunda sınıflandırılır. İnfrahyoid kaslar ise M. sternohyoideus, M. sternothyroideus, M. omohyoideus (venter superior/inferior) ve M. thyrohyoideus'tan oluşur. Bu kasların topografik ayrımı, çene açılma mekanizmasındaki disfonksiyonların ayırıcı tanısında önemlidir.

**Soru 2 (ID: aaf4f68b-d02a-487e-9750-c10a582ea51c)**
Soru Kökü: Çiğneme sistemi kas dinamiğinde suprahyoid ve infrahyoid kasların dengeli çalışması büyük öneme sahiptir. Aşağıdaki infrahyoid kaslardan hangisinin yapısı, iki farklı ventere (karına) ayrılarak anatomik varyasyon gösterir?
Doğru Şık (D): M. omohyoideus
Açıklama: M. omohyoideus, 'venter superior' ve 'venter inferior' olmak üzere iki ayrı karından oluşan tek infrahyoid kastır. M. digastricus da iki ventere (anterior/posterior) sahiptir ancak o bir suprahyoid kastır. M. stylohyoideus suprahyoid olup tek yapılıyken, diğer infrahyoid kaslar (sternohyoid, sternothyroid, thyrohyoid) venter ayrımı göstermez.

---

### ÇİFT 13 (Benzerlik: 0.76)

**Soru 1 (ID: bc9b0f22-ebdb-400e-a1c8-0d76bbae6ecb)**
Soru Kökü: Temporomandibular eklem görüntülemesinde kondilin medial ve lateral yüzlerinin bütünlüğünü frontal düzlemde değerlendirmek isteyen bir hekimin tercih etmesi gereken spesifik düz grafi projeksiyonu aşağıdakilerden hangisidir?
Doğru Şık (D): Transorbital projeksiyon
Açıklama: Transorbital projeksiyon, X-ışını demetinin orbitadan geçirilerek kondilin frontal düzlemde medial ve lateral kutuplarının görüntülenmesini sağlayan tekniktir. Transkranial ve transfaringeal radyografiler lateral düzlemde görüntü verirken, transorbital doğrudan frontal (koronal benzeri) düzlem değerlendirmesi sağlar. Bu yöntem, kondil başındaki asimetrilerin ve mediolateral morfolojik değişimlerin saptanmasında önemlidir.

**Soru 2 (ID: f316a574-cf39-4b6e-a079-b23fc45aef4e)**
Soru Kökü: Temporomandibular eklemin konvansiyonel radyografik incelemesinde kondilin lateral görüntüsünü elde etmek amacıyla kullanılan teknikler aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Transkranial ve Transfaringeal (Parma) projeksiyonlar
Açıklama: Transkranial ve transfaringeal (Parma) projeksiyonların her ikisi de eklem ve kondilin lateral düzlemden izlenmesini sağlayan tekniklerdir. Transorbital projeksiyon kondilin frontal düzlemdeki medial-lateral yüzünü, submentoverteks ise horizontal düzlemde kafatabanını görüntüler. İki tekniğin aynı düzlemi göstermesi, radyografik süperpozisyon ve tanı hedeflerinde benzer endikasyonlara sahip olmalarını açıklar.

---

### ÇİFT 14 (Benzerlik: 0.76)

**Soru 1 (ID: 4f63128d-1463-4c64-aceb-1555a832c0dc)**
Soru Kökü: Çiğneme sisteminin fonksiyonel hareketlerinde görev alan infrahyoid kaslar, hyoid kemiği stabilize ederek mandibulaya dolaylı mekanik destek sağlarlar. Aşağıdakilerden hangisi bu grupta yer alan infrahyoid kaslardan biri **değildir**?
Doğru Şık (B): M. stylohyoideus
Açıklama: M. stylohyoideus, anatomik ve fonksiyonel olarak suprahyoid kaslar grubunda sınıflandırılır. İnfrahyoid kaslar ise M. sternohyoideus, M. sternothyroideus, M. omohyoideus (venter superior/inferior) ve M. thyrohyoideus'tan oluşur. Bu kasların topografik ayrımı, çene açılma mekanizmasındaki disfonksiyonların ayırıcı tanısında önemlidir.

**Soru 2 (ID: ac28e37f-a0c8-4ac5-b198-ab37c0dd1344)**
Soru Kökü: Çenenin açılması hareketine yardım eden kaslar temel olarak suprahyoid, infrahyoid kaslar ve yerçekimidir. Aşağıdakilerden hangisi çenenin açılmasına destek olan suprahyoid kaslardan biridir?
Doğru Şık (A): M. geniohyoideus
Açıklama: M. geniohyoideus, M. digastricus, M. stylohyoideus ve M. mylohyoideus ile birlikte çenenin açılmasına yardım eden suprahyoid kaslar grubundandır. Diğer şıklarda verilen M. sternohyoideus, M. sternothyroideus, M. omohyoideus ve M. thyrohyoideus kasları ise infrahyoid kaslar grubunda yer almaktadır. Kas fonksiyonlarının anatomik yerleşime göre kategorize edilmesi, klinik muayenede kas hassasiyeti palpe edilirken kritik rol oynar.

---

### ÇİFT 15 (Benzerlik: 0.75)

**Soru 1 (ID: 3b5c92e2-4dd4-4ec8-9da7-68f4c9460d01)**
Soru Kökü: Bilateral TME ağrısı, asimetrik eklem tutulumu, krepitus ve şiddetli anterior open-bite şikayetiyle başvuran orta yaşlı kadın hastanın BT kesitlerinde anterior ve posterior kondil yüzeylerinde belirgin erozyon ile kondil başında 'sivriltilmiş kalem' görünümü saptanıyor. Pannus formasyonuna bağlı şiddetli disk hasarının da eşlik ettiği bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Romatoid artrit
Açıklama: Pannus (granülasyon dokusu proliferasyonu) formasyonu, anterior open-bite ve özellikle kondilin anterior-posterior yüzeylerindeki bilateral erozyonlara bağlı ortaya çıkan karakteristik 'sivriltilmiş kalem ucu' görünümü Romatoid Artrit (RA) için patognomoniğe yakın bulgulardır. Osteoartritte daha çok asimetrik tekil erozyonlar ve osteofitler (kemik spurları) izlenir.

**Soru 2 (ID: a1907184-2ff1-4ca7-b359-6c5903315489)**
Soru Kökü: Romatoid artrit nedeniyle eklem yıkımı yaşayan bir hastanın TME radyografileri inceleniyor. Romatoid artritte kondilin karakteristik dekstrüksiyon modeli olarak bilinen 'sivriltilmiş kalem (pencil-head)' görünümünün ortaya çıkmasına neden olan temel histopatolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): İnflamatuar pannus formasyonunun kondilin anterior ve posterior yüzeylerinde kemik erozyonu yapması
Açıklama: Romatoid artritte gelişen granülasyon dokusu (pannus), enzimatik olarak agresiftir. Pannus, kondilin çevresini (özellikle anterior ve posterior yüzeylerini) sararak kenarlardan içeri doğru eroziv bir yıkım başlatır, bu durum da kondilin kalem ucu (sivriltilmiş) görünümü almasına neden olur. Osteofit oluşumu RA'dan ziyade osteoartritteki mekanik adaptasyonun bir sonucudur.

---

### ÇİFT 16 (Benzerlik: 0.75)

**Soru 1 (ID: aaf4f68b-d02a-487e-9750-c10a582ea51c)**
Soru Kökü: Çiğneme sistemi kas dinamiğinde suprahyoid ve infrahyoid kasların dengeli çalışması büyük öneme sahiptir. Aşağıdaki infrahyoid kaslardan hangisinin yapısı, iki farklı ventere (karına) ayrılarak anatomik varyasyon gösterir?
Doğru Şık (D): M. omohyoideus
Açıklama: M. omohyoideus, 'venter superior' ve 'venter inferior' olmak üzere iki ayrı karından oluşan tek infrahyoid kastır. M. digastricus da iki ventere (anterior/posterior) sahiptir ancak o bir suprahyoid kastır. M. stylohyoideus suprahyoid olup tek yapılıyken, diğer infrahyoid kaslar (sternohyoid, sternothyroid, thyrohyoid) venter ayrımı göstermez.

**Soru 2 (ID: ad62dd80-309a-449b-9c69-6fac1163cc6d)**
Soru Kökü: Aşağıdaki infrahyoid kaslardan hangisi anatomik lokasyonu itibarıyla tiroid kıkırdağı ile hyoid kemik arasında bağlantı kurarak, laringeal hareketler ve yutkunma esnasında mandibulaya dolaylı mekanik etki sağlar?
Doğru Şık (C): M. thyrohyoideus
Açıklama: M. thyrohyoideus, tiroid kıkırdağı (thyro-) ile hyoid kemik (-hyoideus) arasında uzanan, kasıldığında tiroid kıkırdağını yukarı çeken veya hyoid kemiği aşağı doğru sabitleyen kısa bir infrahyoid kastır. M. sternothyroideus sternumdan tiroid kıkırdağına uzanırken, M. sternohyoideus sternumdan hyoid kemiğe doğrudan uzanır.

---

### ÇİFT 17 (Benzerlik: 0.75)

**Soru 1 (ID: ac28e37f-a0c8-4ac5-b198-ab37c0dd1344)**
Soru Kökü: Çenenin açılması hareketine yardım eden kaslar temel olarak suprahyoid, infrahyoid kaslar ve yerçekimidir. Aşağıdakilerden hangisi çenenin açılmasına destek olan suprahyoid kaslardan biridir?
Doğru Şık (A): M. geniohyoideus
Açıklama: M. geniohyoideus, M. digastricus, M. stylohyoideus ve M. mylohyoideus ile birlikte çenenin açılmasına yardım eden suprahyoid kaslar grubundandır. Diğer şıklarda verilen M. sternohyoideus, M. sternothyroideus, M. omohyoideus ve M. thyrohyoideus kasları ise infrahyoid kaslar grubunda yer almaktadır. Kas fonksiyonlarının anatomik yerleşime göre kategorize edilmesi, klinik muayenede kas hassasiyeti palpe edilirken kritik rol oynar.

**Soru 2 (ID: e00b9135-f3c6-4405-9f42-ba03b7e53b0c)**
Soru Kökü: Kırk beş yaşında kadın hasta, yemek yerken çiğneme işleminin açma fazında boynunun ön-üst kısmında çekilme hissi yaşadığını belirtiyor. Çenenin açılmasına (depresyon) yardım eden kas gruplarından suprahyoid kaslar değerlendirilmektedir. Aşağıdakilerden hangisi suprahyoid bir kas **değildir**?
Doğru Şık (A): M. omohyoideus venter superior
Açıklama: Suprahyoid kaslar; digastrik (anterior/posterior venter), stylohyoid, mylohyoid ve geniohyoid kaslarından oluşur ve hyoidi fikse ederek çenenin açılmasına destek verirler. Omohyoideus ise tiroid ve sternuma uzanan bir infrahyoid kastır. Infrahyoid kaslar hyoid kemiği aşağı çekerek suprahyoidlere pasif zemin hazırlar.

---

### ÇİFT 18 (Benzerlik: 0.74)

**Soru 1 (ID: 4f63128d-1463-4c64-aceb-1555a832c0dc)**
Soru Kökü: Çiğneme sisteminin fonksiyonel hareketlerinde görev alan infrahyoid kaslar, hyoid kemiği stabilize ederek mandibulaya dolaylı mekanik destek sağlarlar. Aşağıdakilerden hangisi bu grupta yer alan infrahyoid kaslardan biri **değildir**?
Doğru Şık (B): M. stylohyoideus
Açıklama: M. stylohyoideus, anatomik ve fonksiyonel olarak suprahyoid kaslar grubunda sınıflandırılır. İnfrahyoid kaslar ise M. sternohyoideus, M. sternothyroideus, M. omohyoideus (venter superior/inferior) ve M. thyrohyoideus'tan oluşur. Bu kasların topografik ayrımı, çene açılma mekanizmasındaki disfonksiyonların ayırıcı tanısında önemlidir.

**Soru 2 (ID: e00b9135-f3c6-4405-9f42-ba03b7e53b0c)**
Soru Kökü: Kırk beş yaşında kadın hasta, yemek yerken çiğneme işleminin açma fazında boynunun ön-üst kısmında çekilme hissi yaşadığını belirtiyor. Çenenin açılmasına (depresyon) yardım eden kas gruplarından suprahyoid kaslar değerlendirilmektedir. Aşağıdakilerden hangisi suprahyoid bir kas **değildir**?
Doğru Şık (A): M. omohyoideus venter superior
Açıklama: Suprahyoid kaslar; digastrik (anterior/posterior venter), stylohyoid, mylohyoid ve geniohyoid kaslarından oluşur ve hyoidi fikse ederek çenenin açılmasına destek verirler. Omohyoideus ise tiroid ve sternuma uzanan bir infrahyoid kastır. Infrahyoid kaslar hyoid kemiği aşağı çekerek suprahyoidlere pasif zemin hazırlar.

---

### ÇİFT 19 (Benzerlik: 0.74)

**Soru 1 (ID: 37ae9894-339e-429b-9940-da3352e711ed)**
Soru Kökü: Kondrosarkom gibi TME'nin primer intrinsik malign tümörlerinin tedavisinde uygulanması gereken temel onkolojik/cerrahi prensip aşağıdakilerden hangisidir?
Doğru Şık (A): Tümörün geniş marjinlerle cerrahi olarak çıkarılması
Açıklama: TME'nin primer intrinsik malign tümörlerinin (kondrosarkom, osteojenik sarkom, fibrosarkom) tedavisinde altın standart, tümörün çevresindeki sağlam dokuyu da içerecek şekilde genişçe cerrahi olarak çıkarılmasıdır (radikal eksizyon). Metastatik sekonder tümörlerde kemoterapi ve radyoterapi ön plana çıkarken, lokalize primer sarkomlarda hastanın sağkalımı tamamen kitlenin cerrahi yolla ortamdan agresif şekilde temizlenmesine bağlıdır. Artroskopik müdahale gibi kapalı işlemler bu tür vakalarda tümör ekimine (seeding) yol açabileceği için kontrendikedir.

**Soru 2 (ID: c6766391-a5a5-4a74-ac7f-95bbe2c85c78)**
Soru Kökü: TME'nin benign karakterli intrinsik tümörlerinin (osteoma, osteoblastoma vb.) tedavisinde klinik olarak kabul edilen temel yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (D): Tümörün cerrahi yolla eksizyonu
Açıklama: TME bölgesinde görülen benign tümörlerin (osteoma, osteokondroma, Langerhans histiyositoz vb.) temel tedavisi tümörün cerrahi eksizyonudur. Benign karakterli tümörlerde dokunun lokal yıkımı izlense de sistemik yayılım beklenmediği için radyoterapi veya kemoterapi uygulanmaz, bunlar gereksizdir ve sağlıklı dokuya zarar verir. Medikal tedaviler ise tümörü yok edemeyeceğinden sadece semptomatik rahatlama sağlayabilir.

---

### ÇİFT 20 (Benzerlik: 0.74)

**Soru 1 (ID: 87873ff1-bdcc-44e2-897f-bd5384c88b34)**
Soru Kökü: Aşağıdakilerden hangisi eklem içi (intrinsik) patolojilerden ziyade, kondil hareketini kısıtlayan dış etkenlerden kaynaklanan 'sahte ankiloz' nedenlerinden biri **değildir**?
Doğru Şık (C): Romatoid artrite bağlı eklem içi fibröz yapışıklıklar
Açıklama: Romatoid artrit veya travma gibi direkt eklem boşluğunu (sinoviyum, disk, kıkırdak) ilgilendiren nedenlerle kemik veya fibröz doku füzyonu olması 'gerçek ankiloz' olarak adlandırılır. Koronoid hiperplazisi, kas spazmı, miyozitis ossifikans gibi eklem komponentleri dışındaki yapıların mekanik obstrüksiyonu ise 'sahte ankiloz' (ekstra-artiküler ankiloz) nedenleridir.

**Soru 2 (ID: 92662259-0dc8-438f-9cad-32f66a461b60)**
Soru Kökü: Altı yaşındaki çocuk hasta, ağzını yeterince açamadığı gerekçesiyle kliniğe getirilmiş ve fibröz ankiloz teşhisi konmuştur. Ancak hekim ayırıcı tanıda bazı patolojik durumların 'sahte ankiloz' yapabileceğini değerlendirmektedir. Aşağıdakilerden hangisi doğrudan eklem komponentleriyle ilişkili olmayan mekanik bir sebeple 'sahte' ankiloza yol açan durumlardan **en az olasıdır**?
Doğru Şık (B): TME bölgesinde şiddetli romatoid artrit erozyonu
Açıklama: Gerçek ankiloz, eklem yüzeylerindeki (kondil-fossa) kemik veya fibröz doku birleşmesi sonucu oluşur ve romatoid artrit gibi patolojiler gerçek ankiloza neden olabilir. Sahte ankiloz ise eklem dışı yapıların (kas spazmı, miyositis ossifikans, uzamış koronoid proçes) mekanik engellemesidir. Artrit erozyonu eklem içi tahribat yarattığından doğrudan gerçek ankiloz prosesidir.

---

### ÇİFT 21 (Benzerlik: 0.74)

**Soru 1 (ID: aaf4f68b-d02a-487e-9750-c10a582ea51c)**
Soru Kökü: Çiğneme sistemi kas dinamiğinde suprahyoid ve infrahyoid kasların dengeli çalışması büyük öneme sahiptir. Aşağıdaki infrahyoid kaslardan hangisinin yapısı, iki farklı ventere (karına) ayrılarak anatomik varyasyon gösterir?
Doğru Şık (D): M. omohyoideus
Açıklama: M. omohyoideus, 'venter superior' ve 'venter inferior' olmak üzere iki ayrı karından oluşan tek infrahyoid kastır. M. digastricus da iki ventere (anterior/posterior) sahiptir ancak o bir suprahyoid kastır. M. stylohyoideus suprahyoid olup tek yapılıyken, diğer infrahyoid kaslar (sternohyoid, sternothyroid, thyrohyoid) venter ayrımı göstermez.

**Soru 2 (ID: b9297056-7740-49b8-944e-554e12ff7c42)**
Soru Kökü: Suprahyoid ve infrahyoid kaslar mandibulanın pozisyonunu ve açılmasını koordine eden fonksiyonel kas zincirini oluşturur. Aşağıdakilerden hangisi sternumdan tiroid kıkırdağına uzanarak dolaylı destek sağlayan spesifik infrahyoid kastır?
Doğru Şık (D): M. sternothyroideus
Açıklama: M. sternothyroideus; sternumdan tiroid kıkırdağına uzanan, adından da anlaşıldığı üzere hyoid kemiğe direkt tutunmayan ancak tiroid kıkırdağını çekerek laringeal yapılara ve dolaylı olarak hyoide etki eden bir infrahyoid kastır. M. thyrohyoideus tiroid kıkırdağından hyoid kemiğe, M. sternohyoideus ise sternumdan doğrudan hyoid kemiğe uzanır.

---

### ÇİFT 22 (Benzerlik: 0.74)

**Soru 1 (ID: 85c8f05f-d019-4a35-b145-544af816b2b5)**
Soru Kökü: Aşırı mekanik yüklere maruz kalan TME'de kemik ve kıkırdak dokusunun bu yüklere karşı geliştirdiği, kondil ve artiküler eminens morfolojisinde değişikliklerle sonuçlanan, inflamatuar olmayan adaptif hücresel cevap süreci aşağıdakilerden hangisidir?
Doğru Şık (D): Remodeling
Açıklama: Remodeling, ekleme etki eden aşırı biyomekanik kuvvetlere karşı osseöz doku ve kıkırdağın şeklini değiştirerek verdiği inflamatuar olmayan fizyolojik adaptif bir cevaptır. Dejeneratif eklem hastalığı (osteoartrit) ise bu adaptasyon kapasitesinin aşıldığı ve destrüksiyonun (erozyon, osteofit) başladığı patolojik bir süreçtir.

**Soru 2 (ID: f43b88a1-78ad-408d-90c5-4c0ecd119350)**
Soru Kökü: TME remodeling süreci, kondile aşırı gelen kuvvetlere osseöz dokunun ve kartilajın gösterdiği adaptif bir cevaptır. Radyografik incelemede remodeling varlığını kesinleştiren ve osteoartritin yıkıcı bulgularından ayrılmasını sağlayan özellik aşağıdakilerden hangisidir?
Doğru Şık (D): Düzleşme, kortikal kalınlaşma ve subkondral skleroz varlığı
Açıklama: Remodeling, yıkıcı olmayan koruyucu bir adaptasyondur. Eklem yapan yüzeylerin düzleşmesi ve basınca karşı direnci artırmak için kortikal kalınlaşma (subkondral skleroz) görülür. Kemik erozyonu, osteofitler veya eklem boşluğu kaybı remodeling'i aşan dejeneratif eklem hastalığının (osteoartrit) patolojik bulgularıdır.

---

### ÇİFT 23 (Benzerlik: 0.74)

**Soru 1 (ID: 15569193-fa46-47c3-9107-a28491789c5e)**
Soru Kökü: Aşağıdaki kaslardan hangisi çenenin açılma hareketine yardımcı elemanlardan biri **değildir**?
Doğru Şık (D): M. pterygoideus medialis
Açıklama: M. pterygoideus medialis, M. masseter ve M. temporalis ile birlikte mandibulayı eleve ederek çeneyi kapatan (elevatör) kaslardandır. Çenenin açılmasını (depresyon) başlatan ana kas lateral pterygoiddir, bu harekete suprahyoid ve infrahyoid kaslar ile yerçekimi yardım eder. Medial pterygoidin açılma mekanizmasında yeri yoktur.

**Soru 2 (ID: c5440fb5-ec7b-43a7-b4f9-f8aafb3e142b)**
Soru Kökü: Mandibulanın açılması ve lateral hareketleri esnasında anatomik yapılar koordineli bir sinerji gösterir. Sadece kondil boynundaki pterygoid çukurcuğa tutunarak çeneyi öne ve aşağı doğru yönlendiren ve lateral hareketleri sağlayan yapı aşağıdakilerden hangisidir?
Doğru Şık (C): M. pterygoideus lateralis alt parça
Açıklama: Çenenin açılmasını (depresyon) ve kontralateral hareketini başlatan temel kas M. pterygoideus lateralis'tir. Özellikle alt parçası kondil boynuna tutunarak translasyonel hareketi yürütürken, üst parça diski stabilize eder. Medial pterygoid lateral harekete katılsa da temel işlevi elevasyondur.

---

### ÇİFT 24 (Benzerlik: 0.74)

**Soru 1 (ID: 529a8d21-8d90-46be-939f-ec2095f2693e)**
Soru Kökü: Temporomandibular eklem (TME) bozuklukları, eklemin normal şekil ve fonksiyonunu engelleyen çeşitli anomalileri kapsar. Aşağıdaki patolojik durumlardan hangisi bu genel bozukluk spektrumunun temel bileşenlerinden biri **değildir**?
Doğru Şık (C): Diş kökü rezorpsiyon sendromları
Açıklama: TME bozuklukları temel olarak artiküler diskin disfonksiyonu, ligament/kas ilişkili sorunlar, artrit, inflamatuar lezyonlar, neoplazmlar ve gelişimsel anomalileri içerir. Diş kökü rezorpsiyonları doğrudan bir TME bozukluğu değil, dentoalveoler bir patolojidir. Bu ayrım, eklem içi mekanik ve patolojik sorunların spesifik olarak sınıflandırılması için kritiktir.

**Soru 2 (ID: ad3f6ce3-42ec-4c7c-9a99-38ebbbace65c)**
Soru Kökü: Temporomandibular eklem dislokasyonu etyolojisinde aşağıdakilerden hangisi doğrudan rol **oynamaz**?
Doğru Şık (A): Aşırı hipertonik ve kısalmış ligament varlığı
Açıklama: TME dislokasyonu, kondilin artiküler eminensin önüne geçip geri dönememesidir. Buna eklem kapsülünün veya ligamentlerin aşırı esnek/gevşek olması (ligament laksisitesi), esneme, nöbet veya entübasyon sırasındaki aşırı ağız açma zorlamaları neden olur. Kısalmış veya sert (hipertonik) ligamentler ise dislokasyona değil, aksine hipomobiliteye/açma kısıtlılığına neden olur.

---

### ÇİFT 25 (Benzerlik: 0.73)

**Soru 1 (ID: 0a2a1571-0390-4070-b329-957eb48fa8b4)**
Soru Kökü: TME fonksiyonu sırasında, kondil ve diskin entegre hareketi bilaminar bölgeyi oluşturan bağ yapıları tarafından yönlendirilir. Çene açılırken ileri doğru hareket eden diski dengeleyen ve kondilin posterior yüzeyine tutunan yapı aşağıdakilerden hangisidir?
Doğru Şık (B): İnferior lamina
Açıklama: Retrodiskal dokunun inferior laminası doğrudan kondilin posterior yüzeyine tutunarak diskin hareketinde kondil-disk bağlantısının arka komponentini oluşturur. Superior lamina ise temporal kemiğe (tympanic plate) tutunur ve elastik yapısıyla kondil yer değiştirirken diskin ileri hareketine izin verecek şekilde gerilir. İki laminanın tutunma farkı stabilite için kritiktir.

**Soru 2 (ID: b37a8360-a0da-44df-b3dd-b4fc7961350c)**
Soru Kökü: Ağız açıklığı sırasında TME diskinin ve kondilin posteriora doğru hareketini mekanik olarak sınırlayan ve böylece arkada yer alan vaskülarize retrodiskal yapıları travmadan koruyan spesifik ligament yapısı aşağıdakilerden hangisidir?
Doğru Şık (D): Temporomandibular ligamentin horizontal kısmı
Açıklama: Temporomandibular ligamentin horizontal bölümü, diskin ve kondilin posteriora doğru hareketini sınırlar ve retrodiskal dokuları sıkışma travmasına karşı korur. Aynı ligamentin oblik kısmı ise kondilin maksimum ağız açıklığını belirleyerek boyun kısmının daha ileri hareketini engeller. Kollateral ligamentler diskin kondilden uzaklaşmasını önlerken, kapsüler ligament sinoviyal sıvının dışarı çıkmasını ve eklemin dislokasyonunu engeller.

---

### ÇİFT 26 (Benzerlik: 0.72)

**Soru 1 (ID: 15569193-fa46-47c3-9107-a28491789c5e)**
Soru Kökü: Aşağıdaki kaslardan hangisi çenenin açılma hareketine yardımcı elemanlardan biri **değildir**?
Doğru Şık (D): M. pterygoideus medialis
Açıklama: M. pterygoideus medialis, M. masseter ve M. temporalis ile birlikte mandibulayı eleve ederek çeneyi kapatan (elevatör) kaslardandır. Çenenin açılmasını (depresyon) başlatan ana kas lateral pterygoiddir, bu harekete suprahyoid ve infrahyoid kaslar ile yerçekimi yardım eder. Medial pterygoidin açılma mekanizmasında yeri yoktur.

**Soru 2 (ID: ac28e37f-a0c8-4ac5-b198-ab37c0dd1344)**
Soru Kökü: Çenenin açılması hareketine yardım eden kaslar temel olarak suprahyoid, infrahyoid kaslar ve yerçekimidir. Aşağıdakilerden hangisi çenenin açılmasına destek olan suprahyoid kaslardan biridir?
Doğru Şık (A): M. geniohyoideus
Açıklama: M. geniohyoideus, M. digastricus, M. stylohyoideus ve M. mylohyoideus ile birlikte çenenin açılmasına yardım eden suprahyoid kaslar grubundandır. Diğer şıklarda verilen M. sternohyoideus, M. sternothyroideus, M. omohyoideus ve M. thyrohyoideus kasları ise infrahyoid kaslar grubunda yer almaktadır. Kas fonksiyonlarının anatomik yerleşime göre kategorize edilmesi, klinik muayenede kas hassasiyeti palpe edilirken kritik rol oynar.

---

### ÇİFT 27 (Benzerlik: 0.72)

**Soru 1 (ID: 7e3c8b99-2907-4060-a5b9-da78c90f5cd2)**
Soru Kökü: Trismus (çene açma kısıtlılığı) şikayetiyle başvuran otuz yaşındaki erkek hastada mandibula elevasyonundan (kapanmasından) sorumlu olan bir kasta spazm saptanmıştır. Aşağıdaki kaslardan hangisi mandibulayı eleve eden ana kaslardan biri **değildir**?
Doğru Şık (C): M. pterygoideus lateralis
Açıklama: Mandibula elevasyonunu (çeneyi kapatmayı) sağlayan asıl kaslar masseter, temporalis ve medial pterygoiddir. M. pterygoideus lateralis ise çenenin açılma (protrüzyon ve depresyon) hareketini başlatan antagonist kastır. Spazm durumlarında çeneyi açamamanın nedeni elevator kaslardaki tetanik kasılmadır.

**Soru 2 (ID: c5440fb5-ec7b-43a7-b4f9-f8aafb3e142b)**
Soru Kökü: Mandibulanın açılması ve lateral hareketleri esnasında anatomik yapılar koordineli bir sinerji gösterir. Sadece kondil boynundaki pterygoid çukurcuğa tutunarak çeneyi öne ve aşağı doğru yönlendiren ve lateral hareketleri sağlayan yapı aşağıdakilerden hangisidir?
Doğru Şık (C): M. pterygoideus lateralis alt parça
Açıklama: Çenenin açılmasını (depresyon) ve kontralateral hareketini başlatan temel kas M. pterygoideus lateralis'tir. Özellikle alt parçası kondil boynuna tutunarak translasyonel hareketi yürütürken, üst parça diski stabilize eder. Medial pterygoid lateral harekete katılsa da temel işlevi elevasyondur.

---

### ÇİFT 28 (Benzerlik: 0.72)

**Soru 1 (ID: 15569193-fa46-47c3-9107-a28491789c5e)**
Soru Kökü: Aşağıdaki kaslardan hangisi çenenin açılma hareketine yardımcı elemanlardan biri **değildir**?
Doğru Şık (D): M. pterygoideus medialis
Açıklama: M. pterygoideus medialis, M. masseter ve M. temporalis ile birlikte mandibulayı eleve ederek çeneyi kapatan (elevatör) kaslardandır. Çenenin açılmasını (depresyon) başlatan ana kas lateral pterygoiddir, bu harekete suprahyoid ve infrahyoid kaslar ile yerçekimi yardım eder. Medial pterygoidin açılma mekanizmasında yeri yoktur.

**Soru 2 (ID: ca0c2653-31ff-4b00-aaae-6474ffc48c37)**
Soru Kökü: Temporomandibular eklemi etkileyen çiğneme kaslarının fonksiyonları incelendiğinde;
I. M. masseter
II. M. temporalis
III. M. pterygoideus lateralis
IV. M. pterygoideus medialis

Yukarıdaki kaslardan hangileri mandibulayı elevasyona getirerek (çeneyi kapatarak) oklüzyonu sağlayan temel grupta yer alır?
Doğru Şık (A): I, II ve IV
Açıklama: M. masseter, m. temporalis ve m. pterygoideus medialis (I, II, IV) mandibulayı elevasyona getirerek ağzın kapanmasını sağlayan temel elevatör kaslardır. M. pterygoideus lateralis (III) ise kasıldığında mandibulayı öne ve aşağıya doğru çekerek (suprahyoid ve infrahyoid kaslarla birlikte) çenenin açılma hareketini başlatır.

---

### ÇİFT 29 (Benzerlik: 0.72)

**Soru 1 (ID: 7e3c8b99-2907-4060-a5b9-da78c90f5cd2)**
Soru Kökü: Trismus (çene açma kısıtlılığı) şikayetiyle başvuran otuz yaşındaki erkek hastada mandibula elevasyonundan (kapanmasından) sorumlu olan bir kasta spazm saptanmıştır. Aşağıdaki kaslardan hangisi mandibulayı eleve eden ana kaslardan biri **değildir**?
Doğru Şık (C): M. pterygoideus lateralis
Açıklama: Mandibula elevasyonunu (çeneyi kapatmayı) sağlayan asıl kaslar masseter, temporalis ve medial pterygoiddir. M. pterygoideus lateralis ise çenenin açılma (protrüzyon ve depresyon) hareketini başlatan antagonist kastır. Spazm durumlarında çeneyi açamamanın nedeni elevator kaslardaki tetanik kasılmadır.

**Soru 2 (ID: ca0c2653-31ff-4b00-aaae-6474ffc48c37)**
Soru Kökü: Temporomandibular eklemi etkileyen çiğneme kaslarının fonksiyonları incelendiğinde;
I. M. masseter
II. M. temporalis
III. M. pterygoideus lateralis
IV. M. pterygoideus medialis

Yukarıdaki kaslardan hangileri mandibulayı elevasyona getirerek (çeneyi kapatarak) oklüzyonu sağlayan temel grupta yer alır?
Doğru Şık (A): I, II ve IV
Açıklama: M. masseter, m. temporalis ve m. pterygoideus medialis (I, II, IV) mandibulayı elevasyona getirerek ağzın kapanmasını sağlayan temel elevatör kaslardır. M. pterygoideus lateralis (III) ise kasıldığında mandibulayı öne ve aşağıya doğru çekerek (suprahyoid ve infrahyoid kaslarla birlikte) çenenin açılma hareketini başlatır.

---

### ÇİFT 30 (Benzerlik: 0.72)

**Soru 1 (ID: 99c55be6-261f-4565-a9e2-1786b104c29f)**
Soru Kökü: Kafatabanı anomalilerinin ve her iki kondilin aksiyal eğimlerinin horizontal düzlemde karşılaştırmalı olarak değerlendirilmesini sağlayan konvansiyonel görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Submentoverteks (bazal) projeksiyon
Açıklama: Submentoverteks (bazal) projeksiyon, hastanın başının arkaya yatırılarak ışının submental bölgeden verteks yönüne gönderilmesiyle kafatabanı ve kondillerin horizontal düzlemden izlenmesini sağlar. Diğer düz grafilerin aksine bu teknik, kondillerin mediolateral açılanmasını (angülasyonunu) tek bir aksiyal kesit mantığıyla sunar. Bu özellikleri nedeniyle günümüz aksiyal BT kesitlerinin konvansiyonel öncülü kabul edilir.

**Soru 2 (ID: f316a574-cf39-4b6e-a079-b23fc45aef4e)**
Soru Kökü: Temporomandibular eklemin konvansiyonel radyografik incelemesinde kondilin lateral görüntüsünü elde etmek amacıyla kullanılan teknikler aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Transkranial ve Transfaringeal (Parma) projeksiyonlar
Açıklama: Transkranial ve transfaringeal (Parma) projeksiyonların her ikisi de eklem ve kondilin lateral düzlemden izlenmesini sağlayan tekniklerdir. Transorbital projeksiyon kondilin frontal düzlemdeki medial-lateral yüzünü, submentoverteks ise horizontal düzlemde kafatabanını görüntüler. İki tekniğin aynı düzlemi göstermesi, radyografik süperpozisyon ve tanı hedeflerinde benzer endikasyonlara sahip olmalarını açıklar.

---

### ÇİFT 31 (Benzerlik: 0.72)

**Soru 1 (ID: 78eca000-5b34-4336-b44e-9482c760ffc5)**
Soru Kökü: Fizyolojik TME remodeling süreci ile dejeneratif eklem hastalığı (osteoartrit) radyolojik olarak ayırt edilirken, aşağıdaki bulgulardan hangisi sürecin patolojik dejenerasyona (DJD) dönüştüğünün kesin göstergesidir?
Doğru Şık (D): Kondil anterosuperior yüzünde osteofit ve korteks erozyonu varlığı
Açıklama: Remodeling, düzleşme ve subkondral sklerozis gibi adaptif ve kıkırdak-kemik bütünlüğünü koruyan radyolojik değişiklikler içerir. Bu sınırın aşılıp kıkırdağın yıkıldığı, korteksin erozyona uğradığı ve patolojik yeni kemik yapımı olan 'osteofitlerin' görüldüğü nokta, dejeneratif eklem hastalığının (osteoartrit) spesifik radyolojik evresidir.

**Soru 2 (ID: 85c8f05f-d019-4a35-b145-544af816b2b5)**
Soru Kökü: Aşırı mekanik yüklere maruz kalan TME'de kemik ve kıkırdak dokusunun bu yüklere karşı geliştirdiği, kondil ve artiküler eminens morfolojisinde değişikliklerle sonuçlanan, inflamatuar olmayan adaptif hücresel cevap süreci aşağıdakilerden hangisidir?
Doğru Şık (D): Remodeling
Açıklama: Remodeling, ekleme etki eden aşırı biyomekanik kuvvetlere karşı osseöz doku ve kıkırdağın şeklini değiştirerek verdiği inflamatuar olmayan fizyolojik adaptif bir cevaptır. Dejeneratif eklem hastalığı (osteoartrit) ise bu adaptasyon kapasitesinin aşıldığı ve destrüksiyonun (erozyon, osteofit) başladığı patolojik bir süreçtir.

---

### ÇİFT 32 (Benzerlik: 0.72)

**Soru 1 (ID: 41b1f5c7-fc17-416b-888d-f06660b5ea83)**
Soru Kökü: Manyetik Rezonans Görüntüleme (MRG) ile TME incelemesi yapılan bir hastada, 'redüksiyonlu disk deplasmanı' tanısı koyabilmek için izlenmesi gereken spesifik dinamik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Ağız kapalı pozisyonda anteriora deplase olan diskin, ağız açık pozisyonda normal fizyolojik ilişkisine dönmesi
Açıklama: Disk redüksiyonu, diskin ağız kapalıyken yer değiştirmiş (deplase) pozisyonda olması, ancak ağız açma hareketi sırasında kondilin tekrar diskin ince orta kısmına oturarak diski normal fizyolojik pozisyonuna alması durumudur. Diskin anteriora yer değiştirmiş olarak kalması ise redüksiyonsuz deplasmanı ifade eder.

**Soru 2 (ID: 703b85ca-a72a-4605-88d6-640ffbd7b729)**
Soru Kökü: MR görüntülemesinde diskin tüm hareket sınırları boyunca anterior konumda kaldığı saptanan (nonredüksiyonlu disk deplasmanı) bir hastada, uzun dönemde eklem diskinde aşağıdaki morfolojik değişikliklerden hangisinin gerçekleşmesi beklenir?
Doğru Şık (C): Normal bikonkav şeklini kaybederek daha kalın ve fibrotik hale gelmesi
Açıklama: Uzun süredir devam eden nonredükte (yerine dönmeyen) disk deplasmanlarında disk, kondilin baskısı ve fonksiyonel yüklerin anormal dağılımı altında kalarak normal bikonkav şeklini kaybeder; kalıcı olarak deforme olur, kalınlaşır ve fibrotik bir dokuya dönüşür. Bu morfolojik bozulma geri dönüşümsüzdür ve cerrahi olmayan tedavilerin başarı şansını ciddi şekilde düşürür. Diskin sıvı alması veya rezorbe olması temel patoloji değildir.

---

### ÇİFT 33 (Benzerlik: 0.71)

**Soru 1 (ID: aaf4f68b-d02a-487e-9750-c10a582ea51c)**
Soru Kökü: Çiğneme sistemi kas dinamiğinde suprahyoid ve infrahyoid kasların dengeli çalışması büyük öneme sahiptir. Aşağıdaki infrahyoid kaslardan hangisinin yapısı, iki farklı ventere (karına) ayrılarak anatomik varyasyon gösterir?
Doğru Şık (D): M. omohyoideus
Açıklama: M. omohyoideus, 'venter superior' ve 'venter inferior' olmak üzere iki ayrı karından oluşan tek infrahyoid kastır. M. digastricus da iki ventere (anterior/posterior) sahiptir ancak o bir suprahyoid kastır. M. stylohyoideus suprahyoid olup tek yapılıyken, diğer infrahyoid kaslar (sternohyoid, sternothyroid, thyrohyoid) venter ayrımı göstermez.

**Soru 2 (ID: ac28e37f-a0c8-4ac5-b198-ab37c0dd1344)**
Soru Kökü: Çenenin açılması hareketine yardım eden kaslar temel olarak suprahyoid, infrahyoid kaslar ve yerçekimidir. Aşağıdakilerden hangisi çenenin açılmasına destek olan suprahyoid kaslardan biridir?
Doğru Şık (A): M. geniohyoideus
Açıklama: M. geniohyoideus, M. digastricus, M. stylohyoideus ve M. mylohyoideus ile birlikte çenenin açılmasına yardım eden suprahyoid kaslar grubundandır. Diğer şıklarda verilen M. sternohyoideus, M. sternothyroideus, M. omohyoideus ve M. thyrohyoideus kasları ise infrahyoid kaslar grubunda yer almaktadır. Kas fonksiyonlarının anatomik yerleşime göre kategorize edilmesi, klinik muayenede kas hassasiyeti palpe edilirken kritik rol oynar.

---

### ÇİFT 34 (Benzerlik: 0.71)

**Soru 1 (ID: 6c61e05e-72ed-41a9-b5f7-4b52404c514d)**
Soru Kökü: Radyografik incelemede kondil başının mandibular fossa içerisindeki eksentrik pozisyonları çeşitli patolojilere işaret eder. Buna göre, eklem aralığında kondilin belirgin şekilde **anterior** pozisyonda izlenmesi aşağıdaki durumlardan hangisiyle en çok ilişkilidir?
Doğru Şık (B): Juvenil romatoid artrit
Açıklama: Kondilin anteriora pozisyonlanması karakteristik olarak juvenil romatoid artrit vakalarında görülür. Buna karşılık; posterior pozisyon disk deplasmanlarında, inferior pozisyon (eklem aralığında genişleme) eklem içi sıvı/kan (efüzyon/hemoraji) varlığında, superior pozisyon ise intrakapsüler doku kaybı veya disk perforasyonu sonucunda osseoz kontakt artışıyla izlenir.

**Soru 2 (ID: 725c7473-1b01-4e63-a218-0e2c3dc59684)**
Soru Kökü: Yirmi dört yaşındaki erkek hastanın temporomandibular eklem tomografisinde; posterior eklem aralığının genişliğinin, anterior eklem aralığı genişliğine oranla daha fazla olduğu izlenmiştir. Bu bulguya göre kondilin pozisyonu aşağıdakilerden hangisidir?
Doğru Şık (D): Protrüze
Açıklama: Posterior eklem aralığı genişliği anteriora oranla daha geniş olduğunda kondil protrüze olarak kabul edilir. Eğer posterior eklem aralığı anteriordan dar olsaydı kondil retrüze olarak değerlendirilirdi. Bu asimetrik eklem boşluğu dağılımı, genellikle disk deplasmanları veya kas spazmları sonucunda kondilin fossa içindeki fizyolojik konumunu kaybetmesiyle oluşur.

---

### ÇİFT 35 (Benzerlik: 0.71)

**Soru 1 (ID: 15569193-fa46-47c3-9107-a28491789c5e)**
Soru Kökü: Aşağıdaki kaslardan hangisi çenenin açılma hareketine yardımcı elemanlardan biri **değildir**?
Doğru Şık (D): M. pterygoideus medialis
Açıklama: M. pterygoideus medialis, M. masseter ve M. temporalis ile birlikte mandibulayı eleve ederek çeneyi kapatan (elevatör) kaslardandır. Çenenin açılmasını (depresyon) başlatan ana kas lateral pterygoiddir, bu harekete suprahyoid ve infrahyoid kaslar ile yerçekimi yardım eder. Medial pterygoidin açılma mekanizmasında yeri yoktur.

**Soru 2 (ID: e00b9135-f3c6-4405-9f42-ba03b7e53b0c)**
Soru Kökü: Kırk beş yaşında kadın hasta, yemek yerken çiğneme işleminin açma fazında boynunun ön-üst kısmında çekilme hissi yaşadığını belirtiyor. Çenenin açılmasına (depresyon) yardım eden kas gruplarından suprahyoid kaslar değerlendirilmektedir. Aşağıdakilerden hangisi suprahyoid bir kas **değildir**?
Doğru Şık (A): M. omohyoideus venter superior
Açıklama: Suprahyoid kaslar; digastrik (anterior/posterior venter), stylohyoid, mylohyoid ve geniohyoid kaslarından oluşur ve hyoidi fikse ederek çenenin açılmasına destek verirler. Omohyoideus ise tiroid ve sternuma uzanan bir infrahyoid kastır. Infrahyoid kaslar hyoid kemiği aşağı çekerek suprahyoidlere pasif zemin hazırlar.

---

### ÇİFT 36 (Benzerlik: 0.71)

**Soru 1 (ID: c5440fb5-ec7b-43a7-b4f9-f8aafb3e142b)**
Soru Kökü: Mandibulanın açılması ve lateral hareketleri esnasında anatomik yapılar koordineli bir sinerji gösterir. Sadece kondil boynundaki pterygoid çukurcuğa tutunarak çeneyi öne ve aşağı doğru yönlendiren ve lateral hareketleri sağlayan yapı aşağıdakilerden hangisidir?
Doğru Şık (C): M. pterygoideus lateralis alt parça
Açıklama: Çenenin açılmasını (depresyon) ve kontralateral hareketini başlatan temel kas M. pterygoideus lateralis'tir. Özellikle alt parçası kondil boynuna tutunarak translasyonel hareketi yürütürken, üst parça diski stabilize eder. Medial pterygoid lateral harekete katılsa da temel işlevi elevasyondur.

**Soru 2 (ID: fa83b8f3-7c7c-4a14-9846-4a68719780e1)**
Soru Kökü: Ağız açılmasını başlatan ve mandibulayı öne/aşağıya doğru çeken lateral pterygoid kasın alt parçası (inferior head) hangi spesifik anatomik yapıya yapışır?
Doğru Şık (D): Kondilde bulunan pterygoid çukurcuk (fovea pterygoidea)
Açıklama: Lateral pterygoid kasın alt parçası, lateral pterygoid plağın dış yüzeyinden başlayarak doğrudan kondil boynundaki pterygoid çukurcuğa (fovea) tutunur ve kondili öne çeker. Üst parça ise sfenoidin büyük kanadından başlayıp ağırlıklı olarak eklem diski ve TME kapsülüne tutunarak disk-kondil senkronizasyonunu sağlar.

---

### ÇİFT 37 (Benzerlik: 0.71)

**Soru 1 (ID: 7e3c8b99-2907-4060-a5b9-da78c90f5cd2)**
Soru Kökü: Trismus (çene açma kısıtlılığı) şikayetiyle başvuran otuz yaşındaki erkek hastada mandibula elevasyonundan (kapanmasından) sorumlu olan bir kasta spazm saptanmıştır. Aşağıdaki kaslardan hangisi mandibulayı eleve eden ana kaslardan biri **değildir**?
Doğru Şık (C): M. pterygoideus lateralis
Açıklama: Mandibula elevasyonunu (çeneyi kapatmayı) sağlayan asıl kaslar masseter, temporalis ve medial pterygoiddir. M. pterygoideus lateralis ise çenenin açılma (protrüzyon ve depresyon) hareketini başlatan antagonist kastır. Spazm durumlarında çeneyi açamamanın nedeni elevator kaslardaki tetanik kasılmadır.

**Soru 2 (ID: e00b9135-f3c6-4405-9f42-ba03b7e53b0c)**
Soru Kökü: Kırk beş yaşında kadın hasta, yemek yerken çiğneme işleminin açma fazında boynunun ön-üst kısmında çekilme hissi yaşadığını belirtiyor. Çenenin açılmasına (depresyon) yardım eden kas gruplarından suprahyoid kaslar değerlendirilmektedir. Aşağıdakilerden hangisi suprahyoid bir kas **değildir**?
Doğru Şık (A): M. omohyoideus venter superior
Açıklama: Suprahyoid kaslar; digastrik (anterior/posterior venter), stylohyoid, mylohyoid ve geniohyoid kaslarından oluşur ve hyoidi fikse ederek çenenin açılmasına destek verirler. Omohyoideus ise tiroid ve sternuma uzanan bir infrahyoid kastır. Infrahyoid kaslar hyoid kemiği aşağı çekerek suprahyoidlere pasif zemin hazırlar.

---

### ÇİFT 38 (Benzerlik: 0.71)

**Soru 1 (ID: c4c0e46e-2315-478e-895e-2d024e7dd4b4)**
Soru Kökü: Juvenil Romatoid Artrit (Still's Hastalığı) olgularında TME bölgesinde izlenen spesifik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Kondil erozyonuna bağlı olarak ortaya çıkan 'sivri kalem ucu' şeklinde kondil görünümü
Açıklama: Juvenil Romatoid Artritte kronik ve şiddetli inflamasyon kıkırdak ve kemik destrüksiyonuna yol açar. Erozyonlar kondilin çevresini eriterek radyografik olarak tipik 'sivri kalem ucu' şeklini almasına neden olur. Ayrıca büyümenin durmasına bağlı olarak antegonial çentik derinleşir ve korpus-ramus arası açı genişler (daralmaz).

**Soru 2 (ID: d1115c1b-a0fc-4d62-a405-d5cd76e8edf3)**
Soru Kökü: Juvenil artrit ile erişkin dönemde başlayan romatoid artritin temporomandibular eklem üzerindeki klinik/radyolojik etkileri karşılaştırıldığında, juvenil tipe daha spesifik olan bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Mandibuler büyüme merkezinin yıkımı sonucu oluşan iskeletsel mikrognati
Açıklama: Her iki hastalık da inflamatuar pannus dokusu ve kemik rezorpsiyonu (erozyon) ile karakterizedir. Ancak juvenil artrit, büyüme dönemindeki çocukları etkilediği için kondildeki büyüme merkezini harap eder. Bu durum erişkinlerden farklı olarak mikrognati, kuş yüzü profili ve genişlemiş mandibuler açı gibi şiddetli iskeletsel büyüme geriliği bulguları yaratır.

---

### ÇİFT 39 (Benzerlik: 0.71)

**Soru 1 (ID: 33e38e22-84d1-401e-a751-a02d32aa6add)**
Soru Kökü: İlk olarak Boering tarafından tanımlanan ve mandibuler büyüme bozukluğuna sebep olan Juvenil Artrozis tablosunun patogenezinde, klinik tanıyı karmaşıklaştıran en önemli faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kondilin eskiden normal olup büyüme döneminde anomalik değişikliğe maruz kalması
Açıklama: Juvenil Artrozis, konjenital veya birincil gelişimsel kondiler hipoplazilerden (doğuştan küçük kondil) temel bir mekanizmayla ayrılır: Boering'in tespitine göre bu hastaların kondilleri başlarda tamamen normal bir büyüme potansiyeline sahipken, büyüme evresinde bilinmeyen bir nedenden ötürü duraksar ve deforme (şapkalı mantar) olur. Bu kazanılmış-gelişimsel kronoloji tanıyı kritik kılar.

**Soru 2 (ID: a89fa930-724b-4869-8499-d321298230c5)**
Soru Kökü: On dört yaşındaki kadın hastanın radyolojik muayenesinde sağ kondilde belirgin düzleşme ve kondil boynunda kısalma izlenmiştir. Tanı 'Juvenil Artrozis' olarak düşünülmektedir. Bu durumun radyolojik olarak en çok karıştığı patoloji olan 'Kondilin gelişimsel hipoplazisi'nden ayırt edilmesindeki en temel patofizyolojik fark aşağıdakilerden hangisidir?
Doğru Şık (A): Juvenil artroziste kondilin önceden normal formda gelişmiş olup sonradan morfolojisini kaybetmesi
Açıklama: Kondilin gelişimsel hipoplazisi, büyüme merkezindeki konjenital eksiklik veya hasar nedeniyle kondilin her zaman orantılı olarak küçük geliştiği tablodur. Buna karşın Boering'in tanımladığı Juvenil Artrozis, başlangıçta normal gelişen kondilin büyüme sırasında ikincil bir etkilenmeyle morfolojik anomali ('şapkalı mantar' şekli) ve büyüme duraklaması gösterdiği özel bir formdur.

---

### ÇİFT 40 (Benzerlik: 0.71)

**Soru 1 (ID: 78eca000-5b34-4336-b44e-9482c760ffc5)**
Soru Kökü: Fizyolojik TME remodeling süreci ile dejeneratif eklem hastalığı (osteoartrit) radyolojik olarak ayırt edilirken, aşağıdaki bulgulardan hangisi sürecin patolojik dejenerasyona (DJD) dönüştüğünün kesin göstergesidir?
Doğru Şık (D): Kondil anterosuperior yüzünde osteofit ve korteks erozyonu varlığı
Açıklama: Remodeling, düzleşme ve subkondral sklerozis gibi adaptif ve kıkırdak-kemik bütünlüğünü koruyan radyolojik değişiklikler içerir. Bu sınırın aşılıp kıkırdağın yıkıldığı, korteksin erozyona uğradığı ve patolojik yeni kemik yapımı olan 'osteofitlerin' görüldüğü nokta, dejeneratif eklem hastalığının (osteoartrit) spesifik radyolojik evresidir.

**Soru 2 (ID: adddbe6e-694d-4130-99e8-c36345bac69b)**
Soru Kökü: Elli beş yaşındaki hasta, her iki TME'de krepitus (sürtünme) sesi, ağrı ve hareket kısıtlılığı ile kliniğe gelmiştir. Panoramik radyografide kondil yüzeylerinde düzleşme, subkondral skleroz, korteks kaybı ve kondilin anterosuperior yüzünde 'osteofit' adı verilen yeni kemik formasyonları izlenmiştir. Bu klinik ve radyografik bulgular aşağıdaki patolojilerden hangisi ile **en yüksek** uyumu gösterir?
Doğru Şık (B): Dejeneratif eklem hastalığı (Osteoartrit)
Açıklama: Dejeneratif eklem hastalığı (osteoartrit); eklem kıkırdağının aşınması, kondil düzleşmesi, subkondral skleroz ve karakteristik olarak osteofit (kemik çıkıntısı) oluşumu ile ilerleyen noninflamatuar bir proliferatif bozukluktur. Krepitus sesi kıkırdak kaybı sonrası kemik-kemiğe temasın klasik klinik bulgusudur.

---

### ÇİFT 41 (Benzerlik: 0.71)

**Soru 1 (ID: d3babcd4-6332-4ad2-93f8-512cefb1d355)**
Soru Kökü: Dejeneratif eklem hastalığında (osteoartrit) radyografik olarak saptanan ve subkondral alanda düzensiz sınırlı radyolüsent alanlar olarak izlenen 'Ely' kistlerinin (subkondral kemik kisti) mikroskobik içeriğinde aşağıdakilerden hangisinin bulunması **beklenmez**?
Doğru Şık (B): Epitelyal döşeyici
Açıklama: Osteoartritte subkondral kemikte izlenen 'Ely' kistleri isimlendirme olarak kist olmalarına rağmen patolojik olarak gerçek bir kist değillerdir, dolayısıyla içlerini döşeyen bir epitelyal tabaka yoktur. Bu lezyonlar kronik bası ve mikrotravma sonucu kemik iliğinde oluşan fibröz doku, granülasyon dokusu ve osteoid içeren non-kistik kemik dejenerasyon alanlarıdır.

**Soru 2 (ID: f686306d-d7d6-411d-9c21-3ad9ed8a3237)**
Soru Kökü: Radyografik incelemede kondilde tespit edilen aşağıdaki bulgulardan hangisi tek başına izlendiğinde dejeneratif eklem hastalığından ziyade başarılı bir adaptif 'remodeling' sürecini işaret eder?
Doğru Şık (C): Eklem yapan yüzeyde erozyon olmaksızın subkondral skleroz ve düzleşme
Açıklama: Remodeling radyografik olarak eklem yüzeyinde kortikal kalınlaşma, düzleşme ve subkondral skleroz ile karakterizedir. Kondil korteksinde erozyon, osteofit oluşumu ve subkondral kist varlığı ise adaptasyonun başarısız olduğunu ve sürecin dejeneratif eklem hastalığına (osteoartrite) dönüştüğünü gösterir.

---

### ÇİFT 42 (Benzerlik: 0.70)

**Soru 1 (ID: 79431b4d-0b15-4f16-ab51-87df0a042788)**
Soru Kökü: TME'de sinoviyal kondromatozise benzer radyografik bulgular (radyopak serbest cisimler) veren, ancak patogenezinde eklem boşluğuna kalsiyum pirofosfat dihidrat (CPPD) kristallerinin çökmesi yatan hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Kondrokalsinozis (Pseudogut)
Açıklama: Kondrokalsinozis (Pseudogut), kalsiyum pirofosfat dihidrat kristallerinin kıkırdak ve eklem aralığına çökmesiyle oluşur. TME tutulumu nadirdir ancak gerçekleştiğinde radyografik olarak ince ve eşit dağılımlı kalsifikasyonlar izlenir. Görünüm itibariyle sinoviyal kondromatozisle karışsa da etyolojisindeki kristal çökmesi ve kolşisin tedavisine yanıt vermesiyle ayrılır.

**Soru 2 (ID: faaaab62-bb7d-4acc-9a24-c3d7aeef7253)**
Soru Kökü: Otuz beş yaşındaki hastanın radyolojik muayenesinde TME eklem aralığında ve yumuşak doku içinde, eklem kapsülüne lokalize veya serbest dolaşan çoğul radyopak cisimcikler (eklem fareleri) tespit edilmiştir. Bu duruma yol açan ve sinoviyal membranın metaplazisi ile karakterize hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Sinoviyal kondromatozis
Açıklama: Sinoviyal kondromatozis, sinoviyal membranın konnektif dokularında kıkırdak yapılı multipl nodüllerin metaplastik oluşumudur. Bu nodüller kalsifiye olup koparak eklem faresi (loose body) haline gelir. Kondrokalsinoziste (Pseudogut) de kalsifikasyonlar olsa da bunlar daha küçük, diffüz kristal tortulardır ve sinoviyal kitle özellikleri göstermezler.

---

### ÇİFT 43 (Benzerlik: 0.70)

**Soru 1 (ID: 3870f4ab-0142-433a-a0f4-2a6bc9abca74)**
Soru Kökü: Bir TME internal düzensizliği olgusunun T1 ağırlıklı MRG incelemesinde, artiküler diskin fizyolojik olarak ayırt edilmesini sağlayan karakteristik görüntüleme bulgusu aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik ve kas dokusu arasında izlenen, düşük sinyal intensitesine sahip (koyu) alan
Açıklama: MRG'de normal artiküler disk, fibröz yapısı nedeniyle düşük sinyal intensitesine sahiptir ve kemik ile kas dokusu arasında koyu siyah bir bant olarak izlenir. Bilaminar bölge ise yüksek vaskülarizasyonu nedeniyle diske kıyasla daha açık renkli (yüksek sinyal intensiteli) görülür.

**Soru 2 (ID: a5aa4e23-1c71-41f8-b60a-589028a8f2ca)**
Soru Kökü: Ağır bir temporomandibular eklem (TME) travması sonrasında başvuran hastada kısıtlı çene hareketi mevcuttur. T2 ağırlıklı MR görüntülerinde eklem aralığında patolojik olarak yüksek sinyal intensitesi (parlak bölge) izlenmektedir. Bu spesifik MRG bulgusu klinikte aşağıdakilerden hangisi ile uyumludur?
Doğru Şık (C): Travmaya sekonder eklem efüzyonu
Açıklama: T2 ağırlıklı MR sekansında sıvı içeren dokular yüksek sinyal intensitesine (parlak renge) sahiptir. Travma veya dejenaratif hastalıklar sonucu eklem içinde kan (hemartroz) veya eksüda (efüzyon) birikmesi T2'de parlak alan olarak izlenir. Disk veya fibröz adezyonlar gibi yoğun bağ dokusu elemanları düşük sinyal intensitesi (koyu) gösterirken, kalsifikasyonlar genellikle siyah (sinyalsiz) görünür.

---

### ÇİFT 44 (Benzerlik: 0.70)

**Soru 1 (ID: 8f8ba099-4236-407d-957e-3bc33bfaa7d2)**
Soru Kökü: TME cerrahisi planlanan bir vakada, kondilin aksiyal oryantasyonu (mediolateral açısı) ile frontal morfolojisinin karşılaştırmalı olarak üç boyut algısı oluşturacak şekilde düz grafilerle değerlendirilmesi istenmektedir. Bu klinik beklentiyi karşılayacak optimal iki farklı projeksiyon tekniği hangi seçenekte bir aradadır?
Doğru Şık (A): Transorbital ve Submentoverteks projeksiyon
Açıklama: Transorbital projeksiyon kondilin frontal düzlemde medial-lateral boyutlarını gösterirken, submentoverteks (bazal) projeksiyon horizontal (aksiyal) düzlemde kafa tabanı ile kondillerin açısal ilişkisini verir. Bu iki farklı düzlemden elde edilen bilgi, aksiyal ve koronal kesit mantığını taklit ederek cerraha 3D konseptinde anatomik oryantasyon sağlar. Transkranial ve transfaringeal olanlar ise sadece lateral düzlem sunar.

**Soru 2 (ID: bc9b0f22-ebdb-400e-a1c8-0d76bbae6ecb)**
Soru Kökü: Temporomandibular eklem görüntülemesinde kondilin medial ve lateral yüzlerinin bütünlüğünü frontal düzlemde değerlendirmek isteyen bir hekimin tercih etmesi gereken spesifik düz grafi projeksiyonu aşağıdakilerden hangisidir?
Doğru Şık (D): Transorbital projeksiyon
Açıklama: Transorbital projeksiyon, X-ışını demetinin orbitadan geçirilerek kondilin frontal düzlemde medial ve lateral kutuplarının görüntülenmesini sağlayan tekniktir. Transkranial ve transfaringeal radyografiler lateral düzlemde görüntü verirken, transorbital doğrudan frontal (koronal benzeri) düzlem değerlendirmesi sağlar. Bu yöntem, kondil başındaki asimetrilerin ve mediolateral morfolojik değişimlerin saptanmasında önemlidir.

---

### ÇİFT 45 (Benzerlik: 0.70)

**Soru 1 (ID: 11781212-b3a2-426c-b876-eb2014ddd966)**
Soru Kökü: TME biyomekaniği, üç fonksiyonel ve üç aksesuar ligament tarafından koordine edilir. Aşağıdakilerden hangisi doğrudan eklemin dislokasyonunu sınırlandıran fonksiyonel ligamentlerden biri **değildir**?
Doğru Şık (D): Sphenomandibular ligament
Açıklama: Sphenomandibular ligament, TME'nin üç ana fonksiyonel ligamentinden (Kollateral, Kapsüler, Temporomandibular) biri değil, aksesuar bir ligamenttir. Çene hareketlerine pasif bir destek sunar ancak asıl eklem kapsülü ve disk stabilizasyonunda doğrudan görevli olanlar fonksiyonel gruptakilerdir.

**Soru 2 (ID: 8e018cdc-9eca-405a-83de-d667da1323b9)**
Soru Kökü: Temporomandibular ligament, TME'nin en önemli fonksiyonel koruyucularından biridir. Bu ligamentin biyomekanik fonksiyonuyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?
Doğru Şık (E): TME aksesuar ligamentlerinden biri olup yutkunma esnasında hyoidi fikse eder.
Açıklama: Temporomandibular ligament aksesuar bir ligament değil, eklemi koruyan ana (fonksiyonel) ligamentlerden biridir. Hyoid kemik stabilizasyonu ise suprahyoid/infrahyoid kasların ve farklı fasyaların görevidir. Oblik kısmı maksimum açılmayı, horizontal kısmı ise posterior deplasmanı sınırlar.

---

### ÇİFT 46 (Benzerlik: 0.70)

**Soru 1 (ID: e0ad8be2-7800-47f5-a612-4eaf67574962)**
Soru Kökü: Daha önce TME cerrahisi geçirmiş bir hastada, eklem aralığında skar (fibröz adezyon) dokusu geliştiğinden şüphelenilmektedir. MR'da düşük sinyalli olduğu için tam sınırları net izlenemeyen bu adezyonların hem diagnostik hem de enjekte edilen basınç sayesinde terapötik (adezyonların yırtılarak mobilitenin artması) etki gösteren görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (A): Artrografi
Açıklama: Fibröz adezyonlar, eklem içi skar dokularıdır ve artrografi ile en iyi şekilde izlenirler. Floroskopi eşliğinde radyoopak kontrast maddenin eklem içine basınçla enjekte edilmesi, yapışıklıkların bir kısmını mekanik olarak yırtabilir. Bu sayede artrografi, internal adezyonlarda hem diagnostik bir haritalama sağlar hem de işlem sonrası eklem açıklığını artırarak terapötik bir fayda sunar.

**Soru 2 (ID: eb0962d4-7b04-4beb-a223-64634612eb8a)**
Soru Kökü: Bir TME görüntüleme protokolü olan artrografi, disk ve eklem kapsülünün incelemesinde hekime önemli klinik veriler sunar. Aşağıdakilerden hangisi bu prosedürün klinik avantajlarından biri **değildir**?
Doğru Şık (E): Uygulamanın hasta için tamamen noninvaziv ve ağrısız bir yöntem olması
Açıklama: Artrografi, eklem içine iyotlu kontrast madde enjeksiyonu gerektirdiğinden oldukça invaziv ve hasta için ağrılı bir işlemdir. Aynı zamanda yüksek dozda iyonize radyasyon (floroskopi) içerir. Dinamik bilgi, perforasyon teşhisi ve mekanik yıkama/adezyon yırtılması işlemin majör klinik avantajlarıdır.

---

### ÇİFT 47 (Benzerlik: 0.69)

**Soru 1 (ID: 11781212-b3a2-426c-b876-eb2014ddd966)**
Soru Kökü: TME biyomekaniği, üç fonksiyonel ve üç aksesuar ligament tarafından koordine edilir. Aşağıdakilerden hangisi doğrudan eklemin dislokasyonunu sınırlandıran fonksiyonel ligamentlerden biri **değildir**?
Doğru Şık (D): Sphenomandibular ligament
Açıklama: Sphenomandibular ligament, TME'nin üç ana fonksiyonel ligamentinden (Kollateral, Kapsüler, Temporomandibular) biri değil, aksesuar bir ligamenttir. Çene hareketlerine pasif bir destek sunar ancak asıl eklem kapsülü ve disk stabilizasyonunda doğrudan görevli olanlar fonksiyonel gruptakilerdir.

**Soru 2 (ID: b37a8360-a0da-44df-b3dd-b4fc7961350c)**
Soru Kökü: Ağız açıklığı sırasında TME diskinin ve kondilin posteriora doğru hareketini mekanik olarak sınırlayan ve böylece arkada yer alan vaskülarize retrodiskal yapıları travmadan koruyan spesifik ligament yapısı aşağıdakilerden hangisidir?
Doğru Şık (D): Temporomandibular ligamentin horizontal kısmı
Açıklama: Temporomandibular ligamentin horizontal bölümü, diskin ve kondilin posteriora doğru hareketini sınırlar ve retrodiskal dokuları sıkışma travmasına karşı korur. Aynı ligamentin oblik kısmı ise kondilin maksimum ağız açıklığını belirleyerek boyun kısmının daha ileri hareketini engeller. Kollateral ligamentler diskin kondilden uzaklaşmasını önlerken, kapsüler ligament sinoviyal sıvının dışarı çıkmasını ve eklemin dislokasyonunu engeller.

---

### ÇİFT 48 (Benzerlik: 0.69)

**Soru 1 (ID: 331edfe4-890f-40de-b019-dee715ccba40)**
Soru Kökü: Kalsiyum pirofosfat dihidrat kristallerinin TME eklem boşluğuna çökmesiyle (pseudogut) karakterize kondrokalsinozis hastalığının spesifik tedavisi aşağıdakilerden hangisidir?
Doğru Şık (E): Kristal tortularının cerrahi olarak uzaklaştırılması, kolşisin ve NSAİİ kullanımı
Açıklama: Kondrokalsinozis (pseudogut), eklemde kalsiyum kristallerinin inflamasyon yaratmasıdır. Tedavisinde semptomatik kontrol için NSAİİ'ler, steroidler veya kolşisin (kristal fagositozunu baskılayan) kullanılır; kesin mekanik tedavi ise biriken kristal tortularının cerrahi olarak yıkanarak veya eksize edilerek uzaklaştırılmasıdır.

**Soru 2 (ID: 79431b4d-0b15-4f16-ab51-87df0a042788)**
Soru Kökü: TME'de sinoviyal kondromatozise benzer radyografik bulgular (radyopak serbest cisimler) veren, ancak patogenezinde eklem boşluğuna kalsiyum pirofosfat dihidrat (CPPD) kristallerinin çökmesi yatan hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Kondrokalsinozis (Pseudogut)
Açıklama: Kondrokalsinozis (Pseudogut), kalsiyum pirofosfat dihidrat kristallerinin kıkırdak ve eklem aralığına çökmesiyle oluşur. TME tutulumu nadirdir ancak gerçekleştiğinde radyografik olarak ince ve eşit dağılımlı kalsifikasyonlar izlenir. Görünüm itibariyle sinoviyal kondromatozisle karışsa da etyolojisindeki kristal çökmesi ve kolşisin tedavisine yanıt vermesiyle ayrılır.

---

### ÇİFT 49 (Benzerlik: 0.69)

**Soru 1 (ID: 3870f4ab-0142-433a-a0f4-2a6bc9abca74)**
Soru Kökü: Bir TME internal düzensizliği olgusunun T1 ağırlıklı MRG incelemesinde, artiküler diskin fizyolojik olarak ayırt edilmesini sağlayan karakteristik görüntüleme bulgusu aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik ve kas dokusu arasında izlenen, düşük sinyal intensitesine sahip (koyu) alan
Açıklama: MRG'de normal artiküler disk, fibröz yapısı nedeniyle düşük sinyal intensitesine sahiptir ve kemik ile kas dokusu arasında koyu siyah bir bant olarak izlenir. Bilaminar bölge ise yüksek vaskülarizasyonu nedeniyle diske kıyasla daha açık renkli (yüksek sinyal intensiteli) görülür.

**Soru 2 (ID: 585a5ed5-f390-4b5e-b91a-7663d7229a05)**
Soru Kökü: Diskal yer değiştirmesi olan bir hastada Manyetik Rezonans Görüntüleme (MRG) ile hem artiküler diskin konumu hem de efüzyon varlığı araştırılacaktır. Radyoloğun inflamasyon ve sıvı birikimini net olarak görebilmesi için özellikle hangi sekans ağırlıklı imajları değerlendirmesi gerekir?
Doğru Şık (B): T2 ağırlıklı imajlar
Açıklama: MR görüntülemede T2 ağırlıklı sekanslar sıvı içeren dokularda (ödem, inflamasyon, efüzyon) yüksek sinyal intensitesi (parlak beyaz) verir ve bu nedenle efüzyon teşhisinde altın standarttır. T1 ve proton ağırlıklı imajlar ise anatomik sınırları, osseoz yapıları ve konnektif dokunun (diskin) doğal pozisyonunu en iyi gösteren sekanslardır.

---

### ÇİFT 50 (Benzerlik: 0.69)

**Soru 1 (ID: 0b180e80-4193-4659-9c02-6cb9d13f5b98)**
Soru Kökü: TME'de yer alan ve artiküler diski medial ile lateral kutuplarından kondile bağlayan; temel fonksiyonu çene hareketleri sırasında diskin kondilden uzaklaşmasını önlemek olan bağ dokusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kollateral ligamentler
Açıklama: Kollateral (diskal) ligamentler diski kondilin medial ve lateral kutuplarına sıkıca bağlayarak, fonksiyon sırasında diskin kondil başından bağımsız şekilde uzağa gitmesini engeller. Temporomandibular ligament ise gerilerek maksimum ağız açıklığını sınırlar ve posterior deplasmanı korurken, diski kondile sabitleme işlevi kollateral ligamentlere aittir.

**Soru 2 (ID: 11781212-b3a2-426c-b876-eb2014ddd966)**
Soru Kökü: TME biyomekaniği, üç fonksiyonel ve üç aksesuar ligament tarafından koordine edilir. Aşağıdakilerden hangisi doğrudan eklemin dislokasyonunu sınırlandıran fonksiyonel ligamentlerden biri **değildir**?
Doğru Şık (D): Sphenomandibular ligament
Açıklama: Sphenomandibular ligament, TME'nin üç ana fonksiyonel ligamentinden (Kollateral, Kapsüler, Temporomandibular) biri değil, aksesuar bir ligamenttir. Çene hareketlerine pasif bir destek sunar ancak asıl eklem kapsülü ve disk stabilizasyonunda doğrudan görevli olanlar fonksiyonel gruptakilerdir.

---

### ÇİFT 51 (Benzerlik: 0.69)

**Soru 1 (ID: aaf4f68b-d02a-487e-9750-c10a582ea51c)**
Soru Kökü: Çiğneme sistemi kas dinamiğinde suprahyoid ve infrahyoid kasların dengeli çalışması büyük öneme sahiptir. Aşağıdaki infrahyoid kaslardan hangisinin yapısı, iki farklı ventere (karına) ayrılarak anatomik varyasyon gösterir?
Doğru Şık (D): M. omohyoideus
Açıklama: M. omohyoideus, 'venter superior' ve 'venter inferior' olmak üzere iki ayrı karından oluşan tek infrahyoid kastır. M. digastricus da iki ventere (anterior/posterior) sahiptir ancak o bir suprahyoid kastır. M. stylohyoideus suprahyoid olup tek yapılıyken, diğer infrahyoid kaslar (sternohyoid, sternothyroid, thyrohyoid) venter ayrımı göstermez.

**Soru 2 (ID: e00b9135-f3c6-4405-9f42-ba03b7e53b0c)**
Soru Kökü: Kırk beş yaşında kadın hasta, yemek yerken çiğneme işleminin açma fazında boynunun ön-üst kısmında çekilme hissi yaşadığını belirtiyor. Çenenin açılmasına (depresyon) yardım eden kas gruplarından suprahyoid kaslar değerlendirilmektedir. Aşağıdakilerden hangisi suprahyoid bir kas **değildir**?
Doğru Şık (A): M. omohyoideus venter superior
Açıklama: Suprahyoid kaslar; digastrik (anterior/posterior venter), stylohyoid, mylohyoid ve geniohyoid kaslarından oluşur ve hyoidi fikse ederek çenenin açılmasına destek verirler. Omohyoideus ise tiroid ve sternuma uzanan bir infrahyoid kastır. Infrahyoid kaslar hyoid kemiği aşağı çekerek suprahyoidlere pasif zemin hazırlar.

---

