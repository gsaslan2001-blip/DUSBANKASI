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

**Soru 1 (ID: 17105352-1c6b-4e87-80ea-1c15b42e3cbb)**
Soru Kökü: Genç erişkinlik ve adolesan döneminin sık görülen hematopoetik malignitesi Hodgkin Lenfoma, metastatik paterni açısından Non-Hodgkin Lenfomalardan belirgin morfolojik farklar içerir. Buna göre aşağıdakilerden hangisi Hodgkin Lenfomanın (HL) patolojik özelliklerinden **değildir**?
Doğru Şık (B): Waldeyer halkası ve mezenterik abdominal lenf nodlarının hastalıkta sıklıkla tutulması
Açıklama: Hodgkin Lenfomada Waldeyer lenfatik halkası ve bağırsak çevresi (mezenterik) lenf nodu istasyonu tutulumu nadirdir; bu anatomik bölgelerin yoğun olarak atlanarak tutulması patolojik olarak Non-Hodgkin Lenfoma tanısının kuvvetli bir karakteristik bulgusudur (güçlü çeldirici ayrım). Diğer bütün şıklar Hodgkin Lenfomanın klasik tek yönlü, komşuluk bazlı sentripetal yayılım paternini kanıtlayan mutlak kurallardır. Bu farklı yayılış tarzı nedeniyle iki lenfomanın kemoterapiye verdiği lenfoproliferatif yanıt birbirinden ayrı yönetsel aşamalara sahiptir.

**Soru 2 (ID: 8b374165-bf41-4408-9f8c-d158b4fdf8b0)**
Soru Kökü: Hodgkin lenfomanın klinik seyri ve metastatik yayılım paterniyle ilgili aşağıdaki ifadelerden hangisi doğru değildir?
Doğru Şık (E): Erken dönemde Waldeyer halkası ve mezenterik lenf nodu tutulumu yapma eğilimindedir.
Açıklama: Hodgkin lenfoma anatomik komşuluk izleyerek düzenli bir yayılım gösterir ve Waldeyer halkası ile mezenterik lenf nodlarını tutma eğilimi göstermez. Waldeyer halkası ve mezenterik tutulum, lenfatik zinciri atlayarak yayılma özelliğiyle bilinen Non-Hodgkin Lenfomalara (NHL) özgü bir klinik davranıştır. Diğer şıklar Hodgkin lenfomanın aksiyel yerleşimini, reaktif hücre hakimiyetini ve B-hücre belirteç kaybını doğru tanımlar.

---

### ÇİFT 2 (Benzerlik: 0.79)

**Soru 1 (ID: 66740477-d270-4ace-a8ad-6ed64f0317ab)**
Soru Kökü: Altmış sekiz yaşında kadın hasta, son bir aydır aşırı halsizlik ve diş etlerinde spontan kanamayla seyreden masif şişlik şikayetiyle başvuruyor. Hastanın klinik muayenesinde diş etlerinin neredeyse diş kuronlarını örtecek kadar hipertrofik olduğu izleniyor. Yapılan hemogramda ciddi trombositopeni ve anemi tespit ediliyor. Kemik iliği biyopsisinde peroksidaz-pozitif, iğne şeklinde inklüzyonlar içeren hücreler normal iliğin %45'ini kaplamaktadır. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Akut Miyeloid Lösemi (M5 varyantı)
Açıklama: İleri yaş (>60), kemik iliği yetmezliği (trombositopeni/anemi), kemik iliğinde >%20 blast ve peroksidaz pozitif iğne şekilli Auer çubukları doğrudan Akut Miyeloid Lösemi (AML) tanısına götürür. AML'nin M5 (monositik) farklılaşma gösteren alt tipi, gingivada spesifik olarak masif lösemik infiltrasyona (hipertrofi) neden olur. Multipl Miyelom çenede yumuşak doku değil, zımba deliği tarzı litik kemik destrüksiyonu yaparak klinik ayrım yaratır.

**Soru 2 (ID: 6e90b75f-9ced-445e-9032-20a107e9bd1f)**
Soru Kökü: Yetmiş yaşında erkek hasta halsizlik, tekrarlayan pnömoni atakları ve diş etlerinde şişlik, ülserasyon (gingival infiltrasyon) şikayetleriyle geliyor. Periferik kanda ve kemik iliğinde %25 oranında azurofilik granüller içeren granülsüz atipik blastların olduğu görülüyor. Yumuşak dokuyu ve diş etini lokal olarak infiltre eden bu hematolojik tümörün tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Akut miyeloid lösemi monositik diferansiyasyonu (M5)
Açıklama: Akut Miyeloid Lösemi (AML) hücreleri, özellikle lösemik monositik seriye doğru (M5 formu) farklılaşma gösterdiğinde klasik ilik iflası semptomlarına (anemi, enfeksiyon) ek olarak deri ve diş eti dokusuna infiltre olup hipertrofi (lösemi kutis/gingiviti) yaparlar. Aynı anatomik bölgede destrüksiyon yaratan NK/T kökenli Midline granülom güçlü bir çeldiricidir ancak periferik kanda lenfoblastik fırtına değil damar duvarına odaklı (anjiyosentrik) doku nekrozu yapar. Miyeloid soyun granül matürasyonu ve spesifik doku tropizmi teşhiste ayırt edici kuraldır.

---

### ÇİFT 3 (Benzerlik: 0.79)

**Soru 1 (ID: 24b7e600-e1f8-416d-b19d-81c74eca8d71)**
Soru Kökü: Aşağıdakilerden hangisi Burkitt lenfomanın malignitelerden ayırt edilmesinde patognomonik bir bulgu **değildir**?
Doğru Şık (B): Eritrositlerde izlenen rulo (rouleaux) dizilim formasyonu
Açıklama: Eritrositlerin rulo (rouleaux) formasyonu yapması Burkitt lenfomada değil, Multipl Myelom tablosunda anormal M proteininin kanın viskozitesini bozması sonucu ortaya çıkar. Burkitt lenfoma için MYC disregülasyonu, yıldızlı gökyüzü paterni, matür B hücre kaset belirteçleri (CD19/20) ve yüksek mitotik indeks tüm varyantların ortak ve sarsılmaz bulgularıdır. Format 'değildir' köküyle iki büyük patolojinin belirteçlerini çaprazlar.

**Soru 2 (ID: c0f2efbf-58f4-47e1-8251-810e1ecf741e)**
Soru Kökü: En hızlı büyüyen insan tümörü olan Burkitt lenfomanın histopatolojik ve immünolojik profilini inceleyen bir patoloğun, tümör biyopsisinde aşağıdaki belirteçlerden hangisini bulması **beklenmez**?
Doğru Şık (A): Apoptozu durduran BCL-2 molekülünün aşırı pozitifliği
Açıklama: Burkitt lenfoma matür germinal merkez B lenfositlerinden köken alsa da, diğer foliküler lenfomaların aksine hücresel ölümü bloke eden BCL-2 proteinini eksprese etmez ve bu sayede tümör içinde muazzam bir apoptoz ve nükleer yıkım izlenir. En güçlü çeldirici olan BCL-6 gen ekspresyonu ise lenfomanın matür merkez B hücresi (germinal zon) karakterinde olduğunu teyit eder ve pozitiftir. İlikte BCL-2'nin negatifliği ve MYC üzerinden hücresel delilik düzeyinde bölünme yıldızlı gökyüzü paterninin kök sebebidir.

---

### ÇİFT 4 (Benzerlik: 0.78)

**Soru 1 (ID: 3c79f879-3985-4de4-927a-9c02d3814113)**
Soru Kökü: On beş yaşında erkek hasta, diş etlerinde (gingiva) yaygın şişlik, kanama ve hipertrofi şikayetiyle başvuruyor. Çene radyografisinde litik bir kemik kitlesi izlenmezken, periferik kan yaymasında immatür blast hücreleri saptanıyor. Ağız içi kitle yapan bu agresif hematopoietik tablonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Akut miyeloid lösemi (M5 varyantı)
Açıklama: Oral kavitede spesifik olarak 'diş etini' (gingivayı) infiltre ederek büyüten ve periferik kanda blast tablosuyla (ilik tutulumu) karakterize olan patoloji Akut Miyeloid Lösemi'nin M5 (monositik) varyantıdır. Kuvvetli çeldirici olan Burkitt lenfoma ise yumuşak dokudan ziyade mandibulada (kemik içi) devasa litik lokal kitle yapar ve kemik iliği tutulumu son derece nadirdir. DUS sınav formatı, oral lezyon yapan iki hematopoietik maligniteyi gingiva vs kemik ayrımı üzerinden netleştirir.

**Soru 2 (ID: 6e90b75f-9ced-445e-9032-20a107e9bd1f)**
Soru Kökü: Yetmiş yaşında erkek hasta halsizlik, tekrarlayan pnömoni atakları ve diş etlerinde şişlik, ülserasyon (gingival infiltrasyon) şikayetleriyle geliyor. Periferik kanda ve kemik iliğinde %25 oranında azurofilik granüller içeren granülsüz atipik blastların olduğu görülüyor. Yumuşak dokuyu ve diş etini lokal olarak infiltre eden bu hematolojik tümörün tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Akut miyeloid lösemi monositik diferansiyasyonu (M5)
Açıklama: Akut Miyeloid Lösemi (AML) hücreleri, özellikle lösemik monositik seriye doğru (M5 formu) farklılaşma gösterdiğinde klasik ilik iflası semptomlarına (anemi, enfeksiyon) ek olarak deri ve diş eti dokusuna infiltre olup hipertrofi (lösemi kutis/gingiviti) yaparlar. Aynı anatomik bölgede destrüksiyon yaratan NK/T kökenli Midline granülom güçlü bir çeldiricidir ancak periferik kanda lenfoblastik fırtına değil damar duvarına odaklı (anjiyosentrik) doku nekrozu yapar. Miyeloid soyun granül matürasyonu ve spesifik doku tropizmi teşhiste ayırt edici kuraldır.

---

### ÇİFT 5 (Benzerlik: 0.78)

**Soru 1 (ID: 6efd1b3e-c794-4d40-83cf-64e3782a9f21)**
Soru Kökü: Kronik osteomiyelit vakalarında görülen 'Kortekste etrafında reaktif kemik dokusu bulunan ve kronik inflamasyon olmasına rağmen nötrofil açısından zengin abse' tablosuna ne ad verilir?
A) Sekestrum
B) İnvolukrum
C) Brodie absesi
D) Garre'nin sklerozan osteomyeliti
E) Spina ventoza
Doğru Şık (C): Brodie absesi
Açıklama: Brodie absesi, hematojen osteomyelitin lokalize subakut formudur; kortekste yoğun reaktif kemik dokusuyla çevrili, nötrofil bakımından zengin merkezi bir kavite şeklinde izlenir. Sekestrum nekrotik kemik parçasıdır; involukrum ise seküstrum etrafında oluşan yeni reaktif kemik kabuğudur. Garre'nin sklerozan osteomyeliti ise çenede görülen ve abse olmaksızın diffüz korteks kalınlaşması ile seyreden kronik formdur. Spina ventoza tüberküloz kaynaklı parmak tutulumuna verilen isimdir.

**Soru 2 (ID: d5422a9b-5872-405b-b6fa-d36ce95569a1)**
Soru Kökü: Tüberküloz osteomyelitinin klinik tipleri ve spesifik lokalizasyonları ile ilgili olarak; el parmaklarını lokalize olarak tutan ve destrüktif litik lezyonlar yaratan duruma verilen isim aşağıdakilerden hangisidir?
A) Pott absesi
B) Spina ventoza
C) Brodie absesi
D) Garre sklerozu
E) Mazabraud nodülü
Doğru Şık (B): Spina ventoza
Açıklama: Spina ventoza (spina = diken, ventoza = şişirilmiş/baloncuklu), küçük tübüler kemiklerin (özellikle parmak falanksleri) tüberküloz tutulumunun adıdır; destrüktif litik lezyonlar periosteal yeni kemik yapımıyla birlikte 'fusiform/balonvari' şişme görüntüsü yaratır. Pott hastalığı ise vertebral tüberkülozun (özellikle alt torasik/lomber) adıdır ve paravertebral 'soğuk abse' ile vertebral kollaps — kifoz — ile karakterizedir. Brodie absesi piyojenik, Garre sklerozu piyojenik çene osteomyelitiyle ilgilidir. Mazabraud fibröz displazi ile ilişkili bir sendromdur.

---

### ÇİFT 6 (Benzerlik: 0.76)

**Soru 1 (ID: 87ec545d-2969-4886-a4c4-1b9b84f6e6bf)**
Soru Kökü: Histopatolojik incelemesinde 'kümes teli (chicken-wire)' benzeri periselüler kalsifikasyon paterni gösteren, tipik olarak uzun kemiklerin epifizinde yerleşen ve en sık 10-20 yaş arası bireylerde izlenen primer benign kemik tümörü aşağıdakilerden hangisidir?
A) Fibröz displazi
B) Anevrizmal kemik kisti
C) Kondroblastom
D) Enkondrom
E) Osteoid osteom
Doğru Şık (C): Kondroblastom
Açıklama: Kondroblastom genç hastalarda (~10-20 yaş), aktif büyüme plağı olan bireylerde epi-fizde görülen nadir benign bir kıkırdak tümörüdür. Patolojik tanısını sağlayan anahtar histolojik özellik, kondroblastların etrafındaki ince periselüler kalsifikasyon ağının 'kümes teli' görünümü oluşturmasıdır. Enkondrom medüller kavitede yerleşir, O-ring belirtisi verir. Fibröz displazide çin harfi/balık oltası trabeküller, anevrizmal kemik kistinde kan dolu boşluklar karakteristiktir.

**Soru 2 (ID: f54de4d4-b97e-4499-98f6-8a9d3a857336)**
Soru Kökü: Onaltı yaşındaki erkek hasta, sağ diz çevresinde ağrısız, sert bir şişlik şikayetiyle başvuruyor. Çekilen radyografide, distal femurun metafiz bölgesinde, medüller kavite ile devamlılık gösteren, üzerinde hiyalin kıkırdak başlık bulunan kemiksi bir çıkıntı izleniyor. Genetik analizde EXT1 gen mutasyonu saptanıyor.
Bu hasta için en olası tanı aşağıdakilerden hangisidir?
A) Kondroblastom
B) Enkondrom
C) Osteokondrom
D) Osteosarkom
E) Ewing Sarkom
Doğru Şık (C): Osteokondrom
Açıklama: Osteokondrom (ekzostoz), en sık görülen benign kemik tümörüdür; metafizden kaynaklanır, medüller kaviteyle devamlılığı vardır ve üzerinde hiyalin kıkırdak başlık taşır. Multipl herediter ekzostozis (MHE) durumunda EXT1 veya EXT2 gen mutasyonları tanımlıdır. Soliter osteokondromlarda malign transformasyon riski <%1 iken MHE'de bu oran artar. Kondroblastom epifize yerleşir ve kümes teli kalsifikasyonu gösterir; Ewing sarkomu ise diyafize yerleşir ve soğan zarı periost reaksiyonu ile karakterizedir.

---

### ÇİFT 7 (Benzerlik: 0.76)

**Soru 1 (ID: 155ab209-9d5a-43ae-8a02-ce88281f925a)**
Soru Kökü: Multipl miyelom kaynaklı ilerleyici böbrek yetmezliğinin hücresel düzeyde temel patogenezi, M proteinlerinin hangi spesifik bileşeninin böbrekte lokal tahribat oluşturmasına dayanır?
Doğru Şık (B): Dolaşımdaki Bence-Jones hafif zincirlerinin renal tübüler epitele direkt toksisite göstermesi
Açıklama: Miyelom böbreği adı verilen spesifik nefropati, küçük moleküllü Bence-Jones (monoklonal hafif zincir) proteinlerinin glomerüler filtrattan süzülüp renal tübüllerdeki tübüler epitel hücrelerine kimyasal ve fagositoz sonrası toksisite yaratması sonucu oluşur. En güçlü çeldirici olan AL tip amiloid birikimi yine hafif zincir kökenlidir ancak amiloid nefropatisi ancak tüm hastaların çok küçük bir kısmında (λ6 ve λ3 varlığında) sekonder süreçte gerçekleşir. Glomerüler iskemi ise bu tabloda temel başlatan faktör değil vasküler sekel formudur.

**Soru 2 (ID: 1ba6d3f6-9cef-4221-b48e-b37c62adbdbe)**
Soru Kökü: Multipl myelom hastalarında en sık görülen ikinci ölüm nedeni olan renal yetmezliğin (böbrek disfonksiyonu) patogenezindeki temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Düşük molekül ağırlıklı immünoglobulin hafif zincirlerinin tübüler epitel hücrelerinde toksik etki yaratması
Açıklama: Multipl myelomda böbrek yetmezliğinin ana mekanizması, plazma hücrelerinin aşırı sentezlediği Bence-Jones proteinlerinin (düşük molekül ağırlıklı hafif zincirler) idrara geçerek renal tübüler epitel hücrelerinde doğrudan toksisite yaratmasıdır. Adaylar genellikle hiperviskozite veya iskemi mekanizmalarına (rulo formasyonu tuzağı) kayma eğilimindedir; oysa yıkım tamamen hücresel atıkların (hafif zincir) tübül düzeyindeki biyokimyasal hasarına dayanır. Bu durum klinikte 'toksik proteinüri' olarak da adlandırılır.

