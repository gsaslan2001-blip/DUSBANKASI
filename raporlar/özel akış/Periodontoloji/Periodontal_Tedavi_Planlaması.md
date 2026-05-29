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

**Soru 1 (ID: 6ea50a1b-bd8a-479c-8809-18f57ba706b7)**
Soru Kökü: İnatçı subgingival diş taşlarının ve ledgelerin (basamak) kırılmasında kullanılan, bıçağı gövdeye 99 derece eğimli olan ve dokuya zarar vermemek için diş yüzeyine iki noktadan temas ederek aktive edilmesi gereken periodontal el aleti aşağıdakilerden hangisidir?
Doğru Şık (B): Hoe kretuar
Açıklama: Hoe (çapa) kretuarlar tek bir kesici kenara sahip olup bıçağı gövdeyle 99 derece açı yapacak şekilde eğimlidir. Bu yapı, çok sert ve yapışık kalkulus bloklarının (ledge) altından girip kırmak için idealdir. Keskin köşelerinin kökü oymaması için diş yüzeyine hem bıçağın ucuyla hem de aletin boyun kısmıyla (iki noktadan) destek alarak kullanılması şarttır.

**Soru 2 (ID: bd119e94-a160-4a29-a7df-60142a04949b)**
Soru Kökü: Aşağıdaki periodontal el aletlerinden hangisi, rezidüel kalkulus veya ledgeleri kırmak amacıyla tasarlanmış olup, tek bir kesici kenara sahip ve bıçağı gövde ile 99 derece açı yapacak formdadır?
Doğru Şık (C): Hoe kretuar
Açıklama: Hoe (çapa) kretuarları kalkulusu kırmak ve dişten ayırmak için kullanılır, bıçakları 99 derece açılıdır ve diş yüzeyine iki noktada temas sağlarlar. Chisel aletleri ise özellikle dar interproksimal alanlarda itme hareketi ile çalışır.

---

### ÇİFT 2 (Benzerlik: 0.84)

**Soru 1 (ID: 5bd04a73-e02f-4690-b5f1-4828c9d74595)**
Soru Kökü: 55 yaşında, hipertansiyon tedavisi alan ve kardiyolojiden sıkı sodyum kısıtlaması diyeti verilen bir hastada inatçı çay lekelerinin temizlenmesi için air powder polishing (hava-su-toz püskürtücü) cihazı kullanılacaktır. Bu hastanın sistemik tablosu dikkate alındığında cihazda kullanımı **kontrendike** olan toz materyali aşağıdakilerden hangisidir?
Doğru Şık (A): Sodyum bikarbonat
Açıklama: Sodyum bikarbonat tozu ile uygulanan air polishing, toz partiküllerinin emilimiyle vücuda sodyum yüklemesine neden olur. Bu durum, hipertansiyonu olan veya sodyum kısıtlı diyet uygulayan elektrolit dengesizliği riski taşıyan hastalarda kontrendikedir. Bu hastalarda glisin veya eritritol gibi güvenli alternatifler seçilmelidir.

**Soru 2 (ID: 77ac46e4-c7dc-498c-ae1f-46457c0b2d19)**
Soru Kökü: Elli beş yaşında, anamnezinde hipertansiyon hikayesi bulunan ve diyetinde sodyum kısıtlaması uygulanan bir erkek hastanın periodontal idame seansında air-powder polishing (hava-toz püskürtme) işlemi yapılması planlanmaktadır. Bu hastada aşağıdaki tozlardan hangisinin kullanımı **kontrendikedir**?
Doğru Şık (A): Sodyum bikarbonat
Açıklama: Sodyum bikarbonat tozu, içerdiği sodyum nedeniyle elektrolit dengesini etkileyebilir ve hipertansiyon hikayesi olan, sodyum kısıtlaması yapılan hastalarda sistemik komplikasyonlara yol açabileceği için kesinlikle kullanılmamalıdır. Glisin ve eritritol gibi diğer tozlar bu tür sistemik riskler taşımaz ve implant yüzeyleri dahil subgingival/supragingival alanlarda güvenle uygulanabilir. Alüminyum trihidroksit sodyum içermez ancak kök yüzeyinde aşınmalara yol açabilir, sistemik bir kontrendikasyonu bu senaryoyla uyuşmaz.

---

### ÇİFT 3 (Benzerlik: 0.83)

**Soru 1 (ID: ce699f1d-5cc6-48d9-a6fa-26262375edc7)**
Soru Kökü: Klinik muayenede dişi canlı, yüzeyinde çürük bulunmayan ve sondlamada periodontal cebi olmayan bir hastanın radyografisinde dişin kök yüzeyinde lateral yerleşimli bir radyolusensi saptanmıştır. Bu klinik ve radyografik bulgularla en uyumlu lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Periodontal kist
Açıklama: Periodontal kist klinik olarak periodontal cep vermez, diş canlıdır ve çürük bulunmaz ancak radyografide kök yüzeyine komşu lateral bir radyolusensi olarak kendini gösterir. Periodontal apsede cep formasyonu belirginken, gingival apsede radyografik bulgu saptanmaz.

**Soru 2 (ID: f64e12c2-b892-4a93-9fce-d79602aeeb14)**
Soru Kökü: Otuz yaşındaki kadın hastanın rutin radyografik incelemesinde, sağ mandibular kanin dişinin lateral kök yüzeyinde sınırlı bir radyolusensi saptanmıştır. İlgili dişin klinik muayenesinde pulpa vitalite testleri pozitiftir, çürük, periodontal cep derinliği artışı veya mobilite saptanmamıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Periodontal kist
Açıklama: Periodontal kist, klinik olarak asemptomatik seyredebilen, cep veya çürük barındırmayan ancak radyografide lateral radyolusensi veren, canlı dişi ilgilendiren bir lezyondur. Periodontal apsede mutlaka patolojik cep bulunurken, periapikal apsede diş devitaldir ve radyolusensi apikaldedir.

---

### ÇİFT 4 (Benzerlik: 0.82)

**Soru 1 (ID: 69f6ffe2-f6ac-45f4-89b5-7bc7d9124d22)**
Soru Kökü: Diş taşı temizliği ve kök yüzeyi düzleştirmesi işleminin ardından, subgingival alanda kalan ince kalkulus adacıklarının ve kök yüzeyi pürüzlülüğünün teşhis edilmesinde aşağıdakilerden hangisinin kullanılması **en az** travmatik ve en etkilidir?
Doğru Şık (A): Explorerlar
Açıklama: Explorerlar, oldukça ince ve esnek tel uçlara sahip teşhis aletleri oldukları için, kök yüzeyindeki mikroskobik pürüzleri ve rezidüel diştaşlarını dokunsal (taktil) hassasiyetle hekime iletirler. Orak kretuarlar veya küretler kesici ve nispeten kalın aletler olduklarından, salt teşhis amacıyla sulkus içine sokulmaları hem yumuşak dokuyu zedeler hem de kök sementinde istenmeyen çiziklere yol açabilir. Bu nedenle debridman sonrası kontrol aşamasında sadece explorerlar veya periodontal sondlar ile yüzey taraması yapılmalıdır.

**Soru 2 (ID: bb3b90ff-a44a-44bf-a1be-171356a9ef04)**
Soru Kökü: Periodontal dokuların debridmanı sonrasında kök yüzeyindeki pürüzlülüğü hissetmek ve furkasyon girişlerindeki kalkulusları saptamak için en uygun alet aşağıdakilerden hangisidir?
Doğru Şık (C): Explorer
Açıklama: Explorer'lar ince ve esnek uçlara sahip aletlerdir. İnce yapıları sayesinde subgingival birikintileri hissetmek, çürükleri saptamak ve kök düzeltmesi (root planing) sonrası kök yüzeyinin pürüzsüzlüğünü (taktil his ile) değerlendirmek amacıyla kullanılırlar.

---

### ÇİFT 5 (Benzerlik: 0.82)

**Soru 1 (ID: 2df53ee5-e3f5-4c3c-a983-d131ddf08cd9)**
Soru Kökü: Aşağıdaki antibiyotiklerden hangisi, kemik dokusuna güçlü afinitesi olması ve tetrasiklinlere dirençli refrakter periodontitis vakalarında etkili olması nedeniyle periodontal tedavide tercih edilebilir?
Doğru Şık (C): Klindamisin
Açıklama: Klindamisin, anaeroblara karşı etkili bakteriyostatik bir antibiyotiktir. Kemik dokusuna yüksek penetrasyonu vardır ve özellikle tetrasiklin veya penisilin türevlerine dirençli refrakter periodontitis vakalarında etkili bir alternatiftir. En önemli yan etkisi pseudomembranöz kolittir.

**Soru 2 (ID: b3d71956-e45a-4a16-b038-eda43a46ae86)**
Soru Kökü: Penisilin alerjisi hikayesi olan bir hastada tedaviye dirençli (refrakter) periodontitis gelişmiştir. Özellikle anaeroblara karşı etkili olan ve alveoler kemik dokusuna afinitesinin (tutunma ve birikme yeteneğinin) yüksek olması sayesinde çene kemiği enfeksiyonlarında başarı sağlayan farmakolojik ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Klindamisin
Açıklama: Klindamisin, linkozamid grubu bir antibiyotiktir ve kemik dokusuna olan güçlü afinitesi (nüfuz etme kabiliyeti) ile bilinir. Bu özellik, onu özellikle kemik yıkımıyla seyreden tedaviye dirençli periodontitis vakalarında penisilin alerjisi olanlar için birinci sınıf bir alternatif yapar. Metronidazolun kemik afinitesi bu derece spesifik vurgulanmaz, klindamisin kemik penetrasyonunda standarttır.

---

### ÇİFT 6 (Benzerlik: 0.81)

**Soru 1 (ID: 087632c2-59c4-4ffc-a45c-1277df2d06d7)**
Soru Kökü: Fırça kıllarının dişetini 2-3 mm örtecek şekilde apekse doğru 45 derecelik açıyla konumlandırılıp, fırça başının okluzal yönde diş ve dişeti üzerinde yuvarlanarak (süpürme) hareket ettirildiği teknik aşağıdakilerden hangisidir?
Doğru Şık (E): Roll tekniği
Açıklama: Roll (yuvarlak) tekniğinde fırça apekse dönük yerleştirildikten sonra koronal yöne doğru yuvarlanarak çekilir, bu sayede hem masaj etkisi yaratılır hem de plak okluzale doğru süpürülür. Bass tekniğinde ise yuvarlama yerine kısa vibrasyon hareketleriyle sulkus içi temizlik hedeflenir.

**Soru 2 (ID: 8dc42b1b-a5d0-436e-a3ed-64112be1577b)**
Soru Kökü: Aşağıdaki diş fırçalama tekniklerinden hangisinde, fırça kılları sulkus içerisine 45 derecelik açı yapacak şekilde yerleştirildikten sonra, fırçaya horizontal yönde ileri-geri kısa vibrasyon hareketleri yaptırılarak dişeti kenarının altındaki alanın temizlenmesi hedeflenir?
Doğru Şık (B): Bass Tekniği
Açıklama: Bass tekniği, sulkus temizliği odaklıdır ve fırça kılları apekse doğru 45 derece açı ile sulkusa yerleştirilerek kısa vibrasyon hareketleri ile uygulanır. Modifiye Stillman tekniğinde fırça kıllarının bir kısmı yapışık diş eti üzerinde konumlanır ve fırçaya vibrasyon verilerek koronal yönde çekilir; Charter tekniğinde ise fırça kılları oklüzal yöne dönüktür.

---

### ÇİFT 7 (Benzerlik: 0.81)

**Soru 1 (ID: 5603ae04-61bc-43a1-a84d-32e6e96cfbc5)**
Soru Kökü: Periodontal apse ile periapikal (endodontik) apseyi ayırıcı tanıda değerlendirirken, lezyonun periodontal kaynaklı olduğunu düşündüren **en güçlü** klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Etkilenen dişte pulpa vitalite testlerine pozitif (canlı) yanıt alınması
Açıklama: Periodontal apsede dişin pulpası genellikle canlıdır (vitaldir) ve pulpa testlerine pozitif yanıt verir. Periapikal apsede ise diş devitaldir. Şiddetli spontan ağrı ve derin çürük endodontik patolojiyi işaret eder.

**Soru 2 (ID: c760ed82-20b9-44cc-8dce-4f2d49f0d1b5)**
Soru Kökü: Klinikte saptanan bir apsenin periradiküler (endodontik) kaynaklı mı yoksa periodontal kaynaklı mı olduğunu ayırt etmede kullanılan en kesin tanısal kriter aşağıdakilerden hangisidir?
Doğru Şık (A): Pulpa vitalite durumu
Açıklama: Periodontal ve endodontik apselerin ayrımında en güvenilir klinik test pulpa vitalitesidir; endodontik lezyonlarda pulpa devital iken, primer periodontal apselerde diş tipik olarak canlıdır. Mobilite ve radyografik kayıp her iki tabloda da (özellikle kombine lezyonlarda) örtüşebileceğinden primer ayırıcı tanı kriteri olarak vitalite kadar spesifik değildir.

---

### ÇİFT 8 (Benzerlik: 0.81)

**Soru 1 (ID: 3f5830f4-0f3c-4d1f-be77-46a646cf5290)**
Soru Kökü: Gingivektomi operasyonlarında fasial ve lingual yüzeylerdeki hiperplastik dişeti dokusunu eksize etmek amacıyla özel olarak dizayn edilmiş böbrek şekilli bıçak aşağıdakilerden hangisidir?
Doğru Şık (B): Kirkland bıçağı
Açıklama: Gingivektomide düz ve geniş alanlar olan fasial ve oral yüzeylerin kesimi için böbrek şeklindeki Kirkland bıçağı kullanılır. Orban bıçağı ise daha ince ve açılı tasarımı sayesinde interdental (papil) alanlardaki eksizyonlar için tasarlanmıştır. Bu anatomik farklılık, cerrahi aletin formasyonunu belirler.

**Soru 2 (ID: 65636e9d-996a-44f5-9f0f-29c1ec31a63f)**
Soru Kökü: Gingivektomi operasyonlarında fasial kesiler tamamlandıktan sonra, interdental alanlardaki (papil bölgesi) dişeti dokusunu serbestleştirmek ve eksize etmek için kullanılan spesifik cerrahi alet aşağıdakilerden hangisidir?
Doğru Şık (C): Orban bıçağı
Açıklama: Orban bıçağı mızrak ucu şeklinde tasarımı ve her iki yüzeyinin de kesici olması sayesinde interdental alana rahatça girerek buradaki dişetini eksize etmek için kullanılır. Kirkland bıçağı fasial yüzeylerdeki geniş eksizyonlar içindir; ikisi operasyonda birbirini tamamlayarak çalışır.

---

### ÇİFT 9 (Benzerlik: 0.80)

**Soru 1 (ID: 13b16f3f-36ed-4db4-a004-24fead3d7c0a)**
Soru Kökü: Piezoelektrik ultrasonik aletler ile magnetostriktif ultrasonik aletlerin çalışma mekanizmaları karşılaştırıldığında aşağıdakilerden hangisi doğrudur?
Doğru Şık (B): Magnetostriktif uçların tüm yüzeyleri aktif olarak çalışır.
Açıklama: Magnetostriktif ultrasonik aletler eliptik bir çalışma yönüne sahiptir ve ucun tüm yüzeyleri (ön, arka ve yanlar) aktiftir. Piezoelektrik cihazlarda ise uç lineer (ileri-geri) hareket eder ve genellikle sadece iki yan yüzeyi aktif olarak çalışır.

**Soru 2 (ID: 30e5c37a-0290-4958-adbe-0facce38d01c)**
Soru Kökü: Motorlu diştaşı temizliği aletlerinden olan piezoelektrik ve magnetostriktif ultrasonik üniteler karşılaştırıldığında aşağıdaki çalışma prensiplerinden hangisi doğrudur?
Doğru Şık (D): Magnetostriktif sistemlerde hareket paterni eliptik veya orbital olduğu için ucun her yüzeyi (sırt, karın, lateral kenarlar) aktiftir.
Açıklama: Magnetostriktif ultrasonik üniteler çalışırken oluşan manyetik alan uç kısmın eliptik veya sekiz çizer tarzda (orbital) titremesine neden olur. Bu karmaşık hareket paterni sayesinde alet ucunun her tarafı diş taşı temizliğinde aktiftir. Oysa piezoelektrik cihazlarda hareket lineerdir (ileri-geri) ve bu nedenle uç kısmın sadece iki yüzeyi aktif kazıma yapabilir.

---

### ÇİFT 10 (Benzerlik: 0.80)

**Soru 1 (ID: 5839c641-f15b-4b03-b9b9-6f4b1f6bc416)**
Soru Kökü: Nekrotizan gingivitis (NG) tedavisinde, ilk seansta lezyonların yüzeyindeki pseudomembranın uzaklaştırılması ve oksijenizasyonun sağlanması amacıyla aşağıdaki ajanlardan hangisi öncelikle tercih edilir?
Doğru Şık (B): %3 Hidrojen peroksit (dilüe edilmiş)
Açıklama: NG tedavisinde ilk seansta pseudomembran ve zayıf tutunan mikroorganizmaları uzaklaştırmak için %3 hidrojen peroksitin eşit oranda su ile dilüe edilmiş hali pamuk peletler yardımıyla kullanılır. Hidrojen peroksit köpürerek yüzeyel debrisin uzaklaşmasını sağlar ve anaerob bakteriler için toksik olan oksijenizasyonu arttırır. Klorheksidin daha sonra hastaya evde kullanım için önerilebilir ancak ilk seansta pseudomembran uzaklaştırmada primer tercih değildir.

**Soru 2 (ID: cb528455-6df5-49db-a815-746eeb1fb6b7)**
Soru Kökü: Akut nekrotizan gingivitis teşhisi konulan bir hastanın ilk seans acil müdahalesinde, lezyon yüzeyindeki pseudomembranın uzaklaştırılması amacıyla kullanılan ajanın birincil etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Köpürerek pseudomembranı uzaklaştırmak, oksijenizasyonla anaerob bakterileri azaltmak
Açıklama: NUG'un ilk seansında kullanılan %3'lük seyreltilmiş hidrojen peroksit, uygulandığı alanda efervesan (köpürme) etkisi yaratarak nekrotik pseudomembranları fiziksel olarak uzaklaştırır. Ek olarak ortama bıraktığı serbest oksijen sayesinde, NUG'un etiyolojisinde yer alan obligat anaerob bakteriler (fusospiroketal kompleks) üzerinde toksik etki göstererek bakteri yükünü dramatik olarak düşürür.

---

### ÇİFT 11 (Benzerlik: 0.80)

**Soru 1 (ID: 0124b775-e3c4-407b-b119-6642d92c4bb3)**
Soru Kökü: Gracey küretler ile Üniversal küretler karşılaştırıldığında aşağıdaki ifadelerden hangisi **doğrudur**?
Doğru Şık (C): Gracey küretler bölgeye özgü kullanılırken, üniversal küretler tüm alan ve yüzeylerde kullanılabilir.
Açıklama: Gracey küretler anatomik bölgelere özgü (site-spesifik) aletlerdir, tek bir kesici kenara sahiptirler ve bıçak gövdeye 60-70 derece açı yapar. Üniversal küretler ise ağzın tüm bölgelerinde kullanılabilir, iki kesici kenarı vardır ve bıçak gövdeye 90 derece açı yapar.

**Soru 2 (ID: 7da7bcb4-e869-466f-b342-38720ba61d02)**
Soru Kökü: Bölgeye özgü (Gracey) küretleri, üniversal küretlerden ayıran temel tasarım farklılıkları göz önüne alındığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Gracey küretlerde bıçak yüzeyinin her iki tarafında da kesici kenar bulunur ve çift taraflı çalışmaya olanak tanır.
Açıklama: Gracey küretlerinin en önemli özelliklerinden biri, bıçağın sadece tek bir kenarının (dışta kalan, konveks alt kenar) keskinleştirilmiş olmasıdır. Bu asimetrik tasarım, doku tarafında kalan kenarın kör (künt) olmasını sağlayarak derin ceplerde çalışırken dişetini kesme riskini ortadan kaldırır. Çift kesici kenar üniversal küretlere aittir.

---

### ÇİFT 12 (Benzerlik: 0.80)

**Soru 1 (ID: 1f8a2210-5cbc-4ead-9afa-9483ae4858e3)**
Soru Kökü: Aşağıdakilerden hangisi Faz 1 (Etiyolojik Faz) periodontal tedavi amaçları veya uygulamaları arasında **yer almaz**?
Doğru Şık (C): Rejeneratif periodontal cerrahi uygulamaları
Açıklama: Faz 1 periodontal tedavi; dişeti iltihabını azaltmak veya elimine etmek için yapılan cerrahi olmayan tedavi fazıdır. Rejeneratif periodontal cerrahi uygulamaları, Faz 2 (Cerrahi Faz) kapsamında yer alır. Faz 1 tedavisinin yeniden değerlendirilmesinden sonra gerekliyse cerrahi faza geçilir.

**Soru 2 (ID: 83e3b1aa-0328-4d47-a57e-fc9968d53e1c)**
Soru Kökü: Başarılı bir periodontal tedavi sürecinin ardından Faz 4 idame programına alınan bir hastada, bu programın temel kısımları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Derin ceplerde rutin açık periodontal flep cerrahisi uygulanması
Açıklama: Faz 4 idame programı temel olarak muayene/değerlendirme, idame tedavisinin uygulanması (diştaşı temizliği, polisaj, irrigasyon) ve planlama kısımlarından oluşur. Açık periodontal flep cerrahisi idame fazının değil, Faz 2 cerrahi tedavinin bir parçasıdır. İdame fazında aktif bir cerrahi rutini uygulanmaz, eğer nüks saptanırsa hasta ilgili aktif tedavi fazına geri döndürülür.

---

### ÇİFT 13 (Benzerlik: 0.80)

**Soru 1 (ID: 4246cf91-0263-40a0-9d29-a2ac2320fc65)**
Soru Kökü: Dar ve derin periodontal ceplere, furkasyon bölgelerine ve gelişimsel kök oluklarına uyum sağlamak üzere tasarlanmış, boyun kısmı Standart Gracey küretlere göre 3 mm daha uzun, ancak bıçak uzunluğu %50 daha kısa olan alet grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Mini Bladed (Mini Five) Küretler
Açıklama: Mini Bladed (Mini Five) küretler, After Five küretlerin bir modifikasyonudur; After Five'lar gibi 3 mm uzatılmış bir gövdeye sahiptirler, ancak çalışma uçları (bıçakları) standart küretlerin yarısı uzunluğundadır. Bu kısa bıçak, dar ceplere ve kök konkavitelerine üstün bir adaptasyon sağlar.

**Soru 2 (ID: ae3637bd-a0a8-4021-8108-5bfefb62a398)**
Soru Kökü: 30 yaşında bir hastanın alt çene kesici dişlerinde kök yüzeyindeki dar gelişimsel oluklara ve çizgisel açılara uyum sağlamak için, bıçağı standart bir Gracey küretin yarısı uzunluğunda (%50 daha kısa) ve ucu belirgin şekilde yukarı doğru kavisli olarak tasarlanmış olan özel modifikasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Gracey Curvettes
Açıklama: Gracey Curvettes setinin bıçak uzunluğu standart aletlere göre %50 kısaltılmış olup, ucundaki belirgin yukarı doğru kavis, özellikle alt anterior dişler gibi dar köklü bölgelerde çizgi açılarına ve konkavitelere üst düzey uyum sağlar. Mini Five küretlerde de bıçak %50 kısadır ancak Curvettes kadar ekstra bir yukarı eğim barındırmazlar.

---

### ÇİFT 14 (Benzerlik: 0.80)

**Soru 1 (ID: 5809fa36-0c59-43a1-9612-276414c95e4a)**
Soru Kökü: 55 yaşında erkek hastanın sağ üst posterior bölgesinde, başlangıçta uygulanan kök yüzeyi düzleştirmesi (SCRP) işlemine rağmen 8 mm derinliğinde sondlanan cepler saptanmış ve inflamasyonun sürdüğü gözlenmiştir. Bu klinik tablonun rutin idame (Faz 4) yerine cerrahi faza (Faz 2) geçirilmesini zorunlu kılan temel biyomekanik gerekçe aşağıdakilerden hangisidir?
Doğru Şık (E): Subgingival enstrümantasyonun 6 mm'den derin ceplerde kök yüzeyine tam adapte olamaması ve debridmanın eksik kalması
Açıklama: Cerrahi olmayan SCRP işlemi ortalama 4-5 mm'ye kadar etkilidir. 6 mm ve üzerindeki derin ceplerde küretlerin anatomik yapıya (özellikle posterior molar bölgelerdeki furka ve oluklara) körlemesine adaptasyonu yetersiz kalır. Bu nedenle patojen bakteri ve diştaşı rezidüleri tamamen temizlenemez ve enflamasyon sürer. Tedavinin başarısı için cerrahi yöntemlerle görüş alanının açılması (flep operasyonu) gerekir.

**Soru 2 (ID: 666a63d2-3b92-46ae-918b-860ec4fc2a8d)**
Soru Kökü: 48 yaşında erkek hastada yapılan muayenede sağ üst birinci molar dişin mesiopalatinalinde 7 mm derinliğinde periodontal cep saptanmıştır. Başlangıçta sadece diş taşı temizliği ve kök düzeltmesi (SCRP) uygulanan bu bölgede rezidüel ceplerin devam ettiği ve kanamanın sürdüğü görülmüştür. Bu durumun en olası mekanik gerekçesi aşağıdakilerden hangisidir?
Doğru Şık (E): SCRP işleminin 6 mm ve daha büyük cep derinliğine sahip bölgelerde tamamen etkisiz kalması
Açıklama: Literatüre göre cerrahi olmayan SCRP işlemi, genellikle 6 mm veya daha büyük cep derinliklerinde körlemesine yapıldığı için anatomik kısıtlılıklara (furkasyonlar, kök olukları) takılır ve etkili bir subgingival debridman sağlayamaz. Bu derinliklerde alet ulaşılabilirliği ciddi oranda düştüğü için rezidüel plak/taş kalır ve inflamasyon devam eder.

---

### ÇİFT 15 (Benzerlik: 0.80)

**Soru 1 (ID: cb528455-6df5-49db-a815-746eeb1fb6b7)**
Soru Kökü: Akut nekrotizan gingivitis teşhisi konulan bir hastanın ilk seans acil müdahalesinde, lezyon yüzeyindeki pseudomembranın uzaklaştırılması amacıyla kullanılan ajanın birincil etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Köpürerek pseudomembranı uzaklaştırmak, oksijenizasyonla anaerob bakterileri azaltmak
Açıklama: NUG'un ilk seansında kullanılan %3'lük seyreltilmiş hidrojen peroksit, uygulandığı alanda efervesan (köpürme) etkisi yaratarak nekrotik pseudomembranları fiziksel olarak uzaklaştırır. Ek olarak ortama bıraktığı serbest oksijen sayesinde, NUG'un etiyolojisinde yer alan obligat anaerob bakteriler (fusospiroketal kompleks) üzerinde toksik etki göstererek bakteri yükünü dramatik olarak düşürür.

**Soru 2 (ID: d018750f-4c70-431a-9a41-30bdd256265e)**
Soru Kökü: 24 yaşında erkek hasta, interdental papillerinde krater benzeri çöküntüler, spontan kanama ve şiddetli ağrı şikayeti ile başvuruyor. Teşhisi konulan nekrotizan gingivitis tedavisinin ilk seansında, pseudomembranları uzaklaştırmak ve anaerobik ortamı bozmak amacıyla pamuk pelete emdirilerek kullanılan ajan aşağıdakilerden hangisidir?
Doğru Şık (E): Hidrojen peroksit
Açıklama: Nekrotizan gingivitis (ANUG) akut bir anaerobik enfeksiyondur. İlk seansta oksijenizasyonu sağlamak ve mekanik temizliğe yardımcı köpürme etkisi ile pseudomembran tabakasını uzaklaştırmak için oksitleyici bir ajan olan hidrojen peroksit (%3, dilüe edilerek) kullanılır.

---

### ÇİFT 16 (Benzerlik: 0.79)

**Soru 1 (ID: 5e8723a0-3746-489c-b0eb-c55f98e8e614)**
Soru Kökü: Makrolid grubu antibiyotiklerin periodontal hastalıklardaki klinik kullanımları ve özellikleri değerlendirildiğinde, aşağıda verilen farmakolojik profillerden hangisi **yanlıştır**?
Doğru Şık (A): Spiramisinin klinik ataşman kazancı ve enflamasyon kontrolü üzerine belirgin, yüksek düzeyde bir etkinliği vardır.
Açıklama: Spiramisin, tükürükte yüksek konsantrasyonlara ulaşmasına rağmen ataçman seviyeleri ve periodontal yıkımın geri kazanımı üzerinde 'minimal' etkinliğe sahiptir. Belirgin ve yüksek bir etkinlik gösterdiği ifadesi literatür verileriyle çelişmektedir. Azitromisin agresif vakalarda, gram negatif etkinliği sayesinde klinik olarak daha üstün bir iyileşme profili sunar.

