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

### ÇİFT 1 (Benzerlik: 0.79)

**Soru 1 (ID: d13e5ef1-6a20-4cb5-a4b1-9e5f7db025d9)**
Soru Kökü: Submandibular bez bölgesinde saptanan bir genişlemenin ayırıcı tanısında, aşağıdaki durumlardan hangisinin bilateral olarak görülmesi **beklenmez**?
Doğru Şık (E): Fibrozis
Açıklama: Tükürük bezi fibrozisi, genellikle kronik obstrüksiyon veya tekil travmaya ikincil geliştiği için submandibular bölgede unilateral (tek taraflı) genişleme ayırıcı tanısında yer alır, bilateral görülmesi beklenmez. Sjögren sendromu ve lenfadenit gibi sistemik veya yaygın reaktif durumlar bilateral submandibular büyümeye neden olur. Bu klinik ayrım lokal mekanik hasar ile sistemik hastalıkları birbirinden ayırmada temel bir kriterdir.

**Soru 2 (ID: fa382eae-eae4-4e49-95e1-8ee567314ec2)**
Soru Kökü: Parotis bezi bölgesinde unilateral (tek taraflı) genişlemeye neden olan lezyonların ayırıcı tanısında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Sjögren sendromuna bağlı glandüler tutulum
Açıklama: Sjögren sendromu sistemik otoimmün bir hastalık olduğu için tükürük bezlerinde unilateral değil, karakteristik olarak bilateral ve diffüz bir genişlemeye yol açar. Diğer şıklarda yer alan kistler, lenf nodu patolojileri veya lokal bakteriyel enfeksiyonlar tek bir parotis bezini asimetrik olarak etkileyebilir. Bu ayrım enflamatuar ile sistemik hastalıkların triyajında kritik rol oynar.

---

### ÇİFT 2 (Benzerlik: 0.77)

**Soru 1 (ID: a1e03783-276a-401f-ba28-ef7dae641b9f)**
Soru Kökü: Tükürük bezi patolojilerinin teşhisinde kullanılan sialografi, kanal sistemini en ince ayrıntısına kadar gösteren bir yöntem olmasına rağmen aşağıdaki durumların hangisinde mutlak kontrendikedir?
Doğru Şık (A): Akut bakteriyel enfeksiyon varlığı
Açıklama: Sialografi işleminde duktus sistemine enjekte edilen kontrast madde, bozulan kanal epiteli nedeniyle çevre dokuya taşarak şiddetli yabancı cisim reaksiyonuna ve ağrıya yol açacağı için akut enfeksiyon durumunda kontrendikedir. Kronik bakteriyel enfeksiyonlar ve kanal patolojilerinde sialografi temel endikasyondur, ancak akut alevlenme dönemlerinde işlemden kaçınılmalıdır. Bu yüzden en güçlü distraktör olan kronik bakteriyel enfeksiyon şıkkı, aksine bir endikasyon belirtir.

**Soru 2 (ID: cc677df6-5d70-4a3d-85db-2e899780ac18)**
Soru Kökü: Aralıklı şişlik, yemek yeme sırasında ağrı ve etkilenen bez kanalından püy akışı şikayetiyle başvuran akut bakteriyel sialadenit hastasında sialografi endikasyonu bulunmamaktadır. Bu klinik tabloda sialografinin uygulanmasının yaratacağı temel mekanik komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (B): Bozulan kanal epitelinin basınçla kontrast maddeyi parankim dışına iterek şiddetli ağrı ve yabancı cisim reaksiyonu yaratması
Açıklama: Akut enfeksiyon varlığında kanal epiteli zayıflar ve bütünlüğü bozulur; sialografi sırasında uygulanan basınçlı kontrast madde bu zayıf epitelden dışarıya (glandüler interstisyuma) kaçarak yabancı cisim reaksiyonuna ve şiddetli ağrıya sebep olur. Enfeksiyonun doğrudan artması veya bakteriyel fermantasyon söz konusu değildir; sorun tamamen mekanik rüptür riskidir. Bu nedenle akut pürülan enfeksiyonlarda sialografi kesin olarak kontrendikedir.

---

### ÇİFT 3 (Benzerlik: 0.74)

