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

### ÇİFT 1 (Benzerlik: 0.84)

**Soru 1 (ID: 2b5b93d2-28fd-440b-bc49-0793697fdb6c)**
Soru Kökü: Düz kasın hücresel mimarisinde, iskelet kasında yer alan Z çizgilerinin yapısal ve fonksiyonel karşılığı olan, alfa-aktinin ara filamanların tutunduğu yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Yoğun cisim (Dense body)
Açıklama: Düz kaslarda klasik sarkomer ve Z çizgisi organizasyonu bulunmaz; bunun yerine sitoplazmada ve hücre zarına tutunan alfa-aktininden zengin yoğun cisimler (dense body) bulunur. Aktin ince filamanları bu yoğun cisimlere tutunarak ağ benzeri bir matriks kurar. Ara filamanlardan zengin olan bu yapı, kasılma sırasındaki burgu (corkscrew) hareketinin mekanik çapa noktasıdır.

**Soru 2 (ID: 7c7e5433-3dd1-4762-b1bf-5a8d1aa39104)**
Soru Kökü: Düz kas hücrelerinde, iskelet kasında bulunan Z çizgisinin görevini üstlenen, aktin filamanlarının çıkış noktası olarak işlev gören ve alfa-aktinin açısından oldukça zengin olan sitoplazmik yapı aşağıdakilerden hangisidir?
Doğru Şık (C): Yoğun cisim (Dense body)
Açıklama: Düz kasta sarkomer düzeni yoktur; ancak iskelet kasındaki Z çizgisinin analoğu olan 'dense body' (yoğun cisim) yapıları mevcuttur. Alfa-aktinin ve desmin/vimentin içeren bu yapılar, aktin filamanları için tutunma/çıkış noktasıdır ve kasılma kuvvetinin hücre zarına iletilmesini sağlarlar.

---

### ÇİFT 2 (Benzerlik: 0.80)

**Soru 1 (ID: 23b3ef3d-0481-45df-9075-c04dd5bdee93)**
Soru Kökü: Düz kas kasılma dinamiğinde ince filamanların organizasyonu iskelet kasından farklıdır. İskelet kasında aktin-miyozin etkileşimini kalsiyuma bağımlı olarak denetleyen troponin kompleksinin düz kastaki fonksiyonel homologu olan (miyozin bağlanma yerlerini örten) protein ikilisi aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (D): Kaldesmon - Kalponin
Açıklama: Düz kasta troponin yer almaz; ince filamanlarda aktin ve tropomyozin ile birlikte bulunan kaldesmon ve kalponin molekülleri, miyozin başının tutunacağı aktif bölgeleri örterek istirahat halini korur. Titin ve nebulin sarkomerik hizalanmayı sağlayan dev moleküler cetvellerdir ve düz kasta bu formatta bulunmazlar. Bu protein ikilisi, düz kasta kasılmanın düzenlenmesinde birincil bariyer görevi görür.

**Soru 2 (ID: 9fb819eb-7779-4e15-a1c7-9466f9a02337)**
Soru Kökü: Düz kaslarda troponin proteini bulunmaz, ancak ince flamanların düzenlenmesini sağlayan spesifik proteinler mevcuttur. Düz kasta aktin molekülüne bağlanarak miyozinin bağlanacağı aktif bölgeleri örten ve kalsiyum-kalmodulin kompleksi varlığında ayrılarak kaymaya izin veren protein aşağıdakilerden hangisidir?
Doğru Şık (C): Kaldesmon
Açıklama: İskelet kasında aktin aktif bölgelerini örten troponin-tropomiyozin kompleksinin yerini, düz kasta düz kas spesifik proteinleri olan kaldesmon ve kalponin alır. Kalsiyum-kalmodulin (KKK) kompleksi kaldesmona bağlanarak onu aktin üzerinden çeker, böylece miyozin başının bağlanması için alan açılır.

---

### ÇİFT 3 (Benzerlik: 0.80)

**Soru 1 (ID: 42a87496-a1f8-485b-b0bc-2dd4974d7451)**
Soru Kökü: Aşağıdaki hücresel yapılardan hangisi, fizyolojik işleyiş bağlamında iskelet veya kalp kasında bulunmayıp, **yalnızca** düz kasa özgü yapılar arasında yer alır?
Doğru Şık (E): Kaveola
Açıklama: Düz kas hücrelerinin zarında sarkolemma invaginasyonları olan T-tübülleri yoktur; bunun yerini işlevsel olarak taklit eden, yüzey alanını artıran sığ çöküntüler olan 'Kaveola'lar alır. Düz kasta sarkomer düzeni olmadığı için Z çizgisi yoktur, terminal sisterna da az gelişmiştir.

