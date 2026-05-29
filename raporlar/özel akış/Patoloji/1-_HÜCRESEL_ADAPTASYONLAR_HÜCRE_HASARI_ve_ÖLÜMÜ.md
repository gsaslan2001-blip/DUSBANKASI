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

### ÇİFT 1 (Benzerlik: 0.85)

**Soru 1 (ID: 6af7877c-db53-4372-83d8-9e588952132e)**
Soru Kökü: Programlı hücre ölümü olan apoptozun morfolojik özellikleri nekrozdan oldukça farklıdır. Elektron mikroskobunda izlenen ve apoptozun en karakteristik özelliği olan bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Çekirdek periferinde kromatin kondensasyonu
Açıklama: Nekroz hücresel şişme, membran rüptürü ve inflamasyonla karakterizeyken; apoptoz büzülme, zarların sağlam kalması ve inflamasyonun olmaması ile ayrılır. Elektron mikroskobunda apoptozun en belirgin ve ayırt edici özelliği, nükleer kromatinin çekirdek zarının periferinde yoğun ve keskin bir şekilde kondanse olmasıdır (çökelmesidir). Membran yırtılması ve inflamasyon doğrudan nekroza işaret eden bulgulardır.

**Soru 2 (ID: eb386943-613d-4420-826b-d8b9c66dcbb2)**
Soru Kökü: Apoptoza giden bir hücrenin elektron mikroskobik incelemesinde izlenen en karakteristik morfolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Çekirdek periferinde kromatin kondensasyonu
Açıklama: Apoptozun en karakteristik elektron mikroskobik morfolojik bulgusu, nükleer kromatinin çekirdek zarı periferinde birikerek yoğunlaşmasıdır (kromatin kondensasyonu). Mitokondriyal şişme ve plazma membran rüptürü apoptozda değil nekroz sürecinde görülen, membran bütünlüğünün bozulduğu durumlardır. Apoptoz süreci sessiz ilerler ve çevrede inflamatuvar bir yanıta (nötrofil infiltrasyonu) neden olmaz.

---

### ÇİFT 2 (Benzerlik: 0.80)

**Soru 1 (ID: 350839be-8cc6-4966-ae64-d2b4797f5f96)**
Soru Kökü: İskemik hasar veya toksin maruziyeti sonrası hücre içine aşırı kalsiyum girmesi, çeşitli yıkıcı enzimleri aktive ederek nekrozu uyarır. Aşağıdakilerden hangisi sitozolik kalsiyum artışı ile aktive olan bu yıkıcı enzimlerden biri değildir?
Doğru Şık (C): Süperoksit dismutaz
Açıklama: Hücre içine kontrolsüz kalsiyum girişi fosfolipazları (membranı yıkar), proteazları (hücre iskeletini yıkar), endonükleazları (DNA'yı yıkar) ve ATPazları (kalan ATP'yi tüketir) aktive ederek hücresel felakete neden olur. Süperoksit dismutaz (SOD) ise yıkıcı bir enzim değil, tam aksine serbest radikalleri hidrojen peroksite dönüştürerek hücreyi koruyan koruyucu bir anti-oksidan enzimdir. Dolayısıyla SOD'un bu yıkım süreciyle ilgisi yoktur.

**Soru 2 (ID: 54c887fe-f180-4778-a66c-53463bf4a738)**
Soru Kökü: İskemiye bağlı ATP kaybı sonrasında hücre zarındaki kalsiyum pompalarının bozulmasıyla sitozolik kalsiyum (Ca+2) konsantrasyonu hızla artar. Bu aşırı kalsiyum artışının neden olduğu yıkıcı enzimatik etkiler arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (D): ATPaz uyarımı ile kalan hücresel ATP'nin korunması ve sentezi
Açıklama: Kalsiyum yıkıcı bir iyondur ve hücre içinde arttığında hücresel ATPaz enzimlerini aktive ederek mevcut ATP'nin sentezlenmesi veya korunması yerine daha da hızlı tükenmesine (yıkılmasına) yol açar. Kalsiyumun proteaz, endonükleaz, fosfolipaz ve kaspaz aktivasyonu hasarın diğer ana bileşenleridir.

---

### ÇİFT 3 (Benzerlik: 0.79)

**Soru 1 (ID: 2fae3b7a-999a-4692-a516-6f448fee8db0)**
Soru Kökü: Ekstrinsik apoptoz yolağı hücre içi bazı moleküller tarafından sıkı bir şekilde denetlenir. Bu regülasyon sürecinde görev alan FLIP proteininin yolağı inhibe etme mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Pro-kaspaz-8'e bağlanarak FADD ile iletişimini bloke eder
Açıklama: FLIP molekülü, reseptör aracılı ekstrinsik apoptoz yolağının spesifik bir inhibitörüdür ve pro-kaspaz-8 ile FADD adaptör proteini arasına girerek etkileşimi keser. Sitokrom c blokajı FLIP'in değil, BCL-2 gibi anti-apoptotik intrinsik yolak elemanlarının görevidir. FLIP bu mekanizma sayesinde kaspazların otokatalitik aktivasyonunu engelleyerek hücreyi ölüm sinyallerine karşı dirençli hale getirir.

**Soru 2 (ID: e52be1c8-eca4-4a2e-b7c6-2cd0f3f527c1)**
Soru Kökü: Apoptoz sinyal iletiminde yer alan FLIP proteini ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Mitokondriyal yolağın (intrinsik) başlamasını doğrudan bloke eder
Açıklama: FLIP, yapısal olarak pro-kaspaz-8'e benzeyen ancak proteaz aktivitesi olmayan bir proteindir ve pro-kaspaz-8 ile rekabete girerek FADD'ye bağlanır; böylece yalnızca ekstrinsik (ölüm reseptörü) apoptoz yolağını inhibe eder. İntrinsik (mitokondriyal) yolağı doğrudan bloke etmek FLIP'in değil, BCL-2 ve BCL-XL gibi anti-apoptotik moleküllerin (sitokrom c çıkışını kilitleyen moleküllerin) görevidir. FLIP, virüsler ve bazı normal hücreler tarafından apoptozdan kaçmak için üretilir.

---

### ÇİFT 4 (Benzerlik: 0.78)

**Soru 1 (ID: 9f756c97-bddf-41ec-a2e6-4ab3ed12c792)**
Soru Kökü: 65 yaşındaki kadın hasta yaygın kemik ağrısı ve yorgunluk şikayetiyle hekime başvuruyor. Yapılan incelemelerde hastaya multipl myelom teşhisi konuluyor. Laboratuvar testlerinde hiperkalsemi saptanan hastanın böbreklerinde kalsiyum birikimi (nefrokalsinozis) gözleniyor. Bu hastadaki renal kalsiyum birikiminin patogenezi aşağıdakilerden hangisidir?
Doğru Şık (C): Metastatik kalsifikasyon
Açıklama: Multipl myelom gibi malignitelerde aşırı kemik yıkımı (rezorpsiyon) sonucu serum kalsiyum seviyeleri tehlikeli boyutlara ulaşır. Kanda aşırı miktarda bulunan bu kalsiyum, tamamen sağlıklı olan mide, akciğer ve böbrek gibi organların epitellerine çökelerek (nefrokalsinozis) metastatik kalsifikasyon patogenezini oluşturur. Distrofik kalsifikasyon ise hasarlı dokulara normokalsemik ortamda çökmedir.

**Soru 2 (ID: edf7e581-bfda-4ec7-ac40-cb7ffa7edb99)**
Soru Kökü: Altmış yaşında multipl myelom tanısıyla takip edilen hastada, osteolitik kemik lezyonları nedeniyle artmış kemik yıkımına sekonder ciddi kalsiyum yüksekliği saptanıyor. Otopsisinde, solunum güçlüğünü açıklayacak şekilde her iki akciğer parankiminde yaygın kalsiyum tuzlarının çökeldiği tespit ediliyor.

Akciğerlerde izlenen bu patolojik kalsifikasyon sürecinin temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Artmış kemik yıkımı ve eşlik eden hiperkalsemi
Açıklama: Multipl myelom, kemik metastazları veya Paget hastalığı gibi kemik yıkımının arttığı durumlarda serum kalsiyumu yükselir (hiperkalsemi) ve bu kalsiyumun normal, sağlıklı dokulara (akciğer, mide, böbrek) çökmesi metastatik kalsifikasyon tablosuna yol açar. Akciğer dokusunda herhangi bir nekroz (kazeifikasyon, iskemi) olmadığından distrofik süreç işlemez. Lokal D vitamini sentezi multipl myelomda değil sarkoidozda hiperkalsemi yapan temel mekanizmadır.

---

### ÇİFT 5 (Benzerlik: 0.78)

**Soru 1 (ID: 350839be-8cc6-4966-ae64-d2b4797f5f96)**
Soru Kökü: İskemik hasar veya toksin maruziyeti sonrası hücre içine aşırı kalsiyum girmesi, çeşitli yıkıcı enzimleri aktive ederek nekrozu uyarır. Aşağıdakilerden hangisi sitozolik kalsiyum artışı ile aktive olan bu yıkıcı enzimlerden biri değildir?
Doğru Şık (C): Süperoksit dismutaz
Açıklama: Hücre içine kontrolsüz kalsiyum girişi fosfolipazları (membranı yıkar), proteazları (hücre iskeletini yıkar), endonükleazları (DNA'yı yıkar) ve ATPazları (kalan ATP'yi tüketir) aktive ederek hücresel felakete neden olur. Süperoksit dismutaz (SOD) ise yıkıcı bir enzim değil, tam aksine serbest radikalleri hidrojen peroksite dönüştürerek hücreyi koruyan koruyucu bir anti-oksidan enzimdir. Dolayısıyla SOD'un bu yıkım süreciyle ilgisi yoktur.

**Soru 2 (ID: a5258569-d91e-4771-a6c0-699c8d0a1551)**
Soru Kökü: İskemik hücre hasarında hücre zarı bütünlüğünün bozulmasında sitozolik kalsiyum seviyesinin artışı kritik rol oynar. Kalsiyumun aktive ettiği yıkıcı enzimler farklı organelleri hedefler. Sadece hücre membranı değil, hücre iskeleti proteinlerinin de parçalanmasını doğrudan sağlayarak membran bütünlüğünü bozan mekanizma hangi enzimlerin aktivasyonuyla ilişkilidir?
Doğru Şık (C): Fosfolipaz ve proteazlar
Açıklama: Artan sitozolik kalsiyum fosfolipazları aktive ederek lipid membranları parçalar, proteazları aktive ederek ise membranı destekleyen hücre iskeleti proteinlerini yıkarak membran hasarını derinleştirir. Endonükleazlar çekirdek hasarından, kaspazlar ise apoptozun indüklenmesinden sorumludur.