**Soru 2 (ID: d870cb12-298f-43bc-b916-8e2b53c4831e)**
Soru Kökü: Makrolid grubu antibiyotiklerin farmakokinetik özellikleri incelendiğinde, periodontal hastalıkların sistemik tedavisinde kullanıldığında özellikle tükürükte yüksek konsantrasyona ulaşmasıyla bilinen ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Spiramisin
Açıklama: Spiramisin, gram pozitif bakterilere karşı etkili olan ve özellikle tükürükte yüksek konsantrasyonlara ulaşabilen bir makrolid grubu antibiyotiktir. En güçlü çeldirici olan azitromisin agresif periodontitiste tercih edilirken, eritromisin dişeti oluğu sıvısına geçemediği için periodontal tedavide kullanılmaz. Diğer ajanlardan farklı olarak spiramisinin ataçman kazancına etkisi minimaldir ancak tükürük akışındaki yüksek biyoyararlanımı bu ilacın spesifik farmakokinetik markörüdür.

---

### ÇİFT 17 (Benzerlik: 0.79)

**Soru 1 (ID: 97e2c0f6-6d4e-4a6b-b597-5ab2c2fe8d81)**
Soru Kökü: Makrolid grubu antibiyotiklerin periodontal enfeksiyonlarda kullanımıyla ilgili olarak, aşağıdakilerden hangisi dişeti oluğu sıvısına (DOS) konsantre **olamaması** nedeniyle günümüzde periodontal tedavide hiçbir şekilde tercih edilmemektedir?
Doğru Şık (E): Eritromisin
Açıklama: Periodontal enfeksiyonların sistemik tedavisinde ilacın başarı kriterlerinden biri kandan dişeti oluğu sıvısına (DOS) geçebilme yeteneğidir. Eritromisin, yapısı gereği DOS'a yeterli konsantrasyonda penetre olamaz, bu nedenle periodontal cebin tabanındaki bakterilere ulaşamaz ve periodontolojide kullanılmaz. Makrolidlerden azitromisin ve spiramisin ise dokularda mükemmel konsantre oldukları için etkin olarak kullanılırlar.

**Soru 2 (ID: d870cb12-298f-43bc-b916-8e2b53c4831e)**
Soru Kökü: Makrolid grubu antibiyotiklerin farmakokinetik özellikleri incelendiğinde, periodontal hastalıkların sistemik tedavisinde kullanıldığında özellikle tükürükte yüksek konsantrasyona ulaşmasıyla bilinen ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Spiramisin
Açıklama: Spiramisin, gram pozitif bakterilere karşı etkili olan ve özellikle tükürükte yüksek konsantrasyonlara ulaşabilen bir makrolid grubu antibiyotiktir. En güçlü çeldirici olan azitromisin agresif periodontitiste tercih edilirken, eritromisin dişeti oluğu sıvısına geçemediği için periodontal tedavide kullanılmaz. Diğer ajanlardan farklı olarak spiramisinin ataçman kazancına etkisi minimaldir ancak tükürük akışındaki yüksek biyoyararlanımı bu ilacın spesifik farmakokinetik markörüdür.

---

### ÇİFT 18 (Benzerlik: 0.79)

**Soru 1 (ID: 5839c641-f15b-4b03-b9b9-6f4b1f6bc416)**
Soru Kökü: Nekrotizan gingivitis (NG) tedavisinde, ilk seansta lezyonların yüzeyindeki pseudomembranın uzaklaştırılması ve oksijenizasyonun sağlanması amacıyla aşağıdaki ajanlardan hangisi öncelikle tercih edilir?
Doğru Şık (B): %3 Hidrojen peroksit (dilüe edilmiş)
Açıklama: NG tedavisinde ilk seansta pseudomembran ve zayıf tutunan mikroorganizmaları uzaklaştırmak için %3 hidrojen peroksitin eşit oranda su ile dilüe edilmiş hali pamuk peletler yardımıyla kullanılır. Hidrojen peroksit köpürerek yüzeyel debrisin uzaklaşmasını sağlar ve anaerob bakteriler için toksik olan oksijenizasyonu arttırır. Klorheksidin daha sonra hastaya evde kullanım için önerilebilir ancak ilk seansta pseudomembran uzaklaştırmada primer tercih değildir.

**Soru 2 (ID: d018750f-4c70-431a-9a41-30bdd256265e)**
Soru Kökü: 24 yaşında erkek hasta, interdental papillerinde krater benzeri çöküntüler, spontan kanama ve şiddetli ağrı şikayeti ile başvuruyor. Teşhisi konulan nekrotizan gingivitis tedavisinin ilk seansında, pseudomembranları uzaklaştırmak ve anaerobik ortamı bozmak amacıyla pamuk pelete emdirilerek kullanılan ajan aşağıdakilerden hangisidir?
Doğru Şık (E): Hidrojen peroksit
Açıklama: Nekrotizan gingivitis (ANUG) akut bir anaerobik enfeksiyondur. İlk seansta oksijenizasyonu sağlamak ve mekanik temizliğe yardımcı köpürme etkisi ile pseudomembran tabakasını uzaklaştırmak için oksitleyici bir ajan olan hidrojen peroksit (%3, dilüe edilerek) kullanılır.

---

### ÇİFT 19 (Benzerlik: 0.79)

**Soru 1 (ID: 44c3dbf9-a73a-4bad-874e-0cbbf68022b3)**
Soru Kökü: Orta şiddette periodontal ataşman yıkımı bulunan, papillerin tamamen çekildiği ve interdental alanların genişlediği bir vakada supragingival plak kontrolü için öncelikli olarak önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (D): Çeşitli boyuttaki arayüz fırçaları
Açıklama: Orta şiddette yıkım varlığında interproksimal boşluğa uyan en geniş araç en iyi temizliği sağlar prensibiyle çeşitli boyuttaki arayüz fırçaları tercih edilir. Diş ipi veya kürdan bu geniş alanlarda yetersiz kalır. İplik geçiriciler ortodontik braketler veya köprü altı temizliğinde görev alır.

**Soru 2 (ID: b3d0afd7-4afc-4605-b6a6-894b86f1a097)**
Soru Kökü: 22 yaşında kadın hasta rutin kontrol amacıyla kliniğe başvuruyor. Klinik ve radyografik muayenede herhangi bir ataşman kaybı, kemik yıkımı veya diastema saptanmıyor. Papillerin interdental aralığı tamamen doldurduğu bu hastada rutin proksimal temizlik için ilk tercih edilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (B): Diş ipi
Açıklama: Yıkım olmayan, interdental papilin aralığı tam doldurduğu ve temas noktalarının sıkı olduğu durumlarda en uygun interproksimal temizlik aracı diş ipidir. Arayüz fırçaları bu dar alanlara travma yaratmadan giremez. Superfloss köprü gövdelerinde, tek kıl demetli fırça ise furkasyon gibi izole alanlarda kullanılır.

---

### ÇİFT 20 (Benzerlik: 0.78)

**Soru 1 (ID: 44c3dbf9-a73a-4bad-874e-0cbbf68022b3)**
Soru Kökü: Orta şiddette periodontal ataşman yıkımı bulunan, papillerin tamamen çekildiği ve interdental alanların genişlediği bir vakada supragingival plak kontrolü için öncelikli olarak önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (D): Çeşitli boyuttaki arayüz fırçaları
Açıklama: Orta şiddette yıkım varlığında interproksimal boşluğa uyan en geniş araç en iyi temizliği sağlar prensibiyle çeşitli boyuttaki arayüz fırçaları tercih edilir. Diş ipi veya kürdan bu geniş alanlarda yetersiz kalır. İplik geçiriciler ortodontik braketler veya köprü altı temizliğinde görev alır.

**Soru 2 (ID: fd3155d0-4fdf-4e57-b287-0910dd27d26a)**
Soru Kökü: Aşağıdaki interdental bölge temizlik araçlarından hangisi, ortadan şiddetliye doğru ataçman yıkımı olan, geniş interproksimal aralıklara ve konkav kök yüzeylerine sahip alanlarda plağı elimine etmek için **en etkili** yöntemdir?
Doğru Şık (C): Arayüz fırçası
Açıklama: Ataçman kaybı sonucu açığa çıkmış, genişlemiş interdental alanlarda ve özellikle konkav kök yüzeylerinde (örn. premolar meziali) diş ipi yeterli temizliği sağlayamaz. Arayüz fırçaları, kıl yapısı sayesinde konkavitelerin içine girerek plağı etkin bir şekilde temizler.

---

### ÇİFT 21 (Benzerlik: 0.78)

**Soru 1 (ID: 7bad4b81-76de-419f-8abf-227d490f3b8f)**
Soru Kökü: Fırça başının oblik yönde ve kıl uçlarının okluzal/insizal kenara bakacak şekilde yerleştirildiği, hafif basınçla kıl uçlarının interdental aralığa girmesini sağlayan, özellikle interdental papillerin kaybolduğu dişeti çekilmesi vakalarında etkili olan fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (D): Charter tekniği
Açıklama: Charter tekniğinde fırça kılları diğer yöntemlerin aksine apikale değil, okluzal veya insizal kenara doğru 45 derece açıyla konumlandırılır. Bu pozisyon, papil kaybı olan genişlemiş interdental alanların ve açık ambraşürlerin temizliğinde maksimum adaptasyon sağlar.

**Soru 2 (ID: 8dc42b1b-a5d0-436e-a3ed-64112be1577b)**
Soru Kökü: Aşağıdaki diş fırçalama tekniklerinden hangisinde, fırça kılları sulkus içerisine 45 derecelik açı yapacak şekilde yerleştirildikten sonra, fırçaya horizontal yönde ileri-geri kısa vibrasyon hareketleri yaptırılarak dişeti kenarının altındaki alanın temizlenmesi hedeflenir?
Doğru Şık (B): Bass Tekniği
Açıklama: Bass tekniği, sulkus temizliği odaklıdır ve fırça kılları apekse doğru 45 derece açı ile sulkusa yerleştirilerek kısa vibrasyon hareketleri ile uygulanır. Modifiye Stillman tekniğinde fırça kıllarının bir kısmı yapışık diş eti üzerinde konumlanır ve fırçaya vibrasyon verilerek koronal yönde çekilir; Charter tekniğinde ise fırça kılları oklüzal yöne dönüktür.

---

### ÇİFT 22 (Benzerlik: 0.78)

**Soru 1 (ID: 44c3dbf9-a73a-4bad-874e-0cbbf68022b3)**
Soru Kökü: Orta şiddette periodontal ataşman yıkımı bulunan, papillerin tamamen çekildiği ve interdental alanların genişlediği bir vakada supragingival plak kontrolü için öncelikli olarak önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (D): Çeşitli boyuttaki arayüz fırçaları
Açıklama: Orta şiddette yıkım varlığında interproksimal boşluğa uyan en geniş araç en iyi temizliği sağlar prensibiyle çeşitli boyuttaki arayüz fırçaları tercih edilir. Diş ipi veya kürdan bu geniş alanlarda yetersiz kalır. İplik geçiriciler ortodontik braketler veya köprü altı temizliğinde görev alır.

**Soru 2 (ID: 82d07cf9-9a62-4fca-9bff-5b35b32aa774)**
Soru Kökü: Evre I-III periodontitis tedavisi görmüş, belirgin periodontal ataşman kaybı ve interdental papil çekilmeleri olan bir hastada plak kontrolü hedeflenmektedir. Bu vakada interdental temizlik aracı olarak aşağıdakilerden hangisinin kullanılması standart diş ipine göre daha etkilidir?
Doğru Şık (A): Çeşitli boyutlardaki arayüz fırçaları
Açıklama: Evre I-III periodontitis hastalarında, interdental alanlarda genişlemeler ve kök yüzeyinde konkaviteler açığa çıkar. Bu konkav anatomik alanların temizliğinde arayüz fırçaları diş ipine kıyasla daha etkili plak eliminasyonu sağlar. Diş ipi yalnızca düz yüzeylerde minimal ataşman kaybı olan vakalarda etkilidir.

---

### ÇİFT 23 (Benzerlik: 0.77)

**Soru 1 (ID: 087632c2-59c4-4ffc-a45c-1277df2d06d7)**
Soru Kökü: Fırça kıllarının dişetini 2-3 mm örtecek şekilde apekse doğru 45 derecelik açıyla konumlandırılıp, fırça başının okluzal yönde diş ve dişeti üzerinde yuvarlanarak (süpürme) hareket ettirildiği teknik aşağıdakilerden hangisidir?
Doğru Şık (E): Roll tekniği
Açıklama: Roll (yuvarlak) tekniğinde fırça apekse dönük yerleştirildikten sonra koronal yöne doğru yuvarlanarak çekilir, bu sayede hem masaj etkisi yaratılır hem de plak okluzale doğru süpürülür. Bass tekniğinde ise yuvarlama yerine kısa vibrasyon hareketleriyle sulkus içi temizlik hedeflenir.

**Soru 2 (ID: adaa9c71-3c53-4f41-8669-0eac45c49737)**
Soru Kökü: Mekanik plak kontrolü sırasında dişler kapalı pozisyondayken fırçanın yanak içine yerleştirilerek üst dişetinden alt dişetine dairesel (sirküler) hareketlerle uygulandığı fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (C): Fones metodu
Açıklama: Fones metodu (sirküler fırçalama), dişler oklüzyondayken fırçanın yanak içine yerleştirilip dairesel hareketlerle hem üst hem alt arklardaki plakların uzaklaştırılmasını hedefler. Leonard metodunda diş yüzeyine dik yerleştirilen fırça vertikal (yukarı-aşağı) hareket ettirilir.

---

### ÇİFT 24 (Benzerlik: 0.77)

**Soru 1 (ID: d870cb12-298f-43bc-b916-8e2b53c4831e)**
Soru Kökü: Makrolid grubu antibiyotiklerin farmakokinetik özellikleri incelendiğinde, periodontal hastalıkların sistemik tedavisinde kullanıldığında özellikle tükürükte yüksek konsantrasyona ulaşmasıyla bilinen ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Spiramisin
Açıklama: Spiramisin, gram pozitif bakterilere karşı etkili olan ve özellikle tükürükte yüksek konsantrasyonlara ulaşabilen bir makrolid grubu antibiyotiktir. En güçlü çeldirici olan azitromisin agresif periodontitiste tercih edilirken, eritromisin dişeti oluğu sıvısına geçemediği için periodontal tedavide kullanılmaz. Diğer ajanlardan farklı olarak spiramisinin ataçman kazancına etkisi minimaldir ancak tükürük akışındaki yüksek biyoyararlanımı bu ilacın spesifik farmakokinetik markörüdür.

**Soru 2 (ID: edf8ca51-ccc2-474d-a1be-44d6b9470bfa)**
Soru Kökü: Yirmi iki yaşındaki sistemik olarak sağlıklı kadın hasta, dişlerinde yaygın mobilite ve dişeti kanaması şikayetiyle başvurmuştur. Klinik ve radyografik muayene sonucunda hastaya agresif periodontitis tanısı konulmuştur. Mekanik tedaviye ek olarak reçete edilecek makrolid grubu antibiyotiğin gram negatif basillere ve anaeroblara etkili olması hedeflenmektedir. Bu vakada destekleyici tedavi olarak kullanılması en uygun ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin
Açıklama: Azitromisin, gram negatif basiller ve anaeroblar üzerinde güçlü etkinliği sayesinde agresif periodontitiste mekanik tedaviye destek olarak önerilen temel makrolid derivesidir. Spiramisin gram pozitiflere etkilidir, eritromisin ise dişeti oluğu sıvısına yeterli konsantrasyonda penetre olamaz. Minosiklin agresif periodontitiste etkili bir tetrasiklin türevi olsa da soruda açıkça makrolid grubu bir ajan istenmesi nedeniyle doğru cevap azitromisindir.

---

### ÇİFT 25 (Benzerlik: 0.77)

**Soru 1 (ID: 82d07cf9-9a62-4fca-9bff-5b35b32aa774)**
Soru Kökü: Evre I-III periodontitis tedavisi görmüş, belirgin periodontal ataşman kaybı ve interdental papil çekilmeleri olan bir hastada plak kontrolü hedeflenmektedir. Bu vakada interdental temizlik aracı olarak aşağıdakilerden hangisinin kullanılması standart diş ipine göre daha etkilidir?
Doğru Şık (A): Çeşitli boyutlardaki arayüz fırçaları
Açıklama: Evre I-III periodontitis hastalarında, interdental alanlarda genişlemeler ve kök yüzeyinde konkaviteler açığa çıkar. Bu konkav anatomik alanların temizliğinde arayüz fırçaları diş ipine kıyasla daha etkili plak eliminasyonu sağlar. Diş ipi yalnızca düz yüzeylerde minimal ataşman kaybı olan vakalarda etkilidir.

**Soru 2 (ID: fd3155d0-4fdf-4e57-b287-0910dd27d26a)**
Soru Kökü: Aşağıdaki interdental bölge temizlik araçlarından hangisi, ortadan şiddetliye doğru ataçman yıkımı olan, geniş interproksimal aralıklara ve konkav kök yüzeylerine sahip alanlarda plağı elimine etmek için **en etkili** yöntemdir?
Doğru Şık (C): Arayüz fırçası
Açıklama: Ataçman kaybı sonucu açığa çıkmış, genişlemiş interdental alanlarda ve özellikle konkav kök yüzeylerinde (örn. premolar meziali) diş ipi yeterli temizliği sağlayamaz. Arayüz fırçaları, kıl yapısı sayesinde konkavitelerin içine girerek plağı etkin bir şekilde temizler.

---

### ÇİFT 26 (Benzerlik: 0.77)

**Soru 1 (ID: 44c3dbf9-a73a-4bad-874e-0cbbf68022b3)**
Soru Kökü: Orta şiddette periodontal ataşman yıkımı bulunan, papillerin tamamen çekildiği ve interdental alanların genişlediği bir vakada supragingival plak kontrolü için öncelikli olarak önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (D): Çeşitli boyuttaki arayüz fırçaları
Açıklama: Orta şiddette yıkım varlığında interproksimal boşluğa uyan en geniş araç en iyi temizliği sağlar prensibiyle çeşitli boyuttaki arayüz fırçaları tercih edilir. Diş ipi veya kürdan bu geniş alanlarda yetersiz kalır. İplik geçiriciler ortodontik braketler veya köprü altı temizliğinde görev alır.

**Soru 2 (ID: 8ca0591e-aee9-47a6-a8af-9bf0e214f6ad)**
Soru Kökü: 50 yaşında mandibular molar dişinde sınıf II furkasyon defekti ve lingual yüzeyde izole derin dişeti çekilmesi saptanan bir hastada, bu spesifik alanların plak kontrolü için hangi aracın kullanımı **en uygundur**?
Doğru Şık (E): Tek kıl demetli fırça
Açıklama: Tek kıl demetli fırçalar; furkasyon bölgeleri, izole derin dişeti çekilmesi alanları ve mandibular molarların linguali gibi ulaşılması zor bölgelerin spesifik temizliğinde kullanılır. Standart fırçalar ve diş ipi bu anatomik düzensizliklere adapte olamaz. Kürdan ise kök yüzeyini temizlemede yetersiz kalır.

---

### ÇİFT 27 (Benzerlik: 0.77)

**Soru 1 (ID: 38e1d2c5-b119-4d91-9b1d-410fa88fe362)**
Soru Kökü: Kimyasal plak kontrolünde kullanılan terapötik ajanların sınıflandırılmasına göre, mevcut dental plağın patojenik hacmini gingivitis oluşturacak kritik klinik eşiğin altında tutan ajanlara ne ad verilir?
Doğru Şık (D): Antiplak ajanlar
Açıklama: Antiplak ajanlar, bakteri popülasyonunu ve plak düzeyini gingivitis oluşturacak seviyenin altında tutarak klinik sağlığı korurlar. Plak inhibe ediciler sadece miktar ve kaliteyi değiştirirken, antigingivitis ajanlar doğrudan inflamasyon yolağına müdahale eder.

**Soru 2 (ID: a97fa12e-16b0-402b-817c-80a61256fd95)**
Soru Kökü: Periodontal kemoterapi ajanları incelendiğinde, dental plağın miktarına veya yapısına doğrudan etki etmeksizin konak dokusundaki gingival inflamasyon belirtilerini azaltan farmakolojik gruba ne ad verilir?
Doğru Şık (E): Antigingivitis ajanlar
Açıklama: Antigingivitis ajanlar (örneğin bazı konak modülatörleri veya anti-inflamatuvarlar), mikrobiyal yükü fiziksel olarak temizlemeden konak dokusundaki ödem ve kanama gibi inflamasyon belirtilerini baskılarlar. Antiplak ajanlar ise hastalığın kök nedeni olan biyofilm miktarını azaltır.

---

### ÇİFT 28 (Benzerlik: 0.77)

**Soru 1 (ID: 561beed6-0c5c-4eec-9d6c-c3a5a2b264b9)**
Soru Kökü: Mekanik periodontal tedavi sürecinde kullanılan ultrasonik ve sonik cihazların etkinlikleri karşılaştırıldığında, piezoelektrik veya magnetostriktif sistemlerle çalışan ultrasonik cihazların titreşim hızı hangi frekans aralığındadır?
Doğru Şık (D): 18.000 - 50.000 Hz
Açıklama: Ultrasonik cihazlar (hem piezoelektrik hem magnetostriktif), insan işitme sınırının ötesindeki yüksek frekanslı elektrik enerjisini kullanarak 18.000 ile 50.000 Hz arasında titreşim üretirler. Bu yüksek frekans, akustik türbülans ve kavitasyon etkisi yaratarak subgingival ortamdaki bakterilerin hücre duvarını parçalar.

**Soru 2 (ID: e8328b10-4aa8-42e4-9079-d3bd5430e79c)**
Soru Kökü: Biyofilm, kalkulus ve lekelerin uzaklaştırılmasında kullanılan motorlu enstrümanlardan olan sonik aletlerin, dental ünitin havası (pnömatik) ile çalışan tutamakları mevcuttur. Bu cihazların ürettiği titreşim frekansı genel olarak hangi aralıktadır?
Doğru Şık (C): 2.000 - 6.500 Hz
Açıklama: Sonik cihazlar hava basıncını mekanik titreşime çeviren rotasyonel bir rotor kullanırlar ve ürettikleri frekans 2.000 ile 6.500 Hz aralığındadır. Düşük titreşim frekansları nedeniyle ultrasonik cihazlara göre diş yüzeyine daha az enerji uygularlar ve diş taşı kırma güçleri nispeten daha zayıftır.

---

### ÇİFT 29 (Benzerlik: 0.76)

**Soru 1 (ID: 44c3dbf9-a73a-4bad-874e-0cbbf68022b3)**
Soru Kökü: Orta şiddette periodontal ataşman yıkımı bulunan, papillerin tamamen çekildiği ve interdental alanların genişlediği bir vakada supragingival plak kontrolü için öncelikli olarak önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (D): Çeşitli boyuttaki arayüz fırçaları
Açıklama: Orta şiddette yıkım varlığında interproksimal boşluğa uyan en geniş araç en iyi temizliği sağlar prensibiyle çeşitli boyuttaki arayüz fırçaları tercih edilir. Diş ipi veya kürdan bu geniş alanlarda yetersiz kalır. İplik geçiriciler ortodontik braketler veya köprü altı temizliğinde görev alır.

**Soru 2 (ID: 71d6e448-e016-40a3-8f46-40d4b0acca03)**
Soru Kökü: Periodontal tedavi sonrası idame fazında olan ve sadece 'yeni başlamış minimal doku yıkımı' tablosu sergileyen bir hastada arayüz temizliği için kullanılması en uygun araç grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Diş ipi veya kürdan
Açıklama: Yeni başlamış minimal yıkım durumlarında interdental alan hafifçe açılmıştır ve bu bölgeye diş ipi veya ağaç kürdan ile plak eliminasyonu yapılması uygundur. İleri derecede açılmış arayüzler için çeşitli boyutlarda arayüz fırçaları tercih edilmelidir. Tek kıl demetli fırçalar daha çok derin defektler ve furkasyonlar için saklanır.

---

### ÇİFT 30 (Benzerlik: 0.76)

**Soru 1 (ID: bed51141-5d7d-4263-9850-7a00fda76a0b)**
Soru Kökü: Kök yüzeyi düzleştirmesi işlemi sırasında aşırı güç uygulaması veya aletin metal yorgunluğu nedeniyle ince uçlu bir küretin kesici kısmı kırılarak derin subgingival cep içerisinde kalmıştır. Bölgede enflamasyon yaratmaması için bu parçanın derhal çıkarılması gerekmektedir. Çevresel dokulara zarar vermeden kırıntıyı çekip almak için aşağıdaki aletlerden hangisinin kullanılması en uygundur?
Doğru Şık (A): Schwartz periotrievers
Açıklama: Schwartz periotrievers, cep içerisinde kırılan ve gözden kaybolan metal alet uçlarını minimal invaziv şekilde çıkarmak için tasarlanmış, güçlü manyetik (mıknatıs) özelliğe sahip çift taraflı el aletleridir. Diğer seçenekler kazıma ve tesviye işlemleri için tasarlanmış olup yabancı cisim çıkarma işlevleri yoktur.

**Soru 2 (ID: c8782b8e-8d8c-4e46-ba4c-f96c4a1c56a5)**
Soru Kökü: Ağır kronik periodontitis tablosu sergileyen ve derin ceplerinde kök yüzeyi düzleştirmesi planlanan bir hastada subgingival enstrümantasyon sırasında Gracey küretin ucu kırılarak cep tabanında kalmıştır. Kanamanın yoğun olduğu bu alanda metal parçacığını dokuya zarar vermeden uzaklaştırmak için kullanılması gereken çift taraflı mıknatıs özelliğine sahip spesifik alet aşağıdakilerden hangisidir?
Doğru Şık (E): Schwart periotrievers
Açıklama: Schwart periotrievers, kırılan çelik veya alaşım periodontal alet uçlarını dar ceplerden çıkarmak üzere tasarlanmış, ucunda mıknatıs barındıran manyetik bir kurtarma aletidir. Chisel düz yüzeylerde, Quetin furkasyonda, Hoe ise ledgeleri almakta kullanılır.

---

### ÇİFT 31 (Benzerlik: 0.76)

**Soru 1 (ID: 01cdf9ab-c7a9-4bf7-9b60-0acc71fc5368)**
Soru Kökü: Alt sağ birinci molar dişin bukkal ve lingual yüzeylerinde lokalize 5 mm derinliğinde periodontal cepleri bulunan bir hastada, bu yüzeylerin subgingival debridmanı için aşağıdaki el aletlerinden hangisi spesifik olarak tasarlanmıştır?
Doğru Şık (E): Gracey 7-8
Açıklama: Gracey küret sistematiğinde posterior dişlerin (molar ve premolarlar) fasial (bukkal) ve oral (lingual/palatinal) düz yüzeylerinin temizliği için Gracey 7-8 ve 9-10 numaralı aletler kullanılır. 11-12 ve 15-16 mezyal yüzeyler, 13-14 ve 17-18 ise distal yüzeyler için spesifiktir.

**Soru 2 (ID: 8cdf16ae-f3a5-40b4-988b-8c009e463da2)**
Soru Kökü: Mandibular ikinci premolar dişin distal yüzeyinde kök yüzeyi düzleştirmesi yapmayı planlayan bir hekimin, bu anatomik bölgeye uygun açılanma sağlamak için aşağıdaki el aletlerinden hangisini seçmesi gerekir?
Doğru Şık (B): Gracey 13-14
Açıklama: Gracey küret serisinde arka grup dişlerin (molar ve premolar) distal yüzeylerine özel olarak geliştirilmiş aletler Gracey 13-14 ve onun daha ekstrem açılı versiyonu olan 17-18 numaralardır. Bu aletlerin gövde kıvrımları, yanak dokusunu ekarte ederken bıçağın dişe paralel olmasını sağlar.

---

### ÇİFT 32 (Benzerlik: 0.76)

