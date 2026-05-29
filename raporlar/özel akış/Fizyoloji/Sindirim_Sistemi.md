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

### ÇİFT 1 (Benzerlik: 0.87)

**Soru 1 (ID: 5f523f9a-2a5a-4511-99f9-d5b9034c2fa4)**
Soru Kökü: İleumda yoğunlaşan Peyer plaklarının üzerini örten epitelde bulunan, lümenden gelen antijenik proteinleri fagositoz yoluyla alarak alttaki lenfoid dokuya sunan özelleşmiş membranöz epitelyal hücreler aşağıdakilerden hangisidir?
Doğru Şık (A): M hücreleri
Açıklama: M (mikrofold) hücreleri, immün sistemin bağırsaktaki gözcüleri gibi çalışır. Fırçamsı kenarı olmayan bu yassı hücreler, lümendeki makromolekül ve bakterileri endositozla alıp bazolateral yüzlerindeki lenfositlere sunarlar (transsitoz). Paneth hücreleri ise kript tabanında antimikrobiyal (defensin) salgılayan farklı bir savunma hattıdır.

**Soru 2 (ID: a3658749-22af-4d78-ad32-d07b3968c9be)**
Soru Kökü: İleumda Peyer plakları adı verilen yoğun lenf folliküllerinin üzerini örten, besinlerle alınan antijenik molekül ve proteinleri fagositoz ile yakalayarak alt tabakadaki immün hücrelere sunan özelleşmiş epitelyal yapı aşağıdakilerden hangisidir?
Doğru Şık (C): M hücreleri (Membranöz mikrofold)
Açıklama: M hücreleri (Mikrofold), bağırsak lümenine bakan yüzeylerindeki katlantılar ile makromolekülleri ve mikrobiyal antijenleri pinositoz/fagositoz yoluyla alıp Peyer plaklarındaki T ve B lenfositlerine sunan temel immün sensör hücrelerdir. Paneth hücreleri patojenleri lizozim/defensin ile direkt parçalayarak antimikrobiyal işlev görürken, M hücreleri immün sunum köprüsü olarak çalışır.

---

### ÇİFT 2 (Benzerlik: 0.87)

**Soru 1 (ID: 7899194a-9abc-44f4-86cd-7f7ca63852e7)**
Soru Kökü: Duodenumdaki I hücrelerinden yağ ve protein yıkım ürünlerine yanıt olarak salgılanan kolesistokinin (CCK) hormonunun fonksiyonları arasında aşağıdakilerden hangisi **en az olası**dır?
Doğru Şık (A): Mide boşalmasını hızlandırarak kimusun duodenuma geçişini kolaylaştırması
Açıklama: Kolesistokinin (CCK), yağlı ve yüksek kalorili kimus duodenuma ulaştığında salgılanan temel sindirim hormonudur ve bağırsağa gelen ağır yükün sindirilmesi için zamana ihtiyaç duyulduğundan mide boşalmasını şiddetle inhibe eder (geciktirir). Diğer tüm şıklar CCK'nın fizyolojik görevleridir; safra kesesini kasar, pankreas enzimlerini salgılatır ve Oddi sfinkterini gevşetir. Mide boşalmasını hızlandırmak, CCK'nın enterogastrik refleks üzerinden yürüttüğü negatif geri bildirim mantığına tamamen terstir.

**Soru 2 (ID: dd798796-3530-4905-825c-a5c683026f50)**
Soru Kökü: Aşağıdakilerden hangisi duodenuma yağlı ve proteinli kimus gelmesiyle salgılanan kolesistokinin (CCK) hormonunun fizyolojik etkilerinden biri **değildir**?
Doğru Şık (D): Mide asit sekresyonunu ve boşalmasını artırmak
Açıklama: Kolesistokinin (CCK), duodenuma ulaşan kimusun sindirimi için gerekli pankreatik enzimleri ve safrayı ortama boşaltırken, yukarıda yer alan midenin motilitesini ve asit salgısını enterogastrik refleks benzeri etkiyle yarışmalı olarak inhibe eder. Mide asidini artırmak tam tersine gastrinin görevidir ve CCK gastrinin mide motilitesini artırıcı etkisini kompetitif olarak durdurur. Bu sayede ince bağırsak, gelen asitli kimusu sindirmek için zaman kazanır.

---

### ÇİFT 3 (Benzerlik: 0.87)

**Soru 1 (ID: 9c507953-557d-4afa-868d-46e202a91080)**
Soru Kökü: Karaciğer hepatositlerinde glukuronil transferaz enzimi ile konjuge edilen direkt bilirubinin safra kanaliküllerine ATP bağımlı aktif transportla atılmasını sağlayan ve hücre direncinde rol oynayan spesifik protein aşağıdakilerden hangisidir?
Doğru Şık (E): MDR (Multidrug Resistance Protein)
Açıklama: Direkt bilirubinin safraya salgılanması mekanizması, karaciğerde bilirubin sentezinin hız kısıtlayıcı basamağıdır ve bu işlem ATP kullanan MDR (Multidrug Resistance) proteini tarafından gerçekleştirilir. ISBT proteini terminal ileumda safra tuzlarını geri emer, karaciğer sekresyonunda rol almaz. MDR proteini aynı zamanda tümör hücrelerinde kemoterapi ilaçlarını hücre dışına atarak ilaç direnci gelişiminden de sorumlu olan kilit bir transport molekülüdür.

**Soru 2 (ID: d2460b33-d428-4b78-8136-dcfa801797ff)**
Soru Kökü: Hepatosit içinde glukuronil transferaz enzimi ile konjuge edilerek direkt bilirubin formuna dönüştürülen molekülün, safra kanaliküllerine ATP bağımlı sekresyonunu sağlayan ve tümör hücrelerinde ilaç direnciyle de bilinen taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (D): MDR (Multidrug resistance protein)
Açıklama: Direkt bilirubinin karaciğer hücresinden safra kanalikülüne atılması, bilirubin metabolizmasının hız kısıtlayıcı basamağıdır ve MDR (Multidrug resistance) adlı ATP bağımlı aktif taşıyıcı bir protein tarafından gerçekleştirilir. Aynı MDR ailesi proteinleri, kanser hücrelerinde kemoterapötik ajanları hücre dışına pompalamak suretiyle tümörün ilaçlara direnç kazanmasından da sorumludur.

---

### ÇİFT 4 (Benzerlik: 0.86)

**Soru 1 (ID: 5ca0930d-1950-4ffa-a921-b41b58ec6db8)**
Soru Kökü: Torasik cerrahi sonrası duktus torasikus yaralanmasına bağlı olarak intraplevral boşlukta şilöz sıvı birikimi (şilotoraks) saptanan bir hastada, lenfatik kanallara yüklenen lipid miktarını minimize etmek için oral beslenmede özellikle hangi tür lipidlerin tercih edilmesi uygundur?
Doğru Şık (E): Kısa ve orta zincirli yağ asitleri
Açıklama: Uzun zincirli yağ asitleri ve kolesterol esterleri enterositlerde şilomikronlara sentezlenerek lenfatik dolaşıma (duktus torasikus) aktarılır. Duktus torasikus kaçaklarında (şilotoraks) lenf akımını azaltmak için bu yağlardan kaçınılmalıdır. Kısa ve orta zincirli yağ asitleri ise lenfatik sisteme hiç girmeden portal ven üzerinden doğrudan kan akımına karıştıkları için şilotoraks tedavisinde güvenli enerji kaynağı olarak kullanılırlar.

**Soru 2 (ID: 930cef17-1b0b-45bb-83ef-c0aefbdef89b)**
Soru Kökü: Torasik travma sonrası duktus torasikusu yırtılan ve plevral boşluğa şilöz sıvı kaçağı (şilotoraks) olan bir hastada, lenfatik sistemi atlayarak doğrudan portal ven yoluyla emilebilen enteral bir beslenme rejimine geçilmesi hedeflenmektedir. Bu amaçla hastanın diyetinde birincil kalori kaynağı olarak hangi formdaki lipitlerin tercih edilmesi en uygundur?
Doğru Şık (A): Kısa ve orta zincirli yağ asitleri
Açıklama: Kısa ve orta zincirli yağ asitleri suda nispeten daha çözünür oldukları için miçel yapısına ve şilomikronlara paketlenmeye ihtiyaç duymadan enterositlerden doğrudan kapiller kana ve portal vene difüze olurlar. Uzun zincirli yağ asitleri ve kolesterol ise mecburen şilomikronlara paketlenerek lenfatik sisteme (duktus torasikus) dökülürler. Şilotoraks vakalarında lenfatik akımı durdurmak için uzun zincirli yağlar kesilip portal yoldan emilen orta zincirli yağlara (MCT) geçilir.

---

### ÇİFT 5 (Benzerlik: 0.86)