---

### ÇİFT 8 (Benzerlik: 0.76)

**Soru 1 (ID: 02fa7197-76ab-4123-84b1-61ce4e468fe4)**
Soru Kökü: Yirmi iki yaşındaki erkek hastanın kliniğe başvurusunda, son yıllarda alt çenesinin belirgin şekilde büyüdüğü ve dişlerinde aralanmalar olduğu saptanmıştır. Çekilen panoramik radyografide mandibulada belirgin kortikal kalınlaşma ve aşırı reaktif skleroz izlenmiştir. Anamnezinde diş çekimi veya kronik enfeksiyon kaynağı saptanamamıştır. Çene kemiğinde bu tarz yoğun kemik yapımı ile karakterize kronik osteomiyelit formu aşağıdakilerden hangisidir?
A) Pott hastalığı
B) Spina ventoza
C) Garre'nin sklerozan osteomyeliti
D) Sekestrum formasyonu
E) Mazabraud sendromu
Doğru Şık (C): Garre'nin sklerozan osteomyeliti
Açıklama: Garre'nin sklerozan (proliferatif periostitis) osteomyeliti, genç bireylerde özellikle mandibulada görülen kronik düşük virülans osteomyelitidir; abse veya belirgin nekroz olmaksızın yoğun reaktif periosteal kemik depozisyonu (korteks kalınlaşması) ile karakterizedir. Enfeksiyon odağı çoğunlukla gömülü diş veya periodontal hastalıktır; ancak bazen klinik enfeksiyon kaynağı saptanamaz. Pott vertebralar, spina ventoza el parmakları, sekestrum nekrotik kemik parçasıyla ilgilidir.

**Soru 2 (ID: d5422a9b-5872-405b-b6fa-d36ce95569a1)**
Soru Kökü: Tüberküloz osteomyelitinin klinik tipleri ve spesifik lokalizasyonları ile ilgili olarak; el parmaklarını lokalize olarak tutan ve destrüktif litik lezyonlar yaratan duruma verilen isim aşağıdakilerden hangisidir?
A) Pott absesi
B) Spina ventoza
C) Brodie absesi
D) Garre sklerozu
E) Mazabraud nodülü
Doğru Şık (B): Spina ventoza
Açıklama: Spina ventoza (spina = diken, ventoza = şişirilmiş/baloncuklu), küçük tübüler kemiklerin (özellikle parmak falanksleri) tüberküloz tutulumunun adıdır; destrüktif litik lezyonlar periosteal yeni kemik yapımıyla birlikte 'fusiform/balonvari' şişme görüntüsü yaratır. Pott hastalığı ise vertebral tüberkülozun (özellikle alt torasik/lomber) adıdır ve paravertebral 'soğuk abse' ile vertebral kollaps — kifoz — ile karakterizedir. Brodie absesi piyojenik, Garre sklerozu piyojenik çene osteomyelitiyle ilgilidir. Mazabraud fibröz displazi ile ilişkili bir sendromdur.

---

### ÇİFT 9 (Benzerlik: 0.76)

**Soru 1 (ID: 3c752dfd-171d-4673-9421-439fb337cf0f)**
Soru Kökü: Elli iki yaşındaki erkek hasta, şapkalarının artık başına küçük geldiğini ve son aylarda işitme kaybı yaşamaya başladığını belirterek kliniğe başvuruyor. Muayenede belirgin baş büyümesi (leontiasis ossea) saptanıyor. Laboratuvar tetkiklerinde kalsiyum ve fosfor değerleri normal sınırlarda iken alkalin fosfataz düzeyi belirgin olarak yüksek bulunuyor.
Bu hastanın mevcut zemininde aşağıdaki neoplazilerden hangisinin gelişme riski en az olasıdır?
A) Osteosarkom
B) Dev hücreli onarıcı granülom
C) Fibrosarkom
D) Kondrosarkom
E) Dev hücreli tümör
Doğru Şık (D): Kondrosarkom
Açıklama: Bu tablo Paget hastalığıyla uyumludur. Paget zemininde gelişen sarkomlar arasında osteosarkom (~%50) en sık, ardından fibrosarkom ve kondrosarkom gelir. Dev hücreli tümör de Paget ile ilişkili olarak bildirilmiştir. Ancak kondrosarkom, Paget hastalığında diğerlerine kıyasla çok daha nadir görülen bir komplikasyondur; Paget sarkomları içinde en az olasıdır. Leontiasis ossea (aslan yüzü), başta kafa kemiğinin pagete bağlı aşırı büyümesi, ve yüksek ALP + normal kalsiyum/fosfor Paget'in klasik bulgularıdır.

**Soru 2 (ID: f54de4d4-b97e-4499-98f6-8a9d3a857336)**
Soru Kökü: Onaltı yaşındaki erkek hasta, sağ diz çevresinde ağrısız, sert bir şişlik şikayetiyle başvuruyor. Çekilen radyografide, distal femurun metafiz bölgesinde, medüller kavite ile devamlılık gösteren, üzerinde hiyalin kıkırdak başlık bulunan kemiksi bir çıkıntı izleniyor. Genetik analizde EXT1 gen mutasyonu saptanıyor.
Bu hasta için en olası tanı aşağıdakilerden hangisidir?
A) Kondroblastom
B) Enkondrom
C) Osteokondrom
D) Osteosarkom
E) Ewing Sarkom
Doğru Şık (C): Osteokondrom
Açıklama: Osteokondrom (ekzostoz), en sık görülen benign kemik tümörüdür; metafizden kaynaklanır, medüller kaviteyle devamlılığı vardır ve üzerinde hiyalin kıkırdak başlık taşır. Multipl herediter ekzostozis (MHE) durumunda EXT1 veya EXT2 gen mutasyonları tanımlıdır. Soliter osteokondromlarda malign transformasyon riski <%1 iken MHE'de bu oran artar. Kondroblastom epifize yerleşir ve kümes teli kalsifikasyonu gösterir; Ewing sarkomu ise diyafize yerleşir ve soğan zarı periost reaksiyonu ile karakterizedir.

---

### ÇİFT 10 (Benzerlik: 0.75)

**Soru 1 (ID: 263ee436-5ab2-4d8a-a664-ac4277f05f18)**
Soru Kökü: Yetmiş yaşında erkek hasta, son haftalarda giderek artan konfüzyon, letarji, kabızlık ve sık idrara çıkma (poliüri) şikayetleriyle başvuruyor. Hastanın anamnezinden multipl myelom tanısı ile takip edildiği öğreniliyor. Bu hastada izlenen akut semptom kompleksinin primer nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Yaygın kemik rezorpsiyonu sonucunda kana karışan kalsiyumun yarattığı hiperkalsemi
Açıklama: Sürekli kemik yıkımı ile dolaşıma salınan yüksek oranda kalsiyum (hiperkalsemi); santral sinir sistemini deprese ederek konfüzyon ve letarjiye, gastrointestinal sistemi etkileyerek kabızlığa ve böbrek konsantrasyon yeteneğini bozarak poliüriye neden olur. Böbrek yetmezliği tablosu Bence-Jones toksisitesine bağlı gelişse de poliüri ve kabızlığın akut faili kalsiyum iyonudur. Bu kaskad, myelomun sekonder sistemik hasarlarının klasik klinik görünümüdür.

**Soru 2 (ID: 32595fe9-998e-4ca4-8c7e-dfc2761fe4a9)**
Soru Kökü: Altmış sekiz yaşında erkek hasta, bel bölgesinde şiddetli kronik ağrı ve son zamanlarda artan kabızlık/konfüzyon şikayetleriyle başvuruyor. Radyografik incelemede kafatası ve pelvisinde sınırları belirgin, çevresinde sklerotik reaksiyon olmayan multipl litik lezyonlar saptanıyor. Laboratuvar testlerinde hiperkalsemi ve idrarda anormal protein artışı izlenen bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Multipl myelom
Açıklama: İleri yaş erkek hastada kafatasında 'zımba deliği' litik lezyonlar, kalsiyum yüksekliği (konfüzyon/kabızlık) ve böbrekten kaçan anormal protein (Bence-Jones) varlığı Multipl Myelom'un klasik sistemik kaskadıdır. Soliter plazmositom şıkkı, lezyonların yaygın (multipl) olması ve hiperkalsemi/proteinüri varlığı nedeniyle doğrudan elenir. Langerhans histiyositoz ise litik lezyon yapsa da yaş profili olarak pediatrik/genç popülasyonu hedeflemesiyle vaka akışından kopar.

---

### ÇİFT 11 (Benzerlik: 0.75)

**Soru 1 (ID: 4429af5e-ccef-4d43-998f-757fc10216a4)**
Soru Kökü: Çocukluk çağındaki Hodgkin dışı lenfomaların (NHL) önemli bölümünü oluşturan Burkitt lenfomanın histopatolojisinde apoptozun engellenememesi nedeniyle gelişen çok hızlı mitotik tablo, aşağıdakilerden hangisinin tümör dokusunda patolojik varlığıyla doğrudan açıklanır?
Doğru Şık (A): Baskın hücresel karakterin BCL-2 gen ekspresyonunun negatif kalması
Açıklama: Tümörlerin çoğunda apoptotik yıkımı durduran gen olan BCL-2 up-regülasyonuna rastlansa da, Burkitt Lenfomada spesifik bir şekilde BCL-2 molekülü tamamen negatiftir ve yüksek MYC oranına ek olarak hücreye mutlak bir yıkım ve devir hızı verir (yıldızlı gökyüzü paterni). Bu patogeneze çeldirici olarak sunulan Hodgkin'e ait CD15/CD30 fenotipleri ve AML'ye ait blast sayımları B hücre maligniteleriyle sık karıştırılan miyeloid hücresel kavramlardır. Mitotik endeksin rekor seviyelere çıkması t(8;14) artışı zemininde engellenemeyen hücresel DNA tamir defektinin yansımasıdır.

**Soru 2 (ID: c0f2efbf-58f4-47e1-8251-810e1ecf741e)**
Soru Kökü: En hızlı büyüyen insan tümörü olan Burkitt lenfomanın histopatolojik ve immünolojik profilini inceleyen bir patoloğun, tümör biyopsisinde aşağıdaki belirteçlerden hangisini bulması **beklenmez**?
Doğru Şık (A): Apoptozu durduran BCL-2 molekülünün aşırı pozitifliği
Açıklama: Burkitt lenfoma matür germinal merkez B lenfositlerinden köken alsa da, diğer foliküler lenfomaların aksine hücresel ölümü bloke eden BCL-2 proteinini eksprese etmez ve bu sayede tümör içinde muazzam bir apoptoz ve nükleer yıkım izlenir. En güçlü çeldirici olan BCL-6 gen ekspresyonu ise lenfomanın matür merkez B hücresi (germinal zon) karakterinde olduğunu teyit eder ve pozitiftir. İlikte BCL-2'nin negatifliği ve MYC üzerinden hücresel delilik düzeyinde bölünme yıldızlı gökyüzü paterninin kök sebebidir.

---

### ÇİFT 12 (Benzerlik: 0.75)

**Soru 1 (ID: 0bb0dee4-4a15-4e24-a7a5-a2e92a109856)**
Soru Kökü: Langerhans hücreli histiyositozda, tümöral hücrelerin makrofaj kökenli olmadığını genetik düzeyde kanıtlayan ve immünohistokimyada mutlak negatif beklenen belirteç aşağıdakilerden hangisidir?
Doğru Şık (C): CD68
Açıklama: CD68 makrofajlar için spesifik bir belirteçtir ve LHH hücrelerinde negatif olması bu hücrelerin doku makrofajı olmadığını kesin olarak kanıtlar. CD1a, S-100 ve HLA-DR pozitifliği ise tümörün immatür dendritik hücre kökenini gösteren temel tanısal parametrelerdir. Sınavlarda histiyositozların makrofaj tümörü sanılması yanılgısını kırmak için sıklıkla bu hücresel köken ve negatiflik tuzağı kullanılır.

**Soru 2 (ID: 7d91a4d2-6084-4f7d-b445-f5ab1bd3b799)**
Soru Kökü: Dendritik immatür hücre ailesinden köken alan Langerhans Hücreli Histiyositoz hastalığının (LCH) spesifik immünofenotipik analizinde aşağıdaki reseptör profillerinden hangisi **yanlıştır**?
Doğru Şık (B): Yüzey matürasyon marker'ı olarak CD68 antijeninin pozitif boyanması
Açıklama: Langerhans hücreleri deri ve kemikte infiltre dendritik hücreler oldukları için klasik makrofaj aktivasyon belirteci olan CD68 antijenini boyamada negatif olarak sergiler. CD68 pozitifliği reaktif ve malign makrofajlarla LCH hücreleri ayrımını sağlayan ve en sık yanılgıya düşülen distraktör immün profildir. Diğer yandan S-100 ve CD1a pozitifliğine ek olarak sadece elektron mikroskobunda görülen Birbeck granülleri hücrelerin kimliğini kesinleştirir.

---

### ÇİFT 13 (Benzerlik: 0.75)

**Soru 1 (ID: 9bad6fb5-a249-4fc5-a4ec-9636918d342d)**
Soru Kökü: Miyeloblast hücrelerinin sitoplazmasında bulunan 'Auer çubukları' t(15;17) translokasyonuna sahip hastalarda yoğun olarak gözlenir. İlikte lösemik duraklama yaratan bu moleküler defektin yıkılması sürecinde dolaşıma salınan faktörlerin tetiklediği en yıkıcı komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Tüketim koagülopatisi ve damariçi pıhtılaşma (DIC) kaskadı
Açıklama: t(15;17) translokasyonu PML-RARA gen füzyonu ile Akut Promiyelositik Lösemiye (M3) neden olur ve atipik Auer çubuğu granüllerinin dolaşıma prokoagülan ve fibrinolitik faktörler salması hastaları ölümcül Yaygın Damariçi Pıhtılaşma (DIC) sendromuna sokar. Monoklonal antikor presipitasyonu (Bence-Jones) miyelom tablosunda böbrek ve dolaşım patolojisi yaratan güçlü bir çeldiricidir ancak lösemi patogenezinde rol oynamaz. Bu hematolojik oklüzyon ve kanama tablosu miyeloid kökenin granül biyoaktif doğasından gelir.

**Soru 2 (ID: ac49947a-3f06-4565-8c98-6430aae356ff)**
Soru Kökü: Retinoik asit reseptör defektine yol açan t(15;17) gen amplifikasyonlu Akut Miyeloid Lösemi (AML) seyrinde sitoplazmik peroksidaz spesifik granüller birikir. Bu blastların yapısında koagülan yıkıma neden olan hücresel inküzyona ne ad verilir?
Doğru Şık (C): Auer çubuğu
Açıklama: AML formlarında (bilhassa t(15;17) promiyelositik alt tipinde), immatür lösemik lökositlerin sitoplazmasında biriken ve DIC kaskadını uyaran iğne benzeri azurofilik enzim depoları 'Auer çubukları'dır. Multipl miyelom hücrelerinde sekrete edilemeyen M proteininin yarattığı Russel cisimciği ve histiyositozlara ait dendritik hücre reseptörü olan Birbeck granülleri kan neoplazilerinde morfolojik ayırıcı tanı yapılan çok güçlü distraktör cisimcik isimleridir. Auer varlığı ilik dokusunda hastanın lenfoid değil kesin miyeloid faza geçtiğinin hücresel ispatıdır.

---

### ÇİFT 14 (Benzerlik: 0.75)

**Soru 1 (ID: 3c79f879-3985-4de4-927a-9c02d3814113)**
Soru Kökü: On beş yaşında erkek hasta, diş etlerinde (gingiva) yaygın şişlik, kanama ve hipertrofi şikayetiyle başvuruyor. Çene radyografisinde litik bir kemik kitlesi izlenmezken, periferik kan yaymasında immatür blast hücreleri saptanıyor. Ağız içi kitle yapan bu agresif hematopoietik tablonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Akut miyeloid lösemi (M5 varyantı)
Açıklama: Oral kavitede spesifik olarak 'diş etini' (gingivayı) infiltre ederek büyüten ve periferik kanda blast tablosuyla (ilik tutulumu) karakterize olan patoloji Akut Miyeloid Lösemi'nin M5 (monositik) varyantıdır. Kuvvetli çeldirici olan Burkitt lenfoma ise yumuşak dokudan ziyade mandibulada (kemik içi) devasa litik lokal kitle yapar ve kemik iliği tutulumu son derece nadirdir. DUS sınav formatı, oral lezyon yapan iki hematopoietik maligniteyi gingiva vs kemik ayrımı üzerinden netleştirir.

