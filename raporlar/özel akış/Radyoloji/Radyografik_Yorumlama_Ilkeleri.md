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

### ÇİFT 1 (Benzerlik: 0.88)

**Soru 1 (ID: 3e9e395a-8af3-467e-8d56-5dbcb4d6f73a)**
Soru Kökü: Maksillofasiyal bölgede görülen patolojik lezyonların dağılımı değerlendirildiğinde, aşağıdaki hastalıklardan hangisinin radyografik olarak çenelerde her zaman iki taraflı (bilateral) lokalizasyon göstermesi beklenir?
Doğru Şık (C): Paget hastalığı
Açıklama: Maksillofasiyal bölgede lokalize patolojik lezyonlar genellikle tek taraflı görülse de, Paget hastalığı çeneleri etkilediğinde sistemik doğası gereği her zaman iki taraflı (bilateral) tutulum yapar. Güçlü bir çeldirici olan osteomiyelit ise genellikle mandibulada lokalize ve tek taraflı enfeksiyöz bir reaksiyon olarak karşımıza çıkar. Bu nedenle çenelerde generalize bilateral genişleme saptanması, Paget hastalığı ve cherubism gibi spesifik hastalıkların ayırıcı tanısında altın standarttır.

**Soru 2 (ID: dc811d3f-b017-4303-a4c2-841aa9b44e11)**
Soru Kökü: Maksillofasiyal bölgede patolojik lezyonlar genellikle lokalize ve tek taraflı olma eğilimindedir. Ancak aşağıdakilerden hangisi çenelerde karakteristik olarak her zaman iki taraflı (bilateral) görülmesi beklenen durumlardan biridir?
Doğru Şık (C): Cherubism
Açıklama: Cherubism ve Paget hastalığı, gelişimsel ve metabolik genetik doğaları gereği çeneleri her zaman bilateral olarak etkileyen nadir hastalıklardandır. Ameloblastom ve dev hücreli granülom tipik olarak çenelerde tek taraflı lokalize genişlemeler şeklinde izlenir. Bilateral prezentasyon, ayırıcı tanıda sistemik veya genetik tabanlı bir anomaliyi işaret eden en güçlü bulgudur.

---

### ÇİFT 2 (Benzerlik: 0.82)

**Soru 1 (ID: 8d03871e-488a-4630-8c85-127daa78a946)**
Soru Kökü: Altmış beş yaşındaki erkek hastanın çene grafilerinde, normal trabeküler paternin yerini almış belirgin bir reaktif kemik üretimi saptanmıştır. Anamnezinde malinite hikayesi olan hastada gözlenen bu 'osteoblastik reaksiyon', en olası hangi primer odaklı metastazın sonucudur?
Doğru Şık (C): Prostat
Açıklama: Prostat ve meme dokusundan kaynaklanan metastatik lezyonlar, çene kemiklerinde yıkımdan (osteolitik) ziyade kemik yapımını tetikleyerek karakteristik bir 'osteoblastik reaksiyon' oluştururlar. Diğer birçok organ karsinomu (akciğer, mide, tiroid) çenelerde sınırları belirsiz invaziv (permeatif/güve yeniği) osteolitik radyolüsensiler meydana getirir.

**Soru 2 (ID: d2318258-e757-4c91-8e48-3db6596c358d)**
Soru Kökü: 65 yaşında erkek hasta kliniğe rutin muayene amacıyla başvuruyor. Tıbbi anamnezinde ileri evre prostat karsinomu tedavisi gördüğü öğrenilen hastanın radyografisinde, çenelerde yer yer anomali sınırlarında periferal yeni kemik uyarım formasyonları saptanıyor. Bu lezyonların uyardığı reaksiyonun spesifik karakteristiği aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoblastik reaksiyon
Açıklama: Prostat ve meme karsinomlarının çenelere olan metastazları sıklıkla çevre kemikte osteoblastik reaksiyonu (yeni kemik yapımını) uyararak karakterize olurlar. Diğer birçok metastaz osteolitik bir yıkım tablosu çizerken, bu iki organdan gelen tümör hücreleri lokal kemik faktörlerini etkileyerek radyopasite artışlarına neden olur. Bu bulgu ayırıcı tanıda primer tümör kaynağını tahmin etmede esastır.

---

### ÇİFT 3 (Benzerlik: 0.82)

**Soru 1 (ID: 331464f4-2636-4697-bf20-22a974da6d7d)**
Soru Kökü: Panoramik radyografide saptanan ve 'soğan kabuğu' (onion-skin) olarak adlandırılan, lamelli periost reaksiyonu paterni, periosteumun ardışık eksüda/uyaran ataklarına yeni kemik tabakaları üreterek verdiği reaktif bir yanıttır. Aşağıdakilerden hangisinin radyografide bu paterni oluşturması **beklenmez**?
Doğru Şık (D): Periapikal semental displazi
Açıklama: Soğan kabuğu reaksiyonu; enflamatuar durumlarda (Garre osteomiyeliti), Langerhans hücreli histiyositozda, lösemide ve Ewing sarkomunda izlenen katmanlı periost yanıtıdır. Periapikal semental displazi ise kök uçlarında kortikal kalınlaşma veya sklerotik halo ile karakterize kemik içi reaktif bir süreçtir, dış periostta soğan kabuğu şeklinde lamelli apozisyon yapmaz.

**Soru 2 (ID: 87a5a351-1d1b-4435-a93f-d6e5194c8a57)**
Soru Kökü: Enflamatuar eksüda, kanama veya tümöral hücrelerin periostu dışarıya doğru aralıklı olarak uyarması, korteks dışında lamelli bir kemik yapımına yol açarak radyografide "soğan kabuğu" (onion-skin) paternini oluşturur. Aşağıdakilerden hangisi bu spesifik periost reaksiyonuna neden **olmaz**?
Doğru Şık (A): Basit kemik kisti
Açıklama: Basit kemik kisti medüller kemik içerisinde yavaş büyüyen, genellikle asemptomatik, boşluklu bir psödokisttir ve periost reaksiyonunu uyararak yeni kemik yapımına (soğan kabuğu) neden olmaz. Garre osteomiyeliti (kronik proliferatif periostitis), İnfantil kortikal hiperostoz (Caffey hastalığı) ve Ewing sarkomu periostu sürekli aralıklarla uyararak tipik lamelli soğan kabuğu deseni yaratır.

---

### ÇİFT 4 (Benzerlik: 0.80)

**Soru 1 (ID: c751d0dd-1847-4fea-8c22-5acce477fcc9)**
Soru Kökü: Otuz beş yaşında kadın hastanın panoramik radyografik incelemesinde, inferior alveolar sinir kanalının korpus bölgesinde kanal kortikal sınırları tamamen korunarak genişlediği (ekspansiyon) saptanıyor. Nörolojik muayenede herhangi bir uyuşukluk veya parestezi bulgusu saptanmıyor. Bu radyografik bulgular ışığında kanal içindeki lezyonun davranışı hakkında **en olası** yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Vasküler veya nöral kökenli benign bir lezyondur.
Açıklama: İnferior alveolar kanal içinde gelişen nörom, schwannom veya hemanjiom gibi benign (iyi huylu) kökenli lezyonlar oldukça yavaş büyüdükleri için, kanalın ince kortikal sınırını yıkmadan, onu iterek ve intakt bırakarak genişletir. Malign neoplazmlar veya invaziv tümörler (çeldirici şıklar) ise hızla kemik destrüksiyonu yaparak korteksi yıkar ve kanal sınırlarının silinmesine, düzensizleşmesine neden olur. Anatomik kortikal plağın bozulmadan çadır gibi genişlemesi, lezyonun yavaş huylu doğasının ve nöral/vasküler kaynağının kesin göstergesidir.

**Soru 2 (ID: f496580c-5eb9-4c6f-aec2-d30bc3df0d98)**
Soru Kökü: İnferior alveolar kanalın radyografik incelemesinde kanal trasesinin kortikal sınırları bozulmadan (intakt) kalarak düzgün bir biçimde genişlediği görülmüştür. Bu spesifik genişleme paterninin kanal içerisinde yerleşimli aşağıdaki patolojilerden hangisini göstermesi **en az olasıdır**?
Doğru Şık (B): Malign lenfoma
Açıklama: Kanal korteksinin bozulmadan (intakt olarak) genişlemesi, kanal içerisindeki yavaş büyüyen benign vasküler (hemanjiyom) veya nöral (nörom, schwannom) tümörleri işaret eder. Malign bir neoplazm (lenfoma vb.) kanal çevresindeki kortikal kemikte düzensiz yıkım ve invazyon (korteks kaybı) yapar, intakt bir genişleme bırakmaz.

---

### ÇİFT 5 (Benzerlik: 0.80)

**Soru 1 (ID: 87c2a96c-f6ae-4164-9132-711de9486ead)**
Soru Kökü: Bir lezyonun çenedeki genişlemesinin şekli klinik tanıda yol göstericidir. Lezyonun hidrolik basınca işaret eden 'şişirilmiş bir balona benzer, dairesel' formda kemiği ittiği radyografik görünüme (Balon benzeri görünüm) sahip olabilen iki ana patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti ve Folliküler kist
Açıklama: Balon benzeri (hidrolik dairesel) radyografik ekspansiyon sıvıyla dolu kavitelerin eşit yönde yaptığı hidrostatik basınca bağlıdır. Anevrizmal kemik kisti (içi kan dolu göllenmeler) ve foliküler kist (kistik epiteliyum içi sıvı dairesel genişler) Tablo 9'da spesifik olarak 'Balon benzeri görünüm' ile eşleştirilmiştir.

**Soru 2 (ID: e2470054-76ac-499b-af7e-40ea93628437)**
Soru Kökü: Bir maksillofasiyal lezyonun radyografik değerlendirmesinde, dairesel yapıda ve her yöne eşit genişlemiş, 'şişirilmiş bir balona' benzer biçimde hidrolik bir büyüme formasyonu tespit edilmiştir. Bu radyografik makroskobik biçim primer olarak aşağıdaki patoloji gruplarının hangisinin karakteristik özelliğidir?
Doğru Şık (A): Kistler
Açıklama: Şişirilmiş bir balon (hidrolik) görünümü, lümen içerisindeki sıvının epitelyal duvara dışa doğru eşit hidrostatik basınç uygulaması prensibiyle büyüyen kistlere özgü bir morfolojidir. Displaziler veya maligniteler çevresel direnç bölgelerine veya anatomik planlara göre asimetrik invazyon gösterirler. Bu osmotik basınç mekanizması, kistlerin neden pürüzsüz ve dairesel sınırlar çizdiğinin fiziksel açıklamasıdır.

---

### ÇİFT 6 (Benzerlik: 0.79)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 7 (Benzerlik: 0.79)

**Soru 1 (ID: 8ced98a5-1dbe-42b8-a050-175ce27ba8bc)**
Soru Kökü: 28 yaşında kadın hasta, üst sağ bölgesinde ağrısız bir şişlik fark ediyor. Periapikal radyografide, maksiller sağ lateral kesici ve kanin dişlerin köklerini birbirinden ayırarak superiora doğru genişleyen, inferiora (alveol kretine) doğru daralan karakteristik "armut şekilli" (pear-shaped) radyolüsent lezyon saptanıyor. Dişler vital olduğuna göre, en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Globulomaksiller kist
Açıklama: Globulomaksiller kist, adını yerleşim yerinden alan ve anatomik olarak her zaman maksiller lateral ve kanin dişleri arasına yerleşerek onları diverjan hale getiren ters dönmüş 'armut' formunda bir gelişimsel/fissüral kisttir. Dişlerin vital olması kökeninin pulpa enfeksiyonu (radiküler kist) olmadığını kesinleştirir.

**Soru 2 (ID: 98ed6c10-c79f-4850-8524-8ca116e324fe)**
Soru Kökü: 30 yaşında erkek hasta maksiller orta hatta palatinal bölgede hafif bir şişlik fark ederek başvuruyor. Alınan oklüzal ve periapikal radyografide maksiller santral kesici dişlerin kökleri arasında, spina nasalis anterior'un süperpoze olmasıyla "kalp şekilli" (heart-shaped) radyolüsent bir görünüm izleniyor. Dişler pulpa testine vital yanıt veriyor. Bu bulgular ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İnsiziv kanal kisti
Açıklama: İnsiziv kanal kisti (nazopalatin kanal kisti), maksiller santral dişlerin orta hattında yerleşir ve anterior nasal spine'ın radyografik olarak lezyonun üzerine izdüşümü sebebiyle karakteristik kalp şeklini alır. Dişlerin vital olması radiküler kist seçeneğini eler. Globulomaksiller kist ise maksiller lateral ve kanin dişleri arasında armut şeklinde izlenir.

---

### ÇİFT 8 (Benzerlik: 0.79)

**Soru 1 (ID: 1a7fce10-6260-4d9a-b402-0012814faa29)**
Soru Kökü: Aşağıdaki lezyon veya durumlardan hangisinde radyografik olarak 'soğan kabuğu' (onion-skin) şeklinde ardışık lamellated periost reaksiyonu görülmesi **beklenmez**?
Doğru Şık (E): Santral hemanjiyom
Açıklama: Santral hemanjiyomlar soğan kabuğu değil, tipik olarak 'at arabası tekerliği', 'bal peteği' veya 'tekerlek' görünümünde vasküler ağlar oluşturur. Soğan kabuğu görünümü esas olarak inflamatuar olaylarda (osteomiyelit), çocukluk çağı sistemik reaksiyonlarında ve lösemi, Langerhans hücreli histiyozis veya Ewing sarkomu gibi hızlı seyreden spesifik tümörlerde periostun epizodik irritasyonuna bağlı gelişir.

**Soru 2 (ID: 331464f4-2636-4697-bf20-22a974da6d7d)**
Soru Kökü: Panoramik radyografide saptanan ve 'soğan kabuğu' (onion-skin) olarak adlandırılan, lamelli periost reaksiyonu paterni, periosteumun ardışık eksüda/uyaran ataklarına yeni kemik tabakaları üreterek verdiği reaktif bir yanıttır. Aşağıdakilerden hangisinin radyografide bu paterni oluşturması **beklenmez**?
Doğru Şık (D): Periapikal semental displazi
Açıklama: Soğan kabuğu reaksiyonu; enflamatuar durumlarda (Garre osteomiyeliti), Langerhans hücreli histiyositozda, lösemide ve Ewing sarkomunda izlenen katmanlı periost yanıtıdır. Periapikal semental displazi ise kök uçlarında kortikal kalınlaşma veya sklerotik halo ile karakterize kemik içi reaktif bir süreçtir, dış periostta soğan kabuğu şeklinde lamelli apozisyon yapmaz.

---

### ÇİFT 9 (Benzerlik: 0.79)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

---

### ÇİFT 10 (Benzerlik: 0.78)

**Soru 1 (ID: 2fe07fc4-5a2b-496c-9b20-011da46c1d26)**
Soru Kökü: Malign karakterli kemik lezyonlarının agresif destrüksiyon paternleri ayırıcı tanıda paha biçilemez bir referanstır. Aşağıdaki tümör ve ona eşlik eden spesifik radyografik bulgu eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Ewing sarkomu – Taraklı görünüm
Açıklama: Ewing sarkomu hızlı kemik iliği infiltrasyonu ve periosteal reaksiyon yaratarak 'soğan kabuğu' ve 'güneş ışını' görünümleri üretir; yavaş genişleyen iyi huylu veya kistik lezyonlara özgü 'taraklı görünüm' oluşturmaz. Burkitt tümörünün çivi kökleri veya Skuamöz hücreli karsinomun güve yeniği görünümü, ilgili malignitelerin karakteristik yıkım paternleriyle örtüşür. Taraklı sınırın olmaması, tümörün çevre yapılara adapte olacak zamanı bulamadan kemiği yok ettiğini gösterir.

**Soru 2 (ID: 5f113e8c-1fe0-400c-a97f-94a3ed0d3384)**
Soru Kökü: Aşağıdaki kemik patolojileri ve tipik radyografik görünümleri ile ilgili yapılan eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Semento-ossifying fibroma – Çivi kökler
Açıklama: Semento-ossifying fibroma kemik trabekülleri ve sementum benzeri doku üretimi nedeniyle radyografide 'yumurta kabuğu' veya 'buzlu cam' görünümü verebilir; çivi kökler oluşturmaz. Çivi kökler, agresif rezorpsiyon yapan Burkitt tümörü veya malignant histiyositoma gibi lezyonların spesifik işaretidir. Diğer seçeneklerdeki patoloji-patern eşleştirmeleri literatürdeki karakteristik kalsifikasyon ve yıkım formlarıyla tam uyumludur.

---

### ÇİFT 11 (Benzerlik: 0.78)

**Soru 1 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

**Soru 2 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

---

### ÇİFT 12 (Benzerlik: 0.78)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 13 (Benzerlik: 0.78)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

---

### ÇİFT 14 (Benzerlik: 0.78)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: 87c2a96c-f6ae-4164-9132-711de9486ead)**
Soru Kökü: Bir lezyonun çenedeki genişlemesinin şekli klinik tanıda yol göstericidir. Lezyonun hidrolik basınca işaret eden 'şişirilmiş bir balona benzer, dairesel' formda kemiği ittiği radyografik görünüme (Balon benzeri görünüm) sahip olabilen iki ana patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti ve Folliküler kist
Açıklama: Balon benzeri (hidrolik dairesel) radyografik ekspansiyon sıvıyla dolu kavitelerin eşit yönde yaptığı hidrostatik basınca bağlıdır. Anevrizmal kemik kisti (içi kan dolu göllenmeler) ve foliküler kist (kistik epiteliyum içi sıvı dairesel genişler) Tablo 9'da spesifik olarak 'Balon benzeri görünüm' ile eşleştirilmiştir.

---

### ÇİFT 15 (Benzerlik: 0.78)

**Soru 1 (ID: 4ae8704d-d250-412b-9c7a-86ffdf7663da)**
Soru Kökü: Reaktif periost kemik oluşumu, alttaki tümöral yapının doğasına göre spesifik desenler oluşturur. Kemiğe dik olarak ışınsal tarzda ilerleyen spiküllerin izlendiği 'güneş ışını' (sunburst) görünümü, aşağıdaki patolojilerden hangisinde **gözlenmez**?
Doğru Şık (D): Pindborg tümörü
Açıklama: Güneş ışını (sunburst) periost reaksiyonu agresif malignitelerde (Osteosarkom, Ewing sarkomu) ve kemik içine yerleşmiş, yüksek basınçlı benign vasküler lezyonlarda (hemanjiyomlar) izlenir. Pindborg tümörü (CEOT) kortikal ekspansiyon yapabilir ancak periost üzerinde ışınsal spiküller değil, iç yapıda amiloid kalsifikasyonuna bağlı 'kar yağdı' manzarası bırakır.

**Soru 2 (ID: 6aea0ff8-5da5-4551-ab25-1fcdb0437d63)**
Soru Kökü: Periost reaksiyonlarının radyografik tiplendirilmesinde, kortikal plağın delinmesiyle kemik yüzeyine dik olarak (radyal) dışarıya uzanan yeni kemik spiküllerinden oluşan 'ışınsal spiküllü' (sunburst / güneş ışını) görünüm malign davranışa işaret eder. Tipik olarak osteosarkomda görülen bu kemik örüntüsü, nadiren de olsa aşağıdaki benign vasküler lezyonlardan hangisinde radyografik olarak izlenebilir?
Doğru Şık (B): Hemanjiom
Açıklama: Santral hemanjiomlar kemik içi trabekülleri yeniden şekillendirirken (at arabası tekerleği manzarası) periost dışına taştıklarında radyal yerleşimli kan damarları boyunca gerçekleşen mineralizasyon, periosta dik uzanan ışınsal spiküllere (sunburst görünümü) neden olabilir. Ameloblastom veya miksoma (çeldirici şıklar) gibi agresif epitelyal tümörlerde dış periostta güneş ışını tarzında spiküler kalsifikasyon kesinlikle izlenmez, bu tümörler sadece korteksi inceltir. Sunburst görünümü osteosarkom için patognomonik kabul edilse de, yüksek akımlı santral hemanjiomlar mutlaka ayırıcı tanıda yer tutmalıdır.

---

### ÇİFT 16 (Benzerlik: 0.77)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

---

### ÇİFT 17 (Benzerlik: 0.77)

**Soru 1 (ID: a8b1edf1-7d32-42b5-aa34-7b0119cb5c6f)**
Soru Kökü: Radyografik olarak 'kaynaşmış sınır' (belirsiz sınır) izlenen kemik lezyonlarının özellikleri değerlendirildiğinde, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Bu sınır tipi yavaş büyüyen iyi huylu tümörlerin ve gelişimsel kistlerin karakteristik özelliğidir.
Açıklama: Kaynaşmış sınır, lezyon trabekülleri ile normal kemik arasında geniş bir geçiş bölgesinin bulunduğu belirsiz bir formdur ve klasik olarak sklerozan osteitiste (kondensing osteitis) görülür. Yavaş büyüyen gelişimsel kistler veya iyi huylu tümörler (yanlış olan seçenek) bu şekilde difüz yayılım göstermez; aksine ince ve homojen bir radyoopak hatla (kortikal kenar) iyi sınırlı formda izlenirler. Bu radyografik ayrım, inflamatuar reaktif skleroz ile ekspansif kistik büyümenin birbirinden ayırt edilmesinde klinisyene doğrudan yol gösterir.

**Soru 2 (ID: b8de9734-9b25-4ac7-bc04-912608f6faf3)**
Soru Kökü: Radyografik sınır analizi ve periferik kemik reaksiyonları ile ilgili aşağıdaki bilgilerden hangisi **yanlıştır**?
Doğru Şık (B): Bir kistin radyografik olarak izlenen kortikal sınırı, fizyolojik olarak kistin kendi epiteline ait bir yapıdır.
Açıklama: Radyografide görülen kistin kortikal sınırı kistin kendisine ait hücresel bir yapı değil, genişleyen kiste karşı çevre kemiğin gösterdiği bir reaksiyondur. Sklerotik sınır veya osteoblastik reaksiyonlar tamamen ev sahibi dokunun patolojiye verdiği savunma ve adaptasyon yanıtlarıdır. Bu radyografik sınırlar lezyonun büyüme hızı hakkında doğrudan bilgi sağlar.

---

### ÇİFT 18 (Benzerlik: 0.77)

**Soru 1 (ID: 0efef2eb-b6b5-4ef2-9f03-3fbc58af4cec)**
Soru Kökü: Kemik içi lezyonların şekli, genellikle patofizyolojik mekanizmalarıyla paraleldir. Sıvı basıncının etkisiyle hidrolik olarak genişleyen, radyografide dairesel veya şişirilmiş bir balon biçiminde ('balon benzeri') bir şekil alan kemik patolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti (ve foliküler kistler), içerdikleri sıvı veya kan volümünün hidrolik basıncı sayesinde kemiği dışa doğru iterek 'şişirilmiş balon' formunda izole, yuvarlak genişlemelere neden olur. Fibröz displazi sıvı değil kemik matriksiyle dolu olduğundan merkezsiz büyürken, osteomlar yoğun radyoopak kitlelerdir. Balon görünümü kistik/hidrolik dinamiğin kanıtıdır.

**Soru 2 (ID: 87c2a96c-f6ae-4164-9132-711de9486ead)**
Soru Kökü: Bir lezyonun çenedeki genişlemesinin şekli klinik tanıda yol göstericidir. Lezyonun hidrolik basınca işaret eden 'şişirilmiş bir balona benzer, dairesel' formda kemiği ittiği radyografik görünüme (Balon benzeri görünüm) sahip olabilen iki ana patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti ve Folliküler kist
Açıklama: Balon benzeri (hidrolik dairesel) radyografik ekspansiyon sıvıyla dolu kavitelerin eşit yönde yaptığı hidrostatik basınca bağlıdır. Anevrizmal kemik kisti (içi kan dolu göllenmeler) ve foliküler kist (kistik epiteliyum içi sıvı dairesel genişler) Tablo 9'da spesifik olarak 'Balon benzeri görünüm' ile eşleştirilmiştir.

---

### ÇİFT 19 (Benzerlik: 0.77)

**Soru 1 (ID: d7ca7bae-94b6-4159-9749-2bc9370b2a54)**
Soru Kökü: Kemik içi lezyonların dış periferinde ince ve oldukça homojen yapıda, radyoopak ince bir reaktif kemik hattı saptanmıştır. Sınır tipolojisi 'kortikal kenar' olarak adlandırılan bu morfoloji, aşağıdaki lezyon gruplarının hangisinde izlenir?
Doğru Şık (E): Kistler ve yavaş büyüyen iyi huylu tümörler
Açıklama: Kortikal kenar, lezyonun büyüme hızının çevre kemiğin yeni kemik üreterek (osteoblastik aktivite ile) bu basıncı karşılamasına yetecek kadar yavaş olduğu durumlarda, yani kistler ve iyi huylu tümörlerde görülür. Hızlı gelişen maligniteler veya akut enfeksiyonlar osteoblastların sınır oluşturmasına izin vermeyecek hızda doku yıktıkları için invaziv sınırlar oluştururlar. Bu reaktif ince radyoopak hat lezyonun biyolojik davranışının benign olduğunu destekler.

**Soru 2 (ID: dd50752a-955c-4503-b46f-e50555d8cdf2)**
Soru Kökü: Kemik içi lezyonların radyografik sınır özellikleri, lezyonun doğası ve çevre dokuyla etkileşimi hakkında bilgi verir. Dışta iyi sınırlı ince bir kortikal radyoopak perifer ve onun hemen iç kısmında radyolusent bir boşlukla karakterize 'yumuşak doku kapsülü' görünümü aşağıdaki lezyonların hangisinde izlenir?
Doğru Şık (D): Odontom
Açıklama: Odontom ve sementoblastom gibi iyi huylu, kapsüllü odontojenik tümörler, etraflarındaki bağ dokusu kapsülü nedeniyle kalsifiye kitle ile komşu kemik arasında radyolusent bir hat (yumuşak doku kapsülü) ve en dışta reaktif bir kortikal sınır barındırır. Sklerozan osteitiste ise tam tersine kapsülsüz, kemikle kaynaşmış, sınırları belirsiz bir skleroz alanı izlenir. Radyografide tespit edilen bu radyolusent kapsül boşluğu, lezyonun çevre kemikten net bir şekilde ayrıştığını ve cerrahi olarak kolayca enükle edilebileceğini gösterir.

---

### ÇİFT 20 (Benzerlik: 0.77)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: c751d0dd-1847-4fea-8c22-5acce477fcc9)**
Soru Kökü: Otuz beş yaşında kadın hastanın panoramik radyografik incelemesinde, inferior alveolar sinir kanalının korpus bölgesinde kanal kortikal sınırları tamamen korunarak genişlediği (ekspansiyon) saptanıyor. Nörolojik muayenede herhangi bir uyuşukluk veya parestezi bulgusu saptanmıyor. Bu radyografik bulgular ışığında kanal içindeki lezyonun davranışı hakkında **en olası** yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Vasküler veya nöral kökenli benign bir lezyondur.
Açıklama: İnferior alveolar kanal içinde gelişen nörom, schwannom veya hemanjiom gibi benign (iyi huylu) kökenli lezyonlar oldukça yavaş büyüdükleri için, kanalın ince kortikal sınırını yıkmadan, onu iterek ve intakt bırakarak genişletir. Malign neoplazmlar veya invaziv tümörler (çeldirici şıklar) ise hızla kemik destrüksiyonu yaparak korteksi yıkar ve kanal sınırlarının silinmesine, düzensizleşmesine neden olur. Anatomik kortikal plağın bozulmadan çadır gibi genişlemesi, lezyonun yavaş huylu doğasının ve nöral/vasküler kaynağının kesin göstergesidir.

---

### ÇİFT 21 (Benzerlik: 0.77)

**Soru 1 (ID: 907db4d5-fa69-47d0-bf54-b2cc0ba46365)**
Soru Kökü: Düz radyografilerdeki internal yapıların materyal yoğunluğuna göre radyolüsentten radyopağa doğru sıralanışı incelendiğinde, aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Metal < Mine < Kortikal kemik
Açıklama: X-ışınını tutma kapasitesi materyalin yoğunluğuyla orantılıdır; metal ve mine en yoğun (radyoopak) materyallerdir. Kortikal kemik, mine ve metalden daha az yoğundur, bu nedenle radyolüsentten radyopağa sıralamada 'Metal < Mine < Kortikal kemik' dizilimi tamamen terstir. Kortikal kemik ve dentin, mineye göre daha radyolüsent tarafta konumlanır.

**Soru 2 (ID: e79a43df-5945-4b53-b2fd-b2585887d296)**
Soru Kökü: Radyografik incelemede doku ve materyaller, X-ışınına karşı gösterdikleri rezistansa göre düşük yoğunluktan yüksek yoğunluğa (radyolüsentten radyopağa) doğru sınıflandırılır. Bu kurala göre aşağıdaki dizilimlerden hangisi **yanlıştır**?
Doğru Şık (D): Kortikal kemik < Trabeküler kemik < Mine
Açıklama: Trabeküler kemik (süngerimsi doku), kortikal kemiğe (sıkı kemik dokusu) göre çok daha fazla boşluk içerir ve daha radyolüsenttir. 'Kortikal kemik < Trabeküler kemik' sıralaması fiziksel radyoloji kurallarına aykırıdır; doğrusu 'Trabeküler kemik < Kortikal kemik' olmalıdır.

---

### ÇİFT 22 (Benzerlik: 0.77)

**Soru 1 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 23 (Benzerlik: 0.77)

**Soru 1 (ID: 1a7fce10-6260-4d9a-b402-0012814faa29)**
Soru Kökü: Aşağıdaki lezyon veya durumlardan hangisinde radyografik olarak 'soğan kabuğu' (onion-skin) şeklinde ardışık lamellated periost reaksiyonu görülmesi **beklenmez**?
Doğru Şık (E): Santral hemanjiyom
Açıklama: Santral hemanjiyomlar soğan kabuğu değil, tipik olarak 'at arabası tekerliği', 'bal peteği' veya 'tekerlek' görünümünde vasküler ağlar oluşturur. Soğan kabuğu görünümü esas olarak inflamatuar olaylarda (osteomiyelit), çocukluk çağı sistemik reaksiyonlarında ve lösemi, Langerhans hücreli histiyozis veya Ewing sarkomu gibi hızlı seyreden spesifik tümörlerde periostun epizodik irritasyonuna bağlı gelişir.

**Soru 2 (ID: 87a5a351-1d1b-4435-a93f-d6e5194c8a57)**
Soru Kökü: Enflamatuar eksüda, kanama veya tümöral hücrelerin periostu dışarıya doğru aralıklı olarak uyarması, korteks dışında lamelli bir kemik yapımına yol açarak radyografide "soğan kabuğu" (onion-skin) paternini oluşturur. Aşağıdakilerden hangisi bu spesifik periost reaksiyonuna neden **olmaz**?
Doğru Şık (A): Basit kemik kisti
Açıklama: Basit kemik kisti medüller kemik içerisinde yavaş büyüyen, genellikle asemptomatik, boşluklu bir psödokisttir ve periost reaksiyonunu uyararak yeni kemik yapımına (soğan kabuğu) neden olmaz. Garre osteomiyeliti (kronik proliferatif periostitis), İnfantil kortikal hiperostoz (Caffey hastalığı) ve Ewing sarkomu periostu sürekli aralıklarla uyararak tipik lamelli soğan kabuğu deseni yaratır.

---

### ÇİFT 24 (Benzerlik: 0.77)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: e6c31376-91c2-4b36-ac8a-6a72b2ca9fc4)**
Soru Kökü: Elli yaşında erkek hasta, son aylarda alt dudağında giderek artan uyuşukluk (anestezi) şikayetiyle kliniğe başvuruyor. Radyografik incelemede inferior alveolar kanalın üst korteksinde ciddi yıkım saptanıyor ve kanal anatomisi boyunca aşağıya doğru gelişen sınırları belirsiz irregüler bir genişleme izleniyor. Bu klinik ve spesifik radyografik bulgular birlikte değerlendirildiğinde aşağıdaki lezyon tiplerinden hangisi **en güçlü** ihtimaldir?
Doğru Şık (D): Malign neoplazm
Açıklama: Malign hücrelerin nörotropik yayılım veya osteoklastik yıkımla sinir kanalını (perineural invazyon) infiltre etmesi, kanal korteksinin düzensizce erimesine (destrüksiyon) ve kliniğe dudak parestezisi/uyuşukluğu (Vincent bulgusu) olarak yansımasına sebep olur. Basit kemik kisti veya dev hücreli lezyonlar (çeldirici şıklar) dişi ve kanalı iter ancak sinir kılıfını invaze etmediği için klinik anestezi tablosuna yol açmaz. Kanalın düzensiz genişlemesiyle birlikte görülen duyu kaybı, aksi ispatlanana kadar osteosarkom veya metastatik malign neoplazm şüphesi doğurur.

---

### ÇİFT 25 (Benzerlik: 0.77)

**Soru 1 (ID: 479ceac7-f2f6-420e-9d56-9b373efb15bf)**
Soru Kökü: Periosteal kemik yapımında tümör hücrelerinin kortekse dik doğrultuda ilerlemesi sonucu oluşan, radyografide dışarı doğru sarkan iğnemsi yapılar formundaki 'güneş ışını' (ışınsal spiküllü) görünüm en karakteristik olarak aşağıdaki tümörlerin hangisinde izlenir?
Doğru Şık (D): Osteosarkom
Açıklama: Osteosarkom hücrelerinin periostu itip Sharpley lifleri boyunca kortekse dik açıyla kemik sentezlemesi 'güneş ışını' veya ışınsal spiküllü kemik örüntüsünü ortaya çıkarır. Multipl miyelom hiçbir reaksiyon vermeyen zımba delikleri yaparken, lenfoma permeatif yıkım sergiler. Bu spiküler yapı malign osteoblastik aktivitenin en radikal radyografik işaretlerinden biridir.

**Soru 2 (ID: 4ae8704d-d250-412b-9c7a-86ffdf7663da)**
Soru Kökü: Reaktif periost kemik oluşumu, alttaki tümöral yapının doğasına göre spesifik desenler oluşturur. Kemiğe dik olarak ışınsal tarzda ilerleyen spiküllerin izlendiği 'güneş ışını' (sunburst) görünümü, aşağıdaki patolojilerden hangisinde **gözlenmez**?
Doğru Şık (D): Pindborg tümörü
Açıklama: Güneş ışını (sunburst) periost reaksiyonu agresif malignitelerde (Osteosarkom, Ewing sarkomu) ve kemik içine yerleşmiş, yüksek basınçlı benign vasküler lezyonlarda (hemanjiyomlar) izlenir. Pindborg tümörü (CEOT) kortikal ekspansiyon yapabilir ancak periost üzerinde ışınsal spiküller değil, iç yapıda amiloid kalsifikasyonuna bağlı 'kar yağdı' manzarası bırakır.

---

### ÇİFT 26 (Benzerlik: 0.77)

**Soru 1 (ID: c751d0dd-1847-4fea-8c22-5acce477fcc9)**
Soru Kökü: Otuz beş yaşında kadın hastanın panoramik radyografik incelemesinde, inferior alveolar sinir kanalının korpus bölgesinde kanal kortikal sınırları tamamen korunarak genişlediği (ekspansiyon) saptanıyor. Nörolojik muayenede herhangi bir uyuşukluk veya parestezi bulgusu saptanmıyor. Bu radyografik bulgular ışığında kanal içindeki lezyonun davranışı hakkında **en olası** yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Vasküler veya nöral kökenli benign bir lezyondur.
Açıklama: İnferior alveolar kanal içinde gelişen nörom, schwannom veya hemanjiom gibi benign (iyi huylu) kökenli lezyonlar oldukça yavaş büyüdükleri için, kanalın ince kortikal sınırını yıkmadan, onu iterek ve intakt bırakarak genişletir. Malign neoplazmlar veya invaziv tümörler (çeldirici şıklar) ise hızla kemik destrüksiyonu yaparak korteksi yıkar ve kanal sınırlarının silinmesine, düzensizleşmesine neden olur. Anatomik kortikal plağın bozulmadan çadır gibi genişlemesi, lezyonun yavaş huylu doğasının ve nöral/vasküler kaynağının kesin göstergesidir.

**Soru 2 (ID: e6c31376-91c2-4b36-ac8a-6a72b2ca9fc4)**
Soru Kökü: Elli yaşında erkek hasta, son aylarda alt dudağında giderek artan uyuşukluk (anestezi) şikayetiyle kliniğe başvuruyor. Radyografik incelemede inferior alveolar kanalın üst korteksinde ciddi yıkım saptanıyor ve kanal anatomisi boyunca aşağıya doğru gelişen sınırları belirsiz irregüler bir genişleme izleniyor. Bu klinik ve spesifik radyografik bulgular birlikte değerlendirildiğinde aşağıdaki lezyon tiplerinden hangisi **en güçlü** ihtimaldir?
Doğru Şık (D): Malign neoplazm
Açıklama: Malign hücrelerin nörotropik yayılım veya osteoklastik yıkımla sinir kanalını (perineural invazyon) infiltre etmesi, kanal korteksinin düzensizce erimesine (destrüksiyon) ve kliniğe dudak parestezisi/uyuşukluğu (Vincent bulgusu) olarak yansımasına sebep olur. Basit kemik kisti veya dev hücreli lezyonlar (çeldirici şıklar) dişi ve kanalı iter ancak sinir kılıfını invaze etmediği için klinik anestezi tablosuna yol açmaz. Kanalın düzensiz genişlemesiyle birlikte görülen duyu kaybı, aksi ispatlanana kadar osteosarkom veya metastatik malign neoplazm şüphesi doğurur.

---

### ÇİFT 27 (Benzerlik: 0.77)

**Soru 1 (ID: 15d1ced1-63e6-4611-bfb0-415f6a49c595)**
Soru Kökü: Aşağıdaki lezyon-radyografik görünüm eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Santral hemanjiyom - Yüzen diş görünümü
Açıklama: Santral hemanjiyom radyografide kaba vasküler kanalların kemik spikülleriyle çevrelenmesine bağlı olarak tipik 'at arabası tekerliği' veya 'tekerlek' görünümü verir; yüzen diş görünümü vermez. Yüzen diş manzarası agresif periodontitis, Langerhans hücreli histiyozis veya malign infiltrasyonlarda diş etrafı kemik desteğinin total kaybı sonucu oluşur. Vasküler kavitasyonlar radyolüsent boşluklar ağından oluşur.

**Soru 2 (ID: 5f113e8c-1fe0-400c-a97f-94a3ed0d3384)**
Soru Kökü: Aşağıdaki kemik patolojileri ve tipik radyografik görünümleri ile ilgili yapılan eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Semento-ossifying fibroma – Çivi kökler
Açıklama: Semento-ossifying fibroma kemik trabekülleri ve sementum benzeri doku üretimi nedeniyle radyografide 'yumurta kabuğu' veya 'buzlu cam' görünümü verebilir; çivi kökler oluşturmaz. Çivi kökler, agresif rezorpsiyon yapan Burkitt tümörü veya malignant histiyositoma gibi lezyonların spesifik işaretidir. Diğer seçeneklerdeki patoloji-patern eşleştirmeleri literatürdeki karakteristik kalsifikasyon ve yıkım formlarıyla tam uyumludur.

---

### ÇİFT 28 (Benzerlik: 0.77)

**Soru 1 (ID: 7e4236ba-74e7-434b-8ad9-4bfbf83a86f6)**
Soru Kökü: Yirmi beş yaşında erkek hasta, geçirilmiş bir diş çekimi sonrası geçmeyen ağrı, akıntı ve bölgesel lenfadenopati şikayetiyle başvuruyor. Çenelerin anatomik, kortikal ve vasküler yapı farklılıkları göz önüne alındığında, bu hastada osteomiyelit gelişiminin radyografik olarak aşağıdaki bölgelerin hangisinde saptanma olasılığı **en yüksektir**?
Doğru Şık (C): Mandibula gövde bölgesi
Açıklama: Osteomiyelit, zengin damar ağına sahip spongiyöz maksilladan ziyade, kalın kortikal tabakası ve tekil bir arteriyel kanlanması (inferior alveolar arter) olan mandibulada çok daha sık gelişir. Maksillada iyi kolateral dolaşım kemik enfeksiyonunun yayılımını engellerken, mandibulada iskemik nekroz daha kolay başlar. Bu anatomik-vasküler fark osteomiyelitin mandibula predileksiyonunun ana nedenidir.

**Soru 2 (ID: d3ca8fe5-195f-4c8b-8950-f0e7b6a77515)**
Soru Kökü: Maksillofasiyal bölgede enfeksiyöz süreçlerin anatomik yayılımı kemik vaskülarizasyonu ile yakından ilişkilidir. Buna göre, pürülan eksüdanın medüller kemik içinde yayılarak osteomiyelit oluşturma olasılığı aşağıdaki bölgelerin hangisinde **en azdır**?
Doğru Şık (D): Maksilla
Açıklama: Maksillanın yüksek vaskülarizasyonu ve nispeten ince kortikal yapısı, enfeksiyonların kemik içinde hapsolmasını engelleyerek osteomiyelit gelişimine karşı güçlü bir anatomik direnç sağlar. Mandibula ise kalın korteksi ve sınırlı kan akımı nedeniyle enfeksiyöz eksüdanın medüller boşlukta yayılarak osteomiyelit oluşturmasına çok daha yatkındır. Bu radyolojik-anatomik korelasyon nedeniyle, osteomiyelitin primer merkez üssünün maksillada saptanması son derece nadir bir durumdur.

---

### ÇİFT 29 (Benzerlik: 0.76)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

---

### ÇİFT 30 (Benzerlik: 0.76)

**Soru 1 (ID: 5fdf1fd5-fcf3-44b3-8854-6ab661d22f02)**
Soru Kökü: Yirmi iki yaşında kadın hasta, dişlerinde aşırı renklenme ve kronlarda yavaş yavaş aşınma şikayetiyle başvurmuştur. Alınan panoramik radyografide maksilla ve mandibuladaki tüm dişleri kapsayan bir anomali izlenmiş olup, diş kronları bulböz, kökleri kısa ve pulpa odaları tamamen oblitere durumdadır. Kaynak metinde spesifik olarak 'midye şekilli dişler' görünümü ile eşleştirilen bu anomali aşağıdakilerden hangisidir?
Doğru Şık (B): Dentinogenezis imperfekta
Açıklama: Dentinogenezis imperfekta, diş kronlarında soğan zarı/bulböz şekil ve servikal daralma yaratarak 'midye şekilli dişler' paterni üreten tek kalıtsal dental anomalidir. Odontodisplazi ise dişin tüm mine ve dentin katmanlarını çok zayıf üreterek radyolusent bir 'hayalet diş' profili çizer. Kemik yapılarının normal olup sadece diş morfolojisinin bu spesifik forma bürünmesi tanıyı kesinleştirir.

**Soru 2 (ID: 6dd4b923-66f8-44a6-9cdd-f1cb34729598)**
Soru Kökü: Radyografik yorumlamada dişlerin morfolojik anomalileri belirli sistemik veya genetik defektleri yansıtabilir. Sadece diş yapılarını etkileyen ve 'midye şekilli dişler' görünümü ile karakterize olan patoloji aşağıdakilerden hangisidir?
Doğru Şık (A): Dentinogenezis imperfekta
Açıklama: Dentinogenezis imperfekta, spesifik olarak diş kronlarının bulböz, köklerin kısa olduğu ve pulpa odasının oblitere olduğu 'midye şekilli dişler' radyografik manzarasıyla tanı alır. Osteopetrozis veya Paget hastalığı gibi kemik displazileri doğrudan çene kemiğinin yoğunluğunu değiştirir ('tebeşir benzeri' veya 'atılmış pamuk'). Sadece dental yapıları etkileyerek midye formasyonu yaratan bu kalıtsal dentin defekti, kemik patolojilerinden net bir şekilde ayrılır.

---

### ÇİFT 31 (Benzerlik: 0.76)

**Soru 1 (ID: e4d31efd-cec0-4138-b0e7-0a32b7b1165a)**
Soru Kökü: Pindborg tümörü, karakteristik kalsifikasyon paternleriyle tanınan epitel kökenli bir patolojidir. Bu tümörün radyografik iç yapısında aşağıdaki görünümlerden hangileri izlenebilir?

I. Kum benzeri görünüm
II. Kar yağdı manzarası
III. Bal peteği görünümü
Doğru Şık (C): I ve II
Açıklama: Pindborg tümörü (kalsifiye epitelyal odontojenik tümör), kalsifiye kütlelerin boyut ve dağılımına bağlı olarak hem 'kar yağdı manzarası' hem de 'kum benzeri görünüm' oluşturabilir. Bal peteği görünümü ise bu lezyonda izlenmez; daha çok ameloblastoma veya odontojenik miksoma gibi multilocüler lezyonların özelliğidir. Bu iki farklı kalsifikasyon paterninin aynı lezyonda raporlanması, Pindborg tümörünün radyografik spektrumunun genişliğini yansıtır.

**Soru 2 (ID: f7b4651c-bfc4-4d55-b098-2925213699be)**
Soru Kökü: Hangi lezyonlar radyografide distrofik veya neoplastik kalsifikasyonlara bağlı olarak 'kum benzeri görünüm' sergileyebilir?

I. Pindborg tümörü
II. Gorlin kisti
III. Adenoameloblastoma
IV. Anevrizmal kemik kisti
Doğru Şık (C): I, II ve III
Açıklama: Kum benzeri görünüm, kalsifiye epitel veya dentinoid doku odaklarının dağınık ve küçük partiküller halinde birikmesiyle oluşur; bu durum Pindborg, Gorlin ve Adenoameloblastoma tümörlerinde ortaktır. Anevrizmal kemik kistinde kalsifikasyon yerine sıvı dolu kanalların etrafındaki septalar 'sabun köpüğü' veya 'taraklı' paternler yaratır. Bu kalsifikasyon paterni, epitel-mezankim etkileşimli tümörleri vasküler veya reaktif kistlerden net olarak ayırır.

---

### ÇİFT 32 (Benzerlik: 0.76)

**Soru 1 (ID: 7a9e6986-c405-410a-9113-5596ed7c0863)**
Soru Kökü: Kistlerin radyografik görüntülemesinde izlenen 'kortikal sınır' (radyoopak perifer) yapısıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Kistin kendi epitel veya bağ dokusu duvarının radyografik görüntüsüdür.
Açıklama: Kist çevresinde izlenen beyaz kortikal sınır, kist epitelinin veya bağ dokusunun kendi yapısı değil; konağın kistin yavaşça artan hidrolik basıncına karşı oluşturduğu koruyucu bir osteoblastik kemik reaksiyonudur (radyoopak çevre kemik reaksiyonu). Epitel ve bağ dokusu su içeriği nedeniyle radyolusent görünür ve radyografide tek başına radyoopak bir sınır çizemez. Bu kavramın iyi bilinmesi, radyopasitenin aslında sağlıklı kemiğin bir savunma duvarı (sklerotik bariyer) olduğunun klinisyen tarafından doğru yorumlanmasını sağlar.

**Soru 2 (ID: b8de9734-9b25-4ac7-bc04-912608f6faf3)**
Soru Kökü: Radyografik sınır analizi ve periferik kemik reaksiyonları ile ilgili aşağıdaki bilgilerden hangisi **yanlıştır**?
Doğru Şık (B): Bir kistin radyografik olarak izlenen kortikal sınırı, fizyolojik olarak kistin kendi epiteline ait bir yapıdır.
Açıklama: Radyografide görülen kistin kortikal sınırı kistin kendisine ait hücresel bir yapı değil, genişleyen kiste karşı çevre kemiğin gösterdiği bir reaksiyondur. Sklerotik sınır veya osteoblastik reaksiyonlar tamamen ev sahibi dokunun patolojiye verdiği savunma ve adaptasyon yanıtlarıdır. Bu radyografik sınırlar lezyonun büyüme hızı hakkında doğrudan bilgi sağlar.

---

### ÇİFT 33 (Benzerlik: 0.76)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 34 (Benzerlik: 0.76)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 35 (Benzerlik: 0.76)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: 2bfba921-dea3-4681-b558-912976f6dfb1)**
Soru Kökü: Yirmi sekiz yaşındaki hastada kavisli ve kalın kemik septalarının iç içe geçmesiyle oluşan, hidrolik büyüme paternli multiloküler bir yapı izlenmiştir. Radyolojik raporda 'sabun köpüğü' görünümü olarak tarif edilen bu lezyon paterni, aşağıdakilerden hangisine aittir?
Doğru Şık (A): Ameloblastom
Açıklama: Ameloblastomda oluşan iç septalar kavisli ve kalındır; bu da radyografide multiloküler 'sabun köpüğü' (soap bubble) paternini yaratır. Odontojenik miksomada ise septalar genellikle düz ve ince olup 'tenis raketi' manzarası oluşturur. Basit kemik kisti taraklı kenar yapar ancak gerçek iç septa oluşturmaz.

---

### ÇİFT 36 (Benzerlik: 0.76)

**Soru 1 (ID: 0dde3e7c-c7e5-420b-b532-e693ebc766b7)**
Soru Kökü: Maksillofasiyal kompleksin konvansiyonel radyografik görüntülerinde, biyolojik materyallerin X-ışını tutulumlarına göre iç yapı dansiteleri radyolusentten (en koyu) radyoopağa (en açık) doğru spesifik bir sıra izler. Buna göre aşağıdakilerden hangisi radyasyon geçirgenliğinin **en az** (en yüksek radyoopasite) olduğu dokudur?
Doğru Şık (D): Kortikal kemik
Açıklama: Sıralama Hava -> Yağ -> Sıvı -> Yumuşak doku -> Kemik iliği -> Trabeküler kemik -> Kortikal kemik/Dentin -> Mine -> Metal şeklinde ilerler, bu nedenle seçenekler arasında kortikal kemik en yüksek radyoopasiteye (radyasyon geçirgenliğinin en az olduğu doku) sahiptir. Hava ve yağ fotonları durduramadığından tamamen radyolusent görünürken, kortikal kemiğin yüksek mineral yoğunluğu filmi beyaz bırakır. Mine ve metal şıklarda bulunmadığından doğru yanıt D'dir.

**Soru 2 (ID: 907db4d5-fa69-47d0-bf54-b2cc0ba46365)**
Soru Kökü: Düz radyografilerdeki internal yapıların materyal yoğunluğuna göre radyolüsentten radyopağa doğru sıralanışı incelendiğinde, aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Metal < Mine < Kortikal kemik
Açıklama: X-ışınını tutma kapasitesi materyalin yoğunluğuyla orantılıdır; metal ve mine en yoğun (radyoopak) materyallerdir. Kortikal kemik, mine ve metalden daha az yoğundur, bu nedenle radyolüsentten radyopağa sıralamada 'Metal < Mine < Kortikal kemik' dizilimi tamamen terstir. Kortikal kemik ve dentin, mineye göre daha radyolüsent tarafta konumlanır.

---

### ÇİFT 37 (Benzerlik: 0.76)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 38 (Benzerlik: 0.76)

**Soru 1 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 39 (Benzerlik: 0.76)

**Soru 1 (ID: 385def3b-0df9-4859-ba79-1f674c7f92a7)**
Soru Kökü: 65 yaşında erkek hasta sağ üst çenesinde hızla büyüyen sert bir kitle ile kliniğe başvuruyor. Panoramik radyografide alveolar kretten maksiller sinüse doğru uzanan, kemik yapısında sınırları belirsiz ve infiltratif özellik gösteren yaygın bir "permeatif yıkım" paterni izleniyor. Tablo 9'da sunulan klasik görünümler referans alındığında, bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Maksilla karsinomu
Açıklama: Maksilla karsinomu (Carcinoma of the maxilla), alveolar proçesten sinüs tabanına kadar kemik trabeküllerini agressif şekilde eriten invaziv bir tümördür ve radyografide kemiği sünger gibi yiyen permeatif yıkım manzarası gösterir. Malign lenfoma da permeatif yıkım yapabilse de, maksilla epitelyal dokusu kaynaklı hızlı agresyon klinik ve demografik olarak maksilla karsinomuna daha spesifiktir.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 40 (Benzerlik: 0.76)

**Soru 1 (ID: 479ceac7-f2f6-420e-9d56-9b373efb15bf)**
Soru Kökü: Periosteal kemik yapımında tümör hücrelerinin kortekse dik doğrultuda ilerlemesi sonucu oluşan, radyografide dışarı doğru sarkan iğnemsi yapılar formundaki 'güneş ışını' (ışınsal spiküllü) görünüm en karakteristik olarak aşağıdaki tümörlerin hangisinde izlenir?
Doğru Şık (D): Osteosarkom
Açıklama: Osteosarkom hücrelerinin periostu itip Sharpley lifleri boyunca kortekse dik açıyla kemik sentezlemesi 'güneş ışını' veya ışınsal spiküllü kemik örüntüsünü ortaya çıkarır. Multipl miyelom hiçbir reaksiyon vermeyen zımba delikleri yaparken, lenfoma permeatif yıkım sergiler. Bu spiküler yapı malign osteoblastik aktivitenin en radikal radyografik işaretlerinden biridir.

**Soru 2 (ID: 6aea0ff8-5da5-4551-ab25-1fcdb0437d63)**
Soru Kökü: Periost reaksiyonlarının radyografik tiplendirilmesinde, kortikal plağın delinmesiyle kemik yüzeyine dik olarak (radyal) dışarıya uzanan yeni kemik spiküllerinden oluşan 'ışınsal spiküllü' (sunburst / güneş ışını) görünüm malign davranışa işaret eder. Tipik olarak osteosarkomda görülen bu kemik örüntüsü, nadiren de olsa aşağıdaki benign vasküler lezyonlardan hangisinde radyografik olarak izlenebilir?
Doğru Şık (B): Hemanjiom
Açıklama: Santral hemanjiomlar kemik içi trabekülleri yeniden şekillendirirken (at arabası tekerleği manzarası) periost dışına taştıklarında radyal yerleşimli kan damarları boyunca gerçekleşen mineralizasyon, periosta dik uzanan ışınsal spiküllere (sunburst görünümü) neden olabilir. Ameloblastom veya miksoma (çeldirici şıklar) gibi agresif epitelyal tümörlerde dış periostta güneş ışını tarzında spiküler kalsifikasyon kesinlikle izlenmez, bu tümörler sadece korteksi inceltir. Sunburst görünümü osteosarkom için patognomonik kabul edilse de, yüksek akımlı santral hemanjiomlar mutlaka ayırıcı tanıda yer tutmalıdır.

---

### ÇİFT 41 (Benzerlik: 0.75)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: e2470054-76ac-499b-af7e-40ea93628437)**
Soru Kökü: Bir maksillofasiyal lezyonun radyografik değerlendirmesinde, dairesel yapıda ve her yöne eşit genişlemiş, 'şişirilmiş bir balona' benzer biçimde hidrolik bir büyüme formasyonu tespit edilmiştir. Bu radyografik makroskobik biçim primer olarak aşağıdaki patoloji gruplarının hangisinin karakteristik özelliğidir?
Doğru Şık (A): Kistler
Açıklama: Şişirilmiş bir balon (hidrolik) görünümü, lümen içerisindeki sıvının epitelyal duvara dışa doğru eşit hidrostatik basınç uygulaması prensibiyle büyüyen kistlere özgü bir morfolojidir. Displaziler veya maligniteler çevresel direnç bölgelerine veya anatomik planlara göre asimetrik invazyon gösterirler. Bu osmotik basınç mekanizması, kistlerin neden pürüzsüz ve dairesel sınırlar çizdiğinin fiziksel açıklamasıdır.

---

### ÇİFT 42 (Benzerlik: 0.75)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

---

### ÇİFT 43 (Benzerlik: 0.75)

**Soru 1 (ID: 05a5d6c7-43b0-4b19-9c87-bb74eb1d4a8b)**
Soru Kökü: Sekiz yaşında erkek çocuk hasta, alt çenesinde her iki tarafta giderek artan ağrısız şişlik şikayetiyle başvuruyor. Alınan panoramik radyografide her iki mandibular angulus ve ramus bölgesinde genişlemeye neden olan multiloküler radyolusent alanlar izleniyor. Çenelerde her zaman bilateral yerleşim gösterdiği bilinen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Cherubism
Açıklama: Çenelerdeki lezyonların bölgesel veya genel yerleşimli olması tanıda kritik bir filtredir ve cherubism mandibula ile maksillada her zaman bilateral ekspansiyonlarla karakterize genetik bir hastalıktır. Sıklıkla angulus bölgesinde görülen ameloblastom veya miksoma gibi odontojenik tümörler ise tipik olarak tek taraflı (unilateral) büyüme eğilimindedir. Radyografide bilateral simetrik multiloküler yıkım gören bir klinisyen yaş faktörüyle birlikte doğrudan cherubism tanısına yönelmelidir.

**Soru 2 (ID: 3e9e395a-8af3-467e-8d56-5dbcb4d6f73a)**
Soru Kökü: Maksillofasiyal bölgede görülen patolojik lezyonların dağılımı değerlendirildiğinde, aşağıdaki hastalıklardan hangisinin radyografik olarak çenelerde her zaman iki taraflı (bilateral) lokalizasyon göstermesi beklenir?
Doğru Şık (C): Paget hastalığı
Açıklama: Maksillofasiyal bölgede lokalize patolojik lezyonlar genellikle tek taraflı görülse de, Paget hastalığı çeneleri etkilediğinde sistemik doğası gereği her zaman iki taraflı (bilateral) tutulum yapar. Güçlü bir çeldirici olan osteomiyelit ise genellikle mandibulada lokalize ve tek taraflı enfeksiyöz bir reaksiyon olarak karşımıza çıkar. Bu nedenle çenelerde generalize bilateral genişleme saptanması, Paget hastalığı ve cherubism gibi spesifik hastalıkların ayırıcı tanısında altın standarttır.

---

### ÇİFT 44 (Benzerlik: 0.75)

**Soru 1 (ID: 7a9e6986-c405-410a-9113-5596ed7c0863)**
Soru Kökü: Kistlerin radyografik görüntülemesinde izlenen 'kortikal sınır' (radyoopak perifer) yapısıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Kistin kendi epitel veya bağ dokusu duvarının radyografik görüntüsüdür.
Açıklama: Kist çevresinde izlenen beyaz kortikal sınır, kist epitelinin veya bağ dokusunun kendi yapısı değil; konağın kistin yavaşça artan hidrolik basıncına karşı oluşturduğu koruyucu bir osteoblastik kemik reaksiyonudur (radyoopak çevre kemik reaksiyonu). Epitel ve bağ dokusu su içeriği nedeniyle radyolusent görünür ve radyografide tek başına radyoopak bir sınır çizemez. Bu kavramın iyi bilinmesi, radyopasitenin aslında sağlıklı kemiğin bir savunma duvarı (sklerotik bariyer) olduğunun klinisyen tarafından doğru yorumlanmasını sağlar.

**Soru 2 (ID: a8b1edf1-7d32-42b5-aa34-7b0119cb5c6f)**
Soru Kökü: Radyografik olarak 'kaynaşmış sınır' (belirsiz sınır) izlenen kemik lezyonlarının özellikleri değerlendirildiğinde, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Bu sınır tipi yavaş büyüyen iyi huylu tümörlerin ve gelişimsel kistlerin karakteristik özelliğidir.
Açıklama: Kaynaşmış sınır, lezyon trabekülleri ile normal kemik arasında geniş bir geçiş bölgesinin bulunduğu belirsiz bir formdur ve klasik olarak sklerozan osteitiste (kondensing osteitis) görülür. Yavaş büyüyen gelişimsel kistler veya iyi huylu tümörler (yanlış olan seçenek) bu şekilde difüz yayılım göstermez; aksine ince ve homojen bir radyoopak hatla (kortikal kenar) iyi sınırlı formda izlenirler. Bu radyografik ayrım, inflamatuar reaktif skleroz ile ekspansif kistik büyümenin birbirinden ayırt edilmesinde klinisyene doğrudan yol gösterir.

---

### ÇİFT 45 (Benzerlik: 0.75)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 46 (Benzerlik: 0.75)

**Soru 1 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

**Soru 2 (ID: dd50752a-955c-4503-b46f-e50555d8cdf2)**
Soru Kökü: Kemik içi lezyonların radyografik sınır özellikleri, lezyonun doğası ve çevre dokuyla etkileşimi hakkında bilgi verir. Dışta iyi sınırlı ince bir kortikal radyoopak perifer ve onun hemen iç kısmında radyolusent bir boşlukla karakterize 'yumuşak doku kapsülü' görünümü aşağıdaki lezyonların hangisinde izlenir?
Doğru Şık (D): Odontom
Açıklama: Odontom ve sementoblastom gibi iyi huylu, kapsüllü odontojenik tümörler, etraflarındaki bağ dokusu kapsülü nedeniyle kalsifiye kitle ile komşu kemik arasında radyolusent bir hat (yumuşak doku kapsülü) ve en dışta reaktif bir kortikal sınır barındırır. Sklerozan osteitiste ise tam tersine kapsülsüz, kemikle kaynaşmış, sınırları belirsiz bir skleroz alanı izlenir. Radyografide tespit edilen bu radyolusent kapsül boşluğu, lezyonun çevre kemikten net bir şekilde ayrıştığını ve cerrahi olarak kolayca enükle edilebileceğini gösterir.

---

### ÇİFT 47 (Benzerlik: 0.75)

**Soru 1 (ID: 0efef2eb-b6b5-4ef2-9f03-3fbc58af4cec)**
Soru Kökü: Kemik içi lezyonların şekli, genellikle patofizyolojik mekanizmalarıyla paraleldir. Sıvı basıncının etkisiyle hidrolik olarak genişleyen, radyografide dairesel veya şişirilmiş bir balon biçiminde ('balon benzeri') bir şekil alan kemik patolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti (ve foliküler kistler), içerdikleri sıvı veya kan volümünün hidrolik basıncı sayesinde kemiği dışa doğru iterek 'şişirilmiş balon' formunda izole, yuvarlak genişlemelere neden olur. Fibröz displazi sıvı değil kemik matriksiyle dolu olduğundan merkezsiz büyürken, osteomlar yoğun radyoopak kitlelerdir. Balon görünümü kistik/hidrolik dinamiğin kanıtıdır.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 48 (Benzerlik: 0.75)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: 8ced98a5-1dbe-42b8-a050-175ce27ba8bc)**
Soru Kökü: 28 yaşında kadın hasta, üst sağ bölgesinde ağrısız bir şişlik fark ediyor. Periapikal radyografide, maksiller sağ lateral kesici ve kanin dişlerin köklerini birbirinden ayırarak superiora doğru genişleyen, inferiora (alveol kretine) doğru daralan karakteristik "armut şekilli" (pear-shaped) radyolüsent lezyon saptanıyor. Dişler vital olduğuna göre, en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Globulomaksiller kist
Açıklama: Globulomaksiller kist, adını yerleşim yerinden alan ve anatomik olarak her zaman maksiller lateral ve kanin dişleri arasına yerleşerek onları diverjan hale getiren ters dönmüş 'armut' formunda bir gelişimsel/fissüral kisttir. Dişlerin vital olması kökeninin pulpa enfeksiyonu (radiküler kist) olmadığını kesinleştirir.

---

### ÇİFT 49 (Benzerlik: 0.75)

**Soru 1 (ID: 545bd233-0643-407d-bafe-e795756c8058)**
Soru Kökü: Çene kemiklerinde izlenen bazı sekonder (metastatik) anomaliler, bulundukları alanda sadece litik kemik yıkımı yapmakla kalmaz, periferik osteoblastik reaksiyonu (yeni kemik yapımını) güçlü bir şekilde uyararak radyoopak (sklerotik) görünüme neden olabilirler. Aşağıdaki organların hangilerinden kaynaklanan metastatik lezyonların, çenelerde bu tip belirgin bir osteoblastik reaksiyon uyarması **en olasıdır**?
Doğru Şık (C): Prostat ve meme
Açıklama: Karsinom metastazlarının çoğu çenelerde osteoklastik aktivite ile radyolusent yıkım yaparken, prostat kanseri ve meme kanseri (özellikle tedavili) tümör hücrelerinden salınan faktörlerle yoğun osteoblastik proliferasyonu tetikleyerek sklerotik/radyoopak lezyonlar oluşturur. Tiroid, akciğer veya böbrek metastazları (çeldirici şıklar) kemikte kalsiyum birikimini uyarmaz, saf litik, güve yeniği tarzı radyolusensiler yaratır. Radyografide ileri yaşlı bir hastada generalize irregüler radyoopasiteler izlenirse, klinisyen mutlaka prostat veya meme metastazı öyküsünü sorgulamalıdır.

**Soru 2 (ID: 8d03871e-488a-4630-8c85-127daa78a946)**
Soru Kökü: Altmış beş yaşındaki erkek hastanın çene grafilerinde, normal trabeküler paternin yerini almış belirgin bir reaktif kemik üretimi saptanmıştır. Anamnezinde malinite hikayesi olan hastada gözlenen bu 'osteoblastik reaksiyon', en olası hangi primer odaklı metastazın sonucudur?
Doğru Şık (C): Prostat
Açıklama: Prostat ve meme dokusundan kaynaklanan metastatik lezyonlar, çene kemiklerinde yıkımdan (osteolitik) ziyade kemik yapımını tetikleyerek karakteristik bir 'osteoblastik reaksiyon' oluştururlar. Diğer birçok organ karsinomu (akciğer, mide, tiroid) çenelerde sınırları belirsiz invaziv (permeatif/güve yeniği) osteolitik radyolüsensiler meydana getirir.

---

### ÇİFT 50 (Benzerlik: 0.75)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: 8803305a-729d-4496-a3b8-df66006c17da)**
Soru Kökü: Merkez üssü mandibular kanal (IAC) bölgesinde lokalize bir patolojinin radyografik değerlendirmesinde, lezyonun diş kökleriyle ilişkisiz biçimde doğrudan IAC'nin **içinden** kaynaklandığı belirlenmiştir. Bu dokunun histolojik kökeninin aşağıdakilerden hangisi olması en kuvvetli olasılıktır?
Doğru Şık (C): Nöral veya vasküler yapılar
Açıklama: İnferior alveolar kanal içerisinde yer alan inferior alveolar sinir, arter ve ven dolayısıyla IAC içerisinden köken alan bir lezyonun nöral (nörom, nörofibrom, schwannom) veya vasküler (hemanjiyom) kökenli olması anatomik bir zorunluluktur. Odontojenik yapılar (ameloblastik kalıntılar, sementoblastlar) kanaldan bağımsız olarak daha koronal alveolar proçeste konumlanırlar. IAC kortikal sınırının bozulmadan genişlemesi de sıklıkla bu kanal içi iyi huylu vasküler/nöral patolojilere işaret eder.

---

### ÇİFT 51 (Benzerlik: 0.75)

**Soru 1 (ID: 379a58e0-2df6-4f67-b60c-2ea3fc9a058f)**
Soru Kökü: 12 yaşında erkek hasta, çenesine aldığı şiddetli darbeden birkaç hafta sonra mandibula korpusunda sert bir genişleme fark ederek kliniğe başvuruyor. Oklüzal radyografide mandibular korteksin dışında, kemik yüzeyine paralel ve tabaka tabaka ilerleyen "soğan kabuğu" manzarasına sahip yeni kemik yapımı saptanıyor. Travma öyküsü ile birlikte bu radyografik patern en çok hangi tanı ile uyumludur?
Doğru Şık (B): Ossifying subperiosteal hematom
Açıklama: Travma sonrası periost altında biriken kanama (hematom), zamanla organize olarak kemikleşir (ossifying subperiosteal hematom) ve bu süreç radyografide korteks üzerinde ardışık lamelli 'soğan kabuğu' reaksiyonu olarak izlenir. Osteosarkom travmadan bağımsız agresif bir seyir izler ve daha çok güneş ışını formasyonu verir.

**Soru 2 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

---

### ÇİFT 52 (Benzerlik: 0.75)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: ec488eab-1298-4c40-b290-12300732bb6e)**
Soru Kökü: Odontojenik tümörlerin radyografik iç yapı analizinde septa morfolojisi ayırıcı tanıda kritik öneme sahiptir. Aşağıdaki lezyonlardan hangisi tipik olarak düz ve ince iç bölmeler (septalar) sergileyerek diğer multiloküler lezyonlardan ayrılır?
Doğru Şık (E): Odontojenik miksoma
Açıklama: Odontojenik miksomalar iç yapılarında kemiksi septalar bulundurur ve bu septalar ameloblastomdan farklı olarak genellikle düz, ince bölmeler şeklindedir. Anevrizmal kemik kisti veya keratokistlerde ise balon veya dalgalı şekilli genişlemeler daha ön plandadır. İç yapının bu ince organizasyonu tümörün miksomatöz içeriğiyle mekanik bir korelasyon gösterir.

---

### ÇİFT 53 (Benzerlik: 0.75)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 54 (Benzerlik: 0.75)

**Soru 1 (ID: 05a5d6c7-43b0-4b19-9c87-bb74eb1d4a8b)**
Soru Kökü: Sekiz yaşında erkek çocuk hasta, alt çenesinde her iki tarafta giderek artan ağrısız şişlik şikayetiyle başvuruyor. Alınan panoramik radyografide her iki mandibular angulus ve ramus bölgesinde genişlemeye neden olan multiloküler radyolusent alanlar izleniyor. Çenelerde her zaman bilateral yerleşim gösterdiği bilinen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Cherubism
Açıklama: Çenelerdeki lezyonların bölgesel veya genel yerleşimli olması tanıda kritik bir filtredir ve cherubism mandibula ile maksillada her zaman bilateral ekspansiyonlarla karakterize genetik bir hastalıktır. Sıklıkla angulus bölgesinde görülen ameloblastom veya miksoma gibi odontojenik tümörler ise tipik olarak tek taraflı (unilateral) büyüme eğilimindedir. Radyografide bilateral simetrik multiloküler yıkım gören bir klinisyen yaş faktörüyle birlikte doğrudan cherubism tanısına yönelmelidir.

**Soru 2 (ID: dc811d3f-b017-4303-a4c2-841aa9b44e11)**
Soru Kökü: Maksillofasiyal bölgede patolojik lezyonlar genellikle lokalize ve tek taraflı olma eğilimindedir. Ancak aşağıdakilerden hangisi çenelerde karakteristik olarak her zaman iki taraflı (bilateral) görülmesi beklenen durumlardan biridir?
Doğru Şık (C): Cherubism
Açıklama: Cherubism ve Paget hastalığı, gelişimsel ve metabolik genetik doğaları gereği çeneleri her zaman bilateral olarak etkileyen nadir hastalıklardandır. Ameloblastom ve dev hücreli granülom tipik olarak çenelerde tek taraflı lokalize genişlemeler şeklinde izlenir. Bilateral prezentasyon, ayırıcı tanıda sistemik veya genetik tabanlı bir anomaliyi işaret eden en güçlü bulgudur.

---

### ÇİFT 55 (Benzerlik: 0.75)

**Soru 1 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 56 (Benzerlik: 0.75)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 57 (Benzerlik: 0.75)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

---

### ÇİFT 58 (Benzerlik: 0.75)

**Soru 1 (ID: 7c92e118-400b-4dd5-95a4-0f37d6f2d9e4)**
Soru Kökü: Çene kemiklerini genişleten fibro-osseöz lezyonlarda patolojinin dış kortikal plaka üzerindeki etkisi ve intraosseöz büyüme paterni tanıya yardımcıdır. Bu lezyonların gelişim özellikleriyle ilgili aşağıdaki açıklamalardan hangisi **yanlıştır**?
Doğru Şık (C): Ossifiye fibrom (ossifying fibroma), kemik boyunca belirli bir merkezi olmaksızın lineer uzanan difüz bir büyüme paterni gösterir.
Açıklama: Ossifiye fibrom neoplastik doğası gereği belirli bir gelişim merkezinden çevreye doğru küresel, eşmerkezli (konsantrik) ve iyi sınırlı bir büyüme paterni gösterir. Fibröz displazi ise gelişimsel bir anomali olduğundan belirgin bir merkezi yoktur; kemiğin normal anatomisi boyunca difüz (lineer/uzanan) bir büyüme paterni sergiler (yanlış olan seçenek). Büyüme vektörlerindeki bu temel morfolojik fark (konsantrik vs. difüz uzanım), iki majör fibro-osseöz lezyonun radyografik ayrımındaki altın standart kuraldır.

**Soru 2 (ID: d1f1b8ee-5413-44d3-be9b-6e7c8e372fb4)**
Soru Kökü: Çene lezyonlarının dış kortikal plaka üzerindeki etkisi tümörün büyüme hızına bağlıdır. Aşağıdaki displazi türlerinden hangisi belirli bir merkez üssü olmaksızın tüm kemik boyunca yayılan bir büyüme paterni göstererek dış korteksi genişletir?
Doğru Şık (D): Fibröz displazi
Açıklama: Fibröz displazi, belirli bir odak veya merkez üssü olmaksızın kemiğin tamamını difüz olarak etkileyen ve buzlu cam görünümüyle dış konturları genişleten gelişimsel bir anomalidir. Buna karşılık ossifying fibroma, belirgin bir merkeze (eşmerkezli büyüme) sahip, etrafındaki dokuları iterek sınırlandıran yavaş büyüyen bir tümördür.

---

### ÇİFT 59 (Benzerlik: 0.75)

**Soru 1 (ID: 379a58e0-2df6-4f67-b60c-2ea3fc9a058f)**
Soru Kökü: 12 yaşında erkek hasta, çenesine aldığı şiddetli darbeden birkaç hafta sonra mandibula korpusunda sert bir genişleme fark ederek kliniğe başvuruyor. Oklüzal radyografide mandibular korteksin dışında, kemik yüzeyine paralel ve tabaka tabaka ilerleyen "soğan kabuğu" manzarasına sahip yeni kemik yapımı saptanıyor. Travma öyküsü ile birlikte bu radyografik patern en çok hangi tanı ile uyumludur?
Doğru Şık (B): Ossifying subperiosteal hematom
Açıklama: Travma sonrası periost altında biriken kanama (hematom), zamanla organize olarak kemikleşir (ossifying subperiosteal hematom) ve bu süreç radyografide korteks üzerinde ardışık lamelli 'soğan kabuğu' reaksiyonu olarak izlenir. Osteosarkom travmadan bağımsız agresif bir seyir izler ve daha çok güneş ışını formasyonu verir.

**Soru 2 (ID: 5fc99b65-b5ae-426d-9d56-1e8e3d219242)**
Soru Kökü: 16 yaşında erkek hasta, posterior mandibulada çok hızlı büyüyen, ağrılı, asimetrik şişlik ile acil servise başvuruyor. Panoramik radyografisinde tümörün dış kortikal tabakayı yırtıp periostu hızla yukarı kaldırdığı ve bu kaldırma noktasında üçgen şeklinde kesintili reaktif bir kemik birikimi oluştuğu izleniyor. İskelet sisteminde 'Codman üçgeni' olarak isimlendirilen bu kritik görünüm en sık hangi malignitede saptanır?
Doğru Şık (E): Osteosarkom
Açıklama: Hızlı ilerleyen osteosarkom lezyonu korteksi delerek periostu çevre dokuya doğru sıyırır; periostun kemiğe yapışık kaldığı taban köşesindeki reaktif yeni kemikleşme 'Codman üçgeni'ni meydana getirir. Karsinomlar genellikle güve yeniği tarzında lokal kortikal destrüksiyon yapar, bu tip spesifik periost reaksiyonunu uyarmaz. Codman üçgeni, hücrelerin subperiosteal boşlukta agresif yükselişinin kanıtıdır.

---

### ÇİFT 60 (Benzerlik: 0.75)

**Soru 1 (ID: 1887d30f-b0e1-4047-b4f5-f111849ecfe5)**
Soru Kökü: Radyografik yorumlamada doku ve materyallerin radyoopasite sıralaması (radyolusentten radyoopağa doğru) tanısal algoritmanın temelidir. Bu prensibe göre aşağıda verilen dizilimlerden hangisi biyolojik yapıları ve vücut boşluklarını doğru sırada listelemektedir?
Doğru Şık (A): Hava < Sıvı < Kortikal kemik < Mine
Açıklama: X-ışınları düşük yoğunluklu ortamlardan serbestçe geçerek siyah (radyolusent) bir iz bırakırken, yüksek atom numaralı ve yoğun dokularda zayıflar ve filmi beyaz (radyoopak) bırakırlar. Buna göre en radyolusent materyal Hava'dır, bunu sırasıyla Sıvı, Yumuşak doku, Kortikal kemik ve organizmanın en mineralize dokusu olan Mine takip eder. Diğer tüm şıklarda fiziksel yoğunluk kuralına aykırı dizilimler yapılmıştır.

**Soru 2 (ID: 907db4d5-fa69-47d0-bf54-b2cc0ba46365)**
Soru Kökü: Düz radyografilerdeki internal yapıların materyal yoğunluğuna göre radyolüsentten radyopağa doğru sıralanışı incelendiğinde, aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Metal < Mine < Kortikal kemik
Açıklama: X-ışınını tutma kapasitesi materyalin yoğunluğuyla orantılıdır; metal ve mine en yoğun (radyoopak) materyallerdir. Kortikal kemik, mine ve metalden daha az yoğundur, bu nedenle radyolüsentten radyopağa sıralamada 'Metal < Mine < Kortikal kemik' dizilimi tamamen terstir. Kortikal kemik ve dentin, mineye göre daha radyolüsent tarafta konumlanır.

---

### ÇİFT 61 (Benzerlik: 0.75)

**Soru 1 (ID: 9254172f-50b2-452f-aa79-ed31d02304c9)**
Soru Kökü: Aşağıdaki kist tiplerinden hangisinin dış kenarında anatomik sınırları zorlayan 'taraklı' (scalloped) bir kortikal büyüme şeklinin görülmesi radyografik literatürde tipik bir bulgu **değildir**?
Doğru Şık (E): İnsiziv kanal kisti
Açıklama: İnsiziv kanal kisti yerleştiği nasopalatin bölgenin anatomik sınırları (spina nasalis vb.) nedeniyle tipik olarak kalp şeklinde (heart-shaped) tekil bir radyolüsensi bırakır. Travmatik kemik kisti, anevrizmal kist, keratokist ve büyük dentigeröz kistler kemik endosteumuna doğru kavisli baskılar yaparak çok sayıda lobül izlenimi veren 'taraklı' bir çevre yaratırlar.

**Soru 2 (ID: c2247c04-86d5-4f3d-9486-b16de4cc30d0)**
Soru Kökü: Lezyon çevresinde izlenen 'taraklı görünüm', bazı kist ve tümörlerin sınır karakteristiklerini tanımlamada kullanılır. Aşağıdaki patolojilerden hangisi radyografik olarak tipik taraklı görünüme sahip **değildir**?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler periferal kısıtlamalar altında 'armut şekilli' görünüm oluşturma eğilimindeyken, taraklı görünüm sergilemezler. Dentigeröz kist, travmatik kemik kisti, anevrizmal kemik kisti ve dev hücreli granülom ise radyografik sınırlarında tipik olarak 'taraklı görünüm' verir. Sınır morfolojisindeki bu farklılık, inflamatuar kaynaklı bir lezyon olan radiküler kisti diğer gelişimsel veya reaktif patolojilerden ayırır.

---

### ÇİFT 62 (Benzerlik: 0.74)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 63 (Benzerlik: 0.74)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 379a58e0-2df6-4f67-b60c-2ea3fc9a058f)**
Soru Kökü: 12 yaşında erkek hasta, çenesine aldığı şiddetli darbeden birkaç hafta sonra mandibula korpusunda sert bir genişleme fark ederek kliniğe başvuruyor. Oklüzal radyografide mandibular korteksin dışında, kemik yüzeyine paralel ve tabaka tabaka ilerleyen "soğan kabuğu" manzarasına sahip yeni kemik yapımı saptanıyor. Travma öyküsü ile birlikte bu radyografik patern en çok hangi tanı ile uyumludur?
Doğru Şık (B): Ossifying subperiosteal hematom
Açıklama: Travma sonrası periost altında biriken kanama (hematom), zamanla organize olarak kemikleşir (ossifying subperiosteal hematom) ve bu süreç radyografide korteks üzerinde ardışık lamelli 'soğan kabuğu' reaksiyonu olarak izlenir. Osteosarkom travmadan bağımsız agresif bir seyir izler ve daha çok güneş ışını formasyonu verir.

---

### ÇİFT 64 (Benzerlik: 0.74)

**Soru 1 (ID: a8b1edf1-7d32-42b5-aa34-7b0119cb5c6f)**
Soru Kökü: Radyografik olarak 'kaynaşmış sınır' (belirsiz sınır) izlenen kemik lezyonlarının özellikleri değerlendirildiğinde, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Bu sınır tipi yavaş büyüyen iyi huylu tümörlerin ve gelişimsel kistlerin karakteristik özelliğidir.
Açıklama: Kaynaşmış sınır, lezyon trabekülleri ile normal kemik arasında geniş bir geçiş bölgesinin bulunduğu belirsiz bir formdur ve klasik olarak sklerozan osteitiste (kondensing osteitis) görülür. Yavaş büyüyen gelişimsel kistler veya iyi huylu tümörler (yanlış olan seçenek) bu şekilde difüz yayılım göstermez; aksine ince ve homojen bir radyoopak hatla (kortikal kenar) iyi sınırlı formda izlenirler. Bu radyografik ayrım, inflamatuar reaktif skleroz ile ekspansif kistik büyümenin birbirinden ayırt edilmesinde klinisyene doğrudan yol gösterir.

**Soru 2 (ID: ca682548-7169-4f08-8d8f-b74f6be2c9db)**
Soru Kökü: Radyografide 'belirsiz invaziv sınır' paterni gösteren lezyonların karakteristik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (A): Genellikle yavaş gelişen ve kemik etrafındaki dış kortikal plağı sağlam bırakan benign bir büyüme göstermesi
Açıklama: İnvaziv sınır, agresif hücrelerin normal kemik yapısını osteoklastik olarak hızla erittiği ve sınırların seçilemediği radikal bir yıkım paternidir; bu nedenle dış kortikal plağı koruyan yavaş, benign (ekspansif) bir büyüme formu göstermesi kesinlikle beklenmez. Benign lezyonlar konağa kemik örümü için zaman tanıyarak kortikal sınır oluştururken, invaziv sınır doğrudan malignitenin hızlı trabeküler destrüksiyonuyla ilişkilidir. Bu durum skuamöz hücreli karsinom veya malign melanom metastazı gibi yüksek gradlı lezyonların radyolojik parmak izidir.

---

### ÇİFT 65 (Benzerlik: 0.74)

**Soru 1 (ID: b194719f-0957-477d-a10f-123898ac2173)**
Soru Kökü: Çenelerde radyolojik olarak izlenen bir lezyonun ilerleyen kenarında ve hemen arkasında kemik yıkımını temsil eden, çok az trabekül içeren veya hiç içermeyen geniş bir radyolusent alan 'invaziv sınır' olarak rapor edilmiştir. Bu sınır paternine sahip bir lezyonun histolojik davranışı hakkında aşağıdakilerden hangisi söylenebilir?
Doğru Şık (D): Genellikle hızlı gelişen malignite paterni gösterir.
Açıklama: İnvaziv sınır, osteoblastik tamir ve sınır oluşturma sürecinin, patolojinin saldırgan büyüme hızına yetişemediği yüksek gradeli malignitelerde görülür. Hidrolik büyüme kistlerde, reaktif kemik yapımı ise sklerozan iltihaplarda görülürken; invaziv sınır tümör hücrelerinin kemik ilik boşluklarına trabekülleri eriterek hızla infiltre olduğunun kesin göstergesidir.

**Soru 2 (ID: ca682548-7169-4f08-8d8f-b74f6be2c9db)**
Soru Kökü: Radyografide 'belirsiz invaziv sınır' paterni gösteren lezyonların karakteristik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (A): Genellikle yavaş gelişen ve kemik etrafındaki dış kortikal plağı sağlam bırakan benign bir büyüme göstermesi
Açıklama: İnvaziv sınır, agresif hücrelerin normal kemik yapısını osteoklastik olarak hızla erittiği ve sınırların seçilemediği radikal bir yıkım paternidir; bu nedenle dış kortikal plağı koruyan yavaş, benign (ekspansif) bir büyüme formu göstermesi kesinlikle beklenmez. Benign lezyonlar konağa kemik örümü için zaman tanıyarak kortikal sınır oluştururken, invaziv sınır doğrudan malignitenin hızlı trabeküler destrüksiyonuyla ilişkilidir. Bu durum skuamöz hücreli karsinom veya malign melanom metastazı gibi yüksek gradlı lezyonların radyolojik parmak izidir.

---

### ÇİFT 66 (Benzerlik: 0.74)

**Soru 1 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 67 (Benzerlik: 0.74)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: c2247c04-86d5-4f3d-9486-b16de4cc30d0)**
Soru Kökü: Lezyon çevresinde izlenen 'taraklı görünüm', bazı kist ve tümörlerin sınır karakteristiklerini tanımlamada kullanılır. Aşağıdaki patolojilerden hangisi radyografik olarak tipik taraklı görünüme sahip **değildir**?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler periferal kısıtlamalar altında 'armut şekilli' görünüm oluşturma eğilimindeyken, taraklı görünüm sergilemezler. Dentigeröz kist, travmatik kemik kisti, anevrizmal kemik kisti ve dev hücreli granülom ise radyografik sınırlarında tipik olarak 'taraklı görünüm' verir. Sınır morfolojisindeki bu farklılık, inflamatuar kaynaklı bir lezyon olan radiküler kisti diğer gelişimsel veya reaktif patolojilerden ayırır.

---

### ÇİFT 68 (Benzerlik: 0.74)

**Soru 1 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 69 (Benzerlik: 0.74)

**Soru 1 (ID: 32f61a24-c224-4584-90e4-55ffb83d503a)**
Soru Kökü: Odontom ve sementoblastom gibi benign ve yavaş büyüyen lezyonlarda, dışarıdaki reaktif kemik korteksi ile asıl radyoopak kitle arasında ince radyolüsent bir bant izlenir. Radyografide görülen bu radyolüsent sınırın histolojik karşılığı aşağıdakilerden hangisidir?
Doğru Şık (D): Yumuşak doku kapsülü
Açıklama: Belirgin radyoopak yapıya sahip odontom ve sementoblastomlar, etraflarında onları kemikten ayıran radyolüsent bir 'yumuşak doku kapsülü' barındırır. Bu kapsül dışarıda kortikal bir periferle çevrelenmiştir, bu sayede lezyon kemiğe ankiloz olmaz. Hiperplastik folikül dentigeröz kistlerde görülürken, kistik sıvı kolonu gerçek epiteliyal kistlerin lümen yapısıdır.

**Soru 2 (ID: dd50752a-955c-4503-b46f-e50555d8cdf2)**
Soru Kökü: Kemik içi lezyonların radyografik sınır özellikleri, lezyonun doğası ve çevre dokuyla etkileşimi hakkında bilgi verir. Dışta iyi sınırlı ince bir kortikal radyoopak perifer ve onun hemen iç kısmında radyolusent bir boşlukla karakterize 'yumuşak doku kapsülü' görünümü aşağıdaki lezyonların hangisinde izlenir?
Doğru Şık (D): Odontom
Açıklama: Odontom ve sementoblastom gibi iyi huylu, kapsüllü odontojenik tümörler, etraflarındaki bağ dokusu kapsülü nedeniyle kalsifiye kitle ile komşu kemik arasında radyolusent bir hat (yumuşak doku kapsülü) ve en dışta reaktif bir kortikal sınır barındırır. Sklerozan osteitiste ise tam tersine kapsülsüz, kemikle kaynaşmış, sınırları belirsiz bir skleroz alanı izlenir. Radyografide tespit edilen bu radyolusent kapsül boşluğu, lezyonun çevre kemikten net bir şekilde ayrıştığını ve cerrahi olarak kolayca enükle edilebileceğini gösterir.

---

### ÇİFT 70 (Benzerlik: 0.74)

**Soru 1 (ID: f57aadcc-09a9-4caf-9442-da4ae0020b63)**
Soru Kökü: Radyografide kalın, genişliği tek tip olmayan ve çevresindeki kemik reaksiyonunu uyaran radyoopak geçiş bölgesi formundaki 'sklerotik sınır'ın temel patofizyolojik anlamı, aşağıdakilerden hangisini yansıtmasıdır?
Doğru Şık (B): Lezyonun çevresindeki kemik üretimini uyarmaya yetecek çok yavaş bir büyüme hızı sergilediğini
Açıklama: Sklerotik sınır, lezyon etrafındaki osteoblastların kronik ve zayıf stimülasyona yanıt vererek uzun bir zaman zarfında anormal genişlikte ve kalınlıkta reaktif kemik örmesinin bir sonucudur, bu da lezyonun büyüme hızının oldukça yavaş olduğunu kanıtlar. Malignite veya agresif durumlar kemik yapımına değil hızla yıkıma neden olarak ince invaziv sınırlar oluştururlar. Bu reaktif kalınlaşma, periapikal osseöz displazilerde tipik olarak görülür.

**Soru 2 (ID: fc0eaa52-239e-45a1-ae4f-9bf4ce8c06b4)**
Soru Kökü: Asemptomatik kırk beş yaşında Afrika kökenli bir kadın hastada, sağ mandibular molar bölgede radyolojik sınır genişliği bakımından tek tip olmayan, kalın ve geniş bir radyoopak reaktif geçiş bölgesi saptanmıştır. Bu perifer formu 'sklerotik sınır' olarak rapor edilmiştir. Bu sınır tipi, aşağıdaki lezyonlardan hangisinde primer olarak görülür?
Doğru Şık (B): Periapikal kemik displazisi
Açıklama: Sklerotik sınır, çok yavaş büyüme hızı ve lezyonun etrafındaki yoğun reaktif kemik uyarımı sonucu oluşan kalın, homojen olmayan radyoopak geçiş bölgesidir ve en tipik olarak periapikal kemik displazilerinde görülür. Keratokist ve ameloblastom genellikle ince ve düzenli kortikal sınırlar yaratırken, displazilerde kemiğin formasyon-rezorpsiyon dengesi bozulduğundan sklerotik bantlar kalındır. Sklerotik sınır patolojinin inflamatuar olmayan uzun süreli varlığına işaret eder.

---

### ÇİFT 71 (Benzerlik: 0.74)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 72 (Benzerlik: 0.74)

**Soru 1 (ID: 6125496a-8203-4d2a-98c9-8c613e18e584)**
Soru Kökü: Alt çenede saptanan radyolüsent bir patolojinin lokalizasyon analizi sırasında, mandibular kanal (IAC) korteksinde yıkım ile birlikte düzensiz bir genişleme izlenmesi en olası olarak hangi durumu işaret eder?
Doğru Şık (D): Kanal boyunca aşağı doğru gelişen malign neoplazm
Açıklama: Mandibular kanalın kortikal yıkımla birlikte düzensiz ve sınırları belirsiz şekilde genişlemesi, tümörün sinir yolu boyunca perineural yayıldığını gösterir ve bu durum genellikle malign bir neoplazmı işaret eder. Kortikal sınır bozulmadan düzenli bir genişleme olsaydı, nöral veya vasküler kökenli benign bir lezyon düşünülürdü. Anatomik bariyerlerin bu şekilde infiltratif yıkımı agresivite göstergesidir.

**Soru 2 (ID: f496580c-5eb9-4c6f-aec2-d30bc3df0d98)**
Soru Kökü: İnferior alveolar kanalın radyografik incelemesinde kanal trasesinin kortikal sınırları bozulmadan (intakt) kalarak düzgün bir biçimde genişlediği görülmüştür. Bu spesifik genişleme paterninin kanal içerisinde yerleşimli aşağıdaki patolojilerden hangisini göstermesi **en az olasıdır**?
Doğru Şık (B): Malign lenfoma
Açıklama: Kanal korteksinin bozulmadan (intakt olarak) genişlemesi, kanal içerisindeki yavaş büyüyen benign vasküler (hemanjiyom) veya nöral (nörom, schwannom) tümörleri işaret eder. Malign bir neoplazm (lenfoma vb.) kanal çevresindeki kortikal kemikte düzensiz yıkım ve invazyon (korteks kaybı) yapar, intakt bir genişleme bırakmaz.

---

### ÇİFT 73 (Benzerlik: 0.74)

**Soru 1 (ID: 2bfba921-dea3-4681-b558-912976f6dfb1)**
Soru Kökü: Yirmi sekiz yaşındaki hastada kavisli ve kalın kemik septalarının iç içe geçmesiyle oluşan, hidrolik büyüme paternli multiloküler bir yapı izlenmiştir. Radyolojik raporda 'sabun köpüğü' görünümü olarak tarif edilen bu lezyon paterni, aşağıdakilerden hangisine aittir?
Doğru Şık (A): Ameloblastom
Açıklama: Ameloblastomda oluşan iç septalar kavisli ve kalındır; bu da radyografide multiloküler 'sabun köpüğü' (soap bubble) paternini yaratır. Odontojenik miksomada ise septalar genellikle düz ve ince olup 'tenis raketi' manzarası oluşturur. Basit kemik kisti taraklı kenar yapar ancak gerçek iç septa oluşturmaz.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 74 (Benzerlik: 0.74)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

---

### ÇİFT 75 (Benzerlik: 0.74)

**Soru 1 (ID: 1887d30f-b0e1-4047-b4f5-f111849ecfe5)**
Soru Kökü: Radyografik yorumlamada doku ve materyallerin radyoopasite sıralaması (radyolusentten radyoopağa doğru) tanısal algoritmanın temelidir. Bu prensibe göre aşağıda verilen dizilimlerden hangisi biyolojik yapıları ve vücut boşluklarını doğru sırada listelemektedir?
Doğru Şık (A): Hava < Sıvı < Kortikal kemik < Mine
Açıklama: X-ışınları düşük yoğunluklu ortamlardan serbestçe geçerek siyah (radyolusent) bir iz bırakırken, yüksek atom numaralı ve yoğun dokularda zayıflar ve filmi beyaz (radyoopak) bırakırlar. Buna göre en radyolusent materyal Hava'dır, bunu sırasıyla Sıvı, Yumuşak doku, Kortikal kemik ve organizmanın en mineralize dokusu olan Mine takip eder. Diğer tüm şıklarda fiziksel yoğunluk kuralına aykırı dizilimler yapılmıştır.

**Soru 2 (ID: dfa75e38-1210-4ad1-8dfc-3eaab36dcfa2)**
Soru Kökü: Bölgesel anatomik ve patolojik materyallerin radyografik dansiteleri karşılaştırıldığında, lezyon içeriğinin saptanması tanısal algoritmanın kritik bir adımıdır. En radyolusentten radyopağa doğru yapılan fiziksel sıralama kuralına göre, sıvı (eksüda, transüda veya kistik içerik) yapıların radyografik görünümü, aşağıdaki materyallerin hangisinden **daha radyopaktır**?
Doğru Şık (A): Hava ve yağ dokusu
Açıklama: Madde yoğunluklarına göre X-ışını geçirgenlik dizilimi temel fiziksel bir olgudur ve sıvılar (su içeriği), hava moleküllerinden veya lipid (yağ) dokusundan yapısal olarak daha yoğun oldukları için onlardan daha fazla foton tutarak göreceli olarak 'daha radyoopak' (daha az siyah) bir iz düşüm verirler. Kemik iliği veya yumuşak doku (çeldirici şıklar) ise hücresel yapıları gereği sudan daha yoğundur ve sıvıdan daha beyaz görünürler. Klinisyen radyolusent bir boşluk değerlendirirken havanın tam siyahlığı ile kist sıvısının hafif grimsi radyolusensisi arasındaki bu kontrast farkına dayanarak değerlendirme yapar.

---

### ÇİFT 76 (Benzerlik: 0.74)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

---

### ÇİFT 77 (Benzerlik: 0.74)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 78 (Benzerlik: 0.74)

**Soru 1 (ID: 907db4d5-fa69-47d0-bf54-b2cc0ba46365)**
Soru Kökü: Düz radyografilerdeki internal yapıların materyal yoğunluğuna göre radyolüsentten radyopağa doğru sıralanışı incelendiğinde, aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Metal < Mine < Kortikal kemik
Açıklama: X-ışınını tutma kapasitesi materyalin yoğunluğuyla orantılıdır; metal ve mine en yoğun (radyoopak) materyallerdir. Kortikal kemik, mine ve metalden daha az yoğundur, bu nedenle radyolüsentten radyopağa sıralamada 'Metal < Mine < Kortikal kemik' dizilimi tamamen terstir. Kortikal kemik ve dentin, mineye göre daha radyolüsent tarafta konumlanır.

**Soru 2 (ID: dbc171c1-0d72-4bb0-863f-e98f281a5fd3)**
Soru Kökü: Radyografik görüntülemede karşılaşılan internal anatomik ve patolojik yapıların dansite (yoğunluk) değerlendirmesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Yağ dokusu yapısal olarak kas dokusuna ve kemik dokusuna göre daha fazla X-ışını absorbe eder.
Açıklama: X-ışınlarının dokular tarafından tutulum (absorbsiyon) miktarı dokunun mineral yoğunluğuna ve kütlesine bağlıdır; yağ dokusu oldukça düşük yoğunlukludur ve kas veya kemiğe kıyasla çok daha az X-ışını absorbe ederek daha radyolusent görünür. Çeldirici şık olan B seçeneğinde iddia edildiği gibi yağ dokusu yüksek absorbsiyon yapsaydı, radyografide kemik gibi beyaz (radyoopak) görünmesi gerekirdi. Radyolüsentten radyopağa genel kural; hava -> yağ -> sıvı -> yumuşak doku -> kemik -> mine -> metal şeklinde kesin bir lineer fiziksel dizilime dayanır.

---

### ÇİFT 79 (Benzerlik: 0.74)

**Soru 1 (ID: 5a6c8ced-8387-413d-aaee-e41989d8ffc3)**
Soru Kökü: Radyolüsent bir zemin içerisinde amorf, dağınık yerleşimli küçük radyoopak kalsifikasyon odaklarının izlendiği "kar yağdı" (driven snow) manzarası aşağıdaki patolojilerden hangisi için spesifiktir?
Doğru Şık (A): Pindborg tümörü
Açıklama: Pindborg tümörü (Kalsifiye Epitelyal Odontojenik Tümör), internal yapısında tümör adacıkları içinde oluşan kalsifikasyonlar nedeniyle radyografik olarak tipik 'kar yağdı' manzarası sunar. Fibröz displazi buzlu cam, sementoblastom ise sınırları kortikal hatla çizili tekerlek veya güneş ışını benzeri yoğun kitle görüntüsüyle ayrılır. Karakteristik amorf kalsifikasyon dizilimi Pindborg tümörünün imza bulgusudur.

**Soru 2 (ID: 7cd17923-61e3-41b3-a20a-e4fa964eb086)**
Soru Kökü: Odontojenik lezyonların iç yapı değerlendirmesinde, fibröz doku içerisinde mikroskobik kalsifikasyon odaklarının zamanla birleşmesi sonucu ortaya çıkan radyografik "kum benzeri" (sand-like) görünüm aşağıdaki patolojilerin hangisinde karakteristik **değildir**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma radyografik olarak tamamen litik, radyolüsent bir gelişim izler ve kemik kalsifikasyonu üretmez; çoklu kavitasyonlara yol açarak 'bal peteği' veya 'sabun köpüğü' deseni yapar. Pindborg tümörü (KEOT), Gorlin kisti ve Adenoameloblastoma (AOT) ise kalsifiye epitel ürünleri ürettikleri için içlerinde radyografik olarak 'kar yağdı' veya 'kum benzeri' ince kalsifikasyonlar barındırırlar.

---

### ÇİFT 80 (Benzerlik: 0.74)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: fc0eaa52-239e-45a1-ae4f-9bf4ce8c06b4)**
Soru Kökü: Asemptomatik kırk beş yaşında Afrika kökenli bir kadın hastada, sağ mandibular molar bölgede radyolojik sınır genişliği bakımından tek tip olmayan, kalın ve geniş bir radyoopak reaktif geçiş bölgesi saptanmıştır. Bu perifer formu 'sklerotik sınır' olarak rapor edilmiştir. Bu sınır tipi, aşağıdaki lezyonlardan hangisinde primer olarak görülür?
Doğru Şık (B): Periapikal kemik displazisi
Açıklama: Sklerotik sınır, çok yavaş büyüme hızı ve lezyonun etrafındaki yoğun reaktif kemik uyarımı sonucu oluşan kalın, homojen olmayan radyoopak geçiş bölgesidir ve en tipik olarak periapikal kemik displazilerinde görülür. Keratokist ve ameloblastom genellikle ince ve düzenli kortikal sınırlar yaratırken, displazilerde kemiğin formasyon-rezorpsiyon dengesi bozulduğundan sklerotik bantlar kalındır. Sklerotik sınır patolojinin inflamatuar olmayan uzun süreli varlığına işaret eder.

---

### ÇİFT 81 (Benzerlik: 0.74)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 82 (Benzerlik: 0.74)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: 8ced98a5-1dbe-42b8-a050-175ce27ba8bc)**
Soru Kökü: 28 yaşında kadın hasta, üst sağ bölgesinde ağrısız bir şişlik fark ediyor. Periapikal radyografide, maksiller sağ lateral kesici ve kanin dişlerin köklerini birbirinden ayırarak superiora doğru genişleyen, inferiora (alveol kretine) doğru daralan karakteristik "armut şekilli" (pear-shaped) radyolüsent lezyon saptanıyor. Dişler vital olduğuna göre, en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Globulomaksiller kist
Açıklama: Globulomaksiller kist, adını yerleşim yerinden alan ve anatomik olarak her zaman maksiller lateral ve kanin dişleri arasına yerleşerek onları diverjan hale getiren ters dönmüş 'armut' formunda bir gelişimsel/fissüral kisttir. Dişlerin vital olması kökeninin pulpa enfeksiyonu (radiküler kist) olmadığını kesinleştirir.

---

### ÇİFT 83 (Benzerlik: 0.73)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: 2bfba921-dea3-4681-b558-912976f6dfb1)**
Soru Kökü: Yirmi sekiz yaşındaki hastada kavisli ve kalın kemik septalarının iç içe geçmesiyle oluşan, hidrolik büyüme paternli multiloküler bir yapı izlenmiştir. Radyolojik raporda 'sabun köpüğü' görünümü olarak tarif edilen bu lezyon paterni, aşağıdakilerden hangisine aittir?
Doğru Şık (A): Ameloblastom
Açıklama: Ameloblastomda oluşan iç septalar kavisli ve kalındır; bu da radyografide multiloküler 'sabun köpüğü' (soap bubble) paternini yaratır. Odontojenik miksomada ise septalar genellikle düz ve ince olup 'tenis raketi' manzarası oluşturur. Basit kemik kisti taraklı kenar yapar ancak gerçek iç septa oluşturmaz.

---

### ÇİFT 84 (Benzerlik: 0.73)

**Soru 1 (ID: 7c92e118-400b-4dd5-95a4-0f37d6f2d9e4)**
Soru Kökü: Çene kemiklerini genişleten fibro-osseöz lezyonlarda patolojinin dış kortikal plaka üzerindeki etkisi ve intraosseöz büyüme paterni tanıya yardımcıdır. Bu lezyonların gelişim özellikleriyle ilgili aşağıdaki açıklamalardan hangisi **yanlıştır**?
Doğru Şık (C): Ossifiye fibrom (ossifying fibroma), kemik boyunca belirli bir merkezi olmaksızın lineer uzanan difüz bir büyüme paterni gösterir.
Açıklama: Ossifiye fibrom neoplastik doğası gereği belirli bir gelişim merkezinden çevreye doğru küresel, eşmerkezli (konsantrik) ve iyi sınırlı bir büyüme paterni gösterir. Fibröz displazi ise gelişimsel bir anomali olduğundan belirgin bir merkezi yoktur; kemiğin normal anatomisi boyunca difüz (lineer/uzanan) bir büyüme paterni sergiler (yanlış olan seçenek). Büyüme vektörlerindeki bu temel morfolojik fark (konsantrik vs. difüz uzanım), iki majör fibro-osseöz lezyonun radyografik ayrımındaki altın standart kuraldır.

**Soru 2 (ID: f93664cf-f496-4515-9436-79acbd4ada16)**
Soru Kökü: Kemik displazileri ve neoplazilerin büyüme davranışları radyografik yorumlamada önemli bir ayırıcı tanı parametresidir. Fibröz displazinin spesifik özellikleriyle karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hızlı büyüyen agresif lezyonlar dış kortikal plakanın aşırı kalınlaşarak korunmasına neden olur.
Açıklama: Hızlı büyüyen lezyonlar dış kortikal plakayı koruyup kalınlaştırmaz, tam aksine periostun adaptasyon sınırını aşarak kortikal plakada yıkıma ve kayba neden olurlar. Fibröz displazi diffüz (merkezsiz) büyürken, ossifiye fibrom sınırları belirgin eşmerkezli bir büyüme paterni çizer. Bu morfolojik fark tümör ve displazi ayırımında klinisyene kılavuzluk eder.

---

### ÇİFT 85 (Benzerlik: 0.73)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 86 (Benzerlik: 0.73)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 87 (Benzerlik: 0.73)

**Soru 1 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 88 (Benzerlik: 0.73)

**Soru 1 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

**Soru 2 (ID: e1fe33f0-625b-41c5-bfd5-c3933cfacc03)**
Soru Kökü: Sekiz yaşında erkek çocuk hastanın çenesinde hızla büyüyen ağrısız bir şişlik şikayetiyle başvurmuştur. Alınan radyografide diş köklerinde ani ve keskin bir rezorpsiyona sekonder 'çivi kökler' görünümü izlenmiştir. Gelişim hızı ve radyografik patern göz önüne alındığında akla ilk gelmesi gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Burkitt tümörü
Açıklama: Burkitt tümörü, çenelerde aşırı hızlı büyüme ve destrüksiyon ile diş köklerinde kama şeklinde veya düzensiz rezorpsiyon yaratarak 'çivi kökler' manzarası veren agresif bir lenfomadır. Ameloblastoma kök rezorpsiyonu yapabilse de bu genellikle düz bir hizada (bıçak sırtı) gerçekleşir ve çivi benzeri sivrilme beklenmez. Yaş, hız ve çivi kök bulgusu klinik senaryoda doğrudan Burkitt tümörünü işaret etmektedir.

---

### ÇİFT 89 (Benzerlik: 0.73)

**Soru 1 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 90 (Benzerlik: 0.73)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 91 (Benzerlik: 0.73)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 92 (Benzerlik: 0.73)

**Soru 1 (ID: 331464f4-2636-4697-bf20-22a974da6d7d)**
Soru Kökü: Panoramik radyografide saptanan ve 'soğan kabuğu' (onion-skin) olarak adlandırılan, lamelli periost reaksiyonu paterni, periosteumun ardışık eksüda/uyaran ataklarına yeni kemik tabakaları üreterek verdiği reaktif bir yanıttır. Aşağıdakilerden hangisinin radyografide bu paterni oluşturması **beklenmez**?
Doğru Şık (D): Periapikal semental displazi
Açıklama: Soğan kabuğu reaksiyonu; enflamatuar durumlarda (Garre osteomiyeliti), Langerhans hücreli histiyositozda, lösemide ve Ewing sarkomunda izlenen katmanlı periost yanıtıdır. Periapikal semental displazi ise kök uçlarında kortikal kalınlaşma veya sklerotik halo ile karakterize kemik içi reaktif bir süreçtir, dış periostta soğan kabuğu şeklinde lamelli apozisyon yapmaz.

**Soru 2 (ID: 4ae8704d-d250-412b-9c7a-86ffdf7663da)**
Soru Kökü: Reaktif periost kemik oluşumu, alttaki tümöral yapının doğasına göre spesifik desenler oluşturur. Kemiğe dik olarak ışınsal tarzda ilerleyen spiküllerin izlendiği 'güneş ışını' (sunburst) görünümü, aşağıdaki patolojilerden hangisinde **gözlenmez**?
Doğru Şık (D): Pindborg tümörü
Açıklama: Güneş ışını (sunburst) periost reaksiyonu agresif malignitelerde (Osteosarkom, Ewing sarkomu) ve kemik içine yerleşmiş, yüksek basınçlı benign vasküler lezyonlarda (hemanjiyomlar) izlenir. Pindborg tümörü (CEOT) kortikal ekspansiyon yapabilir ancak periost üzerinde ışınsal spiküller değil, iç yapıda amiloid kalsifikasyonuna bağlı 'kar yağdı' manzarası bırakır.

---

### ÇİFT 93 (Benzerlik: 0.73)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 94 (Benzerlik: 0.73)

**Soru 1 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

**Soru 2 (ID: bc124276-30f6-4f26-83f5-048ac646cd88)**
Soru Kökü: On dört yaşındaki kız hasta,çenesinde asimetri şikayetiyle başvurmuştur. Alınan sefalometrik ve periapikal radyografilerde lokalize radyolüsent bir alan izlenmiştir. Biyopsi sonucu 'Santral dev hücreli granülom' gelen bu hastada, lezyonun radyografik merkez üssünün en büyük olasılıkla bulunduğu spesifik bölge aşağıdakilerden hangisidir?
Doğru Şık (A): Maksiller kaninlerin anterioru
Açıklama: Genç hastalarda (örneğin puberte dönemi) santral dev hücreli granülomların merkez üsleri en sık maksiller kaninlerin anteriorunda (önünde) konumlanma eğilimi gösterir. Erişkinlerde ve genel popülasyonda ise daha sık mandibula birinci moların anteriorunda yerleşir. Yaşa bağlı bu spesifik lokalizasyon farklılığı, santral dev hücreli granülomun biyolojik davranışı için tanısal bir markerdır.

---

### ÇİFT 95 (Benzerlik: 0.73)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: ec488eab-1298-4c40-b290-12300732bb6e)**
Soru Kökü: Odontojenik tümörlerin radyografik iç yapı analizinde septa morfolojisi ayırıcı tanıda kritik öneme sahiptir. Aşağıdaki lezyonlardan hangisi tipik olarak düz ve ince iç bölmeler (septalar) sergileyerek diğer multiloküler lezyonlardan ayrılır?
Doğru Şık (E): Odontojenik miksoma
Açıklama: Odontojenik miksomalar iç yapılarında kemiksi septalar bulundurur ve bu septalar ameloblastomdan farklı olarak genellikle düz, ince bölmeler şeklindedir. Anevrizmal kemik kisti veya keratokistlerde ise balon veya dalgalı şekilli genişlemeler daha ön plandadır. İç yapının bu ince organizasyonu tümörün miksomatöz içeriğiyle mekanik bir korelasyon gösterir.

---

### ÇİFT 96 (Benzerlik: 0.73)

**Soru 1 (ID: 4ae8704d-d250-412b-9c7a-86ffdf7663da)**
Soru Kökü: Reaktif periost kemik oluşumu, alttaki tümöral yapının doğasına göre spesifik desenler oluşturur. Kemiğe dik olarak ışınsal tarzda ilerleyen spiküllerin izlendiği 'güneş ışını' (sunburst) görünümü, aşağıdaki patolojilerden hangisinde **gözlenmez**?
Doğru Şık (D): Pindborg tümörü
Açıklama: Güneş ışını (sunburst) periost reaksiyonu agresif malignitelerde (Osteosarkom, Ewing sarkomu) ve kemik içine yerleşmiş, yüksek basınçlı benign vasküler lezyonlarda (hemanjiyomlar) izlenir. Pindborg tümörü (CEOT) kortikal ekspansiyon yapabilir ancak periost üzerinde ışınsal spiküller değil, iç yapıda amiloid kalsifikasyonuna bağlı 'kar yağdı' manzarası bırakır.

**Soru 2 (ID: 87a5a351-1d1b-4435-a93f-d6e5194c8a57)**
Soru Kökü: Enflamatuar eksüda, kanama veya tümöral hücrelerin periostu dışarıya doğru aralıklı olarak uyarması, korteks dışında lamelli bir kemik yapımına yol açarak radyografide "soğan kabuğu" (onion-skin) paternini oluşturur. Aşağıdakilerden hangisi bu spesifik periost reaksiyonuna neden **olmaz**?
Doğru Şık (A): Basit kemik kisti
Açıklama: Basit kemik kisti medüller kemik içerisinde yavaş büyüyen, genellikle asemptomatik, boşluklu bir psödokisttir ve periost reaksiyonunu uyararak yeni kemik yapımına (soğan kabuğu) neden olmaz. Garre osteomiyeliti (kronik proliferatif periostitis), İnfantil kortikal hiperostoz (Caffey hastalığı) ve Ewing sarkomu periostu sürekli aralıklarla uyararak tipik lamelli soğan kabuğu deseni yaratır.

---

### ÇİFT 97 (Benzerlik: 0.73)

**Soru 1 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 98 (Benzerlik: 0.73)

**Soru 1 (ID: 65d06590-7e1c-4a84-a11c-b9a8cd94a682)**
Soru Kökü: Dış kortikal sınırın korunarak incecik bir tabaka halinde lezyon etrafını sarması radyografide 'yumurta kabuğu' (eggshell) görünümü olarak ifade edilir. Bu bulgu, lezyonun periostu yıkacak kadar hızlı olmadığını ancak korteksi iterek inceltecek kadar baskı yaptığını gösterir. Tablo 9'a göre, yumurta kabuğu görünümü aşağıdaki patolojilerden hangisi için karakteristiktir?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma ve semento-ossifying fibroma, yavaş ekspansif büyüme karakterleri sayesinde kortikal plakanın yıkılmasını önleyip sadece incelmesini sağlar ve 'yumurta kabuğu' paternini oluşturur. Garre osteomiyeliti soğan kabuğu reaksiyonu yaparken, malign lenfoma güve yeniği tarzında sınırları silen bir yıkım yapar.

**Soru 2 (ID: dd50752a-955c-4503-b46f-e50555d8cdf2)**
Soru Kökü: Kemik içi lezyonların radyografik sınır özellikleri, lezyonun doğası ve çevre dokuyla etkileşimi hakkında bilgi verir. Dışta iyi sınırlı ince bir kortikal radyoopak perifer ve onun hemen iç kısmında radyolusent bir boşlukla karakterize 'yumuşak doku kapsülü' görünümü aşağıdaki lezyonların hangisinde izlenir?
Doğru Şık (D): Odontom
Açıklama: Odontom ve sementoblastom gibi iyi huylu, kapsüllü odontojenik tümörler, etraflarındaki bağ dokusu kapsülü nedeniyle kalsifiye kitle ile komşu kemik arasında radyolusent bir hat (yumuşak doku kapsülü) ve en dışta reaktif bir kortikal sınır barındırır. Sklerozan osteitiste ise tam tersine kapsülsüz, kemikle kaynaşmış, sınırları belirsiz bir skleroz alanı izlenir. Radyografide tespit edilen bu radyolusent kapsül boşluğu, lezyonun çevre kemikten net bir şekilde ayrıştığını ve cerrahi olarak kolayca enükle edilebileceğini gösterir.

---

### ÇİFT 99 (Benzerlik: 0.73)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

---

### ÇİFT 100 (Benzerlik: 0.73)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

---

### ÇİFT 101 (Benzerlik: 0.73)

**Soru 1 (ID: c2247c04-86d5-4f3d-9486-b16de4cc30d0)**
Soru Kökü: Lezyon çevresinde izlenen 'taraklı görünüm', bazı kist ve tümörlerin sınır karakteristiklerini tanımlamada kullanılır. Aşağıdaki patolojilerden hangisi radyografik olarak tipik taraklı görünüme sahip **değildir**?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler periferal kısıtlamalar altında 'armut şekilli' görünüm oluşturma eğilimindeyken, taraklı görünüm sergilemezler. Dentigeröz kist, travmatik kemik kisti, anevrizmal kemik kisti ve dev hücreli granülom ise radyografik sınırlarında tipik olarak 'taraklı görünüm' verir. Sınır morfolojisindeki bu farklılık, inflamatuar kaynaklı bir lezyon olan radiküler kisti diğer gelişimsel veya reaktif patolojilerden ayırır.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 102 (Benzerlik: 0.73)

**Soru 1 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

**Soru 2 (ID: e3d5e2e3-c5e0-4b53-8e16-588455fa46a9)**
Soru Kökü: Otuz beş yaşındaki hastanın radyografisinde alveolar kemiğin marjinal olarak korunduğu, ancak dişlerin kökleri etrafındaki kemiğin tamamen eridiği ve dişlerin boşlukta 'yüzen diş' (floating teeth) görünümü aldığı saptanmıştır. Aşağıdakilerden hangisi bu duruma yol açan agresif patolojiler arasında **yer almaz**?
Doğru Şık (C): Sjögren sendromu
Açıklama: Sjögren sendromu, tükrük bezlerini etkileyen bir otoimmün hastalık olup siyalografide 'kiraz çiçeği' görünümü yapar, ancak alveolar kemikte yüzen diş tablosuna sebep olmaz. Yüzen diş tablosu, diş destek kemiğinin agresif bir şekilde lokal olarak yok edildiği Langerhans hücreli histiyositoz, malign tümörler veya şiddetli/agresif periodontitiste (Papillon-Lefevre dahil) izlenir.

---

### ÇİFT 103 (Benzerlik: 0.73)

**Soru 1 (ID: a8b1edf1-7d32-42b5-aa34-7b0119cb5c6f)**
Soru Kökü: Radyografik olarak 'kaynaşmış sınır' (belirsiz sınır) izlenen kemik lezyonlarının özellikleri değerlendirildiğinde, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Bu sınır tipi yavaş büyüyen iyi huylu tümörlerin ve gelişimsel kistlerin karakteristik özelliğidir.
Açıklama: Kaynaşmış sınır, lezyon trabekülleri ile normal kemik arasında geniş bir geçiş bölgesinin bulunduğu belirsiz bir formdur ve klasik olarak sklerozan osteitiste (kondensing osteitis) görülür. Yavaş büyüyen gelişimsel kistler veya iyi huylu tümörler (yanlış olan seçenek) bu şekilde difüz yayılım göstermez; aksine ince ve homojen bir radyoopak hatla (kortikal kenar) iyi sınırlı formda izlenirler. Bu radyografik ayrım, inflamatuar reaktif skleroz ile ekspansif kistik büyümenin birbirinden ayırt edilmesinde klinisyene doğrudan yol gösterir.

**Soru 2 (ID: af640ede-9768-417c-adc5-0335e952422d)**
Soru Kökü: Radyografik kalsifikasyonlar ve özellikleri göz önüne alındığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Kronik iltihaplı kistlerde distrofik kalsifikasyonlar multiloküler kalın septalar şeklinde organize olurlar.
Açıklama: Kronik olarak iltihaplı kistlerde meydana gelen kalsifikasyonlar organize kalın septalar oluşturmaz, aksine tanınabilir bir patern olmaksızın çok ince ve parçacıklı bir görünüme sahiptir. Kalın septa oluşumu ameloblastom gibi aktif neoplastik lezyonlara ait bir özelliktir. Kistik kalsifikasyonlar yapısal destekten ziyade lokal doku nekrozuyla ilişkilidir.

---

### ÇİFT 104 (Benzerlik: 0.73)

**Soru 1 (ID: 0dde3e7c-c7e5-420b-b532-e693ebc766b7)**
Soru Kökü: Maksillofasiyal kompleksin konvansiyonel radyografik görüntülerinde, biyolojik materyallerin X-ışını tutulumlarına göre iç yapı dansiteleri radyolusentten (en koyu) radyoopağa (en açık) doğru spesifik bir sıra izler. Buna göre aşağıdakilerden hangisi radyasyon geçirgenliğinin **en az** (en yüksek radyoopasite) olduğu dokudur?
Doğru Şık (D): Kortikal kemik
Açıklama: Sıralama Hava -> Yağ -> Sıvı -> Yumuşak doku -> Kemik iliği -> Trabeküler kemik -> Kortikal kemik/Dentin -> Mine -> Metal şeklinde ilerler, bu nedenle seçenekler arasında kortikal kemik en yüksek radyoopasiteye (radyasyon geçirgenliğinin en az olduğu doku) sahiptir. Hava ve yağ fotonları durduramadığından tamamen radyolusent görünürken, kortikal kemiğin yüksek mineral yoğunluğu filmi beyaz bırakır. Mine ve metal şıklarda bulunmadığından doğru yanıt D'dir.

**Soru 2 (ID: 1887d30f-b0e1-4047-b4f5-f111849ecfe5)**
Soru Kökü: Radyografik yorumlamada doku ve materyallerin radyoopasite sıralaması (radyolusentten radyoopağa doğru) tanısal algoritmanın temelidir. Bu prensibe göre aşağıda verilen dizilimlerden hangisi biyolojik yapıları ve vücut boşluklarını doğru sırada listelemektedir?
Doğru Şık (A): Hava < Sıvı < Kortikal kemik < Mine
Açıklama: X-ışınları düşük yoğunluklu ortamlardan serbestçe geçerek siyah (radyolusent) bir iz bırakırken, yüksek atom numaralı ve yoğun dokularda zayıflar ve filmi beyaz (radyoopak) bırakırlar. Buna göre en radyolusent materyal Hava'dır, bunu sırasıyla Sıvı, Yumuşak doku, Kortikal kemik ve organizmanın en mineralize dokusu olan Mine takip eder. Diğer tüm şıklarda fiziksel yoğunluk kuralına aykırı dizilimler yapılmıştır.

---

### ÇİFT 105 (Benzerlik: 0.73)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: e1fe33f0-625b-41c5-bfd5-c3933cfacc03)**
Soru Kökü: Sekiz yaşında erkek çocuk hastanın çenesinde hızla büyüyen ağrısız bir şişlik şikayetiyle başvurmuştur. Alınan radyografide diş köklerinde ani ve keskin bir rezorpsiyona sekonder 'çivi kökler' görünümü izlenmiştir. Gelişim hızı ve radyografik patern göz önüne alındığında akla ilk gelmesi gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Burkitt tümörü
Açıklama: Burkitt tümörü, çenelerde aşırı hızlı büyüme ve destrüksiyon ile diş köklerinde kama şeklinde veya düzensiz rezorpsiyon yaratarak 'çivi kökler' manzarası veren agresif bir lenfomadır. Ameloblastoma kök rezorpsiyonu yapabilse de bu genellikle düz bir hizada (bıçak sırtı) gerçekleşir ve çivi benzeri sivrilme beklenmez. Yaş, hız ve çivi kök bulgusu klinik senaryoda doğrudan Burkitt tümörünü işaret etmektedir.

---

### ÇİFT 106 (Benzerlik: 0.73)

**Soru 1 (ID: 65d06590-7e1c-4a84-a11c-b9a8cd94a682)**
Soru Kökü: Dış kortikal sınırın korunarak incecik bir tabaka halinde lezyon etrafını sarması radyografide 'yumurta kabuğu' (eggshell) görünümü olarak ifade edilir. Bu bulgu, lezyonun periostu yıkacak kadar hızlı olmadığını ancak korteksi iterek inceltecek kadar baskı yaptığını gösterir. Tablo 9'a göre, yumurta kabuğu görünümü aşağıdaki patolojilerden hangisi için karakteristiktir?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma ve semento-ossifying fibroma, yavaş ekspansif büyüme karakterleri sayesinde kortikal plakanın yıkılmasını önleyip sadece incelmesini sağlar ve 'yumurta kabuğu' paternini oluşturur. Garre osteomiyeliti soğan kabuğu reaksiyonu yaparken, malign lenfoma güve yeniği tarzında sınırları silen bir yıkım yapar.

**Soru 2 (ID: 87a5a351-1d1b-4435-a93f-d6e5194c8a57)**
Soru Kökü: Enflamatuar eksüda, kanama veya tümöral hücrelerin periostu dışarıya doğru aralıklı olarak uyarması, korteks dışında lamelli bir kemik yapımına yol açarak radyografide "soğan kabuğu" (onion-skin) paternini oluşturur. Aşağıdakilerden hangisi bu spesifik periost reaksiyonuna neden **olmaz**?
Doğru Şık (A): Basit kemik kisti
Açıklama: Basit kemik kisti medüller kemik içerisinde yavaş büyüyen, genellikle asemptomatik, boşluklu bir psödokisttir ve periost reaksiyonunu uyararak yeni kemik yapımına (soğan kabuğu) neden olmaz. Garre osteomiyeliti (kronik proliferatif periostitis), İnfantil kortikal hiperostoz (Caffey hastalığı) ve Ewing sarkomu periostu sürekli aralıklarla uyararak tipik lamelli soğan kabuğu deseni yaratır.

---

### ÇİFT 107 (Benzerlik: 0.72)

**Soru 1 (ID: 6125496a-8203-4d2a-98c9-8c613e18e584)**
Soru Kökü: Alt çenede saptanan radyolüsent bir patolojinin lokalizasyon analizi sırasında, mandibular kanal (IAC) korteksinde yıkım ile birlikte düzensiz bir genişleme izlenmesi en olası olarak hangi durumu işaret eder?
Doğru Şık (D): Kanal boyunca aşağı doğru gelişen malign neoplazm
Açıklama: Mandibular kanalın kortikal yıkımla birlikte düzensiz ve sınırları belirsiz şekilde genişlemesi, tümörün sinir yolu boyunca perineural yayıldığını gösterir ve bu durum genellikle malign bir neoplazmı işaret eder. Kortikal sınır bozulmadan düzenli bir genişleme olsaydı, nöral veya vasküler kökenli benign bir lezyon düşünülürdü. Anatomik bariyerlerin bu şekilde infiltratif yıkımı agresivite göstergesidir.

**Soru 2 (ID: 8803305a-729d-4496-a3b8-df66006c17da)**
Soru Kökü: Merkez üssü mandibular kanal (IAC) bölgesinde lokalize bir patolojinin radyografik değerlendirmesinde, lezyonun diş kökleriyle ilişkisiz biçimde doğrudan IAC'nin **içinden** kaynaklandığı belirlenmiştir. Bu dokunun histolojik kökeninin aşağıdakilerden hangisi olması en kuvvetli olasılıktır?
Doğru Şık (C): Nöral veya vasküler yapılar
Açıklama: İnferior alveolar kanal içerisinde yer alan inferior alveolar sinir, arter ve ven dolayısıyla IAC içerisinden köken alan bir lezyonun nöral (nörom, nörofibrom, schwannom) veya vasküler (hemanjiyom) kökenli olması anatomik bir zorunluluktur. Odontojenik yapılar (ameloblastik kalıntılar, sementoblastlar) kanaldan bağımsız olarak daha koronal alveolar proçeste konumlanırlar. IAC kortikal sınırının bozulmadan genişlemesi de sıklıkla bu kanal içi iyi huylu vasküler/nöral patolojilere işaret eder.

---

### ÇİFT 108 (Benzerlik: 0.72)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 109 (Benzerlik: 0.72)

**Soru 1 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 110 (Benzerlik: 0.72)

**Soru 1 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

**Soru 2 (ID: e6c31376-91c2-4b36-ac8a-6a72b2ca9fc4)**
Soru Kökü: Elli yaşında erkek hasta, son aylarda alt dudağında giderek artan uyuşukluk (anestezi) şikayetiyle kliniğe başvuruyor. Radyografik incelemede inferior alveolar kanalın üst korteksinde ciddi yıkım saptanıyor ve kanal anatomisi boyunca aşağıya doğru gelişen sınırları belirsiz irregüler bir genişleme izleniyor. Bu klinik ve spesifik radyografik bulgular birlikte değerlendirildiğinde aşağıdaki lezyon tiplerinden hangisi **en güçlü** ihtimaldir?
Doğru Şık (D): Malign neoplazm
Açıklama: Malign hücrelerin nörotropik yayılım veya osteoklastik yıkımla sinir kanalını (perineural invazyon) infiltre etmesi, kanal korteksinin düzensizce erimesine (destrüksiyon) ve kliniğe dudak parestezisi/uyuşukluğu (Vincent bulgusu) olarak yansımasına sebep olur. Basit kemik kisti veya dev hücreli lezyonlar (çeldirici şıklar) dişi ve kanalı iter ancak sinir kılıfını invaze etmediği için klinik anestezi tablosuna yol açmaz. Kanalın düzensiz genişlemesiyle birlikte görülen duyu kaybı, aksi ispatlanana kadar osteosarkom veya metastatik malign neoplazm şüphesi doğurur.

---

### ÇİFT 111 (Benzerlik: 0.72)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

---

### ÇİFT 112 (Benzerlik: 0.72)

**Soru 1 (ID: 87c2a96c-f6ae-4164-9132-711de9486ead)**
Soru Kökü: Bir lezyonun çenedeki genişlemesinin şekli klinik tanıda yol göstericidir. Lezyonun hidrolik basınca işaret eden 'şişirilmiş bir balona benzer, dairesel' formda kemiği ittiği radyografik görünüme (Balon benzeri görünüm) sahip olabilen iki ana patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti ve Folliküler kist
Açıklama: Balon benzeri (hidrolik dairesel) radyografik ekspansiyon sıvıyla dolu kavitelerin eşit yönde yaptığı hidrostatik basınca bağlıdır. Anevrizmal kemik kisti (içi kan dolu göllenmeler) ve foliküler kist (kistik epiteliyum içi sıvı dairesel genişler) Tablo 9'da spesifik olarak 'Balon benzeri görünüm' ile eşleştirilmiştir.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 113 (Benzerlik: 0.72)

**Soru 1 (ID: bc124276-30f6-4f26-83f5-048ac646cd88)**
Soru Kökü: On dört yaşındaki kız hasta,çenesinde asimetri şikayetiyle başvurmuştur. Alınan sefalometrik ve periapikal radyografilerde lokalize radyolüsent bir alan izlenmiştir. Biyopsi sonucu 'Santral dev hücreli granülom' gelen bu hastada, lezyonun radyografik merkez üssünün en büyük olasılıkla bulunduğu spesifik bölge aşağıdakilerden hangisidir?
Doğru Şık (A): Maksiller kaninlerin anterioru
Açıklama: Genç hastalarda (örneğin puberte dönemi) santral dev hücreli granülomların merkez üsleri en sık maksiller kaninlerin anteriorunda (önünde) konumlanma eğilimi gösterir. Erişkinlerde ve genel popülasyonda ise daha sık mandibula birinci moların anteriorunda yerleşir. Yaşa bağlı bu spesifik lokalizasyon farklılığı, santral dev hücreli granülomun biyolojik davranışı için tanısal bir markerdır.

**Soru 2 (ID: cb9a9660-aeb8-45eb-844f-101ec3ef9621)**
Soru Kökü: Radyografik incelemede belirli anomaliler, hücresel kökenlerine uygun olarak sadece spesifik anatomik bölgelerde gelişme eğilimindedir. Sıklıkla anterior dişleri içine alan ve periodontal ligament kaynaklı olduğu düşünülen periapikal semental displazinin (periapikal kemik displazisi) radyografik merkez üssü aşağıdakilerden hangisidir?
Doğru Şık (A): Dişlerin periapikal bölgesi
Açıklama: Periapikal semental displazi, adından da anlaşılacağı üzere dental apeks komşuluğundaki sementoblastik/fibroblastik aktivitenin reaktif bir sonucudur ve merkez üssü daima dişlerin periapikal bölgesindedir. Mandibular kanalın inferioru veya kondil gibi uzak bazal bölgelerde (çeldirici lokasyonlar) odontojenik kökenli bu displazinin görülmesi mümkün değildir. Klinisyen periapikal yerleşimli sklerotik odakları gördüğünde pulpal vitalite testiyle periapikal enfeksiyonları ekarte ederek displazi tanısını doğrular.

---

### ÇİFT 114 (Benzerlik: 0.72)

**Soru 1 (ID: 4d8ce200-5f35-4c64-bb24-4f6b63fb380f)**
Soru Kökü: 'Sabun köpüğü' paterni oluşturan lezyonların iç yapısında kemik septaların organizasyonu kilit rol oynar. Radyografide bu görünümü veren patolojiler arasında hem santral dev hücreli tümör hem de santral hemanjiom yer alır. Dev hücreli lezyonlarda bu internal septaların asıl kaynağı aşağıdakilerden hangisidir?
Doğru Şık (C): Reaktif kemik oluşumu
Açıklama: Dev hücreli granülomda izlenen sabun köpüğü paternini oluşturan kemikli septalar, lezyonun kendi neoplastik üretimi değil, osteoklastik yıkıma karşı gelişen 'reaktif kemik' oluşumudur. Santral hemanjiomda benzer septalar endotelyal proliferasyona tepki olarak oluşur; ancak dev hücreli lezyonlardaki reaktif tabiat doğrudan vurgulanmıştır. Bu mekanizma, lezyonun gerçek bir neoplazmdan çok hiperplastik/reaktif bir süreç olabileceği teorisini destekler.

**Soru 2 (ID: c426059e-0ba3-446d-bab2-2df2063b4c1f)**
Soru Kökü: Santral hemanjiom, radyografik internal yapısında 'sabun köpüğü' ve 'bal peteği' gibi çok bölmeli paternler üretebilir. Ancak bu vasküler lezyonun en karakteristik ve ayırt edici kemik septa formasyonu, septaların merkezi bir noktadan dışa doğru yayılım göstermesiyle oluşan yapıdır. Bu spesifik görünüm aşağıdakilerden hangisiyle adlandırılır?
Doğru Şık (B): Tekerlek görünümü
Açıklama: Santral hemanjiom içindeki damar yapılarının radyal genişlemesi, etraflarındaki kemik septaların merkezi bir odaktan çevreye doğru uzanmasına neden olarak karakteristik 'tekerlek' (veya at arabası tekerliği) görünümünü yaratır. Tenis raketi görünümü miksomada doğrusal ve düz kesişen septalarla karakterizeyken, tekerlek görünümü tamamen vasküler hemodinamiğin sentrifugal baskısının sonucudur. Bu patern, intraosseöz anevrizmalardan çok gerçek hemanjiomların yapısını tanımlar.

---

### ÇİFT 115 (Benzerlik: 0.72)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: cf10d7f0-7096-41bf-a6ab-21583184e20b)**
Soru Kökü: Yirmi iki yaşında erkek hastanın rutin radyografik muayenesinde gömülü sol alt 20 yaş dişinin (38) koronal kısmını çevreleyen düzgün sınırlı bir radyolusent alan saptanıyor. Bu lezyonun ayırıcı tanısında, dentigeröz kist ile hiperplastik folikülü birbirinden ayırmak için radyografik olarak **en belirleyici** faktör aşağıdakilerden hangisidir?
Doğru Şık (E): Lezyonun koronal bölgedeki boyutu
Açıklama: Hem dentigeröz kist hem de hiperplastik dental folikül koronal merkez üslüdür ve radyografide dişi çevreleyen iyi sınırlı radyolusensi şeklinde görülür; ancak kistler hidrolik büyüme potansiyeline sahip oldukları için foliküle kıyasla belirgin şekilde daha büyük boyutlara ulaşırlar. Kök rezorpsiyonu veya kortikal sınırın derecesi bu iki antiteyi net olarak ayıramaz, zira her ikisi de genişleyen iyi huylu yapı formundadır. Pratik radyolojik yorumlamada foliküler boşluğun 3-4 mm'yi aşan boyutu, kist oluşumu lehine spesifik bir tanısal kriter kabul edilir.

---

### ÇİFT 116 (Benzerlik: 0.72)

**Soru 1 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 117 (Benzerlik: 0.72)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: 331464f4-2636-4697-bf20-22a974da6d7d)**
Soru Kökü: Panoramik radyografide saptanan ve 'soğan kabuğu' (onion-skin) olarak adlandırılan, lamelli periost reaksiyonu paterni, periosteumun ardışık eksüda/uyaran ataklarına yeni kemik tabakaları üreterek verdiği reaktif bir yanıttır. Aşağıdakilerden hangisinin radyografide bu paterni oluşturması **beklenmez**?
Doğru Şık (D): Periapikal semental displazi
Açıklama: Soğan kabuğu reaksiyonu; enflamatuar durumlarda (Garre osteomiyeliti), Langerhans hücreli histiyositozda, lösemide ve Ewing sarkomunda izlenen katmanlı periost yanıtıdır. Periapikal semental displazi ise kök uçlarında kortikal kalınlaşma veya sklerotik halo ile karakterize kemik içi reaktif bir süreçtir, dış periostta soğan kabuğu şeklinde lamelli apozisyon yapmaz.

---

### ÇİFT 118 (Benzerlik: 0.72)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 119 (Benzerlik: 0.72)

**Soru 1 (ID: 2bfba921-dea3-4681-b558-912976f6dfb1)**
Soru Kökü: Yirmi sekiz yaşındaki hastada kavisli ve kalın kemik septalarının iç içe geçmesiyle oluşan, hidrolik büyüme paternli multiloküler bir yapı izlenmiştir. Radyolojik raporda 'sabun köpüğü' görünümü olarak tarif edilen bu lezyon paterni, aşağıdakilerden hangisine aittir?
Doğru Şık (A): Ameloblastom
Açıklama: Ameloblastomda oluşan iç septalar kavisli ve kalındır; bu da radyografide multiloküler 'sabun köpüğü' (soap bubble) paternini yaratır. Odontojenik miksomada ise septalar genellikle düz ve ince olup 'tenis raketi' manzarası oluşturur. Basit kemik kisti taraklı kenar yapar ancak gerçek iç septa oluşturmaz.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 120 (Benzerlik: 0.72)

**Soru 1 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 121 (Benzerlik: 0.72)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

---

### ÇİFT 122 (Benzerlik: 0.72)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 123 (Benzerlik: 0.72)

**Soru 1 (ID: 0efef2eb-b6b5-4ef2-9f03-3fbc58af4cec)**
Soru Kökü: Kemik içi lezyonların şekli, genellikle patofizyolojik mekanizmalarıyla paraleldir. Sıvı basıncının etkisiyle hidrolik olarak genişleyen, radyografide dairesel veya şişirilmiş bir balon biçiminde ('balon benzeri') bir şekil alan kemik patolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti (ve foliküler kistler), içerdikleri sıvı veya kan volümünün hidrolik basıncı sayesinde kemiği dışa doğru iterek 'şişirilmiş balon' formunda izole, yuvarlak genişlemelere neden olur. Fibröz displazi sıvı değil kemik matriksiyle dolu olduğundan merkezsiz büyürken, osteomlar yoğun radyoopak kitlelerdir. Balon görünümü kistik/hidrolik dinamiğin kanıtıdır.

**Soru 2 (ID: 2daf61fe-48e1-425a-a859-a31b9e1fcbab)**
Soru Kökü: Anevrizmal kemik kisti, mandibulada belirgin kortikal incelmeye neden olabilen ekspansif bir lezyondur. Bu lezyonun radyografisinde hidrolik genişlemeye bağlı olarak genel formunda hangi görünüm izlenebilirken, kemik içindeki endosteal sınırlarında hangi ilerleme paterni dikkati çeker?
Doğru Şık (B): Balon benzeri görünüm / Taraklı görünüm
Açıklama: Anevrizmal kemik kisti, kan göllenmeleri ve hemodinamik basınç (hidrolik etki) nedeniyle genel morfolojide 'balon benzeri' bir şişkinlik yaratırken; lezyonun kortikal ve endosteal sınırlara doğru girintili çıkıntılı ilerlemesi mikroskobik ölçekte 'taraklı görünüm' meydana getirir. Zımba deliği veya invaziv sınır, keskin yıkım yapan veya kanseröz lezyonlarda görülür, kistik genişlemelerde değil. Bu ikili görüntü, ebat arttıkça balonlaşan ama sınırlarda anatomik yapılara saygı duyarak taraklanan biyomekaniğin kanıtıdır.

---

### ÇİFT 124 (Benzerlik: 0.72)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: e14ac615-4834-4823-9533-1e1a81d11895)**
Soru Kökü: Aşağıdaki malign lezyonlardan hangisi, dişi destekleyen alveolar kemiği hızlıca infiltre ve destrükte ederek radyografide tipik "yüzen diş" (floating in air) manzarası oluşturan patolojiler arasında **yer almaz**?
Doğru Şık (D): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom benign, lokal agresif bir lezyondur ve genellikle taraklı sınırlar, zayıf septalar içeren ekspansif bir kitle (sabun köpüğü benzeri) oluşturur, permeatif yıkım ve yüzen diş yapmaz. Primer intraosseous karsinoma, osteosarkom, kondrosarkom ve lenfoma gibi maligniteler ise kemiği adeta eriterek dişleri boşlukta yüzüyormuş gibi desteksiz bırakır.

---

### ÇİFT 125 (Benzerlik: 0.72)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 126 (Benzerlik: 0.72)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

---

### ÇİFT 127 (Benzerlik: 0.72)

**Soru 1 (ID: 87c2a96c-f6ae-4164-9132-711de9486ead)**
Soru Kökü: Bir lezyonun çenedeki genişlemesinin şekli klinik tanıda yol göstericidir. Lezyonun hidrolik basınca işaret eden 'şişirilmiş bir balona benzer, dairesel' formda kemiği ittiği radyografik görünüme (Balon benzeri görünüm) sahip olabilen iki ana patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti ve Folliküler kist
Açıklama: Balon benzeri (hidrolik dairesel) radyografik ekspansiyon sıvıyla dolu kavitelerin eşit yönde yaptığı hidrostatik basınca bağlıdır. Anevrizmal kemik kisti (içi kan dolu göllenmeler) ve foliküler kist (kistik epiteliyum içi sıvı dairesel genişler) Tablo 9'da spesifik olarak 'Balon benzeri görünüm' ile eşleştirilmiştir.

**Soru 2 (ID: dc66024c-1dac-4b2f-b671-18da583ac66a)**
Soru Kökü: Radyografik görüntüleme ilkeleri doğrultusunda, çenelerde "armut şekilli" (pear-shaped) radyolüsent bir görünüm veren patolojiler arasında aşağıdakilerden hangisi bulunur?
Doğru Şık (D): Radiküler kist
Açıklama: Tablo 9'a göre armut şekilli görünüme neden olan temel iki kist Globulomaksiller kist ve Radiküler kisttir. Radiküler kist özellikle premolar bölgede, kökün anatomisi etrafında bu formu alabilirken, nazopalatin kist kalp şeklinde, travmatik kemik kisti ise taraklı yapıda izlenir.

---

### ÇİFT 128 (Benzerlik: 0.72)

**Soru 1 (ID: 36856397-bdc8-4ce1-819f-305e83a6a165)**
Soru Kökü: Belirli iskelet sistemi hastalıkları diş hekimliğinde eşsiz radyografik metaforlarla isimlendirilir. Çenelerde genel artmış radyopasiteyle beraber izlenen ve özellikle 'şamdan görünümü' olarak adlandırılan bulgu aşağıdaki sendrom veya anomalilerin hangisinde tipik olarak karşımıza çıkar?
Doğru Şık (C): Piknodizostozis
Açıklama: Piknodizostozis, kemik rezorpsiyon defektine bağlı yaygın osteoskleroz, akroosteolizis ve kafa tabanında 'şamdan' görünümüne yol açan genetik bir kemik hastalığıdır. Paget hastalığı atılmış pamuk, miyelom ise zımba deliği görüntüsüyle karakterizedir. Şamdan görünümü piknodizostozise has sklerotik anomalilerin spesifik bir dizilimidir.

**Soru 2 (ID: 6e07a75e-f9f1-4543-91f7-109de6e4c4d2)**
Soru Kökü: Çocukluk çağında başlayan ve radyografide diş köklerini desteksiz bırakan yaygın litik lezyonlar ile "yüzen diş" manzarası verebilen patolojiler, Tablo 9'da sınıflandırılmıştır. Buna göre aşağıdaki sendrom veya hastalıklardan hangisi çenelerde bu görünüme neden **olmaz**?
Doğru Şık (D): Piknodizostozis
Açıklama: Piknodizostozis osteoklastik disfonksiyona bağlı yaygın kemik sklerozu ile seyreder ve radyografide kemik yıkımı değil, tebeşir veya şamdan görünümünde kemik yoğunlaşması yapar. Langerhans hücreli histiyositoz ve Papillon-Lefèvre sendromu ise şiddetli kemik yıkımı ve erken diş kaybına yol açarak tipik yüzen diş formasyonu yaratır.

---

### ÇİFT 129 (Benzerlik: 0.72)

**Soru 1 (ID: e6c31376-91c2-4b36-ac8a-6a72b2ca9fc4)**
Soru Kökü: Elli yaşında erkek hasta, son aylarda alt dudağında giderek artan uyuşukluk (anestezi) şikayetiyle kliniğe başvuruyor. Radyografik incelemede inferior alveolar kanalın üst korteksinde ciddi yıkım saptanıyor ve kanal anatomisi boyunca aşağıya doğru gelişen sınırları belirsiz irregüler bir genişleme izleniyor. Bu klinik ve spesifik radyografik bulgular birlikte değerlendirildiğinde aşağıdaki lezyon tiplerinden hangisi **en güçlü** ihtimaldir?
Doğru Şık (D): Malign neoplazm
Açıklama: Malign hücrelerin nörotropik yayılım veya osteoklastik yıkımla sinir kanalını (perineural invazyon) infiltre etmesi, kanal korteksinin düzensizce erimesine (destrüksiyon) ve kliniğe dudak parestezisi/uyuşukluğu (Vincent bulgusu) olarak yansımasına sebep olur. Basit kemik kisti veya dev hücreli lezyonlar (çeldirici şıklar) dişi ve kanalı iter ancak sinir kılıfını invaze etmediği için klinik anestezi tablosuna yol açmaz. Kanalın düzensiz genişlemesiyle birlikte görülen duyu kaybı, aksi ispatlanana kadar osteosarkom veya metastatik malign neoplazm şüphesi doğurur.

**Soru 2 (ID: f496580c-5eb9-4c6f-aec2-d30bc3df0d98)**
Soru Kökü: İnferior alveolar kanalın radyografik incelemesinde kanal trasesinin kortikal sınırları bozulmadan (intakt) kalarak düzgün bir biçimde genişlediği görülmüştür. Bu spesifik genişleme paterninin kanal içerisinde yerleşimli aşağıdaki patolojilerden hangisini göstermesi **en az olasıdır**?
Doğru Şık (B): Malign lenfoma
Açıklama: Kanal korteksinin bozulmadan (intakt olarak) genişlemesi, kanal içerisindeki yavaş büyüyen benign vasküler (hemanjiyom) veya nöral (nörom, schwannom) tümörleri işaret eder. Malign bir neoplazm (lenfoma vb.) kanal çevresindeki kortikal kemikte düzensiz yıkım ve invazyon (korteks kaybı) yapar, intakt bir genişleme bırakmaz.

---

### ÇİFT 130 (Benzerlik: 0.72)

**Soru 1 (ID: 3c8c2e63-7761-401f-afda-68798fae7194)**
Soru Kökü: Radyografik değerlendirmede bazı odontojenik keratokist ve basit kemik kistlerinde lezyonun sınırlarının pürüzsüz hidrolik bir balon formundan ziyade 'dalgalı ve taraklı' bir yapı sergilediği görülür. Bu 'taraklı çevre' morfolojisi, radyografide zaman zaman lezyonun aşağıdaki iç yapı özelliklerinden hangisiyle sahip olduğunu izlenimi verir?
Doğru Şık (C): Multiloküler
Açıklama: Dalgalı ve taraklı (scalloped) çevre yapısı, lezyonun kortikal kemik aralarından kök kök ilerlemesi sonucunda radyografide adeta birden çok odacıktan oluştuğu, yani multiloküler olduğu yanılsamasını yaratabilir. Buzlu cam ve pamuk atığı görünümleri sınır değil internal kalsifikasyon (trabekülasyon) paternleriyle ilgilidir. Bu nedenle gerçek internal septasyon ile periferik taraklanmanın ayırımı diagnozda kritik bir basamaktır.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 131 (Benzerlik: 0.72)

**Soru 1 (ID: 94dcecf8-ddb7-4b67-b9aa-66af46f7179a)**
Soru Kökü: Odontojenik kistlerin radyografik formları çeşitlilik gösterebilir. Genellikle koronal bir folikül etrafında 'balon benzeri' (hidrolik) genişleme göstermesi beklenen, ancak periferal anatomik kısıtlamalar veya çoklu lobülasyonlar nedeniyle radyografide 'taraklı görünüm' de sergileyebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Dentigeröz kist
Açıklama: Dentigeröz kist, gömülü bir dişin kuronunu çevreleyen folikülün hidrolik genişlemesiyle klasik olarak 'balon benzeri' form alır ancak kısıtlı kemik anatomisinde büyürken komşu yapılara adapte olarak 'taraklı görünüm' de sergileyebilir. Radiküler kist apeks çevresinde gelişir ve taraklı bir ilerleme göstermez, genellikle armut şekillidir. Bu ikili morfolojik varyasyon potansiyeli, dentigeröz kistin biyomekanik büyüme karakterini yansıtır.

**Soru 2 (ID: c2247c04-86d5-4f3d-9486-b16de4cc30d0)**
Soru Kökü: Lezyon çevresinde izlenen 'taraklı görünüm', bazı kist ve tümörlerin sınır karakteristiklerini tanımlamada kullanılır. Aşağıdaki patolojilerden hangisi radyografik olarak tipik taraklı görünüme sahip **değildir**?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler periferal kısıtlamalar altında 'armut şekilli' görünüm oluşturma eğilimindeyken, taraklı görünüm sergilemezler. Dentigeröz kist, travmatik kemik kisti, anevrizmal kemik kisti ve dev hücreli granülom ise radyografik sınırlarında tipik olarak 'taraklı görünüm' verir. Sınır morfolojisindeki bu farklılık, inflamatuar kaynaklı bir lezyon olan radiküler kisti diğer gelişimsel veya reaktif patolojilerden ayırır.

---

### ÇİFT 132 (Benzerlik: 0.72)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

---

### ÇİFT 133 (Benzerlik: 0.72)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 134 (Benzerlik: 0.72)

**Soru 1 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 135 (Benzerlik: 0.72)

**Soru 1 (ID: 92720593-9dfc-49a1-ab9b-020f06c166ad)**
Soru Kökü: Altmış yaşında erkek hasta, çene kemiklerinde ve kafatasında yaygın ağrı şikayetiyle başvuruyor. Radyografide, etrafında hiçbir kemik reaksiyonunun belirgin olmadığı, lezyon ile sağlıklı doku arasında çok dar bir geçiş bölgesine sahip, adeta 'bir kağıt zımba ile delinmiş' görünümü veren multipl keskin sınırlı radyolusent alanlar izleniyor. Bu spesifik sınır tipinin aşağıdaki hastalıklardan hangisinde görülme olasılığı **en yüksektir**?
Doğru Şık (C): Multipl miyelom
Açıklama: Multipl miyelomdaki plazma hücre proliferasyonu, kemikte osteoblastik reaksiyona fırsat vermeden son derece hızlı ve lokalize litik alanlar oluşturur, bu da radyografide sklerotik kenarı olmayan keskin 'zımba deliği' (punched-out) periferlere neden olur. Paget veya fibröz displazide ise osteoblastik aktivite mevcuttur ve kemik reaksiyonu (buzlu cam, atılmış pamuk) belirgindir. Çenelerde ve kraniyal kasada sklerotik halosu olmayan çoklu zımba deliği lezyonları miyelom tanısı için patognomoniktir.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 136 (Benzerlik: 0.72)

**Soru 1 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

**Soru 2 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

---

### ÇİFT 137 (Benzerlik: 0.72)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

---

### ÇİFT 138 (Benzerlik: 0.72)

**Soru 1 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 139 (Benzerlik: 0.72)

**Soru 1 (ID: 0efef2eb-b6b5-4ef2-9f03-3fbc58af4cec)**
Soru Kökü: Kemik içi lezyonların şekli, genellikle patofizyolojik mekanizmalarıyla paraleldir. Sıvı basıncının etkisiyle hidrolik olarak genişleyen, radyografide dairesel veya şişirilmiş bir balon biçiminde ('balon benzeri') bir şekil alan kemik patolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti (ve foliküler kistler), içerdikleri sıvı veya kan volümünün hidrolik basıncı sayesinde kemiği dışa doğru iterek 'şişirilmiş balon' formunda izole, yuvarlak genişlemelere neden olur. Fibröz displazi sıvı değil kemik matriksiyle dolu olduğundan merkezsiz büyürken, osteomlar yoğun radyoopak kitlelerdir. Balon görünümü kistik/hidrolik dinamiğin kanıtıdır.

**Soru 2 (ID: e2470054-76ac-499b-af7e-40ea93628437)**
Soru Kökü: Bir maksillofasiyal lezyonun radyografik değerlendirmesinde, dairesel yapıda ve her yöne eşit genişlemiş, 'şişirilmiş bir balona' benzer biçimde hidrolik bir büyüme formasyonu tespit edilmiştir. Bu radyografik makroskobik biçim primer olarak aşağıdaki patoloji gruplarının hangisinin karakteristik özelliğidir?
Doğru Şık (A): Kistler
Açıklama: Şişirilmiş bir balon (hidrolik) görünümü, lümen içerisindeki sıvının epitelyal duvara dışa doğru eşit hidrostatik basınç uygulaması prensibiyle büyüyen kistlere özgü bir morfolojidir. Displaziler veya maligniteler çevresel direnç bölgelerine veya anatomik planlara göre asimetrik invazyon gösterirler. Bu osmotik basınç mekanizması, kistlerin neden pürüzsüz ve dairesel sınırlar çizdiğinin fiziksel açıklamasıdır.

---

### ÇİFT 140 (Benzerlik: 0.72)

**Soru 1 (ID: 385def3b-0df9-4859-ba79-1f674c7f92a7)**
Soru Kökü: 65 yaşında erkek hasta sağ üst çenesinde hızla büyüyen sert bir kitle ile kliniğe başvuruyor. Panoramik radyografide alveolar kretten maksiller sinüse doğru uzanan, kemik yapısında sınırları belirsiz ve infiltratif özellik gösteren yaygın bir "permeatif yıkım" paterni izleniyor. Tablo 9'da sunulan klasik görünümler referans alındığında, bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Maksilla karsinomu
Açıklama: Maksilla karsinomu (Carcinoma of the maxilla), alveolar proçesten sinüs tabanına kadar kemik trabeküllerini agressif şekilde eriten invaziv bir tümördür ve radyografide kemiği sünger gibi yiyen permeatif yıkım manzarası gösterir. Malign lenfoma da permeatif yıkım yapabilse de, maksilla epitelyal dokusu kaynaklı hızlı agresyon klinik ve demografik olarak maksilla karsinomuna daha spesifiktir.

**Soru 2 (ID: 8d03871e-488a-4630-8c85-127daa78a946)**
Soru Kökü: Altmış beş yaşındaki erkek hastanın çene grafilerinde, normal trabeküler paternin yerini almış belirgin bir reaktif kemik üretimi saptanmıştır. Anamnezinde malinite hikayesi olan hastada gözlenen bu 'osteoblastik reaksiyon', en olası hangi primer odaklı metastazın sonucudur?
Doğru Şık (C): Prostat
Açıklama: Prostat ve meme dokusundan kaynaklanan metastatik lezyonlar, çene kemiklerinde yıkımdan (osteolitik) ziyade kemik yapımını tetikleyerek karakteristik bir 'osteoblastik reaksiyon' oluştururlar. Diğer birçok organ karsinomu (akciğer, mide, tiroid) çenelerde sınırları belirsiz invaziv (permeatif/güve yeniği) osteolitik radyolüsensiler meydana getirir.

---

### ÇİFT 141 (Benzerlik: 0.72)

**Soru 1 (ID: e3d5e2e3-c5e0-4b53-8e16-588455fa46a9)**
Soru Kökü: Otuz beş yaşındaki hastanın radyografisinde alveolar kemiğin marjinal olarak korunduğu, ancak dişlerin kökleri etrafındaki kemiğin tamamen eridiği ve dişlerin boşlukta 'yüzen diş' (floating teeth) görünümü aldığı saptanmıştır. Aşağıdakilerden hangisi bu duruma yol açan agresif patolojiler arasında **yer almaz**?
Doğru Şık (C): Sjögren sendromu
Açıklama: Sjögren sendromu, tükrük bezlerini etkileyen bir otoimmün hastalık olup siyalografide 'kiraz çiçeği' görünümü yapar, ancak alveolar kemikte yüzen diş tablosuna sebep olmaz. Yüzen diş tablosu, diş destek kemiğinin agresif bir şekilde lokal olarak yok edildiği Langerhans hücreli histiyositoz, malign tümörler veya şiddetli/agresif periodontitiste (Papillon-Lefevre dahil) izlenir.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 142 (Benzerlik: 0.72)

**Soru 1 (ID: 8d03871e-488a-4630-8c85-127daa78a946)**
Soru Kökü: Altmış beş yaşındaki erkek hastanın çene grafilerinde, normal trabeküler paternin yerini almış belirgin bir reaktif kemik üretimi saptanmıştır. Anamnezinde malinite hikayesi olan hastada gözlenen bu 'osteoblastik reaksiyon', en olası hangi primer odaklı metastazın sonucudur?
Doğru Şık (C): Prostat
Açıklama: Prostat ve meme dokusundan kaynaklanan metastatik lezyonlar, çene kemiklerinde yıkımdan (osteolitik) ziyade kemik yapımını tetikleyerek karakteristik bir 'osteoblastik reaksiyon' oluştururlar. Diğer birçok organ karsinomu (akciğer, mide, tiroid) çenelerde sınırları belirsiz invaziv (permeatif/güve yeniği) osteolitik radyolüsensiler meydana getirir.

**Soru 2 (ID: 92720593-9dfc-49a1-ab9b-020f06c166ad)**
Soru Kökü: Altmış yaşında erkek hasta, çene kemiklerinde ve kafatasında yaygın ağrı şikayetiyle başvuruyor. Radyografide, etrafında hiçbir kemik reaksiyonunun belirgin olmadığı, lezyon ile sağlıklı doku arasında çok dar bir geçiş bölgesine sahip, adeta 'bir kağıt zımba ile delinmiş' görünümü veren multipl keskin sınırlı radyolusent alanlar izleniyor. Bu spesifik sınır tipinin aşağıdaki hastalıklardan hangisinde görülme olasılığı **en yüksektir**?
Doğru Şık (C): Multipl miyelom
Açıklama: Multipl miyelomdaki plazma hücre proliferasyonu, kemikte osteoblastik reaksiyona fırsat vermeden son derece hızlı ve lokalize litik alanlar oluşturur, bu da radyografide sklerotik kenarı olmayan keskin 'zımba deliği' (punched-out) periferlere neden olur. Paget veya fibröz displazide ise osteoblastik aktivite mevcuttur ve kemik reaksiyonu (buzlu cam, atılmış pamuk) belirgindir. Çenelerde ve kraniyal kasada sklerotik halosu olmayan çoklu zımba deliği lezyonları miyelom tanısı için patognomoniktir.

---

### ÇİFT 143 (Benzerlik: 0.72)

**Soru 1 (ID: 6125496a-8203-4d2a-98c9-8c613e18e584)**
Soru Kökü: Alt çenede saptanan radyolüsent bir patolojinin lokalizasyon analizi sırasında, mandibular kanal (IAC) korteksinde yıkım ile birlikte düzensiz bir genişleme izlenmesi en olası olarak hangi durumu işaret eder?
Doğru Şık (D): Kanal boyunca aşağı doğru gelişen malign neoplazm
Açıklama: Mandibular kanalın kortikal yıkımla birlikte düzensiz ve sınırları belirsiz şekilde genişlemesi, tümörün sinir yolu boyunca perineural yayıldığını gösterir ve bu durum genellikle malign bir neoplazmı işaret eder. Kortikal sınır bozulmadan düzenli bir genişleme olsaydı, nöral veya vasküler kökenli benign bir lezyon düşünülürdü. Anatomik bariyerlerin bu şekilde infiltratif yıkımı agresivite göstergesidir.

**Soru 2 (ID: e6c31376-91c2-4b36-ac8a-6a72b2ca9fc4)**
Soru Kökü: Elli yaşında erkek hasta, son aylarda alt dudağında giderek artan uyuşukluk (anestezi) şikayetiyle kliniğe başvuruyor. Radyografik incelemede inferior alveolar kanalın üst korteksinde ciddi yıkım saptanıyor ve kanal anatomisi boyunca aşağıya doğru gelişen sınırları belirsiz irregüler bir genişleme izleniyor. Bu klinik ve spesifik radyografik bulgular birlikte değerlendirildiğinde aşağıdaki lezyon tiplerinden hangisi **en güçlü** ihtimaldir?
Doğru Şık (D): Malign neoplazm
Açıklama: Malign hücrelerin nörotropik yayılım veya osteoklastik yıkımla sinir kanalını (perineural invazyon) infiltre etmesi, kanal korteksinin düzensizce erimesine (destrüksiyon) ve kliniğe dudak parestezisi/uyuşukluğu (Vincent bulgusu) olarak yansımasına sebep olur. Basit kemik kisti veya dev hücreli lezyonlar (çeldirici şıklar) dişi ve kanalı iter ancak sinir kılıfını invaze etmediği için klinik anestezi tablosuna yol açmaz. Kanalın düzensiz genişlemesiyle birlikte görülen duyu kaybı, aksi ispatlanana kadar osteosarkom veya metastatik malign neoplazm şüphesi doğurur.

---

### ÇİFT 144 (Benzerlik: 0.72)

**Soru 1 (ID: 7cd17923-61e3-41b3-a20a-e4fa964eb086)**
Soru Kökü: Odontojenik lezyonların iç yapı değerlendirmesinde, fibröz doku içerisinde mikroskobik kalsifikasyon odaklarının zamanla birleşmesi sonucu ortaya çıkan radyografik "kum benzeri" (sand-like) görünüm aşağıdaki patolojilerin hangisinde karakteristik **değildir**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma radyografik olarak tamamen litik, radyolüsent bir gelişim izler ve kemik kalsifikasyonu üretmez; çoklu kavitasyonlara yol açarak 'bal peteği' veya 'sabun köpüğü' deseni yapar. Pindborg tümörü (KEOT), Gorlin kisti ve Adenoameloblastoma (AOT) ise kalsifiye epitel ürünleri ürettikleri için içlerinde radyografik olarak 'kar yağdı' veya 'kum benzeri' ince kalsifikasyonlar barındırırlar.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 145 (Benzerlik: 0.72)

**Soru 1 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 146 (Benzerlik: 0.71)

**Soru 1 (ID: 5a6c8ced-8387-413d-aaee-e41989d8ffc3)**
Soru Kökü: Radyolüsent bir zemin içerisinde amorf, dağınık yerleşimli küçük radyoopak kalsifikasyon odaklarının izlendiği "kar yağdı" (driven snow) manzarası aşağıdaki patolojilerden hangisi için spesifiktir?
Doğru Şık (A): Pindborg tümörü
Açıklama: Pindborg tümörü (Kalsifiye Epitelyal Odontojenik Tümör), internal yapısında tümör adacıkları içinde oluşan kalsifikasyonlar nedeniyle radyografik olarak tipik 'kar yağdı' manzarası sunar. Fibröz displazi buzlu cam, sementoblastom ise sınırları kortikal hatla çizili tekerlek veya güneş ışını benzeri yoğun kitle görüntüsüyle ayrılır. Karakteristik amorf kalsifikasyon dizilimi Pindborg tümörünün imza bulgusudur.

**Soru 2 (ID: ba332fca-941d-4907-9023-9ed707216732)**
Soru Kökü: Kemik trabeküllerinin sayıca artmış, kısa ve strese yanıt vermeden rastgele yönlenmesi sonucu ortaya çıkan "buzlu cam" (ground glass) veya "portakal kabuğu" görünümü aşağıdaki patolojilerden hangisinde iç yapı bulgusu olarak **görülmez**?
Doğru Şık (E): Ameloblastoma
Açıklama: Ameloblastoma belirgin kemikli septaların lezyonu böldüğü çok gözlü 'sabun köpüğü' veya 'bal peteği' görünümüne neden olan benign bir tümördür. Florid semento-osseöz displazi, semento-ossifying fibroma, Paget hastalığı ve greft uygulamalarında ise ince trabeküllerin düzensiz organizasyonuna bağlı homojen bulanıklık olan buzlu cam manzarası izlenir.

---

### ÇİFT 147 (Benzerlik: 0.71)

**Soru 1 (ID: e2470054-76ac-499b-af7e-40ea93628437)**
Soru Kökü: Bir maksillofasiyal lezyonun radyografik değerlendirmesinde, dairesel yapıda ve her yöne eşit genişlemiş, 'şişirilmiş bir balona' benzer biçimde hidrolik bir büyüme formasyonu tespit edilmiştir. Bu radyografik makroskobik biçim primer olarak aşağıdaki patoloji gruplarının hangisinin karakteristik özelliğidir?
Doğru Şık (A): Kistler
Açıklama: Şişirilmiş bir balon (hidrolik) görünümü, lümen içerisindeki sıvının epitelyal duvara dışa doğru eşit hidrostatik basınç uygulaması prensibiyle büyüyen kistlere özgü bir morfolojidir. Displaziler veya maligniteler çevresel direnç bölgelerine veya anatomik planlara göre asimetrik invazyon gösterirler. Bu osmotik basınç mekanizması, kistlerin neden pürüzsüz ve dairesel sınırlar çizdiğinin fiziksel açıklamasıdır.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 148 (Benzerlik: 0.71)

**Soru 1 (ID: d7ca7bae-94b6-4159-9749-2bc9370b2a54)**
Soru Kökü: Kemik içi lezyonların dış periferinde ince ve oldukça homojen yapıda, radyoopak ince bir reaktif kemik hattı saptanmıştır. Sınır tipolojisi 'kortikal kenar' olarak adlandırılan bu morfoloji, aşağıdaki lezyon gruplarının hangisinde izlenir?
Doğru Şık (E): Kistler ve yavaş büyüyen iyi huylu tümörler
Açıklama: Kortikal kenar, lezyonun büyüme hızının çevre kemiğin yeni kemik üreterek (osteoblastik aktivite ile) bu basıncı karşılamasına yetecek kadar yavaş olduğu durumlarda, yani kistler ve iyi huylu tümörlerde görülür. Hızlı gelişen maligniteler veya akut enfeksiyonlar osteoblastların sınır oluşturmasına izin vermeyecek hızda doku yıktıkları için invaziv sınırlar oluştururlar. Bu reaktif ince radyoopak hat lezyonun biyolojik davranışının benign olduğunu destekler.

**Soru 2 (ID: f57aadcc-09a9-4caf-9442-da4ae0020b63)**
Soru Kökü: Radyografide kalın, genişliği tek tip olmayan ve çevresindeki kemik reaksiyonunu uyaran radyoopak geçiş bölgesi formundaki 'sklerotik sınır'ın temel patofizyolojik anlamı, aşağıdakilerden hangisini yansıtmasıdır?
Doğru Şık (B): Lezyonun çevresindeki kemik üretimini uyarmaya yetecek çok yavaş bir büyüme hızı sergilediğini
Açıklama: Sklerotik sınır, lezyon etrafındaki osteoblastların kronik ve zayıf stimülasyona yanıt vererek uzun bir zaman zarfında anormal genişlikte ve kalınlıkta reaktif kemik örmesinin bir sonucudur, bu da lezyonun büyüme hızının oldukça yavaş olduğunu kanıtlar. Malignite veya agresif durumlar kemik yapımına değil hızla yıkıma neden olarak ince invaziv sınırlar oluştururlar. Bu reaktif kalınlaşma, periapikal osseöz displazilerde tipik olarak görülür.

---

### ÇİFT 149 (Benzerlik: 0.71)

**Soru 1 (ID: 6125496a-8203-4d2a-98c9-8c613e18e584)**
Soru Kökü: Alt çenede saptanan radyolüsent bir patolojinin lokalizasyon analizi sırasında, mandibular kanal (IAC) korteksinde yıkım ile birlikte düzensiz bir genişleme izlenmesi en olası olarak hangi durumu işaret eder?
Doğru Şık (D): Kanal boyunca aşağı doğru gelişen malign neoplazm
Açıklama: Mandibular kanalın kortikal yıkımla birlikte düzensiz ve sınırları belirsiz şekilde genişlemesi, tümörün sinir yolu boyunca perineural yayıldığını gösterir ve bu durum genellikle malign bir neoplazmı işaret eder. Kortikal sınır bozulmadan düzenli bir genişleme olsaydı, nöral veya vasküler kökenli benign bir lezyon düşünülürdü. Anatomik bariyerlerin bu şekilde infiltratif yıkımı agresivite göstergesidir.

**Soru 2 (ID: c751d0dd-1847-4fea-8c22-5acce477fcc9)**
Soru Kökü: Otuz beş yaşında kadın hastanın panoramik radyografik incelemesinde, inferior alveolar sinir kanalının korpus bölgesinde kanal kortikal sınırları tamamen korunarak genişlediği (ekspansiyon) saptanıyor. Nörolojik muayenede herhangi bir uyuşukluk veya parestezi bulgusu saptanmıyor. Bu radyografik bulgular ışığında kanal içindeki lezyonun davranışı hakkında **en olası** yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Vasküler veya nöral kökenli benign bir lezyondur.
Açıklama: İnferior alveolar kanal içinde gelişen nörom, schwannom veya hemanjiom gibi benign (iyi huylu) kökenli lezyonlar oldukça yavaş büyüdükleri için, kanalın ince kortikal sınırını yıkmadan, onu iterek ve intakt bırakarak genişletir. Malign neoplazmlar veya invaziv tümörler (çeldirici şıklar) ise hızla kemik destrüksiyonu yaparak korteksi yıkar ve kanal sınırlarının silinmesine, düzensizleşmesine neden olur. Anatomik kortikal plağın bozulmadan çadır gibi genişlemesi, lezyonun yavaş huylu doğasının ve nöral/vasküler kaynağının kesin göstergesidir.

---

### ÇİFT 150 (Benzerlik: 0.71)

**Soru 1 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

**Soru 2 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

---

### ÇİFT 151 (Benzerlik: 0.71)

**Soru 1 (ID: 5a6c8ced-8387-413d-aaee-e41989d8ffc3)**
Soru Kökü: Radyolüsent bir zemin içerisinde amorf, dağınık yerleşimli küçük radyoopak kalsifikasyon odaklarının izlendiği "kar yağdı" (driven snow) manzarası aşağıdaki patolojilerden hangisi için spesifiktir?
Doğru Şık (A): Pindborg tümörü
Açıklama: Pindborg tümörü (Kalsifiye Epitelyal Odontojenik Tümör), internal yapısında tümör adacıkları içinde oluşan kalsifikasyonlar nedeniyle radyografik olarak tipik 'kar yağdı' manzarası sunar. Fibröz displazi buzlu cam, sementoblastom ise sınırları kortikal hatla çizili tekerlek veya güneş ışını benzeri yoğun kitle görüntüsüyle ayrılır. Karakteristik amorf kalsifikasyon dizilimi Pindborg tümörünün imza bulgusudur.

**Soru 2 (ID: e4d31efd-cec0-4138-b0e7-0a32b7b1165a)**
Soru Kökü: Pindborg tümörü, karakteristik kalsifikasyon paternleriyle tanınan epitel kökenli bir patolojidir. Bu tümörün radyografik iç yapısında aşağıdaki görünümlerden hangileri izlenebilir?

I. Kum benzeri görünüm
II. Kar yağdı manzarası
III. Bal peteği görünümü
Doğru Şık (C): I ve II
Açıklama: Pindborg tümörü (kalsifiye epitelyal odontojenik tümör), kalsifiye kütlelerin boyut ve dağılımına bağlı olarak hem 'kar yağdı manzarası' hem de 'kum benzeri görünüm' oluşturabilir. Bal peteği görünümü ise bu lezyonda izlenmez; daha çok ameloblastoma veya odontojenik miksoma gibi multilocüler lezyonların özelliğidir. Bu iki farklı kalsifikasyon paterninin aynı lezyonda raporlanması, Pindborg tümörünün radyografik spektrumunun genişliğini yansıtır.

---

### ÇİFT 152 (Benzerlik: 0.71)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 153 (Benzerlik: 0.71)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: cf10d7f0-7096-41bf-a6ab-21583184e20b)**
Soru Kökü: Yirmi iki yaşında erkek hastanın rutin radyografik muayenesinde gömülü sol alt 20 yaş dişinin (38) koronal kısmını çevreleyen düzgün sınırlı bir radyolusent alan saptanıyor. Bu lezyonun ayırıcı tanısında, dentigeröz kist ile hiperplastik folikülü birbirinden ayırmak için radyografik olarak **en belirleyici** faktör aşağıdakilerden hangisidir?
Doğru Şık (E): Lezyonun koronal bölgedeki boyutu
Açıklama: Hem dentigeröz kist hem de hiperplastik dental folikül koronal merkez üslüdür ve radyografide dişi çevreleyen iyi sınırlı radyolusensi şeklinde görülür; ancak kistler hidrolik büyüme potansiyeline sahip oldukları için foliküle kıyasla belirgin şekilde daha büyük boyutlara ulaşırlar. Kök rezorpsiyonu veya kortikal sınırın derecesi bu iki antiteyi net olarak ayıramaz, zira her ikisi de genişleyen iyi huylu yapı formundadır. Pratik radyolojik yorumlamada foliküler boşluğun 3-4 mm'yi aşan boyutu, kist oluşumu lehine spesifik bir tanısal kriter kabul edilir.

---

### ÇİFT 154 (Benzerlik: 0.71)

**Soru 1 (ID: 7020ab06-77ba-465a-9c9e-3a9bd14fd5fd)**
Soru Kökü: Agresif lezyonların diş kökleri üzerindeki etkileri spesifik radyografik paternler doğurabilir. Hızlı ve düzensiz yıkım sonucu kök apekslerinde 'çivi kökler' manzarası oluşturan patolojiler aşağıdaki seçeneklerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Malignant histiyositoma ve Burkitt tümörü
Açıklama: Malignant histiyositoma ve Burkitt tümörü, lokal invazyon hızlarının çok yüksek olması nedeniyle diş köklerinde akut ve düzensiz apikal rezorpsiyona yol açarak 'çivi kökler' görünümü oluşturur. Osteosarkom malign olmasına rağmen köklerden ziyade kemik yapımına odaklanarak 'güneş ışını' paterni verir. Bu spesifik apikal yıkım paterni, karsinom veya sarkomlardan ziyade bu iki agresif tümörün imza radyografik bulgusudur.

**Soru 2 (ID: e1fe33f0-625b-41c5-bfd5-c3933cfacc03)**
Soru Kökü: Sekiz yaşında erkek çocuk hastanın çenesinde hızla büyüyen ağrısız bir şişlik şikayetiyle başvurmuştur. Alınan radyografide diş köklerinde ani ve keskin bir rezorpsiyona sekonder 'çivi kökler' görünümü izlenmiştir. Gelişim hızı ve radyografik patern göz önüne alındığında akla ilk gelmesi gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Burkitt tümörü
Açıklama: Burkitt tümörü, çenelerde aşırı hızlı büyüme ve destrüksiyon ile diş köklerinde kama şeklinde veya düzensiz rezorpsiyon yaratarak 'çivi kökler' manzarası veren agresif bir lenfomadır. Ameloblastoma kök rezorpsiyonu yapabilse de bu genellikle düz bir hizada (bıçak sırtı) gerçekleşir ve çivi benzeri sivrilme beklenmez. Yaş, hız ve çivi kök bulgusu klinik senaryoda doğrudan Burkitt tümörünü işaret etmektedir.

---

### ÇİFT 155 (Benzerlik: 0.71)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 156 (Benzerlik: 0.71)

**Soru 1 (ID: 385def3b-0df9-4859-ba79-1f674c7f92a7)**
Soru Kökü: 65 yaşında erkek hasta sağ üst çenesinde hızla büyüyen sert bir kitle ile kliniğe başvuruyor. Panoramik radyografide alveolar kretten maksiller sinüse doğru uzanan, kemik yapısında sınırları belirsiz ve infiltratif özellik gösteren yaygın bir "permeatif yıkım" paterni izleniyor. Tablo 9'da sunulan klasik görünümler referans alındığında, bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Maksilla karsinomu
Açıklama: Maksilla karsinomu (Carcinoma of the maxilla), alveolar proçesten sinüs tabanına kadar kemik trabeküllerini agressif şekilde eriten invaziv bir tümördür ve radyografide kemiği sünger gibi yiyen permeatif yıkım manzarası gösterir. Malign lenfoma da permeatif yıkım yapabilse de, maksilla epitelyal dokusu kaynaklı hızlı agresyon klinik ve demografik olarak maksilla karsinomuna daha spesifiktir.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 157 (Benzerlik: 0.71)

**Soru 1 (ID: 385def3b-0df9-4859-ba79-1f674c7f92a7)**
Soru Kökü: 65 yaşında erkek hasta sağ üst çenesinde hızla büyüyen sert bir kitle ile kliniğe başvuruyor. Panoramik radyografide alveolar kretten maksiller sinüse doğru uzanan, kemik yapısında sınırları belirsiz ve infiltratif özellik gösteren yaygın bir "permeatif yıkım" paterni izleniyor. Tablo 9'da sunulan klasik görünümler referans alındığında, bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Maksilla karsinomu
Açıklama: Maksilla karsinomu (Carcinoma of the maxilla), alveolar proçesten sinüs tabanına kadar kemik trabeküllerini agressif şekilde eriten invaziv bir tümördür ve radyografide kemiği sünger gibi yiyen permeatif yıkım manzarası gösterir. Malign lenfoma da permeatif yıkım yapabilse de, maksilla epitelyal dokusu kaynaklı hızlı agresyon klinik ve demografik olarak maksilla karsinomuna daha spesifiktir.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 158 (Benzerlik: 0.71)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 159 (Benzerlik: 0.71)

**Soru 1 (ID: 2f403f4d-1341-4d4b-9039-f6babe181229)**
Soru Kökü: 62 yaşında sistemik rahatsızlığı bulunmayan erkek hasta, mandibular posterior dişlerindeki ileri derecede sallanma şikayetiyle başvuruyor. Radyografide dişlerin periapikal bölgesine kadar inen yaygın alveol kemiği kaybı ve dişlerin kemik desteksiz "yüzen diş" görünümü izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İleri periodontal hastalık
Açıklama: İleri periodontal hastalık, yavaş seyirli ancak şiddetli kret rezorpsiyonu ile dişleri tüm destek dokusundan yoksun bırakarak 'yüzen diş' görünümü oluşturur. Agresif periodontitis daha çok genç bireylerde lokalize alanlarda görülürken, Langerhans hücreli histiyositoz sıklıkla pediyatrik yaş grubunda izlenen litik lezyonlardır. İleri yaş ve yaygın yıkım hikayesi periodontal hastalıkla tam uyumludur.

**Soru 2 (ID: e3d5e2e3-c5e0-4b53-8e16-588455fa46a9)**
Soru Kökü: Otuz beş yaşındaki hastanın radyografisinde alveolar kemiğin marjinal olarak korunduğu, ancak dişlerin kökleri etrafındaki kemiğin tamamen eridiği ve dişlerin boşlukta 'yüzen diş' (floating teeth) görünümü aldığı saptanmıştır. Aşağıdakilerden hangisi bu duruma yol açan agresif patolojiler arasında **yer almaz**?
Doğru Şık (C): Sjögren sendromu
Açıklama: Sjögren sendromu, tükrük bezlerini etkileyen bir otoimmün hastalık olup siyalografide 'kiraz çiçeği' görünümü yapar, ancak alveolar kemikte yüzen diş tablosuna sebep olmaz. Yüzen diş tablosu, diş destek kemiğinin agresif bir şekilde lokal olarak yok edildiği Langerhans hücreli histiyositoz, malign tümörler veya şiddetli/agresif periodontitiste (Papillon-Lefevre dahil) izlenir.

---

### ÇİFT 160 (Benzerlik: 0.71)

**Soru 1 (ID: 645b8846-ff63-471a-ab37-a979b78d73f5)**
Soru Kökü: Çene radyografisi analizinde hekim, 'atılmış pamuk' (cotton wool) görünümünü kaydetmiştir. Bu bulgu dismorfik ve sklerotik kemik adacıklarının varlığını yansıtmaktadır. Tablo 9 verilerine göre, aşağıdaki patolojilerden hangisi bu görünüme neden olan durumlardan biri **değildir**?
Doğru Şık (C): Pindborg tümörü
Açıklama: Pindborg tümörü (Kalsifiye Epiteliyal Odontojenik Tümör), internal kalsifikasyonlar sebebiyle klasik olarak 'kar yağdı' (driven snow) veya benekli görünüm verir. Paget hastalığı, florid osseöz displazi, fibröz displazi ve osteosklerotik metastazlar ise yoğun radyoopak kitlelerin kemik içinde yamalar halinde bulunduğu 'atılmış pamuk' paternini oluştururlar.

**Soru 2 (ID: a607dd1b-abc8-4389-8f09-0683a2c98c71)**
Soru Kökü: Tablo 9 radyolojik patognomonik lezyonlar analizi doğrultusunda, çenelerde diffüz trabeküler değişim sonucu görülen 'portakal kabuğu' (veya buzlu cam) radyografik paterni aşağıdaki lezyonlardan hangisinde izlenmez?
Doğru Şık (C): Lösemi
Açıklama: Portakal kabuğu veya buzlu cam görünümü; Fibröz displazi, Rickets, Hiperparatiroidizm ve Paget hastalığında anormal, kısa, yönelimsiz kemik trabeküllerinin yerleşmesiyle ortaya çıkar. Lösemide ise 'fırça görünümü' veya 'soğan kabuğu' periost reaksiyonu gibi bulgular ön plandadır; stroma kireçlenmesi yaşanmaz. Bu ince granüler radyopasiteler fibröz replasman göstergesidir.

---

### ÇİFT 161 (Benzerlik: 0.71)

**Soru 1 (ID: 2daf61fe-48e1-425a-a859-a31b9e1fcbab)**
Soru Kökü: Anevrizmal kemik kisti, mandibulada belirgin kortikal incelmeye neden olabilen ekspansif bir lezyondur. Bu lezyonun radyografisinde hidrolik genişlemeye bağlı olarak genel formunda hangi görünüm izlenebilirken, kemik içindeki endosteal sınırlarında hangi ilerleme paterni dikkati çeker?
Doğru Şık (B): Balon benzeri görünüm / Taraklı görünüm
Açıklama: Anevrizmal kemik kisti, kan göllenmeleri ve hemodinamik basınç (hidrolik etki) nedeniyle genel morfolojide 'balon benzeri' bir şişkinlik yaratırken; lezyonun kortikal ve endosteal sınırlara doğru girintili çıkıntılı ilerlemesi mikroskobik ölçekte 'taraklı görünüm' meydana getirir. Zımba deliği veya invaziv sınır, keskin yıkım yapan veya kanseröz lezyonlarda görülür, kistik genişlemelerde değil. Bu ikili görüntü, ebat arttıkça balonlaşan ama sınırlarda anatomik yapılara saygı duyarak taraklanan biyomekaniğin kanıtıdır.

**Soru 2 (ID: 87c2a96c-f6ae-4164-9132-711de9486ead)**
Soru Kökü: Bir lezyonun çenedeki genişlemesinin şekli klinik tanıda yol göstericidir. Lezyonun hidrolik basınca işaret eden 'şişirilmiş bir balona benzer, dairesel' formda kemiği ittiği radyografik görünüme (Balon benzeri görünüm) sahip olabilen iki ana patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti ve Folliküler kist
Açıklama: Balon benzeri (hidrolik dairesel) radyografik ekspansiyon sıvıyla dolu kavitelerin eşit yönde yaptığı hidrostatik basınca bağlıdır. Anevrizmal kemik kisti (içi kan dolu göllenmeler) ve foliküler kist (kistik epiteliyum içi sıvı dairesel genişler) Tablo 9'da spesifik olarak 'Balon benzeri görünüm' ile eşleştirilmiştir.

---

### ÇİFT 162 (Benzerlik: 0.71)

**Soru 1 (ID: af640ede-9768-417c-adc5-0335e952422d)**
Soru Kökü: Radyografik kalsifikasyonlar ve özellikleri göz önüne alındığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Kronik iltihaplı kistlerde distrofik kalsifikasyonlar multiloküler kalın septalar şeklinde organize olurlar.
Açıklama: Kronik olarak iltihaplı kistlerde meydana gelen kalsifikasyonlar organize kalın septalar oluşturmaz, aksine tanınabilir bir patern olmaksızın çok ince ve parçacıklı bir görünüme sahiptir. Kalın septa oluşumu ameloblastom gibi aktif neoplastik lezyonlara ait bir özelliktir. Kistik kalsifikasyonlar yapısal destekten ziyade lokal doku nekrozuyla ilişkilidir.

**Soru 2 (ID: b8de9734-9b25-4ac7-bc04-912608f6faf3)**
Soru Kökü: Radyografik sınır analizi ve periferik kemik reaksiyonları ile ilgili aşağıdaki bilgilerden hangisi **yanlıştır**?
Doğru Şık (B): Bir kistin radyografik olarak izlenen kortikal sınırı, fizyolojik olarak kistin kendi epiteline ait bir yapıdır.
Açıklama: Radyografide görülen kistin kortikal sınırı kistin kendisine ait hücresel bir yapı değil, genişleyen kiste karşı çevre kemiğin gösterdiği bir reaksiyondur. Sklerotik sınır veya osteoblastik reaksiyonlar tamamen ev sahibi dokunun patolojiye verdiği savunma ve adaptasyon yanıtlarıdır. Bu radyografik sınırlar lezyonun büyüme hızı hakkında doğrudan bilgi sağlar.

---

### ÇİFT 163 (Benzerlik: 0.71)

**Soru 1 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

**Soru 2 (ID: c2247c04-86d5-4f3d-9486-b16de4cc30d0)**
Soru Kökü: Lezyon çevresinde izlenen 'taraklı görünüm', bazı kist ve tümörlerin sınır karakteristiklerini tanımlamada kullanılır. Aşağıdaki patolojilerden hangisi radyografik olarak tipik taraklı görünüme sahip **değildir**?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler periferal kısıtlamalar altında 'armut şekilli' görünüm oluşturma eğilimindeyken, taraklı görünüm sergilemezler. Dentigeröz kist, travmatik kemik kisti, anevrizmal kemik kisti ve dev hücreli granülom ise radyografik sınırlarında tipik olarak 'taraklı görünüm' verir. Sınır morfolojisindeki bu farklılık, inflamatuar kaynaklı bir lezyon olan radiküler kisti diğer gelişimsel veya reaktif patolojilerden ayırır.

---

### ÇİFT 164 (Benzerlik: 0.71)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: c751d0dd-1847-4fea-8c22-5acce477fcc9)**
Soru Kökü: Otuz beş yaşında kadın hastanın panoramik radyografik incelemesinde, inferior alveolar sinir kanalının korpus bölgesinde kanal kortikal sınırları tamamen korunarak genişlediği (ekspansiyon) saptanıyor. Nörolojik muayenede herhangi bir uyuşukluk veya parestezi bulgusu saptanmıyor. Bu radyografik bulgular ışığında kanal içindeki lezyonun davranışı hakkında **en olası** yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Vasküler veya nöral kökenli benign bir lezyondur.
Açıklama: İnferior alveolar kanal içinde gelişen nörom, schwannom veya hemanjiom gibi benign (iyi huylu) kökenli lezyonlar oldukça yavaş büyüdükleri için, kanalın ince kortikal sınırını yıkmadan, onu iterek ve intakt bırakarak genişletir. Malign neoplazmlar veya invaziv tümörler (çeldirici şıklar) ise hızla kemik destrüksiyonu yaparak korteksi yıkar ve kanal sınırlarının silinmesine, düzensizleşmesine neden olur. Anatomik kortikal plağın bozulmadan çadır gibi genişlemesi, lezyonun yavaş huylu doğasının ve nöral/vasküler kaynağının kesin göstergesidir.

---

### ÇİFT 165 (Benzerlik: 0.71)

**Soru 1 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

**Soru 2 (ID: afa01298-edf9-478a-8db2-14e093d43a1b)**
Soru Kökü: 48 yaşında kadın hasta klinik muayenesinde sistemik zayıflık ve çoklu idrar yolu taşı öyküsü olduğunu belirtiyor. Panoramik radyografisinde dişlerin lamina duralarının kaybolduğu ve çene kemiği trabekülasyonunun bulanıklaşıp granüler bir yapı aldığı saptanıyor. 'Tuz biber görünümü' olarak adlandırılan bu spesifik radyografik bulgu en olası hangi patolojiyi işaret eder?
Doğru Şık (B): Hiperparatiroidizm
Açıklama: Hiperparatiroidizmde yüksek parathormon seviyesi yaygın kemik rezorpsiyonuna yol açar ve radyografide kemiğin ince granüler, 'tuz biber' şeklinde bir patern almasıyla karakterizedir. Fibröz displazi buzlu cam veya portakal kabuğu görünümü yaparken, talasemi fırça görünümüne sebep olur. Lamina dura kaybı ve tuz biber paterni bu endokrin bozukluk için patognomoniktir.

---

### ÇİFT 166 (Benzerlik: 0.71)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: e14ac615-4834-4823-9533-1e1a81d11895)**
Soru Kökü: Aşağıdaki malign lezyonlardan hangisi, dişi destekleyen alveolar kemiği hızlıca infiltre ve destrükte ederek radyografide tipik "yüzen diş" (floating in air) manzarası oluşturan patolojiler arasında **yer almaz**?
Doğru Şık (D): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom benign, lokal agresif bir lezyondur ve genellikle taraklı sınırlar, zayıf septalar içeren ekspansif bir kitle (sabun köpüğü benzeri) oluşturur, permeatif yıkım ve yüzen diş yapmaz. Primer intraosseous karsinoma, osteosarkom, kondrosarkom ve lenfoma gibi maligniteler ise kemiği adeta eriterek dişleri boşlukta yüzüyormuş gibi desteksiz bırakır.

---

### ÇİFT 167 (Benzerlik: 0.71)

**Soru 1 (ID: 05a5d6c7-43b0-4b19-9c87-bb74eb1d4a8b)**
Soru Kökü: Sekiz yaşında erkek çocuk hasta, alt çenesinde her iki tarafta giderek artan ağrısız şişlik şikayetiyle başvuruyor. Alınan panoramik radyografide her iki mandibular angulus ve ramus bölgesinde genişlemeye neden olan multiloküler radyolusent alanlar izleniyor. Çenelerde her zaman bilateral yerleşim gösterdiği bilinen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Cherubism
Açıklama: Çenelerdeki lezyonların bölgesel veya genel yerleşimli olması tanıda kritik bir filtredir ve cherubism mandibula ile maksillada her zaman bilateral ekspansiyonlarla karakterize genetik bir hastalıktır. Sıklıkla angulus bölgesinde görülen ameloblastom veya miksoma gibi odontojenik tümörler ise tipik olarak tek taraflı (unilateral) büyüme eğilimindedir. Radyografide bilateral simetrik multiloküler yıkım gören bir klinisyen yaş faktörüyle birlikte doğrudan cherubism tanısına yönelmelidir.

**Soru 2 (ID: e1fe33f0-625b-41c5-bfd5-c3933cfacc03)**
Soru Kökü: Sekiz yaşında erkek çocuk hastanın çenesinde hızla büyüyen ağrısız bir şişlik şikayetiyle başvurmuştur. Alınan radyografide diş köklerinde ani ve keskin bir rezorpsiyona sekonder 'çivi kökler' görünümü izlenmiştir. Gelişim hızı ve radyografik patern göz önüne alındığında akla ilk gelmesi gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Burkitt tümörü
Açıklama: Burkitt tümörü, çenelerde aşırı hızlı büyüme ve destrüksiyon ile diş köklerinde kama şeklinde veya düzensiz rezorpsiyon yaratarak 'çivi kökler' manzarası veren agresif bir lenfomadır. Ameloblastoma kök rezorpsiyonu yapabilse de bu genellikle düz bir hizada (bıçak sırtı) gerçekleşir ve çivi benzeri sivrilme beklenmez. Yaş, hız ve çivi kök bulgusu klinik senaryoda doğrudan Burkitt tümörünü işaret etmektedir.

---

### ÇİFT 168 (Benzerlik: 0.71)

**Soru 1 (ID: 1887d30f-b0e1-4047-b4f5-f111849ecfe5)**
Soru Kökü: Radyografik yorumlamada doku ve materyallerin radyoopasite sıralaması (radyolusentten radyoopağa doğru) tanısal algoritmanın temelidir. Bu prensibe göre aşağıda verilen dizilimlerden hangisi biyolojik yapıları ve vücut boşluklarını doğru sırada listelemektedir?
Doğru Şık (A): Hava < Sıvı < Kortikal kemik < Mine
Açıklama: X-ışınları düşük yoğunluklu ortamlardan serbestçe geçerek siyah (radyolusent) bir iz bırakırken, yüksek atom numaralı ve yoğun dokularda zayıflar ve filmi beyaz (radyoopak) bırakırlar. Buna göre en radyolusent materyal Hava'dır, bunu sırasıyla Sıvı, Yumuşak doku, Kortikal kemik ve organizmanın en mineralize dokusu olan Mine takip eder. Diğer tüm şıklarda fiziksel yoğunluk kuralına aykırı dizilimler yapılmıştır.

**Soru 2 (ID: e79a43df-5945-4b53-b2fd-b2585887d296)**
Soru Kökü: Radyografik incelemede doku ve materyaller, X-ışınına karşı gösterdikleri rezistansa göre düşük yoğunluktan yüksek yoğunluğa (radyolüsentten radyopağa) doğru sınıflandırılır. Bu kurala göre aşağıdaki dizilimlerden hangisi **yanlıştır**?
Doğru Şık (D): Kortikal kemik < Trabeküler kemik < Mine
Açıklama: Trabeküler kemik (süngerimsi doku), kortikal kemiğe (sıkı kemik dokusu) göre çok daha fazla boşluk içerir ve daha radyolüsenttir. 'Kortikal kemik < Trabeküler kemik' sıralaması fiziksel radyoloji kurallarına aykırıdır; doğrusu 'Trabeküler kemik < Kortikal kemik' olmalıdır.

---

### ÇİFT 169 (Benzerlik: 0.71)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

---

### ÇİFT 170 (Benzerlik: 0.71)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: e1fe33f0-625b-41c5-bfd5-c3933cfacc03)**
Soru Kökü: Sekiz yaşında erkek çocuk hastanın çenesinde hızla büyüyen ağrısız bir şişlik şikayetiyle başvurmuştur. Alınan radyografide diş köklerinde ani ve keskin bir rezorpsiyona sekonder 'çivi kökler' görünümü izlenmiştir. Gelişim hızı ve radyografik patern göz önüne alındığında akla ilk gelmesi gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Burkitt tümörü
Açıklama: Burkitt tümörü, çenelerde aşırı hızlı büyüme ve destrüksiyon ile diş köklerinde kama şeklinde veya düzensiz rezorpsiyon yaratarak 'çivi kökler' manzarası veren agresif bir lenfomadır. Ameloblastoma kök rezorpsiyonu yapabilse de bu genellikle düz bir hizada (bıçak sırtı) gerçekleşir ve çivi benzeri sivrilme beklenmez. Yaş, hız ve çivi kök bulgusu klinik senaryoda doğrudan Burkitt tümörünü işaret etmektedir.

---

### ÇİFT 171 (Benzerlik: 0.71)

**Soru 1 (ID: 1c8a0786-ca84-43b4-a257-8340c4f13da5)**
Soru Kökü: Hangi radyografik görünüm hem dev hücreli granülomda hem de travmatik kemik kistinde (basit kemik kisti) ortak olarak izlenebilen bir patolojik sınır karakteristiğidir?
Doğru Şık (D): Taraklı görünüm
Açıklama: Taraklı görünüm, bir lezyonun komşu diş köklerinin veya sert kortikal engellerin etrafından invaze olmadan dolanarak ilerlemesi sonucu oluşan ortak sınır formasyonudur ve hem dev hücreli granülom hem de travmatik kemik kistinde izlenir. Zımba deliği sınır ise multipl miyelom gibi infiltratif lezyonlarda komşu doku reaksiyonu olmaksızın gelişen akut destrüksiyonu ifade eder. Bu sınır paterni, lezyonun yavaş ve dokulara adapte olarak büyüdüğünü gösterir.

**Soru 2 (ID: 3c8c2e63-7761-401f-afda-68798fae7194)**
Soru Kökü: Radyografik değerlendirmede bazı odontojenik keratokist ve basit kemik kistlerinde lezyonun sınırlarının pürüzsüz hidrolik bir balon formundan ziyade 'dalgalı ve taraklı' bir yapı sergilediği görülür. Bu 'taraklı çevre' morfolojisi, radyografide zaman zaman lezyonun aşağıdaki iç yapı özelliklerinden hangisiyle sahip olduğunu izlenimi verir?
Doğru Şık (C): Multiloküler
Açıklama: Dalgalı ve taraklı (scalloped) çevre yapısı, lezyonun kortikal kemik aralarından kök kök ilerlemesi sonucunda radyografide adeta birden çok odacıktan oluştuğu, yani multiloküler olduğu yanılsamasını yaratabilir. Buzlu cam ve pamuk atığı görünümleri sınır değil internal kalsifikasyon (trabekülasyon) paternleriyle ilgilidir. Bu nedenle gerçek internal septasyon ile periferik taraklanmanın ayırımı diagnozda kritik bir basamaktır.

---

### ÇİFT 172 (Benzerlik: 0.71)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: bc124276-30f6-4f26-83f5-048ac646cd88)**
Soru Kökü: On dört yaşındaki kız hasta,çenesinde asimetri şikayetiyle başvurmuştur. Alınan sefalometrik ve periapikal radyografilerde lokalize radyolüsent bir alan izlenmiştir. Biyopsi sonucu 'Santral dev hücreli granülom' gelen bu hastada, lezyonun radyografik merkez üssünün en büyük olasılıkla bulunduğu spesifik bölge aşağıdakilerden hangisidir?
Doğru Şık (A): Maksiller kaninlerin anterioru
Açıklama: Genç hastalarda (örneğin puberte dönemi) santral dev hücreli granülomların merkez üsleri en sık maksiller kaninlerin anteriorunda (önünde) konumlanma eğilimi gösterir. Erişkinlerde ve genel popülasyonda ise daha sık mandibula birinci moların anteriorunda yerleşir. Yaşa bağlı bu spesifik lokalizasyon farklılığı, santral dev hücreli granülomun biyolojik davranışı için tanısal bir markerdır.

---

### ÇİFT 173 (Benzerlik: 0.71)

**Soru 1 (ID: 2f403f4d-1341-4d4b-9039-f6babe181229)**
Soru Kökü: 62 yaşında sistemik rahatsızlığı bulunmayan erkek hasta, mandibular posterior dişlerindeki ileri derecede sallanma şikayetiyle başvuruyor. Radyografide dişlerin periapikal bölgesine kadar inen yaygın alveol kemiği kaybı ve dişlerin kemik desteksiz "yüzen diş" görünümü izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İleri periodontal hastalık
Açıklama: İleri periodontal hastalık, yavaş seyirli ancak şiddetli kret rezorpsiyonu ile dişleri tüm destek dokusundan yoksun bırakarak 'yüzen diş' görünümü oluşturur. Agresif periodontitis daha çok genç bireylerde lokalize alanlarda görülürken, Langerhans hücreli histiyositoz sıklıkla pediyatrik yaş grubunda izlenen litik lezyonlardır. İleri yaş ve yaygın yıkım hikayesi periodontal hastalıkla tam uyumludur.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 174 (Benzerlik: 0.71)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: 98ed6c10-c79f-4850-8524-8ca116e324fe)**
Soru Kökü: 30 yaşında erkek hasta maksiller orta hatta palatinal bölgede hafif bir şişlik fark ederek başvuruyor. Alınan oklüzal ve periapikal radyografide maksiller santral kesici dişlerin kökleri arasında, spina nasalis anterior'un süperpoze olmasıyla "kalp şekilli" (heart-shaped) radyolüsent bir görünüm izleniyor. Dişler pulpa testine vital yanıt veriyor. Bu bulgular ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İnsiziv kanal kisti
Açıklama: İnsiziv kanal kisti (nazopalatin kanal kisti), maksiller santral dişlerin orta hattında yerleşir ve anterior nasal spine'ın radyografik olarak lezyonun üzerine izdüşümü sebebiyle karakteristik kalp şeklini alır. Dişlerin vital olması radiküler kist seçeneğini eler. Globulomaksiller kist ise maksiller lateral ve kanin dişleri arasında armut şeklinde izlenir.

---

### ÇİFT 175 (Benzerlik: 0.71)

**Soru 1 (ID: 8ced98a5-1dbe-42b8-a050-175ce27ba8bc)**
Soru Kökü: 28 yaşında kadın hasta, üst sağ bölgesinde ağrısız bir şişlik fark ediyor. Periapikal radyografide, maksiller sağ lateral kesici ve kanin dişlerin köklerini birbirinden ayırarak superiora doğru genişleyen, inferiora (alveol kretine) doğru daralan karakteristik "armut şekilli" (pear-shaped) radyolüsent lezyon saptanıyor. Dişler vital olduğuna göre, en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Globulomaksiller kist
Açıklama: Globulomaksiller kist, adını yerleşim yerinden alan ve anatomik olarak her zaman maksiller lateral ve kanin dişleri arasına yerleşerek onları diverjan hale getiren ters dönmüş 'armut' formunda bir gelişimsel/fissüral kisttir. Dişlerin vital olması kökeninin pulpa enfeksiyonu (radiküler kist) olmadığını kesinleştirir.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 176 (Benzerlik: 0.71)

**Soru 1 (ID: e6c31376-91c2-4b36-ac8a-6a72b2ca9fc4)**
Soru Kökü: Elli yaşında erkek hasta, son aylarda alt dudağında giderek artan uyuşukluk (anestezi) şikayetiyle kliniğe başvuruyor. Radyografik incelemede inferior alveolar kanalın üst korteksinde ciddi yıkım saptanıyor ve kanal anatomisi boyunca aşağıya doğru gelişen sınırları belirsiz irregüler bir genişleme izleniyor. Bu klinik ve spesifik radyografik bulgular birlikte değerlendirildiğinde aşağıdaki lezyon tiplerinden hangisi **en güçlü** ihtimaldir?
Doğru Şık (D): Malign neoplazm
Açıklama: Malign hücrelerin nörotropik yayılım veya osteoklastik yıkımla sinir kanalını (perineural invazyon) infiltre etmesi, kanal korteksinin düzensizce erimesine (destrüksiyon) ve kliniğe dudak parestezisi/uyuşukluğu (Vincent bulgusu) olarak yansımasına sebep olur. Basit kemik kisti veya dev hücreli lezyonlar (çeldirici şıklar) dişi ve kanalı iter ancak sinir kılıfını invaze etmediği için klinik anestezi tablosuna yol açmaz. Kanalın düzensiz genişlemesiyle birlikte görülen duyu kaybı, aksi ispatlanana kadar osteosarkom veya metastatik malign neoplazm şüphesi doğurur.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 177 (Benzerlik: 0.71)

**Soru 1 (ID: 8598389e-d5b9-4638-8c01-5a13f217a861)**
Soru Kökü: Elli beş yaşındaki hastanın kafa tasında saptanan multipl radyolüsent kemik lezyonları, keskin bir sınıra sahip olup bitişik normal kemikte hiçbir reaksiyon veya skleroz üretmemiştir. Radyografide bir kağıt zımbasıyla delik açılmış gibi duran bu perifer yapısı, aşağıdaki patolojilerden hangisi için spesifik bir bulgudur?
Doğru Şık (B): Multipl miyelom
Açıklama: Zımba ile delinmiş (punched-out) kenar, kemiğin reaktif bir yanıt veremediği çok dar geçişli ve keskin sınırlı radyolüsensilerdir; bu patern multipl miyelomun klasik radyografik işaretidir. Periapikal kemik displazisi geniş sklerotik reaksiyon üretirken, odontomların çevresinde ince yumuşak doku kapsülü bulunur. Sklerozan osteitiste ise komşu kemikle kaynaşan belirsiz (blending) bir sınır vardır.

**Soru 2 (ID: fc0eaa52-239e-45a1-ae4f-9bf4ce8c06b4)**
Soru Kökü: Asemptomatik kırk beş yaşında Afrika kökenli bir kadın hastada, sağ mandibular molar bölgede radyolojik sınır genişliği bakımından tek tip olmayan, kalın ve geniş bir radyoopak reaktif geçiş bölgesi saptanmıştır. Bu perifer formu 'sklerotik sınır' olarak rapor edilmiştir. Bu sınır tipi, aşağıdaki lezyonlardan hangisinde primer olarak görülür?
Doğru Şık (B): Periapikal kemik displazisi
Açıklama: Sklerotik sınır, çok yavaş büyüme hızı ve lezyonun etrafındaki yoğun reaktif kemik uyarımı sonucu oluşan kalın, homojen olmayan radyoopak geçiş bölgesidir ve en tipik olarak periapikal kemik displazilerinde görülür. Keratokist ve ameloblastom genellikle ince ve düzenli kortikal sınırlar yaratırken, displazilerde kemiğin formasyon-rezorpsiyon dengesi bozulduğundan sklerotik bantlar kalındır. Sklerotik sınır patolojinin inflamatuar olmayan uzun süreli varlığına işaret eder.

---

### ÇİFT 178 (Benzerlik: 0.71)

**Soru 1 (ID: 32f61a24-c224-4584-90e4-55ffb83d503a)**
Soru Kökü: Odontom ve sementoblastom gibi benign ve yavaş büyüyen lezyonlarda, dışarıdaki reaktif kemik korteksi ile asıl radyoopak kitle arasında ince radyolüsent bir bant izlenir. Radyografide görülen bu radyolüsent sınırın histolojik karşılığı aşağıdakilerden hangisidir?
Doğru Şık (D): Yumuşak doku kapsülü
Açıklama: Belirgin radyoopak yapıya sahip odontom ve sementoblastomlar, etraflarında onları kemikten ayıran radyolüsent bir 'yumuşak doku kapsülü' barındırır. Bu kapsül dışarıda kortikal bir periferle çevrelenmiştir, bu sayede lezyon kemiğe ankiloz olmaz. Hiperplastik folikül dentigeröz kistlerde görülürken, kistik sıvı kolonu gerçek epiteliyal kistlerin lümen yapısıdır.

**Soru 2 (ID: d7ca7bae-94b6-4159-9749-2bc9370b2a54)**
Soru Kökü: Kemik içi lezyonların dış periferinde ince ve oldukça homojen yapıda, radyoopak ince bir reaktif kemik hattı saptanmıştır. Sınır tipolojisi 'kortikal kenar' olarak adlandırılan bu morfoloji, aşağıdaki lezyon gruplarının hangisinde izlenir?
Doğru Şık (E): Kistler ve yavaş büyüyen iyi huylu tümörler
Açıklama: Kortikal kenar, lezyonun büyüme hızının çevre kemiğin yeni kemik üreterek (osteoblastik aktivite ile) bu basıncı karşılamasına yetecek kadar yavaş olduğu durumlarda, yani kistler ve iyi huylu tümörlerde görülür. Hızlı gelişen maligniteler veya akut enfeksiyonlar osteoblastların sınır oluşturmasına izin vermeyecek hızda doku yıktıkları için invaziv sınırlar oluştururlar. Bu reaktif ince radyoopak hat lezyonun biyolojik davranışının benign olduğunu destekler.

---

### ÇİFT 179 (Benzerlik: 0.71)

**Soru 1 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 180 (Benzerlik: 0.71)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

---

### ÇİFT 181 (Benzerlik: 0.71)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

---

### ÇİFT 182 (Benzerlik: 0.71)

**Soru 1 (ID: 92720593-9dfc-49a1-ab9b-020f06c166ad)**
Soru Kökü: Altmış yaşında erkek hasta, çene kemiklerinde ve kafatasında yaygın ağrı şikayetiyle başvuruyor. Radyografide, etrafında hiçbir kemik reaksiyonunun belirgin olmadığı, lezyon ile sağlıklı doku arasında çok dar bir geçiş bölgesine sahip, adeta 'bir kağıt zımba ile delinmiş' görünümü veren multipl keskin sınırlı radyolusent alanlar izleniyor. Bu spesifik sınır tipinin aşağıdaki hastalıklardan hangisinde görülme olasılığı **en yüksektir**?
Doğru Şık (C): Multipl miyelom
Açıklama: Multipl miyelomdaki plazma hücre proliferasyonu, kemikte osteoblastik reaksiyona fırsat vermeden son derece hızlı ve lokalize litik alanlar oluşturur, bu da radyografide sklerotik kenarı olmayan keskin 'zımba deliği' (punched-out) periferlere neden olur. Paget veya fibröz displazide ise osteoblastik aktivite mevcuttur ve kemik reaksiyonu (buzlu cam, atılmış pamuk) belirgindir. Çenelerde ve kraniyal kasada sklerotik halosu olmayan çoklu zımba deliği lezyonları miyelom tanısı için patognomoniktir.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 183 (Benzerlik: 0.71)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 184 (Benzerlik: 0.71)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

---

### ÇİFT 185 (Benzerlik: 0.71)

**Soru 1 (ID: f3c9bd67-3826-48a7-82d2-02e0b652e216)**
Soru Kökü: İnflamatuar lezyonlar çevre kemikte büyüme paternlerine göre farklı reaksiyonlara yol açarlar. Radyografide bir dişin apeksinde izlenen periapikal rarefiye osteitis lezyonu, çevre kemikte tipik olarak hangi adaptif reaksiyonu uyarır?
Doğru Şık (C): Sklerotik kemik reaksiyonu
Açıklama: Periapikal rarefiye osteitis gibi düşük dereceli kronik inflamatuar lezyonlar, ev sahibi kemiği uyararak lezyonun periferinde kemik yapımına yani sklerotik kemik reaksiyonuna neden olur. Spikül oluşumu malignitelerde, zımba deliği ise miyelomda görülür. Bu reaksiyon lezyonun sınırlanma çabasının radyolojik göstergesidir.

**Soru 2 (ID: f57aadcc-09a9-4caf-9442-da4ae0020b63)**
Soru Kökü: Radyografide kalın, genişliği tek tip olmayan ve çevresindeki kemik reaksiyonunu uyaran radyoopak geçiş bölgesi formundaki 'sklerotik sınır'ın temel patofizyolojik anlamı, aşağıdakilerden hangisini yansıtmasıdır?
Doğru Şık (B): Lezyonun çevresindeki kemik üretimini uyarmaya yetecek çok yavaş bir büyüme hızı sergilediğini
Açıklama: Sklerotik sınır, lezyon etrafındaki osteoblastların kronik ve zayıf stimülasyona yanıt vererek uzun bir zaman zarfında anormal genişlikte ve kalınlıkta reaktif kemik örmesinin bir sonucudur, bu da lezyonun büyüme hızının oldukça yavaş olduğunu kanıtlar. Malignite veya agresif durumlar kemik yapımına değil hızla yıkıma neden olarak ince invaziv sınırlar oluştururlar. Bu reaktif kalınlaşma, periapikal osseöz displazilerde tipik olarak görülür.

---

### ÇİFT 186 (Benzerlik: 0.71)

**Soru 1 (ID: 92720593-9dfc-49a1-ab9b-020f06c166ad)**
Soru Kökü: Altmış yaşında erkek hasta, çene kemiklerinde ve kafatasında yaygın ağrı şikayetiyle başvuruyor. Radyografide, etrafında hiçbir kemik reaksiyonunun belirgin olmadığı, lezyon ile sağlıklı doku arasında çok dar bir geçiş bölgesine sahip, adeta 'bir kağıt zımba ile delinmiş' görünümü veren multipl keskin sınırlı radyolusent alanlar izleniyor. Bu spesifik sınır tipinin aşağıdaki hastalıklardan hangisinde görülme olasılığı **en yüksektir**?
Doğru Şık (C): Multipl miyelom
Açıklama: Multipl miyelomdaki plazma hücre proliferasyonu, kemikte osteoblastik reaksiyona fırsat vermeden son derece hızlı ve lokalize litik alanlar oluşturur, bu da radyografide sklerotik kenarı olmayan keskin 'zımba deliği' (punched-out) periferlere neden olur. Paget veya fibröz displazide ise osteoblastik aktivite mevcuttur ve kemik reaksiyonu (buzlu cam, atılmış pamuk) belirgindir. Çenelerde ve kraniyal kasada sklerotik halosu olmayan çoklu zımba deliği lezyonları miyelom tanısı için patognomoniktir.

**Soru 2 (ID: d2318258-e757-4c91-8e48-3db6596c358d)**
Soru Kökü: 65 yaşında erkek hasta kliniğe rutin muayene amacıyla başvuruyor. Tıbbi anamnezinde ileri evre prostat karsinomu tedavisi gördüğü öğrenilen hastanın radyografisinde, çenelerde yer yer anomali sınırlarında periferal yeni kemik uyarım formasyonları saptanıyor. Bu lezyonların uyardığı reaksiyonun spesifik karakteristiği aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoblastik reaksiyon
Açıklama: Prostat ve meme karsinomlarının çenelere olan metastazları sıklıkla çevre kemikte osteoblastik reaksiyonu (yeni kemik yapımını) uyararak karakterize olurlar. Diğer birçok metastaz osteolitik bir yıkım tablosu çizerken, bu iki organdan gelen tümör hücreleri lokal kemik faktörlerini etkileyerek radyopasite artışlarına neden olur. Bu bulgu ayırıcı tanıda primer tümör kaynağını tahmin etmede esastır.

---

### ÇİFT 187 (Benzerlik: 0.71)

**Soru 1 (ID: 65610b72-a295-4938-a848-475252ff3082)**
Soru Kökü: Radyografik bir lezyonun çenelerdeki lokalizasyonunun (Epicenter) değerlendirmesinde, kıkırdak matris veya kalıntılarından köken alma olasılığı en yüksek olan bölge neresidir?
Doğru Şık (C): Kondiler bölge
Açıklama: Kondil, kıkırdak tabanlı bir ossifikasyon (endokondral) ve büyüme merkezine sahip olduğundan; osteokondrom ve diğer kıkırdaksı (kondroid) patolojilerin gelişim olasılığı kondiler bölgede, membranöz kemikleşen diğer çene bölgelerine kıyasla anlamlı düzeyde daha yüksektir.

**Soru 2 (ID: f8ef4b85-df5b-48f4-8367-86e5748c2843)**
Soru Kökü: Temporomandibular eklem bölgesindeki gelişimsel yapı farklılıkları dikkate alındığında, kondiler bölgede radyografik olarak saptanma potansiyeli en yüksek olan lezyon aşağıdakilerden hangisidir?
Doğru Şık (B): Osteokondrom
Açıklama: Kondiler bölge endokondral kemikleşme gösteren kıkırdak bir büyüme merkezine sahip olduğundan, osteokondrom gibi kıkırdaksı lezyonların bu alanda oluşma ihtimali çenelerin diğer bölgelerine göre belirgin şekilde yüksektir. Ameloblastom ve odontojenik miksoma dişlerin bulunduğu korpus ve angulus bölgelerini tercih ederken, kondilde çok nadir görülür. Doku spesifik lokalizasyon anomalilerin saptanmasında ilk basamaktır.

---

### ÇİFT 188 (Benzerlik: 0.71)

**Soru 1 (ID: 2daf61fe-48e1-425a-a859-a31b9e1fcbab)**
Soru Kökü: Anevrizmal kemik kisti, mandibulada belirgin kortikal incelmeye neden olabilen ekspansif bir lezyondur. Bu lezyonun radyografisinde hidrolik genişlemeye bağlı olarak genel formunda hangi görünüm izlenebilirken, kemik içindeki endosteal sınırlarında hangi ilerleme paterni dikkati çeker?
Doğru Şık (B): Balon benzeri görünüm / Taraklı görünüm
Açıklama: Anevrizmal kemik kisti, kan göllenmeleri ve hemodinamik basınç (hidrolik etki) nedeniyle genel morfolojide 'balon benzeri' bir şişkinlik yaratırken; lezyonun kortikal ve endosteal sınırlara doğru girintili çıkıntılı ilerlemesi mikroskobik ölçekte 'taraklı görünüm' meydana getirir. Zımba deliği veya invaziv sınır, keskin yıkım yapan veya kanseröz lezyonlarda görülür, kistik genişlemelerde değil. Bu ikili görüntü, ebat arttıkça balonlaşan ama sınırlarda anatomik yapılara saygı duyarak taraklanan biyomekaniğin kanıtıdır.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 189 (Benzerlik: 0.71)

**Soru 1 (ID: 379a58e0-2df6-4f67-b60c-2ea3fc9a058f)**
Soru Kökü: 12 yaşında erkek hasta, çenesine aldığı şiddetli darbeden birkaç hafta sonra mandibula korpusunda sert bir genişleme fark ederek kliniğe başvuruyor. Oklüzal radyografide mandibular korteksin dışında, kemik yüzeyine paralel ve tabaka tabaka ilerleyen "soğan kabuğu" manzarasına sahip yeni kemik yapımı saptanıyor. Travma öyküsü ile birlikte bu radyografik patern en çok hangi tanı ile uyumludur?
Doğru Şık (B): Ossifying subperiosteal hematom
Açıklama: Travma sonrası periost altında biriken kanama (hematom), zamanla organize olarak kemikleşir (ossifying subperiosteal hematom) ve bu süreç radyografide korteks üzerinde ardışık lamelli 'soğan kabuğu' reaksiyonu olarak izlenir. Osteosarkom travmadan bağımsız agresif bir seyir izler ve daha çok güneş ışını formasyonu verir.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 190 (Benzerlik: 0.71)

**Soru 1 (ID: 4d8ce200-5f35-4c64-bb24-4f6b63fb380f)**
Soru Kökü: 'Sabun köpüğü' paterni oluşturan lezyonların iç yapısında kemik septaların organizasyonu kilit rol oynar. Radyografide bu görünümü veren patolojiler arasında hem santral dev hücreli tümör hem de santral hemanjiom yer alır. Dev hücreli lezyonlarda bu internal septaların asıl kaynağı aşağıdakilerden hangisidir?
Doğru Şık (C): Reaktif kemik oluşumu
Açıklama: Dev hücreli granülomda izlenen sabun köpüğü paternini oluşturan kemikli septalar, lezyonun kendi neoplastik üretimi değil, osteoklastik yıkıma karşı gelişen 'reaktif kemik' oluşumudur. Santral hemanjiomda benzer septalar endotelyal proliferasyona tepki olarak oluşur; ancak dev hücreli lezyonlardaki reaktif tabiat doğrudan vurgulanmıştır. Bu mekanizma, lezyonun gerçek bir neoplazmdan çok hiperplastik/reaktif bir süreç olabileceği teorisini destekler.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 191 (Benzerlik: 0.71)

**Soru 1 (ID: b194719f-0957-477d-a10f-123898ac2173)**
Soru Kökü: Çenelerde radyolojik olarak izlenen bir lezyonun ilerleyen kenarında ve hemen arkasında kemik yıkımını temsil eden, çok az trabekül içeren veya hiç içermeyen geniş bir radyolusent alan 'invaziv sınır' olarak rapor edilmiştir. Bu sınır paternine sahip bir lezyonun histolojik davranışı hakkında aşağıdakilerden hangisi söylenebilir?
Doğru Şık (D): Genellikle hızlı gelişen malignite paterni gösterir.
Açıklama: İnvaziv sınır, osteoblastik tamir ve sınır oluşturma sürecinin, patolojinin saldırgan büyüme hızına yetişemediği yüksek gradeli malignitelerde görülür. Hidrolik büyüme kistlerde, reaktif kemik yapımı ise sklerozan iltihaplarda görülürken; invaziv sınır tümör hücrelerinin kemik ilik boşluklarına trabekülleri eriterek hızla infiltre olduğunun kesin göstergesidir.

**Soru 2 (ID: d7ca7bae-94b6-4159-9749-2bc9370b2a54)**
Soru Kökü: Kemik içi lezyonların dış periferinde ince ve oldukça homojen yapıda, radyoopak ince bir reaktif kemik hattı saptanmıştır. Sınır tipolojisi 'kortikal kenar' olarak adlandırılan bu morfoloji, aşağıdaki lezyon gruplarının hangisinde izlenir?
Doğru Şık (E): Kistler ve yavaş büyüyen iyi huylu tümörler
Açıklama: Kortikal kenar, lezyonun büyüme hızının çevre kemiğin yeni kemik üreterek (osteoblastik aktivite ile) bu basıncı karşılamasına yetecek kadar yavaş olduğu durumlarda, yani kistler ve iyi huylu tümörlerde görülür. Hızlı gelişen maligniteler veya akut enfeksiyonlar osteoblastların sınır oluşturmasına izin vermeyecek hızda doku yıktıkları için invaziv sınırlar oluştururlar. Bu reaktif ince radyoopak hat lezyonun biyolojik davranışının benign olduğunu destekler.

---

### ÇİFT 192 (Benzerlik: 0.71)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: 5fc99b65-b5ae-426d-9d56-1e8e3d219242)**
Soru Kökü: 16 yaşında erkek hasta, posterior mandibulada çok hızlı büyüyen, ağrılı, asimetrik şişlik ile acil servise başvuruyor. Panoramik radyografisinde tümörün dış kortikal tabakayı yırtıp periostu hızla yukarı kaldırdığı ve bu kaldırma noktasında üçgen şeklinde kesintili reaktif bir kemik birikimi oluştuğu izleniyor. İskelet sisteminde 'Codman üçgeni' olarak isimlendirilen bu kritik görünüm en sık hangi malignitede saptanır?
Doğru Şık (E): Osteosarkom
Açıklama: Hızlı ilerleyen osteosarkom lezyonu korteksi delerek periostu çevre dokuya doğru sıyırır; periostun kemiğe yapışık kaldığı taban köşesindeki reaktif yeni kemikleşme 'Codman üçgeni'ni meydana getirir. Karsinomlar genellikle güve yeniği tarzında lokal kortikal destrüksiyon yapar, bu tip spesifik periost reaksiyonunu uyarmaz. Codman üçgeni, hücrelerin subperiosteal boşlukta agresif yükselişinin kanıtıdır.

---

### ÇİFT 193 (Benzerlik: 0.71)

**Soru 1 (ID: 6e07a75e-f9f1-4543-91f7-109de6e4c4d2)**
Soru Kökü: Çocukluk çağında başlayan ve radyografide diş köklerini desteksiz bırakan yaygın litik lezyonlar ile "yüzen diş" manzarası verebilen patolojiler, Tablo 9'da sınıflandırılmıştır. Buna göre aşağıdaki sendrom veya hastalıklardan hangisi çenelerde bu görünüme neden **olmaz**?
Doğru Şık (D): Piknodizostozis
Açıklama: Piknodizostozis osteoklastik disfonksiyona bağlı yaygın kemik sklerozu ile seyreder ve radyografide kemik yıkımı değil, tebeşir veya şamdan görünümünde kemik yoğunlaşması yapar. Langerhans hücreli histiyositoz ve Papillon-Lefèvre sendromu ise şiddetli kemik yıkımı ve erken diş kaybına yol açarak tipik yüzen diş formasyonu yaratır.

**Soru 2 (ID: e3d5e2e3-c5e0-4b53-8e16-588455fa46a9)**
Soru Kökü: Otuz beş yaşındaki hastanın radyografisinde alveolar kemiğin marjinal olarak korunduğu, ancak dişlerin kökleri etrafındaki kemiğin tamamen eridiği ve dişlerin boşlukta 'yüzen diş' (floating teeth) görünümü aldığı saptanmıştır. Aşağıdakilerden hangisi bu duruma yol açan agresif patolojiler arasında **yer almaz**?
Doğru Şık (C): Sjögren sendromu
Açıklama: Sjögren sendromu, tükrük bezlerini etkileyen bir otoimmün hastalık olup siyalografide 'kiraz çiçeği' görünümü yapar, ancak alveolar kemikte yüzen diş tablosuna sebep olmaz. Yüzen diş tablosu, diş destek kemiğinin agresif bir şekilde lokal olarak yok edildiği Langerhans hücreli histiyositoz, malign tümörler veya şiddetli/agresif periodontitiste (Papillon-Lefevre dahil) izlenir.

---

### ÇİFT 194 (Benzerlik: 0.71)

**Soru 1 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 195 (Benzerlik: 0.71)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: 645b8846-ff63-471a-ab37-a979b78d73f5)**
Soru Kökü: Çene radyografisi analizinde hekim, 'atılmış pamuk' (cotton wool) görünümünü kaydetmiştir. Bu bulgu dismorfik ve sklerotik kemik adacıklarının varlığını yansıtmaktadır. Tablo 9 verilerine göre, aşağıdaki patolojilerden hangisi bu görünüme neden olan durumlardan biri **değildir**?
Doğru Şık (C): Pindborg tümörü
Açıklama: Pindborg tümörü (Kalsifiye Epiteliyal Odontojenik Tümör), internal kalsifikasyonlar sebebiyle klasik olarak 'kar yağdı' (driven snow) veya benekli görünüm verir. Paget hastalığı, florid osseöz displazi, fibröz displazi ve osteosklerotik metastazlar ise yoğun radyoopak kitlelerin kemik içinde yamalar halinde bulunduğu 'atılmış pamuk' paternini oluştururlar.

---

### ÇİFT 196 (Benzerlik: 0.71)

**Soru 1 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

**Soru 2 (ID: e14ac615-4834-4823-9533-1e1a81d11895)**
Soru Kökü: Aşağıdaki malign lezyonlardan hangisi, dişi destekleyen alveolar kemiği hızlıca infiltre ve destrükte ederek radyografide tipik "yüzen diş" (floating in air) manzarası oluşturan patolojiler arasında **yer almaz**?
Doğru Şık (D): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom benign, lokal agresif bir lezyondur ve genellikle taraklı sınırlar, zayıf septalar içeren ekspansif bir kitle (sabun köpüğü benzeri) oluşturur, permeatif yıkım ve yüzen diş yapmaz. Primer intraosseous karsinoma, osteosarkom, kondrosarkom ve lenfoma gibi maligniteler ise kemiği adeta eriterek dişleri boşlukta yüzüyormuş gibi desteksiz bırakır.

---

### ÇİFT 197 (Benzerlik: 0.71)

**Soru 1 (ID: 1a7fce10-6260-4d9a-b402-0012814faa29)**
Soru Kökü: Aşağıdaki lezyon veya durumlardan hangisinde radyografik olarak 'soğan kabuğu' (onion-skin) şeklinde ardışık lamellated periost reaksiyonu görülmesi **beklenmez**?
Doğru Şık (E): Santral hemanjiyom
Açıklama: Santral hemanjiyomlar soğan kabuğu değil, tipik olarak 'at arabası tekerliği', 'bal peteği' veya 'tekerlek' görünümünde vasküler ağlar oluşturur. Soğan kabuğu görünümü esas olarak inflamatuar olaylarda (osteomiyelit), çocukluk çağı sistemik reaksiyonlarında ve lösemi, Langerhans hücreli histiyozis veya Ewing sarkomu gibi hızlı seyreden spesifik tümörlerde periostun epizodik irritasyonuna bağlı gelişir.

**Soru 2 (ID: 65d06590-7e1c-4a84-a11c-b9a8cd94a682)**
Soru Kökü: Dış kortikal sınırın korunarak incecik bir tabaka halinde lezyon etrafını sarması radyografide 'yumurta kabuğu' (eggshell) görünümü olarak ifade edilir. Bu bulgu, lezyonun periostu yıkacak kadar hızlı olmadığını ancak korteksi iterek inceltecek kadar baskı yaptığını gösterir. Tablo 9'a göre, yumurta kabuğu görünümü aşağıdaki patolojilerden hangisi için karakteristiktir?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma ve semento-ossifying fibroma, yavaş ekspansif büyüme karakterleri sayesinde kortikal plakanın yıkılmasını önleyip sadece incelmesini sağlar ve 'yumurta kabuğu' paternini oluşturur. Garre osteomiyeliti soğan kabuğu reaksiyonu yaparken, malign lenfoma güve yeniği tarzında sınırları silen bir yıkım yapar.

---

### ÇİFT 198 (Benzerlik: 0.71)

**Soru 1 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

**Soru 2 (ID: 5fc99b65-b5ae-426d-9d56-1e8e3d219242)**
Soru Kökü: 16 yaşında erkek hasta, posterior mandibulada çok hızlı büyüyen, ağrılı, asimetrik şişlik ile acil servise başvuruyor. Panoramik radyografisinde tümörün dış kortikal tabakayı yırtıp periostu hızla yukarı kaldırdığı ve bu kaldırma noktasında üçgen şeklinde kesintili reaktif bir kemik birikimi oluştuğu izleniyor. İskelet sisteminde 'Codman üçgeni' olarak isimlendirilen bu kritik görünüm en sık hangi malignitede saptanır?
Doğru Şık (E): Osteosarkom
Açıklama: Hızlı ilerleyen osteosarkom lezyonu korteksi delerek periostu çevre dokuya doğru sıyırır; periostun kemiğe yapışık kaldığı taban köşesindeki reaktif yeni kemikleşme 'Codman üçgeni'ni meydana getirir. Karsinomlar genellikle güve yeniği tarzında lokal kortikal destrüksiyon yapar, bu tip spesifik periost reaksiyonunu uyarmaz. Codman üçgeni, hücrelerin subperiosteal boşlukta agresif yükselişinin kanıtıdır.

---

### ÇİFT 199 (Benzerlik: 0.71)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: 1a7fce10-6260-4d9a-b402-0012814faa29)**
Soru Kökü: Aşağıdaki lezyon veya durumlardan hangisinde radyografik olarak 'soğan kabuğu' (onion-skin) şeklinde ardışık lamellated periost reaksiyonu görülmesi **beklenmez**?
Doğru Şık (E): Santral hemanjiyom
Açıklama: Santral hemanjiyomlar soğan kabuğu değil, tipik olarak 'at arabası tekerliği', 'bal peteği' veya 'tekerlek' görünümünde vasküler ağlar oluşturur. Soğan kabuğu görünümü esas olarak inflamatuar olaylarda (osteomiyelit), çocukluk çağı sistemik reaksiyonlarında ve lösemi, Langerhans hücreli histiyozis veya Ewing sarkomu gibi hızlı seyreden spesifik tümörlerde periostun epizodik irritasyonuna bağlı gelişir.

---

### ÇİFT 200 (Benzerlik: 0.71)

**Soru 1 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 201 (Benzerlik: 0.71)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: 87a5a351-1d1b-4435-a93f-d6e5194c8a57)**
Soru Kökü: Enflamatuar eksüda, kanama veya tümöral hücrelerin periostu dışarıya doğru aralıklı olarak uyarması, korteks dışında lamelli bir kemik yapımına yol açarak radyografide "soğan kabuğu" (onion-skin) paternini oluşturur. Aşağıdakilerden hangisi bu spesifik periost reaksiyonuna neden **olmaz**?
Doğru Şık (A): Basit kemik kisti
Açıklama: Basit kemik kisti medüller kemik içerisinde yavaş büyüyen, genellikle asemptomatik, boşluklu bir psödokisttir ve periost reaksiyonunu uyararak yeni kemik yapımına (soğan kabuğu) neden olmaz. Garre osteomiyeliti (kronik proliferatif periostitis), İnfantil kortikal hiperostoz (Caffey hastalığı) ve Ewing sarkomu periostu sürekli aralıklarla uyararak tipik lamelli soğan kabuğu deseni yaratır.

---

### ÇİFT 202 (Benzerlik: 0.71)

**Soru 1 (ID: 62b72c39-be56-4c4d-87be-366a7d6bf522)**
Soru Kökü: Kemik içinde belirgin bir sınır olmaksızın, ilerleyen düzensiz osteolitik aktiviteyle karakterize ve komşu trabekülleri iz bırakmadan eriten "permeatif yıkım" görünümü saptanmaktadır. Aşağıdaki lezyonlardan hangisinin bu radyografik infiltrasyon paternini sergilemesi beklenir?
Doğru Şık (E): Diş eti karsinomu (Carcinoma of the gingiva)
Açıklama: Permeatif yıkım, malign lezyonların agresif ve hızlı ilerlemesi nedeniyle kemiğin reaksiyon verememesi (kortikal sınır veya skleroz yapamaması) sonucu oluşan belirsiz invaziv sınırdır. Diş eti karsinomu çevre dokuları hızla enfekte ederek altındaki kemikte bu tip destrüksiyona yol açar. Diğer şıklardaki oluşumlar kistik veya sklerotik reaksiyonlara neden olan daha benign süreçlerdir.

**Soru 2 (ID: b194719f-0957-477d-a10f-123898ac2173)**
Soru Kökü: Çenelerde radyolojik olarak izlenen bir lezyonun ilerleyen kenarında ve hemen arkasında kemik yıkımını temsil eden, çok az trabekül içeren veya hiç içermeyen geniş bir radyolusent alan 'invaziv sınır' olarak rapor edilmiştir. Bu sınır paternine sahip bir lezyonun histolojik davranışı hakkında aşağıdakilerden hangisi söylenebilir?
Doğru Şık (D): Genellikle hızlı gelişen malignite paterni gösterir.
Açıklama: İnvaziv sınır, osteoblastik tamir ve sınır oluşturma sürecinin, patolojinin saldırgan büyüme hızına yetişemediği yüksek gradeli malignitelerde görülür. Hidrolik büyüme kistlerde, reaktif kemik yapımı ise sklerozan iltihaplarda görülürken; invaziv sınır tümör hücrelerinin kemik ilik boşluklarına trabekülleri eriterek hızla infiltre olduğunun kesin göstergesidir.

---

### ÇİFT 203 (Benzerlik: 0.71)

**Soru 1 (ID: 645b8846-ff63-471a-ab37-a979b78d73f5)**
Soru Kökü: Çene radyografisi analizinde hekim, 'atılmış pamuk' (cotton wool) görünümünü kaydetmiştir. Bu bulgu dismorfik ve sklerotik kemik adacıklarının varlığını yansıtmaktadır. Tablo 9 verilerine göre, aşağıdaki patolojilerden hangisi bu görünüme neden olan durumlardan biri **değildir**?
Doğru Şık (C): Pindborg tümörü
Açıklama: Pindborg tümörü (Kalsifiye Epiteliyal Odontojenik Tümör), internal kalsifikasyonlar sebebiyle klasik olarak 'kar yağdı' (driven snow) veya benekli görünüm verir. Paget hastalığı, florid osseöz displazi, fibröz displazi ve osteosklerotik metastazlar ise yoğun radyoopak kitlelerin kemik içinde yamalar halinde bulunduğu 'atılmış pamuk' paternini oluştururlar.

**Soru 2 (ID: 7cd17923-61e3-41b3-a20a-e4fa964eb086)**
Soru Kökü: Odontojenik lezyonların iç yapı değerlendirmesinde, fibröz doku içerisinde mikroskobik kalsifikasyon odaklarının zamanla birleşmesi sonucu ortaya çıkan radyografik "kum benzeri" (sand-like) görünüm aşağıdaki patolojilerin hangisinde karakteristik **değildir**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma radyografik olarak tamamen litik, radyolüsent bir gelişim izler ve kemik kalsifikasyonu üretmez; çoklu kavitasyonlara yol açarak 'bal peteği' veya 'sabun köpüğü' deseni yapar. Pindborg tümörü (KEOT), Gorlin kisti ve Adenoameloblastoma (AOT) ise kalsifiye epitel ürünleri ürettikleri için içlerinde radyografik olarak 'kar yağdı' veya 'kum benzeri' ince kalsifikasyonlar barındırırlar.

---

### ÇİFT 204 (Benzerlik: 0.71)

**Soru 1 (ID: 2f403f4d-1341-4d4b-9039-f6babe181229)**
Soru Kökü: 62 yaşında sistemik rahatsızlığı bulunmayan erkek hasta, mandibular posterior dişlerindeki ileri derecede sallanma şikayetiyle başvuruyor. Radyografide dişlerin periapikal bölgesine kadar inen yaygın alveol kemiği kaybı ve dişlerin kemik desteksiz "yüzen diş" görünümü izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İleri periodontal hastalık
Açıklama: İleri periodontal hastalık, yavaş seyirli ancak şiddetli kret rezorpsiyonu ile dişleri tüm destek dokusundan yoksun bırakarak 'yüzen diş' görünümü oluşturur. Agresif periodontitis daha çok genç bireylerde lokalize alanlarda görülürken, Langerhans hücreli histiyositoz sıklıkla pediyatrik yaş grubunda izlenen litik lezyonlardır. İleri yaş ve yaygın yıkım hikayesi periodontal hastalıkla tam uyumludur.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 205 (Benzerlik: 0.70)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: e3d5e2e3-c5e0-4b53-8e16-588455fa46a9)**
Soru Kökü: Otuz beş yaşındaki hastanın radyografisinde alveolar kemiğin marjinal olarak korunduğu, ancak dişlerin kökleri etrafındaki kemiğin tamamen eridiği ve dişlerin boşlukta 'yüzen diş' (floating teeth) görünümü aldığı saptanmıştır. Aşağıdakilerden hangisi bu duruma yol açan agresif patolojiler arasında **yer almaz**?
Doğru Şık (C): Sjögren sendromu
Açıklama: Sjögren sendromu, tükrük bezlerini etkileyen bir otoimmün hastalık olup siyalografide 'kiraz çiçeği' görünümü yapar, ancak alveolar kemikte yüzen diş tablosuna sebep olmaz. Yüzen diş tablosu, diş destek kemiğinin agresif bir şekilde lokal olarak yok edildiği Langerhans hücreli histiyositoz, malign tümörler veya şiddetli/agresif periodontitiste (Papillon-Lefevre dahil) izlenir.

---

### ÇİFT 206 (Benzerlik: 0.70)

**Soru 1 (ID: 8598389e-d5b9-4638-8c01-5a13f217a861)**
Soru Kökü: Elli beş yaşındaki hastanın kafa tasında saptanan multipl radyolüsent kemik lezyonları, keskin bir sınıra sahip olup bitişik normal kemikte hiçbir reaksiyon veya skleroz üretmemiştir. Radyografide bir kağıt zımbasıyla delik açılmış gibi duran bu perifer yapısı, aşağıdaki patolojilerden hangisi için spesifik bir bulgudur?
Doğru Şık (B): Multipl miyelom
Açıklama: Zımba ile delinmiş (punched-out) kenar, kemiğin reaktif bir yanıt veremediği çok dar geçişli ve keskin sınırlı radyolüsensilerdir; bu patern multipl miyelomun klasik radyografik işaretidir. Periapikal kemik displazisi geniş sklerotik reaksiyon üretirken, odontomların çevresinde ince yumuşak doku kapsülü bulunur. Sklerozan osteitiste ise komşu kemikle kaynaşan belirsiz (blending) bir sınır vardır.

**Soru 2 (ID: 92720593-9dfc-49a1-ab9b-020f06c166ad)**
Soru Kökü: Altmış yaşında erkek hasta, çene kemiklerinde ve kafatasında yaygın ağrı şikayetiyle başvuruyor. Radyografide, etrafında hiçbir kemik reaksiyonunun belirgin olmadığı, lezyon ile sağlıklı doku arasında çok dar bir geçiş bölgesine sahip, adeta 'bir kağıt zımba ile delinmiş' görünümü veren multipl keskin sınırlı radyolusent alanlar izleniyor. Bu spesifik sınır tipinin aşağıdaki hastalıklardan hangisinde görülme olasılığı **en yüksektir**?
Doğru Şık (C): Multipl miyelom
Açıklama: Multipl miyelomdaki plazma hücre proliferasyonu, kemikte osteoblastik reaksiyona fırsat vermeden son derece hızlı ve lokalize litik alanlar oluşturur, bu da radyografide sklerotik kenarı olmayan keskin 'zımba deliği' (punched-out) periferlere neden olur. Paget veya fibröz displazide ise osteoblastik aktivite mevcuttur ve kemik reaksiyonu (buzlu cam, atılmış pamuk) belirgindir. Çenelerde ve kraniyal kasada sklerotik halosu olmayan çoklu zımba deliği lezyonları miyelom tanısı için patognomoniktir.

---

### ÇİFT 207 (Benzerlik: 0.70)

**Soru 1 (ID: e14ac615-4834-4823-9533-1e1a81d11895)**
Soru Kökü: Aşağıdaki malign lezyonlardan hangisi, dişi destekleyen alveolar kemiği hızlıca infiltre ve destrükte ederek radyografide tipik "yüzen diş" (floating in air) manzarası oluşturan patolojiler arasında **yer almaz**?
Doğru Şık (D): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom benign, lokal agresif bir lezyondur ve genellikle taraklı sınırlar, zayıf septalar içeren ekspansif bir kitle (sabun köpüğü benzeri) oluşturur, permeatif yıkım ve yüzen diş yapmaz. Primer intraosseous karsinoma, osteosarkom, kondrosarkom ve lenfoma gibi maligniteler ise kemiği adeta eriterek dişleri boşlukta yüzüyormuş gibi desteksiz bırakır.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 208 (Benzerlik: 0.70)

**Soru 1 (ID: a8b1edf1-7d32-42b5-aa34-7b0119cb5c6f)**
Soru Kökü: Radyografik olarak 'kaynaşmış sınır' (belirsiz sınır) izlenen kemik lezyonlarının özellikleri değerlendirildiğinde, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Bu sınır tipi yavaş büyüyen iyi huylu tümörlerin ve gelişimsel kistlerin karakteristik özelliğidir.
Açıklama: Kaynaşmış sınır, lezyon trabekülleri ile normal kemik arasında geniş bir geçiş bölgesinin bulunduğu belirsiz bir formdur ve klasik olarak sklerozan osteitiste (kondensing osteitis) görülür. Yavaş büyüyen gelişimsel kistler veya iyi huylu tümörler (yanlış olan seçenek) bu şekilde difüz yayılım göstermez; aksine ince ve homojen bir radyoopak hatla (kortikal kenar) iyi sınırlı formda izlenirler. Bu radyografik ayrım, inflamatuar reaktif skleroz ile ekspansif kistik büyümenin birbirinden ayırt edilmesinde klinisyene doğrudan yol gösterir.

**Soru 2 (ID: f93664cf-f496-4515-9436-79acbd4ada16)**
Soru Kökü: Kemik displazileri ve neoplazilerin büyüme davranışları radyografik yorumlamada önemli bir ayırıcı tanı parametresidir. Fibröz displazinin spesifik özellikleriyle karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hızlı büyüyen agresif lezyonlar dış kortikal plakanın aşırı kalınlaşarak korunmasına neden olur.
Açıklama: Hızlı büyüyen lezyonlar dış kortikal plakayı koruyup kalınlaştırmaz, tam aksine periostun adaptasyon sınırını aşarak kortikal plakada yıkıma ve kayba neden olurlar. Fibröz displazi diffüz (merkezsiz) büyürken, ossifiye fibrom sınırları belirgin eşmerkezli bir büyüme paterni çizer. Bu morfolojik fark tümör ve displazi ayırımında klinisyene kılavuzluk eder.

---

### ÇİFT 209 (Benzerlik: 0.70)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

---

### ÇİFT 210 (Benzerlik: 0.70)

**Soru 1 (ID: 6125496a-8203-4d2a-98c9-8c613e18e584)**
Soru Kökü: Alt çenede saptanan radyolüsent bir patolojinin lokalizasyon analizi sırasında, mandibular kanal (IAC) korteksinde yıkım ile birlikte düzensiz bir genişleme izlenmesi en olası olarak hangi durumu işaret eder?
Doğru Şık (D): Kanal boyunca aşağı doğru gelişen malign neoplazm
Açıklama: Mandibular kanalın kortikal yıkımla birlikte düzensiz ve sınırları belirsiz şekilde genişlemesi, tümörün sinir yolu boyunca perineural yayıldığını gösterir ve bu durum genellikle malign bir neoplazmı işaret eder. Kortikal sınır bozulmadan düzenli bir genişleme olsaydı, nöral veya vasküler kökenli benign bir lezyon düşünülürdü. Anatomik bariyerlerin bu şekilde infiltratif yıkımı agresivite göstergesidir.

**Soru 2 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

---

### ÇİFT 211 (Benzerlik: 0.70)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 212 (Benzerlik: 0.70)

**Soru 1 (ID: 7907722e-52ce-439d-a04b-4719e6b135e7)**
Soru Kökü: 'Kum benzeri görünüm' ile karakterize olan bir tümöral kalsifikasyon ile 'taraklı görünüm' sergileyebilen bir sınır morfolojisi aşağıdaki patoloji seçeneklerinin hangisinde sırasıyla doğru olarak eşleştirilmiştir?
Doğru Şık (B): Pindborg tümörü — Anevrizmal kemik kisti
Açıklama: Pindborg tümörü (CEOT) amiloid benzeri materyalin distrofik kalsifikasyonu ile 'kum benzeri görünüm' üretirken; anevrizmal kemik kisti, çevre kemik dokuya yaptığı dalgalı lokal basınçlar nedeniyle periferinde 'taraklı görünüm' oluşturur. Gorlin kisti de kum benzeri olabilse de santral hemanjiom taraklı değil, tekerlek veya bal peteği yapar. Bu patognomonik ikili, lezyonların kalsifikasyon tipleri ile büyüme dinamiklerini mükemmel özetler.

**Soru 2 (ID: 7cd17923-61e3-41b3-a20a-e4fa964eb086)**
Soru Kökü: Odontojenik lezyonların iç yapı değerlendirmesinde, fibröz doku içerisinde mikroskobik kalsifikasyon odaklarının zamanla birleşmesi sonucu ortaya çıkan radyografik "kum benzeri" (sand-like) görünüm aşağıdaki patolojilerin hangisinde karakteristik **değildir**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma radyografik olarak tamamen litik, radyolüsent bir gelişim izler ve kemik kalsifikasyonu üretmez; çoklu kavitasyonlara yol açarak 'bal peteği' veya 'sabun köpüğü' deseni yapar. Pindborg tümörü (KEOT), Gorlin kisti ve Adenoameloblastoma (AOT) ise kalsifiye epitel ürünleri ürettikleri için içlerinde radyografik olarak 'kar yağdı' veya 'kum benzeri' ince kalsifikasyonlar barındırırlar.

---

### ÇİFT 213 (Benzerlik: 0.70)

**Soru 1 (ID: e3d5e2e3-c5e0-4b53-8e16-588455fa46a9)**
Soru Kökü: Otuz beş yaşındaki hastanın radyografisinde alveolar kemiğin marjinal olarak korunduğu, ancak dişlerin kökleri etrafındaki kemiğin tamamen eridiği ve dişlerin boşlukta 'yüzen diş' (floating teeth) görünümü aldığı saptanmıştır. Aşağıdakilerden hangisi bu duruma yol açan agresif patolojiler arasında **yer almaz**?
Doğru Şık (C): Sjögren sendromu
Açıklama: Sjögren sendromu, tükrük bezlerini etkileyen bir otoimmün hastalık olup siyalografide 'kiraz çiçeği' görünümü yapar, ancak alveolar kemikte yüzen diş tablosuna sebep olmaz. Yüzen diş tablosu, diş destek kemiğinin agresif bir şekilde lokal olarak yok edildiği Langerhans hücreli histiyositoz, malign tümörler veya şiddetli/agresif periodontitiste (Papillon-Lefevre dahil) izlenir.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 214 (Benzerlik: 0.70)

**Soru 1 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

**Soru 2 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

---

### ÇİFT 215 (Benzerlik: 0.70)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 216 (Benzerlik: 0.70)

**Soru 1 (ID: 03eb47b3-04c3-4d53-a192-7cdf62ca39be)**
Soru Kökü: 'Sabun köpüğü' görünümü, iç yapısında kavisli ve kalın septalar barındıran multilocular lezyonların tipik bir bulgusudur. Aşağıdaki lezyonlardan hangisinde bu radyografik paternin izlenmesi **en az olasıdır**?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksoma 'tenis raketi' veya 'bal peteği' görünümleri üretirken, düz ve ince septalar içerdiği için 'sabun köpüğü' manzarası oluşturması beklenmez. Sabun köpüğü görünümü kalın ve kavisli septalarla karakterizedir; bu durum ameloblastoma, santral dev hücreli tümör ve santral hemanjiomda tipik olarak görülür. Bu septal mimari farkı, ameloblastoma ile miksomanın radyografik ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

---

### ÇİFT 217 (Benzerlik: 0.70)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 218 (Benzerlik: 0.70)

**Soru 1 (ID: 15d1ced1-63e6-4611-bfb0-415f6a49c595)**
Soru Kökü: Aşağıdaki lezyon-radyografik görünüm eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Santral hemanjiyom - Yüzen diş görünümü
Açıklama: Santral hemanjiyom radyografide kaba vasküler kanalların kemik spikülleriyle çevrelenmesine bağlı olarak tipik 'at arabası tekerliği' veya 'tekerlek' görünümü verir; yüzen diş görünümü vermez. Yüzen diş manzarası agresif periodontitis, Langerhans hücreli histiyozis veya malign infiltrasyonlarda diş etrafı kemik desteğinin total kaybı sonucu oluşur. Vasküler kavitasyonlar radyolüsent boşluklar ağından oluşur.

**Soru 2 (ID: 2fe07fc4-5a2b-496c-9b20-011da46c1d26)**
Soru Kökü: Malign karakterli kemik lezyonlarının agresif destrüksiyon paternleri ayırıcı tanıda paha biçilemez bir referanstır. Aşağıdaki tümör ve ona eşlik eden spesifik radyografik bulgu eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Ewing sarkomu – Taraklı görünüm
Açıklama: Ewing sarkomu hızlı kemik iliği infiltrasyonu ve periosteal reaksiyon yaratarak 'soğan kabuğu' ve 'güneş ışını' görünümleri üretir; yavaş genişleyen iyi huylu veya kistik lezyonlara özgü 'taraklı görünüm' oluşturmaz. Burkitt tümörünün çivi kökleri veya Skuamöz hücreli karsinomun güve yeniği görünümü, ilgili malignitelerin karakteristik yıkım paternleriyle örtüşür. Taraklı sınırın olmaması, tümörün çevre yapılara adapte olacak zamanı bulamadan kemiği yok ettiğini gösterir.

---

### ÇİFT 219 (Benzerlik: 0.70)

**Soru 1 (ID: 92720593-9dfc-49a1-ab9b-020f06c166ad)**
Soru Kökü: Altmış yaşında erkek hasta, çene kemiklerinde ve kafatasında yaygın ağrı şikayetiyle başvuruyor. Radyografide, etrafında hiçbir kemik reaksiyonunun belirgin olmadığı, lezyon ile sağlıklı doku arasında çok dar bir geçiş bölgesine sahip, adeta 'bir kağıt zımba ile delinmiş' görünümü veren multipl keskin sınırlı radyolusent alanlar izleniyor. Bu spesifik sınır tipinin aşağıdaki hastalıklardan hangisinde görülme olasılığı **en yüksektir**?
Doğru Şık (C): Multipl miyelom
Açıklama: Multipl miyelomdaki plazma hücre proliferasyonu, kemikte osteoblastik reaksiyona fırsat vermeden son derece hızlı ve lokalize litik alanlar oluşturur, bu da radyografide sklerotik kenarı olmayan keskin 'zımba deliği' (punched-out) periferlere neden olur. Paget veya fibröz displazide ise osteoblastik aktivite mevcuttur ve kemik reaksiyonu (buzlu cam, atılmış pamuk) belirgindir. Çenelerde ve kraniyal kasada sklerotik halosu olmayan çoklu zımba deliği lezyonları miyelom tanısı için patognomoniktir.

**Soru 2 (ID: afa01298-edf9-478a-8db2-14e093d43a1b)**
Soru Kökü: 48 yaşında kadın hasta klinik muayenesinde sistemik zayıflık ve çoklu idrar yolu taşı öyküsü olduğunu belirtiyor. Panoramik radyografisinde dişlerin lamina duralarının kaybolduğu ve çene kemiği trabekülasyonunun bulanıklaşıp granüler bir yapı aldığı saptanıyor. 'Tuz biber görünümü' olarak adlandırılan bu spesifik radyografik bulgu en olası hangi patolojiyi işaret eder?
Doğru Şık (B): Hiperparatiroidizm
Açıklama: Hiperparatiroidizmde yüksek parathormon seviyesi yaygın kemik rezorpsiyonuna yol açar ve radyografide kemiğin ince granüler, 'tuz biber' şeklinde bir patern almasıyla karakterizedir. Fibröz displazi buzlu cam veya portakal kabuğu görünümü yaparken, talasemi fırça görünümüne sebep olur. Lamina dura kaybı ve tuz biber paterni bu endokrin bozukluk için patognomoniktir.

---

### ÇİFT 220 (Benzerlik: 0.70)

**Soru 1 (ID: 385def3b-0df9-4859-ba79-1f674c7f92a7)**
Soru Kökü: 65 yaşında erkek hasta sağ üst çenesinde hızla büyüyen sert bir kitle ile kliniğe başvuruyor. Panoramik radyografide alveolar kretten maksiller sinüse doğru uzanan, kemik yapısında sınırları belirsiz ve infiltratif özellik gösteren yaygın bir "permeatif yıkım" paterni izleniyor. Tablo 9'da sunulan klasik görünümler referans alındığında, bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Maksilla karsinomu
Açıklama: Maksilla karsinomu (Carcinoma of the maxilla), alveolar proçesten sinüs tabanına kadar kemik trabeküllerini agressif şekilde eriten invaziv bir tümördür ve radyografide kemiği sünger gibi yiyen permeatif yıkım manzarası gösterir. Malign lenfoma da permeatif yıkım yapabilse de, maksilla epitelyal dokusu kaynaklı hızlı agresyon klinik ve demografik olarak maksilla karsinomuna daha spesifiktir.

**Soru 2 (ID: 92720593-9dfc-49a1-ab9b-020f06c166ad)**
Soru Kökü: Altmış yaşında erkek hasta, çene kemiklerinde ve kafatasında yaygın ağrı şikayetiyle başvuruyor. Radyografide, etrafında hiçbir kemik reaksiyonunun belirgin olmadığı, lezyon ile sağlıklı doku arasında çok dar bir geçiş bölgesine sahip, adeta 'bir kağıt zımba ile delinmiş' görünümü veren multipl keskin sınırlı radyolusent alanlar izleniyor. Bu spesifik sınır tipinin aşağıdaki hastalıklardan hangisinde görülme olasılığı **en yüksektir**?
Doğru Şık (C): Multipl miyelom
Açıklama: Multipl miyelomdaki plazma hücre proliferasyonu, kemikte osteoblastik reaksiyona fırsat vermeden son derece hızlı ve lokalize litik alanlar oluşturur, bu da radyografide sklerotik kenarı olmayan keskin 'zımba deliği' (punched-out) periferlere neden olur. Paget veya fibröz displazide ise osteoblastik aktivite mevcuttur ve kemik reaksiyonu (buzlu cam, atılmış pamuk) belirgindir. Çenelerde ve kraniyal kasada sklerotik halosu olmayan çoklu zımba deliği lezyonları miyelom tanısı için patognomoniktir.

---

### ÇİFT 221 (Benzerlik: 0.70)

**Soru 1 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 222 (Benzerlik: 0.70)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

---

### ÇİFT 223 (Benzerlik: 0.70)

**Soru 1 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 224 (Benzerlik: 0.70)

**Soru 1 (ID: c426059e-0ba3-446d-bab2-2df2063b4c1f)**
Soru Kökü: Santral hemanjiom, radyografik internal yapısında 'sabun köpüğü' ve 'bal peteği' gibi çok bölmeli paternler üretebilir. Ancak bu vasküler lezyonun en karakteristik ve ayırt edici kemik septa formasyonu, septaların merkezi bir noktadan dışa doğru yayılım göstermesiyle oluşan yapıdır. Bu spesifik görünüm aşağıdakilerden hangisiyle adlandırılır?
Doğru Şık (B): Tekerlek görünümü
Açıklama: Santral hemanjiom içindeki damar yapılarının radyal genişlemesi, etraflarındaki kemik septaların merkezi bir odaktan çevreye doğru uzanmasına neden olarak karakteristik 'tekerlek' (veya at arabası tekerliği) görünümünü yaratır. Tenis raketi görünümü miksomada doğrusal ve düz kesişen septalarla karakterizeyken, tekerlek görünümü tamamen vasküler hemodinamiğin sentrifugal baskısının sonucudur. Bu patern, intraosseöz anevrizmalardan çok gerçek hemanjiomların yapısını tanımlar.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 225 (Benzerlik: 0.70)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

---

### ÇİFT 226 (Benzerlik: 0.70)

**Soru 1 (ID: 94dcecf8-ddb7-4b67-b9aa-66af46f7179a)**
Soru Kökü: Odontojenik kistlerin radyografik formları çeşitlilik gösterebilir. Genellikle koronal bir folikül etrafında 'balon benzeri' (hidrolik) genişleme göstermesi beklenen, ancak periferal anatomik kısıtlamalar veya çoklu lobülasyonlar nedeniyle radyografide 'taraklı görünüm' de sergileyebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Dentigeröz kist
Açıklama: Dentigeröz kist, gömülü bir dişin kuronunu çevreleyen folikülün hidrolik genişlemesiyle klasik olarak 'balon benzeri' form alır ancak kısıtlı kemik anatomisinde büyürken komşu yapılara adapte olarak 'taraklı görünüm' de sergileyebilir. Radiküler kist apeks çevresinde gelişir ve taraklı bir ilerleme göstermez, genellikle armut şekillidir. Bu ikili morfolojik varyasyon potansiyeli, dentigeröz kistin biyomekanik büyüme karakterini yansıtır.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 227 (Benzerlik: 0.70)

**Soru 1 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

**Soru 2 (ID: 8ced98a5-1dbe-42b8-a050-175ce27ba8bc)**
Soru Kökü: 28 yaşında kadın hasta, üst sağ bölgesinde ağrısız bir şişlik fark ediyor. Periapikal radyografide, maksiller sağ lateral kesici ve kanin dişlerin köklerini birbirinden ayırarak superiora doğru genişleyen, inferiora (alveol kretine) doğru daralan karakteristik "armut şekilli" (pear-shaped) radyolüsent lezyon saptanıyor. Dişler vital olduğuna göre, en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Globulomaksiller kist
Açıklama: Globulomaksiller kist, adını yerleşim yerinden alan ve anatomik olarak her zaman maksiller lateral ve kanin dişleri arasına yerleşerek onları diverjan hale getiren ters dönmüş 'armut' formunda bir gelişimsel/fissüral kisttir. Dişlerin vital olması kökeninin pulpa enfeksiyonu (radiküler kist) olmadığını kesinleştirir.

---

### ÇİFT 228 (Benzerlik: 0.70)

**Soru 1 (ID: 331464f4-2636-4697-bf20-22a974da6d7d)**
Soru Kökü: Panoramik radyografide saptanan ve 'soğan kabuğu' (onion-skin) olarak adlandırılan, lamelli periost reaksiyonu paterni, periosteumun ardışık eksüda/uyaran ataklarına yeni kemik tabakaları üreterek verdiği reaktif bir yanıttır. Aşağıdakilerden hangisinin radyografide bu paterni oluşturması **beklenmez**?
Doğru Şık (D): Periapikal semental displazi
Açıklama: Soğan kabuğu reaksiyonu; enflamatuar durumlarda (Garre osteomiyeliti), Langerhans hücreli histiyositozda, lösemide ve Ewing sarkomunda izlenen katmanlı periost yanıtıdır. Periapikal semental displazi ise kök uçlarında kortikal kalınlaşma veya sklerotik halo ile karakterize kemik içi reaktif bir süreçtir, dış periostta soğan kabuğu şeklinde lamelli apozisyon yapmaz.

**Soru 2 (ID: 65d06590-7e1c-4a84-a11c-b9a8cd94a682)**
Soru Kökü: Dış kortikal sınırın korunarak incecik bir tabaka halinde lezyon etrafını sarması radyografide 'yumurta kabuğu' (eggshell) görünümü olarak ifade edilir. Bu bulgu, lezyonun periostu yıkacak kadar hızlı olmadığını ancak korteksi iterek inceltecek kadar baskı yaptığını gösterir. Tablo 9'a göre, yumurta kabuğu görünümü aşağıdaki patolojilerden hangisi için karakteristiktir?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma ve semento-ossifying fibroma, yavaş ekspansif büyüme karakterleri sayesinde kortikal plakanın yıkılmasını önleyip sadece incelmesini sağlar ve 'yumurta kabuğu' paternini oluşturur. Garre osteomiyeliti soğan kabuğu reaksiyonu yaparken, malign lenfoma güve yeniği tarzında sınırları silen bir yıkım yapar.

---

### ÇİFT 229 (Benzerlik: 0.70)

**Soru 1 (ID: 62b72c39-be56-4c4d-87be-366a7d6bf522)**
Soru Kökü: Kemik içinde belirgin bir sınır olmaksızın, ilerleyen düzensiz osteolitik aktiviteyle karakterize ve komşu trabekülleri iz bırakmadan eriten "permeatif yıkım" görünümü saptanmaktadır. Aşağıdaki lezyonlardan hangisinin bu radyografik infiltrasyon paternini sergilemesi beklenir?
Doğru Şık (E): Diş eti karsinomu (Carcinoma of the gingiva)
Açıklama: Permeatif yıkım, malign lezyonların agresif ve hızlı ilerlemesi nedeniyle kemiğin reaksiyon verememesi (kortikal sınır veya skleroz yapamaması) sonucu oluşan belirsiz invaziv sınırdır. Diş eti karsinomu çevre dokuları hızla enfekte ederek altındaki kemikte bu tip destrüksiyona yol açar. Diğer şıklardaki oluşumlar kistik veya sklerotik reaksiyonlara neden olan daha benign süreçlerdir.

**Soru 2 (ID: d7ca7bae-94b6-4159-9749-2bc9370b2a54)**
Soru Kökü: Kemik içi lezyonların dış periferinde ince ve oldukça homojen yapıda, radyoopak ince bir reaktif kemik hattı saptanmıştır. Sınır tipolojisi 'kortikal kenar' olarak adlandırılan bu morfoloji, aşağıdaki lezyon gruplarının hangisinde izlenir?
Doğru Şık (E): Kistler ve yavaş büyüyen iyi huylu tümörler
Açıklama: Kortikal kenar, lezyonun büyüme hızının çevre kemiğin yeni kemik üreterek (osteoblastik aktivite ile) bu basıncı karşılamasına yetecek kadar yavaş olduğu durumlarda, yani kistler ve iyi huylu tümörlerde görülür. Hızlı gelişen maligniteler veya akut enfeksiyonlar osteoblastların sınır oluşturmasına izin vermeyecek hızda doku yıktıkları için invaziv sınırlar oluştururlar. Bu reaktif ince radyoopak hat lezyonun biyolojik davranışının benign olduğunu destekler.

---

### ÇİFT 230 (Benzerlik: 0.70)

**Soru 1 (ID: 05a5d6c7-43b0-4b19-9c87-bb74eb1d4a8b)**
Soru Kökü: Sekiz yaşında erkek çocuk hasta, alt çenesinde her iki tarafta giderek artan ağrısız şişlik şikayetiyle başvuruyor. Alınan panoramik radyografide her iki mandibular angulus ve ramus bölgesinde genişlemeye neden olan multiloküler radyolusent alanlar izleniyor. Çenelerde her zaman bilateral yerleşim gösterdiği bilinen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Cherubism
Açıklama: Çenelerdeki lezyonların bölgesel veya genel yerleşimli olması tanıda kritik bir filtredir ve cherubism mandibula ile maksillada her zaman bilateral ekspansiyonlarla karakterize genetik bir hastalıktır. Sıklıkla angulus bölgesinde görülen ameloblastom veya miksoma gibi odontojenik tümörler ise tipik olarak tek taraflı (unilateral) büyüme eğilimindedir. Radyografide bilateral simetrik multiloküler yıkım gören bir klinisyen yaş faktörüyle birlikte doğrudan cherubism tanısına yönelmelidir.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 231 (Benzerlik: 0.70)

**Soru 1 (ID: 4f3dc88a-9230-4283-ab52-c582884cb110)**
Soru Kökü: 12 yaşında erkek çocuk, sol alt birinci büyük azı dişindeki derin çürüğe bağlı sürekli ağrı ve alt çene kemiğinde ele gelen sert şişlik şikayetiyle başvuruyor. Radyografisinde inflamatuar eksüdaya yanıt olarak korteks dışında katmanlı 'soğan kabuğu' benzeri periost reaksiyonu izleniyor. Bu klinik verilere göre en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Garre osteomiyeliti
Açıklama: Enflamatuar eksüdanın periosteumdaki osteoblastları periyodik olarak uyarması sonucu yeni kemiğin katmanlar halinde (soğan kabuğu) çökelmesi, genç hastalarda periapikal enfeksiyona sekonder gelişen Garre osteomiyelitinin klasik bulgusudur. Osteosarkom dik açılı ışınsal spiküller verirken, hiperostoz diş çürüğü gibi lokal inflamasyonlarla tetiklenmez. Lamellasyon, enfeksiyonun alevlenme ve yatışma periyotlarını yansıtır.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 232 (Benzerlik: 0.70)

**Soru 1 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

**Soru 2 (ID: c2247c04-86d5-4f3d-9486-b16de4cc30d0)**
Soru Kökü: Lezyon çevresinde izlenen 'taraklı görünüm', bazı kist ve tümörlerin sınır karakteristiklerini tanımlamada kullanılır. Aşağıdaki patolojilerden hangisi radyografik olarak tipik taraklı görünüme sahip **değildir**?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler periferal kısıtlamalar altında 'armut şekilli' görünüm oluşturma eğilimindeyken, taraklı görünüm sergilemezler. Dentigeröz kist, travmatik kemik kisti, anevrizmal kemik kisti ve dev hücreli granülom ise radyografik sınırlarında tipik olarak 'taraklı görünüm' verir. Sınır morfolojisindeki bu farklılık, inflamatuar kaynaklı bir lezyon olan radiküler kisti diğer gelişimsel veya reaktif patolojilerden ayırır.

---

### ÇİFT 233 (Benzerlik: 0.70)

**Soru 1 (ID: a8b1edf1-7d32-42b5-aa34-7b0119cb5c6f)**
Soru Kökü: Radyografik olarak 'kaynaşmış sınır' (belirsiz sınır) izlenen kemik lezyonlarının özellikleri değerlendirildiğinde, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Bu sınır tipi yavaş büyüyen iyi huylu tümörlerin ve gelişimsel kistlerin karakteristik özelliğidir.
Açıklama: Kaynaşmış sınır, lezyon trabekülleri ile normal kemik arasında geniş bir geçiş bölgesinin bulunduğu belirsiz bir formdur ve klasik olarak sklerozan osteitiste (kondensing osteitis) görülür. Yavaş büyüyen gelişimsel kistler veya iyi huylu tümörler (yanlış olan seçenek) bu şekilde difüz yayılım göstermez; aksine ince ve homojen bir radyoopak hatla (kortikal kenar) iyi sınırlı formda izlenirler. Bu radyografik ayrım, inflamatuar reaktif skleroz ile ekspansif kistik büyümenin birbirinden ayırt edilmesinde klinisyene doğrudan yol gösterir.

**Soru 2 (ID: b194719f-0957-477d-a10f-123898ac2173)**
Soru Kökü: Çenelerde radyolojik olarak izlenen bir lezyonun ilerleyen kenarında ve hemen arkasında kemik yıkımını temsil eden, çok az trabekül içeren veya hiç içermeyen geniş bir radyolusent alan 'invaziv sınır' olarak rapor edilmiştir. Bu sınır paternine sahip bir lezyonun histolojik davranışı hakkında aşağıdakilerden hangisi söylenebilir?
Doğru Şık (D): Genellikle hızlı gelişen malignite paterni gösterir.
Açıklama: İnvaziv sınır, osteoblastik tamir ve sınır oluşturma sürecinin, patolojinin saldırgan büyüme hızına yetişemediği yüksek gradeli malignitelerde görülür. Hidrolik büyüme kistlerde, reaktif kemik yapımı ise sklerozan iltihaplarda görülürken; invaziv sınır tümör hücrelerinin kemik ilik boşluklarına trabekülleri eriterek hızla infiltre olduğunun kesin göstergesidir.

---

### ÇİFT 234 (Benzerlik: 0.70)

**Soru 1 (ID: 227a067b-fc19-4b52-8dc7-07a727663359)**
Soru Kökü: Radyografik yorumlamada lezyonun merkez üssünün (episantr) belirlenmesi, köken aldığı dokuyu öngörmede kritik öneme sahiptir. Merkez üssü sürmemiş bir dişin koronal kısmında yer alan radyolusent bir lezyonun, en yüksek olasılıkla aşağıdaki dokuların hangisinden köken aldığı düşünülür?
Doğru Şık (A): Odontojenik epitel
Açıklama: Diş gelişim sürecinde kron, mine organı (odontojenik epitel) ve dental folikül ile çevrilidir; bu nedenle krona komşu lokalizasyondaki lezyonlar yüksek olasılıkla bu odontojenik epitelden köken alır. İnferior alveolar kanal içinde gelişen vasküler veya nöral lezyonlar (çeldirici şıklar) ise dişin koronal kısmıyla değil, doğrudan kanal anatomisiyle ilişkilidir. Merkez üssü analizinde koronal yerleşim, foliküler kist (dentigeröz kist) veya ameloblastom gibi odontojenik epitelyal patolojilerin en güçlü habercisidir.

**Soru 2 (ID: 782c5f2a-6b2a-4af9-a3d6-8d5a146e1750)**
Soru Kökü: Radyografik olarak merkez üssü değerlendirilen lezyonların köken aldığı dokular birbirinden farklıdır. Aşağıdaki lokalizasyon ve köken eşleşmelerinden hangisi **yanlıştır**?
Doğru Şık (B): İnferior alveolar kanalın altı - Odontojenik doku
Açıklama: Odontojenik dokular embriyolojik olarak maksilla ve mandibulanın alveolar kret bölgesinde yer alır, bu nedenle inferior alveolar kanalın altında (bazal kemikte) odontojenik lezyon gelişme olasılığı oldukça düşüktür. Vasküler ve nöral lezyonlar kanal içinden gelişirken, kıkırdak kaynaklı osteokondromlar doğrudan kondiler bölgede izlenir. Lezyonun merkezi kanalın altındaysa klinisyen odontojenik kist/tümör yerine non-odontojenik kemik patolojilerini (örn. metastaz, gelişimsel defekt) düşünmelidir.

---

### ÇİFT 235 (Benzerlik: 0.70)

**Soru 1 (ID: 5f113e8c-1fe0-400c-a97f-94a3ed0d3384)**
Soru Kökü: Aşağıdaki kemik patolojileri ve tipik radyografik görünümleri ile ilgili yapılan eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Semento-ossifying fibroma – Çivi kökler
Açıklama: Semento-ossifying fibroma kemik trabekülleri ve sementum benzeri doku üretimi nedeniyle radyografide 'yumurta kabuğu' veya 'buzlu cam' görünümü verebilir; çivi kökler oluşturmaz. Çivi kökler, agresif rezorpsiyon yapan Burkitt tümörü veya malignant histiyositoma gibi lezyonların spesifik işaretidir. Diğer seçeneklerdeki patoloji-patern eşleştirmeleri literatürdeki karakteristik kalsifikasyon ve yıkım formlarıyla tam uyumludur.

**Soru 2 (ID: af640ede-9768-417c-adc5-0335e952422d)**
Soru Kökü: Radyografik kalsifikasyonlar ve özellikleri göz önüne alındığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Kronik iltihaplı kistlerde distrofik kalsifikasyonlar multiloküler kalın septalar şeklinde organize olurlar.
Açıklama: Kronik olarak iltihaplı kistlerde meydana gelen kalsifikasyonlar organize kalın septalar oluşturmaz, aksine tanınabilir bir patern olmaksızın çok ince ve parçacıklı bir görünüme sahiptir. Kalın septa oluşumu ameloblastom gibi aktif neoplastik lezyonlara ait bir özelliktir. Kistik kalsifikasyonlar yapısal destekten ziyade lokal doku nekrozuyla ilişkilidir.

---

### ÇİFT 236 (Benzerlik: 0.70)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: ec488eab-1298-4c40-b290-12300732bb6e)**
Soru Kökü: Odontojenik tümörlerin radyografik iç yapı analizinde septa morfolojisi ayırıcı tanıda kritik öneme sahiptir. Aşağıdaki lezyonlardan hangisi tipik olarak düz ve ince iç bölmeler (septalar) sergileyerek diğer multiloküler lezyonlardan ayrılır?
Doğru Şık (E): Odontojenik miksoma
Açıklama: Odontojenik miksomalar iç yapılarında kemiksi septalar bulundurur ve bu septalar ameloblastomdan farklı olarak genellikle düz, ince bölmeler şeklindedir. Anevrizmal kemik kisti veya keratokistlerde ise balon veya dalgalı şekilli genişlemeler daha ön plandadır. İç yapının bu ince organizasyonu tümörün miksomatöz içeriğiyle mekanik bir korelasyon gösterir.

---

### ÇİFT 237 (Benzerlik: 0.70)

**Soru 1 (ID: 8803305a-729d-4496-a3b8-df66006c17da)**
Soru Kökü: Merkez üssü mandibular kanal (IAC) bölgesinde lokalize bir patolojinin radyografik değerlendirmesinde, lezyonun diş kökleriyle ilişkisiz biçimde doğrudan IAC'nin **içinden** kaynaklandığı belirlenmiştir. Bu dokunun histolojik kökeninin aşağıdakilerden hangisi olması en kuvvetli olasılıktır?
Doğru Şık (C): Nöral veya vasküler yapılar
Açıklama: İnferior alveolar kanal içerisinde yer alan inferior alveolar sinir, arter ve ven dolayısıyla IAC içerisinden köken alan bir lezyonun nöral (nörom, nörofibrom, schwannom) veya vasküler (hemanjiyom) kökenli olması anatomik bir zorunluluktur. Odontojenik yapılar (ameloblastik kalıntılar, sementoblastlar) kanaldan bağımsız olarak daha koronal alveolar proçeste konumlanırlar. IAC kortikal sınırının bozulmadan genişlemesi de sıklıkla bu kanal içi iyi huylu vasküler/nöral patolojilere işaret eder.

**Soru 2 (ID: c751d0dd-1847-4fea-8c22-5acce477fcc9)**
Soru Kökü: Otuz beş yaşında kadın hastanın panoramik radyografik incelemesinde, inferior alveolar sinir kanalının korpus bölgesinde kanal kortikal sınırları tamamen korunarak genişlediği (ekspansiyon) saptanıyor. Nörolojik muayenede herhangi bir uyuşukluk veya parestezi bulgusu saptanmıyor. Bu radyografik bulgular ışığında kanal içindeki lezyonun davranışı hakkında **en olası** yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Vasküler veya nöral kökenli benign bir lezyondur.
Açıklama: İnferior alveolar kanal içinde gelişen nörom, schwannom veya hemanjiom gibi benign (iyi huylu) kökenli lezyonlar oldukça yavaş büyüdükleri için, kanalın ince kortikal sınırını yıkmadan, onu iterek ve intakt bırakarak genişletir. Malign neoplazmlar veya invaziv tümörler (çeldirici şıklar) ise hızla kemik destrüksiyonu yaparak korteksi yıkar ve kanal sınırlarının silinmesine, düzensizleşmesine neden olur. Anatomik kortikal plağın bozulmadan çadır gibi genişlemesi, lezyonun yavaş huylu doğasının ve nöral/vasküler kaynağının kesin göstergesidir.

---

### ÇİFT 238 (Benzerlik: 0.70)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: 8ced98a5-1dbe-42b8-a050-175ce27ba8bc)**
Soru Kökü: 28 yaşında kadın hasta, üst sağ bölgesinde ağrısız bir şişlik fark ediyor. Periapikal radyografide, maksiller sağ lateral kesici ve kanin dişlerin köklerini birbirinden ayırarak superiora doğru genişleyen, inferiora (alveol kretine) doğru daralan karakteristik "armut şekilli" (pear-shaped) radyolüsent lezyon saptanıyor. Dişler vital olduğuna göre, en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Globulomaksiller kist
Açıklama: Globulomaksiller kist, adını yerleşim yerinden alan ve anatomik olarak her zaman maksiller lateral ve kanin dişleri arasına yerleşerek onları diverjan hale getiren ters dönmüş 'armut' formunda bir gelişimsel/fissüral kisttir. Dişlerin vital olması kökeninin pulpa enfeksiyonu (radiküler kist) olmadığını kesinleştirir.

---

### ÇİFT 239 (Benzerlik: 0.70)

**Soru 1 (ID: 36856397-bdc8-4ce1-819f-305e83a6a165)**
Soru Kökü: Belirli iskelet sistemi hastalıkları diş hekimliğinde eşsiz radyografik metaforlarla isimlendirilir. Çenelerde genel artmış radyopasiteyle beraber izlenen ve özellikle 'şamdan görünümü' olarak adlandırılan bulgu aşağıdaki sendrom veya anomalilerin hangisinde tipik olarak karşımıza çıkar?
Doğru Şık (C): Piknodizostozis
Açıklama: Piknodizostozis, kemik rezorpsiyon defektine bağlı yaygın osteoskleroz, akroosteolizis ve kafa tabanında 'şamdan' görünümüne yol açan genetik bir kemik hastalığıdır. Paget hastalığı atılmış pamuk, miyelom ise zımba deliği görüntüsüyle karakterizedir. Şamdan görünümü piknodizostozise has sklerotik anomalilerin spesifik bir dizilimidir.

**Soru 2 (ID: 4e97c34c-90ce-42e1-94e4-956976779a3c)**
Soru Kökü: Kraniyal kemiklerde ve çenelerde 'hair-on-end' (fırça görünümü) paterni, diploik mesafenin genişlemesi sonucu kemik trabeküllerinin dış tabulaya dik olarak yeniden organize olmasıyla meydana gelir. Aşağıdaki sistemik durumlardan hangisinde fırça görünümünün izlenmesi **en az olasıdır**?
Doğru Şık (B): Piknodizostozis
Açıklama: Piknodizostozis, genel kemik yoğunluğu artışıyla karakterize olup radyografide 'tebeşir benzeri' veya 'şamdan' görünümüne yol açan osteosklerotik bir anomalidir. Kemik iliğinin hiperplaziye uğradığı kronik hemolitik anemiler (talasemi, orak hücre) ve bazı maligniteler (lösemi, osteosarkom) ise korteksi yıkarak periostta dik trabeküller (fırça görünümü) oluşturur.

---

### ÇİFT 240 (Benzerlik: 0.70)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 241 (Benzerlik: 0.70)

**Soru 1 (ID: 2bfba921-dea3-4681-b558-912976f6dfb1)**
Soru Kökü: Yirmi sekiz yaşındaki hastada kavisli ve kalın kemik septalarının iç içe geçmesiyle oluşan, hidrolik büyüme paternli multiloküler bir yapı izlenmiştir. Radyolojik raporda 'sabun köpüğü' görünümü olarak tarif edilen bu lezyon paterni, aşağıdakilerden hangisine aittir?
Doğru Şık (A): Ameloblastom
Açıklama: Ameloblastomda oluşan iç septalar kavisli ve kalındır; bu da radyografide multiloküler 'sabun köpüğü' (soap bubble) paternini yaratır. Odontojenik miksomada ise septalar genellikle düz ve ince olup 'tenis raketi' manzarası oluşturur. Basit kemik kisti taraklı kenar yapar ancak gerçek iç septa oluşturmaz.

**Soru 2 (ID: 67afab4e-f4ea-47ff-a0a3-35eafa21c439)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta, sağ maksillada yavaş ve ağrısız bir büyüme ile başvuruyor. Radyografik incelemede internal yapı değerlendirildiğinde kemiğe uygulanan mekanik strese göre yönlenmemiş (hizalanmamış), rastgele organize olmuş, normalden daha kısa ve sayıca çok fazla trabeküllerin yarattığı 'buzlu cam' manzarası izleniyor. Bu histomorfolojik trabeküler patern aşağıdakilerin hangisinde saptanır?
Doğru Şık (E): Fibröz displazi
Açıklama: Fibröz displazide normal olgun kemiğin yerini alan patolojik fibröz doku içerisinde strese yanıt veremeyen, rastgele yönlenmiş kısa ve ince immatür kemik trabekülleri bulunur ve bu yapı radyografide tipik bir 'buzlu cam' (portakal kabuğu) görüntüsü oluşturur. Osteosarkomda güneş ışını (spiküler) tarzında lineer dik trabeküller varken, multipl miyelomda zımba deliği tarzı litik defektler vardır. Fibröz displazi kemiğin merkezsiz, kemik boyunca yaygın genişlemesiyle karakterizedir.

---

### ÇİFT 242 (Benzerlik: 0.70)

**Soru 1 (ID: 2fe07fc4-5a2b-496c-9b20-011da46c1d26)**
Soru Kökü: Malign karakterli kemik lezyonlarının agresif destrüksiyon paternleri ayırıcı tanıda paha biçilemez bir referanstır. Aşağıdaki tümör ve ona eşlik eden spesifik radyografik bulgu eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Ewing sarkomu – Taraklı görünüm
Açıklama: Ewing sarkomu hızlı kemik iliği infiltrasyonu ve periosteal reaksiyon yaratarak 'soğan kabuğu' ve 'güneş ışını' görünümleri üretir; yavaş genişleyen iyi huylu veya kistik lezyonlara özgü 'taraklı görünüm' oluşturmaz. Burkitt tümörünün çivi kökleri veya Skuamöz hücreli karsinomun güve yeniği görünümü, ilgili malignitelerin karakteristik yıkım paternleriyle örtüşür. Taraklı sınırın olmaması, tümörün çevre yapılara adapte olacak zamanı bulamadan kemiği yok ettiğini gösterir.

**Soru 2 (ID: c2247c04-86d5-4f3d-9486-b16de4cc30d0)**
Soru Kökü: Lezyon çevresinde izlenen 'taraklı görünüm', bazı kist ve tümörlerin sınır karakteristiklerini tanımlamada kullanılır. Aşağıdaki patolojilerden hangisi radyografik olarak tipik taraklı görünüme sahip **değildir**?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler periferal kısıtlamalar altında 'armut şekilli' görünüm oluşturma eğilimindeyken, taraklı görünüm sergilemezler. Dentigeröz kist, travmatik kemik kisti, anevrizmal kemik kisti ve dev hücreli granülom ise radyografik sınırlarında tipik olarak 'taraklı görünüm' verir. Sınır morfolojisindeki bu farklılık, inflamatuar kaynaklı bir lezyon olan radiküler kisti diğer gelişimsel veya reaktif patolojilerden ayırır.

---

### ÇİFT 243 (Benzerlik: 0.70)

**Soru 1 (ID: 7907722e-52ce-439d-a04b-4719e6b135e7)**
Soru Kökü: 'Kum benzeri görünüm' ile karakterize olan bir tümöral kalsifikasyon ile 'taraklı görünüm' sergileyebilen bir sınır morfolojisi aşağıdaki patoloji seçeneklerinin hangisinde sırasıyla doğru olarak eşleştirilmiştir?
Doğru Şık (B): Pindborg tümörü — Anevrizmal kemik kisti
Açıklama: Pindborg tümörü (CEOT) amiloid benzeri materyalin distrofik kalsifikasyonu ile 'kum benzeri görünüm' üretirken; anevrizmal kemik kisti, çevre kemik dokuya yaptığı dalgalı lokal basınçlar nedeniyle periferinde 'taraklı görünüm' oluşturur. Gorlin kisti de kum benzeri olabilse de santral hemanjiom taraklı değil, tekerlek veya bal peteği yapar. Bu patognomonik ikili, lezyonların kalsifikasyon tipleri ile büyüme dinamiklerini mükemmel özetler.

**Soru 2 (ID: c2247c04-86d5-4f3d-9486-b16de4cc30d0)**
Soru Kökü: Lezyon çevresinde izlenen 'taraklı görünüm', bazı kist ve tümörlerin sınır karakteristiklerini tanımlamada kullanılır. Aşağıdaki patolojilerden hangisi radyografik olarak tipik taraklı görünüme sahip **değildir**?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler periferal kısıtlamalar altında 'armut şekilli' görünüm oluşturma eğilimindeyken, taraklı görünüm sergilemezler. Dentigeröz kist, travmatik kemik kisti, anevrizmal kemik kisti ve dev hücreli granülom ise radyografik sınırlarında tipik olarak 'taraklı görünüm' verir. Sınır morfolojisindeki bu farklılık, inflamatuar kaynaklı bir lezyon olan radiküler kisti diğer gelişimsel veya reaktif patolojilerden ayırır.

---

### ÇİFT 244 (Benzerlik: 0.70)

**Soru 1 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

**Soru 2 (ID: 87c2a96c-f6ae-4164-9132-711de9486ead)**
Soru Kökü: Bir lezyonun çenedeki genişlemesinin şekli klinik tanıda yol göstericidir. Lezyonun hidrolik basınca işaret eden 'şişirilmiş bir balona benzer, dairesel' formda kemiği ittiği radyografik görünüme (Balon benzeri görünüm) sahip olabilen iki ana patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti ve Folliküler kist
Açıklama: Balon benzeri (hidrolik dairesel) radyografik ekspansiyon sıvıyla dolu kavitelerin eşit yönde yaptığı hidrostatik basınca bağlıdır. Anevrizmal kemik kisti (içi kan dolu göllenmeler) ve foliküler kist (kistik epiteliyum içi sıvı dairesel genişler) Tablo 9'da spesifik olarak 'Balon benzeri görünüm' ile eşleştirilmiştir.

---

### ÇİFT 245 (Benzerlik: 0.70)

**Soru 1 (ID: b194719f-0957-477d-a10f-123898ac2173)**
Soru Kökü: Çenelerde radyolojik olarak izlenen bir lezyonun ilerleyen kenarında ve hemen arkasında kemik yıkımını temsil eden, çok az trabekül içeren veya hiç içermeyen geniş bir radyolusent alan 'invaziv sınır' olarak rapor edilmiştir. Bu sınır paternine sahip bir lezyonun histolojik davranışı hakkında aşağıdakilerden hangisi söylenebilir?
Doğru Şık (D): Genellikle hızlı gelişen malignite paterni gösterir.
Açıklama: İnvaziv sınır, osteoblastik tamir ve sınır oluşturma sürecinin, patolojinin saldırgan büyüme hızına yetişemediği yüksek gradeli malignitelerde görülür. Hidrolik büyüme kistlerde, reaktif kemik yapımı ise sklerozan iltihaplarda görülürken; invaziv sınır tümör hücrelerinin kemik ilik boşluklarına trabekülleri eriterek hızla infiltre olduğunun kesin göstergesidir.

**Soru 2 (ID: f57aadcc-09a9-4caf-9442-da4ae0020b63)**
Soru Kökü: Radyografide kalın, genişliği tek tip olmayan ve çevresindeki kemik reaksiyonunu uyaran radyoopak geçiş bölgesi formundaki 'sklerotik sınır'ın temel patofizyolojik anlamı, aşağıdakilerden hangisini yansıtmasıdır?
Doğru Şık (B): Lezyonun çevresindeki kemik üretimini uyarmaya yetecek çok yavaş bir büyüme hızı sergilediğini
Açıklama: Sklerotik sınır, lezyon etrafındaki osteoblastların kronik ve zayıf stimülasyona yanıt vererek uzun bir zaman zarfında anormal genişlikte ve kalınlıkta reaktif kemik örmesinin bir sonucudur, bu da lezyonun büyüme hızının oldukça yavaş olduğunu kanıtlar. Malignite veya agresif durumlar kemik yapımına değil hızla yıkıma neden olarak ince invaziv sınırlar oluştururlar. Bu reaktif kalınlaşma, periapikal osseöz displazilerde tipik olarak görülür.

---

### ÇİFT 246 (Benzerlik: 0.70)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

---

### ÇİFT 247 (Benzerlik: 0.70)

**Soru 1 (ID: 8d03871e-488a-4630-8c85-127daa78a946)**
Soru Kökü: Altmış beş yaşındaki erkek hastanın çene grafilerinde, normal trabeküler paternin yerini almış belirgin bir reaktif kemik üretimi saptanmıştır. Anamnezinde malinite hikayesi olan hastada gözlenen bu 'osteoblastik reaksiyon', en olası hangi primer odaklı metastazın sonucudur?
Doğru Şık (C): Prostat
Açıklama: Prostat ve meme dokusundan kaynaklanan metastatik lezyonlar, çene kemiklerinde yıkımdan (osteolitik) ziyade kemik yapımını tetikleyerek karakteristik bir 'osteoblastik reaksiyon' oluştururlar. Diğer birçok organ karsinomu (akciğer, mide, tiroid) çenelerde sınırları belirsiz invaziv (permeatif/güve yeniği) osteolitik radyolüsensiler meydana getirir.

**Soru 2 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

---

### ÇİFT 248 (Benzerlik: 0.70)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: a607dd1b-abc8-4389-8f09-0683a2c98c71)**
Soru Kökü: Tablo 9 radyolojik patognomonik lezyonlar analizi doğrultusunda, çenelerde diffüz trabeküler değişim sonucu görülen 'portakal kabuğu' (veya buzlu cam) radyografik paterni aşağıdaki lezyonlardan hangisinde izlenmez?
Doğru Şık (C): Lösemi
Açıklama: Portakal kabuğu veya buzlu cam görünümü; Fibröz displazi, Rickets, Hiperparatiroidizm ve Paget hastalığında anormal, kısa, yönelimsiz kemik trabeküllerinin yerleşmesiyle ortaya çıkar. Lösemide ise 'fırça görünümü' veya 'soğan kabuğu' periost reaksiyonu gibi bulgular ön plandadır; stroma kireçlenmesi yaşanmaz. Bu ince granüler radyopasiteler fibröz replasman göstergesidir.

---

### ÇİFT 249 (Benzerlik: 0.70)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

---

### ÇİFT 250 (Benzerlik: 0.70)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: 98ed6c10-c79f-4850-8524-8ca116e324fe)**
Soru Kökü: 30 yaşında erkek hasta maksiller orta hatta palatinal bölgede hafif bir şişlik fark ederek başvuruyor. Alınan oklüzal ve periapikal radyografide maksiller santral kesici dişlerin kökleri arasında, spina nasalis anterior'un süperpoze olmasıyla "kalp şekilli" (heart-shaped) radyolüsent bir görünüm izleniyor. Dişler pulpa testine vital yanıt veriyor. Bu bulgular ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İnsiziv kanal kisti
Açıklama: İnsiziv kanal kisti (nazopalatin kanal kisti), maksiller santral dişlerin orta hattında yerleşir ve anterior nasal spine'ın radyografik olarak lezyonun üzerine izdüşümü sebebiyle karakteristik kalp şeklini alır. Dişlerin vital olması radiküler kist seçeneğini eler. Globulomaksiller kist ise maksiller lateral ve kanin dişleri arasında armut şeklinde izlenir.

---

### ÇİFT 251 (Benzerlik: 0.70)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

---

### ÇİFT 252 (Benzerlik: 0.70)

**Soru 1 (ID: 0dde3e7c-c7e5-420b-b532-e693ebc766b7)**
Soru Kökü: Maksillofasiyal kompleksin konvansiyonel radyografik görüntülerinde, biyolojik materyallerin X-ışını tutulumlarına göre iç yapı dansiteleri radyolusentten (en koyu) radyoopağa (en açık) doğru spesifik bir sıra izler. Buna göre aşağıdakilerden hangisi radyasyon geçirgenliğinin **en az** (en yüksek radyoopasite) olduğu dokudur?
Doğru Şık (D): Kortikal kemik
Açıklama: Sıralama Hava -> Yağ -> Sıvı -> Yumuşak doku -> Kemik iliği -> Trabeküler kemik -> Kortikal kemik/Dentin -> Mine -> Metal şeklinde ilerler, bu nedenle seçenekler arasında kortikal kemik en yüksek radyoopasiteye (radyasyon geçirgenliğinin en az olduğu doku) sahiptir. Hava ve yağ fotonları durduramadığından tamamen radyolusent görünürken, kortikal kemiğin yüksek mineral yoğunluğu filmi beyaz bırakır. Mine ve metal şıklarda bulunmadığından doğru yanıt D'dir.

**Soru 2 (ID: dfa75e38-1210-4ad1-8dfc-3eaab36dcfa2)**
Soru Kökü: Bölgesel anatomik ve patolojik materyallerin radyografik dansiteleri karşılaştırıldığında, lezyon içeriğinin saptanması tanısal algoritmanın kritik bir adımıdır. En radyolusentten radyopağa doğru yapılan fiziksel sıralama kuralına göre, sıvı (eksüda, transüda veya kistik içerik) yapıların radyografik görünümü, aşağıdaki materyallerin hangisinden **daha radyopaktır**?
Doğru Şık (A): Hava ve yağ dokusu
Açıklama: Madde yoğunluklarına göre X-ışını geçirgenlik dizilimi temel fiziksel bir olgudur ve sıvılar (su içeriği), hava moleküllerinden veya lipid (yağ) dokusundan yapısal olarak daha yoğun oldukları için onlardan daha fazla foton tutarak göreceli olarak 'daha radyoopak' (daha az siyah) bir iz düşüm verirler. Kemik iliği veya yumuşak doku (çeldirici şıklar) ise hücresel yapıları gereği sudan daha yoğundur ve sıvıdan daha beyaz görünürler. Klinisyen radyolusent bir boşluk değerlendirirken havanın tam siyahlığı ile kist sıvısının hafif grimsi radyolusensisi arasındaki bu kontrast farkına dayanarak değerlendirme yapar.

---

### ÇİFT 253 (Benzerlik: 0.70)

**Soru 1 (ID: 545bd233-0643-407d-bafe-e795756c8058)**
Soru Kökü: Çene kemiklerinde izlenen bazı sekonder (metastatik) anomaliler, bulundukları alanda sadece litik kemik yıkımı yapmakla kalmaz, periferik osteoblastik reaksiyonu (yeni kemik yapımını) güçlü bir şekilde uyararak radyoopak (sklerotik) görünüme neden olabilirler. Aşağıdaki organların hangilerinden kaynaklanan metastatik lezyonların, çenelerde bu tip belirgin bir osteoblastik reaksiyon uyarması **en olasıdır**?
Doğru Şık (C): Prostat ve meme
Açıklama: Karsinom metastazlarının çoğu çenelerde osteoklastik aktivite ile radyolusent yıkım yaparken, prostat kanseri ve meme kanseri (özellikle tedavili) tümör hücrelerinden salınan faktörlerle yoğun osteoblastik proliferasyonu tetikleyerek sklerotik/radyoopak lezyonlar oluşturur. Tiroid, akciğer veya böbrek metastazları (çeldirici şıklar) kemikte kalsiyum birikimini uyarmaz, saf litik, güve yeniği tarzı radyolusensiler yaratır. Radyografide ileri yaşlı bir hastada generalize irregüler radyoopasiteler izlenirse, klinisyen mutlaka prostat veya meme metastazı öyküsünü sorgulamalıdır.

**Soru 2 (ID: d2318258-e757-4c91-8e48-3db6596c358d)**
Soru Kökü: 65 yaşında erkek hasta kliniğe rutin muayene amacıyla başvuruyor. Tıbbi anamnezinde ileri evre prostat karsinomu tedavisi gördüğü öğrenilen hastanın radyografisinde, çenelerde yer yer anomali sınırlarında periferal yeni kemik uyarım formasyonları saptanıyor. Bu lezyonların uyardığı reaksiyonun spesifik karakteristiği aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoblastik reaksiyon
Açıklama: Prostat ve meme karsinomlarının çenelere olan metastazları sıklıkla çevre kemikte osteoblastik reaksiyonu (yeni kemik yapımını) uyararak karakterize olurlar. Diğer birçok metastaz osteolitik bir yıkım tablosu çizerken, bu iki organdan gelen tümör hücreleri lokal kemik faktörlerini etkileyerek radyopasite artışlarına neden olur. Bu bulgu ayırıcı tanıda primer tümör kaynağını tahmin etmede esastır.

---

### ÇİFT 254 (Benzerlik: 0.70)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

---

### ÇİFT 255 (Benzerlik: 0.70)

**Soru 1 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

**Soru 2 (ID: dc66024c-1dac-4b2f-b671-18da583ac66a)**
Soru Kökü: Radyografik görüntüleme ilkeleri doğrultusunda, çenelerde "armut şekilli" (pear-shaped) radyolüsent bir görünüm veren patolojiler arasında aşağıdakilerden hangisi bulunur?
Doğru Şık (D): Radiküler kist
Açıklama: Tablo 9'a göre armut şekilli görünüme neden olan temel iki kist Globulomaksiller kist ve Radiküler kisttir. Radiküler kist özellikle premolar bölgede, kökün anatomisi etrafında bu formu alabilirken, nazopalatin kist kalp şeklinde, travmatik kemik kisti ise taraklı yapıda izlenir.

---

### ÇİFT 256 (Benzerlik: 0.70)

**Soru 1 (ID: 331464f4-2636-4697-bf20-22a974da6d7d)**
Soru Kökü: Panoramik radyografide saptanan ve 'soğan kabuğu' (onion-skin) olarak adlandırılan, lamelli periost reaksiyonu paterni, periosteumun ardışık eksüda/uyaran ataklarına yeni kemik tabakaları üreterek verdiği reaktif bir yanıttır. Aşağıdakilerden hangisinin radyografide bu paterni oluşturması **beklenmez**?
Doğru Şık (D): Periapikal semental displazi
Açıklama: Soğan kabuğu reaksiyonu; enflamatuar durumlarda (Garre osteomiyeliti), Langerhans hücreli histiyositozda, lösemide ve Ewing sarkomunda izlenen katmanlı periost yanıtıdır. Periapikal semental displazi ise kök uçlarında kortikal kalınlaşma veya sklerotik halo ile karakterize kemik içi reaktif bir süreçtir, dış periostta soğan kabuğu şeklinde lamelli apozisyon yapmaz.

**Soru 2 (ID: f3c9bd67-3826-48a7-82d2-02e0b652e216)**
Soru Kökü: İnflamatuar lezyonlar çevre kemikte büyüme paternlerine göre farklı reaksiyonlara yol açarlar. Radyografide bir dişin apeksinde izlenen periapikal rarefiye osteitis lezyonu, çevre kemikte tipik olarak hangi adaptif reaksiyonu uyarır?
Doğru Şık (C): Sklerotik kemik reaksiyonu
Açıklama: Periapikal rarefiye osteitis gibi düşük dereceli kronik inflamatuar lezyonlar, ev sahibi kemiği uyararak lezyonun periferinde kemik yapımına yani sklerotik kemik reaksiyonuna neden olur. Spikül oluşumu malignitelerde, zımba deliği ise miyelomda görülür. Bu reaksiyon lezyonun sınırlanma çabasının radyolojik göstergesidir.

---

### ÇİFT 257 (Benzerlik: 0.70)

**Soru 1 (ID: 2daf61fe-48e1-425a-a859-a31b9e1fcbab)**
Soru Kökü: Anevrizmal kemik kisti, mandibulada belirgin kortikal incelmeye neden olabilen ekspansif bir lezyondur. Bu lezyonun radyografisinde hidrolik genişlemeye bağlı olarak genel formunda hangi görünüm izlenebilirken, kemik içindeki endosteal sınırlarında hangi ilerleme paterni dikkati çeker?
Doğru Şık (B): Balon benzeri görünüm / Taraklı görünüm
Açıklama: Anevrizmal kemik kisti, kan göllenmeleri ve hemodinamik basınç (hidrolik etki) nedeniyle genel morfolojide 'balon benzeri' bir şişkinlik yaratırken; lezyonun kortikal ve endosteal sınırlara doğru girintili çıkıntılı ilerlemesi mikroskobik ölçekte 'taraklı görünüm' meydana getirir. Zımba deliği veya invaziv sınır, keskin yıkım yapan veya kanseröz lezyonlarda görülür, kistik genişlemelerde değil. Bu ikili görüntü, ebat arttıkça balonlaşan ama sınırlarda anatomik yapılara saygı duyarak taraklanan biyomekaniğin kanıtıdır.

**Soru 2 (ID: 3c8c2e63-7761-401f-afda-68798fae7194)**
Soru Kökü: Radyografik değerlendirmede bazı odontojenik keratokist ve basit kemik kistlerinde lezyonun sınırlarının pürüzsüz hidrolik bir balon formundan ziyade 'dalgalı ve taraklı' bir yapı sergilediği görülür. Bu 'taraklı çevre' morfolojisi, radyografide zaman zaman lezyonun aşağıdaki iç yapı özelliklerinden hangisiyle sahip olduğunu izlenimi verir?
Doğru Şık (C): Multiloküler
Açıklama: Dalgalı ve taraklı (scalloped) çevre yapısı, lezyonun kortikal kemik aralarından kök kök ilerlemesi sonucunda radyografide adeta birden çok odacıktan oluştuğu, yani multiloküler olduğu yanılsamasını yaratabilir. Buzlu cam ve pamuk atığı görünümleri sınır değil internal kalsifikasyon (trabekülasyon) paternleriyle ilgilidir. Bu nedenle gerçek internal septasyon ile periferik taraklanmanın ayırımı diagnozda kritik bir basamaktır.

---

### ÇİFT 258 (Benzerlik: 0.70)

**Soru 1 (ID: 2f403f4d-1341-4d4b-9039-f6babe181229)**
Soru Kökü: 62 yaşında sistemik rahatsızlığı bulunmayan erkek hasta, mandibular posterior dişlerindeki ileri derecede sallanma şikayetiyle başvuruyor. Radyografide dişlerin periapikal bölgesine kadar inen yaygın alveol kemiği kaybı ve dişlerin kemik desteksiz "yüzen diş" görünümü izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İleri periodontal hastalık
Açıklama: İleri periodontal hastalık, yavaş seyirli ancak şiddetli kret rezorpsiyonu ile dişleri tüm destek dokusundan yoksun bırakarak 'yüzen diş' görünümü oluşturur. Agresif periodontitis daha çok genç bireylerde lokalize alanlarda görülürken, Langerhans hücreli histiyositoz sıklıkla pediyatrik yaş grubunda izlenen litik lezyonlardır. İleri yaş ve yaygın yıkım hikayesi periodontal hastalıkla tam uyumludur.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 259 (Benzerlik: 0.70)

**Soru 1 (ID: 65d06590-7e1c-4a84-a11c-b9a8cd94a682)**
Soru Kökü: Dış kortikal sınırın korunarak incecik bir tabaka halinde lezyon etrafını sarması radyografide 'yumurta kabuğu' (eggshell) görünümü olarak ifade edilir. Bu bulgu, lezyonun periostu yıkacak kadar hızlı olmadığını ancak korteksi iterek inceltecek kadar baskı yaptığını gösterir. Tablo 9'a göre, yumurta kabuğu görünümü aşağıdaki patolojilerden hangisi için karakteristiktir?
Doğru Şık (A): Ameloblastoma
Açıklama: Ameloblastoma ve semento-ossifying fibroma, yavaş ekspansif büyüme karakterleri sayesinde kortikal plakanın yıkılmasını önleyip sadece incelmesini sağlar ve 'yumurta kabuğu' paternini oluşturur. Garre osteomiyeliti soğan kabuğu reaksiyonu yaparken, malign lenfoma güve yeniği tarzında sınırları silen bir yıkım yapar.

**Soru 2 (ID: d7ca7bae-94b6-4159-9749-2bc9370b2a54)**
Soru Kökü: Kemik içi lezyonların dış periferinde ince ve oldukça homojen yapıda, radyoopak ince bir reaktif kemik hattı saptanmıştır. Sınır tipolojisi 'kortikal kenar' olarak adlandırılan bu morfoloji, aşağıdaki lezyon gruplarının hangisinde izlenir?
Doğru Şık (E): Kistler ve yavaş büyüyen iyi huylu tümörler
Açıklama: Kortikal kenar, lezyonun büyüme hızının çevre kemiğin yeni kemik üreterek (osteoblastik aktivite ile) bu basıncı karşılamasına yetecek kadar yavaş olduğu durumlarda, yani kistler ve iyi huylu tümörlerde görülür. Hızlı gelişen maligniteler veya akut enfeksiyonlar osteoblastların sınır oluşturmasına izin vermeyecek hızda doku yıktıkları için invaziv sınırlar oluştururlar. Bu reaktif ince radyoopak hat lezyonun biyolojik davranışının benign olduğunu destekler.

---

### ÇİFT 260 (Benzerlik: 0.70)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 5fc99b65-b5ae-426d-9d56-1e8e3d219242)**
Soru Kökü: 16 yaşında erkek hasta, posterior mandibulada çok hızlı büyüyen, ağrılı, asimetrik şişlik ile acil servise başvuruyor. Panoramik radyografisinde tümörün dış kortikal tabakayı yırtıp periostu hızla yukarı kaldırdığı ve bu kaldırma noktasında üçgen şeklinde kesintili reaktif bir kemik birikimi oluştuğu izleniyor. İskelet sisteminde 'Codman üçgeni' olarak isimlendirilen bu kritik görünüm en sık hangi malignitede saptanır?
Doğru Şık (E): Osteosarkom
Açıklama: Hızlı ilerleyen osteosarkom lezyonu korteksi delerek periostu çevre dokuya doğru sıyırır; periostun kemiğe yapışık kaldığı taban köşesindeki reaktif yeni kemikleşme 'Codman üçgeni'ni meydana getirir. Karsinomlar genellikle güve yeniği tarzında lokal kortikal destrüksiyon yapar, bu tip spesifik periost reaksiyonunu uyarmaz. Codman üçgeni, hücrelerin subperiosteal boşlukta agresif yükselişinin kanıtıdır.

---

### ÇİFT 261 (Benzerlik: 0.70)

**Soru 1 (ID: 87c2a96c-f6ae-4164-9132-711de9486ead)**
Soru Kökü: Bir lezyonun çenedeki genişlemesinin şekli klinik tanıda yol göstericidir. Lezyonun hidrolik basınca işaret eden 'şişirilmiş bir balona benzer, dairesel' formda kemiği ittiği radyografik görünüme (Balon benzeri görünüm) sahip olabilen iki ana patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti ve Folliküler kist
Açıklama: Balon benzeri (hidrolik dairesel) radyografik ekspansiyon sıvıyla dolu kavitelerin eşit yönde yaptığı hidrostatik basınca bağlıdır. Anevrizmal kemik kisti (içi kan dolu göllenmeler) ve foliküler kist (kistik epiteliyum içi sıvı dairesel genişler) Tablo 9'da spesifik olarak 'Balon benzeri görünüm' ile eşleştirilmiştir.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 262 (Benzerlik: 0.70)

**Soru 1 (ID: a2a33fd7-2d25-465c-b50b-b38dec23750a)**
Soru Kökü: 17 yaşında erkek hasta çenesinde yavaş ilerleyen ağrısız bir genişleme ile başvuruyor. Radyografide iç yapısında kalsifiye bölmeler izlenmeyen ancak lezyon sınırlarının diş kökleri arasına doğru kavisler çizdiği "taraklı" (scalloped) görünüm saptanıyor. Aşağıdakilerden hangisi radyografik olarak bu tip taraklı/oyuklu sınır sergileyen lezyonlar arasında **yer almaz**?
Doğru Şık (E): Ossifying fibroma
Açıklama: Ossifying fibroma genellikle eş merkezli, keskin kortikal sınırlarla genişleyen ovoid bir tümördür ve dişlerin kökleri arasına doğru oyuklar yaparak taraklı bir büyüme paterninden ziyade, dişleri iten bir büyüme paterni gösterir. Travmatik (basit) kemik kisti ise karakteristik olarak diş kökleri arasında tepelere/kavislere sahip taraklı sınır çizer.

**Soru 2 (ID: fc0eaa52-239e-45a1-ae4f-9bf4ce8c06b4)**
Soru Kökü: Asemptomatik kırk beş yaşında Afrika kökenli bir kadın hastada, sağ mandibular molar bölgede radyolojik sınır genişliği bakımından tek tip olmayan, kalın ve geniş bir radyoopak reaktif geçiş bölgesi saptanmıştır. Bu perifer formu 'sklerotik sınır' olarak rapor edilmiştir. Bu sınır tipi, aşağıdaki lezyonlardan hangisinde primer olarak görülür?
Doğru Şık (B): Periapikal kemik displazisi
Açıklama: Sklerotik sınır, çok yavaş büyüme hızı ve lezyonun etrafındaki yoğun reaktif kemik uyarımı sonucu oluşan kalın, homojen olmayan radyoopak geçiş bölgesidir ve en tipik olarak periapikal kemik displazilerinde görülür. Keratokist ve ameloblastom genellikle ince ve düzenli kortikal sınırlar yaratırken, displazilerde kemiğin formasyon-rezorpsiyon dengesi bozulduğundan sklerotik bantlar kalındır. Sklerotik sınır patolojinin inflamatuar olmayan uzun süreli varlığına işaret eder.

---

### ÇİFT 263 (Benzerlik: 0.70)

**Soru 1 (ID: 2497ba30-f339-4039-a496-c69c8d4f20bd)**
Soru Kökü: Yirmi dört yaşındaki erkek hastada ramus mandibulada saptanan radyolüsent tümörün radyografik iç yapısında ince, düz, doğrusal kemik bölmelerine (septa) rastlanmıştır. Lezyonu multiloküler hale getiren ve 'tenis raketi' şeklinde bir ilmek bırakan bu matriks özellikleri en çok hangi lezyonla ilişkilidir?
Doğru Şık (C): Odontojenik miksoma
Açıklama: Odontojenik miksomada stroma o kadar gevşek ve mukoiddir ki, kalan zayıf kemik trabekülleri düz ve ince bir ağ (tenis raketi) oluşturur. Ameloblastomlar kalın ve kavisli septalara (sabun köpüğü); anevrizmal kistler ve dev hücreli granülomlar da nispeten kavisli daha kaba septalara sahiptir.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 264 (Benzerlik: 0.70)

**Soru 1 (ID: 782c5f2a-6b2a-4af9-a3d6-8d5a146e1750)**
Soru Kökü: Radyografik olarak merkez üssü değerlendirilen lezyonların köken aldığı dokular birbirinden farklıdır. Aşağıdaki lokalizasyon ve köken eşleşmelerinden hangisi **yanlıştır**?
Doğru Şık (B): İnferior alveolar kanalın altı - Odontojenik doku
Açıklama: Odontojenik dokular embriyolojik olarak maksilla ve mandibulanın alveolar kret bölgesinde yer alır, bu nedenle inferior alveolar kanalın altında (bazal kemikte) odontojenik lezyon gelişme olasılığı oldukça düşüktür. Vasküler ve nöral lezyonlar kanal içinden gelişirken, kıkırdak kaynaklı osteokondromlar doğrudan kondiler bölgede izlenir. Lezyonun merkezi kanalın altındaysa klinisyen odontojenik kist/tümör yerine non-odontojenik kemik patolojilerini (örn. metastaz, gelişimsel defekt) düşünmelidir.

**Soru 2 (ID: 8803305a-729d-4496-a3b8-df66006c17da)**
Soru Kökü: Merkez üssü mandibular kanal (IAC) bölgesinde lokalize bir patolojinin radyografik değerlendirmesinde, lezyonun diş kökleriyle ilişkisiz biçimde doğrudan IAC'nin **içinden** kaynaklandığı belirlenmiştir. Bu dokunun histolojik kökeninin aşağıdakilerden hangisi olması en kuvvetli olasılıktır?
Doğru Şık (C): Nöral veya vasküler yapılar
Açıklama: İnferior alveolar kanal içerisinde yer alan inferior alveolar sinir, arter ve ven dolayısıyla IAC içerisinden köken alan bir lezyonun nöral (nörom, nörofibrom, schwannom) veya vasküler (hemanjiyom) kökenli olması anatomik bir zorunluluktur. Odontojenik yapılar (ameloblastik kalıntılar, sementoblastlar) kanaldan bağımsız olarak daha koronal alveolar proçeste konumlanırlar. IAC kortikal sınırının bozulmadan genişlemesi de sıklıkla bu kanal içi iyi huylu vasküler/nöral patolojilere işaret eder.

---

### ÇİFT 265 (Benzerlik: 0.70)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 266 (Benzerlik: 0.70)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

---

### ÇİFT 267 (Benzerlik: 0.70)

**Soru 1 (ID: 2bfba921-dea3-4681-b558-912976f6dfb1)**
Soru Kökü: Yirmi sekiz yaşındaki hastada kavisli ve kalın kemik septalarının iç içe geçmesiyle oluşan, hidrolik büyüme paternli multiloküler bir yapı izlenmiştir. Radyolojik raporda 'sabun köpüğü' görünümü olarak tarif edilen bu lezyon paterni, aşağıdakilerden hangisine aittir?
Doğru Şık (A): Ameloblastom
Açıklama: Ameloblastomda oluşan iç septalar kavisli ve kalındır; bu da radyografide multiloküler 'sabun köpüğü' (soap bubble) paternini yaratır. Odontojenik miksomada ise septalar genellikle düz ve ince olup 'tenis raketi' manzarası oluşturur. Basit kemik kisti taraklı kenar yapar ancak gerçek iç septa oluşturmaz.

**Soru 2 (ID: 8598389e-d5b9-4638-8c01-5a13f217a861)**
Soru Kökü: Elli beş yaşındaki hastanın kafa tasında saptanan multipl radyolüsent kemik lezyonları, keskin bir sınıra sahip olup bitişik normal kemikte hiçbir reaksiyon veya skleroz üretmemiştir. Radyografide bir kağıt zımbasıyla delik açılmış gibi duran bu perifer yapısı, aşağıdaki patolojilerden hangisi için spesifik bir bulgudur?
Doğru Şık (B): Multipl miyelom
Açıklama: Zımba ile delinmiş (punched-out) kenar, kemiğin reaktif bir yanıt veremediği çok dar geçişli ve keskin sınırlı radyolüsensilerdir; bu patern multipl miyelomun klasik radyografik işaretidir. Periapikal kemik displazisi geniş sklerotik reaksiyon üretirken, odontomların çevresinde ince yumuşak doku kapsülü bulunur. Sklerozan osteitiste ise komşu kemikle kaynaşan belirsiz (blending) bir sınır vardır.

---

### ÇİFT 268 (Benzerlik: 0.70)

**Soru 1 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

**Soru 2 (ID: dc66024c-1dac-4b2f-b671-18da583ac66a)**
Soru Kökü: Radyografik görüntüleme ilkeleri doğrultusunda, çenelerde "armut şekilli" (pear-shaped) radyolüsent bir görünüm veren patolojiler arasında aşağıdakilerden hangisi bulunur?
Doğru Şık (D): Radiküler kist
Açıklama: Tablo 9'a göre armut şekilli görünüme neden olan temel iki kist Globulomaksiller kist ve Radiküler kisttir. Radiküler kist özellikle premolar bölgede, kökün anatomisi etrafında bu formu alabilirken, nazopalatin kist kalp şeklinde, travmatik kemik kisti ise taraklı yapıda izlenir.

---

### ÇİFT 269 (Benzerlik: 0.70)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: dc66024c-1dac-4b2f-b671-18da583ac66a)**
Soru Kökü: Radyografik görüntüleme ilkeleri doğrultusunda, çenelerde "armut şekilli" (pear-shaped) radyolüsent bir görünüm veren patolojiler arasında aşağıdakilerden hangisi bulunur?
Doğru Şık (D): Radiküler kist
Açıklama: Tablo 9'a göre armut şekilli görünüme neden olan temel iki kist Globulomaksiller kist ve Radiküler kisttir. Radiküler kist özellikle premolar bölgede, kökün anatomisi etrafında bu formu alabilirken, nazopalatin kist kalp şeklinde, travmatik kemik kisti ise taraklı yapıda izlenir.

---

### ÇİFT 270 (Benzerlik: 0.69)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

---

### ÇİFT 271 (Benzerlik: 0.69)

**Soru 1 (ID: 4fd15c57-4437-4dd3-b470-598407946621)**
Soru Kökü: On iki yaşında kız hastanın maksiller kanin dişi anteriorunda yerleşmiş radyolusent bir lezyon saptanmıştır. Radyografik incelemede lezyonun iç yapısında kemikli septaların oluşturduğu 'sabun köpüğü' paterni ve sınırlarında 'taraklı görünüm' dikkati çekmektedir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülomlar, genç hastalarda özellikle maksiller kaninlerin anteriorunda (merkez üssü) lokalize olma eğilimindedir. Bu lezyonlar radyografide ince kemik septalarının oluşturduğu 'sabun köpüğü' iç yapısı ve sınırlarında 'taraklı görünüm' ile karakterizedir. Odontojenik miksoma da multilocüler olabilir ancak anterior yerleşim tercihinden ziyade tenis raketi veya bal peteği manzarası ile ayırt edilir.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 272 (Benzerlik: 0.69)

**Soru 1 (ID: 98ed6c10-c79f-4850-8524-8ca116e324fe)**
Soru Kökü: 30 yaşında erkek hasta maksiller orta hatta palatinal bölgede hafif bir şişlik fark ederek başvuruyor. Alınan oklüzal ve periapikal radyografide maksiller santral kesici dişlerin kökleri arasında, spina nasalis anterior'un süperpoze olmasıyla "kalp şekilli" (heart-shaped) radyolüsent bir görünüm izleniyor. Dişler pulpa testine vital yanıt veriyor. Bu bulgular ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İnsiziv kanal kisti
Açıklama: İnsiziv kanal kisti (nazopalatin kanal kisti), maksiller santral dişlerin orta hattında yerleşir ve anterior nasal spine'ın radyografik olarak lezyonun üzerine izdüşümü sebebiyle karakteristik kalp şeklini alır. Dişlerin vital olması radiküler kist seçeneğini eler. Globulomaksiller kist ise maksiller lateral ve kanin dişleri arasında armut şeklinde izlenir.

**Soru 2 (ID: e6c31376-91c2-4b36-ac8a-6a72b2ca9fc4)**
Soru Kökü: Elli yaşında erkek hasta, son aylarda alt dudağında giderek artan uyuşukluk (anestezi) şikayetiyle kliniğe başvuruyor. Radyografik incelemede inferior alveolar kanalın üst korteksinde ciddi yıkım saptanıyor ve kanal anatomisi boyunca aşağıya doğru gelişen sınırları belirsiz irregüler bir genişleme izleniyor. Bu klinik ve spesifik radyografik bulgular birlikte değerlendirildiğinde aşağıdaki lezyon tiplerinden hangisi **en güçlü** ihtimaldir?
Doğru Şık (D): Malign neoplazm
Açıklama: Malign hücrelerin nörotropik yayılım veya osteoklastik yıkımla sinir kanalını (perineural invazyon) infiltre etmesi, kanal korteksinin düzensizce erimesine (destrüksiyon) ve kliniğe dudak parestezisi/uyuşukluğu (Vincent bulgusu) olarak yansımasına sebep olur. Basit kemik kisti veya dev hücreli lezyonlar (çeldirici şıklar) dişi ve kanalı iter ancak sinir kılıfını invaze etmediği için klinik anestezi tablosuna yol açmaz. Kanalın düzensiz genişlemesiyle birlikte görülen duyu kaybı, aksi ispatlanana kadar osteosarkom veya metastatik malign neoplazm şüphesi doğurur.

---

### ÇİFT 273 (Benzerlik: 0.69)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: 2540a758-abec-4a9c-8fe0-d39f21c2ff82)**
Soru Kökü: Bir çene lezyonunun iç yapısında (internal paternde) yer alan ve lezyonu en az iki veya daha fazla bölmeye ayıran uzun kemik iplikler/duvarlar bulunması, radyografik yorumlamada anatomik sınırların tespitini kolaylaştırır. Lezyon içinde oluşan bu septaların (bölmelerin) varlığını tanımlamak için aşağıdaki terimlerden hangisi kullanılır?
Doğru Şık (D): Multiloküler
Açıklama: Lezyon içindeki reaktif kemik trabeküllerinin kistik veya tümöral boşluğu bölmelere ayırması durumuna radyografik olarak multiloküler (çok odacıklı) patern denir; ameloblastom (sabun köpüğü) veya odontojenik miksoma (tenis raketi) bunun klasik örnekleridir. Buzlu cam veya atılmış pamuk (çeldirici şıklar) ise bir boşluğun septalarla bölünmesini değil, displastik kemiğin yoğunlaşma/mineralizasyon paternini tarif eder. İç yapı analizinde septaların görülmesi, klinisyeni derhal agresif karakterli odontojenik tümörler veya multinükleer dev hücreli lezyonlar skalasına yönlendirir.

---

### ÇİFT 274 (Benzerlik: 0.69)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: 379a58e0-2df6-4f67-b60c-2ea3fc9a058f)**
Soru Kökü: 12 yaşında erkek hasta, çenesine aldığı şiddetli darbeden birkaç hafta sonra mandibula korpusunda sert bir genişleme fark ederek kliniğe başvuruyor. Oklüzal radyografide mandibular korteksin dışında, kemik yüzeyine paralel ve tabaka tabaka ilerleyen "soğan kabuğu" manzarasına sahip yeni kemik yapımı saptanıyor. Travma öyküsü ile birlikte bu radyografik patern en çok hangi tanı ile uyumludur?
Doğru Şık (B): Ossifying subperiosteal hematom
Açıklama: Travma sonrası periost altında biriken kanama (hematom), zamanla organize olarak kemikleşir (ossifying subperiosteal hematom) ve bu süreç radyografide korteks üzerinde ardışık lamelli 'soğan kabuğu' reaksiyonu olarak izlenir. Osteosarkom travmadan bağımsız agresif bir seyir izler ve daha çok güneş ışını formasyonu verir.

---

### ÇİFT 275 (Benzerlik: 0.69)

**Soru 1 (ID: 7cd17923-61e3-41b3-a20a-e4fa964eb086)**
Soru Kökü: Odontojenik lezyonların iç yapı değerlendirmesinde, fibröz doku içerisinde mikroskobik kalsifikasyon odaklarının zamanla birleşmesi sonucu ortaya çıkan radyografik "kum benzeri" (sand-like) görünüm aşağıdaki patolojilerin hangisinde karakteristik **değildir**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma radyografik olarak tamamen litik, radyolüsent bir gelişim izler ve kemik kalsifikasyonu üretmez; çoklu kavitasyonlara yol açarak 'bal peteği' veya 'sabun köpüğü' deseni yapar. Pindborg tümörü (KEOT), Gorlin kisti ve Adenoameloblastoma (AOT) ise kalsifiye epitel ürünleri ürettikleri için içlerinde radyografik olarak 'kar yağdı' veya 'kum benzeri' ince kalsifikasyonlar barındırırlar.

**Soru 2 (ID: ba332fca-941d-4907-9023-9ed707216732)**
Soru Kökü: Kemik trabeküllerinin sayıca artmış, kısa ve strese yanıt vermeden rastgele yönlenmesi sonucu ortaya çıkan "buzlu cam" (ground glass) veya "portakal kabuğu" görünümü aşağıdaki patolojilerden hangisinde iç yapı bulgusu olarak **görülmez**?
Doğru Şık (E): Ameloblastoma
Açıklama: Ameloblastoma belirgin kemikli septaların lezyonu böldüğü çok gözlü 'sabun köpüğü' veya 'bal peteği' görünümüne neden olan benign bir tümördür. Florid semento-osseöz displazi, semento-ossifying fibroma, Paget hastalığı ve greft uygulamalarında ise ince trabeküllerin düzensiz organizasyonuna bağlı homojen bulanıklık olan buzlu cam manzarası izlenir.

---

### ÇİFT 276 (Benzerlik: 0.69)

**Soru 1 (ID: e2223538-6cbb-4714-b900-9c0ab4d5eff3)**
Soru Kökü: 45 yaşında siyah ırktan kadın hasta rutin muayeneye başvuruyor. Vital olan mandibular anterior dişlerin periapikal bölgesinde, kalın bir sklerotik sınırla çevrili ve iç yapısı "buzlu cam" karakterinde gelişen miks (radyolüsent-radyoopak) lezyonlar saptanıyor. Bu lezyonun en olası radyografik paterni ve tanısı aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (B): Buzlu cam - Periapikal semental displazi
Açıklama: Periapikal semental (kemik) displazi tipik olarak orta yaşlı, siyah ırktan kadınlarda, vital alt anterior dişlerin periapikalinde izlenir; olgunlaşma aşamasında internal bölgede trabeküller disorganize olarak buzlu cam formasyonuna yol açar. Paget genelde tüm çeneyi tutar, adenoameloblastoma kum benzeri görünüm verir. Vitalite ve lokalizasyon spesifik tanı için anahtar noktalardır.

**Soru 2 (ID: fc0eaa52-239e-45a1-ae4f-9bf4ce8c06b4)**
Soru Kökü: Asemptomatik kırk beş yaşında Afrika kökenli bir kadın hastada, sağ mandibular molar bölgede radyolojik sınır genişliği bakımından tek tip olmayan, kalın ve geniş bir radyoopak reaktif geçiş bölgesi saptanmıştır. Bu perifer formu 'sklerotik sınır' olarak rapor edilmiştir. Bu sınır tipi, aşağıdaki lezyonlardan hangisinde primer olarak görülür?
Doğru Şık (B): Periapikal kemik displazisi
Açıklama: Sklerotik sınır, çok yavaş büyüme hızı ve lezyonun etrafındaki yoğun reaktif kemik uyarımı sonucu oluşan kalın, homojen olmayan radyoopak geçiş bölgesidir ve en tipik olarak periapikal kemik displazilerinde görülür. Keratokist ve ameloblastom genellikle ince ve düzenli kortikal sınırlar yaratırken, displazilerde kemiğin formasyon-rezorpsiyon dengesi bozulduğundan sklerotik bantlar kalındır. Sklerotik sınır patolojinin inflamatuar olmayan uzun süreli varlığına işaret eder.

---

### ÇİFT 277 (Benzerlik: 0.69)

**Soru 1 (ID: 385def3b-0df9-4859-ba79-1f674c7f92a7)**
Soru Kökü: 65 yaşında erkek hasta sağ üst çenesinde hızla büyüyen sert bir kitle ile kliniğe başvuruyor. Panoramik radyografide alveolar kretten maksiller sinüse doğru uzanan, kemik yapısında sınırları belirsiz ve infiltratif özellik gösteren yaygın bir "permeatif yıkım" paterni izleniyor. Tablo 9'da sunulan klasik görünümler referans alındığında, bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Maksilla karsinomu
Açıklama: Maksilla karsinomu (Carcinoma of the maxilla), alveolar proçesten sinüs tabanına kadar kemik trabeküllerini agressif şekilde eriten invaziv bir tümördür ve radyografide kemiği sünger gibi yiyen permeatif yıkım manzarası gösterir. Malign lenfoma da permeatif yıkım yapabilse de, maksilla epitelyal dokusu kaynaklı hızlı agresyon klinik ve demografik olarak maksilla karsinomuna daha spesifiktir.

**Soru 2 (ID: d2318258-e757-4c91-8e48-3db6596c358d)**
Soru Kökü: 65 yaşında erkek hasta kliniğe rutin muayene amacıyla başvuruyor. Tıbbi anamnezinde ileri evre prostat karsinomu tedavisi gördüğü öğrenilen hastanın radyografisinde, çenelerde yer yer anomali sınırlarında periferal yeni kemik uyarım formasyonları saptanıyor. Bu lezyonların uyardığı reaksiyonun spesifik karakteristiği aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoblastik reaksiyon
Açıklama: Prostat ve meme karsinomlarının çenelere olan metastazları sıklıkla çevre kemikte osteoblastik reaksiyonu (yeni kemik yapımını) uyararak karakterize olurlar. Diğer birçok metastaz osteolitik bir yıkım tablosu çizerken, bu iki organdan gelen tümör hücreleri lokal kemik faktörlerini etkileyerek radyopasite artışlarına neden olur. Bu bulgu ayırıcı tanıda primer tümör kaynağını tahmin etmede esastır.

---

### ÇİFT 278 (Benzerlik: 0.69)

**Soru 1 (ID: 0884a556-1597-48fb-98d3-e23e40be0d72)**
Soru Kökü: On sekiz yaşında erkek hasta, çeneye aldığı darbe sonrası rutin kontrole gelmiştir. Radyografik incelemede mandibulada vital dişlerin kökleri arasına doğru uzanan, kortikal genişlemeye yol açmamış ve kenarlarında 'taraklı görünüm' sergileyen radyolusent bir alan izlenmiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (basit kemik kisti), genç hastalarda diş kökleri arasına doğru uzanan ve genellikle vital dişlerle karakterize 'taraklı görünüm' oluşturan psödokisttir. Dev hücreli granülom da taraklı görünüm verebilir ancak tipik olarak iç yapısında sabun köpüğü septasyonları barındırır ve sıklıkla ekspansiftir. Radyolusent alanın diş köklerini itmeden etrafını sarması (taraklanması), travmatik kemik kistinin en belirgin radyografik işaretidir.

**Soru 2 (ID: 98ed6c10-c79f-4850-8524-8ca116e324fe)**
Soru Kökü: 30 yaşında erkek hasta maksiller orta hatta palatinal bölgede hafif bir şişlik fark ederek başvuruyor. Alınan oklüzal ve periapikal radyografide maksiller santral kesici dişlerin kökleri arasında, spina nasalis anterior'un süperpoze olmasıyla "kalp şekilli" (heart-shaped) radyolüsent bir görünüm izleniyor. Dişler pulpa testine vital yanıt veriyor. Bu bulgular ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): İnsiziv kanal kisti
Açıklama: İnsiziv kanal kisti (nazopalatin kanal kisti), maksiller santral dişlerin orta hattında yerleşir ve anterior nasal spine'ın radyografik olarak lezyonun üzerine izdüşümü sebebiyle karakteristik kalp şeklini alır. Dişlerin vital olması radiküler kist seçeneğini eler. Globulomaksiller kist ise maksiller lateral ve kanin dişleri arasında armut şeklinde izlenir.

---

### ÇİFT 279 (Benzerlik: 0.69)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: 8223bdf8-700a-4012-9de1-d91132240a7d)**
Soru Kökü: Mandibular posterior bölgedeki patolojiler komşu nörovasküler yapılar üzerinde spesifik baskılar yaratır. Panoramik radyografide mandibular kanalın (IAC) karakteristik olarak üst kısıma (süperiora) doğru itilip yer değiştirdiği saptanmıştır. Bu spesifik anatomik itilme ile en güçlü ilişkiye sahip patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Fibröz displazi
Açıklama: Fibröz displazi çene kemiğinin diffüz şekilde büyüdüğü bir displazidir ve mandibula inferior korteksinden başlayarak yukarıya doğru kütlesel bir gelişme gösterdiğinde inferior alveolar kanalı (IAC) tümüyle süperiora (yukarıya) doğru iter. Bu karakteristik kanal deplasmanı fibröz displazinin teşhisinde anahtar bir radyografik işarettir.

---

### ÇİFT 280 (Benzerlik: 0.69)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: e3d5e2e3-c5e0-4b53-8e16-588455fa46a9)**
Soru Kökü: Otuz beş yaşındaki hastanın radyografisinde alveolar kemiğin marjinal olarak korunduğu, ancak dişlerin kökleri etrafındaki kemiğin tamamen eridiği ve dişlerin boşlukta 'yüzen diş' (floating teeth) görünümü aldığı saptanmıştır. Aşağıdakilerden hangisi bu duruma yol açan agresif patolojiler arasında **yer almaz**?
Doğru Şık (C): Sjögren sendromu
Açıklama: Sjögren sendromu, tükrük bezlerini etkileyen bir otoimmün hastalık olup siyalografide 'kiraz çiçeği' görünümü yapar, ancak alveolar kemikte yüzen diş tablosuna sebep olmaz. Yüzen diş tablosu, diş destek kemiğinin agresif bir şekilde lokal olarak yok edildiği Langerhans hücreli histiyositoz, malign tümörler veya şiddetli/agresif periodontitiste (Papillon-Lefevre dahil) izlenir.

---

### ÇİFT 281 (Benzerlik: 0.69)

**Soru 1 (ID: d7ca7bae-94b6-4159-9749-2bc9370b2a54)**
Soru Kökü: Kemik içi lezyonların dış periferinde ince ve oldukça homojen yapıda, radyoopak ince bir reaktif kemik hattı saptanmıştır. Sınır tipolojisi 'kortikal kenar' olarak adlandırılan bu morfoloji, aşağıdaki lezyon gruplarının hangisinde izlenir?
Doğru Şık (E): Kistler ve yavaş büyüyen iyi huylu tümörler
Açıklama: Kortikal kenar, lezyonun büyüme hızının çevre kemiğin yeni kemik üreterek (osteoblastik aktivite ile) bu basıncı karşılamasına yetecek kadar yavaş olduğu durumlarda, yani kistler ve iyi huylu tümörlerde görülür. Hızlı gelişen maligniteler veya akut enfeksiyonlar osteoblastların sınır oluşturmasına izin vermeyecek hızda doku yıktıkları için invaziv sınırlar oluştururlar. Bu reaktif ince radyoopak hat lezyonun biyolojik davranışının benign olduğunu destekler.

**Soru 2 (ID: e6a8d847-0db6-4d1e-a15e-c0db667917b4)**
Soru Kökü: Perifer analizinde, lezyonun sınırlarının çevre normal kemik dokusundan kolaylıkla ayırt edilebildiği bir durum söz konusudur. Radyografik incelemede periferinin büyük bir çoğunluğu (genellikle %50'den fazlası) net ve belirgin şekilde izlenebilen lezyonlar için kullanılan standart terminoloji aşağıdakilerden hangisidir?
Doğru Şık (A): İyi sınırlı lezyon
Açıklama: Periferinin çoğunun (nerede başlayıp nerede bittiğinin) net şekilde görülebildiği patolojiler genel bir terim olarak 'iyi sınırlı lezyon' olarak adlandırılır. Kaynaşmış veya invaziv sınırlar belirsiz geçiş bölgeleri gösterirken, iyi sınırlı lezyonlar yavaş büyüme karakteristiklerinden ötürü komşu dokuyu iterek bu net hattı oluştururlar. Sklerotik sınır ise iyi sınırlı olmanın spesifik bir alt tipidir, genel tanımlama yerine geçmez.

---

### ÇİFT 282 (Benzerlik: 0.69)

**Soru 1 (ID: 32f61a24-c224-4584-90e4-55ffb83d503a)**
Soru Kökü: Odontom ve sementoblastom gibi benign ve yavaş büyüyen lezyonlarda, dışarıdaki reaktif kemik korteksi ile asıl radyoopak kitle arasında ince radyolüsent bir bant izlenir. Radyografide görülen bu radyolüsent sınırın histolojik karşılığı aşağıdakilerden hangisidir?
Doğru Şık (D): Yumuşak doku kapsülü
Açıklama: Belirgin radyoopak yapıya sahip odontom ve sementoblastomlar, etraflarında onları kemikten ayıran radyolüsent bir 'yumuşak doku kapsülü' barındırır. Bu kapsül dışarıda kortikal bir periferle çevrelenmiştir, bu sayede lezyon kemiğe ankiloz olmaz. Hiperplastik folikül dentigeröz kistlerde görülürken, kistik sıvı kolonu gerçek epiteliyal kistlerin lümen yapısıdır.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 283 (Benzerlik: 0.69)

**Soru 1 (ID: 05a5d6c7-43b0-4b19-9c87-bb74eb1d4a8b)**
Soru Kökü: Sekiz yaşında erkek çocuk hasta, alt çenesinde her iki tarafta giderek artan ağrısız şişlik şikayetiyle başvuruyor. Alınan panoramik radyografide her iki mandibular angulus ve ramus bölgesinde genişlemeye neden olan multiloküler radyolusent alanlar izleniyor. Çenelerde her zaman bilateral yerleşim gösterdiği bilinen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Cherubism
Açıklama: Çenelerdeki lezyonların bölgesel veya genel yerleşimli olması tanıda kritik bir filtredir ve cherubism mandibula ile maksillada her zaman bilateral ekspansiyonlarla karakterize genetik bir hastalıktır. Sıklıkla angulus bölgesinde görülen ameloblastom veya miksoma gibi odontojenik tümörler ise tipik olarak tek taraflı (unilateral) büyüme eğilimindedir. Radyografide bilateral simetrik multiloküler yıkım gören bir klinisyen yaş faktörüyle birlikte doğrudan cherubism tanısına yönelmelidir.

**Soru 2 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

---

### ÇİFT 284 (Benzerlik: 0.69)

**Soru 1 (ID: 7cd17923-61e3-41b3-a20a-e4fa964eb086)**
Soru Kökü: Odontojenik lezyonların iç yapı değerlendirmesinde, fibröz doku içerisinde mikroskobik kalsifikasyon odaklarının zamanla birleşmesi sonucu ortaya çıkan radyografik "kum benzeri" (sand-like) görünüm aşağıdaki patolojilerin hangisinde karakteristik **değildir**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma radyografik olarak tamamen litik, radyolüsent bir gelişim izler ve kemik kalsifikasyonu üretmez; çoklu kavitasyonlara yol açarak 'bal peteği' veya 'sabun köpüğü' deseni yapar. Pindborg tümörü (KEOT), Gorlin kisti ve Adenoameloblastoma (AOT) ise kalsifiye epitel ürünleri ürettikleri için içlerinde radyografik olarak 'kar yağdı' veya 'kum benzeri' ince kalsifikasyonlar barındırırlar.

**Soru 2 (ID: f7b4651c-bfc4-4d55-b098-2925213699be)**
Soru Kökü: Hangi lezyonlar radyografide distrofik veya neoplastik kalsifikasyonlara bağlı olarak 'kum benzeri görünüm' sergileyebilir?

I. Pindborg tümörü
II. Gorlin kisti
III. Adenoameloblastoma
IV. Anevrizmal kemik kisti
Doğru Şık (C): I, II ve III
Açıklama: Kum benzeri görünüm, kalsifiye epitel veya dentinoid doku odaklarının dağınık ve küçük partiküller halinde birikmesiyle oluşur; bu durum Pindborg, Gorlin ve Adenoameloblastoma tümörlerinde ortaktır. Anevrizmal kemik kistinde kalsifikasyon yerine sıvı dolu kanalların etrafındaki septalar 'sabun köpüğü' veya 'taraklı' paternler yaratır. Bu kalsifikasyon paterni, epitel-mezankim etkileşimli tümörleri vasküler veya reaktif kistlerden net olarak ayırır.

---

### ÇİFT 285 (Benzerlik: 0.69)

**Soru 1 (ID: 0bda2e76-207f-47f7-b387-3bac15c56dfd)**
Soru Kökü: Radyografik iç yapı değerlendirmesinde septaların lezyonu kompartımanlara ayırdığı, sık ve kavisli kemik bölmelerin "bal peteği" (honeycomb) görünümü yarattığı çok gözlü paternler saptanmaktadır. Aşağıdakilerden hangisi çenelerde bal peteği görünümü oluşturan tümörlerden biri **değildir**?
Doğru Şık (E): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi çenelerin çoklu kadranlarında gelişen semento-osseöz kitlesel opasitelerdir ve buzlu cam veya atılmış pamuk görünümü verir, septa ve kompartıman oluşturmaz. Santral mukoepidermoid karsinom, odontojenik miksoma ve hemanjiyom ise tümör dokusunun kemik içi organizasyonuna reaktif oluşan septalarla multilocüler 'bal peteği' görünümü sunar.

**Soru 2 (ID: 7cd17923-61e3-41b3-a20a-e4fa964eb086)**
Soru Kökü: Odontojenik lezyonların iç yapı değerlendirmesinde, fibröz doku içerisinde mikroskobik kalsifikasyon odaklarının zamanla birleşmesi sonucu ortaya çıkan radyografik "kum benzeri" (sand-like) görünüm aşağıdaki patolojilerin hangisinde karakteristik **değildir**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma radyografik olarak tamamen litik, radyolüsent bir gelişim izler ve kemik kalsifikasyonu üretmez; çoklu kavitasyonlara yol açarak 'bal peteği' veya 'sabun köpüğü' deseni yapar. Pindborg tümörü (KEOT), Gorlin kisti ve Adenoameloblastoma (AOT) ise kalsifiye epitel ürünleri ürettikleri için içlerinde radyografik olarak 'kar yağdı' veya 'kum benzeri' ince kalsifikasyonlar barındırırlar.

---

### ÇİFT 286 (Benzerlik: 0.69)

**Soru 1 (ID: 2222ff46-6a0e-4dac-9981-5eba6c8aefb6)**
Soru Kökü: 22 yaşında kadın hasta, alt çenede belirginleşen şişlik ve posterior dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide, mandibula gövdesinde sınırları belirgin olan ve içinden ışınsal tarzda kalın kemik trabeküllerinin uzandığı "at arabası tekerliği" görünümüne sahip bir lezyon saptanıyor. Bu klinik ve radyografik tabloya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiyom
Açıklama: Santral hemanjiyom, çene kemiklerinde damar yumağının oluşturduğu basınçla şekillenen, ışınsal trabekülasyonlarla karakterize 'at arabası tekerliği' (spoke-wheel) görünümüyle tanınır. Ameloblastoma sabun köpüğü veya bal peteği görünümü verirken, odontojenik miksoma tenis raketi manzarasıyla bu lezyondan ayrılır. Lezyon içi septasyon paterni doğru teşhiste kilit rol oynar.

**Soru 2 (ID: f21e370c-cbd2-47c3-8513-b46e1761e328)**
Soru Kökü: Altmış yaşında, ağır sigara içicisi olan hastanın sağ mandibuladan alınan radyografisinde belirgin invaziv sınırlar ve permeatif 'güve yeniği' kemik yıkımı izlenmiştir. Klinik incelemede dişetinde ve dişte mobilite mevcuttur. Aşağıdaki teşhislerden hangisi bu radyografik sunumun olası nedenleri arasında **yer almaz**?
Doğru Şık (D): Ameloblastom
Açıklama: Güve yeniği (moth-eaten) ve permeatif yıkım paterni; kemiğe hızla invaze olan yassı hücreli karsinom, malign lenfoma, multipl miyelom gibi malignitelerin veya kronik osteomiyelit gibi agresif enfeksiyonların klasik belirtisidir. Ameloblastom ise lokal agresif olmasına rağmen yavaş büyür, kemikte kortikal itilme, yumurta kabuğu veya belirgin sklerotik cidarlı multiloküler sabun köpüğü oluşturur, düzensiz permeatif erime (güve yeniği) yapmaz.

---

### ÇİFT 287 (Benzerlik: 0.69)

**Soru 1 (ID: e1fe33f0-625b-41c5-bfd5-c3933cfacc03)**
Soru Kökü: Sekiz yaşında erkek çocuk hastanın çenesinde hızla büyüyen ağrısız bir şişlik şikayetiyle başvurmuştur. Alınan radyografide diş köklerinde ani ve keskin bir rezorpsiyona sekonder 'çivi kökler' görünümü izlenmiştir. Gelişim hızı ve radyografik patern göz önüne alındığında akla ilk gelmesi gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Burkitt tümörü
Açıklama: Burkitt tümörü, çenelerde aşırı hızlı büyüme ve destrüksiyon ile diş köklerinde kama şeklinde veya düzensiz rezorpsiyon yaratarak 'çivi kökler' manzarası veren agresif bir lenfomadır. Ameloblastoma kök rezorpsiyonu yapabilse de bu genellikle düz bir hizada (bıçak sırtı) gerçekleşir ve çivi benzeri sivrilme beklenmez. Yaş, hız ve çivi kök bulgusu klinik senaryoda doğrudan Burkitt tümörünü işaret etmektedir.

**Soru 2 (ID: fb947783-f0e7-448b-b680-159eb16c6e80)**
Soru Kökü: 7 yaşında kız hasta, posterior dişlerinde açıklanamayan mobilite şikayetiyle başvuruyor. Alınan radyografide kemik desteğini tamamen kaybetmiş dişlere ek olarak, çevredeki dış kortikal plakta inflamatuar olmayan tümöral uyarılıma bağlı spesifik bir lamelli 'soğan kabuğu' periost reaksiyonu saptanıyor. Diş kayıplarıyla bilinen bu hastalıkta izlenen radyografik tablo en güçlü şekilde aşağıdakilerden hangisine işaret eder?
Doğru Şık (A): Langerhans hücreli histiyozis
Açıklama: Langerhans hücreli histiyozis, pediyatrik hastalarda alveolar kemiğin agresif yıkımına bağlı 'yüzen diş' görünümü ve buna eşlik eden nadir tümöral soğan kabuğu periost reaksiyonu ile karakterizedir. Ameloblastom ve miksoma yavaş büyüyen iç yapı genişlemeleri yaparken, hiperparatiroidizm tuz biber manzarası yaratır. Bu senaryo hücresel infiltrasyonun periostal reaksiyon yaratma gücüne örnektir.

---

### ÇİFT 288 (Benzerlik: 0.69)

**Soru 1 (ID: 8ced98a5-1dbe-42b8-a050-175ce27ba8bc)**
Soru Kökü: 28 yaşında kadın hasta, üst sağ bölgesinde ağrısız bir şişlik fark ediyor. Periapikal radyografide, maksiller sağ lateral kesici ve kanin dişlerin köklerini birbirinden ayırarak superiora doğru genişleyen, inferiora (alveol kretine) doğru daralan karakteristik "armut şekilli" (pear-shaped) radyolüsent lezyon saptanıyor. Dişler vital olduğuna göre, en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Globulomaksiller kist
Açıklama: Globulomaksiller kist, adını yerleşim yerinden alan ve anatomik olarak her zaman maksiller lateral ve kanin dişleri arasına yerleşerek onları diverjan hale getiren ters dönmüş 'armut' formunda bir gelişimsel/fissüral kisttir. Dişlerin vital olması kökeninin pulpa enfeksiyonu (radiküler kist) olmadığını kesinleştirir.

**Soru 2 (ID: cf10d7f0-7096-41bf-a6ab-21583184e20b)**
Soru Kökü: Yirmi iki yaşında erkek hastanın rutin radyografik muayenesinde gömülü sol alt 20 yaş dişinin (38) koronal kısmını çevreleyen düzgün sınırlı bir radyolusent alan saptanıyor. Bu lezyonun ayırıcı tanısında, dentigeröz kist ile hiperplastik folikülü birbirinden ayırmak için radyografik olarak **en belirleyici** faktör aşağıdakilerden hangisidir?
Doğru Şık (E): Lezyonun koronal bölgedeki boyutu
Açıklama: Hem dentigeröz kist hem de hiperplastik dental folikül koronal merkez üslüdür ve radyografide dişi çevreleyen iyi sınırlı radyolusensi şeklinde görülür; ancak kistler hidrolik büyüme potansiyeline sahip oldukları için foliküle kıyasla belirgin şekilde daha büyük boyutlara ulaşırlar. Kök rezorpsiyonu veya kortikal sınırın derecesi bu iki antiteyi net olarak ayıramaz, zira her ikisi de genişleyen iyi huylu yapı formundadır. Pratik radyolojik yorumlamada foliküler boşluğun 3-4 mm'yi aşan boyutu, kist oluşumu lehine spesifik bir tanısal kriter kabul edilir.

---

### ÇİFT 289 (Benzerlik: 0.69)

**Soru 1 (ID: 7907722e-52ce-439d-a04b-4719e6b135e7)**
Soru Kökü: 'Kum benzeri görünüm' ile karakterize olan bir tümöral kalsifikasyon ile 'taraklı görünüm' sergileyebilen bir sınır morfolojisi aşağıdaki patoloji seçeneklerinin hangisinde sırasıyla doğru olarak eşleştirilmiştir?
Doğru Şık (B): Pindborg tümörü — Anevrizmal kemik kisti
Açıklama: Pindborg tümörü (CEOT) amiloid benzeri materyalin distrofik kalsifikasyonu ile 'kum benzeri görünüm' üretirken; anevrizmal kemik kisti, çevre kemik dokuya yaptığı dalgalı lokal basınçlar nedeniyle periferinde 'taraklı görünüm' oluşturur. Gorlin kisti de kum benzeri olabilse de santral hemanjiom taraklı değil, tekerlek veya bal peteği yapar. Bu patognomonik ikili, lezyonların kalsifikasyon tipleri ile büyüme dinamiklerini mükemmel özetler.

**Soru 2 (ID: e9d816b9-96d7-4ed6-bb0c-a434a49736d5)**
Soru Kökü: Radyografik paternlerin çeşitliliği göz önüne alındığında, bir lezyon birden fazla farklı iç yapı veya sınır formasyonunda karşımıza çıkabilir. Kaynaklara göre radyografisinde 'balon benzeri görünüm', 'taraklı görünüm' ve 'sabun köpüğü görünümü' formlarının üçünü birden verebilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, agresif vasküler hemodinamiği nedeniyle sınırlarında 'taraklı görünüm', formunda 'balon benzeri' genişleme ve iç yapısında 'sabun köpüğü' paterni oluşturabilen çok yönlü bir patolojidir. Santral hemanjiom sabun köpüğü ve bal peteği yapabilse de balon veya taraklı görünümleri tipik özellikleri arasında listelenmez. Farklı evrelerdeki bu varyasyonlar, lezyonun kemik içindeki yıkıcı ve ekspansif büyüme dinamiğini yansıtır.

---

### ÇİFT 290 (Benzerlik: 0.69)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: 2bfba921-dea3-4681-b558-912976f6dfb1)**
Soru Kökü: Yirmi sekiz yaşındaki hastada kavisli ve kalın kemik septalarının iç içe geçmesiyle oluşan, hidrolik büyüme paternli multiloküler bir yapı izlenmiştir. Radyolojik raporda 'sabun köpüğü' görünümü olarak tarif edilen bu lezyon paterni, aşağıdakilerden hangisine aittir?
Doğru Şık (A): Ameloblastom
Açıklama: Ameloblastomda oluşan iç septalar kavisli ve kalındır; bu da radyografide multiloküler 'sabun köpüğü' (soap bubble) paternini yaratır. Odontojenik miksomada ise septalar genellikle düz ve ince olup 'tenis raketi' manzarası oluşturur. Basit kemik kisti taraklı kenar yapar ancak gerçek iç septa oluşturmaz.

---

### ÇİFT 291 (Benzerlik: 0.69)

**Soru 1 (ID: 7cd17923-61e3-41b3-a20a-e4fa964eb086)**
Soru Kökü: Odontojenik lezyonların iç yapı değerlendirmesinde, fibröz doku içerisinde mikroskobik kalsifikasyon odaklarının zamanla birleşmesi sonucu ortaya çıkan radyografik "kum benzeri" (sand-like) görünüm aşağıdaki patolojilerin hangisinde karakteristik **değildir**?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma radyografik olarak tamamen litik, radyolüsent bir gelişim izler ve kemik kalsifikasyonu üretmez; çoklu kavitasyonlara yol açarak 'bal peteği' veya 'sabun köpüğü' deseni yapar. Pindborg tümörü (KEOT), Gorlin kisti ve Adenoameloblastoma (AOT) ise kalsifiye epitel ürünleri ürettikleri için içlerinde radyografik olarak 'kar yağdı' veya 'kum benzeri' ince kalsifikasyonlar barındırırlar.

**Soru 2 (ID: e4d31efd-cec0-4138-b0e7-0a32b7b1165a)**
Soru Kökü: Pindborg tümörü, karakteristik kalsifikasyon paternleriyle tanınan epitel kökenli bir patolojidir. Bu tümörün radyografik iç yapısında aşağıdaki görünümlerden hangileri izlenebilir?

I. Kum benzeri görünüm
II. Kar yağdı manzarası
III. Bal peteği görünümü
Doğru Şık (C): I ve II
Açıklama: Pindborg tümörü (kalsifiye epitelyal odontojenik tümör), kalsifiye kütlelerin boyut ve dağılımına bağlı olarak hem 'kar yağdı manzarası' hem de 'kum benzeri görünüm' oluşturabilir. Bal peteği görünümü ise bu lezyonda izlenmez; daha çok ameloblastoma veya odontojenik miksoma gibi multilocüler lezyonların özelliğidir. Bu iki farklı kalsifikasyon paterninin aynı lezyonda raporlanması, Pindborg tümörünün radyografik spektrumunun genişliğini yansıtır.

---

### ÇİFT 292 (Benzerlik: 0.69)

**Soru 1 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

**Soru 2 (ID: e2223538-6cbb-4714-b900-9c0ab4d5eff3)**
Soru Kökü: 45 yaşında siyah ırktan kadın hasta rutin muayeneye başvuruyor. Vital olan mandibular anterior dişlerin periapikal bölgesinde, kalın bir sklerotik sınırla çevrili ve iç yapısı "buzlu cam" karakterinde gelişen miks (radyolüsent-radyoopak) lezyonlar saptanıyor. Bu lezyonun en olası radyografik paterni ve tanısı aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (B): Buzlu cam - Periapikal semental displazi
Açıklama: Periapikal semental (kemik) displazi tipik olarak orta yaşlı, siyah ırktan kadınlarda, vital alt anterior dişlerin periapikalinde izlenir; olgunlaşma aşamasında internal bölgede trabeküller disorganize olarak buzlu cam formasyonuna yol açar. Paget genelde tüm çeneyi tutar, adenoameloblastoma kum benzeri görünüm verir. Vitalite ve lokalizasyon spesifik tanı için anahtar noktalardır.

---

### ÇİFT 293 (Benzerlik: 0.69)

**Soru 1 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

**Soru 2 (ID: fc0eaa52-239e-45a1-ae4f-9bf4ce8c06b4)**
Soru Kökü: Asemptomatik kırk beş yaşında Afrika kökenli bir kadın hastada, sağ mandibular molar bölgede radyolojik sınır genişliği bakımından tek tip olmayan, kalın ve geniş bir radyoopak reaktif geçiş bölgesi saptanmıştır. Bu perifer formu 'sklerotik sınır' olarak rapor edilmiştir. Bu sınır tipi, aşağıdaki lezyonlardan hangisinde primer olarak görülür?
Doğru Şık (B): Periapikal kemik displazisi
Açıklama: Sklerotik sınır, çok yavaş büyüme hızı ve lezyonun etrafındaki yoğun reaktif kemik uyarımı sonucu oluşan kalın, homojen olmayan radyoopak geçiş bölgesidir ve en tipik olarak periapikal kemik displazilerinde görülür. Keratokist ve ameloblastom genellikle ince ve düzenli kortikal sınırlar yaratırken, displazilerde kemiğin formasyon-rezorpsiyon dengesi bozulduğundan sklerotik bantlar kalındır. Sklerotik sınır patolojinin inflamatuar olmayan uzun süreli varlığına işaret eder.

---

### ÇİFT 294 (Benzerlik: 0.69)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 295 (Benzerlik: 0.69)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: e6c31376-91c2-4b36-ac8a-6a72b2ca9fc4)**
Soru Kökü: Elli yaşında erkek hasta, son aylarda alt dudağında giderek artan uyuşukluk (anestezi) şikayetiyle kliniğe başvuruyor. Radyografik incelemede inferior alveolar kanalın üst korteksinde ciddi yıkım saptanıyor ve kanal anatomisi boyunca aşağıya doğru gelişen sınırları belirsiz irregüler bir genişleme izleniyor. Bu klinik ve spesifik radyografik bulgular birlikte değerlendirildiğinde aşağıdaki lezyon tiplerinden hangisi **en güçlü** ihtimaldir?
Doğru Şık (D): Malign neoplazm
Açıklama: Malign hücrelerin nörotropik yayılım veya osteoklastik yıkımla sinir kanalını (perineural invazyon) infiltre etmesi, kanal korteksinin düzensizce erimesine (destrüksiyon) ve kliniğe dudak parestezisi/uyuşukluğu (Vincent bulgusu) olarak yansımasına sebep olur. Basit kemik kisti veya dev hücreli lezyonlar (çeldirici şıklar) dişi ve kanalı iter ancak sinir kılıfını invaze etmediği için klinik anestezi tablosuna yol açmaz. Kanalın düzensiz genişlemesiyle birlikte görülen duyu kaybı, aksi ispatlanana kadar osteosarkom veya metastatik malign neoplazm şüphesi doğurur.

---

### ÇİFT 296 (Benzerlik: 0.69)

**Soru 1 (ID: 69fa0a5e-b8ae-41f5-8e33-722309240970)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ alt birinci büyük azı diş bölgesinde künt bir ağrı şikayetiyle başvuruyor. Radyografik incelemede ilgili dişin distal köküne kaynaşmış, etrafı radyolusent bir hat (yumuşak doku kapsülü) ile çevrili ve en dışta kortikal reaktif sınır barındıran radyoopak bir kitle izleniyor. Bu radyografik bulgular ışığında köke kaynaşan bu lezyonun **en olası** tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoblastom
Açıklama: Sementoblastom, doğrudan dişin köküne yapışık olarak büyüyen ve radyografide etrafında karakteristik bir yumuşak doku kapsülü (radyolusent halo) bulunan benign bir neoplazmdır. Sıklıkla karıştırılan sklerozan osteitis de kök ucunda radyoopasite yapar ancak dişin köküne doğrudan yapışık değildir ve etrafında radyolusent bir kapsül veya kortikal sınır barındırmaz (kaynaşmış sınır). Radyolusent haloya sahip köke yapışık bir kitlenin varlığı, sementoblastom teşhisi için spesifik bir işarettir.

**Soru 2 (ID: dd50752a-955c-4503-b46f-e50555d8cdf2)**
Soru Kökü: Kemik içi lezyonların radyografik sınır özellikleri, lezyonun doğası ve çevre dokuyla etkileşimi hakkında bilgi verir. Dışta iyi sınırlı ince bir kortikal radyoopak perifer ve onun hemen iç kısmında radyolusent bir boşlukla karakterize 'yumuşak doku kapsülü' görünümü aşağıdaki lezyonların hangisinde izlenir?
Doğru Şık (D): Odontom
Açıklama: Odontom ve sementoblastom gibi iyi huylu, kapsüllü odontojenik tümörler, etraflarındaki bağ dokusu kapsülü nedeniyle kalsifiye kitle ile komşu kemik arasında radyolusent bir hat (yumuşak doku kapsülü) ve en dışta reaktif bir kortikal sınır barındırır. Sklerozan osteitiste ise tam tersine kapsülsüz, kemikle kaynaşmış, sınırları belirsiz bir skleroz alanı izlenir. Radyografide tespit edilen bu radyolusent kapsül boşluğu, lezyonun çevre kemikten net bir şekilde ayrıştığını ve cerrahi olarak kolayca enükle edilebileceğini gösterir.

---

### ÇİFT 297 (Benzerlik: 0.69)

**Soru 1 (ID: 1a7fce10-6260-4d9a-b402-0012814faa29)**
Soru Kökü: Aşağıdaki lezyon veya durumlardan hangisinde radyografik olarak 'soğan kabuğu' (onion-skin) şeklinde ardışık lamellated periost reaksiyonu görülmesi **beklenmez**?
Doğru Şık (E): Santral hemanjiyom
Açıklama: Santral hemanjiyomlar soğan kabuğu değil, tipik olarak 'at arabası tekerliği', 'bal peteği' veya 'tekerlek' görünümünde vasküler ağlar oluşturur. Soğan kabuğu görünümü esas olarak inflamatuar olaylarda (osteomiyelit), çocukluk çağı sistemik reaksiyonlarında ve lösemi, Langerhans hücreli histiyozis veya Ewing sarkomu gibi hızlı seyreden spesifik tümörlerde periostun epizodik irritasyonuna bağlı gelişir.

**Soru 2 (ID: 6aea0ff8-5da5-4551-ab25-1fcdb0437d63)**
Soru Kökü: Periost reaksiyonlarının radyografik tiplendirilmesinde, kortikal plağın delinmesiyle kemik yüzeyine dik olarak (radyal) dışarıya uzanan yeni kemik spiküllerinden oluşan 'ışınsal spiküllü' (sunburst / güneş ışını) görünüm malign davranışa işaret eder. Tipik olarak osteosarkomda görülen bu kemik örüntüsü, nadiren de olsa aşağıdaki benign vasküler lezyonlardan hangisinde radyografik olarak izlenebilir?
Doğru Şık (B): Hemanjiom
Açıklama: Santral hemanjiomlar kemik içi trabekülleri yeniden şekillendirirken (at arabası tekerleği manzarası) periost dışına taştıklarında radyal yerleşimli kan damarları boyunca gerçekleşen mineralizasyon, periosta dik uzanan ışınsal spiküllere (sunburst görünümü) neden olabilir. Ameloblastom veya miksoma (çeldirici şıklar) gibi agresif epitelyal tümörlerde dış periostta güneş ışını tarzında spiküler kalsifikasyon kesinlikle izlenmez, bu tümörler sadece korteksi inceltir. Sunburst görünümü osteosarkom için patognomonik kabul edilse de, yüksek akımlı santral hemanjiomlar mutlaka ayırıcı tanıda yer tutmalıdır.

---

### ÇİFT 298 (Benzerlik: 0.69)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: dc66024c-1dac-4b2f-b671-18da583ac66a)**
Soru Kökü: Radyografik görüntüleme ilkeleri doğrultusunda, çenelerde "armut şekilli" (pear-shaped) radyolüsent bir görünüm veren patolojiler arasında aşağıdakilerden hangisi bulunur?
Doğru Şık (D): Radiküler kist
Açıklama: Tablo 9'a göre armut şekilli görünüme neden olan temel iki kist Globulomaksiller kist ve Radiküler kisttir. Radiküler kist özellikle premolar bölgede, kökün anatomisi etrafında bu formu alabilirken, nazopalatin kist kalp şeklinde, travmatik kemik kisti ise taraklı yapıda izlenir.

---

### ÇİFT 299 (Benzerlik: 0.69)

**Soru 1 (ID: 2bf2166c-1419-495b-8bc3-1f84e7efed01)**
Soru Kökü: Otuz iki yaşında kadın hasta, daha önce derin çürük sebebiyle kanal tedavisi görmüş mandibular birinci molar dişinde hafif çiğneme hassasiyeti tarif etmektedir. Radyografide apikal bölgede komşu normal kemik trabekülleri ile anormal doku arasında kademeli ve oldukça geniş bir geçiş bölgesi bulunan 'kaynaşmış sınır'lı radyoopak reaksiyon izleniyor. Bu klinik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerozan osteitis (Kondensing osteitis)
Açıklama: Sklerozan osteitis, pulpa inflamasyonuna karşı kemiğin verdiği düşük dereceli ve kronik hiperplastik yanıt olup, anormal kemiğin normal trabeküllere yavaş yavaş karıştığı 'kaynaşmış sınır' paterni sergiler. Odontom ve sementoblastom belirgin bir yumuşak doku kapsülüyle izole oldukları için sınırları kaynaşmış değil iyi belirgindir. İltihabın dereceli azalışı bu geçiş bölgesinin geniş ve diffüz (kaynaşmış) olmasına neden olur.

**Soru 2 (ID: e2223538-6cbb-4714-b900-9c0ab4d5eff3)**
Soru Kökü: 45 yaşında siyah ırktan kadın hasta rutin muayeneye başvuruyor. Vital olan mandibular anterior dişlerin periapikal bölgesinde, kalın bir sklerotik sınırla çevrili ve iç yapısı "buzlu cam" karakterinde gelişen miks (radyolüsent-radyoopak) lezyonlar saptanıyor. Bu lezyonun en olası radyografik paterni ve tanısı aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (B): Buzlu cam - Periapikal semental displazi
Açıklama: Periapikal semental (kemik) displazi tipik olarak orta yaşlı, siyah ırktan kadınlarda, vital alt anterior dişlerin periapikalinde izlenir; olgunlaşma aşamasında internal bölgede trabeküller disorganize olarak buzlu cam formasyonuna yol açar. Paget genelde tüm çeneyi tutar, adenoameloblastoma kum benzeri görünüm verir. Vitalite ve lokalizasyon spesifik tanı için anahtar noktalardır.

---

### ÇİFT 300 (Benzerlik: 0.69)

**Soru 1 (ID: 5de7d00b-96af-4699-b073-c0e7bd990983)**
Soru Kökü: Yirmi iki yaşında erkek hasta, rutin panoramik kontrol sırasında sol mandibula ramusa uzanan radyolusent bir lezyon tespit edilmesiyle sevk ediliyor. Lezyon incelendiğinde 'şişirilmiş balon' veya tam dairesel formasyon yerine; oldukça belirgin dalgalı, taraklı bir çevre (scalloped) morfolojisi saptanıyor. Bu dış hat (şekil) bilgisi, teşhis konulurken aşağıdaki patolojilerin hangisini öncelikli olasılıklar listesinden (ayırıcı tanıdan) uzaklaştırır?
Doğru Şık (D): Radiküler kist
Açıklama: Radiküler kistler veya foliküler kistler güçlü bir hidrolik (osmotik) sıvı basıncıyla tüm dokulara eşit güç uygularlar ve bu yüzden çevreleri dairesel, balon şekillidir; taraklanma göstermezler. Odontojenik keratokist, basit kemik kisti veya ameloblastom gibi lezyonlar ise trabeküler boşluklara doğru basınçtan ziyade köklenerek yayıldıkları için sınırları 'dalgalı (taraklı)' olabilir. Bu mekanizma, lezyonların hidrolik basınca karşı invaziv doğası arasındaki radyolojik ayrımı temsil eder.

**Soru 2 (ID: fc0eaa52-239e-45a1-ae4f-9bf4ce8c06b4)**
Soru Kökü: Asemptomatik kırk beş yaşında Afrika kökenli bir kadın hastada, sağ mandibular molar bölgede radyolojik sınır genişliği bakımından tek tip olmayan, kalın ve geniş bir radyoopak reaktif geçiş bölgesi saptanmıştır. Bu perifer formu 'sklerotik sınır' olarak rapor edilmiştir. Bu sınır tipi, aşağıdaki lezyonlardan hangisinde primer olarak görülür?
Doğru Şık (B): Periapikal kemik displazisi
Açıklama: Sklerotik sınır, çok yavaş büyüme hızı ve lezyonun etrafındaki yoğun reaktif kemik uyarımı sonucu oluşan kalın, homojen olmayan radyoopak geçiş bölgesidir ve en tipik olarak periapikal kemik displazilerinde görülür. Keratokist ve ameloblastom genellikle ince ve düzenli kortikal sınırlar yaratırken, displazilerde kemiğin formasyon-rezorpsiyon dengesi bozulduğundan sklerotik bantlar kalındır. Sklerotik sınır patolojinin inflamatuar olmayan uzun süreli varlığına işaret eder.

---

### ÇİFT 301 (Benzerlik: 0.69)

**Soru 1 (ID: 05a5d6c7-43b0-4b19-9c87-bb74eb1d4a8b)**
Soru Kökü: Sekiz yaşında erkek çocuk hasta, alt çenesinde her iki tarafta giderek artan ağrısız şişlik şikayetiyle başvuruyor. Alınan panoramik radyografide her iki mandibular angulus ve ramus bölgesinde genişlemeye neden olan multiloküler radyolusent alanlar izleniyor. Çenelerde her zaman bilateral yerleşim gösterdiği bilinen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Cherubism
Açıklama: Çenelerdeki lezyonların bölgesel veya genel yerleşimli olması tanıda kritik bir filtredir ve cherubism mandibula ile maksillada her zaman bilateral ekspansiyonlarla karakterize genetik bir hastalıktır. Sıklıkla angulus bölgesinde görülen ameloblastom veya miksoma gibi odontojenik tümörler ise tipik olarak tek taraflı (unilateral) büyüme eğilimindedir. Radyografide bilateral simetrik multiloküler yıkım gören bir klinisyen yaş faktörüyle birlikte doğrudan cherubism tanısına yönelmelidir.

**Soru 2 (ID: bc124276-30f6-4f26-83f5-048ac646cd88)**
Soru Kökü: On dört yaşındaki kız hasta,çenesinde asimetri şikayetiyle başvurmuştur. Alınan sefalometrik ve periapikal radyografilerde lokalize radyolüsent bir alan izlenmiştir. Biyopsi sonucu 'Santral dev hücreli granülom' gelen bu hastada, lezyonun radyografik merkez üssünün en büyük olasılıkla bulunduğu spesifik bölge aşağıdakilerden hangisidir?
Doğru Şık (A): Maksiller kaninlerin anterioru
Açıklama: Genç hastalarda (örneğin puberte dönemi) santral dev hücreli granülomların merkez üsleri en sık maksiller kaninlerin anteriorunda (önünde) konumlanma eğilimi gösterir. Erişkinlerde ve genel popülasyonda ise daha sık mandibula birinci moların anteriorunda yerleşir. Yaşa bağlı bu spesifik lokalizasyon farklılığı, santral dev hücreli granülomun biyolojik davranışı için tanısal bir markerdır.

---

### ÇİFT 302 (Benzerlik: 0.69)

**Soru 1 (ID: 67464c70-901c-4143-88cd-4bbb0d3df085)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula posterior bölgede radyolüsent bir genişleme tespit edilmiştir. İncelemede lezyonun merkez üssünün inferior alveolar sinir kanalının (IAC) alt yarısında olduğu saptanmıştır. Bu anatomik ilişkiye göre patolojinin kökeni hakkında en doğru yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik epitelden köken alma olasılığı oldukça düşüktür.
Açıklama: Bir lezyonun merkez üssü mandibular kanalın (IAC) altında yer alıyorsa, diş köklerinden uzaklığı nedeniyle odontojenik dokudan gelişme ihtimali radyografik olarak son derece düşüktür. Merkez üssü kanalın üstünde olanlar odontojenik kökenli, kanalın tam içinde olanlar ise nöral/vasküler (nörom, hemanjiom vb.) kökenli kabul edilir. Radyografik lokalizasyon embriyolojik orijinin en net göstergelerindendir.

**Soru 2 (ID: f496580c-5eb9-4c6f-aec2-d30bc3df0d98)**
Soru Kökü: İnferior alveolar kanalın radyografik incelemesinde kanal trasesinin kortikal sınırları bozulmadan (intakt) kalarak düzgün bir biçimde genişlediği görülmüştür. Bu spesifik genişleme paterninin kanal içerisinde yerleşimli aşağıdaki patolojilerden hangisini göstermesi **en az olasıdır**?
Doğru Şık (B): Malign lenfoma
Açıklama: Kanal korteksinin bozulmadan (intakt olarak) genişlemesi, kanal içerisindeki yavaş büyüyen benign vasküler (hemanjiyom) veya nöral (nörom, schwannom) tümörleri işaret eder. Malign bir neoplazm (lenfoma vb.) kanal çevresindeki kortikal kemikte düzensiz yıkım ve invazyon (korteks kaybı) yapar, intakt bir genişleme bırakmaz.

---

### ÇİFT 303 (Benzerlik: 0.69)

**Soru 1 (ID: 1c8a0786-ca84-43b4-a257-8340c4f13da5)**
Soru Kökü: Hangi radyografik görünüm hem dev hücreli granülomda hem de travmatik kemik kistinde (basit kemik kisti) ortak olarak izlenebilen bir patolojik sınır karakteristiğidir?
Doğru Şık (D): Taraklı görünüm
Açıklama: Taraklı görünüm, bir lezyonun komşu diş köklerinin veya sert kortikal engellerin etrafından invaze olmadan dolanarak ilerlemesi sonucu oluşan ortak sınır formasyonudur ve hem dev hücreli granülom hem de travmatik kemik kistinde izlenir. Zımba deliği sınır ise multipl miyelom gibi infiltratif lezyonlarda komşu doku reaksiyonu olmaksızın gelişen akut destrüksiyonu ifade eder. Bu sınır paterni, lezyonun yavaş ve dokulara adapte olarak büyüdüğünü gösterir.

**Soru 2 (ID: f57aadcc-09a9-4caf-9442-da4ae0020b63)**
Soru Kökü: Radyografide kalın, genişliği tek tip olmayan ve çevresindeki kemik reaksiyonunu uyaran radyoopak geçiş bölgesi formundaki 'sklerotik sınır'ın temel patofizyolojik anlamı, aşağıdakilerden hangisini yansıtmasıdır?
Doğru Şık (B): Lezyonun çevresindeki kemik üretimini uyarmaya yetecek çok yavaş bir büyüme hızı sergilediğini
Açıklama: Sklerotik sınır, lezyon etrafındaki osteoblastların kronik ve zayıf stimülasyona yanıt vererek uzun bir zaman zarfında anormal genişlikte ve kalınlıkta reaktif kemik örmesinin bir sonucudur, bu da lezyonun büyüme hızının oldukça yavaş olduğunu kanıtlar. Malignite veya agresif durumlar kemik yapımına değil hızla yıkıma neden olarak ince invaziv sınırlar oluştururlar. Bu reaktif kalınlaşma, periapikal osseöz displazilerde tipik olarak görülür.

---

### ÇİFT 304 (Benzerlik: 0.69)

**Soru 1 (ID: bb06d009-f463-4ece-b20c-dfe0cd983c6c)**
Soru Kökü: 34 yaşında erkek hasta, sağ posterior mandibulada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Alınan panoramik radyografide multiloküler, iç yapıyı bölümlere ayıran kavisli ve kalın septalarla karakterize 'sabun köpüğü' görünümünde bir lezyon izleniyor. Bu klinik ve radyografik bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Ameloblastom lezyonlarında organizasyonu sağlayan kavisli ve kalın kemik septalar karakteristik 'sabun köpüğü' görünümünü oluşturur. Odontojenik miksomada iç septalar kavisli değil, tipik olarak daha düz ve ince iplikler formundadır. Septaların bu morfolojik farkı lezyonların agresivite ve matriks özelliklerini yansıtan önemli bir radyografik ayıraçtır.

**Soru 2 (ID: ec488eab-1298-4c40-b290-12300732bb6e)**
Soru Kökü: Odontojenik tümörlerin radyografik iç yapı analizinde septa morfolojisi ayırıcı tanıda kritik öneme sahiptir. Aşağıdaki lezyonlardan hangisi tipik olarak düz ve ince iç bölmeler (septalar) sergileyerek diğer multiloküler lezyonlardan ayrılır?
Doğru Şık (E): Odontojenik miksoma
Açıklama: Odontojenik miksomalar iç yapılarında kemiksi septalar bulundurur ve bu septalar ameloblastomdan farklı olarak genellikle düz, ince bölmeler şeklindedir. Anevrizmal kemik kisti veya keratokistlerde ise balon veya dalgalı şekilli genişlemeler daha ön plandadır. İç yapının bu ince organizasyonu tümörün miksomatöz içeriğiyle mekanik bir korelasyon gösterir.

---

### ÇİFT 305 (Benzerlik: 0.69)

**Soru 1 (ID: 0d2cb75c-cec8-450c-8095-fffc47f311a9)**
Soru Kökü: Pediatrik bir hastanın panoramik radyografik muayenesinde mandibula korpusunda 'soğan kabuğu' (lamellated) görünümünde kalınlaşmış periost reaksiyonu izlenmiştir. Dişlerde derin çürük veya enfeksiyon bulgusu olmayan ve osteomiyelit ihtimalinin klinik olarak dışlandığı bu vakada, ayırıcı tanıda öncelikle düşünülmesi gereken hastalıklardan biri aşağıdakilerden hangisidir?
Doğru Şık (C): Langerhans hücreli histiyozis
Açıklama: Pediatrik yaş grubunda soğan kabuğu tarzı periost reaksiyonu klasik olarak osteomiyelitte görülse de, inflamasyon varlığı (çürük/fokal enfeksiyon) ekarte edildiğinde bu reaktif görünümün arkasında genellikle lösemi veya Langerhans hücreli histiyozis gibi kemik iliği infiltrasyonları aranmalıdır. Basit kemik kisti veya dev hücreli granülom (çeldirici şıklar) epikortikal reaksiyona neden olmaz, aksine kemiği içeriden eriterek korteksi inceltir (taraklı kenar/genişleme). Bu spesifik dış reaksiyon, ilik patolojilerinin periostla girdiği patofizyolojik etkileşimin sonucudur.

**Soru 2 (ID: a90e612c-ebec-4bec-b053-3736682fb795)**
Soru Kökü: 45 yaşında erkek hasta alt çenesinde ilerleyici uyuşukluk (parestezi) ve dişlerinde mobilite şikayetiyle başvuruyor. Alınan radyografide dişlerin "yüzen diş" pozisyonunda kaldığı saptanıyor. Ayrıca dış kortikal plağı tamamen parçalayan, periostu uyararak diş fırçası tarzında dışarıya uzanan agresif "güneş ışını" (sunburst) reaksiyonu ve lezyonun iç yapısında düzensiz kalsifiye odaklar tespit ediliyor. Bu klinik ve radyografik özellikler kombinasyonu en çok aşağıdaki patolojilerden hangisi ile uyumludur?
Doğru Şık (A): Osteosarkom
Açıklama: Osteosarkom, kemik matrisi üreten malign bir tümör olduğu için radyografide; parestezi ile eş zamanlı hızlı agresyon, diş destek dokusunu eriten 'yüzen diş' yapısı ve karakteristik dış periostal 'güneş ışını/fırça' (sunburst) reaksiyonu oluşturur. Garre osteomiyelitinde malign destrüksiyon yerine soğan kabuğu reaksiyonu, talasemide ise çene büyümesi ile saç fırçası (hair-on-end) kalvaryum manzarası izlenir.

---

### ÇİFT 306 (Benzerlik: 0.69)

**Soru 1 (ID: 3c8c2e63-7761-401f-afda-68798fae7194)**
Soru Kökü: Radyografik değerlendirmede bazı odontojenik keratokist ve basit kemik kistlerinde lezyonun sınırlarının pürüzsüz hidrolik bir balon formundan ziyade 'dalgalı ve taraklı' bir yapı sergilediği görülür. Bu 'taraklı çevre' morfolojisi, radyografide zaman zaman lezyonun aşağıdaki iç yapı özelliklerinden hangisiyle sahip olduğunu izlenimi verir?
Doğru Şık (C): Multiloküler
Açıklama: Dalgalı ve taraklı (scalloped) çevre yapısı, lezyonun kortikal kemik aralarından kök kök ilerlemesi sonucunda radyografide adeta birden çok odacıktan oluştuğu, yani multiloküler olduğu yanılsamasını yaratabilir. Buzlu cam ve pamuk atığı görünümleri sınır değil internal kalsifikasyon (trabekülasyon) paternleriyle ilgilidir. Bu nedenle gerçek internal septasyon ile periferik taraklanmanın ayırımı diagnozda kritik bir basamaktır.

**Soru 2 (ID: dd50752a-955c-4503-b46f-e50555d8cdf2)**
Soru Kökü: Kemik içi lezyonların radyografik sınır özellikleri, lezyonun doğası ve çevre dokuyla etkileşimi hakkında bilgi verir. Dışta iyi sınırlı ince bir kortikal radyoopak perifer ve onun hemen iç kısmında radyolusent bir boşlukla karakterize 'yumuşak doku kapsülü' görünümü aşağıdaki lezyonların hangisinde izlenir?
Doğru Şık (D): Odontom
Açıklama: Odontom ve sementoblastom gibi iyi huylu, kapsüllü odontojenik tümörler, etraflarındaki bağ dokusu kapsülü nedeniyle kalsifiye kitle ile komşu kemik arasında radyolusent bir hat (yumuşak doku kapsülü) ve en dışta reaktif bir kortikal sınır barındırır. Sklerozan osteitiste ise tam tersine kapsülsüz, kemikle kaynaşmış, sınırları belirsiz bir skleroz alanı izlenir. Radyografide tespit edilen bu radyolusent kapsül boşluğu, lezyonun çevre kemikten net bir şekilde ayrıştığını ve cerrahi olarak kolayca enükle edilebileceğini gösterir.

---

### ÇİFT 307 (Benzerlik: 0.69)

**Soru 1 (ID: 0daeb33b-40c9-455e-a73f-c71a60d60dfa)**
Soru Kökü: Mandibulada lokalize bir lezyonun radyografik incelemesinde 'at arabası tekerliği' ve 'sabun köpüğü' paternleri bir arada izlenmektedir. Bu internal yapı özelliklerine ek olarak 'bal peteği' formasyonunun da görülebileceği patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Santral hemanjiom
Açıklama: Santral hemanjiom, çene kemiklerinde vasküler boşlukların organizasyonuna bağlı olarak 'at arabası tekerliği', 'tekerlek', 'sabun köpüğü' ve 'bal peteği' gibi çok çeşitli multilocüler görünümler üretebilir. Ameloblastoma sabun köpüğü ve bal peteği yapsa da tekerlek formasyonları bu odontojenik tümörde izlenmez. Bu zengin radyografik polimorfizm, hemanjiomun içindeki endotelyal kanalların kemik trabeküllerine yaptığı baskının bir sonucudur.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

### ÇİFT 308 (Benzerlik: 0.69)

**Soru 1 (ID: 05a5d6c7-43b0-4b19-9c87-bb74eb1d4a8b)**
Soru Kökü: Sekiz yaşında erkek çocuk hasta, alt çenesinde her iki tarafta giderek artan ağrısız şişlik şikayetiyle başvuruyor. Alınan panoramik radyografide her iki mandibular angulus ve ramus bölgesinde genişlemeye neden olan multiloküler radyolusent alanlar izleniyor. Çenelerde her zaman bilateral yerleşim gösterdiği bilinen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Cherubism
Açıklama: Çenelerdeki lezyonların bölgesel veya genel yerleşimli olması tanıda kritik bir filtredir ve cherubism mandibula ile maksillada her zaman bilateral ekspansiyonlarla karakterize genetik bir hastalıktır. Sıklıkla angulus bölgesinde görülen ameloblastom veya miksoma gibi odontojenik tümörler ise tipik olarak tek taraflı (unilateral) büyüme eğilimindedir. Radyografide bilateral simetrik multiloküler yıkım gören bir klinisyen yaş faktörüyle birlikte doğrudan cherubism tanısına yönelmelidir.

**Soru 2 (ID: f8ef4b85-df5b-48f4-8367-86e5748c2843)**
Soru Kökü: Temporomandibular eklem bölgesindeki gelişimsel yapı farklılıkları dikkate alındığında, kondiler bölgede radyografik olarak saptanma potansiyeli en yüksek olan lezyon aşağıdakilerden hangisidir?
Doğru Şık (B): Osteokondrom
Açıklama: Kondiler bölge endokondral kemikleşme gösteren kıkırdak bir büyüme merkezine sahip olduğundan, osteokondrom gibi kıkırdaksı lezyonların bu alanda oluşma ihtimali çenelerin diğer bölgelerine göre belirgin şekilde yüksektir. Ameloblastom ve odontojenik miksoma dişlerin bulunduğu korpus ve angulus bölgelerini tercih ederken, kondilde çok nadir görülür. Doku spesifik lokalizasyon anomalilerin saptanmasında ilk basamaktır.

---

### ÇİFT 309 (Benzerlik: 0.69)

**Soru 1 (ID: 2bfba921-dea3-4681-b558-912976f6dfb1)**
Soru Kökü: Yirmi sekiz yaşındaki hastada kavisli ve kalın kemik septalarının iç içe geçmesiyle oluşan, hidrolik büyüme paternli multiloküler bir yapı izlenmiştir. Radyolojik raporda 'sabun köpüğü' görünümü olarak tarif edilen bu lezyon paterni, aşağıdakilerden hangisine aittir?
Doğru Şık (A): Ameloblastom
Açıklama: Ameloblastomda oluşan iç septalar kavisli ve kalındır; bu da radyografide multiloküler 'sabun köpüğü' (soap bubble) paternini yaratır. Odontojenik miksomada ise septalar genellikle düz ve ince olup 'tenis raketi' manzarası oluşturur. Basit kemik kisti taraklı kenar yapar ancak gerçek iç septa oluşturmaz.

**Soru 2 (ID: ba332fca-941d-4907-9023-9ed707216732)**
Soru Kökü: Kemik trabeküllerinin sayıca artmış, kısa ve strese yanıt vermeden rastgele yönlenmesi sonucu ortaya çıkan "buzlu cam" (ground glass) veya "portakal kabuğu" görünümü aşağıdaki patolojilerden hangisinde iç yapı bulgusu olarak **görülmez**?
Doğru Şık (E): Ameloblastoma
Açıklama: Ameloblastoma belirgin kemikli septaların lezyonu böldüğü çok gözlü 'sabun köpüğü' veya 'bal peteği' görünümüne neden olan benign bir tümördür. Florid semento-osseöz displazi, semento-ossifying fibroma, Paget hastalığı ve greft uygulamalarında ise ince trabeküllerin düzensiz organizasyonuna bağlı homojen bulanıklık olan buzlu cam manzarası izlenir.

---

### ÇİFT 310 (Benzerlik: 0.69)

**Soru 1 (ID: ba6a0252-ba8a-44c7-97a2-f559a23bd1cc)**
Soru Kökü: Kırk yaşındaki erkek hastada sağ mandibula ramusunda 'bal peteği' (honeycomb) paterninde, birbirine bitişik çok sayıda küçük, yuvarlak radyolüsent alan izlenmiştir. Bu patern aşağıdaki tümöral gelişimlerin hangisinde izlenen klasik radyografik özelliklerden biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist apeks çevresinde inflamatuar uyarımla gelişen, tek boşluklu (üniloküler) armut şeklinde veya oval bir radyolüsensidir, bal peteği şeklinde iç septalar barındırmaz. Ameloblastoma, miksoma, santral hemanjiom ve osteosarkom ise çok gözlü yıkımlar yaparak bal peteği manzarasını simüle edebilir.

**Soru 2 (ID: d3b30309-c022-4182-9d09-e05f68120b2a)**
Soru Kökü: Radyografik olarak kortikal bir perifer ile birlikte içte hemen bir 'yumuşak doku kapsülü' alanının (radyolusent bir halo) izlenmesi, çenelerdeki bazı özel odontojenik tümörlerin ayırt edici bulgusudur. Bu radyografik görünüme tipik olarak sahip olan lezyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Odontom - Sementoblastom
Açıklama: Odontom ve sementoblastom gibi kalsifiye kitleler oluşturan lezyonların etrafında, fizyolojik diş folikülüne benzeyen radyolusent bir yumuşak doku kapsülü ve en dışta kortikal bir kemik sınır görülür. Ameloblastom ve dev hücreli granülomda genellikle sıvı/hücre dolu litik içerik izlenir, kapsül-kitle ilişkisi yoktur. Bu halonun varlığı kalsifiye kitlenin normal kemikten sınırlandığını gösterir.

---