**Soru 1 (ID: 45cc6852-5c10-4254-993f-0dbdb24bad9d)**
Soru Kökü: Kırk beş yaşında bir kadın hasta sağ yanak bölgesinde yavaş büyüyen ağrısız kitle ile kliniğe başvurmuştur. Yapılan sialografi incelemesinde yer kaplayan solid bir kitlenin ana boşaltım kanalına (duktusa) dışarıdan baskı yaparak kanalın hafifçe yerini değiştirdiği, kanalın kitlenin etrafını kavisli bir şekilde sardığı gözlenmiştir. Bu radyografik görünüme verilen spesifik isim aşağıdakilerden hangisidir?
Doğru Şık (E): Ball-in-hand (elde tutulan top) görüntüsü
Açıklama: Benign tükürük bezi tümörleri genişlerken duktal sistemi invaze etmezler, aksine duktusları ve parankimi fiziksel olarak iterek sıkıştırırlar; sialografide kanalların kitle etrafında kavis çizerek açılmasına 'ball-in-hand' (elde tutulan top) görüntüsü denir. Sosis dizileri duktal fibroziste, ağaç dalları normal anatomide izlenir. Bu kavisli bası görüntüsü lezyonun ekspansif, non-invaziv (benign) karakterinin sialografik ispatıdır.

**Soru 2 (ID: 6e803097-5ddf-42ce-afc0-07da18d2a113)**
Soru Kökü: Glandüler parankimde yer kaplayan bir kitlenin duktusa baskı yapması veya hafifçe yerini değiştirmesi sonucu sialografide gözlemlenen ve iyi huylu neoplazmların ayrımında önemli olan 'ball-in-hand' (elde top) görünümü en sık aşağıdaki patolojilerin hangisinde izlenir?
Doğru Şık (A): Benign miks tümör (Pleomorfik adenom)
Açıklama: Pleomorfik adenom gibi benign, kapsüllü ve yer kaplayan yavaş büyüyen tümörler duktus sistemini erode etmeden iterek çevreler, bu da sialografik incelemede kanalların bir küreyi sarması 'ball-in-hand' imajına neden olur. Adenoid kistik karsinom gibi malign lezyonlar ise duktusları direkt invaze ve destrükte ederek ampute edilmiş kanal manzarası yaratır. Bu yüzden 'elde top' görüntüsü itici büyüme paterni sergileyen benign neoplazmların markerıdır.

---

### ÇİFT 4 (Benzerlik: 0.74)

**Soru 1 (ID: 26daefdd-70c1-4f10-9972-4537afe30096)**
Soru Kökü: Elli beş yaşındaki kadın hasta ağız kuruluğu ve parotis bölgesinde şişlik şikayetiyle başvurmuştur. Hastanın medikal anemnezinde yakın zamanda tiroid nodülü tespiti yapıldığı ve fonksiyonel değerlendirme planlandığı öğrenilmiştir. Bu hastanın tükürük bezi görüntülemesinde aşağıdaki yöntemlerden hangisi mutlak suretle **kontrendikedir**?
Doğru Şık (D): Sialografi
Açıklama: Sialografi kontrast ajanları genellikle iyot bazlı olduğundan, tiroid fonksiyon testleri beklenen hastalarda tiroidin iyot uptake mekanizmasını bozacağı için kesinlikle kontrendikedir. Ultrasonografi veya MRG, iyot yüklemesi gerektirmediği için bu hastada güvenle kullanılabilecek alternatif non-invaziv yöntemlerdir. İyot duyarlılığı ve iyot bazlı testler sialografinin en önemli iki medikal kısıtlılığıdır.

**Soru 2 (ID: fc991cde-e53f-441b-9349-f55fb9f135d8)**
Soru Kökü: Altmış yaşında bir hasta, şiddetli parotis bölgesi ağrısı ve yüksek ateş şikayetiyle başvurmuştur. Muayenede Stensen kanalı ağzından pürülan akıntı izlenmektedir. Diffüz enflamasyon ile lokal apsenin ayrımında Ultrasonografi kullanılabiliyorken, bozulan epitel sınırlarından sızarak şiddetli ağrı ve inflamasyon riski yarattığı için bu aşamada yapılması **kesinlikle kontrendike** olan tetkik hangisidir?
Doğru Şık (C): Sialografi
Açıklama: Akut süpüratif sialadenit vakalarında floraya ikincil gelişen enfeksiyon zeminine sialografide kullanılan kimyasal kontrast maddesi eklenirse, duktus epiteli bütünlüğünü yitirdiği için madde asiner yatağa geçerek granülomatöz şiddetli yabancı cisim reaksiyonu doğurur. USG akut inflamasyon ve süpürasyon kavitasyonunu ayırt etmede non-invaziv bir seçenektir. MRG veya BT radyasyon veya pahalılık dışında anatomik bir kontrendikasyon teşkil etmez.

