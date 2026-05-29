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

### ÇİFT 1 (Benzerlik: 0.91)

**Soru 1 (ID: 08e6b0f6-343a-4b62-b9a7-255129bbc5fc)**
Soru Kökü: Hematopoetik kök hücrelerden eozinofil serisi hücrelerin oluşumunu spesifik olarak indükleyen interlökin aşağıdakilerden hangisidir?
Doğru Şık (B): IL-5
Açıklama: Hematopoez sırasında IL-5 sitokini spesifik olarak eozinofil oluşumunu uyararak granülopoezi yönlendirir. En güçlü çeldirici olan IL-4 bazofil oluşumunu indüklerken, IL-7 lenfosit proliferasyonunu sağlar. IL-1, IL-3 ve IL-6 ise seriye özgül olmayıp tüm hematopoetik kök hücre proliferasyonunu başlatan temel tetikleyicilerdir.

**Soru 2 (ID: 1b467417-88aa-452e-bd3f-c5b2592c314c)**
Soru Kökü: Hematopoetik kök hücrelerin farklılaşma sürecinde parazitik enfeksiyonlara karşı savunmada rol oynayan eozinofil serisi hücrelerin oluşumunu spesifik olarak indükleyen interlökin aşağıdakilerden hangisidir?
Doğru Şık (B): IL-5
Açıklama: IL-5 spesifik olarak eozinofil oluşumunu indükleyen temel interlökindir. IL-4 bazofil oluşumunu uyarırken, IL-7 T ve B lenfosit proliferasyonunu sağlar. IL-1, IL-3 ve IL-6 ise hematopoetik serinin tamamını indükleyen geniş spektrumlu moleküllerdir.

---

### ÇİFT 2 (Benzerlik: 0.88)

**Soru 1 (ID: de0cc96d-34b9-4530-9c83-f1ce5492626a)**
Soru Kökü: Genetik olarak Protein C eksikliği olduğu bilinen 35 yaşındaki kadın hastaya derin ven trombozu profilaksisi amacıyla warfarin (kumadin) tedavisi başlanıyor. Tedavinin ilk günlerinde hastada ani gelişen ve hızla yayılan kutanöz mikrotrombüsler (kumadin ilişkili purpura fulminans) gözleniyor. Bu klinik tablonun altta yatan temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Kumadinin K vitaminine bağlı antikoagülan Protein C'yi diğer prokoagülanlardan daha hızlı tüketmesi
Açıklama: Kumadin başlandığında hem prokoagülanlar (Faktör 2,7,9,10) hem de antikoagülanlar (Protein C ve S) baskılanır. Ancak Protein C'nin yarı ömrü çok kısadır ve en hızlı o tükenir. Zaten genetik eksikliği olan hastada Protein C hızla sıfırlanırken prokoagülan faktörler (özellikle Faktör 2 ve 10) hala dolaşımda olduğu için geçici ve paradoksal bir 'hiperkoagülabilite' dönemi yaşanarak deride pıhtılar (nekroz) oluşur.

**Soru 2 (ID: e41ad768-8e99-4f13-a35d-b4be036fae4b)**
Soru Kökü: Derin ven trombozu nedeniyle kumadin (warfarin) tedavisi başlanan genetik Protein C eksikliği olan bir hastada, tedavinin ilk günlerinde paradoksal olarak tromboza yatkınlık ve ciltte yaygın nekroz (kumadin ilişkili purpura fulminans) gelişiyor. Bu tablonun fizyopatolojik mekanizması aşağıdakilerden hangisiyle açıklanır?
Doğru Şık (A): Kumadin kullanımında K vitamini bağımlı faktörler içinde en hızlı tükenen proteinin antikoagülan etkili Protein C olması
Açıklama: K vitamini antagonisti olan kumadin kullanımında Faktör 2, 7, 9, 10 ile antikoagülan etkili Protein C ve S sentezi baskılanır; bunlar arasında yarı ömrü en kısa olanlar Faktör VII ve Protein C'dir. Genetik Protein C eksikliği olanlarda ilaç verildiğinde dolaşımdaki sınırlı Protein C hızla tükenirken, prokoagülan faktörler hala kanda bulunduğu için tromboza yatkınlık (purpura fulminans) gelişir. İlaca bağlı geçici hiperkoagülabilitenin temel mekanizması enzimlerin kandaki yarı ömür farklılıklarından kaynaklanan bu dengesizliktir.

---

### ÇİFT 3 (Benzerlik: 0.86)

**Soru 1 (ID: 6dbc0f78-5f77-4251-a88e-ae94f85862bd)**
Soru Kökü: Fetal gelişimin ilk evrelerinde izlenen ve iki zeta (ζ) ile iki gama (γ) polipeptit zincirinin birleşmesiyle yapısal bütünlük kazanan embriyonik hemoglobin tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Hemoglobin Portland
Açıklama: Hemoglobin Portland, embriyonik gelişim sırasında izlenen ve ζ2-γ2 formülüne sahip olan hemoglobin alt tipidir. Hemoglobin Gower (ζ2-ε2) ile karıştırılmamalıdır; Gower'da epsilon zinciri bulunurken Portland'da gama zinciri mevcuttur. Bu hemoglobinlerin sentezi ekstra-medüller hematopoez dönemi ilerledikçe sonlanır ve yerini tamamen fetal hemoglobine (HbF) bırakır.

**Soru 2 (ID: 95abcd86-6d03-4654-af89-80083596a983)**
Soru Kökü: Embriyonik yaşamın erken dönemlerinde yolk-sac mezoderminde başlayan megaloblastik eritropoez sırasında sentezlenen ve iki zeta (ζ) ile iki epsilon (ε) zincirinden oluşan hemoglobin alt tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Hemoglobin Gower
Açıklama: Hemoglobin Gower, embriyonik yaşamda fizyolojik olarak üretilen ve iki zeta ile iki epsilon (ζ2-ε2) polipeptit zincirinden oluşan ilk hemoglobin tipidir. Hemoglobin Portland da embriyoniktir ancak yapısında epsilon yerine gama zincirleri (ζ2-γ2) bulunur. Fetal hemoglobin (HbF) ise karaciğer ve dalak periyodunda sentezlenmeye başlar ve alfa-gama (α2-γ2) zincirlerini içerir.

---

### ÇİFT 4 (Benzerlik: 0.84)

**Soru 1 (ID: 56a99e4b-22db-4d6e-8260-82a17c757b4d)**
Soru Kökü: Edinsel bağışıklık sisteminde antijen sunan hücrelerle etkileşime girdikten sonra salgıladığı İnterlökin-2 (IL-2), interferon-gama ve lenfotoksin (TNF-β) aracılığıyla spesifik olarak hücresel immüniteyi tetikleyen lenfosit alt tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Yardımcı T lenfositleri Tip 1 (TH1)
Açıklama: Yardımcı T lenfositleri Tip 1 (TH1), esas olarak hücresel immüniteyi aktive eder ve IL-2 ile interferon-gama sentezleyerek sitotoksik T hücrelerinin ve makrofajların aktivitesini artırır. TH2 hücreleri ise IL-4 ve IL-5 üzerinden humoral (antikor) yanıtı uyarır. Her iki T yardımcı hücre tipi de immün sistemin organizatörleri olarak farklı sitokin profillerine sahiptir.

**Soru 2 (ID: 710fb77f-b2f9-4171-8abc-a2c2bc612181)**
Soru Kökü: Hücresel immünitede görev alan ve salgıladığı IL-2, interferon-gama ve lenfotoksin (TNF-beta) aracılığıyla diğer lenfositlerin proliferasyonunu uyaran hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (D): Tip 1 Yardımcı T lenfosit (TH1)
Açıklama: Tip 1 Yardımcı T lenfositleri (TH1), IL-2, interferon-gama ve lenfotoksin (TNF-beta) salgılayarak diğer T lenfositlerin proliferasyonunu uyarır ve hücresel immüniteyi yönetir. TH2 hücreleri ise IL-4, IL-5 ve IL-6 salgılayarak B lenfositleri aktive eder ve humoral (antikor aracılı) immüniteden sorumlu yolağı tetikler. Doğal öldürücü hücreler (NK) antijene özgül olmayan direkt lizis yaparken, sitotoksik T hücreleri hücresel immünitenin efektör elemanlarıdır.

---

### ÇİFT 5 (Benzerlik: 0.83)

**Soru 1 (ID: 6f5c5a73-9e00-4083-81d9-e2e7d848818a)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, diş çekimi sonrası durmayan kanama şikayetiyle başvuruyor. Laboratuvar testlerinde PT ve aPTT normal, kanama zamanı 12 dakika (uzamış) bulunuyor. 
Bu hastada trombositlerin subendotelyal kolajene tutunmasını (adezyon) sağlayan Weibel-Palade cisimciği kaynaklı molekülün bağlandığı reseptör aşağıdakilerden hangisidir?
Doğru Şık (A): Gp Ib/IX
Açıklama: Endotel hücrelerindeki Weibel-Palade cisimciklerinden salınan von Willebrand Faktör (vWF), trombosit yüzeyindeki Gp Ib/IX reseptörüne bağlanarak trombosit adezyonunu sağlar. Gp IIb/IIIa trombositlerin fibrinojen köprüleriyle birbirine bağlanması (agregasyon) için kullanılırken, Gp Ia/IIa kollajene direkt bağlanma reseptörüdür.