**Soru 1 (ID: 03e9f38d-f1dc-469a-a9c6-8797fa2144a2)**
Soru Kökü: Artmış tükürük bezi aktivitesi sırasında bölgesel kan akımının salgıya paralel olarak artırılması gerekir. Tükürükte bulunan ve lokal vazodilatör etkiye sahip bradikinin peptidinin oluşumunu hızlandıran enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Kallikrein
Açıklama: Tükürük bezleri uyarıldığında aciner hücrelerden lümene kallikrein enzimi de salgılanır. Kallikrein, plazma proteinlerinden (kininojen) bradikinin oluşturur. Bradikinin güçlü bir lokal vazodilatatördür, kılcal damarları genişleterek bezin artan oksijen ve sıvı ihtiyacını karşılar. Lizozim antimikrobiyal, amilaz/pityalin ise sindirim enzimidir.

**Soru 2 (ID: 567c207f-0140-4330-a6da-afd74191edf5)**
Soru Kökü: Tükürük bezlerinin sempatik ve parasempatik uyarım sırasında metabolik aktivitesi arttığında, bezlerin kan akımı da artarak (lokal vazodilatasyon) bol miktarda sıvı sekresyonu için plazma desteği sağlanır. Tükürüğün yapısında bulunan ve bradikinin oluşumunu tetikleyerek bu lokal vazodilatasyonu doğrudan başlatan proteolitik enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Kallikrein
Açıklama: Aktif tükürük sekresyonu sırasında bez dokusundan kana salınan kallikrein enzimi, plazma proteinlerinden (kininojen) güçlü bir damar genişletici olan bradikinini oluşturur. Bradikinin lokal kapillerleri genişleterek bezlere kan akımını artırır ve salgı için gereken suyu sağlar. Pityalin ve lingual lipaz sindirimden, lizozim ve tiyosiyanat ise antibakteriyel savunmadan sorumlu moleküllerdir.

---

### ÇİFT 6 (Benzerlik: 0.85)

**Soru 1 (ID: 023b12e4-867c-40e7-9aee-3baceb94f5e5)**
Soru Kökü: 45 yaşında erkek hasta yutma güçlüğü (disfaji) ve gece regürjitasyonu şikayetleriyle başvuruyor. Yapılan manometrik incelemede özofagus gövdesinde primer peristaltizm kaybı ve alt özofageal sfinkterde yutkunmaya bağlı gevşemenin olmadığı tespit ediliyor. Bu hastadaki sfinkter gevşeme kusurunun hücresel mekanizmasında aşağıdaki moleküllerden hangilerinin eksikliği **en olası** durumdur?
Doğru Şık (E): Nitrik oksit (NO) ve VIP
Açıklama: Akalazya tablosunda temel sorun, alt özofageal sfinkterin gevşemesini sağlayan inhibitör nörotransmitterler olan Nitrik Oksit (NO) ve Vazoaktif İntestinal Polipeptid (VIP) üretimindeki eksikliktir. Asetilkolin kasılmayı tetikleyen eksitatör bir nörotransmitter olduğundan, sfinkterin gevşeyememesi durumunda eksikliği değil hücresel etkisinin rakipsiz kalması söz konusudur. VIP ve NO eksikliğinde sfinkter kapalı kalır ve gıda geçişi bloke olur.

**Soru 2 (ID: a5b2055e-11b3-4d07-afb1-35d756016223)**
Soru Kökü: Otuz beş yaşında kadın hasta, katı ve sıvı gıdaları yutarken takılma hissi yaşıyor. Yapılan incelemelerde alt özofageal sfinkterin yutkunma esnasında gevşeyemediği ve primer peristaltizmin kaybolduğu saptanıyor. Bu hastalığın patofizyolojisinde, sfinkteri normalde gevşeten aşağıdaki moleküllerden hangisinin eksikliği rol oynar?
Doğru Şık (C): Nitrik oksit (NO) ve VIP
Açıklama: Akalazya hastalığı, miyenterik pleksustaki inhibitör nöronların dejenerasyonu sonucu ortaya çıkar. Normalde alt özofagus sfinkterinin (AÖS) yutkunma sırasında gevşemesini sağlayan temel nörotransmitterler Nitrik oksit (NO) ve Vazoaktif İntestinal Polipeptid (VIP)'tir. Bu ajanların yokluğu sfinkterin spastik kalmasına ve yutulan lokmanın mideye inememesine neden olur.

---

### ÇİFT 7 (Benzerlik: 0.85)

**Soru 1 (ID: 137271e4-cc97-4490-871e-725ae144bbe2)**
Soru Kökü: Duodenuma sekrete edilen ve lipid emilimini tamamlayan safra tuzlarının vücuttan kaybedilmeyerek enterohepatik döngüye katılmak üzere terminal ileumdan sekonder aktif taşımayla geri emilimini sağlayan membran proteini aşağıdakilerden hangisidir?
Doğru Şık (A): ISBT (İleal Sodyum Safra Asidi Taşıyıcısı)
Açıklama: Terminal ileumda safra tuzlarının %90-95'lik kısmı, sodyumla simport (aynı yönde) taşıma yapan ISBT (Ileal Sodium Bile Acid Transporter) proteini aracılığıyla aktif olarak geri emilip enterohepatik dolaşıma girer. MDR proteini safranın karaciğerden kanaliküllere ilk pompalanışında ATP harcarken; SGLT-1 glukoz/galaktoz emilimini yönetir. Safra kaybını önleyen sistem ISBT'dir.

**Soru 2 (ID: bb9a051d-62e8-4b3d-81b3-c0bcbb441a5c)**
Soru Kökü: Karaciğer tarafından sentezlenip bağırsağa salgılanan safra tuzlarının vücutta korunmasını sağlayan "enterohepatik döngü", günde 6-8 kez tekrarlanarak safra rezervini korur. Bu döngüde safra tuzlarının bağırsaktan geri emilimini üstlenen ve ileum enterositlerinin apikal zarında bulunan özelleşmiş taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (A): İleal Sodyum Safra Asidi Taşıyıcısı (ISBT)
Açıklama: Safra tuzlarının büyük bir kısmı ince bağırsağın son bölümü olan terminal ileumdan sekonder aktif taşımayla (Na+ ile simport şeklinde) İleal Sodyum Safra Asidi Taşıyıcısı (ISBT) üzerinden emilir ve portal ven aracılığıyla karaciğere döner. SGLT-1 glikoz/galaktoz emiliminde, DMT-1 demir emiliminde, MDR ise hepatositlerden safraya bilirubin sekresyonunda (hız kısıtlayıcı basamak) görev alır; ISBT ileum rezeksiyonlarında kaybedildiği için safra tuzu ishalinin temel mekanizmasıdır.

---

### ÇİFT 8 (Benzerlik: 0.83)

**Soru 1 (ID: 6d40086e-b0ab-49ca-801f-4a0d77ae78ee)**
Soru Kökü: Kronik alkol bağımlılığı öyküsü olan 55 yaşındaki siroz hastasının karaciğer biyopsisinde Disse aralığında yoğun elastin ve Tip-I kollajen birikimi izlenmiştir. Bu hastada patolojik doku yeniden yapılanmasından (fibrozis) sorumlu miyofibroblastlara dönüşen hücrelerin orijinal görevi aşağıdakilerden hangisidir?
Doğru Şık (A): Retinoik asit depolamak
Açıklama: Karaciğer sirozunda fibrozise neden olan miyofibroblastların kökeni, Disse aralığında normalde A vitamini (retinoik asit) depolayan İto hücreleridir. İnflamasyon sürecinde Kupffer hücreleri (fagositik hücreler) İto hücrelerini aktive eder, ancak elastin ve kollajen matriksini üreten hücreler İto hücrelerinin dönüşmüş formlarıdır. Bu fibrotik süreç sinüzoidal kan akımını bozarak portal hipertansiyona yol açar.

**Soru 2 (ID: f1edebef-3d4a-41e4-aad5-c125cde08f90)**
Soru Kökü: Elli beş yaşında, yirmi yıldır yüksek miktarda alkol tüketim öyküsü olan erkek hasta karın şişliği şikayetiyle başvuruyor. Karaciğer iğne biyopsisinde perisinüzoidal mesafede (Disse aralığı) normalde bulunmaması gereken yoğun elastin birikimi ve Tip-1 kolajen artışına bağlı fibrozis izleniyor. Karaciğer sirozuna giden bu patolojik süreçte miyofibroblastlara dönüşerek elastin sentezinden sorumlu hale gelen hücre aşağıdakilerden hangisidir?
Doğru Şık (D): İto (yağ depo) hücreleri
Açıklama: İto (yağ depo / stellat) hücreleri, Disse aralığında yer alan ve normal fizyolojide A vitamini (retinoik asit) depolamakla görevli olan hücrelerdir. Alkol toksisitesi gibi kronik karaciğer hasarında bu hücreler aktive olup miyofibroblastlara dönüşür ve elastin ile Tip-1 kolajen sentezleyerek karaciğer sirozunun (fibrozis) temel histolojik lezyonunu oluştururlar. Kupffer hücreleri ise makrofaj türevli fagositik hücrelerdir ve fibrogenezden direkt olarak sorumlu değildir.

