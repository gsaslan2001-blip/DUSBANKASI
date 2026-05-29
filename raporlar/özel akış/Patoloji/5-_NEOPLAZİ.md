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

### ÇİFT 1 (Benzerlik: 0.83)

**Soru 1 (ID: 4071b2ad-4837-4675-a3c4-6c7b113b2ba1)**
Soru Kökü: Neoplazilerin isimlendirilmesinde genellikle '-oma' eki benign tümörleri ifade eder. Aşağıdakilerden hangisi bu kuralın dışında kalarak malign karakter **göstermez**?
Doğru Şık (B): Osteom
Açıklama: Osteom, kemik dokusundan kaynaklanan benign bir neoplazidir ve adlandırma kuralına tam uyar. Melanom, seminom, mezotelyoma ve kordoma ise sonu '-oma' ile bitmesine rağmen malign potansiyele sahip olan istisnai tümörlerdir. Bu istisnaların bilinmesi klinik terminolojide yanlış benign yorumlanmasını engeller.

**Soru 2 (ID: 64f2d614-95b6-4fa3-b7e1-0439ae0e834e)**
Soru Kökü: Aşağıdaki '-oma' son eki alan neoplazilerden hangisi klinik ve biyolojik davranış olarak benign (iyi huylu) karakterde **değildir**?
Doğru Şık (D): Hemanjiyoperisitoma
Açıklama: Genel kural olarak '-oma' eki alan tümörler benign karakterlidir, ancak hemanjiyoperisitoma, lenfoma, mezotelyoma ve melanom gibi tümörler bu kuralın istisnası olup malign karakterdedir. Osteom, kondrom, leyomyom ve papillom isimlendirme kuralına uyan klasik benign neoplazilerdir. Nomenklatürdeki bu istisnai kelimeler biyolojik davranış tahmini için kritik öneme sahiptir.

---

### ÇİFT 2 (Benzerlik: 0.78)

**Soru 1 (ID: 61a15ed6-71e9-4b5e-bc3f-b9e6eda22809)**
Soru Kökü: Altmış yaşında erkek hasta, ani başlayan hafıza kaybı, şiddetli konfüzyon ve kişilik değişiklikleri ile acil servise getiriliyor. Nörolojik taramada limbik ensefalit saptanan hastanın batın ve toraks taramasında küçük hücreli akciğer karsinomu teşhis ediliyor.
Paraneoplastik sendrom kliniğindeki bu hastanın beyin dokusuna çapraz reaksiyon gösteren antikor aşağıdakilerden hangisi olabilir?
Doğru Şık (D): ANNA-1 (Anti-Hu)
Açıklama: Küçük hücreli akciğer karsinomu ve over teratomuna eşlik eden paraneoplastik limbik ensefalit tablosunda, ANNA-1 (anti-Hu) ile NDMA ve voltaj bağımlı potasyum kanallarına (VGKC) karşı antikorlar saptanır. PCA-1 (anti-Yo) subakut serebellar dejenerasyonda, VGCC antikorları Lambert-Eaton sendromunda görülür. Tümörün ektopik olarak sergilediği nöronal antijenlerin immün yanıt uyandırması yıkıcı santral sinir sistemi bulgularını tetikler.

**Soru 2 (ID: f5a551d2-09c3-429a-97f1-08ac3a291903)**
Soru Kökü: Elli beş yaşında kadın hasta, giderek artan dengesizlik, nistagmus ve yürüme güçlüğü şikayetleriyle başvuruyor. Kapsamlı taramalar sonucunda meme karsinomu tanısı alan hastanın, BOS veya nörolojik görüntülemelerinde metastaz bulgusu saptanmıyor.
Serebellar bölgedeki Purkinje hücre hasarıyla karakterize olan bu paraneoplastik subakut serebellar dejenerasyon tablosunda saptanan spesifik antikor aşağıdakilerden hangisidir?
Doğru Şık (A): PCA-1 antikoru (Anti-Yo)
Açıklama: Meme, over ve uterus karsinomlarına sıklıkla eşlik eden subakut serebellar dejenerasyonda, ektopik tümör antijenlerine karşı gelişen PCA-1 (anti-Yo) otoantikorları, kan-beyin bariyerini geçerek doğrudan serebellumdaki Purkinje hücrelerine saldırır. Anti-Hu antikorları limbik ensefalitte, TIF-1 gama ise dermatomyozitte hedeftir. Paraneoplastik kökenli bu doku yıkımı, tümör tedavi edilse dahi nörolojik sekeller bırakır.