**Soru 2 (ID: b2f1a1db-931b-4492-9fad-217c706fe548)**
Soru Kökü: Düz kasların yapısı iskelet kaslarından bazı belirgin anatomik ve fonksiyonel farklılıklar gösterir. Buna göre, aşağıdakilerden hangisi düz kasların hücre içi yapısında bulunan bir eleman **değildir**?
Doğru Şık (D): Transvers (T) tübül
Açıklama: Düz kas hücrelerinde sarkolemmanın invaginasyonları olan T tübül sistemi bulunmaz; bunun yerine kalsiyum zengini küçük veziküler kesecikler olan kaveolalar görev yapar. Ayrıca düz kaslarda Z çizgisi yerine yoğun cisimcikler (dens body), troponin yerine ise kalsiyum regülasyonunu sağlayan kalmodulin, kaldesmon ve kalponin bulunur.

---

### ÇİFT 4 (Benzerlik: 0.80)

**Soru 1 (ID: d0c8284d-6565-4b3d-b16a-37bed0a5a74d)**
Soru Kökü: İskelet kasında kasılma döngüsünün sonlanıp gevşemenin sağlanabilmesi için, sitoplazmik serbest kalsiyumun SERCA pompası aracılığıyla sarkoplazmik retikuluma geri alınması şarttır. Retikuluma giren kalsiyum iyonlarının ozmotik basıncı dengelemek amacıyla depolanmasını sağlayan kalsiyum bağlayıcı protein aşağıdakilerden hangisidir?
Doğru Şık (C): Kalsekestrin
Açıklama: Kalsekestrin (Calsequestrin), sarkoplazmik retikulum terminal sarnıçlarının içinde yerleşik olan, kalsiyum afinitesi düşük ancak bağlama kapasitesi çok yüksek bir depo proteinidir. Troponin ve kalmodulin gibi moleküller sitoplazmada sinyal sensörü olarak işlev görürken kalsekestrin depo havuzu yaratır. Bu sayede kalsiyum pompası yüksek gradiyente karşı çalışmak zorunda kalmaz.

**Soru 2 (ID: ff13d1d1-c624-4bf8-b6f9-10db9fbb1de5)**
Soru Kökü: Egzersiz sonrası iskelet kaslarının fizyolojik gevşeme aşamasında kalsiyumun sitoplazmadan uzaklaştırılması aktif bir ATP hidrolizi gerektirir. Bu süreçte kalsiyum iyonlarını sarkoplazmik retikuluma geri pompalayan asıl membran proteini aşağıdakilerden hangisidir?
Doğru Şık (C): SERCA (Sarko/endoplazmik retikulum Ca-ATPaz)
Açıklama: Kasın gevşemesi için Ca-Mg ATPaz (SERCA) adı verilen aktif taşıma pompası, sitoplazmadaki kalsiyumu enerji (ATP) harcayarak tekrar sarkoplazmik retikulum içine basar. Ryanodin kalsiyumu dışarı salan kanaldır. Fosfolamban SERCA'yı denetler, kalsekestrin ise SR içine giren kalsiyumu sünger gibi depo ederek bağlar.

---

### ÇİFT 5 (Benzerlik: 0.79)

**Soru 1 (ID: b0d67338-27fc-4b53-92e8-54fd254a9984)**
Soru Kökü: Düz kasta Ca++-kalmodulin kompleksi oluştuktan sonra, miyozin başının şeklini değiştirip açık hale gelmesini ve aktini tutabilmesini sağlayan ana fosforilasyon reaksiyonunu hangi enzim gerçekleştirir?
Doğru Şık (A): Miyozin hafif zincir kinaz (MHZK)
Açıklama: Düz kasta kasılmanın tetiği, Ca-Kalmodulin kompleksi tarafından aktive edilen Miyozin Hafif Zincir Kinaz (MHZK) enzimidir. Bu kinaz, miyozinin düzenleyici hafif zincirini fosforilleyerek yapısını açar ve aktine bağlanma bölgesini serbest bırakır. Miyozin fosfataz ise bu fosfatı kopararak gevşemeyi sağlar.

**Soru 2 (ID: da652994-4299-4b38-9fed-4ddba6f6bf7c)**
Soru Kökü: Düz kasta kasılmanın başlatılmasında etkili olan kalsiyum-kalmodulin kompleksi, kasılma sürecini tetiklemek için öncelikli olarak hangi enzimi aktive eder?
Doğru Şık (E): Miyozin hafif zincir kinaz (MLCK)
Açıklama: Düz kaslarda hücre içine giren kalsiyum kalmoduline bağlanır. Oluşan Ca++-kalmodulin kompleksi inaktif durumdaki miyozin hafif zincir kinazı (MLCK) aktive eder. Aktifleşen MLCK, miyozinin hafif zincirini fosforilleyerek miyozin ATPaz aktivitesini artırır ve aktinle çapraz köprü kurmasını (kasılmayı) sağlar. Gevşemeden ise miyozin defosforilasyonunu yapan miyozin fosfataz sorumludur.

---

### ÇİFT 6 (Benzerlik: 0.77)

