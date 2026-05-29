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

### ÇİFT 1 (Benzerlik: 0.81)

**Soru 1 (ID: 7dd39fee-89f1-4c9e-9e35-c8f57587c4bb)**
Soru Kökü: Sistemik Lupus Eritematozus (SLE) hastalarında spontan düşükler ve trombotik ataklarla seyreden Antifosfolipit sendromunda, otoantikorların hedef aldığı proteinler arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (B): Fibrinojen
Açıklama: Antifosfolipit sendromunda dolaşan otoantikorlar doğrudan fosfolipitlerin kendisine değil, fosfolipitlere bağlı plazma proteinlerine (protrombin, annexin V, beta-2-glikoprotein I, protein S ve protein C) karşı gelişir. Fibrinojen bu otoantikorların bağlandığı spesifik hedefler arasında yer almaz.

**Soru 2 (ID: c2dbc66a-3689-4815-98f5-268d3d4411f3)**
Soru Kökü: Yirmi sekiz yaşındaki kadın hasta, ardışık üçüncü spontan abortus şikayetiyle başvuruyor. Laboratuvar incelemelerinde yalancı VDRL pozitifliği saptanan hastanın, sistemik lupus eritematozus sekonderi antifosfolipit sendromu olduğu belirleniyor. Bu sendroma yol açan otoantikorların bağlandığı protein hedeflerinden biri aşağıdakilerden hangisi **değildir**?
Doğru Şık (C): Trombomodulin
Açıklama: Antifosfolipit sendromundaki otoantikorlar sıklıkla protrombin, annexin V, β2-glikoprotein I, protein S ve protein C'ye karşı reaksiyon verir. Trombomodulin endotel yüzeyinde trombinin prokoagülan etkisini antikoagülan etkiye çeviren bir reseptör olmasına rağmen, bu sendromda hedeflenen spesifik proteinler arasında yer almaz. Hastalarda gelişen tekrarlayan düşüklerin temel nedeni vasküler trombozlardan ziyade, bu otoantikorların trofoblastik hücre gelişimini doğrudan baskılamasıdır.

---

### ÇİFT 2 (Benzerlik: 0.78)

**Soru 1 (ID: da4cf4d8-2a0c-45da-95b9-4e043667516d)**
Soru Kökü: Kırk beş yaşında kadın hasta, yüzünde göz kapaklarında mor renkli döküntüler (heliotrop raş), proksimal kaslarda güçsüzlük ve son aylarda giderek artan nefes darlığı ile klinikte değerlendirilmektedir. İncelemede noneroziv artrit ve intertisyel akciğer hastalığı saptanmıştır. Bu hastanın serumunda spesifik olarak aşağıdaki otoantikorlardan hangisinin saptanması en olasıdır?
Doğru Şık (A): Anti-Jo1
Açıklama: Dermatomiyozitte saptanan antikorlar eşlik eden sendromları tahmin etmede önemlidir. Klasik kas ve cilt bulgularına, şiddetli intertisyel akciğer hastalığı ve noneroziv artritin (Antisentataz sendromu) eşlik ettiği durumlarda en tipik marker t-RNA sentetaza karşı gelişen Anti-Jo1 antikorudur. Anti-Mi2 sadece klasik cilt bulgularıyla, P155 ise kanser birlikteliğiyle öne çıkar.

**Soru 2 (ID: 1b458db0-b95a-4787-a5d2-f8f785920448)**
Soru Kökü: Ellinci yaşlarında, yüzünde heliotrop raş ve proksimal kas güçsüzlüğü olan kadın hastada dermatomiyozit teşhisi konuyor. Sistemik taramada eşzamanlı bir internal malignite saptanan bu hastanın immünolojik profilinde en yüksek ihtimalle pozitif olması beklenen nükleer protein hedefli otoantikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-TIF1γ
Açıklama: Anti-TIF1γ (nükleer protein) otoantikoru, otoimmün miyozitlerden dermatomiyozit kliniği ile birlikte altta yatan malignitelerin varlığı ile çok yüksek korelasyon gösterir. Anti-Jo 1 intertisyel akciğer hastalığına, Anti-MDA5 ise vasküler deri lezyonlarına işaret eder. Kanser ile otoimmün paraneoplastik sendrom ilişkisini kuran temel marker Anti-TIF1γ'dır.

---

### ÇİFT 3 (Benzerlik: 0.78)

**Soru 1 (ID: 1b458db0-b95a-4787-a5d2-f8f785920448)**
Soru Kökü: Ellinci yaşlarında, yüzünde heliotrop raş ve proksimal kas güçsüzlüğü olan kadın hastada dermatomiyozit teşhisi konuyor. Sistemik taramada eşzamanlı bir internal malignite saptanan bu hastanın immünolojik profilinde en yüksek ihtimalle pozitif olması beklenen nükleer protein hedefli otoantikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-TIF1γ
Açıklama: Anti-TIF1γ (nükleer protein) otoantikoru, otoimmün miyozitlerden dermatomiyozit kliniği ile birlikte altta yatan malignitelerin varlığı ile çok yüksek korelasyon gösterir. Anti-Jo 1 intertisyel akciğer hastalığına, Anti-MDA5 ise vasküler deri lezyonlarına işaret eder. Kanser ile otoimmün paraneoplastik sendrom ilişkisini kuran temel marker Anti-TIF1γ'dır.

**Soru 2 (ID: 56f0a1d1-a5f0-4f8d-9152-7747f757cb2d)**
Soru Kökü: Dermatomiyozit tanısı alan hastalarda spesifik otoantikor profili, hastalığın klinik seyri ve eşlik eden durumlar hakkında önemli prognostik bilgiler verir. Buna göre, özellikle paraneoplastik sendrom birlikteliği (meme, kolon kanseri vb.) veya juvenil başlangıçlı dermatomiyozit ile güçlü korelasyon gösteren antikor aşağıdakilerden hangisidir?
Doğru Şık (A): Anti-P155/P140
Açıklama: Dermatomiyozitte Anti-P155/P140 antikor pozitifliği, paraneoplastik sendromlar ve juvenil dermatomiyozit klinik tablolarıyla spesifik olarak ilişkilidir. Anti-Mi2 klasik Gottron papülleri ve heliotrop döküntüyle, Anti-Jo1 ise intertisyel akciğer hastalığı ve noneroziv artrit sendromuyla (antisentataz sendromu) koreledir.

---

### ÇİFT 4 (Benzerlik: 0.77)

**Soru 1 (ID: 1b458db0-b95a-4787-a5d2-f8f785920448)**
Soru Kökü: Ellinci yaşlarında, yüzünde heliotrop raş ve proksimal kas güçsüzlüğü olan kadın hastada dermatomiyozit teşhisi konuyor. Sistemik taramada eşzamanlı bir internal malignite saptanan bu hastanın immünolojik profilinde en yüksek ihtimalle pozitif olması beklenen nükleer protein hedefli otoantikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-TIF1γ
Açıklama: Anti-TIF1γ (nükleer protein) otoantikoru, otoimmün miyozitlerden dermatomiyozit kliniği ile birlikte altta yatan malignitelerin varlığı ile çok yüksek korelasyon gösterir. Anti-Jo 1 intertisyel akciğer hastalığına, Anti-MDA5 ise vasküler deri lezyonlarına işaret eder. Kanser ile otoimmün paraneoplastik sendrom ilişkisini kuran temel marker Anti-TIF1γ'dır.

**Soru 2 (ID: 553f35e0-cb09-4a89-b8eb-32d1659d4f8f)**
Soru Kökü: Otoimmün miyozitler alt gruplara ayrılırken, hastanın klinik tablosunda kas güçsüzlüğüne eşlik eden ek sistemik bulgular ile serumda tespit edilen otoantikorlar güçlü korelasyon gösterir. Kutanöz vasküler deri lezyonları ve ciddi intertisyel akciğer hastalığı saptanan bir miyozit vakasında, hedeflenen otoantijenin viral RNA sitoplazmik reseptörü olduğu bilinmektedir. Bu hastada yüksek titrede bulunması beklenen antikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-MDA5
Açıklama: Anti-MDA5 antikorları dermatomiyozit/polimiyozit tayfında özellikle amiyopatik seyreden, şiddetli ve hızla ilerleyen intertisyel akciğer hastalığı ile karekteristik vasküler deri lezyonlarına yol açan viral RNA sitoplazmik reseptör hedeflidir. Anti-Jo 1 histidil tRNA ligaz hedefli olup farklı bir interstisyel patern gösterirken, Anti-Scl-70 diffüz skleroderma ile ilişkilidir. Kanser taraması gerektiren miyozit antikoru ise Anti-TIF1γ'dır.

---

### ÇİFT 5 (Benzerlik: 0.77)