---

### ÇİFT 6 (Benzerlik: 0.77)

**Soru 1 (ID: 18631ca4-a244-4dce-a059-4b4314c61daf)**
Soru Kökü: Apoptoz sürecinde oluşan apoptotik cisimlerin etraf dokuda inflamasyona neden olmadan fagositler tarafından hızla temizlenmesi ("ye beni" sinyali) gerekir. Normalde hücre zarının iç yüzeyinde bulunan ve apoptoz sırasında dış yüzeye çıkarak makrofajlar tarafından tanınmayı sağlayan molekül aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfatidilserin
Açıklama: Apoptozda hücre içi materyalin dışarı sızıp inflamasyon yaratmaması için apoptotik cisimcikler hızla fagosite edilmelidir. Normal şartlarda hücre zarının iç yaprağında duran fosfatidilserin, apoptoz kaskadı başladığında flippaz enzimlerinin değişimiyle takla atarak dış yüzeye çıkar. Bu fosfolipid, çevredeki makrofajlar için son derece spesifik bir "beni ye" (eat me) sinyali oluşturur.

**Soru 2 (ID: 493b96df-2d14-4858-bd66-0be0c1be4ecb)**
Soru Kökü: Apoptotik hücrelerin içeriği dışarı sızmadan, immün sistemi uyarmadan fagositler tarafından güvenle temizlenmesinde aşağıdaki moleküllerden hangisi görev **almaz**?
Doğru Şık (B): APAF-1
Açıklama: APAF-1 (apoptotik proteaz aktive edici faktör-1), hücre içinde intrinsik apoptoz sürecinde sitokrom c ile birleşerek kaspaz-9'u aktive eden kompleksin bir parçasıdır; hücre dışındaki fagositik tanınma (temizlenme) sürecinde rol almaz. Trombospondin adheziv bir glikoprotein olarak, C1q kompleman proteini olarak ve normalde iç zarda olan fosfatidilserinin hücre dışına flippaz inaktivasyonuyla çıkarak 'eat-me' (beni ye) sinyali oluşturması fagositoz için kritik yüzey belirteçleridir.

---

### ÇİFT 7 (Benzerlik: 0.77)

**Soru 1 (ID: 54c887fe-f180-4778-a66c-53463bf4a738)**
Soru Kökü: İskemiye bağlı ATP kaybı sonrasında hücre zarındaki kalsiyum pompalarının bozulmasıyla sitozolik kalsiyum (Ca+2) konsantrasyonu hızla artar. Bu aşırı kalsiyum artışının neden olduğu yıkıcı enzimatik etkiler arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (D): ATPaz uyarımı ile kalan hücresel ATP'nin korunması ve sentezi
Açıklama: Kalsiyum yıkıcı bir iyondur ve hücre içinde arttığında hücresel ATPaz enzimlerini aktive ederek mevcut ATP'nin sentezlenmesi veya korunması yerine daha da hızlı tükenmesine (yıkılmasına) yol açar. Kalsiyumun proteaz, endonükleaz, fosfolipaz ve kaspaz aktivasyonu hasarın diğer ana bileşenleridir.

**Soru 2 (ID: a5258569-d91e-4771-a6c0-699c8d0a1551)**
Soru Kökü: İskemik hücre hasarında hücre zarı bütünlüğünün bozulmasında sitozolik kalsiyum seviyesinin artışı kritik rol oynar. Kalsiyumun aktive ettiği yıkıcı enzimler farklı organelleri hedefler. Sadece hücre membranı değil, hücre iskeleti proteinlerinin de parçalanmasını doğrudan sağlayarak membran bütünlüğünü bozan mekanizma hangi enzimlerin aktivasyonuyla ilişkilidir?
Doğru Şık (C): Fosfolipaz ve proteazlar
Açıklama: Artan sitozolik kalsiyum fosfolipazları aktive ederek lipid membranları parçalar, proteazları aktive ederek ise membranı destekleyen hücre iskeleti proteinlerini yıkarak membran hasarını derinleştirir. Endonükleazlar çekirdek hasarından, kaspazlar ise apoptozun indüklenmesinden sorumludur.

---

### ÇİFT 8 (Benzerlik: 0.76)

**Soru 1 (ID: 41ac69f5-9f84-4c0e-a866-760b63487d03)**
Soru Kökü: İskemiye bağlı ATP üretiminin azalması sonucu hücre içinde bazı morfolojik değişiklikler meydana gelir. Işık mikroskobunda izlenen "çekirdek kromatininde kümeleşme" bulgusunun patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Aneorobik glikoliz artışına bağlı laktik asit birikimi ve pH düşüşü
Açıklama: İskemiye bağlı hipokside hücre mitokondriyal ATP üretemeyince hayatta kalabilmek için anaerobik glikoliz yolağına başvurur. Bu yolağın yan ürünü olan laktik asitin hücre içinde birikmesi, intraselüler pH'ın hızla düşmesine neden olur. Asidik ortam ise nükleus içindeki kromatinin çökelerek kümeleşmesine (hiperkromatizm) yol açar. Kalsiyum girişi veya sodyum pompasının bozulması enzim aktivasyonuna ve şişmeye neden olurken kromatini doğrudan kümeleştirmez.

**Soru 2 (ID: c460b86d-6fdf-42e4-becf-b60b31eeec0f)**
Soru Kökü: Hücre hasarında ATP kaybının yarattığı metabolik değişiklikler hücresel organelleri doğrudan etkiler. Hipoksi zemininde oksidatif fosforilasyonun bozulması sonucunda gelişen süreçlerden hangisi çekirdek kromatininde kümeleşmeye neden olan temel mekanizmadır?
Doğru Şık (A): Anaerobik glikoliz artışıyla laktik asit birikimi ve pH düşüşü
Açıklama: ATP azalınca hücre enerji sağlamak için anaerobik glikolizi artırır, bunun sonucunda glikojen depoları tükenir ve laktik asit birikir. Artan asidite hücre içi pH'ı düşürür ve bu durum çekirdek kromatininde asit ortamda kümeleşmeye (hiperkromatizm) yol açar; endonükleaz aktivasyonu ise kromatinin kümeleşmesine değil enzimatik olarak yıkılmasına (karyoliz) neden olur.

---

### ÇİFT 9 (Benzerlik: 0.76)

**Soru 1 (ID: 331a37ac-5ad9-46fd-a7d9-f108b0ab660f)**
Soru Kökü: Uzun süredir kronik asit regürjitasyonu şikayeti olan 55 yaşındaki erkek hastaya endoskopi yapılıyor. Özofagus alt uç biyopsisinde normal skuamöz epitel yerine, kadeh şeklinde mukus salgılayan hücrelerin bulunduğu kolumnar epitel izleniyor. Bu patolojik lezyonla ilgili olarak aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (B): Barret özofagusu olarak adlandırılır ve histopatolojisinde Goblet hücreleri izlenir
Açıklama: Gastroözofageal reflüde alt özofagus epitelinin aside dayanıklı intestinal kolumnar epitele dönmesi intestinal metaplazidir (Barret özofagusu). Tanı için kadeh şeklinde mukus üreten 'Goblet hücrelerinin' görülmesi şarttır. Bu lezyon skuamöz karsinom değil, adenokarsinom öncülüdür. Metaplazi, matür hücrenin şekil değiştirmesi değil, o bölgedeki kök hücrelerin yeniden programlanması ile oluşur.

**Soru 2 (ID: 5b34ba93-2dee-4aae-a2d1-f428d0459095)**
Soru Kökü: Gastroözofageal reflü hastalarında özofagus skuamöz epitelinin intestinal epiteline dönüşmesiyle karakterize Barret özofagusu gelişebilir. Bu prekanseröz lezyonun histopatolojik incelemesinde tanıyı kesinleştiren ve mutlaka görülmesi gereken hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (D): Goblet hücresi
Açıklama: Barret özofagusu, mide asidinin kronik irritasyonuna bağlı olarak özofagustaki skuamöz epitelin kolumnar (intestinal) epitele dönüştüğü bir metaplazi örneğidir. Bu değişimin histopatolojik tanısının kesin olarak konulabilmesi için bağırsak epiteline özgü kadeh şeklindeki Goblet hücrelerinin görülmesi zorunludur. Goblet hücrelerinin varlığı lezyonun adenokarsinom öncüsü olduğunu doğrularken, diğer hücre tipleri bu spesifik tanıyı tek başına koyduramaz.

---

### ÇİFT 10 (Benzerlik: 0.76)

**Soru 1 (ID: 359ba224-8656-4a0e-8e6d-6ccd3ac276a7)**
Soru Kökü: Pankreas beta hücresi hasarında, ekstrinsik yolak ile üretilen kaspaz-8'in doğrudan aktive ederek mitokondriyal yolağı uyardığı ve iki apoptotik yolak arasında köprü görevi gören molekül aşağıdakilerden hangisidir?
Doğru Şık (D): BID
Açıklama: Kaspaz-8 tarafından kesilerek aktifleşen BID (t-BID), mitokondriye giderek BAX/BAK'ı uyarır ve sitokrom c salınımını tetikleyerek ekstrinsik sinyali intrinsik yolağa bağlayan hücresel bir köprü işlevi görür. BAX pro-apoptotik bir efektör, BCL-2 ise anti-apoptotik bir düzenleyicidir ancak yolaklar arası köprü işlevi BID'ye aittir. Bu çapraz etkileşim (cross-talk) özellikle hepatosit ve beta hücresi hasarında apoptotik sinyali güçlendirmek için kritik öneme sahiptir.

**Soru 2 (ID: a10ea69d-4ddf-4a72-a0f1-db6a6417a8ef)**
Soru Kökü: Toksik hepatite bağlı hepatosit hasarı gelişen bir hastada mikroskobik incelemede ekstrinsik ve intrinsik apoptoz yolaklarının eşzamanlı aktifleştiği gözleniyor. Bu klinik tabloda kaspaz-8 tarafından kırılarak ekstrinsik ölüm reseptörü yolağını mitokondriyal intrinsik yolağa bağlayan köprü molekül aşağıdakilerden hangisidir?
Doğru Şık (A): BID
Açıklama: Ekstrinsik yolağın uyarılmasıyla aktive olan kaspaz-8, sitoplazmik bir sensör olan BID proteinini parçalayarak onu aktif formuna dönüştürür ve intrinsik yolağı uyarır. FADD ölüm reseptörünün alt adaptör proteini olup köprü görevi görmez, aksine sinyali başlatan kısımdadır. Bu mekanizma özellikle hepatosit hasarı ve pankreas beta hücre yıkımı gibi şiddetli hücre streslerinde iki ölüm yolağının sinerjik çalışmasını sağlar.

---

### ÇİFT 11 (Benzerlik: 0.75)