**Soru 1 (ID: 063aec42-657f-4ba4-907b-d9aef0c9f4bc)**
Soru Kökü: Düz kasın ince filaman yapısında yer alan ve myozinin aktine bağlanacağı bölgeleri istirahat halinde örterek kasılma regülasyonunda özelleşmiş görev yapan, düz kasa spesifik protein aşağıdakilerden hangisidir?
Doğru Şık (E): Kalponin
Açıklama: Düz kasta çizgili kastaki troponin kompleksi bulunmaz; bu eksikliği gidermek üzere miyozinin aktine bağlanma bölgelerini örten düz kasa özgü kalponin ve kaldesmon proteinleri devreye girer. Troponin-C iskelet ve kalp kasında kalsiyum bağlayan alt birim iken, tropomodulin aktin ucuna bağlanarak boyu ayarlayan bir kapak proteinidir. Kalponin, düz kasta filaman etkileşimini inhibe eden anahtar bir moleküldür.

**Soru 2 (ID: 23b3ef3d-0481-45df-9075-c04dd5bdee93)**
Soru Kökü: Düz kas kasılma dinamiğinde ince filamanların organizasyonu iskelet kasından farklıdır. İskelet kasında aktin-miyozin etkileşimini kalsiyuma bağımlı olarak denetleyen troponin kompleksinin düz kastaki fonksiyonel homologu olan (miyozin bağlanma yerlerini örten) protein ikilisi aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (D): Kaldesmon - Kalponin
Açıklama: Düz kasta troponin yer almaz; ince filamanlarda aktin ve tropomyozin ile birlikte bulunan kaldesmon ve kalponin molekülleri, miyozin başının tutunacağı aktif bölgeleri örterek istirahat halini korur. Titin ve nebulin sarkomerik hizalanmayı sağlayan dev moleküler cetvellerdir ve düz kasta bu formatta bulunmazlar. Bu protein ikilisi, düz kasta kasılmanın düzenlenmesinde birincil bariyer görevi görür.

---

### ÇİFT 7 (Benzerlik: 0.77)

**Soru 1 (ID: 8e48bff0-354c-425f-b517-f6db9b44c097)**
Soru Kökü: Sırt kaslarından biyopsi alınan uzun mesafe maraton koşucusunda, kırmızı renkli ve küçük çaplı kas liflerinin oranının çok yüksek olduğu saptanmıştır. Bu lif tipinin dominant enerji üretim profiline dayanarak, hücresel düzeyde aşağıdaki enzimlerden/yapılardan hangisinin en yoğun bulunması beklenir?
Doğru Şık (B): Süksinik dehidrogenaz
Açıklama: Maratoncularda yüksek oranda Tip 1 (yavaş oksidatif) lifler bulunur. Bu lifler yavaş yorulur, bol miyoglobin (kırmızı) ve yoğun mitokondri içerir. Mitokondriyal Krebs siklusu ve elektron transport zinciri enzimi olan süksinik dehidrogenaz (oksidatif kapasite göstergesi) bu liflerde son derece yüksektir. Hızlı glikolitik Tip 2b liflerde ise laktat dehidrogenaz ve Miyozin ATPaz belirgindir.

**Soru 2 (ID: b80f79f3-a442-4abe-a8f9-af186ec72f03)**
Soru Kökü: Otuz beş yaşındaki bir maraton koşucusunun bacak kaslarından alınan biyopside, ağırlıklı olarak küçük çaplı ve kırmızı renkli (Tip 1) kas liflerinin baskın olduğu görülmüştür. Bu lif tipi ile ilgili aşağıdaki hücresel durumlardan hangisi **en az olasıdır**?
Doğru Şık (A): Miyozin ATPaz hızının ve SR kalsiyum pompalama hızının son derece yüksek olması
Açıklama: Tip 1 (yavaş oksidatif) kas lifleri uzun mesafe koşucularında hakim olup miyoglobin, mitokondri ve oksidatif enzim yönünden çok zengin, ancak myozin ATPaz hızı yönünden oldukça yavaş liflerdir. Yüksek myozin ATPaz ve hızlı kalsiyum pompalama özellikleri, sprinter veya haltercilerdeki Tip 2b (hızlı glikolitik) liflere ait patlayıcı kuvvet adaptasyonlarıdır. Tip 1 lifleri geç yorulur ancak kuvvet/hız bakımından düşüktür.

---

### ÇİFT 8 (Benzerlik: 0.77)

**Soru 1 (ID: 0514a841-c54f-4575-8ffc-52dbae6f3ec2)**
Soru Kökü: Adli tıbbi bir vakada, ölümden 12 saat sonra incelenen bir cesette iskelet kaslarının şiddetli biçimde kasılı kaldığı ve eklemlerin bükülemediği saptanmıştır. 'Rigor mortis' olarak adlandırılan bu ölü katılığı tablosunun hücresel düzeydeki ana nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Myozin başına yeni bir ATP molekülünün bağlanamaması
Açıklama: Kayan filamanlar mekanizmasında miyozin başının aktinden ayrılarak gevşemenin sağlanabilmesi için mutlak suretle ortama yeni bir ATP molekülünün girmesi gereklidir. Ölümle birlikte hücresel solunum ve ATP üretimi tamamen durduğundan, halihazırda bağlı olan aktin-miyozin çapraz köprüleri çözülemez. Bu durum biyokimyasal olarak 'ATP'nin gevşetici/yumuşatıcı etkisinin' kaybı olarak bilinir.

