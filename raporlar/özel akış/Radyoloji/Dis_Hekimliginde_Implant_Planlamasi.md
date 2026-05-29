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

### ÇİFT 1 (Benzerlik: 0.76)

**Soru 1 (ID: 74e2f892-7943-4cbd-a58f-d3ef2f1b48db)**
Soru Kökü: Meziodistal mesafenin 7 mm'den az olduğu ince alveolar kretlerde standart implantlar yerine dar çaplı implantların kullanılması endikedir. Aşağıdakilerden hangisi dar çaplı implant uygulamalarının biyomekanik ve cerrahi dezavantajlarından biri **değildir**?
Doğru Şık (B): Geniş çaplı implantlara kıyasla oklüzal streslere ve makaslama kuvvetlerine karşı toleranslarının artması
Açıklama: Dar çaplı implantların yüzey alanı küçük ve gövdeleri zayıf olduğu için oklüzal kuvvetlere (çiğneme baskısına) toleransları geniş çaplı implantlara göre daha düşüktür; toleranslarının arttığı ifadesi yanlıştır. Çeldirici olan kırılma direnci maddesi doğrudur, zira dar implantlar yapısal olarak standart çaplı olanlara göre mekanik yorgunluğa %25 oranında daha duyarlıdır. Dar implantların birincil kullanım amacı mekanik dayanım sağlamak değil, dar anatomik aralıklara (örneğin alt keser bölgesi) perforasyon yaratmadan sığabilmektir.

**Soru 2 (ID: fc9234be-d664-40ca-a367-a5970ff9ee1e)**
Soru Kökü: Posterior bölgede oklüzal stresleri daha iyi dağıtmak amacıyla standart çaplı yerine geniş çaplı (wide) implant uygulaması planlanan bir hastada, cerrahi aşamada oluşabilecek en muhtemel dezavantaj aşağıdakilerden hangisidir?
Doğru Şık (B): Kemikteki frezleme miktarının artmasına bağlı olarak ısınma ile termal yaralanma riskinin ve kret duvarlarının incelmesi
Açıklama: Geniş çaplı implantlar stres dağılımı ve vida gevşeme direncini artırmasına (avantaj) karşın; çapları nedeniyle hazırlık yuvası büyüdükçe kemikte sürtünmeye bağlı termal nekroz riski artar ve geriye kalan bukkal/lingual kortikal kemik duvarları mekanik olarak zayıflayabilir (dezavantaj). Primer stabilizasyonun %25 düşük olması dar çaplı implantlara ait bir özelliktir. Hekim oklüzal tabla için geniş implant seçerken kretin bukkolingual genişliğinden ödün verip perforasyon riski yaratmamaya dikkat etmelidir.

---

### ÇİFT 2 (Benzerlik: 0.75)

**Soru 1 (ID: a01aee2f-b072-4e7e-bf9f-ea3fabf8a241)**
Soru Kökü: Uzun yıllar total protez kullanan hastada; çekim soketlerinin çoktan iyileştiği, kretlerin yüksekliğinin ve genişliğinin ciddi oranda kaybedildiği, alveoler prosesin ötesine geçerek bazal kemiğin kendisinin de rezorpsiyona dahil olduğu klinik tablo, Misch ve Judy sınıflandırmasında hangi gruba dahil edilir?
Doğru Şık (C): Div D
Açıklama: Misch ve Judy sisteminde uzun süreli dişsizlik sonucu alveoler çıkıntının tamamen eridiği ve bazal çene kemiğinin dahi yıkıma maruz kalarak ciddi atrofi oluşturduğu durum Div D (Division D) olarak tanımlanır. Sınıf VI (çeldirici) tamamen aynı morfolojik durumu yani negatif bazal kemik kaybını tarif eder, ancak bu Cawood ve Howell'ın tanımladığı sistemde yer alır. Misch Div D kretler ileri ogmentasyon, sinir repozisyonu veya subperiosteal/zigomatik çözümler gerektirecek denli komplike anatomiler sunar.

**Soru 2 (ID: f8030e16-aff2-4970-8d69-2904b000922c)**
Soru Kökü: Misch ve Judy'nin dişsiz kretleri değerlendirdiği sınıflandırma sisteminde, mevcut alveolar kemikte önce genişlikte azalma meydana gelen, sonrasında yüksekliğinde de azalmanın eşlik ettiği, tek veya çoklu boyutta yetersizlik gösteren kret yapısı hangi grupta tanımlanmaktadır?
Doğru Şık (A): Div C
Açıklama: Misch ve Judy sınıflamasına göre Div C, alveoler kemiğin tek veya daha fazla boyutunda (genişlik, yükseklik, açı, kuron-kök oranı) klinik olarak yetersiz olduğu ve tipik olarak önce genişliğin ardından yüksekliğin kaybedildiği evredir. Div B sadece orta derecede genişlik kaybı içerirken yüksekliği korunmuş kretleri tarif eder (çeldirici). Sınıf IV ise Cawood ve Howell'a ait bir terim olup bıçak sırtı kreti tanımlar; sınıflama sistemlerinin isimlendirmeleri birbirine karıştırılmamalıdır.