**Soru 2 (ID: bda4ade6-74ac-4975-a72a-4bef8ce6621b)**
Soru Kökü: 18 yaşında kadın hasta, diş çekimi sonrası durmayan kanama şikayetiyle kliniğe başvuruyor. Yapılan hemostaz testlerinde, trombosit sayısının normal olduğu ancak endotel hasar bölgesinde trombositlerin von Willebrand Faktörüne (vWF) tutunamadığı saptanıyor. Bu hastada aşağıdaki trombosit yüzey reseptörlerinden hangisinin kalıtsal eksikliği en olasıdır?
Doğru Şık (A): Gp Ib/IX
Açıklama: Primer hemostaz sırasında trombositlerin subendotelyal dokudan açığa çıkan von Willebrand Faktörüne (vWF) bağlanarak adezyon yapmasını sağlayan reseptör Gp Ib/IX kompleksidir. En sık karıştırılan reseptör olan Gp IIb/IIIa ise fibrinojen aracılığıyla trombositlerin birbirine bağlanmasını (agregasyon) sağlar. Gp Ia/IIa kollajene direkt tutunmadan sorumlu iken, trombomodulin endotelden salgılanan bir antikoagülan faktördür.

---

### ÇİFT 6 (Benzerlik: 0.82)

**Soru 1 (ID: 40f18455-b009-4440-bc1b-bf4f17ca321d)**
Soru Kökü: Yenidoğan bir bebekte göbek bağının düşmesinin ardından durmayan sızıntı şeklinde kanama şikayeti izleniyor. Laboratuvar değerlendirmesinde PT (Protrombin Zamanı) ve aPTT (Aktive Parsiyel Tromboplastin Zamanı) değerleri ile trombosit sayısı normal bulunuyor. 
Bu klinik tablodan sorumlu olan pıhtılaşma faktörü eksikliği ve görevi aşağıdakilerden hangisidir?
Doğru Şık (E): Faktör XIII - Fibrin lifleri arasında çapraz bağlar kurmak
Açıklama: Hastada kanama olmasına rağmen PT ve aPTT testleri normal ise, sorun ekstrensek, intrensek veya ortak yolda değil, fibrin polimerlerinin stabilizasyonundadır. Faktör XIII eksikliğinde fibrin çapraz bağları oluşamaz ve pıhtı mekanik olarak çok zayıf kalır. Durmayan göbek bağı kanaması, normal testlere rağmen FXIII eksikliğinin tipik klinik prezentasyonudur.

**Soru 2 (ID: eff41dc0-6d25-4569-81e9-d52554f59c5c)**
Soru Kökü: On günlük yenidoğan, göbek kordonu düştükten sonra durmayan sızıntı şeklindeki kanama nedeniyle kliniğe getiriliyor. Yapılan testlerde kanama zamanı, protrombin zamanı (PT) ve aPTT tamamen normal bulunuyor. Fibrin monomerleri arasında çapraz bağlar kurulamamasına bağlı olduğu düşünülen bu klinik tabloda en olası faktör eksikliği aşağıdakilerden hangisidir?
Doğru Şık (D): Faktör XIII
Açıklama: PT ve aPTT'nin normal olduğu fakat fibrin tıkacın stabil olmadığı (çapraz bağların kurulamadığı) spesifik klinik durum Faktör XIII eksikliğidir. Faktör 8, 9 veya vWF eksikliklerinde aPTT veya kanama zamanı uzamış olmalıdır. Klasik klinik prezentasyon yenidoğanda inatçı göbek güdüğü kanaması veya geç cerrahi kanamadır.

---

### ÇİFT 7 (Benzerlik: 0.82)

**Soru 1 (ID: 9f55929b-8c56-492a-a66b-d11331233e10)**
Soru Kökü: Akut bakteriyel enfeksiyonlarda nötrofillerin "solunum patlaması" mekanizmasında görev alan ve eksikliği kronik granülomatöz hastalığa neden olan bakterisidal radikal molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Süperoksit anyonu
Açıklama: Nötrofillerin solunum patlaması sırasında ürettiği ve bakterisidal etki gösteren temel maddeler süperoksit anyonu (O2-), hidrojen peroksit ve hipoklorittir. Kronik granülomatöz hastalıkta nötrofiller yeterli süperoksit anyonu üretemez ve fagositozla alınan bakteriler öldürülemez. Defensinler ise bu serbest radikal yolağından bağımsız olarak çalışan küçük peptid yapılı enzimlerdir.

**Soru 2 (ID: ae80631f-d8c6-4d2e-b9ab-1ae2474dec9b)**
Soru Kökü: Kronik granülomatöz hastalığı olan bir çocukta nötrofillerin fagositoz yapabilmesine rağmen yuttukları bakterileri öldüremediği saptanıyor. Bu patogenezin temelinde, nötrofillerin solunum patlaması (respiratory burst) mekanizmasında aşağıdaki radikallerden hangisinin yetersiz üretimi yatmaktadır?
Doğru Şık (C): Süperoksit anyonu (O2-)
Açıklama: Nötrofillerin solunum patlaması (respiratory burst) mekanizmasında fagosite edilen bakterileri öldürmek için NADPH oksidaz aracılığıyla yüksek miktarda süperoksit anyonu (O2-) üretilir. Kronik granülomatöz hastalıklarda bu enzim sistemindeki defekt nedeniyle O2- üretilemez, böylece hidroksil radikali ve hipoklorit gibi toksik ürünler sentezlenemez. Fagositoz normal işlese de intraselüler mikrobisidal yıkım başarısız olur.

---

### ÇİFT 8 (Benzerlik: 0.82)

**Soru 1 (ID: e41ad768-8e99-4f13-a35d-b4be036fae4b)**
Soru Kökü: Derin ven trombozu nedeniyle kumadin (warfarin) tedavisi başlanan genetik Protein C eksikliği olan bir hastada, tedavinin ilk günlerinde paradoksal olarak tromboza yatkınlık ve ciltte yaygın nekroz (kumadin ilişkili purpura fulminans) gelişiyor. Bu tablonun fizyopatolojik mekanizması aşağıdakilerden hangisiyle açıklanır?
Doğru Şık (A): Kumadin kullanımında K vitamini bağımlı faktörler içinde en hızlı tükenen proteinin antikoagülan etkili Protein C olması
Açıklama: K vitamini antagonisti olan kumadin kullanımında Faktör 2, 7, 9, 10 ile antikoagülan etkili Protein C ve S sentezi baskılanır; bunlar arasında yarı ömrü en kısa olanlar Faktör VII ve Protein C'dir. Genetik Protein C eksikliği olanlarda ilaç verildiğinde dolaşımdaki sınırlı Protein C hızla tükenirken, prokoagülan faktörler hala kanda bulunduğu için tromboza yatkınlık (purpura fulminans) gelişir. İlaca bağlı geçici hiperkoagülabilitenin temel mekanizması enzimlerin kandaki yarı ömür farklılıklarından kaynaklanan bu dengesizliktir.

**Soru 2 (ID: f59b59c4-ebb7-4065-b548-986842e7d769)**
Soru Kökü: Atriyal fibrilasyon nedeniyle warfarin (kumadin) tedavisine başlanan hastada, ilacın kullanımını izleyen ilk günlerde ciltte yaygın mikrotrombüslere bağlı cilt nekrozu (purpura fulminans) gelişmiştir. 
Bu paradoksal trombotik yan etkinin fizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Antikoagülan etkili Protein C'nin diğer faktörlerden daha hızlı tükenmesi
Açıklama: Warfarin; 2, 7, 9, 10 nolu prokoagülan faktörler ile Protein C ve S gibi antikoagülan faktörlerin sentezini bloke eder. Protein C'nin yarı ömrü, prokoagülan pıhtılaşma faktörlerinin çoğundan (özellikle Faktör 2, 9, 10) çok daha kısadır. Bu yüzden tedavi başlandığında antikoagülan Protein C hızla tükenir, ortamda halen var olan uzun ömürlü faktörlerin baskın etkisiyle geçici bir hiperkoagülabilite ve tromboz oluşur.

---

### ÇİFT 9 (Benzerlik: 0.82)

**Soru 1 (ID: 8bb5b88d-97cd-4900-a1dd-f961b8ae10b3)**
Soru Kökü: Solunum sisteminde dokulardan alınan karbondioksitin akciğerlere taşınmasında klor kayması (chloride shift) mekanizması kritik rol oynar. Eritrosit zarında Cl- ve HCO3- iyonlarının karşılıklı değişimini gerçekleştiren ve hücre iskeletinde ankyrin'e tutunan bu protein aşağıdakilerden hangisidir?
Doğru Şık (E): Band 3
Açıklama: Band 3 (anyon değiştirici protein), hücresel solunumda bikarbonatın hücre dışına çıkıp klorun hücre içine girdiği klor kayması reaksiyonunu katalize eden spesifik transmembran kanalıdır. Bu protein aynı zamanda ankyrin üzerinden spektrine bağlanarak membranı sabitler. Aktin ve tropomyozin sitoskeleton bileşenleridir.

**Soru 2 (ID: ea31f500-90fa-4f79-b4ac-5a97073224f6)**
Soru Kökü: Eritrosit membranında yer alan ve klor kayması (chloride shift) mekanizmasında klor ile bikarbonat iyonlarının yer değiştirmesini sağlayan integral protein aşağıdakilerden hangisidir?
Doğru Şık (D): Band 3
Açıklama: Band 3 proteini, eritrosit membranında yer alan ve klor ile bikarbonat (Cl-/HCO3-) yer değişimini (klor kayması) yürüten temel anyon değiştirici integral proteindir. Diğer şıklardaki spektrin ve ankyrin hücre iskeletini sağlayan periferal proteinler olup iyon transportunda görev almazlar. Kan grubunu belirleyen yapı ise glikoforinlerdir.

---

### ÇİFT 10 (Benzerlik: 0.81)