**Soru 1 (ID: 2c791169-1410-4a1a-baea-35ae92fb437f)**
Soru Kökü: Aşağıdakilerden hangisi programlı hücre ölümü olan apoptozun fizyolojik mekanizmalarından biri **değildir**?
Doğru Şık (B): Hatalı katlanmış proteinlerin endoplazmik retikulumda aşırı birikmesi
Açıklama: Hatalı katlanmış proteinlerin aşırı birikimi (ER stresi), apoptozun fizyolojik değil patolojik örneklerinden biridir. Emzirme sonrası meme involüsyonu ve menstrüel siklus döngüsü hormon bağımlı fizyolojik doku yıkımına örnektir. Organizmada homeostaziyi sağlamak adına gelişen T hücre seleksiyonu ve embriyolojik şekillenme süreçleri fizyolojik apoptoz sınırlarında değerlendirilir.

**Soru 2 (ID: d76daa19-9745-4779-b3f8-508b674b57f2)**
Soru Kökü: Apoptoz sıklıkla fizyolojik bir adaptasyon mekanizması olsa da, patolojik nedenlerle de gelişebilir. Aşağıdaki hücresel olaylardan hangisi fizyolojik apoptoz örneklerinden biri **değildir**?
Doğru Şık (B): Kanal tıkanması sonrası parankimal organlarda gelişen atrofi
Açıklama: Kanal tıkanması sonrasında (örneğin tükürük bezi veya pankreasta) oluşan basınç nedeniyle parankimal dokuda görülen atrofi patolojik apoptozun tipik bir örneğidir. Timustaki negatif seleksiyon, nötrofil yarı ömrünün bitmesi ve ovaryan involüsyon tamamen fizyolojik, programlanmış ve hormonal döngülerle regüle edilen doğal apoptoz örnekleridir. Patolojik apoptoz genellikle toksin, virüs, DNA hasarı veya bu tür fiziksel basınç sonucu tetiklenir.

---

### ÇİFT 12 (Benzerlik: 0.74)

**Soru 1 (ID: 00a107e1-e9da-4e61-93e1-540d6851c974)**
Soru Kökü: Serbest oksijen radikallerinin veya ultraviyole radyasyonun (radyan enerji) hücre çekirdeğindeki genetik materyale saldırması sonucu oluşan ve bu etkenlerin en önemli karsinojenik imzası olarak kabul edilen moleküler lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Pirimidin bazları arasında (Timin-Timin) dimer oluşumu
Açıklama: UV ışınları ve reaktif oksijen türleri DNA zinciri üzerinde yan yana bulunan pirimidin bazları (özellikle timin) arasında kovalent bağlar kurarak 'Timin dimerleri' (pirimidin dimerleri) oluşturur. DNA replikasyonunu bloke eden ve mutasyon sıklığını artıran bu dimerler, serbest radikal / UV kaynaklı genetik hasarın ve karsinojenezin birincil morfolojik tetikleyicisidir.

**Soru 2 (ID: 63ffcba8-ad72-4c91-936e-708e6fc62ad2)**
Soru Kökü: Oksidatif stres, hücresel makromoleküllere zarar vererek kanserojenik etkiler doğurabilir. Özellikle güneşe uzun süre maruz kalan bireylerde ultraviyole (UV) ışınlarının radyan enerji absorbsiyonu sonucu DNA'da hidrojen bağlarının kırılmasıyla oluşan karakteristik mutasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Pirimidin (timin-timin) dimerleri
Açıklama: UV ışınlarının hücresel DNA üzerindeki en karakteristik karsinojenik hasarı, pirimidin bazları arasında özellikle timin-timin (TT) dimerlerinin oluşumuna neden olmasıdır. Lipofuskin pigmenti hücre membranına yönelik serbest radikal hasarının (lipid peroksidasyonu) bir sonucudur, DNA hasarını ifade etmez.

---

### ÇİFT 13 (Benzerlik: 0.74)

**Soru 1 (ID: 6af7877c-db53-4372-83d8-9e588952132e)**
Soru Kökü: Programlı hücre ölümü olan apoptozun morfolojik özellikleri nekrozdan oldukça farklıdır. Elektron mikroskobunda izlenen ve apoptozun en karakteristik özelliği olan bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Çekirdek periferinde kromatin kondensasyonu
Açıklama: Nekroz hücresel şişme, membran rüptürü ve inflamasyonla karakterizeyken; apoptoz büzülme, zarların sağlam kalması ve inflamasyonun olmaması ile ayrılır. Elektron mikroskobunda apoptozun en belirgin ve ayırt edici özelliği, nükleer kromatinin çekirdek zarının periferinde yoğun ve keskin bir şekilde kondanse olmasıdır (çökelmesidir). Membran yırtılması ve inflamasyon doğrudan nekroza işaret eden bulgulardır.

**Soru 2 (ID: aaadd08a-223b-4185-9530-b0ca99718385)**
Soru Kökü: Apoptoz ile nekroz arasında morfolojik ve biyokimyasal olarak net farklılıklar bulunmaktadır. Buna göre apoptozda DNA yıkım modeline bağlı olarak jel elektroforezinde görülen spesifik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Nükleozom birimlerinden düzenli fragmantasyon ile klasik merdiven paterni
Açıklama: Apoptoz sırasında aktive olan endonükleazlar DNA'yı nükleozom birimlerinin arasından düzenli olarak (180-200 baz çifti ve katları şeklinde) keserler, bu da jel elektroforezinde basamaklı bir 'klasik merdiven paterni' yaratır. Nekrozda ise DNA yıkımı enzimatik fakat düzensizdir, bu durum elektroforezde belli bir merdiven değil yaygın bir iz (smear) oluşturur. Kromatin kondensasyonu da bu düzenli yıkıma eşlik eden en spesifik elektron mikroskobu bulgusudur.

---

### ÇİFT 14 (Benzerlik: 0.74)

**Soru 1 (ID: 3a63dc6b-71b3-41c8-9eb0-1533bffaed92)**
Soru Kökü: Kimyasalların ve çeşitli ilaçların hücresel metabolizması da serbest radikal oluşumunda önemli bir yer tutar. Bu bağlamda, sitokrom P450 sistemi tarafından kimyasal bir indirgenme reaksiyonu sonucu toksik olan CCl3 (triklorometil) serbest radikaline dönüşen molekül aşağıdakilerden hangisidir?
Doğru Şık (B): Karbontetraklorür
Açıklama: Karbontetraklorür (CCl4), karaciğerde yapısal bir kimyasal modifikasyona uğrayarak (indirgenme) CCl3 (triklorometil) radikaline dönüşür ve membran lipid peroksidasyonunu şiddetle indükler. Nitrik oksit kendisi bir pro-radikaldir ve peroksinitrite (ONOO-) dönüşür, ancak CCl3 radikalinin öncüsü spesifik olarak karbontetraklorürdür.

**Soru 2 (ID: b04a35cd-a661-48e8-a039-833d53b1fff2)**
Soru Kökü: Karbontetraklorür (CCl4) maruziyeti sonrası karaciğerde yağlanma ve ardından hücresel hasar meydana gelmektedir. Bu toksinin hücre zarına doğrudan saldıran ve lipid peroksidasyonu yapan son derece reaktif radikal formuna (CCl3) dönüşmesini sağlayan temel metabolik reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (E): İndirgenme (Redüksiyon)
Açıklama: CCl4 (karbontetraklorür) inert bir kimyasaldır, ancak karaciğer hücrelerindeki düz endoplazmik retikulum enzimlerince metabolize edilirken indirgenme (redüksiyon) reaksiyonuna uğrayarak aşırı reaktif ve yıkıcı bir serbest radikal olan CCl3 molekülüne dönüşür. Bu radikal hızlıca lipid peroksidasyonu başlatarak hücre membranı harabiyetine neden olur.

---

### ÇİFT 15 (Benzerlik: 0.74)

**Soru 1 (ID: 41ac69f5-9f84-4c0e-a866-760b63487d03)**
Soru Kökü: İskemiye bağlı ATP üretiminin azalması sonucu hücre içinde bazı morfolojik değişiklikler meydana gelir. Işık mikroskobunda izlenen "çekirdek kromatininde kümeleşme" bulgusunun patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Aneorobik glikoliz artışına bağlı laktik asit birikimi ve pH düşüşü
Açıklama: İskemiye bağlı hipokside hücre mitokondriyal ATP üretemeyince hayatta kalabilmek için anaerobik glikoliz yolağına başvurur. Bu yolağın yan ürünü olan laktik asitin hücre içinde birikmesi, intraselüler pH'ın hızla düşmesine neden olur. Asidik ortam ise nükleus içindeki kromatinin çökelerek kümeleşmesine (hiperkromatizm) yol açar. Kalsiyum girişi veya sodyum pompasının bozulması enzim aktivasyonuna ve şişmeye neden olurken kromatini doğrudan kümeleştirmez.

**Soru 2 (ID: fff50a95-ed20-4e4d-a26c-e3018a0fb095)**
Soru Kökü: İskemiye ikincil hipoksi gelişen bir dokuda, erken dönemde ATP üretiminin azalması çeşitli hücresel disfonksiyonları tetikler. Işık mikroskobunda hidropik değişiklik (vakuoler dejenerasyon) olarak izlenen bu tablonun hücresel düzeydeki ilk mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Hücre zarı ATP bağımlı Na+ pompasının bozulması
Açıklama: ATP azalmasının en erken fonksiyonel etkisi hücre zarındaki ATP bağımlı Na+ pompasının çalışamamasıdır, bu durum sodyumun ve suyun hücre içine girerek hücresel şişmeye neden olmasına yol açar. Ribozom ayrılması protein sentezini bozar, laktik asit artışı ise kromatin kümeleşmesine neden olur; ancak hacimsel şişmenin primer kök nedeni sodyum-potasyum pompa disfonksiyonudur.

---

### ÇİFT 16 (Benzerlik: 0.74)

**Soru 1 (ID: 04229371-6b9c-4bf0-8c01-65aa907b3dff)**
Soru Kökü: Kırk yaşında kadın hasta, kronik öksürük ve ciddi kilo kaybı şikayetiyle başvuruyor. Akciğer grafisinde apikal kavitasyonlar, biyopside ise makroskopik olarak beyaz, peynirimsi, dağılgan bir doku artığı saptanarak Mycobacterium tuberculosis tanısı konuluyor. Bu patogenezde gözlenen nekroz tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Kazeöz nekroz
Açıklama: Tüberküloz ve bazı mantar (histoplazmoz) enfeksiyonlarında spesifik olarak izlenen, yapısal olarak peynirimsi beyaz görünüme sahip hücre ölümü tipi kazeöz nekrozdur. Likefaksiyon nekrozu SSS anoksisi ve bakteriyel piyojenik apselerde sıvılaşma ve irin (pus) oluşumu ile karakterizedir.