---

### ÇİFT 3 (Benzerlik: 0.73)

**Soru 1 (ID: a01aee2f-b072-4e7e-bf9f-ea3fabf8a241)**
Soru Kökü: Uzun yıllar total protez kullanan hastada; çekim soketlerinin çoktan iyileştiği, kretlerin yüksekliğinin ve genişliğinin ciddi oranda kaybedildiği, alveoler prosesin ötesine geçerek bazal kemiğin kendisinin de rezorpsiyona dahil olduğu klinik tablo, Misch ve Judy sınıflandırmasında hangi gruba dahil edilir?
Doğru Şık (C): Div D
Açıklama: Misch ve Judy sisteminde uzun süreli dişsizlik sonucu alveoler çıkıntının tamamen eridiği ve bazal çene kemiğinin dahi yıkıma maruz kalarak ciddi atrofi oluşturduğu durum Div D (Division D) olarak tanımlanır. Sınıf VI (çeldirici) tamamen aynı morfolojik durumu yani negatif bazal kemik kaybını tarif eder, ancak bu Cawood ve Howell'ın tanımladığı sistemde yer alır. Misch Div D kretler ileri ogmentasyon, sinir repozisyonu veya subperiosteal/zigomatik çözümler gerektirecek denli komplike anatomiler sunar.

**Soru 2 (ID: de7a4a69-1625-4210-982e-8f0bf9723a10)**
Soru Kökü: 70 yaşında total dişsiz erkek hasta, uzun yıllardır kullandığı alt tam protezinin tutuculuğunun tamamen kaybolması şikayetiyle başvurmuştur. Çekilen radyografide, alveoler proçesin tamamen eridiği, sadece mandibular kanalın altındaki kemiğin kaldığı ve vestibül derinliğin kaybolarak kretin çukurlaşmış (negatif) bir morfoloji aldığı izlenmiştir. Cawood ve Howell alveoler kret sınıflandırmasına göre hastanın mevcut durumu aşağıdakilerden hangisidir?
Doğru Şık (B): Sınıf VI
Açıklama: Cawood ve Howell sınıflamasında Sınıf VI, çeşitli derecelerde bazal kemik kaybını içeren, kas ataşmanlarının tepe noktasına ulaştığı basık, tamamen 'negatif forma sahip' ileri derece atrofik kretleri tanımlar. Sınıf V düzleşmiş kreti ifade ederken, Sınıf VI kemik kaybının bazal yapılara kadar ulaştığı ve kretin anatomik bir kabarıklık olmaktan çıkıp çukurlaştığı en ileri düzey yıkımdır.

---

### ÇİFT 4 (Benzerlik: 0.73)

**Soru 1 (ID: 703aa08c-e5a1-4e3c-a762-bde2a03681c7)**
Soru Kökü: Kırk iki yaşındaki erkek hasta, alt çene sağ posterior bölgesindeki diş eksikliklerinin implant ile rehabilite edilmesi talebiyle kliniğe başvurmuştur. Yapılan KIBT incelemesinde eksik diş boşluğunun meziodistal mesafesinin 16 mm olduğu ölçülmüştür. Biyomekanik kurallar gereği, yerleştirilecek iki implantın merkezleri arasında bırakılması gereken minimum mesafe kaç mm olmalıdır?
Doğru Şık (D): 7
Açıklama: İmplant destekli restorasyonlarda inter-implant kemik kretinin korunabilmesi ve protetik başlıkların (abutment) sığabilmesi için iki implantın merkezleri arasında en az 7 mm mesafe bırakılmalıdır. Güçlü distraktör olan 3 mm, implantların dış kenarları (başları) arasında bırakılması gereken minimum mesafedir, merkezler arası değil. Bu boşluk hem cerrahi iyileşme hem de oral hijyenin sağlanması için kritik bir biyomekanik ve anatomik gerekliliktir.

**Soru 2 (ID: 9812ae02-974e-4e1e-bbeb-3e4597974249)**
Soru Kökü: 35 yaşında kadın hasta, eksik 46 numaralı dişinin yerine implant yerleştirilmesi şikayetiyle başvurmuştur. Klinik muayenede komşu 45 ve 47 numaralı dişlerin periodontal olarak sağlıklı olduğu izlenmiştir. Biyolojik genişliğin korunması ve interdental papil oluşumunun sağlanabilmesi için, yerleştirilecek implantın komşu doğal dişlerin kök yüzeyine olan yatay mesafesi **en az** kaç mm olmalıdır?
Doğru Şık (C): 1.5 - 2 mm
Açıklama: İmplant omuz bölgesi ile komşu doğal diş arasında en az 1.5-2 mm mesafe bırakılması, kretsel kemik apozisyonunu korumak ve yumuşak doku papil formasyonuna izin vermek için zorunludur. Eğer iki implant yan yana yerleştirilecekse bu mesafe minimum 3 mm olmalıdır; doğal dişe olan mesafenin daha kısa tutulabilmesinin nedeni, doğal dişin sahip olduğu periodontal ligamentin kanlanma desteğidir.