**Soru 1 (ID: 9cf46ea8-a387-4d83-a429-586e90c1df73)**
Soru Kökü: Akut perikoronitis tablosu ile başvuran bir hastada enfeksiyonun akut semptomlarının kontrol altına alınması için uygulanan semptomatik tedavi yaklaşımlarından biri **değildir**?
Doğru Şık (E): İlgili yirmi yaş dişinin derhal çekilmesi
Açıklama: Akut perikoronitiste öncelikli amaç drenaj, antibiyotik/antiseptik kullanımı ve okluzal travmanın kaldırılması ile akut inflamasyonun yatıştırılmasıdır. Enfeksiyonun derin dokulara yayılmasını (selülit vb.) önlemek amacıyla, ilgili dişin cerrahi çekimi veya flep cerrahisi operasyonları akut semptomlar geçene kadar ertelenmelidir.

**Soru 2 (ID: b0a6b971-d04b-4db5-939d-b0759dbe502e)**
Soru Kökü: 23 yaşındaki erkek hasta alt sağ 20 yaş dişinin (diş 48) etrafındaki dişetinde şiddetli ağrı, yutkunmada zorluk ve yüzde şişlik şikayetiyle başvuruyor. Muayenede 48 numaralı dişin kısmen sürdüğü, üzerindeki kapüşonun kırmızı ve ödemli olduğu görülüyor. Submandibular lenfadenopati ve hafif ateş mevcut.

Bu akut perikoronitis tablosunun birinci basamak tedavisinde yapılması gereken **en uygun** işlem aşağıdakilerden hangisidir?
Doğru Şık (B): Akut semptomları kontrol etmek için lokal drenaj, bölge irigasyonu ve sistemik antibiyotik reçetesi
Açıklama: Akut perikoronitiste sistemik komplikasyonlar (ateş, lenfadenopati, yutkunma zorluğu) varsa, öncelikli hedef akut enfeksiyonun kontrolüdür. Bu aşamada dişin çekimi veya cerrahi kapüşon eksizyonu enfeksiyonun daha derin fasyal boşluklara yayılmasına neden olabilir. Bu nedenle önce drenaj, antiseptik yıkama ve sistemik antibiyotik ile akut tablo bastırılır, asıl tedavi (çekim veya flep cerrahisi) enfeksiyon kontrolünden sonra yapılır.

---

### ÇİFT 33 (Benzerlik: 0.76)

**Soru 1 (ID: 978c5cb2-fd09-4c6b-9af3-f555ad56f2fd)**
Soru Kökü: Güncel periodontal yaklaşımlarda subgingival lokal uygulama amacıyla da değerlendirilen ve farmakolojik olarak 4. jenerasyon sentetik florokinolon grubunda yer alan antibakteriyel ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Moksifloksasin
Açıklama: Moksifloksasin (Moxifloxacin), 4. jenerasyon sentetik bir florokinolon türevi olup, periodontal patojenlere karşı subgingival lokal uygulama formları araştırılan güncel bir ajandır. Siprofloksasin de bir kinolon türevi olmasına rağmen önceki jenerasyonlara aittir ve daha çok sistemik kombine kullanımlarda (metronidazol ile) tercih edilir. Moksifloksasin yüksek anaerob etkinliği ile öne çıkan florokinolondur.

**Soru 2 (ID: fbcb23dd-7a6e-47dc-b6e0-6a51f1d03ad4)**
Soru Kökü: Periodontal mikrobiyal florada özellikle *Aggregatibacter actinomycetemcomitans* (Aa) üzerinde güçlü bakterisid etkiye sahip olan, mikst enfeksiyonların eliminasyonunu sağlamak amacıyla sıklıkla Metronidazol ile kombine edilen kinolon (florokinolon) grubu antibiyotik aşağıdakilerden hangisidir?
Doğru Şık (C): Siprofloksasin
Açıklama: Siprofloksasin, Gram (-) fakültatif bakteriler ve özellikle agresif periodontitisin baş aktörü olan Aa üzerinde son derece etkili olan sentetik bir florokinolon antibiyotiktir. Kendi başına anaeroblara zayıf etkili olduğundan, anaerob floraya hükmeden metronidazol ile kombinasyonu mikst periodontal enfeksiyonlarda çok başarılı bir sinerjistik etki gösterir.

---

### ÇİFT 34 (Benzerlik: 0.76)

**Soru 1 (ID: 5603ae04-61bc-43a1-a84d-32e6e96cfbc5)**
Soru Kökü: Periodontal apse ile periapikal (endodontik) apseyi ayırıcı tanıda değerlendirirken, lezyonun periodontal kaynaklı olduğunu düşündüren **en güçlü** klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Etkilenen dişte pulpa vitalite testlerine pozitif (canlı) yanıt alınması
Açıklama: Periodontal apsede dişin pulpası genellikle canlıdır (vitaldir) ve pulpa testlerine pozitif yanıt verir. Periapikal apsede ise diş devitaldir. Şiddetli spontan ağrı ve derin çürük endodontik patolojiyi işaret eder.

**Soru 2 (ID: cb0aa73e-a7a5-4229-aad8-9cdf03a0424b)**
Soru Kökü: Periapikal apse ile periodontal apsenin ayırıcı tanısında kullanılan klinik ve radyografik özelliklerin karşılaştırılmasıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Periodontal apsede ağrı çok daha keskin ve spontan olup hastayı gece uykudan uyandıran şiddettedir.
Açıklama: Spontan, yoğun, keskin ve hastayı gece uykusundan uyandıran ağrı tablosu endodontik lezyonlara (periapikal apse) aittir. Periodontal apselerin ağrısı ise daha diffüz, künt, nabızsal ve genellikle daha tolere edilebilir (kabul edilebilir) niteliktedir.

---

### ÇİFT 35 (Benzerlik: 0.76)

**Soru 1 (ID: 01de8ac8-0197-436e-a9dc-3bfb6833b763)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, marjinal dişetinde aniden ortaya çıkan lokalize bir şişlik şikayetiyle başvuruyor. Klinik muayenede ilgili dişte çürük olmadığı, pulpanın canlı olduğu ve periodontal cep derinliğinin normal (sığ) olduğu tespit ediliyor. Radyografik incelemede herhangi bir kemik yıkımı izlenmiyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Gingival apse
Açıklama: Gingival apse; dişte çürük olmayan, pulpanın canlı kaldığı, periodontal cebin ve radyografik kemik kaybının bulunmadığı, sadece marjinal dişeti veya interdental papili ilgilendiren akut inflamatuar bir tablodur. Periodontal apsede derin bir cep varlığı şarttır, periapikal apsede ise diş devitaldir.

**Soru 2 (ID: f64e12c2-b892-4a93-9fce-d79602aeeb14)**
Soru Kökü: Otuz yaşındaki kadın hastanın rutin radyografik incelemesinde, sağ mandibular kanin dişinin lateral kök yüzeyinde sınırlı bir radyolusensi saptanmıştır. İlgili dişin klinik muayenesinde pulpa vitalite testleri pozitiftir, çürük, periodontal cep derinliği artışı veya mobilite saptanmamıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Periodontal kist
Açıklama: Periodontal kist, klinik olarak asemptomatik seyredebilen, cep veya çürük barındırmayan ancak radyografide lateral radyolusensi veren, canlı dişi ilgilendiren bir lezyondur. Periodontal apsede mutlaka patolojik cep bulunurken, periapikal apsede diş devitaldir ve radyolusensi apikaldedir.

---

### ÇİFT 36 (Benzerlik: 0.76)

**Soru 1 (ID: 5e8723a0-3746-489c-b0eb-c55f98e8e614)**
Soru Kökü: Makrolid grubu antibiyotiklerin periodontal hastalıklardaki klinik kullanımları ve özellikleri değerlendirildiğinde, aşağıda verilen farmakolojik profillerden hangisi **yanlıştır**?
Doğru Şık (A): Spiramisinin klinik ataşman kazancı ve enflamasyon kontrolü üzerine belirgin, yüksek düzeyde bir etkinliği vardır.
Açıklama: Spiramisin, tükürükte yüksek konsantrasyonlara ulaşmasına rağmen ataçman seviyeleri ve periodontal yıkımın geri kazanımı üzerinde 'minimal' etkinliğe sahiptir. Belirgin ve yüksek bir etkinlik gösterdiği ifadesi literatür verileriyle çelişmektedir. Azitromisin agresif vakalarda, gram negatif etkinliği sayesinde klinik olarak daha üstün bir iyileşme profili sunar.

**Soru 2 (ID: 97e2c0f6-6d4e-4a6b-b597-5ab2c2fe8d81)**
Soru Kökü: Makrolid grubu antibiyotiklerin periodontal enfeksiyonlarda kullanımıyla ilgili olarak, aşağıdakilerden hangisi dişeti oluğu sıvısına (DOS) konsantre **olamaması** nedeniyle günümüzde periodontal tedavide hiçbir şekilde tercih edilmemektedir?
Doğru Şık (E): Eritromisin
Açıklama: Periodontal enfeksiyonların sistemik tedavisinde ilacın başarı kriterlerinden biri kandan dişeti oluğu sıvısına (DOS) geçebilme yeteneğidir. Eritromisin, yapısı gereği DOS'a yeterli konsantrasyonda penetre olamaz, bu nedenle periodontal cebin tabanındaki bakterilere ulaşamaz ve periodontolojide kullanılmaz. Makrolidlerden azitromisin ve spiramisin ise dokularda mükemmel konsantre oldukları için etkin olarak kullanılırlar.

---

### ÇİFT 37 (Benzerlik: 0.76)

**Soru 1 (ID: 4af9c528-c69b-4ff3-b9bd-faf6608243fa)**
Soru Kökü: Oral hijyen motivasyonunda dental plağı hastaya daha görünür hale getirmek için kullanılan ve plağı kırmızıya boyamasıyla bilinen, FDA onaylı plak boyayıcı ajan aşağıdakilerden hangisidir?
Doğru Şık (E): Eritrosin
Açıklama: Eritrosin, dental plağı kırmızıya boyayan ve FDA onayı almış en yaygın plak boyayıcı ajanlardan biridir. Bazik fuksin de kırmızı ve tonlarına boyar ancak FDA onaylı olduğuna dair spesifik metin bilgisi eritrosin ile karakterizedir. Fluoresin ise plağı sarıya boyar.

**Soru 2 (ID: e9930bd1-d893-4f02-8918-28fbb95eaa8c)**
Soru Kökü: Plağı hastaya göstermek amacıyla kullanılan, plağı kırmızı ve tonlarına boyayan ancak FDA onayı bağlamında eritrosinden ayrılan ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Bazik fuksin
Açıklama: Bazik fuksin plağı kırmızı ve tonlarına boyayan bir ajandır. Kırmızı boyayan diğer ajan olan eritrosin, FDA onaylı olması özelliği ile kaynakta spesifik olarak belirtilmiştir. Klorheksidin ise bir plak boyayıcı değil, antiplak ajandır.

---

### ÇİFT 38 (Benzerlik: 0.76)

**Soru 1 (ID: 087632c2-59c4-4ffc-a45c-1277df2d06d7)**
Soru Kökü: Fırça kıllarının dişetini 2-3 mm örtecek şekilde apekse doğru 45 derecelik açıyla konumlandırılıp, fırça başının okluzal yönde diş ve dişeti üzerinde yuvarlanarak (süpürme) hareket ettirildiği teknik aşağıdakilerden hangisidir?
Doğru Şık (E): Roll tekniği
Açıklama: Roll (yuvarlak) tekniğinde fırça apekse dönük yerleştirildikten sonra koronal yöne doğru yuvarlanarak çekilir, bu sayede hem masaj etkisi yaratılır hem de plak okluzale doğru süpürülür. Bass tekniğinde ise yuvarlama yerine kısa vibrasyon hareketleriyle sulkus içi temizlik hedeflenir.

**Soru 2 (ID: 7bad4b81-76de-419f-8abf-227d490f3b8f)**
Soru Kökü: Fırça başının oblik yönde ve kıl uçlarının okluzal/insizal kenara bakacak şekilde yerleştirildiği, hafif basınçla kıl uçlarının interdental aralığa girmesini sağlayan, özellikle interdental papillerin kaybolduğu dişeti çekilmesi vakalarında etkili olan fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (D): Charter tekniği
Açıklama: Charter tekniğinde fırça kılları diğer yöntemlerin aksine apikale değil, okluzal veya insizal kenara doğru 45 derece açıyla konumlandırılır. Bu pozisyon, papil kaybı olan genişlemiş interdental alanların ve açık ambraşürlerin temizliğinde maksimum adaptasyon sağlar.

---

### ÇİFT 39 (Benzerlik: 0.76)

**Soru 1 (ID: 554eaabc-7c7e-400a-96d9-618aac69edaa)**
Soru Kökü: Üst sol birinci büyük azı dişinin meziyopalatinal kök yüzeyinde saptanan rezidüel kalkulusun uzaklaştırılması amacıyla aşağıdaki Gracey küretlerinden hangisinin tercih edilmesi en idealdir?
Doğru Şık (A): Gracey 15-16
Açıklama: Molar dişlerin mezyal yüzeylerine ulaşmak için aşırı açılı gövdelere ihtiyaç vardır. Bu amaca hizmet eden Gracey küretleri 11-12 ve onun modern bir modifikasyonu olan, daha iyi adaptasyon sağlayan Gracey 15-16'dır. 13-14 ve 17-18 distal yüzeylere, 7-8 ise bukkal/lingual yüzeylere aittir.

**Soru 2 (ID: 6f3b1ee1-2836-4f50-a705-1ea57f624bd5)**
Soru Kökü: 35 yaşında kadın hasta, alt ön bölgede dişeti kanaması şikayetiyle başvurmuştur. Yapılan muayenede 32, 31, 41 ve 42 numaralı dişlerin subgingival bölgelerinde yoğun eklentiler saptanmıştır. Bu dişlerin kök yüzeyi düzleştirmesi işleminde aşağıdaki bölgeye özgü (Gracey) küretlerden hangisinin kullanımı **en az** uygundur?
Doğru Şık (D): Gracey 13-14
Açıklama: Gracey 1-2, 3-4, 5-6 numaralı küretler ve Sub-0 Curvette, özellikle kesici dişler (anterior) ve premolarlar için tasarlanmıştır ve düz gövde yapıları sayesinde ön bölgeye rahatça uyum sağlarlar. Ancak Gracey 13-14 küreti, oldukça açılı bir gövdeye sahiptir ve spesifik olarak posterior (molar) dişlerin distal yüzeylerinde kullanılmak üzere dizayn edilmiştir.

---

### ÇİFT 40 (Benzerlik: 0.75)

**Soru 1 (ID: 2f6b9456-5dc7-4323-81f4-44dbb00fb591)**
Soru Kökü: İdeal bir diş fırçasının diş eti dokusuna ve açığa çıkan sement veya dentine travma vermesini en aza indirmek için kullanılan naylon veya polyester filamentlerin çapı maksimum kaç mm olmalıdır?
Doğru Şık (E): 0.23 mm
Açıklama: ISO standartlarına göre ideal bir diş fırçasında sert doku ve diş eti travmasını minimize etmek amacıyla filament çapının 0,23 mm'den büyük olmaması gereklidir. Çapın karesi arttıkça fırça sertliği üstel olarak artar.

**Soru 2 (ID: a51e9ffd-a00e-43c5-8454-307b7de9debb)**
Soru Kökü: Dişeti çekilmesi ve kök hassasiyeti olan bir hastaya önerilecek 'yumuşak' (soft) standartlardaki bir diş fırçasının kıl çapı ortalama kaç mm olmalıdır?
Doğru Şık (B): 0.2 mm
Açıklama: Yumuşak diş fırçaları standart olarak 0.2 mm çapında kıllara sahiptir. Çocuk fırçaları 0.1 mm, orta sertlikte fırçalar 0.3 mm ve sert fırçalar 0.4 mm çapındadır. Hastada travmatik çekilmeleri önlemek için 0.2 mm çap önerilir.

---

### ÇİFT 41 (Benzerlik: 0.75)

**Soru 1 (ID: 12131f25-595c-4c5d-b2d9-6bb2232c3e0a)**
Soru Kökü: 22 yaşında erkek öğrenci, final haftasında dişetlerinde şiddetli ağrı, metalik tat ve spontan kanama şikayetiyle kliniğe başvurmuştur. Ağız içi muayenede interdental papillerde krater benzeri çöküntüler ve bu lezyonların üzerini örten bir tabaka izlenmiştir. Bu tabakanın klinik karakteristiği ve altındaki dokunun durumu aşağıdakilerin hangisinde doğru tanımlanmıştır?
Doğru Şık (B): Kalan sağlıklı dişetinden eritemli bir çizgiyle ayrılan, sıyrıldığında kanayan grimsi pseudomembranla örtülüdür
Açıklama: Akut Nekrotizan Gingivitis (NUG) tablosunun en tipik bulgusu, papillerde zımbalanmış gibi duran kraterleşme ve üzerindeki grimsi pseudomembran yapısıdır. Bu membran sıyrıldığında altından oldukça kanamalı ve parlak kırmızı bir doku açığa çıkar, sağlam dokudan ise çizgisel bir eritem bandı ile ayrılır. Dantel benzeri yapılar liken planus'u, veziküller ise herpetik enfeksiyonları işaret eder.

**Soru 2 (ID: 530d7d72-dfd2-4011-b87d-edcf1a545936)**
Soru Kökü: 17 yaşındaki kadın hasta ani başlayan şiddetli dişeti ağrısı, ağızda kötü koku ve dişetlerinde kanama şikayetiyle başvuruyor. Muayenede interdental papillerin tepesinde zımbalanmış gibi görünen, gri renkli bir pseudomembran ile örtülü krater benzeri lezyonlar saptanıyor. Sistemik muayenesinde hafif ateş ve lenfadenopati belirleniyor. Son zamanlarda üniversite sınavına hazırlandığını ve uyku düzeninin bozuk olduğunu belirtiyor.

Bu hastadaki en olası tanı ve bu tanıda ön planda yer alan bakteri grubu aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (D): Nekrotizan Gingivitis - Fusospiroketal kompleks
Açıklama: Genç hastada akut başlayan ağrı, zımbalanmış interdental papiller, gri pseudomembran, stres faktörü ve kötü ağız kokusu Nekrotizan Gingivitis (NG) için patognomoniktir. NG'nin mikrobiyal etiyolojisinde Spiroketler ve Fusobacterium türlerini içeren fusospiroketal kompleks ön plandadır.

---

### ÇİFT 42 (Benzerlik: 0.75)

**Soru 1 (ID: 0ba722f7-fc32-44a6-b42a-1bde6169932a)**
Soru Kökü: Oral diagnoz kliniğinde hastaya uygulanan bir plak boyayıcı solüsyon sonrasında, hastanın diş yüzeyindeki plak birikintilerinin kahverengi-siyah renge boyandığı görülmüştür. Klinisyenin kullandığı bu kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (C): İyot içeren solüsyonlar
Açıklama: İyot içeren solüsyonlar diş yüzeyindeki biyofilmi kahverengi-siyah tonlarına boyayarak görünürlüğünü artırır. Two tone dyes plağı maviye, fluoresin sarıya, eritrosin ise kırmızıya boyar.

**Soru 2 (ID: e995aafe-e0eb-4415-9f67-2eb6182ab3ae)**
Soru Kökü: Oral hijyen eğitiminde kullanılan plak boyayıcı ajanlar ve oluşturdukları renk eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (C): İyot içeren solüsyonlar - Yeşil
Açıklama: İyot içeren solüsyonlar dental plağı yeşil değil, kahverengi-siyah tonlarına boyar. Eritrosin ve bazik fuksin kırmızı, fluoresin sarı ve two tone dyes mavi renge boyar.

---

### ÇİFT 43 (Benzerlik: 0.75)

**Soru 1 (ID: 4a8a1a43-bd3f-427e-9422-438cb43cdd31)**
Soru Kökü: Klinik periodontal muayenede cep derinliklerini ölçmek için kullanılan sondlardan, her 3 milimetrede bir (3, 6, 9, 12 mm) renk bandıyla işaretlenmiş kalibrasyona sahip olanı aşağıdakilerden hangisidir?
Doğru Şık (C): Marquis sondu
Açıklama: Marquis sondu 3-6-9-12 mm düzeninde, her 3 milimetrede renk değişen kalın şeritlere sahiptir. WHO sondu uç kısmında 0.5 mm top barındırır. Nabers sondu ise kavisli olup furkasyon muayenesinde kullanılır.

**Soru 2 (ID: f638e513-f272-47d4-8e4e-22d46d589b75)**
Soru Kökü: Cep derinliklerinin daha hassas ölçülmesi amacıyla her bir milimetresi tek tek işaretlenmiş olan ve vizibilitesi için 5, 10, 15 mm aralıklarında renk kodu bulunduran periodontal sond hangisidir?
Doğru Şık (D): UNC-15
Açıklama: UNC-15 sondu 15 mm'ye kadar her bir milimetresi çizgilerle belirlenmiş ve 5-10-15 mm noktalarında karanlık renk bantları (color code) bulunan hassas ölçüm sondudur. Williams sondunda ise 4 ve 6 rakamları eksiktir.

---

### ÇİFT 44 (Benzerlik: 0.74)

**Soru 1 (ID: c19c0dde-2530-4390-9f4f-09b0c9fd819c)**
Soru Kökü: Ağız mukozasında dil ve yanakta büyük lezyonlarla seyreden, klinik muayenede lineer, gri renkli ve dantel görünümlü alanların tespit edildiği, primer herpetik gingivostomatit ayırıcı tanısında yer alan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Büllöz liken planus
Açıklama: Büllöz liken planus, nadir görülen ağrılı bir tablo olup özellikle yanak ve dilde lineer, gri renkli dantel görünümlü strialar (Wickham striaları) ve büller ile karakterizedir. Deskuamatif gingivitis ise dantel görünümü olmaksızın spesifik olarak epitelin deskuamasyonu ile karakterize bir klinik tanımlamadır.

**Soru 2 (ID: e62ee402-e1c4-49a4-855b-f02d94c6244a)**
Soru Kökü: Primer herpetik gingivostomatitin ayırıcı tanısında değerlendirilen; vezikülleri daha generalize olan, sıklıkla dilin etkilendiği, deri lezyonlarının da eşlik edebildiği ve viral tabloya göre daha uzun süren hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Eritema multiforme
Açıklama: Eritema multiforme, PHG'ye kıyasla daha generalize veziküllerle seyreden, dil tutulumunun sık olduğu ve hedef tarzı deri lezyonlarının eşlik edebildiği uzun süreli bir tablodur. Stevens Johnson sendromunda ise tabloya spesifik olarak hemorajik oküler lezyonlar ve şiddetli büllöz cilt lezyonları eklenir.

---

### ÇİFT 45 (Benzerlik: 0.74)

**Soru 1 (ID: 45cd68de-dfc6-4a7f-8346-8ccb6a099e25)**
Soru Kökü: Akut nekrotizan gingivitis ile deskuamatif gingivitisin ayırıcı tanısında, her iki hastalığın karakteristik özelliklerini karşılaştıran aşağıdaki klinik çıkarımlardan hangisi **yanlıştır**?
Doğru Şık (B): NUG klinik tabloda genellikle kronik bir hikayeye sahipken, deskuamatif gingivitis akut olarak gelişir
Açıklama: Deskuamatif gingivitis kronik seyirli, otoimmün veya vezikülobüllöz hastalıkların (liken planus, pemfigoid vb.) dişetindeki yansımasıdır. NUG ise adından da anlaşıldığı üzere akut başlangıçlı, hızlı ve ağrılı seyreden enfeksiyöz bir durumdur. Dolayısıyla hikayelerin seyirleri şıkta tam tersi olarak ifade edilmiştir.

**Soru 2 (ID: 68c73e74-f957-4fc8-95ff-74a19b41fcd1)**
Soru Kökü: Akut nekrotizan gingivitisin (NUG) patogenezi, doku yanıtı ve klinik özellikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): İnflamasyon apikale doğru ilerledikçe dişte belirgin periodontal cep formasyonu izlenir
Açıklama: NUG lezyonları epitel ve bağ dokusunda çok hızlı bir nekroz ve yıkıma neden olur, bu nedenle doku kitlesel olarak kaybedilir. Cep formasyonunun oluşması için epitel ataçmanının apikale göçü sırasında koronal duvarın korunması gerekir; ancak NUG'daki hızlı doku erimesi nedeniyle cep oluşumu gerçekleşmez. Diğer tüm şıklar NUG'un karakteristik klinik özellikleridir.

---

### ÇİFT 46 (Benzerlik: 0.74)

**Soru 1 (ID: 8ca0591e-aee9-47a6-a8af-9bf0e214f6ad)**
Soru Kökü: 50 yaşında mandibular molar dişinde sınıf II furkasyon defekti ve lingual yüzeyde izole derin dişeti çekilmesi saptanan bir hastada, bu spesifik alanların plak kontrolü için hangi aracın kullanımı **en uygundur**?
Doğru Şık (E): Tek kıl demetli fırça
Açıklama: Tek kıl demetli fırçalar; furkasyon bölgeleri, izole derin dişeti çekilmesi alanları ve mandibular molarların linguali gibi ulaşılması zor bölgelerin spesifik temizliğinde kullanılır. Standart fırçalar ve diş ipi bu anatomik düzensizliklere adapte olamaz. Kürdan ise kök yüzeyini temizlemede yetersiz kalır.

**Soru 2 (ID: b3d0afd7-4afc-4605-b6a6-894b86f1a097)**
Soru Kökü: 22 yaşında kadın hasta rutin kontrol amacıyla kliniğe başvuruyor. Klinik ve radyografik muayenede herhangi bir ataşman kaybı, kemik yıkımı veya diastema saptanmıyor. Papillerin interdental aralığı tamamen doldurduğu bu hastada rutin proksimal temizlik için ilk tercih edilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (B): Diş ipi
Açıklama: Yıkım olmayan, interdental papilin aralığı tam doldurduğu ve temas noktalarının sıkı olduğu durumlarda en uygun interproksimal temizlik aracı diş ipidir. Arayüz fırçaları bu dar alanlara travma yaratmadan giremez. Superfloss köprü gövdelerinde, tek kıl demetli fırça ise furkasyon gibi izole alanlarda kullanılır.

---

### ÇİFT 47 (Benzerlik: 0.74)

**Soru 1 (ID: 5e646592-17f8-4131-9202-5fa0539a0184)**
Soru Kökü: Elli beş yaşındaki erkek hastanın yapılan periodontal cerrahisi sonrasında interdental papillerinde belirgin doku kaybı ve dişeti çekilmesi oluşmuştur. Hasta arayüzlerin fırça ile temizliğinde zorluk yaşadığını belirtmektedir. Bu hastaya mekanik temizlik etkinliğini artırmak için önerilecek en uygun fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (D): Charter tekniği
Açıklama: Charter tekniği, fırça kıllarının okluzale dönük yerleştirilmesi ve içeri doğru hafif basınçla esnetilmesi prensibine dayanır; bu hareket özellikle çekilmeye bağlı açılmış interproksimal boşlukların ve papil kayıplarının olduğu alanlara fırça kıllarının penetrasyonunu maksimize eder. Leonard veya Fones metodları bu tür spesifik morfolojik yıkım alanları için yetersizdir.

**Soru 2 (ID: 7bad4b81-76de-419f-8abf-227d490f3b8f)**
Soru Kökü: Fırça başının oblik yönde ve kıl uçlarının okluzal/insizal kenara bakacak şekilde yerleştirildiği, hafif basınçla kıl uçlarının interdental aralığa girmesini sağlayan, özellikle interdental papillerin kaybolduğu dişeti çekilmesi vakalarında etkili olan fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (D): Charter tekniği
Açıklama: Charter tekniğinde fırça kılları diğer yöntemlerin aksine apikale değil, okluzal veya insizal kenara doğru 45 derece açıyla konumlandırılır. Bu pozisyon, papil kaybı olan genişlemiş interdental alanların ve açık ambraşürlerin temizliğinde maksimum adaptasyon sağlar.

---

### ÇİFT 48 (Benzerlik: 0.74)

**Soru 1 (ID: 0ba722f7-fc32-44a6-b42a-1bde6169932a)**
Soru Kökü: Oral diagnoz kliniğinde hastaya uygulanan bir plak boyayıcı solüsyon sonrasında, hastanın diş yüzeyindeki plak birikintilerinin kahverengi-siyah renge boyandığı görülmüştür. Klinisyenin kullandığı bu kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (C): İyot içeren solüsyonlar
Açıklama: İyot içeren solüsyonlar diş yüzeyindeki biyofilmi kahverengi-siyah tonlarına boyayarak görünürlüğünü artırır. Two tone dyes plağı maviye, fluoresin sarıya, eritrosin ise kırmızıya boyar.