---

### ÇİFT 9 (Benzerlik: 0.83)

**Soru 1 (ID: f2f7f461-b420-4d0d-8d83-31aaa6b3fa32)**
Soru Kökü: Büyüme geriliği, şiddetli steatore ve nörolojik bulgularla izlenen çocuk hastanın kan yaymasında eritrositlerin zarlarında tırtıklı (akontosit) görünümler saptanmıştır. İnce bağırsak biyopsisinde enterositlerin lipitlerle dolu olduğu görülüyorsa, bu hastada eksikliği düşünülen temel taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (B): Apolipoprotein B-48
Açıklama: Bu klinik tablo Abetalipoproteinemi hastalığını tanımlamaktadır. Enterositlerde şilomikron sentezi ve hücredışına (lenfatiklere) ekzositozu için Apolipoprotein B-48 şarttır. Apo B-48 yokluğunda lipitler enterosit içinde hapis kalır (steatore), ADEK vitaminleri emilemez ve azalan sistemik kolesterol düzeyi eritrosit membranlarında yapısal bozulmaya (akontosit) yol açar.

**Soru 2 (ID: f50a8672-678b-43c7-b778-639df6da3c00)**
Soru Kökü: Beş yaşında erkek çocuk; yağlı ishal (steatore), gece körlüğü şikayetleri ve periferik kan yaymasında 'akantosit' adı verilen tırtıklı kenarlı eritrositlerin saptanması üzerine pediatrik gastroenterolojiye yönlendiriliyor. Yapılan genetik incelemede hastanın ince bağırsak enterositlerinde üretilen spesifik bir apolipoproteinin yokluğu saptanıyor. Bu hastada şilomikronların enterositlerden lenfatik sisteme ekzositozunu engelleyen eksik protein aşağıdakilerden hangisidir?
Doğru Şık (B): Apolipoprotein B-48
Açıklama: Abetalipoproteinemi hastalığında ince bağırsak enterositlerinde şilomikronların yapıtaşı olan Apolipoprotein B-48 sentezlenemez. Bunun sonucunda enterosite alınan lipitler şilomikron formunda lenfatik sisteme verilemediği için hücrede birikir, steatore ve ADEK vitamini eksikliği görülür. Ayrıca membranlardaki kolesterol yapısı bozulduğundan eritrositler akantosit (dikensi) görünümü alırlar; bu klinik triadı (steatore, vitamin eksikliği, akantosit) sadece Apo B-48 yokluğu açıklar.

---

### ÇİFT 10 (Benzerlik: 0.82)

**Soru 1 (ID: cdedc028-43ab-493f-b95a-76a9e86b7a1d)**
Soru Kökü: 35 yaşında erkek hastaya kronik gastrit nedeniyle mide mukozasını koruyucu etkisi olan prostaglandin E1 analoğu mizoprostol reçete edilmiştir. Bu ilacın mide paryetal hücresinde asit salgısını baskılamak için kullandığı sinyal iletim yolağı ve hücresel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Gi proteini üzerinden cAMP sentezini baskılamak
Açıklama: PGE1 ve somatostatin, paryetal hücrede inhibitör G proteini (Gi) yolağını aktive ederek hücre içi cAMP düzeyini düşürür ve H+/K+ ATPaz pompasının çalışmasını baskılar. Histamin reseptörü (H2) Gs proteini üzerinden cAMP'yi artırırken, asetilkolin (M3) ve gastrin (CCKb) reseptörleri Gq proteini üzerinden IP3/Ca yolağını kullanarak asit salgısını artırırlar. Bu mekanik fark, PGE1'in koruyucu ve antiasit etkisinin temelini oluşturur.

**Soru 2 (ID: dc00083e-6737-4ce1-8020-d43001195213)**
Soru Kökü: Nonsteroid anti-inflamatuar ilaç (NSAİİ) kullanımına bağlı gastrik ülseri olan bir hastaya koruyucu olarak PGE1 analoğu olan mizoprostol reçete edilmiştir. Bu ilacın paryetal hücre üzerindeki H+ sekresyonunu baskılayıcı moleküler mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): İnhibitör Gi proteini yoluyla hücre içi cAMP düzeyini baskılaması
Açıklama: Prostaglandinler (PGE1) ve somatostatin, paryetal hücre bazal membranında inhibitör Gi (G-inhibitör) proteinine bağlı reseptörleri uyararak adenilat siklaz aktivitesini baskılar ve böylece cAMP aracılı asit salgısını inhibe eder. Güçlü bir çeldirici olan H2 reseptör blokajı (simetidin) veya proton pompa inhibisyonu (omeprazol) farklı farmakolojik hedeflerdir ve mizoprostolün direkt etki mekanizmasını açıklamaz. Bu entegrasyon, NSAİİ'lerin prostaglandin sentezini baskılayarak mide mukozasındaki koruyucu cAMP inhibisyonunu nasıl ortadan kaldırdığını açıklar.

---

### ÇİFT 11 (Benzerlik: 0.82)

**Soru 1 (ID: 6c2ccf58-c222-4ffe-88cb-e09ead94dfd5)**
Soru Kökü: Otuz beş yaşında kadın hasta, katı ve sıvı gıdalara karşı giderek artan yutma güçlüğü şikayetiyle başvuruyor. Baryumlu grafide özofagus alt ucunda "kuş gagası" görünümü, manometride ise alt özofagus sfinkterinde yetersiz gevşeme ve primer peristaltizm kaybı tespit ediliyor. Bu hastalığın patogenezinde rol oynayan inhibitör medyatör eksikliği aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Nitrik oksit (NO) ve VIP
Açıklama: Klinik senaryo klasik bir akalazya tablosunu tanımlamaktadır ve bu hastalıkta miyenterik (Auerbach) pleksustaki inhibitör nöronların harabiyeti söz konusudur. Alt özofagus sfinkterinin (AÖS) yutkunma sırasında gevşemesini sağlayan temel inhibitör nörotransmitterler Nitrik oksit (NO) ve Vazoaktif İntestinal Polipeptid'dir (VIP). En güçlü distraktör olan asetilkolin, AÖS gevşemesini değil tam tersine kasılmasını (eksitatör uyarı) sağlayan temel faktördür ve akalazyada etkisi karşılanamaz hale gelir.

**Soru 2 (ID: a5b2055e-11b3-4d07-afb1-35d756016223)**
Soru Kökü: Otuz beş yaşında kadın hasta, katı ve sıvı gıdaları yutarken takılma hissi yaşıyor. Yapılan incelemelerde alt özofageal sfinkterin yutkunma esnasında gevşeyemediği ve primer peristaltizmin kaybolduğu saptanıyor. Bu hastalığın patofizyolojisinde, sfinkteri normalde gevşeten aşağıdaki moleküllerden hangisinin eksikliği rol oynar?
Doğru Şık (C): Nitrik oksit (NO) ve VIP
Açıklama: Akalazya hastalığı, miyenterik pleksustaki inhibitör nöronların dejenerasyonu sonucu ortaya çıkar. Normalde alt özofagus sfinkterinin (AÖS) yutkunma sırasında gevşemesini sağlayan temel nörotransmitterler Nitrik oksit (NO) ve Vazoaktif İntestinal Polipeptid (VIP)'tir. Bu ajanların yokluğu sfinkterin spastik kalmasına ve yutulan lokmanın mideye inememesine neden olur.

---

### ÇİFT 12 (Benzerlik: 0.82)

**Soru 1 (ID: 9b31d239-f5cf-457c-b00e-3f3817df0378)**
Soru Kökü: Üç yaşında erkek çocuk, şiddetli bir rotavirus enfeksiyonu (viral ishal) geçirdikten iki hafta sonra, süt içtiğinde başlayan şiddetli gaz, karın ağrısı ve köpüklü asidik ishal şikayetiyle getiriliyor. Dışkı analizinde emilemeyen karbonhidratlara bağlı yüksek osmolalite saptanıyor. Bu hastadaki sekonder malabsorbsiyona neden olan enzimin fizyolojik lokalizasyonu aşağıdakilerden hangisidir?
Doğru Şık (E): İnce bağırsak enterositlerinin apikal fırçamsı kenarı
Açıklama: Klinik tablo, rotavirus gibi epitelyal hasar yapan enfeksiyonlar sonrası bağırsak villus uçlarının dökülmesine bağlı gelişen geçici (sekonder) laktoz intoleransıdır. Laktaz enzimi, disakkaritleri monosakkaritlere parçalayan diğer enzimler (maltaz, sükraz) gibi pankreastan değil, doğrudan ince bağırsak enterositlerinin apikal fırçamsı (mikrovillus) kenarından sentezlenir. Bu enzimlerin lümende serbest dolaşmayıp membran bağlı olması, viral gastroenteritlerde neden özellikle süt (laktoz) toleransının bozulduğunu açıklar.