**Soru 1 (ID: c26ca845-7686-4509-af28-faf6ccc63773)**
Soru Kökü: İnflamasyon durumunda mononükleer fagositer sistemin oluşturduğu savunma yanıtının ardışık sıralaması aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Sabit doku makrofajları -> Nötrofil yayılımı -> Sekonder makrofaj yayılımı -> Kemik iliği uyarımı
Açıklama: İnflamasyonda ilk savunma hattını dokuda zaten hazır bulunan sabit makrofajlar oluşturur. İkinci hatta kan dolaşımından inflamasyon alanına nötrofil akını gerçekleşir. Üçüncü hatta kandan monositlerin dokuya geçip makrofaja dönüşmesiyle sekonder makrofaj yayılımı olur. Dördüncü hatta ise sitokinlerle uyarılan kemik iliği yeni lökositler üretir.

**Soru 2 (ID: ece5856d-0e56-4ccf-951f-7694f19c9c83)**
Soru Kökü: İnflamasyon gelişen bir dokuda mononükleer fagositer sistemin oluşturduğu savunma hatları incelendiğinde, "ikinci savunma hattını" oluşturan fizyolojik olay aşağıdakilerden hangisidir?
Doğru Şık (E): İnflamasyonlu alana nötrofil yayılımı ve kanda nötrofil artışı
Açıklama: İnflamasyon alanındaki mononükleer fagositer savunma sisteminde nötrofillerin bölgeye yayılması ve kandaki sayılarının artması ikinci savunma hattını oluşturur. İlk hat dokularda halihazırda sabit bulunan (rezidan) makrofajların aktivasyonudur. Üçüncü hat sekonder makrofaj yayılımı iken, dördüncü ve en geç hat kemik iliğinden yeni granülosit ve monosit yapımının uyarılmasıdır.

---

### ÇİFT 11 (Benzerlik: 0.81)

**Soru 1 (ID: 08c5ba14-c220-4623-a1b5-95fd6b04caa1)**
Soru Kökü: Eritrosit membranının esnekliğini sağlayarak bikonkav disk şeklini koruyan, gen defekti sonucunda herediter sferositoz tablosuna yol açan periferal protein aşağıdakilerden hangisidir?
Doğru Şık (D): Spektrin
Açıklama: Spektrin, eritrosit membranının iskelet yapısını destekleyen ve elastikiyetini sağlayan en önemli periferal proteindir. Band 4.1 proteini defekti herediter eliptositoza yol açarken, spektrin defekti hücrenin yuvarlaklaşıp sferositoz formunu almasına neden olur. Glikoforinler ise yapısal elastikiyetten ziyade kan gruplarını belirleyen integral proteinlerdir.

**Soru 2 (ID: 4e87225b-3b5d-496c-8844-5f19ed5b4673)**
Soru Kökü: 24 yaşında erkek hasta, halsizlik ve sarılık şikayetiyle başvuruyor. Laboratuvar incelemesinde mikrositik anizositoz ve artmış poikilositoz saptanıyor. Periferik yaymada eritrositlerin bikonkav disk şeklini kaybettiği ve küresel bir form aldığı (sferositoz) gözleniyor. Bu hastanın eritrosit membranında, elastikiyeti sağlayan hangi proteinin gen defekti en olasıdır?
Doğru Şık (C): Spektrin
Açıklama: Eritrositin esnekliğini ve bikonkav disk formunu korumasını sağlayan en önemli periferal iskelet proteini spektrindir. Spektrin gen defektinde hücre membranı elastikiyetini kaybederek sferik bir hal alır ve herediter sferositoz kliniği ortaya çıkar. Benzer iskelet proteinlerinden Band 4.1 defekti ise yuvarlak değil, eliptik hücre formasyonuna (herediter eliptositoz) yol açar.

---

### ÇİFT 12 (Benzerlik: 0.80)

**Soru 1 (ID: 19ff548d-1863-404c-8b2e-8034fe1ef367)**
Soru Kökü: Hücre zarında MHC Sınıf I protein kompleksini sergileyen virüsle enfekte olmuş somatik hücreleri ve malign tümör hücrelerini tespit eden, ardından hedef hücre zarına 'perforin' yerleştirerek lizozomal enzimleri aracılığıyla bu hücreleri tahrip eden lökosit alt tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Sitotoksik T lenfosit
Açıklama: Sitotoksik T lenfositleri (CD8+), MHC-I reseptörü eksprese eden enfekte veya malign hücrelere bağlanır ve en önemli sitotoksik proteini olan perforini salgılayarak hedef hücre zarında delikler açar; böylece hücreyi içten dışa yıkıma (lizis) uğratır. Doğal katil (NK) hücreler de benzer mekanizmayı MHC'den bağımsız olarak kullanırken, spesifik hücresel immünite tamamen Sitotoksik T hücreleri üzerinden yürür.

**Soru 2 (ID: 81f23677-43b2-4ed1-8d89-53e8b343b9b3)**
Soru Kökü: Malign değişime giden tümör hücrelerini veya virüsle infekte hücreleri, spesifik T ve B lenfosit yanıtı oluşmadan önce "MHC-I" yüzey proteinlerine bağlanarak tanıyan ve perforin salgılayarak doğrudan yok eden öncü savunma hücresi aşağıdakilerden hangisidir?
Doğru Şık (D): Natural Killer (NK) hücresi
Açıklama: Doğal Öldürücü (NK) hücreler, spesifik bir B veya T lenfosit antijen yanıtını beklemeksizin MHC-I moleküllerini hedef alarak malignitelere ve viral enfeksiyonlara karşı en erken hattan saldıran granüler lenfositlerdir. Hedef hücre zarına bağlandıktan sonra salgıladıkları perforin aracılığıyla litik delikler açarak lizozomal tahribat yaparlar. Makrofajlar ve nötrofiller ise fagositozla hücre içi sindirim yaparken, plazma hücreleri humoral immünite için antikor sentezler.

---

### ÇİFT 13 (Benzerlik: 0.80)

**Soru 1 (ID: 937ca195-7860-42fa-a55b-f5caae793c09)**
Soru Kökü: I. Eritropoietin sentezi artışı
II. Periferik vazodilatasyon
III. Kardiyak debi artışı

Yukarıdakilerden hangileri sistemik anemi gelişen bir hastada doku hipoksisini önlemek amacıyla vücudun başvurduğu fizyolojik adaptasyon mekanizmalarındandır?
Doğru Şık (D): I, II ve III
Açıklama: Anemi varlığında vücut doku oksijenasyonunu sağlamak için çeşitli mekanizmaları devreye sokar. Hipoksi, böbrekten eritropoietin salgısını artırarak kemik iliğini uyarır. Doku hipoksisini önleyen en önemli ve hızlı faktör kardiyak debi artışıdır; ayrıca organların kanlanmasını artırmak için periferik vazodilatasyon da bu tabloya eşlik eder.

**Soru 2 (ID: c2d2da6c-f244-4114-9d36-d4953b7747ee)**
Soru Kökü: İleri derece anemi gelişen bir hastada doku hipoksisini önlemek amacıyla vücudun geliştirdiği kompanzasyon mekanizmalarıyla ilgili;
I. Böbrek ve karaciğerden Eritropoietin (EPO) salınımının azalması
II. Kardiyak debinin (kalp atım hacminin) artması
III. Hipoksi uyarıcı faktör-1 (HIF-1) aktivasyonu
IV. Periferik vazokonstriksiyon gelişmesi
ifadelerinden hangileri doğrudur?
Doğru Şık (C): II ve III
Açıklama: Anemi varlığında doku hipoksisini önlemek için devreye giren en önemli ve hızlı kompanzasyon mekanizması kardiyak debinin (kalp atım hacminin) artması ve periferik vazodilatasyondur. Ayrıca renal hipoksi sebebiyle böbrekten hipoksi uyarıcı faktör-1 (HIF-1) aracılığıyla Eritropoietin (EPO) sentezi azalmaz, aksine dramatik olarak artar. Vazokonstriksiyon doku oksijenasyonunu daha da bozacağı için anemide beklenen bir adaptasyon değildir.

---

### ÇİFT 14 (Benzerlik: 0.80)

**Soru 1 (ID: 4495de19-522c-4a94-8611-f7311daee9a1)**
Soru Kökü: Sekiz yaşındaki erkek çocuk travma olmaksızın diz ekleminde gelişen şişlik ve kanama (hemartroz) ile getiriliyor. Tetkiklerinde Kanama zamanı normal, Protrombin Zamanı (PT) normal, ancak aPTT belirgin uzamış olarak saptanıyor. 
Klinik bulgular ışığında, hastanın koagülasyon kaskadında eksikliği olan molekül ve ilgili hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Faktör VIII eksikliği - Hemofili A
Açıklama: PT testinin normal, aPTT'nin uzamış olması sorunun sadece intrensek yolağı ilgilendiren bir faktör eksikliğinde olduğunu kanıtlar. İntrensek yolda görev alan Faktör VIII eksikliği Hemofili A tablosuna neden olur. PT bozuk olsaydı Faktör VII; kanama zamanı bozuk olsaydı trombosit disfonksiyonu (Glanzmann) düşünülürdü.

**Soru 2 (ID: 9534be43-0ddc-471b-bfd4-bdf51c703f17)**
Soru Kökü: 8 yaşında erkek çocuğu, düşme sonrası diz ekleminde gelişen masif hemartroz ile acil servise getiriliyor. Pıhtılaşma testlerinde Protrombin Zamanı (PT) normal, aktive Parsiyel Tromboplastin Zamanı (aPTT) ise belirgin olarak uzamış bulunuyor. Hastanın klinik tablosu göz önüne alındığında, aşağıdaki pıhtılaşma faktörlerinden hangisinin eksikliği **en az olasıdır**?
Doğru Şık (C): Faktör VII
Açıklama: Hastada Protrombin Zamanı (PT) normal, aPTT uzun bulunduğuna göre patoloji ekstrensek yolu es geçip sadece intrensek yolu etkileyen faktörlerden kaynaklanmaktadır (örn. Hemofili A - Faktör VIII veya Hemofili B - Faktör IX). Ekstrensek yolun temel başlatıcısı olan Faktör VII eksik olsaydı PT belirgin şekilde uzamış olurdu. Faktör XI ve XII de intrensek yol elemanları olduğu için eksikliklerinde aPTT uzaması beklenir.