**Soru 2 (ID: 321dd5fa-052c-4f75-a1e7-c41859831e72)**
Soru Kökü: Diş yüzeyindeki biyofilmin tespitini kolaylaştırmak için uygulanan kimyasal ajanlardan hangisi dental plağı spesifik olarak sarı renge boyar?
Doğru Şık (A): Fluoresin
Açıklama: Fluoresin, dental plağı sarı renge boyayan kimyasal bir bileşiktir. Sodyum lauril sülfat ise bir boyayıcı değil, diş macunlarında kullanılan köpürtücü (yüzey aktif) bir deterjandır.

---

### ÇİFT 49 (Benzerlik: 0.74)

**Soru 1 (ID: 76a6683e-c9ef-45f3-b62a-40f9d1643720)**
Soru Kökü: On iki yaşındaki erkek hasta, ağız içinde geniş çaplı ve ağrılı lezyonlar şikayetiyle başvuruyor. Hastanın ekstraoral muayenesinde hemorajik oküler lezyonlar ve ciltte yaygın büllöz lezyonlar tespit ediliyor. Bu klinik tablo primer herpetik gingivostomatit ayırıcı tanısında aşağıdaki hastalıklardan hangisi ile ilişkilidir?
Doğru Şık (E): Stevens Johnson sendromu
Açıklama: Stevens Johnson sendromu, oral lezyonların yanı sıra mukozaları şiddetli tutan hemorajik oküler lezyonlar ve büllöz cilt lezyonları ile karakterizedir. Eritema multiforme ile benzer spektrumda yer alsa da, oküler hemoraji ve şiddetli büllöz formasyonu Stevens Johnson sendromunu tanımlayan spesifik klinik markerlardır.

**Soru 2 (ID: e62ee402-e1c4-49a4-855b-f02d94c6244a)**
Soru Kökü: Primer herpetik gingivostomatitin ayırıcı tanısında değerlendirilen; vezikülleri daha generalize olan, sıklıkla dilin etkilendiği, deri lezyonlarının da eşlik edebildiği ve viral tabloya göre daha uzun süren hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Eritema multiforme
Açıklama: Eritema multiforme, PHG'ye kıyasla daha generalize veziküllerle seyreden, dil tutulumunun sık olduğu ve hedef tarzı deri lezyonlarının eşlik edebildiği uzun süreli bir tablodur. Stevens Johnson sendromunda ise tabloya spesifik olarak hemorajik oküler lezyonlar ve şiddetli büllöz cilt lezyonları eklenir.

---

### ÇİFT 50 (Benzerlik: 0.74)

**Soru 1 (ID: 8dc42b1b-a5d0-436e-a3ed-64112be1577b)**
Soru Kökü: Aşağıdaki diş fırçalama tekniklerinden hangisinde, fırça kılları sulkus içerisine 45 derecelik açı yapacak şekilde yerleştirildikten sonra, fırçaya horizontal yönde ileri-geri kısa vibrasyon hareketleri yaptırılarak dişeti kenarının altındaki alanın temizlenmesi hedeflenir?
Doğru Şık (B): Bass Tekniği
Açıklama: Bass tekniği, sulkus temizliği odaklıdır ve fırça kılları apekse doğru 45 derece açı ile sulkusa yerleştirilerek kısa vibrasyon hareketleri ile uygulanır. Modifiye Stillman tekniğinde fırça kıllarının bir kısmı yapışık diş eti üzerinde konumlanır ve fırçaya vibrasyon verilerek koronal yönde çekilir; Charter tekniğinde ise fırça kılları oklüzal yöne dönüktür.

**Soru 2 (ID: adaa9c71-3c53-4f41-8669-0eac45c49737)**
Soru Kökü: Mekanik plak kontrolü sırasında dişler kapalı pozisyondayken fırçanın yanak içine yerleştirilerek üst dişetinden alt dişetine dairesel (sirküler) hareketlerle uygulandığı fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (C): Fones metodu
Açıklama: Fones metodu (sirküler fırçalama), dişler oklüzyondayken fırçanın yanak içine yerleştirilip dairesel hareketlerle hem üst hem alt arklardaki plakların uzaklaştırılmasını hedefler. Leonard metodunda diş yüzeyine dik yerleştirilen fırça vertikal (yukarı-aşağı) hareket ettirilir.

---

### ÇİFT 51 (Benzerlik: 0.73)

**Soru 1 (ID: 0ba722f7-fc32-44a6-b42a-1bde6169932a)**
Soru Kökü: Oral diagnoz kliniğinde hastaya uygulanan bir plak boyayıcı solüsyon sonrasında, hastanın diş yüzeyindeki plak birikintilerinin kahverengi-siyah renge boyandığı görülmüştür. Klinisyenin kullandığı bu kimyasal ajan aşağıdakilerden hangisidir?
Doğru Şık (C): İyot içeren solüsyonlar
Açıklama: İyot içeren solüsyonlar diş yüzeyindeki biyofilmi kahverengi-siyah tonlarına boyayarak görünürlüğünü artırır. Two tone dyes plağı maviye, fluoresin sarıya, eritrosin ise kırmızıya boyar.

**Soru 2 (ID: 4af9c528-c69b-4ff3-b9bd-faf6608243fa)**
Soru Kökü: Oral hijyen motivasyonunda dental plağı hastaya daha görünür hale getirmek için kullanılan ve plağı kırmızıya boyamasıyla bilinen, FDA onaylı plak boyayıcı ajan aşağıdakilerden hangisidir?
Doğru Şık (E): Eritrosin
Açıklama: Eritrosin, dental plağı kırmızıya boyayan ve FDA onayı almış en yaygın plak boyayıcı ajanlardan biridir. Bazik fuksin de kırmızı ve tonlarına boyar ancak FDA onaylı olduğuna dair spesifik metin bilgisi eritrosin ile karakterizedir. Fluoresin ise plağı sarıya boyar.

---

### ÇİFT 52 (Benzerlik: 0.73)

**Soru 1 (ID: 556677a9-5027-4fc9-8ccb-37bc67536f51)**
Soru Kökü: Başlangıç periodontal tedavisi tamamlanmış ve destekleyici periodontal tedaviye alınmış hastanın alt ön bölgesinde, ataçman kaybı olmaksızın sıkı, fibrotik bir dişeti mevcuttur. Sondlamada subgingival alanda hafif bir pürüzlülük hissedilmiş olup bu bölgenin temizlenmesi planlanmaktadır. Dokuyu esnetmeden bu dar alana girebilmek için standart küretlere göre bıçağı %20 daha ince, 1 mm daha kısa ve bıçak açısı gövdeye 60 derece kaydırılmış alet aşağıdakilerden hangisidir?
Doğru Şık (D): Periodontal idame küreti
Açıklama: Periodontal İdame Küretleri, tedavisi bitmiş ancak dokuları fibrotik büzülme göstermiş sağlıklı/sıkı sulkuslara travma yaratmadan girmek için özel olarak dizayn edilmiştir. Standart aletlere göre %20 ince ve 1 mm kısa bıçakları vardır. Bıçağın gövdeye olan açısı klasik Gracey'lerde 70 dereceyken, idame küretlerinde bu açı 60 dereceye düşürülerek kapalı cebe giriş kolaylaştırılmıştır.

**Soru 2 (ID: 5d67e99e-7f82-47ca-ad8b-0064b8879fa1)**
Soru Kökü: Sığ ceplere sahip bir idame hastasında rutin diş taşı temizliği yapılması planlanmaktadır. Ancak hekimin supragingival bölgedeki yoğun ve sert kalkulus köprülerini parçalaması, ardından subgingival alanlardaki ince rezidüel depozitleri kök sementine zarar vermeden pürüzsüzleştirmesi gerekmektedir. Bu işlemi optimal şekilde gerçekleştirmek için kullanılacak el aleti sırası aşağıdakilerin hangisinde en doğru verilmiştir?
Doğru Şık (E): Önce Orak kretuar ile ağır supragingival blokların kırılması, sonra Gracey küret ile subgingival sementin pürüzsüzleştirilmesi
Açıklama: Periodontal alet kullanımının altın standart dizilimi her zaman kaba ve güçlü aletten ince ve doku dostu alete doğru ilerlemektir. Orak kretuarlar sert ve kalın yapılarıyla kron üzerindeki ağır diştaşı köprülerini hızla kırar. Ancak subgingival yüzeye girmeleri sakıncalı olduğundan, kalan kök yüzeyindeki işlemler mutlaka Gracey veya Üniversal küretlerin yuvarlak/esnek yapısıyla tamamlanmalıdır.

---

### ÇİFT 53 (Benzerlik: 0.73)

**Soru 1 (ID: 3faa1b59-d546-4dee-8521-6d10765b88be)**
Soru Kökü: 55 yaşındaki kadın hasta, romatizmal sorunları nedeniyle lityum tedavisi görmektedir. Yeni teşhis edilen agresif periodontitis vakası için sistemik antibiyotik reçete edilmesi düşünülmektedir.

Bu hastada aşağıdaki antibiyotiklerden hangisinin kullanımı **kontrendikedir**?
Doğru Şık (B): Metronidazol
Açıklama: Metronidazol, lityum kullanan hastalarda lityum toksisitesini artırabileceği için kontrendikedir. Ayrıca warfarin kullananlarda ve alkol alanlarda (antabuse etki) da kullanımından kaçınılmalıdır.

**Soru 2 (ID: 6b71a13e-b9d8-41c3-ae17-15458a54ad30)**
Soru Kökü: Elli yaşında, bipolar bozukluk için Lityum ve atrial fibrilasyon için Warfarin (antikoagülan) kullanan bir hastada NUG (Nekrotizan Ülseratif Gingivitis) tablosu teşhis edilmiş ve oral bir antibiyotik reçete edilmiştir. Hasta ilaç kullanımına başladıktan 2 gün sonra kanama şikayetiyle hastaneye kaldırılmış (warfarin toksisitesi) ve bir akşam alkol alımı sonrasında şiddetli kramp, bulantı ve kusma atakları (antabuse etki) yaşamıştır. Hastaya reçete edilen **en olası** ajan aşağıdakilerden hangisidir?
Doğru Şık (A): Metronidazol
Açıklama: Metronidazol (nitroimidazol türevi) karaciğer enzimleri üzerinden warfarinin metabolizmasını bozar ve protrombin zamanını uzatarak toksisite yaratır. Lityum atılımını yavaşlatarak lityum zehirlenmesi yapabilir. Aynı zamanda alkolle birlikte alındığında disülfiram (antabuse) benzeri etkiyle şiddetli bulantı/kusma reaksiyonuna neden olur. NUG tedavisindeki altın standart ilaç olan metronidazol reçetelenirken bu üç etkileşim mutlaka sorgulanmalıdır.

---

### ÇİFT 54 (Benzerlik: 0.73)

**Soru 1 (ID: 83e3b1aa-0328-4d47-a57e-fc9968d53e1c)**
Soru Kökü: Başarılı bir periodontal tedavi sürecinin ardından Faz 4 idame programına alınan bir hastada, bu programın temel kısımları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Derin ceplerde rutin açık periodontal flep cerrahisi uygulanması
Açıklama: Faz 4 idame programı temel olarak muayene/değerlendirme, idame tedavisinin uygulanması (diştaşı temizliği, polisaj, irrigasyon) ve planlama kısımlarından oluşur. Açık periodontal flep cerrahisi idame fazının değil, Faz 2 cerrahi tedavinin bir parçasıdır. İdame fazında aktif bir cerrahi rutini uygulanmaz, eğer nüks saptanırsa hasta ilgili aktif tedavi fazına geri döndürülür.

**Soru 2 (ID: bfc508cb-2f4e-4e1c-8999-770b3d1ba7d7)**
Soru Kökü: Tedavi edilmiş bir periodontitis hastasında idame fazında (Faz 4) hastalığın tekrarlamasının en az olası nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Supragingival diş taşının tükürük mineralleriyle hızla mineralize olması
Açıklama: Periodontitisin nüksünde temel faktörler yetersiz subgingival debridman, doku içi bakterilerin kalması, uzun birleşim epitelinin enfeksiyona karşı zayıf direnci ve hastanın idameye uymamasıdır. Supragingival diş taşının oluşumu plak retansiyonuna katkıda bulunsa da, hastalığın yeniden aktifleşmesinin ve ataçman kaybının birincil ve en önemli nedeni değildir; esas risk subgingival ortamdaki biyofilm ve konak yanıtıdır.

---

### ÇİFT 55 (Benzerlik: 0.73)

**Soru 1 (ID: 82d07cf9-9a62-4fca-9bff-5b35b32aa774)**
Soru Kökü: Evre I-III periodontitis tedavisi görmüş, belirgin periodontal ataşman kaybı ve interdental papil çekilmeleri olan bir hastada plak kontrolü hedeflenmektedir. Bu vakada interdental temizlik aracı olarak aşağıdakilerden hangisinin kullanılması standart diş ipine göre daha etkilidir?
Doğru Şık (A): Çeşitli boyutlardaki arayüz fırçaları
Açıklama: Evre I-III periodontitis hastalarında, interdental alanlarda genişlemeler ve kök yüzeyinde konkaviteler açığa çıkar. Bu konkav anatomik alanların temizliğinde arayüz fırçaları diş ipine kıyasla daha etkili plak eliminasyonu sağlar. Diş ipi yalnızca düz yüzeylerde minimal ataşman kaybı olan vakalarda etkilidir.

**Soru 2 (ID: b3d0afd7-4afc-4605-b6a6-894b86f1a097)**
Soru Kökü: 22 yaşında kadın hasta rutin kontrol amacıyla kliniğe başvuruyor. Klinik ve radyografik muayenede herhangi bir ataşman kaybı, kemik yıkımı veya diastema saptanmıyor. Papillerin interdental aralığı tamamen doldurduğu bu hastada rutin proksimal temizlik için ilk tercih edilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (B): Diş ipi
Açıklama: Yıkım olmayan, interdental papilin aralığı tam doldurduğu ve temas noktalarının sıkı olduğu durumlarda en uygun interproksimal temizlik aracı diş ipidir. Arayüz fırçaları bu dar alanlara travma yaratmadan giremez. Superfloss köprü gövdelerinde, tek kıl demetli fırça ise furkasyon gibi izole alanlarda kullanılır.

---

### ÇİFT 56 (Benzerlik: 0.73)

**Soru 1 (ID: 511f2a61-a595-448d-850a-eb2f9684bdf6)**
Soru Kökü: 68 yaşında erkek hasta, yaygın kronik periodontitis şikayetiyle başvurmuştur. Anamnezinde KOAH (Kronik Obstrüktif Akciğer Hastalığı) olduğu ve eski tip korumasız bir kalp pili (pacemaker) taşıdığı öğrenilmiştir. Bu hastanın başlangıç periodontal tedavisi planlanırken, aşağıdaki ekipmanlardan hangisinin kullanımı hastanın sistemik durumu nedeniyle kesinlikle **kontrendikedir**?
Doğru Şık (E): Magnetostriktif ultrasonik cihazlar
Açıklama: Magnetostriktif ultrasonik cihazlar, çalışırken tutamak etrafında elektromanyetik bir alan oluştururlar. Bu manyetik alan, eski nesil korumasız kalp pillerinin (pacemaker) ritmini bozarak ölümcül aritmilere sebep olabilir. Ayrıca, cihazın oluşturduğu su spreyi aerosolu, KOAH hastalarında akciğer sekresyonlarını artırıp solunum yetmezliğini tetikleyebileceğinden ultrasonik alet kullanımı bu iki durumda da kontrendikedir.

**Soru 2 (ID: 8d0dc36b-c65f-4a03-9343-57042ce44ddb)**
Soru Kökü: Altmış sekiz yaşında, kalp yetmezliği nedeniyle kardiyak pacemaker (kalp pili) taşıyan bir hastada kronik fenitoin kullanımına bağlı jeneralize dişeti büyümesi mevcuttur. Hastaya gingivektomi yapılması planlanmaktadır. Bu hastada aşağıdaki cerrahi araçlardan hangisinin kullanımı kesinlikle **kontrendikedir**?
Doğru Şık (A): Elektrocerrahi (Radyocerrahi)
Açıklama: Elektrocerrahi cihazları, yüksek frekanslı radyo dalgaları kullanarak dokuyu keser veya koagüle eder. Bu elektriksel dalgalar, kalp pili (pacemaker) taşıyan hastalarda cihazın ritmini bozabileceği için kullanım açısından kesin kontrendikasyon oluşturur. Kirkland veya Orban bıçağı gibi mekanik çelik aletlerin kullanımı bu sistemik kısıtlama altında tamamen güvenlidir.

---

### ÇİFT 57 (Benzerlik: 0.73)

**Soru 1 (ID: 0a22c6b2-96bf-4195-8428-6255cf72030f)**
Soru Kökü: Air-powder polishing (hava-toz püskürtme) sistemlerinde, özellikle subgingival biyofilm temizliği için hem manuel hem de ultrasonik temizlikten daha etkili olduğu kanıtlanan ve implant yüzeylerinde güvenle kullanılabilen tozlar aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (B): Glisin ve Eritritol
Açıklama: Glisin ve eritritol, partikül boyutlarının daha küçük olması ve daha az aşındırıcı yapıları sayesinde titanyum implant yüzeyleri ile subgingival biyofilm temizliğinde oldukça etkili ve güvenli tozlardır. Sodyum bikarbonat ve alüminyum trihidroksit ise dentin, sement ve restoratif materyallerde aşınmalara yol açtığı için derin subgingival bölgelerde ve implantlarda tercih edilmezler. Subgingival uç ile uygulanan glisin/eritritol, klasik ultrasonik işlemlere üstünlük sağlar.

**Soru 2 (ID: 77ac46e4-c7dc-498c-ae1f-46457c0b2d19)**
Soru Kökü: Elli beş yaşında, anamnezinde hipertansiyon hikayesi bulunan ve diyetinde sodyum kısıtlaması uygulanan bir erkek hastanın periodontal idame seansında air-powder polishing (hava-toz püskürtme) işlemi yapılması planlanmaktadır. Bu hastada aşağıdaki tozlardan hangisinin kullanımı **kontrendikedir**?
Doğru Şık (A): Sodyum bikarbonat
Açıklama: Sodyum bikarbonat tozu, içerdiği sodyum nedeniyle elektrolit dengesini etkileyebilir ve hipertansiyon hikayesi olan, sodyum kısıtlaması yapılan hastalarda sistemik komplikasyonlara yol açabileceği için kesinlikle kullanılmamalıdır. Glisin ve eritritol gibi diğer tozlar bu tür sistemik riskler taşımaz ve implant yüzeyleri dahil subgingival/supragingival alanlarda güvenle uygulanabilir. Alüminyum trihidroksit sodyum içermez ancak kök yüzeyinde aşınmalara yol açabilir, sistemik bir kontrendikasyonu bu senaryoyla uyuşmaz.

---

### ÇİFT 58 (Benzerlik: 0.73)

**Soru 1 (ID: 82d07cf9-9a62-4fca-9bff-5b35b32aa774)**
Soru Kökü: Evre I-III periodontitis tedavisi görmüş, belirgin periodontal ataşman kaybı ve interdental papil çekilmeleri olan bir hastada plak kontrolü hedeflenmektedir. Bu vakada interdental temizlik aracı olarak aşağıdakilerden hangisinin kullanılması standart diş ipine göre daha etkilidir?
Doğru Şık (A): Çeşitli boyutlardaki arayüz fırçaları
Açıklama: Evre I-III periodontitis hastalarında, interdental alanlarda genişlemeler ve kök yüzeyinde konkaviteler açığa çıkar. Bu konkav anatomik alanların temizliğinde arayüz fırçaları diş ipine kıyasla daha etkili plak eliminasyonu sağlar. Diş ipi yalnızca düz yüzeylerde minimal ataşman kaybı olan vakalarda etkilidir.

**Soru 2 (ID: 8ca0591e-aee9-47a6-a8af-9bf0e214f6ad)**
Soru Kökü: 50 yaşında mandibular molar dişinde sınıf II furkasyon defekti ve lingual yüzeyde izole derin dişeti çekilmesi saptanan bir hastada, bu spesifik alanların plak kontrolü için hangi aracın kullanımı **en uygundur**?
Doğru Şık (E): Tek kıl demetli fırça
Açıklama: Tek kıl demetli fırçalar; furkasyon bölgeleri, izole derin dişeti çekilmesi alanları ve mandibular molarların linguali gibi ulaşılması zor bölgelerin spesifik temizliğinde kullanılır. Standart fırçalar ve diş ipi bu anatomik düzensizliklere adapte olamaz. Kürdan ise kök yüzeyini temizlemede yetersiz kalır.

---

### ÇİFT 59 (Benzerlik: 0.73)

**Soru 1 (ID: 01cdf9ab-c7a9-4bf7-9b60-0acc71fc5368)**
Soru Kökü: Alt sağ birinci molar dişin bukkal ve lingual yüzeylerinde lokalize 5 mm derinliğinde periodontal cepleri bulunan bir hastada, bu yüzeylerin subgingival debridmanı için aşağıdaki el aletlerinden hangisi spesifik olarak tasarlanmıştır?
Doğru Şık (E): Gracey 7-8
Açıklama: Gracey küret sistematiğinde posterior dişlerin (molar ve premolarlar) fasial (bukkal) ve oral (lingual/palatinal) düz yüzeylerinin temizliği için Gracey 7-8 ve 9-10 numaralı aletler kullanılır. 11-12 ve 15-16 mezyal yüzeyler, 13-14 ve 17-18 ise distal yüzeyler için spesifiktir.

**Soru 2 (ID: 1dd7b9e3-8be0-4e28-a58c-549c0ebcc5dd)**
Soru Kökü: 55 yaşında diyabetik bir erkek hastanın üst sağ kanin dişinin palatinal bölgesinde 7 mm derinliğinde dar bir periodontal cep tespit edilmiştir. Standart Gracey küretlerin boyun uzunluğu bu cep tabanına ulaşmada yetersiz kalmıştır. Bu durumda subgingival kök yüzeyi debridmanı için aşağıdaki alet modifikasyonlarından hangisinin kullanılması endikedir?
Doğru Şık (C): After Five küreti
Açıklama: Derin periodontal ceplere (5 mm ve üzeri) erişim sağlamak için standart Gracey küretlerin terminal boyun (shank) kısmı 3 mm uzatılarak 'After Five' (uzatılmış gövdeli) küretler geliştirilmiştir. Bu tasarım, alet sapının kurona çarpmasını engelleyerek bıçağın derin cep tabanına adaptasyonunu mümkün kılar.

---

### ÇİFT 60 (Benzerlik: 0.73)

**Soru 1 (ID: 4af9c528-c69b-4ff3-b9bd-faf6608243fa)**
Soru Kökü: Oral hijyen motivasyonunda dental plağı hastaya daha görünür hale getirmek için kullanılan ve plağı kırmızıya boyamasıyla bilinen, FDA onaylı plak boyayıcı ajan aşağıdakilerden hangisidir?
Doğru Şık (E): Eritrosin
Açıklama: Eritrosin, dental plağı kırmızıya boyayan ve FDA onayı almış en yaygın plak boyayıcı ajanlardan biridir. Bazik fuksin de kırmızı ve tonlarına boyar ancak FDA onaylı olduğuna dair spesifik metin bilgisi eritrosin ile karakterizedir. Fluoresin ise plağı sarıya boyar.

**Soru 2 (ID: e995aafe-e0eb-4415-9f67-2eb6182ab3ae)**
Soru Kökü: Oral hijyen eğitiminde kullanılan plak boyayıcı ajanlar ve oluşturdukları renk eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (C): İyot içeren solüsyonlar - Yeşil
Açıklama: İyot içeren solüsyonlar dental plağı yeşil değil, kahverengi-siyah tonlarına boyar. Eritrosin ve bazik fuksin kırmızı, fluoresin sarı ve two tone dyes mavi renge boyar.

---

### ÇİFT 61 (Benzerlik: 0.73)

**Soru 1 (ID: 12af318c-6378-44ed-91dd-9281c99ef3d3)**
Soru Kökü: Otuz beş yaşındaki kadın hastanın idame tedavisinde izole derin cepler tespit edilmiştir. Hekim, hastaya lokal tetrasiklin türevi bir ajan uygulamaya karar vermiştir. Ancak hasta, iş seyahati nedeniyle 10 gün sonraki kontrol randevusuna gelemeyeceğini belirtmiştir. Bu durumda hekimin, dişeti oluğu sıvısıyla temas edince katılaşan ve biyolojik olarak yıkıma uğradığı için ikinci bir seansta çıkarılması gerekmeyen doksisiklin içerikli hangi lokal sistemi tercih etmesi en uygundur?
Doğru Şık (A): Atridox
Açıklama: Atridox, doksisiklin içeren ve dişeti oluğu sıvısıyla temas ettiğinde katılaşarak yavaş salınım sağlayan rezorbe olabilir (biyoçözünür) bir jel sistemidir. Actisite (tetrasiklin fiber) biyolojik olarak inert olduğu için mekanik olarak çıkarılmayı gerektirir ve randevuya gelemeyecek hasta için kontrendikedir. Doksisiklin içerikli, kendi kendine çözünen doğru sistem Atridox'tur.

**Soru 2 (ID: 95cb087b-5633-4d9e-93aa-e5513f8f23f1)**
Soru Kökü: Antibiyotiklerin lokal (cebe spesifik) olarak uygulanmasında kullanılan taşıyıcı sistemlerden biri olan Atridox'un etken maddesi aşağıdakilerden hangisidir?
Doğru Şık (B): Doksisiklin
Açıklama: Atridox, %10 doksisiklin hiklat içeren ve dişeti oluğu sıvısıyla temas ettiğinde katılaşarak jel formunu alan, rezorbe olabilen lokal salınım sistemidir. Arestin minosiklin, Actisite ise tetrasiklin içerir.

---

### ÇİFT 62 (Benzerlik: 0.73)

**Soru 1 (ID: 321dd5fa-052c-4f75-a1e7-c41859831e72)**
Soru Kökü: Diş yüzeyindeki biyofilmin tespitini kolaylaştırmak için uygulanan kimyasal ajanlardan hangisi dental plağı spesifik olarak sarı renge boyar?
Doğru Şık (A): Fluoresin
Açıklama: Fluoresin, dental plağı sarı renge boyayan kimyasal bir bileşiktir. Sodyum lauril sülfat ise bir boyayıcı değil, diş macunlarında kullanılan köpürtücü (yüzey aktif) bir deterjandır.

**Soru 2 (ID: 4af9c528-c69b-4ff3-b9bd-faf6608243fa)**
Soru Kökü: Oral hijyen motivasyonunda dental plağı hastaya daha görünür hale getirmek için kullanılan ve plağı kırmızıya boyamasıyla bilinen, FDA onaylı plak boyayıcı ajan aşağıdakilerden hangisidir?
Doğru Şık (E): Eritrosin
Açıklama: Eritrosin, dental plağı kırmızıya boyayan ve FDA onayı almış en yaygın plak boyayıcı ajanlardan biridir. Bazik fuksin de kırmızı ve tonlarına boyar ancak FDA onaylı olduğuna dair spesifik metin bilgisi eritrosin ile karakterizedir. Fluoresin ise plağı sarıya boyar.

---

### ÇİFT 63 (Benzerlik: 0.73)

**Soru 1 (ID: 0a50304c-fa7e-45f7-be4d-12c9066c3e30)**
Soru Kökü: Cerrahi olmayan periodontal tedavi (Faz 1) işlemleri tamamlandıktan sonra, doku cevabının yeniden değerlendirilmesi ve idame aşamasına geçiş kararının alınabilmesi için beklenmesi gereken klinik süre aşağıdakilerden hangisidir?
Doğru Şık (D): 4-6 hafta
Açıklama: Faz 1 tedavi sonrası epitelizasyon 1-2 haftada tamamlansa da, doku içi bağ dokusu iyileşmesinin ve gerçek enflamatuar gerilemenin değerlendirilebilmesi için 4-6 hafta beklenmesi gereklidir. Bu süreden önce yapılacak sondlama işlemleri, tam iyileşmemiş yara dokusuna zarar vererek kanama oluşturur ve yanlış değerlendirmeye yol açar. Bu periyodun ardından hasta doğrudan Faz 4 idame programına veya cerrahi faza yönlendirilir.