**Soru 2 (ID: 28a8076c-0453-432d-af04-d7d010c26b10)**
Soru Kökü: Adli tıp incelemesinde, vefat etmiş bir kişinin kaslarında oluşan 'rigor mortis' (ölü katılığı) durumunun, kasılma döngüsündeki belirli bir molekülün eksikliği nedeniyle miyozin başının aktinden ayrılamamasından kaynaklandığı rapor edilmiştir. Miyozin ile aktin kompleksinin ayrışmasını sağlayan yumuşatıcı/gevşetici faktör aşağıdakilerden hangisidir?
Doğru Şık (D): Yeni bir ATP molekülünün miyozin başına bağlanması
Açıklama: Kayan filamanlar mekanizmasında aktin-miyozin kompleksi, miyozin başına yeni bir ATP molekülü bağlanana kadar kilitli kalır. ATP'nin bağlanması miyozinin aktini bırakmasını (gevşeme) sağlar. Ölüm sonrası ATP sentezi durduğu için ATP ortamdan kaybolur, miyozin aktinden ayrılamaz ve kaslar kasılı durumda kalarak rigor mortis tablosunu oluşturur.

---

### ÇİFT 9 (Benzerlik: 0.77)

**Soru 1 (ID: 28a8076c-0453-432d-af04-d7d010c26b10)**
Soru Kökü: Adli tıp incelemesinde, vefat etmiş bir kişinin kaslarında oluşan 'rigor mortis' (ölü katılığı) durumunun, kasılma döngüsündeki belirli bir molekülün eksikliği nedeniyle miyozin başının aktinden ayrılamamasından kaynaklandığı rapor edilmiştir. Miyozin ile aktin kompleksinin ayrışmasını sağlayan yumuşatıcı/gevşetici faktör aşağıdakilerden hangisidir?
Doğru Şık (D): Yeni bir ATP molekülünün miyozin başına bağlanması
Açıklama: Kayan filamanlar mekanizmasında aktin-miyozin kompleksi, miyozin başına yeni bir ATP molekülü bağlanana kadar kilitli kalır. ATP'nin bağlanması miyozinin aktini bırakmasını (gevşeme) sağlar. Ölüm sonrası ATP sentezi durduğu için ATP ortamdan kaybolur, miyozin aktinden ayrılamaz ve kaslar kasılı durumda kalarak rigor mortis tablosunu oluşturur.

**Soru 2 (ID: dc416f5a-202d-4120-abf2-bd85b368dfd1)**
Soru Kökü: İskelet kasının kasılma döngüsünde (cross-bridge cycle) aktin-miyozin kompleksinin ayrılması için hücresel düzeyde özgül bir adıma ihtiyaç vardır. Ölümden sonra gelişen 'rigor mortis' (ölüm katılığı) tablosunun temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Miyozin başına yeni bir ATP molekülünün bağlanamaması
Açıklama: Kasılma döngüsünde, miyozin başının aktin flamentinden ayrılabilmesi için ATP'nin miyozin başına bağlanması (ATP'nin yumuşatıcı/gevşetici etkisi) şarttır. Ölüm sonrasında hücrede ATP üretimi durduğu için miyozin aktinden ayrılamaz ve aktin-miyozin çapraz köprüleri kilitli kalarak rigor mortis adı verilen şiddetli kas sertliğini oluşturur.

---

### ÇİFT 10 (Benzerlik: 0.76)

**Soru 1 (ID: 6846ff33-407f-4de8-bb62-74644077b3ee)**
Soru Kökü: İskelet kasının kalsiyum aracılı kasılma regülasyonunda, troponin kompleksinin alt birimleri koordineli olarak çalışır. Aşağıdaki olayların hangisiyle aktin üzerindeki miyozin bağlanma bölgesinin açığa çıkması doğrudan tetiklenir?
Doğru Şık (D): Kalsiyumun Troponin-C'ye bağlanarak Troponin-I'nın aktini bırakmasını sağlaması
Açıklama: İskelet kasında sitoplazmaya çıkan Ca++ iyonları Troponin-C alt birimine bağlanır. Bu konformasyonel değişiklik, inhibitör görevi gören Troponin-I'yı etkileyerek onun aktin molekülünü bırakmasını sağlar (Tropomiyozinin de pozisyonu değişir). Böylece aktin üzerindeki miyozin bağlanma noktası açığa çıkar ve kasılma çapraz döngüsü başlar.