---

### ÇİFT 15 (Benzerlik: 0.80)

**Soru 1 (ID: 844f8ca4-4c7e-48c9-a5a1-2b671b80ae29)**
Soru Kökü: Yardımcı T lenfositleri (TH1), makrofajları aktive etmek ve hücresel bağışıklığı güçlendirmek için spesifik bir mediyatör kokteyli sentezlerler. Aşağıdakilerden hangisi TH1 lenfositleri tarafından salgılanan faktörlerden biri **değildir**?
Doğru Şık (B): İnterlökin-4 (IL-4)
Açıklama: İnterlökin-4 (IL-4), TH1 tarafından değil, humoral immüniteyi stimüle eden TH2 lenfositleri tarafından salgılanır. TH1 lenfositlerinin temel sekretuvar ürünleri interlökin-2 (IL-2), interferon-gama (IFN-γ) ve lenfotoksindir (TNF-β). Bu sitokin farkı, immün sistemin virüslere karşı hücresel (TH1) veya bakterilere karşı antikor aracılı (TH2) yanıt oluşturmasını belirleyen kritik makastır.

**Soru 2 (ID: bad4db14-2f3b-4c7f-b1e0-3ffda8a1ac31)**
Soru Kökü: Humoral bağışıklığın sürdürülmesi ve plazma hücrelerinden antikor sentezinin indüklenmesi B lenfosit uyarıcı faktörlerin varlığına bağlıdır. Aşağıdakilerden hangisi B lenfosit aktivasyonu amacıyla TH2 hücrelerinden salgılanan interlökinlerden biri **değildir**?
Doğru Şık (C): İnterlökin-2
Açıklama: İnterlökin-2 (IL-2), esas olarak TH1 hücrelerinden salgılanır ve T lenfositlerinin (özellikle sitotoksik ve supressör T hücrelerinin) kendi kendine büyüme ve çoğalmalarını uyarır. TH2 hücreleri humoral immüniteyi yönetirken IL-4, IL-5 ve IL-6 salgılayarak B lenfositlerin çoğalma ve antikor üretme kapasitesini artırırlar.

---

### ÇİFT 16 (Benzerlik: 0.80)

**Soru 1 (ID: 60f11e0f-6c2c-41c2-b27f-0705a7ce2af6)**
Soru Kökü: Yardımcı T (CD4) lenfositlerinin alt grupları olan Th1 ve Th2'nin salgıladıkları interlökin profilleri farklıdır. 
Aşağıdakilerden hangisi doğrudan Th2 lenfositler tarafından salgılanan ve B lenfositleri uyararak hümoral immüniteyi tetikleyen sitokinlerden biridir?
Doğru Şık (A): IL-4
Açıklama: Th2 lenfositler IL-4, IL-5 ve IL-6 salgılayarak B lenfosit uyarıcı faktörleri oluştururlar ve hümoral immüniteyi yönlendirirler. IL-2, İnterferon-gama ve lenfotoksin (TNF-beta) ise Th1 lenfositlerin salgıladığı ve hücresel immüniteyi indükleyen moleküllerdir.

**Soru 2 (ID: bad4db14-2f3b-4c7f-b1e0-3ffda8a1ac31)**
Soru Kökü: Humoral bağışıklığın sürdürülmesi ve plazma hücrelerinden antikor sentezinin indüklenmesi B lenfosit uyarıcı faktörlerin varlığına bağlıdır. Aşağıdakilerden hangisi B lenfosit aktivasyonu amacıyla TH2 hücrelerinden salgılanan interlökinlerden biri **değildir**?
Doğru Şık (C): İnterlökin-2
Açıklama: İnterlökin-2 (IL-2), esas olarak TH1 hücrelerinden salgılanır ve T lenfositlerinin (özellikle sitotoksik ve supressör T hücrelerinin) kendi kendine büyüme ve çoğalmalarını uyarır. TH2 hücreleri humoral immüniteyi yönetirken IL-4, IL-5 ve IL-6 salgılayarak B lenfositlerin çoğalma ve antikor üretme kapasitesini artırırlar.

---

### ÇİFT 17 (Benzerlik: 0.80)

**Soru 1 (ID: 659703aa-e7ae-4f54-8433-14f4a27c9fa7)**
Soru Kökü: Diş eti kanaması şikayetiyle gelen 45 yaşında erkek hastanın koagülasyon testlerinde hem PT (Protrombin Zamanı) hem de aPTT (aktive Parsiyel Tromboplastin Zamanı) testlerinin normalden uzun olduğu, ancak kanama zamanının normal sınırlarda olduğu görülüyor. Bu hastada koagülasyon kaskadında "ortak yolda" yer alan ve aktivasyonunda kalsiyum ile Faktör V'in kofaktör olarak kullanıldığı enzimin eksikliği düşünülmektedir. Tanımlanan bu pıhtılaşma faktörü aşağıdakilerden hangisidir?
Doğru Şık (C): Faktör X
Açıklama: İntrensek ve ekstrensek yolların birleştiği koagülasyon kaskadı "ortak yolu", Faktör X'un aktive olmasıyla başlar ve kalsiyum ile Faktör V eşliğinde "protrombin aktivatörünü" oluşturur. Hem PT hem de aPTT testinin birlikte uzaması, patolojinin bu ortak hedefte (Faktör X, V, II veya Fibrinojen) olduğuna işaret eder. Faktör VII sadece PT'yi, Faktör VIII, XI ve XII ise sadece aPTT'yi uzatan yolağa özgü proteinlerdir.

**Soru 2 (ID: 8b1dc325-4848-4c59-83d3-93615e464677)**
Soru Kökü: Kırk beş yaşında erkek hasta, diş çekimi sonrası uzayan sızıntı şikayetiyle başvuruyor. Laboratuvar tetkiklerinde kanama zamanı ve aPTT normal sınırlarda iken, protrombin zamanı (PT) belirgin olarak uzun bulunuyor. Bu hastada doku faktörüyle aktive olan yolakta yer alan hangi faktörün eksikliği en olasıdır?
Doğru Şık (A): Faktör VII
Açıklama: Protrombin zamanı (PT) ekstrensek yolu ölçerken, aPTT intrensek yolu ölçer. PT'nin tek başına uzaması, ortak yol (Faktör X, V, II, I) sağlam olduğuna göre sadece ekstrensek kola özgü olan Faktör VII eksikliğinde veya inhibisyonunda (erken kumadin etkisi) görülür. Faktör 8 ve 9 intrensek kolda yer aldığı için eksikliklerinde PT normal, aPTT uzamış olur.

---

### ÇİFT 18 (Benzerlik: 0.80)

**Soru 1 (ID: 6c7604ea-a423-4433-b426-2d73a666923c)**
Soru Kökü: Granülopoez yaklaşık 14 gün süren ardışık bir olgunlaşma ve farklılaşma sürecidir. Bu seride parçalı lökositlerin öncül hücresi olan ve granül sentezinin henüz başlamadığı ilk ilkel evre aşağıdakilerden hangisidir?
Doğru Şık (B): Myeloblast
Açıklama: Granülopoezin en erken başlangıç hücresi myeloblasttır ve henüz granül barındırmaz. Bir sonraki evre olan promyelositte nonspesifik, myelositte ise spesifik granüllerin sentezi başlar. Band myelosit dolaşıma çıkmaya en yakın ara formdur.

**Soru 2 (ID: b700f5bf-ef0f-4f27-a311-89cc0e323106)**
Soru Kökü: Granülopoez sırasında mitozun hücresel olarak durduğu ve nötrofil, eozinofil, bazofil şeklindeki lökosit isimlendirmelerinin diferansiye olmaya başladığı ilk evre aşağıdakilerden hangisidir?
Doğru Şık (D): Metamyelosit
Açıklama: Metamyelosit evresi, granülosit hücresinin mitoz yeteneğini tamamen kaybettiği olgunlaşma aşamasıdır ve lökositlerin nihai isimlendirilmesi (nötrofilik, eozinofilik vs.) bu evreden itibaren netleşir. Myelosit evresinde spesifik granüllerin yapımı başlamış olsa da hücre halen mitoz geçirmektedir.

---

### ÇİFT 19 (Benzerlik: 0.80)

**Soru 1 (ID: 8cde0a24-882c-4b3e-8f68-1eb8dd3409fa)**
Soru Kökü: Dört yaşında erkek çocuk, tekrarlayan stafilokokal deri abseleri nedeniyle inceleniyor. Yapılan testlerde nötrofillerin bakterileri başarılı şekilde fagolizozoma aldığı, ancak enzim eksikliği nedeniyle 'solunum patlaması' gerçekleştiremediği ve bakterisidal etki oluşturamadığı saptanıyor. Bu hastanın granülositleri tarafından üretimi aksayan kritik molekül aşağıdakilerden hangisidir?
Doğru Şık (B): Süperoksit anyonu
Açıklama: Solunum patlaması (respiratory burst), nötrofillerin fagosite ettiği patojenleri öldürmek için NADPH oksidaz enzimini kullanarak süperoksit anyonları (O2-) ve hidrojen peroksit gibi reaktif oksijen ürünleri sentezlemesidir. Kronik granülomatöz hastalık gibi tablolarda bu anyonlar üretilemez ve fagositoz gerçekleşse bile patojen öldürülemez. Histamin ve bradikinin ise vazodilatör/inflamatuar mediyatörler olup hücre içi sindirimde yer almazlar.

