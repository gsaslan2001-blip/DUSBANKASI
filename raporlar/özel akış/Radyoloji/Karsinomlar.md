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

**Soru 1 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

**Soru 2 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

---

### ÇİFT 2 (Benzerlik: 0.80)

**Soru 1 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

**Soru 2 (ID: c7757ab0-fc33-457e-9711-7ada7850fb09)**
Soru Kökü: Kırk yedi yaşında erkek hasta, çene ekleminde anormal fonksiyon şikayetiyle muayeneye alınmıştır. Radyografide mandibula kondilinden kaynaklanan, mikst radyolüsent-radyopak karakterli (güve yeniği), yavaş büyüyen ve kortekse dik güneş ışını tarzı periosteal yeni kemik reaksiyonu gösteren bir kitle saptanmıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kondrosarkom
Açıklama: Kondrosarkom, 40'lı yaşların sonlarında (yaklaşık 47 yaş) sık görülen, yavaş büyüyen, kondil ve koronoid prosesi tercih eden, mikst kalsifikasyon paternine ve spesifik periferik güneş ışını tarzı periost reaksiyonuna sahip bir sarkomdur. TMJ bölgesini tuttuğu için eklem disfonksiyonu tipiktir. Osteosarkoma çok benzer ancak kalsifikasyon odaklarındaki yoğunluk ve yavaş seyri ile karakterizedir.

---

### ÇİFT 3 (Benzerlik: 0.79)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

---

### ÇİFT 4 (Benzerlik: 0.79)

**Soru 1 (ID: 5542328d-6c2c-4efa-bc1d-d67c53233bf7)**
Soru Kökü: Çene kemiklerinde radyolüsent destrüktif kitle saptanan 18 yaşındaki bir hastada ayırıcı tanıda Ewing sarkomu ve Eozinofilik granülom düşünülmektedir. Aşağıdaki radyolojik bulgulardan hangisi, tanıyı Ewing sarkomundan çok Eozinofilik granüloma yaklaştırır?
Doğru Şık (B): Laminar periosteal kemik reaksiyonunun görülmesi
Açıklama: Çenenin aynı kısmında oluşan eozinofilik granülom da Ewing sarkomu gibi destrüktif bir ilerleme gösterir ancak eozinofilik granülom spesifik olarak laminar periosteal kemik reaksiyonu gösterirken, Ewing sarkomunda bu laminar tarz görülmez. Ewing sarkomunda daha çok Codman üçgeni veya güneş ışını (sun ray) şeklinde sekonder kemik formasyonları beklenir.

**Soru 2 (ID: 6b644b2e-4246-4867-ae58-33acdd0dbad7)**
Soru Kökü: Çene kemiğinde Ewing sarkomu tespit edilen bir hastanın radyolojik ayırıcı tanısında, her iki lezyon da litik dekstrüksiyon yapmasına rağmen, enfeksiyon kaynaklı osteomyeliti destekleyen ve Ewing sarkomunda görülmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Radyolüsent lezyon sınırları içerisinde sekestr görülmesi
Açıklama: Osteomyelit ve Ewing sarkomunun her ikisi de düzensiz radyolüsensi ve sekonder periost reaksiyonu yapabilir. Ancak osteomyelitte inflamasyona bağlı olarak beslenmesi bozulan ölü kemik adacıkları (sekestr) litik alan içerisinde radyoopak kitleler olarak izlenirken, Ewing sarkomunda nekrotik kemik sekestrasyonu görülmez.

---

### ÇİFT 5 (Benzerlik: 0.79)

**Soru 1 (ID: 201d94a5-6ea9-42cd-b789-b8130233673b)**
Soru Kökü: Mandibula posterior bölgede kötü kokulu akıntı ve ağrılı şişlik ile başvuran hastanın radyografisinde güve yeniği tarzında sınırları belirsiz radyolüsent alanlar saptanmıştır. Lezyon çevresinde reaktif kemik formasyonunu gösteren skleroz ve kortekse paralel uzanan periosteal reaksiyon mevcuttur. Multipl myelom ve Ewing sarkomu ayırıcı tanısında, bu radyolojik spesifikasyonlar öncelikli olarak aşağıdakilerden hangisini destekler?
Doğru Şık (D): Osteomyelit
Açıklama: Osteomyelitin karakteristik radyografik belirteçleri arasında reaktif enflamasyon kaynaklı çevresel skleroz, sekestr formasyonu ve kortekse paralel uzanan laminar periosteal reaksiyon yer alır. Ewing sarkomu radyolüsent güve yeniği görünümü yapsa da güneş ışını tarzı dik periost reaksiyonuna yatkındır. Multipl myelom ise tamamen osteolitik (zımba deliği) bir süreçtir ve enflamatuar bir reaksiyon olmadığı için çevresel skleroz veya periosteal yeni kemik üretmez.

**Soru 2 (ID: 6b644b2e-4246-4867-ae58-33acdd0dbad7)**
Soru Kökü: Çene kemiğinde Ewing sarkomu tespit edilen bir hastanın radyolojik ayırıcı tanısında, her iki lezyon da litik dekstrüksiyon yapmasına rağmen, enfeksiyon kaynaklı osteomyeliti destekleyen ve Ewing sarkomunda görülmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Radyolüsent lezyon sınırları içerisinde sekestr görülmesi
Açıklama: Osteomyelit ve Ewing sarkomunun her ikisi de düzensiz radyolüsensi ve sekonder periost reaksiyonu yapabilir. Ancak osteomyelitte inflamasyona bağlı olarak beslenmesi bozulan ölü kemik adacıkları (sekestr) litik alan içerisinde radyoopak kitleler olarak izlenirken, Ewing sarkomunda nekrotik kemik sekestrasyonu görülmez.

---

### ÇİFT 6 (Benzerlik: 0.78)

**Soru 1 (ID: 7cdf3d69-2d6d-4537-b0e9-fc1a00f55869)**
Soru Kökü: Kronik lösemi hastalarının çene radyografilerinde, dişlerin çevre kemikten belirgin şekilde 'öne çıkmış' veya rölatif olarak daha radyoopak görünmesine neden olan temel radyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Diş çevresinde generalize osteopenik alan oluşumu
Açıklama: Lösemi hastalarında kemik iliğinde artmış malign lökosit proliferasyonu, trabeküler kemikte rezorpsiyona ve osteopenik alan oluşumuna neden olur. Kemiğin radyoopasitesi azaldığı için, normal mineralizasyonunu koruyan diş yapıları çevreye göre izafi olarak daha belirgin ve öne çıkmış görünür.

**Soru 2 (ID: f359f178-a3fb-4f87-a4e9-8c76f8c8dcff)**
Soru Kökü: Kronik lösemi hastalarının çene radyografilerinde izlenen spesifik kemik değişiklikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Çene kemiklerinde asimetrik ve hızlı ekspansiyona (genişlemeye) neden olur.
Açıklama: Radyolojik belirtiler daha çok kronik lösemide belirgindir ve ilik boşluğundaki malign proliferasyona bağlı olarak yaygın osteopeni, lamina dura kaybı ve dişlerin belirginleşmesi görülür. Ancak lösemik infiltrasyonlar genellikle kortikal sınırları içeriden inceltmesine rağmen çene kemiğinde belirgin bir genişlemeye (ekspansiyon) neden OLMAZ. Çene ekspansiyonu Burkitt lenfoma, santral dev hücreli granülom veya ameloblastoma gibi kitle lezyonları için tipiktir.

---

### ÇİFT 7 (Benzerlik: 0.78)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

---

### ÇİFT 8 (Benzerlik: 0.78)

**Soru 1 (ID: 20941c53-86fb-4a57-9e46-701ddff2879f)**
Soru Kökü: 14 yaşında erkek hasta, radyolojik muayenede gömülü kalan mandibular daimi dişi çevreleyen radyolüsent bir kist saptanmasıyla değerlendiriliyor. Bu perikoronal alan içerisinde odontojenik kaynaklı dağınık kalsifikasyon (radyopasite) odakları izlenmiştir. Sınıflandırma listelerine göre aşağıdakilerden hangisi kalsifikasyon barındıran bu perikoronal radyolüsensi tablosuna uygun tanılardan biri **değildir**?
Doğru Şık (E): Hiperplastik folikül
Açıklama: Hiperplastik folikül tamamen ektomezenkimal yumuşak doku kökenli olup mineralize yapılar sentezlemediğinden 'kalsifikasyon içermeyen' perikoronal radyolüsensiler listesinde tanımlanır. Adenomatoid odontojenik tümör, ameloblastik odontom, Kalsifiye epitelyal odontojenik tümör ve ameloblastik fibro-odontom ise neoplastik gelişim sürecinde sert doku (mine/dentin vb.) ürettikleri için 'kalsifikasyon var' grubundadır. Yumuşak doku lezyonlarında kalsifikasyon radyolojik olarak beklenmez.

**Soru 2 (ID: f973e179-2294-4e07-8e3e-d7d5fec1b8ed)**
Soru Kökü: 35 yaşındaki hastanın alt posterior bölgesinde sürmemiş bir 20 yaş dişi ve bu dişi koronalinden çevreleyen kalsifikasyon (radyopasite) bulgusu saptanmayan kistik bir lezyon tespit edilmiştir. Sınıflandırma algoritmalarına dayanarak cerrahi planlamada aşağıdaki 'kalsifikasyon içermeyen' tanılardan hangisinin konulma ihtimali **en fazladır**?
Doğru Şık (C): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom odontojenik epitel ve ektomezenkim komponentleri olan ve mineralize yapı üretmeyen bir neoplazmdır, bu sebeple 'kalsifikasyon içermeyen perikoronal radyolüsensiler' listesindedir. AOT, ameloblastik fibro-odontom, kalsifiye odontojenik kist ve ameloblastik odontom ise neoplastik matrisleri (mine, dentin vb.) üzerinden kalsifiye odaklar üretip radyopak kısımlar barındırırlar. Salt radyolüsent patolojilerde mineralizan yapılar ekarte edilir.

---

### ÇİFT 9 (Benzerlik: 0.78)

**Soru 1 (ID: 28ac2248-7fa8-43f6-bb4f-d29b8b0d8ca6)**
Soru Kökü: Ağız tabanında saptanan ve dişlerde mobiliteye neden olan yumuşak doku kitlesinin radyolojik incelemesinde alveoler kemikte destrüksiyon saptanmıştır. Bu lezyonun inflamatuar kökenli bir osteomyelit mi yoksa yumuşak dokudan köken alan skuamöz hücreli karsinom (SCC) mu olduğunun ayrımında aşağıdaki radyolojik bulgulardan hangisi SCC lehine en güçlü kanıttır?
Doğru Şık (A): Kortekste periost reaksiyonunun izlenmemesi
Açıklama: Osteomyelit genellikle enfeksiyona sekonder olarak kemikte periost reaksiyonunu uyarırken, yumuşak dokudan köken alan SCC'nin kemik invazyonunda periost reaksiyonu izlenmez. Sekestr oluşumu ve periferik sklerotik yanıt inflamatuar sürecin göstergesi olup malignitelerden ziyade osteomyelit lehine bulgulardır. Skuamöz hücreli karsinomda kemik desteğinden yoksun kalan dişlerin etrafında lamina dura kaybı ve alveoler sokette belirgin genişleme meydana gelir.

**Soru 2 (ID: 467b96b3-98e7-4ed9-aeea-c5d55cb071ca)**
Soru Kökü: Altmış sekiz yaşında erkek hasta, mandibula molar bölgede patolojik kırık ve alt dudakta parestezi şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide belirsiz sınırlı radyolüsent dekstrüksiyon alanı izleniyor. Primer kemikten köken alan (intraosseöz) skuamöz hücreli karsinom şüphesi olan bu vakada, tanıyı destekleyecek en kritik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Mandibular kanalın korteks devamlılığında kayıp
Açıklama: Primer intraosseöz SCC'de neoplastik infiltrasyon kemiği dekstrükte ederken, mandibular kanalın kortikal sınırlarında devamlılık kaybına yol açar. Diş kök rezorpsiyonu SCC'de oldukça nadirdir, lezyonlar genellikle dişlerin havada asılı gibi görünmesine neden olur. Sekestr oluşumu ise osteomyelit lehine bulgudur.

---

### ÇİFT 10 (Benzerlik: 0.78)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: 6af3556a-d69f-4a2a-9f9c-2caf0d0b27f2)**
Soru Kökü: Çene kemiklerinde hem kemik yapımının hem de kemik yıkımının eş zamanlı veya ardışık gerçekleştiği durumlarda radyografide mikst radyolüsent-radyoopak görünüm oluşur. Aşağıdaki patolojilerden hangisi karakteri gereği radyografik olarak mikst lezyon profili **sergilemez**?
Doğru Şık (C): Multiple Myelom
Açıklama: Multiple Myelom, plazma hücrelerinin kemik yıkıcı sitokinleri (OAF) aşırı üretmesi sonucu kemikte sadece osteolitik aktivite gösteren, tamamen radyolüsent 'zımba deliği' tarzı litik lezyonlar yapar; reaktif veya neoplastik kemik yapımı göstermez. Buna karşın Paget hastalığı (pamuk yığını), osteosarkom (sunray/skleroz), semento-ossifiye fibromlar mikst özellik sergileyen başlıca oluşumlardır.

---

### ÇİFT 11 (Benzerlik: 0.76)

**Soru 1 (ID: bb668e8f-1716-4019-af56-5f79657f8a52)**
Soru Kökü: Altmış yaşında erkek hasta, sağ alt çenede dentijeröz kist ön tanısıyla opere edilmiş ve kist epiteli histopatolojik incelemeye gönderilmiştir. Radyolojik incelemede kist çevresinde periferik sklerotik bir yanıt izlenmiştir. Bu radyolojik bulgu, malign transformasyondan ziyade öncelikle aşağıdakilerden hangisini işaret eder?
Doğru Şık (A): Kistin sekonder olarak enfekte olduğunu
Açıklama: Dental kistler enfekte olduğunda normal kortikal sınırlarını kaybedebilir ancak inflamasyona bağlı olarak çevre kemikte sekonder periferik sklerotik bir yanıt geliştirirler. Malign transformasyona uğramış bir kistte ise kemik destrüksiyonu izlenirken bu tip koruyucu bir sklerotik hat tipik olarak mevcut değildir. Santral ve kist kökenli karsinomlar hızlı yıkım yaptıkları için skleroz bırakmadan korteksi perfore etme eğilimindedir.

**Soru 2 (ID: ea4c4698-39b9-4740-87c2-c328a5d2d6f7)**
Soru Kökü: Dental kistlerin malign transformasyonu ile sekonder enfekte kistlerin radyolojik ayırıcı tanısında, aşağıdakilerden hangisi karsinomatöz değişimi destekleyen en güçlü bulgudur?
Doğru Şık (C): Kortikal sınırın kaybolması ve kemikte sklerotik reaksiyonun bulunmaması
Açıklama: Dental kistler enfekte olduğunda inflamasyonla birlikte kemikte periferal sklerotik bir yanıt meydana gelir ve sınırlarını korumaya çalışır. Ancak kist epiteli skuamöz hücreli karsinoma dönüştüğünde, bu sklerozis tabakası oluşmaz ve lezyon düzensiz sınırlarla kemik içinde hızla yayılır. Diğer şıklardaki kalsifikasyon veya skleroz bulguları benign veya inflamatuar doğayı işaret eder.

---

### ÇİFT 12 (Benzerlik: 0.76)

**Soru 1 (ID: 3b94d8af-e072-4bfa-b3a7-4de64d740541)**
Soru Kökü: Sistemik tutulum gösteren bazı kemik patolojileri, davranış karakterleri nedeniyle radyografik olarak birden fazla ana başlık altında (örneğin hem multipl radyopasite hem mikst lezyon hem de generalize radyopasite olarak) çapraz sınıflandırılabilirler. Aşağıdaki hastalıklardan hangisi bu tarz çoklu listelenme özelliğine sahip patolojilerden biri **değildir**?
Doğru Şık (D): Ameloblastik odontom
Açıklama: Ameloblastik odontom radyolojik ve gelişimsel olarak sadece spesifik bir alanı ilgilendiren 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer alan izole bir odontojenik tümördür. Paget hastalığı, Florid osseoz displazi, Hiperparatiroidizm ve Fibröz displazi ise kemik remodeling sürecini tüm kadranlarda ve vücutta bozduklarından sınıflandırma tablolarında hem mikst lezyonlar hem de generalize radyopasiteler/sistemik hastalıklar listelerinde ortak konumlara sahiptir.

**Soru 2 (ID: 9a880e78-8260-432e-b34c-cc0296dc6ace)**
Soru Kökü: Çene grafilerinde birden fazla bölgede yaygın (multipl) radyopak odakların saptanması, sistemik veya sendromik hastalıkların radyolojik habercisi olabilir. Aşağıdaki patolojilerden hangisi standart klinik sınıflandırmalarda 'multipl radyopasite' tablosuna neden olan hastalıklardan biri **değildir**?
Doğru Şık (D): Enostoz
Açıklama: Enostoz (kemik adacığı), çene kemiği medullasında gelişen yoğun kortikal kemik kitlesidir ve karakteristik olarak soliter radyopasite formunda izlenir. Paget hastalığının sklerotik evresi, süpernumerer dişler, Gardner sendromuna bağlı multipl osteomalar ve matür periapikal semental displazi ise hastada multipl radyopasite tablosuna neden olur. Sınıflandırmada multipl gelişim göstermeyen yapı enostozdur.

---

### ÇİFT 13 (Benzerlik: 0.76)

**Soru 1 (ID: 1ab0df52-4cef-4544-b34c-bedaefdc2548)**
Soru Kökü: Dental pratikte rutin alınan panoramik radyografilerde kemik yapısının sistemik bir problemden ötürü total olarak değiştiği 'generalize radyopasite' izlenebilir. Aşağıdaki patolojilerden hangisi tüm çene kemiklerinde generalize (yaygın) radyopasiteye neden olan sistemik hastalıklardan biri **değildir**?
Doğru Şık (E): Cherubism
Açıklama: Osteopetrozis (kemik yoğunluğunun aşırı artması), Paget hastalığı (anormal kemik döngüsüyle pamuk yığını), Florid Osseöz Displazi (yaygın semento-osseöz kitleler) ve hiperparatiroidizmin bazı sklerotik safhaları çenelerde generalize radyopasite oluşturur. Cherubism (familyal fibröz displazi varyantı) ise çene açılarında bilateral, çok odacıklı (multiloküler) radyolüsent sabun köpüğü görünümü yapar; radyoopak bir hastalık değildir.

**Soru 2 (ID: c49ba318-53d4-42cf-becb-368aa32fd72a)**
Soru Kökü: Radyografik incelemede mandibula ve maksillada anatomik kortikal sınırların belirsizleştiği, standardize generalize kemik yoğunluğu artışı (osteoskleroz) saptanan bir hastada, bu radyopasite artışının iskeletsel bir nedene bağlı olduğu düşünülmektedir. Aşağıdaki hastalıklardan hangisi bu durumun ayırıcı tanısında öncelikli olarak değerlendirilir?
Doğru Şık (B): Osteopetrozis
Açıklama: Osteopetrozis, osteoklastların kemik rezorpsiyon işlevini yerine getirememesi sonucu generalize radyopasite (mermer kemik) tablosunun görüldüğü bir sistemik hastalıktır. Cherubism multikistik kemik yıkımlarıyla, Langerhans hücreli histiyositoz apikal radyolüsensiler ve 'yüzen diş' manzarasıyla, santral hemanjiom ise sabun köpüğü radyolüsensilerle karakterizedir. Generalize osteoskleroz tablosu bu ayırıcı tanıda yalnızca osteopetrozise işaret eder.

---

### ÇİFT 14 (Benzerlik: 0.76)

**Soru 1 (ID: 1ab0df52-4cef-4544-b34c-bedaefdc2548)**
Soru Kökü: Dental pratikte rutin alınan panoramik radyografilerde kemik yapısının sistemik bir problemden ötürü total olarak değiştiği 'generalize radyopasite' izlenebilir. Aşağıdaki patolojilerden hangisi tüm çene kemiklerinde generalize (yaygın) radyopasiteye neden olan sistemik hastalıklardan biri **değildir**?
Doğru Şık (E): Cherubism
Açıklama: Osteopetrozis (kemik yoğunluğunun aşırı artması), Paget hastalığı (anormal kemik döngüsüyle pamuk yığını), Florid Osseöz Displazi (yaygın semento-osseöz kitleler) ve hiperparatiroidizmin bazı sklerotik safhaları çenelerde generalize radyopasite oluşturur. Cherubism (familyal fibröz displazi varyantı) ise çene açılarında bilateral, çok odacıklı (multiloküler) radyolüsent sabun köpüğü görünümü yapar; radyoopak bir hastalık değildir.

**Soru 2 (ID: 9a880e78-8260-432e-b34c-cc0296dc6ace)**
Soru Kökü: Çene grafilerinde birden fazla bölgede yaygın (multipl) radyopak odakların saptanması, sistemik veya sendromik hastalıkların radyolojik habercisi olabilir. Aşağıdaki patolojilerden hangisi standart klinik sınıflandırmalarda 'multipl radyopasite' tablosuna neden olan hastalıklardan biri **değildir**?
Doğru Şık (D): Enostoz
Açıklama: Enostoz (kemik adacığı), çene kemiği medullasında gelişen yoğun kortikal kemik kitlesidir ve karakteristik olarak soliter radyopasite formunda izlenir. Paget hastalığının sklerotik evresi, süpernumerer dişler, Gardner sendromuna bağlı multipl osteomalar ve matür periapikal semental displazi ise hastada multipl radyopasite tablosuna neden olur. Sınıflandırmada multipl gelişim göstermeyen yapı enostozdur.

---

### ÇİFT 15 (Benzerlik: 0.76)

**Soru 1 (ID: 466a8d1a-a49b-43a6-b4c4-352d33832baf)**
Soru Kökü: Kırk yaşında kadın hasta, posterior mandibulada yavaş ancak progresif olarak genişleyen, ağrılı bir kitle nedeniyle başvuruyor. Panoramik radyografide alveolar proses ve mandibular kanalın kortikal sınırını silen, kapsülsüz dekstrüktif bir radyolüsensi saptanıyor. Tanı olarak fibrosarkom düşünülen bu lezyonun periferal sinirleri invaze etmesi durumunda **en olası** klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Duyusal nöral anormaliteler (parestezi/anestezi)
Açıklama: Fibrosarkomlar periferal sinirleri içerdiğinde ağrıya ek olarak duyusal nöral anormalitelere (parestezi, anestezi, dizestezi) neden olur. TME veya paramandibular kaslar tutulursa trismus görülür. Dişlerde hipersementoz değil, destek kemik kaybına bağlı havada yüzme görünümü beklenir.

**Soru 2 (ID: f928e1cd-81bb-4922-a96a-4896a890627d)**
Soru Kökü: Fibrosarkomlar genellikle malign mezenkimal lezyonların klasik radyolojik özelliklerini paylaşırlar. Bir çene fibrosarkomu olgusunda TME (Temporomandibular Eklem) ve paramandibular kasların doğrudan tümör tutulumuna girdiğini gösteren **en belirgin** klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Trismus ve anormal eklem fonksiyonu
Açıklama: Fibrosarkom çevre dokulara hızla yayılan infiltratif bir lezyondur. Çiğneme kasları (paramandibular kaslar) ve TME bölgesini doğrudan invaze ettiğinde mekanik ve nöromüsküler disfonksiyona yol açarak sıklıkla şiddetli trismus (ağzı açamama) tablosu ile karşımıza çıkar. Alt dudak parestezisi sinir tutulumunu gösterirken, trismus doğrudan kas/eklem tutulumunun markerıdır.

---

### ÇİFT 16 (Benzerlik: 0.75)

**Soru 1 (ID: 9070bfd4-0372-431d-999c-ed5eaa73a667)**
Soru Kökü: Diş hekimliği kliniğine başvuran 45 yaşındaki hastanın üst çene premolar bölgesinde, çekim öyküsü olmayan dişlerin mobil (hareketli) olduğu saptanmıştır. Periapikal radyografide dişlerin apikalindeki folikül kortekslerinin kaybolduğu ve dişlerin normal destek kemiğini yitirerek oklüzal yönde itildiği izlenmiştir. Lezyonun maksiller sinüs sınırlarında harabiyet yaptığı görülmüştür. Gece terlemesi ve kaşıntı öyküsü de bulunan bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Non-Hodgkin Lenfoma
Açıklama: Ekstranodal Non-Hodgkin Lenfoma maksiller sinüs ve damak bölgesini sık tutar, malign hücrelerin gelişen diş papillasına veya periapikal dokulara sızmasıyla kriptlerin korteksi silinir ve dişler oklüzal yönde zorlanarak erken sürmeye veya lükse olmaya başlar. Gece terlemesi ve açıklanamayan kaşıntı B semptomları olarak lenfomayı işaret eder. Fibröz displazi ve ameloblastomda bu tip agresif foliküler penetrasyon ve sistemik B semptomları izlenmez.

**Soru 2 (ID: f9e00dcc-14e2-413d-af5c-9e54e9e7f689)**
Soru Kökü: Kırk beş yaşında erkek hasta; gece terlemesi, kaşıntı ve halsizlik şikayetlerinin yanında posterior maksillada ağrılı şişlik nedeniyle kliniğe başvuruyor. Radyografik incelemede maksiller sinüs ve palatal korteksi destrükte eden invaziv multiloküler kitle saptanıyor. Biyopside lenfoid seriden köken alan atipik hücre proliferasyonu izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Ekstranodal Non-Hodgkin Lenfoma
Açıklama: Lenf nodları dışındaki (ekstranodal) bölgelerde gelişen Non-Hodgkin Lenfoma sıklıkla maksiller sinüs, damak ve posterior mandibulayı etkiler. B-semptomları olarak bilinen gece terlemesi, kilo kaybı ve kaşıntı lenfoma şüphesini kuvvetlendirir. Osteosarkomda bu sistemik B-semptomları tipik değildir.

---

### ÇİFT 17 (Benzerlik: 0.75)

**Soru 1 (ID: 157eac2c-bf03-4679-bd71-562e122ef5c6)**
Soru Kökü: İdiopatik osteoskleroz ve ekzostoz oluşumları, radyografik görünümlerine göre hem soliter hem de multipl radyopasiteler oluşturabilme potansiyeline sahiptir. Aşağıdakilerden hangisi ise bu patolojilerin aksine **yalnızca** soliter radyopasite tablosunda listelenen osteojenik bir reaksiyondur?
Doğru Şık (C): Kondanse osteitis
Açıklama: Kondanse osteitis, genellikle enfekte pulpalı tek bir dişin kök ucunda kronik inflamasyona yanıt olarak gelişen lokalize osteoblastik aktivite artışıdır ve tipik soliter radyopasite olarak sınıflandırılır. Matür periapikal semental displazi hem soliter hem multipl gruptayken; Paget, Florid osseoz displazi ve soket sklerozu karakteristik multipl radyopasite grubunda yer alır. İnflamatuar odaklı kök ucu reaksiyonu lokal ve tekildir.

**Soru 2 (ID: 830db24a-0573-4eac-8ff6-f4aeabe560dd)**
Soru Kökü: Radyolojik incelemede tekil, izole ve sınırları belirgin 'soliter radyopasite' saptanan bir vakada, aşağıdaki lezyonlardan hangisi standart ayırıcı tanı listesinde yer **almaz**?
Doğru Şık (E): Florid osseoz displazi
Açıklama: Florid osseöz displazi, kemik metabolizmasını yaygın etkileyen ve radyografik olarak multipl veya generalize radyopasiteler şeklinde izlenen bir patolojidir. Buna karşın enostoz, kondanse osteitis, hipersementoz ve kalmış kökler çenelerde fokal, tekil odak formunda gelişen karakteristik soliter radyopasitelerdir. Generalize kemik yıkım/yapım tabloları soliter lezyonlar kategorisinden dışlanmalıdır.

---

### ÇİFT 18 (Benzerlik: 0.75)

**Soru 1 (ID: 3b94d8af-e072-4bfa-b3a7-4de64d740541)**
Soru Kökü: Sistemik tutulum gösteren bazı kemik patolojileri, davranış karakterleri nedeniyle radyografik olarak birden fazla ana başlık altında (örneğin hem multipl radyopasite hem mikst lezyon hem de generalize radyopasite olarak) çapraz sınıflandırılabilirler. Aşağıdaki hastalıklardan hangisi bu tarz çoklu listelenme özelliğine sahip patolojilerden biri **değildir**?
Doğru Şık (D): Ameloblastik odontom
Açıklama: Ameloblastik odontom radyolojik ve gelişimsel olarak sadece spesifik bir alanı ilgilendiren 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer alan izole bir odontojenik tümördür. Paget hastalığı, Florid osseoz displazi, Hiperparatiroidizm ve Fibröz displazi ise kemik remodeling sürecini tüm kadranlarda ve vücutta bozduklarından sınıflandırma tablolarında hem mikst lezyonlar hem de generalize radyopasiteler/sistemik hastalıklar listelerinde ortak konumlara sahiptir.

**Soru 2 (ID: e3bff7c8-8228-4f34-8695-bebd5fe94b5f)**
Soru Kökü: Radyolojik sınıflama algoritmalarına göre; hem osteolitik ve osteoblastik fazların bir arada görülmesiyle 'mikst radyolüsent-radyopak lezyonlar', hem de iskelet sistemini diffüz olarak etkilemesiyle 'generalize radyopasiteler/sistemik hastalıklar' kategorisinde ortaklaşa yer alan kemik metabolizma bozukluğu aşağıdakilerden hangisidir?
Doğru Şık (B): Paget hastalığı
Açıklama: Paget hastalığı (Osteitis deformans), kemik döngüsünün ileri derecede düzensizleştiği sistemik bir kemik hastalığıdır. Hastalığın erken evreleri osteolitik, geç evreleri ise pamuk yumağı tarzında osteosklerotik (radyopak) olduğu için mikst lezyonlar grubunda listelenirken; kranial ve maksillofasiyal iskeleti yaygın şekilde tuttuğu için 'generalize radyopasiteler/sistemik hastalıklar' bölümünde de sınıflandırılır.

---

### ÇİFT 19 (Benzerlik: 0.75)

**Soru 1 (ID: 201d94a5-6ea9-42cd-b789-b8130233673b)**
Soru Kökü: Mandibula posterior bölgede kötü kokulu akıntı ve ağrılı şişlik ile başvuran hastanın radyografisinde güve yeniği tarzında sınırları belirsiz radyolüsent alanlar saptanmıştır. Lezyon çevresinde reaktif kemik formasyonunu gösteren skleroz ve kortekse paralel uzanan periosteal reaksiyon mevcuttur. Multipl myelom ve Ewing sarkomu ayırıcı tanısında, bu radyolojik spesifikasyonlar öncelikli olarak aşağıdakilerden hangisini destekler?
Doğru Şık (D): Osteomyelit
Açıklama: Osteomyelitin karakteristik radyografik belirteçleri arasında reaktif enflamasyon kaynaklı çevresel skleroz, sekestr formasyonu ve kortekse paralel uzanan laminar periosteal reaksiyon yer alır. Ewing sarkomu radyolüsent güve yeniği görünümü yapsa da güneş ışını tarzı dik periost reaksiyonuna yatkındır. Multipl myelom ise tamamen osteolitik (zımba deliği) bir süreçtir ve enflamatuar bir reaksiyon olmadığı için çevresel skleroz veya periosteal yeni kemik üretmez.

**Soru 2 (ID: 5542328d-6c2c-4efa-bc1d-d67c53233bf7)**
Soru Kökü: Çene kemiklerinde radyolüsent destrüktif kitle saptanan 18 yaşındaki bir hastada ayırıcı tanıda Ewing sarkomu ve Eozinofilik granülom düşünülmektedir. Aşağıdaki radyolojik bulgulardan hangisi, tanıyı Ewing sarkomundan çok Eozinofilik granüloma yaklaştırır?
Doğru Şık (B): Laminar periosteal kemik reaksiyonunun görülmesi
Açıklama: Çenenin aynı kısmında oluşan eozinofilik granülom da Ewing sarkomu gibi destrüktif bir ilerleme gösterir ancak eozinofilik granülom spesifik olarak laminar periosteal kemik reaksiyonu gösterirken, Ewing sarkomunda bu laminar tarz görülmez. Ewing sarkomunda daha çok Codman üçgeni veya güneş ışını (sun ray) şeklinde sekonder kemik formasyonları beklenir.

---

### ÇİFT 20 (Benzerlik: 0.75)

**Soru 1 (ID: 3e5f327d-b6a6-48cf-a06b-de449c864cf8)**
Soru Kökü: Alt çenesinde hissizlik (parestezi) şikayeti bulunan 65 yaşındaki hastanın radyografisinde kortikal kemiğin dış yüzeyinde 'kurabiye ısırığı' şeklinde yüzeyel bir erozyon izlenmiştir. Bu radyolojik merkez üssü (epicenter) konumu, kemik içine oturan dairesel bir metastatik lezyondan ziyade aşağıdakilerden hangisinin öncelikli habercisidir?
Doğru Şık (C): Primer çene yassı hücreli karsinomu (SCC)
Açıklama: Çenede görülen yumuşak doku kaynaklı Primer Yassı Hücreli Karsinom (SCC), kemiğe yüzeyden dışarıdan içeriye doğru invaze olduğu için korteks yüzeyinde 'kurabiye ısırığı' şeklinde litik bir defekt (dıştan içe erozyon) oluşturur. Buna karşılık kan yoluyla gelen metastatik tümörlerin merkez üssü kemiğin içindedir (medulla) ve dairesel/oval şekilde dışa doğru büyürler.