**Soru 2 (ID: a96a4ca4-840f-4026-9f6d-cfe88dad9c8c)**
Soru Kökü: İskelet kasında hücre içine giren kalsiyum iyonları Troponin-C'ye bağlanarak aktin üzerindeki miyozin bağlanma bölgelerinin açığa çıkmasını sağlar. Düz kas hücrelerinde troponin kompleksi bulunmadığına göre, sitoplazmadaki kalsiyum hangi proteine bağlanarak kasılma kaskadını başlatır?
Doğru Şık (D): Kalmodulin
Açıklama: Düz kasta troponin yoktur; hücre içine giren kalsiyum kalmoduline bağlanır (4 adet Ca ile). Oluşan Ca-Kalmodulin kompleksi daha sonra miyozin hafif zincir kinazı (MHZK) aktive ederek miyozin başının fosforillenmesini ve kasılmanın başlamasını tetikler. Kaldesmon, aktini kapatan proteindir ve kalmodulin kompleksi ile inhibe edilir.

---

### ÇİFT 11 (Benzerlik: 0.76)

**Soru 1 (ID: 1da1839a-4bdc-457e-a6cb-bdcc2636cec5)**
Soru Kökü: Motor nörondan gelen aksiyon potansiyeli sonrası kas hücresinde sitoplazmik kalsiyum artışı meydana gelir. Çizgili kas dokusunda sitoplazmaya salınan bu serbest kalsiyumun kasılmayı başlatmak için bağlandığı moleküler hedef aşağıdakilerden hangisidir?
Doğru Şık (C): Troponin-C
Açıklama: Çizgili kasta sarkoplazmik retikulumdan salınan kalsiyum, ince filaman üzerinde yer alan troponin kompleksinin Troponin-C (Kalsiyum) alt birimine bağlanır. Düz kasta kalsiyum sensörü kalmodulin iken, iskelet ve kalp kasının sensörü spesifik olarak troponin-C'dir. Kalsiyumun buraya bağlanması, troponin-I'nın aktini bırakmasını tetikleyerek miyozin için gerekli alanın açılmasını sağlar.

**Soru 2 (ID: a96a4ca4-840f-4026-9f6d-cfe88dad9c8c)**
Soru Kökü: İskelet kasında hücre içine giren kalsiyum iyonları Troponin-C'ye bağlanarak aktin üzerindeki miyozin bağlanma bölgelerinin açığa çıkmasını sağlar. Düz kas hücrelerinde troponin kompleksi bulunmadığına göre, sitoplazmadaki kalsiyum hangi proteine bağlanarak kasılma kaskadını başlatır?
Doğru Şık (D): Kalmodulin
Açıklama: Düz kasta troponin yoktur; hücre içine giren kalsiyum kalmoduline bağlanır (4 adet Ca ile). Oluşan Ca-Kalmodulin kompleksi daha sonra miyozin hafif zincir kinazı (MHZK) aktive ederek miyozin başının fosforillenmesini ve kasılmanın başlamasını tetikler. Kaldesmon, aktini kapatan proteindir ve kalmodulin kompleksi ile inhibe edilir.

---

### ÇİFT 12 (Benzerlik: 0.76)

**Soru 1 (ID: 2efd9f78-b058-4f33-93af-044431452464)**
Soru Kökü: İskelet kasının kasılması sırasındaki kayan filamanlar teorisine göre, sarkomer boyu kısalırken miyozin ve aktin filamanlarının birbiri üzerindeki pozisyonları değişir. Tam bir kasılma siklusu tamamlandığında, aşağıdaki sarkomer bölgelerinden hangisinin boyunda bir kısalma olması beklenmez?
Doğru Şık (D): A bandı
Açıklama: Kasılma sırasında ince filamanların kalın filamanlar üzerine kaymasıyla H bandı ve I bandı daralırken, iki Z çizgisi birbirine yaklaşır (sarkomer kısalır). Ancak miyozin filamanlarının boyunu ve konumunu temsil eden A bandının uzunluğu değişmez. A bandı, aktinlerin myozinlerin arasına girmesiyle daha yoğun görünse de fiziksel uzunluğunu korur.

**Soru 2 (ID: 8e963ac6-255c-4df8-8edb-d51d9a92978f)**
Soru Kökü: Kayan filamanlar teorisine (Sliding filament theory) göre, kasılma işlemi boyunca sarkomer içindeki mikroskobik bant yapılarında değişiklikler izlenir. Bu teoriye göre aşağıda verilen önermelerden hangisi **yanlıştır**?
Doğru Şık (E): Aksiyon potansiyeliyle uyarılan A bandı aktinlerle tam örtüştüğünde kısalır.
Açıklama: Kasılma sırasında A bandının (kalın miyozin flamanlarının bulunduğu bölge) boyu KESİNLİKLE değişmez. Kayan aktinlerin miyozinin arasına girmesi H bandını ve I bandını daraltırken, miyozin flamanlarının fiziksel uzunluğunu temsil eden A bandı sabittir. Bu nedenle A bandının kısaldığı önermesi yanlıştır.