**Soru 2 (ID: d179a806-f4f1-4d43-b585-242b84161836)**
Soru Kökü: Mantar enfeksiyonlarından Histoplazmoz vakalarında akciğer dokusunda makroskopik olarak beyaz, peynirimsi ve ufalanabilir bir artık izlenmektedir. Bu enfeksiyona karakteristik olarak eşlik eden doku ölüm paterni aşağıdakilerden hangisidir?
Doğru Şık (A): Kazeöz nekroz
Açıklama: Kazeöz nekroz, tipik olarak Tüberküloz enfeksiyonunda görülmekle birlikte Histoplazmoz gibi sistemik mantar enfeksiyonlarında da sıklıkla izlenir ve makroskopik olarak peynirimsi, granüler bir yapı sergiler. Dokunun tamamen eridiği likefaksiyon veya hücre iskeletinin korunduğu koagülasyon nekrozlarından farklı olarak kazeöz yapıda amorf granüler eozinofilik debris hakimdir.

---

### ÇİFT 17 (Benzerlik: 0.74)

**Soru 1 (ID: 63a79aff-af42-421f-a790-777953c20311)**
Soru Kökü: İskemik bir dokuya yeniden kan gitmesi (reperfüzyon), membranı sağlam hücreleri kurtarırken membranı hasar görmüş hücrelerde hücre ölümünü hızlandırır. Aşağıdakilerden hangisi reperfüzyon hasarının esas nedenlerinden biri değildir?
Doğru Şık (B): Aneorobik glikoliz artışına bağlı glikojen kaybı
Açıklama: İskemik dokuya kanın geri dönmesiyle (reperfüzyon) ortama aniden giren yüksek oksijen, aşırı serbest radikal (oksidatif stres) üretimine, inflamatuvar hücre göçüne ve sitozolik kalsiyum patlamasına neden olarak hücreyi yıkıma götürür. Anaerobik glikoliz ve glikojen kaybı ise reperfüzyonun değil, aksine kan akımının kesildiği ilk safhanın (iskeminin) bulgusudur.

**Soru 2 (ID: ac7e1906-af59-47c0-9f6b-33fab80f9268)**
Soru Kökü: Akut miyokard enfarktüsü şüphesiyle anjiyografiye alınan hastada tıkalı damar açılarak iskemik dokuya yeniden kan akışı (reperfüzyon) sağlanıyor. Ancak işlem sonrasında kanda nekroz enzimlerinin beklenenden daha hızlı ve fazla arttığı görülüyor. İrreversibl hücre hasarına girmiş hücrelerde reperfüzyonun etkisi nasıldır?
Doğru Şık (D): Hücre ölümünü hızlandırır ve hasarı derinleştirir.
Açıklama: İskemik bir dokuya yeniden kan gitmesi (reperfüzyon), reversibl faza sahip hücreleri kurtarsa da; zaten membran hasarı oluşmuş irreversibl faza geçmiş hücrelerde kalsiyum artışı, oksidatif stres ve kompleman aktivasyonu nedenleriyle hücre ölümünü hızlandırır. Nekroz halihazırda geri dönüşümsüzdür, kan gelmesi hücreyi kurtarmak yerine kalsiyum pompalanması ve enflamatuar hücre hücumu nedeniyle lizizi artırır.

---

### ÇİFT 18 (Benzerlik: 0.73)

**Soru 1 (ID: 18631ca4-a244-4dce-a059-4b4314c61daf)**
Soru Kökü: Apoptoz sürecinde oluşan apoptotik cisimlerin etraf dokuda inflamasyona neden olmadan fagositler tarafından hızla temizlenmesi ("ye beni" sinyali) gerekir. Normalde hücre zarının iç yüzeyinde bulunan ve apoptoz sırasında dış yüzeye çıkarak makrofajlar tarafından tanınmayı sağlayan molekül aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfatidilserin
Açıklama: Apoptozda hücre içi materyalin dışarı sızıp inflamasyon yaratmaması için apoptotik cisimcikler hızla fagosite edilmelidir. Normal şartlarda hücre zarının iç yaprağında duran fosfatidilserin, apoptoz kaskadı başladığında flippaz enzimlerinin değişimiyle takla atarak dış yüzeye çıkar. Bu fosfolipid, çevredeki makrofajlar için son derece spesifik bir "beni ye" (eat me) sinyali oluşturur.

**Soru 2 (ID: 7a549cf8-caf3-4a77-a49e-fbc128076703)**
Soru Kökü: Apoptoz sırasında fosfatidilserin molekülünün normal lokalizasyonundan çıkarak hücre zarının dış yüzeyine geçişini sağlayan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Skramblaz enziminin aktivasyonu ve flippaz enziminin inaktivasyonu
Açıklama: Fosfatidilserin normalde hücre zarının iç yüzeyinde yer alırken apoptoz sırasında dış yüzeye geçerek fagositler için 'beni ye' sinyali oluşturur. Bu yer değiştirme işlemi skramblaz enziminin aktivasyonu ve flippaz enziminin inaktivasyonu aracılığıyla hücresel enerji dengesi kullanılarak gerçekleştirilir. Trombospondin bir fagositoz opsonini olsa da lipitlerin zara yerleşimini değiştiren molekül değildir. Mekanizma yapısal yıkımdan ziyade enzimatik bir yer değiştirme regülasyonudur.

---

### ÇİFT 19 (Benzerlik: 0.73)

**Soru 1 (ID: 08e9f5db-27e8-4fe3-89da-768fde52f012)**
Soru Kökü: Hipoksiye bağlı ATP kaybı gelişen bir hücrede, morfolojik olarak yağlanma (lipit birikimi) ortaya çıkmaktadır. Bu lipit birikiminin hücresel mekanizması ve kök nedeni aşağıdakilerden hangisi ile en iyi açıklanır?
Doğru Şık (D): Polizomların ayrılması sonucu protein sentezi durduğu için lipitlerin lipoprotein şeklinde hücre dışına atılamaması
Açıklama: Hücrenin ATP kaybı sonucu endoplazmik retikulum şişer ve ribozomlar (polizomlar) ayrılır. Protein sentezi sekteye uğradığında, hücrede normalde üretilen apolipoproteinler yapılamaz; lipitler proteinlerle paketlenip lipoprotein olarak dışarı atılamadığı için hücresel sınırlar içinde hapsolur ve 'yağlı değişiklik' olarak izlenir.

**Soru 2 (ID: fff50a95-ed20-4e4d-a26c-e3018a0fb095)**
Soru Kökü: İskemiye ikincil hipoksi gelişen bir dokuda, erken dönemde ATP üretiminin azalması çeşitli hücresel disfonksiyonları tetikler. Işık mikroskobunda hidropik değişiklik (vakuoler dejenerasyon) olarak izlenen bu tablonun hücresel düzeydeki ilk mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Hücre zarı ATP bağımlı Na+ pompasının bozulması
Açıklama: ATP azalmasının en erken fonksiyonel etkisi hücre zarındaki ATP bağımlı Na+ pompasının çalışamamasıdır, bu durum sodyumun ve suyun hücre içine girerek hücresel şişmeye neden olmasına yol açar. Ribozom ayrılması protein sentezini bozar, laktik asit artışı ise kromatin kümeleşmesine neden olur; ancak hacimsel şişmenin primer kök nedeni sodyum-potasyum pompa disfonksiyonudur.

---

### ÇİFT 20 (Benzerlik: 0.72)

**Soru 1 (ID: 34861660-d659-4977-87c0-f3789c94190d)**
Soru Kökü: 60 yaşındaki erkek hasta ani gelişen bilinç kaybı ve sol hemipleji şikayetiyle acil servise getiriliyor. Çekilen kraniyal MR'da serebral iskemiye bağlı enfarkt alanı saptanıyor. Santral sinir sistemindeki bu iskemik alanda hücresel sindirim sonucu oluşan en olası nekroz tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Likefaksiyon nekrozu
Açıklama: Hipoksik hasar genel olarak solid organlarda doku iskeletini koruyan koagülasyon nekrozuna neden olur. Ancak santral sinir sistemi bu kuralın majör istisnasıdır; beyin dokusunda destek bağ dokusunun zayıf olması ve yüksek lipid içeriği nedeniyle, hipoksi sonrası doku hızla sıvılaşarak likefaksiyon nekrozuna uğrar. Diğer dokulardaki iskemik nekrozlarda temel yapı başlangıçta korunur.

**Soru 2 (ID: c4fd9224-11ee-4b04-bea4-bfc74f16e18d)**
Soru Kökü: İskemik doku hasarında nekroz tipi organın histolojik yapısına göre değişkenlik gösterir. Hipoksi sonrasında santral sinir sisteminde (beyin) gelişen doku hasarının, miyokard dokusundan farklı olarak koagülasyon nekrozu yerine spesifik bir nekroz tipiyle seyretmesinin klinik karşılığı aşağıdakilerden hangisidir?
Doğru Şık (E): Likit ile dolu ölü doku boşluğu oluşması
Açıklama: Hipoksi tüm solid dokularda koagülasyon nekrozuna neden olurken, santral sinir sistemi (SSS) istisnadır ve SSS hipoksisinde likefaksiyon (sıvılaşma) nekrozu görülür; doku sindirilir ve boşluğa sıvı dolar. Doku çatısının erken dönemde korunması miyokardda görülen koagülasyon nekrozunun tipik özelliğidir, beynin iskemik lezyonlarında bu özellik izlenmez.

---

### ÇİFT 21 (Benzerlik: 0.72)

**Soru 1 (ID: a10ea69d-4ddf-4a72-a0f1-db6a6417a8ef)**
Soru Kökü: Toksik hepatite bağlı hepatosit hasarı gelişen bir hastada mikroskobik incelemede ekstrinsik ve intrinsik apoptoz yolaklarının eşzamanlı aktifleştiği gözleniyor. Bu klinik tabloda kaspaz-8 tarafından kırılarak ekstrinsik ölüm reseptörü yolağını mitokondriyal intrinsik yolağa bağlayan köprü molekül aşağıdakilerden hangisidir?
Doğru Şık (A): BID
Açıklama: Ekstrinsik yolağın uyarılmasıyla aktive olan kaspaz-8, sitoplazmik bir sensör olan BID proteinini parçalayarak onu aktif formuna dönüştürür ve intrinsik yolağı uyarır. FADD ölüm reseptörünün alt adaptör proteini olup köprü görevi görmez, aksine sinyali başlatan kısımdadır. Bu mekanizma özellikle hepatosit hasarı ve pankreas beta hücre yıkımı gibi şiddetli hücre streslerinde iki ölüm yolağının sinerjik çalışmasını sağlar.