**Soru 2 (ID: e74ce30e-7dc1-41f6-9c11-cce282e819a8)**
Soru Kökü: 55 yaşında prostat adenokarsinomu öyküsü olan erkek hastada alt çenede uyuşukluk şikayeti başlamıştır. Mandibulanın görüntülenmesinde metastaz ile primer çene içi skuamöz hücreli karsinomu birbirinden ayırmak amacıyla lezyonun radyolojik morfolojisi incelenmektedir. Lezyonun metastaz olduğunu destekleyen temel lokasyon bulgusu aşağıdakilerden hangisidir?
Doğru Şık (B): Lezyonun merkez üssünün derin kemik medullası içinde olması ve sınırlarının oval seyretmesi
Açıklama: Metastatik tümörler hematojen yolla geldikleri için merkez üsleri (epicenter) genellikle mandibuladaki derin medüller kemiğin içindedir ve dairesel/oval büyürler. Primer intraosseöz veya gingivadan yayılan SCC'lerin merkez üssü ise kemik yüzeyine (alveoler kret) daha yakındır ve yüzeyel 'kurabiye ısırığı' tarzı destrüksiyonla içe doğru ilerler.

---

### ÇİFT 21 (Benzerlik: 0.75)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: c7757ab0-fc33-457e-9711-7ada7850fb09)**
Soru Kökü: Kırk yedi yaşında erkek hasta, çene ekleminde anormal fonksiyon şikayetiyle muayeneye alınmıştır. Radyografide mandibula kondilinden kaynaklanan, mikst radyolüsent-radyopak karakterli (güve yeniği), yavaş büyüyen ve kortekse dik güneş ışını tarzı periosteal yeni kemik reaksiyonu gösteren bir kitle saptanmıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kondrosarkom
Açıklama: Kondrosarkom, 40'lı yaşların sonlarında (yaklaşık 47 yaş) sık görülen, yavaş büyüyen, kondil ve koronoid prosesi tercih eden, mikst kalsifikasyon paternine ve spesifik periferik güneş ışını tarzı periost reaksiyonuna sahip bir sarkomdur. TMJ bölgesini tuttuğu için eklem disfonksiyonu tipiktir. Osteosarkoma çok benzer ancak kalsifikasyon odaklarındaki yoğunluk ve yavaş seyri ile karakterizedir.

---

### ÇİFT 22 (Benzerlik: 0.75)

**Soru 1 (ID: b0543568-33aa-4ae0-9ce6-3a6c3e1b21ff)**
Soru Kökü: Çene kemiklerine metastaz yapan malignitelerin radyolojik incelenmesinde, kemik rezorpsiyonundan ziyade komşu kemikte sklerotik formasyonu uyararak radyopak patern oluşturma eğilimi en yüksek olan iki primer tümör odağı aşağıdakilerden hangisidir?
Doğru Şık (A): Meme ve Prostat
Açıklama: Metastatik tümörler çenelerde genellikle litik (radyolüsent) destrüksiyon yapsalar da, prostat ve meme karsinomu metastazları osteoblastik aktiviteyi uyararak sklerotik/radyopak bir patern oluşturmalarıyla karakterizedir. Diğer primer odaklar (akciğer, tiroid, böbrek) ağırlıklı olarak osteoklastik yıkım ve net bir radyolüsensi ile karşımıza çıkar.

**Soru 2 (ID: bab28b7f-8831-4e69-9ec2-c6862a9d5550)**
Soru Kökü: Mandibula posterior bölgede sıklıkla bilateral, güve yeniği tarzında litik kemik yıkımı yapan metastatik tümörlerin ayırıcı tanısında, prostat ve meme karsinomu metastazlarını diğerlerinden ayıran en spesifik özellik aşağıdakilerden hangisidir?
Doğru Şık (C): Komşu kemikte sklerotik formasyonu uyarabilmeleri
Açıklama: Genellikle metastatik lezyonlar düzensiz litik alanlar olarak görülürken, prostat ve meme karsinomu metastazları osteoblastik aktiviteyi indükleyerek komşu kemikte sklerotik (radyopak) kemik formasyonunu uyarabilirler. Bu özellik onları akciğer veya böbrek gibi tamamen osteolitik ilerleyen diğer metastazlardan ayırır. Dişlerde kök rezorpsiyonu metastazlarda nadir bir bulgudur.

---

### ÇİFT 23 (Benzerlik: 0.74)

**Soru 1 (ID: 355698c3-1661-4f3e-a826-2ab0c2265863)**
Soru Kökü: Burkitt Lenfoma'nın çene tutulumu ile ilgili aşağıdaki klinik ve radyolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Büyüme sürecinde reaktif olarak kortekse paralel güçlü laminar periost reaksiyonu görülür.
Açıklama: Burkitt lenfoma çok agresif osteolitik bir yıkım yapar ve periostu kemik oluşturmaya teşvik edecek zaman bırakmaz. Çenede karakteristik laminar (soğan zarı) periosteal reaksiyon gösteren hastalık Burkitt lenfoma değil, Osteomiyelit veya Eozinofilik Granülomdur. Yüzen dişler ve PDL genişlemesi ise lenfoma için tipiktir.

**Soru 2 (ID: 9789072a-81f6-4866-b271-f4e197c1e39a)**
Soru Kökü: Mandibulada zımba deliği tarzı radyolüsent lezyonları olan multipl myelom hastasında görülebilecek çene ve radyolojik bulgularla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Kortekse paralel yaygın periost reaksiyonu (soğan kabuğu) görülür.
Açıklama: Multipl myelomda kemik lezyonlarında periosteal reaksiyon oluşumu nadirdir. Kortekse paralel periost reaksiyonu (soğan kabuğu) osteomiyelit veya Ewing sarkomu gibi durumlarda görülür. Endosteal scalloping (kurabiye ısırığı) MM için spesifik bulgular arasındadır.

---

### ÇİFT 24 (Benzerlik: 0.74)

**Soru 1 (ID: 466a8d1a-a49b-43a6-b4c4-352d33832baf)**
Soru Kökü: Kırk yaşında kadın hasta, posterior mandibulada yavaş ancak progresif olarak genişleyen, ağrılı bir kitle nedeniyle başvuruyor. Panoramik radyografide alveolar proses ve mandibular kanalın kortikal sınırını silen, kapsülsüz dekstrüktif bir radyolüsensi saptanıyor. Tanı olarak fibrosarkom düşünülen bu lezyonun periferal sinirleri invaze etmesi durumunda **en olası** klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Duyusal nöral anormaliteler (parestezi/anestezi)
Açıklama: Fibrosarkomlar periferal sinirleri içerdiğinde ağrıya ek olarak duyusal nöral anormalitelere (parestezi, anestezi, dizestezi) neden olur. TME veya paramandibular kaslar tutulursa trismus görülür. Dişlerde hipersementoz değil, destek kemik kaybına bağlı havada yüzme görünümü beklenir.

**Soru 2 (ID: 988c83e8-fd70-4df2-a95a-f5b68f11b498)**
Soru Kökü: Kırk yaşında kadın hasta; yavaş ekspansiyon yapan, ağrılı bir kitle ve ağız açmada kısıtlılık (trismus) şikayetiyle başvurmuştur. Radyografide kapsülsüz, dişlerde kök rezorpsiyonu yapmadan yer değiştirmeye neden olan ve komşu normal kemikte periferal skleroza yol açan kötü sınırlı destrüktif lezyon izlenmiştir. TME çevresi paramandibular kasların invaze olduğu saptanan bu vakada en olası tanı nedir?
Doğru Şık (D): Fibrosarkom
Açıklama: Fibrosarkomlar kadınlarda ve 4. dekadda sıktır. TMJ veya paramandibular kasların tutulması şiddetli trismus yapar. Radyografide kapsülsüzdür, komşu normal kemikte skleroza neden olabilir, kök rezorpsiyonu yapmaz ama dişi boşlukta yüzdürür. Bu spesifik klinik kombinasyon (kas invazyonuna bağlı trismus + kemik sklerozu + kapsülsüz yıkım) fibrosarkomu tanımlar.

---

### ÇİFT 25 (Benzerlik: 0.74)

**Soru 1 (ID: 1ab0df52-4cef-4544-b34c-bedaefdc2548)**
Soru Kökü: Dental pratikte rutin alınan panoramik radyografilerde kemik yapısının sistemik bir problemden ötürü total olarak değiştiği 'generalize radyopasite' izlenebilir. Aşağıdaki patolojilerden hangisi tüm çene kemiklerinde generalize (yaygın) radyopasiteye neden olan sistemik hastalıklardan biri **değildir**?
Doğru Şık (E): Cherubism
Açıklama: Osteopetrozis (kemik yoğunluğunun aşırı artması), Paget hastalığı (anormal kemik döngüsüyle pamuk yığını), Florid Osseöz Displazi (yaygın semento-osseöz kitleler) ve hiperparatiroidizmin bazı sklerotik safhaları çenelerde generalize radyopasite oluşturur. Cherubism (familyal fibröz displazi varyantı) ise çene açılarında bilateral, çok odacıklı (multiloküler) radyolüsent sabun köpüğü görünümü yapar; radyoopak bir hastalık değildir.

**Soru 2 (ID: a7dcd9df-d55e-47ae-833f-cbf1e696d6be)**
Soru Kökü: Aşağıdaki sistemik durumlardan hangisi, Tablo 12'ye göre tüm çenelerde kemik dansitesinin artışı ile karakterize 'Generalize radyopasiteler' grubunda yer alan bir hastalık **değildir**?
Doğru Şık (D): Multipl myelom
Açıklama: Multipl myelom kemiklerde yaygın litik (zımba deliği) radyolüsent yıkımlara ve generalize osteopeniye neden olan plazma hücreli bir malignitedir. Tablo 12'de generalize radyopasite yapan hastalıklar arasında Osteopetrozis (mermer kemik), Paget, Florid osseöz displazi ve bazı formlarıyla Fibröz displazi veya sklerozan Osteomyelit sayılmaktadır.

---

### ÇİFT 26 (Benzerlik: 0.74)

**Soru 1 (ID: 5542328d-6c2c-4efa-bc1d-d67c53233bf7)**
Soru Kökü: Çene kemiklerinde radyolüsent destrüktif kitle saptanan 18 yaşındaki bir hastada ayırıcı tanıda Ewing sarkomu ve Eozinofilik granülom düşünülmektedir. Aşağıdaki radyolojik bulgulardan hangisi, tanıyı Ewing sarkomundan çok Eozinofilik granüloma yaklaştırır?
Doğru Şık (B): Laminar periosteal kemik reaksiyonunun görülmesi
Açıklama: Çenenin aynı kısmında oluşan eozinofilik granülom da Ewing sarkomu gibi destrüktif bir ilerleme gösterir ancak eozinofilik granülom spesifik olarak laminar periosteal kemik reaksiyonu gösterirken, Ewing sarkomunda bu laminar tarz görülmez. Ewing sarkomunda daha çok Codman üçgeni veya güneş ışını (sun ray) şeklinde sekonder kemik formasyonları beklenir.

**Soru 2 (ID: 9652ab56-5ad8-4bc2-a6df-b479d494db0d)**
Soru Kökü: On beş yaşında, çene ağrısı ve parestezisi olan bir erkek hastanın radyografisinde Codman üçgeni ve güneş ışını tarzı periosteal reaksiyon izlenen litik bir destrüksiyon vardır. Ewing sarkomu şüphesiyle değerlendirilen bu hastada aşağıdaki radyolojik-klinik özelliklerden hangisinin görülmesi **beklenmez**?
Doğru Şık (E): Komşu dişleri destekleyen kemiği yıkarken belirgin kök rezorpsiyonu yapması
Açıklama: Ewing sarkomu çenelerde agresif litik dekstrüksiyona, Codman üçgeni veya sun-ray gibi periosteal reaksiyonlara sebep olur. Komşu dişleri destekleyen alveolar kemik yapılarına çok hızlı zarar vermesine rağmen, tümörün hızlı tabiatından dolayı dişlerde rezorpsiyon yapacak süre bulunamaz; bu nedenle kök rezorpsiyonu yapmaz.

---

### ÇİFT 27 (Benzerlik: 0.74)

**Soru 1 (ID: 5542328d-6c2c-4efa-bc1d-d67c53233bf7)**
Soru Kökü: Çene kemiklerinde radyolüsent destrüktif kitle saptanan 18 yaşındaki bir hastada ayırıcı tanıda Ewing sarkomu ve Eozinofilik granülom düşünülmektedir. Aşağıdaki radyolojik bulgulardan hangisi, tanıyı Ewing sarkomundan çok Eozinofilik granüloma yaklaştırır?
Doğru Şık (B): Laminar periosteal kemik reaksiyonunun görülmesi
Açıklama: Çenenin aynı kısmında oluşan eozinofilik granülom da Ewing sarkomu gibi destrüktif bir ilerleme gösterir ancak eozinofilik granülom spesifik olarak laminar periosteal kemik reaksiyonu gösterirken, Ewing sarkomunda bu laminar tarz görülmez. Ewing sarkomunda daha çok Codman üçgeni veya güneş ışını (sun ray) şeklinde sekonder kemik formasyonları beklenir.

**Soru 2 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

---

### ÇİFT 28 (Benzerlik: 0.74)

**Soru 1 (ID: 7e26aae5-8758-4321-a637-8589f23b3ab5)**
Soru Kökü: Çene lezyonlarının temel radyolojik ayırıcı tanı sınıflandırmasında çoklu kadran tutulumu ve spesifik semento-osseöz doku değişimi karakteristiği ile öne çıkan 'Florid osseöz displazi', aşağıdaki radyografik kategorilerin hangisinde kesinlikle **listelenmez**?
Doğru Şık (E): Multiloküler radyolüsensiler
Açıklama: Florid osseöz displazi, çenelerin üç veya dört kadranını yaygın şekilde tutan matürasyon tabanlı bir patolojidir. Gelişim aşamasına göre hem 'multipl radyopasiteler', hem 'mikst radyolüsent-radyopak lezyonlar', hem de yaygın etkileşimi nedeniyle 'generalize radyopasiteler' gruplarında yer alır. Ancak bu lezyonda internal kistik septasyonlar, kemik içi bal peteği/sabun köpüğü oluşumları görülmediği için 'multiloküler radyolüsensiler' grubunda yer alması imkansızdır.

**Soru 2 (ID: 9581cf95-9a42-45d5-9bb1-3d9e43419af5)**
Soru Kökü: Panoramik radyografisinde çene kemiklerinde multiloküler (sabun köpüğü / bal peteği) görünüm saptanan bir hastada, Tablo 12 radyolojik sınıflamasına göre aşağıdaki lezyonlardan hangisi ayırıcı tanıda öncelikle **düşünülmez**?
Doğru Şık (E): Fibröz displazi
Açıklama: Fibröz displazi klasik olarak 'buzlu cam' görünümüyle karakterize mikst radyolüsent-radyopak veya homojen bulanık lezyonlar grubundadır ve multiloküler radyolüsensiler sınıflandırmasında yer almaz. Ameloblastoma, santral dev hücreli granülom, odontojenik mikzom ve odontojenik keratokist (ayrıca anevrizmal kemik kisti, cherubism ve hemanjiom) çenelerde multiloküler radyolüsensi yapan temel patolojilerdir.

---

### ÇİFT 29 (Benzerlik: 0.74)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: 6b644b2e-4246-4867-ae58-33acdd0dbad7)**
Soru Kökü: Çene kemiğinde Ewing sarkomu tespit edilen bir hastanın radyolojik ayırıcı tanısında, her iki lezyon da litik dekstrüksiyon yapmasına rağmen, enfeksiyon kaynaklı osteomyeliti destekleyen ve Ewing sarkomunda görülmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Radyolüsent lezyon sınırları içerisinde sekestr görülmesi
Açıklama: Osteomyelit ve Ewing sarkomunun her ikisi de düzensiz radyolüsensi ve sekonder periost reaksiyonu yapabilir. Ancak osteomyelitte inflamasyona bağlı olarak beslenmesi bozulan ölü kemik adacıkları (sekestr) litik alan içerisinde radyoopak kitleler olarak izlenirken, Ewing sarkomunda nekrotik kemik sekestrasyonu görülmez.

---

### ÇİFT 30 (Benzerlik: 0.74)

**Soru 1 (ID: 157eac2c-bf03-4679-bd71-562e122ef5c6)**
Soru Kökü: İdiopatik osteoskleroz ve ekzostoz oluşumları, radyografik görünümlerine göre hem soliter hem de multipl radyopasiteler oluşturabilme potansiyeline sahiptir. Aşağıdakilerden hangisi ise bu patolojilerin aksine **yalnızca** soliter radyopasite tablosunda listelenen osteojenik bir reaksiyondur?
Doğru Şık (C): Kondanse osteitis
Açıklama: Kondanse osteitis, genellikle enfekte pulpalı tek bir dişin kök ucunda kronik inflamasyona yanıt olarak gelişen lokalize osteoblastik aktivite artışıdır ve tipik soliter radyopasite olarak sınıflandırılır. Matür periapikal semental displazi hem soliter hem multipl gruptayken; Paget, Florid osseoz displazi ve soket sklerozu karakteristik multipl radyopasite grubunda yer alır. İnflamatuar odaklı kök ucu reaksiyonu lokal ve tekildir.

**Soru 2 (ID: 3b94d8af-e072-4bfa-b3a7-4de64d740541)**
Soru Kökü: Sistemik tutulum gösteren bazı kemik patolojileri, davranış karakterleri nedeniyle radyografik olarak birden fazla ana başlık altında (örneğin hem multipl radyopasite hem mikst lezyon hem de generalize radyopasite olarak) çapraz sınıflandırılabilirler. Aşağıdaki hastalıklardan hangisi bu tarz çoklu listelenme özelliğine sahip patolojilerden biri **değildir**?
Doğru Şık (D): Ameloblastik odontom
Açıklama: Ameloblastik odontom radyolojik ve gelişimsel olarak sadece spesifik bir alanı ilgilendiren 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer alan izole bir odontojenik tümördür. Paget hastalığı, Florid osseoz displazi, Hiperparatiroidizm ve Fibröz displazi ise kemik remodeling sürecini tüm kadranlarda ve vücutta bozduklarından sınıflandırma tablolarında hem mikst lezyonlar hem de generalize radyopasiteler/sistemik hastalıklar listelerinde ortak konumlara sahiptir.

---

### ÇİFT 31 (Benzerlik: 0.74)

**Soru 1 (ID: a62c8e2b-c9e2-4e19-b091-db782b13eb75)**
Soru Kökü: 42 yaşında kadın hasta, radyografik inceleme sırasında sağ alt birinci büyük azı dişinin apikal bölgesinde iyi sınırlı tek bir radyopak alan saptanması üzerine kliniğe refere ediliyor. Diş vital ve hastanın herhangi bir şikayeti bulunmamaktadır. Bu hastada saptanan 'soliter radyopasite'nin ayırıcı tanısında aşağıdakilerden hangisinin yer alması **en az olasıdır**?
Doğru Şık (B): Soket sklerozu
Açıklama: Radyografik ayırıcı tanı listelerine göre matür periapikal semental displazi, idiopatik osteoskleroz, yabancı cisimler ve ekzostoz tipik olarak soliter radyopasite ayırıcı tanısında yer alır. Soket sklerozu ise boş çekim soketinin anormal kortikal yoğunlukta dolmasıyla oluşur ve tipik olarak 'multipl radyopasiteler' başlığı altında standardize edilmiştir. Dolayısıyla hastadaki tekil ve izole alan için soket sklerozu patogenezi öncelikle düşünülmez.

**Soru 2 (ID: ca6f5ef3-c69f-475d-89dd-d03512d8d42e)**
Soru Kökü: Dişlerin sement yapısını ve periapikal kemiği etkileyen osteojenik değişiklikler incelendiğinde; aşağıdakilerden hangisi radyografik tabloda 'soliter radyopasite' olarak izlenen lokalize bir patoloji **değildir**?
Doğru Şık (A): Florid osseoz displazi
Açıklama: Florid osseoz displazi (FOD), çenelerin sıklıkla üç veya dört kadranını etkileyen, yaygın kalsifik kitleler sunarak 'multipl radyopasite' veya 'generalize radyopasite' tablosu oluşturan kemik metabolizma hastalığıdır. Matür PSD, kondanse osteitis ve hipersementoz ise ilgili diş/dişler kök ucunda izole kalsifiye odaklar sunarak karakteristik soliter radyopasiteler sınıfına girerler. FOD generalize kemik davranışıdır.

---

### ÇİFT 32 (Benzerlik: 0.74)

**Soru 1 (ID: 157eac2c-bf03-4679-bd71-562e122ef5c6)**
Soru Kökü: İdiopatik osteoskleroz ve ekzostoz oluşumları, radyografik görünümlerine göre hem soliter hem de multipl radyopasiteler oluşturabilme potansiyeline sahiptir. Aşağıdakilerden hangisi ise bu patolojilerin aksine **yalnızca** soliter radyopasite tablosunda listelenen osteojenik bir reaksiyondur?
Doğru Şık (C): Kondanse osteitis
Açıklama: Kondanse osteitis, genellikle enfekte pulpalı tek bir dişin kök ucunda kronik inflamasyona yanıt olarak gelişen lokalize osteoblastik aktivite artışıdır ve tipik soliter radyopasite olarak sınıflandırılır. Matür periapikal semental displazi hem soliter hem multipl gruptayken; Paget, Florid osseoz displazi ve soket sklerozu karakteristik multipl radyopasite grubunda yer alır. İnflamatuar odaklı kök ucu reaksiyonu lokal ve tekildir.

**Soru 2 (ID: ca6f5ef3-c69f-475d-89dd-d03512d8d42e)**
Soru Kökü: Dişlerin sement yapısını ve periapikal kemiği etkileyen osteojenik değişiklikler incelendiğinde; aşağıdakilerden hangisi radyografik tabloda 'soliter radyopasite' olarak izlenen lokalize bir patoloji **değildir**?
Doğru Şık (A): Florid osseoz displazi
Açıklama: Florid osseoz displazi (FOD), çenelerin sıklıkla üç veya dört kadranını etkileyen, yaygın kalsifik kitleler sunarak 'multipl radyopasite' veya 'generalize radyopasite' tablosu oluşturan kemik metabolizma hastalığıdır. Matür PSD, kondanse osteitis ve hipersementoz ise ilgili diş/dişler kök ucunda izole kalsifiye odaklar sunarak karakteristik soliter radyopasiteler sınıfına girerler. FOD generalize kemik davranışıdır.

---

### ÇİFT 33 (Benzerlik: 0.74)

**Soru 1 (ID: 355698c3-1661-4f3e-a826-2ab0c2265863)**
Soru Kökü: Burkitt Lenfoma'nın çene tutulumu ile ilgili aşağıdaki klinik ve radyolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Büyüme sürecinde reaktif olarak kortekse paralel güçlü laminar periost reaksiyonu görülür.
Açıklama: Burkitt lenfoma çok agresif osteolitik bir yıkım yapar ve periostu kemik oluşturmaya teşvik edecek zaman bırakmaz. Çenede karakteristik laminar (soğan zarı) periosteal reaksiyon gösteren hastalık Burkitt lenfoma değil, Osteomiyelit veya Eozinofilik Granülomdur. Yüzen dişler ve PDL genişlemesi ise lenfoma için tipiktir.

**Soru 2 (ID: f359f178-a3fb-4f87-a4e9-8c76f8c8dcff)**
Soru Kökü: Kronik lösemi hastalarının çene radyografilerinde izlenen spesifik kemik değişiklikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Çene kemiklerinde asimetrik ve hızlı ekspansiyona (genişlemeye) neden olur.
Açıklama: Radyolojik belirtiler daha çok kronik lösemide belirgindir ve ilik boşluğundaki malign proliferasyona bağlı olarak yaygın osteopeni, lamina dura kaybı ve dişlerin belirginleşmesi görülür. Ancak lösemik infiltrasyonlar genellikle kortikal sınırları içeriden inceltmesine rağmen çene kemiğinde belirgin bir genişlemeye (ekspansiyon) neden OLMAZ. Çene ekspansiyonu Burkitt lenfoma, santral dev hücreli granülom veya ameloblastoma gibi kitle lezyonları için tipiktir.

---

### ÇİFT 34 (Benzerlik: 0.74)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: ea155f84-8d49-4fd0-bf6b-84cbb2ec698e)**
Soru Kökü: On yaşındaki erkek hasta, halsizlik ve mukozal solukluk şikayetleriyle getirilmiştir. Hastanın panoramik radyografisinde şiddetli generalize periodontal destrüksiyon alanları, dişler çevresinde osteopenik görünüm ve gelişmekte olan mandibular daimi molar dişin kriptinden yukarıya (oklüzal yöne) doğru yer değiştirdiği izlenmiştir. Dişlerde genişleme yapan lokal bir kitle etkisi yoktur. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Lösemi
Açıklama: Lösemide (özellikle çocukluk çağında) kemik iliğinin malign hücrelerle dolması, generalize kemik yoğunluğu azalmasına (osteopeni), sistemik anemi/solukluk bulgularına ve kökü gelişmemiş sürmekte olan dişlerin folikül içi basınç artışıyla oklüzale itilmesine (premature erüpsiyon) neden olur. Kitle yapmadan bu tabloyu çizen en karakteristik sistemik malignite lösemidir.

---

### ÇİFT 35 (Benzerlik: 0.73)

**Soru 1 (ID: 5a770f81-823f-4d41-be12-5c4bb2c2e11f)**
Soru Kökü: Aşağıdaki kistik veya tümöral lezyonlardan hangisi, Tablo 12'ye göre 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer **almaz**?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Tablo 12'deki sınıflandırmaya göre Ameloblastik fibrom, kalsifikasyon İÇERMEYEN perikoronal radyolüsensiler sınıfındadır (Dentijeröz kist, erüpsiyon kisti, OKK ve ameloblastoma ile birlikte). Seçeneklerdeki AOT, CEOT, COC ve Ameloblastik fibro-odontom ise internal yapısında kalsifiye/radyopak odak barındıran perikoronal lezyonlardır.

**Soru 2 (ID: 9581cf95-9a42-45d5-9bb1-3d9e43419af5)**
Soru Kökü: Panoramik radyografisinde çene kemiklerinde multiloküler (sabun köpüğü / bal peteği) görünüm saptanan bir hastada, Tablo 12 radyolojik sınıflamasına göre aşağıdaki lezyonlardan hangisi ayırıcı tanıda öncelikle **düşünülmez**?
Doğru Şık (E): Fibröz displazi
Açıklama: Fibröz displazi klasik olarak 'buzlu cam' görünümüyle karakterize mikst radyolüsent-radyopak veya homojen bulanık lezyonlar grubundadır ve multiloküler radyolüsensiler sınıflandırmasında yer almaz. Ameloblastoma, santral dev hücreli granülom, odontojenik mikzom ve odontojenik keratokist (ayrıca anevrizmal kemik kisti, cherubism ve hemanjiom) çenelerde multiloküler radyolüsensi yapan temel patolojilerdir.

---

### ÇİFT 36 (Benzerlik: 0.73)

**Soru 1 (ID: 6efaeaa1-959a-4d77-adec-660d80f192f5)**
Soru Kökü: Çene radyografilerinde periodonsiyumu sağlam sağlıklı bir dişin kök bölgesinde, normal lamina dura varlığına rağmen periodontal ligament aralığının daraldığı ve destekleyici kemiğin normal düzenini yitirdiği saptanmıştır. Bu tabloyu göstererek osteosarkom şüphesini dışlayan radyolojik teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Fibröz displazi
Açıklama: Osteosarkom, kondrosarkom veya fibrosarkom gibi malign mezenkimal lezyonlarda periodontal ligament aralığında asimetrik genişleme ve lamina dura kaybı izlenir. Fibröz displazide ise patognomonik olarak lamina dura bütünlüğü bir süre korunarak periodontal aralıkta DARALMA meydana gelir, bu durum displastik kemiğin diş köküne baskı yapmasındandır.

**Soru 2 (ID: a1f18e3c-4139-4f28-9731-3c41db53b76e)**
Soru Kökü: Malignitelerde ve kemik hastalıklarında periodontal ligament (PDL) aralığındaki radyografik değişiklikler tanıda yönlendiricidir. Osteosarkomda asimetrik genişleme, lösemide osteopeni ile birleşen belirginleşme görülürken; hangi patolojide PDL aralığında karakteristik bir **daralma** izlenmesi beklenir?
Doğru Şık (C): Fibröz displazi
Açıklama: Fibröz displazi, kemiğin normal yapısının yerini fibröz doku ve disorganize kemik trabeküllerinin aldığı bir benign kemik hastalığıdır. Bu süreçte dişleri çevreleyen lamina dura normal yapısını koruyabilir veya incelebilir, ancak etraftaki fibröz-kemik matriksin diş köküne baskı yapması sonucu PDL aralığında tipik bir daralma izlenir.

---

### ÇİFT 37 (Benzerlik: 0.73)

**Soru 1 (ID: 20941c53-86fb-4a57-9e46-701ddff2879f)**
Soru Kökü: 14 yaşında erkek hasta, radyolojik muayenede gömülü kalan mandibular daimi dişi çevreleyen radyolüsent bir kist saptanmasıyla değerlendiriliyor. Bu perikoronal alan içerisinde odontojenik kaynaklı dağınık kalsifikasyon (radyopasite) odakları izlenmiştir. Sınıflandırma listelerine göre aşağıdakilerden hangisi kalsifikasyon barındıran bu perikoronal radyolüsensi tablosuna uygun tanılardan biri **değildir**?
Doğru Şık (E): Hiperplastik folikül
Açıklama: Hiperplastik folikül tamamen ektomezenkimal yumuşak doku kökenli olup mineralize yapılar sentezlemediğinden 'kalsifikasyon içermeyen' perikoronal radyolüsensiler listesinde tanımlanır. Adenomatoid odontojenik tümör, ameloblastik odontom, Kalsifiye epitelyal odontojenik tümör ve ameloblastik fibro-odontom ise neoplastik gelişim sürecinde sert doku (mine/dentin vb.) ürettikleri için 'kalsifikasyon var' grubundadır. Yumuşak doku lezyonlarında kalsifikasyon radyolojik olarak beklenmez.

**Soru 2 (ID: 6e0e913d-6244-40d0-b697-6636405a7031)**
Soru Kökü: Aşağıdaki odontojenik lezyonlardan hangisi, histolojik epitel ve mezenkim gelişimi boyunca mineralize matris (radyopak materyal) sentezlemediğinden 'kalsifikasyon içeren perikoronal radyolüsensiler' ayırıcı tanısında **beklenmez**?
Doğru Şık (E): Ameloblastoma
Açıklama: Ameloblastoma lokal agresif gelişim gösteren ve mineralize yapılar sentezlemeyen bir tümör olduğundan tipik olarak kalsifikasyon içermeyen perikoronal radyolüsensi formunda izlenir. Kalsifiye odontojenik kist (Gorlin), AOT, ameloblastik odontom ve ameloblastik fibro-odontom ise perikoronal lokalizasyonlarında odontojenik sert doku formasyonları ve kalsifikasyonlar oluştururlar. Radyopak odağın izlenmesi salt ameloblastoma tanısından hekimi uzaklaştırır.

---

### ÇİFT 38 (Benzerlik: 0.73)

**Soru 1 (ID: 0aa83509-98d2-4666-8250-740b811abe57)**
Soru Kökü: Ewing Sarkomunun çene kemiklerindeki radyolojik davranışı ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Komşu dişleri destekleyen kemiği yıkarken aynı zamanda diş köklerinde şiddetli rezorpsiyona yol açar.
Açıklama: Ewing sarkomu komşu dişleri destekleyen kemik yapılarını son derece agresif bir şekilde harap etse de, tipik olarak dişlerin köklerinde rezorpsiyon yapmaz. Tümör kemik trabeküllerini hızla litik erozyona uğratır fakat dişin sement ve dentin yapıları bu süreçten korunur. Diğer seçeneklerdeki kortikal yıkım, Codman üçgeni, sınır belirsizliği ve folikül tahribatı Ewing sarkomunun karakteristik hızlı büyüme belirtileridir.

**Soru 2 (ID: 5542328d-6c2c-4efa-bc1d-d67c53233bf7)**
Soru Kökü: Çene kemiklerinde radyolüsent destrüktif kitle saptanan 18 yaşındaki bir hastada ayırıcı tanıda Ewing sarkomu ve Eozinofilik granülom düşünülmektedir. Aşağıdaki radyolojik bulgulardan hangisi, tanıyı Ewing sarkomundan çok Eozinofilik granüloma yaklaştırır?
Doğru Şık (B): Laminar periosteal kemik reaksiyonunun görülmesi
Açıklama: Çenenin aynı kısmında oluşan eozinofilik granülom da Ewing sarkomu gibi destrüktif bir ilerleme gösterir ancak eozinofilik granülom spesifik olarak laminar periosteal kemik reaksiyonu gösterirken, Ewing sarkomunda bu laminar tarz görülmez. Ewing sarkomunda daha çok Codman üçgeni veya güneş ışını (sun ray) şeklinde sekonder kemik formasyonları beklenir.

---

### ÇİFT 39 (Benzerlik: 0.73)

**Soru 1 (ID: 0aa83509-98d2-4666-8250-740b811abe57)**
Soru Kökü: Ewing Sarkomunun çene kemiklerindeki radyolojik davranışı ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Komşu dişleri destekleyen kemiği yıkarken aynı zamanda diş köklerinde şiddetli rezorpsiyona yol açar.
Açıklama: Ewing sarkomu komşu dişleri destekleyen kemik yapılarını son derece agresif bir şekilde harap etse de, tipik olarak dişlerin köklerinde rezorpsiyon yapmaz. Tümör kemik trabeküllerini hızla litik erozyona uğratır fakat dişin sement ve dentin yapıları bu süreçten korunur. Diğer seçeneklerdeki kortikal yıkım, Codman üçgeni, sınır belirsizliği ve folikül tahribatı Ewing sarkomunun karakteristik hızlı büyüme belirtileridir.

