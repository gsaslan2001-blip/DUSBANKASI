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

### ÇİFT 1 (Benzerlik: 1.00)

**Soru 1 (ID: 2913b143-4619-4a8e-bae5-32a6931ccb12)**
Soru Kökü: Bağ dokusu incelemesinde kullanılan Azan boyası ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Çekirdekleri metakromatik renk değişimiyle boyar.
Açıklama: Azan boyası, adını içeriğindeki 'Azo'karmin ve 'An'ilin mavisi kelimelerinin birleşiminden alan ve bağ dokusunu ayırmak için kullanılan kombine bir yöntemdir. Metakromazi ise toluidin mavisi gibi boyaların polianyonik alanlarda renk değiştirmesidir ve Azan boyasının bir fonksiyonu değildir. Bu nedenle Azan'ın çekirdekleri metakromatik boyadığı ifadesi temel histokimya kurallarına aykırıdır.

**Soru 2 (ID: dd3cbbbb-9d5a-47db-9401-fec66d7b37f8)**
Soru Kökü: Bağ dokusu incelemesinde kullanılan Azan boyası ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Çekirdekleri metakromatik renk değişimiyle boyar.
Açıklama: Azan boyası, adını içeriğindeki 'Azo'karmin ve 'An'ilin mavisi kelimelerinin birleşiminden alan ve bağ dokusunu ayırmak için kullanılan kombine bir yöntemdir. Metakromazi ise toluidin mavisi gibi boyaların polianyonik alanlarda renk değiştirmesidir ve Azan boyasının bir fonksiyonu değildir. Bu nedenle Azan'ın çekirdekleri metakromatik boyadığı ifadesi temel histokimya kurallarına aykırıdır.

---

### ÇİFT 2 (Benzerlik: 1.00)

**Soru 1 (ID: c1849dde-7ba3-450a-bf9e-33f89f17bb38)**
Soru Kökü: Yetmiş beş yaşında koroner iskemik kalp hastalığı nedeniyle eks olmuş bir erkek hastanın otopsisinde, miyokard hücrelerinde ve kortikal nöronlarında asit hidrolazlarla tam sindirilememiş elektron yoğun altın-kahverengi pigment birikintileri (rezidüel cisim) saptanıyor. Yaşlanma ve hücre stresi belirteci olan bu lizozomal atık aşağıdakilerden hangisidir?
Doğru Şık (A): Lipofuscin pigmentleri
Açıklama: Ömrü uzun olan nöron ve miyokard gibi hücrelerde, lizozomal degradasyon işlemi sırasında lipid, metal ve organik moleküllerin oksidasyonu sonucu tam sindirilemeyen materyalin birikmesiyle oluşan zarla çevrili yapılara lipofuscin denir. Hemosiderin demir, glikojen ise granülsüz ER tarafından yıkılan karbonhidrat deposudur.

**Soru 2 (ID: 2de84f2e-8dd7-4e7a-be74-79b893fec815)**
Soru Kökü: Yetmiş beş yaşında koroner iskemik kalp hastalığı nedeniyle eks olmuş bir erkek hastanın otopsisinde, miyokard hücrelerinde ve kortikal nöronlarında asit hidrolazlarla tam sindirilememiş elektron yoğun altın-kahverengi pigment birikintileri (rezidüel cisim) saptanıyor. Yaşlanma ve hücre stresi belirteci olan bu lizozomal atık aşağıdakilerden hangisidir?
Doğru Şık (A): Lipofuscin pigmentleri
Açıklama: Ömrü uzun olan nöron ve miyokard gibi hücrelerde, lizozomal degradasyon işlemi sırasında lipid, metal ve organik moleküllerin oksidasyonu sonucu tam sindirilemeyen materyalin birikmesiyle oluşan zarla çevrili yapılara lipofuscin denir. Hemosiderin demir, glikojen ise granülsüz ER tarafından yıkılan karbonhidrat deposudur.

---

### ÇİFT 3 (Benzerlik: 1.00)

**Soru 1 (ID: 6ea7297e-a7af-4d5c-8cee-ac13bc93447a)**
Soru Kökü: Periferik kan yaymalarında veya doku kesitlerinde bazofil lökosit granüllerinin metakromatik olarak boyanmasını sağlayan spesifik boya aşağıdakilerden hangisidir?
Doğru Şık (D): Toluidin mavisi
Açıklama: Bazofil granülleri, mast hücrelerine benzer şekilde polianyonik glikozaminoglikanlar içerdiklerinden ötürü toluidin mavisi ile metakromazi gösterirler. Bu boya bazik yapısıyla dokuya bağlandığında ışığın soğrulma spektrumunu değiştirerek mavi yerine mor-kırmızı bir renk yansıtır. Diğer seçeneklerdeki boyalar asidik veya farklı hedefli oldukları için metakromatik boyanma yaratmazlar.

**Soru 2 (ID: c15f76ef-9f4b-42c1-8b48-5977d3f93c88)**
Soru Kökü: Periferik kan yaymalarında veya doku kesitlerinde bazofil lökosit granüllerinin metakromatik olarak boyanmasını sağlayan spesifik boya aşağıdakilerden hangisidir?
Doğru Şık (D): Toluidin mavisi
Açıklama: Bazofil granülleri, mast hücrelerine benzer şekilde polianyonik glikozaminoglikanlar içerdiklerinden ötürü toluidin mavisi ile metakromazi gösterirler. Bu boya bazik yapısıyla dokuya bağlandığında ışığın soğrulma spektrumunu değiştirerek mavi yerine mor-kırmızı bir renk yansıtır. Diğer seçeneklerdeki boyalar asidik veya farklı hedefli oldukları için metakromatik boyanma yaratmazlar.

---

### ÇİFT 4 (Benzerlik: 1.00)

**Soru 1 (ID: 251e63ce-a9bf-4c77-b65d-daf22367307c)**
Soru Kökü: Karaciğer hepatositlerinde, plazmadan alınan serbest kolesterolün spesifik enzimatik zincirlerle parçalanması üzerinden primer safra asitlerinin (örneğin kolik asit) sentezlenmesi süreci, temel olarak aşağıdaki organellerin hangisinde gerçekleşmektedir?
Doğru Şık (A): Peroksizom
Açıklama: Karaciğerde kolesterolün katabolize edilmesi yoluyla safra asitlerinin sentezi peroksizomların en önemli görevleri arasındadır. 26S proteazom ubikütinle işaretlenmiş hatalı proteinleri yok eder. COP II vezikülleri, granüllü ER'den Golgi'ye yeni sentezlenmiş protein taşır, lipid metabolizmasında primer rol oynamaz.

**Soru 2 (ID: 211294ec-1579-43cf-86af-8c3704617dc1)**
Soru Kökü: Karaciğer hepatositlerinde, plazmadan alınan serbest kolesterolün spesifik enzimatik zincirlerle parçalanması üzerinden primer safra asitlerinin (örneğin kolik asit) sentezlenmesi süreci, temel olarak aşağıdaki organellerin hangisinde gerçekleşmektedir?
Doğru Şık (A): Peroksizom
Açıklama: Karaciğerde kolesterolün katabolize edilmesi yoluyla safra asitlerinin sentezi peroksizomların en önemli görevleri arasındadır. 26S proteazom ubikütinle işaretlenmiş hatalı proteinleri yok eder. COP II vezikülleri, granüllü ER'den Golgi'ye yeni sentezlenmiş protein taşır, lipid metabolizmasında primer rol oynamaz.

---

### ÇİFT 5 (Benzerlik: 1.00)

**Soru 1 (ID: de82ed2a-2d3b-404e-9d91-b02509d38a3d)**
Soru Kökü: Işık mikroskobunda dokuları sabitlemek için sıklıkla kullanılan %10'luk formalin çözeltisinin ana etken maddesi olan kimyasalın %37'lik formu aşağıdakilerden hangisidir?
Doğru Şık (A): Formaldehit
Açıklama: Işık mikroskobunda doku fiksasyonu için standart olarak kullanılan formalin, aslında formaldehitin %37'lik çözeltisine verilen addır. Bu ajan, proteinler arası çapraz bağlar kurarak metabolizmayı sonlandırır ve dokuyu morfolojik incelemeye uygun şekilde sertleştirir. Gluteraldehit ve osmiyum tetroksit ise ışık mikroskobundan ziyade elektron mikroskobisinde tercih edilen fiksatiflerdir.

**Soru 2 (ID: e4f67b0e-f7b0-41f3-b539-726100181e54)**
Soru Kökü: Işık mikroskobunda dokuları sabitlemek için sıklıkla kullanılan %10'luk formalin çözeltisinin ana etken maddesi olan kimyasalın %37'lik formu aşağıdakilerden hangisidir?
Doğru Şık (A): Formaldehit
Açıklama: Işık mikroskobunda doku fiksasyonu için standart olarak kullanılan formalin, aslında formaldehitin %37'lik çözeltisine verilen addır. Bu ajan, proteinler arası çapraz bağlar kurarak metabolizmayı sonlandırır ve dokuyu morfolojik incelemeye uygun şekilde sertleştirir. Gluteraldehit ve osmiyum tetroksit ise ışık mikroskobundan ziyade elektron mikroskobisinde tercih edilen fiksatiflerdir.

---

### ÇİFT 6 (Benzerlik: 1.00)

**Soru 1 (ID: b13aa05f-dc8a-42dc-bea0-a35dcf44e77d)**
Soru Kökü: Golgi cisminin trans yüzünden tomurcuklanarak oluşan, duvarı lizozomal membran proteinleri ile kaplı olan ve lümeninde hidrolitik enzimler taşımasına rağmen henüz sindireceği materyal bulunmayan lizozomal keseye ne ad verilir?
Doğru Şık (C): Primer lizozom
Açıklama: Golgi'den yeni ayrılmış, hedefine henüz ulaşmamış ve inaktif hidrolitik enzim paketi halindeki zarlı veziküle primer lizozom denir. Herhangi bir hedef vezikül (fagozom veya endozom) ile birleştiği an adı sekonder lizozom olur. Geç endozom, hücre zarı kaynaklı endositoz yolu ile Golgi salgı yolağının birleştiği daha ileri bir yapıdır.

**Soru 2 (ID: 095e785f-180b-4203-a4b6-9924f3557d50)**
Soru Kökü: Golgi cisminin trans yüzünden tomurcuklanarak oluşan, duvarı lizozomal membran proteinleri ile kaplı olan ve lümeninde hidrolitik enzimler taşımasına rağmen henüz sindireceği materyal bulunmayan lizozomal keseye ne ad verilir?
Doğru Şık (C): Primer lizozom
Açıklama: Golgi'den yeni ayrılmış, hedefine henüz ulaşmamış ve inaktif hidrolitik enzim paketi halindeki zarlı veziküle primer lizozom denir. Herhangi bir hedef vezikül (fagozom veya endozom) ile birleştiği an adı sekonder lizozom olur. Geç endozom, hücre zarı kaynaklı endositoz yolu ile Golgi salgı yolağının birleştiği daha ileri bir yapıdır.

---

### ÇİFT 7 (Benzerlik: 1.00)

**Soru 1 (ID: 754e45d9-bd99-4ee2-9fab-a59b2bac7f92)**
Soru Kökü: Histolojik incelemelerde en yaygın kullanılan boyalardan biri olan hematoksilin ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Net negatif yüklü asidik bir boyadır.
Açıklama: Hematoksilin net pozitif yüklü, bazik karakterde bir boyadır ve dokudaki anyonik (negatif yüklü) bölgeleri mavi renge boyar. Net negatif yüklü ve asidik özellikte olan boya hematoksilin değil, hücre sitoplazmasını hedefleyen eosin boyasıdır. Bu nedenle hematoksilinin asidik olduğunu iddia eden seçenek kimyasal boyanma mekanizmasına tamamen aykırıdır.

**Soru 2 (ID: bd79d21f-c111-4da1-a4b7-04645c590e1d)**
Soru Kökü: Histolojik incelemelerde en yaygın kullanılan boyalardan biri olan hematoksilin ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Net negatif yüklü asidik bir boyadır.
Açıklama: Hematoksilin net pozitif yüklü, bazik karakterde bir boyadır ve dokudaki anyonik (negatif yüklü) bölgeleri mavi renge boyar. Net negatif yüklü ve asidik özellikte olan boya hematoksilin değil, hücre sitoplazmasını hedefleyen eosin boyasıdır. Bu nedenle hematoksilinin asidik olduğunu iddia eden seçenek kimyasal boyanma mekanizmasına tamamen aykırıdır.

---

### ÇİFT 8 (Benzerlik: 1.00)

**Soru 1 (ID: 940ca8bf-e749-448d-b626-753f59d41e94)**
Soru Kökü: Mitokondrinin evrimsel kökenini açıklayan ve bu organelin hücresel enerji üretimi amacıyla ilkel bir ökaryot içine giren aerobik bir eubacteri'den köken aldığını savunan teori aşağıdakilerden hangisidir?
Doğru Şık (C): Endosimbiyotik teori
Açıklama: Mitokondrinin kendine ait sirküler DNA'sının, RNA'sının ve bölünme yeteneğinin bulunması, onun eskiden bağımsız bir aerobik prokaryot olduğunu savunan endosimbiyotik teori ile açıklanır. Kemiosmotik eşleme ATP sentez mekanizmasının adıdır, hücre zarı yapısı ise modifiye sıvı mozaik model ile açıklanır. Evrimsel kökeni tanımlayan tek kavram endosimbiyotik teoridir.

**Soru 2 (ID: bc707c0f-fd28-4a88-a144-ae85263859e6)**
Soru Kökü: Mitokondrinin evrimsel kökenini açıklayan ve bu organelin hücresel enerji üretimi amacıyla ilkel bir ökaryot içine giren aerobik bir eubacteri'den köken aldığını savunan teori aşağıdakilerden hangisidir?
Doğru Şık (C): Endosimbiyotik teori
Açıklama: Mitokondrinin kendine ait sirküler DNA'sının, RNA'sının ve bölünme yeteneğinin bulunması, onun eskiden bağımsız bir aerobik prokaryot olduğunu savunan endosimbiyotik teori ile açıklanır. Kemiosmotik eşleme ATP sentez mekanizmasının adıdır, hücre zarı yapısı ise modifiye sıvı mozaik model ile açıklanır. Evrimsel kökeni tanımlayan tek kavram endosimbiyotik teoridir.

---

### ÇİFT 9 (Benzerlik: 1.00)

**Soru 1 (ID: 271888d7-3f9a-4458-acb8-04892861f460)**
Soru Kökü: 30 yaşında erkek hasta, nefrotik sendrom şüphesiyle biyopsi veriyor. Alınan örneğin elektron mikroskobunda incelenmesi için metabolizmayı sonlandırıp çok güçlü çapraz bağlar oluşturacak en ideal fiksatif ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Gluteraldehit
Açıklama: Elektron mikroskobik incelemelerde çok yüksek çözünürlüklü yapısal koruma gerektiği için en ideal fiksatif ajan gluteraldehittir. Formaldehit ışık mikroskobisinde standart olarak tercih edilirken, gluteraldehitin oluşturduğu yoğun çapraz protein ağları ultrastrüktürel korumayı maksimize eder. Bu nedenle böbrek biyopsileri gibi detaylı organel incelemelerinde birincil tercih olarak gluteraldehit kullanılır.

**Soru 2 (ID: e0908cdb-443b-4815-bb48-ad1b7026de92)**
Soru Kökü: 30 yaşında erkek hasta, nefrotik sendrom şüphesiyle biyopsi veriyor. Alınan örneğin elektron mikroskobunda incelenmesi için metabolizmayı sonlandırıp çok güçlü çapraz bağlar oluşturacak en ideal fiksatif ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Gluteraldehit
Açıklama: Elektron mikroskobik incelemelerde çok yüksek çözünürlüklü yapısal koruma gerektiği için en ideal fiksatif ajan gluteraldehittir. Formaldehit ışık mikroskobisinde standart olarak tercih edilirken, gluteraldehitin oluşturduğu yoğun çapraz protein ağları ultrastrüktürel korumayı maksimize eder. Bu nedenle böbrek biyopsileri gibi detaylı organel incelemelerinde birincil tercih olarak gluteraldehit kullanılır.

---

### ÇİFT 10 (Benzerlik: 1.00)

**Soru 1 (ID: 84401b3a-f567-491f-9828-a216a4cc3033)**
Soru Kökü: Kırk beş yaşında erkek böbrek nakli hastasına immünsüpresif amaçla bir serin/treonin kinaz inhibitörü olan rapamisin başlanıyor. Bu ilacın hücre içi hedefi olan mTOR enziminin inhibisyonu sonucunda, fibroblastlarda aşağıdaki hücresel süreçlerden hangisinin baskılanmaktan kurtularak uyarılması beklenir?
Doğru Şık (D): Atg aracılı makrootofaji
Açıklama: mTOR (mammalian target of rapamycin), hücreyi besleyen faktörlerce uyarıldığında Atg genlerini baskılayarak otofajiyi durduran ve hücreyi büyüme yolağına sokan bir kinazdır. Rapamisin ilacı mTOR'u inhibe ettiğinde, Atg genleri üzerindeki bu fren kalkar ve makrootofaji uyarılır. Apopitoz farklı sinyal yolakları (sitokrom c, kaspaz) tarafından yönetilir.

**Soru 2 (ID: 72168931-22c8-48c7-99d9-663efb41b9fb)**
Soru Kökü: Kırk beş yaşında erkek böbrek nakli hastasına immünsüpresif amaçla bir serin/treonin kinaz inhibitörü olan rapamisin başlanıyor. Bu ilacın hücre içi hedefi olan mTOR enziminin inhibisyonu sonucunda, fibroblastlarda aşağıdaki hücresel süreçlerden hangisinin baskılanmaktan kurtularak uyarılması beklenir?
Doğru Şık (D): Atg aracılı makrootofaji
Açıklama: mTOR (mammalian target of rapamycin), hücreyi besleyen faktörlerce uyarıldığında Atg genlerini baskılayarak otofajiyi durduran ve hücreyi büyüme yolağına sokan bir kinazdır. Rapamisin ilacı mTOR'u inhibe ettiğinde, Atg genleri üzerindeki bu fren kalkar ve makrootofaji uyarılır. Apopitoz farklı sinyal yolakları (sitokrom c, kaspaz) tarafından yönetilir.

---

### ÇİFT 11 (Benzerlik: 1.00)

**Soru 1 (ID: 10a6ff3f-20d7-4da1-9832-9c3299d21829)**
Soru Kökü: Altmış beş yaşında bir kadın hastanın hücre kültürlerinde, apopitoz yolağı (sitokrom-C çıkışı) inhibe edilmesine rağmen yaşlanan hücresel elemanların sitoplazma içinde yavaşça sindirildiği gözleniyor. Atg genleriyle uyarılan bu kendi kendini sindirme mekanizmasını durdurarak hücresel büyüme yolağını açan sitoplazmik faktör (kinaz) aşağıdakilerden hangisidir?
Doğru Şık (D): mTOR serin/treonin kinazı
Açıklama: Makrootofaji süreci Atg genleri tarafından başlatılır. Besin bolluğunda ve hücresel büyüme komutu verildiğinde ise mTOR (mammalian target of rapamycin) adı verilen serin/treonin kinaz aktive olur. mTOR aktive olduğunda Atg genlerini baskılar ve otofaji (kendini sindirme) sürecini geri döndürülebilir şekilde engeller. SRP ve translokon endoplazmik retikulumla ilgilidir.

**Soru 2 (ID: 62fef799-f819-449d-acd2-88106d563fcd)**
Soru Kökü: Altmış beş yaşında bir kadın hastanın hücre kültürlerinde, apopitoz yolağı (sitokrom-C çıkışı) inhibe edilmesine rağmen yaşlanan hücresel elemanların sitoplazma içinde yavaşça sindirildiği gözleniyor. Atg genleriyle uyarılan bu kendi kendini sindirme mekanizmasını durdurarak hücresel büyüme yolağını açan sitoplazmik faktör (kinaz) aşağıdakilerden hangisidir?
Doğru Şık (D): mTOR serin/treonin kinazı
Açıklama: Makrootofaji süreci Atg genleri tarafından başlatılır. Besin bolluğunda ve hücresel büyüme komutu verildiğinde ise mTOR (mammalian target of rapamycin) adı verilen serin/treonin kinaz aktive olur. mTOR aktive olduğunda Atg genlerini baskılar ve otofaji (kendini sindirme) sürecini geri döndürülebilir şekilde engeller. SRP ve translokon endoplazmik retikulumla ilgilidir.

---

### ÇİFT 12 (Benzerlik: 1.00)

**Soru 1 (ID: 1c09946f-2391-4302-bbb3-839197c03fbf)**
Soru Kökü: Mitokondride Krebs siklusu enzimlerinin büyük çoğunluğu matrikste serbest halde bulunurken, bu kuralın istisnası olan ve organelin iç zarında yerleşik olan enzim aşağıdakilerden hangisidir?
Doğru Şık (E): Süksinat dehidrogenaz
Açıklama: Krebs siklusu reaksiyonlarının neredeyse tamamı matriks içinde gerçekleşir; ancak süksinat dehidrogenaz enzimi mitokondri iç zarına sıkıca tutunmuş (integral) bir zar proteini olarak istisna teşkil eder. Sitokrom C zarlar arası mesafede, monoamin oksidaz dış zarda bulunur. Glutamat dehidrojenaz ise tipik bir matriks marker enzimidir.

**Soru 2 (ID: c93faf54-687e-49d3-8927-5ca2cd833b67)**
Soru Kökü: Mitokondride Krebs siklusu enzimlerinin büyük çoğunluğu matrikste serbest halde bulunurken, bu kuralın istisnası olan ve organelin iç zarında yerleşik olan enzim aşağıdakilerden hangisidir?
Doğru Şık (E): Süksinat dehidrogenaz
Açıklama: Krebs siklusu reaksiyonlarının neredeyse tamamı matriks içinde gerçekleşir; ancak süksinat dehidrogenaz enzimi mitokondri iç zarına sıkıca tutunmuş (integral) bir zar proteini olarak istisna teşkil eder. Sitokrom C zarlar arası mesafede, monoamin oksidaz dış zarda bulunur. Glutamat dehidrojenaz ise tipik bir matriks marker enzimidir.

---

### ÇİFT 13 (Benzerlik: 1.00)

**Soru 1 (ID: a7fba2cb-fd73-4c48-85aa-d89f5848987f)**
Soru Kökü: Elektron mikroskobik incelemelerde özellikle hücre zarlarındaki lipidleri korumak ve elektron tutuculuk göstererek görüntü kontrastını artırmak için kullanılan spesifik fiksatif ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Osmiyum tetroksit
Açıklama: Osmiyum tetroksit, doymamış yağ asitlerine bağlanarak lipidleri stabilize eden ve elektronları tutarak yüksek mikroskobik kontrast sağlayan spesifik bir fiksatiftir. Gluteraldehit proteinleri sabitlerken lipidleri çözülmeye karşı koruyamaz, bu yüzden osmiyum tetroksit rutinde tamamlayıcı olarak kullanılır. Ayrıca bu kimyasal ışık mikroskobisinde de lipid boyası olarak işlev görebilme özelliğine sahiptir.

**Soru 2 (ID: 75e37208-dffa-473a-85c5-44c602d6cb05)**
Soru Kökü: Elektron mikroskobik incelemelerde özellikle hücre zarlarındaki lipidleri korumak ve elektron tutuculuk göstererek görüntü kontrastını artırmak için kullanılan spesifik fiksatif ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Osmiyum tetroksit
Açıklama: Osmiyum tetroksit, doymamış yağ asitlerine bağlanarak lipidleri stabilize eden ve elektronları tutarak yüksek mikroskobik kontrast sağlayan spesifik bir fiksatiftir. Gluteraldehit proteinleri sabitlerken lipidleri çözülmeye karşı koruyamaz, bu yüzden osmiyum tetroksit rutinde tamamlayıcı olarak kullanılır. Ayrıca bu kimyasal ışık mikroskobisinde de lipid boyası olarak işlev görebilme özelliğine sahiptir.

---

### ÇİFT 14 (Benzerlik: 1.00)

**Soru 1 (ID: 74f067bb-3f03-43fa-bd95-cac5285b64c4)**
Soru Kökü: 28 yaşında erkek hasta, temporomandibular eklem diski zedelenmesi sonrası cerrahi geçiriyor. Alınan kıkırdak doku örneğinde ara madde (matriks) yapılarının incelenmesi için metakromatik özellik gösteren bir boya kullanılması planlanıyor. Bu amaçla aşağıdaki ajanlardan hangisi uygundur?
Doğru Şık (E): Toluidin mavisi
Açıklama: Hyalin kıkırdak ara maddesi, yapısındaki sülfatlanmış proteoglikanlar nedeniyle güçlü bir polianyonik alan oluşturur ve toluidin mavisi ile metakromatik boyanır. Bu boyanma paterni kıkırdak matriksinin biyokimyasal bütünlüğünü değerlendirmek için klinik bir belirteçtir. Hematoksilin bazik olsa da tipik metakromatik renk değişimini toluidin mavisi kadar spesifik göstermez.

**Soru 2 (ID: df2a311c-66d1-4180-a0c9-461cb0f4fa3a)**
Soru Kökü: 28 yaşında erkek hasta, temporomandibular eklem diski zedelenmesi sonrası cerrahi geçiriyor. Alınan kıkırdak doku örneğinde ara madde (matriks) yapılarının incelenmesi için metakromatik özellik gösteren bir boya kullanılması planlanıyor. Bu amaçla aşağıdaki ajanlardan hangisi uygundur?
Doğru Şık (E): Toluidin mavisi
Açıklama: Hyalin kıkırdak ara maddesi, yapısındaki sülfatlanmış proteoglikanlar nedeniyle güçlü bir polianyonik alan oluşturur ve toluidin mavisi ile metakromatik boyanır. Bu boyanma paterni kıkırdak matriksinin biyokimyasal bütünlüğünü değerlendirmek için klinik bir belirteçtir. Hematoksilin bazik olsa da tipik metakromatik renk değişimini toluidin mavisi kadar spesifik göstermez.

---

### ÇİFT 15 (Benzerlik: 1.00)

**Soru 1 (ID: 03dd4cab-9a8a-45f9-9199-90832481d1f2)**
Soru Kökü: Seksen yaşında nörodejeneratif hastalık öyküsü olan bir hastanın otopsideki beyin dokusu kesitlerinde, otofajik vakuollerin içinde sindirilemeden kalmış hücre içi kompleks atıkların biriktiği gözleniyor. Elektron mikroskobunda tek katlı bir ünit zar ile çevrili olduğu izlenen, mitokondriyal yaşlanma ve lizozomal oksidan atık olarak nöronlarda yüksek miktarda görülen bu biyolojik yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Rezidüel cisim (Lipofuscin)
Açıklama: Otofajik lizozomlar içinde hidrolitik enzimlerin aktivitesine rağmen tamamen sindirilemeden kalan, hücresel metabolizma ve lipid peroksidasyonu artıklarını barındıran pigmentli yapılara artık (rezidüel) cisim denir. Nöronlarda ve kalp kasında biriken bu yapıların en iyi bilinen örneği yaşlanma pigmenti olan lipofuscin granülleridir.

**Soru 2 (ID: 1ae1adba-ac66-4b3a-b98d-b43344fd93ec)**
Soru Kökü: Seksen yaşında nörodejeneratif hastalık öyküsü olan bir hastanın otopsideki beyin dokusu kesitlerinde, otofajik vakuollerin içinde sindirilemeden kalmış hücre içi kompleks atıkların biriktiği gözleniyor. Elektron mikroskobunda tek katlı bir ünit zar ile çevrili olduğu izlenen, mitokondriyal yaşlanma ve lizozomal oksidan atık olarak nöronlarda yüksek miktarda görülen bu biyolojik yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Rezidüel cisim (Lipofuscin)
Açıklama: Otofajik lizozomlar içinde hidrolitik enzimlerin aktivitesine rağmen tamamen sindirilemeden kalan, hücresel metabolizma ve lipid peroksidasyonu artıklarını barındıran pigmentli yapılara artık (rezidüel) cisim denir. Nöronlarda ve kalp kasında biriken bu yapıların en iyi bilinen örneği yaşlanma pigmenti olan lipofuscin granülleridir.

---

### ÇİFT 16 (Benzerlik: 1.00)

**Soru 1 (ID: d7e926ee-f3ac-4ef7-aebf-59534a448bf9)**
Soru Kökü: Oksidatif fosforilasyon sırasında elektron transport zinciri ile zarlar arası mesafeye pompalanan hidrojen iyonlarının, enerji üretimi amacıyla ATP sentaz üzerinden tekrar matrikse alınması sürecine ne ad verilir?
Doğru Şık (B): Kemiosmotik eşleme
Açıklama: Zarlar arası boşlukta biriken H+ iyonlarının konsantrasyon gradyanı yönünde matrikse akarken serbest kalan enerjinin ATP sentezine (kemi) ve H+ alınmasına (osmotik) harcandığı bu termodinamik sisteme kemiosmotik eşleme denir. Translokasyon, TOM ve TIM kompleksleri ile proteinlerin zar geçişidir. Beta-oksidasyon ise matriks içinde yağ asidi yıkım sürecidir.

**Soru 2 (ID: a43cb47f-bca8-4699-8f22-7e718f300e62)**
Soru Kökü: Oksidatif fosforilasyon sırasında elektron transport zinciri ile zarlar arası mesafeye pompalanan hidrojen iyonlarının, enerji üretimi amacıyla ATP sentaz üzerinden tekrar matrikse alınması sürecine ne ad verilir?
Doğru Şık (B): Kemiosmotik eşleme
Açıklama: Zarlar arası boşlukta biriken H+ iyonlarının konsantrasyon gradyanı yönünde matrikse akarken serbest kalan enerjinin ATP sentezine (kemi) ve H+ alınmasına (osmotik) harcandığı bu termodinamik sisteme kemiosmotik eşleme denir. Translokasyon, TOM ve TIM kompleksleri ile proteinlerin zar geçişidir. Beta-oksidasyon ise matriks içinde yağ asidi yıkım sürecidir.

---

### ÇİFT 17 (Benzerlik: 1.00)

**Soru 1 (ID: 525ef0fa-8593-4241-8111-d0f970829815)**
Soru Kökü: Elli yaşında kronik alkolizm öyküsü olan bir erkek hastanın karaciğer dokusu incelendiğinde, hepatositlerde spesifik bir organelin hipertrofiye uğradığı ve sayısının arttığı tespit ediliyor. Bu organel hücre içinde alkolü asetaldehite dönüştürerek enzimatik metabolizmayı yürüttüğüne göre, sözü edilen hücresel yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Peroksizom
Açıklama: Karaciğer hepatositlerinde etanolün (alkol) asetaldehite dönüştürülerek doğrudan metabolize edilmesi işlemi, peroksizomların temel litik fonksiyonlarından biridir. Düz endoplazmik retikulum ilaç detoksifikasyonundan (Sitokrom P-450) sorumluyken, spesifik alkol yıkım asetaldehit yolağı peroksizomal bir süreçtir. Ribozom protein, çekirdekçik ise rRNA sentezler.

**Soru 2 (ID: 08c81fa3-a9b5-4c9f-b006-825541c90c3f)**
Soru Kökü: Elli yaşında kronik alkolizm öyküsü olan bir erkek hastanın karaciğer dokusu incelendiğinde, hepatositlerde spesifik bir organelin hipertrofiye uğradığı ve sayısının arttığı tespit ediliyor. Bu organel hücre içinde alkolü asetaldehite dönüştürerek enzimatik metabolizmayı yürüttüğüne göre, sözü edilen hücresel yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Peroksizom
Açıklama: Karaciğer hepatositlerinde etanolün (alkol) asetaldehite dönüştürülerek doğrudan metabolize edilmesi işlemi, peroksizomların temel litik fonksiyonlarından biridir. Düz endoplazmik retikulum ilaç detoksifikasyonundan (Sitokrom P-450) sorumluyken, spesifik alkol yıkım asetaldehit yolağı peroksizomal bir süreçtir. Ribozom protein, çekirdekçik ise rRNA sentezler.

---

### ÇİFT 18 (Benzerlik: 1.00)

**Soru 1 (ID: 9e9970f0-16cc-4f30-a1b9-d0c405fc88db)**
Soru Kökü: Hücrenin besinsiz kaldığı katabolik durumlarda yaşlanmış organellerini kendi lizozomal sistemiyle sindirerek enerji ve yapıtaşı geri dönüşümü sağlamasını (makrootofaji) hücresel düzeyde uyararak başlatan temel gen bölgesi aşağıdakilerden hangisidir?
Doğru Şık (A): Atg genleri
Açıklama: Hücre içi dengenin sağlanması ve yaşlanmış organellerin parçalanarak geri kazanımı işlemlerini koordine eden temel düzenleyici sistem Atg (autophagy-related) genleridir. LBR (lamin B reseptörü) nükleer laminaya ait bir gendir. Kaspazlar apopitozu yönetirken, Nup genleri nükleer por kompleksi proteinlerini sentezler.

**Soru 2 (ID: 40245e92-a01c-4a31-b362-1816e307813c)**
Soru Kökü: Hücrenin besinsiz kaldığı katabolik durumlarda yaşlanmış organellerini kendi lizozomal sistemiyle sindirerek enerji ve yapıtaşı geri dönüşümü sağlamasını (makrootofaji) hücresel düzeyde uyararak başlatan temel gen bölgesi aşağıdakilerden hangisidir?
Doğru Şık (A): Atg genleri
Açıklama: Hücre içi dengenin sağlanması ve yaşlanmış organellerin parçalanarak geri kazanımı işlemlerini koordine eden temel düzenleyici sistem Atg (autophagy-related) genleridir. LBR (lamin B reseptörü) nükleer laminaya ait bir gendir. Kaspazlar apopitozu yönetirken, Nup genleri nükleer por kompleksi proteinlerini sentezler.

---

### ÇİFT 19 (Benzerlik: 1.00)

**Soru 1 (ID: 38c58540-e447-4fa3-a67c-b08f004190cc)**
Soru Kökü: Hücre içi moleküler taşımacılık, bölünme mekiği oluşumu ve genel morfolojinin korunması hücre iskeleti (sitoskeleton) tarafından sağlanır. Sitoskeletonu oluşturan yapılar çaplarına göre sınıflandırıldığında, 25 nanometre (nm) dış çapı ile iskelet ağının en kalın (kalibreli) elemanı aşağıdakilerden hangisidir?
Doğru Şık (C): Mikrotübül
Açıklama: Hücre iskeletinin yapıtaşları çapa göre üçe ayrılır: Mikrotübüller en kalın olanlarıdır (25 nm). Ara filamanlar orta kalınlıktadır (10-15 nm). Mikrofilamanlar (aktin) ise en ince olanlarıdır (7 nm). Çekirdek iğ iplikleri ve sentrozom mikrotübüllerden oluşur.

**Soru 2 (ID: 13e3bbb9-e840-440e-82f8-badc3a652868)**
Soru Kökü: Hücre içi moleküler taşımacılık, bölünme mekiği oluşumu ve genel morfolojinin korunması hücre iskeleti (sitoskeleton) tarafından sağlanır. Sitoskeletonu oluşturan yapılar çaplarına göre sınıflandırıldığında, 25 nanometre (nm) dış çapı ile iskelet ağının en kalın (kalibreli) elemanı aşağıdakilerden hangisidir?
Doğru Şık (C): Mikrotübül
Açıklama: Hücre iskeletinin yapıtaşları çapa göre üçe ayrılır: Mikrotübüller en kalın olanlarıdır (25 nm). Ara filamanlar orta kalınlıktadır (10-15 nm). Mikrofilamanlar (aktin) ise en ince olanlarıdır (7 nm). Çekirdek iğ iplikleri ve sentrozom mikrotübüllerden oluşur.

---

### ÇİFT 20 (Benzerlik: 1.00)

**Soru 1 (ID: 6fd6c4df-b3db-4eff-a30c-ff4c2a073e77)**
Soru Kökü: Doku kesitlerinin incelenmesinde kullanılan Sudan black yöntemi aşağıdaki moleküllerden hangisine karşı boyanma afinitesi **göstermez**?
Doğru Şık (E): DNA deoksiribozları
Açıklama: Sudan black, adından da anlaşıldığı üzere dokulardaki lipid, yağ ve trigliserit komponentlerini siyaha boyayarak görünür kılan spesifik bir yağ boyasıdır. DNA içerisindeki deoksiriboz şekerleri lipid yapısında olmadıkları için bu boyadan etkilenmezler ve sadece Feulgen reaksiyonu gibi spesifik yöntemlerle gösterilirler. Bu sebeple Sudan black'in genetik materyali boyaması beklenemez.

**Soru 2 (ID: f57bcc4b-ccc3-449b-a5c7-82decfd172ce)**
Soru Kökü: Doku kesitlerinin incelenmesinde kullanılan Sudan black yöntemi aşağıdaki moleküllerden hangisine karşı boyanma afinitesi **göstermez**?
Doğru Şık (E): DNA deoksiribozları
Açıklama: Sudan black, adından da anlaşıldığı üzere dokulardaki lipid, yağ ve trigliserit komponentlerini siyaha boyayarak görünür kılan spesifik bir yağ boyasıdır. DNA içerisindeki deoksiriboz şekerleri lipid yapısında olmadıkları için bu boyadan etkilenmezler ve sadece Feulgen reaksiyonu gibi spesifik yöntemlerle gösterilirler. Bu sebeple Sudan black'in genetik materyali boyaması beklenemez.

---

### ÇİFT 21 (Benzerlik: 1.00)

**Soru 1 (ID: 276896d5-c082-4548-906d-edd59a9eaf78)**
Soru Kökü: Makrootofaji sürecinde, ömrünü tamamlamış ve hücre için toksik hale gelmiş olan bir mitokondrinin etrafının çift katlı granülsüz endoplazmik retikulum zarı ile sıkıca çevrelenmesiyle (membran izolasyonu) oluşturulan lizozom öncesi hücresel yapıya ne ad verilir?
Doğru Şık (B): Otofagozom
Açıklama: Hedef organelin lizozom ile birleşmeden önce granülsüz ER tübülleri tarafından hapsedildiği bu kistik yapı otofagozom olarak adlandırılır. Henüz lizozomal hidrolazlarla birleşmemiştir, sadece hedefin hücrenin geri kalanından yalıtılmasını sağlar. Geç endozom, fagositoz/endositoz dışı materyaller için kullanılan dış yolun ara durağıdır.

**Soru 2 (ID: 38f1a67e-ed80-48d8-814f-4c9eb83c09d4)**
Soru Kökü: Makrootofaji sürecinde, ömrünü tamamlamış ve hücre için toksik hale gelmiş olan bir mitokondrinin etrafının çift katlı granülsüz endoplazmik retikulum zarı ile sıkıca çevrelenmesiyle (membran izolasyonu) oluşturulan lizozom öncesi hücresel yapıya ne ad verilir?
Doğru Şık (B): Otofagozom
Açıklama: Hedef organelin lizozom ile birleşmeden önce granülsüz ER tübülleri tarafından hapsedildiği bu kistik yapı otofagozom olarak adlandırılır. Henüz lizozomal hidrolazlarla birleşmemiştir, sadece hedefin hücrenin geri kalanından yalıtılmasını sağlar. Geç endozom, fagositoz/endositoz dışı materyaller için kullanılan dış yolun ara durağıdır.

---

### ÇİFT 22 (Benzerlik: 1.00)

**Soru 1 (ID: b464001e-4347-48f5-bd08-2a117f444d87)**
Soru Kökü: Doğrudan hücre zarı altında yoğun bir kortikal ağ kurarak fagositoz, mikrovillus hareketi ve klievaj oluğu (bölünme çentiği) oluşumu gibi membran dinamiklerini yöneten; 7 nanometre (nm) çapıyla en ince hücre iskeleti elemanı olan yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Aktin mikrofilamanları
Açıklama: Aktin (mikrofilaman), 7 nm çapı ile sitoskeletonun en ince yapısıdır. Özellikle hücre zarı hareketleri, fagositoz pseudopodları ve sitokinez sürecinde aktif rol alır. Nörofilamanlar birer ara filamandırlar (10 nm). Sentrozom mikrotübülleri ise daha kalın ve sert olan 25 nm'lik borusal iskelet birimleridir.

**Soru 2 (ID: ced7063b-9342-4ef7-98f1-bb935300744a)**
Soru Kökü: Doğrudan hücre zarı altında yoğun bir kortikal ağ kurarak fagositoz, mikrovillus hareketi ve klievaj oluğu (bölünme çentiği) oluşumu gibi membran dinamiklerini yöneten; 7 nanometre (nm) çapıyla en ince hücre iskeleti elemanı olan yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Aktin mikrofilamanları
Açıklama: Aktin (mikrofilaman), 7 nm çapı ile sitoskeletonun en ince yapısıdır. Özellikle hücre zarı hareketleri, fagositoz pseudopodları ve sitokinez sürecinde aktif rol alır. Nörofilamanlar birer ara filamandırlar (10 nm). Sentrozom mikrotübülleri ise daha kalın ve sert olan 25 nm'lik borusal iskelet birimleridir.

---

### ÇİFT 23 (Benzerlik: 1.00)

**Soru 1 (ID: 62d2336a-059b-4d9b-89fc-b525bb4f28aa)**
Soru Kökü: Mast hücreleri ve hyalin kıkırdak gibi dokuların bazik boyalarla metakromatik olarak (renk değiştirerek) boyanmasının temel moleküler nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Dokunun polianyonik bölgeler içermesi
Açıklama: Metakromazi fenomeninin gerçekleşebilmesi için boya moleküllerinin dokuda çok sıkı bir şekilde dizilip polimerleşmesi gerekir ve bu dizilim, dokudaki sülfatlanmış glikozaminoglikanlar gibi polianyonik (çoklu negatif yüklü) bölgeler sayesinde sağlanır. Mast hücre granülleri ve kıkırdak matriksi bu polianyonik karakterin prototipleridir. Lipid içeriği veya kollajen bağları bu renk kırılmasına mekanik olarak zemin hazırlayamaz.

**Soru 2 (ID: 7d93655c-0882-41c9-80c6-a5609858a4a1)**
Soru Kökü: Mast hücreleri ve hyalin kıkırdak gibi dokuların bazik boyalarla metakromatik olarak (renk değiştirerek) boyanmasının temel moleküler nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Dokunun polianyonik bölgeler içermesi
Açıklama: Metakromazi fenomeninin gerçekleşebilmesi için boya moleküllerinin dokuda çok sıkı bir şekilde dizilip polimerleşmesi gerekir ve bu dizilim, dokudaki sülfatlanmış glikozaminoglikanlar gibi polianyonik (çoklu negatif yüklü) bölgeler sayesinde sağlanır. Mast hücre granülleri ve kıkırdak matriksi bu polianyonik karakterin prototipleridir. Lipid içeriği veya kollajen bağları bu renk kırılmasına mekanik olarak zemin hazırlayamaz.

---

### ÇİFT 24 (Benzerlik: 1.00)

**Soru 1 (ID: 5739c890-4cf9-409f-ab80-0cf4877b2384)**
Soru Kökü: 42 yaşında kadın hasta, kaşıntılı deri lezyonları şikayetiyle başvuruyor. Alınan insizyonel biyopsi materyalinde mast hücre degranülasyonu araştırılacaktır. Mast hücre granüllerini polianyonik yapıları üzerinden spesifik olarak boyamak için aşağıdaki boyalardan hangisi tercih edilmelidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Mast hücre granülleri içerdikleri yoğun heparin sülfat nedeniyle polianyonik bir karaktere sahiptir ve bazik boyalarla etkileşime girdiğinde metakromazi gösterirler. Toluidin mavisi bu amaçla kullanılan en spesifik boyadır ve mast hücre granüllerini kendi orijinal renginden farklı bir tonda görünür kılar. Eosin veya Azan gibi boyalar bu polianyonik seçiciliği sağlayamazlar.

**Soru 2 (ID: e7e1f5df-1dbe-48ef-ae75-80d80c1abad6)**
Soru Kökü: 42 yaşında kadın hasta, kaşıntılı deri lezyonları şikayetiyle başvuruyor. Alınan insizyonel biyopsi materyalinde mast hücre degranülasyonu araştırılacaktır. Mast hücre granüllerini polianyonik yapıları üzerinden spesifik olarak boyamak için aşağıdaki boyalardan hangisi tercih edilmelidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Mast hücre granülleri içerdikleri yoğun heparin sülfat nedeniyle polianyonik bir karaktere sahiptir ve bazik boyalarla etkileşime girdiğinde metakromazi gösterirler. Toluidin mavisi bu amaçla kullanılan en spesifik boyadır ve mast hücre granüllerini kendi orijinal renginden farklı bir tonda görünür kılar. Eosin veya Azan gibi boyalar bu polianyonik seçiciliği sağlayamazlar.

---

### ÇİFT 25 (Benzerlik: 1.00)

**Soru 1 (ID: a2e659d0-8e92-498d-8e2f-87a997d7f314)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

**Soru 2 (ID: 0cc91060-fd56-43f5-bc5e-4393aaae6de6)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 26 (Benzerlik: 1.00)

**Soru 1 (ID: 40de4219-72ac-48ac-85ce-7ab4e5feb2c4)**
Soru Kökü: Hücre içinde Atg proteinlerinin koordinasyonuyla izole edilen otofagozom yapısının, hidrolitik asit enzimleri barındıran primer veya sekonder lizozomlarla doğrudan birleşmesiyle ortaya çıkan nihai sindirim istasyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Otofajik vakuol
Açıklama: Otofagozom yapısı izolasyonu sağladıktan sonra litik kapasite kazanmak için lizozom ile kaynaşır; oluşan bu yeni lümenli kompleks yapı otofajik vakuol veya otofajik lizozom olarak adlandırılır. Primer lizozom işin aktif enzim taşıyıcısıdır, hedefle birleşene kadar görev yapmaz. Elementer partikül ise mitokondriyel ATP sentazdır.

**Soru 2 (ID: d88d9de2-46b1-4424-a605-ca18beae3055)**
Soru Kökü: Hücre içinde Atg proteinlerinin koordinasyonuyla izole edilen otofagozom yapısının, hidrolitik asit enzimleri barındıran primer veya sekonder lizozomlarla doğrudan birleşmesiyle ortaya çıkan nihai sindirim istasyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Otofajik vakuol
Açıklama: Otofagozom yapısı izolasyonu sağladıktan sonra litik kapasite kazanmak için lizozom ile kaynaşır; oluşan bu yeni lümenli kompleks yapı otofajik vakuol veya otofajik lizozom olarak adlandırılır. Primer lizozom işin aktif enzim taşıyıcısıdır, hedefle birleşene kadar görev yapmaz. Elementer partikül ise mitokondriyel ATP sentazdır.

---

### ÇİFT 27 (Benzerlik: 1.00)

**Soru 1 (ID: 45dd4e50-1e10-4614-b457-0b6639e99a37)**
Soru Kökü: Hücreye mekanik strese karşı yüksek oranda gerilme direnci ve yapısal desteklik sağlayan, 10-15 nanometre (nm) çapında olan ve sitoplazmik ağ oluşturmasının yanı sıra çekirdeğin altında nükleer laminanın da (Lamin A, B, C) yapısını oluşturan hücre iskeleti elemanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ara filamanlar
Açıklama: Ara (intermediate) filamanlar 10-15 nm çapındadır. Doku tipine göre değişiklik gösterirler (epitelde keratin, kasta desmin gibi) ve aynı zamanda çekirdek zarının altında bulunan nükleer laminayı oluşturarak kromatin organizasyonunu sağlarlar. Aktin 7 nm, mikrotübül ise 25 nm çapında olup nükleer lamina yapısında bulunmaz.

**Soru 2 (ID: 90dd5450-9525-4fea-a71b-90ac1bd2fda5)**
Soru Kökü: Hücreye mekanik strese karşı yüksek oranda gerilme direnci ve yapısal desteklik sağlayan, 10-15 nanometre (nm) çapında olan ve sitoplazmik ağ oluşturmasının yanı sıra çekirdeğin altında nükleer laminanın da (Lamin A, B, C) yapısını oluşturan hücre iskeleti elemanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ara filamanlar
Açıklama: Ara (intermediate) filamanlar 10-15 nm çapındadır. Doku tipine göre değişiklik gösterirler (epitelde keratin, kasta desmin gibi) ve aynı zamanda çekirdek zarının altında bulunan nükleer laminayı oluşturarak kromatin organizasyonunu sağlarlar. Aktin 7 nm, mikrotübül ise 25 nm çapında olup nükleer lamina yapısında bulunmaz.

---

### ÇİFT 28 (Benzerlik: 1.00)

**Soru 1 (ID: 5b8d88b1-cdb4-4431-abfc-87105d9e1012)**
Soru Kökü: 38 yaşında kadın hasta, estetik amaçlı cilt eksizyonu geçiriyor. Derinin dermis tabakasındaki yoğun kollajen tel ağını katyonik özellikte boyayarak rutin preparatlarda pembe renkte gösteren boya aşağıdakilerden hangisidir?
Doğru Şık (D): Eosin
Açıklama: Kollajen lifleri yapılarındaki amino asit dizilimleri nedeniyle net katyonik (+ yüklü) bölgelere sahiptir ve bu da onları asidofilik yapar. Net negatif yüklü asit bir boya olan eosin, bağ dokusundaki bu kollajen ağını pembe/kırmızı renkte karakteristik olarak boyar. Gümüşleme retiküler lifleri hedeflerken, hematoksilin bazik karakteriyle kollajene bağlanamaz.

**Soru 2 (ID: 7372edde-ec64-4c68-9fef-b58d9c693d30)**
Soru Kökü: 38 yaşında kadın hasta, estetik amaçlı cilt eksizyonu geçiriyor. Derinin dermis tabakasındaki yoğun kollajen tel ağını katyonik özellikte boyayarak rutin preparatlarda pembe renkte gösteren boya aşağıdakilerden hangisidir?
Doğru Şık (D): Eosin
Açıklama: Kollajen lifleri yapılarındaki amino asit dizilimleri nedeniyle net katyonik (+ yüklü) bölgelere sahiptir ve bu da onları asidofilik yapar. Net negatif yüklü asit bir boya olan eosin, bağ dokusundaki bu kollajen ağını pembe/kırmızı renkte karakteristik olarak boyar. Gümüşleme retiküler lifleri hedeflerken, hematoksilin bazik karakteriyle kollajene bağlanamaz.

---

### ÇİFT 29 (Benzerlik: 1.00)

**Soru 1 (ID: 6b96ea3f-04a2-431a-9a60-306812b39a1a)**
Soru Kökü: 55 yaşında obezite ve tip 2 diyabet öyküsü olan kadın hastadan alınan karaciğer biyopsisinde hepatositler içindeki yağ birikiminin (steatoz) gösterilmesi hedeflenmektedir. Bu lipid damlacıklarını spesifik olarak boyamak için aşağıdaki ajanlardan hangisi kullanılmalıdır?
Doğru Şık (B): Oil red O
Açıklama: Yağ dokusunu ve lipid damlacıklarını göstermek için rutin tespit ve boyamalardan kaçınılarak spesifik lipid boyaları tercih edilmelidir. Oil red O, nötral trigliseritleri ve lipidleri kırmızı renge boyayarak hepatik steatoz gibi klinik durumların kesin tanısında kullanılır. Trikrom bağ dokusunu, gümüşleme ise retiküler lifleri gösterirken lipidler üzerinde tanısal boyanma yapmazlar.

**Soru 2 (ID: f84777d2-53f6-4ee5-beff-40f6642d32eb)**
Soru Kökü: 55 yaşında obezite ve tip 2 diyabet öyküsü olan kadın hastadan alınan karaciğer biyopsisinde hepatositler içindeki yağ birikiminin (steatoz) gösterilmesi hedeflenmektedir. Bu lipid damlacıklarını spesifik olarak boyamak için aşağıdaki ajanlardan hangisi kullanılmalıdır?
Doğru Şık (B): Oil red O
Açıklama: Yağ dokusunu ve lipid damlacıklarını göstermek için rutin tespit ve boyamalardan kaçınılarak spesifik lipid boyaları tercih edilmelidir. Oil red O, nötral trigliseritleri ve lipidleri kırmızı renge boyayarak hepatik steatoz gibi klinik durumların kesin tanısında kullanılır. Trikrom bağ dokusunu, gümüşleme ise retiküler lifleri gösterirken lipidler üzerinde tanısal boyanma yapmazlar.

---

### ÇİFT 30 (Benzerlik: 1.00)

**Soru 1 (ID: 5d526ac2-2ebd-4c59-b289-6265ccb8c6bc)**
Soru Kökü: Net negatif yük taşıdığı için katyonik (pozitif) hücresel bölgeleri boyayan eosin gibi asit boyalara afinitesi yüksek olan alanlar aşağıdaki terimlerden hangisiyle ifade edilir?
Doğru Şık (A): Asidofil
Açıklama: Sitoplazma proteinleri ve kollajen lifleri gibi doku komponentleri katyonik (+ yüklü) bölgeler içerdiğinden, asidik yapıdaki boyalarla etkileşime girerler ve bu yapılara asidofil adı verilir. Bazofili nükleik asit kaynaklı bir özellikken, asidofili protein zenginliğini yansıtır. Rutin boyamalarda asidofilik alanlar eosin ile pembe/kırmızı tonlarda izlenir.

**Soru 2 (ID: 4f60a32b-199d-4ddd-98bf-273ddd3d4af2)**
Soru Kökü: Net negatif yük taşıdığı için katyonik (pozitif) hücresel bölgeleri boyayan eosin gibi asit boyalara afinitesi yüksek olan alanlar aşağıdaki terimlerden hangisiyle ifade edilir?
Doğru Şık (A): Asidofil
Açıklama: Sitoplazma proteinleri ve kollajen lifleri gibi doku komponentleri katyonik (+ yüklü) bölgeler içerdiğinden, asidik yapıdaki boyalarla etkileşime girerler ve bu yapılara asidofil adı verilir. Bazofili nükleik asit kaynaklı bir özellikken, asidofili protein zenginliğini yansıtır. Rutin boyamalarda asidofilik alanlar eosin ile pembe/kırmızı tonlarda izlenir.

---

### ÇİFT 31 (Benzerlik: 1.00)

**Soru 1 (ID: ced7d76d-454c-487e-8930-31115c3e7e11)**
Soru Kökü: 12 yaşında erkek çocuk, ilerleyici kas güçsüzlüğü şikayetiyle değerlendiriliyor. Kas biyopsisinde mitokondriyal myopati şüphesiyle mitokondriyonların sayım ve morfolojik analizi yapılacaktır. Bu organeli spesifik olarak boyamak için aşağıdaki yöntemlerden hangisi seçilmelidir?
Doğru Şık (E): Demirli hematoksilin
Açıklama: Işık mikroskobunda mitokondriyonları klasik yöntemlerle ayırt etmek zordur, bu yüzden organele afinitesi yüksek olan spesifik demirli hematoksilin boyası kullanılır. Bu ajan, hücresel solunum organellerindeki fosfolipid-protein komplekslerine bağlanarak onları koyu renkte belirginleştirir. Feulgen DNA için, Sudan black ise genel lipid yığınları için tercih edildiğinden organel spesifik değildir.

**Soru 2 (ID: 38153661-6b15-4350-9395-0612960121af)**
Soru Kökü: 12 yaşında erkek çocuk, ilerleyici kas güçsüzlüğü şikayetiyle değerlendiriliyor. Kas biyopsisinde mitokondriyal myopati şüphesiyle mitokondriyonların sayım ve morfolojik analizi yapılacaktır. Bu organeli spesifik olarak boyamak için aşağıdaki yöntemlerden hangisi seçilmelidir?
Doğru Şık (E): Demirli hematoksilin
Açıklama: Işık mikroskobunda mitokondriyonları klasik yöntemlerle ayırt etmek zordur, bu yüzden organele afinitesi yüksek olan spesifik demirli hematoksilin boyası kullanılır. Bu ajan, hücresel solunum organellerindeki fosfolipid-protein komplekslerine bağlanarak onları koyu renkte belirginleştirir. Feulgen DNA için, Sudan black ise genel lipid yığınları için tercih edildiğinden organel spesifik değildir.

---

### ÇİFT 32 (Benzerlik: 1.00)

**Soru 1 (ID: 849ca856-3be7-4b4e-a2f6-b219b9fcff95)**
Soru Kökü: Bağ dokusu için sevilen bir yöntem olan Mallory boyamasında kullanılan bileşenler ve hedefledikleri yapılarla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): Asit fuksin - Çekirdek kromatini
Açıklama: Mallory boyama yönteminde üç ana bileşen yer alır: Anilin mavisi kollajeni, Asit fuksin hücre sitoplazmasını, Orange G ise eritrositleri boyar. Asit fuksin, yapısı gereği asidik karakterdedir ve anyonik olan çekirdek kromatini (DNA) ile bağ kuramaz. Çekirdek boyanması için asit fuksin değil, hematoksilin gibi bazik boyalara veya Feulgen gibi spesifik reaksiyonlara ihtiyaç vardır.

**Soru 2 (ID: f8ad9189-1df5-4833-9974-71d809185dc5)**
Soru Kökü: Bağ dokusu için sevilen bir yöntem olan Mallory boyamasında kullanılan bileşenler ve hedefledikleri yapılarla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): Asit fuksin - Çekirdek kromatini
Açıklama: Mallory boyama yönteminde üç ana bileşen yer alır: Anilin mavisi kollajeni, Asit fuksin hücre sitoplazmasını, Orange G ise eritrositleri boyar. Asit fuksin, yapısı gereği asidik karakterdedir ve anyonik olan çekirdek kromatini (DNA) ile bağ kuramaz. Çekirdek boyanması için asit fuksin değil, hematoksilin gibi bazik boyalara veya Feulgen gibi spesifik reaksiyonlara ihtiyaç vardır.

---

### ÇİFT 33 (Benzerlik: 1.00)

**Soru 1 (ID: cccbb78c-bfef-4133-a662-3ce1c374bc7b)**
Soru Kökü: Hücre içi organellerin yapısal özellikleri hücrenin metabolik fonksiyonuna göre spesifik adaptasyonlar gösterir. Buna göre, yoğun steroid hormonu sentezleyen bir hücrede (örneğin leydig hücresi) mitokondrilerin iç zarı aşağıdaki morfolojik formların hangisinde izlenir?
Doğru Şık (A): Tubuler kristalı
Açıklama: Mitokondriler sadece ATP değil, steroidogenez enzimlerini de içerdikleri için steroid hormon sentezinde aktiftirler ve bu hücrelerde iç zar tübüler krista (tubuler kristalı) formunda farklılaşır. Protein sentezleyen hücrelerde lamellar (yapraksı), normal dokularda ise standart kıvrımlı izlenir. Porin delikli yapı iç zarın değil, mitokondri dış zarının özelliğidir.

**Soru 2 (ID: 50517d17-a26a-437c-a442-b75931b97c07)**
Soru Kökü: Hücre içi organellerin yapısal özellikleri hücrenin metabolik fonksiyonuna göre spesifik adaptasyonlar gösterir. Buna göre, yoğun steroid hormonu sentezleyen bir hücrede (örneğin leydig hücresi) mitokondrilerin iç zarı aşağıdaki morfolojik formların hangisinde izlenir?
Doğru Şık (A): Tubuler kristalı
Açıklama: Mitokondriler sadece ATP değil, steroidogenez enzimlerini de içerdikleri için steroid hormon sentezinde aktiftirler ve bu hücrelerde iç zar tübüler krista (tubuler kristalı) formunda farklılaşır. Protein sentezleyen hücrelerde lamellar (yapraksı), normal dokularda ise standart kıvrımlı izlenir. Porin delikli yapı iç zarın değil, mitokondri dış zarının özelliğidir.

---

### ÇİFT 34 (Benzerlik: 1.00)

**Soru 1 (ID: 0802b8da-48cd-4d33-882b-d3ef944d42d6)**
Soru Kökü: Rutin histolojik boyama işlemlerinde, kan damarları içerisindeki eritrositlerin karakteristik olarak asidofilik (kırmızı/pembe) boyanmasını sağlayan asit yapılı kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Eosin
Açıklama: Eritrositler sitoplazmalarında yoğun miktarda hemoglobin proteini barındırdıkları için katyonik özellikleri yüksektir ve asidik boyalara güçlü bağlanırlar. Net negatif yüklü olan eosin boyası bu hücreleri belirgin bir kırmızı-pembe renge boyayarak damar içi elementlerin tespitini kolaylaştırır. Hematoksilin ve toluidin mavisi bazik karakterde olduklarından asidofilik eritrosit sitoplazmasını boyayamazlar.

**Soru 2 (ID: d15d83f8-33c7-4278-ae39-2a362b92531c)**
Soru Kökü: Rutin histolojik boyama işlemlerinde, kan damarları içerisindeki eritrositlerin karakteristik olarak asidofilik (kırmızı/pembe) boyanmasını sağlayan asit yapılı kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Eosin
Açıklama: Eritrositler sitoplazmalarında yoğun miktarda hemoglobin proteini barındırdıkları için katyonik özellikleri yüksektir ve asidik boyalara güçlü bağlanırlar. Net negatif yüklü olan eosin boyası bu hücreleri belirgin bir kırmızı-pembe renge boyayarak damar içi elementlerin tespitini kolaylaştırır. Hematoksilin ve toluidin mavisi bazik karakterde olduklarından asidofilik eritrosit sitoplazmasını boyayamazlar.

---

### ÇİFT 35 (Benzerlik: 1.00)

**Soru 1 (ID: f420aac2-524a-435d-99e1-fc078fc689fb)**
Soru Kökü: Yirmi iki yaşında kadın atlet, tekrarlayan miyoklonik kasılmalar ve egzersiz intoleransı tanısı alıyor (MERRF). Mitokondriyal DNA defektine bağlı oksitatif fosforilasyon bozukluğu tespit edilen bu hastada, aşağıdakilerden hangisi mitokondrinin kendi genomu tarafından şifrelenen yapılardan (RNA/protein) biri **değildir**?
Doğru Şık (B): Mitokondriyal proteinlerin %99'u
Açıklama: Mitokondri 22 adet tRNA, 2 adet rRNA ve oksidatif fosforilasyonda görev alan 13 adet enzimi kendi DNA'sından şifreleyerek sentezleme yeteneğine sahiptir. Ancak mitokondri yapısındaki toplam proteinlerin sadece %1'ini kendisi üretir, %99'u çekirdek DNA'sının kodladığı serbest ribozomlarda sentezlenerek TOM/TIM translokazları ile dışarıdan alınır.

**Soru 2 (ID: b6740d81-dde4-49c5-9c7b-02bd76168699)**
Soru Kökü: Yirmi iki yaşında kadın atlet, tekrarlayan miyoklonik kasılmalar ve egzersiz intoleransı tanısı alıyor (MERRF). Mitokondriyal DNA defektine bağlı oksitatif fosforilasyon bozukluğu tespit edilen bu hastada, aşağıdakilerden hangisi mitokondrinin kendi genomu tarafından şifrelenen yapılardan (RNA/protein) biri **değildir**?
Doğru Şık (B): Mitokondriyal proteinlerin %99'u
Açıklama: Mitokondri 22 adet tRNA, 2 adet rRNA ve oksidatif fosforilasyonda görev alan 13 adet enzimi kendi DNA'sından şifreleyerek sentezleme yeteneğine sahiptir. Ancak mitokondri yapısındaki toplam proteinlerin sadece %1'ini kendisi üretir, %99'u çekirdek DNA'sının kodladığı serbest ribozomlarda sentezlenerek TOM/TIM translokazları ile dışarıdan alınır.

---

### ÇİFT 36 (Benzerlik: 1.00)

**Soru 1 (ID: 3bcdcd49-062c-4c2b-bde0-6ebbc98a7f58)**
Soru Kökü: Hücreye endositozla alınan makromoleküllerin veya makrootofaji ile sarılan yaşlanmış organellerin sindirimini aktif olarak başlatan, primer lizozomun hedef yapıyla birleşmiş haline ne ad verilir?
Doğru Şık (D): Sekonder lizozom
Açıklama: Primer lizozom, fagozom (dışarıdan alınan) veya otofagozom (içeriden alınan) yapılarla zarlarını kaynaştırdığında, enzimlerini substrat üzerine boşaltır ve bu aktifleşmiş yapı sekonder lizozom (heterofagozom) adını alır. Otofagozom sindirim enzimi içermeyen sadece izole edici zardır. Multiveziküler cisim ise sekonder lizozomun pinositotik keselerle sonradan birleştiği varyantıdır.

**Soru 2 (ID: 76bafc94-4789-450c-a338-d62de211e5e5)**
Soru Kökü: Hücreye endositozla alınan makromoleküllerin veya makrootofaji ile sarılan yaşlanmış organellerin sindirimini aktif olarak başlatan, primer lizozomun hedef yapıyla birleşmiş haline ne ad verilir?
Doğru Şık (D): Sekonder lizozom
Açıklama: Primer lizozom, fagozom (dışarıdan alınan) veya otofagozom (içeriden alınan) yapılarla zarlarını kaynaştırdığında, enzimlerini substrat üzerine boşaltır ve bu aktifleşmiş yapı sekonder lizozom (heterofagozom) adını alır. Otofagozom sindirim enzimi içermeyen sadece izole edici zardır. Multiveziküler cisim ise sekonder lizozomun pinositotik keselerle sonradan birleştiği varyantıdır.

---

### ÇİFT 37 (Benzerlik: 1.00)

**Soru 1 (ID: 9b6c05dd-4879-4837-9214-e3957fc56847)**
Soru Kökü: Nükleik asitlerin fosfat gruplarına afinite göstererek hücre çekirdeğini ve ribozomları karakteristik mavi renkte boyayan temel ajan aşağıdakilerden hangisidir?
Doğru Şık (A): Hematoksilin
Açıklama: Hücre çekirdeği (DNA) ve ribozomlar (rRNA), içerdikleri yoğun nükleik asit fosfat gruplarından dolayı anyonik bölgeler oluştururlar. Net pozitif yüklü bazik bir boya olan hematoksilin bu bölgelere güçlü bir şekilde bağlanarak onları mavi renge boyar. Eosin ve Orange G asidik yapılı olduklarından çekirdek komponentlerinden ziyade sitoplazmik proteinleri hedeflerler.

**Soru 2 (ID: 6e876fde-b048-453a-b10c-3a9f69b07d3e)**
Soru Kökü: Nükleik asitlerin fosfat gruplarına afinite göstererek hücre çekirdeğini ve ribozomları karakteristik mavi renkte boyayan temel ajan aşağıdakilerden hangisidir?
Doğru Şık (A): Hematoksilin
Açıklama: Hücre çekirdeği (DNA) ve ribozomlar (rRNA), içerdikleri yoğun nükleik asit fosfat gruplarından dolayı anyonik bölgeler oluştururlar. Net pozitif yüklü bazik bir boya olan hematoksilin bu bölgelere güçlü bir şekilde bağlanarak onları mavi renge boyar. Eosin ve Orange G asidik yapılı olduklarından çekirdek komponentlerinden ziyade sitoplazmik proteinleri hedeflerler.

---

### ÇİFT 38 (Benzerlik: 1.00)

**Soru 1 (ID: 93833fda-c865-4296-86fb-237a0ff669dc)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

**Soru 2 (ID: f6782a2f-180e-4864-9c33-e127b6fcae3f)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

---

### ÇİFT 39 (Benzerlik: 1.00)

**Soru 1 (ID: 54e5cec3-0420-4cc6-90ed-e18ced3bccb5)**
Soru Kökü: Sekiz aylık kız bebek; şiddetli diş eti büyümesi (gingival hiperplazi), iskelet anormallikleri ve motor zayıflık nedeniyle inceleniyor. Biyokimyasal kültürde Golgi kompleksinin cis yüzünde mannoz gruplarının fosforilasyonunu yapan transferaz enziminin genetik olarak eksik olduğu tespit ediliyor. Bu sekonder lizozom oluşum yetersizliği tablosunun (I-hücresi hastalığı) patogenezi aşağıdakilerden hangisidir?
Doğru Şık (A): M6P sinyalinin kaybı nedeniyle hidrolitik enzimlerin hücre zarına yönlenip dışarı kaçması
Açıklama: Mannoz-6-fosfat (M6P) işareti lizozomal enzimlerin kargolanma adresidir. Cis yüzünde M6P eklenemediği takdirde, enzimler trans yüzdeki M6P reseptörü tarafından tanınamaz ve lizozom vezikülü içerisine paketlenemez. Bunun yerine, varsayılan (default) yapısal salgı yolağını takip ederek kontrolsüzce plazma zarı üzerinden hücre dışına salgılanırlar; hücre içi sindirim ise durur.

**Soru 2 (ID: bb3536e5-4198-4994-932c-795afc707e2f)**
Soru Kökü: Sekiz aylık kız bebek; şiddetli diş eti büyümesi (gingival hiperplazi), iskelet anormallikleri ve motor zayıflık nedeniyle inceleniyor. Biyokimyasal kültürde Golgi kompleksinin cis yüzünde mannoz gruplarının fosforilasyonunu yapan transferaz enziminin genetik olarak eksik olduğu tespit ediliyor. Bu sekonder lizozom oluşum yetersizliği tablosunun (I-hücresi hastalığı) patogenezi aşağıdakilerden hangisidir?
Doğru Şık (A): M6P sinyalinin kaybı nedeniyle hidrolitik enzimlerin hücre zarına yönlenip dışarı kaçması
Açıklama: Mannoz-6-fosfat (M6P) işareti lizozomal enzimlerin kargolanma adresidir. Cis yüzünde M6P eklenemediği takdirde, enzimler trans yüzdeki M6P reseptörü tarafından tanınamaz ve lizozom vezikülü içerisine paketlenemez. Bunun yerine, varsayılan (default) yapısal salgı yolağını takip ederek kontrolsüzce plazma zarı üzerinden hücre dışına salgılanırlar; hücre içi sindirim ise durur.

---

### ÇİFT 40 (Benzerlik: 1.00)

**Soru 1 (ID: 655b10d7-f07a-4f60-a679-d4d4d661aea7)**
Soru Kökü: Elektron mikroskobunda mitokondri iç zarında 'tenis raketi' görünümünde izlenen ve oksidatif fosforilasyonda doğrudan ATP sentaz kompleksine karşılık gelen yapıya ne ad verilir?
Doğru Şık (D): Elementer partikül
Açıklama: Mitokondri iç zarında yer alan ATP sentaz enzimleri, elektron mikroskobunda saplı yapılarından ötürü tenis raketi şeklinde görülür ve bu spesifik yapı elementer partikül olarak adlandırılır. TOM ve TIM kompleksleri sitoplazmadan gelen proteinlerin transferinden sorumlu zar translokazlarıdır. Kardiolipin ise enzimatik bir kompleks değil, iç zarın geçirgenliğini zorlaştıran bir fosfolipiddir.

**Soru 2 (ID: 8c4b2fdb-d669-4a49-8b0b-6655c43e829a)**
Soru Kökü: Elektron mikroskobunda mitokondri iç zarında 'tenis raketi' görünümünde izlenen ve oksidatif fosforilasyonda doğrudan ATP sentaz kompleksine karşılık gelen yapıya ne ad verilir?
Doğru Şık (D): Elementer partikül
Açıklama: Mitokondri iç zarında yer alan ATP sentaz enzimleri, elektron mikroskobunda saplı yapılarından ötürü tenis raketi şeklinde görülür ve bu spesifik yapı elementer partikül olarak adlandırılır. TOM ve TIM kompleksleri sitoplazmadan gelen proteinlerin transferinden sorumlu zar translokazlarıdır. Kardiolipin ise enzimatik bir kompleks değil, iç zarın geçirgenliğini zorlaştıran bir fosfolipiddir.

---

### ÇİFT 41 (Benzerlik: 1.00)

**Soru 1 (ID: 3c28b901-e2d8-4c37-988b-0cc255f4dd0f)**
Soru Kökü: Golgi kompleksinin trans yüzünde mannoz-6-fosfat (M6P) reseptörüne bağlanan enzimlerin etrafını sararak vezikülün kopmasını sağlayan, ancak vezikül lizozom yolağına girmek üzere Golgi'den tamamen ayrıldıktan hemen sonra zardan sökülerek uzaklaşan örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Klatrin
Açıklama: Klatrin (clathrin), M6P taşıyan lizozomal protein veziküllerinin veya reseptör aracılı endositoz keselerinin zar yapısını iskelet gibi sararak tomurcuklanmayı sağlar, kese olgunlaştığında resirküle olmak üzere ayrılır. Kaveolin düz kaslarda kaveola lipid raftını şekillendirirken, flotillin planar raft proteinidir. Nükleoporin çekirdek zarı kanalı elemanıdır.

**Soru 2 (ID: a6a90893-4ca0-4898-af06-96d0745a9e27)**
Soru Kökü: Golgi kompleksinin trans yüzünde mannoz-6-fosfat (M6P) reseptörüne bağlanan enzimlerin etrafını sararak vezikülün kopmasını sağlayan, ancak vezikül lizozom yolağına girmek üzere Golgi'den tamamen ayrıldıktan hemen sonra zardan sökülerek uzaklaşan örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Klatrin
Açıklama: Klatrin (clathrin), M6P taşıyan lizozomal protein veziküllerinin veya reseptör aracılı endositoz keselerinin zar yapısını iskelet gibi sararak tomurcuklanmayı sağlar, kese olgunlaştığında resirküle olmak üzere ayrılır. Kaveolin düz kaslarda kaveola lipid raftını şekillendirirken, flotillin planar raft proteinidir. Nükleoporin çekirdek zarı kanalı elemanıdır.

---

### ÇİFT 42 (Benzerlik: 1.00)

**Soru 1 (ID: b0389334-9170-4f80-9964-b5f93f9145ed)**
Soru Kökü: Eosin boyasının histolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Nükleik asitlere bağlanarak çekirdeği spesifik olarak boyar.
Açıklama: Eosin net negatif yüklü asit yapılı bir boyadır ve hücre sitoplazması, kollajen gibi katyonik (pozitif yüklü) bölgeleri kırmızı renge boyar. Nükleik asitler ise yapıalarındaki fosfat grupları nedeniyle anyonik karaktere sahiptir ve bazik boyalar (hematoksilin) tarafından boyanırlar. Eosinin çekirdeği boyaması mekanik olarak mümkün olmadığından, bu özellik hücresel afinite prensipleriyle çelişir.

**Soru 2 (ID: d50c764d-b0fc-44f5-8216-def551dc9d1f)**
Soru Kökü: Eosin boyasının histolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Nükleik asitlere bağlanarak çekirdeği spesifik olarak boyar.
Açıklama: Eosin net negatif yüklü asit yapılı bir boyadır ve hücre sitoplazması, kollajen gibi katyonik (pozitif yüklü) bölgeleri kırmızı renge boyar. Nükleik asitler ise yapıalarındaki fosfat grupları nedeniyle anyonik karaktere sahiptir ve bazik boyalar (hematoksilin) tarafından boyanırlar. Eosinin çekirdeği boyaması mekanik olarak mümkün olmadığından, bu özellik hücresel afinite prensipleriyle çelişir.

---

### ÇİFT 43 (Benzerlik: 1.00)

**Soru 1 (ID: 41308e49-10a6-4f10-a6c0-ddfbd477320b)**
Soru Kökü: Üç yaşında erkek çocuk, ilerleyici nörolojik kayıp, nöbet geçirme ve kas hipotonisi ile pediatri kliniğine yatırılıyor. Serum analizinde dallı zincirli yağ asitlerinin yüksek seviyelerde biriktiği görülüyor. Biyopside, belirli hücre organellerinin matrikse enzim transferinde defekt olduğu (boş organeller) izlenen bu hastada, fonksiyonu kaybolan kritik katabolik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksizomal alfa-oksidasyon yıkımı
Açıklama: Kanda dallı zincirli ve çok uzun zincirli yağ asitlerinin (VLCFA) birikmesi, mikrocisimlerin (peroksizomların) enzim ithalat yolaklarında, dolayısıyla fonksiyonlarında defekt olduğunu (Zellweger spektrum bozuklukları gibi) gösterir. Mitokondri bu karmaşık yağ asitlerinin yıkımını (alfa-oksidasyon) yapamaz, peroksizom fonksiyonunun kaybı ölümcül lipid birikimlerine yol açar.

**Soru 2 (ID: d65ef145-24c6-4c1c-96cf-4aad3b051e9e)**
Soru Kökü: Üç yaşında erkek çocuk, ilerleyici nörolojik kayıp, nöbet geçirme ve kas hipotonisi ile pediatri kliniğine yatırılıyor. Serum analizinde dallı zincirli yağ asitlerinin yüksek seviyelerde biriktiği görülüyor. Biyopside, belirli hücre organellerinin matrikse enzim transferinde defekt olduğu (boş organeller) izlenen bu hastada, fonksiyonu kaybolan kritik katabolik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksizomal alfa-oksidasyon yıkımı
Açıklama: Kanda dallı zincirli ve çok uzun zincirli yağ asitlerinin (VLCFA) birikmesi, mikrocisimlerin (peroksizomların) enzim ithalat yolaklarında, dolayısıyla fonksiyonlarında defekt olduğunu (Zellweger spektrum bozuklukları gibi) gösterir. Mitokondri bu karmaşık yağ asitlerinin yıkımını (alfa-oksidasyon) yapamaz, peroksizom fonksiyonunun kaybı ölümcül lipid birikimlerine yol açar.

---

### ÇİFT 44 (Benzerlik: 1.00)

**Soru 1 (ID: 08d4251a-479f-41e4-93d5-f06ba03f7e5f)**
Soru Kökü: 60 yaşında erkek hasta, dil kökünde kitle nedeniyle opere ediliyor. Tümörün embriyolojik kaynağını belirlemek amacıyla, dokudaki spesifik bir proteinin antijenik bölgelerine karşı geliştirilmiş antikorlar kullanılarak işaretleme yapılıyor. Bu mikroskobik inceleme tekniğine ne ad verilir?
Doğru Şık (C): İmmün işaretleme
Açıklama: Bir proteinin veya hücresel ürünün antijenik epitoplarına bağlanan spesifik antikorların kullanılarak doku üzerinde işaretleme yapıldığı tekniğe immün işaretleme (immünohistokimya) adı verilir. Bu yöntem, klinik biyopsilerde tümör tiplendirmesi ve hücresel köken araştırmalarında rutin boyamalara göre kesin hedef doğruluğu sağlar. PAS karbonhidratlar için, gümüşleme ise retiküler lifler için kullanılan non-immün histokimyasal yöntemlerdir.

**Soru 2 (ID: cf348fea-504d-4b18-a67d-6a944f66f2d9)**
Soru Kökü: 60 yaşında erkek hasta, dil kökünde kitle nedeniyle opere ediliyor. Tümörün embriyolojik kaynağını belirlemek amacıyla, dokudaki spesifik bir proteinin antijenik bölgelerine karşı geliştirilmiş antikorlar kullanılarak işaretleme yapılıyor. Bu mikroskobik inceleme tekniğine ne ad verilir?
Doğru Şık (C): İmmün işaretleme
Açıklama: Bir proteinin veya hücresel ürünün antijenik epitoplarına bağlanan spesifik antikorların kullanılarak doku üzerinde işaretleme yapıldığı tekniğe immün işaretleme (immünohistokimya) adı verilir. Bu yöntem, klinik biyopsilerde tümör tiplendirmesi ve hücresel köken araştırmalarında rutin boyamalara göre kesin hedef doğruluğu sağlar. PAS karbonhidratlar için, gümüşleme ise retiküler lifler için kullanılan non-immün histokimyasal yöntemlerdir.

---

### ÇİFT 45 (Benzerlik: 1.00)

**Soru 1 (ID: 81179e25-2816-4f82-80c2-3d0b787b548b)**
Soru Kökü: Elektron mikroskobu incelemelerinde spesifik olarak içlerinde 'elektron yoğun kristaloid inklüzyonlar' barındıran, çok uzun zincirli yağ asitlerinin yıkımı ile hücre içi serbest oksijen radikallerinin düzenlenmesinden sorumlu olan mikrocisim organeli aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksizom
Açıklama: Peroksizomlar (mikrocisimler) lümenlerinde ürik asit oksidaz ve katalaz enzimi konsantrasyonundan kaynaklanan ayırt edici kristaloid inklüzyonlar bulundurur. Çok uzun zincirli yağ asitlerinin beta-oksidasyonunun başladığı yerdir. Lizozom asit hidrolaz barındırır, proteazom ise ubikütinlenmiş proteinleri yıkan zarsız bir makine kompleksidir.

**Soru 2 (ID: d689e17e-78d1-4d6a-8275-a7de82479848)**
Soru Kökü: Elektron mikroskobu incelemelerinde spesifik olarak içlerinde 'elektron yoğun kristaloid inklüzyonlar' barındıran, çok uzun zincirli yağ asitlerinin yıkımı ile hücre içi serbest oksijen radikallerinin düzenlenmesinden sorumlu olan mikrocisim organeli aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksizom
Açıklama: Peroksizomlar (mikrocisimler) lümenlerinde ürik asit oksidaz ve katalaz enzimi konsantrasyonundan kaynaklanan ayırt edici kristaloid inklüzyonlar bulundurur. Çok uzun zincirli yağ asitlerinin beta-oksidasyonunun başladığı yerdir. Lizozom asit hidrolaz barındırır, proteazom ise ubikütinlenmiş proteinleri yıkan zarsız bir makine kompleksidir.

---

### ÇİFT 46 (Benzerlik: 1.00)

**Soru 1 (ID: d3f39266-27ee-42fb-8bf1-c4f6cf6f3682)**
Soru Kökü: Hücre içi endozomal-lizozomal sindirim yolağında, aktif yıkım yapan sekonder lizozomların hücre zarından gelen pinositotik veziküllerle (sıvı içme kesecikleri) birleşmesi sonucu oluşan mikroskobik kompleks yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Multiveziküler cisim
Açıklama: Sekonder lizozomun (zaten bir fagozomla birleşmiş primer lizozom), pinositoz keseleriyle birleşerek elektron mikroskobunda lümeninde çok sayıda küçük kesecik barındıran forma dönüştüğü yapıya multiveziküler cisim denir. COP II endoplazmik retikulumdan Golgi'ye giden veziküllerin taşıyıcısıdır. Otofajik vakuol ise otofagozom ile lizozom birleşmesidir, pinositotik süreç içermez.

**Soru 2 (ID: e39efe3a-b220-4d9c-89cb-84dcfccc0efb)**
Soru Kökü: Hücre içi endozomal-lizozomal sindirim yolağında, aktif yıkım yapan sekonder lizozomların hücre zarından gelen pinositotik veziküllerle (sıvı içme kesecikleri) birleşmesi sonucu oluşan mikroskobik kompleks yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Multiveziküler cisim
Açıklama: Sekonder lizozomun (zaten bir fagozomla birleşmiş primer lizozom), pinositoz keseleriyle birleşerek elektron mikroskobunda lümeninde çok sayıda küçük kesecik barındıran forma dönüştüğü yapıya multiveziküler cisim denir. COP II endoplazmik retikulumdan Golgi'ye giden veziküllerin taşıyıcısıdır. Otofajik vakuol ise otofagozom ile lizozom birleşmesidir, pinositotik süreç içermez.

---

### ÇİFT 47 (Benzerlik: 1.00)

**Soru 1 (ID: 20ba63e4-ba99-4bde-9e3f-204e0c5d2bc6)**
Soru Kökü: Hücre çekirdeği ve ribozomlar gibi net pozitif yüklü bazik boyalarla etkileşime giren hücresel yapılara verilen genel isim aşağıdakilerden hangisidir?
Doğru Şık (B): Bazofil
Açıklama: Anyonik bölgeler içerdiği için net pozitif yüklü baz boyalar (örn. hematoksilin) ile boyanan doku alanlarına bazofil adı verilir. Hücre çekirdeği ve ribozomlar nükleik asit zenginlikleri nedeniyle yoğun bazofilik boyanma profili sergilerler. Asidofil terimi ise tam tersi mekanizmayla asit boyaları tutan hücresel bölgeler için kullanılır.

**Soru 2 (ID: 743373ed-00f1-4dcf-9a64-0dcc17beb5bd)**
Soru Kökü: Hücre çekirdeği ve ribozomlar gibi net pozitif yüklü bazik boyalarla etkileşime giren hücresel yapılara verilen genel isim aşağıdakilerden hangisidir?
Doğru Şık (B): Bazofil
Açıklama: Anyonik bölgeler içerdiği için net pozitif yüklü baz boyalar (örn. hematoksilin) ile boyanan doku alanlarına bazofil adı verilir. Hücre çekirdeği ve ribozomlar nükleik asit zenginlikleri nedeniyle yoğun bazofilik boyanma profili sergilerler. Asidofil terimi ise tam tersi mekanizmayla asit boyaları tutan hücresel bölgeler için kullanılır.

---

### ÇİFT 48 (Benzerlik: 1.00)

**Soru 1 (ID: c36e0fa6-667b-4cf2-8f59-34352c71ae0f)**
Soru Kökü: Peroksizomlar karaciğer ve böbrek hücrelerinde yoğun bulunan, hidrojen peroksit dengesi ve özgül lipid katabolizması yapan organellerdir. Aşağıdakilerden hangisi peroksizom lümeninde yer alan karakteristik enzimlerden biri **değildir**?
Doğru Şık (B): Fosfolipaz
Açıklama: Fosfolipaz, hücresel moleküllerin asidik ortamda sindirilmesini sağlayan bir lizozomal asit hidrolaz enzimidir. Peroksizomlarda hidrojen peroksit dengesini sağlayan temel enzimler katalaz (yıkıcı), peroksidaz, oksidaz (üretici) ve ayrıca kristaloid çekirdek oluşturan ürik asit oksidazdır.

**Soru 2 (ID: 1591219c-ddac-41c3-9210-c0f8ec4bb9e8)**
Soru Kökü: Peroksizomlar karaciğer ve böbrek hücrelerinde yoğun bulunan, hidrojen peroksit dengesi ve özgül lipid katabolizması yapan organellerdir. Aşağıdakilerden hangisi peroksizom lümeninde yer alan karakteristik enzimlerden biri **değildir**?
Doğru Şık (B): Fosfolipaz
Açıklama: Fosfolipaz, hücresel moleküllerin asidik ortamda sindirilmesini sağlayan bir lizozomal asit hidrolaz enzimidir. Peroksizomlarda hidrojen peroksit dengesini sağlayan temel enzimler katalaz (yıkıcı), peroksidaz, oksidaz (üretici) ve ayrıca kristaloid çekirdek oluşturan ürik asit oksidazdır.

---

### ÇİFT 49 (Benzerlik: 1.00)

**Soru 1 (ID: 0a633657-52ef-4898-8517-ccc1ce552b09)**
Soru Kökü: Normalde yağ asitleri mitokondri matriksinde enerji üretimi için katabolize edilirken, dallı zincirli yağ asitleri gibi kompleks yapılar mitokondri zarlarından geçemez. Bu tür dallı zincirli yağ asitlerinin yıkımını gerçekleştiren peroksizom spesifik süreç aşağıdakilerden hangisidir?
Doğru Şık (D): Alfa-oksidasyon yıkımı
Açıklama: Dallı zincirli yağ asitlerinin fitanik asit gibi dallı yapılarından dolayı beta-oksidasyona girmeden önce düz zincirli hale getirilmeleri gerekir. Bu enzimatik işlem (alfa-oksidasyon) mitokondrinin yapamadığı, sadece peroksizomlarda gerçekleşen çok spesifik ve önemli bir mekanizmadır. Glikozilasyon Golgi'nin asıl görevidir.

**Soru 2 (ID: e20bff55-e099-41c3-9f46-ac27ba185c5f)**
Soru Kökü: Normalde yağ asitleri mitokondri matriksinde enerji üretimi için katabolize edilirken, dallı zincirli yağ asitleri gibi kompleks yapılar mitokondri zarlarından geçemez. Bu tür dallı zincirli yağ asitlerinin yıkımını gerçekleştiren peroksizom spesifik süreç aşağıdakilerden hangisidir?
Doğru Şık (D): Alfa-oksidasyon yıkımı
Açıklama: Dallı zincirli yağ asitlerinin fitanik asit gibi dallı yapılarından dolayı beta-oksidasyona girmeden önce düz zincirli hale getirilmeleri gerekir. Bu enzimatik işlem (alfa-oksidasyon) mitokondrinin yapamadığı, sadece peroksizomlarda gerçekleşen çok spesifik ve önemli bir mekanizmadır. Glikozilasyon Golgi'nin asıl görevidir.

---

### ÇİFT 50 (Benzerlik: 1.00)

**Soru 1 (ID: ec06631f-a0e9-491a-9ace-8cfedb241f32)**
Soru Kökü: Lizozom organellerinin lümeninde makromoleküllerin spesifik yıkımından sorumlu olan çok çeşitli asit hidrolazlar bulunur. Aşağıdakilerden hangisi lizozomal hidrolitik enzimlerden biri **değildir**?
Doğru Şık (A): Katalaz
Açıklama: Proteaz, nükleaz, glikozidaz, lipaz ve fosfolipaz lizozom içerisindeki klasik asit hidrolazlardır. Katalaz ise hidrojen peroksit yıkan, peroksizom (mikrocisim) organeline spesifik bir enzimdir ve lizozomda bulunmaz.

**Soru 2 (ID: 2db47f48-e6c3-4ee7-816c-d68b62edb5ad)**
Soru Kökü: Lizozom organellerinin lümeninde makromoleküllerin spesifik yıkımından sorumlu olan çok çeşitli asit hidrolazlar bulunur. Aşağıdakilerden hangisi lizozomal hidrolitik enzimlerden biri **değildir**?
Doğru Şık (A): Katalaz
Açıklama: Proteaz, nükleaz, glikozidaz, lipaz ve fosfolipaz lizozom içerisindeki klasik asit hidrolazlardır. Katalaz ise hidrojen peroksit yıkan, peroksizom (mikrocisim) organeline spesifik bir enzimdir ve lizozomda bulunmaz.

---

### ÇİFT 51 (Benzerlik: 1.00)

**Soru 1 (ID: 02639f82-6ca6-4c89-a0d4-88b1008ab35b)**
Soru Kökü: Toluidin mavisi gibi bazı bazik boyaların, dokuya bağlandıklarında spesifik bölgelerdeki iyonik etkileşimler nedeniyle orijinal renklerinden farklı bir renk tonuna bürünmesi fenomenine ne ad verilir?
Doğru Şık (A): Metakromazi
Açıklama: Boya moleküllerinin dokudaki yoğun iyonik bölgelere yakın olarak polimerize olması sonucu absorbe ettikleri ışık dalga boyunun değişerek farklı renk vermesi olayına metakromazi denir. Toluidin mavisi bu reaksiyonu gösteren en klasik örnektir ve mavi olması gerekirken dokuyu mor-kırmızı boyar. Bazofili ise sadece bazik boyanın normal rengiyle tutunması durumudur, renk değişimini kapsamaz.

**Soru 2 (ID: e6b8d49d-4505-4019-b801-1f713e382223)**
Soru Kökü: Toluidin mavisi gibi bazı bazik boyaların, dokuya bağlandıklarında spesifik bölgelerdeki iyonik etkileşimler nedeniyle orijinal renklerinden farklı bir renk tonuna bürünmesi fenomenine ne ad verilir?
Doğru Şık (A): Metakromazi
Açıklama: Boya moleküllerinin dokudaki yoğun iyonik bölgelere yakın olarak polimerize olması sonucu absorbe ettikleri ışık dalga boyunun değişerek farklı renk vermesi olayına metakromazi denir. Toluidin mavisi bu reaksiyonu gösteren en klasik örnektir ve mavi olması gerekirken dokuyu mor-kırmızı boyar. Bazofili ise sadece bazik boyanın normal rengiyle tutunması durumudur, renk değişimini kapsamaz.

---

### ÇİFT 52 (Benzerlik: 1.00)

**Soru 1 (ID: 906cedff-d63e-4d84-9276-d45719a540b0)**
Soru Kökü: On beş yaşında kadın hasta, iskelet kası zayıflığı ve tekrarlayan kasılma (miyoklonus) şikayetleriyle başvuruyor. Yapılan kas biyopsisinde asidofilik boyanan düzensiz kırmızı kas lifleri (ragged red fibers) tespit ediliyor. Hücresel ATP sentez yetersizliği saptanan bu hastadaki sendromun etyopatogenezinde aşağıdakilerden hangisi **en olası** faktördür?
Doğru Şık (E): Mitokondriyal gen defekti
Açıklama: Myoclonic epilepsy with ragged red fibers (MERRF), mitokondriyal DNA'da meydana gelen mutasyonlara bağlı olarak elektron transport zinciri ve ATP sentez kapasitesinin bozulduğu klasik bir mitokondriyal kalıtım hastalığıdır. M6P eksikliği lizozomal depo (I-hücresi) hastalığına, peroksizom enzim eksikliği ise Zellweger sendromu gibi tablolara yol açar.

**Soru 2 (ID: de26c8e4-3677-4b38-b507-fd7d2f01d5ce)**
Soru Kökü: On beş yaşında kadın hasta, iskelet kası zayıflığı ve tekrarlayan kasılma (miyoklonus) şikayetleriyle başvuruyor. Yapılan kas biyopsisinde asidofilik boyanan düzensiz kırmızı kas lifleri (ragged red fibers) tespit ediliyor. Hücresel ATP sentez yetersizliği saptanan bu hastadaki sendromun etyopatogenezinde aşağıdakilerden hangisi **en olası** faktördür?
Doğru Şık (E): Mitokondriyal gen defekti
Açıklama: Myoclonic epilepsy with ragged red fibers (MERRF), mitokondriyal DNA'da meydana gelen mutasyonlara bağlı olarak elektron transport zinciri ve ATP sentez kapasitesinin bozulduğu klasik bir mitokondriyal kalıtım hastalığıdır. M6P eksikliği lizozomal depo (I-hücresi) hastalığına, peroksizom enzim eksikliği ise Zellweger sendromu gibi tablolara yol açar.

---

### ÇİFT 53 (Benzerlik: 1.00)

**Soru 1 (ID: adf78ffd-7387-4a04-b6da-034554a73fa6)**
Soru Kökü: Hücre çekirdeğindeki genetik materyali spesifik olarak işaretlemek amacıyla, sadece DNA yapısındaki deoksiriboz şekerini boyayan histokimyasal yöntem aşağıdakilerden hangisidir?
Doğru Şık (D): Feulgen
Açıklama: Feulgen boyaması, zayıf asit hidrolizi ile pürin bazlarını ayırarak DNA'daki deoksiriboz şekerinin aldehit gruplarını açığa çıkarma ve Schiff ayıracı ile kırmızı-mor renge boyama prensibine dayanır. RNA yapısında riboz bulunduğundan bu reaksiyon sadece DNA'ya spesifik kalır. Pironin RNA'yı, Demirli hematoksilin ise mitokondrileri hedefleyerek farklı morfolojik alanlara hizmet eder.

**Soru 2 (ID: f28fa10b-55c9-4063-9d0e-08bdc433c1ed)**
Soru Kökü: Hücre çekirdeğindeki genetik materyali spesifik olarak işaretlemek amacıyla, sadece DNA yapısındaki deoksiriboz şekerini boyayan histokimyasal yöntem aşağıdakilerden hangisidir?
Doğru Şık (D): Feulgen
Açıklama: Feulgen boyaması, zayıf asit hidrolizi ile pürin bazlarını ayırarak DNA'daki deoksiriboz şekerinin aldehit gruplarını açığa çıkarma ve Schiff ayıracı ile kırmızı-mor renge boyama prensibine dayanır. RNA yapısında riboz bulunduğundan bu reaksiyon sadece DNA'ya spesifik kalır. Pironin RNA'yı, Demirli hematoksilin ise mitokondrileri hedefleyerek farklı morfolojik alanlara hizmet eder.

---

### ÇİFT 54 (Benzerlik: 0.90)

**Soru 1 (ID: 55c2293f-e790-4885-8e44-9fce1681e5e7)**
Soru Kökü: On sekiz yaşındaki erkek hasta, ilerleyici kas güçsüzlüğü ve eklem kontraktürleri şikayetiyle başvuruyor. Yapılan genetik analizde iç çekirdek membranını nükleer laminaya bağlayan bir reseptör proteininde mutasyon saptanıyor ve hastaya Emery-Dreifuss musküler distrofisi tanısı konuyor. Bu hastada mutasyona uğramış olması en olası protein aşağıdakilerden hangisidir?
Doğru Şık (D): Emerin
Açıklama: Emerin, membranı 8 kez geçen bir Lamin B reseptörüdür ve Lamin B'nin iç çekirdek zarına tutunmasını sağlayarak çekirdek bütünlüğünü korur. Emerin veya laminleri kodlayan genlerdeki mutasyonlar, nükleer lamina yapısını bozarak Emery-Dreifuss musküler distrofisi gibi laminopatilere neden olur. Lamin A ve C doğrudan nükleer ara filaman yapısını oluşturur ancak reseptör görevi görmezler.

**Soru 2 (ID: f36f6dbd-d3c7-486c-a0c6-075ecde93792)**
Soru Kökü: On sekiz yaşında erkek hasta, iskelet kaslarında ilerleyici güçsüzlük şikayetiyle başvuruyor. Yapılan genetik analizde, nükleer laminadaki Lamin B proteinini iç çekirdek membranına bağlayan ve membranı sekiz kez geçen reseptör proteinin geninde mutasyon saptanıyor. Emery-Dreifuss musküler distrofisi patogenezinden sorumlu bu defektif protein aşağıdakilerden hangisidir?
Doğru Şık (B): Emerin
Açıklama: Emerin, iç çekirdek membranını 8 kez geçen bir Lamin B reseptörüdür ve genetik mutasyonu Emery-Dreifuss musküler distrofisi gibi bir laminopati tablosuna yol açar. LBR de bir Lamin B reseptörü olmasına rağmen membranı 8 kez geçtiği belirtilen spesifik molekül emerindir ve nükleer zarın iskelet yapıya tutunmasını sağlar. Nükleer stabilitenin kaybı, mekanik strese maruz kalan kas hücrelerinde apopitozu tetikleyerek patolojiyi yaratır.

---

### ÇİFT 55 (Benzerlik: 0.87)

**Soru 1 (ID: 9b447d87-828f-4314-aa7b-beb3d7dcf831)**
Soru Kökü: Yenidoğan işitme taramasında konjenital sensörinöral sağırlık saptanan bir hastada genetik inceleme yapılıyor. Analiz sonucunda, hücreler arası küçük moleküllerin (Ca++, cAMP) geçişini sağlayan ve hücre iskeletine tutunmayan bir bağlantı kompleksine ait bir protein mutasyonu (Cx-26) tespit ediliyor. Bu mutasyonun etkilediği hücresel bağlantı aşağıdakilerden hangisidir?
Doğru Şık (C): Oluklu bağlantı (Gap junction)
Açıklama: Gap junction (Oluklu bağlantı) yapısını oluşturan temel ünite konneksin (connexin) proteinleridir. Özellikle Cx-26 konneksin mutasyonları iç kulaktaki iyon dengesini bozarak konjenital sağırlığa yol açar. Gap junction'lar hücre iskeletine tutunmayan tek majör bağlantı tipidir.

**Soru 2 (ID: 253d1e6d-eed8-47ac-b9c1-e8f8a86377d7)**
Soru Kökü: Yeni doğan işitme tarama testinde bilateral konjenital sağırlık saptanan bir bebekte, genetik analiz sonucunda Cx-26 geninde mutasyon tespit edilmiştir. Mutasyona uğrayan bu genin sentezlediği proteinin oluşturduğu hücreler arası iletişim kurucu bağlantı birimiyle (gap junction) ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (A): Altı adet proteinin membran boyunca birleşmesiyle oluşan ve yarım kanal (hemichannel) adı verilen connexonlardan meydana gelir.
Açıklama: Gap junctionlar (oluklu bağlantılar), 6 adet connexin proteininin birleşerek oluşturduğu connexon (yarım kanal) yapılarından meydana gelir ve iki hücrenin yarım kanalları birleşerek tam bir geçiş yolu (1-2 nm) yaratır. Apikal tıkayıcı yapı tight junction'dır, iskelete bağlananlar desmozomlardır; gap junction ise yapısal olarak madde iletimi odaklıdır. Cx-26 mutasyonu direkt olarak iç kulak sıvılarının iyonik dengesini bozarak sağırlığa neden olur.

---

### ÇİFT 56 (Benzerlik: 0.86)

**Soru 1 (ID: ef3d7385-06d2-4af5-ac91-765be1bf2ac9)**
Soru Kökü: Elektron mikroskobik incelemelerde özellikle lipitleri koruyan, aynı zamanda elektron tutuculuk özelliği sayesinde ultrastrüktürel kontrast sağlayan kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Osmiyum tetroksit
Açıklama: Osmiyum tetroksit, lipit moleküllerindeki doymamış bağlara tutunarak onları fikse eden ve elektron tutucu doğasıyla elektron mikroskobisinde yüksek kontrast sağlayan spesifik bir ajandır. Gluteraldehit de elektron mikroskobisinde kullanılsa da, lipit koruyucu ve birincil elektron tutucu karakteristik osmiyum tetroksite aittir. Bu ajan aynı zamanda tespit edilen lipitlerin ışık mikroskobisinde siyah renkli izlenmesine de olanak tanır.

**Soru 2 (ID: a7fba2cb-fd73-4c48-85aa-d89f5848987f)**
Soru Kökü: Elektron mikroskobik incelemelerde özellikle hücre zarlarındaki lipidleri korumak ve elektron tutuculuk göstererek görüntü kontrastını artırmak için kullanılan spesifik fiksatif ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Osmiyum tetroksit
Açıklama: Osmiyum tetroksit, doymamış yağ asitlerine bağlanarak lipidleri stabilize eden ve elektronları tutarak yüksek mikroskobik kontrast sağlayan spesifik bir fiksatiftir. Gluteraldehit proteinleri sabitlerken lipidleri çözülmeye karşı koruyamaz, bu yüzden osmiyum tetroksit rutinde tamamlayıcı olarak kullanılır. Ayrıca bu kimyasal ışık mikroskobisinde de lipid boyası olarak işlev görebilme özelliğine sahiptir.

---

### ÇİFT 57 (Benzerlik: 0.86)

**Soru 1 (ID: ef3d7385-06d2-4af5-ac91-765be1bf2ac9)**
Soru Kökü: Elektron mikroskobik incelemelerde özellikle lipitleri koruyan, aynı zamanda elektron tutuculuk özelliği sayesinde ultrastrüktürel kontrast sağlayan kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Osmiyum tetroksit
Açıklama: Osmiyum tetroksit, lipit moleküllerindeki doymamış bağlara tutunarak onları fikse eden ve elektron tutucu doğasıyla elektron mikroskobisinde yüksek kontrast sağlayan spesifik bir ajandır. Gluteraldehit de elektron mikroskobisinde kullanılsa da, lipit koruyucu ve birincil elektron tutucu karakteristik osmiyum tetroksite aittir. Bu ajan aynı zamanda tespit edilen lipitlerin ışık mikroskobisinde siyah renkli izlenmesine de olanak tanır.

**Soru 2 (ID: 75e37208-dffa-473a-85c5-44c602d6cb05)**
Soru Kökü: Elektron mikroskobik incelemelerde özellikle hücre zarlarındaki lipidleri korumak ve elektron tutuculuk göstererek görüntü kontrastını artırmak için kullanılan spesifik fiksatif ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Osmiyum tetroksit
Açıklama: Osmiyum tetroksit, doymamış yağ asitlerine bağlanarak lipidleri stabilize eden ve elektronları tutarak yüksek mikroskobik kontrast sağlayan spesifik bir fiksatiftir. Gluteraldehit proteinleri sabitlerken lipidleri çözülmeye karşı koruyamaz, bu yüzden osmiyum tetroksit rutinde tamamlayıcı olarak kullanılır. Ayrıca bu kimyasal ışık mikroskobisinde de lipid boyası olarak işlev görebilme özelliğine sahiptir.

---

### ÇİFT 58 (Benzerlik: 0.86)

**Soru 1 (ID: f287c7a4-9bea-4f9a-b18b-e7a5a2a52c43)**
Soru Kökü: Hücre içinde kimyasal madde veya kristal birikintisi şeklinde izlenen inklüzyonlar genel olarak zarla çevrili olmayan yapılar olarak tanımlanır. Aşağıdaki inklüzyon tiplerinden hangisi, bu genel kurala bir istisna oluşturarak tek katmanlı bir zar yapısına sahiptir?
Doğru Şık (B): Lipid
Açıklama: İnklüzyonlar, kural olarak sitoplazmada serbest halde bulunan ve zarla çevrili olmayan hücresel birikintilerdir. Ancak lipid inklüzyonları, tek katmanlı bir fosfolipid zar yapısına sahip olmalarıyla bu morfolojik kuralın tek istisnasını oluştururlar. Diğer şıklarda verilen glikojen, melanin ve lipofuscin gibi endojen inklüzyonların tamamı zarsız yapılar olarak hücre içinde yer alır.

**Soru 2 (ID: 02e75b0b-012c-48ba-a5a8-730d42b24339)**
Soru Kökü: Hücre sitoplazmasında, organel yapısında olmayan ve metabolik aktivite göstermeyen kimyasal madde veya kristal birikintilere inklüzyon adı verilir. Bu bağlamda genel kural olarak inklüzyonlar zarla çevrili değilken, aşağıdakilerden hangisi tek katmanlı bir fosfolipid zarı yapısına sahip olmasıyla karakterize hücresel bir inklüzyondur?
Doğru Şık (D): Lipid
Açıklama: Glikojen partikülleri, pigmentler (melanin, lipofuskin) ve karbon birikintileri gibi klasik inklüzyonların hiçbirinde membran yapısı bulunmazken, lipid inklüzyonları (damlacıkları) sitoplazma suyuyla temas yüzeyini stabilize etmek için tek katmanlı bir zarla çevrelenir. Diğer klasik sitoplazmik organellerin (mitokondri, ER) membranı her zaman çift fosfolipid tabakasından (bilayer) oluşur. Yağ damlacığının sahip olduğu bu tek tabaka zar (monolayer), onun inklüzyon anatomisindeki yegane histolojik istisnasıdır.

---

### ÇİFT 59 (Benzerlik: 0.85)

**Soru 1 (ID: e2878d22-9614-4f3e-b117-f20e5fd581e5)**
Soru Kökü: Apopitoz sırasında hücre zarı yapısal bütünlüğünü korur ancak makrofajlar tarafından fagositozu sağlamak için zardaki lipid asimetrisi bozulur. Zarın iç yapısından dışa dönerek (eksternalizasyon) fagositoz sinyali veren molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidil serin
Açıklama: Apopitozise giren hücrede, normalde hücre zarının iç yaprağında bulunan fosfatidil serin molekülleri dış yaprağa (eksternalizasyon) yer değiştirir ve makrofajlar için bir "beni ye" sinyali oluşturur. FasL ekstrensek yolu başlatan bir dış liganddır, p53 ise G1 fazı kontrol noktası elemanıdır. Fosfatidil serin translokasyonu apopitozun en güvenilir erken membran belirteçlerindendir.

**Soru 2 (ID: 8f98abd0-4030-4ab9-ad61-311e798aecc9)**
Soru Kökü: Apopitoz sırasında hücre zarının bütünlüğü bozulmaz ancak fagositoz yapacak bağışıklık hücreleri tarafından tanınmayı (eat-me sinyali) sağlayan asimetrik bir zar değişikliği meydana gelir. Bu amaçla hücre zarının iç yaprakçığından dış yaprakçığına enzimatik olarak yer değiştiren (eksternalizasyon) fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfatidilserin
Açıklama: Sağlıklı hücrelerde hücre zarının sadece sitozolik (iç) yüzünde bulunan fosfatidilserin, apopitozun erken aşamalarında flippaz enzimi inaktivasyonu ve scramblase aktivasyonu ile dış ortama (eksternalizasyon) bakan yüzeye aktarılır. Fosfatidilkolin ve sfingomiyelin normal hücrede zaten dış yaprakçıkta yoğun bulunduğundan bir fagositoz sinyali oluşturmaz. Dış yüzeydeki fosfatidilserin, makrofajların apoptotik cisimleri hücre içine alması için spesifik reseptörlere bağlanır. Bu asimetri kaybı apopitozun en erken laboratuvar saptama (Annexin-V testi) yöntemidir.

---

### ÇİFT 60 (Benzerlik: 0.85)

**Soru 1 (ID: b0389334-9170-4f80-9964-b5f93f9145ed)**
Soru Kökü: Eosin boyasının histolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Nükleik asitlere bağlanarak çekirdeği spesifik olarak boyar.
Açıklama: Eosin net negatif yüklü asit yapılı bir boyadır ve hücre sitoplazması, kollajen gibi katyonik (pozitif yüklü) bölgeleri kırmızı renge boyar. Nükleik asitler ise yapıalarındaki fosfat grupları nedeniyle anyonik karaktere sahiptir ve bazik boyalar (hematoksilin) tarafından boyanırlar. Eosinin çekirdeği boyaması mekanik olarak mümkün olmadığından, bu özellik hücresel afinite prensipleriyle çelişir.

**Soru 2 (ID: bde0f528-463a-4036-bed7-e6006a058ef4)**
Soru Kökü: Rutin histopatolojik boyamalarda sıklıkla kullanılan Eosin boyası ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Nükleik asitlerin fosfat gruplarına afinite gösterir
Açıklama: Eosin asidik ve net negatif yüklü bir boya olduğu için, nükleik asitlerin eksi yüklü fosfat gruplarını değil, hücredeki katyonik (artı yüklü) bölgeleri boyar. Nükleik asitlerin eksi yüklü bölgeleri bazik karakterli Hematoksilin tarafından boyanır. Eosinin kollajen ve sitoplazmayı kırmızı/pembe boyaması asidofilinin temel kuralıdır.

---

### ÇİFT 61 (Benzerlik: 0.85)

**Soru 1 (ID: d50c764d-b0fc-44f5-8216-def551dc9d1f)**
Soru Kökü: Eosin boyasının histolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Nükleik asitlere bağlanarak çekirdeği spesifik olarak boyar.
Açıklama: Eosin net negatif yüklü asit yapılı bir boyadır ve hücre sitoplazması, kollajen gibi katyonik (pozitif yüklü) bölgeleri kırmızı renge boyar. Nükleik asitler ise yapıalarındaki fosfat grupları nedeniyle anyonik karaktere sahiptir ve bazik boyalar (hematoksilin) tarafından boyanırlar. Eosinin çekirdeği boyaması mekanik olarak mümkün olmadığından, bu özellik hücresel afinite prensipleriyle çelişir.

**Soru 2 (ID: bde0f528-463a-4036-bed7-e6006a058ef4)**
Soru Kökü: Rutin histopatolojik boyamalarda sıklıkla kullanılan Eosin boyası ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Nükleik asitlerin fosfat gruplarına afinite gösterir
Açıklama: Eosin asidik ve net negatif yüklü bir boya olduğu için, nükleik asitlerin eksi yüklü fosfat gruplarını değil, hücredeki katyonik (artı yüklü) bölgeleri boyar. Nükleik asitlerin eksi yüklü bölgeleri bazik karakterli Hematoksilin tarafından boyanır. Eosinin kollajen ve sitoplazmayı kırmızı/pembe boyaması asidofilinin temel kuralıdır.

---

### ÇİFT 62 (Benzerlik: 0.85)

**Soru 1 (ID: da58d9a5-fa76-4eb3-8a57-4a37a1454a1d)**
Soru Kökü: 3 yaşında kız çocuk konjenital sağırlık teşhisi alıyor. Yapılan genetik analizde Cx-26 proteinini kodlayan gende mutasyon tespit ediliyor. Bu hastada fonksiyon kaybına uğrayan hücresel bağlantı kompleksi aşağıdakilerden hangisidir?
Doğru Şık (C): Oluklu bağlantı (Gap junction)
Açıklama: Konneksin (Cx) proteinleri, 6 tanesi bir araya gelerek konnekzonları, konnekzonlar da oluklu bağlantıları (gap junction / nexus) oluşturur. Cx-26 genindeki mutasyon, iç kulaktaki iyonik dengenin sağlanamamasına yol açarak konjenital sağırlığa neden olur.

**Soru 2 (ID: 9b447d87-828f-4314-aa7b-beb3d7dcf831)**
Soru Kökü: Yenidoğan işitme taramasında konjenital sensörinöral sağırlık saptanan bir hastada genetik inceleme yapılıyor. Analiz sonucunda, hücreler arası küçük moleküllerin (Ca++, cAMP) geçişini sağlayan ve hücre iskeletine tutunmayan bir bağlantı kompleksine ait bir protein mutasyonu (Cx-26) tespit ediliyor. Bu mutasyonun etkilediği hücresel bağlantı aşağıdakilerden hangisidir?
Doğru Şık (C): Oluklu bağlantı (Gap junction)
Açıklama: Gap junction (Oluklu bağlantı) yapısını oluşturan temel ünite konneksin (connexin) proteinleridir. Özellikle Cx-26 konneksin mutasyonları iç kulaktaki iyon dengesini bozarak konjenital sağırlığa yol açar. Gap junction'lar hücre iskeletine tutunmayan tek majör bağlantı tipidir.

---

### ÇİFT 63 (Benzerlik: 0.85)

**Soru 1 (ID: 9a46fd8f-1bc8-4ba2-bf8b-9330f119b551)**
Soru Kökü: Kırk beş yaşında erkek hastadan alınan doku biyopsisinde hücrelerin apopitotik sürece girdiği saptanıyor. Bu fizyolojik yıkım sürecinde, hücre zarının normalde iç yaprağında yerleşik olan ancak apopitozla birlikte hücre dışı ortama bakan (eksternalize olan) zar fosfolipidi aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidilserin
Açıklama: Fosfatidilserin sağlıklı hücrelerde asimetrik zar yapısının sadece protoplazmik (iç) yaprağında yer alır ve apopitoz sinyaliyle dış yaprağa (ekstraselüler) takla atarak fagositoz için 'beni ye' sinyali oluşturur. Fosfatidilkolin hücre zarında en sık bulunan fosfolipid olup her iki yaprakta izlenirken, kardiolipin hücre zarında değil mitokondriyon iç zarında bulunur. Bu yer değiştirme, hücre ölüm döngüsünün histolojik membran düzeyindeki en erken ve en kritik belirteçlerinden biridir.

**Soru 2 (ID: 65f258fe-e642-450b-ba7e-5d1b42e101cf)**
Soru Kökü: 55 yaşında erkek hastadan alınan lenf nodu biyopsisinde, kemoterapötik ajanlara bağlı apopitotik hücre ölümü izlenmektedir. Apopitozun erken evresinde, makrofajlar tarafından fagositozu başlatmak için normalde sadece iç zarda yerleşik olup bu süreçte dışarıya (eksternalize) dönen fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (A): Fosfotidil serin
Açıklama: Fosfotidil serin, sağlıklı bir hücrede sadece hücre zarının protoplazmik (iç) yaprağında yerleşik durumdadır. Hücre apopitoza girdiğinde, bu asimetri bozularak fosfotidil serin ekstraselüler yüzeye (dış yaprağa) çıkar ve makrofajlar üzerindeki reseptörlere 'beni fagositozla' sinyali gönderir. Fosfotidil kolin ve sfingomyelin zaten dış yaprakta bol bulundukları için böyle bir spesifik apopitotik belirteç fonksiyonu taşımazlar.

---

### ÇİFT 64 (Benzerlik: 0.85)

**Soru 1 (ID: 550c2441-cd6b-42a9-8499-2c1b36b66dd8)**
Soru Kökü: Sitoplazmada serbest ribozomlar tarafından sentezlenen transkripsiyon faktörlerinin DNA ile etkileşime girmek üzere çekirdek içerisine taşınması gerekmektedir. Nükleer por kompleksinden bu moleküllerin çekirdek lümenine alınmasında bizzat görev alan taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (B): İmportin
Açıklama: Çekirdek içerisine 40-60 kDa'dan büyük proteinlerin (transkripsiyon faktörleri vb.) alınmasında importin proteinleri aktif taşıma görevi üstlenir. Sitoplazmaya verilmesinde (örneğin mRNA çıkışı) ise eksportin molekülleri aracılık eder. Translocator GER zarı üzerinde proteini lümene çeker, klatrin ise lizozomal/endosomal trafik veziküllerini kaplar.

**Soru 2 (ID: 43498685-5236-46c9-867c-b6c27bf23783)**
Soru Kökü: Sitoplazmada sentezlenerek nükleus içine girmesi gereken 40-60 kDa büyüklüğündeki bir transkripsiyon faktörünün, çekirdek zarfında yer alan nükleer por kompleksinden içeri geçişine doğrudan aracılık eden taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (A): İmportin
Açıklama: Çekirdek içine bir makromolekülün (örneğin transkripsiyon faktörü) nükleer pordan alınmasında importin, çekirdekten sitoplazmaya (örneğin mRNA) verilmesinde ise eksportin proteinleri aktif taşıma görevi yapar. Nükleoporin (Nup) ise porun yapısını oluşturan iskelet proteinleridir, hareketli taşıyıcı araçlar değildir. Bu taşıma sistemi çekirdek ve sitoplazma arası sinyal trafiğinin ana kapısıdır.

---

### ÇİFT 65 (Benzerlik: 0.84)

**Soru 1 (ID: 142a8886-ffaf-407e-9f81-9c6a08247105)**
Soru Kökü: Farklı tür hücreleri birbirine bağlayan ve hücre zarı dışındaki glikoproteinlerin karbonhidratlarına tutunarak heterofilik bağlantı kuran kalsiyum (Ca++) bağımlı adezyon molekülü aşağıdakilerden hangisidir?
Doğru Şık (C): Selektin (Selectin)
Açıklama: Selektinler kalsiyum bağımlı çalışan ve heterofilik (farklı tür moleküller arası) bağlantı kuran hücre adezyon molekülleridir. Kaderinler de kalsiyum bağımlıdır ancak aynı tür hücreleri bağlayan homofilik yapıdadır. İntegrinler ise kalsiyumdan bağımsız grupta yer alırlar.

**Soru 2 (ID: ea520603-10c6-4965-8ba3-3bc86a09ce5d)**
Soru Kökü: Bağlantı birimlerinde farklı tür proteinlerin karşılıklı etkileşimine heterofilik bağlantı adı verilir. Buna göre, aşağıdaki proteinlerden hangisi fizyolojik süreçlerde heterofilik bağlantı kuran kalsiyum bağımlı bir adezyon molekülüdür?
Doğru Şık (E): Selektin
Açıklama: Selektinler (P, L, E tipleri), karşı hücrenin zarındaki glikoproteinlerin karbonhidrat kısımlarına bağlandıkları için farklı tür moleküllerle ilişki kurarlar (heterofilik). Aynı zamanda işlev gösterebilmeleri için ortamda kalsiyum iyonuna ihtiyaç duyarlar. Kadherin homofilik ve Ca-bağımlıyken, integrin heterofilik ama Ca-bağımsızdır.

---

### ÇİFT 66 (Benzerlik: 0.84)

**Soru 1 (ID: 4da9e591-250e-4cf0-b419-86fbf8227ecf)**
Soru Kökü: Hücre sitoplazmasında yer alan yapılar zarlı (membranöz) veya zarsız (non-membranöz) olarak sınıflandırılır. Aşağıdaki yapılardan hangisi membranöz organeller sınıfında yer **almaz**?
Doğru Şık (C): Proteazom
Açıklama: Proteazom, ribozom, sentrozom, inklüzyonlar ve hücre iskeleti elemanları herhangi bir zarla çevrelenmediklerinden zarsız (non-membranöz) hücresel yapılar olarak sınıflandırılır. Peroksizom, lizozom, granülsüz ER ve çekirdek gibi organeller ise fosfolipid membran tabakasına sahip zarlı yapılardır.

**Soru 2 (ID: b6d2455a-ffe5-44c2-9a7e-746803cb86e7)**
Soru Kökü: İnsan ökaryot hücresinde organeller membranoz (zarlı) ve nonmembranoz (zarsız) olmak üzere sınıflandırılır. Buna göre aşağıdakilerden hangisi birim zar ile çevrili **olmayan** organel veya yapılardan biri **değildir**?
Doğru Şık (A): Peroksizom
Açıklama: Peroksizomlar, dışları tek katlı bir membranla çevrili (zarlı) organellerdir ve granülsüz ER'den tomurcuklanan zar yapısına sahiptirler. Proteozom, ribozom, sentrozom, hücre iskeleti elemanları (mikrotübül vb.) ve inklüzyon cisimcikleri ise zarsız yapılardır. Bu ayrım, sitoplazmadaki enzimatik aktivitenin kompartımanlara izole edilip edilmediğini gösteren temel histolojik kriterdir.

---

### ÇİFT 67 (Benzerlik: 0.84)

**Soru 1 (ID: da58d9a5-fa76-4eb3-8a57-4a37a1454a1d)**
Soru Kökü: 3 yaşında kız çocuk konjenital sağırlık teşhisi alıyor. Yapılan genetik analizde Cx-26 proteinini kodlayan gende mutasyon tespit ediliyor. Bu hastada fonksiyon kaybına uğrayan hücresel bağlantı kompleksi aşağıdakilerden hangisidir?
Doğru Şık (C): Oluklu bağlantı (Gap junction)
Açıklama: Konneksin (Cx) proteinleri, 6 tanesi bir araya gelerek konnekzonları, konnekzonlar da oluklu bağlantıları (gap junction / nexus) oluşturur. Cx-26 genindeki mutasyon, iç kulaktaki iyonik dengenin sağlanamamasına yol açarak konjenital sağırlığa neden olur.

**Soru 2 (ID: 253d1e6d-eed8-47ac-b9c1-e8f8a86377d7)**
Soru Kökü: Yeni doğan işitme tarama testinde bilateral konjenital sağırlık saptanan bir bebekte, genetik analiz sonucunda Cx-26 geninde mutasyon tespit edilmiştir. Mutasyona uğrayan bu genin sentezlediği proteinin oluşturduğu hücreler arası iletişim kurucu bağlantı birimiyle (gap junction) ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (A): Altı adet proteinin membran boyunca birleşmesiyle oluşan ve yarım kanal (hemichannel) adı verilen connexonlardan meydana gelir.
Açıklama: Gap junctionlar (oluklu bağlantılar), 6 adet connexin proteininin birleşerek oluşturduğu connexon (yarım kanal) yapılarından meydana gelir ve iki hücrenin yarım kanalları birleşerek tam bir geçiş yolu (1-2 nm) yaratır. Apikal tıkayıcı yapı tight junction'dır, iskelete bağlananlar desmozomlardır; gap junction ise yapısal olarak madde iletimi odaklıdır. Cx-26 mutasyonu direkt olarak iç kulak sıvılarının iyonik dengesini bozarak sağırlığa neden olur.

---

### ÇİFT 68 (Benzerlik: 0.83)

**Soru 1 (ID: 30fac7d7-8f6f-46b6-97f5-4754d899c58d)**
Soru Kökü: Mitoz mekiğinde bulunan ve her iki kutuptaki sentrioller arasından uzanarak onların birbirlerine en uzak konumda tutunmasını sağlayan mikrotübül tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Polar (İnterpolar) mikrotübüller
Açıklama: Polar (İnterpolar) mikrotübüller, kromozomlara temas etmeden ekvator bölgesinde karşı kutuptan gelen mikrotübüllerle etkileşime girerek hücre kutuplarını birbirinden iter ve sentriolleri en uzak konumda tutar. Kinetokor mikrotübüller doğrudan kromozomlara bağlanırken, astral (radiyal) mikrotübüller sentrozomu hücre zarına sabitleyerek kutuplardaki konumu korur.

**Soru 2 (ID: 6f43d027-6e05-4561-a798-c5e788162779)**
Soru Kökü: Mitoz mekiğinde üç farklı mikrotübül tipi görev alarak hücre bölünmesi sırasında kromozom ve organel hareketlerini yönetir. Sentriyolleri hücrenin zıt kutuplarında sabitleyen ve ipliklerin hücre korteksine (zarına) doğru uzanarak tüm mekiğin konum oryantasyonunu sağlayan mikrotübül grubu aşağıdakilerden hangisidir?
Doğru Şık (E): Astral (radyal) mikrotübüller
Açıklama: Mitoz mekiği sisteminde astral (radyal) mikrotübüller, sentriyollerden hücrenin iç zarına doğru yıldızsı bir şekilde uzanarak tüm mekanizmanın mekansal olarak dengelenmesini ve kutupların yerinde kalmasını sağlarlar. Kinetokor mikrotübüller doğrudan kromozoma tutunurken, polar mikrotübüller karşı kutuptan gelen diğer mikrotübüllerle ortada çaprazlaşarak hücreyi uzatır. Astral mikrotübüllerin zarı itme ve mekiği sabitleme gücü olmasaydı mitoz düzlemi asimetrik şekillenirdi.

---

### ÇİFT 69 (Benzerlik: 0.83)

**Soru 1 (ID: f44805eb-b342-4336-b248-9cfb7aa420b8)**
Soru Kökü: Programlı hücre ölümü olan apopitoz ile patolojik hücre ölümü olan nekroz arasında net morfolojik ve mekanistik farklılıklar vardır. Aşağıdaki hücresel olaylardan hangisi apopitoz sürecinde **beklenmez**?
Doğru Şık (B): Hücre şişmesi
Açıklama: Hücre şişmesi (swelling) membranın iyon pompası iflasına bağlı olarak nekrozda görülen patognomonik bir bulgudur. Apopitozda ise tam tersi hücre büzüşür, çekirdek fragmante olur, kromatin agregasyona uğrar ve zar tomurcuklanarak apoptotik cisimciklere ayrılır. Şişme ve lizis sadece nekroza aittir.

**Soru 2 (ID: 87d4e351-b0b6-4642-8789-ff46cbb0c2e8)**
Soru Kökü: Programlı hücre ölümü olan apopitoz süreci, patolojik hücre ölümü olan nekrozdan farklı morfolojik aşamalara sahiptir. Apopitozun morfolojik belirtileriyle ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (A): Hücre büzüşmesi izlenir.
Açıklama: Apopitoz sürecinde hücre hacim kaybeder ve hücre büzüşmesi (shrinkage) meydana gelir, bu sırada hücre zarı bütünlüğünü korur. Hücre şişmesi, zarın parçalanması ve içeriğin dışarı sızarak inflamasyona neden olması nekrozun tipik morfolojik ve klinik özellikleridir. Apopitoz sessiz ve inflamasyon yaratmayan bir fizyolojik tasfiye yöntemidir.

---

### ÇİFT 70 (Benzerlik: 0.83)

**Soru 1 (ID: ced7d76d-454c-487e-8930-31115c3e7e11)**
Soru Kökü: 12 yaşında erkek çocuk, ilerleyici kas güçsüzlüğü şikayetiyle değerlendiriliyor. Kas biyopsisinde mitokondriyal myopati şüphesiyle mitokondriyonların sayım ve morfolojik analizi yapılacaktır. Bu organeli spesifik olarak boyamak için aşağıdaki yöntemlerden hangisi seçilmelidir?
Doğru Şık (E): Demirli hematoksilin
Açıklama: Işık mikroskobunda mitokondriyonları klasik yöntemlerle ayırt etmek zordur, bu yüzden organele afinitesi yüksek olan spesifik demirli hematoksilin boyası kullanılır. Bu ajan, hücresel solunum organellerindeki fosfolipid-protein komplekslerine bağlanarak onları koyu renkte belirginleştirir. Feulgen DNA için, Sudan black ise genel lipid yığınları için tercih edildiğinden organel spesifik değildir.

**Soru 2 (ID: 701ffc08-d18f-4a4f-b6c4-b82aa8817a29)**
Soru Kökü: Kırk yaşında erkek hasta, ilerleyici kas zayıflığı şikayetiyle başvuruyor. Oksidatif fosforilasyon organellerindeki olası bir defekti değerlendirmek amacıyla alınan kas biyopsisinde, bu organelleri özel olarak göstermek için aşağıdaki boyama yöntemlerinden hangisi tercih edilmelidir?
Doğru Şık (B): Demirli hematoksilin
Açıklama: Demirli hematoksilin boyası, hücrenin enerji üretim merkezi olan mitokondriyonları spesifik olarak boyamak ve göstermek için tercih edilen hücresel bir yöntemdir. Klinik pratikte mitokondriyal miyopatilerin histolojik tanısında bu organellerin yoğunluğunu tespit etmek kritik olduğundan bu boyama ön plana çıkar. Feulgen DNA'yı, pironin RNA'yı, gümüşleme ise retiküler ve sinir liflerini boyarken mitokondriler üzerinde bu spesifikliği sağlamazlar.

---

### ÇİFT 71 (Benzerlik: 0.83)

**Soru 1 (ID: 38153661-6b15-4350-9395-0612960121af)**
Soru Kökü: 12 yaşında erkek çocuk, ilerleyici kas güçsüzlüğü şikayetiyle değerlendiriliyor. Kas biyopsisinde mitokondriyal myopati şüphesiyle mitokondriyonların sayım ve morfolojik analizi yapılacaktır. Bu organeli spesifik olarak boyamak için aşağıdaki yöntemlerden hangisi seçilmelidir?
Doğru Şık (E): Demirli hematoksilin
Açıklama: Işık mikroskobunda mitokondriyonları klasik yöntemlerle ayırt etmek zordur, bu yüzden organele afinitesi yüksek olan spesifik demirli hematoksilin boyası kullanılır. Bu ajan, hücresel solunum organellerindeki fosfolipid-protein komplekslerine bağlanarak onları koyu renkte belirginleştirir. Feulgen DNA için, Sudan black ise genel lipid yığınları için tercih edildiğinden organel spesifik değildir.

**Soru 2 (ID: 701ffc08-d18f-4a4f-b6c4-b82aa8817a29)**
Soru Kökü: Kırk yaşında erkek hasta, ilerleyici kas zayıflığı şikayetiyle başvuruyor. Oksidatif fosforilasyon organellerindeki olası bir defekti değerlendirmek amacıyla alınan kas biyopsisinde, bu organelleri özel olarak göstermek için aşağıdaki boyama yöntemlerinden hangisi tercih edilmelidir?
Doğru Şık (B): Demirli hematoksilin
Açıklama: Demirli hematoksilin boyası, hücrenin enerji üretim merkezi olan mitokondriyonları spesifik olarak boyamak ve göstermek için tercih edilen hücresel bir yöntemdir. Klinik pratikte mitokondriyal miyopatilerin histolojik tanısında bu organellerin yoğunluğunu tespit etmek kritik olduğundan bu boyama ön plana çıkar. Feulgen DNA'yı, pironin RNA'yı, gümüşleme ise retiküler ve sinir liflerini boyarken mitokondriler üzerinde bu spesifikliği sağlamazlar.

---

### ÇİFT 72 (Benzerlik: 0.83)

**Soru 1 (ID: 98c4fce4-4ad4-46f8-8d3b-9fb3b4e716f1)**
Soru Kökü: Üç aylık erkek bebekte ilerleyici hipotoni, konvülsiyonlar ve belirgin hepatomegali tespit ediliyor. Biyokimyasal incelemede kan plazmasında çok uzun zincirli yağ asitlerinin (VLCFA) yoğun oranda biriktiği saptanıyor. Beta-oksidasyon aşamasındaki defektten kaynaklanan bu tabloda, patolojinin yerleştiği spesifik organel aşağıdakilerden hangisidir?
Doğru Şık (B): Peroksizom
Açıklama: Mitokondriyon kısa, orta ve uzun zincirli yağ asitlerinin beta-oksidasyonunu yaparken; "çok uzun zincirli yağ asitleri (VLCFA)" spesifik olarak sadece peroksizomlarda beta-oksidasyonla kısaltıldıktan sonra mitokondriye gönderilebilir. Peroksizom disfonksiyonunda bu çok uzun zincirli asitler kanda ve dokularda birikerek ağır nörodejeneratif seyir gösterir.

**Soru 2 (ID: 16b6a519-1107-4ca1-a081-052e2090859b)**
Soru Kökü: Ağır nörolojik semptomlar ve karaciğer büyüklüğü ile doğan bir infantta, kanda çok uzun zincirli yağ asitlerinin (VLCFA) biriktiği saptanıyor. Yapılan biyopside bu moleküllerin katabolizmasını sağlayan organelin defektif olduğu belirleniyor. Söz konusu genetik hastalığın temelinde hangi organelin fonksiyon bozukluğu yer almaktadır?
Doğru Şık (D): Peroksizom
Açıklama: Çok uzun zincirli yağ asitlerinin beta-oksidasyonu ve dallı zincirli yağ asitlerinin alfa-oksidasyonu spesifik olarak peroksizom (mikrocisim) organelinde gerçekleştirilir. Mitokondriyon kısa ve orta zincirli yağ asitlerinin yıkımını yaparken, peroksizomal bir defekt (ör. Zellweger sendromu) VLCFA düzeylerinin toksik sınırlara ulaşmasına neden olur.

---

### ÇİFT 73 (Benzerlik: 0.83)

**Soru 1 (ID: e2878d22-9614-4f3e-b117-f20e5fd581e5)**
Soru Kökü: Apopitoz sırasında hücre zarı yapısal bütünlüğünü korur ancak makrofajlar tarafından fagositozu sağlamak için zardaki lipid asimetrisi bozulur. Zarın iç yapısından dışa dönerek (eksternalizasyon) fagositoz sinyali veren molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidil serin
Açıklama: Apopitozise giren hücrede, normalde hücre zarının iç yaprağında bulunan fosfatidil serin molekülleri dış yaprağa (eksternalizasyon) yer değiştirir ve makrofajlar için bir "beni ye" sinyali oluşturur. FasL ekstrensek yolu başlatan bir dış liganddır, p53 ise G1 fazı kontrol noktası elemanıdır. Fosfatidil serin translokasyonu apopitozun en güvenilir erken membran belirteçlerindendir.

**Soru 2 (ID: abf49354-bd0d-43f3-b48d-e164ee0b10fd)**
Soru Kökü: Apopitoz sürecindeki bir hücrenin zarı rüptüre olmaz ancak hücre yüzeyinde yapısal bir modifikasyon gelişir. Makrofajlar tarafından inflamasyon yaratmadan tanınıp fagosite edilmesini sağlayan bu zar değişikliği aşağıdakilerden hangisidir?
Doğru Şık (D): Fosfotidil serin eksternalizasyonu
Açıklama: Fosfotidil serin, normalde hücre zarının iç yaprağında bulunurken apopitoz sürecinde dış yaprağa (eksternalizasyon) taşınarak fagositoz için sinyal oluşturur. Nekrozda hücre zarı doğrudan hasarlanıp parçalandığı için bu tür bir eksternalizasyon mekanizması izlenmez ve zar direkt rüptüre olur. Bu lipit değişimi, hücre kalıntılarının inflamasyona yol açmadan temizlenmesindeki temel hücresel işarettir.

---

### ÇİFT 74 (Benzerlik: 0.83)

**Soru 1 (ID: e6b8d49d-4505-4019-b801-1f713e382223)**
Soru Kökü: Toluidin mavisi gibi bazı bazik boyaların, dokuya bağlandıklarında spesifik bölgelerdeki iyonik etkileşimler nedeniyle orijinal renklerinden farklı bir renk tonuna bürünmesi fenomenine ne ad verilir?
Doğru Şık (A): Metakromazi
Açıklama: Boya moleküllerinin dokudaki yoğun iyonik bölgelere yakın olarak polimerize olması sonucu absorbe ettikleri ışık dalga boyunun değişerek farklı renk vermesi olayına metakromazi denir. Toluidin mavisi bu reaksiyonu gösteren en klasik örnektir ve mavi olması gerekirken dokuyu mor-kırmızı boyar. Bazofili ise sadece bazik boyanın normal rengiyle tutunması durumudur, renk değişimini kapsamaz.

**Soru 2 (ID: be78e329-072d-42ef-9650-e0cc7feae85a)**
Soru Kökü: Toluidin mavisi gibi bazı bazik boyaların, dokunun sahip olduğu polianyonik moleküler bölgelerden ötürü orijinal boya renginden farklı bir renge dönüşmesi fenomenine ne ad verilir?
Doğru Şık (A): Metakromazi
Açıklama: Metakromazi, toluidin mavisi gibi boyaların dokudaki polianyonik yüklerin (örneğin sülfatlı GAG'lar) etkisiyle agregasyona uğrayarak renk spektrumunu değiştirmesidir. Asidofili sadece net negatif yüklü boyaların katyonik dokulara bağlanmasıdır; renk değişimi içermez. Bu özellik sayesinde mast hücre granülleri veya kıkırdak ara maddesi, mavi boyanması beklenirken mor-kırmızı renkte spesifik bir kontrast oluşturur.

---

### ÇİFT 75 (Benzerlik: 0.83)

**Soru 1 (ID: 02639f82-6ca6-4c89-a0d4-88b1008ab35b)**
Soru Kökü: Toluidin mavisi gibi bazı bazik boyaların, dokuya bağlandıklarında spesifik bölgelerdeki iyonik etkileşimler nedeniyle orijinal renklerinden farklı bir renk tonuna bürünmesi fenomenine ne ad verilir?
Doğru Şık (A): Metakromazi
Açıklama: Boya moleküllerinin dokudaki yoğun iyonik bölgelere yakın olarak polimerize olması sonucu absorbe ettikleri ışık dalga boyunun değişerek farklı renk vermesi olayına metakromazi denir. Toluidin mavisi bu reaksiyonu gösteren en klasik örnektir ve mavi olması gerekirken dokuyu mor-kırmızı boyar. Bazofili ise sadece bazik boyanın normal rengiyle tutunması durumudur, renk değişimini kapsamaz.

**Soru 2 (ID: be78e329-072d-42ef-9650-e0cc7feae85a)**
Soru Kökü: Toluidin mavisi gibi bazı bazik boyaların, dokunun sahip olduğu polianyonik moleküler bölgelerden ötürü orijinal boya renginden farklı bir renge dönüşmesi fenomenine ne ad verilir?
Doğru Şık (A): Metakromazi
Açıklama: Metakromazi, toluidin mavisi gibi boyaların dokudaki polianyonik yüklerin (örneğin sülfatlı GAG'lar) etkisiyle agregasyona uğrayarak renk spektrumunu değiştirmesidir. Asidofili sadece net negatif yüklü boyaların katyonik dokulara bağlanmasıdır; renk değişimi içermez. Bu özellik sayesinde mast hücre granülleri veya kıkırdak ara maddesi, mavi boyanması beklenirken mor-kırmızı renkte spesifik bir kontrast oluşturur.

---

### ÇİFT 76 (Benzerlik: 0.83)

**Soru 1 (ID: 264ee332-b08e-45a1-bb1b-ff688378ab47)**
Soru Kökü: Hücreler arası elektriksel ve kimyasal iletişimi sağlayan oluklu bağlantılar (gap junction, nexus) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Epitel dokuda apikale en yakın yerleşerek paraselüler sızdırmazlığı kontrol eden temel yapıdır.
Açıklama: Apikale en yakın yerleşen ve paraselüler sızdırmazlığı (geçişi) kontrol eden yapı gap junction değil, zonula occludens'tir (sıkı bağlantı). Gap junction sadece hücre sitoplazmaları arasında kanal oluşturarak iletişimi (sinaps/kalp kası uyarı iletimi vb.) sağlar, dokular arası bariyer görevi yoktur.

**Soru 2 (ID: da37aac4-c3a2-44fd-b10c-0954cbd4d635)**
Soru Kökü: Hücreler arası iletişim kurucu bağlantılar (Gap junction) ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Hücre iskeletine güçlü şekilde tutunur.
Açıklama: Zonula ve fokal adezyonlar aktine, makula adherens ve hemidesmozomlar ara filamanlara güçlü hücre iskeleti bağlantıları yaparlar. Ancak gap junction (oluklu bağlantı) tamamen küçük molekül geçişiyle (1-2 nm) ilgili bir kanaldır ve sitoplazmik tarafta hiçbir hücre iskeleti elemanına bağlanmaz.

---

### ÇİFT 77 (Benzerlik: 0.83)

**Soru 1 (ID: 2f8d0f4a-303f-45a4-aca0-c866d8efed4a)**
Soru Kökü: Mikrotübüller hücre içi birçok yaşamsal faaliyeti yürüttüğü için farmakolojik ajanların önemli hücresel hedeflerinden biridir. Aşağıdaki ilaçlardan hangisi mikrotübül polimerizasyonunu engelleyen ajanlardan biri **değildir**?
Doğru Şık (B): Paklitaksel (Taxol)
Açıklama: Paklitaksel (Taxol), mikrotübüllere bağlanarak onların depolimerizasyonunu (yıkımını) engeller ve böylece aşırı stabilizasyon yaratarak hücre bölünmesini felç eder. Buna karşın kolşisin, vinkristin, vinblastin ve nokodazol doğrudan polimerizasyonu (yapımı) engelleyerek mikrotübül oluşumunu baskılar. Bu mekanizma farkı onkolojik tedavide ajan seçimini doğrudan etkiler.

**Soru 2 (ID: ddc03d70-208a-4d12-8bce-b8a38c2cf0b1)**
Soru Kökü: Mikrotübül zehirleri, hücre iskeleti dinamiklerini bozarak hücre bölünmesini durduran önemli farmakolojik ajanlardır. Bu ajanlar arasında depolimerizasyonu engelleyerek mikrotübül polimer yapısını aşırı stabilize eden molekül aşağıdakilerden hangisidir?
Doğru Şık (E): Paklitaksel
Açıklama: Paklitaksel (Taxol), mikrotübülün eksi uçtan depolimerizasyonunu engelleyerek polimerik yapıyı dondurur ve stabilizasyon sağlar. Güçlü çeldirici olan kolşisin ve vinka alkaloidleri (vinkristin/vinblastin) ise tam tersine polimerizasyonu durdurarak mikrotübül yıkımına neden olur. Paklitakselin mikrotübülleri aşırı stabilize etmesi, hücrenin mitoz mekiğini esnek biçimde kullanamamasına ve anafaza geçememesine yol açar. Bu benzersiz stabilizasyon etkisi, paklitakseli diğer mikrotübül inhibe edici kemoterapötiklerden ayırır.

---

### ÇİFT 78 (Benzerlik: 0.83)

**Soru 1 (ID: e2878d22-9614-4f3e-b117-f20e5fd581e5)**
Soru Kökü: Apopitoz sırasında hücre zarı yapısal bütünlüğünü korur ancak makrofajlar tarafından fagositozu sağlamak için zardaki lipid asimetrisi bozulur. Zarın iç yapısından dışa dönerek (eksternalizasyon) fagositoz sinyali veren molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidil serin
Açıklama: Apopitozise giren hücrede, normalde hücre zarının iç yaprağında bulunan fosfatidil serin molekülleri dış yaprağa (eksternalizasyon) yer değiştirir ve makrofajlar için bir "beni ye" sinyali oluşturur. FasL ekstrensek yolu başlatan bir dış liganddır, p53 ise G1 fazı kontrol noktası elemanıdır. Fosfatidil serin translokasyonu apopitozun en güvenilir erken membran belirteçlerindendir.

**Soru 2 (ID: afd31ecd-3c23-4877-ae1f-6b1af80ce1e6)**
Soru Kökü: Hücre zarının iç yaprağında yerleşik olan ve hücrenin apopitotik sürece girmesiyle birlikte eksternalize olarak fagositoz için sinyal oluşturan fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (B): Fosfotidil serin
Açıklama: Fosfotidil serin normal koşullarda hücre zarının iç (protoplazmik) yaprağında bulunurken, apopitotik süreçte dış yaprağa doğru eksternalize olur. Bu yer değiştirme, hücrenin makrofajlar tarafından tanınarak ortadan kaldırılmasını sağlayan kritik bir sinyaldir. Fosfotidil kolin hücre zarındaki en sık fosfolipid olup yapısal bütünlüğü sağlarken apopitotik yer değiştirme özelliği göstermez.

---

### ÇİFT 79 (Benzerlik: 0.83)

**Soru 1 (ID: 46c60aa5-9254-4cd4-907b-6a0ea8fec487)**
Soru Kökü: Aşağıdaki proteinlerden hangisi hücreleri birbirine bağlayan makula adherens (desmozom) yapısına ait bir bileşen **değildir**?
Doğru Şık (B): Katenin
Açıklama: Katenin (catenin), zonula adherens (kuşak desmozom) yapısında kadherini hücre içindeki aktin iskeletine bağlayan proteindir. Makula adherens (nokta desmozom) yapısında ise kadherin ailesinden desmocollin ve desmoglein görev alırken, hücre içi plak proteinleri desmoplakin, plakoglobin ve plakofilinden oluşur.

**Soru 2 (ID: e7a91dc3-a304-440e-9080-c0e1118c981b)**
Soru Kökü: Epidermis tabakasındaki hücrelerin birbirlerine sıkıca tutunmasını sağlayan makula adherens (desmozom) bağlantısının sitoplazmik yüzünde belirgin plak yapıları izlenir. Aşağıdakilerden hangisi bu plak yapısında yer alarak stabiliteyi sağlayan proteinlerden biri **değildir**?
Doğru Şık (D): Vinculin
Açıklama: Desmozomun intraselüler plak yapısını oluşturan proteinler desmoplakin, plakoglobin ve plakofilindir. Vinculin ise zonula adherens ve fokal adezyon plaklarında aktin bağlayıcı bir protein olarak görev alır, desmozomun yapısında bulunmaz. Bu ayrım hücre mekanotransdüksiyonu açısından temeldir.

---

### ÇİFT 80 (Benzerlik: 0.83)

**Soru 1 (ID: cc075473-985e-47a4-b6b5-840f53b1579a)**
Soru Kökü: Hücre döngüsünün interfaz aşamasında, çekirdek içerisinde dağınık bir yumak (kromatin) formunda bulunan DNA'nın, genetik materyalin iki yavru hücreye eşit dağıtılabilmesi için bölünme fazında ileri derecede katlanarak kalın kromozom çubuklarına dönüşmesini sağlayan anahtar protein aşağıdakilerden hangisidir?
Doğru Şık (A): Kondensin
Açıklama: Kondensin (condensin), hücre bölüneceği zaman mitoz fazına girilirken aktifleşen ve DNA zincirini kendi etrafında kıvrımlar yaparak yoğun ve kalın paketler (kromozomlar) halinde katlayan yapısal proteindir. Böylece telofaz evresinde DNA'nın sitokinez kopmalarında hasar alması ve düğümlenmesi fiziksel olarak engellenir.

**Soru 2 (ID: e8b74dea-1fcb-4baf-bc39-dd2ca5b1349b)**
Soru Kökü: Hücre döngüsünün interfaz aşamasında kromatin ağında nispeten gevşek halde bulunan DNA, mitotik bölünme sırasında kutuplara düzgün çekilebilmek için kromozom yapısına dönüşmek zorundadır. Bu ileri katlanma ve kromatin yoğunlaşması işleminde katalizör rolü oynayan yapısal protein aşağıdakilerden hangisidir?
Doğru Şık (E): Kondensin
Açıklama: Hücre bölünmesi safhasında (profaz), kromatinin ileri derece katlanarak kompakt kromozom haline dönüşmesi sürecinde 'kondensin' (condensin) proteinleri doğrudan görev alır. Histon oktamerleri temel nükleozom yapısını interfazda zaten korurken, P53 DNA hasar yanıtı ve hücre döngüsü kontrolünde görevli bir tümör süpresörüdür.

---

### ÇİFT 81 (Benzerlik: 0.83)

**Soru 1 (ID: 6b96ea3f-04a2-431a-9a60-306812b39a1a)**
Soru Kökü: 55 yaşında obezite ve tip 2 diyabet öyküsü olan kadın hastadan alınan karaciğer biyopsisinde hepatositler içindeki yağ birikiminin (steatoz) gösterilmesi hedeflenmektedir. Bu lipid damlacıklarını spesifik olarak boyamak için aşağıdaki ajanlardan hangisi kullanılmalıdır?
Doğru Şık (B): Oil red O
Açıklama: Yağ dokusunu ve lipid damlacıklarını göstermek için rutin tespit ve boyamalardan kaçınılarak spesifik lipid boyaları tercih edilmelidir. Oil red O, nötral trigliseritleri ve lipidleri kırmızı renge boyayarak hepatik steatoz gibi klinik durumların kesin tanısında kullanılır. Trikrom bağ dokusunu, gümüşleme ise retiküler lifleri gösterirken lipidler üzerinde tanısal boyanma yapmazlar.

**Soru 2 (ID: e4f365d7-3af1-4fb6-ab5a-0fc7cc3a37e4)**
Soru Kökü: Kırk beş yaşında obez bir erkek hastadan alınan karaciğer biyopsisinde, hepatositler içerisinde geniş lipid (yağ) damlacıkları biriktiğinden şüphelenilmektedir. Bu lipid birikimlerini ışık mikroskobunda tespit edebilmek için patoloğun kullanması gereken en uygun boya aşağıdakilerden hangisidir?
Doğru Şık (B): Oil red O
Açıklama: Oil red O (ve Sudan black), dokulardaki lipid kompartımanlarına spesifik olarak nüfuz ederek intraselüler yağ damlacıklarını kırmızı/siyah renkte görünür kılan özel boyalardır. Giemza kan hücrelerinin incelenmesinde, demirli hematoksilin ise mitokondrileri göstermede kullanıldığından lipit teşhisinde kullanılamazlar. Rutin alkol bazlı doku takiplerinde lipitler çözündüğünden, bu boyalar genellikle özel fiksasyon veya dondurma kesitleriyle birlikte uygulanır.

---

### ÇİFT 82 (Benzerlik: 0.83)

**Soru 1 (ID: f84777d2-53f6-4ee5-beff-40f6642d32eb)**
Soru Kökü: 55 yaşında obezite ve tip 2 diyabet öyküsü olan kadın hastadan alınan karaciğer biyopsisinde hepatositler içindeki yağ birikiminin (steatoz) gösterilmesi hedeflenmektedir. Bu lipid damlacıklarını spesifik olarak boyamak için aşağıdaki ajanlardan hangisi kullanılmalıdır?
Doğru Şık (B): Oil red O
Açıklama: Yağ dokusunu ve lipid damlacıklarını göstermek için rutin tespit ve boyamalardan kaçınılarak spesifik lipid boyaları tercih edilmelidir. Oil red O, nötral trigliseritleri ve lipidleri kırmızı renge boyayarak hepatik steatoz gibi klinik durumların kesin tanısında kullanılır. Trikrom bağ dokusunu, gümüşleme ise retiküler lifleri gösterirken lipidler üzerinde tanısal boyanma yapmazlar.

**Soru 2 (ID: e4f365d7-3af1-4fb6-ab5a-0fc7cc3a37e4)**
Soru Kökü: Kırk beş yaşında obez bir erkek hastadan alınan karaciğer biyopsisinde, hepatositler içerisinde geniş lipid (yağ) damlacıkları biriktiğinden şüphelenilmektedir. Bu lipid birikimlerini ışık mikroskobunda tespit edebilmek için patoloğun kullanması gereken en uygun boya aşağıdakilerden hangisidir?
Doğru Şık (B): Oil red O
Açıklama: Oil red O (ve Sudan black), dokulardaki lipid kompartımanlarına spesifik olarak nüfuz ederek intraselüler yağ damlacıklarını kırmızı/siyah renkte görünür kılan özel boyalardır. Giemza kan hücrelerinin incelenmesinde, demirli hematoksilin ise mitokondrileri göstermede kullanıldığından lipit teşhisinde kullanılamazlar. Rutin alkol bazlı doku takiplerinde lipitler çözündüğünden, bu boyalar genellikle özel fiksasyon veya dondurma kesitleriyle birlikte uygulanır.

---

### ÇİFT 83 (Benzerlik: 0.82)

**Soru 1 (ID: de82ed2a-2d3b-404e-9d91-b02509d38a3d)**
Soru Kökü: Işık mikroskobunda dokuları sabitlemek için sıklıkla kullanılan %10'luk formalin çözeltisinin ana etken maddesi olan kimyasalın %37'lik formu aşağıdakilerden hangisidir?
Doğru Şık (A): Formaldehit
Açıklama: Işık mikroskobunda doku fiksasyonu için standart olarak kullanılan formalin, aslında formaldehitin %37'lik çözeltisine verilen addır. Bu ajan, proteinler arası çapraz bağlar kurarak metabolizmayı sonlandırır ve dokuyu morfolojik incelemeye uygun şekilde sertleştirir. Gluteraldehit ve osmiyum tetroksit ise ışık mikroskobundan ziyade elektron mikroskobisinde tercih edilen fiksatiflerdir.

**Soru 2 (ID: e1e49ab4-e5d6-4dd0-acc6-6d97ca84aee1)**
Soru Kökü: Işık mikroskobisi için rutin doku takibinde en sık tercih edilen fiksatif olan formalin, aşağıdaki kimyasal bileşenlerin hangisinden oluşmaktadır?
Doğru Şık (C): %37'lik formaldehit çözeltisi
Açıklama: Formalin, formaldehit gazının suda çözünmüş hali olan %37'lik formaldehit çözeltisinin adıdır ve klinikte sıklıkla %10'luk dilüsyonu (tamponlu) kullanılır. Gluteraldehit ve osmiyum tetroksit ışık mikroskobisinde değil, elektron mikroskobisinde kullanılan fiksatiflerdir. Formalin-fosfat tamponu kombinasyonu günümüz patoloji laboratuvarlarının vazgeçilmez temel standartıdır.

---

### ÇİFT 84 (Benzerlik: 0.82)

**Soru 1 (ID: e4f67b0e-f7b0-41f3-b539-726100181e54)**
Soru Kökü: Işık mikroskobunda dokuları sabitlemek için sıklıkla kullanılan %10'luk formalin çözeltisinin ana etken maddesi olan kimyasalın %37'lik formu aşağıdakilerden hangisidir?
Doğru Şık (A): Formaldehit
Açıklama: Işık mikroskobunda doku fiksasyonu için standart olarak kullanılan formalin, aslında formaldehitin %37'lik çözeltisine verilen addır. Bu ajan, proteinler arası çapraz bağlar kurarak metabolizmayı sonlandırır ve dokuyu morfolojik incelemeye uygun şekilde sertleştirir. Gluteraldehit ve osmiyum tetroksit ise ışık mikroskobundan ziyade elektron mikroskobisinde tercih edilen fiksatiflerdir.

**Soru 2 (ID: e1e49ab4-e5d6-4dd0-acc6-6d97ca84aee1)**
Soru Kökü: Işık mikroskobisi için rutin doku takibinde en sık tercih edilen fiksatif olan formalin, aşağıdaki kimyasal bileşenlerin hangisinden oluşmaktadır?
Doğru Şık (C): %37'lik formaldehit çözeltisi
Açıklama: Formalin, formaldehit gazının suda çözünmüş hali olan %37'lik formaldehit çözeltisinin adıdır ve klinikte sıklıkla %10'luk dilüsyonu (tamponlu) kullanılır. Gluteraldehit ve osmiyum tetroksit ışık mikroskobisinde değil, elektron mikroskobisinde kullanılan fiksatiflerdir. Formalin-fosfat tamponu kombinasyonu günümüz patoloji laboratuvarlarının vazgeçilmez temel standartıdır.

---

### ÇİFT 85 (Benzerlik: 0.82)

**Soru 1 (ID: 3011b075-61a2-45b3-8e9d-e21ddd2b00c6)**
Soru Kökü: Hücre ölüm mekanizmaları olan apopitoz ve nekrozun karşılaştırılmasında, apopitoz için aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (E): Hücre içeriğinin dışarı çıkmasına bağlı dokuda şiddetli inflamasyon görülür.
Açıklama: Nekrozda hücre zarı hasarlandığı için hücre içeriği dışarı sızar ve şiddetli doku inflamasyonuna neden olur; apopitozda ise oluşan apoptotik cisimcikler hızla fagosite edildiği için inflamasyon izlenmez. Apopitozda hücre şişmez aksine büzüşür, kromatin yoğunlaşır ve zarda membran tomurcuklanması izlenir. Bu fizyolojik tasfiye sistemi sessiz ilerler.

**Soru 2 (ID: a721c644-a443-449a-9a18-aa79e8cc8f07)**
Soru Kökü: Programlı hücre ölümü olan apopitoz ile ilgili aşağıdaki hücresel ve dokusal mekanizmalardan hangisi **yanlıştır**?
Doğru Şık (C): Apoptotik cisimlerin etrafı makrofajlarca sarıldığında çevre dokuda yoğun inflamasyon başlar.
Açıklama: Apopitoz sırasında hücre parçaları, zarları sağlam kalacak şekilde küçük apoptotik cisimciklere ayrılır ve hücre içi materyal dış ortama sızmaz; bu nedenle etraftaki dokularda hiçbir inflamatuar yanıt tetiklenmez. Nekrozda ise tam tersine hücrenin zarı parçalanır, lizozomal enzimler dokuya dökülür ve şiddetli inflamasyon başlar. İnflamasyonun yokluğu apopitozun nekrozdan ayrıldığı en klinik ve histolojik belirteçtir. Fosfatidilserin asimetrisi sayesinde süreç tamamen izole bir fagositozla sonuçlanır.

---

### ÇİFT 86 (Benzerlik: 0.82)

**Soru 1 (ID: 88fa9c4a-f2ad-42ee-b821-a7fa2ccdc4d2)**
Soru Kökü: Hücre organellerinin rutin histolojik boyanma karakteristiği incelendiğinde, net pozitif yüklü bazik bir boya olan hematoksiline yüksek afinite gösteren hücresel yapı aşağıdakilerden hangisidir?
Doğru Şık (C): Ribozomlar
Açıklama: Ribozomlar, yapılarındaki yüksek rRNA içeriği nedeniyle polianyonik (negatif yüklü) özellik taşır ve net pozitif yüklü bazik boyalarla (hematoksilin) mavi-mor renkte bazofilik boyanırlar. Kollajen, sitoplazma, eritrosit ve elastik lifler ise katyonik (pozitif yüklü) doğaları gereği net negatif yüklü asit boyalarla (eosin) kırmızı-pembe asidofilik boyanma paterni gösterir. Bu elektrostatik etkileşim kuralı, hücresel kompartımanların tanınmasında temel mekanizmadır.

**Soru 2 (ID: 950783e3-add0-4bc7-a2a5-57c6cdb2e121)**
Soru Kökü: Hematoksilin, net pozitif yüklü bazik bir boya olarak dokudaki anyonik bölgelere bağlanma eğilimindedir. Bu moleküler prensibe göre, bir hücrede hematoksilin ile en yoğun bazofilik boyanması beklenen yapılar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Çekirdek ve ribozom
Açıklama: Hematoksilin, bazik yapısından dolayı nükleik asitlerin fosfat grupları gibi negatif (anyonik) alanlarla reaksiyona girerek mavi renkli bazofilik bir boyanma oluşturur. Çekirdek (DNA içeriği) ve ribozom (rRNA içeriği) hücredeki en yoğun nükleik asit barındıran organeller oldukları için bu boya ile güçlü bir şekilde boyanırlar. Mitokondri, düz endoplazmik retikulum veya hücre iskeleti elemanları bu derecede asidik nükleik asit içermediklerinden hematoksiline afinite göstermezler.

---

### ÇİFT 87 (Benzerlik: 0.82)

**Soru 1 (ID: 3011b075-61a2-45b3-8e9d-e21ddd2b00c6)**
Soru Kökü: Hücre ölüm mekanizmaları olan apopitoz ve nekrozun karşılaştırılmasında, apopitoz için aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (E): Hücre içeriğinin dışarı çıkmasına bağlı dokuda şiddetli inflamasyon görülür.
Açıklama: Nekrozda hücre zarı hasarlandığı için hücre içeriği dışarı sızar ve şiddetli doku inflamasyonuna neden olur; apopitozda ise oluşan apoptotik cisimcikler hızla fagosite edildiği için inflamasyon izlenmez. Apopitozda hücre şişmez aksine büzüşür, kromatin yoğunlaşır ve zarda membran tomurcuklanması izlenir. Bu fizyolojik tasfiye sistemi sessiz ilerler.

**Soru 2 (ID: 87d4e351-b0b6-4642-8789-ff46cbb0c2e8)**
Soru Kökü: Programlı hücre ölümü olan apopitoz süreci, patolojik hücre ölümü olan nekrozdan farklı morfolojik aşamalara sahiptir. Apopitozun morfolojik belirtileriyle ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (A): Hücre büzüşmesi izlenir.
Açıklama: Apopitoz sürecinde hücre hacim kaybeder ve hücre büzüşmesi (shrinkage) meydana gelir, bu sırada hücre zarı bütünlüğünü korur. Hücre şişmesi, zarın parçalanması ve içeriğin dışarı sızarak inflamasyona neden olması nekrozun tipik morfolojik ve klinik özellikleridir. Apopitoz sessiz ve inflamasyon yaratmayan bir fizyolojik tasfiye yöntemidir.

---

### ÇİFT 88 (Benzerlik: 0.82)

**Soru 1 (ID: f965cf25-873c-4557-84dc-cdb22e318c61)**
Soru Kökü: 30 yaşında erkek hasta, ormanlık alanda yediği bir yabani mantar sonrası hepatotoksisite tablosuyla acil servise getiriliyor. Zehirlenmeye neden olan Phalloidin toksininin hücre iskeleti üzerindeki etkisi araştırılmaktadır. Bu toksinin doğrudan hücresel etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): F-aktin depolimerizasyonunu engellemesi
Açıklama: Bir mantar zehiri olan Phalloidin, F-aktin polimerlerine sıkıca bağlanarak onların G-aktin monomerlerine depolimerize olmasını engeller ve aktin döngüsünü kilitler. Aktin polimerizasyonunu engelleyen sitokalazin veya eksi uçta kısalmaya neden olan latrunkulin'den bu yönüyle ayrılır. Mikrotübüller ise bu toksinin doğrudan hedefi değildir.

**Soru 2 (ID: 2c64d225-c3ee-4734-b0c8-e3c7d673b05d)**
Soru Kökü: 45 yaşında kadın hasta, ormanlık alanda topladığı mantarları yediği için şiddetli karın ağrısı tablosuyla kliniğe başvuruyor. Yapılan analizde, hastanın zehirlenmesine neden olan Phalloidin adlı toksinin hücre iskeleti dinamiklerini bozduğu saptanıyor. Phalloidin molekülünün aktin mikrofilamanları üzerindeki primer yıkıcı mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Depolimerizasyonu engelleyerek aktin yıkımını durdurmak
Açıklama: Mantar zehiri olan Phalloidin, F-aktin filamanlarına sıkıca bağlanarak onların depolimerize olmasını (eksi uçtan yıkılmasını) tamamen engeller ve hücre iskeletinin yapısal esnekliğini dondurur. Latrunkulin gibi ajanlar ise eksi uçta depolimerizasyon artışıyla hızlı kısalmaya yol açarken phalloidin tam tersi mekanizma üzerinden sitotoksisite yaratır. Aktin filamanlarının fizyolojik treadmilling sürecinde yıkımın durması, hücre içi vezikül transportu ve hareketi gibi hayati olayların sonlanmasına neden olur. Bu durum özellikle yoğun metabolik aktiviteye sahip karaciğer hücrelerinde akut hasar başlatır.

---

### ÇİFT 89 (Benzerlik: 0.82)

**Soru 1 (ID: c1849dde-7ba3-450a-bf9e-33f89f17bb38)**
Soru Kökü: Yetmiş beş yaşında koroner iskemik kalp hastalığı nedeniyle eks olmuş bir erkek hastanın otopsisinde, miyokard hücrelerinde ve kortikal nöronlarında asit hidrolazlarla tam sindirilememiş elektron yoğun altın-kahverengi pigment birikintileri (rezidüel cisim) saptanıyor. Yaşlanma ve hücre stresi belirteci olan bu lizozomal atık aşağıdakilerden hangisidir?
Doğru Şık (A): Lipofuscin pigmentleri
Açıklama: Ömrü uzun olan nöron ve miyokard gibi hücrelerde, lizozomal degradasyon işlemi sırasında lipid, metal ve organik moleküllerin oksidasyonu sonucu tam sindirilemeyen materyalin birikmesiyle oluşan zarla çevrili yapılara lipofuscin denir. Hemosiderin demir, glikojen ise granülsüz ER tarafından yıkılan karbonhidrat deposudur.

**Soru 2 (ID: 9c54f45e-99fb-4e99-b188-ba478157c21a)**
Soru Kökü: Yetmiş beş yaşında koroner yetmezliği nedeniyle kaybedilen hastanın otopsisinde, kalp kası liflerinin nükleus çevrelerinde sarı-kahverengi pigmentasyon veren inklüzyonlar izleniyor. Yaşlanmış bu postmitotik hücrelerde saptanan, lipitlerin lizozomal hidrolazlarla tamamen sindirilemeyip hücresel bir artık olarak kaldığı yapı (rezidüel cisim) aşağıdakilerden hangisidir?
Doğru Şık (C): Lipofuskin pigmenti
Açıklama: Lipofuskin (yıpranma ve yaşlanma pigmenti), kalp kası ve nöron gibi uzun ömürlü ve bölünmeyen hücrelerde zamanla biriken, hidrolitik enzimlere dirençli rezidüel cisimlerdir (artık materyal). Kökeni, hücrenin makrootofajiyle yıkmaya çalıştığı eski mitokondriyal ve diğer lipit bazlı hücresel membranların kısmen sindirilmiş kalıntılarına dayanır.

---

### ÇİFT 90 (Benzerlik: 0.82)

**Soru 1 (ID: 2de84f2e-8dd7-4e7a-be74-79b893fec815)**
Soru Kökü: Yetmiş beş yaşında koroner iskemik kalp hastalığı nedeniyle eks olmuş bir erkek hastanın otopsisinde, miyokard hücrelerinde ve kortikal nöronlarında asit hidrolazlarla tam sindirilememiş elektron yoğun altın-kahverengi pigment birikintileri (rezidüel cisim) saptanıyor. Yaşlanma ve hücre stresi belirteci olan bu lizozomal atık aşağıdakilerden hangisidir?
Doğru Şık (A): Lipofuscin pigmentleri
Açıklama: Ömrü uzun olan nöron ve miyokard gibi hücrelerde, lizozomal degradasyon işlemi sırasında lipid, metal ve organik moleküllerin oksidasyonu sonucu tam sindirilemeyen materyalin birikmesiyle oluşan zarla çevrili yapılara lipofuscin denir. Hemosiderin demir, glikojen ise granülsüz ER tarafından yıkılan karbonhidrat deposudur.

**Soru 2 (ID: 9c54f45e-99fb-4e99-b188-ba478157c21a)**
Soru Kökü: Yetmiş beş yaşında koroner yetmezliği nedeniyle kaybedilen hastanın otopsisinde, kalp kası liflerinin nükleus çevrelerinde sarı-kahverengi pigmentasyon veren inklüzyonlar izleniyor. Yaşlanmış bu postmitotik hücrelerde saptanan, lipitlerin lizozomal hidrolazlarla tamamen sindirilemeyip hücresel bir artık olarak kaldığı yapı (rezidüel cisim) aşağıdakilerden hangisidir?
Doğru Şık (C): Lipofuskin pigmenti
Açıklama: Lipofuskin (yıpranma ve yaşlanma pigmenti), kalp kası ve nöron gibi uzun ömürlü ve bölünmeyen hücrelerde zamanla biriken, hidrolitik enzimlere dirençli rezidüel cisimlerdir (artık materyal). Kökeni, hücrenin makrootofajiyle yıkmaya çalıştığı eski mitokondriyal ve diğer lipit bazlı hücresel membranların kısmen sindirilmiş kalıntılarına dayanır.

---

### ÇİFT 91 (Benzerlik: 0.82)

**Soru 1 (ID: 83cd9d3e-e4dc-40db-b306-f89629e06450)**
Soru Kökü: Otuz beş yaşında kas güçsüzlüğü ve egzersiz intoleransı şikayetleri olan hastaya kas biyopsisi yapılmış, membran düzeyinde bir mitokondriyal patolojiden şüphelenilmiştir. Kas lifleri içerisindeki mitokondriyal yoğunluğu ışık mikroskobunda en spesifik biçimde gösterecek boya aşağıdakilerden hangisidir?
Doğru Şık (C): Demirli hematoksilin
Açıklama: Demirli hematoksilin, hücre içindeki mitokondriyal kütleyi spesifik bir reaksiyonla karartarak gösteren ve özellikle miyopati değerlendirmelerinde mitokondri morfolojisini incelemek için tasarlanmış bir boyadır. Feulgen DNA'yı, Pironin RNA'yı hedeflediği için mitokondri membran yapısına bağlanamazlar. Ragged-red fibrilleri gibi mitokondriyal birikimlerin araştırılmasında bu seçici hücresel boya kritik bir tanı aracıdır.

**Soru 2 (ID: 701ffc08-d18f-4a4f-b6c4-b82aa8817a29)**
Soru Kökü: Kırk yaşında erkek hasta, ilerleyici kas zayıflığı şikayetiyle başvuruyor. Oksidatif fosforilasyon organellerindeki olası bir defekti değerlendirmek amacıyla alınan kas biyopsisinde, bu organelleri özel olarak göstermek için aşağıdaki boyama yöntemlerinden hangisi tercih edilmelidir?
Doğru Şık (B): Demirli hematoksilin
Açıklama: Demirli hematoksilin boyası, hücrenin enerji üretim merkezi olan mitokondriyonları spesifik olarak boyamak ve göstermek için tercih edilen hücresel bir yöntemdir. Klinik pratikte mitokondriyal miyopatilerin histolojik tanısında bu organellerin yoğunluğunu tespit etmek kritik olduğundan bu boyama ön plana çıkar. Feulgen DNA'yı, pironin RNA'yı, gümüşleme ise retiküler ve sinir liflerini boyarken mitokondriler üzerinde bu spesifikliği sağlamazlar.

---

### ÇİFT 92 (Benzerlik: 0.82)

**Soru 1 (ID: ef876646-1c55-4af9-bd44-5ef6450179e6)**
Soru Kökü: Hücre içi vezikül trafiğinin yönlendirilmesinde görev alan örtü proteinleri vezikülün kaynaklandığı ve yöneldiği organele göre değişir. Buna göre, Golgi kompleksinin kendi iç sarnıçları arasındaki retrograd vezikül taşınmasında veziküllerin etrafını saran örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): COP I
Açıklama: Golgi cismi içinde sarnıçlar arası (retrograd) ve Golgi'den GER'e geri dönüş vezikülleri COP I (coatomer I) ile kaplanırken, GER'den Golgi'ye giden anterograd veziküller COP II ile kaplanır. Klatrin proteini ise trans Golgi'den lizozoma giden ve hücre zarından reseptör aracılı endositoz ile oluşan veziküllerin kılıfını oluşturur.

**Soru 2 (ID: 7a7c540b-8809-41b9-90ec-b170e733ea03)**
Soru Kökü: Golgi kompleksinin trans yüzünden lizozomal enzimlerin ayrılması ve hedef bölgeye yönelmesi için vezikül oluşumunu çevreleyerek mekanik destek sağlayan, vezikül koptuktan sonra ise sirkülasyona geri dönen kılıf proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Klatrin
Açıklama: Golgi trans yüzeyinde mannoz-6-fosfat reseptörüne bağlanan enzimlerin etrafı vezikülleşme sırasında klatrin proteinleri ile çevrelenir. Vezikül zardan ayrıldığında klatrinler çözülerek sirkülasyona geri döner. COP II anterograd transportta (GER'den Golgi'ye) görevli kılıf proteini iken, klatrin lizozom hedeflemesi ve endositozda rol alır.

---

### ÇİFT 93 (Benzerlik: 0.82)

**Soru 1 (ID: a925e3ea-3e96-44e5-a020-caf173244867)**
Soru Kökü: İki hücre arasındaki elektriksel ve kimyasal sinyal iletimini sağlayan, connexin proteinlerinin altılı gruplar halinde bir araya gelerek yarım kanallar (connexon) oluşturduğu Gap junction (oluklu bağlantı) yapısı ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Hücre içindeki aktin veya ara filaman iskeletine sıkıca entegre durumdadır.
Açıklama: Oluklu bağlantılar (Gap junction) yalnızca komşu hücreler arasında küçük molekül geçişi için kanal açarlar ve hücre iskeletine (aktin veya ara filamanlara) bağlanmazlar. Desmozomlar, zonulalar veya fokal adezyonlar ise hücre iskeletiyle güçlü yapısal bağlar kurarlar. Gap junctionların iskelet bağlantısı kurmaması, fonksiyonlarının mekanik destekten ziyade saf iletişim odaklı olduğunu gösterir.

**Soru 2 (ID: da37aac4-c3a2-44fd-b10c-0954cbd4d635)**
Soru Kökü: Hücreler arası iletişim kurucu bağlantılar (Gap junction) ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Hücre iskeletine güçlü şekilde tutunur.
Açıklama: Zonula ve fokal adezyonlar aktine, makula adherens ve hemidesmozomlar ara filamanlara güçlü hücre iskeleti bağlantıları yaparlar. Ancak gap junction (oluklu bağlantı) tamamen küçük molekül geçişiyle (1-2 nm) ilgili bir kanaldır ve sitoplazmik tarafta hiçbir hücre iskeleti elemanına bağlanmaz.

---

### ÇİFT 94 (Benzerlik: 0.82)

**Soru 1 (ID: 0dbf8a63-ccd3-48cd-b5d2-c8df72150df1)**
Soru Kökü: Apopitoz sürecinde ekstrensek yolak, hücre zarı dışından gelen spesifik sinyallerle aktive olur. Aşağıdakilerden hangisi bu ekstrensek yolağı başlatan ölüm bölgesi (death domain) aktivatörlerinden biri **değildir**?
Doğru Şık (D): Endoplazmik retikulum
Açıklama: Endoplazmik retikulum (ER) stresi ve mitokondriyal hasarlar, hücre dışı sinyallerle değil, hücre içi uyarılarla çalışan intrensek apopitoz yolağını aktive eder. FasL, TNF ve TRAIL ise hücre zarındaki ölüm bölgesi (death domain) reseptörlerine bağlanarak dışarıdan ölüm emri veren ekstrensek yolak aktivatörleridir. Bu ayırım hücresel hasarın kaynağını gösterir.

**Soru 2 (ID: 6dad7129-21ab-40c9-9342-a9577d3419ed)**
Soru Kökü: Hücre zarında bulunan ölüm bölgelerinin (death domain) uyarılması ile başlayan ve inflamatuvar hücrelerin hedeflenen hücreyi yok etmesini sağlayan apopitozis ekstrensek yolağının kilit tetikleyicisi aşağıdakilerden hangisidir?
Doğru Şık (E): FasL, TNF ve TRAIL
Açıklama: FasL, TNF ve TRAIL gibi dış sinyal molekülleri, hücre zarındaki ölüm bölgelerine bağlanarak apopitozun ekstrensek yolağını başlatırlar. Mitokondri kaynaklı sitokrom c ve hücre içi proteinler ise iç uyarılarla başlayan intrensek yolağın elemanlarıdır. Ekstrensek yolak, immün sistemin dışarıdan müdahale ile sorunlu hücreyi elimine etmesinin temel aracıdır.

---

### ÇİFT 95 (Benzerlik: 0.81)

**Soru 1 (ID: 6a3ad5d2-d994-45ee-ada3-2f36480301c4)**
Soru Kökü: Bazik boyalar net pozitif yüklü olup dokulardaki anyonik bölgelere bağlanarak bazofilik boyanmayı sağlarlar. Buna göre aşağıdaki hücresel komponentlerden hangisinin hematoksilin ile bazofilik boyanması **beklenmez**?
Doğru Şık (A): Kollajen lifleri
Açıklama: Kollajen lifleri net katyonik (+ yüklü) bir karaktere sahip olduğundan bazik değil, asidik boyalarla (eozin gibi) asidofilik boyanır. Hematoksilin net pozitif bir boyadır; bu nedenle fosfat, sülfat ve karboksil grupları gibi negatif (anyonik) alanları kuvvetle boyar. Ribozomlar yüksek oranda RNA (fosfat) içerdiklerinden karakteristik olarak yoğun bazofili gösterirler.

**Soru 2 (ID: 950783e3-add0-4bc7-a2a5-57c6cdb2e121)**
Soru Kökü: Hematoksilin, net pozitif yüklü bazik bir boya olarak dokudaki anyonik bölgelere bağlanma eğilimindedir. Bu moleküler prensibe göre, bir hücrede hematoksilin ile en yoğun bazofilik boyanması beklenen yapılar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Çekirdek ve ribozom
Açıklama: Hematoksilin, bazik yapısından dolayı nükleik asitlerin fosfat grupları gibi negatif (anyonik) alanlarla reaksiyona girerek mavi renkli bazofilik bir boyanma oluşturur. Çekirdek (DNA içeriği) ve ribozom (rRNA içeriği) hücredeki en yoğun nükleik asit barındıran organeller oldukları için bu boya ile güçlü bir şekilde boyanırlar. Mitokondri, düz endoplazmik retikulum veya hücre iskeleti elemanları bu derecede asidik nükleik asit içermediklerinden hematoksiline afinite göstermezler.

---

### ÇİFT 96 (Benzerlik: 0.81)

**Soru 1 (ID: c8b0ec41-9d61-4075-b058-a299b9fab9c5)**
Soru Kökü: Hücrelerde bulunan ara filaman (intermedier filaman) türleri ve vücutta yerleşim gösterdikleri dokularla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (A): Tip IV Paranemin – Göz lens lifleri
Açıklama: Paranemin, syncoilin ve synemin ile birlikte kasta lokalize olan Tip IV ara filaman grubudur. Göz lens liflerinde bulunan spesifik ara filamanlar Tip VI sınıfında yer alan phakinin ve filesin'dir. Mezenkimde vimentin, epitelde keratin varlığı hücresel tanıda değişmez kurallardır.

**Soru 2 (ID: c423ddf8-df0f-4d1a-9ef2-434d98d870f9)**
Soru Kökü: Hücre iskeletinin dokuya özgü dağılım gösteren ara filaman (intermedier filaman) proteinleri ve bulundukları hücre tipleriyle ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (C): Vimentin – Epitel kökenli hücreler
Açıklama: Vimentin (Tip III ara filaman), embriyolojik olarak mezanşimden köken alan dokularda hücre iskeletini oluşturur. Epitel hücrelerinin karakteristik ara filamanı vimentin değil keratindir. Desmin iskelet ve düz kasta, GFAP nöroglial hücrelerde, periferin periferik nöronlarda spesifik dağılım sergiler. Ara filamanların bu yüksek doku spesifitesi, histopatolojik incelemelerde hücre kökeninin tayini için vazgeçilmez bir tanısal mekanizmadır.

---

### ÇİFT 97 (Benzerlik: 0.81)

**Soru 1 (ID: 9a46fd8f-1bc8-4ba2-bf8b-9330f119b551)**
Soru Kökü: Kırk beş yaşında erkek hastadan alınan doku biyopsisinde hücrelerin apopitotik sürece girdiği saptanıyor. Bu fizyolojik yıkım sürecinde, hücre zarının normalde iç yaprağında yerleşik olan ancak apopitozla birlikte hücre dışı ortama bakan (eksternalize olan) zar fosfolipidi aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidilserin
Açıklama: Fosfatidilserin sağlıklı hücrelerde asimetrik zar yapısının sadece protoplazmik (iç) yaprağında yer alır ve apopitoz sinyaliyle dış yaprağa (ekstraselüler) takla atarak fagositoz için 'beni ye' sinyali oluşturur. Fosfatidilkolin hücre zarında en sık bulunan fosfolipid olup her iki yaprakta izlenirken, kardiolipin hücre zarında değil mitokondriyon iç zarında bulunur. Bu yer değiştirme, hücre ölüm döngüsünün histolojik membran düzeyindeki en erken ve en kritik belirteçlerinden biridir.

**Soru 2 (ID: afd31ecd-3c23-4877-ae1f-6b1af80ce1e6)**
Soru Kökü: Hücre zarının iç yaprağında yerleşik olan ve hücrenin apopitotik sürece girmesiyle birlikte eksternalize olarak fagositoz için sinyal oluşturan fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (B): Fosfotidil serin
Açıklama: Fosfotidil serin normal koşullarda hücre zarının iç (protoplazmik) yaprağında bulunurken, apopitotik süreçte dış yaprağa doğru eksternalize olur. Bu yer değiştirme, hücrenin makrofajlar tarafından tanınarak ortadan kaldırılmasını sağlayan kritik bir sinyaldir. Fosfotidil kolin hücre zarındaki en sık fosfolipid olup yapısal bütünlüğü sağlarken apopitotik yer değiştirme özelliği göstermez.

---

### ÇİFT 98 (Benzerlik: 0.81)

**Soru 1 (ID: 34a2dd80-3cb6-4372-aa3f-546955ce970d)**
Soru Kökü: Otuz iki yaşında kadın hastanın kronik alerjik döküntüleri nedeniyle alınan cilt biyopsisinde, metakromazi özelliğinden faydalanarak dokudaki bazofil ve mast hücre granüllerini spesifik olarak göstermek isteyen bir patoloğun aşağıdaki boyalardan hangisini kullanması beklenir?
Doğru Şık (A): Toluidin mavisi
Açıklama: Toluidin mavisi, dokunun polianyonik bölgelerine bağlandığında boyanın kendi renginden farklı bir renk vermesi olayını (metakromazi) tetikleyen tipik bir bazik boyadır ve mast/bazofil granüllerini göstermede kullanılır. Sudan black lipitleri, Orsein elastik lifleri boyar ve metakromazi özelliği taşımazlar. Histopatolojide degranülasyon analizi için toluidin mavisi vazgeçilmezdir.

**Soru 2 (ID: 5739c890-4cf9-409f-ab80-0cf4877b2384)**
Soru Kökü: 42 yaşında kadın hasta, kaşıntılı deri lezyonları şikayetiyle başvuruyor. Alınan insizyonel biyopsi materyalinde mast hücre degranülasyonu araştırılacaktır. Mast hücre granüllerini polianyonik yapıları üzerinden spesifik olarak boyamak için aşağıdaki boyalardan hangisi tercih edilmelidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Mast hücre granülleri içerdikleri yoğun heparin sülfat nedeniyle polianyonik bir karaktere sahiptir ve bazik boyalarla etkileşime girdiğinde metakromazi gösterirler. Toluidin mavisi bu amaçla kullanılan en spesifik boyadır ve mast hücre granüllerini kendi orijinal renginden farklı bir tonda görünür kılar. Eosin veya Azan gibi boyalar bu polianyonik seçiciliği sağlayamazlar.

---

### ÇİFT 99 (Benzerlik: 0.81)

**Soru 1 (ID: 34a2dd80-3cb6-4372-aa3f-546955ce970d)**
Soru Kökü: Otuz iki yaşında kadın hastanın kronik alerjik döküntüleri nedeniyle alınan cilt biyopsisinde, metakromazi özelliğinden faydalanarak dokudaki bazofil ve mast hücre granüllerini spesifik olarak göstermek isteyen bir patoloğun aşağıdaki boyalardan hangisini kullanması beklenir?
Doğru Şık (A): Toluidin mavisi
Açıklama: Toluidin mavisi, dokunun polianyonik bölgelerine bağlandığında boyanın kendi renginden farklı bir renk vermesi olayını (metakromazi) tetikleyen tipik bir bazik boyadır ve mast/bazofil granüllerini göstermede kullanılır. Sudan black lipitleri, Orsein elastik lifleri boyar ve metakromazi özelliği taşımazlar. Histopatolojide degranülasyon analizi için toluidin mavisi vazgeçilmezdir.

**Soru 2 (ID: e7e1f5df-1dbe-48ef-ae75-80d80c1abad6)**
Soru Kökü: 42 yaşında kadın hasta, kaşıntılı deri lezyonları şikayetiyle başvuruyor. Alınan insizyonel biyopsi materyalinde mast hücre degranülasyonu araştırılacaktır. Mast hücre granüllerini polianyonik yapıları üzerinden spesifik olarak boyamak için aşağıdaki boyalardan hangisi tercih edilmelidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Mast hücre granülleri içerdikleri yoğun heparin sülfat nedeniyle polianyonik bir karaktere sahiptir ve bazik boyalarla etkileşime girdiğinde metakromazi gösterirler. Toluidin mavisi bu amaçla kullanılan en spesifik boyadır ve mast hücre granüllerini kendi orijinal renginden farklı bir tonda görünür kılar. Eosin veya Azan gibi boyalar bu polianyonik seçiciliği sağlayamazlar.

---

### ÇİFT 100 (Benzerlik: 0.81)

**Soru 1 (ID: 82217b03-68de-431e-b594-ccd687f91472)**
Soru Kökü: Hücre içine dış çevreden giren ve hücresel enzimler tarafından sentezlenmeyen maddeler ekzojen inklüzyonları oluşturur. Aşağıdakilerden hangisi hücresel patolojide izlenen ekzojen inklüzyon tiplerinden biri **değildir**?
Doğru Şık (D): Lipofuscin
Açıklama: Lipofuscin, hücrelerin normal metabolik süreçleri ve yaşlanmaları sonucu sekonder lizozom kalıntıları olarak biriken endojen bir inklüzyondur. Karbon, karoten ve dövme (tatu) ise dış kaynaklıdır ve ekzojen inklüzyon sınıfını oluşturur. Dövme ve tatu aynı kavramı ifade etse de her ikisi de ekzojen grubunda listelenir.

**Soru 2 (ID: 0b0867c3-42d4-4d61-9d9d-22dee98643cc)**
Soru Kökü: Hücre içi inklüzyonlar hücresel metabolizmanın bir ürünü olabileceği gibi dış ortamdan da kaynaklanabilir. Aşağıdakilerden hangisi hücrede izlenebilecek endojen inklüzyonlar arasında **yer almaz**?
Doğru Şık (B): Karoten
Açıklama: Karoten, hücresel mekanizmalar tarafından üretilmeyen, beslenme yoluyla dışarıdan alınarak hücre içinde birikebilen ekzojen bir inklüzyondur. Hemosiderin, lipofuscin, bilirubin ve glikojen ise hücrenin kendi biyokimyasal reaksiyonları sonucu oluşan endojen inklüzyonlardır. İnklüzyonların kökenini (iç/dış) bilmek ayırıcı tanı açısından kritik öneme sahiptir.

---

### ÇİFT 101 (Benzerlik: 0.81)

**Soru 1 (ID: 8387e754-cad9-4119-a7fe-7439c0a27cc0)**
Soru Kökü: İki yaşında kız çocuğu, iskelet anomalileri ve şiddetli psikomotor gerilik şikayetiyle getiriliyor. İncelemede, hücre içinde bulunması gereken hidrolaz enzimlerinin lizozomlar yerine hücre dışı sıvıya (kanda) yoğun olarak salgılandığı ve bu nedenle I-hücresi hastalığı geliştiği saptanıyor. Bu lizozomal enzimlerin Golgi kompleksinde doğru veziküle yönlendirilmesi için sahip olması gereken ancak hastada üretilemeyen spesifik işaret aşağıdakilerden hangisidir?
Doğru Şık (C): Mannoz-6-fosfat (M6P)
Açıklama: Golgi cisminin cis yüzüne ulaşan yeni sentezlenmiş asit hidrolaz enzimleri, burada mannoz-6-fosfat (M6P) ile işaretlenmelidir. Bu işaret trans yüzdeki M6P reseptörüne bağlanarak enzimin lizozoma yönlendirilmesini (sorting) sağlar. İşaretleme yapılamadığında enzimler standart sekresyon (yapısal salgı yolağı) yoluyla hücre dışına dökülür ve lizozomlar işlevsiz kalır (I-hücresi hastalığı patogenezi).

**Soru 2 (ID: 55b8f522-39e9-41ab-9489-d62a1e743523)**
Soru Kökü: İki yaşındaki erkek çocuk, ilerleyici motor gerilik, kaba yüz görünümü ve iskelet anomalileri ile kliniğe getiriliyor. Yapılan analizde, lizozomal hidrolazların hücre içinde eksik olduğu, buna karşın kan plazmasında çok yüksek seviyelerde bulunduğu saptanıyor. I-hücresi (Inclusion-cell) hastalığı olarak bilinen bu tablonun temel nedeni, Golgi cihazında hangi işaretleyici molekülün eklenmesindeki defekttir?
Doğru Şık (A): Mannoz-6-fosfat
Açıklama: Golgi cisminin cis yüzünde lizozomal enzimlere mannoz-6-fosfat (M6P) grubu eklenmesi, bu enzimlerin trans yüzde M6P reseptörlerince tanınıp lizozoma yönlendirilmesi için şarttır. Bu eklemenin yapılamadığı I-hücresi hastalığında enzimler lizozom yerine varsayılan salgı yolağı ile hücre dışına (kana) atılır ve hücre içinde sindirilemeyen materyaller birikir. Klatrin ise vezikülün tomurcuklanmasında görev alan yapısal bir proteindir, yönlendirme etiketi değildir.

---

### ÇİFT 102 (Benzerlik: 0.81)

**Soru 1 (ID: 70b12dac-81da-4489-b510-6fc3f888bd86)**
Soru Kökü: Tüp bebek (IVF) tedavisi gören 35 yaşındaki kadın hastanın folliküllerinden oositler aspire edilmektedir. Bilindiği üzere memeli dişilerinde primer oositler mayozun belirli bir aşamasında duraksar ve ovülasyona kadar yıllarca bu evrede bekler. Primer oositin bu bekleme aşaması aşağıdakilerden hangisidir?
Doğru Şık (E): Diploten
Açıklama: Dişilerde mayoz bölünme embriyonik dönemde başlar ancak primer oositler Profaz I'in Diploten aşamasında duraksar (bekleme aşaması) ve püberte sonrası ovülasyona kadar bu fazda kalırlar. Diploten evresinde homolog kromozomlar ayrılmaya başlasa da kiazmata bölgelerinden tutunmuş halde beklerler. Bu durum ileri maternal yaşta non-disjunction (ayrılmama) riskinin artmasının hücresel temelidir.

**Soru 2 (ID: 09f807ec-9db1-4393-bf3e-da6f7c117bb8)**
Soru Kökü: 28 yaşında kadın hasta, in vitro fertilizasyon (IVF) için yumurta toplama işlemine giriyor. Foliküllerden elde edilen primer oositlerin mayoz bölünmenin birinci profazında uzun yıllar dinlenme fazında beklediği ve bu fazda kiazmata yapılarının görüldüğü saptanıyor. Primer oositlerin beklediği bu spesifik evre aşağıdakilerden hangisidir?
Doğru Şık (D): Diploten
Açıklama: Diploten evresi, crossing over tamamlandıktan sonra kiazmata yapılarının izlendiği ve kadınlarda primer oositlerin puberte/ovulasyona kadar yıllarca beklediği (arrest) aşamadır. Pakiten crossing overın aktif olduğu fazdır, diakinez ise homolog kromozomların ayrılmak üzere son hazırlıklarını yaptığı fazdır. Oogenezin bu bekleme stratejisi genetik materyal bütünlüğü açısından kritiktir.

---

### ÇİFT 103 (Benzerlik: 0.81)

**Soru 1 (ID: bc3cd4d1-de3a-410c-9fd3-5d9f836b9fad)**
Soru Kökü: Sitoplazma bölünmesi (sitokinez), telofaz aşamasında hücrenin ekvatoryal bölgesinde boğumlanma gelişerek gerçekleşir. Bu aşamada oluşan kontraktil halkanın (kasılma halkası) yapısında temel olarak görev alan protein lifleri aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Aktin - Miyozin
Açıklama: Telofaz sırasında sitoplazmanın boğumlanarak bölünmesini sağlayan kontraktil ring (kasılma halkası), mikrofilaman yapısındaki aktin ve motor proteini olan miyozin iplikçiklerinin etkileşimiyle oluşur. Kinezin ve dynein mikrotübül kargo proteinleridir, bölünme boğumlanmasında değil kromozom çekilmesinde görev alırlar. Aktin-miyozin halkası fiziksel bir büzülme kuvveti yaratarak yavru hücreleri ayırır.

**Soru 2 (ID: 09262d04-b3d7-4210-893d-45923f2a3ccc)**
Soru Kökü: Mitoz bölünmenin telofaz aşamasında hücrenin ekvatoryal bölgesinde sitokinezi (sitoplazma bölünmesi) sağlamak üzere boğumlanmayı gerçekleştiren kontraktil halka (ring) hangi hücresel elemanlardan oluşur?
Doğru Şık (E): Aktin filamanları ve miyozin proteinleri
Açıklama: Sitoplazma bölünmesini sağlayan kontraktil halka, mikrofilaman olan aktin ile motor proteini miyozinin hücre membranı altında kasılmasıyla oluşur ve hücreyi ortadan iki yavruya böler. Mikrotübüller (kinetokor, interpolar, astral) karyokinezde (çekirdek bölünmesi) kromozomları çekerken görev alır; sitokinez tamamen aktin-miyozin kasılma işlevine dayanır.

---

### ÇİFT 104 (Benzerlik: 0.81)

**Soru 1 (ID: f28fa10b-55c9-4063-9d0e-08bdc433c1ed)**
Soru Kökü: Hücre çekirdeğindeki genetik materyali spesifik olarak işaretlemek amacıyla, sadece DNA yapısındaki deoksiriboz şekerini boyayan histokimyasal yöntem aşağıdakilerden hangisidir?
Doğru Şık (D): Feulgen
Açıklama: Feulgen boyaması, zayıf asit hidrolizi ile pürin bazlarını ayırarak DNA'daki deoksiriboz şekerinin aldehit gruplarını açığa çıkarma ve Schiff ayıracı ile kırmızı-mor renge boyama prensibine dayanır. RNA yapısında riboz bulunduğundan bu reaksiyon sadece DNA'ya spesifik kalır. Pironin RNA'yı, Demirli hematoksilin ise mitokondrileri hedefleyerek farklı morfolojik alanlara hizmet eder.

**Soru 2 (ID: 52540552-b3a8-45e3-9e45-660a1066410e)**
Soru Kökü: Hücre içi nükleik asitlerin dağılımını spesifik olarak göstermek isteyen bir araştırmacı, deoksiriboz şekerini hedefleyen bir boyama tekniği kullanmayı planlamaktadır. Bu amaçla DNA'nın lokalizasyonunu RNA'dan izole bir şekilde saptayabilen en uygun spesifik yöntem aşağıdakilerden hangisidir?
Doğru Şık (B): Feulgen
Açıklama: Feulgen reaksiyonu, zayıf asit hidrolizi ile pürin bazlarını uzaklaştırarak DNA'daki deoksiriboz şekerini açığa çıkarır ve Schiff ayıracı ile sadece DNA'ya spesifik pembe-kırmızı bir boyanma sağlar. Pironin boyası RNA'yı spesifik olarak boyarken, Feulgen yalnızca DNA'yı işaretler; hematoksilin ise her ikisini de (tüm nükleik asitleri) aynı anda boyar. Bu kimyasal ayrım hücresel aktivitenin transkripsiyonel veya proliferatif düzeyde analizine olanak tanır.

---

### ÇİFT 105 (Benzerlik: 0.81)

**Soru 1 (ID: 93833fda-c865-4296-86fb-237a0ff669dc)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

**Soru 2 (ID: 55b8f522-39e9-41ab-9489-d62a1e743523)**
Soru Kökü: İki yaşındaki erkek çocuk, ilerleyici motor gerilik, kaba yüz görünümü ve iskelet anomalileri ile kliniğe getiriliyor. Yapılan analizde, lizozomal hidrolazların hücre içinde eksik olduğu, buna karşın kan plazmasında çok yüksek seviyelerde bulunduğu saptanıyor. I-hücresi (Inclusion-cell) hastalığı olarak bilinen bu tablonun temel nedeni, Golgi cihazında hangi işaretleyici molekülün eklenmesindeki defekttir?
Doğru Şık (A): Mannoz-6-fosfat
Açıklama: Golgi cisminin cis yüzünde lizozomal enzimlere mannoz-6-fosfat (M6P) grubu eklenmesi, bu enzimlerin trans yüzde M6P reseptörlerince tanınıp lizozoma yönlendirilmesi için şarttır. Bu eklemenin yapılamadığı I-hücresi hastalığında enzimler lizozom yerine varsayılan salgı yolağı ile hücre dışına (kana) atılır ve hücre içinde sindirilemeyen materyaller birikir. Klatrin ise vezikülün tomurcuklanmasında görev alan yapısal bir proteindir, yönlendirme etiketi değildir.

---

### ÇİFT 106 (Benzerlik: 0.81)

**Soru 1 (ID: f6782a2f-180e-4864-9c33-e127b6fcae3f)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

**Soru 2 (ID: 55b8f522-39e9-41ab-9489-d62a1e743523)**
Soru Kökü: İki yaşındaki erkek çocuk, ilerleyici motor gerilik, kaba yüz görünümü ve iskelet anomalileri ile kliniğe getiriliyor. Yapılan analizde, lizozomal hidrolazların hücre içinde eksik olduğu, buna karşın kan plazmasında çok yüksek seviyelerde bulunduğu saptanıyor. I-hücresi (Inclusion-cell) hastalığı olarak bilinen bu tablonun temel nedeni, Golgi cihazında hangi işaretleyici molekülün eklenmesindeki defekttir?
Doğru Şık (A): Mannoz-6-fosfat
Açıklama: Golgi cisminin cis yüzünde lizozomal enzimlere mannoz-6-fosfat (M6P) grubu eklenmesi, bu enzimlerin trans yüzde M6P reseptörlerince tanınıp lizozoma yönlendirilmesi için şarttır. Bu eklemenin yapılamadığı I-hücresi hastalığında enzimler lizozom yerine varsayılan salgı yolağı ile hücre dışına (kana) atılır ve hücre içinde sindirilemeyen materyaller birikir. Klatrin ise vezikülün tomurcuklanmasında görev alan yapısal bir proteindir, yönlendirme etiketi değildir.

---

### ÇİFT 107 (Benzerlik: 0.81)

**Soru 1 (ID: a21b3f6a-1863-4fca-8019-b14e909ed79c)**
Soru Kökü: 28 yaşında erkek hasta infertilite şikayetiyle başvuruyor. Histolojik incelemede, duktus deferensin proksimal kısmındaki epitelin apikal yüzeyinde yer alan ve normalde sıvı emilimine yardımcı olan gelişimsel yapıda bir kusur saptanıyor. Aktin filamanlarınca desteklenen, aktif hareketli olmayan, uzun ve dallı yapı gösteren bu epiteliyal oluşum aşağıdakilerden hangisidir?
Doğru Şık (B): Stereosilyum
Açıklama: Stereosilyumlar yapısal olarak mikrovillusa benzeyen ancak çok daha uzun ve dallı olabilen, aktin destekli hareketsiz yüzey farklanmaları olup epididimis, duktus deferens ve iç kulak kıl hücrelerinde bulunurlar. Motil silyumlar solunum yollarında ve sperm hücrelerinde bulunur ve mikrotübül iskeletine sahiptirler. Hareketsiz ve emilim odaklı bu yapıların defekti erkek genital yollarında fonksiyon kaybına yol açar.

**Soru 2 (ID: 02456bb4-d83d-4b14-b8b6-5fc2ed75c705)**
Soru Kökü: 32 yaşında erkek hasta infertilite şikayetiyle başvuruyor. Yapılan biyopside epididimis epitelindeki özel yüzey farklılaşmalarının yapısal bütünlüğünü kaybettiği saptanıyor. Bu dokuda fonksiyon kaybına uğradığı düşünülen yüzey çıkıntısıyla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Mikrotübül düzenlenimi dynein proteini ile hareket kazanır.
Açıklama: Epididimis epitelinde bulunan yüzey farklılaşması stereosilyumdur; stereosilyumlar aktin iskeletli olup mikrotübül veya dynein içermezler. Dynein ve mikrotübül içeren yapılar gerçek motil silyalardır. Stereosilyumlar aktif hareketsizdir ve uzun/dallı yapılarıyla emilim alanını artırırlar.

---

### ÇİFT 108 (Benzerlik: 0.81)

**Soru 1 (ID: be8c311b-cef4-40fd-b337-b7e0f3293b8f)**
Soru Kökü: Lökositlerin inflamasyon alanına göçü sırasında gerçekleşen diapedez sürecinde, lökositin endotel hücresine sıkıca tutunmasını sağlayan protein etkileşimi aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (A): Lökosit integrini - Endotel CAM molekülü
Açıklama: Lökosit diapedezinin ilk zayıf aşamasında yuvarlanmayı 'Lökosit selektin - endotel selektin' eşleşmesi başlatır. Ardından sıkı tutunma aşamasında, lökosit membranı üzerindeki integrinler ile endotel zarında bulunan İmmünoglobulin süper ailesine (IgSF) ait CAM molekülleri heterofilik olarak etkileşime girer.

**Soru 2 (ID: 3e378d3d-3f4c-4936-95ee-cd39fed25686)**
Soru Kökü: Lökositlerin inflamasyon bölgesine göçü (diapedez) incelendiğinde, bu hücrelerin önce damar endoteline gevşekçe tutunduğu, ardından daha sıkı bir bağlantı kurarak damar dışına sızdığı gözlemlenir. Bu olayda farklı yüzey reseptörleri ve hücre bağlantı tipleri sırayla işlev görür. Buna göre, lökosit diapedezinin spesifik moleküler etkileşim mekanizması için aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (B): Lökosit üzerindeki bir selektin proteinin endotel hücre yüzeyindeki başka bir selektin sınıfı proteine bağlanarak homofilik ilişki kurması.
Açıklama: Lökosit diapedezinin ilk aşaması lökosit selektini ile endotel selektini arasında gerçekleşir, fakat selektinler karbonhidratlara bağlandığı için ve bağlantı kuran proteinler birbirinden farklı karakterize edildiği için homofilik (aynı sınıf proteinlerin birbirine tutunması, örn. kaderin-kaderin) bağlanma yapmazlar. Homofilik bağlar kaderinler veya Ig ailesi arasında görülürken; lökosit-endotel ilişkisindeki selektin ve integrin-CAM etkileşimleri yapısı gereği heterofilik bağlantı örnekleridir.

---

### ÇİFT 109 (Benzerlik: 0.81)

**Soru 1 (ID: e20304ef-993b-4587-964e-e77eba1c542b)**
Soru Kökü: Yetmiş beş yaşındaki erkek hastanın otopsisinde santral sinir sistemi incelenirken, nöronların sitoplazmasında elektron mikroskobu ile izlenen yoğun sarı-kahverengi pigment birikimleri saptanıyor. Yaşlanmayla ilişkili bu pigment olan lipofuscin, hücre içinde aşağıdaki yapıların hangisinin kalıntısı olarak değerlendirilir?
Doğru Şık (C): Artık (rezidüel) cisim
Açıklama: Lipofuscin, yaşlanmış nöron ve kalp kası hücrelerinde izlenen, mitokondriyal ve lipit yapıların lizozomal hidrolitik enzimlerce tam sindirilememesi sonucu hücrede kalan atıklardır. Bir ünit zarla çevrili bu sindirilemeyen materyallerin hücresel karşılığı artık (rezidüel) cisimlerdir. Erken endozom ise hücre dışından materyal alınan taze yolağı ifade eder.

**Soru 2 (ID: 9c54f45e-99fb-4e99-b188-ba478157c21a)**
Soru Kökü: Yetmiş beş yaşında koroner yetmezliği nedeniyle kaybedilen hastanın otopsisinde, kalp kası liflerinin nükleus çevrelerinde sarı-kahverengi pigmentasyon veren inklüzyonlar izleniyor. Yaşlanmış bu postmitotik hücrelerde saptanan, lipitlerin lizozomal hidrolazlarla tamamen sindirilemeyip hücresel bir artık olarak kaldığı yapı (rezidüel cisim) aşağıdakilerden hangisidir?
Doğru Şık (C): Lipofuskin pigmenti
Açıklama: Lipofuskin (yıpranma ve yaşlanma pigmenti), kalp kası ve nöron gibi uzun ömürlü ve bölünmeyen hücrelerde zamanla biriken, hidrolitik enzimlere dirençli rezidüel cisimlerdir (artık materyal). Kökeni, hücrenin makrootofajiyle yıkmaya çalıştığı eski mitokondriyal ve diğer lipit bazlı hücresel membranların kısmen sindirilmiş kalıntılarına dayanır.

---

### ÇİFT 110 (Benzerlik: 0.80)

**Soru 1 (ID: d6c63ddb-d9ed-46b6-85b5-babbc4e2b691)**
Soru Kökü: Salgı hücresinde üretilen bir proteinin sentezi sitoplazmadaki ribozomlarda başlar, ardından ribozom granüllü endoplazmik retikulum (GER) zarına bağlanır. Bu süreçte serbest ribozomdaki translasyon işlemini durdurarak kompleksi GER zarına yönlendiren sitozolik faktör aşağıdakilerden hangisidir?
Doğru Şık (D): Sinyal tanıma partikülü (SRP)
Açıklama: Serbest ribozomda sentezlenen zincirin başındaki 'sinyal peptidi'ne bağlanan Sinyal Tanıma Partikülü (SRP), translasyonu geçici olarak durdurur ve ribozom-mRNA kompleksini GER membranındaki SRP reseptörüne götürür. Translocator ribozomu membrana bağlayan porun kendisidir, sinyal peptidaz ise lümende sinyal peptidini kesen enzimdir. SRP, serbest translasyonun GER güdümlü translasyona dönüştüğü kilit noktadır.

**Soru 2 (ID: 81310e35-91b3-49b4-b5c3-cf1a6df8ba53)**
Soru Kökü: Yeni sentezlenen bir proteinin granüllü endoplazmik retikulum lümenine girebilmesi için sinyal peptidinin tanınması ve ribozomun zara bağlanması gerekir. Bu bağlanma sürecinde ribozomun lümen içine açılan translocator protein poruna yerleşmesine aracılık ederek translasyonun durmasına neden olan yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Sinyal tanıma partikülü (SRP)
Açıklama: Ribozomda sentezlenen sinyal peptidine bağlanan Sinyal Tanıma Partikülü (SRP), translasyonu geçici olarak durdurur ve kompleksi GER membranındaki SRP reseptörüne taşır. SRP'nin uzaklaşmasıyla translasyon devam eder ve protein lümene girer. Sinyal peptidaz ise bu protein GER lümenine girdikten sonra sinyal dizisini keserek uzaklaştıran enzimdir.

---

### ÇİFT 111 (Benzerlik: 0.80)

**Soru 1 (ID: adf78ffd-7387-4a04-b6da-034554a73fa6)**
Soru Kökü: Hücre çekirdeğindeki genetik materyali spesifik olarak işaretlemek amacıyla, sadece DNA yapısındaki deoksiriboz şekerini boyayan histokimyasal yöntem aşağıdakilerden hangisidir?
Doğru Şık (D): Feulgen
Açıklama: Feulgen boyaması, zayıf asit hidrolizi ile pürin bazlarını ayırarak DNA'daki deoksiriboz şekerinin aldehit gruplarını açığa çıkarma ve Schiff ayıracı ile kırmızı-mor renge boyama prensibine dayanır. RNA yapısında riboz bulunduğundan bu reaksiyon sadece DNA'ya spesifik kalır. Pironin RNA'yı, Demirli hematoksilin ise mitokondrileri hedefleyerek farklı morfolojik alanlara hizmet eder.

**Soru 2 (ID: 52540552-b3a8-45e3-9e45-660a1066410e)**
Soru Kökü: Hücre içi nükleik asitlerin dağılımını spesifik olarak göstermek isteyen bir araştırmacı, deoksiriboz şekerini hedefleyen bir boyama tekniği kullanmayı planlamaktadır. Bu amaçla DNA'nın lokalizasyonunu RNA'dan izole bir şekilde saptayabilen en uygun spesifik yöntem aşağıdakilerden hangisidir?
Doğru Şık (B): Feulgen
Açıklama: Feulgen reaksiyonu, zayıf asit hidrolizi ile pürin bazlarını uzaklaştırarak DNA'daki deoksiriboz şekerini açığa çıkarır ve Schiff ayıracı ile sadece DNA'ya spesifik pembe-kırmızı bir boyanma sağlar. Pironin boyası RNA'yı spesifik olarak boyarken, Feulgen yalnızca DNA'yı işaretler; hematoksilin ise her ikisini de (tüm nükleik asitleri) aynı anda boyar. Bu kimyasal ayrım hücresel aktivitenin transkripsiyonel veya proliferatif düzeyde analizine olanak tanır.

---

### ÇİFT 112 (Benzerlik: 0.80)

**Soru 1 (ID: dea44187-275c-46aa-af39-00711d3689a8)**
Soru Kökü: Kırk beş yaşındaki kadın hastanın karaciğer biyopsisinde, yanlış katlanmış proteinlerin sitoplazmada aşırı birikimi saptanıyor. Hücrenin bu hatalı proteinleri tanıyarak zarsız organeller aracılığıyla enerji bağımlı bir şekilde yıkması beklenmektedir. Bu hastada fonksiyon kaybına uğradığı düşünülen hücresel degradasyon sistemi aşağıdakilerden hangisidir?
Doğru Şık (B): Ubiquitin / Proteazom yolu
Açıklama: Hatalı katlanmış veya görevi bitmiş proteinler ATP harcanarak ubiquitin ile işaretlenir ve yine ATP kullanılarak 26S proteazom adı verilen zarsız organellerde yıkılır. Lizozom yolu daha çok endositozla dışarıdan alınan veya makrootofaji ile tüm organel yıkımı hedeflendiğinde kullanılır, spesifik tekil hücre içi protein hedefleri öncelikle proteazomun görevidir.

**Soru 2 (ID: 152ee1a9-2195-456a-86a9-781a8404579f)**
Soru Kökü: Altmış beş yaşında erkek hasta, progresif motor defisit şikayetiyle başvuruyor. Yapılan nöral biyopside, görevini tamamlamış veya katlanma hatası olan proteinlerin sitoplazmada yıkılamayarak agregat (küme) oluşturduğu görülüyor. Bu hastada patolojiden sorumlu olan ve normalde hedef proteinleri ubiquitin işareti aracılığıyla enerji (ATP) harcayarak yıkan zarsız organel aşağıdakilerden hangisidir?
Doğru Şık (A): 26S Proteazom
Açıklama: Hücre içinde görevi bitmiş veya hatalı sentezlenmiş proteinler spesifik olarak ubiquitin ile işaretlenir ve zarsız bir organel olan 26S proteazom (20S katalitik + 19S düzenleyici alt birimler) tarafından ATP harcanarak yıkılır. Lizozom ve otofagozomlar da protein yıkar ancak ubiquitin bağımlı hedef spesifik sitozolik yıkım proteazomun mutlak ve ayırt edici görevidir.

---

### ÇİFT 113 (Benzerlik: 0.80)

**Soru 1 (ID: a215f3c0-7c7b-4867-be05-395101995ca8)**
Soru Kökü: Epitel hücrelerinin apikal yüzüne yakın konumlanarak paraselüler geçişi kontrol eden ve zonula occludens (sıkı bağlantı) oluşturan yapıda, hücre dışı akuoz (su) kanallarının yapımında da görev alan esas transmembran protein aşağıdakilerden hangisidir?
Doğru Şık (B): Claudin
Açıklama: Sıkı bağlantıların (zonula occludens) kilit proteinleri claudin ve occludin'dir. Claudin, aynı zamanda paraselüler geçiş kontrolünde spesifik iyon veya su geçişini sağlayan akuoz kanalların yapısını oluşturur. Desmocollin desmozomda, konneksin ise gap junction'da bulunur.

**Soru 2 (ID: a950e36e-6687-435a-b098-bad95bd16dc1)**
Soru Kökü: Epitel hücrelerinde apikal yüze yakın yerleşen, paraselüler madde geçişini ve lipid raft hareketlerini kontrol eden hücresel bağlantı kompleksinin temel transmembran proteini aşağıdakilerden hangisidir?
Doğru Şık (A): Claudin
Açıklama: Zonula occludens (sıkı/tıkayıcı bağlantı), paraselüler transportu denetleyen ve akuoz kanalların yapısını oluşturan claudin ile occludin proteinlerinden oluşur. Desmoglein desmozomlarda, konneksin gap junction'larda, integrin ise fokal adezyon ve hemidesmozomlarda görev alan transmembran proteinlerdir.

---

### ÇİFT 114 (Benzerlik: 0.80)

**Soru 1 (ID: 4353bf5f-bfd8-41ff-9f82-d3472cf62b0e)**
Soru Kökü: 28 yaşında kadın hasta tekrarlayan solunum yolu enfeksiyonları ve ektopik gebelik öyküsü ile kliniğe başvuruyor. İncelemelerde trakea mukozası ve tuba uterina epitelinde silyer hareket defekti saptanıyor. Bu hastanın silya yapısında eksikliği beklenen motor protein ve mikrotübül düzenlenimi aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Dynein – 9+2
Açıklama: Solunum yolu ve tuba uterinalarda bulunan motil silyaların mikrotübül düzenlenimi 9+2 şeklindedir ve bu silyalara hareket yeteneğini kazandıran motor protein dyneindir. Kartagener sendromu gibi tablolarda dynein mutasyonu hareketsizliğe yol açar. 9+0 mikrotübül dizilimi ise nodal veya primer silyalara aittir.

**Soru 2 (ID: ca2845e9-1a20-496b-bc39-56d935219af7)**
Soru Kökü: 32 yaşında kadın hasta tekrarlayan üst solunum yolu enfeksiyonları ve tuba uterina disfonksiyonuna bağlı ektopik gebelik öyküsüyle kliniğe başvuruyor. Yapılan genetik analizde, kenarda 9 çift ve ortada 1 çift (9+2) mikrotübül düzenlenimine sahip yapıların hareketinden sorumlu olan proteinin sentezlenemediği saptanıyor. Mutasyona uğrayan yapının birincil sınıflandırması aşağıdakilerden hangisidir?
Doğru Şık (E): Motil silyum
Açıklama: Motil silyumlar 9+2 mikrotübül yapısına sahip olup dynein motor proteinleri sayesinde hareket ederek solunum yollarında mukus klirensini ve tuba uterinada ovum transportunu sağlarlar. Nodal ve primer silyumlar 9+0 mikrotübül düzenlenimine sahip olup primer silyumlar tamamen hareketsizdir. Dynein mutasyonu (Kartagener sendromu) bu hareketli silyumların felcine yol açarak tipik klinik sendromu oluşturur.

---

### ÇİFT 115 (Benzerlik: 0.80)

**Soru 1 (ID: a925e3ea-3e96-44e5-a020-caf173244867)**
Soru Kökü: İki hücre arasındaki elektriksel ve kimyasal sinyal iletimini sağlayan, connexin proteinlerinin altılı gruplar halinde bir araya gelerek yarım kanallar (connexon) oluşturduğu Gap junction (oluklu bağlantı) yapısı ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Hücre içindeki aktin veya ara filaman iskeletine sıkıca entegre durumdadır.
Açıklama: Oluklu bağlantılar (Gap junction) yalnızca komşu hücreler arasında küçük molekül geçişi için kanal açarlar ve hücre iskeletine (aktin veya ara filamanlara) bağlanmazlar. Desmozomlar, zonulalar veya fokal adezyonlar ise hücre iskeletiyle güçlü yapısal bağlar kurarlar. Gap junctionların iskelet bağlantısı kurmaması, fonksiyonlarının mekanik destekten ziyade saf iletişim odaklı olduğunu gösterir.

**Soru 2 (ID: 264ee332-b08e-45a1-bb1b-ff688378ab47)**
Soru Kökü: Hücreler arası elektriksel ve kimyasal iletişimi sağlayan oluklu bağlantılar (gap junction, nexus) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Epitel dokuda apikale en yakın yerleşerek paraselüler sızdırmazlığı kontrol eden temel yapıdır.
Açıklama: Apikale en yakın yerleşen ve paraselüler sızdırmazlığı (geçişi) kontrol eden yapı gap junction değil, zonula occludens'tir (sıkı bağlantı). Gap junction sadece hücre sitoplazmaları arasında kanal oluşturarak iletişimi (sinaps/kalp kası uyarı iletimi vb.) sağlar, dokular arası bariyer görevi yoktur.

---

### ÇİFT 116 (Benzerlik: 0.80)

**Soru 1 (ID: ef876646-1c55-4af9-bd44-5ef6450179e6)**
Soru Kökü: Hücre içi vezikül trafiğinin yönlendirilmesinde görev alan örtü proteinleri vezikülün kaynaklandığı ve yöneldiği organele göre değişir. Buna göre, Golgi kompleksinin kendi iç sarnıçları arasındaki retrograd vezikül taşınmasında veziküllerin etrafını saran örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): COP I
Açıklama: Golgi cismi içinde sarnıçlar arası (retrograd) ve Golgi'den GER'e geri dönüş vezikülleri COP I (coatomer I) ile kaplanırken, GER'den Golgi'ye giden anterograd veziküller COP II ile kaplanır. Klatrin proteini ise trans Golgi'den lizozoma giden ve hücre zarından reseptör aracılı endositoz ile oluşan veziküllerin kılıfını oluşturur.

**Soru 2 (ID: 51511a0e-d035-4be8-8bad-9bd4a8777b4d)**
Soru Kökü: Granüllü endoplazmik retikulumda sentezi ve primer modifikasyonları tamamlanan yeni bir polipeptit dizisinin (örneğin proinsülin), daha ileri modifikasyonlar (glikozilasyon/sülfatlama) için hücre içinde Golgi kompleksine taşınmasını sağlayan veziküllerin üzerini kaplayan örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): COP II
Açıklama: GER'den tomurcuklanarak Golgi kompleksine doğru anterograt (ileri) yönde taşıma yapan veziküllerin etrafı COP II (coatomer II) proteinleriyle örtülüdür. COP I ise Golgi içinde ve Golgi'den GER'e geri (retrograt) dönen kurtarma veziküllerini kaplar. Klatrin ise Golgi'den lizozoma giden vezikülleri (M6P taşıyan) ve hücre zarından endositozla giren vezikülleri sarar.

---

### ÇİFT 117 (Benzerlik: 0.80)

**Soru 1 (ID: 95f7a4a5-c191-47e0-b99b-bba2e23b9a91)**
Soru Kökü: Oluklu bağlantılar (gap junction), epitel dokusundan miyokard dokusuna kadar birçok alanda kimyasal ve elektriksel sinyallerin aktarımını organize eden mikroskobik geçitlerdir. Bu hücreler arası iletişim kurucu bağlantılarla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hücre iskeletini oluşturan mikrotübül ve ara filamanlara moleküler olarak bağlanarak mekanik destek sağlar.
Açıklama: Hücre bağlantıları içinde Gap Junction (Neksus), hücre içi iskelet elemanlarına (aktin, mikrotübül veya ara filaman) tutunmayan TEK spesifik hücre bağlantısıdır. Görevi mekanik destek sağlamak veya doku bütünlüğünü korumak değil, hücreler arası elektriksel ve metabolik kuplajı (iletişimi) sağlamaktır. Kalsiyum ve cAMP gibi ikincil habercilerin senkronize dağılımı bu iskeletten bağımsız kanallar ile gerçekleşir.

**Soru 2 (ID: da37aac4-c3a2-44fd-b10c-0954cbd4d635)**
Soru Kökü: Hücreler arası iletişim kurucu bağlantılar (Gap junction) ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Hücre iskeletine güçlü şekilde tutunur.
Açıklama: Zonula ve fokal adezyonlar aktine, makula adherens ve hemidesmozomlar ara filamanlara güçlü hücre iskeleti bağlantıları yaparlar. Ancak gap junction (oluklu bağlantı) tamamen küçük molekül geçişiyle (1-2 nm) ilgili bir kanaldır ve sitoplazmik tarafta hiçbir hücre iskeleti elemanına bağlanmaz.

---

### ÇİFT 118 (Benzerlik: 0.80)

**Soru 1 (ID: c33d4d36-d2f4-42d0-8839-c0e42397c382)**
Soru Kökü: Epitel dokusunda apikal yüze en yakın konumlanan, hücrelerin fokal füzyonlarını sağlayarak paraselüler geçişi (maddelerin hücreler arasından sızmasını) bloke eden sıkı bağlantıların (tight junction) temel proteinleri aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Klaudin ve okkludin
Açıklama: Sıkı bağlantıların (Zonula occludens) transmembran bileşenleri olan klaudin (claudin) ve okkludin (occludin) proteinleri, hücre zarlarını birbirine yapıştırarak paraselüler madde akışını engelleyen bir conta görevi görürler. Ayrıca ZO (Zonula Occludens 1,2,3) proteinleri ile hücre içindeki aktin ağına bağlanırlar. Desmoglein desmozomda, kaderin adherens bağlantıda yer alır.

**Soru 2 (ID: a215f3c0-7c7b-4867-be05-395101995ca8)**
Soru Kökü: Epitel hücrelerinin apikal yüzüne yakın konumlanarak paraselüler geçişi kontrol eden ve zonula occludens (sıkı bağlantı) oluşturan yapıda, hücre dışı akuoz (su) kanallarının yapımında da görev alan esas transmembran protein aşağıdakilerden hangisidir?
Doğru Şık (B): Claudin
Açıklama: Sıkı bağlantıların (zonula occludens) kilit proteinleri claudin ve occludin'dir. Claudin, aynı zamanda paraselüler geçiş kontrolünde spesifik iyon veya su geçişini sağlayan akuoz kanalların yapısını oluşturur. Desmocollin desmozomda, konneksin ise gap junction'da bulunur.

---

### ÇİFT 119 (Benzerlik: 0.80)

**Soru 1 (ID: f9fb74b6-826a-4feb-9a3c-626e87abe3f2)**
Soru Kökü: Hücre dışından gelen FasL ve TNF gibi uyarılarla apopitozisin ekstrensek yolağı aktive olmaktadır. Bu kaskadın tetiklenmesi için hücre zarında bu sinyalleri algılayarak yolağı başlatan özel reseptör bölgesi aşağıdakilerden hangisidir?
Doğru Şık (B): Ölüm bölgesi (Death domain)
Açıklama: Ekstrensek uyarılar (FasL, TNF), hücre zarında ölüm bölgesi (death domain) adı verilen özel bölgelerin aktivasyonu ile apopitozis kaskatını başlatırlar. Fokal adezyon plakları hücreyi matrikse bağlar, ölüm sinyali taşımazlar. Bu yapısal ayrım, apopitozun yüzeyden sitoplazmaya nasıl iletildiğinin anlaşılması açısından kritiktir.

**Soru 2 (ID: 1b6ad86e-c3d6-4907-9df8-34ce1340bd1c)**
Soru Kökü: Ekstrensek apopitoz kaskadının başlatılabilmesi için hücre dışı ortamdaki TNF, FasL ve TRAIL moleküllerinin hedef hücre membranında bağlandığı özelleşmiş reseptör bölgesi aşağıdakilerden hangisidir?
Doğru Şık (A): Ölüm bölgesi (Death domain)
Açıklama: Ölüm bölgesi (death domain), hücre zarında yer alan ve TNF, FasL, TRAIL gibi sinyalleri algılayarak ekstrensek apopitoz kaskadını hücre içine ileten özelleşmiş yüzey alanıdır. Kinetokor kromozom ayrılmasında, sinaptonemal kompleks ise mayoz bölünmedeki gen değiş tokuşunda görev alır. Bu bölgelerin dışarıdan ligandlarla aktivasyonu, hücre içi ölüm mekanizmalarını geri döndürülemez şekilde çalıştırır.

---

### ÇİFT 120 (Benzerlik: 0.80)

**Soru 1 (ID: 75fcd5a4-625e-4f29-ba06-7cb5063e00c2)**
Soru Kökü: Yirmi beş yaşındaki kadın hasta ilerleyici kas yorgunluğu ve miyoklonik nöbetlerle değerlendiriliyor. Kas biyopsisinde 'ragged red fibers' (yırtık kırmızı lifler) görülüyor ve sadece anneden kalıtılan bir genetik mutasyon saptanıyor. Bu klinik tablonun (MERRF sendromu) nedeni olan genetik materyal aşağıdaki hücre bölgelerinden hangisinde lokalizedir?
Doğru Şık (A): Mitokondriyon matriksi
Açıklama: MERRF (myoclonic epilepsy with ragged red fibers) maternal kalıtılan mitokondriyal DNA mutasyonlarına bağlı bir sendromdur. Mitokondriyonun sirküler yapılı genetik materyali (DNA, RNA ve ribozomlar) zarlar arası mesafede veya kristada değil, en iç boşluk olan matrikste lokalizedir. Çekirdek DNA'sının (ökromatin) maternal kalıtım zorunluluğu yoktur.

**Soru 2 (ID: 906cedff-d63e-4d84-9276-d45719a540b0)**
Soru Kökü: On beş yaşında kadın hasta, iskelet kası zayıflığı ve tekrarlayan kasılma (miyoklonus) şikayetleriyle başvuruyor. Yapılan kas biyopsisinde asidofilik boyanan düzensiz kırmızı kas lifleri (ragged red fibers) tespit ediliyor. Hücresel ATP sentez yetersizliği saptanan bu hastadaki sendromun etyopatogenezinde aşağıdakilerden hangisi **en olası** faktördür?
Doğru Şık (E): Mitokondriyal gen defekti
Açıklama: Myoclonic epilepsy with ragged red fibers (MERRF), mitokondriyal DNA'da meydana gelen mutasyonlara bağlı olarak elektron transport zinciri ve ATP sentez kapasitesinin bozulduğu klasik bir mitokondriyal kalıtım hastalığıdır. M6P eksikliği lizozomal depo (I-hücresi) hastalığına, peroksizom enzim eksikliği ise Zellweger sendromu gibi tablolara yol açar.

---

### ÇİFT 121 (Benzerlik: 0.80)

**Soru 1 (ID: 8f98abd0-4030-4ab9-ad61-311e798aecc9)**
Soru Kökü: Apopitoz sırasında hücre zarının bütünlüğü bozulmaz ancak fagositoz yapacak bağışıklık hücreleri tarafından tanınmayı (eat-me sinyali) sağlayan asimetrik bir zar değişikliği meydana gelir. Bu amaçla hücre zarının iç yaprakçığından dış yaprakçığına enzimatik olarak yer değiştiren (eksternalizasyon) fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfatidilserin
Açıklama: Sağlıklı hücrelerde hücre zarının sadece sitozolik (iç) yüzünde bulunan fosfatidilserin, apopitozun erken aşamalarında flippaz enzimi inaktivasyonu ve scramblase aktivasyonu ile dış ortama (eksternalizasyon) bakan yüzeye aktarılır. Fosfatidilkolin ve sfingomiyelin normal hücrede zaten dış yaprakçıkta yoğun bulunduğundan bir fagositoz sinyali oluşturmaz. Dış yüzeydeki fosfatidilserin, makrofajların apoptotik cisimleri hücre içine alması için spesifik reseptörlere bağlanır. Bu asimetri kaybı apopitozun en erken laboratuvar saptama (Annexin-V testi) yöntemidir.

**Soru 2 (ID: afd31ecd-3c23-4877-ae1f-6b1af80ce1e6)**
Soru Kökü: Hücre zarının iç yaprağında yerleşik olan ve hücrenin apopitotik sürece girmesiyle birlikte eksternalize olarak fagositoz için sinyal oluşturan fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (B): Fosfotidil serin
Açıklama: Fosfotidil serin normal koşullarda hücre zarının iç (protoplazmik) yaprağında bulunurken, apopitotik süreçte dış yaprağa doğru eksternalize olur. Bu yer değiştirme, hücrenin makrofajlar tarafından tanınarak ortadan kaldırılmasını sağlayan kritik bir sinyaldir. Fosfotidil kolin hücre zarındaki en sık fosfolipid olup yapısal bütünlüğü sağlarken apopitotik yer değiştirme özelliği göstermez.

---

### ÇİFT 122 (Benzerlik: 0.80)

**Soru 1 (ID: dde88685-b2cc-4970-a545-33c8034442b8)**
Soru Kökü: Hücre dışı matrikse tutunmayı sağlayan asimetrik bağlantılardan hemidesmozom ve fokal adezyonu birbirinden ayıran en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Hücre içinde bağlandıkları hücre iskeleti elemanlarının farklı olması
Açıklama: Hemidesmozomlar ve fokal adezyonların her ikisi de integrin kullanarak asimetrik olarak hücre dışı matrikse tutunurlar. Ancak fokal adezyon hücre içi tarafta aktin filamanlarına bağlanarak migrasyon ve dinamizm sağlarken; hemidesmozom ara filamanlara (keratin vb.) tutunarak epitel hücresini bazal lamine kalıcı olarak sabitler.

**Soru 2 (ID: a1b5b3a1-85cc-4a1f-ac26-8f9102726607)**
Soru Kökü: Bir patoloji laboratuvarında epitel hücrelerinin bazal membrana tutunmasını sağlayan asimetrik bağlantılar incelenmektedir. Bu bağlantı yapısı olan hemidesmozom ile hücre-hücre bağlantısı olan desmozom (makula adherens) karşılaştırıldığında aşağıdakilerden hangisi sadece hemidesmozoma ait ayırıcı bir özelliktir?
Doğru Şık (E): Transmembran adezyon proteini olarak integrin kullanması
Açıklama: Hemidesmozomlar bazal matrikse tutunmak için integrin proteinlerini kullanırken; desmozomlar komşu hücreye tutunmak için kaderin (desmocollin, desmoglein) kullanır. Her ikisi de hücre içinde ara filamanlara bağlanır ve plak yapısı içerir. Hemidesmozom matrikse bağlandığı için asimetriktir.

---

### ÇİFT 123 (Benzerlik: 0.80)

**Soru 1 (ID: 75fcd5a4-625e-4f29-ba06-7cb5063e00c2)**
Soru Kökü: Yirmi beş yaşındaki kadın hasta ilerleyici kas yorgunluğu ve miyoklonik nöbetlerle değerlendiriliyor. Kas biyopsisinde 'ragged red fibers' (yırtık kırmızı lifler) görülüyor ve sadece anneden kalıtılan bir genetik mutasyon saptanıyor. Bu klinik tablonun (MERRF sendromu) nedeni olan genetik materyal aşağıdaki hücre bölgelerinden hangisinde lokalizedir?
Doğru Şık (A): Mitokondriyon matriksi
Açıklama: MERRF (myoclonic epilepsy with ragged red fibers) maternal kalıtılan mitokondriyal DNA mutasyonlarına bağlı bir sendromdur. Mitokondriyonun sirküler yapılı genetik materyali (DNA, RNA ve ribozomlar) zarlar arası mesafede veya kristada değil, en iç boşluk olan matrikste lokalizedir. Çekirdek DNA'sının (ökromatin) maternal kalıtım zorunluluğu yoktur.

**Soru 2 (ID: de26c8e4-3677-4b38-b507-fd7d2f01d5ce)**
Soru Kökü: On beş yaşında kadın hasta, iskelet kası zayıflığı ve tekrarlayan kasılma (miyoklonus) şikayetleriyle başvuruyor. Yapılan kas biyopsisinde asidofilik boyanan düzensiz kırmızı kas lifleri (ragged red fibers) tespit ediliyor. Hücresel ATP sentez yetersizliği saptanan bu hastadaki sendromun etyopatogenezinde aşağıdakilerden hangisi **en olası** faktördür?
Doğru Şık (E): Mitokondriyal gen defekti
Açıklama: Myoclonic epilepsy with ragged red fibers (MERRF), mitokondriyal DNA'da meydana gelen mutasyonlara bağlı olarak elektron transport zinciri ve ATP sentez kapasitesinin bozulduğu klasik bir mitokondriyal kalıtım hastalığıdır. M6P eksikliği lizozomal depo (I-hücresi) hastalığına, peroksizom enzim eksikliği ise Zellweger sendromu gibi tablolara yol açar.

---

### ÇİFT 124 (Benzerlik: 0.80)

**Soru 1 (ID: 754e45d9-bd99-4ee2-9fab-a59b2bac7f92)**
Soru Kökü: Histolojik incelemelerde en yaygın kullanılan boyalardan biri olan hematoksilin ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Net negatif yüklü asidik bir boyadır.
Açıklama: Hematoksilin net pozitif yüklü, bazik karakterde bir boyadır ve dokudaki anyonik (negatif yüklü) bölgeleri mavi renge boyar. Net negatif yüklü ve asidik özellikte olan boya hematoksilin değil, hücre sitoplazmasını hedefleyen eosin boyasıdır. Bu nedenle hematoksilinin asidik olduğunu iddia eden seçenek kimyasal boyanma mekanizmasına tamamen aykırıdır.

**Soru 2 (ID: bde0f528-463a-4036-bed7-e6006a058ef4)**
Soru Kökü: Rutin histopatolojik boyamalarda sıklıkla kullanılan Eosin boyası ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Nükleik asitlerin fosfat gruplarına afinite gösterir
Açıklama: Eosin asidik ve net negatif yüklü bir boya olduğu için, nükleik asitlerin eksi yüklü fosfat gruplarını değil, hücredeki katyonik (artı yüklü) bölgeleri boyar. Nükleik asitlerin eksi yüklü bölgeleri bazik karakterli Hematoksilin tarafından boyanır. Eosinin kollajen ve sitoplazmayı kırmızı/pembe boyaması asidofilinin temel kuralıdır.

---

### ÇİFT 125 (Benzerlik: 0.80)

**Soru 1 (ID: bd79d21f-c111-4da1-a4b7-04645c590e1d)**
Soru Kökü: Histolojik incelemelerde en yaygın kullanılan boyalardan biri olan hematoksilin ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Net negatif yüklü asidik bir boyadır.
Açıklama: Hematoksilin net pozitif yüklü, bazik karakterde bir boyadır ve dokudaki anyonik (negatif yüklü) bölgeleri mavi renge boyar. Net negatif yüklü ve asidik özellikte olan boya hematoksilin değil, hücre sitoplazmasını hedefleyen eosin boyasıdır. Bu nedenle hematoksilinin asidik olduğunu iddia eden seçenek kimyasal boyanma mekanizmasına tamamen aykırıdır.

**Soru 2 (ID: bde0f528-463a-4036-bed7-e6006a058ef4)**
Soru Kökü: Rutin histopatolojik boyamalarda sıklıkla kullanılan Eosin boyası ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Nükleik asitlerin fosfat gruplarına afinite gösterir
Açıklama: Eosin asidik ve net negatif yüklü bir boya olduğu için, nükleik asitlerin eksi yüklü fosfat gruplarını değil, hücredeki katyonik (artı yüklü) bölgeleri boyar. Nükleik asitlerin eksi yüklü bölgeleri bazik karakterli Hematoksilin tarafından boyanır. Eosinin kollajen ve sitoplazmayı kırmızı/pembe boyaması asidofilinin temel kuralıdır.

---

### ÇİFT 126 (Benzerlik: 0.80)

**Soru 1 (ID: 65f258fe-e642-450b-ba7e-5d1b42e101cf)**
Soru Kökü: 55 yaşında erkek hastadan alınan lenf nodu biyopsisinde, kemoterapötik ajanlara bağlı apopitotik hücre ölümü izlenmektedir. Apopitozun erken evresinde, makrofajlar tarafından fagositozu başlatmak için normalde sadece iç zarda yerleşik olup bu süreçte dışarıya (eksternalize) dönen fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (A): Fosfotidil serin
Açıklama: Fosfotidil serin, sağlıklı bir hücrede sadece hücre zarının protoplazmik (iç) yaprağında yerleşik durumdadır. Hücre apopitoza girdiğinde, bu asimetri bozularak fosfotidil serin ekstraselüler yüzeye (dış yaprağa) çıkar ve makrofajlar üzerindeki reseptörlere 'beni fagositozla' sinyali gönderir. Fosfotidil kolin ve sfingomyelin zaten dış yaprakta bol bulundukları için böyle bir spesifik apopitotik belirteç fonksiyonu taşımazlar.

**Soru 2 (ID: afd31ecd-3c23-4877-ae1f-6b1af80ce1e6)**
Soru Kökü: Hücre zarının iç yaprağında yerleşik olan ve hücrenin apopitotik sürece girmesiyle birlikte eksternalize olarak fagositoz için sinyal oluşturan fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (B): Fosfotidil serin
Açıklama: Fosfotidil serin normal koşullarda hücre zarının iç (protoplazmik) yaprağında bulunurken, apopitotik süreçte dış yaprağa doğru eksternalize olur. Bu yer değiştirme, hücrenin makrofajlar tarafından tanınarak ortadan kaldırılmasını sağlayan kritik bir sinyaldir. Fosfotidil kolin hücre zarındaki en sık fosfolipid olup yapısal bütünlüğü sağlarken apopitotik yer değiştirme özelliği göstermez.

---

### ÇİFT 127 (Benzerlik: 0.80)

**Soru 1 (ID: 54e5cec3-0420-4cc6-90ed-e18ced3bccb5)**
Soru Kökü: Sekiz aylık kız bebek; şiddetli diş eti büyümesi (gingival hiperplazi), iskelet anormallikleri ve motor zayıflık nedeniyle inceleniyor. Biyokimyasal kültürde Golgi kompleksinin cis yüzünde mannoz gruplarının fosforilasyonunu yapan transferaz enziminin genetik olarak eksik olduğu tespit ediliyor. Bu sekonder lizozom oluşum yetersizliği tablosunun (I-hücresi hastalığı) patogenezi aşağıdakilerden hangisidir?
Doğru Şık (A): M6P sinyalinin kaybı nedeniyle hidrolitik enzimlerin hücre zarına yönlenip dışarı kaçması
Açıklama: Mannoz-6-fosfat (M6P) işareti lizozomal enzimlerin kargolanma adresidir. Cis yüzünde M6P eklenemediği takdirde, enzimler trans yüzdeki M6P reseptörü tarafından tanınamaz ve lizozom vezikülü içerisine paketlenemez. Bunun yerine, varsayılan (default) yapısal salgı yolağını takip ederek kontrolsüzce plazma zarı üzerinden hücre dışına salgılanırlar; hücre içi sindirim ise durur.

**Soru 2 (ID: 8387e754-cad9-4119-a7fe-7439c0a27cc0)**
Soru Kökü: İki yaşında kız çocuğu, iskelet anomalileri ve şiddetli psikomotor gerilik şikayetiyle getiriliyor. İncelemede, hücre içinde bulunması gereken hidrolaz enzimlerinin lizozomlar yerine hücre dışı sıvıya (kanda) yoğun olarak salgılandığı ve bu nedenle I-hücresi hastalığı geliştiği saptanıyor. Bu lizozomal enzimlerin Golgi kompleksinde doğru veziküle yönlendirilmesi için sahip olması gereken ancak hastada üretilemeyen spesifik işaret aşağıdakilerden hangisidir?
Doğru Şık (C): Mannoz-6-fosfat (M6P)
Açıklama: Golgi cisminin cis yüzüne ulaşan yeni sentezlenmiş asit hidrolaz enzimleri, burada mannoz-6-fosfat (M6P) ile işaretlenmelidir. Bu işaret trans yüzdeki M6P reseptörüne bağlanarak enzimin lizozoma yönlendirilmesini (sorting) sağlar. İşaretleme yapılamadığında enzimler standart sekresyon (yapısal salgı yolağı) yoluyla hücre dışına dökülür ve lizozomlar işlevsiz kalır (I-hücresi hastalığı patogenezi).

---

### ÇİFT 128 (Benzerlik: 0.80)

**Soru 1 (ID: 8387e754-cad9-4119-a7fe-7439c0a27cc0)**
Soru Kökü: İki yaşında kız çocuğu, iskelet anomalileri ve şiddetli psikomotor gerilik şikayetiyle getiriliyor. İncelemede, hücre içinde bulunması gereken hidrolaz enzimlerinin lizozomlar yerine hücre dışı sıvıya (kanda) yoğun olarak salgılandığı ve bu nedenle I-hücresi hastalığı geliştiği saptanıyor. Bu lizozomal enzimlerin Golgi kompleksinde doğru veziküle yönlendirilmesi için sahip olması gereken ancak hastada üretilemeyen spesifik işaret aşağıdakilerden hangisidir?
Doğru Şık (C): Mannoz-6-fosfat (M6P)
Açıklama: Golgi cisminin cis yüzüne ulaşan yeni sentezlenmiş asit hidrolaz enzimleri, burada mannoz-6-fosfat (M6P) ile işaretlenmelidir. Bu işaret trans yüzdeki M6P reseptörüne bağlanarak enzimin lizozoma yönlendirilmesini (sorting) sağlar. İşaretleme yapılamadığında enzimler standart sekresyon (yapısal salgı yolağı) yoluyla hücre dışına dökülür ve lizozomlar işlevsiz kalır (I-hücresi hastalığı patogenezi).

**Soru 2 (ID: bb3536e5-4198-4994-932c-795afc707e2f)**
Soru Kökü: Sekiz aylık kız bebek; şiddetli diş eti büyümesi (gingival hiperplazi), iskelet anormallikleri ve motor zayıflık nedeniyle inceleniyor. Biyokimyasal kültürde Golgi kompleksinin cis yüzünde mannoz gruplarının fosforilasyonunu yapan transferaz enziminin genetik olarak eksik olduğu tespit ediliyor. Bu sekonder lizozom oluşum yetersizliği tablosunun (I-hücresi hastalığı) patogenezi aşağıdakilerden hangisidir?
Doğru Şık (A): M6P sinyalinin kaybı nedeniyle hidrolitik enzimlerin hücre zarına yönlenip dışarı kaçması
Açıklama: Mannoz-6-fosfat (M6P) işareti lizozomal enzimlerin kargolanma adresidir. Cis yüzünde M6P eklenemediği takdirde, enzimler trans yüzdeki M6P reseptörü tarafından tanınamaz ve lizozom vezikülü içerisine paketlenemez. Bunun yerine, varsayılan (default) yapısal salgı yolağını takip ederek kontrolsüzce plazma zarı üzerinden hücre dışına salgılanırlar; hücre içi sindirim ise durur.

---

### ÇİFT 129 (Benzerlik: 0.79)

**Soru 1 (ID: 98c4fce4-4ad4-46f8-8d3b-9fb3b4e716f1)**
Soru Kökü: Üç aylık erkek bebekte ilerleyici hipotoni, konvülsiyonlar ve belirgin hepatomegali tespit ediliyor. Biyokimyasal incelemede kan plazmasında çok uzun zincirli yağ asitlerinin (VLCFA) yoğun oranda biriktiği saptanıyor. Beta-oksidasyon aşamasındaki defektten kaynaklanan bu tabloda, patolojinin yerleştiği spesifik organel aşağıdakilerden hangisidir?
Doğru Şık (B): Peroksizom
Açıklama: Mitokondriyon kısa, orta ve uzun zincirli yağ asitlerinin beta-oksidasyonunu yaparken; "çok uzun zincirli yağ asitleri (VLCFA)" spesifik olarak sadece peroksizomlarda beta-oksidasyonla kısaltıldıktan sonra mitokondriye gönderilebilir. Peroksizom disfonksiyonunda bu çok uzun zincirli asitler kanda ve dokularda birikerek ağır nörodejeneratif seyir gösterir.

**Soru 2 (ID: 41308e49-10a6-4f10-a6c0-ddfbd477320b)**
Soru Kökü: Üç yaşında erkek çocuk, ilerleyici nörolojik kayıp, nöbet geçirme ve kas hipotonisi ile pediatri kliniğine yatırılıyor. Serum analizinde dallı zincirli yağ asitlerinin yüksek seviyelerde biriktiği görülüyor. Biyopside, belirli hücre organellerinin matrikse enzim transferinde defekt olduğu (boş organeller) izlenen bu hastada, fonksiyonu kaybolan kritik katabolik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksizomal alfa-oksidasyon yıkımı
Açıklama: Kanda dallı zincirli ve çok uzun zincirli yağ asitlerinin (VLCFA) birikmesi, mikrocisimlerin (peroksizomların) enzim ithalat yolaklarında, dolayısıyla fonksiyonlarında defekt olduğunu (Zellweger spektrum bozuklukları gibi) gösterir. Mitokondri bu karmaşık yağ asitlerinin yıkımını (alfa-oksidasyon) yapamaz, peroksizom fonksiyonunun kaybı ölümcül lipid birikimlerine yol açar.

---

### ÇİFT 130 (Benzerlik: 0.79)

**Soru 1 (ID: 98c4fce4-4ad4-46f8-8d3b-9fb3b4e716f1)**
Soru Kökü: Üç aylık erkek bebekte ilerleyici hipotoni, konvülsiyonlar ve belirgin hepatomegali tespit ediliyor. Biyokimyasal incelemede kan plazmasında çok uzun zincirli yağ asitlerinin (VLCFA) yoğun oranda biriktiği saptanıyor. Beta-oksidasyon aşamasındaki defektten kaynaklanan bu tabloda, patolojinin yerleştiği spesifik organel aşağıdakilerden hangisidir?
Doğru Şık (B): Peroksizom
Açıklama: Mitokondriyon kısa, orta ve uzun zincirli yağ asitlerinin beta-oksidasyonunu yaparken; "çok uzun zincirli yağ asitleri (VLCFA)" spesifik olarak sadece peroksizomlarda beta-oksidasyonla kısaltıldıktan sonra mitokondriye gönderilebilir. Peroksizom disfonksiyonunda bu çok uzun zincirli asitler kanda ve dokularda birikerek ağır nörodejeneratif seyir gösterir.

**Soru 2 (ID: d65ef145-24c6-4c1c-96cf-4aad3b051e9e)**
Soru Kökü: Üç yaşında erkek çocuk, ilerleyici nörolojik kayıp, nöbet geçirme ve kas hipotonisi ile pediatri kliniğine yatırılıyor. Serum analizinde dallı zincirli yağ asitlerinin yüksek seviyelerde biriktiği görülüyor. Biyopside, belirli hücre organellerinin matrikse enzim transferinde defekt olduğu (boş organeller) izlenen bu hastada, fonksiyonu kaybolan kritik katabolik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksizomal alfa-oksidasyon yıkımı
Açıklama: Kanda dallı zincirli ve çok uzun zincirli yağ asitlerinin (VLCFA) birikmesi, mikrocisimlerin (peroksizomların) enzim ithalat yolaklarında, dolayısıyla fonksiyonlarında defekt olduğunu (Zellweger spektrum bozuklukları gibi) gösterir. Mitokondri bu karmaşık yağ asitlerinin yıkımını (alfa-oksidasyon) yapamaz, peroksizom fonksiyonunun kaybı ölümcül lipid birikimlerine yol açar.

---

### ÇİFT 131 (Benzerlik: 0.79)

**Soru 1 (ID: d4765a34-2cbb-44f1-80fb-8aeed61a5cd1)**
Soru Kökü: Kırk beş yaşında kronik alkolizm öyküsü olan hastadan karaciğer yağlanması (steatoz) şüphesiyle biyopsi yapılmıştır. Rutin parafin takibinde kaybolacak olan lipid inklüzyonlarını özel taze kesit tekniğiyle siyah renkte görüntülemek isteyen patoloğun seçmesi gereken boya aşağıdakilerden hangisidir?
Doğru Şık (A): Sudan black
Açıklama: Sudan black, yapısındaki lipofilik özellik sayesinde hücre içi lipidleri (yağ vakuolleri) ve nötral yağları siyah renge boyayarak steatoz tespitinde kullanılır. PAS karbonhidratları hedefler ve yağ boyamada hiçbir etki göstermez. Alkoloidlerin veya çözücülerin kullanıldığı rutin histolojik işlemlerde yağlar kaybolduğu için Sudan boyaları sadece dondurma kesitlerde anlamlıdır.

**Soru 2 (ID: e4f365d7-3af1-4fb6-ab5a-0fc7cc3a37e4)**
Soru Kökü: Kırk beş yaşında obez bir erkek hastadan alınan karaciğer biyopsisinde, hepatositler içerisinde geniş lipid (yağ) damlacıkları biriktiğinden şüphelenilmektedir. Bu lipid birikimlerini ışık mikroskobunda tespit edebilmek için patoloğun kullanması gereken en uygun boya aşağıdakilerden hangisidir?
Doğru Şık (B): Oil red O
Açıklama: Oil red O (ve Sudan black), dokulardaki lipid kompartımanlarına spesifik olarak nüfuz ederek intraselüler yağ damlacıklarını kırmızı/siyah renkte görünür kılan özel boyalardır. Giemza kan hücrelerinin incelenmesinde, demirli hematoksilin ise mitokondrileri göstermede kullanıldığından lipit teşhisinde kullanılamazlar. Rutin alkol bazlı doku takiplerinde lipitler çözündüğünden, bu boyalar genellikle özel fiksasyon veya dondurma kesitleriyle birlikte uygulanır.

---

### ÇİFT 132 (Benzerlik: 0.79)

**Soru 1 (ID: 12013580-285e-4dec-9e08-e49617061d88)**
Soru Kökü: 55 yaşında erkek hasta, kronik tıbbi kullanımı nedeniyle barbitürat sınıfı ilaçlara karşı gelişmiş metabolik tolerans ile inceleniyor. Yapılan karaciğer iğne biyopsisinde, detoksifikasyon enzimleri olan sitokrom P-450 ailesine ev sahipliği yapan ve hücre içerisinde suda çözünmeyen kimyasalları metabolize eden organelin hipertrofik olduğu belirleniyor. Sorumlu organel aşağıdakilerden hangisidir?
Doğru Şık (D): Granülsüz (düz) endoplazmik retikulum
Açıklama: Suda çözünmeyen kimyasal bileşiklerin, ilaçların ve toksinlerin sitokrom P-450 enzimleri aracılığıyla detoksifiye edilmesi doğrudan granülsüz (düz) endoplazmik retikulumun başlıca görevlerinden biridir. Kronik ajan maruziyetinde bu organelin yapısı adaptasyon göstererek sayısal artış (hipertrofi) sergiler.

**Soru 2 (ID: f2e40118-0023-4b90-ab78-1e12a6bdc4c3)**
Soru Kökü: Otuz yaşında kadın hasta, yüksek dozda barbitürat (lipid çözünür bir ilaç) alımı intoksikasyonu nedeniyle acile getiriliyor. Karaciğer histolojisi incelendiğinde, ilacı detoksifiye etmek ve suda çözünür böbrekten atılabilir hale getirmek için sitokrom P-450 enzimi barındıran bir organelde masif hipertrofi beklenir. Bu süreçten doğrudan sorumlu organel aşağıdakilerden hangisidir?
Doğru Şık (C): Granülsüz (düz) endoplazmik retikulum
Açıklama: Suda çözünmeyen kimyasalların (ilaçlar, zehirler) detoksifikasyonu ve böbreklerden atılabilir hale getirilmesi, karaciğer hücrelerinde sitokrom P-450 enzim sistemini barındıran granülsüz (düz) endoplazmik retikulumun temel görevidir. Peroksizomlar da toksin (alkol) yıkımı yapar ancak sitokrom P-450 sistemi spesifik olarak düz ER'nin membran yüzeyinde konumlanmıştır.

---

### ÇİFT 133 (Benzerlik: 0.79)

**Soru 1 (ID: 0dbf8a63-ccd3-48cd-b5d2-c8df72150df1)**
Soru Kökü: Apopitoz sürecinde ekstrensek yolak, hücre zarı dışından gelen spesifik sinyallerle aktive olur. Aşağıdakilerden hangisi bu ekstrensek yolağı başlatan ölüm bölgesi (death domain) aktivatörlerinden biri **değildir**?
Doğru Şık (D): Endoplazmik retikulum
Açıklama: Endoplazmik retikulum (ER) stresi ve mitokondriyal hasarlar, hücre dışı sinyallerle değil, hücre içi uyarılarla çalışan intrensek apopitoz yolağını aktive eder. FasL, TNF ve TRAIL ise hücre zarındaki ölüm bölgesi (death domain) reseptörlerine bağlanarak dışarıdan ölüm emri veren ekstrensek yolak aktivatörleridir. Bu ayırım hücresel hasarın kaynağını gösterir.

**Soru 2 (ID: f9a7fd4c-f0da-49c9-a259-204d654ab37d)**
Soru Kökü: Apopitoz kaskatı hücre içi veya hücre dışı sinyallerle aktive edilebilir. Hücre zarı üzerinde bulunan ve ölüm bölgesi (death domain) olarak adlandırılan özel reseptör bölgelerinin uyarılmasıyla başlayan kaskat mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Ekstrensek yolak
Açıklama: FasL, TNF veya TRAIL gibi hücre dışından gelen sinyallerin zar yüzeyindeki ölüm reseptörlerine (death domain) bağlanarak başlattığı apopitoz mekanizması ekstrensek yolak olarak adlandırılır. Buna karşın mitokondri veya endoplazmik retikulum kaynaklı hücre içi stres uyarıları, intrensek (mitokondriyal) yolağı tetikler. Her iki yolak da nihayetinde kaspazları aktive ederek hücre ölümünü gerçekleştirir.

---

### ÇİFT 134 (Benzerlik: 0.79)

**Soru 1 (ID: 436d432e-47ed-47f8-ae2a-1b36416b0249)**
Soru Kökü: 55 yaşında erkek hasta, göğüs ağrısı şikayetiyle acil servise başvuruyor ve geçirilmiş miyokard enfarktüsü tanısı alıyor. İskemiye bağlı hasarlı dokuda hücre içi kalsiyum birikimi ve zarların rüptüre olduğu nekrotik ölüm mekanizması tetikleniyor. Bu hastanın nekrotik miyokard hücrelerinde, fizyolojik apopitozise kıyasla aşağıdaki bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (A): Kromatin agregasyonu
Açıklama: Nekroz sürecinde hücre suyu ve kalsiyum içeri alarak şiddetle şişer, plazma zarı hasarlanarak bütünlüğü bozulur ve çevreye asidik lizozomal enzimlerin dökülmesiyle yoğun bir doku inflamasyonu başlar. Ancak apopitoziste karakteristik olan yoğun 'kromatin agregasyonu' ve düzenli DNA kesimleri (nükleer fragmantasyon) nekroz tablosuna özgü değildir ve nekrozda patolojik kromatin erimesi (karyolizis) beklenir. Morfolojik olarak kromatin yapısının durumu programlı (apopitoz) ve travmatik (nekroz) ölüm tiplerini ayırmak için primer belirteçtir.

**Soru 2 (ID: 2c4b2ff6-4efc-4ea8-b4b0-427cd1f13ae9)**
Soru Kökü: Kırk beş yaşında erkek hasta, geçirdiği miyokard infarktüsü sonrası kardiyoloji polikliniğinde takip edilmektedir. Kalp kası dokusunda iskemik nekroz geliştiği bilinirken, fizyolojik hücre döngüsünde programlı hücre ölümü (apopitoz) ile kaybedilen hücreler de bulunmaktadır. Bu iki farklı mekanizmaya uğrayan hücreler histolojik olarak karşılaştırıldığında, apopitoza uğrayan bir hücrede aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (D): Hücre şişmesi
Açıklama: Hücre şişmesi, plazma zarının hasar görmesi ve iyon dengesinin bozulmasıyla seyreden nekrozun tipik bir bulgusudur. Apopitozda ise tam tersine hücre büzüşmesi (shrinkage) görülür ve hücre zarı parçalanmadan sadece tomurcuklanarak (blebbing) form değiştirir. Çekirdek fragmantasyonu ve kromatin agregasyonu apopitozun karakteristik mikroskobik özellikleridir.

---

### ÇİFT 135 (Benzerlik: 0.79)

**Soru 1 (ID: ccc17104-8119-4647-b99d-a7cb28992ccd)**
Soru Kökü: Ciddi alerjik döküntüsü olan hastanın cilt biyopsisinde, degranülasyon gösteren mast hücreleri incelenecektir. Mast hücre granüllerinin sülfatlı içeriği sayesinde metakromatik bir reaksiyon vererek tanıyı pratikleştiren boya aşağıdakilerden hangisidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Toluidin mavisi, yapısındaki moleküler özellik nedeniyle mast hücresindeki heparine (polianyonik GAG) bağlandığında rengini maviden kırmızı-mora kaydırarak 'metakromazi' fenomenini oluşturur. Eozin asidik, Mallory ise bağ dokusu boyası olup mast hücre granüllerindeki yoğun anyonik yapıyla bu spesifik renk değişimini yaratma kapasitesine sahip değildir. Bu renk kayması, biyopsilerde inflamatuvar mast hücrelerinin hızlı tespitini sağlayan bir klinik markerdir.

**Soru 2 (ID: 34a2dd80-3cb6-4372-aa3f-546955ce970d)**
Soru Kökü: Otuz iki yaşında kadın hastanın kronik alerjik döküntüleri nedeniyle alınan cilt biyopsisinde, metakromazi özelliğinden faydalanarak dokudaki bazofil ve mast hücre granüllerini spesifik olarak göstermek isteyen bir patoloğun aşağıdaki boyalardan hangisini kullanması beklenir?
Doğru Şık (A): Toluidin mavisi
Açıklama: Toluidin mavisi, dokunun polianyonik bölgelerine bağlandığında boyanın kendi renginden farklı bir renk vermesi olayını (metakromazi) tetikleyen tipik bir bazik boyadır ve mast/bazofil granüllerini göstermede kullanılır. Sudan black lipitleri, Orsein elastik lifleri boyar ve metakromazi özelliği taşımazlar. Histopatolojide degranülasyon analizi için toluidin mavisi vazgeçilmezdir.

---

### ÇİFT 136 (Benzerlik: 0.79)

**Soru 1 (ID: 54e5cec3-0420-4cc6-90ed-e18ced3bccb5)**
Soru Kökü: Sekiz aylık kız bebek; şiddetli diş eti büyümesi (gingival hiperplazi), iskelet anormallikleri ve motor zayıflık nedeniyle inceleniyor. Biyokimyasal kültürde Golgi kompleksinin cis yüzünde mannoz gruplarının fosforilasyonunu yapan transferaz enziminin genetik olarak eksik olduğu tespit ediliyor. Bu sekonder lizozom oluşum yetersizliği tablosunun (I-hücresi hastalığı) patogenezi aşağıdakilerden hangisidir?
Doğru Şık (A): M6P sinyalinin kaybı nedeniyle hidrolitik enzimlerin hücre zarına yönlenip dışarı kaçması
Açıklama: Mannoz-6-fosfat (M6P) işareti lizozomal enzimlerin kargolanma adresidir. Cis yüzünde M6P eklenemediği takdirde, enzimler trans yüzdeki M6P reseptörü tarafından tanınamaz ve lizozom vezikülü içerisine paketlenemez. Bunun yerine, varsayılan (default) yapısal salgı yolağını takip ederek kontrolsüzce plazma zarı üzerinden hücre dışına salgılanırlar; hücre içi sindirim ise durur.

**Soru 2 (ID: 93833fda-c865-4296-86fb-237a0ff669dc)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

---

### ÇİFT 137 (Benzerlik: 0.79)

**Soru 1 (ID: 54e5cec3-0420-4cc6-90ed-e18ced3bccb5)**
Soru Kökü: Sekiz aylık kız bebek; şiddetli diş eti büyümesi (gingival hiperplazi), iskelet anormallikleri ve motor zayıflık nedeniyle inceleniyor. Biyokimyasal kültürde Golgi kompleksinin cis yüzünde mannoz gruplarının fosforilasyonunu yapan transferaz enziminin genetik olarak eksik olduğu tespit ediliyor. Bu sekonder lizozom oluşum yetersizliği tablosunun (I-hücresi hastalığı) patogenezi aşağıdakilerden hangisidir?
Doğru Şık (A): M6P sinyalinin kaybı nedeniyle hidrolitik enzimlerin hücre zarına yönlenip dışarı kaçması
Açıklama: Mannoz-6-fosfat (M6P) işareti lizozomal enzimlerin kargolanma adresidir. Cis yüzünde M6P eklenemediği takdirde, enzimler trans yüzdeki M6P reseptörü tarafından tanınamaz ve lizozom vezikülü içerisine paketlenemez. Bunun yerine, varsayılan (default) yapısal salgı yolağını takip ederek kontrolsüzce plazma zarı üzerinden hücre dışına salgılanırlar; hücre içi sindirim ise durur.

**Soru 2 (ID: f6782a2f-180e-4864-9c33-e127b6fcae3f)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

---

### ÇİFT 138 (Benzerlik: 0.79)

**Soru 1 (ID: bb3536e5-4198-4994-932c-795afc707e2f)**
Soru Kökü: Sekiz aylık kız bebek; şiddetli diş eti büyümesi (gingival hiperplazi), iskelet anormallikleri ve motor zayıflık nedeniyle inceleniyor. Biyokimyasal kültürde Golgi kompleksinin cis yüzünde mannoz gruplarının fosforilasyonunu yapan transferaz enziminin genetik olarak eksik olduğu tespit ediliyor. Bu sekonder lizozom oluşum yetersizliği tablosunun (I-hücresi hastalığı) patogenezi aşağıdakilerden hangisidir?
Doğru Şık (A): M6P sinyalinin kaybı nedeniyle hidrolitik enzimlerin hücre zarına yönlenip dışarı kaçması
Açıklama: Mannoz-6-fosfat (M6P) işareti lizozomal enzimlerin kargolanma adresidir. Cis yüzünde M6P eklenemediği takdirde, enzimler trans yüzdeki M6P reseptörü tarafından tanınamaz ve lizozom vezikülü içerisine paketlenemez. Bunun yerine, varsayılan (default) yapısal salgı yolağını takip ederek kontrolsüzce plazma zarı üzerinden hücre dışına salgılanırlar; hücre içi sindirim ise durur.

**Soru 2 (ID: 93833fda-c865-4296-86fb-237a0ff669dc)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

---

### ÇİFT 139 (Benzerlik: 0.79)

**Soru 1 (ID: bb3536e5-4198-4994-932c-795afc707e2f)**
Soru Kökü: Sekiz aylık kız bebek; şiddetli diş eti büyümesi (gingival hiperplazi), iskelet anormallikleri ve motor zayıflık nedeniyle inceleniyor. Biyokimyasal kültürde Golgi kompleksinin cis yüzünde mannoz gruplarının fosforilasyonunu yapan transferaz enziminin genetik olarak eksik olduğu tespit ediliyor. Bu sekonder lizozom oluşum yetersizliği tablosunun (I-hücresi hastalığı) patogenezi aşağıdakilerden hangisidir?
Doğru Şık (A): M6P sinyalinin kaybı nedeniyle hidrolitik enzimlerin hücre zarına yönlenip dışarı kaçması
Açıklama: Mannoz-6-fosfat (M6P) işareti lizozomal enzimlerin kargolanma adresidir. Cis yüzünde M6P eklenemediği takdirde, enzimler trans yüzdeki M6P reseptörü tarafından tanınamaz ve lizozom vezikülü içerisine paketlenemez. Bunun yerine, varsayılan (default) yapısal salgı yolağını takip ederek kontrolsüzce plazma zarı üzerinden hücre dışına salgılanırlar; hücre içi sindirim ise durur.

**Soru 2 (ID: f6782a2f-180e-4864-9c33-e127b6fcae3f)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

---

### ÇİFT 140 (Benzerlik: 0.79)

**Soru 1 (ID: 32b7a0ba-b946-40c0-a002-c98bd46f4032)**
Soru Kökü: Golgi cisimcikleri içerisinde posttranslasyonel glikoprotein modifikasyonu esnasında hücresel yolağa çıkacak olan hedef moleküle ait spesifik şeker rezidülerini **kesip çıkararak** molekülü daraltan (uzaklaştıran) hidrolitik karakterli enzim aşağıdakilerden hangisidir?
Doğru Şık (E): Glikozidaz
Açıklama: Protein glikozilasyonu bir dizi ekleme ve budama basamağından oluşur. Glikozidaz enzimleri molekül üzerinde bulunan istenmeyen şeker rezidülerini çıkartarak zinciri hedefe odaklarken; glikoziltransferazlar ise yeni karbonhidrat rezidüleri eklemek suretiyle glikokaliks yapısını son haline getirir.

**Soru 2 (ID: a4c79fc0-0531-4e2f-a8ac-7a390c72e574)**
Soru Kökü: Golgi kompleksi içerisinde işlem gören proteoglikanların ve glikoproteinlerin posttranslasyonel olgunlaşma aşamasında, spesifik şeker rezidülerini moleküle bağlayan enzim grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Glikoziltransferaz
Açıklama: Glikoziltransferazlar, Golgi cisminin temel fonksiyonu olan glikozilasyon modifikasyonunda, proteinin üzerindeki karbonhidrat iskeletine spesifik hedef şeker gruplarını ekleyen enzimlerdir. Şeker gruplarını kesen enzime glikozidaz denir. Lipazlar ve fosfolipazlar lipid metabolizmasıyla ilgilidir.

---

### ÇİFT 141 (Benzerlik: 0.79)

**Soru 1 (ID: 0fd5dce4-6af8-43a3-84e4-54a6071a2e86)**
Soru Kökü: Lamin A proteininin iç çekirdek zarına başarılı bir şekilde entegre olabilmesi için Lamin B reseptörüne (LBR) tutunması gerekmektedir. Bu iki yapı (Lamin A ve LBR) arasında fiziksel köprü kurarak bağlantıyı koordine eden protein aşağıdakilerden hangisidir?
Doğru Şık (E): Nurim
Açıklama: Nurim, iç çekirdek membranında yerleşik olan ve nükleer filaman yapılarından Lamin A'nın Lamin B reseptörüne (LBR) tutunarak sabitlenmesini sağlayan bağlayıcı proteindir. Kondensin bölünme sırasında kromatini kromozoma katlarken, klatrin Golgi kökenli veziküllerin kaplanmasını sağlayan sitoplazmik bir proteindir.

**Soru 2 (ID: 98948539-ae9c-4aea-b5d5-df444b628476)**
Soru Kökü: Nükleer lamina proteinlerinin iç çekirdek membranına tutunmasında çeşitli reseptör kompleksleri görev alır. Zarı 8 kez geçen ve Lamin B proteinine doğrudan bağlanarak onun tutunmasını sağlayan molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Emerin
Açıklama: Emerin, iç çekirdek zarını 8 kez transmembran olarak geçen ve Lamin B'nin membrana lokalizasyonunu sağlayan temel bir reseptördür. Nurim, Lamin A'yı LBR'ye bağlayan köprü proteinken; nükleostemin çekirdekçikte p53 etkileşimi yapan tamamen farklı bir proteindir.

---

### ÇİFT 142 (Benzerlik: 0.79)

**Soru 1 (ID: 8f98abd0-4030-4ab9-ad61-311e798aecc9)**
Soru Kökü: Apopitoz sırasında hücre zarının bütünlüğü bozulmaz ancak fagositoz yapacak bağışıklık hücreleri tarafından tanınmayı (eat-me sinyali) sağlayan asimetrik bir zar değişikliği meydana gelir. Bu amaçla hücre zarının iç yaprakçığından dış yaprakçığına enzimatik olarak yer değiştiren (eksternalizasyon) fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfatidilserin
Açıklama: Sağlıklı hücrelerde hücre zarının sadece sitozolik (iç) yüzünde bulunan fosfatidilserin, apopitozun erken aşamalarında flippaz enzimi inaktivasyonu ve scramblase aktivasyonu ile dış ortama (eksternalizasyon) bakan yüzeye aktarılır. Fosfatidilkolin ve sfingomiyelin normal hücrede zaten dış yaprakçıkta yoğun bulunduğundan bir fagositoz sinyali oluşturmaz. Dış yüzeydeki fosfatidilserin, makrofajların apoptotik cisimleri hücre içine alması için spesifik reseptörlere bağlanır. Bu asimetri kaybı apopitozun en erken laboratuvar saptama (Annexin-V testi) yöntemidir.

**Soru 2 (ID: abf49354-bd0d-43f3-b48d-e164ee0b10fd)**
Soru Kökü: Apopitoz sürecindeki bir hücrenin zarı rüptüre olmaz ancak hücre yüzeyinde yapısal bir modifikasyon gelişir. Makrofajlar tarafından inflamasyon yaratmadan tanınıp fagosite edilmesini sağlayan bu zar değişikliği aşağıdakilerden hangisidir?
Doğru Şık (D): Fosfotidil serin eksternalizasyonu
Açıklama: Fosfotidil serin, normalde hücre zarının iç yaprağında bulunurken apopitoz sürecinde dış yaprağa (eksternalizasyon) taşınarak fagositoz için sinyal oluşturur. Nekrozda hücre zarı doğrudan hasarlanıp parçalandığı için bu tür bir eksternalizasyon mekanizması izlenmez ve zar direkt rüptüre olur. Bu lipit değişimi, hücre kalıntılarının inflamasyona yol açmadan temizlenmesindeki temel hücresel işarettir.

---

### ÇİFT 143 (Benzerlik: 0.79)

**Soru 1 (ID: fbaa3160-b2ab-4afb-b5fe-f28a23252979)**
Soru Kökü: Kök hücrelerin farklılaşması sırasında düzeyleri azalan ancak malign kanser hücrelerinde belirgin şekilde yüksek bulunan, çekirdekçikte lokalize olarak hücre siklusu inhibitörü olan p53'e bağlanan protein aşağıdakilerden hangisidir?
Doğru Şık (E): Nükleostemin
Açıklama: Nükleostemin, çekirdekçikte yerleşik olan ve p53'e bağlanarak hücre döngüsü üzerinde doğrudan etki gösteren spesifik bir proteindir. Emerin nükleer zarın iç yaprağında yer alırken, kaveolin kaveolar lipid raftlarda bulunur. Nükleosteminin yüksekliği, dokulardaki malignite ve immatür hücre belirteci olarak klinikte önemlidir.

**Soru 2 (ID: 4b3f94f5-76c4-46a1-825f-4c36c5b8ba96)**
Soru Kökü: Hücre farklanma sürecinde düzeyi azalan, malign hücrelerde ise belirgin olarak artış gösterdiği bilinen ve çekirdekçik (nükleolus) içinde yerleşerek p53 proteinine bağlanan molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Nükleostemin
Açıklama: Nükleostemin, çekirdekçikte bulunan ve hücre döngüsünü düzenleyen p53 proteinine bağlanarak onu inhibe eden, bu yolla hücre proliferasyonunu destekleyen bir proteindir. Normal farklanma sürecinde azalırken kanser hücrelerinde artışı tipiktir. Protaminler ise yalnızca spermatozoonda histonların yerini alarak DNA'nın sıkı paketlenmesini sağlayan proteinlerdir.

---

### ÇİFT 144 (Benzerlik: 0.79)

**Soru 1 (ID: d1a8c336-38f7-4ffc-9e77-6c8157ef39fa)**
Soru Kökü: Yirmi beş yaşında, Marfan sendromu ön tanılı erkek hastada aort anevrizması nedeniyle rezeksiyon yapılmıştır. Aort duvarındaki elastik lamellerin morfolojik bozulmasını göstermek için aşağıdaki boyalardan hangisi tercih edilmelidir?
Doğru Şık (C): Orsein
Açıklama: Orsein, elastik lifleri boyayarak dokudaki yerleşimlerini net bir şekilde ortaya çıkaran, Weigert ve Verhoeff ile aynı kategoride yer alan özel bir boyadır. Azan bağ dokusunu genel olarak boyarken, PAS sadece karbonhidrat bazlı yapıları hedefler. Marfan sendromundaki fibrillin ve elastin defektinin mikroskobik kanıtı Orsein gibi spesifik boyalarla elde edilir.

**Soru 2 (ID: dbc762d5-3e25-4d5b-bee6-401b5ed9be0f)**
Soru Kökü: 28 yaşında erkek hasta, sistemik eklem hipermobilitesi ve aort genişlemesi şüphesiyle değerlendiriliyor. Destek dokulardaki spesifik bir lif defektini ekarte etmek amacıyla alınan bağ dokusu biyopsisinde, elastik liflerin dağılımını spesifik olarak göstermek için aşağıdaki boya yöntemlerinden hangisi kullanılmalıdır?
Doğru Şık (A): Verhoeff boyası
Açıklama: Verhoeff, Weigert ve Orsein boyaları, bağ dokusundaki elastik liflerin spesifik olarak siyah veya kahverengiye boyanarak diğer bağ dokusu elemanlarından ayırt edilmesini sağlayan özel yöntemlerdir. Gümüşleme retiküler lifleri siyaha boyarken, Azan genel bağ dokusunu renklendirir; elastik lif spesifikitesi taşımazlar. Bu klinik senaryodaki Marfan sendromu benzeri elastik lif zayıflığını mikroskobik olarak doğrulamak için elastik lif spesifik boyalar şarttır.

---

### ÇİFT 145 (Benzerlik: 0.79)

**Soru 1 (ID: bad269da-0604-48d2-be37-f5d725cc1334)**
Soru Kökü: Kırk yaşındaki erkek hastanın travmatik spinal kord yaralanması sonrası motor nöron hasarı inceleniyor. Normalde ışık mikroskobunda yoğun bazofilik odaklar halinde boyanan Nissl cisimlerinin hücrede kaybolduğu gözleniyor. Motor nöronlarda Nissl cismi olarak adlandırılan ve yoğun sentez aktivitesini yansıtan bu yapısal odakların temel bileşeni aşağıdakilerden hangisidir?
Doğru Şık (C): Granüllü endoplazmik retikulum yığınları
Açıklama: Omurilik ön boynuz motor nöronları gibi protein sentez gücü son derece yüksek olan hücrelerde, granüllü endoplazmik retikulum (GER) sarnıçlarının ve üzerindeki ribozomların üst üste yığılarak oluşturduğu yoğun asidofilik/bazofilik boyanan odaklara Nissl cismi adı verilir. Hücre hasarında GER parçalandığı için Nissl cisimleri (kromatolizis süreciyle) kaybolur. Düz ER veya Golgi Nissl cismini oluşturmaz.

**Soru 2 (ID: 0168bc63-6922-4e3c-8aa8-41fc1cb3a754)**
Soru Kökü: Merkezi sinir sistemi dokusundan hazırlanan histolojik kesitlerde, omurilik ön boynuz motor nöronlarının perikaryonunda (gövdesinde) yer alan ve bazik (hematoksilin gibi) boyalarla kümeler halinde yoğun mavi boyanan 'Nissl cisimcikleri' izlenir. Bu yapılar nöronun yüksek sentez kapasitesinin yansıması olan hangi organel topluluğudur?
Doğru Şık (B): Granüllü endoplazmik retikulum sarnıçları
Açıklama: Sentez gücü yüksek hücrelerde (özellikle nöronlar, pankreas asiner hücreleri vb.) yoğun miktarda bulunan Granüllü Endoplazmik Retikulum (GER), yüzeyindeki ribozomal RNA moleküllerinin asidik karakterinden dolayı bazik boyaları (hematoksilin) güçlü bir şekilde çeker. Motor nöronlarda bu GER odakları ve onlara bağlı ribozomların devasa kümeleri ışık mikroskobunda Nissl cismi (taneciği) adını alır.

---

### ÇİFT 146 (Benzerlik: 0.79)

**Soru 1 (ID: d46900e6-1c22-41b7-b151-4d14dee8e994)**
Soru Kökü: Hücre zar sistemlerinde spesifik lipidlerin lokalizasyonu, o bölgenin geçirgenlik ve fonksiyonunu belirler. Buna göre, mitokondriyonun geçirgenliği son derece düşük olan iç zarında yoğun olarak bulunan ve zarın bariyer fonksiyonuna katkı sağlayan fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (B): Kardiolipin
Açıklama: Kardiolipin (difosfotidilgliserol), özellikle mitokondriyonun iç zarına lokalize olmuş spesifik bir membran fosfolipididir ve iç zarın iyonlara karşı yüksek izolasyon sağlamasında kritik rol oynar. Lizo-bifosfatidik asit ise lizozom membranında yer alarak organeli hidrolitik enzimlerden koruyan spesifik bir diğer lipittir.

**Soru 2 (ID: 3b5c4a48-f795-4236-a4e9-3f630fcbfef9)**
Soru Kökü: Mitokondriyonun ATP sentezi yapabilmesi için iç ve dış zarları arasında ciddi bir proton gradiyenti (kemiosmotik eşleme) yaratması gerekmektedir. Mitokondriyon iç zarında yüksek yoğunlukta bulunarak membran geçirgenliğini ileri derecede kısıtlayan ve bu yalıtımı sağlayan spesifik fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (B): Kardiolipin
Açıklama: Mitokondriyon iç zarında çok yoğun miktarda bulunan kardiolipin, iyon ve molekül geçişini oldukça zorlaştırarak elektron transport sistemi için gerekli proton izolasyonunu sağlar. Lizo-bifosfatidik asit lizozom zarını enzimlerden korur, sfingomyelin ise hücre zarında bulunur. Kardiolipin eksikliği hücresel enerji krizinin temel zeminini oluşturur.

---

### ÇİFT 147 (Benzerlik: 0.79)

**Soru 1 (ID: f9fb74b6-826a-4feb-9a3c-626e87abe3f2)**
Soru Kökü: Hücre dışından gelen FasL ve TNF gibi uyarılarla apopitozisin ekstrensek yolağı aktive olmaktadır. Bu kaskadın tetiklenmesi için hücre zarında bu sinyalleri algılayarak yolağı başlatan özel reseptör bölgesi aşağıdakilerden hangisidir?
Doğru Şık (B): Ölüm bölgesi (Death domain)
Açıklama: Ekstrensek uyarılar (FasL, TNF), hücre zarında ölüm bölgesi (death domain) adı verilen özel bölgelerin aktivasyonu ile apopitozis kaskatını başlatırlar. Fokal adezyon plakları hücreyi matrikse bağlar, ölüm sinyali taşımazlar. Bu yapısal ayrım, apopitozun yüzeyden sitoplazmaya nasıl iletildiğinin anlaşılması açısından kritiktir.

**Soru 2 (ID: 6dad7129-21ab-40c9-9342-a9577d3419ed)**
Soru Kökü: Hücre zarında bulunan ölüm bölgelerinin (death domain) uyarılması ile başlayan ve inflamatuvar hücrelerin hedeflenen hücreyi yok etmesini sağlayan apopitozis ekstrensek yolağının kilit tetikleyicisi aşağıdakilerden hangisidir?
Doğru Şık (E): FasL, TNF ve TRAIL
Açıklama: FasL, TNF ve TRAIL gibi dış sinyal molekülleri, hücre zarındaki ölüm bölgelerine bağlanarak apopitozun ekstrensek yolağını başlatırlar. Mitokondri kaynaklı sitokrom c ve hücre içi proteinler ise iç uyarılarla başlayan intrensek yolağın elemanlarıdır. Ekstrensek yolak, immün sistemin dışarıdan müdahale ile sorunlu hücreyi elimine etmesinin temel aracıdır.

---

### ÇİFT 148 (Benzerlik: 0.79)

**Soru 1 (ID: 52a5d735-271b-4dd8-bd75-5b20a9998806)**
Soru Kökü: Ribozomların yapısı, işlevleri ve hücresel lokalizasyonlarıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Ribozomlarda sentezlenen spesifik lizozomal enzimler doğrudan sitoplazmaya salınır.
Açıklama: Lizozomal enzimler, hücre zarı proteinleri ve salgı proteinleri serbest ribozomlarda DEĞİL, zarlarına tutundukları granüllü endoplazmik retikulum (GER) ribozomlarında sentezlenir ve doğrudan GER lümenine verilir. Serbest ribozomlar sadece hücrenin kendi içinde (sitoplazma, nükleus, mitokondri) kullanacağı proteinleri üretir. Dolayısıyla lizozomal enzimlerin serbest ribozomlarda sentezlenip sitoplazmaya çıkması hücresel otoliz tablosuna yol açar, bu durum imkansızdır.

**Soru 2 (ID: 5f6e8450-b07e-40a0-9c79-6e5607c0bd5d)**
Soru Kökü: Sitoplazma içerisinde hücrenin kendi ihtiyacı olan iç proteinlerin sentezinden sorumlu organellerle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Lizozomal enzimlerin ve salgı proteinlerinin de tüm yapım aşamasını kendi başlarına sitoplazmada tamamlarlar.
Açıklama: Serbest sitoplazmik ribozomlar hücrenin iç ihtiyaçları doğrultusundaki proteinleri sentezlemekle görevlidir; ancak lizozomal asit hidrolazlar ve hücre zarı dışına gidecek salgı proteinleri granüllü endoplazmik retikulum (GER) ribozomları üzerinde translasyona uğramak zorundadır. Hücre dışı/lizozomal üretim serbest ribozomlarda kalmaz, GER lümenine yönlendirilir.

---

### ÇİFT 149 (Benzerlik: 0.79)

**Soru 1 (ID: 55c2293f-e790-4885-8e44-9fce1681e5e7)**
Soru Kökü: On sekiz yaşındaki erkek hasta, ilerleyici kas güçsüzlüğü ve eklem kontraktürleri şikayetiyle başvuruyor. Yapılan genetik analizde iç çekirdek membranını nükleer laminaya bağlayan bir reseptör proteininde mutasyon saptanıyor ve hastaya Emery-Dreifuss musküler distrofisi tanısı konuyor. Bu hastada mutasyona uğramış olması en olası protein aşağıdakilerden hangisidir?
Doğru Şık (D): Emerin
Açıklama: Emerin, membranı 8 kez geçen bir Lamin B reseptörüdür ve Lamin B'nin iç çekirdek zarına tutunmasını sağlayarak çekirdek bütünlüğünü korur. Emerin veya laminleri kodlayan genlerdeki mutasyonlar, nükleer lamina yapısını bozarak Emery-Dreifuss musküler distrofisi gibi laminopatilere neden olur. Lamin A ve C doğrudan nükleer ara filaman yapısını oluşturur ancak reseptör görevi görmezler.

**Soru 2 (ID: f8f61b08-b97e-4bbb-8f4a-f0f93295856d)**
Soru Kökü: 14 yaşında erkek çocuk, ilerleyici kas güçsüzlüğü ve eklemlerde kontraktür şikayetleriyle getirilmiş olup 'Emery-Dreifuss musküler distrofisi' tanısı almıştır. Genetik testler sonucunda çekirdeğin mekanik stabilitesini sağlayan yapılarda defekt saptanmıştır. Bu hastadaki patolojinin kaynağı olan yapı hücresel düzeyde aşağıdakilerden hangisidir?
Doğru Şık (A): Nükleer lamina
Açıklama: Emery-Dreifuss musküler distrofisi ve Charcot-Marie-Tooth tip 2 gibi hastalıklar, nükleer laminada (Lamin A/C veya emerin genlerinde) mutasyon sonucu gelişen ve 'laminopati' olarak adlandırılan hastalık grubundandır. Defekt, doğrudan çekirdeğin yapısal bütünlüğünü bozan nükleer lamina zafiyetinden kaynaklanır; nükleer porlar moleküler trafiği, kaveolalar ise hücre zarı sinyalizasyonunu yönetir.

---

### ÇİFT 150 (Benzerlik: 0.79)

**Soru 1 (ID: 0edcb97f-ecbc-47e1-adb8-122d1776d727)**
Soru Kökü: Aşağıdakilerden hangisi hücre içi dengenin korunmasında kilit rol oynayan granülsüz (düz) endoplazmik retikulumun fizyolojik fonksiyonlarından biri **değildir**?
Doğru Şık (B): Erken endozoma gidecek lizozomal enzimlerin mannoz modifikasyonlarını gerçekleştirmek
Açıklama: Mannoz-6-fosfat eklenerek hidrolazların hedeflenmesi ve veziküllerin paketlenmesi Golgi kompleksinin görev kapsamındadır. Düz ER, kalsiyum depolar, steroid/fosfolipid sentezler, makrootofajide izolasyon zarı oluşturur ve glikojen metabolizmasına katılır.

**Soru 2 (ID: e083acbd-0ff1-4e1c-abb7-d82d4eefcc68)**
Soru Kökü: Protein işlenmesi sürecinde kilit rol oynayan granüllü endoplazmik retikulumun (GER) görevleri arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (A): Sfingomyelin ve glikosfingolipidlerin sentezlenmesi
Açıklama: Sfingomyelin ve glikosfingolipidlerin sentezi doğrudan Golgi cismi tarafından üstlenilen bir metabolik süreçtir. Granüllü ER, N-bağlı glikozilasyon, protein katlanması, disülfit bağlarının kurulması ve sinyal dizilerinin kesilerek proteinlerin veziküllere hazırlanmasıyla görevlidir.

---

### ÇİFT 151 (Benzerlik: 0.79)

**Soru 1 (ID: ccc17104-8119-4647-b99d-a7cb28992ccd)**
Soru Kökü: Ciddi alerjik döküntüsü olan hastanın cilt biyopsisinde, degranülasyon gösteren mast hücreleri incelenecektir. Mast hücre granüllerinin sülfatlı içeriği sayesinde metakromatik bir reaksiyon vererek tanıyı pratikleştiren boya aşağıdakilerden hangisidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Toluidin mavisi, yapısındaki moleküler özellik nedeniyle mast hücresindeki heparine (polianyonik GAG) bağlandığında rengini maviden kırmızı-mora kaydırarak 'metakromazi' fenomenini oluşturur. Eozin asidik, Mallory ise bağ dokusu boyası olup mast hücre granüllerindeki yoğun anyonik yapıyla bu spesifik renk değişimini yaratma kapasitesine sahip değildir. Bu renk kayması, biyopsilerde inflamatuvar mast hücrelerinin hızlı tespitini sağlayan bir klinik markerdir.

**Soru 2 (ID: 5739c890-4cf9-409f-ab80-0cf4877b2384)**
Soru Kökü: 42 yaşında kadın hasta, kaşıntılı deri lezyonları şikayetiyle başvuruyor. Alınan insizyonel biyopsi materyalinde mast hücre degranülasyonu araştırılacaktır. Mast hücre granüllerini polianyonik yapıları üzerinden spesifik olarak boyamak için aşağıdaki boyalardan hangisi tercih edilmelidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Mast hücre granülleri içerdikleri yoğun heparin sülfat nedeniyle polianyonik bir karaktere sahiptir ve bazik boyalarla etkileşime girdiğinde metakromazi gösterirler. Toluidin mavisi bu amaçla kullanılan en spesifik boyadır ve mast hücre granüllerini kendi orijinal renginden farklı bir tonda görünür kılar. Eosin veya Azan gibi boyalar bu polianyonik seçiciliği sağlayamazlar.

---

### ÇİFT 152 (Benzerlik: 0.79)

**Soru 1 (ID: ccc17104-8119-4647-b99d-a7cb28992ccd)**
Soru Kökü: Ciddi alerjik döküntüsü olan hastanın cilt biyopsisinde, degranülasyon gösteren mast hücreleri incelenecektir. Mast hücre granüllerinin sülfatlı içeriği sayesinde metakromatik bir reaksiyon vererek tanıyı pratikleştiren boya aşağıdakilerden hangisidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Toluidin mavisi, yapısındaki moleküler özellik nedeniyle mast hücresindeki heparine (polianyonik GAG) bağlandığında rengini maviden kırmızı-mora kaydırarak 'metakromazi' fenomenini oluşturur. Eozin asidik, Mallory ise bağ dokusu boyası olup mast hücre granüllerindeki yoğun anyonik yapıyla bu spesifik renk değişimini yaratma kapasitesine sahip değildir. Bu renk kayması, biyopsilerde inflamatuvar mast hücrelerinin hızlı tespitini sağlayan bir klinik markerdir.

**Soru 2 (ID: e7e1f5df-1dbe-48ef-ae75-80d80c1abad6)**
Soru Kökü: 42 yaşında kadın hasta, kaşıntılı deri lezyonları şikayetiyle başvuruyor. Alınan insizyonel biyopsi materyalinde mast hücre degranülasyonu araştırılacaktır. Mast hücre granüllerini polianyonik yapıları üzerinden spesifik olarak boyamak için aşağıdaki boyalardan hangisi tercih edilmelidir?
Doğru Şık (C): Toluidin mavisi
Açıklama: Mast hücre granülleri içerdikleri yoğun heparin sülfat nedeniyle polianyonik bir karaktere sahiptir ve bazik boyalarla etkileşime girdiğinde metakromazi gösterirler. Toluidin mavisi bu amaçla kullanılan en spesifik boyadır ve mast hücre granüllerini kendi orijinal renginden farklı bir tonda görünür kılar. Eosin veya Azan gibi boyalar bu polianyonik seçiciliği sağlayamazlar.

---

### ÇİFT 153 (Benzerlik: 0.79)

**Soru 1 (ID: a1db3045-c7b3-4c6f-832b-fdffa9571c19)**
Soru Kökü: Elli beş yaşında erkek hasta, baş boyun bölgesindeki karsinom nedeniyle radyoterapi seansları almaktadır. Tedavi sonrası tümör dokusundan alınan kontrol biyopsisinde, radyasyonun hücrelerde ciddi DNA kırıklarına ve protein hasarına yol açarak tümör hücrelerini programlı hücre ölümüne zorladığı tespit edilmiştir. Bu radyasyon hasarı sonrasında karsinom hücrelerinde ölüm kaskadını başlatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): İntrensek yolak - Hücre içi protein kaskatlarının aktivasyonu
Açıklama: Radyoterapi, doğrudan DNA kırıkları ve hücresel stres oluşturarak hücre içi protein kaskatlarını (intrensek yolağı) aktive eder ve hücreyi apopitoza sürükler. Ekstrensek yolak veya FasL aktivasyonu hücre dışından gelen sinyal moleküllerine bağlıdır; oysa radyasyonun oluşturduğu hasar tamamen hücre içi (intrensek) bir sensör mekanizması ile algılanır. Terapötik onkolojide radyasyonun asıl hedefi bu intrensek hasar kontrol mekanizmalarını tümör aleyhine çalıştırmaktır.

**Soru 2 (ID: 9ca08162-4a94-4d57-ab77-b7d3d83057d0)**
Soru Kökü: 55 yaşında erkek hasta radyoterapi almaktadır. Radyasyonun DNA hasarı oluşturması sonucu hücre içi proteinlerin aktivasyonu ile tetiklenen apopitozis mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): İntrensek yolak
Açıklama: Radyasyon, kemoterapi veya oksidatif stres gibi etkenlerle hücre içi DNA hasarının algılanması, mitokondri kaynaklı proteinlerin aktivasyonu üzerinden apopitozun intrensek yolağını tetikler. Ekstrensek yolak hücre yüzeyindeki FasL veya TNF gibi dış ortamdan gelen ligantların bağlanmasıyla aktive olur. DNA tamir mekanizmalarının yetersiz kaldığı onkolojik tedavilerin temel hücre ölüm prensibi intrensek yolağın başlatılmasıdır.

---

### ÇİFT 154 (Benzerlik: 0.79)

**Soru 1 (ID: 1dec2377-4368-41b8-a20f-177dcc1eb02d)**
Soru Kökü: Mayoz bölünme Profaz I aşamasının son evresinde homolog kromozomların tamamen birbirinden ayrıldığı ve hücrenin metafaza geçiş için hazırlandığı aşama aşağıdakilerden hangisidir?
Doğru Şık (B): Diakinez
Açıklama: Diakinez, Profaz I'in son basamağıdır ve bu evrede homolog kromozomlar (kiazmata bağları hariç) birbirinden tamamen ayrılarak metafaz I plağına yerleşmek üzere serbestleşir. Pakiten'de crossing over olur, Diploten'de ayrılma başlasa da kiazmata net izlenir ve oosit bekler. Tam ayrışma Diakinez'in karakteristiğidir.

**Soru 2 (ID: 0daa7faf-0b38-4e3f-af50-1f00ecb99265)**
Soru Kökü: Mayoz I Profaz I aşaması kendi içinde spesifik hücresel olayların gerçekleştiği evrelere ayrılır. Homolog kromozomların hücre içinde yan yana gelmeye başladığı ilk evre aşağıdakilerden hangisidir?
Doğru Şık (D): Leptoten
Açıklama: Profaz I evresinin ilk basamağı olan Leptoten'de, homolog kromozomlar kromatin yoğunlaşmasıyla belirginleşir ve yan yana gelmeye başlar. Bunu takiben Zigoten'de sinapsis başlar, Pakiten'de crossing over gerçekleşir ve Diakinez'de tamamen ayrılırlar. Leptoten, sinaptonemal kompleksin fiziksel temelinin atıldığı başlangıç evresidir.

---

### ÇİFT 155 (Benzerlik: 0.79)

**Soru 1 (ID: 0dbf8a63-ccd3-48cd-b5d2-c8df72150df1)**
Soru Kökü: Apopitoz sürecinde ekstrensek yolak, hücre zarı dışından gelen spesifik sinyallerle aktive olur. Aşağıdakilerden hangisi bu ekstrensek yolağı başlatan ölüm bölgesi (death domain) aktivatörlerinden biri **değildir**?
Doğru Şık (D): Endoplazmik retikulum
Açıklama: Endoplazmik retikulum (ER) stresi ve mitokondriyal hasarlar, hücre dışı sinyallerle değil, hücre içi uyarılarla çalışan intrensek apopitoz yolağını aktive eder. FasL, TNF ve TRAIL ise hücre zarındaki ölüm bölgesi (death domain) reseptörlerine bağlanarak dışarıdan ölüm emri veren ekstrensek yolak aktivatörleridir. Bu ayırım hücresel hasarın kaynağını gösterir.

**Soru 2 (ID: f9fb74b6-826a-4feb-9a3c-626e87abe3f2)**
Soru Kökü: Hücre dışından gelen FasL ve TNF gibi uyarılarla apopitozisin ekstrensek yolağı aktive olmaktadır. Bu kaskadın tetiklenmesi için hücre zarında bu sinyalleri algılayarak yolağı başlatan özel reseptör bölgesi aşağıdakilerden hangisidir?
Doğru Şık (B): Ölüm bölgesi (Death domain)
Açıklama: Ekstrensek uyarılar (FasL, TNF), hücre zarında ölüm bölgesi (death domain) adı verilen özel bölgelerin aktivasyonu ile apopitozis kaskatını başlatırlar. Fokal adezyon plakları hücreyi matrikse bağlar, ölüm sinyali taşımazlar. Bu yapısal ayrım, apopitozun yüzeyden sitoplazmaya nasıl iletildiğinin anlaşılması açısından kritiktir.

---

### ÇİFT 156 (Benzerlik: 0.78)

**Soru 1 (ID: 0deb7ebc-7cd6-4d4f-8f71-1022fc8c86f3)**
Soru Kökü: 28 yaşında erkek hasta, bir yıldır devam eden çocuk sahibi olamama ve tekrarlayan solunum yolu enfeksiyonları şikayetiyle başvuruyor. Sperm analizinde spermlerin hareketsiz olduğu ve hastanın Kartegener sendromu olduğu saptanıyor. Bu hastada mutasyona uğrayan dynein proteini aşağıdaki yapıların hangisinde temel fonksiyon gösterir?
Doğru Şık (C): Motil silyum
Açıklama: Kartagener sendromu, dynein motor proteinindeki genetik bir mutasyon sonucu ortaya çıkar. Dynein, solunum yolları ve spermlerde bulunan 9+2 düzenlenimli motil silyumların hareketini sağladığı için mutasyonunda inaktif sperm (infertilite) ve mukosiliyer klirens bozukluğu (solunum enfeksiyonları) görülür.

**Soru 2 (ID: 2ad54d31-8869-429c-add1-42f77cf40bb6)**
Soru Kökü: 28 yaşında erkek hasta, çocukluk çağından beri süren tekrarlayan solunum yolu enfeksiyonları ve 3 yıldır devam eden infertilite şikayetiyle kliniğe başvuruyor. Yapılan tetkiklerde solunum yollarında mukosiliyer klirensin durduğu ve spermlerin kuyruk hareketinin olmadığı saptanıyor. Hastada saptanan bu sendromun patogenezinde, mikrotübül çiftlerinin birbirleri üzerinden kaymasını sağlayan aşağıdaki proteinlerden hangisinin eksikliği rol oynar?
Doğru Şık (B): Dynein
Açıklama: Klinik senaryoda tanımlanan tablo, silyaların ve sperm kuyruğunun (flagellum) temel hareket motoru olan aksonemal dynein kollarının konjenital yokluğu ile karakterize Kartagener sendromudur. Nexin çevresel mikrotübül çiftlerini sadece birbirine bağlayan elastik bir proteindir ve atım kuvveti üretemez. Dynein ATPaz eksikliği siliyer atımı durdurarak solunum problemlerine ve sperm motilitesini engelleyerek infertiliteye neden olur. Aksonem motor defektlerinin en prototipik hücresel mekanizması bu protein eksikliği ile açıklanır.

---

### ÇİFT 157 (Benzerlik: 0.78)

**Soru 1 (ID: c4267e06-9784-4601-bc1e-b653f869ad23)**
Soru Kökü: Bir patoloji laboratuvarında hücresel hasar paterni incelenen bir dokuda hem nekrotik hem de apoptotik hücreler izlenmektedir. Mikroskobik inceleme sırasında aşağıdakilerden hangisinin görülmesi, hücrenin apopitoza uğradığını gösteren spesifik bir özellik **değildir**?
Doğru Şık (E): Hücre zarı bütünlüğünün bozularak intraselüler proteinlerin sızması
Açıklama: Hücre zarı bütünlüğünün bozulması (hasarlanması) ve sitoplazmik içeriğin doku aralığına sızarak inflamasyon başlatması sadece nekrozun özelliğidir. Apopitozda hücre zarının bütünlüğü korunur, membran dışa doğru tomurcuklanır (blebbing) ve fosfotidil serin eksternalizasyonuyla fagositoza zemin hazırlar. Çekirdek fragmantasyonu ve kromatin agregasyonu apoptozun ayırıcı klasik bulgularıdır.

**Soru 2 (ID: 87d4e351-b0b6-4642-8789-ff46cbb0c2e8)**
Soru Kökü: Programlı hücre ölümü olan apopitoz süreci, patolojik hücre ölümü olan nekrozdan farklı morfolojik aşamalara sahiptir. Apopitozun morfolojik belirtileriyle ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (A): Hücre büzüşmesi izlenir.
Açıklama: Apopitoz sürecinde hücre hacim kaybeder ve hücre büzüşmesi (shrinkage) meydana gelir, bu sırada hücre zarı bütünlüğünü korur. Hücre şişmesi, zarın parçalanması ve içeriğin dışarı sızarak inflamasyona neden olması nekrozun tipik morfolojik ve klinik özellikleridir. Apopitoz sessiz ve inflamasyon yaratmayan bir fizyolojik tasfiye yöntemidir.

---

### ÇİFT 158 (Benzerlik: 0.78)

**Soru 1 (ID: be8c311b-cef4-40fd-b337-b7e0f3293b8f)**
Soru Kökü: Lökositlerin inflamasyon alanına göçü sırasında gerçekleşen diapedez sürecinde, lökositin endotel hücresine sıkıca tutunmasını sağlayan protein etkileşimi aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (A): Lökosit integrini - Endotel CAM molekülü
Açıklama: Lökosit diapedezinin ilk zayıf aşamasında yuvarlanmayı 'Lökosit selektin - endotel selektin' eşleşmesi başlatır. Ardından sıkı tutunma aşamasında, lökosit membranı üzerindeki integrinler ile endotel zarında bulunan İmmünoglobulin süper ailesine (IgSF) ait CAM molekülleri heterofilik olarak etkileşime girer.

**Soru 2 (ID: b2c6890b-2a83-4442-9c4d-64177d828848)**
Soru Kökü: İnflamatuvar bir süreçte lökositlerin damar endoteline sıkıca tutunduğu ve diapedezin 2. aşamasına geçtiği bilinmektedir. Bu aşamada lökosit membranı üzerindeki integrinler, endotel yüzeyindeki hangi protein ailesi ile güçlü bir etkileşime girer?
Doğru Şık (C): Ig CAM (İmmünglobulin adezyon) ailesi
Açıklama: Lökosit diapedezinin 2. ve kesin durdurucu aşamasında, lökosit membranı üzerindeki aktive olmuş integrin molekülleri, endotel yüzeyinde eksprese edilen I-CAM ve V-CAM gibi Ig üst ailesine (CAM) ait proteinlerle çok sıkı bir etkileşim kurar. Selektinler bağın ilk ve gevşek tutunma kısmında görev almıştır. Integrin-CAM bağlantısı olmadan lökositlerin damar dışına göçü tamamlanamaz.

---

### ÇİFT 159 (Benzerlik: 0.78)

**Soru 1 (ID: dde88685-b2cc-4970-a545-33c8034442b8)**
Soru Kökü: Hücre dışı matrikse tutunmayı sağlayan asimetrik bağlantılardan hemidesmozom ve fokal adezyonu birbirinden ayıran en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Hücre içinde bağlandıkları hücre iskeleti elemanlarının farklı olması
Açıklama: Hemidesmozomlar ve fokal adezyonların her ikisi de integrin kullanarak asimetrik olarak hücre dışı matrikse tutunurlar. Ancak fokal adezyon hücre içi tarafta aktin filamanlarına bağlanarak migrasyon ve dinamizm sağlarken; hemidesmozom ara filamanlara (keratin vb.) tutunarak epitel hücresini bazal lamine kalıcı olarak sabitler.

**Soru 2 (ID: 8adf6565-d357-4d76-9c87-e14e07d23a76)**
Soru Kökü: Hücreyi hücre dışı matrikse bağlayan asimetrik bağlantı komplekslerinden biri olan "fokal adezyonlar" hücre dinamizmine önemli katkı sağlar. Aşağıdakilerden hangisi fokal adezyon yapısının temel özelliklerinden biri **yanlıştır**?
Doğru Şık (D): Hücrenin bazal membranda sabit ve hareketsiz durmasını sağlayan güçlü ara filaman bağlantısı içerir.
Açıklama: Fokal adezyonlar hücre iskeletindeki aktif ve dinamik olan aktin filamanlarına tutunur, statik ara filamanlara bağlanan yapı ise hemidesmozomdur. Fokal adezyon hücrenin zemin üzerinde hareket edebilmesi (migrasyon) ve mekanik sinyalleri çekme şeklinde hücre içine iletebilmesi için gereklidir. Ara filaman bağlantısı hücreyi kilitleyerek statik stabilizasyon sağlayan yapılara (desmozom grupları) özgüdür.

---

### ÇİFT 160 (Benzerlik: 0.78)

**Soru 1 (ID: ced7d76d-454c-487e-8930-31115c3e7e11)**
Soru Kökü: 12 yaşında erkek çocuk, ilerleyici kas güçsüzlüğü şikayetiyle değerlendiriliyor. Kas biyopsisinde mitokondriyal myopati şüphesiyle mitokondriyonların sayım ve morfolojik analizi yapılacaktır. Bu organeli spesifik olarak boyamak için aşağıdaki yöntemlerden hangisi seçilmelidir?
Doğru Şık (E): Demirli hematoksilin
Açıklama: Işık mikroskobunda mitokondriyonları klasik yöntemlerle ayırt etmek zordur, bu yüzden organele afinitesi yüksek olan spesifik demirli hematoksilin boyası kullanılır. Bu ajan, hücresel solunum organellerindeki fosfolipid-protein komplekslerine bağlanarak onları koyu renkte belirginleştirir. Feulgen DNA için, Sudan black ise genel lipid yığınları için tercih edildiğinden organel spesifik değildir.

**Soru 2 (ID: 83cd9d3e-e4dc-40db-b306-f89629e06450)**
Soru Kökü: Otuz beş yaşında kas güçsüzlüğü ve egzersiz intoleransı şikayetleri olan hastaya kas biyopsisi yapılmış, membran düzeyinde bir mitokondriyal patolojiden şüphelenilmiştir. Kas lifleri içerisindeki mitokondriyal yoğunluğu ışık mikroskobunda en spesifik biçimde gösterecek boya aşağıdakilerden hangisidir?
Doğru Şık (C): Demirli hematoksilin
Açıklama: Demirli hematoksilin, hücre içindeki mitokondriyal kütleyi spesifik bir reaksiyonla karartarak gösteren ve özellikle miyopati değerlendirmelerinde mitokondri morfolojisini incelemek için tasarlanmış bir boyadır. Feulgen DNA'yı, Pironin RNA'yı hedeflediği için mitokondri membran yapısına bağlanamazlar. Ragged-red fibrilleri gibi mitokondriyal birikimlerin araştırılmasında bu seçici hücresel boya kritik bir tanı aracıdır.

---

### ÇİFT 161 (Benzerlik: 0.78)

**Soru 1 (ID: 38153661-6b15-4350-9395-0612960121af)**
Soru Kökü: 12 yaşında erkek çocuk, ilerleyici kas güçsüzlüğü şikayetiyle değerlendiriliyor. Kas biyopsisinde mitokondriyal myopati şüphesiyle mitokondriyonların sayım ve morfolojik analizi yapılacaktır. Bu organeli spesifik olarak boyamak için aşağıdaki yöntemlerden hangisi seçilmelidir?
Doğru Şık (E): Demirli hematoksilin
Açıklama: Işık mikroskobunda mitokondriyonları klasik yöntemlerle ayırt etmek zordur, bu yüzden organele afinitesi yüksek olan spesifik demirli hematoksilin boyası kullanılır. Bu ajan, hücresel solunum organellerindeki fosfolipid-protein komplekslerine bağlanarak onları koyu renkte belirginleştirir. Feulgen DNA için, Sudan black ise genel lipid yığınları için tercih edildiğinden organel spesifik değildir.

**Soru 2 (ID: 83cd9d3e-e4dc-40db-b306-f89629e06450)**
Soru Kökü: Otuz beş yaşında kas güçsüzlüğü ve egzersiz intoleransı şikayetleri olan hastaya kas biyopsisi yapılmış, membran düzeyinde bir mitokondriyal patolojiden şüphelenilmiştir. Kas lifleri içerisindeki mitokondriyal yoğunluğu ışık mikroskobunda en spesifik biçimde gösterecek boya aşağıdakilerden hangisidir?
Doğru Şık (C): Demirli hematoksilin
Açıklama: Demirli hematoksilin, hücre içindeki mitokondriyal kütleyi spesifik bir reaksiyonla karartarak gösteren ve özellikle miyopati değerlendirmelerinde mitokondri morfolojisini incelemek için tasarlanmış bir boyadır. Feulgen DNA'yı, Pironin RNA'yı hedeflediği için mitokondri membran yapısına bağlanamazlar. Ragged-red fibrilleri gibi mitokondriyal birikimlerin araştırılmasında bu seçici hücresel boya kritik bir tanı aracıdır.

---

### ÇİFT 162 (Benzerlik: 0.78)

**Soru 1 (ID: d6c63ddb-d9ed-46b6-85b5-babbc4e2b691)**
Soru Kökü: Salgı hücresinde üretilen bir proteinin sentezi sitoplazmadaki ribozomlarda başlar, ardından ribozom granüllü endoplazmik retikulum (GER) zarına bağlanır. Bu süreçte serbest ribozomdaki translasyon işlemini durdurarak kompleksi GER zarına yönlendiren sitozolik faktör aşağıdakilerden hangisidir?
Doğru Şık (D): Sinyal tanıma partikülü (SRP)
Açıklama: Serbest ribozomda sentezlenen zincirin başındaki 'sinyal peptidi'ne bağlanan Sinyal Tanıma Partikülü (SRP), translasyonu geçici olarak durdurur ve ribozom-mRNA kompleksini GER membranındaki SRP reseptörüne götürür. Translocator ribozomu membrana bağlayan porun kendisidir, sinyal peptidaz ise lümende sinyal peptidini kesen enzimdir. SRP, serbest translasyonun GER güdümlü translasyona dönüştüğü kilit noktadır.

**Soru 2 (ID: ad7c959e-e793-4b6a-8d07-799f212041fd)**
Soru Kökü: Proteinlerin sentez mekanizması araştırılırken; sitozolik ribozomun GER yüzeyine kilitlenmesini takiben, sinyal tanıma partikülünün (SRP) yerini alarak protein zincirinin translasyonunun aksamadan sürmesine aracılık eden protein membran kompleksi aşağıdakilerden hangisidir?
Doğru Şık (C): Translocon sarnıcı
Açıklama: Translocon kompleksi, GER zarında bulunan ve translocator adlı proteinleri sayesinde SRP'yi lümene alan kanallardır. Ribozom zarına SRP uyarısıyla yanaşır ancak zincirin içeriye dökülmesi için translokon bariyeri esnemeli ve SRP molekülü protein çevriminden izole edilmelidir.

---

### ÇİFT 163 (Benzerlik: 0.78)

**Soru 1 (ID: 0e4a5ac6-c1c3-4edd-bf6b-c934e3a5a072)**
Soru Kökü: İlaç kullanan hastalarda suda çözünmeyen kimyasalların metabolize edilerek böbreklerden atılabilir hale getirilmesi (detoksifikasyon) işlemini sitokrom P-450 enzimleri aracılığıyla yürüten hücresel organel aşağıdakilerden hangisidir?
Doğru Şık (A): Granülsüz endoplazmik retikulum
Açıklama: Granülsüz (düz) endoplazmik retikulum, özellikle karaciğer hücrelerinde sitokrom P-450 enzimleri ile hidrofobik ilaç ve toksinlerin detoksifikasyonundan sorumludur. Peroksizomlar da alkol metabolizması gibi bazı detoksifikasyon reaksiyonlarına katılsa da, ilaçların suda çözünür hale getirilerek böbrekten atılmasını sağlayan temel merkez granülsüz ER'dir.

**Soru 2 (ID: f2e40118-0023-4b90-ab78-1e12a6bdc4c3)**
Soru Kökü: Otuz yaşında kadın hasta, yüksek dozda barbitürat (lipid çözünür bir ilaç) alımı intoksikasyonu nedeniyle acile getiriliyor. Karaciğer histolojisi incelendiğinde, ilacı detoksifiye etmek ve suda çözünür böbrekten atılabilir hale getirmek için sitokrom P-450 enzimi barındıran bir organelde masif hipertrofi beklenir. Bu süreçten doğrudan sorumlu organel aşağıdakilerden hangisidir?
Doğru Şık (C): Granülsüz (düz) endoplazmik retikulum
Açıklama: Suda çözünmeyen kimyasalların (ilaçlar, zehirler) detoksifikasyonu ve böbreklerden atılabilir hale getirilmesi, karaciğer hücrelerinde sitokrom P-450 enzim sistemini barındıran granülsüz (düz) endoplazmik retikulumun temel görevidir. Peroksizomlar da toksin (alkol) yıkımı yapar ancak sitokrom P-450 sistemi spesifik olarak düz ER'nin membran yüzeyinde konumlanmıştır.

---

### ÇİFT 164 (Benzerlik: 0.78)

**Soru 1 (ID: eef6d7e2-5ce2-4ed5-a11c-b517c6e9cb33)**
Soru Kökü: Beş yaşında bir erkek çocuk, periferal ve santral sinir sistemini etkileyen ilerleyici demiyelinizan nöropati bulgularıyla pediatri kliniğine yatırılıyor. Sinir biyopsisinde, miyelin kılıfın membran yapısında majör oranda bulunması gereken "plazmalojen" isimli fosfolipidin sentezlenemediği anlaşılıyor. Bu molekülün spesifik katabolik/anabolik sentezinden sorumlu hücre organeli aşağıdakilerden hangisidir?
Doğru Şık (A): Peroksizom
Açıklama: Plazmalojen, özellikle santral sinir sistemi myelin kılıf yapısında son derece kritik öneme sahip bir eter fosfolipidtir ve sentezinin ilk ve en kritik aşamaları münhasıran peroksizomlarda gerçekleşir. Peroksizomal defektler bu nedenle nöromotor gelişimi bloke eden ağır miyelin formasyon defektleri yaratır.

**Soru 2 (ID: c1456077-b322-4ab6-bef6-43c54dcee454)**
Soru Kökü: Santral sinir sistemi myelin kılıfında yüksek oranda bulunan plazmalojen adlı spesifik fosfolipidin hücresel düzeyde sentezini gerçekleştiren organel aşağıdakilerden hangisidir?
Doğru Şık (B): Peroksizom
Açıklama: Plazmalojen, ağırlıklı olarak myelin kılıf yapısında bulunan bir fosfolipidtir ve ilk sentez aşamaları peroksizom organelinde gerçekleşir. Granülsüz ER genel yağ asidi ve fosfolipid sentez merkezi olmasına rağmen, plazmalojen spesifik sentezi doğrudan peroksizomal fonksiyonlarla bağlantılıdır.

---

### ÇİFT 165 (Benzerlik: 0.78)

**Soru 1 (ID: 8387e754-cad9-4119-a7fe-7439c0a27cc0)**
Soru Kökü: İki yaşında kız çocuğu, iskelet anomalileri ve şiddetli psikomotor gerilik şikayetiyle getiriliyor. İncelemede, hücre içinde bulunması gereken hidrolaz enzimlerinin lizozomlar yerine hücre dışı sıvıya (kanda) yoğun olarak salgılandığı ve bu nedenle I-hücresi hastalığı geliştiği saptanıyor. Bu lizozomal enzimlerin Golgi kompleksinde doğru veziküle yönlendirilmesi için sahip olması gereken ancak hastada üretilemeyen spesifik işaret aşağıdakilerden hangisidir?
Doğru Şık (C): Mannoz-6-fosfat (M6P)
Açıklama: Golgi cisminin cis yüzüne ulaşan yeni sentezlenmiş asit hidrolaz enzimleri, burada mannoz-6-fosfat (M6P) ile işaretlenmelidir. Bu işaret trans yüzdeki M6P reseptörüne bağlanarak enzimin lizozoma yönlendirilmesini (sorting) sağlar. İşaretleme yapılamadığında enzimler standart sekresyon (yapısal salgı yolağı) yoluyla hücre dışına dökülür ve lizozomlar işlevsiz kalır (I-hücresi hastalığı patogenezi).

**Soru 2 (ID: 93833fda-c865-4296-86fb-237a0ff669dc)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

---

### ÇİFT 166 (Benzerlik: 0.78)

**Soru 1 (ID: 8387e754-cad9-4119-a7fe-7439c0a27cc0)**
Soru Kökü: İki yaşında kız çocuğu, iskelet anomalileri ve şiddetli psikomotor gerilik şikayetiyle getiriliyor. İncelemede, hücre içinde bulunması gereken hidrolaz enzimlerinin lizozomlar yerine hücre dışı sıvıya (kanda) yoğun olarak salgılandığı ve bu nedenle I-hücresi hastalığı geliştiği saptanıyor. Bu lizozomal enzimlerin Golgi kompleksinde doğru veziküle yönlendirilmesi için sahip olması gereken ancak hastada üretilemeyen spesifik işaret aşağıdakilerden hangisidir?
Doğru Şık (C): Mannoz-6-fosfat (M6P)
Açıklama: Golgi cisminin cis yüzüne ulaşan yeni sentezlenmiş asit hidrolaz enzimleri, burada mannoz-6-fosfat (M6P) ile işaretlenmelidir. Bu işaret trans yüzdeki M6P reseptörüne bağlanarak enzimin lizozoma yönlendirilmesini (sorting) sağlar. İşaretleme yapılamadığında enzimler standart sekresyon (yapısal salgı yolağı) yoluyla hücre dışına dökülür ve lizozomlar işlevsiz kalır (I-hücresi hastalığı patogenezi).

**Soru 2 (ID: f6782a2f-180e-4864-9c33-e127b6fcae3f)**
Soru Kökü: İki yaşında erkek hasta, kaba yüz hatları, motor gelişim geriliği ve çoklu iskelet anomalileri ile kliniğe getiriliyor. Yapılan laboratuvar incelemesinde hücre içi lizozomların boş olduğu ve tüm lizozomal hidrolazların yüksek seviyelerde plazmaya döküldüğü (salgılandığı) görülüyor. Bu hastada patolojiye neden olan hücresel defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Mannoz-6-fosfat reseptörüne bağlanma defekti
Açıklama: I-hücresi hastalığında temel patoloji Golgi cisminin cis yüzünde enzimlere Mannoz-6-fosfat (M6P) eklenememesi veya trans yüzündeki M6P reseptörüne bağlanılamamasıdır. Bu defekt nedeniyle lizozom enzimleri veziküle paketlenemez, yapısal salgı yolağına yönlenerek gereksiz yere kana salgılanır. Bu nedenle hücre içi lizozomlar boştur, plazmada ise enzim seviyeleri çok yüksektir.

---

### ÇİFT 167 (Benzerlik: 0.78)

**Soru 1 (ID: 20ed53bf-d6e5-474e-a56e-5de77b1dbfb7)**
Soru Kökü: Hücre zarının amfipatik özellikli bileşenleri incelendiğinde, lipid türlerinin dağılımında belirgin kısıtlamalar olduğu görülür. Aşağıdaki lipid alt gruplarından hangisi normal bir memeli hücre zarında fizyolojik olarak **bulunmaz**?
Doğru Şık (D): Trigliseritler
Açıklama: Hücre zarı fosfolipidler, glikolipidler ve serbest kolesterolden oluşur ancak hücre zarında kolesterol esterleri ve trigliseritler kesinlikle bulunmaz. Trigliseritler sitoplazmada enerji deposu olarak inklüzyon cisimcikleri şeklinde (damlacıklar halinde) yer alırken, membranöz yapıya entegre olabilecek amfipatik özelliğe sahip değildirler. Sfingomyelin ve fosfolipidler ise zarın omurgasını kurar.

**Soru 2 (ID: 36908bc8-c054-4f47-94f4-6d7822afd56f)**
Soru Kökü: Hücre zarının akışkanlığını belirleyen yapısal faktörler değerlendirildiğinde, aşağıdaki moleküllerden hangisinin sağlıklı bir hücre zarında bulunması **beklenmez**?
Doğru Şık (D): Kolesterol esterleri
Açıklama: Hücre zarının temel lipit yapısında fosfolipidler (fosfatidilkolin, sfingomyelin vb.) ve serbest kolesterol bulunur; ancak hücre zarında kolesterol esterleri ve trigliseritler kesinlikle yer almaz. Serbest kolesterol ve yağ asidi zincir özellikleri (uzunluk/doymamışlık) membranın modifiye sıvı mozaik modelindeki akışkanlığını belirleyen ana faktörlerdir. Kolesterol esterleri hücre içi damlacıklarda depo formu olarak bulunduğundan zarın hidrofilik/hidrofobik amfipatik dizilimine uyum sağlayamazlar.

---

### ÇİFT 168 (Benzerlik: 0.78)

**Soru 1 (ID: c33d4d36-d2f4-42d0-8839-c0e42397c382)**
Soru Kökü: Epitel dokusunda apikal yüze en yakın konumlanan, hücrelerin fokal füzyonlarını sağlayarak paraselüler geçişi (maddelerin hücreler arasından sızmasını) bloke eden sıkı bağlantıların (tight junction) temel proteinleri aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Klaudin ve okkludin
Açıklama: Sıkı bağlantıların (Zonula occludens) transmembran bileşenleri olan klaudin (claudin) ve okkludin (occludin) proteinleri, hücre zarlarını birbirine yapıştırarak paraselüler madde akışını engelleyen bir conta görevi görürler. Ayrıca ZO (Zonula Occludens 1,2,3) proteinleri ile hücre içindeki aktin ağına bağlanırlar. Desmoglein desmozomda, kaderin adherens bağlantıda yer alır.

**Soru 2 (ID: a950e36e-6687-435a-b098-bad95bd16dc1)**
Soru Kökü: Epitel hücrelerinde apikal yüze yakın yerleşen, paraselüler madde geçişini ve lipid raft hareketlerini kontrol eden hücresel bağlantı kompleksinin temel transmembran proteini aşağıdakilerden hangisidir?
Doğru Şık (A): Claudin
Açıklama: Zonula occludens (sıkı/tıkayıcı bağlantı), paraselüler transportu denetleyen ve akuoz kanalların yapısını oluşturan claudin ile occludin proteinlerinden oluşur. Desmoglein desmozomlarda, konneksin gap junction'larda, integrin ise fokal adezyon ve hemidesmozomlarda görev alan transmembran proteinlerdir.

---

### ÇİFT 169 (Benzerlik: 0.78)

**Soru 1 (ID: d1a8c336-38f7-4ffc-9e77-6c8157ef39fa)**
Soru Kökü: Yirmi beş yaşında, Marfan sendromu ön tanılı erkek hastada aort anevrizması nedeniyle rezeksiyon yapılmıştır. Aort duvarındaki elastik lamellerin morfolojik bozulmasını göstermek için aşağıdaki boyalardan hangisi tercih edilmelidir?
Doğru Şık (C): Orsein
Açıklama: Orsein, elastik lifleri boyayarak dokudaki yerleşimlerini net bir şekilde ortaya çıkaran, Weigert ve Verhoeff ile aynı kategoride yer alan özel bir boyadır. Azan bağ dokusunu genel olarak boyarken, PAS sadece karbonhidrat bazlı yapıları hedefler. Marfan sendromundaki fibrillin ve elastin defektinin mikroskobik kanıtı Orsein gibi spesifik boyalarla elde edilir.

**Soru 2 (ID: 43456e91-760d-4947-8745-78ad6c99668a)**
Soru Kökü: Otuz yaşında ve araknodaktili bulguları olan bir erkek hastanın aort diseksiyonu materyali incelenmektedir. Histolojik kesitlerde tunika media tabakasındaki elastik liflerin parçalandığını doğrulamak isteyen bir patolog, aşağıdaki boyalardan hangisini uygulamalıdır?
Doğru Şık (D): Weigert
Açıklama: Aort duvarının esnekliğini sağlayan elastik lif yapılarının morfolojik incelenmesinde Weigert, Orsein veya Verhoeff gibi spesifik lif boyalarının kullanılması zorunludur. Azokarmin bağ dokusu, Sudan black ise yağ boyası olup elastik mimarinin diseksiyon düzeyindeki patolojisini göstermede yetersiz kalırlar. Bu boyalar, elastik lamellerdeki kopma veya kistik medial dejenerasyon bulgularını siyaha/koyu mora boyayarak görünür hale getirir.

---

### ÇİFT 170 (Benzerlik: 0.78)

**Soru 1 (ID: 6a3ad5d2-d994-45ee-ada3-2f36480301c4)**
Soru Kökü: Bazik boyalar net pozitif yüklü olup dokulardaki anyonik bölgelere bağlanarak bazofilik boyanmayı sağlarlar. Buna göre aşağıdaki hücresel komponentlerden hangisinin hematoksilin ile bazofilik boyanması **beklenmez**?
Doğru Şık (A): Kollajen lifleri
Açıklama: Kollajen lifleri net katyonik (+ yüklü) bir karaktere sahip olduğundan bazik değil, asidik boyalarla (eozin gibi) asidofilik boyanır. Hematoksilin net pozitif bir boyadır; bu nedenle fosfat, sülfat ve karboksil grupları gibi negatif (anyonik) alanları kuvvetle boyar. Ribozomlar yüksek oranda RNA (fosfat) içerdiklerinden karakteristik olarak yoğun bazofili gösterirler.

**Soru 2 (ID: 88fa9c4a-f2ad-42ee-b821-a7fa2ccdc4d2)**
Soru Kökü: Hücre organellerinin rutin histolojik boyanma karakteristiği incelendiğinde, net pozitif yüklü bazik bir boya olan hematoksiline yüksek afinite gösteren hücresel yapı aşağıdakilerden hangisidir?
Doğru Şık (C): Ribozomlar
Açıklama: Ribozomlar, yapılarındaki yüksek rRNA içeriği nedeniyle polianyonik (negatif yüklü) özellik taşır ve net pozitif yüklü bazik boyalarla (hematoksilin) mavi-mor renkte bazofilik boyanırlar. Kollajen, sitoplazma, eritrosit ve elastik lifler ise katyonik (pozitif yüklü) doğaları gereği net negatif yüklü asit boyalarla (eosin) kırmızı-pembe asidofilik boyanma paterni gösterir. Bu elektrostatik etkileşim kuralı, hücresel kompartımanların tanınmasında temel mekanizmadır.

---

### ÇİFT 171 (Benzerlik: 0.78)

**Soru 1 (ID: 0b523ff3-654d-4752-b506-a0e4a8c76abc)**
Soru Kökü: Hücre-hücre adezyonunda aynı tür hücreleri birbirine bağlayan (homofilik bağlantı) ve fonksiyonunu yerine getirebilmesi için ekstraselüler ortamda kalsiyum iyonuna ihtiyaç duyan protein ailesi aşağıdakilerden hangisidir?
Doğru Şık (B): Kadherinler
Açıklama: Kadherin (Cadherin), kalsiyum bağımlı ve homofilik (aynı tür hücreleri birbirine bağlayan) bağlantı proteinidir; katenin aracılığıyla sitoplazmadaki aktin iskeletine tutunur. İntegrinler ve Ig ailesi kalsiyumdan bağımsızken, selektinler kalsiyum bağımlı olmalarına rağmen heterofilik (farklı moleküllere tutunan) bağlantı yaparlar.

**Soru 2 (ID: 142a8886-ffaf-407e-9f81-9c6a08247105)**
Soru Kökü: Farklı tür hücreleri birbirine bağlayan ve hücre zarı dışındaki glikoproteinlerin karbonhidratlarına tutunarak heterofilik bağlantı kuran kalsiyum (Ca++) bağımlı adezyon molekülü aşağıdakilerden hangisidir?
Doğru Şık (C): Selektin (Selectin)
Açıklama: Selektinler kalsiyum bağımlı çalışan ve heterofilik (farklı tür moleküller arası) bağlantı kuran hücre adezyon molekülleridir. Kaderinler de kalsiyum bağımlıdır ancak aynı tür hücreleri bağlayan homofilik yapıdadır. İntegrinler ise kalsiyumdan bağımsız grupta yer alırlar.

---

### ÇİFT 172 (Benzerlik: 0.78)

**Soru 1 (ID: 0b523ff3-654d-4752-b506-a0e4a8c76abc)**
Soru Kökü: Hücre-hücre adezyonunda aynı tür hücreleri birbirine bağlayan (homofilik bağlantı) ve fonksiyonunu yerine getirebilmesi için ekstraselüler ortamda kalsiyum iyonuna ihtiyaç duyan protein ailesi aşağıdakilerden hangisidir?
Doğru Şık (B): Kadherinler
Açıklama: Kadherin (Cadherin), kalsiyum bağımlı ve homofilik (aynı tür hücreleri birbirine bağlayan) bağlantı proteinidir; katenin aracılığıyla sitoplazmadaki aktin iskeletine tutunur. İntegrinler ve Ig ailesi kalsiyumdan bağımsızken, selektinler kalsiyum bağımlı olmalarına rağmen heterofilik (farklı moleküllere tutunan) bağlantı yaparlar.

**Soru 2 (ID: ea520603-10c6-4965-8ba3-3bc86a09ce5d)**
Soru Kökü: Bağlantı birimlerinde farklı tür proteinlerin karşılıklı etkileşimine heterofilik bağlantı adı verilir. Buna göre, aşağıdaki proteinlerden hangisi fizyolojik süreçlerde heterofilik bağlantı kuran kalsiyum bağımlı bir adezyon molekülüdür?
Doğru Şık (E): Selektin
Açıklama: Selektinler (P, L, E tipleri), karşı hücrenin zarındaki glikoproteinlerin karbonhidrat kısımlarına bağlandıkları için farklı tür moleküllerle ilişki kurarlar (heterofilik). Aynı zamanda işlev gösterebilmeleri için ortamda kalsiyum iyonuna ihtiyaç duyarlar. Kadherin homofilik ve Ca-bağımlıyken, integrin heterofilik ama Ca-bağımsızdır.

---

### ÇİFT 173 (Benzerlik: 0.78)

**Soru 1 (ID: b2c6890b-2a83-4442-9c4d-64177d828848)**
Soru Kökü: İnflamatuvar bir süreçte lökositlerin damar endoteline sıkıca tutunduğu ve diapedezin 2. aşamasına geçtiği bilinmektedir. Bu aşamada lökosit membranı üzerindeki integrinler, endotel yüzeyindeki hangi protein ailesi ile güçlü bir etkileşime girer?
Doğru Şık (C): Ig CAM (İmmünglobulin adezyon) ailesi
Açıklama: Lökosit diapedezinin 2. ve kesin durdurucu aşamasında, lökosit membranı üzerindeki aktive olmuş integrin molekülleri, endotel yüzeyinde eksprese edilen I-CAM ve V-CAM gibi Ig üst ailesine (CAM) ait proteinlerle çok sıkı bir etkileşim kurar. Selektinler bağın ilk ve gevşek tutunma kısmında görev almıştır. Integrin-CAM bağlantısı olmadan lökositlerin damar dışına göçü tamamlanamaz.

**Soru 2 (ID: 3e378d3d-3f4c-4936-95ee-cd39fed25686)**
Soru Kökü: Lökositlerin inflamasyon bölgesine göçü (diapedez) incelendiğinde, bu hücrelerin önce damar endoteline gevşekçe tutunduğu, ardından daha sıkı bir bağlantı kurarak damar dışına sızdığı gözlemlenir. Bu olayda farklı yüzey reseptörleri ve hücre bağlantı tipleri sırayla işlev görür. Buna göre, lökosit diapedezinin spesifik moleküler etkileşim mekanizması için aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (B): Lökosit üzerindeki bir selektin proteinin endotel hücre yüzeyindeki başka bir selektin sınıfı proteine bağlanarak homofilik ilişki kurması.
Açıklama: Lökosit diapedezinin ilk aşaması lökosit selektini ile endotel selektini arasında gerçekleşir, fakat selektinler karbonhidratlara bağlandığı için ve bağlantı kuran proteinler birbirinden farklı karakterize edildiği için homofilik (aynı sınıf proteinlerin birbirine tutunması, örn. kaderin-kaderin) bağlanma yapmazlar. Homofilik bağlar kaderinler veya Ig ailesi arasında görülürken; lökosit-endotel ilişkisindeki selektin ve integrin-CAM etkileşimleri yapısı gereği heterofilik bağlantı örnekleridir.

---

### ÇİFT 174 (Benzerlik: 0.78)

**Soru 1 (ID: 436d432e-47ed-47f8-ae2a-1b36416b0249)**
Soru Kökü: 55 yaşında erkek hasta, göğüs ağrısı şikayetiyle acil servise başvuruyor ve geçirilmiş miyokard enfarktüsü tanısı alıyor. İskemiye bağlı hasarlı dokuda hücre içi kalsiyum birikimi ve zarların rüptüre olduğu nekrotik ölüm mekanizması tetikleniyor. Bu hastanın nekrotik miyokard hücrelerinde, fizyolojik apopitozise kıyasla aşağıdaki bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (A): Kromatin agregasyonu
Açıklama: Nekroz sürecinde hücre suyu ve kalsiyum içeri alarak şiddetle şişer, plazma zarı hasarlanarak bütünlüğü bozulur ve çevreye asidik lizozomal enzimlerin dökülmesiyle yoğun bir doku inflamasyonu başlar. Ancak apopitoziste karakteristik olan yoğun 'kromatin agregasyonu' ve düzenli DNA kesimleri (nükleer fragmantasyon) nekroz tablosuna özgü değildir ve nekrozda patolojik kromatin erimesi (karyolizis) beklenir. Morfolojik olarak kromatin yapısının durumu programlı (apopitoz) ve travmatik (nekroz) ölüm tiplerini ayırmak için primer belirteçtir.

**Soru 2 (ID: 115bb85a-b5af-4214-88ad-d8af843d3885)**
Soru Kökü: 45 yaşında erkek hasta akut miyokard enfarktüsü geçiriyor. İskemik hasara uğrayan kardiyomiyositlerde, hücre zarındaki enerji bağımlı pompaların durmasına sekonder olarak gelişen ve apopitozdan farklı olarak izlenen nekrotik morfolojik değişiklik aşağıdakilerden hangisidir?
Doğru Şık (C): Hücre şişmesi
Açıklama: Nekroz sürecinde hücre zarı iyon pompalarının bozulmasına bağlı olarak içeriye sodyum ve su girişi hücre şişmesi (ödem) ile sonuçlanır. Apopitozda ise membran bütünlüğü erken evrede korunduğu için hücrede şişme değil, hücre büzüşmesi görülür. İskemi, toksin veya travma gibi dış etkenlere bağlı gelişen nekrotik ölümün en spesifik hücresel farklılıklarından biri bu onkotik şişmedir.

---

### ÇİFT 175 (Benzerlik: 0.78)

**Soru 1 (ID: d80d6c68-66b2-4695-8e85-5cffa9f4cf4b)**
Soru Kökü: Hücreler arası fiziksel teması sağlayan adezyon molekülleri kalsiyum bağımlılığına göre iki gruba ayrılır. Aşağıdaki adezyon molekülü gruplarından hangisi yapısı gereği kalsiyumdan bağımsız (Ca++ bağımsız) olarak tutunma fonksiyonu gösterir?
Doğru Şık (B): İmmünglobulin (Ig) üst ailesi
Açıklama: Hücre adezyonunda Kaderin ve Selektin aileleri kalsiyuma bağımlı olarak işlev görürken; İntegrinler ve İmmünglobulin üst ailesi (N-CAM, V-CAM, I-CAM vb.) fonksiyonları için kalsiyuma ihtiyaç duymayan, kalsiyumdan bağımsız adezyon molekülleridir.

**Soru 2 (ID: 142a8886-ffaf-407e-9f81-9c6a08247105)**
Soru Kökü: Farklı tür hücreleri birbirine bağlayan ve hücre zarı dışındaki glikoproteinlerin karbonhidratlarına tutunarak heterofilik bağlantı kuran kalsiyum (Ca++) bağımlı adezyon molekülü aşağıdakilerden hangisidir?
Doğru Şık (C): Selektin (Selectin)
Açıklama: Selektinler kalsiyum bağımlı çalışan ve heterofilik (farklı tür moleküller arası) bağlantı kuran hücre adezyon molekülleridir. Kaderinler de kalsiyum bağımlıdır ancak aynı tür hücreleri bağlayan homofilik yapıdadır. İntegrinler ise kalsiyumdan bağımsız grupta yer alırlar.

---

### ÇİFT 176 (Benzerlik: 0.78)

**Soru 1 (ID: 95f7a4a5-c191-47e0-b99b-bba2e23b9a91)**
Soru Kökü: Oluklu bağlantılar (gap junction), epitel dokusundan miyokard dokusuna kadar birçok alanda kimyasal ve elektriksel sinyallerin aktarımını organize eden mikroskobik geçitlerdir. Bu hücreler arası iletişim kurucu bağlantılarla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hücre iskeletini oluşturan mikrotübül ve ara filamanlara moleküler olarak bağlanarak mekanik destek sağlar.
Açıklama: Hücre bağlantıları içinde Gap Junction (Neksus), hücre içi iskelet elemanlarına (aktin, mikrotübül veya ara filaman) tutunmayan TEK spesifik hücre bağlantısıdır. Görevi mekanik destek sağlamak veya doku bütünlüğünü korumak değil, hücreler arası elektriksel ve metabolik kuplajı (iletişimi) sağlamaktır. Kalsiyum ve cAMP gibi ikincil habercilerin senkronize dağılımı bu iskeletten bağımsız kanallar ile gerçekleşir.

**Soru 2 (ID: a925e3ea-3e96-44e5-a020-caf173244867)**
Soru Kökü: İki hücre arasındaki elektriksel ve kimyasal sinyal iletimini sağlayan, connexin proteinlerinin altılı gruplar halinde bir araya gelerek yarım kanallar (connexon) oluşturduğu Gap junction (oluklu bağlantı) yapısı ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Hücre içindeki aktin veya ara filaman iskeletine sıkıca entegre durumdadır.
Açıklama: Oluklu bağlantılar (Gap junction) yalnızca komşu hücreler arasında küçük molekül geçişi için kanal açarlar ve hücre iskeletine (aktin veya ara filamanlara) bağlanmazlar. Desmozomlar, zonulalar veya fokal adezyonlar ise hücre iskeletiyle güçlü yapısal bağlar kurarlar. Gap junctionların iskelet bağlantısı kurmaması, fonksiyonlarının mekanik destekten ziyade saf iletişim odaklı olduğunu gösterir.

---

### ÇİFT 177 (Benzerlik: 0.78)

**Soru 1 (ID: 3011b075-61a2-45b3-8e9d-e21ddd2b00c6)**
Soru Kökü: Hücre ölüm mekanizmaları olan apopitoz ve nekrozun karşılaştırılmasında, apopitoz için aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (E): Hücre içeriğinin dışarı çıkmasına bağlı dokuda şiddetli inflamasyon görülür.
Açıklama: Nekrozda hücre zarı hasarlandığı için hücre içeriği dışarı sızar ve şiddetli doku inflamasyonuna neden olur; apopitozda ise oluşan apoptotik cisimcikler hızla fagosite edildiği için inflamasyon izlenmez. Apopitozda hücre şişmez aksine büzüşür, kromatin yoğunlaşır ve zarda membran tomurcuklanması izlenir. Bu fizyolojik tasfiye sistemi sessiz ilerler.

**Soru 2 (ID: f44805eb-b342-4336-b248-9cfb7aa420b8)**
Soru Kökü: Programlı hücre ölümü olan apopitoz ile patolojik hücre ölümü olan nekroz arasında net morfolojik ve mekanistik farklılıklar vardır. Aşağıdaki hücresel olaylardan hangisi apopitoz sürecinde **beklenmez**?
Doğru Şık (B): Hücre şişmesi
Açıklama: Hücre şişmesi (swelling) membranın iyon pompası iflasına bağlı olarak nekrozda görülen patognomonik bir bulgudur. Apopitozda ise tam tersi hücre büzüşür, çekirdek fragmante olur, kromatin agregasyona uğrar ve zar tomurcuklanarak apoptotik cisimciklere ayrılır. Şişme ve lizis sadece nekroza aittir.

---

### ÇİFT 178 (Benzerlik: 0.77)

**Soru 1 (ID: 7a7c540b-8809-41b9-90ec-b170e733ea03)**
Soru Kökü: Golgi kompleksinin trans yüzünden lizozomal enzimlerin ayrılması ve hedef bölgeye yönelmesi için vezikül oluşumunu çevreleyerek mekanik destek sağlayan, vezikül koptuktan sonra ise sirkülasyona geri dönen kılıf proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Klatrin
Açıklama: Golgi trans yüzeyinde mannoz-6-fosfat reseptörüne bağlanan enzimlerin etrafı vezikülleşme sırasında klatrin proteinleri ile çevrelenir. Vezikül zardan ayrıldığında klatrinler çözülerek sirkülasyona geri döner. COP II anterograd transportta (GER'den Golgi'ye) görevli kılıf proteini iken, klatrin lizozom hedeflemesi ve endositozda rol alır.

**Soru 2 (ID: a6a90893-4ca0-4898-af06-96d0745a9e27)**
Soru Kökü: Golgi kompleksinin trans yüzünde mannoz-6-fosfat (M6P) reseptörüne bağlanan enzimlerin etrafını sararak vezikülün kopmasını sağlayan, ancak vezikül lizozom yolağına girmek üzere Golgi'den tamamen ayrıldıktan hemen sonra zardan sökülerek uzaklaşan örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Klatrin
Açıklama: Klatrin (clathrin), M6P taşıyan lizozomal protein veziküllerinin veya reseptör aracılı endositoz keselerinin zar yapısını iskelet gibi sararak tomurcuklanmayı sağlar, kese olgunlaştığında resirküle olmak üzere ayrılır. Kaveolin düz kaslarda kaveola lipid raftını şekillendirirken, flotillin planar raft proteinidir. Nükleoporin çekirdek zarı kanalı elemanıdır.

---

### ÇİFT 179 (Benzerlik: 0.77)

**Soru 1 (ID: 3c28b901-e2d8-4c37-988b-0cc255f4dd0f)**
Soru Kökü: Golgi kompleksinin trans yüzünde mannoz-6-fosfat (M6P) reseptörüne bağlanan enzimlerin etrafını sararak vezikülün kopmasını sağlayan, ancak vezikül lizozom yolağına girmek üzere Golgi'den tamamen ayrıldıktan hemen sonra zardan sökülerek uzaklaşan örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Klatrin
Açıklama: Klatrin (clathrin), M6P taşıyan lizozomal protein veziküllerinin veya reseptör aracılı endositoz keselerinin zar yapısını iskelet gibi sararak tomurcuklanmayı sağlar, kese olgunlaştığında resirküle olmak üzere ayrılır. Kaveolin düz kaslarda kaveola lipid raftını şekillendirirken, flotillin planar raft proteinidir. Nükleoporin çekirdek zarı kanalı elemanıdır.

**Soru 2 (ID: 7a7c540b-8809-41b9-90ec-b170e733ea03)**
Soru Kökü: Golgi kompleksinin trans yüzünden lizozomal enzimlerin ayrılması ve hedef bölgeye yönelmesi için vezikül oluşumunu çevreleyerek mekanik destek sağlayan, vezikül koptuktan sonra ise sirkülasyona geri dönen kılıf proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Klatrin
Açıklama: Golgi trans yüzeyinde mannoz-6-fosfat reseptörüne bağlanan enzimlerin etrafı vezikülleşme sırasında klatrin proteinleri ile çevrelenir. Vezikül zardan ayrıldığında klatrinler çözülerek sirkülasyona geri döner. COP II anterograd transportta (GER'den Golgi'ye) görevli kılıf proteini iken, klatrin lizozom hedeflemesi ve endositozda rol alır.

---

### ÇİFT 180 (Benzerlik: 0.77)

**Soru 1 (ID: ef876646-1c55-4af9-bd44-5ef6450179e6)**
Soru Kökü: Hücre içi vezikül trafiğinin yönlendirilmesinde görev alan örtü proteinleri vezikülün kaynaklandığı ve yöneldiği organele göre değişir. Buna göre, Golgi kompleksinin kendi iç sarnıçları arasındaki retrograd vezikül taşınmasında veziküllerin etrafını saran örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): COP I
Açıklama: Golgi cismi içinde sarnıçlar arası (retrograd) ve Golgi'den GER'e geri dönüş vezikülleri COP I (coatomer I) ile kaplanırken, GER'den Golgi'ye giden anterograd veziküller COP II ile kaplanır. Klatrin proteini ise trans Golgi'den lizozoma giden ve hücre zarından reseptör aracılı endositoz ile oluşan veziküllerin kılıfını oluşturur.

**Soru 2 (ID: a6a90893-4ca0-4898-af06-96d0745a9e27)**
Soru Kökü: Golgi kompleksinin trans yüzünde mannoz-6-fosfat (M6P) reseptörüne bağlanan enzimlerin etrafını sararak vezikülün kopmasını sağlayan, ancak vezikül lizozom yolağına girmek üzere Golgi'den tamamen ayrıldıktan hemen sonra zardan sökülerek uzaklaşan örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Klatrin
Açıklama: Klatrin (clathrin), M6P taşıyan lizozomal protein veziküllerinin veya reseptör aracılı endositoz keselerinin zar yapısını iskelet gibi sararak tomurcuklanmayı sağlar, kese olgunlaştığında resirküle olmak üzere ayrılır. Kaveolin düz kaslarda kaveola lipid raftını şekillendirirken, flotillin planar raft proteinidir. Nükleoporin çekirdek zarı kanalı elemanıdır.

---

### ÇİFT 181 (Benzerlik: 0.77)

**Soru 1 (ID: ef876646-1c55-4af9-bd44-5ef6450179e6)**
Soru Kökü: Hücre içi vezikül trafiğinin yönlendirilmesinde görev alan örtü proteinleri vezikülün kaynaklandığı ve yöneldiği organele göre değişir. Buna göre, Golgi kompleksinin kendi iç sarnıçları arasındaki retrograd vezikül taşınmasında veziküllerin etrafını saran örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): COP I
Açıklama: Golgi cismi içinde sarnıçlar arası (retrograd) ve Golgi'den GER'e geri dönüş vezikülleri COP I (coatomer I) ile kaplanırken, GER'den Golgi'ye giden anterograd veziküller COP II ile kaplanır. Klatrin proteini ise trans Golgi'den lizozoma giden ve hücre zarından reseptör aracılı endositoz ile oluşan veziküllerin kılıfını oluşturur.

**Soru 2 (ID: 3c28b901-e2d8-4c37-988b-0cc255f4dd0f)**
Soru Kökü: Golgi kompleksinin trans yüzünde mannoz-6-fosfat (M6P) reseptörüne bağlanan enzimlerin etrafını sararak vezikülün kopmasını sağlayan, ancak vezikül lizozom yolağına girmek üzere Golgi'den tamamen ayrıldıktan hemen sonra zardan sökülerek uzaklaşan örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Klatrin
Açıklama: Klatrin (clathrin), M6P taşıyan lizozomal protein veziküllerinin veya reseptör aracılı endositoz keselerinin zar yapısını iskelet gibi sararak tomurcuklanmayı sağlar, kese olgunlaştığında resirküle olmak üzere ayrılır. Kaveolin düz kaslarda kaveola lipid raftını şekillendirirken, flotillin planar raft proteinidir. Nükleoporin çekirdek zarı kanalı elemanıdır.

---

### ÇİFT 182 (Benzerlik: 0.77)

**Soru 1 (ID: 6aee470a-4c78-4ece-be8f-1b142c95b12e)**
Soru Kökü: Mayoz bölünmede homolog kromozom eşlenmesinin (sinapsis) kurulmaya başlandığı ve sinaptonemal kompleksin sentezlenmeye başlandığı Profaz I aşaması aşağıdakilerden hangisidir?
Doğru Şık (B): Zigoten
Açıklama: Zigoten, leptotende yan yana gelen homolog kromozomların arasında sinaptolemmal (sinaptonemal) kompleksin kurularak sinapsisin (eşlenmenin) başladığı evredir. Bu fermuar benzeri birleşme, bir sonraki evre olan pakitende gerçekleşecek crossing over işleminin fiziksel altyapısını kurar. Eşlenme başlamadan gen değiş tokuşu mümkün değildir.

**Soru 2 (ID: 0daa7faf-0b38-4e3f-af50-1f00ecb99265)**
Soru Kökü: Mayoz I Profaz I aşaması kendi içinde spesifik hücresel olayların gerçekleştiği evrelere ayrılır. Homolog kromozomların hücre içinde yan yana gelmeye başladığı ilk evre aşağıdakilerden hangisidir?
Doğru Şık (D): Leptoten
Açıklama: Profaz I evresinin ilk basamağı olan Leptoten'de, homolog kromozomlar kromatin yoğunlaşmasıyla belirginleşir ve yan yana gelmeye başlar. Bunu takiben Zigoten'de sinapsis başlar, Pakiten'de crossing over gerçekleşir ve Diakinez'de tamamen ayrılırlar. Leptoten, sinaptonemal kompleksin fiziksel temelinin atıldığı başlangıç evresidir.

---

### ÇİFT 183 (Benzerlik: 0.77)

**Soru 1 (ID: 2c4b2ff6-4efc-4ea8-b4b0-427cd1f13ae9)**
Soru Kökü: Kırk beş yaşında erkek hasta, geçirdiği miyokard infarktüsü sonrası kardiyoloji polikliniğinde takip edilmektedir. Kalp kası dokusunda iskemik nekroz geliştiği bilinirken, fizyolojik hücre döngüsünde programlı hücre ölümü (apopitoz) ile kaybedilen hücreler de bulunmaktadır. Bu iki farklı mekanizmaya uğrayan hücreler histolojik olarak karşılaştırıldığında, apopitoza uğrayan bir hücrede aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (D): Hücre şişmesi
Açıklama: Hücre şişmesi, plazma zarının hasar görmesi ve iyon dengesinin bozulmasıyla seyreden nekrozun tipik bir bulgusudur. Apopitozda ise tam tersine hücre büzüşmesi (shrinkage) görülür ve hücre zarı parçalanmadan sadece tomurcuklanarak (blebbing) form değiştirir. Çekirdek fragmantasyonu ve kromatin agregasyonu apopitozun karakteristik mikroskobik özellikleridir.

**Soru 2 (ID: 115bb85a-b5af-4214-88ad-d8af843d3885)**
Soru Kökü: 45 yaşında erkek hasta akut miyokard enfarktüsü geçiriyor. İskemik hasara uğrayan kardiyomiyositlerde, hücre zarındaki enerji bağımlı pompaların durmasına sekonder olarak gelişen ve apopitozdan farklı olarak izlenen nekrotik morfolojik değişiklik aşağıdakilerden hangisidir?
Doğru Şık (C): Hücre şişmesi
Açıklama: Nekroz sürecinde hücre zarı iyon pompalarının bozulmasına bağlı olarak içeriye sodyum ve su girişi hücre şişmesi (ödem) ile sonuçlanır. Apopitozda ise membran bütünlüğü erken evrede korunduğu için hücrede şişme değil, hücre büzüşmesi görülür. İskemi, toksin veya travma gibi dış etkenlere bağlı gelişen nekrotik ölümün en spesifik hücresel farklılıklarından biri bu onkotik şişmedir.

---

### ÇİFT 184 (Benzerlik: 0.77)

**Soru 1 (ID: 31270c95-6be2-405a-928b-33a7790ea0f7)**
Soru Kökü: Aşağıdakilerden hangisi doku kesitlerinin hematoksilin-eozin boyamasında eozin ile reaksiyona girerek pembe-kırmızı renk alan katyonik doku bileşenlerinden biri **değildir**?
Doğru Şık (E): Çekirdek kromatini
Açıklama: Çekirdek kromatini yoğun miktarda DNA içerdiği için anyonik (negatif yüklü) bir yapıya sahiptir ve asit boya olan eozin ile değil, bazik boya olan hematoksilin ile etkileşerek bazofilik (mavi) boyanır. Sitoplazma, elastik teller, kollajen ve retiküler teller ise katyonik (pozitif) özellik gösterdikleri için eozin ile asidofilik (pembe/kırmızı) bir görünüme bürünürler. Retiküler tellerin özel olarak gümüşleme ile gösterilebilmesi, onların rutin H&E'de eozin ile boyanmadıkları anlamına gelmez.

**Soru 2 (ID: a2e659d0-8e92-498d-8e2f-87a997d7f314)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 185 (Benzerlik: 0.77)

**Soru 1 (ID: 31270c95-6be2-405a-928b-33a7790ea0f7)**
Soru Kökü: Aşağıdakilerden hangisi doku kesitlerinin hematoksilin-eozin boyamasında eozin ile reaksiyona girerek pembe-kırmızı renk alan katyonik doku bileşenlerinden biri **değildir**?
Doğru Şık (E): Çekirdek kromatini
Açıklama: Çekirdek kromatini yoğun miktarda DNA içerdiği için anyonik (negatif yüklü) bir yapıya sahiptir ve asit boya olan eozin ile değil, bazik boya olan hematoksilin ile etkileşerek bazofilik (mavi) boyanır. Sitoplazma, elastik teller, kollajen ve retiküler teller ise katyonik (pozitif) özellik gösterdikleri için eozin ile asidofilik (pembe/kırmızı) bir görünüme bürünürler. Retiküler tellerin özel olarak gümüşleme ile gösterilebilmesi, onların rutin H&E'de eozin ile boyanmadıkları anlamına gelmez.

**Soru 2 (ID: 0cc91060-fd56-43f5-bc5e-4393aaae6de6)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 186 (Benzerlik: 0.77)

**Soru 1 (ID: ac50e17b-171a-409e-a3b5-0e0b208ec66f)**
Soru Kökü: Mitokondriyon işlevini yitirip enerji dengesi bozulduğunda makrootofaji süreci başlar. Bu süreçte hedeflenen mitokondriyonun etrafı membran izolasyonu adı verilen bir zar tabakasıyla çevrelenerek otofagozom oluşturulur. Otofagozom formasyonunda hedefin etrafına sarılan bu izolasyon zarı genellikle hangi organel tarafından sağlanır?
Doğru Şık (A): Granülsüz (düz) endoplazmik retikulum
Açıklama: Makrootofaji sürecinde Atg gen proteinlerinin yönlendirmesiyle ortadan kaldırılacak organelin (örneğin mitokondriyon) etrafı hızla granülsüz (düz) endoplazmik retikulum kaynaklı bir çift membranla sarılır. Oluşan bu izole yapıya otofagozom denir. Otofagozom daha sonra bir lizozomla kaynaşarak içindekini yıkıma uğratır.

**Soru 2 (ID: 71118432-7239-438c-82cc-af8fbebd58ef)**
Soru Kökü: Otofaji mekanizmasıyla ortadan kaldırılması planlanan, yaşlanmış ve fonksiyonunu yitirmiş büyük bir organelin (örneğin mitokondri) etrafının sarılarak hücre sitosolünden izole edildiği membran yapısı (otofagozom zarı) primer olarak hangi hücresel kaynaktan oluşur?
Doğru Şık (E): Granülsüz (düz) endoplazmik retikulumdan
Açıklama: Makrootofaji sürecinin ilk aşaması olan hücresel hedefin tecrit edilmesi olayı 'membran izolasyonu' olarak adlandırılır. Bu izolasyonu sağlayan ve otofagozom kesesini oluşturan zarlar granülsüz (düz) endoplazmik retikulum kökenlidir.

---

### ÇİFT 187 (Benzerlik: 0.77)

**Soru 1 (ID: f0e534a3-8f3c-4b31-9643-cfb12aeabc3b)**
Soru Kökü: Çekirdek zarfında iç ve dış zarların devamlılık gösterdiği bölgelerde yer alan ve mRNA gibi moleküllerin sitoplazmaya çıkışına izin veren kanal kompleksinin temel yapıtaşı olan protein aşağıdakilerden hangisidir?
Doğru Şık (E): Nükleoporin
Açıklama: Nükleer por kompleksi, nükleoporin (Nup) proteinlerinden oluşan ve 40-60 kDa moleküllerin çekirdek içi ve dışı geçişini sağlayan özel bir kanaldır. İmportin ve eksportin bu pordan geçiş yapan moleküllere taşıyıcılık yapan proteinlerdir, kanalın fiziksel yapısını oluşturmazlar. Nükleoporinler kanalın iskeletini ve seçici bariyerini kurar.

**Soru 2 (ID: e05340eb-fff5-4785-bf2e-86a31da9dbce)**
Soru Kökü: Çekirdek zarı, madde geçişini sağlamak için belli bölgelerde kaynaşarak özel kanal sistemleri oluşturur. mRNA ve transkripsiyon faktörlerinin geçişine olanak tanıyan, 40-60 kDa moleküllerin transferini Nup proteinleriyle kontrol eden yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Nükleer por kompleksi
Açıklama: Nükleer por kompleksi, iç ve dış çekirdek zarlarının birleştiği noktalarda nükleoporin (Nup) proteinlerinden oluşan, 40-60 kDa büyüklüğündeki moleküllerin ve RNA transkriptlerinin sitoplazmaya çıkışını sağlayan kapılı yapıdır. Translocon, ribozomun sentezlediği proteini GER lümenine aktaran por iken; voltaj kapılı anyon kanalı mitokondri dış zarındaki porinleri tanımlar.

---

### ÇİFT 188 (Benzerlik: 0.77)

**Soru 1 (ID: 5752036e-3bca-4fa5-855e-af9a3163042c)**
Soru Kökü: 28 yaşında patoloji asistanı, yüksek oranda protein sentezi yapan bir hücrenin nükleolusunu (çekirdekçik) değerlendirirken boyanma özelliklerini ayırt etmek istemektedir. Çekirdekçik yapısı için spesifik olarak DNA yokluğunu teyit eden ve bu alanda **negatif** sonuç veren boyama metodu aşağıdakilerden hangisidir?
Doğru Şık (A): Feulgen
Açıklama: Feulgen boyası, deoksiriboz şekerine spesifik olduğu için DNA'nın varlığını saptamak üzere kullanılır. Çekirdekçik (nükleolus) ise ribozomal RNA (rRNA) yapım merkezi olup yüksek oranda RNA barındırır, DNA içeriği kromozomlara özgüdür. Bu nedenle çekirdekçik Feulgen negatiftir ancak hematoksilin ve thionin gibi bazik boyalarla metakromatik olarak (RNA'dan dolayı) yoğun boyanır.

**Soru 2 (ID: 47d3b410-3953-4fbf-add4-bc73058edc4c)**
Soru Kökü: 45 yaşında kadın hastadan alınan lenf nodu eksizyonel biyopsisi histopatoloji laboratuvarında incelenmektedir. Patolog, hücre içerisindeki RNA dağılımını ve dolayısıyla çekirdekçik aktivitesini spesifik olarak görünür kılmak için aşağıdaki boyalardan hangisini kullanmalıdır?
Doğru Şık (D): Pyronin
Açıklama: Hücrede RNA polimeraz aktivitesi ve ribozomal RNA sentezi yüksek olan alanlar, özellikle de RNA molekülü, histolojik incelemelerde spesifik olarak pyronin ile boyanır. DNA'nın deoksiriboz şekeri Feulgen boyası ile boyanırken (bu yüzden RNA ağırlıklı çekirdekçik Feulgen negatiftir), ağır metal çöktürme metotları Golgi kompleksinin izlenmesi için kullanılır.

---

### ÇİFT 189 (Benzerlik: 0.77)

**Soru 1 (ID: d640d740-03b4-4719-87a8-1f5fec70eb65)**
Soru Kökü: Golgi kompleksi, endoplazmik retikulumdan gelen protein ve lipitlerin posttranslasyonel modifikasyonlara uğratıldığı ana paketleme merkezidir. Buna göre aşağıdakilerden hangisi Golgi organelinin spesifik enzimatik işlevlerinden biri **değildir**?
Doğru Şık (C): Sinyal peptidinin kesilerek proteinden uzaklaştırılması
Açıklama: Protein zincirindeki sinyal peptidinin kesilerek proteinden uzaklaştırılması işlemi Golgi'de değil, protein granüllü endoplazmik retikulum (GER) lümenine girdikten hemen sonra sinyal peptidaz enzimi aracılığıyla gerçekleştirilir. Glikozilasyonun son basamakları, sülfatlama, fosforlama ve sfingolipid sentezleri tamamen Golgi'ye ait özelleşmiş hücresel faaliyetlerdir.

**Soru 2 (ID: e083acbd-0ff1-4e1c-abb7-d82d4eefcc68)**
Soru Kökü: Protein işlenmesi sürecinde kilit rol oynayan granüllü endoplazmik retikulumun (GER) görevleri arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (A): Sfingomyelin ve glikosfingolipidlerin sentezlenmesi
Açıklama: Sfingomyelin ve glikosfingolipidlerin sentezi doğrudan Golgi cismi tarafından üstlenilen bir metabolik süreçtir. Granüllü ER, N-bağlı glikozilasyon, protein katlanması, disülfit bağlarının kurulması ve sinyal dizilerinin kesilerek proteinlerin veziküllere hazırlanmasıyla görevlidir.

---

### ÇİFT 190 (Benzerlik: 0.77)

**Soru 1 (ID: f9a7fd4c-f0da-49c9-a259-204d654ab37d)**
Soru Kökü: Apopitoz kaskatı hücre içi veya hücre dışı sinyallerle aktive edilebilir. Hücre zarı üzerinde bulunan ve ölüm bölgesi (death domain) olarak adlandırılan özel reseptör bölgelerinin uyarılmasıyla başlayan kaskat mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Ekstrensek yolak
Açıklama: FasL, TNF veya TRAIL gibi hücre dışından gelen sinyallerin zar yüzeyindeki ölüm reseptörlerine (death domain) bağlanarak başlattığı apopitoz mekanizması ekstrensek yolak olarak adlandırılır. Buna karşın mitokondri veya endoplazmik retikulum kaynaklı hücre içi stres uyarıları, intrensek (mitokondriyal) yolağı tetikler. Her iki yolak da nihayetinde kaspazları aktive ederek hücre ölümünü gerçekleştirir.

**Soru 2 (ID: 6dad7129-21ab-40c9-9342-a9577d3419ed)**
Soru Kökü: Hücre zarında bulunan ölüm bölgelerinin (death domain) uyarılması ile başlayan ve inflamatuvar hücrelerin hedeflenen hücreyi yok etmesini sağlayan apopitozis ekstrensek yolağının kilit tetikleyicisi aşağıdakilerden hangisidir?
Doğru Şık (E): FasL, TNF ve TRAIL
Açıklama: FasL, TNF ve TRAIL gibi dış sinyal molekülleri, hücre zarındaki ölüm bölgelerine bağlanarak apopitozun ekstrensek yolağını başlatırlar. Mitokondri kaynaklı sitokrom c ve hücre içi proteinler ise iç uyarılarla başlayan intrensek yolağın elemanlarıdır. Ekstrensek yolak, immün sistemin dışarıdan müdahale ile sorunlu hücreyi elimine etmesinin temel aracıdır.

---

### ÇİFT 191 (Benzerlik: 0.77)

**Soru 1 (ID: 54497d77-f5bc-48ac-87fd-64aefdecd329)**
Soru Kökü: Rutin histolojik fiksasyon ve doku takibi basamaklarında (örneğin ksilol ve alkol şamandıralarında) kullanılan solvanlar nedeniyle hücrenin bazı bileşenlerinin eriyip sistemden uzaklaşması beklenir. Aşağıdakilerden hangisi bu dehidratasyon ve şeffaflaştırma süreçlerinde eriyip **kaybolmaz**?
Doğru Şık (D): Kollajen demetleri
Açıklama: Kollajen lifleri son derece dayanıklı fibriler protein yapılarıdır ve rutin alkol-ksilol bazlı kimyasal takip işlemlerinden etkilenmeyerek histolojik preparatta güçlü şekilde korunurlar. Lipidler organik çözücülerde erirken, karbonhidrat bazlı kompleksler (glikojen, proteoglikan, glikoprotein) su-alkol değişimlerinde yıkılarak dokudan süzülür ve geride boşluk bırakırlar. Kollajenin bu direnci sayesinde bağ dokusu organizasyonu H&E kesitlerinde mükemmel şekilde incelenebilir.

**Soru 2 (ID: 1a5a1749-dc6e-442a-83cb-7a51da5d21d0)**
Soru Kökü: Rutin histolojik doku tespiti ve takip işlemleri sırasında, kullanılan alkol ve ksilol gibi çözücüler nedeniyle dokudan bazı moleküllerin eriyip kaybolması sık karşılaşılan bir durumdur. Aşağıdakilerden hangisi bu süreçte yapısını yitirerek kaybolan moleküllerden biri **değildir**?
Doğru Şık (E): Nükleik asitler
Açıklama: Nükleik asitler (DNA ve RNA) rutin fiksasyon ve takip aşamalarından etkilenmeyerek hücre çekirdeği ve ribozomlarda korunur, böylece hematoksilin ile rahatlıkla boyanabilirler. Lipidler, glikojen, proteoglikanlar ve glikoproteinler ise organik çözücülere ve su bazlı yıkamalara karşı duyarlı oldukları için özel fiksatifler olmadan büyük oranda dokudan kaybolurlar. Bu erime durumu, H&E kesitlerinde adipositlerin veya mukuslu hücrelerin içinin boş (beyaz) görülmesinin temel nedenidir.

---

### ÇİFT 192 (Benzerlik: 0.77)

**Soru 1 (ID: 3549254a-aa9e-4188-a653-852b6996d801)**
Soru Kökü: Lizozomal enzimlerin Golgi sarnıçlarında mannoz-6-fosfat ile işaretlendiği yapısal alan ile; bu hidrolazların klatrin proteinleriyle kaplanarak hücresel yolağa salındığı tomurcuklanma alanı sırasıyla aşağıdakilerin hangisinde doğru olarak eşleştirilmiştir?
Doğru Şık (D): Cis yüzü - Trans yüzü
Açıklama: GER'den gelen ürünler öncelikle Golgi'nin konveks olan cis (giriş) yüzünden içeri alınarak mannoz-6-fosfat ile işaretlenirler. Hedeflenen veziküllerin paketlenerek organelden kopup ayrıldığı konkav çıkış bölgesi ise trans yüzü olarak adlandırılır.

**Soru 2 (ID: 9449fb67-14c7-450f-80fe-70befe86a074)**
Soru Kökü: Primer lizozom keselerinin M6P ile işaretlenmiş enzimleri taşıyarak klatrin iskeleti eşliğinde sitoplazmaya yollandığı evre, Golgi kompleksinin anatomik olarak hangi bölgesinden kopan tomurcuklanmalar sayesinde gerçekleşir?
Doğru Şık (D): Golgi trans yüzü
Açıklama: Golgi trans yüzü (konkav yüz), işlenmesi ve modifikasyonları bitmiş veziküllerin son hedef etiketleri (örn: lizozom enzimi ise M6P, dış zar zarı ise fosfolipid dizilimi) ile koptukları çıkış platformudur. Ürünler Golgi'ye ilk olarak GER üzerinden konveks yapıdaki cis yüzünden girmektedir.

---

### ÇİFT 193 (Benzerlik: 0.77)

**Soru 1 (ID: dbc762d5-3e25-4d5b-bee6-401b5ed9be0f)**
Soru Kökü: 28 yaşında erkek hasta, sistemik eklem hipermobilitesi ve aort genişlemesi şüphesiyle değerlendiriliyor. Destek dokulardaki spesifik bir lif defektini ekarte etmek amacıyla alınan bağ dokusu biyopsisinde, elastik liflerin dağılımını spesifik olarak göstermek için aşağıdaki boya yöntemlerinden hangisi kullanılmalıdır?
Doğru Şık (A): Verhoeff boyası
Açıklama: Verhoeff, Weigert ve Orsein boyaları, bağ dokusundaki elastik liflerin spesifik olarak siyah veya kahverengiye boyanarak diğer bağ dokusu elemanlarından ayırt edilmesini sağlayan özel yöntemlerdir. Gümüşleme retiküler lifleri siyaha boyarken, Azan genel bağ dokusunu renklendirir; elastik lif spesifikitesi taşımazlar. Bu klinik senaryodaki Marfan sendromu benzeri elastik lif zayıflığını mikroskobik olarak doğrulamak için elastik lif spesifik boyalar şarttır.

**Soru 2 (ID: 43456e91-760d-4947-8745-78ad6c99668a)**
Soru Kökü: Otuz yaşında ve araknodaktili bulguları olan bir erkek hastanın aort diseksiyonu materyali incelenmektedir. Histolojik kesitlerde tunika media tabakasındaki elastik liflerin parçalandığını doğrulamak isteyen bir patolog, aşağıdaki boyalardan hangisini uygulamalıdır?
Doğru Şık (D): Weigert
Açıklama: Aort duvarının esnekliğini sağlayan elastik lif yapılarının morfolojik incelenmesinde Weigert, Orsein veya Verhoeff gibi spesifik lif boyalarının kullanılması zorunludur. Azokarmin bağ dokusu, Sudan black ise yağ boyası olup elastik mimarinin diseksiyon düzeyindeki patolojisini göstermede yetersiz kalırlar. Bu boyalar, elastik lamellerdeki kopma veya kistik medial dejenerasyon bulgularını siyaha/koyu mora boyayarak görünür hale getirir.

---

### ÇİFT 194 (Benzerlik: 0.77)

**Soru 1 (ID: 95f7a4a5-c191-47e0-b99b-bba2e23b9a91)**
Soru Kökü: Oluklu bağlantılar (gap junction), epitel dokusundan miyokard dokusuna kadar birçok alanda kimyasal ve elektriksel sinyallerin aktarımını organize eden mikroskobik geçitlerdir. Bu hücreler arası iletişim kurucu bağlantılarla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hücre iskeletini oluşturan mikrotübül ve ara filamanlara moleküler olarak bağlanarak mekanik destek sağlar.
Açıklama: Hücre bağlantıları içinde Gap Junction (Neksus), hücre içi iskelet elemanlarına (aktin, mikrotübül veya ara filaman) tutunmayan TEK spesifik hücre bağlantısıdır. Görevi mekanik destek sağlamak veya doku bütünlüğünü korumak değil, hücreler arası elektriksel ve metabolik kuplajı (iletişimi) sağlamaktır. Kalsiyum ve cAMP gibi ikincil habercilerin senkronize dağılımı bu iskeletten bağımsız kanallar ile gerçekleşir.

**Soru 2 (ID: 264ee332-b08e-45a1-bb1b-ff688378ab47)**
Soru Kökü: Hücreler arası elektriksel ve kimyasal iletişimi sağlayan oluklu bağlantılar (gap junction, nexus) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Epitel dokuda apikale en yakın yerleşerek paraselüler sızdırmazlığı kontrol eden temel yapıdır.
Açıklama: Apikale en yakın yerleşen ve paraselüler sızdırmazlığı (geçişi) kontrol eden yapı gap junction değil, zonula occludens'tir (sıkı bağlantı). Gap junction sadece hücre sitoplazmaları arasında kanal oluşturarak iletişimi (sinaps/kalp kası uyarı iletimi vb.) sağlar, dokular arası bariyer görevi yoktur.

---

### ÇİFT 195 (Benzerlik: 0.77)

**Soru 1 (ID: eaf4919f-fb58-44de-9699-5f1482833998)**
Soru Kökü: Aşağıdaki ifadelerden hangisi endosimbiyotik teoriye konu olan mitokondriyon organeli için **yanlıştır**?
Doğru Şık (D): Bölünmesi klatrin ilişkili proteinler aracılığıyla gerçekleşir.
Açıklama: Mitokondriyonun bölünmesi (fission) klatrin ile değil, granülsüz endoplazmik retikulum ile ilişkilidir ve bu süreçte dynamin ve DRP (dynamin-related protein) görev alır. Mitokondriyonun sirküler DNA'sı olması, kendi proteinlerinin %1'ini sentezleyebilmesi ve maternal kalıtılması onun karakteristik prokaryot benzeri (eubacteri) özellikleridir.

**Soru 2 (ID: 580a4d60-5577-48d3-9aa5-75fd13c192b9)**
Soru Kökü: Mitokondriyonun yapısal özellikleri ve hücresel biyolojisi hakkında verilen aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Matriksinde oksidatif fosforilasyon için gerekli olan enzimleri sadece dışarıdan (sitozolik serbest ribozomlardan) içeri alır.
Açıklama: Mitokondriyon, matriksinde kendisine ait sirküler DNA ve ribozomlar sayesinde oksidatif fosforilasyonda görevli olan 13 enzimi (mitokondriyal proteinlerin %1'i) kendisi bizzat üretebilme yeteneğine sahiptir. Kalan büyük çoğunluğu (%99) hücrenin çekirdeğindeki DNA kodlar ve sitozoldeki serbest ribozomlardan TOM/TIM yoluyla içeri alır. Tamamen dışarıya bağımlı değildir.

---

### ÇİFT 196 (Benzerlik: 0.77)

**Soru 1 (ID: bb1b75b1-a013-4200-82fb-b4f307134458)**
Soru Kökü: Bağ dokusunun detaylı incelenmesinde tercih edilen Mallory boyama kombinasyonu; Anilin mavisi, Asit fuksin ve Orange G komponentlerinden oluşur. Bu komponentlerden 'Anilin mavisi' ile seçici olarak boyanan matriks bileşeni aşağıdakilerden hangisidir?
Doğru Şık (A): Kollajen lifleri
Açıklama: Mallory trikrom boyamasında Anilin mavisi dokudaki kollajen bağ dokusunu spesifik bir şekilde maviye boyarken, Asit fuksin sitoplazmayı ve Orange G eritrositleri (turuncu) boyayarak üç renkli güçlü bir kontrast yaratır. Glikojen ve miyelin kılıflar bu boyanın affinitesine girmez ve ancak özel lipit/karbonhidrat boyalarıyla gösterilebilirler. Bu boya kombinasyonu bağ dokusu fibrozisinin hücresel alanlardan ayırt edilmesinde çok faydalıdır.

**Soru 2 (ID: a272ecbd-5174-4e7f-b81e-683688a09c67)**
Soru Kökü: Bağ dokusunun farklı kompanentlerini birbirinden yüksek kontrastla ayırt etmek için tercih edilen Mallory boyamasında üç ayrı kimyasal kullanılmaktadır. Bu spesifik yöntemde hücre sitoplazması ve dokudaki eritrositler sırasıyla hangi reaktiflerle (hangi renkte) izlenir?
Doğru Şık (C): Asit fuksin - Orange G
Açıklama: Mallory üçlü boyama yönteminde sitoplazma asit fuksin ile kırmızı-pembe tonlarında boyanırken, eritrositler Orange G komponenti sayesinde belirgin turuncu/sarı renkte izlenir. Anilin mavisi ise sadece kollajen liflerine bağlanarak mavi bağ dokusu kontrastını sağladığından hücre içi yapılarda veya kan hücrelerinde rol almaz. Bu ayrım, kanama odakları veya hücresel inflamasyonla birlikte seyreden fibrotik doku lezyonlarının haritalanmasında kritik kolaylık sağlar.

---

### ÇİFT 197 (Benzerlik: 0.77)

**Soru 1 (ID: 9a46fd8f-1bc8-4ba2-bf8b-9330f119b551)**
Soru Kökü: Kırk beş yaşında erkek hastadan alınan doku biyopsisinde hücrelerin apopitotik sürece girdiği saptanıyor. Bu fizyolojik yıkım sürecinde, hücre zarının normalde iç yaprağında yerleşik olan ancak apopitozla birlikte hücre dışı ortama bakan (eksternalize olan) zar fosfolipidi aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidilserin
Açıklama: Fosfatidilserin sağlıklı hücrelerde asimetrik zar yapısının sadece protoplazmik (iç) yaprağında yer alır ve apopitoz sinyaliyle dış yaprağa (ekstraselüler) takla atarak fagositoz için 'beni ye' sinyali oluşturur. Fosfatidilkolin hücre zarında en sık bulunan fosfolipid olup her iki yaprakta izlenirken, kardiolipin hücre zarında değil mitokondriyon iç zarında bulunur. Bu yer değiştirme, hücre ölüm döngüsünün histolojik membran düzeyindeki en erken ve en kritik belirteçlerinden biridir.

**Soru 2 (ID: 8f98abd0-4030-4ab9-ad61-311e798aecc9)**
Soru Kökü: Apopitoz sırasında hücre zarının bütünlüğü bozulmaz ancak fagositoz yapacak bağışıklık hücreleri tarafından tanınmayı (eat-me sinyali) sağlayan asimetrik bir zar değişikliği meydana gelir. Bu amaçla hücre zarının iç yaprakçığından dış yaprakçığına enzimatik olarak yer değiştiren (eksternalizasyon) fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfatidilserin
Açıklama: Sağlıklı hücrelerde hücre zarının sadece sitozolik (iç) yüzünde bulunan fosfatidilserin, apopitozun erken aşamalarında flippaz enzimi inaktivasyonu ve scramblase aktivasyonu ile dış ortama (eksternalizasyon) bakan yüzeye aktarılır. Fosfatidilkolin ve sfingomiyelin normal hücrede zaten dış yaprakçıkta yoğun bulunduğundan bir fagositoz sinyali oluşturmaz. Dış yüzeydeki fosfatidilserin, makrofajların apoptotik cisimleri hücre içine alması için spesifik reseptörlere bağlanır. Bu asimetri kaybı apopitozun en erken laboratuvar saptama (Annexin-V testi) yöntemidir.

---

### ÇİFT 198 (Benzerlik: 0.77)

**Soru 1 (ID: 0f00eced-53c7-4241-9b5e-b0f9bcfea215)**
Soru Kökü: Hücre döngüsü analizlerinde DNA miktarını kolorimetrik olarak ölçmek için de kullanılan Feulgen reaksiyonu, nükleik asit içindeki hangi spesifik hedef molekülü boyamaktadır?
Doğru Şık (C): DNA yapısındaki deoksiriboz şekeri
Açıklama: Feulgen reaksiyonu, hafif asit hidrolizi ile pürin bazlarını uzaklaştırarak DNA'daki deoksiriboz şekerini açığa çıkarır ve bunu spesifik olarak macenta/kırmızı renge boyar. Kromatinin fosfat omurgası bazik boyalarla (hematoksilin) hedef alınırken, Feulgen yalnızca DNA şekerine bağlanmasıyla tam spesifite sağlar. Hücrenin anöploidi analizinde DNA ploidisinin belirlenmesinde oldukça değerlidir.

**Soru 2 (ID: 6946233c-a474-4765-b2cf-7ce4d3ceedcb)**
Soru Kökü: Hücre nükleusu incelemelerinde genetik materyallerin histokimyasal ayrımı için bazik ve spesifik boyalar kullanılmaktadır. Aşağıdaki nükleer kompartıman veya moleküllerden hangisinin Feulgen boyası ile pozitif (kırmızı/mor) boyanması **beklenmez**?
Doğru Şık (C): Çekirdekçik (Nükleolus)
Açıklama: Feulgen boyası sadece DNA'nın deoksiriboz şekerine spesifik olarak bağlanır; çekirdekçik (nükleolus) ise ribozomal RNA sentez yeridir ve RNA içerdiği için Feulgen negatiftir. RNA yapıları (nükleolus dahil) pyronin veya diğer bazik boyalarla metakromatik boyanır. Kromatin tipleri ve kromozomlar DNA içerdiğinden Feulgen ile güçlü pozitif reaksiyon verirler.

---

### ÇİFT 199 (Benzerlik: 0.76)

**Soru 1 (ID: 731596b6-283c-4daa-907a-7ee7a27db31a)**
Soru Kökü: Mallory Trikrom boyama yöntemi, bağ dokusu bileşenlerinin birbirinden ayrımında sıklıkla tercih edilen üçlü bir boyama tekniğidir. Bu yöntemde kullanılan boya ve boyadığı yapı eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Asit fuksin - Glikozaminoglikanlar
Açıklama: Mallory boyamasında Asit fuksin hücre sitoplazmasını, Anilin mavisi kollajen lifleri, Orange G ise eritrositleri boyayarak bağ dokusu ve kas hücreleri arasında net bir optik kontrast oluşturur. Glikozaminoglikanlar güçlü anyonik karaktere sahip olduklarından asidik karakterli asit fuksin ile değil, bazik boyalar veya PAS gibi özel karbonhidrat ayraçlarıyla gösterilirler. Trikrom boyaların temel amacı kollajen yoğunluğunu (örneğin skar dokusunda) mavi renk ile net bir şekilde haritalamaktır.

**Soru 2 (ID: 849ca856-3be7-4b4e-a2f6-b219b9fcff95)**
Soru Kökü: Bağ dokusu için sevilen bir yöntem olan Mallory boyamasında kullanılan bileşenler ve hedefledikleri yapılarla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): Asit fuksin - Çekirdek kromatini
Açıklama: Mallory boyama yönteminde üç ana bileşen yer alır: Anilin mavisi kollajeni, Asit fuksin hücre sitoplazmasını, Orange G ise eritrositleri boyar. Asit fuksin, yapısı gereği asidik karakterdedir ve anyonik olan çekirdek kromatini (DNA) ile bağ kuramaz. Çekirdek boyanması için asit fuksin değil, hematoksilin gibi bazik boyalara veya Feulgen gibi spesifik reaksiyonlara ihtiyaç vardır.

---

### ÇİFT 200 (Benzerlik: 0.76)

**Soru 1 (ID: 731596b6-283c-4daa-907a-7ee7a27db31a)**
Soru Kökü: Mallory Trikrom boyama yöntemi, bağ dokusu bileşenlerinin birbirinden ayrımında sıklıkla tercih edilen üçlü bir boyama tekniğidir. Bu yöntemde kullanılan boya ve boyadığı yapı eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Asit fuksin - Glikozaminoglikanlar
Açıklama: Mallory boyamasında Asit fuksin hücre sitoplazmasını, Anilin mavisi kollajen lifleri, Orange G ise eritrositleri boyayarak bağ dokusu ve kas hücreleri arasında net bir optik kontrast oluşturur. Glikozaminoglikanlar güçlü anyonik karaktere sahip olduklarından asidik karakterli asit fuksin ile değil, bazik boyalar veya PAS gibi özel karbonhidrat ayraçlarıyla gösterilirler. Trikrom boyaların temel amacı kollajen yoğunluğunu (örneğin skar dokusunda) mavi renk ile net bir şekilde haritalamaktır.

**Soru 2 (ID: f8ad9189-1df5-4833-9974-71d809185dc5)**
Soru Kökü: Bağ dokusu için sevilen bir yöntem olan Mallory boyamasında kullanılan bileşenler ve hedefledikleri yapılarla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): Asit fuksin - Çekirdek kromatini
Açıklama: Mallory boyama yönteminde üç ana bileşen yer alır: Anilin mavisi kollajeni, Asit fuksin hücre sitoplazmasını, Orange G ise eritrositleri boyar. Asit fuksin, yapısı gereği asidik karakterdedir ve anyonik olan çekirdek kromatini (DNA) ile bağ kuramaz. Çekirdek boyanması için asit fuksin değil, hematoksilin gibi bazik boyalara veya Feulgen gibi spesifik reaksiyonlara ihtiyaç vardır.

---

### ÇİFT 201 (Benzerlik: 0.76)

**Soru 1 (ID: 65f258fe-e642-450b-ba7e-5d1b42e101cf)**
Soru Kökü: 55 yaşında erkek hastadan alınan lenf nodu biyopsisinde, kemoterapötik ajanlara bağlı apopitotik hücre ölümü izlenmektedir. Apopitozun erken evresinde, makrofajlar tarafından fagositozu başlatmak için normalde sadece iç zarda yerleşik olup bu süreçte dışarıya (eksternalize) dönen fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (A): Fosfotidil serin
Açıklama: Fosfotidil serin, sağlıklı bir hücrede sadece hücre zarının protoplazmik (iç) yaprağında yerleşik durumdadır. Hücre apopitoza girdiğinde, bu asimetri bozularak fosfotidil serin ekstraselüler yüzeye (dış yaprağa) çıkar ve makrofajlar üzerindeki reseptörlere 'beni fagositozla' sinyali gönderir. Fosfotidil kolin ve sfingomyelin zaten dış yaprakta bol bulundukları için böyle bir spesifik apopitotik belirteç fonksiyonu taşımazlar.

**Soru 2 (ID: e2878d22-9614-4f3e-b117-f20e5fd581e5)**
Soru Kökü: Apopitoz sırasında hücre zarı yapısal bütünlüğünü korur ancak makrofajlar tarafından fagositozu sağlamak için zardaki lipid asimetrisi bozulur. Zarın iç yapısından dışa dönerek (eksternalizasyon) fagositoz sinyali veren molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidil serin
Açıklama: Apopitozise giren hücrede, normalde hücre zarının iç yaprağında bulunan fosfatidil serin molekülleri dış yaprağa (eksternalizasyon) yer değiştirir ve makrofajlar için bir "beni ye" sinyali oluşturur. FasL ekstrensek yolu başlatan bir dış liganddır, p53 ise G1 fazı kontrol noktası elemanıdır. Fosfatidil serin translokasyonu apopitozun en güvenilir erken membran belirteçlerindendir.

---

### ÇİFT 202 (Benzerlik: 0.76)

**Soru 1 (ID: 4f964424-1ce4-4519-a085-8fea769c7c5e)**
Soru Kökü: Hücre içi nükleik asit dağılımını inceleyen bir uzman, çekirdekteki DNA miktarını ve sitoplazmadaki ribozomal RNA dağılımını spesifik olarak birbirinden ayırt etmek istemektedir. Bu amaca ulaşmak için sırasıyla hangi iki boyayı kullanması en uygun histolojik yaklaşımdır?
Doğru Şık (A): Feulgen ve Pironin
Açıklama: DNA molekülündeki deoksiriboz şekerini hedef alan Feulgen reaksiyonu çekirdeği, RNA moleküllerini hedef alan Pironin ise sitoplazmadaki ribozomal aktivite alanlarını spesifik olarak ortaya çıkarır. Hematoksilin bazik yapısıyla hem DNA hem de RNA'ya bağlandığından ikisi arasındaki moleküler lokalizasyon farkını ayırt edemez. Bu kombine yöntem, özellikle hücresel transkripsiyon kapasitesi veya genetik stabilite araştırmalarında hücresel haritalama sunar.

**Soru 2 (ID: 52540552-b3a8-45e3-9e45-660a1066410e)**
Soru Kökü: Hücre içi nükleik asitlerin dağılımını spesifik olarak göstermek isteyen bir araştırmacı, deoksiriboz şekerini hedefleyen bir boyama tekniği kullanmayı planlamaktadır. Bu amaçla DNA'nın lokalizasyonunu RNA'dan izole bir şekilde saptayabilen en uygun spesifik yöntem aşağıdakilerden hangisidir?
Doğru Şık (B): Feulgen
Açıklama: Feulgen reaksiyonu, zayıf asit hidrolizi ile pürin bazlarını uzaklaştırarak DNA'daki deoksiriboz şekerini açığa çıkarır ve Schiff ayıracı ile sadece DNA'ya spesifik pembe-kırmızı bir boyanma sağlar. Pironin boyası RNA'yı spesifik olarak boyarken, Feulgen yalnızca DNA'yı işaretler; hematoksilin ise her ikisini de (tüm nükleik asitleri) aynı anda boyar. Bu kimyasal ayrım hücresel aktivitenin transkripsiyonel veya proliferatif düzeyde analizine olanak tanır.

---

### ÇİFT 203 (Benzerlik: 0.76)

**Soru 1 (ID: 8ab68af9-b53f-4b9b-8cc1-ac1c0a020273)**
Soru Kökü: Sitoplazmada serbest ribozomlar tarafından sentezlenen ve mitokondriyonda görev yapacak olan bir enzimin, mitokondriyonun zarlarından geçişini sağlayan protein kompleksleri aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?
Doğru Şık (C): TOM – TIM
Açıklama: Çekirdek DNA'sı tarafından kodlanıp sitoplazmada üretilen mitokondriyal proteinlerin organel içine alınmasında dış zarda TOM (translocase of the outer mitochondrial membrane), iç zarda ise TIM (translocase of the inner mitochondrial membrane) kompleksleri enerji harcayarak görev yapar. COP ve klatrin kompleksleri veziküler taşımada görevlidir, mitokondriyal translokasyonda yeri yoktur.

**Soru 2 (ID: d98a9707-95af-4ef8-a1b8-8c54b06f5541)**
Soru Kökü: Mitokondriyon kendi protein sentezi kapasitesine sahip olmasına rağmen ihtiyacı olan proteinlerin %99'u çekirdek DNA'sından kodlanıp sitoplazmik serbest ribozomlarda sentezlenir. Bu sitoplazmik proteinlerin mitokondriyon dış zarından matriks yönüne geçişini başlatan taşıyıcı protein kompleksi aşağıdakilerden hangisidir?
Doğru Şık (A): TOM kompleksi
Açıklama: Mitokondriyona sitoplazmadan protein aktarılmasında dış zarı geçen kompleks TOM (translocase of the outer mitochondrial membrane), iç zarı geçen ise TIM kompleksidir. Porinler dış zarda sadece küçük (<5 kDa) moleküllerin pasif geçişine izin verirken, büyük proteinlerin enerji harcanarak spesifik alımı TOM aracılığıyla olur.

---

### ÇİFT 204 (Benzerlik: 0.76)

**Soru 1 (ID: 19d940cd-b7c6-4b9a-a691-f93fa92f46f5)**
Soru Kökü: Toluidin mavisi gibi spesifik moleküllerle reaksiyona girerek orijinal boya rengini değiştiren (metakromazi) hücresel veya dokusal hedefler arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (E): Yağ hücrelerinin intraselüler lipid damlacıkları
Açıklama: Yağ hücrelerinin içindeki nötral trigliserid damlacıkları polianyonik bir yük taşımaz ve toluidin mavisiyle metakromatik bir renk değişimine (mavi yerine mor/kırmızı boyanmaya) yol açmazlar; lipidler Oil red O gibi özel solvan boyalarla görüntülenir. Metakromazi yaratabilmek için mast/bazofil granüllerindeki heparin veya kıkırdaktaki kondroitin sülfat gibi dizilimsel sülfatlanmış kuvvetli polianyonik merkezlere ihtiyaç vardır. Bu kimyasal şartlar metakromazinin yüksek doku spesifikliğini oluşturur.

**Soru 2 (ID: 9a705e3d-6d9f-44dd-80a2-6e75db60e931)**
Soru Kökü: Metakromazi, dokudaki bazı polianyonik yapıların bazik boyaların orijinal rengini değiştirmesi fenomenidir. Aşağıdaki doku yapılarından hangisinin toluidin mavisi ile boyandığında metakromatik bir reaksiyon vermesi **beklenmez**?
Doğru Şık (C): Eritrositler
Açıklama: Eritrositler içerdikleri hemoglobin proteini nedeniyle güçlü katyonik özelliğe sahiptir ve eosin gibi asit boyalarla boyanır; bu nedenle bazik bir boya olan toluidin mavisi ile polianyonik etkileşime girip metakromazi oluşturamazlar. Metakromazi, mast ve bazofil granüllerindeki heparin, kıkırdak matriksindeki kondroitin sülfat gibi yoğun polianyonik bölgelerin boya polimerizasyonuna neden olarak rengi maviden kırmızı-mora kaydırmasıyla gerçekleşir. Glikojen de yapısındaki özelliklerle bu bazik boyalarla metakromatik reaksiyon verebilen moleküller arasındadır.

---

### ÇİFT 205 (Benzerlik: 0.76)

**Soru 1 (ID: e0eb3785-fdca-454d-b131-0c3570fbed33)**
Soru Kökü: 55 yaşında kadın hasta, over kanseri tanısıyla kemoterapi almaktadır. Tedavide kullanılan ilaçlardan birinin mikrotübül dinamiğini bozarak mitoz mekiği işlevini felce uğrattığı biliniyor. Hücre bölünmesini durdurmak için mikrotübülleri spesifik olarak stabilize eden ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Paklitaksel (Taxol)
Açıklama: Paklitaksel (Taxol), mikrotübüllerde aşırı stabilizasyon yaparak dinamik instabiliteyi bozar ve kromozomların anafaza çekilmesini engelleyerek hücreyi metafazda durdurur. Kolşisin, nokodazol ve vinka alkaloidleri (vinkristin, vinblastin) ise polimerizasyonu engelleyerek etki gösteren destabilizan ajanlardır. Tümör tedavisinde mikrotübül dinamiğinin her iki yönde de bozulması sitotoksik etki yaratır.

**Soru 2 (ID: ddc03d70-208a-4d12-8bce-b8a38c2cf0b1)**
Soru Kökü: Mikrotübül zehirleri, hücre iskeleti dinamiklerini bozarak hücre bölünmesini durduran önemli farmakolojik ajanlardır. Bu ajanlar arasında depolimerizasyonu engelleyerek mikrotübül polimer yapısını aşırı stabilize eden molekül aşağıdakilerden hangisidir?
Doğru Şık (E): Paklitaksel
Açıklama: Paklitaksel (Taxol), mikrotübülün eksi uçtan depolimerizasyonunu engelleyerek polimerik yapıyı dondurur ve stabilizasyon sağlar. Güçlü çeldirici olan kolşisin ve vinka alkaloidleri (vinkristin/vinblastin) ise tam tersine polimerizasyonu durdurarak mikrotübül yıkımına neden olur. Paklitakselin mikrotübülleri aşırı stabilize etmesi, hücrenin mitoz mekiğini esnek biçimde kullanamamasına ve anafaza geçememesine yol açar. Bu benzersiz stabilizasyon etkisi, paklitakseli diğer mikrotübül inhibe edici kemoterapötiklerden ayırır.

---

### ÇİFT 206 (Benzerlik: 0.76)

**Soru 1 (ID: 51511a0e-d035-4be8-8bad-9bd4a8777b4d)**
Soru Kökü: Granüllü endoplazmik retikulumda sentezi ve primer modifikasyonları tamamlanan yeni bir polipeptit dizisinin (örneğin proinsülin), daha ileri modifikasyonlar (glikozilasyon/sülfatlama) için hücre içinde Golgi kompleksine taşınmasını sağlayan veziküllerin üzerini kaplayan örtü proteini aşağıdakilerden hangisidir?
Doğru Şık (C): COP II
Açıklama: GER'den tomurcuklanarak Golgi kompleksine doğru anterograt (ileri) yönde taşıma yapan veziküllerin etrafı COP II (coatomer II) proteinleriyle örtülüdür. COP I ise Golgi içinde ve Golgi'den GER'e geri (retrograt) dönen kurtarma veziküllerini kaplar. Klatrin ise Golgi'den lizozoma giden vezikülleri (M6P taşıyan) ve hücre zarından endositozla giren vezikülleri sarar.

**Soru 2 (ID: 7a7c540b-8809-41b9-90ec-b170e733ea03)**
Soru Kökü: Golgi kompleksinin trans yüzünden lizozomal enzimlerin ayrılması ve hedef bölgeye yönelmesi için vezikül oluşumunu çevreleyerek mekanik destek sağlayan, vezikül koptuktan sonra ise sirkülasyona geri dönen kılıf proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Klatrin
Açıklama: Golgi trans yüzeyinde mannoz-6-fosfat reseptörüne bağlanan enzimlerin etrafı vezikülleşme sırasında klatrin proteinleri ile çevrelenir. Vezikül zardan ayrıldığında klatrinler çözülerek sirkülasyona geri döner. COP II anterograd transportta (GER'den Golgi'ye) görevli kılıf proteini iken, klatrin lizozom hedeflemesi ve endositozda rol alır.

---

### ÇİFT 207 (Benzerlik: 0.76)

**Soru 1 (ID: 87d4e351-b0b6-4642-8789-ff46cbb0c2e8)**
Soru Kökü: Programlı hücre ölümü olan apopitoz süreci, patolojik hücre ölümü olan nekrozdan farklı morfolojik aşamalara sahiptir. Apopitozun morfolojik belirtileriyle ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (A): Hücre büzüşmesi izlenir.
Açıklama: Apopitoz sürecinde hücre hacim kaybeder ve hücre büzüşmesi (shrinkage) meydana gelir, bu sırada hücre zarı bütünlüğünü korur. Hücre şişmesi, zarın parçalanması ve içeriğin dışarı sızarak inflamasyona neden olması nekrozun tipik morfolojik ve klinik özellikleridir. Apopitoz sessiz ve inflamasyon yaratmayan bir fizyolojik tasfiye yöntemidir.

**Soru 2 (ID: a721c644-a443-449a-9a18-aa79e8cc8f07)**
Soru Kökü: Programlı hücre ölümü olan apopitoz ile ilgili aşağıdaki hücresel ve dokusal mekanizmalardan hangisi **yanlıştır**?
Doğru Şık (C): Apoptotik cisimlerin etrafı makrofajlarca sarıldığında çevre dokuda yoğun inflamasyon başlar.
Açıklama: Apopitoz sırasında hücre parçaları, zarları sağlam kalacak şekilde küçük apoptotik cisimciklere ayrılır ve hücre içi materyal dış ortama sızmaz; bu nedenle etraftaki dokularda hiçbir inflamatuar yanıt tetiklenmez. Nekrozda ise tam tersine hücrenin zarı parçalanır, lizozomal enzimler dokuya dökülür ve şiddetli inflamasyon başlar. İnflamasyonun yokluğu apopitozun nekrozdan ayrıldığı en klinik ve histolojik belirteçtir. Fosfatidilserin asimetrisi sayesinde süreç tamamen izole bir fagositozla sonuçlanır.

---

### ÇİFT 208 (Benzerlik: 0.76)

**Soru 1 (ID: 23684302-37d9-4846-b8a6-ed0143d7ed52)**
Soru Kökü: Epitel hücrelerini hem bazal membrana hem de birbirine sağlam bir şekilde bağlayan farklı adezyon kompleksleri mevcuttur. Bu hücresel bağlantı birimlerinin mekanizması ve hücre iskeleti ile olan etkileşimlerine dair aşağıdaki hücresel analiz eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (D): Zonula occludens - Hücre içi ara filamanlara yoğun plaklar aracılığıyla bağlanarak epitelin apikal yüzeyinde paraselüler madde geçişini tamamen engeller.
Açıklama: Zonula occludens (tıkayıcı bağlantı) hücre içi iskelette ara filamanlara değil, doğrudan ZO (Zonula Occludens) proteinleri 1, 2, 3 aracılığıyla aktin filamanlarına tutunur. Ayrıca plak yapıları değil, claudin ve occludin kaynaklı fokal füzyon noktaları içerir. Ara filamanlara güçlü plaklarla bağlanan tutundurucu yapılar makula adherens (desmozom) ve hemidesmozomdur.

**Soru 2 (ID: 781de193-3915-4005-8255-479bee05b463)**
Soru Kökü: Hücrelerin birbirlerine tutunmasını sağlayan zonula adherens (kuşak desmozom) kompleksiyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Hücre içinde hücre iskeletinden keratin gibi ara filamanlarla ilişkidedir.
Açıklama: Zonula adherens (kuşak desmozom) yapısı hücre içinde ara filamanlara değil, aktin filamanlarına tutunur. Ara filamanlara (keratin vb.) tutunan yapı makula adherens'tir (nokta desmozom). Her ikisi de kaderin temelli olsa da iskelet bağlantıları onları biyomekanik olarak ayırır.

---

### ÇİFT 209 (Benzerlik: 0.76)

**Soru 1 (ID: eae9a535-de08-4387-940c-b29d62645c44)**
Soru Kökü: İki epitel hücresini birbirine bağlayan ve hücre içinde ara filamanlarla ilişki kuran makula adherens (nokta desmozom) bağlantılarının temel bileşenleri histolojik olarak değerlendirilmektedir. Bu simetrik tutundurucu bağlantıda, iki hücre arasında kalsiyum varlığında yapışmayı sağlayan (Ca++ bağımlı) hücresel adezyon proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Desmoglein
Açıklama: Makula adherens (desmozom) bağlantılarında komşu hücreleri kalsiyum bağımlı olarak birbirine bağlayan proteinler, kaderin ailesi üyeleri olan desmocollin ve desmoglein'dir. Fibronektin ve laminin hücre-matriks bağlantılarında (integrin aracılı) görev alırken, trisellulin üç hücreli sıkı bağlantı (tight junction) noktalarında bulunur. Desmoglein spesifik olarak nokta desmozomlara özgü bir adezyon molekülüdür.

**Soru 2 (ID: 142a8886-ffaf-407e-9f81-9c6a08247105)**
Soru Kökü: Farklı tür hücreleri birbirine bağlayan ve hücre zarı dışındaki glikoproteinlerin karbonhidratlarına tutunarak heterofilik bağlantı kuran kalsiyum (Ca++) bağımlı adezyon molekülü aşağıdakilerden hangisidir?
Doğru Şık (C): Selektin (Selectin)
Açıklama: Selektinler kalsiyum bağımlı çalışan ve heterofilik (farklı tür moleküller arası) bağlantı kuran hücre adezyon molekülleridir. Kaderinler de kalsiyum bağımlıdır ancak aynı tür hücreleri bağlayan homofilik yapıdadır. İntegrinler ise kalsiyumdan bağımsız grupta yer alırlar.

---

### ÇİFT 210 (Benzerlik: 0.76)

**Soru 1 (ID: 7519d50b-e454-47dd-9ad1-2220f99bbcec)**
Soru Kökü: Yirmi sekiz yaşında erkek hastadan alınan eklem faresine (serbest hyalin kıkırdak dokusu) biyopsi yapılıyor. Kıkırdak matriksinin toluidin mavisi damlatıldığında beklenmedik şekilde kırmızı/mor tonlarda (metakromatik) boyanmasının temel biyokimyasal mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Kıkırdak ara maddesinin yoğun polianyonik bölgeler içermesi
Açıklama: Hyalin kıkırdak ara maddesi, yüksek oranda sülfatlı glikozaminoglikanlar (kondroitin sülfat) içerir; bu da güçlü bir polianyonik bölge yaratarak bazik toluidin boyasının moleküler yığılmasına ve ışık absorbsiyon spektrumunun kaymasına (metakromazi) neden olur. Kollajenin katyonik veya lipidlerin nötral yapısı metakromatik bir reaksiyon üretemez. Matriksin bu reaksiyon yeteneği kıkırdağın yaşlanma ve dejenerasyon sürecinde azaldığı için aynı zamanda diagnostik bir veridir.

**Soru 2 (ID: 74f067bb-3f03-43fa-bd95-cac5285b64c4)**
Soru Kökü: 28 yaşında erkek hasta, temporomandibular eklem diski zedelenmesi sonrası cerrahi geçiriyor. Alınan kıkırdak doku örneğinde ara madde (matriks) yapılarının incelenmesi için metakromatik özellik gösteren bir boya kullanılması planlanıyor. Bu amaçla aşağıdaki ajanlardan hangisi uygundur?
Doğru Şık (E): Toluidin mavisi
Açıklama: Hyalin kıkırdak ara maddesi, yapısındaki sülfatlanmış proteoglikanlar nedeniyle güçlü bir polianyonik alan oluşturur ve toluidin mavisi ile metakromatik boyanır. Bu boyanma paterni kıkırdak matriksinin biyokimyasal bütünlüğünü değerlendirmek için klinik bir belirteçtir. Hematoksilin bazik olsa da tipik metakromatik renk değişimini toluidin mavisi kadar spesifik göstermez.

---

### ÇİFT 211 (Benzerlik: 0.76)

**Soru 1 (ID: 7519d50b-e454-47dd-9ad1-2220f99bbcec)**
Soru Kökü: Yirmi sekiz yaşında erkek hastadan alınan eklem faresine (serbest hyalin kıkırdak dokusu) biyopsi yapılıyor. Kıkırdak matriksinin toluidin mavisi damlatıldığında beklenmedik şekilde kırmızı/mor tonlarda (metakromatik) boyanmasının temel biyokimyasal mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Kıkırdak ara maddesinin yoğun polianyonik bölgeler içermesi
Açıklama: Hyalin kıkırdak ara maddesi, yüksek oranda sülfatlı glikozaminoglikanlar (kondroitin sülfat) içerir; bu da güçlü bir polianyonik bölge yaratarak bazik toluidin boyasının moleküler yığılmasına ve ışık absorbsiyon spektrumunun kaymasına (metakromazi) neden olur. Kollajenin katyonik veya lipidlerin nötral yapısı metakromatik bir reaksiyon üretemez. Matriksin bu reaksiyon yeteneği kıkırdağın yaşlanma ve dejenerasyon sürecinde azaldığı için aynı zamanda diagnostik bir veridir.

**Soru 2 (ID: df2a311c-66d1-4180-a0c9-461cb0f4fa3a)**
Soru Kökü: 28 yaşında erkek hasta, temporomandibular eklem diski zedelenmesi sonrası cerrahi geçiriyor. Alınan kıkırdak doku örneğinde ara madde (matriks) yapılarının incelenmesi için metakromatik özellik gösteren bir boya kullanılması planlanıyor. Bu amaçla aşağıdaki ajanlardan hangisi uygundur?
Doğru Şık (E): Toluidin mavisi
Açıklama: Hyalin kıkırdak ara maddesi, yapısındaki sülfatlanmış proteoglikanlar nedeniyle güçlü bir polianyonik alan oluşturur ve toluidin mavisi ile metakromatik boyanır. Bu boyanma paterni kıkırdak matriksinin biyokimyasal bütünlüğünü değerlendirmek için klinik bir belirteçtir. Hematoksilin bazik olsa da tipik metakromatik renk değişimini toluidin mavisi kadar spesifik göstermez.

---

### ÇİFT 212 (Benzerlik: 0.76)

**Soru 1 (ID: ec06631f-a0e9-491a-9ace-8cfedb241f32)**
Soru Kökü: Lizozom organellerinin lümeninde makromoleküllerin spesifik yıkımından sorumlu olan çok çeşitli asit hidrolazlar bulunur. Aşağıdakilerden hangisi lizozomal hidrolitik enzimlerden biri **değildir**?
Doğru Şık (A): Katalaz
Açıklama: Proteaz, nükleaz, glikozidaz, lipaz ve fosfolipaz lizozom içerisindeki klasik asit hidrolazlardır. Katalaz ise hidrojen peroksit yıkan, peroksizom (mikrocisim) organeline spesifik bir enzimdir ve lizozomda bulunmaz.

**Soru 2 (ID: 1591219c-ddac-41c3-9210-c0f8ec4bb9e8)**
Soru Kökü: Peroksizomlar karaciğer ve böbrek hücrelerinde yoğun bulunan, hidrojen peroksit dengesi ve özgül lipid katabolizması yapan organellerdir. Aşağıdakilerden hangisi peroksizom lümeninde yer alan karakteristik enzimlerden biri **değildir**?
Doğru Şık (B): Fosfolipaz
Açıklama: Fosfolipaz, hücresel moleküllerin asidik ortamda sindirilmesini sağlayan bir lizozomal asit hidrolaz enzimidir. Peroksizomlarda hidrojen peroksit dengesini sağlayan temel enzimler katalaz (yıkıcı), peroksidaz, oksidaz (üretici) ve ayrıca kristaloid çekirdek oluşturan ürik asit oksidazdır.

---

### ÇİFT 213 (Benzerlik: 0.76)

**Soru 1 (ID: f26ee3bd-07cd-4d52-80c3-8d571fd08d9e)**
Soru Kökü: Sinapsisin tamamlandığı ve homolog kromozomlar arasında kiazmata yapılarının oluşarak crossing over işleminin izlendiği Mayoz I evresi aşağıdakilerden hangisidir?
Doğru Şık (D): Pakiten
Açıklama: Pakiten evresi, zigotende başlayan sinapsis işleminin bittiği ve homolog kromozomlar arasında genetik parça değişiminin (crossing over) fiziksel olarak gerçekleştiği kiazmata noktalarının belirginleştiği evredir. Diploten oosit bekleme aşamasıdır; leptoten ise sadece kromozomların yan yana geldiği başlangıç fazıdır.

**Soru 2 (ID: 0daa7faf-0b38-4e3f-af50-1f00ecb99265)**
Soru Kökü: Mayoz I Profaz I aşaması kendi içinde spesifik hücresel olayların gerçekleştiği evrelere ayrılır. Homolog kromozomların hücre içinde yan yana gelmeye başladığı ilk evre aşağıdakilerden hangisidir?
Doğru Şık (D): Leptoten
Açıklama: Profaz I evresinin ilk basamağı olan Leptoten'de, homolog kromozomlar kromatin yoğunlaşmasıyla belirginleşir ve yan yana gelmeye başlar. Bunu takiben Zigoten'de sinapsis başlar, Pakiten'de crossing over gerçekleşir ve Diakinez'de tamamen ayrılırlar. Leptoten, sinaptonemal kompleksin fiziksel temelinin atıldığı başlangıç evresidir.

---

### ÇİFT 214 (Benzerlik: 0.76)

**Soru 1 (ID: c36e0fa6-667b-4cf2-8f59-34352c71ae0f)**
Soru Kökü: Peroksizomlar karaciğer ve böbrek hücrelerinde yoğun bulunan, hidrojen peroksit dengesi ve özgül lipid katabolizması yapan organellerdir. Aşağıdakilerden hangisi peroksizom lümeninde yer alan karakteristik enzimlerden biri **değildir**?
Doğru Şık (B): Fosfolipaz
Açıklama: Fosfolipaz, hücresel moleküllerin asidik ortamda sindirilmesini sağlayan bir lizozomal asit hidrolaz enzimidir. Peroksizomlarda hidrojen peroksit dengesini sağlayan temel enzimler katalaz (yıkıcı), peroksidaz, oksidaz (üretici) ve ayrıca kristaloid çekirdek oluşturan ürik asit oksidazdır.

**Soru 2 (ID: ec06631f-a0e9-491a-9ace-8cfedb241f32)**
Soru Kökü: Lizozom organellerinin lümeninde makromoleküllerin spesifik yıkımından sorumlu olan çok çeşitli asit hidrolazlar bulunur. Aşağıdakilerden hangisi lizozomal hidrolitik enzimlerden biri **değildir**?
Doğru Şık (A): Katalaz
Açıklama: Proteaz, nükleaz, glikozidaz, lipaz ve fosfolipaz lizozom içerisindeki klasik asit hidrolazlardır. Katalaz ise hidrojen peroksit yıkan, peroksizom (mikrocisim) organeline spesifik bir enzimdir ve lizozomda bulunmaz.

---

### ÇİFT 215 (Benzerlik: 0.76)

**Soru 1 (ID: 1591219c-ddac-41c3-9210-c0f8ec4bb9e8)**
Soru Kökü: Peroksizomlar karaciğer ve böbrek hücrelerinde yoğun bulunan, hidrojen peroksit dengesi ve özgül lipid katabolizması yapan organellerdir. Aşağıdakilerden hangisi peroksizom lümeninde yer alan karakteristik enzimlerden biri **değildir**?
Doğru Şık (B): Fosfolipaz
Açıklama: Fosfolipaz, hücresel moleküllerin asidik ortamda sindirilmesini sağlayan bir lizozomal asit hidrolaz enzimidir. Peroksizomlarda hidrojen peroksit dengesini sağlayan temel enzimler katalaz (yıkıcı), peroksidaz, oksidaz (üretici) ve ayrıca kristaloid çekirdek oluşturan ürik asit oksidazdır.

**Soru 2 (ID: 2db47f48-e6c3-4ee7-816c-d68b62edb5ad)**
Soru Kökü: Lizozom organellerinin lümeninde makromoleküllerin spesifik yıkımından sorumlu olan çok çeşitli asit hidrolazlar bulunur. Aşağıdakilerden hangisi lizozomal hidrolitik enzimlerden biri **değildir**?
Doğru Şık (A): Katalaz
Açıklama: Proteaz, nükleaz, glikozidaz, lipaz ve fosfolipaz lizozom içerisindeki klasik asit hidrolazlardır. Katalaz ise hidrojen peroksit yıkan, peroksizom (mikrocisim) organeline spesifik bir enzimdir ve lizozomda bulunmaz.

---

### ÇİFT 216 (Benzerlik: 0.76)

**Soru 1 (ID: b13aa05f-dc8a-42dc-bea0-a35dcf44e77d)**
Soru Kökü: Golgi cisminin trans yüzünden tomurcuklanarak oluşan, duvarı lizozomal membran proteinleri ile kaplı olan ve lümeninde hidrolitik enzimler taşımasına rağmen henüz sindireceği materyal bulunmayan lizozomal keseye ne ad verilir?
Doğru Şık (C): Primer lizozom
Açıklama: Golgi'den yeni ayrılmış, hedefine henüz ulaşmamış ve inaktif hidrolitik enzim paketi halindeki zarlı veziküle primer lizozom denir. Herhangi bir hedef vezikül (fagozom veya endozom) ile birleştiği an adı sekonder lizozom olur. Geç endozom, hücre zarı kaynaklı endositoz yolu ile Golgi salgı yolağının birleştiği daha ileri bir yapıdır.

**Soru 2 (ID: 9d168f83-8f4a-4d32-8f0f-c601e379ffac)**
Soru Kökü: Lizozomların hücresel sindirim döngüsünde görev aldığı yapılar sınıflandırılırken, Golgi kompleksinden yeni ayrılmış ve henüz sindireceği materyalle birleşmemiş, lümeninde sadece inaktif hidrolitik enzim barındıran lizozom formuna ne ad verilir?
Doğru Şık (D): Primer lizozom
Açıklama: Yeni sentezlenen ve Golgi kompleksinin trans yüzünden tomurcuklanarak ayrılan, henüz substratıyla birleşmemiş olan inaktif enzim paketlerine primer lizozom denir. Bunların endozom veya otofagozom gibi sindirilecek hedef yapılarla birleşmiş formuna sekonder lizozom (heterofagozom) denir. Sindirim sonrasında geriye kalan materyal ise rezidüel cisimdir.

---

### ÇİFT 217 (Benzerlik: 0.76)

**Soru 1 (ID: 9d168f83-8f4a-4d32-8f0f-c601e379ffac)**
Soru Kökü: Lizozomların hücresel sindirim döngüsünde görev aldığı yapılar sınıflandırılırken, Golgi kompleksinden yeni ayrılmış ve henüz sindireceği materyalle birleşmemiş, lümeninde sadece inaktif hidrolitik enzim barındıran lizozom formuna ne ad verilir?
Doğru Şık (D): Primer lizozom
Açıklama: Yeni sentezlenen ve Golgi kompleksinin trans yüzünden tomurcuklanarak ayrılan, henüz substratıyla birleşmemiş olan inaktif enzim paketlerine primer lizozom denir. Bunların endozom veya otofagozom gibi sindirilecek hedef yapılarla birleşmiş formuna sekonder lizozom (heterofagozom) denir. Sindirim sonrasında geriye kalan materyal ise rezidüel cisimdir.

**Soru 2 (ID: 095e785f-180b-4203-a4b6-9924f3557d50)**
Soru Kökü: Golgi cisminin trans yüzünden tomurcuklanarak oluşan, duvarı lizozomal membran proteinleri ile kaplı olan ve lümeninde hidrolitik enzimler taşımasına rağmen henüz sindireceği materyal bulunmayan lizozomal keseye ne ad verilir?
Doğru Şık (C): Primer lizozom
Açıklama: Golgi'den yeni ayrılmış, hedefine henüz ulaşmamış ve inaktif hidrolitik enzim paketi halindeki zarlı veziküle primer lizozom denir. Herhangi bir hedef vezikül (fagozom veya endozom) ile birleştiği an adı sekonder lizozom olur. Geç endozom, hücre zarı kaynaklı endositoz yolu ile Golgi salgı yolağının birleştiği daha ileri bir yapıdır.

---

### ÇİFT 218 (Benzerlik: 0.76)

**Soru 1 (ID: c36e0fa6-667b-4cf2-8f59-34352c71ae0f)**
Soru Kökü: Peroksizomlar karaciğer ve böbrek hücrelerinde yoğun bulunan, hidrojen peroksit dengesi ve özgül lipid katabolizması yapan organellerdir. Aşağıdakilerden hangisi peroksizom lümeninde yer alan karakteristik enzimlerden biri **değildir**?
Doğru Şık (B): Fosfolipaz
Açıklama: Fosfolipaz, hücresel moleküllerin asidik ortamda sindirilmesini sağlayan bir lizozomal asit hidrolaz enzimidir. Peroksizomlarda hidrojen peroksit dengesini sağlayan temel enzimler katalaz (yıkıcı), peroksidaz, oksidaz (üretici) ve ayrıca kristaloid çekirdek oluşturan ürik asit oksidazdır.

**Soru 2 (ID: 2db47f48-e6c3-4ee7-816c-d68b62edb5ad)**
Soru Kökü: Lizozom organellerinin lümeninde makromoleküllerin spesifik yıkımından sorumlu olan çok çeşitli asit hidrolazlar bulunur. Aşağıdakilerden hangisi lizozomal hidrolitik enzimlerden biri **değildir**?
Doğru Şık (A): Katalaz
Açıklama: Proteaz, nükleaz, glikozidaz, lipaz ve fosfolipaz lizozom içerisindeki klasik asit hidrolazlardır. Katalaz ise hidrojen peroksit yıkan, peroksizom (mikrocisim) organeline spesifik bir enzimdir ve lizozomda bulunmaz.

---

### ÇİFT 219 (Benzerlik: 0.76)

**Soru 1 (ID: 16b6a519-1107-4ca1-a081-052e2090859b)**
Soru Kökü: Ağır nörolojik semptomlar ve karaciğer büyüklüğü ile doğan bir infantta, kanda çok uzun zincirli yağ asitlerinin (VLCFA) biriktiği saptanıyor. Yapılan biyopside bu moleküllerin katabolizmasını sağlayan organelin defektif olduğu belirleniyor. Söz konusu genetik hastalığın temelinde hangi organelin fonksiyon bozukluğu yer almaktadır?
Doğru Şık (D): Peroksizom
Açıklama: Çok uzun zincirli yağ asitlerinin beta-oksidasyonu ve dallı zincirli yağ asitlerinin alfa-oksidasyonu spesifik olarak peroksizom (mikrocisim) organelinde gerçekleştirilir. Mitokondriyon kısa ve orta zincirli yağ asitlerinin yıkımını yaparken, peroksizomal bir defekt (ör. Zellweger sendromu) VLCFA düzeylerinin toksik sınırlara ulaşmasına neden olur.

**Soru 2 (ID: 41308e49-10a6-4f10-a6c0-ddfbd477320b)**
Soru Kökü: Üç yaşında erkek çocuk, ilerleyici nörolojik kayıp, nöbet geçirme ve kas hipotonisi ile pediatri kliniğine yatırılıyor. Serum analizinde dallı zincirli yağ asitlerinin yüksek seviyelerde biriktiği görülüyor. Biyopside, belirli hücre organellerinin matrikse enzim transferinde defekt olduğu (boş organeller) izlenen bu hastada, fonksiyonu kaybolan kritik katabolik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksizomal alfa-oksidasyon yıkımı
Açıklama: Kanda dallı zincirli ve çok uzun zincirli yağ asitlerinin (VLCFA) birikmesi, mikrocisimlerin (peroksizomların) enzim ithalat yolaklarında, dolayısıyla fonksiyonlarında defekt olduğunu (Zellweger spektrum bozuklukları gibi) gösterir. Mitokondri bu karmaşık yağ asitlerinin yıkımını (alfa-oksidasyon) yapamaz, peroksizom fonksiyonunun kaybı ölümcül lipid birikimlerine yol açar.

---

### ÇİFT 220 (Benzerlik: 0.76)

**Soru 1 (ID: 16b6a519-1107-4ca1-a081-052e2090859b)**
Soru Kökü: Ağır nörolojik semptomlar ve karaciğer büyüklüğü ile doğan bir infantta, kanda çok uzun zincirli yağ asitlerinin (VLCFA) biriktiği saptanıyor. Yapılan biyopside bu moleküllerin katabolizmasını sağlayan organelin defektif olduğu belirleniyor. Söz konusu genetik hastalığın temelinde hangi organelin fonksiyon bozukluğu yer almaktadır?
Doğru Şık (D): Peroksizom
Açıklama: Çok uzun zincirli yağ asitlerinin beta-oksidasyonu ve dallı zincirli yağ asitlerinin alfa-oksidasyonu spesifik olarak peroksizom (mikrocisim) organelinde gerçekleştirilir. Mitokondriyon kısa ve orta zincirli yağ asitlerinin yıkımını yaparken, peroksizomal bir defekt (ör. Zellweger sendromu) VLCFA düzeylerinin toksik sınırlara ulaşmasına neden olur.

**Soru 2 (ID: d65ef145-24c6-4c1c-96cf-4aad3b051e9e)**
Soru Kökü: Üç yaşında erkek çocuk, ilerleyici nörolojik kayıp, nöbet geçirme ve kas hipotonisi ile pediatri kliniğine yatırılıyor. Serum analizinde dallı zincirli yağ asitlerinin yüksek seviyelerde biriktiği görülüyor. Biyopside, belirli hücre organellerinin matrikse enzim transferinde defekt olduğu (boş organeller) izlenen bu hastada, fonksiyonu kaybolan kritik katabolik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksizomal alfa-oksidasyon yıkımı
Açıklama: Kanda dallı zincirli ve çok uzun zincirli yağ asitlerinin (VLCFA) birikmesi, mikrocisimlerin (peroksizomların) enzim ithalat yolaklarında, dolayısıyla fonksiyonlarında defekt olduğunu (Zellweger spektrum bozuklukları gibi) gösterir. Mitokondri bu karmaşık yağ asitlerinin yıkımını (alfa-oksidasyon) yapamaz, peroksizom fonksiyonunun kaybı ölümcül lipid birikimlerine yol açar.

---

### ÇİFT 221 (Benzerlik: 0.76)

**Soru 1 (ID: 6aee470a-4c78-4ece-be8f-1b142c95b12e)**
Soru Kökü: Mayoz bölünmede homolog kromozom eşlenmesinin (sinapsis) kurulmaya başlandığı ve sinaptonemal kompleksin sentezlenmeye başlandığı Profaz I aşaması aşağıdakilerden hangisidir?
Doğru Şık (B): Zigoten
Açıklama: Zigoten, leptotende yan yana gelen homolog kromozomların arasında sinaptolemmal (sinaptonemal) kompleksin kurularak sinapsisin (eşlenmenin) başladığı evredir. Bu fermuar benzeri birleşme, bir sonraki evre olan pakitende gerçekleşecek crossing over işleminin fiziksel altyapısını kurar. Eşlenme başlamadan gen değiş tokuşu mümkün değildir.

**Soru 2 (ID: f26ee3bd-07cd-4d52-80c3-8d571fd08d9e)**
Soru Kökü: Sinapsisin tamamlandığı ve homolog kromozomlar arasında kiazmata yapılarının oluşarak crossing over işleminin izlendiği Mayoz I evresi aşağıdakilerden hangisidir?
Doğru Şık (D): Pakiten
Açıklama: Pakiten evresi, zigotende başlayan sinapsis işleminin bittiği ve homolog kromozomlar arasında genetik parça değişiminin (crossing over) fiziksel olarak gerçekleştiği kiazmata noktalarının belirginleştiği evredir. Diploten oosit bekleme aşamasıdır; leptoten ise sadece kromozomların yan yana geldiği başlangıç fazıdır.

---

### ÇİFT 222 (Benzerlik: 0.76)

**Soru 1 (ID: 450f27f8-1724-453f-a553-bc2f2bf24499)**
Soru Kökü: Hücre bağlantı komplekslerinin sağlamlığı, hücre içinde tutundukları hücre iskeleti elemanlarıyla doğrudan ilişkilidir. Doku bütünlüğünü sağlayan bu bağlantı tipleri ve bağlandıkları hücre iskeleti eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Gap junction (Oluklu bağlantı) – Mikrotübüller
Açıklama: Oluklu bağlantılar (Gap junctions) hücresel sinyal/metabolit geçişine hizmet ederler ve yapısal destek amaçlı herhangi bir hücre iskeleti elemanına (aktin, ara filaman veya mikrotübül) bağlanmazlar. Epiteldeki diğer temel bağlantıların tümü iskelet elemanlarına mekanik direnç için tutunur.

**Soru 2 (ID: 23684302-37d9-4846-b8a6-ed0143d7ed52)**
Soru Kökü: Epitel hücrelerini hem bazal membrana hem de birbirine sağlam bir şekilde bağlayan farklı adezyon kompleksleri mevcuttur. Bu hücresel bağlantı birimlerinin mekanizması ve hücre iskeleti ile olan etkileşimlerine dair aşağıdaki hücresel analiz eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (D): Zonula occludens - Hücre içi ara filamanlara yoğun plaklar aracılığıyla bağlanarak epitelin apikal yüzeyinde paraselüler madde geçişini tamamen engeller.
Açıklama: Zonula occludens (tıkayıcı bağlantı) hücre içi iskelette ara filamanlara değil, doğrudan ZO (Zonula Occludens) proteinleri 1, 2, 3 aracılığıyla aktin filamanlarına tutunur. Ayrıca plak yapıları değil, claudin ve occludin kaynaklı fokal füzyon noktaları içerir. Ara filamanlara güçlü plaklarla bağlanan tutundurucu yapılar makula adherens (desmozom) ve hemidesmozomdur.

---

### ÇİFT 223 (Benzerlik: 0.76)

**Soru 1 (ID: afd31ecd-3c23-4877-ae1f-6b1af80ce1e6)**
Soru Kökü: Hücre zarının iç yaprağında yerleşik olan ve hücrenin apopitotik sürece girmesiyle birlikte eksternalize olarak fagositoz için sinyal oluşturan fosfolipid aşağıdakilerden hangisidir?
Doğru Şık (B): Fosfotidil serin
Açıklama: Fosfotidil serin normal koşullarda hücre zarının iç (protoplazmik) yaprağında bulunurken, apopitotik süreçte dış yaprağa doğru eksternalize olur. Bu yer değiştirme, hücrenin makrofajlar tarafından tanınarak ortadan kaldırılmasını sağlayan kritik bir sinyaldir. Fosfotidil kolin hücre zarındaki en sık fosfolipid olup yapısal bütünlüğü sağlarken apopitotik yer değiştirme özelliği göstermez.

**Soru 2 (ID: abf49354-bd0d-43f3-b48d-e164ee0b10fd)**
Soru Kökü: Apopitoz sürecindeki bir hücrenin zarı rüptüre olmaz ancak hücre yüzeyinde yapısal bir modifikasyon gelişir. Makrofajlar tarafından inflamasyon yaratmadan tanınıp fagosite edilmesini sağlayan bu zar değişikliği aşağıdakilerden hangisidir?
Doğru Şık (D): Fosfotidil serin eksternalizasyonu
Açıklama: Fosfotidil serin, normalde hücre zarının iç yaprağında bulunurken apopitoz sürecinde dış yaprağa (eksternalizasyon) taşınarak fagositoz için sinyal oluşturur. Nekrozda hücre zarı doğrudan hasarlanıp parçalandığı için bu tür bir eksternalizasyon mekanizması izlenmez ve zar direkt rüptüre olur. Bu lipit değişimi, hücre kalıntılarının inflamasyona yol açmadan temizlenmesindeki temel hücresel işarettir.

---

### ÇİFT 224 (Benzerlik: 0.76)

**Soru 1 (ID: 8ee2162d-3de6-46ac-8cd7-f29785eedc22)**
Soru Kökü: Hücre çekirdeğindeki kromatin konfigürasyonlarının elektron ve ışık mikroskobundaki yansımaları değerlendirildiğinde, bu yapılarla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Ökromatinin yaygın olması, hücrenin aktif bir mitoz bölünme safhasında olduğunu gösterir.
Açıklama: Ökromatin yapısının bolluğu hücrenin transkripsiyonel/metabolik aktivitesinin (RNA sentezinin) yüksek olduğunu gösterir ancak hücre bölünmesi ile arasında bir korelasyon söz konusu değildir. Hatta bölünme sırasında tüm kromatin maksimal katlanarak kromozomlara dönüşür ve transkripsiyon durur. Diğer şıklar kromatin dinamiğinin doğru tanımlarıdır.

**Soru 2 (ID: 4ef6c190-1f65-4ce1-914a-574c2f9981cc)**
Soru Kökü: Çekirdeğin temel bileşenlerinden olan kromatin yapısı ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Heterokromatin bölgelerinde gen ekspresyonu yoğundur ve transkripsiyon çok aktiftir.
Açıklama: Heterokromatin, protein sentezlemeyen ve transkripsiyonun inaktif olduğu koyu paketli alanlardır; bu nedenle gen ekspresyonu yoğun değildir. Transkripsiyonel aktivitenin ve gen ekspresyonunun yoğun olduğu alanlar ökromatin olarak adlandırılır. Histon oktamerlerinden oluşan nükleozom yapısı, DNA'nın temel organizasyon birimidir.

---

### ÇİFT 225 (Benzerlik: 0.76)

**Soru 1 (ID: f8e055a4-68f9-4a2b-b36a-21127248143a)**
Soru Kökü: 24 yaşında erkek hasta apandisit kliniğiyle değerlendiriliyor. Enfeksiyon bölgesinde kan dolaşımındaki lökositlerin damar dışına çıkma sürecinin (diapedez) başladığı görülüyor. Lökositlerin diapedezinde, ilk aşama olan endotelde yavaşlayarak yuvarlanma hareketini sağlayan heterofilik protein eşleşmesi aşağıdakilerden hangisidir?
Doğru Şık (A): Lökosit selektin – Endotel selektin
Açıklama: Lökosit diapedezinin 1. aşamasında (yuvarlanma) lökosit membranında bulunan selektin molekülleri, endotel membranındaki glikoproteinlere zayıf ve gevşek bir biçimde bağlanarak yuvarlanmayı başlatır (Selektin-Selektin ilişkisi veya L-selektin ligandı). 2. aşamada ise lökosit üzerindeki integrinler, endoteldeki CAM moleküllerine sıkıca bağlanarak hücrenin durmasını ve aralıktan sızmasını sağlar. Diapedezin aşamalı mekanizması bu heterofilik molekül geçişine dayanır.

**Soru 2 (ID: be8c311b-cef4-40fd-b337-b7e0f3293b8f)**
Soru Kökü: Lökositlerin inflamasyon alanına göçü sırasında gerçekleşen diapedez sürecinde, lökositin endotel hücresine sıkıca tutunmasını sağlayan protein etkileşimi aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (A): Lökosit integrini - Endotel CAM molekülü
Açıklama: Lökosit diapedezinin ilk zayıf aşamasında yuvarlanmayı 'Lökosit selektin - endotel selektin' eşleşmesi başlatır. Ardından sıkı tutunma aşamasında, lökosit membranı üzerindeki integrinler ile endotel zarında bulunan İmmünoglobulin süper ailesine (IgSF) ait CAM molekülleri heterofilik olarak etkileşime girer.

---

### ÇİFT 226 (Benzerlik: 0.76)

**Soru 1 (ID: 520c0742-37cc-45c2-b295-4b010c0741ad)**
Soru Kökü: Protein sentezi esnasında, sinyal tanıma partikülünün (SRP) granüllü ER üzerindeki reseptörüne bağlanmasını takiben SRP'yi ortamdan uzaklaştırarak, sentezlenmekte olan proteinin GER lümenine giriş yapması için por görevi gören ana protein kanalı aşağıdakilerden hangisidir?
Doğru Şık (B): Translocon (translocator)
Açıklama: Translocator (translocon), GER zarında bulunan ve ribozom-mRNA kompleksinden gelen protein zincirinin organel lümenine girmesini sağlayan spesifik geçiş porudur. TOM kompleksi mitokondri dış zar geçişini kontrol eder, klatrin ise vezikül oluşumunu ve hücre zarı endositozunu regüle eder.

**Soru 2 (ID: ad7c959e-e793-4b6a-8d07-799f212041fd)**
Soru Kökü: Proteinlerin sentez mekanizması araştırılırken; sitozolik ribozomun GER yüzeyine kilitlenmesini takiben, sinyal tanıma partikülünün (SRP) yerini alarak protein zincirinin translasyonunun aksamadan sürmesine aracılık eden protein membran kompleksi aşağıdakilerden hangisidir?
Doğru Şık (C): Translocon sarnıcı
Açıklama: Translocon kompleksi, GER zarında bulunan ve translocator adlı proteinleri sayesinde SRP'yi lümene alan kanallardır. Ribozom zarına SRP uyarısıyla yanaşır ancak zincirin içeriye dökülmesi için translokon bariyeri esnemeli ve SRP molekülü protein çevriminden izole edilmelidir.

---

### ÇİFT 227 (Benzerlik: 0.76)

**Soru 1 (ID: 0e4a5ac6-c1c3-4edd-bf6b-c934e3a5a072)**
Soru Kökü: İlaç kullanan hastalarda suda çözünmeyen kimyasalların metabolize edilerek böbreklerden atılabilir hale getirilmesi (detoksifikasyon) işlemini sitokrom P-450 enzimleri aracılığıyla yürüten hücresel organel aşağıdakilerden hangisidir?
Doğru Şık (A): Granülsüz endoplazmik retikulum
Açıklama: Granülsüz (düz) endoplazmik retikulum, özellikle karaciğer hücrelerinde sitokrom P-450 enzimleri ile hidrofobik ilaç ve toksinlerin detoksifikasyonundan sorumludur. Peroksizomlar da alkol metabolizması gibi bazı detoksifikasyon reaksiyonlarına katılsa da, ilaçların suda çözünür hale getirilerek böbrekten atılmasını sağlayan temel merkez granülsüz ER'dir.

**Soru 2 (ID: 12013580-285e-4dec-9e08-e49617061d88)**
Soru Kökü: 55 yaşında erkek hasta, kronik tıbbi kullanımı nedeniyle barbitürat sınıfı ilaçlara karşı gelişmiş metabolik tolerans ile inceleniyor. Yapılan karaciğer iğne biyopsisinde, detoksifikasyon enzimleri olan sitokrom P-450 ailesine ev sahipliği yapan ve hücre içerisinde suda çözünmeyen kimyasalları metabolize eden organelin hipertrofik olduğu belirleniyor. Sorumlu organel aşağıdakilerden hangisidir?
Doğru Şık (D): Granülsüz (düz) endoplazmik retikulum
Açıklama: Suda çözünmeyen kimyasal bileşiklerin, ilaçların ve toksinlerin sitokrom P-450 enzimleri aracılığıyla detoksifiye edilmesi doğrudan granülsüz (düz) endoplazmik retikulumun başlıca görevlerinden biridir. Kronik ajan maruziyetinde bu organelin yapısı adaptasyon göstererek sayısal artış (hipertrofi) sergiler.

---

### ÇİFT 228 (Benzerlik: 0.76)

**Soru 1 (ID: 98948539-ae9c-4aea-b5d5-df444b628476)**
Soru Kökü: Nükleer lamina proteinlerinin iç çekirdek membranına tutunmasında çeşitli reseptör kompleksleri görev alır. Zarı 8 kez geçen ve Lamin B proteinine doğrudan bağlanarak onun tutunmasını sağlayan molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Emerin
Açıklama: Emerin, iç çekirdek zarını 8 kez transmembran olarak geçen ve Lamin B'nin membrana lokalizasyonunu sağlayan temel bir reseptördür. Nurim, Lamin A'yı LBR'ye bağlayan köprü proteinken; nükleostemin çekirdekçikte p53 etkileşimi yapan tamamen farklı bir proteindir.

**Soru 2 (ID: f36f6dbd-d3c7-486c-a0c6-075ecde93792)**
Soru Kökü: On sekiz yaşında erkek hasta, iskelet kaslarında ilerleyici güçsüzlük şikayetiyle başvuruyor. Yapılan genetik analizde, nükleer laminadaki Lamin B proteinini iç çekirdek membranına bağlayan ve membranı sekiz kez geçen reseptör proteinin geninde mutasyon saptanıyor. Emery-Dreifuss musküler distrofisi patogenezinden sorumlu bu defektif protein aşağıdakilerden hangisidir?
Doğru Şık (B): Emerin
Açıklama: Emerin, iç çekirdek membranını 8 kez geçen bir Lamin B reseptörüdür ve genetik mutasyonu Emery-Dreifuss musküler distrofisi gibi bir laminopati tablosuna yol açar. LBR de bir Lamin B reseptörü olmasına rağmen membranı 8 kez geçtiği belirtilen spesifik molekül emerindir ve nükleer zarın iskelet yapıya tutunmasını sağlar. Nükleer stabilitenin kaybı, mekanik strese maruz kalan kas hücrelerinde apopitozu tetikleyerek patolojiyi yaratır.

---

### ÇİFT 229 (Benzerlik: 0.76)

**Soru 1 (ID: 3ce24f40-18f2-41be-a9a5-e3c710e4483e)**
Soru Kökü: Elli yaşında kas zayıflığı şikayetiyle başvuran erkek hastadan miyopati şüphesiyle kas biyopsisi alınmıştır. Kas demetleri ile aralarına giren fibrotik bağ dokusu elemanlarını farklı renklerde boyayarak birbirinden ayırt etmek için en uygun boyama yöntemi aşağıdakilerden hangisidir?
Doğru Şık (C): Trikrom boyalar
Açıklama: Trikrom boyalar; kas dokusunu ve bağ dokusunu (kollajen) farklı ve kontrast renklere boyayarak, kas içindeki fibrozis oranını mükemmel bir şekilde gösterir. Gümüşleme retiküler lifleri gösterirken, Weigert sadece elastik lifleri boyar ve kollajen/kas ayrımında yetersiz kalır. Kas biyopsilerinin patolojik değerlendirmesinde Masson trikrom gibi türevler ilk tercihtir.

**Soru 2 (ID: 701ffc08-d18f-4a4f-b6c4-b82aa8817a29)**
Soru Kökü: Kırk yaşında erkek hasta, ilerleyici kas zayıflığı şikayetiyle başvuruyor. Oksidatif fosforilasyon organellerindeki olası bir defekti değerlendirmek amacıyla alınan kas biyopsisinde, bu organelleri özel olarak göstermek için aşağıdaki boyama yöntemlerinden hangisi tercih edilmelidir?
Doğru Şık (B): Demirli hematoksilin
Açıklama: Demirli hematoksilin boyası, hücrenin enerji üretim merkezi olan mitokondriyonları spesifik olarak boyamak ve göstermek için tercih edilen hücresel bir yöntemdir. Klinik pratikte mitokondriyal miyopatilerin histolojik tanısında bu organellerin yoğunluğunu tespit etmek kritik olduğundan bu boyama ön plana çıkar. Feulgen DNA'yı, pironin RNA'yı, gümüşleme ise retiküler ve sinir liflerini boyarken mitokondriler üzerinde bu spesifikliği sağlamazlar.

---

### ÇİFT 230 (Benzerlik: 0.76)

**Soru 1 (ID: a333c913-956b-49be-8e1e-ded5ed32d1cc)**
Soru Kökü: Hücre sitoplazmasında zarla çevrili olmayan kimyasal madde veya kristal birikintileri olan inklüzyonlar ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Lipid inklüzyonları hücre zarı gibi çift katmanlı bir zarla çevrilidir.
Açıklama: Lipid inklüzyonları zarsız inklüzyonların genel tanımından hafifçe saparak zar içerirler; ancak bu zar çift katmanlı (fosfolipid çift katmanı) değil, tek katmanlıdır. Glikojen, bilurubin, hemosiderin endojen; karbon ve karoten ise dışarıdan alınan ekzojen inklüzyonlardır. Çift katmanlı zar yapısı organellere (çekirdek, mitokondri) ait bir özelliktir.

**Soru 2 (ID: f287c7a4-9bea-4f9a-b18b-e7a5a2a52c43)**
Soru Kökü: Hücre içinde kimyasal madde veya kristal birikintisi şeklinde izlenen inklüzyonlar genel olarak zarla çevrili olmayan yapılar olarak tanımlanır. Aşağıdaki inklüzyon tiplerinden hangisi, bu genel kurala bir istisna oluşturarak tek katmanlı bir zar yapısına sahiptir?
Doğru Şık (B): Lipid
Açıklama: İnklüzyonlar, kural olarak sitoplazmada serbest halde bulunan ve zarla çevrili olmayan hücresel birikintilerdir. Ancak lipid inklüzyonları, tek katmanlı bir fosfolipid zar yapısına sahip olmalarıyla bu morfolojik kuralın tek istisnasını oluştururlar. Diğer şıklarda verilen glikojen, melanin ve lipofuscin gibi endojen inklüzyonların tamamı zarsız yapılar olarak hücre içinde yer alır.

---

### ÇİFT 231 (Benzerlik: 0.76)

**Soru 1 (ID: 38c58540-e447-4fa3-a67c-b08f004190cc)**
Soru Kökü: Hücre içi moleküler taşımacılık, bölünme mekiği oluşumu ve genel morfolojinin korunması hücre iskeleti (sitoskeleton) tarafından sağlanır. Sitoskeletonu oluşturan yapılar çaplarına göre sınıflandırıldığında, 25 nanometre (nm) dış çapı ile iskelet ağının en kalın (kalibreli) elemanı aşağıdakilerden hangisidir?
Doğru Şık (C): Mikrotübül
Açıklama: Hücre iskeletinin yapıtaşları çapa göre üçe ayrılır: Mikrotübüller en kalın olanlarıdır (25 nm). Ara filamanlar orta kalınlıktadır (10-15 nm). Mikrofilamanlar (aktin) ise en ince olanlarıdır (7 nm). Çekirdek iğ iplikleri ve sentrozom mikrotübüllerden oluşur.

**Soru 2 (ID: b464001e-4347-48f5-bd08-2a117f444d87)**
Soru Kökü: Doğrudan hücre zarı altında yoğun bir kortikal ağ kurarak fagositoz, mikrovillus hareketi ve klievaj oluğu (bölünme çentiği) oluşumu gibi membran dinamiklerini yöneten; 7 nanometre (nm) çapıyla en ince hücre iskeleti elemanı olan yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Aktin mikrofilamanları
Açıklama: Aktin (mikrofilaman), 7 nm çapı ile sitoskeletonun en ince yapısıdır. Özellikle hücre zarı hareketleri, fagositoz pseudopodları ve sitokinez sürecinde aktif rol alır. Nörofilamanlar birer ara filamandırlar (10 nm). Sentrozom mikrotübülleri ise daha kalın ve sert olan 25 nm'lik borusal iskelet birimleridir.

---

### ÇİFT 232 (Benzerlik: 0.76)

**Soru 1 (ID: 38c58540-e447-4fa3-a67c-b08f004190cc)**
Soru Kökü: Hücre içi moleküler taşımacılık, bölünme mekiği oluşumu ve genel morfolojinin korunması hücre iskeleti (sitoskeleton) tarafından sağlanır. Sitoskeletonu oluşturan yapılar çaplarına göre sınıflandırıldığında, 25 nanometre (nm) dış çapı ile iskelet ağının en kalın (kalibreli) elemanı aşağıdakilerden hangisidir?
Doğru Şık (C): Mikrotübül
Açıklama: Hücre iskeletinin yapıtaşları çapa göre üçe ayrılır: Mikrotübüller en kalın olanlarıdır (25 nm). Ara filamanlar orta kalınlıktadır (10-15 nm). Mikrofilamanlar (aktin) ise en ince olanlarıdır (7 nm). Çekirdek iğ iplikleri ve sentrozom mikrotübüllerden oluşur.

**Soru 2 (ID: ced7063b-9342-4ef7-98f1-bb935300744a)**
Soru Kökü: Doğrudan hücre zarı altında yoğun bir kortikal ağ kurarak fagositoz, mikrovillus hareketi ve klievaj oluğu (bölünme çentiği) oluşumu gibi membran dinamiklerini yöneten; 7 nanometre (nm) çapıyla en ince hücre iskeleti elemanı olan yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Aktin mikrofilamanları
Açıklama: Aktin (mikrofilaman), 7 nm çapı ile sitoskeletonun en ince yapısıdır. Özellikle hücre zarı hareketleri, fagositoz pseudopodları ve sitokinez sürecinde aktif rol alır. Nörofilamanlar birer ara filamandırlar (10 nm). Sentrozom mikrotübülleri ise daha kalın ve sert olan 25 nm'lik borusal iskelet birimleridir.

---

### ÇİFT 233 (Benzerlik: 0.76)

**Soru 1 (ID: 13e3bbb9-e840-440e-82f8-badc3a652868)**
Soru Kökü: Hücre içi moleküler taşımacılık, bölünme mekiği oluşumu ve genel morfolojinin korunması hücre iskeleti (sitoskeleton) tarafından sağlanır. Sitoskeletonu oluşturan yapılar çaplarına göre sınıflandırıldığında, 25 nanometre (nm) dış çapı ile iskelet ağının en kalın (kalibreli) elemanı aşağıdakilerden hangisidir?
Doğru Şık (C): Mikrotübül
Açıklama: Hücre iskeletinin yapıtaşları çapa göre üçe ayrılır: Mikrotübüller en kalın olanlarıdır (25 nm). Ara filamanlar orta kalınlıktadır (10-15 nm). Mikrofilamanlar (aktin) ise en ince olanlarıdır (7 nm). Çekirdek iğ iplikleri ve sentrozom mikrotübüllerden oluşur.

**Soru 2 (ID: b464001e-4347-48f5-bd08-2a117f444d87)**
Soru Kökü: Doğrudan hücre zarı altında yoğun bir kortikal ağ kurarak fagositoz, mikrovillus hareketi ve klievaj oluğu (bölünme çentiği) oluşumu gibi membran dinamiklerini yöneten; 7 nanometre (nm) çapıyla en ince hücre iskeleti elemanı olan yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Aktin mikrofilamanları
Açıklama: Aktin (mikrofilaman), 7 nm çapı ile sitoskeletonun en ince yapısıdır. Özellikle hücre zarı hareketleri, fagositoz pseudopodları ve sitokinez sürecinde aktif rol alır. Nörofilamanlar birer ara filamandırlar (10 nm). Sentrozom mikrotübülleri ise daha kalın ve sert olan 25 nm'lik borusal iskelet birimleridir.

---

### ÇİFT 234 (Benzerlik: 0.76)

**Soru 1 (ID: 13e3bbb9-e840-440e-82f8-badc3a652868)**
Soru Kökü: Hücre içi moleküler taşımacılık, bölünme mekiği oluşumu ve genel morfolojinin korunması hücre iskeleti (sitoskeleton) tarafından sağlanır. Sitoskeletonu oluşturan yapılar çaplarına göre sınıflandırıldığında, 25 nanometre (nm) dış çapı ile iskelet ağının en kalın (kalibreli) elemanı aşağıdakilerden hangisidir?
Doğru Şık (C): Mikrotübül
Açıklama: Hücre iskeletinin yapıtaşları çapa göre üçe ayrılır: Mikrotübüller en kalın olanlarıdır (25 nm). Ara filamanlar orta kalınlıktadır (10-15 nm). Mikrofilamanlar (aktin) ise en ince olanlarıdır (7 nm). Çekirdek iğ iplikleri ve sentrozom mikrotübüllerden oluşur.

**Soru 2 (ID: ced7063b-9342-4ef7-98f1-bb935300744a)**
Soru Kökü: Doğrudan hücre zarı altında yoğun bir kortikal ağ kurarak fagositoz, mikrovillus hareketi ve klievaj oluğu (bölünme çentiği) oluşumu gibi membran dinamiklerini yöneten; 7 nanometre (nm) çapıyla en ince hücre iskeleti elemanı olan yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Aktin mikrofilamanları
Açıklama: Aktin (mikrofilaman), 7 nm çapı ile sitoskeletonun en ince yapısıdır. Özellikle hücre zarı hareketleri, fagositoz pseudopodları ve sitokinez sürecinde aktif rol alır. Nörofilamanlar birer ara filamandırlar (10 nm). Sentrozom mikrotübülleri ise daha kalın ve sert olan 25 nm'lik borusal iskelet birimleridir.

---

### ÇİFT 235 (Benzerlik: 0.76)

**Soru 1 (ID: c4267e06-9784-4601-bc1e-b653f869ad23)**
Soru Kökü: Bir patoloji laboratuvarında hücresel hasar paterni incelenen bir dokuda hem nekrotik hem de apoptotik hücreler izlenmektedir. Mikroskobik inceleme sırasında aşağıdakilerden hangisinin görülmesi, hücrenin apopitoza uğradığını gösteren spesifik bir özellik **değildir**?
Doğru Şık (E): Hücre zarı bütünlüğünün bozularak intraselüler proteinlerin sızması
Açıklama: Hücre zarı bütünlüğünün bozulması (hasarlanması) ve sitoplazmik içeriğin doku aralığına sızarak inflamasyon başlatması sadece nekrozun özelliğidir. Apopitozda hücre zarının bütünlüğü korunur, membran dışa doğru tomurcuklanır (blebbing) ve fosfotidil serin eksternalizasyonuyla fagositoza zemin hazırlar. Çekirdek fragmantasyonu ve kromatin agregasyonu apoptozun ayırıcı klasik bulgularıdır.

**Soru 2 (ID: f44805eb-b342-4336-b248-9cfb7aa420b8)**
Soru Kökü: Programlı hücre ölümü olan apopitoz ile patolojik hücre ölümü olan nekroz arasında net morfolojik ve mekanistik farklılıklar vardır. Aşağıdaki hücresel olaylardan hangisi apopitoz sürecinde **beklenmez**?
Doğru Şık (B): Hücre şişmesi
Açıklama: Hücre şişmesi (swelling) membranın iyon pompası iflasına bağlı olarak nekrozda görülen patognomonik bir bulgudur. Apopitozda ise tam tersi hücre büzüşür, çekirdek fragmante olur, kromatin agregasyona uğrar ve zar tomurcuklanarak apoptotik cisimciklere ayrılır. Şişme ve lizis sadece nekroza aittir.

---

### ÇİFT 236 (Benzerlik: 0.75)

**Soru 1 (ID: d60442b2-fae9-42dc-ba0c-7249d9b194fc)**
Soru Kökü: Hücre ölüm yolağı incelenen bir doku kültüründe, kaskatı başlatan uyaranın hücre dışından gelen FasL ve TRAIL molekülleri olduğu belirlenmiştir. Bu durum hücre membranında öncelikle aşağıdaki bölgelerden hangisinin aktivasyonuna yol açar?
Doğru Şık (E): Ölüm bölgesi (death domain)
Açıklama: Apopitozun ekstrensek (hücre dışı) yolağı; FasL, TNF ve TRAIL gibi sinyal moleküllerinin hücre zarına bağlanmasıyla tetiklenir. Bu bağlanma, reseptörün sitoplazmik ucundaki ölüm bölgesi (death domain) adı verilen özel yapıların aktivasyonunu sağlar ve apoptoz kaskadını başlatır.

**Soru 2 (ID: f9fb74b6-826a-4feb-9a3c-626e87abe3f2)**
Soru Kökü: Hücre dışından gelen FasL ve TNF gibi uyarılarla apopitozisin ekstrensek yolağı aktive olmaktadır. Bu kaskadın tetiklenmesi için hücre zarında bu sinyalleri algılayarak yolağı başlatan özel reseptör bölgesi aşağıdakilerden hangisidir?
Doğru Şık (B): Ölüm bölgesi (Death domain)
Açıklama: Ekstrensek uyarılar (FasL, TNF), hücre zarında ölüm bölgesi (death domain) adı verilen özel bölgelerin aktivasyonu ile apopitozis kaskatını başlatırlar. Fokal adezyon plakları hücreyi matrikse bağlar, ölüm sinyali taşımazlar. Bu yapısal ayrım, apopitozun yüzeyden sitoplazmaya nasıl iletildiğinin anlaşılması açısından kritiktir.

---

### ÇİFT 237 (Benzerlik: 0.75)

**Soru 1 (ID: f9a7fd4c-f0da-49c9-a259-204d654ab37d)**
Soru Kökü: Apopitoz kaskatı hücre içi veya hücre dışı sinyallerle aktive edilebilir. Hücre zarı üzerinde bulunan ve ölüm bölgesi (death domain) olarak adlandırılan özel reseptör bölgelerinin uyarılmasıyla başlayan kaskat mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Ekstrensek yolak
Açıklama: FasL, TNF veya TRAIL gibi hücre dışından gelen sinyallerin zar yüzeyindeki ölüm reseptörlerine (death domain) bağlanarak başlattığı apopitoz mekanizması ekstrensek yolak olarak adlandırılır. Buna karşın mitokondri veya endoplazmik retikulum kaynaklı hücre içi stres uyarıları, intrensek (mitokondriyal) yolağı tetikler. Her iki yolak da nihayetinde kaspazları aktive ederek hücre ölümünü gerçekleştirir.

**Soru 2 (ID: a4506f08-60a9-477b-ba91-cc57861d869a)**
Soru Kökü: FasL, TNF veya TRAIL gibi hücre dışı sinyal moleküllerinin hedef hücrenin zarına bağlanması ile tetiklenen spesifik programlı ölüm kaskadı aşağıdakilerden hangisidir?
Doğru Şık (B): Ekstrensek apopitoz yolağı
Açıklama: Ekstrensek apopitoz yolağı, hücre dışından gelen FasL, TNF ve TRAIL gibi ölüm ligandlarının hücre zarındaki spesifik reseptörlere bağlanmasıyla başlar. İntrensek yolak ise hücre dışı sinyallerle değil, hücre içi stres faktörlerinin aktive ettiği protein kaskatlarıyla tetiklenir. Her iki yolak programlı hücre ölümüne ulaşsa da ilk uyaranın hücresel lokalizasyonu bu iki yolağı birbirinden ayırır.

---

### ÇİFT 238 (Benzerlik: 0.75)

**Soru 1 (ID: 0802b8da-48cd-4d33-882b-d3ef944d42d6)**
Soru Kökü: Rutin histolojik boyama işlemlerinde, kan damarları içerisindeki eritrositlerin karakteristik olarak asidofilik (kırmızı/pembe) boyanmasını sağlayan asit yapılı kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Eosin
Açıklama: Eritrositler sitoplazmalarında yoğun miktarda hemoglobin proteini barındırdıkları için katyonik özellikleri yüksektir ve asidik boyalara güçlü bağlanırlar. Net negatif yüklü olan eosin boyası bu hücreleri belirgin bir kırmızı-pembe renge boyayarak damar içi elementlerin tespitini kolaylaştırır. Hematoksilin ve toluidin mavisi bazik karakterde olduklarından asidofilik eritrosit sitoplazmasını boyayamazlar.

**Soru 2 (ID: a2e659d0-8e92-498d-8e2f-87a997d7f314)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 239 (Benzerlik: 0.75)

**Soru 1 (ID: 0802b8da-48cd-4d33-882b-d3ef944d42d6)**
Soru Kökü: Rutin histolojik boyama işlemlerinde, kan damarları içerisindeki eritrositlerin karakteristik olarak asidofilik (kırmızı/pembe) boyanmasını sağlayan asit yapılı kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Eosin
Açıklama: Eritrositler sitoplazmalarında yoğun miktarda hemoglobin proteini barındırdıkları için katyonik özellikleri yüksektir ve asidik boyalara güçlü bağlanırlar. Net negatif yüklü olan eosin boyası bu hücreleri belirgin bir kırmızı-pembe renge boyayarak damar içi elementlerin tespitini kolaylaştırır. Hematoksilin ve toluidin mavisi bazik karakterde olduklarından asidofilik eritrosit sitoplazmasını boyayamazlar.

**Soru 2 (ID: 0cc91060-fd56-43f5-bc5e-4393aaae6de6)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 240 (Benzerlik: 0.75)

**Soru 1 (ID: a2e659d0-8e92-498d-8e2f-87a997d7f314)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

**Soru 2 (ID: d15d83f8-33c7-4278-ae39-2a362b92531c)**
Soru Kökü: Rutin histolojik boyama işlemlerinde, kan damarları içerisindeki eritrositlerin karakteristik olarak asidofilik (kırmızı/pembe) boyanmasını sağlayan asit yapılı kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Eosin
Açıklama: Eritrositler sitoplazmalarında yoğun miktarda hemoglobin proteini barındırdıkları için katyonik özellikleri yüksektir ve asidik boyalara güçlü bağlanırlar. Net negatif yüklü olan eosin boyası bu hücreleri belirgin bir kırmızı-pembe renge boyayarak damar içi elementlerin tespitini kolaylaştırır. Hematoksilin ve toluidin mavisi bazik karakterde olduklarından asidofilik eritrosit sitoplazmasını boyayamazlar.

---

### ÇİFT 241 (Benzerlik: 0.75)

**Soru 1 (ID: d15d83f8-33c7-4278-ae39-2a362b92531c)**
Soru Kökü: Rutin histolojik boyama işlemlerinde, kan damarları içerisindeki eritrositlerin karakteristik olarak asidofilik (kırmızı/pembe) boyanmasını sağlayan asit yapılı kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Eosin
Açıklama: Eritrositler sitoplazmalarında yoğun miktarda hemoglobin proteini barındırdıkları için katyonik özellikleri yüksektir ve asidik boyalara güçlü bağlanırlar. Net negatif yüklü olan eosin boyası bu hücreleri belirgin bir kırmızı-pembe renge boyayarak damar içi elementlerin tespitini kolaylaştırır. Hematoksilin ve toluidin mavisi bazik karakterde olduklarından asidofilik eritrosit sitoplazmasını boyayamazlar.

**Soru 2 (ID: 0cc91060-fd56-43f5-bc5e-4393aaae6de6)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 242 (Benzerlik: 0.75)

**Soru 1 (ID: e7a91dc3-a304-440e-9080-c0e1118c981b)**
Soru Kökü: Epidermis tabakasındaki hücrelerin birbirlerine sıkıca tutunmasını sağlayan makula adherens (desmozom) bağlantısının sitoplazmik yüzünde belirgin plak yapıları izlenir. Aşağıdakilerden hangisi bu plak yapısında yer alarak stabiliteyi sağlayan proteinlerden biri **değildir**?
Doğru Şık (D): Vinculin
Açıklama: Desmozomun intraselüler plak yapısını oluşturan proteinler desmoplakin, plakoglobin ve plakofilindir. Vinculin ise zonula adherens ve fokal adezyon plaklarında aktin bağlayıcı bir protein olarak görev alır, desmozomun yapısında bulunmaz. Bu ayrım hücre mekanotransdüksiyonu açısından temeldir.

**Soru 2 (ID: 38192366-3d60-4107-b824-09cf3d6e1306)**
Soru Kökü: Komşu iki epitel hücresinin lateral yüzeylerini birbirine asimetrik olmayan, nokta tarzı simetrik bir yapıyla bağlayan ve hücre içinde ara filamanlarla doğrudan ilişkili olan bağlantı birimi incelenmektedir. Bu bağlantı biriminin hücre içi asıl destekleyici yapısını oluşturan plak kompleksinde aşağıdaki proteinlerden hangisi bulunur?
Doğru Şık (B): Plakoglobin
Açıklama: Makula adherens (nokta desmozom), hücre içindeki ara filamanlara bağlanan simetrik bir hücre-hücre bağlantısıdır ve yapısında desmoplakin, plakoglobin ve plakofilin gibi spesifik plak proteinleri bulunur. Talin fokal adezyonlarda, villin ise mikrovillus yapısında aktinle ilişki kuran proteinlerdir. Plakoglobin, desmozomların yapısal bütünlüğünü sağlayan temel çapa proteinlerinden biridir.

---

### ÇİFT 243 (Benzerlik: 0.75)

**Soru 1 (ID: d60442b2-fae9-42dc-ba0c-7249d9b194fc)**
Soru Kökü: Hücre ölüm yolağı incelenen bir doku kültüründe, kaskatı başlatan uyaranın hücre dışından gelen FasL ve TRAIL molekülleri olduğu belirlenmiştir. Bu durum hücre membranında öncelikle aşağıdaki bölgelerden hangisinin aktivasyonuna yol açar?
Doğru Şık (E): Ölüm bölgesi (death domain)
Açıklama: Apopitozun ekstrensek (hücre dışı) yolağı; FasL, TNF ve TRAIL gibi sinyal moleküllerinin hücre zarına bağlanmasıyla tetiklenir. Bu bağlanma, reseptörün sitoplazmik ucundaki ölüm bölgesi (death domain) adı verilen özel yapıların aktivasyonunu sağlar ve apoptoz kaskadını başlatır.

**Soru 2 (ID: a4506f08-60a9-477b-ba91-cc57861d869a)**
Soru Kökü: FasL, TNF veya TRAIL gibi hücre dışı sinyal moleküllerinin hedef hücrenin zarına bağlanması ile tetiklenen spesifik programlı ölüm kaskadı aşağıdakilerden hangisidir?
Doğru Şık (B): Ekstrensek apopitoz yolağı
Açıklama: Ekstrensek apopitoz yolağı, hücre dışından gelen FasL, TNF ve TRAIL gibi ölüm ligandlarının hücre zarındaki spesifik reseptörlere bağlanmasıyla başlar. İntrensek yolak ise hücre dışı sinyallerle değil, hücre içi stres faktörlerinin aktive ettiği protein kaskatlarıyla tetiklenir. Her iki yolak programlı hücre ölümüne ulaşsa da ilk uyaranın hücresel lokalizasyonu bu iki yolağı birbirinden ayırır.

---

### ÇİFT 244 (Benzerlik: 0.75)

**Soru 1 (ID: b0389334-9170-4f80-9964-b5f93f9145ed)**
Soru Kökü: Eosin boyasının histolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Nükleik asitlere bağlanarak çekirdeği spesifik olarak boyar.
Açıklama: Eosin net negatif yüklü asit yapılı bir boyadır ve hücre sitoplazması, kollajen gibi katyonik (pozitif yüklü) bölgeleri kırmızı renge boyar. Nükleik asitler ise yapıalarındaki fosfat grupları nedeniyle anyonik karaktere sahiptir ve bazik boyalar (hematoksilin) tarafından boyanırlar. Eosinin çekirdeği boyaması mekanik olarak mümkün olmadığından, bu özellik hücresel afinite prensipleriyle çelişir.

**Soru 2 (ID: a2e659d0-8e92-498d-8e2f-87a997d7f314)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 245 (Benzerlik: 0.75)

**Soru 1 (ID: b0389334-9170-4f80-9964-b5f93f9145ed)**
Soru Kökü: Eosin boyasının histolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Nükleik asitlere bağlanarak çekirdeği spesifik olarak boyar.
Açıklama: Eosin net negatif yüklü asit yapılı bir boyadır ve hücre sitoplazması, kollajen gibi katyonik (pozitif yüklü) bölgeleri kırmızı renge boyar. Nükleik asitler ise yapıalarındaki fosfat grupları nedeniyle anyonik karaktere sahiptir ve bazik boyalar (hematoksilin) tarafından boyanırlar. Eosinin çekirdeği boyaması mekanik olarak mümkün olmadığından, bu özellik hücresel afinite prensipleriyle çelişir.

**Soru 2 (ID: 0cc91060-fd56-43f5-bc5e-4393aaae6de6)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 246 (Benzerlik: 0.75)

**Soru 1 (ID: d50c764d-b0fc-44f5-8216-def551dc9d1f)**
Soru Kökü: Eosin boyasının histolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Nükleik asitlere bağlanarak çekirdeği spesifik olarak boyar.
Açıklama: Eosin net negatif yüklü asit yapılı bir boyadır ve hücre sitoplazması, kollajen gibi katyonik (pozitif yüklü) bölgeleri kırmızı renge boyar. Nükleik asitler ise yapıalarındaki fosfat grupları nedeniyle anyonik karaktere sahiptir ve bazik boyalar (hematoksilin) tarafından boyanırlar. Eosinin çekirdeği boyaması mekanik olarak mümkün olmadığından, bu özellik hücresel afinite prensipleriyle çelişir.

**Soru 2 (ID: a2e659d0-8e92-498d-8e2f-87a997d7f314)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 247 (Benzerlik: 0.75)

**Soru 1 (ID: d50c764d-b0fc-44f5-8216-def551dc9d1f)**
Soru Kökü: Eosin boyasının histolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Nükleik asitlere bağlanarak çekirdeği spesifik olarak boyar.
Açıklama: Eosin net negatif yüklü asit yapılı bir boyadır ve hücre sitoplazması, kollajen gibi katyonik (pozitif yüklü) bölgeleri kırmızı renge boyar. Nükleik asitler ise yapıalarındaki fosfat grupları nedeniyle anyonik karaktere sahiptir ve bazik boyalar (hematoksilin) tarafından boyanırlar. Eosinin çekirdeği boyaması mekanik olarak mümkün olmadığından, bu özellik hücresel afinite prensipleriyle çelişir.

**Soru 2 (ID: 0cc91060-fd56-43f5-bc5e-4393aaae6de6)**
Soru Kökü: Rutin histolojik preparatlarda asidik boyalarla etkileşime giren yapılar incelenirken, aşağıdakilerden hangisi eosin boyası ile asidofilik boyanma özelliği **göstermez**?
Doğru Şık (C): Ribozomlar
Açıklama: Eosin net negatif yüklü asit bir boyadır ve dokularda pozitif yüklü (katyonik) bölgeler olan eritrositler, elastik, retiküler ve kollajen teller ile reaksiyona girer. Ribozomlar ise yapılarındaki yüksek rRNA içeriği nedeniyle anyoniktir ve bazofilik boyanma göstererek hematoksilin ile etkileşirler. Dolayısıyla ribozomların eosin ile asidofilik boyanması beklenemez.

---

### ÇİFT 248 (Benzerlik: 0.75)

**Soru 1 (ID: 9c28e01f-7356-4d93-8186-3ad7aa47be4e)**
Soru Kökü: 28 yaşında erkek hasta, infertilite şikayetiyle kliniğe başvuruyor. Yapılan sperm analizinde spermatozoaların kuyruk hareketlerinin kaybolduğu saptanıyor. Aynı hastanın çocukluğundan beri tekrarlayan solunum yolu enfeksiyonları öyküsü mevcuttur. Bu hastadaki patolojinin birincil nedeni olan ve yapısında 13 protofilaman barındıran hücre iskeleti elemanı aşağıdakilerden hangisidir?
Doğru Şık (A): Mikrotübüller (MT)
Açıklama: Mikrotübüller, sperm kuyruğu (flagellum) ve solunum yolu silyalarının aksonem düzenini oluşturan, 25 nm kalınlığında ve 13 protofilamandan oluşan tübüler yapılardır. İşlev kaybı (örneğin dynein kolu defektleri) durumunda silier hareket bozulur, solunum yolu enfeksiyonları ve infertilite tablosu ortaya çıkar. Vimentin, desmin ve lamin ara filaman grubunda yer alıp silier yapıda veya hareket fonksiyonunda birincil görev almazlar.

**Soru 2 (ID: 2ad54d31-8869-429c-add1-42f77cf40bb6)**
Soru Kökü: 28 yaşında erkek hasta, çocukluk çağından beri süren tekrarlayan solunum yolu enfeksiyonları ve 3 yıldır devam eden infertilite şikayetiyle kliniğe başvuruyor. Yapılan tetkiklerde solunum yollarında mukosiliyer klirensin durduğu ve spermlerin kuyruk hareketinin olmadığı saptanıyor. Hastada saptanan bu sendromun patogenezinde, mikrotübül çiftlerinin birbirleri üzerinden kaymasını sağlayan aşağıdaki proteinlerden hangisinin eksikliği rol oynar?
Doğru Şık (B): Dynein
Açıklama: Klinik senaryoda tanımlanan tablo, silyaların ve sperm kuyruğunun (flagellum) temel hareket motoru olan aksonemal dynein kollarının konjenital yokluğu ile karakterize Kartagener sendromudur. Nexin çevresel mikrotübül çiftlerini sadece birbirine bağlayan elastik bir proteindir ve atım kuvveti üretemez. Dynein ATPaz eksikliği siliyer atımı durdurarak solunum problemlerine ve sperm motilitesini engelleyerek infertiliteye neden olur. Aksonem motor defektlerinin en prototipik hücresel mekanizması bu protein eksikliği ile açıklanır.

---

### ÇİFT 249 (Benzerlik: 0.75)

**Soru 1 (ID: 68dbe4cf-2589-4cd3-81ae-f75b47afb62f)**
Soru Kökü: Hücre iskeletinin en kalın elemanı olan mikrotübüllerin polimerizasyon dinamikleri incelendiğinde, 'dinamik instabilite' olarak adlandırılan sürekli yapım ve yıkım süreci görülür. Yapım ve yıkımın daha az izlendiği ve mikrotübüllerin köken aldığı eksi (-) uç, aşağıdakilerden hangisinden zengindir?
Doğru Şık (C): Gama-tubulin
Açıklama: Mikrotübüllerin hücre içinde köken aldığı eksi uç, sentrozom gibi mikrotübül organize edici merkezlerde bulunur ve gama tubulin proteininden zengindir. Polimerizasyon ve depolimerizasyonun yoğun yaşandığı artı uç alfa ve beta tubulin içerirken eksi uç gama tubulin halkası ile stabilitesini korur. Seçeneklerdeki kinezin bir motor protein olup mikrotübül iskeleti kökeninde yer almaz. Gama tubulin varlığı, mikrotübül organize edici merkezlerin (MTOC) histolojik en önemli ayırt edici markerıdır.

**Soru 2 (ID: 24475f97-31db-471d-87dd-2b23dbde215c)**
Soru Kökü: Mikrotübüllerin yapım ve yıkımının az izlendiği, aynı zamanda sitoplazmada köken aldıkları bölge olarak kabul edilen eksi (-) uçta yoğun olarak bulunan yapı taşı aşağıdakilerden hangisidir?
Doğru Şık (A): Gama tubulin
Açıklama: Mikrotübüllerin dinamik instabilite modelinde eksi (-) uç, yapım ve yıkımın az izlendiği stabil bölgedir ve gama tubulinden zengindir. Beta tubulin ise polimerizasyonun aktif olarak sürdüğü serbest artı (+) uçta yoğunlaşır. Gama tubulin kompleksi mikrotübülün hücre içinde doğru yönlenmesi için bir kalıp görevi görür.

---