---

### ÇİFT 3 (Benzerlik: 0.78)

**Soru 1 (ID: 4d1c873d-9371-4ac8-9669-ee23b07b2212)**
Soru Kökü: İntraselüler sinyal iletiminde kritik rol oynayan RAS proto-onkogeninin aktifleşme mekanizması aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (C): Büyüme faktörü uyarısıyla GDP'nin GTP ile yer değiştirmesi
Açıklama: RAS proteini, GDP'ye bağlıyken inaktif durumdadır. Bir büyüme faktörü sinyali geldiğinde, aktifleşmek için GDP'yi bırakarak yerine GTP'yi bağlar. Bu aktivasyon geçicidir, çünkü RAS'ın kendi intrinsik GTPaz aktivitesi hızla GTP'yi hidrolize ederek tekrar GDP oluşturur ve sistemi kapatır. Tümörlerde RAS nokta mutasyonu geliştiğinde, bu GTP hidrolizi bloke olur ve sinyal sürekli açık kalır.

**Soru 2 (ID: bcc95691-2055-4a49-b6a4-433600682550)**
Soru Kökü: Tümörlerde mutasyonuna en sık rastlanan proto-onkogen olan RAS proteininin aktivasyon ve inaktivasyon döngüsü ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Aktive RAS proteini onkojenik uyarılma yokken bile hücre içinde uzun ömürlü ve kalıcı bir yapıdadır.
Açıklama: Fizyolojik şartlarda aktive olan RAS proteininin GTP'ye bağlı aktif formu oldukça kısa ömürlüdür; intrinsik GTPaz aktivitesi onu hızla hidrolize ederek inaktif GDP formuna döndürür. RAS'ın kanserleşmesi, hidroliz bölgesindeki aminoasit nokta mutasyonlarıyla bu kısa ömürlü fizyolojik mekanizmanın bozulup, proteinin sürekli aktif (uzun ömürlü) hale kilitlenmesiyle gerçekleşir. Sağlıklı hücrede uzun ömürlü aktif RAS bulunmaz.

---

### ÇİFT 4 (Benzerlik: 0.76)

**Soru 1 (ID: 8c0f0ef4-d69a-412e-adb7-2af070760f86)**
Soru Kökü: Patolojide kaynağı bilinmeyen metastatik anaplastik tümörlerin hücresel orijinini belirlemek için ara filamanlara yönelik immünhistokimyasal boyamalardan faydalanılır.
İğsi hücreli, kötü diferansiye bir sarkom vakasında primerin endotel veya fibroblast kaynaklı bir doku olduğunu doğrulamak için aşağıdaki belirteçlerden hangisinin kuvvetli pozitif boyanması beklenir?
Doğru Şık (B): Vimentin
Açıklama: Vimentin, fibroblastlar ve endotel hücreleri gibi tüm mezenkimal kökenli hücrelerin karakteristik ara filamanıdır ve mezenkimal doku tümörleri olan sarkomların identifikasyonunda temel belirteçtir. Sitokeratin epitelyal tümörlerde (karsinom), desmin çizgili/düz kas hücrelerinde, S-100 melanomda kullanılır. Ara filamanların onkogenez boyunca hücresel hafızayı koruması tanısal histogenez tayininin temelidir.