**Soru 2 (ID: cc585535-05c8-4c9e-9e0c-1ebb0c416c5f)**
Soru Kökü: Ekstrinsik (ölüm reseptörü) apoptoz yolağında hücre zarındaki ölüm reseptörleri ve adaptör proteinler görev alır. Aşağıdakilerden hangisi bu yolakta görev alan pro-apoptotik veya adaptör yapı taşlarından biri değildir?
Doğru Şık (B): BAX proteini
Açıklama: Ekstrinsik apoptoz, FAS ve TNF gibi ölüm reseptörleri ile hücre dışından gelen sinyallerle başlar; adaptör olan FADD proteini aracılığıyla da Kaspaz-8'i aktive eder. BAX molekülü ise ekstrinsik yolakta değil, intrinsik (mitokondriyal) yolakta mitokondri zarında delikler açarak sitokrom c çıkışını sağlayan pro-apoptotik bir proteindir. Bu nedenle BAX dışsal ölüm yolağında rol almaz.

---

### ÇİFT 22 (Benzerlik: 0.72)

**Soru 1 (ID: d76daa19-9745-4779-b3f8-508b674b57f2)**
Soru Kökü: Apoptoz sıklıkla fizyolojik bir adaptasyon mekanizması olsa da, patolojik nedenlerle de gelişebilir. Aşağıdaki hücresel olaylardan hangisi fizyolojik apoptoz örneklerinden biri **değildir**?
Doğru Şık (B): Kanal tıkanması sonrası parankimal organlarda gelişen atrofi
Açıklama: Kanal tıkanması sonrasında (örneğin tükürük bezi veya pankreasta) oluşan basınç nedeniyle parankimal dokuda görülen atrofi patolojik apoptozun tipik bir örneğidir. Timustaki negatif seleksiyon, nötrofil yarı ömrünün bitmesi ve ovaryan involüsyon tamamen fizyolojik, programlanmış ve hormonal döngülerle regüle edilen doğal apoptoz örnekleridir. Patolojik apoptoz genellikle toksin, virüs, DNA hasarı veya bu tür fiziksel basınç sonucu tetiklenir.

**Soru 2 (ID: ff7d8764-8dda-4afd-a032-e59ae5e54c1e)**
Soru Kökü: Nekroptoz morfolojik olarak nekroza, mekanizma olarak ise apoptoza benzeyen programlı bir hücre ölümüdür. Buna göre aşağıdakilerden hangisi patolojik nekroptoz örneklerinden biri **değildir**?
Doğru Şık (B): Memelilerde kemik büyüme plağı oluşumu
Açıklama: Memelilerde kemik büyüme plağı oluşumu nekroptozun tespit edilmiş en önemli fizyolojik örneğidir ve patolojik bir süreç değildir. Diğer şıklardaki steatohepatit, akut pankreatit ve nörodejeneratif hastalıklar inflamatuvar ve yıkıcı patolojik nekroptoz mekanizmalarıyla ilişkilidir. Nekroptoz kaspazların inaktif olmasıyla apoptozdan ayrılarak patolojik durumlarda şiddetli doku hasarı yaratır.

---

### ÇİFT 23 (Benzerlik: 0.72)

**Soru 1 (ID: b01ddba9-7ec0-423c-983d-18051f7dcb5c)**
Soru Kökü: Reversibl (geri dönüşümlü) hücre hasarında (hidropik değişiklik) izlenen morfolojik veya biyokimyasal bulgular arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (D): Hücre dışı alanda izlenen miyelin figürler
Açıklama: Miyelin figürler hasarlı membranlardan kaynaklanan sarmal fosfolipit kütleleridir ve reversibl aşamada hücre zarı sağlam olduğu için sadece hücre içinde izlenir. Hücre dışı miyelin figürler, hücre zarının tam kat hasar gördüğü irreversibl (nekroz) aşamasının mutlak bir göstergesidir. Kabarcıklanma, polizom ayrılması ve amorf dansiteler erken reversibl evrenin bulgularıdır.

**Soru 2 (ID: c0120175-d790-4e55-8c67-bfccd1985a66)**
Soru Kökü: Hücre hasarının ilerlemesiyle birlikte reversibl (geri dönüşümlü) aşamadan irreversibl (geri dönüşümsüz) hücre ölümüne geçişin en önemli hücresel belirteci aşağıdakilerden hangisidir?
Doğru Şık (C): Hücre zarı hasarı
Açıklama: Hücre hasarında hücresel şişme ve yağlanma geri dönüşümlü (reversibl) evrenin temel bulgularıdır. Ancak hasar ilerleyip hücre zarı ve lizozomal membranlar parçalandığında enzimler hücre dışına sızar ve hücresel sindirim başlar. Bu nedenle membran hasarı, hücrenin artık geri dönülemez bir yola (nekroz) girdiğini gösteren en kritik morfolojik eşiktir. ER şişmesi, ribozom ayrılması ve kromatin kümeleşmesi henüz dönüşü olan erken bulgulardır.

---

### ÇİFT 24 (Benzerlik: 0.72)

**Soru 1 (ID: 41ac69f5-9f84-4c0e-a866-760b63487d03)**
Soru Kökü: İskemiye bağlı ATP üretiminin azalması sonucu hücre içinde bazı morfolojik değişiklikler meydana gelir. Işık mikroskobunda izlenen "çekirdek kromatininde kümeleşme" bulgusunun patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Aneorobik glikoliz artışına bağlı laktik asit birikimi ve pH düşüşü
Açıklama: İskemiye bağlı hipokside hücre mitokondriyal ATP üretemeyince hayatta kalabilmek için anaerobik glikoliz yolağına başvurur. Bu yolağın yan ürünü olan laktik asitin hücre içinde birikmesi, intraselüler pH'ın hızla düşmesine neden olur. Asidik ortam ise nükleus içindeki kromatinin çökelerek kümeleşmesine (hiperkromatizm) yol açar. Kalsiyum girişi veya sodyum pompasının bozulması enzim aktivasyonuna ve şişmeye neden olurken kromatini doğrudan kümeleştirmez.

**Soru 2 (ID: ce67992e-b50b-48de-a915-0080e6a6e6d6)**
Soru Kökü: İskemi zemininde hangi spesifik son ürün, hücre içi pH'ı düşürerek nükleer kromatin agregasyonuna sebep olur?
Doğru Şık (E): Laktik asit
Açıklama: Oksijen yokluğunda anaerobik glikoliz artar, bu durum pirüvatın laktik aside dönüşmesini tetikler; artan laktik asit intraselüler pH'ı düşürür ve asidik ortam çekirdek kromatininde kümeleşmeye (hiperkromatizm) neden olur. Hidrojen peroksit oksidatif stres ürünüdür, enerji azlığının glikolitik metaboliti değildir.

---

### ÇİFT 25 (Benzerlik: 0.72)

**Soru 1 (ID: 9095b863-1718-4d1e-ad95-f7723fa94b91)**
Soru Kökü: Altmış sekiz yaşında uzun süreli sigara öyküsü olan erkek hastada skuamöz hücreli akciğer karsinomu saptanıyor. Hastanın rutin takiplerinde kan kalsiyum düzeyi 14 mg/dL (Normal: 8.5-10.5) ölçülüyor. Histopatolojik otopside midede ve akciğer venlerinde masif kalsiyum çökmesi saptanıyor. Hastada bu kalsifikasyon tablosuna yol açan en olası paraneoplastik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Tümör hücrelerinden ektopik PTH-ilişkili protein (PTH-rP) salgılanması
Açıklama: Skuamöz hücreli akciğer karsinomu paraneoplastik sendrom olarak ektopik PTH-ilişkili protein (PTH-rP) salgılayarak kanda parathormon benzeri etki yaratır ve sekonder masif hiperkalsemiye neden olur. Bu durum serum kalsiyumunun yüksek olduğu 'metastatik kalsifikasyon' tipidir ve kalsiyum mide, akciğer gibi asit salgılayan normal organlara çöker. Kazeifikasyon nekrozu ise serum kalsiyumunun normal olduğu distrofik kalsifikasyon nedenidir.

**Soru 2 (ID: edf7e581-bfda-4ec7-ac40-cb7ffa7edb99)**
Soru Kökü: Altmış yaşında multipl myelom tanısıyla takip edilen hastada, osteolitik kemik lezyonları nedeniyle artmış kemik yıkımına sekonder ciddi kalsiyum yüksekliği saptanıyor. Otopsisinde, solunum güçlüğünü açıklayacak şekilde her iki akciğer parankiminde yaygın kalsiyum tuzlarının çökeldiği tespit ediliyor.

Akciğerlerde izlenen bu patolojik kalsifikasyon sürecinin temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Artmış kemik yıkımı ve eşlik eden hiperkalsemi
Açıklama: Multipl myelom, kemik metastazları veya Paget hastalığı gibi kemik yıkımının arttığı durumlarda serum kalsiyumu yükselir (hiperkalsemi) ve bu kalsiyumun normal, sağlıklı dokulara (akciğer, mide, böbrek) çökmesi metastatik kalsifikasyon tablosuna yol açar. Akciğer dokusunda herhangi bir nekroz (kazeifikasyon, iskemi) olmadığından distrofik süreç işlemez. Lokal D vitamini sentezi multipl myelomda değil sarkoidozda hiperkalsemi yapan temel mekanizmadır.

---

### ÇİFT 26 (Benzerlik: 0.72)

**Soru 1 (ID: 99ff9bdc-1999-47e0-bd2b-6347b938e80c)**
Soru Kökü: Zararlı bir uyaranla karşılaşan hücrede geri dönüşümlü (reversibl) hasar süreci başlar. Bu sürecin ışık mikroskobunda tespit edilebilen ilk morfolojik belirtisi aşağıdakilerden hangisidir?
Doğru Şık (E): Hücresel şişme
Açıklama: Hücre zarındaki ATP bağımlı iyon pompalarının durmasıyla başlayan sürecin ışık mikroskobuna yansıyan ilk gözle görülür morfolojik değişikliği hücresel şişmedir (hidropik değişiklik). Yağlı değişiklik (steatoz) daha sonra gelişen ribozom ayrılması ve lipoprotein sekresyonunun bozulmasıyla ortaya çıkar; hücresel şişme kronolojik olarak en erken bulgudur.

**Soru 2 (ID: b01ddba9-7ec0-423c-983d-18051f7dcb5c)**
Soru Kökü: Reversibl (geri dönüşümlü) hücre hasarında (hidropik değişiklik) izlenen morfolojik veya biyokimyasal bulgular arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (D): Hücre dışı alanda izlenen miyelin figürler
Açıklama: Miyelin figürler hasarlı membranlardan kaynaklanan sarmal fosfolipit kütleleridir ve reversibl aşamada hücre zarı sağlam olduğu için sadece hücre içinde izlenir. Hücre dışı miyelin figürler, hücre zarının tam kat hasar gördüğü irreversibl (nekroz) aşamasının mutlak bir göstergesidir. Kabarcıklanma, polizom ayrılması ve amorf dansiteler erken reversibl evrenin bulgularıdır.