**Soru 2 (ID: 66740477-d270-4ace-a8ad-6ed64f0317ab)**
Soru Kökü: Altmış sekiz yaşında kadın hasta, son bir aydır aşırı halsizlik ve diş etlerinde spontan kanamayla seyreden masif şişlik şikayetiyle başvuruyor. Hastanın klinik muayenesinde diş etlerinin neredeyse diş kuronlarını örtecek kadar hipertrofik olduğu izleniyor. Yapılan hemogramda ciddi trombositopeni ve anemi tespit ediliyor. Kemik iliği biyopsisinde peroksidaz-pozitif, iğne şeklinde inklüzyonlar içeren hücreler normal iliğin %45'ini kaplamaktadır. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Akut Miyeloid Lösemi (M5 varyantı)
Açıklama: İleri yaş (>60), kemik iliği yetmezliği (trombositopeni/anemi), kemik iliğinde >%20 blast ve peroksidaz pozitif iğne şekilli Auer çubukları doğrudan Akut Miyeloid Lösemi (AML) tanısına götürür. AML'nin M5 (monositik) farklılaşma gösteren alt tipi, gingivada spesifik olarak masif lösemik infiltrasyona (hipertrofi) neden olur. Multipl Miyelom çenede yumuşak doku değil, zımba deliği tarzı litik kemik destrüksiyonu yaparak klinik ayrım yaratır.

---

### ÇİFT 15 (Benzerlik: 0.74)

**Soru 1 (ID: 9bad6fb5-a249-4fc5-a4ec-9636918d342d)**
Soru Kökü: Miyeloblast hücrelerinin sitoplazmasında bulunan 'Auer çubukları' t(15;17) translokasyonuna sahip hastalarda yoğun olarak gözlenir. İlikte lösemik duraklama yaratan bu moleküler defektin yıkılması sürecinde dolaşıma salınan faktörlerin tetiklediği en yıkıcı komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Tüketim koagülopatisi ve damariçi pıhtılaşma (DIC) kaskadı
Açıklama: t(15;17) translokasyonu PML-RARA gen füzyonu ile Akut Promiyelositik Lösemiye (M3) neden olur ve atipik Auer çubuğu granüllerinin dolaşıma prokoagülan ve fibrinolitik faktörler salması hastaları ölümcül Yaygın Damariçi Pıhtılaşma (DIC) sendromuna sokar. Monoklonal antikor presipitasyonu (Bence-Jones) miyelom tablosunda böbrek ve dolaşım patolojisi yaratan güçlü bir çeldiricidir ancak lösemi patogenezinde rol oynamaz. Bu hematolojik oklüzyon ve kanama tablosu miyeloid kökenin granül biyoaktif doğasından gelir.

**Soru 2 (ID: a1cfb247-c26e-4ae3-bf44-f4d5353dc79a)**
Soru Kökü: Altmış iki yaşındaki bir hastanın rutin kan tetkiklerinde hematokrit %24, trombosit sayısı 25.000/mm³ saptanmıştır. Çekilen kemik iliği aspiratında %80 oranında iğne şeklinde azurofilik granüller içeren atipik hücreler görülmüş, genetik testte PML-RARA füzyon proteini pozitif çıkmıştır. Bu hastanın acil maksillofasiyal cerrahi müdahalesi sırasında karşılaşılabilecek en kritik sistemik komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Yaygın damariçi pıhtılaşma (DİK) kaskadına sekonder masif kanama
Açıklama: PML-RARA mutasyonu ve bol Auer çubuğu içeren hücreler, Akut Promiyelositik Lösemi (APL - t(15;17)) tanısı koydurur. Bu özel AML alt tipinin hücrelerinden kana salınan prokoagülan partiküller, ölümcül bir Yaygın Damariçi Pıhtılaşma (DİK) sürecini tetikler; bu nedenle hasta minör cerrahi işlemlerde dahi durdurulamayan masif koagülopati riski taşır. Damak perforasyonu midline granülomun, zımba deliği kırığı ise miyelomun komplikasyonudur.

---

### ÇİFT 16 (Benzerlik: 0.74)

**Soru 1 (ID: e6182ada-5e24-4f64-bc6a-33bdeec5934a)**
Soru Kökü: Kemik tümörlerinin yaş ve lokalizasyon profilleri incelendiğinde, aşağıdaki tümör-yerleşim bölgesi eşleştirmelerinden hangisi yanlıştır?
A) Dev Hücreli Tümör — Epifiz
B) Kondroblastom — Epifiz
C) Osteosarkom — Metafiz
D) Ewing Sarkomu — Metafiz
E) Osteokondrom — Metafiz
Doğru Şık (D): Ewing Sarkomu — Metafiz
Açıklama: Ewing sarkomu uzun kemiklerin DİAFİZine yerleşir, metafize değil — bu bilgi DUS'ta sıkça sorulan kritik bir ayrım noktasıdır. Osteosarkom metafizi tercih ederken dev hücreli tümör ve kondroblastom her ikisi de epifize yerleşir (kondroblastom aktif büyüme plağı olan hastalarda). Osteokondrom metafizden kaynaklanır. Ewing'in diyafizde soğan zarı (onion skin) periost reaksiyonuyla görülmesi sınav klasiğidir.

**Soru 2 (ID: ec82520a-c6b1-4767-bc74-94c336fb7934)**
Soru Kökü: Aşağıdakilerden hangisi kondrosarkomların genel davranış ve yerleşim özellikleri için yanlıştır?
A) Pelvis, omuz, kosta ve proksimal femur en sık tutulan bölgelerdir.
B) Konvansiyonel tipi hiyalin kıkırdak üretir.
C) Distal ekstremitelerde ve el falankslarında sıkça görülür.
D) Berrak (şeffaf) hücreli varyantı tipik olarak epifize yerleşir.
E) Mezenkimal varyantı küçük yuvarlak hücreler içerdiğinden Ewing sarkomu taklit edebilir.
Doğru Şık (C): Distal ekstremitelerde ve el falankslarında sıkça görülür.
Açıklama: Kondrosarkom aksiyel iskelet ve proksimal ekstremiteleri (pelvis, omuz, proksimal femur, kosta) tercih eden bir malign kıkırdak tümörüdür; el falanksleri ve distal ekstremiteler tipik lokalizasyonu değildir. El falankslarındaki enkondromlar (Ollier hastalığı) kondrosarkoma transformasyon riski taşısa da kondrosarkomun kendisi distal kesimleri nadiren tutar. Berrak hücreli varyant gerçekten epifizde görülür; mezenkimal varyant küçük yuvarlak hücre morfolojisiyle Ewing sarkomu ile karışabilir.

---

### ÇİFT 17 (Benzerlik: 0.74)

**Soru 1 (ID: 32efc2da-51ec-4193-babe-da84615325bd)**
Soru Kökü: Kemik matriksi proteinlerinin kökenleri incelendiğinde; aşağıdakilerden hangisi 'osteoblast kaynaklı proteinler' grubunda yer almayıp, serum konsantre edilen proteinler ailesinden kemiğe ulaşır?
A) Osteonektin
B) Albümin
C) Kemik siyaloproteini
D) Osteokalsin
E) Trombospondin
Doğru Şık (B): Albümin
Açıklama: Albümin, karaciğerde sentezlenen ve kanda dolaşan bir serum proteinidir; kemik matriksinde bulunan albümin, dolaşımdan pasif olarak buraya ulaşır — osteoblast tarafından sentezlenmez. Osteonektin (SPARC), osteokalsin, kemik siyaloproteini ve trombospondin osteoblastlar tarafından aktif olarak sentezlenen ve matriks kalsifikasyonuna katkıda bulunan nonkollajenöz proteinlerdir. Bu ayrım, kemik biyolojisi soru havuzunda standart bir detay olarak bilinir.

**Soru 2 (ID: 84c9ebf0-c606-4f64-8be5-f96da2259454)**
Soru Kökü: Vücuttaki mineralizasyon dengesinde osteositler tarafından üretilen ve osteoblast aktivitesini inhibe ederek etki gösteren, romosozumab adlı ilacın spesifik hedefi olan glikoprotein aşağıdakilerden hangisidir?
A) Osteokalsin
B) Osteopontin
C) Sklerostin
D) Trombospondin
E) Fibronektin
Doğru Şık (C): Sklerostin
Açıklama: Sklerostin, osteositler tarafından salgılanan ve Wnt sinyal yolunu baskılayarak osteoblast diferansiyasyonunu ve kemik yapımını inhibe eden bir glikoproteindir. Romosozumab, sklerostine karşı geliştirilmiş monoklonal bir antikordur; sklerostini bloke ederek hem kemik yapımını artırır hem de kemik yıkımını azaltır — bu çift etkisi onu osteoporoz tedavisinde benzersiz kılar. Osteokalsin ise osteoblastlar tarafından üretilen ve kemik matriksine kalsiyum bağlayan bir proteindir, sklerostinle karıştırılmamalıdır. Osteopontin de osteoblast kaynaklı olup osteoklast adezyonunda rol oynar; sklerostin değildir.

---

### ÇİFT 18 (Benzerlik: 0.74)

**Soru 1 (ID: d436f8ec-7f49-486b-99f1-6efadae4895e)**
Soru Kökü: Ağız boşluğunda anterior sert damak bölgesinde yerleşen ve nazal perforasyon (damak-burun boşluğu iştiraki) yapma potansiyeli olan lenfoid kökenli malignitelerin ayırıcı tanısında, lezyonun Doğal Öldürücü (NK) lenfosit kökenli olması aşağıdakilerden hangisini kesinleştirir?
Doğru Şık (D): Midline Granülom
Açıklama: Maksillofasiyal bölgede destrüktif (yıkıcı) kitle yapan ve spesifik olarak Doğal Öldürücü (NK) veya T-hücre kökenli olan neoplazi Midline Granülomdur (anjiosentrik lenfoma). Burkitt lenfoma ve Multipl Miyelom matür B hücrelerinden, Plazmositom ise yine B kökenli CD138+ matür plazma hücrelerinden gelişir. Eozinofilik Granülom ise lenfosit değil, dendritik (antijen sunan) hücre kökenli bir proliferasyondur.

**Soru 2 (ID: ef8809f1-57dd-4f78-ab38-4f8311f6eeec)**
Soru Kökü: Ağız içi muayenesinde anterior sert damakta geniş ve kötü kokulu nekrotik bir defekt bulunan, nazal kıkırdağa kadar ulaşan geniş bir oronazal perforasyon tespit edilen hastada ayırıcı tanı yapılmaktadır. Alınan biyopside bol miktarda eozinofil ve makrofaj izlenmesine rağmen dendritik hücre belirteçleri negatiftir. Bu klinik tabloda öncelikle aşağıdaki patolojilerden hangisinden şüphelenilmelidir?
Doğru Şık (D): Midline Granülom
Açıklama: Damaktan başlayıp burun boşluğuna kadar uzanan nekrotik yıkım ve perforasyonlar, anjiosentrik iskemik oklüzyonla ilerleyen Midline Granülomun (NK/T-hücreli lenfoma) baş-boyun bölgesindeki klasik komplikasyonudur. Şıklardaki Eozinofilik Granülom (LHH) kafa kemiklerinde defekt yapabilse de, dendritik hücre belirteçlerinin (CD1a) negatif verilmesi histiyositozları dışlar. Plazmositom ve miyelom bu denli agressif ve hızlı ilerleyen mukozal çürüme (nekroz) yapmaz.

---

### ÇİFT 19 (Benzerlik: 0.74)

**Soru 1 (ID: 1257fa26-17fb-4e49-9378-07534889d388)**
Soru Kökü: Reed-Sternberg hücrelerinin mevcudiyetiyle karakterize Hodgkin Lenfomanın (HL) en sık görülen klasik alt tipi olan 'Nodüler skleroz' ile ilgili aşağıdaki klinik ve patolojik durumlardan hangisi **beklenmez**?
Doğru Şık (C): Histopatolojik dokuda yüksek oranlarda Epstein-Barr Virüs (EBV) pozitifliği
Açıklama: Hodgkin lenfoma tipleri arasında en yaygın olan Nodüler Skleroz formu, diğer HL alt tiplerinden farklı olarak karakterize edici biçimde EBV (Epstein-Barr Virüs) enfeksiyonu açısından negatiftir. EBV varlığı, bilhassa HIV hastalarında sık görülen Lenfositten Fakir alt tipte ve Mikst Selüler tipte (%70) pozitif izlenen çok güçlü bir ayırıcı hücresel çeldiricidir. Diğer taraftan mediastinal lokalizasyon ve fibröz bantlar klinik-radyolojik tanıda nodüler sklerozun alametifarikasıdır.

**Soru 2 (ID: f6e088b5-dddd-42cd-9c1b-ac9902009c05)**
Soru Kökü: Yirmi altı yaşında kadın hasta, boyun bölgesinde ağrısız lenf bezi büyümesi ve göğüs radyografisinde mediastinal kitle tespitiyle kliniğe başvurmuştur. Biyopside lenf nodunu nodüllere bölen kalın fibröz bantlar ve bu sklerotik alanların arasında CD15(+), CD30(+) neoplastik hücreler görülmüştür. Epstein-Barr Virüs (EBV) antijenleri negatiftir. Bu hastada en olası Hodgkin lenfoma alt tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Nodüler Skleroz
Açıklama: Genç erişkin/kadın ağırlıklı, mediastinal kitleyle prezente olan, lenf nodunu fibröz (sklerotik) bantlara bölen ve EBV ile ilişkisiz olan klasik Hodgkin alt tipi Nodüler Skleroz'dur. Mikst selüler tip daha ileri yaşlarda görülür ve %70 oranında EBV pozitiftir. Fibröz bant varlığı ve mediastinal yerleşim patolojinin temel tanısal dikotomilerinden birini oluşturur.

---

### ÇİFT 20 (Benzerlik: 0.74)

**Soru 1 (ID: 1bc02775-5017-4918-9969-f853c2ed142c)**
Soru Kökü: Akut Miyeloid Lösemi (AML) hastalarında görülen genetik translokasyonlardan hangisi spesifik olarak retinoik asit reseptör alfa genini (PML-RARA füzyonu) bozarak yaygın hücre içi granül birikimine ve damariçi pıhtılaşma (DİK) komplikasyonuna yol açar?
Doğru Şık (A): t(15;17)
Açıklama: PML-RARA füzyon genini oluşturan, hücreleri promiyelositik aşamada donduran ve devasa Auer çubukları oluşturarak DİK'i (damariçi pıhtılaşma) tetikleyen majör mutasyon t(15;17)'dir. t(8;21) ve inv(16) farklı AML alt tiplerinin RUNX1/CBFB inhibisyonlu formlarıyken, t(8;14) Burkitt lenfomanın, t(X;18) ise sinovyal sarkomun mutasyonudur. Bu genetik belirteç hedefe yönelik farmakolojik tedavi (ATRA) kurgusunun temelini oluşturur.

**Soru 2 (ID: ac49947a-3f06-4565-8c98-6430aae356ff)**
Soru Kökü: Retinoik asit reseptör defektine yol açan t(15;17) gen amplifikasyonlu Akut Miyeloid Lösemi (AML) seyrinde sitoplazmik peroksidaz spesifik granüller birikir. Bu blastların yapısında koagülan yıkıma neden olan hücresel inküzyona ne ad verilir?
Doğru Şık (C): Auer çubuğu
Açıklama: AML formlarında (bilhassa t(15;17) promiyelositik alt tipinde), immatür lösemik lökositlerin sitoplazmasında biriken ve DIC kaskadını uyaran iğne benzeri azurofilik enzim depoları 'Auer çubukları'dır. Multipl miyelom hücrelerinde sekrete edilemeyen M proteininin yarattığı Russel cisimciği ve histiyositozlara ait dendritik hücre reseptörü olan Birbeck granülleri kan neoplazilerinde morfolojik ayırıcı tanı yapılan çok güçlü distraktör cisimcik isimleridir. Auer varlığı ilik dokusunda hastanın lenfoid değil kesin miyeloid faza geçtiğinin hücresel ispatıdır.

---

### ÇİFT 21 (Benzerlik: 0.74)

**Soru 1 (ID: e6182ada-5e24-4f64-bc6a-33bdeec5934a)**
Soru Kökü: Kemik tümörlerinin yaş ve lokalizasyon profilleri incelendiğinde, aşağıdaki tümör-yerleşim bölgesi eşleştirmelerinden hangisi yanlıştır?
A) Dev Hücreli Tümör — Epifiz
B) Kondroblastom — Epifiz
C) Osteosarkom — Metafiz
D) Ewing Sarkomu — Metafiz
E) Osteokondrom — Metafiz
Doğru Şık (D): Ewing Sarkomu — Metafiz
Açıklama: Ewing sarkomu uzun kemiklerin DİAFİZine yerleşir, metafize değil — bu bilgi DUS'ta sıkça sorulan kritik bir ayrım noktasıdır. Osteosarkom metafizi tercih ederken dev hücreli tümör ve kondroblastom her ikisi de epifize yerleşir (kondroblastom aktif büyüme plağı olan hastalarda). Osteokondrom metafizden kaynaklanır. Ewing'in diyafizde soğan zarı (onion skin) periost reaksiyonuyla görülmesi sınav klasiğidir.