---

### ÇİFT 5 (Benzerlik: 0.73)

**Soru 1 (ID: 189a0e4b-2e38-418b-9628-71d7852b6f65)**
Soru Kökü: Aşağıdakilerden hangisi dijital planlama ile üretilen cerrahi rehber stentlerin (guided surgery) klinik kullanımının sunduğu temel avantajlardan biri **değildir**?
Doğru Şık (E): KIBT yazılımı ile birleştirildiğinde kemiğin gerçek Hounsfield Ünitesini artırması
Açıklama: Cerrahi stentler (guide) operasyonun invazivliğini azaltarak flepsiz cerrahiyi (punch tekniği) mümkün kılar; bu da kanama, ödem, trismus ve ameliyat süresini düşürür. Ancak Hounsfield Ünitesi (HU) KIBT'nin fiziksel ölçüm mekanizması (x-ışını dağılımı) ile ilgili bir eksikliktir ve stent kullanımı veya yazılım ile gerçek medikal BT'lerdeki gibi standart bir HU ölçümü oluşturulamaz; sadece izafi kemik yoğunluğu (gri skala) değerlendirilebilir.

**Soru 2 (ID: b2a29e98-b87a-450a-a871-6ad95203a92e)**
Soru Kökü: Cerrahi stentler kullanılarak stereolitografik veriler üzerinden gerçekleştirilen rehberli implant cerrahisinin (guided surgery) klinisyene ve hastaya sunduğu avantajlar arasında;

I. Tedavi sırasında geleneksel mukoperiosteal flep kaldırma operasyonunun ve sonrasında sütur ihtiyacının ortadan kalkması
II. Kemik termal nekrozunu önlemek için su soğutmalı frez kullanımına kesinlikle gerek duyulmaması
III. Post-operatif doku travmasının azalmasıyla ödem ve trismus oluşma riskinin düşmesi

yukarıdaki ifadelerden hangileri yer alır?
Doğru Şık (D): I ve III
Açıklama: Rehberli cerrahi (Flapless cerrahi), bistüri ile geniş flep açılmasına gerek bırakmadığı için operasyon süresini kısaltır, sütürasyon gerektirmez (I) ve doku minimal travmatize edildiği için postoperatif kanama, ödem, ağrı ve kas spazmı (trismus) ihtimali çok azalır (III). Ancak kemiği frezlerken ısınmayı önlemek için irrigasyon (su soğutması) mutlak bir fiziksel kuraldır ve stent kullanımından bağımsızdır (II yanlıştır, çeldiricidir). Ayrıca stentlerin varlığı frezin suya ulaşmasını zorlaştırabildiği için soğutmaya ekstradan dikkat edilmelidir.

---

### ÇİFT 6 (Benzerlik: 0.72)

**Soru 1 (ID: c54457c7-99ba-48dd-b2e0-48a0a92c7db9)**
Soru Kökü: Kırk sekiz yaşındaki kadın hasta, ağız hijyenine dikkat edemediğini ve alt çenesindeki implantının etrafında diş eti kanaması olduğunu şikayet ederek başvurmuştur. Alınan radyografide biyomekanik kırık görülmezken, implantı çevreleyen kemikte sadece servikal bölgeyle sınırlı bir harabiyet fark edilmiştir. Bu bulgular ışığında hastadaki 'peri-implantitis' tablosunun spesifik radyolojik görünümü aşağıdakilerden hangisidir?
Doğru Şık (D): İmplantın koronal (boyun) kısmında izlenen ve yivlerin açığa çıktığı krater formlu radyolüsensi
Açıklama: Kötü plak kontrolü veya aşırı bakteri yüküne bağlı gelişen peri-implantitis vakalarında, enflamasyon gingivadan başlayıp marjinal kemiğe yayıldığı için radyografik olarak implantın koronal (boyun) kısmında çevresel krater (çanak) tarzı radyolüsensi gözlemlenir. Tek taraflı kemik erimesi (çeldirici) peri-implantitis enfeksiyonunu değil, yanlış açılamaya bağlı non-aksiyal biyomekanik kuvvet aşırı yüklenmesini gösterir. Boyun kısmındaki yivlerin açığa çıkması klinik olarak da sondlama derinliğinin artmasıyla doğrulanır.