**Soru 2 (ID: 355698c3-1661-4f3e-a826-2ab0c2265863)**
Soru Kökü: Burkitt Lenfoma'nın çene tutulumu ile ilgili aşağıdaki klinik ve radyolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Büyüme sürecinde reaktif olarak kortekse paralel güçlü laminar periost reaksiyonu görülür.
Açıklama: Burkitt lenfoma çok agresif osteolitik bir yıkım yapar ve periostu kemik oluşturmaya teşvik edecek zaman bırakmaz. Çenede karakteristik laminar (soğan zarı) periosteal reaksiyon gösteren hastalık Burkitt lenfoma değil, Osteomiyelit veya Eozinofilik Granülomdur. Yüzen dişler ve PDL genişlemesi ise lenfoma için tipiktir.

---

### ÇİFT 40 (Benzerlik: 0.73)

**Soru 1 (ID: 466a8d1a-a49b-43a6-b4c4-352d33832baf)**
Soru Kökü: Kırk yaşında kadın hasta, posterior mandibulada yavaş ancak progresif olarak genişleyen, ağrılı bir kitle nedeniyle başvuruyor. Panoramik radyografide alveolar proses ve mandibular kanalın kortikal sınırını silen, kapsülsüz dekstrüktif bir radyolüsensi saptanıyor. Tanı olarak fibrosarkom düşünülen bu lezyonun periferal sinirleri invaze etmesi durumunda **en olası** klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Duyusal nöral anormaliteler (parestezi/anestezi)
Açıklama: Fibrosarkomlar periferal sinirleri içerdiğinde ağrıya ek olarak duyusal nöral anormalitelere (parestezi, anestezi, dizestezi) neden olur. TME veya paramandibular kaslar tutulursa trismus görülür. Dişlerde hipersementoz değil, destek kemik kaybına bağlı havada yüzme görünümü beklenir.

**Soru 2 (ID: f32f5efd-92ac-4252-8525-710d2dd2b08a)**
Soru Kökü: 42 yaşında kadın hasta, sağ mandibula posterior bölgede ağrılı şişlik ve alt dudakta uyuşukluk şikayetiyle başvuruyor. Alınan radyografide, sürmemiş bir 20 yaş dişinin kuronunu çevreleyen, düzensiz sınırlı ve kortikal erozyona neden olmuş multiloküler bir radyolüsensi izleniyor. Bu klinik tabloda dentijeröz kist tanısını uzaklaştırıp maligniteyi (özellikle santral mukoepidermoid karsinom) destekleyen **en az olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Sürmemiş bir dişle ilişkili olması
Açıklama: Santral mukoepidermoid karsinom olgularının yaklaşık %50'si sürmemiş bir dişle ilişkilidir, tıpkı bir dentijeröz kist gibi. Bu nedenle sürmemiş dişle ilişkili olması, maligniteyi destekleyen veya kistten ayıran bir özellik değildir, ortak bulgudur. Ancak ağrı, parestezi ve kortikal erozyon dentijeröz kistte beklenmeyen, maligniteye (CMEC) işaret eden kritik bulgulardır.

---

### ÇİFT 41 (Benzerlik: 0.73)

**Soru 1 (ID: 830db24a-0573-4eac-8ff6-f4aeabe560dd)**
Soru Kökü: Radyolojik incelemede tekil, izole ve sınırları belirgin 'soliter radyopasite' saptanan bir vakada, aşağıdaki lezyonlardan hangisi standart ayırıcı tanı listesinde yer **almaz**?
Doğru Şık (E): Florid osseoz displazi
Açıklama: Florid osseöz displazi, kemik metabolizmasını yaygın etkileyen ve radyografik olarak multipl veya generalize radyopasiteler şeklinde izlenen bir patolojidir. Buna karşın enostoz, kondanse osteitis, hipersementoz ve kalmış kökler çenelerde fokal, tekil odak formunda gelişen karakteristik soliter radyopasitelerdir. Generalize kemik yıkım/yapım tabloları soliter lezyonlar kategorisinden dışlanmalıdır.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 42 (Benzerlik: 0.73)

**Soru 1 (ID: 1e07df38-b9d7-444a-bae2-bab6298bfb7d)**
Soru Kökü: Baş ve boyun bölgesinin radyolojik değerlendirmesinde kalsifiye bir opasite tespit edilen hastada, lezyonun anatomik komşulukları incelenmiştir. Sınıflandırma prensiplerine göre aşağıdakilerden hangisi 'yumuşak doku kalsifikasyonları' arasında yer alan bir patoloji **değildir**?
Doğru Şık (C): Enostoz
Açıklama: Enostoz (idiopatik osteoskleroz), kemik dokusu içinde gelişen fokal sklerotik kemik adacığıdır ve kesinlikle 'soliter radyopasiteler' kategorisinde sınıflandırılır. Sialolith, flebolit, rinolit ve antrolit ise tükürük bezi kanalı, venöz damar lümeni veya sinüs/nazal kavite gibi spesifik yumuşak doku boşluklarında gelişen kalsifikasyonlardır. Radyografik değerlendirmede opasitenin intraosseöz mü yoksa ektopik yumuşak doku kökenli mi olduğu ayırıcı tanıda temeldir.

**Soru 2 (ID: 3ab857f8-35a2-4bc8-ba09-bccbada21921)**
Soru Kökü: Çene ve yüz bölgesinde radyografik inceleme sırasında fark edilebilecek yumuşak doku kalsifikasyonları sınıflandırmasında aşağıdakilerden hangisinin bulunması **beklenmez**?
Doğru Şık (D): Aterom plağı
Açıklama: Yumuşak doku kalsifikasyonları tablosunda; Sialolit, Kalsifiye lenf nodu, Antrolit, Flebolit, Rinolit, Kalsifiye fasial arter, Yabancı obje ve Tonsillolit açıkça belirtilmiştir. Karotis arterindeki aterom plağı da klinik olarak bir kalsifikasyon olsa da, bu spesifik tablo ve sınıflandırmada listelenmemiştir; dolayısıyla referans kaynağa göre dışarıda kalır.

---

### ÇİFT 43 (Benzerlik: 0.73)

**Soru 1 (ID: 0aa83509-98d2-4666-8250-740b811abe57)**
Soru Kökü: Ewing Sarkomunun çene kemiklerindeki radyolojik davranışı ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Komşu dişleri destekleyen kemiği yıkarken aynı zamanda diş köklerinde şiddetli rezorpsiyona yol açar.
Açıklama: Ewing sarkomu komşu dişleri destekleyen kemik yapılarını son derece agresif bir şekilde harap etse de, tipik olarak dişlerin köklerinde rezorpsiyon yapmaz. Tümör kemik trabeküllerini hızla litik erozyona uğratır fakat dişin sement ve dentin yapıları bu süreçten korunur. Diğer seçeneklerdeki kortikal yıkım, Codman üçgeni, sınır belirsizliği ve folikül tahribatı Ewing sarkomunun karakteristik hızlı büyüme belirtileridir.

**Soru 2 (ID: 9652ab56-5ad8-4bc2-a6df-b479d494db0d)**
Soru Kökü: On beş yaşında, çene ağrısı ve parestezisi olan bir erkek hastanın radyografisinde Codman üçgeni ve güneş ışını tarzı periosteal reaksiyon izlenen litik bir destrüksiyon vardır. Ewing sarkomu şüphesiyle değerlendirilen bu hastada aşağıdaki radyolojik-klinik özelliklerden hangisinin görülmesi **beklenmez**?
Doğru Şık (E): Komşu dişleri destekleyen kemiği yıkarken belirgin kök rezorpsiyonu yapması
Açıklama: Ewing sarkomu çenelerde agresif litik dekstrüksiyona, Codman üçgeni veya sun-ray gibi periosteal reaksiyonlara sebep olur. Komşu dişleri destekleyen alveolar kemik yapılarına çok hızlı zarar vermesine rağmen, tümörün hızlı tabiatından dolayı dişlerde rezorpsiyon yapacak süre bulunamaz; bu nedenle kök rezorpsiyonu yapmaz.

---

### ÇİFT 44 (Benzerlik: 0.73)

**Soru 1 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

**Soru 2 (ID: ea155f84-8d49-4fd0-bf6b-84cbb2ec698e)**
Soru Kökü: On yaşındaki erkek hasta, halsizlik ve mukozal solukluk şikayetleriyle getirilmiştir. Hastanın panoramik radyografisinde şiddetli generalize periodontal destrüksiyon alanları, dişler çevresinde osteopenik görünüm ve gelişmekte olan mandibular daimi molar dişin kriptinden yukarıya (oklüzal yöne) doğru yer değiştirdiği izlenmiştir. Dişlerde genişleme yapan lokal bir kitle etkisi yoktur. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Lösemi
Açıklama: Lösemide (özellikle çocukluk çağında) kemik iliğinin malign hücrelerle dolması, generalize kemik yoğunluğu azalmasına (osteopeni), sistemik anemi/solukluk bulgularına ve kökü gelişmemiş sürmekte olan dişlerin folikül içi basınç artışıyla oklüzale itilmesine (premature erüpsiyon) neden olur. Kitle yapmadan bu tabloyu çizen en karakteristik sistemik malignite lösemidir.

---

### ÇİFT 45 (Benzerlik: 0.73)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: 5542328d-6c2c-4efa-bc1d-d67c53233bf7)**
Soru Kökü: Çene kemiklerinde radyolüsent destrüktif kitle saptanan 18 yaşındaki bir hastada ayırıcı tanıda Ewing sarkomu ve Eozinofilik granülom düşünülmektedir. Aşağıdaki radyolojik bulgulardan hangisi, tanıyı Ewing sarkomundan çok Eozinofilik granüloma yaklaştırır?
Doğru Şık (B): Laminar periosteal kemik reaksiyonunun görülmesi
Açıklama: Çenenin aynı kısmında oluşan eozinofilik granülom da Ewing sarkomu gibi destrüktif bir ilerleme gösterir ancak eozinofilik granülom spesifik olarak laminar periosteal kemik reaksiyonu gösterirken, Ewing sarkomunda bu laminar tarz görülmez. Ewing sarkomunda daha çok Codman üçgeni veya güneş ışını (sun ray) şeklinde sekonder kemik formasyonları beklenir.

---

### ÇİFT 46 (Benzerlik: 0.73)

**Soru 1 (ID: c49ba318-53d4-42cf-becb-368aa32fd72a)**
Soru Kökü: Radyografik incelemede mandibula ve maksillada anatomik kortikal sınırların belirsizleştiği, standardize generalize kemik yoğunluğu artışı (osteoskleroz) saptanan bir hastada, bu radyopasite artışının iskeletsel bir nedene bağlı olduğu düşünülmektedir. Aşağıdaki hastalıklardan hangisi bu durumun ayırıcı tanısında öncelikli olarak değerlendirilir?
Doğru Şık (B): Osteopetrozis
Açıklama: Osteopetrozis, osteoklastların kemik rezorpsiyon işlevini yerine getirememesi sonucu generalize radyopasite (mermer kemik) tablosunun görüldüğü bir sistemik hastalıktır. Cherubism multikistik kemik yıkımlarıyla, Langerhans hücreli histiyositoz apikal radyolüsensiler ve 'yüzen diş' manzarasıyla, santral hemanjiom ise sabun köpüğü radyolüsensilerle karakterizedir. Generalize osteoskleroz tablosu bu ayırıcı tanıda yalnızca osteopetrozise işaret eder.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 47 (Benzerlik: 0.73)

**Soru 1 (ID: 40d5a23e-f983-4eb9-add9-e3b0ed67d75b)**
Soru Kökü: Kırk beş yaşında kadın hasta, anterior mandibulada kortikal ekspansiyon yapan multiloküler (sabun köpüğü) radyolüsent bir kitle şikayetiyle başvurmuştur. Radyolojik ayırıcı tanıda ameloblastoma ile santral dev hücreli granülom arasında kalınmıştır. Aşağıdaki bulgulardan hangisi teşhisin santral dev hücreli granülom lehine kaymasını sağlar?
Doğru Şık (D): Lezyonun daimi ikinci molar dişin anteriorunda lokalize olması
Açıklama: Santral dev hücreli granülomlar tipik olarak daha genç hastalarda görülür ve lezyonun epikentri hemen her zaman daimi 2. molar dişin anteriorunda yer alır. Ameloblastoma ise sıklıkla posterior mandibula ve ramusu tercih eder. Tenis raketi görünümü odontojenik mikzomanın, kök rezorpsiyonu ise ameloblastomanın ayırıcı karakteristiklerindendir.

**Soru 2 (ID: f32f5efd-92ac-4252-8525-710d2dd2b08a)**
Soru Kökü: 42 yaşında kadın hasta, sağ mandibula posterior bölgede ağrılı şişlik ve alt dudakta uyuşukluk şikayetiyle başvuruyor. Alınan radyografide, sürmemiş bir 20 yaş dişinin kuronunu çevreleyen, düzensiz sınırlı ve kortikal erozyona neden olmuş multiloküler bir radyolüsensi izleniyor. Bu klinik tabloda dentijeröz kist tanısını uzaklaştırıp maligniteyi (özellikle santral mukoepidermoid karsinom) destekleyen **en az olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Sürmemiş bir dişle ilişkili olması
Açıklama: Santral mukoepidermoid karsinom olgularının yaklaşık %50'si sürmemiş bir dişle ilişkilidir, tıpkı bir dentijeröz kist gibi. Bu nedenle sürmemiş dişle ilişkili olması, maligniteyi destekleyen veya kistten ayıran bir özellik değildir, ortak bulgudur. Ancak ağrı, parestezi ve kortikal erozyon dentijeröz kistte beklenmeyen, maligniteye (CMEC) işaret eden kritik bulgulardır.

---

### ÇİFT 48 (Benzerlik: 0.73)

**Soru 1 (ID: 5542328d-6c2c-4efa-bc1d-d67c53233bf7)**
Soru Kökü: Çene kemiklerinde radyolüsent destrüktif kitle saptanan 18 yaşındaki bir hastada ayırıcı tanıda Ewing sarkomu ve Eozinofilik granülom düşünülmektedir. Aşağıdaki radyolojik bulgulardan hangisi, tanıyı Ewing sarkomundan çok Eozinofilik granüloma yaklaştırır?
Doğru Şık (B): Laminar periosteal kemik reaksiyonunun görülmesi
Açıklama: Çenenin aynı kısmında oluşan eozinofilik granülom da Ewing sarkomu gibi destrüktif bir ilerleme gösterir ancak eozinofilik granülom spesifik olarak laminar periosteal kemik reaksiyonu gösterirken, Ewing sarkomunda bu laminar tarz görülmez. Ewing sarkomunda daha çok Codman üçgeni veya güneş ışını (sun ray) şeklinde sekonder kemik formasyonları beklenir.

**Soru 2 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

---

### ÇİFT 49 (Benzerlik: 0.73)

**Soru 1 (ID: 3e5f327d-b6a6-48cf-a06b-de449c864cf8)**
Soru Kökü: Alt çenesinde hissizlik (parestezi) şikayeti bulunan 65 yaşındaki hastanın radyografisinde kortikal kemiğin dış yüzeyinde 'kurabiye ısırığı' şeklinde yüzeyel bir erozyon izlenmiştir. Bu radyolojik merkez üssü (epicenter) konumu, kemik içine oturan dairesel bir metastatik lezyondan ziyade aşağıdakilerden hangisinin öncelikli habercisidir?
Doğru Şık (C): Primer çene yassı hücreli karsinomu (SCC)
Açıklama: Çenede görülen yumuşak doku kaynaklı Primer Yassı Hücreli Karsinom (SCC), kemiğe yüzeyden dışarıdan içeriye doğru invaze olduğu için korteks yüzeyinde 'kurabiye ısırığı' şeklinde litik bir defekt (dıştan içe erozyon) oluşturur. Buna karşılık kan yoluyla gelen metastatik tümörlerin merkez üssü kemiğin içindedir (medulla) ve dairesel/oval şekilde dışa doğru büyürler.

**Soru 2 (ID: 467b96b3-98e7-4ed9-aeea-c5d55cb071ca)**
Soru Kökü: Altmış sekiz yaşında erkek hasta, mandibula molar bölgede patolojik kırık ve alt dudakta parestezi şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide belirsiz sınırlı radyolüsent dekstrüksiyon alanı izleniyor. Primer kemikten köken alan (intraosseöz) skuamöz hücreli karsinom şüphesi olan bu vakada, tanıyı destekleyecek en kritik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Mandibular kanalın korteks devamlılığında kayıp
Açıklama: Primer intraosseöz SCC'de neoplastik infiltrasyon kemiği dekstrükte ederken, mandibular kanalın kortikal sınırlarında devamlılık kaybına yol açar. Diş kök rezorpsiyonu SCC'de oldukça nadirdir, lezyonlar genellikle dişlerin havada asılı gibi görünmesine neden olur. Sekestr oluşumu ise osteomyelit lehine bulgudur.

---

### ÇİFT 50 (Benzerlik: 0.73)

**Soru 1 (ID: 157eac2c-bf03-4679-bd71-562e122ef5c6)**
Soru Kökü: İdiopatik osteoskleroz ve ekzostoz oluşumları, radyografik görünümlerine göre hem soliter hem de multipl radyopasiteler oluşturabilme potansiyeline sahiptir. Aşağıdakilerden hangisi ise bu patolojilerin aksine **yalnızca** soliter radyopasite tablosunda listelenen osteojenik bir reaksiyondur?
Doğru Şık (C): Kondanse osteitis
Açıklama: Kondanse osteitis, genellikle enfekte pulpalı tek bir dişin kök ucunda kronik inflamasyona yanıt olarak gelişen lokalize osteoblastik aktivite artışıdır ve tipik soliter radyopasite olarak sınıflandırılır. Matür periapikal semental displazi hem soliter hem multipl gruptayken; Paget, Florid osseoz displazi ve soket sklerozu karakteristik multipl radyopasite grubunda yer alır. İnflamatuar odaklı kök ucu reaksiyonu lokal ve tekildir.

**Soru 2 (ID: 9a880e78-8260-432e-b34c-cc0296dc6ace)**
Soru Kökü: Çene grafilerinde birden fazla bölgede yaygın (multipl) radyopak odakların saptanması, sistemik veya sendromik hastalıkların radyolojik habercisi olabilir. Aşağıdaki patolojilerden hangisi standart klinik sınıflandırmalarda 'multipl radyopasite' tablosuna neden olan hastalıklardan biri **değildir**?
Doğru Şık (D): Enostoz
Açıklama: Enostoz (kemik adacığı), çene kemiği medullasında gelişen yoğun kortikal kemik kitlesidir ve karakteristik olarak soliter radyopasite formunda izlenir. Paget hastalığının sklerotik evresi, süpernumerer dişler, Gardner sendromuna bağlı multipl osteomalar ve matür periapikal semental displazi ise hastada multipl radyopasite tablosuna neden olur. Sınıflandırmada multipl gelişim göstermeyen yapı enostozdur.

---

### ÇİFT 51 (Benzerlik: 0.73)

**Soru 1 (ID: 467b96b3-98e7-4ed9-aeea-c5d55cb071ca)**
Soru Kökü: Altmış sekiz yaşında erkek hasta, mandibula molar bölgede patolojik kırık ve alt dudakta parestezi şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide belirsiz sınırlı radyolüsent dekstrüksiyon alanı izleniyor. Primer kemikten köken alan (intraosseöz) skuamöz hücreli karsinom şüphesi olan bu vakada, tanıyı destekleyecek en kritik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Mandibular kanalın korteks devamlılığında kayıp
Açıklama: Primer intraosseöz SCC'de neoplastik infiltrasyon kemiği dekstrükte ederken, mandibular kanalın kortikal sınırlarında devamlılık kaybına yol açar. Diş kök rezorpsiyonu SCC'de oldukça nadirdir, lezyonlar genellikle dişlerin havada asılı gibi görünmesine neden olur. Sekestr oluşumu ise osteomyelit lehine bulgudur.

**Soru 2 (ID: e74ce30e-7dc1-41f6-9c11-cce282e819a8)**
Soru Kökü: 55 yaşında prostat adenokarsinomu öyküsü olan erkek hastada alt çenede uyuşukluk şikayeti başlamıştır. Mandibulanın görüntülenmesinde metastaz ile primer çene içi skuamöz hücreli karsinomu birbirinden ayırmak amacıyla lezyonun radyolojik morfolojisi incelenmektedir. Lezyonun metastaz olduğunu destekleyen temel lokasyon bulgusu aşağıdakilerden hangisidir?
Doğru Şık (B): Lezyonun merkez üssünün derin kemik medullası içinde olması ve sınırlarının oval seyretmesi
Açıklama: Metastatik tümörler hematojen yolla geldikleri için merkez üsleri (epicenter) genellikle mandibuladaki derin medüller kemiğin içindedir ve dairesel/oval büyürler. Primer intraosseöz veya gingivadan yayılan SCC'lerin merkez üssü ise kemik yüzeyine (alveoler kret) daha yakındır ve yüzeyel 'kurabiye ısırığı' tarzı destrüksiyonla içe doğru ilerler.

---

### ÇİFT 52 (Benzerlik: 0.73)

**Soru 1 (ID: 61554eb0-3a40-4ae0-abef-396b482369ad)**
Soru Kökü: Sekiz yaşındaki hastada kronik otitis media öyküsü ile birlikte çenelerin radyografik incelemesinde alveolar kemikte masif destrüksiyon izleniyor. Multipl radyolüsent odaklar arasında dişlerin havada 'yüzüyormuş' gibi göründüğü belirleniyor. Diğer iskelet sistemi bölgelerinde de lezyonlar varsa, 'Multipl Radyolüsensiler' kategorisindeki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücre hastalığı (Histiositozis X)
Açıklama: Langerhans hücreli histiyositoz (Histiyositozis X), genç hastalarda multipl zımba deliği tarzı lezyonlar yapar ve geniş alveolar kemik destrüksiyonu neticesinde dişlerin havada yüzer gibi kalması bu hastalığın patognomoniğe yakın bir radyografik sunumudur.

**Soru 2 (ID: ea155f84-8d49-4fd0-bf6b-84cbb2ec698e)**
Soru Kökü: On yaşındaki erkek hasta, halsizlik ve mukozal solukluk şikayetleriyle getirilmiştir. Hastanın panoramik radyografisinde şiddetli generalize periodontal destrüksiyon alanları, dişler çevresinde osteopenik görünüm ve gelişmekte olan mandibular daimi molar dişin kriptinden yukarıya (oklüzal yöne) doğru yer değiştirdiği izlenmiştir. Dişlerde genişleme yapan lokal bir kitle etkisi yoktur. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Lösemi
Açıklama: Lösemide (özellikle çocukluk çağında) kemik iliğinin malign hücrelerle dolması, generalize kemik yoğunluğu azalmasına (osteopeni), sistemik anemi/solukluk bulgularına ve kökü gelişmemiş sürmekte olan dişlerin folikül içi basınç artışıyla oklüzale itilmesine (premature erüpsiyon) neden olur. Kitle yapmadan bu tabloyu çizen en karakteristik sistemik malignite lösemidir.

---

### ÇİFT 53 (Benzerlik: 0.73)

**Soru 1 (ID: 1ab0df52-4cef-4544-b34c-bedaefdc2548)**
Soru Kökü: Dental pratikte rutin alınan panoramik radyografilerde kemik yapısının sistemik bir problemden ötürü total olarak değiştiği 'generalize radyopasite' izlenebilir. Aşağıdaki patolojilerden hangisi tüm çene kemiklerinde generalize (yaygın) radyopasiteye neden olan sistemik hastalıklardan biri **değildir**?
Doğru Şık (E): Cherubism
Açıklama: Osteopetrozis (kemik yoğunluğunun aşırı artması), Paget hastalığı (anormal kemik döngüsüyle pamuk yığını), Florid Osseöz Displazi (yaygın semento-osseöz kitleler) ve hiperparatiroidizmin bazı sklerotik safhaları çenelerde generalize radyopasite oluşturur. Cherubism (familyal fibröz displazi varyantı) ise çene açılarında bilateral, çok odacıklı (multiloküler) radyolüsent sabun köpüğü görünümü yapar; radyoopak bir hastalık değildir.

**Soru 2 (ID: 3b94d8af-e072-4bfa-b3a7-4de64d740541)**
Soru Kökü: Sistemik tutulum gösteren bazı kemik patolojileri, davranış karakterleri nedeniyle radyografik olarak birden fazla ana başlık altında (örneğin hem multipl radyopasite hem mikst lezyon hem de generalize radyopasite olarak) çapraz sınıflandırılabilirler. Aşağıdaki hastalıklardan hangisi bu tarz çoklu listelenme özelliğine sahip patolojilerden biri **değildir**?
Doğru Şık (D): Ameloblastik odontom
Açıklama: Ameloblastik odontom radyolojik ve gelişimsel olarak sadece spesifik bir alanı ilgilendiren 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer alan izole bir odontojenik tümördür. Paget hastalığı, Florid osseoz displazi, Hiperparatiroidizm ve Fibröz displazi ise kemik remodeling sürecini tüm kadranlarda ve vücutta bozduklarından sınıflandırma tablolarında hem mikst lezyonlar hem de generalize radyopasiteler/sistemik hastalıklar listelerinde ortak konumlara sahiptir.

---

### ÇİFT 54 (Benzerlik: 0.73)

**Soru 1 (ID: 9e57e357-1b81-4a86-82fd-1cd78da792b4)**
Soru Kökü: Ewing sarkomu ile rabdomyosarkomun baş-boyun bölgesindeki ayırıcı tanısı sadece radyolojik olarak yapılamaz ve immünohistokimyasal analiz gerektirir. Bu analizde, rabdomyosarkom lehine pozitif sonuç veren ve kas kasılmasında görevli olan ara filament proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Desmin
Açıklama: Desmin kas kasılmasında görevli bir ara filament proteini olup, rabdomyosarkom olgularında yaygın pozitiftir. Ewing sarkomunda ise desmin negatif veya çok nadiren pozitifken, miyogenin ve MyoD1 gibi spesifik kas belirteçleri kesin olarak negatiftir. Bu marker profili kas kökenli tümörlerin yuvarlak hücreli sarkomlardan ayrılmasında esastır.

**Soru 2 (ID: ca73b2f9-f44f-4fa6-ba44-41d603e42aec)**
Soru Kökü: Çocukluk çağında maksillada hızla büyüyen, dişleri lükse eden ve radyografide güneşi ışını (sunray) spikül formasyonu sergileyen radyolüsent bir tümörden biyopsi alınmıştır. Histopatolojik incelemede Ewing Sarkomu ile Rabdomyosarkom ayırıcı tanısına gidilmiştir. İmmünhistokimyasal analizde tümör hücrelerinin Desmin, Miyogenin ve MyoD1 boyanma profilleri incelenmiştir. Lezyonun kesin Ewing Sarkomu tanısı alması için aşağıdaki sonuçlardan hangisi beklenir?
Doğru Şık (A): Miyogenin ve MyoD1 için negatif olması
Açıklama: Ewing sarkomu (ES) ile baş boyun yerleşimli rabdomiyosarkom (RMS) sıkça karışır. Kas kasılma ara filamenti olan desmin ES'de bazen fokal pozitif olabilse de, asıl ayrım miyoblast kökenini gösteren spesifik belirteçler olan miyogenin ve MyoD1 iledir; RMS bu proteinler için pozitifken, ES negatiftir. Homer Wright rozetleri ise tam tersine nöral diferansiyasyonla ilişkili olup ES ve nöroblastomda bulunabilen yapılardır.

---

### ÇİFT 55 (Benzerlik: 0.73)

**Soru 1 (ID: 6b644b2e-4246-4867-ae58-33acdd0dbad7)**
Soru Kökü: Çene kemiğinde Ewing sarkomu tespit edilen bir hastanın radyolojik ayırıcı tanısında, her iki lezyon da litik dekstrüksiyon yapmasına rağmen, enfeksiyon kaynaklı osteomyeliti destekleyen ve Ewing sarkomunda görülmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Radyolüsent lezyon sınırları içerisinde sekestr görülmesi
Açıklama: Osteomyelit ve Ewing sarkomunun her ikisi de düzensiz radyolüsensi ve sekonder periost reaksiyonu yapabilir. Ancak osteomyelitte inflamasyona bağlı olarak beslenmesi bozulan ölü kemik adacıkları (sekestr) litik alan içerisinde radyoopak kitleler olarak izlenirken, Ewing sarkomunda nekrotik kemik sekestrasyonu görülmez.

**Soru 2 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

---

### ÇİFT 56 (Benzerlik: 0.73)

**Soru 1 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

**Soru 2 (ID: ea155f84-8d49-4fd0-bf6b-84cbb2ec698e)**
Soru Kökü: On yaşındaki erkek hasta, halsizlik ve mukozal solukluk şikayetleriyle getirilmiştir. Hastanın panoramik radyografisinde şiddetli generalize periodontal destrüksiyon alanları, dişler çevresinde osteopenik görünüm ve gelişmekte olan mandibular daimi molar dişin kriptinden yukarıya (oklüzal yöne) doğru yer değiştirdiği izlenmiştir. Dişlerde genişleme yapan lokal bir kitle etkisi yoktur. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Lösemi
Açıklama: Lösemide (özellikle çocukluk çağında) kemik iliğinin malign hücrelerle dolması, generalize kemik yoğunluğu azalmasına (osteopeni), sistemik anemi/solukluk bulgularına ve kökü gelişmemiş sürmekte olan dişlerin folikül içi basınç artışıyla oklüzale itilmesine (premature erüpsiyon) neden olur. Kitle yapmadan bu tabloyu çizen en karakteristik sistemik malignite lösemidir.

---

### ÇİFT 57 (Benzerlik: 0.73)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: 81c4145e-3841-4dde-a60e-42b487b11606)**
Soru Kökü: Radyolojik olarak 'mikst radyolüsent-radyopak lezyonlar' kategorisi, yapısında hem litik alanlar hem de reaktif/neoplastik kalsifikasyon matriksi barındıran hastalıkları kapsar. Aşağıdakilerden hangisi bu spesifik kategoride **sınıflandırılmaz**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma kendi yapısında herhangi bir kemik veya sement benzeri matriks (kalsifikasyon) üretmez; bu nedenle klasik olarak 'multiloküler radyolüsensiler' veya dişle ilişkiliyse kalsifikasyon içermeyen 'perikoronal radyolüsensiler' kategorisinde sınıflandırılır. Paget, osteosarkom, fibröz displazi ve sementifiye-ossifiye fibrom ise internal kalsifiye odaklara sahip oldukları için mikst lezyonlar grubundadır.

---

### ÇİFT 58 (Benzerlik: 0.72)

**Soru 1 (ID: 9a880e78-8260-432e-b34c-cc0296dc6ace)**
Soru Kökü: Çene grafilerinde birden fazla bölgede yaygın (multipl) radyopak odakların saptanması, sistemik veya sendromik hastalıkların radyolojik habercisi olabilir. Aşağıdaki patolojilerden hangisi standart klinik sınıflandırmalarda 'multipl radyopasite' tablosuna neden olan hastalıklardan biri **değildir**?
Doğru Şık (D): Enostoz
Açıklama: Enostoz (kemik adacığı), çene kemiği medullasında gelişen yoğun kortikal kemik kitlesidir ve karakteristik olarak soliter radyopasite formunda izlenir. Paget hastalığının sklerotik evresi, süpernumerer dişler, Gardner sendromuna bağlı multipl osteomalar ve matür periapikal semental displazi ise hastada multipl radyopasite tablosuna neden olur. Sınıflandırmada multipl gelişim göstermeyen yapı enostozdur.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 59 (Benzerlik: 0.72)

**Soru 1 (ID: a62c8e2b-c9e2-4e19-b091-db782b13eb75)**
Soru Kökü: 42 yaşında kadın hasta, radyografik inceleme sırasında sağ alt birinci büyük azı dişinin apikal bölgesinde iyi sınırlı tek bir radyopak alan saptanması üzerine kliniğe refere ediliyor. Diş vital ve hastanın herhangi bir şikayeti bulunmamaktadır. Bu hastada saptanan 'soliter radyopasite'nin ayırıcı tanısında aşağıdakilerden hangisinin yer alması **en az olasıdır**?
Doğru Şık (B): Soket sklerozu
Açıklama: Radyografik ayırıcı tanı listelerine göre matür periapikal semental displazi, idiopatik osteoskleroz, yabancı cisimler ve ekzostoz tipik olarak soliter radyopasite ayırıcı tanısında yer alır. Soket sklerozu ise boş çekim soketinin anormal kortikal yoğunlukta dolmasıyla oluşur ve tipik olarak 'multipl radyopasiteler' başlığı altında standardize edilmiştir. Dolayısıyla hastadaki tekil ve izole alan için soket sklerozu patogenezi öncelikle düşünülmez.

**Soru 2 (ID: f5bbac59-ebc9-4863-a33a-996083b8e158)**
Soru Kökü: Kırk yaşında erkek hasta rutin dental muayene için başvuruyor. Klinik olarak asemptomatik olan hastanın alınan periapikal radyografisinde maksiller orta kesici dişler arasında soliter, düzgün sınırlı, yuvarlak/kalp şeklinde bir radyolüsensi saptanıyor. Dişlerin canlılık testleri pozitiftir. Radyolojik tasnife göre soliter radyolüsensi grubundaki bu lezyon en büyük olasılıkla hangisidir?
Doğru Şık (E): İnsisiv kanal kisti
Açıklama: İnsisiv kanal kisti (nazopalatin kanal kisti), maksilla anterior bölgede santral orta hatta yer alan, soliter radyolüsent karakterde gelişimsel non-odontojenik bir kisttir. Dişlerin vital olması periapikal enflamatuar kist veya granülomu ekarte eder.

---

### ÇİFT 60 (Benzerlik: 0.72)

**Soru 1 (ID: 3e5f327d-b6a6-48cf-a06b-de449c864cf8)**
Soru Kökü: Alt çenesinde hissizlik (parestezi) şikayeti bulunan 65 yaşındaki hastanın radyografisinde kortikal kemiğin dış yüzeyinde 'kurabiye ısırığı' şeklinde yüzeyel bir erozyon izlenmiştir. Bu radyolojik merkez üssü (epicenter) konumu, kemik içine oturan dairesel bir metastatik lezyondan ziyade aşağıdakilerden hangisinin öncelikli habercisidir?
Doğru Şık (C): Primer çene yassı hücreli karsinomu (SCC)
Açıklama: Çenede görülen yumuşak doku kaynaklı Primer Yassı Hücreli Karsinom (SCC), kemiğe yüzeyden dışarıdan içeriye doğru invaze olduğu için korteks yüzeyinde 'kurabiye ısırığı' şeklinde litik bir defekt (dıştan içe erozyon) oluşturur. Buna karşılık kan yoluyla gelen metastatik tümörlerin merkez üssü kemiğin içindedir (medulla) ve dairesel/oval şekilde dışa doğru büyürler.