---

### ÇİFT 13 (Benzerlik: 0.76)

**Soru 1 (ID: f2999756-92b9-42ca-965d-6b82ce6608cd)**
Soru Kökü: İskelet kasında yapısal bütünlüğü sağlayan proteinlerin hücre içi lokalizasyonları fonksiyonları açısından kritik öneme sahiptir. Aşağıdaki proteinlerden hangisi sarkomer yapısındaki Z diskine doğrudan veya dolaylı olarak tutunan moleküllerden biri **değildir**?
Doğru Şık (E): Miyozin II
Açıklama: Miyozin II kalın filamanları oluşturur ve sarkomerin merkezindeki M çizgisine tutunur, Z diski ile doğrudan bir teması yoktur. Aktin ince filaman olarak Z diskine alfa-aktinin ile tutunurken, titin miyozini Z diskine bağlayan bir yay görevi görür, desmin ise Z disklerini birbirine ve hücre zarına bağlar.

**Soru 2 (ID: f39fc56e-fd10-4ad8-b1c8-dfb1de1fe120)**
Soru Kökü: İskelet kası hücresinde mekanik bütünlüğü koruyan ve kontraksiyonları iskelete aktaran çeşitli yapısal proteinler bulunur. Aşağıdaki yapısal protein ve işlev eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Distrofin: Z çizgisini M çizgisine doğrudan bağlayarak gerimi aktarır.
Açıklama: Distrofin proteini Z çizgisini M çizgisine bağlamaz. Distrofin, hücre içi iskelet elemanlarını (aktin filamentlerini) kas hücre zarı (sarkolemma) üzerinden hücre dışı matrikse bağlayan ve membran stabilizasyonu sağlayan kilit bir proteindir. Z çizgisini M çizgisine bağlayan yapısal protein ise Titin'dir.

---

### ÇİFT 14 (Benzerlik: 0.76)

**Soru 1 (ID: 61fc1e16-3ab4-4f34-aaab-07216399325a)**
Soru Kökü: Yirmi beş yaşındaki profesyonel bir halterci, ani ve patlayıcı güç gerektiren antrenman sonrası şiddetli kas ağrısı ile başvurmuştur. Bu hastada hipertrofiye uğraması beklenen kas lifi tipi (Tip 2b) göz önüne alındığında, aşağıdaki morfolojik veya metabolik özelliklerden hangisi **en az olasıdır**?
Doğru Şık (B): Yüksek mitokondri ve miyoglobin içeriğine sahip olmaları
Açıklama: Halter gibi patlayıcı güç sporlarında Tip 2b (hızlı glikolitik) beyaz kas lifleri baskın olarak kullanılır ve bu liflerin mitokondri ile miyoglobin içerikleri oldukça düşüktür. Uzun mesafe koşucularında baskın olan Tip 1 lifleri mitokondriden zenginken, Tip 2b lifleri enerjilerini glikolizden sağlar ve bu nedenle ağrıya duyarlıdırlar. Kas biopsisinde Tip 2b liflerinin açık tonda (beyaz) görülmesinin temel nedeni bu düşük miyoglobin ve mitokondri yoğunluğudur.

**Soru 2 (ID: b80f79f3-a442-4abe-a8f9-af186ec72f03)**
Soru Kökü: Otuz beş yaşındaki bir maraton koşucusunun bacak kaslarından alınan biyopside, ağırlıklı olarak küçük çaplı ve kırmızı renkli (Tip 1) kas liflerinin baskın olduğu görülmüştür. Bu lif tipi ile ilgili aşağıdaki hücresel durumlardan hangisi **en az olasıdır**?
Doğru Şık (A): Miyozin ATPaz hızının ve SR kalsiyum pompalama hızının son derece yüksek olması
Açıklama: Tip 1 (yavaş oksidatif) kas lifleri uzun mesafe koşucularında hakim olup miyoglobin, mitokondri ve oksidatif enzim yönünden çok zengin, ancak myozin ATPaz hızı yönünden oldukça yavaş liflerdir. Yüksek myozin ATPaz ve hızlı kalsiyum pompalama özellikleri, sprinter veya haltercilerdeki Tip 2b (hızlı glikolitik) liflere ait patlayıcı kuvvet adaptasyonlarıdır. Tip 1 lifleri geç yorulur ancak kuvvet/hız bakımından düşüktür.

---

### ÇİFT 15 (Benzerlik: 0.76)