**Soru 2 (ID: f54de4d4-b97e-4499-98f6-8a9d3a857336)**
Soru Kökü: Onaltı yaşındaki erkek hasta, sağ diz çevresinde ağrısız, sert bir şişlik şikayetiyle başvuruyor. Çekilen radyografide, distal femurun metafiz bölgesinde, medüller kavite ile devamlılık gösteren, üzerinde hiyalin kıkırdak başlık bulunan kemiksi bir çıkıntı izleniyor. Genetik analizde EXT1 gen mutasyonu saptanıyor.
Bu hasta için en olası tanı aşağıdakilerden hangisidir?
A) Kondroblastom
B) Enkondrom
C) Osteokondrom
D) Osteosarkom
E) Ewing Sarkom
Doğru Şık (C): Osteokondrom
Açıklama: Osteokondrom (ekzostoz), en sık görülen benign kemik tümörüdür; metafizden kaynaklanır, medüller kaviteyle devamlılığı vardır ve üzerinde hiyalin kıkırdak başlık taşır. Multipl herediter ekzostozis (MHE) durumunda EXT1 veya EXT2 gen mutasyonları tanımlıdır. Soliter osteokondromlarda malign transformasyon riski <%1 iken MHE'de bu oran artar. Kondroblastom epifize yerleşir ve kümes teli kalsifikasyonu gösterir; Ewing sarkomu ise diyafize yerleşir ve soğan zarı periost reaksiyonu ile karakterizedir.

---

### ÇİFT 22 (Benzerlik: 0.73)

**Soru 1 (ID: 1257fa26-17fb-4e49-9378-07534889d388)**
Soru Kökü: Reed-Sternberg hücrelerinin mevcudiyetiyle karakterize Hodgkin Lenfomanın (HL) en sık görülen klasik alt tipi olan 'Nodüler skleroz' ile ilgili aşağıdaki klinik ve patolojik durumlardan hangisi **beklenmez**?
Doğru Şık (C): Histopatolojik dokuda yüksek oranlarda Epstein-Barr Virüs (EBV) pozitifliği
Açıklama: Hodgkin lenfoma tipleri arasında en yaygın olan Nodüler Skleroz formu, diğer HL alt tiplerinden farklı olarak karakterize edici biçimde EBV (Epstein-Barr Virüs) enfeksiyonu açısından negatiftir. EBV varlığı, bilhassa HIV hastalarında sık görülen Lenfositten Fakir alt tipte ve Mikst Selüler tipte (%70) pozitif izlenen çok güçlü bir ayırıcı hücresel çeldiricidir. Diğer taraftan mediastinal lokalizasyon ve fibröz bantlar klinik-radyolojik tanıda nodüler sklerozun alametifarikasıdır.

**Soru 2 (ID: 17105352-1c6b-4e87-80ea-1c15b42e3cbb)**
Soru Kökü: Genç erişkinlik ve adolesan döneminin sık görülen hematopoetik malignitesi Hodgkin Lenfoma, metastatik paterni açısından Non-Hodgkin Lenfomalardan belirgin morfolojik farklar içerir. Buna göre aşağıdakilerden hangisi Hodgkin Lenfomanın (HL) patolojik özelliklerinden **değildir**?
Doğru Şık (B): Waldeyer halkası ve mezenterik abdominal lenf nodlarının hastalıkta sıklıkla tutulması
Açıklama: Hodgkin Lenfomada Waldeyer lenfatik halkası ve bağırsak çevresi (mezenterik) lenf nodu istasyonu tutulumu nadirdir; bu anatomik bölgelerin yoğun olarak atlanarak tutulması patolojik olarak Non-Hodgkin Lenfoma tanısının kuvvetli bir karakteristik bulgusudur (güçlü çeldirici ayrım). Diğer bütün şıklar Hodgkin Lenfomanın klasik tek yönlü, komşuluk bazlı sentripetal yayılım paternini kanıtlayan mutlak kurallardır. Bu farklı yayılış tarzı nedeniyle iki lenfomanın kemoterapiye verdiği lenfoproliferatif yanıt birbirinden ayrı yönetsel aşamalara sahiptir.

---

### ÇİFT 23 (Benzerlik: 0.73)

**Soru 1 (ID: ce0f8159-1150-491a-ab8b-a1ba5358ae82)**
Soru Kökü: İki haftalık bir yenidoğanın muayenesinde bilateral alt ekstremitelerinde multipl kemik kırıkları tespit ediliyor. Oftalmolojik muayenesinde skleralarının belirgin mavi renkte olduğu gözlemleniyor. Aile hikayesinde babasının da sık kemik kırığı yaşadığı ve dişlerinde şekil/renk bozukluğu olduğu öğreniliyor.
Bu hastadaki mevcut tablonun temelindeki patogenez aşağıdakilerden hangisidir?
A) Osteoklastik karbonik anhidraz II enzim eksikliği
B) Tip 1 kollajenin anormal gelişimi
C) Mineralizasyon defekti ve nonmineralize osteoid artışı
D) FGF reseptör 3'ün aktive edici mutasyonu
E) Sürekli aktif G-protein uyarısına bağlı fibröz doku artışı
Doğru Şık (B): Tip 1 kollajenin anormal gelişimi
Açıklama: Kırılgan kemik hastalığı olarak da bilinen Osteogenezis İmperfekta (Ol), COL1A1/COL1A2 gen mutasyonlarına bağlı Tip 1 kollajen sentez veya yapısal defekti sonucu gelişir. Mavi sklera, tip 1 kollajenin ince skleral yapıdan şeffaflaşarak alttaki koroid damarlarının görünmesine izin vermesiyle oluşur. Otozomal dominant olan Tip 1 OI'da hafif fenotip ve yaşam süresi normaldir; Tip II ise perinatal letal formdur. Dentinogenezis imperfekta (dişlerde şekil/renk bozukluğu) da Tip 1 kollajen defektine bağlı sık eşlik eden bulgudur.

**Soru 2 (ID: ce44f3e5-63d7-474f-9e75-87a45b913f64)**
Soru Kökü: Çocukluk çağında D vitamini eksikliğine bağlı gelişen, klinik bulguları arasında 'kraniotabes, güvercin göğsü, Harrison oluğu ve ördekvari yürüyüş' bulunan metabolik kemik hastalığının fizyopatolojik mekanizması aşağıdakilerden hangisidir?
A) Karbonik anhidraz II enzim inhibisyonu
B) Tip 1 kollajenin anormal çapraz bağlanması
C) Kıkırdak plaklarında matürasyon defekti
D) Gelişmekte olan kemik dokusunda mineralizasyon defekti
E) Paratiroid hormon eksikliğine bağlı kalsiyum mobilizasyon bozukluğu
Doğru Şık (D): Gelişmekte olan kemik dokusunda mineralizasyon defekti
Açıklama: Raşitizm (çocuklarda) / osteomalazi (erişkinlerde), D vitamini eksikliğine bağlı kalsiyum-fosfor homeostazının bozulmasıyla kemik organik matriksinin (osteoid) yetersiz mineralize olduğu bir hastalıktır. Sonuç: yumuşak, bükülgen kemikler. Kraniotabes (kafatası kemiklerinin yazma kağıdı gibi yumuşaması), Harrison oluğu (diyafragma aderansında çöküklük), güvercin göğsü ve ördekvari yürüyüş bu mineralizasyon defektinin iskelet deformasyonlarıdır. Karbonik anhidraz eksikliği osteopetrozis, kıkırdak matürasyon defekti akondroplazi, Tip 1 kollajen defekti OI ile ilişkilidir.

---

### ÇİFT 24 (Benzerlik: 0.73)

**Soru 1 (ID: 08553fa6-858c-4804-b080-92200e64c93e)**
Soru Kökü: Altmış beş yaşındaki erkek hasta idrar çıkışında artış, letarji ve sırtta dayanılmaz kemik ağrılarıyla acil servise geliyor. Kafa grafisinde zımba ile delinmiş gibi çok sayıda küçük osteolitik odak görülüyor ve serum IgG seviyesi >3 g/dL saptanıyor. Bu plazma hücre neoplazisine sahip olan hastalarda fatal sonlanan birincil morbidite mekanizması (en sık ölüm nedeni) aşağıdakilerden hangisidir?
Doğru Şık (A): Hümoral bağışıklık düşüklüğüne sekonder bakteriyel enfeksiyonlar
Açıklama: Multipl miyelomda tek bir M proteininin abartılı üretimi nedeniyle immün sistemin normal antikor (poliklonal Ig) varyetesi çöker ve bu immünosupresif zemin sekonder bakteriyel enfeksiyonları bu hastaların birincil ölüm nedeni haline getirir. Böbrek yetmezliği Bence-Jones proteinlerinin yarattığı tübüler harabiyet ile ilişkili olup güçlü bir çeldiricidir ve en sık ikinci ölüm sebebi olarak klinik spektruma katılır. Litik zımba deliği lezyonlar morfolojiyi bozan ancak akut mortaliteden ziyade kemik yapısını zayıflatan ikincil belirtilerdir.

**Soru 2 (ID: 32595fe9-998e-4ca4-8c7e-dfc2761fe4a9)**
Soru Kökü: Altmış sekiz yaşında erkek hasta, bel bölgesinde şiddetli kronik ağrı ve son zamanlarda artan kabızlık/konfüzyon şikayetleriyle başvuruyor. Radyografik incelemede kafatası ve pelvisinde sınırları belirgin, çevresinde sklerotik reaksiyon olmayan multipl litik lezyonlar saptanıyor. Laboratuvar testlerinde hiperkalsemi ve idrarda anormal protein artışı izlenen bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Multipl myelom
Açıklama: İleri yaş erkek hastada kafatasında 'zımba deliği' litik lezyonlar, kalsiyum yüksekliği (konfüzyon/kabızlık) ve böbrekten kaçan anormal protein (Bence-Jones) varlığı Multipl Myelom'un klasik sistemik kaskadıdır. Soliter plazmositom şıkkı, lezyonların yaygın (multipl) olması ve hiperkalsemi/proteinüri varlığı nedeniyle doğrudan elenir. Langerhans histiyositoz ise litik lezyon yapsa da yaş profili olarak pediatrik/genç popülasyonu hedeflemesiyle vaka akışından kopar.

---

### ÇİFT 25 (Benzerlik: 0.73)

**Soru 1 (ID: 24b7e600-e1f8-416d-b19d-81c74eca8d71)**
Soru Kökü: Aşağıdakilerden hangisi Burkitt lenfomanın malignitelerden ayırt edilmesinde patognomonik bir bulgu **değildir**?
Doğru Şık (B): Eritrositlerde izlenen rulo (rouleaux) dizilim formasyonu
Açıklama: Eritrositlerin rulo (rouleaux) formasyonu yapması Burkitt lenfomada değil, Multipl Myelom tablosunda anormal M proteininin kanın viskozitesini bozması sonucu ortaya çıkar. Burkitt lenfoma için MYC disregülasyonu, yıldızlı gökyüzü paterni, matür B hücre kaset belirteçleri (CD19/20) ve yüksek mitotik indeks tüm varyantların ortak ve sarsılmaz bulgularıdır. Format 'değildir' köküyle iki büyük patolojinin belirteçlerini çaprazlar.

**Soru 2 (ID: 4429af5e-ccef-4d43-998f-757fc10216a4)**
Soru Kökü: Çocukluk çağındaki Hodgkin dışı lenfomaların (NHL) önemli bölümünü oluşturan Burkitt lenfomanın histopatolojisinde apoptozun engellenememesi nedeniyle gelişen çok hızlı mitotik tablo, aşağıdakilerden hangisinin tümör dokusunda patolojik varlığıyla doğrudan açıklanır?
Doğru Şık (A): Baskın hücresel karakterin BCL-2 gen ekspresyonunun negatif kalması
Açıklama: Tümörlerin çoğunda apoptotik yıkımı durduran gen olan BCL-2 up-regülasyonuna rastlansa da, Burkitt Lenfomada spesifik bir şekilde BCL-2 molekülü tamamen negatiftir ve yüksek MYC oranına ek olarak hücreye mutlak bir yıkım ve devir hızı verir (yıldızlı gökyüzü paterni). Bu patogeneze çeldirici olarak sunulan Hodgkin'e ait CD15/CD30 fenotipleri ve AML'ye ait blast sayımları B hücre maligniteleriyle sık karıştırılan miyeloid hücresel kavramlardır. Mitotik endeksin rekor seviyelere çıkması t(8;14) artışı zemininde engellenemeyen hücresel DNA tamir defektinin yansımasıdır.

---

### ÇİFT 26 (Benzerlik: 0.72)

**Soru 1 (ID: 1bc02775-5017-4918-9969-f853c2ed142c)**
Soru Kökü: Akut Miyeloid Lösemi (AML) hastalarında görülen genetik translokasyonlardan hangisi spesifik olarak retinoik asit reseptör alfa genini (PML-RARA füzyonu) bozarak yaygın hücre içi granül birikimine ve damariçi pıhtılaşma (DİK) komplikasyonuna yol açar?
Doğru Şık (A): t(15;17)
Açıklama: PML-RARA füzyon genini oluşturan, hücreleri promiyelositik aşamada donduran ve devasa Auer çubukları oluşturarak DİK'i (damariçi pıhtılaşma) tetikleyen majör mutasyon t(15;17)'dir. t(8;21) ve inv(16) farklı AML alt tiplerinin RUNX1/CBFB inhibisyonlu formlarıyken, t(8;14) Burkitt lenfomanın, t(X;18) ise sinovyal sarkomun mutasyonudur. Bu genetik belirteç hedefe yönelik farmakolojik tedavi (ATRA) kurgusunun temelini oluşturur.

**Soru 2 (ID: a1cfb247-c26e-4ae3-bf44-f4d5353dc79a)**
Soru Kökü: Altmış iki yaşındaki bir hastanın rutin kan tetkiklerinde hematokrit %24, trombosit sayısı 25.000/mm³ saptanmıştır. Çekilen kemik iliği aspiratında %80 oranında iğne şeklinde azurofilik granüller içeren atipik hücreler görülmüş, genetik testte PML-RARA füzyon proteini pozitif çıkmıştır. Bu hastanın acil maksillofasiyal cerrahi müdahalesi sırasında karşılaşılabilecek en kritik sistemik komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Yaygın damariçi pıhtılaşma (DİK) kaskadına sekonder masif kanama
Açıklama: PML-RARA mutasyonu ve bol Auer çubuğu içeren hücreler, Akut Promiyelositik Lösemi (APL - t(15;17)) tanısı koydurur. Bu özel AML alt tipinin hücrelerinden kana salınan prokoagülan partiküller, ölümcül bir Yaygın Damariçi Pıhtılaşma (DİK) sürecini tetikler; bu nedenle hasta minör cerrahi işlemlerde dahi durdurulamayan masif koagülopati riski taşır. Damak perforasyonu midline granülomun, zımba deliği kırığı ise miyelomun komplikasyonudur.

---

### ÇİFT 27 (Benzerlik: 0.72)

**Soru 1 (ID: 1bc02775-5017-4918-9969-f853c2ed142c)**
Soru Kökü: Akut Miyeloid Lösemi (AML) hastalarında görülen genetik translokasyonlardan hangisi spesifik olarak retinoik asit reseptör alfa genini (PML-RARA füzyonu) bozarak yaygın hücre içi granül birikimine ve damariçi pıhtılaşma (DİK) komplikasyonuna yol açar?
Doğru Şık (A): t(15;17)
Açıklama: PML-RARA füzyon genini oluşturan, hücreleri promiyelositik aşamada donduran ve devasa Auer çubukları oluşturarak DİK'i (damariçi pıhtılaşma) tetikleyen majör mutasyon t(15;17)'dir. t(8;21) ve inv(16) farklı AML alt tiplerinin RUNX1/CBFB inhibisyonlu formlarıyken, t(8;14) Burkitt lenfomanın, t(X;18) ise sinovyal sarkomun mutasyonudur. Bu genetik belirteç hedefe yönelik farmakolojik tedavi (ATRA) kurgusunun temelini oluşturur.

**Soru 2 (ID: 9bad6fb5-a249-4fc5-a4ec-9636918d342d)**
Soru Kökü: Miyeloblast hücrelerinin sitoplazmasında bulunan 'Auer çubukları' t(15;17) translokasyonuna sahip hastalarda yoğun olarak gözlenir. İlikte lösemik duraklama yaratan bu moleküler defektin yıkılması sürecinde dolaşıma salınan faktörlerin tetiklediği en yıkıcı komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Tüketim koagülopatisi ve damariçi pıhtılaşma (DIC) kaskadı
Açıklama: t(15;17) translokasyonu PML-RARA gen füzyonu ile Akut Promiyelositik Lösemiye (M3) neden olur ve atipik Auer çubuğu granüllerinin dolaşıma prokoagülan ve fibrinolitik faktörler salması hastaları ölümcül Yaygın Damariçi Pıhtılaşma (DIC) sendromuna sokar. Monoklonal antikor presipitasyonu (Bence-Jones) miyelom tablosunda böbrek ve dolaşım patolojisi yaratan güçlü bir çeldiricidir ancak lösemi patogenezinde rol oynamaz. Bu hematolojik oklüzyon ve kanama tablosu miyeloid kökenin granül biyoaktif doğasından gelir.

---

### ÇİFT 28 (Benzerlik: 0.72)