---

### ÇİFT 27 (Benzerlik: 0.72)

**Soru 1 (ID: 2b61598e-0917-41e3-b2d3-3494a0a72a74)**
Soru Kökü: Hiperkalsemili bireylerde kalsiyumun normal dokulara (mide epiteli, böbrekler, akciğerler) çökmesi metastatik kalsifikasyon olarak adlandırılır. Aşağıdakilerden hangisi metastatik kalsifikasyona neden olan patolojik durumlardan biri en az olasıdır?
Doğru Şık (C): Aterom plağı oluşumu
Açıklama: Metastatik kalsifikasyon, serum kalsiyumunun yüksek olduğu (hiperkalsemi) durumlarda tamamen sağlıklı dokulara kalsiyum çökmesidir; paratiroid adenomu ve multipl myelom gibi hiperkalsemi yapan durumlar bu tabloya neden olur. Aterom plağı ise önceden hasar görmüş, nekrotik zeminde normal serum kalsiyumu seviyelerinde gerçekleşen distrofik kalsifikasyon örneğidir.

**Soru 2 (ID: edf7e581-bfda-4ec7-ac40-cb7ffa7edb99)**
Soru Kökü: Altmış yaşında multipl myelom tanısıyla takip edilen hastada, osteolitik kemik lezyonları nedeniyle artmış kemik yıkımına sekonder ciddi kalsiyum yüksekliği saptanıyor. Otopsisinde, solunum güçlüğünü açıklayacak şekilde her iki akciğer parankiminde yaygın kalsiyum tuzlarının çökeldiği tespit ediliyor.

Akciğerlerde izlenen bu patolojik kalsifikasyon sürecinin temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Artmış kemik yıkımı ve eşlik eden hiperkalsemi
Açıklama: Multipl myelom, kemik metastazları veya Paget hastalığı gibi kemik yıkımının arttığı durumlarda serum kalsiyumu yükselir (hiperkalsemi) ve bu kalsiyumun normal, sağlıklı dokulara (akciğer, mide, böbrek) çökmesi metastatik kalsifikasyon tablosuna yol açar. Akciğer dokusunda herhangi bir nekroz (kazeifikasyon, iskemi) olmadığından distrofik süreç işlemez. Lokal D vitamini sentezi multipl myelomda değil sarkoidozda hiperkalsemi yapan temel mekanizmadır.

---

### ÇİFT 28 (Benzerlik: 0.71)

**Soru 1 (ID: b44bee04-2b6b-403a-b4f5-7a6b329582a0)**
Soru Kökü: Ölüm reseptörü yolağı (ekstrinsik apoptoz) ile ilgili aşağıdaki mekanizmalardan hangisi **yanlıştır**?
Doğru Şık (D): Kaspaz-9 ekstrinsik yolakta sinyali hücre içine aktaran ilk başlatıcı enzimdir
Açıklama: Kaspaz-9 ölüm reseptörü yolağında (ekstrinsik) değil, mitokondriyal yolakta (intrinsik) apoptozom kompleksi tarafından uyarılan spesifik başlatıcı kaspazdır. Ekstrinsik yolağın başlatıcı enzimleri ise kaspaz-8 ve kaspaz-10'dur. Başlatıcı kaspazlar farklı olsa da her iki yolak da kaspaz-3 ve kaspaz-6 gibi ortak cellat enzimlerde birleşerek hücre iskeletini yıkar.

**Soru 2 (ID: cc585535-05c8-4c9e-9e0c-1ebb0c416c5f)**
Soru Kökü: Ekstrinsik (ölüm reseptörü) apoptoz yolağında hücre zarındaki ölüm reseptörleri ve adaptör proteinler görev alır. Aşağıdakilerden hangisi bu yolakta görev alan pro-apoptotik veya adaptör yapı taşlarından biri değildir?
Doğru Şık (B): BAX proteini
Açıklama: Ekstrinsik apoptoz, FAS ve TNF gibi ölüm reseptörleri ile hücre dışından gelen sinyallerle başlar; adaptör olan FADD proteini aracılığıyla da Kaspaz-8'i aktive eder. BAX molekülü ise ekstrinsik yolakta değil, intrinsik (mitokondriyal) yolakta mitokondri zarında delikler açarak sitokrom c çıkışını sağlayan pro-apoptotik bir proteindir. Bu nedenle BAX dışsal ölüm yolağında rol almaz.

---

### ÇİFT 29 (Benzerlik: 0.71)

**Soru 1 (ID: b44bee04-2b6b-403a-b4f5-7a6b329582a0)**
Soru Kökü: Ölüm reseptörü yolağı (ekstrinsik apoptoz) ile ilgili aşağıdaki mekanizmalardan hangisi **yanlıştır**?
Doğru Şık (D): Kaspaz-9 ekstrinsik yolakta sinyali hücre içine aktaran ilk başlatıcı enzimdir
Açıklama: Kaspaz-9 ölüm reseptörü yolağında (ekstrinsik) değil, mitokondriyal yolakta (intrinsik) apoptozom kompleksi tarafından uyarılan spesifik başlatıcı kaspazdır. Ekstrinsik yolağın başlatıcı enzimleri ise kaspaz-8 ve kaspaz-10'dur. Başlatıcı kaspazlar farklı olsa da her iki yolak da kaspaz-3 ve kaspaz-6 gibi ortak cellat enzimlerde birleşerek hücre iskeletini yıkar.

**Soru 2 (ID: fc606af4-3e45-4ed6-be18-99eb4c1d32ec)**
Soru Kökü: Fas (CD95) reseptörünün Fas ligandı ile etkileşime girmesi sonucu aktive olan FADD molekülü, aşağıdakilerden hangisini doğrudan uyararak ölüm reseptör yolağını başlatır?
Doğru Şık (A): Pro-kaspaz-8
Açıklama: Fas-FasL etkileşimi, sitoplazmik bir adaptör olan FADD molekülünü uyarır ve bu yapı doğrudan pro-kaspaz-8'i (veya kaspaz-10'u) aktif formuna dönüştürerek ekstrinsik apoptoz kaskadını başlatır. Sitokrom c ve APAF-1 intrinsik yolakta mitokondri kaynaklı sinyallerle çalışır, ölüm reseptörüyle doğrudan ilişkili değildir. Kaspaz-3 ise başlatıcı kaspazların (kaspaz-8) aktive etmesini bekleyen inaktif bir infazcıdır.

---

### ÇİFT 30 (Benzerlik: 0.71)

**Soru 1 (ID: 359ba224-8656-4a0e-8e6d-6ccd3ac276a7)**
Soru Kökü: Pankreas beta hücresi hasarında, ekstrinsik yolak ile üretilen kaspaz-8'in doğrudan aktive ederek mitokondriyal yolağı uyardığı ve iki apoptotik yolak arasında köprü görevi gören molekül aşağıdakilerden hangisidir?
Doğru Şık (D): BID
Açıklama: Kaspaz-8 tarafından kesilerek aktifleşen BID (t-BID), mitokondriye giderek BAX/BAK'ı uyarır ve sitokrom c salınımını tetikleyerek ekstrinsik sinyali intrinsik yolağa bağlayan hücresel bir köprü işlevi görür. BAX pro-apoptotik bir efektör, BCL-2 ise anti-apoptotik bir düzenleyicidir ancak yolaklar arası köprü işlevi BID'ye aittir. Bu çapraz etkileşim (cross-talk) özellikle hepatosit ve beta hücresi hasarında apoptotik sinyali güçlendirmek için kritik öneme sahiptir.

**Soru 2 (ID: f65b1978-02ea-4caf-bafd-726aa446b4cb)**
Soru Kökü: İntrinsik (mitokondriyal) apoptotik yolakta, sitokrom c'nin sitoplazmaya geçerek APAF-1 ile birleşmesi sonucu apoptozom kompleksi oluşur. Bu kompleksin aktive ettiği "başlatıcı" enzim aşağıdakilerden hangisidir?
Doğru Şık (D): Kaspaz-9
Açıklama: İntrinsik yolakta DNA hasarı veya hücresel stres mitokondri zar geçirgenliğini artırarak sitokrom c'nin sitoplazmaya sızmasına neden olur. Sitokrom c, APAF-1 proteini ile birleşerek 'apoptozom' adı verilen dev kompleksi oluşturur. Bu kompleks, intrinsik yolağın spesifik başlatıcı enzimi olan Kaspaz-9'u aktive ederek apoptoz kaskadını tetikler. Kaspaz-8 ekstrinsik yolakta çalışırken, Kaspaz-3 uygulayıcı (effector) bir kaspazdır.

---

### ÇİFT 31 (Benzerlik: 0.70)

**Soru 1 (ID: c460b86d-6fdf-42e4-becf-b60b31eeec0f)**
Soru Kökü: Hücre hasarında ATP kaybının yarattığı metabolik değişiklikler hücresel organelleri doğrudan etkiler. Hipoksi zemininde oksidatif fosforilasyonun bozulması sonucunda gelişen süreçlerden hangisi çekirdek kromatininde kümeleşmeye neden olan temel mekanizmadır?
Doğru Şık (A): Anaerobik glikoliz artışıyla laktik asit birikimi ve pH düşüşü
Açıklama: ATP azalınca hücre enerji sağlamak için anaerobik glikolizi artırır, bunun sonucunda glikojen depoları tükenir ve laktik asit birikir. Artan asidite hücre içi pH'ı düşürür ve bu durum çekirdek kromatininde asit ortamda kümeleşmeye (hiperkromatizm) yol açar; endonükleaz aktivasyonu ise kromatinin kümeleşmesine değil enzimatik olarak yıkılmasına (karyoliz) neden olur.

**Soru 2 (ID: fff50a95-ed20-4e4d-a26c-e3018a0fb095)**
Soru Kökü: İskemiye ikincil hipoksi gelişen bir dokuda, erken dönemde ATP üretiminin azalması çeşitli hücresel disfonksiyonları tetikler. Işık mikroskobunda hidropik değişiklik (vakuoler dejenerasyon) olarak izlenen bu tablonun hücresel düzeydeki ilk mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Hücre zarı ATP bağımlı Na+ pompasının bozulması
Açıklama: ATP azalmasının en erken fonksiyonel etkisi hücre zarındaki ATP bağımlı Na+ pompasının çalışamamasıdır, bu durum sodyumun ve suyun hücre içine girerek hücresel şişmeye neden olmasına yol açar. Ribozom ayrılması protein sentezini bozar, laktik asit artışı ise kromatin kümeleşmesine neden olur; ancak hacimsel şişmenin primer kök nedeni sodyum-potasyum pompa disfonksiyonudur.