**Soru 2 (ID: d93325d5-94ac-46f0-a582-a1f2ad0e5857)**
Soru Kökü: Elli beş yaşındaki erkek hasta, iki yıl önce alt çenesine yerleştirilen implant destekli protezinde çiğneme esnasında baskı hissettiğini belirtmektedir. Alınan kontrol periapikal radyografisinde implantın dış yüzünü çepeçevre saran genel bir radyolüsensi yerine, sadece bir tarafında kemiğin apikale doğru krater formunda migrasyon gösterdiği saptanmıştır. Bu radyografik görünüme neden olan en olası klinik başarısızlık faktörü hangisidir?
Doğru Şık (D): Yanlış implant açılamasına bağlı olarak sistemin aksiyal olmayan asimetrik oklüzal kuvvetlere maruz kalması
Açıklama: İmplantın yalnızca bir tarafında kemiğin apikale doğru yıkımı (kama/krater tarzı migrasyon), kuron-implant aksının uyumsuzluğuna bağlı non-aksiyal (yatay ve makaslama) kuvvetlerin kemikte asimetrik mikrotravma yaratmasının radyografik bulgusudur. Peri-implantitis (çeldirici) spesifik olarak tek taraflı değil, implantın koronal kısmında çevresel (sirküler) ve çanak şeklinde bir kemik yıkımı yaratır. Biyomekanik kuvvetlerin dik gelmemesi krestal kemik kaybını tetikleyen temel stres faktörüdür.

---

### ÇİFT 7 (Benzerlik: 0.72)

**Soru 1 (ID: 0f52a2ce-acda-41d8-b3cb-1fb78ee2e6ee)**
Soru Kökü: KIBT'nin (Konik Işınlı Bilgisayarlı Tomografi) implant planlamasında rutin tıbbi tomografilere göre sağladığı avantajlar değerlendirildiğinde aşağıdakilerden hangisi bu avantajlardan biri **değildir**?
Doğru Şık (E): Kemik içerisindeki protetik materyaller etrafında metal artefaktı (saçılma) oluşumunu tamamen engelleyebilmesi
Açıklama: KIBT teknolojisinde X-ışını hüzmesinin konik formundan dolayı komşu dişlerdeki amalgam, kuron veya titanyum implantlardan kaynaklanan foton saçılması (metal artefaktı) ciddi bir dezavantajdır; bunu tamamen engellemek mümkün değildir. Radyasyon dozu veya DICOM uyumu gibi maddeler doğru birer avantajken, yüksek kontrast çözünürlüğü gibi durumlar CT'nin KIBT'ye üstünlüğüdür. KIBT yazılımları artefaktları azaltmaya çalışsa da diagnostik netliği bozan en önemli sınırlamalardan biri olmaya devam etmektedir.

**Soru 2 (ID: f283b421-a9e2-4879-9a70-b53116eb1ce0)**
Soru Kökü: İmplant planlaması sürecinde ideal bir radyolojik görüntüleme tekniğinden beklenen özellikler değerlendirildiğinde aşağıdakilerden hangisi bu özelliklerden biri **değildir**?
Doğru Şık (E): Temporomandibular eklemin sadece açık ağız pozisyonundaki dinamik hareketlerini ardışık olarak kaydedebilmesi
Açıklama: İdeal implant görüntüleme tekniği beklentileri arasında kemik morfometrisi, densite tayini, 3D algı ve minimal magnifikasyon yer alırken; TME'nin dinamik ve ardışık hareket fonksiyonlarını açık ağızda kaydetmek rutin implant bölgesel planlama hedeflerinden biri değildir (bu floroskopi veya sine-MR'ın konusudur). Çeldirici şıklar tamamen lokal kemik hacmi ve topografisine odaklanmış doğru tanısal beklentilerdir. Eklem patolojisi varlığı araştırılsa da, 'sadece dinamik hareket' vurgusu lokal planlama standartlarına uymaz.

---

### ÇİFT 8 (Benzerlik: 0.72)

**Soru 1 (ID: 26e6c3c0-5a1f-4d4e-8eca-6acbe7e5ea17)**
Soru Kökü: Kırk yaşındaki kadın hasta, bir doğal dişi ve bir implantın birlikte köprü ayağı olarak kullanıldığı protetik restorasyonunda oluşan ağrı şikayetiyle başvurmuştur. Radyolojik incelemede implant etrafında patoloji gözlenmezken, komşu doğal dişin kökünü saran periodontal aralıkta belirgin bir genişleme saptanmıştır. Bu tablonun altında yatan en olası biyomekanik sorun aşağıdakilerden hangisidir?
Doğru Şık (A): Yetersiz biyomekanik planlamaya bağlı olarak doğal dişin hatalı (aşırı) kuvvet dağılımına maruz kalması
Açıklama: Ankiloz (osseointegre) bir implant ile fizyolojik mobiliteye (periodontal ligamente) sahip bir doğal dişin rijit şekilde splintlenmesi (bağlanması), stresin rezilyensi olmayan implantta birikmesine veya oklüzal kuvvetlerin hatalı dağılımı sonucu zayıf halkanın (doğal dişin PDL aralığının) travmaya bağlı genişlemesine (fonksiyonel adaptasyon/travma) neden olur. Sabitleyici vida kırığı (çeldirici) lokal implant parçası sorunudur komşu dişi yansıtmaz. Farklı mobilite dinamiklerine sahip desteklerin bağlanmasında biomekanik yıkım radyolojik olarak ilk önce PDL genişlemesiyle izlenir.