**Soru 1 (ID: 803e7f43-3349-4a07-9159-289e59771d09)**
Soru Kökü: Hematolojik hücre serilerinin neoplastik dönüşümünde ortaya çıkan stoplazmik inklüzyonlar analiz edildiğinde, Auer çubuklarını Birbeck granüllerinden ayıran majör özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Peroksidaz pozitif, iğne şeklinde azurofilik granüller olmaları
Açıklama: Auer çubukları, Akut Miyeloid Lösemi'deki (AML) miyeloblastların içinde görülen, peroksidaz pozitif, iğne şeklinde azurofilik granüllerdir. Birbeck granülleri ise LHH (Langerhans) hastalıklarında görülen, tenis raketi şekilli ve langerin (CD207) proteini içeren ultrastrüktürel organellerdir. Multipl Miyelomdaki birikimler ise Dutcher/Russell cisimcikleridir ve AML veya LHH ile ilişkisi yoktur.

**Soru 2 (ID: 9bad6fb5-a249-4fc5-a4ec-9636918d342d)**
Soru Kökü: Miyeloblast hücrelerinin sitoplazmasında bulunan 'Auer çubukları' t(15;17) translokasyonuna sahip hastalarda yoğun olarak gözlenir. İlikte lösemik duraklama yaratan bu moleküler defektin yıkılması sürecinde dolaşıma salınan faktörlerin tetiklediği en yıkıcı komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Tüketim koagülopatisi ve damariçi pıhtılaşma (DIC) kaskadı
Açıklama: t(15;17) translokasyonu PML-RARA gen füzyonu ile Akut Promiyelositik Lösemiye (M3) neden olur ve atipik Auer çubuğu granüllerinin dolaşıma prokoagülan ve fibrinolitik faktörler salması hastaları ölümcül Yaygın Damariçi Pıhtılaşma (DIC) sendromuna sokar. Monoklonal antikor presipitasyonu (Bence-Jones) miyelom tablosunda böbrek ve dolaşım patolojisi yaratan güçlü bir çeldiricidir ancak lösemi patogenezinde rol oynamaz. Bu hematolojik oklüzyon ve kanama tablosu miyeloid kökenin granül biyoaktif doğasından gelir.

---

### ÇİFT 29 (Benzerlik: 0.71)

**Soru 1 (ID: 02fa7197-76ab-4123-84b1-61ce4e468fe4)**
Soru Kökü: Yirmi iki yaşındaki erkek hastanın kliniğe başvurusunda, son yıllarda alt çenesinin belirgin şekilde büyüdüğü ve dişlerinde aralanmalar olduğu saptanmıştır. Çekilen panoramik radyografide mandibulada belirgin kortikal kalınlaşma ve aşırı reaktif skleroz izlenmiştir. Anamnezinde diş çekimi veya kronik enfeksiyon kaynağı saptanamamıştır. Çene kemiğinde bu tarz yoğun kemik yapımı ile karakterize kronik osteomiyelit formu aşağıdakilerden hangisidir?
A) Pott hastalığı
B) Spina ventoza
C) Garre'nin sklerozan osteomyeliti
D) Sekestrum formasyonu
E) Mazabraud sendromu
Doğru Şık (C): Garre'nin sklerozan osteomyeliti
Açıklama: Garre'nin sklerozan (proliferatif periostitis) osteomyeliti, genç bireylerde özellikle mandibulada görülen kronik düşük virülans osteomyelitidir; abse veya belirgin nekroz olmaksızın yoğun reaktif periosteal kemik depozisyonu (korteks kalınlaşması) ile karakterizedir. Enfeksiyon odağı çoğunlukla gömülü diş veya periodontal hastalıktır; ancak bazen klinik enfeksiyon kaynağı saptanamaz. Pott vertebralar, spina ventoza el parmakları, sekestrum nekrotik kemik parçasıyla ilgilidir.

**Soru 2 (ID: 6efd1b3e-c794-4d40-83cf-64e3782a9f21)**
Soru Kökü: Kronik osteomiyelit vakalarında görülen 'Kortekste etrafında reaktif kemik dokusu bulunan ve kronik inflamasyon olmasına rağmen nötrofil açısından zengin abse' tablosuna ne ad verilir?
A) Sekestrum
B) İnvolukrum
C) Brodie absesi
D) Garre'nin sklerozan osteomyeliti
E) Spina ventoza
Doğru Şık (C): Brodie absesi
Açıklama: Brodie absesi, hematojen osteomyelitin lokalize subakut formudur; kortekste yoğun reaktif kemik dokusuyla çevrili, nötrofil bakımından zengin merkezi bir kavite şeklinde izlenir. Sekestrum nekrotik kemik parçasıdır; involukrum ise seküstrum etrafında oluşan yeni reaktif kemik kabuğudur. Garre'nin sklerozan osteomyeliti ise çenede görülen ve abse olmaksızın diffüz korteks kalınlaşması ile seyreden kronik formdur. Spina ventoza tüberküloz kaynaklı parmak tutulumuna verilen isimdir.

---

### ÇİFT 30 (Benzerlik: 0.71)

**Soru 1 (ID: 32efc2da-51ec-4193-babe-da84615325bd)**
Soru Kökü: Kemik matriksi proteinlerinin kökenleri incelendiğinde; aşağıdakilerden hangisi 'osteoblast kaynaklı proteinler' grubunda yer almayıp, serum konsantre edilen proteinler ailesinden kemiğe ulaşır?
A) Osteonektin
B) Albümin
C) Kemik siyaloproteini
D) Osteokalsin
E) Trombospondin
Doğru Şık (B): Albümin
Açıklama: Albümin, karaciğerde sentezlenen ve kanda dolaşan bir serum proteinidir; kemik matriksinde bulunan albümin, dolaşımdan pasif olarak buraya ulaşır — osteoblast tarafından sentezlenmez. Osteonektin (SPARC), osteokalsin, kemik siyaloproteini ve trombospondin osteoblastlar tarafından aktif olarak sentezlenen ve matriks kalsifikasyonuna katkıda bulunan nonkollajenöz proteinlerdir. Bu ayrım, kemik biyolojisi soru havuzunda standart bir detay olarak bilinir.

**Soru 2 (ID: 478d7e54-ca0e-4ffe-96f6-992bbc2c3441)**
Soru Kökü: Kemik dokusunun organik hücre dışı matriksini (%35) oluşturan 'osteoid'in temel protein bileşeni aşağıdakilerden hangisidir?
A) Tip 2 kollajen
B) Osteokalsin
C) Osteopontin
D) Tip 1 kollajen
E) Fibronektin
Doğru Şık (D): Tip 1 kollajen
Açıklama: Kemik matriksi %65 inorganik (hidroksiapatit) ve %35 organik (osteoid) bileşenden oluşur. Osteoidin yaklaşık %90'ını Tip 1 kollajen oluşturur; bu kollajen ağı mineralizasyon için iskelet görevi görür. Tip 2 kollajen kıkırdağa özgüdür. Osteokalsin (osteoblast kaynaklı, kemik döngüsünün biyokimyasal markeri) ve osteopontin (osteoklast adezyonunu düzenler) osteoidin minör fakat önemli nonkollajenöz proteinleridir. Tip 1 kollajen defektleri OI'ya yol açar.

---

### ÇİFT 31 (Benzerlik: 0.71)

**Soru 1 (ID: 3c79f879-3985-4de4-927a-9c02d3814113)**
Soru Kökü: On beş yaşında erkek hasta, diş etlerinde (gingiva) yaygın şişlik, kanama ve hipertrofi şikayetiyle başvuruyor. Çene radyografisinde litik bir kemik kitlesi izlenmezken, periferik kan yaymasında immatür blast hücreleri saptanıyor. Ağız içi kitle yapan bu agresif hematopoietik tablonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Akut miyeloid lösemi (M5 varyantı)
Açıklama: Oral kavitede spesifik olarak 'diş etini' (gingivayı) infiltre ederek büyüten ve periferik kanda blast tablosuyla (ilik tutulumu) karakterize olan patoloji Akut Miyeloid Lösemi'nin M5 (monositik) varyantıdır. Kuvvetli çeldirici olan Burkitt lenfoma ise yumuşak dokudan ziyade mandibulada (kemik içi) devasa litik lokal kitle yapar ve kemik iliği tutulumu son derece nadirdir. DUS sınav formatı, oral lezyon yapan iki hematopoietik maligniteyi gingiva vs kemik ayrımı üzerinden netleştirir.

**Soru 2 (ID: 687be87b-4fe3-4d6c-9fb6-73748a978b9f)**
Soru Kökü: Altmış beş yaş üstü bir hastada görülen aşağıdaki oral mukoza veya iskelet sistemi bulgularından hangisi, klinisyeni Multipl Miyelom tanısından uzaklaştırıp doğrudan Akut Miyeloid Lösemi (M5) tanısına yönlendirmelidir?
Doğru Şık (B): Diş etlerini örtecek derecede yumuşak dokuyu kaplayan masif lösemik infiltrasyon
Açıklama: AML'nin M5 (monositik) varyantı, lösemik blastların dolaşımdan epitelyal yumuşak dokulara göç etmesi sonucu spesifik olarak gingivada masif büyüme ve infiltrasyon (hipertrofi) yapar. Multipl Miyelom ise yumuşak dokuyu değil, doğrudan kemiği hedef alır ve osteoklastları manipüle ederek 'zımba deliği' benzeri destrüksiyon alanları yaratır. Tümörlerin yumuşak doku vs kemik tropizmi DUS vaka sorularında kesin ayırıcı parametredir.

---

### ÇİFT 32 (Benzerlik: 0.71)

**Soru 1 (ID: ae2c7dc3-a72c-4035-86f6-b550dfa7fb21)**
Soru Kökü: Elli iki yaşında erkek hasta, damağında iki ay önce küçük bir şişlikle başlayan, giderek genişleyen ve kötü koku yayan ilerleyici derin bir ülser şikayetiyle başvuruyor. Alınan insizyonel biyopside; kan damarı duvarlarını infiltre ederek lümeni daraltan atipik lenfositler ve buna sekonder gelişen geniş iskemik nekroz alanları saptanıyor. Bu klinik senaryoda tanımlanan lezyonun hücresel kökeni aşağıdakilerden hangisidir?
Doğru Şık (A): Doğal Öldürücü (NK) ve T lenfosit
Açıklama: Damakta ilerleyici nekrotik ülser ve damar lümenini daraltan 'anjiosentrik' infiltrasyon bulguları, Midline Granülomun (Ekstranodal NK/T-hücreli lenfoma) patognomonik tablosudur. Damar duvarına tropizm gösteren tümör hücreleri lokal iskemik nekroz yaratarak dokuları çürütür; bu yıkım osteoklastik rezorbsiyondan tamamen farklıdır. En güçlü çeldirici olan B lenfosit/plazma hücresi (plazmositom) şıkkı, iskemik nekroz ve perforasyon yapmadığı için bu tabloda ekarte edilir.

**Soru 2 (ID: ef8809f1-57dd-4f78-ab38-4f8311f6eeec)**
Soru Kökü: Ağız içi muayenesinde anterior sert damakta geniş ve kötü kokulu nekrotik bir defekt bulunan, nazal kıkırdağa kadar ulaşan geniş bir oronazal perforasyon tespit edilen hastada ayırıcı tanı yapılmaktadır. Alınan biyopside bol miktarda eozinofil ve makrofaj izlenmesine rağmen dendritik hücre belirteçleri negatiftir. Bu klinik tabloda öncelikle aşağıdaki patolojilerden hangisinden şüphelenilmelidir?
Doğru Şık (D): Midline Granülom
Açıklama: Damaktan başlayıp burun boşluğuna kadar uzanan nekrotik yıkım ve perforasyonlar, anjiosentrik iskemik oklüzyonla ilerleyen Midline Granülomun (NK/T-hücreli lenfoma) baş-boyun bölgesindeki klasik komplikasyonudur. Şıklardaki Eozinofilik Granülom (LHH) kafa kemiklerinde defekt yapabilse de, dendritik hücre belirteçlerinin (CD1a) negatif verilmesi histiyositozları dışlar. Plazmositom ve miyelom bu denli agressif ve hızlı ilerleyen mukozal çürüme (nekroz) yapmaz.

---

### ÇİFT 33 (Benzerlik: 0.71)

**Soru 1 (ID: cec5a6e6-db3a-4566-b71f-ff8437556867)**
Soru Kökü: Midline granülomun biyolojik davranışı ve hücre yüzey belirteçleri ile ilgili olarak;
I. Hücresel temelde NK ve T lenfosit kökenlidir.
II. CD138 pozitif matür B hücrelerinin klonal artışına dayanır.
III. Damar lümenini tıkayarak anjiodestrüktif büyüme gösterir.

ifadelerinden hangileri doğrudur?
Doğru Şık (C): I ve III
Açıklama: Midline granülom, lenfoid hiyerarşide B hücresi değil, Doğal Öldürücü (NK) ve T hücre kökenli bir malignitedir (I doğru). Tümörün ana yıkım mekanizması kan damarlarını boğarak lokal iskemik nekroz oluşturması, yani anjiodestrüktif büyümesidir (III doğru). CD138 pozitifliği matür B hücrelerini (plazma hücreleri) simgeler ve bu profil soliter plazmositoma aittir, midline granüloma değil (II yanlış).

**Soru 2 (ID: e1143942-18be-4ee7-9ae5-b217e514b5df)**
Soru Kökü: Hematolojik neoplaziler ve hücre yüzeyi/içi antijenleri ile ilgili eşleştirmelerden hangisi doğru verilmiştir?
I. CD1a ve Langerin proteini -> Eozinofilik Granülom
II. CD15, CD30 ve RS dev hücresi -> Nodüler Lenfosit Baskın Hodgkin
III. CD138 ve matür plazma hücresi -> Ekstra-osseöz Plazmositom
Doğru Şık (B): I ve III
Açıklama: Eozinofilik granülom immatür dendritik kökenli olduğu için CD1a ve Langerin pozitiftir (I doğru). Ekstra-osseöz plazmositom matür B hücre/plazma hücresi kökenli olduğu için CD138 pozitiftir (III doğru). Ancak CD15/CD30 aktivasyon antijenleri klasik Hodgkin lenfomalar için pozitiftir; aykırı bir tip olan Nodüler Lenfosit Baskın Hodgkin formunda bu belirteçler negatiftir ve CD20 pozitiftir (II yanlış).

---

### ÇİFT 34 (Benzerlik: 0.71)

**Soru 1 (ID: 3c752dfd-171d-4673-9421-439fb337cf0f)**
Soru Kökü: Elli iki yaşındaki erkek hasta, şapkalarının artık başına küçük geldiğini ve son aylarda işitme kaybı yaşamaya başladığını belirterek kliniğe başvuruyor. Muayenede belirgin baş büyümesi (leontiasis ossea) saptanıyor. Laboratuvar tetkiklerinde kalsiyum ve fosfor değerleri normal sınırlarda iken alkalin fosfataz düzeyi belirgin olarak yüksek bulunuyor.
Bu hastanın mevcut zemininde aşağıdaki neoplazilerden hangisinin gelişme riski en az olasıdır?
A) Osteosarkom
B) Dev hücreli onarıcı granülom
C) Fibrosarkom
D) Kondrosarkom
E) Dev hücreli tümör
Doğru Şık (D): Kondrosarkom
Açıklama: Bu tablo Paget hastalığıyla uyumludur. Paget zemininde gelişen sarkomlar arasında osteosarkom (~%50) en sık, ardından fibrosarkom ve kondrosarkom gelir. Dev hücreli tümör de Paget ile ilişkili olarak bildirilmiştir. Ancak kondrosarkom, Paget hastalığında diğerlerine kıyasla çok daha nadir görülen bir komplikasyondur; Paget sarkomları içinde en az olasıdır. Leontiasis ossea (aslan yüzü), başta kafa kemiğinin pagete bağlı aşırı büyümesi, ve yüksek ALP + normal kalsiyum/fosfor Paget'in klasik bulgularıdır.

**Soru 2 (ID: e6182ada-5e24-4f64-bc6a-33bdeec5934a)**
Soru Kökü: Kemik tümörlerinin yaş ve lokalizasyon profilleri incelendiğinde, aşağıdaki tümör-yerleşim bölgesi eşleştirmelerinden hangisi yanlıştır?
A) Dev Hücreli Tümör — Epifiz
B) Kondroblastom — Epifiz
C) Osteosarkom — Metafiz
D) Ewing Sarkomu — Metafiz
E) Osteokondrom — Metafiz
Doğru Şık (D): Ewing Sarkomu — Metafiz
Açıklama: Ewing sarkomu uzun kemiklerin DİAFİZine yerleşir, metafize değil — bu bilgi DUS'ta sıkça sorulan kritik bir ayrım noktasıdır. Osteosarkom metafizi tercih ederken dev hücreli tümör ve kondroblastom her ikisi de epifize yerleşir (kondroblastom aktif büyüme plağı olan hastalarda). Osteokondrom metafizden kaynaklanır. Ewing'in diyafizde soğan zarı (onion skin) periost reaksiyonuyla görülmesi sınav klasiğidir.

---

### ÇİFT 35 (Benzerlik: 0.71)