---

### ÇİFT 5 (Benzerlik: 0.74)

**Soru 1 (ID: 8d720724-f090-4108-960f-442e9a03fa8b)**
Soru Kökü: Manyetik Rezonans Görüntüleme (MRG)'nin tükürük bezi hastalıklarındaki yeri ve tanısal değeri ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Minimal kalsifiye sialolitleri teşhis etmede en hassas görüntüleme yöntemidir.
Açıklama: MRG kemik ve kalsifikasyonlar gibi düşük su/hidrojen içeriğine sahip yapıları görüntülemede zayıftır; minimal kalsifiye sialolitlerin tespiti için en hassas yöntemler Sialografi, KIBT veya MDBT'dir. Ancak MRG yumuşak doku invazyonu ve özellikle adenoid kistik karsinom gibi tümörlerde görülen sinir kılıfı (perinöral) tutulumunu göstermede rakipsizdir. Sublingual kitlelerde yüksek malignite ihtimalinden dolayı MRG kullanımı bir standarttır.

**Soru 2 (ID: bf8206a0-c708-4250-b2c2-e2984d03de1a)**
Soru Kökü: Tükürük bezinin kistik lezyonlarının doğası ve görüntüleme özellikleri ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Tüm tükürük bezi kitleleri arasında en sık karşılaşılan (%50) gruptur.
Açıklama: Tükürük bezi kistleri (ranula, mukosel, lenfoepitelyal kist vb.) tüm majör ve minör bez hastalıkları düşünüldüğünde nadir görülür ve kaynakta belirtildiği üzere tüm tükürük bezi tümörlerinin %5'inden daha azını oluşturur. Ultrasonografik ve T2 MRG karakteristikleri sıvının fiziksel yapısını doğru tanımlar. Parotis bezindeki solid neoplazmlar kistik lezyonlardan çok daha sık izlenir.

---

### ÇİFT 6 (Benzerlik: 0.72)

**Soru 1 (ID: 6ba6bb0d-fe26-43f2-b61a-b13f1e6c392d)**
Soru Kökü: Akut bakteriyel sialadenit şüphesi ile ultrasonografik (USG) incelemeye alınan bir hastada, sadece diffüz enflamasyon tablosundan ziyade apse (süpürasyon) gelişimini gösteren patognomonik USG bulgusu aşağıdakilerden hangisidir?
Doğru Şık (D): Az ekolu (koyu imaj) veren düşük sinyalli alanlar
Açıklama: Akut bakteriyel sialadenitte apse (süpürasyon) geliştiğinde, sıvı toplanmasına bağlı olarak USG'de ses dalgaları daha az yansır; bu durum az ekolu (hipoekoik), düşük sinyalli, koyu imajlı alanlar olarak görülür. Diffüz enflamasyon ödem nedeniyle doku arayüzlerini artırdığı için yüksek sinyalli ve parlak (hiperekoik) bir görünüm verir. Bu ekojenite değişimi cerrahi drenaj endikasyonunu koymada hayati bir kriterdir.

**Soru 2 (ID: fc991cde-e53f-441b-9349-f55fb9f135d8)**
Soru Kökü: Altmış yaşında bir hasta, şiddetli parotis bölgesi ağrısı ve yüksek ateş şikayetiyle başvurmuştur. Muayenede Stensen kanalı ağzından pürülan akıntı izlenmektedir. Diffüz enflamasyon ile lokal apsenin ayrımında Ultrasonografi kullanılabiliyorken, bozulan epitel sınırlarından sızarak şiddetli ağrı ve inflamasyon riski yarattığı için bu aşamada yapılması **kesinlikle kontrendike** olan tetkik hangisidir?
Doğru Şık (C): Sialografi
Açıklama: Akut süpüratif sialadenit vakalarında floraya ikincil gelişen enfeksiyon zeminine sialografide kullanılan kimyasal kontrast maddesi eklenirse, duktus epiteli bütünlüğünü yitirdiği için madde asiner yatağa geçerek granülomatöz şiddetli yabancı cisim reaksiyonu doğurur. USG akut inflamasyon ve süpürasyon kavitasyonunu ayırt etmede non-invaziv bir seçenektir. MRG veya BT radyasyon veya pahalılık dışında anatomik bir kontrendikasyon teşkil etmez.