**Soru 2 (ID: eadbf969-90a4-41d3-a66f-0b2f13e7cb8a)**
Soru Kökü: Altı aylık bir bebekte geçirilen rotavirüs enfeksiyonunu takiben sulu, asidik ve gazlı ishal tablosu iki haftadır devam etmektedir. Dışkı incelemesinde yüksek ozmotik açık tespit edilmiştir. Bu hastada uzamış osmotik diyareye yol açan patofizyolojik durum ve eksikliği en olası enzim aşağıdakilerden hangisidir?
Doğru Şık (B): Fırçamsı kenar harabiyeti - Laktaz
Açıklama: Rotavirüs gibi intestinal enfeksiyonlar bağırsak villus epitelini (fırçamsı kenar) harap edebilir. Fırçamsı kenar enzimlerinden sentezlenmesi en nazik ve ilk etkilenen laktazdır. Anne sütündeki laktoz sindirilemez, lümende kalan laktoz su çekerek ozmotik diyareye ve kolonik fermantasyonla asidik gaita/gaz üretimine neden olur (geçici laktoz intoleransı). Sorun pankreas kaynaklı değildir.

---

### ÇİFT 13 (Benzerlik: 0.81)

**Soru 1 (ID: 0c46970a-a385-489b-841f-ae013b4ab6b3)**
Soru Kökü: Günlük tükürük salgısının %70 gibi en büyük kısmını üreten ve seröz ağırlıklı olmak üzere miks salgı yapan tükürük bezi aşağıdakilerden hangisidir?
Doğru Şık (D): Submandibular bez
Açıklama: Submandibular bez, seröz ağırlıklı miks (seromükoz) salgı yaparak istirahat halindeki toplam tükürük hacminin yaklaşık %70'ini tek başına üretir. Saf seröz salgı yapan parotis bezi amilaz açısından en zengin bez olsa da hacimsel olarak birinci sırada değildir ve bu yüzden en güçlü çeldiricidir. N. fasialis tarafından submandibular ganglion aracılığıyla parasempatik uyarım alırlar.

**Soru 2 (ID: 49a4fe7d-ec36-4ac5-8811-c612b637eb29)**
Soru Kökü: Tükürük bezlerinin sekresyon profili incelendiğinde, günlük toplam tükürük hacminin sadece %5'ini oluşturan ve mukoz ağırlıklı salgı üreterek ağız içi kayganlığı sağlayan bez aşağıdakilerden hangisidir?
Doğru Şık (A): Sublingual bez
Açıklama: Sublingual bez parasempatik uyarımını submandibular ganglion üzerinden alan ve seröz değil, predominant olarak mukoz karakterde salgı yapan majör tükürük bezidir. Parotis tamamen seröz, submandibular ise miks (seromükoz) karakterdedir ve hacmin %70'ini üretir. Mukoz ağırlıklı yapı lokmanın kayganlaştırılmasında kritik role sahiptir.

---

### ÇİFT 14 (Benzerlik: 0.80)

**Soru 1 (ID: 70690216-69c8-430b-97a6-6434f1a60574)**
Soru Kökü: Rotavirüs enfeksiyonu sonrası ince bağırsak fırçamsı kenarında harabiyet gelişen bir çocukta, süt ve süt ürünleri tüketimini takiben şiddetli gaz ve osmotik ishal başlamıştır. Bu klinik tabloda yıkımı eksik kalan disakkariti hidrolize eden lüminal membrandaki enzim aşağıdakilerden hangisidir?
Doğru Şık (E): Laktaz
Açıklama: Laktoz intoleransı, bağırsak epitelinin apikal fırçamsı kenarındaki laktaz enziminin eksikliğine (veya viral enterit sonrası tahribatına) bağlı olarak sütün ana karbonhidratı laktozun sindirilememesi durumudur. Sindirilemeyen laktoz kalın bağırsağa geçer, bakteriyel fermantasyonla gaz oluşturur ve lümende su tutarak osmotik ishale yol açar. Pankreatik amilaz nişastayı parçalarken, disakkaridazların hasarı spesifik emilim bozukluğu yapar.

**Soru 2 (ID: 9b31d239-f5cf-457c-b00e-3f3817df0378)**
Soru Kökü: Üç yaşında erkek çocuk, şiddetli bir rotavirus enfeksiyonu (viral ishal) geçirdikten iki hafta sonra, süt içtiğinde başlayan şiddetli gaz, karın ağrısı ve köpüklü asidik ishal şikayetiyle getiriliyor. Dışkı analizinde emilemeyen karbonhidratlara bağlı yüksek osmolalite saptanıyor. Bu hastadaki sekonder malabsorbsiyona neden olan enzimin fizyolojik lokalizasyonu aşağıdakilerden hangisidir?
Doğru Şık (E): İnce bağırsak enterositlerinin apikal fırçamsı kenarı
Açıklama: Klinik tablo, rotavirus gibi epitelyal hasar yapan enfeksiyonlar sonrası bağırsak villus uçlarının dökülmesine bağlı gelişen geçici (sekonder) laktoz intoleransıdır. Laktaz enzimi, disakkaritleri monosakkaritlere parçalayan diğer enzimler (maltaz, sükraz) gibi pankreastan değil, doğrudan ince bağırsak enterositlerinin apikal fırçamsı (mikrovillus) kenarından sentezlenir. Bu enzimlerin lümende serbest dolaşmayıp membran bağlı olması, viral gastroenteritlerde neden özellikle süt (laktoz) toleransının bozulduğunu açıklar.

---

### ÇİFT 15 (Benzerlik: 0.80)

**Soru 1 (ID: 910a7020-b032-4a5d-a696-027ad9c11935)**
Soru Kökü: Büyük travma veya cerrahi operasyon sonrası torasik lenf kanalı (duktus torasikus) hasarlanarak şilotoraks tablosu gelişen bir hastanın enteral beslenmesinde, emilim aşamasında şilomikron yapısına girmeksizin doğrudan portal venle karaciğere geçen aşağıdaki lipit moleküllerinden hangisinin kullanılması **en uygundur**?
Doğru Şık (D): Kısa ve orta zincirli yağ asitleri
Açıklama: Bağırsakta emilen uzun zincirli yağ asitleri ve kolesterol esterleri enterosit içinde yeniden trigliseride çevrilerek Apo B-48 ile kaplanır ve şilomikron olarak lenfatik yola (duktus torasikus) verilir. Ancak kısa ve orta zincirli yağ asitleri miçel yapısına veya şilomikrona ihtiyaç duymadan doğrudan kana difüze olup portal ven ile karaciğere ulaşırlar. Lenf kaçağı olan şilotoraks hastasında lenfatik yükü artırmamak için beslenmede sadece kısa/orta zincirli yağ asitleri tercih edilir.

**Soru 2 (ID: 930cef17-1b0b-45bb-83ef-c0aefbdef89b)**
Soru Kökü: Torasik travma sonrası duktus torasikusu yırtılan ve plevral boşluğa şilöz sıvı kaçağı (şilotoraks) olan bir hastada, lenfatik sistemi atlayarak doğrudan portal ven yoluyla emilebilen enteral bir beslenme rejimine geçilmesi hedeflenmektedir. Bu amaçla hastanın diyetinde birincil kalori kaynağı olarak hangi formdaki lipitlerin tercih edilmesi en uygundur?
Doğru Şık (A): Kısa ve orta zincirli yağ asitleri
Açıklama: Kısa ve orta zincirli yağ asitleri suda nispeten daha çözünür oldukları için miçel yapısına ve şilomikronlara paketlenmeye ihtiyaç duymadan enterositlerden doğrudan kapiller kana ve portal vene difüze olurlar. Uzun zincirli yağ asitleri ve kolesterol ise mecburen şilomikronlara paketlenerek lenfatik sisteme (duktus torasikus) dökülürler. Şilotoraks vakalarında lenfatik akımı durdurmak için uzun zincirli yağlar kesilip portal yoldan emilen orta zincirli yağlara (MCT) geçilir.

---

### ÇİFT 16 (Benzerlik: 0.80)

**Soru 1 (ID: 4314205f-9dd7-4cc1-a1cf-e1a3bdda7ef9)**
Soru Kökü: Pankreastan sentezlenen sindirim proteazları, lümeni kendi enzimlerinden korumak amacıyla inaktif zimojenler halinde salgılanır. Bu enzim şelalesinde, ince bağırsak fırçamsı kenarında yer alan enterokinaz enzimi tarafından doğrudan ilk aktive edilen molekül aşağıdakilerden hangisidir?
Doğru Şık (E): Tripsinojen
Açıklama: Enterokinaz (enteropeptidaz) fırçamsı kenarda sadece tripsinojeni aktif tripsine çeviren anahtar (trigger) enzimdir. Aktive olan tripsin daha sonra otokatalizle hem daha fazla tripsinojeni hem de kimotripsinojen, proelastaz gibi diğer tüm pankreatik zimojenleri aktive eder. Kimotripsinojen doğrudan enterokinaz ile değil, oluşan tripsin tarafından kesilerek aktifleştiği için en güçlü çeldiricidir.