**Soru 2 (ID: 996c3657-3b12-4f50-8511-526a20a5c023)**
Soru Kökü: 48 yaşında ciddi bruksizm hikayesi olan kadın hastanın implant destekli sabit protezinde yer alan sabitleyici vidadan (abutment vidası) birinin koptuğu saptanmıştır. Implant gövdesinde osseointegrasyon kaybı yoktur. Bu komplikasyonun gelişimini açıklayan tablodaki **en spesifik** klinik neden aşağıdakilerden hangisidir?
Doğru Şık (A): Fonksiyon esnasında uygun olmayan aşırı kuvvet dağılımı
Açıklama: Bruksizm gibi parafonksiyonel alışkanlıklarda veya oklüzal prematür temaslarda, implant sistemine fonksiyon esnasında uygun olmayan yüksek mekanik stres biner. Implantın kendisi osseointegre olarak kalsa bile, bu yorgunluk stresi en zayıf metal bileşen olan abutment sabitleyici vidasının (screw fracture) mikro seviyede deforme olmasına ve sonuç olarak kırılmasına neden olur.

---

### ÇİFT 9 (Benzerlik: 0.71)

**Soru 1 (ID: de7a4a69-1625-4210-982e-8f0bf9723a10)**
Soru Kökü: 70 yaşında total dişsiz erkek hasta, uzun yıllardır kullandığı alt tam protezinin tutuculuğunun tamamen kaybolması şikayetiyle başvurmuştur. Çekilen radyografide, alveoler proçesin tamamen eridiği, sadece mandibular kanalın altındaki kemiğin kaldığı ve vestibül derinliğin kaybolarak kretin çukurlaşmış (negatif) bir morfoloji aldığı izlenmiştir. Cawood ve Howell alveoler kret sınıflandırmasına göre hastanın mevcut durumu aşağıdakilerden hangisidir?
Doğru Şık (B): Sınıf VI
Açıklama: Cawood ve Howell sınıflamasında Sınıf VI, çeşitli derecelerde bazal kemik kaybını içeren, kas ataşmanlarının tepe noktasına ulaştığı basık, tamamen 'negatif forma sahip' ileri derece atrofik kretleri tanımlar. Sınıf V düzleşmiş kreti ifade ederken, Sınıf VI kemik kaybının bazal yapılara kadar ulaştığı ve kretin anatomik bir kabarıklık olmaktan çıkıp çukurlaştığı en ileri düzey yıkımdır.

**Soru 2 (ID: f87a3a89-a9e2-469b-b61b-5e66293ddc01)**
Soru Kökü: Altmış beş yaşındaki tam dişsiz kadın hasta, alt çenesine owerdenture protez planlaması için başvurmuştur. Çekilen radyografik görüntülerde mandibula anterior bölgesindeki kretin ileri derecede rezorbe olduğu ve bazal kemiğe kadar yaklaştığı tespit edilmiştir. Kret kret yapısı incelendiğinde mineralizasyonunun çok yüksek ve yoğun kortikal karakterde olduğu görülmüştür. Misch sınıflamasına göre bu bölgedeki kemik dansitesi en olası hangisidir?
Doğru Şık (B): D1
Açıklama: İleri derecede rezorbe olmuş dişsiz anterior mandibulada sıklıkla izlenen, çok yüksek oranda mineralize olan yoğun kortikal kemik yapısı Misch sınıflamasında D1 kemik olarak tanımlanır. Anterior mandibula çeldiricisi olarak D2 de düşünülebilir ancak D2'de krette yoğun/kalın poröz kortikal kemik altında kalın trabeküler kemik bulunur; ileri rezorpsiyonda ise süngerimsi kemik kaybolur ve D1 formu hakim olur. D1 kemik implant cerrahisinde aşırı ısınma riskini artırdığı için özel frezleme protokolleri gerektirir.

---

### ÇİFT 10 (Benzerlik: 0.71)

**Soru 1 (ID: 0f52a2ce-acda-41d8-b3cb-1fb78ee2e6ee)**
Soru Kökü: KIBT'nin (Konik Işınlı Bilgisayarlı Tomografi) implant planlamasında rutin tıbbi tomografilere göre sağladığı avantajlar değerlendirildiğinde aşağıdakilerden hangisi bu avantajlardan biri **değildir**?
Doğru Şık (E): Kemik içerisindeki protetik materyaller etrafında metal artefaktı (saçılma) oluşumunu tamamen engelleyebilmesi
Açıklama: KIBT teknolojisinde X-ışını hüzmesinin konik formundan dolayı komşu dişlerdeki amalgam, kuron veya titanyum implantlardan kaynaklanan foton saçılması (metal artefaktı) ciddi bir dezavantajdır; bunu tamamen engellemek mümkün değildir. Radyasyon dozu veya DICOM uyumu gibi maddeler doğru birer avantajken, yüksek kontrast çözünürlüğü gibi durumlar CT'nin KIBT'ye üstünlüğüdür. KIBT yazılımları artefaktları azaltmaya çalışsa da diagnostik netliği bozan en önemli sınırlamalardan biri olmaya devam etmektedir.