**Soru 2 (ID: 8e9c5002-406a-4ab3-9979-e8bcb8883747)**
Soru Kökü: Epitelyal doku kökenli bir karsinomu, mezenkimal doku kökenli bir sarkomdan ayırmak için immünohistokimyasal olarak kullanılması gereken en uygun ara filaman belirteçleri aşağıdakilerin hangisinde sırasıyla verilmiştir?
Doğru Şık (C): Sitokeratin - Vimentin
Açıklama: Tümörlerin köken aldığı dokuyu belirlemede ara filamanlar kritik rol oynar; karsinomlar epitelyal kökenli oldukları için sitokeratin eksprese ederken, mezenkimal kökenli fibroblast ve endotel hücrelerinden gelişen sarkomlar vimentin eksprese eder. En güçlü distraktör olan vimentin-desmin eşleşmesi yanlıştır çünkü desmin mezenkimal değil, spesifik olarak kas hücresi kökenli tümörlerin belirtecidir. Karsinom ve sarkom ayrımında sitokeratin-vimentin paneli altın standarttır.

---

### ÇİFT 5 (Benzerlik: 0.75)

**Soru 1 (ID: bb78b314-9625-4cc4-a160-80f3dd729cf6)**
Soru Kökü: Otuz iki yaşındaki erkek hasta, polistemi vera tanısı ile takip edilmektedir. Kemik iliğinde hematopoetik kök hücre proliferasyonuna neden olan sitoplazmik non-reseptör tirozin kinaz mutasyonu saptanmıştır. Bu myeloproliferatif hastalığın patogenezinden sorumlu onkogen aşağıdakilerden hangisidir?
Doğru Şık (B): JAK2
Açıklama: JAK/STAT sinyal iletim yolağının sitoplazmik non-reseptör tirozin kinaz enzimi olan JAK2'deki mutasyonlar, Polistemi Vera başta olmak üzere myeloproliferatif hastalıkların temel nedenidir. BRAF mutasyonları melanom ve kolon tümörlerinde, ABL translokasyonu ise Kronik Myeloid Lösemi (KML) kliniğinde izlenir. JAK2, hücre büyüme faktörlerinden bağımsız olarak kemik iliği hücrelerine sürekli bölünme sinyali gönderir.

**Soru 2 (ID: f6f4190d-f8f8-434f-8927-2fc9cf7ae3bb)**
Soru Kökü: 40 yaşındaki erkek hasta, halsizlik ve splenomegali şikayetleri ile başvuruyor. Yapılan tetkiklerde Kronik Myeloid Lösemi (KML) teşhisi konuyor. Bu miyeloproliferatif neoplazinin hücresel düzeyde ortaya çıkmasından sorumlu olan non-reseptör tirozin kinaz kökenli genetik anomali mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): ABL translokasyonu
Açıklama: Kronik Myeloid Lösemi (KML), 9. ve 22. kromozomlar arasındaki t(9;22) translokasyonu sonucu Philadelphia kromozomunun oluşması ve bunun ABL non-reseptör tirozin kinaz genini sürekli aktif bir kimerik BCR-ABL genine dönüştürmesi (translokasyon mekanizması) ile gelişir. ABL nokta mutasyonu akut lenfoblastik lösemide, JAK2 translokasyonu/mutasyonu ise KML dışı miyeloproliferatif hastalıklarda (örn. Polistemia Vera) daha belirgindir.

---

### ÇİFT 6 (Benzerlik: 0.75)