**Soru 2 (ID: fdcd1438-1c8e-4f31-b159-f14535d7e396)**
Soru Kökü: Pankreatik ekzokrin salgıda bulunan inaktif zimojen enzimlerin aktif formlarına dönüştürülme kaskadı göz önüne alındığında, prokarboksipeptidazı aktif formu olan karboksipeptidaza çeviren katalizör enzim aşağıdakilerden hangisidir?
Doğru Şık (E): Tripsin
Açıklama: Pankreas enzim aktivasyon kaskadının kalbinde tripsin yer alır. Fırçamsı kenardan salınan enterokinaz (enteropeptidaz) sadece tripsinojeni tripsine dönüştürür. Oluşan aktif tripsin ise kendisi dahil; kimotripsinojen, proelastaz ve prokarboksipeptidaz A-B'yi aktif formlarına çeviren evrensel aktivatördür.

---

### ÇİFT 17 (Benzerlik: 0.80)

**Soru 1 (ID: 3a924b4d-bda2-4d89-a7c3-79343d666cf3)**
Soru Kökü: Sistemik otoimmün bir hastalık nedeniyle takip edilen kırk iki yaşındaki kadın hastada, özofagusun yalnızca üst 1/3'lük kısmını oluşturan çizgili kas dokusunda destrüksiyon ve yutma güçlüğü saptanıyor. Alt 2/3'lük düz kas segmenti ise tamamen normal motor aktivite gösteriyor. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Polimiyozit
Açıklama: Polimiyozit, vücuttaki iskelet (çizgili) kaslarını tutan enflamatuar bir miyopatidir ve özofagusun üst 1/3'lük bölümü çizgili kas yapısında olduğu için spesifik olarak bu bölgede disfaji yaratır. Skleroderma (sistemik skleroz) ise düz kasları hedef alarak alt 2/3'lük özofagus tutulumuna neden olur. Anatomik kas yapısı farkı, kliniği belirler.

**Soru 2 (ID: e35ec267-259f-42f7-a97b-cda074109c21)**
Soru Kökü: Kırk beş yaşında kadın hasta, yutma güçlüğü ve parmak uçlarında soğukla tetiklenen morarma (Raynaud fenomeni) şikayetleriyle kliniğe başvuruyor. Manometrik değerlendirmede, özofagusun üst kısımlarında peristaltik kasılmaların normal olduğu, ancak alt 2/3'lük kısmında kasılmaların kaybolduğu ve alt özofagus sfinkter basıncının çok düşük olduğu saptanıyor. Bu hastanın özofagial tutulum bölgesi ve patofizyolojik tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Skleroderma – Alt 2/3 düz kas tutulumu
Açıklama: Özofagusun anatomik olarak üst 1/3'ü çizgili, alt 2/3'ü ise düz kastan oluşur. Skleroderma (sistemik skleroz), gastrointestinal kanalda özellikle düz kasları atrofiye uğratıp yerine fibrotik doku bıraktığından, özofagusun alt 2/3'lük kısmında peristaltizm kaybına ve alt sfinkterin gevşeyerek reflüye neden olmasına yol açar. Polimiyozit çizgili kasları (üst 1/3) tutarken, akalazyada alt sfinkterde hipotoni değil hipertoni (gevşeyememe) vardır.

---

### ÇİFT 18 (Benzerlik: 0.79)

**Soru 1 (ID: 656198c3-6129-4e8d-9f1b-636e4aa757e5)**
Soru Kökü: Midede HCl üretimi sırasında, parietal hücre içinde oluşan bikarbonat (HCO3-) iyonu bazal membrandan kana verilirken, lümene pompalanacak olan klor (Cl-) iyonu hücre içine hangi transport mekanizması ile alınır?
Doğru Şık (E): Bikarbonat iyonu ile karşılıklı difüzyon (antiport)
Açıklama: Parietal hücrenin bazolateral membranında çalışan bir antiport sistemi, hücre içinde karbonik anhidraz ile üretilen HCO3- iyonunu kana verirken karşılığında kan plazmasından Cl- iyonunu hücre içine alır. Hücreye giren bu klor, apikal membrandan pasif difüzyonla lümene geçerek hidrojen (H+) ile birleşir ve HCl oluşturur. Bu mekanizma aynı zamanda tok karnına kanda oluşan 'alkali dalgayı' açıklar.

**Soru 2 (ID: edc572f7-4c8e-4e18-a491-38ba97309945)**
Soru Kökü: Mide paryetal hücrelerinde lümene asit salgılanması sırasında hücre içi pH dengesini korumak amacıyla bazal membrandan intertisyel aralığa klor (Cl-) ile yer değiştirerek atılan iyon aşağıdakilerden hangisidir?
Doğru Şık (A): Bikarbonat (HCO3-)
Açıklama: Paryetal hücrede karbonik anhidraz enzimi aracılığıyla su ve karbondioksitten sentezlenen karbonik asit, hidrojen ve bikarbonata (HCO3-) ayrışır; oluşan HCO3- bazolateral membrandan Cl- ile yer değiştirerek kana karışır ve alkalen tide (alkali dalga) tablosunu oluşturur. Lüminal membrandaki proton pompasından dışarı atılan hidrojen iyonu (H+) asit salgısını yapan ana iyondur ve bazalden kana atılmadığı için en büyük çeldiricidir. Bu antiport sistemi sayesinde hücre içi pH dengesi korunmuş olur.

---

### ÇİFT 19 (Benzerlik: 0.79)

**Soru 1 (ID: 426c572a-0b27-45df-b117-d499f91f9ef5)**
Soru Kökü: Diyabetik hastalarda otonom nöropatiye bağlı olarak mide boşalmasının şiddetli şekilde geciktiği gastroparezi tablosunda, klinikte göç eden miyoelektriksel kompleksleri (GMC) başlatarak peristaltizmi artırmak amacıyla aşağıdaki gastrointestinal hormonlardan hangisinin analoğu kullanılmaktadır?
Doğru Şık (B): Motilin
Açıklama: Motilin, açlık dönemlerinde göç eden miyoelektriksel kompleksleri (GMC) yöneterek bağırsaklardaki süpürücü peristaltik hareketi başlatan temel hormondur. Makrolid antibiyotikler (örn: eritromisin) motilin reseptör agonisti gibi davranarak mide boşalmasını hızlandırır ve diyabetik gastroparezi tedavisinde kullanılırlar. Gastrin yemek sonrası asit sekresyonunu artırsa da açlık fazındaki bu karakteristik göç eden motor aktiviteden sorumlu değildir.

**Soru 2 (ID: b8635302-79b6-444c-9519-c65052a6e017)**
Soru Kökü: Otonom nöropati gelişen uzun süreli bir diyabet hastasında, mide boşalmasının ileri derecede geciktiği (diyabetik gastroparezi) saptanıyor. Gastrointestinal motiliteyi artırmak amacıyla hastaya makrolid grubu bir antibiyotik (eritromisin) off-label olarak reçete ediliyor. Bu ilacın motiliteyi artırıcı prokinetik etkisi hangi endojen hormon reseptörünü agonize etmesinden kaynaklanır?
Doğru Şık (B): Motilin
Açıklama: Enterokromaffin ve M hücrelerinden salgılanan Motilin, açlık dönemlerinde bağırsakları temizleyen 'göç eden miyoelektriksel komplekslerin' (MMC) temel düzenleyicisidir. Makrolid antibiyotikler (eritromisin) motilin reseptörlerine agonist etki göstererek güçlü mide ve bağırsak kasılmaları yaratır; bu etki diyabetik gastroparezi tedavisinde terapötik olarak kullanılırken, normal antibiyotik kullanımı sırasında istenmeyen ishal yan etkisine yol açar. Diğer hormonlar MMC döngüsünü tetiklemez.

---

### ÇİFT 20 (Benzerlik: 0.79)

**Soru 1 (ID: 0da80984-f22b-4c1a-bf60-81d718907248)**
Soru Kökü: Ellerinde cilt kalınlaşması ve Raynaud fenomeni bulunan elli yaşındaki hastanın baryumlu özofagus grafisinde, organın alt 2/3'lük kısmında peristaltizmin tamamen kaybolduğu ve düz kas fibrozisi geliştiği gözleniyor. Bu motor defektin eşlik ettiği klinik durum aşağıdakilerden hangisidir?
Doğru Şık (B): Skleroderma
Açıklama: Skleroderma, düz kas hücrelerinin atrofisi ve bağ dokusu artışı (fibrozis) ile karakterize olup, özofagusun alt 2/3'ünü oluşturan düz kas tabakasını doğrudan felç eder. Akalazyada sorun düz kas fibrozisi değil, alt sfinkterin gevşeyememesidir (NO/VIP eksikliği). Polimiyozit ise çizgili kasları (üst 1/3) etkiler.