**Soru 1 (ID: 0d7bf862-d0cf-4b9d-89c9-83eb661b000c)**
Soru Kökü: İskelet kasında eksitasyon-kontraksiyon (uyarılma-kasılma) eşleşmesi sırasında aşağıdaki olaylar belirli bir sırayla gerçekleşir.
I. Aksiyon potansiyelinin T tübüllerinde yayılması
II. Dihidropiridin (DHP) reseptörlerinin aktifleşmesi
III. Ryanodin kanallarının açılması
IV. Kalsiyum iyonlarının troponin C'ye bağlanması
Buna göre, fizyolojik dizilim aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (A): I - II - III - IV
Açıklama: Uyarılma-kasılma bağıntısında ilk adım, motor son plakta oluşan aksiyon potansiyelinin T tübülleri aracılığıyla kasın derinliklerine yayılmasıdır (I). Bu potansiyel T tübül membranındaki voltaja duyarlı DHP reseptörlerini aktive eder (II). DHP reseptörleri fiziksel etkileşimle terminal sisternadaki ryanodin reseptörlerini açar (III) ve stoplazmaya kalsiyum salınır. Son olarak kalsiyum troponin C'ye bağlanarak kasılmayı başlatır (IV).

**Soru 2 (ID: 1c3b4b61-7551-4053-8b5a-2319e58c7653)**
Soru Kökü: Sinir-kas kavşağında başlayan bir uyarının kasılmayı tetiklediği hücresel zincirde yer alan mekanizmaların sırası nasıldır?
1. Motor son plak potansiyeli (dereceli depolarizasyon) 
2. Voltaj kapılı sodyum kanallarının açılması 
3. DHP reseptör konformasyon değişimi 
4. Ryanodin reseptöründen kalsiyum salınımı 
5. Aksiyon potansiyelinin T tübüllerinde yayılması
Doğru Şık (D): 1 - 2 - 5 - 3 - 4
Açıklama: Asetilkolin reseptöre tutununca önce lokal bir motor son plak potansiyeli (1) oluşur. Bu, eşik değere ulaşınca voltaj kapılı sodyum kanallarını açarak (2) tüm zarda aksiyon potansiyelini başlatır. Aksiyon potansiyeli T-tübüllerine iner (5), burada DHP reseptörünü aktive eder (3) ve son olarak DHP fiziksel bağ ile Ryanodin reseptörünü açarak Ca++ salınımını sağlar (4).

---

### ÇİFT 16 (Benzerlik: 0.75)

**Soru 1 (ID: 063aec42-657f-4ba4-907b-d9aef0c9f4bc)**
Soru Kökü: Düz kasın ince filaman yapısında yer alan ve myozinin aktine bağlanacağı bölgeleri istirahat halinde örterek kasılma regülasyonunda özelleşmiş görev yapan, düz kasa spesifik protein aşağıdakilerden hangisidir?
Doğru Şık (E): Kalponin
Açıklama: Düz kasta çizgili kastaki troponin kompleksi bulunmaz; bu eksikliği gidermek üzere miyozinin aktine bağlanma bölgelerini örten düz kasa özgü kalponin ve kaldesmon proteinleri devreye girer. Troponin-C iskelet ve kalp kasında kalsiyum bağlayan alt birim iken, tropomodulin aktin ucuna bağlanarak boyu ayarlayan bir kapak proteinidir. Kalponin, düz kasta filaman etkileşimini inhibe eden anahtar bir moleküldür.

**Soru 2 (ID: 9fb819eb-7779-4e15-a1c7-9466f9a02337)**
Soru Kökü: Düz kaslarda troponin proteini bulunmaz, ancak ince flamanların düzenlenmesini sağlayan spesifik proteinler mevcuttur. Düz kasta aktin molekülüne bağlanarak miyozinin bağlanacağı aktif bölgeleri örten ve kalsiyum-kalmodulin kompleksi varlığında ayrılarak kaymaya izin veren protein aşağıdakilerden hangisidir?
Doğru Şık (C): Kaldesmon
Açıklama: İskelet kasında aktin aktif bölgelerini örten troponin-tropomiyozin kompleksinin yerini, düz kasta düz kas spesifik proteinleri olan kaldesmon ve kalponin alır. Kalsiyum-kalmodulin (KKK) kompleksi kaldesmona bağlanarak onu aktin üzerinden çeker, böylece miyozin başının bağlanması için alan açılır.

---

### ÇİFT 17 (Benzerlik: 0.75)

**Soru 1 (ID: 1da1839a-4bdc-457e-a6cb-bdcc2636cec5)**
Soru Kökü: Motor nörondan gelen aksiyon potansiyeli sonrası kas hücresinde sitoplazmik kalsiyum artışı meydana gelir. Çizgili kas dokusunda sitoplazmaya salınan bu serbest kalsiyumun kasılmayı başlatmak için bağlandığı moleküler hedef aşağıdakilerden hangisidir?
Doğru Şık (C): Troponin-C
Açıklama: Çizgili kasta sarkoplazmik retikulumdan salınan kalsiyum, ince filaman üzerinde yer alan troponin kompleksinin Troponin-C (Kalsiyum) alt birimine bağlanır. Düz kasta kalsiyum sensörü kalmodulin iken, iskelet ve kalp kasının sensörü spesifik olarak troponin-C'dir. Kalsiyumun buraya bağlanması, troponin-I'nın aktini bırakmasını tetikleyerek miyozin için gerekli alanın açılmasını sağlar.