**Soru 1 (ID: 2860fa2a-437f-4dcb-97ea-9f866b2adf3e)**
Soru Kökü: HTLV-1 (İnsan T-hücreli Lösemi Virüsü tip 1), CD4+ T hücrelerinde enfeksiyon oluşturan ve nadiren yıllar sonra malignite geliştiren onkojenik bir RNA virüsüdür.
HTLV-1 transformasyonunda kritik rol oynayan, sitokin ekspresyonunu aktive eden klasik virüs kodlu protein ile virüsün tanımlanmış yeni spesifik onkojenik proteini aşağıdakilerin hangisinde sırasıyla verilmiştir?
Doğru Şık (C): TAX - HBZ
Açıklama: HTLV-1 virüsünün pX bölgesinde kodlanan TAX proteini sitokinleri ve siklinleri uyarırken p53 gibi süpresörleri baskılayarak hücrede temel onkojenik stresi yaratır; virüsün yeni keşfedilen onkojenik silahının adı ise HBZ'dir. TAT HHV-8'e, LMP-1 EBV'ye, Kor proteini HCV'ye aittir. HTLV-1'in moleküler onkogenezi büyük oranda TAX ve HBZ proteinlerinin transkripsiyonel regülasyonlarına dayanır.

**Soru 2 (ID: 756ab98d-91ff-4519-8ae4-1839b7a36e8f)**
Soru Kökü: RNA virüsü olmasına rağmen CD4+ T hücrelerini enfekte ederek yaklaşık 20-50 yıllık bir latent periyodun ardından spesifik T hücreli lösemi/lenfoma tablosuna yol açan ve patogenezinde TAX ve HBZ proteinlerini kullanan onkojenik etken aşağıdakilerden hangisidir?
Doğru Şık (B): Human T-cell Lymphotropic Virüs Tip 1 (HTLV-1)
Açıklama: HTLV-1, CD4+ T hücrelerini hedef alan ve uzun yıllar (20-50 yıl) sonra erişkin T hücreli lösemi/lenfomaya yol açan onkojenik bir RNA virüsüdür; TAX proteini üzerinden sitokin ekspresyonunu artırıp p53'ü baskılar ve yeni tanımlanan HBZ onkogenini kullanır. HHV-8 TAT proteini ile Kaposi sarkomu yaparken, HCV Karaciğer Kor proteini üzerinden HCC'ye neden olur, lenfoma değil. EBV RNA değil, DNA virüsüdür.

---

### ÇİFT 7 (Benzerlik: 0.75)

**Soru 1 (ID: 31a5be51-2834-4135-abb1-8cc43c8ea1d4)**
Soru Kökü: Tümör dokusunun 1-2 mm çapı aştıktan sonra büyümeye devam edebilmesi için anjiyogenik dengeyi kendi lehine çevirmesi gerekir. Aşağıdakilerden hangisi ECM yıkımı sonucunda salınan ve anjiyogenezi durduran endojen inhibitörlerden biri **değildir**?
Doğru Şık (C): Vasküler Endotelyal Büyüme Faktörü (VEGF)
Açıklama: Vasküler Endotelyal Büyüme Faktörü (VEGF), anjiyogenezi durduran değil, başlatan ve stimüle eden en güçlü aktivatördür. Plazminojen yıkımından anjiyostatin, kollajen yıkımından endostatin, transtiretin yıkımından vaskülostatin ve p53 uyarısıyla sentezlenen Trombospondin-1 anjiyogenezin endojen inhibitörleri olarak dengeyi kurar. Tümör bu dengeyi VEGF lehine bozarak kanlanır.

**Soru 2 (ID: d8cb156e-f8ec-48a7-b901-729df1c3ccf4)**
Soru Kökü: Tümör anjiyogenezini baskılayan endojen moleküllerden biri olan vaskülostatin, aşağıdaki ekstraselüler matriks veya plazma proteinlerinden hangisinin yıkım ürünü olarak açığa çıkar?
Doğru Şık (C): Transtiretin
Açıklama: Vaskülostatin, proteazların transtiretini yıkması sonucu ortaya çıkan endojen bir anjiyogenez inhibitörüdür. En güçlü çeldiriciler olan plazminojen yıkımı anjiyostatin, tip IV kollajen yıkımı ise endostatin üretimine yol açar. Bu biyokimyasal mekanizma tümörün kendi kanlanmasını sınırlayabilen önemli bir endojen savunma hattıdır.