**Soru 2 (ID: e35ec267-259f-42f7-a97b-cda074109c21)**
Soru Kökü: Kırk beş yaşında kadın hasta, yutma güçlüğü ve parmak uçlarında soğukla tetiklenen morarma (Raynaud fenomeni) şikayetleriyle kliniğe başvuruyor. Manometrik değerlendirmede, özofagusun üst kısımlarında peristaltik kasılmaların normal olduğu, ancak alt 2/3'lük kısmında kasılmaların kaybolduğu ve alt özofagus sfinkter basıncının çok düşük olduğu saptanıyor. Bu hastanın özofagial tutulum bölgesi ve patofizyolojik tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Skleroderma – Alt 2/3 düz kas tutulumu
Açıklama: Özofagusun anatomik olarak üst 1/3'ü çizgili, alt 2/3'ü ise düz kastan oluşur. Skleroderma (sistemik skleroz), gastrointestinal kanalda özellikle düz kasları atrofiye uğratıp yerine fibrotik doku bıraktığından, özofagusun alt 2/3'lük kısmında peristaltizm kaybına ve alt sfinkterin gevşeyerek reflüye neden olmasına yol açar. Polimiyozit çizgili kasları (üst 1/3) tutarken, akalazyada alt sfinkterde hipotoni değil hipertoni (gevşeyememe) vardır.

---

### ÇİFT 21 (Benzerlik: 0.78)

**Soru 1 (ID: 0412d1bd-fbdd-4614-8be2-83e8cce3e57b)**
Soru Kökü: Pankreas kanalı tıkanıklığı gelişen bir hastada safra sekresyonu aksamış ve akut pankreatit tablosu başlamıştır. Pankreas dokusunda kendi kendini sindirme (otodigesyon) sürecini başlatan ve hücre zarını doğrudan yıkan patolojik madde aşağıdakilerden hangisidir?
Doğru Şık (A): Lizolesitin
Açıklama: Pankreatit patogenezinde, aktifleşen tripsinin fosfolipaz A2 enzimini pankreas kanalları içinde erken aktive etmesiyle membranlardaki lesitin molekülünden lizolesitin oluşur ve bu madde hücre zarı için yıkıcıdır. Serbest yağ asitleri ve monogliseridler normal sindirim ürünü iken, lizolesitin hücresel nekrozu ve çevre yağ dokusu hasarını doğrudan başlatan moleküldür. Bu reaksiyon zinciri akut pankreatitin enzimatik temelini oluşturur.

**Soru 2 (ID: aa29af07-4617-4b40-ad21-2281e38b22c8)**
Soru Kökü: Safra kanalı tıkanıklığına bağlı akut pankreatit tablosunda, pankreas dokusunun kendi kendini sindirmesinde rol oynayan kaskadda tripsin tarafından pankreas kanalında aktive edilen ve lizolesitin üreterek hücre zarlarını doğrudan yıkan enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfolipaz A2
Açıklama: Fosfolipaz A2, pankreastan inaktif salgılanıp lümende tripsin tarafından aktive olan ve safra kaynaklı fosfatidilkolinden (lesitin) lizolesitin üreten enzimdir. Lizolesitin hücre zarlarını eriten güçlü bir deterjan maddedir; akut pankreatitte erken aktive olan fosfolipaz A2, kendi dokusunda lizolesitin oluşturarak masif asiner hücre nekrozuna ve hastalığın fulminan seyrine neden olur. Katepsin B ise asiner hücre içinde tripsinojeni tripsine çeviren başlatıcı lizozomal enzimdir, ancak hücre zarını asıl yıkan ürün lizolesitindir.

---

### ÇİFT 22 (Benzerlik: 0.77)

**Soru 1 (ID: 023b12e4-867c-40e7-9aee-3baceb94f5e5)**
Soru Kökü: 45 yaşında erkek hasta yutma güçlüğü (disfaji) ve gece regürjitasyonu şikayetleriyle başvuruyor. Yapılan manometrik incelemede özofagus gövdesinde primer peristaltizm kaybı ve alt özofageal sfinkterde yutkunmaya bağlı gevşemenin olmadığı tespit ediliyor. Bu hastadaki sfinkter gevşeme kusurunun hücresel mekanizmasında aşağıdaki moleküllerden hangilerinin eksikliği **en olası** durumdur?
Doğru Şık (E): Nitrik oksit (NO) ve VIP
Açıklama: Akalazya tablosunda temel sorun, alt özofageal sfinkterin gevşemesini sağlayan inhibitör nörotransmitterler olan Nitrik Oksit (NO) ve Vazoaktif İntestinal Polipeptid (VIP) üretimindeki eksikliktir. Asetilkolin kasılmayı tetikleyen eksitatör bir nörotransmitter olduğundan, sfinkterin gevşeyememesi durumunda eksikliği değil hücresel etkisinin rakipsiz kalması söz konusudur. VIP ve NO eksikliğinde sfinkter kapalı kalır ve gıda geçişi bloke olur.

**Soru 2 (ID: 6c2ccf58-c222-4ffe-88cb-e09ead94dfd5)**
Soru Kökü: Otuz beş yaşında kadın hasta, katı ve sıvı gıdalara karşı giderek artan yutma güçlüğü şikayetiyle başvuruyor. Baryumlu grafide özofagus alt ucunda "kuş gagası" görünümü, manometride ise alt özofagus sfinkterinde yetersiz gevşeme ve primer peristaltizm kaybı tespit ediliyor. Bu hastalığın patogenezinde rol oynayan inhibitör medyatör eksikliği aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Nitrik oksit (NO) ve VIP
Açıklama: Klinik senaryo klasik bir akalazya tablosunu tanımlamaktadır ve bu hastalıkta miyenterik (Auerbach) pleksustaki inhibitör nöronların harabiyeti söz konusudur. Alt özofagus sfinkterinin (AÖS) yutkunma sırasında gevşemesini sağlayan temel inhibitör nörotransmitterler Nitrik oksit (NO) ve Vazoaktif İntestinal Polipeptid'dir (VIP). En güçlü distraktör olan asetilkolin, AÖS gevşemesini değil tam tersine kasılmasını (eksitatör uyarı) sağlayan temel faktördür ve akalazyada etkisi karşılanamaz hale gelir.

---

### ÇİFT 23 (Benzerlik: 0.77)

**Soru 1 (ID: 70690216-69c8-430b-97a6-6434f1a60574)**
Soru Kökü: Rotavirüs enfeksiyonu sonrası ince bağırsak fırçamsı kenarında harabiyet gelişen bir çocukta, süt ve süt ürünleri tüketimini takiben şiddetli gaz ve osmotik ishal başlamıştır. Bu klinik tabloda yıkımı eksik kalan disakkariti hidrolize eden lüminal membrandaki enzim aşağıdakilerden hangisidir?
Doğru Şık (E): Laktaz
Açıklama: Laktoz intoleransı, bağırsak epitelinin apikal fırçamsı kenarındaki laktaz enziminin eksikliğine (veya viral enterit sonrası tahribatına) bağlı olarak sütün ana karbonhidratı laktozun sindirilememesi durumudur. Sindirilemeyen laktoz kalın bağırsağa geçer, bakteriyel fermantasyonla gaz oluşturur ve lümende su tutarak osmotik ishale yol açar. Pankreatik amilaz nişastayı parçalarken, disakkaridazların hasarı spesifik emilim bozukluğu yapar.

**Soru 2 (ID: eadbf969-90a4-41d3-a66f-0b2f13e7cb8a)**
Soru Kökü: Altı aylık bir bebekte geçirilen rotavirüs enfeksiyonunu takiben sulu, asidik ve gazlı ishal tablosu iki haftadır devam etmektedir. Dışkı incelemesinde yüksek ozmotik açık tespit edilmiştir. Bu hastada uzamış osmotik diyareye yol açan patofizyolojik durum ve eksikliği en olası enzim aşağıdakilerden hangisidir?
Doğru Şık (B): Fırçamsı kenar harabiyeti - Laktaz
Açıklama: Rotavirüs gibi intestinal enfeksiyonlar bağırsak villus epitelini (fırçamsı kenar) harap edebilir. Fırçamsı kenar enzimlerinden sentezlenmesi en nazik ve ilk etkilenen laktazdır. Anne sütündeki laktoz sindirilemez, lümende kalan laktoz su çekerek ozmotik diyareye ve kolonik fermantasyonla asidik gaita/gaz üretimine neden olur (geçici laktoz intoleransı). Sorun pankreas kaynaklı değildir.

---

### ÇİFT 24 (Benzerlik: 0.77)