---

### ÇİFT 7 (Benzerlik: 0.72)

**Soru 1 (ID: 22719525-bd40-4131-8e6f-03c48f98367a)**
Soru Kökü: Tükürük bezi lezyonlarının görüntülenmesinde Konik Işınlı Bilgisayarlı Tomografi (KIBT), medikal tomografiye (MDBT) alternatif olarak kliniklere girmiştir. Ancak KIBT'nin, tükürük bezi neoplazmları ile normal parankimi ayırmadaki en büyük zayıflığı aşağıdakilerden hangisidir?
Doğru Şık (C): Yumuşak doku dansite farklılıklarını ayırt edememesi
Açıklama: KIBT (CBCT) sert doku ve kemik yapılarını mükemmel çözünürlükle göstermesine (minimal kalsifiye sialolitleri gayet iyi yakalar) rağmen, farklı yumuşak dokuların dansite farklarını (örneğin sağlıklı bez dokusu ile solid tümör dokusunu) birbirinden ayırmada yetersizdir. MDBT ve özellikle MRG yumuşak doku kontrastında üstündür. Bu zayıflık sebebiyle neoplazm şüphesinde KIBT değil MRG/MDBT tercih edilir.

**Soru 2 (ID: 8d720724-f090-4108-960f-442e9a03fa8b)**
Soru Kökü: Manyetik Rezonans Görüntüleme (MRG)'nin tükürük bezi hastalıklarındaki yeri ve tanısal değeri ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Minimal kalsifiye sialolitleri teşhis etmede en hassas görüntüleme yöntemidir.
Açıklama: MRG kemik ve kalsifikasyonlar gibi düşük su/hidrojen içeriğine sahip yapıları görüntülemede zayıftır; minimal kalsifiye sialolitlerin tespiti için en hassas yöntemler Sialografi, KIBT veya MDBT'dir. Ancak MRG yumuşak doku invazyonu ve özellikle adenoid kistik karsinom gibi tümörlerde görülen sinir kılıfı (perinöral) tutulumunu göstermede rakipsizdir. Sublingual kitlelerde yüksek malignite ihtimalinden dolayı MRG kullanımı bir standarttır.

---

### ÇİFT 8 (Benzerlik: 0.71)

**Soru 1 (ID: 11a39ba7-1f59-49fd-b026-039ce16dbd7c)**
Soru Kökü: Tükürük bezi dışı bazı anatomik varyasyonlar, klinik muayenede parotis tümörlerini taklit edebilir. Masseter kasının fonksiyonel hipertrofisine bağlı oluşan yanak şişliğinde ekstraoral radyografilerde;

I. Derinleşmiş antegonial çentik
II. Artmış mandibular açı boyutu
III. Angulus mandibula dış yüzeyinde ekzositoz (kemik çıkıntısı)

bulgularından hangilerinin izlenmesi beklenir?
Doğru Şık (D): I, II ve III
Açıklama: Hipertrofiye uğramış masseter kasının mandibular angulus bölgesindeki kuvvetli traksiyonel çekme gücü zamanla kemik apozisyonunu tetikleyerek dış yüzeyde ekzositoz, artmış geniş bir mandibular açı ve kompanzasyon gereği alt sınırda derin bir antegonial çentik yaratır. Tükürük bezi tümörleri yumuşak doku kökenli olup kemikte sadece rezorpsiyon veya remodeling yaratabilirken, kas hipertrofileri net traksiyonel osteogenez yapar.