---

### ÇİFT 8 (Benzerlik: 0.74)

**Soru 1 (ID: 72c60904-f124-4451-98dc-a07aa1f30349)**
Soru Kökü: Onkogenlerin aktivasyon şekilleri farklılık gösterebilir. Kronik myeloid lösemi (KML) patogenezinde rol oynayan ABL non-reseptör tirozin kinaz geninin temel aktivasyon mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Translokasyon
Açıklama: ABL proto-onkogeni, 9. kromozomdan 22. kromozoma transloke olarak (t(9;22), Philadelphia kromozomu) BCR geni ile füzyon oluşturur ve bu translokasyon sürekli aktif bir tirozin kinaz sentezi ile Kronik Myeloid Lösemiye neden olur. Nokta mutasyonu tipik olarak RAS ve BRAF'ta görülürken, amplifikasyon ERBB2 (HER2) ve NMYC için karakteristiktir. Aktivasyon mekanizmasının bilinmesi hedefe yönelik tirozin kinaz inhibitör tedavilerinin temelini oluşturur.

**Soru 2 (ID: f6f4190d-f8f8-434f-8927-2fc9cf7ae3bb)**
Soru Kökü: 40 yaşındaki erkek hasta, halsizlik ve splenomegali şikayetleri ile başvuruyor. Yapılan tetkiklerde Kronik Myeloid Lösemi (KML) teşhisi konuyor. Bu miyeloproliferatif neoplazinin hücresel düzeyde ortaya çıkmasından sorumlu olan non-reseptör tirozin kinaz kökenli genetik anomali mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): ABL translokasyonu
Açıklama: Kronik Myeloid Lösemi (KML), 9. ve 22. kromozomlar arasındaki t(9;22) translokasyonu sonucu Philadelphia kromozomunun oluşması ve bunun ABL non-reseptör tirozin kinaz genini sürekli aktif bir kimerik BCR-ABL genine dönüştürmesi (translokasyon mekanizması) ile gelişir. ABL nokta mutasyonu akut lenfoblastik lösemide, JAK2 translokasyonu/mutasyonu ise KML dışı miyeloproliferatif hastalıklarda (örn. Polistemia Vera) daha belirgindir.

---

### ÇİFT 9 (Benzerlik: 0.74)

**Soru 1 (ID: 440fdd71-39a9-4d99-93b8-9ea758886b5b)**
Soru Kökü: Kanserlerin lokal büyüme ve komşu dokulara ilerleme özellikleriyle ilgili aşağıda verilen patolojik bulgulardan hangisi **yanlıştır**?
Doğru Şık (C): Tüm kanserler kural olarak kapsülsüzdür ve penetrasyonla büyürler.
Açıklama: Kanserler genellikle iyi gelişmiş bir kapsüle sahip olmasalar ve invaziv büyüseler de, bu durumun istisnaları vardır. Foliküler tiroid karsinomu malign olmasına rağmen makroskopik olarak belirgin ve kalın bir kapsüle sahip olabilir; tanı ancak bu kapsülün mikroskopik olarak tümör hücrelerince delindiğinin (kapsül invazyonu) gösterilmesiyle konur. Leiomyom ise benign olmasına rağmen gerçek kapsülü bulunmayan tümörlerdendir.

**Soru 2 (ID: b63c095b-86b3-48a6-bacc-5fa60924a04f)**
Soru Kökü: Malign tümörlerin yayılım özellikleriyle ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Skip metastaz, hücrelerin daima proksimalden distale sırayla tüm lenf nodlarını tutmasıdır.
Açıklama: Skip metastaz, tümör hücrelerinin lenfatik akımda ardışık sırayı takip etmeyerek proksimaldeki bazı lenf nodlarını 'atlayıp' (zikzak çizerek) daha uzak lenf nodlarına yayılmasıdır; yani sırayla tutulum kuralını bozar. Arterlerin kalın müsküler duvarı venlere göre penetrasyonu zorlaştırır, bu nedenle tümörler venöz yapılara daha rahat invaze olurlar. Over tümörlerinde asit ve peritoneal ekim (karsinomatozis) tipik tablodur.