**Soru 2 (ID: 40bbe360-28e5-4aa7-9d13-d156d3dafd24)**
Soru Kökü: Diş taşı temizliği ve kök düzeltmesi (SCRP) işlemlerini takiben yumuşak dokunun iyileşme cevabının yeniden değerlendirilmesi için en az ne kadar süre beklenmesi önerilir?
Doğru Şık (B): 2 hafta
Açıklama: İşlem sırasında meydana gelen bağ dokusu yaralanmasının epitelizasyonu ve bağ dokusu iyileşmesi zaman alır. Epitelizasyon 1-2 haftada tamamlanır. Bu nedenle, kanama ve cep derinliği gibi klinik parametrelerin doğru değerlendirilebilmesi için işlemden sonra en az 2 hafta geçmeden sondalama yapılmamalıdır. Genellikle ilk değerlendirme (Faz 1'in yeniden değerlendirilmesi) 4-6 hafta sonra yapılır.

---

### ÇİFT 64 (Benzerlik: 0.72)

**Soru 1 (ID: 01cdf9ab-c7a9-4bf7-9b60-0acc71fc5368)**
Soru Kökü: Alt sağ birinci molar dişin bukkal ve lingual yüzeylerinde lokalize 5 mm derinliğinde periodontal cepleri bulunan bir hastada, bu yüzeylerin subgingival debridmanı için aşağıdaki el aletlerinden hangisi spesifik olarak tasarlanmıştır?
Doğru Şık (E): Gracey 7-8
Açıklama: Gracey küret sistematiğinde posterior dişlerin (molar ve premolarlar) fasial (bukkal) ve oral (lingual/palatinal) düz yüzeylerinin temizliği için Gracey 7-8 ve 9-10 numaralı aletler kullanılır. 11-12 ve 15-16 mezyal yüzeyler, 13-14 ve 17-18 ise distal yüzeyler için spesifiktir.

**Soru 2 (ID: 5d67e99e-7f82-47ca-ad8b-0064b8879fa1)**
Soru Kökü: Sığ ceplere sahip bir idame hastasında rutin diş taşı temizliği yapılması planlanmaktadır. Ancak hekimin supragingival bölgedeki yoğun ve sert kalkulus köprülerini parçalaması, ardından subgingival alanlardaki ince rezidüel depozitleri kök sementine zarar vermeden pürüzsüzleştirmesi gerekmektedir. Bu işlemi optimal şekilde gerçekleştirmek için kullanılacak el aleti sırası aşağıdakilerin hangisinde en doğru verilmiştir?
Doğru Şık (E): Önce Orak kretuar ile ağır supragingival blokların kırılması, sonra Gracey küret ile subgingival sementin pürüzsüzleştirilmesi
Açıklama: Periodontal alet kullanımının altın standart dizilimi her zaman kaba ve güçlü aletten ince ve doku dostu alete doğru ilerlemektir. Orak kretuarlar sert ve kalın yapılarıyla kron üzerindeki ağır diştaşı köprülerini hızla kırar. Ancak subgingival yüzeye girmeleri sakıncalı olduğundan, kalan kök yüzeyindeki işlemler mutlaka Gracey veya Üniversal küretlerin yuvarlak/esnek yapısıyla tamamlanmalıdır.

---

### ÇİFT 65 (Benzerlik: 0.72)

**Soru 1 (ID: c760ed82-20b9-44cc-8dce-4f2d49f0d1b5)**
Soru Kökü: Klinikte saptanan bir apsenin periradiküler (endodontik) kaynaklı mı yoksa periodontal kaynaklı mı olduğunu ayırt etmede kullanılan en kesin tanısal kriter aşağıdakilerden hangisidir?
Doğru Şık (A): Pulpa vitalite durumu
Açıklama: Periodontal ve endodontik apselerin ayrımında en güvenilir klinik test pulpa vitalitesidir; endodontik lezyonlarda pulpa devital iken, primer periodontal apselerde diş tipik olarak canlıdır. Mobilite ve radyografik kayıp her iki tabloda da (özellikle kombine lezyonlarda) örtüşebileceğinden primer ayırıcı tanı kriteri olarak vitalite kadar spesifik değildir.

**Soru 2 (ID: cb0aa73e-a7a5-4229-aad8-9cdf03a0424b)**
Soru Kökü: Periapikal apse ile periodontal apsenin ayırıcı tanısında kullanılan klinik ve radyografik özelliklerin karşılaştırılmasıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Periodontal apsede ağrı çok daha keskin ve spontan olup hastayı gece uykudan uyandıran şiddettedir.
Açıklama: Spontan, yoğun, keskin ve hastayı gece uykusundan uyandıran ağrı tablosu endodontik lezyonlara (periapikal apse) aittir. Periodontal apselerin ağrısı ise daha diffüz, künt, nabızsal ve genellikle daha tolere edilebilir (kabul edilebilir) niteliktedir.

---

### ÇİFT 66 (Benzerlik: 0.72)

**Soru 1 (ID: 1dd7b9e3-8be0-4e28-a58c-549c0ebcc5dd)**
Soru Kökü: 55 yaşında diyabetik bir erkek hastanın üst sağ kanin dişinin palatinal bölgesinde 7 mm derinliğinde dar bir periodontal cep tespit edilmiştir. Standart Gracey küretlerin boyun uzunluğu bu cep tabanına ulaşmada yetersiz kalmıştır. Bu durumda subgingival kök yüzeyi debridmanı için aşağıdaki alet modifikasyonlarından hangisinin kullanılması endikedir?
Doğru Şık (C): After Five küreti
Açıklama: Derin periodontal ceplere (5 mm ve üzeri) erişim sağlamak için standart Gracey küretlerin terminal boyun (shank) kısmı 3 mm uzatılarak 'After Five' (uzatılmış gövdeli) küretler geliştirilmiştir. Bu tasarım, alet sapının kurona çarpmasını engelleyerek bıçağın derin cep tabanına adaptasyonunu mümkün kılar.

**Soru 2 (ID: ae3637bd-a0a8-4021-8108-5bfefb62a398)**
Soru Kökü: 30 yaşında bir hastanın alt çene kesici dişlerinde kök yüzeyindeki dar gelişimsel oluklara ve çizgisel açılara uyum sağlamak için, bıçağı standart bir Gracey küretin yarısı uzunluğunda (%50 daha kısa) ve ucu belirgin şekilde yukarı doğru kavisli olarak tasarlanmış olan özel modifikasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Gracey Curvettes
Açıklama: Gracey Curvettes setinin bıçak uzunluğu standart aletlere göre %50 kısaltılmış olup, ucundaki belirgin yukarı doğru kavis, özellikle alt anterior dişler gibi dar köklü bölgelerde çizgi açılarına ve konkavitelere üst düzey uyum sağlar. Mini Five küretlerde de bıçak %50 kısadır ancak Curvettes kadar ekstra bir yukarı eğim barındırmazlar.

---

### ÇİFT 67 (Benzerlik: 0.72)

**Soru 1 (ID: 8ca0591e-aee9-47a6-a8af-9bf0e214f6ad)**
Soru Kökü: 50 yaşında mandibular molar dişinde sınıf II furkasyon defekti ve lingual yüzeyde izole derin dişeti çekilmesi saptanan bir hastada, bu spesifik alanların plak kontrolü için hangi aracın kullanımı **en uygundur**?
Doğru Şık (E): Tek kıl demetli fırça
Açıklama: Tek kıl demetli fırçalar; furkasyon bölgeleri, izole derin dişeti çekilmesi alanları ve mandibular molarların linguali gibi ulaşılması zor bölgelerin spesifik temizliğinde kullanılır. Standart fırçalar ve diş ipi bu anatomik düzensizliklere adapte olamaz. Kürdan ise kök yüzeyini temizlemede yetersiz kalır.

**Soru 2 (ID: fd3155d0-4fdf-4e57-b287-0910dd27d26a)**
Soru Kökü: Aşağıdaki interdental bölge temizlik araçlarından hangisi, ortadan şiddetliye doğru ataçman yıkımı olan, geniş interproksimal aralıklara ve konkav kök yüzeylerine sahip alanlarda plağı elimine etmek için **en etkili** yöntemdir?
Doğru Şık (C): Arayüz fırçası
Açıklama: Ataçman kaybı sonucu açığa çıkmış, genişlemiş interdental alanlarda ve özellikle konkav kök yüzeylerinde (örn. premolar meziali) diş ipi yeterli temizliği sağlayamaz. Arayüz fırçaları, kıl yapısı sayesinde konkavitelerin içine girerek plağı etkin bir şekilde temizler.

---

### ÇİFT 68 (Benzerlik: 0.72)

**Soru 1 (ID: 059dabdf-7245-4e1a-a87e-27139568978e)**
Soru Kökü: Periodontal enfeksiyonların tedavisinde sıklıkla birden fazla bakteri türü rol oynadığı için kombine antibiyotik rejimleri tercih edilebilmektedir. Ancak bu kombinasyonlar oluşturulurken ilaçların antagonist etkileşimleri göz önünde bulundurulmalıdır. Buna göre, aşağıdaki antibiyotik kombinasyonlarından hangisinin periodontal tedavide birlikte kullanımı genel farmakolojik kurallar gereği **kontrendikedir**?
Doğru Şık (C): Tetrasiklin - Amoksisilin
Açıklama: Bakteriyostatik etkili bir antibiyotik olan tetrasiklin, bakteri hücresinin çoğalma evresinde hücre duvarını yıkarak etki gösteren bakterisid ajanlarla (amoksisilin gibi) birlikte kullanılamaz; çünkü bakteriyostatikler hücre döngüsünü durdurarak bakterisid ajanların hedefini ortadan kaldırır. Metronidazol ve amoksisilin sinerjistik etki göstererek sıklıkla kombine edilirken, tetrasiklin ve amoksisilinin eş zamanlı kullanımı farmakolojik antagonizma yaratır. Bu kural, kombine antibiyotik reçetesi yazımında temel farmakodinamik güvenlik adımıdır.

**Soru 2 (ID: dbdfde76-a764-4262-80fc-8d1a179bedf0)**
Soru Kökü: Periodontal enfeksiyonların tedavisinde antibiyotik kombinasyonları planlanırken, hücre çoğalmasını durduran ajanlarla hücre duvarını yıkan ajanların eş zamanlı kullanımı farmakodinamik çakışma yaratır. Bu temel prensibe göre, aşağıdaki antibiyotiklerden hangisinin amoksisilin ile birlikte kullanımı 'bakteriyostatik-bakterisid antagonizması' yaratacağı için uygun **değildir**?
Doğru Şık (C): Minosiklin
Açıklama: Minosiklin, bir tetrasiklin türevi olarak 30S ribozomal alt üniteye bağlanıp protein sentezini engelleyen 'bakteriyostatik' bir antibiyotiktir. Amoksisilin ise hücre duvarı sentezini aktif replikasyon aşamasında durduran 'bakterisid' bir ajandır. Amoksisilinin etki edebilmesi için hücrenin çoğalıyor olması gerekir; minosiklin ise çoğalmayı durdurur. Bu nedenle bakteriyostatik (minosiklin) ve bakterisid (amoksisilin) kombinasyonu antagonizma yarattığı için kontrendikedir.

---

### ÇİFT 69 (Benzerlik: 0.72)

**Soru 1 (ID: 71d6e448-e016-40a3-8f46-40d4b0acca03)**
Soru Kökü: Periodontal tedavi sonrası idame fazında olan ve sadece 'yeni başlamış minimal doku yıkımı' tablosu sergileyen bir hastada arayüz temizliği için kullanılması en uygun araç grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Diş ipi veya kürdan
Açıklama: Yeni başlamış minimal yıkım durumlarında interdental alan hafifçe açılmıştır ve bu bölgeye diş ipi veya ağaç kürdan ile plak eliminasyonu yapılması uygundur. İleri derecede açılmış arayüzler için çeşitli boyutlarda arayüz fırçaları tercih edilmelidir. Tek kıl demetli fırçalar daha çok derin defektler ve furkasyonlar için saklanır.

**Soru 2 (ID: fd3155d0-4fdf-4e57-b287-0910dd27d26a)**
Soru Kökü: Aşağıdaki interdental bölge temizlik araçlarından hangisi, ortadan şiddetliye doğru ataçman yıkımı olan, geniş interproksimal aralıklara ve konkav kök yüzeylerine sahip alanlarda plağı elimine etmek için **en etkili** yöntemdir?
Doğru Şık (C): Arayüz fırçası
Açıklama: Ataçman kaybı sonucu açığa çıkmış, genişlemiş interdental alanlarda ve özellikle konkav kök yüzeylerinde (örn. premolar meziali) diş ipi yeterli temizliği sağlayamaz. Arayüz fırçaları, kıl yapısı sayesinde konkavitelerin içine girerek plağı etkin bir şekilde temizler.

---

### ÇİFT 70 (Benzerlik: 0.72)

**Soru 1 (ID: bdc4fd9f-79c3-4119-a64b-d419d2360fba)**
Soru Kökü: 40 yaşında kadın hastanın kronik periodontitis tedavisi sonrasında oral hijyeni ideal düzeyde olmasına rağmen hastalığı nüksetmiş ve klinik ataçman kaybı ilerlemiştir. Bu vakada tekrarlamanın hücresel düzeydeki en temel mikrobiyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Gingival bağ dokusu içerisine invaze olan periodonto-patojenlerin varlığını sürdürmesi
Açıklama: Periodontal hastalığın tekrarlamasının en önemli nedenlerinden biri, periodonto-patojenlerin (A.a veya P.gingivalis gibi) gingival dokuların derinlerine invaze olmasıdır. SCRP veya flep cerrahisi sadece kök yüzeyini temizler, ancak bağ dokusu içindeki bu bakteriler tamamen elimine edilemezse cebin içerisine doğru yeniden kolonize olarak hastalığı tekrar başlatırlar.

**Soru 2 (ID: bfc508cb-2f4e-4e1c-8999-770b3d1ba7d7)**
Soru Kökü: Tedavi edilmiş bir periodontitis hastasında idame fazında (Faz 4) hastalığın tekrarlamasının en az olası nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Supragingival diş taşının tükürük mineralleriyle hızla mineralize olması
Açıklama: Periodontitisin nüksünde temel faktörler yetersiz subgingival debridman, doku içi bakterilerin kalması, uzun birleşim epitelinin enfeksiyona karşı zayıf direnci ve hastanın idameye uymamasıdır. Supragingival diş taşının oluşumu plak retansiyonuna katkıda bulunsa da, hastalığın yeniden aktifleşmesinin ve ataçman kaybının birincil ve en önemli nedeni değildir; esas risk subgingival ortamdaki biyofilm ve konak yanıtıdır.

---

### ÇİFT 71 (Benzerlik: 0.72)

**Soru 1 (ID: 38e1d2c5-b119-4d91-9b1d-410fa88fe362)**
Soru Kökü: Kimyasal plak kontrolünde kullanılan terapötik ajanların sınıflandırılmasına göre, mevcut dental plağın patojenik hacmini gingivitis oluşturacak kritik klinik eşiğin altında tutan ajanlara ne ad verilir?
Doğru Şık (D): Antiplak ajanlar
Açıklama: Antiplak ajanlar, bakteri popülasyonunu ve plak düzeyini gingivitis oluşturacak seviyenin altında tutarak klinik sağlığı korurlar. Plak inhibe ediciler sadece miktar ve kaliteyi değiştirirken, antigingivitis ajanlar doğrudan inflamasyon yolağına müdahale eder.

**Soru 2 (ID: a8c1e4e7-8f21-40ad-b46a-a6ae291f1ec2)**
Soru Kökü: Plak kontrolünde klinik olarak en etkili ajan grubu kabul edilen ve klorheksidin, aleksidin dihidroklorid ile oktenidin dihidroklorid gibi antiseptikleri içeren kimyasal sınıf aşağıdakilerden hangisidir?
Doğru Şık (A): Bis-biguanidler
Açıklama: Bis-biguanidler, bakteri hücre zarına bağlanarak etki gösteren en güçlü antiplak ajan sınıfıdır. Klorheksidin bu grubun altın standardıdır; aleksidin ve oktenidin de aynı kimyasal aileye mensuptur. Fenolik bileşiklerde Listerine bulunur.

---

### ÇİFT 72 (Benzerlik: 0.72)

**Soru 1 (ID: a1717538-4d59-400d-8252-c1809fc0aa03)**
Soru Kökü: 35 yaşında erkek hasta, üst çene posterior bölgesindeki 3 üyeli sabit köprü protezinin gövde altı temizliğini yapamadığından şikayetçidir. Bu hastaya köprü gövdesi altında etkin plak kontrolü için önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (A): Superfloss veya iplik geçirici
Açıklama: Sabit köprü protezlerinin gövdeleri altında plak kontrolünü sağlamak için özel olarak tasarlanmış süngerimsi kısmı bulunan Superfloss veya iplik geçiriciler kullanılır. Standart diş ipi köprü altından geçirilemez, kürdan ise bu bölgeye uygun formu sağlayamaz. Tek kıl demetli fırçalar sadece protez kenarlarına ulaşabilir, gövde altını süpüremez.

**Soru 2 (ID: b3d0afd7-4afc-4605-b6a6-894b86f1a097)**
Soru Kökü: 22 yaşında kadın hasta rutin kontrol amacıyla kliniğe başvuruyor. Klinik ve radyografik muayenede herhangi bir ataşman kaybı, kemik yıkımı veya diastema saptanmıyor. Papillerin interdental aralığı tamamen doldurduğu bu hastada rutin proksimal temizlik için ilk tercih edilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (B): Diş ipi
Açıklama: Yıkım olmayan, interdental papilin aralığı tam doldurduğu ve temas noktalarının sıkı olduğu durumlarda en uygun interproksimal temizlik aracı diş ipidir. Arayüz fırçaları bu dar alanlara travma yaratmadan giremez. Superfloss köprü gövdelerinde, tek kıl demetli fırça ise furkasyon gibi izole alanlarda kullanılır.

---

### ÇİFT 73 (Benzerlik: 0.72)

**Soru 1 (ID: 495651df-b2b3-4733-b789-199bbe9525dc)**
Soru Kökü: Kronik periodontitis tedavisinde, konak modülasyonu amacıyla "Sub-antimikrobiyal-doz doksisiklin (SDD)" kullanımı FDA tarafından onaylanmıştır. SDD uygulamasının primer etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Kollajenaz aktivitesini inhibe ederek doku yıkımını önlemek
Açıklama: Sub-antimikrobiyal doz doksisiklin (20 mg), antibakteriyel etki göstermekten ziyade konak modülatörü olarak çalışır. MMP'lerin (Matrix Metalloproteinase) özellikle kollajenaz enziminin sentezini ve aktivitesini inhibe ederek doku yıkımını engeller. Osteoblastik aktiviteyi arttırırken osteoklastik aktiviteyi azaltır.

**Soru 2 (ID: 5bc3ff9f-73ac-4f71-9eb9-9f9d9e25d297)**
Soru Kökü: Tetrasiklin grubu ajanlar (özellikle doksisiklin), salt antibakteriyel etkilerinden bağımsız olarak konak modülasyonu sağlamak amacıyla subantimikrobiyal dozlarda da kullanılmaktadır. Tetrasiklinlerin konak yanıtını düzenleyici bu temel farmakodinamik etkisi aşağıdakilerden hangisidir?
Doğru Şık (D): Matriks metalloproteinazları ve kollajenaz enzim aktivitesini inhibe etmesi
Açıklama: Tetrasiklinler ve bilhassa doksisiklin, enfeksiyon bölgesindeki nötrofil ve fibroblastlardan salınan matriks metalloproteinazlarını (MMP) ve kollajenazı doğrudan inhibe etme (antikollajenaz etki) yeteneğine sahiptir. Bu etki, mikrobiyal yükten bağımsız olarak doku yıkımını yavaşlatır ve Sub-antimikrobiyal-doz (SDD) doksisiklin uygulamasının (konak modülasyonunun) biyolojik temelini oluşturur.

---

### ÇİFT 74 (Benzerlik: 0.72)

**Soru 1 (ID: 71d6e448-e016-40a3-8f46-40d4b0acca03)**
Soru Kökü: Periodontal tedavi sonrası idame fazında olan ve sadece 'yeni başlamış minimal doku yıkımı' tablosu sergileyen bir hastada arayüz temizliği için kullanılması en uygun araç grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Diş ipi veya kürdan
Açıklama: Yeni başlamış minimal yıkım durumlarında interdental alan hafifçe açılmıştır ve bu bölgeye diş ipi veya ağaç kürdan ile plak eliminasyonu yapılması uygundur. İleri derecede açılmış arayüzler için çeşitli boyutlarda arayüz fırçaları tercih edilmelidir. Tek kıl demetli fırçalar daha çok derin defektler ve furkasyonlar için saklanır.

**Soru 2 (ID: 82d07cf9-9a62-4fca-9bff-5b35b32aa774)**
Soru Kökü: Evre I-III periodontitis tedavisi görmüş, belirgin periodontal ataşman kaybı ve interdental papil çekilmeleri olan bir hastada plak kontrolü hedeflenmektedir. Bu vakada interdental temizlik aracı olarak aşağıdakilerden hangisinin kullanılması standart diş ipine göre daha etkilidir?
Doğru Şık (A): Çeşitli boyutlardaki arayüz fırçaları
Açıklama: Evre I-III periodontitis hastalarında, interdental alanlarda genişlemeler ve kök yüzeyinde konkaviteler açığa çıkar. Bu konkav anatomik alanların temizliğinde arayüz fırçaları diş ipine kıyasla daha etkili plak eliminasyonu sağlar. Diş ipi yalnızca düz yüzeylerde minimal ataşman kaybı olan vakalarda etkilidir.

---

### ÇİFT 75 (Benzerlik: 0.72)

**Soru 1 (ID: 6ea50a1b-bd8a-479c-8809-18f57ba706b7)**
Soru Kökü: İnatçı subgingival diş taşlarının ve ledgelerin (basamak) kırılmasında kullanılan, bıçağı gövdeye 99 derece eğimli olan ve dokuya zarar vermemek için diş yüzeyine iki noktadan temas ederek aktive edilmesi gereken periodontal el aleti aşağıdakilerden hangisidir?
Doğru Şık (B): Hoe kretuar
Açıklama: Hoe (çapa) kretuarlar tek bir kesici kenara sahip olup bıçağı gövdeyle 99 derece açı yapacak şekilde eğimlidir. Bu yapı, çok sert ve yapışık kalkulus bloklarının (ledge) altından girip kırmak için idealdir. Keskin köşelerinin kökü oymaması için diş yüzeyine hem bıçağın ucuyla hem de aletin boyun kısmıyla (iki noktadan) destek alarak kullanılması şarttır.

**Soru 2 (ID: 8ff9df76-25de-43be-84d6-fb6e2dadec60)**
Soru Kökü: Periodontal el aletlerinin yapısal özellikleri incelendiğinde, bıçak yüzeyinin her iki tarafında birbirine paralel iki kesici kenar bulunduran ve bıçağın alt yüzü gövdeye 90 derece açı yapan alet grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Colombia küretleri
Açıklama: Colombia küretleri üniversal küretlerin klasik bir örneğidir. Üniversal küretlerin bıçakları gövdeye 90 derece açı yapar ve aletin her iki kenarı da keskindir. Bölgeye özgü küretlerde (Gracey) ise bu açı 60-70 derecedir ve sadece alt (dış) kenar keskindir. Hoe kretuarlar ise 99 derecelik tek bir bıçak eğimine sahiptir.

---

### ÇİFT 76 (Benzerlik: 0.72)

**Soru 1 (ID: 12af318c-6378-44ed-91dd-9281c99ef3d3)**
Soru Kökü: Otuz beş yaşındaki kadın hastanın idame tedavisinde izole derin cepler tespit edilmiştir. Hekim, hastaya lokal tetrasiklin türevi bir ajan uygulamaya karar vermiştir. Ancak hasta, iş seyahati nedeniyle 10 gün sonraki kontrol randevusuna gelemeyeceğini belirtmiştir. Bu durumda hekimin, dişeti oluğu sıvısıyla temas edince katılaşan ve biyolojik olarak yıkıma uğradığı için ikinci bir seansta çıkarılması gerekmeyen doksisiklin içerikli hangi lokal sistemi tercih etmesi en uygundur?
Doğru Şık (A): Atridox
Açıklama: Atridox, doksisiklin içeren ve dişeti oluğu sıvısıyla temas ettiğinde katılaşarak yavaş salınım sağlayan rezorbe olabilir (biyoçözünür) bir jel sistemidir. Actisite (tetrasiklin fiber) biyolojik olarak inert olduğu için mekanik olarak çıkarılmayı gerektirir ve randevuya gelemeyecek hasta için kontrendikedir. Doksisiklin içerikli, kendi kendine çözünen doğru sistem Atridox'tur.

**Soru 2 (ID: 1a637660-d563-446f-a93c-484e79cc9554)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın kronik periodontitis tedavisi kapsamında uygulanan başlangıç tedavisi sonrası, mandibular sağ birinci molar dişin distalinde 6 mm'lik rezidüel cep saptanmıştır. Hekim bu bölgeye %2 oranında minosiklin hidroklorür içeren biyoçözünebilir mikroküre formunda lokal bir ajan uygulamaya karar vermiştir. Bu vakada tarif edilen kontrollü salım sistemi aşağıdakilerden hangisidir?
Doğru Şık (E): Arestin
Açıklama: Arestin (veya Periocline / Dentomycin), %2 minosiklin HCL içeren ve biyoçözünebilir mikroküre formunda cebe uygulanan sistemin ticari ismidir. Atridox doksisiklin içeren katılaşan bir jel formudur, Elyzol ise metronidazol süspansiyonudur. Soru kökünde spesifik olarak vurgulanan 'minosiklin HCL' ve 'mikroküre' bileşimi doğrudan Arestin preparatını tanımlamaktadır.

---

### ÇİFT 77 (Benzerlik: 0.72)

**Soru 1 (ID: 71d6e448-e016-40a3-8f46-40d4b0acca03)**
Soru Kökü: Periodontal tedavi sonrası idame fazında olan ve sadece 'yeni başlamış minimal doku yıkımı' tablosu sergileyen bir hastada arayüz temizliği için kullanılması en uygun araç grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Diş ipi veya kürdan
Açıklama: Yeni başlamış minimal yıkım durumlarında interdental alan hafifçe açılmıştır ve bu bölgeye diş ipi veya ağaç kürdan ile plak eliminasyonu yapılması uygundur. İleri derecede açılmış arayüzler için çeşitli boyutlarda arayüz fırçaları tercih edilmelidir. Tek kıl demetli fırçalar daha çok derin defektler ve furkasyonlar için saklanır.

**Soru 2 (ID: b3d0afd7-4afc-4605-b6a6-894b86f1a097)**
Soru Kökü: 22 yaşında kadın hasta rutin kontrol amacıyla kliniğe başvuruyor. Klinik ve radyografik muayenede herhangi bir ataşman kaybı, kemik yıkımı veya diastema saptanmıyor. Papillerin interdental aralığı tamamen doldurduğu bu hastada rutin proksimal temizlik için ilk tercih edilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (B): Diş ipi
Açıklama: Yıkım olmayan, interdental papilin aralığı tam doldurduğu ve temas noktalarının sıkı olduğu durumlarda en uygun interproksimal temizlik aracı diş ipidir. Arayüz fırçaları bu dar alanlara travma yaratmadan giremez. Superfloss köprü gövdelerinde, tek kıl demetli fırça ise furkasyon gibi izole alanlarda kullanılır.

---

### ÇİFT 78 (Benzerlik: 0.71)

**Soru 1 (ID: 01cdf9ab-c7a9-4bf7-9b60-0acc71fc5368)**
Soru Kökü: Alt sağ birinci molar dişin bukkal ve lingual yüzeylerinde lokalize 5 mm derinliğinde periodontal cepleri bulunan bir hastada, bu yüzeylerin subgingival debridmanı için aşağıdaki el aletlerinden hangisi spesifik olarak tasarlanmıştır?
Doğru Şık (E): Gracey 7-8
Açıklama: Gracey küret sistematiğinde posterior dişlerin (molar ve premolarlar) fasial (bukkal) ve oral (lingual/palatinal) düz yüzeylerinin temizliği için Gracey 7-8 ve 9-10 numaralı aletler kullanılır. 11-12 ve 15-16 mezyal yüzeyler, 13-14 ve 17-18 ise distal yüzeyler için spesifiktir.

**Soru 2 (ID: 554eaabc-7c7e-400a-96d9-618aac69edaa)**
Soru Kökü: Üst sol birinci büyük azı dişinin meziyopalatinal kök yüzeyinde saptanan rezidüel kalkulusun uzaklaştırılması amacıyla aşağıdaki Gracey küretlerinden hangisinin tercih edilmesi en idealdir?
Doğru Şık (A): Gracey 15-16
Açıklama: Molar dişlerin mezyal yüzeylerine ulaşmak için aşırı açılı gövdelere ihtiyaç vardır. Bu amaca hizmet eden Gracey küretleri 11-12 ve onun modern bir modifikasyonu olan, daha iyi adaptasyon sağlayan Gracey 15-16'dır. 13-14 ve 17-18 distal yüzeylere, 7-8 ise bukkal/lingual yüzeylere aittir.

---

### ÇİFT 79 (Benzerlik: 0.71)

**Soru 1 (ID: 1dd7b9e3-8be0-4e28-a58c-549c0ebcc5dd)**
Soru Kökü: 55 yaşında diyabetik bir erkek hastanın üst sağ kanin dişinin palatinal bölgesinde 7 mm derinliğinde dar bir periodontal cep tespit edilmiştir. Standart Gracey küretlerin boyun uzunluğu bu cep tabanına ulaşmada yetersiz kalmıştır. Bu durumda subgingival kök yüzeyi debridmanı için aşağıdaki alet modifikasyonlarından hangisinin kullanılması endikedir?
Doğru Şık (C): After Five küreti
Açıklama: Derin periodontal ceplere (5 mm ve üzeri) erişim sağlamak için standart Gracey küretlerin terminal boyun (shank) kısmı 3 mm uzatılarak 'After Five' (uzatılmış gövdeli) küretler geliştirilmiştir. Bu tasarım, alet sapının kurona çarpmasını engelleyerek bıçağın derin cep tabanına adaptasyonunu mümkün kılar.

**Soru 2 (ID: 556677a9-5027-4fc9-8ccb-37bc67536f51)**
Soru Kökü: Başlangıç periodontal tedavisi tamamlanmış ve destekleyici periodontal tedaviye alınmış hastanın alt ön bölgesinde, ataçman kaybı olmaksızın sıkı, fibrotik bir dişeti mevcuttur. Sondlamada subgingival alanda hafif bir pürüzlülük hissedilmiş olup bu bölgenin temizlenmesi planlanmaktadır. Dokuyu esnetmeden bu dar alana girebilmek için standart küretlere göre bıçağı %20 daha ince, 1 mm daha kısa ve bıçak açısı gövdeye 60 derece kaydırılmış alet aşağıdakilerden hangisidir?
Doğru Şık (D): Periodontal idame küreti
Açıklama: Periodontal İdame Küretleri, tedavisi bitmiş ancak dokuları fibrotik büzülme göstermiş sağlıklı/sıkı sulkuslara travma yaratmadan girmek için özel olarak dizayn edilmiştir. Standart aletlere göre %20 ince ve 1 mm kısa bıçakları vardır. Bıçağın gövdeye olan açısı klasik Gracey'lerde 70 dereceyken, idame küretlerinde bu açı 60 dereceye düşürülerek kapalı cebe giriş kolaylaştırılmıştır.

---

### ÇİFT 80 (Benzerlik: 0.71)

**Soru 1 (ID: 6eb3551c-a05a-4f86-ae99-99d0d70c10d3)**
Soru Kökü: Orak kretuarların derin subgingival ceplerde kullanımı kontrendikedir. Bu aletlerin subgingival bölgede periodontal dokulara travma yaratma riskinin yüksek olmasının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Kesitinin üçgen şeklinde olup tabanının çok geniş olması
Açıklama: Orak kretuarların en belirgin yapısal özelliği üçgen kesitli olmaları ve ucunun sivri bir noktada birleşmesidir. Üçgenin geniş tabanı alete sertlik sağlarken, bu geniş ve sivri yapı dar subgingival sulkusa girdiğinde hem yumuşak dokuyu yırtar hem de sivri ucu sement yüzeyini çizer. Küretlerin yuvarlak uçlu ve yarım ay kesitli tasarımı ise tam olarak bu travmayı engellemek üzere geliştirilmiştir.

**Soru 2 (ID: d32ad048-eb19-4f91-a4d9-459b6b7e09c3)**
Soru Kökü: Küretlerin derin subgingival alanlarda, periodontal cebin yumuşak doku duvarını zedelemeden kullanılabilmesini sağlayan temel morfolojik özelliği aşağıdakilerden hangisidir?
Doğru Şık (A): Yarım ay şeklinde kesite ve uca doğru yuvarlatılmış (toe) bir yapıya sahip olmaları
Açıklama: Küretlerin doku dostu olmasının sebebi, arka yüzeylerinin yarım ay şeklinde konveks olması ve ucunun (toe) küt/yuvarlak bırakılmasıdır. Bu sayede alet subgingival cebe itildiğinde yumuşak doku duvarında yırtılma veya delinme yapmadan cep tabanına kadar güvenle ilerleyebilir. Üçgen kesit orak kretuarlara aittir ve dokuya ciddi zarar verir.

---

### ÇİFT 81 (Benzerlik: 0.71)

**Soru 1 (ID: b3d0afd7-4afc-4605-b6a6-894b86f1a097)**
Soru Kökü: 22 yaşında kadın hasta rutin kontrol amacıyla kliniğe başvuruyor. Klinik ve radyografik muayenede herhangi bir ataşman kaybı, kemik yıkımı veya diastema saptanmıyor. Papillerin interdental aralığı tamamen doldurduğu bu hastada rutin proksimal temizlik için ilk tercih edilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (B): Diş ipi
Açıklama: Yıkım olmayan, interdental papilin aralığı tam doldurduğu ve temas noktalarının sıkı olduğu durumlarda en uygun interproksimal temizlik aracı diş ipidir. Arayüz fırçaları bu dar alanlara travma yaratmadan giremez. Superfloss köprü gövdelerinde, tek kıl demetli fırça ise furkasyon gibi izole alanlarda kullanılır.

**Soru 2 (ID: fd3155d0-4fdf-4e57-b287-0910dd27d26a)**
Soru Kökü: Aşağıdaki interdental bölge temizlik araçlarından hangisi, ortadan şiddetliye doğru ataçman yıkımı olan, geniş interproksimal aralıklara ve konkav kök yüzeylerine sahip alanlarda plağı elimine etmek için **en etkili** yöntemdir?
Doğru Şık (C): Arayüz fırçası
Açıklama: Ataçman kaybı sonucu açığa çıkmış, genişlemiş interdental alanlarda ve özellikle konkav kök yüzeylerinde (örn. premolar meziali) diş ipi yeterli temizliği sağlayamaz. Arayüz fırçaları, kıl yapısı sayesinde konkavitelerin içine girerek plağı etkin bir şekilde temizler.

---

### ÇİFT 82 (Benzerlik: 0.71)

**Soru 1 (ID: 4a8a1a43-bd3f-427e-9422-438cb43cdd31)**
Soru Kökü: Klinik periodontal muayenede cep derinliklerini ölçmek için kullanılan sondlardan, her 3 milimetrede bir (3, 6, 9, 12 mm) renk bandıyla işaretlenmiş kalibrasyona sahip olanı aşağıdakilerden hangisidir?
Doğru Şık (C): Marquis sondu
Açıklama: Marquis sondu 3-6-9-12 mm düzeninde, her 3 milimetrede renk değişen kalın şeritlere sahiptir. WHO sondu uç kısmında 0.5 mm top barındırır. Nabers sondu ise kavisli olup furkasyon muayenesinde kullanılır.

**Soru 2 (ID: fd28c108-7269-438c-b0d7-a752fa324b63)**
Soru Kökü: Aşağıdaki periodontal sondlardan hangisi, 3.5-5.5-8.5-11.5 mm şeklinde kalibre edilmiş olup ucunda doku travmasını önlemek ve subgingival eklenti tespitini kolaylaştırmak amacıyla küçük bir küre barındırır?
Doğru Şık (C): WHO sondu
Açıklama: WHO (Dünya Sağlık Örgütü) sondu, spesifik olarak CPITN (Toplum Periodontal Tedavi İhtiyacı İndeksi) taramaları için geliştirilmiş olup, 0.5 mm çapında küresel bir uca ve 3.5, 5.5, 8.5, 11.5 mm işaretlerine sahiptir. Bu küresel uç, ince ve enflamasyonlu dişeti cebinde perforasyonu engellerken aynı zamanda subgingival diştaşını pürüzlülük olarak hissetmeyi kolaylaştırır. UNC-15 sondu 15 mm'lik düz bir skala sunarken, Marquis sondu 3 mm'lik aralıklarla renk kodlarına sahiptir.

---

### ÇİFT 83 (Benzerlik: 0.71)

**Soru 1 (ID: 530d7d72-dfd2-4011-b87d-edcf1a545936)**
Soru Kökü: 17 yaşındaki kadın hasta ani başlayan şiddetli dişeti ağrısı, ağızda kötü koku ve dişetlerinde kanama şikayetiyle başvuruyor. Muayenede interdental papillerin tepesinde zımbalanmış gibi görünen, gri renkli bir pseudomembran ile örtülü krater benzeri lezyonlar saptanıyor. Sistemik muayenesinde hafif ateş ve lenfadenopati belirleniyor. Son zamanlarda üniversite sınavına hazırlandığını ve uyku düzeninin bozuk olduğunu belirtiyor.

Bu hastadaki en olası tanı ve bu tanıda ön planda yer alan bakteri grubu aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (D): Nekrotizan Gingivitis - Fusospiroketal kompleks
Açıklama: Genç hastada akut başlayan ağrı, zımbalanmış interdental papiller, gri pseudomembran, stres faktörü ve kötü ağız kokusu Nekrotizan Gingivitis (NG) için patognomoniktir. NG'nin mikrobiyal etiyolojisinde Spiroketler ve Fusobacterium türlerini içeren fusospiroketal kompleks ön plandadır.

**Soru 2 (ID: b917100f-2c83-4b8f-a3fb-51a89d526fe8)**
Soru Kökü: Kliniğe şiddetli ağrı, hafif ateş ve ağız kokusu şikayetiyle başvuran 20 yaşındaki bir hastanın ayırıcı tanısı yapılmaktadır. Hastanın lezyonlarının marjinal dişeti ile sınırlı olduğu, yanak mukozasında görülmediği ve ağrının son derece belirgin olduğu kaydedilmiştir. Buna göre bu hastada aşağıdaki tanılardan hangisinin düşünülmesi **en az olasıdır**?
Doğru Şık (A): Sifiliz ikinci aşama
Açıklama: Klinik senaryodaki lezyon çok şiddetli ağrılıdır ve sadece dişetinde yer almaktadır. İkinci aşama sifilizde ise ağızdaki lezyonlarda ağrı genellikle minimaldir ve marjinal dişetleri çok nadiren etkilenir. Bu klinik farklılık nedeniyle sifiliz bu tablo için en az düşünülecek tanıdır.

---

### ÇİFT 84 (Benzerlik: 0.71)

**Soru 1 (ID: b3d71956-e45a-4a16-b038-eda43a46ae86)**
Soru Kökü: Penisilin alerjisi hikayesi olan bir hastada tedaviye dirençli (refrakter) periodontitis gelişmiştir. Özellikle anaeroblara karşı etkili olan ve alveoler kemik dokusuna afinitesinin (tutunma ve birikme yeteneğinin) yüksek olması sayesinde çene kemiği enfeksiyonlarında başarı sağlayan farmakolojik ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Klindamisin
Açıklama: Klindamisin, linkozamid grubu bir antibiyotiktir ve kemik dokusuna olan güçlü afinitesi (nüfuz etme kabiliyeti) ile bilinir. Bu özellik, onu özellikle kemik yıkımıyla seyreden tedaviye dirençli periodontitis vakalarında penisilin alerjisi olanlar için birinci sınıf bir alternatif yapar. Metronidazolun kemik afinitesi bu derece spesifik vurgulanmaz, klindamisin kemik penetrasyonunda standarttır.

**Soru 2 (ID: edf8ca51-ccc2-474d-a1be-44d6b9470bfa)**
Soru Kökü: Yirmi iki yaşındaki sistemik olarak sağlıklı kadın hasta, dişlerinde yaygın mobilite ve dişeti kanaması şikayetiyle başvurmuştur. Klinik ve radyografik muayene sonucunda hastaya agresif periodontitis tanısı konulmuştur. Mekanik tedaviye ek olarak reçete edilecek makrolid grubu antibiyotiğin gram negatif basillere ve anaeroblara etkili olması hedeflenmektedir. Bu vakada destekleyici tedavi olarak kullanılması en uygun ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin
Açıklama: Azitromisin, gram negatif basiller ve anaeroblar üzerinde güçlü etkinliği sayesinde agresif periodontitiste mekanik tedaviye destek olarak önerilen temel makrolid derivesidir. Spiramisin gram pozitiflere etkilidir, eritromisin ise dişeti oluğu sıvısına yeterli konsantrasyonda penetre olamaz. Minosiklin agresif periodontitiste etkili bir tetrasiklin türevi olsa da soruda açıkça makrolid grubu bir ajan istenmesi nedeniyle doğru cevap azitromisindir.

---

### ÇİFT 85 (Benzerlik: 0.71)

**Soru 1 (ID: 5e8723a0-3746-489c-b0eb-c55f98e8e614)**
Soru Kökü: Makrolid grubu antibiyotiklerin periodontal hastalıklardaki klinik kullanımları ve özellikleri değerlendirildiğinde, aşağıda verilen farmakolojik profillerden hangisi **yanlıştır**?
Doğru Şık (A): Spiramisinin klinik ataşman kazancı ve enflamasyon kontrolü üzerine belirgin, yüksek düzeyde bir etkinliği vardır.
Açıklama: Spiramisin, tükürükte yüksek konsantrasyonlara ulaşmasına rağmen ataçman seviyeleri ve periodontal yıkımın geri kazanımı üzerinde 'minimal' etkinliğe sahiptir. Belirgin ve yüksek bir etkinlik gösterdiği ifadesi literatür verileriyle çelişmektedir. Azitromisin agresif vakalarda, gram negatif etkinliği sayesinde klinik olarak daha üstün bir iyileşme profili sunar.

**Soru 2 (ID: edf8ca51-ccc2-474d-a1be-44d6b9470bfa)**
Soru Kökü: Yirmi iki yaşındaki sistemik olarak sağlıklı kadın hasta, dişlerinde yaygın mobilite ve dişeti kanaması şikayetiyle başvurmuştur. Klinik ve radyografik muayene sonucunda hastaya agresif periodontitis tanısı konulmuştur. Mekanik tedaviye ek olarak reçete edilecek makrolid grubu antibiyotiğin gram negatif basillere ve anaeroblara etkili olması hedeflenmektedir. Bu vakada destekleyici tedavi olarak kullanılması en uygun ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin
Açıklama: Azitromisin, gram negatif basiller ve anaeroblar üzerinde güçlü etkinliği sayesinde agresif periodontitiste mekanik tedaviye destek olarak önerilen temel makrolid derivesidir. Spiramisin gram pozitiflere etkilidir, eritromisin ise dişeti oluğu sıvısına yeterli konsantrasyonda penetre olamaz. Minosiklin agresif periodontitiste etkili bir tetrasiklin türevi olsa da soruda açıkça makrolid grubu bir ajan istenmesi nedeniyle doğru cevap azitromisindir.

---

### ÇİFT 86 (Benzerlik: 0.71)

**Soru 1 (ID: 5603ae04-61bc-43a1-a84d-32e6e96cfbc5)**
Soru Kökü: Periodontal apse ile periapikal (endodontik) apseyi ayırıcı tanıda değerlendirirken, lezyonun periodontal kaynaklı olduğunu düşündüren **en güçlü** klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Etkilenen dişte pulpa vitalite testlerine pozitif (canlı) yanıt alınması
Açıklama: Periodontal apsede dişin pulpası genellikle canlıdır (vitaldir) ve pulpa testlerine pozitif yanıt verir. Periapikal apsede ise diş devitaldir. Şiddetli spontan ağrı ve derin çürük endodontik patolojiyi işaret eder.

**Soru 2 (ID: e733ad6a-8669-44be-b058-c08da09cc37e)**
Soru Kökü: Gingival apseler ile periodontal apseler karşılaştırıldığında, aşağıdakilerden hangisi periodontal apsenin karakteristik bir bulgusudur?
Doğru Şık (C): Sondalamada var olan derin bir periodontal cebin saptanması
Açıklama: Periodontal apse mevcut bir periodontal cebin alevlenmesi sonucu oluşur, bu nedenle lateral kemik kaybı ve derin periodontal cep ile birliktedir. Gingival apse ise genellikle önceden cep olmayan sağlıklı bir dişetinde (genellikle yabancı cisim batmasına bağlı) gelişir ve kemik kaybı veya derin cep saptanmaz.

---

### ÇİFT 87 (Benzerlik: 0.71)

**Soru 1 (ID: 2151ce10-ec3a-4f37-af86-f5b4928007c2)**
Soru Kökü: Aşağıdakilerden hangisi akut periodontal apse tedavisinde sistemik antibiyotik kullanım endikasyonlarından biri **değildir**?
Doğru Şık (C): Lezyonun sadece lokalize bir şişlikle sınırlı olması
Açıklama: Akut periodontal apse tedavisinde selülit, ateş, rejyonel lenfadenopati, bozulmuş immünite veya apsenin lokalize edilemeyip yeterli drenajın sağlanamayacağı durumlarda sistemik antibiyotik endikedir. Sadece lokalize ve kolay drene edilebilen komplike olmayan bir apse varlığında lokal drenaj ve debridman yeterlidir, sistemik antibiyotik gerekmez.

**Soru 2 (ID: 9cf46ea8-a387-4d83-a429-586e90c1df73)**
Soru Kökü: Akut perikoronitis tablosu ile başvuran bir hastada enfeksiyonun akut semptomlarının kontrol altına alınması için uygulanan semptomatik tedavi yaklaşımlarından biri **değildir**?
Doğru Şık (E): İlgili yirmi yaş dişinin derhal çekilmesi
Açıklama: Akut perikoronitiste öncelikli amaç drenaj, antibiyotik/antiseptik kullanımı ve okluzal travmanın kaldırılması ile akut inflamasyonun yatıştırılmasıdır. Enfeksiyonun derin dokulara yayılmasını (selülit vb.) önlemek amacıyla, ilgili dişin cerrahi çekimi veya flep cerrahisi operasyonları akut semptomlar geçene kadar ertelenmelidir.

---

### ÇİFT 88 (Benzerlik: 0.70)

**Soru 1 (ID: 44c3dbf9-a73a-4bad-874e-0cbbf68022b3)**
Soru Kökü: Orta şiddette periodontal ataşman yıkımı bulunan, papillerin tamamen çekildiği ve interdental alanların genişlediği bir vakada supragingival plak kontrolü için öncelikli olarak önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (D): Çeşitli boyuttaki arayüz fırçaları
Açıklama: Orta şiddette yıkım varlığında interproksimal boşluğa uyan en geniş araç en iyi temizliği sağlar prensibiyle çeşitli boyuttaki arayüz fırçaları tercih edilir. Diş ipi veya kürdan bu geniş alanlarda yetersiz kalır. İplik geçiriciler ortodontik braketler veya köprü altı temizliğinde görev alır.

**Soru 2 (ID: a1717538-4d59-400d-8252-c1809fc0aa03)**
Soru Kökü: 35 yaşında erkek hasta, üst çene posterior bölgesindeki 3 üyeli sabit köprü protezinin gövde altı temizliğini yapamadığından şikayetçidir. Bu hastaya köprü gövdesi altında etkin plak kontrolü için önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (A): Superfloss veya iplik geçirici
Açıklama: Sabit köprü protezlerinin gövdeleri altında plak kontrolünü sağlamak için özel olarak tasarlanmış süngerimsi kısmı bulunan Superfloss veya iplik geçiriciler kullanılır. Standart diş ipi köprü altından geçirilemez, kürdan ise bu bölgeye uygun formu sağlayamaz. Tek kıl demetli fırçalar sadece protez kenarlarına ulaşabilir, gövde altını süpüremez.

---

### ÇİFT 89 (Benzerlik: 0.70)

**Soru 1 (ID: 7bad4b81-76de-419f-8abf-227d490f3b8f)**
Soru Kökü: Fırça başının oblik yönde ve kıl uçlarının okluzal/insizal kenara bakacak şekilde yerleştirildiği, hafif basınçla kıl uçlarının interdental aralığa girmesini sağlayan, özellikle interdental papillerin kaybolduğu dişeti çekilmesi vakalarında etkili olan fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (D): Charter tekniği
Açıklama: Charter tekniğinde fırça kılları diğer yöntemlerin aksine apikale değil, okluzal veya insizal kenara doğru 45 derece açıyla konumlandırılır. Bu pozisyon, papil kaybı olan genişlemiş interdental alanların ve açık ambraşürlerin temizliğinde maksimum adaptasyon sağlar.

**Soru 2 (ID: adaa9c71-3c53-4f41-8669-0eac45c49737)**
Soru Kökü: Mekanik plak kontrolü sırasında dişler kapalı pozisyondayken fırçanın yanak içine yerleştirilerek üst dişetinden alt dişetine dairesel (sirküler) hareketlerle uygulandığı fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (C): Fones metodu
Açıklama: Fones metodu (sirküler fırçalama), dişler oklüzyondayken fırçanın yanak içine yerleştirilip dairesel hareketlerle hem üst hem alt arklardaki plakların uzaklaştırılmasını hedefler. Leonard metodunda diş yüzeyine dik yerleştirilen fırça vertikal (yukarı-aşağı) hareket ettirilir.

---

### ÇİFT 90 (Benzerlik: 0.70)

**Soru 1 (ID: 5d67e99e-7f82-47ca-ad8b-0064b8879fa1)**
Soru Kökü: Sığ ceplere sahip bir idame hastasında rutin diş taşı temizliği yapılması planlanmaktadır. Ancak hekimin supragingival bölgedeki yoğun ve sert kalkulus köprülerini parçalaması, ardından subgingival alanlardaki ince rezidüel depozitleri kök sementine zarar vermeden pürüzsüzleştirmesi gerekmektedir. Bu işlemi optimal şekilde gerçekleştirmek için kullanılacak el aleti sırası aşağıdakilerin hangisinde en doğru verilmiştir?
Doğru Şık (E): Önce Orak kretuar ile ağır supragingival blokların kırılması, sonra Gracey küret ile subgingival sementin pürüzsüzleştirilmesi
Açıklama: Periodontal alet kullanımının altın standart dizilimi her zaman kaba ve güçlü aletten ince ve doku dostu alete doğru ilerlemektir. Orak kretuarlar sert ve kalın yapılarıyla kron üzerindeki ağır diştaşı köprülerini hızla kırar. Ancak subgingival yüzeye girmeleri sakıncalı olduğundan, kalan kök yüzeyindeki işlemler mutlaka Gracey veya Üniversal küretlerin yuvarlak/esnek yapısıyla tamamlanmalıdır.

**Soru 2 (ID: 69f6ffe2-f6ac-45f4-89b5-7bc7d9124d22)**
Soru Kökü: Diş taşı temizliği ve kök yüzeyi düzleştirmesi işleminin ardından, subgingival alanda kalan ince kalkulus adacıklarının ve kök yüzeyi pürüzlülüğünün teşhis edilmesinde aşağıdakilerden hangisinin kullanılması **en az** travmatik ve en etkilidir?
Doğru Şık (A): Explorerlar
Açıklama: Explorerlar, oldukça ince ve esnek tel uçlara sahip teşhis aletleri oldukları için, kök yüzeyindeki mikroskobik pürüzleri ve rezidüel diştaşlarını dokunsal (taktil) hassasiyetle hekime iletirler. Orak kretuarlar veya küretler kesici ve nispeten kalın aletler olduklarından, salt teşhis amacıyla sulkus içine sokulmaları hem yumuşak dokuyu zedeler hem de kök sementinde istenmeyen çiziklere yol açabilir. Bu nedenle debridman sonrası kontrol aşamasında sadece explorerlar veya periodontal sondlar ile yüzey taraması yapılmalıdır.

---

### ÇİFT 91 (Benzerlik: 0.70)

**Soru 1 (ID: 2df53ee5-e3f5-4c3c-a983-d131ddf08cd9)**
Soru Kökü: Aşağıdaki antibiyotiklerden hangisi, kemik dokusuna güçlü afinitesi olması ve tetrasiklinlere dirençli refrakter periodontitis vakalarında etkili olması nedeniyle periodontal tedavide tercih edilebilir?
Doğru Şık (C): Klindamisin
Açıklama: Klindamisin, anaeroblara karşı etkili bakteriyostatik bir antibiyotiktir. Kemik dokusuna yüksek penetrasyonu vardır ve özellikle tetrasiklin veya penisilin türevlerine dirençli refrakter periodontitis vakalarında etkili bir alternatiftir. En önemli yan etkisi pseudomembranöz kolittir.

**Soru 2 (ID: d870cb12-298f-43bc-b916-8e2b53c4831e)**
Soru Kökü: Makrolid grubu antibiyotiklerin farmakokinetik özellikleri incelendiğinde, periodontal hastalıkların sistemik tedavisinde kullanıldığında özellikle tükürükte yüksek konsantrasyona ulaşmasıyla bilinen ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Spiramisin
Açıklama: Spiramisin, gram pozitif bakterilere karşı etkili olan ve özellikle tükürükte yüksek konsantrasyonlara ulaşabilen bir makrolid grubu antibiyotiktir. En güçlü çeldirici olan azitromisin agresif periodontitiste tercih edilirken, eritromisin dişeti oluğu sıvısına geçemediği için periodontal tedavide kullanılmaz. Diğer ajanlardan farklı olarak spiramisinin ataçman kazancına etkisi minimaldir ancak tükürük akışındaki yüksek biyoyararlanımı bu ilacın spesifik farmakokinetik markörüdür.

---

### ÇİFT 92 (Benzerlik: 0.70)

**Soru 1 (ID: a1bc0ee9-f650-422a-a379-3075278eea26)**
Soru Kökü: Periodontal hastalığın tedavisinde kullanılan antimikrobiyal ajanlardan olan Metronidazol ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Agregatibacter actinomycetemcomitans'a (Aa) karşı tek başına kullanıldığında yüksek etkinliğe sahiptir.
Açıklama: Metronidazol obligat anaeroblara etkilidir, ancak fakültatif bir bakteri olan Aa'ya karşı tek başına etkili değildir. Agresif periodontitis vakalarında Aa hedefleniyorsa genellikle amoksisilin gibi bir başka antibiyotik ile kombine edilerek kullanılır.

**Soru 2 (ID: fbcb23dd-7a6e-47dc-b6e0-6a51f1d03ad4)**
Soru Kökü: Periodontal mikrobiyal florada özellikle *Aggregatibacter actinomycetemcomitans* (Aa) üzerinde güçlü bakterisid etkiye sahip olan, mikst enfeksiyonların eliminasyonunu sağlamak amacıyla sıklıkla Metronidazol ile kombine edilen kinolon (florokinolon) grubu antibiyotik aşağıdakilerden hangisidir?
Doğru Şık (C): Siprofloksasin
Açıklama: Siprofloksasin, Gram (-) fakültatif bakteriler ve özellikle agresif periodontitisin baş aktörü olan Aa üzerinde son derece etkili olan sentetik bir florokinolon antibiyotiktir. Kendi başına anaeroblara zayıf etkili olduğundan, anaerob floraya hükmeden metronidazol ile kombinasyonu mikst periodontal enfeksiyonlarda çok başarılı bir sinerjistik etki gösterir.

---

### ÇİFT 93 (Benzerlik: 0.70)

**Soru 1 (ID: 3b391083-c16d-4e48-8051-2b4aa03fabeb)**
Soru Kökü: Otuz yaşında bir hastada şiddetli kronik periodontitis tedavisi amacıyla altı ay boyunca düşük dozlarda bir antibiyotik kullanılmış, ancak tedavi bitiminde hastanın ağız içindeki hali hazırda sürmüş durumdaki erişkin dişlerinde ve marjinal dişetlerinde mavimsi/gri kalıcı bir renklenme tablosu oluşmuştur. Diş oluşumu çoktan tamamlanmış erişkinlerde bu tarz bir renklemeye spesifik olarak yol açan farmakolojik ajan aşağıdakilerden hangisidir?
Doğru Şık (D): Minosiklin
Açıklama: Normal tetrasiklinlerin en meşhur yan etkisi diş gelişim döneminde (çocuklarda) kalsifikasyonu bozarak renklenme yapmasıdır ve erişkinlerde sürmüş dişi boyamaz. Ancak Minosiklin, yapısındaki farklılık sayesinde oral yolla kullanıldığında diş gelişimi çoktan tamamlanmış erişkinlerin sürmüş dişleri ve alveol kemiği/dişetleri üzerinde kalıcı mavi-gri (bluish-gray) hiperpigmentasyona neden olabilen yegane tetrasiklin grubudur.

**Soru 2 (ID: edf8ca51-ccc2-474d-a1be-44d6b9470bfa)**
Soru Kökü: Yirmi iki yaşındaki sistemik olarak sağlıklı kadın hasta, dişlerinde yaygın mobilite ve dişeti kanaması şikayetiyle başvurmuştur. Klinik ve radyografik muayene sonucunda hastaya agresif periodontitis tanısı konulmuştur. Mekanik tedaviye ek olarak reçete edilecek makrolid grubu antibiyotiğin gram negatif basillere ve anaeroblara etkili olması hedeflenmektedir. Bu vakada destekleyici tedavi olarak kullanılması en uygun ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin
Açıklama: Azitromisin, gram negatif basiller ve anaeroblar üzerinde güçlü etkinliği sayesinde agresif periodontitiste mekanik tedaviye destek olarak önerilen temel makrolid derivesidir. Spiramisin gram pozitiflere etkilidir, eritromisin ise dişeti oluğu sıvısına yeterli konsantrasyonda penetre olamaz. Minosiklin agresif periodontitiste etkili bir tetrasiklin türevi olsa da soruda açıkça makrolid grubu bir ajan istenmesi nedeniyle doğru cevap azitromisindir.

---

### ÇİFT 94 (Benzerlik: 0.70)

**Soru 1 (ID: 2df53ee5-e3f5-4c3c-a983-d131ddf08cd9)**
Soru Kökü: Aşağıdaki antibiyotiklerden hangisi, kemik dokusuna güçlü afinitesi olması ve tetrasiklinlere dirençli refrakter periodontitis vakalarında etkili olması nedeniyle periodontal tedavide tercih edilebilir?
Doğru Şık (C): Klindamisin
Açıklama: Klindamisin, anaeroblara karşı etkili bakteriyostatik bir antibiyotiktir. Kemik dokusuna yüksek penetrasyonu vardır ve özellikle tetrasiklin veya penisilin türevlerine dirençli refrakter periodontitis vakalarında etkili bir alternatiftir. En önemli yan etkisi pseudomembranöz kolittir.

**Soru 2 (ID: edf8ca51-ccc2-474d-a1be-44d6b9470bfa)**
Soru Kökü: Yirmi iki yaşındaki sistemik olarak sağlıklı kadın hasta, dişlerinde yaygın mobilite ve dişeti kanaması şikayetiyle başvurmuştur. Klinik ve radyografik muayene sonucunda hastaya agresif periodontitis tanısı konulmuştur. Mekanik tedaviye ek olarak reçete edilecek makrolid grubu antibiyotiğin gram negatif basillere ve anaeroblara etkili olması hedeflenmektedir. Bu vakada destekleyici tedavi olarak kullanılması en uygun ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin
Açıklama: Azitromisin, gram negatif basiller ve anaeroblar üzerinde güçlü etkinliği sayesinde agresif periodontitiste mekanik tedaviye destek olarak önerilen temel makrolid derivesidir. Spiramisin gram pozitiflere etkilidir, eritromisin ise dişeti oluğu sıvısına yeterli konsantrasyonda penetre olamaz. Minosiklin agresif periodontitiste etkili bir tetrasiklin türevi olsa da soruda açıkça makrolid grubu bir ajan istenmesi nedeniyle doğru cevap azitromisindir.

---

### ÇİFT 95 (Benzerlik: 0.70)

**Soru 1 (ID: 5e646592-17f8-4131-9202-5fa0539a0184)**
Soru Kökü: Elli beş yaşındaki erkek hastanın yapılan periodontal cerrahisi sonrasında interdental papillerinde belirgin doku kaybı ve dişeti çekilmesi oluşmuştur. Hasta arayüzlerin fırça ile temizliğinde zorluk yaşadığını belirtmektedir. Bu hastaya mekanik temizlik etkinliğini artırmak için önerilecek en uygun fırçalama tekniği aşağıdakilerden hangisidir?
Doğru Şık (D): Charter tekniği
Açıklama: Charter tekniği, fırça kıllarının okluzale dönük yerleştirilmesi ve içeri doğru hafif basınçla esnetilmesi prensibine dayanır; bu hareket özellikle çekilmeye bağlı açılmış interproksimal boşlukların ve papil kayıplarının olduğu alanlara fırça kıllarının penetrasyonunu maksimize eder. Leonard veya Fones metodları bu tür spesifik morfolojik yıkım alanları için yetersizdir.

**Soru 2 (ID: 8dc42b1b-a5d0-436e-a3ed-64112be1577b)**
Soru Kökü: Aşağıdaki diş fırçalama tekniklerinden hangisinde, fırça kılları sulkus içerisine 45 derecelik açı yapacak şekilde yerleştirildikten sonra, fırçaya horizontal yönde ileri-geri kısa vibrasyon hareketleri yaptırılarak dişeti kenarının altındaki alanın temizlenmesi hedeflenir?
Doğru Şık (B): Bass Tekniği
Açıklama: Bass tekniği, sulkus temizliği odaklıdır ve fırça kılları apekse doğru 45 derece açı ile sulkusa yerleştirilerek kısa vibrasyon hareketleri ile uygulanır. Modifiye Stillman tekniğinde fırça kıllarının bir kısmı yapışık diş eti üzerinde konumlanır ve fırçaya vibrasyon verilerek koronal yönde çekilir; Charter tekniğinde ise fırça kılları oklüzal yöne dönüktür.

---

### ÇİFT 96 (Benzerlik: 0.70)

**Soru 1 (ID: 01de8ac8-0197-436e-a9dc-3bfb6833b763)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, marjinal dişetinde aniden ortaya çıkan lokalize bir şişlik şikayetiyle başvuruyor. Klinik muayenede ilgili dişte çürük olmadığı, pulpanın canlı olduğu ve periodontal cep derinliğinin normal (sığ) olduğu tespit ediliyor. Radyografik incelemede herhangi bir kemik yıkımı izlenmiyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Gingival apse
Açıklama: Gingival apse; dişte çürük olmayan, pulpanın canlı kaldığı, periodontal cebin ve radyografik kemik kaybının bulunmadığı, sadece marjinal dişeti veya interdental papili ilgilendiren akut inflamatuar bir tablodur. Periodontal apsede derin bir cep varlığı şarttır, periapikal apsede ise diş devitaldir.

**Soru 2 (ID: ce699f1d-5cc6-48d9-a6fa-26262375edc7)**
Soru Kökü: Klinik muayenede dişi canlı, yüzeyinde çürük bulunmayan ve sondlamada periodontal cebi olmayan bir hastanın radyografisinde dişin kök yüzeyinde lateral yerleşimli bir radyolusensi saptanmıştır. Bu klinik ve radyografik bulgularla en uyumlu lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Periodontal kist
Açıklama: Periodontal kist klinik olarak periodontal cep vermez, diş canlıdır ve çürük bulunmaz ancak radyografide kök yüzeyine komşu lateral bir radyolusensi olarak kendini gösterir. Periodontal apsede cep formasyonu belirginken, gingival apsede radyografik bulgu saptanmaz.

---

### ÇİFT 97 (Benzerlik: 0.70)

**Soru 1 (ID: 44c3dbf9-a73a-4bad-874e-0cbbf68022b3)**
Soru Kökü: Orta şiddette periodontal ataşman yıkımı bulunan, papillerin tamamen çekildiği ve interdental alanların genişlediği bir vakada supragingival plak kontrolü için öncelikli olarak önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (D): Çeşitli boyuttaki arayüz fırçaları
Açıklama: Orta şiddette yıkım varlığında interproksimal boşluğa uyan en geniş araç en iyi temizliği sağlar prensibiyle çeşitli boyuttaki arayüz fırçaları tercih edilir. Diş ipi veya kürdan bu geniş alanlarda yetersiz kalır. İplik geçiriciler ortodontik braketler veya köprü altı temizliğinde görev alır.

**Soru 2 (ID: 5d67e99e-7f82-47ca-ad8b-0064b8879fa1)**
Soru Kökü: Sığ ceplere sahip bir idame hastasında rutin diş taşı temizliği yapılması planlanmaktadır. Ancak hekimin supragingival bölgedeki yoğun ve sert kalkulus köprülerini parçalaması, ardından subgingival alanlardaki ince rezidüel depozitleri kök sementine zarar vermeden pürüzsüzleştirmesi gerekmektedir. Bu işlemi optimal şekilde gerçekleştirmek için kullanılacak el aleti sırası aşağıdakilerin hangisinde en doğru verilmiştir?
Doğru Şık (E): Önce Orak kretuar ile ağır supragingival blokların kırılması, sonra Gracey küret ile subgingival sementin pürüzsüzleştirilmesi
Açıklama: Periodontal alet kullanımının altın standart dizilimi her zaman kaba ve güçlü aletten ince ve doku dostu alete doğru ilerlemektir. Orak kretuarlar sert ve kalın yapılarıyla kron üzerindeki ağır diştaşı köprülerini hızla kırar. Ancak subgingival yüzeye girmeleri sakıncalı olduğundan, kalan kök yüzeyindeki işlemler mutlaka Gracey veya Üniversal küretlerin yuvarlak/esnek yapısıyla tamamlanmalıdır.

---

### ÇİFT 98 (Benzerlik: 0.70)

**Soru 1 (ID: 0e7b585a-7da8-4184-b040-4bb15cb2b754)**
Soru Kökü: 30 yaşında kadın hasta, sürekli yanak ve dudak mukozasında aftöz ülserler gelişmesi, epitelde dökülme ve yanma hissi şikayetiyle başvuruyor. Anamnezinde yakın zamanda piyasadaki beyazlatıcı etkili güçlü köpüren bir diş macununa geçtiği öğreniliyor. Bu klinik tabloya yol açması en olası macun bileşeni aşağıdakilerden hangisidir?
Doğru Şık (C): Sodyum lauril sülfat
Açıklama: Sodyum lauril sülfat (SLS), güçlü bir köpürtücü (deterjan) ajandır. Ancak epitel hücre zarını yıkarak mukozada deskuamasyona, yanma hissine ve aşırı duyarlılığı olan bireylerde aftöz ülserasyonların tetiklenmesine neden olabilir. Bu vakalarda SLS içermeyen macunlar önerilir.

**Soru 2 (ID: 2f7091a0-d353-4234-a8e0-167f844b1421)**
Soru Kökü: Diş macunlarının içeriğinde bulunan ve köpürerek yüzey aktif özellik gösteren sodyum lauril sülfatın (SLS), hassas bireylerde sebep olduğu en belirgin yan etki aşağıdakilerden hangisidir?
Doğru Şık (B): Ağız mukozasında deskuamasyon ve aftöz ülserasyonlara neden olması
Açıklama: Sodyum lauril sülfat (SLS), diş macunlarında kullanılan bir deterjandır. Bazı bireylerde ağız mukozasında deskuamasyon, aftöz ülser oluşumu (rekürrent aftöz stomatit tetiklemesi) ve yanma hissi gibi aşırı duyarlılık reaksiyonlarına neden olabilir.

---

### ÇİFT 99 (Benzerlik: 0.70)

**Soru 1 (ID: 97e2c0f6-6d4e-4a6b-b597-5ab2c2fe8d81)**
Soru Kökü: Makrolid grubu antibiyotiklerin periodontal enfeksiyonlarda kullanımıyla ilgili olarak, aşağıdakilerden hangisi dişeti oluğu sıvısına (DOS) konsantre **olamaması** nedeniyle günümüzde periodontal tedavide hiçbir şekilde tercih edilmemektedir?
Doğru Şık (E): Eritromisin
Açıklama: Periodontal enfeksiyonların sistemik tedavisinde ilacın başarı kriterlerinden biri kandan dişeti oluğu sıvısına (DOS) geçebilme yeteneğidir. Eritromisin, yapısı gereği DOS'a yeterli konsantrasyonda penetre olamaz, bu nedenle periodontal cebin tabanındaki bakterilere ulaşamaz ve periodontolojide kullanılmaz. Makrolidlerden azitromisin ve spiramisin ise dokularda mükemmel konsantre oldukları için etkin olarak kullanılırlar.

**Soru 2 (ID: edf8ca51-ccc2-474d-a1be-44d6b9470bfa)**
Soru Kökü: Yirmi iki yaşındaki sistemik olarak sağlıklı kadın hasta, dişlerinde yaygın mobilite ve dişeti kanaması şikayetiyle başvurmuştur. Klinik ve radyografik muayene sonucunda hastaya agresif periodontitis tanısı konulmuştur. Mekanik tedaviye ek olarak reçete edilecek makrolid grubu antibiyotiğin gram negatif basillere ve anaeroblara etkili olması hedeflenmektedir. Bu vakada destekleyici tedavi olarak kullanılması en uygun ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin
Açıklama: Azitromisin, gram negatif basiller ve anaeroblar üzerinde güçlü etkinliği sayesinde agresif periodontitiste mekanik tedaviye destek olarak önerilen temel makrolid derivesidir. Spiramisin gram pozitiflere etkilidir, eritromisin ise dişeti oluğu sıvısına yeterli konsantrasyonda penetre olamaz. Minosiklin agresif periodontitiste etkili bir tetrasiklin türevi olsa da soruda açıkça makrolid grubu bir ajan istenmesi nedeniyle doğru cevap azitromisindir.

---

### ÇİFT 100 (Benzerlik: 0.70)

**Soru 1 (ID: 1dd7b9e3-8be0-4e28-a58c-549c0ebcc5dd)**
Soru Kökü: 55 yaşında diyabetik bir erkek hastanın üst sağ kanin dişinin palatinal bölgesinde 7 mm derinliğinde dar bir periodontal cep tespit edilmiştir. Standart Gracey küretlerin boyun uzunluğu bu cep tabanına ulaşmada yetersiz kalmıştır. Bu durumda subgingival kök yüzeyi debridmanı için aşağıdaki alet modifikasyonlarından hangisinin kullanılması endikedir?
Doğru Şık (C): After Five küreti
Açıklama: Derin periodontal ceplere (5 mm ve üzeri) erişim sağlamak için standart Gracey küretlerin terminal boyun (shank) kısmı 3 mm uzatılarak 'After Five' (uzatılmış gövdeli) küretler geliştirilmiştir. Bu tasarım, alet sapının kurona çarpmasını engelleyerek bıçağın derin cep tabanına adaptasyonunu mümkün kılar.

**Soru 2 (ID: 4246cf91-0263-40a0-9d29-a2ac2320fc65)**
Soru Kökü: Dar ve derin periodontal ceplere, furkasyon bölgelerine ve gelişimsel kök oluklarına uyum sağlamak üzere tasarlanmış, boyun kısmı Standart Gracey küretlere göre 3 mm daha uzun, ancak bıçak uzunluğu %50 daha kısa olan alet grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Mini Bladed (Mini Five) Küretler
Açıklama: Mini Bladed (Mini Five) küretler, After Five küretlerin bir modifikasyonudur; After Five'lar gibi 3 mm uzatılmış bir gövdeye sahiptirler, ancak çalışma uçları (bıçakları) standart küretlerin yarısı uzunluğundadır. Bu kısa bıçak, dar ceplere ve kök konkavitelerine üstün bir adaptasyon sağlar.

---

### ÇİFT 101 (Benzerlik: 0.70)

**Soru 1 (ID: 8ca0591e-aee9-47a6-a8af-9bf0e214f6ad)**
Soru Kökü: 50 yaşında mandibular molar dişinde sınıf II furkasyon defekti ve lingual yüzeyde izole derin dişeti çekilmesi saptanan bir hastada, bu spesifik alanların plak kontrolü için hangi aracın kullanımı **en uygundur**?
Doğru Şık (E): Tek kıl demetli fırça
Açıklama: Tek kıl demetli fırçalar; furkasyon bölgeleri, izole derin dişeti çekilmesi alanları ve mandibular molarların linguali gibi ulaşılması zor bölgelerin spesifik temizliğinde kullanılır. Standart fırçalar ve diş ipi bu anatomik düzensizliklere adapte olamaz. Kürdan ise kök yüzeyini temizlemede yetersiz kalır.

**Soru 2 (ID: a1717538-4d59-400d-8252-c1809fc0aa03)**
Soru Kökü: 35 yaşında erkek hasta, üst çene posterior bölgesindeki 3 üyeli sabit köprü protezinin gövde altı temizliğini yapamadığından şikayetçidir. Bu hastaya köprü gövdesi altında etkin plak kontrolü için önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (A): Superfloss veya iplik geçirici
Açıklama: Sabit köprü protezlerinin gövdeleri altında plak kontrolünü sağlamak için özel olarak tasarlanmış süngerimsi kısmı bulunan Superfloss veya iplik geçiriciler kullanılır. Standart diş ipi köprü altından geçirilemez, kürdan ise bu bölgeye uygun formu sağlayamaz. Tek kıl demetli fırçalar sadece protez kenarlarına ulaşabilir, gövde altını süpüremez.

---

### ÇİFT 102 (Benzerlik: 0.70)

**Soru 1 (ID: 993fc1ae-c882-4d15-b9cd-2b751407e0ac)**
Soru Kökü: Subgingival bölgeye uygulandığında %2 oranında minosiklin hidroklorür salınımı yapan biyoçözünebilir mikroküre sistemi (Arestin), temel olarak patojen bakterilerde aşağıdaki mekanizmalardan hangisini bloke ederek antimikrobiyal etki gösterir?
Doğru Şık (D): Ribozomların 30S alt ünitesine bağlanıp aminoasit t-RNA'nın hedefe tutunmasını ve protein sentezini inhibe ederek
Açıklama: Minosiklin, bir tetrasiklin türevidir. Tetrasiklinlerin evrensel etki mekanizması, bakteri ribozomlarının 30S alt ünitesine geri dönüşümlü olarak bağlanarak aminoaçil t-RNA'nın ribozoma girişini bloke etmesi ve böylece protein sentezini inhibe etmesidir. Hücre duvarını yıkma penisilinlerin, DNA giraz inhibisyonu florokinolonların mekanizmasıdır. Arestin preparatı minosiklin içerdiği için lokal düzeyde ribozomal protein sentezini durdurur.

**Soru 2 (ID: fb44bb12-5a6d-4e1c-893f-26fc1726c850)**
Soru Kökü: Agresif periodontitis tedavisinde sıkça kullanılan tetrasiklin grubu antibiyotiklerin bakteriyostatik antimikrobiyal etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Bakteri ribozomlarının 30S alt ünitesine bağlanarak aminoasit t-RNA'nın bağlanmasını bloke etmek
Açıklama: Tetrasiklinler, bakteri hücresine girdikten sonra ribozomların 30S alt ünitesine spesifik olarak bağlanırlar. Bu bağlanma, aminoaçil-tRNA'nın ribozomdaki A-bölgesine girişini bloke ederek polipeptid zincirinin uzamasını ve nihayetinde protein sentezini engeller. Hücre duvarı sentezi inhibitörü olan ilaçlar penisilinlerdir; DNA girazı inhibe edenler ise kinolonlardır.

---

### ÇİFT 103 (Benzerlik: 0.70)

**Soru 1 (ID: 4a8a1a43-bd3f-427e-9422-438cb43cdd31)**
Soru Kökü: Klinik periodontal muayenede cep derinliklerini ölçmek için kullanılan sondlardan, her 3 milimetrede bir (3, 6, 9, 12 mm) renk bandıyla işaretlenmiş kalibrasyona sahip olanı aşağıdakilerden hangisidir?
Doğru Şık (C): Marquis sondu
Açıklama: Marquis sondu 3-6-9-12 mm düzeninde, her 3 milimetrede renk değişen kalın şeritlere sahiptir. WHO sondu uç kısmında 0.5 mm top barındırır. Nabers sondu ise kavisli olup furkasyon muayenesinde kullanılır.

**Soru 2 (ID: b3713656-53e4-414d-a416-ed88fbced921)**
Soru Kökü: 45 yaşında erkek hasta kliniğe alt sağ 1. molar dişinde çiğneme hassasiyeti şikayetiyle başvurmuştur. Radyografik incelemede kökler arasında radyolusensi izlenmiş olup, sondlamada bu alana yatay yönde girilebildiği saptanmıştır. Bu yatay kemik kaybının derecesini değerlendirmek için aşağıdaki periodontal sondlardan hangisinin kullanımı en uygundur?
Doğru Şık (B): Nabers sondu
Açıklama: Çok köklü dişlerdeki furkasyon lezyonlarının anatomik zorluğu nedeniyle, düz sondlar bu bölgelere girmekte yetersiz kalır ve yatay kemik kaybını doğru ölçemezler. Nabers sondu, eğimli yapısı sayesinde furkasyon bölgelerine horizontal olarak adapte olmak üzere özel tasarlanmıştır. Michigan, UNC-15 ve Marquis sondları dikey cep derinliği ölçümünde kullanılan düz aletler olduklarından bu senaryoda fonksiyonel değildirler.

---

### ÇİFT 104 (Benzerlik: 0.70)

**Soru 1 (ID: a8c1e4e7-8f21-40ad-b46a-a6ae291f1ec2)**
Soru Kökü: Plak kontrolünde klinik olarak en etkili ajan grubu kabul edilen ve klorheksidin, aleksidin dihidroklorid ile oktenidin dihidroklorid gibi antiseptikleri içeren kimyasal sınıf aşağıdakilerden hangisidir?
Doğru Şık (A): Bis-biguanidler
Açıklama: Bis-biguanidler, bakteri hücre zarına bağlanarak etki gösteren en güçlü antiplak ajan sınıfıdır. Klorheksidin bu grubun altın standardıdır; aleksidin ve oktenidin de aynı kimyasal aileye mensuptur. Fenolik bileşiklerde Listerine bulunur.

**Soru 2 (ID: f9dc2e90-195e-4a6c-a89b-c155938c5230)**
Soru Kökü: Bakteri hücre duvarını harabiyete uğratıp bakteriyel enzimleri inhibe ederek antiplak etki gösteren timol, ökaliptol ve mentol içerikli ajanlar (örn. Listerine) hangi kimyasal gruba dahildir?
Doğru Şık (C): Fenolik bileşikler ve esansiyel yağlar
Açıklama: Listerine ticari adıyla bilinen timol ve ökaliptol karışımları, fenolik bileşikler ve esansiyel yağlar grubundadır. Bakteri duvarını yıkarak ve endotoksinleri nötralize ederek anti-inflamatuvar etki gösterirler ve Klorheksidine kıyasla daha az yan etki oluştururlar.

---

### ÇİFT 105 (Benzerlik: 0.70)

**Soru 1 (ID: 56fd6d65-f347-4b18-9da0-28ea42ff0a2c)**
Soru Kökü: Kırk sekiz yaşındaki kadın hasta, alt çene sağ posterior bölgede ani başlayan şişlik, künt ve nabızsal ağrı ile başvuruyor. Klinik muayenede o bölgedeki tüm premolar ve molar dişlerde yaygın (generalize) bir mobilite artışı saptanıyor ve pulpa testlerinde dişler vital yanıt veriyor. Bu tabloda mobilitenin en olası kaynağı aşağıdakilerden hangisidir?
Doğru Şık (B): Periodontal apse
Açıklama: Klinik muayenede tek bir dişteki mobilite hem endodontal hem de periodontal kaynaklı olabilirken, bölgedeki birden fazla dişi içine alan yaygın (generalize) mobilitenin primer nedeni periodontal ataçman kaybıdır. Hastanın dişlerinin vital olması ve nabızsal/künt ağrı tariflemesi de periodontal apseyi işaret etmektedir.

**Soru 2 (ID: f64e12c2-b892-4a93-9fce-d79602aeeb14)**
Soru Kökü: Otuz yaşındaki kadın hastanın rutin radyografik incelemesinde, sağ mandibular kanin dişinin lateral kök yüzeyinde sınırlı bir radyolusensi saptanmıştır. İlgili dişin klinik muayenesinde pulpa vitalite testleri pozitiftir, çürük, periodontal cep derinliği artışı veya mobilite saptanmamıştır. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Periodontal kist
Açıklama: Periodontal kist, klinik olarak asemptomatik seyredebilen, cep veya çürük barındırmayan ancak radyografide lateral radyolusensi veren, canlı dişi ilgilendiren bir lezyondur. Periodontal apsede mutlaka patolojik cep bulunurken, periapikal apsede diş devitaldir ve radyolusensi apikaldedir.

---

### ÇİFT 106 (Benzerlik: 0.70)

**Soru 1 (ID: 530d7d72-dfd2-4011-b87d-edcf1a545936)**
Soru Kökü: 17 yaşındaki kadın hasta ani başlayan şiddetli dişeti ağrısı, ağızda kötü koku ve dişetlerinde kanama şikayetiyle başvuruyor. Muayenede interdental papillerin tepesinde zımbalanmış gibi görünen, gri renkli bir pseudomembran ile örtülü krater benzeri lezyonlar saptanıyor. Sistemik muayenesinde hafif ateş ve lenfadenopati belirleniyor. Son zamanlarda üniversite sınavına hazırlandığını ve uyku düzeninin bozuk olduğunu belirtiyor.

Bu hastadaki en olası tanı ve bu tanıda ön planda yer alan bakteri grubu aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (D): Nekrotizan Gingivitis - Fusospiroketal kompleks
Açıklama: Genç hastada akut başlayan ağrı, zımbalanmış interdental papiller, gri pseudomembran, stres faktörü ve kötü ağız kokusu Nekrotizan Gingivitis (NG) için patognomoniktir. NG'nin mikrobiyal etiyolojisinde Spiroketler ve Fusobacterium türlerini içeren fusospiroketal kompleks ön plandadır.

**Soru 2 (ID: f7471b0f-c6d8-4ef0-baad-5b945fc15ddc)**
Soru Kökü: Ağızda veziküllerin patlamasıyla oluşan ağrılı ülserasyonlar şikayetiyle başvuran 5 yaşındaki hastanın anamnezinde yüksek ateş, halsizlik ve servikal lenfadenopati mevcuttur. Dişetlerinde diffüz eritem, ödem ve kanama gözlenmektedir. 

Aşağıdaki özelliklerden hangisi bu klinik tabloyu Nekrotizan Gingivitis'ten (NG) ayıran önemli bir bulgudur?
Doğru Şık (B): İnterdental papillerin zımbalanmış krater görünümünde nekroz göstermemesi
Açıklama: Klinik senaryo Primer Herpetik Gingivostomatit (PHG) ile uyumludur. NG'nin en karakteristik özelliklerinden biri interdental papillerdeki "zımbalanmış (punched-out)" nekroz iken, PHG'de papil nekrozu görülmez. Sistemik belirtiler, ağrı ve kanama her iki tabloda da ortaya çıkabilir ancak NG daha çok erişkinlerde, PHG ise küçük çocuklarda görülür.

---

### ÇİFT 107 (Benzerlik: 0.70)

**Soru 1 (ID: 44c3dbf9-a73a-4bad-874e-0cbbf68022b3)**
Soru Kökü: Orta şiddette periodontal ataşman yıkımı bulunan, papillerin tamamen çekildiği ve interdental alanların genişlediği bir vakada supragingival plak kontrolü için öncelikli olarak önerilmesi gereken araç aşağıdakilerden hangisidir?
Doğru Şık (D): Çeşitli boyuttaki arayüz fırçaları
Açıklama: Orta şiddette yıkım varlığında interproksimal boşluğa uyan en geniş araç en iyi temizliği sağlar prensibiyle çeşitli boyuttaki arayüz fırçaları tercih edilir. Diş ipi veya kürdan bu geniş alanlarda yetersiz kalır. İplik geçiriciler ortodontik braketler veya köprü altı temizliğinde görev alır.

**Soru 2 (ID: bb3b90ff-a44a-44bf-a1be-171356a9ef04)**
Soru Kökü: Periodontal dokuların debridmanı sonrasında kök yüzeyindeki pürüzlülüğü hissetmek ve furkasyon girişlerindeki kalkulusları saptamak için en uygun alet aşağıdakilerden hangisidir?
Doğru Şık (C): Explorer
Açıklama: Explorer'lar ince ve esnek uçlara sahip aletlerdir. İnce yapıları sayesinde subgingival birikintileri hissetmek, çürükleri saptamak ve kök düzeltmesi (root planing) sonrası kök yüzeyinin pürüzsüzlüğünü (taktil his ile) değerlendirmek amacıyla kullanılırlar.

---

### ÇİFT 108 (Benzerlik: 0.70)

**Soru 1 (ID: 71d6e448-e016-40a3-8f46-40d4b0acca03)**
Soru Kökü: Periodontal tedavi sonrası idame fazında olan ve sadece 'yeni başlamış minimal doku yıkımı' tablosu sergileyen bir hastada arayüz temizliği için kullanılması en uygun araç grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Diş ipi veya kürdan
Açıklama: Yeni başlamış minimal yıkım durumlarında interdental alan hafifçe açılmıştır ve bu bölgeye diş ipi veya ağaç kürdan ile plak eliminasyonu yapılması uygundur. İleri derecede açılmış arayüzler için çeşitli boyutlarda arayüz fırçaları tercih edilmelidir. Tek kıl demetli fırçalar daha çok derin defektler ve furkasyonlar için saklanır.

**Soru 2 (ID: 8ca0591e-aee9-47a6-a8af-9bf0e214f6ad)**
Soru Kökü: 50 yaşında mandibular molar dişinde sınıf II furkasyon defekti ve lingual yüzeyde izole derin dişeti çekilmesi saptanan bir hastada, bu spesifik alanların plak kontrolü için hangi aracın kullanımı **en uygundur**?
Doğru Şık (E): Tek kıl demetli fırça
Açıklama: Tek kıl demetli fırçalar; furkasyon bölgeleri, izole derin dişeti çekilmesi alanları ve mandibular molarların linguali gibi ulaşılması zor bölgelerin spesifik temizliğinde kullanılır. Standart fırçalar ve diş ipi bu anatomik düzensizliklere adapte olamaz. Kürdan ise kök yüzeyini temizlemede yetersiz kalır.

---

### ÇİFT 109 (Benzerlik: 0.70)

**Soru 1 (ID: 09e9ca40-3f3d-430b-92c1-482f84d1e32c)**
Soru Kökü: Plak kontrolünde kullanılan antiseptik ajanlardan olan Klorheksidin (CHX) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Önceden oluşmuş plağa karşı etkinliği oldukça yüksektir.
Açıklama: Klorheksidin, plak inhibisyonunda en etkili ajan olmakla birlikte önceden oluşmuş plağa karşı etkinliği zayıftır. Bu nedenle etkili olabilmesi için öncesinde mekanik temizlik (diş fırçalama veya profesyonel profilaksi) önerilir. Katyonik yapısı nedeniyle sodyum lauril sülfat (SLS) gibi anyonik maddelerle inaktive olur.

**Soru 2 (ID: b22b9319-ba58-4c4b-906b-3d7f874595d8)**
Soru Kökü: Kimyasal plak kontrolünde yaygın olarak reçete edilen Klorheksidin glukonat gargaraların uzun dönem yan etkileri arasında aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (B): Cep florasını bozarak subgingival diştaşı miktarında artışa neden olması
Açıklama: Klorheksidin gargara subgingival bölgeye yeterli derinlikte penetre olamaz, bu nedenle subgingival diştaşı formasyonunu artırmaz. Aksine, plaktaki kalsifikasyonu kolaylaştırarak 'supragingival' diştaşı artışına neden olur. Fibroblast toksisitesi ve renklenme karakteristik yan etkileridir.

---

### ÇİFT 110 (Benzerlik: 0.70)

**Soru 1 (ID: 1dd7b9e3-8be0-4e28-a58c-549c0ebcc5dd)**
Soru Kökü: 55 yaşında diyabetik bir erkek hastanın üst sağ kanin dişinin palatinal bölgesinde 7 mm derinliğinde dar bir periodontal cep tespit edilmiştir. Standart Gracey küretlerin boyun uzunluğu bu cep tabanına ulaşmada yetersiz kalmıştır. Bu durumda subgingival kök yüzeyi debridmanı için aşağıdaki alet modifikasyonlarından hangisinin kullanılması endikedir?
Doğru Şık (C): After Five küreti
Açıklama: Derin periodontal ceplere (5 mm ve üzeri) erişim sağlamak için standart Gracey küretlerin terminal boyun (shank) kısmı 3 mm uzatılarak 'After Five' (uzatılmış gövdeli) küretler geliştirilmiştir. Bu tasarım, alet sapının kurona çarpmasını engelleyerek bıçağın derin cep tabanına adaptasyonunu mümkün kılar.

**Soru 2 (ID: 6f3b1ee1-2836-4f50-a705-1ea57f624bd5)**
Soru Kökü: 35 yaşında kadın hasta, alt ön bölgede dişeti kanaması şikayetiyle başvurmuştur. Yapılan muayenede 32, 31, 41 ve 42 numaralı dişlerin subgingival bölgelerinde yoğun eklentiler saptanmıştır. Bu dişlerin kök yüzeyi düzleştirmesi işleminde aşağıdaki bölgeye özgü (Gracey) küretlerden hangisinin kullanımı **en az** uygundur?
Doğru Şık (D): Gracey 13-14
Açıklama: Gracey 1-2, 3-4, 5-6 numaralı küretler ve Sub-0 Curvette, özellikle kesici dişler (anterior) ve premolarlar için tasarlanmıştır ve düz gövde yapıları sayesinde ön bölgeye rahatça uyum sağlarlar. Ancak Gracey 13-14 küreti, oldukça açılı bir gövdeye sahiptir ve spesifik olarak posterior (molar) dişlerin distal yüzeylerinde kullanılmak üzere dizayn edilmiştir.

---

### ÇİFT 111 (Benzerlik: 0.70)

**Soru 1 (ID: edf8ca51-ccc2-474d-a1be-44d6b9470bfa)**
Soru Kökü: Yirmi iki yaşındaki sistemik olarak sağlıklı kadın hasta, dişlerinde yaygın mobilite ve dişeti kanaması şikayetiyle başvurmuştur. Klinik ve radyografik muayene sonucunda hastaya agresif periodontitis tanısı konulmuştur. Mekanik tedaviye ek olarak reçete edilecek makrolid grubu antibiyotiğin gram negatif basillere ve anaeroblara etkili olması hedeflenmektedir. Bu vakada destekleyici tedavi olarak kullanılması en uygun ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin
Açıklama: Azitromisin, gram negatif basiller ve anaeroblar üzerinde güçlü etkinliği sayesinde agresif periodontitiste mekanik tedaviye destek olarak önerilen temel makrolid derivesidir. Spiramisin gram pozitiflere etkilidir, eritromisin ise dişeti oluğu sıvısına yeterli konsantrasyonda penetre olamaz. Minosiklin agresif periodontitiste etkili bir tetrasiklin türevi olsa da soruda açıkça makrolid grubu bir ajan istenmesi nedeniyle doğru cevap azitromisindir.

**Soru 2 (ID: fbcb23dd-7a6e-47dc-b6e0-6a51f1d03ad4)**
Soru Kökü: Periodontal mikrobiyal florada özellikle *Aggregatibacter actinomycetemcomitans* (Aa) üzerinde güçlü bakterisid etkiye sahip olan, mikst enfeksiyonların eliminasyonunu sağlamak amacıyla sıklıkla Metronidazol ile kombine edilen kinolon (florokinolon) grubu antibiyotik aşağıdakilerden hangisidir?
Doğru Şık (C): Siprofloksasin
Açıklama: Siprofloksasin, Gram (-) fakültatif bakteriler ve özellikle agresif periodontitisin baş aktörü olan Aa üzerinde son derece etkili olan sentetik bir florokinolon antibiyotiktir. Kendi başına anaeroblara zayıf etkili olduğundan, anaerob floraya hükmeden metronidazol ile kombinasyonu mikst periodontal enfeksiyonlarda çok başarılı bir sinerjistik etki gösterir.

---

### ÇİFT 112 (Benzerlik: 0.70)

**Soru 1 (ID: 01de8ac8-0197-436e-a9dc-3bfb6833b763)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, marjinal dişetinde aniden ortaya çıkan lokalize bir şişlik şikayetiyle başvuruyor. Klinik muayenede ilgili dişte çürük olmadığı, pulpanın canlı olduğu ve periodontal cep derinliğinin normal (sığ) olduğu tespit ediliyor. Radyografik incelemede herhangi bir kemik yıkımı izlenmiyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Gingival apse
Açıklama: Gingival apse; dişte çürük olmayan, pulpanın canlı kaldığı, periodontal cebin ve radyografik kemik kaybının bulunmadığı, sadece marjinal dişeti veya interdental papili ilgilendiren akut inflamatuar bir tablodur. Periodontal apsede derin bir cep varlığı şarttır, periapikal apsede ise diş devitaldir.

**Soru 2 (ID: 56fd6d65-f347-4b18-9da0-28ea42ff0a2c)**
Soru Kökü: Kırk sekiz yaşındaki kadın hasta, alt çene sağ posterior bölgede ani başlayan şişlik, künt ve nabızsal ağrı ile başvuruyor. Klinik muayenede o bölgedeki tüm premolar ve molar dişlerde yaygın (generalize) bir mobilite artışı saptanıyor ve pulpa testlerinde dişler vital yanıt veriyor. Bu tabloda mobilitenin en olası kaynağı aşağıdakilerden hangisidir?
Doğru Şık (B): Periodontal apse
Açıklama: Klinik muayenede tek bir dişteki mobilite hem endodontal hem de periodontal kaynaklı olabilirken, bölgedeki birden fazla dişi içine alan yaygın (generalize) mobilitenin primer nedeni periodontal ataçman kaybıdır. Hastanın dişlerinin vital olması ve nabızsal/künt ağrı tariflemesi de periodontal apseyi işaret etmektedir.

---

### ÇİFT 113 (Benzerlik: 0.69)

**Soru 1 (ID: 5d67e99e-7f82-47ca-ad8b-0064b8879fa1)**
Soru Kökü: Sığ ceplere sahip bir idame hastasında rutin diş taşı temizliği yapılması planlanmaktadır. Ancak hekimin supragingival bölgedeki yoğun ve sert kalkulus köprülerini parçalaması, ardından subgingival alanlardaki ince rezidüel depozitleri kök sementine zarar vermeden pürüzsüzleştirmesi gerekmektedir. Bu işlemi optimal şekilde gerçekleştirmek için kullanılacak el aleti sırası aşağıdakilerin hangisinde en doğru verilmiştir?
Doğru Şık (E): Önce Orak kretuar ile ağır supragingival blokların kırılması, sonra Gracey küret ile subgingival sementin pürüzsüzleştirilmesi
Açıklama: Periodontal alet kullanımının altın standart dizilimi her zaman kaba ve güçlü aletten ince ve doku dostu alete doğru ilerlemektir. Orak kretuarlar sert ve kalın yapılarıyla kron üzerindeki ağır diştaşı köprülerini hızla kırar. Ancak subgingival yüzeye girmeleri sakıncalı olduğundan, kalan kök yüzeyindeki işlemler mutlaka Gracey veya Üniversal küretlerin yuvarlak/esnek yapısıyla tamamlanmalıdır.

**Soru 2 (ID: 6ea50a1b-bd8a-479c-8809-18f57ba706b7)**
Soru Kökü: İnatçı subgingival diş taşlarının ve ledgelerin (basamak) kırılmasında kullanılan, bıçağı gövdeye 99 derece eğimli olan ve dokuya zarar vermemek için diş yüzeyine iki noktadan temas ederek aktive edilmesi gereken periodontal el aleti aşağıdakilerden hangisidir?
Doğru Şık (B): Hoe kretuar
Açıklama: Hoe (çapa) kretuarlar tek bir kesici kenara sahip olup bıçağı gövdeyle 99 derece açı yapacak şekilde eğimlidir. Bu yapı, çok sert ve yapışık kalkulus bloklarının (ledge) altından girip kırmak için idealdir. Keskin köşelerinin kökü oymaması için diş yüzeyine hem bıçağın ucuyla hem de aletin boyun kısmıyla (iki noktadan) destek alarak kullanılması şarttır.

---

### ÇİFT 114 (Benzerlik: 0.69)

**Soru 1 (ID: 554eaabc-7c7e-400a-96d9-618aac69edaa)**
Soru Kökü: Üst sol birinci büyük azı dişinin meziyopalatinal kök yüzeyinde saptanan rezidüel kalkulusun uzaklaştırılması amacıyla aşağıdaki Gracey küretlerinden hangisinin tercih edilmesi en idealdir?
Doğru Şık (A): Gracey 15-16
Açıklama: Molar dişlerin mezyal yüzeylerine ulaşmak için aşırı açılı gövdelere ihtiyaç vardır. Bu amaca hizmet eden Gracey küretleri 11-12 ve onun modern bir modifikasyonu olan, daha iyi adaptasyon sağlayan Gracey 15-16'dır. 13-14 ve 17-18 distal yüzeylere, 7-8 ise bukkal/lingual yüzeylere aittir.

**Soru 2 (ID: 8cdf16ae-f3a5-40b4-988b-8c009e463da2)**
Soru Kökü: Mandibular ikinci premolar dişin distal yüzeyinde kök yüzeyi düzleştirmesi yapmayı planlayan bir hekimin, bu anatomik bölgeye uygun açılanma sağlamak için aşağıdaki el aletlerinden hangisini seçmesi gerekir?
Doğru Şık (B): Gracey 13-14
Açıklama: Gracey küret serisinde arka grup dişlerin (molar ve premolar) distal yüzeylerine özel olarak geliştirilmiş aletler Gracey 13-14 ve onun daha ekstrem açılı versiyonu olan 17-18 numaralardır. Bu aletlerin gövde kıvrımları, yanak dokusunu ekarte ederken bıçağın dişe paralel olmasını sağlar.

---

### ÇİFT 115 (Benzerlik: 0.69)

**Soru 1 (ID: a75a5c62-2c17-442c-9041-6e89a7e693c6)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta, agresif periodontitis tedavisi kapsamında tetrasiklin reçete edilmesine rağmen enfeksiyonda herhangi bir gerileme olmadığını ifade etmektedir. Hastanın anamnezinden günde 3 porsiyon süt ve yoğurt tükettiği, ayrıca anemi tedavisi için demir hapı ve mide yanması için antasit kullandığı öğrenilmiştir. İlacın başarısız olmasının **en olası** farmakolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): İlacın +2 ve +3 değerlikli metallerle şelat oluşturarak gastrointestinal emiliminin azalması
Açıklama: Tetrasiklinler, yapılarındaki bağlanma bölgeleri sebebiyle kalsiyum (süt/yoğurt), demir (antianemik haplar), magnezyum veya alüminyum (antasitler) gibi +2 ve +3 değerlikli metalik katyonlarla gastrointestinal kanalda çözünmeyen kompleksler (şelatlar) oluştururlar. Bu şelasyon, ilacın kana emilmesini ciddi oranda düşürerek sistemik biyo-yararlanımı ve periodontal cepteki konsantrasyonunu sıfıra indirir.