**Soru 1 (ID: 6d40086e-b0ab-49ca-801f-4a0d77ae78ee)**
Soru Kökü: Kronik alkol bağımlılığı öyküsü olan 55 yaşındaki siroz hastasının karaciğer biyopsisinde Disse aralığında yoğun elastin ve Tip-I kollajen birikimi izlenmiştir. Bu hastada patolojik doku yeniden yapılanmasından (fibrozis) sorumlu miyofibroblastlara dönüşen hücrelerin orijinal görevi aşağıdakilerden hangisidir?
Doğru Şık (A): Retinoik asit depolamak
Açıklama: Karaciğer sirozunda fibrozise neden olan miyofibroblastların kökeni, Disse aralığında normalde A vitamini (retinoik asit) depolayan İto hücreleridir. İnflamasyon sürecinde Kupffer hücreleri (fagositik hücreler) İto hücrelerini aktive eder, ancak elastin ve kollajen matriksini üreten hücreler İto hücrelerinin dönüşmüş formlarıdır. Bu fibrotik süreç sinüzoidal kan akımını bozarak portal hipertansiyona yol açar.

**Soru 2 (ID: c752f99a-f592-48e3-a17b-683b89bc237d)**
Soru Kökü: Uzun süreli alkol kullanımına bağlı ilerleyici karaciğer hasarı gelişen bir hastanın histolojik incelemesinde Disse aralığında patolojik madde birikimi görülmüştür. Karaciğer sirozuna gidiş sürecinde Disse aralığındaki İto (yağ depo) hücrelerinin miyofibroblastlara dönüşmesiyle sentezledikleri fibrotik protein aşağıdakilerden hangisidir?
Doğru Şık (C): Elastin
Açıklama: Normal karaciğer fizyolojisinde Disse aralığında az miktarda Tip-III kollajen (retikülin) bulunur; ancak siroz gibi patolojik durumlarda vitamin A depolayan İto hücreleri aktifleşerek miyofibroblast formuna dönüşür ve ortamda olmaması gereken elastin proteinini sentezleyerek fibrozis yaratırlar. Retikülin normal anatomik destekte yer aldığı için en tehlikeli çeldiricidir; ancak elastinin varlığı karaciğerde geri dönüşümsüz skar dokusunun (siroz) direkt bulgusudur.

---

### ÇİFT 25 (Benzerlik: 0.77)

**Soru 1 (ID: 61be605b-2980-4a3c-beb6-2a5a9d17be55)**
Soru Kökü: Tükürük sekresyonunun otonom sinir sistemi tarafından düzenlenmesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sempatik aktivasyon tükürük üretimini tamamen durdurur.
Açıklama: Tükürük bezlerinde hem parasempatik hem de sempatik sistem sekresyonu artırıcı yönde (sindirim sisteminin geri kalanındaki klasik zıtlığın aksine) çalışır. Parasempatik bol ve sulu tükürük üretirken; sempatik uyarı daha az miktarda ancak yoğun/kıvamlı bir tükürük salgılanmasına neden olur. Yani sempatik sistem salgıyı durdurmaz, sadece miktarını azaltıp niteliğini değiştirir.

**Soru 2 (ID: 7afc672d-292e-4bd1-8ee3-03c7a25b9b52)**
Soru Kökü: Tükürük salgısının otonomik sinir sistemi tarafından düzenlenmesiyle ilgili hücresel mekanizmalardan hangisi doğrudur?
Doğru Şık (E): Parasempatik uyarı muskarinik reseptörler üzerinden IP3/Ca+2 yolunu kullanırken, sempatik uyarı beta reseptörler üzerinden cAMP artışı sağlar.
Açıklama: Tükürük sekresyonunda parasempatik sistem asetilkolin aracılığıyla M reseptörlerine bağlanır ve hücre içi IP3/Ca+2 yolağını aktive ederek bol hacimli salgı üretir. Sempatik sistem ise noradrenalin aracılığıyla beta reseptörlerine tutunur ve cAMP artışı üzerinden daha yoğun, mukuslu bir tükürük salgılatır. Gastrointestinal sistemin diğer bölgelerinden farklı olarak, tükürük bezlerinde hem sempatik hem de parasempatik sistemin salgıyı artırıcı (sinerjistik) etki göstermesi en önemli sınav korelasyonudur.

---

### ÇİFT 26 (Benzerlik: 0.77)

**Soru 1 (ID: 7d3cfb14-74ed-4afe-aa81-445c81f6539f)**
Soru Kökü: Kronik ishal (steatore) ve lipid emilim bozukluğu nedeniyle tetkik edilen bir bebekte, genetik inceleme sonucu Apolipoprotein B-48 yokluğu tespit edilmiş ve Abetalipoproteinemi tanısı konmuştur. Bu sendromda, eritrosit membranında kolesterol eksikliğine bağlı olarak gelişen ve çevre kan yaymasında izlenen patolojik eritrosit morfolojisi aşağıdakilerden hangisidir?
Doğru Şık (A): Akantosit
Açıklama: Abetalipoproteinemi hastalığında Apo B-48 eksik olduğu için enterositlerde oluşan şilomikronlar lenfatik sisteme atılamaz, bu da kolesterol ve yağda çözünen vitaminlerin emilimini bloke eder. Membran lipid kompozisyonu bozulan eritrositler 'akantosit' (dikensi/tırtıklı hücre) şeklini alır. Şizosit veya sferosit travmatik yıkım veya spektrin defektleri sonucu oluşurken, akantosit direkt membran kolesterol/lipid dengesizliğinin karakteristik bir bulgusudur.

**Soru 2 (ID: f50a8672-678b-43c7-b778-639df6da3c00)**
Soru Kökü: Beş yaşında erkek çocuk; yağlı ishal (steatore), gece körlüğü şikayetleri ve periferik kan yaymasında 'akantosit' adı verilen tırtıklı kenarlı eritrositlerin saptanması üzerine pediatrik gastroenterolojiye yönlendiriliyor. Yapılan genetik incelemede hastanın ince bağırsak enterositlerinde üretilen spesifik bir apolipoproteinin yokluğu saptanıyor. Bu hastada şilomikronların enterositlerden lenfatik sisteme ekzositozunu engelleyen eksik protein aşağıdakilerden hangisidir?
Doğru Şık (B): Apolipoprotein B-48
Açıklama: Abetalipoproteinemi hastalığında ince bağırsak enterositlerinde şilomikronların yapıtaşı olan Apolipoprotein B-48 sentezlenemez. Bunun sonucunda enterosite alınan lipitler şilomikron formunda lenfatik sisteme verilemediği için hücrede birikir, steatore ve ADEK vitamini eksikliği görülür. Ayrıca membranlardaki kolesterol yapısı bozulduğundan eritrositler akantosit (dikensi) görünümü alırlar; bu klinik triadı (steatore, vitamin eksikliği, akantosit) sadece Apo B-48 yokluğu açıklar.

---

### ÇİFT 27 (Benzerlik: 0.76)

**Soru 1 (ID: 8145d5a7-99cd-45cf-b385-823c35a3034f)**
Soru Kökü: Kronik NSAİİ (nonsteroid antiinflamatuar) kullanımına bağlı gelişen mide ülserlerinin önlenmesinde, inhibitör Gi proteini üzerinden cAMP'yi baskılayarak asit salgısını azaltan ve mukozayı koruyan Prostaglandin E1 (PGE1) analoğu ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Mizoprostol
Açıklama: Mizoprostol, parietal hücredeki inhibitör Gi yolağını aktive ederek asit sekresyonunu baskılayan ve müköz salgıyı artıran sentetik bir PGE1 analoğudur. Omeprazol proton pompasını, Simetidin H2 reseptörlerini, Atropin ise muskarinik reseptörleri bloke eder. Sadece PGE1 analogları NSAİİ'lerin prostaglandin sentezini baskılayıcı yan etkisini doğrudan yerine koyma (replasman) stratejisiyle çözer.

**Soru 2 (ID: dc00083e-6737-4ce1-8020-d43001195213)**
Soru Kökü: Nonsteroid anti-inflamatuar ilaç (NSAİİ) kullanımına bağlı gastrik ülseri olan bir hastaya koruyucu olarak PGE1 analoğu olan mizoprostol reçete edilmiştir. Bu ilacın paryetal hücre üzerindeki H+ sekresyonunu baskılayıcı moleküler mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): İnhibitör Gi proteini yoluyla hücre içi cAMP düzeyini baskılaması
Açıklama: Prostaglandinler (PGE1) ve somatostatin, paryetal hücre bazal membranında inhibitör Gi (G-inhibitör) proteinine bağlı reseptörleri uyararak adenilat siklaz aktivitesini baskılar ve böylece cAMP aracılı asit salgısını inhibe eder. Güçlü bir çeldirici olan H2 reseptör blokajı (simetidin) veya proton pompa inhibisyonu (omeprazol) farklı farmakolojik hedeflerdir ve mizoprostolün direkt etki mekanizmasını açıklamaz. Bu entegrasyon, NSAİİ'lerin prostaglandin sentezini baskılayarak mide mukozasındaki koruyucu cAMP inhibisyonunu nasıl ortadan kaldırdığını açıklar.