**Soru 2 (ID: ae80631f-d8c6-4d2e-b9ab-1ae2474dec9b)**
Soru Kökü: Kronik granülomatöz hastalığı olan bir çocukta nötrofillerin fagositoz yapabilmesine rağmen yuttukları bakterileri öldüremediği saptanıyor. Bu patogenezin temelinde, nötrofillerin solunum patlaması (respiratory burst) mekanizmasında aşağıdaki radikallerden hangisinin yetersiz üretimi yatmaktadır?
Doğru Şık (C): Süperoksit anyonu (O2-)
Açıklama: Nötrofillerin solunum patlaması (respiratory burst) mekanizmasında fagosite edilen bakterileri öldürmek için NADPH oksidaz aracılığıyla yüksek miktarda süperoksit anyonu (O2-) üretilir. Kronik granülomatöz hastalıklarda bu enzim sistemindeki defekt nedeniyle O2- üretilemez, böylece hidroksil radikali ve hipoklorit gibi toksik ürünler sentezlenemez. Fagositoz normal işlese de intraselüler mikrobisidal yıkım başarısız olur.

---

### ÇİFT 20 (Benzerlik: 0.79)

**Soru 1 (ID: 08c5ba14-c220-4623-a1b5-95fd6b04caa1)**
Soru Kökü: Eritrosit membranının esnekliğini sağlayarak bikonkav disk şeklini koruyan, gen defekti sonucunda herediter sferositoz tablosuna yol açan periferal protein aşağıdakilerden hangisidir?
Doğru Şık (D): Spektrin
Açıklama: Spektrin, eritrosit membranının iskelet yapısını destekleyen ve elastikiyetini sağlayan en önemli periferal proteindir. Band 4.1 proteini defekti herediter eliptositoza yol açarken, spektrin defekti hücrenin yuvarlaklaşıp sferositoz formunu almasına neden olur. Glikoforinler ise yapısal elastikiyetten ziyade kan gruplarını belirleyen integral proteinlerdir.

**Soru 2 (ID: e8206ebb-78b3-4afc-a9f9-a39f608f67cd)**
Soru Kökü: Eritrositlerin mikrosirkülasyondaki kılcal damarlardan geçerken bikonkav disk şeklini koruyabilmesi, hücre iskeleti bütünlüğü ile doğrudan ilişkilidir. Eritrosit hücre zarı proteinlerini (özellikle Band 3) alttaki spektrin ağına bağlayarak köprü görevi gören periferal protein aşağıdakilerden hangisidir?
Doğru Şık (A): Ankrin
Açıklama: Ankrin (ankyrin), hücre zarında asılı duran integral proteinleri (Band 3 gibi) hücre içindeki spektrin ağına lehimleyen çok kritik bir bağlayıcı periferal proteindir. Bu yapının bozulması hücrenin şeklini koruyamamasına ve sferosit formuna dönüşmesine neden olur. Glikophorinler zarı kat eden ancak iskeleti bağlamayan ayrı integral yapılardır.

---

### ÇİFT 21 (Benzerlik: 0.79)

**Soru 1 (ID: 042e92dc-340c-485c-949c-e433a4e4ba72)**
Soru Kökü: Sağlıklı bir bireyde damar içi pıhtılaşmayı önleyen veya sınırlandıran antikoagülan mekanizmalarla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Heparin-Antitrombin III kompleksi, ağırlıklı olarak Faktör VII ve doku faktörünü inhibe eder.
Açıklama: Heparin-Antitrombin III kompleksi koagülasyon kaskadında spesifik olarak Faktör IX, X, XI ve XII'yi inhibe eder, özellikle Faktör Xa üzerinde dominant baskılayıcı etki gösterir. Ekstrensek yolun temel tetikleyicisi olan Faktör VII ve doku faktörü kompleksi bu antikoagülan mekanizmanın ana hedefi değildir. Trombomodulin, Protein C ve fibrin iplikçikleri ortamdaki trombini bağlayarak fizyolojik pıhtılaşma sınırlarını çizen diğer koruyucu mekanizmalardır.

**Soru 2 (ID: ecced01d-c23d-4661-acff-12d030de8f2a)**
Soru Kökü: Koagülasyon sistemini baskılayan doğal antikoagülan faktörler ve etkileşimleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Düşük molekül ağırlıklı heparin tüm koagülasyon faktörlerini eşit oranda inhibe eder.
Açıklama: Düşük molekül ağırlıklı heparin tüm faktörleri inhibe etmez; sadece ve spesifik olarak Faktör 10a'yı inhibe ederek antikoagülan etki gösterir. Standart (fraksiyone olmayan) heparin ise Antitrombin III üzerinden Faktör 9, 10, 11 ve 12'yi inhibe eder.

---

### ÇİFT 22 (Benzerlik: 0.79)

**Soru 1 (ID: de0cc96d-34b9-4530-9c83-f1ce5492626a)**
Soru Kökü: Genetik olarak Protein C eksikliği olduğu bilinen 35 yaşındaki kadın hastaya derin ven trombozu profilaksisi amacıyla warfarin (kumadin) tedavisi başlanıyor. Tedavinin ilk günlerinde hastada ani gelişen ve hızla yayılan kutanöz mikrotrombüsler (kumadin ilişkili purpura fulminans) gözleniyor. Bu klinik tablonun altta yatan temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Kumadinin K vitaminine bağlı antikoagülan Protein C'yi diğer prokoagülanlardan daha hızlı tüketmesi
Açıklama: Kumadin başlandığında hem prokoagülanlar (Faktör 2,7,9,10) hem de antikoagülanlar (Protein C ve S) baskılanır. Ancak Protein C'nin yarı ömrü çok kısadır ve en hızlı o tükenir. Zaten genetik eksikliği olan hastada Protein C hızla sıfırlanırken prokoagülan faktörler (özellikle Faktör 2 ve 10) hala dolaşımda olduğu için geçici ve paradoksal bir 'hiperkoagülabilite' dönemi yaşanarak deride pıhtılar (nekroz) oluşur.

**Soru 2 (ID: f59b59c4-ebb7-4065-b548-986842e7d769)**
Soru Kökü: Atriyal fibrilasyon nedeniyle warfarin (kumadin) tedavisine başlanan hastada, ilacın kullanımını izleyen ilk günlerde ciltte yaygın mikrotrombüslere bağlı cilt nekrozu (purpura fulminans) gelişmiştir. 
Bu paradoksal trombotik yan etkinin fizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Antikoagülan etkili Protein C'nin diğer faktörlerden daha hızlı tükenmesi
Açıklama: Warfarin; 2, 7, 9, 10 nolu prokoagülan faktörler ile Protein C ve S gibi antikoagülan faktörlerin sentezini bloke eder. Protein C'nin yarı ömrü, prokoagülan pıhtılaşma faktörlerinin çoğundan (özellikle Faktör 2, 9, 10) çok daha kısadır. Bu yüzden tedavi başlandığında antikoagülan Protein C hızla tükenir, ortamda halen var olan uzun ömürlü faktörlerin baskın etkisiyle geçici bir hiperkoagülabilite ve tromboz oluşur.

---

### ÇİFT 23 (Benzerlik: 0.79)

**Soru 1 (ID: 4928156e-bcab-4a8e-94b9-a6c2af938303)**
Soru Kökü: 28 yaşında gebe bir hasta derin ven trombozu şüphesiyle konsülte ediliyor. Fizyolojik olarak gebelik döneminde kadınların tromboembolik olaylara yatkınlığının arttığı bilinmektedir. Bu hiperkoagülabilite durumunun mekanizmasıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Fibrin monomerleri arasında çapraz bağlar kuran Faktör XIII seviyesi kompanzatuar olarak artar.
Açıklama: Gebelik, kadını doğuma hazırlayan fizyolojik bir hiperkoagülabilite (pıhtılaşmaya yatkınlık) süreci olup; bu dönemde Faktör XIII ve Faktör XI haricindeki tüm pıhtılaşma faktörlerinin (Fibrinojen, FVII, FVIII vb.) düzeyleri artar. Fibrin monomerlerini bağlayan Faktör XIII gebelikte düzeyi yükselen değil, aksine stabil kalan veya göreceli azalan istisnai moleküllerden biridir. Fibrinojen düzeyindeki bariz artış da bu emboliye yatkınlığın en temel itici gücünü oluşturur.

**Soru 2 (ID: dc387bb3-e6da-468c-8cc5-838414b8e99e)**
Soru Kökü: Yirmi sekiz yaşındaki gebe hastanın rutin kontrollerinde fizyolojik olarak kan vizkozitesinin ve pıhtılaşma faktörlerinin profilinin değiştiği saptanıyor. Hamilelik süresince tromboemboliye yatkınlığın artmasının altında yatan mekanizmalar incelendiğinde;
Aşağıdaki faktörlerden hangisinin bu süreçte artması beklenen moleküllerden **değildir**?
Doğru Şık (E): Faktör XI
Açıklama: Gebelerde tromboemboliye yatkınlık, pıhtılaşma faktörlerinin birçoğunun aşırı artmasına bağlı fizyolojik bir süreçtir. Ancak bu artışa istisna olan iki faktör vardır: Faktör XI ve Faktör XIII artmaz. Bu spesifik istisnanın bilinmesi, gebelikteki protrombotik durumun laboratuvar tanısında yanılgıya düşülmesini engeller.

---

### ÇİFT 24 (Benzerlik: 0.78)