**Soru 2 (ID: f386408c-6f2b-4fe4-b870-e9e6154faa2d)**
Soru Kökü: Klinik muayenesinde preauriküler bölgede tek taraflı şişlik saptanan ve tükürük bezi tümörü şüphesiyle panoramik grafisi çekilen 24 yaşındaki erkek hastada, artmış mandibular açı ve derin antegonial çentik izlenmiştir. Bu hastada parotis bezi tümörünü taklit eden en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (C): Maseter kası hipertrofisi
Açıklama: Maseter kası hipertrofisi klinik olarak parotis tümörlerini taklit edebilen, ekstraoral grafilerde ise artmış mandibular açı, dış yüzeyde ekzositoz ve derin antegonial çentik gibi spesifik kemik değişiklikleri ile teşhis edilen bir kas patolojisidir. Brankial kleft kistleri parotis değil submandibular/servikal bölgede kitle yapar ve kemik değişikliği oluşturmazlar. Bu nedenle doğru tanı radyografik kemik adaptasyonlarıyla doğrulanan maseter hipertrofisidir.

---

### ÇİFT 9 (Benzerlik: 0.71)

**Soru 1 (ID: 1ac4af79-25b3-4c42-89a1-eecabe0d946e)**
Soru Kökü: Özellikle minör tükürük bezlerinde yüksek oranda görülen, fasiyal ve trigeminal sinir kılıfları boyunca oluşturduğu perinöral yayılım potansiyeli sebebiyle post-kontrast MRG tetkikine kesin ihtiyaç duyulan malign tükürük bezi tümörü aşağıdakilerden hangisidir?
Doğru Şık (B): Adenoid kistik karsinom
Açıklama: Adenoid kistik karsinom (Silindirom), tümör biyolojisi gereği nörotropik bir patolojidir; epinöryum boyunca sıçrayıcı tarzda ilerlediği için sınırlarının cerrahi öncesi MRG ile çok dikkatli çizilmesi gerekir. Mukoepidermoid karsinom lenfatik ve invaziv yayılan en sık malignite iken, perinöral traktüs yayılımı spesifik olarak adenoid kistik karsinomun patognomonik bir progresyon yoludur. Bu nedenle sinirlerde kalınlaşma MRG endikasyonudur.

**Soru 2 (ID: d189b37c-6ab8-4892-a0e3-821d3bf01a7e)**
Soru Kökü: Altmış yaşındaki erkek hasta, yüzünün sağ tarafında oluşan şiddetli ağrı, parestezi ve dudak simetrisinde kayıp (fasial paralizi) ile hastaneye yatırılmıştır. MDBT ve MRG raporları sağ parotis lojunda belirsiz ve düzensiz kenarlı, T1 sekansında homojen koyu (düşük sinyal), T2 sekansında ise heterojen ve intens özellik sergileyen glandüler parankimden daha dens bir kitleyi işaret etmiştir. Bu agresif tabloya sahip tümör aşağıdakilerden hangisi olabilir?
Doğru Şık (E): Yüksek evreli mukoepidermoid karsinom
Açıklama: Yüksek evreli mukoepidermoid karsinom, tüm malign epitelyal neoplazmlar içerisinde asiner aralığı en hızlı terk eden ve fasyal motor siniri çevreleyerek fasial paralizi geliştiren en yaygın kitledir. MRG'de maligniteye has T1'de düşük doku sinyali, T2'de ise iç kanama ve nekroz alanlarına bağlı heterojen parlaklık sergiler. Belirgin sınır yokluğu benign (Warthin, Pleomorfik) seçenekleri tamamen ekarte eder.

---

### ÇİFT 10 (Benzerlik: 0.70)

**Soru 1 (ID: 01192c3b-22ee-418a-886a-0d128d757b21)**
Soru Kökü: Tükürük bezlerinde gelişen neoplazmların malign (kötü huylu) olma olasılığı bezin anatomik boyutuna ve lokasyonuna göre dramatik şekilde değişmektedir. Buna göre oransal olarak saptanan kitlelerin yaklaşık %90'ının malign karakter taşıdığı ve cerrahide bezin daima tamamen eksize edildiği lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Sublingual bez
Açıklama: Tükürük bezi onkolojisinde 'bez küçüldükçe malignite oranı artar' kuralı geçerlidir; parotis kitlelerinin %20'si malignken, sublingual bezde bu oran ekstrem bir seviye olan %90'a ulaşır. Submandibular bezde bu oran %50-60 bandındadır. Sublingual bezde kitle tespit edildiğinde çok yüksek ihtimalle malign olduğu varsayılarak direkt MRG istenmeli ve kısmi değil total bez eksizyonu planlanmalıdır.