**Soru 1 (ID: 8609089b-b591-4624-befe-1738bfc27c64)**
Soru Kökü: Altmış beş yaşında erkek hasta, parmak ekstansörleri ve ayak bileği fleksörlerinde asimetrik güçsüzlük şikayeti ile başvuruyor. Kas biyopsisinde sitoplazmada çerçeveli inklüzyonlar, berrak vakuoller saptanıyor. Bu hastalığın patogenezinde kas liflerinde birikimi görülen protein kompleksinde aşağıdakilerden hangisi bulunur?
Doğru Şık (B): TDP-43 ve amiloid-beta
Açıklama: Tanımlanan tablo inklüzyon body miyozittir. 50 yaş üstünde asimetrik distal tutulumla başlar ve immünsüpresif tedaviye dirençlidir. Karakteristik histolojik bulgusu çerçeveli inklüzyonlar ve vakuollerin varlığıdır; bu birikimlerin yapısında amiloid-beta, TDP-43 ve ubikitin gibi proteinler yer alır. SAA inflamatuar amiloidde, AL primer amiloidozda birikir.

**Soru 2 (ID: 90232761-bb21-4dc3-9586-2181cf5445b5)**
Soru Kökü: Altmış beş yaşında erkek hasta, parmak ekstansörlerinde ve bacak kaslarında belirgin, asimetrik bir güçsüzlük şikayetiyle başvuruyor. Rutin immünsüpresif tedaviye yanıt vermeyen hastanın kas biyopsisinde CD8+ T hücre infiltrasyonu ile birlikte sitoplazmada çerçeveli vakuoller ve amiloid-beta birikimleri saptanıyor. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İnklüzyon Body Miyozit
Açıklama: 50 yaş üstünde asimetrik distal ekstansör kas tutulumu yapan, immünsüpresyona dirençli olan ve biyopside çerçeveli (rimmed) vakuoller, amiloid-beta, TDP-43 ve ubikitin gibi nörodejeneratif markerlar barındıran inflamatuvar miyopati İnklüzyon Body Miyozittir. Polimiyozit (A şıkkı) de CD8+ aracılıdır ancak proksimal kasları simetrik tutar ve erişkinlerde immünsüpresyona iyi yanıt verir. İBM'deki vakuoler dejenerasyon onu diğer inflamatuvar miyopatilerden kesin olarak ayırır.

---

### ÇİFT 6 (Benzerlik: 0.77)

**Soru 1 (ID: 5d340317-c6cd-4df6-8831-3bd2e66fa6b6)**
Soru Kökü: Otoimmün hastalıklarda antikorlar doğrudan hücre yıkımına neden olmak yerine, bağlandıkları reseptörlerin fonksiyonel sinyalizasyonunu altere edebilirler (Antikor-aracılı hücresel disfonksiyon). Aşağıdaki eşleştirmelerden hangisi, bu Tip 2 aşırı duyarlılık alt mekanizmasına ait doğru bir antijen ve etki paterni örneğidir?
Doğru Şık (C): TSH reseptör antikorları - Reseptörün antikor aracılı aşırı uyarılması
Açıklama: Graves hastalığında sentezlenen antikorlar TSH reseptörüne bağlanır ancak hücreyi yıkmak yerine ligandı taklit ederek hormon olmadan tiroid epitelini sürekli uyarır ve hipertiroidizme neden olur. Myastenia gravis'teki asetilkolin reseptör antikorları ise fagositoz yapmak yerine nörotransmitterin bağlanmasını kompetetif inhibe eder veya reseptör içselleşmesini artırır. İnflamasyon veya hücre hasarı olmaksızın fizyolojik fonksiyonun bu şekilde yönlendirilmesi Tip 2 hücresel disfonksiyonun tanımını oluşturur.

**Soru 2 (ID: 69bb281c-3228-4ced-84e4-f9f9489656fa)**
Soru Kökü: Tip 2 aşırı duyarlılıkta antikorlar, dokuda doğrudan inflamasyon (fagositoz, kompleman) yarattıkları gibi inflamasyon olmaksızın sadece hücresel disfonksiyon da yapabilirler. Aşağıdakilerden hangisi hücre hasarı yaratmaksızın disfonksiyona neden olan hastalık mekanizması örneği **değildir**?
Doğru Şık (B): Goodpasture sendromu
Açıklama: Goodpasture sendromu, böbrek ve akciğer dokusunda kompleman ve Fc reseptör aracılı doğrudan nefrit ve kanama (inflamasyon ve yıkım) yapan klasik Tip 2 yıkım örneğidir. Myastenia, Graves ve insülin dirençli diyabette ise hücre ölümü veya lökositik inflamasyon olmaz; sadece sinyal iletimi (reseptör inhibisyonu/stimülasyonu) bloke olur. Disfonksiyon kategorisi bu yönden histolojik yıkımdan ayrıdır.

---

### ÇİFT 7 (Benzerlik: 0.75)

**Soru 1 (ID: 54b05927-82bc-42e9-8bed-768e8e90203a)**
Soru Kökü: Sistemik lupus eritematozus tanısıyla izlenen 28 yaşındaki gebe hastada spontan abortus gerçekleşiyor. Antifosfolipit sendromu tablosu geliştiği teyit edilen hastada gerçekleşen bu rekürren düşük olayının temel fizyopatolojik izahı aşağıdakilerden hangisidir?
Doğru Şık (A): Otoantikorların trofoblastik hücre gelişimini doğrudan baskılaması
Açıklama: Antifosfolipit sendromunda klinik spektrumun en belirgin özelliği vasküler trombozlar olsa da, hastalarda görülen tekrarlayan düşüklerin temel mekanizması maternal damar trombozu (plasental infarktüs) değildir. Asıl neden, antifosfolipit otoantikorlarının doğrudan sinsityotrofoblast hücre farklılaşmasını, gelişimini ve invazyon yeteneğini in vitro ve in vivo olarak spesifik olarak baskılamasıdır. Fetal lizis Rh uygunsuzluğunda, masif fibrinoid nekroz ise akut Tip 3 lokal reaksiyonlarda (Arthus) belirgindir.

**Soru 2 (ID: c2dbc66a-3689-4815-98f5-268d3d4411f3)**
Soru Kökü: Yirmi sekiz yaşındaki kadın hasta, ardışık üçüncü spontan abortus şikayetiyle başvuruyor. Laboratuvar incelemelerinde yalancı VDRL pozitifliği saptanan hastanın, sistemik lupus eritematozus sekonderi antifosfolipit sendromu olduğu belirleniyor. Bu sendroma yol açan otoantikorların bağlandığı protein hedeflerinden biri aşağıdakilerden hangisi **değildir**?
Doğru Şık (C): Trombomodulin
Açıklama: Antifosfolipit sendromundaki otoantikorlar sıklıkla protrombin, annexin V, β2-glikoprotein I, protein S ve protein C'ye karşı reaksiyon verir. Trombomodulin endotel yüzeyinde trombinin prokoagülan etkisini antikoagülan etkiye çeviren bir reseptör olmasına rağmen, bu sendromda hedeflenen spesifik proteinler arasında yer almaz. Hastalarda gelişen tekrarlayan düşüklerin temel nedeni vasküler trombozlardan ziyade, bu otoantikorların trofoblastik hücre gelişimini doğrudan baskılamasıdır.

---

### ÇİFT 8 (Benzerlik: 0.75)

**Soru 1 (ID: bf386e9d-3bd7-4a5c-b58e-048448ccb699)**
Soru Kökü: Otuz beş yaşında kadın hasta, bir aydır hidralazin kullanımı sonrası ortaya çıkan artralji, ateş ve yüzde eritematöz döküntü şikayetleriyle başvuruyor. Bu hastada gelişen ilaca bağlı lupus tablosunda saptanması en olası otoantikor aşağıdakilerden hangisidir?
Doğru Şık (C): Anti-histon
Açıklama: Hidralazin, izoniyazid ve prokainamid gibi ilaçlar ilaca bağlı lupus tablosuna neden olur ve bu durum spesifik olarak histon proteinlerine karşı gelişen anti-histon antikorları ile ilişkilidir. Anti-dsDNA ve Anti-Sm antikorları klasik Sistemik Lupus Eritematozus (SLE) için spesifiktir, ancak ilaca bağlı lupus vakalarında genellikle negatif bulunurlar.

**Soru 2 (ID: a7ffff02-e7fd-4a63-9a2b-b52171d89807)**
Soru Kökü: Elli yaşındaki erkek hasta, tüberküloz tedavisi alırken ardışık alevlenmeler gösteren eklem ağrıları, döküntü ve plörit nedeniyle romatolojiye refere ediliyor. Hikayesinden izoniyazid (INH) kullandığı öğrenilen hastanın ilaca bağlı lupus tablosu yaşadığı düşünülüyor. Kompleks patogeneze sahip olan bu tabloda, patojenik otoantikorların en yüksek spesifite ile bağlandığı nükleer hedef aşağıdakilerden hangisidir?
Doğru Şık (D): Histon proteinleri
Açıklama: İlaca bağlı lupus tablosu klasik SLE'den farklı olarak genellikle böbrek/SSS tutulumu yapmaz ve etiyolojisinde çoğunlukla hidralazin, penisilamin, prokainamid ve izoniyazid (INH) gibi ajanlar bulunur. İlaçların metabolitleri hücresel DNA mimarisini bozarak genetik yapıtaşı olan histon proteinlerini immünojenik hale getirir; bu nedenle gelişen immün kompleksler spesifik olarak anti-histon antikorları içerir. Klasik SLE antikorları olan anti-dsDNA ve anti-Sm bu varyantta nadir görülür.

---

### ÇİFT 9 (Benzerlik: 0.75)