**Soru 1 (ID: 8b1dc325-4848-4c59-83d3-93615e464677)**
Soru Kökü: Kırk beş yaşında erkek hasta, diş çekimi sonrası uzayan sızıntı şikayetiyle başvuruyor. Laboratuvar tetkiklerinde kanama zamanı ve aPTT normal sınırlarda iken, protrombin zamanı (PT) belirgin olarak uzun bulunuyor. Bu hastada doku faktörüyle aktive olan yolakta yer alan hangi faktörün eksikliği en olasıdır?
Doğru Şık (A): Faktör VII
Açıklama: Protrombin zamanı (PT) ekstrensek yolu ölçerken, aPTT intrensek yolu ölçer. PT'nin tek başına uzaması, ortak yol (Faktör X, V, II, I) sağlam olduğuna göre sadece ekstrensek kola özgü olan Faktör VII eksikliğinde veya inhibisyonunda (erken kumadin etkisi) görülür. Faktör 8 ve 9 intrensek kolda yer aldığı için eksikliklerinde PT normal, aPTT uzamış olur.

**Soru 2 (ID: 9534be43-0ddc-471b-bfd4-bdf51c703f17)**
Soru Kökü: 8 yaşında erkek çocuğu, düşme sonrası diz ekleminde gelişen masif hemartroz ile acil servise getiriliyor. Pıhtılaşma testlerinde Protrombin Zamanı (PT) normal, aktive Parsiyel Tromboplastin Zamanı (aPTT) ise belirgin olarak uzamış bulunuyor. Hastanın klinik tablosu göz önüne alındığında, aşağıdaki pıhtılaşma faktörlerinden hangisinin eksikliği **en az olasıdır**?
Doğru Şık (C): Faktör VII
Açıklama: Hastada Protrombin Zamanı (PT) normal, aPTT uzun bulunduğuna göre patoloji ekstrensek yolu es geçip sadece intrensek yolu etkileyen faktörlerden kaynaklanmaktadır (örn. Hemofili A - Faktör VIII veya Hemofili B - Faktör IX). Ekstrensek yolun temel başlatıcısı olan Faktör VII eksik olsaydı PT belirgin şekilde uzamış olurdu. Faktör XI ve XII de intrensek yol elemanları olduğu için eksikliklerinde aPTT uzaması beklenir.

---

### ÇİFT 25 (Benzerlik: 0.78)

**Soru 1 (ID: 60f11e0f-6c2c-41c2-b27f-0705a7ce2af6)**
Soru Kökü: Yardımcı T (CD4) lenfositlerinin alt grupları olan Th1 ve Th2'nin salgıladıkları interlökin profilleri farklıdır. 
Aşağıdakilerden hangisi doğrudan Th2 lenfositler tarafından salgılanan ve B lenfositleri uyararak hümoral immüniteyi tetikleyen sitokinlerden biridir?
Doğru Şık (A): IL-4
Açıklama: Th2 lenfositler IL-4, IL-5 ve IL-6 salgılayarak B lenfosit uyarıcı faktörleri oluştururlar ve hümoral immüniteyi yönlendirirler. IL-2, İnterferon-gama ve lenfotoksin (TNF-beta) ise Th1 lenfositlerin salgıladığı ve hücresel immüniteyi indükleyen moleküllerdir.

**Soru 2 (ID: 844f8ca4-4c7e-48c9-a5a1-2b671b80ae29)**
Soru Kökü: Yardımcı T lenfositleri (TH1), makrofajları aktive etmek ve hücresel bağışıklığı güçlendirmek için spesifik bir mediyatör kokteyli sentezlerler. Aşağıdakilerden hangisi TH1 lenfositleri tarafından salgılanan faktörlerden biri **değildir**?
Doğru Şık (B): İnterlökin-4 (IL-4)
Açıklama: İnterlökin-4 (IL-4), TH1 tarafından değil, humoral immüniteyi stimüle eden TH2 lenfositleri tarafından salgılanır. TH1 lenfositlerinin temel sekretuvar ürünleri interlökin-2 (IL-2), interferon-gama (IFN-γ) ve lenfotoksindir (TNF-β). Bu sitokin farkı, immün sistemin virüslere karşı hücresel (TH1) veya bakterilere karşı antikor aracılı (TH2) yanıt oluşturmasını belirleyen kritik makastır.

---

### ÇİFT 26 (Benzerlik: 0.77)

**Soru 1 (ID: 59731587-efb3-47b6-be1b-e3b633172235)**
Soru Kökü: Akut miyokard enfarktüsü geçiren 55 yaşındaki erkek hastaya, koroner arteri tıkayan pıhtıyı eritmek amacıyla trombolitik tedavi planlanıyor. Uygulanacak ajanın endojen mekanizmayı taklit ederek plazminojeni aktif plazmine dönüştürmesi hedefleniyor. Fizyolojik şartlarda damar endotelinden salınan ve bu fibrinolitik aktivasyonu sağlayan asıl faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Doku plazminojen aktivatörü (t-PA)
Açıklama: Fizyolojik şartlarda damar endoteli ve hasarlı dokulardan salınan doku plazminojen aktivatörü (t-PA), inaktif plazminojeni aktif plazmine (fibrinolizin) dönüştürerek pıhtının parçalanmasını sağlar. En güçlü çeldiricilerden Antitrombin III pıhtılaşmayı durduran bir antikoagülan iken, t-PA oluşmuş bir pıhtıyı eriten fibrinolitik sistemin primer tetikleyicisidir. Protein C ise t-PA inhibitörünü yıkarak bu yolağı dolaylı olarak destekler.

**Soru 2 (ID: 9f242b36-006b-4348-a600-2887608cb4e7)**
Soru Kökü: Ellibeş yaşında erkek hasta, uzun bir uçak yolculuğu sonrası derin ven trombozu (DVT) tanısı alıyor. Pıhtının akut olarak eritilmesi için hastaya rekombinant doku plazminojen aktivatörü (t-PA) infüzyonu başlanıyor. Bu ilacın kanda asıl aktive ettiği enzim ve enzimin hedefindeki pıhtı proteini aşağıdakilerin hangisinde sırasıyla verilmiştir?
Doğru Şık (B): Plazmin - Fibrin
Açıklama: t-PA, plazmada inaktif dolaşan plazminojeni aktif plazmine dönüştüren güçlü bir katalizördür. Aktif plazmin ise trombozun yapıtaşı olan fibrin ağını spesifik bölgelerinden keserek yıkar. Trombin yapımını hedef alan ajanlar heparin türevleridir (t-PA mevcut pıhtıyı yıkar, oluşumu engellemekte kullanılmaz).

---

### ÇİFT 27 (Benzerlik: 0.76)

**Soru 1 (ID: 9534be43-0ddc-471b-bfd4-bdf51c703f17)**
Soru Kökü: 8 yaşında erkek çocuğu, düşme sonrası diz ekleminde gelişen masif hemartroz ile acil servise getiriliyor. Pıhtılaşma testlerinde Protrombin Zamanı (PT) normal, aktive Parsiyel Tromboplastin Zamanı (aPTT) ise belirgin olarak uzamış bulunuyor. Hastanın klinik tablosu göz önüne alındığında, aşağıdaki pıhtılaşma faktörlerinden hangisinin eksikliği **en az olasıdır**?
Doğru Şık (C): Faktör VII
Açıklama: Hastada Protrombin Zamanı (PT) normal, aPTT uzun bulunduğuna göre patoloji ekstrensek yolu es geçip sadece intrensek yolu etkileyen faktörlerden kaynaklanmaktadır (örn. Hemofili A - Faktör VIII veya Hemofili B - Faktör IX). Ekstrensek yolun temel başlatıcısı olan Faktör VII eksik olsaydı PT belirgin şekilde uzamış olurdu. Faktör XI ve XII de intrensek yol elemanları olduğu için eksikliklerinde aPTT uzaması beklenir.

**Soru 2 (ID: eff41dc0-6d25-4569-81e9-d52554f59c5c)**
Soru Kökü: On günlük yenidoğan, göbek kordonu düştükten sonra durmayan sızıntı şeklindeki kanama nedeniyle kliniğe getiriliyor. Yapılan testlerde kanama zamanı, protrombin zamanı (PT) ve aPTT tamamen normal bulunuyor. Fibrin monomerleri arasında çapraz bağlar kurulamamasına bağlı olduğu düşünülen bu klinik tabloda en olası faktör eksikliği aşağıdakilerden hangisidir?
Doğru Şık (D): Faktör XIII
Açıklama: PT ve aPTT'nin normal olduğu fakat fibrin tıkacın stabil olmadığı (çapraz bağların kurulamadığı) spesifik klinik durum Faktör XIII eksikliğidir. Faktör 8, 9 veya vWF eksikliklerinde aPTT veya kanama zamanı uzamış olmalıdır. Klasik klinik prezentasyon yenidoğanda inatçı göbek güdüğü kanaması veya geç cerrahi kanamadır.

---

### ÇİFT 28 (Benzerlik: 0.76)

**Soru 1 (ID: 02cd785c-5b08-494e-a643-c33960df805e)**
Soru Kökü: Kemik iliğinde megaloblastik eritropoezden erişkin tip (medüller) eritropoeze geçiş sürecinde hücrelerin maturasyon aşamaları izlendiğinde, hemoglobin sentezinin tamamen sonlandığı ve hücrenin dolaşıma yeni çıktığı genç eritrosit formu aşağıdakilerden hangisidir?
Doğru Şık (A): Retikülosit
Açıklama: Eritropoezde proeritroblast aşamasında başlayan hemoglobin sentezi, retikülosit evresinin sonlanmasıyla durur; dolaşıma geçen genç eritrositler olan retikülositler sentezi tamamlamış olarak kan dolaşımına katılır. Normoblast (ortokromatofilik vb.) aşamaları hücrenin hala çekirdek barındırdığı ve hemoglobin sentezinin yoğun devam ettiği, kemik iliğine hapsolmuş immatür formlardır. Megakaryoblast ise trombosit serisinin öncülüdür.