**Soru 2 (ID: edf8ca51-ccc2-474d-a1be-44d6b9470bfa)**
Soru Kökü: Yirmi iki yaşındaki sistemik olarak sağlıklı kadın hasta, dişlerinde yaygın mobilite ve dişeti kanaması şikayetiyle başvurmuştur. Klinik ve radyografik muayene sonucunda hastaya agresif periodontitis tanısı konulmuştur. Mekanik tedaviye ek olarak reçete edilecek makrolid grubu antibiyotiğin gram negatif basillere ve anaeroblara etkili olması hedeflenmektedir. Bu vakada destekleyici tedavi olarak kullanılması en uygun ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin
Açıklama: Azitromisin, gram negatif basiller ve anaeroblar üzerinde güçlü etkinliği sayesinde agresif periodontitiste mekanik tedaviye destek olarak önerilen temel makrolid derivesidir. Spiramisin gram pozitiflere etkilidir, eritromisin ise dişeti oluğu sıvısına yeterli konsantrasyonda penetre olamaz. Minosiklin agresif periodontitiste etkili bir tetrasiklin türevi olsa da soruda açıkça makrolid grubu bir ajan istenmesi nedeniyle doğru cevap azitromisindir.

---

### ÇİFT 116 (Benzerlik: 0.69)