**Soru 1 (ID: bf386e9d-3bd7-4a5c-b58e-048448ccb699)**
Soru Kökü: Otuz beş yaşında kadın hasta, bir aydır hidralazin kullanımı sonrası ortaya çıkan artralji, ateş ve yüzde eritematöz döküntü şikayetleriyle başvuruyor. Bu hastada gelişen ilaca bağlı lupus tablosunda saptanması en olası otoantikor aşağıdakilerden hangisidir?
Doğru Şık (C): Anti-histon
Açıklama: Hidralazin, izoniyazid ve prokainamid gibi ilaçlar ilaca bağlı lupus tablosuna neden olur ve bu durum spesifik olarak histon proteinlerine karşı gelişen anti-histon antikorları ile ilişkilidir. Anti-dsDNA ve Anti-Sm antikorları klasik Sistemik Lupus Eritematozus (SLE) için spesifiktir, ancak ilaca bağlı lupus vakalarında genellikle negatif bulunurlar.

**Soru 2 (ID: b62139eb-5f1d-4c57-b58b-4bdf3b704bf1)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta tekrarlayan oral aftlar, diz ekleminde non-eroziv sinovit ve güneş maruziyeti ile alevlenen fotosensitif döküntüler nedeniyle tetkik ediliyor. Renal klerensi düşen hastaya yüksek olasılıkla SLE (Sistemik Lupus Eritematozus) tanısı verilecektir. Tanısal duyarlılığı son derece yüksek olan ANA testine ek olarak, hastanın tanısını spesifik olarak doğrulamak (özgüllüğü en yüksek olan) için kullanılması gereken otoantikor çifti aşağıdakilerden hangisidir?
Doğru Şık (B): Anti-dsDNA ve Anti-Sm
Açıklama: SLE tanısında tarama amaçlı Antinükleer Antikor (ANA) testi vakaların %95'inden fazlasında pozitif olmasına karşın özgüllüğü düşüktür; kanser, kronik enfeksiyon ve yaşlı bireylerde de yükselebilir. Tanıyı kesinleştiren (spesifik) otoantikorlar ise yalnız SLE vakalarına özgü olarak yükselen ve HLA-DQ bağlantılı olduğu bilinen çift-iplikli DNA (anti-dsDNA) ve Smith antijeni (anti-Sm) antikorlarıdır. Anti-dsDNA'nın varlığı aynı zamanda lupus nefriti tablosunun kliniği ile direkt korelasyon gösterir.

---

### ÇİFT 10 (Benzerlik: 0.74)

**Soru 1 (ID: 1b458db0-b95a-4787-a5d2-f8f785920448)**
Soru Kökü: Ellinci yaşlarında, yüzünde heliotrop raş ve proksimal kas güçsüzlüğü olan kadın hastada dermatomiyozit teşhisi konuyor. Sistemik taramada eşzamanlı bir internal malignite saptanan bu hastanın immünolojik profilinde en yüksek ihtimalle pozitif olması beklenen nükleer protein hedefli otoantikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-TIF1γ
Açıklama: Anti-TIF1γ (nükleer protein) otoantikoru, otoimmün miyozitlerden dermatomiyozit kliniği ile birlikte altta yatan malignitelerin varlığı ile çok yüksek korelasyon gösterir. Anti-Jo 1 intertisyel akciğer hastalığına, Anti-MDA5 ise vasküler deri lezyonlarına işaret eder. Kanser ile otoimmün paraneoplastik sendrom ilişkisini kuran temel marker Anti-TIF1γ'dır.

**Soru 2 (ID: 1684b044-8187-46c8-8b1e-336a7b09774c)**
Soru Kökü: Elli yaşında kadın hasta, akut başlangıçlı deri kalınlaşması ve saptanan renal kriz nedeniyle yoğun bakıma alınıyor. Aynı zamanda hastanın gizli bir malignite taşıdığı öğreniliyor. Bu hastada yüksek ihtimalle pozitif beklenen sistemik skleroz spesifik otoantikor aşağıdakilerden hangisidir?
Doğru Şık (B): Anti-RNA polimeraz III
Açıklama: Sistemik sklerozda akut başlangıçlı kliniği, ölümcül renal krizi ve kanser birlikteliğini işaret eden spesifik otoantikor Anti-RNA polimeraz III'tür. Anti-Scl-70 diffüz formda ve pulmoner fibrozis ile ilişkiliyken, renal kriz profili polimeraz gen ürünlerine karşı gelişen yanıtla şekillenir. Antikor profili sklerodermada visseral hasarın prognozunu doğrudan belirler.

---

### ÇİFT 11 (Benzerlik: 0.74)

**Soru 1 (ID: da4cf4d8-2a0c-45da-95b9-4e043667516d)**
Soru Kökü: Kırk beş yaşında kadın hasta, yüzünde göz kapaklarında mor renkli döküntüler (heliotrop raş), proksimal kaslarda güçsüzlük ve son aylarda giderek artan nefes darlığı ile klinikte değerlendirilmektedir. İncelemede noneroziv artrit ve intertisyel akciğer hastalığı saptanmıştır. Bu hastanın serumunda spesifik olarak aşağıdaki otoantikorlardan hangisinin saptanması en olasıdır?
Doğru Şık (A): Anti-Jo1
Açıklama: Dermatomiyozitte saptanan antikorlar eşlik eden sendromları tahmin etmede önemlidir. Klasik kas ve cilt bulgularına, şiddetli intertisyel akciğer hastalığı ve noneroziv artritin (Antisentataz sendromu) eşlik ettiği durumlarda en tipik marker t-RNA sentetaza karşı gelişen Anti-Jo1 antikorudur. Anti-Mi2 sadece klasik cilt bulgularıyla, P155 ise kanser birlikteliğiyle öne çıkar.

**Soru 2 (ID: ac2bb5b3-ce9e-43d5-97b1-1c006e1e3b50)**
Soru Kökü: Elli iki yaşındaki erkek hasta, eforla artan nefes darlığı ve ellerinde soğukta belirginleşen solukluk-morarma (Raynaud fenomeni) şikayetleriyle başvuruyor. Hastaya inflamatuvar miyopati tanısı konuluyor ve intertisyel akciğer hastalığı saptanıyor. Hastanın serumunda tespit edilmesi en muhtemel olan ve hedefi histidil tRNA ligaz enzimi olan spesifik otoantikor aşağıdakilerden hangisidir?
Doğru Şık (B): Anti-Jo 1
Açıklama: İnflamatuvar miyopatilerde intertisyel akciğer hastalığı ve inatçı Raynaud fenomeni varlığı oldukça karakteristik olarak Anti-Jo 1 antikor pozitifliğine işaret eder; bu otoantikorun hücresel hedefi aminoaçil-tRNA sentetaz enzim grubundan olan histidil tRNA ligazdır. Anti-Scl-70 (DNA topoizomeraz 1) ve Anti-RNA polimeraz III sistemik sklerozda görülürken, Anti-Sm doğrudan SLE spesifiğidir. Hücre içi protein sentez yolağındaki enzimin hedef alınması bu sendromda doku spesifik otoimmünitenin örneğidir.

---

### ÇİFT 12 (Benzerlik: 0.73)

**Soru 1 (ID: da4cf4d8-2a0c-45da-95b9-4e043667516d)**
Soru Kökü: Kırk beş yaşında kadın hasta, yüzünde göz kapaklarında mor renkli döküntüler (heliotrop raş), proksimal kaslarda güçsüzlük ve son aylarda giderek artan nefes darlığı ile klinikte değerlendirilmektedir. İncelemede noneroziv artrit ve intertisyel akciğer hastalığı saptanmıştır. Bu hastanın serumunda spesifik olarak aşağıdaki otoantikorlardan hangisinin saptanması en olasıdır?
Doğru Şık (A): Anti-Jo1
Açıklama: Dermatomiyozitte saptanan antikorlar eşlik eden sendromları tahmin etmede önemlidir. Klasik kas ve cilt bulgularına, şiddetli intertisyel akciğer hastalığı ve noneroziv artritin (Antisentataz sendromu) eşlik ettiği durumlarda en tipik marker t-RNA sentetaza karşı gelişen Anti-Jo1 antikorudur. Anti-Mi2 sadece klasik cilt bulgularıyla, P155 ise kanser birlikteliğiyle öne çıkar.

**Soru 2 (ID: 51e3d8a8-3820-46f0-9c40-6f26a78efd2c)**
Soru Kökü: Elli beş yaşında kadın hasta, soğukta parmaklarında beyazlaşma-morarma (Raynaud fenomeni), yutmada güçlük ve parmak derisinde kalınlaşma bulgularıyla değerlendiriliyor. Visseral tutulumu geç fazda izlenen bu hastada, iyi prognoz göstergesi olarak beklenen otoantikor hangisidir?
Doğru Şık (E): Anti-sentromer
Açıklama: Hastanın kliniği Kalsinozis, Raynaud, Özofageal dismotilite, Sklerodaktili ve Telenjektazi bulgularını içeren CREST sendromuna (sınırlı skleroderma) uymaktadır. Sınırlı sklerodermada anti-sentromer otoantikoru %90 pozitiftir ve hastalığın görece benign seyredeceğinin güvenilir bir göstergesidir.