---

### ÇİFT 32 (Benzerlik: 0.70)

**Soru 1 (ID: 23cd7cb0-3f74-4f05-a9a8-96f326ea0a71)**
Soru Kökü: İn vitro kültürde apoptoza giden hücreleri erken dönemde saptamak isteyen bir araştırmacı, flippaz enziminin inaktivasyonuyla hücre zarının iç yüzünden dış yüzeyine doğru geçiş yapan spesifik bir molekülü hedeflemektedir.

Araştırmacının hedeflediği bu membran molekülü (fosfatidilserin) ile işaretleme yapmak için kullanması gereken belirteç aşağıdakilerden hangisidir?
Doğru Şık (D): Anneksin V
Açıklama: Normal hücrelerde plazma zarının sitoplazmik (iç) yüzünde bulunan fosfatidilserin, apoptozun erken evresinde skramblaz/flippaz aktivite değişimiyle dış yüzeye ('beni ye' sinyali vermek için) döner. Laboratuvar ortamında apoptotik cisimleri ve erken apoptotik hücreleri fosfatidilserin üzerinden tespit edebilmek için ona spesifik olarak ve yüksek afinite ile bağlanan Anneksin V proteini kullanılır. Sitokrom c ve APAF-1 hücre içi yolaklardır, canlı membrandan direkt boyanmazlar.

**Soru 2 (ID: 7a549cf8-caf3-4a77-a49e-fbc128076703)**
Soru Kökü: Apoptoz sırasında fosfatidilserin molekülünün normal lokalizasyonundan çıkarak hücre zarının dış yüzeyine geçişini sağlayan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Skramblaz enziminin aktivasyonu ve flippaz enziminin inaktivasyonu
Açıklama: Fosfatidilserin normalde hücre zarının iç yüzeyinde yer alırken apoptoz sırasında dış yüzeye geçerek fagositler için 'beni ye' sinyali oluşturur. Bu yer değiştirme işlemi skramblaz enziminin aktivasyonu ve flippaz enziminin inaktivasyonu aracılığıyla hücresel enerji dengesi kullanılarak gerçekleştirilir. Trombospondin bir fagositoz opsonini olsa da lipitlerin zara yerleşimini değiştiren molekül değildir. Mekanizma yapısal yıkımdan ziyade enzimatik bir yer değiştirme regülasyonudur.

---

### ÇİFT 33 (Benzerlik: 0.70)

**Soru 1 (ID: a10ea69d-4ddf-4a72-a0f1-db6a6417a8ef)**
Soru Kökü: Toksik hepatite bağlı hepatosit hasarı gelişen bir hastada mikroskobik incelemede ekstrinsik ve intrinsik apoptoz yolaklarının eşzamanlı aktifleştiği gözleniyor. Bu klinik tabloda kaspaz-8 tarafından kırılarak ekstrinsik ölüm reseptörü yolağını mitokondriyal intrinsik yolağa bağlayan köprü molekül aşağıdakilerden hangisidir?
Doğru Şık (A): BID
Açıklama: Ekstrinsik yolağın uyarılmasıyla aktive olan kaspaz-8, sitoplazmik bir sensör olan BID proteinini parçalayarak onu aktif formuna dönüştürür ve intrinsik yolağı uyarır. FADD ölüm reseptörünün alt adaptör proteini olup köprü görevi görmez, aksine sinyali başlatan kısımdadır. Bu mekanizma özellikle hepatosit hasarı ve pankreas beta hücre yıkımı gibi şiddetli hücre streslerinde iki ölüm yolağının sinerjik çalışmasını sağlar.

**Soru 2 (ID: fc606af4-3e45-4ed6-be18-99eb4c1d32ec)**
Soru Kökü: Fas (CD95) reseptörünün Fas ligandı ile etkileşime girmesi sonucu aktive olan FADD molekülü, aşağıdakilerden hangisini doğrudan uyararak ölüm reseptör yolağını başlatır?
Doğru Şık (A): Pro-kaspaz-8
Açıklama: Fas-FasL etkileşimi, sitoplazmik bir adaptör olan FADD molekülünü uyarır ve bu yapı doğrudan pro-kaspaz-8'i (veya kaspaz-10'u) aktif formuna dönüştürerek ekstrinsik apoptoz kaskadını başlatır. Sitokrom c ve APAF-1 intrinsik yolakta mitokondri kaynaklı sinyallerle çalışır, ölüm reseptörüyle doğrudan ilişkili değildir. Kaspaz-3 ise başlatıcı kaspazların (kaspaz-8) aktive etmesini bekleyen inaktif bir infazcıdır.

---

### ÇİFT 34 (Benzerlik: 0.70)

**Soru 1 (ID: 50019f40-4a63-4f29-a2fd-a10216f5aeeb)**
Soru Kökü: Hücre ölüm mekanizmaları olan nekroz ve apoptozun karşılaştırılmasıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?
Doğru Şık (D): Apoptoz sürecinde çevresel dokuda belirgin ve şiddetli bir inflamatuvar yanıt tetiklenir.
Açıklama: Nekrozda hücre şişip zar patladığı için hücresel içerik dışarı saçılır ve bağışıklık sistemini alarma geçirerek şiddetli bir inflamasyon başlatır. Oysa apoptoz hücrenin kendi kendini paketleyerek (apoptotik cisimcikler) sessizce küçülmesi ve fagositler tarafından hemen yutulması sürecidir. Apoptozda hücre zarı yırtılmaz ve etrafta kesinlikle inflamatuvar yanıt oluşmaz, bu nedenle D seçeneği yanlıştır.

**Soru 2 (ID: 6af7877c-db53-4372-83d8-9e588952132e)**
Soru Kökü: Programlı hücre ölümü olan apoptozun morfolojik özellikleri nekrozdan oldukça farklıdır. Elektron mikroskobunda izlenen ve apoptozun en karakteristik özelliği olan bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Çekirdek periferinde kromatin kondensasyonu
Açıklama: Nekroz hücresel şişme, membran rüptürü ve inflamasyonla karakterizeyken; apoptoz büzülme, zarların sağlam kalması ve inflamasyonun olmaması ile ayrılır. Elektron mikroskobunda apoptozun en belirgin ve ayırt edici özelliği, nükleer kromatinin çekirdek zarının periferinde yoğun ve keskin bir şekilde kondanse olmasıdır (çökelmesidir). Membran yırtılması ve inflamasyon doğrudan nekroza işaret eden bulgulardır.

---

### ÇİFT 35 (Benzerlik: 0.70)

**Soru 1 (ID: 2b61598e-0917-41e3-b2d3-3494a0a72a74)**
Soru Kökü: Hiperkalsemili bireylerde kalsiyumun normal dokulara (mide epiteli, böbrekler, akciğerler) çökmesi metastatik kalsifikasyon olarak adlandırılır. Aşağıdakilerden hangisi metastatik kalsifikasyona neden olan patolojik durumlardan biri en az olasıdır?
Doğru Şık (C): Aterom plağı oluşumu
Açıklama: Metastatik kalsifikasyon, serum kalsiyumunun yüksek olduğu (hiperkalsemi) durumlarda tamamen sağlıklı dokulara kalsiyum çökmesidir; paratiroid adenomu ve multipl myelom gibi hiperkalsemi yapan durumlar bu tabloya neden olur. Aterom plağı ise önceden hasar görmüş, nekrotik zeminde normal serum kalsiyumu seviyelerinde gerçekleşen distrofik kalsifikasyon örneğidir.

**Soru 2 (ID: 6cf84974-07cf-4278-aac0-5a539f964622)**
Soru Kökü: Elli beş yaşındaki erkek hastanın akciğer radyografisinde kalsifiye bir lezyon saptanıyor. Biyopside amorf, eozinofilik debris izlenen kazeifikasyon nekrozu alanlarında yoğun kalsiyum birikimi görülüyor. Hastanın serum kalsiyum düzeyi normal sınırlarda bulunuyor.

Bu hastada izlenen patolojik birikim süreci aşağıdakilerden hangisidir?
Doğru Şık (A): Distrofik kalsifikasyon
Açıklama: Serum kalsiyum seviyelerinin normal olduğu durumlarda, önceden hasarlanmış ve nekroza uğramış dokularda (kazeifikasyon nekrozu, yağ nekrozu vb.) gerçekleşen kalsiyum çökmesi distrofik kalsifikasyon olarak tanımlanır. Metastatik kalsifikasyon ise mutlaka hiperkalsemi (örn. primer hiperparatiroidi) zemininde sağlıklı dokularda (mide, böbrek, akciğer vb.) görülür. Mönckeberg sklerozu spesifik olarak yaşlılarda muskuler arter mediasında görülür, kazeifikasyon zemininde gelişmez.

---

### ÇİFT 36 (Benzerlik: 0.70)

**Soru 1 (ID: 2b61598e-0917-41e3-b2d3-3494a0a72a74)**
Soru Kökü: Hiperkalsemili bireylerde kalsiyumun normal dokulara (mide epiteli, böbrekler, akciğerler) çökmesi metastatik kalsifikasyon olarak adlandırılır. Aşağıdakilerden hangisi metastatik kalsifikasyona neden olan patolojik durumlardan biri en az olasıdır?
Doğru Şık (C): Aterom plağı oluşumu
Açıklama: Metastatik kalsifikasyon, serum kalsiyumunun yüksek olduğu (hiperkalsemi) durumlarda tamamen sağlıklı dokulara kalsiyum çökmesidir; paratiroid adenomu ve multipl myelom gibi hiperkalsemi yapan durumlar bu tabloya neden olur. Aterom plağı ise önceden hasar görmüş, nekrotik zeminde normal serum kalsiyumu seviyelerinde gerçekleşen distrofik kalsifikasyon örneğidir.

**Soru 2 (ID: 9f756c97-bddf-41ec-a2e6-4ab3ed12c792)**
Soru Kökü: 65 yaşındaki kadın hasta yaygın kemik ağrısı ve yorgunluk şikayetiyle hekime başvuruyor. Yapılan incelemelerde hastaya multipl myelom teşhisi konuluyor. Laboratuvar testlerinde hiperkalsemi saptanan hastanın böbreklerinde kalsiyum birikimi (nefrokalsinozis) gözleniyor. Bu hastadaki renal kalsiyum birikiminin patogenezi aşağıdakilerden hangisidir?
Doğru Şık (C): Metastatik kalsifikasyon
Açıklama: Multipl myelom gibi malignitelerde aşırı kemik yıkımı (rezorpsiyon) sonucu serum kalsiyum seviyeleri tehlikeli boyutlara ulaşır. Kanda aşırı miktarda bulunan bu kalsiyum, tamamen sağlıklı olan mide, akciğer ve böbrek gibi organların epitellerine çökelerek (nefrokalsinozis) metastatik kalsifikasyon patogenezini oluşturur. Distrofik kalsifikasyon ise hasarlı dokulara normokalsemik ortamda çökmedir.