**Soru 1 (ID: 1ed925a1-07d9-4db4-aa1e-6a0c02f42779)**
Soru Kökü: 30 yaşında erkek hasta, dişetlerinde genel bir yanma hissi ve atipik gingival ülserasyonlar ile başvurmuştur. Alınan anamnezde sistemik bulgular tespit edilmiş, alınan smear testinde Neisseria gonorrhoeae baskın olarak saptanmıştır. Bu klinik tablonun NUG ile ayırıcı tanısı yapılırken klinisyenin en çok dikkat etmesi gereken temel fark aşağıdakilerden hangisidir?
Doğru Şık (A): Kötü ağız kokusunun NUG'daki kadar karakteristik olmaması ve etkenin spesifik kültürü
Açıklama: Gonokokkal stomatitis, Neisseria gonorrhoeae etkenine bağlı gelişen spesifik bir enfeksiyondur. NUG'dan ayrılmasındaki en temel özellik, NUG'da çok baskın olan kötü ağız kokusunun (fetor ex ore) bu tabloda bulunmaması ve smear testinde direkt olarak N. gonorrhoeae tespit edilmesidir.

**Soru 2 (ID: f7471b0f-c6d8-4ef0-baad-5b945fc15ddc)**
Soru Kökü: Ağızda veziküllerin patlamasıyla oluşan ağrılı ülserasyonlar şikayetiyle başvuran 5 yaşındaki hastanın anamnezinde yüksek ateş, halsizlik ve servikal lenfadenopati mevcuttur. Dişetlerinde diffüz eritem, ödem ve kanama gözlenmektedir. 