---

### ÇİFT 13 (Benzerlik: 0.73)

**Soru 1 (ID: ac2bb5b3-ce9e-43d5-97b1-1c006e1e3b50)**
Soru Kökü: Elli iki yaşındaki erkek hasta, eforla artan nefes darlığı ve ellerinde soğukta belirginleşen solukluk-morarma (Raynaud fenomeni) şikayetleriyle başvuruyor. Hastaya inflamatuvar miyopati tanısı konuluyor ve intertisyel akciğer hastalığı saptanıyor. Hastanın serumunda tespit edilmesi en muhtemel olan ve hedefi histidil tRNA ligaz enzimi olan spesifik otoantikor aşağıdakilerden hangisidir?
Doğru Şık (B): Anti-Jo 1
Açıklama: İnflamatuvar miyopatilerde intertisyel akciğer hastalığı ve inatçı Raynaud fenomeni varlığı oldukça karakteristik olarak Anti-Jo 1 antikor pozitifliğine işaret eder; bu otoantikorun hücresel hedefi aminoaçil-tRNA sentetaz enzim grubundan olan histidil tRNA ligazdır. Anti-Scl-70 (DNA topoizomeraz 1) ve Anti-RNA polimeraz III sistemik sklerozda görülürken, Anti-Sm doğrudan SLE spesifiğidir. Hücre içi protein sentez yolağındaki enzimin hedef alınması bu sendromda doku spesifik otoimmünitenin örneğidir.

**Soru 2 (ID: 553f35e0-cb09-4a89-b8eb-32d1659d4f8f)**
Soru Kökü: Otoimmün miyozitler alt gruplara ayrılırken, hastanın klinik tablosunda kas güçsüzlüğüne eşlik eden ek sistemik bulgular ile serumda tespit edilen otoantikorlar güçlü korelasyon gösterir. Kutanöz vasküler deri lezyonları ve ciddi intertisyel akciğer hastalığı saptanan bir miyozit vakasında, hedeflenen otoantijenin viral RNA sitoplazmik reseptörü olduğu bilinmektedir. Bu hastada yüksek titrede bulunması beklenen antikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-MDA5
Açıklama: Anti-MDA5 antikorları dermatomiyozit/polimiyozit tayfında özellikle amiyopatik seyreden, şiddetli ve hızla ilerleyen intertisyel akciğer hastalığı ile karekteristik vasküler deri lezyonlarına yol açan viral RNA sitoplazmik reseptör hedeflidir. Anti-Jo 1 histidil tRNA ligaz hedefli olup farklı bir interstisyel patern gösterirken, Anti-Scl-70 diffüz skleroderma ile ilişkilidir. Kanser taraması gerektiren miyozit antikoru ise Anti-TIF1γ'dır.

---

### ÇİFT 14 (Benzerlik: 0.73)

**Soru 1 (ID: df194fe4-ea2a-47b4-b70b-f48f655c2c2f)**
Soru Kökü: Sjögren sendromunun klinik ve patolojik özellikleri göz önüne alındığında, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Hastalarda T hücreli lenfoma gelişme riski belirgin şekilde artmıştır.
Açıklama: Sjögren sendromunda sistemik B hücre hiperaktivitesi ve poliklonal B hücre proliferasyonu mevcut olup, bu durum hastaları Non-Hodgkin B hücreli lenfoma (marjinal zon) açısından 40 kat yüksek riske sokar; T hücreli lenfoma riski artmaz. Doku hasarını CD4+ T hücreler başlatsa da maligniteye dönüşen komponent her zaman hiperaktif B hücreleridir.

**Soru 2 (ID: 4032a687-3f04-41bd-bea4-0b456e73a932)**
Soru Kökü: Sistemik skleroz ve Sjögren sendromunun immünolojik patogenezleri karşılaştırıldığında, aşağıdaki hücresel veya moleküler süreçlerden hangisi **yanlıştır**?
Doğru Şık (E): Sistemik sklerozda masif fibrozisi başlatan ve yönlendiren sitokinler temel olarak TH1 hücrelerinden salgılanır.
Açıklama: Sistemik skleroz patogenezinde baskın olan lenfosit alt grubu TH1 değil, TH2'dir; fibrozisi başlatan kritik sitokinler (TGF-β, IL-13) aktive olmuş TH2 hücreleri ve makrofajlar tarafından salgılanır. Sjögren sendromunda ise lenfositik sızma, otoantikor pozitifliği ve epitelyal reaksiyon CD4+ T hücre aracılı seyreder.

---

### ÇİFT 15 (Benzerlik: 0.73)

**Soru 1 (ID: da4cf4d8-2a0c-45da-95b9-4e043667516d)**
Soru Kökü: Kırk beş yaşında kadın hasta, yüzünde göz kapaklarında mor renkli döküntüler (heliotrop raş), proksimal kaslarda güçsüzlük ve son aylarda giderek artan nefes darlığı ile klinikte değerlendirilmektedir. İncelemede noneroziv artrit ve intertisyel akciğer hastalığı saptanmıştır. Bu hastanın serumunda spesifik olarak aşağıdaki otoantikorlardan hangisinin saptanması en olasıdır?
Doğru Şık (A): Anti-Jo1
Açıklama: Dermatomiyozitte saptanan antikorlar eşlik eden sendromları tahmin etmede önemlidir. Klasik kas ve cilt bulgularına, şiddetli intertisyel akciğer hastalığı ve noneroziv artritin (Antisentataz sendromu) eşlik ettiği durumlarda en tipik marker t-RNA sentetaza karşı gelişen Anti-Jo1 antikorudur. Anti-Mi2 sadece klasik cilt bulgularıyla, P155 ise kanser birlikteliğiyle öne çıkar.

**Soru 2 (ID: 1684b044-8187-46c8-8b1e-336a7b09774c)**
Soru Kökü: Elli yaşında kadın hasta, akut başlangıçlı deri kalınlaşması ve saptanan renal kriz nedeniyle yoğun bakıma alınıyor. Aynı zamanda hastanın gizli bir malignite taşıdığı öğreniliyor. Bu hastada yüksek ihtimalle pozitif beklenen sistemik skleroz spesifik otoantikor aşağıdakilerden hangisidir?
Doğru Şık (B): Anti-RNA polimeraz III
Açıklama: Sistemik sklerozda akut başlangıçlı kliniği, ölümcül renal krizi ve kanser birlikteliğini işaret eden spesifik otoantikor Anti-RNA polimeraz III'tür. Anti-Scl-70 diffüz formda ve pulmoner fibrozis ile ilişkiliyken, renal kriz profili polimeraz gen ürünlerine karşı gelişen yanıtla şekillenir. Antikor profili sklerodermada visseral hasarın prognozunu doğrudan belirler.

---

### ÇİFT 16 (Benzerlik: 0.73)

**Soru 1 (ID: cd8f3b37-20ec-4e75-9cdc-6c06bf640b96)**
Soru Kökü: Wiskott-Aldrich sendromu, X'e bağlı kalıtılan, trombositopeni ve egzama ile karakterize bir bağışıklık sistemi hastalığıdır. Bu hastalığa neden olan mutasyon, hücre içinde aşağıdaki yapıların hangisinin fonksiyonunu bozarak lökosit migrasyonunu ve hücre-hücre adezyonunu engeller?
Doğru Şık (E): Hücre iskeletine bağlanan proteinler
Açıklama: Wiskott-Aldrich sendromunda mutasyona uğrayan WAS proteini, reseptörleri aktin hücre iskeletine bağlamakla görevlidir; defektinde lökositlerin migrasyonu, şekil değiştirmesi ve immünolojik sinaps kurması bozulur. Lizozomal defektler (C şıkkı) fagozom-lizozom birleşmesini bozan Chédiak-Higashi sendromunda görülür. Hastalarda hücre iskeleti kusuru nedeniyle özellikle kapsüllü polisakkarid antijenlere karşı T-bağımlı antikor yanıtı üretilemez.

**Soru 2 (ID: 3a61a35f-0d66-4573-aa80-0731b822a337)**
Soru Kökü: X'e bağlı geçiş gösteren ve küçük yaşta şiddetli egzama, düşük trombosit sayısına bağlı kanamalar ve tekrarlayan enfeksiyonlarla karakterize Wiskott-Aldrich sendromunda, hastaların bağışıklık sistemi spesifik bir antijen grubuna karşı etkili antikor yanıtı oluşturamaz. Pnömokok gibi kapsüllü piyojenik bakterilerin fatal enfeksiyonlara neden olduğu bu spesifik hedef antijen tipi aşağıdakilerden hangisidir?
Doğru Şık (D): Kapsüler polisakkarid antijenler
Açıklama: Wiskott-Aldrich sendromunda sitoiskelet bozukluklarına bağlı lökosit hareket ve iletişim defektleri görülür. Bu hastalar, özellikle T hücre yardımına ihtiyaç duymayan T-bağımsız polisakkarid antijenlere karşı şiddetli bir antikor yapım kusuruna sahiptir. Bu nedenle pnömokok, meningokok gibi kapsülü polisakkarit yapıda olan bakterilere karşı ölümcül duyarlılık sergilerler.

---

### ÇİFT 17 (Benzerlik: 0.72)