---

### ÇİFT 37 (Benzerlik: 0.69)

**Soru 1 (ID: 6cf84974-07cf-4278-aac0-5a539f964622)**
Soru Kökü: Elli beş yaşındaki erkek hastanın akciğer radyografisinde kalsifiye bir lezyon saptanıyor. Biyopside amorf, eozinofilik debris izlenen kazeifikasyon nekrozu alanlarında yoğun kalsiyum birikimi görülüyor. Hastanın serum kalsiyum düzeyi normal sınırlarda bulunuyor.

Bu hastada izlenen patolojik birikim süreci aşağıdakilerden hangisidir?
Doğru Şık (A): Distrofik kalsifikasyon
Açıklama: Serum kalsiyum seviyelerinin normal olduğu durumlarda, önceden hasarlanmış ve nekroza uğramış dokularda (kazeifikasyon nekrozu, yağ nekrozu vb.) gerçekleşen kalsiyum çökmesi distrofik kalsifikasyon olarak tanımlanır. Metastatik kalsifikasyon ise mutlaka hiperkalsemi (örn. primer hiperparatiroidi) zemininde sağlıklı dokularda (mide, böbrek, akciğer vb.) görülür. Mönckeberg sklerozu spesifik olarak yaşlılarda muskuler arter mediasında görülür, kazeifikasyon zemininde gelişmez.

**Soru 2 (ID: edf7e581-bfda-4ec7-ac40-cb7ffa7edb99)**
Soru Kökü: Altmış yaşında multipl myelom tanısıyla takip edilen hastada, osteolitik kemik lezyonları nedeniyle artmış kemik yıkımına sekonder ciddi kalsiyum yüksekliği saptanıyor. Otopsisinde, solunum güçlüğünü açıklayacak şekilde her iki akciğer parankiminde yaygın kalsiyum tuzlarının çökeldiği tespit ediliyor.

Akciğerlerde izlenen bu patolojik kalsifikasyon sürecinin temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Artmış kemik yıkımı ve eşlik eden hiperkalsemi
Açıklama: Multipl myelom, kemik metastazları veya Paget hastalığı gibi kemik yıkımının arttığı durumlarda serum kalsiyumu yükselir (hiperkalsemi) ve bu kalsiyumun normal, sağlıklı dokulara (akciğer, mide, böbrek) çökmesi metastatik kalsifikasyon tablosuna yol açar. Akciğer dokusunda herhangi bir nekroz (kazeifikasyon, iskemi) olmadığından distrofik süreç işlemez. Lokal D vitamini sentezi multipl myelomda değil sarkoidozda hiperkalsemi yapan temel mekanizmadır.

---

### ÇİFT 38 (Benzerlik: 0.69)

**Soru 1 (ID: 99ff9bdc-1999-47e0-bd2b-6347b938e80c)**
Soru Kökü: Zararlı bir uyaranla karşılaşan hücrede geri dönüşümlü (reversibl) hasar süreci başlar. Bu sürecin ışık mikroskobunda tespit edilebilen ilk morfolojik belirtisi aşağıdakilerden hangisidir?
Doğru Şık (E): Hücresel şişme
Açıklama: Hücre zarındaki ATP bağımlı iyon pompalarının durmasıyla başlayan sürecin ışık mikroskobuna yansıyan ilk gözle görülür morfolojik değişikliği hücresel şişmedir (hidropik değişiklik). Yağlı değişiklik (steatoz) daha sonra gelişen ribozom ayrılması ve lipoprotein sekresyonunun bozulmasıyla ortaya çıkar; hücresel şişme kronolojik olarak en erken bulgudur.

**Soru 2 (ID: c0120175-d790-4e55-8c67-bfccd1985a66)**
Soru Kökü: Hücre hasarının ilerlemesiyle birlikte reversibl (geri dönüşümlü) aşamadan irreversibl (geri dönüşümsüz) hücre ölümüne geçişin en önemli hücresel belirteci aşağıdakilerden hangisidir?
Doğru Şık (C): Hücre zarı hasarı
Açıklama: Hücre hasarında hücresel şişme ve yağlanma geri dönüşümlü (reversibl) evrenin temel bulgularıdır. Ancak hasar ilerleyip hücre zarı ve lizozomal membranlar parçalandığında enzimler hücre dışına sızar ve hücresel sindirim başlar. Bu nedenle membran hasarı, hücrenin artık geri dönülemez bir yola (nekroz) girdiğini gösteren en kritik morfolojik eşiktir. ER şişmesi, ribozom ayrılması ve kromatin kümeleşmesi henüz dönüşü olan erken bulgulardır.

---

### ÇİFT 39 (Benzerlik: 0.69)

**Soru 1 (ID: cc585535-05c8-4c9e-9e0c-1ebb0c416c5f)**
Soru Kökü: Ekstrinsik (ölüm reseptörü) apoptoz yolağında hücre zarındaki ölüm reseptörleri ve adaptör proteinler görev alır. Aşağıdakilerden hangisi bu yolakta görev alan pro-apoptotik veya adaptör yapı taşlarından biri değildir?
Doğru Şık (B): BAX proteini
Açıklama: Ekstrinsik apoptoz, FAS ve TNF gibi ölüm reseptörleri ile hücre dışından gelen sinyallerle başlar; adaptör olan FADD proteini aracılığıyla da Kaspaz-8'i aktive eder. BAX molekülü ise ekstrinsik yolakta değil, intrinsik (mitokondriyal) yolakta mitokondri zarında delikler açarak sitokrom c çıkışını sağlayan pro-apoptotik bir proteindir. Bu nedenle BAX dışsal ölüm yolağında rol almaz.

**Soru 2 (ID: fc606af4-3e45-4ed6-be18-99eb4c1d32ec)**
Soru Kökü: Fas (CD95) reseptörünün Fas ligandı ile etkileşime girmesi sonucu aktive olan FADD molekülü, aşağıdakilerden hangisini doğrudan uyararak ölüm reseptör yolağını başlatır?
Doğru Şık (A): Pro-kaspaz-8
Açıklama: Fas-FasL etkileşimi, sitoplazmik bir adaptör olan FADD molekülünü uyarır ve bu yapı doğrudan pro-kaspaz-8'i (veya kaspaz-10'u) aktif formuna dönüştürerek ekstrinsik apoptoz kaskadını başlatır. Sitokrom c ve APAF-1 intrinsik yolakta mitokondri kaynaklı sinyallerle çalışır, ölüm reseptörüyle doğrudan ilişkili değildir. Kaspaz-3 ise başlatıcı kaspazların (kaspaz-8) aktive etmesini bekleyen inaktif bir infazcıdır.

---

### ÇİFT 40 (Benzerlik: 0.69)

**Soru 1 (ID: 2fae3b7a-999a-4692-a516-6f448fee8db0)**
Soru Kökü: Ekstrinsik apoptoz yolağı hücre içi bazı moleküller tarafından sıkı bir şekilde denetlenir. Bu regülasyon sürecinde görev alan FLIP proteininin yolağı inhibe etme mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Pro-kaspaz-8'e bağlanarak FADD ile iletişimini bloke eder
Açıklama: FLIP molekülü, reseptör aracılı ekstrinsik apoptoz yolağının spesifik bir inhibitörüdür ve pro-kaspaz-8 ile FADD adaptör proteini arasına girerek etkileşimi keser. Sitokrom c blokajı FLIP'in değil, BCL-2 gibi anti-apoptotik intrinsik yolak elemanlarının görevidir. FLIP bu mekanizma sayesinde kaspazların otokatalitik aktivasyonunu engelleyerek hücreyi ölüm sinyallerine karşı dirençli hale getirir.

**Soru 2 (ID: cc585535-05c8-4c9e-9e0c-1ebb0c416c5f)**
Soru Kökü: Ekstrinsik (ölüm reseptörü) apoptoz yolağında hücre zarındaki ölüm reseptörleri ve adaptör proteinler görev alır. Aşağıdakilerden hangisi bu yolakta görev alan pro-apoptotik veya adaptör yapı taşlarından biri değildir?
Doğru Şık (B): BAX proteini
Açıklama: Ekstrinsik apoptoz, FAS ve TNF gibi ölüm reseptörleri ile hücre dışından gelen sinyallerle başlar; adaptör olan FADD proteini aracılığıyla da Kaspaz-8'i aktive eder. BAX molekülü ise ekstrinsik yolakta değil, intrinsik (mitokondriyal) yolakta mitokondri zarında delikler açarak sitokrom c çıkışını sağlayan pro-apoptotik bir proteindir. Bu nedenle BAX dışsal ölüm yolağında rol almaz.

---

### ÇİFT 41 (Benzerlik: 0.69)

**Soru 1 (ID: 2c791169-1410-4a1a-baea-35ae92fb437f)**
Soru Kökü: Aşağıdakilerden hangisi programlı hücre ölümü olan apoptozun fizyolojik mekanizmalarından biri **değildir**?
Doğru Şık (B): Hatalı katlanmış proteinlerin endoplazmik retikulumda aşırı birikmesi
Açıklama: Hatalı katlanmış proteinlerin aşırı birikimi (ER stresi), apoptozun fizyolojik değil patolojik örneklerinden biridir. Emzirme sonrası meme involüsyonu ve menstrüel siklus döngüsü hormon bağımlı fizyolojik doku yıkımına örnektir. Organizmada homeostaziyi sağlamak adına gelişen T hücre seleksiyonu ve embriyolojik şekillenme süreçleri fizyolojik apoptoz sınırlarında değerlendirilir.

**Soru 2 (ID: ff7d8764-8dda-4afd-a032-e59ae5e54c1e)**
Soru Kökü: Nekroptoz morfolojik olarak nekroza, mekanizma olarak ise apoptoza benzeyen programlı bir hücre ölümüdür. Buna göre aşağıdakilerden hangisi patolojik nekroptoz örneklerinden biri **değildir**?
Doğru Şık (B): Memelilerde kemik büyüme plağı oluşumu
Açıklama: Memelilerde kemik büyüme plağı oluşumu nekroptozun tespit edilmiş en önemli fizyolojik örneğidir ve patolojik bir süreç değildir. Diğer şıklardaki steatohepatit, akut pankreatit ve nörodejeneratif hastalıklar inflamatuvar ve yıkıcı patolojik nekroptoz mekanizmalarıyla ilişkilidir. Nekroptoz kaspazların inaktif olmasıyla apoptozdan ayrılarak patolojik durumlarda şiddetli doku hasarı yaratır.

---