---

### ÇİFT 10 (Benzerlik: 0.72)

**Soru 1 (ID: 93b4ff7c-0e78-4f4e-b890-614a927b0611)**
Soru Kökü: Elli beş yaşında, akciğerde malign nöroendokrin tümör saptanan hasta, sabahları yataktan kalkmakta zorlandığını, ancak gün içinde hareket ettikçe kas gücünün kısmen arttığını ifade etmektedir. Bu hastadaki paraneoplastik kas zafiyetinin patofizyolojisinde aşağıdaki hücresel hedeflerden hangisine karşı gelişen antikorlar rol oynar?
Doğru Şık (E): Presinaptik voltaj-bağımlı kalsiyum kanalları
Açıklama: Akciğerin küçük hücreli (nöroendokrin) karsinomuna sekonder gelişen Lambert-Eaton miyastenik sendromunda, presinaptik voltaj-bağımlı kalsiyum kanallarına karşı otoantikorlar gelişir ve asetilkolin salınımı engellenir; hareketle asetilkolin birikimi olduğu için kas gücü geçici olarak artar. Postsinaptik asetilkolin reseptörü antikoru Myastenia Gravis patogenezindedir ve klasik olarak timoma (veya bronkojenik tümör) ile ilişkilidir, eforla yorulma kliniği verir. Purkinje hücre antikorları (anti-Yo) subakut serebellar dejenerasyon yapar.

**Soru 2 (ID: f5a551d2-09c3-429a-97f1-08ac3a291903)**
Soru Kökü: Elli beş yaşında kadın hasta, giderek artan dengesizlik, nistagmus ve yürüme güçlüğü şikayetleriyle başvuruyor. Kapsamlı taramalar sonucunda meme karsinomu tanısı alan hastanın, BOS veya nörolojik görüntülemelerinde metastaz bulgusu saptanmıyor.
Serebellar bölgedeki Purkinje hücre hasarıyla karakterize olan bu paraneoplastik subakut serebellar dejenerasyon tablosunda saptanan spesifik antikor aşağıdakilerden hangisidir?
Doğru Şık (A): PCA-1 antikoru (Anti-Yo)
Açıklama: Meme, over ve uterus karsinomlarına sıklıkla eşlik eden subakut serebellar dejenerasyonda, ektopik tümör antijenlerine karşı gelişen PCA-1 (anti-Yo) otoantikorları, kan-beyin bariyerini geçerek doğrudan serebellumdaki Purkinje hücrelerine saldırır. Anti-Hu antikorları limbik ensefalitte, TIF-1 gama ise dermatomyozitte hedeftir. Paraneoplastik kökenli bu doku yıkımı, tümör tedavi edilse dahi nörolojik sekeller bırakır.

---

### ÇİFT 11 (Benzerlik: 0.70)

**Soru 1 (ID: 08e06ec2-ecb5-417e-8068-e1327b2661dc)**
Soru Kökü: Embriyonik artıklardaki veya gonaddaki totipotansiyel hücrelerden gelişen teratomlar ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (B): İmmatür doku miktarı arttıkça malignite riskiyle doğru orantılı olarak artış görülür.
Açıklama: Teratomlarda malignite potansiyelini belirleyen temel faktör, tümör içindeki embriyonel (immatür) doku miktarıdır; doku ne kadar immatürse malignite riski o kadar yüksektir. Matür kistik teratomlar (dermoid kistler) tipik olarak benigndir. Teratomlar tanımı gereği totipotansiyel hücrelerden oluştukları için ektoderm, endoderm ve mezodermin tümünden yapıları bir arada barındırabilirler.