---

### ÇİFT 28 (Benzerlik: 0.76)

**Soru 1 (ID: 0da80984-f22b-4c1a-bf60-81d718907248)**
Soru Kökü: Ellerinde cilt kalınlaşması ve Raynaud fenomeni bulunan elli yaşındaki hastanın baryumlu özofagus grafisinde, organın alt 2/3'lük kısmında peristaltizmin tamamen kaybolduğu ve düz kas fibrozisi geliştiği gözleniyor. Bu motor defektin eşlik ettiği klinik durum aşağıdakilerden hangisidir?
Doğru Şık (B): Skleroderma
Açıklama: Skleroderma, düz kas hücrelerinin atrofisi ve bağ dokusu artışı (fibrozis) ile karakterize olup, özofagusun alt 2/3'ünü oluşturan düz kas tabakasını doğrudan felç eder. Akalazyada sorun düz kas fibrozisi değil, alt sfinkterin gevşeyememesidir (NO/VIP eksikliği). Polimiyozit ise çizgili kasları (üst 1/3) etkiler.

**Soru 2 (ID: 3a924b4d-bda2-4d89-a7c3-79343d666cf3)**
Soru Kökü: Sistemik otoimmün bir hastalık nedeniyle takip edilen kırk iki yaşındaki kadın hastada, özofagusun yalnızca üst 1/3'lük kısmını oluşturan çizgili kas dokusunda destrüksiyon ve yutma güçlüğü saptanıyor. Alt 2/3'lük düz kas segmenti ise tamamen normal motor aktivite gösteriyor. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Polimiyozit
Açıklama: Polimiyozit, vücuttaki iskelet (çizgili) kaslarını tutan enflamatuar bir miyopatidir ve özofagusun üst 1/3'lük bölümü çizgili kas yapısında olduğu için spesifik olarak bu bölgede disfaji yaratır. Skleroderma (sistemik skleroz) ise düz kasları hedef alarak alt 2/3'lük özofagus tutulumuna neden olur. Anatomik kas yapısı farkı, kliniği belirler.

---

### ÇİFT 29 (Benzerlik: 0.76)

**Soru 1 (ID: 66a41f36-c6ac-4356-8221-cd21b605486d)**
Soru Kökü: Evrimsel süreçte insanda büyük oranda körelmiş olan, ancak kemirgenlerde dilin yan yüzeylerinde bol miktarda bulunarak tat cisimciği içeriğiyle aktif görev yapan papilla tipi aşağıdakilerden hangisidir?
Doğru Şık (D): Foliat papilla
Açıklama: Foliat papillalar dilin lateral yüzeylerinde konumlanır ve insan fizyolojisinde körelmiş (vestigial) kabul edilen tat yapılarıdır. Fungiform papillalar dilin önünde kırmızı noktalar şeklinde, sirkumvallat papillalar ise sulkus terminalis çevresinde yerleşim gösterir. İnsan dışı memelilerde bu papillalar tat alımında kritik mekanizmalara sahiptir.

**Soru 2 (ID: 8a497fb8-b2e5-49b2-a8cf-c54adcfd462a)**
Soru Kökü: Dilde bulunan papillaların histolojik incelemesinde sayısının en fazla olduğu görülmesine rağmen mikroskobik olarak tat tomurcuğu içermediği saptanan yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Filiform papilla
Açıklama: Filiform papillalar dilin ön 2/3'lük kısmında sayıca en fazla bulunan papillalar olmalarına rağmen tat tomurcuğu içermezler ve sadece dokunma duyusunu iletirler. Sirkumvallat ve fungiform papillalar tat cisimciklerinden zengin yapılarken, filiformlar mekanik fonksiyon görür. Bu yapısal ayrım tat duyusunun bölgesel yoğunluğunu da doğrudan belirler.

---

### ÇİFT 30 (Benzerlik: 0.76)

**Soru 1 (ID: c752f99a-f592-48e3-a17b-683b89bc237d)**
Soru Kökü: Uzun süreli alkol kullanımına bağlı ilerleyici karaciğer hasarı gelişen bir hastanın histolojik incelemesinde Disse aralığında patolojik madde birikimi görülmüştür. Karaciğer sirozuna gidiş sürecinde Disse aralığındaki İto (yağ depo) hücrelerinin miyofibroblastlara dönüşmesiyle sentezledikleri fibrotik protein aşağıdakilerden hangisidir?
Doğru Şık (C): Elastin
Açıklama: Normal karaciğer fizyolojisinde Disse aralığında az miktarda Tip-III kollajen (retikülin) bulunur; ancak siroz gibi patolojik durumlarda vitamin A depolayan İto hücreleri aktifleşerek miyofibroblast formuna dönüşür ve ortamda olmaması gereken elastin proteinini sentezleyerek fibrozis yaratırlar. Retikülin normal anatomik destekte yer aldığı için en tehlikeli çeldiricidir; ancak elastinin varlığı karaciğerde geri dönüşümsüz skar dokusunun (siroz) direkt bulgusudur.

**Soru 2 (ID: f1edebef-3d4a-41e4-aad5-c125cde08f90)**
Soru Kökü: Elli beş yaşında, yirmi yıldır yüksek miktarda alkol tüketim öyküsü olan erkek hasta karın şişliği şikayetiyle başvuruyor. Karaciğer iğne biyopsisinde perisinüzoidal mesafede (Disse aralığı) normalde bulunmaması gereken yoğun elastin birikimi ve Tip-1 kolajen artışına bağlı fibrozis izleniyor. Karaciğer sirozuna giden bu patolojik süreçte miyofibroblastlara dönüşerek elastin sentezinden sorumlu hale gelen hücre aşağıdakilerden hangisidir?
Doğru Şık (D): İto (yağ depo) hücreleri
Açıklama: İto (yağ depo / stellat) hücreleri, Disse aralığında yer alan ve normal fizyolojide A vitamini (retinoik asit) depolamakla görevli olan hücrelerdir. Alkol toksisitesi gibi kronik karaciğer hasarında bu hücreler aktive olup miyofibroblastlara dönüşür ve elastin ile Tip-1 kolajen sentezleyerek karaciğer sirozunun (fibrozis) temel histolojik lezyonunu oluştururlar. Kupffer hücreleri ise makrofaj türevli fagositik hücrelerdir ve fibrogenezden direkt olarak sorumlu değildir.

---

### ÇİFT 31 (Benzerlik: 0.75)

**Soru 1 (ID: 1461d01b-d51f-4ea0-819f-f43a440b6a2b)**
Soru Kökü: Aşırı meyve suyu tüketimi sonrası ishal ve şişkinlik şikayetiyle başvuran çocukta, fruktoz emilim defekti olduğu saptanmıştır. Sağlıklı bir bireyde fruktozun lümen içinden enterosit içerisine alınmasını kolaylaştırılmış difüzyon ile sağlayan taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (D): GLUT-5
Açıklama: Fruktoz molekülü lümenden enterosit içine sadece GLUT-5 reseptörü üzerinden kolaylaştırılmış difüzyon mekanizmasıyla alınır. Glikoz ve galaktoz ise SGLT-1 sekonder aktif taşıma proteini ile sodyuma bağımlı olarak emilir ki bu en yaygın karıştırılan mekanizmadır. Emilen tüm bu monosakkaritler enterositin bazolateral yüzünden kana geçerken ortak olarak GLUT-2 taşıyıcısını kullanırlar.

**Soru 2 (ID: d132234b-5446-4782-ab59-bb183d255127)**
Soru Kökü: İnce bağırsak lümenindeki karbonhidratların sindirimi tamamlandıktan sonra ortaya çıkan monosakkaritlerin apikal membrandan enterosit içine alınmasıyla ilgili taşıyıcı mekanizmalardan hangisi doğrudur?
Doğru Şık (A): Fruktoz lümenden enterosite GLUT-5 taşıyıcısıyla kolaylaştırılmış difüzyonla geçer.
Açıklama: Karbonhidrat emiliminde glikoz ve galaktoz luminal membrandan hücre içine Sodyum-Glikoz Transport Proteini-1 (SGLT-1) aracılığıyla sekonder aktif simport ile alınırken, fruktoz tamamen sodyumdan bağımsız olarak GLUT-5 taşıyıcısıyla kolaylaştırılmış difüzyonla enterosite girer. Monosakkaritlerin tamamı enterositin bazolateral zarından kana geçerken GLUT-2 kolaylaştırılmış difüzyon mekanizmasını kullanır. İnce bağırsaktaki bu reseptör spesifitesi absorpsiyon defektlerinin ayırıcı tanısında kilit rol oynar.

---