**Soru 2 (ID: adc36565-b9dc-419f-99eb-b717e262509d)**
Soru Kökü: Radyolojik incelemede 'kurabiye ısırığı' tarzında mandibulada inferior korteksin endosteal yüzeyinden dışarı doğru lokalize erozyon yapan ve dişlerin foliküler çevrelerini kaybetmesine neden olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Multipl myelom
Açıklama: Multipl myelomun mandibular tutulumunda, lezyonlar inferior korteksin endosteal (iç) yüzeyinde lokalize kemik erozyonuna neden olarak spesifik bir 'kurabiye ısırığı' veya korteksin scalloping'i görünümü üretirler. Ayrıca bu yıkımlar diş foliküllerinin ve lamina duranın çevresel sınırlarını da ortadan kaldırır.

---

### ÇİFT 61 (Benzerlik: 0.72)

**Soru 1 (ID: 28ac2248-7fa8-43f6-bb4f-d29b8b0d8ca6)**
Soru Kökü: Ağız tabanında saptanan ve dişlerde mobiliteye neden olan yumuşak doku kitlesinin radyolojik incelemesinde alveoler kemikte destrüksiyon saptanmıştır. Bu lezyonun inflamatuar kökenli bir osteomyelit mi yoksa yumuşak dokudan köken alan skuamöz hücreli karsinom (SCC) mu olduğunun ayrımında aşağıdaki radyolojik bulgulardan hangisi SCC lehine en güçlü kanıttır?
Doğru Şık (A): Kortekste periost reaksiyonunun izlenmemesi
Açıklama: Osteomyelit genellikle enfeksiyona sekonder olarak kemikte periost reaksiyonunu uyarırken, yumuşak dokudan köken alan SCC'nin kemik invazyonunda periost reaksiyonu izlenmez. Sekestr oluşumu ve periferik sklerotik yanıt inflamatuar sürecin göstergesi olup malignitelerden ziyade osteomyelit lehine bulgulardır. Skuamöz hücreli karsinomda kemik desteğinden yoksun kalan dişlerin etrafında lamina dura kaybı ve alveoler sokette belirgin genişleme meydana gelir.

**Soru 2 (ID: 882547d8-f490-40c6-8a5a-09846edcce55)**
Soru Kökü: Metastatik tümörler ile primer skuamöz hücreli karsinomun (SCC) kemik içi invazyonu bazen benzer litik destrüksiyonlar gösterebilir. Çene kemiklerinin görüntülenmesinde lezyonun orijinini tahmin etmede 'merkez üssü' (epicenter) kavramı kullanılır. Metastaz ile intraoral mukozadan köken alan SCC'nin merkez üssü lokalizasyonları ile ilgili aşağıdaki kıyaslamalardan hangisi doğrudur?
Doğru Şık (C): SCC'nin merkez üssü kortikal kemik yüzeyine yakınken, metastaz kemik iliği merkezli daireseldir.
Açıklama: Primer skuamöz hücreli karsinom (SCC) yüzey epiteli kaynaklı olduğu için alveoler kemiği dışarıdan içeriye doğru işgal eder; bu nedenle kemiği 'kurabiye ısırığı' tarzında kemik yüzeyinde veya alveolar sokette merkezlenerek dış kortekste destrükte eder. Aksine, uzak metastazlar kan yoluyla taşınıp kemik iliğine (spongiyöz kemiğe) oturdukları için, radyografik merkez üsleri direkt kemik içinde olan daha dairesel lezyonlardır.

---

### ÇİFT 62 (Benzerlik: 0.72)

**Soru 1 (ID: 355698c3-1661-4f3e-a826-2ab0c2265863)**
Soru Kökü: Burkitt Lenfoma'nın çene tutulumu ile ilgili aşağıdaki klinik ve radyolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Büyüme sürecinde reaktif olarak kortekse paralel güçlü laminar periost reaksiyonu görülür.
Açıklama: Burkitt lenfoma çok agresif osteolitik bir yıkım yapar ve periostu kemik oluşturmaya teşvik edecek zaman bırakmaz. Çenede karakteristik laminar (soğan zarı) periosteal reaksiyon gösteren hastalık Burkitt lenfoma değil, Osteomiyelit veya Eozinofilik Granülomdur. Yüzen dişler ve PDL genişlemesi ise lenfoma için tipiktir.

**Soru 2 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

---

### ÇİFT 63 (Benzerlik: 0.72)

**Soru 1 (ID: a62c8e2b-c9e2-4e19-b091-db782b13eb75)**
Soru Kökü: 42 yaşında kadın hasta, radyografik inceleme sırasında sağ alt birinci büyük azı dişinin apikal bölgesinde iyi sınırlı tek bir radyopak alan saptanması üzerine kliniğe refere ediliyor. Diş vital ve hastanın herhangi bir şikayeti bulunmamaktadır. Bu hastada saptanan 'soliter radyopasite'nin ayırıcı tanısında aşağıdakilerden hangisinin yer alması **en az olasıdır**?
Doğru Şık (B): Soket sklerozu
Açıklama: Radyografik ayırıcı tanı listelerine göre matür periapikal semental displazi, idiopatik osteoskleroz, yabancı cisimler ve ekzostoz tipik olarak soliter radyopasite ayırıcı tanısında yer alır. Soket sklerozu ise boş çekim soketinin anormal kortikal yoğunlukta dolmasıyla oluşur ve tipik olarak 'multipl radyopasiteler' başlığı altında standardize edilmiştir. Dolayısıyla hastadaki tekil ve izole alan için soket sklerozu patogenezi öncelikle düşünülmez.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 64 (Benzerlik: 0.72)

**Soru 1 (ID: 988c83e8-fd70-4df2-a95a-f5b68f11b498)**
Soru Kökü: Kırk yaşında kadın hasta; yavaş ekspansiyon yapan, ağrılı bir kitle ve ağız açmada kısıtlılık (trismus) şikayetiyle başvurmuştur. Radyografide kapsülsüz, dişlerde kök rezorpsiyonu yapmadan yer değiştirmeye neden olan ve komşu normal kemikte periferal skleroza yol açan kötü sınırlı destrüktif lezyon izlenmiştir. TME çevresi paramandibular kasların invaze olduğu saptanan bu vakada en olası tanı nedir?
Doğru Şık (D): Fibrosarkom
Açıklama: Fibrosarkomlar kadınlarda ve 4. dekadda sıktır. TMJ veya paramandibular kasların tutulması şiddetli trismus yapar. Radyografide kapsülsüzdür, komşu normal kemikte skleroza neden olabilir, kök rezorpsiyonu yapmaz ama dişi boşlukta yüzdürür. Bu spesifik klinik kombinasyon (kas invazyonuna bağlı trismus + kemik sklerozu + kapsülsüz yıkım) fibrosarkomu tanımlar.

**Soru 2 (ID: c7757ab0-fc33-457e-9711-7ada7850fb09)**
Soru Kökü: Kırk yedi yaşında erkek hasta, çene ekleminde anormal fonksiyon şikayetiyle muayeneye alınmıştır. Radyografide mandibula kondilinden kaynaklanan, mikst radyolüsent-radyopak karakterli (güve yeniği), yavaş büyüyen ve kortekse dik güneş ışını tarzı periosteal yeni kemik reaksiyonu gösteren bir kitle saptanmıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kondrosarkom
Açıklama: Kondrosarkom, 40'lı yaşların sonlarında (yaklaşık 47 yaş) sık görülen, yavaş büyüyen, kondil ve koronoid prosesi tercih eden, mikst kalsifikasyon paternine ve spesifik periferik güneş ışını tarzı periost reaksiyonuna sahip bir sarkomdur. TMJ bölgesini tuttuğu için eklem disfonksiyonu tipiktir. Osteosarkoma çok benzer ancak kalsifikasyon odaklarındaki yoğunluk ve yavaş seyri ile karakterizedir.

---

### ÇİFT 65 (Benzerlik: 0.72)

**Soru 1 (ID: 6e0e913d-6244-40d0-b697-6636405a7031)**
Soru Kökü: Aşağıdaki odontojenik lezyonlardan hangisi, histolojik epitel ve mezenkim gelişimi boyunca mineralize matris (radyopak materyal) sentezlemediğinden 'kalsifikasyon içeren perikoronal radyolüsensiler' ayırıcı tanısında **beklenmez**?
Doğru Şık (E): Ameloblastoma
Açıklama: Ameloblastoma lokal agresif gelişim gösteren ve mineralize yapılar sentezlemeyen bir tümör olduğundan tipik olarak kalsifikasyon içermeyen perikoronal radyolüsensi formunda izlenir. Kalsifiye odontojenik kist (Gorlin), AOT, ameloblastik odontom ve ameloblastik fibro-odontom ise perikoronal lokalizasyonlarında odontojenik sert doku formasyonları ve kalsifikasyonlar oluştururlar. Radyopak odağın izlenmesi salt ameloblastoma tanısından hekimi uzaklaştırır.

**Soru 2 (ID: dda63979-e5b8-402d-baa2-eb600ffe6260)**
Soru Kökü: Panoramik radyografide çenelerdeki radyolüsent bir patoloji incelenirken, aşağıdakilerden hangisi 'Soliter Radyolüsensiler' kategorisinde değerlendirilecek lezyon veya durumlardan biri **değildir**?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma tipik olarak kortikal genişleme yapan ve kemik septasyonları barındıran 'Multiloküler Radyolüsensiler' grubunda yer alır. Diğer seçeneklerdeki lezyonlar radyografide tek kompartmanlı (soliter/uniloküler) radyolüsensi üretir.

---

### ÇİFT 66 (Benzerlik: 0.72)

**Soru 1 (ID: 6b644b2e-4246-4867-ae58-33acdd0dbad7)**
Soru Kökü: Çene kemiğinde Ewing sarkomu tespit edilen bir hastanın radyolojik ayırıcı tanısında, her iki lezyon da litik dekstrüksiyon yapmasına rağmen, enfeksiyon kaynaklı osteomyeliti destekleyen ve Ewing sarkomunda görülmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Radyolüsent lezyon sınırları içerisinde sekestr görülmesi
Açıklama: Osteomyelit ve Ewing sarkomunun her ikisi de düzensiz radyolüsensi ve sekonder periost reaksiyonu yapabilir. Ancak osteomyelitte inflamasyona bağlı olarak beslenmesi bozulan ölü kemik adacıkları (sekestr) litik alan içerisinde radyoopak kitleler olarak izlenirken, Ewing sarkomunda nekrotik kemik sekestrasyonu görülmez.

**Soru 2 (ID: 9652ab56-5ad8-4bc2-a6df-b479d494db0d)**
Soru Kökü: On beş yaşında, çene ağrısı ve parestezisi olan bir erkek hastanın radyografisinde Codman üçgeni ve güneş ışını tarzı periosteal reaksiyon izlenen litik bir destrüksiyon vardır. Ewing sarkomu şüphesiyle değerlendirilen bu hastada aşağıdaki radyolojik-klinik özelliklerden hangisinin görülmesi **beklenmez**?
Doğru Şık (E): Komşu dişleri destekleyen kemiği yıkarken belirgin kök rezorpsiyonu yapması
Açıklama: Ewing sarkomu çenelerde agresif litik dekstrüksiyona, Codman üçgeni veya sun-ray gibi periosteal reaksiyonlara sebep olur. Komşu dişleri destekleyen alveolar kemik yapılarına çok hızlı zarar vermesine rağmen, tümörün hızlı tabiatından dolayı dişlerde rezorpsiyon yapacak süre bulunamaz; bu nedenle kök rezorpsiyonu yapmaz.

---

### ÇİFT 67 (Benzerlik: 0.72)

**Soru 1 (ID: b6509999-8c1d-4c5d-9688-6f5db48e6863)**
Soru Kökü: Aşağıdaki sistemik kemik hastalıklarından hangisi, multipl myelomun çenelerde yaptığı litik görünümlere (zımba deliği osteolizleri) radyolojik olarak birebir benzeyen kemik defektleri oluşturarak 'metabolik hastalık' ayırıcı tanısına girer?
Doğru Şık (B): Gaucher hastalığı
Açıklama: Gaucher hastalığı, lizozomal depo hastalığıdır ve sfingolipidlerin kemik iliğinde makrofajlar içinde birikimi sonucu litik kemik lezyonları üretir. Bu durum, radyolojik olarak kemiklerde zımba deliği tarzı defektler oluşturan multipl myelom ve metastazlara benzer görünüm sunar. Paget ve osteopetrozis ise radyopak (sklerotik) dominanslıdır.

**Soru 2 (ID: e3bff7c8-8228-4f34-8695-bebd5fe94b5f)**
Soru Kökü: Radyolojik sınıflama algoritmalarına göre; hem osteolitik ve osteoblastik fazların bir arada görülmesiyle 'mikst radyolüsent-radyopak lezyonlar', hem de iskelet sistemini diffüz olarak etkilemesiyle 'generalize radyopasiteler/sistemik hastalıklar' kategorisinde ortaklaşa yer alan kemik metabolizma bozukluğu aşağıdakilerden hangisidir?
Doğru Şık (B): Paget hastalığı
Açıklama: Paget hastalığı (Osteitis deformans), kemik döngüsünün ileri derecede düzensizleştiği sistemik bir kemik hastalığıdır. Hastalığın erken evreleri osteolitik, geç evreleri ise pamuk yumağı tarzında osteosklerotik (radyopak) olduğu için mikst lezyonlar grubunda listelenirken; kranial ve maksillofasiyal iskeleti yaygın şekilde tuttuğu için 'generalize radyopasiteler/sistemik hastalıklar' bölümünde de sınıflandırılır.

---

### ÇİFT 68 (Benzerlik: 0.72)

**Soru 1 (ID: 6d5faffd-0d70-4c55-a410-210888a90ba6)**
Soru Kökü: Çene kemiklerini etkileyen lezyonların temel radyografik sınıflandırmasına göre; Paget hastalığı, Hiperparatiroidizm ve Fibröz displazi'nin ortak olarak listelendiği ana kategori aşağıdakilerden hangisidir?
Doğru Şık (C): Generalize radyopasiteler / Sistemik hastalıklar
Açıklama: Paget hastalığı, hiperparatiroidizm ve fibröz displazi, kemik metabolizmasını yaygın ve birden çok kadranda etkileyen durumlar oldukları için 'Generalize radyopasiteler / Sistemik hastalıklar' kategorisinde ortak olarak listelenirler. Bu lezyonlar maturasyonlarına bağlı olarak mikst radyolüsent-radyopak patern de gösterebilirler ancak fokal kistik nitelik taşıyan perikoronal veya saf multiloküler özellik göstermezler.

**Soru 2 (ID: 7e26aae5-8758-4321-a637-8589f23b3ab5)**
Soru Kökü: Çene lezyonlarının temel radyolojik ayırıcı tanı sınıflandırmasında çoklu kadran tutulumu ve spesifik semento-osseöz doku değişimi karakteristiği ile öne çıkan 'Florid osseöz displazi', aşağıdaki radyografik kategorilerin hangisinde kesinlikle **listelenmez**?
Doğru Şık (E): Multiloküler radyolüsensiler
Açıklama: Florid osseöz displazi, çenelerin üç veya dört kadranını yaygın şekilde tutan matürasyon tabanlı bir patolojidir. Gelişim aşamasına göre hem 'multipl radyopasiteler', hem 'mikst radyolüsent-radyopak lezyonlar', hem de yaygın etkileşimi nedeniyle 'generalize radyopasiteler' gruplarında yer alır. Ancak bu lezyonda internal kistik septasyonlar, kemik içi bal peteği/sabun köpüğü oluşumları görülmediği için 'multiloküler radyolüsensiler' grubunda yer alması imkansızdır.

---

### ÇİFT 69 (Benzerlik: 0.72)

**Soru 1 (ID: 3b94d8af-e072-4bfa-b3a7-4de64d740541)**
Soru Kökü: Sistemik tutulum gösteren bazı kemik patolojileri, davranış karakterleri nedeniyle radyografik olarak birden fazla ana başlık altında (örneğin hem multipl radyopasite hem mikst lezyon hem de generalize radyopasite olarak) çapraz sınıflandırılabilirler. Aşağıdaki hastalıklardan hangisi bu tarz çoklu listelenme özelliğine sahip patolojilerden biri **değildir**?
Doğru Şık (D): Ameloblastik odontom
Açıklama: Ameloblastik odontom radyolojik ve gelişimsel olarak sadece spesifik bir alanı ilgilendiren 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer alan izole bir odontojenik tümördür. Paget hastalığı, Florid osseoz displazi, Hiperparatiroidizm ve Fibröz displazi ise kemik remodeling sürecini tüm kadranlarda ve vücutta bozduklarından sınıflandırma tablolarında hem mikst lezyonlar hem de generalize radyopasiteler/sistemik hastalıklar listelerinde ortak konumlara sahiptir.

**Soru 2 (ID: 81c4145e-3841-4dde-a60e-42b487b11606)**
Soru Kökü: Radyolojik olarak 'mikst radyolüsent-radyopak lezyonlar' kategorisi, yapısında hem litik alanlar hem de reaktif/neoplastik kalsifikasyon matriksi barındıran hastalıkları kapsar. Aşağıdakilerden hangisi bu spesifik kategoride **sınıflandırılmaz**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma kendi yapısında herhangi bir kemik veya sement benzeri matriks (kalsifikasyon) üretmez; bu nedenle klasik olarak 'multiloküler radyolüsensiler' veya dişle ilişkiliyse kalsifikasyon içermeyen 'perikoronal radyolüsensiler' kategorisinde sınıflandırılır. Paget, osteosarkom, fibröz displazi ve sementifiye-ossifiye fibrom ise internal kalsifiye odaklara sahip oldukları için mikst lezyonlar grubundadır.

---

### ÇİFT 70 (Benzerlik: 0.72)

**Soru 1 (ID: 3a674b81-081c-4161-bb0b-98196e8adc1a)**
Soru Kökü: Panoramik radyografide, mandibula ramusunun posterolateralinde, yanak yumuşak dokusuna süperpoze olmuş çoklu, yuvarlak ve eşmerkezli kalsifikasyon halkaları (laminasyon) izlenen bir hastada, listelenen yumuşak doku kalsifikasyonlarından hangisi en olasıdır?
Doğru Şık (A): Flebolit
Açıklama: Flebolitler, intravasküler trombüslerin distrofik kalsifikasyonu sonucu oluşan ve tipik olarak damar lümeninde soğan zarı benzeri eşmerkezli (kalsifiye ve non-kalsifiye bantlar) laminasyon gösteren yumuşak doku kalsifikasyonlarıdır. Kalsifiye lenf nodları laminasyondan ziyade daha düzensiz lobüle/karnabahar benzeri yapılardır. İdiopatik osteoskleroz ise kemik içi (soliter radyopasite) bir lezyondur.

**Soru 2 (ID: 3ab857f8-35a2-4bc8-ba09-bccbada21921)**
Soru Kökü: Çene ve yüz bölgesinde radyografik inceleme sırasında fark edilebilecek yumuşak doku kalsifikasyonları sınıflandırmasında aşağıdakilerden hangisinin bulunması **beklenmez**?
Doğru Şık (D): Aterom plağı
Açıklama: Yumuşak doku kalsifikasyonları tablosunda; Sialolit, Kalsifiye lenf nodu, Antrolit, Flebolit, Rinolit, Kalsifiye fasial arter, Yabancı obje ve Tonsillolit açıkça belirtilmiştir. Karotis arterindeki aterom plağı da klinik olarak bir kalsifikasyon olsa da, bu spesifik tablo ve sınıflandırmada listelenmemiştir; dolayısıyla referans kaynağa göre dışarıda kalır.

---

### ÇİFT 71 (Benzerlik: 0.72)

**Soru 1 (ID: 9789072a-81f6-4866-b271-f4e197c1e39a)**
Soru Kökü: Mandibulada zımba deliği tarzı radyolüsent lezyonları olan multipl myelom hastasında görülebilecek çene ve radyolojik bulgularla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Kortekse paralel yaygın periost reaksiyonu (soğan kabuğu) görülür.
Açıklama: Multipl myelomda kemik lezyonlarında periosteal reaksiyon oluşumu nadirdir. Kortekse paralel periost reaksiyonu (soğan kabuğu) osteomiyelit veya Ewing sarkomu gibi durumlarda görülür. Endosteal scalloping (kurabiye ısırığı) MM için spesifik bulgular arasındadır.

**Soru 2 (ID: f359f178-a3fb-4f87-a4e9-8c76f8c8dcff)**
Soru Kökü: Kronik lösemi hastalarının çene radyografilerinde izlenen spesifik kemik değişiklikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Çene kemiklerinde asimetrik ve hızlı ekspansiyona (genişlemeye) neden olur.
Açıklama: Radyolojik belirtiler daha çok kronik lösemide belirgindir ve ilik boşluğundaki malign proliferasyona bağlı olarak yaygın osteopeni, lamina dura kaybı ve dişlerin belirginleşmesi görülür. Ancak lösemik infiltrasyonlar genellikle kortikal sınırları içeriden inceltmesine rağmen çene kemiğinde belirgin bir genişlemeye (ekspansiyon) neden OLMAZ. Çene ekspansiyonu Burkitt lenfoma, santral dev hücreli granülom veya ameloblastoma gibi kitle lezyonları için tipiktir.

---

### ÇİFT 72 (Benzerlik: 0.72)

**Soru 1 (ID: 3e5f327d-b6a6-48cf-a06b-de449c864cf8)**
Soru Kökü: Alt çenesinde hissizlik (parestezi) şikayeti bulunan 65 yaşındaki hastanın radyografisinde kortikal kemiğin dış yüzeyinde 'kurabiye ısırığı' şeklinde yüzeyel bir erozyon izlenmiştir. Bu radyolojik merkez üssü (epicenter) konumu, kemik içine oturan dairesel bir metastatik lezyondan ziyade aşağıdakilerden hangisinin öncelikli habercisidir?
Doğru Şık (C): Primer çene yassı hücreli karsinomu (SCC)
Açıklama: Çenede görülen yumuşak doku kaynaklı Primer Yassı Hücreli Karsinom (SCC), kemiğe yüzeyden dışarıdan içeriye doğru invaze olduğu için korteks yüzeyinde 'kurabiye ısırığı' şeklinde litik bir defekt (dıştan içe erozyon) oluşturur. Buna karşılık kan yoluyla gelen metastatik tümörlerin merkez üssü kemiğin içindedir (medulla) ve dairesel/oval şekilde dışa doğru büyürler.

**Soru 2 (ID: 72f7c682-683b-47f2-9211-0fbcdd24d7fd)**
Soru Kökü: Elli beş yaşında kadın hasta, sağ alt çenesinde ilerleyen uyuşukluk, nedeni belirsiz diş ağrıları ve son zamanlarda çekilen dişinin soketinin iyileşmemesi şikayetiyle kliniğe başvurmuştur. Radyolojik muayenede, mandibula posteriorda inferior kortikal sınırda erozyon ve rezidüel kemik içinde dairesel merkez üslü destrüksiyon izlenmiştir. Anamnezinde 5 yıl önce meme kanseri tedavisi gören bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Metastatik karsinom
Açıklama: Bilinen primer meme kanseri öyküsü, alt dudakta uyuşukluk (trigeminal 3. dal parestezisi), çekim yarasının iyileşmemesi ve inferior korteks erozyonu metastatik lezyonların klasik kliniğidir. Merkez üssünün çene kemiğinin ortasında yer alıp dışa doğru destrükte etmesi primer tümörlerden ziyade kan yoluyla gelen metastazın kemik içi yerleşimine işaret eder. Fibröz displazi ve ameloblastomda genellikle sinirsel his kayıpları ve çekim soketi iyileşmeme problemleri ön planda değildir.

---

### ÇİFT 73 (Benzerlik: 0.72)

**Soru 1 (ID: 830db24a-0573-4eac-8ff6-f4aeabe560dd)**
Soru Kökü: Radyolojik incelemede tekil, izole ve sınırları belirgin 'soliter radyopasite' saptanan bir vakada, aşağıdaki lezyonlardan hangisi standart ayırıcı tanı listesinde yer **almaz**?
Doğru Şık (E): Florid osseoz displazi
Açıklama: Florid osseöz displazi, kemik metabolizmasını yaygın etkileyen ve radyografik olarak multipl veya generalize radyopasiteler şeklinde izlenen bir patolojidir. Buna karşın enostoz, kondanse osteitis, hipersementoz ve kalmış kökler çenelerde fokal, tekil odak formunda gelişen karakteristik soliter radyopasitelerdir. Generalize kemik yıkım/yapım tabloları soliter lezyonlar kategorisinden dışlanmalıdır.

**Soru 2 (ID: ca6f5ef3-c69f-475d-89dd-d03512d8d42e)**
Soru Kökü: Dişlerin sement yapısını ve periapikal kemiği etkileyen osteojenik değişiklikler incelendiğinde; aşağıdakilerden hangisi radyografik tabloda 'soliter radyopasite' olarak izlenen lokalize bir patoloji **değildir**?
Doğru Şık (A): Florid osseoz displazi
Açıklama: Florid osseoz displazi (FOD), çenelerin sıklıkla üç veya dört kadranını etkileyen, yaygın kalsifik kitleler sunarak 'multipl radyopasite' veya 'generalize radyopasite' tablosu oluşturan kemik metabolizma hastalığıdır. Matür PSD, kondanse osteitis ve hipersementoz ise ilgili diş/dişler kök ucunda izole kalsifiye odaklar sunarak karakteristik soliter radyopasiteler sınıfına girerler. FOD generalize kemik davranışıdır.

---

### ÇİFT 74 (Benzerlik: 0.72)

**Soru 1 (ID: 743411a5-62c6-46c1-a887-a40f39f78d5c)**
Soru Kökü: Çenede multiloküler bal peteği tarzında ekspansil kitle izlenen bir olguda, ameloblastik karsinomayı standart bir benign ameloblastomadan ayırmada radyolojik olarak hangi bulgu maligniteyi düşündürür?
Doğru Şık (B): Kortikal sınır devamlılığında net bir destrüksiyon izlenmesi
Açıklama: Benign ameloblastomalar kemikte ekspansiyon yapsa da genellikle sağlam bir kortikal sınıra (iyi kortikal-skallop sınır) sahiptirler. Ameloblastik karsinomada ise agresif büyüme paternine bağlı olarak kortikal sınır devamlılığında bozulma ve destrüksiyon saptanır. Diş kökü rezorpsiyonu benign ameloblastomada da yaygın bir bulgudur.

**Soru 2 (ID: e6c27292-9350-411d-ab24-205591ea27da)**
Soru Kökü: Aşağıdaki karsinom tiplerinden hangisinin histolojik değerlendirme ve radyolojik ayrımı olmadan ameloblastoma veya odontojenik keratokistten ayrılması neredeyse imkansızdır, zira bu tümör de iyi kortikal sınırlı, ekspansil ve multiloküler bal peteği tarzı yıkım yapar?
Doğru Şık (A): Malign ameloblastoma / Ameloblastik karsinoma
Açıklama: Malign ameloblastoma ve ameloblastik karsinoma, benign karşılıkları olan konvansiyonel ameloblastoma gibi multiloküler sabun köpüğü/bal peteği görünümü verir, kortikal ekspansiyon yapar. Bu nedenle histopatolojik olarak veya akciğer gibi uzak metastaz bulgusu saptanmadan ameloblastomadan radyolojik olarak kesin ayrımı yapılamaz.

---

### ÇİFT 75 (Benzerlik: 0.72)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: 61554eb0-3a40-4ae0-abef-396b482369ad)**
Soru Kökü: Sekiz yaşındaki hastada kronik otitis media öyküsü ile birlikte çenelerin radyografik incelemesinde alveolar kemikte masif destrüksiyon izleniyor. Multipl radyolüsent odaklar arasında dişlerin havada 'yüzüyormuş' gibi göründüğü belirleniyor. Diğer iskelet sistemi bölgelerinde de lezyonlar varsa, 'Multipl Radyolüsensiler' kategorisindeki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücre hastalığı (Histiositozis X)
Açıklama: Langerhans hücreli histiyositoz (Histiyositozis X), genç hastalarda multipl zımba deliği tarzı lezyonlar yapar ve geniş alveolar kemik destrüksiyonu neticesinde dişlerin havada yüzer gibi kalması bu hastalığın patognomoniğe yakın bir radyografik sunumudur.

---

### ÇİFT 76 (Benzerlik: 0.72)

**Soru 1 (ID: dda63979-e5b8-402d-baa2-eb600ffe6260)**
Soru Kökü: Panoramik radyografide çenelerdeki radyolüsent bir patoloji incelenirken, aşağıdakilerden hangisi 'Soliter Radyolüsensiler' kategorisinde değerlendirilecek lezyon veya durumlardan biri **değildir**?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma tipik olarak kortikal genişleme yapan ve kemik septasyonları barındıran 'Multiloküler Radyolüsensiler' grubunda yer alır. Diğer seçeneklerdeki lezyonlar radyografide tek kompartmanlı (soliter/uniloküler) radyolüsensi üretir.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 77 (Benzerlik: 0.72)

**Soru 1 (ID: 882547d8-f490-40c6-8a5a-09846edcce55)**
Soru Kökü: Metastatik tümörler ile primer skuamöz hücreli karsinomun (SCC) kemik içi invazyonu bazen benzer litik destrüksiyonlar gösterebilir. Çene kemiklerinin görüntülenmesinde lezyonun orijinini tahmin etmede 'merkez üssü' (epicenter) kavramı kullanılır. Metastaz ile intraoral mukozadan köken alan SCC'nin merkez üssü lokalizasyonları ile ilgili aşağıdaki kıyaslamalardan hangisi doğrudur?
Doğru Şık (C): SCC'nin merkez üssü kortikal kemik yüzeyine yakınken, metastaz kemik iliği merkezli daireseldir.
Açıklama: Primer skuamöz hücreli karsinom (SCC) yüzey epiteli kaynaklı olduğu için alveoler kemiği dışarıdan içeriye doğru işgal eder; bu nedenle kemiği 'kurabiye ısırığı' tarzında kemik yüzeyinde veya alveolar sokette merkezlenerek dış kortekste destrükte eder. Aksine, uzak metastazlar kan yoluyla taşınıp kemik iliğine (spongiyöz kemiğe) oturdukları için, radyografik merkez üsleri direkt kemik içinde olan daha dairesel lezyonlardır.

**Soru 2 (ID: e74ce30e-7dc1-41f6-9c11-cce282e819a8)**
Soru Kökü: 55 yaşında prostat adenokarsinomu öyküsü olan erkek hastada alt çenede uyuşukluk şikayeti başlamıştır. Mandibulanın görüntülenmesinde metastaz ile primer çene içi skuamöz hücreli karsinomu birbirinden ayırmak amacıyla lezyonun radyolojik morfolojisi incelenmektedir. Lezyonun metastaz olduğunu destekleyen temel lokasyon bulgusu aşağıdakilerden hangisidir?
Doğru Şık (B): Lezyonun merkez üssünün derin kemik medullası içinde olması ve sınırlarının oval seyretmesi
Açıklama: Metastatik tümörler hematojen yolla geldikleri için merkez üsleri (epicenter) genellikle mandibuladaki derin medüller kemiğin içindedir ve dairesel/oval büyürler. Primer intraosseöz veya gingivadan yayılan SCC'lerin merkez üssü ise kemik yüzeyine (alveoler kret) daha yakındır ve yüzeyel 'kurabiye ısırığı' tarzı destrüksiyonla içe doğru ilerler.

---

### ÇİFT 78 (Benzerlik: 0.71)

**Soru 1 (ID: 201d94a5-6ea9-42cd-b789-b8130233673b)**
Soru Kökü: Mandibula posterior bölgede kötü kokulu akıntı ve ağrılı şişlik ile başvuran hastanın radyografisinde güve yeniği tarzında sınırları belirsiz radyolüsent alanlar saptanmıştır. Lezyon çevresinde reaktif kemik formasyonunu gösteren skleroz ve kortekse paralel uzanan periosteal reaksiyon mevcuttur. Multipl myelom ve Ewing sarkomu ayırıcı tanısında, bu radyolojik spesifikasyonlar öncelikli olarak aşağıdakilerden hangisini destekler?
Doğru Şık (D): Osteomyelit
Açıklama: Osteomyelitin karakteristik radyografik belirteçleri arasında reaktif enflamasyon kaynaklı çevresel skleroz, sekestr formasyonu ve kortekse paralel uzanan laminar periosteal reaksiyon yer alır. Ewing sarkomu radyolüsent güve yeniği görünümü yapsa da güneş ışını tarzı dik periost reaksiyonuna yatkındır. Multipl myelom ise tamamen osteolitik (zımba deliği) bir süreçtir ve enflamatuar bir reaksiyon olmadığı için çevresel skleroz veya periosteal yeni kemik üretmez.

**Soru 2 (ID: 9789072a-81f6-4866-b271-f4e197c1e39a)**
Soru Kökü: Mandibulada zımba deliği tarzı radyolüsent lezyonları olan multipl myelom hastasında görülebilecek çene ve radyolojik bulgularla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Kortekse paralel yaygın periost reaksiyonu (soğan kabuğu) görülür.
Açıklama: Multipl myelomda kemik lezyonlarında periosteal reaksiyon oluşumu nadirdir. Kortekse paralel periost reaksiyonu (soğan kabuğu) osteomiyelit veya Ewing sarkomu gibi durumlarda görülür. Endosteal scalloping (kurabiye ısırığı) MM için spesifik bulgular arasındadır.