**Soru 1 (ID: 3c706a0c-48f6-4534-97db-23eb6e1f6125)**
Soru Kökü: Primer kemik lezyonları arasında gerçek bir neoplazi veya gerçek bir kist olmayıp; histopatolojik olarak döşeyici epiteli bulunmayan, multiloküle kan-dolu kistik boşluklar ve ince sellüler septalar barındıran, sıklıkla USP6 overekspresyonunun eşlik ettiği 'psödokistik' kemik patolojisi aşağıdakilerden hangisidir?
A) Basit kemik kisti
B) Osteoblastom
C) Anevrizmal kemik kisti
D) Kondromiksoid fibrom
E) Adamantinoma
Doğru Şık (C): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti (AKK), neoplastik olmayan fakat agresif davranış gösteren, içi kan dolu multiloküler kistik alanlar ve ince fibröz septalardan oluşan 'psödokistik' bir lezyondur. Epitel döşemesi yoktur, kan dolu boşluklar görülür — bu onu gerçek kistlerden ayırır. USP6 (TRE oncogene) overekspresyonu primer AKK vakalarının ~%70'inde saptanmıştır. Basit kemik kisti ise uniloküler, seröz sıvı içerikli ve genellikle asemptomatik bir lezyondur; kist fraktür olduğunda 'düşmüş parça (fallen leaf)' işareti verebilir.

**Soru 2 (ID: 87ec545d-2969-4886-a4c4-1b9b84f6e6bf)**
Soru Kökü: Histopatolojik incelemesinde 'kümes teli (chicken-wire)' benzeri periselüler kalsifikasyon paterni gösteren, tipik olarak uzun kemiklerin epifizinde yerleşen ve en sık 10-20 yaş arası bireylerde izlenen primer benign kemik tümörü aşağıdakilerden hangisidir?
A) Fibröz displazi
B) Anevrizmal kemik kisti
C) Kondroblastom
D) Enkondrom
E) Osteoid osteom
Doğru Şık (C): Kondroblastom
Açıklama: Kondroblastom genç hastalarda (~10-20 yaş), aktif büyüme plağı olan bireylerde epi-fizde görülen nadir benign bir kıkırdak tümörüdür. Patolojik tanısını sağlayan anahtar histolojik özellik, kondroblastların etrafındaki ince periselüler kalsifikasyon ağının 'kümes teli' görünümü oluşturmasıdır. Enkondrom medüller kavitede yerleşir, O-ring belirtisi verir. Fibröz displazide çin harfi/balık oltası trabeküller, anevrizmal kemik kistinde kan dolu boşluklar karakteristiktir.

---

### ÇİFT 36 (Benzerlik: 0.71)

**Soru 1 (ID: 76639c78-2a9a-43da-ba06-29754aa9dac0)**
Soru Kökü: Nodüler Lenfosit Baskın Hodgkin Lenfoma (NLPHL) varyantının hücresel profili ile ilgili aşağıdaki ifadelerden hangisi, diğer klasik Hodgkin tipleriyle **uyumlu değildir**?
Doğru Şık (A): Tümöral RS varyantı hücrelerin CD15 ve CD30 pozitif reaksiyon vermesi
Açıklama: Nodüler Lenfosit Baskın tip (NLPHL), klasik Hodgkin formlarının (Nodüler skleroz, mikst selüler vb.) tamamen zıttı bir immünofenotip çizer: Klasik tipler CD15/CD30 pozitif iken, NLPHL varyantında popcorn hücreleri bu aktivasyon antijenlerini taşımaz (CD15 ve CD30 negatiftir). Bunun yerine, B hücresi kökenini koruduğunu gösteren CD20 belirtecini pozitif verirler. ÖSYM lenfoma sınıflandırmalarındaki bu ezber bozan moleküler istisnaları yüksek sıklıkla test eder.

**Soru 2 (ID: c0f2efbf-58f4-47e1-8251-810e1ecf741e)**
Soru Kökü: En hızlı büyüyen insan tümörü olan Burkitt lenfomanın histopatolojik ve immünolojik profilini inceleyen bir patoloğun, tümör biyopsisinde aşağıdaki belirteçlerden hangisini bulması **beklenmez**?
Doğru Şık (A): Apoptozu durduran BCL-2 molekülünün aşırı pozitifliği
Açıklama: Burkitt lenfoma matür germinal merkez B lenfositlerinden köken alsa da, diğer foliküler lenfomaların aksine hücresel ölümü bloke eden BCL-2 proteinini eksprese etmez ve bu sayede tümör içinde muazzam bir apoptoz ve nükleer yıkım izlenir. En güçlü çeldirici olan BCL-6 gen ekspresyonu ise lenfomanın matür merkez B hücresi (germinal zon) karakterinde olduğunu teyit eder ve pozitiftir. İlikte BCL-2'nin negatifliği ve MYC üzerinden hücresel delilik düzeyinde bölünme yıldızlı gökyüzü paterninin kök sebebidir.

---

### ÇİFT 37 (Benzerlik: 0.71)

**Soru 1 (ID: 66740477-d270-4ace-a8ad-6ed64f0317ab)**
Soru Kökü: Altmış sekiz yaşında kadın hasta, son bir aydır aşırı halsizlik ve diş etlerinde spontan kanamayla seyreden masif şişlik şikayetiyle başvuruyor. Hastanın klinik muayenesinde diş etlerinin neredeyse diş kuronlarını örtecek kadar hipertrofik olduğu izleniyor. Yapılan hemogramda ciddi trombositopeni ve anemi tespit ediliyor. Kemik iliği biyopsisinde peroksidaz-pozitif, iğne şeklinde inklüzyonlar içeren hücreler normal iliğin %45'ini kaplamaktadır. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Akut Miyeloid Lösemi (M5 varyantı)
Açıklama: İleri yaş (>60), kemik iliği yetmezliği (trombositopeni/anemi), kemik iliğinde >%20 blast ve peroksidaz pozitif iğne şekilli Auer çubukları doğrudan Akut Miyeloid Lösemi (AML) tanısına götürür. AML'nin M5 (monositik) farklılaşma gösteren alt tipi, gingivada spesifik olarak masif lösemik infiltrasyona (hipertrofi) neden olur. Multipl Miyelom çenede yumuşak doku değil, zımba deliği tarzı litik kemik destrüksiyonu yaparak klinik ayrım yaratır.

**Soru 2 (ID: a1cfb247-c26e-4ae3-bf44-f4d5353dc79a)**
Soru Kökü: Altmış iki yaşındaki bir hastanın rutin kan tetkiklerinde hematokrit %24, trombosit sayısı 25.000/mm³ saptanmıştır. Çekilen kemik iliği aspiratında %80 oranında iğne şeklinde azurofilik granüller içeren atipik hücreler görülmüş, genetik testte PML-RARA füzyon proteini pozitif çıkmıştır. Bu hastanın acil maksillofasiyal cerrahi müdahalesi sırasında karşılaşılabilecek en kritik sistemik komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Yaygın damariçi pıhtılaşma (DİK) kaskadına sekonder masif kanama
Açıklama: PML-RARA mutasyonu ve bol Auer çubuğu içeren hücreler, Akut Promiyelositik Lösemi (APL - t(15;17)) tanısı koydurur. Bu özel AML alt tipinin hücrelerinden kana salınan prokoagülan partiküller, ölümcül bir Yaygın Damariçi Pıhtılaşma (DİK) sürecini tetikler; bu nedenle hasta minör cerrahi işlemlerde dahi durdurulamayan masif koagülopati riski taşır. Damak perforasyonu midline granülomun, zımba deliği kırığı ise miyelomun komplikasyonudur.

---

### ÇİFT 38 (Benzerlik: 0.71)

**Soru 1 (ID: 03e361b1-d4a4-4db8-8647-069f9d9ae39c)**
Soru Kökü: Osteosarkom kliniği ve prognozu ile ilgili;
I. En sık hematojen yolla akciğere metastaz yapar.
II. Çenede yerleşen ve parosteal (jukstakortikal) tipte olanlar nispeten daha iyi prognozludur.
III. Tümör hücrelerinin korteksi yıkarak periostu kaldırması radyolojik olarak 'Codman üçgeni'ni oluşturur.
ifadelerinden hangileri doğrudur?
A) Yalnız I
B) I ve II
C) I ve III
D) II ve III
E) I, II ve III
Doğru Şık (E): I, II ve III
Açıklama: Üç ifade de doğrudur. Osteosarkom en sık akciğere hematojen metastaz yapar ve bu metastatik hastalık en önemli ölüm nedenidir. Parosteal (jukstakortikal) osteosarkom ve çene osteosarkomu konvansiyonel intramedüller forma kıyasla daha iyi prognoz taşır — bu DUS'ta bilinen bir ayrımdır. Codman üçgeni ise tümörün korteksi yıkarak periostu kaldırmasıyla oluşan reaktif kemik trianguler görünümüdür; osteosarkomun patognomonik radyolojik bulgusudur (güneş ışını ile birlikte).

**Soru 2 (ID: 73fb74cc-3f21-472d-af85-ec89bf393794)**
Soru Kökü: Nidus formasyonu ile karakterize olan osteoid osteom ve osteoblastom lezyonlarının ayırıcı tanısında;
I. Lezyonun boyutu
II. Sıklıkla tuttuğu anatomik bölge
III. Ağrının salisilatlara (aspirin) verdiği klinik yanıt
parametrelerinden hangileri kullanılır?
A) Yalnız I
B) Yalnız II
C) I ve III
D) II ve III
E) I, II ve III
Doğru Şık (E): I, II ve III
Açıklama: Osteoid osteom ile osteoblastom arasındaki ayrımda üç kriter birlikte kullanılır: (I) Boyut — osteoid osteom <2 cm, osteoblastom ≥2 cm; (II) Lokasyon — osteoid osteom tibial korteks, osteoblastom ise posterior vertebral elemanlar (pedikül/lamina) ve sakrumu tercih eder; (III) Aspirin yanıtı — osteoid oseomda prostaglandin aracılı ağrı salisilatlara dramatik yanıt verir, osteoblastomda bu yanıt çok daha az belirgindir. Her üç parametre birlikte değerlendirilmelidir.

---

### ÇİFT 39 (Benzerlik: 0.70)

**Soru 1 (ID: 17105352-1c6b-4e87-80ea-1c15b42e3cbb)**
Soru Kökü: Genç erişkinlik ve adolesan döneminin sık görülen hematopoetik malignitesi Hodgkin Lenfoma, metastatik paterni açısından Non-Hodgkin Lenfomalardan belirgin morfolojik farklar içerir. Buna göre aşağıdakilerden hangisi Hodgkin Lenfomanın (HL) patolojik özelliklerinden **değildir**?
Doğru Şık (B): Waldeyer halkası ve mezenterik abdominal lenf nodlarının hastalıkta sıklıkla tutulması
Açıklama: Hodgkin Lenfomada Waldeyer lenfatik halkası ve bağırsak çevresi (mezenterik) lenf nodu istasyonu tutulumu nadirdir; bu anatomik bölgelerin yoğun olarak atlanarak tutulması patolojik olarak Non-Hodgkin Lenfoma tanısının kuvvetli bir karakteristik bulgusudur (güçlü çeldirici ayrım). Diğer bütün şıklar Hodgkin Lenfomanın klasik tek yönlü, komşuluk bazlı sentripetal yayılım paternini kanıtlayan mutlak kurallardır. Bu farklı yayılış tarzı nedeniyle iki lenfomanın kemoterapiye verdiği lenfoproliferatif yanıt birbirinden ayrı yönetsel aşamalara sahiptir.

**Soru 2 (ID: 76639c78-2a9a-43da-ba06-29754aa9dac0)**
Soru Kökü: Nodüler Lenfosit Baskın Hodgkin Lenfoma (NLPHL) varyantının hücresel profili ile ilgili aşağıdaki ifadelerden hangisi, diğer klasik Hodgkin tipleriyle **uyumlu değildir**?
Doğru Şık (A): Tümöral RS varyantı hücrelerin CD15 ve CD30 pozitif reaksiyon vermesi
Açıklama: Nodüler Lenfosit Baskın tip (NLPHL), klasik Hodgkin formlarının (Nodüler skleroz, mikst selüler vb.) tamamen zıttı bir immünofenotip çizer: Klasik tipler CD15/CD30 pozitif iken, NLPHL varyantında popcorn hücreleri bu aktivasyon antijenlerini taşımaz (CD15 ve CD30 negatiftir). Bunun yerine, B hücresi kökenini koruduğunu gösteren CD20 belirtecini pozitif verirler. ÖSYM lenfoma sınıflandırmalarındaki bu ezber bozan moleküler istisnaları yüksek sıklıkla test eder.

---

### ÇİFT 40 (Benzerlik: 0.70)

**Soru 1 (ID: 18bc09d9-e252-4369-ae98-613f31c52ab3)**
Soru Kökü: Otuz iki yaşında kadın hasta servikal lenfadenopati şikayetiyle başvuruyor. Çıkarılan lenf nodunun histolojik incelemesinde reaktif lenfosit folikülleri zemininde 'patlamış mısır (popcorn) hücreleri' adı verilen atipik histiyositik varyantlar izleniyor. Yapılan immünohistokimyasal boyamada bu atipik varyantların sahip olduğu spesifik yüzey belirteci aşağıdakilerden hangisidir?
Doğru Şık (D): CD20
Açıklama: Nodüler Lenfosit Predominant (NLP) Hodgkin Lenfoma, patlamış mısır varyantlı hücrelerin klasik Hodgkin belirteçleri olan CD15 ve CD30'u kaybetmesi ve tam bir germinal B lenfosit fenotipine (CD20 pozitifliği) dönmesiyle ayrılır. En kafa karıştırıcı çeldiriciler olan CD15 ve CD30, klasik Reed-Sternberg hücrelerinin tanı konfirmasyonunda aranan altın standart iken, NLP tipinde bu gen ekspresyon paterni tümüyle B hücre antijeni lehine değişmiştir. Popcorn varyantı Hodgkin lenfoma grubu içinde atipik seyrin başlıca kanıtıdır.

**Soru 2 (ID: 76639c78-2a9a-43da-ba06-29754aa9dac0)**
Soru Kökü: Nodüler Lenfosit Baskın Hodgkin Lenfoma (NLPHL) varyantının hücresel profili ile ilgili aşağıdaki ifadelerden hangisi, diğer klasik Hodgkin tipleriyle **uyumlu değildir**?
Doğru Şık (A): Tümöral RS varyantı hücrelerin CD15 ve CD30 pozitif reaksiyon vermesi
Açıklama: Nodüler Lenfosit Baskın tip (NLPHL), klasik Hodgkin formlarının (Nodüler skleroz, mikst selüler vb.) tamamen zıttı bir immünofenotip çizer: Klasik tipler CD15/CD30 pozitif iken, NLPHL varyantında popcorn hücreleri bu aktivasyon antijenlerini taşımaz (CD15 ve CD30 negatiftir). Bunun yerine, B hücresi kökenini koruduğunu gösteren CD20 belirtecini pozitif verirler. ÖSYM lenfoma sınıflandırmalarındaki bu ezber bozan moleküler istisnaları yüksek sıklıkla test eder.

---

### ÇİFT 41 (Benzerlik: 0.70)

**Soru 1 (ID: 0ee3b575-3ac6-4be0-ac70-e83132ac0210)**
Soru Kökü: Altmış beş yaşında kadın hasta, damak ve nazal sinüs bölgesinde lokalize, destrüktif büyüme gösteren bir kitle ile başvuruyor. Biyopside monoklonal hücre proliferasyonu izleniyor. Lezyonun immünohistokimyasal incelemesinde CD138 pozitifliği saptanması, aşağıdaki tanılardan hangisini tablonun patogenezinden kesin olarak dışlar?
Doğru Şık (B): Midline granülom
Açıklama: Nazal sinüs ve orofarinks bölgesinde kitle yapan Midline granülom, agresif karakterli bir NK/T hücre lenfomasıdır ve CD138 (plazma hücre markeri) eksprese etmez. Biyopside saptanan CD138 pozitifliği, kitlenin bir B hücre serisi neoplazisi olan Plazmositom lehine olduğunu kanıtlar ve T/NK serisine ait midline granülomu doğrudan eleyici bir veridir. Diş hekimliği lokalizasyonlarında iki majör destrüktif tümör hücresel köken üzerinden bu şekilde ayırt edilir.

**Soru 2 (ID: ae2c7dc3-a72c-4035-86f6-b550dfa7fb21)**
Soru Kökü: Elli iki yaşında erkek hasta, damağında iki ay önce küçük bir şişlikle başlayan, giderek genişleyen ve kötü koku yayan ilerleyici derin bir ülser şikayetiyle başvuruyor. Alınan insizyonel biyopside; kan damarı duvarlarını infiltre ederek lümeni daraltan atipik lenfositler ve buna sekonder gelişen geniş iskemik nekroz alanları saptanıyor. Bu klinik senaryoda tanımlanan lezyonun hücresel kökeni aşağıdakilerden hangisidir?
Doğru Şık (A): Doğal Öldürücü (NK) ve T lenfosit
Açıklama: Damakta ilerleyici nekrotik ülser ve damar lümenini daraltan 'anjiosentrik' infiltrasyon bulguları, Midline Granülomun (Ekstranodal NK/T-hücreli lenfoma) patognomonik tablosudur. Damar duvarına tropizm gösteren tümör hücreleri lokal iskemik nekroz yaratarak dokuları çürütür; bu yıkım osteoklastik rezorbsiyondan tamamen farklıdır. En güçlü çeldirici olan B lenfosit/plazma hücresi (plazmositom) şıkkı, iskemik nekroz ve perforasyon yapmadığı için bu tabloda ekarte edilir.