**Soru 2 (ID: 189a0e4b-2e38-418b-9628-71d7852b6f65)**
Soru Kökü: Aşağıdakilerden hangisi dijital planlama ile üretilen cerrahi rehber stentlerin (guided surgery) klinik kullanımının sunduğu temel avantajlardan biri **değildir**?
Doğru Şık (E): KIBT yazılımı ile birleştirildiğinde kemiğin gerçek Hounsfield Ünitesini artırması
Açıklama: Cerrahi stentler (guide) operasyonun invazivliğini azaltarak flepsiz cerrahiyi (punch tekniği) mümkün kılar; bu da kanama, ödem, trismus ve ameliyat süresini düşürür. Ancak Hounsfield Ünitesi (HU) KIBT'nin fiziksel ölçüm mekanizması (x-ışını dağılımı) ile ilgili bir eksikliktir ve stent kullanımı veya yazılım ile gerçek medikal BT'lerdeki gibi standart bir HU ölçümü oluşturulamaz; sadece izafi kemik yoğunluğu (gri skala) değerlendirilebilir.

---

### ÇİFT 11 (Benzerlik: 0.70)

**Soru 1 (ID: 74e2f892-7943-4cbd-a58f-d3ef2f1b48db)**
Soru Kökü: Meziodistal mesafenin 7 mm'den az olduğu ince alveolar kretlerde standart implantlar yerine dar çaplı implantların kullanılması endikedir. Aşağıdakilerden hangisi dar çaplı implant uygulamalarının biyomekanik ve cerrahi dezavantajlarından biri **değildir**?
Doğru Şık (B): Geniş çaplı implantlara kıyasla oklüzal streslere ve makaslama kuvvetlerine karşı toleranslarının artması
Açıklama: Dar çaplı implantların yüzey alanı küçük ve gövdeleri zayıf olduğu için oklüzal kuvvetlere (çiğneme baskısına) toleransları geniş çaplı implantlara göre daha düşüktür; toleranslarının arttığı ifadesi yanlıştır. Çeldirici olan kırılma direnci maddesi doğrudur, zira dar implantlar yapısal olarak standart çaplı olanlara göre mekanik yorgunluğa %25 oranında daha duyarlıdır. Dar implantların birincil kullanım amacı mekanik dayanım sağlamak değil, dar anatomik aralıklara (örneğin alt keser bölgesi) perforasyon yaratmadan sığabilmektir.

**Soru 2 (ID: f62e1f92-9a8e-45e9-a8d9-902a0aaf7d5b)**
Soru Kökü: 60 yaşında erkek hasta, anterior mandibuladaki 5 mm genişliğindeki ince kret üzerine implant yerleştirilmesini talep etmektedir. Kretin horizontal darlığı nedeniyle hekim, standart (4 mm) implant yerine dar çaplı (3 mm) implant kullanımına karar vermiştir. Fiziksel özellikler göz önüne alındığında, bu dar çaplı implantın standart bir implanta kıyasla yüzey alanı ve kırılma direncinde beklenen **yaklaşık** azalma oranı aşağıdakilerden hangisidir?
Doğru Şık (D): %25
Açıklama: İmplant gövdesinin yarıçapı azaldığında, titanyum alaşımının mukavemeti ve osseoentegre olacak dış yüzey alanı asimetrik olarak düşer. Dar çaplı implantlar, ince kretlerde kortikal duvarların perfore olmasını engellemek için mükemmel bir endikasyon olsalar da, standart implantlara göre yüzey alanları ve gövdenin genel kırılma direnci yaklaşık %25 oranında daha düşüktür.

---

### ÇİFT 12 (Benzerlik: 0.70)