**Soru 2 (ID: 7f9f3096-718e-4b8f-99e2-8e8a56ff89c2)**
Soru Kökü: Tükürük taşı (sialolit) oluşumu, anatomik ve fizyolojik nedenlerden dolayı belirli bezlerde çok daha sık izlenmektedir. Tüm sialolitiazis vakalarının yaklaşık %83'ünün görüldüğü anatomik lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Submandibular bez ve Wharton kanalı
Açıklama: Sialolitiazis anatomik kanal uzunluğunun fazla olması, tükürüğün yerçekimine karşı yukarı doğru akması ve sekresyonun daha müköz karakterde olması nedeniyle %83 gibi ezici bir çoğunlukla submandibular bez ve Wharton kanalında görülür. Parotis bezi seröz karakterde tükürük ürettiği ve kanal yapısı daha düz olduğu için taş oluşumuna daha dirençlidir. Bu fizyolojik ve anatomik dezavantaj submandibular bezi taş oluşumunun primer hedefi yapar.

---

### ÇİFT 11 (Benzerlik: 0.70)

**Soru 1 (ID: b98009cb-3a21-4ead-a06d-9c61a5586501)**
Soru Kökü: Elli yaşındaki kadın hastanın sağ yanak bölgesinde yavaş ve ağrısız büyüyen, MDBT'de lobüllü ve keskin sınırlı kitle tespit edilmiştir. İnsizyonel biyopsisi 'Pleomorfik Adenom' ile uyumlu gelen bu benign kitle için pre-operatif Manyetik Rezonans Görüntüleme (MRG) T2 ağırlıklı sekanslarında izlenmesi en olası sinyal deseni aşağıdakilerden hangisidir?
Doğru Şık (E): Homojen, yüksek (parlak) sinyal intensitesi
Açıklama: Pleomorfik adenom yüksek müsinöz ve sıvı zengin matriksi nedeniyle MRG T2 ağırlıklı sekanslarda çevre parankime göre çok belirgin ve homojen bir yüksek sinyal (parlaklık) üretirken, T1'de düşük doku sinyali sunar. Nekroz ve fokal sinyal kayıpları daha çok heterojen yapılı malign kitlelerde izlenir. Benign tümörlerin T2 hiperintensitesi kapsüllü sınırlarla birleşince cerrahi triyaj kolaylaşır.

**Soru 2 (ID: d189b37c-6ab8-4892-a0e3-821d3bf01a7e)**
Soru Kökü: Altmış yaşındaki erkek hasta, yüzünün sağ tarafında oluşan şiddetli ağrı, parestezi ve dudak simetrisinde kayıp (fasial paralizi) ile hastaneye yatırılmıştır. MDBT ve MRG raporları sağ parotis lojunda belirsiz ve düzensiz kenarlı, T1 sekansında homojen koyu (düşük sinyal), T2 sekansında ise heterojen ve intens özellik sergileyen glandüler parankimden daha dens bir kitleyi işaret etmiştir. Bu agresif tabloya sahip tümör aşağıdakilerden hangisi olabilir?
Doğru Şık (E): Yüksek evreli mukoepidermoid karsinom
Açıklama: Yüksek evreli mukoepidermoid karsinom, tüm malign epitelyal neoplazmlar içerisinde asiner aralığı en hızlı terk eden ve fasyal motor siniri çevreleyerek fasial paralizi geliştiren en yaygın kitledir. MRG'de maligniteye has T1'de düşük doku sinyali, T2'de ise iç kanama ve nekroz alanlarına bağlı heterojen parlaklık sergiler. Belirgin sınır yokluğu benign (Warthin, Pleomorfik) seçenekleri tamamen ekarte eder.

---

### ÇİFT 12 (Benzerlik: 0.69)