---

### ÇİFT 79 (Benzerlik: 0.71)

**Soru 1 (ID: 467b96b3-98e7-4ed9-aeea-c5d55cb071ca)**
Soru Kökü: Altmış sekiz yaşında erkek hasta, mandibula molar bölgede patolojik kırık ve alt dudakta parestezi şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide belirsiz sınırlı radyolüsent dekstrüksiyon alanı izleniyor. Primer kemikten köken alan (intraosseöz) skuamöz hücreli karsinom şüphesi olan bu vakada, tanıyı destekleyecek en kritik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Mandibular kanalın korteks devamlılığında kayıp
Açıklama: Primer intraosseöz SCC'de neoplastik infiltrasyon kemiği dekstrükte ederken, mandibular kanalın kortikal sınırlarında devamlılık kaybına yol açar. Diş kök rezorpsiyonu SCC'de oldukça nadirdir, lezyonlar genellikle dişlerin havada asılı gibi görünmesine neden olur. Sekestr oluşumu ise osteomyelit lehine bulgudur.

**Soru 2 (ID: f32f5efd-92ac-4252-8525-710d2dd2b08a)**
Soru Kökü: 42 yaşında kadın hasta, sağ mandibula posterior bölgede ağrılı şişlik ve alt dudakta uyuşukluk şikayetiyle başvuruyor. Alınan radyografide, sürmemiş bir 20 yaş dişinin kuronunu çevreleyen, düzensiz sınırlı ve kortikal erozyona neden olmuş multiloküler bir radyolüsensi izleniyor. Bu klinik tabloda dentijeröz kist tanısını uzaklaştırıp maligniteyi (özellikle santral mukoepidermoid karsinom) destekleyen **en az olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Sürmemiş bir dişle ilişkili olması
Açıklama: Santral mukoepidermoid karsinom olgularının yaklaşık %50'si sürmemiş bir dişle ilişkilidir, tıpkı bir dentijeröz kist gibi. Bu nedenle sürmemiş dişle ilişkili olması, maligniteyi destekleyen veya kistten ayıran bir özellik değildir, ortak bulgudur. Ancak ağrı, parestezi ve kortikal erozyon dentijeröz kistte beklenmeyen, maligniteye (CMEC) işaret eden kritik bulgulardır.

---

### ÇİFT 80 (Benzerlik: 0.71)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: 9581cf95-9a42-45d5-9bb1-3d9e43419af5)**
Soru Kökü: Panoramik radyografisinde çene kemiklerinde multiloküler (sabun köpüğü / bal peteği) görünüm saptanan bir hastada, Tablo 12 radyolojik sınıflamasına göre aşağıdaki lezyonlardan hangisi ayırıcı tanıda öncelikle **düşünülmez**?
Doğru Şık (E): Fibröz displazi
Açıklama: Fibröz displazi klasik olarak 'buzlu cam' görünümüyle karakterize mikst radyolüsent-radyopak veya homojen bulanık lezyonlar grubundadır ve multiloküler radyolüsensiler sınıflandırmasında yer almaz. Ameloblastoma, santral dev hücreli granülom, odontojenik mikzom ve odontojenik keratokist (ayrıca anevrizmal kemik kisti, cherubism ve hemanjiom) çenelerde multiloküler radyolüsensi yapan temel patolojilerdir.

---

### ÇİFT 81 (Benzerlik: 0.71)

**Soru 1 (ID: 0aa83509-98d2-4666-8250-740b811abe57)**
Soru Kökü: Ewing Sarkomunun çene kemiklerindeki radyolojik davranışı ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Komşu dişleri destekleyen kemiği yıkarken aynı zamanda diş köklerinde şiddetli rezorpsiyona yol açar.
Açıklama: Ewing sarkomu komşu dişleri destekleyen kemik yapılarını son derece agresif bir şekilde harap etse de, tipik olarak dişlerin köklerinde rezorpsiyon yapmaz. Tümör kemik trabeküllerini hızla litik erozyona uğratır fakat dişin sement ve dentin yapıları bu süreçten korunur. Diğer seçeneklerdeki kortikal yıkım, Codman üçgeni, sınır belirsizliği ve folikül tahribatı Ewing sarkomunun karakteristik hızlı büyüme belirtileridir.

**Soru 2 (ID: 6b644b2e-4246-4867-ae58-33acdd0dbad7)**
Soru Kökü: Çene kemiğinde Ewing sarkomu tespit edilen bir hastanın radyolojik ayırıcı tanısında, her iki lezyon da litik dekstrüksiyon yapmasına rağmen, enfeksiyon kaynaklı osteomyeliti destekleyen ve Ewing sarkomunda görülmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Radyolüsent lezyon sınırları içerisinde sekestr görülmesi
Açıklama: Osteomyelit ve Ewing sarkomunun her ikisi de düzensiz radyolüsensi ve sekonder periost reaksiyonu yapabilir. Ancak osteomyelitte inflamasyona bağlı olarak beslenmesi bozulan ölü kemik adacıkları (sekestr) litik alan içerisinde radyoopak kitleler olarak izlenirken, Ewing sarkomunda nekrotik kemik sekestrasyonu görülmez.

---

### ÇİFT 82 (Benzerlik: 0.71)

**Soru 1 (ID: ec9a179b-7fc0-4af6-adce-d80cfdafcbe5)**
Soru Kökü: Multipl myelom vakalarında görülen tekil mandibular litik bir lezyonun radyolojik olarak aşağıda verilen patolojilerden hangisine birebir benzemesi nedeniyle, bu iki lezyonun özellikle genç/yaşlı ayrımı yapılmadan sadece filme bakılarak ayrılması oldukça güçtür?
Doğru Şık (A): Basit (Travmatik) kemik kisti
Açıklama: Multipl myelomda mandibulada oluşan soliter, kortikalsiz radyolüsent litik kitleler, radyografik şekil itibariyle basit (travmatik) kemik kistine benzeyebilir. Ancak basit kemik kistleri çoğunlukla intakt bir kortekse sahip, diş kökleri arasında tarak (scalloped) şeklinde uzanan ve çok daha genç yaş grubunda görülen lezyonlardır.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 83 (Benzerlik: 0.71)

**Soru 1 (ID: a62c8e2b-c9e2-4e19-b091-db782b13eb75)**
Soru Kökü: 42 yaşında kadın hasta, radyografik inceleme sırasında sağ alt birinci büyük azı dişinin apikal bölgesinde iyi sınırlı tek bir radyopak alan saptanması üzerine kliniğe refere ediliyor. Diş vital ve hastanın herhangi bir şikayeti bulunmamaktadır. Bu hastada saptanan 'soliter radyopasite'nin ayırıcı tanısında aşağıdakilerden hangisinin yer alması **en az olasıdır**?
Doğru Şık (B): Soket sklerozu
Açıklama: Radyografik ayırıcı tanı listelerine göre matür periapikal semental displazi, idiopatik osteoskleroz, yabancı cisimler ve ekzostoz tipik olarak soliter radyopasite ayırıcı tanısında yer alır. Soket sklerozu ise boş çekim soketinin anormal kortikal yoğunlukta dolmasıyla oluşur ve tipik olarak 'multipl radyopasiteler' başlığı altında standardize edilmiştir. Dolayısıyla hastadaki tekil ve izole alan için soket sklerozu patogenezi öncelikle düşünülmez.

**Soru 2 (ID: b80b326c-3286-43e1-a2b4-5dadea432c10)**
Soru Kökü: Bir diş hekimi radyografik değerlendirmede çene kemiğinde tekil bir radyoopak odak tespit etmiş ve hastanın anamnezindeki eski travma öyküsüne dayanarak ayırıcı tanıda 'Yabancı cisimler' (metal veya materyal) olabileceğini düşünmüştür. Sınıflandırma tablolarına göre aşağıdaki lezyonlardan hangisi bu şüphe ile aynı 'soliter radyopasiteler' grubunda yer **almaz**?
Doğru Şık (A): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom histopatolojik olarak dev hücreler içeren litik bir lezyon olup, radyografik tablolarda 'multiloküler radyolüsensiler' sınıfında konumlandırılır. Yabancı cisimler, idiopatik osteoskleroz, matür periapikal semental displazi, ekzostoz ve kalmış kökler ise spesifik lokalizasyonda kalsifiye/metalik görünüm vererek soliter radyopasiteler arasında bulunur. Litik olan granülom radyoopak tanıların listesinden çıkartılır.

---

### ÇİFT 84 (Benzerlik: 0.71)

**Soru 1 (ID: 9581cf95-9a42-45d5-9bb1-3d9e43419af5)**
Soru Kökü: Panoramik radyografisinde çene kemiklerinde multiloküler (sabun köpüğü / bal peteği) görünüm saptanan bir hastada, Tablo 12 radyolojik sınıflamasına göre aşağıdaki lezyonlardan hangisi ayırıcı tanıda öncelikle **düşünülmez**?
Doğru Şık (E): Fibröz displazi
Açıklama: Fibröz displazi klasik olarak 'buzlu cam' görünümüyle karakterize mikst radyolüsent-radyopak veya homojen bulanık lezyonlar grubundadır ve multiloküler radyolüsensiler sınıflandırmasında yer almaz. Ameloblastoma, santral dev hücreli granülom, odontojenik mikzom ve odontojenik keratokist (ayrıca anevrizmal kemik kisti, cherubism ve hemanjiom) çenelerde multiloküler radyolüsensi yapan temel patolojilerdir.

**Soru 2 (ID: dda63979-e5b8-402d-baa2-eb600ffe6260)**
Soru Kökü: Panoramik radyografide çenelerdeki radyolüsent bir patoloji incelenirken, aşağıdakilerden hangisi 'Soliter Radyolüsensiler' kategorisinde değerlendirilecek lezyon veya durumlardan biri **değildir**?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma tipik olarak kortikal genişleme yapan ve kemik septasyonları barındıran 'Multiloküler Radyolüsensiler' grubunda yer alır. Diğer seçeneklerdeki lezyonlar radyografide tek kompartmanlı (soliter/uniloküler) radyolüsensi üretir.

---

### ÇİFT 85 (Benzerlik: 0.71)

**Soru 1 (ID: 6d5faffd-0d70-4c55-a410-210888a90ba6)**
Soru Kökü: Çene kemiklerini etkileyen lezyonların temel radyografik sınıflandırmasına göre; Paget hastalığı, Hiperparatiroidizm ve Fibröz displazi'nin ortak olarak listelendiği ana kategori aşağıdakilerden hangisidir?
Doğru Şık (C): Generalize radyopasiteler / Sistemik hastalıklar
Açıklama: Paget hastalığı, hiperparatiroidizm ve fibröz displazi, kemik metabolizmasını yaygın ve birden çok kadranda etkileyen durumlar oldukları için 'Generalize radyopasiteler / Sistemik hastalıklar' kategorisinde ortak olarak listelenirler. Bu lezyonlar maturasyonlarına bağlı olarak mikst radyolüsent-radyopak patern de gösterebilirler ancak fokal kistik nitelik taşıyan perikoronal veya saf multiloküler özellik göstermezler.

**Soru 2 (ID: e3bff7c8-8228-4f34-8695-bebd5fe94b5f)**
Soru Kökü: Radyolojik sınıflama algoritmalarına göre; hem osteolitik ve osteoblastik fazların bir arada görülmesiyle 'mikst radyolüsent-radyopak lezyonlar', hem de iskelet sistemini diffüz olarak etkilemesiyle 'generalize radyopasiteler/sistemik hastalıklar' kategorisinde ortaklaşa yer alan kemik metabolizma bozukluğu aşağıdakilerden hangisidir?
Doğru Şık (B): Paget hastalığı
Açıklama: Paget hastalığı (Osteitis deformans), kemik döngüsünün ileri derecede düzensizleştiği sistemik bir kemik hastalığıdır. Hastalığın erken evreleri osteolitik, geç evreleri ise pamuk yumağı tarzında osteosklerotik (radyopak) olduğu için mikst lezyonlar grubunda listelenirken; kranial ve maksillofasiyal iskeleti yaygın şekilde tuttuğu için 'generalize radyopasiteler/sistemik hastalıklar' bölümünde de sınıflandırılır.

---

### ÇİFT 86 (Benzerlik: 0.71)

**Soru 1 (ID: 61554eb0-3a40-4ae0-abef-396b482369ad)**
Soru Kökü: Sekiz yaşındaki hastada kronik otitis media öyküsü ile birlikte çenelerin radyografik incelemesinde alveolar kemikte masif destrüksiyon izleniyor. Multipl radyolüsent odaklar arasında dişlerin havada 'yüzüyormuş' gibi göründüğü belirleniyor. Diğer iskelet sistemi bölgelerinde de lezyonlar varsa, 'Multipl Radyolüsensiler' kategorisindeki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücre hastalığı (Histiositozis X)
Açıklama: Langerhans hücreli histiyositoz (Histiyositozis X), genç hastalarda multipl zımba deliği tarzı lezyonlar yapar ve geniş alveolar kemik destrüksiyonu neticesinde dişlerin havada yüzer gibi kalması bu hastalığın patognomoniğe yakın bir radyografik sunumudur.

**Soru 2 (ID: 655e30e2-825e-4958-8acc-f10ec4f77b18)**
Soru Kökü: Sekiz yaşında erkek çocuk, alt çenesinde birkaç hafta içinde olağanüstü hızla gelişen fasiyal deformite ve diş eti büyümesi şikayetiyle getirilmiştir. Panoramik grafide, komşu sürmüş dişleri yerinden etmiş ve dişlere alveoler kemik içinde yüzer gibi bir görünüm kazandırmış balon şeklinde çok hızlı büyüyen litik bir alan mevcuttur. Biyopside yıldızlı gökyüzü manzarası izlenen bu malignitede en güçlü tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Burkitt Lenfoma
Açıklama: 8 yaş civarında çenede (özellikle Afrika formunda) ekstrem derecede hızlı büyüme, şiddetli alveoler yıkıma bağlı 'yüzer dişler' görünümü ve nöral parestezi bulguları Burkitt Lenfoma'nın spesifik manifestosudur. Tümörün mitoz indeksinin çok yüksek olması balon şeklinde genişlemeye ve dişlerin destekten yoksun kalarak sallanmasına sebep olur. Nöroblastom da çocukluk çağı tümörü olsa da dişlerin folikülünü tamamen yüzdürecek bu özel kortikal incelme paterni öncelikle Burkitt lehinedir.

---

### ÇİFT 87 (Benzerlik: 0.71)

**Soru 1 (ID: 355698c3-1661-4f3e-a826-2ab0c2265863)**
Soru Kökü: Burkitt Lenfoma'nın çene tutulumu ile ilgili aşağıdaki klinik ve radyolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Büyüme sürecinde reaktif olarak kortekse paralel güçlü laminar periost reaksiyonu görülür.
Açıklama: Burkitt lenfoma çok agresif osteolitik bir yıkım yapar ve periostu kemik oluşturmaya teşvik edecek zaman bırakmaz. Çenede karakteristik laminar (soğan zarı) periosteal reaksiyon gösteren hastalık Burkitt lenfoma değil, Osteomiyelit veya Eozinofilik Granülomdur. Yüzen dişler ve PDL genişlemesi ise lenfoma için tipiktir.

**Soru 2 (ID: f45418d1-6430-4555-b87f-60c851e77737)**
Soru Kökü: Maksilla ve posterior mandibulada yerleşim gösteren Non-Hodgkin Lenfoma olgularında, malign hücrelerin sürmekte olan dişlerin papillasına ve kriptlerine infiltrasyonu sonucu aşağıdaki durumlardan hangisi karakterize bir klinik/radyolojik bulgu olarak ortaya çıkar?
Doğru Şık (A): Gelişmekte olan dişlerin oklüzal yönde yer değiştirip eksfoliasyona uğraması
Açıklama: Non-Hodgkin Lenfoma ve Lösemi gibi kemik iliği ve lenfoid kökenli malignitelerde, tümör hücresi infiltrasyonu diş kripti içindeki basıncı artırır ve destek kemiği yıkarak henüz kök gelişimi tamamlanmamış dişleri oklüzal yöne doğru itebilir (premature erüpsiyon veya eksfoliasyon). Ankiloza veya sementoza yol açmaz, aksine destek kaybına neden olur.

---

### ÇİFT 88 (Benzerlik: 0.71)

**Soru 1 (ID: 1ab0df52-4cef-4544-b34c-bedaefdc2548)**
Soru Kökü: Dental pratikte rutin alınan panoramik radyografilerde kemik yapısının sistemik bir problemden ötürü total olarak değiştiği 'generalize radyopasite' izlenebilir. Aşağıdaki patolojilerden hangisi tüm çene kemiklerinde generalize (yaygın) radyopasiteye neden olan sistemik hastalıklardan biri **değildir**?
Doğru Şık (E): Cherubism
Açıklama: Osteopetrozis (kemik yoğunluğunun aşırı artması), Paget hastalığı (anormal kemik döngüsüyle pamuk yığını), Florid Osseöz Displazi (yaygın semento-osseöz kitleler) ve hiperparatiroidizmin bazı sklerotik safhaları çenelerde generalize radyopasite oluşturur. Cherubism (familyal fibröz displazi varyantı) ise çene açılarında bilateral, çok odacıklı (multiloküler) radyolüsent sabun köpüğü görünümü yapar; radyoopak bir hastalık değildir.

**Soru 2 (ID: ca6f5ef3-c69f-475d-89dd-d03512d8d42e)**
Soru Kökü: Dişlerin sement yapısını ve periapikal kemiği etkileyen osteojenik değişiklikler incelendiğinde; aşağıdakilerden hangisi radyografik tabloda 'soliter radyopasite' olarak izlenen lokalize bir patoloji **değildir**?
Doğru Şık (A): Florid osseoz displazi
Açıklama: Florid osseoz displazi (FOD), çenelerin sıklıkla üç veya dört kadranını etkileyen, yaygın kalsifik kitleler sunarak 'multipl radyopasite' veya 'generalize radyopasite' tablosu oluşturan kemik metabolizma hastalığıdır. Matür PSD, kondanse osteitis ve hipersementoz ise ilgili diş/dişler kök ucunda izole kalsifiye odaklar sunarak karakteristik soliter radyopasiteler sınıfına girerler. FOD generalize kemik davranışıdır.

---

### ÇİFT 89 (Benzerlik: 0.71)

**Soru 1 (ID: 830db24a-0573-4eac-8ff6-f4aeabe560dd)**
Soru Kökü: Radyolojik incelemede tekil, izole ve sınırları belirgin 'soliter radyopasite' saptanan bir vakada, aşağıdaki lezyonlardan hangisi standart ayırıcı tanı listesinde yer **almaz**?
Doğru Şık (E): Florid osseoz displazi
Açıklama: Florid osseöz displazi, kemik metabolizmasını yaygın etkileyen ve radyografik olarak multipl veya generalize radyopasiteler şeklinde izlenen bir patolojidir. Buna karşın enostoz, kondanse osteitis, hipersementoz ve kalmış kökler çenelerde fokal, tekil odak formunda gelişen karakteristik soliter radyopasitelerdir. Generalize kemik yıkım/yapım tabloları soliter lezyonlar kategorisinden dışlanmalıdır.

**Soru 2 (ID: b80b326c-3286-43e1-a2b4-5dadea432c10)**
Soru Kökü: Bir diş hekimi radyografik değerlendirmede çene kemiğinde tekil bir radyoopak odak tespit etmiş ve hastanın anamnezindeki eski travma öyküsüne dayanarak ayırıcı tanıda 'Yabancı cisimler' (metal veya materyal) olabileceğini düşünmüştür. Sınıflandırma tablolarına göre aşağıdaki lezyonlardan hangisi bu şüphe ile aynı 'soliter radyopasiteler' grubunda yer **almaz**?
Doğru Şık (A): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom histopatolojik olarak dev hücreler içeren litik bir lezyon olup, radyografik tablolarda 'multiloküler radyolüsensiler' sınıfında konumlandırılır. Yabancı cisimler, idiopatik osteoskleroz, matür periapikal semental displazi, ekzostoz ve kalmış kökler ise spesifik lokalizasyonda kalsifiye/metalik görünüm vererek soliter radyopasiteler arasında bulunur. Litik olan granülom radyoopak tanıların listesinden çıkartılır.

---

### ÇİFT 90 (Benzerlik: 0.71)

**Soru 1 (ID: 6e0e913d-6244-40d0-b697-6636405a7031)**
Soru Kökü: Aşağıdaki odontojenik lezyonlardan hangisi, histolojik epitel ve mezenkim gelişimi boyunca mineralize matris (radyopak materyal) sentezlemediğinden 'kalsifikasyon içeren perikoronal radyolüsensiler' ayırıcı tanısında **beklenmez**?
Doğru Şık (E): Ameloblastoma
Açıklama: Ameloblastoma lokal agresif gelişim gösteren ve mineralize yapılar sentezlemeyen bir tümör olduğundan tipik olarak kalsifikasyon içermeyen perikoronal radyolüsensi formunda izlenir. Kalsifiye odontojenik kist (Gorlin), AOT, ameloblastik odontom ve ameloblastik fibro-odontom ise perikoronal lokalizasyonlarında odontojenik sert doku formasyonları ve kalsifikasyonlar oluştururlar. Radyopak odağın izlenmesi salt ameloblastoma tanısından hekimi uzaklaştırır.

**Soru 2 (ID: f973e179-2294-4e07-8e3e-d7d5fec1b8ed)**
Soru Kökü: 35 yaşındaki hastanın alt posterior bölgesinde sürmemiş bir 20 yaş dişi ve bu dişi koronalinden çevreleyen kalsifikasyon (radyopasite) bulgusu saptanmayan kistik bir lezyon tespit edilmiştir. Sınıflandırma algoritmalarına dayanarak cerrahi planlamada aşağıdaki 'kalsifikasyon içermeyen' tanılardan hangisinin konulma ihtimali **en fazladır**?
Doğru Şık (C): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom odontojenik epitel ve ektomezenkim komponentleri olan ve mineralize yapı üretmeyen bir neoplazmdır, bu sebeple 'kalsifikasyon içermeyen perikoronal radyolüsensiler' listesindedir. AOT, ameloblastik fibro-odontom, kalsifiye odontojenik kist ve ameloblastik odontom ise neoplastik matrisleri (mine, dentin vb.) üzerinden kalsifiye odaklar üretip radyopak kısımlar barındırırlar. Salt radyolüsent patolojilerde mineralizan yapılar ekarte edilir.

---

### ÇİFT 91 (Benzerlik: 0.71)

**Soru 1 (ID: 6a29e92a-46ce-42a8-98b8-080f0c919fbb)**
Soru Kökü: Çene kemiklerine yayılan sekonder malignensilerde, metastazın merkez üssünün radyografik özellikleri primer tümörün doğası hakkında ipucu verebilir. Yetişkin bireylerde çenelere karsinom metastazı yapan en sık primer organ odakları arasında aşağıdakilerden hangisi **değildir**?
Doğru Şık (A): Mide
Açıklama: Karsinomların en sık primer metastaz odakları meme, akciğer, prostat, kolon, rektum, böbrek ve tiroid olarak sıralanır; mide tümörlerinin çeneye metastaz yapması, sayılan diğer sistemik karsinomlara göre çok daha nadirdir. Özellikle meme, prostat ve akciğer çene kemiklerinde radyolüsent veya sklerotik metastatik destrüksiyon yaratan başlıca primer kaynaklardır. Metinde karsinomanın en sık primer tümörü olarak mide sayılmış olsa da, asıl yoğun metastaz akciğer/meme/prostat grubundadır, fakat soru direkt metne bağlıysa metindeki "en sık primer tümörü meme, akciğer, prostat, kolon, rektum, böbrek, tiroid, mide..." listesine dayanarak cevap revize edilmelidir (Kural 5: Kaynak metne sadakat). *Düzeltme: Kaynakta mide geçmektedir. Ancak sorunun cevabı kaynakta yer alan bilgilere tam uymak zorundadır. Soruyu tamamen değiştirmek yerine seçeneklere pankreas koyarak metinde olmayan bariz yanlışı hedefleyelim. Hayır, A şıkkı Mide'dir, soruyu metin dışına çıkmadan ayarlayacağım. (Yanlışlık tespiti yapıldı, düzeltildi: Kaynakta 'mide' de var. Ancak soru için daha net bir negatif üretmeliyim: 'Beyin' vb. Fakat metinde yer alan 'mide' var, metinde olmayan 'pankreas' veya 'karaciğer' konulabilir. Şıkları korumak adına A şıkkını 'Beyin' yapıyorum.)* Düzeltilmiş Şık A: "Santral Sinir Sistemi"

**Soru 2 (ID: b0543568-33aa-4ae0-9ce6-3a6c3e1b21ff)**
Soru Kökü: Çene kemiklerine metastaz yapan malignitelerin radyolojik incelenmesinde, kemik rezorpsiyonundan ziyade komşu kemikte sklerotik formasyonu uyararak radyopak patern oluşturma eğilimi en yüksek olan iki primer tümör odağı aşağıdakilerden hangisidir?
Doğru Şık (A): Meme ve Prostat
Açıklama: Metastatik tümörler çenelerde genellikle litik (radyolüsent) destrüksiyon yapsalar da, prostat ve meme karsinomu metastazları osteoblastik aktiviteyi uyararak sklerotik/radyopak bir patern oluşturmalarıyla karakterizedir. Diğer primer odaklar (akciğer, tiroid, böbrek) ağırlıklı olarak osteoklastik yıkım ve net bir radyolüsensi ile karşımıza çıkar.

---

### ÇİFT 92 (Benzerlik: 0.71)

**Soru 1 (ID: 0aa83509-98d2-4666-8250-740b811abe57)**
Soru Kökü: Ewing Sarkomunun çene kemiklerindeki radyolojik davranışı ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Komşu dişleri destekleyen kemiği yıkarken aynı zamanda diş köklerinde şiddetli rezorpsiyona yol açar.
Açıklama: Ewing sarkomu komşu dişleri destekleyen kemik yapılarını son derece agresif bir şekilde harap etse de, tipik olarak dişlerin köklerinde rezorpsiyon yapmaz. Tümör kemik trabeküllerini hızla litik erozyona uğratır fakat dişin sement ve dentin yapıları bu süreçten korunur. Diğer seçeneklerdeki kortikal yıkım, Codman üçgeni, sınır belirsizliği ve folikül tahribatı Ewing sarkomunun karakteristik hızlı büyüme belirtileridir.

**Soru 2 (ID: 9789072a-81f6-4866-b271-f4e197c1e39a)**
Soru Kökü: Mandibulada zımba deliği tarzı radyolüsent lezyonları olan multipl myelom hastasında görülebilecek çene ve radyolojik bulgularla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Kortekse paralel yaygın periost reaksiyonu (soğan kabuğu) görülür.
Açıklama: Multipl myelomda kemik lezyonlarında periosteal reaksiyon oluşumu nadirdir. Kortekse paralel periost reaksiyonu (soğan kabuğu) osteomiyelit veya Ewing sarkomu gibi durumlarda görülür. Endosteal scalloping (kurabiye ısırığı) MM için spesifik bulgular arasındadır.

---

### ÇİFT 93 (Benzerlik: 0.71)

**Soru 1 (ID: 743411a5-62c6-46c1-a887-a40f39f78d5c)**
Soru Kökü: Çenede multiloküler bal peteği tarzında ekspansil kitle izlenen bir olguda, ameloblastik karsinomayı standart bir benign ameloblastomadan ayırmada radyolojik olarak hangi bulgu maligniteyi düşündürür?
Doğru Şık (B): Kortikal sınır devamlılığında net bir destrüksiyon izlenmesi
Açıklama: Benign ameloblastomalar kemikte ekspansiyon yapsa da genellikle sağlam bir kortikal sınıra (iyi kortikal-skallop sınır) sahiptirler. Ameloblastik karsinomada ise agresif büyüme paternine bağlı olarak kortikal sınır devamlılığında bozulma ve destrüksiyon saptanır. Diş kökü rezorpsiyonu benign ameloblastomada da yaygın bir bulgudur.

**Soru 2 (ID: ea4c4698-39b9-4740-87c2-c328a5d2d6f7)**
Soru Kökü: Dental kistlerin malign transformasyonu ile sekonder enfekte kistlerin radyolojik ayırıcı tanısında, aşağıdakilerden hangisi karsinomatöz değişimi destekleyen en güçlü bulgudur?
Doğru Şık (C): Kortikal sınırın kaybolması ve kemikte sklerotik reaksiyonun bulunmaması
Açıklama: Dental kistler enfekte olduğunda inflamasyonla birlikte kemikte periferal sklerotik bir yanıt meydana gelir ve sınırlarını korumaya çalışır. Ancak kist epiteli skuamöz hücreli karsinoma dönüştüğünde, bu sklerozis tabakası oluşmaz ve lezyon düzensiz sınırlarla kemik içinde hızla yayılır. Diğer şıklardaki kalsifikasyon veya skleroz bulguları benign veya inflamatuar doğayı işaret eder.

---

### ÇİFT 94 (Benzerlik: 0.71)

**Soru 1 (ID: 466a8d1a-a49b-43a6-b4c4-352d33832baf)**
Soru Kökü: Kırk yaşında kadın hasta, posterior mandibulada yavaş ancak progresif olarak genişleyen, ağrılı bir kitle nedeniyle başvuruyor. Panoramik radyografide alveolar proses ve mandibular kanalın kortikal sınırını silen, kapsülsüz dekstrüktif bir radyolüsensi saptanıyor. Tanı olarak fibrosarkom düşünülen bu lezyonun periferal sinirleri invaze etmesi durumunda **en olası** klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Duyusal nöral anormaliteler (parestezi/anestezi)
Açıklama: Fibrosarkomlar periferal sinirleri içerdiğinde ağrıya ek olarak duyusal nöral anormalitelere (parestezi, anestezi, dizestezi) neden olur. TME veya paramandibular kaslar tutulursa trismus görülür. Dişlerde hipersementoz değil, destek kemik kaybına bağlı havada yüzme görünümü beklenir.

**Soru 2 (ID: 72f7c682-683b-47f2-9211-0fbcdd24d7fd)**
Soru Kökü: Elli beş yaşında kadın hasta, sağ alt çenesinde ilerleyen uyuşukluk, nedeni belirsiz diş ağrıları ve son zamanlarda çekilen dişinin soketinin iyileşmemesi şikayetiyle kliniğe başvurmuştur. Radyolojik muayenede, mandibula posteriorda inferior kortikal sınırda erozyon ve rezidüel kemik içinde dairesel merkez üslü destrüksiyon izlenmiştir. Anamnezinde 5 yıl önce meme kanseri tedavisi gören bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Metastatik karsinom
Açıklama: Bilinen primer meme kanseri öyküsü, alt dudakta uyuşukluk (trigeminal 3. dal parestezisi), çekim yarasının iyileşmemesi ve inferior korteks erozyonu metastatik lezyonların klasik kliniğidir. Merkez üssünün çene kemiğinin ortasında yer alıp dışa doğru destrükte etmesi primer tümörlerden ziyade kan yoluyla gelen metastazın kemik içi yerleşimine işaret eder. Fibröz displazi ve ameloblastomda genellikle sinirsel his kayıpları ve çekim soketi iyileşmeme problemleri ön planda değildir.

---

### ÇİFT 95 (Benzerlik: 0.71)

**Soru 1 (ID: 5a770f81-823f-4d41-be12-5c4bb2c2e11f)**
Soru Kökü: Aşağıdaki kistik veya tümöral lezyonlardan hangisi, Tablo 12'ye göre 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer **almaz**?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Tablo 12'deki sınıflandırmaya göre Ameloblastik fibrom, kalsifikasyon İÇERMEYEN perikoronal radyolüsensiler sınıfındadır (Dentijeröz kist, erüpsiyon kisti, OKK ve ameloblastoma ile birlikte). Seçeneklerdeki AOT, CEOT, COC ve Ameloblastik fibro-odontom ise internal yapısında kalsifiye/radyopak odak barındıran perikoronal lezyonlardır.

**Soru 2 (ID: f973e179-2294-4e07-8e3e-d7d5fec1b8ed)**
Soru Kökü: 35 yaşındaki hastanın alt posterior bölgesinde sürmemiş bir 20 yaş dişi ve bu dişi koronalinden çevreleyen kalsifikasyon (radyopasite) bulgusu saptanmayan kistik bir lezyon tespit edilmiştir. Sınıflandırma algoritmalarına dayanarak cerrahi planlamada aşağıdaki 'kalsifikasyon içermeyen' tanılardan hangisinin konulma ihtimali **en fazladır**?
Doğru Şık (C): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom odontojenik epitel ve ektomezenkim komponentleri olan ve mineralize yapı üretmeyen bir neoplazmdır, bu sebeple 'kalsifikasyon içermeyen perikoronal radyolüsensiler' listesindedir. AOT, ameloblastik fibro-odontom, kalsifiye odontojenik kist ve ameloblastik odontom ise neoplastik matrisleri (mine, dentin vb.) üzerinden kalsifiye odaklar üretip radyopak kısımlar barındırırlar. Salt radyolüsent patolojilerde mineralizan yapılar ekarte edilir.

---

### ÇİFT 96 (Benzerlik: 0.71)

**Soru 1 (ID: b80b326c-3286-43e1-a2b4-5dadea432c10)**
Soru Kökü: Bir diş hekimi radyografik değerlendirmede çene kemiğinde tekil bir radyoopak odak tespit etmiş ve hastanın anamnezindeki eski travma öyküsüne dayanarak ayırıcı tanıda 'Yabancı cisimler' (metal veya materyal) olabileceğini düşünmüştür. Sınıflandırma tablolarına göre aşağıdaki lezyonlardan hangisi bu şüphe ile aynı 'soliter radyopasiteler' grubunda yer **almaz**?
Doğru Şık (A): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom histopatolojik olarak dev hücreler içeren litik bir lezyon olup, radyografik tablolarda 'multiloküler radyolüsensiler' sınıfında konumlandırılır. Yabancı cisimler, idiopatik osteoskleroz, matür periapikal semental displazi, ekzostoz ve kalmış kökler ise spesifik lokalizasyonda kalsifiye/metalik görünüm vererek soliter radyopasiteler arasında bulunur. Litik olan granülom radyoopak tanıların listesinden çıkartılır.