**Soru 2 (ID: 143f8afc-ce06-450a-bb8f-9ce7e990267f)**
Soru Kökü: Eritrosit yapımının son aşamalarında hemoglobin (Hb) sentezi tamamlanarak kemik iliği bariyeri geçilir. Dolaşıma geçen, hala çok az miktarda RNA kalıntısı barındırıp evresinin sonunda Hb sentezinin tamamen sonlandığı genç eritrosit formu aşağıdakilerden hangisidir?
Doğru Şık (A): Retikülosit
Açıklama: Retikülositler, ortokromatofilik evrenin ardından çekirdeği atılmış olarak kan dolaşımına geçen ve 1-2 gün içinde olgun eritrosite dönüşen genç eritrositlerdir. Bu evrenin sonlanmasıyla hemoglobin sentezi kalıcı olarak durur. Normoblastlar normal şartlarda dolaşımda bulunmazlar ve kemik iliğine aittirler.

---

### ÇİFT 29 (Benzerlik: 0.76)

**Soru 1 (ID: 042e92dc-340c-485c-949c-e433a4e4ba72)**
Soru Kökü: Sağlıklı bir bireyde damar içi pıhtılaşmayı önleyen veya sınırlandıran antikoagülan mekanizmalarla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Heparin-Antitrombin III kompleksi, ağırlıklı olarak Faktör VII ve doku faktörünü inhibe eder.
Açıklama: Heparin-Antitrombin III kompleksi koagülasyon kaskadında spesifik olarak Faktör IX, X, XI ve XII'yi inhibe eder, özellikle Faktör Xa üzerinde dominant baskılayıcı etki gösterir. Ekstrensek yolun temel tetikleyicisi olan Faktör VII ve doku faktörü kompleksi bu antikoagülan mekanizmanın ana hedefi değildir. Trombomodulin, Protein C ve fibrin iplikçikleri ortamdaki trombini bağlayarak fizyolojik pıhtılaşma sınırlarını çizen diğer koruyucu mekanizmalardır.

**Soru 2 (ID: 3ef523d4-996c-4773-9f55-981a739ca0a3)**
Soru Kökü: Endotel dokusunun pıhtılaşmayı önleyici (antikoagülan) lokal mekanizmalarıyla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (A): Protein S - Faktör V'i doğrudan inaktive eden enzim
Açıklama: Faktör V ve VIII'i parçalayarak inaktive eden enzim Aktif Protein C'dir. Protein S ise sadece bu aktivasyon sırasında Protein C için kofaktör görevi yapar, doğrudan enzimatik inaktivasyon işlevi yoktur. Trombomodulin, prostasiklin ve glikokaliksin tanımlanan antikoagülan görevleri tam olarak doğrudur.

---

### ÇİFT 30 (Benzerlik: 0.76)

**Soru 1 (ID: 95abcd86-6d03-4654-af89-80083596a983)**
Soru Kökü: Embriyonik yaşamın erken dönemlerinde yolk-sac mezoderminde başlayan megaloblastik eritropoez sırasında sentezlenen ve iki zeta (ζ) ile iki epsilon (ε) zincirinden oluşan hemoglobin alt tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Hemoglobin Gower
Açıklama: Hemoglobin Gower, embriyonik yaşamda fizyolojik olarak üretilen ve iki zeta ile iki epsilon (ζ2-ε2) polipeptit zincirinden oluşan ilk hemoglobin tipidir. Hemoglobin Portland da embriyoniktir ancak yapısında epsilon yerine gama zincirleri (ζ2-γ2) bulunur. Fetal hemoglobin (HbF) ise karaciğer ve dalak periyodunda sentezlenmeye başlar ve alfa-gama (α2-γ2) zincirlerini içerir.

**Soru 2 (ID: a51e09d2-d3d0-4ec1-a497-865d91fa48a7)**
Soru Kökü: 4 aylık bir bebekte ağır anemi tablosu saptanıyor. Hemoglobin elektroforezi sonucunda, alfa ve beta zincirlerinin normal oranlarda sentezlenemediği, gama zincirlerinin tetramer oluşturarak "Hb Bartz" formunun kanda hakim olduğu belirleniyor. Bu hastanın embriyonik döneminde sentezlenmiş olması beklenen hemoglobin tipleri arasında aşağıdakilerden hangisi yer alır?
Doğru Şık (B): Hb Gower ve Hb Portland
Açıklama: İnsan gelişiminde ilk sentezlenen embriyonik hemoglobinler olan Hb Gower (zeta2-epsilon2) ve Hb Portland (zeta2-gama2), intrauterin erken dönemde yolk kesesinde üretilir. Fetal döneme geçildiğinde yerini HbF'ye (alfa2-gama2) bırakırken, doğum sonrasında asıl erişkin form olan HbA (alfa2-beta2) hakim konuma geçer. Sorudaki Hb Bartz veya HbH talasemi gibi patolojik durumlarda oluşan tetramerlerdir, normal fizyolojik embriyonik sentez ürünleri değillerdir.

---

### ÇİFT 31 (Benzerlik: 0.76)

**Soru 1 (ID: 042e92dc-340c-485c-949c-e433a4e4ba72)**
Soru Kökü: Sağlıklı bir bireyde damar içi pıhtılaşmayı önleyen veya sınırlandıran antikoagülan mekanizmalarla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Heparin-Antitrombin III kompleksi, ağırlıklı olarak Faktör VII ve doku faktörünü inhibe eder.
Açıklama: Heparin-Antitrombin III kompleksi koagülasyon kaskadında spesifik olarak Faktör IX, X, XI ve XII'yi inhibe eder, özellikle Faktör Xa üzerinde dominant baskılayıcı etki gösterir. Ekstrensek yolun temel tetikleyicisi olan Faktör VII ve doku faktörü kompleksi bu antikoagülan mekanizmanın ana hedefi değildir. Trombomodulin, Protein C ve fibrin iplikçikleri ortamdaki trombini bağlayarak fizyolojik pıhtılaşma sınırlarını çizen diğer koruyucu mekanizmalardır.

**Soru 2 (ID: c60354df-f3f7-4d75-9ac6-fc0cd000e924)**
Soru Kökü: Endotelin intakt (sağlam) yapısının korunması ve damar içinde patolojik pıhtılaşmanın sınırlandırılmasında görev alan doğal antikoagülan mekanizmalarla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Endotelden salınan tromboksan A2 platelet agregasyonunu duraklatarak hemostazı baskılar.
Açıklama: Tromboksan A2 (TxA2) endotelden salgılanmaz, bizzat aktive olmuş trombositlerden salgılanır ve hemostazı baskılamak yerine platelet agregasyonunu güçlü şekilde körükler. Sağlam endotel yüzeyi; Nitrik oksit, prostasiklin ve trombomodulin gibi antitrombotik ve vazodilatatör faktörler salgılayarak pıhtılaşmayı sadece hasarlı bölgede sınırlandırır.

---

### ÇİFT 32 (Benzerlik: 0.76)

**Soru 1 (ID: 6dbc0f78-5f77-4251-a88e-ae94f85862bd)**
Soru Kökü: Fetal gelişimin ilk evrelerinde izlenen ve iki zeta (ζ) ile iki gama (γ) polipeptit zincirinin birleşmesiyle yapısal bütünlük kazanan embriyonik hemoglobin tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Hemoglobin Portland
Açıklama: Hemoglobin Portland, embriyonik gelişim sırasında izlenen ve ζ2-γ2 formülüne sahip olan hemoglobin alt tipidir. Hemoglobin Gower (ζ2-ε2) ile karıştırılmamalıdır; Gower'da epsilon zinciri bulunurken Portland'da gama zinciri mevcuttur. Bu hemoglobinlerin sentezi ekstra-medüller hematopoez dönemi ilerledikçe sonlanır ve yerini tamamen fetal hemoglobine (HbF) bırakır.

**Soru 2 (ID: a51e09d2-d3d0-4ec1-a497-865d91fa48a7)**
Soru Kökü: 4 aylık bir bebekte ağır anemi tablosu saptanıyor. Hemoglobin elektroforezi sonucunda, alfa ve beta zincirlerinin normal oranlarda sentezlenemediği, gama zincirlerinin tetramer oluşturarak "Hb Bartz" formunun kanda hakim olduğu belirleniyor. Bu hastanın embriyonik döneminde sentezlenmiş olması beklenen hemoglobin tipleri arasında aşağıdakilerden hangisi yer alır?
Doğru Şık (B): Hb Gower ve Hb Portland
Açıklama: İnsan gelişiminde ilk sentezlenen embriyonik hemoglobinler olan Hb Gower (zeta2-epsilon2) ve Hb Portland (zeta2-gama2), intrauterin erken dönemde yolk kesesinde üretilir. Fetal döneme geçildiğinde yerini HbF'ye (alfa2-gama2) bırakırken, doğum sonrasında asıl erişkin form olan HbA (alfa2-beta2) hakim konuma geçer. Sorudaki Hb Bartz veya HbH talasemi gibi patolojik durumlarda oluşan tetramerlerdir, normal fizyolojik embriyonik sentez ürünleri değillerdir.

---

### ÇİFT 33 (Benzerlik: 0.76)