---

### ÇİFT 42 (Benzerlik: 0.70)

**Soru 1 (ID: 687be87b-4fe3-4d6c-9fb6-73748a978b9f)**
Soru Kökü: Altmış beş yaş üstü bir hastada görülen aşağıdaki oral mukoza veya iskelet sistemi bulgularından hangisi, klinisyeni Multipl Miyelom tanısından uzaklaştırıp doğrudan Akut Miyeloid Lösemi (M5) tanısına yönlendirmelidir?
Doğru Şık (B): Diş etlerini örtecek derecede yumuşak dokuyu kaplayan masif lösemik infiltrasyon
Açıklama: AML'nin M5 (monositik) varyantı, lösemik blastların dolaşımdan epitelyal yumuşak dokulara göç etmesi sonucu spesifik olarak gingivada masif büyüme ve infiltrasyon (hipertrofi) yapar. Multipl Miyelom ise yumuşak dokuyu değil, doğrudan kemiği hedef alır ve osteoklastları manipüle ederek 'zımba deliği' benzeri destrüksiyon alanları yaratır. Tümörlerin yumuşak doku vs kemik tropizmi DUS vaka sorularında kesin ayırıcı parametredir.

**Soru 2 (ID: 6e90b75f-9ced-445e-9032-20a107e9bd1f)**
Soru Kökü: Yetmiş yaşında erkek hasta halsizlik, tekrarlayan pnömoni atakları ve diş etlerinde şişlik, ülserasyon (gingival infiltrasyon) şikayetleriyle geliyor. Periferik kanda ve kemik iliğinde %25 oranında azurofilik granüller içeren granülsüz atipik blastların olduğu görülüyor. Yumuşak dokuyu ve diş etini lokal olarak infiltre eden bu hematolojik tümörün tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Akut miyeloid lösemi monositik diferansiyasyonu (M5)
Açıklama: Akut Miyeloid Lösemi (AML) hücreleri, özellikle lösemik monositik seriye doğru (M5 formu) farklılaşma gösterdiğinde klasik ilik iflası semptomlarına (anemi, enfeksiyon) ek olarak deri ve diş eti dokusuna infiltre olup hipertrofi (lösemi kutis/gingiviti) yaparlar. Aynı anatomik bölgede destrüksiyon yaratan NK/T kökenli Midline granülom güçlü bir çeldiricidir ancak periferik kanda lenfoblastik fırtına değil damar duvarına odaklı (anjiyosentrik) doku nekrozu yapar. Miyeloid soyun granül matürasyonu ve spesifik doku tropizmi teşhiste ayırt edici kuraldır.

---

### ÇİFT 43 (Benzerlik: 0.70)

**Soru 1 (ID: 08749d1e-2fc4-4fe0-b6b9-450e3ff818a1)**
Soru Kökü: Multipl myelomda görülen yaygın 'zımba deliği' litik kemik lezyonlarının ve kafa tası/pelvis destrüksiyonunun temel hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Neoplastik plazma hücrelerinin kemik iliği mikroçevresinde osteoklastik aktiviteyi şiddetlendirip osteoblastik aktiviteyi baskılaması
Açıklama: Multipl myelomda kemik yıkımı tümöral hücrelerin kemiği fiziksel olarak yemesinden değil, salgıladıkları faktörler aracılığıyla ortamdaki osteoklastları şiddetle uyarırken yapımcı osteoblastları tamamen bloke etmelerinden (uncoupling) kaynaklanır. Adayların sıkça yöneldiği Bence-Jones birikimi kemik matriksinde değil, renal tübüler epitelde toksisite yaratır. Kemikte litik zımba deliklerinin varlığı tamamen bu bozuk mikroçevresel hücre dengesine (osteoklast aktivasyonu) bağlıdır.

**Soru 2 (ID: 1ba6d3f6-9cef-4221-b48e-b37c62adbdbe)**
Soru Kökü: Multipl myelom hastalarında en sık görülen ikinci ölüm nedeni olan renal yetmezliğin (böbrek disfonksiyonu) patogenezindeki temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Düşük molekül ağırlıklı immünoglobulin hafif zincirlerinin tübüler epitel hücrelerinde toksik etki yaratması
Açıklama: Multipl myelomda böbrek yetmezliğinin ana mekanizması, plazma hücrelerinin aşırı sentezlediği Bence-Jones proteinlerinin (düşük molekül ağırlıklı hafif zincirler) idrara geçerek renal tübüler epitel hücrelerinde doğrudan toksisite yaratmasıdır. Adaylar genellikle hiperviskozite veya iskemi mekanizmalarına (rulo formasyonu tuzağı) kayma eğilimindedir; oysa yıkım tamamen hücresel atıkların (hafif zincir) tübül düzeyindeki biyokimyasal hasarına dayanır. Bu durum klinikte 'toksik proteinüri' olarak da adlandırılır.

---

### ÇİFT 44 (Benzerlik: 0.70)

**Soru 1 (ID: 6e90b75f-9ced-445e-9032-20a107e9bd1f)**
Soru Kökü: Yetmiş yaşında erkek hasta halsizlik, tekrarlayan pnömoni atakları ve diş etlerinde şişlik, ülserasyon (gingival infiltrasyon) şikayetleriyle geliyor. Periferik kanda ve kemik iliğinde %25 oranında azurofilik granüller içeren granülsüz atipik blastların olduğu görülüyor. Yumuşak dokuyu ve diş etini lokal olarak infiltre eden bu hematolojik tümörün tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Akut miyeloid lösemi monositik diferansiyasyonu (M5)
Açıklama: Akut Miyeloid Lösemi (AML) hücreleri, özellikle lösemik monositik seriye doğru (M5 formu) farklılaşma gösterdiğinde klasik ilik iflası semptomlarına (anemi, enfeksiyon) ek olarak deri ve diş eti dokusuna infiltre olup hipertrofi (lösemi kutis/gingiviti) yaparlar. Aynı anatomik bölgede destrüksiyon yaratan NK/T kökenli Midline granülom güçlü bir çeldiricidir ancak periferik kanda lenfoblastik fırtına değil damar duvarına odaklı (anjiyosentrik) doku nekrozu yapar. Miyeloid soyun granül matürasyonu ve spesifik doku tropizmi teşhiste ayırt edici kuraldır.

**Soru 2 (ID: a1cfb247-c26e-4ae3-bf44-f4d5353dc79a)**
Soru Kökü: Altmış iki yaşındaki bir hastanın rutin kan tetkiklerinde hematokrit %24, trombosit sayısı 25.000/mm³ saptanmıştır. Çekilen kemik iliği aspiratında %80 oranında iğne şeklinde azurofilik granüller içeren atipik hücreler görülmüş, genetik testte PML-RARA füzyon proteini pozitif çıkmıştır. Bu hastanın acil maksillofasiyal cerrahi müdahalesi sırasında karşılaşılabilecek en kritik sistemik komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Yaygın damariçi pıhtılaşma (DİK) kaskadına sekonder masif kanama
Açıklama: PML-RARA mutasyonu ve bol Auer çubuğu içeren hücreler, Akut Promiyelositik Lösemi (APL - t(15;17)) tanısı koydurur. Bu özel AML alt tipinin hücrelerinden kana salınan prokoagülan partiküller, ölümcül bir Yaygın Damariçi Pıhtılaşma (DİK) sürecini tetikler; bu nedenle hasta minör cerrahi işlemlerde dahi durdurulamayan masif koagülopati riski taşır. Damak perforasyonu midline granülomun, zımba deliği kırığı ise miyelomun komplikasyonudur.

---

### ÇİFT 45 (Benzerlik: 0.70)

**Soru 1 (ID: 3c752dfd-171d-4673-9421-439fb337cf0f)**
Soru Kökü: Elli iki yaşındaki erkek hasta, şapkalarının artık başına küçük geldiğini ve son aylarda işitme kaybı yaşamaya başladığını belirterek kliniğe başvuruyor. Muayenede belirgin baş büyümesi (leontiasis ossea) saptanıyor. Laboratuvar tetkiklerinde kalsiyum ve fosfor değerleri normal sınırlarda iken alkalin fosfataz düzeyi belirgin olarak yüksek bulunuyor.
Bu hastanın mevcut zemininde aşağıdaki neoplazilerden hangisinin gelişme riski en az olasıdır?
A) Osteosarkom
B) Dev hücreli onarıcı granülom
C) Fibrosarkom
D) Kondrosarkom
E) Dev hücreli tümör
Doğru Şık (D): Kondrosarkom
Açıklama: Bu tablo Paget hastalığıyla uyumludur. Paget zemininde gelişen sarkomlar arasında osteosarkom (~%50) en sık, ardından fibrosarkom ve kondrosarkom gelir. Dev hücreli tümör de Paget ile ilişkili olarak bildirilmiştir. Ancak kondrosarkom, Paget hastalığında diğerlerine kıyasla çok daha nadir görülen bir komplikasyondur; Paget sarkomları içinde en az olasıdır. Leontiasis ossea (aslan yüzü), başta kafa kemiğinin pagete bağlı aşırı büyümesi, ve yüksek ALP + normal kalsiyum/fosfor Paget'in klasik bulgularıdır.

**Soru 2 (ID: 87ec545d-2969-4886-a4c4-1b9b84f6e6bf)**
Soru Kökü: Histopatolojik incelemesinde 'kümes teli (chicken-wire)' benzeri periselüler kalsifikasyon paterni gösteren, tipik olarak uzun kemiklerin epifizinde yerleşen ve en sık 10-20 yaş arası bireylerde izlenen primer benign kemik tümörü aşağıdakilerden hangisidir?
A) Fibröz displazi
B) Anevrizmal kemik kisti
C) Kondroblastom
D) Enkondrom
E) Osteoid osteom
Doğru Şık (C): Kondroblastom
Açıklama: Kondroblastom genç hastalarda (~10-20 yaş), aktif büyüme plağı olan bireylerde epi-fizde görülen nadir benign bir kıkırdak tümörüdür. Patolojik tanısını sağlayan anahtar histolojik özellik, kondroblastların etrafındaki ince periselüler kalsifikasyon ağının 'kümes teli' görünümü oluşturmasıdır. Enkondrom medüller kavitede yerleşir, O-ring belirtisi verir. Fibröz displazide çin harfi/balık oltası trabeküller, anevrizmal kemik kistinde kan dolu boşluklar karakteristiktir.

---

### ÇİFT 46 (Benzerlik: 0.70)

**Soru 1 (ID: 07261713-4490-4fd3-8f54-9cee05ca8daa)**
Soru Kökü: Yirmi dört yaşında erkek hastanın mandibulasında lokal ağrı ve hassasiyet şikayetiyle çekilen radyografisinde medüller kavite yerleşimli sınırları belirgin unifokal litik bir lezyon saptanmıştır. Lezyonun küretaj materyalinde hücrelerin CD1a pozitif olduğu ve Langerin proteinine sahip elektron-yoğun organeller içerdiği gözlenmiştir. Bu hastanın lezyon bölgesindeki hücresel mikroçevresinde sayıca en fazla (dominant) olan hücre grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Reaktif eozinofiller
Açıklama: CD1a pozitifliği ve Langerin içeren Birbeck granülleri lezyonun Eozinofilik Granülom (LHH) olduğunu kanıtlar. Bu tümörün karakteristik bir mikroçevre paradoksu vardır: Kitleyi başlatan Langerhans hücreleri olsa da, salgıladıkları kemokinler ortama devasa miktarda eozinofil çeker ve mikroskopta sayıca en kalabalık (baskın) hücre reaktif eozinofillerdir. Bu durum, Hodgkin lenfomada dev RS hücrelerinin etrafını reaktif lenfositlerin sarması mekanizmasına tam olarak benzer.

**Soru 2 (ID: 61115fc4-250a-4d4d-b660-42729e98e981)**
Soru Kökü: Eozinofilik granülom vakasında alınan biyopsi materyalinin mikroskobik incelemesinde, aşağıdaki hücre tiplerinden hangisinin ortamdaki sayıca en yüksek hücre grubunu (baskın popülasyonu) oluşturması **en az olasıdır**?
Doğru Şık (C): Neoplastik Langerhans hücreleri
Açıklama: Eozinofilik granülomda, hücre proliferasyonunun genetik kaynağı Langerhans hücreleri (immatür dendritik klonlar) olmasına rağmen, biyopsideki sayıca en baskın ve kalabalık hücre grubu bizzat neoplastik Langerhans hücreleri değildir. Bu hücrelerin salgıladığı kemokinlerle ortam tamamen reaktif inflamatuvar hücreler, özellikle de eozinofiller ile sarılır. Histopatolojik zeminin karsinomlardan farklı olarak reaktif hücrelerden örülü olması LHH spektrumunun ana paradoksudur.

---

### ÇİFT 47 (Benzerlik: 0.70)

**Soru 1 (ID: 66740477-d270-4ace-a8ad-6ed64f0317ab)**
Soru Kökü: Altmış sekiz yaşında kadın hasta, son bir aydır aşırı halsizlik ve diş etlerinde spontan kanamayla seyreden masif şişlik şikayetiyle başvuruyor. Hastanın klinik muayenesinde diş etlerinin neredeyse diş kuronlarını örtecek kadar hipertrofik olduğu izleniyor. Yapılan hemogramda ciddi trombositopeni ve anemi tespit ediliyor. Kemik iliği biyopsisinde peroksidaz-pozitif, iğne şeklinde inklüzyonlar içeren hücreler normal iliğin %45'ini kaplamaktadır. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Akut Miyeloid Lösemi (M5 varyantı)
Açıklama: İleri yaş (>60), kemik iliği yetmezliği (trombositopeni/anemi), kemik iliğinde >%20 blast ve peroksidaz pozitif iğne şekilli Auer çubukları doğrudan Akut Miyeloid Lösemi (AML) tanısına götürür. AML'nin M5 (monositik) farklılaşma gösteren alt tipi, gingivada spesifik olarak masif lösemik infiltrasyona (hipertrofi) neden olur. Multipl Miyelom çenede yumuşak doku değil, zımba deliği tarzı litik kemik destrüksiyonu yaparak klinik ayrım yaratır.

**Soru 2 (ID: 687be87b-4fe3-4d6c-9fb6-73748a978b9f)**
Soru Kökü: Altmış beş yaş üstü bir hastada görülen aşağıdaki oral mukoza veya iskelet sistemi bulgularından hangisi, klinisyeni Multipl Miyelom tanısından uzaklaştırıp doğrudan Akut Miyeloid Lösemi (M5) tanısına yönlendirmelidir?
Doğru Şık (B): Diş etlerini örtecek derecede yumuşak dokuyu kaplayan masif lösemik infiltrasyon
Açıklama: AML'nin M5 (monositik) varyantı, lösemik blastların dolaşımdan epitelyal yumuşak dokulara göç etmesi sonucu spesifik olarak gingivada masif büyüme ve infiltrasyon (hipertrofi) yapar. Multipl Miyelom ise yumuşak dokuyu değil, doğrudan kemiği hedef alır ve osteoklastları manipüle ederek 'zımba deliği' benzeri destrüksiyon alanları yaratır. Tümörlerin yumuşak doku vs kemik tropizmi DUS vaka sorularında kesin ayırıcı parametredir.

---

### ÇİFT 48 (Benzerlik: 0.70)

**Soru 1 (ID: 2911b616-f5aa-4df5-b82a-b832ce7f2cef)**
Soru Kökü: Aşağıdakilerden hangisi Paget hastalığının (osteitis deformans) klinik ve histopatolojik özellikleri arasında yer almaz?
A) İdrarda kemik yıkımını gösteren hidroksiprolin atılımında artış
B) Kafa kemiklerinde radyografik olarak 'atılmış pamuk' görüntüsü
C) Kemik yapımını gösteren alkalin fosfataz enzim düzeyinde azalma
D) Sklerotik fazda patognomonik mozaik patern
E) Kafa tabanı invajinasyonuna bağlı kafa çiftleri basısı ve sağırlık
Doğru Şık (C): Kemik yapımını gösteren alkalin fosfataz enzim düzeyinde azalma
Açıklama: Paget hastalığında artmış osteoklast ve osteoblast aktivitesi nedeniyle kemik döngüsü aşırı hızlanır; bu yüzden serum alkalin fosfataz (ALP) düzeyi belirgin ARTAR, azalmaz — C şıkkı yanlış ifadedir. Hidroksiprolin kollajen yıkım ürünü olarak idrarda yükselir. Sklerotik fazda çimento çizgileri ile çevrili düzensiz lamelar kemik paketleri mozaik (köstebek işi) görünüm oluşturur. Kafa tabanının pagete bağlı büyümesi platibaziye yol açarak sinir foramina daralmasına ve işitme kaybına neden olabilir.