**Soru 2 (ID: dda63979-e5b8-402d-baa2-eb600ffe6260)**
Soru Kökü: Panoramik radyografide çenelerdeki radyolüsent bir patoloji incelenirken, aşağıdakilerden hangisi 'Soliter Radyolüsensiler' kategorisinde değerlendirilecek lezyon veya durumlardan biri **değildir**?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma tipik olarak kortikal genişleme yapan ve kemik septasyonları barındıran 'Multiloküler Radyolüsensiler' grubunda yer alır. Diğer seçeneklerdeki lezyonlar radyografide tek kompartmanlı (soliter/uniloküler) radyolüsensi üretir.

---

### ÇİFT 97 (Benzerlik: 0.71)

**Soru 1 (ID: b80b326c-3286-43e1-a2b4-5dadea432c10)**
Soru Kökü: Bir diş hekimi radyografik değerlendirmede çene kemiğinde tekil bir radyoopak odak tespit etmiş ve hastanın anamnezindeki eski travma öyküsüne dayanarak ayırıcı tanıda 'Yabancı cisimler' (metal veya materyal) olabileceğini düşünmüştür. Sınıflandırma tablolarına göre aşağıdaki lezyonlardan hangisi bu şüphe ile aynı 'soliter radyopasiteler' grubunda yer **almaz**?
Doğru Şık (A): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom histopatolojik olarak dev hücreler içeren litik bir lezyon olup, radyografik tablolarda 'multiloküler radyolüsensiler' sınıfında konumlandırılır. Yabancı cisimler, idiopatik osteoskleroz, matür periapikal semental displazi, ekzostoz ve kalmış kökler ise spesifik lokalizasyonda kalsifiye/metalik görünüm vererek soliter radyopasiteler arasında bulunur. Litik olan granülom radyoopak tanıların listesinden çıkartılır.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 98 (Benzerlik: 0.71)

**Soru 1 (ID: 994406ac-93ff-464f-aaab-5c78f384029d)**
Soru Kökü: Kırk beş yaşındaki siyahi kadın hastanın alt çene anterior dişlerinin kök uçlarında multipl, iyi sınırlı radyolüsent alanlar tespit ediliyor. Dişlerde mobilite veya çürük yoktur, vitalite testleri pozitif sonuç vermektedir. Multipl radyolüsensiler sınıflandırmasına göre bu vakanın başlangıç fazı düşünüldüğünde en olası tanı nedir?
Doğru Şık (A): Periapikal semental displazi (Sementoma)
Açıklama: Periapikal semental displazi özellikle orta yaş siyah kadınlarda, alt anterior dişlerin apikalinde başlar. Birinci radyolüsent (osteolitik) fazında multipl radyolüsensi grubunda incelenir ve vital dişlerle ilişkilidir. Hastalık ilerledikçe bu radyolüsensiler radyoopaklaşır.

**Soru 2 (ID: a62c8e2b-c9e2-4e19-b091-db782b13eb75)**
Soru Kökü: 42 yaşında kadın hasta, radyografik inceleme sırasında sağ alt birinci büyük azı dişinin apikal bölgesinde iyi sınırlı tek bir radyopak alan saptanması üzerine kliniğe refere ediliyor. Diş vital ve hastanın herhangi bir şikayeti bulunmamaktadır. Bu hastada saptanan 'soliter radyopasite'nin ayırıcı tanısında aşağıdakilerden hangisinin yer alması **en az olasıdır**?
Doğru Şık (B): Soket sklerozu
Açıklama: Radyografik ayırıcı tanı listelerine göre matür periapikal semental displazi, idiopatik osteoskleroz, yabancı cisimler ve ekzostoz tipik olarak soliter radyopasite ayırıcı tanısında yer alır. Soket sklerozu ise boş çekim soketinin anormal kortikal yoğunlukta dolmasıyla oluşur ve tipik olarak 'multipl radyopasiteler' başlığı altında standardize edilmiştir. Dolayısıyla hastadaki tekil ve izole alan için soket sklerozu patogenezi öncelikle düşünülmez.

---

### ÇİFT 99 (Benzerlik: 0.71)

**Soru 1 (ID: 6efaeaa1-959a-4d77-adec-660d80f192f5)**
Soru Kökü: Çene radyografilerinde periodonsiyumu sağlam sağlıklı bir dişin kök bölgesinde, normal lamina dura varlığına rağmen periodontal ligament aralığının daraldığı ve destekleyici kemiğin normal düzenini yitirdiği saptanmıştır. Bu tabloyu göstererek osteosarkom şüphesini dışlayan radyolojik teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Fibröz displazi
Açıklama: Osteosarkom, kondrosarkom veya fibrosarkom gibi malign mezenkimal lezyonlarda periodontal ligament aralığında asimetrik genişleme ve lamina dura kaybı izlenir. Fibröz displazide ise patognomonik olarak lamina dura bütünlüğü bir süre korunarak periodontal aralıkta DARALMA meydana gelir, bu durum displastik kemiğin diş köküne baskı yapmasındandır.

**Soru 2 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

---

### ÇİFT 100 (Benzerlik: 0.71)

**Soru 1 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

**Soru 2 (ID: c7757ab0-fc33-457e-9711-7ada7850fb09)**
Soru Kökü: Kırk yedi yaşında erkek hasta, çene ekleminde anormal fonksiyon şikayetiyle muayeneye alınmıştır. Radyografide mandibula kondilinden kaynaklanan, mikst radyolüsent-radyopak karakterli (güve yeniği), yavaş büyüyen ve kortekse dik güneş ışını tarzı periosteal yeni kemik reaksiyonu gösteren bir kitle saptanmıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kondrosarkom
Açıklama: Kondrosarkom, 40'lı yaşların sonlarında (yaklaşık 47 yaş) sık görülen, yavaş büyüyen, kondil ve koronoid prosesi tercih eden, mikst kalsifikasyon paternine ve spesifik periferik güneş ışını tarzı periost reaksiyonuna sahip bir sarkomdur. TMJ bölgesini tuttuğu için eklem disfonksiyonu tipiktir. Osteosarkoma çok benzer ancak kalsifikasyon odaklarındaki yoğunluk ve yavaş seyri ile karakterizedir.

---

### ÇİFT 101 (Benzerlik: 0.71)

**Soru 1 (ID: c38355ff-00ce-475b-94d0-8882b9377345)**
Soru Kökü: Altmış yaşında erkek hasta idrarının köpüklü olması, aşırı yorgunluk, kemik ağrısı ve oral mukozada açıklanamayan hemoraji nedeniyle hastaneye başvuruyor. İdrar analizinde Bence-Jones proteini tespit ediliyor. Bu patolojide saptanan spesifik protein aşağıdakilerin hangisi tarafından üretilmektedir?
Doğru Şık (C): Antikor üreten plazma hücreleri
Açıklama: Bence-Jones proteini, multipl myelomda malignite gösteren ve antikor üreten beyaz kan hücreleri olan plazma hücreleri tarafından sentezlenen küçük bir proteindir. Bu proteinin böbreklerden atılımı idrarın köpüklü görünmesine yol açar. Hastalığın temel mekanizması plazma hücresi diskrazisidir.

**Soru 2 (ID: f71abe4d-541d-4996-9570-24f8bd86b2a2)**
Soru Kökü: Altmış beş yaşında erkek hasta; yorgunluk, istemsiz kilo kaybı, sırtta kemik ağrıları ve son haftalarda sağ alt çenede başlayan ilerleyici uyuşukluk şikayetiyle başvurmuştur. İdrar tahlilinde idrarın köpüklü olduğu saptanmıştır. Panoramik radyografisinde sağ mandibula inferior korteksinin iç (endosteal) yüzeyinde lokalize kemik erozyonları saptanmıştır. Bu tabloya neden olan hastalığın patofizyolojisinde rol oynayan hücre grubu ve ürün aşağıdakilerden hangisidir?
Doğru Şık (E): Plazma hücreleri - Bence-Jones proteini
Açıklama: Hastadaki yorgunluk, kemik ağrıları, uyuşuk çene ve köpüklü idrar semptomları Multiple Myelom'un klasik üçlemesidir. Köpüklü idrarın sebebi neoplastik plazma hücreleri tarafından aşırı üretilip böbreklerden atılan anormal hafif zincir antikorlarıdır (Bence-Jones proteini). Mandibuladaki endosteal erozyon (kurabiye ısırığı) yine plazma hücre klonlarının lokal osteoliz yapmasından kaynaklanır.

---

### ÇİFT 102 (Benzerlik: 0.71)

**Soru 1 (ID: 655e30e2-825e-4958-8acc-f10ec4f77b18)**
Soru Kökü: Sekiz yaşında erkek çocuk, alt çenesinde birkaç hafta içinde olağanüstü hızla gelişen fasiyal deformite ve diş eti büyümesi şikayetiyle getirilmiştir. Panoramik grafide, komşu sürmüş dişleri yerinden etmiş ve dişlere alveoler kemik içinde yüzer gibi bir görünüm kazandırmış balon şeklinde çok hızlı büyüyen litik bir alan mevcuttur. Biyopside yıldızlı gökyüzü manzarası izlenen bu malignitede en güçlü tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Burkitt Lenfoma
Açıklama: 8 yaş civarında çenede (özellikle Afrika formunda) ekstrem derecede hızlı büyüme, şiddetli alveoler yıkıma bağlı 'yüzer dişler' görünümü ve nöral parestezi bulguları Burkitt Lenfoma'nın spesifik manifestosudur. Tümörün mitoz indeksinin çok yüksek olması balon şeklinde genişlemeye ve dişlerin destekten yoksun kalarak sallanmasına sebep olur. Nöroblastom da çocukluk çağı tümörü olsa da dişlerin folikülünü tamamen yüzdürecek bu özel kortikal incelme paterni öncelikle Burkitt lehinedir.

**Soru 2 (ID: ea155f84-8d49-4fd0-bf6b-84cbb2ec698e)**
Soru Kökü: On yaşındaki erkek hasta, halsizlik ve mukozal solukluk şikayetleriyle getirilmiştir. Hastanın panoramik radyografisinde şiddetli generalize periodontal destrüksiyon alanları, dişler çevresinde osteopenik görünüm ve gelişmekte olan mandibular daimi molar dişin kriptinden yukarıya (oklüzal yöne) doğru yer değiştirdiği izlenmiştir. Dişlerde genişleme yapan lokal bir kitle etkisi yoktur. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Lösemi
Açıklama: Lösemide (özellikle çocukluk çağında) kemik iliğinin malign hücrelerle dolması, generalize kemik yoğunluğu azalmasına (osteopeni), sistemik anemi/solukluk bulgularına ve kökü gelişmemiş sürmekte olan dişlerin folikül içi basınç artışıyla oklüzale itilmesine (premature erüpsiyon) neden olur. Kitle yapmadan bu tabloyu çizen en karakteristik sistemik malignite lösemidir.

---

### ÇİFT 103 (Benzerlik: 0.71)

**Soru 1 (ID: 0e883bf8-845e-4d5d-b6e9-518fd0b7bb23)**
Soru Kökü: Multipl miyelom hastalarında patolojik kırık riskini azaltmak amacıyla pamidronat ve zoledronik asit gibi bisfosfonatlar sıklıkla kullanılmaktadır. Yalnızca zoledronat alan bu hasta grubunda ilaca bağlı çene osteonekrozu (MRONJ) gelişme riskinin (insidansının) tahmini olarak hangi aralıkta olduğu belirtilmektedir?
Doğru Şık (E): %6-8
Açıklama: Multipl miyelom tedavisinde IV zoledronat kullanan hastalar osteonekroz açısından en büyük risk altındaki gruptur ve kaynak metinde bu hastalarda MRONJ insidansının spesifik olarak %6-8 olduğu belirtilmiştir. Pamidronat ile kombine edildiğinde bu oran daha da artabilmektedir.

**Soru 2 (ID: e3951289-47bd-4a07-9807-cedf9ce7d4c2)**
Soru Kökü: Çene kemiklerinde patolojik kırık riskini ve tümör morbiditesini azaltmak amacıyla yüksek doz intravenöz bisfosfonat (pamidronat, zoledronik asit vb.) uygulanan ve bu nedenle ilaca bağlı çene osteonekrozu (MRONJ) gelişme riski en yüksek hasta grubu, aşağıdaki tanılardan hangisiyle takip edilenlerdir?
Doğru Şık (E): İleri evre Multiple Myelom
Açıklama: Multiple Myelom kemik iliğini yaygın olarak tutan, şiddetli osteolize neden olup omurga ve uzun kemiklerde majör patolojik kırıklar yaratan sistemik bir plazma hücre kanseridir. Bu litik harabiyeti durdurmak için hastalar yoğun IV bisfosfonat (zoledronat) veya denosumab tedavisi alırlar, bu farmakolojik yüklenme onları ilaca bağlı çene osteonekrozu (MRONJ) açısından en yüksek risk grubuna (%6-8) sokar. Karsinomlar lokalize cerrahi/radyoterapi ile tedavi edilirken bu spesifik medikal kemik baskılayıcılar rutin değildir.

---

### ÇİFT 104 (Benzerlik: 0.71)

**Soru 1 (ID: b55d24f1-b55b-4e31-aeac-5d4302690979)**
Soru Kökü: Aşağıdaki çene içi radyolüsent lezyonlardan hangisi, gelişmekte olan diş foliküllerinde kortikal sınırın silinmesine ve sürmemiş dişlerin kök gelişimi tamamlanmadan normal kriptalarından çıkıp hızlı bir şekilde oklüzal yöne itilerek eksfoliye olmasına en çok neden olan hastalıktır?
Doğru Şık (C): Non-Hodgkin Lenfoma
Açıklama: Non-Hodgkin lenfomada ve lösemide malign hücreler diş papiline sızdığında, gelişmekte olan diş kriptlerinin sklerotik korteksi kaybolur. Bu durum, gelişmekte olan ve sürmekte olan dişlerin kök gelişimleri henüz bitmeden foliküllerinden dışarı (oklüzal yönde) itilerek erkenden düşmelerine (eksfoliasyon) sebep olur.

**Soru 2 (ID: f45418d1-6430-4555-b87f-60c851e77737)**
Soru Kökü: Maksilla ve posterior mandibulada yerleşim gösteren Non-Hodgkin Lenfoma olgularında, malign hücrelerin sürmekte olan dişlerin papillasına ve kriptlerine infiltrasyonu sonucu aşağıdaki durumlardan hangisi karakterize bir klinik/radyolojik bulgu olarak ortaya çıkar?
Doğru Şık (A): Gelişmekte olan dişlerin oklüzal yönde yer değiştirip eksfoliasyona uğraması
Açıklama: Non-Hodgkin Lenfoma ve Lösemi gibi kemik iliği ve lenfoid kökenli malignitelerde, tümör hücresi infiltrasyonu diş kripti içindeki basıncı artırır ve destek kemiği yıkarak henüz kök gelişimi tamamlanmamış dişleri oklüzal yöne doğru itebilir (premature erüpsiyon veya eksfoliasyon). Ankiloza veya sementoza yol açmaz, aksine destek kaybına neden olur.

---

### ÇİFT 105 (Benzerlik: 0.71)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 106 (Benzerlik: 0.71)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: dda63979-e5b8-402d-baa2-eb600ffe6260)**
Soru Kökü: Panoramik radyografide çenelerdeki radyolüsent bir patoloji incelenirken, aşağıdakilerden hangisi 'Soliter Radyolüsensiler' kategorisinde değerlendirilecek lezyon veya durumlardan biri **değildir**?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma tipik olarak kortikal genişleme yapan ve kemik septasyonları barındıran 'Multiloküler Radyolüsensiler' grubunda yer alır. Diğer seçeneklerdeki lezyonlar radyografide tek kompartmanlı (soliter/uniloküler) radyolüsensi üretir.

---

### ÇİFT 107 (Benzerlik: 0.71)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: 9652ab56-5ad8-4bc2-a6df-b479d494db0d)**
Soru Kökü: On beş yaşında, çene ağrısı ve parestezisi olan bir erkek hastanın radyografisinde Codman üçgeni ve güneş ışını tarzı periosteal reaksiyon izlenen litik bir destrüksiyon vardır. Ewing sarkomu şüphesiyle değerlendirilen bu hastada aşağıdaki radyolojik-klinik özelliklerden hangisinin görülmesi **beklenmez**?
Doğru Şık (E): Komşu dişleri destekleyen kemiği yıkarken belirgin kök rezorpsiyonu yapması
Açıklama: Ewing sarkomu çenelerde agresif litik dekstrüksiyona, Codman üçgeni veya sun-ray gibi periosteal reaksiyonlara sebep olur. Komşu dişleri destekleyen alveolar kemik yapılarına çok hızlı zarar vermesine rağmen, tümörün hızlı tabiatından dolayı dişlerde rezorpsiyon yapacak süre bulunamaz; bu nedenle kök rezorpsiyonu yapmaz.

---

### ÇİFT 108 (Benzerlik: 0.71)

**Soru 1 (ID: 6af3556a-d69f-4a2a-9f9c-2caf0d0b27f2)**
Soru Kökü: Çene kemiklerinde hem kemik yapımının hem de kemik yıkımının eş zamanlı veya ardışık gerçekleştiği durumlarda radyografide mikst radyolüsent-radyoopak görünüm oluşur. Aşağıdaki patolojilerden hangisi karakteri gereği radyografik olarak mikst lezyon profili **sergilemez**?
Doğru Şık (C): Multiple Myelom
Açıklama: Multiple Myelom, plazma hücrelerinin kemik yıkıcı sitokinleri (OAF) aşırı üretmesi sonucu kemikte sadece osteolitik aktivite gösteren, tamamen radyolüsent 'zımba deliği' tarzı litik lezyonlar yapar; reaktif veya neoplastik kemik yapımı göstermez. Buna karşın Paget hastalığı (pamuk yığını), osteosarkom (sunray/skleroz), semento-ossifiye fibromlar mikst özellik sergileyen başlıca oluşumlardır.

**Soru 2 (ID: ec9a179b-7fc0-4af6-adce-d80cfdafcbe5)**
Soru Kökü: Multipl myelom vakalarında görülen tekil mandibular litik bir lezyonun radyolojik olarak aşağıda verilen patolojilerden hangisine birebir benzemesi nedeniyle, bu iki lezyonun özellikle genç/yaşlı ayrımı yapılmadan sadece filme bakılarak ayrılması oldukça güçtür?
Doğru Şık (A): Basit (Travmatik) kemik kisti
Açıklama: Multipl myelomda mandibulada oluşan soliter, kortikalsiz radyolüsent litik kitleler, radyografik şekil itibariyle basit (travmatik) kemik kistine benzeyebilir. Ancak basit kemik kistleri çoğunlukla intakt bir kortekse sahip, diş kökleri arasında tarak (scalloped) şeklinde uzanan ve çok daha genç yaş grubunda görülen lezyonlardır.

---

### ÇİFT 109 (Benzerlik: 0.71)

**Soru 1 (ID: bb668e8f-1716-4019-af56-5f79657f8a52)**
Soru Kökü: Altmış yaşında erkek hasta, sağ alt çenede dentijeröz kist ön tanısıyla opere edilmiş ve kist epiteli histopatolojik incelemeye gönderilmiştir. Radyolojik incelemede kist çevresinde periferik sklerotik bir yanıt izlenmiştir. Bu radyolojik bulgu, malign transformasyondan ziyade öncelikle aşağıdakilerden hangisini işaret eder?
Doğru Şık (A): Kistin sekonder olarak enfekte olduğunu
Açıklama: Dental kistler enfekte olduğunda normal kortikal sınırlarını kaybedebilir ancak inflamasyona bağlı olarak çevre kemikte sekonder periferik sklerotik bir yanıt geliştirirler. Malign transformasyona uğramış bir kistte ise kemik destrüksiyonu izlenirken bu tip koruyucu bir sklerotik hat tipik olarak mevcut değildir. Santral ve kist kökenli karsinomlar hızlı yıkım yaptıkları için skleroz bırakmadan korteksi perfore etme eğilimindedir.

**Soru 2 (ID: f32f5efd-92ac-4252-8525-710d2dd2b08a)**
Soru Kökü: 42 yaşında kadın hasta, sağ mandibula posterior bölgede ağrılı şişlik ve alt dudakta uyuşukluk şikayetiyle başvuruyor. Alınan radyografide, sürmemiş bir 20 yaş dişinin kuronunu çevreleyen, düzensiz sınırlı ve kortikal erozyona neden olmuş multiloküler bir radyolüsensi izleniyor. Bu klinik tabloda dentijeröz kist tanısını uzaklaştırıp maligniteyi (özellikle santral mukoepidermoid karsinom) destekleyen **en az olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Sürmemiş bir dişle ilişkili olması
Açıklama: Santral mukoepidermoid karsinom olgularının yaklaşık %50'si sürmemiş bir dişle ilişkilidir, tıpkı bir dentijeröz kist gibi. Bu nedenle sürmemiş dişle ilişkili olması, maligniteyi destekleyen veya kistten ayıran bir özellik değildir, ortak bulgudur. Ancak ağrı, parestezi ve kortikal erozyon dentijeröz kistte beklenmeyen, maligniteye (CMEC) işaret eden kritik bulgulardır.

---

### ÇİFT 110 (Benzerlik: 0.71)

**Soru 1 (ID: 9a880e78-8260-432e-b34c-cc0296dc6ace)**
Soru Kökü: Çene grafilerinde birden fazla bölgede yaygın (multipl) radyopak odakların saptanması, sistemik veya sendromik hastalıkların radyolojik habercisi olabilir. Aşağıdaki patolojilerden hangisi standart klinik sınıflandırmalarda 'multipl radyopasite' tablosuna neden olan hastalıklardan biri **değildir**?
Doğru Şık (D): Enostoz
Açıklama: Enostoz (kemik adacığı), çene kemiği medullasında gelişen yoğun kortikal kemik kitlesidir ve karakteristik olarak soliter radyopasite formunda izlenir. Paget hastalığının sklerotik evresi, süpernumerer dişler, Gardner sendromuna bağlı multipl osteomalar ve matür periapikal semental displazi ise hastada multipl radyopasite tablosuna neden olur. Sınıflandırmada multipl gelişim göstermeyen yapı enostozdur.

**Soru 2 (ID: a7dcd9df-d55e-47ae-833f-cbf1e696d6be)**
Soru Kökü: Aşağıdaki sistemik durumlardan hangisi, Tablo 12'ye göre tüm çenelerde kemik dansitesinin artışı ile karakterize 'Generalize radyopasiteler' grubunda yer alan bir hastalık **değildir**?
Doğru Şık (D): Multipl myelom
Açıklama: Multipl myelom kemiklerde yaygın litik (zımba deliği) radyolüsent yıkımlara ve generalize osteopeniye neden olan plazma hücreli bir malignitedir. Tablo 12'de generalize radyopasite yapan hastalıklar arasında Osteopetrozis (mermer kemik), Paget, Florid osseöz displazi ve bazı formlarıyla Fibröz displazi veya sklerozan Osteomyelit sayılmaktadır.

---

### ÇİFT 111 (Benzerlik: 0.70)

**Soru 1 (ID: 0aa83509-98d2-4666-8250-740b811abe57)**
Soru Kökü: Ewing Sarkomunun çene kemiklerindeki radyolojik davranışı ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Komşu dişleri destekleyen kemiği yıkarken aynı zamanda diş köklerinde şiddetli rezorpsiyona yol açar.
Açıklama: Ewing sarkomu komşu dişleri destekleyen kemik yapılarını son derece agresif bir şekilde harap etse de, tipik olarak dişlerin köklerinde rezorpsiyon yapmaz. Tümör kemik trabeküllerini hızla litik erozyona uğratır fakat dişin sement ve dentin yapıları bu süreçten korunur. Diğer seçeneklerdeki kortikal yıkım, Codman üçgeni, sınır belirsizliği ve folikül tahribatı Ewing sarkomunun karakteristik hızlı büyüme belirtileridir.

**Soru 2 (ID: f359f178-a3fb-4f87-a4e9-8c76f8c8dcff)**
Soru Kökü: Kronik lösemi hastalarının çene radyografilerinde izlenen spesifik kemik değişiklikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Çene kemiklerinde asimetrik ve hızlı ekspansiyona (genişlemeye) neden olur.
Açıklama: Radyolojik belirtiler daha çok kronik lösemide belirgindir ve ilik boşluğundaki malign proliferasyona bağlı olarak yaygın osteopeni, lamina dura kaybı ve dişlerin belirginleşmesi görülür. Ancak lösemik infiltrasyonlar genellikle kortikal sınırları içeriden inceltmesine rağmen çene kemiğinde belirgin bir genişlemeye (ekspansiyon) neden OLMAZ. Çene ekspansiyonu Burkitt lenfoma, santral dev hücreli granülom veya ameloblastoma gibi kitle lezyonları için tipiktir.

---

### ÇİFT 112 (Benzerlik: 0.70)

**Soru 1 (ID: 9789072a-81f6-4866-b271-f4e197c1e39a)**
Soru Kökü: Mandibulada zımba deliği tarzı radyolüsent lezyonları olan multipl myelom hastasında görülebilecek çene ve radyolojik bulgularla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Kortekse paralel yaygın periost reaksiyonu (soğan kabuğu) görülür.
Açıklama: Multipl myelomda kemik lezyonlarında periosteal reaksiyon oluşumu nadirdir. Kortekse paralel periost reaksiyonu (soğan kabuğu) osteomiyelit veya Ewing sarkomu gibi durumlarda görülür. Endosteal scalloping (kurabiye ısırığı) MM için spesifik bulgular arasındadır.

**Soru 2 (ID: ec9a179b-7fc0-4af6-adce-d80cfdafcbe5)**
Soru Kökü: Multipl myelom vakalarında görülen tekil mandibular litik bir lezyonun radyolojik olarak aşağıda verilen patolojilerden hangisine birebir benzemesi nedeniyle, bu iki lezyonun özellikle genç/yaşlı ayrımı yapılmadan sadece filme bakılarak ayrılması oldukça güçtür?
Doğru Şık (A): Basit (Travmatik) kemik kisti
Açıklama: Multipl myelomda mandibulada oluşan soliter, kortikalsiz radyolüsent litik kitleler, radyografik şekil itibariyle basit (travmatik) kemik kistine benzeyebilir. Ancak basit kemik kistleri çoğunlukla intakt bir kortekse sahip, diş kökleri arasında tarak (scalloped) şeklinde uzanan ve çok daha genç yaş grubunda görülen lezyonlardır.

---

### ÇİFT 113 (Benzerlik: 0.70)

**Soru 1 (ID: 655e30e2-825e-4958-8acc-f10ec4f77b18)**
Soru Kökü: Sekiz yaşında erkek çocuk, alt çenesinde birkaç hafta içinde olağanüstü hızla gelişen fasiyal deformite ve diş eti büyümesi şikayetiyle getirilmiştir. Panoramik grafide, komşu sürmüş dişleri yerinden etmiş ve dişlere alveoler kemik içinde yüzer gibi bir görünüm kazandırmış balon şeklinde çok hızlı büyüyen litik bir alan mevcuttur. Biyopside yıldızlı gökyüzü manzarası izlenen bu malignitede en güçlü tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Burkitt Lenfoma
Açıklama: 8 yaş civarında çenede (özellikle Afrika formunda) ekstrem derecede hızlı büyüme, şiddetli alveoler yıkıma bağlı 'yüzer dişler' görünümü ve nöral parestezi bulguları Burkitt Lenfoma'nın spesifik manifestosudur. Tümörün mitoz indeksinin çok yüksek olması balon şeklinde genişlemeye ve dişlerin destekten yoksun kalarak sallanmasına sebep olur. Nöroblastom da çocukluk çağı tümörü olsa da dişlerin folikülünü tamamen yüzdürecek bu özel kortikal incelme paterni öncelikle Burkitt lehinedir.

**Soru 2 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

---

### ÇİFT 114 (Benzerlik: 0.70)

**Soru 1 (ID: dee965f8-d2ae-4f0a-9f18-57a35cb6fc59)**
Soru Kökü: Metastatik tümörlerin erken dönem radyolojik bulguları, rutin diş hekimliği muayenelerinde periapikal lezyonlarla karıştırılabilir. Bir lezyonun inflamatuar bir apikal periodontitis yerine, periodontal aralığa yayılan malign bir metastaz olduğunu düşündüren radyolojik ayırıcı özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Periodontal aralık genişlemesinin kök boyunca asimetrik ve düzensiz olması
Açıklama: İnflamatuar kaynaklı periapikal lezyonlar, kural olarak kök apeksinin merkezinde simetrik ve lokalize bir periodontal ligament genişlemesi şeklinde başlar. Malign tümörler ve özellikle metastazlar ise kök boyunca uzanan asimetrik, düzensiz ve geniş çaplı periodontal aralık tahribatı yaratırlar. Metastatik tümörlerde kural olarak lamina dura bölgesel olarak kalınlaşmaz, tam tersine eriyerek kaybolur.

**Soru 2 (ID: ea4c4698-39b9-4740-87c2-c328a5d2d6f7)**
Soru Kökü: Dental kistlerin malign transformasyonu ile sekonder enfekte kistlerin radyolojik ayırıcı tanısında, aşağıdakilerden hangisi karsinomatöz değişimi destekleyen en güçlü bulgudur?
Doğru Şık (C): Kortikal sınırın kaybolması ve kemikte sklerotik reaksiyonun bulunmaması
Açıklama: Dental kistler enfekte olduğunda inflamasyonla birlikte kemikte periferal sklerotik bir yanıt meydana gelir ve sınırlarını korumaya çalışır. Ancak kist epiteli skuamöz hücreli karsinoma dönüştüğünde, bu sklerozis tabakası oluşmaz ve lezyon düzensiz sınırlarla kemik içinde hızla yayılır. Diğer şıklardaki kalsifikasyon veya skleroz bulguları benign veya inflamatuar doğayı işaret eder.

---

### ÇİFT 115 (Benzerlik: 0.70)

**Soru 1 (ID: b80b326c-3286-43e1-a2b4-5dadea432c10)**
Soru Kökü: Bir diş hekimi radyografik değerlendirmede çene kemiğinde tekil bir radyoopak odak tespit etmiş ve hastanın anamnezindeki eski travma öyküsüne dayanarak ayırıcı tanıda 'Yabancı cisimler' (metal veya materyal) olabileceğini düşünmüştür. Sınıflandırma tablolarına göre aşağıdaki lezyonlardan hangisi bu şüphe ile aynı 'soliter radyopasiteler' grubunda yer **almaz**?
Doğru Şık (A): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom histopatolojik olarak dev hücreler içeren litik bir lezyon olup, radyografik tablolarda 'multiloküler radyolüsensiler' sınıfında konumlandırılır. Yabancı cisimler, idiopatik osteoskleroz, matür periapikal semental displazi, ekzostoz ve kalmış kökler ise spesifik lokalizasyonda kalsifiye/metalik görünüm vererek soliter radyopasiteler arasında bulunur. Litik olan granülom radyoopak tanıların listesinden çıkartılır.

**Soru 2 (ID: dd6ad819-17a5-40a0-b22e-e9d6f3cdfa39)**
Soru Kökü: Diş çekimi sonrası alveol boşluğunun osteojenik sklerozla tamamen anarmal şekilde dolması olan 'Soket sklerozu', radyolojik olarak çevre kemikten kolayca ayırt edilebilir. Standart çene lezyonları tablolarında bu durum, aşağıdaki patolojilerin hangisiyle **aynı** sınıflama başlığı (Multipl Radyopasiteler) altında bulunur?
Doğru Şık (C): Multipl osteoma (Gardner sendromu)
Açıklama: Radyolojik sınıflandırma tablosunda 'Soket sklerozu'; multipl osteoma (Gardner), Paget hastalığı ve Florid osseöz displazi gibi patolojilerle birlikte 'Multipl Radyopasiteler' ana başlığı altında listelenmiştir. Hipersementoz, kondanse osteitis ve kalmış kökler ise lokal tekil etkilenim yaparak soliter radyopasite listesine alınırlar. Sendromik yaygın skleroz formasyonları multipl karakter gösterir.

---

### ÇİFT 116 (Benzerlik: 0.70)

**Soru 1 (ID: 996c6aa8-1bf1-4b61-af47-26d2d0fede1e)**
Soru Kökü: Aşağıdaki malign lezyonlardan hangisinin, bilinen bir primer tümör odağı ekarte edilene kadar çenede görülen primer intraosseöz skuamöz hücreli karsinomdan radyolojik olarak ayırt edilmesi en zordur?
Doğru Şık (B): Santral mukoepidermoid karsinom
Açıklama: Santral mukoepidermoid karsinom, çene kemiklerinde primer intraosseöz skuamöz hücreli karsinomdan hem radyolojik hem de klinik olarak sıklıkla ayırt edilemez ve kesin tanı için histopatolojik inceleme şarttır. Diğer seçeneklerdeki lezyonlar kalsifikasyon paternleri, bal peteği görünümleri veya spesifik periost reaksiyonları ile ayrılabilir. Santral CMEC ve primer intraosseöz SCC sıklıkla kist benzeri başlangıç ve benzer litik özellikler gösterir.

**Soru 2 (ID: b0543568-33aa-4ae0-9ce6-3a6c3e1b21ff)**
Soru Kökü: Çene kemiklerine metastaz yapan malignitelerin radyolojik incelenmesinde, kemik rezorpsiyonundan ziyade komşu kemikte sklerotik formasyonu uyararak radyopak patern oluşturma eğilimi en yüksek olan iki primer tümör odağı aşağıdakilerden hangisidir?
Doğru Şık (A): Meme ve Prostat
Açıklama: Metastatik tümörler çenelerde genellikle litik (radyolüsent) destrüksiyon yapsalar da, prostat ve meme karsinomu metastazları osteoblastik aktiviteyi uyararak sklerotik/radyopak bir patern oluşturmalarıyla karakterizedir. Diğer primer odaklar (akciğer, tiroid, böbrek) ağırlıklı olarak osteoklastik yıkım ve net bir radyolüsensi ile karşımıza çıkar.