**Soru 1 (ID: 0ab3e55e-d4c0-431d-aca9-3fa0eb4900f9)**
Soru Kökü: Eritropoez sürecinde hücreler çekirdek ve sitoplazma morfolojisinde spesifik bir olgunlaşma sırası izlerler. Bazofilik normoblast ile mitozun durduğu ortokromatofilik normoblast evreleri arasında köprü görevi gören ara form aşağıdakilerden hangisidir?
Doğru Şık (D): Polikromatofilik eritroblast
Açıklama: Eritropoezde normoblast evreleri sırasıyla; bazofilik, polikromatofilik ve ortokromatofilik eritroblast şeklinde ilerler. Polikromatofilik evre, hem bazofilik polizomların kaybolmaya yüz tuttuğu hem de asidofilik hemoglobinin biriktiği karışık renkli bir ara geçiş formudur. Proeritroblast bu serinin daha başındaki ata hücredir.

**Soru 2 (ID: e54d2859-cb66-4913-a4a2-968a8a836989)**
Soru Kökü: Eritropoez aşamalarında proeritroblasttan sonra izlenen, içeriğindeki yoğun ribozomlar (polizomlar) nedeniyle hala spesifik asidik boyalarla kuvvetli renk alma karakterini koruyan ve serinin üç alt tipinden ilki olan hücre aşağıdakilerden hangisidir?
Doğru Şık (C): Bazofilik eritroblast
Açıklama: Normoblast serisinin ilk hücresi olan bazofilik eritroblast (normoblast), hücre sitoplazmasındaki yoğun polizom varlığı nedeniyle bazofilik (mavi) boyanır. Olgunlaşma ilerledikçe polizomlar kaybolur ve asidofilik olan hemoglobinin artışıyla hücre ortokromatofilik hale gelir. Myeloblast ise eritrosit değil, lökosit serisinin öncül hücresidir.

---

### ÇİFT 34 (Benzerlik: 0.75)

**Soru 1 (ID: 40f18455-b009-4440-bc1b-bf4f17ca321d)**
Soru Kökü: Yenidoğan bir bebekte göbek bağının düşmesinin ardından durmayan sızıntı şeklinde kanama şikayeti izleniyor. Laboratuvar değerlendirmesinde PT (Protrombin Zamanı) ve aPTT (Aktive Parsiyel Tromboplastin Zamanı) değerleri ile trombosit sayısı normal bulunuyor. 
Bu klinik tablodan sorumlu olan pıhtılaşma faktörü eksikliği ve görevi aşağıdakilerden hangisidir?
Doğru Şık (E): Faktör XIII - Fibrin lifleri arasında çapraz bağlar kurmak
Açıklama: Hastada kanama olmasına rağmen PT ve aPTT testleri normal ise, sorun ekstrensek, intrensek veya ortak yolda değil, fibrin polimerlerinin stabilizasyonundadır. Faktör XIII eksikliğinde fibrin çapraz bağları oluşamaz ve pıhtı mekanik olarak çok zayıf kalır. Durmayan göbek bağı kanaması, normal testlere rağmen FXIII eksikliğinin tipik klinik prezentasyonudur.

**Soru 2 (ID: 9534be43-0ddc-471b-bfd4-bdf51c703f17)**
Soru Kökü: 8 yaşında erkek çocuğu, düşme sonrası diz ekleminde gelişen masif hemartroz ile acil servise getiriliyor. Pıhtılaşma testlerinde Protrombin Zamanı (PT) normal, aktive Parsiyel Tromboplastin Zamanı (aPTT) ise belirgin olarak uzamış bulunuyor. Hastanın klinik tablosu göz önüne alındığında, aşağıdaki pıhtılaşma faktörlerinden hangisinin eksikliği **en az olasıdır**?
Doğru Şık (C): Faktör VII
Açıklama: Hastada Protrombin Zamanı (PT) normal, aPTT uzun bulunduğuna göre patoloji ekstrensek yolu es geçip sadece intrensek yolu etkileyen faktörlerden kaynaklanmaktadır (örn. Hemofili A - Faktör VIII veya Hemofili B - Faktör IX). Ekstrensek yolun temel başlatıcısı olan Faktör VII eksik olsaydı PT belirgin şekilde uzamış olurdu. Faktör XI ve XII de intrensek yol elemanları olduğu için eksikliklerinde aPTT uzaması beklenir.

---

### ÇİFT 35 (Benzerlik: 0.75)

**Soru 1 (ID: c66a4495-17d2-4fe1-a94d-7ada2bc5a88c)**
Soru Kökü: Nötrofil, eozinofil ve makrofajların fagositoz süreçlerinde rol oynayan, hidrolitik enzimler içeren ve "azürofilik granüller" olarak isimlendirilen yapıların hücre biyolojisindeki karşılığı ve sentezlendiği evre aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (D): Lizozom - Promiyelosit evresi
Açıklama: Lökositlerde patojenleri hidrolitik ve lizozomal enzimlerle parçalamaya yarayan nonspesifik azürofilik granüller hücresel bazda lizozom organelini temsil eder ve granülopoezin promiyelosit evresinde sentezlenirler. Bu evreden sonra, spesifik olmayan granüllerin yenisi yapılmaz ve hücre miyelosit evresine geçerek sadece spesifik granülleri sentezlemeye başlar. Peroksizom veya ribozom bu granüllerin hücresel karşılığı değildir.

**Soru 2 (ID: fd120396-a1fe-481b-8226-945df6caeb34)**
Soru Kökü: Kemik iliğinde granülopoez sırasında lökositlerin sitoplazmasına yerleşen ve yapısal olarak lizozom karakteri taşıyan azurofilik (non-spesifik) granüller, hücre farklılaşmasının hangi spesifik basamağında sentezlenir?
Doğru Şık (B): Promyelosit evresi
Açıklama: Azurofilik (non-spesifik) granüller tüm lökositlerin sitoplazmasında bulunur ve granülopoezin promyelosit evresinde sentezlenirler; bu aşamadan sonra yeni non-spesifik granül yapımı gerçekleşmez. Spesifik granüllerin (sekonder) sentezlenmeye başlandığı evre ise bir sonraki aşama olan myelosit evresidir. Bu iki farklı evredeki biyokimyasal üretim, lökositin enzimatik deposunu belirler.

---

### ÇİFT 36 (Benzerlik: 0.75)

**Soru 1 (ID: 38c1d285-9b5f-4cd9-b84d-fb4f1ce46c2f)**
Soru Kökü: İnflamasyon bölgesindeki lokal doku hasarına yanıt olarak, lökositlerin damar dışına çıkabilmesi için adezyon yapması gerekir. Nötrofil yüzeyinde aktivasyonu artan integrin moleküllerinin, endotel hücre zarı üzerinde sıkı tutunmayı gerçekleştirdiği hedef molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Selektin ve ICAM-1
Açıklama: Nötrofillerin endotel yüzeyinde yuvarlanması (rolling) ve sıkıca yapışması (adezyon), lökosit integrinlerinin endotelde eksprese edilen Selektin ve ICAM-1 (hücreler arası adezyon molekülü-1) gibi moleküllerle etkileşmesi sayesinde gerçekleşir. Spektrin ve Ankrin eritrosit hücre iskelet proteinleridir. Von Willebrand Faktörü ise lökosit adezyonunda değil, trombosit agregasyonunda görev alır.

**Soru 2 (ID: 96c74fd7-badc-467e-8417-f48747725f62)**
Soru Kökü: İnflamasyon bölgesinde vasküler endotelde artan ICAM-1 (hücreler arası adezyon molekülü) yapısı, aşağıdaki lökosit reseptörlerinden hangisiyle etkileşerek hücrenin marjinasyon ve diapedez sürecini başlatır?
Doğru Şık (D): İntegrin molekülleri
Açıklama: İnflamasyon alanındaki endotel hücrelerinde beliren ICAM-1 molekülleri, dolaşan nötrofillerin yüzeyindeki integrin molekülleriyle güçlü bir şekilde kenetlenerek marjinasyon ve damar dışına çıkış (diapedez) sürecini başlatır. Gp IIb/IIIa trombosit agregasyonunda görev alan farklı bir adhezyon reseptörüdür. IgE Fc reseptörü bazofillerde yer alırken, major basic protein eozinofillerin antiparaziter etkisini sağlayan bir toksindir.

---

### ÇİFT 37 (Benzerlik: 0.75)

**Soru 1 (ID: 3ef523d4-996c-4773-9f55-981a739ca0a3)**
Soru Kökü: Endotel dokusunun pıhtılaşmayı önleyici (antikoagülan) lokal mekanizmalarıyla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (A): Protein S - Faktör V'i doğrudan inaktive eden enzim
Açıklama: Faktör V ve VIII'i parçalayarak inaktive eden enzim Aktif Protein C'dir. Protein S ise sadece bu aktivasyon sırasında Protein C için kofaktör görevi yapar, doğrudan enzimatik inaktivasyon işlevi yoktur. Trombomodulin, prostasiklin ve glikokaliksin tanımlanan antikoagülan görevleri tam olarak doğrudur.

**Soru 2 (ID: c60354df-f3f7-4d75-9ac6-fc0cd000e924)**
Soru Kökü: Endotelin intakt (sağlam) yapısının korunması ve damar içinde patolojik pıhtılaşmanın sınırlandırılmasında görev alan doğal antikoagülan mekanizmalarla ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Endotelden salınan tromboksan A2 platelet agregasyonunu duraklatarak hemostazı baskılar.
Açıklama: Tromboksan A2 (TxA2) endotelden salgılanmaz, bizzat aktive olmuş trombositlerden salgılanır ve hemostazı baskılamak yerine platelet agregasyonunu güçlü şekilde körükler. Sağlam endotel yüzeyi; Nitrik oksit, prostasiklin ve trombomodulin gibi antitrombotik ve vazodilatatör faktörler salgılayarak pıhtılaşmayı sadece hasarlı bölgede sınırlandırır.

---