**Soru 1 (ID: 6bb98752-f068-4ba0-a35c-4c7c5f389c2f)**
Soru Kökü: Elli yaşındaki kadın hastanın alt çene sol posterior bölgesine implant planlanmaktadır. Çekilen KIBT kesitlerinde kretin oklüzal-apikal vertikal yüksekliğinin ideal olduğu, ancak bukkolingual yönde aşırı derecede daralarak ince sivri bir zirve oluşturduğu izlenmiştir. Cawood ve Howell sınıflamasına göre hastanın sahip olduğu bu kret yapısı aşağıdakilerden hangisidir?
Doğru Şık (B): Sınıf IV - Bıçak sırtı formundaki kret
Açıklama: Cawood ve Howell sınıflamasına göre yükseklik (vertikal) boyutun korunduğu, ancak genişliğin (horizontal) büyük oranda kaybedilerek tepesinin sivrilştiği yapı Sınıf IV 'bıçak sırtı (knife-edge)' kret olarak adlandırılır. Sınıf V (çeldirici) düzleşmiş kreti ifade eder ki burada sadece genişlik değil, yükseklik de önemli oranda yitirilmiştir. Bıçak sırtı kretlerde implantı kemik içinde tutabilmek için genellikle osteotomi öncesi kret tepesinin düzleştirilmesi (redüksiyon) veya split kret (kemik ayırma) cerrahisi gereklidir.

**Soru 2 (ID: de7a4a69-1625-4210-982e-8f0bf9723a10)**
Soru Kökü: 70 yaşında total dişsiz erkek hasta, uzun yıllardır kullandığı alt tam protezinin tutuculuğunun tamamen kaybolması şikayetiyle başvurmuştur. Çekilen radyografide, alveoler proçesin tamamen eridiği, sadece mandibular kanalın altındaki kemiğin kaldığı ve vestibül derinliğin kaybolarak kretin çukurlaşmış (negatif) bir morfoloji aldığı izlenmiştir. Cawood ve Howell alveoler kret sınıflandırmasına göre hastanın mevcut durumu aşağıdakilerden hangisidir?
Doğru Şık (B): Sınıf VI
Açıklama: Cawood ve Howell sınıflamasında Sınıf VI, çeşitli derecelerde bazal kemik kaybını içeren, kas ataşmanlarının tepe noktasına ulaştığı basık, tamamen 'negatif forma sahip' ileri derece atrofik kretleri tanımlar. Sınıf V düzleşmiş kreti ifade ederken, Sınıf VI kemik kaybının bazal yapılara kadar ulaştığı ve kretin anatomik bir kabarıklık olmaktan çıkıp çukurlaştığı en ileri düzey yıkımdır.

---

### ÇİFT 13 (Benzerlik: 0.70)

**Soru 1 (ID: c54457c7-99ba-48dd-b2e0-48a0a92c7db9)**
Soru Kökü: Kırk sekiz yaşındaki kadın hasta, ağız hijyenine dikkat edemediğini ve alt çenesindeki implantının etrafında diş eti kanaması olduğunu şikayet ederek başvurmuştur. Alınan radyografide biyomekanik kırık görülmezken, implantı çevreleyen kemikte sadece servikal bölgeyle sınırlı bir harabiyet fark edilmiştir. Bu bulgular ışığında hastadaki 'peri-implantitis' tablosunun spesifik radyolojik görünümü aşağıdakilerden hangisidir?
Doğru Şık (D): İmplantın koronal (boyun) kısmında izlenen ve yivlerin açığa çıktığı krater formlu radyolüsensi
Açıklama: Kötü plak kontrolü veya aşırı bakteri yüküne bağlı gelişen peri-implantitis vakalarında, enflamasyon gingivadan başlayıp marjinal kemiğe yayıldığı için radyografik olarak implantın koronal (boyun) kısmında çevresel krater (çanak) tarzı radyolüsensi gözlemlenir. Tek taraflı kemik erimesi (çeldirici) peri-implantitis enfeksiyonunu değil, yanlış açılamaya bağlı non-aksiyal biyomekanik kuvvet aşırı yüklenmesini gösterir. Boyun kısmındaki yivlerin açığa çıkması klinik olarak da sondlama derinliğinin artmasıyla doğrulanır.

**Soru 2 (ID: e5912e0e-c46a-4ab5-9cb9-116f82a23f2c)**
Soru Kökü: İmplant cerrahisinden üç ay sonra kontrol için başvuran hastanın radyolojik muayenesinde; implant gövdesi üzerinde herhangi bir kırık ya da protetik abartı saptanmamış, ancak implant gövdesinin kemik içindeki dış yüzünü en baştan en uca kadar saran, çok ince, kesintisiz bir radyolüsent hat (kapsülasyon) fark edilmiştir. Bu bulgu radyolojik olarak hangi tanıyı destekler?
Doğru Şık (B): Primer implant osseointegrasyonunun başarısız olduğunu
Açıklama: İmplantın tüm gövdesini (apikalden krestale kadar) ince, siyah (radyolüsent) bir şerit halinde saran doku hattı, kemik ile titanyum arasında direkt osseointegrasyonun gerçekleşemeyip, araya fibröz bir skar dokusunun (bağ dokusunun) girdiğinin radyolojik patognomonik işaretidir ve total başarısızlıktır. Oklüzal travma/aşırı yük (çeldirici), tüm implant yüzeyinde ince bağ dokusu oluşturmaktan ziyade kuvvet ekseni etrafında asimetrik krestal kemik yıkımına (V şeklinde kayıp) neden olur. Titanyum implantlar sağlıklıysa kök etrafında PDL aralığı gibi bir boşluk asla izlenmez.