---

### ÇİFT 117 (Benzerlik: 0.70)

**Soru 1 (ID: 201d94a5-6ea9-42cd-b789-b8130233673b)**
Soru Kökü: Mandibula posterior bölgede kötü kokulu akıntı ve ağrılı şişlik ile başvuran hastanın radyografisinde güve yeniği tarzında sınırları belirsiz radyolüsent alanlar saptanmıştır. Lezyon çevresinde reaktif kemik formasyonunu gösteren skleroz ve kortekse paralel uzanan periosteal reaksiyon mevcuttur. Multipl myelom ve Ewing sarkomu ayırıcı tanısında, bu radyolojik spesifikasyonlar öncelikli olarak aşağıdakilerden hangisini destekler?
Doğru Şık (D): Osteomyelit
Açıklama: Osteomyelitin karakteristik radyografik belirteçleri arasında reaktif enflamasyon kaynaklı çevresel skleroz, sekestr formasyonu ve kortekse paralel uzanan laminar periosteal reaksiyon yer alır. Ewing sarkomu radyolüsent güve yeniği görünümü yapsa da güneş ışını tarzı dik periost reaksiyonuna yatkındır. Multipl myelom ise tamamen osteolitik (zımba deliği) bir süreçtir ve enflamatuar bir reaksiyon olmadığı için çevresel skleroz veya periosteal yeni kemik üretmez.

**Soru 2 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

---

### ÇİFT 118 (Benzerlik: 0.70)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: ec9a179b-7fc0-4af6-adce-d80cfdafcbe5)**
Soru Kökü: Multipl myelom vakalarında görülen tekil mandibular litik bir lezyonun radyolojik olarak aşağıda verilen patolojilerden hangisine birebir benzemesi nedeniyle, bu iki lezyonun özellikle genç/yaşlı ayrımı yapılmadan sadece filme bakılarak ayrılması oldukça güçtür?
Doğru Şık (A): Basit (Travmatik) kemik kisti
Açıklama: Multipl myelomda mandibulada oluşan soliter, kortikalsiz radyolüsent litik kitleler, radyografik şekil itibariyle basit (travmatik) kemik kistine benzeyebilir. Ancak basit kemik kistleri çoğunlukla intakt bir kortekse sahip, diş kökleri arasında tarak (scalloped) şeklinde uzanan ve çok daha genç yaş grubunda görülen lezyonlardır.

---

### ÇİFT 119 (Benzerlik: 0.70)

**Soru 1 (ID: 28ac2248-7fa8-43f6-bb4f-d29b8b0d8ca6)**
Soru Kökü: Ağız tabanında saptanan ve dişlerde mobiliteye neden olan yumuşak doku kitlesinin radyolojik incelemesinde alveoler kemikte destrüksiyon saptanmıştır. Bu lezyonun inflamatuar kökenli bir osteomyelit mi yoksa yumuşak dokudan köken alan skuamöz hücreli karsinom (SCC) mu olduğunun ayrımında aşağıdaki radyolojik bulgulardan hangisi SCC lehine en güçlü kanıttır?
Doğru Şık (A): Kortekste periost reaksiyonunun izlenmemesi
Açıklama: Osteomyelit genellikle enfeksiyona sekonder olarak kemikte periost reaksiyonunu uyarırken, yumuşak dokudan köken alan SCC'nin kemik invazyonunda periost reaksiyonu izlenmez. Sekestr oluşumu ve periferik sklerotik yanıt inflamatuar sürecin göstergesi olup malignitelerden ziyade osteomyelit lehine bulgulardır. Skuamöz hücreli karsinomda kemik desteğinden yoksun kalan dişlerin etrafında lamina dura kaybı ve alveoler sokette belirgin genişleme meydana gelir.

**Soru 2 (ID: ea4c4698-39b9-4740-87c2-c328a5d2d6f7)**
Soru Kökü: Dental kistlerin malign transformasyonu ile sekonder enfekte kistlerin radyolojik ayırıcı tanısında, aşağıdakilerden hangisi karsinomatöz değişimi destekleyen en güçlü bulgudur?
Doğru Şık (C): Kortikal sınırın kaybolması ve kemikte sklerotik reaksiyonun bulunmaması
Açıklama: Dental kistler enfekte olduğunda inflamasyonla birlikte kemikte periferal sklerotik bir yanıt meydana gelir ve sınırlarını korumaya çalışır. Ancak kist epiteli skuamöz hücreli karsinoma dönüştüğünde, bu sklerozis tabakası oluşmaz ve lezyon düzensiz sınırlarla kemik içinde hızla yayılır. Diğer şıklardaki kalsifikasyon veya skleroz bulguları benign veya inflamatuar doğayı işaret eder.

---

### ÇİFT 120 (Benzerlik: 0.70)

**Soru 1 (ID: 830db24a-0573-4eac-8ff6-f4aeabe560dd)**
Soru Kökü: Radyolojik incelemede tekil, izole ve sınırları belirgin 'soliter radyopasite' saptanan bir vakada, aşağıdaki lezyonlardan hangisi standart ayırıcı tanı listesinde yer **almaz**?
Doğru Şık (E): Florid osseoz displazi
Açıklama: Florid osseöz displazi, kemik metabolizmasını yaygın etkileyen ve radyografik olarak multipl veya generalize radyopasiteler şeklinde izlenen bir patolojidir. Buna karşın enostoz, kondanse osteitis, hipersementoz ve kalmış kökler çenelerde fokal, tekil odak formunda gelişen karakteristik soliter radyopasitelerdir. Generalize kemik yıkım/yapım tabloları soliter lezyonlar kategorisinden dışlanmalıdır.

**Soru 2 (ID: 9a880e78-8260-432e-b34c-cc0296dc6ace)**
Soru Kökü: Çene grafilerinde birden fazla bölgede yaygın (multipl) radyopak odakların saptanması, sistemik veya sendromik hastalıkların radyolojik habercisi olabilir. Aşağıdaki patolojilerden hangisi standart klinik sınıflandırmalarda 'multipl radyopasite' tablosuna neden olan hastalıklardan biri **değildir**?
Doğru Şık (D): Enostoz
Açıklama: Enostoz (kemik adacığı), çene kemiği medullasında gelişen yoğun kortikal kemik kitlesidir ve karakteristik olarak soliter radyopasite formunda izlenir. Paget hastalığının sklerotik evresi, süpernumerer dişler, Gardner sendromuna bağlı multipl osteomalar ve matür periapikal semental displazi ise hastada multipl radyopasite tablosuna neden olur. Sınıflandırmada multipl gelişim göstermeyen yapı enostozdur.

---

### ÇİFT 121 (Benzerlik: 0.70)

**Soru 1 (ID: 996c6aa8-1bf1-4b61-af47-26d2d0fede1e)**
Soru Kökü: Aşağıdaki malign lezyonlardan hangisinin, bilinen bir primer tümör odağı ekarte edilene kadar çenede görülen primer intraosseöz skuamöz hücreli karsinomdan radyolojik olarak ayırt edilmesi en zordur?
Doğru Şık (B): Santral mukoepidermoid karsinom
Açıklama: Santral mukoepidermoid karsinom, çene kemiklerinde primer intraosseöz skuamöz hücreli karsinomdan hem radyolojik hem de klinik olarak sıklıkla ayırt edilemez ve kesin tanı için histopatolojik inceleme şarttır. Diğer seçeneklerdeki lezyonlar kalsifikasyon paternleri, bal peteği görünümleri veya spesifik periost reaksiyonları ile ayrılabilir. Santral CMEC ve primer intraosseöz SCC sıklıkla kist benzeri başlangıç ve benzer litik özellikler gösterir.

**Soru 2 (ID: e74ce30e-7dc1-41f6-9c11-cce282e819a8)**
Soru Kökü: 55 yaşında prostat adenokarsinomu öyküsü olan erkek hastada alt çenede uyuşukluk şikayeti başlamıştır. Mandibulanın görüntülenmesinde metastaz ile primer çene içi skuamöz hücreli karsinomu birbirinden ayırmak amacıyla lezyonun radyolojik morfolojisi incelenmektedir. Lezyonun metastaz olduğunu destekleyen temel lokasyon bulgusu aşağıdakilerden hangisidir?
Doğru Şık (B): Lezyonun merkez üssünün derin kemik medullası içinde olması ve sınırlarının oval seyretmesi
Açıklama: Metastatik tümörler hematojen yolla geldikleri için merkez üsleri (epicenter) genellikle mandibuladaki derin medüller kemiğin içindedir ve dairesel/oval büyürler. Primer intraosseöz veya gingivadan yayılan SCC'lerin merkez üssü ise kemik yüzeyine (alveoler kret) daha yakındır ve yüzeyel 'kurabiye ısırığı' tarzı destrüksiyonla içe doğru ilerler.

---

### ÇİFT 122 (Benzerlik: 0.70)

**Soru 1 (ID: a62c8e2b-c9e2-4e19-b091-db782b13eb75)**
Soru Kökü: 42 yaşında kadın hasta, radyografik inceleme sırasında sağ alt birinci büyük azı dişinin apikal bölgesinde iyi sınırlı tek bir radyopak alan saptanması üzerine kliniğe refere ediliyor. Diş vital ve hastanın herhangi bir şikayeti bulunmamaktadır. Bu hastada saptanan 'soliter radyopasite'nin ayırıcı tanısında aşağıdakilerden hangisinin yer alması **en az olasıdır**?
Doğru Şık (B): Soket sklerozu
Açıklama: Radyografik ayırıcı tanı listelerine göre matür periapikal semental displazi, idiopatik osteoskleroz, yabancı cisimler ve ekzostoz tipik olarak soliter radyopasite ayırıcı tanısında yer alır. Soket sklerozu ise boş çekim soketinin anormal kortikal yoğunlukta dolmasıyla oluşur ve tipik olarak 'multipl radyopasiteler' başlığı altında standardize edilmiştir. Dolayısıyla hastadaki tekil ve izole alan için soket sklerozu patogenezi öncelikle düşünülmez.

**Soru 2 (ID: f973e179-2294-4e07-8e3e-d7d5fec1b8ed)**
Soru Kökü: 35 yaşındaki hastanın alt posterior bölgesinde sürmemiş bir 20 yaş dişi ve bu dişi koronalinden çevreleyen kalsifikasyon (radyopasite) bulgusu saptanmayan kistik bir lezyon tespit edilmiştir. Sınıflandırma algoritmalarına dayanarak cerrahi planlamada aşağıdaki 'kalsifikasyon içermeyen' tanılardan hangisinin konulma ihtimali **en fazladır**?
Doğru Şık (C): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom odontojenik epitel ve ektomezenkim komponentleri olan ve mineralize yapı üretmeyen bir neoplazmdır, bu sebeple 'kalsifikasyon içermeyen perikoronal radyolüsensiler' listesindedir. AOT, ameloblastik fibro-odontom, kalsifiye odontojenik kist ve ameloblastik odontom ise neoplastik matrisleri (mine, dentin vb.) üzerinden kalsifiye odaklar üretip radyopak kısımlar barındırırlar. Salt radyolüsent patolojilerde mineralizan yapılar ekarte edilir.

---

### ÇİFT 123 (Benzerlik: 0.70)

**Soru 1 (ID: 9581cf95-9a42-45d5-9bb1-3d9e43419af5)**
Soru Kökü: Panoramik radyografisinde çene kemiklerinde multiloküler (sabun köpüğü / bal peteği) görünüm saptanan bir hastada, Tablo 12 radyolojik sınıflamasına göre aşağıdaki lezyonlardan hangisi ayırıcı tanıda öncelikle **düşünülmez**?
Doğru Şık (E): Fibröz displazi
Açıklama: Fibröz displazi klasik olarak 'buzlu cam' görünümüyle karakterize mikst radyolüsent-radyopak veya homojen bulanık lezyonlar grubundadır ve multiloküler radyolüsensiler sınıflandırmasında yer almaz. Ameloblastoma, santral dev hücreli granülom, odontojenik mikzom ve odontojenik keratokist (ayrıca anevrizmal kemik kisti, cherubism ve hemanjiom) çenelerde multiloküler radyolüsensi yapan temel patolojilerdir.

**Soru 2 (ID: b80b326c-3286-43e1-a2b4-5dadea432c10)**
Soru Kökü: Bir diş hekimi radyografik değerlendirmede çene kemiğinde tekil bir radyoopak odak tespit etmiş ve hastanın anamnezindeki eski travma öyküsüne dayanarak ayırıcı tanıda 'Yabancı cisimler' (metal veya materyal) olabileceğini düşünmüştür. Sınıflandırma tablolarına göre aşağıdaki lezyonlardan hangisi bu şüphe ile aynı 'soliter radyopasiteler' grubunda yer **almaz**?
Doğru Şık (A): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom histopatolojik olarak dev hücreler içeren litik bir lezyon olup, radyografik tablolarda 'multiloküler radyolüsensiler' sınıfında konumlandırılır. Yabancı cisimler, idiopatik osteoskleroz, matür periapikal semental displazi, ekzostoz ve kalmış kökler ise spesifik lokalizasyonda kalsifiye/metalik görünüm vererek soliter radyopasiteler arasında bulunur. Litik olan granülom radyoopak tanıların listesinden çıkartılır.

---

### ÇİFT 124 (Benzerlik: 0.70)

**Soru 1 (ID: 1ab0df52-4cef-4544-b34c-bedaefdc2548)**
Soru Kökü: Dental pratikte rutin alınan panoramik radyografilerde kemik yapısının sistemik bir problemden ötürü total olarak değiştiği 'generalize radyopasite' izlenebilir. Aşağıdaki patolojilerden hangisi tüm çene kemiklerinde generalize (yaygın) radyopasiteye neden olan sistemik hastalıklardan biri **değildir**?
Doğru Şık (E): Cherubism
Açıklama: Osteopetrozis (kemik yoğunluğunun aşırı artması), Paget hastalığı (anormal kemik döngüsüyle pamuk yığını), Florid Osseöz Displazi (yaygın semento-osseöz kitleler) ve hiperparatiroidizmin bazı sklerotik safhaları çenelerde generalize radyopasite oluşturur. Cherubism (familyal fibröz displazi varyantı) ise çene açılarında bilateral, çok odacıklı (multiloküler) radyolüsent sabun köpüğü görünümü yapar; radyoopak bir hastalık değildir.

**Soru 2 (ID: b6509999-8c1d-4c5d-9688-6f5db48e6863)**
Soru Kökü: Aşağıdaki sistemik kemik hastalıklarından hangisi, multipl myelomun çenelerde yaptığı litik görünümlere (zımba deliği osteolizleri) radyolojik olarak birebir benzeyen kemik defektleri oluşturarak 'metabolik hastalık' ayırıcı tanısına girer?
Doğru Şık (B): Gaucher hastalığı
Açıklama: Gaucher hastalığı, lizozomal depo hastalığıdır ve sfingolipidlerin kemik iliğinde makrofajlar içinde birikimi sonucu litik kemik lezyonları üretir. Bu durum, radyolojik olarak kemiklerde zımba deliği tarzı defektler oluşturan multipl myelom ve metastazlara benzer görünüm sunar. Paget ve osteopetrozis ise radyopak (sklerotik) dominanslıdır.

---

### ÇİFT 125 (Benzerlik: 0.70)

**Soru 1 (ID: 467b96b3-98e7-4ed9-aeea-c5d55cb071ca)**
Soru Kökü: Altmış sekiz yaşında erkek hasta, mandibula molar bölgede patolojik kırık ve alt dudakta parestezi şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide belirsiz sınırlı radyolüsent dekstrüksiyon alanı izleniyor. Primer kemikten köken alan (intraosseöz) skuamöz hücreli karsinom şüphesi olan bu vakada, tanıyı destekleyecek en kritik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Mandibular kanalın korteks devamlılığında kayıp
Açıklama: Primer intraosseöz SCC'de neoplastik infiltrasyon kemiği dekstrükte ederken, mandibular kanalın kortikal sınırlarında devamlılık kaybına yol açar. Diş kök rezorpsiyonu SCC'de oldukça nadirdir, lezyonlar genellikle dişlerin havada asılı gibi görünmesine neden olur. Sekestr oluşumu ise osteomyelit lehine bulgudur.

**Soru 2 (ID: 996c6aa8-1bf1-4b61-af47-26d2d0fede1e)**
Soru Kökü: Aşağıdaki malign lezyonlardan hangisinin, bilinen bir primer tümör odağı ekarte edilene kadar çenede görülen primer intraosseöz skuamöz hücreli karsinomdan radyolojik olarak ayırt edilmesi en zordur?
Doğru Şık (B): Santral mukoepidermoid karsinom
Açıklama: Santral mukoepidermoid karsinom, çene kemiklerinde primer intraosseöz skuamöz hücreli karsinomdan hem radyolojik hem de klinik olarak sıklıkla ayırt edilemez ve kesin tanı için histopatolojik inceleme şarttır. Diğer seçeneklerdeki lezyonlar kalsifikasyon paternleri, bal peteği görünümleri veya spesifik periost reaksiyonları ile ayrılabilir. Santral CMEC ve primer intraosseöz SCC sıklıkla kist benzeri başlangıç ve benzer litik özellikler gösterir.

---

### ÇİFT 126 (Benzerlik: 0.70)

**Soru 1 (ID: 74c1076e-0768-4714-9dd8-ea9f2fb0e8a6)**
Soru Kökü: Ağız içi muayenede yaygın, diş taşı veya dental plak ile uyumsuz ve hızla büyüyüp diş kuronlarını örten gingival hiperplazi saptanan bir hastada lösemi şüphesi mevcuttur. Aşağıdaki lösemi tiplerinden hangisi, bu spesifik oral bulguyu en sık veren türdür?
Doğru Şık (C): Akut myeloid lösemi
Açıklama: Bütün lösemi tiplerinde gingival hiperplazi ve kanama görülebilmesine rağmen, neoplastik lökositlerin gingival dokuya masif infiltrasyonuna bağlı ortaya çıkan hızla büyüyen, kanamalı, plakla ilişkisiz spesifik gingival hiperplazi en yaygın olarak Akut Myeloid Lösemi (AML) olgularında saptanır.

**Soru 2 (ID: b65959f5-d85c-4148-9559-62ec52b9e9bf)**
Soru Kökü: On iki yaşında bir kız hastanın ebeveynleri, çocuklarının diş etlerinde son 1 haftada aniden gelişen aşırı büyüme ve kendiliğinden kanama şikayetiyle başvuruyor. Ağız içi muayenede dental plak veya diş taşı saptanmıyor ancak yapışık diş etinin dişlerin kuronunu kısmen örttüğü gözleniyor. Bu klinik tablo aşağıdaki sistemik patolojilerden öncelikle hangisini akla getirmelidir?
Doğru Şık (A): Akut myeloid lösemi
Açıklama: Plakla ilişkisiz, spontan kanamalı ve hızla gelişen şiddetli gingival hiperplazi lösemik hücre infiltrasyonunun (lösemik kloroma) karakteristik bulgusudur. Bu tablo bütün lösemilerde görülebilmekle birlikte en sık ve en agresif formda Akut Myeloid Lösemide (AML) ortaya çıkar.

---

### ÇİFT 127 (Benzerlik: 0.70)

**Soru 1 (ID: 28ac2248-7fa8-43f6-bb4f-d29b8b0d8ca6)**
Soru Kökü: Ağız tabanında saptanan ve dişlerde mobiliteye neden olan yumuşak doku kitlesinin radyolojik incelemesinde alveoler kemikte destrüksiyon saptanmıştır. Bu lezyonun inflamatuar kökenli bir osteomyelit mi yoksa yumuşak dokudan köken alan skuamöz hücreli karsinom (SCC) mu olduğunun ayrımında aşağıdaki radyolojik bulgulardan hangisi SCC lehine en güçlü kanıttır?
Doğru Şık (A): Kortekste periost reaksiyonunun izlenmemesi
Açıklama: Osteomyelit genellikle enfeksiyona sekonder olarak kemikte periost reaksiyonunu uyarırken, yumuşak dokudan köken alan SCC'nin kemik invazyonunda periost reaksiyonu izlenmez. Sekestr oluşumu ve periferik sklerotik yanıt inflamatuar sürecin göstergesi olup malignitelerden ziyade osteomyelit lehine bulgulardır. Skuamöz hücreli karsinomda kemik desteğinden yoksun kalan dişlerin etrafında lamina dura kaybı ve alveoler sokette belirgin genişleme meydana gelir.

**Soru 2 (ID: 962d0790-5a78-4f1b-b28f-9c89fe95ef98)**
Soru Kökü: 15 yaşındaki erkek hastada mandibulada yavaş genişleyen ağrılı bir şişlik ve dişlerde oklüzal yönde yer değişikliği saptanmıştır. Başlangıçta Burkitt lenfoma şüphesiyle değerlendirilen hastada ayırıcı tanıda kronik enfeksiyöz patolojiler de düşünülmektedir. Bu hastada osteomyelit tanısını destekleyecek en klinik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laminar formda periosteal reaksiyon izlenmesi
Açıklama: Osteomyelit, yavaş ilerleyen enflamatuar doğası gereği reaktif kemik oluşumunu uyararak mandibular kortekse paralel laminar (soğan zarı) periosteal reaksiyona neden olur. Burkitt lenfoma ve osteosarkom gibi malignitelerde ise kortekse dik, güneş ışını veya spiküler formda agresif periost reaksiyonu görülür. Çevresel skleroz ve laminar reaksiyonun varlığı, lezyonun neoplastik bir hücumdan ziyade enfeksiyöz/reaktif (osteomyelit) tabanda geliştiğini kanıtlar.

---

### ÇİFT 128 (Benzerlik: 0.70)

**Soru 1 (ID: 72f7c682-683b-47f2-9211-0fbcdd24d7fd)**
Soru Kökü: Elli beş yaşında kadın hasta, sağ alt çenesinde ilerleyen uyuşukluk, nedeni belirsiz diş ağrıları ve son zamanlarda çekilen dişinin soketinin iyileşmemesi şikayetiyle kliniğe başvurmuştur. Radyolojik muayenede, mandibula posteriorda inferior kortikal sınırda erozyon ve rezidüel kemik içinde dairesel merkez üslü destrüksiyon izlenmiştir. Anamnezinde 5 yıl önce meme kanseri tedavisi gören bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Metastatik karsinom
Açıklama: Bilinen primer meme kanseri öyküsü, alt dudakta uyuşukluk (trigeminal 3. dal parestezisi), çekim yarasının iyileşmemesi ve inferior korteks erozyonu metastatik lezyonların klasik kliniğidir. Merkez üssünün çene kemiğinin ortasında yer alıp dışa doğru destrükte etmesi primer tümörlerden ziyade kan yoluyla gelen metastazın kemik içi yerleşimine işaret eder. Fibröz displazi ve ameloblastomda genellikle sinirsel his kayıpları ve çekim soketi iyileşmeme problemleri ön planda değildir.

**Soru 2 (ID: f32f5efd-92ac-4252-8525-710d2dd2b08a)**
Soru Kökü: 42 yaşında kadın hasta, sağ mandibula posterior bölgede ağrılı şişlik ve alt dudakta uyuşukluk şikayetiyle başvuruyor. Alınan radyografide, sürmemiş bir 20 yaş dişinin kuronunu çevreleyen, düzensiz sınırlı ve kortikal erozyona neden olmuş multiloküler bir radyolüsensi izleniyor. Bu klinik tabloda dentijeröz kist tanısını uzaklaştırıp maligniteyi (özellikle santral mukoepidermoid karsinom) destekleyen **en az olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Sürmemiş bir dişle ilişkili olması
Açıklama: Santral mukoepidermoid karsinom olgularının yaklaşık %50'si sürmemiş bir dişle ilişkilidir, tıpkı bir dentijeröz kist gibi. Bu nedenle sürmemiş dişle ilişkili olması, maligniteyi destekleyen veya kistten ayıran bir özellik değildir, ortak bulgudur. Ancak ağrı, parestezi ve kortikal erozyon dentijeröz kistte beklenmeyen, maligniteye (CMEC) işaret eden kritik bulgulardır.

---

### ÇİFT 129 (Benzerlik: 0.70)

**Soru 1 (ID: 40d5a23e-f983-4eb9-add9-e3b0ed67d75b)**
Soru Kökü: Kırk beş yaşında kadın hasta, anterior mandibulada kortikal ekspansiyon yapan multiloküler (sabun köpüğü) radyolüsent bir kitle şikayetiyle başvurmuştur. Radyolojik ayırıcı tanıda ameloblastoma ile santral dev hücreli granülom arasında kalınmıştır. Aşağıdaki bulgulardan hangisi teşhisin santral dev hücreli granülom lehine kaymasını sağlar?
Doğru Şık (D): Lezyonun daimi ikinci molar dişin anteriorunda lokalize olması
Açıklama: Santral dev hücreli granülomlar tipik olarak daha genç hastalarda görülür ve lezyonun epikentri hemen her zaman daimi 2. molar dişin anteriorunda yer alır. Ameloblastoma ise sıklıkla posterior mandibula ve ramusu tercih eder. Tenis raketi görünümü odontojenik mikzomanın, kök rezorpsiyonu ise ameloblastomanın ayırıcı karakteristiklerindendir.

**Soru 2 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

---

### ÇİFT 130 (Benzerlik: 0.70)

**Soru 1 (ID: 1ab0df52-4cef-4544-b34c-bedaefdc2548)**
Soru Kökü: Dental pratikte rutin alınan panoramik radyografilerde kemik yapısının sistemik bir problemden ötürü total olarak değiştiği 'generalize radyopasite' izlenebilir. Aşağıdaki patolojilerden hangisi tüm çene kemiklerinde generalize (yaygın) radyopasiteye neden olan sistemik hastalıklardan biri **değildir**?
Doğru Şık (E): Cherubism
Açıklama: Osteopetrozis (kemik yoğunluğunun aşırı artması), Paget hastalığı (anormal kemik döngüsüyle pamuk yığını), Florid Osseöz Displazi (yaygın semento-osseöz kitleler) ve hiperparatiroidizmin bazı sklerotik safhaları çenelerde generalize radyopasite oluşturur. Cherubism (familyal fibröz displazi varyantı) ise çene açılarında bilateral, çok odacıklı (multiloküler) radyolüsent sabun köpüğü görünümü yapar; radyoopak bir hastalık değildir.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

### ÇİFT 131 (Benzerlik: 0.70)

**Soru 1 (ID: 1ab0df52-4cef-4544-b34c-bedaefdc2548)**
Soru Kökü: Dental pratikte rutin alınan panoramik radyografilerde kemik yapısının sistemik bir problemden ötürü total olarak değiştiği 'generalize radyopasite' izlenebilir. Aşağıdaki patolojilerden hangisi tüm çene kemiklerinde generalize (yaygın) radyopasiteye neden olan sistemik hastalıklardan biri **değildir**?
Doğru Şık (E): Cherubism
Açıklama: Osteopetrozis (kemik yoğunluğunun aşırı artması), Paget hastalığı (anormal kemik döngüsüyle pamuk yığını), Florid Osseöz Displazi (yaygın semento-osseöz kitleler) ve hiperparatiroidizmin bazı sklerotik safhaları çenelerde generalize radyopasite oluşturur. Cherubism (familyal fibröz displazi varyantı) ise çene açılarında bilateral, çok odacıklı (multiloküler) radyolüsent sabun köpüğü görünümü yapar; radyoopak bir hastalık değildir.

**Soru 2 (ID: e3bff7c8-8228-4f34-8695-bebd5fe94b5f)**
Soru Kökü: Radyolojik sınıflama algoritmalarına göre; hem osteolitik ve osteoblastik fazların bir arada görülmesiyle 'mikst radyolüsent-radyopak lezyonlar', hem de iskelet sistemini diffüz olarak etkilemesiyle 'generalize radyopasiteler/sistemik hastalıklar' kategorisinde ortaklaşa yer alan kemik metabolizma bozukluğu aşağıdakilerden hangisidir?
Doğru Şık (B): Paget hastalığı
Açıklama: Paget hastalığı (Osteitis deformans), kemik döngüsünün ileri derecede düzensizleştiği sistemik bir kemik hastalığıdır. Hastalığın erken evreleri osteolitik, geç evreleri ise pamuk yumağı tarzında osteosklerotik (radyopak) olduğu için mikst lezyonlar grubunda listelenirken; kranial ve maksillofasiyal iskeleti yaygın şekilde tuttuğu için 'generalize radyopasiteler/sistemik hastalıklar' bölümünde de sınıflandırılır.

---

### ÇİFT 132 (Benzerlik: 0.70)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: 7e26aae5-8758-4321-a637-8589f23b3ab5)**
Soru Kökü: Çene lezyonlarının temel radyolojik ayırıcı tanı sınıflandırmasında çoklu kadran tutulumu ve spesifik semento-osseöz doku değişimi karakteristiği ile öne çıkan 'Florid osseöz displazi', aşağıdaki radyografik kategorilerin hangisinde kesinlikle **listelenmez**?
Doğru Şık (E): Multiloküler radyolüsensiler
Açıklama: Florid osseöz displazi, çenelerin üç veya dört kadranını yaygın şekilde tutan matürasyon tabanlı bir patolojidir. Gelişim aşamasına göre hem 'multipl radyopasiteler', hem 'mikst radyolüsent-radyopak lezyonlar', hem de yaygın etkileşimi nedeniyle 'generalize radyopasiteler' gruplarında yer alır. Ancak bu lezyonda internal kistik septasyonlar, kemik içi bal peteği/sabun köpüğü oluşumları görülmediği için 'multiloküler radyolüsensiler' grubunda yer alması imkansızdır.

---

### ÇİFT 133 (Benzerlik: 0.70)

**Soru 1 (ID: 7e26aae5-8758-4321-a637-8589f23b3ab5)**
Soru Kökü: Çene lezyonlarının temel radyolojik ayırıcı tanı sınıflandırmasında çoklu kadran tutulumu ve spesifik semento-osseöz doku değişimi karakteristiği ile öne çıkan 'Florid osseöz displazi', aşağıdaki radyografik kategorilerin hangisinde kesinlikle **listelenmez**?
Doğru Şık (E): Multiloküler radyolüsensiler
Açıklama: Florid osseöz displazi, çenelerin üç veya dört kadranını yaygın şekilde tutan matürasyon tabanlı bir patolojidir. Gelişim aşamasına göre hem 'multipl radyopasiteler', hem 'mikst radyolüsent-radyopak lezyonlar', hem de yaygın etkileşimi nedeniyle 'generalize radyopasiteler' gruplarında yer alır. Ancak bu lezyonda internal kistik septasyonlar, kemik içi bal peteği/sabun köpüğü oluşumları görülmediği için 'multiloküler radyolüsensiler' grubunda yer alması imkansızdır.

**Soru 2 (ID: ca6f5ef3-c69f-475d-89dd-d03512d8d42e)**
Soru Kökü: Dişlerin sement yapısını ve periapikal kemiği etkileyen osteojenik değişiklikler incelendiğinde; aşağıdakilerden hangisi radyografik tabloda 'soliter radyopasite' olarak izlenen lokalize bir patoloji **değildir**?
Doğru Şık (A): Florid osseoz displazi
Açıklama: Florid osseoz displazi (FOD), çenelerin sıklıkla üç veya dört kadranını etkileyen, yaygın kalsifik kitleler sunarak 'multipl radyopasite' veya 'generalize radyopasite' tablosu oluşturan kemik metabolizma hastalığıdır. Matür PSD, kondanse osteitis ve hipersementoz ise ilgili diş/dişler kök ucunda izole kalsifiye odaklar sunarak karakteristik soliter radyopasiteler sınıfına girerler. FOD generalize kemik davranışıdır.

---

### ÇİFT 134 (Benzerlik: 0.70)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: 3b94d8af-e072-4bfa-b3a7-4de64d740541)**
Soru Kökü: Sistemik tutulum gösteren bazı kemik patolojileri, davranış karakterleri nedeniyle radyografik olarak birden fazla ana başlık altında (örneğin hem multipl radyopasite hem mikst lezyon hem de generalize radyopasite olarak) çapraz sınıflandırılabilirler. Aşağıdaki hastalıklardan hangisi bu tarz çoklu listelenme özelliğine sahip patolojilerden biri **değildir**?
Doğru Şık (D): Ameloblastik odontom
Açıklama: Ameloblastik odontom radyolojik ve gelişimsel olarak sadece spesifik bir alanı ilgilendiren 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer alan izole bir odontojenik tümördür. Paget hastalığı, Florid osseoz displazi, Hiperparatiroidizm ve Fibröz displazi ise kemik remodeling sürecini tüm kadranlarda ve vücutta bozduklarından sınıflandırma tablolarında hem mikst lezyonlar hem de generalize radyopasiteler/sistemik hastalıklar listelerinde ortak konumlara sahiptir.

---

### ÇİFT 135 (Benzerlik: 0.70)

**Soru 1 (ID: 28ac2248-7fa8-43f6-bb4f-d29b8b0d8ca6)**
Soru Kökü: Ağız tabanında saptanan ve dişlerde mobiliteye neden olan yumuşak doku kitlesinin radyolojik incelemesinde alveoler kemikte destrüksiyon saptanmıştır. Bu lezyonun inflamatuar kökenli bir osteomyelit mi yoksa yumuşak dokudan köken alan skuamöz hücreli karsinom (SCC) mu olduğunun ayrımında aşağıdaki radyolojik bulgulardan hangisi SCC lehine en güçlü kanıttır?
Doğru Şık (A): Kortekste periost reaksiyonunun izlenmemesi
Açıklama: Osteomyelit genellikle enfeksiyona sekonder olarak kemikte periost reaksiyonunu uyarırken, yumuşak dokudan köken alan SCC'nin kemik invazyonunda periost reaksiyonu izlenmez. Sekestr oluşumu ve periferik sklerotik yanıt inflamatuar sürecin göstergesi olup malignitelerden ziyade osteomyelit lehine bulgulardır. Skuamöz hücreli karsinomda kemik desteğinden yoksun kalan dişlerin etrafında lamina dura kaybı ve alveoler sokette belirgin genişleme meydana gelir.

