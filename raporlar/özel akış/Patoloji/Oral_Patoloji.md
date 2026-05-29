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

**Soru 1 (ID: edf86562-ae4b-4984-8612-4179e47418c3)**
Soru Kökü: Aşağıdakilerden hangisi konjenital sifiliz enfeksiyonunda izlenen Hutchinson triyadının bileşenlerinden biri **değildir**?
Doğru Şık (B): Altıncı kraniyal sinir tutulumuna bağlı strabismus
Açıklama: Hutchinson triyadının nörolojik bileşeni 8. kraniyal sinir (Nervus vestibulocochlearis) tutulumuna bağlı sensörinöral sağırlıktır. Altıncı sinir (N. abducens) tutulumu ve strabismus bu triadda yer almaz (DUS komitelerinin favori çeldiricisidir). Diğer bileşenler; kama biçimli kesiciler/dut molarlar (dental anomali) ve interstisyel keratittir (oküler anomali).

**Soru 2 (ID: 08788acc-daa1-4e89-88a5-b6b7c4c8d6f4)**
Soru Kökü: Konjenital sifiliz patolojisinde embriyolojik evrede doku harabiyeti kaskadıyla ortaya çıkan Hutchinson triyadının bileşenlerinden biri **değildir**?
Doğru Şık (D): Korda timpani hasarına sekonder periferik fasiyal paralizi
Açıklama: Hutchinson triyadı, dental deformiteler (kama/dut dişler), oküler defekt (interstisyel keratit) ve nörolojik defekt (sensörinöral sağırlık) üçlemesinden oluşur. Bu nörolojik defekt 8. kraniyal sinirin (N. vestibulocochlearis) tahribatına bağlı gelişir, fasiyal sinir veya trigeminal sinir tutulumu triyada dâhil değildir. Periferik fasiyal paralizi, Varicella Zoster'in genikulat gangliyonda reaktivasyonu ile oluşan Ramsay Hunt sendromunda izlenir.

---

### ÇİFT 2 (Benzerlik: 0.83)

**Soru 1 (ID: c25be7e0-f018-495c-a201-b7d46e42eeb8)**
Soru Kökü: On sekiz yaşındaki erkek hastanın radyolojik muayenesinde sağ alt molar dişler bölgesinde sürmeyi engellemiş radyoopak bir kitle saptanmıştır. Materyalin histopatolojisinde mine, dentin ve sementin normal diş morfolojisi almadan, tamamen gelişigüzel ve düzensiz konglomere bir kitle oluşturduğu izlenmiştir. Bu hamartomatöz lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Kompleks odontom
Açıklama: Odontomlar mine ve dentin içeren hamartomlardır. Diş dokularının rudimenter (küçük dişcik) yapıları şeklinde nispeten organize olduğu tipe kompound (bileşik), dokuların organize olamayıp gelişigüzel devasa konglomere bir kitle oluşturduğu tipe ise kompleks odontom adı verilir.

**Soru 2 (ID: 74801c8f-7649-40b1-b1cd-72cbeef4a037)**
Soru Kökü: Ergenlik çağında rutin kontrole gelen semptomsuz bir hastanın maksilla anterior gömülü dişi hizasında, çok sayıda bir araya gelmiş minyatür (küçük) diş benzeri radyoopak yapı saptanmıştır. Patolog mikroskobunda dentin, mine ve sement dokularının organize olarak ufak dentiküller (diş taslakları) oluşturduğunu raporlamıştır. Bu kitle aşağıdakilerden hangisidir?
Doğru Şık (A): Kompaund odontoma
Açıklama: Odontomalar diş oluşturan hamartomlardır. Kendi içindeki yapısal organizasyona göre ikiye ayrılırlar. Diş oluşturan dokular (mine, dentin) birbirleri ile morfolojik bir düzen içinde bir araya gelip minyatür çoklu dişçikler oluşturuyorsa bu Kompaund (bileşik) odontomdur. Tüm dokular amorf, düzensiz ve ayırt edilemez bir kalsifiye yığın oluşturuyorsa Kompleks odontom adını alır.

---

### ÇİFT 3 (Benzerlik: 0.83)

**Soru 1 (ID: 999e48aa-15ac-425e-af3d-ada1fe6c9a31)**
Soru Kökü: Sigara içim şekillerinin oral mukoza üzerindeki etkileri bölgesel farklılıklar yaratır. Tütünün ateşli yanan kısmının dudaklar arasında ağız içine dönük (ters) olarak kullanılması alışkanlığında, özellikle sert damak bölgesinde izlenen lezyonun (Reverse smokers palatal lezyonu) en kritik patolojik önemi aşağıdakilerden hangisidir?
Doğru Şık (E): Yüksek oranda premalign (kanserleşme) potansiyeline sahip olması
Açıklama: Normal sigara kullanımında damakta görülen nikotinik stomatit (kırmızı noktalı beyaz damak) sıklıkla iyi huylu bir reaktif yanıttır, ancak tütünün korlu kısmının ağız içine alındığı 'ters sigara içiciliği' palatal mukozada yüksek ısı ve yoğun karsinojenden dolayı şiddetli hücresel mutasyonlara yol açar. Bu nedenle reverse smokers palatal lezyonu doğrudan premalign bir lezyon kabul edilir. Yalnızca friksiyonel faktörleri barındıran basit lökoplakilerden çok daha agresiftir.

**Soru 2 (ID: 23cab94d-61e2-459a-b77b-cbe0faf945a2)**
Soru Kökü: Sert damak bölgesi, normal şartlar altında oral kavitede skuamöz hücreli karsinom gelişimi için en düşük riskli anatomik alanlardan biridir. Ancak hastanın spesifik olarak tütün ürününü ateşli ucu ağız içinde kalacak şekilde (ters) içmesi durumunda gelişen palatal lezyonun en kritik özelliği aşağıdakilerden hangisidir?
Doğru Şık (A): Çok yüksek (5 yıldızlı) malign transformasyon potansiyeli taşıması
Açıklama: Ters sigara içiciliğine bağlı gelişen revers smokers palatal lezyonu, sert damakta şiddetli termal ve kimyasal şok yaratarak masif displaziye neden olur ve 5 yıldızlı (en üst düzey) karsinom riski taşır. Reaktif nikotinik stomatit gibi masum değildir, reversibl olma eğilimi göstermez ve hücresel atipisi nedeniyle majör premalign odaktır.

---

### ÇİFT 4 (Benzerlik: 0.83)

**Soru 1 (ID: a058b2de-3f78-4d75-906c-e1e116b5e951)**
Soru Kökü: Yoğun sigara kullanan elli yaşında erkek hasta, sert damağında kenarları kalkık ve etrafı düzensiz ülsere bir lezyon şikayetiyle başvuruyor. İnsizyonel biyopside asinüs nekrozu, belirgin inflamasyon ve duktuslarda skuamöz metaplazi izleniyor ancak hücresel malignite bulgusuna rastlanmıyor. Yassı hücreli karsinomu klinik ve mikroskobik olarak güçlü şekilde taklit eden bu lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Nekrotizan siyalometaplazı
Açıklama: Nekrotizan siyalometaplazi, damak minör tükürük bezlerinde lokal iskemik faktörlere (örn. sigara) sekonder gelişen ve kendi kendini sınırlayan inflamatuvar reaktif bir durumdur. Mikroskobisinde görülen skuamöz adalar, patologlar tarafından yanlışlıkla yassı hücreli karsinom invazyonu olarak yorumlanabilir; bu yüzden klinikopatolojik korelasyon hayatidir. Tedavi gerektirmeden birkaç ay içinde spontan iyileşir.

**Soru 2 (ID: 72d5604a-ab3e-4755-aaa3-ecc988924dac)**
Soru Kökü: İleri yaşlı, sigara kullanan bir erkeğin sert damağında kenarları kalkık, etrafı düzensiz ülsere lezyon saptanmış ve eksizyonel biyopsi yapılmıştır. Patoloğun skuamöz hücreli karsinom (invaziv malign tümör) olarak yanlış yorumlama ihtimali en yüksek olan, aslında spontan iyileşen bu reaktif lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Nekrotizan sialometaplazi
Açıklama: Nekrotizan sialometaplazi, damak tükürük bezlerinde iskemik nekroz sonucu gelişen benign ve kendini sınırlayan reaktif bir lezyondur. Histolojisinde izlenen yoğun duktal skuamöz metaplazi ve asinüs nekrozu adacıkları, yanlışlıkla skuamöz hücreli karsinom veya mukoepidermoid karsinom olarak yorumlanıp gereksiz majör cerrahilere neden olabilir.

---

### ÇİFT 5 (Benzerlik: 0.83)

**Soru 1 (ID: e586d790-9878-4ea0-82e8-5dde8ad0ff8e)**
Soru Kökü: Altmış beş yaşındaki kadın hastanın muayenesinde gingiva ve yanak mukozasında yaygın, nükseden beyaz plaklar izlenmektedir. Anamnezinde sigara kullanmadığı ve ağız hijyeninin oldukça iyi olduğu saptanan hastanın biyopsisinde verrüköz mimari izlenmiştir. Bu klinik tablo için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Proliferatif verrüköz lökoplaki
Açıklama: Proliferatif verrüköz lökoplaki (PVL), klasik lökoplaki profilinin aksine çoğunlukla 60 yaş üstü, sigara içmeyen ve iyi oral hijyene sahip kadınlarda görülen spesifik bir klinik tablodur. Lezyonların çok odaklı olması, sık nüks etmesi ve kanserleşme potansiyelinin %100'e yaklaşabilmesi nedeniyle agresif cerrahi takip gerektirir.

**Soru 2 (ID: aac2fae1-223e-45a4-9839-13652cc24283)**
Soru Kökü: Altmış sekiz yaşında, hayatı boyunca sigara kullanmamış ve ağız hijyeni mükemmel olan kadın hastanın ağız mukozasında sürekli nüks eden, multifokal yayılan verrüköz yapıda kazınamayan beyaz plaklar saptanıyor. Bu klinik antite ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Etiyopatogenezinde kronik tütün ürünleri kullanımı majör tetikleyicidir.
Açıklama: Proliferatif verrüköz lökoplaki (PVL), klasik lökoplakilerin aksine sigara ile ilişkisi minimal olan ve spesifik olarak sigara içmeyen ileri yaş kadınlarda izlenen agresif bir prekanseröz lezyondur. Etiyolojisi büyük oranda idiyopatiktir. Kanserleşme oranı diğer tüm lökoplakilerden daha yüksek olup, %100'e varan karsinomatöz transformasyon sergileyebilir.

---

### ÇİFT 6 (Benzerlik: 0.82)

**Soru 1 (ID: 0576b6c8-13d4-40d7-b0f6-148b5b481342)**
Soru Kökü: Oral lökoplakilerin anatomik yerleşim yerlerine göre karsinoma dönüşme riskleri karşılaştırıldığında, aşağıdaki bölgelerden hangisi malignite potansiyeli açısından **en az** riskli grupta sınıflandırılır?
Doğru Şık (C): Retromolar bölge
Açıklama: Kanser riskine göre anatomik lokalizasyon sıralaması en riskliden en aza doğru; Ağız tabanı > Dil > Dudak > Damak > Bukkal mukoza > Vestibül > Retromolar bölge olarak bildirilmiştir. Ağız tabanı sıvı regöllenme alanı olduğu için karsinojenlerin en çok biriktiği ve en yüksek transformasyon oranının izlendiği bölgedir; buna karşın retromolar alan istatistiksel olarak malignite gelişimi açısından listenin en sonundadır.

**Soru 2 (ID: 96d6b733-c0f1-4699-bf01-fd43bed76588)**
Soru Kökü: Oral lökoplakilerin klinik yerleşim yerleri incelendiğinde, lezyonun görülme sıklığı açısından aşağıdaki anatomik bölgelerden hangisi **en az olası** lokalizasyondur?
Doğru Şık (D): Ağız tabanı
Açıklama: Lökoplakinin oral bölgede görülme sıklığı çoktan aza doğru; Vestibül > Yanak mukozası > Damak > Alveoler çıkıntı > Dudak > Dil > Ağız tabanı şeklindedir. Ağız tabanı lezyonun istatistiksel olarak en nadir izlendiği bölge olmasına rağmen, paradoksal olarak maligniteye dönüşüm riskinin en yüksek olduğu alandır.

---

### ÇİFT 7 (Benzerlik: 0.82)

**Soru 1 (ID: 29f37b37-9540-4a89-bea6-000911d502d5)**
Soru Kökü: Otuz yaşında uzak doğulu bir göçmende şiddetli trismus, ağız kuruluğu ve dil hareketlerinde kısıtlılık saptanıyor. Hastanın anamnezinde uzun süreli betel çiğneme öyküsü mevcut. Klinik muayenede oral mukozada soluk, skar benzeri geri dönüşümsüz fibrotik bantlar gözleniyor. Bu premalign lezyon aşağıdakilerden hangisidir?
Doğru Şık (B): Oral submüköz fibrozis
Açıklama: Oral submüköz fibrozis, özellikle betel cevizi (alkaloid) ve tütün çiğneyen Asya popülasyonlarında görülen, ağız mukozasında bağ dokusunun aşırı kollajenizasyonu sonucu şiddetli ve irreversibl trismusla seyreden prekanseröz bir hastalıktır. Dumansız tütün keratozunda trismus beklenmez, hiperkeratotik plaklar belirgindir. Fibrozis kas dokusuna uzanarak kalıcı hareket kısıtlılığı yapar.

**Soru 2 (ID: 7fd9e932-674e-462b-a2c3-80de256cc12e)**
Soru Kökü: Kırk yaşında erkek hasta, ağız açma kısıtlılığı (ilerleyici trismus) şikayetiyle kliniğe başvurmuştur. Öyküsünden uzun yıllardır tütün ve betel cevizi çiğneme alışkanlığı olduğu öğrenilmiştir. Muayenede oral mukoza esnekliğini yitirmiş, atrofik değil nedbe benzeri katı ve sert bir dokuya dönüşmüştür. Bu hastadaki premalign tablo aşağıdakilerden hangisidir?
Doğru Şık (E): Oral submüköz fibrozis
Açıklama: Tütün ve betel çiğneme alışkanlığına bağlı gelişen, doku sertleşmesi ve ilerleyici trismus (ağız açma kısıtlılığı) ile karakterize prekanseröz tablo oral submüköz fibrozistir (OSF). Plummer-Vinson sendromu sistemik demir eksikliğine bağlı difüz mukoza atrofisi yaparken, OSF kronik irritasyona bağlı nedbe/fibrozis geliştirir. Her ikisi de SCC riskini artırsa da klinik prezantasyonları zıttır.

---

### ÇİFT 8 (Benzerlik: 0.82)

**Soru 1 (ID: fb1a7d3f-2263-4af7-96de-9a14e688292c)**
Soru Kökü: Genetik lizozomal asit hidrolaz enzim eksikliği kaskadı sonucunda, hücresel temizlik döngüsünün durması ve doku makrofajlarında dermatan/heparan sülfat gibi yapıtaşlarının birikmesiyle birlikte yumuşak dokularda ve dilde belirgin organomegali (makroglossi) ile karakterize metabolik patoloji grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Mukopolisakkaridozlar
Açıklama: Mukopolisakkaridozlar (MPS), lizozomal asit hidrolaz enzimlerinin spesifik eksikliği nedeniyle makrofaj hücrelerinde heparan/dermatan sülfat döngüsünün bozulduğu genetik yıkım kusurlarıdır ve yumuşak dokularda kütlesel hacim artışıyla dilde makroglossi yaratır. Kretenizmde de metabolik birikim (miksödem) vardır ancak kaskadın ilk halkası genetik lizozom enzim defekti değil, doğrudan konjenital tiroid hormonu yetmezliğidir. Makroglosside kas ve damar kökenli etiyolojiler dışlandığında sistemik metabolik sendrom ayırıcı tanısında hücresel enzimatik biyobelirteçler kullanılır.

**Soru 2 (ID: ab8a2e9d-17cd-49fd-9ead-adaed51002d8)**
Soru Kökü: Aşağıdaki konjenital hastalıklardan hangisi spesifik olarak  glikozaminoglikanların parçalanmasını sağlayan enzimlerin doğuştan eksikliği sonucu ikincil bir makroglossi oluşturur?
Doğru Şık (E): Mukopolisakkaridozlar
Açıklama: Mukopolisakkaridozlar, glikozaminoglikanların parçalanmasını sağlayan enzimlerin doğuştan eksikliği sonucu hücre içinde atık materyal birikimiyle giden hastalıklardır ve bu makromoleküllerin dilde birikmesi sekonder makroglossi nedenidir. Kretenizm tiroid yetmezliğine bağlı miksödem kaynaklı, Duchenne ve Beckwith-Wiedemann direkt kas hipertrofisi kaynaklı büyümelerdir. Patolojik materyalin niteliği, makroglossinin yapısal büyüme mi yoksa infiltratif birikim mi olduğunu belirler.

---

### ÇİFT 9 (Benzerlik: 0.82)

**Soru 1 (ID: 45b3e08b-636f-4aaf-99a7-fa7949945ec8)**
Soru Kökü: Gingivitis tablosunda inflamasyon sadece diş eti dokusu ile sınırlı kalırken, hastalığın progressif ilerleyerek periodontitis evresine geçtiğini kanıtlayan kesin histopatolojik sınır aşımı aşağıdakilerden hangisinde gerçekleşir?
Doğru Şık (E): Semento-alveolar bağlantı liflerinin ve alveolar kemiğin tutulumu
Açıklama: Gingivitisi periodontitisten ayıran yegane anatomik sınır, enfeksiyonun periodontal ligament, sement ve alveolar kemiğe ulaşıp ataşman kaybı ve cep oluşumu yaratmasıdır. En güçlü çeldirici olan mononükleer hücre göçü (kronik gingivitis) veya diş eti kanaması, sadece yumuşak doku inflamasyonunun şiddetini gösterir, tutulum derinliğini yansıtmaz. Ataşman liflerinin kopması dişin kök yüzeyi ile epitelyum arasında irreverzibil cebin başlamasını ifade eder.

**Soru 2 (ID: 8809be7d-321e-42f7-ad43-99e242a01e1c)**
Soru Kökü: Gingivitis ile periodontitis arasındaki klinik ve patolojik geçiş aşamasında, aşağıdakilerden hangisinin saptanması tablonun artık bir gingivitis olmadığını ve periodontitise ilerlediğini **kesin olarak** gösterir?
Doğru Şık (E): Semento-alveolar bağlantı liflerinin yıkımı ile karakterize ataşman kaybı
Açıklama: Gingivitis yalnızca diş etini (gingiva) ilgilendiren, periodontal ligament (semento-alveolar lifler) ve alveoler kemik tutulumu olmayan lokalize bir inflamasyondur. İnflamasyon derinleşerek semento-alveolar bağlantı liflerinin yıkılmasına, epitelin apikale doğru göç ederek ataşman kaybına ve periodontal cep oluşumuna yol açtığında klinik tablo artık periodontitis olarak adlandırılır. Kanama, ödem, eritem ve dokuda mononükleer hücre infiltrasyonu tablonun erken evresi olan kronik gingivitiste de tipik olarak görülebilir.

---

### ÇİFT 10 (Benzerlik: 0.81)

**Soru 1 (ID: 05245b6d-6a56-476a-96d4-a560c4c8eb7f)**
Soru Kökü: Otuz yaşında erkek hasta, boyunda giderek büyüyen ve yutkunma güçlüğü yaratan iri bir lenf nodu şişliği ile kliniğe başvuruyor. Yapılan intraoral muayenede orofarenkste çok küçük, zor fark edilen bir primer lezyon tespit ediliyor. Hastanın sigara veya alkol kullanım öyküsü bulunmuyor. Alınan biyopsinin histopatolojik incelemesinde en olası bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Non-keratinize skuamoz hücreli karsinom
Açıklama: Senaryodaki genç yaş, sigara/alkol eksikliği, orofarenks yerleşimi ve 'iri nodal hastalık ile küçük primer lezyon' tablosu tipik HPV-ilişkili SCC bulgularıdır. HPV-ilişkili SCC'ler histopatolojik olarak non-keratinize özellik gösterirken, klasik HPV-ilişkisiz oral kavite SCC'leri keratinizedir (keratin incileri içerir). Bu tümörler büyük boyun kitlelerine rağmen paradoksal olarak daha iyi prognoza sahiptir.

**Soru 2 (ID: ee63117d-6015-4d8d-8165-dce9646e636e)**
Soru Kökü: Yirmi beş yaşında hiçbir tütün ve alkol kullanım öyküsü olmayan erkek hasta, boyun sağ tarafında hızla büyüyen, ağrısız ve palpasyonda fikse iri bir lenf nodu kitlesi ile başvuruyor. Çekilen PET-CT taramasında tonsil (orofarenks) kriptasında oldukça küçük, yüzeyel bir primer mukozal tümör tespit ediliyor. Biyopside non-keratinize malign epitel hücreleri gözleniyor. Hastanın kliniğini oluşturan en olası patogenez ve tanı aşağıdakilerden hangisidir?
Doğru Şık (A): HPV enfeksiyonu ilişkili skuamöz hücreli karsinom
Açıklama: Küçük primer mukozal odak (genellikle orofarenks/tonsil/dil kökü) ancak devasa boyun lenf nodu kitleleri (kistik/iri nodal hastalık) ile prezente olan, non-keratinize histolojiye sahip ve genç yaşta görülen tümörler tipik olarak HPV (İnsan Papilloma Virüsü, özellikle 16-18) ilişkili karsinomlardır. HPV ilişkisiz olanlar keratinize yapıdadır, ileri yaş tütün kullanıcılarında görülür ve primer tümör daha büyüktür.

---

### ÇİFT 11 (Benzerlik: 0.81)

**Soru 1 (ID: 8b85736d-aed0-434a-a460-d9ba3e6309ee)**
Soru Kökü: Aşırı sigara kullanımı, kötü ağız hijyeni ve uzun süreli antibiyotik kullanımına bağlı olarak dilin sırtında kıl benzeri siyah-kahverengi görünümler oluşabilir. Bu 'tüylü dil' tablosunun ortaya çıkmasına neden olan temel histopatolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Filiform papillaların hiperkeratozu ve deskuamasyon yetersizliği
Açıklama: Tüylü dil (lingua villosa), dildeki mekanik sürtünme eksikliği veya kimyasal irritanlar nedeniyle filiform papillaların keratinize olup dökülememesi (hiperkeratoz ve deskuamasyon yetersizliği) sonucu uzayarak kıl benzeri bir görünüm almasıdır. Fungiform veya sirkumvallat papillalar bu lezyonun patogenezinde rol almazlar. Aspergillus gibi sekonder mantar enfeksiyonları lezyona siyah rengini veren asıl faktördür.

**Soru 2 (ID: 1b314d02-b951-45f9-a971-fa52a4392285)**
Soru Kökü: Sigara kullanımı, kötü ağız hijyeni veya uzun süreli antibiyotik kullanımına bağlı olarak, dil dorsumu orta hattında lokalize epitel uzantılarının normal dökülme periyodunu yitirmesi (deskuamasyon defekti) ve aşırı keratinize olmasıyla 'tüylü dil' tablosu ortaya çıkar. Bu patolojik kaskadta hiperkeratoza uğrayarak klinik görünümü yaratan spesifik anatomik yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Filiform papillalar
Açıklama: Tüylü (saçlı) dilde keratin birikimi ve deskuamasyon defekti sonucu kıl benzeri uzayan, tat tomurcuğu barındırmayan ve mekanik işlev gören yapılar filiform papillalardır. Eritema migrans'ta (coğrafik dil) atrofiye uğrayan papilla türü de yine aynı filiform papillalardır. Fungiform ve sirkumvallat papillalar bu otonom hiperkeratotik uzama döngüsüne katılmazlar.

---

### ÇİFT 12 (Benzerlik: 0.81)

**Soru 1 (ID: b8ae0c30-629d-48a6-bb4f-fddca53ed64c)**
Soru Kökü: Bir aylık kız bebeğin maksiller alveolar kret bölgesinde doğuştan var olan, saplı ve nodüler bir kitle tespit edilmiştir. Biyopsi sonucu lezyonun inflamatuar kökenli olmadığı ve bir hamartom karakteri taşıdığı belirlenmiştir. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Konjenital epulis
Açıklama: Yenidoğanların konjenital epulisi sıklıkla kız çocuklarında, maksiller alveolar çıkıntıda gelişen, hamartomatöz karakterli ve spontan gerileme potansiyeli olan spesifik bir lezyondur. En güçlü çeldirici olan fibröz epulis yetişkinlerde sekonder irritasyona bağlı gelişir, konjenital değildir. Lezyonun 'epulis' ismini alması doğrudan alveolar çıkıntı yerleşiminden kaynaklanır.

**Soru 2 (ID: d1d8c003-c598-444e-a642-c5bd2c93ce1c)**
Soru Kökü: Özellikle yenidoğan kız bebeklerin üst çene alveoler kret çıkıntısında doğuştan var olan, patolojik olarak hamartomatöz karakterde geliştiği kabul edilen ve herhangi bir müdahaleye gerek kalmadan zamanla spontan olarak gerileme eğilimi gösteren tümör benzeri lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Yenidoğanın konjenital epulisi
Açıklama: Yenidoğanın konjenital epulisi, özellikle kız bebeklerde maksiller alveoler kret mukozası üzerinde doğuştan yer alan, nadir rastlanan fibröz-hamartomatöz bir lezyondur. Bu patolojinin en ilginç ve ayırıcı özelliği, cerrahi bir müdahaleye gerek duyulmaksızın çocuğun büyümesiyle birlikte zaman içinde kendiliğinden (spontan) küçülüp tamamen gerileyebilmesidir. Dev hücreli fibrom ise erken yaşlarda (çocuk veya erişkin) görülmesine karşın histolojisinde karakteristik yıldız şekilli fibroblastlar barındıran farklı bir lezyondur.

---

### ÇİFT 13 (Benzerlik: 0.81)

**Soru 1 (ID: 594e49db-1c9f-4bf0-9cd2-b7028dfc8a81)**
Soru Kökü: Nörofibromatozis Tip I hastalarında sekonder olarak makroglossi gelişimine neden olan ve dil stroma dokusu içerisinde kontrolsüz çoğalan patolojik hücresel kütle aşağıdakilerden hangisidir?
Doğru Şık (B): Displastik Schwann hücresi ve fibroblast infiltrasyonları
Açıklama: Nörofibromatozis Tip I'de makroglossi yapan temel lezyon, displastik Schwann hücreleri ve fibroblastların dil stromasında proliferasyonuyla oluşan pleksiform nörofibromlardır. Lenfatik hamartomlar lenfanjiyomun, mukozal nöromalar MEN 2B'nin, distrofin defekti ise Duchenne muskuler distrofinin belirtecidir. Etken hücrelerin histolojik kökeni sendrom tiplendirmesi için anahtar veridir.

**Soru 2 (ID: 181ae1f6-46c6-4a35-916d-ecfcd17b03a1)**
Soru Kökü: Displastik Schwann hücreleri ve fibroblastlardan oluşan tümöral kılıfların kontrolsüz gelişimiyle karakterize olan ve oral kavitede bu pleksiform yapıların dil dokusu stroması içine difüz infiltrasyonu sonucunda kütlesel makroglossi kliniği yaratan sendromik patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Nörofibromatozis Tip I
Açıklama: Pleksiform nörofibromlar (displastik Schwann hücreleri ve reaktif fibroblast proliferasyonları), Nörofibromatozis Tip I (von Recklinghausen hastalığı) sendromunda dil içine implante olarak difüz makroglossi tablosu oluşturur. Multipl Endokrin Neoplazi Tip 2B'de makroglossi yapan hücresel komponent 'mukozal nöroma'lardır, pleksiform Schwann kılıfı değil. Kas kökenli sendromlarda (Beckwith-Wiedemann vb.) patolojinin kütlesel odağı doğrudan kas hiperplazisine dayanır.

---

### ÇİFT 14 (Benzerlik: 0.81)

**Soru 1 (ID: 4bd8e666-a21d-4bb2-bae0-8ffd57ada375)**
Soru Kökü: Yedi yaşında erkek çocuk, ateş ve yutkunma zorluğu şikayetiyle getiriliyor. İntraoral muayenede sert damak, dil ve yanak mukozasında ülserler saptanırken, hastanın el ayalarında ve ayak tabanlarında da çok sayıda küçük veziküler döküntü tespit ediliyor. Özellikle okul çağındaki çocuklarda hızlı bulaşan bu klinik tablonun patogenezinde rol oynayan etken mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Koksaki virüs
Açıklama: Oral kavitedeki ülserlere el ve ayaklardaki veziküllerin eşlik ettiği hastalık karakteristik olarak Koksaki virüslerin neden olduğu El-Ayak-Ağız hastalığıdır. Herpes virüsleri genellikle yalnızca mukozalarda veya ilişkili deri dermatomlarında lokalize kalırken, el ayası ve ayak tabanı tutulumu koksaki virüs enfeksiyonunun spesifik klinik imzasıdır. Bu tablo son derece bulaşıcı olup genellikle oral kavitede damak ve dili primer olarak hedefler.

**Soru 2 (ID: 5864de05-d43e-4331-81a2-9426fb9d71b1)**
Soru Kökü: Üç yaşında bir çocuk yüksek ateş, huzursuzluk, lenfadenopati ve beslenme reddi şikayetleriyle kliniğe başvuruyor. Yapılan intraoral muayenede, sadece posterior farinkste değil, tüm ağız mukozasına yayılmış eritem ve bilhassa diş etlerinde marjinal şişlik ile karakterize rüptüre veziküller tespit ediliyor. Bu vakadaki etiyolojik majör enfeksiyöz ajan aşağıdakilerden hangisidir?
Doğru Şık (D): DNA virüsü olan Herpes Simpleks Virüsü-1
Açıklama: 6 ay ile 5 yaş arası çocuklarda yüksek ateş, sistemik inflamasyon ve tüm oral kaviteyle beraber bilhassa diş etlerinde (gingiva) şiddetli kızarıklık, şişlik ve veziküller ile seyreden patoloji Primer Herpetik Gingivostomatittir. Bu tablonun etkeni Herpes Simpleks Virüsü-1'dir (HSV-1). Eğer lezyon diş etini tutmadan sadece yumuşak damak ve tonsillere lokalize kalsaydı, Koksaki virüs kaynaklı Herpanjina düşünülmeliydi.

---

### ÇİFT 15 (Benzerlik: 0.81)

**Soru 1 (ID: b2daf790-6e66-49e8-83c0-88d2865fb64e)**
Soru Kökü: İki aylık erkek bebeğin intraoral muayenesinde sert ve yumuşak damak sınırında orta hattan uzak lokalizasyonda küçük, beyaz renkli keratin dolu kistler tespit edilmiştir. Bu lezyonların köken aldığı doku aşağıdakilerden hangisidir?
Doğru Şık (E): Damak tükürük bezleri epiteli
Açıklama: Sert ve yumuşak damak sınırında görülen Bohn nodülleri odontojenik kökenli değildir ve damak tükürük bezlerinin epitelinden köken alır. Alveolar krette görülen infant gingival kistleri dental lamina (Serre) artığı iken, orta hatta yerleşen Epstein incileri palatal inklüzyon kistleridir.

**Soru 2 (ID: a3f33e5e-210e-4121-8f0c-95185903d649)**
Soru Kökü: Yenidoğan bir bebeğin ağız içi muayenesinde, damak orta hattında (palatal rafe üzerinde) bilateral palatal rafların embriyolojik kaynaşması sırasında hapsolmuş epitel hücrelerinden köken alan, inci benzeri küçük sarımsı beyaz kistik kabartılar izleniyor. Hiçbir cerrahi tedavi gerektirmeyen bu benign inklüzyon lezyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Epstein incisi
Açıklama: Epstein incileri, yenidoğanlarda doğrudan palatal orta hat üzerinde yerleşen ve embriyolojik epitel inklüzyonu sonucu oluşan keratin dolu kistlerdir. Bohn nodülleri ektopik tükürük bezlerinden gelişir ve damak lateralinde (sert/yumuşak damak sınırı) yerleşirken; yenidoğanın gingival kistleri dental lamina (Serre) artığı kaynaklı olup alveoler kret üzerinde görülür.

---

### ÇİFT 16 (Benzerlik: 0.81)

**Soru 1 (ID: b9d2e604-5fe5-4252-a9a9-f58907f72aa1)**
Soru Kökü: Akut pulpal inflamasyon tablosunun resolüsyona (tam iyileşmeye) ulaşamadığı durumlarda pulpanın kronik pulpitis evresine geçtiğini gösteren ve geri dönüşümsüz süreci başlatan karakteristik histolojik doku değişimi aşağıdakilerden hangisidir?
Doğru Şık (D): Lezyon sahasındaki nötrofillerin yerini mononükleer hücrelerin alması ve skar dokusu gelişimi
Açıklama: Uzun süreli travma veya şiddetli akut inflamasyonun kontrol altına alınamadığı durumlarda, ortamdaki başlangıç hücreleri olan nötrofillerin yerini yavaş yavaş lenfosit, makrofaj ve plazma hücrelerinden oluşan mononükleer hücreler alır. Bu hücresel değişime ek olarak, fonksiyonunu yitirmiş odontoblastların ve bağ dokusunun yerini yoğun kollajen içeren onarım (skar) dokusunun alması, kronik pulpitin temel histolojik markerıdır. Bu noktadan sonra doku iyileşmez, inflamasyon devam ederse pulpa nekrozu kaçınılmaz hale gelir.

**Soru 2 (ID: c3ea3561-45fc-4ba8-b78d-dccae38ad5d3)**
Soru Kökü: Bir pulpa inflamasyonunun akut evreden kronik evreye geçişini belirleyen en kritik histopatolojik değişim aşağıdakilerden hangisidir?
Doğru Şık (B): Nötrofillerin yerini mononükleer inflamatuar hücrelerin alması
Açıklama: Akut inflamasyon süreçlerinde sahada baskın olan hücre grubu nötrofiller iken, travmanın uzaması durumunda ortamda makrofaj ve lenfosit gibi mononükleer hücrelerin hakim olması kronikleşmenin temel histolojik göstergesidir. En güçlü çeldirici olan aşırı granülasyon dokusu oluşumu, kronikleşmenin sadece bir formunda (pulpa polibi) spesifik olarak görülür, genel kural değildir. İnflamasyonun hücresel karakter değişimi doku yıkım patojenini doğrudan değiştirir.

---

### ÇİFT 17 (Benzerlik: 0.80)

**Soru 1 (ID: d73266a3-91f9-4257-980e-c6da4ef1840b)**
Soru Kökü: Gelişimsel kökenli sendromlar spesifik diş sayı anomalilerine eşlik eder. Aşağıdaki sendromlardan hangisinin diş fazlalığı (hiperdonti / süpernümerer diş) tablosu ile ilişkili olması **beklenmez**?
Doğru Şık (B): Böök sendromu
Açıklama: Böök sendromu (PHC sendromu), klinikte premolar diş eksiklikleri başta olmak üzere hipodonti, hiperhidroz ve saç anomalileri ile karakterizedir. Cleidocranial dysplasia, Fabry-Anderson, Klippel-Trenaunay-Weber ve Leopard sendromları ise literatürde net bir biçimde hiperdonti sendromları spektrumunda sınıflandırılır.

**Soru 2 (ID: 705349a2-6bc0-4955-af9a-3ed3ed546156)**
Soru Kökü: Aşağıdaki sendromlardan hangisi dental arktaki diş sayısında artış (hiperdonti/süpernümerer diş) tablosuna neden olan sistemik durumlardan biri **değildir**?
Doğru Şık (B): Turner sendromu
Açıklama: Turner sendromu, dental gelişimde sıklıkla diş eksikliğine (hipodonti) neden olan bir genetik sendromdur. Cleidocranial displazi, Gardner, Apert ve Crouzon sendromları ise dental folikülün aşırı aktivitesine veya ayrılmasına bağlı olarak hiperdonti (süpernümerer diş) sendromları listesinde yer alırlar. Sendromik dental sayı farklılıkları embriyojenik yolakların spesifik uyarımıyla ilgilidir.

---

### ÇİFT 18 (Benzerlik: 0.80)

**Soru 1 (ID: dfea229d-23dc-4e78-9bf6-71be35a8364f)**
Soru Kökü: Dilin dorsal yüzeyinde yerleşim gösteren ve Treponema pallidum enfeksiyonunun geç dönem komplikasyonu olarak karsinom gelişme riski oldukça yüksek olan lökoplaki varyantı aşağıdakilerden hangisidir?
Doğru Şık (A): Sifilitik lökoplaki
Açıklama: Sifilitik lökoplaki, sifilizin geç evresinde dil dorsumunda izlenen ve skuamöz hücreli karsinom gelişme riski yüksek olan premalign bir lezyondur. Tüylü lökoplaki (Hairy leukoplakia) ise EBV kaynaklı olup prekanseröz değildir.

**Soru 2 (ID: 0e2002dd-c004-44b6-bd5a-2cec3115560c)**
Soru Kökü: Treponema pallidum enfeksiyonunun spesifik bir döneminde dil dorsumunda gelişen ve otonom hücresel displazi barındırdığı için çok yüksek düzeyde Skuamöz Hücreli Karsinom gelişimi potansiyeline sahip olan enfeksiyöz zeminli premalign lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Sifilitik lökoplaki
Açıklama: Sifilitik lökoplaki, Treponema pallidum'un neden olduğu sifiliz enfeksiyonunun tersiyer (3.) evresinde dil sırtında (dorsumunda) meydana gelen ve yüksek oranda skuamöz hücreli karsinoma dönüşüm riski (premalign potansiyel) taşıyan atipik bir lökoplaki formudur. Condyloma lata sekonder sifilizde izlenir ancak displastik lökoplaki karakteri taşımaz.

---

### ÇİFT 19 (Benzerlik: 0.80)

**Soru 1 (ID: fa76794c-cef9-4415-b569-e676d9e4d30a)**
Soru Kökü: Ağız mukozasının verrüköz karsinomu ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Uzak dokulara ve lenf nodlarına metastaz potansiyeli çok yüksektir.
Açıklama: Verrüköz karsinom, skuamöz hücreli karsinomun iyi diferansiye bir varyantıdır ve klasik SCC'ye göre hücresel atipisi daha az, metastaz potansiyeli belirgin şekilde daha düşüktür. Ekzofitik, parmaksı çıkıntılar oluşturan bu yavaş büyüyen tümör özellikle tütün emen ileri yaş erkeklerde yanak ve alveolar mukozada izlenir. Tedavisi öncelikli olarak cerrahidir.

**Soru 2 (ID: 7b05db9c-8cde-4fee-9e1f-5cce6d9635c7)**
Soru Kökü: Baş boyun bölgesi maligniteleri arasında spesifik davranış paternine sahip olan verrüköz karsinom ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Sıklıkla genç yetişkin kadın hastalarda agresif ilerleme gösterir.
Açıklama: Verrüköz karsinom, genç kadınlarda değil, tipik olarak 60 yaş üstü ve genellikle uzun süreli tütün emme alışkanlığı olan erkeklerde izlenen, çok yavaş seyirli, düşük metastatik potansiyele sahip bir kanserdir. Alveolar kret ve yanak mukozasında beyaz, karnabahar benzeri ekzofitik büyüme yapar. Prognozu mükemmele yakın olup cerrahi yeterlidir, agresif seyir en az beklenen özelliğidir.

---

### ÇİFT 20 (Benzerlik: 0.80)

**Soru 1 (ID: db53f825-4431-406b-b80a-14170d3fb9f4)**
Soru Kökü: Klinik muayenede alveolar mukoza üzerinde sarımsı-kırmızı renkli, fokal bir yumuşak doku kabarıklığı gözlenen hastanın radyografisinde ilişkili dişte apikal radyolüsensi saptanmıştır. Patolojik terminolojide 'Parulis' (Gumboil) olarak adlandırılan bu lezyonun doku karşılığı aşağıdakilerden hangisidir?
Doğru Şık (E): Perfore olan apikal sinüsün açılma yerindeki granülasyon dokusu
Açıklama: Parulis, bir periapikal apsenin alveolar kemiği erode edip (fistülize olup) mukoza yüzeyine açıldığı bölgede, kronik drenaja reaksiyon olarak gelişen fokal granülasyon dokusu nodülüdür. En güçlü çeldirici olan kistik formasyon epitel kökenlidir ve kemik içinde (periapikal) gelişir, mukoza yüzeyindeki bu yumuşak reaktif büyüme değildir. Bu lezyon enfeksiyon kaynağı kurutulduğunda spontan olarak fibrozise gider veya iyileşir.

**Soru 2 (ID: 1134a9fc-52cc-435d-8530-42225bc0af08)**
Soru Kökü: Oklüzal derin çürüğü olan devital bir alt molar dişin apikal kök ucunda gelişen likefaksiyon nekrozunun, kortikal kemiği erode ederek submukozal alana açılması sonucu diş eti üzerinde sarımsı-kırmızı renkli, granülamatöz ve pürülan içerikli bir deşarj nodülü oluşmuştur. Epitel dışı (submukozal) kökenli olan bu inflamatuar lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Parulis
Açıklama: Parulis (diş eti çıbanı), enfekte devital dişlerin periapikal apsesinin kortikal kemiği aşarak oral mukozaya fistülize olduğu çıkış noktasında oluşan pürülan ve granülamatöz nodüldür. Lezyonun rengi kendi epitel hiperkeratozundan değil, alttaki pürülan/enflamatuar yıkımın yansımasından kaynaklanır. Piyojenik granülom ise lokal irritanlara (plak/diş taşı) bağlı gelişen, endodontik kökenli olmayan vasküler proliferasyondur.

---

### ÇİFT 21 (Benzerlik: 0.80)

**Soru 1 (ID: 398e7d64-5923-4fb6-978e-e3f2e35ce187)**
Soru Kökü: Gelişimsel olarak diş eksikliğine (hipodonti) ve fazlalığına (hiperdonti) neden olan çeşitli sistemik sendromlar bulunmaktadır. Aşağıdaki sendromlardan hangisinin diş eksikliği (hipodonti) ile karakterize bir klinik tablo oluşturması **beklenmez**?
Doğru Şık (C): Gardner sendromu
Açıklama: Crouzon, Down, Ehlers-Danlos ve İncontinentia pigmenti sendromları, gelişimsel anomali tablolarında hem hipodonti hem de hiperdonti etyolojisinde ortak olarak listelenen sendromlardır. Gardner sendromu ise sadece osteomlar, intestinal polipler ve hiperdonti (süpernümerer dişler/gömülü dişler) ile ilişkilidir, hipodonti spektrumunda yer almaz.

**Soru 2 (ID: d73266a3-91f9-4257-980e-c6da4ef1840b)**
Soru Kökü: Gelişimsel kökenli sendromlar spesifik diş sayı anomalilerine eşlik eder. Aşağıdaki sendromlardan hangisinin diş fazlalığı (hiperdonti / süpernümerer diş) tablosu ile ilişkili olması **beklenmez**?
Doğru Şık (B): Böök sendromu
Açıklama: Böök sendromu (PHC sendromu), klinikte premolar diş eksiklikleri başta olmak üzere hipodonti, hiperhidroz ve saç anomalileri ile karakterizedir. Cleidocranial dysplasia, Fabry-Anderson, Klippel-Trenaunay-Weber ve Leopard sendromları ise literatürde net bir biçimde hiperdonti sendromları spektrumunda sınıflandırılır.

---

### ÇİFT 22 (Benzerlik: 0.80)

**Soru 1 (ID: 25822981-deae-4f60-a53b-11d383cc9654)**
Soru Kökü: Hareketli protez kullanan hastaların damak mukozasında multipil eritemli, kaldırım taşı benzeri projeksiyonlarla karakterize olan ve kendisi malignite riski taşımayan damağın papiller hiperplazisi (palatal papillomatozis) lezyonunun, sistemik olarak birliktelik gösterebildiği genetik sendromlar aşağıdakilerin hangisinde doğru olarak verilmiştir?
Doğru Şık (E): Darier hastalığı ve Cowden sendromu
Açıklama: Sert damakta kronik protez irritasyonu veya fungal etkileşimlere bağlı olarak reaktif gelişen palatal papillomatozis lezyonları genellikle izole patolojiler olup kanserleşme riski taşımazlar. Ancak sistemik olarak çoklu doku hamartomlarıyla seyreden Cowden sendromu ve mukokütanöz bir bozukluk olan Darier hastalığı ile belirgin bir klinik birliktelik gösterebilirler. Papillon-Lefevre sendromu ise palatal lezyonlardan ziyade el-ayak hiperkeratozu ve agresif erken periodontitis ile karakterizedir.

**Soru 2 (ID: 0717fa43-b510-45cd-9fdb-af5c73a3ba2f)**
Soru Kökü: Damağın papiller hiperplazisi (palatal papillomatozis) lezyonu, sıklıkla uyumsuz üst total protez kullanımına sekonder gelişen reaktif bir doku proliferasyonudur. Ancak literatürde bu lezyonun spesifik kalıtsal ve genetik sendromlarla da birliktelik gösterdiği bilinmektedir. Aşağıdaki sendromlardan hangileri palatal papillomatozis ile birlikte görülebilir?
Doğru Şık (C): Darier Hastalığı ve Cowden sendromu
Açıklama: Damağın papiller hiperplazisi genellikle lokal travma kökenli olsa da; genetik bir diskeratoz olan Darier hastalığı (foliküler keratozis) ve PTEN gen mutasyonuyla seyreden, multiple hamartomlar barındıran Cowden sendromu olgularında spesifik sendromik bir oral bulgu olarak palatal mukozada yaygın papillomatöz büyümeler şeklinde tabloya eşlik eder.

---

### ÇİFT 23 (Benzerlik: 0.80)

**Soru 1 (ID: a3f33e5e-210e-4121-8f0c-95185903d649)**
Soru Kökü: Yenidoğan bir bebeğin ağız içi muayenesinde, damak orta hattında (palatal rafe üzerinde) bilateral palatal rafların embriyolojik kaynaşması sırasında hapsolmuş epitel hücrelerinden köken alan, inci benzeri küçük sarımsı beyaz kistik kabartılar izleniyor. Hiçbir cerrahi tedavi gerektirmeyen bu benign inklüzyon lezyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Epstein incisi
Açıklama: Epstein incileri, yenidoğanlarda doğrudan palatal orta hat üzerinde yerleşen ve embriyolojik epitel inklüzyonu sonucu oluşan keratin dolu kistlerdir. Bohn nodülleri ektopik tükürük bezlerinden gelişir ve damak lateralinde (sert/yumuşak damak sınırı) yerleşirken; yenidoğanın gingival kistleri dental lamina (Serre) artığı kaynaklı olup alveoler kret üzerinde görülür.

**Soru 2 (ID: 48123417-1c07-4838-a40c-dbe381f2a62b)**
Soru Kökü: Sert ve yumuşak damak sınırında, anatomik olarak lateral kesimlerde yerleşen, ektopik minör damak tükürük bezleri epitelinin kistleşmesi sonucu oluşan içi keratin dolu gelişimsel pediatrik lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Bohn nodülleri
Açıklama: Bohn nodülleri, inklüzyon kökenli olmayan, spesifik olarak minör tükürük bezi epitel artıklarından gelişen ve damak lateralinde yer alan pediatrik kistlerdir. Epstein incileri orta hatta embriyolojik füzyon hattında yer alan inklüzyon kistleriyken; yenidoğan gingival kisti dental lamina (Serre) artığından gelişerek alveol kretinde izlenir.

---

### ÇİFT 24 (Benzerlik: 0.80)

**Soru 1 (ID: 60ccb7a8-169f-435a-9dc5-6449d72c2b2e)**
Soru Kökü: Gingiva hiperplazisine yol açan sistemik ilaç grupları incelendiğinde, aşağıdaki ilaçlardan hangisinin bu yan etkiye neden olan moleküller arasında olması **beklenmez**?
Doğru Şık (D): Amoksisilin
Açıklama: Gingival hiperplaziye en sık neden olan ilaç grupları arasında antikonvülzanlar (karbamazepin, fenitoin, valproat vb.), kalsiyum kanal blokerleri (amlodipin, nifedipin, verapamil vb.), bağışıklık baskılayıcılar (siklosporin), makrolid grubu antibiyotikler (eritromisin) ve oral kontraseptifler yer alır. Geniş spektrumlu bir beta-laktam antibiyotik olan amoksisilin, gingival bağ dokusu proliferasyonunu tetikleyen bu özgün yan etki profiline sahip farmakolojik ajanlar arasında bulunmaz.

**Soru 2 (ID: dc3d86ac-02c0-4358-8738-a58085b25f85)**
Soru Kökü: Aşağıdaki farmakolojik ajanlardan hangisinin kullanımına bağlı olarak hastada gingival hiperplazi gelişimi **beklenmez**?
Doğru Şık (D): Amoksisilin
Açıklama: Gingival hiperplazi temel olarak antikonvülzanlar, kalsiyum kanal blokerleri (Amlodipin vb.), Siklosporin, Eritromisin ve oral kontraseptifler tarafından tetiklenir. En yaygın kullanılan antibiyotiklerden biri olan Amoksisilin bu yan etki spektrumunda yer almaz. Eritromisin ise makrolid grubundan bir antibiyotik olmasına rağmen hücresel kalsiyum metabolizmasına etkisiyle bu tabloya nadiren yol açabilen spesifik bir istisnadır.

---

### ÇİFT 25 (Benzerlik: 0.80)

**Soru 1 (ID: 407ef47d-2998-46be-a209-23a451b45c10)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) kriterlerine göre, klinik veya patolojik anlamda başka hiçbir spesifik hastalık (liken planus, friksiyonel keratoz vb.) veya etken ile tanımlanamayan, hücresel displazi ve malign transformasyon riski barındıran 'kazınamayan' idiyopatik beyaz plaklar genel olarak hangi isimle adlandırılır?
Doğru Şık (C): Lökoplaki
Açıklama: Lökoplaki, WHO tarafından bir dışlama tanısı olarak, başka hiçbir reaktif, enfeksiyöz veya genetik tanımla uyumlu olmayan kazınamayan beyaz lezyonlar için kullanılır. Löködem kazınamayan ancak gerdirilince silinen bir varyasyonken; lökoplaki otonom bir hücresel hiperkeratoz olup %5-25 aralığında Skuamöz hücreli karsinoma dönüşme riski taşıyan preneoplastik bir formattır.

**Soru 2 (ID: df955b9f-bd42-456c-b71b-96ba02eb907c)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından 'kazınamayan ve klinik ya da patolojik anlamda başka bir hastalık olarak karakterize edilemeyen beyaz renkli yama ya da plak' şeklinde tanımlanan, %5-25 oranında karsinoma dönüşüm riski taşıyan lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, spesifik bir patolojik tanıdan ziyade kazınamayan beyaz plakları tanımlayan klinik bir terimdir ve premalign potansiyele sahiptir. Psödomembranöz kandidiyazis ise mukozadan kazınabilen beyaz plak formasyonudur.

---

### ÇİFT 26 (Benzerlik: 0.79)

**Soru 1 (ID: 18a30be3-e868-44c1-b254-805e12225789)**
Soru Kökü: Sekiz yaşındaki hastanın ağız içi muayenesinde sağ maksiller santral kesici dişin kronunun normalden oldukça geniş ve ortasında çentikli olduğu saptanmıştır. Radyolojik değerlendirmede bu bölgede çift kron yapısına rağmen tek kök izlenmektedir. Hastanın maksiller dental arkında fizyolojik sayımdan bir eksik veya fazla diş **bulunmamaktadır**. Bu anomali aşağıdakilerden hangisidir?
Doğru Şık (E): Geminasyon
Açıklama: Geminasyon, tek bir diş tomurcuğunun gelişimi sırasında ikiye bölünmeye çalışması (şizodonti) sonucu çift kron görüntüsü oluşturmasıdır ve arktaki diş sayısında eksiklik yaratmaz (diş sayısı normaldir). Füzyon ise iki farklı diş tomurcuğunun birleşmesidir ve dental arktaki diş sayımında bir adet eksiklik saptanması ile klinikte geminasyondan net olarak ayrılır.

**Soru 2 (ID: 3ff0bd68-fb2e-4758-8f86-16fa1762a364)**
Soru Kökü: Embriyolojik dönemde iki ayrı komşu diş tomurcuğunun mine veya dentin seviyesinde birleşerek tek bir büyük diş formu oluşturması durumudur. Hastanın klinik ve radyografik muayenesinde bu genişlemiş diş formuna ek olarak, diş kavisinde toplam diş sayısının eksik olduğu (kaviste bir dişin noksan olduğu) tespit edilmiştir. Tarif edilen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (C): Füzyon
Açıklama: Füzyon, komşu iki diş embriyosunun dentin seviyesinde birleşmesidir ve bu süreç iki farklı kökün entegrasyonuyla oluştuğu için arkta diş sayısında bir eksilme izlenir. Geminasyonda tek bir germ ikiye bölünmeye çalıştığı için kuron geniş izlense de toplam diş sayısı normaldir. Konkresens ise dişlerin gelişim sonrasında sadece sement seviyesinde birleşmesidir.

---

### ÇİFT 27 (Benzerlik: 0.79)

**Soru 1 (ID: 19a9c59e-6001-4599-90f2-fc3a6796e3c8)**
Soru Kökü: Nörokutanöz viral enfeksiyonların patofizyolojisinde latent fazdaki replikasyon alanları karakteristik farklar gösterir. Ramsay Hunt sendromu ve perioral rekürren Herpes Simpleks enfeksiyonlarında etken virüslerin sessiz formda beklediği gangliyonlar sırasıyla aşağıdakilerden hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): Genikulat gangliyon / Trigeminal gangliyon
Açıklama: Ramsay Hunt sendromunda Varicella Zoster Virüsü (VZV) patognomonik olarak 7. kraniyal sinirin duyu merkezi olan genikulat gangliyonda latent kalır ve burada reaktive olur. Rekürren oral Herpes Simpleks Virüsü (HSV) ise birincil enfeksiyonun ardından retrograt taşınarak bölgesel trigeminal gangliyona yerleşir. Bu iki viral ailenin anatomik replikasyon sahasındaki farklılık, yarattıkları klinik sendromların (yüz felci vs orofasiyal ülser) sınırlarını belirler.

**Soru 2 (ID: 7bf04f7a-5d50-4bc2-88ca-3bc46b35ef11)**
Soru Kökü: 55 yaşında kadın hasta, dış kulak yolunda ağrılı veziküler döküntüler, şiddetli boğaz ağrısı ve yüzünün sol tarafında motor kayıp (yüz felci) ile kliniğe başvuruyor. Muayenede dilin ön 2/3'lük kısmında tat duyusunun tamamen kaybolduğu saptanıyor. Bu özgün klinik triadı oluşturan Ramsay-Hunt sendromunun etiyolojik virüsü aşağıdakilerden hangisidir?
Doğru Şık (B): Varisella zoster virüsü
Açıklama: Ramsay-Hunt sendromu, çocukluk çağında su çiçeği etkeni olarak alınan Varisella Zoster Virüsünün (Herpes Zoster) yıllar sonra fasiyal sinir ganglionunda (Ganglion geniculi) reaktivasyonu sonucu ortaya çıkan özgün bir zona formudur. Fasiyal sinirin korda timpani dalını tutması tat kaybına, motor dalını tutması yüz felcine ve kulak komşuluğu dış kulak yolu veziküllerine yol açar. HSV-1'de trigeminal sinir tutulumu ağırlıkta olup motor yüz felci ve spesifik kulak vezikülleri beklenmez.

---

### ÇİFT 28 (Benzerlik: 0.79)

**Soru 1 (ID: 6941e1db-7450-42d3-a67c-23d69c4247d1)**
Soru Kökü: Kronik hiperplastik pulpit (Pulpa polibi) ile ilgili aşağıda verilen klinik ve patolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Dişin üzerini örtecek şekilde basınçla şiddetli ağrı semptomları verir.
Açıklama: Pulpa polibi, pulpa odasının geniş çapta açığa çıktığı durumlarda dokunun dışarı doğru prolifere olmasıdır ve ağız boşluğuna sürekli drenaj sağladığı için kapalı alan inflamasyonlarında görülen şiddetli ağrı bu tabloda izlenmez, lezyon genelde asemptomatiktir. En güçlü çeldirici olan 'irreversibl olma' durumu doğrudur; diş semptomsuz olsa bile pulpa canlılığı fizyolojik sınırların çok dışındadır ve ekstirpasyon/çekim gerektirir. Ağrısız karakteri tanı koydurucu temel detaylardan biridir.

**Soru 2 (ID: eef67af3-7d0c-4fbb-9994-f63534f7c4cb)**
Soru Kökü: Akut pulpitin klinik ve histopatolojik özellikleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Lezyon bölgesindeki stromada yoğun mononükleer inflamatuar hücre infiltrasyonu izlenir.
Açıklama: Akut pulpitin histopatolojik tablosunda lezyon bölgesine hakim olan enflamatuar hücre grubu mononükleer hücreler değil, yoğun nötrofillerdir. Lezyon alanında lenfosit, makrofaj ve plazma hücresi gibi mononükleer hücre infiltrasyonu, akut inflamasyonun düzelmediği ve sürecin kronik pulpitis aşamasına geçtiği durumlarda izlenir. Pulpal abse gelişimi de, akut vakalarda nötrofillerin dokuyu eritmesine bağlı gelişen likefaksiyon nekrozunun karakteristik bir sonucudur.

---

### ÇİFT 29 (Benzerlik: 0.79)

**Soru 1 (ID: 999e48aa-15ac-425e-af3d-ada1fe6c9a31)**
Soru Kökü: Sigara içim şekillerinin oral mukoza üzerindeki etkileri bölgesel farklılıklar yaratır. Tütünün ateşli yanan kısmının dudaklar arasında ağız içine dönük (ters) olarak kullanılması alışkanlığında, özellikle sert damak bölgesinde izlenen lezyonun (Reverse smokers palatal lezyonu) en kritik patolojik önemi aşağıdakilerden hangisidir?
Doğru Şık (E): Yüksek oranda premalign (kanserleşme) potansiyeline sahip olması
Açıklama: Normal sigara kullanımında damakta görülen nikotinik stomatit (kırmızı noktalı beyaz damak) sıklıkla iyi huylu bir reaktif yanıttır, ancak tütünün korlu kısmının ağız içine alındığı 'ters sigara içiciliği' palatal mukozada yüksek ısı ve yoğun karsinojenden dolayı şiddetli hücresel mutasyonlara yol açar. Bu nedenle reverse smokers palatal lezyonu doğrudan premalign bir lezyon kabul edilir. Yalnızca friksiyonel faktörleri barındıran basit lökoplakilerden çok daha agresiftir.

**Soru 2 (ID: 9923121c-f772-41c0-8a53-105429120fb9)**
Soru Kökü: Uzun yıllardır sigara kullanan bir hastanın sert damak mukozasında izlenen klasik nikotinik stomatit (stomatitis nicotina) ile, ters sigara içiciliğine bağlı gelişen revers smokers palatal lezyonu arasındaki en kritik patolojik ayrım aşağıdakilerden hangisidir?
Doğru Şık (C): Klasik nikotin stomatitinin minör tükürük bezi kanallarının malignite içermeyen reaktif inflamasyonu olması, ters sigara içiminin ise epitelde geri dönüşümsüz displazi yapması
Açıklama: Klasik nikotinik stomatit, sigara dumanının yaydığı ısıya bağlı olarak damaktaki minör tükürük bezlerinin duktuslarında gelişen benign reaktif inflamasyondur ve karsinom potansiyeli kesinlikle yoktur. Buna karşın ters sigara içiciliğinde yanan ateşin doğrudan mukozaya teması (termal/kimyasal şok) minör bezleri aşarak doğrudan skuamöz epitelde masif displazi ve 5 yıldızlı yüksek karsinogenez yaratır.

---

### ÇİFT 30 (Benzerlik: 0.79)

**Soru 1 (ID: e746f139-8901-4804-98bb-8e0f56e358c4)**
Soru Kökü: Birinci dekatta (çocuk yaşta) posterior mandibulada izlenen; miksoid yapıda, gelişmekte olan diş papillası-benzeri doku kütlesinden oluşan ve bu miksoid stroma topağının çevresini tamamen dıştan saran kolumnar veya küboidal yapıdaki mine epiteli tabakası ile karakterize odontojenik neoplazi aşağıdakilerden hangisidir?
Doğru Şık (A): Primordiyal odontojenik tümör
Açıklama: Primordiyal odontojenik tümör, 1. ve 2. dekatta sık görülen ve histopatolojik olarak primitif 'diş papillası' benzeri miksoid mezenkimal bir bağ dokusu kütlesi ile bu kütlenin sadece yüzeyini sarmalayan, içine adalar halinde penetre olmayan dış kolumnar/kübik mine epiteli kılıfından oluşan özgün bir tablodur. Ameloblastik fibromda ise epitel bu stroma içine kordonlar ve adalar şeklinde gömülüdür (bilaminar zincirler); yüzeyel tek tabaka sınırlaması primordiyal tümörün imzasıdır.

**Soru 2 (ID: 6c217da5-63ab-40e2-9257-749e401cebcc)**
Soru Kökü: On dört yaşında bir erkek çocuk, mandibular molar bölgesinde diş sürme sorunları yaşayarak kliniğe gönderiliyor. Çekilen panoramik radyografide, gömülü diş üzerinde sınırları iyi izlenen uniloküler radyolüsen büyük bir kavite saptanıyor. Biyopsi materyalinde; embriyonik dental papillayı taklit eden yoğun mezenkimal doku stroma ile bu doku içinde dağılmış ikili (bilaminar) odontojenik epitel zincirleri görülüyor ancak diş minesine veya dentin dokusuna benzer sert madde (kalsifikasyon) seçilemiyor. Bu mikst odontojenik tümör için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom, hem epitel hem de spesifik ektomezenkimal doku (dental papilla) elementlerinin birlikte (mikst) neoplastik proliferasyonudur ve daha ileri yaştaki kompleks odontomaların immatür prekürsör lezyonu olarak görülebilir; bu nedenle henüz dentin veya mine sentezi yoktur. Epiteli ameloblastomla benzer olsa da, stroma yapısı matür bağ dokusu değil dental papilladır ve prognozu çok daha ılımlıdır.

---

### ÇİFT 31 (Benzerlik: 0.79)

**Soru 1 (ID: b33a24c0-efda-4437-a4f7-fda078450550)**
Soru Kökü: Tükürük bezi tümörleri arasında bilateral ve multifokal gelişme potansiyeli en yüksek olan, sıklıkla elli yaş üstü sigara içen erkeklerde özellikle parotis bezinin kuyruk kısmında izlenen benign lezyon aşağıdakilerden hangisidir?
Doğru Şık (B): Warthin tümörü
Açıklama: Warthin tümörü (papiller kistadenoma lenfomatozum) %10 oranında bilateral görülebilen, sigara içenlerde 8 kat artmış risk gösteren ve sadece parotiste yerleşen benign bir tümördür. Pleomorfik adenom en sık görüleni olsa da, bilateralitesi ve spesifik sigara-erkek ilişkisi Warthin'e özgü önemli bir ayırıcı noktadır.

**Soru 2 (ID: 3ec3236b-b272-4f43-ac6a-8c48d204a63e)**
Soru Kökü: Altmış beş yaşındaki, günde iki paket sigara içen erkek hasta, çene köşelerinde iki taraflı ağrısız şişlik şikayetiyle başvurmuştur. Yapılan incelemede kitlelerin bilateral parotis bezi kaynaklı olduğu saptanmış ve eksizyon kararı alınmıştır. Bu klinik tablodaki hastada en olası tanıyı destekleyen patolojik süreç aşağıdakilerden hangisidir?
Doğru Şık (D): Lenfoid stroma içinde çift sıralı onkositik epitelin izlenmesi
Açıklama: Warthin tümörü (papiller kistadenoma lenfomatozum) sigara içen yaşlı erkeklerde DAİMA parotiste yerleşen, bilateral ve multifokal olma ihtimali en yüksek tümördür. Histolojisinde lenfoid stroma ve germinal merkezler eşliğinde çift sıralı onkositik epitel izlenir.

---

### ÇİFT 32 (Benzerlik: 0.79)

**Soru 1 (ID: 70427019-25a8-470e-a1ea-27ba2fb9b7d9)**
Soru Kökü: 15 yaşında erkek hasta, dilinin giderek büyüdüğü ve ağzına sığmadığı şikayetiyle kliniğe başvuruyor. Klinik muayenede sadece dil dorsumunda değil, tüm oral kavite mukozasında yaygın, ağrısız, küçük nodüler lezyonlar saptanıyor. Hastanın sistemik öyküsünde tiroid medüller karsinomu nedeniyle opere edildiği öğreniliyor. Bu hastadaki makroglossi tablosuna yol açan temel histopatolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Mukozal nöromaların dil stromasına diffüz olarak infiltre olması
Açıklama: Tiroid medüller karsinomu ile sistemik birlikteliği olan patoloji Multipl Endokrin Neoplazi (MEN) Tip 2B'dir. Bu sendromda ağız kavitesine difüz olarak yayılan mukozal nöromalar dil stromasını da infiltre ederek dilde devasa bir organomegali (makroglossi) yaratır. Pleksiform nörofibrom kaskadı NF Tip 1'e, bağ dokusu replasmanı ise Duchenne Muskuler Distrofiye aittir. Medüller karsinom öyküsü ve oral kavitedeki jeneralize nodüler infiltrasyonlar, kütlesel büyümenin doğrudan nöromlara ait olduğunu izole eder.

**Soru 2 (ID: a222a09c-4f4b-4cd7-9e68-4a3185dc0f19)**
Soru Kökü: On sekiz yaşında erkek hasta, marfanoid vücut yapısı ve dilinde yaygın büyüme (makroglossi) şikayetiyle başvuruyor. Alınan insizyonel biyopside dil stromasını diffüz olarak infiltre eden mukozal nöroma hiperplazileri saptanıyor. Bu klinik bulgular ışığında hastada araştırılması gereken spesifik sendrom aşağıdakilerden hangisidir?
Doğru Şık (E): Multipl Endokrin Neoplazi Tip 2B
Açıklama: Tüm oral kaviteyle birlikte dil stromasını infiltre eden mukozal nöroma hiperplazisi, Multipl Endokrin Neoplazi (MEN) spektrumunda sadece MEN Tip 2B'ye özgü bir bulgudur ve makroglossi tablosuna yol açar. MEN 1 ve MEN 2A'da mukozal nöroma veya buna bağlı makroglossi izlenmez. Nörofibromatoziste ise lezyon pleksiform nörofibrom karakterindedir.

---

### ÇİFT 33 (Benzerlik: 0.79)

**Soru 1 (ID: 0085637f-0ccf-4427-804f-906cb46822fe)**
Soru Kökü: Gelişimsel, kalıtsal veya edinsel bir doku hiperplazisi sonucu dilin normal sınırların ötesinde büyümesi olarak tanımlanan makroglossinin epidemiyolojik olarak en sık karşılaşılan temel patofizyolojisi aşağıdakilerden hangisidir?
Doğru Şık (C): Vasküler malformasyonlar ve kas hipertrofisi
Açıklama: Konjenital ve herediter grupta makroglossinin en sık görülen temel hücresel nedeni endotelyal/lenfatik kanalların hamartomatöz proliferasyonu (vasküler malformasyonlar) ve kas dokusunun yapısal hipertrofisidir. Glikozaminoglikan birikimi (miksödem) kretenizme özgü spesifik ve metabolik bir nedendir, popülasyondaki en sık etiyoloji değildir. Vasküler boşlukların dil kas aralıklarını infiltre etmesi süngerimsi veya solid jeneralize bir organomegali ile sonuçlanır.

**Soru 2 (ID: eb9d1c30-2003-4762-9f09-170e9d28779f)**
Soru Kökü: Makroglossinin etiyolojisinde konjenital ve herediter faktörler önemli rol oynar. Buna göre, makroglossinin en sık görülen nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Vasküler malformasyonlar ve kas hipertrofisi
Açıklama: Makroglossi gelişiminin en sık karşılaşılan birincil nedenleri dokusal aşırı büyüme paterni gösteren vasküler malformasyonlar ve yapısal kas hipertrofileridir. Granülomatöz hastalıklar veya kistik kitleler de dilde büyümeye neden olabilse de bunlar konjenital temelden ziyade sekonder ve daha nadir gelişen nedenlerdir. Beckwith-Wiedemann sendromu veya Down sendromu gibi herediter tablolarda da bu yapısal doku artışları klinikte makroglossi olarak kendini gösterir.

---

### ÇİFT 34 (Benzerlik: 0.79)

**Soru 1 (ID: 7e522e10-4a32-4837-86e7-60e129b5645c)**
Soru Kökü: Çene kistlerinin kaynaklandığı epitel artıkları patogenezde kritik rol oynar. 
I. Odontojenik keratokist
II. Radiküler kist
III. Dentigeröz kist 
Bu üç kistin embriyolojik olarak sırasıyla Dental Lamina, Hertwig Kök Kılıfı ve İndirgenmiş Mine Epiteli kalıntılarından geliştiği düşünülürse, doğru eşleştirme aşağıdakilerin hangisinde verilmiştir?
Doğru Şık (D): I: Dental Lamina, II: Hertwig, III: Mine
Açıklama: Embriyolojik odontojenik kalıntılar çene kistlerine spesifiktir: Odontojenik keratokist dental lamina (Serres) kalıntısından, radiküler (periapikal) kist kök çevresindeki Hertwig kök kılıfı (Malassez) kalıntısından, dentigeröz kist ise sürememiş diş kuronu etrafındaki indirgenmiş mine epiteli artıklarından köken alır.

**Soru 2 (ID: aa3d5fb3-78d5-46a7-97d8-1c9d5541bd53)**
Soru Kökü: Odontojenik epitel artıkları, çene kemiklerinde gelişen kistlerin kökenini oluşturur. Buna göre Hertwig epitel kök kılıfı artıklarından (Malassez epitel artıkları) köken alan kist aşağıdakilerden hangisidir?
Doğru Şık (C): Radiküler kist
Açıklama: Diş kök gelişimi sırasında rol alan Hertwig epitel kök kılıfının artıkları olan Malassez epitel kalıntıları, periodontal aralıkta bulunur ve pulpa enfeksiyonlarına (apikal periodontitis) bağlı inflamatuar sitokinlerin uyarısıyla prolife olarak radiküler (periapikal) kisti oluşturur. Dentigeröz kist mine organı (indirgenmiş mine epiteli) artıklarından köken alırken; odontojenik keratokist, lateral periodontal ve glandüler odontojenik kistler Serres epitel artıklarından (dental lamina) gelişir.

---

### ÇİFT 35 (Benzerlik: 0.78)

**Soru 1 (ID: 3b2814f3-eef3-4ca1-b7da-7c0b0d933ba0)**
Soru Kökü: Kronik periapikal inflamasyonun etkisiyle Malassez epitel artıklarının prolifere olması sonucu oluşan radiküler kistlerin epitel hücreleri üzerinde sıklıkla izlenen lineer, lameller kalsifikasyon odaklarına ne ad verilir?
Doğru Şık (A): Rushton cisimleri
Açıklama: Periapikal (radiküler) kistlerin non-keratinize skuamöz epitel döşemesi üzerinde izlenen, lineer veya lameller yapıda olabilen karakteristik kalsifikasyon odaklarına Rushton cisimleri adı verilir. Serres artıkları dental laminaya ait epitel kalıntılarıdır ve odontojenik tümör gelişiminde rol alırken, radiküler kistler kök kılıfı kalıntıları olan Malassez epitel artıklarından köken alarak büyürler. Bu kistlerin tedavisi ilgili dişin kök kanalı tedavisinin yanı sıra lezyonun cerrahi eksizyonudur.

**Soru 2 (ID: 06d90c4f-854a-43bb-913d-c51de5754aa3)**
Soru Kökü: Radiküler kistlerin epitel katmanı içinde bazen sekretuvar aktivite sonucu oluşan, mikroskop altında lineer (doğrusal), yuvarlak şekilli veya saç tokası benzeri lameller kalsifikasyonlar şeklinde izlenen spesifik yapılar aşağıdakilerden hangisidir?
Doğru Şık (C): Rushton cisimleri
Açıklama: Rushton cisimcikleri, radiküler kistlerin yüzeyini döşeyen inflamatuar epitel içerisinde izlenen eozinofilik, lameller ve kalsifiye yapılardır; kist epitelinin salgı ürünlerinden kaynaklandığı düşünülür. Verokay cisimleri nöral kökenli schwannomlarda palizatlanan çekirdeklerdir, keratin incileri ise SCC'de skuamöz diferansiyasyon göstergesidir. Rushton cisimleri çene patolojisinde sadece inflamatuar odontojenik kistlerde aranır.

---

### ÇİFT 36 (Benzerlik: 0.78)

**Soru 1 (ID: 67d8c343-c82f-446d-aed5-789a34b35e95)**
Soru Kökü: Gelişimsel bir anomali olan dens evaginatus ile ilgili olarak aşağıdakilerden hangisi doğrudur?
Doğru Şık (D): Oklüzal yüzeyin merkezinde pulpa uzantısı içeren sivrileşme ile seyreder
Açıklama: Dens evaginatus, oklüzal yüzeyin merkezinde anormal bir tüberkül (sivrileşme) ile karakterizedir ve sıklıkla premolar dişleri bilateral olarak etkiler. Ekstra tüberkülün içine doğru pulpa uzantısı bulunduğu için travma veya oklüzal aşınma durumlarında direkt pulpa açılımı ve nekrozu riski çok yüksektir. Lingual pitin içeri girmesi dens invaginatustur.

**Soru 2 (ID: 4f682b0e-52e8-4166-8631-30c963410b4b)**
Soru Kökü: Dens evaginatus, diş kuronundan oklüzal düzleme doğru pulpa uzantısı içeren konik formda ekstra bir tüberkül çıkıntısıdır. Bu gelişimsel anomali ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayenede sıklıkla çenede tek taraflı olarak (ünilateral) saptanır.
Açıklama: Dens evaginatus lokalize bir gelişim defekti olmasına karşın klinik muayenelerde çoğunlukla genetik embriyolojik sekansa bağlı olarak her iki çene yarısında bilateral (çift taraflı) izlenmesiyle karakterizedir. Premolarların oklüzalinde gelişen bu yapı, çiğneme kuvvetleri veya atravmatik kapanış teması ile kolayca kırılarak pulpada irreverzibl inflamasyona yol açar. Tek taraflı görülme paterni istisnadır.

---

### ÇİFT 37 (Benzerlik: 0.78)

**Soru 1 (ID: 9724648d-bddc-4600-a6a1-9c6bd5bdf911)**
Soru Kökü: Diş hekimliği pratiğinde eldiven kullanmama veya bariyer yetersizliği sonucu, enfekte tükürük ve vezikül sıvısının hekimin parmağına inoküle olmasıyla gelişen son derece ağrılı herpetik enfeksiyon tablosunun patofizyolojik giriş kapısı aşağıdakilerden hangisidir?
Doğru Şık (C): Parmak ucundaki mikro-travma alanlarından virüsün dermise penetre olması
Açıklama: Herpetik panaris (dolama), enfekte sıvının parmak cildindeki mikro-travma / sıyrık alanlarından doğrudan epitele penetre (inoküle) olmasıyla gelişir. Hücre içi litik döngü burada başlar ve son derece ağrılı, gergin veziküllerle karakterize lokalize bir enfeksiyona neden olur.

**Soru 2 (ID: 12c7064e-dac0-41a9-bc9f-7c2047d3a519)**
Soru Kökü: Yirmi sekiz yaşındaki asistan diş hekimi, koruyucu eldiven kullanmadan gerçekleştirdiği bir oral muayene işleminden üç gün sonra, işaret parmağının ucunda zonklayıcı tarzda şiddetli ağrı ve kümeleşmiş veziküller şikayetiyle başvuruyor. Etkenin anterograt yolla değil, doğrudan mikro-travma alanından inoküle olduğu belirleniyor. Bu hastadaki patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Herpetik Panaris (Dolama)
Açıklama: Diş hekimlerinde, enfekte tükürük veya vezikül sıvısının parmaktaki mikro-travma alanlarından inokülasyonu sonucu gelişen şiddetli ağrılı herpes enfeksiyonu formuna Herpetik Panaris (dolama) adı verilir. Bu durum, virüsün sinir gangliyonundan yüzeye inmesiyle değil, doğrudan mesleki temasla epitelyal bariyerin aşılmasıyla gelişir. Ramsay Hunt sinir tutulumudur, PHG ise çocuklarda sistemik görülen oral tablodur.

---

### ÇİFT 38 (Benzerlik: 0.78)

**Soru 1 (ID: b2daf790-6e66-49e8-83c0-88d2865fb64e)**
Soru Kökü: İki aylık erkek bebeğin intraoral muayenesinde sert ve yumuşak damak sınırında orta hattan uzak lokalizasyonda küçük, beyaz renkli keratin dolu kistler tespit edilmiştir. Bu lezyonların köken aldığı doku aşağıdakilerden hangisidir?
Doğru Şık (E): Damak tükürük bezleri epiteli
Açıklama: Sert ve yumuşak damak sınırında görülen Bohn nodülleri odontojenik kökenli değildir ve damak tükürük bezlerinin epitelinden köken alır. Alveolar krette görülen infant gingival kistleri dental lamina (Serre) artığı iken, orta hatta yerleşen Epstein incileri palatal inklüzyon kistleridir.

**Soru 2 (ID: 48123417-1c07-4838-a40c-dbe381f2a62b)**
Soru Kökü: Sert ve yumuşak damak sınırında, anatomik olarak lateral kesimlerde yerleşen, ektopik minör damak tükürük bezleri epitelinin kistleşmesi sonucu oluşan içi keratin dolu gelişimsel pediatrik lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Bohn nodülleri
Açıklama: Bohn nodülleri, inklüzyon kökenli olmayan, spesifik olarak minör tükürük bezi epitel artıklarından gelişen ve damak lateralinde yer alan pediatrik kistlerdir. Epstein incileri orta hatta embriyolojik füzyon hattında yer alan inklüzyon kistleriyken; yenidoğan gingival kisti dental lamina (Serre) artığından gelişerek alveol kretinde izlenir.

---

### ÇİFT 39 (Benzerlik: 0.78)

**Soru 1 (ID: a96b4499-f7ce-423f-a660-41c59e39c5f8)**
Soru Kökü: Çocuk hastada yüksek ateş ve boğaz ağrısıyla seyreden bir hastalık tablosunda klinisyen yumuşak damak ve posterior orofarinkste yaygın veziküler döküntüler tespit etmiştir. Diş eti tutulumu izlenmeyen ve klinik olarak tonsillit ile sıklıkla karışan bu Koksaki virüs enfeksiyonunun tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Herpanjina
Açıklama: Herpanjina, Koksaki virüslerin neden olduğu, spesifik olarak ağızın en arka bölgesi olan yumuşak damak ve orofarinkste herpetik enfeksiyona benzeyen veziküller oluşturan hastalıktır. Herpes simplex (gingivostomatit) diş etlerini ve ön bölgeleri de güçlü şekilde tutarken herpanjina posterior hatta sınırlı kalma eğilimi nedeniyle tonsillit veya farenjit sanılarak yanlış tedavi alabilir. Veziküler lezyon formasyonu herpanjinanın tonsillitten ayırıcı klinik karakteridir.

**Soru 2 (ID: 29f8b688-4b28-4b7d-805f-dce528a8ff7f)**
Soru Kökü: 6 yaşında erkek hasta, kreşte başlayan yüksek ateş ve yutkunma sırasında boğazında şiddetli acı hissi (odinofaji) şikayetiyle başvuruyor. Muayenede yumuşak damak ve tonsiller üzerinde sarı-gri tabanlı, etrafı eritematöz halolu çok sayıda küçük ülserasyon gözleniyor. Ekstremitelerde döküntü izlenmiyor.
Klinikte sıklıkla bakteriyel/pürülan tonsillitlerle karışabilen bu Koksaki virüs patolojisini farenjit tablolarından ayıran temel doku lezyonu farkı aşağıdakilerden hangisidir?
Doğru Şık (D): Bakteriyel tonsillitin pürülan/membranöz olması, Herpanjinada ise lezyonun ince duvarlı sıvı dolu vezikülden ülsere dönüşmesi
Açıklama: Koksaki kaynaklı herpanjina, hücre içi litik döngü sonucu sıvı dolu veziküllerin rüptüre olmasıyla sarı-gri tabanlı ülserler oluşturur (veziküler tonsillit/farenjit). Kriptik bakteriyel tonsillitlerde ise eksuda veya pürülan psödomembran birikimi görülür, epitel içi sıvı yığılımı (vezikül) bulunmaz.

---

### ÇİFT 40 (Benzerlik: 0.78)

**Soru 1 (ID: 835eec77-aa64-4be9-b576-da386b9e59b5)**
Soru Kökü: On bir yaşındaki erkek hasta, yanak içi bölgesinde her iki tarafta da bulunan, ağrısız, kalın ve süngerimsi beyaz plaklar şikayetiyle başvuruyor. Anamnezden bu durumun puberte öncesinde belirdiği ve babasında da benzer lezyonlar olduğu öğreniliyor. Bu hastadaki lezyonun patogenezinde aşağıdaki genlerden hangisinde mutasyon saptanması en olasıdır?
Doğru Şık (B): Keratin 4 ve/veya Keratin 13
Açıklama: Beyaz sünger nevüs (Cannon Hastalığı), keratin 4 ve/veya keratin 13 genlerindeki mutasyonlar sonucu gelişen, otozomal dominant geçişli herediter bir durumdur. ATP2A2 geni mutasyonu foliküler keratozise (Darier hastalığı) neden olurken, hücresel düzeyde desmozomal defektler oluşturur. Beyaz sünger nevüste puberte öncesi başlangıç ve bilateral tutulum tanı koydurucu temel klinik parametrelerdir.

**Soru 2 (ID: 8fba4627-7c28-42c2-986d-5f55bd55d2e4)**
Soru Kökü: On beş yaşındaki erkek hasta, yanak, dudak ve diş eti mukozasında diskeratotik beyaz kabarıklıkların birleşmesiyle oluşan 'kaldırım taşı' benzeri lezyonlar ile başvuruyor. Dermatolojik muayenesinde alın ve nasolabial kıvrımlar gibi seboreik bölgelerde de benzer döküntüler saptanıyor. Bu hastalığın patogenezinde rol oynayan temel moleküler defekt aşağıdakilerden hangisidir?
Doğru Şık (A): ATP2A2 gen mutasyonuna sekonder kalsiyum pompa disfonksiyonu
Açıklama: Darier hastalığı (Foliküler keratozis), ATP2A2 gen mutasyonu sonucu hücre içi kalsiyum pompasının bozulması ve sekonder desmozom defekti (akantoliz) ile karakterize, mukokutanöz kaldırım taşı görünümü veren otozomal dominant bir hastalıktır. Keratin 4/13 mutasyonu sadece ağız içini tutan Beyaz Sünger Nevüs'ün etkenidir. Desmoglein antikorları pemfigus vulgariste izlenir.

---

### ÇİFT 41 (Benzerlik: 0.78)

**Soru 1 (ID: 23624e1b-233c-4159-8153-2134deaa17e8)**
Soru Kökü: Çocukluk çağında geçirilen ateşli enfeksiyonların diş dokularına etkileri karşılaştırıldığında; 'dut biçimli molar' ile 'mine hipoplazisi' arasındaki patofizyolojik ayrımı belirleyen temel faktör aşağıdakilerden hangisidir?
Doğru Şık (C): Dut biçimli moların direkt spiroket invazyonuyla anatomik morfolojiyi bozması, hipoplazinin ise ateşe sekonder matriks eksikliği olması
Açıklama: Konjenital sifilizde spiroketlerin (T. pallidum) diş germine doğrudan invazyonu, embriyolojik şekillenme evresini bozarak kronun genel anatomisini deforme eder (dut biçimli molar). Kızamık gibi ateşli virüs enfeksiyonlarında ise dişe doğrudan viral invazyon yoktur; yüksek ateşe sekonder metabolik stres ameloblastların sentezini durdurarak dişin formunu değil, matriks miktarını azaltır (mine hipoplazisi).

**Soru 2 (ID: 5e659956-8c94-47f7-8f2e-e1e2ba00288f)**
Soru Kökü: Daimi dentisyon aşamasında tespit edilen diş gelişim defektlerinin etiyopatogenezi değerlendirildiğinde, kızamık enfeksiyonunun yarattığı mine hipoplazisini, konjenital sifilizin yarattığı Hutchinson dişlerinden ayıran temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Sifilizde spiroket invazyonu morfodiferansiyasyonu bozarken, kızamıkta yüksek ateşin ameloblastları inhibe etmesi
Açıklama: Konjenital sifilizde spiroketlerin diş germine direkt invazyonu, embriyolojik organogenez evresindeki morfodiferansiyasyonu bozarak dişin anatomik şeklini (kama/dut formunda) kalıcı olarak değiştirir. Buna karşın kızamıkta anatomik bir şekil bozukluğu değil, yüksek ateşe bağlı olarak ameloblastların sentez fonksiyonunun durması sonucu matriks eksikliğini ifade eden bantlar tarzında 'mine hipoplazisi' izlenir. Lokalize tek diş tutulumu ise Turner hipoplazisinin karakteristiğidir.

---

### ÇİFT 42 (Benzerlik: 0.78)

**Soru 1 (ID: cf174e38-4633-4dd1-9643-b4e04ea0e9e8)**
Soru Kökü: Beş yaşında erkek hasta, kreşte başlayan yüksek ateş ve yutkunma güçlüğü şikayetiyle kliniğe getiriliyor. Yapılan muayenede sert damak ve dil mukozasında ağrılı, eritematöz halolu ülserasyonlar; ayrıca ayak tabanlarında çok sayıda sıvı dolu vezikül saptanıyor. 
Bu hastada klinik ayırıcı tanıda rekürren aftöz stomatiti kesin olarak ekarte eden majör bulgu zinciri aşağıdakilerden hangisidir?
Doğru Şık (D): Hastada ekstremite döküntüsünün (ayak tabanı) tabloya eşlik etmesi ve lezyonların veziküler faz içermesi
Açıklama: Klinik takdim El-Ayak-Ağız Hastalığını işaret etmektedir. Aftöz stomatit sadece intraoral (hareketli mukozada) vezikül fazı olmayan ülserler yapar ve ekstremitelerde döküntü oluşturmaz. Hastanın ayak tabanında vezikül saptanması, aftı tamamen kurgu dışı bırakarak tanıyı viral etyolojiye sabitler.

**Soru 2 (ID: 03fb8d28-ee09-418c-94ef-cc3b914a9340)**
Soru Kökü: Beş yaşındaki çocuk hastada bilateral olarak el ayasında ve ayak tabanında kırmızı maküller zemininde gelişen veziküller tespit ediliyor. Ağız içi muayenede ise sert damakta yaygın ülserasyonlar mevcuttur. Bu hastanın muayene bulguları değerlendirildiğinde, ayırıcı tanıda aşağıdaki enfeksiyöz durumlardan hangisi **en az olasıdır**?
Doğru Şık (C): Lezyonların Varicella Zoster'e bağlı unilateral dermatom paterni çizmesi
Açıklama: Hastadaki tablo, bilateral ekstremite vezikülleri ve anterior oral lezyonlarla (sert damak) karakterize El-Ayak-Ağız Hastalığıdır (Koksaki A16). Varicella Zoster (Zona) enfeksiyonlarında döküntüler bilateral ekstremitelerde değil, gövdeyi saran tek taraflı (unilateral) ve orta hattı geçmeyen bir dermatom paterni çizer. Bu anatomik lokalizasyon farkı iki veziküler hastalığı kesin çizgilerle ayırır.

---

### ÇİFT 43 (Benzerlik: 0.78)

**Soru 1 (ID: 1134a9fc-52cc-435d-8530-42225bc0af08)**
Soru Kökü: Oklüzal derin çürüğü olan devital bir alt molar dişin apikal kök ucunda gelişen likefaksiyon nekrozunun, kortikal kemiği erode ederek submukozal alana açılması sonucu diş eti üzerinde sarımsı-kırmızı renkli, granülamatöz ve pürülan içerikli bir deşarj nodülü oluşmuştur. Epitel dışı (submukozal) kökenli olan bu inflamatuar lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Parulis
Açıklama: Parulis (diş eti çıbanı), enfekte devital dişlerin periapikal apsesinin kortikal kemiği aşarak oral mukozaya fistülize olduğu çıkış noktasında oluşan pürülan ve granülamatöz nodüldür. Lezyonun rengi kendi epitel hiperkeratozundan değil, alttaki pürülan/enflamatuar yıkımın yansımasından kaynaklanır. Piyojenik granülom ise lokal irritanlara (plak/diş taşı) bağlı gelişen, endodontik kökenli olmayan vasküler proliferasyondur.

**Soru 2 (ID: 8ee98570-34ec-4019-b1bb-33f94a44b4fe)**
Soru Kökü: Diş eti üzerinde lokalize kırmızı-sarımsı renkli, granülamatöz görünümlü fokal bir şişlikle başvuran hastada, bu lezyonun epitel dışı kökenli bir 'Parulis' (diş eti çıbanı) olduğunu, reaktif bir proliferasyon olan 'Piyojenik Granülom'dan ayırt etmek için radyografik incelemede hangi spesifik bulgunun aranması zorunludur?
Doğru Şık (B): Lezyonun komşuluğundaki dişte periapikal radyolusensi (likefaksiyon nekrozu/apse) varlığı
Açıklama: Parulis (diş eti çıbanı) izole bir mukoza hastalığı değildir; devital (enfekte) bir dişin kök ucunda oluşan pürülan apsenin kemiği aşarak yumuşak dokuya fistülize olduğu çıkış noktasıdır. Bu nedenle teşhisi için mutlaka ilgili dişte periapikal radyolusensi (apse odağı) aranmalıdır. Piyojenik granülom ise endodontik değil, doğrudan diş taşı/plak gibi lokal irritanlara bağlı gelişen yüzeyel vasküler bir lezyondur.

---

### ÇİFT 44 (Benzerlik: 0.78)

**Soru 1 (ID: 49ebdaea-ed50-4cbc-ab9b-9f373af78bd7)**
Soru Kökü: 32 yaşında erkek hasta, dilinde hafif bir hassasiyet fark ettiğini belirterek kliniğe başvuruyor. Muayenede dil sırtında etrafı sarımsı-beyaz bir haleyle çevrili, kırmızı renkli ve düzensiz (gezici) sınırlı atrofi alanları saptanıyor. Hastanın tıbbi anamnezinden HLA-B27 antijeni pozitif olduğu, eklemlerinde artrit ve gözlerinde konjonktivit atakları nedeniyle romatoloji takibinde olduğu öğreniliyor. Bu hastanın dilindeki klinik görünümün en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Coğrafik dil (Eritema migrans)
Açıklama: Üretrit, artrit ve konjonktivit ile karakterize HLA-B27 pozitif Reiter sendromunda, dilde sıklıkla sarı-beyaz hiperkeratotik doku halkasıyla çevrili gezici atrofik formlar (eritema migrans / coğrafik dil) tespit edilir. Median romboid glossitte sınırlar sabittir ve beyaz bir halo yoktur, nutrisyonel anemilerde ise tüm dilde sarı-beyaz sınırdan yoksun diffüz kırmızı bir atrofi (glossit) hakimdir. Coğrafik dilin gezici sınır davranışı ve psöriatik sistemik yatkınlığı spesifik kurguyu belirler.

**Soru 2 (ID: 8783f290-e057-41cc-9d75-8a5515975508)**
Soru Kökü: 28 yaşında kadın hasta, dilinde zaman zaman yer değiştiren kırmızı lekeler ve hafif hassasiyet şikayetiyle başvuruyor. İntraoral muayenede, dil dorsumunda filiform papillaların fokal olarak kaybedildiği, sınırları belirgin ve etrafı sarı-beyaz hiperkeratotik bir doku halkası ile çevrili atrofik alanlar izleniyor. Hastanın dermatolojik anamnezinde psöriazis öyküsü mevcuttur. Bu hastadaki oral lezyona vakaların üçte birinde patognomonik olarak eşlik eden diğer dil anomalisi aşağıdakilerden hangisidir?
Doğru Şık (E): Fissürlü dil
Açıklama: Eritema migrans (coğrafik dil) sınırları sürekli yer değiştiren (gezici) ve sarı-beyaz hiperkeratotik halkalarla çevrili papilla kaybı alanlarıdır ve olguların üçte birinde doğrudan fissürlü dil anomalisi tabloya eşlik eder. Tüylü dil papillaların uzaması ile karakterize farklı bir dejeneratif patolojidir ve coğrafik dil kliniğiyle direkt sendromik bağı yoktur. Ayrıca psöriazis, atopi ve Reiter sendromu coğrafik dilde teşhisi doğrulayan kritik sistemik belirteçlerdir.

---

### ÇİFT 45 (Benzerlik: 0.78)

**Soru 1 (ID: fc347d34-3981-4aec-b2b0-21d831124d83)**
Soru Kökü: Eritema migrans (Coğrafik dil) tanısı konmuş hastalarda klinik tabloya sıklıkla eşlik eden anatomik varyasyon ve immünolojik sistemik birliktelik sırasıyla hangi seçenekte doğru verilmiştir?
Doğru Şık (C): Fissürlü dil – Psöriazis ve Reiter sendromu
Açıklama: Coğrafik dil olgularının yaklaşık 1/3'ünde anatomik varyasyon olarak fissürlü dil (dilde derin oluklar) tabloya eşlik eder; sistemik düzeyde ise atopi, seboreik dermatit, psöriazis ve Reiter sendromu (HLA-B27 pozitifliği) ile güçlü immünolojik birliktelik gösterir. Atrofik glossit ile anemi sendromları eşleşirken, eritema migransın dermatolojik ve romatolojik sendromlarla çapraz ilişkisi mevcuttur.

**Soru 2 (ID: 91a0626f-b234-4b60-99b3-cc8340ef6d67)**
Soru Kökü: Eritema migrans (coğrafik dil), dil dorsumunda lokalize papilla atrofisi ve gezici hiperkeratotik sınırlarla karakterize inflamatuar bir patolojidir. Bu lezyon, aşağıdaki sistemik hastalıklardan hangisi ile **birliktelik göstermez**?
Doğru Şık (D): Sistemik skleroz (Skleroderma)
Açıklama: Eritema migrans (coğrafik dil) güçlü bir şekilde Psoriazis, Reiter sendromu (reaktif artrit), atopi ve seboreik dermatit gibi immün-reaktif hastalıklarla eş zamanlı görülme eğilimindedir. Skleroderma (Sistemik skleroz) ise coğrafik dil yapmaz; aksine masif kollajen birikimiyle mikrostomi (trismus), lingual fibrozis ve PDL genişlemesi ile karakterizedir.

---

### ÇİFT 46 (Benzerlik: 0.78)

**Soru 1 (ID: aae5329b-f0b6-4260-9752-ad4ad84d3397)**
Soru Kökü: Aşağıdaki odontojenik ve non-odontojenik kistlerden hangisinin, uzun dönemde lümeni döşeyen epitelden skuamöz hücreli karsinom gelişme (malign transformasyon) riski epidemiyolojik olarak **yoktur veya raporlanmamıştır**?
Doğru Şık (E): İnsisiv kanal (Nazopalatin) kisti
Açıklama: Epitelyal malign transformasyon (kanserleşme) riski artan lezyonlar odontojenik kökenli kistlerdir; bunların başında displastik değişim gösteren OKK, dentigeröz kist, rezidüel ve radiküler kistler gelir. Non-odontojenik bir kist olan nazopalatin kanal kistinde kanserleşme riski bildirilmemiştir ve cerrahi sonrası nüks etmez.

**Soru 2 (ID: 1865e7c8-e44c-43d2-b5cf-75a10fb8eadf)**
Soru Kökü: Odontojenik kistlerin zemininde histolojik displazi gelişmesi durumunda malign karsinom formasyonu bildirilmiştir. Literatüre göre kanser riski artmış kistler grubunda aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Erüpsiyon kisti
Açıklama: Kanser riski artan odontojenik kistler; Odontojenik Keratokist, Dentigeröz kist, Radiküler ve Rezidüel kistlerdir. Bu kistlerin epitel duvarından en sık Skuamöz Hücreli Karsinom geliştiği bilinmektedir. Erüpsiyon kisti, zaten dişeti içinde çok yüzeysel seyreden ve kendiliğinden açılarak veya basit kesi ile iyileşen bir hematom benzeri yapı olup tanımlanmış bir kanserleşme riski literatürde yoktur.

---

### ÇİFT 47 (Benzerlik: 0.78)

**Soru 1 (ID: e9c12110-9c41-44eb-b86b-c6681850e722)**
Soru Kökü: 25 yaşında kadın hasta, aynada dilini incelerken dilinin sırtında derin yarıklar ve şekli sürekli değişen kırmızı alanlar gördüğünü söyleyerek panik içinde muayeneye geliyor. Klinikte, sınırları beyazımsı halkalarla çevrili kırmızı atrofik lezyonların yanı sıra dilin orta hattından yanlara doğru uzanan derin oluklar (fissürler) saptanıyor. Lezyonlarda mekanik kazıma ile doku kalkması görülmüyor. Hastayı değerlendiren diş hekiminin, bu hastadaki anatomik anomalilerin kombinasyonu için teşhis ettiği durumlar sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (A): Eritema migrans ve Fissürlü dil
Açıklama: Vakadaki şekli sürekli değişen, sınırları sarı-beyaz hiperkeratotik halkalarla çevrili papilla atrofisi 'Eritema migrans'ı (coğrafik dil) tanımlar ve klinik literatürde bu tabloya en güçlü oranda (vakaların 1/3'ü) eşlik eden yapısal defekt 'Fissürlü dil' anomalisidir. Median romboid glossit şekil değiştirmez sabit kalır; pamukçuk (psödomembranöz form) lezyonları ise kazındığında epitelden sıyrılır. Hastanın anamnezindeki klinik yer değiştirme ve derin oluklar bu klasik sendromik eşleşmenin direkt temelidir.

**Soru 2 (ID: 8783f290-e057-41cc-9d75-8a5515975508)**
Soru Kökü: 28 yaşında kadın hasta, dilinde zaman zaman yer değiştiren kırmızı lekeler ve hafif hassasiyet şikayetiyle başvuruyor. İntraoral muayenede, dil dorsumunda filiform papillaların fokal olarak kaybedildiği, sınırları belirgin ve etrafı sarı-beyaz hiperkeratotik bir doku halkası ile çevrili atrofik alanlar izleniyor. Hastanın dermatolojik anamnezinde psöriazis öyküsü mevcuttur. Bu hastadaki oral lezyona vakaların üçte birinde patognomonik olarak eşlik eden diğer dil anomalisi aşağıdakilerden hangisidir?
Doğru Şık (E): Fissürlü dil
Açıklama: Eritema migrans (coğrafik dil) sınırları sürekli yer değiştiren (gezici) ve sarı-beyaz hiperkeratotik halkalarla çevrili papilla kaybı alanlarıdır ve olguların üçte birinde doğrudan fissürlü dil anomalisi tabloya eşlik eder. Tüylü dil papillaların uzaması ile karakterize farklı bir dejeneratif patolojidir ve coğrafik dil kliniğiyle direkt sendromik bağı yoktur. Ayrıca psöriazis, atopi ve Reiter sendromu coğrafik dilde teşhisi doğrulayan kritik sistemik belirteçlerdir.

---

### ÇİFT 48 (Benzerlik: 0.78)

**Soru 1 (ID: 9724648d-bddc-4600-a6a1-9c6bd5bdf911)**
Soru Kökü: Diş hekimliği pratiğinde eldiven kullanmama veya bariyer yetersizliği sonucu, enfekte tükürük ve vezikül sıvısının hekimin parmağına inoküle olmasıyla gelişen son derece ağrılı herpetik enfeksiyon tablosunun patofizyolojik giriş kapısı aşağıdakilerden hangisidir?
Doğru Şık (C): Parmak ucundaki mikro-travma alanlarından virüsün dermise penetre olması
Açıklama: Herpetik panaris (dolama), enfekte sıvının parmak cildindeki mikro-travma / sıyrık alanlarından doğrudan epitele penetre (inoküle) olmasıyla gelişir. Hücre içi litik döngü burada başlar ve son derece ağrılı, gergin veziküllerle karakterize lokalize bir enfeksiyona neden olur.

**Soru 2 (ID: 02d641e2-85c2-4899-80d7-c284176e7501)**
Soru Kökü: Eldiven kullanmadan çalışan bir pedodontistin, primer herpetik gingivostomatit geçirmekte olan hastasını muayene ettikten iki gün sonra parmak ucunda son derece ağrılı veziküler bir lezyon gelişmiştir. Bu mesleki patolojinin oluşum mekanizması aşağıdakilerden hangisiyle açıklanır?
Doğru Şık (E): Enfekte tükürük sıvısındaki virüsün parmaktaki mikro-travma alanından direkt inokülasyonu
Açıklama: Herpetik Panaris (dolama), Herpes simpleks virüsü ile enfekte tükürük veya vezikül sıvısının hekimin parmağındaki çizik gibi mikro-travma bölgelerinden doğrudan epitele sızması (inokülasyonu) ile oluşur. Bu durum bir primer veya sekonder aksonal reaktivasyon değil, virüsün tamamen dış ortamdan yeni konağa direkt geçişidir. Koksaki virüs kaynaklı El-Ayak-Ağız tablosunda lezyonlar yaygındır, bu vakada ise mesleki spesifik lokalize inokülasyon vardır.

---

### ÇİFT 49 (Benzerlik: 0.78)

**Soru 1 (ID: 9d3cca44-fd2f-4fde-aef9-dd5e2101f056)**
Soru Kökü: Dokuz aylık erkek bebeğin annesi, üst ön diş eti bölgesinde mavi-mor renkli, fluktuasyon veren şişlik şikayetiyle başvuruyor. Yapılan muayenede lezyonun sürmekte olan primer santral kesici dişin üzerinde yer aldığı ve yalnızca yumuşak dokuya sınırlı olduğu gözleniyor. Bu klinik tablo en olası hangi patoloji ile uyumludur?
Doğru Şık (C): Erüpsiyon kisti
Açıklama: Erüpsiyon kisti, dentigeröz kistin yumuşak dokudaki (ekstra-osseöz) karşılığıdır. Diş sürmesi sırasında kist boşluğuna olan kanama nedeniyle hematom benzeri mavi-mor renk alır. Yenidoğanın gingival kisti ise Serres kalıntılarından gelişen keratin dolu, beyaz-sarı incimsi yapılardır ve kanamalı görünmez.

**Soru 2 (ID: 9a53595b-7bc6-4a2b-9477-55f6f06fb1d8)**
Soru Kökü: Yeni sürmekte olan maksiller santral dişinin üzerinde mavi-mor renkli bir şişlik fark edilen 7 aylık bir bebekte izlenen bu lezyonun spesifik rengi aşağıdakilerden hangisi ile açıklanır?
Doğru Şık (D): Kist lümeninin kan ile dolması
Açıklama: Erüpsiyon kisti yumuşak dokuda gelişen dentigeröz kist varyantıdır ve kist lümeni kanla dolduğunda mukozadan yansıyarak karakteristik mavi-mor rengi oluşturur. Bu durum hemosiderin veya melanin birikimine bağlı kronik bir pigmentasyon değil, akut lüminal hemorajinin fiziksel yansımasıdır. Kendiliğinden veya ufak bir kesi ile dişin sürmesi sağlanarak tedavi edilir.

---

### ÇİFT 50 (Benzerlik: 0.78)

**Soru 1 (ID: 398e7d64-5923-4fb6-978e-e3f2e35ce187)**
Soru Kökü: Gelişimsel olarak diş eksikliğine (hipodonti) ve fazlalığına (hiperdonti) neden olan çeşitli sistemik sendromlar bulunmaktadır. Aşağıdaki sendromlardan hangisinin diş eksikliği (hipodonti) ile karakterize bir klinik tablo oluşturması **beklenmez**?
Doğru Şık (C): Gardner sendromu
Açıklama: Crouzon, Down, Ehlers-Danlos ve İncontinentia pigmenti sendromları, gelişimsel anomali tablolarında hem hipodonti hem de hiperdonti etyolojisinde ortak olarak listelenen sendromlardır. Gardner sendromu ise sadece osteomlar, intestinal polipler ve hiperdonti (süpernümerer dişler/gömülü dişler) ile ilişkilidir, hipodonti spektrumunda yer almaz.

**Soru 2 (ID: 705349a2-6bc0-4955-af9a-3ed3ed546156)**
Soru Kökü: Aşağıdaki sendromlardan hangisi dental arktaki diş sayısında artış (hiperdonti/süpernümerer diş) tablosuna neden olan sistemik durumlardan biri **değildir**?
Doğru Şık (B): Turner sendromu
Açıklama: Turner sendromu, dental gelişimde sıklıkla diş eksikliğine (hipodonti) neden olan bir genetik sendromdur. Cleidocranial displazi, Gardner, Apert ve Crouzon sendromları ise dental folikülün aşırı aktivitesine veya ayrılmasına bağlı olarak hiperdonti (süpernümerer diş) sendromları listesinde yer alırlar. Sendromik dental sayı farklılıkları embriyojenik yolakların spesifik uyarımıyla ilgilidir.

---

### ÇİFT 51 (Benzerlik: 0.78)

**Soru 1 (ID: 6aa49726-ef0b-4eb4-8c1a-ab8edd6593d6)**
Soru Kökü: Altmış iki yaşındaki kadın hastanın sert damağında mukoza altında gelişen ağrısız kitle eksize ediliyor. İncelemede hücrelerin perineural invazyon gösterdiği, ancak miksoid stromada 'İsviçre peyniri' yapısından çok tek sıralı hücre kordonları ve terminal duktus yapısı şeklinde yayıldığı saptanıyor. Lokal agresif olan bu karsinom aşağıdakilerden hangisidir?
Doğru Şık (A): Polimorföz düşük dereceli adenokarsinom
Açıklama: Polimorföz düşük dereceli adenokarsinom (PLGA), terminal duktus kökenli olup özellikle damak minör tükürük bezlerini tutar. Perinöral invazyonu adenoid kistik karsinom ile karışmasına neden olsa da, tek sıralı hücre dizilimleri (indian file) ve daha düşük malignite derecesi ile ondan ayrılır.

**Soru 2 (ID: a1d10c59-7f76-4ef1-ab9a-9ace2d49bd99)**
Soru Kökü: İleri yaşlı kadın hastanın damak bölgesinde tespit edilen ve terminal duktuslardan köken aldığı düşünülen bir tükürük bezi tümörü opere ediliyor. Histopatolojisinde perineöral invazyon sıklığı yüksek olan ve stroma içinde **psammom cisimcikleri** ya da kristaloid yapılar barındıran bu lezyonun en olası tanısı nedir?
Doğru Şık (C): Polimorföz düşük dereceli adenokarsinom
Açıklama: Polimorföz düşük dereceli adenokarsinom (terminal duktus adenokarsinomu), minör tükürük bezlerinin (özellikle damak) yaygın bir tümörüdür. Perineöral invazyon yapması ve histolojisinde psammom cisimcikleri veya kristaloid yapıların izlenmesi ile Adenoid kistik karsinomun 'İsviçre peyniri' kribriform paterninden ayrılır.

---

### ÇİFT 52 (Benzerlik: 0.78)

**Soru 1 (ID: 0576b6c8-13d4-40d7-b0f6-148b5b481342)**
Soru Kökü: Oral lökoplakilerin anatomik yerleşim yerlerine göre karsinoma dönüşme riskleri karşılaştırıldığında, aşağıdaki bölgelerden hangisi malignite potansiyeli açısından **en az** riskli grupta sınıflandırılır?
Doğru Şık (C): Retromolar bölge
Açıklama: Kanser riskine göre anatomik lokalizasyon sıralaması en riskliden en aza doğru; Ağız tabanı > Dil > Dudak > Damak > Bukkal mukoza > Vestibül > Retromolar bölge olarak bildirilmiştir. Ağız tabanı sıvı regöllenme alanı olduğu için karsinojenlerin en çok biriktiği ve en yüksek transformasyon oranının izlendiği bölgedir; buna karşın retromolar alan istatistiksel olarak malignite gelişimi açısından listenin en sonundadır.

**Soru 2 (ID: df7c057f-c6df-40a9-a5ed-ae033c080f4d)**
Soru Kökü: İdiyopatik lökoplakilerin insidansı ile maligniteye (skuamöz hücreli karsinom) dönüşüm riski anatomik bölgelere göre farklılık gösterir. Buna göre, lökoplaki görülme sıklığının düşük olmasına karşın, hücresel kanserleşme riskinin tartışmasız en yüksek olduğu oral lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (B): Ağız tabanı
Açıklama: Lökoplakilerin malign transformasyon riski anatomik hiyerarşide en fazla Ağız tabanında izlenir, bunu dil ve dudak takip eder. Buna karşın vestibül mukoza lökoplakilerin en sık rastlandığı ancak kanserleşme riskinin en düşük olduğu anatomik alandır. Bu ters orantı kuralı oral prekanseröz lezyonların yönetiminde kritik bir prognostik göstergedir.

---

### ÇİFT 53 (Benzerlik: 0.78)

**Soru 1 (ID: 93df1f2c-96b6-43bb-8049-88855c73e612)**
Soru Kökü: Elli yaşında kronik sigara kullanıcısı erkek hastanın dil kenarında fiziksel olarak kazınamayan (fikse), kalın beyaz bir plak saptanmıştır. Biyopside epiteliyal hiperplazi, hücresel atipi ve keratin katmanları arasında yoğun fungal hif infiltrasyonu izlenmiştir. Hastanın lezyonu için en doğru tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kronik hiperplastik kandidiyazis
Açıklama: Fungal tahribata karşı epitelin aşırı proliferasyon (hiperplazi) gösterdiği, fiziksel olarak kazınamayan ve displazi potansiyeli taşıdığı için premalign kabul edilen lezyon kronik hiperplastik kandidiyazistir (kandidal lökoplaki). İdiyopatik lökoplakide fungal etken saptanmazken, psödomembranöz kandidiyazis her zaman kazınabilir yapıdadır. Biyopsideki fungal yapı lökoplaki ayrımındaki kritik veridir.

**Soru 2 (ID: 9ff88707-3b49-4a97-989b-597b677bfaea)**
Soru Kökü: Kırk beş yaşındaki immünsüprese bir hastanın ağız içi muayenesinde dilinin lateral kenarlarında tüy benzeri beyaz lezyonlar saptanıyor. Tanısal değerlendirme sırasında spatül ile yapılan kazıma testinde, epiteliyal beyaz plakların yüzeyden kolayca sıyrılabildiği ve altından eritemli-kanamalı bir dokunun ortaya çıktığı gözlemleniyor. Bu fiziksel bulguya göre, hastadaki lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Psödomembranöz kandidiyazis
Açıklama: Fiziksel kazıma testinde beyaz lezyonun yüzeyden sıyrılarak altından kanamalı eritemli dokunun çıkması, patolojinin mukozal epitel hiperkeratozu değil, yüzeyel bir enfeksiyöz membran olduğunu kanıtlar. Bu klinik davranış psödomembranöz kandidiyazise (pamukçuk) özgüdür. Kıllı lökoplaki, idiyopatik lökoplaki ve friksiyonel keratoz epitelin bizzat kendi kalınlaşması olduğu için KESİNLİKLE kazınamazlar.

---

### ÇİFT 54 (Benzerlik: 0.78)

**Soru 1 (ID: eef67af3-7d0c-4fbb-9994-f63534f7c4cb)**
Soru Kökü: Akut pulpitin klinik ve histopatolojik özellikleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Lezyon bölgesindeki stromada yoğun mononükleer inflamatuar hücre infiltrasyonu izlenir.
Açıklama: Akut pulpitin histopatolojik tablosunda lezyon bölgesine hakim olan enflamatuar hücre grubu mononükleer hücreler değil, yoğun nötrofillerdir. Lezyon alanında lenfosit, makrofaj ve plazma hücresi gibi mononükleer hücre infiltrasyonu, akut inflamasyonun düzelmediği ve sürecin kronik pulpitis aşamasına geçtiği durumlarda izlenir. Pulpal abse gelişimi de, akut vakalarda nötrofillerin dokuyu eritmesine bağlı gelişen likefaksiyon nekrozunun karakteristik bir sonucudur.

**Soru 2 (ID: feedfd56-19e3-4028-a069-930cf70a2561)**
Soru Kökü: Kronik pulpit tablosunun patogenezi ve seyri ile ilgili aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Lezyon bölgesinde her zaman nötrofillerin mononükleer hücrelerden sayıca fazla olması beklenir.
Açıklama: Kronik pulpit tablosuna geçişin hücresel belirteci, akut fazın yöneticisi olan nötrofillerin sahayı terk edip yerlerini makrofaj ve lenfosit gibi mononükleer inflamatuar hücrelere bırakmasıdır; nötrofil dominansı kronik değil akut pürülan evrenin özelliğidir. En güçlü çeldirici olan skar dokusu gelişimi doğrudur; odontoblastlar ölür ve onarım çabası kollajenoz fibrozisle sonuçlanır. Hastalığın geri dönülmez (irreverzibil) olması kök kanal tedavisini mutlak kılar.

---

### ÇİFT 55 (Benzerlik: 0.78)

**Soru 1 (ID: f536aeb3-2f8e-4da5-9958-372f47b91cc5)**
Soru Kökü: Orta yaşlı bir kadında demir eksikliği anemisine ikincil olarak gelişen ve Skuamöz Hücreli Karsinom (SCC) riski taşıyan Plummer-Vinson sendromunun klasik triadında, atrofik glossit ve anemiye ek olarak kliniği domine eden patolojik yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Servikal özofagusta fibromüsküler mukozal bantlar (web)
Açıklama: Plummer-Vinson sendromunda demir deplesyonu, yüksek hücresel döngüye sahip epitelin yenilenmesini bozarak servikal özofagusta anormal fibromüsküler mukozal bantlar (webler) oluşturur. En güçlü distraktör olan nörolojik defisit (B12 eksikliği) pernisiyöz aneminin bulgusudur ve Plummer-Vinson tablosunda izlenmez. Bu mukozal weblerin yarattığı mekanik obstrüksiyon, hastalardaki tipik yutma güçlüğü (disfaji) semptomunun hücresel ve anatomik temelidir.

**Soru 2 (ID: 9f71102f-80da-4ec0-b64c-b0ef189f9d0a)**
Soru Kökü: Atrofik glossit (yanan dil) ve anemi bulgularıyla ortak zeminde seyreden Pernisiyöz anemi ile Plummer-Vinson sendromunun ayırıcı tanısında, Pernisiyöz anemi tablosuna patognomonik olarak hakim olan hücresel mekanizma ve klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Ekstremitelerde ilerleyici nörolojik defektler
Açıklama: Pernisiyöz anemide mide paryetal hücrelerine karşı gelişen otoantikorlar B12 emilimini bozarak ekstremitelerde ilerleyici nörolojik defektlere (karıncalanma, nöropati) yol açar. Servikal webler ve mekanik disfaji sadece demir eksikliğine sekonder gelişen Plummer-Vinson sendromunun anatomik kısıtlamalarıdır. Her iki hastalık da epitel döngüsünü bozarak dilde atrofi yaratsa da, malignite kaskadı ve özofageal anatomi bozukluğu Plummer-Vinson'da izlenir.

---

### ÇİFT 56 (Benzerlik: 0.78)

**Soru 1 (ID: c1b013b2-e9ff-410a-a2d3-8c53b77fe577)**
Soru Kökü: Aşağıdaki periodontitis alt tiplerinin hangilerinin patogenezinde temel olarak hücrenin savunma yeteneğini bozan kalıtsal veya spesifik bir lökosit disfonksiyonu (adezyon veya fonksiyon bozukluğu) yatar?

I. Hızlı ilerleyen periodontitis
II. Prepubertal periodontitis
III. Papillon-Lefevre sendromu
Doğru Şık (E): I, II ve III
Açıklama: Periodontitisin geleneksel plaktan bağımsız olarak çok daha hızlı ataşman kaybı yapan agresif tiplerinde temel immün defektler lökositler üzerinedir. Hızlı ilerleyen periodontitiste genel bir lökosit fonksiyon bozukluğu saptanırken; prepubertal periodontitiste lökositlerin damar duvarına tutunmasını engelleyen spesifik bir lökosit adezyon defekti mevcuttur. Papillon-Lefevre sendromunda ise kalıtsal lökosit fonksiyon bozukluğuna hiperkeratoz klinik bulguları eşlik eder. Jüvenil periodontitiste ise sorumlu olan spesifik Actinobacillus aktinomycetemcomitans bakterisidir.

**Soru 2 (ID: 983a7705-b0aa-475b-bc64-9bb3a29315ea)**
Soru Kökü: I. Hastalığın temelinde spesifik bir lökosit fonksiyon bozukluğu yatar.
II. Karakteristik olarak 5-15 yaş grubundaki çocuk ve adolesanlarda görülür.
III. Lezyon alanından sıklıkla Actinobacillus actinomycetemcomitans patojeni izole edilir.

Yukarıda özellikleri verilen periodontitis alt tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Jüvenil periodontitis
Açıklama: Jüvenil periodontitis, belirgin şekilde 5-15 yaş grubundaki adolesanları etkileyen ve gelişiminde Actinobacillus actinomycetemcomitans'ın temel patojen olarak görev aldığı spesifik bir periodontitis formudur. Prepubertal periodontitis, daha erken yaşta (genellikle 4 yaşındaki kız çocuklarında) bir lökosit adezyon defekti ile ortaya çıkarken; Papillon-Lefevre sendromunda şiddetli lökosit disfonksiyonunun yanında hastalara eşlik eden palmoplantar hiperkeratoz bulguları izlenir.

---

### ÇİFT 57 (Benzerlik: 0.78)

**Soru 1 (ID: a222a09c-4f4b-4cd7-9e68-4a3185dc0f19)**
Soru Kökü: On sekiz yaşında erkek hasta, marfanoid vücut yapısı ve dilinde yaygın büyüme (makroglossi) şikayetiyle başvuruyor. Alınan insizyonel biyopside dil stromasını diffüz olarak infiltre eden mukozal nöroma hiperplazileri saptanıyor. Bu klinik bulgular ışığında hastada araştırılması gereken spesifik sendrom aşağıdakilerden hangisidir?
Doğru Şık (E): Multipl Endokrin Neoplazi Tip 2B
Açıklama: Tüm oral kaviteyle birlikte dil stromasını infiltre eden mukozal nöroma hiperplazisi, Multipl Endokrin Neoplazi (MEN) spektrumunda sadece MEN Tip 2B'ye özgü bir bulgudur ve makroglossi tablosuna yol açar. MEN 1 ve MEN 2A'da mukozal nöroma veya buna bağlı makroglossi izlenmez. Nörofibromatoziste ise lezyon pleksiform nörofibrom karakterindedir.

**Soru 2 (ID: 181ae1f6-46c6-4a35-916d-ecfcd17b03a1)**
Soru Kökü: Displastik Schwann hücreleri ve fibroblastlardan oluşan tümöral kılıfların kontrolsüz gelişimiyle karakterize olan ve oral kavitede bu pleksiform yapıların dil dokusu stroması içine difüz infiltrasyonu sonucunda kütlesel makroglossi kliniği yaratan sendromik patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Nörofibromatozis Tip I
Açıklama: Pleksiform nörofibromlar (displastik Schwann hücreleri ve reaktif fibroblast proliferasyonları), Nörofibromatozis Tip I (von Recklinghausen hastalığı) sendromunda dil içine implante olarak difüz makroglossi tablosu oluşturur. Multipl Endokrin Neoplazi Tip 2B'de makroglossi yapan hücresel komponent 'mukozal nöroma'lardır, pleksiform Schwann kılıfı değil. Kas kökenli sendromlarda (Beckwith-Wiedemann vb.) patolojinin kütlesel odağı doğrudan kas hiperplazisine dayanır.

---

### ÇİFT 58 (Benzerlik: 0.77)

**Soru 1 (ID: b0ee0228-4c19-4596-8172-62f864a7f88a)**
Soru Kökü: PTCH geni mutasyonu sonucu gelişen, sonic-hedgehog yolağının baskılandığı Gorlin (Nevoid Bazal Hücreli Karsinom) sendromunda klinik olarak %50 ve üzerinde rastlanan majör bulgular arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (E): Kalsifiye ovarian fibromlar
Açıklama: Kalsifiye ovarian fibromlar Gorlin sendromunun %15-49 bandında görülen minör/düşük frekanslı bulguları arasındadır. Multipl OKC, bazal hücreli karsinomlar ve kalsifiye falks serebri ise sendromun %50 üzeri sıklıkta görülen klasik tanı koydurucu patolojileridir. PTCH mutasyonunun bilinmesi ve OKC birlikteliği sendromun dental pratikte erken teşhisini sağlar.

**Soru 2 (ID: 66d83252-5154-48ef-868a-a8aaf1197257)**
Soru Kökü: Gorlin Sendromu tanısı almış bir hastada, aşağıdaki sistemik bulgulardan hangisinin görülme olasılığı istatistiksel olarak **en düşüktür** (<%15)?
Doğru Şık (C): Medulloblastom
Açıklama: Medulloblastom, meningiom ve kardiyak fibroma gibi lezyonlar Gorlin Sendromunda %15'in altında bir sıklıkla görülürken; OKK, palmar çukurlar, multipl bazal hücreli karsinom ve kalsifiye falks serebri hastaların %50'sinden fazlasında izlenen majör bulgulardır. Hastalığın nörolojik komplikasyonları ölümcül olabilse de insidansları oldukça düşüktür.

---

### ÇİFT 59 (Benzerlik: 0.77)

**Soru 1 (ID: 0f386597-3b90-4dc0-a29b-d040e35a3bee)**
Soru Kökü: Oral mukozanın reaktif lezyonlarından olan piyojenik granülom ve periferal dev hücreli granülom ayrımında, piyojenik granülom için aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Gerçek bir granülomatöz inflamasyon ve pürülan eksuda içerir
Açıklama: Piyojenik granülom ismi yanlış bir adlandırma (misnomer) olup, lezyon ne pus (pürülan eksuda) üretir ne de histolojik anlamda gerçek bir granülomdur. Periferal dev hücreli granülom sadece gingivada izlenirken, piyojenik granülom hormonların da etkisiyle travmatize olan herhangi bir oral yumuşak dokuda hiperplastik damarsal bağ dokusu olarak belirebilir. Tedavisi her ikisinde de periosteuma inen eksizyondur.

**Soru 2 (ID: 48c76efc-73dd-4c41-8934-13064d9ae648)**
Soru Kökü: Ağız mukozasında saptanan periferal dev hücreli granülom lezyonunun histolojik ve klinik özellikleri dikkate alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Sahip olduğu malign transformasyon riski nedeniyle çenede geniş radikal rezeksiyon gerektirir.
Açıklama: Periferal dev hücreli granülom tümör benzeri bir isme sahip olsa da tamamen reaktif bir yumuşak doku büyümesi olup hiçbir şekilde malignite (kanserleşme) potansiyeli taşımaz; bu nedenle tedavisinde geniş rezeksiyona gerek duyulmadan periosta veya periodontal membrana kadar uzanan basit lokal cerrahi eksizyon yeterlidir. Rengi tipik olarak mavi-pembe spektrumunda olup sadece gingivada ve çoğunlukla birinci molar dişlerin önündeki alveoler bölgede yerleşir. Lezyonda gerçek bir tümöral yapı değil, bağ dokusu reaksiyonu mevcuttur.

---

### ÇİFT 60 (Benzerlik: 0.77)

**Soru 1 (ID: 7add3bf1-b879-4c1d-b90d-ceb7e2cc5847)**
Soru Kökü: Premalign oral lezyonların karsinom geliştirme potansiyellerine dayalı yıldızlama sistemi incelendiğinde, aşağıdaki lezyonlardan hangisinin malignite riski diğerlerine göre **daha düşük** düzeydedir?
Doğru Şık (D): Pürüzsüz kalın lökoplaki
Açıklama: Lezyonların karsinom potansiyelleri incelendiğinde; ters sigara içiciliği (5 yıldız), submüköz fibrozis (5 yıldız), eritrolökoplaki ve granüler lökoplaki (4 yıldız) yüksek risk gruplarını oluştururken, pürüzsüz kalın lökoplaki nispeten daha düşük (2 yıldız) bir risk skoruna sahiptir. Morfolojideki pürüzsüzlük genellikle displazi derecesinin düşüklüğüne işaret eder.

**Soru 2 (ID: 2d9faa35-af2e-40aa-aa54-a51b655ce35e)**
Soru Kökü: Oral bölgede izlenen preneoplastik lezyonların skuamöz hücreli karsinoma dönüşüm riskleri, klinik patoloji pratiğinde yıldız sistemiyle (1 ile 6 yıldız arası) derecelendirilir. Proliferatif verrüköz lökoplakinin 6 yıldızla zirvede yer aldığı bu risk hiyerarşisinde, DUS patoloji verilerine göre 'Laringeal keratoz' ile aynı risk düzeyinde (3 yıldız) konumlanan lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Aktinik keratoz (Solar şeylitis)
Açıklama: Malignite risk tablosu spot ezber verisidir. Dumansız tütün keratozu (1 yıldız) ve Pürüzsüz lökoplaki (2 yıldız) düşük-orta risk grubundadır. Aktinik keratoz (Solar şeylitis) ve Laringeal keratoz orta-yüksek risk olan 3 yıldızlı grupta yer alır. Oral submüköz fibrozis ve Revers smokers palatal lezyonu ise 5 yıldızlı, çok yüksek malignite odaklarıdır.

---

### ÇİFT 61 (Benzerlik: 0.77)

**Soru 1 (ID: 09c5542c-9191-44f6-a820-2a3d46591a70)**
Soru Kökü: Ağrılı kırmızı dil, mukozal atrofi ve demir eksikliği anemisi ile karakterize edilen Plummer-Vinson sendromunun beklenen klasik bulguları arasında aşağıdakilerden hangisi **değildir**?
Doğru Şık (A): Bağırsaklarda mukozal ülserasyon
Açıklama: Plummer-Vinson (Paterson-Kelly-Brown) sendromunun klasik kliniği üst gastrointestinal sistemi etkileyerek demir eksikliği anemisi, disfaji, özofageal webler ve oral/özofageal skuamöz hücreli karsinom riskinde belirgin artış ile seyreder. Alt gastrointestinal sistemde inflamatuvar barsak hastalıklarına benzer bir mukozal ülserasyon bu sendromun patolojik tanımlamaları arasında yer almaz. Epitel dokudaki kronik atrofi, yassı hücreli displazilerin gelişimine zemin hazırlayan temel nedendir.

**Soru 2 (ID: 9f71102f-80da-4ec0-b64c-b0ef189f9d0a)**
Soru Kökü: Atrofik glossit (yanan dil) ve anemi bulgularıyla ortak zeminde seyreden Pernisiyöz anemi ile Plummer-Vinson sendromunun ayırıcı tanısında, Pernisiyöz anemi tablosuna patognomonik olarak hakim olan hücresel mekanizma ve klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Ekstremitelerde ilerleyici nörolojik defektler
Açıklama: Pernisiyöz anemide mide paryetal hücrelerine karşı gelişen otoantikorlar B12 emilimini bozarak ekstremitelerde ilerleyici nörolojik defektlere (karıncalanma, nöropati) yol açar. Servikal webler ve mekanik disfaji sadece demir eksikliğine sekonder gelişen Plummer-Vinson sendromunun anatomik kısıtlamalarıdır. Her iki hastalık da epitel döngüsünü bozarak dilde atrofi yaratsa da, malignite kaskadı ve özofageal anatomi bozukluğu Plummer-Vinson'da izlenir.

---

### ÇİFT 62 (Benzerlik: 0.77)

**Soru 1 (ID: 12c7064e-dac0-41a9-bc9f-7c2047d3a519)**
Soru Kökü: Yirmi sekiz yaşındaki asistan diş hekimi, koruyucu eldiven kullanmadan gerçekleştirdiği bir oral muayene işleminden üç gün sonra, işaret parmağının ucunda zonklayıcı tarzda şiddetli ağrı ve kümeleşmiş veziküller şikayetiyle başvuruyor. Etkenin anterograt yolla değil, doğrudan mikro-travma alanından inoküle olduğu belirleniyor. Bu hastadaki patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Herpetik Panaris (Dolama)
Açıklama: Diş hekimlerinde, enfekte tükürük veya vezikül sıvısının parmaktaki mikro-travma alanlarından inokülasyonu sonucu gelişen şiddetli ağrılı herpes enfeksiyonu formuna Herpetik Panaris (dolama) adı verilir. Bu durum, virüsün sinir gangliyonundan yüzeye inmesiyle değil, doğrudan mesleki temasla epitelyal bariyerin aşılmasıyla gelişir. Ramsay Hunt sinir tutulumudur, PHG ise çocuklarda sistemik görülen oral tablodur.

**Soru 2 (ID: 02d641e2-85c2-4899-80d7-c284176e7501)**
Soru Kökü: Eldiven kullanmadan çalışan bir pedodontistin, primer herpetik gingivostomatit geçirmekte olan hastasını muayene ettikten iki gün sonra parmak ucunda son derece ağrılı veziküler bir lezyon gelişmiştir. Bu mesleki patolojinin oluşum mekanizması aşağıdakilerden hangisiyle açıklanır?
Doğru Şık (E): Enfekte tükürük sıvısındaki virüsün parmaktaki mikro-travma alanından direkt inokülasyonu
Açıklama: Herpetik Panaris (dolama), Herpes simpleks virüsü ile enfekte tükürük veya vezikül sıvısının hekimin parmağındaki çizik gibi mikro-travma bölgelerinden doğrudan epitele sızması (inokülasyonu) ile oluşur. Bu durum bir primer veya sekonder aksonal reaktivasyon değil, virüsün tamamen dış ortamdan yeni konağa direkt geçişidir. Koksaki virüs kaynaklı El-Ayak-Ağız tablosunda lezyonlar yaygındır, bu vakada ise mesleki spesifik lokalize inokülasyon vardır.

---

### ÇİFT 63 (Benzerlik: 0.77)

**Soru 1 (ID: 96d6b733-c0f1-4699-bf01-fd43bed76588)**
Soru Kökü: Oral lökoplakilerin klinik yerleşim yerleri incelendiğinde, lezyonun görülme sıklığı açısından aşağıdaki anatomik bölgelerden hangisi **en az olası** lokalizasyondur?
Doğru Şık (D): Ağız tabanı
Açıklama: Lökoplakinin oral bölgede görülme sıklığı çoktan aza doğru; Vestibül > Yanak mukozası > Damak > Alveoler çıkıntı > Dudak > Dil > Ağız tabanı şeklindedir. Ağız tabanı lezyonun istatistiksel olarak en nadir izlendiği bölge olmasına rağmen, paradoksal olarak maligniteye dönüşüm riskinin en yüksek olduğu alandır.

**Soru 2 (ID: df7c057f-c6df-40a9-a5ed-ae033c080f4d)**
Soru Kökü: İdiyopatik lökoplakilerin insidansı ile maligniteye (skuamöz hücreli karsinom) dönüşüm riski anatomik bölgelere göre farklılık gösterir. Buna göre, lökoplaki görülme sıklığının düşük olmasına karşın, hücresel kanserleşme riskinin tartışmasız en yüksek olduğu oral lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (B): Ağız tabanı
Açıklama: Lökoplakilerin malign transformasyon riski anatomik hiyerarşide en fazla Ağız tabanında izlenir, bunu dil ve dudak takip eder. Buna karşın vestibül mukoza lökoplakilerin en sık rastlandığı ancak kanserleşme riskinin en düşük olduğu anatomik alandır. Bu ters orantı kuralı oral prekanseröz lezyonların yönetiminde kritik bir prognostik göstergedir.

---

### ÇİFT 64 (Benzerlik: 0.77)

**Soru 1 (ID: 272459d8-3335-4015-b7bc-44a7f11b25cc)**
Soru Kökü: Nörofibromatozis tip 1 (NF-1) hastalarının takibinde, daha önce var olan bir pleksiform nörofibromda agresif büyüme, mitoz ve nekroz tespit ediliyor. Tümörün histolojik analizi sırasında malign epitelyal-mezenkimal diferansiyasyon bağlamında rabdomyoblastik (çizgili kas) farklılaşma alanları saptanıyor. Diverjan farklılaşma gösteren bu spesifik malign periferik sinir kılıfı tümörüne ne ad verilir?
Doğru Şık (B): Triton tümörü
Açıklama: Malign periferik sinir kılıfı tümörleri (MPNST), pleksiform nörofibromlardan gelişebilen yüksek dereceli sarkomlardır. Bazen bu tümörler nöral krest orjinine bağlı olarak kemik, kıkırdak, glandüler veya rabdomyoblastik (çizgili kas) alanlar gibi diverjan (farklı) hücre fenotipleri oluşturabilirler; rabdomyoblastik diferansiyasyon gösteren formuna özel olarak Triton Tümörü adı verilir. Schwannomlar benign kapsüllü tümörlerdir ve Antoni A/B alanları ile Verocay cisimciği içerirler.

**Soru 2 (ID: 3c37ce6d-9cea-44ec-8bf5-b940a88545c2)**
Soru Kökü: Malign periferik sinir kılıfı tümörü (MPNST) olgularının fokal alanlarında glandüler, kartilaj, kemik veya rabdomyoblastik (çizgili kas) yapılara farklılaşma (diverjan diferansiyasyon) görülebilmektedir. Rabdomyoblastik farklılaşma gösteren bu spesifik MPNST varyantı aşağıdakilerden hangisidir?
Doğru Şık (A): Triton tümörü
Açıklama: Triton tümörü, malign periferik sinir kılıfı tümörlerinin embriyolojik nöral krest orjinine bağlı olan multipotent kapasiteleri sayesinde, tümör dokusu içerisinde kas (rabdomyoblastik), kemik veya kıkırdak gibi diverjan mezenkimal elemanlar üretmesiyle tanımlanan yüksek dereceli malign varyantıdır. Akustik nörinom benign bir schwannom iken, granüler tümör diverjan doku farklılaşması göstermez.

---

### ÇİFT 65 (Benzerlik: 0.77)

**Soru 1 (ID: 4bd8e666-a21d-4bb2-bae0-8ffd57ada375)**
Soru Kökü: Yedi yaşında erkek çocuk, ateş ve yutkunma zorluğu şikayetiyle getiriliyor. İntraoral muayenede sert damak, dil ve yanak mukozasında ülserler saptanırken, hastanın el ayalarında ve ayak tabanlarında da çok sayıda küçük veziküler döküntü tespit ediliyor. Özellikle okul çağındaki çocuklarda hızlı bulaşan bu klinik tablonun patogenezinde rol oynayan etken mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Koksaki virüs
Açıklama: Oral kavitedeki ülserlere el ve ayaklardaki veziküllerin eşlik ettiği hastalık karakteristik olarak Koksaki virüslerin neden olduğu El-Ayak-Ağız hastalığıdır. Herpes virüsleri genellikle yalnızca mukozalarda veya ilişkili deri dermatomlarında lokalize kalırken, el ayası ve ayak tabanı tutulumu koksaki virüs enfeksiyonunun spesifik klinik imzasıdır. Bu tablo son derece bulaşıcı olup genellikle oral kavitede damak ve dili primer olarak hedefler.

**Soru 2 (ID: 03fb8d28-ee09-418c-94ef-cc3b914a9340)**
Soru Kökü: Beş yaşındaki çocuk hastada bilateral olarak el ayasında ve ayak tabanında kırmızı maküller zemininde gelişen veziküller tespit ediliyor. Ağız içi muayenede ise sert damakta yaygın ülserasyonlar mevcuttur. Bu hastanın muayene bulguları değerlendirildiğinde, ayırıcı tanıda aşağıdaki enfeksiyöz durumlardan hangisi **en az olasıdır**?
Doğru Şık (C): Lezyonların Varicella Zoster'e bağlı unilateral dermatom paterni çizmesi
Açıklama: Hastadaki tablo, bilateral ekstremite vezikülleri ve anterior oral lezyonlarla (sert damak) karakterize El-Ayak-Ağız Hastalığıdır (Koksaki A16). Varicella Zoster (Zona) enfeksiyonlarında döküntüler bilateral ekstremitelerde değil, gövdeyi saran tek taraflı (unilateral) ve orta hattı geçmeyen bir dermatom paterni çizer. Bu anatomik lokalizasyon farkı iki veziküler hastalığı kesin çizgilerle ayırır.

---

### ÇİFT 66 (Benzerlik: 0.77)

**Soru 1 (ID: 29f8b688-4b28-4b7d-805f-dce528a8ff7f)**
Soru Kökü: 6 yaşında erkek hasta, kreşte başlayan yüksek ateş ve yutkunma sırasında boğazında şiddetli acı hissi (odinofaji) şikayetiyle başvuruyor. Muayenede yumuşak damak ve tonsiller üzerinde sarı-gri tabanlı, etrafı eritematöz halolu çok sayıda küçük ülserasyon gözleniyor. Ekstremitelerde döküntü izlenmiyor.
Klinikte sıklıkla bakteriyel/pürülan tonsillitlerle karışabilen bu Koksaki virüs patolojisini farenjit tablolarından ayıran temel doku lezyonu farkı aşağıdakilerden hangisidir?
Doğru Şık (D): Bakteriyel tonsillitin pürülan/membranöz olması, Herpanjinada ise lezyonun ince duvarlı sıvı dolu vezikülden ülsere dönüşmesi
Açıklama: Koksaki kaynaklı herpanjina, hücre içi litik döngü sonucu sıvı dolu veziküllerin rüptüre olmasıyla sarı-gri tabanlı ülserler oluşturur (veziküler tonsillit/farenjit). Kriptik bakteriyel tonsillitlerde ise eksuda veya pürülan psödomembran birikimi görülür, epitel içi sıvı yığılımı (vezikül) bulunmaz.

**Soru 2 (ID: 9f928d79-9000-4f57-948a-d92e9c119345)**
Soru Kökü: Bakteriyel ve viral tonsillit/farenjit tablolarının klinik ayrımında, hastanın yumuşak damak bölgesinde pürülan eksüda (kriptik membran) yerine ince duvarlı, içi sıvı dolu ve sonradan rüptüre olmuş yapılar izlenmesi, patolojinin Koksaki kökenli (Herpanjina) olduğunu düşündürür. Bu ayrımı sağlayan ve epitel hücresi lizisiyle oluşan spesifik yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Vezikül
Açıklama: Herpanjinanın (viral) streptokokal (bakteriyel) tonsillitten ayrımındaki anahtar klinik bulgu, lezyonların pürülan membran değil, intraepitelyal sıvı yığılımı ve epitel lizisiyle oluşan veziküller olmasıdır. Koksaki virüsünün litik döngüsü sıvı dolu bu kesecikleri oluşturur ve bunlar hızla patlayarak sarı-gri tabanlı ülserlere dönüşür. Bakteriler ise eksüdatif pürülan yanıt (kriptik membran) tetikler.

---

### ÇİFT 67 (Benzerlik: 0.77)

**Soru 1 (ID: 5a7f66e7-f329-42ae-b636-a9462a89cc09)**
Soru Kökü: Prekanseröz oral lezyonların malignite riski değerlendirme tablolarında, en agresif biyolojik davranışa ve potansiyele sahip olması nedeniyle altı yıldız (★) ile zirvede derecelendirilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Proliferatif verrüköz lökoplaki
Açıklama: Kanser potansiyeli tablosuna göre Proliferatif Verrüköz Lökoplaki (PVL) 6 yıldız ile en riskli grupta yer almaktadır. Bazı klinik çalışmalarda displazi zincirinin kırılmadığı ve kanserleşme ihtimalinin nükslerle birlikte %100'ü bulabildiği belgelenmiştir. Bu durum PVL'yi tüm mukozal premalign lezyonlar arasında en yıkıcı kılan faktördür.

**Soru 2 (ID: 7add3bf1-b879-4c1d-b90d-ceb7e2cc5847)**
Soru Kökü: Premalign oral lezyonların karsinom geliştirme potansiyellerine dayalı yıldızlama sistemi incelendiğinde, aşağıdaki lezyonlardan hangisinin malignite riski diğerlerine göre **daha düşük** düzeydedir?
Doğru Şık (D): Pürüzsüz kalın lökoplaki
Açıklama: Lezyonların karsinom potansiyelleri incelendiğinde; ters sigara içiciliği (5 yıldız), submüköz fibrozis (5 yıldız), eritrolökoplaki ve granüler lökoplaki (4 yıldız) yüksek risk gruplarını oluştururken, pürüzsüz kalın lökoplaki nispeten daha düşük (2 yıldız) bir risk skoruna sahiptir. Morfolojideki pürüzsüzlük genellikle displazi derecesinin düşüklüğüne işaret eder.

---

### ÇİFT 68 (Benzerlik: 0.77)

**Soru 1 (ID: 45ea0090-ee0d-4618-a801-c7e2fc1fefc2)**
Soru Kökü: Aşağıdaki patolojik tabloların hangilerinde oral kavitede sekonder karsinogenez (SCC gelişimi) veya displastik potansiyel (premalignite) riski majör olarak artmıştır?
I. Plummer-Vinson Sendromu
II. Kronik Hiperplastik Kandidiyazis
III. Oral Submüköz Fibrozis
Doğru Şık (E): I, II ve III
Açıklama: Plummer-Vinson sendromunda atrofiye bağlı bariyer kaybı; kronik hiperplastik kandidiyaziste ısrarcı epitel atipisi (kandidal lökoplaki); oral submüköz fibroziste ise kronik irritasyon kaskadları doğrudan Skuamöz Hücreli Karsinom (SCC) gelişimine zemin hazırlar. Üç patoloji de oral onkolojik taramada mutlak prekanseröz/premalign havuzda değerlendirilir. Fungal kökenli olmasına rağmen hiperplastik Candida formunun premalign sayılması majör bir sınav spotudur.

**Soru 2 (ID: 4e43ec39-6c2f-4a65-b8ed-744953c9848f)**
Soru Kökü: Oral skuamöz hücreli karsinom gelişiminde aşağıda verilen lokal, sistemik veya sendromik risk faktörlerinden hangisi/hangileri rol oynamaktadır?

I. Plummer-Vinson sendromu
II. Fanconi anemisi ve diskeratozis konjenita
III. Betel alkaloidi (cevizi) kullanımı
IV. Kronik Candida albicans enfeksiyonu
Doğru Şık (E): I, II, III ve IV
Açıklama: Oral SCC etiyolojisinde tütün ve alkol en temel etkenler olsa da geniş bir risk spektrumu vardır. Demir eksikliğine bağlı atrofik mukoza yaratan Plummer-Vinson sendromu, genetik kromozomal kırıklara neden olan Fanconi anemisi ve diskeratozis konjenita sendromları pre-malign zemin hazırlar. Hindistan bölgesinde yaygın olan Betel alkaloidleri güçlü kimyasal karsinojenlerdir ve Candida albicans gibi kronik enfeksiyonların hiperplastik formları epitel displazisini tetikleyebilir. Öncüllerin tümü geçerlidir.

---

### ÇİFT 69 (Benzerlik: 0.77)

**Soru 1 (ID: e8e3d592-8827-4ceb-bc2f-82cc69b360ba)**
Soru Kökü: Mine gelişim anomalisini yansıtan Amelogenezis İmperfekta'nın farklı klinik varyantları ve genetik geçiş modelleri bulunmaktadır. Süt ve kalıcı dişlerde minenin nitelik ve niceliğini etkileyen bu tablonun en sık görülen 'Jeneralize Pitted' tipinin kalıtım paterni ve sınıfı aşağıdakilerden hangisidir?
Doğru Şık (A): Hipoplastik / Otozomal dominant
Açıklama: Amelogenezis imperfekta'nın en sık izlenen formu olan Tip IA Jeneralize Pitted varyantı hipoplastik sınıftadır ve otozomal dominant kalıtım gösterir. Tip IB lokalize formlar da otozomal dominant kalıtılırken, hipomatürasyon tiplerinde sıklıkla X'e bağlı resesif veya otozomal resesif geçişler izlenir. Minenin sekresyon fazındaki defektler hipoplastik formları oluşturur.

**Soru 2 (ID: ddb93ee7-e44e-4d37-83bf-925c3615d22a)**
Soru Kökü: Amelogenezis imperfekta sendromlarında genetik geçiş paterni ve klinik tablo çeşitlilik gösterir. Tablo verilerine göre, otozomal resesif kalıtım gösteren ve klinik olarak 'mine agenezi' tablosuyla karakterize edilen hipoplastik tip aşağıdakilerden hangisidir?
Doğru Şık (A): Tip IG
Açıklama: Tip IG amelogenezis imperfekta, otozomal resesif geçiş gösteren ve mine agenezi ile karakterize olan spesifik bir hipoplastik varyanttır. Tip IE x'e bağlı dominant, Tip IIC x'e bağlı hipomatürasyon (karla kaplı) formunu temsil eder. Sınıflandırma tablolarında genetik geçiş ile morfolojik tanımın entegre edilmesi ayırıcı tanıda esastır.

---

### ÇİFT 70 (Benzerlik: 0.77)

**Soru 1 (ID: db53f825-4431-406b-b80a-14170d3fb9f4)**
Soru Kökü: Klinik muayenede alveolar mukoza üzerinde sarımsı-kırmızı renkli, fokal bir yumuşak doku kabarıklığı gözlenen hastanın radyografisinde ilişkili dişte apikal radyolüsensi saptanmıştır. Patolojik terminolojide 'Parulis' (Gumboil) olarak adlandırılan bu lezyonun doku karşılığı aşağıdakilerden hangisidir?
Doğru Şık (E): Perfore olan apikal sinüsün açılma yerindeki granülasyon dokusu
Açıklama: Parulis, bir periapikal apsenin alveolar kemiği erode edip (fistülize olup) mukoza yüzeyine açıldığı bölgede, kronik drenaja reaksiyon olarak gelişen fokal granülasyon dokusu nodülüdür. En güçlü çeldirici olan kistik formasyon epitel kökenlidir ve kemik içinde (periapikal) gelişir, mukoza yüzeyindeki bu yumuşak reaktif büyüme değildir. Bu lezyon enfeksiyon kaynağı kurutulduğunda spontan olarak fibrozise gider veya iyileşir.

**Soru 2 (ID: 8ee98570-34ec-4019-b1bb-33f94a44b4fe)**
Soru Kökü: Diş eti üzerinde lokalize kırmızı-sarımsı renkli, granülamatöz görünümlü fokal bir şişlikle başvuran hastada, bu lezyonun epitel dışı kökenli bir 'Parulis' (diş eti çıbanı) olduğunu, reaktif bir proliferasyon olan 'Piyojenik Granülom'dan ayırt etmek için radyografik incelemede hangi spesifik bulgunun aranması zorunludur?
Doğru Şık (B): Lezyonun komşuluğundaki dişte periapikal radyolusensi (likefaksiyon nekrozu/apse) varlığı
Açıklama: Parulis (diş eti çıbanı) izole bir mukoza hastalığı değildir; devital (enfekte) bir dişin kök ucunda oluşan pürülan apsenin kemiği aşarak yumuşak dokuya fistülize olduğu çıkış noktasıdır. Bu nedenle teşhisi için mutlaka ilgili dişte periapikal radyolusensi (apse odağı) aranmalıdır. Piyojenik granülom ise endodontik değil, doğrudan diş taşı/plak gibi lokal irritanlara bağlı gelişen yüzeyel vasküler bir lezyondur.

---

### ÇİFT 71 (Benzerlik: 0.76)

**Soru 1 (ID: 0f386597-3b90-4dc0-a29b-d040e35a3bee)**
Soru Kökü: Oral mukozanın reaktif lezyonlarından olan piyojenik granülom ve periferal dev hücreli granülom ayrımında, piyojenik granülom için aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Gerçek bir granülomatöz inflamasyon ve pürülan eksuda içerir
Açıklama: Piyojenik granülom ismi yanlış bir adlandırma (misnomer) olup, lezyon ne pus (pürülan eksuda) üretir ne de histolojik anlamda gerçek bir granülomdur. Periferal dev hücreli granülom sadece gingivada izlenirken, piyojenik granülom hormonların da etkisiyle travmatize olan herhangi bir oral yumuşak dokuda hiperplastik damarsal bağ dokusu olarak belirebilir. Tedavisi her ikisinde de periosteuma inen eksizyondur.

**Soru 2 (ID: ff120485-1323-4ad2-9aff-85dee3b79666)**
Soru Kökü: Periferik dev hücreli granülom ve piyojenik granülom, diş etinin lokalize tümör benzeri lezyonları olarak klinikte sıklıkla birbirleriyle karışırlar. Ancak Periferik dev hücreli granülomu piyojenik granülomdan ayırmada kullanılan spesifik klinik-histolojik özellik aşağıdakilerden hangisidir?
Doğru Şık (C): Histolojisinde fibroanjiomatöz stroma içinde yabancı cisim tipi dev hücreler barındırması
Açıklama: Periferik dev hücreli granülomun klinik rengi daha çok mavi-pembe spektrumundayken, tanı koydurucu temel farkı fibroanjiomatöz stroması içinde bol miktarda yabancı cisim tipi dev hücre (osteoklast benzeri) barındırmasıdır; piyojenik granülomda bu hücreler bulunmaz, sadece endotel proliferasyonu izlenir. En güçlü çeldirici olan parlak kırmızı pürülan görünüm piyojenik granülomu tanımlar, isminde 'pyo' geçmesine rağmen aslında püy üretmez ama oldukça vaskülerdir. Dev hücre varlığı ayırıcı tanının merkezidir.

---

### ÇİFT 72 (Benzerlik: 0.76)

**Soru 1 (ID: 6941e1db-7450-42d3-a67c-23d69c4247d1)**
Soru Kökü: Kronik hiperplastik pulpit (Pulpa polibi) ile ilgili aşağıda verilen klinik ve patolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Dişin üzerini örtecek şekilde basınçla şiddetli ağrı semptomları verir.
Açıklama: Pulpa polibi, pulpa odasının geniş çapta açığa çıktığı durumlarda dokunun dışarı doğru prolifere olmasıdır ve ağız boşluğuna sürekli drenaj sağladığı için kapalı alan inflamasyonlarında görülen şiddetli ağrı bu tabloda izlenmez, lezyon genelde asemptomatiktir. En güçlü çeldirici olan 'irreversibl olma' durumu doğrudur; diş semptomsuz olsa bile pulpa canlılığı fizyolojik sınırların çok dışındadır ve ekstirpasyon/çekim gerektirir. Ağrısız karakteri tanı koydurucu temel detaylardan biridir.

**Soru 2 (ID: aafde465-188c-42ec-aadd-22b8bcfc9609)**
Soru Kökü: Pulpa dokusunun yapısal ve fizyopatolojik özellikleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Kan akımı kesildiğinde doku canlılığını korumak için kollateral damar ağı oluşturabilir.
Açıklama: Pulpa dokusu mine ve dentin gibi sert dokularla çevrili olduğu için kan akımı herhangi bir nedenle kesildiğinde yeni bir kollateral damar ağı oluşturamaz. Doku esnemez sert duvarlarla çevrili olduğundan, inflamasyon durumunda klinik şişkinlik gözlenmez ancak bu basınç artışı hastaya şiddetli ağrı olarak yansır. Anatomik dar alan ve kısıtlı kanlanma özellikleri, pulpa dokusundan tanısal biyopsi alınmasını da oldukça elverişsiz hale getirir.

---

### ÇİFT 73 (Benzerlik: 0.76)

**Soru 1 (ID: 4d477bee-4244-4323-990f-0fd9131d41a5)**
Soru Kökü: Ağız içerisinde en sık gözlenen intra-oral malignite olan dil skuamöz hücreli karsinomunun tipik (postero-lateral) yerleşim bölgesindeki bir lezyon, lenfatik yayılımını **en sık** aşağıdaki bölgelerden hangisine yapar?
Doğru Şık (E): Aynı taraf boyun (submandibular, jugulodigastrik) lenf nodlarına
Açıklama: Dilin skuamöz hücreli karsinomları en sık dilin postero-lateral kenarına yerleşir ve anatomik drenajı gereği aynı taraf submandibular ile derin servikal zincirin üst grubu olan jugulodigastrik lenf nodlarına erken ve sık metastaz yapar. Submental nodlar alt dudak kanserlerinin primer drenaj yolu iken, dilin postero-lateral lezyonları lateral boyun zincirini hedefler, bu nedenle prognozu dudak tümörlerine göre çok daha kötüdür.

**Soru 2 (ID: 477db9ac-19c2-4cf4-a1e4-eafd1ef93773)**
Soru Kökü: Baş boyun karsinomlarında primer lezyonun anatomik lokalizasyonu, lenfatik drenaj ağı farklılıkları nedeniyle prognozu doğrudan etkiler. Ağız boşluğu içinde **en sık** rastlanan skuamöz hücreli karsinom lokalizasyonu aşağıdakilerden hangisidir?
Doğru Şık (C): Dilin postero-lateral sınırı
Açıklama: Dudak tümörleri oral karsinomların büyük kısmını (alt dudak spesifik olarak) oluştursa da, 'intra-oral' (ağız içi) boşluktaki anatomik yapılar arasında kanserin en sık yerleştiği spesifik bölge dilin kendisi, özellikle de postero-lateral sınırıdır. Ağız tabanı intra-oral yerleşimde ikinci sıklıkta gelir. Dil kanserleri, zengin lenf ağı nedeniyle hızla metastaz yapar ve dudak tümörlerine göre çok daha yüksek mortaliteye sahiptir.

---

### ÇİFT 74 (Benzerlik: 0.76)

**Soru 1 (ID: e22cd721-2da5-4a92-9e54-b11c2bbeb896)**
Soru Kökü: Oral mukozada izlenen rekürren aftöz stomatit (RAS) tablosunu, intraoral sekonder herpes enfeksiyonundan morfolojik ve anatomik olarak ayırt etmede aşağıdaki özelliklerden hangisi **geçersizdir**?
Doğru Şık (E): Aftöz lezyonların T-hücre disfonksiyonu yerine doğrudan intraepitelyal litik kaskadla oluşması
Açıklama: Rekürren aftöz stomatit, T-hücre aracılı inflamatuar bir mekanizmaya sahip olup, viral bir litik döngü içermez. Doğrudan intraepitelyal litik kaskadla (akantolizis ve hücre lizisi) vezikül oluşumu Herpes Simpleks enfeksiyonunun karakteristik mekanizmasıdır. Ayrıca aftlar hareketli/non-keratinize mukozada çıkar ve vezikül evresi barındırmazken; sekonder herpes keratinize/kemiğe sıkıca tutunan dokularda (sert damak, gingiva) vezikül fazıyla başlar.

**Soru 2 (ID: 1394e110-dfb8-415a-971f-b535e1b42dd6)**
Soru Kökü: Ağız mukozasının en sık görülen hastalığı olan rekürren aftöz ülserlerin klinik özellikleriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Ülser aşamasına geçmeden önce mukozada içi sıvı dolu bir vezikül oluşturur.
Açıklama: Aftöz ülserlerin patogenezinde doku yıkımı doğrudan immün aracılı makül-papül aşamasından ülserasyona geçişle olur, herpes grubu virüs enfeksiyonlarında görülenin aksine asla veziküler (içi sıvı dolu kesecik) bir öncü lezyon evresi izlenmez. Diğer tüm şıklar (hücresel immünite, büyük aftlarda skar gelişimi, ağız dışı dokuların korunması ve çevresel tetikleyiciler) aftın klasik özelliklerindendir. Vezikül formasyonunun olmaması, aftları herpetik enfeksiyonlardan klinik olarak ayırt eden en güçlü muayene bulgusudur.

---

### ÇİFT 75 (Benzerlik: 0.76)

**Soru 1 (ID: 3ae7d763-0d88-4f10-9236-50cee8fdde4a)**
Soru Kökü: Akut pulpit sürecinin erken döneminden geç dönemine doğru ilerlendiğinde, pulpanın klinik vitalite testlerine vereceği spesifik yanıtta aşağıdakilerden hangisinin gerçekleşmesi beklenir?
Doğru Şık (D): Dişin elektriksel stimuluslara olan cevabının giderek azalması
Açıklama: Akut pulpit başlangıçta şiddetli bir nöral ağ ile damar dilatasyonu (ödem) yaratsa da, hastalık geç süpüratif döneme ve kısmi nekroza ilerledikçe sinir lifleri dekalibre olmaya başlar ve dişin elektriksel stimuluslara olan cevabı giderek sönükleşir. En güçlü çeldirici olan perküsyon hassasiyeti pulpit tablosu pulpada sınırlı kaldıkça negatiftir; ancak enfeksiyon periapikal dokuya (PDL) taştığında başlar. Elektriksel testteki sönümleme, doku nekrozunun miktarını yansıtan direkt bir indikatördür.

**Soru 2 (ID: 7adb6ba8-0308-4899-a2e1-8e58f252e7fb)**
Soru Kökü: Şiddetli zonklayıcı diş ağrısıyla kliniğe başvuran hastanın anamnezinden, ağrının birkaç gündür var olduğu ancak son 24 saat içinde dişteki sıcak/soğuk hassasiyetinin aniden kaybolduğu öğrenilmiştir. Vitalite testlerinde dişin elektriksel uyarılara yanıt vermediği saptanmıştır. Akut pulpit geçirmiş olduğu düşünülen bu vakada, pulpal yanıtın tamamen kaybını patofizyolojik olarak açıklayan **en olası** tablo aşağıdakilerden hangisidir?
Doğru Şık (C): Şiddetli intrapulpal inflamasyona ikincil olarak gelişen pulpal doku nekrozu
Açıklama: Akut pulpitte erken dönemde seröz eksüdasyon ile birlikte termal uyarılara abartılı ve şiddetli bir yanıt (ağrı) varken, inflamasyon şiddetlendikçe ödem kaynaklı artan intrapulpal basınç doku iskemisine ve bozulmaya yol açar. Pulpa dokusunun tam iskemisi sonucu gelişen likefaksiyon yıkımı (nekroz) tamamlandığında, sinir lifleri de geri dönüşümsüz olarak harabolduğu için dişin termal ve elektriksel vitalite uyarılara verdiği yanıt tamamen kaybolur. Bu evrede artık diş çekimi veya kök kanal tedavisi endikedir.

---

### ÇİFT 76 (Benzerlik: 0.76)

**Soru 1 (ID: f536aeb3-2f8e-4da5-9958-372f47b91cc5)**
Soru Kökü: Orta yaşlı bir kadında demir eksikliği anemisine ikincil olarak gelişen ve Skuamöz Hücreli Karsinom (SCC) riski taşıyan Plummer-Vinson sendromunun klasik triadında, atrofik glossit ve anemiye ek olarak kliniği domine eden patolojik yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Servikal özofagusta fibromüsküler mukozal bantlar (web)
Açıklama: Plummer-Vinson sendromunda demir deplesyonu, yüksek hücresel döngüye sahip epitelin yenilenmesini bozarak servikal özofagusta anormal fibromüsküler mukozal bantlar (webler) oluşturur. En güçlü distraktör olan nörolojik defisit (B12 eksikliği) pernisiyöz aneminin bulgusudur ve Plummer-Vinson tablosunda izlenmez. Bu mukozal weblerin yarattığı mekanik obstrüksiyon, hastalardaki tipik yutma güçlüğü (disfaji) semptomunun hücresel ve anatomik temelidir.

**Soru 2 (ID: 09c5542c-9191-44f6-a820-2a3d46591a70)**
Soru Kökü: Ağrılı kırmızı dil, mukozal atrofi ve demir eksikliği anemisi ile karakterize edilen Plummer-Vinson sendromunun beklenen klasik bulguları arasında aşağıdakilerden hangisi **değildir**?
Doğru Şık (A): Bağırsaklarda mukozal ülserasyon
Açıklama: Plummer-Vinson (Paterson-Kelly-Brown) sendromunun klasik kliniği üst gastrointestinal sistemi etkileyerek demir eksikliği anemisi, disfaji, özofageal webler ve oral/özofageal skuamöz hücreli karsinom riskinde belirgin artış ile seyreder. Alt gastrointestinal sistemde inflamatuvar barsak hastalıklarına benzer bir mukozal ülserasyon bu sendromun patolojik tanımlamaları arasında yer almaz. Epitel dokudaki kronik atrofi, yassı hücreli displazilerin gelişimine zemin hazırlayan temel nedendir.

---

### ÇİFT 77 (Benzerlik: 0.76)

**Soru 1 (ID: 2d3f7036-e314-4f32-9ff3-e424a18373f1)**
Soru Kökü: Kırk yaşında erkek hastanın panoramik radyografisinde mandibula angulusunda 'sabun köpüğü' görünümünde multiloküler radyolüsent alan saptanıyor. Histolojik kesitlerde santralde yıldızsı retikulum benzeri ağsı bir bağ dokusu ve periferde palizatlaşmış, ters polarite gösteren hiperkromatik küboidal hücreler izleniyor. Kemikte şiddetli ekspansiyon yapan bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Klinikte yavaş büyüyen, ağrısız, multiloküler (sabun köpüğü) radyolüsensi yapan ve histolojisinde ters polariteli palizatlaşmış küboidal/kolumnar bazal hücreler ile merkezde yıldız retikuluma benzeyen yapı içeren tümör konvansiyonel Ameloblastom'dur. Odontojenik miksom da multiloküler olabilir ancak bal peteği veya tenis raketi görünümü yapar ve histolojisi iğsi hücreli bol miksoid stroma içerir. Ameloblastom lokal agresif olup dentin veya mine matriksi üretmez.

**Soru 2 (ID: 067e984d-3bec-4113-80af-8c7e263790a7)**
Soru Kökü: Odontojenik kökenli mezenkimal tümörler arasında yer alan; klinik olarak agresif büyüme potansiyeline sahip olan, radyolojik olarak birbiri içine giren ince kemik korteksleri ile çenelerde tipik 'sabun köpüğü' destrüksiyonu yaratan ve hücresel incelemesinde uzun sitoplazmik uzantılarıyla 'yıldızsı (stellat)' hücrelerin hakim olduğu tümör aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik miksom
Açıklama: Odontojenik miksom, jelatinöz mukopolisakkarit stroması içerisinde dağınık yıldızsı ve iğsi hücrelerle karakterize mezenkimal benign ancak lokal invaziv bir tümördür. Jelatinöz matriksi nedeniyle cerrahi temizlenmesi zor olup kemikte septalı sabun köpüğü veya bal peteği varyantı görüntüsü verir. Diğer sabun köpüğü veren lezyon Ameloblastomdur; ancak Ameloblastom epitel kökenli olup epitel adaları içerir.

---

### ÇİFT 78 (Benzerlik: 0.76)

**Soru 1 (ID: 5a7f66e7-f329-42ae-b636-a9462a89cc09)**
Soru Kökü: Prekanseröz oral lezyonların malignite riski değerlendirme tablolarında, en agresif biyolojik davranışa ve potansiyele sahip olması nedeniyle altı yıldız (★) ile zirvede derecelendirilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Proliferatif verrüköz lökoplaki
Açıklama: Kanser potansiyeli tablosuna göre Proliferatif Verrüköz Lökoplaki (PVL) 6 yıldız ile en riskli grupta yer almaktadır. Bazı klinik çalışmalarda displazi zincirinin kırılmadığı ve kanserleşme ihtimalinin nükslerle birlikte %100'ü bulabildiği belgelenmiştir. Bu durum PVL'yi tüm mukozal premalign lezyonlar arasında en yıkıcı kılan faktördür.

**Soru 2 (ID: 2d9faa35-af2e-40aa-aa54-a51b655ce35e)**
Soru Kökü: Oral bölgede izlenen preneoplastik lezyonların skuamöz hücreli karsinoma dönüşüm riskleri, klinik patoloji pratiğinde yıldız sistemiyle (1 ile 6 yıldız arası) derecelendirilir. Proliferatif verrüköz lökoplakinin 6 yıldızla zirvede yer aldığı bu risk hiyerarşisinde, DUS patoloji verilerine göre 'Laringeal keratoz' ile aynı risk düzeyinde (3 yıldız) konumlanan lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Aktinik keratoz (Solar şeylitis)
Açıklama: Malignite risk tablosu spot ezber verisidir. Dumansız tütün keratozu (1 yıldız) ve Pürüzsüz lökoplaki (2 yıldız) düşük-orta risk grubundadır. Aktinik keratoz (Solar şeylitis) ve Laringeal keratoz orta-yüksek risk olan 3 yıldızlı grupta yer alır. Oral submüköz fibrozis ve Revers smokers palatal lezyonu ise 5 yıldızlı, çok yüksek malignite odaklarıdır.

---

### ÇİFT 79 (Benzerlik: 0.76)

**Soru 1 (ID: 9d1f4c41-5f62-4353-847b-adb6efc16f28)**
Soru Kökü: Dil orta hattında baklava şeklinde kırmızı papiller atrofi ile karakterize olan ve vakaların yaklaşık %40'ında spesifik bir mikrobiyal etkenin tespit edildiği patolojik tabloda roloynayan en olası ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Candida albicans
Açıklama: Median romboid glossit, dil sırtının orta hattında papilla kaybına bağlı düzleşmiş ve kırmızı (glossit tablosu) bir görünüm ile karakterizedir ve bu lezyonların %40'ında altta yatan fırsatçı enfeksiyon etkeni Candida albicans'tır. Diğer şıklarda yer alan HSV, Koksaki veya Treponema pallidum gibi ajanlar papiller atrofiden ziyade veziküler veya ülseratif lokal lezyonlar üretirler. Mantar kaynaklı kronik inflamasyon, bölgedeki filliform papillaların dökülmesine ve karakteristik baklava şeklindeki eritematöz alanın oluşumuna yol açar.

**Soru 2 (ID: 8029c74f-e64d-4cd1-85ed-4fa43366eb9d)**
Soru Kökü: 35 yaşında erkek hasta rutin diş hekimi kontrolüne geliyor. Hastanın anamnezinde sistemik bir hastalığı veya şikayeti yoktur. İntraoral muayenede dil sırtında, foramen çekumun hemen anteriorunda yer alan orta hat yerleşimli, baklava şeklinde ve asemptomatik kırmızı bir papiller atrofi alanı saptanıyor. Bu lezyonun etiyolojisinde kolonizasyon göstererek fokal inflamasyon yaratan en olası patojen aşağıdakilerden hangisidir?
Doğru Şık (B): Candida albicans
Açıklama: Median romboid glossit, gelişimsel bir defekt değil; vakaların %40'ında anatomik niş elverişliliğinden faydalanan Candida albicans'ın kronik kolonizasyonu sonucu oluşan inflamatuar-atrofik bir lezyondur. İnsan Papilloma Virüsü (HPV) epitel proliferasyonları ve papillomlarla karakterize olup fokal atrofi veya glossit tablosu yaratmaz. Düşük dereceli bu fungal inflamasyon, pro-inflamatuar sitokinlerle filiform papilla yenilenmesini bloke ederek ağrısız ve sabit sınırlı kırmızı bir alan oluşturur.

---

### ÇİFT 80 (Benzerlik: 0.76)

**Soru 1 (ID: fb1a7d3f-2263-4af7-96de-9a14e688292c)**
Soru Kökü: Genetik lizozomal asit hidrolaz enzim eksikliği kaskadı sonucunda, hücresel temizlik döngüsünün durması ve doku makrofajlarında dermatan/heparan sülfat gibi yapıtaşlarının birikmesiyle birlikte yumuşak dokularda ve dilde belirgin organomegali (makroglossi) ile karakterize metabolik patoloji grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Mukopolisakkaridozlar
Açıklama: Mukopolisakkaridozlar (MPS), lizozomal asit hidrolaz enzimlerinin spesifik eksikliği nedeniyle makrofaj hücrelerinde heparan/dermatan sülfat döngüsünün bozulduğu genetik yıkım kusurlarıdır ve yumuşak dokularda kütlesel hacim artışıyla dilde makroglossi yaratır. Kretenizmde de metabolik birikim (miksödem) vardır ancak kaskadın ilk halkası genetik lizozom enzim defekti değil, doğrudan konjenital tiroid hormonu yetmezliğidir. Makroglosside kas ve damar kökenli etiyolojiler dışlandığında sistemik metabolik sendrom ayırıcı tanısında hücresel enzimatik biyobelirteçler kullanılır.

**Soru 2 (ID: 7d8e7991-1e17-4169-9cb9-77ac0142ef2b)**
Soru Kökü: Makroglossi ile kendini gösteren genetik metabolik hastalıklardan biri olan Mukopolisakkaridozlar, aşağıdaki patofizyolojik kaskadlardan hangisi üzerinden dilde hacim artışına neden olur?
Doğru Şık (C): Lizozomal asit hidrolaz eksikliğine bağlı makrofaj içi birikim
Açıklama: Mukopolisakkaridozlar, genetik lizozomal asit hidrolaz enzimi eksikliği sonucu heparan ve dermatan sülfat gibi yapıtaşlarının doku makrofajlarında birikmesi ile karakterizedir; bu birikim dil yumuşak dokusunda belirgin makroglossi yaratır. Nöroma infiltrasyonu MEN Tip 2B'nin, overgrowth regülasyon defekti ise Beckwith-Wiedemann sendromunun hücresel mekanizmasıdır.

---

### ÇİFT 81 (Benzerlik: 0.76)

**Soru 1 (ID: 448548ec-e86e-455a-a058-746c476cfd13)**
Soru Kökü: Aşağıdakilerden hangisi makroglossi tablosuna neden olan konjenital ve herediter faktörler arasında **yer almaz**?
Doğru Şık (D): Akromegali
Açıklama: Akromegali, yetişkinlik döneminde büyüme hormonunun aşırı salgılanmasıyla ortaya çıkan edinsel (sonradan kazanılmış) bir makroglossi nedenidir. Kaynak metinde listelenen Beckwith-Wiedemann sendromu, multipl endokrin neoplazi tip 2B, Duchenne muskuler distrofi ve kretenizm konjenital/herediter kategoridedir. Sınav komisyonu, konjenital ve edinsel etyolojilerin kategorik ayrımını temel bir patoloji nosyonu olarak sıklıkla test eder.

**Soru 2 (ID: eb9d1c30-2003-4762-9f09-170e9d28779f)**
Soru Kökü: Makroglossinin etiyolojisinde konjenital ve herediter faktörler önemli rol oynar. Buna göre, makroglossinin en sık görülen nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Vasküler malformasyonlar ve kas hipertrofisi
Açıklama: Makroglossi gelişiminin en sık karşılaşılan birincil nedenleri dokusal aşırı büyüme paterni gösteren vasküler malformasyonlar ve yapısal kas hipertrofileridir. Granülomatöz hastalıklar veya kistik kitleler de dilde büyümeye neden olabilse de bunlar konjenital temelden ziyade sekonder ve daha nadir gelişen nedenlerdir. Beckwith-Wiedemann sendromu veya Down sendromu gibi herediter tablolarda da bu yapısal doku artışları klinikte makroglossi olarak kendini gösterir.

---

### ÇİFT 82 (Benzerlik: 0.76)

**Soru 1 (ID: e8fa9c2d-c4df-4e92-b93b-3f4e835a9baa)**
Soru Kökü: Reaktif ve premalign karakterli ağız içi beyaz lezyonları için; I. Friksiyonel hiperkeratoz lezyonlarında displastik değişiklik gözlenmez. II. Revers smokers-palatal lezyonu premalign karakterdedir. III. Kıllı lökoplaki prekanseröz dönüşüm açısından yüksek risk taşır. ifadelerinden hangileri doğrudur?
Doğru Şık (B): I ve II
Açıklama: Friksiyonel hiperkeratoz mekanik savunma mekanizmasıdır ve displastik değildir (I doğru). Ters sigara içimi mukozayı kanserojene ve ısıya açık hale getirir, yüksek premalignite riski oluşturur (II doğru). Ancak kıllı lökoplaki Epstein-Barr virüsü kökenli immünsüpresif bir lezyondur ve kanserleşme riski (prekanseröz) taşımaz (III yanlış). Bu nedenle lezyonun ismindeki lökoplaki kelimesi kanserleşme potansiyeliyle doğrudan bağdaştırılamaz.

**Soru 2 (ID: 0d3671bb-ae7c-40ed-bc58-e30510278bd7)**
Soru Kökü: Oral bölgede izlenen premalign mukoza lezyonlarından hangileri skuamöz hücreli karsinoma (SCC) dönüşüm açısından diğerlerinden çok daha yüksek risk taşır?
I. Proliferatif Verrüköz Lökoplaki
II. Revers Smokers Palatal Lezyonu
III. Kıllı Lökoplaki
IV. Oral Submuköz Fibrozis
Doğru Şık (B): I, II ve IV
Açıklama: Proliferatif Verrüköz Lökoplaki (bazı serilerde %100 risk), Revers Smokers Palatal Lezyonu (5 yıldızlı) ve betel cevizi ilişkili Oral Submuköz Fibrozis (5 yıldızlı) oral kavitenin en agresif premalign lezyonlarındandır. Epstein-Barr virüsü kökenli Kıllı (Hairy) Lökoplaki ise adına rağmen hücresel displazi barındırmaz ve kanserleşme (malignite) riski SIFIRDIR.

---

### ÇİFT 83 (Benzerlik: 0.76)

**Soru 1 (ID: 2c88a34d-fdfc-46b3-8c32-d45f11f47f99)**
Soru Kökü: Skleroderma tanısı ile takip edilen 45 yaşında kadın hastanın dental radyografik incelemesinde, dişlerin çevresindeki destek dokularda karakteristik olarak aşağıdaki spesifik bulgulardan hangisinin görülmesi beklenir?
Doğru Şık (B): Periodontal ligament boşluğunda genişleme
Açıklama: Skleroderma olgularında ligamentlerdeki disfonksiyonel kollajen birikimi ve kalınlaşma, radyolojik düzeyde patognomonik olarak periodontal ligament boşluğunun uniform şekilde genişlemesi şeklinde kendini gösterir. Pamuk yünü kemik görünümü ise Paget hastalığının tipik sekeli olup skleroderma kemik mineralizasyonunu o şekilde değiştirmez. Hekim, PDL genişlemesini periapikal enfeksiyon sanmamalıdır.

**Soru 2 (ID: f52fe529-30be-42f7-9183-aea445a527ce)**
Soru Kökü: Ağız açıklığında azalma ve yutkunma güçlüğü şikayetiyle başvuran otuz sekiz yaşındaki kadın hastanın panoramik radyografisinde, periodontal ligament (PDL) boşluklarında belirgin genişleme saptanmıştır. Bu radyografik bulgunun travmatik oklüzyona (oklüzal travma) bağlı değil, sistemik skleroz (skleroderma) tablosuna ait olduğunu kesinleştiren majör radyografik karakter aşağıdakilerden hangisidir?
Doğru Şık (C): PDL genişlemesinin travma alan dişte lokalize kalmayıp, tüm arktaki dişlerde jeneralize (homojen) olarak izlenmesi
Açıklama: Sklerodermada izlenen otonom kollajen birikimi (fibrozis) sistemik bir tablo olduğu için radyografik yansıması tüm arktaki dişleri kapsayan homojen ve jeneralize bir PDL genişlemesi şeklindedir. Akut veya kronik oklüzal travmada ise PDL aralığındaki genişleme sadece fiziksel kuvvete (prematür temas/bruksizm) maruz kalan spesifik diş veya diş grubuyla (lokalize) sınırlıdır. Sistemik hastalıklar kendini jeneralize bulgularla ele verir.

---

### ÇİFT 84 (Benzerlik: 0.76)

**Soru 1 (ID: 29f37b37-9540-4a89-bea6-000911d502d5)**
Soru Kökü: Otuz yaşında uzak doğulu bir göçmende şiddetli trismus, ağız kuruluğu ve dil hareketlerinde kısıtlılık saptanıyor. Hastanın anamnezinde uzun süreli betel çiğneme öyküsü mevcut. Klinik muayenede oral mukozada soluk, skar benzeri geri dönüşümsüz fibrotik bantlar gözleniyor. Bu premalign lezyon aşağıdakilerden hangisidir?
Doğru Şık (B): Oral submüköz fibrozis
Açıklama: Oral submüköz fibrozis, özellikle betel cevizi (alkaloid) ve tütün çiğneyen Asya popülasyonlarında görülen, ağız mukozasında bağ dokusunun aşırı kollajenizasyonu sonucu şiddetli ve irreversibl trismusla seyreden prekanseröz bir hastalıktır. Dumansız tütün keratozunda trismus beklenmez, hiperkeratotik plaklar belirgindir. Fibrozis kas dokusuna uzanarak kalıcı hareket kısıtlılığı yapar.

**Soru 2 (ID: a87736f5-8977-4146-a3a1-3a5427a24708)**
Soru Kökü: Kırk yaşındaki Uzak Doğulu erkek hasta, yanak mukozasında sertlik ve fibrotik bantlaşmalar şikayetiyle başvurmuştur. Anamnezinde uzun yıllar areka cevizi (betel) çiğnediği öğrenilen hastaya oral submüköz fibrozis tanısı konmuştur. Bu hastanın dokusundaki fibrotik ilerleme ve klinik prognoz ile ilgili aşağıdaki ifadelerden hangisi doğru bir yaklaşımdır?
Doğru Şık (A): Gelişen fibrozis dokusu geri dönüşümsüz bir karakterdedir.
Açıklama: Oral submüköz fibroziste tetiklenen lokal otoimmün veya kimyasal fibroblastik reaksiyon, dokuda sert ve esnemeyen çapraz bağlı kollajen ağları oluşturur. Bu reaksiyon alışkanlık terk edilse bile geri dönüşümsüzdür (irreversibl). Hastalığın ilk ve en net erken bulgusu, bağ dokusu sıkılaşmasına sekonder gelişen ağız açıklığı kısıtlılığıdır (trismus).

---

### ÇİFT 85 (Benzerlik: 0.76)

**Soru 1 (ID: 990c50d8-146a-4fb4-ac5c-7f550414a7d4)**
Soru Kökü: Sistemik skleroz (Skleroderma) hastalarında izlenen gastrointestinal sistem (GİS) patolojileri çok boyutludur. Özofagusun alt 2/3'lük kısmındaki dismotiliteye sekonder gelişen gastroözofageal reflü (GÖR) dışında, bu hastalarda eşzamanlı olarak şiddetli malabsorpsiyon (emilim bozukluğu) sendromu gelişmesinin spesifik patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): İnce bağırsak mukozasında izlenen mikrovillüs atrofisi
Açıklama: Sklerodermada kollajen birikimi ve vasküler iskemi tüm GİS'i vurur. Özofagustaki dismotilite yutma ve reflü sorunlarına yol açarken, hastalığın ince bağırsaktaki yansıması emilim yüzeyini sağlayan fırçamsı kenardaki 'mikrovillüslerin atrofisi' şeklindedir. Yüzey alanının iskemik kaybı, hastada şiddetli besin malabsorpsiyonu kaskadını tetikler.

**Soru 2 (ID: 6d3266b0-6d2d-4c38-a970-b1b6f38f989e)**
Soru Kökü: Skleroderma (sistemik skleroz) hastalarının yaklaşık %90'ında gastrointestinal sistem tutulumuna bağlı otonomik düz kas yıkımı ve fibrozis izlenir. Sekonder adenokarsinom ve Barrett metaplazisi riskini artıran bu dismotilite patolojisi spesifik olarak hangi anatomik bölgede lokalizedir?
Doğru Şık (C): Özofagusun alt 2/3'lük bölümü
Açıklama: Sklerodermanın patognomonik GİS tutulum sınırı, özofagusun düz kas ağırlıklı olan alt 2/3'lük kısmıdır. Bu bölgede gelişen fibrozis ve obliteratif anjiyopati normal peristaltizmi durdurarak dismotiliteye, ciddi gastroözofageal reflüye ve uzun vadede Barrett metaplazisi ile adenokarsinoma yol açar. Üst 1/3 çizgili kas yapısında olduğu için genellikle korunur.

---

### ÇİFT 86 (Benzerlik: 0.76)

**Soru 1 (ID: dfea229d-23dc-4e78-9bf6-71be35a8364f)**
Soru Kökü: Dilin dorsal yüzeyinde yerleşim gösteren ve Treponema pallidum enfeksiyonunun geç dönem komplikasyonu olarak karsinom gelişme riski oldukça yüksek olan lökoplaki varyantı aşağıdakilerden hangisidir?
Doğru Şık (A): Sifilitik lökoplaki
Açıklama: Sifilitik lökoplaki, sifilizin geç evresinde dil dorsumunda izlenen ve skuamöz hücreli karsinom gelişme riski yüksek olan premalign bir lezyondur. Tüylü lökoplaki (Hairy leukoplakia) ise EBV kaynaklı olup prekanseröz değildir.

**Soru 2 (ID: af4017cf-429c-49ca-a4fc-0563f359e4cf)**
Soru Kökü: Lökoplakilerin yerleşim lokalizasyonları ile etiyolojik faktörler arasındaki ilişkiler değerlendirildiğinde, karsinom geliştirme riskinin yüksek olduğu bilinen sifilitik lökoplaki tipik olarak oral bölgenin neresinde izlenir?
Doğru Şık (C): Dil dorsumu
Açıklama: Sifilitik lökoplaki, Treponema pallidum enfeksiyonunun geç dönem komplikasyonu olarak spesifik bir şekilde dilin dorsum (sırt) yüzeyinde lokalize olan bir tablodur. Bu kronik inflamatuar zemin hücresel atipiye yatkınlık oluşturur ve skuamöz hücreli karsinom gelişimi açısından ciddi oranda yüksek risk barındırır.

---

### ÇİFT 87 (Benzerlik: 0.76)

**Soru 1 (ID: 78a7f411-5543-42f2-80e9-e18b88320dc4)**
Soru Kökü: Pulpal inflamasyonun kök ucundan periapikal dokuya yayılarak oluşturduğu periapikal granülomun mikroskobik incelemesinde aşağıdaki hücre veya yapılardan hangisinin yoğun olarak bulunması **beklenmez**?
Doğru Şık (D): Nötrofil
Açıklama: Periapikal granülom dokusu kronik bir iltihabi granülasyon dokusudur; bu nedenle histolojisinde mononükleer hücreler olan lenfosit, makrofaj ve plazma hücreleri dominanttır, nötrofiller ise sadece çok seyrek olarak izlenir. Eğer periapikal bölgede nötrofiller yoğun bir şekilde birikmeye başlarsa, bu durum likefaksiyon nekrozu ile karakterize olan periapikal apse oluşumuna işaret eder. Malassez epitel artıkları ise granülom içinde inflamasyonun etkisiyle çoğalarak gelecekteki bir kist oluşumuna zemin hazırlar.

**Soru 2 (ID: a5cdc9fc-f23c-4940-837e-ace9b3bfe6e3)**
Soru Kökü: Periapikal enfeksiyonlarda, periapikal granülom zemininden radiküler kist oluşumunu başlatan ve kistin lümenini döşeyen asıl histolojik/hücresel komponent aşağıdakilerden hangisidir?
Doğru Şık (C): Diş gelişiminden arta kalan Malassez epitel artıkları
Açıklama: Periapikal (radiküler) kistlerin gelişiminde, pulpal enfeksiyon apekse ulaştığında oluşan inflamatuar hücre sitokinleri embriyolojik kök kılıfı kalıntılarını stimüle eder. Bu uyarı ile sessiz halden aktifleşerek çoğalmaya başlayan Malassez epitel artıkları, mevcut granülom dokusu içinde çoğalır ve merkezi sıvı dolu bir epiteliyal kistik kavite yaratırlar. Nötrofiller ve mononükleer hücreler reaksiyonu ateşlese de, gerçek bir kistin yapıtaşı olan non-keratinize skuamöz epitel duvarını sadece Malassez kalıntıları kurabilir.

---

### ÇİFT 88 (Benzerlik: 0.76)

**Soru 1 (ID: c7888fdc-7137-4a4c-ae75-6d0df5690954)**
Soru Kökü: Oral bölge viral enfeksiyonlarına bağlı hiperplaziler incelendiğinde, fokal epitel hiperplazisi (Heck hastalığı) kliniği ile klasik ve spesifik olarak ilişkili bulunan HPV tipleri aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (A): HPV 13 ve 32
Açıklama: Heck hastalığı (fokal epitelyal hiperplazi), çok sayıda papiller benzeri mukoza kabarıklarıyla seyreden ve hücrelerde koilositotik değişikliklerin izlendiği benign bir mukozal reaksiyondur. Bu hastalık için etiyolojide spesifikleşmiş HPV alt tipleri 13 ve 32'dir; anogenital ve deri kaynaklı diğer HPV suşları bu tablonun temel nedeni değildir.

**Soru 2 (ID: 528d6842-3091-4796-9eb7-d5cb494c62ed)**
Soru Kökü: Oral bölgede izlenen verruka vulgaris lezyonunun etiyopatogenezinden sorumlu olan ve histopatolojik olarak perinükleer haloya sahip hücrelerle karakterize benign tabloya en sık yol açan virüs tipleri aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (A): HPV 6 ve 11
Açıklama: Oral verruka vulgaris, skuamöz epitelin benign hiperplazisi olup kaynağa göre etiyolojisinde primer olarak HPV 6 ve 11 tipleri rol oynamaktadır. Perinükleer halolu koilositlerin varlığı bu viral enfeksiyonun hücresel düzeydeki karakteristik patognomonik yansımasıdır. HPV 13 ve 32 fokal epitel hiperplazisinde (Heck hastalığı) görülürken, yüksek riskli 16 ve 18 tipleri skuamöz hücreli karsinom gelişimi ile doğrudan ilişkilidir.

---

### ÇİFT 89 (Benzerlik: 0.76)

**Soru 1 (ID: 87c7de79-0ecc-4579-992b-722ed79232f0)**
Soru Kökü: Foliküler keratozis (Darier Hastalığı), seboreik bölgelerde ve oral mukozada 'kaldırım taşı' görünümü oluşturan beyaz kabarıklıklarla seyreder. Bu hücresel kohezyon kaybının (akantoliz) moleküler mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): ATP2A2 mutasyonuna bağlı intrahücreler kalsiyum pompası ve desmozom disfonksiyonu
Açıklama: Darier hastalığının temelinde endoplazmik retikulum kalsiyum pompasını kodlayan ATP2A2 genindeki mutasyon yatar. Kalsiyum dengesinin bozulması, keratinositleri birbirine bağlayan kalsiyum-bağımlı desmozomların defektine ve hücresel adezyon kaybına yol açarak kaldırım taşı (cobblestone) döküntülerini üretir.

**Soru 2 (ID: 0501bb45-ba35-47fd-869d-24086d23b7d8)**
Soru Kökü: Genetik temelli oral beyaz lezyonların hücresel mekanizmaları farklılık gösterir. Darier hastalığı (Foliküler keratozis) ile Beyaz Sünger Nevüs'ü birbirinden ayıran histopatolojik bulgulardan hangisi, sadece kalsiyum pompa defekti sonucu desmozomların yıkılmasıyla ortaya çıkan ve Darier hastalığına spesifik olan ayrışma tablosudur?
Doğru Şık (C): Akantoliz
Açıklama: Darier hastalığında ATP2A2 mutasyonu kalsiyum pompalarını bozarak hücreler arası bağlantı komplekslerinin (desmozom) disfonksiyonuna yol açar, bunun mikroskobik karşılığı hücrelerin birbirinden ayrıştığı 'akantoliz' tablosudur. Beyaz Sünger Nevüste bağlantılar kopmaz, intrasellüler sıvı artışına bağlı hücresel ödem (hidropik dejenerasyon) veperinükleer kondensasyon izlenir.

---

### ÇİFT 90 (Benzerlik: 0.75)

**Soru 1 (ID: fcc2b75b-dbb1-4833-b482-26c77fc36096)**
Soru Kökü: Altmış beş yaşında, uzun yıllardır tütün çiğneme alışkanlığı olan erkek hastanın alveolar mukozasında geniş, düzensiz parmaksı çıkıntılar gösteren ekzofitik bir lezyon saptanıyor. Biyopside metastaz potansiyeli çok düşük, iyi diferansiye bir epitelyal tümör izleniyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Verrüköz karsinom
Açıklama: Verrüköz karsinom; sıklıkla tütün emen/çiğneyen yaşlı erkeklerde, en sık alveolar mukoza ve yanakta yerleşen, parmaksı çıkıntılar gösteren ekzofitik ve çok iyi diferansiye bir SCC varyantıdır. Metastaz potansiyeli klasik SCC'ye göre oldukça düşüktür ve tedavisi öncelikle cerrahidir. Klasik SCC ülseratif ve daha invaziv bir paternde büyür.

**Soru 2 (ID: 2694c66d-28db-4271-9e1b-4b900f718bc9)**
Soru Kökü: Kırk beş yaşındaki erkek hasta alt vestibül sulkusta buruşuk, beyaz renkli, sınırları belirsiz hiperkeratotik bir mukoza lezyonu ile başvurmuştur. Anamnezinde uzun yıllardır bu spesifik bölgeye yerleştirerek tütün çiğnediği öğrenilmiştir. Lezyonun ileri dönem biyolojik davranışı değerlendirildiğinde, bu alanda hangi neoplazinin gelişim riskinin arttığı düşünülmelidir?
Doğru Şık (B): Verrüköz karsinom
Açıklama: Dumansız tütün veya tütün çiğneme alışkanlığı, mukozada kimyasal karsinojenlerin lokal olarak uzun süre maruz kalmasına yol açarak 'tütün keratozu' adı verilen spesifik bir hiperkeratoz yaratır. Bu lezyonların zaman içinde hücresel atipi göstererek doğrudan invaziv ve ekzofitik karakterli verrüköz karsinom formuna dönüşme riski istatistiksel olarak belirgindir.

---

### ÇİFT 91 (Benzerlik: 0.75)

**Soru 1 (ID: ec506dd1-af3c-4a1f-9b9a-ab1c552cba21)**
Soru Kökü: Pulpa dokusunun klinik değerlendirme ve teşhis süreçlerinde, diğer birçok oral mukozal dokudan farklı olarak rutin biyopsi işlemine uygun olmamasının temel fizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Ulaşılması zor, tamamen mine ve dentin tabakası gibi sert dokular içine hapsolmuş olması
Açıklama: Pulpa, etrafı tamamen dentin ve mine tabakası gibi inorganik sert dokularla kaplı, rijit bir kavite (pulpa odası) içinde bulunur; bu yapı anatomik bütünlüğün bozulmadan doku örneği alınmasını (biyopsi) teknik olarak elverişsiz kılar. En güçlü çeldirici olan nötrofil otolizi inflamatuar evrede geçerlidir ancak sağlıklı pulpa biyopsisini engelleyen faktör bu değildir. Tanı için doku örneği yerine vitalite testleri ve ağrı yansıması gibi indirekt semptomların kullanılması bu izolasyonun sonucudur.

**Soru 2 (ID: aafde465-188c-42ec-aadd-22b8bcfc9609)**
Soru Kökü: Pulpa dokusunun yapısal ve fizyopatolojik özellikleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Kan akımı kesildiğinde doku canlılığını korumak için kollateral damar ağı oluşturabilir.
Açıklama: Pulpa dokusu mine ve dentin gibi sert dokularla çevrili olduğu için kan akımı herhangi bir nedenle kesildiğinde yeni bir kollateral damar ağı oluşturamaz. Doku esnemez sert duvarlarla çevrili olduğundan, inflamasyon durumunda klinik şişkinlik gözlenmez ancak bu basınç artışı hastaya şiddetli ağrı olarak yansır. Anatomik dar alan ve kısıtlı kanlanma özellikleri, pulpa dokusundan tanısal biyopsi alınmasını da oldukça elverişsiz hale getirir.

---

### ÇİFT 92 (Benzerlik: 0.75)

**Soru 1 (ID: 835eec77-aa64-4be9-b576-da386b9e59b5)**
Soru Kökü: On bir yaşındaki erkek hasta, yanak içi bölgesinde her iki tarafta da bulunan, ağrısız, kalın ve süngerimsi beyaz plaklar şikayetiyle başvuruyor. Anamnezden bu durumun puberte öncesinde belirdiği ve babasında da benzer lezyonlar olduğu öğreniliyor. Bu hastadaki lezyonun patogenezinde aşağıdaki genlerden hangisinde mutasyon saptanması en olasıdır?
Doğru Şık (B): Keratin 4 ve/veya Keratin 13
Açıklama: Beyaz sünger nevüs (Cannon Hastalığı), keratin 4 ve/veya keratin 13 genlerindeki mutasyonlar sonucu gelişen, otozomal dominant geçişli herediter bir durumdur. ATP2A2 geni mutasyonu foliküler keratozise (Darier hastalığı) neden olurken, hücresel düzeyde desmozomal defektler oluşturur. Beyaz sünger nevüste puberte öncesi başlangıç ve bilateral tutulum tanı koydurucu temel klinik parametrelerdir.

**Soru 2 (ID: c0b21f81-b3fa-4541-8fe1-487bb08f1b53)**
Soru Kökü: On yaşındaki hastanın ağız içi muayenesinde, her iki yanak mukozasını kaplayan kalın, yumuşak, süngerimsi beyaz plaklar saptanıyor. Alınan biyopsinin histopatolojik incelemesinde stratum spinozum tabakasındaki prickle (dikensi) hücrelerde sitoiskelet çöküşünü simgeleyen 'perinükleer eozinofilik kondensasyon' raporlanıyor. Bu hastadaki lezyonun etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Keratin 4 ve Keratin 13 genlerinde mutasyon
Açıklama: Keratin 4 ve 13 gen mutasyonu, sitoiskelet ağının bozulmasına ve spesifik olarak hücrelerde hidropik dejenerasyon ile patognomonik 'perinükleer eozinofilik kondensasyon' oluşumuna neden olarak Cannon hastalığını (Beyaz Sünger Nevüs) tetikler. Kalsiyum pompa defekti Darier hastalığına, EBV kıllı lökoplakiye, sürtünme friksiyonel keratoza yol açar.

---

### ÇİFT 93 (Benzerlik: 0.75)

**Soru 1 (ID: 9f71102f-80da-4ec0-b64c-b0ef189f9d0a)**
Soru Kökü: Atrofik glossit (yanan dil) ve anemi bulgularıyla ortak zeminde seyreden Pernisiyöz anemi ile Plummer-Vinson sendromunun ayırıcı tanısında, Pernisiyöz anemi tablosuna patognomonik olarak hakim olan hücresel mekanizma ve klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Ekstremitelerde ilerleyici nörolojik defektler
Açıklama: Pernisiyöz anemide mide paryetal hücrelerine karşı gelişen otoantikorlar B12 emilimini bozarak ekstremitelerde ilerleyici nörolojik defektlere (karıncalanma, nöropati) yol açar. Servikal webler ve mekanik disfaji sadece demir eksikliğine sekonder gelişen Plummer-Vinson sendromunun anatomik kısıtlamalarıdır. Her iki hastalık da epitel döngüsünü bozarak dilde atrofi yaratsa da, malignite kaskadı ve özofageal anatomi bozukluğu Plummer-Vinson'da izlenir.

**Soru 2 (ID: 24ef3751-4cf9-40cb-95df-e45500b2a44f)**
Soru Kökü: 60 yaşında kadın hasta, dilde şiddetli yanma, yutkunma zorluğu ve el-ayak parmaklarında karıncalanma şikayetleriyle başvuruyor. Muayenede dil dorsumundaki papillaların tamamen düzleştiği ve dilin kırmızı, parlak bir görünüm aldığı izleniyor. Hastanın radyolojik yutma testinde özofageal herhangi bir tıkanıklık (web) saptanmıyor. Laboratuvar tetkiklerinde megaloblastik anemi tespit ediliyor. Bu hastanın atrofik glossit kliniğinden sorumlu primer immünolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Mide paryetal hücrelerindeki intrinsik faktöre karşı otoantikor gelişimi
Açıklama: Pernisiyöz anemide Tip 2 aşırı duyarlılık reaksiyonu sonucu mide paryetal hücrelerindeki intrinsik faktöre karşı otoantikorlar gelişir, bu da B12 emilimini nötralize ederek dilde atrofik glossit ve ekstremitelerde karıncalanmaya (nörolojik defekt) neden olur. Demir eksikliğinde (Plummer-Vinson) ise mekanizma immünolojik otoantikorlara dayanmaz ve klinik tabloda özofageal web varlığı nedeniyle sekonder mekanik disfaji mevcuttur. Vakada weblerin olmaması ve nörolojik ekstremite bulguları doğrudan B12 / intrinsik faktör yıkımı hedefini işaret eder.

---

### ÇİFT 94 (Benzerlik: 0.75)

**Soru 1 (ID: 0d065171-16d7-4afb-a00c-e79a1f83778f)**
Soru Kökü: Aşağıdaki oral mukozal lezyonlardan hangisinin invaziv karsinoma dönüşüm (malignite) potansiyeli diğerlerinden belirgin şekilde daha düşüktür?
Doğru Şık (E): Dumansız tütün keratozu
Açıklama: Dumansız tütün keratozu düşük malignite riskine (1 yıldız) sahipken, proliferatif verrüköz lökoplaki (%100'e varan en yüksek risk), eritroplaki, oral submüköz fibrozis ve eritrolökoplaki karsinomlaşma riski oldukça yüksek lezyonlardır.

**Soru 2 (ID: 7add3bf1-b879-4c1d-b90d-ceb7e2cc5847)**
Soru Kökü: Premalign oral lezyonların karsinom geliştirme potansiyellerine dayalı yıldızlama sistemi incelendiğinde, aşağıdaki lezyonlardan hangisinin malignite riski diğerlerine göre **daha düşük** düzeydedir?
Doğru Şık (D): Pürüzsüz kalın lökoplaki
Açıklama: Lezyonların karsinom potansiyelleri incelendiğinde; ters sigara içiciliği (5 yıldız), submüköz fibrozis (5 yıldız), eritrolökoplaki ve granüler lökoplaki (4 yıldız) yüksek risk gruplarını oluştururken, pürüzsüz kalın lökoplaki nispeten daha düşük (2 yıldız) bir risk skoruna sahiptir. Morfolojideki pürüzsüzlük genellikle displazi derecesinin düşüklüğüne işaret eder.

---

### ÇİFT 95 (Benzerlik: 0.75)

**Soru 1 (ID: a96b4499-f7ce-423f-a660-41c59e39c5f8)**
Soru Kökü: Çocuk hastada yüksek ateş ve boğaz ağrısıyla seyreden bir hastalık tablosunda klinisyen yumuşak damak ve posterior orofarinkste yaygın veziküler döküntüler tespit etmiştir. Diş eti tutulumu izlenmeyen ve klinik olarak tonsillit ile sıklıkla karışan bu Koksaki virüs enfeksiyonunun tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Herpanjina
Açıklama: Herpanjina, Koksaki virüslerin neden olduğu, spesifik olarak ağızın en arka bölgesi olan yumuşak damak ve orofarinkste herpetik enfeksiyona benzeyen veziküller oluşturan hastalıktır. Herpes simplex (gingivostomatit) diş etlerini ve ön bölgeleri de güçlü şekilde tutarken herpanjina posterior hatta sınırlı kalma eğilimi nedeniyle tonsillit veya farenjit sanılarak yanlış tedavi alabilir. Veziküler lezyon formasyonu herpanjinanın tonsillitten ayırıcı klinik karakteridir.

**Soru 2 (ID: 9f928d79-9000-4f57-948a-d92e9c119345)**
Soru Kökü: Bakteriyel ve viral tonsillit/farenjit tablolarının klinik ayrımında, hastanın yumuşak damak bölgesinde pürülan eksüda (kriptik membran) yerine ince duvarlı, içi sıvı dolu ve sonradan rüptüre olmuş yapılar izlenmesi, patolojinin Koksaki kökenli (Herpanjina) olduğunu düşündürür. Bu ayrımı sağlayan ve epitel hücresi lizisiyle oluşan spesifik yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Vezikül
Açıklama: Herpanjinanın (viral) streptokokal (bakteriyel) tonsillitten ayrımındaki anahtar klinik bulgu, lezyonların pürülan membran değil, intraepitelyal sıvı yığılımı ve epitel lizisiyle oluşan veziküller olmasıdır. Koksaki virüsünün litik döngüsü sıvı dolu bu kesecikleri oluşturur ve bunlar hızla patlayarak sarı-gri tabanlı ülserlere dönüşür. Bakteriler ise eksüdatif pürülan yanıt (kriptik membran) tetikler.

---

### ÇİFT 96 (Benzerlik: 0.75)

**Soru 1 (ID: 091d6f35-7b71-472c-b784-7ed1e4390251)**
Soru Kökü: Diş hekimliğinde sıklıkla karşılaşılan rekürren aftöz stomatit vakalarının bazılarında altta yatan sistemik patolojiler araştırılmalıdır. Aşağıdakilerden hangisi rekürren aftöz stomatit gelişimi için tanımlanmış sistemik etiyolojik faktörlerden biri **değildir**?
Doğru Şık (E): Multipl endokrin neoplazi tip 2B
Açıklama: Multipl endokrin neoplazi tip 2B (MEN 2B) sendromu ağız içinde spesifik olarak mukozal nöromalar ve makroglossi tablosuyla prezente olur, klasik olarak hücresel immünite bozukluğuna bağlı aftöz stomatit üreten sendromlardan biri değildir. Buna karşılık Çölyak hastalığı, siklik nötropeni, inflamatuvar bağırsak hastalıkları ve İgA eksikliği doğrudan hücresel savunma veya emilim defekti yaratarak kronik tekrarlayan aftların etiyolojik zeminini oluşturur.

**Soru 2 (ID: 7db4b5fd-2a42-4626-ac46-0669b8e73074)**
Soru Kökü: Ağız mukozasında saptanan rekürren aftöz ülserlerin teşhisi genellikle lezyonların klinik görüntüsüyle konulsa da, tekrarlayan dirençli vakalarda eşlik eden sistemik hastalık varlığı göz önünde bulundurulmalıdır. Aşağıdaki hastalıkların hangisinde sekonder patoloji olarak aftöz ülserlerin gözlenmesi **en az olasıdır**?
Doğru Şık (B): Nörofibromatozis tip 1
Açıklama: Nörofibromatozis tip 1, tümör baskılayıcı gende mutasyon sonucu nöral doku kökenli büyümelere ve sistemik lekelere (cafe-au-lait) neden olan genetik bir sendromdur ve patogenezi aftöz immün ülserasyonlarla ilişkili değildir. Ancak Behçet hastalığı, çölyak, Crohn ve AIDS doğrudan hücresel T lenfosit yanıtını veya mukozal toleransı bozan hastalıklar oldukları için klasik oral klinik seyirlerinde tekrarlayan minör veya majör aftları barındırırlar. Aftöz lezyonlar otoimmünitenin veya malabsorbsiyonun belirteçleridir.

---

### ÇİFT 97 (Benzerlik: 0.75)

**Soru 1 (ID: 9772aa57-e17a-4ca7-90c6-68755b4772c4)**
Soru Kökü: 45 yaşında kadın hasta, bir hafta süren geniş spektrumlu antibiyotik kullanımı sonrasında dilinde şiddetli yanma ve kızarıklık şikayetiyle başvuruyor. İntraoral muayenede dil sırtındaki papillaların atrofiye uğradığı ve tüm dilin parlak kırmızı, eritematöz bir form aldığı görülüyor. Yüzeyde kazınabilen beyaz plak veya membran saptanmıyor. Bu hastada ekolojik boşluğa sekonder gelişen en olası hücresel tablo aşağıdakilerden hangisidir?
Doğru Şık (C): Akut antibiyotik stomatiti
Açıklama: Geniş spektrumlu antibiyotikler floradaki yarışmacı bakterileri inhibe ederek ekolojik boşluk yaratır; bu da Candida'nın aşırı proliferasyonu ile dilde papilla atrofisi ve diffüz eritemle seyreden 'Akut antibiyotik stomatiti'ne (akut eritematöz kandidiyazis) neden olur. Psödomembranöz formda da Candida etken olsa da, yüzeyde zorunlu olarak kazınabilen beyaz peynirimsi hif/plak birikimi olmalıdır, eritematöz formda sadece kızarıklık izlenir. Demir ve B12 eksiklikleri antibiyotik kökenli değil, kronik nutrisyonel hücre döngüsü defektleridir.

**Soru 2 (ID: 64a17366-def7-4a14-ac27-82adf2ea3c39)**
Soru Kökü: Uzun süreli geniş spektrumlu antibiyotik kullanımı sonrası kommensal floranın inhibe olmasıyla gelişen akut eritematöz kandidiyazis (antibiyotik stomatiti), oral mukozada primer olarak hangi morfolojik değişimle kendini gösterir?
Doğru Şık (E): Dil papillalarında diffüz atrofi, kızarıklık ve yanma hissi
Açıklama: Antibiyotik stomatiti bir eritematöz kandidiyazis varyantıdır ve epitelde keratin birikimi (plak) değil, tam tersine papilla atrofisi ve inflamasyon (eritem/kızarıklık) yaratır. Kolay kazınan beyaz plaklar psödomembranöz forma, gezici sarı-beyaz halkalar ise coğrafik dile aittir. Flora dengesinin bozulması fırsatçı mantarların hif formuna geçerek epiteli inceltmesine ve vasküler yatağın belirginleşmesine yol açar.

---

### ÇİFT 98 (Benzerlik: 0.75)

**Soru 1 (ID: 12f2a53a-3d38-43d5-95b4-f0b4b1c76364)**
Soru Kökü: Yirmi sekiz yaşındaki gebe hasta, diş fırçalama sırasında diş etlerinde şiddetli kanama ve büyüme şikayetiyle başvurmuştur. Klinik muayenede artmış sekseksüel hormon seviyeleri ile tetiklendiği düşünülen yaygın eritematöz diş eti büyümesi saptanmıştır. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Hormonal gingivit
Açıklama: Artmış progesteron ve östrojen seviyeleri, mikrobiyal dental plağa karşı doku yanıtını abartarak gebelik ve puberte dönemlerinde hormonal gingivite yol açar. Plazma hücreli gingivitis ise aroma vericiler gibi spesifik alerjenlere bağlı gelişir.

**Soru 2 (ID: f679c194-2c70-4d18-8f07-9e4bd3708e20)**
Soru Kökü: Puberte dönemindeki gençlerde veya gebeliğin ilerleyen aylarındaki kadın hastalarda sıklıkla karşılaşılan hormonal gingivitin oluşumunun ardındaki temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Artmış progesteron seviyesinin gingival vasküler yanıtı abartılı hale getirmesi
Açıklama: Hamilelik ve puberte gibi dönemlerde dolaşımdaki progesteron hormon seviyelerinin belirgin şekilde artması, gingival mikrovasküler yapıların permeabilitesini (geçirgenliğini) artırarak dental plağa karşı çok abartılı ve hızlı bir lokal inflamatuar yanıta (hormonal gingivit) zemin hazırlar. Bu durum, gerçek bir fibröz kollajen artışı (fibromatoz) değil, hormonların tetiklediği hücresel bir eksüdasyon ve vazodilatasyon sürecidir. Lokal plak kontrolü sağlandığında ve hormon seviyeleri normale döndüğünde lezyonlar genellikle spontan olarak geriler.

---

### ÇİFT 99 (Benzerlik: 0.75)

**Soru 1 (ID: 0d065171-16d7-4afb-a00c-e79a1f83778f)**
Soru Kökü: Aşağıdaki oral mukozal lezyonlardan hangisinin invaziv karsinoma dönüşüm (malignite) potansiyeli diğerlerinden belirgin şekilde daha düşüktür?
Doğru Şık (E): Dumansız tütün keratozu
Açıklama: Dumansız tütün keratozu düşük malignite riskine (1 yıldız) sahipken, proliferatif verrüköz lökoplaki (%100'e varan en yüksek risk), eritroplaki, oral submüköz fibrozis ve eritrolökoplaki karsinomlaşma riski oldukça yüksek lezyonlardır.

**Soru 2 (ID: 2d9faa35-af2e-40aa-aa54-a51b655ce35e)**
Soru Kökü: Oral bölgede izlenen preneoplastik lezyonların skuamöz hücreli karsinoma dönüşüm riskleri, klinik patoloji pratiğinde yıldız sistemiyle (1 ile 6 yıldız arası) derecelendirilir. Proliferatif verrüköz lökoplakinin 6 yıldızla zirvede yer aldığı bu risk hiyerarşisinde, DUS patoloji verilerine göre 'Laringeal keratoz' ile aynı risk düzeyinde (3 yıldız) konumlanan lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Aktinik keratoz (Solar şeylitis)
Açıklama: Malignite risk tablosu spot ezber verisidir. Dumansız tütün keratozu (1 yıldız) ve Pürüzsüz lökoplaki (2 yıldız) düşük-orta risk grubundadır. Aktinik keratoz (Solar şeylitis) ve Laringeal keratoz orta-yüksek risk olan 3 yıldızlı grupta yer alır. Oral submüköz fibrozis ve Revers smokers palatal lezyonu ise 5 yıldızlı, çok yüksek malignite odaklarıdır.

---

### ÇİFT 100 (Benzerlik: 0.75)

**Soru 1 (ID: 8fba4627-7c28-42c2-986d-5f55bd55d2e4)**
Soru Kökü: On beş yaşındaki erkek hasta, yanak, dudak ve diş eti mukozasında diskeratotik beyaz kabarıklıkların birleşmesiyle oluşan 'kaldırım taşı' benzeri lezyonlar ile başvuruyor. Dermatolojik muayenesinde alın ve nasolabial kıvrımlar gibi seboreik bölgelerde de benzer döküntüler saptanıyor. Bu hastalığın patogenezinde rol oynayan temel moleküler defekt aşağıdakilerden hangisidir?
Doğru Şık (A): ATP2A2 gen mutasyonuna sekonder kalsiyum pompa disfonksiyonu
Açıklama: Darier hastalığı (Foliküler keratozis), ATP2A2 gen mutasyonu sonucu hücre içi kalsiyum pompasının bozulması ve sekonder desmozom defekti (akantoliz) ile karakterize, mukokutanöz kaldırım taşı görünümü veren otozomal dominant bir hastalıktır. Keratin 4/13 mutasyonu sadece ağız içini tutan Beyaz Sünger Nevüs'ün etkenidir. Desmoglein antikorları pemfigus vulgariste izlenir.

**Soru 2 (ID: 87c7de79-0ecc-4579-992b-722ed79232f0)**
Soru Kökü: Foliküler keratozis (Darier Hastalığı), seboreik bölgelerde ve oral mukozada 'kaldırım taşı' görünümü oluşturan beyaz kabarıklıklarla seyreder. Bu hücresel kohezyon kaybının (akantoliz) moleküler mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): ATP2A2 mutasyonuna bağlı intrahücreler kalsiyum pompası ve desmozom disfonksiyonu
Açıklama: Darier hastalığının temelinde endoplazmik retikulum kalsiyum pompasını kodlayan ATP2A2 genindeki mutasyon yatar. Kalsiyum dengesinin bozulması, keratinositleri birbirine bağlayan kalsiyum-bağımlı desmozomların defektine ve hücresel adezyon kaybına yol açarak kaldırım taşı (cobblestone) döküntülerini üretir.

---

### ÇİFT 101 (Benzerlik: 0.75)

**Soru 1 (ID: 37db50e9-1fc4-4e96-850c-421ca91e9a0e)**
Soru Kökü: Embriyolojik dönemin erken safhalarındaki germ hücre sapmalarından kaynaklanan ve tüm germ yapraklarını (ektoderm, mezoderm, endoderm) içeren teratomlar baş-boyun bölgesinde spesifik alanlara yerleştiğinde özel isimler alırlar. Doğumda doğrudan çenede veya alveolar kemik üzerinde lokalize olan bir teratom kitlesi literatürde spesifik olarak nasıl isimlendirilir?
Doğru Şık (C): Epignatus
Açıklama: Epignatus, yenidoğanlarda özellikle sfenoid bölgeden, damaktan veya doğrudan alveolar kemik üzerinden (çeneden) köken alıp ağız içine sarkan mikst germ hücreli konjenital teratomlardır. Epipalatus sadece palatal bölge kaynaklı olan formlara verilen isimdir. Hamartom ve koristom ise germ hücresi tümörü değil, bölgesel doku düzensizlikleridir.

**Soru 2 (ID: 7be637eb-d4cb-47fa-9709-462abce659e0)**
Soru Kökü: Baş ve boyun bölgesinde görülebilen matür veya immatür teratomlar, lokalizasyonlarına göre spesifik terimlerle adlandırılırlar. 'Epignatus' olarak tanımlanan teratom varyantı aşağıdaki lokalizasyonların hangisinde yerleşir?
Doğru Şık (E): Çene ve alveolar kemiklerde
Açıklama: Epignatus, özellikle çene (mandibula/maksilla) ve alveolar kemiklerde lokalize olan gelişimsel teratomları tanımlamak için kullanılan spesifik bir terimdir. Palatal bölgede gelişen formlara ise epipalatus adı verilir. Gelişimsel evrede pluripotent kök hücrelerin nöral krest göç yollarında yanlış konumlanması bu tümörlerin anatomik adlandırmasını belirler.

---

### ÇİFT 102 (Benzerlik: 0.75)

**Soru 1 (ID: 01614c63-1ae3-4db3-9130-63a7e16a3c6a)**
Soru Kökü: 45 yaşında kadın hasta, sol alt kanin dişinde şiddetli ağrı ve kök ucuna denk gelen labiyal mukozada fluktuasyon veren şişlik şikayetiyle başvuruyor. Histopatolojik incelemede periapikal alanda yoğun nötrofil birikimi ve belirgin doku erimesi saptanıyor. Bu hastanın periapikal dokusunda epitel proliferasyonuna bağlı bir kist gelişimi **gözlenmemesinin** temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Likefaksiyon nekrozunun kist gelişimine olanak tanımadan ortamı enzimatik olarak eritmesi
Açıklama: Periapikal apselerde, pulpadan apekse ulaşan aşırı bakteri ürünleri ortama yoğun nötrofil çeker ve bunun sonucunda dokuyu hızla eriten bir likefaksiyon nekrozu meydana gelir. Bu asidik ve enzimatik doku erimesi süreci ortamı tamamen parçaladığı için, epitel hücrelerinin organize olup sınırları belli bir kist duvarı (periapikal kist) oluşturmasına fırsat kalmaz. Komplikasyon olarak enfeksiyon mukozaya veya deriye fistülize olabilir ancak kist oluşmamasının doğrudan patofizyolojik nedeni bu enzimatik nekroz yıkımıdır.

**Soru 2 (ID: 862a444e-3289-4f08-b32b-1b95a6d9ded6)**
Soru Kökü: Otuz yaşında erkek hasta, devital 46 numaralı dişinde lokalize künt bir ağrı sonrası periapikal bölgede gelişen kronik, non-ekspansif radyolüsent lezyon ile değerlendiriliyor. Bu bölgedeki lezyonun epiteliyal komponentinin patogenezinde rol oynayan hücresel artıklar aşağıdakilerden hangisidir?
Doğru Şık (D): Malassez epitel artıkları
Açıklama: Radiküler kist (periapikal kist), pulpa nekrozu sonrası periapikal dokuya yayılan inflamasyonun periodontal ligament içindeki Malassez epitel artıklarını sitokinler aracılığıyla uyararak prolifere etmesiyle oluşur. Serre artıkları erüpsiyon kistlerinde veya gingival kistlerde rol alırken, indirgenmiş mine epiteli dentigeröz kistlerin kaynağını oluşturur. İnflamasyon ortamındaki makrofaj ve lenfositler bu kistik kavitasyonu destekler.

---

### ÇİFT 103 (Benzerlik: 0.75)

**Soru 1 (ID: dc3d86ac-02c0-4358-8738-a58085b25f85)**
Soru Kökü: Aşağıdaki farmakolojik ajanlardan hangisinin kullanımına bağlı olarak hastada gingival hiperplazi gelişimi **beklenmez**?
Doğru Şık (D): Amoksisilin
Açıklama: Gingival hiperplazi temel olarak antikonvülzanlar, kalsiyum kanal blokerleri (Amlodipin vb.), Siklosporin, Eritromisin ve oral kontraseptifler tarafından tetiklenir. En yaygın kullanılan antibiyotiklerden biri olan Amoksisilin bu yan etki spektrumunda yer almaz. Eritromisin ise makrolid grubundan bir antibiyotik olmasına rağmen hücresel kalsiyum metabolizmasına etkisiyle bu tabloya nadiren yol açabilen spesifik bir istisnadır.

**Soru 2 (ID: 255ac9a3-682e-42e9-b022-64192a1b0359)**
Soru Kökü: Diş eti hiperplazisi (gingival overgrowth) yan etkisiyle bilinen ve genellikle bu tabloyu tetikleyen antibiyotik aşağıdakilerden hangisidir?
Doğru Şık (A): Eritromisin
Açıklama: Eritromisin, antibiyotikler arasında gingival hiperplaziye neden olabilen spesifik bir makrolid ajandır. Diğer klasik nedenler antikonvülzanlar, kalsiyum kanal blokerleri, siklosporin ve oral kontraseptiflerdir.

---

### ÇİFT 104 (Benzerlik: 0.75)

**Soru 1 (ID: 91a0626f-b234-4b60-99b3-cc8340ef6d67)**
Soru Kökü: Eritema migrans (coğrafik dil), dil dorsumunda lokalize papilla atrofisi ve gezici hiperkeratotik sınırlarla karakterize inflamatuar bir patolojidir. Bu lezyon, aşağıdaki sistemik hastalıklardan hangisi ile **birliktelik göstermez**?
Doğru Şık (D): Sistemik skleroz (Skleroderma)
Açıklama: Eritema migrans (coğrafik dil) güçlü bir şekilde Psoriazis, Reiter sendromu (reaktif artrit), atopi ve seboreik dermatit gibi immün-reaktif hastalıklarla eş zamanlı görülme eğilimindedir. Skleroderma (Sistemik skleroz) ise coğrafik dil yapmaz; aksine masif kollajen birikimiyle mikrostomi (trismus), lingual fibrozis ve PDL genişlemesi ile karakterizedir.

**Soru 2 (ID: b7cc9f03-10d6-477f-8337-3f20d65e2f70)**
Soru Kökü: Median romboit glossit ve eritema migrans (coğrafik dil) klinik olarak dil dorsumunda eritem (kırmızılık) ve papilla atrofisi yapmaları nedeniyle karıştırılabilir. Bu iki lezyonu birbirinden ayıran TEK KRİTİK klinik davranış ve etiyolojik fark aşağıdakilerden hangisidir?
Doğru Şık (A): Median romboit glossitin Kandida zemininde gelişip orta hatta sabit kalması, eritema migransın ise dinamik olarak yer değiştirmesi
Açıklama: Eritema migrans dinamik hücresel turn-over döngüsüne sahip immün-reaktif bir tablodur ve papilla atrofileri dilde sürekli yer değiştirerek (gezici) harita görünümü çizer. Median romboit glossit ise embriyolojik gelişim varyasyonu ve kronik Kandida enfeksiyonu zemininde gelişen, dilin posterior dorsum orta hattında ömür boyu sabit (yer değiştirmeyen) kalan eritematöz baklava dilimi şeklinde bir lezyondur.

---

### ÇİFT 105 (Benzerlik: 0.75)

**Soru 1 (ID: 84bcce99-4f18-40aa-9516-d4e344e79688)**
Soru Kökü: Pernisiyöz anemiye sekonder gelişen ağrılı atrofik glossit tablosunda, esansiyel nutrient eksikliğini başlatan birincil immünolojik reaksiyon tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Paryetal hücre otoantikorlarına bağlı Tip 2 aşırı duyarlılık
Açıklama: Pernisiyöz aneminin etiyopatogenezinde mide paryetal hücrelerine ve intrinsik faktöre karşı gelişen otoantikorlar (Tip 2 aşırı duyarlılık reaksiyonu) yer alır; bu durum B12 emilimini bloke ederek glossit kaskadını başlatır. Tip 4 reaksiyon kontakt dermatit veya liken planusta izlenirken, Tip 1 alerjik yanıtlar içindir. Hedef hücre spesifik antikor yıkımı Tip 2 mekanizmasının klasik örneğidir.

**Soru 2 (ID: 24ef3751-4cf9-40cb-95df-e45500b2a44f)**
Soru Kökü: 60 yaşında kadın hasta, dilde şiddetli yanma, yutkunma zorluğu ve el-ayak parmaklarında karıncalanma şikayetleriyle başvuruyor. Muayenede dil dorsumundaki papillaların tamamen düzleştiği ve dilin kırmızı, parlak bir görünüm aldığı izleniyor. Hastanın radyolojik yutma testinde özofageal herhangi bir tıkanıklık (web) saptanmıyor. Laboratuvar tetkiklerinde megaloblastik anemi tespit ediliyor. Bu hastanın atrofik glossit kliniğinden sorumlu primer immünolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Mide paryetal hücrelerindeki intrinsik faktöre karşı otoantikor gelişimi
Açıklama: Pernisiyöz anemide Tip 2 aşırı duyarlılık reaksiyonu sonucu mide paryetal hücrelerindeki intrinsik faktöre karşı otoantikorlar gelişir, bu da B12 emilimini nötralize ederek dilde atrofik glossit ve ekstremitelerde karıncalanmaya (nörolojik defekt) neden olur. Demir eksikliğinde (Plummer-Vinson) ise mekanizma immünolojik otoantikorlara dayanmaz ve klinik tabloda özofageal web varlığı nedeniyle sekonder mekanik disfaji mevcuttur. Vakada weblerin olmaması ve nörolojik ekstremite bulguları doğrudan B12 / intrinsik faktör yıkımı hedefini işaret eder.

---

### ÇİFT 106 (Benzerlik: 0.75)

**Soru 1 (ID: 4bd8e666-a21d-4bb2-bae0-8ffd57ada375)**
Soru Kökü: Yedi yaşında erkek çocuk, ateş ve yutkunma zorluğu şikayetiyle getiriliyor. İntraoral muayenede sert damak, dil ve yanak mukozasında ülserler saptanırken, hastanın el ayalarında ve ayak tabanlarında da çok sayıda küçük veziküler döküntü tespit ediliyor. Özellikle okul çağındaki çocuklarda hızlı bulaşan bu klinik tablonun patogenezinde rol oynayan etken mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Koksaki virüs
Açıklama: Oral kavitedeki ülserlere el ve ayaklardaki veziküllerin eşlik ettiği hastalık karakteristik olarak Koksaki virüslerin neden olduğu El-Ayak-Ağız hastalığıdır. Herpes virüsleri genellikle yalnızca mukozalarda veya ilişkili deri dermatomlarında lokalize kalırken, el ayası ve ayak tabanı tutulumu koksaki virüs enfeksiyonunun spesifik klinik imzasıdır. Bu tablo son derece bulaşıcı olup genellikle oral kavitede damak ve dili primer olarak hedefler.

**Soru 2 (ID: cf174e38-4633-4dd1-9643-b4e04ea0e9e8)**
Soru Kökü: Beş yaşında erkek hasta, kreşte başlayan yüksek ateş ve yutkunma güçlüğü şikayetiyle kliniğe getiriliyor. Yapılan muayenede sert damak ve dil mukozasında ağrılı, eritematöz halolu ülserasyonlar; ayrıca ayak tabanlarında çok sayıda sıvı dolu vezikül saptanıyor. 
Bu hastada klinik ayırıcı tanıda rekürren aftöz stomatiti kesin olarak ekarte eden majör bulgu zinciri aşağıdakilerden hangisidir?
Doğru Şık (D): Hastada ekstremite döküntüsünün (ayak tabanı) tabloya eşlik etmesi ve lezyonların veziküler faz içermesi
Açıklama: Klinik takdim El-Ayak-Ağız Hastalığını işaret etmektedir. Aftöz stomatit sadece intraoral (hareketli mukozada) vezikül fazı olmayan ülserler yapar ve ekstremitelerde döküntü oluşturmaz. Hastanın ayak tabanında vezikül saptanması, aftı tamamen kurgu dışı bırakarak tanıyı viral etyolojiye sabitler.

---

### ÇİFT 107 (Benzerlik: 0.75)

**Soru 1 (ID: c03b7f27-d8cf-4afd-ae9e-dfab492a372d)**
Soru Kökü: Birinci büyük azı dişinin geniş açık kavitesinden dışarı uzanan pembe-kırmızı lezyonu bulunan 16 yaşındaki hastada ayırıcı tanı yapılması planlanmaktadır. Bu lezyonun pulpa polibi (kronik hiperplastik pulpit) mi, yoksa marjinal dişetinden köken alıp kaviteye büyümüş bir fibröz epulis mi olduğunu kesinleştirmek için hekimin değerlendirmesi gereken **en kritik** anatomik parametre aşağıdakilerden hangisidir?
Doğru Şık (B): Dokunun beslendiği taban sapının doğrudan pulpa odasına mı, yoksa çevre servikal dişetine mi bağlandığı
Açıklama: Kronik hiperplastik pulpit (pulpa polibi), doğrudan dişin pulpa odasındaki bağ dokusunun kronik tahrişle aşırı granülasyonu sonucu oklüzal kaviteden dışarı taşarak gelişirken; fibröz epulis, papil veya piyojenik granülom gibi lokalize reaktif lezyonlar interdental marjinal dişetinden köken alıp proksimal kaviteler yoluyla oklüzal yüzeye doğru yayılabilirler. Her ikisi de ağrısız olabilen granülasyon veya bağ dokusu kökenli lezyonlardır, bu yüzden kesin ayırıcı tanı, lezyonun beslenme sapının (kökeninin) lokalizasyonuna bakılarak saptanır.

**Soru 2 (ID: 20c5ca0f-77c3-4859-a1b8-a7ba87f7a839)**
Soru Kökü: 12 yaşında erkek hasta, sağ alt birinci büyük azı dişindeki geniş çürük kavitesinden dışarı taşan ve dişin büyük bir kısmını örten pembemsi-kırmızı et parçası şikayetiyle başvuruyor. Hastanın anamnezinden ilgili bölgede çiğneme sırasındaki bası hissi dışında belirgin bir ağrı olmadığı, dokunun ağız içine sürekli kanadığı öğreniliyor. Bu hastadaki klinik veriler ışığında **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Kronik hiperplastik pulpit
Açıklama: Çocuk ve genç erişkinlerde, özellikle geniş kaviteli molar dişlerde görülen, aşırı granülasyon dokusunun pulpadan dışarı taşarak polip görünümü oluşturduğu durum kronik hiperplastik pulpittir (pulpa polibi). Dokunun sürekli ağız içine drene olması nedeniyle intrapulpal basınç birikimi oluşmaz ve tipik zonklayıcı pulpa ağrısı izlenmez. Piyojenik granülom benzer bir granülasyon dokusu olsa da, spesifik olarak çürük kavitesi içinden köken alıp oklüzal yüzeye taşan bu tablo pulpa polibi için patognomoniktir.

---

### ÇİFT 108 (Benzerlik: 0.75)

**Soru 1 (ID: e416a5e7-df4d-41d2-9aaf-c7bb9b25bced)**
Soru Kökü: Amelogenezis imperfekta sınıflandırmasına göre Tip IVA fenotipinin morfolojik özelliği ve genetik geçişi aşağıdakilerden hangisidir?
Doğru Şık (A): Taurodontizm ile birlikte hipomatürasyon-hipoplastik tip, Otozomal dominant
Açıklama: Amelogenezis imperfekta Tip IVA (ve IVB), mikst tip mine defektlerinin (hipomatürasyon ve hipoplastik) birlikte görüldüğü ve morfolojik olarak genişlemiş pulpa odası (taurodontizm) ile karakterize olan spesifik otozomal dominant alt tiplerdir. Mine bozukluğu ile pulpa odası morfolojisi kusurunun entegre olduğu tek AI sınıfıdır.

**Soru 2 (ID: 8d9fe40e-4b7b-4270-a6bd-95addcbfd702)**
Soru Kökü: Amelogenezis imperfekta (Aİ) alt tipleri klinik görünüm ve kalıtım şekline göre ayrılır. X'e bağlı geçiş gösteren ve klinik olarak 'karla kaplı' (snow-capped) mine görünümü veren Tip IIC, Aİ'nin hangi ana sınıfında yer almaktadır?
Doğru Şık (B): Hipomatürasyon
Açıklama: Tip IIC (karla kaplı) amelogenezis imperfekta, X'e bağlı geçiş gösteren spesifik bir hipomatürasyon tipidir. Mine matrisi normal kalınlıkta sentezlenir ancak mineralizasyonun son aşaması olan kristal büyümesi ve protein uzaklaştırılması kusurlu olduğu için opak, tebeşirimsi (karla kaplı) bir hal alır. Hipoplastik formlarda ise matriks sentezi baştan eksiktir.

---

### ÇİFT 109 (Benzerlik: 0.75)

**Soru 1 (ID: 3c7089b0-d735-4259-9aa1-819848886843)**
Soru Kökü: Yenidoğan döneminde ağız mukozasında izlenen kistik lezyonlar ile ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (B): Bohn nodülü - Damak tükürük bezleri epitelinden gelişen odontojenik kisttir
Açıklama: Bohn nodülleri, sert ve yumuşak damak sınırında gelişen keratin dolu kistler olmakla birlikte odontojenik kökenli değildirler; damak minör tükürük bezleri epitelinden gelişirler. Epstein incileri orta hat epitel kalıntılarından, yenidoğan gingival kistleri ise dental lamina (Serre) artıklarından köken alır. Odontojenik ayrımı, bu lezyonların patogenezini ayırt etmede temel klinik markerdır.

**Soru 2 (ID: b2daf790-6e66-49e8-83c0-88d2865fb64e)**
Soru Kökü: İki aylık erkek bebeğin intraoral muayenesinde sert ve yumuşak damak sınırında orta hattan uzak lokalizasyonda küçük, beyaz renkli keratin dolu kistler tespit edilmiştir. Bu lezyonların köken aldığı doku aşağıdakilerden hangisidir?
Doğru Şık (E): Damak tükürük bezleri epiteli
Açıklama: Sert ve yumuşak damak sınırında görülen Bohn nodülleri odontojenik kökenli değildir ve damak tükürük bezlerinin epitelinden köken alır. Alveolar krette görülen infant gingival kistleri dental lamina (Serre) artığı iken, orta hatta yerleşen Epstein incileri palatal inklüzyon kistleridir.

---

### ÇİFT 110 (Benzerlik: 0.75)

**Soru 1 (ID: 0ea5279a-57f5-4315-93f6-2d86d0f91c8f)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, jeneralize diş eti büyümesi ve kanama şikayetiyle başvurmuştur. Anamnezinde çocukluğundan beri epilepsi tedavisi gördüğü öğrenilen bu hastada, gingival hiperplaziye neden olması **en muhtemel** ilaç aşağıdakilerden hangisidir?
Doğru Şık (D): Fenitoin
Açıklama: Fenitoin bir antikonvülzandır ve epilepsi tedavisinde kullanılır, gingival hiperplazinin en klasik nedenlerinden biridir. Nifedipin kalsiyum kanal blokörü, siklosporin immünosüpresan, eritromisin ise antibiyotik olarak hiperplazi yapar.

**Soru 2 (ID: ca1037e0-62fc-41bd-ac4a-b251531dd98a)**
Soru Kökü: Epilepsi öyküsü olan ve nöbet kontrolü amacıyla karbamazepin kullanan 22 yaşındaki erkek hastanın ağız içi muayenesinde; anterior dişeti bölgelerinde yaygın kırmızı, kanamaya meyilli ve nodüler hiperplastik lezyonlar izlenmektedir. Hastanın anamnezinde ek olarak idiyopatik hipertansiyon nedeniyle yakın zamanda ikinci bir sistemik ilaç kullanmaya başladığı saptanmıştır. Mevcut gingival hiperplazi tablosunu belirgin şekilde alevlendirme potansiyeline sahip bu ikinci ilaç (antihipertansif) aşağıdakilerden hangisi olabilir?
Doğru Şık (A): Kalsiyum kanal blokerleri
Açıklama: Sistemik ilaçlara bağlı olarak gelişen gingival hiperplazilerde farmakolojik ajanlar genellikle fibroblast proliferasyonunu veya kollajen yıkım mekanizmalarını bozarak bu duruma yol açarlar. Antikonvülzan ilaçlara (karbamazepin, fenitoin, valproat vb.) ek olarak kalsiyum kanal blokerleri (nifedipin, amlodipin, diltiazem, verapamil vb.) bu tabloyu en sık tetikleyen veya mevcut bir hiperplaziyi agresif şekilde alevlendiren antihipertansif ilaç grubudur. ACE inhibitörleri veya beta blokerlerin böyle bir spesifik yan etkisi yoktur.

---

### ÇİFT 111 (Benzerlik: 0.75)

**Soru 1 (ID: f81483d6-13b3-4eb9-ab09-58e25bbc2874)**
Soru Kökü: Çocukluk çağında geçirilen ağır viral enfeksiyonların oral bulguları incelendiğinde, kızamık patofizyolojisinde izlenen ve virüsün konak epitel hücre membranlarında kaynaşma yaratarak nükleusların tek bir sitoplazmada birikmesine neden olan histopatolojik karakteristik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Whartin-Finkeldey dev hücreleri
Açıklama: Kızamıkta virüsün majör sitopatik etkisi, enfekte epitel ve lenfoid hücrelerin membranlarını kaynaştırarak (füzyon) oluşturduğu Whartin-Finkeldey dev hücreleridir. Tüberküloz veya sifilizde izlenen makrofaj kökenli Langhans dev hücrelerinin aksine, bu hücreler granülomatöz bir inflamasyonun değil, doğrudan viral membran füzyonunun yapısal bir sonucudur. Mikrobiyolojik ve histolojik ayrımda bu hücresel köken farkı esastır.

**Soru 2 (ID: 38b58cec-56f0-47f3-8cf7-ddbb60c34d5c)**
Soru Kökü: Kızamık enfeksiyonunun karakteristik histopatolojik bulgusu olan Whartin-Finkeldey dev hücrelerinin patogenezi aşağıdakilerden hangisine dayanır?
Doğru Şık (B): Enfekte epitel hücrelerinin zarlarının virüs sitopatik etkisiyle kaynaşması (füzyon)
Açıklama: Kızamık virüsünün epitel hücrelerinde yarattığı majör sitopatik etki, enfekte hücre membranlarının birbirine kaynaşmasıdır (füzyon). Bu hücresel füzyon, sitoplazmik sınırları ortadan kaldırarak nükleusların Whartin-Finkeldey dev hücreleri içinde toplanmasına neden olur. Tüberküloz veya sifilizdeki Langhans dev hücreleri hücresel bağışıklık (makrofaj) kökenliyken, kızamıktaki dev hücreler doğrudan virüsün bu birleştirici etkisine sekonderdir.

---

### ÇİFT 112 (Benzerlik: 0.75)

**Soru 1 (ID: 8f9db9de-1415-4ecd-9135-5fc4e99fc00d)**
Soru Kökü: 30 yaşında, bilinen kronik bir sistemik hastalık öyküsü olmayan sağlıklı görünümlü erkek hasta, yanak mukozasında beyaz lekeler şikayetiyle başvuruyor. Muayenede her iki bukkal mukozada ve damakta yer alan, gazlı bezle mekanik olarak kazındığında kolayca parçalanıp sıyrılabilen ve altında hafif eritemli bir yüzey bırakan beyaz-krem renkli pamukçuk lezyonları (psödomembranlar) saptanıyor. Hastanın anamnezinde steroid kullanımı yoktur. Bu klinik tablonun altta yatan hücresel immün yetmezlik riskine bağlı olarak diş hekimini yönlendirmesi gereken tıbbi araştırma aşağıdakilerden hangisidir?
Doğru Şık (B): HIV (AIDS) serolojisi ve T hücre değerlendirmesi
Açıklama: Risk faktörü (diyabet, steroid, kemoterapi) bulunmayan erişkin bir erkekte aniden ortaya çıkan kazınabilir psödomembranöz kandidiyazis (pamukçuk), hücresel T-lenfosit defektini ve immünsüpresyonu gösteren patognomonik klinik kurgudur ve mutlaka HIV/AIDS araştırmasını gerektirir. Serum demir ve B12 tetkikleri kazınabilir beyaz plaklarla değil, doğrudan dil sırtında ağrılı atrofi ve kızarıklıkla (glossit) karşımıza çıkar. Fırsatçı Kandida hifleri, immün sistemin hücresel savunma ayağı çöktüğünde mukozada kontrolsüzce kolonize olarak bu zarları üretir.

**Soru 2 (ID: 9ff88707-3b49-4a97-989b-597b677bfaea)**
Soru Kökü: Kırk beş yaşındaki immünsüprese bir hastanın ağız içi muayenesinde dilinin lateral kenarlarında tüy benzeri beyaz lezyonlar saptanıyor. Tanısal değerlendirme sırasında spatül ile yapılan kazıma testinde, epiteliyal beyaz plakların yüzeyden kolayca sıyrılabildiği ve altından eritemli-kanamalı bir dokunun ortaya çıktığı gözlemleniyor. Bu fiziksel bulguya göre, hastadaki lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Psödomembranöz kandidiyazis
Açıklama: Fiziksel kazıma testinde beyaz lezyonun yüzeyden sıyrılarak altından kanamalı eritemli dokunun çıkması, patolojinin mukozal epitel hiperkeratozu değil, yüzeyel bir enfeksiyöz membran olduğunu kanıtlar. Bu klinik davranış psödomembranöz kandidiyazise (pamukçuk) özgüdür. Kıllı lökoplaki, idiyopatik lökoplaki ve friksiyonel keratoz epitelin bizzat kendi kalınlaşması olduğu için KESİNLİKLE kazınamazlar.

---

### ÇİFT 113 (Benzerlik: 0.75)

**Soru 1 (ID: 34518302-9c53-42b2-87ab-d80cdba3bbc0)**
Soru Kökü: 35 yaşında bilinen HIV pozitifliği olan erkek hasta, oral mukozada normalden çok daha yaygın, atipik derinliğe ulaşan ve aylardır iyileşmeyen yıkıcı vezikülobüllöz lezyonlarla başvuruyor. 
Hastada tespit edilen bu kronik destrüktif Herpes simpleks formunun patofizyolojisindeki ikincil etken mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): T-hücre disfonksiyonuna bağlı hücresel savunmanın çökerek virüsün litik aktivitesine açık hale gelmesi
Açıklama: HIV enfeksiyonunda gelişen edinsel immün yetmezlik, spesifik olarak T-hücre disfonksiyonuna yol açar. Hücresel bağışıklığın çökmesiyle, normalde kendini sınırlayan Herpes simpleks virüsü fırsatçı karakter kazanır ve oral kavitede son derece yaygın, kronik ve derin doku yıkan lezyonlar yaratır.

**Soru 2 (ID: e185a660-23ed-4b8d-949b-5704ba287243)**
Soru Kökü: Edinsel immün yetmezlik sendromu (HIV) olan hastalarda, T-hücre disfonksiyonuna bağlı olarak hücresel savunmanın çökmesi, spesifik fırsatçı viral enfeksiyonların klinik seyrini kökten değiştirir. Bu hasta grubunda Herpes Simpleks virüsü enfeksiyonları için beklenen **en tipik** patolojik seyir aşağıdakilerden hangisidir?
Doğru Şık (C): Lezyonların sınırlandırılamayarak çok daha yaygın, kronik ve doku yıkıcı karakter alması
Açıklama: HIV (+) hastalarda T-hücresel immünitenin çökmesi, latent HSV enfeksiyonlarının kontrolünü imkansız kılar. Bağışıklık baskılandığı için lezyonlar lokalize kendini sınırlayan veziküller olmak yerine; çok daha geniş alanlara yayılan, derin doku nekrozu yapan kronik ve yıkıcı ülserasyonlar halini alır. HSV'nin aft oluşturma veya Whartin-Finkeldey (kızamık) hücresi yapma özelliği yoktur.

---

### ÇİFT 114 (Benzerlik: 0.75)

**Soru 1 (ID: cffa014e-4367-4aa6-8598-423838d837fb)**
Soru Kökü: Sebebi bilinmeyen sistemik granülomatöz bir hastalık olan Melkersson-Rosenthal sendromunun klasik klinik triyadında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (C): Coğrafik dil
Açıklama: Melkersson-Rosenthal sendromunun klasik triyadı tekrarlayan fasiyal paralizi, fissürlü dil ve ağrısız, gode bırakmayan orofasiyal ödemden oluşmaktadır. Coğrafik dil (eritema migrans), Melkersson-Rosenthal triyadının bir parçası değildir; psoriazis, atopi ve Reiter sendromu ile ilişkili farklı bir patolojidir. Orofasiyal ödem genellikle üst dudakta lokalize olma eğilimindedir.

**Soru 2 (ID: b6e0c757-fa02-4199-a408-15e01ac8078f)**
Soru Kökü: Ani gelişen ve saniyeler/dakikalar içinde büyüyen orofasiyal ödem ataklarıyla karakterize alerjik anjioödem tablosu ile, Melkersson-Rozental sendromundaki orofasiyal ödemin birbirlerinden ayrımında kullanılan en kritik fiziksel bulgu ve mekanistik fark aşağıdakilerden hangisidir?
Doğru Şık (E): Melkersson-Rozental sendromunda hücresel yığılıma bağlı ödemin gode bırakmayan (non-pitting) sert yapıda olması
Açıklama: Anjioödem, artmış vasküler geçirgenliğe bağlı sıvı sızması olduğu için çok hızlı gelişir ve yumuşak, gode bırakan (pitting) özelliktedir. Melkersson-Rozental sendromunda ise ödem, lenfatik kanalları tıkayan hücresel bazlı non-kazeifiye granülomatöz inflamasyon sonucu yavaş gelişir ve sıvıdan ziyade doku hücresi yığılımı olduğu için patognomonik olarak gode bırakmaz (non-pitting).

---

### ÇİFT 115 (Benzerlik: 0.75)

**Soru 1 (ID: 0c5e8452-034b-4f3b-bc85-6aa288aaa997)**
Soru Kökü: Epitel hücrelerindeki desmozomal defekt ve disfonksiyon sonucu hücreler arası adezyonun bozulduğu, yanak mukozası ve diş etlerinde 'kaldırım taşı' görünümü veren beyaz kabarıklıkların izlendiği otozomal dominant geçişli hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Foliküler keratozis
Açıklama: Foliküler keratozis (Darier hastalığı), ATP2A2 gen mutasyonu kaynaklı desmozomal disfonksiyon ile seyreden ve oral mukozada tipik olarak kaldırım taşı görünümü veren bir hastalıktır. Herediter benign intraepitelyal diskeratoziste (Witkop hastalığı) desmozomal kayıptan ziyade bukkal ve konjonktival plaklar ön plandadır. Hastalığın seboreik bölgeleri tutması ayırıcı tanıda önemlidir.

**Soru 2 (ID: 8fba4627-7c28-42c2-986d-5f55bd55d2e4)**
Soru Kökü: On beş yaşındaki erkek hasta, yanak, dudak ve diş eti mukozasında diskeratotik beyaz kabarıklıkların birleşmesiyle oluşan 'kaldırım taşı' benzeri lezyonlar ile başvuruyor. Dermatolojik muayenesinde alın ve nasolabial kıvrımlar gibi seboreik bölgelerde de benzer döküntüler saptanıyor. Bu hastalığın patogenezinde rol oynayan temel moleküler defekt aşağıdakilerden hangisidir?
Doğru Şık (A): ATP2A2 gen mutasyonuna sekonder kalsiyum pompa disfonksiyonu
Açıklama: Darier hastalığı (Foliküler keratozis), ATP2A2 gen mutasyonu sonucu hücre içi kalsiyum pompasının bozulması ve sekonder desmozom defekti (akantoliz) ile karakterize, mukokutanöz kaldırım taşı görünümü veren otozomal dominant bir hastalıktır. Keratin 4/13 mutasyonu sadece ağız içini tutan Beyaz Sünger Nevüs'ün etkenidir. Desmoglein antikorları pemfigus vulgariste izlenir.

---

### ÇİFT 116 (Benzerlik: 0.75)

**Soru 1 (ID: ed086797-fd67-4b4c-b04a-aa18c79e6b57)**
Soru Kökü: Hem friksiyonel hiperkeratoz hem de ters sigara içiciliğine bağlı revers smokers palatal lezyonu, oral epitelde kalınlaşma (hiperkeratoz) ve beyaz plak görünümü yaratır. Ancak friksiyonel keratozun malignite riski sıfırken, ters sigara lezyonunun 5 yıldızlı agresif karsinom potansiyeli barındırmasını sağlayan patofizyolojik (karsinogenez) basamağı aşağıdakilerden hangisidir?
Doğru Şık (B): Yüksek termal ve kimyasal şokun doğrudan bazal tabaka hücrelerinde DNA hasarı ve displastik atipi yaratması
Açıklama: Friksiyonel hiperkeratozda uygulanan düşük enerjili mekanik kuvvet sadece yüzeyel koruma için mitozu artırır, genetik koda zarar vermez. Oysa sigaranın yanan ucunun (ateşin) ağız içinde tutulmasıyla oluşan masif termal şok ve yoğun karsinojenler, epitelin savunma sınırını aşıp doğrudan stratum basale'deki hücrelerin çekirdek yapısını bozar. Oluşan DNA hasarı, otonom displastik klonları yaratarak yüksek riskli karsinogenezi başlatır.

**Soru 2 (ID: 9923121c-f772-41c0-8a53-105429120fb9)**
Soru Kökü: Uzun yıllardır sigara kullanan bir hastanın sert damak mukozasında izlenen klasik nikotinik stomatit (stomatitis nicotina) ile, ters sigara içiciliğine bağlı gelişen revers smokers palatal lezyonu arasındaki en kritik patolojik ayrım aşağıdakilerden hangisidir?
Doğru Şık (C): Klasik nikotin stomatitinin minör tükürük bezi kanallarının malignite içermeyen reaktif inflamasyonu olması, ters sigara içiminin ise epitelde geri dönüşümsüz displazi yapması
Açıklama: Klasik nikotinik stomatit, sigara dumanının yaydığı ısıya bağlı olarak damaktaki minör tükürük bezlerinin duktuslarında gelişen benign reaktif inflamasyondur ve karsinom potansiyeli kesinlikle yoktur. Buna karşın ters sigara içiciliğinde yanan ateşin doğrudan mukozaya teması (termal/kimyasal şok) minör bezleri aşarak doğrudan skuamöz epitelde masif displazi ve 5 yıldızlı yüksek karsinogenez yaratır.

---

### ÇİFT 117 (Benzerlik: 0.75)

**Soru 1 (ID: f0481caa-15ca-4cc3-a66e-bb1b0f8e0f2d)**
Soru Kökü: Bağışıklık sistemi bozulmuş (özellikle AIDS hastaları) bireylerin genellikle dil lateral yüzeylerinde saptanan, kazınmakla sıyrılmayan, beyaz, tüy gibi birleşen yama şeklindeki lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Kıllı lökoplaki
Açıklama: Kıllı lökoplaki, immünsüpresif bireylerde hücresel bağışıklığın çökmesiyle fırsatçı olarak beliren, tüy tarzında beyaz uzantılar yapan ve kazınamayan patognomonik lezyondur. Psödomembranöz kandidiyazis immünsüpresyonda görülse de kazındığında kolayca sıyrılıp altta eritem bırakmasıyla kıllı lökoplakiden ayrılır. Bu lezyon HIV progresyonunun önemli bir klinik belirtecidir.

**Soru 2 (ID: 9ff88707-3b49-4a97-989b-597b677bfaea)**
Soru Kökü: Kırk beş yaşındaki immünsüprese bir hastanın ağız içi muayenesinde dilinin lateral kenarlarında tüy benzeri beyaz lezyonlar saptanıyor. Tanısal değerlendirme sırasında spatül ile yapılan kazıma testinde, epiteliyal beyaz plakların yüzeyden kolayca sıyrılabildiği ve altından eritemli-kanamalı bir dokunun ortaya çıktığı gözlemleniyor. Bu fiziksel bulguya göre, hastadaki lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Psödomembranöz kandidiyazis
Açıklama: Fiziksel kazıma testinde beyaz lezyonun yüzeyden sıyrılarak altından kanamalı eritemli dokunun çıkması, patolojinin mukozal epitel hiperkeratozu değil, yüzeyel bir enfeksiyöz membran olduğunu kanıtlar. Bu klinik davranış psödomembranöz kandidiyazise (pamukçuk) özgüdür. Kıllı lökoplaki, idiyopatik lökoplaki ve friksiyonel keratoz epitelin bizzat kendi kalınlaşması olduğu için KESİNLİKLE kazınamazlar.

---

### ÇİFT 118 (Benzerlik: 0.75)

**Soru 1 (ID: 05245b6d-6a56-476a-96d4-a560c4c8eb7f)**
Soru Kökü: Otuz yaşında erkek hasta, boyunda giderek büyüyen ve yutkunma güçlüğü yaratan iri bir lenf nodu şişliği ile kliniğe başvuruyor. Yapılan intraoral muayenede orofarenkste çok küçük, zor fark edilen bir primer lezyon tespit ediliyor. Hastanın sigara veya alkol kullanım öyküsü bulunmuyor. Alınan biyopsinin histopatolojik incelemesinde en olası bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Non-keratinize skuamoz hücreli karsinom
Açıklama: Senaryodaki genç yaş, sigara/alkol eksikliği, orofarenks yerleşimi ve 'iri nodal hastalık ile küçük primer lezyon' tablosu tipik HPV-ilişkili SCC bulgularıdır. HPV-ilişkili SCC'ler histopatolojik olarak non-keratinize özellik gösterirken, klasik HPV-ilişkisiz oral kavite SCC'leri keratinizedir (keratin incileri içerir). Bu tümörler büyük boyun kitlelerine rağmen paradoksal olarak daha iyi prognoza sahiptir.

**Soru 2 (ID: fcc2b75b-dbb1-4833-b482-26c77fc36096)**
Soru Kökü: Altmış beş yaşında, uzun yıllardır tütün çiğneme alışkanlığı olan erkek hastanın alveolar mukozasında geniş, düzensiz parmaksı çıkıntılar gösteren ekzofitik bir lezyon saptanıyor. Biyopside metastaz potansiyeli çok düşük, iyi diferansiye bir epitelyal tümör izleniyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Verrüköz karsinom
Açıklama: Verrüköz karsinom; sıklıkla tütün emen/çiğneyen yaşlı erkeklerde, en sık alveolar mukoza ve yanakta yerleşen, parmaksı çıkıntılar gösteren ekzofitik ve çok iyi diferansiye bir SCC varyantıdır. Metastaz potansiyeli klasik SCC'ye göre oldukça düşüktür ve tedavisi öncelikle cerrahidir. Klasik SCC ülseratif ve daha invaziv bir paternde büyür.

---

### ÇİFT 119 (Benzerlik: 0.75)

**Soru 1 (ID: f5c8499e-217c-4803-9286-954054f152a5)**
Soru Kökü: Altmış yaşında erkek hasta; sağ kulağında ve boğazında döküntü öncesi başlayan şiddetli ağrı, aynı taraf yüz yarısında alın kaslarını da içeren sarkma ve dış kulak yolunda veziküler döküntüler tablosuyla kliniğe başvuruyor. Bu hastada patolojiye neden olan virüsün reaktivasyon kaskadının başladığı spesifik anatomik bölge neresidir?
Doğru Şık (C): Genikulat gangliyon
Açıklama: Tarif edilen tek taraflı periferik yüz felci (alın dahil), dış kulak yolunda veziküller ve prodromal nevraljik ağrı triadı Ramsay Hunt sendromudur. Bu sendromun patofizyolojisi, Varicella Zoster Virüsünün (VZV) fasiyal sinirin duyu gangliyonu olan genikulat gangliyonda reaktive olup anterograt yolla inmesine dayanır. Trigeminal gangliyon (veya Gasser), Herpes simpleks virüsünün (HSV) reaktivasyon bölgesidir.

**Soru 2 (ID: 7bf04f7a-5d50-4bc2-88ca-3bc46b35ef11)**
Soru Kökü: 55 yaşında kadın hasta, dış kulak yolunda ağrılı veziküler döküntüler, şiddetli boğaz ağrısı ve yüzünün sol tarafında motor kayıp (yüz felci) ile kliniğe başvuruyor. Muayenede dilin ön 2/3'lük kısmında tat duyusunun tamamen kaybolduğu saptanıyor. Bu özgün klinik triadı oluşturan Ramsay-Hunt sendromunun etiyolojik virüsü aşağıdakilerden hangisidir?
Doğru Şık (B): Varisella zoster virüsü
Açıklama: Ramsay-Hunt sendromu, çocukluk çağında su çiçeği etkeni olarak alınan Varisella Zoster Virüsünün (Herpes Zoster) yıllar sonra fasiyal sinir ganglionunda (Ganglion geniculi) reaktivasyonu sonucu ortaya çıkan özgün bir zona formudur. Fasiyal sinirin korda timpani dalını tutması tat kaybına, motor dalını tutması yüz felcine ve kulak komşuluğu dış kulak yolu veziküllerine yol açar. HSV-1'de trigeminal sinir tutulumu ağırlıkta olup motor yüz felci ve spesifik kulak vezikülleri beklenmez.

---

### ÇİFT 120 (Benzerlik: 0.75)

**Soru 1 (ID: 43329d62-4a22-4c2c-966e-42a26bd40f86)**
Soru Kökü: Aşağıdaki viral ajanlardan hangisi, primer enfeksiyonu sonrasında bağışıklık sistemi tarafından tamamen elimine edilemeyerek retrograt aksonal transport ile trigeminal gangliyona taşınır ve stres durumlarında sekonder intraoral lezyonları tetikler?
Doğru Şık (C): Herpes Simpleks Virüsü
Açıklama: Herpes Simpleks Virüsü (HSV), primer enfeksiyon sonrası retrograt aksonal taşınma ile bölgesel duyu gangliyonlarına (orofasiyal bölge için trigeminal gangliyon) ulaşır ve burada sonsuza kadar latent kalır. Tetikleyici faktörlerle (stres, UV vb.) anterograt yolla yüzeye inerek keratinize dokularda sekonder herpesi oluşturur. Koksaki veya kızamık virüslerinde gangliyonda nöral latensi ve aksonal transport kaskadı yoktur.

**Soru 2 (ID: 486cb22b-ac48-4353-9844-f2679ec70770)**
Soru Kökü: Aşağıdaki viral ajanlardan hangisinin neden olduğu vezikülobüllöz enfeksiyonun prodromal döneminde, döküntülerden **önce** lezyon bölgesinde kaşıntı ve karıncalanmadan ziyade, patognomonik olarak şiddetli nevraljik boğaz/kulak ağrısı gözlenir?
Doğru Şık (C): Varicella Zoster Virüsü
Açıklama: Herpes Zoster (Varicella Zoster Virüsü - VZV) enfeksiyonlarında, virüsün sinir trasesi boyunca anterograt taşınımı sırasındaki nöral inflamasyona bağlı olarak veziküler döküntülerden önce şiddetli nevraljik ağrı izlenir (örn. Ramsay Hunt sendromu). Herpes simpleks (HSV) enfeksiyonlarında ise prodromal faz daha çok lokal kaşıntı ve karıncalanma hissi ile seyreder. Koksaki virüslerinde ise bu şekilde tipik bir şiddetli nevraljik prodrom kaskadı bulunmaz.

---

### ÇİFT 121 (Benzerlik: 0.74)

**Soru 1 (ID: 0d065171-16d7-4afb-a00c-e79a1f83778f)**
Soru Kökü: Aşağıdaki oral mukozal lezyonlardan hangisinin invaziv karsinoma dönüşüm (malignite) potansiyeli diğerlerinden belirgin şekilde daha düşüktür?
Doğru Şık (E): Dumansız tütün keratozu
Açıklama: Dumansız tütün keratozu düşük malignite riskine (1 yıldız) sahipken, proliferatif verrüköz lökoplaki (%100'e varan en yüksek risk), eritroplaki, oral submüköz fibrozis ve eritrolökoplaki karsinomlaşma riski oldukça yüksek lezyonlardır.

**Soru 2 (ID: 0d3671bb-ae7c-40ed-bc58-e30510278bd7)**
Soru Kökü: Oral bölgede izlenen premalign mukoza lezyonlarından hangileri skuamöz hücreli karsinoma (SCC) dönüşüm açısından diğerlerinden çok daha yüksek risk taşır?
I. Proliferatif Verrüköz Lökoplaki
II. Revers Smokers Palatal Lezyonu
III. Kıllı Lökoplaki
IV. Oral Submuköz Fibrozis
Doğru Şık (B): I, II ve IV
Açıklama: Proliferatif Verrüköz Lökoplaki (bazı serilerde %100 risk), Revers Smokers Palatal Lezyonu (5 yıldızlı) ve betel cevizi ilişkili Oral Submuköz Fibrozis (5 yıldızlı) oral kavitenin en agresif premalign lezyonlarındandır. Epstein-Barr virüsü kökenli Kıllı (Hairy) Lökoplaki ise adına rağmen hücresel displazi barındırmaz ve kanserleşme (malignite) riski SIFIRDIR.

---

### ÇİFT 122 (Benzerlik: 0.74)

**Soru 1 (ID: 59bd8c3d-c8f5-4ed8-aaad-e0533106a1ec)**
Soru Kökü: Çene kemiklerinde nadir görülen, radyografik olarak 'sabun köpüğü' manzarası verebilen, mikroskobik olarak döşeyici epiteli bulunmayan, bunun yerine içleri kanla dolu geniş sinüzoidal boşluklar ve bu boşlukları çevreleyen bağ dokusu içerisinde bol miktarda osteoklast tipi multinükleer dev hücreler içeren lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, gerçek bir epiteliyal kist olmayıp; arteriyovenöz malformasyonlar zemininde geliştiği düşünülen, kemiği ekspanse eden ve histolojik olarak kan dolu kavernöz/sinüzoidal kistik boşluklar ve septalarda dev hücreler içeren bir patolojidir. Travmatik (basit) kemik kistleri içi boş veya berrak sıvıyla dolu boşluklar iken, anevrizmal kistler yoğun hemorajik içeriğe sahiptir ve solid santral dev hücreli granülomdan ayırıcı tanısında bu kan göllenmeleri kritik rol oynar.

**Soru 2 (ID: 622485bb-7adb-4852-99c8-8eaa5426e618)**
Soru Kökü: On altı yaşında erkek hasta, alt çenesinde herhangi bir ağrı şikayeti olmadan rutin diş kontrolü için kliniğe başvuruyor. Alınan panoramik radyografide mandibular premolar ve molar dişlerin kökleri arasına doğru uzanan, sınırları belirgin ve kökleri çentik şeklinde (scalloped) saran radyolüsen bir lezyon saptanıyor. Kist kavitesi cerrahi olarak açıldığında içinin boş olduğu ve döşeyici bir epiteli bulunmadığı görülüyor. Bu hasta için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (soliter kemik kisti), kemik içinde boş veya sıvı ile dolu, gerçek bir epitel döşemesi olmayan ve diş kökleri arasına scalloped (çentikli) uzanan bir yalancı kisttir. Anevrizmal kemik kisti kanla dolu boşluklardan oluşurken, travmatik kemik kisti kavitesi tipik olarak boştur. Tedavisi cerrahi küretaj ile kavite içinde kanama indükleyerek iyileşmeyi sağlamaktır.

---

### ÇİFT 123 (Benzerlik: 0.74)

**Soru 1 (ID: 9ff88707-3b49-4a97-989b-597b677bfaea)**
Soru Kökü: Kırk beş yaşındaki immünsüprese bir hastanın ağız içi muayenesinde dilinin lateral kenarlarında tüy benzeri beyaz lezyonlar saptanıyor. Tanısal değerlendirme sırasında spatül ile yapılan kazıma testinde, epiteliyal beyaz plakların yüzeyden kolayca sıyrılabildiği ve altından eritemli-kanamalı bir dokunun ortaya çıktığı gözlemleniyor. Bu fiziksel bulguya göre, hastadaki lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Psödomembranöz kandidiyazis
Açıklama: Fiziksel kazıma testinde beyaz lezyonun yüzeyden sıyrılarak altından kanamalı eritemli dokunun çıkması, patolojinin mukozal epitel hiperkeratozu değil, yüzeyel bir enfeksiyöz membran olduğunu kanıtlar. Bu klinik davranış psödomembranöz kandidiyazise (pamukçuk) özgüdür. Kıllı lökoplaki, idiyopatik lökoplaki ve friksiyonel keratoz epitelin bizzat kendi kalınlaşması olduğu için KESİNLİKLE kazınamazlar.

**Soru 2 (ID: c0b21f81-b3fa-4541-8fe1-487bb08f1b53)**
Soru Kökü: On yaşındaki hastanın ağız içi muayenesinde, her iki yanak mukozasını kaplayan kalın, yumuşak, süngerimsi beyaz plaklar saptanıyor. Alınan biyopsinin histopatolojik incelemesinde stratum spinozum tabakasındaki prickle (dikensi) hücrelerde sitoiskelet çöküşünü simgeleyen 'perinükleer eozinofilik kondensasyon' raporlanıyor. Bu hastadaki lezyonun etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Keratin 4 ve Keratin 13 genlerinde mutasyon
Açıklama: Keratin 4 ve 13 gen mutasyonu, sitoiskelet ağının bozulmasına ve spesifik olarak hücrelerde hidropik dejenerasyon ile patognomonik 'perinükleer eozinofilik kondensasyon' oluşumuna neden olarak Cannon hastalığını (Beyaz Sünger Nevüs) tetikler. Kalsiyum pompa defekti Darier hastalığına, EBV kıllı lökoplakiye, sürtünme friksiyonel keratoza yol açar.

---

### ÇİFT 124 (Benzerlik: 0.74)

**Soru 1 (ID: adaad2a1-3475-4177-bc72-037737007f6b)**
Soru Kökü: Eritema Migrans (Benign Migratuvar Glossit) tablosunun klinik davranış mekanizmaları ve sendromik birliktelikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Üretrit ve konjonktivitin eşlik ettiği Reiter sendromunda bu mukoza lezyonlarının görülmesi imkansızdır.
Açıklama: HLA-B27 pozitifliği, üretrit, konjonktivit ve artrit triadı ile seyreden Reiter sendromu vakalarında, oral kavitede doğrudan coğrafik dile (eritema migrans) benzeyen oral lezyonlar saptanır; bu ilişkinin görülmesi imkansız değildir, aksine sorgulanan bir eşleşmedir. Coğrafik dilin en karakteristik fiziksel muayene bulgusu, sabit olmayan (gezici) kırmızı atrofik lezyonların etrafını saran sarı-beyaz sınırla izole edilmesidir. Sendromik zeminler incelendiğinde atopik ve psöriatik hücresel tepkilerle patofizyolojik bağı çok güçlüdür.

**Soru 2 (ID: 91a0626f-b234-4b60-99b3-cc8340ef6d67)**
Soru Kökü: Eritema migrans (coğrafik dil), dil dorsumunda lokalize papilla atrofisi ve gezici hiperkeratotik sınırlarla karakterize inflamatuar bir patolojidir. Bu lezyon, aşağıdaki sistemik hastalıklardan hangisi ile **birliktelik göstermez**?
Doğru Şık (D): Sistemik skleroz (Skleroderma)
Açıklama: Eritema migrans (coğrafik dil) güçlü bir şekilde Psoriazis, Reiter sendromu (reaktif artrit), atopi ve seboreik dermatit gibi immün-reaktif hastalıklarla eş zamanlı görülme eğilimindedir. Skleroderma (Sistemik skleroz) ise coğrafik dil yapmaz; aksine masif kollajen birikimiyle mikrostomi (trismus), lingual fibrozis ve PDL genişlemesi ile karakterizedir.

---

### ÇİFT 125 (Benzerlik: 0.74)

**Soru 1 (ID: ddb93ee7-e44e-4d37-83bf-925c3615d22a)**
Soru Kökü: Amelogenezis imperfekta sendromlarında genetik geçiş paterni ve klinik tablo çeşitlilik gösterir. Tablo verilerine göre, otozomal resesif kalıtım gösteren ve klinik olarak 'mine agenezi' tablosuyla karakterize edilen hipoplastik tip aşağıdakilerden hangisidir?
Doğru Şık (A): Tip IG
Açıklama: Tip IG amelogenezis imperfekta, otozomal resesif geçiş gösteren ve mine agenezi ile karakterize olan spesifik bir hipoplastik varyanttır. Tip IE x'e bağlı dominant, Tip IIC x'e bağlı hipomatürasyon (karla kaplı) formunu temsil eder. Sınıflandırma tablolarında genetik geçiş ile morfolojik tanımın entegre edilmesi ayırıcı tanıda esastır.

**Soru 2 (ID: 8d9fe40e-4b7b-4270-a6bd-95addcbfd702)**
Soru Kökü: Amelogenezis imperfekta (Aİ) alt tipleri klinik görünüm ve kalıtım şekline göre ayrılır. X'e bağlı geçiş gösteren ve klinik olarak 'karla kaplı' (snow-capped) mine görünümü veren Tip IIC, Aİ'nin hangi ana sınıfında yer almaktadır?
Doğru Şık (B): Hipomatürasyon
Açıklama: Tip IIC (karla kaplı) amelogenezis imperfekta, X'e bağlı geçiş gösteren spesifik bir hipomatürasyon tipidir. Mine matrisi normal kalınlıkta sentezlenir ancak mineralizasyonun son aşaması olan kristal büyümesi ve protein uzaklaştırılması kusurlu olduğu için opak, tebeşirimsi (karla kaplı) bir hal alır. Hipoplastik formlarda ise matriks sentezi baştan eksiktir.

---

### ÇİFT 126 (Benzerlik: 0.74)

**Soru 1 (ID: 5e9afff0-0426-4690-ba8d-19cd97294105)**
Soru Kökü: Yenidoğan döneminde görülen ve ebeveynleri endişelendiren kistik oluşumlar klinik varyantlarına göre ayrılır. Orta hatta (sert damak rafesinin birleşim yeri) embriyolojik birleşme hattında hapsolan epitel hücrelerinden gelişen ve yüzeyi skuamöz kist epiteli ile örtülü olup kendiliğinden regrese olan kist grubuna ne ad verilir?
Doğru Şık (A): Epstein incileri
Açıklama: Epstein incileri, embriyolojik damak rafe birleşimi sırasında invajine olup hapsolan skuamöz epitel kistleri olup sadece orta hatta görülür. Bohn nodülleri ise minör damak tükürük bezleri kökenlidir ve genellikle damak kretinin yan kısımlarına yerleşir. İkisi de bebek büyüdükçe yüzeye açılıp kendiliğinden soyularak (patlayarak) kaybolur.

**Soru 2 (ID: a3f33e5e-210e-4121-8f0c-95185903d649)**
Soru Kökü: Yenidoğan bir bebeğin ağız içi muayenesinde, damak orta hattında (palatal rafe üzerinde) bilateral palatal rafların embriyolojik kaynaşması sırasında hapsolmuş epitel hücrelerinden köken alan, inci benzeri küçük sarımsı beyaz kistik kabartılar izleniyor. Hiçbir cerrahi tedavi gerektirmeyen bu benign inklüzyon lezyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Epstein incisi
Açıklama: Epstein incileri, yenidoğanlarda doğrudan palatal orta hat üzerinde yerleşen ve embriyolojik epitel inklüzyonu sonucu oluşan keratin dolu kistlerdir. Bohn nodülleri ektopik tükürük bezlerinden gelişir ve damak lateralinde (sert/yumuşak damak sınırı) yerleşirken; yenidoğanın gingival kistleri dental lamina (Serre) artığı kaynaklı olup alveoler kret üzerinde görülür.

---

### ÇİFT 127 (Benzerlik: 0.74)

**Soru 1 (ID: 3a1de740-49d7-4320-a59f-0e7e371b3d75)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, dudak çevresinde beliren eritemli-mor plaklar ve her iki gözyaşı bezinde büyüme (Mikulicz sendromu) şikayetiyle başvuruyor. Alınan insizyonel biyopside non-kazeifiye granülomatöz inflamasyon saptanıyor. Bu klinik tabloyu, dudaklarda granülomatöz ödem yapan Melkersson-Rozental sendromundan ayıran en spesifik klinik bulgu kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (C): Hastada dudak çevresi mor plaklar ve lakrimal bez tutulumunun (Sarkoidoz) ön planda olması
Açıklama: Hem Sarkoidoz hem de Melkersson-Rozental sendromu orofasiyal bölgede non-kazeifiye granülomatöz inflamasyon yapar. Ancak Sarkoidozda izole dudak ödeminden ziyade dudak çevresinde eritemli-mor plaklar ve lakrimal/tükürük bezi büyümesi (Mikulicz sendromu) izlenirken; Melkersson-Rozental'de patognomonik olarak tekrarlayan fasiyal paralizi ve fissürlü dil eşlik eder. Her iki hastalıkta da ödem non-pitting karakterdedir.

**Soru 2 (ID: cffa014e-4367-4aa6-8598-423838d837fb)**
Soru Kökü: Sebebi bilinmeyen sistemik granülomatöz bir hastalık olan Melkersson-Rosenthal sendromunun klasik klinik triyadında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (C): Coğrafik dil
Açıklama: Melkersson-Rosenthal sendromunun klasik triyadı tekrarlayan fasiyal paralizi, fissürlü dil ve ağrısız, gode bırakmayan orofasiyal ödemden oluşmaktadır. Coğrafik dil (eritema migrans), Melkersson-Rosenthal triyadının bir parçası değildir; psoriazis, atopi ve Reiter sendromu ile ilişkili farklı bir patolojidir. Orofasiyal ödem genellikle üst dudakta lokalize olma eğilimindedir.

---

### ÇİFT 128 (Benzerlik: 0.74)

**Soru 1 (ID: 447fe8de-817d-4929-957b-1fb16f596453)**
Soru Kökü: On iki yaşındaki erkek hastanın ağız içi muayenesinde çok sayıda papiller projeksiyon izlenmektedir. Biyopsi sonucunda akantoz, parakeratoz ve koilositler tespit edilmiştir. Malignite riski bulunmadığı bilinen bu klinik tablo ile spesifik olarak ilişkili etken aşağıdakilerden hangisidir?
Doğru Şık (B): HPV 13
Açıklama: Çocukluk ve adölesan dönemde sık izlenen, ağız içinde multipl papiller yapılar oluşturan ve malign potansiyeli olmayan lezyon Fokal Epitelyal Hiperplazi (Heck Hastalığı) tablosudur. Bu hastalığın patogenezinde spesifik olarak HPV 13 ve 32 tipleri rol oynar. HPV 6 ve 11 daha çok papillom ve kondiloma akuminatum etiyolojisinde yer alır.

**Soru 2 (ID: 18d9e71b-257e-4bec-9068-5011551bdd55)**
Soru Kökü: On beş yaşındaki kız hastanın oral mukozasında çok sayıda papiller nodül tespit edilmiştir. Klinik değerlendirme sonucu fokal epitelyal hiperplazi (Heck hastalığı) ön tanısı konmuştur. Yapılan insizyonel biyopsinin histopatolojik incelemesinde aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Derin subepitelyal bağ dokusu projeksiyonları
Açıklama: Heck hastalığının histopatolojisinde skuamöz hücrelerin benign hiperplazisi, akantoz, parakeratoz ve HPV etkisine işaret eden koilositoz izlenir. Ancak epitel dokusunun altındaki subepitelyal bağ dokusuna doğru derin projeksiyonlar yapması kondiloma akuminatumu papillom/hiperplazi grubundan ayıran spesifik bir morfolojik bulgudur ve Heck hastalığı için beklenen bir durum değildir.

---

### ÇİFT 129 (Benzerlik: 0.74)

**Soru 1 (ID: a222a09c-4f4b-4cd7-9e68-4a3185dc0f19)**
Soru Kökü: On sekiz yaşında erkek hasta, marfanoid vücut yapısı ve dilinde yaygın büyüme (makroglossi) şikayetiyle başvuruyor. Alınan insizyonel biyopside dil stromasını diffüz olarak infiltre eden mukozal nöroma hiperplazileri saptanıyor. Bu klinik bulgular ışığında hastada araştırılması gereken spesifik sendrom aşağıdakilerden hangisidir?
Doğru Şık (E): Multipl Endokrin Neoplazi Tip 2B
Açıklama: Tüm oral kaviteyle birlikte dil stromasını infiltre eden mukozal nöroma hiperplazisi, Multipl Endokrin Neoplazi (MEN) spektrumunda sadece MEN Tip 2B'ye özgü bir bulgudur ve makroglossi tablosuna yol açar. MEN 1 ve MEN 2A'da mukozal nöroma veya buna bağlı makroglossi izlenmez. Nörofibromatoziste ise lezyon pleksiform nörofibrom karakterindedir.

**Soru 2 (ID: 594e49db-1c9f-4bf0-9cd2-b7028dfc8a81)**
Soru Kökü: Nörofibromatozis Tip I hastalarında sekonder olarak makroglossi gelişimine neden olan ve dil stroma dokusu içerisinde kontrolsüz çoğalan patolojik hücresel kütle aşağıdakilerden hangisidir?
Doğru Şık (B): Displastik Schwann hücresi ve fibroblast infiltrasyonları
Açıklama: Nörofibromatozis Tip I'de makroglossi yapan temel lezyon, displastik Schwann hücreleri ve fibroblastların dil stromasında proliferasyonuyla oluşan pleksiform nörofibromlardır. Lenfatik hamartomlar lenfanjiyomun, mukozal nöromalar MEN 2B'nin, distrofin defekti ise Duchenne muskuler distrofinin belirtecidir. Etken hücrelerin histolojik kökeni sendrom tiplendirmesi için anahtar veridir.

---

### ÇİFT 130 (Benzerlik: 0.74)

**Soru 1 (ID: acd6c2ef-af14-4a98-b6c7-b111c182f934)**
Soru Kökü: Kala-Azar hastalığının bir komplikasyonu olarak da meydana gelebilen, ağızda gangren şeklinde beliren ve genellikle öldürücü seyreden stomatit tablosu aşağıdakilerden hangisidir?
Doğru Şık (B): Noma
Açıklama: Noma (Cancrum oris veya gangrenöz stomatit), dokuların hızla nekroza uğradığı ve ciddi sistemik hastalıkların (Kala-Azar gibi) zemininde gelişebilen, yüksek mortalite oranına sahip bir tablodur. Herpanjina ise Coxsackie virüs kaynaklı, yumuşak damakta veziküllerle seyreden kendini sınırlayan masum bir enfeksiyondur. Hızlı ve destrüktif doku kaybı Noma için patognomoniktir.

**Soru 2 (ID: 81466238-3059-4593-b9a1-8e91d5260783)**
Soru Kökü: Beslenmesi ciddi oranda bozulmuş,zayıf 5 yaşındaki hastanın yanak mukozasında siyaha yakın renkte bir ülser gelişiyor ve dokuları hızla tahrip ederek gangrenöz orofasiyal nekroza dönüşüyor. Kala-Azar enfeksiyonu komplikasyonu ekarte edildiğinde, Cancrum oris tablosunda majör doku yıkımından sorumlu enfeksiyöz patojenlerin karekteristiği aşağıdakilerden hangisidir?
Doğru Şık (A): Anaerop yapıdaki patojenik bakteriler
Açıklama: Noma (Cancrum oris veya gangrenöz stomatit) lezyonlarında inanılmaz hızdaki doku tahribatı ve siyaha yakın nekroz oluşumu, oksijensiz ortamda çoğalan ve proteolitik enzimler salgılayan anaerop bakteriler tarafından gerçekleştirilir. DNA virüsleri veya derin mantar patojenleri dokuda bu kadar ani gelişen gangrenöz bir yara profili çizmezler; ülserasyon süreci onlarda daha yavaş ve sınırlıdır. Bu anaerobik yıkımı durdurmak için tedavide ilk basamak olarak yüksek doz penisilin uygulanır.

---

### ÇİFT 131 (Benzerlik: 0.74)

**Soru 1 (ID: 167d4aec-1eed-4a21-8ec6-0f79ac605742)**
Soru Kökü: Çenelerde en sık görülen inflamatuvar kökenli lezyon olan radiküler (periapikal) kist ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): İlgili dişin pulpasının canlı (vital) olması tanı için karakteristiktir.
Açıklama: Radiküler kist, çürük veya travma sonucu canlılığını yitirmiş (nekrotik pulpalı) dişlerin kök ucunda gelişen enfeksiyon zemininde oluşur; dolayısıyla ilgili diş canlı (vital) değildir. İlgili dişin canlı olduğu ve genellikle 3. büyük azıların bukkal servikalinde perikoronitis sonucu gelişen lezyon, enflamatuvar kistlerin bir diğer türü olan paradental kisttir. Radiküler kist epitelinde keratinizasyon beklenmez, non-keratinize yassı epitel karakteristiktir.

**Soru 2 (ID: 9aafa326-1d1d-458b-86dd-10d6bd2334b9)**
Soru Kökü: Non-odontojenik kistler arasında en sık görülen nazopalatin kanal kisti (insisiv kanal kisti) ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Dişler genellikle non-vitaldir ve radiküler kist ile radyolojik olarak benzerlik gösterir.
Açıklama: Nazopalatin kanal kistinde bölgedeki komşu santral dişlerin vitalitesi korunur; non-vital diş sadece radiküler kist için tipiktir. En güçlü distraktör olan radiküler kist ile radyolojik ve klinik karışıklık yaşansa da, ayırıcı tanı dişin canlılık testi ile yapılır. Tedavisi nüks etmeyen cerrahi enükleasyondur.

---

### ÇİFT 132 (Benzerlik: 0.74)

**Soru 1 (ID: 5864de05-d43e-4331-81a2-9426fb9d71b1)**
Soru Kökü: Üç yaşında bir çocuk yüksek ateş, huzursuzluk, lenfadenopati ve beslenme reddi şikayetleriyle kliniğe başvuruyor. Yapılan intraoral muayenede, sadece posterior farinkste değil, tüm ağız mukozasına yayılmış eritem ve bilhassa diş etlerinde marjinal şişlik ile karakterize rüptüre veziküller tespit ediliyor. Bu vakadaki etiyolojik majör enfeksiyöz ajan aşağıdakilerden hangisidir?
Doğru Şık (D): DNA virüsü olan Herpes Simpleks Virüsü-1
Açıklama: 6 ay ile 5 yaş arası çocuklarda yüksek ateş, sistemik inflamasyon ve tüm oral kaviteyle beraber bilhassa diş etlerinde (gingiva) şiddetli kızarıklık, şişlik ve veziküller ile seyreden patoloji Primer Herpetik Gingivostomatittir. Bu tablonun etkeni Herpes Simpleks Virüsü-1'dir (HSV-1). Eğer lezyon diş etini tutmadan sadece yumuşak damak ve tonsillere lokalize kalsaydı, Koksaki virüs kaynaklı Herpanjina düşünülmeliydi.

**Soru 2 (ID: 03fb8d28-ee09-418c-94ef-cc3b914a9340)**
Soru Kökü: Beş yaşındaki çocuk hastada bilateral olarak el ayasında ve ayak tabanında kırmızı maküller zemininde gelişen veziküller tespit ediliyor. Ağız içi muayenede ise sert damakta yaygın ülserasyonlar mevcuttur. Bu hastanın muayene bulguları değerlendirildiğinde, ayırıcı tanıda aşağıdaki enfeksiyöz durumlardan hangisi **en az olasıdır**?
Doğru Şık (C): Lezyonların Varicella Zoster'e bağlı unilateral dermatom paterni çizmesi
Açıklama: Hastadaki tablo, bilateral ekstremite vezikülleri ve anterior oral lezyonlarla (sert damak) karakterize El-Ayak-Ağız Hastalığıdır (Koksaki A16). Varicella Zoster (Zona) enfeksiyonlarında döküntüler bilateral ekstremitelerde değil, gövdeyi saran tek taraflı (unilateral) ve orta hattı geçmeyen bir dermatom paterni çizer. Bu anatomik lokalizasyon farkı iki veziküler hastalığı kesin çizgilerle ayırır.

---

### ÇİFT 133 (Benzerlik: 0.74)

**Soru 1 (ID: 8fba4627-7c28-42c2-986d-5f55bd55d2e4)**
Soru Kökü: On beş yaşındaki erkek hasta, yanak, dudak ve diş eti mukozasında diskeratotik beyaz kabarıklıkların birleşmesiyle oluşan 'kaldırım taşı' benzeri lezyonlar ile başvuruyor. Dermatolojik muayenesinde alın ve nasolabial kıvrımlar gibi seboreik bölgelerde de benzer döküntüler saptanıyor. Bu hastalığın patogenezinde rol oynayan temel moleküler defekt aşağıdakilerden hangisidir?
Doğru Şık (A): ATP2A2 gen mutasyonuna sekonder kalsiyum pompa disfonksiyonu
Açıklama: Darier hastalığı (Foliküler keratozis), ATP2A2 gen mutasyonu sonucu hücre içi kalsiyum pompasının bozulması ve sekonder desmozom defekti (akantoliz) ile karakterize, mukokutanöz kaldırım taşı görünümü veren otozomal dominant bir hastalıktır. Keratin 4/13 mutasyonu sadece ağız içini tutan Beyaz Sünger Nevüs'ün etkenidir. Desmoglein antikorları pemfigus vulgariste izlenir.

**Soru 2 (ID: c0b21f81-b3fa-4541-8fe1-487bb08f1b53)**
Soru Kökü: On yaşındaki hastanın ağız içi muayenesinde, her iki yanak mukozasını kaplayan kalın, yumuşak, süngerimsi beyaz plaklar saptanıyor. Alınan biyopsinin histopatolojik incelemesinde stratum spinozum tabakasındaki prickle (dikensi) hücrelerde sitoiskelet çöküşünü simgeleyen 'perinükleer eozinofilik kondensasyon' raporlanıyor. Bu hastadaki lezyonun etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Keratin 4 ve Keratin 13 genlerinde mutasyon
Açıklama: Keratin 4 ve 13 gen mutasyonu, sitoiskelet ağının bozulmasına ve spesifik olarak hücrelerde hidropik dejenerasyon ile patognomonik 'perinükleer eozinofilik kondensasyon' oluşumuna neden olarak Cannon hastalığını (Beyaz Sünger Nevüs) tetikler. Kalsiyum pompa defekti Darier hastalığına, EBV kıllı lökoplakiye, sürtünme friksiyonel keratoza yol açar.

---

### ÇİFT 134 (Benzerlik: 0.74)

**Soru 1 (ID: 8136fb44-2400-4058-b4bb-876224c3622f)**
Soru Kökü: Elli yaşında erkek hasta, posterior mandibulada son 3 ayda hızla büyüyen, ağrılı, korteksi delip yumuşak dokuya infiltre olmuş radyolüsen bir kitle şikayetiyle başvuruyor. Eş zamanlı boyun lenfadenopatisi saptanıyor. Histolojisinde ameloblastoma benzer kordonlar ve stellat hücreler görülmekle birlikte, belirgin hücresel pleomorfizm, hiperkromazi, artmış atipik mitoz ve polarite kaybı kaydediliyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik karsinom
Açıklama: Hızlı büyüme, lokal invazyon, ağrı ve lenf nodu metastazı gibi agresif klinik bulgulara ek olarak mikroskopide sitolojik atipi, pleomorfizm ve polarite kaybı gibi klasik 'karsinom' özelliklerinin ameloblastoma benzer hücrelerde görülmesi Ameloblastik Karsinom tanısı koydurur. Konvansiyonel ve metastatik ameloblastomlar histolojik olarak benigndir ve sitolojik atipi barındırmazlar. Bu agresif malign dönüşüm ameloblastik karsinomu ölümcül hale getirir.

**Soru 2 (ID: 25bba371-9627-4b23-ab1e-8452b37b7b17)**
Soru Kökü: Ortalama 45 yaşlarındaki erkek bir hastada, geçmişte mandibulada tedavi edilmiş bir kistik/tümöral kitlenin ardından, akciğerde saptanan multiple nodüllerden biyopsi alınıyor. Histolojik incelemede, kitlelerde sitolojik atipi, pleomorfizm veya malignite özellikleri bulunmayan 'benign konvansiyonel ameloblastom' alanları izleniyor. Orijin dokudan uzakta yerleşen bu tablonun Dünya Sağlık Örgütü (2022) sınıflamasındaki tam karşılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Metastatik ameloblastom
Açıklama: Metastatik ameloblastom, histolojik ve sitolojik olarak tamamen 'benign/borderline' konvansiyonel ameloblastom özelliği göstermesine rağmen biyolojik olarak uzak organa (en sık akciğer) hematojen veya lenfatik metastaz yapabilme kapasitesine sahip neoplazidir. Eğer metastaz yapan hücreler bizzat sitolojik atipi, nekroz ve malign karsinom özellikleri gösterseydi tanı 'Ameloblastik Karsinom' olurdu. Malignitenin bu iki alt grubunun ayrımı atipinin varlığına/yokluğuna dayanır.

---

### ÇİFT 135 (Benzerlik: 0.74)

**Soru 1 (ID: 1183fde7-a065-4e94-8dcb-3006e874a548)**
Soru Kökü: Dört yaşında erkek çocuk hasta, yüksek ateş ve halsizlik şikayetiyle kliniğe getiriliyor. Yapılan oral muayenede sadece yanak mukozasında, Stensen kanalı çevresinde lokalize ortası beyaz ve eritemli küçük lekeler izleniyor. Hastanın derisinde herhangi bir döküntü tespit edilmiyor. Vaka takdimine göre tanıyı kesinleştiren klinik özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik deri döküntüleri (raş) başlamadan önce bukkal mukozada patognomonik enantemlerin belirmesi
Açıklama: Kızamık enfeksiyonunun en erken patognomonik bulgusu, virüsün epitelyotropik afinitesine sekonder olarak deride raş başlamadan kronolojik olarak önce oral mukozada beliren Koplik lekeleridir. Bu lezyonlar veziküler olmayan maküler yapıdadır ve spesifik olarak Stensen kanalı etrafında (bukkal mukoza) izlenir. Şıklardaki hiperemik papilla uzaması (çilek dil) tablosu, lezyon farklılığı üzerinden ekarte edilen kızıl hastalığına aittir.

**Soru 2 (ID: 92e0f19a-46ec-4eea-b4df-50e712053e02)**
Soru Kökü: Çocukluk çağı enantemlerinin ayırıcı tanısında lezyonların klinik karakteristiği yol göstericidir. Bukkal mukozadaki izlenen lezyonlardan şüphelenilen bir hastada, tanının Kızamık yerine Kızıl olarak kesinleştirilmesini sağlayan spesifik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Bukkal maküller yerine dilde hiperemik papillaların uzamasıyla oluşan çilek/ahududu görünümü
Açıklama: Kızamıkta virüs epiteli hedef alarak Stensen kanalı komşuluğunda ortası beyaz spesifik Koplik maküllerini (enantem) oluşturur. Ancak Kızıl hastalığında bukkal mukoza yerine dildeki hiperemik papillaların aşırı uzamasıyla meydana gelen patognomonik 'çilek / ahududu dil' görünümü ortaya çıkar. İki majör pediatrik enfeksiyöz enantem, dilin papiller hipertrofisi ile bukkal mukozanın fokal makülleri arasındaki anatomik ayrım üzerinden kesinleştirilir.

---

### ÇİFT 136 (Benzerlik: 0.74)

**Soru 1 (ID: 7fd9e932-674e-462b-a2c3-80de256cc12e)**
Soru Kökü: Kırk yaşında erkek hasta, ağız açma kısıtlılığı (ilerleyici trismus) şikayetiyle kliniğe başvurmuştur. Öyküsünden uzun yıllardır tütün ve betel cevizi çiğneme alışkanlığı olduğu öğrenilmiştir. Muayenede oral mukoza esnekliğini yitirmiş, atrofik değil nedbe benzeri katı ve sert bir dokuya dönüşmüştür. Bu hastadaki premalign tablo aşağıdakilerden hangisidir?
Doğru Şık (E): Oral submüköz fibrozis
Açıklama: Tütün ve betel çiğneme alışkanlığına bağlı gelişen, doku sertleşmesi ve ilerleyici trismus (ağız açma kısıtlılığı) ile karakterize prekanseröz tablo oral submüköz fibrozistir (OSF). Plummer-Vinson sendromu sistemik demir eksikliğine bağlı difüz mukoza atrofisi yaparken, OSF kronik irritasyona bağlı nedbe/fibrozis geliştirir. Her ikisi de SCC riskini artırsa da klinik prezantasyonları zıttır.

**Soru 2 (ID: 2694c66d-28db-4271-9e1b-4b900f718bc9)**
Soru Kökü: Kırk beş yaşındaki erkek hasta alt vestibül sulkusta buruşuk, beyaz renkli, sınırları belirsiz hiperkeratotik bir mukoza lezyonu ile başvurmuştur. Anamnezinde uzun yıllardır bu spesifik bölgeye yerleştirerek tütün çiğnediği öğrenilmiştir. Lezyonun ileri dönem biyolojik davranışı değerlendirildiğinde, bu alanda hangi neoplazinin gelişim riskinin arttığı düşünülmelidir?
Doğru Şık (B): Verrüköz karsinom
Açıklama: Dumansız tütün veya tütün çiğneme alışkanlığı, mukozada kimyasal karsinojenlerin lokal olarak uzun süre maruz kalmasına yol açarak 'tütün keratozu' adı verilen spesifik bir hiperkeratoz yaratır. Bu lezyonların zaman içinde hücresel atipi göstererek doğrudan invaziv ve ekzofitik karakterli verrüköz karsinom formuna dönüşme riski istatistiksel olarak belirgindir.

---

### ÇİFT 137 (Benzerlik: 0.74)

**Soru 1 (ID: 1d8dc6ef-a1e3-47b5-89f8-34f633111c48)**
Soru Kökü: Bilinen hiçbir sistemik risk faktörü veya kronik ilaç kullanımı olmayan 35 yaşında sağlıklı erkek hastanın oral muayenesinde pamukçuk (psödomembranöz kandidiyazis) tablosu tespit edilmiştir. Bu klinik senaryoda altta yatan immün yetmezliği aydınlatmak adına öncelikle aşağıdaki durumlardan hangisi araştırılmalıdır?
Doğru Şık (D): HIV enfeksiyonu
Açıklama: Herhangi bir risk faktörü (antibiyotik, kortikosteroid kullanımı, diyabet vb.) bulunmayan genç ve sağlıklı görünümlü bir erkek hastada ortaya çıkan pamukçuk tablosunda mutlaka hücresel immün yetmezliğe yol açan HIV enfeksiyonu araştırılmalıdır. Diyabetes mellitus da bir risk faktörü olsa da, 'bilinen risk faktörsüz' majör immünsüpresyon tablolarında primer red-flag HIV'dir. Bu kural, dental muayenenin sistemik hastalık tanısındaki hayati rolünü gösterir.

**Soru 2 (ID: 8f9db9de-1415-4ecd-9135-5fc4e99fc00d)**
Soru Kökü: 30 yaşında, bilinen kronik bir sistemik hastalık öyküsü olmayan sağlıklı görünümlü erkek hasta, yanak mukozasında beyaz lekeler şikayetiyle başvuruyor. Muayenede her iki bukkal mukozada ve damakta yer alan, gazlı bezle mekanik olarak kazındığında kolayca parçalanıp sıyrılabilen ve altında hafif eritemli bir yüzey bırakan beyaz-krem renkli pamukçuk lezyonları (psödomembranlar) saptanıyor. Hastanın anamnezinde steroid kullanımı yoktur. Bu klinik tablonun altta yatan hücresel immün yetmezlik riskine bağlı olarak diş hekimini yönlendirmesi gereken tıbbi araştırma aşağıdakilerden hangisidir?
Doğru Şık (B): HIV (AIDS) serolojisi ve T hücre değerlendirmesi
Açıklama: Risk faktörü (diyabet, steroid, kemoterapi) bulunmayan erişkin bir erkekte aniden ortaya çıkan kazınabilir psödomembranöz kandidiyazis (pamukçuk), hücresel T-lenfosit defektini ve immünsüpresyonu gösteren patognomonik klinik kurgudur ve mutlaka HIV/AIDS araştırmasını gerektirir. Serum demir ve B12 tetkikleri kazınabilir beyaz plaklarla değil, doğrudan dil sırtında ağrılı atrofi ve kızarıklıkla (glossit) karşımıza çıkar. Fırsatçı Kandida hifleri, immün sistemin hücresel savunma ayağı çöktüğünde mukozada kontrolsüzce kolonize olarak bu zarları üretir.

---

### ÇİFT 138 (Benzerlik: 0.74)

**Soru 1 (ID: ddb93ee7-e44e-4d37-83bf-925c3615d22a)**
Soru Kökü: Amelogenezis imperfekta sendromlarında genetik geçiş paterni ve klinik tablo çeşitlilik gösterir. Tablo verilerine göre, otozomal resesif kalıtım gösteren ve klinik olarak 'mine agenezi' tablosuyla karakterize edilen hipoplastik tip aşağıdakilerden hangisidir?
Doğru Şık (A): Tip IG
Açıklama: Tip IG amelogenezis imperfekta, otozomal resesif geçiş gösteren ve mine agenezi ile karakterize olan spesifik bir hipoplastik varyanttır. Tip IE x'e bağlı dominant, Tip IIC x'e bağlı hipomatürasyon (karla kaplı) formunu temsil eder. Sınıflandırma tablolarında genetik geçiş ile morfolojik tanımın entegre edilmesi ayırıcı tanıda esastır.

**Soru 2 (ID: e416a5e7-df4d-41d2-9aaf-c7bb9b25bced)**
Soru Kökü: Amelogenezis imperfekta sınıflandırmasına göre Tip IVA fenotipinin morfolojik özelliği ve genetik geçişi aşağıdakilerden hangisidir?
Doğru Şık (A): Taurodontizm ile birlikte hipomatürasyon-hipoplastik tip, Otozomal dominant
Açıklama: Amelogenezis imperfekta Tip IVA (ve IVB), mikst tip mine defektlerinin (hipomatürasyon ve hipoplastik) birlikte görüldüğü ve morfolojik olarak genişlemiş pulpa odası (taurodontizm) ile karakterize olan spesifik otozomal dominant alt tiplerdir. Mine bozukluğu ile pulpa odası morfolojisi kusurunun entegre olduğu tek AI sınıfıdır.

---

### ÇİFT 139 (Benzerlik: 0.74)

**Soru 1 (ID: c25be7e0-f018-495c-a201-b7d46e42eeb8)**
Soru Kökü: On sekiz yaşındaki erkek hastanın radyolojik muayenesinde sağ alt molar dişler bölgesinde sürmeyi engellemiş radyoopak bir kitle saptanmıştır. Materyalin histopatolojisinde mine, dentin ve sementin normal diş morfolojisi almadan, tamamen gelişigüzel ve düzensiz konglomere bir kitle oluşturduğu izlenmiştir. Bu hamartomatöz lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Kompleks odontom
Açıklama: Odontomlar mine ve dentin içeren hamartomlardır. Diş dokularının rudimenter (küçük dişcik) yapıları şeklinde nispeten organize olduğu tipe kompound (bileşik), dokuların organize olamayıp gelişigüzel devasa konglomere bir kitle oluşturduğu tipe ise kompleks odontom adı verilir.

**Soru 2 (ID: 6c217da5-63ab-40e2-9257-749e401cebcc)**
Soru Kökü: On dört yaşında bir erkek çocuk, mandibular molar bölgesinde diş sürme sorunları yaşayarak kliniğe gönderiliyor. Çekilen panoramik radyografide, gömülü diş üzerinde sınırları iyi izlenen uniloküler radyolüsen büyük bir kavite saptanıyor. Biyopsi materyalinde; embriyonik dental papillayı taklit eden yoğun mezenkimal doku stroma ile bu doku içinde dağılmış ikili (bilaminar) odontojenik epitel zincirleri görülüyor ancak diş minesine veya dentin dokusuna benzer sert madde (kalsifikasyon) seçilemiyor. Bu mikst odontojenik tümör için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom, hem epitel hem de spesifik ektomezenkimal doku (dental papilla) elementlerinin birlikte (mikst) neoplastik proliferasyonudur ve daha ileri yaştaki kompleks odontomaların immatür prekürsör lezyonu olarak görülebilir; bu nedenle henüz dentin veya mine sentezi yoktur. Epiteli ameloblastomla benzer olsa da, stroma yapısı matür bağ dokusu değil dental papilladır ve prognozu çok daha ılımlıdır.

---

### ÇİFT 140 (Benzerlik: 0.74)

**Soru 1 (ID: eef67af3-7d0c-4fbb-9994-f63534f7c4cb)**
Soru Kökü: Akut pulpitin klinik ve histopatolojik özellikleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Lezyon bölgesindeki stromada yoğun mononükleer inflamatuar hücre infiltrasyonu izlenir.
Açıklama: Akut pulpitin histopatolojik tablosunda lezyon bölgesine hakim olan enflamatuar hücre grubu mononükleer hücreler değil, yoğun nötrofillerdir. Lezyon alanında lenfosit, makrofaj ve plazma hücresi gibi mononükleer hücre infiltrasyonu, akut inflamasyonun düzelmediği ve sürecin kronik pulpitis aşamasına geçtiği durumlarda izlenir. Pulpal abse gelişimi de, akut vakalarda nötrofillerin dokuyu eritmesine bağlı gelişen likefaksiyon nekrozunun karakteristik bir sonucudur.

**Soru 2 (ID: aafde465-188c-42ec-aadd-22b8bcfc9609)**
Soru Kökü: Pulpa dokusunun yapısal ve fizyopatolojik özellikleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Kan akımı kesildiğinde doku canlılığını korumak için kollateral damar ağı oluşturabilir.
Açıklama: Pulpa dokusu mine ve dentin gibi sert dokularla çevrili olduğu için kan akımı herhangi bir nedenle kesildiğinde yeni bir kollateral damar ağı oluşturamaz. Doku esnemez sert duvarlarla çevrili olduğundan, inflamasyon durumunda klinik şişkinlik gözlenmez ancak bu basınç artışı hastaya şiddetli ağrı olarak yansır. Anatomik dar alan ve kısıtlı kanlanma özellikleri, pulpa dokusundan tanısal biyopsi alınmasını da oldukça elverişsiz hale getirir.

---

### ÇİFT 141 (Benzerlik: 0.74)

**Soru 1 (ID: f536aeb3-2f8e-4da5-9958-372f47b91cc5)**
Soru Kökü: Orta yaşlı bir kadında demir eksikliği anemisine ikincil olarak gelişen ve Skuamöz Hücreli Karsinom (SCC) riski taşıyan Plummer-Vinson sendromunun klasik triadında, atrofik glossit ve anemiye ek olarak kliniği domine eden patolojik yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Servikal özofagusta fibromüsküler mukozal bantlar (web)
Açıklama: Plummer-Vinson sendromunda demir deplesyonu, yüksek hücresel döngüye sahip epitelin yenilenmesini bozarak servikal özofagusta anormal fibromüsküler mukozal bantlar (webler) oluşturur. En güçlü distraktör olan nörolojik defisit (B12 eksikliği) pernisiyöz aneminin bulgusudur ve Plummer-Vinson tablosunda izlenmez. Bu mukozal weblerin yarattığı mekanik obstrüksiyon, hastalardaki tipik yutma güçlüğü (disfaji) semptomunun hücresel ve anatomik temelidir.

**Soru 2 (ID: 75bbb62b-7fc8-456c-8e0d-cdf29140eb3e)**
Soru Kökü: Ellili yaşlarında bir kadın hasta, şiddetli yutma güçlüğü (disfaji) ve dilinde yanma şikayetiyle kliniğe başvuruyor. Yapılan muayenesinde dil dorsumunda papilla kaybı ile karakterize pürüzsüz kırmızı görünüm (atrofik glossit) saptanıyor. Laboratuvar tetkiklerinde kronik demir eksikliği anemisi tespit edilen bu hastada özofagoskopide üst özofagusta mukozal bantlar (özofageal web) izleniyor. Bu klinik tablo için en olası tanı ve bu hastada gelecekte gelişme riski en yüksek olan malignite aşağıdakilerden hangisidir?
Doğru Şık (B): Plummer-Vinson Sendromu — Skuamöz hücreli karsinom (SCC)
Açıklama: Plummer-Vinson sendromu (Sideropenik disfaji); demir eksikliği anemisi, oral/özofageal mukoza atrofisi (atrofik glossit) ve özofageal weblere bağlı disfaji triadı ile karakterizedir. Bu sendrom prekanseröz bir durum olup, özellikle dil, oral kavite ve özofagusta Skuamöz Hücreli Karsinom (SCC) riskini belirgin şekilde artırır.

---

### ÇİFT 142 (Benzerlik: 0.74)

**Soru 1 (ID: 3c7089b0-d735-4259-9aa1-819848886843)**
Soru Kökü: Yenidoğan döneminde ağız mukozasında izlenen kistik lezyonlar ile ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (B): Bohn nodülü - Damak tükürük bezleri epitelinden gelişen odontojenik kisttir
Açıklama: Bohn nodülleri, sert ve yumuşak damak sınırında gelişen keratin dolu kistler olmakla birlikte odontojenik kökenli değildirler; damak minör tükürük bezleri epitelinden gelişirler. Epstein incileri orta hat epitel kalıntılarından, yenidoğan gingival kistleri ise dental lamina (Serre) artıklarından köken alır. Odontojenik ayrımı, bu lezyonların patogenezini ayırt etmede temel klinik markerdır.

**Soru 2 (ID: a3f33e5e-210e-4121-8f0c-95185903d649)**
Soru Kökü: Yenidoğan bir bebeğin ağız içi muayenesinde, damak orta hattında (palatal rafe üzerinde) bilateral palatal rafların embriyolojik kaynaşması sırasında hapsolmuş epitel hücrelerinden köken alan, inci benzeri küçük sarımsı beyaz kistik kabartılar izleniyor. Hiçbir cerrahi tedavi gerektirmeyen bu benign inklüzyon lezyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Epstein incisi
Açıklama: Epstein incileri, yenidoğanlarda doğrudan palatal orta hat üzerinde yerleşen ve embriyolojik epitel inklüzyonu sonucu oluşan keratin dolu kistlerdir. Bohn nodülleri ektopik tükürük bezlerinden gelişir ve damak lateralinde (sert/yumuşak damak sınırı) yerleşirken; yenidoğanın gingival kistleri dental lamina (Serre) artığı kaynaklı olup alveoler kret üzerinde görülür.

---

### ÇİFT 143 (Benzerlik: 0.74)

**Soru 1 (ID: 2d3f7036-e314-4f32-9ff3-e424a18373f1)**
Soru Kökü: Kırk yaşında erkek hastanın panoramik radyografisinde mandibula angulusunda 'sabun köpüğü' görünümünde multiloküler radyolüsent alan saptanıyor. Histolojik kesitlerde santralde yıldızsı retikulum benzeri ağsı bir bağ dokusu ve periferde palizatlaşmış, ters polarite gösteren hiperkromatik küboidal hücreler izleniyor. Kemikte şiddetli ekspansiyon yapan bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Klinikte yavaş büyüyen, ağrısız, multiloküler (sabun köpüğü) radyolüsensi yapan ve histolojisinde ters polariteli palizatlaşmış küboidal/kolumnar bazal hücreler ile merkezde yıldız retikuluma benzeyen yapı içeren tümör konvansiyonel Ameloblastom'dur. Odontojenik miksom da multiloküler olabilir ancak bal peteği veya tenis raketi görünümü yapar ve histolojisi iğsi hücreli bol miksoid stroma içerir. Ameloblastom lokal agresif olup dentin veya mine matriksi üretmez.

**Soru 2 (ID: ac6f4403-c704-4f36-ba50-21ede6e0e367)**
Soru Kökü: İleri yaş grubunda, 5-7. dekattaki hastalarda arka mandibulada gözlenen, histolojik olarak tümör epitel yuvaları arasında oldukça yoğun, fibrokollajenöz bir sklerotik doku üretiminin maligniteye eşlik ettiği, radyografide sınırları kötü seçilen tümör aşağıdakilerden hangisidir?
Doğru Şık (D): Sklerozan odontojenik karsinom
Açıklama: Sklerozan odontojenik karsinom; ismini de aldığı üzere, mikroskobide ince kordonlar halindeki malign epitelyal yuvaların arasında aşırı yoğun fibrokollajenöz "sklerotik" (sert, nedbeleşmiş) bir stroma barındıran nadir bir malignitedir. Stromadaki bu yoğun tepkisel desmoplazi, tümörü diğer epitel kökenli karsinomlardan ayırır.

---

### ÇİFT 144 (Benzerlik: 0.74)

**Soru 1 (ID: 6a8ab4cb-2fc0-4946-9d49-a11fa254aee7)**
Soru Kökü: Konjenital sifilizin embriyolojik süreçlerde oluşturduğu doku yıkım patofizyolojisi incelendiğinde, bu hastalığın sonradan kazanılmış (edinsel) sifilizden kalıcı anatomik defektler bağlamında ayrılmasını sağlayan temel hücresel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Spiroketlerin morfodiferansiyasyon evresinde gelişmekte olan organlara doğrudan sızarak lokal hücre kinetiğini bozması
Açıklama: Konjenital sifilizde spiroketler plasental bariyeri aşıp organogenez aşamasındaki fetal dokulara (diş germi vb.) doğrudan invaze olur ve morfodiferansiyasyon evresini bozarak anatomik deformasyonlar yaratır. Edinsel (sonradan kazanılmış) sifilizde organogenez zaten tamamlanmış olduğu için bu tür gelişimsel doku defektleri görülmez. C şıkkındaki metabolik strese bağlı fonksiyon durması sifilizde değil, matriks eksikliği yapan kızamıkta görülür.

**Soru 2 (ID: 2e791a06-8653-4969-9c5d-6bf03504e4ec)**
Soru Kökü: Konjenital sifilizde sekteye uğrayan morfodiferansiyasyon kaskadı ile sonradan kazanılmış (edinsel) sifilizin tersiyer gom evresi karşılaştırıldığında, edinsel sifilizde kama kesici veya dut molar gibi dental deformasyonların **görülmemesinin** temel embriyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Diş anatomik yapılarının morfogenez (şekillenme) aşamasının intrauterin/perinatal dönemde tamamlanmış olması
Açıklama: Konjenital sifilizin dental deformasyonlar (kama/dut diş) yaratmasının nedeni, enfeksiyonun tam da diş germlerinin şekillendiği (organogenez/morfodiferansiyasyon) embriyolojik döneme denk gelmesidir. Edinsel sifiliz hayatın ilerleyen yıllarında bulaştığı için, anatomik şekillenmesini çoktan tamamlamış olan dişlerde gelişimsel bir deformite (şekil bozukluğu) yaratamaz; ancak yumuşak dokularda granülomatöz destrüksiyon (gom) yapar.

---

### ÇİFT 145 (Benzerlik: 0.74)

**Soru 1 (ID: 75bbb62b-7fc8-456c-8e0d-cdf29140eb3e)**
Soru Kökü: Ellili yaşlarında bir kadın hasta, şiddetli yutma güçlüğü (disfaji) ve dilinde yanma şikayetiyle kliniğe başvuruyor. Yapılan muayenesinde dil dorsumunda papilla kaybı ile karakterize pürüzsüz kırmızı görünüm (atrofik glossit) saptanıyor. Laboratuvar tetkiklerinde kronik demir eksikliği anemisi tespit edilen bu hastada özofagoskopide üst özofagusta mukozal bantlar (özofageal web) izleniyor. Bu klinik tablo için en olası tanı ve bu hastada gelecekte gelişme riski en yüksek olan malignite aşağıdakilerden hangisidir?
Doğru Şık (B): Plummer-Vinson Sendromu — Skuamöz hücreli karsinom (SCC)
Açıklama: Plummer-Vinson sendromu (Sideropenik disfaji); demir eksikliği anemisi, oral/özofageal mukoza atrofisi (atrofik glossit) ve özofageal weblere bağlı disfaji triadı ile karakterizedir. Bu sendrom prekanseröz bir durum olup, özellikle dil, oral kavite ve özofagusta Skuamöz Hücreli Karsinom (SCC) riskini belirgin şekilde artırır.

**Soru 2 (ID: 24ef3751-4cf9-40cb-95df-e45500b2a44f)**
Soru Kökü: 60 yaşında kadın hasta, dilde şiddetli yanma, yutkunma zorluğu ve el-ayak parmaklarında karıncalanma şikayetleriyle başvuruyor. Muayenede dil dorsumundaki papillaların tamamen düzleştiği ve dilin kırmızı, parlak bir görünüm aldığı izleniyor. Hastanın radyolojik yutma testinde özofageal herhangi bir tıkanıklık (web) saptanmıyor. Laboratuvar tetkiklerinde megaloblastik anemi tespit ediliyor. Bu hastanın atrofik glossit kliniğinden sorumlu primer immünolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Mide paryetal hücrelerindeki intrinsik faktöre karşı otoantikor gelişimi
Açıklama: Pernisiyöz anemide Tip 2 aşırı duyarlılık reaksiyonu sonucu mide paryetal hücrelerindeki intrinsik faktöre karşı otoantikorlar gelişir, bu da B12 emilimini nötralize ederek dilde atrofik glossit ve ekstremitelerde karıncalanmaya (nörolojik defekt) neden olur. Demir eksikliğinde (Plummer-Vinson) ise mekanizma immünolojik otoantikorlara dayanmaz ve klinik tabloda özofageal web varlığı nedeniyle sekonder mekanik disfaji mevcuttur. Vakada weblerin olmaması ve nörolojik ekstremite bulguları doğrudan B12 / intrinsik faktör yıkımı hedefini işaret eder.

---

### ÇİFT 146 (Benzerlik: 0.74)

**Soru 1 (ID: 3c7089b0-d735-4259-9aa1-819848886843)**
Soru Kökü: Yenidoğan döneminde ağız mukozasında izlenen kistik lezyonlar ile ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (B): Bohn nodülü - Damak tükürük bezleri epitelinden gelişen odontojenik kisttir
Açıklama: Bohn nodülleri, sert ve yumuşak damak sınırında gelişen keratin dolu kistler olmakla birlikte odontojenik kökenli değildirler; damak minör tükürük bezleri epitelinden gelişirler. Epstein incileri orta hat epitel kalıntılarından, yenidoğan gingival kistleri ise dental lamina (Serre) artıklarından köken alır. Odontojenik ayrımı, bu lezyonların patogenezini ayırt etmede temel klinik markerdır.

**Soru 2 (ID: 9f93bd98-04fd-4a06-b6db-9513adb7f6f9)**
Soru Kökü: Embriyolojik gelişim esnasında odontojenik veya ektodermal artıkların hapsolarak kistleşmesi sonucu oral kavitede sarımsı-beyaz renkli gelişimsel kistik lezyonlar oluşur. Aşağıdaki pediatrik kist ve doku kökeni eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Parulis - Ektopik Waldeyer halkası lenfoid artıkları
Açıklama: Parulis (diş eti çıbanı), embriyolojik bir kist veya ektopik lenfoid bir doku artığı değildir; spesifik olarak devital (enfekte) bir dişin periapikal apsesinin kortikal kemiği aşarak submukozal alana açılmasıyla oluşan inflamatuar, pürülan fistül deşarj noktasıdır. Diğer eşleştirmeler (Epstein-inklüzyon, Serre-gingival kist, Bohn-tükürük bezi, Fordyce-sebase) gelişimsel fizyopatolojiye tamamen uygundur.

---

### ÇİFT 147 (Benzerlik: 0.74)

**Soru 1 (ID: ac6f4403-c704-4f36-ba50-21ede6e0e367)**
Soru Kökü: İleri yaş grubunda, 5-7. dekattaki hastalarda arka mandibulada gözlenen, histolojik olarak tümör epitel yuvaları arasında oldukça yoğun, fibrokollajenöz bir sklerotik doku üretiminin maligniteye eşlik ettiği, radyografide sınırları kötü seçilen tümör aşağıdakilerden hangisidir?
Doğru Şık (D): Sklerozan odontojenik karsinom
Açıklama: Sklerozan odontojenik karsinom; ismini de aldığı üzere, mikroskobide ince kordonlar halindeki malign epitelyal yuvaların arasında aşırı yoğun fibrokollajenöz "sklerotik" (sert, nedbeleşmiş) bir stroma barındıran nadir bir malignitedir. Stromadaki bu yoğun tepkisel desmoplazi, tümörü diğer epitel kökenli karsinomlardan ayırır.

**Soru 2 (ID: 067e984d-3bec-4113-80af-8c7e263790a7)**
Soru Kökü: Odontojenik kökenli mezenkimal tümörler arasında yer alan; klinik olarak agresif büyüme potansiyeline sahip olan, radyolojik olarak birbiri içine giren ince kemik korteksleri ile çenelerde tipik 'sabun köpüğü' destrüksiyonu yaratan ve hücresel incelemesinde uzun sitoplazmik uzantılarıyla 'yıldızsı (stellat)' hücrelerin hakim olduğu tümör aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik miksom
Açıklama: Odontojenik miksom, jelatinöz mukopolisakkarit stroması içerisinde dağınık yıldızsı ve iğsi hücrelerle karakterize mezenkimal benign ancak lokal invaziv bir tümördür. Jelatinöz matriksi nedeniyle cerrahi temizlenmesi zor olup kemikte septalı sabun köpüğü veya bal peteği varyantı görüntüsü verir. Diğer sabun köpüğü veren lezyon Ameloblastomdur; ancak Ameloblastom epitel kökenli olup epitel adaları içerir.

---

### ÇİFT 148 (Benzerlik: 0.74)

**Soru 1 (ID: 999e48aa-15ac-425e-af3d-ada1fe6c9a31)**
Soru Kökü: Sigara içim şekillerinin oral mukoza üzerindeki etkileri bölgesel farklılıklar yaratır. Tütünün ateşli yanan kısmının dudaklar arasında ağız içine dönük (ters) olarak kullanılması alışkanlığında, özellikle sert damak bölgesinde izlenen lezyonun (Reverse smokers palatal lezyonu) en kritik patolojik önemi aşağıdakilerden hangisidir?
Doğru Şık (E): Yüksek oranda premalign (kanserleşme) potansiyeline sahip olması
Açıklama: Normal sigara kullanımında damakta görülen nikotinik stomatit (kırmızı noktalı beyaz damak) sıklıkla iyi huylu bir reaktif yanıttır, ancak tütünün korlu kısmının ağız içine alındığı 'ters sigara içiciliği' palatal mukozada yüksek ısı ve yoğun karsinojenden dolayı şiddetli hücresel mutasyonlara yol açar. Bu nedenle reverse smokers palatal lezyonu doğrudan premalign bir lezyon kabul edilir. Yalnızca friksiyonel faktörleri barındıran basit lökoplakilerden çok daha agresiftir.

**Soru 2 (ID: ed086797-fd67-4b4c-b04a-aa18c79e6b57)**
Soru Kökü: Hem friksiyonel hiperkeratoz hem de ters sigara içiciliğine bağlı revers smokers palatal lezyonu, oral epitelde kalınlaşma (hiperkeratoz) ve beyaz plak görünümü yaratır. Ancak friksiyonel keratozun malignite riski sıfırken, ters sigara lezyonunun 5 yıldızlı agresif karsinom potansiyeli barındırmasını sağlayan patofizyolojik (karsinogenez) basamağı aşağıdakilerden hangisidir?
Doğru Şık (B): Yüksek termal ve kimyasal şokun doğrudan bazal tabaka hücrelerinde DNA hasarı ve displastik atipi yaratması
Açıklama: Friksiyonel hiperkeratozda uygulanan düşük enerjili mekanik kuvvet sadece yüzeyel koruma için mitozu artırır, genetik koda zarar vermez. Oysa sigaranın yanan ucunun (ateşin) ağız içinde tutulmasıyla oluşan masif termal şok ve yoğun karsinojenler, epitelin savunma sınırını aşıp doğrudan stratum basale'deki hücrelerin çekirdek yapısını bozar. Oluşan DNA hasarı, otonom displastik klonları yaratarak yüksek riskli karsinogenezi başlatır.

---

### ÇİFT 149 (Benzerlik: 0.74)

**Soru 1 (ID: 2a3bdc83-5125-4d1e-ac3d-fd6e74d15239)**
Soru Kökü: Yirmi iki yaşında erkek hasta, alt sağ 20 yaş dişi bölgesinde şişlik ve ağrı şikayetiyle başvuruyor. Radyografik muayenede yarı gömülü dişin kuronunun bukkal yüzeyinde başlayıp kök bifurkasyonuna uzanan radyolusent bir kistik lezyon saptanıyor. Dişe uygulanan vitalite testi pozitif yanıt veriyor ve hastanın geçmişte aynı bölgede perikoronitis atakları geçirdiği öğreniliyor. Bu hastadaki **en olası** kist tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Paradental kist
Açıklama: Paradental (bukkal bifurkasyon) kist, inflamatuar kaynaklı bir kist olmasına rağmen radiküler kistten farklı olarak vital (canlı) dişlerde ve sıklıkla alt 3. molar dişlerin perikoronitis atakları sonrasında servikal periodontal dokudan gelişir. En güçlü distraktör olan dentigeröz kist gelişimsel kökenli olup tam gömülü diş kuronunu mine-sement sınırından sararken, paradental kist dişin canlı kalması ve bukkal servikal/bifurkasyon yerleşimi ile ayrılır.

**Soru 2 (ID: acd77e71-6e1d-4c1e-8db3-c55b4bd90595)**
Soru Kökü: İnflamatuvar kollateral kist spektrumunda yer alan Paradental kist ve Mandibuler Bukkal Bifurkasyon Kisti (MBBK) ayrımında epidemiyolojik ve lokalizasyon verileri kritik öneme sahiptir. On üç yaşındaki bir hastada saptanan inflamatuvar kollateral kistin en olası ilişkili olduğu diş aşağıdakilerden hangisidir?
Doğru Şık (A): Mandibuler birinci veya ikinci molar
Açıklama: İnflamatuvar kollateral kistler daima vital dişle ilişkilidir. 1.-2. dekatta (çocuk-ergen) görülen form MBBK olup mandibuler 1. veya 2. moların bukkalinde gelişir. Paradental kistler ise genellikle 4. dekatta, sürmekte zorlanan veya yarı gömülü mandibuler 3. molarların bukkal/distal yüzeylerinde izlenir.

---

### ÇİFT 150 (Benzerlik: 0.74)

**Soru 1 (ID: 1183fde7-a065-4e94-8dcb-3006e874a548)**
Soru Kökü: Dört yaşında erkek çocuk hasta, yüksek ateş ve halsizlik şikayetiyle kliniğe getiriliyor. Yapılan oral muayenede sadece yanak mukozasında, Stensen kanalı çevresinde lokalize ortası beyaz ve eritemli küçük lekeler izleniyor. Hastanın derisinde herhangi bir döküntü tespit edilmiyor. Vaka takdimine göre tanıyı kesinleştiren klinik özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik deri döküntüleri (raş) başlamadan önce bukkal mukozada patognomonik enantemlerin belirmesi
Açıklama: Kızamık enfeksiyonunun en erken patognomonik bulgusu, virüsün epitelyotropik afinitesine sekonder olarak deride raş başlamadan kronolojik olarak önce oral mukozada beliren Koplik lekeleridir. Bu lezyonlar veziküler olmayan maküler yapıdadır ve spesifik olarak Stensen kanalı etrafında (bukkal mukoza) izlenir. Şıklardaki hiperemik papilla uzaması (çilek dil) tablosu, lezyon farklılığı üzerinden ekarte edilen kızıl hastalığına aittir.

**Soru 2 (ID: 53b591b3-ae83-4f0f-8605-93216d4f3fe6)**
Soru Kökü: Klinikte yüksek ateş şikayetiyle getirilen bir çocuk hastada, oral mukozada saptanan Koplik lekelerinin, ayırıcı tanıda klinisyene sağladığı en büyük avantaj ve klinik değer aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik deri döküntülerinden (raş) önce ortaya çıkarak hastalığın en erken patognomonik tanı kriterini oluşturması
Açıklama: Kızamık viremisinin erken fazında, epitel hücresel inflamasyon (Koplik lekeleri) deri döküntüsü henüz başlamadan kronolojik olarak önce belirir. Bu durum hekime diğer tüm viral döküntülü hastalıkları (çiçek, rubella vs.) daha raş başlamadan ekarte etme ve tanıyı direkt kızamığa kilitleme avantajı sağlar.

---

### ÇİFT 151 (Benzerlik: 0.74)

**Soru 1 (ID: a5cdc9fc-f23c-4940-837e-ace9b3bfe6e3)**
Soru Kökü: Periapikal enfeksiyonlarda, periapikal granülom zemininden radiküler kist oluşumunu başlatan ve kistin lümenini döşeyen asıl histolojik/hücresel komponent aşağıdakilerden hangisidir?
Doğru Şık (C): Diş gelişiminden arta kalan Malassez epitel artıkları
Açıklama: Periapikal (radiküler) kistlerin gelişiminde, pulpal enfeksiyon apekse ulaştığında oluşan inflamatuar hücre sitokinleri embriyolojik kök kılıfı kalıntılarını stimüle eder. Bu uyarı ile sessiz halden aktifleşerek çoğalmaya başlayan Malassez epitel artıkları, mevcut granülom dokusu içinde çoğalır ve merkezi sıvı dolu bir epiteliyal kistik kavite yaratırlar. Nötrofiller ve mononükleer hücreler reaksiyonu ateşlese de, gerçek bir kistin yapıtaşı olan non-keratinize skuamöz epitel duvarını sadece Malassez kalıntıları kurabilir.

**Soru 2 (ID: 862a444e-3289-4f08-b32b-1b95a6d9ded6)**
Soru Kökü: Otuz yaşında erkek hasta, devital 46 numaralı dişinde lokalize künt bir ağrı sonrası periapikal bölgede gelişen kronik, non-ekspansif radyolüsent lezyon ile değerlendiriliyor. Bu bölgedeki lezyonun epiteliyal komponentinin patogenezinde rol oynayan hücresel artıklar aşağıdakilerden hangisidir?
Doğru Şık (D): Malassez epitel artıkları
Açıklama: Radiküler kist (periapikal kist), pulpa nekrozu sonrası periapikal dokuya yayılan inflamasyonun periodontal ligament içindeki Malassez epitel artıklarını sitokinler aracılığıyla uyararak prolifere etmesiyle oluşur. Serre artıkları erüpsiyon kistlerinde veya gingival kistlerde rol alırken, indirgenmiş mine epiteli dentigeröz kistlerin kaynağını oluşturur. İnflamasyon ortamındaki makrofaj ve lenfositler bu kistik kavitasyonu destekler.

---

### ÇİFT 152 (Benzerlik: 0.73)

**Soru 1 (ID: adaad2a1-3475-4177-bc72-037737007f6b)**
Soru Kökü: Eritema Migrans (Benign Migratuvar Glossit) tablosunun klinik davranış mekanizmaları ve sendromik birliktelikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Üretrit ve konjonktivitin eşlik ettiği Reiter sendromunda bu mukoza lezyonlarının görülmesi imkansızdır.
Açıklama: HLA-B27 pozitifliği, üretrit, konjonktivit ve artrit triadı ile seyreden Reiter sendromu vakalarında, oral kavitede doğrudan coğrafik dile (eritema migrans) benzeyen oral lezyonlar saptanır; bu ilişkinin görülmesi imkansız değildir, aksine sorgulanan bir eşleşmedir. Coğrafik dilin en karakteristik fiziksel muayene bulgusu, sabit olmayan (gezici) kırmızı atrofik lezyonların etrafını saran sarı-beyaz sınırla izole edilmesidir. Sendromik zeminler incelendiğinde atopik ve psöriatik hücresel tepkilerle patofizyolojik bağı çok güçlüdür.

**Soru 2 (ID: fc347d34-3981-4aec-b2b0-21d831124d83)**
Soru Kökü: Eritema migrans (Coğrafik dil) tanısı konmuş hastalarda klinik tabloya sıklıkla eşlik eden anatomik varyasyon ve immünolojik sistemik birliktelik sırasıyla hangi seçenekte doğru verilmiştir?
Doğru Şık (C): Fissürlü dil – Psöriazis ve Reiter sendromu
Açıklama: Coğrafik dil olgularının yaklaşık 1/3'ünde anatomik varyasyon olarak fissürlü dil (dilde derin oluklar) tabloya eşlik eder; sistemik düzeyde ise atopi, seboreik dermatit, psöriazis ve Reiter sendromu (HLA-B27 pozitifliği) ile güçlü immünolojik birliktelik gösterir. Atrofik glossit ile anemi sendromları eşleşirken, eritema migransın dermatolojik ve romatolojik sendromlarla çapraz ilişkisi mevcuttur.

---

### ÇİFT 153 (Benzerlik: 0.73)

**Soru 1 (ID: d70b9497-1783-4ff4-8900-275e750ffe37)**
Soru Kökü: Altmış yaşında kadın hasta, mandibulada sınırları oldukça silik ve çevre kortekste şiddetli perforasyon yaratan agresif kitle şikayeti ile kliniğe yönlendiriliyor. Biyopsi materyalinde epitel hücrelerinin yoğun şeffaf (clear) sitoplazmik kompartımanlardan oluştuğu, arada ince bağ dokusu septaları bulunduğu raporlanıyor. Hastanın tümör dokusu perinevral infiltrasyon ve servikal metastaz şüphesi doğuruyor. Sık rastlanmayan, infiltratif ve sitolojik karakteriyle kötü prognoza işaret eden bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Şeffaf hücreli odontojenik karsinom
Açıklama: Şeffaf hücreli odontojenik karsinom (Clear Cell Odontogenic Carcinoma), hücrelerin glikojen deposundan zengin sitoplazmasının preparasyon esnasında erimesiyle net şeffaf görünüm bıraktığı, ileri yaş grupta şiddetli bölgesel kemik destrüksiyonu ve uzak metastazla seyreden malign tümördür. Diğer şeffaf hücreli metastatik tümörlerin (Böbrek hücreli ca vb.) dışlanmasından sonra tanı konur ve blok diseksiyon gerektirir.

**Soru 2 (ID: d55fb047-43f0-467f-95de-78dabb36adc6)**
Soru Kökü: Epitelyal kökenli odontojenik tümörlerin yaş demografisi ve hücre histolojisi incelendiğinde, diğer odontojenik tümörlere kıyasla daha çok ileri yaş grubunda (>50 yaş) görülen, şeffaf sitoplazmalı hücrelerden ve bunları ayıran fibröz septalardan oluşan, çevre kemik dokusuna ve sınır sinir dokularına agresif infiltre olan, kötü prognozlu primer malignite aşağıdakilerden hangisidir?
Doğru Şık (B): Şeffaf hücreli odontojenik karsinom
Açıklama: Şeffaf hücreli odontojenik karsinom, odontojenik epitelden gelişen, ileri yaşlarda (ortalama 53 yaş) ortaya çıkan ve sitoplazmasında glikojen birikimine bağlı şeffaf görünümlü malign hücre kümeleriyle karakterize bir lezyondur. Bu tümör çevre kemik dokuya güçlü bir şekilde infiltre olur ve sıklıkla perinöral invazyon gösterdiği için prognozu genelde diğer odontojenik tümör tiplerinden daha kötüdür. Diğer odontojenik tümörlerin çoğu 2., 3. veya 4. dekatta görülür.

---

### ÇİFT 154 (Benzerlik: 0.73)

**Soru 1 (ID: e8e3d592-8827-4ceb-bc2f-82cc69b360ba)**
Soru Kökü: Mine gelişim anomalisini yansıtan Amelogenezis İmperfekta'nın farklı klinik varyantları ve genetik geçiş modelleri bulunmaktadır. Süt ve kalıcı dişlerde minenin nitelik ve niceliğini etkileyen bu tablonun en sık görülen 'Jeneralize Pitted' tipinin kalıtım paterni ve sınıfı aşağıdakilerden hangisidir?
Doğru Şık (A): Hipoplastik / Otozomal dominant
Açıklama: Amelogenezis imperfekta'nın en sık izlenen formu olan Tip IA Jeneralize Pitted varyantı hipoplastik sınıftadır ve otozomal dominant kalıtım gösterir. Tip IB lokalize formlar da otozomal dominant kalıtılırken, hipomatürasyon tiplerinde sıklıkla X'e bağlı resesif veya otozomal resesif geçişler izlenir. Minenin sekresyon fazındaki defektler hipoplastik formları oluşturur.

**Soru 2 (ID: e416a5e7-df4d-41d2-9aaf-c7bb9b25bced)**
Soru Kökü: Amelogenezis imperfekta sınıflandırmasına göre Tip IVA fenotipinin morfolojik özelliği ve genetik geçişi aşağıdakilerden hangisidir?
Doğru Şık (A): Taurodontizm ile birlikte hipomatürasyon-hipoplastik tip, Otozomal dominant
Açıklama: Amelogenezis imperfekta Tip IVA (ve IVB), mikst tip mine defektlerinin (hipomatürasyon ve hipoplastik) birlikte görüldüğü ve morfolojik olarak genişlemiş pulpa odası (taurodontizm) ile karakterize olan spesifik otozomal dominant alt tiplerdir. Mine bozukluğu ile pulpa odası morfolojisi kusurunun entegre olduğu tek AI sınıfıdır.

---

### ÇİFT 155 (Benzerlik: 0.73)

**Soru 1 (ID: 43329d62-4a22-4c2c-966e-42a26bd40f86)**
Soru Kökü: Aşağıdaki viral ajanlardan hangisi, primer enfeksiyonu sonrasında bağışıklık sistemi tarafından tamamen elimine edilemeyerek retrograt aksonal transport ile trigeminal gangliyona taşınır ve stres durumlarında sekonder intraoral lezyonları tetikler?
Doğru Şık (C): Herpes Simpleks Virüsü
Açıklama: Herpes Simpleks Virüsü (HSV), primer enfeksiyon sonrası retrograt aksonal taşınma ile bölgesel duyu gangliyonlarına (orofasiyal bölge için trigeminal gangliyon) ulaşır ve burada sonsuza kadar latent kalır. Tetikleyici faktörlerle (stres, UV vb.) anterograt yolla yüzeye inerek keratinize dokularda sekonder herpesi oluşturur. Koksaki veya kızamık virüslerinde gangliyonda nöral latensi ve aksonal transport kaskadı yoktur.

**Soru 2 (ID: a4e86089-c5ec-4114-8cbc-423882a2ba72)**
Soru Kökü: Orofasiyal herpes enfeksiyonlarında (HSV), virüsün konak organizmadaki kinetiği incelendiğinde sırasıyla 'latent faza geçerken' ve 'ikincil lezyonları üretmek üzere tekrar yüzeye çıkarken' kullandığı hücresel ulaştırma mekanizması aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Retrograt aksonal transport / Anterograt aksonal transport
Açıklama: Herpes simpleks virüsü primer epitel enfeksiyonundan sonra periferik sinir uçlarından nöron gövdesine (trigeminal gangliyona) doğru retrograt aksonal transport ile ilerleyerek latent faza girer. İmmün direnç kırıldığında reaktive olan virüs, gangliyondan epitel yüzeyine doğru anterograt aksonal transport ile inerek hücre içi litik döngüyü yeniden tetikler. Kan yoluyla (hematojen) değil, doğrudan nöral trasedeki iletim kaskadı hastalığın doku lokalizasyonunu belirler.

---

### ÇİFT 156 (Benzerlik: 0.73)

**Soru 1 (ID: 70427019-25a8-470e-a1ea-27ba2fb9b7d9)**
Soru Kökü: 15 yaşında erkek hasta, dilinin giderek büyüdüğü ve ağzına sığmadığı şikayetiyle kliniğe başvuruyor. Klinik muayenede sadece dil dorsumunda değil, tüm oral kavite mukozasında yaygın, ağrısız, küçük nodüler lezyonlar saptanıyor. Hastanın sistemik öyküsünde tiroid medüller karsinomu nedeniyle opere edildiği öğreniliyor. Bu hastadaki makroglossi tablosuna yol açan temel histopatolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Mukozal nöromaların dil stromasına diffüz olarak infiltre olması
Açıklama: Tiroid medüller karsinomu ile sistemik birlikteliği olan patoloji Multipl Endokrin Neoplazi (MEN) Tip 2B'dir. Bu sendromda ağız kavitesine difüz olarak yayılan mukozal nöromalar dil stromasını da infiltre ederek dilde devasa bir organomegali (makroglossi) yaratır. Pleksiform nörofibrom kaskadı NF Tip 1'e, bağ dokusu replasmanı ise Duchenne Muskuler Distrofiye aittir. Medüller karsinom öyküsü ve oral kavitedeki jeneralize nodüler infiltrasyonlar, kütlesel büyümenin doğrudan nöromlara ait olduğunu izole eder.

**Soru 2 (ID: 181ae1f6-46c6-4a35-916d-ecfcd17b03a1)**
Soru Kökü: Displastik Schwann hücreleri ve fibroblastlardan oluşan tümöral kılıfların kontrolsüz gelişimiyle karakterize olan ve oral kavitede bu pleksiform yapıların dil dokusu stroması içine difüz infiltrasyonu sonucunda kütlesel makroglossi kliniği yaratan sendromik patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Nörofibromatozis Tip I
Açıklama: Pleksiform nörofibromlar (displastik Schwann hücreleri ve reaktif fibroblast proliferasyonları), Nörofibromatozis Tip I (von Recklinghausen hastalığı) sendromunda dil içine implante olarak difüz makroglossi tablosu oluşturur. Multipl Endokrin Neoplazi Tip 2B'de makroglossi yapan hücresel komponent 'mukozal nöroma'lardır, pleksiform Schwann kılıfı değil. Kas kökenli sendromlarda (Beckwith-Wiedemann vb.) patolojinin kütlesel odağı doğrudan kas hiperplazisine dayanır.

---

### ÇİFT 157 (Benzerlik: 0.73)

**Soru 1 (ID: 2a3bdc83-5125-4d1e-ac3d-fd6e74d15239)**
Soru Kökü: Yirmi iki yaşında erkek hasta, alt sağ 20 yaş dişi bölgesinde şişlik ve ağrı şikayetiyle başvuruyor. Radyografik muayenede yarı gömülü dişin kuronunun bukkal yüzeyinde başlayıp kök bifurkasyonuna uzanan radyolusent bir kistik lezyon saptanıyor. Dişe uygulanan vitalite testi pozitif yanıt veriyor ve hastanın geçmişte aynı bölgede perikoronitis atakları geçirdiği öğreniliyor. Bu hastadaki **en olası** kist tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Paradental kist
Açıklama: Paradental (bukkal bifurkasyon) kist, inflamatuar kaynaklı bir kist olmasına rağmen radiküler kistten farklı olarak vital (canlı) dişlerde ve sıklıkla alt 3. molar dişlerin perikoronitis atakları sonrasında servikal periodontal dokudan gelişir. En güçlü distraktör olan dentigeröz kist gelişimsel kökenli olup tam gömülü diş kuronunu mine-sement sınırından sararken, paradental kist dişin canlı kalması ve bukkal servikal/bifurkasyon yerleşimi ile ayrılır.

**Soru 2 (ID: 4dc90ab7-3a6a-4981-96f5-855a18e7f533)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt çenesinde dişe ait belirgin şişlik nedeniyle başvuruyor. Mandibular birinci molar dişi vital tespit ediliyor. Radyolojik muayenede ilgili vital dişin kök ucuna sıkıca kaynaşmış, düzgün bir radyolüsen hat (halo) ile kemikten sınırlandırılmış radyoopak bir kitle bulunuyor. Teşhis ve tedavi amacıyla diş kitle ile birlikte çekiliyor. Lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Sementoblastom
Açıklama: Sementoblastom, sement üreten gerçek bir benign neoplazidir ve patognomonik olarak daima kök ucuna ankiloz (kaynaşık) şekilde izlenir. Periapikal semental displazide ise kök ucunda sınırları daha belirsiz reaktif lezyonlar vardır ve halo işareti bu kadar belirgin değildir. Ayrıca dişe vitalite veren radyografik ve semptomatik tablosuyla sementoblastomda dişin kitle ile beraber cerrahi yolla ortamdan uzaklaştırılması gerekir.

---

### ÇİFT 158 (Benzerlik: 0.73)

**Soru 1 (ID: e8e3d592-8827-4ceb-bc2f-82cc69b360ba)**
Soru Kökü: Mine gelişim anomalisini yansıtan Amelogenezis İmperfekta'nın farklı klinik varyantları ve genetik geçiş modelleri bulunmaktadır. Süt ve kalıcı dişlerde minenin nitelik ve niceliğini etkileyen bu tablonun en sık görülen 'Jeneralize Pitted' tipinin kalıtım paterni ve sınıfı aşağıdakilerden hangisidir?
Doğru Şık (A): Hipoplastik / Otozomal dominant
Açıklama: Amelogenezis imperfekta'nın en sık izlenen formu olan Tip IA Jeneralize Pitted varyantı hipoplastik sınıftadır ve otozomal dominant kalıtım gösterir. Tip IB lokalize formlar da otozomal dominant kalıtılırken, hipomatürasyon tiplerinde sıklıkla X'e bağlı resesif veya otozomal resesif geçişler izlenir. Minenin sekresyon fazındaki defektler hipoplastik formları oluşturur.

**Soru 2 (ID: 8d9fe40e-4b7b-4270-a6bd-95addcbfd702)**
Soru Kökü: Amelogenezis imperfekta (Aİ) alt tipleri klinik görünüm ve kalıtım şekline göre ayrılır. X'e bağlı geçiş gösteren ve klinik olarak 'karla kaplı' (snow-capped) mine görünümü veren Tip IIC, Aİ'nin hangi ana sınıfında yer almaktadır?
Doğru Şık (B): Hipomatürasyon
Açıklama: Tip IIC (karla kaplı) amelogenezis imperfekta, X'e bağlı geçiş gösteren spesifik bir hipomatürasyon tipidir. Mine matrisi normal kalınlıkta sentezlenir ancak mineralizasyonun son aşaması olan kristal büyümesi ve protein uzaklaştırılması kusurlu olduğu için opak, tebeşirimsi (karla kaplı) bir hal alır. Hipoplastik formlarda ise matriks sentezi baştan eksiktir.

---

### ÇİFT 159 (Benzerlik: 0.73)

**Soru 1 (ID: 61b6d2a7-37e2-45f3-96cb-fbfc94684990)**
Soru Kökü: Hareketli protez kullanan 65 yaşında bir hastanın palatal mukozasında protez kaidesiyle sınırlı yaygın kızarıklık saptanmıştır. Lezyon kandidiyazisin eritem grubunda sınıflandırılmıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Protez stomatiti
Açıklama: Protez stomatiti, kandidanın protez altında anaerobik ve nemli ortamda üreyerek mukozada eritem grubunda bir inflamasyon oluşturmasıdır. Epulis fissuratum ise protez kenarlarının kronik travmasıyla gelişen fibröz bir hiperplazidir ve eritematöz enfeksiyon paterni göstermez. Teşhis, protezin altındaki dokunun antifungal tedavi ve hijyenle rahatlaması prensibine dayanır.

**Soru 2 (ID: 83e00a0d-7688-4870-9e3a-091fb7814c5c)**
Soru Kökü: 50 yaşında tip 2 diyabetik ve tam protez kullanan kadın hasta, protezini çıkardığında damağında belirgin bir kızarıklık ve yanma hissi fark ettiğini belirtiyor. Muayenede üst çene kretleri ve damak mukozasında protez sınırlarına uyan diffüz, kırmızı atrofik alanlar izleniyor. Yüzeyden gazlı bezle silindiğinde epitelden kalkan herhangi bir peynirimsi döküntü veya sahte zar yapısı ele gelmiyor. Bu protez stomatiti tablosuna yol açan patojenin epitelde yarattığı majör doku değişimi aşağıdakilerden hangisidir?
Doğru Şık (E): Epitelde incelme (atrofi) ve fokal inflamasyon yaratarak vasküler yatağı belirginleştirmesi
Açıklama: Bu vakadaki protez stomatiti, Candida albicans kolonizasyonunun epitelde keratin artışı (lökoplaki) veya zar yığılımı (pamukçuk) yerine epitel atrofisi ve inflamasyon yarattığı eritematöz kandidiyazis varyantıdır. İncelen skuamöz epitel altındaki vasküler damar ağı direkt mukoza rengine yansıyarak bu hastadaki tipik diffüz kırmızılığı (eritemi) oluşturur. Hastada kazınabilir membran olmaması B şıkkını (psödomembranöz mekanizmayı), hiperkeratoz olmaması ise A şıkkını ekarte eder.

---

### ÇİFT 160 (Benzerlik: 0.73)

**Soru 1 (ID: 23471d38-46fe-48c1-9dd8-829f8ed4234b)**
Soru Kökü: Nazopalatin kanal kisti (insisiv kanal kisti) ile ilgili aşağıdaki ifadelerden hangisinde verilen patolojik/klinik eşleşme **yoktur**?
Doğru Şık (C): Histopatoloji - Şiddetli akut pürülan inflamasyon ve osteonekroz
Açıklama: Nazopalatin kanal kistleri gelişimsel non-odontojenik kistlerdir ve klasik histolojilerinde belirgin inflamasyon izlenmez; inflamasyon ancak sekonder enfeksiyon durumunda kazaen görülebilir. Kistin doğal döşeyici epiteli, burun tabanına yakınlığı nedeniyle solunum epiteli veya skuamöz epitel olabilir. Klasik kalp/armut şeklindeki radyolüsensisi ile radiküler kistlerle karışsa da vitalite testleriyle ayrımı yapılır.

**Soru 2 (ID: 9aafa326-1d1d-458b-86dd-10d6bd2334b9)**
Soru Kökü: Non-odontojenik kistler arasında en sık görülen nazopalatin kanal kisti (insisiv kanal kisti) ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Dişler genellikle non-vitaldir ve radiküler kist ile radyolojik olarak benzerlik gösterir.
Açıklama: Nazopalatin kanal kistinde bölgedeki komşu santral dişlerin vitalitesi korunur; non-vital diş sadece radiküler kist için tipiktir. En güçlü distraktör olan radiküler kist ile radyolojik ve klinik karışıklık yaşansa da, ayırıcı tanı dişin canlılık testi ile yapılır. Tedavisi nüks etmeyen cerrahi enükleasyondur.

---

### ÇİFT 161 (Benzerlik: 0.73)

**Soru 1 (ID: 0d065171-16d7-4afb-a00c-e79a1f83778f)**
Soru Kökü: Aşağıdaki oral mukozal lezyonlardan hangisinin invaziv karsinoma dönüşüm (malignite) potansiyeli diğerlerinden belirgin şekilde daha düşüktür?
Doğru Şık (E): Dumansız tütün keratozu
Açıklama: Dumansız tütün keratozu düşük malignite riskine (1 yıldız) sahipken, proliferatif verrüköz lökoplaki (%100'e varan en yüksek risk), eritroplaki, oral submüköz fibrozis ve eritrolökoplaki karsinomlaşma riski oldukça yüksek lezyonlardır.

**Soru 2 (ID: e48ce453-b11a-4d0e-81d8-7aeb2fc949fd)**
Soru Kökü: Oral kavitede izlenen beyaz lezyonların skuamöz hücreli karsinoma dönüşüm riskleri etiyolojilerine ve barındırdıkları hücresel displaziye göre değişkenlik gösterir. Buna göre, aşağıdaki oral lezyonların hangisinde malignite (kanserleşme) potansiyeli **bulunmaz**?
Doğru Şık (E): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüs, otozomal dominant kalıtılan spesifik bir genetik mutasyon (Keratin 4/13 defekti) olup epitelde neoplastik atipi veya displastik klon barındırmaz; bu nedenle karsinom riski kesinlikle yoktur. Aktinik keratoz, oral submüköz fibrozis, sifilitik lökoplaki ve ters sigara içiciliği ise yüksek displastik aktiviteye sahip majör premalign karsinom öncülleridir.

---

### ÇİFT 162 (Benzerlik: 0.73)

**Soru 1 (ID: 8ea8ccf8-fc70-4ef0-9d57-868976d6727f)**
Soru Kökü: Proliferatif verrüköz lökoplaki (PVL) ile klasik oral lökoplaki tiplerinin klinik seyirleri karşılaştırıldığında, PVL hastalığının etiyopatogenezi için aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sigara kullanımı ile lezyonun ortaya çıkması arasında etiyolojik ilişki çok güçlüdür.
Açıklama: Proliferatif verrüköz lökoplakiyi (PVL) geleneksel skuamöz prekürsörlerden ayıran en keskin epidemiyolojik fark, tütün veya sigara ile ilişkisinin minimal olmasıdır. Genellikle iyi ağız bakımına sahip ve hayatında hiç sigara içmemiş yaşlı kadınlarda multisentrik papillomatöz lezyonlar halinde başlar ve kaçınılmaz kanser progresyonu gösterir.

**Soru 2 (ID: aac2fae1-223e-45a4-9839-13652cc24283)**
Soru Kökü: Altmış sekiz yaşında, hayatı boyunca sigara kullanmamış ve ağız hijyeni mükemmel olan kadın hastanın ağız mukozasında sürekli nüks eden, multifokal yayılan verrüköz yapıda kazınamayan beyaz plaklar saptanıyor. Bu klinik antite ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Etiyopatogenezinde kronik tütün ürünleri kullanımı majör tetikleyicidir.
Açıklama: Proliferatif verrüköz lökoplaki (PVL), klasik lökoplakilerin aksine sigara ile ilişkisi minimal olan ve spesifik olarak sigara içmeyen ileri yaş kadınlarda izlenen agresif bir prekanseröz lezyondur. Etiyolojisi büyük oranda idiyopatiktir. Kanserleşme oranı diğer tüm lökoplakilerden daha yüksek olup, %100'e varan karsinomatöz transformasyon sergileyebilir.

---

### ÇİFT 163 (Benzerlik: 0.73)

**Soru 1 (ID: 890f7d25-c06b-41bb-9a89-b026b29ad1f4)**
Soru Kökü: Literatürde geçmişte embriyolojik gelişim sırasında tüberkulum imparın kaynaşma defekti sonucu yüzeyde kalan konjenital bir anomali sanılan, ancak günümüzde anatomik niş elverişliliğinde fungal ajanların kolonizasyonu ile kronik fokal inflamasyona neden olduğu kesinleşmiş olan oral mukoza lezyonu aşağıdakilerden hangisidir?
Doğru Şık (C): Median romboid glossit
Açıklama: Median romboid glossit (santral papiller atrofi) geçmişte tüberkulum impar kalıntısı bir gelişimsel anomali sanılırken, güncel mikrobiyolojik izolasyonlar bunun vakaların %40'ında Candida albicans kökenli kronik inflamatuar bir atrofi olduğunu kanıtlamıştır. Lingual tiroid aynı bölgede foramen çekum posteriorunda yerleşse de gelişimsel olarak ektopik bir tiroid bezi kütlesidir; mukoza inflamasyonu taşımaz. Bu patolojide mantar hifleri papillaların yenilenmesini enzimatik olarak lokal bağlamda durdurur.

**Soru 2 (ID: fdbfa3bd-c3fd-4d73-9943-728bdfe57812)**
Soru Kökü: Geçmiş tıp literatüründe dilin gelişim aşamalarındaki embriyolojik bir kaynaşma defekti sanılan, ancak güncel patolojide fokal mukozal immünite disfonksiyonuna bağlanan lezyonun eski teorik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Tüberkulum impar kalıntısı
Açıklama: Median romboid glossit, uzun yıllar embriyolojik gelişim sürecinde tüberkulum imparın yüzeyde kalmasıyla oluşan konjenital bir defekt olarak kabul edilmiştir. Günümüzde ise bu lezyonun %40 oranında Candida albicans kolonizasyonu zemininde gelişen inflamatuar-atrofik bir patoloji olduğu kesinleşmiştir. Tip 2 aşırı duyarlılık pernisiyöz aneminin, arayüz dermatiti ise liken planusun patogenezinde rol oynar.

---

### ÇİFT 164 (Benzerlik: 0.73)

**Soru 1 (ID: e8e3d592-8827-4ceb-bc2f-82cc69b360ba)**
Soru Kökü: Mine gelişim anomalisini yansıtan Amelogenezis İmperfekta'nın farklı klinik varyantları ve genetik geçiş modelleri bulunmaktadır. Süt ve kalıcı dişlerde minenin nitelik ve niceliğini etkileyen bu tablonun en sık görülen 'Jeneralize Pitted' tipinin kalıtım paterni ve sınıfı aşağıdakilerden hangisidir?
Doğru Şık (A): Hipoplastik / Otozomal dominant
Açıklama: Amelogenezis imperfekta'nın en sık izlenen formu olan Tip IA Jeneralize Pitted varyantı hipoplastik sınıftadır ve otozomal dominant kalıtım gösterir. Tip IB lokalize formlar da otozomal dominant kalıtılırken, hipomatürasyon tiplerinde sıklıkla X'e bağlı resesif veya otozomal resesif geçişler izlenir. Minenin sekresyon fazındaki defektler hipoplastik formları oluşturur.

**Soru 2 (ID: 32f16faa-f60a-4fe6-a55a-c6765fa1f1c1)**
Soru Kökü: Süt ve kalıcı dentisyonda genetik kökenli olarak minenin miktar ve kalitesini bozan amelogenezis imperfekta hastalığının çeşitli formları mevcuttur. Hastalığın bilinen 4 temel tipi arasında epidemiyolojik olarak en sık izlenen ve mine kalınlığının defektif olduğu varyant aşağıdakilerden hangisidir?
Doğru Şık (A): Hipoplastik tip
Açıklama: Amelogenezis imperfektanın en sık görülen klinik formu, minenin matriks sekresyonunun genetik olarak hatalı olması nedeniyle niceliksel olarak eksik sentezlendiği hipoplastik tiptir. Hipokalsifiye formda mine kalınlığı normal iken yumuşaktır ve kolay aşınır; hipomatürasyon tipinde ise kristal yapısının olgunlaşamamasına bağlı alacalı renklenmeler görülür. Mine agenezisine kadar uzanan ağır tablolar hipoplastik alt gruplarda rapor edilir.

---

### ÇİFT 165 (Benzerlik: 0.73)

**Soru 1 (ID: 7d8e7991-1e17-4169-9cb9-77ac0142ef2b)**
Soru Kökü: Makroglossi ile kendini gösteren genetik metabolik hastalıklardan biri olan Mukopolisakkaridozlar, aşağıdaki patofizyolojik kaskadlardan hangisi üzerinden dilde hacim artışına neden olur?
Doğru Şık (C): Lizozomal asit hidrolaz eksikliğine bağlı makrofaj içi birikim
Açıklama: Mukopolisakkaridozlar, genetik lizozomal asit hidrolaz enzimi eksikliği sonucu heparan ve dermatan sülfat gibi yapıtaşlarının doku makrofajlarında birikmesi ile karakterizedir; bu birikim dil yumuşak dokusunda belirgin makroglossi yaratır. Nöroma infiltrasyonu MEN Tip 2B'nin, overgrowth regülasyon defekti ise Beckwith-Wiedemann sendromunun hücresel mekanizmasıdır.

**Soru 2 (ID: ab8a2e9d-17cd-49fd-9ead-adaed51002d8)**
Soru Kökü: Aşağıdaki konjenital hastalıklardan hangisi spesifik olarak  glikozaminoglikanların parçalanmasını sağlayan enzimlerin doğuştan eksikliği sonucu ikincil bir makroglossi oluşturur?
Doğru Şık (E): Mukopolisakkaridozlar
Açıklama: Mukopolisakkaridozlar, glikozaminoglikanların parçalanmasını sağlayan enzimlerin doğuştan eksikliği sonucu hücre içinde atık materyal birikimiyle giden hastalıklardır ve bu makromoleküllerin dilde birikmesi sekonder makroglossi nedenidir. Kretenizm tiroid yetmezliğine bağlı miksödem kaynaklı, Duchenne ve Beckwith-Wiedemann direkt kas hipertrofisi kaynaklı büyümelerdir. Patolojik materyalin niteliği, makroglossinin yapısal büyüme mi yoksa infiltratif birikim mi olduğunu belirler.

---

### ÇİFT 166 (Benzerlik: 0.73)

**Soru 1 (ID: e9c12110-9c41-44eb-b86b-c6681850e722)**
Soru Kökü: 25 yaşında kadın hasta, aynada dilini incelerken dilinin sırtında derin yarıklar ve şekli sürekli değişen kırmızı alanlar gördüğünü söyleyerek panik içinde muayeneye geliyor. Klinikte, sınırları beyazımsı halkalarla çevrili kırmızı atrofik lezyonların yanı sıra dilin orta hattından yanlara doğru uzanan derin oluklar (fissürler) saptanıyor. Lezyonlarda mekanik kazıma ile doku kalkması görülmüyor. Hastayı değerlendiren diş hekiminin, bu hastadaki anatomik anomalilerin kombinasyonu için teşhis ettiği durumlar sırasıyla aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (A): Eritema migrans ve Fissürlü dil
Açıklama: Vakadaki şekli sürekli değişen, sınırları sarı-beyaz hiperkeratotik halkalarla çevrili papilla atrofisi 'Eritema migrans'ı (coğrafik dil) tanımlar ve klinik literatürde bu tabloya en güçlü oranda (vakaların 1/3'ü) eşlik eden yapısal defekt 'Fissürlü dil' anomalisidir. Median romboid glossit şekil değiştirmez sabit kalır; pamukçuk (psödomembranöz form) lezyonları ise kazındığında epitelden sıyrılır. Hastanın anamnezindeki klinik yer değiştirme ve derin oluklar bu klasik sendromik eşleşmenin direkt temelidir.

**Soru 2 (ID: 49ebdaea-ed50-4cbc-ab9b-9f373af78bd7)**
Soru Kökü: 32 yaşında erkek hasta, dilinde hafif bir hassasiyet fark ettiğini belirterek kliniğe başvuruyor. Muayenede dil sırtında etrafı sarımsı-beyaz bir haleyle çevrili, kırmızı renkli ve düzensiz (gezici) sınırlı atrofi alanları saptanıyor. Hastanın tıbbi anamnezinden HLA-B27 antijeni pozitif olduğu, eklemlerinde artrit ve gözlerinde konjonktivit atakları nedeniyle romatoloji takibinde olduğu öğreniliyor. Bu hastanın dilindeki klinik görünümün en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Coğrafik dil (Eritema migrans)
Açıklama: Üretrit, artrit ve konjonktivit ile karakterize HLA-B27 pozitif Reiter sendromunda, dilde sıklıkla sarı-beyaz hiperkeratotik doku halkasıyla çevrili gezici atrofik formlar (eritema migrans / coğrafik dil) tespit edilir. Median romboid glossitte sınırlar sabittir ve beyaz bir halo yoktur, nutrisyonel anemilerde ise tüm dilde sarı-beyaz sınırdan yoksun diffüz kırmızı bir atrofi (glossit) hakimdir. Coğrafik dilin gezici sınır davranışı ve psöriatik sistemik yatkınlığı spesifik kurguyu belirler.

---

### ÇİFT 167 (Benzerlik: 0.73)

**Soru 1 (ID: 93df1f2c-96b6-43bb-8049-88855c73e612)**
Soru Kökü: Elli yaşında kronik sigara kullanıcısı erkek hastanın dil kenarında fiziksel olarak kazınamayan (fikse), kalın beyaz bir plak saptanmıştır. Biyopside epiteliyal hiperplazi, hücresel atipi ve keratin katmanları arasında yoğun fungal hif infiltrasyonu izlenmiştir. Hastanın lezyonu için en doğru tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kronik hiperplastik kandidiyazis
Açıklama: Fungal tahribata karşı epitelin aşırı proliferasyon (hiperplazi) gösterdiği, fiziksel olarak kazınamayan ve displazi potansiyeli taşıdığı için premalign kabul edilen lezyon kronik hiperplastik kandidiyazistir (kandidal lökoplaki). İdiyopatik lökoplakide fungal etken saptanmazken, psödomembranöz kandidiyazis her zaman kazınabilir yapıdadır. Biyopsideki fungal yapı lökoplaki ayrımındaki kritik veridir.

**Soru 2 (ID: df955b9f-bd42-456c-b71b-96ba02eb907c)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından 'kazınamayan ve klinik ya da patolojik anlamda başka bir hastalık olarak karakterize edilemeyen beyaz renkli yama ya da plak' şeklinde tanımlanan, %5-25 oranında karsinoma dönüşüm riski taşıyan lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, spesifik bir patolojik tanıdan ziyade kazınamayan beyaz plakları tanımlayan klinik bir terimdir ve premalign potansiyele sahiptir. Psödomembranöz kandidiyazis ise mukozadan kazınabilen beyaz plak formasyonudur.

---

### ÇİFT 168 (Benzerlik: 0.73)

**Soru 1 (ID: 69152174-bf50-40ef-bada-a9529c2a53a1)**
Soru Kökü: 60 yaşında bir hastanın yüzünün sadece sağ yarısında, maksiller sinir hattı boyunca orta hattı hiçbir şekilde aşmayan şiddetli ağrılı veziküler döküntüler meydana gelmiştir. Hasta bu döküntüler ortaya çıkmadan önce üç gün boyunca o bölgede dayanılmaz bir sızı hissettiğini tarif etmektedir. Bu virüsün sekonder aktivasyon oluşturmadan önce sessiz olarak beklediği (latansi) nöroanatomik bölge aşağıdakilerden hangisidir?
Doğru Şık (D): Duyu ganglionları
Açıklama: Herpes Zoster (Zona) enfeksiyonu, çocuklukta geçirilen su çiçeği sonrası Varisella Zoster Virüsünün duyu ganglionlarında (özellikle Trigeminal ganglion) yıllar boyunca sessiz (latent) kalmasıyla karakterizedir. İmmünsüpresyon geliştiğinde virüs bu ganglionlardan çıkarak enfekte ettiği duyu sinirinin sadece kendi dermatom alanında ilerler, bu yüzden asla motor çekirdeklerden veya doğrudan epitelyal bazal membrandan kaynaklanmaz. Dermatom spesifik tek taraflı ilerleyiş, patojenin spesifik periferik sinir hücresine yerleşmesinin doğal sonucudur.

**Soru 2 (ID: f5c8499e-217c-4803-9286-954054f152a5)**
Soru Kökü: Altmış yaşında erkek hasta; sağ kulağında ve boğazında döküntü öncesi başlayan şiddetli ağrı, aynı taraf yüz yarısında alın kaslarını da içeren sarkma ve dış kulak yolunda veziküler döküntüler tablosuyla kliniğe başvuruyor. Bu hastada patolojiye neden olan virüsün reaktivasyon kaskadının başladığı spesifik anatomik bölge neresidir?
Doğru Şık (C): Genikulat gangliyon
Açıklama: Tarif edilen tek taraflı periferik yüz felci (alın dahil), dış kulak yolunda veziküller ve prodromal nevraljik ağrı triadı Ramsay Hunt sendromudur. Bu sendromun patofizyolojisi, Varicella Zoster Virüsünün (VZV) fasiyal sinirin duyu gangliyonu olan genikulat gangliyonda reaktive olup anterograt yolla inmesine dayanır. Trigeminal gangliyon (veya Gasser), Herpes simpleks virüsünün (HSV) reaktivasyon bölgesidir.

---

### ÇİFT 169 (Benzerlik: 0.73)

**Soru 1 (ID: 3b2814f3-eef3-4ca1-b7da-7c0b0d933ba0)**
Soru Kökü: Kronik periapikal inflamasyonun etkisiyle Malassez epitel artıklarının prolifere olması sonucu oluşan radiküler kistlerin epitel hücreleri üzerinde sıklıkla izlenen lineer, lameller kalsifikasyon odaklarına ne ad verilir?
Doğru Şık (A): Rushton cisimleri
Açıklama: Periapikal (radiküler) kistlerin non-keratinize skuamöz epitel döşemesi üzerinde izlenen, lineer veya lameller yapıda olabilen karakteristik kalsifikasyon odaklarına Rushton cisimleri adı verilir. Serres artıkları dental laminaya ait epitel kalıntılarıdır ve odontojenik tümör gelişiminde rol alırken, radiküler kistler kök kılıfı kalıntıları olan Malassez epitel artıklarından köken alarak büyürler. Bu kistlerin tedavisi ilgili dişin kök kanalı tedavisinin yanı sıra lezyonun cerrahi eksizyonudur.

**Soru 2 (ID: e03cee07-6882-4176-a259-f47b0870aaa1)**
Soru Kökü: Kanal tedavisi başarısız olmuş devital bir dişin apeksinden eksize edilen lezyonun histopatolojisinde, non-keratinize skuamöz epitel astarı ve bağ dokusunda yoğun inflamasyon görülmüştür. Epitel hücreleri üzerinde lineer ve lameller yapıdaki eozinofilik kalsifikasyonlara ne ad verilir?
Doğru Şık (E): Rushton cisimleri
Açıklama: Radiküler (periapikal) kistlerde epitel hücreleri üzerinde biriken ve tanısal değeri olan lineer-lameller eozinofilik kalsifikasyonlara Rushton cisimleri adı verilir. Liesegang halkaları kalsifiye epitelyal odontojenik tümörde konsantrik kalsifikasyonlar şeklinde izlenirken, Verokay cisimleri sinir tümörlerinde görülür.

---

### ÇİFT 170 (Benzerlik: 0.73)

**Soru 1 (ID: 9ff88707-3b49-4a97-989b-597b677bfaea)**
Soru Kökü: Kırk beş yaşındaki immünsüprese bir hastanın ağız içi muayenesinde dilinin lateral kenarlarında tüy benzeri beyaz lezyonlar saptanıyor. Tanısal değerlendirme sırasında spatül ile yapılan kazıma testinde, epiteliyal beyaz plakların yüzeyden kolayca sıyrılabildiği ve altından eritemli-kanamalı bir dokunun ortaya çıktığı gözlemleniyor. Bu fiziksel bulguya göre, hastadaki lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Psödomembranöz kandidiyazis
Açıklama: Fiziksel kazıma testinde beyaz lezyonun yüzeyden sıyrılarak altından kanamalı eritemli dokunun çıkması, patolojinin mukozal epitel hiperkeratozu değil, yüzeyel bir enfeksiyöz membran olduğunu kanıtlar. Bu klinik davranış psödomembranöz kandidiyazise (pamukçuk) özgüdür. Kıllı lökoplaki, idiyopatik lökoplaki ve friksiyonel keratoz epitelin bizzat kendi kalınlaşması olduğu için KESİNLİKLE kazınamazlar.

**Soru 2 (ID: df955b9f-bd42-456c-b71b-96ba02eb907c)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından 'kazınamayan ve klinik ya da patolojik anlamda başka bir hastalık olarak karakterize edilemeyen beyaz renkli yama ya da plak' şeklinde tanımlanan, %5-25 oranında karsinoma dönüşüm riski taşıyan lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, spesifik bir patolojik tanıdan ziyade kazınamayan beyaz plakları tanımlayan klinik bir terimdir ve premalign potansiyele sahiptir. Psödomembranöz kandidiyazis ise mukozadan kazınabilen beyaz plak formasyonudur.

---

### ÇİFT 171 (Benzerlik: 0.73)

**Soru 1 (ID: 835eec77-aa64-4be9-b576-da386b9e59b5)**
Soru Kökü: On bir yaşındaki erkek hasta, yanak içi bölgesinde her iki tarafta da bulunan, ağrısız, kalın ve süngerimsi beyaz plaklar şikayetiyle başvuruyor. Anamnezden bu durumun puberte öncesinde belirdiği ve babasında da benzer lezyonlar olduğu öğreniliyor. Bu hastadaki lezyonun patogenezinde aşağıdaki genlerden hangisinde mutasyon saptanması en olasıdır?
Doğru Şık (B): Keratin 4 ve/veya Keratin 13
Açıklama: Beyaz sünger nevüs (Cannon Hastalığı), keratin 4 ve/veya keratin 13 genlerindeki mutasyonlar sonucu gelişen, otozomal dominant geçişli herediter bir durumdur. ATP2A2 geni mutasyonu foliküler keratozise (Darier hastalığı) neden olurken, hücresel düzeyde desmozomal defektler oluşturur. Beyaz sünger nevüste puberte öncesi başlangıç ve bilateral tutulum tanı koydurucu temel klinik parametrelerdir.

**Soru 2 (ID: 1add0393-72b7-4e85-bd84-f4260057e5eb)**
Soru Kökü: Puberte öncesi beliren bilateral asemptomatik beyaz lezyonlarla karakterize olan ve histopatolojik incelemesinde dikensi (prickle) hücrelerde 'perinükleer eozinofilik kondensasyon' saptanan genetik defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüs (Cannon hastalığı), keratin 4 ve 13 genlerindeki otozomal dominant bir mutasyon sonucu gelişir ve mikroskopide karakteristik perinükleer eozinofilik kondensasyon barındırır. Herediter benign intraepitelyal diskeratoziste ise kondensasyon değil, diskeratotik hücreler ön plandadır. Hastalığın bilateral olması ve puberte öncesi başlangıcı genetik altyapısını doğrular.

---

### ÇİFT 172 (Benzerlik: 0.73)

**Soru 1 (ID: c0239e53-3680-4091-b8ac-ced5d19dfa42)**
Soru Kökü: İmmünsüprese bir hastanın dil lateralinde izlenen kıllı lökoplaki lezyonunun biyopsi incelemesinde saptanan patolojik değişikliklerin asıl etyolojik ajanı olan virüs aşağıdakilerden hangisidir?
Doğru Şık (A): Epstein-Barr virüsü
Açıklama: Kıllı lökoplaki, zemininde yatan hastalık (AİDS) ne olursa olsun lezyonu doğrudan üreten ajan epitel hücrelerini enfekte eden Epstein-Barr (EBV) virüsüdür. İnsan papilloma virüsü (HPV) siğil, papillom ve oral skuamöz kanser etyolojisinde rol alırken, EBV spesifik olarak bu beyaz tüy benzeri lezyonun baş aktörüdür. Moleküler testlerde EBV DNA'sı gösterilmesi tanıyı kesinleştirir.

**Soru 2 (ID: eb241d0b-09e9-4f4e-ab43-1952a7eeae95)**
Soru Kökü: İmmünsüprese bireylerde dilin lateral sınırlarında izlenen ve mekanik olarak kazınamayan kıllı (hairy) lökoplaki lezyonunun histopatolojik incelemesinde, Epstein-Barr virüsünün (EBV) sitopatik etkisine bağlı olarak epitelde spesifik olarak aşağıdaki hücrelerden hangisi izlenir?
Doğru Şık (D): Balon hücreleri
Açıklama: Kıllı lökoplakide, EBV'nin stratum spinosuma yerleşip viral replikasyon yapması sonucu epitelde hiperparakeratoz, akantoz ve spesifik 'balon hücreleri' görülür. Perinükleer eozinofilik kondensasyon beyaz sünger nevüsün, intrasellüler ödem ise lökoödemin karakteristik mikroskobik bulgusudur. Balon hücreleri viral sitopatik hasarın doğrudan göstergesidir.

---

### ÇİFT 173 (Benzerlik: 0.73)

**Soru 1 (ID: da32b6bd-ae66-4f13-a614-855e7cfaa6c4)**
Soru Kökü: Konjenital veya edinsel makroglossi etiyolojisine yol açan aşağıdaki genetik ve metabolik durumlardan hangisi **yanlıştır**?
Doğru Şık (D): Multipl Endokrin Neoplazi Tip 2A'da mukozal nöroma hiperplazisi izlenir
Açıklama: Multipl Endokrin Neoplazi (MEN) spektrumunda dilde makroglossi yapan mukozal nöroma hiperplazisi sadece MEN Tip 2B'ye özgü bir bulgudur, MEN Tip 1 veya 2A'da bu patoloji izlenmez. Diğer seçeneklerdeki genetik/metabolik mekanizmalar gerçek veya göreceli makroglossi nedeni olarak tamamen doğrudur. DUS terminolojisinde sendrom tiplendirmesi sık kullanılan bir tuzaktır.

**Soru 2 (ID: 448548ec-e86e-455a-a058-746c476cfd13)**
Soru Kökü: Aşağıdakilerden hangisi makroglossi tablosuna neden olan konjenital ve herediter faktörler arasında **yer almaz**?
Doğru Şık (D): Akromegali
Açıklama: Akromegali, yetişkinlik döneminde büyüme hormonunun aşırı salgılanmasıyla ortaya çıkan edinsel (sonradan kazanılmış) bir makroglossi nedenidir. Kaynak metinde listelenen Beckwith-Wiedemann sendromu, multipl endokrin neoplazi tip 2B, Duchenne muskuler distrofi ve kretenizm konjenital/herediter kategoridedir. Sınav komisyonu, konjenital ve edinsel etyolojilerin kategorik ayrımını temel bir patoloji nosyonu olarak sıklıkla test eder.

---

### ÇİFT 174 (Benzerlik: 0.73)

**Soru 1 (ID: 2d3f7036-e314-4f32-9ff3-e424a18373f1)**
Soru Kökü: Kırk yaşında erkek hastanın panoramik radyografisinde mandibula angulusunda 'sabun köpüğü' görünümünde multiloküler radyolüsent alan saptanıyor. Histolojik kesitlerde santralde yıldızsı retikulum benzeri ağsı bir bağ dokusu ve periferde palizatlaşmış, ters polarite gösteren hiperkromatik küboidal hücreler izleniyor. Kemikte şiddetli ekspansiyon yapan bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Klinikte yavaş büyüyen, ağrısız, multiloküler (sabun köpüğü) radyolüsensi yapan ve histolojisinde ters polariteli palizatlaşmış küboidal/kolumnar bazal hücreler ile merkezde yıldız retikuluma benzeyen yapı içeren tümör konvansiyonel Ameloblastom'dur. Odontojenik miksom da multiloküler olabilir ancak bal peteği veya tenis raketi görünümü yapar ve histolojisi iğsi hücreli bol miksoid stroma içerir. Ameloblastom lokal agresif olup dentin veya mine matriksi üretmez.

**Soru 2 (ID: 4f9a1924-47a5-401b-bc18-1d551c2276c7)**
Soru Kökü: Otuz beş yaşında bir hastanın anterior maksillasında tespit edilen, diş taşıyan alveolar bölgelerde gelişmiş bir tümörün histolojik incelemesinde; sıkıca paketlenmiş, sitolojik olarak masum epitel adacıkları ve bu adacıklarda anlamlı keratinizasyon olmaksızın gelişen tek tip skuamöz farklılaşma izleniyor. Ancak adacıkların periferinde palizatlaşma (çitlenme) veya merkezde stellat retikulum (yıldızsı) benzeri gevşek ağsı yapı gözlenmemiştir. Tablo özellikleri referans alındığında bu lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Skuamöz odontojenik tümör
Açıklama: Dünya Sağlık Örgütü sınıflandırma tablolarında spesifik olarak vurgulandığı üzere, Skuamöz odontojenik tümör (ortalama yaş 34.8); anlamlı keratinizasyon göstermeyen, sıkıca paketlenmiş ve atipisiz skuamöz epitel adalarından oluşur. En önemli ayırıcı özelliği ise, ameloblastomda tipik olarak beklenen periferik palizatlaşmanın ve merkezi stellat retikulum yapısının bu tümörde BİLHASSA OLMAMASIDIR. Bu sayede ameloblastom varyantlarından kolayca ayrılır.

---

### ÇİFT 175 (Benzerlik: 0.73)

**Soru 1 (ID: 050f5fc9-1c05-4b98-b066-1d9d0879b036)**
Soru Kökü: Viral epitel lezyonlarının kliniğe yansımasından önceki semptom fazı (prodrom), etiyolojik tanıda kritiktir. Rekürren Herpes Simpleks enfeksiyonunun vezikül evresi öncesindeki prodromal fazına ait spesifik bulgulardan biri **değildir**?
Doğru Şık (A): Dermatomu izleyen, orta hattı geçmeyen şiddetli nevraljik ağrı
Açıklama: Rekürren HSV enfeksiyonlarında virüs trigeminal gangliyondan epitele ulaştığında (prodrom) vezikül oluşumundan önce patognomonik olarak lokal kaşıntı, hafif yanma ve karıncalanma izlenir. Orta hattı geçmeyen ve dermatoma tek taraflı (unilateral) yayılan şiddetli nevraljik ağrı, Varicella Zoster Virüsünün (Zona/Ramsay Hunt) karakteristik prodromal bulgusudur. Zona kökenli nevraljinin kaşıntıyla değil keskin ağrıyla başlaması en temel ekarte edici farktır.

**Soru 2 (ID: cda95bed-c1cc-4bb3-8927-64f43c8b4892)**
Soru Kökü: Orofasiyal bölgede izlenen veziküler erüpsiyonlarda, Herpes Simplex Virus (HSV) ile Varisella Zoster Virus (VZV / Zona) kaynaklı lezyonların erken klinik ayrımında Zona tanısını destekleyen en spesifik anamnez bulgusu aşağıdakilerden hangisidir?
Doğru Şık (C): Vezikül döküntülerinden önce belirgin, spesifik tek taraflı ağrı olması
Açıklama: Herpes zoster (Zona) lezyonlarının patogenezinde virüsün duyusal sinir lifleri üzerinden deriye taşınması sırasında, veziküller henüz ortaya çıkmadan önce sinir trase hattında şiddetli bir nöropatik ağrı hissedilmesi en temel ayırıcı bulgudur. HSV reaktivasyonlarında (uçuk gibi) prodromal dönem ağrıdan ziyade bölgesel kaşıntı, yanma ve karıncalanma hissiyle karakterizedir. Ayrıca Zona lezyonları anatomik olarak orta hattı geçmeyerek sıkı bir şekilde tek taraflı dermatomu takip ederler.

---

### ÇİFT 176 (Benzerlik: 0.73)

**Soru 1 (ID: e229df36-1416-48b6-8e58-b3f3ff28d9b7)**
Soru Kökü: Çenelerin dev hücreli lezyonları arasında yer alan Santral Dev Hücreli Granülom hakkında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Kırk yaş üstü erkeklerde, arka mandibulada gelişim eğilimi belirgindir
Açıklama: Santral Dev Hücreli Granülom sıklıkla gençlerde (20 yaş altı) ve kadınlarda görülür; arka mandibuladan ziyade anterior mandibulada (1. moların önünde) yerleşme eğilimi gösterir. 40 yaş üstü erkek profilini tarif eden seçenek bu lezyonun demografisine ve biyolojik davranışına aykırıdır. Travma sonucu fibroblastik proliferasyon ve osteoklast benzeri dev hücre reaksiyonuyla karakterize non-neoplastik bir durumdur.

**Soru 2 (ID: 48c76efc-73dd-4c41-8934-13064d9ae648)**
Soru Kökü: Ağız mukozasında saptanan periferal dev hücreli granülom lezyonunun histolojik ve klinik özellikleri dikkate alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Sahip olduğu malign transformasyon riski nedeniyle çenede geniş radikal rezeksiyon gerektirir.
Açıklama: Periferal dev hücreli granülom tümör benzeri bir isme sahip olsa da tamamen reaktif bir yumuşak doku büyümesi olup hiçbir şekilde malignite (kanserleşme) potansiyeli taşımaz; bu nedenle tedavisinde geniş rezeksiyona gerek duyulmadan periosta veya periodontal membrana kadar uzanan basit lokal cerrahi eksizyon yeterlidir. Rengi tipik olarak mavi-pembe spektrumunda olup sadece gingivada ve çoğunlukla birinci molar dişlerin önündeki alveoler bölgede yerleşir. Lezyonda gerçek bir tümöral yapı değil, bağ dokusu reaksiyonu mevcuttur.

---

### ÇİFT 177 (Benzerlik: 0.73)

**Soru 1 (ID: ab7604a2-cc85-4b8c-8d5d-3d4738749f7c)**
Soru Kökü: Witkop hastalığı olarak da bilinen otozomal dominant kalıtılan herediter benign intraepitelyal diskeratozis, oral mukozadaki hiperplastik beyaz plakların yanı sıra vücudun hangi ekstraoral bölgesinde tipik plak benzeri lezyonlarla karakterizedir?
Doğru Şık (B): Göz konjonktivası
Açıklama: Herediter benign intraepitelyal diskeratozis (Witkop-Von Sallmann sendromu), oral beyaz lezyonlara ek olarak hayatın ilk yıllarında korneal limbusta ve bukkal konjonktivada plaklarla (konjonktival tutulum) kendini gösterir. Avuç içi ve ayak tabanı tutulumu hiperkeratoz sendromlarında (Papillon-Lefèvre gibi) görülürken, Witkop hastalığında oftalmik bulgular spesifiktir. Her iki bölgedeki lezyon da kendini sınırlayan benign yapıdadır.

**Soru 2 (ID: 21204b82-757d-4b83-8b53-099cff0b7db4)**
Soru Kökü: Witkop hastalığı (Herediter Benign İntraepitelyal Diskeratozis) ile ilgili aşağıdakilerden hangisi doğrudur?
Doğru Şık (B): Hayatın ilk yıllarında bukkal konjonktivit ve oral beyaz plaklarla karakterizedir
Açıklama: Witkop hastalığı otozomal dominant kalıtılan, hayatın ilk yıllarında bukkal konjonktivit ve korneal limbusta plaklarla beraber oral beyaz lezyonlar ile karakterize bir sendromdur. Tedavi gerektirmeyen, kendini sınırlayan bir yapıdadır ve malignite potansiyeli yoktur. Mikroskobik olarak atrofi değil, hiperplazi, akantoz ve ödem görülür.

---

### ÇİFT 178 (Benzerlik: 0.73)

**Soru 1 (ID: 45ea0090-ee0d-4618-a801-c7e2fc1fefc2)**
Soru Kökü: Aşağıdaki patolojik tabloların hangilerinde oral kavitede sekonder karsinogenez (SCC gelişimi) veya displastik potansiyel (premalignite) riski majör olarak artmıştır?
I. Plummer-Vinson Sendromu
II. Kronik Hiperplastik Kandidiyazis
III. Oral Submüköz Fibrozis
Doğru Şık (E): I, II ve III
Açıklama: Plummer-Vinson sendromunda atrofiye bağlı bariyer kaybı; kronik hiperplastik kandidiyaziste ısrarcı epitel atipisi (kandidal lökoplaki); oral submüköz fibroziste ise kronik irritasyon kaskadları doğrudan Skuamöz Hücreli Karsinom (SCC) gelişimine zemin hazırlar. Üç patoloji de oral onkolojik taramada mutlak prekanseröz/premalign havuzda değerlendirilir. Fungal kökenli olmasına rağmen hiperplastik Candida formunun premalign sayılması majör bir sınav spotudur.

**Soru 2 (ID: 0d3671bb-ae7c-40ed-bc58-e30510278bd7)**
Soru Kökü: Oral bölgede izlenen premalign mukoza lezyonlarından hangileri skuamöz hücreli karsinoma (SCC) dönüşüm açısından diğerlerinden çok daha yüksek risk taşır?
I. Proliferatif Verrüköz Lökoplaki
II. Revers Smokers Palatal Lezyonu
III. Kıllı Lökoplaki
IV. Oral Submuköz Fibrozis
Doğru Şık (B): I, II ve IV
Açıklama: Proliferatif Verrüköz Lökoplaki (bazı serilerde %100 risk), Revers Smokers Palatal Lezyonu (5 yıldızlı) ve betel cevizi ilişkili Oral Submuköz Fibrozis (5 yıldızlı) oral kavitenin en agresif premalign lezyonlarındandır. Epstein-Barr virüsü kökenli Kıllı (Hairy) Lökoplaki ise adına rağmen hücresel displazi barındırmaz ve kanserleşme (malignite) riski SIFIRDIR.

---

### ÇİFT 179 (Benzerlik: 0.73)

**Soru 1 (ID: d70b9497-1783-4ff4-8900-275e750ffe37)**
Soru Kökü: Altmış yaşında kadın hasta, mandibulada sınırları oldukça silik ve çevre kortekste şiddetli perforasyon yaratan agresif kitle şikayeti ile kliniğe yönlendiriliyor. Biyopsi materyalinde epitel hücrelerinin yoğun şeffaf (clear) sitoplazmik kompartımanlardan oluştuğu, arada ince bağ dokusu septaları bulunduğu raporlanıyor. Hastanın tümör dokusu perinevral infiltrasyon ve servikal metastaz şüphesi doğuruyor. Sık rastlanmayan, infiltratif ve sitolojik karakteriyle kötü prognoza işaret eden bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Şeffaf hücreli odontojenik karsinom
Açıklama: Şeffaf hücreli odontojenik karsinom (Clear Cell Odontogenic Carcinoma), hücrelerin glikojen deposundan zengin sitoplazmasının preparasyon esnasında erimesiyle net şeffaf görünüm bıraktığı, ileri yaş grupta şiddetli bölgesel kemik destrüksiyonu ve uzak metastazla seyreden malign tümördür. Diğer şeffaf hücreli metastatik tümörlerin (Böbrek hücreli ca vb.) dışlanmasından sonra tanı konur ve blok diseksiyon gerektirir.

**Soru 2 (ID: 6aa49726-ef0b-4eb4-8c1a-ab8edd6593d6)**
Soru Kökü: Altmış iki yaşındaki kadın hastanın sert damağında mukoza altında gelişen ağrısız kitle eksize ediliyor. İncelemede hücrelerin perineural invazyon gösterdiği, ancak miksoid stromada 'İsviçre peyniri' yapısından çok tek sıralı hücre kordonları ve terminal duktus yapısı şeklinde yayıldığı saptanıyor. Lokal agresif olan bu karsinom aşağıdakilerden hangisidir?
Doğru Şık (A): Polimorföz düşük dereceli adenokarsinom
Açıklama: Polimorföz düşük dereceli adenokarsinom (PLGA), terminal duktus kökenli olup özellikle damak minör tükürük bezlerini tutar. Perinöral invazyonu adenoid kistik karsinom ile karışmasına neden olsa da, tek sıralı hücre dizilimleri (indian file) ve daha düşük malignite derecesi ile ondan ayrılır.

---

### ÇİFT 180 (Benzerlik: 0.73)

**Soru 1 (ID: 6e0dfb40-641b-497b-b084-1e2e83257809)**
Soru Kökü: Klinik muayene sırasında iki farklı hastada biyopsi yapılmamış lökoplakik plaklar tespit edilmiştir. Birinci hastanın lezyonu ağız tabanında, ikinci hastanın lezyonu ise alt vestibül sulkusta yer almaktadır. Bu iki hastanın prognozları kanserleşme riski açısından karşılaştırıldığında, litaratüre dayalı en doğru çıkarım aşağıdakilerden hangisidir?
Doğru Şık (D): Ağız tabanındaki lezyon kanser riski sıralamasında zirvede yer aldığı için bu hastanın malignite gelişme riski çok daha yüksektir.
Açıklama: Lökoplakide lokalizasyon ve malignite potansiyeli ilişkisi ters orantılı bir kuraldır: Lökoplaki en sık vestibül bölgesinde görülmesine rağmen buradaki lezyonların karsinom olma ihtimali en düşük düzeylerdedir. Buna karşılık ağız tabanı lezyonların en nadir izlendiği alan olmakla birlikte, kanserleşme potansiyeli açısından listenin tartışmasız birinci sırasında yer alır.

**Soru 2 (ID: df7c057f-c6df-40a9-a5ed-ae033c080f4d)**
Soru Kökü: İdiyopatik lökoplakilerin insidansı ile maligniteye (skuamöz hücreli karsinom) dönüşüm riski anatomik bölgelere göre farklılık gösterir. Buna göre, lökoplaki görülme sıklığının düşük olmasına karşın, hücresel kanserleşme riskinin tartışmasız en yüksek olduğu oral lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (B): Ağız tabanı
Açıklama: Lökoplakilerin malign transformasyon riski anatomik hiyerarşide en fazla Ağız tabanında izlenir, bunu dil ve dudak takip eder. Buna karşın vestibül mukoza lökoplakilerin en sık rastlandığı ancak kanserleşme riskinin en düşük olduğu anatomik alandır. Bu ters orantı kuralı oral prekanseröz lezyonların yönetiminde kritik bir prognostik göstergedir.

---

### ÇİFT 181 (Benzerlik: 0.73)

**Soru 1 (ID: 05245b6d-6a56-476a-96d4-a560c4c8eb7f)**
Soru Kökü: Otuz yaşında erkek hasta, boyunda giderek büyüyen ve yutkunma güçlüğü yaratan iri bir lenf nodu şişliği ile kliniğe başvuruyor. Yapılan intraoral muayenede orofarenkste çok küçük, zor fark edilen bir primer lezyon tespit ediliyor. Hastanın sigara veya alkol kullanım öyküsü bulunmuyor. Alınan biyopsinin histopatolojik incelemesinde en olası bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Non-keratinize skuamoz hücreli karsinom
Açıklama: Senaryodaki genç yaş, sigara/alkol eksikliği, orofarenks yerleşimi ve 'iri nodal hastalık ile küçük primer lezyon' tablosu tipik HPV-ilişkili SCC bulgularıdır. HPV-ilişkili SCC'ler histopatolojik olarak non-keratinize özellik gösterirken, klasik HPV-ilişkisiz oral kavite SCC'leri keratinizedir (keratin incileri içerir). Bu tümörler büyük boyun kitlelerine rağmen paradoksal olarak daha iyi prognoza sahiptir.

**Soru 2 (ID: 702b5a03-d41b-4701-a305-5d08ad08196b)**
Soru Kökü: Altmış yaşında, uzun süredir tütün ve alkol kullanan erkek hastanın dil lateralinde sert ve düzensiz kenarlı bir ülser saptanmıştır. Boyunda fiske lenfadenopatisi olan bu hastanın biyopsi sonucu HPV-negatif Skuamöz Hücreli Karsinom gelmiştir. Bu hastanın patoloji raporunda aşağıdaki histolojik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Onkositik çift sıralı epitel
Açıklama: Onkositik (mitokondriden zengin) çift sıralı epitel ve germinal merkezler Warthin tümörünün (benign tükürük bezi tümörü) karakteristik bulgusudur. Klasik (HPV negatif) keratinize SCC'de ise keratin incileri, atipi ve tek hücre keratinizasyonu izlenir.

---

### ÇİFT 182 (Benzerlik: 0.73)

**Soru 1 (ID: a96b4499-f7ce-423f-a660-41c59e39c5f8)**
Soru Kökü: Çocuk hastada yüksek ateş ve boğaz ağrısıyla seyreden bir hastalık tablosunda klinisyen yumuşak damak ve posterior orofarinkste yaygın veziküler döküntüler tespit etmiştir. Diş eti tutulumu izlenmeyen ve klinik olarak tonsillit ile sıklıkla karışan bu Koksaki virüs enfeksiyonunun tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Herpanjina
Açıklama: Herpanjina, Koksaki virüslerin neden olduğu, spesifik olarak ağızın en arka bölgesi olan yumuşak damak ve orofarinkste herpetik enfeksiyona benzeyen veziküller oluşturan hastalıktır. Herpes simplex (gingivostomatit) diş etlerini ve ön bölgeleri de güçlü şekilde tutarken herpanjina posterior hatta sınırlı kalma eğilimi nedeniyle tonsillit veya farenjit sanılarak yanlış tedavi alabilir. Veziküler lezyon formasyonu herpanjinanın tonsillitten ayırıcı klinik karakteridir.

**Soru 2 (ID: 5864de05-d43e-4331-81a2-9426fb9d71b1)**
Soru Kökü: Üç yaşında bir çocuk yüksek ateş, huzursuzluk, lenfadenopati ve beslenme reddi şikayetleriyle kliniğe başvuruyor. Yapılan intraoral muayenede, sadece posterior farinkste değil, tüm ağız mukozasına yayılmış eritem ve bilhassa diş etlerinde marjinal şişlik ile karakterize rüptüre veziküller tespit ediliyor. Bu vakadaki etiyolojik majör enfeksiyöz ajan aşağıdakilerden hangisidir?
Doğru Şık (D): DNA virüsü olan Herpes Simpleks Virüsü-1
Açıklama: 6 ay ile 5 yaş arası çocuklarda yüksek ateş, sistemik inflamasyon ve tüm oral kaviteyle beraber bilhassa diş etlerinde (gingiva) şiddetli kızarıklık, şişlik ve veziküller ile seyreden patoloji Primer Herpetik Gingivostomatittir. Bu tablonun etkeni Herpes Simpleks Virüsü-1'dir (HSV-1). Eğer lezyon diş etini tutmadan sadece yumuşak damak ve tonsillere lokalize kalsaydı, Koksaki virüs kaynaklı Herpanjina düşünülmeliydi.

---

### ÇİFT 183 (Benzerlik: 0.73)

**Soru 1 (ID: 0d065171-16d7-4afb-a00c-e79a1f83778f)**
Soru Kökü: Aşağıdaki oral mukozal lezyonlardan hangisinin invaziv karsinoma dönüşüm (malignite) potansiyeli diğerlerinden belirgin şekilde daha düşüktür?
Doğru Şık (E): Dumansız tütün keratozu
Açıklama: Dumansız tütün keratozu düşük malignite riskine (1 yıldız) sahipken, proliferatif verrüköz lökoplaki (%100'e varan en yüksek risk), eritroplaki, oral submüköz fibrozis ve eritrolökoplaki karsinomlaşma riski oldukça yüksek lezyonlardır.

**Soru 2 (ID: 5a7f66e7-f329-42ae-b636-a9462a89cc09)**
Soru Kökü: Prekanseröz oral lezyonların malignite riski değerlendirme tablolarında, en agresif biyolojik davranışa ve potansiyele sahip olması nedeniyle altı yıldız (★) ile zirvede derecelendirilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Proliferatif verrüköz lökoplaki
Açıklama: Kanser potansiyeli tablosuna göre Proliferatif Verrüköz Lökoplaki (PVL) 6 yıldız ile en riskli grupta yer almaktadır. Bazı klinik çalışmalarda displazi zincirinin kırılmadığı ve kanserleşme ihtimalinin nükslerle birlikte %100'ü bulabildiği belgelenmiştir. Bu durum PVL'yi tüm mukozal premalign lezyonlar arasında en yıkıcı kılan faktördür.

---

### ÇİFT 184 (Benzerlik: 0.73)

**Soru 1 (ID: edf86562-ae4b-4984-8612-4179e47418c3)**
Soru Kökü: Aşağıdakilerden hangisi konjenital sifiliz enfeksiyonunda izlenen Hutchinson triyadının bileşenlerinden biri **değildir**?
Doğru Şık (B): Altıncı kraniyal sinir tutulumuna bağlı strabismus
Açıklama: Hutchinson triyadının nörolojik bileşeni 8. kraniyal sinir (Nervus vestibulocochlearis) tutulumuna bağlı sensörinöral sağırlıktır. Altıncı sinir (N. abducens) tutulumu ve strabismus bu triadda yer almaz (DUS komitelerinin favori çeldiricisidir). Diğer bileşenler; kama biçimli kesiciler/dut molarlar (dental anomali) ve interstisyel keratittir (oküler anomali).

**Soru 2 (ID: 83c73d04-9910-4dab-a8df-d622a3c82fa1)**
Soru Kökü: Konjenital sifiliz geçişi olan yenidoğanların gelişim sürecinde diş, göz ve kulak anatomisini ilgilendiren spesifik anomaliler ortaya çıkar. 
I. Keratit
II. Kama biçimli insisiv dişler ve dut biçimli molar dişler
III. Yarık damak deformitesi
IV. Sekizinci kafa çifti tutulumuna bağlı sağırlık
Buna göre, klasik Hutchinson triyadında yukarıdaki klinik bulgulardan hangileri birlikte tanımlanır?
Doğru Şık (D): I, II ve IV
Açıklama: Konjenital sifilizin klasik belirtisi olan Hutchinson triyadı tam olarak şu üç bileşenden oluşur: Dişlerde mine ve dentin gelişim defektine bağlı kama (Hutchinson) dişleri ve dut molarlar, gözde inflamatuvar keratit ve 8. sinir tutulumuna sekonder sensörinöral sağırlık. Yarık damak embriyolojik bir füzyon defekti olup Treponema pallidum enfeksiyonunun spesifik gelişimsel triyadı içerisinde yer almaz. Sistemik treponemal yayılım doğrudan ektodermal yapılara zarar vererek bu üçlü patolojiyi oluşturur.

---

### ÇİFT 185 (Benzerlik: 0.73)

**Soru 1 (ID: 2d3f7036-e314-4f32-9ff3-e424a18373f1)**
Soru Kökü: Kırk yaşında erkek hastanın panoramik radyografisinde mandibula angulusunda 'sabun köpüğü' görünümünde multiloküler radyolüsent alan saptanıyor. Histolojik kesitlerde santralde yıldızsı retikulum benzeri ağsı bir bağ dokusu ve periferde palizatlaşmış, ters polarite gösteren hiperkromatik küboidal hücreler izleniyor. Kemikte şiddetli ekspansiyon yapan bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Klinikte yavaş büyüyen, ağrısız, multiloküler (sabun köpüğü) radyolüsensi yapan ve histolojisinde ters polariteli palizatlaşmış küboidal/kolumnar bazal hücreler ile merkezde yıldız retikuluma benzeyen yapı içeren tümör konvansiyonel Ameloblastom'dur. Odontojenik miksom da multiloküler olabilir ancak bal peteği veya tenis raketi görünümü yapar ve histolojisi iğsi hücreli bol miksoid stroma içerir. Ameloblastom lokal agresif olup dentin veya mine matriksi üretmez.

**Soru 2 (ID: 8136fb44-2400-4058-b4bb-876224c3622f)**
Soru Kökü: Elli yaşında erkek hasta, posterior mandibulada son 3 ayda hızla büyüyen, ağrılı, korteksi delip yumuşak dokuya infiltre olmuş radyolüsen bir kitle şikayetiyle başvuruyor. Eş zamanlı boyun lenfadenopatisi saptanıyor. Histolojisinde ameloblastoma benzer kordonlar ve stellat hücreler görülmekle birlikte, belirgin hücresel pleomorfizm, hiperkromazi, artmış atipik mitoz ve polarite kaybı kaydediliyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik karsinom
Açıklama: Hızlı büyüme, lokal invazyon, ağrı ve lenf nodu metastazı gibi agresif klinik bulgulara ek olarak mikroskopide sitolojik atipi, pleomorfizm ve polarite kaybı gibi klasik 'karsinom' özelliklerinin ameloblastoma benzer hücrelerde görülmesi Ameloblastik Karsinom tanısı koydurur. Konvansiyonel ve metastatik ameloblastomlar histolojik olarak benigndir ve sitolojik atipi barındırmazlar. Bu agresif malign dönüşüm ameloblastik karsinomu ölümcül hale getirir.

---

### ÇİFT 186 (Benzerlik: 0.73)

**Soru 1 (ID: a1d10c59-7f76-4ef1-ab9a-9ace2d49bd99)**
Soru Kökü: İleri yaşlı kadın hastanın damak bölgesinde tespit edilen ve terminal duktuslardan köken aldığı düşünülen bir tükürük bezi tümörü opere ediliyor. Histopatolojisinde perineöral invazyon sıklığı yüksek olan ve stroma içinde **psammom cisimcikleri** ya da kristaloid yapılar barındıran bu lezyonun en olası tanısı nedir?
Doğru Şık (C): Polimorföz düşük dereceli adenokarsinom
Açıklama: Polimorföz düşük dereceli adenokarsinom (terminal duktus adenokarsinomu), minör tükürük bezlerinin (özellikle damak) yaygın bir tümörüdür. Perineöral invazyon yapması ve histolojisinde psammom cisimcikleri veya kristaloid yapıların izlenmesi ile Adenoid kistik karsinomun 'İsviçre peyniri' kribriform paterninden ayrılır.

**Soru 2 (ID: 69596470-1e18-4cf7-b556-dcab9dec435a)**
Soru Kökü: Elli beş yaşında kadın hasta, palatal bölgede yavaş büyüyen şişlik ve beraberinde lokalize şiddetli, yanıcı nevraljik ağrı şikayetiyle başvuruyor. Yapılan eksizyonel biyopside; tümör hücrelerinin kribriform paternde, silindir benzeri boşluklar bırakarak 'İsviçre peyniri' görünümü oluşturduğu ve çevre sinir kılıfları boyunca (perinöral) ilerlediği gözleniyor. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Adenoid kistik karsinom
Açıklama: Adenoid kistik karsinom, minör tükürük bezlerinde (özellikle damak) sık yerleşen, histolojik olarak kribriform (İsviçre peyniri benzeri) patern çizen ve yoğun perineural invazyon eğilimi gösteren malign bir tümördür. Erken dönemde bile görülebilen bu şiddetli perinöral yayılım, hastada spesifik klinik bulgu olan inatçı nevraljik ağrılara sebep olur. Polimorföz adenokarsinom da perineural invazyon yapabilir ancak karakteristik 'İsviçre peyniri' kribriform paterni adenoid kistik karsinoma aittir.

---

### ÇİFT 187 (Benzerlik: 0.73)

**Soru 1 (ID: bc620348-ecb5-46e7-a0f5-6d6b3ea2e69f)**
Soru Kökü: Ağız içi muayenesinde bilateral (çift taraflı) bukkal mukozasında belirgin lezyonlar saptanan iki farklı hastadan birinin Beyaz Sünger Nevüs (Cannon Hastalığı), diğerinin ise Fordyce Granülleri olduğu histopatolojik olarak kanıtlanmıştır. Bu iki patolojiyi sadece klinik makroskopik görünümlerine bakarak birbirinden ayıran majör fark aşağıdakilerden hangisidir?
Doğru Şık (A): Beyaz sünger nevüsün kalın, bütünleşik süngerimsi plaklar oluşturması; Fordyce granüllerinin ise izole ve milimetrik sarımsı noktacıklar formunda olması
Açıklama: Her iki lezyon da tipik olarak yanak (bukkal) mukozasına yerleşir. Ancak Keratin mutasyonu olan Beyaz Sünger Nevüs'te hücresel ödem (hidropik dejenerasyon) mukozayı yaygın, kalın ve süngerimsi dev bir beyaz plağa dönüştürür. Fordyce granülleri ise epitel altındaki ektopik sebase bezler oldukları için, bütünleşik bir plak yapmaz; milimetrik, izole ve sarımsı bağımsız noktacıklar halinde prezante olurlar.

**Soru 2 (ID: aa481cfb-06c7-4066-86f6-c0642d45c273)**
Soru Kökü: Beyaz Sünger Nevüs (Cannon Hastalığı) ile İdiyopatik Lökoplaki lezyonları oral kavitede kalın beyaz plaklar oluşturmaları nedeniyle makroskopik olarak benzerlik gösterebilir. Ancak bu iki patolojiyi kesin olarak birbirinden ayıran majör klinik ve demografik özellik aşağıdakilerden hangisidir?
Doğru Şık (D): Beyaz sünger nevüsün puberte öncesi (erken evre) belirmesi ve karsinom riski taşımaması, lökoplakinin ise ileri yaşlarda görülüp displazi barındırması
Açıklama: Kalıtsal genetik bir defekt (KRT4/13 mutasyonu) olan Beyaz Sünger Nevüs lezyonları hayatın ilk yıllarında (puberte öncesi) belirir ve displazi içermedikleri için malignite riski sıfırdır. İdiyopatik lökoplaki ise kümülatif ekzojen karsinojen yıkımına bağlı olarak tipik şekilde >60 yaş popülasyonda ortaya çıkar ve Skuamöz hücreli karsinoma dönüşüm riski (%5-25) barındıran neoplastik bir öncüldür.

---

### ÇİFT 188 (Benzerlik: 0.73)

**Soru 1 (ID: 21cf3df0-c3fe-4b22-be59-4715bdc1a285)**
Soru Kökü: Ağız mukozasında izlenen, etiyolojisi tam olarak bilinmeyen beyaz lezyonun biyopsisinde parakeratoz ve akantozun yanı sıra spinal hücrelerde karakteristik olarak 'intrasellüler ödem' izlenmektedir. Malignite riski bulunmayan bu patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Lökoödem
Açıklama: Lökoödem, histolojik olarak parakeratoz, akantoz ve stratum spinozumda yoğun intrasellüler ödem birikimiyle karakterize idiopatik ve malignite riski taşımayan beyaz bir lezyondur. Liken planusta ise bazal tabakada destrüksiyon ve subepitelyal bant tarzı lenfosit infiltrasyonu saptanır, ödem birincil bulgu değildir. Bu durum, dokunun gerilmesiyle beyazlığın geçici olarak kaybolmasıyla klinik olarak doğrulanabilir.

**Soru 2 (ID: e3c33502-340f-4d11-8058-c280a7e226fc)**
Soru Kökü: Rutin oral kanser taraması amacıyla biopsi alınan diffüz beyaz bir bukkal mukozal lezyonun mikroskobik değerlendirmesinde, parakeratoz ve akantozun yanı sıra epitelin stratum spinozum tabakasında berrak hidropik dejenerasyon ve hücrelerde 'perinükleer eozinofilik kondensasyon' saptanmıştır. Bu spesifik histolojik bulgu aşağıdaki hastalıklardan hangisine aittir?
Doğru Şık (C): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüsün patognomonik histopatolojik belirteçlerinden biri, keratinositlerin çekirdek etrafındaki keratin filamanlarının anormal yoğunlaşmasına bağlı olarak izlenen 'perinükleer eozinofilik kondensasyon'dur. Lökoödemde de intrasellüler ödem izlense de bu özgün keratin kondensasyon paterni görülmez. Keratin genlerindeki mutasyon hücre iskeletinin bu karakteristik çökmesine neden olur.

---

### ÇİFT 189 (Benzerlik: 0.73)

**Soru 1 (ID: fcc2b75b-dbb1-4833-b482-26c77fc36096)**
Soru Kökü: Altmış beş yaşında, uzun yıllardır tütün çiğneme alışkanlığı olan erkek hastanın alveolar mukozasında geniş, düzensiz parmaksı çıkıntılar gösteren ekzofitik bir lezyon saptanıyor. Biyopside metastaz potansiyeli çok düşük, iyi diferansiye bir epitelyal tümör izleniyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Verrüköz karsinom
Açıklama: Verrüköz karsinom; sıklıkla tütün emen/çiğneyen yaşlı erkeklerde, en sık alveolar mukoza ve yanakta yerleşen, parmaksı çıkıntılar gösteren ekzofitik ve çok iyi diferansiye bir SCC varyantıdır. Metastaz potansiyeli klasik SCC'ye göre oldukça düşüktür ve tedavisi öncelikle cerrahidir. Klasik SCC ülseratif ve daha invaziv bir paternde büyür.

**Soru 2 (ID: e586d790-9878-4ea0-82e8-5dde8ad0ff8e)**
Soru Kökü: Altmış beş yaşındaki kadın hastanın muayenesinde gingiva ve yanak mukozasında yaygın, nükseden beyaz plaklar izlenmektedir. Anamnezinde sigara kullanmadığı ve ağız hijyeninin oldukça iyi olduğu saptanan hastanın biyopsisinde verrüköz mimari izlenmiştir. Bu klinik tablo için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Proliferatif verrüköz lökoplaki
Açıklama: Proliferatif verrüköz lökoplaki (PVL), klasik lökoplaki profilinin aksine çoğunlukla 60 yaş üstü, sigara içmeyen ve iyi oral hijyene sahip kadınlarda görülen spesifik bir klinik tablodur. Lezyonların çok odaklı olması, sık nüks etmesi ve kanserleşme potansiyelinin %100'e yaklaşabilmesi nedeniyle agresif cerrahi takip gerektirir.

---

### ÇİFT 190 (Benzerlik: 0.73)

**Soru 1 (ID: 05245b6d-6a56-476a-96d4-a560c4c8eb7f)**
Soru Kökü: Otuz yaşında erkek hasta, boyunda giderek büyüyen ve yutkunma güçlüğü yaratan iri bir lenf nodu şişliği ile kliniğe başvuruyor. Yapılan intraoral muayenede orofarenkste çok küçük, zor fark edilen bir primer lezyon tespit ediliyor. Hastanın sigara veya alkol kullanım öyküsü bulunmuyor. Alınan biyopsinin histopatolojik incelemesinde en olası bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Non-keratinize skuamoz hücreli karsinom
Açıklama: Senaryodaki genç yaş, sigara/alkol eksikliği, orofarenks yerleşimi ve 'iri nodal hastalık ile küçük primer lezyon' tablosu tipik HPV-ilişkili SCC bulgularıdır. HPV-ilişkili SCC'ler histopatolojik olarak non-keratinize özellik gösterirken, klasik HPV-ilişkisiz oral kavite SCC'leri keratinizedir (keratin incileri içerir). Bu tümörler büyük boyun kitlelerine rağmen paradoksal olarak daha iyi prognoza sahiptir.

**Soru 2 (ID: 7fd9e932-674e-462b-a2c3-80de256cc12e)**
Soru Kökü: Kırk yaşında erkek hasta, ağız açma kısıtlılığı (ilerleyici trismus) şikayetiyle kliniğe başvurmuştur. Öyküsünden uzun yıllardır tütün ve betel cevizi çiğneme alışkanlığı olduğu öğrenilmiştir. Muayenede oral mukoza esnekliğini yitirmiş, atrofik değil nedbe benzeri katı ve sert bir dokuya dönüşmüştür. Bu hastadaki premalign tablo aşağıdakilerden hangisidir?
Doğru Şık (E): Oral submüköz fibrozis
Açıklama: Tütün ve betel çiğneme alışkanlığına bağlı gelişen, doku sertleşmesi ve ilerleyici trismus (ağız açma kısıtlılığı) ile karakterize prekanseröz tablo oral submüköz fibrozistir (OSF). Plummer-Vinson sendromu sistemik demir eksikliğine bağlı difüz mukoza atrofisi yaparken, OSF kronik irritasyona bağlı nedbe/fibrozis geliştirir. Her ikisi de SCC riskini artırsa da klinik prezantasyonları zıttır.

---

### ÇİFT 191 (Benzerlik: 0.73)

**Soru 1 (ID: 61b6d2a7-37e2-45f3-96cb-fbfc94684990)**
Soru Kökü: Hareketli protez kullanan 65 yaşında bir hastanın palatal mukozasında protez kaidesiyle sınırlı yaygın kızarıklık saptanmıştır. Lezyon kandidiyazisin eritem grubunda sınıflandırılmıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Protez stomatiti
Açıklama: Protez stomatiti, kandidanın protez altında anaerobik ve nemli ortamda üreyerek mukozada eritem grubunda bir inflamasyon oluşturmasıdır. Epulis fissuratum ise protez kenarlarının kronik travmasıyla gelişen fibröz bir hiperplazidir ve eritematöz enfeksiyon paterni göstermez. Teşhis, protezin altındaki dokunun antifungal tedavi ve hijyenle rahatlaması prensibine dayanır.

**Soru 2 (ID: 177d4758-8e8b-41d0-b28c-cfa9d5668c0f)**
Soru Kökü: 65 yaşında kadın hasta, yıllardır kullandığı eski ve uyumsuz üst total protezinin kenarlarının dudak ve yanak mukozasına vurduğunu, bu bölgelerde hareketli et parçaları oluştuğunu belirterek kliniğe başvuruyor. Muayenede protez flanşına uyan alanda, oluklu ve yapraksı bir bağ dokusu büyümesi izleniyor. Bu klinik tabloyu tanımlayan reaktif mukozal lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Epulis fissuratum
Açıklama: Hareketli bölümlü veya total diş protezi kullanan hastalarda, uyumsuz protez flanşlarının mukozayı kronik olarak zedelemesi sonucu sınır boylarında gelişen yapraksı, oluklu fibröz doku büyümelerine epulis fissuratum veya protez kenarı fibröz hiperplazisi adı verilir. İrritasyon fibromu daha çok yanak mukozasının ısırılmasıyla beliren nodüler yapılarken, damağın papiller hiperplazisi protez kaidesinin oturduğu sert damakta çoklu papiller projeksiyonlar şeklinde izlenir. Epulis fissuratum neoplastik olmayıp tedavisi lezyonun cerrahi alınması ve protezin uyumlanmasıdır.

---

### ÇİFT 192 (Benzerlik: 0.72)

**Soru 1 (ID: b9d2e604-5fe5-4252-a9a9-f58907f72aa1)**
Soru Kökü: Akut pulpal inflamasyon tablosunun resolüsyona (tam iyileşmeye) ulaşamadığı durumlarda pulpanın kronik pulpitis evresine geçtiğini gösteren ve geri dönüşümsüz süreci başlatan karakteristik histolojik doku değişimi aşağıdakilerden hangisidir?
Doğru Şık (D): Lezyon sahasındaki nötrofillerin yerini mononükleer hücrelerin alması ve skar dokusu gelişimi
Açıklama: Uzun süreli travma veya şiddetli akut inflamasyonun kontrol altına alınamadığı durumlarda, ortamdaki başlangıç hücreleri olan nötrofillerin yerini yavaş yavaş lenfosit, makrofaj ve plazma hücrelerinden oluşan mononükleer hücreler alır. Bu hücresel değişime ek olarak, fonksiyonunu yitirmiş odontoblastların ve bağ dokusunun yerini yoğun kollajen içeren onarım (skar) dokusunun alması, kronik pulpitin temel histolojik markerıdır. Bu noktadan sonra doku iyileşmez, inflamasyon devam ederse pulpa nekrozu kaçınılmaz hale gelir.

**Soru 2 (ID: eef67af3-7d0c-4fbb-9994-f63534f7c4cb)**
Soru Kökü: Akut pulpitin klinik ve histopatolojik özellikleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Lezyon bölgesindeki stromada yoğun mononükleer inflamatuar hücre infiltrasyonu izlenir.
Açıklama: Akut pulpitin histopatolojik tablosunda lezyon bölgesine hakim olan enflamatuar hücre grubu mononükleer hücreler değil, yoğun nötrofillerdir. Lezyon alanında lenfosit, makrofaj ve plazma hücresi gibi mononükleer hücre infiltrasyonu, akut inflamasyonun düzelmediği ve sürecin kronik pulpitis aşamasına geçtiği durumlarda izlenir. Pulpal abse gelişimi de, akut vakalarda nötrofillerin dokuyu eritmesine bağlı gelişen likefaksiyon nekrozunun karakteristik bir sonucudur.

---

### ÇİFT 193 (Benzerlik: 0.72)

**Soru 1 (ID: 6941e1db-7450-42d3-a67c-23d69c4247d1)**
Soru Kökü: Kronik hiperplastik pulpit (Pulpa polibi) ile ilgili aşağıda verilen klinik ve patolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Dişin üzerini örtecek şekilde basınçla şiddetli ağrı semptomları verir.
Açıklama: Pulpa polibi, pulpa odasının geniş çapta açığa çıktığı durumlarda dokunun dışarı doğru prolifere olmasıdır ve ağız boşluğuna sürekli drenaj sağladığı için kapalı alan inflamasyonlarında görülen şiddetli ağrı bu tabloda izlenmez, lezyon genelde asemptomatiktir. En güçlü çeldirici olan 'irreversibl olma' durumu doğrudur; diş semptomsuz olsa bile pulpa canlılığı fizyolojik sınırların çok dışındadır ve ekstirpasyon/çekim gerektirir. Ağrısız karakteri tanı koydurucu temel detaylardan biridir.

**Soru 2 (ID: feedfd56-19e3-4028-a069-930cf70a2561)**
Soru Kökü: Kronik pulpit tablosunun patogenezi ve seyri ile ilgili aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Lezyon bölgesinde her zaman nötrofillerin mononükleer hücrelerden sayıca fazla olması beklenir.
Açıklama: Kronik pulpit tablosuna geçişin hücresel belirteci, akut fazın yöneticisi olan nötrofillerin sahayı terk edip yerlerini makrofaj ve lenfosit gibi mononükleer inflamatuar hücrelere bırakmasıdır; nötrofil dominansı kronik değil akut pürülan evrenin özelliğidir. En güçlü çeldirici olan skar dokusu gelişimi doğrudur; odontoblastlar ölür ve onarım çabası kollajenoz fibrozisle sonuçlanır. Hastalığın geri dönülmez (irreverzibil) olması kök kanal tedavisini mutlak kılar.

---

### ÇİFT 194 (Benzerlik: 0.72)

**Soru 1 (ID: 42f07d4d-d754-4db6-b2ee-a4fd01c91b39)**
Soru Kökü: Altı yaşında kız çocuğu, ağız mukozasında bukkal bölgede ortası beyaz küçük kırmızı maküller saptanması üzerine diş hekimine danışılıyor. Hastanın genel muayenesinde viral bir enfeksiyon (kızamık) saptanmıştır. Bu hastanın kalıcı dişlerinin gelişiminde aşağıdaki anomalilerden hangisinin görülme olasılığı en yüksektir?
Doğru Şık (C): Enamel hipoplazisi
Açıklama: Kızamık enfeksiyonu sırasında ateşli evrenin ameloblastlar üzerindeki toksik ve metabolik etkileri, o dönemde gelişmekte olan dişlerde enamel hipoplazisine neden olur. Taurodontizm pulpa odasının anatomik olarak vertikal genişlemesi olup viral enfeksiyonlarla değil genetik kalıtımla (Neandertal morfolojisi) ilişkilidir. Erken çocukluk çağı ateşli hastalıkları daima mine defektleri açısından risk oluşturur.

**Soru 2 (ID: 556e34c4-abae-4a28-a310-cb6d7f0650cc)**
Soru Kökü: Pediatrik bir hastanın muayenesinde bukkal mukozada patognomonik olarak ortası beyaz, küçük kırmızı maküller (Koplik lekeleri) tespit ediliyor. Bu viral enfeksiyon tablosunun odontojenik gelişim üzerindeki en kalıcı sistemik komplikasyonu aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Kızamık enfeksiyonuna özgü Koplik lekeleri bukkal mukozada teşhis edildiğinde sistemik viral yayılımın ameloblastlar üzerinde yıkıcı etki gösterdiği ve bu nedenle mine hipoplazisine yol açtığı bilinmelidir. Kama biçimli insisivler ve dut biçimli molar dişler sifiliz enfeksiyonuna (Treponema pallidum) bağlı konjenital hasar bulgularıdır ve kızamıkla ilişkili değildir. Amelogenezis evresinde yaşanan bu şiddetli febril hastalık, dişlerde kalıcı yapısal matriks defektleri bırakır.

---

### ÇİFT 195 (Benzerlik: 0.72)

**Soru 1 (ID: 01614c63-1ae3-4db3-9130-63a7e16a3c6a)**
Soru Kökü: 45 yaşında kadın hasta, sol alt kanin dişinde şiddetli ağrı ve kök ucuna denk gelen labiyal mukozada fluktuasyon veren şişlik şikayetiyle başvuruyor. Histopatolojik incelemede periapikal alanda yoğun nötrofil birikimi ve belirgin doku erimesi saptanıyor. Bu hastanın periapikal dokusunda epitel proliferasyonuna bağlı bir kist gelişimi **gözlenmemesinin** temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Likefaksiyon nekrozunun kist gelişimine olanak tanımadan ortamı enzimatik olarak eritmesi
Açıklama: Periapikal apselerde, pulpadan apekse ulaşan aşırı bakteri ürünleri ortama yoğun nötrofil çeker ve bunun sonucunda dokuyu hızla eriten bir likefaksiyon nekrozu meydana gelir. Bu asidik ve enzimatik doku erimesi süreci ortamı tamamen parçaladığı için, epitel hücrelerinin organize olup sınırları belli bir kist duvarı (periapikal kist) oluşturmasına fırsat kalmaz. Komplikasyon olarak enfeksiyon mukozaya veya deriye fistülize olabilir ancak kist oluşmamasının doğrudan patofizyolojik nedeni bu enzimatik nekroz yıkımıdır.

**Soru 2 (ID: 06d05933-1ee8-43bb-9dd3-54a43c3a959b)**
Soru Kökü: Kırk beş yaşında kadın hasta, üst sağ kanin dişi hizasında, labial sulkusta şişlik şikayetiyle başvuruyor. Yapılan muayenede dişlerin vital olduğu, şişliğin yumuşak doku kaynaklı ve palpasyonda fluktuasyon verdiği saptanıyor. Radyolojik incelemede kemik içi bir defekt izlenmemiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Nazoalveoler kist
Açıklama: Nazoalveoler (nazolabial) kist, nazolakrimal kanal kökenli olup intraosseöz yıkım yapmayan, doğrudan yumuşak dokuda (labial sulkus, kanin/mukobukkal katlantı hizası) fluktuasyon veren şişlikle karakterize tek non-odontojenik kisttir. Dişlerin vital olması ve kemik lezyonu bulunmaması radiküler kisti ekerte ederken, orta hat/insisiv yerleşimli kemik lezyonu olmaması nazopalatin kisti dışlar.

---

### ÇİFT 196 (Benzerlik: 0.72)

**Soru 1 (ID: 5d937966-e035-4df3-b4be-a0e47ebe4b40)**
Soru Kökü: Embriyolojik doku büyüme (overgrowth) regülasyon genlerindeki mutasyonlar sonucu, abdominal visceromegali ile birlikte dil kas dokusunda konjenital hiperplazi gelişerek makroglossiye neden olan sistemik genetik sendrom aşağıdakilerden hangisidir?
Doğru Şık (D): Beckwith-Wiedemann sendromu
Açıklama: Beckwith-Wiedemann sendromu, genetik regülasyon defekti sonucu abdominal visceromegali (organ büyümesi) ve dilde doğrudan kas dokusu hiperplazisi ile seyreden bir doku büyüme (overgrowth) sendromudur. Down sendromunda gözlenen makroglossi maksiller yetersizliğe bağlı 'göreceli' (psödomakroglossi) bir tablodur ve dokuda gerçek kas hiperplazisi barındırmaz. Pierre Robin sekansı ise makroglossi değil, mikrognatiye bağlı dilin geriye kaçması (glossoptoz) tablosudur.

**Soru 2 (ID: 7e7f8a9b-29a5-455e-90a7-729278a35b6f)**
Soru Kökü: Makroglossia (dilin hacimsel büyümesi) etiyolojisinde yer alan sendromlar ve mekanizmalar eşleştirildiğinde, aşağıdaki ifadelerden hangisi yanlıştır?
Doğru Şık (E): Pierre Robin sekansında primer patoloji gerçek makroglossi olup, glossoptoz nedeniyle hava yolu tıkanıklığına neden olur.
Açıklama: Pierre Robin sekansında temel sorun makroglossi değildir; tam aksine mandibular mikrognati (küçük alt çene) ve buna bağlı olarak dilin geriye doğru yer değiştirmesi (glossoptoz) sonucu hava yolu tıkanıklığı gelişir. Makroglossi yapan sendromlar gerçek doku hiperplazisi veya psödohipertrofiye neden olur.

---

### ÇİFT 197 (Benzerlik: 0.72)

**Soru 1 (ID: c820eae2-f8fc-4504-9818-4c8fc2958c65)**
Soru Kökü: İki komşu dişin kron ve dentin dokuları birbirlerinden tamamen ayrı olmasına karşın, apikal bölgedeki sement yapımının lokal bir travma, kalabalıklaşma veya aşırı hipersementoz gibi etkenlerle stimüle olması sonucu kök yüzeyinden birbirlerine kaynaştıkları gelişimsel anomalinin adı nedir?
Doğru Şık (A): Konkresens
Açıklama: Konkresens, gelişimlerini tamamlamış iki bağımsız komşu dişin yalnızca sement dokusu üzerinden birbirlerine kaynaşmasıdır ve genellikle üst molar bölgesinde (özellikle 2. ve 3. molarlar arası) görülür. Füzyon durumunda birleşme minede veya dentinde embriyolojik evrede gerçekleşirken, konkresens erüpsiyon aşamasında veya sonrasında reaktif aşırı sement üretimiyle ortaya çıkar. Çekim kararı alındığında alveolar kemik kırığı riski nedeniyle diagnostik tespiti kritik öneme sahiptir.

**Soru 2 (ID: 3ff0bd68-fb2e-4758-8f86-16fa1762a364)**
Soru Kökü: Embriyolojik dönemde iki ayrı komşu diş tomurcuğunun mine veya dentin seviyesinde birleşerek tek bir büyük diş formu oluşturması durumudur. Hastanın klinik ve radyografik muayenesinde bu genişlemiş diş formuna ek olarak, diş kavisinde toplam diş sayısının eksik olduğu (kaviste bir dişin noksan olduğu) tespit edilmiştir. Tarif edilen bu gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (C): Füzyon
Açıklama: Füzyon, komşu iki diş embriyosunun dentin seviyesinde birleşmesidir ve bu süreç iki farklı kökün entegrasyonuyla oluştuğu için arkta diş sayısında bir eksilme izlenir. Geminasyonda tek bir germ ikiye bölünmeye çalıştığı için kuron geniş izlense de toplam diş sayısı normaldir. Konkresens ise dişlerin gelişim sonrasında sadece sement seviyesinde birleşmesidir.

---

### ÇİFT 198 (Benzerlik: 0.72)

**Soru 1 (ID: cda95bed-c1cc-4bb3-8927-64f43c8b4892)**
Soru Kökü: Orofasiyal bölgede izlenen veziküler erüpsiyonlarda, Herpes Simplex Virus (HSV) ile Varisella Zoster Virus (VZV / Zona) kaynaklı lezyonların erken klinik ayrımında Zona tanısını destekleyen en spesifik anamnez bulgusu aşağıdakilerden hangisidir?
Doğru Şık (C): Vezikül döküntülerinden önce belirgin, spesifik tek taraflı ağrı olması
Açıklama: Herpes zoster (Zona) lezyonlarının patogenezinde virüsün duyusal sinir lifleri üzerinden deriye taşınması sırasında, veziküller henüz ortaya çıkmadan önce sinir trase hattında şiddetli bir nöropatik ağrı hissedilmesi en temel ayırıcı bulgudur. HSV reaktivasyonlarında (uçuk gibi) prodromal dönem ağrıdan ziyade bölgesel kaşıntı, yanma ve karıncalanma hissiyle karakterizedir. Ayrıca Zona lezyonları anatomik olarak orta hattı geçmeyerek sıkı bir şekilde tek taraflı dermatomu takip ederler.

**Soru 2 (ID: 8c2985b4-4f7c-4d63-9df0-5c9e76cc6dce)**
Soru Kökü: Hasta şiddetli orofasiyal ağrı şikayetiyle acil polikliniğe başvuruyor. Ağrının N. trigeminus trasesinde gerçekleştiği tespit ediliyor. Olası tanılar arasında Trigeminal Nevralji ve Varicella Zoster Virüsü (VZV) prodromu düşünülüyor. Ancak hekim birkaç gün süren takipten sonra tanıyı Trigeminal Nevralji yönünde kesinleştiriyor. Bu ayrıma ulaştıran majör patofizyolojik ekarte edici kriter aşağıdakilerden hangisidir?
Doğru Şık (D): Trigeminal nevraljide ağrının vezikülsüz ve tetik nokta kaynaklı şimşekvari olması, VZV'de ise nevraljiyi takiben mutlaka tek taraflı veziküllerin çıkması
Açıklama: Trigeminal Nevralji dokuda enflamatuar bir lizis (vezikül) olmaksızın, trigeminal sinir trasesinde tetik noktaların uyarılmasıyla anlık, şimşekvari ağrılarla seyreder. VZV (Zona) prodromunda ise şiddetli lokal nevraljiyi takiben intraepitelyal hücre yıkımına ikincil tek taraflı veziküler döküntüler mutlak suretle klinik yüzeye çıkar. Takiplerde veziküllerin gelişmemesi, viral inflamasyonu ekarte ederek saf nörolojik bir tetik nokta ağrısı olan Trigeminal nevraljiye kilitler.

---

### ÇİFT 199 (Benzerlik: 0.72)

**Soru 1 (ID: 59ece315-941d-44dc-9b24-54fc7fe934d5)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, sert damakta hafif ağrılı ve yüzeyi mavimsi görünen bir şişlik ile başvuruyor. Biyopsi mikroskopisinde skuamöz hücreler ve mukus sekrete eden hücrelerin karışımından oluşan bir yapı saptanmış olup kistik hücreler musikarmin boyası ile eflatun-pembe pozitif reaksiyon vermiştir. Bu tümör aşağıdakilerden hangisidir?
Doğru Şık (E): Mukoepidermoid karsinom
Açıklama: Mukoepidermoid karsinom, skuamöz, ara tip ve mukus (müsin) üreten kistik adenokarsinomatöz hücrelerden oluşur. Mukus üreten hücrelerin varlığı, musin spesifik bir boya olan musikarmin ile kolayca doğrulanır. Damakta mavimsi şişlik yapması sık görülen bir klinik paternidir.

**Soru 2 (ID: 6aa49726-ef0b-4eb4-8c1a-ab8edd6593d6)**
Soru Kökü: Altmış iki yaşındaki kadın hastanın sert damağında mukoza altında gelişen ağrısız kitle eksize ediliyor. İncelemede hücrelerin perineural invazyon gösterdiği, ancak miksoid stromada 'İsviçre peyniri' yapısından çok tek sıralı hücre kordonları ve terminal duktus yapısı şeklinde yayıldığı saptanıyor. Lokal agresif olan bu karsinom aşağıdakilerden hangisidir?
Doğru Şık (A): Polimorföz düşük dereceli adenokarsinom
Açıklama: Polimorföz düşük dereceli adenokarsinom (PLGA), terminal duktus kökenli olup özellikle damak minör tükürük bezlerini tutar. Perinöral invazyonu adenoid kistik karsinom ile karışmasına neden olsa da, tek sıralı hücre dizilimleri (indian file) ve daha düşük malignite derecesi ile ondan ayrılır.

---

### ÇİFT 200 (Benzerlik: 0.72)

**Soru 1 (ID: a5cdc9fc-f23c-4940-837e-ace9b3bfe6e3)**
Soru Kökü: Periapikal enfeksiyonlarda, periapikal granülom zemininden radiküler kist oluşumunu başlatan ve kistin lümenini döşeyen asıl histolojik/hücresel komponent aşağıdakilerden hangisidir?
Doğru Şık (C): Diş gelişiminden arta kalan Malassez epitel artıkları
Açıklama: Periapikal (radiküler) kistlerin gelişiminde, pulpal enfeksiyon apekse ulaştığında oluşan inflamatuar hücre sitokinleri embriyolojik kök kılıfı kalıntılarını stimüle eder. Bu uyarı ile sessiz halden aktifleşerek çoğalmaya başlayan Malassez epitel artıkları, mevcut granülom dokusu içinde çoğalır ve merkezi sıvı dolu bir epiteliyal kistik kavite yaratırlar. Nötrofiller ve mononükleer hücreler reaksiyonu ateşlese de, gerçek bir kistin yapıtaşı olan non-keratinize skuamöz epitel duvarını sadece Malassez kalıntıları kurabilir.

**Soru 2 (ID: 306b8fde-16a7-4b2b-8de8-20fe4ed722fb)**
Soru Kökü: Özellikle üst çenede (maksilla posterior) yerleşmiş büyük bir radiküler kistin lümenini döşeyen dokunun histopatolojik incelemesinde, enflamasyon etkisiyle prolifere olan karakteristik non-keratinize yassı epitel dokusunun dışında, anatomik komşuluk metaplazisi nedeniyle aşağıdaki epitel tiplerinden hangisi de gözlenebilir?
Doğru Şık (A): Silyalı solunum (respiratuvar) epiteli
Açıklama: Radiküler kistler (periapikal kist) prensip olarak non-keratinize çok katlı yassı epitel ile döşelidir. Ancak tüm kistlerin epitel karakteri çevre dokularla etkileşime açıktır. Özellikle üst çenede (maksillada) maksiller sinüse ya da nazal tabana komşu gelişen dev radiküler kistlerde epitel hücreleri metaplaziye uğrayarak komşu bölgenin silyalı solunum epitelini (respiratuvar epitel) taklit edebilir. Kistlerde keratinizasyon radiküler için atipiktir, nöral bulgular (Verokay, Antoni) ise schwannomlarda görülür.

---

### ÇİFT 201 (Benzerlik: 0.72)

**Soru 1 (ID: f548c30d-fad1-484d-aa89-ca4307aad28b)**
Soru Kökü: Çocukluk çağında başlayan, mandibulada tipik olarak simetrik posterior genişleme yaparak yüze 'aydede' veya 'melek' görünümü veren (cherubism), otosomal dominant kalıtılan gelişimsel kemik hastalığına yol açan genetik mutasyon aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): SH3BP2 geni
Açıklama: Cherubism, çenelerde ilerleyici kemik rezorpsiyonu ve yerine multiloküler fibröz doku ve dev hücrelerin geçmesiyle karakterize edilen otozomal dominant bir hastalıktır ve SH3BP2 genindeki mutasyonlarla ilişkilidir. PTCH geni Gorlin sendromunda, BRAF gen mutasyonu konvansiyonel ameloblastomda, PLAG1 overekspresyonu pleomorfik adenomda rol oynar. Bu spesifik sendrom, bilateral doğası ile osteofibröz lezyonlardan ayrılır.

**Soru 2 (ID: fc67a40c-3d4b-465d-ae98-7dac1a50a381)**
Soru Kökü: Erken çocukluk döneminde başlayan, mandibulada belirgin simetrik posterior şişlikler yaratarak tipik "aydede" veya "melek" yüz görünümüne yol açan Kerubizm (Cherubism) hastalığı ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Tipik olarak ileri yaş erişkin kadınlarda ve ilk olarak anterior maksilla bölgesinde başlangıç gösterir.
Açıklama: Kerubizm bir erişkin/yaşlılık hastalığı değil, aksine çocukluk döneminde kendini gösteren ve ergenlikle regrese olan bir gelişimsel sendromdur; ilk ve en şiddetli tutulum bilateral posterior mandibuladadır. En belirgin distraktör, makrofaj/dev hücre reaksiyonunu taklit etmesine rağmen neoplastik değil, herediter SH3BP2 disregülasyonuna bağlı reaktif olmasıdır. Aydede görünümü çene kemiklerinin kistik genişlemesiyle ortaya çıkar.

---

### ÇİFT 202 (Benzerlik: 0.72)

**Soru 1 (ID: 835eec77-aa64-4be9-b576-da386b9e59b5)**
Soru Kökü: On bir yaşındaki erkek hasta, yanak içi bölgesinde her iki tarafta da bulunan, ağrısız, kalın ve süngerimsi beyaz plaklar şikayetiyle başvuruyor. Anamnezden bu durumun puberte öncesinde belirdiği ve babasında da benzer lezyonlar olduğu öğreniliyor. Bu hastadaki lezyonun patogenezinde aşağıdaki genlerden hangisinde mutasyon saptanması en olasıdır?
Doğru Şık (B): Keratin 4 ve/veya Keratin 13
Açıklama: Beyaz sünger nevüs (Cannon Hastalığı), keratin 4 ve/veya keratin 13 genlerindeki mutasyonlar sonucu gelişen, otozomal dominant geçişli herediter bir durumdur. ATP2A2 geni mutasyonu foliküler keratozise (Darier hastalığı) neden olurken, hücresel düzeyde desmozomal defektler oluşturur. Beyaz sünger nevüste puberte öncesi başlangıç ve bilateral tutulum tanı koydurucu temel klinik parametrelerdir.

**Soru 2 (ID: 64ed2729-a1c6-4ca9-a8a2-bd913be9e718)**
Soru Kökü: Özellikle 6-20 yaş arası dönemde ortaya çıkan, yanak mukozasında, dudak ve diş etlerinde kaldırım taşı görünümünde beyaz kabarıklıklarla karakterize Beyaz Sünger Nevüs tablosunda, epitel hücrelerindeki desmozomal disfonksiyona neden olan mutasyon aşağıdakilerden hangisidir?
Doğru Şık (C): ATP2A2
Açıklama: Beyaz sünger nevüs, ATP2A2 geni mutasyonu sonucu epitel hücrelerindeki desmozomal defekt ve adezyon değişiklikleri ile karakterize otozomal dominant bir hastalıktır. PTCH mutasyonu Gorlin sendromunda görülürken, ATP2A2 doğrudan keratinosit adezyonunu bozarak bu spesifik lökokeratotik doku reaksiyonunu oluşturur. Genç yaşta ortaya çıkması ve özellikle seboreik bölgeleri tutması ayırıcı tanıda önemlidir.

---

### ÇİFT 203 (Benzerlik: 0.72)

**Soru 1 (ID: a5904eb7-cb7d-4a9f-b33f-683cd1529b6b)**
Soru Kökü: Altmış yaşındaki erkek hastada mandibula arka bölgede ağrılı, agresif kemik yıkımı yapan, merkez yerleşimli malign bir karsinom saptanmıştır. Tümörün dişetinden yüzeye çıkmadığı, antral mukoza ile birleşmediği ve vücutta başka bir odaktan metastaz yapmadığı kesin olarak belirlenmiştir. Bu de novo çene malignitesi aşağıdakilerden hangisidir?
Doğru Şık (C): Primer intraosseöz karsinom
Açıklama: Primer intraosseöz karsinom, çene kemiği içindeki odontojenik epitel artıklarından doğrudan de novo gelişen yassı hücreli malignitedir. Tanı konulabilmesi için tümörün sinüs/antral veya ağız yüzey mukozasından orijin almadığı kanıtlanmalı ve metastaz olmadığı gösterilmelidir.

**Soru 2 (ID: d951c8e4-8d75-4007-a1bd-b626d1cbbc7a)**
Soru Kökü: Primer intraosseöz karsinom tanısı koyarken, karsinomun direkt olarak çene kemiğinin medüller boşluğundan çıktığını ispatlamak adına mutlaka ekarte edilmesi gereken klinik ve histolojik özellikler bulunmaktadır. Aşağıdakilerden hangisi bu tümörün ayırıcı tanısında kural olarak **dışlanması** (ekarte edilmesi) gereken durumlardan biri değildir?
Doğru Şık (C): Çenelerde daha önce tanımlanmamış odontojenik epitel proliferasyonu
Açıklama: Primer intraosseöz karsinom tanısı konabilmesi için, karsinomun çene kemiği dışındaki başka bir bölgeden buraya gelmediğinin (metastaz dışlanması) ve çevre yüzey mukozalarından (sinüs epiteli veya oral kavite epiteli) invazyon yapmadığının gösterilmesi şarttır. Tam tersine, bu tümörün kaynağı çene kemiği içindeki "tanımlanmamış odontojenik epitel kalıntılarıdır"; yani C şıkkı dışlanması değil ispatlanması gereken patogenezdir.

---

### ÇİFT 204 (Benzerlik: 0.72)

**Soru 1 (ID: 4dc90ab7-3a6a-4981-96f5-855a18e7f533)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt çenesinde dişe ait belirgin şişlik nedeniyle başvuruyor. Mandibular birinci molar dişi vital tespit ediliyor. Radyolojik muayenede ilgili vital dişin kök ucuna sıkıca kaynaşmış, düzgün bir radyolüsen hat (halo) ile kemikten sınırlandırılmış radyoopak bir kitle bulunuyor. Teşhis ve tedavi amacıyla diş kitle ile birlikte çekiliyor. Lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Sementoblastom
Açıklama: Sementoblastom, sement üreten gerçek bir benign neoplazidir ve patognomonik olarak daima kök ucuna ankiloz (kaynaşık) şekilde izlenir. Periapikal semental displazide ise kök ucunda sınırları daha belirsiz reaktif lezyonlar vardır ve halo işareti bu kadar belirgin değildir. Ayrıca dişe vitalite veren radyografik ve semptomatik tablosuyla sementoblastomda dişin kitle ile beraber cerrahi yolla ortamdan uzaklaştırılması gerekir.

**Soru 2 (ID: 622485bb-7adb-4852-99c8-8eaa5426e618)**
Soru Kökü: On altı yaşında erkek hasta, alt çenesinde herhangi bir ağrı şikayeti olmadan rutin diş kontrolü için kliniğe başvuruyor. Alınan panoramik radyografide mandibular premolar ve molar dişlerin kökleri arasına doğru uzanan, sınırları belirgin ve kökleri çentik şeklinde (scalloped) saran radyolüsen bir lezyon saptanıyor. Kist kavitesi cerrahi olarak açıldığında içinin boş olduğu ve döşeyici bir epiteli bulunmadığı görülüyor. Bu hasta için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (soliter kemik kisti), kemik içinde boş veya sıvı ile dolu, gerçek bir epitel döşemesi olmayan ve diş kökleri arasına scalloped (çentikli) uzanan bir yalancı kisttir. Anevrizmal kemik kisti kanla dolu boşluklardan oluşurken, travmatik kemik kisti kavitesi tipik olarak boştur. Tedavisi cerrahi küretaj ile kavite içinde kanama indükleyerek iyileşmeyi sağlamaktır.

---

### ÇİFT 205 (Benzerlik: 0.72)

**Soru 1 (ID: 01614c63-1ae3-4db3-9130-63a7e16a3c6a)**
Soru Kökü: 45 yaşında kadın hasta, sol alt kanin dişinde şiddetli ağrı ve kök ucuna denk gelen labiyal mukozada fluktuasyon veren şişlik şikayetiyle başvuruyor. Histopatolojik incelemede periapikal alanda yoğun nötrofil birikimi ve belirgin doku erimesi saptanıyor. Bu hastanın periapikal dokusunda epitel proliferasyonuna bağlı bir kist gelişimi **gözlenmemesinin** temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Likefaksiyon nekrozunun kist gelişimine olanak tanımadan ortamı enzimatik olarak eritmesi
Açıklama: Periapikal apselerde, pulpadan apekse ulaşan aşırı bakteri ürünleri ortama yoğun nötrofil çeker ve bunun sonucunda dokuyu hızla eriten bir likefaksiyon nekrozu meydana gelir. Bu asidik ve enzimatik doku erimesi süreci ortamı tamamen parçaladığı için, epitel hücrelerinin organize olup sınırları belli bir kist duvarı (periapikal kist) oluşturmasına fırsat kalmaz. Komplikasyon olarak enfeksiyon mukozaya veya deriye fistülize olabilir ancak kist oluşmamasının doğrudan patofizyolojik nedeni bu enzimatik nekroz yıkımıdır.

**Soru 2 (ID: 2a3bdc83-5125-4d1e-ac3d-fd6e74d15239)**
Soru Kökü: Yirmi iki yaşında erkek hasta, alt sağ 20 yaş dişi bölgesinde şişlik ve ağrı şikayetiyle başvuruyor. Radyografik muayenede yarı gömülü dişin kuronunun bukkal yüzeyinde başlayıp kök bifurkasyonuna uzanan radyolusent bir kistik lezyon saptanıyor. Dişe uygulanan vitalite testi pozitif yanıt veriyor ve hastanın geçmişte aynı bölgede perikoronitis atakları geçirdiği öğreniliyor. Bu hastadaki **en olası** kist tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Paradental kist
Açıklama: Paradental (bukkal bifurkasyon) kist, inflamatuar kaynaklı bir kist olmasına rağmen radiküler kistten farklı olarak vital (canlı) dişlerde ve sıklıkla alt 3. molar dişlerin perikoronitis atakları sonrasında servikal periodontal dokudan gelişir. En güçlü distraktör olan dentigeröz kist gelişimsel kökenli olup tam gömülü diş kuronunu mine-sement sınırından sararken, paradental kist dişin canlı kalması ve bukkal servikal/bifurkasyon yerleşimi ile ayrılır.

---

### ÇİFT 206 (Benzerlik: 0.72)

**Soru 1 (ID: 2d53a3ac-d61f-491d-8bc7-688bf15c7c3f)**
Soru Kökü: Otuz beş yaşında kadın hastada lokal agresif seyirli bir odontojenik tümör rezeke ediliyor. Kesitlerde amiloid birikimi ve bu amiloid içinde konsantrik laminasyonlarla karakterize kalsifikasyonlar tespit ediliyor. Bu tümör hücrelerinin skuamoz özellik (hücreler arası köprüleşme) göstermesine rağmen malign kabul edilmemesinin en geçerli nedeni nedir?
Doğru Şık (C): İnterselüler köprüleşmeye rağmen mitozun çok az veya hiç olmaması
Açıklama: Kalsifiye epitelyal odontojenik tümörde (Pindborg tümörü) hücreler arası belirgin köprüleşmeler ve nükleer pleomorfizm izlenebilir (skuamöz kanseri taklit edebilir), ancak mitozun çok nadir olması veya hiç olmaması nedeniyle maligniteye progresyon göstermez. Amiloid ve Liesegang kalsifikasyonları bu benign karakterli tümörün patognomoniğidir.

**Soru 2 (ID: cc1609f6-6152-4d79-88e6-320bd805e8b6)**
Soru Kökü: Odontojenik tümörler grubunda yer alan ve tümörü oluşturan epitel hücreleri arasında amiloid birikimi ile "Liesegang halkaları" adı verilen konsantrik kalsifikasyonlar oluşturan patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsifiye epitelyal odontojenik tümör
Açıklama: Kalsifiye epitelyal odontojenik tümör (Pindborg tümörü), amiloid benzeri matriks ve bu matriks içinde konsantrik kalsifiye yapılar olan Liesegang halkaları ile ayırt edilir. Kalsifiye odontojenik kistte (Gorlin kisti) ise epitel içinde çekirdek yapısını kaybetmiş 'hayalet hücreler' (ghost cells) baskındır. Ameloblastomdan daha az agresif lokal büyüme özelliği vardır.

---

### ÇİFT 207 (Benzerlik: 0.72)

**Soru 1 (ID: 15022c33-4560-4045-af18-ed7107b1e39b)**
Soru Kökü: Neovoid bazal hücreli karsinom sendromu (Gorlin-Goltz) etyopatogenezinde rol oynayan PTCH gen mutasyonunun hücresel düzeydeki patolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Sonic-hedgehog sinyal yolağının baskılanamaması sonucu sürekli uyarı
Açıklama: Gorlin sendromu, 9q22.3-q31 kromozom bölgesindeki tümör süpresör PTCH geninin mutasyonu ile karakterizedir. Normalde PTCH geni tarafından kodlanan patched proteini sonic-hedgehog sinyal yolağını baskılar; mutasyonunda bu baskı kalkar ve kontrolsüz hücresel proliferasyon gerçekleşir. Wnt/beta-katenin yolağı Pindborg veya osteoma patogenezinde görev alabilir, Gorlin sendromunda asıl patoloji hedgehog yolağındadır.

**Soru 2 (ID: 38221896-8e76-4a0c-983f-90396a0f78ea)**
Soru Kökü: Çok sayıda odontojenik keratokist, palmar çukurlar ve geniş baş çevresi ile karakterize, kromozom 9q22.3-q31 lokalizasyonundaki tümör süpresör gen mutasyonuna bağlı sonic-hedgehog sinyal yolağının hatalı çalışmasıyla ortaya çıkan sendromda mutasyona uğrayan gen aşağıdakilerden hangisidir?
Doğru Şık (B): PTCH
Açıklama: Gorlin (Nevoid bazal hücreli karsinom) sendromu, sonic-hedgehog yolağını baskılayan PTCH genindeki inaktive edici mutasyonlar sonucu gelişen ve multipl bazal hücreli karsinom ile odontojenik keratokistlerin eşlik ettiği otozomal dominant bir tablodur. SH3BP2 mutasyonu cherubizmde, FGFR2 mutasyonu Crouzon sendromunda izlenir. Bu hastalarda erken yaşta tespit edilen keratokistler sendromun ilk klinik belirteci olabilir.

---

### ÇİFT 208 (Benzerlik: 0.72)

**Soru 1 (ID: 1add0393-72b7-4e85-bd84-f4260057e5eb)**
Soru Kökü: Puberte öncesi beliren bilateral asemptomatik beyaz lezyonlarla karakterize olan ve histopatolojik incelemesinde dikensi (prickle) hücrelerde 'perinükleer eozinofilik kondensasyon' saptanan genetik defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüs (Cannon hastalığı), keratin 4 ve 13 genlerindeki otozomal dominant bir mutasyon sonucu gelişir ve mikroskopide karakteristik perinükleer eozinofilik kondensasyon barındırır. Herediter benign intraepitelyal diskeratoziste ise kondensasyon değil, diskeratotik hücreler ön plandadır. Hastalığın bilateral olması ve puberte öncesi başlangıcı genetik altyapısını doğrular.

**Soru 2 (ID: 2ba89bc2-7d79-431e-9e0d-6cc6e3b7a5ca)**
Soru Kökü: Otozomal dominant kalıtılan ve puberte öncesi bilateral asemptomatik lezyonlarla beliren Cannon hastalığında (Beyaz Sünger Nevüs), hastalığın genetik temeli ve histopatolojik görünümü aşağıdakilerden hangisidir?
Doğru Şık (A): Keratin 4/13 mutasyonu ile stratum spinozumda hidropik dejenerasyon
Açıklama: Beyaz sünger nevüs, Keratin 4 ve/veya 13 genindeki mutasyon sonucu gelişir ve mikroskobik olarak stratum spinozumda belirgin hidropik/berrak dejenerasyon ile perinükleer eozinofilik kondensasyon gösterir. ATP2A2 mutasyonu Darier hastalığında desmozom defektine neden olur. Yapısal keratin proteinlerindeki hata, hücre iskeletinin çökmesiyle vakuolizasyon benzeri optik boşluklar yaratır.

---

### ÇİFT 209 (Benzerlik: 0.72)

**Soru 1 (ID: 6fbcb3fb-f685-4d35-b650-96fb26863fb2)**
Soru Kökü: Mandibula angulusunda sıklıkla ekspansif büyüme gösteren konvansiyonel (solid/multikistik) Ameloblastoma varyantı için aşağıdakilerden hangisi **söylenemez**?
Doğru Şık (E): Cerrahi yaklaşımda konservatif küretaj ve enükleasyon yeterlidir; rezidü doku sekelsiz olarak kendiliğinden iyileşme gösterir.
Açıklama: Konvansiyonel ameloblastoma benign patoloji taşımasına rağmen borderline malign seyreden klinik lokal agresivitesi nedeniyle basit küretaj ile KESİNLİKLE tedavi edilmez; nüks garantiye yakındır. Hastalıklı kemiğin etrafındaki 2 cm'lik güvenli kemik cerrahi sınırı (marjin) ile birlikte blok rezeksiyonu zorunludur. Ters polariteli hücreler ve BRAF mutasyonu hücresel karakteristiğidir.

**Soru 2 (ID: 883871fd-6afe-4b01-b346-5872de69c109)**
Soru Kökü: Ameloblastom varyantları farklı klinik progresyonlara sahiptir. Sıklıkla diş eti veya dişsiz alveolar mukozada ekzofitik olarak lokalize olan Periferal (Ekstraosseöz) Ameloblastom ile ilgili aşağıdaki tanımlamalardan hangisi **yanlıştır**?
Doğru Şık (C): Altta yatan kortikal kemiği aşındırarak intraosseöz varyantlara oranla çok daha agresif nüks ve lokal yıkım döngüsü yaratır.
Açıklama: Periferal (Ekstraosseöz) Ameloblastom sadece lokal mukozada sınırları belli bir nodül gibi yerleşir; kemiği invaze etme veya erode etme özelliği göstermez. Dolayısıyla tedavi modalitesi konvansiyonel intraosseöz varyantlarda olduğu gibi geniş rezeksiyon değil, sadece o bölgedeki yumuşak dokunun çıkarılmasından ibarettir; prognozu mükemmeldir.

---

### ÇİFT 210 (Benzerlik: 0.72)

**Soru 1 (ID: 2a3bdc83-5125-4d1e-ac3d-fd6e74d15239)**
Soru Kökü: Yirmi iki yaşında erkek hasta, alt sağ 20 yaş dişi bölgesinde şişlik ve ağrı şikayetiyle başvuruyor. Radyografik muayenede yarı gömülü dişin kuronunun bukkal yüzeyinde başlayıp kök bifurkasyonuna uzanan radyolusent bir kistik lezyon saptanıyor. Dişe uygulanan vitalite testi pozitif yanıt veriyor ve hastanın geçmişte aynı bölgede perikoronitis atakları geçirdiği öğreniliyor. Bu hastadaki **en olası** kist tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Paradental kist
Açıklama: Paradental (bukkal bifurkasyon) kist, inflamatuar kaynaklı bir kist olmasına rağmen radiküler kistten farklı olarak vital (canlı) dişlerde ve sıklıkla alt 3. molar dişlerin perikoronitis atakları sonrasında servikal periodontal dokudan gelişir. En güçlü distraktör olan dentigeröz kist gelişimsel kökenli olup tam gömülü diş kuronunu mine-sement sınırından sararken, paradental kist dişin canlı kalması ve bukkal servikal/bifurkasyon yerleşimi ile ayrılır.

**Soru 2 (ID: 3d6fe828-d779-4f50-8e9c-1865654203b3)**
Soru Kökü: Sürmeye çalışan dişin baskısı ile kronu saran folikül epitelinde venöz akımın tıkanması ve doku arasına sıvı kaçışı sonucu gelişen, en sık görülen gelişimsel odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Dentigeröz kist
Açıklama: Dentigeröz kist, gömülü diş kronu ile folikül epiteli arasına sıvı toplanmasıyla gelişen ve çenelerde en sık görülen gelişimsel kisttir. Radiküler kist gelişimsel değil inflamatuvar kökenlidir ve non-vital dişlerle ilişkilidir. Mekanizma temel olarak folikül bağ dokusunda ödemin kron-folikül arayüzüne sızmasına dayanır.

---

### ÇİFT 211 (Benzerlik: 0.72)

**Soru 1 (ID: 70427019-25a8-470e-a1ea-27ba2fb9b7d9)**
Soru Kökü: 15 yaşında erkek hasta, dilinin giderek büyüdüğü ve ağzına sığmadığı şikayetiyle kliniğe başvuruyor. Klinik muayenede sadece dil dorsumunda değil, tüm oral kavite mukozasında yaygın, ağrısız, küçük nodüler lezyonlar saptanıyor. Hastanın sistemik öyküsünde tiroid medüller karsinomu nedeniyle opere edildiği öğreniliyor. Bu hastadaki makroglossi tablosuna yol açan temel histopatolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Mukozal nöromaların dil stromasına diffüz olarak infiltre olması
Açıklama: Tiroid medüller karsinomu ile sistemik birlikteliği olan patoloji Multipl Endokrin Neoplazi (MEN) Tip 2B'dir. Bu sendromda ağız kavitesine difüz olarak yayılan mukozal nöromalar dil stromasını da infiltre ederek dilde devasa bir organomegali (makroglossi) yaratır. Pleksiform nörofibrom kaskadı NF Tip 1'e, bağ dokusu replasmanı ise Duchenne Muskuler Distrofiye aittir. Medüller karsinom öyküsü ve oral kavitedeki jeneralize nodüler infiltrasyonlar, kütlesel büyümenin doğrudan nöromlara ait olduğunu izole eder.

**Soru 2 (ID: 594e49db-1c9f-4bf0-9cd2-b7028dfc8a81)**
Soru Kökü: Nörofibromatozis Tip I hastalarında sekonder olarak makroglossi gelişimine neden olan ve dil stroma dokusu içerisinde kontrolsüz çoğalan patolojik hücresel kütle aşağıdakilerden hangisidir?
Doğru Şık (B): Displastik Schwann hücresi ve fibroblast infiltrasyonları
Açıklama: Nörofibromatozis Tip I'de makroglossi yapan temel lezyon, displastik Schwann hücreleri ve fibroblastların dil stromasında proliferasyonuyla oluşan pleksiform nörofibromlardır. Lenfatik hamartomlar lenfanjiyomun, mukozal nöromalar MEN 2B'nin, distrofin defekti ise Duchenne muskuler distrofinin belirtecidir. Etken hücrelerin histolojik kökeni sendrom tiplendirmesi için anahtar veridir.

---

### ÇİFT 212 (Benzerlik: 0.72)

**Soru 1 (ID: c958bbd7-6bff-43b0-8064-5063a2b23c0c)**
Soru Kökü: Ağız içi muayenesinde her iki yanak mukozasında sınırları belirsiz, kazınamayan grimsi-beyaz opelesan bir görünüm saptanan yirmi yaşındaki hastanın yanak dokusu iki parmakla ekarte edilip gerdirildiğinde bu görünümün tamamen silinerek kaybolduğu izlenmiştir. Bu klinik tablonun hücresel zemininde aşağıdakilerden hangisi yer alır?
Doğru Şık (E): Spinal hücrelerde intrasellüler ödem ve parakeratoz
Açıklama: Löködem fizyolojik bir varyasyon olup, stratum spinozum hücrelerindeki intrasellüler sıvı artışının epitelde yarattığı hidropik dejenerasyona (ödeme) bağlı gelişir ve doku gerdirildiğinde epitelin ışık kırma indeksi değiştiği için görünmez olur. Fordyce granüllerindeki ektopik sebase bezler doku gerdirildiğinde kaybolmaz aksine daha çok belirginleşir. Hastada genetik bir mutasyon veya viral ajan söz konusu değildir.

**Soru 2 (ID: c0b21f81-b3fa-4541-8fe1-487bb08f1b53)**
Soru Kökü: On yaşındaki hastanın ağız içi muayenesinde, her iki yanak mukozasını kaplayan kalın, yumuşak, süngerimsi beyaz plaklar saptanıyor. Alınan biyopsinin histopatolojik incelemesinde stratum spinozum tabakasındaki prickle (dikensi) hücrelerde sitoiskelet çöküşünü simgeleyen 'perinükleer eozinofilik kondensasyon' raporlanıyor. Bu hastadaki lezyonun etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Keratin 4 ve Keratin 13 genlerinde mutasyon
Açıklama: Keratin 4 ve 13 gen mutasyonu, sitoiskelet ağının bozulmasına ve spesifik olarak hücrelerde hidropik dejenerasyon ile patognomonik 'perinükleer eozinofilik kondensasyon' oluşumuna neden olarak Cannon hastalığını (Beyaz Sünger Nevüs) tetikler. Kalsiyum pompa defekti Darier hastalığına, EBV kıllı lökoplakiye, sürtünme friksiyonel keratoza yol açar.

---

### ÇİFT 213 (Benzerlik: 0.72)

**Soru 1 (ID: 69152174-bf50-40ef-bada-a9529c2a53a1)**
Soru Kökü: 60 yaşında bir hastanın yüzünün sadece sağ yarısında, maksiller sinir hattı boyunca orta hattı hiçbir şekilde aşmayan şiddetli ağrılı veziküler döküntüler meydana gelmiştir. Hasta bu döküntüler ortaya çıkmadan önce üç gün boyunca o bölgede dayanılmaz bir sızı hissettiğini tarif etmektedir. Bu virüsün sekonder aktivasyon oluşturmadan önce sessiz olarak beklediği (latansi) nöroanatomik bölge aşağıdakilerden hangisidir?
Doğru Şık (D): Duyu ganglionları
Açıklama: Herpes Zoster (Zona) enfeksiyonu, çocuklukta geçirilen su çiçeği sonrası Varisella Zoster Virüsünün duyu ganglionlarında (özellikle Trigeminal ganglion) yıllar boyunca sessiz (latent) kalmasıyla karakterizedir. İmmünsüpresyon geliştiğinde virüs bu ganglionlardan çıkarak enfekte ettiği duyu sinirinin sadece kendi dermatom alanında ilerler, bu yüzden asla motor çekirdeklerden veya doğrudan epitelyal bazal membrandan kaynaklanmaz. Dermatom spesifik tek taraflı ilerleyiş, patojenin spesifik periferik sinir hücresine yerleşmesinin doğal sonucudur.

**Soru 2 (ID: 7bf04f7a-5d50-4bc2-88ca-3bc46b35ef11)**
Soru Kökü: 55 yaşında kadın hasta, dış kulak yolunda ağrılı veziküler döküntüler, şiddetli boğaz ağrısı ve yüzünün sol tarafında motor kayıp (yüz felci) ile kliniğe başvuruyor. Muayenede dilin ön 2/3'lük kısmında tat duyusunun tamamen kaybolduğu saptanıyor. Bu özgün klinik triadı oluşturan Ramsay-Hunt sendromunun etiyolojik virüsü aşağıdakilerden hangisidir?
Doğru Şık (B): Varisella zoster virüsü
Açıklama: Ramsay-Hunt sendromu, çocukluk çağında su çiçeği etkeni olarak alınan Varisella Zoster Virüsünün (Herpes Zoster) yıllar sonra fasiyal sinir ganglionunda (Ganglion geniculi) reaktivasyonu sonucu ortaya çıkan özgün bir zona formudur. Fasiyal sinirin korda timpani dalını tutması tat kaybına, motor dalını tutması yüz felcine ve kulak komşuluğu dış kulak yolu veziküllerine yol açar. HSV-1'de trigeminal sinir tutulumu ağırlıkta olup motor yüz felci ve spesifik kulak vezikülleri beklenmez.

---

### ÇİFT 214 (Benzerlik: 0.72)

**Soru 1 (ID: d311c1e9-9fbc-4193-9896-e0c35a56f860)**
Soru Kökü: Farklı premalign tabloların karsinom geliştirme potansiyelleri incelendiğinde; Plummer-Vinson sendromunun pürüzsüz ve kırmızı dilli tablosu risk grupları arasında kaç yıldızlı (★) kategoride sınıflandırılmıştır?
Doğru Şık (C): İki yıldız
Açıklama: Premalign hastalıkların risk ölçeğine göre; Plummer-Vinson sendromunda demir eksikliği anemisine sekonder olarak gelişen epitel atrofisi (pürüzsüz kırmızı dil), pürüzsüz kalın lökoplaki ile aynı skalada yer alıp 2 yıldız (★★) seviyesinde malignite potansiyeli barındırmaktadır. Bu tablo PVL (6 yıldız) veya eritroplaki (5 yıldız) kadar agresif değildir.

**Soru 2 (ID: 5a7f66e7-f329-42ae-b636-a9462a89cc09)**
Soru Kökü: Prekanseröz oral lezyonların malignite riski değerlendirme tablolarında, en agresif biyolojik davranışa ve potansiyele sahip olması nedeniyle altı yıldız (★) ile zirvede derecelendirilen patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Proliferatif verrüköz lökoplaki
Açıklama: Kanser potansiyeli tablosuna göre Proliferatif Verrüköz Lökoplaki (PVL) 6 yıldız ile en riskli grupta yer almaktadır. Bazı klinik çalışmalarda displazi zincirinin kırılmadığı ve kanserleşme ihtimalinin nükslerle birlikte %100'ü bulabildiği belgelenmiştir. Bu durum PVL'yi tüm mukozal premalign lezyonlar arasında en yıkıcı kılan faktördür.

---

### ÇİFT 215 (Benzerlik: 0.72)

**Soru 1 (ID: 73eee87c-7a27-4003-9ee7-cdaa72f93171)**
Soru Kökü: Anogenital bölgede yerleşen ve premalign karakter taşıyan intraepitelyal neoplazi lezyonlarının etyolojisinde aşağıdaki HPV tiplerinden hangisinin bulunması **en az olasıdır**?
Doğru Şık (B): HPV 2
Açıklama: İntraepitelyal neoplaziler yüksek riskli HPV tipleri olan 16, 18, 31 ve 33'ün yanı sıra 6 ve 11 ile ilişkilidir. HPV 2 ise benign deri siğilleri olan verruca vulgaris ve butcher siğili etkenidir, anogenital neoplazi tablosunda dominant ajan değildir.

**Soru 2 (ID: 528d6842-3091-4796-9eb7-d5cb494c62ed)**
Soru Kökü: Oral bölgede izlenen verruka vulgaris lezyonunun etiyopatogenezinden sorumlu olan ve histopatolojik olarak perinükleer haloya sahip hücrelerle karakterize benign tabloya en sık yol açan virüs tipleri aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (A): HPV 6 ve 11
Açıklama: Oral verruka vulgaris, skuamöz epitelin benign hiperplazisi olup kaynağa göre etiyolojisinde primer olarak HPV 6 ve 11 tipleri rol oynamaktadır. Perinükleer halolu koilositlerin varlığı bu viral enfeksiyonun hücresel düzeydeki karakteristik patognomonik yansımasıdır. HPV 13 ve 32 fokal epitel hiperplazisinde (Heck hastalığı) görülürken, yüksek riskli 16 ve 18 tipleri skuamöz hücreli karsinom gelişimi ile doğrudan ilişkilidir.

---

### ÇİFT 216 (Benzerlik: 0.72)

**Soru 1 (ID: ab7604a2-cc85-4b8c-8d5d-3d4738749f7c)**
Soru Kökü: Witkop hastalığı olarak da bilinen otozomal dominant kalıtılan herediter benign intraepitelyal diskeratozis, oral mukozadaki hiperplastik beyaz plakların yanı sıra vücudun hangi ekstraoral bölgesinde tipik plak benzeri lezyonlarla karakterizedir?
Doğru Şık (B): Göz konjonktivası
Açıklama: Herediter benign intraepitelyal diskeratozis (Witkop-Von Sallmann sendromu), oral beyaz lezyonlara ek olarak hayatın ilk yıllarında korneal limbusta ve bukkal konjonktivada plaklarla (konjonktival tutulum) kendini gösterir. Avuç içi ve ayak tabanı tutulumu hiperkeratoz sendromlarında (Papillon-Lefèvre gibi) görülürken, Witkop hastalığında oftalmik bulgular spesifiktir. Her iki bölgedeki lezyon da kendini sınırlayan benign yapıdadır.

**Soru 2 (ID: 112204b7-a389-4bf0-9429-7da3a7f77544)**
Soru Kökü: Sekiz yaşındaki hastanın yanak mukozasında yaygın kalın beyaz plaklar saptanıyor. Göz hekimi konsültasyonunda, hastanın korneal limbus bölgesinde konjonktival plakların varlığı tespit ediliyor. Histolojik incelemesinde hiperplazi ve diskeratotik hücreler izlenen, kendini sınırlayan bu otozomal dominant patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Herediter benign intraepitelyal diskeratozis (Witkop Sendromu)
Açıklama: Witkop-Von Sallmann Sendromu (Herediter benign intraepitelyal diskeratoz), ektodermal kökenli hücrelerdeki defekte bağlı olarak patognomonik şekilde eşzamanlı oral beyaz lezyonlar ve gözde (korneal limbusta) konjonktival plaklarla seyreden kalıtsal bir sendromdur. Darier hastalığı seboreik deriyi tutarken oküler bulgu vermez; Beyaz Sünger Nevüs ise sadece oral mukoza ile sınırlıdır.

---

### ÇİFT 217 (Benzerlik: 0.72)

**Soru 1 (ID: 23cab94d-61e2-459a-b77b-cbe0faf945a2)**
Soru Kökü: Sert damak bölgesi, normal şartlar altında oral kavitede skuamöz hücreli karsinom gelişimi için en düşük riskli anatomik alanlardan biridir. Ancak hastanın spesifik olarak tütün ürününü ateşli ucu ağız içinde kalacak şekilde (ters) içmesi durumunda gelişen palatal lezyonun en kritik özelliği aşağıdakilerden hangisidir?
Doğru Şık (A): Çok yüksek (5 yıldızlı) malign transformasyon potansiyeli taşıması
Açıklama: Ters sigara içiciliğine bağlı gelişen revers smokers palatal lezyonu, sert damakta şiddetli termal ve kimyasal şok yaratarak masif displaziye neden olur ve 5 yıldızlı (en üst düzey) karsinom riski taşır. Reaktif nikotinik stomatit gibi masum değildir, reversibl olma eğilimi göstermez ve hücresel atipisi nedeniyle majör premalign odaktır.

**Soru 2 (ID: 9923121c-f772-41c0-8a53-105429120fb9)**
Soru Kökü: Uzun yıllardır sigara kullanan bir hastanın sert damak mukozasında izlenen klasik nikotinik stomatit (stomatitis nicotina) ile, ters sigara içiciliğine bağlı gelişen revers smokers palatal lezyonu arasındaki en kritik patolojik ayrım aşağıdakilerden hangisidir?
Doğru Şık (C): Klasik nikotin stomatitinin minör tükürük bezi kanallarının malignite içermeyen reaktif inflamasyonu olması, ters sigara içiminin ise epitelde geri dönüşümsüz displazi yapması
Açıklama: Klasik nikotinik stomatit, sigara dumanının yaydığı ısıya bağlı olarak damaktaki minör tükürük bezlerinin duktuslarında gelişen benign reaktif inflamasyondur ve karsinom potansiyeli kesinlikle yoktur. Buna karşın ters sigara içiciliğinde yanan ateşin doğrudan mukozaya teması (termal/kimyasal şok) minör bezleri aşarak doğrudan skuamöz epitelde masif displazi ve 5 yıldızlı yüksek karsinogenez yaratır.

---

### ÇİFT 218 (Benzerlik: 0.72)

**Soru 1 (ID: c7888fdc-7137-4a4c-ae75-6d0df5690954)**
Soru Kökü: Oral bölge viral enfeksiyonlarına bağlı hiperplaziler incelendiğinde, fokal epitel hiperplazisi (Heck hastalığı) kliniği ile klasik ve spesifik olarak ilişkili bulunan HPV tipleri aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (A): HPV 13 ve 32
Açıklama: Heck hastalığı (fokal epitelyal hiperplazi), çok sayıda papiller benzeri mukoza kabarıklarıyla seyreden ve hücrelerde koilositotik değişikliklerin izlendiği benign bir mukozal reaksiyondur. Bu hastalık için etiyolojide spesifikleşmiş HPV alt tipleri 13 ve 32'dir; anogenital ve deri kaynaklı diğer HPV suşları bu tablonun temel nedeni değildir.

**Soru 2 (ID: 18d9e71b-257e-4bec-9068-5011551bdd55)**
Soru Kökü: On beş yaşındaki kız hastanın oral mukozasında çok sayıda papiller nodül tespit edilmiştir. Klinik değerlendirme sonucu fokal epitelyal hiperplazi (Heck hastalığı) ön tanısı konmuştur. Yapılan insizyonel biyopsinin histopatolojik incelemesinde aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Derin subepitelyal bağ dokusu projeksiyonları
Açıklama: Heck hastalığının histopatolojisinde skuamöz hücrelerin benign hiperplazisi, akantoz, parakeratoz ve HPV etkisine işaret eden koilositoz izlenir. Ancak epitel dokusunun altındaki subepitelyal bağ dokusuna doğru derin projeksiyonlar yapması kondiloma akuminatumu papillom/hiperplazi grubundan ayıran spesifik bir morfolojik bulgudur ve Heck hastalığı için beklenen bir durum değildir.

---

### ÇİFT 219 (Benzerlik: 0.72)

**Soru 1 (ID: 43329d62-4a22-4c2c-966e-42a26bd40f86)**
Soru Kökü: Aşağıdaki viral ajanlardan hangisi, primer enfeksiyonu sonrasında bağışıklık sistemi tarafından tamamen elimine edilemeyerek retrograt aksonal transport ile trigeminal gangliyona taşınır ve stres durumlarında sekonder intraoral lezyonları tetikler?
Doğru Şık (C): Herpes Simpleks Virüsü
Açıklama: Herpes Simpleks Virüsü (HSV), primer enfeksiyon sonrası retrograt aksonal taşınma ile bölgesel duyu gangliyonlarına (orofasiyal bölge için trigeminal gangliyon) ulaşır ve burada sonsuza kadar latent kalır. Tetikleyici faktörlerle (stres, UV vb.) anterograt yolla yüzeye inerek keratinize dokularda sekonder herpesi oluşturur. Koksaki veya kızamık virüslerinde gangliyonda nöral latensi ve aksonal transport kaskadı yoktur.

**Soru 2 (ID: 19a9c59e-6001-4599-90f2-fc3a6796e3c8)**
Soru Kökü: Nörokutanöz viral enfeksiyonların patofizyolojisinde latent fazdaki replikasyon alanları karakteristik farklar gösterir. Ramsay Hunt sendromu ve perioral rekürren Herpes Simpleks enfeksiyonlarında etken virüslerin sessiz formda beklediği gangliyonlar sırasıyla aşağıdakilerden hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): Genikulat gangliyon / Trigeminal gangliyon
Açıklama: Ramsay Hunt sendromunda Varicella Zoster Virüsü (VZV) patognomonik olarak 7. kraniyal sinirin duyu merkezi olan genikulat gangliyonda latent kalır ve burada reaktive olur. Rekürren oral Herpes Simpleks Virüsü (HSV) ise birincil enfeksiyonun ardından retrograt taşınarak bölgesel trigeminal gangliyona yerleşir. Bu iki viral ailenin anatomik replikasyon sahasındaki farklılık, yarattıkları klinik sendromların (yüz felci vs orofasiyal ülser) sınırlarını belirler.

---

### ÇİFT 220 (Benzerlik: 0.72)

**Soru 1 (ID: 0d065171-16d7-4afb-a00c-e79a1f83778f)**
Soru Kökü: Aşağıdaki oral mukozal lezyonlardan hangisinin invaziv karsinoma dönüşüm (malignite) potansiyeli diğerlerinden belirgin şekilde daha düşüktür?
Doğru Şık (E): Dumansız tütün keratozu
Açıklama: Dumansız tütün keratozu düşük malignite riskine (1 yıldız) sahipken, proliferatif verrüköz lökoplaki (%100'e varan en yüksek risk), eritroplaki, oral submüköz fibrozis ve eritrolökoplaki karsinomlaşma riski oldukça yüksek lezyonlardır.

**Soru 2 (ID: df7c057f-c6df-40a9-a5ed-ae033c080f4d)**
Soru Kökü: İdiyopatik lökoplakilerin insidansı ile maligniteye (skuamöz hücreli karsinom) dönüşüm riski anatomik bölgelere göre farklılık gösterir. Buna göre, lökoplaki görülme sıklığının düşük olmasına karşın, hücresel kanserleşme riskinin tartışmasız en yüksek olduğu oral lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (B): Ağız tabanı
Açıklama: Lökoplakilerin malign transformasyon riski anatomik hiyerarşide en fazla Ağız tabanında izlenir, bunu dil ve dudak takip eder. Buna karşın vestibül mukoza lökoplakilerin en sık rastlandığı ancak kanserleşme riskinin en düşük olduğu anatomik alandır. Bu ters orantı kuralı oral prekanseröz lezyonların yönetiminde kritik bir prognostik göstergedir.

---

### ÇİFT 221 (Benzerlik: 0.72)

**Soru 1 (ID: 64ed2729-a1c6-4ca9-a8a2-bd913be9e718)**
Soru Kökü: Özellikle 6-20 yaş arası dönemde ortaya çıkan, yanak mukozasında, dudak ve diş etlerinde kaldırım taşı görünümünde beyaz kabarıklıklarla karakterize Beyaz Sünger Nevüs tablosunda, epitel hücrelerindeki desmozomal disfonksiyona neden olan mutasyon aşağıdakilerden hangisidir?
Doğru Şık (C): ATP2A2
Açıklama: Beyaz sünger nevüs, ATP2A2 geni mutasyonu sonucu epitel hücrelerindeki desmozomal defekt ve adezyon değişiklikleri ile karakterize otozomal dominant bir hastalıktır. PTCH mutasyonu Gorlin sendromunda görülürken, ATP2A2 doğrudan keratinosit adezyonunu bozarak bu spesifik lökokeratotik doku reaksiyonunu oluşturur. Genç yaşta ortaya çıkması ve özellikle seboreik bölgeleri tutması ayırıcı tanıda önemlidir.

**Soru 2 (ID: 1add0393-72b7-4e85-bd84-f4260057e5eb)**
Soru Kökü: Puberte öncesi beliren bilateral asemptomatik beyaz lezyonlarla karakterize olan ve histopatolojik incelemesinde dikensi (prickle) hücrelerde 'perinükleer eozinofilik kondensasyon' saptanan genetik defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüs (Cannon hastalığı), keratin 4 ve 13 genlerindeki otozomal dominant bir mutasyon sonucu gelişir ve mikroskopide karakteristik perinükleer eozinofilik kondensasyon barındırır. Herediter benign intraepitelyal diskeratoziste ise kondensasyon değil, diskeratotik hücreler ön plandadır. Hastalığın bilateral olması ve puberte öncesi başlangıcı genetik altyapısını doğrular.

---

### ÇİFT 222 (Benzerlik: 0.72)

**Soru 1 (ID: 7e522e10-4a32-4837-86e7-60e129b5645c)**
Soru Kökü: Çene kistlerinin kaynaklandığı epitel artıkları patogenezde kritik rol oynar. 
I. Odontojenik keratokist
II. Radiküler kist
III. Dentigeröz kist 
Bu üç kistin embriyolojik olarak sırasıyla Dental Lamina, Hertwig Kök Kılıfı ve İndirgenmiş Mine Epiteli kalıntılarından geliştiği düşünülürse, doğru eşleştirme aşağıdakilerin hangisinde verilmiştir?
Doğru Şık (D): I: Dental Lamina, II: Hertwig, III: Mine
Açıklama: Embriyolojik odontojenik kalıntılar çene kistlerine spesifiktir: Odontojenik keratokist dental lamina (Serres) kalıntısından, radiküler (periapikal) kist kök çevresindeki Hertwig kök kılıfı (Malassez) kalıntısından, dentigeröz kist ise sürememiş diş kuronu etrafındaki indirgenmiş mine epiteli artıklarından köken alır.

**Soru 2 (ID: 36f226aa-d9f2-4d06-a754-20400634d6ef)**
Soru Kökü: WHO 2022 kılavuzunda odontojenik gelişimsel kistlerin kökenleri epitel kaynaklarına göre ayrılmıştır. Kuronunu tamamlamış bir dişin foliküler bağ dokusu kalıntıları olan indirgenmiş mine (folikül) epitelinden köken alan gelişimsel kistler, aşağıdakilerin hangisinde birlikte doğru verilmiştir?
Doğru Şık (B): Dentigeröz kist ve Erüpsiyon kisti
Açıklama: Diş gelişiminde mine yapımı bittikten sonra kuronun üzerini örten indirgenmiş mine epiteli kalıntıları, çenelerde oluşan kistlerin üç ana kaynağından biridir. Gömülü dişin kronunu saran Dentigeröz kist ve bu kistin diş sürerken yumuşak dokudaki yansıması olan Erüpsiyon kisti mine epiteli kalıntılarından gelişir. Seçenek C ve E'deki kistler dental lamina (Serres) epitelinden, A'daki inflamatuar kistler ise sıklıkla Malassez epitel artıklarından köken alır.

---

### ÇİFT 223 (Benzerlik: 0.72)

**Soru 1 (ID: fcc2b75b-dbb1-4833-b482-26c77fc36096)**
Soru Kökü: Altmış beş yaşında, uzun yıllardır tütün çiğneme alışkanlığı olan erkek hastanın alveolar mukozasında geniş, düzensiz parmaksı çıkıntılar gösteren ekzofitik bir lezyon saptanıyor. Biyopside metastaz potansiyeli çok düşük, iyi diferansiye bir epitelyal tümör izleniyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Verrüköz karsinom
Açıklama: Verrüköz karsinom; sıklıkla tütün emen/çiğneyen yaşlı erkeklerde, en sık alveolar mukoza ve yanakta yerleşen, parmaksı çıkıntılar gösteren ekzofitik ve çok iyi diferansiye bir SCC varyantıdır. Metastaz potansiyeli klasik SCC'ye göre oldukça düşüktür ve tedavisi öncelikle cerrahidir. Klasik SCC ülseratif ve daha invaziv bir paternde büyür.

**Soru 2 (ID: 4f9a1924-47a5-401b-bc18-1d551c2276c7)**
Soru Kökü: Otuz beş yaşında bir hastanın anterior maksillasında tespit edilen, diş taşıyan alveolar bölgelerde gelişmiş bir tümörün histolojik incelemesinde; sıkıca paketlenmiş, sitolojik olarak masum epitel adacıkları ve bu adacıklarda anlamlı keratinizasyon olmaksızın gelişen tek tip skuamöz farklılaşma izleniyor. Ancak adacıkların periferinde palizatlaşma (çitlenme) veya merkezde stellat retikulum (yıldızsı) benzeri gevşek ağsı yapı gözlenmemiştir. Tablo özellikleri referans alındığında bu lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Skuamöz odontojenik tümör
Açıklama: Dünya Sağlık Örgütü sınıflandırma tablolarında spesifik olarak vurgulandığı üzere, Skuamöz odontojenik tümör (ortalama yaş 34.8); anlamlı keratinizasyon göstermeyen, sıkıca paketlenmiş ve atipisiz skuamöz epitel adalarından oluşur. En önemli ayırıcı özelliği ise, ameloblastomda tipik olarak beklenen periferik palizatlaşmanın ve merkezi stellat retikulum yapısının bu tümörde BİLHASSA OLMAMASIDIR. Bu sayede ameloblastom varyantlarından kolayca ayrılır.

---

### ÇİFT 224 (Benzerlik: 0.72)

**Soru 1 (ID: 6aa49726-ef0b-4eb4-8c1a-ab8edd6593d6)**
Soru Kökü: Altmış iki yaşındaki kadın hastanın sert damağında mukoza altında gelişen ağrısız kitle eksize ediliyor. İncelemede hücrelerin perineural invazyon gösterdiği, ancak miksoid stromada 'İsviçre peyniri' yapısından çok tek sıralı hücre kordonları ve terminal duktus yapısı şeklinde yayıldığı saptanıyor. Lokal agresif olan bu karsinom aşağıdakilerden hangisidir?
Doğru Şık (A): Polimorföz düşük dereceli adenokarsinom
Açıklama: Polimorföz düşük dereceli adenokarsinom (PLGA), terminal duktus kökenli olup özellikle damak minör tükürük bezlerini tutar. Perinöral invazyonu adenoid kistik karsinom ile karışmasına neden olsa da, tek sıralı hücre dizilimleri (indian file) ve daha düşük malignite derecesi ile ondan ayrılır.

**Soru 2 (ID: 69596470-1e18-4cf7-b556-dcab9dec435a)**
Soru Kökü: Elli beş yaşında kadın hasta, palatal bölgede yavaş büyüyen şişlik ve beraberinde lokalize şiddetli, yanıcı nevraljik ağrı şikayetiyle başvuruyor. Yapılan eksizyonel biyopside; tümör hücrelerinin kribriform paternde, silindir benzeri boşluklar bırakarak 'İsviçre peyniri' görünümü oluşturduğu ve çevre sinir kılıfları boyunca (perinöral) ilerlediği gözleniyor. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Adenoid kistik karsinom
Açıklama: Adenoid kistik karsinom, minör tükürük bezlerinde (özellikle damak) sık yerleşen, histolojik olarak kribriform (İsviçre peyniri benzeri) patern çizen ve yoğun perineural invazyon eğilimi gösteren malign bir tümördür. Erken dönemde bile görülebilen bu şiddetli perinöral yayılım, hastada spesifik klinik bulgu olan inatçı nevraljik ağrılara sebep olur. Polimorföz adenokarsinom da perineural invazyon yapabilir ancak karakteristik 'İsviçre peyniri' kribriform paterni adenoid kistik karsinoma aittir.

---

### ÇİFT 225 (Benzerlik: 0.72)

**Soru 1 (ID: 09c5542c-9191-44f6-a820-2a3d46591a70)**
Soru Kökü: Ağrılı kırmızı dil, mukozal atrofi ve demir eksikliği anemisi ile karakterize edilen Plummer-Vinson sendromunun beklenen klasik bulguları arasında aşağıdakilerden hangisi **değildir**?
Doğru Şık (A): Bağırsaklarda mukozal ülserasyon
Açıklama: Plummer-Vinson (Paterson-Kelly-Brown) sendromunun klasik kliniği üst gastrointestinal sistemi etkileyerek demir eksikliği anemisi, disfaji, özofageal webler ve oral/özofageal skuamöz hücreli karsinom riskinde belirgin artış ile seyreder. Alt gastrointestinal sistemde inflamatuvar barsak hastalıklarına benzer bir mukozal ülserasyon bu sendromun patolojik tanımlamaları arasında yer almaz. Epitel dokudaki kronik atrofi, yassı hücreli displazilerin gelişimine zemin hazırlayan temel nedendir.

**Soru 2 (ID: 75bbb62b-7fc8-456c-8e0d-cdf29140eb3e)**
Soru Kökü: Ellili yaşlarında bir kadın hasta, şiddetli yutma güçlüğü (disfaji) ve dilinde yanma şikayetiyle kliniğe başvuruyor. Yapılan muayenesinde dil dorsumunda papilla kaybı ile karakterize pürüzsüz kırmızı görünüm (atrofik glossit) saptanıyor. Laboratuvar tetkiklerinde kronik demir eksikliği anemisi tespit edilen bu hastada özofagoskopide üst özofagusta mukozal bantlar (özofageal web) izleniyor. Bu klinik tablo için en olası tanı ve bu hastada gelecekte gelişme riski en yüksek olan malignite aşağıdakilerden hangisidir?
Doğru Şık (B): Plummer-Vinson Sendromu — Skuamöz hücreli karsinom (SCC)
Açıklama: Plummer-Vinson sendromu (Sideropenik disfaji); demir eksikliği anemisi, oral/özofageal mukoza atrofisi (atrofik glossit) ve özofageal weblere bağlı disfaji triadı ile karakterizedir. Bu sendrom prekanseröz bir durum olup, özellikle dil, oral kavite ve özofagusta Skuamöz Hücreli Karsinom (SCC) riskini belirgin şekilde artırır.

---

### ÇİFT 226 (Benzerlik: 0.72)

**Soru 1 (ID: 0849e8a5-b67f-499c-b8cd-191aaa5b56bb)**
Soru Kökü: Konjenital sifiliz patogenezinde Hutchinson triyadı bileşenlerinden biri olarak kabul edilen ve ileri yaşlarda fotofobi ile körlüğe kadar gidebilen görme kaybı kaskadını tetikleyen spesifik lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): İnterstisyel keratit
Açıklama: Hutchinson triyadının oküler bileşeni, kornea stromasında spiroket antijenlerine karşı gelişen inflamasyon ve neovaskülarizasyon sonucu ortaya çıkan interstisyel keratittir. Bu süreç korneanın saydamlığını yitirmesine (opasifikasyon) neden olur. Katarakt, rubella (kızamıkçık) enfeksiyonunun klasik oküler bulgusu iken, sifilizde doğrudan derin korneal destrüksiyon izlenir.

**Soru 2 (ID: edf86562-ae4b-4984-8612-4179e47418c3)**
Soru Kökü: Aşağıdakilerden hangisi konjenital sifiliz enfeksiyonunda izlenen Hutchinson triyadının bileşenlerinden biri **değildir**?
Doğru Şık (B): Altıncı kraniyal sinir tutulumuna bağlı strabismus
Açıklama: Hutchinson triyadının nörolojik bileşeni 8. kraniyal sinir (Nervus vestibulocochlearis) tutulumuna bağlı sensörinöral sağırlıktır. Altıncı sinir (N. abducens) tutulumu ve strabismus bu triadda yer almaz (DUS komitelerinin favori çeldiricisidir). Diğer bileşenler; kama biçimli kesiciler/dut molarlar (dental anomali) ve interstisyel keratittir (oküler anomali).

---

### ÇİFT 227 (Benzerlik: 0.72)

**Soru 1 (ID: 050f5fc9-1c05-4b98-b066-1d9d0879b036)**
Soru Kökü: Viral epitel lezyonlarının kliniğe yansımasından önceki semptom fazı (prodrom), etiyolojik tanıda kritiktir. Rekürren Herpes Simpleks enfeksiyonunun vezikül evresi öncesindeki prodromal fazına ait spesifik bulgulardan biri **değildir**?
Doğru Şık (A): Dermatomu izleyen, orta hattı geçmeyen şiddetli nevraljik ağrı
Açıklama: Rekürren HSV enfeksiyonlarında virüs trigeminal gangliyondan epitele ulaştığında (prodrom) vezikül oluşumundan önce patognomonik olarak lokal kaşıntı, hafif yanma ve karıncalanma izlenir. Orta hattı geçmeyen ve dermatoma tek taraflı (unilateral) yayılan şiddetli nevraljik ağrı, Varicella Zoster Virüsünün (Zona/Ramsay Hunt) karakteristik prodromal bulgusudur. Zona kökenli nevraljinin kaşıntıyla değil keskin ağrıyla başlaması en temel ekarte edici farktır.

**Soru 2 (ID: 486cb22b-ac48-4353-9844-f2679ec70770)**
Soru Kökü: Aşağıdaki viral ajanlardan hangisinin neden olduğu vezikülobüllöz enfeksiyonun prodromal döneminde, döküntülerden **önce** lezyon bölgesinde kaşıntı ve karıncalanmadan ziyade, patognomonik olarak şiddetli nevraljik boğaz/kulak ağrısı gözlenir?
Doğru Şık (C): Varicella Zoster Virüsü
Açıklama: Herpes Zoster (Varicella Zoster Virüsü - VZV) enfeksiyonlarında, virüsün sinir trasesi boyunca anterograt taşınımı sırasındaki nöral inflamasyona bağlı olarak veziküler döküntülerden önce şiddetli nevraljik ağrı izlenir (örn. Ramsay Hunt sendromu). Herpes simpleks (HSV) enfeksiyonlarında ise prodromal faz daha çok lokal kaşıntı ve karıncalanma hissi ile seyreder. Koksaki virüslerinde ise bu şekilde tipik bir şiddetli nevraljik prodrom kaskadı bulunmaz.

---

### ÇİFT 228 (Benzerlik: 0.72)

**Soru 1 (ID: 441fef9b-3631-446c-a08d-5a0ecc8bf24d)**
Soru Kökü: Fungal kökenli kronik hiperplastik kandidiyazisin (kandidal lökoplaki), oral kavitede izlenen idiyopatik lökoplakilerden veya diğer pamukçuk formlarından ayrımında, epiteldeki hücresel atipi kapasitesine bağlı olarak sahip olduğu kabul edilen patognomonik onkolojik nitelik aşağıdakilerden hangisidir?
Doğru Şık (E): Skuamöz epitelde karsinogenez riski taşıyan premalign (kanserleşme riski olan) bir lezyon olması
Açıklama: Kronik hiperplastik kandidiyazis, fırsatçı Kandida ajanlarının epitelde oluşturduğu ısrarcı tahribatın hücresel atipi ve keratin artışı (hiperplazi) yaratmasına sekonder olarak gelişir ve patognomonik şekilde malign transformasyon (prekanseröz) riski barındırır. Mantar enfeksiyonlarının geneli iyi huylu doku reaksiyonları gösterse de, lökoplaki spektrumundaki bu fikse hiperplastik form kesinlikle premalign kabul edilir. Kazınabilen ve malignite riski olmayan lezyon psödomembranöz kandidiyazistir.

**Soru 2 (ID: 0d093f4b-da09-4bf1-ab97-3740abbb504a)**
Soru Kökü: Kazınmakla sıyrılmayan beyaz renkli lezyonları olan hastadan alınan biyopside, epitel hiperplazisi ve belirgin keratin artışı olarak tanımlanan bu klinik tablonun diş hekimliği pratiğindeki en kritik önemi aşağıdakilerden hangisidir?
Doğru Şık (E): Premalign karakterde bir patolojik zemin oluşturması
Açıklama: Kronik hiperplastik kandidiyazis tablosu, hücresel düzeyde epiteliyal displazi riski taşıması ve malign transformasyona uğrayabilmesi nedeniyle premalign bir lezyon olarak kabul edilir. Diğer kandidiyazis tipleri (psödomembranöz veya eritematöz) yüzeyel kalarak displastik değişiklik yaratmazken, dokuya penetre olan bu kronik formda hücre döngüsü bozulmaktadır. Sistemik kana karışma ihtimali çok daha zayıf bir hücresel immün yetmezliği gerektirir, primer klinik risk skuamöz hücreli karsinom riskidir.

---

### ÇİFT 229 (Benzerlik: 0.72)

**Soru 1 (ID: 64ed2729-a1c6-4ca9-a8a2-bd913be9e718)**
Soru Kökü: Özellikle 6-20 yaş arası dönemde ortaya çıkan, yanak mukozasında, dudak ve diş etlerinde kaldırım taşı görünümünde beyaz kabarıklıklarla karakterize Beyaz Sünger Nevüs tablosunda, epitel hücrelerindeki desmozomal disfonksiyona neden olan mutasyon aşağıdakilerden hangisidir?
Doğru Şık (C): ATP2A2
Açıklama: Beyaz sünger nevüs, ATP2A2 geni mutasyonu sonucu epitel hücrelerindeki desmozomal defekt ve adezyon değişiklikleri ile karakterize otozomal dominant bir hastalıktır. PTCH mutasyonu Gorlin sendromunda görülürken, ATP2A2 doğrudan keratinosit adezyonunu bozarak bu spesifik lökokeratotik doku reaksiyonunu oluşturur. Genç yaşta ortaya çıkması ve özellikle seboreik bölgeleri tutması ayırıcı tanıda önemlidir.

**Soru 2 (ID: 8fba4627-7c28-42c2-986d-5f55bd55d2e4)**
Soru Kökü: On beş yaşındaki erkek hasta, yanak, dudak ve diş eti mukozasında diskeratotik beyaz kabarıklıkların birleşmesiyle oluşan 'kaldırım taşı' benzeri lezyonlar ile başvuruyor. Dermatolojik muayenesinde alın ve nasolabial kıvrımlar gibi seboreik bölgelerde de benzer döküntüler saptanıyor. Bu hastalığın patogenezinde rol oynayan temel moleküler defekt aşağıdakilerden hangisidir?
Doğru Şık (A): ATP2A2 gen mutasyonuna sekonder kalsiyum pompa disfonksiyonu
Açıklama: Darier hastalığı (Foliküler keratozis), ATP2A2 gen mutasyonu sonucu hücre içi kalsiyum pompasının bozulması ve sekonder desmozom defekti (akantoliz) ile karakterize, mukokutanöz kaldırım taşı görünümü veren otozomal dominant bir hastalıktır. Keratin 4/13 mutasyonu sadece ağız içini tutan Beyaz Sünger Nevüs'ün etkenidir. Desmoglein antikorları pemfigus vulgariste izlenir.

---

### ÇİFT 230 (Benzerlik: 0.72)

**Soru 1 (ID: 8136fb44-2400-4058-b4bb-876224c3622f)**
Soru Kökü: Elli yaşında erkek hasta, posterior mandibulada son 3 ayda hızla büyüyen, ağrılı, korteksi delip yumuşak dokuya infiltre olmuş radyolüsen bir kitle şikayetiyle başvuruyor. Eş zamanlı boyun lenfadenopatisi saptanıyor. Histolojisinde ameloblastoma benzer kordonlar ve stellat hücreler görülmekle birlikte, belirgin hücresel pleomorfizm, hiperkromazi, artmış atipik mitoz ve polarite kaybı kaydediliyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik karsinom
Açıklama: Hızlı büyüme, lokal invazyon, ağrı ve lenf nodu metastazı gibi agresif klinik bulgulara ek olarak mikroskopide sitolojik atipi, pleomorfizm ve polarite kaybı gibi klasik 'karsinom' özelliklerinin ameloblastoma benzer hücrelerde görülmesi Ameloblastik Karsinom tanısı koydurur. Konvansiyonel ve metastatik ameloblastomlar histolojik olarak benigndir ve sitolojik atipi barındırmazlar. Bu agresif malign dönüşüm ameloblastik karsinomu ölümcül hale getirir.

**Soru 2 (ID: ac6f4403-c704-4f36-ba50-21ede6e0e367)**
Soru Kökü: İleri yaş grubunda, 5-7. dekattaki hastalarda arka mandibulada gözlenen, histolojik olarak tümör epitel yuvaları arasında oldukça yoğun, fibrokollajenöz bir sklerotik doku üretiminin maligniteye eşlik ettiği, radyografide sınırları kötü seçilen tümör aşağıdakilerden hangisidir?
Doğru Şık (D): Sklerozan odontojenik karsinom
Açıklama: Sklerozan odontojenik karsinom; ismini de aldığı üzere, mikroskobide ince kordonlar halindeki malign epitelyal yuvaların arasında aşırı yoğun fibrokollajenöz "sklerotik" (sert, nedbeleşmiş) bir stroma barındıran nadir bir malignitedir. Stromadaki bu yoğun tepkisel desmoplazi, tümörü diğer epitel kökenli karsinomlardan ayırır.

---

### ÇİFT 231 (Benzerlik: 0.72)

**Soru 1 (ID: da32b6bd-ae66-4f13-a614-855e7cfaa6c4)**
Soru Kökü: Konjenital veya edinsel makroglossi etiyolojisine yol açan aşağıdaki genetik ve metabolik durumlardan hangisi **yanlıştır**?
Doğru Şık (D): Multipl Endokrin Neoplazi Tip 2A'da mukozal nöroma hiperplazisi izlenir
Açıklama: Multipl Endokrin Neoplazi (MEN) spektrumunda dilde makroglossi yapan mukozal nöroma hiperplazisi sadece MEN Tip 2B'ye özgü bir bulgudur, MEN Tip 1 veya 2A'da bu patoloji izlenmez. Diğer seçeneklerdeki genetik/metabolik mekanizmalar gerçek veya göreceli makroglossi nedeni olarak tamamen doğrudur. DUS terminolojisinde sendrom tiplendirmesi sık kullanılan bir tuzaktır.

**Soru 2 (ID: eb9d1c30-2003-4762-9f09-170e9d28779f)**
Soru Kökü: Makroglossinin etiyolojisinde konjenital ve herediter faktörler önemli rol oynar. Buna göre, makroglossinin en sık görülen nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Vasküler malformasyonlar ve kas hipertrofisi
Açıklama: Makroglossi gelişiminin en sık karşılaşılan birincil nedenleri dokusal aşırı büyüme paterni gösteren vasküler malformasyonlar ve yapısal kas hipertrofileridir. Granülomatöz hastalıklar veya kistik kitleler de dilde büyümeye neden olabilse de bunlar konjenital temelden ziyade sekonder ve daha nadir gelişen nedenlerdir. Beckwith-Wiedemann sendromu veya Down sendromu gibi herediter tablolarda da bu yapısal doku artışları klinikte makroglossi olarak kendini gösterir.

---

### ÇİFT 232 (Benzerlik: 0.72)

**Soru 1 (ID: 20c7b0be-4a37-49b0-974b-092e75cbc087)**
Soru Kökü: 7 yaşında erkek çocuk, el ayası ve ayak tabanlarında aşırı kalınlaşma, soyulma ve süt dişlerinde erken kayıp şikayetleriyle kliniğe getiriliyor. Yapılan ağız içi muayenede yaygın periodontal cep varlığı, köklerde belirgin kemik ve ataşman kaybı saptanırken, laboratuvar testlerinde hastada otozomal resesif geçişli lökosit fonksiyon bozukluğu tespit ediliyor. Bu hastadaki klinik ve laboratuvar verilerine göre **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Papillon-Lefevre sendromu
Açıklama: Otozomal resesif olarak kalıtılan, karakteristik palmoplantar hiperkeratoz (el ve ayak tabanında kalınlaşma) ile birlikte lökosit fonksiyon bozukluğuna bağlı gelişen agresif periodontitis tablosunun bir arada görüldüğü genetik hastalık Papillon-Lefevre sendromudur. Hastalardaki nötrofil disfonksiyonu, hem süt hem de kalıcı dişlerin destek dokularında hızlı bir yıkıma yol açarak erken yaşta dişsizliğe neden olur. Sadece diş etinde fibrotik büyüme gösteren herediter fibromatozda kemik yıkımı ve hiperkeratoz bulguları bulunmaz.

**Soru 2 (ID: 8a578870-c8ff-4c3f-a114-0fde82b7008f)**
Soru Kökü: Dört yaşındaki kız çocuğu kliniğe şiddetli diş eti kanaması ve daimi diş sürmeden süt dişlerinde lüksasyon şikayetiyle getirilmiştir. Hastanın anamnezinden sistemik bir lökosit adezyon defekti olduğu öğrenilmiştir. Radyografik muayenede süt dişlerinde jeneralize şiddetli ataşman kaybı saptanmıştır. Bu klinik senaryo aşağıdaki hastalıklardan hangisi ile en uyumludur?
Doğru Şık (B): Prepubertal periodontitis
Açıklama: Prepubertal periodontitis, spesifik olarak lökosit adezyon defekti ile karakterize, 4 yaş civarı (özellikle kız) çocuklarda süt dişlerini etkileyen nadir ve şiddetli bir tablodur. En güçlü çeldirici olan Jüvenil periodontitis 5-15 yaş arasında görülür ve Actinobacillus actinomycetemcomitans ile ilişkilidir, sistemik lökosit adezyon kusuru ön planda değildir. İmmün defektin spesifik tipi hücresel yanıtı bozarak fulminan ataşman kaybı yaratır.

---

### ÇİFT 233 (Benzerlik: 0.72)

**Soru 1 (ID: d55fb047-43f0-467f-95de-78dabb36adc6)**
Soru Kökü: Epitelyal kökenli odontojenik tümörlerin yaş demografisi ve hücre histolojisi incelendiğinde, diğer odontojenik tümörlere kıyasla daha çok ileri yaş grubunda (>50 yaş) görülen, şeffaf sitoplazmalı hücrelerden ve bunları ayıran fibröz septalardan oluşan, çevre kemik dokusuna ve sınır sinir dokularına agresif infiltre olan, kötü prognozlu primer malignite aşağıdakilerden hangisidir?
Doğru Şık (B): Şeffaf hücreli odontojenik karsinom
Açıklama: Şeffaf hücreli odontojenik karsinom, odontojenik epitelden gelişen, ileri yaşlarda (ortalama 53 yaş) ortaya çıkan ve sitoplazmasında glikojen birikimine bağlı şeffaf görünümlü malign hücre kümeleriyle karakterize bir lezyondur. Bu tümör çevre kemik dokuya güçlü bir şekilde infiltre olur ve sıklıkla perinöral invazyon gösterdiği için prognozu genelde diğer odontojenik tümör tiplerinden daha kötüdür. Diğer odontojenik tümörlerin çoğu 2., 3. veya 4. dekatta görülür.

**Soru 2 (ID: ac6f4403-c704-4f36-ba50-21ede6e0e367)**
Soru Kökü: İleri yaş grubunda, 5-7. dekattaki hastalarda arka mandibulada gözlenen, histolojik olarak tümör epitel yuvaları arasında oldukça yoğun, fibrokollajenöz bir sklerotik doku üretiminin maligniteye eşlik ettiği, radyografide sınırları kötü seçilen tümör aşağıdakilerden hangisidir?
Doğru Şık (D): Sklerozan odontojenik karsinom
Açıklama: Sklerozan odontojenik karsinom; ismini de aldığı üzere, mikroskobide ince kordonlar halindeki malign epitelyal yuvaların arasında aşırı yoğun fibrokollajenöz "sklerotik" (sert, nedbeleşmiş) bir stroma barındıran nadir bir malignitedir. Stromadaki bu yoğun tepkisel desmoplazi, tümörü diğer epitel kökenli karsinomlardan ayırır.

---

### ÇİFT 234 (Benzerlik: 0.72)

**Soru 1 (ID: c88e70de-8ea9-4c08-a10f-70d1bfb87b82)**
Soru Kökü: Sistemik bir otoimmün bağ dokusu hastalığı olan sklerodermada oral kavitede görülen spesifik bulgularla ilgili aşağıdaki ifadelerden hangisi **beklenmez**?
Doğru Şık (C): Radyografik incelemede periodontal ligament boşluğunda daralma
Açıklama: Sklerodermada kollajen birikimine bağlı olarak periodontal ligament (PDL) aralığında daralma değil, tam tersine belirgin bir radyolojik genişleme meydana gelir. Lingual ve oral mukozal fibrozis doku esnekliğini yok ederek mikrostomi (ağız açma güçlüğü) ve dil hareketlerinde kısıtlılık yaratır. PDL genişlemesi bu hastalıktaki diş destek dokusu harabiyetinin klasik radyografik marker'ıdır.

**Soru 2 (ID: 2c88a34d-fdfc-46b3-8c32-d45f11f47f99)**
Soru Kökü: Skleroderma tanısı ile takip edilen 45 yaşında kadın hastanın dental radyografik incelemesinde, dişlerin çevresindeki destek dokularda karakteristik olarak aşağıdaki spesifik bulgulardan hangisinin görülmesi beklenir?
Doğru Şık (B): Periodontal ligament boşluğunda genişleme
Açıklama: Skleroderma olgularında ligamentlerdeki disfonksiyonel kollajen birikimi ve kalınlaşma, radyolojik düzeyde patognomonik olarak periodontal ligament boşluğunun uniform şekilde genişlemesi şeklinde kendini gösterir. Pamuk yünü kemik görünümü ise Paget hastalığının tipik sekeli olup skleroderma kemik mineralizasyonunu o şekilde değiştirmez. Hekim, PDL genişlemesini periapikal enfeksiyon sanmamalıdır.

---

### ÇİFT 235 (Benzerlik: 0.72)

**Soru 1 (ID: 49c1c6c1-8129-4592-b3e7-b78888d55e22)**
Soru Kökü: Özellikle ağız tabanı ve dilin ventral yüzeyinde izlenen, prekanseröz lezyonlar arasında malignite riski <%10 olarak sınıflandırılan beyaz renkli lezyonlar terminolojide aşağıdakilerden hangisiyle isimlendirilir?
Doğru Şık (D): Sublingual keratozis
Açıklama: Sublingual keratozis, anatomik yerleşimi gereği ağız tabanı ve dil altını tutan beyaz hiperkeratotik lezyonlardır. Ağız tabanı lokalizasyonunun klasik lökoplakilerde yüksek risk taşıdığı bilinse de, spesifik bir varlık olan sublingual keratozis tablosunda doğrudan malign transformasyon riski nispeten daha düşük ve <%10 bandında bildirilmiştir.

**Soru 2 (ID: df955b9f-bd42-456c-b71b-96ba02eb907c)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından 'kazınamayan ve klinik ya da patolojik anlamda başka bir hastalık olarak karakterize edilemeyen beyaz renkli yama ya da plak' şeklinde tanımlanan, %5-25 oranında karsinoma dönüşüm riski taşıyan lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, spesifik bir patolojik tanıdan ziyade kazınamayan beyaz plakları tanımlayan klinik bir terimdir ve premalign potansiyele sahiptir. Psödomembranöz kandidiyazis ise mukozadan kazınabilen beyaz plak formasyonudur.

---

### ÇİFT 236 (Benzerlik: 0.72)

**Soru 1 (ID: 72d5604a-ab3e-4755-aaa3-ecc988924dac)**
Soru Kökü: İleri yaşlı, sigara kullanan bir erkeğin sert damağında kenarları kalkık, etrafı düzensiz ülsere lezyon saptanmış ve eksizyonel biyopsi yapılmıştır. Patoloğun skuamöz hücreli karsinom (invaziv malign tümör) olarak yanlış yorumlama ihtimali en yüksek olan, aslında spontan iyileşen bu reaktif lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Nekrotizan sialometaplazi
Açıklama: Nekrotizan sialometaplazi, damak tükürük bezlerinde iskemik nekroz sonucu gelişen benign ve kendini sınırlayan reaktif bir lezyondur. Histolojisinde izlenen yoğun duktal skuamöz metaplazi ve asinüs nekrozu adacıkları, yanlışlıkla skuamöz hücreli karsinom veya mukoepidermoid karsinom olarak yorumlanıp gereksiz majör cerrahilere neden olabilir.

**Soru 2 (ID: 2c097f4e-e3da-404f-ab09-bf6e73f447b5)**
Soru Kökü: Kırk beş yaşında erkek hastanın dil dorsumunda saptanan, yüzeyi sağlam ancak pütürlü görünümlü yavaş büyüyen nodüler şişlik tamamen eksize ediliyor. İncelemeyi yapan genel patolog, yüzeydeki yassı epitel dokusunun altındaki bağ dokusuna doğru şiddetli rete peg uzantıları gösterdiğini raporluyor ve 'skuamöz hücreli karsinom invazyonu' şüphesiyle konsültasyon istiyor. Konsültan ağız patoloğu ise epitelin altında karsinom hücreleri değil, büyük, pembe, granüler sitoplazmalı hücre kordonları saptayarak maligniteyi ekarte ediyor. Bu yanıltıcı histolojik epitel bulgusunun adı aşağıdakilerden hangisidir?
Doğru Şık (C): Pseudoepitelyomatöz hiperplazi
Açıklama: Granüler hücreli tümör dilde sık yerleşen benign bir lezyondur, ancak histopatolojik incelemede üzerinde yer alan epitelde kanseri (SCC) son derece taklit eden hücresel bir aşağı büyüme reaksiyonu oluşturur. Bu görünüme 'pseudoepitelyomatöz (epitelyomatözü taklit eden) hiperplazi' denir. Yanlışlıkla kanser tanısı konmasını engellemek için, epitelin hemen altındaki büyük granüler sitoplazmalı hücre adalarının (kas veya Schwann hücre orjinli) varlığının teyit edilmesi esastır.

---

### ÇİFT 237 (Benzerlik: 0.72)

**Soru 1 (ID: f15c3a5a-c650-41fa-bf68-63fbbd642753)**
Soru Kökü: Fiziksel, kimyasal veya mikrobiyal hafif bir irritasyon sonrası gelişen 'Reversibl Pulpit' (Pulpa Hiperemisi) tablosunda, vazodilatasyon ve ödem ile sonuçlanan sinirsel etkileşimin primer tetikleyicisi aşağıdakilerden hangisidir?
Doğru Şık (B): Tones uzantıları ile irritasyonu algılayan odontoblastların sinirsel ağ ile etkileşimi
Açıklama: Pulpa hiperemisi (reversibl pulpit) sürecinde, dentin tübülleri içerisindeki Tones uzantıları (odontoblastik proçesler) uyarana maruz kaldığında bu irritasyon odontoblastik gövde üzerinden pulpadaki nosiseptif sinir ağına iletilir ve refleks vazodilatasyona (ödem) yol açar. En güçlü çeldirici olan sitokin fırtınası geri dönüşümsüz akut inflamasyona ve doku nekrozuna aittir, basit bir hiperemi yanıtı değildir. Etkenin ortadan kalkmasıyla bu refleks sistemik ödem hızla geriler.

**Soru 2 (ID: 4dcd159f-7649-4853-a99a-90808d561db2)**
Soru Kökü: I. Tomes uzantılarının fiziksel, kimyasal veya mikrobiyal irritasyonu algılaması ile başlar.
II. Odontoblastların sinirsel ağ ile girdiği etkileşim sonucu lezyon alanında belirgin damar dilatasyonu gelişir.
III. Lezyon bölgesine nötrofil ve mononükleer inflamatuar hücre göçü olmaksızın gelişen fokal bir ödem durumudur.

Reversibl pulpitin (pulpa hiperemisi) gelişim mekanizması ile ilgili yukarıdakilerden hangileri doğrudur?
Doğru Şık (E): I, II ve III
Açıklama: Reversibl pulpitte süreç tamamen fokal ve geriye dönüşümlü bir reaksiyon zinciridir. Mine veya dentin seviyesindeki bir irritasyon Tomes uzantıları vasıtasıyla odontoblastlar tarafından algılanır; hücrelerin sinir ağı ile girdiği etkileşim pulpal damarlarda ani bir vazodilatasyona (hiperemi ve ödem) neden olur. Henüz dokuda gerçek bir inflamasyon tablosu (hücresel göç) başlamadığı için etkenin uzaklaştırılması tedavide iyileşme için yeterlidir.

---

### ÇİFT 238 (Benzerlik: 0.72)

**Soru 1 (ID: 6508646f-a0e3-4ca7-ae78-f981d495db67)**
Soru Kökü: Yedi yaşında erkek çocuk; aşağı bakan gözler, mikrognati, makrostomi, şiddetli mandibula ve zigomatik kemik hipoplazisi bulgularıyla değerlendirilmektedir. Klinik olarak 'kuş veya balık benzeri' yüz görünümüne sahip bu hastada, birinci brankial ark yapılarının gelişimini bozan gendeki mutasyon aşağıdakilerden hangisidir?
Doğru Şık (C): TCOF1
Açıklama: Tarif edilen kuş/balık benzeri yüz, mikrognati ve zigomatik hipoplazi tablosu Mandibulofasiyal Dizostoz (Treacher-Collins sendromu) özellikleridir ve patogenezi TCOF1 gen mutasyonuna dayanır. Bu gen, birinci ve ikinci brankial arktan türeyen dokuların nöral krest hücresi göçünü yönetir. FGFR2 mutasyonu Crouzon sendromunda, IRF6 ise Van der Woude sendromunda izlenir.

**Soru 2 (ID: 684b93d8-d90e-499d-9a82-5197927398a1)**
Soru Kökü: Yüzün dar olması, aşağı doğru eğimli göz kapakları, belirgin zigomatik kemik hipoplazisi, mikrognati ve makrostomi ile karakterize olan Treacher-Collins sendromu (Mandibulofasiyal dizostoz), embriyolojik gelişim basamaklarında spesifik olarak hangi brankial arkı oluşturan mezenkimal dokuların gelişimsel defekti sonucunda ortaya çıkar?
Doğru Şık (B): Birinci brankial ark
Açıklama: Treacher-Collins sendromu (TCOF1 gen mutasyonu), mandibula, zigoma ve ortayüz iskeletinin yapıtaşlarını oluşturan birinci brankial arkın hücre göçü ve proliferasyonundaki aksaklıktan kaynaklanır. İkinci ark daha çok hyoid ve fasiyal kas yapılarını beslerken, birinci ark direkt çiğneme sistemi iskeletini oluşturur. Bu durum kuş/balık profili ve ayrık/yer değiştirmiş dişlerle kompleks bir tablo sunar.

---

### ÇİFT 239 (Benzerlik: 0.72)

**Soru 1 (ID: 83c73d04-9910-4dab-a8df-d622a3c82fa1)**
Soru Kökü: Konjenital sifiliz geçişi olan yenidoğanların gelişim sürecinde diş, göz ve kulak anatomisini ilgilendiren spesifik anomaliler ortaya çıkar. 
I. Keratit
II. Kama biçimli insisiv dişler ve dut biçimli molar dişler
III. Yarık damak deformitesi
IV. Sekizinci kafa çifti tutulumuna bağlı sağırlık
Buna göre, klasik Hutchinson triyadında yukarıdaki klinik bulgulardan hangileri birlikte tanımlanır?
Doğru Şık (D): I, II ve IV
Açıklama: Konjenital sifilizin klasik belirtisi olan Hutchinson triyadı tam olarak şu üç bileşenden oluşur: Dişlerde mine ve dentin gelişim defektine bağlı kama (Hutchinson) dişleri ve dut molarlar, gözde inflamatuvar keratit ve 8. sinir tutulumuna sekonder sensörinöral sağırlık. Yarık damak embriyolojik bir füzyon defekti olup Treponema pallidum enfeksiyonunun spesifik gelişimsel triyadı içerisinde yer almaz. Sistemik treponemal yayılım doğrudan ektodermal yapılara zarar vererek bu üçlü patolojiyi oluşturur.

**Soru 2 (ID: 08788acc-daa1-4e89-88a5-b6b7c4c8d6f4)**
Soru Kökü: Konjenital sifiliz patolojisinde embriyolojik evrede doku harabiyeti kaskadıyla ortaya çıkan Hutchinson triyadının bileşenlerinden biri **değildir**?
Doğru Şık (D): Korda timpani hasarına sekonder periferik fasiyal paralizi
Açıklama: Hutchinson triyadı, dental deformiteler (kama/dut dişler), oküler defekt (interstisyel keratit) ve nörolojik defekt (sensörinöral sağırlık) üçlemesinden oluşur. Bu nörolojik defekt 8. kraniyal sinirin (N. vestibulocochlearis) tahribatına bağlı gelişir, fasiyal sinir veya trigeminal sinir tutulumu triyada dâhil değildir. Periferik fasiyal paralizi, Varicella Zoster'in genikulat gangliyonda reaktivasyonu ile oluşan Ramsay Hunt sendromunda izlenir.

---

### ÇİFT 240 (Benzerlik: 0.72)

**Soru 1 (ID: 7fd9e932-674e-462b-a2c3-80de256cc12e)**
Soru Kökü: Kırk yaşında erkek hasta, ağız açma kısıtlılığı (ilerleyici trismus) şikayetiyle kliniğe başvurmuştur. Öyküsünden uzun yıllardır tütün ve betel cevizi çiğneme alışkanlığı olduğu öğrenilmiştir. Muayenede oral mukoza esnekliğini yitirmiş, atrofik değil nedbe benzeri katı ve sert bir dokuya dönüşmüştür. Bu hastadaki premalign tablo aşağıdakilerden hangisidir?
Doğru Şık (E): Oral submüköz fibrozis
Açıklama: Tütün ve betel çiğneme alışkanlığına bağlı gelişen, doku sertleşmesi ve ilerleyici trismus (ağız açma kısıtlılığı) ile karakterize prekanseröz tablo oral submüköz fibrozistir (OSF). Plummer-Vinson sendromu sistemik demir eksikliğine bağlı difüz mukoza atrofisi yaparken, OSF kronik irritasyona bağlı nedbe/fibrozis geliştirir. Her ikisi de SCC riskini artırsa da klinik prezantasyonları zıttır.

**Soru 2 (ID: fcc2b75b-dbb1-4833-b482-26c77fc36096)**
Soru Kökü: Altmış beş yaşında, uzun yıllardır tütün çiğneme alışkanlığı olan erkek hastanın alveolar mukozasında geniş, düzensiz parmaksı çıkıntılar gösteren ekzofitik bir lezyon saptanıyor. Biyopside metastaz potansiyeli çok düşük, iyi diferansiye bir epitelyal tümör izleniyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Verrüköz karsinom
Açıklama: Verrüköz karsinom; sıklıkla tütün emen/çiğneyen yaşlı erkeklerde, en sık alveolar mukoza ve yanakta yerleşen, parmaksı çıkıntılar gösteren ekzofitik ve çok iyi diferansiye bir SCC varyantıdır. Metastaz potansiyeli klasik SCC'ye göre oldukça düşüktür ve tedavisi öncelikle cerrahidir. Klasik SCC ülseratif ve daha invaziv bir paternde büyür.

---

### ÇİFT 241 (Benzerlik: 0.72)

**Soru 1 (ID: 3f03e01c-d4e0-4ebe-8159-061649516906)**
Soru Kökü: Hastanın kırık amalgam restorasyonuna komşu bukkal mukozasında saptanan beyaz plak tarzı lezyonun, diş hekimi tarafından hatalı restorasyon değiştirildikten üç hafta sonra tamamen iyileşerek ortadan kaybolduğu gözlenmiştir. Kesin kanserleşme riski barındırmayan bu lezyonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Friksiyonel hiperkeratoz
Açıklama: Friksiyonel hiperkeratoz, mekanik sürtünmeye (kırık diş, uyumsuz protez) karşı gelişen koruyucu, adaptif ve displazi içermeyen bir kalınlaşmadır. Patognomonik davranışı nedensel etken elimine edildiğinde tamamen reversibl (geri dönüşümlü) olmasıdır. İdiyopatik lökoplakilerde ise hücresel displazi geliştiği için etken kalksa dahi lezyonlar kendiliğinden kaybolmaz.

**Soru 2 (ID: cdd5cdf3-120c-499c-8f14-4be620579871)**
Soru Kökü: Dil, dudak ve yanak mukozasında tekrarlayan kronik sürtünme (travma) sonucu ortaya çıkan, displastik değişiklik barındırmayan ve etken ortadan kaldırıldığında gerileyen beyaz lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Friksiyonel hiperkeratoz
Açıklama: Friksiyonel hiperkeratoz, mekanik bir uyarana karşı epitelin koruyucu amaçla keratin tabakasını kalınlaştırmasıdır ve etken ortadan kalktığında reversibl özellik gösterir. İdiopatik lökoplaki ise herhangi bir travma veya belirgin nedene bağlanamayan, displastik değişim riski barındıran kalıcı plaktır. Teşhis, uyarana yönelik yapılan geri dönüşüm testi ile kesinleşir.

---

### ÇİFT 242 (Benzerlik: 0.72)

**Soru 1 (ID: 7fd9e932-674e-462b-a2c3-80de256cc12e)**
Soru Kökü: Kırk yaşında erkek hasta, ağız açma kısıtlılığı (ilerleyici trismus) şikayetiyle kliniğe başvurmuştur. Öyküsünden uzun yıllardır tütün ve betel cevizi çiğneme alışkanlığı olduğu öğrenilmiştir. Muayenede oral mukoza esnekliğini yitirmiş, atrofik değil nedbe benzeri katı ve sert bir dokuya dönüşmüştür. Bu hastadaki premalign tablo aşağıdakilerden hangisidir?
Doğru Şık (E): Oral submüköz fibrozis
Açıklama: Tütün ve betel çiğneme alışkanlığına bağlı gelişen, doku sertleşmesi ve ilerleyici trismus (ağız açma kısıtlılığı) ile karakterize prekanseröz tablo oral submüköz fibrozistir (OSF). Plummer-Vinson sendromu sistemik demir eksikliğine bağlı difüz mukoza atrofisi yaparken, OSF kronik irritasyona bağlı nedbe/fibrozis geliştirir. Her ikisi de SCC riskini artırsa da klinik prezantasyonları zıttır.

**Soru 2 (ID: a87736f5-8977-4146-a3a1-3a5427a24708)**
Soru Kökü: Kırk yaşındaki Uzak Doğulu erkek hasta, yanak mukozasında sertlik ve fibrotik bantlaşmalar şikayetiyle başvurmuştur. Anamnezinde uzun yıllar areka cevizi (betel) çiğnediği öğrenilen hastaya oral submüköz fibrozis tanısı konmuştur. Bu hastanın dokusundaki fibrotik ilerleme ve klinik prognoz ile ilgili aşağıdaki ifadelerden hangisi doğru bir yaklaşımdır?
Doğru Şık (A): Gelişen fibrozis dokusu geri dönüşümsüz bir karakterdedir.
Açıklama: Oral submüköz fibroziste tetiklenen lokal otoimmün veya kimyasal fibroblastik reaksiyon, dokuda sert ve esnemeyen çapraz bağlı kollajen ağları oluşturur. Bu reaksiyon alışkanlık terk edilse bile geri dönüşümsüzdür (irreversibl). Hastalığın ilk ve en net erken bulgusu, bağ dokusu sıkılaşmasına sekonder gelişen ağız açıklığı kısıtlılığıdır (trismus).

---

### ÇİFT 243 (Benzerlik: 0.72)

**Soru 1 (ID: 3a1de740-49d7-4320-a59f-0e7e371b3d75)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, dudak çevresinde beliren eritemli-mor plaklar ve her iki gözyaşı bezinde büyüme (Mikulicz sendromu) şikayetiyle başvuruyor. Alınan insizyonel biyopside non-kazeifiye granülomatöz inflamasyon saptanıyor. Bu klinik tabloyu, dudaklarda granülomatöz ödem yapan Melkersson-Rozental sendromundan ayıran en spesifik klinik bulgu kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (C): Hastada dudak çevresi mor plaklar ve lakrimal bez tutulumunun (Sarkoidoz) ön planda olması
Açıklama: Hem Sarkoidoz hem de Melkersson-Rozental sendromu orofasiyal bölgede non-kazeifiye granülomatöz inflamasyon yapar. Ancak Sarkoidozda izole dudak ödeminden ziyade dudak çevresinde eritemli-mor plaklar ve lakrimal/tükürük bezi büyümesi (Mikulicz sendromu) izlenirken; Melkersson-Rozental'de patognomonik olarak tekrarlayan fasiyal paralizi ve fissürlü dil eşlik eder. Her iki hastalıkta da ödem non-pitting karakterdedir.

**Soru 2 (ID: b6e0c757-fa02-4199-a408-15e01ac8078f)**
Soru Kökü: Ani gelişen ve saniyeler/dakikalar içinde büyüyen orofasiyal ödem ataklarıyla karakterize alerjik anjioödem tablosu ile, Melkersson-Rozental sendromundaki orofasiyal ödemin birbirlerinden ayrımında kullanılan en kritik fiziksel bulgu ve mekanistik fark aşağıdakilerden hangisidir?
Doğru Şık (E): Melkersson-Rozental sendromunda hücresel yığılıma bağlı ödemin gode bırakmayan (non-pitting) sert yapıda olması
Açıklama: Anjioödem, artmış vasküler geçirgenliğe bağlı sıvı sızması olduğu için çok hızlı gelişir ve yumuşak, gode bırakan (pitting) özelliktedir. Melkersson-Rozental sendromunda ise ödem, lenfatik kanalları tıkayan hücresel bazlı non-kazeifiye granülomatöz inflamasyon sonucu yavaş gelişir ve sıvıdan ziyade doku hücresi yığılımı olduğu için patognomonik olarak gode bırakmaz (non-pitting).

---

### ÇİFT 244 (Benzerlik: 0.71)

**Soru 1 (ID: 1e806a12-408f-42dd-9cea-459f02e13743)**
Soru Kökü: HIV enfeksiyonu olan bir hastada dilin lateral kenarlarında dikey yerleşimli, kazınamayan, beyaz ve oluklu plaklar tespit edilmiştir. Biyopsi materyalinin mikroskobik incelemesinde hiperparakeratoz, akantoz ve balon hücreleri izlenmiştir. Bu lezyon ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Yüksek oranda skuamöz hücreli karsinoma dönüşüm riski taşır.
Açıklama: Kıllı (Hairy) lökoplaki, epitel hücrelerini enfekte eden Epstein-Barr virüsü (EBV) kaynaklı reaktif bir lezyondur ve prekanseröz bir karakter taşımaz. Normal lökoplaki formları malignite riski barındırırken, kıllı lökoplaki sadece hücresel bir viral yanıttır ve malign transformasyona uğramaz. Klinik olarak kandidiyazis ile karışabilir ancak kazınamaması ile ayrılır.

**Soru 2 (ID: 74fedd52-cd38-4237-8cf5-4261a2fbce1a)**
Soru Kökü: İmmün yetmezlik virüsü (HIV) taşıyıcısı olan bir hastanın dil mukozasında saptanan, histolojik incelemesinde Epstein-Barr virüsünün (EBV) sitopatik litik etkisini yansıtan balon hücrelerinin izlendiği kıllı (hairy) lökoplaki lezyonunun, makroskopik (klinik) karakteristik görünümü aşağıdakilerden hangisidir?
Doğru Şık (C): Dilin lateral (yan) sınırlarına fikse olmuş, kazınamayan dikey (vertikal) beyaz çizgilenmeler
Açıklama: Kıllı (Hairy) lökoplakinin patognomonik lokalizasyonu spesifik olarak dilin lateral (yan) kenarlarıdır. Klinik olarak mukozaya sıkıca tutunmuş (epitelyal reaksiyon olduğu için kazınamayan), bilateral eğilimli ve dikey (vertikal) çizgilenmeler veya tüy benzeri oluklar gösteren beyaz lezyonlar formunda prezante olur. Orta hat tutulumu (tüylü dil) veya yanak tutulumu (WSN/löködem) bu lezyonun karakteristiği değildir.

---

### ÇİFT 245 (Benzerlik: 0.71)

**Soru 1 (ID: 6c217da5-63ab-40e2-9257-749e401cebcc)**
Soru Kökü: On dört yaşında bir erkek çocuk, mandibular molar bölgesinde diş sürme sorunları yaşayarak kliniğe gönderiliyor. Çekilen panoramik radyografide, gömülü diş üzerinde sınırları iyi izlenen uniloküler radyolüsen büyük bir kavite saptanıyor. Biyopsi materyalinde; embriyonik dental papillayı taklit eden yoğun mezenkimal doku stroma ile bu doku içinde dağılmış ikili (bilaminar) odontojenik epitel zincirleri görülüyor ancak diş minesine veya dentin dokusuna benzer sert madde (kalsifikasyon) seçilemiyor. Bu mikst odontojenik tümör için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom, hem epitel hem de spesifik ektomezenkimal doku (dental papilla) elementlerinin birlikte (mikst) neoplastik proliferasyonudur ve daha ileri yaştaki kompleks odontomaların immatür prekürsör lezyonu olarak görülebilir; bu nedenle henüz dentin veya mine sentezi yoktur. Epiteli ameloblastomla benzer olsa da, stroma yapısı matür bağ dokusu değil dental papilladır ve prognozu çok daha ılımlıdır.

**Soru 2 (ID: 067e984d-3bec-4113-80af-8c7e263790a7)**
Soru Kökü: Odontojenik kökenli mezenkimal tümörler arasında yer alan; klinik olarak agresif büyüme potansiyeline sahip olan, radyolojik olarak birbiri içine giren ince kemik korteksleri ile çenelerde tipik 'sabun köpüğü' destrüksiyonu yaratan ve hücresel incelemesinde uzun sitoplazmik uzantılarıyla 'yıldızsı (stellat)' hücrelerin hakim olduğu tümör aşağıdakilerden hangisidir?
Doğru Şık (D): Odontojenik miksom
Açıklama: Odontojenik miksom, jelatinöz mukopolisakkarit stroması içerisinde dağınık yıldızsı ve iğsi hücrelerle karakterize mezenkimal benign ancak lokal invaziv bir tümördür. Jelatinöz matriksi nedeniyle cerrahi temizlenmesi zor olup kemikte septalı sabun köpüğü veya bal peteği varyantı görüntüsü verir. Diğer sabun köpüğü veren lezyon Ameloblastomdur; ancak Ameloblastom epitel kökenli olup epitel adaları içerir.

---

### ÇİFT 246 (Benzerlik: 0.71)

**Soru 1 (ID: cda95bed-c1cc-4bb3-8927-64f43c8b4892)**
Soru Kökü: Orofasiyal bölgede izlenen veziküler erüpsiyonlarda, Herpes Simplex Virus (HSV) ile Varisella Zoster Virus (VZV / Zona) kaynaklı lezyonların erken klinik ayrımında Zona tanısını destekleyen en spesifik anamnez bulgusu aşağıdakilerden hangisidir?
Doğru Şık (C): Vezikül döküntülerinden önce belirgin, spesifik tek taraflı ağrı olması
Açıklama: Herpes zoster (Zona) lezyonlarının patogenezinde virüsün duyusal sinir lifleri üzerinden deriye taşınması sırasında, veziküller henüz ortaya çıkmadan önce sinir trase hattında şiddetli bir nöropatik ağrı hissedilmesi en temel ayırıcı bulgudur. HSV reaktivasyonlarında (uçuk gibi) prodromal dönem ağrıdan ziyade bölgesel kaşıntı, yanma ve karıncalanma hissiyle karakterizedir. Ayrıca Zona lezyonları anatomik olarak orta hattı geçmeyerek sıkı bir şekilde tek taraflı dermatomu takip ederler.

**Soru 2 (ID: 486cb22b-ac48-4353-9844-f2679ec70770)**
Soru Kökü: Aşağıdaki viral ajanlardan hangisinin neden olduğu vezikülobüllöz enfeksiyonun prodromal döneminde, döküntülerden **önce** lezyon bölgesinde kaşıntı ve karıncalanmadan ziyade, patognomonik olarak şiddetli nevraljik boğaz/kulak ağrısı gözlenir?
Doğru Şık (C): Varicella Zoster Virüsü
Açıklama: Herpes Zoster (Varicella Zoster Virüsü - VZV) enfeksiyonlarında, virüsün sinir trasesi boyunca anterograt taşınımı sırasındaki nöral inflamasyona bağlı olarak veziküler döküntülerden önce şiddetli nevraljik ağrı izlenir (örn. Ramsay Hunt sendromu). Herpes simpleks (HSV) enfeksiyonlarında ise prodromal faz daha çok lokal kaşıntı ve karıncalanma hissi ile seyreder. Koksaki virüslerinde ise bu şekilde tipik bir şiddetli nevraljik prodrom kaskadı bulunmaz.

---

### ÇİFT 247 (Benzerlik: 0.71)

**Soru 1 (ID: d8ddd2e0-d3b0-4a64-84b1-0d5a5fd64a3e)**
Soru Kökü: Bukkal mukozasında patognomonik ortası beyaz kırmızı lekeler tespit edilen bir hastadan alınan mukozal doku örneğinde, lezyona ait karakteristik multinükleer dev hücreler gözlenmiştir. Çocukluk çağı enfeksiyonlarından kızamık patogenezine spesifik olan bu dev hücrelerin histolojik adı aşağıdakilerden hangisidir?
Doğru Şık (C): Warthin-Finkeldey hücreleri
Açıklama: Kızamık enfeksiyonunun mukozal ve lenfoid doku invazyonunda virüsün yol açtığı epiteliyal sinsityum oluşumu sonucu oluşan çok çekirdekli yapıların histolojik adı Warthin-Finkeldey dev hücreleridir. Langhans hücreleri Tüberküloz'da (granülomatöz hastalık), Aschoff hücreleri Romatizmal Ateş'te, Reed-Sternberg ise Hodgkin lenfomada görülen hücresel anormalliklerdir. Koplik lekelerinin tabanındaki mikroskobik inceleme, kızamık tanısını netleştiren bu dev hücreleri barındırır.

**Soru 2 (ID: f81483d6-13b3-4eb9-ab09-58e25bbc2874)**
Soru Kökü: Çocukluk çağında geçirilen ağır viral enfeksiyonların oral bulguları incelendiğinde, kızamık patofizyolojisinde izlenen ve virüsün konak epitel hücre membranlarında kaynaşma yaratarak nükleusların tek bir sitoplazmada birikmesine neden olan histopatolojik karakteristik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Whartin-Finkeldey dev hücreleri
Açıklama: Kızamıkta virüsün majör sitopatik etkisi, enfekte epitel ve lenfoid hücrelerin membranlarını kaynaştırarak (füzyon) oluşturduğu Whartin-Finkeldey dev hücreleridir. Tüberküloz veya sifilizde izlenen makrofaj kökenli Langhans dev hücrelerinin aksine, bu hücreler granülomatöz bir inflamasyonun değil, doğrudan viral membran füzyonunun yapısal bir sonucudur. Mikrobiyolojik ve histolojik ayrımda bu hücresel köken farkı esastır.

---

### ÇİFT 248 (Benzerlik: 0.71)

**Soru 1 (ID: 0c5e8452-034b-4f3b-bc85-6aa288aaa997)**
Soru Kökü: Epitel hücrelerindeki desmozomal defekt ve disfonksiyon sonucu hücreler arası adezyonun bozulduğu, yanak mukozası ve diş etlerinde 'kaldırım taşı' görünümü veren beyaz kabarıklıkların izlendiği otozomal dominant geçişli hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Foliküler keratozis
Açıklama: Foliküler keratozis (Darier hastalığı), ATP2A2 gen mutasyonu kaynaklı desmozomal disfonksiyon ile seyreden ve oral mukozada tipik olarak kaldırım taşı görünümü veren bir hastalıktır. Herediter benign intraepitelyal diskeratoziste (Witkop hastalığı) desmozomal kayıptan ziyade bukkal ve konjonktival plaklar ön plandadır. Hastalığın seboreik bölgeleri tutması ayırıcı tanıda önemlidir.

**Soru 2 (ID: 87c7de79-0ecc-4579-992b-722ed79232f0)**
Soru Kökü: Foliküler keratozis (Darier Hastalığı), seboreik bölgelerde ve oral mukozada 'kaldırım taşı' görünümü oluşturan beyaz kabarıklıklarla seyreder. Bu hücresel kohezyon kaybının (akantoliz) moleküler mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): ATP2A2 mutasyonuna bağlı intrahücreler kalsiyum pompası ve desmozom disfonksiyonu
Açıklama: Darier hastalığının temelinde endoplazmik retikulum kalsiyum pompasını kodlayan ATP2A2 genindeki mutasyon yatar. Kalsiyum dengesinin bozulması, keratinositleri birbirine bağlayan kalsiyum-bağımlı desmozomların defektine ve hücresel adezyon kaybına yol açarak kaldırım taşı (cobblestone) döküntülerini üretir.

---

### ÇİFT 249 (Benzerlik: 0.71)

**Soru 1 (ID: 90fecb4f-ecfb-4758-a083-e2419a553cc1)**
Soru Kökü: Bir mandibula rezeksiyon materyalinde hem karsinomatöz hem de sarkomatöz komponentler barındıran bir kitle izlenmiş ve her iki bileşende de belirgin sitolojik atipi tespit edilmiştir. Patolog, bu tablonun 'odontojenik karsinosarkom' olarak kodlanabilmesi için lezyonun aşağıdaki patolojilerden hangisi **olmadığını** kesinlikle kanıtlamalıdır?
Doğru Şık (D): İğsi hücreli karsinom
Açıklama: İğsi hücreli karsinom (sarkomatoid karsinom), aslında saf bir karsinom olmasına rağmen hücrelerin iğsi (sarkom benzeri) dejenerasyonu nedeniyle bifazik karsinosarkomu taklit edebilir. Odontojenik karsinosarkom tanısı koyabilmek için gerçek bir epitelyal (karsinom) ve ektomezenkimal (sarkom) kökenin kanıtlanması, iğsi hücre metaplazisinin dışlanması gerekir.

**Soru 2 (ID: ca158551-8926-4fc9-b9fd-cf66edc16368)**
Soru Kökü: Odontojenik karsinosarkom patolojisini, malign odontojenik sarkomlardan ayıran en temel mikroskobik özellik aşağıdakilerden hangisinde doğru olarak ifade edilmiştir?
Doğru Şık (B): Karsinosarkomda her iki bileşende de (karsinom ve sarkom alanları) eş zamanlı olarak belirgin sitolojik atipi ve malignite özellikleri izlenir.
Açıklama: 'Karsinosarkom' terimi patolojide daima epiteliyal karsinom ve mezenkimal sarkom olmak üzere iki farklı doku kökeninin aynı anda malignite sergilediği tümörleri ifade eder. Odontojenik sarkomlarda ise tümörün sadece mezenkimal stroma (ektomezenkim) komponenti maligndir, epitel hücreleri kordonları reaktif ve sitolojik olarak benigndir (hafif epitelyal bileşen). Bu nedenle mikst malignite olgularında her iki dokunun anaplazisi tanı koydurucudur.

---

### ÇİFT 250 (Benzerlik: 0.71)

**Soru 1 (ID: 9072cdf6-a634-4fec-b50e-da08cf6db10b)**
Soru Kökü: Kızamık enfeksiyonunun patofizyolojisinde, sistemik viremi fazının başlattığı kaskad sonucu oral mukozada hücresel yanıt belirmektedir. Tanı açısından kritik öneme sahip olan bu süreçle ilgili aşağıdaki ifadelerden hangisi **en az olasıdır**?
Doğru Şık (C): Koplik lekeleri ortası beyaz, çevresi eritemli veziküllerdir ve hızla rüptüre olurlar.
Açıklama: Kızamıkta görülen Koplik lekeleri vezikül (içi sıvı dolu kabarcık) DEĞİLDİR; maküler yapıda, ortası beyaz küçük kırmızı lekelerdir. Koksaki veya Herpes virüslerin aksine, kızamık lezyonları rüptüre olan vezikülobüllöz bir kaskad izlemez. Lekelerin Stensen kanalı etrafında çıkması ve deri raşından kronolojik olarak önce belirmesi ise en güçlü tanısal verilerdir.

**Soru 2 (ID: 15ba2a82-a8f2-4389-950a-66ac970e01f1)**
Soru Kökü: Kızamık enfeksiyonunun mukozal ve hücresel kinetiği değerlendirildiğinde aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Histopatolojide hücresel bağışıklık sonucu makrofaj kökenli Langhans tipi dev hücreler görülür.
Açıklama: Kızamığın histopatolojik karekteristiği olan Whartin-Finkeldey dev hücreleri hücresel bağışıklıkla (makrofaj birleşimiyle) değil, virüsün direkt konak epitel hücre membranlarını kaynaştırması (füzyon) sonucu gelişir. Makrofaj kökenli Langhans dev hücreleri sifiliz veya tüberküloz gibi granülomatöz hastalıklarda görülür.

---

### ÇİFT 251 (Benzerlik: 0.71)

**Soru 1 (ID: 1183fde7-a065-4e94-8dcb-3006e874a548)**
Soru Kökü: Dört yaşında erkek çocuk hasta, yüksek ateş ve halsizlik şikayetiyle kliniğe getiriliyor. Yapılan oral muayenede sadece yanak mukozasında, Stensen kanalı çevresinde lokalize ortası beyaz ve eritemli küçük lekeler izleniyor. Hastanın derisinde herhangi bir döküntü tespit edilmiyor. Vaka takdimine göre tanıyı kesinleştiren klinik özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik deri döküntüleri (raş) başlamadan önce bukkal mukozada patognomonik enantemlerin belirmesi
Açıklama: Kızamık enfeksiyonunun en erken patognomonik bulgusu, virüsün epitelyotropik afinitesine sekonder olarak deride raş başlamadan kronolojik olarak önce oral mukozada beliren Koplik lekeleridir. Bu lezyonlar veziküler olmayan maküler yapıdadır ve spesifik olarak Stensen kanalı etrafında (bukkal mukoza) izlenir. Şıklardaki hiperemik papilla uzaması (çilek dil) tablosu, lezyon farklılığı üzerinden ekarte edilen kızıl hastalığına aittir.

**Soru 2 (ID: cf174e38-4633-4dd1-9643-b4e04ea0e9e8)**
Soru Kökü: Beş yaşında erkek hasta, kreşte başlayan yüksek ateş ve yutkunma güçlüğü şikayetiyle kliniğe getiriliyor. Yapılan muayenede sert damak ve dil mukozasında ağrılı, eritematöz halolu ülserasyonlar; ayrıca ayak tabanlarında çok sayıda sıvı dolu vezikül saptanıyor. 
Bu hastada klinik ayırıcı tanıda rekürren aftöz stomatiti kesin olarak ekarte eden majör bulgu zinciri aşağıdakilerden hangisidir?
Doğru Şık (D): Hastada ekstremite döküntüsünün (ayak tabanı) tabloya eşlik etmesi ve lezyonların veziküler faz içermesi
Açıklama: Klinik takdim El-Ayak-Ağız Hastalığını işaret etmektedir. Aftöz stomatit sadece intraoral (hareketli mukozada) vezikül fazı olmayan ülserler yapar ve ekstremitelerde döküntü oluşturmaz. Hastanın ayak tabanında vezikül saptanması, aftı tamamen kurgu dışı bırakarak tanıyı viral etyolojiye sabitler.

---

### ÇİFT 252 (Benzerlik: 0.71)

**Soru 1 (ID: a9606e99-509a-45fb-97ae-fe1cd54f68ed)**
Soru Kökü: Orofasiyal bölgede vezikülobüllöz patoloji yaratan ajanlardan Herpes Simpleks Virüsü (HSV), epitel hücrelerinde çoğalırken hücreler arası bağların kopmasına neden olur. Mukozada intraepitelyal sıvı yığılımı ile sonuçlanan bu spesifik histopatolojik hücresel yıkım sürecinin adı aşağıdakilerden hangisidir?
Doğru Şık (D): Akantolizis
Açıklama: HSV'nin litik replikasyon döngüsü sırasında keratinositler arasındaki bağların kopması ve hücre lizisi sürecine akantolizis denir. Bu süreç mukozada intraepitelyal sıvı toplanmasına ve klinik olarak birkaç milimetrelik veziküllerin oluşmasına yol açar. Granülomatöz reaksiyonlar (füzyon/Langhans) hücresel bağışıklık patolojilerinde görülürken, vezikül formasyonu akantolitik yıkımın doğrudan sonucudur.

**Soru 2 (ID: 4c3b3dc9-12fe-448d-af20-728f822f7f3d)**
Soru Kökü: Doku yıkım paterni ve hücresel yansımaları karşılaştırıldığında, vezikülobüllöz bir patoloji olan Herpes Simpleks Enfeksiyonu (HSV) ile yüzeysel mantar patolojisi olan Kandida arasındaki en belirgin patofizyolojik kaskad farklılığı aşağıdakilerden hangisidir?
Doğru Şık (B): HSV litik döngü ile intraepitelyal veziküler sıvı yığılımı yaparken, Kandida vezikülsüz yüzeyel psödomembran birikimi yapar.
Açıklama: Herpes enfeksiyonunun karakteristik doku harabiyeti, hücre içi litik replikasyon sonucu akantolizisle intraepitelyal bariyerin kopması ve sıvı birikerek vezikül formasyonu oluşmasına dayanır. Kandida (mantar) ise vezikülobüllöz epitel içi yıkım (hücre lizisi/sıvı cebi) yapmaz; epitelin yüzeyinde mantar hifleri, dökülmüş epitel ve nötrofil atıklarından oluşan kalın bir yüzeyel psödomembran tabakası biriktirir. Hastalıkların epitel bariyeri üzerindeki mekanik etki farkı bu hücresel mekanizmayla tanımlanır.

---

### ÇİFT 253 (Benzerlik: 0.71)

**Soru 1 (ID: ca598b99-aabf-4453-910a-983d77941268)**
Soru Kökü: On beş yaşındaki hastada yanak ve diş etlerinde diskeratotik beyaz kabarıklıklar, saçlı deride seboreik döküntüler ve biyopsisinde 'akantoliz' saptanmıştır. Bu klinik antiteye sahip bir hastanın teşhis aşamasında, DUS terminolojisinde sıklıkla karıştırılan 'Darier belirtisi' kavramının patofizyolojik karşılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Mastositoz olgularında lezyonlu derinin kaşınmasıyla histamin deşarjına bağlı ödem ve eritem gelişmesi
Açıklama: DUS komitelerinin klasik terminoloji tuzağıdır. Vakada tanımlanan ve akantoliz ile seyreden genetik (ATP2A2) hastalık 'Darier Hastalığı' (Foliküler Keratoz) iken; 'Darier Belirtisi', mastositoz lezyonlarının fiziksel olarak kaşınmasıyla mast hücrelerinden histamin deşarj olması sonucu lokalize ödem (ürtiker) ve kızarıklık oluşması fenomenidir. İkisi tamamen farklı patolojilerdir.

**Soru 2 (ID: 87c7de79-0ecc-4579-992b-722ed79232f0)**
Soru Kökü: Foliküler keratozis (Darier Hastalığı), seboreik bölgelerde ve oral mukozada 'kaldırım taşı' görünümü oluşturan beyaz kabarıklıklarla seyreder. Bu hücresel kohezyon kaybının (akantoliz) moleküler mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): ATP2A2 mutasyonuna bağlı intrahücreler kalsiyum pompası ve desmozom disfonksiyonu
Açıklama: Darier hastalığının temelinde endoplazmik retikulum kalsiyum pompasını kodlayan ATP2A2 genindeki mutasyon yatar. Kalsiyum dengesinin bozulması, keratinositleri birbirine bağlayan kalsiyum-bağımlı desmozomların defektine ve hücresel adezyon kaybına yol açarak kaldırım taşı (cobblestone) döküntülerini üretir.

---

### ÇİFT 254 (Benzerlik: 0.71)

**Soru 1 (ID: 08cbf39c-5e38-4335-8b06-a08f9c08866e)**
Soru Kökü: Ağız köşelerinde fissür, kızarıklık ve kabuklanma ile karakterize olan ve kandidiyazisin 'eritem' alt grubunda sınıflandırılan patoloji aşağıdakilerden hangisidir?
Doğru Şık (A): Angular şeylitis
Açıklama: Angular şeylitis (stomatitis), komissüralarda maserasyon ve eritemle giden ve oral kandidiyazisin eritem alt grubunda sınıflandırılan enfeksiyöz bir durumdur. Aktinik cheilitis dudaklarda görülse de güneşe (UV) bağlı gelişen premalign bir keratinizasyon bozukluğudur ve enfeksiyöz karakter taşımaz. Bu ayırım doğru antifungal tedavinin seçimi için elzemdir.

**Soru 2 (ID: 2d5cf47f-f88e-45d3-804f-85dd93d21eb4)**
Soru Kökü: Klinik olarak 'pamukçuk', 'eritem' ve 'keratin artışı' şeklinde üç temel paterne ayrılan oral kandidiyazis olgularında, aşağıdaki lezyonlardan hangisi **eritem** alt grubunda yer almaz?
Doğru Şık (D): Kandidal lökoplaki
Açıklama: Kandidal lökoplaki (kronik hiperplastik kandidiyazis), mukoza yüzeyinde epitel hiperplazisi ve keratin artışı ile karakterize grupta yer alır ve premaligndir. Akut antibiyotik stomatiti, angular şeylitis, jeneralize eritem ve protez stomatiti ise eritem (kızarıklık) paterni gösteren kandidiyazis formlarıdır. Bu sınıflama mukozanın klinik muayene ile doğru yorumlanmasını sağlar.

---

### ÇİFT 255 (Benzerlik: 0.71)

**Soru 1 (ID: 38221896-8e76-4a0c-983f-90396a0f78ea)**
Soru Kökü: Çok sayıda odontojenik keratokist, palmar çukurlar ve geniş baş çevresi ile karakterize, kromozom 9q22.3-q31 lokalizasyonundaki tümör süpresör gen mutasyonuna bağlı sonic-hedgehog sinyal yolağının hatalı çalışmasıyla ortaya çıkan sendromda mutasyona uğrayan gen aşağıdakilerden hangisidir?
Doğru Şık (B): PTCH
Açıklama: Gorlin (Nevoid bazal hücreli karsinom) sendromu, sonic-hedgehog yolağını baskılayan PTCH genindeki inaktive edici mutasyonlar sonucu gelişen ve multipl bazal hücreli karsinom ile odontojenik keratokistlerin eşlik ettiği otozomal dominant bir tablodur. SH3BP2 mutasyonu cherubizmde, FGFR2 mutasyonu Crouzon sendromunda izlenir. Bu hastalarda erken yaşta tespit edilen keratokistler sendromun ilk klinik belirteci olabilir.

**Soru 2 (ID: b0ee0228-4c19-4596-8172-62f864a7f88a)**
Soru Kökü: PTCH geni mutasyonu sonucu gelişen, sonic-hedgehog yolağının baskılandığı Gorlin (Nevoid Bazal Hücreli Karsinom) sendromunda klinik olarak %50 ve üzerinde rastlanan majör bulgular arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (E): Kalsifiye ovarian fibromlar
Açıklama: Kalsifiye ovarian fibromlar Gorlin sendromunun %15-49 bandında görülen minör/düşük frekanslı bulguları arasındadır. Multipl OKC, bazal hücreli karsinomlar ve kalsifiye falks serebri ise sendromun %50 üzeri sıklıkta görülen klasik tanı koydurucu patolojileridir. PTCH mutasyonunun bilinmesi ve OKC birlikteliği sendromun dental pratikte erken teşhisini sağlar.

---

### ÇİFT 256 (Benzerlik: 0.71)

**Soru 1 (ID: 167d4aec-1eed-4a21-8ec6-0f79ac605742)**
Soru Kökü: Çenelerde en sık görülen inflamatuvar kökenli lezyon olan radiküler (periapikal) kist ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): İlgili dişin pulpasının canlı (vital) olması tanı için karakteristiktir.
Açıklama: Radiküler kist, çürük veya travma sonucu canlılığını yitirmiş (nekrotik pulpalı) dişlerin kök ucunda gelişen enfeksiyon zemininde oluşur; dolayısıyla ilgili diş canlı (vital) değildir. İlgili dişin canlı olduğu ve genellikle 3. büyük azıların bukkal servikalinde perikoronitis sonucu gelişen lezyon, enflamatuvar kistlerin bir diğer türü olan paradental kisttir. Radiküler kist epitelinde keratinizasyon beklenmez, non-keratinize yassı epitel karakteristiktir.

**Soru 2 (ID: 2a3bdc83-5125-4d1e-ac3d-fd6e74d15239)**
Soru Kökü: Yirmi iki yaşında erkek hasta, alt sağ 20 yaş dişi bölgesinde şişlik ve ağrı şikayetiyle başvuruyor. Radyografik muayenede yarı gömülü dişin kuronunun bukkal yüzeyinde başlayıp kök bifurkasyonuna uzanan radyolusent bir kistik lezyon saptanıyor. Dişe uygulanan vitalite testi pozitif yanıt veriyor ve hastanın geçmişte aynı bölgede perikoronitis atakları geçirdiği öğreniliyor. Bu hastadaki **en olası** kist tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Paradental kist
Açıklama: Paradental (bukkal bifurkasyon) kist, inflamatuar kaynaklı bir kist olmasına rağmen radiküler kistten farklı olarak vital (canlı) dişlerde ve sıklıkla alt 3. molar dişlerin perikoronitis atakları sonrasında servikal periodontal dokudan gelişir. En güçlü distraktör olan dentigeröz kist gelişimsel kökenli olup tam gömülü diş kuronunu mine-sement sınırından sararken, paradental kist dişin canlı kalması ve bukkal servikal/bifurkasyon yerleşimi ile ayrılır.

---

### ÇİFT 257 (Benzerlik: 0.71)

**Soru 1 (ID: b0eec7e3-a364-47cf-9a5c-4c71ddd6ea9d)**
Soru Kökü: Boyun ön-yan bölgesinde yerleşen, histolojik olarak yassı epitel ve altında lenfoid doku barındıran kistik lezyonlarla ilgili olarak aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (A): Dil hareketinden etkilenmez.
Açıklama: Servikal lenfoepitelyal kistler (brankial yarık kistleri), yassı epitel ve lenfoid dokudan oluşur, lateral yerleşimli olup yutkunma ya da dil hareketiyle mobilize olmazlar (dil hareketinden etkilenmezler). Tiroglossal kanal kistleri ise boyun orta hattında yer alır ve dil hareketiyle yukarı aşağı yönde hareket ederler. Kistin lokalizasyonu ve hareket karakteristiği fizik muayenedeki en önemli ayrımdır.

**Soru 2 (ID: f78a2a96-5b3d-49a8-8689-5594eb80f346)**
Soru Kökü: Boyun bölgesinde gelişen gelişimsel bir kist olan brankial kleft kisti ile ilgili olarak aşağıdaki bulgulardan hangisi **yanlıştır**?
Doğru Şık (B): Yutkunma fonksiyonu ve dil hareketleri ile birlikte yukarı aşağı hareket eder.
Açıklama: Brankial kleft kisti embriyolojik brankial arkların kapanma defektlerinden oluşur ve boynun lateral alanında yer aldığı için dil köküyle anatomik bağı yoktur; bu nedenle dilin hareketiyle yer değiştirmez. Dil hareketleri ve yutkunma ile asansör gibi yukarı-aşağı hareket eden kist, foramen çekuma bağlı olan tiroglossal kanal kistidir. Lenfoepitelyal karakteri (epitel altı yoğun lenfosit folikülleri) patognomonik histolojik bulgusudur.

---

### ÇİFT 258 (Benzerlik: 0.71)

**Soru 1 (ID: 0c5e8452-034b-4f3b-bc85-6aa288aaa997)**
Soru Kökü: Epitel hücrelerindeki desmozomal defekt ve disfonksiyon sonucu hücreler arası adezyonun bozulduğu, yanak mukozası ve diş etlerinde 'kaldırım taşı' görünümü veren beyaz kabarıklıkların izlendiği otozomal dominant geçişli hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Foliküler keratozis
Açıklama: Foliküler keratozis (Darier hastalığı), ATP2A2 gen mutasyonu kaynaklı desmozomal disfonksiyon ile seyreden ve oral mukozada tipik olarak kaldırım taşı görünümü veren bir hastalıktır. Herediter benign intraepitelyal diskeratoziste (Witkop hastalığı) desmozomal kayıptan ziyade bukkal ve konjonktival plaklar ön plandadır. Hastalığın seboreik bölgeleri tutması ayırıcı tanıda önemlidir.

**Soru 2 (ID: 112204b7-a389-4bf0-9429-7da3a7f77544)**
Soru Kökü: Sekiz yaşındaki hastanın yanak mukozasında yaygın kalın beyaz plaklar saptanıyor. Göz hekimi konsültasyonunda, hastanın korneal limbus bölgesinde konjonktival plakların varlığı tespit ediliyor. Histolojik incelemesinde hiperplazi ve diskeratotik hücreler izlenen, kendini sınırlayan bu otozomal dominant patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Herediter benign intraepitelyal diskeratozis (Witkop Sendromu)
Açıklama: Witkop-Von Sallmann Sendromu (Herediter benign intraepitelyal diskeratoz), ektodermal kökenli hücrelerdeki defekte bağlı olarak patognomonik şekilde eşzamanlı oral beyaz lezyonlar ve gözde (korneal limbusta) konjonktival plaklarla seyreden kalıtsal bir sendromdur. Darier hastalığı seboreik deriyi tutarken oküler bulgu vermez; Beyaz Sünger Nevüs ise sadece oral mukoza ile sınırlıdır.

---

### ÇİFT 259 (Benzerlik: 0.71)

**Soru 1 (ID: 2e791a06-8653-4969-9c5d-6bf03504e4ec)**
Soru Kökü: Konjenital sifilizde sekteye uğrayan morfodiferansiyasyon kaskadı ile sonradan kazanılmış (edinsel) sifilizin tersiyer gom evresi karşılaştırıldığında, edinsel sifilizde kama kesici veya dut molar gibi dental deformasyonların **görülmemesinin** temel embriyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Diş anatomik yapılarının morfogenez (şekillenme) aşamasının intrauterin/perinatal dönemde tamamlanmış olması
Açıklama: Konjenital sifilizin dental deformasyonlar (kama/dut diş) yaratmasının nedeni, enfeksiyonun tam da diş germlerinin şekillendiği (organogenez/morfodiferansiyasyon) embriyolojik döneme denk gelmesidir. Edinsel sifiliz hayatın ilerleyen yıllarında bulaştığı için, anatomik şekillenmesini çoktan tamamlamış olan dişlerde gelişimsel bir deformite (şekil bozukluğu) yaratamaz; ancak yumuşak dokularda granülomatöz destrüksiyon (gom) yapar.

**Soru 2 (ID: 5e659956-8c94-47f7-8f2e-e1e2ba00288f)**
Soru Kökü: Daimi dentisyon aşamasında tespit edilen diş gelişim defektlerinin etiyopatogenezi değerlendirildiğinde, kızamık enfeksiyonunun yarattığı mine hipoplazisini, konjenital sifilizin yarattığı Hutchinson dişlerinden ayıran temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Sifilizde spiroket invazyonu morfodiferansiyasyonu bozarken, kızamıkta yüksek ateşin ameloblastları inhibe etmesi
Açıklama: Konjenital sifilizde spiroketlerin diş germine direkt invazyonu, embriyolojik organogenez evresindeki morfodiferansiyasyonu bozarak dişin anatomik şeklini (kama/dut formunda) kalıcı olarak değiştirir. Buna karşın kızamıkta anatomik bir şekil bozukluğu değil, yüksek ateşe bağlı olarak ameloblastların sentez fonksiyonunun durması sonucu matriks eksikliğini ifade eden bantlar tarzında 'mine hipoplazisi' izlenir. Lokalize tek diş tutulumu ise Turner hipoplazisinin karakteristiğidir.

---

### ÇİFT 260 (Benzerlik: 0.71)

**Soru 1 (ID: 4d477bee-4244-4323-990f-0fd9131d41a5)**
Soru Kökü: Ağız içerisinde en sık gözlenen intra-oral malignite olan dil skuamöz hücreli karsinomunun tipik (postero-lateral) yerleşim bölgesindeki bir lezyon, lenfatik yayılımını **en sık** aşağıdaki bölgelerden hangisine yapar?
Doğru Şık (E): Aynı taraf boyun (submandibular, jugulodigastrik) lenf nodlarına
Açıklama: Dilin skuamöz hücreli karsinomları en sık dilin postero-lateral kenarına yerleşir ve anatomik drenajı gereği aynı taraf submandibular ile derin servikal zincirin üst grubu olan jugulodigastrik lenf nodlarına erken ve sık metastaz yapar. Submental nodlar alt dudak kanserlerinin primer drenaj yolu iken, dilin postero-lateral lezyonları lateral boyun zincirini hedefler, bu nedenle prognozu dudak tümörlerine göre çok daha kötüdür.

**Soru 2 (ID: 20c62b66-8560-4576-9e12-63c4113a4f57)**
Soru Kökü: Altmış beş yaşında erkek hasta, alt dudak vermilyon sınırında iyileşmeyen ülsere ve ekzofitik lezyon şikayetiyle başvuruyor. İnsizyonel biyopsi sonucu skuamöz hücreli karsinom olarak raporlanıyor. Bu hastada lenfatik metastaz açısından ilk olarak değerlendirilmesi gereken bölgesel lenf nodları aşağıdakilerden hangisidir?
Doğru Şık (A): Submental ve sublingual lenf nodları
Açıklama: Alt dudak vermilyon sınırına yerleşen skuamöz hücreli karsinomlar tipik olarak lokal submental ve sublingual lenf nodlarına yayılım gösterirler. Dilin postero-lateral sınırına yerleşen karsinomlar ise en güçlü çeldirici olan jugulodigastrik (submandibular) lenf nodlarına metastaz yaparlar. Dudak karsinomlarının genel prognozu iyi olup, lenf nodu metastazı diğer oral kanserlere oranla daha nadirdir.

---

### ÇİFT 261 (Benzerlik: 0.71)

**Soru 1 (ID: 185049ee-9f32-485b-a9c2-205f4d9010e0)**
Soru Kökü: On dört yaşında kadın hasta, üst ön dişlerinde sürme eksikliği ve sert şişlik şikayetiyle muayene ediliyor. Radyografide maksilla anterior bölgede gömülü bir kanin dişini çevreleyen, dentigeröz kiste benzeyen ancak içerisinde punktat (noktasal) radyoopak kalsifikasyonlar barındıran bir lezyon saptanıyor. Histolojisinde duktus benzeri boşluklar oluşturan epitelyal rozetler izleniyor. Bu hasta için en olası odontojenik tümör tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Adenomatoid odontojenik tümör
Açıklama: Adenomatoid odontojenik tümör (AOT); genç kadınlarda, ön maksilla yerleşimli ve tipik olarak gömülü bir kanin dişi ile ilişkili olan, bez yapısını taklit eden benign bir proliferasyondur. Kalsifiye epitelyal odontojenik tümör (Pindborg tümörü) de radyoopak odaklar içerse de lokalizasyon tipik olarak posterior mandibuladır ve ileri yaşta görülür. AOT hamartomatöz kabul edildiği için basit enükleasyon yeterlidir.

**Soru 2 (ID: 4f9a1924-47a5-401b-bc18-1d551c2276c7)**
Soru Kökü: Otuz beş yaşında bir hastanın anterior maksillasında tespit edilen, diş taşıyan alveolar bölgelerde gelişmiş bir tümörün histolojik incelemesinde; sıkıca paketlenmiş, sitolojik olarak masum epitel adacıkları ve bu adacıklarda anlamlı keratinizasyon olmaksızın gelişen tek tip skuamöz farklılaşma izleniyor. Ancak adacıkların periferinde palizatlaşma (çitlenme) veya merkezde stellat retikulum (yıldızsı) benzeri gevşek ağsı yapı gözlenmemiştir. Tablo özellikleri referans alındığında bu lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Skuamöz odontojenik tümör
Açıklama: Dünya Sağlık Örgütü sınıflandırma tablolarında spesifik olarak vurgulandığı üzere, Skuamöz odontojenik tümör (ortalama yaş 34.8); anlamlı keratinizasyon göstermeyen, sıkıca paketlenmiş ve atipisiz skuamöz epitel adalarından oluşur. En önemli ayırıcı özelliği ise, ameloblastomda tipik olarak beklenen periferik palizatlaşmanın ve merkezi stellat retikulum yapısının bu tümörde BİLHASSA OLMAMASIDIR. Bu sayede ameloblastom varyantlarından kolayca ayrılır.

---

### ÇİFT 262 (Benzerlik: 0.71)

**Soru 1 (ID: 091d6f35-7b71-472c-b784-7ed1e4390251)**
Soru Kökü: Diş hekimliğinde sıklıkla karşılaşılan rekürren aftöz stomatit vakalarının bazılarında altta yatan sistemik patolojiler araştırılmalıdır. Aşağıdakilerden hangisi rekürren aftöz stomatit gelişimi için tanımlanmış sistemik etiyolojik faktörlerden biri **değildir**?
Doğru Şık (E): Multipl endokrin neoplazi tip 2B
Açıklama: Multipl endokrin neoplazi tip 2B (MEN 2B) sendromu ağız içinde spesifik olarak mukozal nöromalar ve makroglossi tablosuyla prezente olur, klasik olarak hücresel immünite bozukluğuna bağlı aftöz stomatit üreten sendromlardan biri değildir. Buna karşılık Çölyak hastalığı, siklik nötropeni, inflamatuvar bağırsak hastalıkları ve İgA eksikliği doğrudan hücresel savunma veya emilim defekti yaratarak kronik tekrarlayan aftların etiyolojik zeminini oluşturur.

**Soru 2 (ID: 245289a3-16e7-4d35-8a49-cef4c183fe88)**
Soru Kökü: Aşağıdaki hastalıklardan hangisi rekürren aftöz stomatit (RAS) etyolojisinde rol oynayan ve gastrointestinal sistem bulgularına eşlik eden durumlardan biridir?
Doğru Şık (C): Çölyak hastalığı
Açıklama: Çölyak hastalığı, glutene karşı gelişen otoimmün duyarlılık sonucu intestinal villus atrofisiyle giden bir malabsorpsiyon sendromudur ve demir, folat, B12 eksikliklerine yol açarak rekürren aftöz stomatit gelişimine zemin hazırlar. Peutz-Jeghers sendromu ise oral aftla değil perioral melanotik pigmentasyon ve bağırsak polipleriyle seyreder. Beslenme ve emilim defektleri mukoza bütünlüğünü sekteye uğratır.

---

### ÇİFT 263 (Benzerlik: 0.71)

**Soru 1 (ID: 8a19d3b6-2606-405e-8bf4-79246b99961a)**
Soru Kökü: Dudak ve yanak mukozasında ani gelişen şişlik şikayetiyle başvuran iki farklı hastadan birinde idiyopatik Bell paralizisi, diğerinde ise Melkersson-Rozental sendromu teşhis edilmiştir. Bu iki hastanın klinik prezentasyonunda izlenen nörolojik yüz felci (fasiyal paralizi) tablosunu birbirinden ayıran temel farklılık aşağıdakilerden hangisidir?
Doğru Şık (C): Bell paralizisi izole ve idiyopatik seyrederken, Melkersson-Rozental'de yüz felcine mutlaka otonom granülomatöz doku ödeminin eşlik etmesi
Açıklama: Her iki patolojide de 7. kraniyal sinir (Nervus facialis) tutulur ve periferik yüz felci görülür. Ancak Bell paralizisi sıklıkla izole, etiyolojisi tam aydınlatılamamış (veya viral zeminli) tekil bir olaydır. Melkersson-Rozental sendromunda ise yüz felci asla izole değildir; sendromun bir parçası olarak granülomatöz infiltrasyona sekonder (ödeme bağlı mekanik bası) gelişir ve kliniğe dudak şişliği eşlik eder.

**Soru 2 (ID: b6e0c757-fa02-4199-a408-15e01ac8078f)**
Soru Kökü: Ani gelişen ve saniyeler/dakikalar içinde büyüyen orofasiyal ödem ataklarıyla karakterize alerjik anjioödem tablosu ile, Melkersson-Rozental sendromundaki orofasiyal ödemin birbirlerinden ayrımında kullanılan en kritik fiziksel bulgu ve mekanistik fark aşağıdakilerden hangisidir?
Doğru Şık (E): Melkersson-Rozental sendromunda hücresel yığılıma bağlı ödemin gode bırakmayan (non-pitting) sert yapıda olması
Açıklama: Anjioödem, artmış vasküler geçirgenliğe bağlı sıvı sızması olduğu için çok hızlı gelişir ve yumuşak, gode bırakan (pitting) özelliktedir. Melkersson-Rozental sendromunda ise ödem, lenfatik kanalları tıkayan hücresel bazlı non-kazeifiye granülomatöz inflamasyon sonucu yavaş gelişir ve sıvıdan ziyade doku hücresi yığılımı olduğu için patognomonik olarak gode bırakmaz (non-pitting).

---

### ÇİFT 264 (Benzerlik: 0.71)

**Soru 1 (ID: 403e3254-4f66-4ead-8583-cb6756d7b76e)**
Soru Kökü: Benign sinir kılıfı tümörleri ile ilgili aşağıda verilen klinik ve histopatolojik karşılaştırmalardan hangisi veya hangileri doğrudur?

I. Schwannom, siniri kenara iterek sınırları belli, kapsüllü ayrı bir kitle olarak büyür.
II. Nörofibrom, normal akson yapılarının arasına girerek fuziform şekilde kapsülsüz büyür.
III. Nörofibromların çoklu izlendiği NF-1 hastalarındaki pleksiform nörofibromlarda karsinomatöz malign dönüşüm riski oldukça düşüktür.
Doğru Şık (D): I ve II
Açıklama: Schwannom kapsüllü bir tümördür ve sinir demetini dışarı doğru iterek lokalize büyür, bu sayede sinir korunarak çıkarılabilir (I doğru). Nörofibrom ise kapsülsüzdür, sinir lifleri (aksonlar) arasına karışarak fuziform genişler (II doğru). Ancak NF-1 (Nörofibromatozis Tip 1) sendromu izlenen hastalarda pleksiform nörofibrom tiplerinde 'Malign periferik sinir kılıfı tümörüne' dönüşüm (kanserleşme) riski oldukça yüksektir (III yanlış). Bu nedenle cevap I ve II'dir.

**Soru 2 (ID: a66658b2-a207-4a62-8d1d-58af0adee719)**
Soru Kökü: Periferik sinir sistemi tümörlerinin klinik ve histolojik davranışları incelendiğinde, aşağıdakilerden hangisi nörofibromu schwannomdan ayıran özelliklerden biridir?
Doğru Şık (D): Kapsülsüz yapıda olması ve normal akson yapılarının arasında fuziform büyümesi
Açıklama: Nörofibromlar kapsülsüz tümörlerdir ve tümör hücreleri normal sinir liflerinin (aksonların) arasına sızarak sinirle birlikte fuziform bir genişleme yaratırlar, bu nedenle cerrahi olarak sinirden sıyrılıp çıkarılmaları zordur. Buna karşın en güçlü çeldirici olan schwannom, siniri kenara iterek asimetrik büyüyen, sınırları düzenli ve tam bir kapsüle sahip kitlelerdir. Antoni A/B alanları schwannoma aittir.

---

### ÇİFT 265 (Benzerlik: 0.71)

**Soru 1 (ID: 78714ad2-0119-4215-a39f-9735f65a4ce0)**
Soru Kökü: Malign periferik sinir kılıfı tümörüne (MPNST) dönüşüm riski en yüksek olan ve tümör hücrelerinin normal akson yapılarının arasından büyüyerek fuziform genişlemeye neden olduğu lezyon aşağıdakilerden hangisidir?
Doğru Şık (A): Nörofibrom
Açıklama: Nörofibromlar kapsülsüzdür, fuziform şekilde büyürler ve tümör hücreleri normal akson yapılarının arasına girerek ilerler; özellikle pleksiform tiplerinin maligniteye dönüşme (MPNST) riski yüksektir. Schwannom ise kapsüllüdür ve siniri kenara iterek sınırları düzenli bir kitle oluşturur. Bu yapısal büyüme farkı, nörofibromların cerrahi olarak tamamen çıkarılmasını zorlaştırır.

**Soru 2 (ID: a66658b2-a207-4a62-8d1d-58af0adee719)**
Soru Kökü: Periferik sinir sistemi tümörlerinin klinik ve histolojik davranışları incelendiğinde, aşağıdakilerden hangisi nörofibromu schwannomdan ayıran özelliklerden biridir?
Doğru Şık (D): Kapsülsüz yapıda olması ve normal akson yapılarının arasında fuziform büyümesi
Açıklama: Nörofibromlar kapsülsüz tümörlerdir ve tümör hücreleri normal sinir liflerinin (aksonların) arasına sızarak sinirle birlikte fuziform bir genişleme yaratırlar, bu nedenle cerrahi olarak sinirden sıyrılıp çıkarılmaları zordur. Buna karşın en güçlü çeldirici olan schwannom, siniri kenara iterek asimetrik büyüyen, sınırları düzenli ve tam bir kapsüle sahip kitlelerdir. Antoni A/B alanları schwannoma aittir.

---

### ÇİFT 266 (Benzerlik: 0.71)

**Soru 1 (ID: b6d0b317-ac77-4248-b9ae-9a5a5431a382)**
Soru Kökü: Çocukluk çağında epidemilerle seyredebilen Koksaki (Picornaviridae) virüs enfeksiyonlarının orofasiyal patofizyolojisinde gözlenen durumlardan biri **değildir**?
Doğru Şık (C): Diş etlerinde patognomonik şiddetli marjinal eritem ve gingival kanama tablosu yapması
Açıklama: Koksaki virüsü Herpanjina ve El-Ayak-Ağız hastalığı gibi vezikülobüllöz formlar yaratır, ancak diş etinde patognomonik marjinal eritem ve gingival tutulum Koksaki enfeksiyonlarında gözlenmez. Diş eti iltihabıyla karakterize şiddetli vezikül tablosu Primer Herpetik Gingivostomatit'e (HSV-1) özgüdür. Koksaki virüs lezyonları anterior (sert damak/dil) veya posterior (yumuşak damak) lokalize olur, marjinal gingivayı şiddetle tutmaz.

**Soru 2 (ID: a96b4499-f7ce-423f-a660-41c59e39c5f8)**
Soru Kökü: Çocuk hastada yüksek ateş ve boğaz ağrısıyla seyreden bir hastalık tablosunda klinisyen yumuşak damak ve posterior orofarinkste yaygın veziküler döküntüler tespit etmiştir. Diş eti tutulumu izlenmeyen ve klinik olarak tonsillit ile sıklıkla karışan bu Koksaki virüs enfeksiyonunun tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Herpanjina
Açıklama: Herpanjina, Koksaki virüslerin neden olduğu, spesifik olarak ağızın en arka bölgesi olan yumuşak damak ve orofarinkste herpetik enfeksiyona benzeyen veziküller oluşturan hastalıktır. Herpes simplex (gingivostomatit) diş etlerini ve ön bölgeleri de güçlü şekilde tutarken herpanjina posterior hatta sınırlı kalma eğilimi nedeniyle tonsillit veya farenjit sanılarak yanlış tedavi alabilir. Veziküler lezyon formasyonu herpanjinanın tonsillitten ayırıcı klinik karakteridir.

---

### ÇİFT 267 (Benzerlik: 0.71)

**Soru 1 (ID: 477db9ac-19c2-4cf4-a1e4-eafd1ef93773)**
Soru Kökü: Baş boyun karsinomlarında primer lezyonun anatomik lokalizasyonu, lenfatik drenaj ağı farklılıkları nedeniyle prognozu doğrudan etkiler. Ağız boşluğu içinde **en sık** rastlanan skuamöz hücreli karsinom lokalizasyonu aşağıdakilerden hangisidir?
Doğru Şık (C): Dilin postero-lateral sınırı
Açıklama: Dudak tümörleri oral karsinomların büyük kısmını (alt dudak spesifik olarak) oluştursa da, 'intra-oral' (ağız içi) boşluktaki anatomik yapılar arasında kanserin en sık yerleştiği spesifik bölge dilin kendisi, özellikle de postero-lateral sınırıdır. Ağız tabanı intra-oral yerleşimde ikinci sıklıkta gelir. Dil kanserleri, zengin lenf ağı nedeniyle hızla metastaz yapar ve dudak tümörlerine göre çok daha yüksek mortaliteye sahiptir.

**Soru 2 (ID: 20c62b66-8560-4576-9e12-63c4113a4f57)**
Soru Kökü: Altmış beş yaşında erkek hasta, alt dudak vermilyon sınırında iyileşmeyen ülsere ve ekzofitik lezyon şikayetiyle başvuruyor. İnsizyonel biyopsi sonucu skuamöz hücreli karsinom olarak raporlanıyor. Bu hastada lenfatik metastaz açısından ilk olarak değerlendirilmesi gereken bölgesel lenf nodları aşağıdakilerden hangisidir?
Doğru Şık (A): Submental ve sublingual lenf nodları
Açıklama: Alt dudak vermilyon sınırına yerleşen skuamöz hücreli karsinomlar tipik olarak lokal submental ve sublingual lenf nodlarına yayılım gösterirler. Dilin postero-lateral sınırına yerleşen karsinomlar ise en güçlü çeldirici olan jugulodigastrik (submandibular) lenf nodlarına metastaz yaparlar. Dudak karsinomlarının genel prognozu iyi olup, lenf nodu metastazı diğer oral kanserlere oranla daha nadirdir.

---

### ÇİFT 268 (Benzerlik: 0.71)

**Soru 1 (ID: a61028c0-be66-4a71-a57c-903b1bf6759e)**
Soru Kökü: Gelişimsel süreçte nöroektodermal kökenli anatomik sistemleri hedef alan ve kohlear iletimi kalıcı olarak keserek sensörinöral sağırlık kaskadına yol açan spesifik kraniyal sinir tutulumu aşağıdaki hastalıkların hangisinde görülür?
Doğru Şık (E): Konjenital sifiliz
Açıklama: Konjenital sifilizin Hutchinson triyadı içerisindeki nörolojik bulgusu 8. kraniyal sinirin (Nervus vestibulocochlearis) veya iç kulağın tutulumu sonucu gelişen sağırlıktır. Ramsay Hunt sendromunda ise fasiyal sinir (7. kraniyal sinir) tutularak yüz felci kliniği oluşur.

**Soru 2 (ID: 6cd000e4-2f5a-4cb5-870e-27a6335e0c20)**
Soru Kökü: Konjenital sifilizin organogenez basamaklarındaki yıkım modellemesinde nörolojik sistem üzerine spesifik toksisitesi izlenmektedir. Triadın üçüncü bileşeni olan sensörinöral sağırlık tablosunun doğrudan dokusal sebebi aşağıdakilerden hangisidir?
Doğru Şık (C): Temporal kemik labirentiti zemininde gelişen inflamasyon ve 8. kraniyal sinir tahribatı
Açıklama: Konjenital sifilizin nörolojik triadı doğrudan temporal kemik yapısında ve labirentlerde gelişen spiroketal inflamasyona bağlı 8. kraniyal sinirin (Nervus vestibulocochlearis) veya iç kulağın tahribatından kaynaklanır. Bu hücresel hasar orta kulaktaki mekanik bir ankiloz değil, iletimin kalıcı olarak kesildiği bir sensörinöral sinir disfonksiyonudur. Genikulat gangliyon tutulumu spiroketin değil Varicella Zoster Virüsünün (Ramsay Hunt) hedefidir.

---

### ÇİFT 269 (Benzerlik: 0.71)

**Soru 1 (ID: 951be88e-acde-4e05-acbe-fbd4fc3d3195)**
Soru Kökü: Sürmeye çalışan bir dişin oluşturduğu fiziksel baskı sonucu, kronu saran folikül epitelinde hangi patofizyolojik olayın gerçekleşmesi dentigeröz kist gelişimini tetikleyen birincil mekanizmadır?
Doğru Şık (A): Venöz akımın tıkanması ve kapiller basınç artışı
Açıklama: Dentigeröz kist gelişiminde sürmeye çalışan dişin baskısı, folikül epitelinde venöz akımın tıkanmasına yol açar; bu da kapiller basıncı artırarak dokuda ödeme ve kist boşluğuna sıvı kaçışına neden olur. İskemi veya arteriyel spazm kist sıvısı birikiminin değil, nekrozun mekanizmasıdır. Bu mekanik venöz konjesyon süreci, kistin sıvı dinamiğinin temelidir.

**Soru 2 (ID: 3d6fe828-d779-4f50-8e9c-1865654203b3)**
Soru Kökü: Sürmeye çalışan dişin baskısı ile kronu saran folikül epitelinde venöz akımın tıkanması ve doku arasına sıvı kaçışı sonucu gelişen, en sık görülen gelişimsel odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Dentigeröz kist
Açıklama: Dentigeröz kist, gömülü diş kronu ile folikül epiteli arasına sıvı toplanmasıyla gelişen ve çenelerde en sık görülen gelişimsel kisttir. Radiküler kist gelişimsel değil inflamatuvar kökenlidir ve non-vital dişlerle ilişkilidir. Mekanizma temel olarak folikül bağ dokusunda ödemin kron-folikül arayüzüne sızmasına dayanır.

---

### ÇİFT 270 (Benzerlik: 0.71)

**Soru 1 (ID: 1b1a4a28-baa5-4b47-84f9-b6a65a6a118a)**
Soru Kökü: Sürekli alt dudağını ısırma alışkanlığı (morsicatio labiorum) olan bir hastanın dudak mukozasında saptanan fikse beyaz plaklar biyopsi ile incelendiğinde, epitelin fiziksel travmaya verdiği adaptif yanıt gözlemlenmiştir. Bu friksiyonel hiperkeratoz tablosunda, hücresel displazi **bulunmamasına** karşın epitel katmanlarında kalınlaşma (akantoz) izlenmesinin nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Mukozanın tahribatı bloke etmek için stratum basale tabakasındaki hücre proliferasyonunu otonom olmayan şekilde artırması
Açıklama: Friksiyonel hiperkeratoz kaskadı, dokunun mekanik tahribata karşı bariyerini güçlendirme çabasıdır. Epitel, dışarıdan gelen düşük enerjili travmayı (ısırık/sürtünme) bloke etmek için, en alt tabakası olan stratum basale'deki kök hücrelerin mitoz hızını artırır. Bu artan üretim üst tabakalara akantoz ve hiperkeratoz olarak yansır. Bu kalınlaşma otonom bir kanser klonu değil, etken kalktığında duracak olan reaktif (reversibl) bir savunmadır.

**Soru 2 (ID: 6f943cb6-7f73-4f0e-9466-503d54f473d4)**
Soru Kökü: Kronik fiziksel uyarılara maruz kalan oral mukozada hücresel adaptasyon gelişir. Hatalı bir restorasyon veya kırık diş kenarının sürtünmesi sonucu mukozada bazen adaptif 'Friksiyonel Hiperkeratoz', bazen de yıkıcı 'Akut Travmatik Ülser' gelişmesinin temel fiziksel ve hücresel determinanatı (belirleyicisi) aşağıdakilerden hangisidir?
Doğru Şık (D): Fiziksel kuvvetin şiddetinin ve süresinin epitelin mitotik adaptasyon kapasitesini aşıp aşmaması
Açıklama: Oral mukoza mekanik kuvvete karşı ikili yanıt verir. Eğer sürtünme düşük şiddetli ve kronikse, epitel stratum basale'deki mitoz hızını artırarak kalıcı bir kalınlaşma (akantoz) ve koruyucu bir hiperkeratoz bariyeri (Friksiyonel Hiperkeratoz) oluşturur. Ancak uygulanan kuvvetin şiddeti epitelin o anki adaptasyon (mitoz/kalınlaşma) kapasitesini aşacak kadar ani ve sertse, doku bütünlüğü yırtılarak sarı fibrinli Akut Travmatik Ülser gelişir.

---

### ÇİFT 271 (Benzerlik: 0.71)

**Soru 1 (ID: c8666abc-ce48-4402-bf20-8f9f8d4fbcac)**
Soru Kökü: Sideropenik glossit ile median romboid glossit patolojilerinin karşılaştırmalı klinik semptomatolojisi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Plummer-Vinson zemininde gelişen glossitte doku atrofisi sadece foramen çekum anterioruyla sınırlı fokal yapıdadır.
Açıklama: Plummer-Vinson (sideropenik) zemininde gelişen glossit, sistemik demir döngüsünün bozulmasına bağlı olarak tüm dil dorsumunu kapsayan 'jeneralize ve yaygın' şiddetli bir yıkımdır; sadece foramen çekum anterioruyla sınırlı kalan fokal doku atrofisi median romboid glossite aittir. Nutrisyonel eksikliklerin yarattığı jeneralize doku hipoksisi ve incelme şiddetli glossodinya (ağrı) yaratırken, lokalize Kandida lezyonlarının düşük dereceli reaksiyonu hastada ağrı duyumu oluşturmaz.

**Soru 2 (ID: e4046c20-11d5-41e4-9067-03692d981311)**
Soru Kökü: Median romboid glossit (santral papiller atrofi) ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (C): Etiyopatogenezinde vakaların büyük bir kısmında Candida albicans kolonizasyonu saptanmaktadır.
Açıklama: Median romboid glossit artık gelişimsel bir anomali olarak kabul edilmemekte; patognomonik olarak vakaların yaklaşık %40'ında Candida albicans enfeksiyonu zemininde gelişen kronik inflamatuar-atrofik bir patoloji olduğu bilinmektedir. Tipik yerleşimi dil sırtı orta hatta, foramen çekum önüdür ve genellikle asemptomatiktir.

---

### ÇİFT 272 (Benzerlik: 0.71)

**Soru 1 (ID: af4017cf-429c-49ca-a4fc-0563f359e4cf)**
Soru Kökü: Lökoplakilerin yerleşim lokalizasyonları ile etiyolojik faktörler arasındaki ilişkiler değerlendirildiğinde, karsinom geliştirme riskinin yüksek olduğu bilinen sifilitik lökoplaki tipik olarak oral bölgenin neresinde izlenir?
Doğru Şık (C): Dil dorsumu
Açıklama: Sifilitik lökoplaki, Treponema pallidum enfeksiyonunun geç dönem komplikasyonu olarak spesifik bir şekilde dilin dorsum (sırt) yüzeyinde lokalize olan bir tablodur. Bu kronik inflamatuar zemin hücresel atipiye yatkınlık oluşturur ve skuamöz hücreli karsinom gelişimi açısından ciddi oranda yüksek risk barındırır.

**Soru 2 (ID: df7c057f-c6df-40a9-a5ed-ae033c080f4d)**
Soru Kökü: İdiyopatik lökoplakilerin insidansı ile maligniteye (skuamöz hücreli karsinom) dönüşüm riski anatomik bölgelere göre farklılık gösterir. Buna göre, lökoplaki görülme sıklığının düşük olmasına karşın, hücresel kanserleşme riskinin tartışmasız en yüksek olduğu oral lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (B): Ağız tabanı
Açıklama: Lökoplakilerin malign transformasyon riski anatomik hiyerarşide en fazla Ağız tabanında izlenir, bunu dil ve dudak takip eder. Buna karşın vestibül mukoza lökoplakilerin en sık rastlandığı ancak kanserleşme riskinin en düşük olduğu anatomik alandır. Bu ters orantı kuralı oral prekanseröz lezyonların yönetiminde kritik bir prognostik göstergedir.

---

### ÇİFT 273 (Benzerlik: 0.71)

**Soru 1 (ID: dcdee1c5-d7ae-4a56-86b8-0b03f742f0d8)**
Soru Kökü: Yeni bir diş macunu ve ağız gargarası kullanmaya başladıktan birkaç hafta sonra diş etlerinde şiddetli kızarıklık, yanma hissi ve büyüme şikayetiyle başvuran hastanın muayenesinde; dilde filiform papillaların tamamen silindiği, dil yüzeyinde belirgin atrofi ve soyulma olduğu gözlenmiştir. Alınan gingival biyopside bağ dokusunda çok yoğun inflamatuar infiltrasyon saptanmıştır. Bu hastada düşünülen **en olası** tanı ve biyopsi alanında hakim olan hücre tipi aşağıdakilerin hangisinde birlikte doğru verilmiştir?
Doğru Şık (A): Allerjik gingivostomatitis – Plazma hücresi
Açıklama: Diş macunları, tatlandırıcılar veya bazı dental materyallere karşı gelişen atipik bir hipersensitivite reaksiyonu olan alerjik gingivostomatitis (plazma hücreli gingivitis) vakalarında, lezyon bölgesindeki bağ dokusu aşırı miktarda plazma hücresi ile infiltre edilir. Diş eti bulgularına ek olarak dilde filiform papillaların silinmesiyle karakterize atrofik ve soyulmuş görünüm, bu sendrom için ayırıcı ekstra-gingival bulgulardır. Gingival fibromatoz inflamasyon hücreleri içermeyen ailesel bir doku aşırı büyümesidir, bu tarz sistemik mukozal tutulum yapmaz.

**Soru 2 (ID: c0f944ea-fbee-4370-b4d1-a10c84a6fad8)**
Soru Kökü: Kırk yaşında kadın hasta, diş etlerinde yıllardır yavaş yavaş artan, ancak ağrı veya renk değişikliği yaratmayan yaygın bir büyüme şikayetiyle başvuruyor. Sistemik ilaç öyküsü olmayan hastanın dişeti biyopsisinde eritem, ödem veya mononükleer hücre infiltrasyonu izlenmezken; dokunun sadece yoğun kollajenize aşırı fibröz bir dokudan oluştuğu gözleniyor. Bu klinik veriler ve mikroskobik bulgular ışığında hastanın patolojisi aşağıdakilerden hangisidir?
Doğru Şık (C): Gingival fibromatoz
Açıklama: Hastanın sistemik bağışıklık baskılayıcı veya tansiyon ilacı gibi bir öyküsünün olmaması ve histolojik olarak akut veya kronik inflamasyonun (hücresel infiltrasyon, vazodilatasyon) eşlik etmediği tamamen 'kollajenize bağ dokusu hiperplazisi', genellikle genetik geçişli veya sporadik formlarda görülen gingival fibromatoz tablosunu gösterir. Allerjik veya hormonal büyüme tablolarında lezyon şiddetli vasküler yanıta sekonder olarak hiperemik, ödemli, kolay kanayan ve inflamasyonlu (lökosit ve eksüda ağırlıklı) reaktif bir karakter taşır.

---

### ÇİFT 274 (Benzerlik: 0.71)

**Soru 1 (ID: 8ea8ccf8-fc70-4ef0-9d57-868976d6727f)**
Soru Kökü: Proliferatif verrüköz lökoplaki (PVL) ile klasik oral lökoplaki tiplerinin klinik seyirleri karşılaştırıldığında, PVL hastalığının etiyopatogenezi için aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sigara kullanımı ile lezyonun ortaya çıkması arasında etiyolojik ilişki çok güçlüdür.
Açıklama: Proliferatif verrüköz lökoplakiyi (PVL) geleneksel skuamöz prekürsörlerden ayıran en keskin epidemiyolojik fark, tütün veya sigara ile ilişkisinin minimal olmasıdır. Genellikle iyi ağız bakımına sahip ve hayatında hiç sigara içmemiş yaşlı kadınlarda multisentrik papillomatöz lezyonlar halinde başlar ve kaçınılmaz kanser progresyonu gösterir.

**Soru 2 (ID: fa76794c-cef9-4415-b569-e676d9e4d30a)**
Soru Kökü: Ağız mukozasının verrüköz karsinomu ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Uzak dokulara ve lenf nodlarına metastaz potansiyeli çok yüksektir.
Açıklama: Verrüköz karsinom, skuamöz hücreli karsinomun iyi diferansiye bir varyantıdır ve klasik SCC'ye göre hücresel atipisi daha az, metastaz potansiyeli belirgin şekilde daha düşüktür. Ekzofitik, parmaksı çıkıntılar oluşturan bu yavaş büyüyen tümör özellikle tütün emen ileri yaş erkeklerde yanak ve alveolar mukozada izlenir. Tedavisi öncelikli olarak cerrahidir.

---

### ÇİFT 275 (Benzerlik: 0.71)

**Soru 1 (ID: f0481caa-15ca-4cc3-a66e-bb1b0f8e0f2d)**
Soru Kökü: Bağışıklık sistemi bozulmuş (özellikle AIDS hastaları) bireylerin genellikle dil lateral yüzeylerinde saptanan, kazınmakla sıyrılmayan, beyaz, tüy gibi birleşen yama şeklindeki lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Kıllı lökoplaki
Açıklama: Kıllı lökoplaki, immünsüpresif bireylerde hücresel bağışıklığın çökmesiyle fırsatçı olarak beliren, tüy tarzında beyaz uzantılar yapan ve kazınamayan patognomonik lezyondur. Psödomembranöz kandidiyazis immünsüpresyonda görülse de kazındığında kolayca sıyrılıp altta eritem bırakmasıyla kıllı lökoplakiden ayrılır. Bu lezyon HIV progresyonunun önemli bir klinik belirtecidir.

**Soru 2 (ID: df955b9f-bd42-456c-b71b-96ba02eb907c)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından 'kazınamayan ve klinik ya da patolojik anlamda başka bir hastalık olarak karakterize edilemeyen beyaz renkli yama ya da plak' şeklinde tanımlanan, %5-25 oranında karsinoma dönüşüm riski taşıyan lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, spesifik bir patolojik tanıdan ziyade kazınamayan beyaz plakları tanımlayan klinik bir terimdir ve premalign potansiyele sahiptir. Psödomembranöz kandidiyazis ise mukozadan kazınabilen beyaz plak formasyonudur.

---

### ÇİFT 276 (Benzerlik: 0.71)

**Soru 1 (ID: d311c1e9-9fbc-4193-9896-e0c35a56f860)**
Soru Kökü: Farklı premalign tabloların karsinom geliştirme potansiyelleri incelendiğinde; Plummer-Vinson sendromunun pürüzsüz ve kırmızı dilli tablosu risk grupları arasında kaç yıldızlı (★) kategoride sınıflandırılmıştır?
Doğru Şık (C): İki yıldız
Açıklama: Premalign hastalıkların risk ölçeğine göre; Plummer-Vinson sendromunda demir eksikliği anemisine sekonder olarak gelişen epitel atrofisi (pürüzsüz kırmızı dil), pürüzsüz kalın lökoplaki ile aynı skalada yer alıp 2 yıldız (★★) seviyesinde malignite potansiyeli barındırmaktadır. Bu tablo PVL (6 yıldız) veya eritroplaki (5 yıldız) kadar agresif değildir.

**Soru 2 (ID: 7add3bf1-b879-4c1d-b90d-ceb7e2cc5847)**
Soru Kökü: Premalign oral lezyonların karsinom geliştirme potansiyellerine dayalı yıldızlama sistemi incelendiğinde, aşağıdaki lezyonlardan hangisinin malignite riski diğerlerine göre **daha düşük** düzeydedir?
Doğru Şık (D): Pürüzsüz kalın lökoplaki
Açıklama: Lezyonların karsinom potansiyelleri incelendiğinde; ters sigara içiciliği (5 yıldız), submüköz fibrozis (5 yıldız), eritrolökoplaki ve granüler lökoplaki (4 yıldız) yüksek risk gruplarını oluştururken, pürüzsüz kalın lökoplaki nispeten daha düşük (2 yıldız) bir risk skoruna sahiptir. Morfolojideki pürüzsüzlük genellikle displazi derecesinin düşüklüğüne işaret eder.

---

### ÇİFT 277 (Benzerlik: 0.71)

**Soru 1 (ID: c04ba3f2-5507-41d0-a10b-9a91e1346c2b)**
Soru Kökü: Kırk beş yaşında erkek hasta, alt çenesinde ağrısız bir lezyon nedeniyle refere ediliyor. Panoramik radyografide, mandibular angulusun ön kısmında, inferior alveolar kanalın altında yerleşmiş iyi sınırlı yuvarlak bir radyolüsen alan tespit ediliyor. Cerrahi eksplorasyonda lezyonun lingual kortekste bir submandibuler bez çökmesi olduğu ve epitelyal kist lümeni barındırmadığı anlaşılıyor. Tanımlanan bu anatomik defekt aşağıdakilerden hangisidir?
Doğru Şık (B): Stafne kemik defekti
Açıklama: Stafne kemik defekti, submandibuler tükürük bezinin mandibular lingual kortekse yaptığı baskı sonucu oluşan fokal konjenital/edinsel bir çöküntüdür ve patolojik bir kist değildir. Basit kemik kisti diş kökleri çevresinde yer alırken, Stafne defekti spesifik olarak inferior alveolar kanalın altında izlenir. Tedavi gerektirmez ancak N. Alveolaris inferior hasarı riski barındırabilir.

**Soru 2 (ID: 622485bb-7adb-4852-99c8-8eaa5426e618)**
Soru Kökü: On altı yaşında erkek hasta, alt çenesinde herhangi bir ağrı şikayeti olmadan rutin diş kontrolü için kliniğe başvuruyor. Alınan panoramik radyografide mandibular premolar ve molar dişlerin kökleri arasına doğru uzanan, sınırları belirgin ve kökleri çentik şeklinde (scalloped) saran radyolüsen bir lezyon saptanıyor. Kist kavitesi cerrahi olarak açıldığında içinin boş olduğu ve döşeyici bir epiteli bulunmadığı görülüyor. Bu hasta için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (soliter kemik kisti), kemik içinde boş veya sıvı ile dolu, gerçek bir epitel döşemesi olmayan ve diş kökleri arasına scalloped (çentikli) uzanan bir yalancı kisttir. Anevrizmal kemik kisti kanla dolu boşluklardan oluşurken, travmatik kemik kisti kavitesi tipik olarak boştur. Tedavisi cerrahi küretaj ile kavite içinde kanama indükleyerek iyileşmeyi sağlamaktır.

---

### ÇİFT 278 (Benzerlik: 0.71)

**Soru 1 (ID: cda95bed-c1cc-4bb3-8927-64f43c8b4892)**
Soru Kökü: Orofasiyal bölgede izlenen veziküler erüpsiyonlarda, Herpes Simplex Virus (HSV) ile Varisella Zoster Virus (VZV / Zona) kaynaklı lezyonların erken klinik ayrımında Zona tanısını destekleyen en spesifik anamnez bulgusu aşağıdakilerden hangisidir?
Doğru Şık (C): Vezikül döküntülerinden önce belirgin, spesifik tek taraflı ağrı olması
Açıklama: Herpes zoster (Zona) lezyonlarının patogenezinde virüsün duyusal sinir lifleri üzerinden deriye taşınması sırasında, veziküller henüz ortaya çıkmadan önce sinir trase hattında şiddetli bir nöropatik ağrı hissedilmesi en temel ayırıcı bulgudur. HSV reaktivasyonlarında (uçuk gibi) prodromal dönem ağrıdan ziyade bölgesel kaşıntı, yanma ve karıncalanma hissiyle karakterizedir. Ayrıca Zona lezyonları anatomik olarak orta hattı geçmeyerek sıkı bir şekilde tek taraflı dermatomu takip ederler.

**Soru 2 (ID: 69152174-bf50-40ef-bada-a9529c2a53a1)**
Soru Kökü: 60 yaşında bir hastanın yüzünün sadece sağ yarısında, maksiller sinir hattı boyunca orta hattı hiçbir şekilde aşmayan şiddetli ağrılı veziküler döküntüler meydana gelmiştir. Hasta bu döküntüler ortaya çıkmadan önce üç gün boyunca o bölgede dayanılmaz bir sızı hissettiğini tarif etmektedir. Bu virüsün sekonder aktivasyon oluşturmadan önce sessiz olarak beklediği (latansi) nöroanatomik bölge aşağıdakilerden hangisidir?
Doğru Şık (D): Duyu ganglionları
Açıklama: Herpes Zoster (Zona) enfeksiyonu, çocuklukta geçirilen su çiçeği sonrası Varisella Zoster Virüsünün duyu ganglionlarında (özellikle Trigeminal ganglion) yıllar boyunca sessiz (latent) kalmasıyla karakterizedir. İmmünsüpresyon geliştiğinde virüs bu ganglionlardan çıkarak enfekte ettiği duyu sinirinin sadece kendi dermatom alanında ilerler, bu yüzden asla motor çekirdeklerden veya doğrudan epitelyal bazal membrandan kaynaklanmaz. Dermatom spesifik tek taraflı ilerleyiş, patojenin spesifik periferik sinir hücresine yerleşmesinin doğal sonucudur.

---

### ÇİFT 279 (Benzerlik: 0.71)

**Soru 1 (ID: 2a3bdc83-5125-4d1e-ac3d-fd6e74d15239)**
Soru Kökü: Yirmi iki yaşında erkek hasta, alt sağ 20 yaş dişi bölgesinde şişlik ve ağrı şikayetiyle başvuruyor. Radyografik muayenede yarı gömülü dişin kuronunun bukkal yüzeyinde başlayıp kök bifurkasyonuna uzanan radyolusent bir kistik lezyon saptanıyor. Dişe uygulanan vitalite testi pozitif yanıt veriyor ve hastanın geçmişte aynı bölgede perikoronitis atakları geçirdiği öğreniliyor. Bu hastadaki **en olası** kist tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Paradental kist
Açıklama: Paradental (bukkal bifurkasyon) kist, inflamatuar kaynaklı bir kist olmasına rağmen radiküler kistten farklı olarak vital (canlı) dişlerde ve sıklıkla alt 3. molar dişlerin perikoronitis atakları sonrasında servikal periodontal dokudan gelişir. En güçlü distraktör olan dentigeröz kist gelişimsel kökenli olup tam gömülü diş kuronunu mine-sement sınırından sararken, paradental kist dişin canlı kalması ve bukkal servikal/bifurkasyon yerleşimi ile ayrılır.

**Soru 2 (ID: 862a444e-3289-4f08-b32b-1b95a6d9ded6)**
Soru Kökü: Otuz yaşında erkek hasta, devital 46 numaralı dişinde lokalize künt bir ağrı sonrası periapikal bölgede gelişen kronik, non-ekspansif radyolüsent lezyon ile değerlendiriliyor. Bu bölgedeki lezyonun epiteliyal komponentinin patogenezinde rol oynayan hücresel artıklar aşağıdakilerden hangisidir?
Doğru Şık (D): Malassez epitel artıkları
Açıklama: Radiküler kist (periapikal kist), pulpa nekrozu sonrası periapikal dokuya yayılan inflamasyonun periodontal ligament içindeki Malassez epitel artıklarını sitokinler aracılığıyla uyararak prolifere etmesiyle oluşur. Serre artıkları erüpsiyon kistlerinde veya gingival kistlerde rol alırken, indirgenmiş mine epiteli dentigeröz kistlerin kaynağını oluşturur. İnflamasyon ortamındaki makrofaj ve lenfositler bu kistik kavitasyonu destekler.

---

### ÇİFT 280 (Benzerlik: 0.71)

**Soru 1 (ID: 78a7f411-5543-42f2-80e9-e18b88320dc4)**
Soru Kökü: Pulpal inflamasyonun kök ucundan periapikal dokuya yayılarak oluşturduğu periapikal granülomun mikroskobik incelemesinde aşağıdaki hücre veya yapılardan hangisinin yoğun olarak bulunması **beklenmez**?
Doğru Şık (D): Nötrofil
Açıklama: Periapikal granülom dokusu kronik bir iltihabi granülasyon dokusudur; bu nedenle histolojisinde mononükleer hücreler olan lenfosit, makrofaj ve plazma hücreleri dominanttır, nötrofiller ise sadece çok seyrek olarak izlenir. Eğer periapikal bölgede nötrofiller yoğun bir şekilde birikmeye başlarsa, bu durum likefaksiyon nekrozu ile karakterize olan periapikal apse oluşumuna işaret eder. Malassez epitel artıkları ise granülom içinde inflamasyonun etkisiyle çoğalarak gelecekteki bir kist oluşumuna zemin hazırlar.

**Soru 2 (ID: 24f17ab3-388d-432c-b541-2ef4e000e294)**
Soru Kökü: Pulpa enfeksiyonunun foramen apikaleden yayılarak periapikal dokuda iltihabi granülasyon dokusu oluşturduğu ve Malassez epitel artıklarının proliferasyonuna neden olduğu asemptomatik lezyon aşağıdakilerden hangisidir?
Doğru Şık (B): Periapikal granülom
Açıklama: Pulpa enfeksiyonu sonucu periapikal dokuda gelişen ve Malassez epitel artıklarının proliferasyonu ile karakterize granülasyon dokusu periapikal granülomdur (apikal periodontitis). Periapikal granülom zamanla kistik dejenerasyona uğrayarak radiküler (periapikal) kiste dönüşebilir.

---

### ÇİFT 281 (Benzerlik: 0.71)

**Soru 1 (ID: 19a9c59e-6001-4599-90f2-fc3a6796e3c8)**
Soru Kökü: Nörokutanöz viral enfeksiyonların patofizyolojisinde latent fazdaki replikasyon alanları karakteristik farklar gösterir. Ramsay Hunt sendromu ve perioral rekürren Herpes Simpleks enfeksiyonlarında etken virüslerin sessiz formda beklediği gangliyonlar sırasıyla aşağıdakilerden hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): Genikulat gangliyon / Trigeminal gangliyon
Açıklama: Ramsay Hunt sendromunda Varicella Zoster Virüsü (VZV) patognomonik olarak 7. kraniyal sinirin duyu merkezi olan genikulat gangliyonda latent kalır ve burada reaktive olur. Rekürren oral Herpes Simpleks Virüsü (HSV) ise birincil enfeksiyonun ardından retrograt taşınarak bölgesel trigeminal gangliyona yerleşir. Bu iki viral ailenin anatomik replikasyon sahasındaki farklılık, yarattıkları klinik sendromların (yüz felci vs orofasiyal ülser) sınırlarını belirler.

**Soru 2 (ID: f1bb06e2-7c05-42ba-b501-a84ac77ac560)**
Soru Kökü: Klinik muayenesinde viral veya spiroketal etkenlere bağlı olarak sadece spesifik bir kraniyal sinirin kalıcı olarak defekte uğradığı iki farklı hasta değerlendirilmektedir. Birinci hastanın Hutchinson triyadının son bulgusu olan nörolojik kayıp yaşadığı, ikinci hastanın ise VZV kökenli spesifik gangliyon reaktivasyonuna sekonder sendrom geçirdiği bilinmektedir. 
Bu iki hastanın etiyolojisine bağlı olarak birincil hedeflenen nöral yapılar aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?
Doğru Şık (E): N. Vestibulocochlearis - N. Facialis genikulat gangliyonu
Açıklama: Hutchinson triyadında spiroketler spesifik olarak 8. kraniyal siniri (N. Vestibulocochlearis) tutarak sensörinöral sağırlık yapar. VZV reaktivasyonuna bağlı nöropati olan Ramsay Hunt sendromunda ise patojen spesifik olarak 7. kraniyal sinirin (N. Facialis) duyu gangliyonu olan genikulat gangliyonu hedef alarak yüz felci yapar. Komşuluk tuzağı ekarte edilmelidir.

---

### ÇİFT 282 (Benzerlik: 0.71)

**Soru 1 (ID: c958bbd7-6bff-43b0-8064-5063a2b23c0c)**
Soru Kökü: Ağız içi muayenesinde her iki yanak mukozasında sınırları belirsiz, kazınamayan grimsi-beyaz opelesan bir görünüm saptanan yirmi yaşındaki hastanın yanak dokusu iki parmakla ekarte edilip gerdirildiğinde bu görünümün tamamen silinerek kaybolduğu izlenmiştir. Bu klinik tablonun hücresel zemininde aşağıdakilerden hangisi yer alır?
Doğru Şık (E): Spinal hücrelerde intrasellüler ödem ve parakeratoz
Açıklama: Löködem fizyolojik bir varyasyon olup, stratum spinozum hücrelerindeki intrasellüler sıvı artışının epitelde yarattığı hidropik dejenerasyona (ödeme) bağlı gelişir ve doku gerdirildiğinde epitelin ışık kırma indeksi değiştiği için görünmez olur. Fordyce granüllerindeki ektopik sebase bezler doku gerdirildiğinde kaybolmaz aksine daha çok belirginleşir. Hastada genetik bir mutasyon veya viral ajan söz konusu değildir.

**Soru 2 (ID: 8ab8304e-fe4b-40e0-9035-0f3797a7d0c4)**
Soru Kökü: Ağız içi beyaz lezyonların tanısında fiziksel doku germe testi kritik önem taşır. Yanak mukozasında izlenen Fordyce granülleri doku gerdirildiğinde belirginleşirken, löködemin doku gerdirildiğinde tamamen silinmesinin ardında yatan histolojik lokalizasyon farkı aşağıdakilerden hangisidir?
Doğru Şık (B): Fordyce granüllerinin yüzey epitelinin intakt ve normal olup patolojinin alttaki submukozal yağ dokusunda (epitel dışı) yer alması, löködemin ise doğrudan intraepitelyal skuamöz hücre ödemi olması
Açıklama: Fordyce granülleri epitel dışı (submukozal) lezyonlardır; yüzey epiteli tamamen normaldir, alttaki gerçek sebase bez kitleleri epitel inceldiğinde (gerdirildiğinde) daha net parlar. Löködem ise epitelin bizzat kendi stratum spinozum tabakasındaki hücre içi ödemdir (intraepitelyal). Doku gerdirilip epitel hücreleri fiziksel sıkıştırmaya maruz kaldığında, hücrelerin ışık kırma indeksi değişir ve optik illüzyonla löködem görünmez olur.

---

### ÇİFT 283 (Benzerlik: 0.71)

**Soru 1 (ID: 0d3671bb-ae7c-40ed-bc58-e30510278bd7)**
Soru Kökü: Oral bölgede izlenen premalign mukoza lezyonlarından hangileri skuamöz hücreli karsinoma (SCC) dönüşüm açısından diğerlerinden çok daha yüksek risk taşır?
I. Proliferatif Verrüköz Lökoplaki
II. Revers Smokers Palatal Lezyonu
III. Kıllı Lökoplaki
IV. Oral Submuköz Fibrozis
Doğru Şık (B): I, II ve IV
Açıklama: Proliferatif Verrüköz Lökoplaki (bazı serilerde %100 risk), Revers Smokers Palatal Lezyonu (5 yıldızlı) ve betel cevizi ilişkili Oral Submuköz Fibrozis (5 yıldızlı) oral kavitenin en agresif premalign lezyonlarındandır. Epstein-Barr virüsü kökenli Kıllı (Hairy) Lökoplaki ise adına rağmen hücresel displazi barındırmaz ve kanserleşme (malignite) riski SIFIRDIR.

**Soru 2 (ID: 2d9faa35-af2e-40aa-aa54-a51b655ce35e)**
Soru Kökü: Oral bölgede izlenen preneoplastik lezyonların skuamöz hücreli karsinoma dönüşüm riskleri, klinik patoloji pratiğinde yıldız sistemiyle (1 ile 6 yıldız arası) derecelendirilir. Proliferatif verrüköz lökoplakinin 6 yıldızla zirvede yer aldığı bu risk hiyerarşisinde, DUS patoloji verilerine göre 'Laringeal keratoz' ile aynı risk düzeyinde (3 yıldız) konumlanan lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Aktinik keratoz (Solar şeylitis)
Açıklama: Malignite risk tablosu spot ezber verisidir. Dumansız tütün keratozu (1 yıldız) ve Pürüzsüz lökoplaki (2 yıldız) düşük-orta risk grubundadır. Aktinik keratoz (Solar şeylitis) ve Laringeal keratoz orta-yüksek risk olan 3 yıldızlı grupta yer alır. Oral submüköz fibrozis ve Revers smokers palatal lezyonu ise 5 yıldızlı, çok yüksek malignite odaklarıdır.

---

### ÇİFT 284 (Benzerlik: 0.71)

**Soru 1 (ID: 0f386597-3b90-4dc0-a29b-d040e35a3bee)**
Soru Kökü: Oral mukozanın reaktif lezyonlarından olan piyojenik granülom ve periferal dev hücreli granülom ayrımında, piyojenik granülom için aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Gerçek bir granülomatöz inflamasyon ve pürülan eksuda içerir
Açıklama: Piyojenik granülom ismi yanlış bir adlandırma (misnomer) olup, lezyon ne pus (pürülan eksuda) üretir ne de histolojik anlamda gerçek bir granülomdur. Periferal dev hücreli granülom sadece gingivada izlenirken, piyojenik granülom hormonların da etkisiyle travmatize olan herhangi bir oral yumuşak dokuda hiperplastik damarsal bağ dokusu olarak belirebilir. Tedavisi her ikisinde de periosteuma inen eksizyondur.

**Soru 2 (ID: 196248b3-59e6-4706-a1e2-c9041517fea9)**
Soru Kökü: I. Histolojik incelemesinde püy üreten gerçek bir granülomatöz inflamasyon izlenmez.
II. Ağırlıklı olarak gingivada görülse de travma almış olan dil, dudak gibi herhangi bir mukozada gelişebilir.
III. Lezyonu başlatan etyolojik etken lokal travma olabileceği gibi hormonal veya ilaca bağlı uyaranlar da olabilir.

Yukarıda verilen özelliklerden hangileri piyojenik granülom için doğru iken, periferal dev hücreli granülom için geçerli **değildir**?
Doğru Şık (E): Yalnız II
Açıklama: Hem piyojenik granülom hem de periferal dev hücreli granülom (PDHG) isimlerindeki "granülom" ekine rağmen gerçek granülomatöz inflamasyon içermezler (I her ikisi için doğrudur). Ancak piyojenik granülom irritasyona açık dudak, bukkal mukoza ve dil dahil her yerde çıkabilirken; PDHG istisnasız olarak "sadece gingivada" gelişir (II yalnızca piyojenik granüloma uyar). Ek olarak, PDHG oluşumunda hormonların veya ilaçların bir rolü yoktur, piyojenik granülom ise hamilelik hormonları gibi etkenlerle çok sık ortaya çıkar. Soru, piyojenik granülom için doğru ancak PDHG için yanlış olanı sormuştur, bu nedenle cevap Yalnız II'dir.

---

### ÇİFT 285 (Benzerlik: 0.71)

**Soru 1 (ID: fcc2b75b-dbb1-4833-b482-26c77fc36096)**
Soru Kökü: Altmış beş yaşında, uzun yıllardır tütün çiğneme alışkanlığı olan erkek hastanın alveolar mukozasında geniş, düzensiz parmaksı çıkıntılar gösteren ekzofitik bir lezyon saptanıyor. Biyopside metastaz potansiyeli çok düşük, iyi diferansiye bir epitelyal tümör izleniyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Verrüköz karsinom
Açıklama: Verrüköz karsinom; sıklıkla tütün emen/çiğneyen yaşlı erkeklerde, en sık alveolar mukoza ve yanakta yerleşen, parmaksı çıkıntılar gösteren ekzofitik ve çok iyi diferansiye bir SCC varyantıdır. Metastaz potansiyeli klasik SCC'ye göre oldukça düşüktür ve tedavisi öncelikle cerrahidir. Klasik SCC ülseratif ve daha invaziv bir paternde büyür.

**Soru 2 (ID: a058b2de-3f78-4d75-906c-e1e116b5e951)**
Soru Kökü: Yoğun sigara kullanan elli yaşında erkek hasta, sert damağında kenarları kalkık ve etrafı düzensiz ülsere bir lezyon şikayetiyle başvuruyor. İnsizyonel biyopside asinüs nekrozu, belirgin inflamasyon ve duktuslarda skuamöz metaplazi izleniyor ancak hücresel malignite bulgusuna rastlanmıyor. Yassı hücreli karsinomu klinik ve mikroskobik olarak güçlü şekilde taklit eden bu lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Nekrotizan siyalometaplazı
Açıklama: Nekrotizan siyalometaplazi, damak minör tükürük bezlerinde lokal iskemik faktörlere (örn. sigara) sekonder gelişen ve kendi kendini sınırlayan inflamatuvar reaktif bir durumdur. Mikroskobisinde görülen skuamöz adalar, patologlar tarafından yanlışlıkla yassı hücreli karsinom invazyonu olarak yorumlanabilir; bu yüzden klinikopatolojik korelasyon hayatidir. Tedavi gerektirmeden birkaç ay içinde spontan iyileşir.

---

### ÇİFT 286 (Benzerlik: 0.71)

**Soru 1 (ID: 2a3bdc83-5125-4d1e-ac3d-fd6e74d15239)**
Soru Kökü: Yirmi iki yaşında erkek hasta, alt sağ 20 yaş dişi bölgesinde şişlik ve ağrı şikayetiyle başvuruyor. Radyografik muayenede yarı gömülü dişin kuronunun bukkal yüzeyinde başlayıp kök bifurkasyonuna uzanan radyolusent bir kistik lezyon saptanıyor. Dişe uygulanan vitalite testi pozitif yanıt veriyor ve hastanın geçmişte aynı bölgede perikoronitis atakları geçirdiği öğreniliyor. Bu hastadaki **en olası** kist tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Paradental kist
Açıklama: Paradental (bukkal bifurkasyon) kist, inflamatuar kaynaklı bir kist olmasına rağmen radiküler kistten farklı olarak vital (canlı) dişlerde ve sıklıkla alt 3. molar dişlerin perikoronitis atakları sonrasında servikal periodontal dokudan gelişir. En güçlü distraktör olan dentigeröz kist gelişimsel kökenli olup tam gömülü diş kuronunu mine-sement sınırından sararken, paradental kist dişin canlı kalması ve bukkal servikal/bifurkasyon yerleşimi ile ayrılır.

**Soru 2 (ID: 622485bb-7adb-4852-99c8-8eaa5426e618)**
Soru Kökü: On altı yaşında erkek hasta, alt çenesinde herhangi bir ağrı şikayeti olmadan rutin diş kontrolü için kliniğe başvuruyor. Alınan panoramik radyografide mandibular premolar ve molar dişlerin kökleri arasına doğru uzanan, sınırları belirgin ve kökleri çentik şeklinde (scalloped) saran radyolüsen bir lezyon saptanıyor. Kist kavitesi cerrahi olarak açıldığında içinin boş olduğu ve döşeyici bir epiteli bulunmadığı görülüyor. Bu hasta için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Travmatik kemik kisti
Açıklama: Travmatik kemik kisti (soliter kemik kisti), kemik içinde boş veya sıvı ile dolu, gerçek bir epitel döşemesi olmayan ve diş kökleri arasına scalloped (çentikli) uzanan bir yalancı kisttir. Anevrizmal kemik kisti kanla dolu boşluklardan oluşurken, travmatik kemik kisti kavitesi tipik olarak boştur. Tedavisi cerrahi küretaj ile kavite içinde kanama indükleyerek iyileşmeyi sağlamaktır.

---

### ÇİFT 287 (Benzerlik: 0.71)

**Soru 1 (ID: 15022c33-4560-4045-af18-ed7107b1e39b)**
Soru Kökü: Neovoid bazal hücreli karsinom sendromu (Gorlin-Goltz) etyopatogenezinde rol oynayan PTCH gen mutasyonunun hücresel düzeydeki patolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Sonic-hedgehog sinyal yolağının baskılanamaması sonucu sürekli uyarı
Açıklama: Gorlin sendromu, 9q22.3-q31 kromozom bölgesindeki tümör süpresör PTCH geninin mutasyonu ile karakterizedir. Normalde PTCH geni tarafından kodlanan patched proteini sonic-hedgehog sinyal yolağını baskılar; mutasyonunda bu baskı kalkar ve kontrolsüz hücresel proliferasyon gerçekleşir. Wnt/beta-katenin yolağı Pindborg veya osteoma patogenezinde görev alabilir, Gorlin sendromunda asıl patoloji hedgehog yolağındadır.

**Soru 2 (ID: b0ee0228-4c19-4596-8172-62f864a7f88a)**
Soru Kökü: PTCH geni mutasyonu sonucu gelişen, sonic-hedgehog yolağının baskılandığı Gorlin (Nevoid Bazal Hücreli Karsinom) sendromunda klinik olarak %50 ve üzerinde rastlanan majör bulgular arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (E): Kalsifiye ovarian fibromlar
Açıklama: Kalsifiye ovarian fibromlar Gorlin sendromunun %15-49 bandında görülen minör/düşük frekanslı bulguları arasındadır. Multipl OKC, bazal hücreli karsinomlar ve kalsifiye falks serebri ise sendromun %50 üzeri sıklıkta görülen klasik tanı koydurucu patolojileridir. PTCH mutasyonunun bilinmesi ve OKC birlikteliği sendromun dental pratikte erken teşhisini sağlar.

---

### ÇİFT 288 (Benzerlik: 0.71)

**Soru 1 (ID: ed15d57d-ed1f-429a-9b6e-274bb2c3d4e2)**
Soru Kökü: Elli beş yaşındaki hastada alt premolar diş kökleri arasında tesadüfen saptanan küçük bir radyolüsent alan eksize edilmiştir. Mikroskobisinde kıvrımlı epitel plakları ve fokal epitel kalınlaşmaları karakteristiktir. İlgili dişlerin vital olduğu belirtilen bu kist lezyonunun eğer multiloküler ve çok daha kistik kaviteli varyantı saptansaydı, patolojik isimlendirmesi ne olurdu?
Doğru Şık (B): Botiroid odontojenik kist
Açıklama: Senaryoda tarif edilen, diş kökleri arasında vital dişe rağmen izlenen radyolüsensi ve mikroskopide kıvrımlı epitel plaklarıLateral Periodontal Kist (LPK) için patognomoniktir. Eğer bu kist tek üniteli (uniloküler) değil de bir üzüm salkımı gibi yan yana dizilmiş multiloküler, polikistik bir varyasyonda ise buna 'Botiroid odontojenik kist' denir.

**Soru 2 (ID: 90484f1d-6069-4a89-8645-9a6d80200dda)**
Soru Kökü: Mandibuler kanin ve premolar dişlerin canlılık testi pozitif olarak saptanmış (vital) kökleri arasında izole radyolüsen olarak gözlenen, gelişimsel kökenli lateral periodontal kistin; histolojik olarak epitel tomurcuklanması ile birden çok lümene ayrılarak makroskobik düzeyde klinik 'üzüm salkımı' izlenimi veren varyantı aşağıdakilerden hangisidir?
Doğru Şık (D): Botryoid odontojenik kist
Açıklama: Botryoid odontojenik kist, klinik olarak ve mikroskobik olarak lateral periodontal kistin multiloküler kistik komponentinden oluşan agresif ve nüks eğilimi olan multikistik varyantıdır. Latincede Botryoid kelimesi üzüm salkımı anlamına gelmektedir. Glandüler odontojenik kist de benzer multilokülerite gösterse de, lümeni döşeyen müsin hücreleriyle karakterizedir.

---

### ÇİFT 289 (Benzerlik: 0.71)

**Soru 1 (ID: 29f37b37-9540-4a89-bea6-000911d502d5)**
Soru Kökü: Otuz yaşında uzak doğulu bir göçmende şiddetli trismus, ağız kuruluğu ve dil hareketlerinde kısıtlılık saptanıyor. Hastanın anamnezinde uzun süreli betel çiğneme öyküsü mevcut. Klinik muayenede oral mukozada soluk, skar benzeri geri dönüşümsüz fibrotik bantlar gözleniyor. Bu premalign lezyon aşağıdakilerden hangisidir?
Doğru Şık (B): Oral submüköz fibrozis
Açıklama: Oral submüköz fibrozis, özellikle betel cevizi (alkaloid) ve tütün çiğneyen Asya popülasyonlarında görülen, ağız mukozasında bağ dokusunun aşırı kollajenizasyonu sonucu şiddetli ve irreversibl trismusla seyreden prekanseröz bir hastalıktır. Dumansız tütün keratozunda trismus beklenmez, hiperkeratotik plaklar belirgindir. Fibrozis kas dokusuna uzanarak kalıcı hareket kısıtlılığı yapar.

**Soru 2 (ID: 2694c66d-28db-4271-9e1b-4b900f718bc9)**
Soru Kökü: Kırk beş yaşındaki erkek hasta alt vestibül sulkusta buruşuk, beyaz renkli, sınırları belirsiz hiperkeratotik bir mukoza lezyonu ile başvurmuştur. Anamnezinde uzun yıllardır bu spesifik bölgeye yerleştirerek tütün çiğnediği öğrenilmiştir. Lezyonun ileri dönem biyolojik davranışı değerlendirildiğinde, bu alanda hangi neoplazinin gelişim riskinin arttığı düşünülmelidir?
Doğru Şık (B): Verrüköz karsinom
Açıklama: Dumansız tütün veya tütün çiğneme alışkanlığı, mukozada kimyasal karsinojenlerin lokal olarak uzun süre maruz kalmasına yol açarak 'tütün keratozu' adı verilen spesifik bir hiperkeratoz yaratır. Bu lezyonların zaman içinde hücresel atipi göstererek doğrudan invaziv ve ekzofitik karakterli verrüköz karsinom formuna dönüşme riski istatistiksel olarak belirgindir.

---

### ÇİFT 290 (Benzerlik: 0.71)

**Soru 1 (ID: 24f17ab3-388d-432c-b541-2ef4e000e294)**
Soru Kökü: Pulpa enfeksiyonunun foramen apikaleden yayılarak periapikal dokuda iltihabi granülasyon dokusu oluşturduğu ve Malassez epitel artıklarının proliferasyonuna neden olduğu asemptomatik lezyon aşağıdakilerden hangisidir?
Doğru Şık (B): Periapikal granülom
Açıklama: Pulpa enfeksiyonu sonucu periapikal dokuda gelişen ve Malassez epitel artıklarının proliferasyonu ile karakterize granülasyon dokusu periapikal granülomdur (apikal periodontitis). Periapikal granülom zamanla kistik dejenerasyona uğrayarak radiküler (periapikal) kiste dönüşebilir.

**Soru 2 (ID: a5cdc9fc-f23c-4940-837e-ace9b3bfe6e3)**
Soru Kökü: Periapikal enfeksiyonlarda, periapikal granülom zemininden radiküler kist oluşumunu başlatan ve kistin lümenini döşeyen asıl histolojik/hücresel komponent aşağıdakilerden hangisidir?
Doğru Şık (C): Diş gelişiminden arta kalan Malassez epitel artıkları
Açıklama: Periapikal (radiküler) kistlerin gelişiminde, pulpal enfeksiyon apekse ulaştığında oluşan inflamatuar hücre sitokinleri embriyolojik kök kılıfı kalıntılarını stimüle eder. Bu uyarı ile sessiz halden aktifleşerek çoğalmaya başlayan Malassez epitel artıkları, mevcut granülom dokusu içinde çoğalır ve merkezi sıvı dolu bir epiteliyal kistik kavite yaratırlar. Nötrofiller ve mononükleer hücreler reaksiyonu ateşlese de, gerçek bir kistin yapıtaşı olan non-keratinize skuamöz epitel duvarını sadece Malassez kalıntıları kurabilir.

---

### ÇİFT 291 (Benzerlik: 0.71)

**Soru 1 (ID: 8d9fe40e-4b7b-4270-a6bd-95addcbfd702)**
Soru Kökü: Amelogenezis imperfekta (Aİ) alt tipleri klinik görünüm ve kalıtım şekline göre ayrılır. X'e bağlı geçiş gösteren ve klinik olarak 'karla kaplı' (snow-capped) mine görünümü veren Tip IIC, Aİ'nin hangi ana sınıfında yer almaktadır?
Doğru Şık (B): Hipomatürasyon
Açıklama: Tip IIC (karla kaplı) amelogenezis imperfekta, X'e bağlı geçiş gösteren spesifik bir hipomatürasyon tipidir. Mine matrisi normal kalınlıkta sentezlenir ancak mineralizasyonun son aşaması olan kristal büyümesi ve protein uzaklaştırılması kusurlu olduğu için opak, tebeşirimsi (karla kaplı) bir hal alır. Hipoplastik formlarda ise matriks sentezi baştan eksiktir.

**Soru 2 (ID: 32f16faa-f60a-4fe6-a55a-c6765fa1f1c1)**
Soru Kökü: Süt ve kalıcı dentisyonda genetik kökenli olarak minenin miktar ve kalitesini bozan amelogenezis imperfekta hastalığının çeşitli formları mevcuttur. Hastalığın bilinen 4 temel tipi arasında epidemiyolojik olarak en sık izlenen ve mine kalınlığının defektif olduğu varyant aşağıdakilerden hangisidir?
Doğru Şık (A): Hipoplastik tip
Açıklama: Amelogenezis imperfektanın en sık görülen klinik formu, minenin matriks sekresyonunun genetik olarak hatalı olması nedeniyle niceliksel olarak eksik sentezlendiği hipoplastik tiptir. Hipokalsifiye formda mine kalınlığı normal iken yumuşaktır ve kolay aşınır; hipomatürasyon tipinde ise kristal yapısının olgunlaşamamasına bağlı alacalı renklenmeler görülür. Mine agenezisine kadar uzanan ağır tablolar hipoplastik alt gruplarda rapor edilir.

---

### ÇİFT 292 (Benzerlik: 0.71)

**Soru 1 (ID: e3c33502-340f-4d11-8058-c280a7e226fc)**
Soru Kökü: Rutin oral kanser taraması amacıyla biopsi alınan diffüz beyaz bir bukkal mukozal lezyonun mikroskobik değerlendirmesinde, parakeratoz ve akantozun yanı sıra epitelin stratum spinozum tabakasında berrak hidropik dejenerasyon ve hücrelerde 'perinükleer eozinofilik kondensasyon' saptanmıştır. Bu spesifik histolojik bulgu aşağıdaki hastalıklardan hangisine aittir?
Doğru Şık (C): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüsün patognomonik histopatolojik belirteçlerinden biri, keratinositlerin çekirdek etrafındaki keratin filamanlarının anormal yoğunlaşmasına bağlı olarak izlenen 'perinükleer eozinofilik kondensasyon'dur. Lökoödemde de intrasellüler ödem izlense de bu özgün keratin kondensasyon paterni görülmez. Keratin genlerindeki mutasyon hücre iskeletinin bu karakteristik çökmesine neden olur.

**Soru 2 (ID: c0b21f81-b3fa-4541-8fe1-487bb08f1b53)**
Soru Kökü: On yaşındaki hastanın ağız içi muayenesinde, her iki yanak mukozasını kaplayan kalın, yumuşak, süngerimsi beyaz plaklar saptanıyor. Alınan biyopsinin histopatolojik incelemesinde stratum spinozum tabakasındaki prickle (dikensi) hücrelerde sitoiskelet çöküşünü simgeleyen 'perinükleer eozinofilik kondensasyon' raporlanıyor. Bu hastadaki lezyonun etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Keratin 4 ve Keratin 13 genlerinde mutasyon
Açıklama: Keratin 4 ve 13 gen mutasyonu, sitoiskelet ağının bozulmasına ve spesifik olarak hücrelerde hidropik dejenerasyon ile patognomonik 'perinükleer eozinofilik kondensasyon' oluşumuna neden olarak Cannon hastalığını (Beyaz Sünger Nevüs) tetikler. Kalsiyum pompa defekti Darier hastalığına, EBV kıllı lökoplakiye, sürtünme friksiyonel keratoza yol açar.

---

### ÇİFT 293 (Benzerlik: 0.71)

**Soru 1 (ID: 5d937966-e035-4df3-b4be-a0e47ebe4b40)**
Soru Kökü: Embriyolojik doku büyüme (overgrowth) regülasyon genlerindeki mutasyonlar sonucu, abdominal visceromegali ile birlikte dil kas dokusunda konjenital hiperplazi gelişerek makroglossiye neden olan sistemik genetik sendrom aşağıdakilerden hangisidir?
Doğru Şık (D): Beckwith-Wiedemann sendromu
Açıklama: Beckwith-Wiedemann sendromu, genetik regülasyon defekti sonucu abdominal visceromegali (organ büyümesi) ve dilde doğrudan kas dokusu hiperplazisi ile seyreden bir doku büyüme (overgrowth) sendromudur. Down sendromunda gözlenen makroglossi maksiller yetersizliğe bağlı 'göreceli' (psödomakroglossi) bir tablodur ve dokuda gerçek kas hiperplazisi barındırmaz. Pierre Robin sekansı ise makroglossi değil, mikrognatiye bağlı dilin geriye kaçması (glossoptoz) tablosudur.

**Soru 2 (ID: dc6fce7d-3b67-45e3-bd6b-1f63c1c0acda)**
Soru Kökü: Down sendromlu hastalarda dilin ağız boşluğuna sığamayarak dışarı taşması şeklinde izlenen göreceli makroglossi (psödomakroglossi) tablosunun temel embriyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Maksiller gelişim geriliği
Açıklama: Down sendromunda dil dokusunun hücresel kütlesinde artış yoktur; temel problem maksiller gelişim geriliğine bağlı ağız hacminin mutlak olarak küçük kalmasıdır. Lenfatik hamartom lenfanjiyomda, plexiform nörofibrom ise Nörofibromatozis Tip 1'de görülen gerçek kütle artışı nedenleridir. Doku hacmi ile boşluk hacmi arasındaki bu uyumsuzluk klinik olarak göreceli makroglossi olarak adlandırılır.

---

### ÇİFT 294 (Benzerlik: 0.71)

**Soru 1 (ID: 8136fb44-2400-4058-b4bb-876224c3622f)**
Soru Kökü: Elli yaşında erkek hasta, posterior mandibulada son 3 ayda hızla büyüyen, ağrılı, korteksi delip yumuşak dokuya infiltre olmuş radyolüsen bir kitle şikayetiyle başvuruyor. Eş zamanlı boyun lenfadenopatisi saptanıyor. Histolojisinde ameloblastoma benzer kordonlar ve stellat hücreler görülmekle birlikte, belirgin hücresel pleomorfizm, hiperkromazi, artmış atipik mitoz ve polarite kaybı kaydediliyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik karsinom
Açıklama: Hızlı büyüme, lokal invazyon, ağrı ve lenf nodu metastazı gibi agresif klinik bulgulara ek olarak mikroskopide sitolojik atipi, pleomorfizm ve polarite kaybı gibi klasik 'karsinom' özelliklerinin ameloblastoma benzer hücrelerde görülmesi Ameloblastik Karsinom tanısı koydurur. Konvansiyonel ve metastatik ameloblastomlar histolojik olarak benigndir ve sitolojik atipi barındırmazlar. Bu agresif malign dönüşüm ameloblastik karsinomu ölümcül hale getirir.

**Soru 2 (ID: 6c217da5-63ab-40e2-9257-749e401cebcc)**
Soru Kökü: On dört yaşında bir erkek çocuk, mandibular molar bölgesinde diş sürme sorunları yaşayarak kliniğe gönderiliyor. Çekilen panoramik radyografide, gömülü diş üzerinde sınırları iyi izlenen uniloküler radyolüsen büyük bir kavite saptanıyor. Biyopsi materyalinde; embriyonik dental papillayı taklit eden yoğun mezenkimal doku stroma ile bu doku içinde dağılmış ikili (bilaminar) odontojenik epitel zincirleri görülüyor ancak diş minesine veya dentin dokusuna benzer sert madde (kalsifikasyon) seçilemiyor. Bu mikst odontojenik tümör için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom, hem epitel hem de spesifik ektomezenkimal doku (dental papilla) elementlerinin birlikte (mikst) neoplastik proliferasyonudur ve daha ileri yaştaki kompleks odontomaların immatür prekürsör lezyonu olarak görülebilir; bu nedenle henüz dentin veya mine sentezi yoktur. Epiteli ameloblastomla benzer olsa da, stroma yapısı matür bağ dokusu değil dental papilladır ve prognozu çok daha ılımlıdır.

---

### ÇİFT 295 (Benzerlik: 0.71)

**Soru 1 (ID: 21cf3df0-c3fe-4b22-be59-4715bdc1a285)**
Soru Kökü: Ağız mukozasında izlenen, etiyolojisi tam olarak bilinmeyen beyaz lezyonun biyopsisinde parakeratoz ve akantozun yanı sıra spinal hücrelerde karakteristik olarak 'intrasellüler ödem' izlenmektedir. Malignite riski bulunmayan bu patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Lökoödem
Açıklama: Lökoödem, histolojik olarak parakeratoz, akantoz ve stratum spinozumda yoğun intrasellüler ödem birikimiyle karakterize idiopatik ve malignite riski taşımayan beyaz bir lezyondur. Liken planusta ise bazal tabakada destrüksiyon ve subepitelyal bant tarzı lenfosit infiltrasyonu saptanır, ödem birincil bulgu değildir. Bu durum, dokunun gerilmesiyle beyazlığın geçici olarak kaybolmasıyla klinik olarak doğrulanabilir.

**Soru 2 (ID: df955b9f-bd42-456c-b71b-96ba02eb907c)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından 'kazınamayan ve klinik ya da patolojik anlamda başka bir hastalık olarak karakterize edilemeyen beyaz renkli yama ya da plak' şeklinde tanımlanan, %5-25 oranında karsinoma dönüşüm riski taşıyan lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, spesifik bir patolojik tanıdan ziyade kazınamayan beyaz plakları tanımlayan klinik bir terimdir ve premalign potansiyele sahiptir. Psödomembranöz kandidiyazis ise mukozadan kazınabilen beyaz plak formasyonudur.

---

### ÇİFT 296 (Benzerlik: 0.71)

**Soru 1 (ID: 8f9db9de-1415-4ecd-9135-5fc4e99fc00d)**
Soru Kökü: 30 yaşında, bilinen kronik bir sistemik hastalık öyküsü olmayan sağlıklı görünümlü erkek hasta, yanak mukozasında beyaz lekeler şikayetiyle başvuruyor. Muayenede her iki bukkal mukozada ve damakta yer alan, gazlı bezle mekanik olarak kazındığında kolayca parçalanıp sıyrılabilen ve altında hafif eritemli bir yüzey bırakan beyaz-krem renkli pamukçuk lezyonları (psödomembranlar) saptanıyor. Hastanın anamnezinde steroid kullanımı yoktur. Bu klinik tablonun altta yatan hücresel immün yetmezlik riskine bağlı olarak diş hekimini yönlendirmesi gereken tıbbi araştırma aşağıdakilerden hangisidir?
Doğru Şık (B): HIV (AIDS) serolojisi ve T hücre değerlendirmesi
Açıklama: Risk faktörü (diyabet, steroid, kemoterapi) bulunmayan erişkin bir erkekte aniden ortaya çıkan kazınabilir psödomembranöz kandidiyazis (pamukçuk), hücresel T-lenfosit defektini ve immünsüpresyonu gösteren patognomonik klinik kurgudur ve mutlaka HIV/AIDS araştırmasını gerektirir. Serum demir ve B12 tetkikleri kazınabilir beyaz plaklarla değil, doğrudan dil sırtında ağrılı atrofi ve kızarıklıkla (glossit) karşımıza çıkar. Fırsatçı Kandida hifleri, immün sistemin hücresel savunma ayağı çöktüğünde mukozada kontrolsüzce kolonize olarak bu zarları üretir.

**Soru 2 (ID: 93df1f2c-96b6-43bb-8049-88855c73e612)**
Soru Kökü: Elli yaşında kronik sigara kullanıcısı erkek hastanın dil kenarında fiziksel olarak kazınamayan (fikse), kalın beyaz bir plak saptanmıştır. Biyopside epiteliyal hiperplazi, hücresel atipi ve keratin katmanları arasında yoğun fungal hif infiltrasyonu izlenmiştir. Hastanın lezyonu için en doğru tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kronik hiperplastik kandidiyazis
Açıklama: Fungal tahribata karşı epitelin aşırı proliferasyon (hiperplazi) gösterdiği, fiziksel olarak kazınamayan ve displazi potansiyeli taşıdığı için premalign kabul edilen lezyon kronik hiperplastik kandidiyazistir (kandidal lökoplaki). İdiyopatik lökoplakide fungal etken saptanmazken, psödomembranöz kandidiyazis her zaman kazınabilir yapıdadır. Biyopsideki fungal yapı lökoplaki ayrımındaki kritik veridir.

---

### ÇİFT 297 (Benzerlik: 0.71)

**Soru 1 (ID: 2d53a3ac-d61f-491d-8bc7-688bf15c7c3f)**
Soru Kökü: Otuz beş yaşında kadın hastada lokal agresif seyirli bir odontojenik tümör rezeke ediliyor. Kesitlerde amiloid birikimi ve bu amiloid içinde konsantrik laminasyonlarla karakterize kalsifikasyonlar tespit ediliyor. Bu tümör hücrelerinin skuamoz özellik (hücreler arası köprüleşme) göstermesine rağmen malign kabul edilmemesinin en geçerli nedeni nedir?
Doğru Şık (C): İnterselüler köprüleşmeye rağmen mitozun çok az veya hiç olmaması
Açıklama: Kalsifiye epitelyal odontojenik tümörde (Pindborg tümörü) hücreler arası belirgin köprüleşmeler ve nükleer pleomorfizm izlenebilir (skuamöz kanseri taklit edebilir), ancak mitozun çok nadir olması veya hiç olmaması nedeniyle maligniteye progresyon göstermez. Amiloid ve Liesegang kalsifikasyonları bu benign karakterli tümörün patognomoniğidir.

**Soru 2 (ID: 4f9a1924-47a5-401b-bc18-1d551c2276c7)**
Soru Kökü: Otuz beş yaşında bir hastanın anterior maksillasında tespit edilen, diş taşıyan alveolar bölgelerde gelişmiş bir tümörün histolojik incelemesinde; sıkıca paketlenmiş, sitolojik olarak masum epitel adacıkları ve bu adacıklarda anlamlı keratinizasyon olmaksızın gelişen tek tip skuamöz farklılaşma izleniyor. Ancak adacıkların periferinde palizatlaşma (çitlenme) veya merkezde stellat retikulum (yıldızsı) benzeri gevşek ağsı yapı gözlenmemiştir. Tablo özellikleri referans alındığında bu lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Skuamöz odontojenik tümör
Açıklama: Dünya Sağlık Örgütü sınıflandırma tablolarında spesifik olarak vurgulandığı üzere, Skuamöz odontojenik tümör (ortalama yaş 34.8); anlamlı keratinizasyon göstermeyen, sıkıca paketlenmiş ve atipisiz skuamöz epitel adalarından oluşur. En önemli ayırıcı özelliği ise, ameloblastomda tipik olarak beklenen periferik palizatlaşmanın ve merkezi stellat retikulum yapısının bu tümörde BİLHASSA OLMAMASIDIR. Bu sayede ameloblastom varyantlarından kolayca ayrılır.

---

### ÇİFT 298 (Benzerlik: 0.71)

**Soru 1 (ID: 6b617a96-7a0e-4ec2-8e2f-da2f8e2865be)**
Soru Kökü: Aşağıdaki kistlerden hangisi odontojenik gelişim anomalilerinden biri değildir, bunun yerine embriyolojik dönemde yüz katlantılarının (orta ve lateral nazal çıkıntı ile maksiller çıkıntı) birleşme hattındaki ektodermal artıkların kistik dejenerasyonundan kaynaklanan bir yumuşak doku lezyonudur?
Doğru Şık (D): Nazoalveoler (Nazolabial) kist
Açıklama: Nazoalveoler kist (Nazolabial kist), kemik içinde patoloji yaratmayan, nazal kıkırdak ve maksilla üzerindeki yumuşak doku içinde, nazolakrimal kanal bölgesinden geliştiği düşünülen non-odontojenik, gelişimsel bir kisttir. Diğerleri doğrudan diş gelişimi sırasında görev alan epitel tabakalarından köken alan odontojenik kistlerdir.

**Soru 2 (ID: 3d6fe828-d779-4f50-8e9c-1865654203b3)**
Soru Kökü: Sürmeye çalışan dişin baskısı ile kronu saran folikül epitelinde venöz akımın tıkanması ve doku arasına sıvı kaçışı sonucu gelişen, en sık görülen gelişimsel odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Dentigeröz kist
Açıklama: Dentigeröz kist, gömülü diş kronu ile folikül epiteli arasına sıvı toplanmasıyla gelişen ve çenelerde en sık görülen gelişimsel kisttir. Radiküler kist gelişimsel değil inflamatuvar kökenlidir ve non-vital dişlerle ilişkilidir. Mekanizma temel olarak folikül bağ dokusunda ödemin kron-folikül arayüzüne sızmasına dayanır.

---

### ÇİFT 299 (Benzerlik: 0.71)

**Soru 1 (ID: 8fba4627-7c28-42c2-986d-5f55bd55d2e4)**
Soru Kökü: On beş yaşındaki erkek hasta, yanak, dudak ve diş eti mukozasında diskeratotik beyaz kabarıklıkların birleşmesiyle oluşan 'kaldırım taşı' benzeri lezyonlar ile başvuruyor. Dermatolojik muayenesinde alın ve nasolabial kıvrımlar gibi seboreik bölgelerde de benzer döküntüler saptanıyor. Bu hastalığın patogenezinde rol oynayan temel moleküler defekt aşağıdakilerden hangisidir?
Doğru Şık (A): ATP2A2 gen mutasyonuna sekonder kalsiyum pompa disfonksiyonu
Açıklama: Darier hastalığı (Foliküler keratozis), ATP2A2 gen mutasyonu sonucu hücre içi kalsiyum pompasının bozulması ve sekonder desmozom defekti (akantoliz) ile karakterize, mukokutanöz kaldırım taşı görünümü veren otozomal dominant bir hastalıktır. Keratin 4/13 mutasyonu sadece ağız içini tutan Beyaz Sünger Nevüs'ün etkenidir. Desmoglein antikorları pemfigus vulgariste izlenir.

**Soru 2 (ID: 112204b7-a389-4bf0-9429-7da3a7f77544)**
Soru Kökü: Sekiz yaşındaki hastanın yanak mukozasında yaygın kalın beyaz plaklar saptanıyor. Göz hekimi konsültasyonunda, hastanın korneal limbus bölgesinde konjonktival plakların varlığı tespit ediliyor. Histolojik incelemesinde hiperplazi ve diskeratotik hücreler izlenen, kendini sınırlayan bu otozomal dominant patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Herediter benign intraepitelyal diskeratozis (Witkop Sendromu)
Açıklama: Witkop-Von Sallmann Sendromu (Herediter benign intraepitelyal diskeratoz), ektodermal kökenli hücrelerdeki defekte bağlı olarak patognomonik şekilde eşzamanlı oral beyaz lezyonlar ve gözde (korneal limbusta) konjonktival plaklarla seyreden kalıtsal bir sendromdur. Darier hastalığı seboreik deriyi tutarken oküler bulgu vermez; Beyaz Sünger Nevüs ise sadece oral mukoza ile sınırlıdır.

---

### ÇİFT 300 (Benzerlik: 0.71)

**Soru 1 (ID: 702b5a03-d41b-4701-a305-5d08ad08196b)**
Soru Kökü: Altmış yaşında, uzun süredir tütün ve alkol kullanan erkek hastanın dil lateralinde sert ve düzensiz kenarlı bir ülser saptanmıştır. Boyunda fiske lenfadenopatisi olan bu hastanın biyopsi sonucu HPV-negatif Skuamöz Hücreli Karsinom gelmiştir. Bu hastanın patoloji raporunda aşağıdaki histolojik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Onkositik çift sıralı epitel
Açıklama: Onkositik (mitokondriden zengin) çift sıralı epitel ve germinal merkezler Warthin tümörünün (benign tükürük bezi tümörü) karakteristik bulgusudur. Klasik (HPV negatif) keratinize SCC'de ise keratin incileri, atipi ve tek hücre keratinizasyonu izlenir.

**Soru 2 (ID: 72d5604a-ab3e-4755-aaa3-ecc988924dac)**
Soru Kökü: İleri yaşlı, sigara kullanan bir erkeğin sert damağında kenarları kalkık, etrafı düzensiz ülsere lezyon saptanmış ve eksizyonel biyopsi yapılmıştır. Patoloğun skuamöz hücreli karsinom (invaziv malign tümör) olarak yanlış yorumlama ihtimali en yüksek olan, aslında spontan iyileşen bu reaktif lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Nekrotizan sialometaplazi
Açıklama: Nekrotizan sialometaplazi, damak tükürük bezlerinde iskemik nekroz sonucu gelişen benign ve kendini sınırlayan reaktif bir lezyondur. Histolojisinde izlenen yoğun duktal skuamöz metaplazi ve asinüs nekrozu adacıkları, yanlışlıkla skuamöz hücreli karsinom veya mukoepidermoid karsinom olarak yorumlanıp gereksiz majör cerrahilere neden olabilir.

---

### ÇİFT 301 (Benzerlik: 0.71)

**Soru 1 (ID: fa76794c-cef9-4415-b569-e676d9e4d30a)**
Soru Kökü: Ağız mukozasının verrüköz karsinomu ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Uzak dokulara ve lenf nodlarına metastaz potansiyeli çok yüksektir.
Açıklama: Verrüköz karsinom, skuamöz hücreli karsinomun iyi diferansiye bir varyantıdır ve klasik SCC'ye göre hücresel atipisi daha az, metastaz potansiyeli belirgin şekilde daha düşüktür. Ekzofitik, parmaksı çıkıntılar oluşturan bu yavaş büyüyen tümör özellikle tütün emen ileri yaş erkeklerde yanak ve alveolar mukozada izlenir. Tedavisi öncelikli olarak cerrahidir.

**Soru 2 (ID: aac2fae1-223e-45a4-9839-13652cc24283)**
Soru Kökü: Altmış sekiz yaşında, hayatı boyunca sigara kullanmamış ve ağız hijyeni mükemmel olan kadın hastanın ağız mukozasında sürekli nüks eden, multifokal yayılan verrüköz yapıda kazınamayan beyaz plaklar saptanıyor. Bu klinik antite ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Etiyopatogenezinde kronik tütün ürünleri kullanımı majör tetikleyicidir.
Açıklama: Proliferatif verrüköz lökoplaki (PVL), klasik lökoplakilerin aksine sigara ile ilişkisi minimal olan ve spesifik olarak sigara içmeyen ileri yaş kadınlarda izlenen agresif bir prekanseröz lezyondur. Etiyolojisi büyük oranda idiyopatiktir. Kanserleşme oranı diğer tüm lökoplakilerden daha yüksek olup, %100'e varan karsinomatöz transformasyon sergileyebilir.

---

### ÇİFT 302 (Benzerlik: 0.71)

**Soru 1 (ID: 38b2a48f-5e55-44ff-b480-32f63a5bf7ad)**
Soru Kökü: Sistemik skleroz (skleroderma) hastalarının oral ve maksillofasiyal komplikasyonları stomatognatik sistemi ciddi şekilde yıkıma uğratır. Bu hastalarda dilde hareket kısıtlılığı ve sekonder yutkunma güçlüğü (disfaji) oluşmasının mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Dil kaslarında bağ dokusu artışına bağlı lingual fibrozis gelişimi
Açıklama: Sklerodermada izlenen immün disregülasyon, sistemik TH2 sitokin deşarjıyla kontrolsüz bir doku fibrozisi (kollajen yığılımı) yaratır. Bu kaskad sadece deri ve perioral kasları (mikrostomi) tutmakla kalmaz, eş zamanlı olarak dilin kas dokusu içine de sızarak lingual fibrozis oluşturur. Taşlaşan ve elastikiyetini yitiren dil, lokma manipülasyonunu ve yutkunma (disfaji) fonksiyonunu kaybeder.

**Soru 2 (ID: 2262fa0c-21ec-45f5-96d9-ec05966a2572)**
Soru Kökü: Sistemik fibrozis ile ilerleyen ve ağız mukozasında yaygın bağ dokusu artışı sonucu şiddetli ağız açma güçlüğü (trismus benzeri kısıtlılık) ve lingual fibrozise neden olan otoimmün kökenli hastalık aşağıdakilerden hangisidir?
Doğru Şık (E): Skleroderma
Açıklama: Skleroderma, kollajen liflerinin mukoza altı ve deri dokularına kontrolsüz birikimiyle ortaya çıkan, oral bölgede belirgin ağız açma kısıtlılığı ve dilde hareket kaybı (lingual fibrozis) yaratan sklerozan bir hastalıktır. Sjögren sendromu bağ dokusundan ziyade ekzokrin bezlere lenfositik infiltrasyonla ağız kuruluğu yapar. Bu hastalarda dental girişimlerin ergonomisi ciddi şekilde zorlaşır.

---

### ÇİFT 303 (Benzerlik: 0.71)

**Soru 1 (ID: b0eec7e3-a364-47cf-9a5c-4c71ddd6ea9d)**
Soru Kökü: Boyun ön-yan bölgesinde yerleşen, histolojik olarak yassı epitel ve altında lenfoid doku barındıran kistik lezyonlarla ilgili olarak aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (A): Dil hareketinden etkilenmez.
Açıklama: Servikal lenfoepitelyal kistler (brankial yarık kistleri), yassı epitel ve lenfoid dokudan oluşur, lateral yerleşimli olup yutkunma ya da dil hareketiyle mobilize olmazlar (dil hareketinden etkilenmezler). Tiroglossal kanal kistleri ise boyun orta hattında yer alır ve dil hareketiyle yukarı aşağı yönde hareket ederler. Kistin lokalizasyonu ve hareket karakteristiği fizik muayenedeki en önemli ayrımdır.

**Soru 2 (ID: c343b4a2-8ef8-43f5-ac5b-1347d4a3efd6)**
Soru Kökü: Yirmi yaşında erkek hasta, boynunun sağ ön-yan (çene altı ile klavikula arası) bölgesinde fluktuasyon veren şişlik ile başvuruyor. Muayenede yutkunma veya dil hareketleriyle kitlenin hareket etmediği saptanıyor. Eksizyonel biyopsisi yapılan bu kistin lümenini döşeyen yassı epitelin hemen altında histolojik olarak hangi dokunun bulunması patognomoniktir?
Doğru Şık (B): Lenfoid doku
Açıklama: Dil hareketiyle yer değiştirmeyen ve boynun ön-yan bölgesinde yerleşen bu kitle Brankial kleft kistidir. Brankial kistlerin en önemli histolojik özelliği, iç yüzeyi döşeyen yassı epitelin hemen altında yoğun lenfoid doku (bazen germinal merkezler içeren) barındırmasıdır. Tiroid folikülleri dil hareketiyle yer değiştiren tiroglossal kanal kistinde bulunabilir.

---

### ÇİFT 304 (Benzerlik: 0.70)

**Soru 1 (ID: c5de828b-a385-4835-8385-e8ce7eae6353)**
Soru Kökü: Dil dorsumunda filiform papillaların aşırı keratinizasyonu ile kendini gösteren tüylü dil patolojisi ile pseudo-tüylü dil tablosunu birbirinden ayıran en temel klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Filiform papillalarda boyutsal bir uzamanın olmaması
Açıklama: Pseudo-tüylü dil, sadece dilin sırt kısmında bakteriyel pigment veya dışsal boyanmaya bağlı olarak oluşan renk değişikliğidir; filiform papillalarda gerçek bir uzama (keratin birikimine bağlı kıl benzeri yapı) mevcut değildir. Gerçek tüylü dilde ise papillalar mm'lerce uzamış anatomik oluşumlardır. Pseudo varyant genellikle dili fırçalama veya basit hijyen uygulamalarıyla hızla normale döner.

**Soru 2 (ID: 1b314d02-b951-45f9-a971-fa52a4392285)**
Soru Kökü: Sigara kullanımı, kötü ağız hijyeni veya uzun süreli antibiyotik kullanımına bağlı olarak, dil dorsumu orta hattında lokalize epitel uzantılarının normal dökülme periyodunu yitirmesi (deskuamasyon defekti) ve aşırı keratinize olmasıyla 'tüylü dil' tablosu ortaya çıkar. Bu patolojik kaskadta hiperkeratoza uğrayarak klinik görünümü yaratan spesifik anatomik yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Filiform papillalar
Açıklama: Tüylü (saçlı) dilde keratin birikimi ve deskuamasyon defekti sonucu kıl benzeri uzayan, tat tomurcuğu barındırmayan ve mekanik işlev gören yapılar filiform papillalardır. Eritema migrans'ta (coğrafik dil) atrofiye uğrayan papilla türü de yine aynı filiform papillalardır. Fungiform ve sirkumvallat papillalar bu otonom hiperkeratotik uzama döngüsüne katılmazlar.

---

### ÇİFT 305 (Benzerlik: 0.70)

**Soru 1 (ID: 8783f290-e057-41cc-9d75-8a5515975508)**
Soru Kökü: 28 yaşında kadın hasta, dilinde zaman zaman yer değiştiren kırmızı lekeler ve hafif hassasiyet şikayetiyle başvuruyor. İntraoral muayenede, dil dorsumunda filiform papillaların fokal olarak kaybedildiği, sınırları belirgin ve etrafı sarı-beyaz hiperkeratotik bir doku halkası ile çevrili atrofik alanlar izleniyor. Hastanın dermatolojik anamnezinde psöriazis öyküsü mevcuttur. Bu hastadaki oral lezyona vakaların üçte birinde patognomonik olarak eşlik eden diğer dil anomalisi aşağıdakilerden hangisidir?
Doğru Şık (E): Fissürlü dil
Açıklama: Eritema migrans (coğrafik dil) sınırları sürekli yer değiştiren (gezici) ve sarı-beyaz hiperkeratotik halkalarla çevrili papilla kaybı alanlarıdır ve olguların üçte birinde doğrudan fissürlü dil anomalisi tabloya eşlik eder. Tüylü dil papillaların uzaması ile karakterize farklı bir dejeneratif patolojidir ve coğrafik dil kliniğiyle direkt sendromik bağı yoktur. Ayrıca psöriazis, atopi ve Reiter sendromu coğrafik dilde teşhisi doğrulayan kritik sistemik belirteçlerdir.

**Soru 2 (ID: efe7f789-cecd-4307-898a-8749324304a4)**
Soru Kökü: Kırk yaşındaki erkek hastanın dil dorsumunda lokalize, zaman zaman yer değiştirip harita görünümü alan eritemli plaklar saptanırken (Hastada Lezyon A); atmış yaşındaki diğer hastanın dil sırtında siyah-kahverengi, kılcal uzantılar saptanmıştır (Hastada Lezyon B). Bu iki lezyonun patogenezinde rol oynayan filiform papilla dinamiği sırasıyla aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (B): A'da filiform papilla atrofisi ve dökülmesi / B'de filiform papillaların dökülemeyip hiperkeratozla uzaması
Açıklama: Lezyon A (Eritema migrans / Coğrafik dil) dinamik bir epitel reaksiyonu olup, filiform papillaların immün-reaktif veya idiyopatik fokal atrofisi (dökülerek alttaki kırmızı dokuyu göstermesi) ile gelişir. Lezyon B (Tüylü/Saçlı dil) ise bunun tam zıttı bir kinetikle, aynı filiform papillaların normal dökülme periyodunu (deskuamasyon) yitirerek aşırı keratinize olması ve kıl gibi uzamasıyla karakterizedir.

---

### ÇİFT 306 (Benzerlik: 0.70)

**Soru 1 (ID: 64a17366-def7-4a14-ac27-82adf2ea3c39)**
Soru Kökü: Uzun süreli geniş spektrumlu antibiyotik kullanımı sonrası kommensal floranın inhibe olmasıyla gelişen akut eritematöz kandidiyazis (antibiyotik stomatiti), oral mukozada primer olarak hangi morfolojik değişimle kendini gösterir?
Doğru Şık (E): Dil papillalarında diffüz atrofi, kızarıklık ve yanma hissi
Açıklama: Antibiyotik stomatiti bir eritematöz kandidiyazis varyantıdır ve epitelde keratin birikimi (plak) değil, tam tersine papilla atrofisi ve inflamasyon (eritem/kızarıklık) yaratır. Kolay kazınan beyaz plaklar psödomembranöz forma, gezici sarı-beyaz halkalar ise coğrafik dile aittir. Flora dengesinin bozulması fırsatçı mantarların hif formuna geçerek epiteli inceltmesine ve vasküler yatağın belirginleşmesine yol açar.

**Soru 2 (ID: 2d5cf47f-f88e-45d3-804f-85dd93d21eb4)**
Soru Kökü: Klinik olarak 'pamukçuk', 'eritem' ve 'keratin artışı' şeklinde üç temel paterne ayrılan oral kandidiyazis olgularında, aşağıdaki lezyonlardan hangisi **eritem** alt grubunda yer almaz?
Doğru Şık (D): Kandidal lökoplaki
Açıklama: Kandidal lökoplaki (kronik hiperplastik kandidiyazis), mukoza yüzeyinde epitel hiperplazisi ve keratin artışı ile karakterize grupta yer alır ve premaligndir. Akut antibiyotik stomatiti, angular şeylitis, jeneralize eritem ve protez stomatiti ise eritem (kızarıklık) paterni gösteren kandidiyazis formlarıdır. Bu sınıflama mukozanın klinik muayene ile doğru yorumlanmasını sağlar.

---

### ÇİFT 307 (Benzerlik: 0.70)

**Soru 1 (ID: 4dc90ab7-3a6a-4981-96f5-855a18e7f533)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt çenesinde dişe ait belirgin şişlik nedeniyle başvuruyor. Mandibular birinci molar dişi vital tespit ediliyor. Radyolojik muayenede ilgili vital dişin kök ucuna sıkıca kaynaşmış, düzgün bir radyolüsen hat (halo) ile kemikten sınırlandırılmış radyoopak bir kitle bulunuyor. Teşhis ve tedavi amacıyla diş kitle ile birlikte çekiliyor. Lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Sementoblastom
Açıklama: Sementoblastom, sement üreten gerçek bir benign neoplazidir ve patognomonik olarak daima kök ucuna ankiloz (kaynaşık) şekilde izlenir. Periapikal semental displazide ise kök ucunda sınırları daha belirsiz reaktif lezyonlar vardır ve halo işareti bu kadar belirgin değildir. Ayrıca dişe vitalite veren radyografik ve semptomatik tablosuyla sementoblastomda dişin kitle ile beraber cerrahi yolla ortamdan uzaklaştırılması gerekir.

**Soru 2 (ID: 6d89dfc0-3ece-45b6-85fe-2533411ba960)**
Soru Kökü: Asemptomatik 45 yaşındaki kadın hastanın panoramik radyografisinde, alt santral ve lateral dişlerin apekslerinde her dişi saran küçük radyolüsent periapikal kaviteler (litik alanlar) tespit edilmiş, ancak ilgili tüm dişler vital (canlı) olarak saptanmıştır. Bu hastanın lezyonlarının ileri yıllardaki (örneğin 10 yıl sonraki) radyografik evresinde aşağıdakilerden hangisinin olması hekim tarafından beklenir?
Doğru Şık (B): Litik alanların yerini kademeli olarak kemik-sement matrikse (radyoopak lezyonlara) bırakması
Açıklama: Periapikal semental displazi orta yaş kadınların alt anterior bölgesinde dişlerin periapikal bölgesini tutan fibro-osseöz bir displazidir. Başlangıç (litik) fazında osteoklastik yıkımla tıpkı periapikal granülom gibi radyolüsen görünürken, zamanla odontojenik mezenkim hücreleri sement-kemik yapımı başlatır ve lezyon giderek radyoopak bir kitleye (sementom) dönüşür.

---

### ÇİFT 308 (Benzerlik: 0.70)

**Soru 1 (ID: 3ec3236b-b272-4f43-ac6a-8c48d204a63e)**
Soru Kökü: Altmış beş yaşındaki, günde iki paket sigara içen erkek hasta, çene köşelerinde iki taraflı ağrısız şişlik şikayetiyle başvurmuştur. Yapılan incelemede kitlelerin bilateral parotis bezi kaynaklı olduğu saptanmış ve eksizyon kararı alınmıştır. Bu klinik tablodaki hastada en olası tanıyı destekleyen patolojik süreç aşağıdakilerden hangisidir?
Doğru Şık (D): Lenfoid stroma içinde çift sıralı onkositik epitelin izlenmesi
Açıklama: Warthin tümörü (papiller kistadenoma lenfomatozum) sigara içen yaşlı erkeklerde DAİMA parotiste yerleşen, bilateral ve multifokal olma ihtimali en yüksek tümördür. Histolojisinde lenfoid stroma ve germinal merkezler eşliğinde çift sıralı onkositik epitel izlenir.

**Soru 2 (ID: 50efdacf-5787-4cb5-8b03-b74c0755a6e2)**
Soru Kökü: Altmış yaşında sigara içen erkek hasta, boyun bölgesinde (servikal lenf nodu lojunda) saptanan ağrısız kitle ile başvuruyor. Histopatolojik incelemede, kistik boşluklara doğru papiller çıkıntılar yapan, onkositik çift sıralı epitel hücreleri ve stroma içerisinde lenfoid germinal merkezler içeren primer epiteliyal bir tümör saptanıyor. Bu lezyonun patobiyolojisi dikkate alındığında aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (B): Tanı Warthin tümörüdür; lenf nodu içindeki ektopik tükürük bezi dokusundan primer olarak gelişmiştir.
Açıklama: Warthin tümörü (Papiller kistadenoma lenfomatozum), parotis bezi içinde ve bazen parotis içi/servikal lenf nodlarındaki ektopik tükürük bezi embriyolojik artıklarından primer olarak gelişebilen benign bir tümördür. Histolojisinde mitokondriden zengin onkositik hücreler ve lenfoid stroma tipiktir. Boyunda lenf nodu seviyesinde görülmesi karsinom metastazı (örn. mukoepidermoid) olduğu anlamına gelmez, tümörün kendine has ektopik primer gelişim lokasyonudur.

---

### ÇİFT 309 (Benzerlik: 0.70)

**Soru 1 (ID: 1183fde7-a065-4e94-8dcb-3006e874a548)**
Soru Kökü: Dört yaşında erkek çocuk hasta, yüksek ateş ve halsizlik şikayetiyle kliniğe getiriliyor. Yapılan oral muayenede sadece yanak mukozasında, Stensen kanalı çevresinde lokalize ortası beyaz ve eritemli küçük lekeler izleniyor. Hastanın derisinde herhangi bir döküntü tespit edilmiyor. Vaka takdimine göre tanıyı kesinleştiren klinik özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik deri döküntüleri (raş) başlamadan önce bukkal mukozada patognomonik enantemlerin belirmesi
Açıklama: Kızamık enfeksiyonunun en erken patognomonik bulgusu, virüsün epitelyotropik afinitesine sekonder olarak deride raş başlamadan kronolojik olarak önce oral mukozada beliren Koplik lekeleridir. Bu lezyonlar veziküler olmayan maküler yapıdadır ve spesifik olarak Stensen kanalı etrafında (bukkal mukoza) izlenir. Şıklardaki hiperemik papilla uzaması (çilek dil) tablosu, lezyon farklılığı üzerinden ekarte edilen kızıl hastalığına aittir.

**Soru 2 (ID: 03fb8d28-ee09-418c-94ef-cc3b914a9340)**
Soru Kökü: Beş yaşındaki çocuk hastada bilateral olarak el ayasında ve ayak tabanında kırmızı maküller zemininde gelişen veziküller tespit ediliyor. Ağız içi muayenede ise sert damakta yaygın ülserasyonlar mevcuttur. Bu hastanın muayene bulguları değerlendirildiğinde, ayırıcı tanıda aşağıdaki enfeksiyöz durumlardan hangisi **en az olasıdır**?
Doğru Şık (C): Lezyonların Varicella Zoster'e bağlı unilateral dermatom paterni çizmesi
Açıklama: Hastadaki tablo, bilateral ekstremite vezikülleri ve anterior oral lezyonlarla (sert damak) karakterize El-Ayak-Ağız Hastalığıdır (Koksaki A16). Varicella Zoster (Zona) enfeksiyonlarında döküntüler bilateral ekstremitelerde değil, gövdeyi saran tek taraflı (unilateral) ve orta hattı geçmeyen bir dermatom paterni çizer. Bu anatomik lokalizasyon farkı iki veziküler hastalığı kesin çizgilerle ayırır.

---

### ÇİFT 310 (Benzerlik: 0.70)

**Soru 1 (ID: c034ba54-8bca-4dee-bb8c-7ca97b0ace60)**
Soru Kökü: Aşağıdaki viral enfeksiyon bulgularından hangisi, Koksaki virüs ailesine bağlı gelişen herpanjina veya el-ayak-ağız hastalığının klinik tablosuyla **bağdaşmaz**?
Doğru Şık (D): Trigeminal gangliyonda retrograt transport ile ömür boyu latent fazda kalması
Açıklama: Duyu gangliyonlarına (trigeminal gangliyon gibi) retrograt aksonal transport ile taşınarak ömür boyu latent fazda kalma özelliği Herpesviridae ailesine (HSV, VZV) ait bir mekanizmadır. Koksaki virüsler (Picornaviridae) akut, kendini sınırlayan litik enfeksiyonlar yapar ve nöral dokularda latent kalma (reaktivasyon) kaskadı barındırmazlar.

**Soru 2 (ID: 486cb22b-ac48-4353-9844-f2679ec70770)**
Soru Kökü: Aşağıdaki viral ajanlardan hangisinin neden olduğu vezikülobüllöz enfeksiyonun prodromal döneminde, döküntülerden **önce** lezyon bölgesinde kaşıntı ve karıncalanmadan ziyade, patognomonik olarak şiddetli nevraljik boğaz/kulak ağrısı gözlenir?
Doğru Şık (C): Varicella Zoster Virüsü
Açıklama: Herpes Zoster (Varicella Zoster Virüsü - VZV) enfeksiyonlarında, virüsün sinir trasesi boyunca anterograt taşınımı sırasındaki nöral inflamasyona bağlı olarak veziküler döküntülerden önce şiddetli nevraljik ağrı izlenir (örn. Ramsay Hunt sendromu). Herpes simpleks (HSV) enfeksiyonlarında ise prodromal faz daha çok lokal kaşıntı ve karıncalanma hissi ile seyreder. Koksaki virüslerinde ise bu şekilde tipik bir şiddetli nevraljik prodrom kaskadı bulunmaz.

---

### ÇİFT 311 (Benzerlik: 0.70)

**Soru 1 (ID: 6c217da5-63ab-40e2-9257-749e401cebcc)**
Soru Kökü: On dört yaşında bir erkek çocuk, mandibular molar bölgesinde diş sürme sorunları yaşayarak kliniğe gönderiliyor. Çekilen panoramik radyografide, gömülü diş üzerinde sınırları iyi izlenen uniloküler radyolüsen büyük bir kavite saptanıyor. Biyopsi materyalinde; embriyonik dental papillayı taklit eden yoğun mezenkimal doku stroma ile bu doku içinde dağılmış ikili (bilaminar) odontojenik epitel zincirleri görülüyor ancak diş minesine veya dentin dokusuna benzer sert madde (kalsifikasyon) seçilemiyor. Bu mikst odontojenik tümör için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom, hem epitel hem de spesifik ektomezenkimal doku (dental papilla) elementlerinin birlikte (mikst) neoplastik proliferasyonudur ve daha ileri yaştaki kompleks odontomaların immatür prekürsör lezyonu olarak görülebilir; bu nedenle henüz dentin veya mine sentezi yoktur. Epiteli ameloblastomla benzer olsa da, stroma yapısı matür bağ dokusu değil dental papilladır ve prognozu çok daha ılımlıdır.

**Soru 2 (ID: 74801c8f-7649-40b1-b1cd-72cbeef4a037)**
Soru Kökü: Ergenlik çağında rutin kontrole gelen semptomsuz bir hastanın maksilla anterior gömülü dişi hizasında, çok sayıda bir araya gelmiş minyatür (küçük) diş benzeri radyoopak yapı saptanmıştır. Patolog mikroskobunda dentin, mine ve sement dokularının organize olarak ufak dentiküller (diş taslakları) oluşturduğunu raporlamıştır. Bu kitle aşağıdakilerden hangisidir?
Doğru Şık (A): Kompaund odontoma
Açıklama: Odontomalar diş oluşturan hamartomlardır. Kendi içindeki yapısal organizasyona göre ikiye ayrılırlar. Diş oluşturan dokular (mine, dentin) birbirleri ile morfolojik bir düzen içinde bir araya gelip minyatür çoklu dişçikler oluşturuyorsa bu Kompaund (bileşik) odontomdur. Tüm dokular amorf, düzensiz ve ayırt edilemez bir kalsifiye yığın oluşturuyorsa Kompleks odontom adını alır.

---

### ÇİFT 312 (Benzerlik: 0.70)

**Soru 1 (ID: e586d790-9878-4ea0-82e8-5dde8ad0ff8e)**
Soru Kökü: Altmış beş yaşındaki kadın hastanın muayenesinde gingiva ve yanak mukozasında yaygın, nükseden beyaz plaklar izlenmektedir. Anamnezinde sigara kullanmadığı ve ağız hijyeninin oldukça iyi olduğu saptanan hastanın biyopsisinde verrüköz mimari izlenmiştir. Bu klinik tablo için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Proliferatif verrüköz lökoplaki
Açıklama: Proliferatif verrüköz lökoplaki (PVL), klasik lökoplaki profilinin aksine çoğunlukla 60 yaş üstü, sigara içmeyen ve iyi oral hijyene sahip kadınlarda görülen spesifik bir klinik tablodur. Lezyonların çok odaklı olması, sık nüks etmesi ve kanserleşme potansiyelinin %100'e yaklaşabilmesi nedeniyle agresif cerrahi takip gerektirir.

**Soru 2 (ID: 9ff88707-3b49-4a97-989b-597b677bfaea)**
Soru Kökü: Kırk beş yaşındaki immünsüprese bir hastanın ağız içi muayenesinde dilinin lateral kenarlarında tüy benzeri beyaz lezyonlar saptanıyor. Tanısal değerlendirme sırasında spatül ile yapılan kazıma testinde, epiteliyal beyaz plakların yüzeyden kolayca sıyrılabildiği ve altından eritemli-kanamalı bir dokunun ortaya çıktığı gözlemleniyor. Bu fiziksel bulguya göre, hastadaki lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Psödomembranöz kandidiyazis
Açıklama: Fiziksel kazıma testinde beyaz lezyonun yüzeyden sıyrılarak altından kanamalı eritemli dokunun çıkması, patolojinin mukozal epitel hiperkeratozu değil, yüzeyel bir enfeksiyöz membran olduğunu kanıtlar. Bu klinik davranış psödomembranöz kandidiyazise (pamukçuk) özgüdür. Kıllı lökoplaki, idiyopatik lökoplaki ve friksiyonel keratoz epitelin bizzat kendi kalınlaşması olduğu için KESİNLİKLE kazınamazlar.

---

### ÇİFT 313 (Benzerlik: 0.70)

**Soru 1 (ID: 36004137-dfc0-47e6-b6f0-74fd95f420a8)**
Soru Kökü: Plummer-Vinson sendromunda disfajiye (yutma güçlüğüne) neden olan özofageal weblerin (halkalar) anatomik lokalizasyonu ve etiyolojisi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (D): Demir eksikliğine bağlı epiteliyal atrofi zemininde servikal (üst) özofagusta oluşurlar.
Açıklama: Plummer-Vinson sendromunda görülen mukozal fibromüsküler webler, demir deplesyonuna sekonder gelişen atrofi zemininde patognomonik olarak servikal (üst) özofagusta yerleşir ve mekanik obstrüksiyon yapar. Gastroözofageal reflüde izlenen asit maruziyetli metaplastik değişimler alt özofagustadır. B12 defekti mekanik disfaji yapmaz.

**Soru 2 (ID: 9b5a65fb-c3ab-4690-af48-55f75c03c41f)**
Soru Kökü: Sideropenik disfaji olarak da bilinen Plummer-Vinson sendromunun etiyopatogenezi ve malignite potansiyeli hakkında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Mekanik obstrüksiyon yapan hücresel yapılar alt özofagusta asit maruziyetine bağlı gelişir.
Açıklama: Plummer-Vinson sendromunda disfajiye neden olan atrofi kaynaklı fibromüsküler mukozal webler servikal (üst) özofagusta yerleşir; asit maruziyetine bağlı alt özofagus lezyonları gastroözofageal reflü/Barrett metaplazisi dinamiğine aittir. İncelen ve koruyucu bariyerini yitiren skuamöz epitel, karsinojenlerin (alkol, tütün) alt katmanlara penetre olmasına izin vererek doğrudan Skuamöz Hücreli Karsinom (SCC) gelişimine zemin hazırlar. Bu sendrom doğrudan nutrisyonel eksiklik zemininde gelişen sistemik bir karsinogenez modelidir.

---

### ÇİFT 314 (Benzerlik: 0.70)

**Soru 1 (ID: 2d3f7036-e314-4f32-9ff3-e424a18373f1)**
Soru Kökü: Kırk yaşında erkek hastanın panoramik radyografisinde mandibula angulusunda 'sabun köpüğü' görünümünde multiloküler radyolüsent alan saptanıyor. Histolojik kesitlerde santralde yıldızsı retikulum benzeri ağsı bir bağ dokusu ve periferde palizatlaşmış, ters polarite gösteren hiperkromatik küboidal hücreler izleniyor. Kemikte şiddetli ekspansiyon yapan bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Klinikte yavaş büyüyen, ağrısız, multiloküler (sabun köpüğü) radyolüsensi yapan ve histolojisinde ters polariteli palizatlaşmış küboidal/kolumnar bazal hücreler ile merkezde yıldız retikuluma benzeyen yapı içeren tümör konvansiyonel Ameloblastom'dur. Odontojenik miksom da multiloküler olabilir ancak bal peteği veya tenis raketi görünümü yapar ve histolojisi iğsi hücreli bol miksoid stroma içerir. Ameloblastom lokal agresif olup dentin veya mine matriksi üretmez.

**Soru 2 (ID: 6c217da5-63ab-40e2-9257-749e401cebcc)**
Soru Kökü: On dört yaşında bir erkek çocuk, mandibular molar bölgesinde diş sürme sorunları yaşayarak kliniğe gönderiliyor. Çekilen panoramik radyografide, gömülü diş üzerinde sınırları iyi izlenen uniloküler radyolüsen büyük bir kavite saptanıyor. Biyopsi materyalinde; embriyonik dental papillayı taklit eden yoğun mezenkimal doku stroma ile bu doku içinde dağılmış ikili (bilaminar) odontojenik epitel zincirleri görülüyor ancak diş minesine veya dentin dokusuna benzer sert madde (kalsifikasyon) seçilemiyor. Bu mikst odontojenik tümör için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom, hem epitel hem de spesifik ektomezenkimal doku (dental papilla) elementlerinin birlikte (mikst) neoplastik proliferasyonudur ve daha ileri yaştaki kompleks odontomaların immatür prekürsör lezyonu olarak görülebilir; bu nedenle henüz dentin veya mine sentezi yoktur. Epiteli ameloblastomla benzer olsa da, stroma yapısı matür bağ dokusu değil dental papilladır ve prognozu çok daha ılımlıdır.

---

### ÇİFT 315 (Benzerlik: 0.70)

**Soru 1 (ID: c03b7f27-d8cf-4afd-ae9e-dfab492a372d)**
Soru Kökü: Birinci büyük azı dişinin geniş açık kavitesinden dışarı uzanan pembe-kırmızı lezyonu bulunan 16 yaşındaki hastada ayırıcı tanı yapılması planlanmaktadır. Bu lezyonun pulpa polibi (kronik hiperplastik pulpit) mi, yoksa marjinal dişetinden köken alıp kaviteye büyümüş bir fibröz epulis mi olduğunu kesinleştirmek için hekimin değerlendirmesi gereken **en kritik** anatomik parametre aşağıdakilerden hangisidir?
Doğru Şık (B): Dokunun beslendiği taban sapının doğrudan pulpa odasına mı, yoksa çevre servikal dişetine mi bağlandığı
Açıklama: Kronik hiperplastik pulpit (pulpa polibi), doğrudan dişin pulpa odasındaki bağ dokusunun kronik tahrişle aşırı granülasyonu sonucu oklüzal kaviteden dışarı taşarak gelişirken; fibröz epulis, papil veya piyojenik granülom gibi lokalize reaktif lezyonlar interdental marjinal dişetinden köken alıp proksimal kaviteler yoluyla oklüzal yüzeye doğru yayılabilirler. Her ikisi de ağrısız olabilen granülasyon veya bağ dokusu kökenli lezyonlardır, bu yüzden kesin ayırıcı tanı, lezyonun beslenme sapının (kökeninin) lokalizasyonuna bakılarak saptanır.

**Soru 2 (ID: 8ee98570-34ec-4019-b1bb-33f94a44b4fe)**
Soru Kökü: Diş eti üzerinde lokalize kırmızı-sarımsı renkli, granülamatöz görünümlü fokal bir şişlikle başvuran hastada, bu lezyonun epitel dışı kökenli bir 'Parulis' (diş eti çıbanı) olduğunu, reaktif bir proliferasyon olan 'Piyojenik Granülom'dan ayırt etmek için radyografik incelemede hangi spesifik bulgunun aranması zorunludur?
Doğru Şık (B): Lezyonun komşuluğundaki dişte periapikal radyolusensi (likefaksiyon nekrozu/apse) varlığı
Açıklama: Parulis (diş eti çıbanı) izole bir mukoza hastalığı değildir; devital (enfekte) bir dişin kök ucunda oluşan pürülan apsenin kemiği aşarak yumuşak dokuya fistülize olduğu çıkış noktasıdır. Bu nedenle teşhisi için mutlaka ilgili dişte periapikal radyolusensi (apse odağı) aranmalıdır. Piyojenik granülom ise endodontik değil, doğrudan diş taşı/plak gibi lokal irritanlara bağlı gelişen yüzeyel vasküler bir lezyondur.

---

### ÇİFT 316 (Benzerlik: 0.70)

**Soru 1 (ID: ddb93ee7-e44e-4d37-83bf-925c3615d22a)**
Soru Kökü: Amelogenezis imperfekta sendromlarında genetik geçiş paterni ve klinik tablo çeşitlilik gösterir. Tablo verilerine göre, otozomal resesif kalıtım gösteren ve klinik olarak 'mine agenezi' tablosuyla karakterize edilen hipoplastik tip aşağıdakilerden hangisidir?
Doğru Şık (A): Tip IG
Açıklama: Tip IG amelogenezis imperfekta, otozomal resesif geçiş gösteren ve mine agenezi ile karakterize olan spesifik bir hipoplastik varyanttır. Tip IE x'e bağlı dominant, Tip IIC x'e bağlı hipomatürasyon (karla kaplı) formunu temsil eder. Sınıflandırma tablolarında genetik geçiş ile morfolojik tanımın entegre edilmesi ayırıcı tanıda esastır.

**Soru 2 (ID: 32f16faa-f60a-4fe6-a55a-c6765fa1f1c1)**
Soru Kökü: Süt ve kalıcı dentisyonda genetik kökenli olarak minenin miktar ve kalitesini bozan amelogenezis imperfekta hastalığının çeşitli formları mevcuttur. Hastalığın bilinen 4 temel tipi arasında epidemiyolojik olarak en sık izlenen ve mine kalınlığının defektif olduğu varyant aşağıdakilerden hangisidir?
Doğru Şık (A): Hipoplastik tip
Açıklama: Amelogenezis imperfektanın en sık görülen klinik formu, minenin matriks sekresyonunun genetik olarak hatalı olması nedeniyle niceliksel olarak eksik sentezlendiği hipoplastik tiptir. Hipokalsifiye formda mine kalınlığı normal iken yumuşaktır ve kolay aşınır; hipomatürasyon tipinde ise kristal yapısının olgunlaşamamasına bağlı alacalı renklenmeler görülür. Mine agenezisine kadar uzanan ağır tablolar hipoplastik alt gruplarda rapor edilir.

---

### ÇİFT 317 (Benzerlik: 0.70)

**Soru 1 (ID: a3f33e5e-210e-4121-8f0c-95185903d649)**
Soru Kökü: Yenidoğan bir bebeğin ağız içi muayenesinde, damak orta hattında (palatal rafe üzerinde) bilateral palatal rafların embriyolojik kaynaşması sırasında hapsolmuş epitel hücrelerinden köken alan, inci benzeri küçük sarımsı beyaz kistik kabartılar izleniyor. Hiçbir cerrahi tedavi gerektirmeyen bu benign inklüzyon lezyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Epstein incisi
Açıklama: Epstein incileri, yenidoğanlarda doğrudan palatal orta hat üzerinde yerleşen ve embriyolojik epitel inklüzyonu sonucu oluşan keratin dolu kistlerdir. Bohn nodülleri ektopik tükürük bezlerinden gelişir ve damak lateralinde (sert/yumuşak damak sınırı) yerleşirken; yenidoğanın gingival kistleri dental lamina (Serre) artığı kaynaklı olup alveoler kret üzerinde görülür.

**Soru 2 (ID: 8fe39615-055d-4030-84a2-17919f6d1b40)**
Soru Kökü: Damak orta hattında yerleşen kistik lezyonların ayırıcı tanısında Epstein incileri ile Median palatal kist karşılaştırıldığında, bu iki lezyonu birbirinden ayıran temel patofizyolojik durum aşağıdakilerden hangisidir?
Doğru Şık (A): Median palatal kist erişkinlerde görülen intraosseöz (kemik içi) bir patoloji iken, Epstein incisi yenidoğanda görülen mukozal ve yüzeyel inklüzyondur.
Açıklama: Her iki lezyon da damak orta hattında (embriyolojik füzyon hattı) lokalizedir ancak doku derinlikleri ve yaş grupları farklıdır. Epstein incileri yenidoğan bebeklerin damak mukozası içinde hapsolan yüzeyel epitel inklüzyonlarıdır ve kemik dokusunu ilgilendirmez. Median palatal kist ise erişkinlerde saptanan, maksiller palatal kemik içinde radyolusensi yaratan intraosseöz bir patolojidir.

---

### ÇİFT 318 (Benzerlik: 0.70)

**Soru 1 (ID: a1d10c59-7f76-4ef1-ab9a-9ace2d49bd99)**
Soru Kökü: İleri yaşlı kadın hastanın damak bölgesinde tespit edilen ve terminal duktuslardan köken aldığı düşünülen bir tükürük bezi tümörü opere ediliyor. Histopatolojisinde perineöral invazyon sıklığı yüksek olan ve stroma içinde **psammom cisimcikleri** ya da kristaloid yapılar barındıran bu lezyonun en olası tanısı nedir?
Doğru Şık (C): Polimorföz düşük dereceli adenokarsinom
Açıklama: Polimorföz düşük dereceli adenokarsinom (terminal duktus adenokarsinomu), minör tükürük bezlerinin (özellikle damak) yaygın bir tümörüdür. Perineöral invazyon yapması ve histolojisinde psammom cisimcikleri veya kristaloid yapıların izlenmesi ile Adenoid kistik karsinomun 'İsviçre peyniri' kribriform paterninden ayrılır.

**Soru 2 (ID: 4f9a1924-47a5-401b-bc18-1d551c2276c7)**
Soru Kökü: Otuz beş yaşında bir hastanın anterior maksillasında tespit edilen, diş taşıyan alveolar bölgelerde gelişmiş bir tümörün histolojik incelemesinde; sıkıca paketlenmiş, sitolojik olarak masum epitel adacıkları ve bu adacıklarda anlamlı keratinizasyon olmaksızın gelişen tek tip skuamöz farklılaşma izleniyor. Ancak adacıkların periferinde palizatlaşma (çitlenme) veya merkezde stellat retikulum (yıldızsı) benzeri gevşek ağsı yapı gözlenmemiştir. Tablo özellikleri referans alındığında bu lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Skuamöz odontojenik tümör
Açıklama: Dünya Sağlık Örgütü sınıflandırma tablolarında spesifik olarak vurgulandığı üzere, Skuamöz odontojenik tümör (ortalama yaş 34.8); anlamlı keratinizasyon göstermeyen, sıkıca paketlenmiş ve atipisiz skuamöz epitel adalarından oluşur. En önemli ayırıcı özelliği ise, ameloblastomda tipik olarak beklenen periferik palizatlaşmanın ve merkezi stellat retikulum yapısının bu tümörde BİLHASSA OLMAMASIDIR. Bu sayede ameloblastom varyantlarından kolayca ayrılır.

---

### ÇİFT 319 (Benzerlik: 0.70)

**Soru 1 (ID: c0239e53-3680-4091-b8ac-ced5d19dfa42)**
Soru Kökü: İmmünsüprese bir hastanın dil lateralinde izlenen kıllı lökoplaki lezyonunun biyopsi incelemesinde saptanan patolojik değişikliklerin asıl etyolojik ajanı olan virüs aşağıdakilerden hangisidir?
Doğru Şık (A): Epstein-Barr virüsü
Açıklama: Kıllı lökoplaki, zemininde yatan hastalık (AİDS) ne olursa olsun lezyonu doğrudan üreten ajan epitel hücrelerini enfekte eden Epstein-Barr (EBV) virüsüdür. İnsan papilloma virüsü (HPV) siğil, papillom ve oral skuamöz kanser etyolojisinde rol alırken, EBV spesifik olarak bu beyaz tüy benzeri lezyonun baş aktörüdür. Moleküler testlerde EBV DNA'sı gösterilmesi tanıyı kesinleştirir.

**Soru 2 (ID: 9ff88707-3b49-4a97-989b-597b677bfaea)**
Soru Kökü: Kırk beş yaşındaki immünsüprese bir hastanın ağız içi muayenesinde dilinin lateral kenarlarında tüy benzeri beyaz lezyonlar saptanıyor. Tanısal değerlendirme sırasında spatül ile yapılan kazıma testinde, epiteliyal beyaz plakların yüzeyden kolayca sıyrılabildiği ve altından eritemli-kanamalı bir dokunun ortaya çıktığı gözlemleniyor. Bu fiziksel bulguya göre, hastadaki lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Psödomembranöz kandidiyazis
Açıklama: Fiziksel kazıma testinde beyaz lezyonun yüzeyden sıyrılarak altından kanamalı eritemli dokunun çıkması, patolojinin mukozal epitel hiperkeratozu değil, yüzeyel bir enfeksiyöz membran olduğunu kanıtlar. Bu klinik davranış psödomembranöz kandidiyazise (pamukçuk) özgüdür. Kıllı lökoplaki, idiyopatik lökoplaki ve friksiyonel keratoz epitelin bizzat kendi kalınlaşması olduğu için KESİNLİKLE kazınamazlar.

---

### ÇİFT 320 (Benzerlik: 0.70)

**Soru 1 (ID: 36f226aa-d9f2-4d06-a754-20400634d6ef)**
Soru Kökü: WHO 2022 kılavuzunda odontojenik gelişimsel kistlerin kökenleri epitel kaynaklarına göre ayrılmıştır. Kuronunu tamamlamış bir dişin foliküler bağ dokusu kalıntıları olan indirgenmiş mine (folikül) epitelinden köken alan gelişimsel kistler, aşağıdakilerin hangisinde birlikte doğru verilmiştir?
Doğru Şık (B): Dentigeröz kist ve Erüpsiyon kisti
Açıklama: Diş gelişiminde mine yapımı bittikten sonra kuronun üzerini örten indirgenmiş mine epiteli kalıntıları, çenelerde oluşan kistlerin üç ana kaynağından biridir. Gömülü dişin kronunu saran Dentigeröz kist ve bu kistin diş sürerken yumuşak dokudaki yansıması olan Erüpsiyon kisti mine epiteli kalıntılarından gelişir. Seçenek C ve E'deki kistler dental lamina (Serres) epitelinden, A'daki inflamatuar kistler ise sıklıkla Malassez epitel artıklarından köken alır.

**Soru 2 (ID: 3d6fe828-d779-4f50-8e9c-1865654203b3)**
Soru Kökü: Sürmeye çalışan dişin baskısı ile kronu saran folikül epitelinde venöz akımın tıkanması ve doku arasına sıvı kaçışı sonucu gelişen, en sık görülen gelişimsel odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Dentigeröz kist
Açıklama: Dentigeröz kist, gömülü diş kronu ile folikül epiteli arasına sıvı toplanmasıyla gelişen ve çenelerde en sık görülen gelişimsel kisttir. Radiküler kist gelişimsel değil inflamatuvar kökenlidir ve non-vital dişlerle ilişkilidir. Mekanizma temel olarak folikül bağ dokusunda ödemin kron-folikül arayüzüne sızmasına dayanır.

---

### ÇİFT 321 (Benzerlik: 0.70)

**Soru 1 (ID: fcc2b75b-dbb1-4833-b482-26c77fc36096)**
Soru Kökü: Altmış beş yaşında, uzun yıllardır tütün çiğneme alışkanlığı olan erkek hastanın alveolar mukozasında geniş, düzensiz parmaksı çıkıntılar gösteren ekzofitik bir lezyon saptanıyor. Biyopside metastaz potansiyeli çok düşük, iyi diferansiye bir epitelyal tümör izleniyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Verrüköz karsinom
Açıklama: Verrüköz karsinom; sıklıkla tütün emen/çiğneyen yaşlı erkeklerde, en sık alveolar mukoza ve yanakta yerleşen, parmaksı çıkıntılar gösteren ekzofitik ve çok iyi diferansiye bir SCC varyantıdır. Metastaz potansiyeli klasik SCC'ye göre oldukça düşüktür ve tedavisi öncelikle cerrahidir. Klasik SCC ülseratif ve daha invaziv bir paternde büyür.

**Soru 2 (ID: 72d5604a-ab3e-4755-aaa3-ecc988924dac)**
Soru Kökü: İleri yaşlı, sigara kullanan bir erkeğin sert damağında kenarları kalkık, etrafı düzensiz ülsere lezyon saptanmış ve eksizyonel biyopsi yapılmıştır. Patoloğun skuamöz hücreli karsinom (invaziv malign tümör) olarak yanlış yorumlama ihtimali en yüksek olan, aslında spontan iyileşen bu reaktif lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Nekrotizan sialometaplazi
Açıklama: Nekrotizan sialometaplazi, damak tükürük bezlerinde iskemik nekroz sonucu gelişen benign ve kendini sınırlayan reaktif bir lezyondur. Histolojisinde izlenen yoğun duktal skuamöz metaplazi ve asinüs nekrozu adacıkları, yanlışlıkla skuamöz hücreli karsinom veya mukoepidermoid karsinom olarak yorumlanıp gereksiz majör cerrahilere neden olabilir.

---

### ÇİFT 322 (Benzerlik: 0.70)

**Soru 1 (ID: 21cf3df0-c3fe-4b22-be59-4715bdc1a285)**
Soru Kökü: Ağız mukozasında izlenen, etiyolojisi tam olarak bilinmeyen beyaz lezyonun biyopsisinde parakeratoz ve akantozun yanı sıra spinal hücrelerde karakteristik olarak 'intrasellüler ödem' izlenmektedir. Malignite riski bulunmayan bu patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Lökoödem
Açıklama: Lökoödem, histolojik olarak parakeratoz, akantoz ve stratum spinozumda yoğun intrasellüler ödem birikimiyle karakterize idiopatik ve malignite riski taşımayan beyaz bir lezyondur. Liken planusta ise bazal tabakada destrüksiyon ve subepitelyal bant tarzı lenfosit infiltrasyonu saptanır, ödem birincil bulgu değildir. Bu durum, dokunun gerilmesiyle beyazlığın geçici olarak kaybolmasıyla klinik olarak doğrulanabilir.

**Soru 2 (ID: 3e0b2e34-c5b0-430f-9a9e-5446aad14276)**
Soru Kökü: Etiyolojisi tam olarak bilinmeyen, bukkal mukozada süt beyazı opalesan bir görünümle karakterize olan lökoödemin histopatolojik incelemesinde aşağıdaki hücresel değişikliklerden hangisinin izlenmesi beklenir?
Doğru Şık (A): Spinal hücrelerde intrasellüler ödem
Açıklama: Lökoödem, spinal tabakadaki (stratum spinozum) epitel hücrelerinde sıvı birikimi sonucu oluşan intrasellüler ödem ile karakterize benign bir mukozal varyasyondur. Prickle hücrelerinde perinükleer eozinofilik kondensasyon ise beyaz sünger nevüsün tipik histolojik bulgusudur. Lökoödem displastik bir değişiklik barındırmaz ve malignite potansiyeli yoktur.

---

### ÇİFT 323 (Benzerlik: 0.70)

**Soru 1 (ID: 0849e8a5-b67f-499c-b8cd-191aaa5b56bb)**
Soru Kökü: Konjenital sifiliz patogenezinde Hutchinson triyadı bileşenlerinden biri olarak kabul edilen ve ileri yaşlarda fotofobi ile körlüğe kadar gidebilen görme kaybı kaskadını tetikleyen spesifik lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): İnterstisyel keratit
Açıklama: Hutchinson triyadının oküler bileşeni, kornea stromasında spiroket antijenlerine karşı gelişen inflamasyon ve neovaskülarizasyon sonucu ortaya çıkan interstisyel keratittir. Bu süreç korneanın saydamlığını yitirmesine (opasifikasyon) neden olur. Katarakt, rubella (kızamıkçık) enfeksiyonunun klasik oküler bulgusu iken, sifilizde doğrudan derin korneal destrüksiyon izlenir.

**Soru 2 (ID: 83c73d04-9910-4dab-a8df-d622a3c82fa1)**
Soru Kökü: Konjenital sifiliz geçişi olan yenidoğanların gelişim sürecinde diş, göz ve kulak anatomisini ilgilendiren spesifik anomaliler ortaya çıkar. 
I. Keratit
II. Kama biçimli insisiv dişler ve dut biçimli molar dişler
III. Yarık damak deformitesi
IV. Sekizinci kafa çifti tutulumuna bağlı sağırlık
Buna göre, klasik Hutchinson triyadında yukarıdaki klinik bulgulardan hangileri birlikte tanımlanır?
Doğru Şık (D): I, II ve IV
Açıklama: Konjenital sifilizin klasik belirtisi olan Hutchinson triyadı tam olarak şu üç bileşenden oluşur: Dişlerde mine ve dentin gelişim defektine bağlı kama (Hutchinson) dişleri ve dut molarlar, gözde inflamatuvar keratit ve 8. sinir tutulumuna sekonder sensörinöral sağırlık. Yarık damak embriyolojik bir füzyon defekti olup Treponema pallidum enfeksiyonunun spesifik gelişimsel triyadı içerisinde yer almaz. Sistemik treponemal yayılım doğrudan ektodermal yapılara zarar vererek bu üçlü patolojiyi oluşturur.

---

### ÇİFT 324 (Benzerlik: 0.70)

**Soru 1 (ID: 4bd8e666-a21d-4bb2-bae0-8ffd57ada375)**
Soru Kökü: Yedi yaşında erkek çocuk, ateş ve yutkunma zorluğu şikayetiyle getiriliyor. İntraoral muayenede sert damak, dil ve yanak mukozasında ülserler saptanırken, hastanın el ayalarında ve ayak tabanlarında da çok sayıda küçük veziküler döküntü tespit ediliyor. Özellikle okul çağındaki çocuklarda hızlı bulaşan bu klinik tablonun patogenezinde rol oynayan etken mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Koksaki virüs
Açıklama: Oral kavitedeki ülserlere el ve ayaklardaki veziküllerin eşlik ettiği hastalık karakteristik olarak Koksaki virüslerin neden olduğu El-Ayak-Ağız hastalığıdır. Herpes virüsleri genellikle yalnızca mukozalarda veya ilişkili deri dermatomlarında lokalize kalırken, el ayası ve ayak tabanı tutulumu koksaki virüs enfeksiyonunun spesifik klinik imzasıdır. Bu tablo son derece bulaşıcı olup genellikle oral kavitede damak ve dili primer olarak hedefler.

**Soru 2 (ID: a96b4499-f7ce-423f-a660-41c59e39c5f8)**
Soru Kökü: Çocuk hastada yüksek ateş ve boğaz ağrısıyla seyreden bir hastalık tablosunda klinisyen yumuşak damak ve posterior orofarinkste yaygın veziküler döküntüler tespit etmiştir. Diş eti tutulumu izlenmeyen ve klinik olarak tonsillit ile sıklıkla karışan bu Koksaki virüs enfeksiyonunun tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Herpanjina
Açıklama: Herpanjina, Koksaki virüslerin neden olduğu, spesifik olarak ağızın en arka bölgesi olan yumuşak damak ve orofarinkste herpetik enfeksiyona benzeyen veziküller oluşturan hastalıktır. Herpes simplex (gingivostomatit) diş etlerini ve ön bölgeleri de güçlü şekilde tutarken herpanjina posterior hatta sınırlı kalma eğilimi nedeniyle tonsillit veya farenjit sanılarak yanlış tedavi alabilir. Veziküler lezyon formasyonu herpanjinanın tonsillitten ayırıcı klinik karakteridir.

---

### ÇİFT 325 (Benzerlik: 0.70)

**Soru 1 (ID: daae3145-63c6-434a-8c67-7efd70ffe704)**
Soru Kökü: HPV 6 ve 11 ile güçlü ilişkisi bilinen, nazal kavitede yerleşen ve papiller projeksiyonlar oluşturan lezyon aşağıdakilerden hangisidir?
Doğru Şık (A): Fungiform sinonazal papillom
Açıklama: Fungiform sinonazal papillom büyük oranda HPV 6 ve 11 ile ilişkilidir. Ters sinonazal papillom HPV 16, 18, 57 ile; orofarengeal karsinom ise HPV 16 ağırlıklı yüksek riskli tiplerle ilişkilidir.

**Soru 2 (ID: 528d6842-3091-4796-9eb7-d5cb494c62ed)**
Soru Kökü: Oral bölgede izlenen verruka vulgaris lezyonunun etiyopatogenezinden sorumlu olan ve histopatolojik olarak perinükleer haloya sahip hücrelerle karakterize benign tabloya en sık yol açan virüs tipleri aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (A): HPV 6 ve 11
Açıklama: Oral verruka vulgaris, skuamöz epitelin benign hiperplazisi olup kaynağa göre etiyolojisinde primer olarak HPV 6 ve 11 tipleri rol oynamaktadır. Perinükleer halolu koilositlerin varlığı bu viral enfeksiyonun hücresel düzeydeki karakteristik patognomonik yansımasıdır. HPV 13 ve 32 fokal epitel hiperplazisinde (Heck hastalığı) görülürken, yüksek riskli 16 ve 18 tipleri skuamöz hücreli karsinom gelişimi ile doğrudan ilişkilidir.

---

### ÇİFT 326 (Benzerlik: 0.70)

**Soru 1 (ID: a8934bbb-1a15-4a51-a94a-aaaa149c517f)**
Soru Kökü: Yedi yaşındaki erkek hasta, üst ve alt daimi kesici dişlerinde insizal kenara doğru fıçı gibi daralan, ortası çentikli morfolojik defektler şikayetiyle kliniğe başvuruyor. Anamnezinde ileri derecede işitme kaybı olduğu öğreniliyor. Bu hastadaki işitme kaybının primer anatomik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Nervus vestibulocochlearis destrüksiyonu
Açıklama: Kama biçimli insisiv (Hutchinson dişleri) ve sağırlık bulguları, konjenital sifilizin patognomonik Hutchinson triyadını oluşturur. Bu triadda izlenen nörolojik defekt, temporal kemik ve labirentin inflamasyonu sonucu 8. kraniyal sinirin (Nervus vestibulocochlearis) veya iç kulağın doğrudan tahrip olmasıyla gelişen sensörinöral sağırlıktır. Fasiyal sinir ve genikulat gangliyon tutulumu Ramsay Hunt sendromunun özelliğidir ve bu tabloda görülmez.

**Soru 2 (ID: 83c73d04-9910-4dab-a8df-d622a3c82fa1)**
Soru Kökü: Konjenital sifiliz geçişi olan yenidoğanların gelişim sürecinde diş, göz ve kulak anatomisini ilgilendiren spesifik anomaliler ortaya çıkar. 
I. Keratit
II. Kama biçimli insisiv dişler ve dut biçimli molar dişler
III. Yarık damak deformitesi
IV. Sekizinci kafa çifti tutulumuna bağlı sağırlık
Buna göre, klasik Hutchinson triyadında yukarıdaki klinik bulgulardan hangileri birlikte tanımlanır?
Doğru Şık (D): I, II ve IV
Açıklama: Konjenital sifilizin klasik belirtisi olan Hutchinson triyadı tam olarak şu üç bileşenden oluşur: Dişlerde mine ve dentin gelişim defektine bağlı kama (Hutchinson) dişleri ve dut molarlar, gözde inflamatuvar keratit ve 8. sinir tutulumuna sekonder sensörinöral sağırlık. Yarık damak embriyolojik bir füzyon defekti olup Treponema pallidum enfeksiyonunun spesifik gelişimsel triyadı içerisinde yer almaz. Sistemik treponemal yayılım doğrudan ektodermal yapılara zarar vererek bu üçlü patolojiyi oluşturur.

---

### ÇİFT 327 (Benzerlik: 0.70)

**Soru 1 (ID: 447fe8de-817d-4929-957b-1fb16f596453)**
Soru Kökü: On iki yaşındaki erkek hastanın ağız içi muayenesinde çok sayıda papiller projeksiyon izlenmektedir. Biyopsi sonucunda akantoz, parakeratoz ve koilositler tespit edilmiştir. Malignite riski bulunmadığı bilinen bu klinik tablo ile spesifik olarak ilişkili etken aşağıdakilerden hangisidir?
Doğru Şık (B): HPV 13
Açıklama: Çocukluk ve adölesan dönemde sık izlenen, ağız içinde multipl papiller yapılar oluşturan ve malign potansiyeli olmayan lezyon Fokal Epitelyal Hiperplazi (Heck Hastalığı) tablosudur. Bu hastalığın patogenezinde spesifik olarak HPV 13 ve 32 tipleri rol oynar. HPV 6 ve 11 daha çok papillom ve kondiloma akuminatum etiyolojisinde yer alır.

**Soru 2 (ID: c0b21f81-b3fa-4541-8fe1-487bb08f1b53)**
Soru Kökü: On yaşındaki hastanın ağız içi muayenesinde, her iki yanak mukozasını kaplayan kalın, yumuşak, süngerimsi beyaz plaklar saptanıyor. Alınan biyopsinin histopatolojik incelemesinde stratum spinozum tabakasındaki prickle (dikensi) hücrelerde sitoiskelet çöküşünü simgeleyen 'perinükleer eozinofilik kondensasyon' raporlanıyor. Bu hastadaki lezyonun etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Keratin 4 ve Keratin 13 genlerinde mutasyon
Açıklama: Keratin 4 ve 13 gen mutasyonu, sitoiskelet ağının bozulmasına ve spesifik olarak hücrelerde hidropik dejenerasyon ile patognomonik 'perinükleer eozinofilik kondensasyon' oluşumuna neden olarak Cannon hastalığını (Beyaz Sünger Nevüs) tetikler. Kalsiyum pompa defekti Darier hastalığına, EBV kıllı lökoplakiye, sürtünme friksiyonel keratoza yol açar.

---

### ÇİFT 328 (Benzerlik: 0.70)

**Soru 1 (ID: aa3d5fb3-78d5-46a7-97d8-1c9d5541bd53)**
Soru Kökü: Odontojenik epitel artıkları, çene kemiklerinde gelişen kistlerin kökenini oluşturur. Buna göre Hertwig epitel kök kılıfı artıklarından (Malassez epitel artıkları) köken alan kist aşağıdakilerden hangisidir?
Doğru Şık (C): Radiküler kist
Açıklama: Diş kök gelişimi sırasında rol alan Hertwig epitel kök kılıfının artıkları olan Malassez epitel kalıntıları, periodontal aralıkta bulunur ve pulpa enfeksiyonlarına (apikal periodontitis) bağlı inflamatuar sitokinlerin uyarısıyla prolife olarak radiküler (periapikal) kisti oluşturur. Dentigeröz kist mine organı (indirgenmiş mine epiteli) artıklarından köken alırken; odontojenik keratokist, lateral periodontal ve glandüler odontojenik kistler Serres epitel artıklarından (dental lamina) gelişir.

**Soru 2 (ID: 36f226aa-d9f2-4d06-a754-20400634d6ef)**
Soru Kökü: WHO 2022 kılavuzunda odontojenik gelişimsel kistlerin kökenleri epitel kaynaklarına göre ayrılmıştır. Kuronunu tamamlamış bir dişin foliküler bağ dokusu kalıntıları olan indirgenmiş mine (folikül) epitelinden köken alan gelişimsel kistler, aşağıdakilerin hangisinde birlikte doğru verilmiştir?
Doğru Şık (B): Dentigeröz kist ve Erüpsiyon kisti
Açıklama: Diş gelişiminde mine yapımı bittikten sonra kuronun üzerini örten indirgenmiş mine epiteli kalıntıları, çenelerde oluşan kistlerin üç ana kaynağından biridir. Gömülü dişin kronunu saran Dentigeröz kist ve bu kistin diş sürerken yumuşak dokudaki yansıması olan Erüpsiyon kisti mine epiteli kalıntılarından gelişir. Seçenek C ve E'deki kistler dental lamina (Serres) epitelinden, A'daki inflamatuar kistler ise sıklıkla Malassez epitel artıklarından köken alır.

---

### ÇİFT 329 (Benzerlik: 0.70)

**Soru 1 (ID: 185049ee-9f32-485b-a9c2-205f4d9010e0)**
Soru Kökü: On dört yaşında kadın hasta, üst ön dişlerinde sürme eksikliği ve sert şişlik şikayetiyle muayene ediliyor. Radyografide maksilla anterior bölgede gömülü bir kanin dişini çevreleyen, dentigeröz kiste benzeyen ancak içerisinde punktat (noktasal) radyoopak kalsifikasyonlar barındıran bir lezyon saptanıyor. Histolojisinde duktus benzeri boşluklar oluşturan epitelyal rozetler izleniyor. Bu hasta için en olası odontojenik tümör tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Adenomatoid odontojenik tümör
Açıklama: Adenomatoid odontojenik tümör (AOT); genç kadınlarda, ön maksilla yerleşimli ve tipik olarak gömülü bir kanin dişi ile ilişkili olan, bez yapısını taklit eden benign bir proliferasyondur. Kalsifiye epitelyal odontojenik tümör (Pindborg tümörü) de radyoopak odaklar içerse de lokalizasyon tipik olarak posterior mandibuladır ve ileri yaşta görülür. AOT hamartomatöz kabul edildiği için basit enükleasyon yeterlidir.

**Soru 2 (ID: 6c217da5-63ab-40e2-9257-749e401cebcc)**
Soru Kökü: On dört yaşında bir erkek çocuk, mandibular molar bölgesinde diş sürme sorunları yaşayarak kliniğe gönderiliyor. Çekilen panoramik radyografide, gömülü diş üzerinde sınırları iyi izlenen uniloküler radyolüsen büyük bir kavite saptanıyor. Biyopsi materyalinde; embriyonik dental papillayı taklit eden yoğun mezenkimal doku stroma ile bu doku içinde dağılmış ikili (bilaminar) odontojenik epitel zincirleri görülüyor ancak diş minesine veya dentin dokusuna benzer sert madde (kalsifikasyon) seçilemiyor. Bu mikst odontojenik tümör için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom, hem epitel hem de spesifik ektomezenkimal doku (dental papilla) elementlerinin birlikte (mikst) neoplastik proliferasyonudur ve daha ileri yaştaki kompleks odontomaların immatür prekürsör lezyonu olarak görülebilir; bu nedenle henüz dentin veya mine sentezi yoktur. Epiteli ameloblastomla benzer olsa da, stroma yapısı matür bağ dokusu değil dental papilladır ve prognozu çok daha ılımlıdır.

---

### ÇİFT 330 (Benzerlik: 0.70)

**Soru 1 (ID: e3c33502-340f-4d11-8058-c280a7e226fc)**
Soru Kökü: Rutin oral kanser taraması amacıyla biopsi alınan diffüz beyaz bir bukkal mukozal lezyonun mikroskobik değerlendirmesinde, parakeratoz ve akantozun yanı sıra epitelin stratum spinozum tabakasında berrak hidropik dejenerasyon ve hücrelerde 'perinükleer eozinofilik kondensasyon' saptanmıştır. Bu spesifik histolojik bulgu aşağıdaki hastalıklardan hangisine aittir?
Doğru Şık (C): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüsün patognomonik histopatolojik belirteçlerinden biri, keratinositlerin çekirdek etrafındaki keratin filamanlarının anormal yoğunlaşmasına bağlı olarak izlenen 'perinükleer eozinofilik kondensasyon'dur. Lökoödemde de intrasellüler ödem izlense de bu özgün keratin kondensasyon paterni görülmez. Keratin genlerindeki mutasyon hücre iskeletinin bu karakteristik çökmesine neden olur.

**Soru 2 (ID: 1add0393-72b7-4e85-bd84-f4260057e5eb)**
Soru Kökü: Puberte öncesi beliren bilateral asemptomatik beyaz lezyonlarla karakterize olan ve histopatolojik incelemesinde dikensi (prickle) hücrelerde 'perinükleer eozinofilik kondensasyon' saptanan genetik defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüs (Cannon hastalığı), keratin 4 ve 13 genlerindeki otozomal dominant bir mutasyon sonucu gelişir ve mikroskopide karakteristik perinükleer eozinofilik kondensasyon barındırır. Herediter benign intraepitelyal diskeratoziste ise kondensasyon değil, diskeratotik hücreler ön plandadır. Hastalığın bilateral olması ve puberte öncesi başlangıcı genetik altyapısını doğrular.

---

### ÇİFT 331 (Benzerlik: 0.70)

**Soru 1 (ID: 09c5542c-9191-44f6-a820-2a3d46591a70)**
Soru Kökü: Ağrılı kırmızı dil, mukozal atrofi ve demir eksikliği anemisi ile karakterize edilen Plummer-Vinson sendromunun beklenen klasik bulguları arasında aşağıdakilerden hangisi **değildir**?
Doğru Şık (A): Bağırsaklarda mukozal ülserasyon
Açıklama: Plummer-Vinson (Paterson-Kelly-Brown) sendromunun klasik kliniği üst gastrointestinal sistemi etkileyerek demir eksikliği anemisi, disfaji, özofageal webler ve oral/özofageal skuamöz hücreli karsinom riskinde belirgin artış ile seyreder. Alt gastrointestinal sistemde inflamatuvar barsak hastalıklarına benzer bir mukozal ülserasyon bu sendromun patolojik tanımlamaları arasında yer almaz. Epitel dokudaki kronik atrofi, yassı hücreli displazilerin gelişimine zemin hazırlayan temel nedendir.

**Soru 2 (ID: 9b5a65fb-c3ab-4690-af48-55f75c03c41f)**
Soru Kökü: Sideropenik disfaji olarak da bilinen Plummer-Vinson sendromunun etiyopatogenezi ve malignite potansiyeli hakkında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Mekanik obstrüksiyon yapan hücresel yapılar alt özofagusta asit maruziyetine bağlı gelişir.
Açıklama: Plummer-Vinson sendromunda disfajiye neden olan atrofi kaynaklı fibromüsküler mukozal webler servikal (üst) özofagusta yerleşir; asit maruziyetine bağlı alt özofagus lezyonları gastroözofageal reflü/Barrett metaplazisi dinamiğine aittir. İncelen ve koruyucu bariyerini yitiren skuamöz epitel, karsinojenlerin (alkol, tütün) alt katmanlara penetre olmasına izin vererek doğrudan Skuamöz Hücreli Karsinom (SCC) gelişimine zemin hazırlar. Bu sendrom doğrudan nutrisyonel eksiklik zemininde gelişen sistemik bir karsinogenez modelidir.

---

### ÇİFT 332 (Benzerlik: 0.70)

**Soru 1 (ID: db53f825-4431-406b-b80a-14170d3fb9f4)**
Soru Kökü: Klinik muayenede alveolar mukoza üzerinde sarımsı-kırmızı renkli, fokal bir yumuşak doku kabarıklığı gözlenen hastanın radyografisinde ilişkili dişte apikal radyolüsensi saptanmıştır. Patolojik terminolojide 'Parulis' (Gumboil) olarak adlandırılan bu lezyonun doku karşılığı aşağıdakilerden hangisidir?
Doğru Şık (E): Perfore olan apikal sinüsün açılma yerindeki granülasyon dokusu
Açıklama: Parulis, bir periapikal apsenin alveolar kemiği erode edip (fistülize olup) mukoza yüzeyine açıldığı bölgede, kronik drenaja reaksiyon olarak gelişen fokal granülasyon dokusu nodülüdür. En güçlü çeldirici olan kistik formasyon epitel kökenlidir ve kemik içinde (periapikal) gelişir, mukoza yüzeyindeki bu yumuşak reaktif büyüme değildir. Bu lezyon enfeksiyon kaynağı kurutulduğunda spontan olarak fibrozise gider veya iyileşir.

**Soru 2 (ID: c03b7f27-d8cf-4afd-ae9e-dfab492a372d)**
Soru Kökü: Birinci büyük azı dişinin geniş açık kavitesinden dışarı uzanan pembe-kırmızı lezyonu bulunan 16 yaşındaki hastada ayırıcı tanı yapılması planlanmaktadır. Bu lezyonun pulpa polibi (kronik hiperplastik pulpit) mi, yoksa marjinal dişetinden köken alıp kaviteye büyümüş bir fibröz epulis mi olduğunu kesinleştirmek için hekimin değerlendirmesi gereken **en kritik** anatomik parametre aşağıdakilerden hangisidir?
Doğru Şık (B): Dokunun beslendiği taban sapının doğrudan pulpa odasına mı, yoksa çevre servikal dişetine mi bağlandığı
Açıklama: Kronik hiperplastik pulpit (pulpa polibi), doğrudan dişin pulpa odasındaki bağ dokusunun kronik tahrişle aşırı granülasyonu sonucu oklüzal kaviteden dışarı taşarak gelişirken; fibröz epulis, papil veya piyojenik granülom gibi lokalize reaktif lezyonlar interdental marjinal dişetinden köken alıp proksimal kaviteler yoluyla oklüzal yüzeye doğru yayılabilirler. Her ikisi de ağrısız olabilen granülasyon veya bağ dokusu kökenli lezyonlardır, bu yüzden kesin ayırıcı tanı, lezyonun beslenme sapının (kökeninin) lokalizasyonuna bakılarak saptanır.

---

### ÇİFT 333 (Benzerlik: 0.70)

**Soru 1 (ID: ef6f3f5e-4f0e-4be7-ae95-77f53e2238fc)**
Soru Kökü: Kıllı lökoplakinin patogenezinde rol oynayan hücresel kaskad, aşağıdakilerden hangisinin gerçekleşmesiyle doğrudan tetiklenerek Epstein-Barr Virüsünün (EBV) reaktivasyonuna zemin hazırlar?
Doğru Şık (C): İmmün sistemin hücresel yanıtındaki CD4+ T lenfosit sayısının dramatik çöküşü
Açıklama: Kıllı lökoplaki otonom bir neoplazi değil, fırsatçı bir viral enfeksiyondur. Patofizyolojisi, HIV enfeksiyonu veya immünsüpresif ilaçlar nedeniyle hücresel bağışıklığın orkestra şefi olan CD4+ T lenfositlerin tükenmesine (dramatik çöküşüne) dayanır. Bu immün boşluk, latent EBV'nin dil lateralindeki keratinositlerde reaktive olarak litik sitopatik siklusa (balon hücreleri formasyonu) girmesine neden olur.

**Soru 2 (ID: eb241d0b-09e9-4f4e-ab43-1952a7eeae95)**
Soru Kökü: İmmünsüprese bireylerde dilin lateral sınırlarında izlenen ve mekanik olarak kazınamayan kıllı (hairy) lökoplaki lezyonunun histopatolojik incelemesinde, Epstein-Barr virüsünün (EBV) sitopatik etkisine bağlı olarak epitelde spesifik olarak aşağıdaki hücrelerden hangisi izlenir?
Doğru Şık (D): Balon hücreleri
Açıklama: Kıllı lökoplakide, EBV'nin stratum spinosuma yerleşip viral replikasyon yapması sonucu epitelde hiperparakeratoz, akantoz ve spesifik 'balon hücreleri' görülür. Perinükleer eozinofilik kondensasyon beyaz sünger nevüsün, intrasellüler ödem ise lökoödemin karakteristik mikroskobik bulgusudur. Balon hücreleri viral sitopatik hasarın doğrudan göstergesidir.

---

### ÇİFT 334 (Benzerlik: 0.70)

**Soru 1 (ID: 60ccb7a8-169f-435a-9dc5-6449d72c2b2e)**
Soru Kökü: Gingiva hiperplazisine yol açan sistemik ilaç grupları incelendiğinde, aşağıdaki ilaçlardan hangisinin bu yan etkiye neden olan moleküller arasında olması **beklenmez**?
Doğru Şık (D): Amoksisilin
Açıklama: Gingival hiperplaziye en sık neden olan ilaç grupları arasında antikonvülzanlar (karbamazepin, fenitoin, valproat vb.), kalsiyum kanal blokerleri (amlodipin, nifedipin, verapamil vb.), bağışıklık baskılayıcılar (siklosporin), makrolid grubu antibiyotikler (eritromisin) ve oral kontraseptifler yer alır. Geniş spektrumlu bir beta-laktam antibiyotik olan amoksisilin, gingival bağ dokusu proliferasyonunu tetikleyen bu özgün yan etki profiline sahip farmakolojik ajanlar arasında bulunmaz.

**Soru 2 (ID: 255ac9a3-682e-42e9-b022-64192a1b0359)**
Soru Kökü: Diş eti hiperplazisi (gingival overgrowth) yan etkisiyle bilinen ve genellikle bu tabloyu tetikleyen antibiyotik aşağıdakilerden hangisidir?
Doğru Şık (A): Eritromisin
Açıklama: Eritromisin, antibiyotikler arasında gingival hiperplaziye neden olabilen spesifik bir makrolid ajandır. Diğer klasik nedenler antikonvülzanlar, kalsiyum kanal blokerleri, siklosporin ve oral kontraseptiflerdir.

---

### ÇİFT 335 (Benzerlik: 0.70)

**Soru 1 (ID: d70b9497-1783-4ff4-8900-275e750ffe37)**
Soru Kökü: Altmış yaşında kadın hasta, mandibulada sınırları oldukça silik ve çevre kortekste şiddetli perforasyon yaratan agresif kitle şikayeti ile kliniğe yönlendiriliyor. Biyopsi materyalinde epitel hücrelerinin yoğun şeffaf (clear) sitoplazmik kompartımanlardan oluştuğu, arada ince bağ dokusu septaları bulunduğu raporlanıyor. Hastanın tümör dokusu perinevral infiltrasyon ve servikal metastaz şüphesi doğuruyor. Sık rastlanmayan, infiltratif ve sitolojik karakteriyle kötü prognoza işaret eden bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Şeffaf hücreli odontojenik karsinom
Açıklama: Şeffaf hücreli odontojenik karsinom (Clear Cell Odontogenic Carcinoma), hücrelerin glikojen deposundan zengin sitoplazmasının preparasyon esnasında erimesiyle net şeffaf görünüm bıraktığı, ileri yaş grupta şiddetli bölgesel kemik destrüksiyonu ve uzak metastazla seyreden malign tümördür. Diğer şeffaf hücreli metastatik tümörlerin (Böbrek hücreli ca vb.) dışlanmasından sonra tanı konur ve blok diseksiyon gerektirir.

**Soru 2 (ID: 59ece315-941d-44dc-9b24-54fc7fe934d5)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, sert damakta hafif ağrılı ve yüzeyi mavimsi görünen bir şişlik ile başvuruyor. Biyopsi mikroskopisinde skuamöz hücreler ve mukus sekrete eden hücrelerin karışımından oluşan bir yapı saptanmış olup kistik hücreler musikarmin boyası ile eflatun-pembe pozitif reaksiyon vermiştir. Bu tümör aşağıdakilerden hangisidir?
Doğru Şık (E): Mukoepidermoid karsinom
Açıklama: Mukoepidermoid karsinom, skuamöz, ara tip ve mukus (müsin) üreten kistik adenokarsinomatöz hücrelerden oluşur. Mukus üreten hücrelerin varlığı, musin spesifik bir boya olan musikarmin ile kolayca doğrulanır. Damakta mavimsi şişlik yapması sık görülen bir klinik paternidir.

---

### ÇİFT 336 (Benzerlik: 0.70)

**Soru 1 (ID: 59ece315-941d-44dc-9b24-54fc7fe934d5)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, sert damakta hafif ağrılı ve yüzeyi mavimsi görünen bir şişlik ile başvuruyor. Biyopsi mikroskopisinde skuamöz hücreler ve mukus sekrete eden hücrelerin karışımından oluşan bir yapı saptanmış olup kistik hücreler musikarmin boyası ile eflatun-pembe pozitif reaksiyon vermiştir. Bu tümör aşağıdakilerden hangisidir?
Doğru Şık (E): Mukoepidermoid karsinom
Açıklama: Mukoepidermoid karsinom, skuamöz, ara tip ve mukus (müsin) üreten kistik adenokarsinomatöz hücrelerden oluşur. Mukus üreten hücrelerin varlığı, musin spesifik bir boya olan musikarmin ile kolayca doğrulanır. Damakta mavimsi şişlik yapması sık görülen bir klinik paternidir.

**Soru 2 (ID: a1d10c59-7f76-4ef1-ab9a-9ace2d49bd99)**
Soru Kökü: İleri yaşlı kadın hastanın damak bölgesinde tespit edilen ve terminal duktuslardan köken aldığı düşünülen bir tükürük bezi tümörü opere ediliyor. Histopatolojisinde perineöral invazyon sıklığı yüksek olan ve stroma içinde **psammom cisimcikleri** ya da kristaloid yapılar barındıran bu lezyonun en olası tanısı nedir?
Doğru Şık (C): Polimorföz düşük dereceli adenokarsinom
Açıklama: Polimorföz düşük dereceli adenokarsinom (terminal duktus adenokarsinomu), minör tükürük bezlerinin (özellikle damak) yaygın bir tümörüdür. Perineöral invazyon yapması ve histolojisinde psammom cisimcikleri veya kristaloid yapıların izlenmesi ile Adenoid kistik karsinomun 'İsviçre peyniri' kribriform paterninden ayrılır.

---

### ÇİFT 337 (Benzerlik: 0.70)

**Soru 1 (ID: fbec1b64-8ab7-4a2d-a9cd-051e0498e1f6)**
Soru Kökü: 25 yaşında erkek hasta, sağ yanak mukozasında iki gündür var olan, çok ağrılı ve etrafı kırmızı halolu ülseratif lezyon şikayetiyle başvuruyor. Anamnezinde, lezyonun başından beri sıvı dolu bir kabarcık (vezikül) evresi geçirmediği, doğrudan ülser olarak ortaya çıktığı öğreniliyor. 
Klinisyenin bu bilgiyi baz alarak tanıda Sekonder İntraoral Herpes enfeksiyonunu ekarte etmesinin temel doku-kinetik gerekçesi aşağıdakilerden hangisidir?
Doğru Şık (E): Sekonder intraoral herpesin hareketli mukozada değil sert damak gibi keratinize mukozalarda gelişmesi ve daima bir vezikül fazı içermesi
Açıklama: Sekonder intraoral herpes sadece kemiğe sıkı tutunan keratinize mukozalarda (sert damak, diş eti) görülür ve mutlaka vezikülden ülsere dönüşür. Hastada yanak gibi hareketli/non-keratinize bir mukozada ve vezikül evresi olmadan beliren ülseratif lezyon, aftöz stomatitin (rekürren aft) klasik bulgusudur.

**Soru 2 (ID: b50fec6f-c64c-4563-a241-bb4aa5810d41)**
Soru Kökü: İntraoral mukozalarda izlenen patolojilerin ayırıcı tanısı yapılırken, lezyonun epitelin hangi katmanına tutunduğu veya hangi tip mukozayı tercih ettiği klinik tanıyı yönlendirir. Buna göre sekonder herpes enfeksiyonları ağız içinde sıklıkla hangi spesifik alanda yerleşim gösterir?
Doğru Şık (C): Sert damak ve diş eti gibi keratinize/kemiğe bağlı mukozalarda
Açıklama: İntraoral sekonder herpes enfeksiyonları (HSV reaktivasyonu), anatomik kural olarak her zaman sert damak ve diş eti (gingiva) gibi keratinize ve alttaki kemiğe sıkıca tutunan mukozalarda ortaya çıkar. Aftöz stomatit (RAS) ise tam tersine yanak, dudak içi ve vestibül gibi hareketli/non-keratinize mukozaları tercih eder. Bu lokalizasyon farkı, vezikül/ülser ayrımındaki altın standarttır.

---

### ÇİFT 338 (Benzerlik: 0.70)

**Soru 1 (ID: d55fb047-43f0-467f-95de-78dabb36adc6)**
Soru Kökü: Epitelyal kökenli odontojenik tümörlerin yaş demografisi ve hücre histolojisi incelendiğinde, diğer odontojenik tümörlere kıyasla daha çok ileri yaş grubunda (>50 yaş) görülen, şeffaf sitoplazmalı hücrelerden ve bunları ayıran fibröz septalardan oluşan, çevre kemik dokusuna ve sınır sinir dokularına agresif infiltre olan, kötü prognozlu primer malignite aşağıdakilerden hangisidir?
Doğru Şık (B): Şeffaf hücreli odontojenik karsinom
Açıklama: Şeffaf hücreli odontojenik karsinom, odontojenik epitelden gelişen, ileri yaşlarda (ortalama 53 yaş) ortaya çıkan ve sitoplazmasında glikojen birikimine bağlı şeffaf görünümlü malign hücre kümeleriyle karakterize bir lezyondur. Bu tümör çevre kemik dokuya güçlü bir şekilde infiltre olur ve sıklıkla perinöral invazyon gösterdiği için prognozu genelde diğer odontojenik tümör tiplerinden daha kötüdür. Diğer odontojenik tümörlerin çoğu 2., 3. veya 4. dekatta görülür.

**Soru 2 (ID: 4f9a1924-47a5-401b-bc18-1d551c2276c7)**
Soru Kökü: Otuz beş yaşında bir hastanın anterior maksillasında tespit edilen, diş taşıyan alveolar bölgelerde gelişmiş bir tümörün histolojik incelemesinde; sıkıca paketlenmiş, sitolojik olarak masum epitel adacıkları ve bu adacıklarda anlamlı keratinizasyon olmaksızın gelişen tek tip skuamöz farklılaşma izleniyor. Ancak adacıkların periferinde palizatlaşma (çitlenme) veya merkezde stellat retikulum (yıldızsı) benzeri gevşek ağsı yapı gözlenmemiştir. Tablo özellikleri referans alındığında bu lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Skuamöz odontojenik tümör
Açıklama: Dünya Sağlık Örgütü sınıflandırma tablolarında spesifik olarak vurgulandığı üzere, Skuamöz odontojenik tümör (ortalama yaş 34.8); anlamlı keratinizasyon göstermeyen, sıkıca paketlenmiş ve atipisiz skuamöz epitel adalarından oluşur. En önemli ayırıcı özelliği ise, ameloblastomda tipik olarak beklenen periferik palizatlaşmanın ve merkezi stellat retikulum yapısının bu tümörde BİLHASSA OLMAMASIDIR. Bu sayede ameloblastom varyantlarından kolayca ayrılır.

---

### ÇİFT 339 (Benzerlik: 0.70)

**Soru 1 (ID: 0ea5279a-57f5-4315-93f6-2d86d0f91c8f)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, jeneralize diş eti büyümesi ve kanama şikayetiyle başvurmuştur. Anamnezinde çocukluğundan beri epilepsi tedavisi gördüğü öğrenilen bu hastada, gingival hiperplaziye neden olması **en muhtemel** ilaç aşağıdakilerden hangisidir?
Doğru Şık (D): Fenitoin
Açıklama: Fenitoin bir antikonvülzandır ve epilepsi tedavisinde kullanılır, gingival hiperplazinin en klasik nedenlerinden biridir. Nifedipin kalsiyum kanal blokörü, siklosporin immünosüpresan, eritromisin ise antibiyotik olarak hiperplazi yapar.

**Soru 2 (ID: dc3d86ac-02c0-4358-8738-a58085b25f85)**
Soru Kökü: Aşağıdaki farmakolojik ajanlardan hangisinin kullanımına bağlı olarak hastada gingival hiperplazi gelişimi **beklenmez**?
Doğru Şık (D): Amoksisilin
Açıklama: Gingival hiperplazi temel olarak antikonvülzanlar, kalsiyum kanal blokerleri (Amlodipin vb.), Siklosporin, Eritromisin ve oral kontraseptifler tarafından tetiklenir. En yaygın kullanılan antibiyotiklerden biri olan Amoksisilin bu yan etki spektrumunda yer almaz. Eritromisin ise makrolid grubundan bir antibiyotik olmasına rağmen hücresel kalsiyum metabolizmasına etkisiyle bu tabloya nadiren yol açabilen spesifik bir istisnadır.

---

### ÇİFT 340 (Benzerlik: 0.70)

**Soru 1 (ID: 4115c2b6-c0c8-4d0a-9830-4707e151fe0e)**
Soru Kökü: Dünya Sağlık Örgütü'nün (WHO) lökoplaki tanımı ve lezyonun biyolojik davranışları ile ilgili;
I. Diğer hiçbir hastalıkla karakterize edilemeyen ve kazınamayan beyaz plaklardır.
II. İstatistiksel olarak lezyonların %5-25'i skuamöz hücreli karsinoma dönüşür.
III. Dudak lezyonlarında maligniteye dönüşüm oranı ağız tabanına göre daha düşüktür.
IV. Nodüler ve verrüköz tipteki lökoplakilerin malignite riski homojen olanlardan daha düşüktür.
ifadelerinden hangileri doğrudur?
Doğru Şık (E): I, II ve III
Açıklama: WHO tanımına göre lökoplakiler, mukozadan kazınamayan ve başka spesifik bir hastalık teşhisi konulamayan tanısal atık sepeti lezyonlarıdır (I doğru). Belirtilen %5-25 kanserleşme aralığı lökoplakinin global malign transformasyon verisidir (II doğru). Ağız tabanı karsinom açısından dudaktan daha riskli bir anatomik bölgedir (III doğru). Ancak verrüköz ve nodüler tipler, homojen lökoplakilere göre çok daha yüksek risk taşır (IV yanlış).

**Soru 2 (ID: 0d3671bb-ae7c-40ed-bc58-e30510278bd7)**
Soru Kökü: Oral bölgede izlenen premalign mukoza lezyonlarından hangileri skuamöz hücreli karsinoma (SCC) dönüşüm açısından diğerlerinden çok daha yüksek risk taşır?
I. Proliferatif Verrüköz Lökoplaki
II. Revers Smokers Palatal Lezyonu
III. Kıllı Lökoplaki
IV. Oral Submuköz Fibrozis
Doğru Şık (B): I, II ve IV
Açıklama: Proliferatif Verrüköz Lökoplaki (bazı serilerde %100 risk), Revers Smokers Palatal Lezyonu (5 yıldızlı) ve betel cevizi ilişkili Oral Submuköz Fibrozis (5 yıldızlı) oral kavitenin en agresif premalign lezyonlarındandır. Epstein-Barr virüsü kökenli Kıllı (Hairy) Lökoplaki ise adına rağmen hücresel displazi barındırmaz ve kanserleşme (malignite) riski SIFIRDIR.

---

### ÇİFT 341 (Benzerlik: 0.70)

**Soru 1 (ID: 2694c66d-28db-4271-9e1b-4b900f718bc9)**
Soru Kökü: Kırk beş yaşındaki erkek hasta alt vestibül sulkusta buruşuk, beyaz renkli, sınırları belirsiz hiperkeratotik bir mukoza lezyonu ile başvurmuştur. Anamnezinde uzun yıllardır bu spesifik bölgeye yerleştirerek tütün çiğnediği öğrenilmiştir. Lezyonun ileri dönem biyolojik davranışı değerlendirildiğinde, bu alanda hangi neoplazinin gelişim riskinin arttığı düşünülmelidir?
Doğru Şık (B): Verrüköz karsinom
Açıklama: Dumansız tütün veya tütün çiğneme alışkanlığı, mukozada kimyasal karsinojenlerin lokal olarak uzun süre maruz kalmasına yol açarak 'tütün keratozu' adı verilen spesifik bir hiperkeratoz yaratır. Bu lezyonların zaman içinde hücresel atipi göstererek doğrudan invaziv ve ekzofitik karakterli verrüköz karsinom formuna dönüşme riski istatistiksel olarak belirgindir.

**Soru 2 (ID: e586d790-9878-4ea0-82e8-5dde8ad0ff8e)**
Soru Kökü: Altmış beş yaşındaki kadın hastanın muayenesinde gingiva ve yanak mukozasında yaygın, nükseden beyaz plaklar izlenmektedir. Anamnezinde sigara kullanmadığı ve ağız hijyeninin oldukça iyi olduğu saptanan hastanın biyopsisinde verrüköz mimari izlenmiştir. Bu klinik tablo için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Proliferatif verrüköz lökoplaki
Açıklama: Proliferatif verrüköz lökoplaki (PVL), klasik lökoplaki profilinin aksine çoğunlukla 60 yaş üstü, sigara içmeyen ve iyi oral hijyene sahip kadınlarda görülen spesifik bir klinik tablodur. Lezyonların çok odaklı olması, sık nüks etmesi ve kanserleşme potansiyelinin %100'e yaklaşabilmesi nedeniyle agresif cerrahi takip gerektirir.

---

### ÇİFT 342 (Benzerlik: 0.70)

**Soru 1 (ID: 81a074a8-c725-4d9c-a1db-b0792accf00b)**
Soru Kökü: Granüler hücreli tümörün üzerini örten mukozal epitelde izlenen ve mikroskobik incelemede invaziv skuamöz hücreli karsinomu taklit ederek yanlış malignite tanısına yol açabilen histopatolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Psödoepitelyomatöz hiperplazi
Açıklama: Granüler hücreli tümörde tümörün üzerindeki skuamöz epitel, reaktif olarak alt bağ dokusuna doğru derin parmaksı uzantılar gönderir. Bu tabloya psödoepitelyomatöz hiperplazi denir ve deneyimsiz gözlerde infiltratif SCC ile karıştırılabilir.

**Soru 2 (ID: 2c097f4e-e3da-404f-ab09-bf6e73f447b5)**
Soru Kökü: Kırk beş yaşında erkek hastanın dil dorsumunda saptanan, yüzeyi sağlam ancak pütürlü görünümlü yavaş büyüyen nodüler şişlik tamamen eksize ediliyor. İncelemeyi yapan genel patolog, yüzeydeki yassı epitel dokusunun altındaki bağ dokusuna doğru şiddetli rete peg uzantıları gösterdiğini raporluyor ve 'skuamöz hücreli karsinom invazyonu' şüphesiyle konsültasyon istiyor. Konsültan ağız patoloğu ise epitelin altında karsinom hücreleri değil, büyük, pembe, granüler sitoplazmalı hücre kordonları saptayarak maligniteyi ekarte ediyor. Bu yanıltıcı histolojik epitel bulgusunun adı aşağıdakilerden hangisidir?
Doğru Şık (C): Pseudoepitelyomatöz hiperplazi
Açıklama: Granüler hücreli tümör dilde sık yerleşen benign bir lezyondur, ancak histopatolojik incelemede üzerinde yer alan epitelde kanseri (SCC) son derece taklit eden hücresel bir aşağı büyüme reaksiyonu oluşturur. Bu görünüme 'pseudoepitelyomatöz (epitelyomatözü taklit eden) hiperplazi' denir. Yanlışlıkla kanser tanısı konmasını engellemek için, epitelin hemen altındaki büyük granüler sitoplazmalı hücre adalarının (kas veya Schwann hücre orjinli) varlığının teyit edilmesi esastır.

---

### ÇİFT 343 (Benzerlik: 0.70)

**Soru 1 (ID: 93df1f2c-96b6-43bb-8049-88855c73e612)**
Soru Kökü: Elli yaşında kronik sigara kullanıcısı erkek hastanın dil kenarında fiziksel olarak kazınamayan (fikse), kalın beyaz bir plak saptanmıştır. Biyopside epiteliyal hiperplazi, hücresel atipi ve keratin katmanları arasında yoğun fungal hif infiltrasyonu izlenmiştir. Hastanın lezyonu için en doğru tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kronik hiperplastik kandidiyazis
Açıklama: Fungal tahribata karşı epitelin aşırı proliferasyon (hiperplazi) gösterdiği, fiziksel olarak kazınamayan ve displazi potansiyeli taşıdığı için premalign kabul edilen lezyon kronik hiperplastik kandidiyazistir (kandidal lökoplaki). İdiyopatik lökoplakide fungal etken saptanmazken, psödomembranöz kandidiyazis her zaman kazınabilir yapıdadır. Biyopsideki fungal yapı lökoplaki ayrımındaki kritik veridir.

**Soru 2 (ID: e586d790-9878-4ea0-82e8-5dde8ad0ff8e)**
Soru Kökü: Altmış beş yaşındaki kadın hastanın muayenesinde gingiva ve yanak mukozasında yaygın, nükseden beyaz plaklar izlenmektedir. Anamnezinde sigara kullanmadığı ve ağız hijyeninin oldukça iyi olduğu saptanan hastanın biyopsisinde verrüköz mimari izlenmiştir. Bu klinik tablo için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Proliferatif verrüköz lökoplaki
Açıklama: Proliferatif verrüköz lökoplaki (PVL), klasik lökoplaki profilinin aksine çoğunlukla 60 yaş üstü, sigara içmeyen ve iyi oral hijyene sahip kadınlarda görülen spesifik bir klinik tablodur. Lezyonların çok odaklı olması, sık nüks etmesi ve kanserleşme potansiyelinin %100'e yaklaşabilmesi nedeniyle agresif cerrahi takip gerektirir.

---

### ÇİFT 344 (Benzerlik: 0.70)

**Soru 1 (ID: 2d3f7036-e314-4f32-9ff3-e424a18373f1)**
Soru Kökü: Kırk yaşında erkek hastanın panoramik radyografisinde mandibula angulusunda 'sabun köpüğü' görünümünde multiloküler radyolüsent alan saptanıyor. Histolojik kesitlerde santralde yıldızsı retikulum benzeri ağsı bir bağ dokusu ve periferde palizatlaşmış, ters polarite gösteren hiperkromatik küboidal hücreler izleniyor. Kemikte şiddetli ekspansiyon yapan bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Klinikte yavaş büyüyen, ağrısız, multiloküler (sabun köpüğü) radyolüsensi yapan ve histolojisinde ters polariteli palizatlaşmış küboidal/kolumnar bazal hücreler ile merkezde yıldız retikuluma benzeyen yapı içeren tümör konvansiyonel Ameloblastom'dur. Odontojenik miksom da multiloküler olabilir ancak bal peteği veya tenis raketi görünümü yapar ve histolojisi iğsi hücreli bol miksoid stroma içerir. Ameloblastom lokal agresif olup dentin veya mine matriksi üretmez.

**Soru 2 (ID: 59bd8c3d-c8f5-4ed8-aaad-e0533106a1ec)**
Soru Kökü: Çene kemiklerinde nadir görülen, radyografik olarak 'sabun köpüğü' manzarası verebilen, mikroskobik olarak döşeyici epiteli bulunmayan, bunun yerine içleri kanla dolu geniş sinüzoidal boşluklar ve bu boşlukları çevreleyen bağ dokusu içerisinde bol miktarda osteoklast tipi multinükleer dev hücreler içeren lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Anevrizmal kemik kisti
Açıklama: Anevrizmal kemik kisti, gerçek bir epiteliyal kist olmayıp; arteriyovenöz malformasyonlar zemininde geliştiği düşünülen, kemiği ekspanse eden ve histolojik olarak kan dolu kavernöz/sinüzoidal kistik boşluklar ve septalarda dev hücreler içeren bir patolojidir. Travmatik (basit) kemik kistleri içi boş veya berrak sıvıyla dolu boşluklar iken, anevrizmal kistler yoğun hemorajik içeriğe sahiptir ve solid santral dev hücreli granülomdan ayırıcı tanısında bu kan göllenmeleri kritik rol oynar.

---

### ÇİFT 345 (Benzerlik: 0.70)

**Soru 1 (ID: 2d3f7036-e314-4f32-9ff3-e424a18373f1)**
Soru Kökü: Kırk yaşında erkek hastanın panoramik radyografisinde mandibula angulusunda 'sabun köpüğü' görünümünde multiloküler radyolüsent alan saptanıyor. Histolojik kesitlerde santralde yıldızsı retikulum benzeri ağsı bir bağ dokusu ve periferde palizatlaşmış, ters polarite gösteren hiperkromatik küboidal hücreler izleniyor. Kemikte şiddetli ekspansiyon yapan bu tümör aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastom
Açıklama: Klinikte yavaş büyüyen, ağrısız, multiloküler (sabun köpüğü) radyolüsensi yapan ve histolojisinde ters polariteli palizatlaşmış küboidal/kolumnar bazal hücreler ile merkezde yıldız retikuluma benzeyen yapı içeren tümör konvansiyonel Ameloblastom'dur. Odontojenik miksom da multiloküler olabilir ancak bal peteği veya tenis raketi görünümü yapar ve histolojisi iğsi hücreli bol miksoid stroma içerir. Ameloblastom lokal agresif olup dentin veya mine matriksi üretmez.

**Soru 2 (ID: 25bba371-9627-4b23-ab1e-8452b37b7b17)**
Soru Kökü: Ortalama 45 yaşlarındaki erkek bir hastada, geçmişte mandibulada tedavi edilmiş bir kistik/tümöral kitlenin ardından, akciğerde saptanan multiple nodüllerden biyopsi alınıyor. Histolojik incelemede, kitlelerde sitolojik atipi, pleomorfizm veya malignite özellikleri bulunmayan 'benign konvansiyonel ameloblastom' alanları izleniyor. Orijin dokudan uzakta yerleşen bu tablonun Dünya Sağlık Örgütü (2022) sınıflamasındaki tam karşılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Metastatik ameloblastom
Açıklama: Metastatik ameloblastom, histolojik ve sitolojik olarak tamamen 'benign/borderline' konvansiyonel ameloblastom özelliği göstermesine rağmen biyolojik olarak uzak organa (en sık akciğer) hematojen veya lenfatik metastaz yapabilme kapasitesine sahip neoplazidir. Eğer metastaz yapan hücreler bizzat sitolojik atipi, nekroz ve malign karsinom özellikleri gösterseydi tanı 'Ameloblastik Karsinom' olurdu. Malignitenin bu iki alt grubunun ayrımı atipinin varlığına/yokluğuna dayanır.

---

### ÇİFT 346 (Benzerlik: 0.70)

**Soru 1 (ID: 8136fb44-2400-4058-b4bb-876224c3622f)**
Soru Kökü: Elli yaşında erkek hasta, posterior mandibulada son 3 ayda hızla büyüyen, ağrılı, korteksi delip yumuşak dokuya infiltre olmuş radyolüsen bir kitle şikayetiyle başvuruyor. Eş zamanlı boyun lenfadenopatisi saptanıyor. Histolojisinde ameloblastoma benzer kordonlar ve stellat hücreler görülmekle birlikte, belirgin hücresel pleomorfizm, hiperkromazi, artmış atipik mitoz ve polarite kaybı kaydediliyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik karsinom
Açıklama: Hızlı büyüme, lokal invazyon, ağrı ve lenf nodu metastazı gibi agresif klinik bulgulara ek olarak mikroskopide sitolojik atipi, pleomorfizm ve polarite kaybı gibi klasik 'karsinom' özelliklerinin ameloblastoma benzer hücrelerde görülmesi Ameloblastik Karsinom tanısı koydurur. Konvansiyonel ve metastatik ameloblastomlar histolojik olarak benigndir ve sitolojik atipi barındırmazlar. Bu agresif malign dönüşüm ameloblastik karsinomu ölümcül hale getirir.

**Soru 2 (ID: 9b2ffab1-2dd1-4295-8dbe-5ee0d6d4d955)**
Soru Kökü: Otuz beş yaşında erkek hastanın mandibula molar bölgesinden çıkarılan gömülü dişle ilişkili lezyonunda, ameloblastom benzeri epitel içinde nükleusunu kaybetmiş 'hayalet (ghost) hücreler', etrafında distrofik kalsifikasyonlar ve dentinoid matriks birikimi izlenmektedir. Lezyon makroskobik olarak solid, kütlesel formdadır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Dentinojenik hayalet hücreli tümör
Açıklama: Odontojenik epitelde nükleusu silinmiş eozinofilik hayalet hücreler ve dentinoid üretimi Kalsifiye Odontojenik Kist'in (Gorlin kisti) karakteristik özelliğidir. Ancak bu patoloji lümeni olan bir kist değil de solid bağ dokusu tabanlı bir kitle/tümör şeklinde organize olduğunda buna spesifik olarak 'Dentinojenik hayalet hücreli tümör' adı verilir.

---

### ÇİFT 347 (Benzerlik: 0.70)

**Soru 1 (ID: 19a9c59e-6001-4599-90f2-fc3a6796e3c8)**
Soru Kökü: Nörokutanöz viral enfeksiyonların patofizyolojisinde latent fazdaki replikasyon alanları karakteristik farklar gösterir. Ramsay Hunt sendromu ve perioral rekürren Herpes Simpleks enfeksiyonlarında etken virüslerin sessiz formda beklediği gangliyonlar sırasıyla aşağıdakilerden hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): Genikulat gangliyon / Trigeminal gangliyon
Açıklama: Ramsay Hunt sendromunda Varicella Zoster Virüsü (VZV) patognomonik olarak 7. kraniyal sinirin duyu merkezi olan genikulat gangliyonda latent kalır ve burada reaktive olur. Rekürren oral Herpes Simpleks Virüsü (HSV) ise birincil enfeksiyonun ardından retrograt taşınarak bölgesel trigeminal gangliyona yerleşir. Bu iki viral ailenin anatomik replikasyon sahasındaki farklılık, yarattıkları klinik sendromların (yüz felci vs orofasiyal ülser) sınırlarını belirler.

**Soru 2 (ID: 69152174-bf50-40ef-bada-a9529c2a53a1)**
Soru Kökü: 60 yaşında bir hastanın yüzünün sadece sağ yarısında, maksiller sinir hattı boyunca orta hattı hiçbir şekilde aşmayan şiddetli ağrılı veziküler döküntüler meydana gelmiştir. Hasta bu döküntüler ortaya çıkmadan önce üç gün boyunca o bölgede dayanılmaz bir sızı hissettiğini tarif etmektedir. Bu virüsün sekonder aktivasyon oluşturmadan önce sessiz olarak beklediği (latansi) nöroanatomik bölge aşağıdakilerden hangisidir?
Doğru Şık (D): Duyu ganglionları
Açıklama: Herpes Zoster (Zona) enfeksiyonu, çocuklukta geçirilen su çiçeği sonrası Varisella Zoster Virüsünün duyu ganglionlarında (özellikle Trigeminal ganglion) yıllar boyunca sessiz (latent) kalmasıyla karakterizedir. İmmünsüpresyon geliştiğinde virüs bu ganglionlardan çıkarak enfekte ettiği duyu sinirinin sadece kendi dermatom alanında ilerler, bu yüzden asla motor çekirdeklerden veya doğrudan epitelyal bazal membrandan kaynaklanmaz. Dermatom spesifik tek taraflı ilerleyiş, patojenin spesifik periferik sinir hücresine yerleşmesinin doğal sonucudur.

---

### ÇİFT 348 (Benzerlik: 0.70)

**Soru 1 (ID: 9b2ffab1-2dd1-4295-8dbe-5ee0d6d4d955)**
Soru Kökü: Otuz beş yaşında erkek hastanın mandibula molar bölgesinden çıkarılan gömülü dişle ilişkili lezyonunda, ameloblastom benzeri epitel içinde nükleusunu kaybetmiş 'hayalet (ghost) hücreler', etrafında distrofik kalsifikasyonlar ve dentinoid matriks birikimi izlenmektedir. Lezyon makroskobik olarak solid, kütlesel formdadır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Dentinojenik hayalet hücreli tümör
Açıklama: Odontojenik epitelde nükleusu silinmiş eozinofilik hayalet hücreler ve dentinoid üretimi Kalsifiye Odontojenik Kist'in (Gorlin kisti) karakteristik özelliğidir. Ancak bu patoloji lümeni olan bir kist değil de solid bağ dokusu tabanlı bir kitle/tümör şeklinde organize olduğunda buna spesifik olarak 'Dentinojenik hayalet hücreli tümör' adı verilir.

**Soru 2 (ID: 4dc90ab7-3a6a-4981-96f5-855a18e7f533)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt çenesinde dişe ait belirgin şişlik nedeniyle başvuruyor. Mandibular birinci molar dişi vital tespit ediliyor. Radyolojik muayenede ilgili vital dişin kök ucuna sıkıca kaynaşmış, düzgün bir radyolüsen hat (halo) ile kemikten sınırlandırılmış radyoopak bir kitle bulunuyor. Teşhis ve tedavi amacıyla diş kitle ile birlikte çekiliyor. Lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Sementoblastom
Açıklama: Sementoblastom, sement üreten gerçek bir benign neoplazidir ve patognomonik olarak daima kök ucuna ankiloz (kaynaşık) şekilde izlenir. Periapikal semental displazide ise kök ucunda sınırları daha belirsiz reaktif lezyonlar vardır ve halo işareti bu kadar belirgin değildir. Ayrıca dişe vitalite veren radyografik ve semptomatik tablosuyla sementoblastomda dişin kitle ile beraber cerrahi yolla ortamdan uzaklaştırılması gerekir.

---

### ÇİFT 349 (Benzerlik: 0.70)

**Soru 1 (ID: 447fe8de-817d-4929-957b-1fb16f596453)**
Soru Kökü: On iki yaşındaki erkek hastanın ağız içi muayenesinde çok sayıda papiller projeksiyon izlenmektedir. Biyopsi sonucunda akantoz, parakeratoz ve koilositler tespit edilmiştir. Malignite riski bulunmadığı bilinen bu klinik tablo ile spesifik olarak ilişkili etken aşağıdakilerden hangisidir?
Doğru Şık (B): HPV 13
Açıklama: Çocukluk ve adölesan dönemde sık izlenen, ağız içinde multipl papiller yapılar oluşturan ve malign potansiyeli olmayan lezyon Fokal Epitelyal Hiperplazi (Heck Hastalığı) tablosudur. Bu hastalığın patogenezinde spesifik olarak HPV 13 ve 32 tipleri rol oynar. HPV 6 ve 11 daha çok papillom ve kondiloma akuminatum etiyolojisinde yer alır.

**Soru 2 (ID: 528d6842-3091-4796-9eb7-d5cb494c62ed)**
Soru Kökü: Oral bölgede izlenen verruka vulgaris lezyonunun etiyopatogenezinden sorumlu olan ve histopatolojik olarak perinükleer haloya sahip hücrelerle karakterize benign tabloya en sık yol açan virüs tipleri aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (A): HPV 6 ve 11
Açıklama: Oral verruka vulgaris, skuamöz epitelin benign hiperplazisi olup kaynağa göre etiyolojisinde primer olarak HPV 6 ve 11 tipleri rol oynamaktadır. Perinükleer halolu koilositlerin varlığı bu viral enfeksiyonun hücresel düzeydeki karakteristik patognomonik yansımasıdır. HPV 13 ve 32 fokal epitel hiperplazisinde (Heck hastalığı) görülürken, yüksek riskli 16 ve 18 tipleri skuamöz hücreli karsinom gelişimi ile doğrudan ilişkilidir.

---

### ÇİFT 350 (Benzerlik: 0.70)

**Soru 1 (ID: bfb52052-6897-4d42-9db5-eb033370203c)**
Soru Kökü: Erişkin yaşlarda asemptomatik olarak mandibula ramusunda tespit edilen, radyolojik incelemede ameloblastom ile karışabilen sklerotik çevreye sahip iyi sınırlı radyolüsent alan saptanmıştır. Sürmemiş bir dişin kronunu çevreleyen bu gelişimsel kistin dişe yapışma noktası spesifik olarak hangi anatomik bölgededir?
Doğru Şık (E): Mine-sement birleşimi (CEJ)
Açıklama: Dentigeröz kist, sürmemiş dişin kuronu ile dental folikül arasına sıvı birikmesiyle oluşur ve diş köküne daima mine-sement birleşim (CEJ) seviyesinden sıkıca yapışıktır. Kök apeksi çevresindeki lezyonlar radiküler kist, furkasyon bölgesindekiler ise paradental (bukkal bifurkasyon) kist karakterindedir. Kistin epiteli indirgenmiş mine epitelinden (dental lamina artıkları) kaynaklanır.

**Soru 2 (ID: 3d6fe828-d779-4f50-8e9c-1865654203b3)**
Soru Kökü: Sürmeye çalışan dişin baskısı ile kronu saran folikül epitelinde venöz akımın tıkanması ve doku arasına sıvı kaçışı sonucu gelişen, en sık görülen gelişimsel odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Dentigeröz kist
Açıklama: Dentigeröz kist, gömülü diş kronu ile folikül epiteli arasına sıvı toplanmasıyla gelişen ve çenelerde en sık görülen gelişimsel kisttir. Radiküler kist gelişimsel değil inflamatuvar kökenlidir ve non-vital dişlerle ilişkilidir. Mekanizma temel olarak folikül bağ dokusunda ödemin kron-folikül arayüzüne sızmasına dayanır.

---

### ÇİFT 351 (Benzerlik: 0.70)

**Soru 1 (ID: 6b617a96-7a0e-4ec2-8e2f-da2f8e2865be)**
Soru Kökü: Aşağıdaki kistlerden hangisi odontojenik gelişim anomalilerinden biri değildir, bunun yerine embriyolojik dönemde yüz katlantılarının (orta ve lateral nazal çıkıntı ile maksiller çıkıntı) birleşme hattındaki ektodermal artıkların kistik dejenerasyonundan kaynaklanan bir yumuşak doku lezyonudur?
Doğru Şık (D): Nazoalveoler (Nazolabial) kist
Açıklama: Nazoalveoler kist (Nazolabial kist), kemik içinde patoloji yaratmayan, nazal kıkırdak ve maksilla üzerindeki yumuşak doku içinde, nazolakrimal kanal bölgesinden geliştiği düşünülen non-odontojenik, gelişimsel bir kisttir. Diğerleri doğrudan diş gelişimi sırasında görev alan epitel tabakalarından köken alan odontojenik kistlerdir.

**Soru 2 (ID: 35484860-6797-498a-9c81-5dbd141abfca)**
Soru Kökü: Gelişimsel odontojenik kistlerin radyolojik incelemesinde sıklıkla kalp veya armut biçiminde görülen, histolojisinde ise skuamöz veya yalancı çok katlı silyalı respiratuar epitel barındıran patoloji aşağıdakilerden hangisidir?
Doğru Şık (A): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kisti (insisiv kanal kisti), üst kesici dişlerin kökleri arasında insisiv foramen hizasında lokalize, armut/kalp şeklinde radyolüsensi veren gelişimsel non-odontojenik kisttir. Kist lümeni, kanalın anatomik lokasyonuna uygun olarak nazal kavaiteye yakın kısımlarda yalancı çok katlı silyalı solunum epiteli, oral bölgeye yakın kısımlarda ise skuamöz epitel içerir.

---

### ÇİFT 352 (Benzerlik: 0.70)

**Soru 1 (ID: 283110cf-f108-4647-a603-82bcf3a20607)**
Soru Kökü: Erişkin popülasyonda en sık karşılaşılan diş kaybı nedeni olan periodontitisin gelişiminde, aşağıdaki faktörlerden hangisi literatürde kabul edilen risk faktörleri arasında **değildir**?
Doğru Şık (D): Yüksek sosyoekonomik düzey
Açıklama: Periodontitisin temel nedeni mikrobiyal dental plaktır, bunu alevlendiren sistemik/çevresel risk faktörleri ise ileri yaş, kontrolsüz diyabet, sigara kullanımı ve genellikle kötü oral hijyene zemin hazırlayan 'düşük' sosyoekonomik düzeydir. En güçlü çeldirici olan diabetes mellitus, immün yanıtı ve vasküler bütünlüğü bozarak direkt yıkımı hızlandırır. Yüksek sosyoekonomik düzey koruyucu (rutin diş hekimi kontrolü) bir faktör olarak kabul edilir.

**Soru 2 (ID: a930c7e6-35a8-49fd-bb56-5aee2727553f)**
Soru Kökü: Periodontal dokuların en yaygın inflamatuar hastalıkları olan gingivitis ve periodontitisin klinik gelişiminde kilit rol oynayan mikrobiyal dental plak ile ilgili aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (D): Doku yıkımı yaratabilmesi için hastada sigara, diyabet veya immünsüpresyon bulunması şarttır.
Açıklama: Mikrobiyal dental plak, dişe yapışık bakteriden zengin mikrobiyal bir biyofilmdir ve tek başına inflamatuar süreci (gingivitis) başlatıp, uzun vadede doku yıkımına (periodontitis) neden olmak için tamamen yeterlidir. Hastada diyabet, yaşlılık veya sigara gibi sistemik ek risk faktörlerinin varlığı şart değildir; bunlar mevcut hastalığın şiddetini, doku direncini ve ilerleme hızını dramatik şekilde kötüleştiren sekonder faktörlerdir. Plak zamanla kalsifiye olarak diş taşına dönüşür ve inflamasyonu daha derin dokulara taşır.

---

### ÇİFT 353 (Benzerlik: 0.70)

**Soru 1 (ID: bcaec987-81b9-4e2b-98e0-7cdbd650df98)**
Soru Kökü: Oral kavitenin skuamöz hücreli karsinomlarının (SCC) etiyolojisinde yer alan en önemli risk faktörü aşağıdakilerden hangisidir?
Doğru Şık (D): Tütün ve tütün ürünlerinin kullanımı
Açıklama: Oral kavite skuamöz hücreli karsinomlarının gelişiminde tütün ve tütün ürünlerinin kullanımı bilinen en önemli ve en yaygın risk faktörüdür. HPV 16-18 enfeksiyonları orofarenks bölgesi kanserlerinde ön plandayken, aktinik radyasyon özellikle alt dudak kanserlerinin spesifik etiyolojisini oluşturur. Plummer-Vinson sendromu ve kandida gibi faktörler de sürece katkı sağlasa da, birincil ve en majör risk faktörü tütündür.

**Soru 2 (ID: 806301bd-1856-42b3-bc2c-c5cc1f5db924)**
Soru Kökü: Aşağıdakilerden hangisi oral kavite skuamoz hücreli karsinomu (SCC) gelişimi için risk oluşturan genetik faktörlerden biridir?
Doğru Şık (D): Fanconi Anemisi
Açıklama: Oral SCC gelişiminde tütün ve alkol gibi çevresel faktörlerin yanı sıra genetik sendromlar da rol oynar; metinde Fanconi anemisi ve diskeratozis konjenita bu grupta belirtilmiştir. Nörofibromatozis ve MEN2 sinir kılıfı tümörleriyle ilişkiliyken, Gorlin sendromu kalsifiye odontojenik kist ve bazal hücreli karsinomla ilişkilidir. Genetik zemin, immün yetmezlik veya DNA tamir defektleri üzerinden karsinogenezi tetikler.

---

### ÇİFT 354 (Benzerlik: 0.70)

**Soru 1 (ID: 6a8ab4cb-2fc0-4946-9d49-a11fa254aee7)**
Soru Kökü: Konjenital sifilizin embriyolojik süreçlerde oluşturduğu doku yıkım patofizyolojisi incelendiğinde, bu hastalığın sonradan kazanılmış (edinsel) sifilizden kalıcı anatomik defektler bağlamında ayrılmasını sağlayan temel hücresel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Spiroketlerin morfodiferansiyasyon evresinde gelişmekte olan organlara doğrudan sızarak lokal hücre kinetiğini bozması
Açıklama: Konjenital sifilizde spiroketler plasental bariyeri aşıp organogenez aşamasındaki fetal dokulara (diş germi vb.) doğrudan invaze olur ve morfodiferansiyasyon evresini bozarak anatomik deformasyonlar yaratır. Edinsel (sonradan kazanılmış) sifilizde organogenez zaten tamamlanmış olduğu için bu tür gelişimsel doku defektleri görülmez. C şıkkındaki metabolik strese bağlı fonksiyon durması sifilizde değil, matriks eksikliği yapan kızamıkta görülür.

**Soru 2 (ID: 5e659956-8c94-47f7-8f2e-e1e2ba00288f)**
Soru Kökü: Daimi dentisyon aşamasında tespit edilen diş gelişim defektlerinin etiyopatogenezi değerlendirildiğinde, kızamık enfeksiyonunun yarattığı mine hipoplazisini, konjenital sifilizin yarattığı Hutchinson dişlerinden ayıran temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Sifilizde spiroket invazyonu morfodiferansiyasyonu bozarken, kızamıkta yüksek ateşin ameloblastları inhibe etmesi
Açıklama: Konjenital sifilizde spiroketlerin diş germine direkt invazyonu, embriyolojik organogenez evresindeki morfodiferansiyasyonu bozarak dişin anatomik şeklini (kama/dut formunda) kalıcı olarak değiştirir. Buna karşın kızamıkta anatomik bir şekil bozukluğu değil, yüksek ateşe bağlı olarak ameloblastların sentez fonksiyonunun durması sonucu matriks eksikliğini ifade eden bantlar tarzında 'mine hipoplazisi' izlenir. Lokalize tek diş tutulumu ise Turner hipoplazisinin karakteristiğidir.

---

### ÇİFT 355 (Benzerlik: 0.70)

**Soru 1 (ID: 93df1f2c-96b6-43bb-8049-88855c73e612)**
Soru Kökü: Elli yaşında kronik sigara kullanıcısı erkek hastanın dil kenarında fiziksel olarak kazınamayan (fikse), kalın beyaz bir plak saptanmıştır. Biyopside epiteliyal hiperplazi, hücresel atipi ve keratin katmanları arasında yoğun fungal hif infiltrasyonu izlenmiştir. Hastanın lezyonu için en doğru tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kronik hiperplastik kandidiyazis
Açıklama: Fungal tahribata karşı epitelin aşırı proliferasyon (hiperplazi) gösterdiği, fiziksel olarak kazınamayan ve displazi potansiyeli taşıdığı için premalign kabul edilen lezyon kronik hiperplastik kandidiyazistir (kandidal lökoplaki). İdiyopatik lökoplakide fungal etken saptanmazken, psödomembranöz kandidiyazis her zaman kazınabilir yapıdadır. Biyopsideki fungal yapı lökoplaki ayrımındaki kritik veridir.

**Soru 2 (ID: 0d093f4b-da09-4bf1-ab97-3740abbb504a)**
Soru Kökü: Kazınmakla sıyrılmayan beyaz renkli lezyonları olan hastadan alınan biyopside, epitel hiperplazisi ve belirgin keratin artışı olarak tanımlanan bu klinik tablonun diş hekimliği pratiğindeki en kritik önemi aşağıdakilerden hangisidir?
Doğru Şık (E): Premalign karakterde bir patolojik zemin oluşturması
Açıklama: Kronik hiperplastik kandidiyazis tablosu, hücresel düzeyde epiteliyal displazi riski taşıması ve malign transformasyona uğrayabilmesi nedeniyle premalign bir lezyon olarak kabul edilir. Diğer kandidiyazis tipleri (psödomembranöz veya eritematöz) yüzeyel kalarak displastik değişiklik yaratmazken, dokuya penetre olan bu kronik formda hücre döngüsü bozulmaktadır. Sistemik kana karışma ihtimali çok daha zayıf bir hücresel immün yetmezliği gerektirir, primer klinik risk skuamöz hücreli karsinom riskidir.

---

### ÇİFT 356 (Benzerlik: 0.70)

**Soru 1 (ID: 6a7f3fd8-6ac9-46a7-b7ba-54b97ee62534)**
Soru Kökü: Sistemik tetkikleri yapılan bir hastada dilin yüzey epitelindeki papillaların düzleştiği ve ağrılı, yoğun kırmızı bir glossit tablosunun varlığı saptanmıştır. Oral mukozadaki bu atrofik lezyonlara sıklıkla etiyolojik zemin hazırlayan spesifik vitamin eksikliği aşağıdakilerden hangisi ile doğrudan karakterizedir?
Doğru Şık (A): Pernisiyöz anemi
Açıklama: Glossit tablosu, dilin epiteliyal döngüsünün bozulmasına bağlı olarak sıklıkla B12 vitamini emilim defekti kaynaklı Pernisiyöz anemi gibi beslenme eksikliklerinde görülür. Orak hücreli anemi ve talasemi genetik hemoglobin defektleri olup direkt mukozal atrofi üretmezken, lösemi daha çok diş eti büyümesi ve ülserasyonlarla seyreder. Demir veya B vitamini eksikliği, hücre yenilenme hızının yüksek olduğu oral mukozayı spesifik olarak etkileyerek papilla silinmesi (düzleşme) yaratır.

**Soru 2 (ID: 24ef3751-4cf9-40cb-95df-e45500b2a44f)**
Soru Kökü: 60 yaşında kadın hasta, dilde şiddetli yanma, yutkunma zorluğu ve el-ayak parmaklarında karıncalanma şikayetleriyle başvuruyor. Muayenede dil dorsumundaki papillaların tamamen düzleştiği ve dilin kırmızı, parlak bir görünüm aldığı izleniyor. Hastanın radyolojik yutma testinde özofageal herhangi bir tıkanıklık (web) saptanmıyor. Laboratuvar tetkiklerinde megaloblastik anemi tespit ediliyor. Bu hastanın atrofik glossit kliniğinden sorumlu primer immünolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Mide paryetal hücrelerindeki intrinsik faktöre karşı otoantikor gelişimi
Açıklama: Pernisiyöz anemide Tip 2 aşırı duyarlılık reaksiyonu sonucu mide paryetal hücrelerindeki intrinsik faktöre karşı otoantikorlar gelişir, bu da B12 emilimini nötralize ederek dilde atrofik glossit ve ekstremitelerde karıncalanmaya (nörolojik defekt) neden olur. Demir eksikliğinde (Plummer-Vinson) ise mekanizma immünolojik otoantikorlara dayanmaz ve klinik tabloda özofageal web varlığı nedeniyle sekonder mekanik disfaji mevcuttur. Vakada weblerin olmaması ve nörolojik ekstremite bulguları doğrudan B12 / intrinsik faktör yıkımı hedefini işaret eder.

---

### ÇİFT 357 (Benzerlik: 0.70)

**Soru 1 (ID: e8fa9c2d-c4df-4e92-b93b-3f4e835a9baa)**
Soru Kökü: Reaktif ve premalign karakterli ağız içi beyaz lezyonları için; I. Friksiyonel hiperkeratoz lezyonlarında displastik değişiklik gözlenmez. II. Revers smokers-palatal lezyonu premalign karakterdedir. III. Kıllı lökoplaki prekanseröz dönüşüm açısından yüksek risk taşır. ifadelerinden hangileri doğrudur?
Doğru Şık (B): I ve II
Açıklama: Friksiyonel hiperkeratoz mekanik savunma mekanizmasıdır ve displastik değildir (I doğru). Ters sigara içimi mukozayı kanserojene ve ısıya açık hale getirir, yüksek premalignite riski oluşturur (II doğru). Ancak kıllı lökoplaki Epstein-Barr virüsü kökenli immünsüpresif bir lezyondur ve kanserleşme riski (prekanseröz) taşımaz (III yanlış). Bu nedenle lezyonun ismindeki lökoplaki kelimesi kanserleşme potansiyeliyle doğrudan bağdaştırılamaz.

**Soru 2 (ID: 4115c2b6-c0c8-4d0a-9830-4707e151fe0e)**
Soru Kökü: Dünya Sağlık Örgütü'nün (WHO) lökoplaki tanımı ve lezyonun biyolojik davranışları ile ilgili;
I. Diğer hiçbir hastalıkla karakterize edilemeyen ve kazınamayan beyaz plaklardır.
II. İstatistiksel olarak lezyonların %5-25'i skuamöz hücreli karsinoma dönüşür.
III. Dudak lezyonlarında maligniteye dönüşüm oranı ağız tabanına göre daha düşüktür.
IV. Nodüler ve verrüköz tipteki lökoplakilerin malignite riski homojen olanlardan daha düşüktür.
ifadelerinden hangileri doğrudur?
Doğru Şık (E): I, II ve III
Açıklama: WHO tanımına göre lökoplakiler, mukozadan kazınamayan ve başka spesifik bir hastalık teşhisi konulamayan tanısal atık sepeti lezyonlarıdır (I doğru). Belirtilen %5-25 kanserleşme aralığı lökoplakinin global malign transformasyon verisidir (II doğru). Ağız tabanı karsinom açısından dudaktan daha riskli bir anatomik bölgedir (III doğru). Ancak verrüköz ve nodüler tipler, homojen lökoplakilere göre çok daha yüksek risk taşır (IV yanlış).

---

### ÇİFT 358 (Benzerlik: 0.70)

**Soru 1 (ID: 01614c63-1ae3-4db3-9130-63a7e16a3c6a)**
Soru Kökü: 45 yaşında kadın hasta, sol alt kanin dişinde şiddetli ağrı ve kök ucuna denk gelen labiyal mukozada fluktuasyon veren şişlik şikayetiyle başvuruyor. Histopatolojik incelemede periapikal alanda yoğun nötrofil birikimi ve belirgin doku erimesi saptanıyor. Bu hastanın periapikal dokusunda epitel proliferasyonuna bağlı bir kist gelişimi **gözlenmemesinin** temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Likefaksiyon nekrozunun kist gelişimine olanak tanımadan ortamı enzimatik olarak eritmesi
Açıklama: Periapikal apselerde, pulpadan apekse ulaşan aşırı bakteri ürünleri ortama yoğun nötrofil çeker ve bunun sonucunda dokuyu hızla eriten bir likefaksiyon nekrozu meydana gelir. Bu asidik ve enzimatik doku erimesi süreci ortamı tamamen parçaladığı için, epitel hücrelerinin organize olup sınırları belli bir kist duvarı (periapikal kist) oluşturmasına fırsat kalmaz. Komplikasyon olarak enfeksiyon mukozaya veya deriye fistülize olabilir ancak kist oluşmamasının doğrudan patofizyolojik nedeni bu enzimatik nekroz yıkımıdır.

**Soru 2 (ID: 9547c274-d6f5-44f7-9dec-46e95602789d)**
Soru Kökü: Yirmi sekiz yaşındaki erkek hasta, çenesinin ön bölgesinde zonklayıcı ağrı ve mukozal şişlik (fistül) şikayetiyle başvurmuştur. Radyografik incelemede pulpa nekrozu ve apikalinde yoğun likefaksiyon nekrozuna bağlı kemik yıkımı izlenmiştir. Literatüre göre bu periapikal apse tablosunun lokalizasyon açısından klinik olarak en tipik örnekleri aşağıdaki diş gruplarının hangisinde izlenir?
Doğru Şık (A): Kanin dişler ve mandibüler kesici dişler
Açıklama: Periapikal apselerin kök ucundan kortikal kemiği delerek (fistülize olarak) mukoza altına ulaştığı ve klasik parulis oluşturduğu tablolar, anatomik olarak kök apeklerinin kortikal plağa çok yakın olduğu kanin dişler ve mandibüler kesici dişlerde en iyi örneklerini sergiler. En güçlü çeldirici olan maksiller santral kesiciler daha çok damak bölgesine yayılım (palatal apse) gösterirken, vestibül drenajı kanin/alt kesici hattında çok daha dramatiktir. Lokalizasyon enfeksiyonun drenaj yolunu anatomik olarak dikte eder.

---

### ÇİFT 359 (Benzerlik: 0.70)

**Soru 1 (ID: ed086797-fd67-4b4c-b04a-aa18c79e6b57)**
Soru Kökü: Hem friksiyonel hiperkeratoz hem de ters sigara içiciliğine bağlı revers smokers palatal lezyonu, oral epitelde kalınlaşma (hiperkeratoz) ve beyaz plak görünümü yaratır. Ancak friksiyonel keratozun malignite riski sıfırken, ters sigara lezyonunun 5 yıldızlı agresif karsinom potansiyeli barındırmasını sağlayan patofizyolojik (karsinogenez) basamağı aşağıdakilerden hangisidir?
Doğru Şık (B): Yüksek termal ve kimyasal şokun doğrudan bazal tabaka hücrelerinde DNA hasarı ve displastik atipi yaratması
Açıklama: Friksiyonel hiperkeratozda uygulanan düşük enerjili mekanik kuvvet sadece yüzeyel koruma için mitozu artırır, genetik koda zarar vermez. Oysa sigaranın yanan ucunun (ateşin) ağız içinde tutulmasıyla oluşan masif termal şok ve yoğun karsinojenler, epitelin savunma sınırını aşıp doğrudan stratum basale'deki hücrelerin çekirdek yapısını bozar. Oluşan DNA hasarı, otonom displastik klonları yaratarak yüksek riskli karsinogenezi başlatır.

**Soru 2 (ID: 23cab94d-61e2-459a-b77b-cbe0faf945a2)**
Soru Kökü: Sert damak bölgesi, normal şartlar altında oral kavitede skuamöz hücreli karsinom gelişimi için en düşük riskli anatomik alanlardan biridir. Ancak hastanın spesifik olarak tütün ürününü ateşli ucu ağız içinde kalacak şekilde (ters) içmesi durumunda gelişen palatal lezyonun en kritik özelliği aşağıdakilerden hangisidir?
Doğru Şık (A): Çok yüksek (5 yıldızlı) malign transformasyon potansiyeli taşıması
Açıklama: Ters sigara içiciliğine bağlı gelişen revers smokers palatal lezyonu, sert damakta şiddetli termal ve kimyasal şok yaratarak masif displaziye neden olur ve 5 yıldızlı (en üst düzey) karsinom riski taşır. Reaktif nikotinik stomatit gibi masum değildir, reversibl olma eğilimi göstermez ve hücresel atipisi nedeniyle majör premalign odaktır.

---

### ÇİFT 360 (Benzerlik: 0.70)

**Soru 1 (ID: 3ec3236b-b272-4f43-ac6a-8c48d204a63e)**
Soru Kökü: Altmış beş yaşındaki, günde iki paket sigara içen erkek hasta, çene köşelerinde iki taraflı ağrısız şişlik şikayetiyle başvurmuştur. Yapılan incelemede kitlelerin bilateral parotis bezi kaynaklı olduğu saptanmış ve eksizyon kararı alınmıştır. Bu klinik tablodaki hastada en olası tanıyı destekleyen patolojik süreç aşağıdakilerden hangisidir?
Doğru Şık (D): Lenfoid stroma içinde çift sıralı onkositik epitelin izlenmesi
Açıklama: Warthin tümörü (papiller kistadenoma lenfomatozum) sigara içen yaşlı erkeklerde DAİMA parotiste yerleşen, bilateral ve multifokal olma ihtimali en yüksek tümördür. Histolojisinde lenfoid stroma ve germinal merkezler eşliğinde çift sıralı onkositik epitel izlenir.

**Soru 2 (ID: cb2cd011-d56c-4d87-ab72-cedc5801c51d)**
Soru Kökü: Altmış beş yaşında kadın hasta, submandibuler bezi lojunda tek taraflı ve zamanla taş gibi sertleşen bir kitle saptandığı için opere ediliyor. Patolojik değerlendirmede tükürük bezinde kronik sklerozan yapıda yaygın fibrozis ve histolojik olarak belirgin IgG4 pozitif plazma hücre infiltrasyonu belirleniyor. Klinikte malign neoplaziyi taklit eden bu fibro-inflamatuvar otoimmün lezyonun ismi aşağıdakilerden hangisidir?
Doğru Şık (C): Kuttner tümörü
Açıklama: Kuttner tümörü (Kronik Sklerozan Siyaladenit), IgG4-ilişkili sistemik hastalığın submandibuler bez tutulumudur ve artmış fibrozis nedeniyle sert malign tümör kliniğini taklit eder. Sjögren sendromu da otoimmün sekresyon kaybı yaratır ancak fokal lenfositik infiltrasyonla seyreder ve glandüler fibrozis Kuttner tümörü kadar dramatik sertlikte bir kitle vermez. Kanser zannedilerek agresif cerrahilerden kaçınılması gereken bir tanıdır.

---

### ÇİFT 361 (Benzerlik: 0.70)

**Soru 1 (ID: 842818fc-9c47-478c-86f7-f5dba5b8398f)**
Soru Kökü: Orofasiyal bölgede latent kalabilen ve reaktivasyonu ile vezikülobüllöz lezyonlara neden olan Herpes Simpleks Virüsü (HSV), ekstremitelerde 'hedef tahtası' (target) şeklinde deri döküntüleriyle karakterize inflamatuar bir patolojinin en güçlü enfeksiyöz tetikleyicisidir. Bu sekonder inflamatuar yanıt kaskadını başlatan hücresel medyatör hücre grubu aşağıdakilerden hangisidir?
Doğru Şık (D): CD8+ sitotoksik T lenfositler
Açıklama: HSV enfeksiyonları, ekstremitelerde hedef tahtası (target) formunda döküntüler yapan Eritema Multiforme (EM) tablosunun en önemli enfeksiyöz tetikleyicisidir. EM'nin patofizyolojisi, epiteldeki viral antijenlere karşı gelişen ve CD8+ sitotoksik T lenfositler aracılığıyla yürütülen hücresel bir immün yanıta (doku hasarına) dayanır. IgE aracılı mast hücresi veya sadece humoral antikor yanıtı bu doku morfolojisini oluşturmaz.

**Soru 2 (ID: a9606e99-509a-45fb-97ae-fe1cd54f68ed)**
Soru Kökü: Orofasiyal bölgede vezikülobüllöz patoloji yaratan ajanlardan Herpes Simpleks Virüsü (HSV), epitel hücrelerinde çoğalırken hücreler arası bağların kopmasına neden olur. Mukozada intraepitelyal sıvı yığılımı ile sonuçlanan bu spesifik histopatolojik hücresel yıkım sürecinin adı aşağıdakilerden hangisidir?
Doğru Şık (D): Akantolizis
Açıklama: HSV'nin litik replikasyon döngüsü sırasında keratinositler arasındaki bağların kopması ve hücre lizisi sürecine akantolizis denir. Bu süreç mukozada intraepitelyal sıvı toplanmasına ve klinik olarak birkaç milimetrelik veziküllerin oluşmasına yol açar. Granülomatöz reaksiyonlar (füzyon/Langhans) hücresel bağışıklık patolojilerinde görülürken, vezikül formasyonu akantolitik yıkımın doğrudan sonucudur.

---

### ÇİFT 362 (Benzerlik: 0.70)

**Soru 1 (ID: af4017cf-429c-49ca-a4fc-0563f359e4cf)**
Soru Kökü: Lökoplakilerin yerleşim lokalizasyonları ile etiyolojik faktörler arasındaki ilişkiler değerlendirildiğinde, karsinom geliştirme riskinin yüksek olduğu bilinen sifilitik lökoplaki tipik olarak oral bölgenin neresinde izlenir?
Doğru Şık (C): Dil dorsumu
Açıklama: Sifilitik lökoplaki, Treponema pallidum enfeksiyonunun geç dönem komplikasyonu olarak spesifik bir şekilde dilin dorsum (sırt) yüzeyinde lokalize olan bir tablodur. Bu kronik inflamatuar zemin hücresel atipiye yatkınlık oluşturur ve skuamöz hücreli karsinom gelişimi açısından ciddi oranda yüksek risk barındırır.

**Soru 2 (ID: 0e2002dd-c004-44b6-bd5a-2cec3115560c)**
Soru Kökü: Treponema pallidum enfeksiyonunun spesifik bir döneminde dil dorsumunda gelişen ve otonom hücresel displazi barındırdığı için çok yüksek düzeyde Skuamöz Hücreli Karsinom gelişimi potansiyeline sahip olan enfeksiyöz zeminli premalign lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Sifilitik lökoplaki
Açıklama: Sifilitik lökoplaki, Treponema pallidum'un neden olduğu sifiliz enfeksiyonunun tersiyer (3.) evresinde dil sırtında (dorsumunda) meydana gelen ve yüksek oranda skuamöz hücreli karsinoma dönüşüm riski (premalign potansiyel) taşıyan atipik bir lökoplaki formudur. Condyloma lata sekonder sifilizde izlenir ancak displastik lökoplaki karakteri taşımaz.

---

### ÇİFT 363 (Benzerlik: 0.70)

**Soru 1 (ID: 6c217da5-63ab-40e2-9257-749e401cebcc)**
Soru Kökü: On dört yaşında bir erkek çocuk, mandibular molar bölgesinde diş sürme sorunları yaşayarak kliniğe gönderiliyor. Çekilen panoramik radyografide, gömülü diş üzerinde sınırları iyi izlenen uniloküler radyolüsen büyük bir kavite saptanıyor. Biyopsi materyalinde; embriyonik dental papillayı taklit eden yoğun mezenkimal doku stroma ile bu doku içinde dağılmış ikili (bilaminar) odontojenik epitel zincirleri görülüyor ancak diş minesine veya dentin dokusuna benzer sert madde (kalsifikasyon) seçilemiyor. Bu mikst odontojenik tümör için en olası patolojik tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Ameloblastik fibrom
Açıklama: Ameloblastik fibrom, hem epitel hem de spesifik ektomezenkimal doku (dental papilla) elementlerinin birlikte (mikst) neoplastik proliferasyonudur ve daha ileri yaştaki kompleks odontomaların immatür prekürsör lezyonu olarak görülebilir; bu nedenle henüz dentin veya mine sentezi yoktur. Epiteli ameloblastomla benzer olsa da, stroma yapısı matür bağ dokusu değil dental papilladır ve prognozu çok daha ılımlıdır.

**Soru 2 (ID: ac6f4403-c704-4f36-ba50-21ede6e0e367)**
Soru Kökü: İleri yaş grubunda, 5-7. dekattaki hastalarda arka mandibulada gözlenen, histolojik olarak tümör epitel yuvaları arasında oldukça yoğun, fibrokollajenöz bir sklerotik doku üretiminin maligniteye eşlik ettiği, radyografide sınırları kötü seçilen tümör aşağıdakilerden hangisidir?
Doğru Şık (D): Sklerozan odontojenik karsinom
Açıklama: Sklerozan odontojenik karsinom; ismini de aldığı üzere, mikroskobide ince kordonlar halindeki malign epitelyal yuvaların arasında aşırı yoğun fibrokollajenöz "sklerotik" (sert, nedbeleşmiş) bir stroma barındıran nadir bir malignitedir. Stromadaki bu yoğun tepkisel desmoplazi, tümörü diğer epitel kökenli karsinomlardan ayırır.

---

### ÇİFT 364 (Benzerlik: 0.70)

**Soru 1 (ID: ca598b99-aabf-4453-910a-983d77941268)**
Soru Kökü: On beş yaşındaki hastada yanak ve diş etlerinde diskeratotik beyaz kabarıklıklar, saçlı deride seboreik döküntüler ve biyopsisinde 'akantoliz' saptanmıştır. Bu klinik antiteye sahip bir hastanın teşhis aşamasında, DUS terminolojisinde sıklıkla karıştırılan 'Darier belirtisi' kavramının patofizyolojik karşılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Mastositoz olgularında lezyonlu derinin kaşınmasıyla histamin deşarjına bağlı ödem ve eritem gelişmesi
Açıklama: DUS komitelerinin klasik terminoloji tuzağıdır. Vakada tanımlanan ve akantoliz ile seyreden genetik (ATP2A2) hastalık 'Darier Hastalığı' (Foliküler Keratoz) iken; 'Darier Belirtisi', mastositoz lezyonlarının fiziksel olarak kaşınmasıyla mast hücrelerinden histamin deşarj olması sonucu lokalize ödem (ürtiker) ve kızarıklık oluşması fenomenidir. İkisi tamamen farklı patolojilerdir.

**Soru 2 (ID: 8fba4627-7c28-42c2-986d-5f55bd55d2e4)**
Soru Kökü: On beş yaşındaki erkek hasta, yanak, dudak ve diş eti mukozasında diskeratotik beyaz kabarıklıkların birleşmesiyle oluşan 'kaldırım taşı' benzeri lezyonlar ile başvuruyor. Dermatolojik muayenesinde alın ve nasolabial kıvrımlar gibi seboreik bölgelerde de benzer döküntüler saptanıyor. Bu hastalığın patogenezinde rol oynayan temel moleküler defekt aşağıdakilerden hangisidir?
Doğru Şık (A): ATP2A2 gen mutasyonuna sekonder kalsiyum pompa disfonksiyonu
Açıklama: Darier hastalığı (Foliküler keratozis), ATP2A2 gen mutasyonu sonucu hücre içi kalsiyum pompasının bozulması ve sekonder desmozom defekti (akantoliz) ile karakterize, mukokutanöz kaldırım taşı görünümü veren otozomal dominant bir hastalıktır. Keratin 4/13 mutasyonu sadece ağız içini tutan Beyaz Sünger Nevüs'ün etkenidir. Desmoglein antikorları pemfigus vulgariste izlenir.

---

### ÇİFT 365 (Benzerlik: 0.70)

**Soru 1 (ID: 1e806a12-408f-42dd-9cea-459f02e13743)**
Soru Kökü: HIV enfeksiyonu olan bir hastada dilin lateral kenarlarında dikey yerleşimli, kazınamayan, beyaz ve oluklu plaklar tespit edilmiştir. Biyopsi materyalinin mikroskobik incelemesinde hiperparakeratoz, akantoz ve balon hücreleri izlenmiştir. Bu lezyon ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Yüksek oranda skuamöz hücreli karsinoma dönüşüm riski taşır.
Açıklama: Kıllı (Hairy) lökoplaki, epitel hücrelerini enfekte eden Epstein-Barr virüsü (EBV) kaynaklı reaktif bir lezyondur ve prekanseröz bir karakter taşımaz. Normal lökoplaki formları malignite riski barındırırken, kıllı lökoplaki sadece hücresel bir viral yanıttır ve malign transformasyona uğramaz. Klinik olarak kandidiyazis ile karışabilir ancak kazınamaması ile ayrılır.

**Soru 2 (ID: 9ff88707-3b49-4a97-989b-597b677bfaea)**
Soru Kökü: Kırk beş yaşındaki immünsüprese bir hastanın ağız içi muayenesinde dilinin lateral kenarlarında tüy benzeri beyaz lezyonlar saptanıyor. Tanısal değerlendirme sırasında spatül ile yapılan kazıma testinde, epiteliyal beyaz plakların yüzeyden kolayca sıyrılabildiği ve altından eritemli-kanamalı bir dokunun ortaya çıktığı gözlemleniyor. Bu fiziksel bulguya göre, hastadaki lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Psödomembranöz kandidiyazis
Açıklama: Fiziksel kazıma testinde beyaz lezyonun yüzeyden sıyrılarak altından kanamalı eritemli dokunun çıkması, patolojinin mukozal epitel hiperkeratozu değil, yüzeyel bir enfeksiyöz membran olduğunu kanıtlar. Bu klinik davranış psödomembranöz kandidiyazise (pamukçuk) özgüdür. Kıllı lökoplaki, idiyopatik lökoplaki ve friksiyonel keratoz epitelin bizzat kendi kalınlaşması olduğu için KESİNLİKLE kazınamazlar.

---

### ÇİFT 366 (Benzerlik: 0.70)

**Soru 1 (ID: 25bba371-9627-4b23-ab1e-8452b37b7b17)**
Soru Kökü: Ortalama 45 yaşlarındaki erkek bir hastada, geçmişte mandibulada tedavi edilmiş bir kistik/tümöral kitlenin ardından, akciğerde saptanan multiple nodüllerden biyopsi alınıyor. Histolojik incelemede, kitlelerde sitolojik atipi, pleomorfizm veya malignite özellikleri bulunmayan 'benign konvansiyonel ameloblastom' alanları izleniyor. Orijin dokudan uzakta yerleşen bu tablonun Dünya Sağlık Örgütü (2022) sınıflamasındaki tam karşılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Metastatik ameloblastom
Açıklama: Metastatik ameloblastom, histolojik ve sitolojik olarak tamamen 'benign/borderline' konvansiyonel ameloblastom özelliği göstermesine rağmen biyolojik olarak uzak organa (en sık akciğer) hematojen veya lenfatik metastaz yapabilme kapasitesine sahip neoplazidir. Eğer metastaz yapan hücreler bizzat sitolojik atipi, nekroz ve malign karsinom özellikleri gösterseydi tanı 'Ameloblastik Karsinom' olurdu. Malignitenin bu iki alt grubunun ayrımı atipinin varlığına/yokluğuna dayanır.

**Soru 2 (ID: 4f9a1924-47a5-401b-bc18-1d551c2276c7)**
Soru Kökü: Otuz beş yaşında bir hastanın anterior maksillasında tespit edilen, diş taşıyan alveolar bölgelerde gelişmiş bir tümörün histolojik incelemesinde; sıkıca paketlenmiş, sitolojik olarak masum epitel adacıkları ve bu adacıklarda anlamlı keratinizasyon olmaksızın gelişen tek tip skuamöz farklılaşma izleniyor. Ancak adacıkların periferinde palizatlaşma (çitlenme) veya merkezde stellat retikulum (yıldızsı) benzeri gevşek ağsı yapı gözlenmemiştir. Tablo özellikleri referans alındığında bu lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Skuamöz odontojenik tümör
Açıklama: Dünya Sağlık Örgütü sınıflandırma tablolarında spesifik olarak vurgulandığı üzere, Skuamöz odontojenik tümör (ortalama yaş 34.8); anlamlı keratinizasyon göstermeyen, sıkıca paketlenmiş ve atipisiz skuamöz epitel adalarından oluşur. En önemli ayırıcı özelliği ise, ameloblastomda tipik olarak beklenen periferik palizatlaşmanın ve merkezi stellat retikulum yapısının bu tümörde BİLHASSA OLMAMASIDIR. Bu sayede ameloblastom varyantlarından kolayca ayrılır.

---

### ÇİFT 367 (Benzerlik: 0.70)

**Soru 1 (ID: 67d8c343-c82f-446d-aed5-789a34b35e95)**
Soru Kökü: Gelişimsel bir anomali olan dens evaginatus ile ilgili olarak aşağıdakilerden hangisi doğrudur?
Doğru Şık (D): Oklüzal yüzeyin merkezinde pulpa uzantısı içeren sivrileşme ile seyreder
Açıklama: Dens evaginatus, oklüzal yüzeyin merkezinde anormal bir tüberkül (sivrileşme) ile karakterizedir ve sıklıkla premolar dişleri bilateral olarak etkiler. Ekstra tüberkülün içine doğru pulpa uzantısı bulunduğu için travma veya oklüzal aşınma durumlarında direkt pulpa açılımı ve nekrozu riski çok yüksektir. Lingual pitin içeri girmesi dens invaginatustur.

**Soru 2 (ID: 6c0e9bcc-091a-406a-be7c-109c1a8fb8c8)**
Soru Kökü: Diş kuronunun embriyolojik gelişimi sırasında mine organının dental papillaya doğru içe çökmesi (invajine olması) sonucu gelişen bir anomalidir. Bu anatomik formasyona bağlı olarak oklüzal veya lingual çukurda plak birikimi artar ve pulpitis riski ciddi şekilde yükselir. Bu anomali kalıcı dentisyonda en sık aşağıdaki dişlerden hangisinde görülür?
Doğru Şık (D): Maksiller lateral kesici
Açıklama: Dens invaginatus (dens in dente), lingual pit'in dental pulpaya doğru abartılı çöküntüsü olup en sık kalıcı maksiller lateral kesici dişlerde görülür. Bu morfolojik defekt nedeniyle çürük mikroorganizmaları direkt pulpa odasına ulaşabilir ve pulpanın erken yaşta nekrozuna neden olabilir. Mandibular premolarlar ise genellikle dens evaginatus anatomisini gösterirler.

---

### ÇİFT 368 (Benzerlik: 0.70)

**Soru 1 (ID: f536aeb3-2f8e-4da5-9958-372f47b91cc5)**
Soru Kökü: Orta yaşlı bir kadında demir eksikliği anemisine ikincil olarak gelişen ve Skuamöz Hücreli Karsinom (SCC) riski taşıyan Plummer-Vinson sendromunun klasik triadında, atrofik glossit ve anemiye ek olarak kliniği domine eden patolojik yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Servikal özofagusta fibromüsküler mukozal bantlar (web)
Açıklama: Plummer-Vinson sendromunda demir deplesyonu, yüksek hücresel döngüye sahip epitelin yenilenmesini bozarak servikal özofagusta anormal fibromüsküler mukozal bantlar (webler) oluşturur. En güçlü distraktör olan nörolojik defisit (B12 eksikliği) pernisiyöz aneminin bulgusudur ve Plummer-Vinson tablosunda izlenmez. Bu mukozal weblerin yarattığı mekanik obstrüksiyon, hastalardaki tipik yutma güçlüğü (disfaji) semptomunun hücresel ve anatomik temelidir.

**Soru 2 (ID: 36004137-dfc0-47e6-b6f0-74fd95f420a8)**
Soru Kökü: Plummer-Vinson sendromunda disfajiye (yutma güçlüğüne) neden olan özofageal weblerin (halkalar) anatomik lokalizasyonu ve etiyolojisi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (D): Demir eksikliğine bağlı epiteliyal atrofi zemininde servikal (üst) özofagusta oluşurlar.
Açıklama: Plummer-Vinson sendromunda görülen mukozal fibromüsküler webler, demir deplesyonuna sekonder gelişen atrofi zemininde patognomonik olarak servikal (üst) özofagusta yerleşir ve mekanik obstrüksiyon yapar. Gastroözofageal reflüde izlenen asit maruziyetli metaplastik değişimler alt özofagustadır. B12 defekti mekanik disfaji yapmaz.

---

### ÇİFT 369 (Benzerlik: 0.70)

**Soru 1 (ID: 990c50d8-146a-4fb4-ac5c-7f550414a7d4)**
Soru Kökü: Sistemik skleroz (Skleroderma) hastalarında izlenen gastrointestinal sistem (GİS) patolojileri çok boyutludur. Özofagusun alt 2/3'lük kısmındaki dismotiliteye sekonder gelişen gastroözofageal reflü (GÖR) dışında, bu hastalarda eşzamanlı olarak şiddetli malabsorpsiyon (emilim bozukluğu) sendromu gelişmesinin spesifik patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): İnce bağırsak mukozasında izlenen mikrovillüs atrofisi
Açıklama: Sklerodermada kollajen birikimi ve vasküler iskemi tüm GİS'i vurur. Özofagustaki dismotilite yutma ve reflü sorunlarına yol açarken, hastalığın ince bağırsaktaki yansıması emilim yüzeyini sağlayan fırçamsı kenardaki 'mikrovillüslerin atrofisi' şeklindedir. Yüzey alanının iskemik kaybı, hastada şiddetli besin malabsorpsiyonu kaskadını tetikler.

**Soru 2 (ID: 38b2a48f-5e55-44ff-b480-32f63a5bf7ad)**
Soru Kökü: Sistemik skleroz (skleroderma) hastalarının oral ve maksillofasiyal komplikasyonları stomatognatik sistemi ciddi şekilde yıkıma uğratır. Bu hastalarda dilde hareket kısıtlılığı ve sekonder yutkunma güçlüğü (disfaji) oluşmasının mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Dil kaslarında bağ dokusu artışına bağlı lingual fibrozis gelişimi
Açıklama: Sklerodermada izlenen immün disregülasyon, sistemik TH2 sitokin deşarjıyla kontrolsüz bir doku fibrozisi (kollajen yığılımı) yaratır. Bu kaskad sadece deri ve perioral kasları (mikrostomi) tutmakla kalmaz, eş zamanlı olarak dilin kas dokusu içine de sızarak lingual fibrozis oluşturur. Taşlaşan ve elastikiyetini yitiren dil, lokma manipülasyonunu ve yutkunma (disfaji) fonksiyonunu kaybeder.

---

### ÇİFT 370 (Benzerlik: 0.70)

**Soru 1 (ID: 3e0b2e34-c5b0-430f-9a9e-5446aad14276)**
Soru Kökü: Etiyolojisi tam olarak bilinmeyen, bukkal mukozada süt beyazı opalesan bir görünümle karakterize olan lökoödemin histopatolojik incelemesinde aşağıdaki hücresel değişikliklerden hangisinin izlenmesi beklenir?
Doğru Şık (A): Spinal hücrelerde intrasellüler ödem
Açıklama: Lökoödem, spinal tabakadaki (stratum spinozum) epitel hücrelerinde sıvı birikimi sonucu oluşan intrasellüler ödem ile karakterize benign bir mukozal varyasyondur. Prickle hücrelerinde perinükleer eozinofilik kondensasyon ise beyaz sünger nevüsün tipik histolojik bulgusudur. Lökoödem displastik bir değişiklik barındırmaz ve malignite potansiyeli yoktur.

**Soru 2 (ID: 8ab8304e-fe4b-40e0-9035-0f3797a7d0c4)**
Soru Kökü: Ağız içi beyaz lezyonların tanısında fiziksel doku germe testi kritik önem taşır. Yanak mukozasında izlenen Fordyce granülleri doku gerdirildiğinde belirginleşirken, löködemin doku gerdirildiğinde tamamen silinmesinin ardında yatan histolojik lokalizasyon farkı aşağıdakilerden hangisidir?
Doğru Şık (B): Fordyce granüllerinin yüzey epitelinin intakt ve normal olup patolojinin alttaki submukozal yağ dokusunda (epitel dışı) yer alması, löködemin ise doğrudan intraepitelyal skuamöz hücre ödemi olması
Açıklama: Fordyce granülleri epitel dışı (submukozal) lezyonlardır; yüzey epiteli tamamen normaldir, alttaki gerçek sebase bez kitleleri epitel inceldiğinde (gerdirildiğinde) daha net parlar. Löködem ise epitelin bizzat kendi stratum spinozum tabakasındaki hücre içi ödemdir (intraepitelyal). Doku gerdirilip epitel hücreleri fiziksel sıkıştırmaya maruz kaldığında, hücrelerin ışık kırma indeksi değişir ve optik illüzyonla löködem görünmez olur.

---

### ÇİFT 371 (Benzerlik: 0.70)

**Soru 1 (ID: 0dc5c0c0-48bf-4f10-a688-280128870786)**
Soru Kökü: Radiküler kist zemininden gelişen rezidüel bir kistin histopatolojik incelemesinde, etiyolojik kaynağın ortadan kalkmasına bağlı olarak radiküler kiste kıyasla aşağıdaki bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Duvarında yoğun inflamasyon hücre infiltrasyonu ve kolesterol yarıkları
Açıklama: Rezidüel kistler, kiste neden olan nekrotik pulpalı dişin (antijen kaynağı) çekilmesinden sonra alveol kemiği içinde bırakılan radiküler kist dokusunun gelişimine devam etmesiyle oluşur. Enfeksiyon kaynağı uzaklaştırıldığı için kistin bağ dokusu duvarında radiküler kistteki gibi aktif inflamasyon (polimorfonükleer lökositler) veya doku yıkımına işaret eden kolesterol yarıkları gözlenmez. İnflamasyonsuz sklerotik yapı ve hemosiderin makrofajları tipiktir.

**Soru 2 (ID: a5cdc9fc-f23c-4940-837e-ace9b3bfe6e3)**
Soru Kökü: Periapikal enfeksiyonlarda, periapikal granülom zemininden radiküler kist oluşumunu başlatan ve kistin lümenini döşeyen asıl histolojik/hücresel komponent aşağıdakilerden hangisidir?
Doğru Şık (C): Diş gelişiminden arta kalan Malassez epitel artıkları
Açıklama: Periapikal (radiküler) kistlerin gelişiminde, pulpal enfeksiyon apekse ulaştığında oluşan inflamatuar hücre sitokinleri embriyolojik kök kılıfı kalıntılarını stimüle eder. Bu uyarı ile sessiz halden aktifleşerek çoğalmaya başlayan Malassez epitel artıkları, mevcut granülom dokusu içinde çoğalır ve merkezi sıvı dolu bir epiteliyal kistik kavite yaratırlar. Nötrofiller ve mononükleer hücreler reaksiyonu ateşlese de, gerçek bir kistin yapıtaşı olan non-keratinize skuamöz epitel duvarını sadece Malassez kalıntıları kurabilir.

---

### ÇİFT 372 (Benzerlik: 0.70)

**Soru 1 (ID: 4f9a1924-47a5-401b-bc18-1d551c2276c7)**
Soru Kökü: Otuz beş yaşında bir hastanın anterior maksillasında tespit edilen, diş taşıyan alveolar bölgelerde gelişmiş bir tümörün histolojik incelemesinde; sıkıca paketlenmiş, sitolojik olarak masum epitel adacıkları ve bu adacıklarda anlamlı keratinizasyon olmaksızın gelişen tek tip skuamöz farklılaşma izleniyor. Ancak adacıkların periferinde palizatlaşma (çitlenme) veya merkezde stellat retikulum (yıldızsı) benzeri gevşek ağsı yapı gözlenmemiştir. Tablo özellikleri referans alındığında bu lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Skuamöz odontojenik tümör
Açıklama: Dünya Sağlık Örgütü sınıflandırma tablolarında spesifik olarak vurgulandığı üzere, Skuamöz odontojenik tümör (ortalama yaş 34.8); anlamlı keratinizasyon göstermeyen, sıkıca paketlenmiş ve atipisiz skuamöz epitel adalarından oluşur. En önemli ayırıcı özelliği ise, ameloblastomda tipik olarak beklenen periferik palizatlaşmanın ve merkezi stellat retikulum yapısının bu tümörde BİLHASSA OLMAMASIDIR. Bu sayede ameloblastom varyantlarından kolayca ayrılır.

**Soru 2 (ID: 2c097f4e-e3da-404f-ab09-bf6e73f447b5)**
Soru Kökü: Kırk beş yaşında erkek hastanın dil dorsumunda saptanan, yüzeyi sağlam ancak pütürlü görünümlü yavaş büyüyen nodüler şişlik tamamen eksize ediliyor. İncelemeyi yapan genel patolog, yüzeydeki yassı epitel dokusunun altındaki bağ dokusuna doğru şiddetli rete peg uzantıları gösterdiğini raporluyor ve 'skuamöz hücreli karsinom invazyonu' şüphesiyle konsültasyon istiyor. Konsültan ağız patoloğu ise epitelin altında karsinom hücreleri değil, büyük, pembe, granüler sitoplazmalı hücre kordonları saptayarak maligniteyi ekarte ediyor. Bu yanıltıcı histolojik epitel bulgusunun adı aşağıdakilerden hangisidir?
Doğru Şık (C): Pseudoepitelyomatöz hiperplazi
Açıklama: Granüler hücreli tümör dilde sık yerleşen benign bir lezyondur, ancak histopatolojik incelemede üzerinde yer alan epitelde kanseri (SCC) son derece taklit eden hücresel bir aşağı büyüme reaksiyonu oluşturur. Bu görünüme 'pseudoepitelyomatöz (epitelyomatözü taklit eden) hiperplazi' denir. Yanlışlıkla kanser tanısı konmasını engellemek için, epitelin hemen altındaki büyük granüler sitoplazmalı hücre adalarının (kas veya Schwann hücre orjinli) varlığının teyit edilmesi esastır.

---

### ÇİFT 373 (Benzerlik: 0.70)

**Soru 1 (ID: 9f71102f-80da-4ec0-b64c-b0ef189f9d0a)**
Soru Kökü: Atrofik glossit (yanan dil) ve anemi bulgularıyla ortak zeminde seyreden Pernisiyöz anemi ile Plummer-Vinson sendromunun ayırıcı tanısında, Pernisiyöz anemi tablosuna patognomonik olarak hakim olan hücresel mekanizma ve klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Ekstremitelerde ilerleyici nörolojik defektler
Açıklama: Pernisiyöz anemide mide paryetal hücrelerine karşı gelişen otoantikorlar B12 emilimini bozarak ekstremitelerde ilerleyici nörolojik defektlere (karıncalanma, nöropati) yol açar. Servikal webler ve mekanik disfaji sadece demir eksikliğine sekonder gelişen Plummer-Vinson sendromunun anatomik kısıtlamalarıdır. Her iki hastalık da epitel döngüsünü bozarak dilde atrofi yaratsa da, malignite kaskadı ve özofageal anatomi bozukluğu Plummer-Vinson'da izlenir.

**Soru 2 (ID: 75bbb62b-7fc8-456c-8e0d-cdf29140eb3e)**
Soru Kökü: Ellili yaşlarında bir kadın hasta, şiddetli yutma güçlüğü (disfaji) ve dilinde yanma şikayetiyle kliniğe başvuruyor. Yapılan muayenesinde dil dorsumunda papilla kaybı ile karakterize pürüzsüz kırmızı görünüm (atrofik glossit) saptanıyor. Laboratuvar tetkiklerinde kronik demir eksikliği anemisi tespit edilen bu hastada özofagoskopide üst özofagusta mukozal bantlar (özofageal web) izleniyor. Bu klinik tablo için en olası tanı ve bu hastada gelecekte gelişme riski en yüksek olan malignite aşağıdakilerden hangisidir?
Doğru Şık (B): Plummer-Vinson Sendromu — Skuamöz hücreli karsinom (SCC)
Açıklama: Plummer-Vinson sendromu (Sideropenik disfaji); demir eksikliği anemisi, oral/özofageal mukoza atrofisi (atrofik glossit) ve özofageal weblere bağlı disfaji triadı ile karakterizedir. Bu sendrom prekanseröz bir durum olup, özellikle dil, oral kavite ve özofagusta Skuamöz Hücreli Karsinom (SCC) riskini belirgin şekilde artırır.

---

### ÇİFT 374 (Benzerlik: 0.70)

**Soru 1 (ID: 19a9c59e-6001-4599-90f2-fc3a6796e3c8)**
Soru Kökü: Nörokutanöz viral enfeksiyonların patofizyolojisinde latent fazdaki replikasyon alanları karakteristik farklar gösterir. Ramsay Hunt sendromu ve perioral rekürren Herpes Simpleks enfeksiyonlarında etken virüslerin sessiz formda beklediği gangliyonlar sırasıyla aşağıdakilerden hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): Genikulat gangliyon / Trigeminal gangliyon
Açıklama: Ramsay Hunt sendromunda Varicella Zoster Virüsü (VZV) patognomonik olarak 7. kraniyal sinirin duyu merkezi olan genikulat gangliyonda latent kalır ve burada reaktive olur. Rekürren oral Herpes Simpleks Virüsü (HSV) ise birincil enfeksiyonun ardından retrograt taşınarak bölgesel trigeminal gangliyona yerleşir. Bu iki viral ailenin anatomik replikasyon sahasındaki farklılık, yarattıkları klinik sendromların (yüz felci vs orofasiyal ülser) sınırlarını belirler.

**Soru 2 (ID: 1362dba7-3ec5-42a7-890b-5d72e88208c9)**
Soru Kökü: Ramsay Hunt sendromu ile idiyopatik Bell paralizisinin ayırıcı tanısında, klinisyenin Bell paralizisini ekarte etmesini sağlayan ve Ramsay Hunt sendromunu kesinleştiren patofizyolojik ve klinik farklılık aşağıdakilerden hangisidir?
Doğru Şık (B): Ramsay Hunt sendromunda dış kulak yolunda ağrılı veziküler döküntülerin bulunması
Açıklama: Bell paralizisi izole, idiyopatik bir motor yüz felcidir ve dış kulak yolunda vezikül veya şiddetli prodromal ağrı kaskadı barındırmaz. Ramsay Hunt sendromunda ise fasiyal felce mutlak suretle VZV'nin litik etkisine bağlı olarak gelişen tek taraflı ağrılı veziküler döküntüler ve tat duyusu kaybı (korda timpani) eşlik eder. Her iki durumda da fasiyal sinirin motor dalları etkilenir ve periferik tip paralizi oluşur.

---

### ÇİFT 375 (Benzerlik: 0.70)

**Soru 1 (ID: 2a3bdc83-5125-4d1e-ac3d-fd6e74d15239)**
Soru Kökü: Yirmi iki yaşında erkek hasta, alt sağ 20 yaş dişi bölgesinde şişlik ve ağrı şikayetiyle başvuruyor. Radyografik muayenede yarı gömülü dişin kuronunun bukkal yüzeyinde başlayıp kök bifurkasyonuna uzanan radyolusent bir kistik lezyon saptanıyor. Dişe uygulanan vitalite testi pozitif yanıt veriyor ve hastanın geçmişte aynı bölgede perikoronitis atakları geçirdiği öğreniliyor. Bu hastadaki **en olası** kist tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Paradental kist
Açıklama: Paradental (bukkal bifurkasyon) kist, inflamatuar kaynaklı bir kist olmasına rağmen radiküler kistten farklı olarak vital (canlı) dişlerde ve sıklıkla alt 3. molar dişlerin perikoronitis atakları sonrasında servikal periodontal dokudan gelişir. En güçlü distraktör olan dentigeröz kist gelişimsel kökenli olup tam gömülü diş kuronunu mine-sement sınırından sararken, paradental kist dişin canlı kalması ve bukkal servikal/bifurkasyon yerleşimi ile ayrılır.

**Soru 2 (ID: 06d05933-1ee8-43bb-9dd3-54a43c3a959b)**
Soru Kökü: Kırk beş yaşında kadın hasta, üst sağ kanin dişi hizasında, labial sulkusta şişlik şikayetiyle başvuruyor. Yapılan muayenede dişlerin vital olduğu, şişliğin yumuşak doku kaynaklı ve palpasyonda fluktuasyon verdiği saptanıyor. Radyolojik incelemede kemik içi bir defekt izlenmemiştir. Bu hastada en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Nazoalveoler kist
Açıklama: Nazoalveoler (nazolabial) kist, nazolakrimal kanal kökenli olup intraosseöz yıkım yapmayan, doğrudan yumuşak dokuda (labial sulkus, kanin/mukobukkal katlantı hizası) fluktuasyon veren şişlikle karakterize tek non-odontojenik kisttir. Dişlerin vital olması ve kemik lezyonu bulunmaması radiküler kisti ekerte ederken, orta hat/insisiv yerleşimli kemik lezyonu olmaması nazopalatin kisti dışlar.

---

### ÇİFT 376 (Benzerlik: 0.70)

**Soru 1 (ID: 0d093f4b-da09-4bf1-ab97-3740abbb504a)**
Soru Kökü: Kazınmakla sıyrılmayan beyaz renkli lezyonları olan hastadan alınan biyopside, epitel hiperplazisi ve belirgin keratin artışı olarak tanımlanan bu klinik tablonun diş hekimliği pratiğindeki en kritik önemi aşağıdakilerden hangisidir?
Doğru Şık (E): Premalign karakterde bir patolojik zemin oluşturması
Açıklama: Kronik hiperplastik kandidiyazis tablosu, hücresel düzeyde epiteliyal displazi riski taşıması ve malign transformasyona uğrayabilmesi nedeniyle premalign bir lezyon olarak kabul edilir. Diğer kandidiyazis tipleri (psödomembranöz veya eritematöz) yüzeyel kalarak displastik değişiklik yaratmazken, dokuya penetre olan bu kronik formda hücre döngüsü bozulmaktadır. Sistemik kana karışma ihtimali çok daha zayıf bir hücresel immün yetmezliği gerektirir, primer klinik risk skuamöz hücreli karsinom riskidir.

**Soru 2 (ID: df955b9f-bd42-456c-b71b-96ba02eb907c)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından 'kazınamayan ve klinik ya da patolojik anlamda başka bir hastalık olarak karakterize edilemeyen beyaz renkli yama ya da plak' şeklinde tanımlanan, %5-25 oranında karsinoma dönüşüm riski taşıyan lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, spesifik bir patolojik tanıdan ziyade kazınamayan beyaz plakları tanımlayan klinik bir terimdir ve premalign potansiyele sahiptir. Psödomembranöz kandidiyazis ise mukozadan kazınabilen beyaz plak formasyonudur.

---

### ÇİFT 377 (Benzerlik: 0.70)

**Soru 1 (ID: 856d7612-2c81-4626-9f42-7759bb5e9c1f)**
Soru Kökü: Gelişimsel dil patolojilerinden makroglossi ve ankiloglossi kavramlarının ayırıcı tanısında hücresel ve anatomik farklılıklarla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Ankiloglossinin primer patofizyolojisi lingual kas liflerinin konjenital olarak hiperplaziye uğramasıdır.
Açıklama: Ankiloglossi tablosunda kas liflerinde veya stroma dokusunda kesinlikle hücresel bir büyüme, hiperplazi ya da kütle artışı yoktur; anatomik tek kısıt lingual frenulumun normalden kısa/kalın olarak dili tabana sabitlemesidir (fiksasyon defekti). Makroglosside ise vasküler, neoplastik veya genetik hiperplazi nedeniyle dil hacminde gerçek veya psödo bir doku artışı saptanır. İki durum aynı lokalizasyonu paylaşsa da kütle dinamiği açısından morfolojik olarak birbirine zıttır.

**Soru 2 (ID: f3685cc8-d666-4da4-80b8-5f4e7845c880)**
Soru Kökü: Kretenizm (konjenital hipotiroidi) tablosuna sekonder olarak gelişen makroglossi mekanizması hakkında aşağıdaki hücresel açıklamalardan hangisi **yanlıştır**?
Doğru Şık (B): Makroglossi gelişiminin temel kütlesel nedeni, dil kas dokusundaki yoğun asimetrik hücre proliferasyonudur.
Açıklama: Kretenizmde makroglossinin nedeni kas hücrelerinin asimetrik proliferasyonu veya hiperplazisi değil; tiroid yetmezliğine bağlı olarak glikozaminoglikanların yıkılamayarak sıvı tutması ve dilde hamursu 'miksödem' birikimidir. Kas hipertrofisi ve asimetrik hücre proliferasyonu (hemihiperplazi), vasküler ve genetik kas temelli sendromlarda (Beckwith-Wiedemann vb.) görülür. Kretenizm, hücresel mitoz defekti üzerinden değil, katabolizma bozukluğuna bağlı metabolik ürün birikimi dinamiği üzerinden çalışır.

---

### ÇİFT 378 (Benzerlik: 0.70)

**Soru 1 (ID: f0481caa-15ca-4cc3-a66e-bb1b0f8e0f2d)**
Soru Kökü: Bağışıklık sistemi bozulmuş (özellikle AIDS hastaları) bireylerin genellikle dil lateral yüzeylerinde saptanan, kazınmakla sıyrılmayan, beyaz, tüy gibi birleşen yama şeklindeki lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Kıllı lökoplaki
Açıklama: Kıllı lökoplaki, immünsüpresif bireylerde hücresel bağışıklığın çökmesiyle fırsatçı olarak beliren, tüy tarzında beyaz uzantılar yapan ve kazınamayan patognomonik lezyondur. Psödomembranöz kandidiyazis immünsüpresyonda görülse de kazındığında kolayca sıyrılıp altta eritem bırakmasıyla kıllı lökoplakiden ayrılır. Bu lezyon HIV progresyonunun önemli bir klinik belirtecidir.

**Soru 2 (ID: 1e806a12-408f-42dd-9cea-459f02e13743)**
Soru Kökü: HIV enfeksiyonu olan bir hastada dilin lateral kenarlarında dikey yerleşimli, kazınamayan, beyaz ve oluklu plaklar tespit edilmiştir. Biyopsi materyalinin mikroskobik incelemesinde hiperparakeratoz, akantoz ve balon hücreleri izlenmiştir. Bu lezyon ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Yüksek oranda skuamöz hücreli karsinoma dönüşüm riski taşır.
Açıklama: Kıllı (Hairy) lökoplaki, epitel hücrelerini enfekte eden Epstein-Barr virüsü (EBV) kaynaklı reaktif bir lezyondur ve prekanseröz bir karakter taşımaz. Normal lökoplaki formları malignite riski barındırırken, kıllı lökoplaki sadece hücresel bir viral yanıttır ve malign transformasyona uğramaz. Klinik olarak kandidiyazis ile karışabilir ancak kazınamaması ile ayrılır.

---

### ÇİFT 379 (Benzerlik: 0.70)

**Soru 1 (ID: 835eec77-aa64-4be9-b576-da386b9e59b5)**
Soru Kökü: On bir yaşındaki erkek hasta, yanak içi bölgesinde her iki tarafta da bulunan, ağrısız, kalın ve süngerimsi beyaz plaklar şikayetiyle başvuruyor. Anamnezden bu durumun puberte öncesinde belirdiği ve babasında da benzer lezyonlar olduğu öğreniliyor. Bu hastadaki lezyonun patogenezinde aşağıdaki genlerden hangisinde mutasyon saptanması en olasıdır?
Doğru Şık (B): Keratin 4 ve/veya Keratin 13
Açıklama: Beyaz sünger nevüs (Cannon Hastalığı), keratin 4 ve/veya keratin 13 genlerindeki mutasyonlar sonucu gelişen, otozomal dominant geçişli herediter bir durumdur. ATP2A2 geni mutasyonu foliküler keratozise (Darier hastalığı) neden olurken, hücresel düzeyde desmozomal defektler oluşturur. Beyaz sünger nevüste puberte öncesi başlangıç ve bilateral tutulum tanı koydurucu temel klinik parametrelerdir.

**Soru 2 (ID: 112204b7-a389-4bf0-9429-7da3a7f77544)**
Soru Kökü: Sekiz yaşındaki hastanın yanak mukozasında yaygın kalın beyaz plaklar saptanıyor. Göz hekimi konsültasyonunda, hastanın korneal limbus bölgesinde konjonktival plakların varlığı tespit ediliyor. Histolojik incelemesinde hiperplazi ve diskeratotik hücreler izlenen, kendini sınırlayan bu otozomal dominant patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Herediter benign intraepitelyal diskeratozis (Witkop Sendromu)
Açıklama: Witkop-Von Sallmann Sendromu (Herediter benign intraepitelyal diskeratoz), ektodermal kökenli hücrelerdeki defekte bağlı olarak patognomonik şekilde eşzamanlı oral beyaz lezyonlar ve gözde (korneal limbusta) konjonktival plaklarla seyreden kalıtsal bir sendromdur. Darier hastalığı seboreik deriyi tutarken oküler bulgu vermez; Beyaz Sünger Nevüs ise sadece oral mukoza ile sınırlıdır.

---

### ÇİFT 380 (Benzerlik: 0.70)

**Soru 1 (ID: 00fdf75d-971d-4ff1-b960-f84071b26100)**
Soru Kökü: Monomorfik adenomların histolojik alt gruplarından olan ve majör tükürük bezlerinde (parotis) **görülmeyip**, sadece ağız içi minör tükürük bezlerinden ve özellikle üst dudaktan köken alan spesifik neoplazi aşağıdakilerden hangisidir?
Doğru Şık (D): Kanaliküler adenom
Açıklama: Kanaliküler adenom, neredeyse istisnasız bir şekilde intraoral minör tükürük bezlerinde gelişen (en çok da üst dudak lokalizasyonlu) monomorfik bir adenomdur. Onkositom ve Bazal hücreli adenom ise majör olarak parotis bezinde görülmeyi tercih eder.

**Soru 2 (ID: 28f744f6-2bda-4361-ba82-e3be7734e7b2)**
Soru Kökü: Tükürük bezlerinin en sık görülen malign epitelyal tümörü olan ve gelişimsel t(11;19) genetik translokasyonu sonucu MECT1-MAML2 füzyon geni ile sıkı ilişki gösteren parotis yerleşimli neoplazi aşağıdakilerden hangisidir?
Doğru Şık (A): Mukoepidermoid karsinom
Açıklama: Mukoepidermoid karsinom, skuamöz hücreler ve mukus üreten (musikarmin pozitif) hücrelerden oluşan, tükürük bezlerinin en yaygın görülen malign tümörüdür. Adenoid kistik karsinom ise perinevral invazyonu ile öne çıkan ve minör tükürük bezlerinde daha ölümcül seyreden farklı bir maling entitedir. MECT1-MAML2 füzyonu mukoepidermoid karsinomun patogenezinde hedef olarak hücresel çoğalmayı tetikler.

---

### ÇİFT 381 (Benzerlik: 0.70)

**Soru 1 (ID: 7bf04f7a-5d50-4bc2-88ca-3bc46b35ef11)**
Soru Kökü: 55 yaşında kadın hasta, dış kulak yolunda ağrılı veziküler döküntüler, şiddetli boğaz ağrısı ve yüzünün sol tarafında motor kayıp (yüz felci) ile kliniğe başvuruyor. Muayenede dilin ön 2/3'lük kısmında tat duyusunun tamamen kaybolduğu saptanıyor. Bu özgün klinik triadı oluşturan Ramsay-Hunt sendromunun etiyolojik virüsü aşağıdakilerden hangisidir?
Doğru Şık (B): Varisella zoster virüsü
Açıklama: Ramsay-Hunt sendromu, çocukluk çağında su çiçeği etkeni olarak alınan Varisella Zoster Virüsünün (Herpes Zoster) yıllar sonra fasiyal sinir ganglionunda (Ganglion geniculi) reaktivasyonu sonucu ortaya çıkan özgün bir zona formudur. Fasiyal sinirin korda timpani dalını tutması tat kaybına, motor dalını tutması yüz felcine ve kulak komşuluğu dış kulak yolu veziküllerine yol açar. HSV-1'de trigeminal sinir tutulumu ağırlıkta olup motor yüz felci ve spesifik kulak vezikülleri beklenmez.

**Soru 2 (ID: 1362dba7-3ec5-42a7-890b-5d72e88208c9)**
Soru Kökü: Ramsay Hunt sendromu ile idiyopatik Bell paralizisinin ayırıcı tanısında, klinisyenin Bell paralizisini ekarte etmesini sağlayan ve Ramsay Hunt sendromunu kesinleştiren patofizyolojik ve klinik farklılık aşağıdakilerden hangisidir?
Doğru Şık (B): Ramsay Hunt sendromunda dış kulak yolunda ağrılı veziküler döküntülerin bulunması
Açıklama: Bell paralizisi izole, idiyopatik bir motor yüz felcidir ve dış kulak yolunda vezikül veya şiddetli prodromal ağrı kaskadı barındırmaz. Ramsay Hunt sendromunda ise fasiyal felce mutlak suretle VZV'nin litik etkisine bağlı olarak gelişen tek taraflı ağrılı veziküler döküntüler ve tat duyusu kaybı (korda timpani) eşlik eder. Her iki durumda da fasiyal sinirin motor dalları etkilenir ve periferik tip paralizi oluşur.

---

### ÇİFT 382 (Benzerlik: 0.70)

**Soru 1 (ID: b9d2e604-5fe5-4252-a9a9-f58907f72aa1)**
Soru Kökü: Akut pulpal inflamasyon tablosunun resolüsyona (tam iyileşmeye) ulaşamadığı durumlarda pulpanın kronik pulpitis evresine geçtiğini gösteren ve geri dönüşümsüz süreci başlatan karakteristik histolojik doku değişimi aşağıdakilerden hangisidir?
Doğru Şık (D): Lezyon sahasındaki nötrofillerin yerini mononükleer hücrelerin alması ve skar dokusu gelişimi
Açıklama: Uzun süreli travma veya şiddetli akut inflamasyonun kontrol altına alınamadığı durumlarda, ortamdaki başlangıç hücreleri olan nötrofillerin yerini yavaş yavaş lenfosit, makrofaj ve plazma hücrelerinden oluşan mononükleer hücreler alır. Bu hücresel değişime ek olarak, fonksiyonunu yitirmiş odontoblastların ve bağ dokusunun yerini yoğun kollajen içeren onarım (skar) dokusunun alması, kronik pulpitin temel histolojik markerıdır. Bu noktadan sonra doku iyileşmez, inflamasyon devam ederse pulpa nekrozu kaçınılmaz hale gelir.

**Soru 2 (ID: feedfd56-19e3-4028-a069-930cf70a2561)**
Soru Kökü: Kronik pulpit tablosunun patogenezi ve seyri ile ilgili aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Lezyon bölgesinde her zaman nötrofillerin mononükleer hücrelerden sayıca fazla olması beklenir.
Açıklama: Kronik pulpit tablosuna geçişin hücresel belirteci, akut fazın yöneticisi olan nötrofillerin sahayı terk edip yerlerini makrofaj ve lenfosit gibi mononükleer inflamatuar hücrelere bırakmasıdır; nötrofil dominansı kronik değil akut pürülan evrenin özelliğidir. En güçlü çeldirici olan skar dokusu gelişimi doğrudur; odontoblastlar ölür ve onarım çabası kollajenoz fibrozisle sonuçlanır. Hastalığın geri dönülmez (irreverzibil) olması kök kanal tedavisini mutlak kılar.

---

### ÇİFT 383 (Benzerlik: 0.70)

**Soru 1 (ID: 5d937966-e035-4df3-b4be-a0e47ebe4b40)**
Soru Kökü: Embriyolojik doku büyüme (overgrowth) regülasyon genlerindeki mutasyonlar sonucu, abdominal visceromegali ile birlikte dil kas dokusunda konjenital hiperplazi gelişerek makroglossiye neden olan sistemik genetik sendrom aşağıdakilerden hangisidir?
Doğru Şık (D): Beckwith-Wiedemann sendromu
Açıklama: Beckwith-Wiedemann sendromu, genetik regülasyon defekti sonucu abdominal visceromegali (organ büyümesi) ve dilde doğrudan kas dokusu hiperplazisi ile seyreden bir doku büyüme (overgrowth) sendromudur. Down sendromunda gözlenen makroglossi maksiller yetersizliğe bağlı 'göreceli' (psödomakroglossi) bir tablodur ve dokuda gerçek kas hiperplazisi barındırmaz. Pierre Robin sekansı ise makroglossi değil, mikrognatiye bağlı dilin geriye kaçması (glossoptoz) tablosudur.

**Soru 2 (ID: eb9d1c30-2003-4762-9f09-170e9d28779f)**
Soru Kökü: Makroglossinin etiyolojisinde konjenital ve herediter faktörler önemli rol oynar. Buna göre, makroglossinin en sık görülen nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Vasküler malformasyonlar ve kas hipertrofisi
Açıklama: Makroglossi gelişiminin en sık karşılaşılan birincil nedenleri dokusal aşırı büyüme paterni gösteren vasküler malformasyonlar ve yapısal kas hipertrofileridir. Granülomatöz hastalıklar veya kistik kitleler de dilde büyümeye neden olabilse de bunlar konjenital temelden ziyade sekonder ve daha nadir gelişen nedenlerdir. Beckwith-Wiedemann sendromu veya Down sendromu gibi herediter tablolarda da bu yapısal doku artışları klinikte makroglossi olarak kendini gösterir.

---

### ÇİFT 384 (Benzerlik: 0.70)

**Soru 1 (ID: b2daf790-6e66-49e8-83c0-88d2865fb64e)**
Soru Kökü: İki aylık erkek bebeğin intraoral muayenesinde sert ve yumuşak damak sınırında orta hattan uzak lokalizasyonda küçük, beyaz renkli keratin dolu kistler tespit edilmiştir. Bu lezyonların köken aldığı doku aşağıdakilerden hangisidir?
Doğru Şık (E): Damak tükürük bezleri epiteli
Açıklama: Sert ve yumuşak damak sınırında görülen Bohn nodülleri odontojenik kökenli değildir ve damak tükürük bezlerinin epitelinden köken alır. Alveolar krette görülen infant gingival kistleri dental lamina (Serre) artığı iken, orta hatta yerleşen Epstein incileri palatal inklüzyon kistleridir.

**Soru 2 (ID: 5e9afff0-0426-4690-ba8d-19cd97294105)**
Soru Kökü: Yenidoğan döneminde görülen ve ebeveynleri endişelendiren kistik oluşumlar klinik varyantlarına göre ayrılır. Orta hatta (sert damak rafesinin birleşim yeri) embriyolojik birleşme hattında hapsolan epitel hücrelerinden gelişen ve yüzeyi skuamöz kist epiteli ile örtülü olup kendiliğinden regrese olan kist grubuna ne ad verilir?
Doğru Şık (A): Epstein incileri
Açıklama: Epstein incileri, embriyolojik damak rafe birleşimi sırasında invajine olup hapsolan skuamöz epitel kistleri olup sadece orta hatta görülür. Bohn nodülleri ise minör damak tükürük bezleri kökenlidir ve genellikle damak kretinin yan kısımlarına yerleşir. İkisi de bebek büyüdükçe yüzeye açılıp kendiliğinden soyularak (patlayarak) kaybolur.

---

### ÇİFT 385 (Benzerlik: 0.70)

**Soru 1 (ID: e4046c20-11d5-41e4-9067-03692d981311)**
Soru Kökü: Median romboid glossit (santral papiller atrofi) ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (C): Etiyopatogenezinde vakaların büyük bir kısmında Candida albicans kolonizasyonu saptanmaktadır.
Açıklama: Median romboid glossit artık gelişimsel bir anomali olarak kabul edilmemekte; patognomonik olarak vakaların yaklaşık %40'ında Candida albicans enfeksiyonu zemininde gelişen kronik inflamatuar-atrofik bir patoloji olduğu bilinmektedir. Tipik yerleşimi dil sırtı orta hatta, foramen çekum önüdür ve genellikle asemptomatiktir.

**Soru 2 (ID: b7cc9f03-10d6-477f-8337-3f20d65e2f70)**
Soru Kökü: Median romboit glossit ve eritema migrans (coğrafik dil) klinik olarak dil dorsumunda eritem (kırmızılık) ve papilla atrofisi yapmaları nedeniyle karıştırılabilir. Bu iki lezyonu birbirinden ayıran TEK KRİTİK klinik davranış ve etiyolojik fark aşağıdakilerden hangisidir?
Doğru Şık (A): Median romboit glossitin Kandida zemininde gelişip orta hatta sabit kalması, eritema migransın ise dinamik olarak yer değiştirmesi
Açıklama: Eritema migrans dinamik hücresel turn-over döngüsüne sahip immün-reaktif bir tablodur ve papilla atrofileri dilde sürekli yer değiştirerek (gezici) harita görünümü çizer. Median romboit glossit ise embriyolojik gelişim varyasyonu ve kronik Kandida enfeksiyonu zemininde gelişen, dilin posterior dorsum orta hattında ömür boyu sabit (yer değiştirmeyen) kalan eritematöz baklava dilimi şeklinde bir lezyondur.

---

### ÇİFT 386 (Benzerlik: 0.70)

**Soru 1 (ID: 1add0393-72b7-4e85-bd84-f4260057e5eb)**
Soru Kökü: Puberte öncesi beliren bilateral asemptomatik beyaz lezyonlarla karakterize olan ve histopatolojik incelemesinde dikensi (prickle) hücrelerde 'perinükleer eozinofilik kondensasyon' saptanan genetik defekt aşağıdakilerden hangisidir?
Doğru Şık (E): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüs (Cannon hastalığı), keratin 4 ve 13 genlerindeki otozomal dominant bir mutasyon sonucu gelişir ve mikroskopide karakteristik perinükleer eozinofilik kondensasyon barındırır. Herediter benign intraepitelyal diskeratoziste ise kondensasyon değil, diskeratotik hücreler ön plandadır. Hastalığın bilateral olması ve puberte öncesi başlangıcı genetik altyapısını doğrular.

**Soru 2 (ID: c0b21f81-b3fa-4541-8fe1-487bb08f1b53)**
Soru Kökü: On yaşındaki hastanın ağız içi muayenesinde, her iki yanak mukozasını kaplayan kalın, yumuşak, süngerimsi beyaz plaklar saptanıyor. Alınan biyopsinin histopatolojik incelemesinde stratum spinozum tabakasındaki prickle (dikensi) hücrelerde sitoiskelet çöküşünü simgeleyen 'perinükleer eozinofilik kondensasyon' raporlanıyor. Bu hastadaki lezyonun etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Keratin 4 ve Keratin 13 genlerinde mutasyon
Açıklama: Keratin 4 ve 13 gen mutasyonu, sitoiskelet ağının bozulmasına ve spesifik olarak hücrelerde hidropik dejenerasyon ile patognomonik 'perinükleer eozinofilik kondensasyon' oluşumuna neden olarak Cannon hastalığını (Beyaz Sünger Nevüs) tetikler. Kalsiyum pompa defekti Darier hastalığına, EBV kıllı lökoplakiye, sürtünme friksiyonel keratoza yol açar.

---

### ÇİFT 387 (Benzerlik: 0.70)

**Soru 1 (ID: 167d4aec-1eed-4a21-8ec6-0f79ac605742)**
Soru Kökü: Çenelerde en sık görülen inflamatuvar kökenli lezyon olan radiküler (periapikal) kist ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): İlgili dişin pulpasının canlı (vital) olması tanı için karakteristiktir.
Açıklama: Radiküler kist, çürük veya travma sonucu canlılığını yitirmiş (nekrotik pulpalı) dişlerin kök ucunda gelişen enfeksiyon zemininde oluşur; dolayısıyla ilgili diş canlı (vital) değildir. İlgili dişin canlı olduğu ve genellikle 3. büyük azıların bukkal servikalinde perikoronitis sonucu gelişen lezyon, enflamatuvar kistlerin bir diğer türü olan paradental kisttir. Radiküler kist epitelinde keratinizasyon beklenmez, non-keratinize yassı epitel karakteristiktir.

**Soru 2 (ID: 01614c63-1ae3-4db3-9130-63a7e16a3c6a)**
Soru Kökü: 45 yaşında kadın hasta, sol alt kanin dişinde şiddetli ağrı ve kök ucuna denk gelen labiyal mukozada fluktuasyon veren şişlik şikayetiyle başvuruyor. Histopatolojik incelemede periapikal alanda yoğun nötrofil birikimi ve belirgin doku erimesi saptanıyor. Bu hastanın periapikal dokusunda epitel proliferasyonuna bağlı bir kist gelişimi **gözlenmemesinin** temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Likefaksiyon nekrozunun kist gelişimine olanak tanımadan ortamı enzimatik olarak eritmesi
Açıklama: Periapikal apselerde, pulpadan apekse ulaşan aşırı bakteri ürünleri ortama yoğun nötrofil çeker ve bunun sonucunda dokuyu hızla eriten bir likefaksiyon nekrozu meydana gelir. Bu asidik ve enzimatik doku erimesi süreci ortamı tamamen parçaladığı için, epitel hücrelerinin organize olup sınırları belli bir kist duvarı (periapikal kist) oluşturmasına fırsat kalmaz. Komplikasyon olarak enfeksiyon mukozaya veya deriye fistülize olabilir ancak kist oluşmamasının doğrudan patofizyolojik nedeni bu enzimatik nekroz yıkımıdır.

---

### ÇİFT 388 (Benzerlik: 0.69)

**Soru 1 (ID: 167d4aec-1eed-4a21-8ec6-0f79ac605742)**
Soru Kökü: Çenelerde en sık görülen inflamatuvar kökenli lezyon olan radiküler (periapikal) kist ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): İlgili dişin pulpasının canlı (vital) olması tanı için karakteristiktir.
Açıklama: Radiküler kist, çürük veya travma sonucu canlılığını yitirmiş (nekrotik pulpalı) dişlerin kök ucunda gelişen enfeksiyon zemininde oluşur; dolayısıyla ilgili diş canlı (vital) değildir. İlgili dişin canlı olduğu ve genellikle 3. büyük azıların bukkal servikalinde perikoronitis sonucu gelişen lezyon, enflamatuvar kistlerin bir diğer türü olan paradental kisttir. Radiküler kist epitelinde keratinizasyon beklenmez, non-keratinize yassı epitel karakteristiktir.

**Soru 2 (ID: a5cdc9fc-f23c-4940-837e-ace9b3bfe6e3)**
Soru Kökü: Periapikal enfeksiyonlarda, periapikal granülom zemininden radiküler kist oluşumunu başlatan ve kistin lümenini döşeyen asıl histolojik/hücresel komponent aşağıdakilerden hangisidir?
Doğru Şık (C): Diş gelişiminden arta kalan Malassez epitel artıkları
Açıklama: Periapikal (radiküler) kistlerin gelişiminde, pulpal enfeksiyon apekse ulaştığında oluşan inflamatuar hücre sitokinleri embriyolojik kök kılıfı kalıntılarını stimüle eder. Bu uyarı ile sessiz halden aktifleşerek çoğalmaya başlayan Malassez epitel artıkları, mevcut granülom dokusu içinde çoğalır ve merkezi sıvı dolu bir epiteliyal kistik kavite yaratırlar. Nötrofiller ve mononükleer hücreler reaksiyonu ateşlese de, gerçek bir kistin yapıtaşı olan non-keratinize skuamöz epitel duvarını sadece Malassez kalıntıları kurabilir.

---

### ÇİFT 389 (Benzerlik: 0.69)

**Soru 1 (ID: 38b58cec-56f0-47f3-8cf7-ddbb60c34d5c)**
Soru Kökü: Kızamık enfeksiyonunun karakteristik histopatolojik bulgusu olan Whartin-Finkeldey dev hücrelerinin patogenezi aşağıdakilerden hangisine dayanır?
Doğru Şık (B): Enfekte epitel hücrelerinin zarlarının virüs sitopatik etkisiyle kaynaşması (füzyon)
Açıklama: Kızamık virüsünün epitel hücrelerinde yarattığı majör sitopatik etki, enfekte hücre membranlarının birbirine kaynaşmasıdır (füzyon). Bu hücresel füzyon, sitoplazmik sınırları ortadan kaldırarak nükleusların Whartin-Finkeldey dev hücreleri içinde toplanmasına neden olur. Tüberküloz veya sifilizdeki Langhans dev hücreleri hücresel bağışıklık (makrofaj) kökenliyken, kızamıktaki dev hücreler doğrudan virüsün bu birleştirici etkisine sekonderdir.

**Soru 2 (ID: 15ba2a82-a8f2-4389-950a-66ac970e01f1)**
Soru Kökü: Kızamık enfeksiyonunun mukozal ve hücresel kinetiği değerlendirildiğinde aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Histopatolojide hücresel bağışıklık sonucu makrofaj kökenli Langhans tipi dev hücreler görülür.
Açıklama: Kızamığın histopatolojik karekteristiği olan Whartin-Finkeldey dev hücreleri hücresel bağışıklıkla (makrofaj birleşimiyle) değil, virüsün direkt konak epitel hücre membranlarını kaynaştırması (füzyon) sonucu gelişir. Makrofaj kökenli Langhans dev hücreleri sifiliz veya tüberküloz gibi granülomatöz hastalıklarda görülür.

---

### ÇİFT 390 (Benzerlik: 0.69)

**Soru 1 (ID: e8fa9c2d-c4df-4e92-b93b-3f4e835a9baa)**
Soru Kökü: Reaktif ve premalign karakterli ağız içi beyaz lezyonları için; I. Friksiyonel hiperkeratoz lezyonlarında displastik değişiklik gözlenmez. II. Revers smokers-palatal lezyonu premalign karakterdedir. III. Kıllı lökoplaki prekanseröz dönüşüm açısından yüksek risk taşır. ifadelerinden hangileri doğrudur?
Doğru Şık (B): I ve II
Açıklama: Friksiyonel hiperkeratoz mekanik savunma mekanizmasıdır ve displastik değildir (I doğru). Ters sigara içimi mukozayı kanserojene ve ısıya açık hale getirir, yüksek premalignite riski oluşturur (II doğru). Ancak kıllı lökoplaki Epstein-Barr virüsü kökenli immünsüpresif bir lezyondur ve kanserleşme riski (prekanseröz) taşımaz (III yanlış). Bu nedenle lezyonun ismindeki lökoplaki kelimesi kanserleşme potansiyeliyle doğrudan bağdaştırılamaz.

**Soru 2 (ID: ed086797-fd67-4b4c-b04a-aa18c79e6b57)**
Soru Kökü: Hem friksiyonel hiperkeratoz hem de ters sigara içiciliğine bağlı revers smokers palatal lezyonu, oral epitelde kalınlaşma (hiperkeratoz) ve beyaz plak görünümü yaratır. Ancak friksiyonel keratozun malignite riski sıfırken, ters sigara lezyonunun 5 yıldızlı agresif karsinom potansiyeli barındırmasını sağlayan patofizyolojik (karsinogenez) basamağı aşağıdakilerden hangisidir?
Doğru Şık (B): Yüksek termal ve kimyasal şokun doğrudan bazal tabaka hücrelerinde DNA hasarı ve displastik atipi yaratması
Açıklama: Friksiyonel hiperkeratozda uygulanan düşük enerjili mekanik kuvvet sadece yüzeyel koruma için mitozu artırır, genetik koda zarar vermez. Oysa sigaranın yanan ucunun (ateşin) ağız içinde tutulmasıyla oluşan masif termal şok ve yoğun karsinojenler, epitelin savunma sınırını aşıp doğrudan stratum basale'deki hücrelerin çekirdek yapısını bozar. Oluşan DNA hasarı, otonom displastik klonları yaratarak yüksek riskli karsinogenezi başlatır.

---

### ÇİFT 391 (Benzerlik: 0.69)

**Soru 1 (ID: 9772aa57-e17a-4ca7-90c6-68755b4772c4)**
Soru Kökü: 45 yaşında kadın hasta, bir hafta süren geniş spektrumlu antibiyotik kullanımı sonrasında dilinde şiddetli yanma ve kızarıklık şikayetiyle başvuruyor. İntraoral muayenede dil sırtındaki papillaların atrofiye uğradığı ve tüm dilin parlak kırmızı, eritematöz bir form aldığı görülüyor. Yüzeyde kazınabilen beyaz plak veya membran saptanmıyor. Bu hastada ekolojik boşluğa sekonder gelişen en olası hücresel tablo aşağıdakilerden hangisidir?
Doğru Şık (C): Akut antibiyotik stomatiti
Açıklama: Geniş spektrumlu antibiyotikler floradaki yarışmacı bakterileri inhibe ederek ekolojik boşluk yaratır; bu da Candida'nın aşırı proliferasyonu ile dilde papilla atrofisi ve diffüz eritemle seyreden 'Akut antibiyotik stomatiti'ne (akut eritematöz kandidiyazis) neden olur. Psödomembranöz formda da Candida etken olsa da, yüzeyde zorunlu olarak kazınabilen beyaz peynirimsi hif/plak birikimi olmalıdır, eritematöz formda sadece kızarıklık izlenir. Demir ve B12 eksiklikleri antibiyotik kökenli değil, kronik nutrisyonel hücre döngüsü defektleridir.

**Soru 2 (ID: 8f9db9de-1415-4ecd-9135-5fc4e99fc00d)**
Soru Kökü: 30 yaşında, bilinen kronik bir sistemik hastalık öyküsü olmayan sağlıklı görünümlü erkek hasta, yanak mukozasında beyaz lekeler şikayetiyle başvuruyor. Muayenede her iki bukkal mukozada ve damakta yer alan, gazlı bezle mekanik olarak kazındığında kolayca parçalanıp sıyrılabilen ve altında hafif eritemli bir yüzey bırakan beyaz-krem renkli pamukçuk lezyonları (psödomembranlar) saptanıyor. Hastanın anamnezinde steroid kullanımı yoktur. Bu klinik tablonun altta yatan hücresel immün yetmezlik riskine bağlı olarak diş hekimini yönlendirmesi gereken tıbbi araştırma aşağıdakilerden hangisidir?
Doğru Şık (B): HIV (AIDS) serolojisi ve T hücre değerlendirmesi
Açıklama: Risk faktörü (diyabet, steroid, kemoterapi) bulunmayan erişkin bir erkekte aniden ortaya çıkan kazınabilir psödomembranöz kandidiyazis (pamukçuk), hücresel T-lenfosit defektini ve immünsüpresyonu gösteren patognomonik klinik kurgudur ve mutlaka HIV/AIDS araştırmasını gerektirir. Serum demir ve B12 tetkikleri kazınabilir beyaz plaklarla değil, doğrudan dil sırtında ağrılı atrofi ve kızarıklıkla (glossit) karşımıza çıkar. Fırsatçı Kandida hifleri, immün sistemin hücresel savunma ayağı çöktüğünde mukozada kontrolsüzce kolonize olarak bu zarları üretir.

---

### ÇİFT 392 (Benzerlik: 0.69)

**Soru 1 (ID: f548c30d-fad1-484d-aa89-ca4307aad28b)**
Soru Kökü: Çocukluk çağında başlayan, mandibulada tipik olarak simetrik posterior genişleme yaparak yüze 'aydede' veya 'melek' görünümü veren (cherubism), otosomal dominant kalıtılan gelişimsel kemik hastalığına yol açan genetik mutasyon aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): SH3BP2 geni
Açıklama: Cherubism, çenelerde ilerleyici kemik rezorpsiyonu ve yerine multiloküler fibröz doku ve dev hücrelerin geçmesiyle karakterize edilen otozomal dominant bir hastalıktır ve SH3BP2 genindeki mutasyonlarla ilişkilidir. PTCH geni Gorlin sendromunda, BRAF gen mutasyonu konvansiyonel ameloblastomda, PLAG1 overekspresyonu pleomorfik adenomda rol oynar. Bu spesifik sendrom, bilateral doğası ile osteofibröz lezyonlardan ayrılır.

**Soru 2 (ID: 6508646f-a0e3-4ca7-ae78-f981d495db67)**
Soru Kökü: Yedi yaşında erkek çocuk; aşağı bakan gözler, mikrognati, makrostomi, şiddetli mandibula ve zigomatik kemik hipoplazisi bulgularıyla değerlendirilmektedir. Klinik olarak 'kuş veya balık benzeri' yüz görünümüne sahip bu hastada, birinci brankial ark yapılarının gelişimini bozan gendeki mutasyon aşağıdakilerden hangisidir?
Doğru Şık (C): TCOF1
Açıklama: Tarif edilen kuş/balık benzeri yüz, mikrognati ve zigomatik hipoplazi tablosu Mandibulofasiyal Dizostoz (Treacher-Collins sendromu) özellikleridir ve patogenezi TCOF1 gen mutasyonuna dayanır. Bu gen, birinci ve ikinci brankial arktan türeyen dokuların nöral krest hücresi göçünü yönetir. FGFR2 mutasyonu Crouzon sendromunda, IRF6 ise Van der Woude sendromunda izlenir.

---

### ÇİFT 393 (Benzerlik: 0.69)

**Soru 1 (ID: 96d6b733-c0f1-4699-bf01-fd43bed76588)**
Soru Kökü: Oral lökoplakilerin klinik yerleşim yerleri incelendiğinde, lezyonun görülme sıklığı açısından aşağıdaki anatomik bölgelerden hangisi **en az olası** lokalizasyondur?
Doğru Şık (D): Ağız tabanı
Açıklama: Lökoplakinin oral bölgede görülme sıklığı çoktan aza doğru; Vestibül > Yanak mukozası > Damak > Alveoler çıkıntı > Dudak > Dil > Ağız tabanı şeklindedir. Ağız tabanı lezyonun istatistiksel olarak en nadir izlendiği bölge olmasına rağmen, paradoksal olarak maligniteye dönüşüm riskinin en yüksek olduğu alandır.

**Soru 2 (ID: af4017cf-429c-49ca-a4fc-0563f359e4cf)**
Soru Kökü: Lökoplakilerin yerleşim lokalizasyonları ile etiyolojik faktörler arasındaki ilişkiler değerlendirildiğinde, karsinom geliştirme riskinin yüksek olduğu bilinen sifilitik lökoplaki tipik olarak oral bölgenin neresinde izlenir?
Doğru Şık (C): Dil dorsumu
Açıklama: Sifilitik lökoplaki, Treponema pallidum enfeksiyonunun geç dönem komplikasyonu olarak spesifik bir şekilde dilin dorsum (sırt) yüzeyinde lokalize olan bir tablodur. Bu kronik inflamatuar zemin hücresel atipiye yatkınlık oluşturur ve skuamöz hücreli karsinom gelişimi açısından ciddi oranda yüksek risk barındırır.

---

### ÇİFT 394 (Benzerlik: 0.69)

**Soru 1 (ID: b6d0b317-ac77-4248-b9ae-9a5a5431a382)**
Soru Kökü: Çocukluk çağında epidemilerle seyredebilen Koksaki (Picornaviridae) virüs enfeksiyonlarının orofasiyal patofizyolojisinde gözlenen durumlardan biri **değildir**?
Doğru Şık (C): Diş etlerinde patognomonik şiddetli marjinal eritem ve gingival kanama tablosu yapması
Açıklama: Koksaki virüsü Herpanjina ve El-Ayak-Ağız hastalığı gibi vezikülobüllöz formlar yaratır, ancak diş etinde patognomonik marjinal eritem ve gingival tutulum Koksaki enfeksiyonlarında gözlenmez. Diş eti iltihabıyla karakterize şiddetli vezikül tablosu Primer Herpetik Gingivostomatit'e (HSV-1) özgüdür. Koksaki virüs lezyonları anterior (sert damak/dil) veya posterior (yumuşak damak) lokalize olur, marjinal gingivayı şiddetle tutmaz.

**Soru 2 (ID: c034ba54-8bca-4dee-bb8c-7ca97b0ace60)**
Soru Kökü: Aşağıdaki viral enfeksiyon bulgularından hangisi, Koksaki virüs ailesine bağlı gelişen herpanjina veya el-ayak-ağız hastalığının klinik tablosuyla **bağdaşmaz**?
Doğru Şık (D): Trigeminal gangliyonda retrograt transport ile ömür boyu latent fazda kalması
Açıklama: Duyu gangliyonlarına (trigeminal gangliyon gibi) retrograt aksonal transport ile taşınarak ömür boyu latent fazda kalma özelliği Herpesviridae ailesine (HSV, VZV) ait bir mekanizmadır. Koksaki virüsler (Picornaviridae) akut, kendini sınırlayan litik enfeksiyonlar yapar ve nöral dokularda latent kalma (reaktivasyon) kaskadı barındırmazlar.

---

### ÇİFT 395 (Benzerlik: 0.69)

**Soru 1 (ID: 0085637f-0ccf-4427-804f-906cb46822fe)**
Soru Kökü: Gelişimsel, kalıtsal veya edinsel bir doku hiperplazisi sonucu dilin normal sınırların ötesinde büyümesi olarak tanımlanan makroglossinin epidemiyolojik olarak en sık karşılaşılan temel patofizyolojisi aşağıdakilerden hangisidir?
Doğru Şık (C): Vasküler malformasyonlar ve kas hipertrofisi
Açıklama: Konjenital ve herediter grupta makroglossinin en sık görülen temel hücresel nedeni endotelyal/lenfatik kanalların hamartomatöz proliferasyonu (vasküler malformasyonlar) ve kas dokusunun yapısal hipertrofisidir. Glikozaminoglikan birikimi (miksödem) kretenizme özgü spesifik ve metabolik bir nedendir, popülasyondaki en sık etiyoloji değildir. Vasküler boşlukların dil kas aralıklarını infiltre etmesi süngerimsi veya solid jeneralize bir organomegali ile sonuçlanır.

**Soru 2 (ID: ab8a2e9d-17cd-49fd-9ead-adaed51002d8)**
Soru Kökü: Aşağıdaki konjenital hastalıklardan hangisi spesifik olarak  glikozaminoglikanların parçalanmasını sağlayan enzimlerin doğuştan eksikliği sonucu ikincil bir makroglossi oluşturur?
Doğru Şık (E): Mukopolisakkaridozlar
Açıklama: Mukopolisakkaridozlar, glikozaminoglikanların parçalanmasını sağlayan enzimlerin doğuştan eksikliği sonucu hücre içinde atık materyal birikimiyle giden hastalıklardır ve bu makromoleküllerin dilde birikmesi sekonder makroglossi nedenidir. Kretenizm tiroid yetmezliğine bağlı miksödem kaynaklı, Duchenne ve Beckwith-Wiedemann direkt kas hipertrofisi kaynaklı büyümelerdir. Patolojik materyalin niteliği, makroglossinin yapısal büyüme mi yoksa infiltratif birikim mi olduğunu belirler.

---

### ÇİFT 396 (Benzerlik: 0.69)

**Soru 1 (ID: 398e7d64-5923-4fb6-978e-e3f2e35ce187)**
Soru Kökü: Gelişimsel olarak diş eksikliğine (hipodonti) ve fazlalığına (hiperdonti) neden olan çeşitli sistemik sendromlar bulunmaktadır. Aşağıdaki sendromlardan hangisinin diş eksikliği (hipodonti) ile karakterize bir klinik tablo oluşturması **beklenmez**?
Doğru Şık (C): Gardner sendromu
Açıklama: Crouzon, Down, Ehlers-Danlos ve İncontinentia pigmenti sendromları, gelişimsel anomali tablolarında hem hipodonti hem de hiperdonti etyolojisinde ortak olarak listelenen sendromlardır. Gardner sendromu ise sadece osteomlar, intestinal polipler ve hiperdonti (süpernümerer dişler/gömülü dişler) ile ilişkilidir, hipodonti spektrumunda yer almaz.

**Soru 2 (ID: c4598c3e-aea9-49bd-9c74-c9b250c7fcf3)**
Soru Kökü: On beş yaşındaki erkek hasta, çenelerinde çok sayıda eksik diş ve mevcut olan dişlerinin ise uçları sivri (konik) şekilde olması şikayetiyle başvuruyor. Klinik muayenede hastanın saçlarının seyrek ve ince telli olduğu, cildinin kuru olduğu izleniyor. Bu hastadaki dental anomalinin kaynağı olan sendrom aşağıdakilerden hangisidir?
Doğru Şık (A): Herediter ektodermal displazi
Açıklama: Herediter ektodermal displazi, deri, ter bezleri, saç ve diş gibi ektodermal kökenli yapıların gelişim kusuruyla karakterizedir; anodonti/hipodonti, konik dişler, hipotrikosiz (seyrek saç) ve anhidroz (terleyememe/kuru cilt) klasik bulgularıdır. Kleidokraniyal dizostoz hipodontiden ziyade çok sayıda gömülü süpernümerer (hiperdonti) diş ile karakterizedir. Ektodermal sendromlar dental gelişimde sayısal eksiklik ve form anomalisini eşzamanlı gösterir.

---

### ÇİFT 397 (Benzerlik: 0.69)

**Soru 1 (ID: 0085637f-0ccf-4427-804f-906cb46822fe)**
Soru Kökü: Gelişimsel, kalıtsal veya edinsel bir doku hiperplazisi sonucu dilin normal sınırların ötesinde büyümesi olarak tanımlanan makroglossinin epidemiyolojik olarak en sık karşılaşılan temel patofizyolojisi aşağıdakilerden hangisidir?
Doğru Şık (C): Vasküler malformasyonlar ve kas hipertrofisi
Açıklama: Konjenital ve herediter grupta makroglossinin en sık görülen temel hücresel nedeni endotelyal/lenfatik kanalların hamartomatöz proliferasyonu (vasküler malformasyonlar) ve kas dokusunun yapısal hipertrofisidir. Glikozaminoglikan birikimi (miksödem) kretenizme özgü spesifik ve metabolik bir nedendir, popülasyondaki en sık etiyoloji değildir. Vasküler boşlukların dil kas aralıklarını infiltre etmesi süngerimsi veya solid jeneralize bir organomegali ile sonuçlanır.

**Soru 2 (ID: 448548ec-e86e-455a-a058-746c476cfd13)**
Soru Kökü: Aşağıdakilerden hangisi makroglossi tablosuna neden olan konjenital ve herediter faktörler arasında **yer almaz**?
Doğru Şık (D): Akromegali
Açıklama: Akromegali, yetişkinlik döneminde büyüme hormonunun aşırı salgılanmasıyla ortaya çıkan edinsel (sonradan kazanılmış) bir makroglossi nedenidir. Kaynak metinde listelenen Beckwith-Wiedemann sendromu, multipl endokrin neoplazi tip 2B, Duchenne muskuler distrofi ve kretenizm konjenital/herediter kategoridedir. Sınav komisyonu, konjenital ve edinsel etyolojilerin kategorik ayrımını temel bir patoloji nosyonu olarak sıklıkla test eder.

---

### ÇİFT 398 (Benzerlik: 0.69)

**Soru 1 (ID: 92e0f19a-46ec-4eea-b4df-50e712053e02)**
Soru Kökü: Çocukluk çağı enantemlerinin ayırıcı tanısında lezyonların klinik karakteristiği yol göstericidir. Bukkal mukozadaki izlenen lezyonlardan şüphelenilen bir hastada, tanının Kızamık yerine Kızıl olarak kesinleştirilmesini sağlayan spesifik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Bukkal maküller yerine dilde hiperemik papillaların uzamasıyla oluşan çilek/ahududu görünümü
Açıklama: Kızamıkta virüs epiteli hedef alarak Stensen kanalı komşuluğunda ortası beyaz spesifik Koplik maküllerini (enantem) oluşturur. Ancak Kızıl hastalığında bukkal mukoza yerine dildeki hiperemik papillaların aşırı uzamasıyla meydana gelen patognomonik 'çilek / ahududu dil' görünümü ortaya çıkar. İki majör pediatrik enfeksiyöz enantem, dilin papiller hipertrofisi ile bukkal mukozanın fokal makülleri arasındaki anatomik ayrım üzerinden kesinleştirilir.

**Soru 2 (ID: 53b591b3-ae83-4f0f-8605-93216d4f3fe6)**
Soru Kökü: Klinikte yüksek ateş şikayetiyle getirilen bir çocuk hastada, oral mukozada saptanan Koplik lekelerinin, ayırıcı tanıda klinisyene sağladığı en büyük avantaj ve klinik değer aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik deri döküntülerinden (raş) önce ortaya çıkarak hastalığın en erken patognomonik tanı kriterini oluşturması
Açıklama: Kızamık viremisinin erken fazında, epitel hücresel inflamasyon (Koplik lekeleri) deri döküntüsü henüz başlamadan kronolojik olarak önce belirir. Bu durum hekime diğer tüm viral döküntülü hastalıkları (çiçek, rubella vs.) daha raş başlamadan ekarte etme ve tanıyı direkt kızamığa kilitleme avantajı sağlar.

---

### ÇİFT 399 (Benzerlik: 0.69)

**Soru 1 (ID: 71b04d8e-d59f-41dd-b8e7-8c979a0b3350)**
Soru Kökü: Endodontik kökenli enfeksiyonların periapikal dokulardan alveoler kemik ve mukozaya doğru ilerleyerek perforasyon oluşturduğu durumlarda, sinüs traktının (fistülün) ağız ortamına açıldığı noktada gelişen lokalize granülasyon dokusuna ne ad verilir?
Doğru Şık (B): Parulis
Açıklama: Parulis (gumboil), periapikal apsenin veya enfeksiyonun kemiği perfore ederek mukozadan ağız boşluğuna fistülize olduğu (drene olduğu) açılış noktasında savunma mekanizması olarak gelişen lokalize, ekzofitik granülasyon dokusudur. Epulis fissuratum hareketli protezlerin vuruk yaptığı kenarlarda oluşan mukozal fibröz hiperplazi iken; piyojenik granülom, lokal tahrişlere karşı gelişen ve altındaki dokuyla fistül ilişkisi bulunmayan tamamen reaktif vasküler bir yanıttır. Enfeksiyon kaynağının ortadan kaldırılmasıyla parulis de hızlıca geriler.

**Soru 2 (ID: db53f825-4431-406b-b80a-14170d3fb9f4)**
Soru Kökü: Klinik muayenede alveolar mukoza üzerinde sarımsı-kırmızı renkli, fokal bir yumuşak doku kabarıklığı gözlenen hastanın radyografisinde ilişkili dişte apikal radyolüsensi saptanmıştır. Patolojik terminolojide 'Parulis' (Gumboil) olarak adlandırılan bu lezyonun doku karşılığı aşağıdakilerden hangisidir?
Doğru Şık (E): Perfore olan apikal sinüsün açılma yerindeki granülasyon dokusu
Açıklama: Parulis, bir periapikal apsenin alveolar kemiği erode edip (fistülize olup) mukoza yüzeyine açıldığı bölgede, kronik drenaja reaksiyon olarak gelişen fokal granülasyon dokusu nodülüdür. En güçlü çeldirici olan kistik formasyon epitel kökenlidir ve kemik içinde (periapikal) gelişir, mukoza yüzeyindeki bu yumuşak reaktif büyüme değildir. Bu lezyon enfeksiyon kaynağı kurutulduğunda spontan olarak fibrozise gider veya iyileşir.

---

### ÇİFT 400 (Benzerlik: 0.69)

**Soru 1 (ID: f4dcdea9-451b-4bb8-8d48-4a1ee7fa375e)**
Soru Kökü: Lenfadenopati, iştahsızlık, ateş, bulantı ve dişetinde ağrılı veziküler şişliklerle prezente olan primer herpetik gingivostomatit tablosunun en sık görüldüğü spesifik yaş grubu aşağıdakilerden hangisidir?
Doğru Şık (C): 6 ay - 5 yaş arası
Açıklama: Herpes simpleks virüs tip 1'in vücuda ilk girişiyle oluşan primer herpetik gingivostomatit, maternal antikorların koruyuculuğunun azalmaya başladığı 6 ay ile 5 yaş arasındaki çocuklarda klasik olarak en yüksek insidansa sahiptir. Yenidoğan döneminde gelişen enfeksiyonlar daha çok anneden intrapartum yolla geçen HSV-2 kaynaklı olma eğilimindedir ve tablodan ziyade yaygın sistemik hastalık yaparlar. Virüs bu primer enfeksiyondan sonra ganglionlara yerleşerek latent fazda bekler ve ilerleyen yaşlarda sekonder nükslere yol açar.

**Soru 2 (ID: 5864de05-d43e-4331-81a2-9426fb9d71b1)**
Soru Kökü: Üç yaşında bir çocuk yüksek ateş, huzursuzluk, lenfadenopati ve beslenme reddi şikayetleriyle kliniğe başvuruyor. Yapılan intraoral muayenede, sadece posterior farinkste değil, tüm ağız mukozasına yayılmış eritem ve bilhassa diş etlerinde marjinal şişlik ile karakterize rüptüre veziküller tespit ediliyor. Bu vakadaki etiyolojik majör enfeksiyöz ajan aşağıdakilerden hangisidir?
Doğru Şık (D): DNA virüsü olan Herpes Simpleks Virüsü-1
Açıklama: 6 ay ile 5 yaş arası çocuklarda yüksek ateş, sistemik inflamasyon ve tüm oral kaviteyle beraber bilhassa diş etlerinde (gingiva) şiddetli kızarıklık, şişlik ve veziküller ile seyreden patoloji Primer Herpetik Gingivostomatittir. Bu tablonun etkeni Herpes Simpleks Virüsü-1'dir (HSV-1). Eğer lezyon diş etini tutmadan sadece yumuşak damak ve tonsillere lokalize kalsaydı, Koksaki virüs kaynaklı Herpanjina düşünülmeliydi.

---

### ÇİFT 401 (Benzerlik: 0.69)

**Soru 1 (ID: 6a7f3fd8-6ac9-46a7-b7ba-54b97ee62534)**
Soru Kökü: Sistemik tetkikleri yapılan bir hastada dilin yüzey epitelindeki papillaların düzleştiği ve ağrılı, yoğun kırmızı bir glossit tablosunun varlığı saptanmıştır. Oral mukozadaki bu atrofik lezyonlara sıklıkla etiyolojik zemin hazırlayan spesifik vitamin eksikliği aşağıdakilerden hangisi ile doğrudan karakterizedir?
Doğru Şık (A): Pernisiyöz anemi
Açıklama: Glossit tablosu, dilin epiteliyal döngüsünün bozulmasına bağlı olarak sıklıkla B12 vitamini emilim defekti kaynaklı Pernisiyöz anemi gibi beslenme eksikliklerinde görülür. Orak hücreli anemi ve talasemi genetik hemoglobin defektleri olup direkt mukozal atrofi üretmezken, lösemi daha çok diş eti büyümesi ve ülserasyonlarla seyreder. Demir veya B vitamini eksikliği, hücre yenilenme hızının yüksek olduğu oral mukozayı spesifik olarak etkileyerek papilla silinmesi (düzleşme) yaratır.

**Soru 2 (ID: 84bcce99-4f18-40aa-9516-d4e344e79688)**
Soru Kökü: Pernisiyöz anemiye sekonder gelişen ağrılı atrofik glossit tablosunda, esansiyel nutrient eksikliğini başlatan birincil immünolojik reaksiyon tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Paryetal hücre otoantikorlarına bağlı Tip 2 aşırı duyarlılık
Açıklama: Pernisiyöz aneminin etiyopatogenezinde mide paryetal hücrelerine ve intrinsik faktöre karşı gelişen otoantikorlar (Tip 2 aşırı duyarlılık reaksiyonu) yer alır; bu durum B12 emilimini bloke ederek glossit kaskadını başlatır. Tip 4 reaksiyon kontakt dermatit veya liken planusta izlenirken, Tip 1 alerjik yanıtlar içindir. Hedef hücre spesifik antikor yıkımı Tip 2 mekanizmasının klasik örneğidir.

---

### ÇİFT 402 (Benzerlik: 0.69)

**Soru 1 (ID: 4dc90ab7-3a6a-4981-96f5-855a18e7f533)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt çenesinde dişe ait belirgin şişlik nedeniyle başvuruyor. Mandibular birinci molar dişi vital tespit ediliyor. Radyolojik muayenede ilgili vital dişin kök ucuna sıkıca kaynaşmış, düzgün bir radyolüsen hat (halo) ile kemikten sınırlandırılmış radyoopak bir kitle bulunuyor. Teşhis ve tedavi amacıyla diş kitle ile birlikte çekiliyor. Lezyonun en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Sementoblastom
Açıklama: Sementoblastom, sement üreten gerçek bir benign neoplazidir ve patognomonik olarak daima kök ucuna ankiloz (kaynaşık) şekilde izlenir. Periapikal semental displazide ise kök ucunda sınırları daha belirsiz reaktif lezyonlar vardır ve halo işareti bu kadar belirgin değildir. Ayrıca dişe vitalite veren radyografik ve semptomatik tablosuyla sementoblastomda dişin kitle ile beraber cerrahi yolla ortamdan uzaklaştırılması gerekir.

**Soru 2 (ID: 907b6d04-736f-4331-994e-25506b303f03)**
Soru Kökü: Mandibula premolar bölgesinde asemptomatik şişlik saptanan 35 yaşındaki kadın hastanın radyografisinde; etrafı net sınırlı radyolüsen bir rim ile çevrili radyoopak kitle izlenmiştir. Cerrahide bu lezyonun sağlıklı kemik korteksini incelttiği ancak çevre kortikal kemikle kaynaşmadığı (kolaylıkla ayrıldığı) saptanmıştır. Bu cerrahi diseksiyon özelliği lezyonu aşağıdakilerden hangisinden ayırmada **en kritiktir**?
Doğru Şık (C): Fibröz displazi
Açıklama: Semento-ossifiye fibrom, iyi sınırlı ve kapsüllü olduğu için çevre kemikten kolayca ayrılır (enkapsüle diseksiyon). Fibröz displazi ise kapsülsüzdür, çevre normal kemik korteksi ile giderek iç içe geçer (füzyon yapar) ve sağlam kemikten ayırmak zordur. Bu morfolojik sınır özelliği, fibro-osseöz lezyonların ayırıcı tanısında kilit rol oynar.

---

### ÇİFT 403 (Benzerlik: 0.69)

**Soru 1 (ID: 8783f290-e057-41cc-9d75-8a5515975508)**
Soru Kökü: 28 yaşında kadın hasta, dilinde zaman zaman yer değiştiren kırmızı lekeler ve hafif hassasiyet şikayetiyle başvuruyor. İntraoral muayenede, dil dorsumunda filiform papillaların fokal olarak kaybedildiği, sınırları belirgin ve etrafı sarı-beyaz hiperkeratotik bir doku halkası ile çevrili atrofik alanlar izleniyor. Hastanın dermatolojik anamnezinde psöriazis öyküsü mevcuttur. Bu hastadaki oral lezyona vakaların üçte birinde patognomonik olarak eşlik eden diğer dil anomalisi aşağıdakilerden hangisidir?
Doğru Şık (E): Fissürlü dil
Açıklama: Eritema migrans (coğrafik dil) sınırları sürekli yer değiştiren (gezici) ve sarı-beyaz hiperkeratotik halkalarla çevrili papilla kaybı alanlarıdır ve olguların üçte birinde doğrudan fissürlü dil anomalisi tabloya eşlik eder. Tüylü dil papillaların uzaması ile karakterize farklı bir dejeneratif patolojidir ve coğrafik dil kliniğiyle direkt sendromik bağı yoktur. Ayrıca psöriazis, atopi ve Reiter sendromu coğrafik dilde teşhisi doğrulayan kritik sistemik belirteçlerdir.

**Soru 2 (ID: 91a0626f-b234-4b60-99b3-cc8340ef6d67)**
Soru Kökü: Eritema migrans (coğrafik dil), dil dorsumunda lokalize papilla atrofisi ve gezici hiperkeratotik sınırlarla karakterize inflamatuar bir patolojidir. Bu lezyon, aşağıdaki sistemik hastalıklardan hangisi ile **birliktelik göstermez**?
Doğru Şık (D): Sistemik skleroz (Skleroderma)
Açıklama: Eritema migrans (coğrafik dil) güçlü bir şekilde Psoriazis, Reiter sendromu (reaktif artrit), atopi ve seboreik dermatit gibi immün-reaktif hastalıklarla eş zamanlı görülme eğilimindedir. Skleroderma (Sistemik skleroz) ise coğrafik dil yapmaz; aksine masif kollajen birikimiyle mikrostomi (trismus), lingual fibrozis ve PDL genişlemesi ile karakterizedir.

---

### ÇİFT 404 (Benzerlik: 0.69)

**Soru 1 (ID: a930c7e6-35a8-49fd-bb56-5aee2727553f)**
Soru Kökü: Periodontal dokuların en yaygın inflamatuar hastalıkları olan gingivitis ve periodontitisin klinik gelişiminde kilit rol oynayan mikrobiyal dental plak ile ilgili aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (D): Doku yıkımı yaratabilmesi için hastada sigara, diyabet veya immünsüpresyon bulunması şarttır.
Açıklama: Mikrobiyal dental plak, dişe yapışık bakteriden zengin mikrobiyal bir biyofilmdir ve tek başına inflamatuar süreci (gingivitis) başlatıp, uzun vadede doku yıkımına (periodontitis) neden olmak için tamamen yeterlidir. Hastada diyabet, yaşlılık veya sigara gibi sistemik ek risk faktörlerinin varlığı şart değildir; bunlar mevcut hastalığın şiddetini, doku direncini ve ilerleme hızını dramatik şekilde kötüleştiren sekonder faktörlerdir. Plak zamanla kalsifiye olarak diş taşına dönüşür ve inflamasyonu daha derin dokulara taşır.

**Soru 2 (ID: 8809be7d-321e-42f7-ad43-99e242a01e1c)**
Soru Kökü: Gingivitis ile periodontitis arasındaki klinik ve patolojik geçiş aşamasında, aşağıdakilerden hangisinin saptanması tablonun artık bir gingivitis olmadığını ve periodontitise ilerlediğini **kesin olarak** gösterir?
Doğru Şık (E): Semento-alveolar bağlantı liflerinin yıkımı ile karakterize ataşman kaybı
Açıklama: Gingivitis yalnızca diş etini (gingiva) ilgilendiren, periodontal ligament (semento-alveolar lifler) ve alveoler kemik tutulumu olmayan lokalize bir inflamasyondur. İnflamasyon derinleşerek semento-alveolar bağlantı liflerinin yıkılmasına, epitelin apikale doğru göç ederek ataşman kaybına ve periodontal cep oluşumuna yol açtığında klinik tablo artık periodontitis olarak adlandırılır. Kanama, ödem, eritem ve dokuda mononükleer hücre infiltrasyonu tablonun erken evresi olan kronik gingivitiste de tipik olarak görülebilir.

---

### ÇİFT 405 (Benzerlik: 0.69)

**Soru 1 (ID: 5864de05-d43e-4331-81a2-9426fb9d71b1)**
Soru Kökü: Üç yaşında bir çocuk yüksek ateş, huzursuzluk, lenfadenopati ve beslenme reddi şikayetleriyle kliniğe başvuruyor. Yapılan intraoral muayenede, sadece posterior farinkste değil, tüm ağız mukozasına yayılmış eritem ve bilhassa diş etlerinde marjinal şişlik ile karakterize rüptüre veziküller tespit ediliyor. Bu vakadaki etiyolojik majör enfeksiyöz ajan aşağıdakilerden hangisidir?
Doğru Şık (D): DNA virüsü olan Herpes Simpleks Virüsü-1
Açıklama: 6 ay ile 5 yaş arası çocuklarda yüksek ateş, sistemik inflamasyon ve tüm oral kaviteyle beraber bilhassa diş etlerinde (gingiva) şiddetli kızarıklık, şişlik ve veziküller ile seyreden patoloji Primer Herpetik Gingivostomatittir. Bu tablonun etkeni Herpes Simpleks Virüsü-1'dir (HSV-1). Eğer lezyon diş etini tutmadan sadece yumuşak damak ve tonsillere lokalize kalsaydı, Koksaki virüs kaynaklı Herpanjina düşünülmeliydi.

**Soru 2 (ID: cf174e38-4633-4dd1-9643-b4e04ea0e9e8)**
Soru Kökü: Beş yaşında erkek hasta, kreşte başlayan yüksek ateş ve yutkunma güçlüğü şikayetiyle kliniğe getiriliyor. Yapılan muayenede sert damak ve dil mukozasında ağrılı, eritematöz halolu ülserasyonlar; ayrıca ayak tabanlarında çok sayıda sıvı dolu vezikül saptanıyor. 
Bu hastada klinik ayırıcı tanıda rekürren aftöz stomatiti kesin olarak ekarte eden majör bulgu zinciri aşağıdakilerden hangisidir?
Doğru Şık (D): Hastada ekstremite döküntüsünün (ayak tabanı) tabloya eşlik etmesi ve lezyonların veziküler faz içermesi
Açıklama: Klinik takdim El-Ayak-Ağız Hastalığını işaret etmektedir. Aftöz stomatit sadece intraoral (hareketli mukozada) vezikül fazı olmayan ülserler yapar ve ekstremitelerde döküntü oluşturmaz. Hastanın ayak tabanında vezikül saptanması, aftı tamamen kurgu dışı bırakarak tanıyı viral etyolojiye sabitler.

---

### ÇİFT 406 (Benzerlik: 0.69)

**Soru 1 (ID: 447fe8de-817d-4929-957b-1fb16f596453)**
Soru Kökü: On iki yaşındaki erkek hastanın ağız içi muayenesinde çok sayıda papiller projeksiyon izlenmektedir. Biyopsi sonucunda akantoz, parakeratoz ve koilositler tespit edilmiştir. Malignite riski bulunmadığı bilinen bu klinik tablo ile spesifik olarak ilişkili etken aşağıdakilerden hangisidir?
Doğru Şık (B): HPV 13
Açıklama: Çocukluk ve adölesan dönemde sık izlenen, ağız içinde multipl papiller yapılar oluşturan ve malign potansiyeli olmayan lezyon Fokal Epitelyal Hiperplazi (Heck Hastalığı) tablosudur. Bu hastalığın patogenezinde spesifik olarak HPV 13 ve 32 tipleri rol oynar. HPV 6 ve 11 daha çok papillom ve kondiloma akuminatum etiyolojisinde yer alır.

**Soru 2 (ID: c7888fdc-7137-4a4c-ae75-6d0df5690954)**
Soru Kökü: Oral bölge viral enfeksiyonlarına bağlı hiperplaziler incelendiğinde, fokal epitel hiperplazisi (Heck hastalığı) kliniği ile klasik ve spesifik olarak ilişkili bulunan HPV tipleri aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (A): HPV 13 ve 32
Açıklama: Heck hastalığı (fokal epitelyal hiperplazi), çok sayıda papiller benzeri mukoza kabarıklarıyla seyreden ve hücrelerde koilositotik değişikliklerin izlendiği benign bir mukozal reaksiyondur. Bu hastalık için etiyolojide spesifikleşmiş HPV alt tipleri 13 ve 32'dir; anogenital ve deri kaynaklı diğer HPV suşları bu tablonun temel nedeni değildir.

---

### ÇİFT 407 (Benzerlik: 0.69)

**Soru 1 (ID: 7c7bb035-0300-40b8-a191-fbfa4e743f9e)**
Soru Kökü: Ağız mukozası ve dudakta yerleşim gösteren, asemptomatik sarı-beyaz papüller şeklinde izlenen ektopik sebaseöz bez yapılarının klinik adı aşağıdakilerden hangisidir?
Doğru Şık (D): Fordyce granülleri
Açıklama: Fordyce granülleri, normalde deride kıldibi aparatında bulunması gereken yağ (sebase) bezlerinin, dudak ve ağız mukozasına ektopik olarak yerleşmesiyle ortaya çıkan sarımsı fizyolojik varyantlardır. Epstein incileri damak orta hattında fetal epitel artıklarından gelişen konjenital kistlerdir. Fordyce granülleri için genellikle herhangi bir patolojik işlem (biyopsi vb.) gerekmez.

**Soru 2 (ID: 48123417-1c07-4838-a40c-dbe381f2a62b)**
Soru Kökü: Sert ve yumuşak damak sınırında, anatomik olarak lateral kesimlerde yerleşen, ektopik minör damak tükürük bezleri epitelinin kistleşmesi sonucu oluşan içi keratin dolu gelişimsel pediatrik lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Bohn nodülleri
Açıklama: Bohn nodülleri, inklüzyon kökenli olmayan, spesifik olarak minör tükürük bezi epitel artıklarından gelişen ve damak lateralinde yer alan pediatrik kistlerdir. Epstein incileri orta hatta embriyolojik füzyon hattında yer alan inklüzyon kistleriyken; yenidoğan gingival kisti dental lamina (Serre) artığından gelişerek alveol kretinde izlenir.

---

### ÇİFT 408 (Benzerlik: 0.69)

**Soru 1 (ID: 7add3bf1-b879-4c1d-b90d-ceb7e2cc5847)**
Soru Kökü: Premalign oral lezyonların karsinom geliştirme potansiyellerine dayalı yıldızlama sistemi incelendiğinde, aşağıdaki lezyonlardan hangisinin malignite riski diğerlerine göre **daha düşük** düzeydedir?
Doğru Şık (D): Pürüzsüz kalın lökoplaki
Açıklama: Lezyonların karsinom potansiyelleri incelendiğinde; ters sigara içiciliği (5 yıldız), submüköz fibrozis (5 yıldız), eritrolökoplaki ve granüler lökoplaki (4 yıldız) yüksek risk gruplarını oluştururken, pürüzsüz kalın lökoplaki nispeten daha düşük (2 yıldız) bir risk skoruna sahiptir. Morfolojideki pürüzsüzlük genellikle displazi derecesinin düşüklüğüne işaret eder.

**Soru 2 (ID: e48ce453-b11a-4d0e-81d8-7aeb2fc949fd)**
Soru Kökü: Oral kavitede izlenen beyaz lezyonların skuamöz hücreli karsinoma dönüşüm riskleri etiyolojilerine ve barındırdıkları hücresel displaziye göre değişkenlik gösterir. Buna göre, aşağıdaki oral lezyonların hangisinde malignite (kanserleşme) potansiyeli **bulunmaz**?
Doğru Şık (E): Beyaz sünger nevüs
Açıklama: Beyaz sünger nevüs, otozomal dominant kalıtılan spesifik bir genetik mutasyon (Keratin 4/13 defekti) olup epitelde neoplastik atipi veya displastik klon barındırmaz; bu nedenle karsinom riski kesinlikle yoktur. Aktinik keratoz, oral submüköz fibrozis, sifilitik lökoplaki ve ters sigara içiciliği ise yüksek displastik aktiviteye sahip majör premalign karsinom öncülleridir.

---

### ÇİFT 409 (Benzerlik: 0.69)

**Soru 1 (ID: 2699d552-5f1b-4fdc-8bc5-7603f0c679e4)**
Soru Kökü: Melkersson-Rozental sendromunun klasik triadında yer alan periferik tip fasiyal paralizinin patofizyolojik gelişim mekanizması aşağıdakilerden hangisinde doğru sıralanmıştır?
Doğru Şık (B): Fokal granülomatöz infiltrasyon -> Artmış interstisyel ödem -> Epineural bası -> Aksoplazmik akış bloku
Açıklama: Melkersson-Rozental sendromunda izlenen yüz felci, Bell paralizisi gibi idiyopatik veya viral değil, mekanik ve infiltratif bir süreçtir. 7. kraniyal sinirin (Nervus facialis) fokal granülomatöz infiltrasyona ve artmış lenfostatik ödeme bağlı olarak epineural bası altında kalması, sinir içi aksoplazmik akışı bloke ederek tek taraflı ve tekrarlayıcı periferik paralizi ataklarını tetikler.

**Soru 2 (ID: 8a19d3b6-2606-405e-8bf4-79246b99961a)**
Soru Kökü: Dudak ve yanak mukozasında ani gelişen şişlik şikayetiyle başvuran iki farklı hastadan birinde idiyopatik Bell paralizisi, diğerinde ise Melkersson-Rozental sendromu teşhis edilmiştir. Bu iki hastanın klinik prezentasyonunda izlenen nörolojik yüz felci (fasiyal paralizi) tablosunu birbirinden ayıran temel farklılık aşağıdakilerden hangisidir?
Doğru Şık (C): Bell paralizisi izole ve idiyopatik seyrederken, Melkersson-Rozental'de yüz felcine mutlaka otonom granülomatöz doku ödeminin eşlik etmesi
Açıklama: Her iki patolojide de 7. kraniyal sinir (Nervus facialis) tutulur ve periferik yüz felci görülür. Ancak Bell paralizisi sıklıkla izole, etiyolojisi tam aydınlatılamamış (veya viral zeminli) tekil bir olaydır. Melkersson-Rozental sendromunda ise yüz felci asla izole değildir; sendromun bir parçası olarak granülomatöz infiltrasyona sekonder (ödeme bağlı mekanik bası) gelişir ve kliniğe dudak şişliği eşlik eder.

---

### ÇİFT 410 (Benzerlik: 0.69)

**Soru 1 (ID: db35b64d-fd77-4b6d-8259-03dd72807bc6)**
Soru Kökü: Lokal agresif seyirli epiteliyal bir odontojenik tümör olan Dentinojenik Hayalet Hücreli Tümör ile ilgili aşağıdaki ifadelerden hangisi **değildir**?
Doğru Şık (E): Sadece maksilla anterior bölgeye spesifik bir yerleşimi vardır
Açıklama: Dentinojenik hayalet hücreli tümör her iki çenede (maksilla ve mandibula) hemen hemen eşit sıklıkta görülür ve yerleşim bölgesi olarak sıklıkla arka bölgeleri (posterior) tercih eder. Sadece maksilla anteriora spesifik olması yanlıştır; bu durum daha çok Adenomatoid Odontojenik Tümör için belirgindir. Tümör, odontojenik epitel proliferasyonunun merkezinde keratinize olmuş nükleussuz 'hayalet' hücreler ile karakterizedir.

**Soru 2 (ID: 9b2ffab1-2dd1-4295-8dbe-5ee0d6d4d955)**
Soru Kökü: Otuz beş yaşında erkek hastanın mandibula molar bölgesinden çıkarılan gömülü dişle ilişkili lezyonunda, ameloblastom benzeri epitel içinde nükleusunu kaybetmiş 'hayalet (ghost) hücreler', etrafında distrofik kalsifikasyonlar ve dentinoid matriks birikimi izlenmektedir. Lezyon makroskobik olarak solid, kütlesel formdadır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Dentinojenik hayalet hücreli tümör
Açıklama: Odontojenik epitelde nükleusu silinmiş eozinofilik hayalet hücreler ve dentinoid üretimi Kalsifiye Odontojenik Kist'in (Gorlin kisti) karakteristik özelliğidir. Ancak bu patoloji lümeni olan bir kist değil de solid bağ dokusu tabanlı bir kitle/tümör şeklinde organize olduğunda buna spesifik olarak 'Dentinojenik hayalet hücreli tümör' adı verilir.

---

### ÇİFT 411 (Benzerlik: 0.69)

**Soru 1 (ID: 112204b7-a389-4bf0-9429-7da3a7f77544)**
Soru Kökü: Sekiz yaşındaki hastanın yanak mukozasında yaygın kalın beyaz plaklar saptanıyor. Göz hekimi konsültasyonunda, hastanın korneal limbus bölgesinde konjonktival plakların varlığı tespit ediliyor. Histolojik incelemesinde hiperplazi ve diskeratotik hücreler izlenen, kendini sınırlayan bu otozomal dominant patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Herediter benign intraepitelyal diskeratozis (Witkop Sendromu)
Açıklama: Witkop-Von Sallmann Sendromu (Herediter benign intraepitelyal diskeratoz), ektodermal kökenli hücrelerdeki defekte bağlı olarak patognomonik şekilde eşzamanlı oral beyaz lezyonlar ve gözde (korneal limbusta) konjonktival plaklarla seyreden kalıtsal bir sendromdur. Darier hastalığı seboreik deriyi tutarken oküler bulgu vermez; Beyaz Sünger Nevüs ise sadece oral mukoza ile sınırlıdır.

**Soru 2 (ID: 21204b82-757d-4b83-8b53-099cff0b7db4)**
Soru Kökü: Witkop hastalığı (Herediter Benign İntraepitelyal Diskeratozis) ile ilgili aşağıdakilerden hangisi doğrudur?
Doğru Şık (B): Hayatın ilk yıllarında bukkal konjonktivit ve oral beyaz plaklarla karakterizedir
Açıklama: Witkop hastalığı otozomal dominant kalıtılan, hayatın ilk yıllarında bukkal konjonktivit ve korneal limbusta plaklarla beraber oral beyaz lezyonlar ile karakterize bir sendromdur. Tedavi gerektirmeyen, kendini sınırlayan bir yapıdadır ve malignite potansiyeli yoktur. Mikroskobik olarak atrofi değil, hiperplazi, akantoz ve ödem görülür.

---

### ÇİFT 412 (Benzerlik: 0.69)

**Soru 1 (ID: 8ea8ccf8-fc70-4ef0-9d57-868976d6727f)**
Soru Kökü: Proliferatif verrüköz lökoplaki (PVL) ile klasik oral lökoplaki tiplerinin klinik seyirleri karşılaştırıldığında, PVL hastalığının etiyopatogenezi için aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sigara kullanımı ile lezyonun ortaya çıkması arasında etiyolojik ilişki çok güçlüdür.
Açıklama: Proliferatif verrüköz lökoplakiyi (PVL) geleneksel skuamöz prekürsörlerden ayıran en keskin epidemiyolojik fark, tütün veya sigara ile ilişkisinin minimal olmasıdır. Genellikle iyi ağız bakımına sahip ve hayatında hiç sigara içmemiş yaşlı kadınlarda multisentrik papillomatöz lezyonlar halinde başlar ve kaçınılmaz kanser progresyonu gösterir.

**Soru 2 (ID: 7b05db9c-8cde-4fee-9e1f-5cce6d9635c7)**
Soru Kökü: Baş boyun bölgesi maligniteleri arasında spesifik davranış paternine sahip olan verrüköz karsinom ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Sıklıkla genç yetişkin kadın hastalarda agresif ilerleme gösterir.
Açıklama: Verrüköz karsinom, genç kadınlarda değil, tipik olarak 60 yaş üstü ve genellikle uzun süreli tütün emme alışkanlığı olan erkeklerde izlenen, çok yavaş seyirli, düşük metastatik potansiyele sahip bir kanserdir. Alveolar kret ve yanak mukozasında beyaz, karnabahar benzeri ekzofitik büyüme yapar. Prognozu mükemmele yakın olup cerrahi yeterlidir, agresif seyir en az beklenen özelliğidir.

---

### ÇİFT 413 (Benzerlik: 0.69)

**Soru 1 (ID: f548c30d-fad1-484d-aa89-ca4307aad28b)**
Soru Kökü: Çocukluk çağında başlayan, mandibulada tipik olarak simetrik posterior genişleme yaparak yüze 'aydede' veya 'melek' görünümü veren (cherubism), otosomal dominant kalıtılan gelişimsel kemik hastalığına yol açan genetik mutasyon aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): SH3BP2 geni
Açıklama: Cherubism, çenelerde ilerleyici kemik rezorpsiyonu ve yerine multiloküler fibröz doku ve dev hücrelerin geçmesiyle karakterize edilen otozomal dominant bir hastalıktır ve SH3BP2 genindeki mutasyonlarla ilişkilidir. PTCH geni Gorlin sendromunda, BRAF gen mutasyonu konvansiyonel ameloblastomda, PLAG1 overekspresyonu pleomorfik adenomda rol oynar. Bu spesifik sendrom, bilateral doğası ile osteofibröz lezyonlardan ayrılır.

**Soru 2 (ID: 38221896-8e76-4a0c-983f-90396a0f78ea)**
Soru Kökü: Çok sayıda odontojenik keratokist, palmar çukurlar ve geniş baş çevresi ile karakterize, kromozom 9q22.3-q31 lokalizasyonundaki tümör süpresör gen mutasyonuna bağlı sonic-hedgehog sinyal yolağının hatalı çalışmasıyla ortaya çıkan sendromda mutasyona uğrayan gen aşağıdakilerden hangisidir?
Doğru Şık (B): PTCH
Açıklama: Gorlin (Nevoid bazal hücreli karsinom) sendromu, sonic-hedgehog yolağını baskılayan PTCH genindeki inaktive edici mutasyonlar sonucu gelişen ve multipl bazal hücreli karsinom ile odontojenik keratokistlerin eşlik ettiği otozomal dominant bir tablodur. SH3BP2 mutasyonu cherubizmde, FGFR2 mutasyonu Crouzon sendromunda izlenir. Bu hastalarda erken yaşta tespit edilen keratokistler sendromun ilk klinik belirteci olabilir.

---

### ÇİFT 414 (Benzerlik: 0.69)

**Soru 1 (ID: c25be7e0-f018-495c-a201-b7d46e42eeb8)**
Soru Kökü: On sekiz yaşındaki erkek hastanın radyolojik muayenesinde sağ alt molar dişler bölgesinde sürmeyi engellemiş radyoopak bir kitle saptanmıştır. Materyalin histopatolojisinde mine, dentin ve sementin normal diş morfolojisi almadan, tamamen gelişigüzel ve düzensiz konglomere bir kitle oluşturduğu izlenmiştir. Bu hamartomatöz lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Kompleks odontom
Açıklama: Odontomlar mine ve dentin içeren hamartomlardır. Diş dokularının rudimenter (küçük dişcik) yapıları şeklinde nispeten organize olduğu tipe kompound (bileşik), dokuların organize olamayıp gelişigüzel devasa konglomere bir kitle oluşturduğu tipe ise kompleks odontom adı verilir.

**Soru 2 (ID: e746f139-8901-4804-98bb-8e0f56e358c4)**
Soru Kökü: Birinci dekatta (çocuk yaşta) posterior mandibulada izlenen; miksoid yapıda, gelişmekte olan diş papillası-benzeri doku kütlesinden oluşan ve bu miksoid stroma topağının çevresini tamamen dıştan saran kolumnar veya küboidal yapıdaki mine epiteli tabakası ile karakterize odontojenik neoplazi aşağıdakilerden hangisidir?
Doğru Şık (A): Primordiyal odontojenik tümör
Açıklama: Primordiyal odontojenik tümör, 1. ve 2. dekatta sık görülen ve histopatolojik olarak primitif 'diş papillası' benzeri miksoid mezenkimal bir bağ dokusu kütlesi ile bu kütlenin sadece yüzeyini sarmalayan, içine adalar halinde penetre olmayan dış kolumnar/kübik mine epiteli kılıfından oluşan özgün bir tablodur. Ameloblastik fibromda ise epitel bu stroma içine kordonlar ve adalar şeklinde gömülüdür (bilaminar zincirler); yüzeyel tek tabaka sınırlaması primordiyal tümörün imzasıdır.

---

### ÇİFT 415 (Benzerlik: 0.69)

**Soru 1 (ID: 71b04d8e-d59f-41dd-b8e7-8c979a0b3350)**
Soru Kökü: Endodontik kökenli enfeksiyonların periapikal dokulardan alveoler kemik ve mukozaya doğru ilerleyerek perforasyon oluşturduğu durumlarda, sinüs traktının (fistülün) ağız ortamına açıldığı noktada gelişen lokalize granülasyon dokusuna ne ad verilir?
Doğru Şık (B): Parulis
Açıklama: Parulis (gumboil), periapikal apsenin veya enfeksiyonun kemiği perfore ederek mukozadan ağız boşluğuna fistülize olduğu (drene olduğu) açılış noktasında savunma mekanizması olarak gelişen lokalize, ekzofitik granülasyon dokusudur. Epulis fissuratum hareketli protezlerin vuruk yaptığı kenarlarda oluşan mukozal fibröz hiperplazi iken; piyojenik granülom, lokal tahrişlere karşı gelişen ve altındaki dokuyla fistül ilişkisi bulunmayan tamamen reaktif vasküler bir yanıttır. Enfeksiyon kaynağının ortadan kaldırılmasıyla parulis de hızlıca geriler.

**Soru 2 (ID: 1134a9fc-52cc-435d-8530-42225bc0af08)**
Soru Kökü: Oklüzal derin çürüğü olan devital bir alt molar dişin apikal kök ucunda gelişen likefaksiyon nekrozunun, kortikal kemiği erode ederek submukozal alana açılması sonucu diş eti üzerinde sarımsı-kırmızı renkli, granülamatöz ve pürülan içerikli bir deşarj nodülü oluşmuştur. Epitel dışı (submukozal) kökenli olan bu inflamatuar lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Parulis
Açıklama: Parulis (diş eti çıbanı), enfekte devital dişlerin periapikal apsesinin kortikal kemiği aşarak oral mukozaya fistülize olduğu çıkış noktasında oluşan pürülan ve granülamatöz nodüldür. Lezyonun rengi kendi epitel hiperkeratozundan değil, alttaki pürülan/enflamatuar yıkımın yansımasından kaynaklanır. Piyojenik granülom ise lokal irritanlara (plak/diş taşı) bağlı gelişen, endodontik kökenli olmayan vasküler proliferasyondur.

---

### ÇİFT 416 (Benzerlik: 0.69)

**Soru 1 (ID: 3b2814f3-eef3-4ca1-b7da-7c0b0d933ba0)**
Soru Kökü: Kronik periapikal inflamasyonun etkisiyle Malassez epitel artıklarının prolifere olması sonucu oluşan radiküler kistlerin epitel hücreleri üzerinde sıklıkla izlenen lineer, lameller kalsifikasyon odaklarına ne ad verilir?
Doğru Şık (A): Rushton cisimleri
Açıklama: Periapikal (radiküler) kistlerin non-keratinize skuamöz epitel döşemesi üzerinde izlenen, lineer veya lameller yapıda olabilen karakteristik kalsifikasyon odaklarına Rushton cisimleri adı verilir. Serres artıkları dental laminaya ait epitel kalıntılarıdır ve odontojenik tümör gelişiminde rol alırken, radiküler kistler kök kılıfı kalıntıları olan Malassez epitel artıklarından köken alarak büyürler. Bu kistlerin tedavisi ilgili dişin kök kanalı tedavisinin yanı sıra lezyonun cerrahi eksizyonudur.

**Soru 2 (ID: a5cdc9fc-f23c-4940-837e-ace9b3bfe6e3)**
Soru Kökü: Periapikal enfeksiyonlarda, periapikal granülom zemininden radiküler kist oluşumunu başlatan ve kistin lümenini döşeyen asıl histolojik/hücresel komponent aşağıdakilerden hangisidir?
Doğru Şık (C): Diş gelişiminden arta kalan Malassez epitel artıkları
Açıklama: Periapikal (radiküler) kistlerin gelişiminde, pulpal enfeksiyon apekse ulaştığında oluşan inflamatuar hücre sitokinleri embriyolojik kök kılıfı kalıntılarını stimüle eder. Bu uyarı ile sessiz halden aktifleşerek çoğalmaya başlayan Malassez epitel artıkları, mevcut granülom dokusu içinde çoğalır ve merkezi sıvı dolu bir epiteliyal kistik kavite yaratırlar. Nötrofiller ve mononükleer hücreler reaksiyonu ateşlese de, gerçek bir kistin yapıtaşı olan non-keratinize skuamöz epitel duvarını sadece Malassez kalıntıları kurabilir.

---

### ÇİFT 417 (Benzerlik: 0.69)

**Soru 1 (ID: 42f07d4d-d754-4db6-b2ee-a4fd01c91b39)**
Soru Kökü: Altı yaşında kız çocuğu, ağız mukozasında bukkal bölgede ortası beyaz küçük kırmızı maküller saptanması üzerine diş hekimine danışılıyor. Hastanın genel muayenesinde viral bir enfeksiyon (kızamık) saptanmıştır. Bu hastanın kalıcı dişlerinin gelişiminde aşağıdaki anomalilerden hangisinin görülme olasılığı en yüksektir?
Doğru Şık (C): Enamel hipoplazisi
Açıklama: Kızamık enfeksiyonu sırasında ateşli evrenin ameloblastlar üzerindeki toksik ve metabolik etkileri, o dönemde gelişmekte olan dişlerde enamel hipoplazisine neden olur. Taurodontizm pulpa odasının anatomik olarak vertikal genişlemesi olup viral enfeksiyonlarla değil genetik kalıtımla (Neandertal morfolojisi) ilişkilidir. Erken çocukluk çağı ateşli hastalıkları daima mine defektleri açısından risk oluşturur.

**Soru 2 (ID: 23624e1b-233c-4159-8153-2134deaa17e8)**
Soru Kökü: Çocukluk çağında geçirilen ateşli enfeksiyonların diş dokularına etkileri karşılaştırıldığında; 'dut biçimli molar' ile 'mine hipoplazisi' arasındaki patofizyolojik ayrımı belirleyen temel faktör aşağıdakilerden hangisidir?
Doğru Şık (C): Dut biçimli moların direkt spiroket invazyonuyla anatomik morfolojiyi bozması, hipoplazinin ise ateşe sekonder matriks eksikliği olması
Açıklama: Konjenital sifilizde spiroketlerin (T. pallidum) diş germine doğrudan invazyonu, embriyolojik şekillenme evresini bozarak kronun genel anatomisini deforme eder (dut biçimli molar). Kızamık gibi ateşli virüs enfeksiyonlarında ise dişe doğrudan viral invazyon yoktur; yüksek ateşe sekonder metabolik stres ameloblastların sentezini durdurarak dişin formunu değil, matriks miktarını azaltır (mine hipoplazisi).

---

### ÇİFT 418 (Benzerlik: 0.69)

**Soru 1 (ID: 21cf3df0-c3fe-4b22-be59-4715bdc1a285)**
Soru Kökü: Ağız mukozasında izlenen, etiyolojisi tam olarak bilinmeyen beyaz lezyonun biyopsisinde parakeratoz ve akantozun yanı sıra spinal hücrelerde karakteristik olarak 'intrasellüler ödem' izlenmektedir. Malignite riski bulunmayan bu patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Lökoödem
Açıklama: Lökoödem, histolojik olarak parakeratoz, akantoz ve stratum spinozumda yoğun intrasellüler ödem birikimiyle karakterize idiopatik ve malignite riski taşımayan beyaz bir lezyondur. Liken planusta ise bazal tabakada destrüksiyon ve subepitelyal bant tarzı lenfosit infiltrasyonu saptanır, ödem birincil bulgu değildir. Bu durum, dokunun gerilmesiyle beyazlığın geçici olarak kaybolmasıyla klinik olarak doğrulanabilir.

**Soru 2 (ID: 407ef47d-2998-46be-a209-23a451b45c10)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) kriterlerine göre, klinik veya patolojik anlamda başka hiçbir spesifik hastalık (liken planus, friksiyonel keratoz vb.) veya etken ile tanımlanamayan, hücresel displazi ve malign transformasyon riski barındıran 'kazınamayan' idiyopatik beyaz plaklar genel olarak hangi isimle adlandırılır?
Doğru Şık (C): Lökoplaki
Açıklama: Lökoplaki, WHO tarafından bir dışlama tanısı olarak, başka hiçbir reaktif, enfeksiyöz veya genetik tanımla uyumlu olmayan kazınamayan beyaz lezyonlar için kullanılır. Löködem kazınamayan ancak gerdirilince silinen bir varyasyonken; lökoplaki otonom bir hücresel hiperkeratoz olup %5-25 aralığında Skuamöz hücreli karsinoma dönüşme riski taşıyan preneoplastik bir formattır.

---

### ÇİFT 419 (Benzerlik: 0.69)

**Soru 1 (ID: 9f4dfcfd-e5dd-4f92-be59-00a1a980bf22)**
Soru Kökü: Boyundaki en sık görülen gelişimsel kist olan ve embriyolojik tiroid göç yolu artığı olarak orta hatta yerleşen tiroglossal kanal kistlerinin duvarında malign transformasyon gelişmesi halinde, ortaya çıkması en muhtemel tümör tipleri aşağıdakilerden hangisidir?
Doğru Şık (E): Skuamöz hücreli karsinom veya papiller tiroid karsinomu
Açıklama: Tiroglossal kanal kisti duvarı skuamöz epitel ile döşelidir ve lümen çevresinde fonksiyonel veya rudimenter tiroid dokusu folikülleri içerebilir. Bu iki farklı doku kökenine bağlı olarak malign dejenerasyon geliştiğinde sırasıyla Skuamöz hücreli karsinom (kist epiteli kaynaklı) ya da Papiller tiroid karsinomu (tiroid folikülü kaynaklı) ortaya çıkar.

**Soru 2 (ID: 0084748f-9295-4398-990f-f4baf43871e7)**
Soru Kökü: Embriyolojik gelişim sürecinde tiroid bezinin dil kökünden boyuna göç yolu üzerinde epitelyal artıkların kistik dejenerasyonu ile oluşan, etrafı skuamöz epitel ile döşeli olan ve dil hareketleriyle birlikte yer değiştiren boyun kisti aşağıdakilerden hangisidir?
Doğru Şık (E): Tiroglossal kanal kisti
Açıklama: Tiroglossal kanal kisti, tiroid bezinin embriyolojik göç yolu olan foramen çekumdan boyuna kadar olan hatta gelişir ve dil köküne bağlı olduğu için dilin protrüzyonu (hareketi) ile yutkunma sırasında yukarı-aşağı yer değiştirir. Brankial kleft kisti boynun lateralinde yer alır ve dil hareketlerinden etkilenmez. Tiroglossal kist duvarından nadiren skuamöz veya papiller tiroid karsinomu gelişebilir.

---

### ÇİFT 420 (Benzerlik: 0.69)

**Soru 1 (ID: fc347d34-3981-4aec-b2b0-21d831124d83)**
Soru Kökü: Eritema migrans (Coğrafik dil) tanısı konmuş hastalarda klinik tabloya sıklıkla eşlik eden anatomik varyasyon ve immünolojik sistemik birliktelik sırasıyla hangi seçenekte doğru verilmiştir?
Doğru Şık (C): Fissürlü dil – Psöriazis ve Reiter sendromu
Açıklama: Coğrafik dil olgularının yaklaşık 1/3'ünde anatomik varyasyon olarak fissürlü dil (dilde derin oluklar) tabloya eşlik eder; sistemik düzeyde ise atopi, seboreik dermatit, psöriazis ve Reiter sendromu (HLA-B27 pozitifliği) ile güçlü immünolojik birliktelik gösterir. Atrofik glossit ile anemi sendromları eşleşirken, eritema migransın dermatolojik ve romatolojik sendromlarla çapraz ilişkisi mevcuttur.

**Soru 2 (ID: b7cc9f03-10d6-477f-8337-3f20d65e2f70)**
Soru Kökü: Median romboit glossit ve eritema migrans (coğrafik dil) klinik olarak dil dorsumunda eritem (kırmızılık) ve papilla atrofisi yapmaları nedeniyle karıştırılabilir. Bu iki lezyonu birbirinden ayıran TEK KRİTİK klinik davranış ve etiyolojik fark aşağıdakilerden hangisidir?
Doğru Şık (A): Median romboit glossitin Kandida zemininde gelişip orta hatta sabit kalması, eritema migransın ise dinamik olarak yer değiştirmesi
Açıklama: Eritema migrans dinamik hücresel turn-over döngüsüne sahip immün-reaktif bir tablodur ve papilla atrofileri dilde sürekli yer değiştirerek (gezici) harita görünümü çizer. Median romboit glossit ise embriyolojik gelişim varyasyonu ve kronik Kandida enfeksiyonu zemininde gelişen, dilin posterior dorsum orta hattında ömür boyu sabit (yer değiştirmeyen) kalan eritematöz baklava dilimi şeklinde bir lezyondur.

---

### ÇİFT 421 (Benzerlik: 0.69)

**Soru 1 (ID: 6941e1db-7450-42d3-a67c-23d69c4247d1)**
Soru Kökü: Kronik hiperplastik pulpit (Pulpa polibi) ile ilgili aşağıda verilen klinik ve patolojik özelliklerden hangisi **yanlıştır**?
Doğru Şık (C): Dişin üzerini örtecek şekilde basınçla şiddetli ağrı semptomları verir.
Açıklama: Pulpa polibi, pulpa odasının geniş çapta açığa çıktığı durumlarda dokunun dışarı doğru prolifere olmasıdır ve ağız boşluğuna sürekli drenaj sağladığı için kapalı alan inflamasyonlarında görülen şiddetli ağrı bu tabloda izlenmez, lezyon genelde asemptomatiktir. En güçlü çeldirici olan 'irreversibl olma' durumu doğrudur; diş semptomsuz olsa bile pulpa canlılığı fizyolojik sınırların çok dışındadır ve ekstirpasyon/çekim gerektirir. Ağrısız karakteri tanı koydurucu temel detaylardan biridir.

**Soru 2 (ID: 7adb6ba8-0308-4899-a2e1-8e58f252e7fb)**
Soru Kökü: Şiddetli zonklayıcı diş ağrısıyla kliniğe başvuran hastanın anamnezinden, ağrının birkaç gündür var olduğu ancak son 24 saat içinde dişteki sıcak/soğuk hassasiyetinin aniden kaybolduğu öğrenilmiştir. Vitalite testlerinde dişin elektriksel uyarılara yanıt vermediği saptanmıştır. Akut pulpit geçirmiş olduğu düşünülen bu vakada, pulpal yanıtın tamamen kaybını patofizyolojik olarak açıklayan **en olası** tablo aşağıdakilerden hangisidir?
Doğru Şık (C): Şiddetli intrapulpal inflamasyona ikincil olarak gelişen pulpal doku nekrozu
Açıklama: Akut pulpitte erken dönemde seröz eksüdasyon ile birlikte termal uyarılara abartılı ve şiddetli bir yanıt (ağrı) varken, inflamasyon şiddetlendikçe ödem kaynaklı artan intrapulpal basınç doku iskemisine ve bozulmaya yol açar. Pulpa dokusunun tam iskemisi sonucu gelişen likefaksiyon yıkımı (nekroz) tamamlandığında, sinir lifleri de geri dönüşümsüz olarak harabolduğu için dişin termal ve elektriksel vitalite uyarılara verdiği yanıt tamamen kaybolur. Bu evrede artık diş çekimi veya kök kanal tedavisi endikedir.

---

### ÇİFT 422 (Benzerlik: 0.69)

**Soru 1 (ID: 12f2a53a-3d38-43d5-95b4-f0b4b1c76364)**
Soru Kökü: Yirmi sekiz yaşındaki gebe hasta, diş fırçalama sırasında diş etlerinde şiddetli kanama ve büyüme şikayetiyle başvurmuştur. Klinik muayenede artmış sekseksüel hormon seviyeleri ile tetiklendiği düşünülen yaygın eritematöz diş eti büyümesi saptanmıştır. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Hormonal gingivit
Açıklama: Artmış progesteron ve östrojen seviyeleri, mikrobiyal dental plağa karşı doku yanıtını abartarak gebelik ve puberte dönemlerinde hormonal gingivite yol açar. Plazma hücreli gingivitis ise aroma vericiler gibi spesifik alerjenlere bağlı gelişir.

**Soru 2 (ID: dcdee1c5-d7ae-4a56-86b8-0b03f742f0d8)**
Soru Kökü: Yeni bir diş macunu ve ağız gargarası kullanmaya başladıktan birkaç hafta sonra diş etlerinde şiddetli kızarıklık, yanma hissi ve büyüme şikayetiyle başvuran hastanın muayenesinde; dilde filiform papillaların tamamen silindiği, dil yüzeyinde belirgin atrofi ve soyulma olduğu gözlenmiştir. Alınan gingival biyopside bağ dokusunda çok yoğun inflamatuar infiltrasyon saptanmıştır. Bu hastada düşünülen **en olası** tanı ve biyopsi alanında hakim olan hücre tipi aşağıdakilerin hangisinde birlikte doğru verilmiştir?
Doğru Şık (A): Allerjik gingivostomatitis – Plazma hücresi
Açıklama: Diş macunları, tatlandırıcılar veya bazı dental materyallere karşı gelişen atipik bir hipersensitivite reaksiyonu olan alerjik gingivostomatitis (plazma hücreli gingivitis) vakalarında, lezyon bölgesindeki bağ dokusu aşırı miktarda plazma hücresi ile infiltre edilir. Diş eti bulgularına ek olarak dilde filiform papillaların silinmesiyle karakterize atrofik ve soyulmuş görünüm, bu sendrom için ayırıcı ekstra-gingival bulgulardır. Gingival fibromatoz inflamasyon hücreleri içermeyen ailesel bir doku aşırı büyümesidir, bu tarz sistemik mukozal tutulum yapmaz.

---

### ÇİFT 423 (Benzerlik: 0.69)

**Soru 1 (ID: 6cd000e4-2f5a-4cb5-870e-27a6335e0c20)**
Soru Kökü: Konjenital sifilizin organogenez basamaklarındaki yıkım modellemesinde nörolojik sistem üzerine spesifik toksisitesi izlenmektedir. Triadın üçüncü bileşeni olan sensörinöral sağırlık tablosunun doğrudan dokusal sebebi aşağıdakilerden hangisidir?
Doğru Şık (C): Temporal kemik labirentiti zemininde gelişen inflamasyon ve 8. kraniyal sinir tahribatı
Açıklama: Konjenital sifilizin nörolojik triadı doğrudan temporal kemik yapısında ve labirentlerde gelişen spiroketal inflamasyona bağlı 8. kraniyal sinirin (Nervus vestibulocochlearis) veya iç kulağın tahribatından kaynaklanır. Bu hücresel hasar orta kulaktaki mekanik bir ankiloz değil, iletimin kalıcı olarak kesildiği bir sensörinöral sinir disfonksiyonudur. Genikulat gangliyon tutulumu spiroketin değil Varicella Zoster Virüsünün (Ramsay Hunt) hedefidir.

**Soru 2 (ID: 08788acc-daa1-4e89-88a5-b6b7c4c8d6f4)**
Soru Kökü: Konjenital sifiliz patolojisinde embriyolojik evrede doku harabiyeti kaskadıyla ortaya çıkan Hutchinson triyadının bileşenlerinden biri **değildir**?
Doğru Şık (D): Korda timpani hasarına sekonder periferik fasiyal paralizi
Açıklama: Hutchinson triyadı, dental deformiteler (kama/dut dişler), oküler defekt (interstisyel keratit) ve nörolojik defekt (sensörinöral sağırlık) üçlemesinden oluşur. Bu nörolojik defekt 8. kraniyal sinirin (N. vestibulocochlearis) tahribatına bağlı gelişir, fasiyal sinir veya trigeminal sinir tutulumu triyada dâhil değildir. Periferik fasiyal paralizi, Varicella Zoster'in genikulat gangliyonda reaktivasyonu ile oluşan Ramsay Hunt sendromunda izlenir.

---

### ÇİFT 424 (Benzerlik: 0.69)

**Soru 1 (ID: f81483d6-13b3-4eb9-ab09-58e25bbc2874)**
Soru Kökü: Çocukluk çağında geçirilen ağır viral enfeksiyonların oral bulguları incelendiğinde, kızamık patofizyolojisinde izlenen ve virüsün konak epitel hücre membranlarında kaynaşma yaratarak nükleusların tek bir sitoplazmada birikmesine neden olan histopatolojik karakteristik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Whartin-Finkeldey dev hücreleri
Açıklama: Kızamıkta virüsün majör sitopatik etkisi, enfekte epitel ve lenfoid hücrelerin membranlarını kaynaştırarak (füzyon) oluşturduğu Whartin-Finkeldey dev hücreleridir. Tüberküloz veya sifilizde izlenen makrofaj kökenli Langhans dev hücrelerinin aksine, bu hücreler granülomatöz bir inflamasyonun değil, doğrudan viral membran füzyonunun yapısal bir sonucudur. Mikrobiyolojik ve histolojik ayrımda bu hücresel köken farkı esastır.

**Soru 2 (ID: 15ba2a82-a8f2-4389-950a-66ac970e01f1)**
Soru Kökü: Kızamık enfeksiyonunun mukozal ve hücresel kinetiği değerlendirildiğinde aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Histopatolojide hücresel bağışıklık sonucu makrofaj kökenli Langhans tipi dev hücreler görülür.
Açıklama: Kızamığın histopatolojik karekteristiği olan Whartin-Finkeldey dev hücreleri hücresel bağışıklıkla (makrofaj birleşimiyle) değil, virüsün direkt konak epitel hücre membranlarını kaynaştırması (füzyon) sonucu gelişir. Makrofaj kökenli Langhans dev hücreleri sifiliz veya tüberküloz gibi granülomatöz hastalıklarda görülür.

---

### ÇİFT 425 (Benzerlik: 0.69)

**Soru 1 (ID: 112204b7-a389-4bf0-9429-7da3a7f77544)**
Soru Kökü: Sekiz yaşındaki hastanın yanak mukozasında yaygın kalın beyaz plaklar saptanıyor. Göz hekimi konsültasyonunda, hastanın korneal limbus bölgesinde konjonktival plakların varlığı tespit ediliyor. Histolojik incelemesinde hiperplazi ve diskeratotik hücreler izlenen, kendini sınırlayan bu otozomal dominant patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Herediter benign intraepitelyal diskeratozis (Witkop Sendromu)
Açıklama: Witkop-Von Sallmann Sendromu (Herediter benign intraepitelyal diskeratoz), ektodermal kökenli hücrelerdeki defekte bağlı olarak patognomonik şekilde eşzamanlı oral beyaz lezyonlar ve gözde (korneal limbusta) konjonktival plaklarla seyreden kalıtsal bir sendromdur. Darier hastalığı seboreik deriyi tutarken oküler bulgu vermez; Beyaz Sünger Nevüs ise sadece oral mukoza ile sınırlıdır.

**Soru 2 (ID: c0b21f81-b3fa-4541-8fe1-487bb08f1b53)**
Soru Kökü: On yaşındaki hastanın ağız içi muayenesinde, her iki yanak mukozasını kaplayan kalın, yumuşak, süngerimsi beyaz plaklar saptanıyor. Alınan biyopsinin histopatolojik incelemesinde stratum spinozum tabakasındaki prickle (dikensi) hücrelerde sitoiskelet çöküşünü simgeleyen 'perinükleer eozinofilik kondensasyon' raporlanıyor. Bu hastadaki lezyonun etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Keratin 4 ve Keratin 13 genlerinde mutasyon
Açıklama: Keratin 4 ve 13 gen mutasyonu, sitoiskelet ağının bozulmasına ve spesifik olarak hücrelerde hidropik dejenerasyon ile patognomonik 'perinükleer eozinofilik kondensasyon' oluşumuna neden olarak Cannon hastalığını (Beyaz Sünger Nevüs) tetikler. Kalsiyum pompa defekti Darier hastalığına, EBV kıllı lökoplakiye, sürtünme friksiyonel keratoza yol açar.

---

### ÇİFT 426 (Benzerlik: 0.69)

**Soru 1 (ID: 477db9ac-19c2-4cf4-a1e4-eafd1ef93773)**
Soru Kökü: Baş boyun karsinomlarında primer lezyonun anatomik lokalizasyonu, lenfatik drenaj ağı farklılıkları nedeniyle prognozu doğrudan etkiler. Ağız boşluğu içinde **en sık** rastlanan skuamöz hücreli karsinom lokalizasyonu aşağıdakilerden hangisidir?
Doğru Şık (C): Dilin postero-lateral sınırı
Açıklama: Dudak tümörleri oral karsinomların büyük kısmını (alt dudak spesifik olarak) oluştursa da, 'intra-oral' (ağız içi) boşluktaki anatomik yapılar arasında kanserin en sık yerleştiği spesifik bölge dilin kendisi, özellikle de postero-lateral sınırıdır. Ağız tabanı intra-oral yerleşimde ikinci sıklıkta gelir. Dil kanserleri, zengin lenf ağı nedeniyle hızla metastaz yapar ve dudak tümörlerine göre çok daha yüksek mortaliteye sahiptir.

**Soru 2 (ID: df7c057f-c6df-40a9-a5ed-ae033c080f4d)**
Soru Kökü: İdiyopatik lökoplakilerin insidansı ile maligniteye (skuamöz hücreli karsinom) dönüşüm riski anatomik bölgelere göre farklılık gösterir. Buna göre, lökoplaki görülme sıklığının düşük olmasına karşın, hücresel kanserleşme riskinin tartışmasız en yüksek olduğu oral lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (B): Ağız tabanı
Açıklama: Lökoplakilerin malign transformasyon riski anatomik hiyerarşide en fazla Ağız tabanında izlenir, bunu dil ve dudak takip eder. Buna karşın vestibül mukoza lökoplakilerin en sık rastlandığı ancak kanserleşme riskinin en düşük olduğu anatomik alandır. Bu ters orantı kuralı oral prekanseröz lezyonların yönetiminde kritik bir prognostik göstergedir.

---