**Soru 1 (ID: da4cf4d8-2a0c-45da-95b9-4e043667516d)**
Soru Kökü: Kırk beş yaşında kadın hasta, yüzünde göz kapaklarında mor renkli döküntüler (heliotrop raş), proksimal kaslarda güçsüzlük ve son aylarda giderek artan nefes darlığı ile klinikte değerlendirilmektedir. İncelemede noneroziv artrit ve intertisyel akciğer hastalığı saptanmıştır. Bu hastanın serumunda spesifik olarak aşağıdaki otoantikorlardan hangisinin saptanması en olasıdır?
Doğru Şık (A): Anti-Jo1
Açıklama: Dermatomiyozitte saptanan antikorlar eşlik eden sendromları tahmin etmede önemlidir. Klasik kas ve cilt bulgularına, şiddetli intertisyel akciğer hastalığı ve noneroziv artritin (Antisentataz sendromu) eşlik ettiği durumlarda en tipik marker t-RNA sentetaza karşı gelişen Anti-Jo1 antikorudur. Anti-Mi2 sadece klasik cilt bulgularıyla, P155 ise kanser birlikteliğiyle öne çıkar.

**Soru 2 (ID: 56f0a1d1-a5f0-4f8d-9152-7747f757cb2d)**
Soru Kökü: Dermatomiyozit tanısı alan hastalarda spesifik otoantikor profili, hastalığın klinik seyri ve eşlik eden durumlar hakkında önemli prognostik bilgiler verir. Buna göre, özellikle paraneoplastik sendrom birlikteliği (meme, kolon kanseri vb.) veya juvenil başlangıçlı dermatomiyozit ile güçlü korelasyon gösteren antikor aşağıdakilerden hangisidir?
Doğru Şık (A): Anti-P155/P140
Açıklama: Dermatomiyozitte Anti-P155/P140 antikor pozitifliği, paraneoplastik sendromlar ve juvenil dermatomiyozit klinik tablolarıyla spesifik olarak ilişkilidir. Anti-Mi2 klasik Gottron papülleri ve heliotrop döküntüyle, Anti-Jo1 ise intertisyel akciğer hastalığı ve noneroziv artrit sendromuyla (antisentataz sendromu) koreledir.

---

### ÇİFT 18 (Benzerlik: 0.72)

**Soru 1 (ID: 1b37bbd7-66ea-435e-86bc-924e3f8c2cb7)**
Soru Kökü: Böbrek transplantasyonu yapıldıktan 12 gün sonra oligüri gelişen hastanın greft biyopsisinde; endotelyal hücre nekrozu, mikrovasküler tromboz, fibrin çökelmesi ve nötrofilik infiltrasyon izlenmiştir. Bu tablonun akut humoral (antikor-aracılı) rejeksiyon olduğunu kesinleştirmek için dokuda lokal olarak hangi molekülün birikiminin gösterilmesi diagnostiktir?
Doğru Şık (D): C4d
Açıklama: Akut humoral rejeksiyon, antidonör antikorların greft endoteline bağlanması ve kompleman aktivasyonu sonucu gelişen nekrotizan vaskülit tablosudur. Bu süreçte kompleman kaskadının yıkım ürünlerinden biri olan C4d'nin dokuda spesifik olarak birikmesi, hasarın antikor-aracılı (humoral) olduğunu kanıtlayan en önemli immünhistokimyasal belirteçtir. CD8+ hücreler akut hücresel rejeksiyonun bulgusudur.

**Soru 2 (ID: a035efa8-78c7-4c44-9092-53916b2e8cc6)**
Soru Kökü: Böbrek transplantasyonundan dört yıl sonra serum kreatinin düzeyi aylar içinde sinsi bir şekilde yükselen hastaya greft biyopsisi yapılıyor. Parankimal inflamatuvar hücre infiltrasyonunun çok hafif olduğu ancak arter ve arteriyollerde intimal düz kas hücre proliferasyonu, ekstraselüler matriks sentezi ve yaygın tübüler atrofi saptanıyor. Bu hastadaki patolojik sürecin en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Kronik rejeksiyon
Açıklama: Transplantasyondan aylar-yıllar sonra gelişen, inflamasyonun az ancak iskemik vasküler daralmanın (intimal düz kas proliferasyonu ve fibrozis) ön planda olduğu tablo kronik rejeksiyondur. Akut hücresel rejeksiyonda (C şıkkı) ilk haftalarda belirgin CD4/CD8 T hücre infiltrasyonu, ödem ve tübüler epitel nekrozu beklenir, fibrozis beklenmez. Kronik rejeksiyondaki damar daralması, greftte yavaş yavaş parankim kaybına ve tübüler atrofiye yol açar.

---

### ÇİFT 19 (Benzerlik: 0.72)