**Soru 2 (ID: c2576fb6-2486-4666-aad7-da60af971a0a)**
Soru Kökü: Birden fazla germ hücre tabakasından (bazen ektoderm, endoderm ve mezoderm olmak üzere üçünden) kaynaklanan, totipotansiyel özellik gösteren ve immatür doku miktarı ile malignite riski doğrudan ilişkili olan neoplazi aşağıdakilerden hangisidir?
Doğru Şık (D): Teratom
Açıklama: Teratomlar, gonadlar veya embriyonik artıklardaki totipotansiyel hücrelerden köken alan ve farklı germ yapraklarına ait dokuları barındıran tümörlerdir. Pleomorfik adenom ve fibroadenom mikst tümörler olup tek bir germ hücre tabakasından kaynaklanırlar. Çocukluk çağında sakrokoksigeal bölgede sık görülen teratomlarda, nöral tüp gibi immatür doku varlığı malignite potansiyelini artırır.

---

### ÇİFT 12 (Benzerlik: 0.70)

**Soru 1 (ID: 57eb8a6c-4931-4a99-a716-b09de3fda89b)**
Soru Kökü: Seksen iki yaşındaki erkek hastaya akciğer radyografisinde saptanan kitlenin biyopsisi sonucu akciğer adenokarsinomu teşhisi konuluyor. Moleküler genetik analizde reseptör tirozin kinazlarda füzyon geni oluşumu saptanıyor. Bu duruma neden olan onkogen mutasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): ALK
Açıklama: ALK reseptörü, translokasyon sonucu spesifik füzyon genleri (örn. EML4-ALK) oluşturarak akciğer adenokarsinomu ve bazı lenfomalarda rol alır. FLT3 nokta mutasyonları Akut Myeloid Lösemide (AML) kötü prognostik faktördür, HRAS mutasyonları ise mesane ve böbrek epitelinden kaynaklanan tümörlerde etkilidir. ALK füzyon geninin saptanması spesifik ALK inhibitörleriyle (crizotinib) başarılı tedavi olanağı sunar.

**Soru 2 (ID: 63b77e3f-81a8-438e-91d0-05498cc02a58)**
Soru Kökü: 5 yaşındaki erkek çocukta, böbrek üstü bezi kaynaklı batın içi dev kitle rezeke edilmiş ve patolojik olarak nöroblastom tanısı konmuştur. Bu immatür embriyonel neoplazinin gelişiminde, aşağıdaki reseptör kinaz genlerinden hangisinin karakteristik delesyon ya da mutasyonunun bulunması en olasıdır?
Doğru Şık (E): ALK reseptörü nokta mutasyonu
Açıklama: Anaplastik lenfoma kinaz (ALK) reseptör geninde meydana gelen nokta mutasyonları pediatrik solid neoplazilerden olan nöroblastom gelişiminde klasik bir bulgudur (bazen aynı gende lenfomalara ve akciğer karsinomlarına yol açan translokasyonlar da izlenebilir). RET mutasyonları MEN sendromlarında, KIT mutasyonları ise gastrointestinal stromal tümörlerde (GIST) ön plandadır. Bu mutasyon profili, çocukluk çağı tümörlerinde hedefe yönelik küçük molekül inhibitörlerinin kullanımını belirler.

---

### ÇİFT 13 (Benzerlik: 0.70)