Aşağıdaki özelliklerden hangisi bu klinik tabloyu Nekrotizan Gingivitis'ten (NG) ayıran önemli bir bulgudur?
Doğru Şık (B): İnterdental papillerin zımbalanmış krater görünümünde nekroz göstermemesi
Açıklama: Klinik senaryo Primer Herpetik Gingivostomatit (PHG) ile uyumludur. NG'nin en karakteristik özelliklerinden biri interdental papillerdeki "zımbalanmış (punched-out)" nekroz iken, PHG'de papil nekrozu görülmez. Sistemik belirtiler, ağrı ve kanama her iki tabloda da ortaya çıkabilir ancak NG daha çok erişkinlerde, PHG ise küçük çocuklarda görülür.

---

### ÇİFT 117 (Benzerlik: 0.69)

**Soru 1 (ID: 1dd7b9e3-8be0-4e28-a58c-549c0ebcc5dd)**
Soru Kökü: 55 yaşında diyabetik bir erkek hastanın üst sağ kanin dişinin palatinal bölgesinde 7 mm derinliğinde dar bir periodontal cep tespit edilmiştir. Standart Gracey küretlerin boyun uzunluğu bu cep tabanına ulaşmada yetersiz kalmıştır. Bu durumda subgingival kök yüzeyi debridmanı için aşağıdaki alet modifikasyonlarından hangisinin kullanılması endikedir?
Doğru Şık (C): After Five küreti
Açıklama: Derin periodontal ceplere (5 mm ve üzeri) erişim sağlamak için standart Gracey küretlerin terminal boyun (shank) kısmı 3 mm uzatılarak 'After Five' (uzatılmış gövdeli) küretler geliştirilmiştir. Bu tasarım, alet sapının kurona çarpmasını engelleyerek bıçağın derin cep tabanına adaptasyonunu mümkün kılar.

**Soru 2 (ID: 554eaabc-7c7e-400a-96d9-618aac69edaa)**
Soru Kökü: Üst sol birinci büyük azı dişinin meziyopalatinal kök yüzeyinde saptanan rezidüel kalkulusun uzaklaştırılması amacıyla aşağıdaki Gracey küretlerinden hangisinin tercih edilmesi en idealdir?
Doğru Şık (A): Gracey 15-16
Açıklama: Molar dişlerin mezyal yüzeylerine ulaşmak için aşırı açılı gövdelere ihtiyaç vardır. Bu amaca hizmet eden Gracey küretleri 11-12 ve onun modern bir modifikasyonu olan, daha iyi adaptasyon sağlayan Gracey 15-16'dır. 13-14 ve 17-18 distal yüzeylere, 7-8 ise bukkal/lingual yüzeylere aittir.

---

### ÇİFT 118 (Benzerlik: 0.69)

**Soru 1 (ID: 01cdf9ab-c7a9-4bf7-9b60-0acc71fc5368)**
Soru Kökü: Alt sağ birinci molar dişin bukkal ve lingual yüzeylerinde lokalize 5 mm derinliğinde periodontal cepleri bulunan bir hastada, bu yüzeylerin subgingival debridmanı için aşağıdaki el aletlerinden hangisi spesifik olarak tasarlanmıştır?
Doğru Şık (E): Gracey 7-8
Açıklama: Gracey küret sistematiğinde posterior dişlerin (molar ve premolarlar) fasial (bukkal) ve oral (lingual/palatinal) düz yüzeylerinin temizliği için Gracey 7-8 ve 9-10 numaralı aletler kullanılır. 11-12 ve 15-16 mezyal yüzeyler, 13-14 ve 17-18 ise distal yüzeyler için spesifiktir.

**Soru 2 (ID: bd119e94-a160-4a29-a7df-60142a04949b)**
Soru Kökü: Aşağıdaki periodontal el aletlerinden hangisi, rezidüel kalkulus veya ledgeleri kırmak amacıyla tasarlanmış olup, tek bir kesici kenara sahip ve bıçağı gövde ile 99 derece açı yapacak formdadır?
Doğru Şık (C): Hoe kretuar
Açıklama: Hoe (çapa) kretuarları kalkulusu kırmak ve dişten ayırmak için kullanılır, bıçakları 99 derece açılıdır ve diş yüzeyine iki noktada temas sağlarlar. Chisel aletleri ise özellikle dar interproksimal alanlarda itme hareketi ile çalışır.

---

### ÇİFT 119 (Benzerlik: 0.69)

**Soru 1 (ID: 5d67e99e-7f82-47ca-ad8b-0064b8879fa1)**
Soru Kökü: Sığ ceplere sahip bir idame hastasında rutin diş taşı temizliği yapılması planlanmaktadır. Ancak hekimin supragingival bölgedeki yoğun ve sert kalkulus köprülerini parçalaması, ardından subgingival alanlardaki ince rezidüel depozitleri kök sementine zarar vermeden pürüzsüzleştirmesi gerekmektedir. Bu işlemi optimal şekilde gerçekleştirmek için kullanılacak el aleti sırası aşağıdakilerin hangisinde en doğru verilmiştir?
Doğru Şık (E): Önce Orak kretuar ile ağır supragingival blokların kırılması, sonra Gracey küret ile subgingival sementin pürüzsüzleştirilmesi
Açıklama: Periodontal alet kullanımının altın standart dizilimi her zaman kaba ve güçlü aletten ince ve doku dostu alete doğru ilerlemektir. Orak kretuarlar sert ve kalın yapılarıyla kron üzerindeki ağır diştaşı köprülerini hızla kırar. Ancak subgingival yüzeye girmeleri sakıncalı olduğundan, kalan kök yüzeyindeki işlemler mutlaka Gracey veya Üniversal küretlerin yuvarlak/esnek yapısıyla tamamlanmalıdır.

**Soru 2 (ID: 8cdf16ae-f3a5-40b4-988b-8c009e463da2)**
Soru Kökü: Mandibular ikinci premolar dişin distal yüzeyinde kök yüzeyi düzleştirmesi yapmayı planlayan bir hekimin, bu anatomik bölgeye uygun açılanma sağlamak için aşağıdaki el aletlerinden hangisini seçmesi gerekir?
Doğru Şık (B): Gracey 13-14
Açıklama: Gracey küret serisinde arka grup dişlerin (molar ve premolar) distal yüzeylerine özel olarak geliştirilmiş aletler Gracey 13-14 ve onun daha ekstrem açılı versiyonu olan 17-18 numaralardır. Bu aletlerin gövde kıvrımları, yanak dokusunu ekarte ederken bıçağın dişe paralel olmasını sağlar.

---

### ÇİFT 120 (Benzerlik: 0.69)

**Soru 1 (ID: 5d67e99e-7f82-47ca-ad8b-0064b8879fa1)**
Soru Kökü: Sığ ceplere sahip bir idame hastasında rutin diş taşı temizliği yapılması planlanmaktadır. Ancak hekimin supragingival bölgedeki yoğun ve sert kalkulus köprülerini parçalaması, ardından subgingival alanlardaki ince rezidüel depozitleri kök sementine zarar vermeden pürüzsüzleştirmesi gerekmektedir. Bu işlemi optimal şekilde gerçekleştirmek için kullanılacak el aleti sırası aşağıdakilerin hangisinde en doğru verilmiştir?
Doğru Şık (E): Önce Orak kretuar ile ağır supragingival blokların kırılması, sonra Gracey küret ile subgingival sementin pürüzsüzleştirilmesi
Açıklama: Periodontal alet kullanımının altın standart dizilimi her zaman kaba ve güçlü aletten ince ve doku dostu alete doğru ilerlemektir. Orak kretuarlar sert ve kalın yapılarıyla kron üzerindeki ağır diştaşı köprülerini hızla kırar. Ancak subgingival yüzeye girmeleri sakıncalı olduğundan, kalan kök yüzeyindeki işlemler mutlaka Gracey veya Üniversal küretlerin yuvarlak/esnek yapısıyla tamamlanmalıdır.

**Soru 2 (ID: 71d6e448-e016-40a3-8f46-40d4b0acca03)**
Soru Kökü: Periodontal tedavi sonrası idame fazında olan ve sadece 'yeni başlamış minimal doku yıkımı' tablosu sergileyen bir hastada arayüz temizliği için kullanılması en uygun araç grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Diş ipi veya kürdan
Açıklama: Yeni başlamış minimal yıkım durumlarında interdental alan hafifçe açılmıştır ve bu bölgeye diş ipi veya ağaç kürdan ile plak eliminasyonu yapılması uygundur. İleri derecede açılmış arayüzler için çeşitli boyutlarda arayüz fırçaları tercih edilmelidir. Tek kıl demetli fırçalar daha çok derin defektler ve furkasyonlar için saklanır.

---

### ÇİFT 121 (Benzerlik: 0.69)

**Soru 1 (ID: 8ff9df76-25de-43be-84d6-fb6e2dadec60)**
Soru Kökü: Periodontal el aletlerinin yapısal özellikleri incelendiğinde, bıçak yüzeyinin her iki tarafında birbirine paralel iki kesici kenar bulunduran ve bıçağın alt yüzü gövdeye 90 derece açı yapan alet grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Colombia küretleri
Açıklama: Colombia küretleri üniversal küretlerin klasik bir örneğidir. Üniversal küretlerin bıçakları gövdeye 90 derece açı yapar ve aletin her iki kenarı da keskindir. Bölgeye özgü küretlerde (Gracey) ise bu açı 60-70 derecedir ve sadece alt (dış) kenar keskindir. Hoe kretuarlar ise 99 derecelik tek bir bıçak eğimine sahiptir.

**Soru 2 (ID: bd119e94-a160-4a29-a7df-60142a04949b)**
Soru Kökü: Aşağıdaki periodontal el aletlerinden hangisi, rezidüel kalkulus veya ledgeleri kırmak amacıyla tasarlanmış olup, tek bir kesici kenara sahip ve bıçağı gövde ile 99 derece açı yapacak formdadır?
Doğru Şık (C): Hoe kretuar
Açıklama: Hoe (çapa) kretuarları kalkulusu kırmak ve dişten ayırmak için kullanılır, bıçakları 99 derece açılıdır ve diş yüzeyine iki noktada temas sağlarlar. Chisel aletleri ise özellikle dar interproksimal alanlarda itme hareketi ile çalışır.

---

### ÇİFT 122 (Benzerlik: 0.69)

**Soru 1 (ID: 01cdf9ab-c7a9-4bf7-9b60-0acc71fc5368)**
Soru Kökü: Alt sağ birinci molar dişin bukkal ve lingual yüzeylerinde lokalize 5 mm derinliğinde periodontal cepleri bulunan bir hastada, bu yüzeylerin subgingival debridmanı için aşağıdaki el aletlerinden hangisi spesifik olarak tasarlanmıştır?
Doğru Şık (E): Gracey 7-8
Açıklama: Gracey küret sistematiğinde posterior dişlerin (molar ve premolarlar) fasial (bukkal) ve oral (lingual/palatinal) düz yüzeylerinin temizliği için Gracey 7-8 ve 9-10 numaralı aletler kullanılır. 11-12 ve 15-16 mezyal yüzeyler, 13-14 ve 17-18 ise distal yüzeyler için spesifiktir.

**Soru 2 (ID: 556677a9-5027-4fc9-8ccb-37bc67536f51)**
Soru Kökü: Başlangıç periodontal tedavisi tamamlanmış ve destekleyici periodontal tedaviye alınmış hastanın alt ön bölgesinde, ataçman kaybı olmaksızın sıkı, fibrotik bir dişeti mevcuttur. Sondlamada subgingival alanda hafif bir pürüzlülük hissedilmiş olup bu bölgenin temizlenmesi planlanmaktadır. Dokuyu esnetmeden bu dar alana girebilmek için standart küretlere göre bıçağı %20 daha ince, 1 mm daha kısa ve bıçak açısı gövdeye 60 derece kaydırılmış alet aşağıdakilerden hangisidir?
Doğru Şık (D): Periodontal idame küreti
Açıklama: Periodontal İdame Küretleri, tedavisi bitmiş ancak dokuları fibrotik büzülme göstermiş sağlıklı/sıkı sulkuslara travma yaratmadan girmek için özel olarak dizayn edilmiştir. Standart aletlere göre %20 ince ve 1 mm kısa bıçakları vardır. Bıçağın gövdeye olan açısı klasik Gracey'lerde 70 dereceyken, idame küretlerinde bu açı 60 dereceye düşürülerek kapalı cebe giriş kolaylaştırılmıştır.

---