**Soru 2 (ID: 6b644b2e-4246-4867-ae58-33acdd0dbad7)**
Soru Kökü: Çene kemiğinde Ewing sarkomu tespit edilen bir hastanın radyolojik ayırıcı tanısında, her iki lezyon da litik dekstrüksiyon yapmasına rağmen, enfeksiyon kaynaklı osteomyeliti destekleyen ve Ewing sarkomunda görülmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Radyolüsent lezyon sınırları içerisinde sekestr görülmesi
Açıklama: Osteomyelit ve Ewing sarkomunun her ikisi de düzensiz radyolüsensi ve sekonder periost reaksiyonu yapabilir. Ancak osteomyelitte inflamasyona bağlı olarak beslenmesi bozulan ölü kemik adacıkları (sekestr) litik alan içerisinde radyoopak kitleler olarak izlenirken, Ewing sarkomunda nekrotik kemik sekestrasyonu görülmez.

---

### ÇİFT 136 (Benzerlik: 0.70)

**Soru 1 (ID: 9a880e78-8260-432e-b34c-cc0296dc6ace)**
Soru Kökü: Çene grafilerinde birden fazla bölgede yaygın (multipl) radyopak odakların saptanması, sistemik veya sendromik hastalıkların radyolojik habercisi olabilir. Aşağıdaki patolojilerden hangisi standart klinik sınıflandırmalarda 'multipl radyopasite' tablosuna neden olan hastalıklardan biri **değildir**?
Doğru Şık (D): Enostoz
Açıklama: Enostoz (kemik adacığı), çene kemiği medullasında gelişen yoğun kortikal kemik kitlesidir ve karakteristik olarak soliter radyopasite formunda izlenir. Paget hastalığının sklerotik evresi, süpernumerer dişler, Gardner sendromuna bağlı multipl osteomalar ve matür periapikal semental displazi ise hastada multipl radyopasite tablosuna neden olur. Sınıflandırmada multipl gelişim göstermeyen yapı enostozdur.

**Soru 2 (ID: dd6ad819-17a5-40a0-b22e-e9d6f3cdfa39)**
Soru Kökü: Diş çekimi sonrası alveol boşluğunun osteojenik sklerozla tamamen anarmal şekilde dolması olan 'Soket sklerozu', radyolojik olarak çevre kemikten kolayca ayırt edilebilir. Standart çene lezyonları tablolarında bu durum, aşağıdaki patolojilerin hangisiyle **aynı** sınıflama başlığı (Multipl Radyopasiteler) altında bulunur?
Doğru Şık (C): Multipl osteoma (Gardner sendromu)
Açıklama: Radyolojik sınıflandırma tablosunda 'Soket sklerozu'; multipl osteoma (Gardner), Paget hastalığı ve Florid osseöz displazi gibi patolojilerle birlikte 'Multipl Radyopasiteler' ana başlığı altında listelenmiştir. Hipersementoz, kondanse osteitis ve kalmış kökler ise lokal tekil etkilenim yaparak soliter radyopasite listesine alınırlar. Sendromik yaygın skleroz formasyonları multipl karakter gösterir.

---

### ÇİFT 137 (Benzerlik: 0.69)

**Soru 1 (ID: b6509999-8c1d-4c5d-9688-6f5db48e6863)**
Soru Kökü: Aşağıdaki sistemik kemik hastalıklarından hangisi, multipl myelomun çenelerde yaptığı litik görünümlere (zımba deliği osteolizleri) radyolojik olarak birebir benzeyen kemik defektleri oluşturarak 'metabolik hastalık' ayırıcı tanısına girer?
Doğru Şık (B): Gaucher hastalığı
Açıklama: Gaucher hastalığı, lizozomal depo hastalığıdır ve sfingolipidlerin kemik iliğinde makrofajlar içinde birikimi sonucu litik kemik lezyonları üretir. Bu durum, radyolojik olarak kemiklerde zımba deliği tarzı defektler oluşturan multipl myelom ve metastazlara benzer görünüm sunar. Paget ve osteopetrozis ise radyopak (sklerotik) dominanslıdır.

**Soru 2 (ID: ec9a179b-7fc0-4af6-adce-d80cfdafcbe5)**
Soru Kökü: Multipl myelom vakalarında görülen tekil mandibular litik bir lezyonun radyolojik olarak aşağıda verilen patolojilerden hangisine birebir benzemesi nedeniyle, bu iki lezyonun özellikle genç/yaşlı ayrımı yapılmadan sadece filme bakılarak ayrılması oldukça güçtür?
Doğru Şık (A): Basit (Travmatik) kemik kisti
Açıklama: Multipl myelomda mandibulada oluşan soliter, kortikalsiz radyolüsent litik kitleler, radyografik şekil itibariyle basit (travmatik) kemik kistine benzeyebilir. Ancak basit kemik kistleri çoğunlukla intakt bir kortekse sahip, diş kökleri arasında tarak (scalloped) şeklinde uzanan ve çok daha genç yaş grubunda görülen lezyonlardır.

---

### ÇİFT 138 (Benzerlik: 0.69)

**Soru 1 (ID: 61554eb0-3a40-4ae0-abef-396b482369ad)**
Soru Kökü: Sekiz yaşındaki hastada kronik otitis media öyküsü ile birlikte çenelerin radyografik incelemesinde alveolar kemikte masif destrüksiyon izleniyor. Multipl radyolüsent odaklar arasında dişlerin havada 'yüzüyormuş' gibi göründüğü belirleniyor. Diğer iskelet sistemi bölgelerinde de lezyonlar varsa, 'Multipl Radyolüsensiler' kategorisindeki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücre hastalığı (Histiositozis X)
Açıklama: Langerhans hücreli histiyositoz (Histiyositozis X), genç hastalarda multipl zımba deliği tarzı lezyonlar yapar ve geniş alveolar kemik destrüksiyonu neticesinde dişlerin havada yüzer gibi kalması bu hastalığın patognomoniğe yakın bir radyografik sunumudur.

**Soru 2 (ID: b6509999-8c1d-4c5d-9688-6f5db48e6863)**
Soru Kökü: Aşağıdaki sistemik kemik hastalıklarından hangisi, multipl myelomun çenelerde yaptığı litik görünümlere (zımba deliği osteolizleri) radyolojik olarak birebir benzeyen kemik defektleri oluşturarak 'metabolik hastalık' ayırıcı tanısına girer?
Doğru Şık (B): Gaucher hastalığı
Açıklama: Gaucher hastalığı, lizozomal depo hastalığıdır ve sfingolipidlerin kemik iliğinde makrofajlar içinde birikimi sonucu litik kemik lezyonları üretir. Bu durum, radyolojik olarak kemiklerde zımba deliği tarzı defektler oluşturan multipl myelom ve metastazlara benzer görünüm sunar. Paget ve osteopetrozis ise radyopak (sklerotik) dominanslıdır.

---

### ÇİFT 139 (Benzerlik: 0.69)

**Soru 1 (ID: 5a770f81-823f-4d41-be12-5c4bb2c2e11f)**
Soru Kökü: Aşağıdaki kistik veya tümöral lezyonlardan hangisi, Tablo 12'ye göre 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer **almaz**?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Tablo 12'deki sınıflandırmaya göre Ameloblastik fibrom, kalsifikasyon İÇERMEYEN perikoronal radyolüsensiler sınıfındadır (Dentijeröz kist, erüpsiyon kisti, OKK ve ameloblastoma ile birlikte). Seçeneklerdeki AOT, CEOT, COC ve Ameloblastik fibro-odontom ise internal yapısında kalsifiye/radyopak odak barındıran perikoronal lezyonlardır.

**Soru 2 (ID: 81c4145e-3841-4dde-a60e-42b487b11606)**
Soru Kökü: Radyolojik olarak 'mikst radyolüsent-radyopak lezyonlar' kategorisi, yapısında hem litik alanlar hem de reaktif/neoplastik kalsifikasyon matriksi barındıran hastalıkları kapsar. Aşağıdakilerden hangisi bu spesifik kategoride **sınıflandırılmaz**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma kendi yapısında herhangi bir kemik veya sement benzeri matriks (kalsifikasyon) üretmez; bu nedenle klasik olarak 'multiloküler radyolüsensiler' veya dişle ilişkiliyse kalsifikasyon içermeyen 'perikoronal radyolüsensiler' kategorisinde sınıflandırılır. Paget, osteosarkom, fibröz displazi ve sementifiye-ossifiye fibrom ise internal kalsifiye odaklara sahip oldukları için mikst lezyonlar grubundadır.

---

### ÇİFT 140 (Benzerlik: 0.69)

**Soru 1 (ID: 7e26aae5-8758-4321-a637-8589f23b3ab5)**
Soru Kökü: Çene lezyonlarının temel radyolojik ayırıcı tanı sınıflandırmasında çoklu kadran tutulumu ve spesifik semento-osseöz doku değişimi karakteristiği ile öne çıkan 'Florid osseöz displazi', aşağıdaki radyografik kategorilerin hangisinde kesinlikle **listelenmez**?
Doğru Şık (E): Multiloküler radyolüsensiler
Açıklama: Florid osseöz displazi, çenelerin üç veya dört kadranını yaygın şekilde tutan matürasyon tabanlı bir patolojidir. Gelişim aşamasına göre hem 'multipl radyopasiteler', hem 'mikst radyolüsent-radyopak lezyonlar', hem de yaygın etkileşimi nedeniyle 'generalize radyopasiteler' gruplarında yer alır. Ancak bu lezyonda internal kistik septasyonlar, kemik içi bal peteği/sabun köpüğü oluşumları görülmediği için 'multiloküler radyolüsensiler' grubunda yer alması imkansızdır.

**Soru 2 (ID: 830db24a-0573-4eac-8ff6-f4aeabe560dd)**
Soru Kökü: Radyolojik incelemede tekil, izole ve sınırları belirgin 'soliter radyopasite' saptanan bir vakada, aşağıdaki lezyonlardan hangisi standart ayırıcı tanı listesinde yer **almaz**?
Doğru Şık (E): Florid osseoz displazi
Açıklama: Florid osseöz displazi, kemik metabolizmasını yaygın etkileyen ve radyografik olarak multipl veya generalize radyopasiteler şeklinde izlenen bir patolojidir. Buna karşın enostoz, kondanse osteitis, hipersementoz ve kalmış kökler çenelerde fokal, tekil odak formunda gelişen karakteristik soliter radyopasitelerdir. Generalize kemik yıkım/yapım tabloları soliter lezyonlar kategorisinden dışlanmalıdır.

---

### ÇİFT 141 (Benzerlik: 0.69)

**Soru 1 (ID: 9070bfd4-0372-431d-999c-ed5eaa73a667)**
Soru Kökü: Diş hekimliği kliniğine başvuran 45 yaşındaki hastanın üst çene premolar bölgesinde, çekim öyküsü olmayan dişlerin mobil (hareketli) olduğu saptanmıştır. Periapikal radyografide dişlerin apikalindeki folikül kortekslerinin kaybolduğu ve dişlerin normal destek kemiğini yitirerek oklüzal yönde itildiği izlenmiştir. Lezyonun maksiller sinüs sınırlarında harabiyet yaptığı görülmüştür. Gece terlemesi ve kaşıntı öyküsü de bulunan bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Non-Hodgkin Lenfoma
Açıklama: Ekstranodal Non-Hodgkin Lenfoma maksiller sinüs ve damak bölgesini sık tutar, malign hücrelerin gelişen diş papillasına veya periapikal dokulara sızmasıyla kriptlerin korteksi silinir ve dişler oklüzal yönde zorlanarak erken sürmeye veya lükse olmaya başlar. Gece terlemesi ve açıklanamayan kaşıntı B semptomları olarak lenfomayı işaret eder. Fibröz displazi ve ameloblastomda bu tip agresif foliküler penetrasyon ve sistemik B semptomları izlenmez.

**Soru 2 (ID: b55d24f1-b55b-4e31-aeac-5d4302690979)**
Soru Kökü: Aşağıdaki çene içi radyolüsent lezyonlardan hangisi, gelişmekte olan diş foliküllerinde kortikal sınırın silinmesine ve sürmemiş dişlerin kök gelişimi tamamlanmadan normal kriptalarından çıkıp hızlı bir şekilde oklüzal yöne itilerek eksfoliye olmasına en çok neden olan hastalıktır?
Doğru Şık (C): Non-Hodgkin Lenfoma
Açıklama: Non-Hodgkin lenfomada ve lösemide malign hücreler diş papiline sızdığında, gelişmekte olan diş kriptlerinin sklerotik korteksi kaybolur. Bu durum, gelişmekte olan ve sürmekte olan dişlerin kök gelişimleri henüz bitmeden foliküllerinden dışarı (oklüzal yönde) itilerek erkenden düşmelerine (eksfoliasyon) sebep olur.

---

### ÇİFT 142 (Benzerlik: 0.69)

**Soru 1 (ID: 6e0e913d-6244-40d0-b697-6636405a7031)**
Soru Kökü: Aşağıdaki odontojenik lezyonlardan hangisi, histolojik epitel ve mezenkim gelişimi boyunca mineralize matris (radyopak materyal) sentezlemediğinden 'kalsifikasyon içeren perikoronal radyolüsensiler' ayırıcı tanısında **beklenmez**?
Doğru Şık (E): Ameloblastoma
Açıklama: Ameloblastoma lokal agresif gelişim gösteren ve mineralize yapılar sentezlemeyen bir tümör olduğundan tipik olarak kalsifikasyon içermeyen perikoronal radyolüsensi formunda izlenir. Kalsifiye odontojenik kist (Gorlin), AOT, ameloblastik odontom ve ameloblastik fibro-odontom ise perikoronal lokalizasyonlarında odontojenik sert doku formasyonları ve kalsifikasyonlar oluştururlar. Radyopak odağın izlenmesi salt ameloblastoma tanısından hekimi uzaklaştırır.

**Soru 2 (ID: 81c4145e-3841-4dde-a60e-42b487b11606)**
Soru Kökü: Radyolojik olarak 'mikst radyolüsent-radyopak lezyonlar' kategorisi, yapısında hem litik alanlar hem de reaktif/neoplastik kalsifikasyon matriksi barındıran hastalıkları kapsar. Aşağıdakilerden hangisi bu spesifik kategoride **sınıflandırılmaz**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma kendi yapısında herhangi bir kemik veya sement benzeri matriks (kalsifikasyon) üretmez; bu nedenle klasik olarak 'multiloküler radyolüsensiler' veya dişle ilişkiliyse kalsifikasyon içermeyen 'perikoronal radyolüsensiler' kategorisinde sınıflandırılır. Paget, osteosarkom, fibröz displazi ve sementifiye-ossifiye fibrom ise internal kalsifiye odaklara sahip oldukları için mikst lezyonlar grubundadır.

---

### ÇİFT 143 (Benzerlik: 0.69)

**Soru 1 (ID: 5a770f81-823f-4d41-be12-5c4bb2c2e11f)**
Soru Kökü: Aşağıdaki kistik veya tümöral lezyonlardan hangisi, Tablo 12'ye göre 'kalsifikasyon içeren perikoronal radyolüsensiler' grubunda yer **almaz**?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Tablo 12'deki sınıflandırmaya göre Ameloblastik fibrom, kalsifikasyon İÇERMEYEN perikoronal radyolüsensiler sınıfındadır (Dentijeröz kist, erüpsiyon kisti, OKK ve ameloblastoma ile birlikte). Seçeneklerdeki AOT, CEOT, COC ve Ameloblastik fibro-odontom ise internal yapısında kalsifiye/radyopak odak barındıran perikoronal lezyonlardır.

**Soru 2 (ID: 6e0e913d-6244-40d0-b697-6636405a7031)**
Soru Kökü: Aşağıdaki odontojenik lezyonlardan hangisi, histolojik epitel ve mezenkim gelişimi boyunca mineralize matris (radyopak materyal) sentezlemediğinden 'kalsifikasyon içeren perikoronal radyolüsensiler' ayırıcı tanısında **beklenmez**?
Doğru Şık (E): Ameloblastoma
Açıklama: Ameloblastoma lokal agresif gelişim gösteren ve mineralize yapılar sentezlemeyen bir tümör olduğundan tipik olarak kalsifikasyon içermeyen perikoronal radyolüsensi formunda izlenir. Kalsifiye odontojenik kist (Gorlin), AOT, ameloblastik odontom ve ameloblastik fibro-odontom ise perikoronal lokalizasyonlarında odontojenik sert doku formasyonları ve kalsifikasyonlar oluştururlar. Radyopak odağın izlenmesi salt ameloblastoma tanısından hekimi uzaklaştırır.

---

### ÇİFT 144 (Benzerlik: 0.69)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: 6b644b2e-4246-4867-ae58-33acdd0dbad7)**
Soru Kökü: Çene kemiğinde Ewing sarkomu tespit edilen bir hastanın radyolojik ayırıcı tanısında, her iki lezyon da litik dekstrüksiyon yapmasına rağmen, enfeksiyon kaynaklı osteomyeliti destekleyen ve Ewing sarkomunda görülmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Radyolüsent lezyon sınırları içerisinde sekestr görülmesi
Açıklama: Osteomyelit ve Ewing sarkomunun her ikisi de düzensiz radyolüsensi ve sekonder periost reaksiyonu yapabilir. Ancak osteomyelitte inflamasyona bağlı olarak beslenmesi bozulan ölü kemik adacıkları (sekestr) litik alan içerisinde radyoopak kitleler olarak izlenirken, Ewing sarkomunda nekrotik kemik sekestrasyonu görülmez.

---

### ÇİFT 145 (Benzerlik: 0.69)

**Soru 1 (ID: bab28b7f-8831-4e69-9ec2-c6862a9d5550)**
Soru Kökü: Mandibula posterior bölgede sıklıkla bilateral, güve yeniği tarzında litik kemik yıkımı yapan metastatik tümörlerin ayırıcı tanısında, prostat ve meme karsinomu metastazlarını diğerlerinden ayıran en spesifik özellik aşağıdakilerden hangisidir?
Doğru Şık (C): Komşu kemikte sklerotik formasyonu uyarabilmeleri
Açıklama: Genellikle metastatik lezyonlar düzensiz litik alanlar olarak görülürken, prostat ve meme karsinomu metastazları osteoblastik aktiviteyi indükleyerek komşu kemikte sklerotik (radyopak) kemik formasyonunu uyarabilirler. Bu özellik onları akciğer veya böbrek gibi tamamen osteolitik ilerleyen diğer metastazlardan ayırır. Dişlerde kök rezorpsiyonu metastazlarda nadir bir bulgudur.

**Soru 2 (ID: e74ce30e-7dc1-41f6-9c11-cce282e819a8)**
Soru Kökü: 55 yaşında prostat adenokarsinomu öyküsü olan erkek hastada alt çenede uyuşukluk şikayeti başlamıştır. Mandibulanın görüntülenmesinde metastaz ile primer çene içi skuamöz hücreli karsinomu birbirinden ayırmak amacıyla lezyonun radyolojik morfolojisi incelenmektedir. Lezyonun metastaz olduğunu destekleyen temel lokasyon bulgusu aşağıdakilerden hangisidir?
Doğru Şık (B): Lezyonun merkez üssünün derin kemik medullası içinde olması ve sınırlarının oval seyretmesi
Açıklama: Metastatik tümörler hematojen yolla geldikleri için merkez üsleri (epicenter) genellikle mandibuladaki derin medüller kemiğin içindedir ve dairesel/oval büyürler. Primer intraosseöz veya gingivadan yayılan SCC'lerin merkez üssü ise kemik yüzeyine (alveoler kret) daha yakındır ve yüzeyel 'kurabiye ısırığı' tarzı destrüksiyonla içe doğru ilerler.

---

### ÇİFT 146 (Benzerlik: 0.69)

**Soru 1 (ID: 6af3556a-d69f-4a2a-9f9c-2caf0d0b27f2)**
Soru Kökü: Çene kemiklerinde hem kemik yapımının hem de kemik yıkımının eş zamanlı veya ardışık gerçekleştiği durumlarda radyografide mikst radyolüsent-radyoopak görünüm oluşur. Aşağıdaki patolojilerden hangisi karakteri gereği radyografik olarak mikst lezyon profili **sergilemez**?
Doğru Şık (C): Multiple Myelom
Açıklama: Multiple Myelom, plazma hücrelerinin kemik yıkıcı sitokinleri (OAF) aşırı üretmesi sonucu kemikte sadece osteolitik aktivite gösteren, tamamen radyolüsent 'zımba deliği' tarzı litik lezyonlar yapar; reaktif veya neoplastik kemik yapımı göstermez. Buna karşın Paget hastalığı (pamuk yığını), osteosarkom (sunray/skleroz), semento-ossifiye fibromlar mikst özellik sergileyen başlıca oluşumlardır.

**Soru 2 (ID: b6509999-8c1d-4c5d-9688-6f5db48e6863)**
Soru Kökü: Aşağıdaki sistemik kemik hastalıklarından hangisi, multipl myelomun çenelerde yaptığı litik görünümlere (zımba deliği osteolizleri) radyolojik olarak birebir benzeyen kemik defektleri oluşturarak 'metabolik hastalık' ayırıcı tanısına girer?
Doğru Şık (B): Gaucher hastalığı
Açıklama: Gaucher hastalığı, lizozomal depo hastalığıdır ve sfingolipidlerin kemik iliğinde makrofajlar içinde birikimi sonucu litik kemik lezyonları üretir. Bu durum, radyolojik olarak kemiklerde zımba deliği tarzı defektler oluşturan multipl myelom ve metastazlara benzer görünüm sunar. Paget ve osteopetrozis ise radyopak (sklerotik) dominanslıdır.

---

### ÇİFT 147 (Benzerlik: 0.69)

**Soru 1 (ID: 7b4e4036-7b14-42f6-b841-c61c076b2b47)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, alt çenesinde son iki ayda hızla büyüyen ağrılı bir şişlik nedeniyle kliniğe başvurmuştur. Panoramik radyografide posterior mandibula korteksini aşan, dişlerin çevresinde nonkonsentrik periodontal ligament genişlemesi yaratan litik ve opakt alanların karışımı bir kitle görülmüştür. Oklüzal grafide kortekse dik soğan zarı yerine dikey dikensi spiküller izlenmiştir. Bu klinik ve radyolojik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Osteosarkom
Açıklama: Erkeklerde hızlı gelişen litik/sklerotik mikst alanlar, diş etrafındaki periodontal ligamentte asimetrik genişleme ve kortekse dik dikey spiküller (sunray / güneş ışını) osteosarkomun en tipik işaretleridir. Hızlı büyüme sonucu periostun köşelerinde kalsifiye olmasıyla Codman üçgeni de oluşabilir. Osteomyelit daha çok laminer (soğan zarı) tipi paralel bir periost reaksiyonu üretirken, osteosarkomda destrüktif litik kitle osteoid matriks üreterek sunray manzarası yaratır.

**Soru 2 (ID: adc36565-b9dc-419f-99eb-b717e262509d)**
Soru Kökü: Radyolojik incelemede 'kurabiye ısırığı' tarzında mandibulada inferior korteksin endosteal yüzeyinden dışarı doğru lokalize erozyon yapan ve dişlerin foliküler çevrelerini kaybetmesine neden olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Multipl myelom
Açıklama: Multipl myelomun mandibular tutulumunda, lezyonlar inferior korteksin endosteal (iç) yüzeyinde lokalize kemik erozyonuna neden olarak spesifik bir 'kurabiye ısırığı' veya korteksin scalloping'i görünümü üretirler. Ayrıca bu yıkımlar diş foliküllerinin ve lamina duranın çevresel sınırlarını da ortadan kaldırır.

---

### ÇİFT 148 (Benzerlik: 0.69)

**Soru 1 (ID: 61554eb0-3a40-4ae0-abef-396b482369ad)**
Soru Kökü: Sekiz yaşındaki hastada kronik otitis media öyküsü ile birlikte çenelerin radyografik incelemesinde alveolar kemikte masif destrüksiyon izleniyor. Multipl radyolüsent odaklar arasında dişlerin havada 'yüzüyormuş' gibi göründüğü belirleniyor. Diğer iskelet sistemi bölgelerinde de lezyonlar varsa, 'Multipl Radyolüsensiler' kategorisindeki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücre hastalığı (Histiositozis X)
Açıklama: Langerhans hücreli histiyositoz (Histiyositozis X), genç hastalarda multipl zımba deliği tarzı lezyonlar yapar ve geniş alveolar kemik destrüksiyonu neticesinde dişlerin havada yüzer gibi kalması bu hastalığın patognomoniğe yakın bir radyografik sunumudur.

**Soru 2 (ID: adc36565-b9dc-419f-99eb-b717e262509d)**
Soru Kökü: Radyolojik incelemede 'kurabiye ısırığı' tarzında mandibulada inferior korteksin endosteal yüzeyinden dışarı doğru lokalize erozyon yapan ve dişlerin foliküler çevrelerini kaybetmesine neden olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Multipl myelom
Açıklama: Multipl myelomun mandibular tutulumunda, lezyonlar inferior korteksin endosteal (iç) yüzeyinde lokalize kemik erozyonuna neden olarak spesifik bir 'kurabiye ısırığı' veya korteksin scalloping'i görünümü üretirler. Ayrıca bu yıkımlar diş foliküllerinin ve lamina duranın çevresel sınırlarını da ortadan kaldırır.

---

### ÇİFT 149 (Benzerlik: 0.69)

**Soru 1 (ID: 06191808-a3d6-4c6e-9fcb-791b11ffe2f1)**
Soru Kökü: On beş yaşında erkek hasta, alt çenesinde ağrılı şişlik, hafif ateş ve diş kaybı şikayetiyle başvurmuştur. Görüntülemede mandibula posteriorda düzensiz sınırlı, tamamen radyolüsent, kortikal tavanı patlatmış ve periostu reaktif kemik oluşumu için uyararak "hair on end" görüntüsü oluşturmuş bir lezyon saptanmıştır. Ancak inflamatuar osteomyelitten farklı olarak lezyon içerisinde sekestr yapısı izlenmemiştir. Bu olguda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ewing Sarkomu
Açıklama: Erken yaş (2. dekat) erkek çocuklarda ağrılı kemik şişliği, tamamen radyolüsent yıkım ve belirgin sekestrasyonun OLMAMASI Ewing Sarkomunu osteomyelitten ayıran temel klinik kurgudur. Ewing sarkomu periostu hızlı büyüme ile iterek dikey çizgilenmeler (hair on end / sunray) yaratır fakat litik doğası gereği osteoid matriks içermez. Dev hücreli granülom ve miksoma korteksi bu derece agresif patlatıp periostal dikenler üretmez.

**Soru 2 (ID: 201d94a5-6ea9-42cd-b789-b8130233673b)**
Soru Kökü: Mandibula posterior bölgede kötü kokulu akıntı ve ağrılı şişlik ile başvuran hastanın radyografisinde güve yeniği tarzında sınırları belirsiz radyolüsent alanlar saptanmıştır. Lezyon çevresinde reaktif kemik formasyonunu gösteren skleroz ve kortekse paralel uzanan periosteal reaksiyon mevcuttur. Multipl myelom ve Ewing sarkomu ayırıcı tanısında, bu radyolojik spesifikasyonlar öncelikli olarak aşağıdakilerden hangisini destekler?
Doğru Şık (D): Osteomyelit
Açıklama: Osteomyelitin karakteristik radyografik belirteçleri arasında reaktif enflamasyon kaynaklı çevresel skleroz, sekestr formasyonu ve kortekse paralel uzanan laminar periosteal reaksiyon yer alır. Ewing sarkomu radyolüsent güve yeniği görünümü yapsa da güneş ışını tarzı dik periost reaksiyonuna yatkındır. Multipl myelom ise tamamen osteolitik (zımba deliği) bir süreçtir ve enflamatuar bir reaksiyon olmadığı için çevresel skleroz veya periosteal yeni kemik üretmez.

---

### ÇİFT 150 (Benzerlik: 0.69)

**Soru 1 (ID: 9a880e78-8260-432e-b34c-cc0296dc6ace)**
Soru Kökü: Çene grafilerinde birden fazla bölgede yaygın (multipl) radyopak odakların saptanması, sistemik veya sendromik hastalıkların radyolojik habercisi olabilir. Aşağıdaki patolojilerden hangisi standart klinik sınıflandırmalarda 'multipl radyopasite' tablosuna neden olan hastalıklardan biri **değildir**?
Doğru Şık (D): Enostoz
Açıklama: Enostoz (kemik adacığı), çene kemiği medullasında gelişen yoğun kortikal kemik kitlesidir ve karakteristik olarak soliter radyopasite formunda izlenir. Paget hastalığının sklerotik evresi, süpernumerer dişler, Gardner sendromuna bağlı multipl osteomalar ve matür periapikal semental displazi ise hastada multipl radyopasite tablosuna neden olur. Sınıflandırmada multipl gelişim göstermeyen yapı enostozdur.

**Soru 2 (ID: c49ba318-53d4-42cf-becb-368aa32fd72a)**
Soru Kökü: Radyografik incelemede mandibula ve maksillada anatomik kortikal sınırların belirsizleştiği, standardize generalize kemik yoğunluğu artışı (osteoskleroz) saptanan bir hastada, bu radyopasite artışının iskeletsel bir nedene bağlı olduğu düşünülmektedir. Aşağıdaki hastalıklardan hangisi bu durumun ayırıcı tanısında öncelikli olarak değerlendirilir?
Doğru Şık (B): Osteopetrozis
Açıklama: Osteopetrozis, osteoklastların kemik rezorpsiyon işlevini yerine getirememesi sonucu generalize radyopasite (mermer kemik) tablosunun görüldüğü bir sistemik hastalıktır. Cherubism multikistik kemik yıkımlarıyla, Langerhans hücreli histiyositoz apikal radyolüsensiler ve 'yüzen diş' manzarasıyla, santral hemanjiom ise sabun köpüğü radyolüsensilerle karakterizedir. Generalize osteoskleroz tablosu bu ayırıcı tanıda yalnızca osteopetrozise işaret eder.

---

### ÇİFT 151 (Benzerlik: 0.69)

**Soru 1 (ID: 06d12e9a-c211-4aa5-9a72-36e7f1d445c3)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen 'mikst radyolüsent-radyopak' lezyonlar, osteojenik yapım ve yıkımın iç içe geçtiği patolojileri tanımlar. Aşağıdaki lezyonlardan hangisi bu sınıflandırma grubunda listelenme özelliğine sahip **değildir**?
Doğru Şık (B): Travmatik kemik kisti
Açıklama: Travmatik (basit) kemik kisti, boş bir hemorajik/seröz kemik kavitesi olup tamamen radyolüsent (soliter) özellik gösterir ve sekonder kalsifikasyon/kemik yapımı oluşturmaz. Osteoradyonekroz, hiperparatiroidizm, sementifiye-ossifiye fibrom ve osteomyelit ise kemik medullasında düzensiz mineralizasyon defektleri veya reaktif sekestr alanları nedeniyle radyografik olarak mikst radyolüsent-radyopak bulgular verir. Kavitasyon kistleri saf radyolüsenttir.

**Soru 2 (ID: 6d5faffd-0d70-4c55-a410-210888a90ba6)**
Soru Kökü: Çene kemiklerini etkileyen lezyonların temel radyografik sınıflandırmasına göre; Paget hastalığı, Hiperparatiroidizm ve Fibröz displazi'nin ortak olarak listelendiği ana kategori aşağıdakilerden hangisidir?
Doğru Şık (C): Generalize radyopasiteler / Sistemik hastalıklar
Açıklama: Paget hastalığı, hiperparatiroidizm ve fibröz displazi, kemik metabolizmasını yaygın ve birden çok kadranda etkileyen durumlar oldukları için 'Generalize radyopasiteler / Sistemik hastalıklar' kategorisinde ortak olarak listelenirler. Bu lezyonlar maturasyonlarına bağlı olarak mikst radyolüsent-radyopak patern de gösterebilirler ancak fokal kistik nitelik taşıyan perikoronal veya saf multiloküler özellik göstermezler.

---

### ÇİFT 152 (Benzerlik: 0.69)

**Soru 1 (ID: 157eac2c-bf03-4679-bd71-562e122ef5c6)**
Soru Kökü: İdiopatik osteoskleroz ve ekzostoz oluşumları, radyografik görünümlerine göre hem soliter hem de multipl radyopasiteler oluşturabilme potansiyeline sahiptir. Aşağıdakilerden hangisi ise bu patolojilerin aksine **yalnızca** soliter radyopasite tablosunda listelenen osteojenik bir reaksiyondur?
Doğru Şık (C): Kondanse osteitis
Açıklama: Kondanse osteitis, genellikle enfekte pulpalı tek bir dişin kök ucunda kronik inflamasyona yanıt olarak gelişen lokalize osteoblastik aktivite artışıdır ve tipik soliter radyopasite olarak sınıflandırılır. Matür periapikal semental displazi hem soliter hem multipl gruptayken; Paget, Florid osseoz displazi ve soket sklerozu karakteristik multipl radyopasite grubunda yer alır. İnflamatuar odaklı kök ucu reaksiyonu lokal ve tekildir.

**Soru 2 (ID: eee90edb-3710-44e3-af32-8b2eb85a183b)**
Soru Kökü: Çene radyografisinde tek başına radyopak (soliter radyopasite) bir alan izlenen asemptomatik hastanın ayırıcı tanısında aşağıdakilerden hangisinin bulunması **en az** olasıdır?
Doğru Şık (E): Santral hemanjiom
Açıklama: Santral hemanjiomlar kemik içerisinde multiloküler radyolüsensi (bazen bal peteği veya tekerlek parmaklığı formunda litik kemik) yapan lezyonlardır. İdiopatik osteoskleroz, kondanse osteitis, ekzostoz ve kalmış kökler ise tipik soliter radyopasite örnekleridir.

---