**Soru 1 (ID: 61a15ed6-71e9-4b5e-bc3f-b9e6eda22809)**
Soru Kökü: Altmış yaşında erkek hasta, ani başlayan hafıza kaybı, şiddetli konfüzyon ve kişilik değişiklikleri ile acil servise getiriliyor. Nörolojik taramada limbik ensefalit saptanan hastanın batın ve toraks taramasında küçük hücreli akciğer karsinomu teşhis ediliyor.
Paraneoplastik sendrom kliniğindeki bu hastanın beyin dokusuna çapraz reaksiyon gösteren antikor aşağıdakilerden hangisi olabilir?
Doğru Şık (D): ANNA-1 (Anti-Hu)
Açıklama: Küçük hücreli akciğer karsinomu ve over teratomuna eşlik eden paraneoplastik limbik ensefalit tablosunda, ANNA-1 (anti-Hu) ile NDMA ve voltaj bağımlı potasyum kanallarına (VGKC) karşı antikorlar saptanır. PCA-1 (anti-Yo) subakut serebellar dejenerasyonda, VGCC antikorları Lambert-Eaton sendromunda görülür. Tümörün ektopik olarak sergilediği nöronal antijenlerin immün yanıt uyandırması yıkıcı santral sinir sistemi bulgularını tetikler.

**Soru 2 (ID: 93b4ff7c-0e78-4f4e-b890-614a927b0611)**
Soru Kökü: Elli beş yaşında, akciğerde malign nöroendokrin tümör saptanan hasta, sabahları yataktan kalkmakta zorlandığını, ancak gün içinde hareket ettikçe kas gücünün kısmen arttığını ifade etmektedir. Bu hastadaki paraneoplastik kas zafiyetinin patofizyolojisinde aşağıdaki hücresel hedeflerden hangisine karşı gelişen antikorlar rol oynar?
Doğru Şık (E): Presinaptik voltaj-bağımlı kalsiyum kanalları
Açıklama: Akciğerin küçük hücreli (nöroendokrin) karsinomuna sekonder gelişen Lambert-Eaton miyastenik sendromunda, presinaptik voltaj-bağımlı kalsiyum kanallarına karşı otoantikorlar gelişir ve asetilkolin salınımı engellenir; hareketle asetilkolin birikimi olduğu için kas gücü geçici olarak artar. Postsinaptik asetilkolin reseptörü antikoru Myastenia Gravis patogenezindedir ve klasik olarak timoma (veya bronkojenik tümör) ile ilişkilidir, eforla yorulma kliniği verir. Purkinje hücre antikorları (anti-Yo) subakut serebellar dejenerasyon yapar.

---

### ÇİFT 14 (Benzerlik: 0.69)

**Soru 1 (ID: 075b45d2-44c2-4f33-b522-c09b34289f75)**
Soru Kökü: Benign tümörlerin en belirgin özelliklerinden biri, büyürken etraf dokuları itmeleri ve genellikle iyi gelişmiş bir kapsüle sahip olmalarıdır. Aşağıdaki neoplazilerden hangisi bu kuralın bilinen bir istisnası olup malign olmadığı halde kapsülsüzdür?
Doğru Şık (E): Leiomyom
Açıklama: Leiomyom ve dermisin benign vasküler tümörleri (hemanjiyomlar), benign olmalarına rağmen iyi gelişmiş bir kapsüle sahip olmayan istisnai lezyonlardır. Foliküler tiroid karsinomu ise malign bir tümör olmasına rağmen kapsüllü olmasıyla tam tersi bir istisna yaratır. Kapsül varlığı veya yokluğu malignite kararı için tek başına mutlak bir kriter değildir.

**Soru 2 (ID: 64f2d614-95b6-4fa3-b7e1-0439ae0e834e)**
Soru Kökü: Aşağıdaki '-oma' son eki alan neoplazilerden hangisi klinik ve biyolojik davranış olarak benign (iyi huylu) karakterde **değildir**?
Doğru Şık (D): Hemanjiyoperisitoma
Açıklama: Genel kural olarak '-oma' eki alan tümörler benign karakterlidir, ancak hemanjiyoperisitoma, lenfoma, mezotelyoma ve melanom gibi tümörler bu kuralın istisnası olup malign karakterdedir. Osteom, kondrom, leyomyom ve papillom isimlendirme kuralına uyan klasik benign neoplazilerdir. Nomenklatürdeki bu istisnai kelimeler biyolojik davranış tahmini için kritik öneme sahiptir.

---