**Soru 2 (ID: 75d41672-d732-4f02-9059-cc35f0ca6ec0)**
Soru Kökü: Tipik olarak kemik iliğini oblitere edip ekstra-medüller hematopoeze (hepatosplenomegali) sebep olan, radyolojik olarak kemiklerde Erlenmayer-flask deformitesi yaratan ve kranial foraminaların daralmasına bağlı fasiyal paralizi / sağırlık gibi bulgular veren hastalık aşağıdakilerden hangisidir?
A) Osteogenezis İmperfekta
B) Paget Hastalığı
C) Akondroplazi
D) Osteopetrozis
E) Raşitizm
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis ('mermer kemik hastalığı'), osteoklast fonksiyon bozukluğuna (en sık karbonik anhidraz II eksikliği) bağlı kemik yıkımının durması ve remodeling bozukluğuyla karakterizedir. Medüller kavitenin fibrotik ve sklerotik kemikle dolması: (1) kemik iliği yetersizliği → pansitopeni + ekstramedüller hematopoez (hepatosplenomegali); (2) foramen daralması → kranial sinir basısı; (3) Erlenmayer-flask deformitesi (metafizdeki koni şeklindeki genişleme bozukluğu) ile sonuçlanır. Paget hastalığı kırılgan değil kalın kemik yapar; OI'da kırılgan ince kemikler söz konusudur.

---

### ÇİFT 49 (Benzerlik: 0.70)

**Soru 1 (ID: 3c752dfd-171d-4673-9421-439fb337cf0f)**
Soru Kökü: Elli iki yaşındaki erkek hasta, şapkalarının artık başına küçük geldiğini ve son aylarda işitme kaybı yaşamaya başladığını belirterek kliniğe başvuruyor. Muayenede belirgin baş büyümesi (leontiasis ossea) saptanıyor. Laboratuvar tetkiklerinde kalsiyum ve fosfor değerleri normal sınırlarda iken alkalin fosfataz düzeyi belirgin olarak yüksek bulunuyor.
Bu hastanın mevcut zemininde aşağıdaki neoplazilerden hangisinin gelişme riski en az olasıdır?
A) Osteosarkom
B) Dev hücreli onarıcı granülom
C) Fibrosarkom
D) Kondrosarkom
E) Dev hücreli tümör
Doğru Şık (D): Kondrosarkom
Açıklama: Bu tablo Paget hastalığıyla uyumludur. Paget zemininde gelişen sarkomlar arasında osteosarkom (~%50) en sık, ardından fibrosarkom ve kondrosarkom gelir. Dev hücreli tümör de Paget ile ilişkili olarak bildirilmiştir. Ancak kondrosarkom, Paget hastalığında diğerlerine kıyasla çok daha nadir görülen bir komplikasyondur; Paget sarkomları içinde en az olasıdır. Leontiasis ossea (aslan yüzü), başta kafa kemiğinin pagete bağlı aşırı büyümesi, ve yüksek ALP + normal kalsiyum/fosfor Paget'in klasik bulgularıdır.

**Soru 2 (ID: 63b795ee-639e-4caa-b4b6-348fd685656d)**
Soru Kökü: Yüz bölgesinde asimetri ve ağrısız sertlik şikayetiyle başvuran hastanın radyografisinde çenede izole, yoğun radyoopak kitle izleniyor. Anamnezinde intestinal polipler nedeniyle tedavi gördüğü ve cildinde dezmoid tümörleri olduğu öğreniliyor. Olası tanıda yer alan bu kemik lezyonlarının malign transformasyon potansiyeli nasıldır?
A) Radyoterapi uygulanırsa hızla sarkoma dönüşürler
B) Olguların üçte birinde yüksek dereceli kondrosarkoma dönüşürler
C) Sıklıkla spontan olarak Ewing sarkomuna dejenere olurlar
D) Malign transformasyon (sarkoma dönüşüm) riski yoktur
E) Sadece multipl yerleşimlilerde osteosarkoma dönüşüm beklenir
Doğru Şık (D): Malign transformasyon (sarkoma dönüşüm) riski yoktur
Açıklama: Gardner sendromu (FAP varyantı), APC gen mutasyonuna bağlı intestinal polipozis + osteomlar + deri fibromları/dezmoid tümörler üçlüsüdür. Osteomlar paranazal sinüsler ve mandibulada görülen, tamamen benign, malign transformasyon potansiyeli olmayan iyi diferansiye kemik tümörleridir. Gardner sendromu içindeki asıl malignite riski intestinal polipler kaynaklı kolorektal karsinomadır. Osteomların kendisi sarkomatöz dönüşüm göstermez — D doğrudur.

---

### ÇİFT 50 (Benzerlik: 0.70)

**Soru 1 (ID: 1257fa26-17fb-4e49-9378-07534889d388)**
Soru Kökü: Reed-Sternberg hücrelerinin mevcudiyetiyle karakterize Hodgkin Lenfomanın (HL) en sık görülen klasik alt tipi olan 'Nodüler skleroz' ile ilgili aşağıdaki klinik ve patolojik durumlardan hangisi **beklenmez**?
Doğru Şık (C): Histopatolojik dokuda yüksek oranlarda Epstein-Barr Virüs (EBV) pozitifliği
Açıklama: Hodgkin lenfoma tipleri arasında en yaygın olan Nodüler Skleroz formu, diğer HL alt tiplerinden farklı olarak karakterize edici biçimde EBV (Epstein-Barr Virüs) enfeksiyonu açısından negatiftir. EBV varlığı, bilhassa HIV hastalarında sık görülen Lenfositten Fakir alt tipte ve Mikst Selüler tipte (%70) pozitif izlenen çok güçlü bir ayırıcı hücresel çeldiricidir. Diğer taraftan mediastinal lokalizasyon ve fibröz bantlar klinik-radyolojik tanıda nodüler sklerozun alametifarikasıdır.

**Soru 2 (ID: 8b374165-bf41-4408-9f8c-d158b4fdf8b0)**
Soru Kökü: Hodgkin lenfomanın klinik seyri ve metastatik yayılım paterniyle ilgili aşağıdaki ifadelerden hangisi doğru değildir?
Doğru Şık (E): Erken dönemde Waldeyer halkası ve mezenterik lenf nodu tutulumu yapma eğilimindedir.
Açıklama: Hodgkin lenfoma anatomik komşuluk izleyerek düzenli bir yayılım gösterir ve Waldeyer halkası ile mezenterik lenf nodlarını tutma eğilimi göstermez. Waldeyer halkası ve mezenterik tutulum, lenfatik zinciri atlayarak yayılma özelliğiyle bilinen Non-Hodgkin Lenfomalara (NHL) özgü bir klinik davranıştır. Diğer şıklar Hodgkin lenfomanın aksiyel yerleşimini, reaktif hücre hakimiyetini ve B-hücre belirteç kaybını doğru tanımlar.

---

### ÇİFT 51 (Benzerlik: 0.70)

**Soru 1 (ID: 87ec545d-2969-4886-a4c4-1b9b84f6e6bf)**
Soru Kökü: Histopatolojik incelemesinde 'kümes teli (chicken-wire)' benzeri periselüler kalsifikasyon paterni gösteren, tipik olarak uzun kemiklerin epifizinde yerleşen ve en sık 10-20 yaş arası bireylerde izlenen primer benign kemik tümörü aşağıdakilerden hangisidir?
A) Fibröz displazi
B) Anevrizmal kemik kisti
C) Kondroblastom
D) Enkondrom
E) Osteoid osteom
Doğru Şık (C): Kondroblastom
Açıklama: Kondroblastom genç hastalarda (~10-20 yaş), aktif büyüme plağı olan bireylerde epi-fizde görülen nadir benign bir kıkırdak tümörüdür. Patolojik tanısını sağlayan anahtar histolojik özellik, kondroblastların etrafındaki ince periselüler kalsifikasyon ağının 'kümes teli' görünümü oluşturmasıdır. Enkondrom medüller kavitede yerleşir, O-ring belirtisi verir. Fibröz displazide çin harfi/balık oltası trabeküller, anevrizmal kemik kistinde kan dolu boşluklar karakteristiktir.

**Soru 2 (ID: e6182ada-5e24-4f64-bc6a-33bdeec5934a)**
Soru Kökü: Kemik tümörlerinin yaş ve lokalizasyon profilleri incelendiğinde, aşağıdaki tümör-yerleşim bölgesi eşleştirmelerinden hangisi yanlıştır?
A) Dev Hücreli Tümör — Epifiz
B) Kondroblastom — Epifiz
C) Osteosarkom — Metafiz
D) Ewing Sarkomu — Metafiz
E) Osteokondrom — Metafiz
Doğru Şık (D): Ewing Sarkomu — Metafiz
Açıklama: Ewing sarkomu uzun kemiklerin DİAFİZine yerleşir, metafize değil — bu bilgi DUS'ta sıkça sorulan kritik bir ayrım noktasıdır. Osteosarkom metafizi tercih ederken dev hücreli tümör ve kondroblastom her ikisi de epifize yerleşir (kondroblastom aktif büyüme plağı olan hastalarda). Osteokondrom metafizden kaynaklanır. Ewing'in diyafizde soğan zarı (onion skin) periost reaksiyonuyla görülmesi sınav klasiğidir.

---

### ÇİFT 52 (Benzerlik: 0.69)

**Soru 1 (ID: ec82520a-c6b1-4767-bc74-94c336fb7934)**
Soru Kökü: Aşağıdakilerden hangisi kondrosarkomların genel davranış ve yerleşim özellikleri için yanlıştır?
A) Pelvis, omuz, kosta ve proksimal femur en sık tutulan bölgelerdir.
B) Konvansiyonel tipi hiyalin kıkırdak üretir.
C) Distal ekstremitelerde ve el falankslarında sıkça görülür.
D) Berrak (şeffaf) hücreli varyantı tipik olarak epifize yerleşir.
E) Mezenkimal varyantı küçük yuvarlak hücreler içerdiğinden Ewing sarkomu taklit edebilir.
Doğru Şık (C): Distal ekstremitelerde ve el falankslarında sıkça görülür.
Açıklama: Kondrosarkom aksiyel iskelet ve proksimal ekstremiteleri (pelvis, omuz, proksimal femur, kosta) tercih eden bir malign kıkırdak tümörüdür; el falanksleri ve distal ekstremiteler tipik lokalizasyonu değildir. El falankslarındaki enkondromlar (Ollier hastalığı) kondrosarkoma transformasyon riski taşısa da kondrosarkomun kendisi distal kesimleri nadiren tutar. Berrak hücreli varyant gerçekten epifizde görülür; mezenkimal varyant küçük yuvarlak hücre morfolojisiyle Ewing sarkomu ile karışabilir.

**Soru 2 (ID: f54de4d4-b97e-4499-98f6-8a9d3a857336)**
Soru Kökü: Onaltı yaşındaki erkek hasta, sağ diz çevresinde ağrısız, sert bir şişlik şikayetiyle başvuruyor. Çekilen radyografide, distal femurun metafiz bölgesinde, medüller kavite ile devamlılık gösteren, üzerinde hiyalin kıkırdak başlık bulunan kemiksi bir çıkıntı izleniyor. Genetik analizde EXT1 gen mutasyonu saptanıyor.
Bu hasta için en olası tanı aşağıdakilerden hangisidir?
A) Kondroblastom
B) Enkondrom
C) Osteokondrom
D) Osteosarkom
E) Ewing Sarkom
Doğru Şık (C): Osteokondrom
Açıklama: Osteokondrom (ekzostoz), en sık görülen benign kemik tümörüdür; metafizden kaynaklanır, medüller kaviteyle devamlılığı vardır ve üzerinde hiyalin kıkırdak başlık taşır. Multipl herediter ekzostozis (MHE) durumunda EXT1 veya EXT2 gen mutasyonları tanımlıdır. Soliter osteokondromlarda malign transformasyon riski <%1 iken MHE'de bu oran artar. Kondroblastom epifize yerleşir ve kümes teli kalsifikasyonu gösterir; Ewing sarkomu ise diyafize yerleşir ve soğan zarı periost reaksiyonu ile karakterizedir.

---

### ÇİFT 53 (Benzerlik: 0.69)

**Soru 1 (ID: 08553fa6-858c-4804-b080-92200e64c93e)**
Soru Kökü: Altmış beş yaşındaki erkek hasta idrar çıkışında artış, letarji ve sırtta dayanılmaz kemik ağrılarıyla acil servise geliyor. Kafa grafisinde zımba ile delinmiş gibi çok sayıda küçük osteolitik odak görülüyor ve serum IgG seviyesi >3 g/dL saptanıyor. Bu plazma hücre neoplazisine sahip olan hastalarda fatal sonlanan birincil morbidite mekanizması (en sık ölüm nedeni) aşağıdakilerden hangisidir?
Doğru Şık (A): Hümoral bağışıklık düşüklüğüne sekonder bakteriyel enfeksiyonlar
Açıklama: Multipl miyelomda tek bir M proteininin abartılı üretimi nedeniyle immün sistemin normal antikor (poliklonal Ig) varyetesi çöker ve bu immünosupresif zemin sekonder bakteriyel enfeksiyonları bu hastaların birincil ölüm nedeni haline getirir. Böbrek yetmezliği Bence-Jones proteinlerinin yarattığı tübüler harabiyet ile ilişkili olup güçlü bir çeldiricidir ve en sık ikinci ölüm sebebi olarak klinik spektruma katılır. Litik zımba deliği lezyonlar morfolojiyi bozan ancak akut mortaliteden ziyade kemik yapısını zayıflatan ikincil belirtilerdir.

**Soru 2 (ID: 263ee436-5ab2-4d8a-a664-ac4277f05f18)**
Soru Kökü: Yetmiş yaşında erkek hasta, son haftalarda giderek artan konfüzyon, letarji, kabızlık ve sık idrara çıkma (poliüri) şikayetleriyle başvuruyor. Hastanın anamnezinden multipl myelom tanısı ile takip edildiği öğreniliyor. Bu hastada izlenen akut semptom kompleksinin primer nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Yaygın kemik rezorpsiyonu sonucunda kana karışan kalsiyumun yarattığı hiperkalsemi
Açıklama: Sürekli kemik yıkımı ile dolaşıma salınan yüksek oranda kalsiyum (hiperkalsemi); santral sinir sistemini deprese ederek konfüzyon ve letarjiye, gastrointestinal sistemi etkileyerek kabızlığa ve böbrek konsantrasyon yeteneğini bozarak poliüriye neden olur. Böbrek yetmezliği tablosu Bence-Jones toksisitesine bağlı gelişse de poliüri ve kabızlığın akut faili kalsiyum iyonudur. Bu kaskad, myelomun sekonder sistemik hasarlarının klasik klinik görünümüdür.

---

### ÇİFT 54 (Benzerlik: 0.69)

**Soru 1 (ID: 1257fa26-17fb-4e49-9378-07534889d388)**
Soru Kökü: Reed-Sternberg hücrelerinin mevcudiyetiyle karakterize Hodgkin Lenfomanın (HL) en sık görülen klasik alt tipi olan 'Nodüler skleroz' ile ilgili aşağıdaki klinik ve patolojik durumlardan hangisi **beklenmez**?
Doğru Şık (C): Histopatolojik dokuda yüksek oranlarda Epstein-Barr Virüs (EBV) pozitifliği
Açıklama: Hodgkin lenfoma tipleri arasında en yaygın olan Nodüler Skleroz formu, diğer HL alt tiplerinden farklı olarak karakterize edici biçimde EBV (Epstein-Barr Virüs) enfeksiyonu açısından negatiftir. EBV varlığı, bilhassa HIV hastalarında sık görülen Lenfositten Fakir alt tipte ve Mikst Selüler tipte (%70) pozitif izlenen çok güçlü bir ayırıcı hücresel çeldiricidir. Diğer taraftan mediastinal lokalizasyon ve fibröz bantlar klinik-radyolojik tanıda nodüler sklerozun alametifarikasıdır.

**Soru 2 (ID: 76639c78-2a9a-43da-ba06-29754aa9dac0)**
Soru Kökü: Nodüler Lenfosit Baskın Hodgkin Lenfoma (NLPHL) varyantının hücresel profili ile ilgili aşağıdaki ifadelerden hangisi, diğer klasik Hodgkin tipleriyle **uyumlu değildir**?
Doğru Şık (A): Tümöral RS varyantı hücrelerin CD15 ve CD30 pozitif reaksiyon vermesi
Açıklama: Nodüler Lenfosit Baskın tip (NLPHL), klasik Hodgkin formlarının (Nodüler skleroz, mikst selüler vb.) tamamen zıttı bir immünofenotip çizer: Klasik tipler CD15/CD30 pozitif iken, NLPHL varyantında popcorn hücreleri bu aktivasyon antijenlerini taşımaz (CD15 ve CD30 negatiftir). Bunun yerine, B hücresi kökenini koruduğunu gösteren CD20 belirtecini pozitif verirler. ÖSYM lenfoma sınıflandırmalarındaki bu ezber bozan moleküler istisnaları yüksek sıklıkla test eder.

---