**Soru 1 (ID: 5a1a8d83-5682-4c86-8600-4336224286e5)**
Soru Kökü: Yirmi beş yaşında kadın hasta, son beş yılda geçirdiği tekrarlayan sinüzit ve pnömoni atakları nedeniyle immünoloji kliniğine yönlendiriliyor. Yapılan tetkiklerde periferik kandaki olgun B lenfosit sayısı normal bulunmasına rağmen dokularda plazma hücresi izlenmiyor ve serum antikor seviyeleri çok düşük saptanıyor. Bu klinik tablonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Yaygın Değişken İmmün Yetmezlik (CVID)
Açıklama: Hastalığın 20-30 yaşlarında bulgu vermesi, hastanın kadın olması (Bruton X'e bağlıdır ve bebeklikte çıkar) ve B hücre sayısının normal olmasına karşın B hücrelerinin plazma hücresine diferansiye olamaması Yaygın Değişken İmmün Yetmezlik (CVID) tanısını koydurur. Bruton hastalığında ise dolaşımda B lenfositleri yoktur ya da çok azdır.

**Soru 2 (ID: 82e8dab1-af86-4fd8-b070-e75092f7725e)**
Soru Kökü: Yirmi beş yaşında kadın hasta, kronik ishal ve açıklanamayan kilo kaybı nedeniyle gastroenterolojiye başvuruyor. Dışkı incelemesinde Giardia lamblia kistleri saptanıyor. Özgeçmişinde çocukluk çağından beri tekrarlayan sinüzit atakları olan hastanın kan tablosunda tek bir immünglobülin sınıfının eksikliği izleniyor. Bu hastadaki en olası immün yetmezlik tablosu aşağıdakilerden hangisidir?
Doğru Şık (B): İzole İgA eksikliği
Açıklama: Mukozal sekresyonların ana antikoru olan İgA'nın eksikliği, Giardia lamblia gibi intestinal patojenlere ve sinopulmoner enfeksiyonlara duyarlılığı artırır. CVID (C şıkkı) benzer bir yaşta ortaya çıkıp ishal yapabilse de, tek bir immünglobülin eksikliği değil, çoğul hipogamaglobülinemi ile seyreder. İzole İgA eksikliği en sık görülen primer immün yetmezliktir ve SLE, RA gibi otoimmün hastalıklarla sıkça birliktelik gösterir.

---

### ÇİFT 20 (Benzerlik: 0.71)

**Soru 1 (ID: 553f35e0-cb09-4a89-b8eb-32d1659d4f8f)**
Soru Kökü: Otoimmün miyozitler alt gruplara ayrılırken, hastanın klinik tablosunda kas güçsüzlüğüne eşlik eden ek sistemik bulgular ile serumda tespit edilen otoantikorlar güçlü korelasyon gösterir. Kutanöz vasküler deri lezyonları ve ciddi intertisyel akciğer hastalığı saptanan bir miyozit vakasında, hedeflenen otoantijenin viral RNA sitoplazmik reseptörü olduğu bilinmektedir. Bu hastada yüksek titrede bulunması beklenen antikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-MDA5
Açıklama: Anti-MDA5 antikorları dermatomiyozit/polimiyozit tayfında özellikle amiyopatik seyreden, şiddetli ve hızla ilerleyen intertisyel akciğer hastalığı ile karekteristik vasküler deri lezyonlarına yol açan viral RNA sitoplazmik reseptör hedeflidir. Anti-Jo 1 histidil tRNA ligaz hedefli olup farklı bir interstisyel patern gösterirken, Anti-Scl-70 diffüz skleroderma ile ilişkilidir. Kanser taraması gerektiren miyozit antikoru ise Anti-TIF1γ'dır.

**Soru 2 (ID: 56f0a1d1-a5f0-4f8d-9152-7747f757cb2d)**
Soru Kökü: Dermatomiyozit tanısı alan hastalarda spesifik otoantikor profili, hastalığın klinik seyri ve eşlik eden durumlar hakkında önemli prognostik bilgiler verir. Buna göre, özellikle paraneoplastik sendrom birlikteliği (meme, kolon kanseri vb.) veya juvenil başlangıçlı dermatomiyozit ile güçlü korelasyon gösteren antikor aşağıdakilerden hangisidir?
Doğru Şık (A): Anti-P155/P140
Açıklama: Dermatomiyozitte Anti-P155/P140 antikor pozitifliği, paraneoplastik sendromlar ve juvenil dermatomiyozit klinik tablolarıyla spesifik olarak ilişkilidir. Anti-Mi2 klasik Gottron papülleri ve heliotrop döküntüyle, Anti-Jo1 ise intertisyel akciğer hastalığı ve noneroziv artrit sendromuyla (antisentataz sendromu) koreledir.

---

### ÇİFT 21 (Benzerlik: 0.71)

**Soru 1 (ID: 1684b044-8187-46c8-8b1e-336a7b09774c)**
Soru Kökü: Elli yaşında kadın hasta, akut başlangıçlı deri kalınlaşması ve saptanan renal kriz nedeniyle yoğun bakıma alınıyor. Aynı zamanda hastanın gizli bir malignite taşıdığı öğreniliyor. Bu hastada yüksek ihtimalle pozitif beklenen sistemik skleroz spesifik otoantikor aşağıdakilerden hangisidir?
Doğru Şık (B): Anti-RNA polimeraz III
Açıklama: Sistemik sklerozda akut başlangıçlı kliniği, ölümcül renal krizi ve kanser birlikteliğini işaret eden spesifik otoantikor Anti-RNA polimeraz III'tür. Anti-Scl-70 diffüz formda ve pulmoner fibrozis ile ilişkiliyken, renal kriz profili polimeraz gen ürünlerine karşı gelişen yanıtla şekillenir. Antikor profili sklerodermada visseral hasarın prognozunu doğrudan belirler.

**Soru 2 (ID: 51e3d8a8-3820-46f0-9c40-6f26a78efd2c)**
Soru Kökü: Elli beş yaşında kadın hasta, soğukta parmaklarında beyazlaşma-morarma (Raynaud fenomeni), yutmada güçlük ve parmak derisinde kalınlaşma bulgularıyla değerlendiriliyor. Visseral tutulumu geç fazda izlenen bu hastada, iyi prognoz göstergesi olarak beklenen otoantikor hangisidir?
Doğru Şık (E): Anti-sentromer
Açıklama: Hastanın kliniği Kalsinozis, Raynaud, Özofageal dismotilite, Sklerodaktili ve Telenjektazi bulgularını içeren CREST sendromuna (sınırlı skleroderma) uymaktadır. Sınırlı sklerodermada anti-sentromer otoantikoru %90 pozitiftir ve hastalığın görece benign seyredeceğinin güvenilir bir göstergesidir.

---

### ÇİFT 22 (Benzerlik: 0.71)

**Soru 1 (ID: da4cf4d8-2a0c-45da-95b9-4e043667516d)**
Soru Kökü: Kırk beş yaşında kadın hasta, yüzünde göz kapaklarında mor renkli döküntüler (heliotrop raş), proksimal kaslarda güçsüzlük ve son aylarda giderek artan nefes darlığı ile klinikte değerlendirilmektedir. İncelemede noneroziv artrit ve intertisyel akciğer hastalığı saptanmıştır. Bu hastanın serumunda spesifik olarak aşağıdaki otoantikorlardan hangisinin saptanması en olasıdır?
Doğru Şık (A): Anti-Jo1
Açıklama: Dermatomiyozitte saptanan antikorlar eşlik eden sendromları tahmin etmede önemlidir. Klasik kas ve cilt bulgularına, şiddetli intertisyel akciğer hastalığı ve noneroziv artritin (Antisentataz sendromu) eşlik ettiği durumlarda en tipik marker t-RNA sentetaza karşı gelişen Anti-Jo1 antikorudur. Anti-Mi2 sadece klasik cilt bulgularıyla, P155 ise kanser birlikteliğiyle öne çıkar.

**Soru 2 (ID: 553f35e0-cb09-4a89-b8eb-32d1659d4f8f)**
Soru Kökü: Otoimmün miyozitler alt gruplara ayrılırken, hastanın klinik tablosunda kas güçsüzlüğüne eşlik eden ek sistemik bulgular ile serumda tespit edilen otoantikorlar güçlü korelasyon gösterir. Kutanöz vasküler deri lezyonları ve ciddi intertisyel akciğer hastalığı saptanan bir miyozit vakasında, hedeflenen otoantijenin viral RNA sitoplazmik reseptörü olduğu bilinmektedir. Bu hastada yüksek titrede bulunması beklenen antikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-MDA5
Açıklama: Anti-MDA5 antikorları dermatomiyozit/polimiyozit tayfında özellikle amiyopatik seyreden, şiddetli ve hızla ilerleyen intertisyel akciğer hastalığı ile karekteristik vasküler deri lezyonlarına yol açan viral RNA sitoplazmik reseptör hedeflidir. Anti-Jo 1 histidil tRNA ligaz hedefli olup farklı bir interstisyel patern gösterirken, Anti-Scl-70 diffüz skleroderma ile ilişkilidir. Kanser taraması gerektiren miyozit antikoru ise Anti-TIF1γ'dır.

---

### ÇİFT 23 (Benzerlik: 0.71)

**Soru 1 (ID: b02c311b-8052-4599-8e7f-1c3141a14b06)**
Soru Kökü: Primer Sjögren sendromunun immünolojik patogenezinde, ekzokrin bezlerdeki hasarın CD4+ T hücrelerin özellikle hangi iskelet proteinine karşı aktive olmasıyla başladığı düşünülmektedir?
Doğru Şık (D): Alfa-fodrin
Açıklama: Sjögren sendromunda CD4+ T lenfositlerinin hedef aldığı temel otoantijenin, duktal epitelyal hücrelerde bulunan bir iskelet proteini olan alfa-fodrin olduğu düşünülmektedir. DNA topoizomeraz I (Scl-70) sistemik sklerozun hedefleri arasındayken, ribonükleoprotein U1 mikst konnektif doku hastalığında saptanır.

**Soru 2 (ID: 3dbf93a9-7cae-416d-b910-fff3bce05568)**
Soru Kökü: Kırk beş yaşındaki kadın hasta, ağız kuruluğu ve yutkunma güçlüğü şikayetleriyle başvuruyor. Muayenesinde bilateral parotis bezi hipertrofisi saptanıyor. Biyopside duktal epitelyal hiperplazi ve yoğun CD4+ T hücre infiltrasyonu gözlenen bu hastada, T hücrelerinin hedef aldığı düşünülen spesifik iskelet proteini aşağıdakilerden hangisidir?
Doğru Şık (B): Alfa-fodrin
Açıklama: Primer Sjögren sendromunda, ekzokrin bezlerin yıkımı duktal epitelde bulunan α-fodrin iskelet proteinine karşı reaksiyon gösteren aktive CD4+ T hücreleri aracılığıyla gerçekleşir. Desmoglein pemfigus vulgaris tablosunda hedef alınırken, tip IV kollajen Goodpasture sendromunda yıkıma uğrar. Hücresel hedefin α-fodrin olarak belirlenmesi, glandüler destrüksiyonun patomekanizmasını açıklayan spesifik bir moleküler bulgudur.

---

### ÇİFT 24 (Benzerlik: 0.71)

**Soru 1 (ID: 847fdf7a-e98d-4946-8c78-0518f194a831)**
Soru Kökü: Tip 1 aşırı duyarlılık reaksiyonunun acil fazında mast hücre granüllerinden salınan vazoaktif aminlerin spesifik fizyolojik etkileri farklıdır. Granül depolarından salındığı anda özellikle bronkokonstriksiyon yapmakla kalmayıp, aynı zamanda **trombosit agregasyon inhibisyonu** gerçekleştiren mediyatör aşağıdakilerden hangisidir?
Doğru Şık (C): Adenozin
Açıklama: Mast hücre granüllerinden histaminle birlikte salınan adenozin, damar yatağında trombosit agregasyonunu inhibe ederken lokal olarak yoğun bronkokonstriksiyona yol açan özgün bir mediyatördür. Histamin damar geçirgenliği ve mukus artışı sağlarken trombosit üzerine bu direkt inhibitör etkiyi yaratmaz. Bu zıt mekanizmalar anafilaktik şoktaki kompleks hemodinamik tablonun nedenidir.

**Soru 2 (ID: 08cf3382-d616-4a63-bdda-a3feaf525da6)**
Soru Kökü: Alerjenik proteine sistemik maruziyet sonucu tetiklenen Tip 1 reaksiyonda, IgE antikorlarının mast hücre yüzeyindeki yüksek afiniteli Fc reseptörlerini çapraz bağlaması kalsiyum bağımlı bir hücresel degranülasyonu indükler. Membran fosfolipitlerinden sentezlenerek bu reaksiyonda ortaya çıkan ve şiddetli bronkospazm ile yoğun mukus sekresyonundan başlıca sorumlu olan **lipit mediyatör** aşağıdakilerden hangisidir?
Doğru Şık (A): Prostaglandin D2
Açıklama: Mast hücrelerinin alerjene bağlı aktivasyonunda membran fosfolipaz A2 ile ayrışan araşidonik asit, siklooksijenaz üzerinden mast hücrelerinde en yoğun sentezlenen spesifik prostaglandin olan PGD2'ye dönüşür. Ortaya çıkan PGD2, pür kutanöz vazodilatasyona ek olarak pulmoner sistemde son derece şiddetli bronkospazma ve mukus sekresyon artışına neden olur. Lökotrien C4 ve D4 de bronkokonstriktör ve damar geçirgenliği artırıcı etki yapsalar da, primer PGD2 bu tabloda en fazla üretilen mast mediyatörüdür.

---

### ÇİFT 25 (Benzerlik: 0.70)

**Soru 1 (ID: 34d3da6c-e783-41dc-a33a-ddc5f37facde)**
Soru Kökü: Primer immün yetmezlikler arasında toplumda en sık karşılaşılan kompleman eksikliği aşağıdakilerden hangisidir?
Doğru Şık (A): C2 eksikliği
Açıklama: Toplumda en sık görülen kompleman defekti C2 eksikliğidir ancak alternatif kompleman yolağı çoğu enfeksiyonu kompanse edebildiği için hastalar genellikle asemptomatiktir. C3 eksikliği (B şıkkı) daha nadirdir ve hem klasik hem alternatif yolağın kesişim noktasında olduğu için ağır piyojenik bakteri enfeksiyonları ile seyreder. Erken kompleman bileşenlerinin (C1q, C2, C4) eksikliği immün kompleks temizliğini bozduğu için SLE benzeri tablolara zemin hazırlar.

**Soru 2 (ID: eef23cad-20d1-41e7-8c7a-969851cc5753)**
Soru Kökü: Aşağıda kompleman sistemi eksiklikleri ve yol açtıkları klinik tablolar eşleştirilmiştir.

I. C2 eksikliği — En sık görülen, genelde asemptomatik kompleman bozukluğu
II. Faktör H eksikliği — Atipik hemolitik üremik sendrom (HÜS)
III. C1q eksikliği — SLE benzeri otoimmün hastalık formasyonu

Bu eşleştirmelerden hangisi ya da hangileri doğrudur?
Doğru Şık (A): I, II ve III
Açıklama: Verilen üç öncül de tamamen doğrudur. C2 eksikliği en sık kompleman eksikliğidir ve alternatif yolak telafisi nedeniyle genelde semptomsuzdur. Faktör H, alternatif yolağın aşırı aktivasyonunu frenler; eksikliğinde endotel hasarıyla atipik HÜS ve maküler dejenerasyon görülür. C1q, C2, C4 gibi erken klasik yolak proteinlerinin eksikliği ise immün kompleks klerensini bozarak SLE-benzeri tablolara neden olur.

---

### ÇİFT 26 (Benzerlik: 0.70)

**Soru 1 (ID: 2f392084-a109-4137-9e8a-4ca886dc3b6e)**
Soru Kökü: Kompleman sistemi eksiklikleri ve buna bağlı gelişen klinik tabloların eşleştirilmesinden hangisi **yanlıştır**?
Doğru Şık (D): C5-C9 kompleks eksikliği - Artmış kapsüllü streptokok enfeksiyonları
Açıklama: C5-C9 eksikliği (Membran Atak Kompleksi defekti) spesifik olarak Neisseria (meningokok/gonokok) enfeksiyonlarına duyarlılığı artırır; streptokok veya piyojenik bakterilere değil. Streptokoklar ve piyojenik bakterilere duyarlılık opsonizasyon kusuru yaratan C3 eksikliğinde belirgindir. Erken yolak defektleri (C1,C2,C4) immün kompleks klirensini bozduğu için SLE benzeri sendromlar yaratır.

**Soru 2 (ID: eef23cad-20d1-41e7-8c7a-969851cc5753)**
Soru Kökü: Aşağıda kompleman sistemi eksiklikleri ve yol açtıkları klinik tablolar eşleştirilmiştir.

I. C2 eksikliği — En sık görülen, genelde asemptomatik kompleman bozukluğu
II. Faktör H eksikliği — Atipik hemolitik üremik sendrom (HÜS)
III. C1q eksikliği — SLE benzeri otoimmün hastalık formasyonu

Bu eşleştirmelerden hangisi ya da hangileri doğrudur?
Doğru Şık (A): I, II ve III
Açıklama: Verilen üç öncül de tamamen doğrudur. C2 eksikliği en sık kompleman eksikliğidir ve alternatif yolak telafisi nedeniyle genelde semptomsuzdur. Faktör H, alternatif yolağın aşırı aktivasyonunu frenler; eksikliğinde endotel hasarıyla atipik HÜS ve maküler dejenerasyon görülür. C1q, C2, C4 gibi erken klasik yolak proteinlerinin eksikliği ise immün kompleks klerensini bozarak SLE-benzeri tablolara neden olur.

---

### ÇİFT 27 (Benzerlik: 0.70)

**Soru 1 (ID: 024a4e4d-fb47-4c1b-ade1-eb05d87d4f2c)**
Soru Kökü: Fagositoz sonrası mikrobisidal aktivitede görev alan miyeloperoksidaz enzim eksikliği olan bir hastada, nötrofillerin bakteri öldürme kapasitesi azalmıştır. Bu patogenezde fagozom içerisinde üretilemeyen ve nötrofillerin en etkili bakterisidal ajanı olduğu bilinen molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Hipokloröz asit (HOCl)
Açıklama: Miyeloperoksidaz (MPO), hidrojen peroksiti (H2O2) ve halojenleri kullanarak hipokloröz asit (HOCl) üretimini katalizler. Üretilen bu HOCl, nötrofillerin bilinen en güçlü ve etkili bakterisidal ajanıdır. MPO eksikliğinde süperoksit ve H2O2 üretimi normal olsa da, yıkıcı gücü en yüksek olan HOCl sentezlenemediği için mikrobisidal öldürme defektiftir.

**Soru 2 (ID: 8b16393d-1f35-436a-bd0d-efb79dccb2ab)**
Soru Kökü: Fagositoz ve mikrobisidal aktivite bozuklukları arasında yer alan miyeloperoksidaz (MPO) eksikliği ile kronik granülomatöz hastalık (KGH) karşılaştırıldığında, miyeloperoksidaz eksikliğini klinik olarak ayırıcı kılan temel özellik aşağıdakilerden hangisidir?
Doğru Şık (C): Enfeksiyon riskinde yalnızca minimal bir artışa neden olması
Açıklama: Miyeloperoksidaz eksikliğinde H2O2'den HOCl (hipokloröz asit) üretilemez ancak hastaların alternatif mikrobisidal mekanizmaları çalıştığı için enfeksiyon riski kronik granülomatöz hastalığa kıyasla minimal düzeyde artar, çoğu vaka asemptomatiktir. Kronik granülomatöz hastalıkta (A şıkkı tam aksine) NADPH oksidaz arızalıdır, ilk basamak oksijen radikalleri (süperoksit) hiç üretilemez ve hastalar katalaz pozitif bakterilere karşı şiddetli, ölümcül abseler geliştirir. MPO hücre içi en etkili bakterisidal ajan (HOCl) üretimini sağlasa da, defektin kliniği çok daha hafiftir.

---

### ÇİFT 28 (Benzerlik: 0.69)

**Soru 1 (ID: 2c398e3b-bb09-41cb-8b34-db97b0d8aa8e)**
Soru Kökü: T-hücre aracılı (Tip 4) aşırı duyarlılık reaksiyonları, CD4+ (yardımcı) lenfositlerin koordine ettiği inflamasyon tablosu veya CD8+ (sitotoksik) hücrelerin yönettiği doğrudan apoptoz ile gerçekleşir. Aşağıdaki immünopatolojik tablolardan hangisinde doku hasarının ana mekanizması antijen sunan APC ve hedef MHC I yapısı üzerinden ilerleyen **CD8+ sitotoksik yıkımdır**?
Doğru Şık (E): Tip 1 Diabetes Mellitus'ta pankreatik beta hücre yıkımı
Açıklama: Tüberküloz reaksiyonu, RA, MS, kontakt dermatit ve Crohn hastalığı gibi tip 4 reaksiyonların büyük çoğunluğu Th1/Th17 (CD4+) kaynaklı sitokinlerin (IFN-γ, IL-17) makrofajları reaksiyon alanına toplamasıyla ortaya çıkan gecikmiş-tip inflamasyon örnekleridir. Ancak Tip 1 DM'da β adacık hücrelerinin spesifik yıkımı, transplantasyon rejeksiyonu ve viral inklüzyon hücrelerinin lizi direkt olarak CD8+ sitotoksik T lenfositlerinin hedef MHC I yapısını perforin/granzim ile parçalamasına dayanır.

**Soru 2 (ID: 69bb281c-3228-4ced-84e4-f9f9489656fa)**
Soru Kökü: Tip 2 aşırı duyarlılıkta antikorlar, dokuda doğrudan inflamasyon (fagositoz, kompleman) yarattıkları gibi inflamasyon olmaksızın sadece hücresel disfonksiyon da yapabilirler. Aşağıdakilerden hangisi hücre hasarı yaratmaksızın disfonksiyona neden olan hastalık mekanizması örneği **değildir**?
Doğru Şık (B): Goodpasture sendromu
Açıklama: Goodpasture sendromu, böbrek ve akciğer dokusunda kompleman ve Fc reseptör aracılı doğrudan nefrit ve kanama (inflamasyon ve yıkım) yapan klasik Tip 2 yıkım örneğidir. Myastenia, Graves ve insülin dirençli diyabette ise hücre ölümü veya lökositik inflamasyon olmaz; sadece sinyal iletimi (reseptör inhibisyonu/stimülasyonu) bloke olur. Disfonksiyon kategorisi bu yönden histolojik yıkımdan ayrıdır.

---

### ÇİFT 29 (Benzerlik: 0.69)

**Soru 1 (ID: ac2bb5b3-ce9e-43d5-97b1-1c006e1e3b50)**
Soru Kökü: Elli iki yaşındaki erkek hasta, eforla artan nefes darlığı ve ellerinde soğukta belirginleşen solukluk-morarma (Raynaud fenomeni) şikayetleriyle başvuruyor. Hastaya inflamatuvar miyopati tanısı konuluyor ve intertisyel akciğer hastalığı saptanıyor. Hastanın serumunda tespit edilmesi en muhtemel olan ve hedefi histidil tRNA ligaz enzimi olan spesifik otoantikor aşağıdakilerden hangisidir?
Doğru Şık (B): Anti-Jo 1
Açıklama: İnflamatuvar miyopatilerde intertisyel akciğer hastalığı ve inatçı Raynaud fenomeni varlığı oldukça karakteristik olarak Anti-Jo 1 antikor pozitifliğine işaret eder; bu otoantikorun hücresel hedefi aminoaçil-tRNA sentetaz enzim grubundan olan histidil tRNA ligazdır. Anti-Scl-70 (DNA topoizomeraz 1) ve Anti-RNA polimeraz III sistemik sklerozda görülürken, Anti-Sm doğrudan SLE spesifiğidir. Hücre içi protein sentez yolağındaki enzimin hedef alınması bu sendromda doku spesifik otoimmünitenin örneğidir.

**Soru 2 (ID: 1b458db0-b95a-4787-a5d2-f8f785920448)**
Soru Kökü: Ellinci yaşlarında, yüzünde heliotrop raş ve proksimal kas güçsüzlüğü olan kadın hastada dermatomiyozit teşhisi konuyor. Sistemik taramada eşzamanlı bir internal malignite saptanan bu hastanın immünolojik profilinde en yüksek ihtimalle pozitif olması beklenen nükleer protein hedefli otoantikor aşağıdakilerden hangisidir?
Doğru Şık (D): Anti-TIF1γ
Açıklama: Anti-TIF1γ (nükleer protein) otoantikoru, otoimmün miyozitlerden dermatomiyozit kliniği ile birlikte altta yatan malignitelerin varlığı ile çok yüksek korelasyon gösterir. Anti-Jo 1 intertisyel akciğer hastalığına, Anti-MDA5 ise vasküler deri lezyonlarına işaret eder. Kanser ile otoimmün paraneoplastik sendrom ilişkisini kuran temel marker Anti-TIF1γ'dır.

---

### ÇİFT 30 (Benzerlik: 0.69)

**Soru 1 (ID: 1116f30c-e087-4fc6-b622-4d7b11b085be)**
Soru Kökü: Erişkin yaşta ortaya çıkan, deri bulgusu olmaksızın ilerleyici kas güçsüzlüğü tablosu ile başvuran ve kas biyopsisinde CD8+ T hücrelerine bağlı hasar saptanan bir hastada polimiyozit düşünülmektedir. Aşağıdaki patolojik veya klinik bulgulardan hangisinin bu hastada görülmesi **beklenmez**?
Doğru Şık (B): Biyopside belirgin perifasiküler atrofi
Açıklama: Kas biyopsisinde perifasiküler atrofi görülmesi polimiyozitin değil, dermatomiyozitin karakteristik bir bulgusudur. Polimiyozitte kas hasarı doğrudan CD8+ T hücre aracılıdır ve perifasiküler bölgeden ziyade endomisyal inflamasyon baskındır. Hastalığın dermatomiyozitten diğer önemli bir farkı da paraneoplastik sendrom birlikteliğinin çok daha nadir olmasıdır.

**Soru 2 (ID: 90232761-bb21-4dc3-9586-2181cf5445b5)**
Soru Kökü: Altmış beş yaşında erkek hasta, parmak ekstansörlerinde ve bacak kaslarında belirgin, asimetrik bir güçsüzlük şikayetiyle başvuruyor. Rutin immünsüpresif tedaviye yanıt vermeyen hastanın kas biyopsisinde CD8+ T hücre infiltrasyonu ile birlikte sitoplazmada çerçeveli vakuoller ve amiloid-beta birikimleri saptanıyor. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İnklüzyon Body Miyozit
Açıklama: 50 yaş üstünde asimetrik distal ekstansör kas tutulumu yapan, immünsüpresyona dirençli olan ve biyopside çerçeveli (rimmed) vakuoller, amiloid-beta, TDP-43 ve ubikitin gibi nörodejeneratif markerlar barındıran inflamatuvar miyopati İnklüzyon Body Miyozittir. Polimiyozit (A şıkkı) de CD8+ aracılıdır ancak proksimal kasları simetrik tutar ve erişkinlerde immünsüpresyona iyi yanıt verir. İBM'deki vakuoler dejenerasyon onu diğer inflamatuvar miyopatilerden kesin olarak ayırır.

---

### ÇİFT 31 (Benzerlik: 0.69)

**Soru 1 (ID: 1b271a9e-b9b9-4fc4-94f4-2b2d443f3565)**
Soru Kökü: İgG4 ilişkili hastalık son yıllarda patolojik olarak farklı dokulardaki benzer fibrozis paternleri ile tanımlanan sistemik bir otoimmün spektrumdur. Aşağıdaki klinik tablolardan hangisinin bu hastalık spektrumu içinde yer aldığı **söylenemez**?
Doğru Şık (D): Hashimoto tiroiditi
Açıklama: Tiroid bezinin ahşap sertliğinde büyümesi ve komşu dokulara fibrozis yayılımıyla seyreden Riedel tiroiditi İgG4 ilişkili hastalık spektrumunun net bir parçasıdır. Ancak otoimmün hipotiroidinin en sık nedeni olan ve lenfositik infiltrasyonla karakterize Hashimoto tiroiditinin primer İgG4 ilişkili sistemik hastalıkla patogenetik bağı yoktur.

**Soru 2 (ID: 99912836-4cfb-4cfe-91bd-0e7a65bc2850)**
Soru Kökü: Kırk beş yaşında erkek hasta, ağrısız göz kapağı şişliği (Mikulicz sendromu) ve sırta vuran ağrı şikayetiyle başvuruyor. Görüntülemede retroperitoneal kitle izleniyor ve laboratuvarda serum IgG4 seviyesi yüksek saptanıyor. Bu hastadan alınan kitle biyopsisinde aşağıdaki histolojik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (B): İğsi (storiform) fibrozis
Açıklama: İgG4-ilişkili hastalık, dokularda İgG4 üreten plazma hücre infiltrasyonu, obliteratif flebit ve iğsi (storiform) fibrozis ile karakterizedir. Amiloid birikimi (A şıkkı) plazma hücreli diskrazilerde (AL amiloidoz) görülürken, bu hastalıkta primer doku hasarı fibrozis ile oluşur. Mikulicz sendromu, Riedel tiroiditi ve retroperitoneal fibrozis bu spektrumun en tipik klinik yansımalarıdır.

---

### ÇİFT 32 (Benzerlik: 0.69)

**Soru 1 (ID: da4cf4d8-2a0c-45da-95b9-4e043667516d)**
Soru Kökü: Kırk beş yaşında kadın hasta, yüzünde göz kapaklarında mor renkli döküntüler (heliotrop raş), proksimal kaslarda güçsüzlük ve son aylarda giderek artan nefes darlığı ile klinikte değerlendirilmektedir. İncelemede noneroziv artrit ve intertisyel akciğer hastalığı saptanmıştır. Bu hastanın serumunda spesifik olarak aşağıdaki otoantikorlardan hangisinin saptanması en olasıdır?
Doğru Şık (A): Anti-Jo1
Açıklama: Dermatomiyozitte saptanan antikorlar eşlik eden sendromları tahmin etmede önemlidir. Klasik kas ve cilt bulgularına, şiddetli intertisyel akciğer hastalığı ve noneroziv artritin (Antisentataz sendromu) eşlik ettiği durumlarda en tipik marker t-RNA sentetaza karşı gelişen Anti-Jo1 antikorudur. Anti-Mi2 sadece klasik cilt bulgularıyla, P155 ise kanser birlikteliğiyle öne çıkar.

**Soru 2 (ID: bf386e9d-3bd7-4a5c-b58e-048448ccb699)**
Soru Kökü: Otuz beş yaşında kadın hasta, bir aydır hidralazin kullanımı sonrası ortaya çıkan artralji, ateş ve yüzde eritematöz döküntü şikayetleriyle başvuruyor. Bu hastada gelişen ilaca bağlı lupus tablosunda saptanması en olası otoantikor aşağıdakilerden hangisidir?
Doğru Şık (C): Anti-histon
Açıklama: Hidralazin, izoniyazid ve prokainamid gibi ilaçlar ilaca bağlı lupus tablosuna neden olur ve bu durum spesifik olarak histon proteinlerine karşı gelişen anti-histon antikorları ile ilişkilidir. Anti-dsDNA ve Anti-Sm antikorları klasik Sistemik Lupus Eritematozus (SLE) için spesifiktir, ancak ilaca bağlı lupus vakalarında genellikle negatif bulunurlar.

---