**Soru 1 (ID: 22719525-bd40-4131-8e6f-03c48f98367a)**
Soru Kökü: Tükürük bezi lezyonlarının görüntülenmesinde Konik Işınlı Bilgisayarlı Tomografi (KIBT), medikal tomografiye (MDBT) alternatif olarak kliniklere girmiştir. Ancak KIBT'nin, tükürük bezi neoplazmları ile normal parankimi ayırmadaki en büyük zayıflığı aşağıdakilerden hangisidir?
Doğru Şık (C): Yumuşak doku dansite farklılıklarını ayırt edememesi
Açıklama: KIBT (CBCT) sert doku ve kemik yapılarını mükemmel çözünürlükle göstermesine (minimal kalsifiye sialolitleri gayet iyi yakalar) rağmen, farklı yumuşak dokuların dansite farklarını (örneğin sağlıklı bez dokusu ile solid tümör dokusunu) birbirinden ayırmada yetersizdir. MDBT ve özellikle MRG yumuşak doku kontrastında üstündür. Bu zayıflık sebebiyle neoplazm şüphesinde KIBT değil MRG/MDBT tercih edilir.

**Soru 2 (ID: 75ba28fa-f583-4e92-9d6f-540ce4c6cf60)**
Soru Kökü: Pozitron Emisyon Tomografisi (PET), tükürük bezi görüntülemesinde sintigrafiden çok daha yüksek bir uzamsal çözünürlüğe sahip olmasına rağmen rutinde tercih edilmez. Tükürük bezi onkolojisinde PET taramasının yetersiz kaldığı asıl nokta aşağıdakilerden hangisidir?
Doğru Şık (B): Tümörlerin benign ve malign olarak sınıflandırılmasında kullanışlı olmaması
Açıklama: PET taraması (18F-FDG) artmış metabolik aktiviteyi (glikoz tüketimini) saptayarak yüksek çözünürlük sağlar, ancak Warthin tümörü veya pleomorfik adenom gibi benign, ancak hipermetabolik (sıcak) tükürük bezi lezyonları da yoğun tutulum gösterdiğinden lezyonun benign mi malign mi olduğunu (spesifitesini) ayırt edemez. Sintigrafi/PET bu nedenle sadece metastaz taramalarında destekleyicidir, primer karakterizasyon için MRG/Biyopsi gerekir.

---

### ÇİFT 13 (Benzerlik: 0.69)

**Soru 1 (ID: 90958902-9063-4c7c-9269-4e8b13fa8a3e)**
Soru Kökü: Sialadenozis (Sialozis), parotis bezinin neoplastik ve enflamatuar karakter göstermeyen diffüz ve bilateral genişlemesidir. Asiner hücre boyutlarındaki bu artışın altında yatan etiyolojik faktörler arasında;

I. Hormonal bozukluklar (Diyabet vb.)
II. Nörolojik bozukluklar
III. Protein ve vitamin eksiklikleri (Malnütrisyon/Alkolizm)
IV. Viral ve granülomatöz lokal enfeksiyonlar

durumlarından hangileri yer alır?
Doğru Şık (C): I, II ve III
Açıklama: Sialadenozis tamamen sistemik metabolik ve otonom sinir sistemi fonksiyon bozukluğuna bağlı gelişen bir parenkimal distrofi durumudur; endokrin (hormonal), malnütrisyon, alkolizm ve lokal otonom nöropati temel nedenleridir. Viral, granülomatöz veya bakteriyel lokal ajanlar tabloya eklendiği an hastalık 'sialozis' kimliğinden çıkarak 'sialadenit' spektrumuna girer. Dolayısıyla IV. öncül etiyolojide yer almaz.

**Soru 2 (ID: bb0f8ad0-aa22-4ff1-8034-77544c434228)**
Soru Kökü: Alkolizm, protein eksiklikleri ve nörolojik bozukluklar öyküsü olan 45 yaşındaki hastanın her iki parotis bezinde yavaş gelişen, ağrısız bir genişleme saptanmıştır. Yapılan biyopsi ve radyolojik incelemede neoplastik ve enflamatuar hücre infiltrasyonu gözlenmemiştir. Bu klinik senaryo ile en uyumlu tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Sialadenozis (Sialozis)
Açıklama: Sialadenozis (sialozis); hormonal, beslenme (alkolizm) veya nörojenik nedenlere bağlı olarak terminal asinilerin non-enflamatuar, non-neoplastik senkop hipertrofisidir ve daima bilateral parotis şişliği yapar. Sjögren sendromu da bilateral şişlik yapsa da kökeni kronik enflamatuar/otoimmün lenfositik infiltrasyondur. Enflamatuar hücre yokluğu ve sistemik metabolik hikaye sialadenozis tanısını kesinleştirir.

---