---

### ÇİFT 14 (Benzerlik: 0.69)

**Soru 1 (ID: a2b82efc-d81f-46e2-86fc-c3732adcf736)**
Soru Kökü: Panoramik radyografiler implant öncesi temel tarama amacıyla yaygın olarak kullanılsa da, cerrahi şablon oluşturmada tek başına yeterli kabul edilmezler. Panoramik radyografide hangi anatomik verinin elde edilememesi, bu görüntüleme tekniğini implant yerleşimi açısından riskli hale getirir?
Doğru Şık (D): Bukko-lingual kemik genişliği ve alveolar kretin konkaviteleri
Açıklama: Panoramik röntgen filmleri iki boyutludur (sadece mezyodistal ve supero-inferior düzlemleri gösterir). İmplant gövdesinin sığacağı kalınlığı belirleyen bukko-lingual kemik genişliği (kret kalınlığı) veya kemiğin lingual/palatinal andırkatları (konkaviteleri) panoramik röntgende görülemez. Bu kör nokta, cerrahi esnasında kortikal plak perforasyonlarına neden olabilir.

**Soru 2 (ID: f1187b52-7484-4a06-b205-cdbd1d29a3b3)**
Soru Kökü: Alt çene implant planlamasında oklüzal radyografilerin kullanımının sakıncalı olmasının ve güvenilir bilgi sağlamamasının temel radyofiziksel nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Işın projeksiyonunun mandibulanın en geniş kısmı olan alveoler kret inferiorunu yansıtarak bukkolingual genişliği olduğundan fazla göstermesi
Açıklama: Oklüzal radyografiler süpero-inferior (yukarıdan aşağıya) yönde X-ışını hüzmesi alır; bu izdüşümde mandibulanın en geniş taban bölgesi filme yansır ve krestal kısımdaki gerçek bukkolingual (kret tepesi) genişliğinin daraldığı anlaşılamaz. Distorsiyon çeldiricisi maksiller oklüzal filmlerin dezavantajıdır, çünkü maxilla'da tüp açılı gelir. Bu nedenle oklüzal filmler klinisyene kret genişliği hakkında yanıltıcı 'kalın kemik' bilgisi vereceğinden implant dişhekimliğinde kret eni belirlemede kullanılmaz.

---

### ÇİFT 15 (Benzerlik: 0.69)

**Soru 1 (ID: de7a4a69-1625-4210-982e-8f0bf9723a10)**
Soru Kökü: 70 yaşında total dişsiz erkek hasta, uzun yıllardır kullandığı alt tam protezinin tutuculuğunun tamamen kaybolması şikayetiyle başvurmuştur. Çekilen radyografide, alveoler proçesin tamamen eridiği, sadece mandibular kanalın altındaki kemiğin kaldığı ve vestibül derinliğin kaybolarak kretin çukurlaşmış (negatif) bir morfoloji aldığı izlenmiştir. Cawood ve Howell alveoler kret sınıflandırmasına göre hastanın mevcut durumu aşağıdakilerden hangisidir?
Doğru Şık (B): Sınıf VI
Açıklama: Cawood ve Howell sınıflamasında Sınıf VI, çeşitli derecelerde bazal kemik kaybını içeren, kas ataşmanlarının tepe noktasına ulaştığı basık, tamamen 'negatif forma sahip' ileri derece atrofik kretleri tanımlar. Sınıf V düzleşmiş kreti ifade ederken, Sınıf VI kemik kaybının bazal yapılara kadar ulaştığı ve kretin anatomik bir kabarıklık olmaktan çıkıp çukurlaştığı en ileri düzey yıkımdır.

**Soru 2 (ID: f8030e16-aff2-4970-8d69-2904b000922c)**
Soru Kökü: Misch ve Judy'nin dişsiz kretleri değerlendirdiği sınıflandırma sisteminde, mevcut alveolar kemikte önce genişlikte azalma meydana gelen, sonrasında yüksekliğinde de azalmanın eşlik ettiği, tek veya çoklu boyutta yetersizlik gösteren kret yapısı hangi grupta tanımlanmaktadır?
Doğru Şık (A): Div C
Açıklama: Misch ve Judy sınıflamasına göre Div C, alveoler kemiğin tek veya daha fazla boyutunda (genişlik, yükseklik, açı, kuron-kök oranı) klinik olarak yetersiz olduğu ve tipik olarak önce genişliğin ardından yüksekliğin kaybedildiği evredir. Div B sadece orta derecede genişlik kaybı içerirken yüksekliği korunmuş kretleri tarif eder (çeldirici). Sınıf IV ise Cawood ve Howell'a ait bir terim olup bıçak sırtı kreti tanımlar; sınıflama sistemlerinin isimlendirmeleri birbirine karıştırılmamalıdır.

---