**Soru 2 (ID: da652994-4299-4b38-9fed-4ddba6f6bf7c)**
Soru Kökü: Düz kasta kasılmanın başlatılmasında etkili olan kalsiyum-kalmodulin kompleksi, kasılma sürecini tetiklemek için öncelikli olarak hangi enzimi aktive eder?
Doğru Şık (E): Miyozin hafif zincir kinaz (MLCK)
Açıklama: Düz kaslarda hücre içine giren kalsiyum kalmoduline bağlanır. Oluşan Ca++-kalmodulin kompleksi inaktif durumdaki miyozin hafif zincir kinazı (MLCK) aktive eder. Aktifleşen MLCK, miyozinin hafif zincirini fosforilleyerek miyozin ATPaz aktivitesini artırır ve aktinle çapraz köprü kurmasını (kasılmayı) sağlar. Gevşemeden ise miyozin defosforilasyonunu yapan miyozin fosfataz sorumludur.

---

### ÇİFT 18 (Benzerlik: 0.75)

**Soru 1 (ID: 90ddd820-d237-4914-b464-cca7b4a58b42)**
Soru Kökü: İskelet kasında sarkomer yapısında yer alan proteinlerle ilgili olarak, Z çizgilerini M çizgilerine bağlayarak sarkomer için iskelet vazifesi gören ve kasın aşırı gerilmesini önleyen yapısal protein aşağıdakilerden hangisidir?
Doğru Şık (E): Titin
Açıklama: Titin, iskelet kasında Z çizgisi ile M çizgisi arasında uzanan, aktin ve miyozin flamentlerini bir arada tutan oldukça esnek ve büyük bir yapısal proteindir. Alfa-aktinin aktini Z çizgisine sabitlerken, nebulin G-aktin monomerlerini bağlayarak F-aktin oluşumuna yardım eder. Desmin ise Z çizgisini hücre zarına bağlayarak lateral stabilizasyon sağlar.

**Soru 2 (ID: f2999756-92b9-42ca-965d-6b82ce6608cd)**
Soru Kökü: İskelet kasında yapısal bütünlüğü sağlayan proteinlerin hücre içi lokalizasyonları fonksiyonları açısından kritik öneme sahiptir. Aşağıdaki proteinlerden hangisi sarkomer yapısındaki Z diskine doğrudan veya dolaylı olarak tutunan moleküllerden biri **değildir**?
Doğru Şık (E): Miyozin II
Açıklama: Miyozin II kalın filamanları oluşturur ve sarkomerin merkezindeki M çizgisine tutunur, Z diski ile doğrudan bir teması yoktur. Aktin ince filaman olarak Z diskine alfa-aktinin ile tutunurken, titin miyozini Z diskine bağlayan bir yay görevi görür, desmin ise Z disklerini birbirine ve hücre zarına bağlar.

---

### ÇİFT 19 (Benzerlik: 0.75)

**Soru 1 (ID: 23b3ef3d-0481-45df-9075-c04dd5bdee93)**
Soru Kökü: Düz kas kasılma dinamiğinde ince filamanların organizasyonu iskelet kasından farklıdır. İskelet kasında aktin-miyozin etkileşimini kalsiyuma bağımlı olarak denetleyen troponin kompleksinin düz kastaki fonksiyonel homologu olan (miyozin bağlanma yerlerini örten) protein ikilisi aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (D): Kaldesmon - Kalponin
Açıklama: Düz kasta troponin yer almaz; ince filamanlarda aktin ve tropomyozin ile birlikte bulunan kaldesmon ve kalponin molekülleri, miyozin başının tutunacağı aktif bölgeleri örterek istirahat halini korur. Titin ve nebulin sarkomerik hizalanmayı sağlayan dev moleküler cetvellerdir ve düz kasta bu formatta bulunmazlar. Bu protein ikilisi, düz kasta kasılmanın düzenlenmesinde birincil bariyer görevi görür.

**Soru 2 (ID: a96a4ca4-840f-4026-9f6d-cfe88dad9c8c)**
Soru Kökü: İskelet kasında hücre içine giren kalsiyum iyonları Troponin-C'ye bağlanarak aktin üzerindeki miyozin bağlanma bölgelerinin açığa çıkmasını sağlar. Düz kas hücrelerinde troponin kompleksi bulunmadığına göre, sitoplazmadaki kalsiyum hangi proteine bağlanarak kasılma kaskadını başlatır?
Doğru Şık (D): Kalmodulin
Açıklama: Düz kasta troponin yoktur; hücre içine giren kalsiyum kalmoduline bağlanır (4 adet Ca ile). Oluşan Ca-Kalmodulin kompleksi daha sonra miyozin hafif zincir kinazı (MHZK) aktive ederek miyozin başının fosforillenmesini ve kasılmanın başlamasını tetikler. Kaldesmon, aktini kapatan proteindir ve kalmodulin kompleksi ile inhibe edilir.

---

