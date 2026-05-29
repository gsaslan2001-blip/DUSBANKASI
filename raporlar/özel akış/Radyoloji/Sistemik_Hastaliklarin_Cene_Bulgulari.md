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

### ÇİFT 1 (Benzerlik: 0.82)

**Soru 1 (ID: 88f78318-3d6f-4c7c-9d78-15c8c2e74e98)**
Soru Kökü: Aşağıdakilerden hangisi çocukluk çağı hipotiroidizm (kretinizm) hastalarında, çene-yüz ve kafa kaidesi bölgesinde karşılaşılan radyografik bulgulardan biri **değildir**?
Doğru Şık (D): Diş gelişim hızında artma ve erken erüpsiyon paterni
Açıklama: Hipotiroidizmde (kretinizm) tüm anatomik süreçlerde olduğu gibi dişlerin gelişim ve sürme hızlarında yavaşlama/gecikme vardır; diş gelişiminde artma ve erken erüpsiyon hipertiroidizmin karakteristik bulgusudur. Kısa kökler, lamina dura kalınlaşması, wormian kemik üretimi ve eksternal kök rezorpsiyonları kretinizm tablosunun beklenen radyografik sonuçlarıdır.

**Soru 2 (ID: c4163a70-7624-46de-b5b9-a6012b1029cd)**
Soru Kökü: Çocukluk çağında gelişen tiroid hormon eksikliği (kretinizm) hastalarının çene, kafa ve ekstremite kemiklerini ilgilendiren radyografik izlemlerinde aşağıdaki bulgulardan hangisi **görülmez**?
Doğru Şık (E): Kortikal sınırlarda diffüz incelme ve radyografik osteoporoz tablosu
Açıklama: Osteoporoz nedeniyle kortikal sınırlarda incelme, hipotiroidizmde değil tam tersi mekanizmayla çalışan ve kemik yapım-yıkım döngüsünü felte eden hipertiroidizm (tirotoksikoz), hiperparatiroidizm veya osteoporoz gibi tablolarda izlenir. Hipotiroidizm radyografilerinde lamina durada belirgin kalınlaşma görülür; epifizlerin geç kapanması, wormian kemikler ve kısa kökler teşhisi destekleyen en önemli büyüme geriliği verileridir.

---

### ÇİFT 2 (Benzerlik: 0.81)

**Soru 1 (ID: 51a912c6-1f2d-4a19-831d-18e35ad4d247)**
Soru Kökü: Gelişim çağındaki çocuklarda yetersiz tiroid hormonu salınımına bağlı ortaya çıkan hipotiroidizm (kretinizm) tablosunda, baş-boyun bölgesinin iskeletsel büyümesinde aşağıda belirtilen radyolojik bulgulardan hangisi tespit edilir?
Doğru Şık (B): Kafa tabanında ossifikasyon (kemikleşme) gecikmesi
Açıklama: Hipotiroidizm hastalarında metabolizma yavaşlamasına paralel olarak kemik gelişim ve olgunlaşma (ossifikasyon) süreci sekteye uğrar ve radyografik olarak kafa tabanında belirgin bir ossifikasyon gecikmesi izlenir. Diploik genişleme ve premaksiller protrüzyon talasemide, santral trabekül kaybı ve granüler görünüm hiperparatiroidizmde bulunur. Kafa kemiklerindeki bu yavaş kemikleşme hızı, aynı zamanda epifiz kapanma gecikmelerinin de sebebidir.

**Soru 2 (ID: c4163a70-7624-46de-b5b9-a6012b1029cd)**
Soru Kökü: Çocukluk çağında gelişen tiroid hormon eksikliği (kretinizm) hastalarının çene, kafa ve ekstremite kemiklerini ilgilendiren radyografik izlemlerinde aşağıdaki bulgulardan hangisi **görülmez**?
Doğru Şık (E): Kortikal sınırlarda diffüz incelme ve radyografik osteoporoz tablosu
Açıklama: Osteoporoz nedeniyle kortikal sınırlarda incelme, hipotiroidizmde değil tam tersi mekanizmayla çalışan ve kemik yapım-yıkım döngüsünü felte eden hipertiroidizm (tirotoksikoz), hiperparatiroidizm veya osteoporoz gibi tablolarda izlenir. Hipotiroidizm radyografilerinde lamina durada belirgin kalınlaşma görülür; epifizlerin geç kapanması, wormian kemikler ve kısa kökler teşhisi destekleyen en önemli büyüme geriliği verileridir.

---

### ÇİFT 3 (Benzerlik: 0.81)

**Soru 1 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

**Soru 2 (ID: cb5d34dd-366e-46d2-9163-5bcdf0c1c3b3)**
Soru Kökü: Kırk beş yaşında erkek hasta, makroglossi, alt çenede Sınıf III iskeletsel prognati ve dişler arası diastemalarla kliniğe başvuruyor. Radyografide mandibula ramus ile gövde açısının arttığı tespit ediliyor. Yetişkin dönem hiperpituitarizm (Akromegali) ile uyumlu bu tabloda, özellikle posterior bölgede hangi dental sürme anomalisinin görülmesi en olasıdır?
Doğru Şık (D): Posterior dişlerde süper-erüpsiyon
Açıklama: Akromegali hastalarında büyüme hormonu fazlalığına bağlı olarak mandibular kemik büyümesi devam eder ve vertikal alveoler kemik boyutu artar. Tablo 14'te de belirtildiği üzere, bu boyutsal artışı telafi etmek ve oklüzyonu sağlamak adına posterior dişlerde süper-erüpsiyon (aşırı sürme) ile birlikte hipersementoz karakteristiktir. Ankiloz veya gömüklük durumu bu tablonun patofizyolojisiyle çelişir.

---

### ÇİFT 4 (Benzerlik: 0.81)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

---

### ÇİFT 5 (Benzerlik: 0.80)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: 52a71068-b55a-4cbd-aa98-f0f95b3cc5fa)**
Soru Kökü: Tablo 13'e göre, kemik dansitesini etkilemesine rağmen çene kemiklerindeki trabeküler yapının sayısında veya morfolojisinde istatistiksel olarak bir değişim yaratmayan hastalık hangisidir?
Doğru Şık (E): Hipertiroidizm
Açıklama: Hipertiroidizm kemik döngüsünü hızlandırıp total kemik dansitesinde azalmaya neden olsa da, Tablo 13 verilerinde trabekül yapısında nicel (artma/azalma) veya nitel (granüler) bir değişim yaratmadığı belirtilmiştir. Osteoporozis, osteomalazya ve renal osteodistrofi gibi tablolar ise trabeküler ağı doğrudan zayıflatır veya sayısını değiştirir.

---

### ÇİFT 6 (Benzerlik: 0.80)

**Soru 1 (ID: 94b67e5b-9dbf-4774-8402-5004cef3a442)**
Soru Kökü: Hipofosfatazya hastalarının radyografik değerlendirmesinde Tablo 14 verilerine göre lamina dura ve kortikal sınırların durumu hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (C): Lamina dura kaybı ve kortikal sınırda incelme görülür.
Açıklama: Hipofosfatazya, alkalen fosfataz enziminin yetersizliğine bağlı olarak osteoidin normal mineralize olamamasıyla karakterizedir ve bu durum lamina dura ile kortikal sınırlarda incelme veya kayıp oluşturur. Lamina durada kalınlaşma osteopetroziste görülürken, hipofosfatazyada alveoler kemik dansitesinde azalma mevcuttur. Hastalarda dişlerin ince mine, dentin ve sement yapısına sekonder olarak lamina dura net olarak izlenemez.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 7 (Benzerlik: 0.80)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: daf9ebbe-d850-40fb-b82a-4714315a851e)**
Soru Kökü: İleri derecede kronik böbrek fonksiyon kaybı olan bir hastada gelişen renal osteodistrofi bulguları ile paratiroid adenomuna bağlı gelişen primer hiperparatiroidizm tablosu radyografik olarak birbirine ciddi benzerlik gösterebilir. Aşağıdaki çene kemiği radyografik değişikliklerinden hangisi her iki sistemik hastalık için de spesifik ve ortak bir bulgudur?
Doğru Şık (A): Granüler trabeküler kemik yapısı ve lamina dura belirginliğinin kaybı
Açıklama: Renal osteodistrofi, kronik böbrek yetmezliğine bağlı fosfor atılımının bozulmasıyla gelişen hiperfosfatemi ve buna yanıt olarak üretilen aşırı parathormonun (sekonder hiperparatiroidizm) tablosudur. İster primer ister böbrek kaynaklı sekonder hiperparatiroidizm olsun, artan PTH hormonunun yarattığı artmış osteoklastik yıkım sonucunda çene kemiklerinde generalize lamina dura kaybı ve bulanık, buzlu cam benzeri granüler trabeküler görünüm her iki tabloda da ortak saptanan patognomonik radyografik işaretlerdir.

---

### ÇİFT 8 (Benzerlik: 0.80)

**Soru 1 (ID: 6a3f617e-006e-4ea7-912e-9eb9c0c8758a)**
Soru Kökü: Endokrin sistem hastalıklarının diş sürme zamanlarına olan etkileri değerlendirildiğinde;
I. Hipertiroidizm
II. Hipopituitarizm
III. Hipotiroidizm
IV. Cushing sendromu
Yukarıdaki hastalıklardan hangileri klinik olarak diş sürmesinde **hızlanma (erken sürme)** ile karakterizedir?
Doğru Şık (E): I ve IV
Açıklama: Metabolizma hızını artıran veya hiperaktiviteye neden olan endokrinopatiler genellikle diş sürmesini hızlandırır. Hipertiroidizmde artmış tiroksine bağlı erken sürme izlenirken, Cushing sendromunda glukokortikoid fazlalığı dişlerin erken sürmesine (prematür erüpsiyon) yol açar. Buna karşın metabolizmayı ve büyümeyi yavaşlatan hipotiroidizm, hipoparatiroidizm ve hipopituitarizm gibi durumlar diş gelişimini duraklatarak sürme gecikmesine neden olur.

**Soru 2 (ID: ebda6e73-cb48-482a-8039-e1b60290e601)**
Soru Kökü: Dişlerin sürme zamanlarındaki gecikme veya malformasyonlar sistemik hastalıklar için diagnostik bir ipucudur. 
I. Hipotiroidizm
II. Hipertiroidizm
III. Rikets
IV. Cushing sendromu
Yukarıdaki sistemik durumlardan hangilerinde dişlerin ağız ortamına sürmesinde belirgin bir **gecikme** beklenir?
Doğru Şık (C): I ve III
Açıklama: Kemik gelişim hızının yavaşladığı Hipotiroidizm, mineralizasyon defekti olan Rikets ve Hipofosfatazya gibi hastalıklarda diş sürmesi gecikir (I ve III). Buna karşın, tiroid hormonunun fazla olduğu Hipertiroidizmde erken (prematür) erüpsiyon görülürken, Cushing sendromunda da glukokortikoid mekanizmalarına bağlı dişlerin erken sürmesi beklenebilir. Sürme gecikmesi metabolizmanın ve anabolik sürecin yavaşladığı hastalıklara özgüdür.

---

### ÇİFT 9 (Benzerlik: 0.80)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

---

### ÇİFT 10 (Benzerlik: 0.79)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

---

### ÇİFT 11 (Benzerlik: 0.79)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 12 (Benzerlik: 0.79)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 13 (Benzerlik: 0.79)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

---

### ÇİFT 14 (Benzerlik: 0.79)

**Soru 1 (ID: 9ba1ae4e-85db-470e-912b-52a08b9c3cf4)**
Soru Kökü: Endokrin sistem hastalıklarında dişlerde görülen genel gelişimsel ve radyografik anormallikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (B): Mine insizal kenarlarında aşırı atrisyon
Açıklama: Endokrin hastalıklarda sürmede hızlanma veya gecikme, hipoplazi, hipokalsifikasyon ve lamina dura belirginliğinin kaybı görülür. Aşınma (atrisyon) lokal faktörlere bağlı mekanik bir kayıptır ve endokrin sistemin doğrudan bir bulgusu olarak belirtilmez.

**Soru 2 (ID: f71f1f95-d933-4420-82e9-f02bd49c7cfd)**
Soru Kökü: Endokrin sistem hastalıklarında izlenen genel radyografik çene özelliklerinden biri **değildir**?
Doğru Şık (A): Lamina dura belirginliğinde artış
Açıklama: Endokrin hastalıklarında kemik boyutu, şekli, kortikal ve trabeküler yapısı değişir; ancak dişlerde lamina dura belirginliğinin artışı değil, aksine kaybı izlenir. Diğer şıklardaki kemiksel değişiklikler, sistemik endokrin patolojilerin temel radyolojik belirteçleridir.

---

### ÇİFT 15 (Benzerlik: 0.79)

**Soru 1 (ID: 6c719faa-87e9-4f86-b840-dcd979c0ec31)**
Soru Kökü: Osteomalazya hastalarının radyografik incelemesinde çene kemiklerinde trabekül sayısında izlenen spesifik istatistiksel eğilim Tablo 13'e göre hangisidir?
Doğru Şık (E): Nadiren azalma
Açıklama: Yetişkinlerde görülen D vitamini eksikliğinde (osteomalazya), kemik kütlesi daha önce oluştuğu için rikets kadar şiddetli çene bulguları vermez ve trabekül sayısında sadece 'nadiren azalma' izlenir. Çene kemiklerinde trabekülasyonda yaygın (sıklıkla) azalma çocukluk çağı varyantı olan rikets'te görülür. Granüler patern ise bu metabolik bozukluğun bir parçası değildir.

**Soru 2 (ID: fa4f81b5-b8b1-45dc-8716-8654c98180bd)**
Soru Kökü: Rikets (raşitizm) hastalarında çene kemiklerinin kansellöz kısmındaki trabekül yoğunluğu değerlendirildiğinde, Tablo 13'e göre trabekül sayısında nasıl bir değişim gözlenir?
Doğru Şık (A): Sayısal azalma
Açıklama: Yetersiz mineralizasyon nedeniyle rikets hastalarının çene kemiklerindeki kansellöz yapıda trabekül dansitesi, kalınlığı ve sayısında belirgin azalma saptanır. Hastalığın geç evrelerinde dişler kemik desteğini kaybedecek kadar trabeküler kayıp yaşanabilir; ancak granüler patern bu hastalığın klasik bir bulgusu değildir. Sayısal artma (osteopetrozis) gibi kemik yoğunluğunun arttığı tablolarda izlenir.

---

### ÇİFT 16 (Benzerlik: 0.79)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

---

### ÇİFT 17 (Benzerlik: 0.78)

**Soru 1 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

**Soru 2 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

---

### ÇİFT 18 (Benzerlik: 0.78)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

---

### ÇİFT 19 (Benzerlik: 0.78)

**Soru 1 (ID: 764fb1ed-2f91-4a98-bdfc-dfe85a527c1b)**
Soru Kökü: Beslenme yetersizliği nedeniyle kliniğe getirilen 1.5 yaşındaki bir bebekte kafatası kemiklerindeki yumuşaklık (kraniyo-tabes) sonucu yattığı yöne doğru düzleşme geliştiği fark edilmiştir. Rikets tanısı alan bu hastanın kraniyal muayenesinde saptanması beklenen spesifik şekil bozukluğu aşağıdakilerden hangisidir?
Doğru Şık (D): Pariyetal kemiklerde düzleşme ve frontal şişkinlik
Açıklama: Raşitik (Rikets) çocuklarda kalsifiye olamamış yumuşak kafa kemiklerinin yerçekimine maruz kalmasıyla yassılaşan kısımlarda pariyetal düzleşme, kompansatuar olarak ise frontal kemiklerde şişkinlik (bossing) gözlenir. Hair on end ve zigomatik çıkıntı çeldiricileri yanlıştır, zira bu bulgular kemik iliği hiperplazisine bağlı genişleme yapan anemi sendromlarında (Orak hücreli anemi ve Talasemi) izlenir. Bu hastalarda fontanellerin geç kapanması da klasik kraniyal bulgudur.

**Soru 2 (ID: a8ab1e94-f40f-4b18-b733-bff3ae2c5a10)**
Soru Kökü: Bebeklik döneminde kalsiyum emiliminin bozulmasına bağlı olarak görülen raşitizm (rikets) hastalığında, kafatası kemiklerindeki kalsifikasyon yetersizliğinin 'kraniyotabes' adı verilen yumuşaklık yaratması sonucu, bebeklerde radyolojik/klinik olarak gözlenen tipik kafatası deformitesi aşağıdakilerden hangisidir?
Doğru Şık (C): Bebeklerin yattıkları yöne doğru parietalde düzleşme ve frontal şişkinlik
Açıklama: Riketsli bebeklerde kalsifiye olamayan esnek kemik yapısı (kraniyotabes) nedeniyle, yerçekiminin etkisiyle kafatasının yattığı bölgesi (genellikle parietal veya oksipital) düzleşirken, basıncın ittiği frontal kemik bölgelerinde reaktif şişkinlik (bossing) meydana gelir. Hair-on-end (A) anemilerde, pamuk atığı (B) pagette, Wormian kemikler (E) hipotiroidizm/osteogenezis imperfektada izlenir.

---

### ÇİFT 20 (Benzerlik: 0.78)

**Soru 1 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

**Soru 2 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

---

### ÇİFT 21 (Benzerlik: 0.78)

**Soru 1 (ID: 88f78318-3d6f-4c7c-9d78-15c8c2e74e98)**
Soru Kökü: Aşağıdakilerden hangisi çocukluk çağı hipotiroidizm (kretinizm) hastalarında, çene-yüz ve kafa kaidesi bölgesinde karşılaşılan radyografik bulgulardan biri **değildir**?
Doğru Şık (D): Diş gelişim hızında artma ve erken erüpsiyon paterni
Açıklama: Hipotiroidizmde (kretinizm) tüm anatomik süreçlerde olduğu gibi dişlerin gelişim ve sürme hızlarında yavaşlama/gecikme vardır; diş gelişiminde artma ve erken erüpsiyon hipertiroidizmin karakteristik bulgusudur. Kısa kökler, lamina dura kalınlaşması, wormian kemik üretimi ve eksternal kök rezorpsiyonları kretinizm tablosunun beklenen radyografik sonuçlarıdır.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 22 (Benzerlik: 0.78)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

---

### ÇİFT 23 (Benzerlik: 0.77)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: cb5d34dd-366e-46d2-9163-5bcdf0c1c3b3)**
Soru Kökü: Kırk beş yaşında erkek hasta, makroglossi, alt çenede Sınıf III iskeletsel prognati ve dişler arası diastemalarla kliniğe başvuruyor. Radyografide mandibula ramus ile gövde açısının arttığı tespit ediliyor. Yetişkin dönem hiperpituitarizm (Akromegali) ile uyumlu bu tabloda, özellikle posterior bölgede hangi dental sürme anomalisinin görülmesi en olasıdır?
Doğru Şık (D): Posterior dişlerde süper-erüpsiyon
Açıklama: Akromegali hastalarında büyüme hormonu fazlalığına bağlı olarak mandibular kemik büyümesi devam eder ve vertikal alveoler kemik boyutu artar. Tablo 14'te de belirtildiği üzere, bu boyutsal artışı telafi etmek ve oklüzyonu sağlamak adına posterior dişlerde süper-erüpsiyon (aşırı sürme) ile birlikte hipersementoz karakteristiktir. Ankiloz veya gömüklük durumu bu tablonun patofizyolojisiyle çelişir.

---

### ÇİFT 24 (Benzerlik: 0.77)

**Soru 1 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 25 (Benzerlik: 0.77)

**Soru 1 (ID: 15c182d9-3581-4016-96db-8d6231a29685)**
Soru Kökü: Çocukluk döneminde başlayan hipofiz bezi disfonksiyonlarının iskelet sistemi üzerine etkileri incelendiğinde; büyüme hormonunun aşırı salgılanması gigantizme, yetersiz salgılanması ise cüceliğe (dwarfizm) yol açmaktadır. Hipofiz yetmezliğine bağlı dwarfizm izlenen bir hastada aşağıdaki maksillofasiyal bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): Dişlerin pulpa odaları ve apikal foramenlerinde anormal genişlik
Açıklama: Hipofiz hormon yetersizliğine bağlı cücelik (dwarfizm/akondroplazi) sendromlarında fiziksel gelişimle birlikte diş gelişimi de orantılı olarak duraksar. Çeneler olması gerekenden çok küçüktür (çapraşıklık yapar, prognati yapmaz). Gelişimin yavaş olması nedeniyle dişlerin apikal foramenlerinin kapanması ve sekonder dentin yapımı gecikir; bu da radyograflarda pulpa odalarının ve apikal foramenlerin belirgin şekilde anormal derecede daha geniş görünmesine neden olur.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 26 (Benzerlik: 0.77)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 27 (Benzerlik: 0.77)

**Soru 1 (ID: 85e1bb6d-f98c-40c3-8fe4-8d7c5c937661)**
Soru Kökü: Gövde oranları normal ancak çeneleri gelişimsel olarak yaşına göre oldukça küçük olan ve "cücelik (dwarfizm)" tanısı almış on yaşındaki hastanın (hipopituitarizm) dental gelişimi hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (E): Daimi dişlerin kronları normal boyutlardadır ancak sürmelerinde gecikme görülür.
Açıklama: Hipopituitarizm hastalarında diş gelişim hızı düşüktür; süt dişlerinin düşmesi birkaç yıl gecikebilir ve daimi dişlerin sürmesi de gecikir. Ancak dişlerin kron boyutları normaldir, sorun çenelerin, özellikle mandibulanın küçük kalmasıdır. Küçük çene ve normal boyuttaki diş kronları şiddetli çapraşıklık ile maloklüzyonlara sebep olur.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 28 (Benzerlik: 0.77)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 29 (Benzerlik: 0.77)

**Soru 1 (ID: 6680fc58-7c4f-49de-b236-dbe16e6cccef)**
Soru Kökü: Kemiğin histolojik olarak normal olduğu ancak genel kemik kütlesinin azaldığı osteoporoz tablosunda, postmenopozal bir hastanın alt çene korteksinde ve kemik dansitesinde hangi değişim gözlenir?
Doğru Şık (A): Dansitede belirgin azalma
Açıklama: Osteoporoz, kemik yapım-yıkım döngüsünde yıkımın baskın olması sonucu generalize kemik kütlesinde (dansitesinde) belirgin azalma ile karakterizedir. Mandibula inferior korteksinde incelme ve lamina durada seyrelme bu azalmanın radyografik kanıtlarıdır. Fokal sklerotik alanlar (kemik adacıkları) veya dansite artışı osteoporotik fizyolojiye tamamen terstir.

**Soru 2 (ID: e74ce7c8-1743-4832-9b3d-292ba934b08f)**
Soru Kökü: Postmenopozal dönemdeki bir kadın hasta, minör bir travma sonrası gelişen mandibula fraktürüyle kliniğe başvuruyor. Panoramik radyografide inferior mandibular kortekste belirgin incelme saptanıyor. Biyopsi sonucu kemiğin mikroskobik/histolojik yapısının normal olduğu ancak toplam kemik kütlesinin azaldığı rapor edildiğine göre, bu patolojinin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik yapım ve yıkım döngüsündeki hücresel dengesizlik
Açıklama: Osteoporoz, kemik organik matriksinin (histolojik yapısının) normal olduğu, ancak osteoblastik yapım ile osteoklastik yıkım arasındaki dengenin yıkım lehine bozulmasıyla kemik kütlesinin jeneralize azaldığı durumdur. D vitamini eksikliği çeldiricisi yanlıştır çünkü D vitamini eksikliğinde histolojik yapı normal kalmaz, matriks kalsifiye olamadığı için defektif (osteoid) doku birikir (osteomalazi/rikets). Mandibular kortikal incelme bu hastalarda en önemli radyografik göstergelerden biridir.

---

### ÇİFT 30 (Benzerlik: 0.77)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

---

### ÇİFT 31 (Benzerlik: 0.77)

**Soru 1 (ID: 88f78318-3d6f-4c7c-9d78-15c8c2e74e98)**
Soru Kökü: Aşağıdakilerden hangisi çocukluk çağı hipotiroidizm (kretinizm) hastalarında, çene-yüz ve kafa kaidesi bölgesinde karşılaşılan radyografik bulgulardan biri **değildir**?
Doğru Şık (D): Diş gelişim hızında artma ve erken erüpsiyon paterni
Açıklama: Hipotiroidizmde (kretinizm) tüm anatomik süreçlerde olduğu gibi dişlerin gelişim ve sürme hızlarında yavaşlama/gecikme vardır; diş gelişiminde artma ve erken erüpsiyon hipertiroidizmin karakteristik bulgusudur. Kısa kökler, lamina dura kalınlaşması, wormian kemik üretimi ve eksternal kök rezorpsiyonları kretinizm tablosunun beklenen radyografik sonuçlarıdır.

**Soru 2 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

---

### ÇİFT 32 (Benzerlik: 0.77)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 33 (Benzerlik: 0.77)

**Soru 1 (ID: 4d893071-77ae-4f58-ae9d-f9402266cca9)**
Soru Kökü: Metabolik kemik hastalıklarına sahip iki farklı çocuk hastadan birincisinde 'süt kesici dişlerinin kök rezorpsiyonu olmaksızın spontan erken dökülmesi', ikincisinde ise 'sağlam (çürüksüz) dişlerde genişlemiş pulpa boynuzlarına bağlı spontan periapikal apseler' saptanmıştır. Bu klinik senaryolara göre, birinci ve ikinci hastanın en olası ayırıcı tanıları sırasıyla aşağıdakilerden hangisidir?
Doğru Şık (B): Hipofosfatazya - Hipofosfatemi
Açıklama: Süt dişlerinin travma veya fizyolojik kök rezorpsiyonu olmaksızın erken dökülmesi (özellikle kesiciler), alkalen fosfataz eksikliği ile seyreden hipofosfatazya sendromunun pathognomonik majör bulgusudur. Buna karşın dişlerin pulpa boynuzlarının mine-dentin sınırına kadar uzanarak çürük olmaksızın mikroorganizma invazyonuna (spontan periapikal apseler) yol açması, D vitamini dirençli rikets olan hipofosfatemi hastalığının en belirgin ayırıcı komplikasyonudur.

**Soru 2 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

---

### ÇİFT 34 (Benzerlik: 0.77)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 35 (Benzerlik: 0.77)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: ba7868fa-9937-4994-88d9-c4cc90b9216a)**
Soru Kökü: Tablo 13 referans alındığında, çene kemiklerinde genel olarak kemik dansitesi azalmasına rağmen 'nadiren artma' (osteoskleroz) bulgusunun da raporlanabildiği sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Renal osteodistrofi
Açıklama: Renal osteodistrofi kompleks bir metabolik hastalıktır ve fasiyal kemiklerde 'tuz-biber' görüntüsü yaratan osteolitik ve osteosklerotik bölgeleri aynı anda barındırabilir. Bu nedenle Tablo 13'te kemik dansitesinin temel olarak azaldığı ancak 'nadiren arttığı' belirtilir. Osteoporoz ve Cushing sendromunda ise sadece dansite azalması mevcuttur, osteosklerotik odak görülmez.

---

### ÇİFT 36 (Benzerlik: 0.77)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

---

### ÇİFT 37 (Benzerlik: 0.77)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

---

### ÇİFT 38 (Benzerlik: 0.77)

**Soru 1 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 39 (Benzerlik: 0.77)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 40 (Benzerlik: 0.77)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

---

### ÇİFT 41 (Benzerlik: 0.77)

**Soru 1 (ID: 53376849-5ba9-449e-b09a-90f2f65af7ed)**
Soru Kökü: Sekiz yaşındaki erkek çocuğu kliniğe diş çapraşıklığı şikayeti ile getirilmiştir. Hastanın gövde boyutu normal görünmekte iken, kollarının ve bacaklarının orantısız bir biçimde kısa olduğu, başının ise gövde oranına göre normalden büyük olduğu dikkatinizi çekmiştir. Bu yapısal özellikler dikkate alındığında hastadaki en olası durum aşağıdakilerden hangisidir?
Doğru Şık (D): Akondroplazi
Açıklama: Gövdenin normal büyüklükte olduğu ancak kol ve bacakların kısa, başın ise normalden büyük (orantısız cücelik) olduğu tablo, cüceliğin en sık rastlanan formu olan akondroplazinin klasik tanımıdır. Hipofizer cücelikte ise tüm vücut oranları korunmuştur (orantılı cücelik). Talasemi majörde baş şekli değişebilir (mongoloid görünüm) ancak ekstremite kısalığı spesifik bir özellik değildir.

**Soru 2 (ID: 59dbbcb0-d1b7-4165-9fe6-5ec3aa1688b7)**
Soru Kökü: On iki yaşında erkek hasta, yaşıtlarına göre boy kısalığı ve çeneler arası uyumsuzluk şikayetiyle ortodonti kliniğine başvurmuştur. Çocuğun ekstremite oranları (kol/bacak) gövdesine göre normaldir ancak iskeleti genel olarak çok küçüktür. Sefalometrik analizde maksillanın normalden küçük, mandibulanın ise maksilladan daha da küçük ve geri pozisyonda olduğu belirlenmiştir. Bu klinik tablonun altında yatan en olası endokrin/gelişimsel bozukluk aşağıdakilerden hangisidir?
Doğru Şık (A): Hipopituitarizm (Hipofizer Cücelik)
Açıklama: Vücut oranlarının normal kalmasına rağmen hastanın genel iskelet sisteminin küçük olması ve mandibulanın maksillaya oranla belirgin bir şekilde geride kalarak mikrognati yaratması hipopituitarizm (dwarfizm) için karakteristiktir. Akondroplazide ekstremiteler gövdeye göre çok daha kısadır ve baş orantısız büyüktür. Bu orantılı (simetrik) büyüme geriliği tablosu, doğrudan hipofizden salınan büyüme hormonunun yetersizliğine işaret eder.

---

### ÇİFT 42 (Benzerlik: 0.77)

**Soru 1 (ID: 635187cb-9809-4970-99f4-6d91a14c9bc8)**
Soru Kökü: Çeşitli endokrin hastalıkların genel kemik dansitesine ve diş sürme paternlerine etkileri bağlamında yapılan eşleştirmelerden;
I. Hipotiroidizm -> Gecikmiş diş sürmesi
II. Hiperparatiroidizm -> Lamina dura belirginliğinde kayıp
III. Hipertiroidizm -> Generalize kemik dansitesinde sklerotik artış
IV. Hipopituitarizm -> Diş germlerinin (özellikle 3. molar) oluşmaması
Yukarıdakilerden hangileri doğrudur?
Doğru Şık (C): I, II ve IV
Açıklama: Hipotiroidizm (miksödem) bazal metabolizmayı yavaşlatarak dişlerin sürmesini geciktirir (I doğru). Hiperparatiroidizm aşırı kemik rezorpsiyonu ile lamina dura kaybı yapar (II doğru). Hipopituitarizmde iskeletsel dwarifizm ile birlikte 3. molar diş germlerinin hiç oluşmayabildiği sendromik dentisyon defektleri görülür (IV doğru). Ancak hipertiroidizm kemik dansitesinde sklerotik artış yapmaz; metabolizmayı aşırı hızlandırarak kemik döngüsünü bozar ve kortikal incelmelerle karakterize sekonder osteoporoza neden olur (III yanlış).

**Soru 2 (ID: 6a3f617e-006e-4ea7-912e-9eb9c0c8758a)**
Soru Kökü: Endokrin sistem hastalıklarının diş sürme zamanlarına olan etkileri değerlendirildiğinde;
I. Hipertiroidizm
II. Hipopituitarizm
III. Hipotiroidizm
IV. Cushing sendromu
Yukarıdaki hastalıklardan hangileri klinik olarak diş sürmesinde **hızlanma (erken sürme)** ile karakterizedir?
Doğru Şık (E): I ve IV
Açıklama: Metabolizma hızını artıran veya hiperaktiviteye neden olan endokrinopatiler genellikle diş sürmesini hızlandırır. Hipertiroidizmde artmış tiroksine bağlı erken sürme izlenirken, Cushing sendromunda glukokortikoid fazlalığı dişlerin erken sürmesine (prematür erüpsiyon) yol açar. Buna karşın metabolizmayı ve büyümeyi yavaşlatan hipotiroidizm, hipoparatiroidizm ve hipopituitarizm gibi durumlar diş gelişimini duraklatarak sürme gecikmesine neden olur.

---

### ÇİFT 43 (Benzerlik: 0.76)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 44 (Benzerlik: 0.76)

**Soru 1 (ID: 1cd0131e-7813-4850-8ceb-ae3f02558dc7)**
Soru Kökü: Sistemik metabolik hastalıkların kemik dansitesine etkisi değerlendirildiğinde, çene kemiklerinde belirgin dansite azalması oluşturması **en az olası** hastalık hangisidir?
Doğru Şık (B): Hipoparatiroidizm
Açıklama: Hipertiroidizm, Hipofosfatazya, Cushing sendromu ve Rickets tabloları kemik formasyonunu bozarak veya yıkımını artırarak kemik dansitesinde net azalmaya neden olur. Ancak hipoparatiroidizmde kalsiyum mobilizasyonu durduğu için dansitede azalma izlenmez; aksine Tablo 13'e göre nadiren artma (osteoskleroz) gözlenebilir.

**Soru 2 (ID: fa9c9929-ab45-4807-aa71-5f5f4ebf7c75)**
Soru Kökü: Sistemik metabolik kemik hastalıklarının çeneler üzerindeki radyografik etkileri incelendiğinde; çenelerin genel boyutunda bir değişiklik olmaksızın, trabekül yapısında belirgin granülerleşme ve generalize kemik dansitesinde azalma ile karakterize olan endokrin kökenli hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Hiperparatiroidizm
Açıklama: Tablo 13 kemik bulgularına göre; hiperparatiroidizmde çene boyutunda büyüme ya da küçülme olmaz, ancak osteoklastik aktivitenin artışına bağlı olarak kemik dansitesi azalır ve kafatası dahil kemiklerde granüler bir görünüm ortaya çıkar. Hipoparatiroidizmde kemik dansitesi nadiren artabilirken, osteopetroziste genel bir artış mevcuttur. Akondroplazi ve hipotiroidizmde ise çene boyutlarında belirgin bir küçülme saptanır.

---

### ÇİFT 45 (Benzerlik: 0.76)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: 7d9008da-0977-481b-8622-4276b2c0a567)**
Soru Kökü: Büyüme çağında D vitamini metabolizma defekti olan Rikets (raşitizm) hastalarının iskelet sistemi radyografik bulguları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Çene kemiklerindeki kansellöz kısımda trabekül sayısı ve dansitesi artmıştır.
Açıklama: Rikets hastalarında kemik mineralizasyonu zayıf olduğu için çene kemiklerinin kansellöz kısmında trabekül sayısı, kalınlığı ve dansitesi artmaz, tam tersine azalır (generalize osteoporoz). Yeşil ağaç kırıkları çeldiricisi rikets için doğru bir bulgudur; esnek kalan az kalsifiye kemik tam kırılmak yerine yeşil bir dal gibi esneyerek çatlar. Dental bölgede lamina dura kayıpları ve folikül sınırlarında silinme şiddetli olgularda diş desteğini tehlikeye atar.

---

### ÇİFT 46 (Benzerlik: 0.76)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 47 (Benzerlik: 0.76)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 48 (Benzerlik: 0.76)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 49 (Benzerlik: 0.76)

**Soru 1 (ID: 8f1a0878-04bc-4347-8218-ad43b5f05fbe)**
Soru Kökü: Aşağıdaki sistemik hastalıklardan hangisinde, mineralizasyon defektleri ve granüler trabeküler değişikliklerle birlikte çene boyutlarında 'artma (genişleme)' beklenir?
Doğru Şık (E): Renal osteodistrofi
Açıklama: Renal osteodistrofi (kronik böbrek yetmezliği sekeli), KIBT ve klinik görüntülerinde maksilla ve mandibulada ekspansiyon (genişleme) ve kemik boyutlarında artma ile karakterize olabilir. Hipopituitarizm ve hipotiroidizm çene boyutlarında küçülmeye neden olurken, rikets veya osteoporoziste çene boyutunda bir değişiklik beklenmez.

**Soru 2 (ID: eaa4eacb-bb2f-4251-bf51-82f9146b4c2c)**
Soru Kökü: Sistemik patolojilerin çene boyutları üzerindeki etkisi değerlendirildiğinde, aşağıdaki hastalıklardan hangisinin radyografik olarak boyutlarda bir artışa (genişlemeye) yol açması **beklenmez**?
Doğru Şık (D): Cushing sendromu
Açıklama: Hiperpituitarizm (akromegali) direkt mandibula boyutunu artırır, renal osteodistrofi ve osteopetrozis kemik ekspansiyonuna yol açar, orak hücreli anemi ise kemik iliği hiperplazisiyle üst çeneyi artırır. Ancak Cushing sendromunda sadece kemik yıkımı ve dansite azalması izlenir, çene boyutlarında makroskobik bir artış saptanmaz.

---

### ÇİFT 50 (Benzerlik: 0.76)

**Soru 1 (ID: 15c182d9-3581-4016-96db-8d6231a29685)**
Soru Kökü: Çocukluk döneminde başlayan hipofiz bezi disfonksiyonlarının iskelet sistemi üzerine etkileri incelendiğinde; büyüme hormonunun aşırı salgılanması gigantizme, yetersiz salgılanması ise cüceliğe (dwarfizm) yol açmaktadır. Hipofiz yetmezliğine bağlı dwarfizm izlenen bir hastada aşağıdaki maksillofasiyal bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): Dişlerin pulpa odaları ve apikal foramenlerinde anormal genişlik
Açıklama: Hipofiz hormon yetersizliğine bağlı cücelik (dwarfizm/akondroplazi) sendromlarında fiziksel gelişimle birlikte diş gelişimi de orantılı olarak duraksar. Çeneler olması gerekenden çok küçüktür (çapraşıklık yapar, prognati yapmaz). Gelişimin yavaş olması nedeniyle dişlerin apikal foramenlerinin kapanması ve sekonder dentin yapımı gecikir; bu da radyograflarda pulpa odalarının ve apikal foramenlerin belirgin şekilde anormal derecede daha geniş görünmesine neden olur.

**Soru 2 (ID: 85e1bb6d-f98c-40c3-8fe4-8d7c5c937661)**
Soru Kökü: Gövde oranları normal ancak çeneleri gelişimsel olarak yaşına göre oldukça küçük olan ve "cücelik (dwarfizm)" tanısı almış on yaşındaki hastanın (hipopituitarizm) dental gelişimi hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (E): Daimi dişlerin kronları normal boyutlardadır ancak sürmelerinde gecikme görülür.
Açıklama: Hipopituitarizm hastalarında diş gelişim hızı düşüktür; süt dişlerinin düşmesi birkaç yıl gecikebilir ve daimi dişlerin sürmesi de gecikir. Ancak dişlerin kron boyutları normaldir, sorun çenelerin, özellikle mandibulanın küçük kalmasıdır. Küçük çene ve normal boyuttaki diş kronları şiddetli çapraşıklık ile maloklüzyonlara sebep olur.

---

### ÇİFT 51 (Benzerlik: 0.76)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: f4bd6d9a-f7d4-477d-98ae-29a885221b02)**
Soru Kökü: Akromegali hastalarında kafa tabanı ve kraniyofasiyal komplekste karşılaşılan radyografik değişiklikler arasında aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Frontal sinüs başta olmak üzere paranazal sinüslerde aplazi ve daralma
Açıklama: Akromegali hastalığında kraniyal kemiklerdeki osteoblastik aktivite artışıyla supraorbital çıkıntılar belirginleşir ve altındaki frontal sinüsler dahil paranazal sinüsler aşırı derecede pnömatize olur (genişler). Sinüs gelişiminde yetersizlik hipotiroidizm (kretinizm) gibi hipometabolik durumlarda izlenir.

---

### ÇİFT 52 (Benzerlik: 0.76)

**Soru 1 (ID: 74fc207f-f136-4261-97a0-00b6cb22984e)**
Soru Kökü: Tablo 14'te belirtilen sistemik hastalıkların dental bulguları karşılaştırıldığında, hipokalsifikasyon görülmesine rağmen diş hipoplazisi gelişiminin **en az olası** (nadir) olduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis hastalarında zayıf kalsifikasyon (hipokalsifikasyon) yaygın görülmesine karşın, ameloblast veya odontoblast matriks sekresyonunun çökmesiyle oluşan belirgin diş hipoplazisi 'nadir' olarak izlenir. Hipofosfatazya ve rikets hastalarında hem hipokalsifikasyon hem de hipoplazi birlikte sık görülürken, osteopetroziste sert doku hacminden çok mineral yoğunluğu hedeflenir. Diş anatomik formu korunsa da doku kalitesi oldukça zayıftır.

**Soru 2 (ID: 822cd981-2d05-4929-b11d-2c5845e70555)**
Soru Kökü: Tablo verileri ve fizyopatolojik mekanizmalara göre, sistemik kemik metabolizma hastalıkları dentin ve minenin sertleşme ve olgunlaşma aşamalarını etkileyerek hipokalsifikasyon yaratabilirler. Aşağıdaki hastalıklardan hangisinin dentisyon üzerinde hipokalsifikasyon yapıcı bir sekonder etkisi **yoktur**?
Doğru Şık (B): Osteoporozis
Açıklama: Diş dokuları bir kez mineralize olduktan sonra (özellikle mine ve dentin) kemik gibi kalsiyum deposu olarak dolaşıma geri katılmazlar. Rikets, hipofosfatemi, hipofosfatazya, renal osteodistrofi ve osteopetrozis dişlerin GELİŞİM aşamasında kalsiyum/fosfor dengesini bozarak zayıf mineralize (hipokalsifiye/hipoplazik) dişler oluştururlar. Osteoporozis ise yaşlılık/menopoz sonrasında (dişler çoktan oluştuktan sonra) var olan kemiği eritir, dolayısıyla diş anatomisinde hipokalsifikasyon yapmaz.

---

### ÇİFT 53 (Benzerlik: 0.76)

**Soru 1 (ID: 6c719faa-87e9-4f86-b840-dcd979c0ec31)**
Soru Kökü: Osteomalazya hastalarının radyografik incelemesinde çene kemiklerinde trabekül sayısında izlenen spesifik istatistiksel eğilim Tablo 13'e göre hangisidir?
Doğru Şık (E): Nadiren azalma
Açıklama: Yetişkinlerde görülen D vitamini eksikliğinde (osteomalazya), kemik kütlesi daha önce oluştuğu için rikets kadar şiddetli çene bulguları vermez ve trabekül sayısında sadece 'nadiren azalma' izlenir. Çene kemiklerinde trabekülasyonda yaygın (sıklıkla) azalma çocukluk çağı varyantı olan rikets'te görülür. Granüler patern ise bu metabolik bozukluğun bir parçası değildir.

**Soru 2 (ID: cae6bc1b-d36e-41f6-88a0-009f936ccd56)**
Soru Kökü: Renal osteodistrofi hastalarında çene kemiklerindeki trabekül yapısı incelendiğinde, Tablo 13'e göre granüler patern ile birlikte trabekül sayısında hangi iki durum izlenebilir?
Doğru Şık (C): Azalma ve nadiren artış
Açıklama: Renal osteodistrofi mikst karakterli bir patoloji olduğu için radyografide trabekül sayısında genellikle azalma görülmekle birlikte, sklerotik yanıtın ön plana çıktığı bölgelerde 'nadiren artış' da izlenebilir. Bu bulgular eşliğinde kemik yapısı granüler (tuz-biber) bir izlenim verir. Tek tip bir yıkım (sadece azalma) veya hiperplazi tablosu bu hastalığın kompleks doğasını yansıtmaz.

---

### ÇİFT 54 (Benzerlik: 0.76)

**Soru 1 (ID: 1006a5f4-0dc1-490f-9190-4d2ed8c5df2d)**
Soru Kökü: Progresif sistemik sklerozis (skleroderma) tanısı almış bir hastanın oral ve perioral muayenesinde aşağıdaki vasküler ve mukozal bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (E): Dudak ve mukozada belirgin telenjiektaziler
Açıklama: Skleroderma (progresif sistemik sklerozis) hastalarında mikrostomi ve ıslık çizgilerine ek olarak, deri ve mukozalardaki küçük kan damarlarının genişlemesi sonucu dudaklarda ve intraoral dokularda belirgin telenjiektaziler görülür. Mukoza solukluğu ve dil papillası düzleşmesi orak hücreli aneminin tipik bulgusuyken, sklerodermada vasküler yatak hasarına bağlı fokal kırmızı lezyonlar (telenjiektaziler) ayırt edicidir. Pigmentasyon veya lökoplaki sklerodermaya özgü primer bir klinik tablo değildir.

**Soru 2 (ID: 5fa1acf7-3d23-4ce3-86e2-5c636751836e)**
Soru Kökü: Progresif sistemik sklerozis (skleroderma) hastalığının oral ve maksillofasiyal bulgularıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Periodontal ligament aralığının genişlemesi dişlerde aşırı mobiliteye yol açar.
Açıklama: Skleroderma radyografisinde tipik olarak tüm kök çevresinde veya koronal kısımlarda periodontal ligament (PDL) genişlemesi saptanır. Ancak klinik olarak bu genişleme dişlerde bir patolojik mobiliteye veya sallanmaya yol açmaz. Mobilite yokluğu, bu hastalığı travma veya periodontitis tablosundan ayıran en güçlü ipucudur. Diğer tüm şıklarda belirtilen erozyon, mikrostomi, kserostomi ve telenjiektazi skleroderma patofizyolojisiyle uyumludur.

---

### ÇİFT 55 (Benzerlik: 0.76)

**Soru 1 (ID: 52a71068-b55a-4cbd-aa98-f0f95b3cc5fa)**
Soru Kökü: Tablo 13'e göre, kemik dansitesini etkilemesine rağmen çene kemiklerindeki trabeküler yapının sayısında veya morfolojisinde istatistiksel olarak bir değişim yaratmayan hastalık hangisidir?
Doğru Şık (E): Hipertiroidizm
Açıklama: Hipertiroidizm kemik döngüsünü hızlandırıp total kemik dansitesinde azalmaya neden olsa da, Tablo 13 verilerinde trabekül yapısında nicel (artma/azalma) veya nitel (granüler) bir değişim yaratmadığı belirtilmiştir. Osteoporozis, osteomalazya ve renal osteodistrofi gibi tablolar ise trabeküler ağı doğrudan zayıflatır veya sayısını değiştirir.

**Soru 2 (ID: ba7868fa-9937-4994-88d9-c4cc90b9216a)**
Soru Kökü: Tablo 13 referans alındığında, çene kemiklerinde genel olarak kemik dansitesi azalmasına rağmen 'nadiren artma' (osteoskleroz) bulgusunun da raporlanabildiği sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Renal osteodistrofi
Açıklama: Renal osteodistrofi kompleks bir metabolik hastalıktır ve fasiyal kemiklerde 'tuz-biber' görüntüsü yaratan osteolitik ve osteosklerotik bölgeleri aynı anda barındırabilir. Bu nedenle Tablo 13'te kemik dansitesinin temel olarak azaldığı ancak 'nadiren arttığı' belirtilir. Osteoporoz ve Cushing sendromunda ise sadece dansite azalması mevcuttur, osteosklerotik odak görülmez.

---

### ÇİFT 56 (Benzerlik: 0.76)

**Soru 1 (ID: c6b75d19-2346-457d-bbf4-f70d37340f88)**
Soru Kökü: Diyabetli hastaların oral ve radyografik bulguları incelendiğinde, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Çenelerde diyabete özgü patognomonik bir kemik rezorpsiyon paterni izlenir.
Açıklama: Diyabet hastalarının radyografik muayenelerinde çenelerde veya dişlerde diyabete özgü (spesifik/karakteristik) bir bulgu veya patognomonik bir kemik rezorpsiyon paterni yoktur. Diyabeti olmayan bir hastadaki periodontal yıkım radyografisi ile diyabetli bir hastanın radyografisi görsel olarak ayırt edilemez. Diğer şıklarda yer alan tükürük glikoz artışı, hücresel immünitede bozulma ve kserostomi diyabetin kanıtlanmış oral komplikasyonlarıdır.

**Soru 2 (ID: e01c5fae-78d5-483a-8fba-9ffe7326b927)**
Soru Kökü: Diabetes mellitus hastalarında izlenen sistemik ve oral klinik bulgular ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Kan kalsiyum seviyelerinde belirgin artış (hiperkalsemi) izlenir.
Açıklama: Diabetes mellitusun karakteristik triadı poliüri, polidipsi ve polifajidir; kan kalsiyum seviyelerini doğrudan değiştiren bir metabolik kemik hastalığı değildir. Hiperkalsemi çeldiricisi yanlıştır; uzun süreli hiperkalsemi hiperparatiroidizmin patognomonik bir bulgusudur. Hastalarda immünolojik yanitin bozulmasına bağlı gecikmiş yara iyileşmesi ve şiddetli ketoasidoz vakalarında nefeste aseton kokusu görülmesi klasik diyabet bulgularıdır.

---

### ÇİFT 57 (Benzerlik: 0.76)

**Soru 1 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 58 (Benzerlik: 0.76)

**Soru 1 (ID: 51809fbb-1e06-4088-a000-d023e84ff5eb)**
Soru Kökü: Talasemi majör tanılı bir hastada; frontal ve parietal kemiklerde genişleme, zigomatik kemiklerde çıkıntı, 'rodent-like' (kemirgen) yüz görünümü ve sefalometrik radyografide aplastik maksiller sinüs saptanmıştır. Çene ve yüz kemiklerindeki bu deformasyonların kökeninde yatan temel fizyopatolojik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Kronik anemiye ikincil olarak gelişen kompanzatuvar kemik iliği hiperplazisi
Açıklama: Talasemi hastalarında kronik ve şiddetli seyreden anemiye yanıt olarak vücut, eritropoietin üretimi için kemik iliğini kompanzatuvar olarak uyarır ve kemik iliği ileri derecede hiperplaziye uğrar. Fasiyal kemiklerde ve çenelerde (özellikle maksilla) süngerimsi dokunun bu yönde masif genişlemesi kemik korteksini inceltir, maksiller sinüs pnömatizasyonunu engeller (aplastik sinüs) ve 'rodent-like' yüz deformitesine neden olur. Demir birikimi ise endokrin ve parotis disfonksiyonlarını açıklar.

**Soru 2 (ID: b3437016-493b-4af9-b64c-ee2067b57502)**
Soru Kökü: Talasemide yüz kemiklerinde görülen deformiteler klinik tablonun önemli bir patognomonik parçasıdır. Bu hastalarda 'mongoloid görünüm' olarak tanımlanan kraniyofasiyal fenotipin oluşmasından esas olarak hangi iskeletsel bölümlerin genişlemesi sorumludur?
Doğru Şık (D): Frontal ve parietal kemikler
Açıklama: Talasemideki kemik iliği hiperplazisi, kraniyal kubbeyi oluşturan yassı kemiklerde masif genişlemeye neden olur. Özellikle frontal (alın) ve parietal (yan) kemiklerin dışa doğru genişlemesi, hastanın kafa yapısında mongoloid görünüme yol açar. Oksipital veya kondiler büyümeler daha çok akromegali gibi endokrin sendromlarda yüz morfolojisini etkilerken, talaseminin hedef kitlesi maksilla, zigoma, frontal ve parietal spongiyöz dokudur.

---

### ÇİFT 59 (Benzerlik: 0.76)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

---

### ÇİFT 60 (Benzerlik: 0.76)

**Soru 1 (ID: 18a51d97-a292-4c6a-bd06-efcfe259bb3a)**
Soru Kökü: Kemik yapım ve yıkım döngüsündeki dengesizlik nedeniyle kemik kitlesinde jeneralize azalma gösteren postmenopozal osteoporozis vakalarında (Tablo 14), periodontal desteği sağlayan radyografik anatomik bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Lamina durada belirgin incelme
Açıklama: Osteoporoziste kemiğin histolojik yapısı normal olmasına rağmen total kütlesi azalmıştır. Radyograflarda bu durum, özellikle mandibula inferior korteksi gibi sınırlar ve dişi saran alveol kemiği duvarı olan lamina duranın incelmesi olarak izlenir. Lamina durada skleroz veya kalınlaşma (osteopetrozis vb. hastalıkların bulgusudur) osteoporotik defekt tablosuna terstir.

**Soru 2 (ID: 6680fc58-7c4f-49de-b236-dbe16e6cccef)**
Soru Kökü: Kemiğin histolojik olarak normal olduğu ancak genel kemik kütlesinin azaldığı osteoporoz tablosunda, postmenopozal bir hastanın alt çene korteksinde ve kemik dansitesinde hangi değişim gözlenir?
Doğru Şık (A): Dansitede belirgin azalma
Açıklama: Osteoporoz, kemik yapım-yıkım döngüsünde yıkımın baskın olması sonucu generalize kemik kütlesinde (dansitesinde) belirgin azalma ile karakterizedir. Mandibula inferior korteksinde incelme ve lamina durada seyrelme bu azalmanın radyografik kanıtlarıdır. Fokal sklerotik alanlar (kemik adacıkları) veya dansite artışı osteoporotik fizyolojiye tamamen terstir.

---

### ÇİFT 61 (Benzerlik: 0.76)

**Soru 1 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 62 (Benzerlik: 0.76)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 63 (Benzerlik: 0.76)

**Soru 1 (ID: 69b0eb4a-f821-475a-bd51-1c7dc02f2502)**
Soru Kökü: Hipertiroidizm (tirotoksikoz) sendromuna sahip olan hastaların ağız içi muayenelerinde, sağlıklı bireylere kıyasla daha yaygın periodontal doku kaybı profili gözlenmektedir. Bu hastalardaki diş eti hastalığının agresif seyretmesine yatkınlık yaratan ana iskeletsel/radyografik patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoporoz nedeniyle alveoler kortikal sınırlarda incelme yaşanması
Açıklama: Hipertiroidizm (tirotoksikoz) hastalarında artan metabolizma hızı kemik döngüsünü (turnover) etkileyerek radyograflarda da izlenebilen generalize osteoporoza ve kortikal sınırlarda incelmeye neden olur. Tükürükte glikoz artışı diyabete, periodontal ligament genişlemesi ve mikrostomi ise sklerodermaya özgüdür. Kemik yapısındaki bu osteoporotik zayıflama, en ufak bir enflamatuar yanıtta dahi ciddi kemik kaybıyla sonuçlanan periodontal problemlere davetiye çıkarır.

**Soru 2 (ID: 7a455332-3921-48d0-9586-cff13ddb6c2f)**
Soru Kökü: Tirotoksikoz (Graves hastalığı) tanısı bulunan ve taşikardi şikayetiyle başvuran bir hastanın panoramik radyografisinde, aşağıdaki dental veya iskeletsel bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (D): Diş gelişim hızında artma ve erken sürme
Açıklama: Hipertiroidizmde artmış tiroksin sekresyonuna bağlı olarak bazal metabolizma hızı artar; bu durum diş gelişim hızında ivmelenmeye, dişlerin erken sürmesine ve süt dişi köklerinin erken rezorpsiyonuna yol açar. Artmış metabolizma aynı zamanda osteoporoza neden olarak kortikal sınırlarda skleroz değil, aksine incelme meydana getirir. Sürme gecikmesi ve sklerotik korteks genellikle metabolizmanın yavaşladığı hipotiroidizm olgularında beklenir.

---

### ÇİFT 64 (Benzerlik: 0.75)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 65 (Benzerlik: 0.75)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

---

### ÇİFT 66 (Benzerlik: 0.75)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

---

### ÇİFT 67 (Benzerlik: 0.75)

**Soru 1 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 68 (Benzerlik: 0.75)

**Soru 1 (ID: 6a738bf1-6459-4b6a-b1df-8c3037b761e7)**
Soru Kökü: On iki yaşında boy kısalığı şikayetiyle pediatri kliniğinde tetkik edilen bir çocuğun kan tahlillerinde düşük kalsiyum ve yüksek fosfat saptanmasına rağmen, parathormon (PTH) seviyesi tamamen normal bulunmuştur. Hedef hücre reseptörlerinde defekt olan bu 'Psödohipoparatiroidizm' olgusunda, iskelet sisteminde bu boy kısalığına neden olan temel patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Kemik epifizlerinin (büyüme kıkırdaklarının) erken kapanması
Açıklama: Psödohipoparatiroidizmde hormon düzeyi normal olmasına rağmen böbrek ve kemik hücrelerindeki reseptörler hormona yanıt veremez. Bu genetik defektin en tipik iskelet bulgusu, bazen kemik epifizlerinin erken kapanması sonucu ortaya çıkan orantısız kısa boy (cücelik benzeri) görünümüdür.

**Soru 2 (ID: 8feb7c4b-9636-4d60-9bcc-7b72c2b104c0)**
Soru Kökü: Psödohipoparatiroidizm tablosunda serum parathormon (PTH) düzeyi yüksek veya normal seyretmesine rağmen hastanın hipokalsemik kalarak kemik bulguları sergilemesinin hücresel düzeydeki kök nedeni (root-cause) aşağıdakilerden hangisidir?
Doğru Şık (E): Kemik ve böbrek gibi hedef doku hücrelerinin reseptörlerindeki genetik defekt nedeniyle hormona direnç geliştirmesi
Açıklama: Psödohipoparatiroidizm, paratiroid bezinden hormon üretiminin yetersizliği değil, hormonun bağlandığı hedef dokuların (böbrek, kemik) genetik bir reseptör veya sinyal iletimi (G-protein) defekti nedeniyle hormona direnç göstermesi (yanıtsızlık) durumudur.

---

### ÇİFT 69 (Benzerlik: 0.75)

**Soru 1 (ID: 8f1a0878-04bc-4347-8218-ad43b5f05fbe)**
Soru Kökü: Aşağıdaki sistemik hastalıklardan hangisinde, mineralizasyon defektleri ve granüler trabeküler değişikliklerle birlikte çene boyutlarında 'artma (genişleme)' beklenir?
Doğru Şık (E): Renal osteodistrofi
Açıklama: Renal osteodistrofi (kronik böbrek yetmezliği sekeli), KIBT ve klinik görüntülerinde maksilla ve mandibulada ekspansiyon (genişleme) ve kemik boyutlarında artma ile karakterize olabilir. Hipopituitarizm ve hipotiroidizm çene boyutlarında küçülmeye neden olurken, rikets veya osteoporoziste çene boyutunda bir değişiklik beklenmez.

**Soru 2 (ID: fa9c9929-ab45-4807-aa71-5f5f4ebf7c75)**
Soru Kökü: Sistemik metabolik kemik hastalıklarının çeneler üzerindeki radyografik etkileri incelendiğinde; çenelerin genel boyutunda bir değişiklik olmaksızın, trabekül yapısında belirgin granülerleşme ve generalize kemik dansitesinde azalma ile karakterize olan endokrin kökenli hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Hiperparatiroidizm
Açıklama: Tablo 13 kemik bulgularına göre; hiperparatiroidizmde çene boyutunda büyüme ya da küçülme olmaz, ancak osteoklastik aktivitenin artışına bağlı olarak kemik dansitesi azalır ve kafatası dahil kemiklerde granüler bir görünüm ortaya çıkar. Hipoparatiroidizmde kemik dansitesi nadiren artabilirken, osteopetroziste genel bir artış mevcuttur. Akondroplazi ve hipotiroidizmde ise çene boyutlarında belirgin bir küçülme saptanır.

---

### ÇİFT 70 (Benzerlik: 0.75)

**Soru 1 (ID: 7a455332-3921-48d0-9586-cff13ddb6c2f)**
Soru Kökü: Tirotoksikoz (Graves hastalığı) tanısı bulunan ve taşikardi şikayetiyle başvuran bir hastanın panoramik radyografisinde, aşağıdaki dental veya iskeletsel bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (D): Diş gelişim hızında artma ve erken sürme
Açıklama: Hipertiroidizmde artmış tiroksin sekresyonuna bağlı olarak bazal metabolizma hızı artar; bu durum diş gelişim hızında ivmelenmeye, dişlerin erken sürmesine ve süt dişi köklerinin erken rezorpsiyonuna yol açar. Artmış metabolizma aynı zamanda osteoporoza neden olarak kortikal sınırlarda skleroz değil, aksine incelme meydana getirir. Sürme gecikmesi ve sklerotik korteks genellikle metabolizmanın yavaşladığı hipotiroidizm olgularında beklenir.

**Soru 2 (ID: 9d2a02f8-031f-4ada-a87f-77d7a0405e46)**
Soru Kökü: Metabolizma hızının arttığı tirotoksikoz (Graves hastalığı) vakalarında osteoporoza sekonder olarak dişi çevreleyen kemik dokuda karakteristik olarak hangi radyografik bulgu saptanır?
Doğru Şık (A): Lamina durada incelme
Açıklama: Hipertiroidizm hastalarında tiroksin artışına bağlı genel metabolizma hızlanması ve hücresel turnover artışı izlenir. Bu artmış metabolik aktivite osteoporoza neden olur. Radyograflarda osteoporoz nedeniyle alveol kemiğinde trabeküler kaybın yanı sıra kortikal sınırlarda ve dişin kemik yuvasındaki sert duvarı olan lamina durada belirgin incelme (Tablo 14) görülür.

---

### ÇİFT 71 (Benzerlik: 0.75)

**Soru 1 (ID: 18a51d97-a292-4c6a-bd06-efcfe259bb3a)**
Soru Kökü: Kemik yapım ve yıkım döngüsündeki dengesizlik nedeniyle kemik kitlesinde jeneralize azalma gösteren postmenopozal osteoporozis vakalarında (Tablo 14), periodontal desteği sağlayan radyografik anatomik bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Lamina durada belirgin incelme
Açıklama: Osteoporoziste kemiğin histolojik yapısı normal olmasına rağmen total kütlesi azalmıştır. Radyograflarda bu durum, özellikle mandibula inferior korteksi gibi sınırlar ve dişi saran alveol kemiği duvarı olan lamina duranın incelmesi olarak izlenir. Lamina durada skleroz veya kalınlaşma (osteopetrozis vb. hastalıkların bulgusudur) osteoporotik defekt tablosuna terstir.

**Soru 2 (ID: 7f3feb0d-8d1c-4539-a532-f6ecc0648a32)**
Soru Kökü: Altmış beş yaşında postmenopozal kadın hasta, diş çekimi öncesi rutin kontrol amacıyla kliniğe başvuruyor. Alınan panoramik radyografide, hastanın osteoporoz riskini veya varlığını en güçlü şekilde destekleyen spesifik anatomik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Mandibula inferior korteks kalınlığında incelme
Açıklama: Osteoporoz hastalarının panoramik radyografilerinde görsel olarak en erken ve spesifik saptanan kemik mineral yoğunluğu kaybı bulgusu, mandibula inferior korteksindeki (alt sınır) incelme ve osteopenik değişikliklerdir. Angulusta psödofraktür (Looser zonu) osteomalazide izlenirken, hipersementoz akromegali veya Paget hastalığı gibi durumlarda karşımıza çıkar. Kemik kütlesindeki azalma trabeküler ağı ve kortikal sınırları zayıflatır.

---

### ÇİFT 72 (Benzerlik: 0.75)

**Soru 1 (ID: 15c182d9-3581-4016-96db-8d6231a29685)**
Soru Kökü: Çocukluk döneminde başlayan hipofiz bezi disfonksiyonlarının iskelet sistemi üzerine etkileri incelendiğinde; büyüme hormonunun aşırı salgılanması gigantizme, yetersiz salgılanması ise cüceliğe (dwarfizm) yol açmaktadır. Hipofiz yetmezliğine bağlı dwarfizm izlenen bir hastada aşağıdaki maksillofasiyal bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): Dişlerin pulpa odaları ve apikal foramenlerinde anormal genişlik
Açıklama: Hipofiz hormon yetersizliğine bağlı cücelik (dwarfizm/akondroplazi) sendromlarında fiziksel gelişimle birlikte diş gelişimi de orantılı olarak duraksar. Çeneler olması gerekenden çok küçüktür (çapraşıklık yapar, prognati yapmaz). Gelişimin yavaş olması nedeniyle dişlerin apikal foramenlerinin kapanması ve sekonder dentin yapımı gecikir; bu da radyograflarda pulpa odalarının ve apikal foramenlerin belirgin şekilde anormal derecede daha geniş görünmesine neden olur.

**Soru 2 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

---

### ÇİFT 73 (Benzerlik: 0.75)

**Soru 1 (ID: 85e1bb6d-f98c-40c3-8fe4-8d7c5c937661)**
Soru Kökü: Gövde oranları normal ancak çeneleri gelişimsel olarak yaşına göre oldukça küçük olan ve "cücelik (dwarfizm)" tanısı almış on yaşındaki hastanın (hipopituitarizm) dental gelişimi hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (E): Daimi dişlerin kronları normal boyutlardadır ancak sürmelerinde gecikme görülür.
Açıklama: Hipopituitarizm hastalarında diş gelişim hızı düşüktür; süt dişlerinin düşmesi birkaç yıl gecikebilir ve daimi dişlerin sürmesi de gecikir. Ancak dişlerin kron boyutları normaldir, sorun çenelerin, özellikle mandibulanın küçük kalmasıdır. Küçük çene ve normal boyuttaki diş kronları şiddetli çapraşıklık ile maloklüzyonlara sebep olur.

**Soru 2 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

---

### ÇİFT 74 (Benzerlik: 0.75)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 75 (Benzerlik: 0.75)

**Soru 1 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

**Soru 2 (ID: cb5d34dd-366e-46d2-9163-5bcdf0c1c3b3)**
Soru Kökü: Kırk beş yaşında erkek hasta, makroglossi, alt çenede Sınıf III iskeletsel prognati ve dişler arası diastemalarla kliniğe başvuruyor. Radyografide mandibula ramus ile gövde açısının arttığı tespit ediliyor. Yetişkin dönem hiperpituitarizm (Akromegali) ile uyumlu bu tabloda, özellikle posterior bölgede hangi dental sürme anomalisinin görülmesi en olasıdır?
Doğru Şık (D): Posterior dişlerde süper-erüpsiyon
Açıklama: Akromegali hastalarında büyüme hormonu fazlalığına bağlı olarak mandibular kemik büyümesi devam eder ve vertikal alveoler kemik boyutu artar. Tablo 14'te de belirtildiği üzere, bu boyutsal artışı telafi etmek ve oklüzyonu sağlamak adına posterior dişlerde süper-erüpsiyon (aşırı sürme) ile birlikte hipersementoz karakteristiktir. Ankiloz veya gömüklük durumu bu tablonun patofizyolojisiyle çelişir.

---

### ÇİFT 76 (Benzerlik: 0.75)

**Soru 1 (ID: 81b0f304-d0f2-4d52-a96f-5f8a0b95a6c3)**
Soru Kökü: Hiperparatiroidizmin çok ilerlemiş evrelerinde diş hekimi radyografide diş köklerinin morfolojik olarak sağlam olmasına rağmen diğer dokulardan son derece keskin bir kontrastla ayrılarak aşırı düzeyde beyaz (radyoopak) göründüğünü fark eder. Bu optik illüzyonun radyolojik açıklaması aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik kemik kaybının çevresel alveol kemiğini tamamen radyolüsent hale getirip dişleri öne çıkarması
Açıklama: Hastalık sürecinde yüksek parathormon, kalsiyumu sadece alveolar kemikten rezerve eder, minenin ve dentinin kalsiyum metabolizması kemik gibi değişmez. Çevre kemik radyografide iyice siyah (radyolüsent) bir zemin oluşturduğu için, mineralize kalmaya devam eden dişler arka plana göre son derece radyoopak öne çıkar.

**Soru 2 (ID: dececf98-b751-466a-9e44-8d6dec27ddc0)**
Soru Kökü: Hiperparatiroidizm tanısı almış bir hastanın dental periapikal ve panoramik radyografik incelemesinde kortikal sınırların incelmesi ve lamina dura kaybına ek olarak diş köklerinde en sık aşağıdaki patolojilerden hangisi izlenebilir?
Doğru Şık (A): İnternal ve eksternal kök rezorpsiyonları
Açıklama: Hiperparatiroidizmde kemik yıkımından sorumlu olan osteoklastik aktivitenin sement ve dentin dokusunu da hedef alması sonucunda dişlerde sıklıkla internal ve eksternal kök rezorpsiyonları görülebilir. Hipersementoz ise daha çok akromegali veya tirotoksikoz gibi durumlarda beklenir.

---

### ÇİFT 77 (Benzerlik: 0.75)

**Soru 1 (ID: 054f395b-afc5-4e8d-b51e-6ae1ecbf2085)**
Soru Kökü: Rikets hastalığının şiddetli formlarında kemiklerde eğrilmeler ve O bacak deformitelerinin yanı sıra, panoramik radyografide dişi çevreleyen radyopatik yapıda da patolojik değişimler görülür. Tablo 14 verilerine göre bu bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Lamina durada incelme
Açıklama: Riketste kemik matriksinin (osteoid) üretilmesine rağmen kalsifiye olamaması sonucu trabeküller ve kortikal yapılar mineralden fakirleşir. Bu radyolojik olarak kemik dansitesinde azalma ve diş yuvasını sınırlayan radyopatik hat olan lamina duranın belirgin şekilde incelmesi veya şiddetli vakalarda kaybolması (Tablo 14) şeklinde yansır.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 78 (Benzerlik: 0.75)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 79 (Benzerlik: 0.75)

**Soru 1 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 80 (Benzerlik: 0.75)

**Soru 1 (ID: 15c182d9-3581-4016-96db-8d6231a29685)**
Soru Kökü: Çocukluk döneminde başlayan hipofiz bezi disfonksiyonlarının iskelet sistemi üzerine etkileri incelendiğinde; büyüme hormonunun aşırı salgılanması gigantizme, yetersiz salgılanması ise cüceliğe (dwarfizm) yol açmaktadır. Hipofiz yetmezliğine bağlı dwarfizm izlenen bir hastada aşağıdaki maksillofasiyal bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): Dişlerin pulpa odaları ve apikal foramenlerinde anormal genişlik
Açıklama: Hipofiz hormon yetersizliğine bağlı cücelik (dwarfizm/akondroplazi) sendromlarında fiziksel gelişimle birlikte diş gelişimi de orantılı olarak duraksar. Çeneler olması gerekenden çok küçüktür (çapraşıklık yapar, prognati yapmaz). Gelişimin yavaş olması nedeniyle dişlerin apikal foramenlerinin kapanması ve sekonder dentin yapımı gecikir; bu da radyograflarda pulpa odalarının ve apikal foramenlerin belirgin şekilde anormal derecede daha geniş görünmesine neden olur.

**Soru 2 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

---

### ÇİFT 81 (Benzerlik: 0.75)

**Soru 1 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 82 (Benzerlik: 0.75)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 83 (Benzerlik: 0.75)

**Soru 1 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 84 (Benzerlik: 0.75)

**Soru 1 (ID: 2f9558c6-91d9-46d0-8484-16f728b87fee)**
Soru Kökü: Renal osteodistrofi hastalarının panoramik radyografilerinde 'tuz-biber' görünümü ile birlikte periodontal aralığı çevreleyen yapılarda belirgin değişiklikler izlenir. Bu hastalarda lamina dura görünürlüğünde azalma veya kaybolmanın temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik sklerozu gelişmesi veya kemik dansitesindeki bölgesel değişimler
Açıklama: Renal osteodistrofide lamina duranın kaybolması, kemik sklerozu gelişmesi veya kemiğin radyografik görünürlüğünün azalması (osteolitik alanlar) sonucunda ortaya çıkar. Osteoklastik aktivitenin durması osteopetroziste görülürken, böbrek yetmezliğinde hiperparatiroidizm sekonder olarak kemik döngüsünü bozar. Çene kemiklerinde artan granüler yapı ve sklerotik odakların varlığı, normal lamina dura kretinin seçilebilmesini engeller.

**Soru 2 (ID: 827a3be6-9a8c-4f8d-9cc7-16d90c913b13)**
Soru Kökü: Kronik böbrek yetmezliği nedeniyle diyaliz tedavisi gören bir hastanın radyolojik incelemesinde, kafatası ve çene kemiklerinde izlenen 'tuz-biber (salt-and-pepper)' ve granüler trabeküler görünümün temel fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Böbrekten fosfor atılımının azalmasıyla gelişen hiperfosfatemi ve sekonder hiperparatiroidizm
Açıklama: Renal osteodistrofi (renal rikets) kronik böbrek yetmezliği olan hastalarda böbrekten fosfor atılımının azalması (hiperfosfatemi) ve sekonder olarak kalsiyum emiliminin düşmesi (hipokalsemi) sonucu gelişir. Bu mineral dengesizliği sekonder hiperparatiroidizmi tetikleyerek artmış osteoklastik kemik yıkımına, fasiyal kemiklerde litik/sklerotik 'tuz-biber' görünümüne ve lamina dura kayıplarına yol açar. Diğer hormonal mekanizmalar bu sürecin primer nedeni değildir.

---

### ÇİFT 85 (Benzerlik: 0.75)

**Soru 1 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 86 (Benzerlik: 0.75)

**Soru 1 (ID: 6784fd48-2705-447b-a4cc-841dc12cb8cd)**
Soru Kökü: Yirmi iki yaşındaki erkek hasta, çürük veya travma öyküsü olmayan mandibular birinci molar dişindeki akut ağrı şikayetiyle başvurmuştur. Hastanın anemnezinde çocukluktan beri süren karın ve eklem ağrısı krizleri, radyografisinde ise kortekste incelme ve kaba trabekülasyon izlenmiştir. Bu hastada gelişen asemptomatik pulpa nekrozunun en olası fizyopatolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Düşük oksijen basıncında eritrositlerin şekil değiştirerek pulpal mikrosirkülasyonu tıkaması
Açıklama: Orak hücreli anemide anormal (deoksijenize) hemoglobinler düşük oksijenli ortamda oraklaşarak mikrovasküler damarları tıkar; bu durum diş pulpasında iskemiye ve sekonder asemptomatik pulpa nekrozuna yol açar. Demir birikimi (hemosiderozis) talasemide parotisi etkilerken, nötrofil disfonksiyonu diyabete aittir. Pulpada infarktüs benzeri iskemik krizler bu kan hastalığının en önemli lokalizasyonlarından biridir.

**Soru 2 (ID: f8655fd8-eb8d-4315-b573-7f3fd73151c0)**
Soru Kökü: Orak hücreli anemi hastalarında dişlerde herhangi bir çürük, travma veya derin restorasyon bulunmamasına rağmen asemptomatik pulpa nekrozunun gelişebilmesinin temel klinik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Düşük oksijen basıncında hücrelerin oraklaşarak pulpal kan akımını engellemesi
Açıklama: Orak hücreli anemide kırmızı kan hücreleri düşük oksijen gerilimi altında karakteristik orak şeklini alır. Bu deforme hücreler küçük çaplı kapiller damarlarda (özellikle dişin pulpasını besleyen terminal damarlarda) mikrotrombüsler ve mikroenfarktüsler oluşturur. Kanlanması bozulan intakt diş pulpasında iskemi ve sonuç olarak asemptomatik nekroz tablosu gelişir. Genişlemiş pulpa boynuzları anemiyle değil hipofosfatemi ile ilişkilidir.

---

### ÇİFT 87 (Benzerlik: 0.75)

**Soru 1 (ID: 5c8c1d83-b57e-4729-8fde-723740746fda)**
Soru Kökü: 35 yaşında kadın hasta, taşikardi, sinirlilik ve ısı intoleransı şikayetiyle başvurmuştur. Hastanın Graves hastalığı öyküsü bulunmaktadır. Radyolojik incelemede, tüm çene kemik dansitesinde nasıl bir değişim beklenir?
Doğru Şık (C): Azalma
Açıklama: Hipertiroidizmde artmış bazal metabolizma ve tiroksin seviyesi kemik döngüsünü hızlandırarak kemik yapım-yıkım dengesini yıkım lehine bozar ve kemik dansitesinde azalmaya neden olur. Bu durum kortikal sınırlarda incelme ve generalize osteoporoz yaratır ancak granüler patern oluşturmaz. Değişiklik izlenmez distraktörü, kemik dansitesini etkilemeyen hipotiroidizm ile karıştıranları hedeflemektedir.

**Soru 2 (ID: 7a455332-3921-48d0-9586-cff13ddb6c2f)**
Soru Kökü: Tirotoksikoz (Graves hastalığı) tanısı bulunan ve taşikardi şikayetiyle başvuran bir hastanın panoramik radyografisinde, aşağıdaki dental veya iskeletsel bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (D): Diş gelişim hızında artma ve erken sürme
Açıklama: Hipertiroidizmde artmış tiroksin sekresyonuna bağlı olarak bazal metabolizma hızı artar; bu durum diş gelişim hızında ivmelenmeye, dişlerin erken sürmesine ve süt dişi köklerinin erken rezorpsiyonuna yol açar. Artmış metabolizma aynı zamanda osteoporoza neden olarak kortikal sınırlarda skleroz değil, aksine incelme meydana getirir. Sürme gecikmesi ve sklerotik korteks genellikle metabolizmanın yavaşladığı hipotiroidizm olgularında beklenir.

---

### ÇİFT 88 (Benzerlik: 0.75)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 89 (Benzerlik: 0.75)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

---

### ÇİFT 90 (Benzerlik: 0.75)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 91 (Benzerlik: 0.75)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

---

### ÇİFT 92 (Benzerlik: 0.75)

**Soru 1 (ID: 7981b751-0fde-4ef7-aeaf-821069a2e020)**
Soru Kökü: Osteoporoz hastalarının radyografik muayenesinde, kemik formasyonundaki azalmaya ikincil olarak trabekül yapısında Tablo 13'e göre hangi değişim saptanır?
Doğru Şık (C): Trabekül sayısında azalma
Açıklama: Osteoporozda trabeküler kemik hacmindeki kayıp, radyografik olarak trabekül sayısında, boyutunda ve kalınlığında azalma olarak yansır. Osteoporozda trabeküller incelir ve seyrekleşir ancak hiperparatiroidizm veya Cushing sendromunda izlenen karakteristik granüler yapı oluşmaz. Mozaik patern ise Paget hastalığına ait histolojik bir bulgudur.

**Soru 2 (ID: bf22c087-8c5a-4055-964f-1de88fcf6335)**
Soru Kökü: Hipofosfatemi hastalarında, trabekül sayısındaki azalmaya ek olarak kemik mikro-mimarisi Tablo 13'e göre hangi spesifik kalitatif özelliği sergiler?
Doğru Şık (C): Granüler trabeküler yapı
Açıklama: Hipofosfatemide yetersiz kalsifikasyon ve değişen kemik döngüsü sonucu çenelerde granüler trabeküler yapı izlenir. Bu granüler görünüm, osteoporotik kemik matriksinin tipik radyografik yansımasıdır. Dövülmüş bakır görünümü hipofosfatazyada kafatasında izlenirken, hipofosfatemik rikets çenede granüler formdadır.

---

### ÇİFT 93 (Benzerlik: 0.75)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 94 (Benzerlik: 0.75)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

---

### ÇİFT 95 (Benzerlik: 0.75)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: 6bab2a95-d12a-4a14-ad62-80880f67f6b2)**
Soru Kökü: Hipokalsemiye bağlı tetani ve kas krampları ile karakterize hipoparatiroidizm tablosunda, çene kemiklerinin radyografik incelmesinde kemik dansitesi açısından Tablo 13'e göre **en az olası** duruma rağmen nadiren de olsa hangi bulgu izlenebilir?
Doğru Şık (D): Nadiren artma
Açıklama: Hipoparatiroidizmde parathormon yetersizliği kalsiyum mobilizasyonunu durdurduğu için genellikle kemik dansitesinde belirgin bir değişiklik izlenmez. Ancak hedef doku yanıtına veya kronik kalsiyum/fosfat dengesizliğine bağlı olarak çene kemiklerinde 'nadiren artma' rapor edilmektedir. Generalize radyolüsensi (azalma) veya granüler yapı hiperparatiroidizmin karakteristik bulgularıdır ve bu hastalıkta görülmez.

---

### ÇİFT 96 (Benzerlik: 0.75)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

---

### ÇİFT 97 (Benzerlik: 0.75)

**Soru 1 (ID: 6ab57baf-8629-4766-8ffb-3e6b82d6464a)**
Soru Kökü: Osteopetrozis tanılı hastalarda diş çürüğüne karşı olan yüksek yatkınlık ve alveoler kemiğin avasküler yapısına bağlı sıkça gelişen lokal komplikasyonlar sonucunda aşağıdakilerden hangisinin görülmesi Tablo 14'e göre karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Osteopetrozisli hastalarda zayıf kalsifikasyona (hipokalsifikasyon) bağlı artan agresif çürükler ve kalınlaşmış, zayıf kanlanan kemikte kolayca yayılan şiddetli osteomiyelit tabloları erken diş kayıplarıyla sonuçlanır. Dişlerde ankiloz veya kalıcılık değil, enfeksiyonlara ve cerrahi komplikasyonlara sekonder mecburi çekimler/kayıplar ön plandadır. Tedavisi zor olan bu çene enfeksiyonları sıklıkla hiperbarik oksijen ve agresif antibiyotik desteği gerektirir.

**Soru 2 (ID: 81e10db3-3afd-49c4-9f96-1a0aa5aa6678)**
Soru Kökü: Osteopetrozis sendromunda, generalize kemik yoğunluğu artışı ve osteoklast disfonksiyonu nedeniyle kemiklerin sürekli yapılıp yıkılamaması tablosu mevcuttur. Tablo 14 verilerine dayanarak, bu histopatolojik kemik yapısının diş sürmesi süreci üzerindeki majör klinik etkisi aşağıdakilerden hangisidir?
Doğru Şık (E): Diş sürmesinde gecikme
Açıklama: Osteopetrozis hastalığında anormal artmış kemik dansitesi ve osteoklastların rezorpsiyon yapamaması, diş folikülünün sürme sırasında kemik içinde kendine yol açmasını engelleyerek diş sürmesinde belirgin gecikmeye neden olur. Prematür veya hızlanmış diş sürmesi hipertiroidizm gibi metabolizmanın çok hızlandığı durumlarda görülür. Bu rezorpsiyon güçlüğü, diş gömüklüğü riskini artırmakla beraber kök/kanal malformasyonlarına da zemin hazırlar.

---

### ÇİFT 98 (Benzerlik: 0.75)

**Soru 1 (ID: 7981b751-0fde-4ef7-aeaf-821069a2e020)**
Soru Kökü: Osteoporoz hastalarının radyografik muayenesinde, kemik formasyonundaki azalmaya ikincil olarak trabekül yapısında Tablo 13'e göre hangi değişim saptanır?
Doğru Şık (C): Trabekül sayısında azalma
Açıklama: Osteoporozda trabeküler kemik hacmindeki kayıp, radyografik olarak trabekül sayısında, boyutunda ve kalınlığında azalma olarak yansır. Osteoporozda trabeküller incelir ve seyrekleşir ancak hiperparatiroidizm veya Cushing sendromunda izlenen karakteristik granüler yapı oluşmaz. Mozaik patern ise Paget hastalığına ait histolojik bir bulgudur.

**Soru 2 (ID: cae6bc1b-d36e-41f6-88a0-009f936ccd56)**
Soru Kökü: Renal osteodistrofi hastalarında çene kemiklerindeki trabekül yapısı incelendiğinde, Tablo 13'e göre granüler patern ile birlikte trabekül sayısında hangi iki durum izlenebilir?
Doğru Şık (C): Azalma ve nadiren artış
Açıklama: Renal osteodistrofi mikst karakterli bir patoloji olduğu için radyografide trabekül sayısında genellikle azalma görülmekle birlikte, sklerotik yanıtın ön plana çıktığı bölgelerde 'nadiren artış' da izlenebilir. Bu bulgular eşliğinde kemik yapısı granüler (tuz-biber) bir izlenim verir. Tek tip bir yıkım (sadece azalma) veya hiperplazi tablosu bu hastalığın kompleks doğasını yansıtmaz.

---

### ÇİFT 99 (Benzerlik: 0.75)

**Soru 1 (ID: 9ba1ae4e-85db-470e-912b-52a08b9c3cf4)**
Soru Kökü: Endokrin sistem hastalıklarında dişlerde görülen genel gelişimsel ve radyografik anormallikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (B): Mine insizal kenarlarında aşırı atrisyon
Açıklama: Endokrin hastalıklarda sürmede hızlanma veya gecikme, hipoplazi, hipokalsifikasyon ve lamina dura belirginliğinin kaybı görülür. Aşınma (atrisyon) lokal faktörlere bağlı mekanik bir kayıptır ve endokrin sistemin doğrudan bir bulgusu olarak belirtilmez.

**Soru 2 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

---

### ÇİFT 100 (Benzerlik: 0.75)

**Soru 1 (ID: 85e1bb6d-f98c-40c3-8fe4-8d7c5c937661)**
Soru Kökü: Gövde oranları normal ancak çeneleri gelişimsel olarak yaşına göre oldukça küçük olan ve "cücelik (dwarfizm)" tanısı almış on yaşındaki hastanın (hipopituitarizm) dental gelişimi hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (E): Daimi dişlerin kronları normal boyutlardadır ancak sürmelerinde gecikme görülür.
Açıklama: Hipopituitarizm hastalarında diş gelişim hızı düşüktür; süt dişlerinin düşmesi birkaç yıl gecikebilir ve daimi dişlerin sürmesi de gecikir. Ancak dişlerin kron boyutları normaldir, sorun çenelerin, özellikle mandibulanın küçük kalmasıdır. Küçük çene ve normal boyuttaki diş kronları şiddetli çapraşıklık ile maloklüzyonlara sebep olur.

**Soru 2 (ID: b309abcb-de88-40c9-8a2b-2206ac1d4ffa)**
Soru Kökü: Büyüme hormonu eksikliğine bağlı olarak gelişen hipopituitarizm sendromunda, hastaların dental arklarında sıklıkla ortodontik düzensizlikler ve yer darlığı problemi gözlenir. Bu ortodontik tablonun ortaya çıkmasındaki birincil mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Diş boyutlarının normal olmasına rağmen çene boyutlarının küçük kalması
Açıklama: Hipopituitarizm sendromunda dişlerin kron büyüklükleri genetik olarak belirlenmiş normal boyutlarındadır, ancak maksilla ve özellikle mandibula küçük kaldığı için dental arkta yeterli yer bulunamaz, bu da çapraşıklığa ve maloklüzyonlara yol açar. Makrodonti izlenmez. Çapraşıklığın temel nedeni olan bu orantısızlık (normal diş - küçük kemik) iskeletsel büyüme eksikliğinin direkt sonucudur.

---

### ÇİFT 101 (Benzerlik: 0.75)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: c4163a70-7624-46de-b5b9-a6012b1029cd)**
Soru Kökü: Çocukluk çağında gelişen tiroid hormon eksikliği (kretinizm) hastalarının çene, kafa ve ekstremite kemiklerini ilgilendiren radyografik izlemlerinde aşağıdaki bulgulardan hangisi **görülmez**?
Doğru Şık (E): Kortikal sınırlarda diffüz incelme ve radyografik osteoporoz tablosu
Açıklama: Osteoporoz nedeniyle kortikal sınırlarda incelme, hipotiroidizmde değil tam tersi mekanizmayla çalışan ve kemik yapım-yıkım döngüsünü felte eden hipertiroidizm (tirotoksikoz), hiperparatiroidizm veya osteoporoz gibi tablolarda izlenir. Hipotiroidizm radyografilerinde lamina durada belirgin kalınlaşma görülür; epifizlerin geç kapanması, wormian kemikler ve kısa kökler teşhisi destekleyen en önemli büyüme geriliği verileridir.

---

### ÇİFT 102 (Benzerlik: 0.74)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 103 (Benzerlik: 0.74)

**Soru 1 (ID: 5c8c1d83-b57e-4729-8fde-723740746fda)**
Soru Kökü: 35 yaşında kadın hasta, taşikardi, sinirlilik ve ısı intoleransı şikayetiyle başvurmuştur. Hastanın Graves hastalığı öyküsü bulunmaktadır. Radyolojik incelemede, tüm çene kemik dansitesinde nasıl bir değişim beklenir?
Doğru Şık (C): Azalma
Açıklama: Hipertiroidizmde artmış bazal metabolizma ve tiroksin seviyesi kemik döngüsünü hızlandırarak kemik yapım-yıkım dengesini yıkım lehine bozar ve kemik dansitesinde azalmaya neden olur. Bu durum kortikal sınırlarda incelme ve generalize osteoporoz yaratır ancak granüler patern oluşturmaz. Değişiklik izlenmez distraktörü, kemik dansitesini etkilemeyen hipotiroidizm ile karıştıranları hedeflemektedir.

**Soru 2 (ID: 9d2a02f8-031f-4ada-a87f-77d7a0405e46)**
Soru Kökü: Metabolizma hızının arttığı tirotoksikoz (Graves hastalığı) vakalarında osteoporoza sekonder olarak dişi çevreleyen kemik dokuda karakteristik olarak hangi radyografik bulgu saptanır?
Doğru Şık (A): Lamina durada incelme
Açıklama: Hipertiroidizm hastalarında tiroksin artışına bağlı genel metabolizma hızlanması ve hücresel turnover artışı izlenir. Bu artmış metabolik aktivite osteoporoza neden olur. Radyograflarda osteoporoz nedeniyle alveol kemiğinde trabeküler kaybın yanı sıra kortikal sınırlarda ve dişin kemik yuvasındaki sert duvarı olan lamina durada belirgin incelme (Tablo 14) görülür.

---

### ÇİFT 104 (Benzerlik: 0.74)

**Soru 1 (ID: 51a912c6-1f2d-4a19-831d-18e35ad4d247)**
Soru Kökü: Gelişim çağındaki çocuklarda yetersiz tiroid hormonu salınımına bağlı ortaya çıkan hipotiroidizm (kretinizm) tablosunda, baş-boyun bölgesinin iskeletsel büyümesinde aşağıda belirtilen radyolojik bulgulardan hangisi tespit edilir?
Doğru Şık (B): Kafa tabanında ossifikasyon (kemikleşme) gecikmesi
Açıklama: Hipotiroidizm hastalarında metabolizma yavaşlamasına paralel olarak kemik gelişim ve olgunlaşma (ossifikasyon) süreci sekteye uğrar ve radyografik olarak kafa tabanında belirgin bir ossifikasyon gecikmesi izlenir. Diploik genişleme ve premaksiller protrüzyon talasemide, santral trabekül kaybı ve granüler görünüm hiperparatiroidizmde bulunur. Kafa kemiklerindeki bu yavaş kemikleşme hızı, aynı zamanda epifiz kapanma gecikmelerinin de sebebidir.

**Soru 2 (ID: 88f78318-3d6f-4c7c-9d78-15c8c2e74e98)**
Soru Kökü: Aşağıdakilerden hangisi çocukluk çağı hipotiroidizm (kretinizm) hastalarında, çene-yüz ve kafa kaidesi bölgesinde karşılaşılan radyografik bulgulardan biri **değildir**?
Doğru Şık (D): Diş gelişim hızında artma ve erken erüpsiyon paterni
Açıklama: Hipotiroidizmde (kretinizm) tüm anatomik süreçlerde olduğu gibi dişlerin gelişim ve sürme hızlarında yavaşlama/gecikme vardır; diş gelişiminde artma ve erken erüpsiyon hipertiroidizmin karakteristik bulgusudur. Kısa kökler, lamina dura kalınlaşması, wormian kemik üretimi ve eksternal kök rezorpsiyonları kretinizm tablosunun beklenen radyografik sonuçlarıdır.

---

### ÇİFT 105 (Benzerlik: 0.74)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 106 (Benzerlik: 0.74)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: 1cd0131e-7813-4850-8ceb-ae3f02558dc7)**
Soru Kökü: Sistemik metabolik hastalıkların kemik dansitesine etkisi değerlendirildiğinde, çene kemiklerinde belirgin dansite azalması oluşturması **en az olası** hastalık hangisidir?
Doğru Şık (B): Hipoparatiroidizm
Açıklama: Hipertiroidizm, Hipofosfatazya, Cushing sendromu ve Rickets tabloları kemik formasyonunu bozarak veya yıkımını artırarak kemik dansitesinde net azalmaya neden olur. Ancak hipoparatiroidizmde kalsiyum mobilizasyonu durduğu için dansitede azalma izlenmez; aksine Tablo 13'e göre nadiren artma (osteoskleroz) gözlenebilir.

---

### ÇİFT 107 (Benzerlik: 0.74)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: f71f1f95-d933-4420-82e9-f02bd49c7cfd)**
Soru Kökü: Endokrin sistem hastalıklarında izlenen genel radyografik çene özelliklerinden biri **değildir**?
Doğru Şık (A): Lamina dura belirginliğinde artış
Açıklama: Endokrin hastalıklarında kemik boyutu, şekli, kortikal ve trabeküler yapısı değişir; ancak dişlerde lamina dura belirginliğinin artışı değil, aksine kaybı izlenir. Diğer şıklardaki kemiksel değişiklikler, sistemik endokrin patolojilerin temel radyolojik belirteçleridir.

---

### ÇİFT 108 (Benzerlik: 0.74)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

---

### ÇİFT 109 (Benzerlik: 0.74)

**Soru 1 (ID: 9ec7babe-8a39-40be-8a5f-ad9658d4bb53)**
Soru Kökü: 50 yaşında kronik diyaliz hastasının panoramik radyografisinde maksilla ve mandibulada ekspansiyon ile lamina dura kaybı izlenmiştir. Bu hastanın trabeküler yapısı detaylı incelendiğinde Tablo 13'e göre hangi spesifik radyografik görünüm saptanır?
Doğru Şık (D): Granüler trabekül yapısı
Açıklama: Böbrek yetmezliğine bağlı renal osteodistrofi hastalarında çene trabekülleri granüler bir yapı (tuz-biber görüntüsü) alır. Hair-on-end orak hücreli anemide, dövülmüş bakır hipofosfatazyada, pamuk yumağı ise Paget hastalığında izlenirken, granüler yapı sekonder hiperparatiroidizm kökenli hastalıklarda spesifiktir.

**Soru 2 (ID: a0048fea-cb05-4784-933a-e9858ad1114d)**
Soru Kökü: Altmış yaşında hiperkalsemi ve yüksek alkalen fosfataz tablosu ile interne edilen hastada sefalometrik lateral kafa grafisi alınıyor. Radyoloğun kafatasında diploik trabekül kaybı ve kortikal tabanın ileri derecede incelmesiyle karakterize olarak tanımladığı spesifik görünüm aşağıdakilerden hangisidir?
Doğru Şık (B): Granüler (tuz-biber) görünüm
Açıklama: Hiperparatiroidizmde kemiklerden mineral çekilmesine bağlı olarak tüm kalvaryum santral (diploik) trabeküllerini kaybeder; dış kortikal tabanın incelmesiyle kafatası klasik 'granüler' bir görünüm alır. Hair-on-end talasemide, dövülmüş bakır hipofosfatazyada görülür.

---

### ÇİFT 110 (Benzerlik: 0.74)

**Soru 1 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 111 (Benzerlik: 0.74)

**Soru 1 (ID: 2f9558c6-91d9-46d0-8484-16f728b87fee)**
Soru Kökü: Renal osteodistrofi hastalarının panoramik radyografilerinde 'tuz-biber' görünümü ile birlikte periodontal aralığı çevreleyen yapılarda belirgin değişiklikler izlenir. Bu hastalarda lamina dura görünürlüğünde azalma veya kaybolmanın temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik sklerozu gelişmesi veya kemik dansitesindeki bölgesel değişimler
Açıklama: Renal osteodistrofide lamina duranın kaybolması, kemik sklerozu gelişmesi veya kemiğin radyografik görünürlüğünün azalması (osteolitik alanlar) sonucunda ortaya çıkar. Osteoklastik aktivitenin durması osteopetroziste görülürken, böbrek yetmezliğinde hiperparatiroidizm sekonder olarak kemik döngüsünü bozar. Çene kemiklerinde artan granüler yapı ve sklerotik odakların varlığı, normal lamina dura kretinin seçilebilmesini engeller.

**Soru 2 (ID: daf9ebbe-d850-40fb-b82a-4714315a851e)**
Soru Kökü: İleri derecede kronik böbrek fonksiyon kaybı olan bir hastada gelişen renal osteodistrofi bulguları ile paratiroid adenomuna bağlı gelişen primer hiperparatiroidizm tablosu radyografik olarak birbirine ciddi benzerlik gösterebilir. Aşağıdaki çene kemiği radyografik değişikliklerinden hangisi her iki sistemik hastalık için de spesifik ve ortak bir bulgudur?
Doğru Şık (A): Granüler trabeküler kemik yapısı ve lamina dura belirginliğinin kaybı
Açıklama: Renal osteodistrofi, kronik böbrek yetmezliğine bağlı fosfor atılımının bozulmasıyla gelişen hiperfosfatemi ve buna yanıt olarak üretilen aşırı parathormonun (sekonder hiperparatiroidizm) tablosudur. İster primer ister böbrek kaynaklı sekonder hiperparatiroidizm olsun, artan PTH hormonunun yarattığı artmış osteoklastik yıkım sonucunda çene kemiklerinde generalize lamina dura kaybı ve bulanık, buzlu cam benzeri granüler trabeküler görünüm her iki tabloda da ortak saptanan patognomonik radyografik işaretlerdir.

---

### ÇİFT 112 (Benzerlik: 0.74)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: 9ec7babe-8a39-40be-8a5f-ad9658d4bb53)**
Soru Kökü: 50 yaşında kronik diyaliz hastasının panoramik radyografisinde maksilla ve mandibulada ekspansiyon ile lamina dura kaybı izlenmiştir. Bu hastanın trabeküler yapısı detaylı incelendiğinde Tablo 13'e göre hangi spesifik radyografik görünüm saptanır?
Doğru Şık (D): Granüler trabekül yapısı
Açıklama: Böbrek yetmezliğine bağlı renal osteodistrofi hastalarında çene trabekülleri granüler bir yapı (tuz-biber görüntüsü) alır. Hair-on-end orak hücreli anemide, dövülmüş bakır hipofosfatazyada, pamuk yumağı ise Paget hastalığında izlenirken, granüler yapı sekonder hiperparatiroidizm kökenli hastalıklarda spesifiktir.

---

### ÇİFT 113 (Benzerlik: 0.74)

**Soru 1 (ID: 6bab2a95-d12a-4a14-ad62-80880f67f6b2)**
Soru Kökü: Hipokalsemiye bağlı tetani ve kas krampları ile karakterize hipoparatiroidizm tablosunda, çene kemiklerinin radyografik incelmesinde kemik dansitesi açısından Tablo 13'e göre **en az olası** duruma rağmen nadiren de olsa hangi bulgu izlenebilir?
Doğru Şık (D): Nadiren artma
Açıklama: Hipoparatiroidizmde parathormon yetersizliği kalsiyum mobilizasyonunu durdurduğu için genellikle kemik dansitesinde belirgin bir değişiklik izlenmez. Ancak hedef doku yanıtına veya kronik kalsiyum/fosfat dengesizliğine bağlı olarak çene kemiklerinde 'nadiren artma' rapor edilmektedir. Generalize radyolüsensi (azalma) veya granüler yapı hiperparatiroidizmin karakteristik bulgularıdır ve bu hastalıkta görülmez.

**Soru 2 (ID: bbf17920-94c7-41d4-be42-56610d4b815c)**
Soru Kökü: Hiperparatiroidizmde iskelet sisteminde görülen yaygın demineralizasyon süreci çenelere yansıdığında, radyografik değerlendirmede aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Tüm çene kemiklerinin dansitesinde artış
Açıklama: Hastalıkta yoğun osteoklastik aktivite sonucu iskelet sisteminde demineralizasyon gelişir, bu durum çene radyografilerine çene dansitesinde belirgin bir 'azalma' (radyolüsensi) olarak yansır. Kemik yoğunluğunda artış bu tablonun tam zıttıdır ve osteopetrozis gibi hastalıklarda görülür.

---

### ÇİFT 114 (Benzerlik: 0.74)

**Soru 1 (ID: 2f9558c6-91d9-46d0-8484-16f728b87fee)**
Soru Kökü: Renal osteodistrofi hastalarının panoramik radyografilerinde 'tuz-biber' görünümü ile birlikte periodontal aralığı çevreleyen yapılarda belirgin değişiklikler izlenir. Bu hastalarda lamina dura görünürlüğünde azalma veya kaybolmanın temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik sklerozu gelişmesi veya kemik dansitesindeki bölgesel değişimler
Açıklama: Renal osteodistrofide lamina duranın kaybolması, kemik sklerozu gelişmesi veya kemiğin radyografik görünürlüğünün azalması (osteolitik alanlar) sonucunda ortaya çıkar. Osteoklastik aktivitenin durması osteopetroziste görülürken, böbrek yetmezliğinde hiperparatiroidizm sekonder olarak kemik döngüsünü bozar. Çene kemiklerinde artan granüler yapı ve sklerotik odakların varlığı, normal lamina dura kretinin seçilebilmesini engeller.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 115 (Benzerlik: 0.74)

**Soru 1 (ID: 2978db96-cf82-4c50-ba8a-392e58b2f84c)**
Soru Kökü: Akromegali hastalarında tipik olarak izlenen sınıf III iskeletsel maloklüzyon tablosunun temel biyomekanik ve gelişimsel kökeni aşağıdakilerden hangisidir?
Doğru Şık (D): Mandibular kondiler büyümenin aşırı şekilde uyarılması
Açıklama: Sınıf III iskeletsel maloklüzyon, büyüme hormonunun (GH) mandibular kondildeki kıkırdak dokusunu sekonder olarak aşırı uyarması ve alt çenenin anteriora doğru yer değiştirmesi (prognati) sonucunda oluşur. Maksiller protrüzyon akromegalide değil, tam tersine talasemi gibi kemik iliği genişlemesi yapan anemi türlerinde (premaksilla protrüzyonu) görülür. Bu kontrolsüz kondiler büyüme, çeneler arası sagittal ilişkinin alt çene lehine bozulmasına zemin hazırlar.

**Soru 2 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

---

### ÇİFT 116 (Benzerlik: 0.74)

**Soru 1 (ID: 69b0eb4a-f821-475a-bd51-1c7dc02f2502)**
Soru Kökü: Hipertiroidizm (tirotoksikoz) sendromuna sahip olan hastaların ağız içi muayenelerinde, sağlıklı bireylere kıyasla daha yaygın periodontal doku kaybı profili gözlenmektedir. Bu hastalardaki diş eti hastalığının agresif seyretmesine yatkınlık yaratan ana iskeletsel/radyografik patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoporoz nedeniyle alveoler kortikal sınırlarda incelme yaşanması
Açıklama: Hipertiroidizm (tirotoksikoz) hastalarında artan metabolizma hızı kemik döngüsünü (turnover) etkileyerek radyograflarda da izlenebilen generalize osteoporoza ve kortikal sınırlarda incelmeye neden olur. Tükürükte glikoz artışı diyabete, periodontal ligament genişlemesi ve mikrostomi ise sklerodermaya özgüdür. Kemik yapısındaki bu osteoporotik zayıflama, en ufak bir enflamatuar yanıtta dahi ciddi kemik kaybıyla sonuçlanan periodontal problemlere davetiye çıkarır.

**Soru 2 (ID: a9322571-6535-47fd-957e-3c2edc89db25)**
Soru Kökü: Tablo 14 incelendiğinde, hipertiroidizm hastalarında gözlenen yüksek metabolik hızın neden olduğu osteoporotik kortikal incelme ve periodontal destek kaybı, aşağıdaki klinik sonuçlardan hangisine doğrudan zemin hazırlar?
Doğru Şık (E): Diş kaybı
Açıklama: Hipertiroidizmde çürüğe eğilim, osteoporoza bağlı kemik kaybı ve ilişkili periodontal problemler görülür. Bu faktörler birleştiğinde Tablo 14'te de spesifik olarak belirtildiği üzere hastada diş kaybı ("Evet") tablosu ortaya çıkar. Makrodonti veya süpernümerer diş gibi morfolojik veya sayısal gelişim anomalileri tiroid fonksiyon bozukluklarıyla ilişkili değildir.

---

### ÇİFT 117 (Benzerlik: 0.74)

**Soru 1 (ID: 67f3ed87-a89a-4efc-8de2-e777194e5f0a)**
Soru Kökü: 45 yaşında kadın hasta, tekrarlayan böbrek taşı ve kemik ağrıları şikayetiyle başvurmuştur. Radyografik incelemede çene kemiklerinde 'Brown tümör' ile uyumlu radyolüsensiler izlenmiştir. Tablo 13 referans alındığında, bu hastanın çene radyografisinde trabekül sayısında nasıl bir değişim beklenir?
Doğru Şık (B): Sayısal azalma
Açıklama: Hiperparatiroidizmde parathormon fazlalığına bağlı artmış osteoklastik aktivite kemik yıkımına yol açarak çene kemiklerinde trabekül sayısında sayısal azalmaya neden olur. Bu azalma, radyografide granüler bir yapı (tuz-biber görünümü) ile birlikte izlenir. En güçlü çeldirici olan nadiren artış, renal osteodistrofi gibi mikst patolojilerde izlenir, primer hiperparatiroidizmde görülmez.

**Soru 2 (ID: 6c719faa-87e9-4f86-b840-dcd979c0ec31)**
Soru Kökü: Osteomalazya hastalarının radyografik incelemesinde çene kemiklerinde trabekül sayısında izlenen spesifik istatistiksel eğilim Tablo 13'e göre hangisidir?
Doğru Şık (E): Nadiren azalma
Açıklama: Yetişkinlerde görülen D vitamini eksikliğinde (osteomalazya), kemik kütlesi daha önce oluştuğu için rikets kadar şiddetli çene bulguları vermez ve trabekül sayısında sadece 'nadiren azalma' izlenir. Çene kemiklerinde trabekülasyonda yaygın (sıklıkla) azalma çocukluk çağı varyantı olan rikets'te görülür. Granüler patern ise bu metabolik bozukluğun bir parçası değildir.

---

### ÇİFT 118 (Benzerlik: 0.74)

**Soru 1 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 119 (Benzerlik: 0.74)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: 67f3ed87-a89a-4efc-8de2-e777194e5f0a)**
Soru Kökü: 45 yaşında kadın hasta, tekrarlayan böbrek taşı ve kemik ağrıları şikayetiyle başvurmuştur. Radyografik incelemede çene kemiklerinde 'Brown tümör' ile uyumlu radyolüsensiler izlenmiştir. Tablo 13 referans alındığında, bu hastanın çene radyografisinde trabekül sayısında nasıl bir değişim beklenir?
Doğru Şık (B): Sayısal azalma
Açıklama: Hiperparatiroidizmde parathormon fazlalığına bağlı artmış osteoklastik aktivite kemik yıkımına yol açarak çene kemiklerinde trabekül sayısında sayısal azalmaya neden olur. Bu azalma, radyografide granüler bir yapı (tuz-biber görünümü) ile birlikte izlenir. En güçlü çeldirici olan nadiren artış, renal osteodistrofi gibi mikst patolojilerde izlenir, primer hiperparatiroidizmde görülmez.

---

### ÇİFT 120 (Benzerlik: 0.74)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

---

### ÇİFT 121 (Benzerlik: 0.74)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: 9a623075-2c0b-4e72-a544-5fda9d26739d)**
Soru Kökü: Çocukluk çağında D vitamini eksikliğine (Rikets) maruz kalmış hastanın dental ve radyografik tablosunda;
I. Mine hipoplazisi
II. Lamina durada incelme
III. Diş sürmesinde gecikme
bulgularından hangilerinin bir arada görülmesi beklenir?
Doğru Şık (E): I, II ve III
Açıklama: Rikets hastalarında kalsiyum eksikliğine bağlı olarak gelişmekte olan ameloblastların fonksiyonu bozulur (Mine hipoplazisi - Tablo 14). Aynı zamanda çevre kemik dokusu yeterli mineralizasyona uğrayamadığı için kortikal sınır ve lamina durada incelme veya silinme görülür. Kemik yapımındaki defekt diş folikülünün itici gücünü de zayıflatarak sürmede belirgin gecikmeye yol açar (Her 3 öncül de doğrudur).

---

### ÇİFT 122 (Benzerlik: 0.74)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 123 (Benzerlik: 0.74)

**Soru 1 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 124 (Benzerlik: 0.74)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: cb5d34dd-366e-46d2-9163-5bcdf0c1c3b3)**
Soru Kökü: Kırk beş yaşında erkek hasta, makroglossi, alt çenede Sınıf III iskeletsel prognati ve dişler arası diastemalarla kliniğe başvuruyor. Radyografide mandibula ramus ile gövde açısının arttığı tespit ediliyor. Yetişkin dönem hiperpituitarizm (Akromegali) ile uyumlu bu tabloda, özellikle posterior bölgede hangi dental sürme anomalisinin görülmesi en olasıdır?
Doğru Şık (D): Posterior dişlerde süper-erüpsiyon
Açıklama: Akromegali hastalarında büyüme hormonu fazlalığına bağlı olarak mandibular kemik büyümesi devam eder ve vertikal alveoler kemik boyutu artar. Tablo 14'te de belirtildiği üzere, bu boyutsal artışı telafi etmek ve oklüzyonu sağlamak adına posterior dişlerde süper-erüpsiyon (aşırı sürme) ile birlikte hipersementoz karakteristiktir. Ankiloz veya gömüklük durumu bu tablonun patofizyolojisiyle çelişir.

---

### ÇİFT 125 (Benzerlik: 0.74)

**Soru 1 (ID: 18a51d97-a292-4c6a-bd06-efcfe259bb3a)**
Soru Kökü: Kemik yapım ve yıkım döngüsündeki dengesizlik nedeniyle kemik kitlesinde jeneralize azalma gösteren postmenopozal osteoporozis vakalarında (Tablo 14), periodontal desteği sağlayan radyografik anatomik bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Lamina durada belirgin incelme
Açıklama: Osteoporoziste kemiğin histolojik yapısı normal olmasına rağmen total kütlesi azalmıştır. Radyograflarda bu durum, özellikle mandibula inferior korteksi gibi sınırlar ve dişi saran alveol kemiği duvarı olan lamina duranın incelmesi olarak izlenir. Lamina durada skleroz veya kalınlaşma (osteopetrozis vb. hastalıkların bulgusudur) osteoporotik defekt tablosuna terstir.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 126 (Benzerlik: 0.74)

**Soru 1 (ID: bf22c087-8c5a-4055-964f-1de88fcf6335)**
Soru Kökü: Hipofosfatemi hastalarında, trabekül sayısındaki azalmaya ek olarak kemik mikro-mimarisi Tablo 13'e göre hangi spesifik kalitatif özelliği sergiler?
Doğru Şık (C): Granüler trabeküler yapı
Açıklama: Hipofosfatemide yetersiz kalsifikasyon ve değişen kemik döngüsü sonucu çenelerde granüler trabeküler yapı izlenir. Bu granüler görünüm, osteoporotik kemik matriksinin tipik radyografik yansımasıdır. Dövülmüş bakır görünümü hipofosfatazyada kafatasında izlenirken, hipofosfatemik rikets çenede granüler formdadır.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 127 (Benzerlik: 0.74)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: beb85f6b-a19d-4cc7-afe5-f7c65914d290)**
Soru Kökü: Dört yaşında erkek çocuk hasta, bacaklarında parantez (O) şeklinde eğrilik ve diş sürmesinde gecikme şikayetiyle getiriliyor. Radyografik incelemede çene kemiklerinin kansellöz kısmında trabekül dansitesinde azalma ve uzun kemik epifizlerinde aşınma saptanıyor. Bu hastadaki sendromun etyolojisinde rol oynayan temel eksiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Aktif D vitamini metabolitinin (1,25 (OH)2 D) eksikliği
Açıklama: Bacaklarda O şeklinde eğrilik, uzun kemik epifizlerinde genişleme/aşınma ve diş sürmesinde gecikme tablosu çocukluk çağı rikets (raşitizm) hastalığının tipik özellikleridir. Rikets hastalığı, kalsiyumun bağırsaklardan emilmesi için zorunlu olan aktif D vitamini metabolitinin (1,25 (OH)2 D) eksikliği veya aktivite defektine bağlı olarak osteoid dokunun mineralize olamaması sonucu gelişir. Alkalen fosfataz eksikliği hipofosfatazyanın patogenezini açıklar.

---

### ÇİFT 128 (Benzerlik: 0.74)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 129 (Benzerlik: 0.74)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: cae6bc1b-d36e-41f6-88a0-009f936ccd56)**
Soru Kökü: Renal osteodistrofi hastalarında çene kemiklerindeki trabekül yapısı incelendiğinde, Tablo 13'e göre granüler patern ile birlikte trabekül sayısında hangi iki durum izlenebilir?
Doğru Şık (C): Azalma ve nadiren artış
Açıklama: Renal osteodistrofi mikst karakterli bir patoloji olduğu için radyografide trabekül sayısında genellikle azalma görülmekle birlikte, sklerotik yanıtın ön plana çıktığı bölgelerde 'nadiren artış' da izlenebilir. Bu bulgular eşliğinde kemik yapısı granüler (tuz-biber) bir izlenim verir. Tek tip bir yıkım (sadece azalma) veya hiperplazi tablosu bu hastalığın kompleks doğasını yansıtmaz.

---

### ÇİFT 130 (Benzerlik: 0.74)

**Soru 1 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 131 (Benzerlik: 0.74)

**Soru 1 (ID: 054f395b-afc5-4e8d-b51e-6ae1ecbf2085)**
Soru Kökü: Rikets hastalığının şiddetli formlarında kemiklerde eğrilmeler ve O bacak deformitelerinin yanı sıra, panoramik radyografide dişi çevreleyen radyopatik yapıda da patolojik değişimler görülür. Tablo 14 verilerine göre bu bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Lamina durada incelme
Açıklama: Riketste kemik matriksinin (osteoid) üretilmesine rağmen kalsifiye olamaması sonucu trabeküller ve kortikal yapılar mineralden fakirleşir. Bu radyolojik olarak kemik dansitesinde azalma ve diş yuvasını sınırlayan radyopatik hat olan lamina duranın belirgin şekilde incelmesi veya şiddetli vakalarda kaybolması (Tablo 14) şeklinde yansır.

**Soru 2 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

---

### ÇİFT 132 (Benzerlik: 0.74)

**Soru 1 (ID: f4bd6d9a-f7d4-477d-98ae-29a885221b02)**
Soru Kökü: Akromegali hastalarında kafa tabanı ve kraniyofasiyal komplekste karşılaşılan radyografik değişiklikler arasında aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Frontal sinüs başta olmak üzere paranazal sinüslerde aplazi ve daralma
Açıklama: Akromegali hastalığında kraniyal kemiklerdeki osteoblastik aktivite artışıyla supraorbital çıkıntılar belirginleşir ve altındaki frontal sinüsler dahil paranazal sinüsler aşırı derecede pnömatize olur (genişler). Sinüs gelişiminde yetersizlik hipotiroidizm (kretinizm) gibi hipometabolik durumlarda izlenir.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 133 (Benzerlik: 0.73)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: 66891f0c-7462-4101-aff7-f08db8b7bc65)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen yaygın 'granüler' veya 'tuz-biber' görünümü, kemik döngüsünün bozulduğu hastalıklarda kansellöz kemiğin karakteristik bir alterasyonudur. Aşağıdaki sistemik hastalıklardan hangisinin radyografik muayenesinde çenelerde granüler kemik paterni izlenmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis
Açıklama: Osteopetroziste osteoklastik yetmezliğe bağlı kemik rezorpsiyonu durur; bu da tüm trabeküllerin aşırı kalsifiye olmasına, kemik iliğinin kapanmasına ve radyografik olarak tamamen opak/masif (mermer) bir görünüme neden olur. Oysa Hiperparatiroidizm, Cushing, Renal osteodistrofi ve Hipofosfatemide kemik yıkımı ve ince reaktif yapım bir arada olduğu için trabeküller çok küçük, ince kumlu bir benekli yapı (granüler) kazanır.

---

### ÇİFT 134 (Benzerlik: 0.73)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

---

### ÇİFT 135 (Benzerlik: 0.73)

**Soru 1 (ID: 1abb92c7-edd7-4344-ac71-6720621826a2)**
Soru Kökü: Kortikosteroidlerin aşırı salınımı veya ekzojen tıbbi kullanımı sonucu gelişen Cushing sendromunda, diş yapıları içerisinde radyografik olarak aşağıdaki bulgulardan hangisinin izlenmesi en olasıdır?
Doğru Şık (A): Pulpa odasında mineral birikimine bağlı daralma
Açıklama: Cushing sendromunda glukokortikoid seviyesinin artmasına bağlı olarak kemik döngüsü baskılanırken, dişlerde sekonder mineral birikimine sekonder pulpa odalarında daralmalar izlenebilir. Köklerin erken rezorpsiyonu hipertiroidizmin, PDL genişlemesi sklerodermanın, hipersementoz ise akromegali veya tiroidizmin bulgusudur. Cushing'in dentisyon üzerindeki nadir pozitif spesifik bulgusu pulpal obliteratif değişimlerdir.

**Soru 2 (ID: 518911b0-6052-43d3-923d-ec8897e89f7a)**
Soru Kökü: Aşırı adrenokortikotropik hormon üretimine veya adrenal hiperplaziye bağlı olarak gelişen Cushing sendromunun dental etkileri (Tablo 14) incelendiğinde, glukokortikoid seviyesindeki artış dişlerin sürme profilinde genellikle hangi spesifik değişikliğe neden olur?
Doğru Şık (A): Prematür (erken) diş sürmesi
Açıklama: Cushing sendromunda aşırı glukokortikosteroid sentezi, protein biyosentezini bozar ve osteoklastik aktiviteyi artırarak kemik yapısını zayıflatır. Tablo 14'e göre Cushing sendromunun diş sürmesine olan doğrudan etkisi "Prematür (erken) sürme" şeklindedir. Alveoler kemiğin osteoporotik doğası ve granüler yapılaşması (lamina durada kısmi kayıp) bu erken erüpsiyon sürecini kolaylaştırır.

---

### ÇİFT 136 (Benzerlik: 0.73)

**Soru 1 (ID: cae6bc1b-d36e-41f6-88a0-009f936ccd56)**
Soru Kökü: Renal osteodistrofi hastalarında çene kemiklerindeki trabekül yapısı incelendiğinde, Tablo 13'e göre granüler patern ile birlikte trabekül sayısında hangi iki durum izlenebilir?
Doğru Şık (C): Azalma ve nadiren artış
Açıklama: Renal osteodistrofi mikst karakterli bir patoloji olduğu için radyografide trabekül sayısında genellikle azalma görülmekle birlikte, sklerotik yanıtın ön plana çıktığı bölgelerde 'nadiren artış' da izlenebilir. Bu bulgular eşliğinde kemik yapısı granüler (tuz-biber) bir izlenim verir. Tek tip bir yıkım (sadece azalma) veya hiperplazi tablosu bu hastalığın kompleks doğasını yansıtmaz.

**Soru 2 (ID: fa4f81b5-b8b1-45dc-8716-8654c98180bd)**
Soru Kökü: Rikets (raşitizm) hastalarında çene kemiklerinin kansellöz kısmındaki trabekül yoğunluğu değerlendirildiğinde, Tablo 13'e göre trabekül sayısında nasıl bir değişim gözlenir?
Doğru Şık (A): Sayısal azalma
Açıklama: Yetersiz mineralizasyon nedeniyle rikets hastalarının çene kemiklerindeki kansellöz yapıda trabekül dansitesi, kalınlığı ve sayısında belirgin azalma saptanır. Hastalığın geç evrelerinde dişler kemik desteğini kaybedecek kadar trabeküler kayıp yaşanabilir; ancak granüler patern bu hastalığın klasik bir bulgusu değildir. Sayısal artma (osteopetrozis) gibi kemik yoğunluğunun arttığı tablolarda izlenir.

---

### ÇİFT 137 (Benzerlik: 0.73)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: 9ba1ae4e-85db-470e-912b-52a08b9c3cf4)**
Soru Kökü: Endokrin sistem hastalıklarında dişlerde görülen genel gelişimsel ve radyografik anormallikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (B): Mine insizal kenarlarında aşırı atrisyon
Açıklama: Endokrin hastalıklarda sürmede hızlanma veya gecikme, hipoplazi, hipokalsifikasyon ve lamina dura belirginliğinin kaybı görülür. Aşınma (atrisyon) lokal faktörlere bağlı mekanik bir kayıptır ve endokrin sistemin doğrudan bir bulgusu olarak belirtilmez.

---

### ÇİFT 138 (Benzerlik: 0.73)

**Soru 1 (ID: 0901cc92-7255-46fc-b5e8-fd1a039273c8)**
Soru Kökü: On sekiz yaşındaki erkek hasta, herhangi bir çürük veya travma öyküsü olmamasına rağmen alt çene posterior dişlerinde künt bir ağrı şikayetiyle başvuruyor. Tıbbi anamnezinde kronik bir anemi olduğu ve sık sık eklem ağrısı atakları geçirdiği belirtiliyor. Radyografisinde kortikal kemikte incelme ve trabekülasyonda kaba 'stepladder' (merdiven basamağı) görünümü saptanıyor. Düşük oksijen basıncına bağlı olarak, pulpal kan akımının azalmasıyla karakterize asemptomatik pulpa nekrozunun en olası nedeni olan sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Orak hücreli anemi
Açıklama: Orak hücreli anemi hastalarında yapısal olarak bozuk (orak) eritrositler küçük kılcal damarları tıkayarak mikrodolaşımı bozar. Bu durum dişin pulpasında düşük oksijen basıncı yaratır ve çürük ya da travma olmaksızın (intakt dişte) mikrotrombüslere bağlı asemptomatik pulpa nekrozu gelişimine yol açar. Diğer anemilerde (Talasemi) pulpa içi dolaşım kökenli asemptomatik nekroz primer bulgu değildir.

**Soru 2 (ID: 72a52507-69de-4537-86b8-e6d186b42b75)**
Soru Kökü: On iki yaşında erkek hasta, tekrarlayan karın, kas ve eklem ağrıları ile kronik yorgunluk şikayetleriyle başvuruyor. Ağız içi muayenede mukoza renginde belirgin solukluk dikkat çekiyor. Sefalometrik ve panoramik radyografilerde kafatasında 'hair-on-end' görüntüsü, çenelerde ise kaba trabekülasyon saptanıyor. Bu hastanın konak immün cevabındaki yetersizlik düşünüldüğünde, aşağıdaki oral komplikasyonlardan hangisine yatkınlığının artmış olması **beklenmez**?
Doğru Şık (E): Mine ve dentinde yapısal sklerozis (hipermineralizasyon)
Açıklama: Orak hücreli anemi hastaları dolaşım kollapsları ve kemik iliği hipoksisi nedeniyle çok ciddi dental komplikasyonlara açıktır. Bunlar arasında enfeksiyona hücresel eğilim (osteomiyelit, periodontitis), gelişim geriliğine bağlı sürme gecikmesi ve mikrotrombüslere bağlı travmasız pulpa nekrozu bulunur. Ancak dişlerin sert dokularında hipermineralizasyon (skleroz) görülmez; aksine gelişim dönemindeki anemi atakları sekonder olarak mine ve dentin tabakalarında hipomineralizasyon defektlerine neden olur.

---

### ÇİFT 139 (Benzerlik: 0.73)

**Soru 1 (ID: 1cd0131e-7813-4850-8ceb-ae3f02558dc7)**
Soru Kökü: Sistemik metabolik hastalıkların kemik dansitesine etkisi değerlendirildiğinde, çene kemiklerinde belirgin dansite azalması oluşturması **en az olası** hastalık hangisidir?
Doğru Şık (B): Hipoparatiroidizm
Açıklama: Hipertiroidizm, Hipofosfatazya, Cushing sendromu ve Rickets tabloları kemik formasyonunu bozarak veya yıkımını artırarak kemik dansitesinde net azalmaya neden olur. Ancak hipoparatiroidizmde kalsiyum mobilizasyonu durduğu için dansitede azalma izlenmez; aksine Tablo 13'e göre nadiren artma (osteoskleroz) gözlenebilir.

**Soru 2 (ID: 52a71068-b55a-4cbd-aa98-f0f95b3cc5fa)**
Soru Kökü: Tablo 13'e göre, kemik dansitesini etkilemesine rağmen çene kemiklerindeki trabeküler yapının sayısında veya morfolojisinde istatistiksel olarak bir değişim yaratmayan hastalık hangisidir?
Doğru Şık (E): Hipertiroidizm
Açıklama: Hipertiroidizm kemik döngüsünü hızlandırıp total kemik dansitesinde azalmaya neden olsa da, Tablo 13 verilerinde trabekül yapısında nicel (artma/azalma) veya nitel (granüler) bir değişim yaratmadığı belirtilmiştir. Osteoporozis, osteomalazya ve renal osteodistrofi gibi tablolar ise trabeküler ağı doğrudan zayıflatır veya sayısını değiştirir.

---

### ÇİFT 140 (Benzerlik: 0.73)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 141 (Benzerlik: 0.73)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

---

### ÇİFT 142 (Benzerlik: 0.73)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 143 (Benzerlik: 0.73)

**Soru 1 (ID: 2f9558c6-91d9-46d0-8484-16f728b87fee)**
Soru Kökü: Renal osteodistrofi hastalarının panoramik radyografilerinde 'tuz-biber' görünümü ile birlikte periodontal aralığı çevreleyen yapılarda belirgin değişiklikler izlenir. Bu hastalarda lamina dura görünürlüğünde azalma veya kaybolmanın temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik sklerozu gelişmesi veya kemik dansitesindeki bölgesel değişimler
Açıklama: Renal osteodistrofide lamina duranın kaybolması, kemik sklerozu gelişmesi veya kemiğin radyografik görünürlüğünün azalması (osteolitik alanlar) sonucunda ortaya çıkar. Osteoklastik aktivitenin durması osteopetroziste görülürken, böbrek yetmezliğinde hiperparatiroidizm sekonder olarak kemik döngüsünü bozar. Çene kemiklerinde artan granüler yapı ve sklerotik odakların varlığı, normal lamina dura kretinin seçilebilmesini engeller.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 144 (Benzerlik: 0.73)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 145 (Benzerlik: 0.73)

**Soru 1 (ID: bbf17920-94c7-41d4-be42-56610d4b815c)**
Soru Kökü: Hiperparatiroidizmde iskelet sisteminde görülen yaygın demineralizasyon süreci çenelere yansıdığında, radyografik değerlendirmede aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Tüm çene kemiklerinin dansitesinde artış
Açıklama: Hastalıkta yoğun osteoklastik aktivite sonucu iskelet sisteminde demineralizasyon gelişir, bu durum çene radyografilerine çene dansitesinde belirgin bir 'azalma' (radyolüsensi) olarak yansır. Kemik yoğunluğunda artış bu tablonun tam zıttıdır ve osteopetrozis gibi hastalıklarda görülür.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 146 (Benzerlik: 0.73)

**Soru 1 (ID: 0901cc92-7255-46fc-b5e8-fd1a039273c8)**
Soru Kökü: On sekiz yaşındaki erkek hasta, herhangi bir çürük veya travma öyküsü olmamasına rağmen alt çene posterior dişlerinde künt bir ağrı şikayetiyle başvuruyor. Tıbbi anamnezinde kronik bir anemi olduğu ve sık sık eklem ağrısı atakları geçirdiği belirtiliyor. Radyografisinde kortikal kemikte incelme ve trabekülasyonda kaba 'stepladder' (merdiven basamağı) görünümü saptanıyor. Düşük oksijen basıncına bağlı olarak, pulpal kan akımının azalmasıyla karakterize asemptomatik pulpa nekrozunun en olası nedeni olan sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Orak hücreli anemi
Açıklama: Orak hücreli anemi hastalarında yapısal olarak bozuk (orak) eritrositler küçük kılcal damarları tıkayarak mikrodolaşımı bozar. Bu durum dişin pulpasında düşük oksijen basıncı yaratır ve çürük ya da travma olmaksızın (intakt dişte) mikrotrombüslere bağlı asemptomatik pulpa nekrozu gelişimine yol açar. Diğer anemilerde (Talasemi) pulpa içi dolaşım kökenli asemptomatik nekroz primer bulgu değildir.

**Soru 2 (ID: 6784fd48-2705-447b-a4cc-841dc12cb8cd)**
Soru Kökü: Yirmi iki yaşındaki erkek hasta, çürük veya travma öyküsü olmayan mandibular birinci molar dişindeki akut ağrı şikayetiyle başvurmuştur. Hastanın anemnezinde çocukluktan beri süren karın ve eklem ağrısı krizleri, radyografisinde ise kortekste incelme ve kaba trabekülasyon izlenmiştir. Bu hastada gelişen asemptomatik pulpa nekrozunun en olası fizyopatolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Düşük oksijen basıncında eritrositlerin şekil değiştirerek pulpal mikrosirkülasyonu tıkaması
Açıklama: Orak hücreli anemide anormal (deoksijenize) hemoglobinler düşük oksijenli ortamda oraklaşarak mikrovasküler damarları tıkar; bu durum diş pulpasında iskemiye ve sekonder asemptomatik pulpa nekrozuna yol açar. Demir birikimi (hemosiderozis) talasemide parotisi etkilerken, nötrofil disfonksiyonu diyabete aittir. Pulpada infarktüs benzeri iskemik krizler bu kan hastalığının en önemli lokalizasyonlarından biridir.

---

### ÇİFT 147 (Benzerlik: 0.73)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: cae6bc1b-d36e-41f6-88a0-009f936ccd56)**
Soru Kökü: Renal osteodistrofi hastalarında çene kemiklerindeki trabekül yapısı incelendiğinde, Tablo 13'e göre granüler patern ile birlikte trabekül sayısında hangi iki durum izlenebilir?
Doğru Şık (C): Azalma ve nadiren artış
Açıklama: Renal osteodistrofi mikst karakterli bir patoloji olduğu için radyografide trabekül sayısında genellikle azalma görülmekle birlikte, sklerotik yanıtın ön plana çıktığı bölgelerde 'nadiren artış' da izlenebilir. Bu bulgular eşliğinde kemik yapısı granüler (tuz-biber) bir izlenim verir. Tek tip bir yıkım (sadece azalma) veya hiperplazi tablosu bu hastalığın kompleks doğasını yansıtmaz.

---

### ÇİFT 148 (Benzerlik: 0.73)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: c664831f-4b3c-4198-81c7-06f3f2b34f9d)**
Soru Kökü: Bebeklik döneminde D vitamini eksikliği, kafatasında kraniyo-tabes ve bacaklarda O şeklinde deformite hikayesi olan raşitizm (Rickets) hastasında, çene kemik dansitesinde hangi radyografik değişim beklenir?
Doğru Şık (D): Dansitede azalma
Açıklama: Rikets tablosunda aktif D vitamini eksikliğine bağlı kalsiyum absorbsiyon defekti yaşanır; bu da osteoid dokunun mineralize olamamasına ve generalize kemik dansitesinde azalmaya neden olur. Radyografide bu durum kansellöz kemikte lüsensi ve kortikal yapılarda incelme olarak izlenir. Opasite veya sement dansitesinde artış kalsifikasyon defekti olan bu tabloda fizyolojik olarak imkansızdır.

---

### ÇİFT 149 (Benzerlik: 0.73)

**Soru 1 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

**Soru 2 (ID: fa9c9929-ab45-4807-aa71-5f5f4ebf7c75)**
Soru Kökü: Sistemik metabolik kemik hastalıklarının çeneler üzerindeki radyografik etkileri incelendiğinde; çenelerin genel boyutunda bir değişiklik olmaksızın, trabekül yapısında belirgin granülerleşme ve generalize kemik dansitesinde azalma ile karakterize olan endokrin kökenli hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Hiperparatiroidizm
Açıklama: Tablo 13 kemik bulgularına göre; hiperparatiroidizmde çene boyutunda büyüme ya da küçülme olmaz, ancak osteoklastik aktivitenin artışına bağlı olarak kemik dansitesi azalır ve kafatası dahil kemiklerde granüler bir görünüm ortaya çıkar. Hipoparatiroidizmde kemik dansitesi nadiren artabilirken, osteopetroziste genel bir artış mevcuttur. Akondroplazi ve hipotiroidizmde ise çene boyutlarında belirgin bir küçülme saptanır.

---

### ÇİFT 150 (Benzerlik: 0.73)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

---

### ÇİFT 151 (Benzerlik: 0.73)

**Soru 1 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 152 (Benzerlik: 0.73)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 153 (Benzerlik: 0.73)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

---

### ÇİFT 154 (Benzerlik: 0.73)

**Soru 1 (ID: 59c6c28a-81b8-41b8-bf8a-c1d6fb8f2c17)**
Soru Kökü: Dişleri çevreleyen alveolar kemiğin lamina dura tabakası, sistemik metabolik hastalıkların teşhisinde önemli bir radyografik indikatördür. Aşağıdaki hastalıkların hangisinde lamina dura kalınlığında bir azalma (incelme veya tamamen kaybolma) görülmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis (Mermer kemik hastalığı)
Açıklama: Hiperparatiroidizm (osteoklast aktivitesi), osteoporoz, rikets, osteomalazi ve renal osteodistrofi gibi hastalıkların tümünde kemik mineral kütlesinde kayıp meydana geldiğinden lamina durada belirginlik kaybı veya incelme görülür. Osteopetrozis ise kemik rezorpsiyonunun bloke olduğu ve kemik yapımının masif şekilde arttığı mermer kemik hastalığıdır. Bu nedenle osteopetroziste lamina durada incelme değil, aksine kalınlaşma ve sklerotik bir yoğunluk artışı beklenir.

**Soru 2 (ID: 66891f0c-7462-4101-aff7-f08db8b7bc65)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen yaygın 'granüler' veya 'tuz-biber' görünümü, kemik döngüsünün bozulduğu hastalıklarda kansellöz kemiğin karakteristik bir alterasyonudur. Aşağıdaki sistemik hastalıklardan hangisinin radyografik muayenesinde çenelerde granüler kemik paterni izlenmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis
Açıklama: Osteopetroziste osteoklastik yetmezliğe bağlı kemik rezorpsiyonu durur; bu da tüm trabeküllerin aşırı kalsifiye olmasına, kemik iliğinin kapanmasına ve radyografik olarak tamamen opak/masif (mermer) bir görünüme neden olur. Oysa Hiperparatiroidizm, Cushing, Renal osteodistrofi ve Hipofosfatemide kemik yıkımı ve ince reaktif yapım bir arada olduğu için trabeküller çok küçük, ince kumlu bir benekli yapı (granüler) kazanır.

---

### ÇİFT 155 (Benzerlik: 0.73)

**Soru 1 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 156 (Benzerlik: 0.73)

**Soru 1 (ID: 51809fbb-1e06-4088-a000-d023e84ff5eb)**
Soru Kökü: Talasemi majör tanılı bir hastada; frontal ve parietal kemiklerde genişleme, zigomatik kemiklerde çıkıntı, 'rodent-like' (kemirgen) yüz görünümü ve sefalometrik radyografide aplastik maksiller sinüs saptanmıştır. Çene ve yüz kemiklerindeki bu deformasyonların kökeninde yatan temel fizyopatolojik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Kronik anemiye ikincil olarak gelişen kompanzatuvar kemik iliği hiperplazisi
Açıklama: Talasemi hastalarında kronik ve şiddetli seyreden anemiye yanıt olarak vücut, eritropoietin üretimi için kemik iliğini kompanzatuvar olarak uyarır ve kemik iliği ileri derecede hiperplaziye uğrar. Fasiyal kemiklerde ve çenelerde (özellikle maksilla) süngerimsi dokunun bu yönde masif genişlemesi kemik korteksini inceltir, maksiller sinüs pnömatizasyonunu engeller (aplastik sinüs) ve 'rodent-like' yüz deformitesine neden olur. Demir birikimi ise endokrin ve parotis disfonksiyonlarını açıklar.

**Soru 2 (ID: 6223335b-b439-4f77-8b76-47773804def1)**
Soru Kökü: Talasemi hastalığında görülen iskeletsel ve dental değişiklikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Çene kemiklerinin radyografik dansitesinde artış ve sklerotik odakların oluşumu
Açıklama: Talasemi hastalarında, artan kırmızı kan hücresi ihtiyacını karşılamak için kemik iliği hiperplazisi gelişir. Bu da kortikal sınırlarda incelmeye, trabekül sayısında azalmaya ve tüm çene/kafatası kemiklerinde generalize radyolüsensiye (kemik dansitesinde azalmaya) neden olur. Kemik dansitesinde artış ve sklerotik odaklar osteopetrozis gibi hatalıkların bulgusudur, talasemide izlenmez.

---

### ÇİFT 157 (Benzerlik: 0.73)

**Soru 1 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

**Soru 2 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

---

### ÇİFT 158 (Benzerlik: 0.73)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

---

### ÇİFT 159 (Benzerlik: 0.73)

**Soru 1 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 160 (Benzerlik: 0.73)

**Soru 1 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

**Soru 2 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

---

### ÇİFT 161 (Benzerlik: 0.73)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 162 (Benzerlik: 0.73)

**Soru 1 (ID: 69b0eb4a-f821-475a-bd51-1c7dc02f2502)**
Soru Kökü: Hipertiroidizm (tirotoksikoz) sendromuna sahip olan hastaların ağız içi muayenelerinde, sağlıklı bireylere kıyasla daha yaygın periodontal doku kaybı profili gözlenmektedir. Bu hastalardaki diş eti hastalığının agresif seyretmesine yatkınlık yaratan ana iskeletsel/radyografik patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoporoz nedeniyle alveoler kortikal sınırlarda incelme yaşanması
Açıklama: Hipertiroidizm (tirotoksikoz) hastalarında artan metabolizma hızı kemik döngüsünü (turnover) etkileyerek radyograflarda da izlenebilen generalize osteoporoza ve kortikal sınırlarda incelmeye neden olur. Tükürükte glikoz artışı diyabete, periodontal ligament genişlemesi ve mikrostomi ise sklerodermaya özgüdür. Kemik yapısındaki bu osteoporotik zayıflama, en ufak bir enflamatuar yanıtta dahi ciddi kemik kaybıyla sonuçlanan periodontal problemlere davetiye çıkarır.

**Soru 2 (ID: 9d2a02f8-031f-4ada-a87f-77d7a0405e46)**
Soru Kökü: Metabolizma hızının arttığı tirotoksikoz (Graves hastalığı) vakalarında osteoporoza sekonder olarak dişi çevreleyen kemik dokuda karakteristik olarak hangi radyografik bulgu saptanır?
Doğru Şık (A): Lamina durada incelme
Açıklama: Hipertiroidizm hastalarında tiroksin artışına bağlı genel metabolizma hızlanması ve hücresel turnover artışı izlenir. Bu artmış metabolik aktivite osteoporoza neden olur. Radyograflarda osteoporoz nedeniyle alveol kemiğinde trabeküler kaybın yanı sıra kortikal sınırlarda ve dişin kemik yuvasındaki sert duvarı olan lamina durada belirgin incelme (Tablo 14) görülür.

---

### ÇİFT 163 (Benzerlik: 0.73)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

---

### ÇİFT 164 (Benzerlik: 0.73)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 165 (Benzerlik: 0.73)

**Soru 1 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 166 (Benzerlik: 0.73)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

---

### ÇİFT 167 (Benzerlik: 0.73)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

---

### ÇİFT 168 (Benzerlik: 0.73)

**Soru 1 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 169 (Benzerlik: 0.73)

**Soru 1 (ID: 1d0d5f92-95d2-452f-9f9c-e98f6960bc41)**
Soru Kökü: Yetişkinlik döneminde hiperpituitarizm tablosu gelişen bir hastanın kafa grafilerinde, kalvaryum (kafatası kubbesi) bölgesinde izlenmesi beklenen karakteristik radyografik değişim aşağıdakilerden hangisidir?
Doğru Şık (E): Kafatasının dış tabakasında diffüz kalınlaşma
Açıklama: Akromegali hastalarında sürekli uyarılmaya bağlı olarak kemik formasyonunda artış meydana gelir ve bu durum kafatasının dış tabakasında diffüz bir kalınlaşma şeklinde radyografiye yansır. Wormian kemik oluşumu hipotiroidizmde (kretinizm), diploik mesafede granüler genişleme ise talasemi gibi kronik anemilerde izlenir. Bu diffüz kalınlaşma, endokrin hiperaktivitenin kemik üzerindeki genel anabolik etkisinin bir sonucudur.

**Soru 2 (ID: f4bd6d9a-f7d4-477d-98ae-29a885221b02)**
Soru Kökü: Akromegali hastalarında kafa tabanı ve kraniyofasiyal komplekste karşılaşılan radyografik değişiklikler arasında aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Frontal sinüs başta olmak üzere paranazal sinüslerde aplazi ve daralma
Açıklama: Akromegali hastalığında kraniyal kemiklerdeki osteoblastik aktivite artışıyla supraorbital çıkıntılar belirginleşir ve altındaki frontal sinüsler dahil paranazal sinüsler aşırı derecede pnömatize olur (genişler). Sinüs gelişiminde yetersizlik hipotiroidizm (kretinizm) gibi hipometabolik durumlarda izlenir.

---

### ÇİFT 170 (Benzerlik: 0.73)

**Soru 1 (ID: 2978db96-cf82-4c50-ba8a-392e58b2f84c)**
Soru Kökü: Akromegali hastalarında tipik olarak izlenen sınıf III iskeletsel maloklüzyon tablosunun temel biyomekanik ve gelişimsel kökeni aşağıdakilerden hangisidir?
Doğru Şık (D): Mandibular kondiler büyümenin aşırı şekilde uyarılması
Açıklama: Sınıf III iskeletsel maloklüzyon, büyüme hormonunun (GH) mandibular kondildeki kıkırdak dokusunu sekonder olarak aşırı uyarması ve alt çenenin anteriora doğru yer değiştirmesi (prognati) sonucunda oluşur. Maksiller protrüzyon akromegalide değil, tam tersine talasemi gibi kemik iliği genişlemesi yapan anemi türlerinde (premaksilla protrüzyonu) görülür. Bu kontrolsüz kondiler büyüme, çeneler arası sagittal ilişkinin alt çene lehine bozulmasına zemin hazırlar.

**Soru 2 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

---

### ÇİFT 171 (Benzerlik: 0.73)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

---

### ÇİFT 172 (Benzerlik: 0.72)

**Soru 1 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 173 (Benzerlik: 0.72)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: 9a623075-2c0b-4e72-a544-5fda9d26739d)**
Soru Kökü: Çocukluk çağında D vitamini eksikliğine (Rikets) maruz kalmış hastanın dental ve radyografik tablosunda;
I. Mine hipoplazisi
II. Lamina durada incelme
III. Diş sürmesinde gecikme
bulgularından hangilerinin bir arada görülmesi beklenir?
Doğru Şık (E): I, II ve III
Açıklama: Rikets hastalarında kalsiyum eksikliğine bağlı olarak gelişmekte olan ameloblastların fonksiyonu bozulur (Mine hipoplazisi - Tablo 14). Aynı zamanda çevre kemik dokusu yeterli mineralizasyona uğrayamadığı için kortikal sınır ve lamina durada incelme veya silinme görülür. Kemik yapımındaki defekt diş folikülünün itici gücünü de zayıflatarak sürmede belirgin gecikmeye yol açar (Her 3 öncül de doğrudur).

---

### ÇİFT 174 (Benzerlik: 0.72)

**Soru 1 (ID: 707a48c1-d93e-46fa-94a9-724e1d09f1b9)**
Soru Kökü: Akromegali hastasının baş ve boyun bölgesinin fiziksel muayenesinde saptanabilecek, büyüme hormonunun bağ dokusundaki anabolik etkisine bağlı ortaya çıkan yumuşak doku anomalisi aşağıdakilerden hangisi **değildir**?
Doğru Şık (D): Yüz derisinin atrofisi ve ağız açıklığında perioral kısıtlılık
Açıklama: Akromegalide büyüme hormonu yumuşak dokuların kalınlaşmasına (makroglossi, kalın dudaklar, büyük ve geniş bir burun) neden olur. Yüz cildinde atrofi, hareket kısıtlılığı ve dudak çevresinde büzüşme (mikrostomi) bağ dokusunun sertleştiği Skleroderma hastalığının bulgusudur.

**Soru 2 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

---

### ÇİFT 175 (Benzerlik: 0.72)

**Soru 1 (ID: 7d9008da-0977-481b-8622-4276b2c0a567)**
Soru Kökü: Büyüme çağında D vitamini metabolizma defekti olan Rikets (raşitizm) hastalarının iskelet sistemi radyografik bulguları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Çene kemiklerindeki kansellöz kısımda trabekül sayısı ve dansitesi artmıştır.
Açıklama: Rikets hastalarında kemik mineralizasyonu zayıf olduğu için çene kemiklerinin kansellöz kısmında trabekül sayısı, kalınlığı ve dansitesi artmaz, tam tersine azalır (generalize osteoporoz). Yeşil ağaç kırıkları çeldiricisi rikets için doğru bir bulgudur; esnek kalan az kalsifiye kemik tam kırılmak yerine yeşil bir dal gibi esneyerek çatlar. Dental bölgede lamina dura kayıpları ve folikül sınırlarında silinme şiddetli olgularda diş desteğini tehlikeye atar.

**Soru 2 (ID: d6af7e69-d598-45b0-b447-a688301f2d51)**
Soru Kökü: Sistemik metabolik kemik hastalıkları ve tipik radyografik bulguları eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Rikets - Uzun kemik epifizlerinde daralma ve kemik dansitesinde belirgin artış
Açıklama: Rikets hastalığında epifiz plaklarında daralma veya kemik dansitesinde artış değil, aksine uzun kemik epifizlerinde genişleme/aşınma ve kemiklerde demineralizasyona bağlı radyolüsensi izlenir. Hipofosfatazya olgularında kafatasının iyi kalsifiye olamamasına bağlı gelişen 'dövülmüş bakır' görünümü spesifik bir radyolojik bulgudur. Diğer tüm hastalık-bulgu eşleştirmeleri patofizyolojik olarak birbiriyle uyumludur.

---

### ÇİFT 176 (Benzerlik: 0.72)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 177 (Benzerlik: 0.72)

**Soru 1 (ID: 6d40b3d9-e39d-4d00-9ebd-1262e6fb6b0f)**
Soru Kökü: Kırk beş yaşında erkek hasta, son 5 yıldır ellerinde, ayaklarında ve alt çenesinde sürekli bir büyüme şikayetiyle kliniğe başvuruyor. Yapılan muayenede dilde aşırı büyüme (makroglossi) ve mandibular prognati tespit ediliyor. Bu hastanın lateral sefalometrik veya kafa grafilerinde aşağıdaki bulgulardan hangisinin izlenmesi en olasıdır?
Doğru Şık (C): Sella tursikada genişleme
Açıklama: Akromegalide gözlenen aşırı büyüme hormonu (GH) salınımı, genellikle hipofiz bezinin anterior lobundaki bir adenomdan kaynaklandığı için radyografilerde sella tursika hacminde genişleme izlenir. Kafa tabanında ossifikasyon gecikmesi hipotiroidizmde, dövülmüş bakır görünümü ise hipofosfatazyada beklenen bulgulardır. Sella tursika genişlemesi, yetişkin hiperpituitarizminin pitüiter kökenini işaret eden patognomonik bir radyolojik işarettir.

**Soru 2 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

---

### ÇİFT 178 (Benzerlik: 0.72)

**Soru 1 (ID: 014d4be8-7e84-44c0-9a36-d786e916ea79)**
Soru Kökü: Sekiz yaşındaki çocuk hastanın ailesi, çocuğun daimi dişlerinin bir türlü süremediğini ve süt dişlerinin halen düşmediğini ifade etmektedir. Hekim tarafından yapılan muayenede çocuğun dudaklarının oldukça kalın, dilinin normalden büyük (makroglossi) olduğu; cildinin dokunulduğunda hamursu bir kıvama sahip olduğu fark edilmiştir. Diş radyografilerinde daimi diş sürmelerinde gecikme ve eksternal kök rezorpsiyonları saptanan bu hastada en olası medikal tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Hipotiroidizm (Kretinizm)
Açıklama: Süt dişlerinin düşmesinde ve daimi diş sürmesinde gecikme, hamursu cilt, kalın dudaklar ve makroglossi kombinasyonu, çocukluk çağı tiroid yetmezliği olan kretinizm (hipotiroidizm) tablosu ile tamamen uyumludur. Rikets ve hipofosfatazyada da sürme gecikmesi görülebilir ancak onlarda eklem şişlikleri, bacak eğrilikleri veya erken diş kaybı (süt kesiciler) ön plandadır. Ciltteki hamursu kıvam ve dil büyümesi miksödematöz infiltrasyona (mukopolisakkarid birikimi) işaret eder.

**Soru 2 (ID: 7f074be7-8e94-4524-b75a-b9c6b9d847ef)**
Soru Kökü: Yedi yaşında çocuk hasta kliniğe rutin kontrol için getirilmiş olup; ailesi tarafından çocuğun çok huzursuz, hiperaktif olduğu, sıklıkla çarpıntı hissettiği ve sıcağa hiç dayanamadığı belirtilmiştir. Yapılan oral muayenede çocuğun kronolojik yaşına kıyasla daimi dişlerinin çok daha erken sürdüğü ve panoramik radyografisinde henüz düşme yaşı gelmemiş süt dişi köklerinde belirgin erken rezorpsiyon alanları tespit edilmiştir. Bu bulgular ışığında hastanın medikal özgeçmişinde hangi sistemik tablonun varlığı en olasıdır?
Doğru Şık (C): Hipertiroidizm
Açıklama: Çocukluk çağında görülen hipertiroidizm; bazal metabolizma hızının yüksekliğine (sıcağa dayanıksızlık, taşikardi, hiperaktivite) paralel olarak diş ve kemik gelişim hızını da artırır; dişler normalden erken sürer ve süt dişi kökleri hızla erir. Rikets veya hipotiroidizm gibi hastalıklarda ise gelişim hızlanmaz, aksine sürme gecikmeleri tablosu yaşanır. Metabolik saatin çok hızlı çalışması, bu erken dental erüpsiyon profili ile doğrudan koreledir.

---

### ÇİFT 179 (Benzerlik: 0.72)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

---

### ÇİFT 180 (Benzerlik: 0.72)

**Soru 1 (ID: 80a84301-107a-4b1e-b364-1cce4b123888)**
Soru Kökü: Radyografik incelemede çene kemiklerinin boyutlarında genel veya bölgesel bir 'Artış/Genişleme' saptanan hastanın ayırıcı tanısında (Tablo 13); 
I. Osteopetrozis 
II. Renal osteodistrofi 
III. Hiperpituitarizm 
sistemik hastalıklarından hangileri akla gelmelidir?
Doğru Şık (E): I, II ve III
Açıklama: Tablo 13'e bakıldığında 'Çenelerin boyutu' sütununda; Osteopetrozis (Artar - kemik yıkımı olmadığı için), Renal Osteodistrofi (Artar - fasiyal kemiklerde ikincil osteolitik/sklerotik ekspansiyon), Hiperpituitarizm (Genişler - GH hormonunun kemik büyüme plaklarını uyarmasına bağlı Sınıf III prognati) olarak belirtilmiştir. Dolayısıyla her üç hastalık da çenelerde boyutsal artış veya genişleme spektrumunda yer alır.

**Soru 2 (ID: 8f1a0878-04bc-4347-8218-ad43b5f05fbe)**
Soru Kökü: Aşağıdaki sistemik hastalıklardan hangisinde, mineralizasyon defektleri ve granüler trabeküler değişikliklerle birlikte çene boyutlarında 'artma (genişleme)' beklenir?
Doğru Şık (E): Renal osteodistrofi
Açıklama: Renal osteodistrofi (kronik böbrek yetmezliği sekeli), KIBT ve klinik görüntülerinde maksilla ve mandibulada ekspansiyon (genişleme) ve kemik boyutlarında artma ile karakterize olabilir. Hipopituitarizm ve hipotiroidizm çene boyutlarında küçülmeye neden olurken, rikets veya osteoporoziste çene boyutunda bir değişiklik beklenmez.

---

### ÇİFT 181 (Benzerlik: 0.72)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

---

### ÇİFT 182 (Benzerlik: 0.72)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: 8f1a0878-04bc-4347-8218-ad43b5f05fbe)**
Soru Kökü: Aşağıdaki sistemik hastalıklardan hangisinde, mineralizasyon defektleri ve granüler trabeküler değişikliklerle birlikte çene boyutlarında 'artma (genişleme)' beklenir?
Doğru Şık (E): Renal osteodistrofi
Açıklama: Renal osteodistrofi (kronik böbrek yetmezliği sekeli), KIBT ve klinik görüntülerinde maksilla ve mandibulada ekspansiyon (genişleme) ve kemik boyutlarında artma ile karakterize olabilir. Hipopituitarizm ve hipotiroidizm çene boyutlarında küçülmeye neden olurken, rikets veya osteoporoziste çene boyutunda bir değişiklik beklenmez.

---

### ÇİFT 183 (Benzerlik: 0.72)

**Soru 1 (ID: 2f9558c6-91d9-46d0-8484-16f728b87fee)**
Soru Kökü: Renal osteodistrofi hastalarının panoramik radyografilerinde 'tuz-biber' görünümü ile birlikte periodontal aralığı çevreleyen yapılarda belirgin değişiklikler izlenir. Bu hastalarda lamina dura görünürlüğünde azalma veya kaybolmanın temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik sklerozu gelişmesi veya kemik dansitesindeki bölgesel değişimler
Açıklama: Renal osteodistrofide lamina duranın kaybolması, kemik sklerozu gelişmesi veya kemiğin radyografik görünürlüğünün azalması (osteolitik alanlar) sonucunda ortaya çıkar. Osteoklastik aktivitenin durması osteopetroziste görülürken, böbrek yetmezliğinde hiperparatiroidizm sekonder olarak kemik döngüsünü bozar. Çene kemiklerinde artan granüler yapı ve sklerotik odakların varlığı, normal lamina dura kretinin seçilebilmesini engeller.

**Soru 2 (ID: 59c6c28a-81b8-41b8-bf8a-c1d6fb8f2c17)**
Soru Kökü: Dişleri çevreleyen alveolar kemiğin lamina dura tabakası, sistemik metabolik hastalıkların teşhisinde önemli bir radyografik indikatördür. Aşağıdaki hastalıkların hangisinde lamina dura kalınlığında bir azalma (incelme veya tamamen kaybolma) görülmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis (Mermer kemik hastalığı)
Açıklama: Hiperparatiroidizm (osteoklast aktivitesi), osteoporoz, rikets, osteomalazi ve renal osteodistrofi gibi hastalıkların tümünde kemik mineral kütlesinde kayıp meydana geldiğinden lamina durada belirginlik kaybı veya incelme görülür. Osteopetrozis ise kemik rezorpsiyonunun bloke olduğu ve kemik yapımının masif şekilde arttığı mermer kemik hastalığıdır. Bu nedenle osteopetroziste lamina durada incelme değil, aksine kalınlaşma ve sklerotik bir yoğunluk artışı beklenir.

---

### ÇİFT 184 (Benzerlik: 0.72)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 185 (Benzerlik: 0.72)

**Soru 1 (ID: c4163a70-7624-46de-b5b9-a6012b1029cd)**
Soru Kökü: Çocukluk çağında gelişen tiroid hormon eksikliği (kretinizm) hastalarının çene, kafa ve ekstremite kemiklerini ilgilendiren radyografik izlemlerinde aşağıdaki bulgulardan hangisi **görülmez**?
Doğru Şık (E): Kortikal sınırlarda diffüz incelme ve radyografik osteoporoz tablosu
Açıklama: Osteoporoz nedeniyle kortikal sınırlarda incelme, hipotiroidizmde değil tam tersi mekanizmayla çalışan ve kemik yapım-yıkım döngüsünü felte eden hipertiroidizm (tirotoksikoz), hiperparatiroidizm veya osteoporoz gibi tablolarda izlenir. Hipotiroidizm radyografilerinde lamina durada belirgin kalınlaşma görülür; epifizlerin geç kapanması, wormian kemikler ve kısa kökler teşhisi destekleyen en önemli büyüme geriliği verileridir.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 186 (Benzerlik: 0.72)

**Soru 1 (ID: 59c6c28a-81b8-41b8-bf8a-c1d6fb8f2c17)**
Soru Kökü: Dişleri çevreleyen alveolar kemiğin lamina dura tabakası, sistemik metabolik hastalıkların teşhisinde önemli bir radyografik indikatördür. Aşağıdaki hastalıkların hangisinde lamina dura kalınlığında bir azalma (incelme veya tamamen kaybolma) görülmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis (Mermer kemik hastalığı)
Açıklama: Hiperparatiroidizm (osteoklast aktivitesi), osteoporoz, rikets, osteomalazi ve renal osteodistrofi gibi hastalıkların tümünde kemik mineral kütlesinde kayıp meydana geldiğinden lamina durada belirginlik kaybı veya incelme görülür. Osteopetrozis ise kemik rezorpsiyonunun bloke olduğu ve kemik yapımının masif şekilde arttığı mermer kemik hastalığıdır. Bu nedenle osteopetroziste lamina durada incelme değil, aksine kalınlaşma ve sklerotik bir yoğunluk artışı beklenir.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 187 (Benzerlik: 0.72)

**Soru 1 (ID: 51a8f376-c485-4f8d-9db6-3c1a61c94b53)**
Soru Kökü: Skleroderma hastalarının radyografik incelemesinde sıklıkla izlenen; mandibula angulusu, koronoid çıkıntı ve kondil gibi bölgelerdeki belirgin eroziv kemik yıkımının birincil nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Rijit hale gelen cilt ve yumuşak dokuların kas tutunma yerlerine uyguladığı basınç
Açıklama: Sklerodermada mandibula angulusu ve kondili gibi kas tutunma bölgelerinde görülen erozyonların patofizyolojik nedeni, aşırı kollajen depozisyonuyla rijit ve sert hale gelen yumuşak dokuların hareket sırasında alttaki kemiğe kronik anormal basınç uygulamasıdır. Eritropoetik hiperplazi talasemi ve orak hücreli aneminin bulgusudur. Hastalığın temelinde osteoklastik bir hiperparatiroidizm varyantı değil, mekanik stres ve basınç erozyonu bulunur.

**Soru 2 (ID: de9e3e13-99c1-4189-907c-7f4c77189568)**
Soru Kökü: Skleroderma (Progresif Sistemik Skleroz) hastalarında görülen aşırı kollajen depozisyonu ve iskemik değişiklikler çene kemiklerinde spesifik erozyonlara yol açar. Hastalığın ilerleyen evrelerinde kemik rezorpsiyonunun derinleşerek **patolojik fraktür** gelişimi açısından en yüksek riski taşıyan anatomik lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Mandibula angulus bölgesi
Açıklama: Sklerodermada maseter ve medial pterigoid kasların tutunma yeri olan mandibula angulusu, koronoid çıkıntı ve digastrik fossa bölgelerinde basınç sekonderi eroziv kemik yıkımı izlenir. Angulus bölgesindeki bu incelme, çiğneme kuvvetleri altında patolojik mandibula kırıklarına doğrudan zemin hazırlar ve klinik takibi hayati öneme sahiptir.

---

### ÇİFT 188 (Benzerlik: 0.72)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 189 (Benzerlik: 0.72)

**Soru 1 (ID: 054f395b-afc5-4e8d-b51e-6ae1ecbf2085)**
Soru Kökü: Rikets hastalığının şiddetli formlarında kemiklerde eğrilmeler ve O bacak deformitelerinin yanı sıra, panoramik radyografide dişi çevreleyen radyopatik yapıda da patolojik değişimler görülür. Tablo 14 verilerine göre bu bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Lamina durada incelme
Açıklama: Riketste kemik matriksinin (osteoid) üretilmesine rağmen kalsifiye olamaması sonucu trabeküller ve kortikal yapılar mineralden fakirleşir. Bu radyolojik olarak kemik dansitesinde azalma ve diş yuvasını sınırlayan radyopatik hat olan lamina duranın belirgin şekilde incelmesi veya şiddetli vakalarda kaybolması (Tablo 14) şeklinde yansır.

**Soru 2 (ID: c664831f-4b3c-4198-81c7-06f3f2b34f9d)**
Soru Kökü: Bebeklik döneminde D vitamini eksikliği, kafatasında kraniyo-tabes ve bacaklarda O şeklinde deformite hikayesi olan raşitizm (Rickets) hastasında, çene kemik dansitesinde hangi radyografik değişim beklenir?
Doğru Şık (D): Dansitede azalma
Açıklama: Rikets tablosunda aktif D vitamini eksikliğine bağlı kalsiyum absorbsiyon defekti yaşanır; bu da osteoid dokunun mineralize olamamasına ve generalize kemik dansitesinde azalmaya neden olur. Radyografide bu durum kansellöz kemikte lüsensi ve kortikal yapılarda incelme olarak izlenir. Opasite veya sement dansitesinde artış kalsifikasyon defekti olan bu tabloda fizyolojik olarak imkansızdır.

---

### ÇİFT 190 (Benzerlik: 0.72)

**Soru 1 (ID: bad1ffc3-a183-480f-a8ec-199aca44342c)**
Soru Kökü: Yetişkinlerde kemiklerde yumuşama, kas zayıflığı ve pseudofraktürlerle karakterize osteomalazya hastalarının (Tablo 14) çene kemiği radyografik bulgularıyla ilgili olarak aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (D): Tablo 14'e göre uzun vadede tam ve kesin bir diş kaybı beklenir.
Açıklama: Osteomalazya yetişkinlikte ortaya çıktığı için dişlerin kalsifikasyon dönemi bitmiştir (mine hipoplazisi olmaz). Kortikal incelme ve lamina dura zayıflığı (Tablo 14: İncelmiş) görülse de, Tablo 14'te osteomalazya için "Diş kaybı" sütununda açıkça "Hayır" yazmaktadır. Alveol kemiği zayıflasa bile doğrudan bir diş dökülme sendromu osteomalazyaya atfedilmez.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 191 (Benzerlik: 0.72)

**Soru 1 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

**Soru 2 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

---

### ÇİFT 192 (Benzerlik: 0.72)

**Soru 1 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 193 (Benzerlik: 0.72)

**Soru 1 (ID: 1a041f55-f2e1-4178-86cf-e6c98d97c8d5)**
Soru Kökü: Yetişkinlerde kalsiyum ve fosfor yetersizliği sonucu 'penguen yürüyüşü' ve kemik ağrısı ile karakterize osteomalazya tablosunda, çene kemikleri dansitesi açısından Tablo 13'te belirtilen spesifik beklenti aşağıdakilerden hangisidir?
Doğru Şık (B): Nadiren azalma
Açıklama: Osteomalazyada uzun kemiklerde psödofraktürler ve kortikal incelmeler görülmesine rağmen, Tablo 13 verilerine göre çene kemiklerinin dansitesinde sıklıkla değil, 'nadiren azalma' izlenir. Bu nadir azalma durumunda radyolüsent bant (psödofraktür) görüntüleri oluşabilir. 'Sıklıkla azalma' hiperparatiroidizm ve rikets için tanımlanırken, osteomalazyada çene kemiği dansite kaybı daha nadirdir.

**Soru 2 (ID: bad1ffc3-a183-480f-a8ec-199aca44342c)**
Soru Kökü: Yetişkinlerde kemiklerde yumuşama, kas zayıflığı ve pseudofraktürlerle karakterize osteomalazya hastalarının (Tablo 14) çene kemiği radyografik bulgularıyla ilgili olarak aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (D): Tablo 14'e göre uzun vadede tam ve kesin bir diş kaybı beklenir.
Açıklama: Osteomalazya yetişkinlikte ortaya çıktığı için dişlerin kalsifikasyon dönemi bitmiştir (mine hipoplazisi olmaz). Kortikal incelme ve lamina dura zayıflığı (Tablo 14: İncelmiş) görülse de, Tablo 14'te osteomalazya için "Diş kaybı" sütununda açıkça "Hayır" yazmaktadır. Alveol kemiği zayıflasa bile doğrudan bir diş dökülme sendromu osteomalazyaya atfedilmez.

---

### ÇİFT 194 (Benzerlik: 0.72)

**Soru 1 (ID: 6d40b3d9-e39d-4d00-9ebd-1262e6fb6b0f)**
Soru Kökü: Kırk beş yaşında erkek hasta, son 5 yıldır ellerinde, ayaklarında ve alt çenesinde sürekli bir büyüme şikayetiyle kliniğe başvuruyor. Yapılan muayenede dilde aşırı büyüme (makroglossi) ve mandibular prognati tespit ediliyor. Bu hastanın lateral sefalometrik veya kafa grafilerinde aşağıdaki bulgulardan hangisinin izlenmesi en olasıdır?
Doğru Şık (C): Sella tursikada genişleme
Açıklama: Akromegalide gözlenen aşırı büyüme hormonu (GH) salınımı, genellikle hipofiz bezinin anterior lobundaki bir adenomdan kaynaklandığı için radyografilerde sella tursika hacminde genişleme izlenir. Kafa tabanında ossifikasyon gecikmesi hipotiroidizmde, dövülmüş bakır görünümü ise hipofosfatazyada beklenen bulgulardır. Sella tursika genişlemesi, yetişkin hiperpituitarizminin pitüiter kökenini işaret eden patognomonik bir radyolojik işarettir.

**Soru 2 (ID: cb5d34dd-366e-46d2-9163-5bcdf0c1c3b3)**
Soru Kökü: Kırk beş yaşında erkek hasta, makroglossi, alt çenede Sınıf III iskeletsel prognati ve dişler arası diastemalarla kliniğe başvuruyor. Radyografide mandibula ramus ile gövde açısının arttığı tespit ediliyor. Yetişkin dönem hiperpituitarizm (Akromegali) ile uyumlu bu tabloda, özellikle posterior bölgede hangi dental sürme anomalisinin görülmesi en olasıdır?
Doğru Şık (D): Posterior dişlerde süper-erüpsiyon
Açıklama: Akromegali hastalarında büyüme hormonu fazlalığına bağlı olarak mandibular kemik büyümesi devam eder ve vertikal alveoler kemik boyutu artar. Tablo 14'te de belirtildiği üzere, bu boyutsal artışı telafi etmek ve oklüzyonu sağlamak adına posterior dişlerde süper-erüpsiyon (aşırı sürme) ile birlikte hipersementoz karakteristiktir. Ankiloz veya gömüklük durumu bu tablonun patofizyolojisiyle çelişir.

---

### ÇİFT 195 (Benzerlik: 0.72)

**Soru 1 (ID: 7f074be7-8e94-4524-b75a-b9c6b9d847ef)**
Soru Kökü: Yedi yaşında çocuk hasta kliniğe rutin kontrol için getirilmiş olup; ailesi tarafından çocuğun çok huzursuz, hiperaktif olduğu, sıklıkla çarpıntı hissettiği ve sıcağa hiç dayanamadığı belirtilmiştir. Yapılan oral muayenede çocuğun kronolojik yaşına kıyasla daimi dişlerinin çok daha erken sürdüğü ve panoramik radyografisinde henüz düşme yaşı gelmemiş süt dişi köklerinde belirgin erken rezorpsiyon alanları tespit edilmiştir. Bu bulgular ışığında hastanın medikal özgeçmişinde hangi sistemik tablonun varlığı en olasıdır?
Doğru Şık (C): Hipertiroidizm
Açıklama: Çocukluk çağında görülen hipertiroidizm; bazal metabolizma hızının yüksekliğine (sıcağa dayanıksızlık, taşikardi, hiperaktivite) paralel olarak diş ve kemik gelişim hızını da artırır; dişler normalden erken sürer ve süt dişi kökleri hızla erir. Rikets veya hipotiroidizm gibi hastalıklarda ise gelişim hızlanmaz, aksine sürme gecikmeleri tablosu yaşanır. Metabolik saatin çok hızlı çalışması, bu erken dental erüpsiyon profili ile doğrudan koreledir.

**Soru 2 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

---

### ÇİFT 196 (Benzerlik: 0.72)

**Soru 1 (ID: 1456820c-8ab3-427b-9f96-40c449a45043)**
Soru Kökü: Aşağıdaki sistemik hastalıkların hangisinde generalize kemik dansitesinde azalma yerine radyografik olarak karakteristik bir kemik opasitesi artışı ve kortikal sınırların belirsizleşmesi izlenir?
Doğru Şık (A): Osteopetrozis
Açıklama: Osteopetrozis, osteoklastların fonksiyon bozukluğuna bağlı olarak kemik rezorpsiyonunun durması ve tüm kemiklerde dansite artışıyla (opasite) karakterize bir hastalıktır. Diğer şıklardaki hastalıkların tamamı kemik rezorpsiyonunda artış, kalsifikasyon defekti veya mineralizasyon bozukluğu yaratarak kemik dansitesinde azalmaya (radyolüsensi) neden olur. Bu durum osteopetrozisi metabolik kemik hastalıkları arasında radyografik olarak spesifik ve tamamen zıt bir konuma yerleştirir.

**Soru 2 (ID: 66891f0c-7462-4101-aff7-f08db8b7bc65)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen yaygın 'granüler' veya 'tuz-biber' görünümü, kemik döngüsünün bozulduğu hastalıklarda kansellöz kemiğin karakteristik bir alterasyonudur. Aşağıdaki sistemik hastalıklardan hangisinin radyografik muayenesinde çenelerde granüler kemik paterni izlenmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis
Açıklama: Osteopetroziste osteoklastik yetmezliğe bağlı kemik rezorpsiyonu durur; bu da tüm trabeküllerin aşırı kalsifiye olmasına, kemik iliğinin kapanmasına ve radyografik olarak tamamen opak/masif (mermer) bir görünüme neden olur. Oysa Hiperparatiroidizm, Cushing, Renal osteodistrofi ve Hipofosfatemide kemik yıkımı ve ince reaktif yapım bir arada olduğu için trabeküller çok küçük, ince kumlu bir benekli yapı (granüler) kazanır.

---

### ÇİFT 197 (Benzerlik: 0.72)

**Soru 1 (ID: 9ec7babe-8a39-40be-8a5f-ad9658d4bb53)**
Soru Kökü: 50 yaşında kronik diyaliz hastasının panoramik radyografisinde maksilla ve mandibulada ekspansiyon ile lamina dura kaybı izlenmiştir. Bu hastanın trabeküler yapısı detaylı incelendiğinde Tablo 13'e göre hangi spesifik radyografik görünüm saptanır?
Doğru Şık (D): Granüler trabekül yapısı
Açıklama: Böbrek yetmezliğine bağlı renal osteodistrofi hastalarında çene trabekülleri granüler bir yapı (tuz-biber görüntüsü) alır. Hair-on-end orak hücreli anemide, dövülmüş bakır hipofosfatazyada, pamuk yumağı ise Paget hastalığında izlenirken, granüler yapı sekonder hiperparatiroidizm kökenli hastalıklarda spesifiktir.

**Soru 2 (ID: cae6bc1b-d36e-41f6-88a0-009f936ccd56)**
Soru Kökü: Renal osteodistrofi hastalarında çene kemiklerindeki trabekül yapısı incelendiğinde, Tablo 13'e göre granüler patern ile birlikte trabekül sayısında hangi iki durum izlenebilir?
Doğru Şık (C): Azalma ve nadiren artış
Açıklama: Renal osteodistrofi mikst karakterli bir patoloji olduğu için radyografide trabekül sayısında genellikle azalma görülmekle birlikte, sklerotik yanıtın ön plana çıktığı bölgelerde 'nadiren artış' da izlenebilir. Bu bulgular eşliğinde kemik yapısı granüler (tuz-biber) bir izlenim verir. Tek tip bir yıkım (sadece azalma) veya hiperplazi tablosu bu hastalığın kompleks doğasını yansıtmaz.

---

### ÇİFT 198 (Benzerlik: 0.72)

**Soru 1 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

**Soru 2 (ID: f71f1f95-d933-4420-82e9-f02bd49c7cfd)**
Soru Kökü: Endokrin sistem hastalıklarında izlenen genel radyografik çene özelliklerinden biri **değildir**?
Doğru Şık (A): Lamina dura belirginliğinde artış
Açıklama: Endokrin hastalıklarında kemik boyutu, şekli, kortikal ve trabeküler yapısı değişir; ancak dişlerde lamina dura belirginliğinin artışı değil, aksine kaybı izlenir. Diğer şıklardaki kemiksel değişiklikler, sistemik endokrin patolojilerin temel radyolojik belirteçleridir.

---

### ÇİFT 199 (Benzerlik: 0.72)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

---

### ÇİFT 200 (Benzerlik: 0.72)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

---

### ÇİFT 201 (Benzerlik: 0.72)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 202 (Benzerlik: 0.72)

**Soru 1 (ID: 6ab57baf-8629-4766-8ffb-3e6b82d6464a)**
Soru Kökü: Osteopetrozis tanılı hastalarda diş çürüğüne karşı olan yüksek yatkınlık ve alveoler kemiğin avasküler yapısına bağlı sıkça gelişen lokal komplikasyonlar sonucunda aşağıdakilerden hangisinin görülmesi Tablo 14'e göre karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Osteopetrozisli hastalarda zayıf kalsifikasyona (hipokalsifikasyon) bağlı artan agresif çürükler ve kalınlaşmış, zayıf kanlanan kemikte kolayca yayılan şiddetli osteomiyelit tabloları erken diş kayıplarıyla sonuçlanır. Dişlerde ankiloz veya kalıcılık değil, enfeksiyonlara ve cerrahi komplikasyonlara sekonder mecburi çekimler/kayıplar ön plandadır. Tedavisi zor olan bu çene enfeksiyonları sıklıkla hiperbarik oksijen ve agresif antibiyotik desteği gerektirir.

**Soru 2 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

---

### ÇİFT 203 (Benzerlik: 0.72)

**Soru 1 (ID: 1cd0131e-7813-4850-8ceb-ae3f02558dc7)**
Soru Kökü: Sistemik metabolik hastalıkların kemik dansitesine etkisi değerlendirildiğinde, çene kemiklerinde belirgin dansite azalması oluşturması **en az olası** hastalık hangisidir?
Doğru Şık (B): Hipoparatiroidizm
Açıklama: Hipertiroidizm, Hipofosfatazya, Cushing sendromu ve Rickets tabloları kemik formasyonunu bozarak veya yıkımını artırarak kemik dansitesinde net azalmaya neden olur. Ancak hipoparatiroidizmde kalsiyum mobilizasyonu durduğu için dansitede azalma izlenmez; aksine Tablo 13'e göre nadiren artma (osteoskleroz) gözlenebilir.

**Soru 2 (ID: 59c6c28a-81b8-41b8-bf8a-c1d6fb8f2c17)**
Soru Kökü: Dişleri çevreleyen alveolar kemiğin lamina dura tabakası, sistemik metabolik hastalıkların teşhisinde önemli bir radyografik indikatördür. Aşağıdaki hastalıkların hangisinde lamina dura kalınlığında bir azalma (incelme veya tamamen kaybolma) görülmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis (Mermer kemik hastalığı)
Açıklama: Hiperparatiroidizm (osteoklast aktivitesi), osteoporoz, rikets, osteomalazi ve renal osteodistrofi gibi hastalıkların tümünde kemik mineral kütlesinde kayıp meydana geldiğinden lamina durada belirginlik kaybı veya incelme görülür. Osteopetrozis ise kemik rezorpsiyonunun bloke olduğu ve kemik yapımının masif şekilde arttığı mermer kemik hastalığıdır. Bu nedenle osteopetroziste lamina durada incelme değil, aksine kalınlaşma ve sklerotik bir yoğunluk artışı beklenir.

---

### ÇİFT 204 (Benzerlik: 0.72)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: dececf98-b751-466a-9e44-8d6dec27ddc0)**
Soru Kökü: Hiperparatiroidizm tanısı almış bir hastanın dental periapikal ve panoramik radyografik incelemesinde kortikal sınırların incelmesi ve lamina dura kaybına ek olarak diş köklerinde en sık aşağıdaki patolojilerden hangisi izlenebilir?
Doğru Şık (A): İnternal ve eksternal kök rezorpsiyonları
Açıklama: Hiperparatiroidizmde kemik yıkımından sorumlu olan osteoklastik aktivitenin sement ve dentin dokusunu da hedef alması sonucunda dişlerde sıklıkla internal ve eksternal kök rezorpsiyonları görülebilir. Hipersementoz ise daha çok akromegali veya tirotoksikoz gibi durumlarda beklenir.

---

### ÇİFT 205 (Benzerlik: 0.72)

**Soru 1 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 206 (Benzerlik: 0.72)

**Soru 1 (ID: 18a51d97-a292-4c6a-bd06-efcfe259bb3a)**
Soru Kökü: Kemik yapım ve yıkım döngüsündeki dengesizlik nedeniyle kemik kitlesinde jeneralize azalma gösteren postmenopozal osteoporozis vakalarında (Tablo 14), periodontal desteği sağlayan radyografik anatomik bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Lamina durada belirgin incelme
Açıklama: Osteoporoziste kemiğin histolojik yapısı normal olmasına rağmen total kütlesi azalmıştır. Radyograflarda bu durum, özellikle mandibula inferior korteksi gibi sınırlar ve dişi saran alveol kemiği duvarı olan lamina duranın incelmesi olarak izlenir. Lamina durada skleroz veya kalınlaşma (osteopetrozis vb. hastalıkların bulgusudur) osteoporotik defekt tablosuna terstir.

**Soru 2 (ID: e74ce7c8-1743-4832-9b3d-292ba934b08f)**
Soru Kökü: Postmenopozal dönemdeki bir kadın hasta, minör bir travma sonrası gelişen mandibula fraktürüyle kliniğe başvuruyor. Panoramik radyografide inferior mandibular kortekste belirgin incelme saptanıyor. Biyopsi sonucu kemiğin mikroskobik/histolojik yapısının normal olduğu ancak toplam kemik kütlesinin azaldığı rapor edildiğine göre, bu patolojinin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik yapım ve yıkım döngüsündeki hücresel dengesizlik
Açıklama: Osteoporoz, kemik organik matriksinin (histolojik yapısının) normal olduğu, ancak osteoblastik yapım ile osteoklastik yıkım arasındaki dengenin yıkım lehine bozulmasıyla kemik kütlesinin jeneralize azaldığı durumdur. D vitamini eksikliği çeldiricisi yanlıştır çünkü D vitamini eksikliğinde histolojik yapı normal kalmaz, matriks kalsifiye olamadığı için defektif (osteoid) doku birikir (osteomalazi/rikets). Mandibular kortikal incelme bu hastalarda en önemli radyografik göstergelerden biridir.

---

### ÇİFT 207 (Benzerlik: 0.72)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 208 (Benzerlik: 0.72)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: 9ba1ae4e-85db-470e-912b-52a08b9c3cf4)**
Soru Kökü: Endokrin sistem hastalıklarında dişlerde görülen genel gelişimsel ve radyografik anormallikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (B): Mine insizal kenarlarında aşırı atrisyon
Açıklama: Endokrin hastalıklarda sürmede hızlanma veya gecikme, hipoplazi, hipokalsifikasyon ve lamina dura belirginliğinin kaybı görülür. Aşınma (atrisyon) lokal faktörlere bağlı mekanik bir kayıptır ve endokrin sistemin doğrudan bir bulgusu olarak belirtilmez.

---

### ÇİFT 209 (Benzerlik: 0.72)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 210 (Benzerlik: 0.72)

**Soru 1 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 211 (Benzerlik: 0.72)

**Soru 1 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

**Soru 2 (ID: c664831f-4b3c-4198-81c7-06f3f2b34f9d)**
Soru Kökü: Bebeklik döneminde D vitamini eksikliği, kafatasında kraniyo-tabes ve bacaklarda O şeklinde deformite hikayesi olan raşitizm (Rickets) hastasında, çene kemik dansitesinde hangi radyografik değişim beklenir?
Doğru Şık (D): Dansitede azalma
Açıklama: Rikets tablosunda aktif D vitamini eksikliğine bağlı kalsiyum absorbsiyon defekti yaşanır; bu da osteoid dokunun mineralize olamamasına ve generalize kemik dansitesinde azalmaya neden olur. Radyografide bu durum kansellöz kemikte lüsensi ve kortikal yapılarda incelme olarak izlenir. Opasite veya sement dansitesinde artış kalsifikasyon defekti olan bu tabloda fizyolojik olarak imkansızdır.

---

### ÇİFT 212 (Benzerlik: 0.72)

**Soru 1 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 213 (Benzerlik: 0.72)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

---

### ÇİFT 214 (Benzerlik: 0.72)

**Soru 1 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

**Soru 2 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

---

### ÇİFT 215 (Benzerlik: 0.72)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: 81b0f304-d0f2-4d52-a96f-5f8a0b95a6c3)**
Soru Kökü: Hiperparatiroidizmin çok ilerlemiş evrelerinde diş hekimi radyografide diş köklerinin morfolojik olarak sağlam olmasına rağmen diğer dokulardan son derece keskin bir kontrastla ayrılarak aşırı düzeyde beyaz (radyoopak) göründüğünü fark eder. Bu optik illüzyonun radyolojik açıklaması aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik kemik kaybının çevresel alveol kemiğini tamamen radyolüsent hale getirip dişleri öne çıkarması
Açıklama: Hastalık sürecinde yüksek parathormon, kalsiyumu sadece alveolar kemikten rezerve eder, minenin ve dentinin kalsiyum metabolizması kemik gibi değişmez. Çevre kemik radyografide iyice siyah (radyolüsent) bir zemin oluşturduğu için, mineralize kalmaya devam eden dişler arka plana göre son derece radyoopak öne çıkar.

---

### ÇİFT 216 (Benzerlik: 0.72)

**Soru 1 (ID: 52a71068-b55a-4cbd-aa98-f0f95b3cc5fa)**
Soru Kökü: Tablo 13'e göre, kemik dansitesini etkilemesine rağmen çene kemiklerindeki trabeküler yapının sayısında veya morfolojisinde istatistiksel olarak bir değişim yaratmayan hastalık hangisidir?
Doğru Şık (E): Hipertiroidizm
Açıklama: Hipertiroidizm kemik döngüsünü hızlandırıp total kemik dansitesinde azalmaya neden olsa da, Tablo 13 verilerinde trabekül yapısında nicel (artma/azalma) veya nitel (granüler) bir değişim yaratmadığı belirtilmiştir. Osteoporozis, osteomalazya ve renal osteodistrofi gibi tablolar ise trabeküler ağı doğrudan zayıflatır veya sayısını değiştirir.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 217 (Benzerlik: 0.72)

**Soru 1 (ID: 2f9558c6-91d9-46d0-8484-16f728b87fee)**
Soru Kökü: Renal osteodistrofi hastalarının panoramik radyografilerinde 'tuz-biber' görünümü ile birlikte periodontal aralığı çevreleyen yapılarda belirgin değişiklikler izlenir. Bu hastalarda lamina dura görünürlüğünde azalma veya kaybolmanın temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik sklerozu gelişmesi veya kemik dansitesindeki bölgesel değişimler
Açıklama: Renal osteodistrofide lamina duranın kaybolması, kemik sklerozu gelişmesi veya kemiğin radyografik görünürlüğünün azalması (osteolitik alanlar) sonucunda ortaya çıkar. Osteoklastik aktivitenin durması osteopetroziste görülürken, böbrek yetmezliğinde hiperparatiroidizm sekonder olarak kemik döngüsünü bozar. Çene kemiklerinde artan granüler yapı ve sklerotik odakların varlığı, normal lamina dura kretinin seçilebilmesini engeller.

**Soru 2 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

---

### ÇİFT 218 (Benzerlik: 0.71)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 219 (Benzerlik: 0.71)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

---

### ÇİFT 220 (Benzerlik: 0.71)

**Soru 1 (ID: f3a227bb-b9c7-48d1-a2d8-9ad560999d6f)**
Soru Kökü: D vitaminine dirençli rikets olarak da bilinen hipofosfatemi sendromunda, osseöz dokuların kalsifikasyonunu bozan birincil etyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Aşırı fosfor atılmasına yol açan renal tübüler bozukluk
Açıklama: Hipofosfatemi, renal tübüler bozukluklara bağlı olarak böbreklerden aşırı fosfor atılımı sonucu kandaki fosfat seviyesinin düşmesi ve buna bağlı kemik kalsifikasyonunun bozulması ile karakterizedir. ALP yokluğu hipofosfatazyanın temel nedeni olup, hipofosfatemi ile etyolojik olarak tamamen farklıdır. Otoimmün kalsiyum emilim bloğu veya kalsitonin eksikliği bu hastalığın mekanizmasında yer almaz.

**Soru 2 (ID: f978abcd-e16f-4e42-8c73-6c6820bd19cf)**
Soru Kökü: Hipofosfatazya hastalarında osteoidin normal mineralizasyonunun gerçekleşememesinin en temel moleküler nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Alkalen fosfataz (ALP) enziminin üretim veya işlev defekti
Açıklama: Hipofosfatazya, ortofosfatlardan inorganik fosfatların salınımını sağlayan ve osteoid mineralizasyonu için şart olan Alkalen Fosfataz (ALP) enziminin genetik olarak az üretilmesi veya disfonksiyonudur. Böbreklerden fosfor atılımının artması durumu hipofosfatemiye ait bir özellik olup, hipofosfatazya ile karıştırılmaması gereken güçlü bir çeldiricidir. Hastalığın temelinde parathormon veya D vitamini defekti değil, doğrudan ALP eksikliği yatar.

---

### ÇİFT 221 (Benzerlik: 0.71)

**Soru 1 (ID: 635187cb-9809-4970-99f4-6d91a14c9bc8)**
Soru Kökü: Çeşitli endokrin hastalıkların genel kemik dansitesine ve diş sürme paternlerine etkileri bağlamında yapılan eşleştirmelerden;
I. Hipotiroidizm -> Gecikmiş diş sürmesi
II. Hiperparatiroidizm -> Lamina dura belirginliğinde kayıp
III. Hipertiroidizm -> Generalize kemik dansitesinde sklerotik artış
IV. Hipopituitarizm -> Diş germlerinin (özellikle 3. molar) oluşmaması
Yukarıdakilerden hangileri doğrudur?
Doğru Şık (C): I, II ve IV
Açıklama: Hipotiroidizm (miksödem) bazal metabolizmayı yavaşlatarak dişlerin sürmesini geciktirir (I doğru). Hiperparatiroidizm aşırı kemik rezorpsiyonu ile lamina dura kaybı yapar (II doğru). Hipopituitarizmde iskeletsel dwarifizm ile birlikte 3. molar diş germlerinin hiç oluşmayabildiği sendromik dentisyon defektleri görülür (IV doğru). Ancak hipertiroidizm kemik dansitesinde sklerotik artış yapmaz; metabolizmayı aşırı hızlandırarak kemik döngüsünü bozar ve kortikal incelmelerle karakterize sekonder osteoporoza neden olur (III yanlış).

**Soru 2 (ID: ebda6e73-cb48-482a-8039-e1b60290e601)**
Soru Kökü: Dişlerin sürme zamanlarındaki gecikme veya malformasyonlar sistemik hastalıklar için diagnostik bir ipucudur. 
I. Hipotiroidizm
II. Hipertiroidizm
III. Rikets
IV. Cushing sendromu
Yukarıdaki sistemik durumlardan hangilerinde dişlerin ağız ortamına sürmesinde belirgin bir **gecikme** beklenir?
Doğru Şık (C): I ve III
Açıklama: Kemik gelişim hızının yavaşladığı Hipotiroidizm, mineralizasyon defekti olan Rikets ve Hipofosfatazya gibi hastalıklarda diş sürmesi gecikir (I ve III). Buna karşın, tiroid hormonunun fazla olduğu Hipertiroidizmde erken (prematür) erüpsiyon görülürken, Cushing sendromunda da glukokortikoid mekanizmalarına bağlı dişlerin erken sürmesi beklenebilir. Sürme gecikmesi metabolizmanın ve anabolik sürecin yavaşladığı hastalıklara özgüdür.

---

### ÇİFT 222 (Benzerlik: 0.71)

**Soru 1 (ID: 6ab10a67-ce32-4e28-adfb-b1110e2d5ab6)**
Soru Kökü: Yaygın periodontal apse şikayetiyle kliniğe başvuran 28 yaşındaki kontrolsüz diyabet hastasının genel durumunun letarjik olduğu ve nefesinde belirgin bir aseton kokusu bulunduğu fark edilmiştir. Şiddetli diyabet komplikasyonu (ketoasidoz) geçiren bu hastada, söz konusu tabloya eşlik etmesi **en az olası** hücresel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Hücresel immünitenin hiperaktif hale gelmesi
Açıklama: Diyabetik hastalarda kronik hiperglisemi ve metabolik asidoz, hücresel immüniteyi hiperaktif hale getirmez; aksine baskılayarak bozar. Nötrofil ve monosit fonksiyonlarında bozulma çeldiricisi hastada görülmesi kesin olan bir patolojidir ve hastanın periodontal apse geliştirmesinin temel nedenidir. Şiddetli asidoz durumunda izlenen nefes ve idrardaki aseton kokusu, yağ metabolizmasının son ürünü olan keton cisimciklerinin birikimini gösterir.

**Soru 2 (ID: 918129e4-0a10-4938-bd10-6eeaadf7108c)**
Soru Kökü: 45 yaşında erkek hasta; diş etlerinde yaygın kanama, mobilite ve tekrarlayan apikal abseler nedeniyle başvuruyor. Alınan radyografide diyabeti olmayan bir hastadaki periodontal yıkım ile görüntü bazında ayırt edilemeyen, ancak kronolojik olarak çok daha hızlı ilerlemiş bir alveolar kemik kaybı izleniyor. Bu hastanın radyografik ve klinik periodontal tablosunu diyabete bağlayan temel hücresel zemin aşağıdakilerden hangisidir?
Doğru Şık (A): Bakteri kolonizasyonunun artması ve hücresel immünitenin bozulması
Açıklama: Diyabette radyografik olarak spesifik bir kemik bulgusu olmamasına rağmen, hiperglisemi kaynaklı bozulan monosit/nötrofil fonksiyonları (immün yetmezlik) ve tükürükteki yüksek glikoz, bakteriyel kolonizasyonu dramatik şekilde hızlandırır. Osteoblastların doğrudan apoptozu çeldiricisi yanlıştır; alveolar yıkım otoimmün veya direkt hormonal değil, enfeksiyon kaynaklı inflamatuvar bir süreçtir. Bu tablo diyabetlilerde izlenen agresif periodontal hastalığın ana mekanizmasıdır.

---

### ÇİFT 223 (Benzerlik: 0.71)

**Soru 1 (ID: 6c719faa-87e9-4f86-b840-dcd979c0ec31)**
Soru Kökü: Osteomalazya hastalarının radyografik incelemesinde çene kemiklerinde trabekül sayısında izlenen spesifik istatistiksel eğilim Tablo 13'e göre hangisidir?
Doğru Şık (E): Nadiren azalma
Açıklama: Yetişkinlerde görülen D vitamini eksikliğinde (osteomalazya), kemik kütlesi daha önce oluştuğu için rikets kadar şiddetli çene bulguları vermez ve trabekül sayısında sadece 'nadiren azalma' izlenir. Çene kemiklerinde trabekülasyonda yaygın (sıklıkla) azalma çocukluk çağı varyantı olan rikets'te görülür. Granüler patern ise bu metabolik bozukluğun bir parçası değildir.

**Soru 2 (ID: 7981b751-0fde-4ef7-aeaf-821069a2e020)**
Soru Kökü: Osteoporoz hastalarının radyografik muayenesinde, kemik formasyonundaki azalmaya ikincil olarak trabekül yapısında Tablo 13'e göre hangi değişim saptanır?
Doğru Şık (C): Trabekül sayısında azalma
Açıklama: Osteoporozda trabeküler kemik hacmindeki kayıp, radyografik olarak trabekül sayısında, boyutunda ve kalınlığında azalma olarak yansır. Osteoporozda trabeküller incelir ve seyrekleşir ancak hiperparatiroidizm veya Cushing sendromunda izlenen karakteristik granüler yapı oluşmaz. Mozaik patern ise Paget hastalığına ait histolojik bir bulgudur.

---

### ÇİFT 224 (Benzerlik: 0.71)

**Soru 1 (ID: 59dbbcb0-d1b7-4165-9fe6-5ec3aa1688b7)**
Soru Kökü: On iki yaşında erkek hasta, yaşıtlarına göre boy kısalığı ve çeneler arası uyumsuzluk şikayetiyle ortodonti kliniğine başvurmuştur. Çocuğun ekstremite oranları (kol/bacak) gövdesine göre normaldir ancak iskeleti genel olarak çok küçüktür. Sefalometrik analizde maksillanın normalden küçük, mandibulanın ise maksilladan daha da küçük ve geri pozisyonda olduğu belirlenmiştir. Bu klinik tablonun altında yatan en olası endokrin/gelişimsel bozukluk aşağıdakilerden hangisidir?
Doğru Şık (A): Hipopituitarizm (Hipofizer Cücelik)
Açıklama: Vücut oranlarının normal kalmasına rağmen hastanın genel iskelet sisteminin küçük olması ve mandibulanın maksillaya oranla belirgin bir şekilde geride kalarak mikrognati yaratması hipopituitarizm (dwarfizm) için karakteristiktir. Akondroplazide ekstremiteler gövdeye göre çok daha kısadır ve baş orantısız büyüktür. Bu orantılı (simetrik) büyüme geriliği tablosu, doğrudan hipofizden salınan büyüme hormonunun yetersizliğine işaret eder.

**Soru 2 (ID: 85e1bb6d-f98c-40c3-8fe4-8d7c5c937661)**
Soru Kökü: Gövde oranları normal ancak çeneleri gelişimsel olarak yaşına göre oldukça küçük olan ve "cücelik (dwarfizm)" tanısı almış on yaşındaki hastanın (hipopituitarizm) dental gelişimi hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (E): Daimi dişlerin kronları normal boyutlardadır ancak sürmelerinde gecikme görülür.
Açıklama: Hipopituitarizm hastalarında diş gelişim hızı düşüktür; süt dişlerinin düşmesi birkaç yıl gecikebilir ve daimi dişlerin sürmesi de gecikir. Ancak dişlerin kron boyutları normaldir, sorun çenelerin, özellikle mandibulanın küçük kalmasıdır. Küçük çene ve normal boyuttaki diş kronları şiddetli çapraşıklık ile maloklüzyonlara sebep olur.

---

### ÇİFT 225 (Benzerlik: 0.71)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: 6c719faa-87e9-4f86-b840-dcd979c0ec31)**
Soru Kökü: Osteomalazya hastalarının radyografik incelemesinde çene kemiklerinde trabekül sayısında izlenen spesifik istatistiksel eğilim Tablo 13'e göre hangisidir?
Doğru Şık (E): Nadiren azalma
Açıklama: Yetişkinlerde görülen D vitamini eksikliğinde (osteomalazya), kemik kütlesi daha önce oluştuğu için rikets kadar şiddetli çene bulguları vermez ve trabekül sayısında sadece 'nadiren azalma' izlenir. Çene kemiklerinde trabekülasyonda yaygın (sıklıkla) azalma çocukluk çağı varyantı olan rikets'te görülür. Granüler patern ise bu metabolik bozukluğun bir parçası değildir.

---

### ÇİFT 226 (Benzerlik: 0.71)

**Soru 1 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 227 (Benzerlik: 0.71)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

---

### ÇİFT 228 (Benzerlik: 0.71)

**Soru 1 (ID: 9ba1ae4e-85db-470e-912b-52a08b9c3cf4)**
Soru Kökü: Endokrin sistem hastalıklarında dişlerde görülen genel gelişimsel ve radyografik anormallikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (B): Mine insizal kenarlarında aşırı atrisyon
Açıklama: Endokrin hastalıklarda sürmede hızlanma veya gecikme, hipoplazi, hipokalsifikasyon ve lamina dura belirginliğinin kaybı görülür. Aşınma (atrisyon) lokal faktörlere bağlı mekanik bir kayıptır ve endokrin sistemin doğrudan bir bulgusu olarak belirtilmez.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 229 (Benzerlik: 0.71)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

---

### ÇİFT 230 (Benzerlik: 0.71)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: f4bd6d9a-f7d4-477d-98ae-29a885221b02)**
Soru Kökü: Akromegali hastalarında kafa tabanı ve kraniyofasiyal komplekste karşılaşılan radyografik değişiklikler arasında aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Frontal sinüs başta olmak üzere paranazal sinüslerde aplazi ve daralma
Açıklama: Akromegali hastalığında kraniyal kemiklerdeki osteoblastik aktivite artışıyla supraorbital çıkıntılar belirginleşir ve altındaki frontal sinüsler dahil paranazal sinüsler aşırı derecede pnömatize olur (genişler). Sinüs gelişiminde yetersizlik hipotiroidizm (kretinizm) gibi hipometabolik durumlarda izlenir.

---

### ÇİFT 231 (Benzerlik: 0.71)

**Soru 1 (ID: 4d893071-77ae-4f58-ae9d-f9402266cca9)**
Soru Kökü: Metabolik kemik hastalıklarına sahip iki farklı çocuk hastadan birincisinde 'süt kesici dişlerinin kök rezorpsiyonu olmaksızın spontan erken dökülmesi', ikincisinde ise 'sağlam (çürüksüz) dişlerde genişlemiş pulpa boynuzlarına bağlı spontan periapikal apseler' saptanmıştır. Bu klinik senaryolara göre, birinci ve ikinci hastanın en olası ayırıcı tanıları sırasıyla aşağıdakilerden hangisidir?
Doğru Şık (B): Hipofosfatazya - Hipofosfatemi
Açıklama: Süt dişlerinin travma veya fizyolojik kök rezorpsiyonu olmaksızın erken dökülmesi (özellikle kesiciler), alkalen fosfataz eksikliği ile seyreden hipofosfatazya sendromunun pathognomonik majör bulgusudur. Buna karşın dişlerin pulpa boynuzlarının mine-dentin sınırına kadar uzanarak çürük olmaksızın mikroorganizma invazyonuna (spontan periapikal apseler) yol açması, D vitamini dirençli rikets olan hipofosfatemi hastalığının en belirgin ayırıcı komplikasyonudur.

**Soru 2 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

---

### ÇİFT 232 (Benzerlik: 0.71)

**Soru 1 (ID: bf22c087-8c5a-4055-964f-1de88fcf6335)**
Soru Kökü: Hipofosfatemi hastalarında, trabekül sayısındaki azalmaya ek olarak kemik mikro-mimarisi Tablo 13'e göre hangi spesifik kalitatif özelliği sergiler?
Doğru Şık (C): Granüler trabeküler yapı
Açıklama: Hipofosfatemide yetersiz kalsifikasyon ve değişen kemik döngüsü sonucu çenelerde granüler trabeküler yapı izlenir. Bu granüler görünüm, osteoporotik kemik matriksinin tipik radyografik yansımasıdır. Dövülmüş bakır görünümü hipofosfatazyada kafatasında izlenirken, hipofosfatemik rikets çenede granüler formdadır.

**Soru 2 (ID: cae6bc1b-d36e-41f6-88a0-009f936ccd56)**
Soru Kökü: Renal osteodistrofi hastalarında çene kemiklerindeki trabekül yapısı incelendiğinde, Tablo 13'e göre granüler patern ile birlikte trabekül sayısında hangi iki durum izlenebilir?
Doğru Şık (C): Azalma ve nadiren artış
Açıklama: Renal osteodistrofi mikst karakterli bir patoloji olduğu için radyografide trabekül sayısında genellikle azalma görülmekle birlikte, sklerotik yanıtın ön plana çıktığı bölgelerde 'nadiren artış' da izlenebilir. Bu bulgular eşliğinde kemik yapısı granüler (tuz-biber) bir izlenim verir. Tek tip bir yıkım (sadece azalma) veya hiperplazi tablosu bu hastalığın kompleks doğasını yansıtmaz.

---

### ÇİFT 233 (Benzerlik: 0.71)

**Soru 1 (ID: 1cd0131e-7813-4850-8ceb-ae3f02558dc7)**
Soru Kökü: Sistemik metabolik hastalıkların kemik dansitesine etkisi değerlendirildiğinde, çene kemiklerinde belirgin dansite azalması oluşturması **en az olası** hastalık hangisidir?
Doğru Şık (B): Hipoparatiroidizm
Açıklama: Hipertiroidizm, Hipofosfatazya, Cushing sendromu ve Rickets tabloları kemik formasyonunu bozarak veya yıkımını artırarak kemik dansitesinde net azalmaya neden olur. Ancak hipoparatiroidizmde kalsiyum mobilizasyonu durduğu için dansitede azalma izlenmez; aksine Tablo 13'e göre nadiren artma (osteoskleroz) gözlenebilir.

**Soru 2 (ID: ba7868fa-9937-4994-88d9-c4cc90b9216a)**
Soru Kökü: Tablo 13 referans alındığında, çene kemiklerinde genel olarak kemik dansitesi azalmasına rağmen 'nadiren artma' (osteoskleroz) bulgusunun da raporlanabildiği sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Renal osteodistrofi
Açıklama: Renal osteodistrofi kompleks bir metabolik hastalıktır ve fasiyal kemiklerde 'tuz-biber' görüntüsü yaratan osteolitik ve osteosklerotik bölgeleri aynı anda barındırabilir. Bu nedenle Tablo 13'te kemik dansitesinin temel olarak azaldığı ancak 'nadiren arttığı' belirtilir. Osteoporoz ve Cushing sendromunda ise sadece dansite azalması mevcuttur, osteosklerotik odak görülmez.

---

### ÇİFT 234 (Benzerlik: 0.71)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

---

### ÇİFT 235 (Benzerlik: 0.71)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: 94b67e5b-9dbf-4774-8402-5004cef3a442)**
Soru Kökü: Hipofosfatazya hastalarının radyografik değerlendirmesinde Tablo 14 verilerine göre lamina dura ve kortikal sınırların durumu hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (C): Lamina dura kaybı ve kortikal sınırda incelme görülür.
Açıklama: Hipofosfatazya, alkalen fosfataz enziminin yetersizliğine bağlı olarak osteoidin normal mineralize olamamasıyla karakterizedir ve bu durum lamina dura ile kortikal sınırlarda incelme veya kayıp oluşturur. Lamina durada kalınlaşma osteopetroziste görülürken, hipofosfatazyada alveoler kemik dansitesinde azalma mevcuttur. Hastalarda dişlerin ince mine, dentin ve sement yapısına sekonder olarak lamina dura net olarak izlenemez.

---

### ÇİFT 236 (Benzerlik: 0.71)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 237 (Benzerlik: 0.71)

**Soru 1 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 238 (Benzerlik: 0.71)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

---

### ÇİFT 239 (Benzerlik: 0.71)

**Soru 1 (ID: 6d9fb45b-b404-4e9b-91ca-9deac01912dc)**
Soru Kökü: Daimi dişlerinin hala sürmemesi şikayetiyle başvuran çocuk hastanın radyografisinde diş köklerinin kısa kaldığı ve lamina durada kalınlaşma olduğu görülüyor. Klinik olarak donuk yüz, büyük dil ve zihinsel gelişimde yavaşlık izlenen bu hipotiroidizm vakasında, diş sürme döngüsündeki bu tablonun (Tablo 14) tanımı aşağıdakilerden hangisidir?
Doğru Şık (D): Gecikmiş sürme
Açıklama: Hipotiroidizmde yetersiz tiroid hormonu iskelet ve kalsifikasyon süreçlerini yavaşlattığı için "gecikmiş sürme" karakteristiktir (Tablo 14). Makroglossi varlığı ortodontik bozukluk yaratır ve süt dişlerinin dökülmemesi daimi foliküllerin yolunu kapatarak bu gecikmeyi anatomik olarak da şiddetlendirir. Erken sürme veya agenezi söz konusu değildir.

**Soru 2 (ID: 74f4591d-00fe-4028-ab6b-71064d6a28af)**
Soru Kökü: Dişlerde eksternal kök rezorpsiyonu, daimi dişlerin sürmesinde gecikme ve kısa kök gelişimi ile karakterize olan, kafa tabanında ossifikasyon gecikmesinin eşlik ettiği endokrin anomali aşağıdakilerden hangisidir?
Doğru Şık (C): Hipotiroidizm
Açıklama: Hipotiroidizm (kretinizm/miksödem), tiroid hormonlarının yetersizliğine bağlı olarak bazal metabolizma hızının düştüğü ve dişlerde eksternal kök rezorpsiyonları, kısa kökler ile sürme gecikmelerinin izlendiği tablodur. Hipertiroidizm çeldiricisi yanlıştır çünkü bu patolojide metabolizma hızı artar, diş sürmesi hızlanır ve süt dişlerinde erken rezorpsiyon görülür. Lamina durada kalınlaşma ve makroglossi, hipotiroidizmin oral kavitedeki diğer spesifik yansımalarıdır.

---

### ÇİFT 240 (Benzerlik: 0.71)

**Soru 1 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

**Soru 2 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

---

### ÇİFT 241 (Benzerlik: 0.71)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: 9a623075-2c0b-4e72-a544-5fda9d26739d)**
Soru Kökü: Çocukluk çağında D vitamini eksikliğine (Rikets) maruz kalmış hastanın dental ve radyografik tablosunda;
I. Mine hipoplazisi
II. Lamina durada incelme
III. Diş sürmesinde gecikme
bulgularından hangilerinin bir arada görülmesi beklenir?
Doğru Şık (E): I, II ve III
Açıklama: Rikets hastalarında kalsiyum eksikliğine bağlı olarak gelişmekte olan ameloblastların fonksiyonu bozulur (Mine hipoplazisi - Tablo 14). Aynı zamanda çevre kemik dokusu yeterli mineralizasyona uğrayamadığı için kortikal sınır ve lamina durada incelme veya silinme görülür. Kemik yapımındaki defekt diş folikülünün itici gücünü de zayıflatarak sürmede belirgin gecikmeye yol açar (Her 3 öncül de doğrudur).

---

### ÇİFT 242 (Benzerlik: 0.71)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: fa9c9929-ab45-4807-aa71-5f5f4ebf7c75)**
Soru Kökü: Sistemik metabolik kemik hastalıklarının çeneler üzerindeki radyografik etkileri incelendiğinde; çenelerin genel boyutunda bir değişiklik olmaksızın, trabekül yapısında belirgin granülerleşme ve generalize kemik dansitesinde azalma ile karakterize olan endokrin kökenli hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Hiperparatiroidizm
Açıklama: Tablo 13 kemik bulgularına göre; hiperparatiroidizmde çene boyutunda büyüme ya da küçülme olmaz, ancak osteoklastik aktivitenin artışına bağlı olarak kemik dansitesi azalır ve kafatası dahil kemiklerde granüler bir görünüm ortaya çıkar. Hipoparatiroidizmde kemik dansitesi nadiren artabilirken, osteopetroziste genel bir artış mevcuttur. Akondroplazi ve hipotiroidizmde ise çene boyutlarında belirgin bir küçülme saptanır.

---

### ÇİFT 243 (Benzerlik: 0.71)

**Soru 1 (ID: 1a041f55-f2e1-4178-86cf-e6c98d97c8d5)**
Soru Kökü: Yetişkinlerde kalsiyum ve fosfor yetersizliği sonucu 'penguen yürüyüşü' ve kemik ağrısı ile karakterize osteomalazya tablosunda, çene kemikleri dansitesi açısından Tablo 13'te belirtilen spesifik beklenti aşağıdakilerden hangisidir?
Doğru Şık (B): Nadiren azalma
Açıklama: Osteomalazyada uzun kemiklerde psödofraktürler ve kortikal incelmeler görülmesine rağmen, Tablo 13 verilerine göre çene kemiklerinin dansitesinde sıklıkla değil, 'nadiren azalma' izlenir. Bu nadir azalma durumunda radyolüsent bant (psödofraktür) görüntüleri oluşabilir. 'Sıklıkla azalma' hiperparatiroidizm ve rikets için tanımlanırken, osteomalazyada çene kemiği dansite kaybı daha nadirdir.

**Soru 2 (ID: 6bab2a95-d12a-4a14-ad62-80880f67f6b2)**
Soru Kökü: Hipokalsemiye bağlı tetani ve kas krampları ile karakterize hipoparatiroidizm tablosunda, çene kemiklerinin radyografik incelmesinde kemik dansitesi açısından Tablo 13'e göre **en az olası** duruma rağmen nadiren de olsa hangi bulgu izlenebilir?
Doğru Şık (D): Nadiren artma
Açıklama: Hipoparatiroidizmde parathormon yetersizliği kalsiyum mobilizasyonunu durdurduğu için genellikle kemik dansitesinde belirgin bir değişiklik izlenmez. Ancak hedef doku yanıtına veya kronik kalsiyum/fosfat dengesizliğine bağlı olarak çene kemiklerinde 'nadiren artma' rapor edilmektedir. Generalize radyolüsensi (azalma) veya granüler yapı hiperparatiroidizmin karakteristik bulgularıdır ve bu hastalıkta görülmez.

---

### ÇİFT 244 (Benzerlik: 0.71)

**Soru 1 (ID: 0ad77dc3-c5db-429b-98ab-3bddb5145f1c)**
Soru Kökü: Hiperparatiroidizm hastalarında osteoklastik ve osteoblastik mekanizmaların aynı anda aşırı hızlanması ile karakterize kemik döngüsünün (turnover) seviyesini gösteren en güvenilir laboratuvar indikatörü aşağıdakilerden hangisidir?
Doğru Şık (D): Serum alkalen fosfataz seviyesi
Açıklama: Hiperparatiroidizmde kalsiyum ve PTH da yüksektir, ancak kemik turnover'ı (döngü hızı) için güvenilir bir indikatör olarak yükselen parametre serum alkalen fosfataz seviyesidir. Kalsiyum seviyesi kemik yıkımının bir sonucu iken, alkalen fosfataz bizzat kemik döngü hızının belirtecidir.

**Soru 2 (ID: 5d7ef7f8-7cd9-4c0e-b5a2-8a006288111d)**
Soru Kökü: Histolojik olarak santral dev hücreli granülom ile birebir aynı görünüme sahip olan ve hiperparatiroidizm şüphesi taşıyan bir 'Brown tümörü' vakasının ayırıcı tanısında, aşağıdaki laboratuvar parametrelerinden hangisinin değerlendirilmesi **en az** değere sahiptir?
Doğru Şık (A): Serbest T3 ve T4 seviyeleri
Açıklama: Primer hiperparatiroidizm ayırıcı tanısında kalsiyum metabolizması belirteçleri anahtardır. Aşırı salgılanan Parathormon (PTH), kalsiyumu kandan çekerek hiperkalsemiye ve böbrekten atılımı artırarak hipofosfatemiye neden olur. Artmış kemik turnoverı ise alkalen fosfatazı yükseltir. Tiroid hormonları (T3, T4) ise tirotoksikoz (hipertiroidi) veya kretinizm (hipotiroidi) testleri olup, hiperparatiroidizm veya Brown tümörü etyolojisinde rol oynamaz.

---

### ÇİFT 245 (Benzerlik: 0.71)

**Soru 1 (ID: 54a3f445-3015-4469-a341-6d2b9ae2b23f)**
Soru Kökü: 42 yaşında kadın hasta, aydede yüzü ve gövdesel obezite klinik tablosu sergilemektedir. Ekzojen kortikosteroid kullanımına bağlı Cushing sendromu gelişen bu hastanın panoramik radyografisinde kemik dansitesinde beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Dansitede azalma
Açıklama: Cushing sendromunda yüksek glukokortikoid seviyesi osteoblastik aktiviteyi baskılar ve direkt/dolaylı yoldan osteoklastik aktiviteyi artırarak net kemik kütlesinde (dansitede) azalmaya neden olur. Bu kayıp, generalize osteoporozis tablosuna ve patolojik kırıklara zemin hazırlar. Opasite artışı veya pamuk yumağı görünümü gibi anabolik kemik patolojileri glukokortikoid fazlalığında kesinlikle beklenmez.

**Soru 2 (ID: fc8167c0-31ee-4b3c-93fb-1381d83d1b93)**
Soru Kökü: İyatrojenik yolla uzun süreli yüksek doz kortikosteroid kullanımı veya böbreküstü bezindeki adenom sonucu gelişen Cushing sendromunun klinik ve radyografik özellikleriyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Glukokortikoid artışı, osteoblastik aktiviteyi tetikleyerek çenelerde hiperosteozis yapar.
Açıklama: Cushing sendromunun temel fizyopatolojisini oluşturan aşırı glukokortikoid seviyeleri, kemik yapımından sorumlu olan osteoblastik aktiviteyi doğrudan baskılar (azaltır) ve osteoklastik yıkımı tetikler. Bu biyolojik mekanizma çenelerde hiperosteozis (kemik yapımı/kalınlaşması) değil; tam tersine generalize sekonder osteoporoz, kemik kütlesinde yıkım ve kortikal incelmelere yol açar. Diğer tüm şıklarda belirtilen immün supresyon, aydede yüzü ve parsiyel lamina dura kayıpları literatürle uyumludur.

---

### ÇİFT 246 (Benzerlik: 0.71)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 247 (Benzerlik: 0.71)

**Soru 1 (ID: 37ab31f8-0c4f-468a-935b-c442b1aef90d)**
Soru Kökü: Altmış beş yaşında kadın hasta, sistemik metabolik kemik hastalığı tedavisi kapsamında uzun süredir bifosfonat grubu ilaç kullandığını belirtiyor. Radyografik muayenesinde mandibula inferior korteksinde incelme saptanan bu hastada, olası bir diş çekimi veya cerrahi müdahale sonrasında çene kemiklerinde görülmesinden en çok endişe edilen istenmeyen yan etki aşağıdakilerden hangisidir?
Doğru Şık (C): Çene kemiklerinde ilaca bağlı osteonekroz gelişimi
Açıklama: Osteoporoz, kemik kütlesindeki azalma ile karakterize olup mandibula inferior korteksinde incelme yapar ve bu hastaların tedavisinde sıklıkla bifosfonat grubu ajanlar reçete edilir. Bifosfonat türevi ilaçlar osteoklast fonksiyonunu güçlü biçimde inhibe ederek kemik döngüsünü durdururlar; bu durum diş çekimi gibi bir travma sonrası çene kemiklerinde yara iyileşmesinin durmasına ve tıpta 'Bifosfonata Bağlı Çene Osteonekrozu' (MRONJ) olarak bilinen şiddetli yan etkiye neden olur.

**Soru 2 (ID: 7f3feb0d-8d1c-4539-a532-f6ecc0648a32)**
Soru Kökü: Altmış beş yaşında postmenopozal kadın hasta, diş çekimi öncesi rutin kontrol amacıyla kliniğe başvuruyor. Alınan panoramik radyografide, hastanın osteoporoz riskini veya varlığını en güçlü şekilde destekleyen spesifik anatomik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Mandibula inferior korteks kalınlığında incelme
Açıklama: Osteoporoz hastalarının panoramik radyografilerinde görsel olarak en erken ve spesifik saptanan kemik mineral yoğunluğu kaybı bulgusu, mandibula inferior korteksindeki (alt sınır) incelme ve osteopenik değişikliklerdir. Angulusta psödofraktür (Looser zonu) osteomalazide izlenirken, hipersementoz akromegali veya Paget hastalığı gibi durumlarda karşımıza çıkar. Kemik kütlesindeki azalma trabeküler ağı ve kortikal sınırları zayıflatır.

---

### ÇİFT 248 (Benzerlik: 0.71)

**Soru 1 (ID: 7a455332-3921-48d0-9586-cff13ddb6c2f)**
Soru Kökü: Tirotoksikoz (Graves hastalığı) tanısı bulunan ve taşikardi şikayetiyle başvuran bir hastanın panoramik radyografisinde, aşağıdaki dental veya iskeletsel bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (D): Diş gelişim hızında artma ve erken sürme
Açıklama: Hipertiroidizmde artmış tiroksin sekresyonuna bağlı olarak bazal metabolizma hızı artar; bu durum diş gelişim hızında ivmelenmeye, dişlerin erken sürmesine ve süt dişi köklerinin erken rezorpsiyonuna yol açar. Artmış metabolizma aynı zamanda osteoporoza neden olarak kortikal sınırlarda skleroz değil, aksine incelme meydana getirir. Sürme gecikmesi ve sklerotik korteks genellikle metabolizmanın yavaşladığı hipotiroidizm olgularında beklenir.

**Soru 2 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

---

### ÇİFT 249 (Benzerlik: 0.71)

**Soru 1 (ID: cb5d34dd-366e-46d2-9163-5bcdf0c1c3b3)**
Soru Kökü: Kırk beş yaşında erkek hasta, makroglossi, alt çenede Sınıf III iskeletsel prognati ve dişler arası diastemalarla kliniğe başvuruyor. Radyografide mandibula ramus ile gövde açısının arttığı tespit ediliyor. Yetişkin dönem hiperpituitarizm (Akromegali) ile uyumlu bu tabloda, özellikle posterior bölgede hangi dental sürme anomalisinin görülmesi en olasıdır?
Doğru Şık (D): Posterior dişlerde süper-erüpsiyon
Açıklama: Akromegali hastalarında büyüme hormonu fazlalığına bağlı olarak mandibular kemik büyümesi devam eder ve vertikal alveoler kemik boyutu artar. Tablo 14'te de belirtildiği üzere, bu boyutsal artışı telafi etmek ve oklüzyonu sağlamak adına posterior dişlerde süper-erüpsiyon (aşırı sürme) ile birlikte hipersementoz karakteristiktir. Ankiloz veya gömüklük durumu bu tablonun patofizyolojisiyle çelişir.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 250 (Benzerlik: 0.71)

**Soru 1 (ID: 5afe8456-815f-472d-b09a-7b3a506f1458)**
Soru Kökü: Kırk beş yaşında kadın hasta, yaygın kemik ağrısı ve kas zayıflığı şikayetiyle başvuruyor. Yürüyüşünün paytak (penguen yürüyüşü) tarzında olduğu gözlemleniyor. Panoramik radyografisinde mandibula angulus bölgesinde psödofraktür ile uyumlu radyolüsent bantlar saptanıyor. Bu hastadaki semptomların temelinde yatan patolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Aktif D vitamini metabolitinin yetersizliğine bağlı mineralizasyon defekti
Açıklama: Yetişkinlerde görülen osteomalazi tablosu, aktif D vitamini metabolitinin yetersizliğine bağlı kalsiyum emilim azlığı ve osteoid mineralizasyonunun bozulması ile karakterizedir. 'Penguen yürüyüşü' ve radyografideki psödofraktürler (Looser zonları) osteomalazinin patognomonik klinik yansımalarıdır. Paratiroid adenomu hiperparatiroidizme neden olarak Brown tümörleri yaparken, osteomalazideki temel sorun aşırı rezorpsiyon değil yetersiz mineralizasyondur.

**Soru 2 (ID: e74ce7c8-1743-4832-9b3d-292ba934b08f)**
Soru Kökü: Postmenopozal dönemdeki bir kadın hasta, minör bir travma sonrası gelişen mandibula fraktürüyle kliniğe başvuruyor. Panoramik radyografide inferior mandibular kortekste belirgin incelme saptanıyor. Biyopsi sonucu kemiğin mikroskobik/histolojik yapısının normal olduğu ancak toplam kemik kütlesinin azaldığı rapor edildiğine göre, bu patolojinin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik yapım ve yıkım döngüsündeki hücresel dengesizlik
Açıklama: Osteoporoz, kemik organik matriksinin (histolojik yapısının) normal olduğu, ancak osteoblastik yapım ile osteoklastik yıkım arasındaki dengenin yıkım lehine bozulmasıyla kemik kütlesinin jeneralize azaldığı durumdur. D vitamini eksikliği çeldiricisi yanlıştır çünkü D vitamini eksikliğinde histolojik yapı normal kalmaz, matriks kalsifiye olamadığı için defektif (osteoid) doku birikir (osteomalazi/rikets). Mandibular kortikal incelme bu hastalarda en önemli radyografik göstergelerden biridir.

---

### ÇİFT 251 (Benzerlik: 0.71)

**Soru 1 (ID: 1456820c-8ab3-427b-9f96-40c449a45043)**
Soru Kökü: Aşağıdaki sistemik hastalıkların hangisinde generalize kemik dansitesinde azalma yerine radyografik olarak karakteristik bir kemik opasitesi artışı ve kortikal sınırların belirsizleşmesi izlenir?
Doğru Şık (A): Osteopetrozis
Açıklama: Osteopetrozis, osteoklastların fonksiyon bozukluğuna bağlı olarak kemik rezorpsiyonunun durması ve tüm kemiklerde dansite artışıyla (opasite) karakterize bir hastalıktır. Diğer şıklardaki hastalıkların tamamı kemik rezorpsiyonunda artış, kalsifikasyon defekti veya mineralizasyon bozukluğu yaratarak kemik dansitesinde azalmaya (radyolüsensi) neden olur. Bu durum osteopetrozisi metabolik kemik hastalıkları arasında radyografik olarak spesifik ve tamamen zıt bir konuma yerleştirir.

**Soru 2 (ID: ba7868fa-9937-4994-88d9-c4cc90b9216a)**
Soru Kökü: Tablo 13 referans alındığında, çene kemiklerinde genel olarak kemik dansitesi azalmasına rağmen 'nadiren artma' (osteoskleroz) bulgusunun da raporlanabildiği sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Renal osteodistrofi
Açıklama: Renal osteodistrofi kompleks bir metabolik hastalıktır ve fasiyal kemiklerde 'tuz-biber' görüntüsü yaratan osteolitik ve osteosklerotik bölgeleri aynı anda barındırabilir. Bu nedenle Tablo 13'te kemik dansitesinin temel olarak azaldığı ancak 'nadiren arttığı' belirtilir. Osteoporoz ve Cushing sendromunda ise sadece dansite azalması mevcuttur, osteosklerotik odak görülmez.

---

### ÇİFT 252 (Benzerlik: 0.71)

**Soru 1 (ID: 88f78318-3d6f-4c7c-9d78-15c8c2e74e98)**
Soru Kökü: Aşağıdakilerden hangisi çocukluk çağı hipotiroidizm (kretinizm) hastalarında, çene-yüz ve kafa kaidesi bölgesinde karşılaşılan radyografik bulgulardan biri **değildir**?
Doğru Şık (D): Diş gelişim hızında artma ve erken erüpsiyon paterni
Açıklama: Hipotiroidizmde (kretinizm) tüm anatomik süreçlerde olduğu gibi dişlerin gelişim ve sürme hızlarında yavaşlama/gecikme vardır; diş gelişiminde artma ve erken erüpsiyon hipertiroidizmin karakteristik bulgusudur. Kısa kökler, lamina dura kalınlaşması, wormian kemik üretimi ve eksternal kök rezorpsiyonları kretinizm tablosunun beklenen radyografik sonuçlarıdır.

**Soru 2 (ID: f4bd6d9a-f7d4-477d-98ae-29a885221b02)**
Soru Kökü: Akromegali hastalarında kafa tabanı ve kraniyofasiyal komplekste karşılaşılan radyografik değişiklikler arasında aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Frontal sinüs başta olmak üzere paranazal sinüslerde aplazi ve daralma
Açıklama: Akromegali hastalığında kraniyal kemiklerdeki osteoblastik aktivite artışıyla supraorbital çıkıntılar belirginleşir ve altındaki frontal sinüsler dahil paranazal sinüsler aşırı derecede pnömatize olur (genişler). Sinüs gelişiminde yetersizlik hipotiroidizm (kretinizm) gibi hipometabolik durumlarda izlenir.

---

### ÇİFT 253 (Benzerlik: 0.71)

**Soru 1 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 254 (Benzerlik: 0.71)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

---

### ÇİFT 255 (Benzerlik: 0.71)

**Soru 1 (ID: 968694b1-5e87-4591-9426-086b253bb215)**
Soru Kökü: Çocukluk döneminden itibaren düzenli tedavi görmeyen talasemi hastalarının dental arklarda ve okluzyonlarında aşağıdaki anormalliklerden hangisinin izlenmesi en olasıdır?
Doğru Şık (A): Protrüze maksilla, artmış overjet ve polidiastemalar
Açıklama: Talasemi majör hastalarında maksiller kemik iliğinin aşırı genişlemesi (hiperplazisi) maksillayı öne ve dışa doğru iter. Bu hacim artışı dişleri yelpaze gibi açarak polidiastemalara (çoklu diş arası boşluklar) ve üst çenenin öne itilmesine bağlı artmış overjet ile protrüze maksilla tablosuna neden olur. Sınıf III maloklüzyon (alt çene önde) akromegalinin bulgusuyken, talasemide patoloji maksiller fazlalıktır.

**Soru 2 (ID: dadae6f1-fab3-49dc-abf3-183b66bd7aff)**
Soru Kökü: Sekiz yaşında kız hasta, ön dişlerindeki aşırı aralanma (polidiastema) ve üst çenesinin öne doğru fırlak (protrüziv) olması şikayetiyle başvuruyor. Anamnezinde düzenli kan transfüzyonu aldığı öğreniliyor. Hastanın radyografilerinde "hair-on-end" görünümü ve üst çene boyutunda belirgin artış saptanıyor. Bu klinik tablonun temel nedeni olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Talasemi
Açıklama: Talasemide kemik iliği hiperplazisi nedeniyle özellikle maksilla (üst çene) boyutunda artış meydana gelir, bu da belirgin premaksilla, dişlerde polidiastema ve rodent-like (kemirgen) yüz profiline neden olur. Akromegali de boyutsal artış yapar ancak bu genellikle mandibulada prognati ve Sınıf III maloklüzyon şeklinde görülür, maksiller fırlaklık talasemi için spesifiktir. "Hair-on-end" görünümü ile anemi öyküsü talasemiyi doğrular.

---

### ÇİFT 256 (Benzerlik: 0.71)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 257 (Benzerlik: 0.71)

**Soru 1 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 258 (Benzerlik: 0.71)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: 81b0f304-d0f2-4d52-a96f-5f8a0b95a6c3)**
Soru Kökü: Hiperparatiroidizmin çok ilerlemiş evrelerinde diş hekimi radyografide diş köklerinin morfolojik olarak sağlam olmasına rağmen diğer dokulardan son derece keskin bir kontrastla ayrılarak aşırı düzeyde beyaz (radyoopak) göründüğünü fark eder. Bu optik illüzyonun radyolojik açıklaması aşağıdakilerden hangisidir?
Doğru Şık (A): Sistemik kemik kaybının çevresel alveol kemiğini tamamen radyolüsent hale getirip dişleri öne çıkarması
Açıklama: Hastalık sürecinde yüksek parathormon, kalsiyumu sadece alveolar kemikten rezerve eder, minenin ve dentinin kalsiyum metabolizması kemik gibi değişmez. Çevre kemik radyografide iyice siyah (radyolüsent) bir zemin oluşturduğu için, mineralize kalmaya devam eden dişler arka plana göre son derece radyoopak öne çıkar.

---

### ÇİFT 259 (Benzerlik: 0.71)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

---

### ÇİFT 260 (Benzerlik: 0.71)

**Soru 1 (ID: 9a623075-2c0b-4e72-a544-5fda9d26739d)**
Soru Kökü: Çocukluk çağında D vitamini eksikliğine (Rikets) maruz kalmış hastanın dental ve radyografik tablosunda;
I. Mine hipoplazisi
II. Lamina durada incelme
III. Diş sürmesinde gecikme
bulgularından hangilerinin bir arada görülmesi beklenir?
Doğru Şık (E): I, II ve III
Açıklama: Rikets hastalarında kalsiyum eksikliğine bağlı olarak gelişmekte olan ameloblastların fonksiyonu bozulur (Mine hipoplazisi - Tablo 14). Aynı zamanda çevre kemik dokusu yeterli mineralizasyona uğrayamadığı için kortikal sınır ve lamina durada incelme veya silinme görülür. Kemik yapımındaki defekt diş folikülünün itici gücünü de zayıflatarak sürmede belirgin gecikmeye yol açar (Her 3 öncül de doğrudur).

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 261 (Benzerlik: 0.71)

**Soru 1 (ID: 7981b751-0fde-4ef7-aeaf-821069a2e020)**
Soru Kökü: Osteoporoz hastalarının radyografik muayenesinde, kemik formasyonundaki azalmaya ikincil olarak trabekül yapısında Tablo 13'e göre hangi değişim saptanır?
Doğru Şık (C): Trabekül sayısında azalma
Açıklama: Osteoporozda trabeküler kemik hacmindeki kayıp, radyografik olarak trabekül sayısında, boyutunda ve kalınlığında azalma olarak yansır. Osteoporozda trabeküller incelir ve seyrekleşir ancak hiperparatiroidizm veya Cushing sendromunda izlenen karakteristik granüler yapı oluşmaz. Mozaik patern ise Paget hastalığına ait histolojik bir bulgudur.

**Soru 2 (ID: 9ec7babe-8a39-40be-8a5f-ad9658d4bb53)**
Soru Kökü: 50 yaşında kronik diyaliz hastasının panoramik radyografisinde maksilla ve mandibulada ekspansiyon ile lamina dura kaybı izlenmiştir. Bu hastanın trabeküler yapısı detaylı incelendiğinde Tablo 13'e göre hangi spesifik radyografik görünüm saptanır?
Doğru Şık (D): Granüler trabekül yapısı
Açıklama: Böbrek yetmezliğine bağlı renal osteodistrofi hastalarında çene trabekülleri granüler bir yapı (tuz-biber görüntüsü) alır. Hair-on-end orak hücreli anemide, dövülmüş bakır hipofosfatazyada, pamuk yumağı ise Paget hastalığında izlenirken, granüler yapı sekonder hiperparatiroidizm kökenli hastalıklarda spesifiktir.

---

### ÇİFT 262 (Benzerlik: 0.71)

**Soru 1 (ID: 1a041f55-f2e1-4178-86cf-e6c98d97c8d5)**
Soru Kökü: Yetişkinlerde kalsiyum ve fosfor yetersizliği sonucu 'penguen yürüyüşü' ve kemik ağrısı ile karakterize osteomalazya tablosunda, çene kemikleri dansitesi açısından Tablo 13'te belirtilen spesifik beklenti aşağıdakilerden hangisidir?
Doğru Şık (B): Nadiren azalma
Açıklama: Osteomalazyada uzun kemiklerde psödofraktürler ve kortikal incelmeler görülmesine rağmen, Tablo 13 verilerine göre çene kemiklerinin dansitesinde sıklıkla değil, 'nadiren azalma' izlenir. Bu nadir azalma durumunda radyolüsent bant (psödofraktür) görüntüleri oluşabilir. 'Sıklıkla azalma' hiperparatiroidizm ve rikets için tanımlanırken, osteomalazyada çene kemiği dansite kaybı daha nadirdir.

**Soru 2 (ID: 6c719faa-87e9-4f86-b840-dcd979c0ec31)**
Soru Kökü: Osteomalazya hastalarının radyografik incelemesinde çene kemiklerinde trabekül sayısında izlenen spesifik istatistiksel eğilim Tablo 13'e göre hangisidir?
Doğru Şık (E): Nadiren azalma
Açıklama: Yetişkinlerde görülen D vitamini eksikliğinde (osteomalazya), kemik kütlesi daha önce oluştuğu için rikets kadar şiddetli çene bulguları vermez ve trabekül sayısında sadece 'nadiren azalma' izlenir. Çene kemiklerinde trabekülasyonda yaygın (sıklıkla) azalma çocukluk çağı varyantı olan rikets'te görülür. Granüler patern ise bu metabolik bozukluğun bir parçası değildir.

---

### ÇİFT 263 (Benzerlik: 0.71)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

---

### ÇİFT 264 (Benzerlik: 0.71)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: 9efe2381-274f-4afd-b00e-dc8e5ff58124)**
Soru Kökü: Tablo 14 referans alındığında, rikets hastalarının diş gelişimi sürecinde inorganik fosfat ve kalsiyum homeostazisinin bozulması nedeniyle izlenen erüpsiyon paterni aşağıdakilerden hangisidir?
Doğru Şık (E): Gecikmiş sürme
Açıklama: Dişlerin sürme prosesi için sağlam bir kök ucu gelişimine ve etrafındaki kemik rezorpsiyon/depozisyon aktivitesinin düzenli işlemesine ihtiyaç vardır. Riketste kalsiyum mekanizması arızalı olduğundan dişlerin folikül çevresindeki kemik remodeling'i aksar ve diş gelişimi yavaşlayarak sürmede ciddi gecikme (Tablo 14) ortaya çıkar.

---

### ÇİFT 265 (Benzerlik: 0.71)

**Soru 1 (ID: 1a041f55-f2e1-4178-86cf-e6c98d97c8d5)**
Soru Kökü: Yetişkinlerde kalsiyum ve fosfor yetersizliği sonucu 'penguen yürüyüşü' ve kemik ağrısı ile karakterize osteomalazya tablosunda, çene kemikleri dansitesi açısından Tablo 13'te belirtilen spesifik beklenti aşağıdakilerden hangisidir?
Doğru Şık (B): Nadiren azalma
Açıklama: Osteomalazyada uzun kemiklerde psödofraktürler ve kortikal incelmeler görülmesine rağmen, Tablo 13 verilerine göre çene kemiklerinin dansitesinde sıklıkla değil, 'nadiren azalma' izlenir. Bu nadir azalma durumunda radyolüsent bant (psödofraktür) görüntüleri oluşabilir. 'Sıklıkla azalma' hiperparatiroidizm ve rikets için tanımlanırken, osteomalazyada çene kemiği dansite kaybı daha nadirdir.

**Soru 2 (ID: bbf17920-94c7-41d4-be42-56610d4b815c)**
Soru Kökü: Hiperparatiroidizmde iskelet sisteminde görülen yaygın demineralizasyon süreci çenelere yansıdığında, radyografik değerlendirmede aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Tüm çene kemiklerinin dansitesinde artış
Açıklama: Hastalıkta yoğun osteoklastik aktivite sonucu iskelet sisteminde demineralizasyon gelişir, bu durum çene radyografilerine çene dansitesinde belirgin bir 'azalma' (radyolüsensi) olarak yansır. Kemik yoğunluğunda artış bu tablonun tam zıttıdır ve osteopetrozis gibi hastalıklarda görülür.

---

### ÇİFT 266 (Benzerlik: 0.71)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: f4bd6d9a-f7d4-477d-98ae-29a885221b02)**
Soru Kökü: Akromegali hastalarında kafa tabanı ve kraniyofasiyal komplekste karşılaşılan radyografik değişiklikler arasında aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (C): Frontal sinüs başta olmak üzere paranazal sinüslerde aplazi ve daralma
Açıklama: Akromegali hastalığında kraniyal kemiklerdeki osteoblastik aktivite artışıyla supraorbital çıkıntılar belirginleşir ve altındaki frontal sinüsler dahil paranazal sinüsler aşırı derecede pnömatize olur (genişler). Sinüs gelişiminde yetersizlik hipotiroidizm (kretinizm) gibi hipometabolik durumlarda izlenir.

---

### ÇİFT 267 (Benzerlik: 0.71)

**Soru 1 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 268 (Benzerlik: 0.71)

**Soru 1 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 269 (Benzerlik: 0.71)

**Soru 1 (ID: 67f3ed87-a89a-4efc-8de2-e777194e5f0a)**
Soru Kökü: 45 yaşında kadın hasta, tekrarlayan böbrek taşı ve kemik ağrıları şikayetiyle başvurmuştur. Radyografik incelemede çene kemiklerinde 'Brown tümör' ile uyumlu radyolüsensiler izlenmiştir. Tablo 13 referans alındığında, bu hastanın çene radyografisinde trabekül sayısında nasıl bir değişim beklenir?
Doğru Şık (B): Sayısal azalma
Açıklama: Hiperparatiroidizmde parathormon fazlalığına bağlı artmış osteoklastik aktivite kemik yıkımına yol açarak çene kemiklerinde trabekül sayısında sayısal azalmaya neden olur. Bu azalma, radyografide granüler bir yapı (tuz-biber görünümü) ile birlikte izlenir. En güçlü çeldirici olan nadiren artış, renal osteodistrofi gibi mikst patolojilerde izlenir, primer hiperparatiroidizmde görülmez.

**Soru 2 (ID: cae6bc1b-d36e-41f6-88a0-009f936ccd56)**
Soru Kökü: Renal osteodistrofi hastalarında çene kemiklerindeki trabekül yapısı incelendiğinde, Tablo 13'e göre granüler patern ile birlikte trabekül sayısında hangi iki durum izlenebilir?
Doğru Şık (C): Azalma ve nadiren artış
Açıklama: Renal osteodistrofi mikst karakterli bir patoloji olduğu için radyografide trabekül sayısında genellikle azalma görülmekle birlikte, sklerotik yanıtın ön plana çıktığı bölgelerde 'nadiren artış' da izlenebilir. Bu bulgular eşliğinde kemik yapısı granüler (tuz-biber) bir izlenim verir. Tek tip bir yıkım (sadece azalma) veya hiperplazi tablosu bu hastalığın kompleks doğasını yansıtmaz.

---

### ÇİFT 270 (Benzerlik: 0.71)

**Soru 1 (ID: d7c94b7b-413c-41fa-b5e8-5c90a7f576e1)**
Soru Kökü: Büyüme hormonunun (GH) salınım anomalileri çene boyutlarını doğrudan etkileyerek ortodontik sorunlar yaratır. Mandibulanın maksillaya oranla küçük kalıp derinden kapandığı durum (I) ile alt alveolar kemik boyutlarının aşırtı artıp dişler arası boşluklara yol açtığı durum (II) aşağıdakilerin hangisinde eşleştirilmiştir?
Doğru Şık (D): (I) Cücelik (Hipopituitarizm) - (II) Akromegali
Açıklama: Hipopituitarizm sonucu gelişen Dwarfizm (cücelik) durumunda maksilla normal sınırlarda kalmaya çalışırken mandibula yetersiz gelişir, distale kayar ve küçük çeneye bağlı çarpraşıklık ile derin kapanış görülür (Durum I). Akromegali ise erişkin başlangıçlı GH fazlalığıdır, epifizler kapalı olduğundan özellikle mandibula kondil ve alveoler bölgelerinde sekonder büyüme ile prognati, Sınıf 3 maloklüzyon ve diastema yaratır (Durum II).

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 271 (Benzerlik: 0.71)

**Soru 1 (ID: 014d4be8-7e84-44c0-9a36-d786e916ea79)**
Soru Kökü: Sekiz yaşındaki çocuk hastanın ailesi, çocuğun daimi dişlerinin bir türlü süremediğini ve süt dişlerinin halen düşmediğini ifade etmektedir. Hekim tarafından yapılan muayenede çocuğun dudaklarının oldukça kalın, dilinin normalden büyük (makroglossi) olduğu; cildinin dokunulduğunda hamursu bir kıvama sahip olduğu fark edilmiştir. Diş radyografilerinde daimi diş sürmelerinde gecikme ve eksternal kök rezorpsiyonları saptanan bu hastada en olası medikal tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Hipotiroidizm (Kretinizm)
Açıklama: Süt dişlerinin düşmesinde ve daimi diş sürmesinde gecikme, hamursu cilt, kalın dudaklar ve makroglossi kombinasyonu, çocukluk çağı tiroid yetmezliği olan kretinizm (hipotiroidizm) tablosu ile tamamen uyumludur. Rikets ve hipofosfatazyada da sürme gecikmesi görülebilir ancak onlarda eklem şişlikleri, bacak eğrilikleri veya erken diş kaybı (süt kesiciler) ön plandadır. Ciltteki hamursu kıvam ve dil büyümesi miksödematöz infiltrasyona (mukopolisakkarid birikimi) işaret eder.

**Soru 2 (ID: 6d9fb45b-b404-4e9b-91ca-9deac01912dc)**
Soru Kökü: Daimi dişlerinin hala sürmemesi şikayetiyle başvuran çocuk hastanın radyografisinde diş köklerinin kısa kaldığı ve lamina durada kalınlaşma olduğu görülüyor. Klinik olarak donuk yüz, büyük dil ve zihinsel gelişimde yavaşlık izlenen bu hipotiroidizm vakasında, diş sürme döngüsündeki bu tablonun (Tablo 14) tanımı aşağıdakilerden hangisidir?
Doğru Şık (D): Gecikmiş sürme
Açıklama: Hipotiroidizmde yetersiz tiroid hormonu iskelet ve kalsifikasyon süreçlerini yavaşlattığı için "gecikmiş sürme" karakteristiktir (Tablo 14). Makroglossi varlığı ortodontik bozukluk yaratır ve süt dişlerinin dökülmemesi daimi foliküllerin yolunu kapatarak bu gecikmeyi anatomik olarak da şiddetlendirir. Erken sürme veya agenezi söz konusu değildir.

---

### ÇİFT 272 (Benzerlik: 0.71)

**Soru 1 (ID: 4d893071-77ae-4f58-ae9d-f9402266cca9)**
Soru Kökü: Metabolik kemik hastalıklarına sahip iki farklı çocuk hastadan birincisinde 'süt kesici dişlerinin kök rezorpsiyonu olmaksızın spontan erken dökülmesi', ikincisinde ise 'sağlam (çürüksüz) dişlerde genişlemiş pulpa boynuzlarına bağlı spontan periapikal apseler' saptanmıştır. Bu klinik senaryolara göre, birinci ve ikinci hastanın en olası ayırıcı tanıları sırasıyla aşağıdakilerden hangisidir?
Doğru Şık (B): Hipofosfatazya - Hipofosfatemi
Açıklama: Süt dişlerinin travma veya fizyolojik kök rezorpsiyonu olmaksızın erken dökülmesi (özellikle kesiciler), alkalen fosfataz eksikliği ile seyreden hipofosfatazya sendromunun pathognomonik majör bulgusudur. Buna karşın dişlerin pulpa boynuzlarının mine-dentin sınırına kadar uzanarak çürük olmaksızın mikroorganizma invazyonuna (spontan periapikal apseler) yol açması, D vitamini dirençli rikets olan hipofosfatemi hastalığının en belirgin ayırıcı komplikasyonudur.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 273 (Benzerlik: 0.71)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: 7981b751-0fde-4ef7-aeaf-821069a2e020)**
Soru Kökü: Osteoporoz hastalarının radyografik muayenesinde, kemik formasyonundaki azalmaya ikincil olarak trabekül yapısında Tablo 13'e göre hangi değişim saptanır?
Doğru Şık (C): Trabekül sayısında azalma
Açıklama: Osteoporozda trabeküler kemik hacmindeki kayıp, radyografik olarak trabekül sayısında, boyutunda ve kalınlığında azalma olarak yansır. Osteoporozda trabeküller incelir ve seyrekleşir ancak hiperparatiroidizm veya Cushing sendromunda izlenen karakteristik granüler yapı oluşmaz. Mozaik patern ise Paget hastalığına ait histolojik bir bulgudur.

---

### ÇİFT 274 (Benzerlik: 0.71)

**Soru 1 (ID: 80a84301-107a-4b1e-b364-1cce4b123888)**
Soru Kökü: Radyografik incelemede çene kemiklerinin boyutlarında genel veya bölgesel bir 'Artış/Genişleme' saptanan hastanın ayırıcı tanısında (Tablo 13); 
I. Osteopetrozis 
II. Renal osteodistrofi 
III. Hiperpituitarizm 
sistemik hastalıklarından hangileri akla gelmelidir?
Doğru Şık (E): I, II ve III
Açıklama: Tablo 13'e bakıldığında 'Çenelerin boyutu' sütununda; Osteopetrozis (Artar - kemik yıkımı olmadığı için), Renal Osteodistrofi (Artar - fasiyal kemiklerde ikincil osteolitik/sklerotik ekspansiyon), Hiperpituitarizm (Genişler - GH hormonunun kemik büyüme plaklarını uyarmasına bağlı Sınıf III prognati) olarak belirtilmiştir. Dolayısıyla her üç hastalık da çenelerde boyutsal artış veya genişleme spektrumunda yer alır.

**Soru 2 (ID: eaa4eacb-bb2f-4251-bf51-82f9146b4c2c)**
Soru Kökü: Sistemik patolojilerin çene boyutları üzerindeki etkisi değerlendirildiğinde, aşağıdaki hastalıklardan hangisinin radyografik olarak boyutlarda bir artışa (genişlemeye) yol açması **beklenmez**?
Doğru Şık (D): Cushing sendromu
Açıklama: Hiperpituitarizm (akromegali) direkt mandibula boyutunu artırır, renal osteodistrofi ve osteopetrozis kemik ekspansiyonuna yol açar, orak hücreli anemi ise kemik iliği hiperplazisiyle üst çeneyi artırır. Ancak Cushing sendromunda sadece kemik yıkımı ve dansite azalması izlenir, çene boyutlarında makroskobik bir artış saptanmaz.

---

### ÇİFT 275 (Benzerlik: 0.71)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 276 (Benzerlik: 0.71)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

---

### ÇİFT 277 (Benzerlik: 0.71)

**Soru 1 (ID: c3d1ed52-12e9-45d4-99fa-308e24c213e4)**
Soru Kökü: Akromegali hastalarının iskeletsel çene ilişkilerini değerlendirmek amacıyla alınan lateral sefalometrik grafilerde, mandibulanın anatomik yapısında aşağıdakilerden hangisi tipik olarak saptanır?
Doğru Şık (A): Mandibulanın ramusu ile gövdesi arasındaki açıda artış
Açıklama: Akromegalide kondiler kıkırdağın büyüme hormonu tarafından aşırı uyarılması, mandibulanın ramus ile gövde arasındaki açısının (gonial açı) artmasına ve alt çenenin öne doğru konumlanmasına neden olur. Psödofraktür alanları osteomalazide, kaba granüler trabekülasyon ise kemik iliği hiperplazisine yol açan hastalıklarda (örn. anemi, hiperparatiroidizm) gözlenir. Ramus-gövde açısındaki bu artış, alt çene prognatisinin (Sınıf III) temel iskeletsel mekanizmasıdır.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 278 (Benzerlik: 0.71)

**Soru 1 (ID: 67f3ed87-a89a-4efc-8de2-e777194e5f0a)**
Soru Kökü: 45 yaşında kadın hasta, tekrarlayan böbrek taşı ve kemik ağrıları şikayetiyle başvurmuştur. Radyografik incelemede çene kemiklerinde 'Brown tümör' ile uyumlu radyolüsensiler izlenmiştir. Tablo 13 referans alındığında, bu hastanın çene radyografisinde trabekül sayısında nasıl bir değişim beklenir?
Doğru Şık (B): Sayısal azalma
Açıklama: Hiperparatiroidizmde parathormon fazlalığına bağlı artmış osteoklastik aktivite kemik yıkımına yol açarak çene kemiklerinde trabekül sayısında sayısal azalmaya neden olur. Bu azalma, radyografide granüler bir yapı (tuz-biber görünümü) ile birlikte izlenir. En güçlü çeldirici olan nadiren artış, renal osteodistrofi gibi mikst patolojilerde izlenir, primer hiperparatiroidizmde görülmez.

**Soru 2 (ID: 9ec7babe-8a39-40be-8a5f-ad9658d4bb53)**
Soru Kökü: 50 yaşında kronik diyaliz hastasının panoramik radyografisinde maksilla ve mandibulada ekspansiyon ile lamina dura kaybı izlenmiştir. Bu hastanın trabeküler yapısı detaylı incelendiğinde Tablo 13'e göre hangi spesifik radyografik görünüm saptanır?
Doğru Şık (D): Granüler trabekül yapısı
Açıklama: Böbrek yetmezliğine bağlı renal osteodistrofi hastalarında çene trabekülleri granüler bir yapı (tuz-biber görüntüsü) alır. Hair-on-end orak hücreli anemide, dövülmüş bakır hipofosfatazyada, pamuk yumağı ise Paget hastalığında izlenirken, granüler yapı sekonder hiperparatiroidizm kökenli hastalıklarda spesifiktir.

---

### ÇİFT 279 (Benzerlik: 0.71)

**Soru 1 (ID: 601f441e-c8f5-4e8d-8b2a-5800a222150b)**
Soru Kökü: Erişkinlerde görülen ve kalsiyumun bağırsaklardan emilimi için gerekli aktif D vitamini metabolitinin eksikliğine bağlı gelişen osteomalazide, çene kemiklerinde izlenebilecek karakteristik 'psödofraktür (Looser zonu)' radyolüsent bantları en sık hangi bölgede lokalize olur?
Doğru Şık (D): Mandibula angulus bölgesi
Açıklama: Osteomalazi, kalsiyum/fosfat dengesinin bozulması sonucu erişkin dönemde gelişen kemik yumuşamasıdır. Bu hastalıkta kemiğin korteksten marjine doğru uzanan, iyi kalsifiye olmayan, ince ve uzun şerit şeklindeki psödofraktürleri (Looser zonları) çenelerde spesifik olarak mandibula angulus bölgesinde radyolüsent bant formunda izlenir. Diğer anatomik bölgeler bu lezyonlar için tipik predileksiyon alanları değildir.

**Soru 2 (ID: bad1ffc3-a183-480f-a8ec-199aca44342c)**
Soru Kökü: Yetişkinlerde kemiklerde yumuşama, kas zayıflığı ve pseudofraktürlerle karakterize osteomalazya hastalarının (Tablo 14) çene kemiği radyografik bulgularıyla ilgili olarak aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (D): Tablo 14'e göre uzun vadede tam ve kesin bir diş kaybı beklenir.
Açıklama: Osteomalazya yetişkinlikte ortaya çıktığı için dişlerin kalsifikasyon dönemi bitmiştir (mine hipoplazisi olmaz). Kortikal incelme ve lamina dura zayıflığı (Tablo 14: İncelmiş) görülse de, Tablo 14'te osteomalazya için "Diş kaybı" sütununda açıkça "Hayır" yazmaktadır. Alveol kemiği zayıflasa bile doğrudan bir diş dökülme sendromu osteomalazyaya atfedilmez.

---

### ÇİFT 280 (Benzerlik: 0.71)

**Soru 1 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

**Soru 2 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

---

### ÇİFT 281 (Benzerlik: 0.71)

**Soru 1 (ID: b309abcb-de88-40c9-8a2b-2206ac1d4ffa)**
Soru Kökü: Büyüme hormonu eksikliğine bağlı olarak gelişen hipopituitarizm sendromunda, hastaların dental arklarında sıklıkla ortodontik düzensizlikler ve yer darlığı problemi gözlenir. Bu ortodontik tablonun ortaya çıkmasındaki birincil mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Diş boyutlarının normal olmasına rağmen çene boyutlarının küçük kalması
Açıklama: Hipopituitarizm sendromunda dişlerin kron büyüklükleri genetik olarak belirlenmiş normal boyutlarındadır, ancak maksilla ve özellikle mandibula küçük kaldığı için dental arkta yeterli yer bulunamaz, bu da çapraşıklığa ve maloklüzyonlara yol açar. Makrodonti izlenmez. Çapraşıklığın temel nedeni olan bu orantısızlık (normal diş - küçük kemik) iskeletsel büyüme eksikliğinin direkt sonucudur.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 282 (Benzerlik: 0.71)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

---

### ÇİFT 283 (Benzerlik: 0.71)

**Soru 1 (ID: 827a3be6-9a8c-4f8d-9cc7-16d90c913b13)**
Soru Kökü: Kronik böbrek yetmezliği nedeniyle diyaliz tedavisi gören bir hastanın radyolojik incelemesinde, kafatası ve çene kemiklerinde izlenen 'tuz-biber (salt-and-pepper)' ve granüler trabeküler görünümün temel fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Böbrekten fosfor atılımının azalmasıyla gelişen hiperfosfatemi ve sekonder hiperparatiroidizm
Açıklama: Renal osteodistrofi (renal rikets) kronik böbrek yetmezliği olan hastalarda böbrekten fosfor atılımının azalması (hiperfosfatemi) ve sekonder olarak kalsiyum emiliminin düşmesi (hipokalsemi) sonucu gelişir. Bu mineral dengesizliği sekonder hiperparatiroidizmi tetikleyerek artmış osteoklastik kemik yıkımına, fasiyal kemiklerde litik/sklerotik 'tuz-biber' görünümüne ve lamina dura kayıplarına yol açar. Diğer hormonal mekanizmalar bu sürecin primer nedeni değildir.

**Soru 2 (ID: daf9ebbe-d850-40fb-b82a-4714315a851e)**
Soru Kökü: İleri derecede kronik böbrek fonksiyon kaybı olan bir hastada gelişen renal osteodistrofi bulguları ile paratiroid adenomuna bağlı gelişen primer hiperparatiroidizm tablosu radyografik olarak birbirine ciddi benzerlik gösterebilir. Aşağıdaki çene kemiği radyografik değişikliklerinden hangisi her iki sistemik hastalık için de spesifik ve ortak bir bulgudur?
Doğru Şık (A): Granüler trabeküler kemik yapısı ve lamina dura belirginliğinin kaybı
Açıklama: Renal osteodistrofi, kronik böbrek yetmezliğine bağlı fosfor atılımının bozulmasıyla gelişen hiperfosfatemi ve buna yanıt olarak üretilen aşırı parathormonun (sekonder hiperparatiroidizm) tablosudur. İster primer ister böbrek kaynaklı sekonder hiperparatiroidizm olsun, artan PTH hormonunun yarattığı artmış osteoklastik yıkım sonucunda çene kemiklerinde generalize lamina dura kaybı ve bulanık, buzlu cam benzeri granüler trabeküler görünüm her iki tabloda da ortak saptanan patognomonik radyografik işaretlerdir.

---

### ÇİFT 284 (Benzerlik: 0.71)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: 822cd981-2d05-4929-b11d-2c5845e70555)**
Soru Kökü: Tablo verileri ve fizyopatolojik mekanizmalara göre, sistemik kemik metabolizma hastalıkları dentin ve minenin sertleşme ve olgunlaşma aşamalarını etkileyerek hipokalsifikasyon yaratabilirler. Aşağıdaki hastalıklardan hangisinin dentisyon üzerinde hipokalsifikasyon yapıcı bir sekonder etkisi **yoktur**?
Doğru Şık (B): Osteoporozis
Açıklama: Diş dokuları bir kez mineralize olduktan sonra (özellikle mine ve dentin) kemik gibi kalsiyum deposu olarak dolaşıma geri katılmazlar. Rikets, hipofosfatemi, hipofosfatazya, renal osteodistrofi ve osteopetrozis dişlerin GELİŞİM aşamasında kalsiyum/fosfor dengesini bozarak zayıf mineralize (hipokalsifiye/hipoplazik) dişler oluştururlar. Osteoporozis ise yaşlılık/menopoz sonrasında (dişler çoktan oluştuktan sonra) var olan kemiği eritir, dolayısıyla diş anatomisinde hipokalsifikasyon yapmaz.

---

### ÇİFT 285 (Benzerlik: 0.71)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: bbf17920-94c7-41d4-be42-56610d4b815c)**
Soru Kökü: Hiperparatiroidizmde iskelet sisteminde görülen yaygın demineralizasyon süreci çenelere yansıdığında, radyografik değerlendirmede aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Tüm çene kemiklerinin dansitesinde artış
Açıklama: Hastalıkta yoğun osteoklastik aktivite sonucu iskelet sisteminde demineralizasyon gelişir, bu durum çene radyografilerine çene dansitesinde belirgin bir 'azalma' (radyolüsensi) olarak yansır. Kemik yoğunluğunda artış bu tablonun tam zıttıdır ve osteopetrozis gibi hastalıklarda görülür.

---

### ÇİFT 286 (Benzerlik: 0.71)

**Soru 1 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 287 (Benzerlik: 0.71)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

---

### ÇİFT 288 (Benzerlik: 0.71)

**Soru 1 (ID: 054f395b-afc5-4e8d-b51e-6ae1ecbf2085)**
Soru Kökü: Rikets hastalığının şiddetli formlarında kemiklerde eğrilmeler ve O bacak deformitelerinin yanı sıra, panoramik radyografide dişi çevreleyen radyopatik yapıda da patolojik değişimler görülür. Tablo 14 verilerine göre bu bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Lamina durada incelme
Açıklama: Riketste kemik matriksinin (osteoid) üretilmesine rağmen kalsifiye olamaması sonucu trabeküller ve kortikal yapılar mineralden fakirleşir. Bu radyolojik olarak kemik dansitesinde azalma ve diş yuvasını sınırlayan radyopatik hat olan lamina duranın belirgin şekilde incelmesi veya şiddetli vakalarda kaybolması (Tablo 14) şeklinde yansır.

**Soru 2 (ID: 18a51d97-a292-4c6a-bd06-efcfe259bb3a)**
Soru Kökü: Kemik yapım ve yıkım döngüsündeki dengesizlik nedeniyle kemik kitlesinde jeneralize azalma gösteren postmenopozal osteoporozis vakalarında (Tablo 14), periodontal desteği sağlayan radyografik anatomik bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Lamina durada belirgin incelme
Açıklama: Osteoporoziste kemiğin histolojik yapısı normal olmasına rağmen total kütlesi azalmıştır. Radyograflarda bu durum, özellikle mandibula inferior korteksi gibi sınırlar ve dişi saran alveol kemiği duvarı olan lamina duranın incelmesi olarak izlenir. Lamina durada skleroz veya kalınlaşma (osteopetrozis vb. hastalıkların bulgusudur) osteoporotik defekt tablosuna terstir.

---

### ÇİFT 289 (Benzerlik: 0.71)

**Soru 1 (ID: 18a51d97-a292-4c6a-bd06-efcfe259bb3a)**
Soru Kökü: Kemik yapım ve yıkım döngüsündeki dengesizlik nedeniyle kemik kitlesinde jeneralize azalma gösteren postmenopozal osteoporozis vakalarında (Tablo 14), periodontal desteği sağlayan radyografik anatomik bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Lamina durada belirgin incelme
Açıklama: Osteoporoziste kemiğin histolojik yapısı normal olmasına rağmen total kütlesi azalmıştır. Radyograflarda bu durum, özellikle mandibula inferior korteksi gibi sınırlar ve dişi saran alveol kemiği duvarı olan lamina duranın incelmesi olarak izlenir. Lamina durada skleroz veya kalınlaşma (osteopetrozis vb. hastalıkların bulgusudur) osteoporotik defekt tablosuna terstir.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 290 (Benzerlik: 0.71)

**Soru 1 (ID: 54a3f445-3015-4469-a341-6d2b9ae2b23f)**
Soru Kökü: 42 yaşında kadın hasta, aydede yüzü ve gövdesel obezite klinik tablosu sergilemektedir. Ekzojen kortikosteroid kullanımına bağlı Cushing sendromu gelişen bu hastanın panoramik radyografisinde kemik dansitesinde beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Dansitede azalma
Açıklama: Cushing sendromunda yüksek glukokortikoid seviyesi osteoblastik aktiviteyi baskılar ve direkt/dolaylı yoldan osteoklastik aktiviteyi artırarak net kemik kütlesinde (dansitede) azalmaya neden olur. Bu kayıp, generalize osteoporozis tablosuna ve patolojik kırıklara zemin hazırlar. Opasite artışı veya pamuk yumağı görünümü gibi anabolik kemik patolojileri glukokortikoid fazlalığında kesinlikle beklenmez.

**Soru 2 (ID: f0e68911-1fed-41e1-ab49-fe9e9de3ab78)**
Soru Kökü: Cushing sendromu tanısı almış 40 yaşındaki kadın hastanın klinik değerlendirmesinde, aşırı glukokortikoid sirkülasyonuna bağlı olarak aşağıdaki bulgulardan hangisinin saptanması **en az olasıdır**?
Doğru Şık (B): Ekstremiteleri de kapsayan yaygın ve orantılı obezite
Açıklama: Cushing sendromunda gelişen obezite santral yerleşimlidir; yani gövdesel (gövde, ense, yüz) obezite görülürken ekstremiteler (kollar ve bacaklar) etkilenmez ve zayıf kalır. Orantılı obezite çeldiricisi hastalığın spesifik lipodistrofi (yağ dağılımı bozukluğu) karakterini yansıtmadığı için yanlıştır. Torasik kifoz, aydede yüzü ve doku zayıflığına bağlı strialar sendromun klasik işaretleridir.

---

### ÇİFT 291 (Benzerlik: 0.71)

**Soru 1 (ID: 15520915-b4ec-43d5-a6c8-679e4a1e56b9)**
Soru Kökü: Diş kök yüzeyinde anormal sement birikimi ile seyreden hipersementoz olguları lokal nedenlerin (enfeksiyon, oklüzal travma) dışında sistemik zeminli de gelişebilir. Sistemik kaynaklı diş incelemelerinde aşağıdaki hastalıklardan hangisinin dentisyonda hipersementoz tablosu oluşturması **beklenmez**?
Doğru Şık (D): Hipofosfatemi
Açıklama: Akromegali, tirotoksikoz (Graves), orak hücreli anemi ve Paget hastalığı kök ucunda idyopatik hipersementoza yol açan klasik sistemik etiyolojilerdir. Ancak Hipofosfatemide dentin, mine ve sement gibi tüm mineralize diş yapıları zayıf ve incedir (hipoplazik); dolayısıyla sement birikimi (hipersementoz) değil, ince kök/kanal anomalisi yapması beklenir.

**Soru 2 (ID: 822cd981-2d05-4929-b11d-2c5845e70555)**
Soru Kökü: Tablo verileri ve fizyopatolojik mekanizmalara göre, sistemik kemik metabolizma hastalıkları dentin ve minenin sertleşme ve olgunlaşma aşamalarını etkileyerek hipokalsifikasyon yaratabilirler. Aşağıdaki hastalıklardan hangisinin dentisyon üzerinde hipokalsifikasyon yapıcı bir sekonder etkisi **yoktur**?
Doğru Şık (B): Osteoporozis
Açıklama: Diş dokuları bir kez mineralize olduktan sonra (özellikle mine ve dentin) kemik gibi kalsiyum deposu olarak dolaşıma geri katılmazlar. Rikets, hipofosfatemi, hipofosfatazya, renal osteodistrofi ve osteopetrozis dişlerin GELİŞİM aşamasında kalsiyum/fosfor dengesini bozarak zayıf mineralize (hipokalsifiye/hipoplazik) dişler oluştururlar. Osteoporozis ise yaşlılık/menopoz sonrasında (dişler çoktan oluştuktan sonra) var olan kemiği eritir, dolayısıyla diş anatomisinde hipokalsifikasyon yapmaz.

---

### ÇİFT 292 (Benzerlik: 0.71)

**Soru 1 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 293 (Benzerlik: 0.71)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 294 (Benzerlik: 0.71)

**Soru 1 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

**Soru 2 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

---

### ÇİFT 295 (Benzerlik: 0.70)

**Soru 1 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

**Soru 2 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

---

### ÇİFT 296 (Benzerlik: 0.70)

**Soru 1 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

**Soru 2 (ID: d7c94b7b-413c-41fa-b5e8-5c90a7f576e1)**
Soru Kökü: Büyüme hormonunun (GH) salınım anomalileri çene boyutlarını doğrudan etkileyerek ortodontik sorunlar yaratır. Mandibulanın maksillaya oranla küçük kalıp derinden kapandığı durum (I) ile alt alveolar kemik boyutlarının aşırtı artıp dişler arası boşluklara yol açtığı durum (II) aşağıdakilerin hangisinde eşleştirilmiştir?
Doğru Şık (D): (I) Cücelik (Hipopituitarizm) - (II) Akromegali
Açıklama: Hipopituitarizm sonucu gelişen Dwarfizm (cücelik) durumunda maksilla normal sınırlarda kalmaya çalışırken mandibula yetersiz gelişir, distale kayar ve küçük çeneye bağlı çarpraşıklık ile derin kapanış görülür (Durum I). Akromegali ise erişkin başlangıçlı GH fazlalığıdır, epifizler kapalı olduğundan özellikle mandibula kondil ve alveoler bölgelerinde sekonder büyüme ile prognati, Sınıf 3 maloklüzyon ve diastema yaratır (Durum II).

---

### ÇİFT 297 (Benzerlik: 0.70)

**Soru 1 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

**Soru 2 (ID: cb5d34dd-366e-46d2-9163-5bcdf0c1c3b3)**
Soru Kökü: Kırk beş yaşında erkek hasta, makroglossi, alt çenede Sınıf III iskeletsel prognati ve dişler arası diastemalarla kliniğe başvuruyor. Radyografide mandibula ramus ile gövde açısının arttığı tespit ediliyor. Yetişkin dönem hiperpituitarizm (Akromegali) ile uyumlu bu tabloda, özellikle posterior bölgede hangi dental sürme anomalisinin görülmesi en olasıdır?
Doğru Şık (D): Posterior dişlerde süper-erüpsiyon
Açıklama: Akromegali hastalarında büyüme hormonu fazlalığına bağlı olarak mandibular kemik büyümesi devam eder ve vertikal alveoler kemik boyutu artar. Tablo 14'te de belirtildiği üzere, bu boyutsal artışı telafi etmek ve oklüzyonu sağlamak adına posterior dişlerde süper-erüpsiyon (aşırı sürme) ile birlikte hipersementoz karakteristiktir. Ankiloz veya gömüklük durumu bu tablonun patofizyolojisiyle çelişir.

---

### ÇİFT 298 (Benzerlik: 0.70)

**Soru 1 (ID: 18a51d97-a292-4c6a-bd06-efcfe259bb3a)**
Soru Kökü: Kemik yapım ve yıkım döngüsündeki dengesizlik nedeniyle kemik kitlesinde jeneralize azalma gösteren postmenopozal osteoporozis vakalarında (Tablo 14), periodontal desteği sağlayan radyografik anatomik bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Lamina durada belirgin incelme
Açıklama: Osteoporoziste kemiğin histolojik yapısı normal olmasına rağmen total kütlesi azalmıştır. Radyograflarda bu durum, özellikle mandibula inferior korteksi gibi sınırlar ve dişi saran alveol kemiği duvarı olan lamina duranın incelmesi olarak izlenir. Lamina durada skleroz veya kalınlaşma (osteopetrozis vb. hastalıkların bulgusudur) osteoporotik defekt tablosuna terstir.

**Soru 2 (ID: 7981b751-0fde-4ef7-aeaf-821069a2e020)**
Soru Kökü: Osteoporoz hastalarının radyografik muayenesinde, kemik formasyonundaki azalmaya ikincil olarak trabekül yapısında Tablo 13'e göre hangi değişim saptanır?
Doğru Şık (C): Trabekül sayısında azalma
Açıklama: Osteoporozda trabeküler kemik hacmindeki kayıp, radyografik olarak trabekül sayısında, boyutunda ve kalınlığında azalma olarak yansır. Osteoporozda trabeküller incelir ve seyrekleşir ancak hiperparatiroidizm veya Cushing sendromunda izlenen karakteristik granüler yapı oluşmaz. Mozaik patern ise Paget hastalığına ait histolojik bir bulgudur.

---

### ÇİFT 299 (Benzerlik: 0.70)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 300 (Benzerlik: 0.70)

**Soru 1 (ID: b309abcb-de88-40c9-8a2b-2206ac1d4ffa)**
Soru Kökü: Büyüme hormonu eksikliğine bağlı olarak gelişen hipopituitarizm sendromunda, hastaların dental arklarında sıklıkla ortodontik düzensizlikler ve yer darlığı problemi gözlenir. Bu ortodontik tablonun ortaya çıkmasındaki birincil mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Diş boyutlarının normal olmasına rağmen çene boyutlarının küçük kalması
Açıklama: Hipopituitarizm sendromunda dişlerin kron büyüklükleri genetik olarak belirlenmiş normal boyutlarındadır, ancak maksilla ve özellikle mandibula küçük kaldığı için dental arkta yeterli yer bulunamaz, bu da çapraşıklığa ve maloklüzyonlara yol açar. Makrodonti izlenmez. Çapraşıklığın temel nedeni olan bu orantısızlık (normal diş - küçük kemik) iskeletsel büyüme eksikliğinin direkt sonucudur.

**Soru 2 (ID: d7c94b7b-413c-41fa-b5e8-5c90a7f576e1)**
Soru Kökü: Büyüme hormonunun (GH) salınım anomalileri çene boyutlarını doğrudan etkileyerek ortodontik sorunlar yaratır. Mandibulanın maksillaya oranla küçük kalıp derinden kapandığı durum (I) ile alt alveolar kemik boyutlarının aşırtı artıp dişler arası boşluklara yol açtığı durum (II) aşağıdakilerin hangisinde eşleştirilmiştir?
Doğru Şık (D): (I) Cücelik (Hipopituitarizm) - (II) Akromegali
Açıklama: Hipopituitarizm sonucu gelişen Dwarfizm (cücelik) durumunda maksilla normal sınırlarda kalmaya çalışırken mandibula yetersiz gelişir, distale kayar ve küçük çeneye bağlı çarpraşıklık ile derin kapanış görülür (Durum I). Akromegali ise erişkin başlangıçlı GH fazlalığıdır, epifizler kapalı olduğundan özellikle mandibula kondil ve alveoler bölgelerinde sekonder büyüme ile prognati, Sınıf 3 maloklüzyon ve diastema yaratır (Durum II).

---

### ÇİFT 301 (Benzerlik: 0.70)

**Soru 1 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 302 (Benzerlik: 0.70)

**Soru 1 (ID: bbf17920-94c7-41d4-be42-56610d4b815c)**
Soru Kökü: Hiperparatiroidizmde iskelet sisteminde görülen yaygın demineralizasyon süreci çenelere yansıdığında, radyografik değerlendirmede aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Tüm çene kemiklerinin dansitesinde artış
Açıklama: Hastalıkta yoğun osteoklastik aktivite sonucu iskelet sisteminde demineralizasyon gelişir, bu durum çene radyografilerine çene dansitesinde belirgin bir 'azalma' (radyolüsensi) olarak yansır. Kemik yoğunluğunda artış bu tablonun tam zıttıdır ve osteopetrozis gibi hastalıklarda görülür.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 303 (Benzerlik: 0.70)

**Soru 1 (ID: 014d4be8-7e84-44c0-9a36-d786e916ea79)**
Soru Kökü: Sekiz yaşındaki çocuk hastanın ailesi, çocuğun daimi dişlerinin bir türlü süremediğini ve süt dişlerinin halen düşmediğini ifade etmektedir. Hekim tarafından yapılan muayenede çocuğun dudaklarının oldukça kalın, dilinin normalden büyük (makroglossi) olduğu; cildinin dokunulduğunda hamursu bir kıvama sahip olduğu fark edilmiştir. Diş radyografilerinde daimi diş sürmelerinde gecikme ve eksternal kök rezorpsiyonları saptanan bu hastada en olası medikal tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Hipotiroidizm (Kretinizm)
Açıklama: Süt dişlerinin düşmesinde ve daimi diş sürmesinde gecikme, hamursu cilt, kalın dudaklar ve makroglossi kombinasyonu, çocukluk çağı tiroid yetmezliği olan kretinizm (hipotiroidizm) tablosu ile tamamen uyumludur. Rikets ve hipofosfatazyada da sürme gecikmesi görülebilir ancak onlarda eklem şişlikleri, bacak eğrilikleri veya erken diş kaybı (süt kesiciler) ön plandadır. Ciltteki hamursu kıvam ve dil büyümesi miksödematöz infiltrasyona (mukopolisakkarid birikimi) işaret eder.

**Soru 2 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

---

### ÇİFT 304 (Benzerlik: 0.70)

**Soru 1 (ID: 67f3ed87-a89a-4efc-8de2-e777194e5f0a)**
Soru Kökü: 45 yaşında kadın hasta, tekrarlayan böbrek taşı ve kemik ağrıları şikayetiyle başvurmuştur. Radyografik incelemede çene kemiklerinde 'Brown tümör' ile uyumlu radyolüsensiler izlenmiştir. Tablo 13 referans alındığında, bu hastanın çene radyografisinde trabekül sayısında nasıl bir değişim beklenir?
Doğru Şık (B): Sayısal azalma
Açıklama: Hiperparatiroidizmde parathormon fazlalığına bağlı artmış osteoklastik aktivite kemik yıkımına yol açarak çene kemiklerinde trabekül sayısında sayısal azalmaya neden olur. Bu azalma, radyografide granüler bir yapı (tuz-biber görünümü) ile birlikte izlenir. En güçlü çeldirici olan nadiren artış, renal osteodistrofi gibi mikst patolojilerde izlenir, primer hiperparatiroidizmde görülmez.

**Soru 2 (ID: fa4f81b5-b8b1-45dc-8716-8654c98180bd)**
Soru Kökü: Rikets (raşitizm) hastalarında çene kemiklerinin kansellöz kısmındaki trabekül yoğunluğu değerlendirildiğinde, Tablo 13'e göre trabekül sayısında nasıl bir değişim gözlenir?
Doğru Şık (A): Sayısal azalma
Açıklama: Yetersiz mineralizasyon nedeniyle rikets hastalarının çene kemiklerindeki kansellöz yapıda trabekül dansitesi, kalınlığı ve sayısında belirgin azalma saptanır. Hastalığın geç evrelerinde dişler kemik desteğini kaybedecek kadar trabeküler kayıp yaşanabilir; ancak granüler patern bu hastalığın klasik bir bulgusu değildir. Sayısal artma (osteopetrozis) gibi kemik yoğunluğunun arttığı tablolarda izlenir.

---

### ÇİFT 305 (Benzerlik: 0.70)

**Soru 1 (ID: a8ab1e94-f40f-4b18-b733-bff3ae2c5a10)**
Soru Kökü: Bebeklik döneminde kalsiyum emiliminin bozulmasına bağlı olarak görülen raşitizm (rikets) hastalığında, kafatası kemiklerindeki kalsifikasyon yetersizliğinin 'kraniyotabes' adı verilen yumuşaklık yaratması sonucu, bebeklerde radyolojik/klinik olarak gözlenen tipik kafatası deformitesi aşağıdakilerden hangisidir?
Doğru Şık (C): Bebeklerin yattıkları yöne doğru parietalde düzleşme ve frontal şişkinlik
Açıklama: Riketsli bebeklerde kalsifiye olamayan esnek kemik yapısı (kraniyotabes) nedeniyle, yerçekiminin etkisiyle kafatasının yattığı bölgesi (genellikle parietal veya oksipital) düzleşirken, basıncın ittiği frontal kemik bölgelerinde reaktif şişkinlik (bossing) meydana gelir. Hair-on-end (A) anemilerde, pamuk atığı (B) pagette, Wormian kemikler (E) hipotiroidizm/osteogenezis imperfektada izlenir.

**Soru 2 (ID: c664831f-4b3c-4198-81c7-06f3f2b34f9d)**
Soru Kökü: Bebeklik döneminde D vitamini eksikliği, kafatasında kraniyo-tabes ve bacaklarda O şeklinde deformite hikayesi olan raşitizm (Rickets) hastasında, çene kemik dansitesinde hangi radyografik değişim beklenir?
Doğru Şık (D): Dansitede azalma
Açıklama: Rikets tablosunda aktif D vitamini eksikliğine bağlı kalsiyum absorbsiyon defekti yaşanır; bu da osteoid dokunun mineralize olamamasına ve generalize kemik dansitesinde azalmaya neden olur. Radyografide bu durum kansellöz kemikte lüsensi ve kortikal yapılarda incelme olarak izlenir. Opasite veya sement dansitesinde artış kalsifikasyon defekti olan bu tabloda fizyolojik olarak imkansızdır.

---

### ÇİFT 306 (Benzerlik: 0.70)

**Soru 1 (ID: 74fc207f-f136-4261-97a0-00b6cb22984e)**
Soru Kökü: Tablo 14'te belirtilen sistemik hastalıkların dental bulguları karşılaştırıldığında, hipokalsifikasyon görülmesine rağmen diş hipoplazisi gelişiminin **en az olası** (nadir) olduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis hastalarında zayıf kalsifikasyon (hipokalsifikasyon) yaygın görülmesine karşın, ameloblast veya odontoblast matriks sekresyonunun çökmesiyle oluşan belirgin diş hipoplazisi 'nadir' olarak izlenir. Hipofosfatazya ve rikets hastalarında hem hipokalsifikasyon hem de hipoplazi birlikte sık görülürken, osteopetroziste sert doku hacminden çok mineral yoğunluğu hedeflenir. Diş anatomik formu korunsa da doku kalitesi oldukça zayıftır.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 307 (Benzerlik: 0.70)

**Soru 1 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

**Soru 2 (ID: b5ef323b-6c2a-4dad-8dfc-f4a2b535f681)**
Soru Kökü: Kalıtsal tübüler bozukluklara bağlı olarak veya yetişkin dönemde sekonder olarak gelişebilen, dişlerde spesifik olarak pulpa kanallarında genişleme ve apse formasyonları ile karakterize olan hipofosfatemiye yol açabilen en yaygın patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Multiple myeloma
Açıklama: Hipofosfatemi çoğunlukla kalıtsal D vitamini dirençli formda görülmekle birlikte, yetişkinlerde renal dokuyu dolaylı olarak etkileyen multipl myelom gibi paraproteinemilerde sekonder olarak böbrek atılımının bozulmasıyla ortaya çıkar. Bu durum idrarla fosfat kaybına, dolayısıyla kemik ve dişlerde mineralizasyon defektine yol açar. Diğer şıklardaki endokrin patolojiler renal tübüler fosfat atılımına doğrudan sebep olmaz.

---

### ÇİFT 308 (Benzerlik: 0.70)

**Soru 1 (ID: 88f78318-3d6f-4c7c-9d78-15c8c2e74e98)**
Soru Kökü: Aşağıdakilerden hangisi çocukluk çağı hipotiroidizm (kretinizm) hastalarında, çene-yüz ve kafa kaidesi bölgesinde karşılaşılan radyografik bulgulardan biri **değildir**?
Doğru Şık (D): Diş gelişim hızında artma ve erken erüpsiyon paterni
Açıklama: Hipotiroidizmde (kretinizm) tüm anatomik süreçlerde olduğu gibi dişlerin gelişim ve sürme hızlarında yavaşlama/gecikme vardır; diş gelişiminde artma ve erken erüpsiyon hipertiroidizmin karakteristik bulgusudur. Kısa kökler, lamina dura kalınlaşması, wormian kemik üretimi ve eksternal kök rezorpsiyonları kretinizm tablosunun beklenen radyografik sonuçlarıdır.

**Soru 2 (ID: f71f1f95-d933-4420-82e9-f02bd49c7cfd)**
Soru Kökü: Endokrin sistem hastalıklarında izlenen genel radyografik çene özelliklerinden biri **değildir**?
Doğru Şık (A): Lamina dura belirginliğinde artış
Açıklama: Endokrin hastalıklarında kemik boyutu, şekli, kortikal ve trabeküler yapısı değişir; ancak dişlerde lamina dura belirginliğinin artışı değil, aksine kaybı izlenir. Diğer şıklardaki kemiksel değişiklikler, sistemik endokrin patolojilerin temel radyolojik belirteçleridir.

---

### ÇİFT 309 (Benzerlik: 0.70)

**Soru 1 (ID: 3d5ef8c7-abc6-4b9c-93a8-e07061b5c195)**
Soru Kökü: Yetişkin dönemde aşırı büyüme hormonu salgılanmasıyla karakterize olan akromegali hastalarında, sefalometrik incelemede aşağıdakilerden hangisinin saptanması en olasıdır?
Doğru Şık (A): Sella tursikada belirgin genişleme
Açıklama: Akromegali hastalarında aşırı büyüme hormonu salgılayan hipofiz adenomuna sekonder olarak radyografik düzeyde sella tursikada belirgin genişleme izlenmesi en olası sefalometrik bulgudur. Bu hastalarda ramus ve gövde arasındaki açı daralmaz aksine artar ve Sınıf III iskeletsel anomali gelişir. Ayrıca paranazal sinüslerde aplazi değil, aksine aşırı genişleme (pnömatizasyon) ve kafatasının dış tabakasında kalınlaşma izlenir.

**Soru 2 (ID: 6d40b3d9-e39d-4d00-9ebd-1262e6fb6b0f)**
Soru Kökü: Kırk beş yaşında erkek hasta, son 5 yıldır ellerinde, ayaklarında ve alt çenesinde sürekli bir büyüme şikayetiyle kliniğe başvuruyor. Yapılan muayenede dilde aşırı büyüme (makroglossi) ve mandibular prognati tespit ediliyor. Bu hastanın lateral sefalometrik veya kafa grafilerinde aşağıdaki bulgulardan hangisinin izlenmesi en olasıdır?
Doğru Şık (C): Sella tursikada genişleme
Açıklama: Akromegalide gözlenen aşırı büyüme hormonu (GH) salınımı, genellikle hipofiz bezinin anterior lobundaki bir adenomdan kaynaklandığı için radyografilerde sella tursika hacminde genişleme izlenir. Kafa tabanında ossifikasyon gecikmesi hipotiroidizmde, dövülmüş bakır görünümü ise hipofosfatazyada beklenen bulgulardır. Sella tursika genişlemesi, yetişkin hiperpituitarizminin pitüiter kökenini işaret eden patognomonik bir radyolojik işarettir.

---

### ÇİFT 310 (Benzerlik: 0.70)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: b309abcb-de88-40c9-8a2b-2206ac1d4ffa)**
Soru Kökü: Büyüme hormonu eksikliğine bağlı olarak gelişen hipopituitarizm sendromunda, hastaların dental arklarında sıklıkla ortodontik düzensizlikler ve yer darlığı problemi gözlenir. Bu ortodontik tablonun ortaya çıkmasındaki birincil mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Diş boyutlarının normal olmasına rağmen çene boyutlarının küçük kalması
Açıklama: Hipopituitarizm sendromunda dişlerin kron büyüklükleri genetik olarak belirlenmiş normal boyutlarındadır, ancak maksilla ve özellikle mandibula küçük kaldığı için dental arkta yeterli yer bulunamaz, bu da çapraşıklığa ve maloklüzyonlara yol açar. Makrodonti izlenmez. Çapraşıklığın temel nedeni olan bu orantısızlık (normal diş - küçük kemik) iskeletsel büyüme eksikliğinin direkt sonucudur.

---

### ÇİFT 311 (Benzerlik: 0.70)

**Soru 1 (ID: 7da5691b-4022-4bf1-9443-ae32d160a37e)**
Soru Kökü: Akromegali hastasında alt çenenin hacimsel gelişimiyle beraber izlenen dental ve oklüzal değişiklikler değerlendirilirken aşağıdaki klinik/radyografik bulgulardan hangisi ile karşılaşma olasılığı **en azdır**?
Doğru Şık (D): Alveolar kemik genişliği ve yüksekliğinde şiddetli incelme/atrofi
Açıklama: Akromegali sürecinde büyüme hormonu anabolik bir etki yarattığı için alveolar kemiğin hem genişliğinde hem de yüksekliğinde hipertrofik bir 'artış' izlenir. Mandibulanın orantısız büyümesiyle dişler ayrık (diastema) kalır ve makroglossiye bağlı openbite, ayrıca posterior süpererüpsiyon ve hipersementoz gelişir.

**Soru 2 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

---

### ÇİFT 312 (Benzerlik: 0.70)

**Soru 1 (ID: 81e10db3-3afd-49c4-9f96-1a0aa5aa6678)**
Soru Kökü: Osteopetrozis sendromunda, generalize kemik yoğunluğu artışı ve osteoklast disfonksiyonu nedeniyle kemiklerin sürekli yapılıp yıkılamaması tablosu mevcuttur. Tablo 14 verilerine dayanarak, bu histopatolojik kemik yapısının diş sürmesi süreci üzerindeki majör klinik etkisi aşağıdakilerden hangisidir?
Doğru Şık (E): Diş sürmesinde gecikme
Açıklama: Osteopetrozis hastalığında anormal artmış kemik dansitesi ve osteoklastların rezorpsiyon yapamaması, diş folikülünün sürme sırasında kemik içinde kendine yol açmasını engelleyerek diş sürmesinde belirgin gecikmeye neden olur. Prematür veya hızlanmış diş sürmesi hipertiroidizm gibi metabolizmanın çok hızlandığı durumlarda görülür. Bu rezorpsiyon güçlüğü, diş gömüklüğü riskini artırmakla beraber kök/kanal malformasyonlarına da zemin hazırlar.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 313 (Benzerlik: 0.70)

**Soru 1 (ID: 7f3feb0d-8d1c-4539-a532-f6ecc0648a32)**
Soru Kökü: Altmış beş yaşında postmenopozal kadın hasta, diş çekimi öncesi rutin kontrol amacıyla kliniğe başvuruyor. Alınan panoramik radyografide, hastanın osteoporoz riskini veya varlığını en güçlü şekilde destekleyen spesifik anatomik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Mandibula inferior korteks kalınlığında incelme
Açıklama: Osteoporoz hastalarının panoramik radyografilerinde görsel olarak en erken ve spesifik saptanan kemik mineral yoğunluğu kaybı bulgusu, mandibula inferior korteksindeki (alt sınır) incelme ve osteopenik değişikliklerdir. Angulusta psödofraktür (Looser zonu) osteomalazide izlenirken, hipersementoz akromegali veya Paget hastalığı gibi durumlarda karşımıza çıkar. Kemik kütlesindeki azalma trabeküler ağı ve kortikal sınırları zayıflatır.

**Soru 2 (ID: e74ce7c8-1743-4832-9b3d-292ba934b08f)**
Soru Kökü: Postmenopozal dönemdeki bir kadın hasta, minör bir travma sonrası gelişen mandibula fraktürüyle kliniğe başvuruyor. Panoramik radyografide inferior mandibular kortekste belirgin incelme saptanıyor. Biyopsi sonucu kemiğin mikroskobik/histolojik yapısının normal olduğu ancak toplam kemik kütlesinin azaldığı rapor edildiğine göre, bu patolojinin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik yapım ve yıkım döngüsündeki hücresel dengesizlik
Açıklama: Osteoporoz, kemik organik matriksinin (histolojik yapısının) normal olduğu, ancak osteoblastik yapım ile osteoklastik yıkım arasındaki dengenin yıkım lehine bozulmasıyla kemik kütlesinin jeneralize azaldığı durumdur. D vitamini eksikliği çeldiricisi yanlıştır çünkü D vitamini eksikliğinde histolojik yapı normal kalmaz, matriks kalsifiye olamadığı için defektif (osteoid) doku birikir (osteomalazi/rikets). Mandibular kortikal incelme bu hastalarda en önemli radyografik göstergelerden biridir.

---

### ÇİFT 314 (Benzerlik: 0.70)

**Soru 1 (ID: 1abb92c7-edd7-4344-ac71-6720621826a2)**
Soru Kökü: Kortikosteroidlerin aşırı salınımı veya ekzojen tıbbi kullanımı sonucu gelişen Cushing sendromunda, diş yapıları içerisinde radyografik olarak aşağıdaki bulgulardan hangisinin izlenmesi en olasıdır?
Doğru Şık (A): Pulpa odasında mineral birikimine bağlı daralma
Açıklama: Cushing sendromunda glukokortikoid seviyesinin artmasına bağlı olarak kemik döngüsü baskılanırken, dişlerde sekonder mineral birikimine sekonder pulpa odalarında daralmalar izlenebilir. Köklerin erken rezorpsiyonu hipertiroidizmin, PDL genişlemesi sklerodermanın, hipersementoz ise akromegali veya tiroidizmin bulgusudur. Cushing'in dentisyon üzerindeki nadir pozitif spesifik bulgusu pulpal obliteratif değişimlerdir.

**Soru 2 (ID: dececf98-b751-466a-9e44-8d6dec27ddc0)**
Soru Kökü: Hiperparatiroidizm tanısı almış bir hastanın dental periapikal ve panoramik radyografik incelemesinde kortikal sınırların incelmesi ve lamina dura kaybına ek olarak diş köklerinde en sık aşağıdaki patolojilerden hangisi izlenebilir?
Doğru Şık (A): İnternal ve eksternal kök rezorpsiyonları
Açıklama: Hiperparatiroidizmde kemik yıkımından sorumlu olan osteoklastik aktivitenin sement ve dentin dokusunu da hedef alması sonucunda dişlerde sıklıkla internal ve eksternal kök rezorpsiyonları görülebilir. Hipersementoz ise daha çok akromegali veya tirotoksikoz gibi durumlarda beklenir.

---

### ÇİFT 315 (Benzerlik: 0.70)

**Soru 1 (ID: 15c182d9-3581-4016-96db-8d6231a29685)**
Soru Kökü: Çocukluk döneminde başlayan hipofiz bezi disfonksiyonlarının iskelet sistemi üzerine etkileri incelendiğinde; büyüme hormonunun aşırı salgılanması gigantizme, yetersiz salgılanması ise cüceliğe (dwarfizm) yol açmaktadır. Hipofiz yetmezliğine bağlı dwarfizm izlenen bir hastada aşağıdaki maksillofasiyal bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): Dişlerin pulpa odaları ve apikal foramenlerinde anormal genişlik
Açıklama: Hipofiz hormon yetersizliğine bağlı cücelik (dwarfizm/akondroplazi) sendromlarında fiziksel gelişimle birlikte diş gelişimi de orantılı olarak duraksar. Çeneler olması gerekenden çok küçüktür (çapraşıklık yapar, prognati yapmaz). Gelişimin yavaş olması nedeniyle dişlerin apikal foramenlerinin kapanması ve sekonder dentin yapımı gecikir; bu da radyograflarda pulpa odalarının ve apikal foramenlerin belirgin şekilde anormal derecede daha geniş görünmesine neden olur.

**Soru 2 (ID: 59dbbcb0-d1b7-4165-9fe6-5ec3aa1688b7)**
Soru Kökü: On iki yaşında erkek hasta, yaşıtlarına göre boy kısalığı ve çeneler arası uyumsuzluk şikayetiyle ortodonti kliniğine başvurmuştur. Çocuğun ekstremite oranları (kol/bacak) gövdesine göre normaldir ancak iskeleti genel olarak çok küçüktür. Sefalometrik analizde maksillanın normalden küçük, mandibulanın ise maksilladan daha da küçük ve geri pozisyonda olduğu belirlenmiştir. Bu klinik tablonun altında yatan en olası endokrin/gelişimsel bozukluk aşağıdakilerden hangisidir?
Doğru Şık (A): Hipopituitarizm (Hipofizer Cücelik)
Açıklama: Vücut oranlarının normal kalmasına rağmen hastanın genel iskelet sisteminin küçük olması ve mandibulanın maksillaya oranla belirgin bir şekilde geride kalarak mikrognati yaratması hipopituitarizm (dwarfizm) için karakteristiktir. Akondroplazide ekstremiteler gövdeye göre çok daha kısadır ve baş orantısız büyüktür. Bu orantılı (simetrik) büyüme geriliği tablosu, doğrudan hipofizden salınan büyüme hormonunun yetersizliğine işaret eder.

---

### ÇİFT 316 (Benzerlik: 0.70)

**Soru 1 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

**Soru 2 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

---

### ÇİFT 317 (Benzerlik: 0.70)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 318 (Benzerlik: 0.70)

**Soru 1 (ID: ced5c855-c5a0-45b4-91b6-ce8864d8dd9d)**
Soru Kökü: Sistemik hastalıkların fizyopatolojik doku hasarı mekanizmaları radyolojik bulgularına yön verir. Kronikleşmiş doku asidozu ve hiperglisemiye bağlı lökosit/makrofaj defektlerinin kemik yıkımına yol açtığı durum (I) ile osteoblastların doğrudan baskılanıp kemik yapımının inhibe olduğu hormonal durum (II) aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (A): (I) Diabetes mellitus - (II) Cushing sendromu
Açıklama: Diabetes mellitustaki (I) periodontal yıkım, nötrofil (lökosit) ve monosit kemotaksisinin asidoz/hiperglisemi nedeniyle sekteye uğraması sonucu gelişen immün yetmezliğe dayanır. Cushing sendromunda (II) ise yüksek glukokortikoidler immün sistemi baskılamakla kalmaz, aynı zamanda osteoblastları doğrudan inaktive ederek anabolik kemik döngüsünü durdurur ve ciddi radyolojik osteoporoza neden olur.

**Soru 2 (ID: d75007fe-33ec-4834-8428-5d339b16b65c)**
Soru Kökü: Sistemik hastalıkların radyografik bulguları karşılaştırıldığında, mandibular kortekste incelme ve osteomiyelit eğiliminin arttığı hastalık (I) ile mandibula angulusunda eroziv rezorpsiyon izlenen hastalık (II) aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): (I) Orak hücreli anemi - (II) Progresif sistemik sklerozis
Açıklama: Orak hücreli anemide pulpal tıkanıklıklar nekroza sebep olur ve kemik iliğinde konak yanıt yetersizliğiyle osteomiyelit eğilimi artar, kortikal incelme mevcuttur (I). Progresif sistemik skleroziste (skleroderma) ise rijit doku baskısına bağlı mandibula angulus, kondil ve koronoidde eroziv rezorpsiyon izlenir (II). Osteopetroziste osteomiyelit riski çok yüksektir ancak kemik korteksi incelmez, aksine kalınlaşır.

---

### ÇİFT 319 (Benzerlik: 0.70)

**Soru 1 (ID: 6223335b-b439-4f77-8b76-47773804def1)**
Soru Kökü: Talasemi hastalığında görülen iskeletsel ve dental değişiklikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Çene kemiklerinin radyografik dansitesinde artış ve sklerotik odakların oluşumu
Açıklama: Talasemi hastalarında, artan kırmızı kan hücresi ihtiyacını karşılamak için kemik iliği hiperplazisi gelişir. Bu da kortikal sınırlarda incelmeye, trabekül sayısında azalmaya ve tüm çene/kafatası kemiklerinde generalize radyolüsensiye (kemik dansitesinde azalmaya) neden olur. Kemik dansitesinde artış ve sklerotik odaklar osteopetrozis gibi hatalıkların bulgusudur, talasemide izlenmez.

**Soru 2 (ID: 968694b1-5e87-4591-9426-086b253bb215)**
Soru Kökü: Çocukluk döneminden itibaren düzenli tedavi görmeyen talasemi hastalarının dental arklarda ve okluzyonlarında aşağıdaki anormalliklerden hangisinin izlenmesi en olasıdır?
Doğru Şık (A): Protrüze maksilla, artmış overjet ve polidiastemalar
Açıklama: Talasemi majör hastalarında maksiller kemik iliğinin aşırı genişlemesi (hiperplazisi) maksillayı öne ve dışa doğru iter. Bu hacim artışı dişleri yelpaze gibi açarak polidiastemalara (çoklu diş arası boşluklar) ve üst çenenin öne itilmesine bağlı artmış overjet ile protrüze maksilla tablosuna neden olur. Sınıf III maloklüzyon (alt çene önde) akromegalinin bulgusuyken, talasemide patoloji maksiller fazlalıktır.

---

### ÇİFT 320 (Benzerlik: 0.70)

**Soru 1 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

**Soru 2 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

---

### ÇİFT 321 (Benzerlik: 0.70)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 322 (Benzerlik: 0.70)

**Soru 1 (ID: 052c5d00-1470-40f0-84e7-17e42efe51c9)**
Soru Kökü: Aşağıdaki sistemik endokrin bozuklukların hangisinde kafatası süturlarında aksesuar kemik üretimi (Wormian kemik), kısa diş kökleri ve lamina durada kalınlaşma bulguları karakteristik olarak bir arada izlenir?
Doğru Şık (C): Hipotiroidizm
Açıklama: Hipotiroidizm hastalarında kafa kaidesinde kısalma, süturlarda Wormian kemik oluşumu, diş köklerinin kısa kalması ve lamina duranın kalınlaşması tipik radyolojik triadı oluşturur. Cushing veya hiperparatiroidizmde kemik ve kortikal sınırlarda incelme veya granüler kemik izlenirken, tiroid yetmezliğinde kemik yapım-yıkım döngüsünün yavaşlamasına bağlı sklerotik kalınlaşmalar görülür. Sürme gecikmesi ile bu tablo periapikal dokularda kalınlaşmış bir sınır yaratır.

**Soru 2 (ID: 8f1a0878-04bc-4347-8218-ad43b5f05fbe)**
Soru Kökü: Aşağıdaki sistemik hastalıklardan hangisinde, mineralizasyon defektleri ve granüler trabeküler değişikliklerle birlikte çene boyutlarında 'artma (genişleme)' beklenir?
Doğru Şık (E): Renal osteodistrofi
Açıklama: Renal osteodistrofi (kronik böbrek yetmezliği sekeli), KIBT ve klinik görüntülerinde maksilla ve mandibulada ekspansiyon (genişleme) ve kemik boyutlarında artma ile karakterize olabilir. Hipopituitarizm ve hipotiroidizm çene boyutlarında küçülmeye neden olurken, rikets veya osteoporoziste çene boyutunda bir değişiklik beklenmez.

---

### ÇİFT 323 (Benzerlik: 0.70)

**Soru 1 (ID: 6bab2a95-d12a-4a14-ad62-80880f67f6b2)**
Soru Kökü: Hipokalsemiye bağlı tetani ve kas krampları ile karakterize hipoparatiroidizm tablosunda, çene kemiklerinin radyografik incelmesinde kemik dansitesi açısından Tablo 13'e göre **en az olası** duruma rağmen nadiren de olsa hangi bulgu izlenebilir?
Doğru Şık (D): Nadiren artma
Açıklama: Hipoparatiroidizmde parathormon yetersizliği kalsiyum mobilizasyonunu durdurduğu için genellikle kemik dansitesinde belirgin bir değişiklik izlenmez. Ancak hedef doku yanıtına veya kronik kalsiyum/fosfat dengesizliğine bağlı olarak çene kemiklerinde 'nadiren artma' rapor edilmektedir. Generalize radyolüsensi (azalma) veya granüler yapı hiperparatiroidizmin karakteristik bulgularıdır ve bu hastalıkta görülmez.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 324 (Benzerlik: 0.70)

**Soru 1 (ID: c4163a70-7624-46de-b5b9-a6012b1029cd)**
Soru Kökü: Çocukluk çağında gelişen tiroid hormon eksikliği (kretinizm) hastalarının çene, kafa ve ekstremite kemiklerini ilgilendiren radyografik izlemlerinde aşağıdaki bulgulardan hangisi **görülmez**?
Doğru Şık (E): Kortikal sınırlarda diffüz incelme ve radyografik osteoporoz tablosu
Açıklama: Osteoporoz nedeniyle kortikal sınırlarda incelme, hipotiroidizmde değil tam tersi mekanizmayla çalışan ve kemik yapım-yıkım döngüsünü felte eden hipertiroidizm (tirotoksikoz), hiperparatiroidizm veya osteoporoz gibi tablolarda izlenir. Hipotiroidizm radyografilerinde lamina durada belirgin kalınlaşma görülür; epifizlerin geç kapanması, wormian kemikler ve kısa kökler teşhisi destekleyen en önemli büyüme geriliği verileridir.

**Soru 2 (ID: f71f1f95-d933-4420-82e9-f02bd49c7cfd)**
Soru Kökü: Endokrin sistem hastalıklarında izlenen genel radyografik çene özelliklerinden biri **değildir**?
Doğru Şık (A): Lamina dura belirginliğinde artış
Açıklama: Endokrin hastalıklarında kemik boyutu, şekli, kortikal ve trabeküler yapısı değişir; ancak dişlerde lamina dura belirginliğinin artışı değil, aksine kaybı izlenir. Diğer şıklardaki kemiksel değişiklikler, sistemik endokrin patolojilerin temel radyolojik belirteçleridir.

---

### ÇİFT 325 (Benzerlik: 0.70)

**Soru 1 (ID: 2c3e9bca-d1f0-40bb-89cb-daedb4c9c965)**
Soru Kökü: Talasemi majör hastalarında düzenli kan transfüzyonları yaşam süresini uzatsa da, dokularda aşırı demir birikimine (hemokromatozis) yol açarak ikincil komplikasyonlar yaratır. Bu hastalarda baş boyun bölgesinde hemokromatozise bağlı olarak aşağıdaki durumlardan hangisinin gelişmesi en olasıdır?
Doğru Şık (A): Parotis bezinde ağrılı şişlik ve ağız kuruluğu
Açıklama: Düzenli transfüzyon kaynaklı sekonder hemokromatozis (aşırı demir birikimi), talasemi hastalarında ekzokrin bez dokularında birikerek organ disfonksiyonuna yol açar. Diş hekimliği pratiğinde bu durum, parotis bezinde ağrılı şişliğe ve beraberinde belirgin kserostomiye (ağız kuruluğuna) sebep olur. Lenf nodu kalsifikasyonu veya TME hasarı sistemik demir birikiminin spesifik ve beklenen komplikasyonları değildir.

**Soru 2 (ID: fa9b603b-7b90-4ae9-ba15-8692c4a5d744)**
Soru Kökü: Talasemi majör tedavisi gören ve düzenli kan transfüzyonu alan yirmi yaşındaki hastanın anamnezinde şiddetli ağız kuruluğu, klinik muayenesinde ise bilateral parotis bezlerinde ağrılı şişlik izlenmektedir. Bu hastada majör tükürük bezlerindeki patolojinin temel fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Sürekli kan transfüzyonlarına bağlı olarak dokularda fazla miktarda demir birikmesi (hemokromatozis)
Açıklama: Talasemi hastalarında kronik anemiyi yönetmek için yaşam boyu düzenli kan transfüzyonları uygulanır. Kan transfüzyonlarının en ciddi komplikasyonu, vücudun fazla demiri atamaması sonucu organlarda biriken demir yüküdür (hemokromatozis). Parotis bezi parankiminde biriken bu aşırı demir molekülleri toksik etki yaratarak bezin ağrılı şişmesine ve salgı fonksiyonunu yitirerek kserostomi (ağız kuruluğu) tablosuna girmesine neden olur.

---

### ÇİFT 326 (Benzerlik: 0.70)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

---

### ÇİFT 327 (Benzerlik: 0.70)

**Soru 1 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

**Soru 2 (ID: cdaac563-6e42-4ce9-bf60-660af0dc7016)**
Soru Kökü: Aşağıdakilerden hangisi hipoparatiroidizm veya psödohipoparatiroidizm olgularında çene ve kraniyofasiyal bölgede görülmesi beklenen radyolojik veya klinik bulgulardan biri **değildir**?
Doğru Şık (D): Süt dişlerinin travma olmaksızın erken kaybı
Açıklama: Hipoparatiroidizm hastalarında dişlerde sürme gecikmesi, mine hipoplazisi ve kök dilaserasyonları gibi gelişimsel anomaliler tipik olarak izlenir ancak süt dişlerinin erken kaybı bu hastalığın bir bulgusu değildir. Süt dişlerinin travma veya çürük olmaksızın spontan ve erken kaybı, hipofosfatazya hastalığının patognomonik özelliğidir. Bazal ganglionlarda çift halde izlenen top top kalsifikasyonlar ise hipoparatiroidizmin spesifik bir radyolojik işaretidir.

---

### ÇİFT 328 (Benzerlik: 0.70)

**Soru 1 (ID: 7369b8fc-2a07-4cae-a764-0d314313fa69)**
Soru Kökü: Yetişkin yaşta aşırı büyüme hormonu salgılanması sonucu akromegali gelişen bir hastanın oral ve maksillofasiyal bulguları değerlendirildiğinde, aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (B): Anterior derin kapanış (Deep bite)
Açıklama: Akromegalide alt çenenin aşırı büyümesi, makroglossi ve alveolar kemikteki genişlemeler anterior open bite (açık kapanış) oluşumuna yol açar; bu nedenle derin kapanış beklenmeyen bir bulgudur. Derin kapanış tablosu, alt çenenin normalden küçük ve geride konumlandığı hipopituitarizm (cücelik) vakaları için karakteristiktir. Alt çene sürekli ileri doğru büyüdüğü için Sınıf III iskeletsel anomali ve anterior dişlerde diastema kaçınılmaz hale gelir.

**Soru 2 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

---

### ÇİFT 329 (Benzerlik: 0.70)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: 94b67e5b-9dbf-4774-8402-5004cef3a442)**
Soru Kökü: Hipofosfatazya hastalarının radyografik değerlendirmesinde Tablo 14 verilerine göre lamina dura ve kortikal sınırların durumu hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (C): Lamina dura kaybı ve kortikal sınırda incelme görülür.
Açıklama: Hipofosfatazya, alkalen fosfataz enziminin yetersizliğine bağlı olarak osteoidin normal mineralize olamamasıyla karakterizedir ve bu durum lamina dura ile kortikal sınırlarda incelme veya kayıp oluşturur. Lamina durada kalınlaşma osteopetroziste görülürken, hipofosfatazyada alveoler kemik dansitesinde azalma mevcuttur. Hastalarda dişlerin ince mine, dentin ve sement yapısına sekonder olarak lamina dura net olarak izlenemez.

---

### ÇİFT 330 (Benzerlik: 0.70)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: 7981b751-0fde-4ef7-aeaf-821069a2e020)**
Soru Kökü: Osteoporoz hastalarının radyografik muayenesinde, kemik formasyonundaki azalmaya ikincil olarak trabekül yapısında Tablo 13'e göre hangi değişim saptanır?
Doğru Şık (C): Trabekül sayısında azalma
Açıklama: Osteoporozda trabeküler kemik hacmindeki kayıp, radyografik olarak trabekül sayısında, boyutunda ve kalınlığında azalma olarak yansır. Osteoporozda trabeküller incelir ve seyrekleşir ancak hiperparatiroidizm veya Cushing sendromunda izlenen karakteristik granüler yapı oluşmaz. Mozaik patern ise Paget hastalığına ait histolojik bir bulgudur.

---

### ÇİFT 331 (Benzerlik: 0.70)

**Soru 1 (ID: 81e10db3-3afd-49c4-9f96-1a0aa5aa6678)**
Soru Kökü: Osteopetrozis sendromunda, generalize kemik yoğunluğu artışı ve osteoklast disfonksiyonu nedeniyle kemiklerin sürekli yapılıp yıkılamaması tablosu mevcuttur. Tablo 14 verilerine dayanarak, bu histopatolojik kemik yapısının diş sürmesi süreci üzerindeki majör klinik etkisi aşağıdakilerden hangisidir?
Doğru Şık (E): Diş sürmesinde gecikme
Açıklama: Osteopetrozis hastalığında anormal artmış kemik dansitesi ve osteoklastların rezorpsiyon yapamaması, diş folikülünün sürme sırasında kemik içinde kendine yol açmasını engelleyerek diş sürmesinde belirgin gecikmeye neden olur. Prematür veya hızlanmış diş sürmesi hipertiroidizm gibi metabolizmanın çok hızlandığı durumlarda görülür. Bu rezorpsiyon güçlüğü, diş gömüklüğü riskini artırmakla beraber kök/kanal malformasyonlarına da zemin hazırlar.

**Soru 2 (ID: 88ca3933-d7be-4dd4-b75c-8ca4b691c28a)**
Soru Kökü: Mermer kemik hastalığı (Osteopetrozis) olan bir hastada radyografik olarak kemik yoğunluğundaki generalize artışa rağmen dişlerin yapısal özellikleri incelendiğinde, kalsifikasyon süreci ile ilgili aşağıdakilerden hangisi görülür?
Doğru Şık (C): Dişlerde zayıf kalsifikasyon (hipokalsifikasyon)
Açıklama: Osteopetroziste (mermer kemik hastalığı) osteoklastik yetmezliğe bağlı kemik yoğunluğu dramatik olarak artsa da, oluşan doku fizyolojik olarak işlevsizdir ve dişlerde kalsifikasyon zayıftır (hipokalsifikasyon görülür). Hiperkalsifiye mine bu sistemik defektte beklenmez, zira kemik dansitesi artarken diş sert doku kalitesi düşüktür. Bu paradoksal durum dişleri çürüğe yatkın hale getirir ve şiddetli osteomiyelit riskini artırır.

---

### ÇİFT 332 (Benzerlik: 0.70)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

---

### ÇİFT 333 (Benzerlik: 0.70)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 334 (Benzerlik: 0.70)

**Soru 1 (ID: 59c6c28a-81b8-41b8-bf8a-c1d6fb8f2c17)**
Soru Kökü: Dişleri çevreleyen alveolar kemiğin lamina dura tabakası, sistemik metabolik hastalıkların teşhisinde önemli bir radyografik indikatördür. Aşağıdaki hastalıkların hangisinde lamina dura kalınlığında bir azalma (incelme veya tamamen kaybolma) görülmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis (Mermer kemik hastalığı)
Açıklama: Hiperparatiroidizm (osteoklast aktivitesi), osteoporoz, rikets, osteomalazi ve renal osteodistrofi gibi hastalıkların tümünde kemik mineral kütlesinde kayıp meydana geldiğinden lamina durada belirginlik kaybı veya incelme görülür. Osteopetrozis ise kemik rezorpsiyonunun bloke olduğu ve kemik yapımının masif şekilde arttığı mermer kemik hastalığıdır. Bu nedenle osteopetroziste lamina durada incelme değil, aksine kalınlaşma ve sklerotik bir yoğunluk artışı beklenir.

**Soru 2 (ID: 822cd981-2d05-4929-b11d-2c5845e70555)**
Soru Kökü: Tablo verileri ve fizyopatolojik mekanizmalara göre, sistemik kemik metabolizma hastalıkları dentin ve minenin sertleşme ve olgunlaşma aşamalarını etkileyerek hipokalsifikasyon yaratabilirler. Aşağıdaki hastalıklardan hangisinin dentisyon üzerinde hipokalsifikasyon yapıcı bir sekonder etkisi **yoktur**?
Doğru Şık (B): Osteoporozis
Açıklama: Diş dokuları bir kez mineralize olduktan sonra (özellikle mine ve dentin) kemik gibi kalsiyum deposu olarak dolaşıma geri katılmazlar. Rikets, hipofosfatemi, hipofosfatazya, renal osteodistrofi ve osteopetrozis dişlerin GELİŞİM aşamasında kalsiyum/fosfor dengesini bozarak zayıf mineralize (hipokalsifiye/hipoplazik) dişler oluştururlar. Osteoporozis ise yaşlılık/menopoz sonrasında (dişler çoktan oluştuktan sonra) var olan kemiği eritir, dolayısıyla diş anatomisinde hipokalsifikasyon yapmaz.

---

### ÇİFT 335 (Benzerlik: 0.70)

**Soru 1 (ID: 6bab2a95-d12a-4a14-ad62-80880f67f6b2)**
Soru Kökü: Hipokalsemiye bağlı tetani ve kas krampları ile karakterize hipoparatiroidizm tablosunda, çene kemiklerinin radyografik incelmesinde kemik dansitesi açısından Tablo 13'e göre **en az olası** duruma rağmen nadiren de olsa hangi bulgu izlenebilir?
Doğru Şık (D): Nadiren artma
Açıklama: Hipoparatiroidizmde parathormon yetersizliği kalsiyum mobilizasyonunu durdurduğu için genellikle kemik dansitesinde belirgin bir değişiklik izlenmez. Ancak hedef doku yanıtına veya kronik kalsiyum/fosfat dengesizliğine bağlı olarak çene kemiklerinde 'nadiren artma' rapor edilmektedir. Generalize radyolüsensi (azalma) veya granüler yapı hiperparatiroidizmin karakteristik bulgularıdır ve bu hastalıkta görülmez.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 336 (Benzerlik: 0.70)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: dececf98-b751-466a-9e44-8d6dec27ddc0)**
Soru Kökü: Hiperparatiroidizm tanısı almış bir hastanın dental periapikal ve panoramik radyografik incelemesinde kortikal sınırların incelmesi ve lamina dura kaybına ek olarak diş köklerinde en sık aşağıdaki patolojilerden hangisi izlenebilir?
Doğru Şık (A): İnternal ve eksternal kök rezorpsiyonları
Açıklama: Hiperparatiroidizmde kemik yıkımından sorumlu olan osteoklastik aktivitenin sement ve dentin dokusunu da hedef alması sonucunda dişlerde sıklıkla internal ve eksternal kök rezorpsiyonları görülebilir. Hipersementoz ise daha çok akromegali veya tirotoksikoz gibi durumlarda beklenir.

---

### ÇİFT 337 (Benzerlik: 0.70)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 338 (Benzerlik: 0.70)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: bad1ffc3-a183-480f-a8ec-199aca44342c)**
Soru Kökü: Yetişkinlerde kemiklerde yumuşama, kas zayıflığı ve pseudofraktürlerle karakterize osteomalazya hastalarının (Tablo 14) çene kemiği radyografik bulgularıyla ilgili olarak aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (D): Tablo 14'e göre uzun vadede tam ve kesin bir diş kaybı beklenir.
Açıklama: Osteomalazya yetişkinlikte ortaya çıktığı için dişlerin kalsifikasyon dönemi bitmiştir (mine hipoplazisi olmaz). Kortikal incelme ve lamina dura zayıflığı (Tablo 14: İncelmiş) görülse de, Tablo 14'te osteomalazya için "Diş kaybı" sütununda açıkça "Hayır" yazmaktadır. Alveol kemiği zayıflasa bile doğrudan bir diş dökülme sendromu osteomalazyaya atfedilmez.

---

### ÇİFT 339 (Benzerlik: 0.70)

**Soru 1 (ID: 8baebd0d-b23a-4683-a4c9-39027bda7ac5)**
Soru Kökü: Akromegali vakalarında hem mandibula hem de el falankslarında belirgin büyüme saptanır. Bu hastalarda sadece çene kemiklerinde meydana gelen makroskobik genişlemenin, diş dizisi üzerinde yarattığı en spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (B): Dişler arasında yaygın diastema oluşumu
Açıklama: Akromegalide çene kemiklerinin (özellikle mandibulanın) hacimsel olarak aşırı genişlemesine rağmen dişlerin boyutları sabit kalır; bu uyumsuzluk dişler arasında yaygın aralanmalara (diastema) neden olur. Şiddetli çapraşıklık tablosu çenelerin küçük kaldığı ancak diş boyutlarının normal olduğu hipopituitarizm vakaları için daha tipiktir. Lamina dura kaybı ise doğrudan hiperparatiroidizm gibi kalsiyum mobilizasyon bozukluklarının bir bulgusudur.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 340 (Benzerlik: 0.70)

**Soru 1 (ID: 74fc207f-f136-4261-97a0-00b6cb22984e)**
Soru Kökü: Tablo 14'te belirtilen sistemik hastalıkların dental bulguları karşılaştırıldığında, hipokalsifikasyon görülmesine rağmen diş hipoplazisi gelişiminin **en az olası** (nadir) olduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis hastalarında zayıf kalsifikasyon (hipokalsifikasyon) yaygın görülmesine karşın, ameloblast veya odontoblast matriks sekresyonunun çökmesiyle oluşan belirgin diş hipoplazisi 'nadir' olarak izlenir. Hipofosfatazya ve rikets hastalarında hem hipokalsifikasyon hem de hipoplazi birlikte sık görülürken, osteopetroziste sert doku hacminden çok mineral yoğunluğu hedeflenir. Diş anatomik formu korunsa da doku kalitesi oldukça zayıftır.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 341 (Benzerlik: 0.70)

**Soru 1 (ID: af9095b6-5d02-4e76-aabb-c2a60bb2cb2b)**
Soru Kökü: Orak hücreli anemi hastalığının etyopatogenezi ve klinik yansımalarıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Hastalığın temel nedeni hemoglobinin alfa (α) globulin zincirindeki genetik hasardır.
Açıklama: Orak hücreli anemi, hemoglobinin alfa değil, beta (ß) globulin zincirindeki genetik hasar sonucunda ortaya çıkan otozomal resesif bir hastalıktır. Alfa zinciri defektleri alfa-talasemi sendromlarına yol açar. Diğer şıklarda belirtilen düşük oksijen basıncında eritrosit oraklaşması, mukozal solukluk ve radyografik kortikal incelme bu hastalığın doğrulanmış klinik ve radyografik özellikleridir.

**Soru 2 (ID: d1585dc3-4428-4d72-9a2b-f2fbe9cb6f81)**
Soru Kökü: Talasemi hastalığının patogenezini orak hücreli anemiden ayıran temel farklılık aşağıdakilerden hangisinde doğru ifade edilmiştir?
Doğru Şık (D): Talasemide hemoglobin globulin zincirinin sentez miktarında bozukluk varken, orak hücrelide zincirin yapısal hasarı vardır.
Açıklama: Talasemi, alfa veya beta globulin zincirlerinin eksik veya hiç sentezlenememesi (niceliksel defekt) ile karakterizeyken; orak hücreli anemide beta zinciri sentezlenir ancak aminoasit dizilimindeki mutasyon nedeniyle yapısal olarak hasarlıdır (niteliksel defekt). Her iki hastalık da kemik iliği hiperplazisi yapar ve demir birikimi (hemokromatozis) kan transfüzyonu alan tüm kronik anemilerde görülebilir. En temel fark sentez/kalite mekanizmasıdır.

---

### ÇİFT 342 (Benzerlik: 0.70)

**Soru 1 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 343 (Benzerlik: 0.70)

**Soru 1 (ID: 9ec7babe-8a39-40be-8a5f-ad9658d4bb53)**
Soru Kökü: 50 yaşında kronik diyaliz hastasının panoramik radyografisinde maksilla ve mandibulada ekspansiyon ile lamina dura kaybı izlenmiştir. Bu hastanın trabeküler yapısı detaylı incelendiğinde Tablo 13'e göre hangi spesifik radyografik görünüm saptanır?
Doğru Şık (D): Granüler trabekül yapısı
Açıklama: Böbrek yetmezliğine bağlı renal osteodistrofi hastalarında çene trabekülleri granüler bir yapı (tuz-biber görüntüsü) alır. Hair-on-end orak hücreli anemide, dövülmüş bakır hipofosfatazyada, pamuk yumağı ise Paget hastalığında izlenirken, granüler yapı sekonder hiperparatiroidizm kökenli hastalıklarda spesifiktir.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 344 (Benzerlik: 0.70)

**Soru 1 (ID: 00da7744-3800-4ed5-9326-833ed106e061)**
Soru Kökü: Altı aylık erkek bebek, süt kesici dişlerinin kök gelişimi tamamlanmadan kendiliğinden düşmesi şikayetiyle getiriliyor. Pediatrik konsültasyonda bacaklarda eğrilik ve kafa kemiklerinde belirgin ossifikasyon eksikliği rapor ediliyor. Bu klinik tabloya yol açan kalıtsal hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Hipofosfatazya
Açıklama: Süt dişlerinin (özellikle kesicilerin) erken kaybı, bebeklerde bacak eğriliği ve kafatası ossifikasyon eksikliği hipofosfatazya sendromunun en erken ve karakteristik tanı koydurucu belirtileridir. Osteopetrozis artmış kemik dansitesi ve sürme gecikmesi ile karakterize iken, burada belirgin bir mineralizasyon ve tutunma eksikliği vardır. Akondroplazi ise orantısız cücelik yapar ancak süt dişi erken kaybı primer bulgusu değildir.

**Soru 2 (ID: 4d893071-77ae-4f58-ae9d-f9402266cca9)**
Soru Kökü: Metabolik kemik hastalıklarına sahip iki farklı çocuk hastadan birincisinde 'süt kesici dişlerinin kök rezorpsiyonu olmaksızın spontan erken dökülmesi', ikincisinde ise 'sağlam (çürüksüz) dişlerde genişlemiş pulpa boynuzlarına bağlı spontan periapikal apseler' saptanmıştır. Bu klinik senaryolara göre, birinci ve ikinci hastanın en olası ayırıcı tanıları sırasıyla aşağıdakilerden hangisidir?
Doğru Şık (B): Hipofosfatazya - Hipofosfatemi
Açıklama: Süt dişlerinin travma veya fizyolojik kök rezorpsiyonu olmaksızın erken dökülmesi (özellikle kesiciler), alkalen fosfataz eksikliği ile seyreden hipofosfatazya sendromunun pathognomonik majör bulgusudur. Buna karşın dişlerin pulpa boynuzlarının mine-dentin sınırına kadar uzanarak çürük olmaksızın mikroorganizma invazyonuna (spontan periapikal apseler) yol açması, D vitamini dirençli rikets olan hipofosfatemi hastalığının en belirgin ayırıcı komplikasyonudur.

---

### ÇİFT 345 (Benzerlik: 0.70)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

---

### ÇİFT 346 (Benzerlik: 0.70)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

---

### ÇİFT 347 (Benzerlik: 0.70)

**Soru 1 (ID: 15c182d9-3581-4016-96db-8d6231a29685)**
Soru Kökü: Çocukluk döneminde başlayan hipofiz bezi disfonksiyonlarının iskelet sistemi üzerine etkileri incelendiğinde; büyüme hormonunun aşırı salgılanması gigantizme, yetersiz salgılanması ise cüceliğe (dwarfizm) yol açmaktadır. Hipofiz yetmezliğine bağlı dwarfizm izlenen bir hastada aşağıdaki maksillofasiyal bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): Dişlerin pulpa odaları ve apikal foramenlerinde anormal genişlik
Açıklama: Hipofiz hormon yetersizliğine bağlı cücelik (dwarfizm/akondroplazi) sendromlarında fiziksel gelişimle birlikte diş gelişimi de orantılı olarak duraksar. Çeneler olması gerekenden çok küçüktür (çapraşıklık yapar, prognati yapmaz). Gelişimin yavaş olması nedeniyle dişlerin apikal foramenlerinin kapanması ve sekonder dentin yapımı gecikir; bu da radyograflarda pulpa odalarının ve apikal foramenlerin belirgin şekilde anormal derecede daha geniş görünmesine neden olur.

**Soru 2 (ID: b309abcb-de88-40c9-8a2b-2206ac1d4ffa)**
Soru Kökü: Büyüme hormonu eksikliğine bağlı olarak gelişen hipopituitarizm sendromunda, hastaların dental arklarında sıklıkla ortodontik düzensizlikler ve yer darlığı problemi gözlenir. Bu ortodontik tablonun ortaya çıkmasındaki birincil mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Diş boyutlarının normal olmasına rağmen çene boyutlarının küçük kalması
Açıklama: Hipopituitarizm sendromunda dişlerin kron büyüklükleri genetik olarak belirlenmiş normal boyutlarındadır, ancak maksilla ve özellikle mandibula küçük kaldığı için dental arkta yeterli yer bulunamaz, bu da çapraşıklığa ve maloklüzyonlara yol açar. Makrodonti izlenmez. Çapraşıklığın temel nedeni olan bu orantısızlık (normal diş - küçük kemik) iskeletsel büyüme eksikliğinin direkt sonucudur.

---

### ÇİFT 348 (Benzerlik: 0.70)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

---

### ÇİFT 349 (Benzerlik: 0.70)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 350 (Benzerlik: 0.70)

**Soru 1 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 351 (Benzerlik: 0.70)

**Soru 1 (ID: 51809fbb-1e06-4088-a000-d023e84ff5eb)**
Soru Kökü: Talasemi majör tanılı bir hastada; frontal ve parietal kemiklerde genişleme, zigomatik kemiklerde çıkıntı, 'rodent-like' (kemirgen) yüz görünümü ve sefalometrik radyografide aplastik maksiller sinüs saptanmıştır. Çene ve yüz kemiklerindeki bu deformasyonların kökeninde yatan temel fizyopatolojik süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Kronik anemiye ikincil olarak gelişen kompanzatuvar kemik iliği hiperplazisi
Açıklama: Talasemi hastalarında kronik ve şiddetli seyreden anemiye yanıt olarak vücut, eritropoietin üretimi için kemik iliğini kompanzatuvar olarak uyarır ve kemik iliği ileri derecede hiperplaziye uğrar. Fasiyal kemiklerde ve çenelerde (özellikle maksilla) süngerimsi dokunun bu yönde masif genişlemesi kemik korteksini inceltir, maksiller sinüs pnömatizasyonunu engeller (aplastik sinüs) ve 'rodent-like' yüz deformitesine neden olur. Demir birikimi ise endokrin ve parotis disfonksiyonlarını açıklar.

**Soru 2 (ID: dadae6f1-fab3-49dc-abf3-183b66bd7aff)**
Soru Kökü: Sekiz yaşında kız hasta, ön dişlerindeki aşırı aralanma (polidiastema) ve üst çenesinin öne doğru fırlak (protrüziv) olması şikayetiyle başvuruyor. Anamnezinde düzenli kan transfüzyonu aldığı öğreniliyor. Hastanın radyografilerinde "hair-on-end" görünümü ve üst çene boyutunda belirgin artış saptanıyor. Bu klinik tablonun temel nedeni olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Talasemi
Açıklama: Talasemide kemik iliği hiperplazisi nedeniyle özellikle maksilla (üst çene) boyutunda artış meydana gelir, bu da belirgin premaksilla, dişlerde polidiastema ve rodent-like (kemirgen) yüz profiline neden olur. Akromegali de boyutsal artış yapar ancak bu genellikle mandibulada prognati ve Sınıf III maloklüzyon şeklinde görülür, maksiller fırlaklık talasemi için spesifiktir. "Hair-on-end" görünümü ile anemi öyküsü talasemiyi doğrular.

---

### ÇİFT 352 (Benzerlik: 0.70)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: 6c719faa-87e9-4f86-b840-dcd979c0ec31)**
Soru Kökü: Osteomalazya hastalarının radyografik incelemesinde çene kemiklerinde trabekül sayısında izlenen spesifik istatistiksel eğilim Tablo 13'e göre hangisidir?
Doğru Şık (E): Nadiren azalma
Açıklama: Yetişkinlerde görülen D vitamini eksikliğinde (osteomalazya), kemik kütlesi daha önce oluştuğu için rikets kadar şiddetli çene bulguları vermez ve trabekül sayısında sadece 'nadiren azalma' izlenir. Çene kemiklerinde trabekülasyonda yaygın (sıklıkla) azalma çocukluk çağı varyantı olan rikets'te görülür. Granüler patern ise bu metabolik bozukluğun bir parçası değildir.

---

### ÇİFT 353 (Benzerlik: 0.70)

**Soru 1 (ID: 15c182d9-3581-4016-96db-8d6231a29685)**
Soru Kökü: Çocukluk döneminde başlayan hipofiz bezi disfonksiyonlarının iskelet sistemi üzerine etkileri incelendiğinde; büyüme hormonunun aşırı salgılanması gigantizme, yetersiz salgılanması ise cüceliğe (dwarfizm) yol açmaktadır. Hipofiz yetmezliğine bağlı dwarfizm izlenen bir hastada aşağıdaki maksillofasiyal bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): Dişlerin pulpa odaları ve apikal foramenlerinde anormal genişlik
Açıklama: Hipofiz hormon yetersizliğine bağlı cücelik (dwarfizm/akondroplazi) sendromlarında fiziksel gelişimle birlikte diş gelişimi de orantılı olarak duraksar. Çeneler olması gerekenden çok küçüktür (çapraşıklık yapar, prognati yapmaz). Gelişimin yavaş olması nedeniyle dişlerin apikal foramenlerinin kapanması ve sekonder dentin yapımı gecikir; bu da radyograflarda pulpa odalarının ve apikal foramenlerin belirgin şekilde anormal derecede daha geniş görünmesine neden olur.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 354 (Benzerlik: 0.70)

**Soru 1 (ID: be732706-5f64-4402-8152-4e3742270502)**
Soru Kökü: Kırk iki yaşında erkek hasta, son zamanlarda dilinin büyüdüğünü ve alt çenesinin belirgin şekilde öne doğru uzadığını fark ettiğini belirterek kliniğinize başvuruyor. İncelemede hastada Sınıf III maloklüzyon, dişler arası diastemalar saptanıyor. Akromegali kaynaklı olan bu iskeletsel deformitenin gelişmesinin temel mekanizması radyografik olarak hangisidir?
Doğru Şık (B): Mandibular kondillerin aşırı büyüme hormonu ile sekonder stimülasyonu
Açıklama: Yetişkinlerde görülen hiperpituitarizm (Akromegali) tablosunda aşırı büyüme hormonu, sekonder kıkırdak merkezi olan mandibular kondili uyarır. Kondiler büyüme, mandibulanın gövdesini uzatarak ramus-gövde açısını artırır ve klasik Sınıf III (prognatik) deformiteyi meydana getirir.

**Soru 2 (ID: f541bac1-b311-4339-9a4a-bb85e5e118ca)**
Soru Kökü: Büyüme hormonunun epifiz çizgileri kapandıktan sonra aşırı salgılanmasıyla ortaya çıkan akromegali tablosunda, baş-boyun ve diş yapılarında aşağıdaki radyografik ve klinik bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (E): Süt ve daimi dişlerin sürme zamanında belirgin gecikme
Açıklama: Akromegali erişkin başlangıçlıdır ve epifizler kapandıktan sonra oluşur, bu nedenle diş sürmelerinde gecikme yapmaz; tam tersi dişleri saran alveol kemiği aşırı büyüdüğü için aralanmalar (diastema) ve posterior bölgede oklüzal teması sağlayabilmek için supererüpsiyon izlenir. Diş sürmesinde gecikme akromegalide değil, tam tersi tablo olan hipofiz yetmezliğinde (hipopituitarizm - cücelik) görülen klasik bir bulgudur.

---

### ÇİFT 355 (Benzerlik: 0.70)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

---

### ÇİFT 356 (Benzerlik: 0.70)

**Soru 1 (ID: 9ff5da11-3949-4f74-b104-d09c892ff952)**
Soru Kökü: Yetişkinlikte ortaya çıkan hiperpituitarizm (akromegali) sendromunda, çenelerde kemik yıkımından ziyade yapım süreçleri ön plandadır. Bu fizyopatolojik duruma ikincil olarak radyograflarda ve intraoral muayenede tespit edilen dento-alveolar bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Posterior dişlerde süpererüpsiyon
Açıklama: Akromegalide alveolar kemiğin hem yüksekliği hem de genişliği belirgin şekilde artar; alveoler krestteki bu dikey yönlü büyüme, posterior dişlerin oklüzal düzleme doğru aşırı sürmesine (süpererüpsiyon) yol açar. Mine hipoplazisi, mine oluşum evresinde (çocukluk çağı) metabolik bozukluklar (örn. hipopituitarizm, rikets) olduğunda ortaya çıkar. Hiperpituitarizm erişkin evrede geliştiği için dişlerin anatomik formasyonunu (mine, boyut) değil, mevcut dokudaki kemik desteğini ve konumunu (hipersementoz, süpererüpsiyon) etkiler.

**Soru 2 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

---

### ÇİFT 357 (Benzerlik: 0.70)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

---

### ÇİFT 358 (Benzerlik: 0.70)

**Soru 1 (ID: 74fc207f-f136-4261-97a0-00b6cb22984e)**
Soru Kökü: Tablo 14'te belirtilen sistemik hastalıkların dental bulguları karşılaştırıldığında, hipokalsifikasyon görülmesine rağmen diş hipoplazisi gelişiminin **en az olası** (nadir) olduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis hastalarında zayıf kalsifikasyon (hipokalsifikasyon) yaygın görülmesine karşın, ameloblast veya odontoblast matriks sekresyonunun çökmesiyle oluşan belirgin diş hipoplazisi 'nadir' olarak izlenir. Hipofosfatazya ve rikets hastalarında hem hipokalsifikasyon hem de hipoplazi birlikte sık görülürken, osteopetroziste sert doku hacminden çok mineral yoğunluğu hedeflenir. Diş anatomik formu korunsa da doku kalitesi oldukça zayıftır.

**Soru 2 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

---

### ÇİFT 359 (Benzerlik: 0.70)

**Soru 1 (ID: 00da7744-3800-4ed5-9326-833ed106e061)**
Soru Kökü: Altı aylık erkek bebek, süt kesici dişlerinin kök gelişimi tamamlanmadan kendiliğinden düşmesi şikayetiyle getiriliyor. Pediatrik konsültasyonda bacaklarda eğrilik ve kafa kemiklerinde belirgin ossifikasyon eksikliği rapor ediliyor. Bu klinik tabloya yol açan kalıtsal hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Hipofosfatazya
Açıklama: Süt dişlerinin (özellikle kesicilerin) erken kaybı, bebeklerde bacak eğriliği ve kafatası ossifikasyon eksikliği hipofosfatazya sendromunun en erken ve karakteristik tanı koydurucu belirtileridir. Osteopetrozis artmış kemik dansitesi ve sürme gecikmesi ile karakterize iken, burada belirgin bir mineralizasyon ve tutunma eksikliği vardır. Akondroplazi ise orantısız cücelik yapar ancak süt dişi erken kaybı primer bulgusu değildir.

**Soru 2 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

---

### ÇİFT 360 (Benzerlik: 0.70)

**Soru 1 (ID: 1cd0131e-7813-4850-8ceb-ae3f02558dc7)**
Soru Kökü: Sistemik metabolik hastalıkların kemik dansitesine etkisi değerlendirildiğinde, çene kemiklerinde belirgin dansite azalması oluşturması **en az olası** hastalık hangisidir?
Doğru Şık (B): Hipoparatiroidizm
Açıklama: Hipertiroidizm, Hipofosfatazya, Cushing sendromu ve Rickets tabloları kemik formasyonunu bozarak veya yıkımını artırarak kemik dansitesinde net azalmaya neden olur. Ancak hipoparatiroidizmde kalsiyum mobilizasyonu durduğu için dansitede azalma izlenmez; aksine Tablo 13'e göre nadiren artma (osteoskleroz) gözlenebilir.

**Soru 2 (ID: 822cd981-2d05-4929-b11d-2c5845e70555)**
Soru Kökü: Tablo verileri ve fizyopatolojik mekanizmalara göre, sistemik kemik metabolizma hastalıkları dentin ve minenin sertleşme ve olgunlaşma aşamalarını etkileyerek hipokalsifikasyon yaratabilirler. Aşağıdaki hastalıklardan hangisinin dentisyon üzerinde hipokalsifikasyon yapıcı bir sekonder etkisi **yoktur**?
Doğru Şık (B): Osteoporozis
Açıklama: Diş dokuları bir kez mineralize olduktan sonra (özellikle mine ve dentin) kemik gibi kalsiyum deposu olarak dolaşıma geri katılmazlar. Rikets, hipofosfatemi, hipofosfatazya, renal osteodistrofi ve osteopetrozis dişlerin GELİŞİM aşamasında kalsiyum/fosfor dengesini bozarak zayıf mineralize (hipokalsifiye/hipoplazik) dişler oluştururlar. Osteoporozis ise yaşlılık/menopoz sonrasında (dişler çoktan oluştuktan sonra) var olan kemiği eritir, dolayısıyla diş anatomisinde hipokalsifikasyon yapmaz.

---

### ÇİFT 361 (Benzerlik: 0.70)

**Soru 1 (ID: 9efe2381-274f-4afd-b00e-dc8e5ff58124)**
Soru Kökü: Tablo 14 referans alındığında, rikets hastalarının diş gelişimi sürecinde inorganik fosfat ve kalsiyum homeostazisinin bozulması nedeniyle izlenen erüpsiyon paterni aşağıdakilerden hangisidir?
Doğru Şık (E): Gecikmiş sürme
Açıklama: Dişlerin sürme prosesi için sağlam bir kök ucu gelişimine ve etrafındaki kemik rezorpsiyon/depozisyon aktivitesinin düzenli işlemesine ihtiyaç vardır. Riketste kalsiyum mekanizması arızalı olduğundan dişlerin folikül çevresindeki kemik remodeling'i aksar ve diş gelişimi yavaşlayarak sürmede ciddi gecikme (Tablo 14) ortaya çıkar.

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 362 (Benzerlik: 0.70)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 363 (Benzerlik: 0.70)

**Soru 1 (ID: 052c5d00-1470-40f0-84e7-17e42efe51c9)**
Soru Kökü: Aşağıdaki sistemik endokrin bozuklukların hangisinde kafatası süturlarında aksesuar kemik üretimi (Wormian kemik), kısa diş kökleri ve lamina durada kalınlaşma bulguları karakteristik olarak bir arada izlenir?
Doğru Şık (C): Hipotiroidizm
Açıklama: Hipotiroidizm hastalarında kafa kaidesinde kısalma, süturlarda Wormian kemik oluşumu, diş köklerinin kısa kalması ve lamina duranın kalınlaşması tipik radyolojik triadı oluşturur. Cushing veya hiperparatiroidizmde kemik ve kortikal sınırlarda incelme veya granüler kemik izlenirken, tiroid yetmezliğinde kemik yapım-yıkım döngüsünün yavaşlamasına bağlı sklerotik kalınlaşmalar görülür. Sürme gecikmesi ile bu tablo periapikal dokularda kalınlaşmış bir sınır yaratır.

**Soru 2 (ID: 74f4591d-00fe-4028-ab6b-71064d6a28af)**
Soru Kökü: Dişlerde eksternal kök rezorpsiyonu, daimi dişlerin sürmesinde gecikme ve kısa kök gelişimi ile karakterize olan, kafa tabanında ossifikasyon gecikmesinin eşlik ettiği endokrin anomali aşağıdakilerden hangisidir?
Doğru Şık (C): Hipotiroidizm
Açıklama: Hipotiroidizm (kretinizm/miksödem), tiroid hormonlarının yetersizliğine bağlı olarak bazal metabolizma hızının düştüğü ve dişlerde eksternal kök rezorpsiyonları, kısa kökler ile sürme gecikmelerinin izlendiği tablodur. Hipertiroidizm çeldiricisi yanlıştır çünkü bu patolojide metabolizma hızı artar, diş sürmesi hızlanır ve süt dişlerinde erken rezorpsiyon görülür. Lamina durada kalınlaşma ve makroglossi, hipotiroidizmin oral kavitedeki diğer spesifik yansımalarıdır.

---

### ÇİFT 364 (Benzerlik: 0.70)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 365 (Benzerlik: 0.70)

**Soru 1 (ID: 1456820c-8ab3-427b-9f96-40c449a45043)**
Soru Kökü: Aşağıdaki sistemik hastalıkların hangisinde generalize kemik dansitesinde azalma yerine radyografik olarak karakteristik bir kemik opasitesi artışı ve kortikal sınırların belirsizleşmesi izlenir?
Doğru Şık (A): Osteopetrozis
Açıklama: Osteopetrozis, osteoklastların fonksiyon bozukluğuna bağlı olarak kemik rezorpsiyonunun durması ve tüm kemiklerde dansite artışıyla (opasite) karakterize bir hastalıktır. Diğer şıklardaki hastalıkların tamamı kemik rezorpsiyonunda artış, kalsifikasyon defekti veya mineralizasyon bozukluğu yaratarak kemik dansitesinde azalmaya (radyolüsensi) neden olur. Bu durum osteopetrozisi metabolik kemik hastalıkları arasında radyografik olarak spesifik ve tamamen zıt bir konuma yerleştirir.

**Soru 2 (ID: 59c6c28a-81b8-41b8-bf8a-c1d6fb8f2c17)**
Soru Kökü: Dişleri çevreleyen alveolar kemiğin lamina dura tabakası, sistemik metabolik hastalıkların teşhisinde önemli bir radyografik indikatördür. Aşağıdaki hastalıkların hangisinde lamina dura kalınlığında bir azalma (incelme veya tamamen kaybolma) görülmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis (Mermer kemik hastalığı)
Açıklama: Hiperparatiroidizm (osteoklast aktivitesi), osteoporoz, rikets, osteomalazi ve renal osteodistrofi gibi hastalıkların tümünde kemik mineral kütlesinde kayıp meydana geldiğinden lamina durada belirginlik kaybı veya incelme görülür. Osteopetrozis ise kemik rezorpsiyonunun bloke olduğu ve kemik yapımının masif şekilde arttığı mermer kemik hastalığıdır. Bu nedenle osteopetroziste lamina durada incelme değil, aksine kalınlaşma ve sklerotik bir yoğunluk artışı beklenir.

---

### ÇİFT 366 (Benzerlik: 0.70)

**Soru 1 (ID: 014d4be8-7e84-44c0-9a36-d786e916ea79)**
Soru Kökü: Sekiz yaşındaki çocuk hastanın ailesi, çocuğun daimi dişlerinin bir türlü süremediğini ve süt dişlerinin halen düşmediğini ifade etmektedir. Hekim tarafından yapılan muayenede çocuğun dudaklarının oldukça kalın, dilinin normalden büyük (makroglossi) olduğu; cildinin dokunulduğunda hamursu bir kıvama sahip olduğu fark edilmiştir. Diş radyografilerinde daimi diş sürmelerinde gecikme ve eksternal kök rezorpsiyonları saptanan bu hastada en olası medikal tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Hipotiroidizm (Kretinizm)
Açıklama: Süt dişlerinin düşmesinde ve daimi diş sürmesinde gecikme, hamursu cilt, kalın dudaklar ve makroglossi kombinasyonu, çocukluk çağı tiroid yetmezliği olan kretinizm (hipotiroidizm) tablosu ile tamamen uyumludur. Rikets ve hipofosfatazyada da sürme gecikmesi görülebilir ancak onlarda eklem şişlikleri, bacak eğrilikleri veya erken diş kaybı (süt kesiciler) ön plandadır. Ciltteki hamursu kıvam ve dil büyümesi miksödematöz infiltrasyona (mukopolisakkarid birikimi) işaret eder.

**Soru 2 (ID: a952697a-996c-4390-853d-5046a900e009)**
Soru Kökü: Dört yaşındaki kız çocuğu, ağız içinde travma veya çürük olmaksızın süt ön dişlerinin çevresinde tekrarlayan periapikal ve periodontal apseler nedeniyle kliniğe getirilmiştir. Radyografide mine tabakasının belirgin ince olduğu, pulpa odalarının normalden geniş olduğu ve lamina duranın seyrelmiş olduğu izlenmiştir. Bu klinik tablo aşağıdaki sistemik sendromlardan hangisi için **en tipiktir**?
Doğru Şık (B): D vitamini dirençli rikets (Hipofosfatemi)
Açıklama: Hipofosfatemik rikets (D vitamini dirençli rikets) hastalarında dentin mineralizasyonu zayıftır ve dev pulpa odaları minenin hemen altına kadar uzanır; mikroskobik çatlaklardan giren oral bakteriler diş çürüğü olmaksızın spontan periapikal ve periodontal apselere neden olur. Osteopetroziste mine kalsifikasyonu zayıftır ama kanal anomalileri farklıdır, orak hücrelide asemptomatik nekroz vardır, diyabette periodontal apse olabilir ama mine incesi/dev pulpa sendromik bulgusu yoktur.

---

### ÇİFT 367 (Benzerlik: 0.70)

**Soru 1 (ID: 9efe2381-274f-4afd-b00e-dc8e5ff58124)**
Soru Kökü: Tablo 14 referans alındığında, rikets hastalarının diş gelişimi sürecinde inorganik fosfat ve kalsiyum homeostazisinin bozulması nedeniyle izlenen erüpsiyon paterni aşağıdakilerden hangisidir?
Doğru Şık (E): Gecikmiş sürme
Açıklama: Dişlerin sürme prosesi için sağlam bir kök ucu gelişimine ve etrafındaki kemik rezorpsiyon/depozisyon aktivitesinin düzenli işlemesine ihtiyaç vardır. Riketste kalsiyum mekanizması arızalı olduğundan dişlerin folikül çevresindeki kemik remodeling'i aksar ve diş gelişimi yavaşlayarak sürmede ciddi gecikme (Tablo 14) ortaya çıkar.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 368 (Benzerlik: 0.70)

**Soru 1 (ID: 88ca3933-d7be-4dd4-b75c-8ca4b691c28a)**
Soru Kökü: Mermer kemik hastalığı (Osteopetrozis) olan bir hastada radyografik olarak kemik yoğunluğundaki generalize artışa rağmen dişlerin yapısal özellikleri incelendiğinde, kalsifikasyon süreci ile ilgili aşağıdakilerden hangisi görülür?
Doğru Şık (C): Dişlerde zayıf kalsifikasyon (hipokalsifikasyon)
Açıklama: Osteopetroziste (mermer kemik hastalığı) osteoklastik yetmezliğe bağlı kemik yoğunluğu dramatik olarak artsa da, oluşan doku fizyolojik olarak işlevsizdir ve dişlerde kalsifikasyon zayıftır (hipokalsifikasyon görülür). Hiperkalsifiye mine bu sistemik defektte beklenmez, zira kemik dansitesi artarken diş sert doku kalitesi düşüktür. Bu paradoksal durum dişleri çürüğe yatkın hale getirir ve şiddetli osteomiyelit riskini artırır.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 369 (Benzerlik: 0.70)

**Soru 1 (ID: 74fc207f-f136-4261-97a0-00b6cb22984e)**
Soru Kökü: Tablo 14'te belirtilen sistemik hastalıkların dental bulguları karşılaştırıldığında, hipokalsifikasyon görülmesine rağmen diş hipoplazisi gelişiminin **en az olası** (nadir) olduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis hastalarında zayıf kalsifikasyon (hipokalsifikasyon) yaygın görülmesine karşın, ameloblast veya odontoblast matriks sekresyonunun çökmesiyle oluşan belirgin diş hipoplazisi 'nadir' olarak izlenir. Hipofosfatazya ve rikets hastalarında hem hipokalsifikasyon hem de hipoplazi birlikte sık görülürken, osteopetroziste sert doku hacminden çok mineral yoğunluğu hedeflenir. Diş anatomik formu korunsa da doku kalitesi oldukça zayıftır.

**Soru 2 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

---

### ÇİFT 370 (Benzerlik: 0.70)

**Soru 1 (ID: 6ab57baf-8629-4766-8ffb-3e6b82d6464a)**
Soru Kökü: Osteopetrozis tanılı hastalarda diş çürüğüne karşı olan yüksek yatkınlık ve alveoler kemiğin avasküler yapısına bağlı sıkça gelişen lokal komplikasyonlar sonucunda aşağıdakilerden hangisinin görülmesi Tablo 14'e göre karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Osteopetrozisli hastalarda zayıf kalsifikasyona (hipokalsifikasyon) bağlı artan agresif çürükler ve kalınlaşmış, zayıf kanlanan kemikte kolayca yayılan şiddetli osteomiyelit tabloları erken diş kayıplarıyla sonuçlanır. Dişlerde ankiloz veya kalıcılık değil, enfeksiyonlara ve cerrahi komplikasyonlara sekonder mecburi çekimler/kayıplar ön plandadır. Tedavisi zor olan bu çene enfeksiyonları sıklıkla hiperbarik oksijen ve agresif antibiyotik desteği gerektirir.

**Soru 2 (ID: 88ca3933-d7be-4dd4-b75c-8ca4b691c28a)**
Soru Kökü: Mermer kemik hastalığı (Osteopetrozis) olan bir hastada radyografik olarak kemik yoğunluğundaki generalize artışa rağmen dişlerin yapısal özellikleri incelendiğinde, kalsifikasyon süreci ile ilgili aşağıdakilerden hangisi görülür?
Doğru Şık (C): Dişlerde zayıf kalsifikasyon (hipokalsifikasyon)
Açıklama: Osteopetroziste (mermer kemik hastalığı) osteoklastik yetmezliğe bağlı kemik yoğunluğu dramatik olarak artsa da, oluşan doku fizyolojik olarak işlevsizdir ve dişlerde kalsifikasyon zayıftır (hipokalsifikasyon görülür). Hiperkalsifiye mine bu sistemik defektte beklenmez, zira kemik dansitesi artarken diş sert doku kalitesi düşüktür. Bu paradoksal durum dişleri çürüğe yatkın hale getirir ve şiddetli osteomiyelit riskini artırır.

---

### ÇİFT 371 (Benzerlik: 0.70)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: 81e10db3-3afd-49c4-9f96-1a0aa5aa6678)**
Soru Kökü: Osteopetrozis sendromunda, generalize kemik yoğunluğu artışı ve osteoklast disfonksiyonu nedeniyle kemiklerin sürekli yapılıp yıkılamaması tablosu mevcuttur. Tablo 14 verilerine dayanarak, bu histopatolojik kemik yapısının diş sürmesi süreci üzerindeki majör klinik etkisi aşağıdakilerden hangisidir?
Doğru Şık (E): Diş sürmesinde gecikme
Açıklama: Osteopetrozis hastalığında anormal artmış kemik dansitesi ve osteoklastların rezorpsiyon yapamaması, diş folikülünün sürme sırasında kemik içinde kendine yol açmasını engelleyerek diş sürmesinde belirgin gecikmeye neden olur. Prematür veya hızlanmış diş sürmesi hipertiroidizm gibi metabolizmanın çok hızlandığı durumlarda görülür. Bu rezorpsiyon güçlüğü, diş gömüklüğü riskini artırmakla beraber kök/kanal malformasyonlarına da zemin hazırlar.

---

### ÇİFT 372 (Benzerlik: 0.70)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: 4d893071-77ae-4f58-ae9d-f9402266cca9)**
Soru Kökü: Metabolik kemik hastalıklarına sahip iki farklı çocuk hastadan birincisinde 'süt kesici dişlerinin kök rezorpsiyonu olmaksızın spontan erken dökülmesi', ikincisinde ise 'sağlam (çürüksüz) dişlerde genişlemiş pulpa boynuzlarına bağlı spontan periapikal apseler' saptanmıştır. Bu klinik senaryolara göre, birinci ve ikinci hastanın en olası ayırıcı tanıları sırasıyla aşağıdakilerden hangisidir?
Doğru Şık (B): Hipofosfatazya - Hipofosfatemi
Açıklama: Süt dişlerinin travma veya fizyolojik kök rezorpsiyonu olmaksızın erken dökülmesi (özellikle kesiciler), alkalen fosfataz eksikliği ile seyreden hipofosfatazya sendromunun pathognomonik majör bulgusudur. Buna karşın dişlerin pulpa boynuzlarının mine-dentin sınırına kadar uzanarak çürük olmaksızın mikroorganizma invazyonuna (spontan periapikal apseler) yol açması, D vitamini dirençli rikets olan hipofosfatemi hastalığının en belirgin ayırıcı komplikasyonudur.

---

### ÇİFT 373 (Benzerlik: 0.70)

**Soru 1 (ID: 6ab57baf-8629-4766-8ffb-3e6b82d6464a)**
Soru Kökü: Osteopetrozis tanılı hastalarda diş çürüğüne karşı olan yüksek yatkınlık ve alveoler kemiğin avasküler yapısına bağlı sıkça gelişen lokal komplikasyonlar sonucunda aşağıdakilerden hangisinin görülmesi Tablo 14'e göre karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Osteopetrozisli hastalarda zayıf kalsifikasyona (hipokalsifikasyon) bağlı artan agresif çürükler ve kalınlaşmış, zayıf kanlanan kemikte kolayca yayılan şiddetli osteomiyelit tabloları erken diş kayıplarıyla sonuçlanır. Dişlerde ankiloz veya kalıcılık değil, enfeksiyonlara ve cerrahi komplikasyonlara sekonder mecburi çekimler/kayıplar ön plandadır. Tedavisi zor olan bu çene enfeksiyonları sıklıkla hiperbarik oksijen ve agresif antibiyotik desteği gerektirir.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 374 (Benzerlik: 0.70)

**Soru 1 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

**Soru 2 (ID: 8701eff8-8631-43bd-8c29-17817717b732)**
Soru Kökü: Dört yaşında kız çocuk, ön süt dişlerini herhangi bir travma olmaksızın erken kaybetmesi üzerine getiriliyor. Panoramik radyografisinde dişlerin kök kanallarının belirgin şekilde büyük olduğu (kabuk diş görünümü) ve alveolar kortikal sınırların belirsizleştiği tespit ediliyor. Hipofosfatazya ön tanısı konan bu olguda, pulpa kalsifikasyon defekti radyografik olarak Tablo 14'e göre nasıl yansımaktadır?
Doğru Şık (D): Genişlemiş pulpa odası ve kanalları
Açıklama: Hipofosfatazya'da temel sorun ortofosfatlardan inorganik fosfat salınımının olmamasıdır. Bu nedenle dentinogenezis esnasında ikincil kalsifikasyonlar gerçekleşemez. Tablo 14'te spesifik olarak "Genişlemiş pulpa odası: Evet" şeklinde belirtilmiştir. Pulpa odası ve kanalları fizyolojik olarak daralamaz ve diş kesitleri incedir.

---

### ÇİFT 375 (Benzerlik: 0.70)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

---

### ÇİFT 376 (Benzerlik: 0.70)

**Soru 1 (ID: 1aa81d8f-b7c9-4746-a6c1-d411124d8b94)**
Soru Kökü: Diabetes mellitus hastalarında kronikleşmiş hiperglisemi ve beraberinde gelişen metabolik asidozun immün sistem hücreleri üzerindeki **en belirgin** etkisi aşağıdakilerden hangisidir?
Doğru Şık (B): Hem nötrofil hem monosit fonksiyonlarında bozulma
Açıklama: Kronik hiperglisemi ve asidoz tablosu, lökositlerin kemotaksis ve fagositoz yeteneklerini suprese ederek hem nötrofil hem de monosit fonksiyonlarında eş zamanlı bozulmaya neden olur. İltihabi yanıtta artış ve hızlanma çeldiricisi yanlıştır, tam tersine iltihabi yanıt bozulur ve yara iyileşmesi gecikir. Bu hücresel yetmezlik hastaları periodontal hastalıklara ve fırsatçı enfeksiyonlara son derece açık hale getirir.

**Soru 2 (ID: 6ab10a67-ce32-4e28-adfb-b1110e2d5ab6)**
Soru Kökü: Yaygın periodontal apse şikayetiyle kliniğe başvuran 28 yaşındaki kontrolsüz diyabet hastasının genel durumunun letarjik olduğu ve nefesinde belirgin bir aseton kokusu bulunduğu fark edilmiştir. Şiddetli diyabet komplikasyonu (ketoasidoz) geçiren bu hastada, söz konusu tabloya eşlik etmesi **en az olası** hücresel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Hücresel immünitenin hiperaktif hale gelmesi
Açıklama: Diyabetik hastalarda kronik hiperglisemi ve metabolik asidoz, hücresel immüniteyi hiperaktif hale getirmez; aksine baskılayarak bozar. Nötrofil ve monosit fonksiyonlarında bozulma çeldiricisi hastada görülmesi kesin olan bir patolojidir ve hastanın periodontal apse geliştirmesinin temel nedenidir. Şiddetli asidoz durumunda izlenen nefes ve idrardaki aseton kokusu, yağ metabolizmasının son ürünü olan keton cisimciklerinin birikimini gösterir.

---

### ÇİFT 377 (Benzerlik: 0.70)

**Soru 1 (ID: 9ba1ae4e-85db-470e-912b-52a08b9c3cf4)**
Soru Kökü: Endokrin sistem hastalıklarında dişlerde görülen genel gelişimsel ve radyografik anormallikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (B): Mine insizal kenarlarında aşırı atrisyon
Açıklama: Endokrin hastalıklarda sürmede hızlanma veya gecikme, hipoplazi, hipokalsifikasyon ve lamina dura belirginliğinin kaybı görülür. Aşınma (atrisyon) lokal faktörlere bağlı mekanik bir kayıptır ve endokrin sistemin doğrudan bir bulgusu olarak belirtilmez.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 378 (Benzerlik: 0.70)

**Soru 1 (ID: ba7868fa-9937-4994-88d9-c4cc90b9216a)**
Soru Kökü: Tablo 13 referans alındığında, çene kemiklerinde genel olarak kemik dansitesi azalmasına rağmen 'nadiren artma' (osteoskleroz) bulgusunun da raporlanabildiği sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Renal osteodistrofi
Açıklama: Renal osteodistrofi kompleks bir metabolik hastalıktır ve fasiyal kemiklerde 'tuz-biber' görüntüsü yaratan osteolitik ve osteosklerotik bölgeleri aynı anda barındırabilir. Bu nedenle Tablo 13'te kemik dansitesinin temel olarak azaldığı ancak 'nadiren arttığı' belirtilir. Osteoporoz ve Cushing sendromunda ise sadece dansite azalması mevcuttur, osteosklerotik odak görülmez.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 379 (Benzerlik: 0.70)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: 9efe2381-274f-4afd-b00e-dc8e5ff58124)**
Soru Kökü: Tablo 14 referans alındığında, rikets hastalarının diş gelişimi sürecinde inorganik fosfat ve kalsiyum homeostazisinin bozulması nedeniyle izlenen erüpsiyon paterni aşağıdakilerden hangisidir?
Doğru Şık (E): Gecikmiş sürme
Açıklama: Dişlerin sürme prosesi için sağlam bir kök ucu gelişimine ve etrafındaki kemik rezorpsiyon/depozisyon aktivitesinin düzenli işlemesine ihtiyaç vardır. Riketste kalsiyum mekanizması arızalı olduğundan dişlerin folikül çevresindeki kemik remodeling'i aksar ve diş gelişimi yavaşlayarak sürmede ciddi gecikme (Tablo 14) ortaya çıkar.

---

### ÇİFT 380 (Benzerlik: 0.70)

**Soru 1 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

**Soru 2 (ID: c664831f-4b3c-4198-81c7-06f3f2b34f9d)**
Soru Kökü: Bebeklik döneminde D vitamini eksikliği, kafatasında kraniyo-tabes ve bacaklarda O şeklinde deformite hikayesi olan raşitizm (Rickets) hastasında, çene kemik dansitesinde hangi radyografik değişim beklenir?
Doğru Şık (D): Dansitede azalma
Açıklama: Rikets tablosunda aktif D vitamini eksikliğine bağlı kalsiyum absorbsiyon defekti yaşanır; bu da osteoid dokunun mineralize olamamasına ve generalize kemik dansitesinde azalmaya neden olur. Radyografide bu durum kansellöz kemikte lüsensi ve kortikal yapılarda incelme olarak izlenir. Opasite veya sement dansitesinde artış kalsifikasyon defekti olan bu tabloda fizyolojik olarak imkansızdır.

---

### ÇİFT 381 (Benzerlik: 0.70)

**Soru 1 (ID: 7981b751-0fde-4ef7-aeaf-821069a2e020)**
Soru Kökü: Osteoporoz hastalarının radyografik muayenesinde, kemik formasyonundaki azalmaya ikincil olarak trabekül yapısında Tablo 13'e göre hangi değişim saptanır?
Doğru Şık (C): Trabekül sayısında azalma
Açıklama: Osteoporozda trabeküler kemik hacmindeki kayıp, radyografik olarak trabekül sayısında, boyutunda ve kalınlığında azalma olarak yansır. Osteoporozda trabeküller incelir ve seyrekleşir ancak hiperparatiroidizm veya Cushing sendromunda izlenen karakteristik granüler yapı oluşmaz. Mozaik patern ise Paget hastalığına ait histolojik bir bulgudur.

**Soru 2 (ID: f715bc84-6315-4484-8b4b-e924a7553871)**
Soru Kökü: Tablo 13'te belirtilen sistemik hastalıkların kemik trabekül yapısı ve dansitesine etkileri incelendiğinde; Hiperparatiroidizm, Osteoporozis ve Talasemi hastalıklarının tümünün çene kemiklerinde oluşturduğu ortak radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik dansitesinde azalma
Açıklama: Hiperparatiroidizmde kalsiyum kaybı (Brown tümörleri), osteoporoziste kütlesel yetersizlik, talasemide ise kemik iliği hiperplazisi nedeniyle bu üç hastalığın ortak radyografik bulgusu Tablo 13'te "Dansite: Azalır" şeklinde raporlanmıştır. Oysa boyut artışı sadece talasemi (üst çenede) gibi sekonder hiperplazilerde varken diğerlerinde (osteoporoz) çene boyutu artmaz.

---

### ÇİFT 382 (Benzerlik: 0.70)

**Soru 1 (ID: 37ab31f8-0c4f-468a-935b-c442b1aef90d)**
Soru Kökü: Altmış beş yaşında kadın hasta, sistemik metabolik kemik hastalığı tedavisi kapsamında uzun süredir bifosfonat grubu ilaç kullandığını belirtiyor. Radyografik muayenesinde mandibula inferior korteksinde incelme saptanan bu hastada, olası bir diş çekimi veya cerrahi müdahale sonrasında çene kemiklerinde görülmesinden en çok endişe edilen istenmeyen yan etki aşağıdakilerden hangisidir?
Doğru Şık (C): Çene kemiklerinde ilaca bağlı osteonekroz gelişimi
Açıklama: Osteoporoz, kemik kütlesindeki azalma ile karakterize olup mandibula inferior korteksinde incelme yapar ve bu hastaların tedavisinde sıklıkla bifosfonat grubu ajanlar reçete edilir. Bifosfonat türevi ilaçlar osteoklast fonksiyonunu güçlü biçimde inhibe ederek kemik döngüsünü durdururlar; bu durum diş çekimi gibi bir travma sonrası çene kemiklerinde yara iyileşmesinin durmasına ve tıpta 'Bifosfonata Bağlı Çene Osteonekrozu' (MRONJ) olarak bilinen şiddetli yan etkiye neden olur.

**Soru 2 (ID: e74ce7c8-1743-4832-9b3d-292ba934b08f)**
Soru Kökü: Postmenopozal dönemdeki bir kadın hasta, minör bir travma sonrası gelişen mandibula fraktürüyle kliniğe başvuruyor. Panoramik radyografide inferior mandibular kortekste belirgin incelme saptanıyor. Biyopsi sonucu kemiğin mikroskobik/histolojik yapısının normal olduğu ancak toplam kemik kütlesinin azaldığı rapor edildiğine göre, bu patolojinin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik yapım ve yıkım döngüsündeki hücresel dengesizlik
Açıklama: Osteoporoz, kemik organik matriksinin (histolojik yapısının) normal olduğu, ancak osteoblastik yapım ile osteoklastik yıkım arasındaki dengenin yıkım lehine bozulmasıyla kemik kütlesinin jeneralize azaldığı durumdur. D vitamini eksikliği çeldiricisi yanlıştır çünkü D vitamini eksikliğinde histolojik yapı normal kalmaz, matriks kalsifiye olamadığı için defektif (osteoid) doku birikir (osteomalazi/rikets). Mandibular kortikal incelme bu hastalarda en önemli radyografik göstergelerden biridir.

---

### ÇİFT 383 (Benzerlik: 0.70)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: 59c6c28a-81b8-41b8-bf8a-c1d6fb8f2c17)**
Soru Kökü: Dişleri çevreleyen alveolar kemiğin lamina dura tabakası, sistemik metabolik hastalıkların teşhisinde önemli bir radyografik indikatördür. Aşağıdaki hastalıkların hangisinde lamina dura kalınlığında bir azalma (incelme veya tamamen kaybolma) görülmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis (Mermer kemik hastalığı)
Açıklama: Hiperparatiroidizm (osteoklast aktivitesi), osteoporoz, rikets, osteomalazi ve renal osteodistrofi gibi hastalıkların tümünde kemik mineral kütlesinde kayıp meydana geldiğinden lamina durada belirginlik kaybı veya incelme görülür. Osteopetrozis ise kemik rezorpsiyonunun bloke olduğu ve kemik yapımının masif şekilde arttığı mermer kemik hastalığıdır. Bu nedenle osteopetroziste lamina durada incelme değil, aksine kalınlaşma ve sklerotik bir yoğunluk artışı beklenir.

---

### ÇİFT 384 (Benzerlik: 0.70)

**Soru 1 (ID: a96b75db-3c04-4fe2-b514-7a777a1d8834)**
Soru Kökü: Erken yaşta hipoparatiroidizm geçiren bir hastada kalsiyum metabolizmasındaki uzun süreli yetersizliğin direkt bir sonucu olarak dental gelişimde gözlenen komplikasyonlar arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (C): Lamina dura sınırlarında radyografik kalınlaşma
Açıklama: Hipoparatiroidizm dental kalsifikasyonu bozar, hastalarda mine hipoplazisi, kök rezorpsiyonu, gelişim anomalileri (kök dilaserasyonu) ve sürme gecikmesi meydana gelir. Lamina durada kalınlaşma daha ziyade kemik yapımının arttığı hastalıkların (osteopetrozis vb.) veya osteoartrit/travma gibi bölgesel stimülasyonların bulgusudur.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 385 (Benzerlik: 0.70)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: 74fc207f-f136-4261-97a0-00b6cb22984e)**
Soru Kökü: Tablo 14'te belirtilen sistemik hastalıkların dental bulguları karşılaştırıldığında, hipokalsifikasyon görülmesine rağmen diş hipoplazisi gelişiminin **en az olası** (nadir) olduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis hastalarında zayıf kalsifikasyon (hipokalsifikasyon) yaygın görülmesine karşın, ameloblast veya odontoblast matriks sekresyonunun çökmesiyle oluşan belirgin diş hipoplazisi 'nadir' olarak izlenir. Hipofosfatazya ve rikets hastalarında hem hipokalsifikasyon hem de hipoplazi birlikte sık görülürken, osteopetroziste sert doku hacminden çok mineral yoğunluğu hedeflenir. Diş anatomik formu korunsa da doku kalitesi oldukça zayıftır.

---

### ÇİFT 386 (Benzerlik: 0.70)

**Soru 1 (ID: 74fc207f-f136-4261-97a0-00b6cb22984e)**
Soru Kökü: Tablo 14'te belirtilen sistemik hastalıkların dental bulguları karşılaştırıldığında, hipokalsifikasyon görülmesine rağmen diş hipoplazisi gelişiminin **en az olası** (nadir) olduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis hastalarında zayıf kalsifikasyon (hipokalsifikasyon) yaygın görülmesine karşın, ameloblast veya odontoblast matriks sekresyonunun çökmesiyle oluşan belirgin diş hipoplazisi 'nadir' olarak izlenir. Hipofosfatazya ve rikets hastalarında hem hipokalsifikasyon hem de hipoplazi birlikte sık görülürken, osteopetroziste sert doku hacminden çok mineral yoğunluğu hedeflenir. Diş anatomik formu korunsa da doku kalitesi oldukça zayıftır.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 387 (Benzerlik: 0.70)

**Soru 1 (ID: 54a3f445-3015-4469-a341-6d2b9ae2b23f)**
Soru Kökü: 42 yaşında kadın hasta, aydede yüzü ve gövdesel obezite klinik tablosu sergilemektedir. Ekzojen kortikosteroid kullanımına bağlı Cushing sendromu gelişen bu hastanın panoramik radyografisinde kemik dansitesinde beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Dansitede azalma
Açıklama: Cushing sendromunda yüksek glukokortikoid seviyesi osteoblastik aktiviteyi baskılar ve direkt/dolaylı yoldan osteoklastik aktiviteyi artırarak net kemik kütlesinde (dansitede) azalmaya neden olur. Bu kayıp, generalize osteoporozis tablosuna ve patolojik kırıklara zemin hazırlar. Opasite artışı veya pamuk yumağı görünümü gibi anabolik kemik patolojileri glukokortikoid fazlalığında kesinlikle beklenmez.

**Soru 2 (ID: 5afe8456-815f-472d-b09a-7b3a506f1458)**
Soru Kökü: Kırk beş yaşında kadın hasta, yaygın kemik ağrısı ve kas zayıflığı şikayetiyle başvuruyor. Yürüyüşünün paytak (penguen yürüyüşü) tarzında olduğu gözlemleniyor. Panoramik radyografisinde mandibula angulus bölgesinde psödofraktür ile uyumlu radyolüsent bantlar saptanıyor. Bu hastadaki semptomların temelinde yatan patolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Aktif D vitamini metabolitinin yetersizliğine bağlı mineralizasyon defekti
Açıklama: Yetişkinlerde görülen osteomalazi tablosu, aktif D vitamini metabolitinin yetersizliğine bağlı kalsiyum emilim azlığı ve osteoid mineralizasyonunun bozulması ile karakterizedir. 'Penguen yürüyüşü' ve radyografideki psödofraktürler (Looser zonları) osteomalazinin patognomonik klinik yansımalarıdır. Paratiroid adenomu hiperparatiroidizme neden olarak Brown tümörleri yaparken, osteomalazideki temel sorun aşırı rezorpsiyon değil yetersiz mineralizasyondur.

---

### ÇİFT 388 (Benzerlik: 0.70)

**Soru 1 (ID: 7b844ee2-be3e-44df-9d8d-a8561b19a062)**
Soru Kökü: Kalsiyum ve fosfat metabolizmasındaki bozukluğa bağlı olarak nöromüsküler eksitabilitede artış (tetani) görülen hipoparatiroidizm hastalarının dental ve radyografik bulguları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Prematür (erken) diş sürmesi
Açıklama: Hipoparatiroidizmde kalsiyum düşüklüğüne bağlı olarak kalsifikasyon süreçleri yavaşlar; bu nedenle mine hipoplazisi ve diş sürmesinde gecikme görülür, prematür (erken) sürme izlenmez (Tablo 14). Erken diş sürmesi tam aksine hipertiroidizm veya Cushing sendromu gibi tiroid hormonları ya da glukokortikoid seviyelerinin artışıyla metabolizmanın hızlandığı sistemik tablolarda izlenir.

**Soru 2 (ID: bad1ffc3-a183-480f-a8ec-199aca44342c)**
Soru Kökü: Yetişkinlerde kemiklerde yumuşama, kas zayıflığı ve pseudofraktürlerle karakterize osteomalazya hastalarının (Tablo 14) çene kemiği radyografik bulgularıyla ilgili olarak aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (D): Tablo 14'e göre uzun vadede tam ve kesin bir diş kaybı beklenir.
Açıklama: Osteomalazya yetişkinlikte ortaya çıktığı için dişlerin kalsifikasyon dönemi bitmiştir (mine hipoplazisi olmaz). Kortikal incelme ve lamina dura zayıflığı (Tablo 14: İncelmiş) görülse de, Tablo 14'te osteomalazya için "Diş kaybı" sütununda açıkça "Hayır" yazmaktadır. Alveol kemiği zayıflasa bile doğrudan bir diş dökülme sendromu osteomalazyaya atfedilmez.

---

### ÇİFT 389 (Benzerlik: 0.69)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: ed6dafe3-0b96-4d2c-8ba1-3f62e2bb18f7)**
Soru Kökü: Hipofosfatemi (D vitamini dirençli rikets) sendromunda kemik bulgularının yanı sıra dişlerin gelişim süreci de etkilenmektedir. Bu hastalarda sert doku oluşum eksikliğini yansıtan hangi klinik bulgu Tablo 14'e göre izlenir?
Doğru Şık (B): Diş hipoplazisi
Açıklama: Hipofosfatemik rikets hastalarında yetersiz sistemik fosfor seviyesi, dentin ve mine yapımından sorumlu hücrelerin işlevini bozarak belirgin diş hipoplazisi oluşturur. Amelogenezis imperfekta spesifik genetik bir defekt iken, buradaki hipoplazi sistemik metabolik kalsiyum-fosfat dengesizliğine bağlı gelişir. Gelişimsel olarak zayıf kalan bu dişler sıklıkla enfeksiyona yatkındır ve periapikal patoloji riski taşır.

---

### ÇİFT 390 (Benzerlik: 0.69)

**Soru 1 (ID: 4ca9770b-990b-4ccb-ad85-27f9cde02782)**
Soru Kökü: 7 yaşındaki çocuk hasta; yürümede paytaklık, diz eklemlerinde şişlik ve yeni süren dişlerinde yaygın renklenmeler ve çukurcuklar şikayetiyle başvurmuştur. Radyografik incelemede mandibular kortikal sınırlarda incelme, lamina durada silikleşme ve diş foliküllerinin kortikal sınırlarında kaybolma izlenmiştir. Aktif 1,25 (OH)2 D vitamini üretimindeki eksikliğe bağlı geliştiği bilinen bu tabloda, dişlerin kronlarında gözlenen yapısal bozukluğun en olası sebebi aşağıdakilerden hangisidir?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Rikets olgularında sistemik kalsiyum sirkülasyonundaki yetersizlik, diş gelişim dönemindeki ameloblastların fonksiyonunu bozarak çevresel faktörlü bir formasyon defekti olan mine hipoplazisine ve dişlerin çürüğe yatkın hale gelmesine yol açar. Amelogenezis imperfekta çeldiricisi yanlıştır; zira bu durum sistemik bir kalsiyum eksikliğinden ziyade lokalize genetik bir protein sentez bozukluğudur ve iskeletsel paytak yürüme/şişlik bulguları içermez. Riketsli çocuklarda süt ve daimi dişlerin sürme zamanlarında da spesifik gecikmeler gözlenir.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 391 (Benzerlik: 0.69)

**Soru 1 (ID: 052c5d00-1470-40f0-84e7-17e42efe51c9)**
Soru Kökü: Aşağıdaki sistemik endokrin bozuklukların hangisinde kafatası süturlarında aksesuar kemik üretimi (Wormian kemik), kısa diş kökleri ve lamina durada kalınlaşma bulguları karakteristik olarak bir arada izlenir?
Doğru Şık (C): Hipotiroidizm
Açıklama: Hipotiroidizm hastalarında kafa kaidesinde kısalma, süturlarda Wormian kemik oluşumu, diş köklerinin kısa kalması ve lamina duranın kalınlaşması tipik radyolojik triadı oluşturur. Cushing veya hiperparatiroidizmde kemik ve kortikal sınırlarda incelme veya granüler kemik izlenirken, tiroid yetmezliğinde kemik yapım-yıkım döngüsünün yavaşlamasına bağlı sklerotik kalınlaşmalar görülür. Sürme gecikmesi ile bu tablo periapikal dokularda kalınlaşmış bir sınır yaratır.

**Soru 2 (ID: fa9c9929-ab45-4807-aa71-5f5f4ebf7c75)**
Soru Kökü: Sistemik metabolik kemik hastalıklarının çeneler üzerindeki radyografik etkileri incelendiğinde; çenelerin genel boyutunda bir değişiklik olmaksızın, trabekül yapısında belirgin granülerleşme ve generalize kemik dansitesinde azalma ile karakterize olan endokrin kökenli hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Hiperparatiroidizm
Açıklama: Tablo 13 kemik bulgularına göre; hiperparatiroidizmde çene boyutunda büyüme ya da küçülme olmaz, ancak osteoklastik aktivitenin artışına bağlı olarak kemik dansitesi azalır ve kafatası dahil kemiklerde granüler bir görünüm ortaya çıkar. Hipoparatiroidizmde kemik dansitesi nadiren artabilirken, osteopetroziste genel bir artış mevcuttur. Akondroplazi ve hipotiroidizmde ise çene boyutlarında belirgin bir küçülme saptanır.

---

### ÇİFT 392 (Benzerlik: 0.69)

**Soru 1 (ID: 054f395b-afc5-4e8d-b51e-6ae1ecbf2085)**
Soru Kökü: Rikets hastalığının şiddetli formlarında kemiklerde eğrilmeler ve O bacak deformitelerinin yanı sıra, panoramik radyografide dişi çevreleyen radyopatik yapıda da patolojik değişimler görülür. Tablo 14 verilerine göre bu bölgede beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Lamina durada incelme
Açıklama: Riketste kemik matriksinin (osteoid) üretilmesine rağmen kalsifiye olamaması sonucu trabeküller ve kortikal yapılar mineralden fakirleşir. Bu radyolojik olarak kemik dansitesinde azalma ve diş yuvasını sınırlayan radyopatik hat olan lamina duranın belirgin şekilde incelmesi veya şiddetli vakalarda kaybolması (Tablo 14) şeklinde yansır.

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 393 (Benzerlik: 0.69)

**Soru 1 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 394 (Benzerlik: 0.69)

**Soru 1 (ID: 00da7744-3800-4ed5-9326-833ed106e061)**
Soru Kökü: Altı aylık erkek bebek, süt kesici dişlerinin kök gelişimi tamamlanmadan kendiliğinden düşmesi şikayetiyle getiriliyor. Pediatrik konsültasyonda bacaklarda eğrilik ve kafa kemiklerinde belirgin ossifikasyon eksikliği rapor ediliyor. Bu klinik tabloya yol açan kalıtsal hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Hipofosfatazya
Açıklama: Süt dişlerinin (özellikle kesicilerin) erken kaybı, bebeklerde bacak eğriliği ve kafatası ossifikasyon eksikliği hipofosfatazya sendromunun en erken ve karakteristik tanı koydurucu belirtileridir. Osteopetrozis artmış kemik dansitesi ve sürme gecikmesi ile karakterize iken, burada belirgin bir mineralizasyon ve tutunma eksikliği vardır. Akondroplazi ise orantısız cücelik yapar ancak süt dişi erken kaybı primer bulgusu değildir.

**Soru 2 (ID: 014d4be8-7e84-44c0-9a36-d786e916ea79)**
Soru Kökü: Sekiz yaşındaki çocuk hastanın ailesi, çocuğun daimi dişlerinin bir türlü süremediğini ve süt dişlerinin halen düşmediğini ifade etmektedir. Hekim tarafından yapılan muayenede çocuğun dudaklarının oldukça kalın, dilinin normalden büyük (makroglossi) olduğu; cildinin dokunulduğunda hamursu bir kıvama sahip olduğu fark edilmiştir. Diş radyografilerinde daimi diş sürmelerinde gecikme ve eksternal kök rezorpsiyonları saptanan bu hastada en olası medikal tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Hipotiroidizm (Kretinizm)
Açıklama: Süt dişlerinin düşmesinde ve daimi diş sürmesinde gecikme, hamursu cilt, kalın dudaklar ve makroglossi kombinasyonu, çocukluk çağı tiroid yetmezliği olan kretinizm (hipotiroidizm) tablosu ile tamamen uyumludur. Rikets ve hipofosfatazyada da sürme gecikmesi görülebilir ancak onlarda eklem şişlikleri, bacak eğrilikleri veya erken diş kaybı (süt kesiciler) ön plandadır. Ciltteki hamursu kıvam ve dil büyümesi miksödematöz infiltrasyona (mukopolisakkarid birikimi) işaret eder.

---

### ÇİFT 395 (Benzerlik: 0.69)

**Soru 1 (ID: 7d1eb066-6e23-4c66-97f2-ba6941781c6f)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) teşhisi konmuş bir hastanın diş dokularının mineralizasyon durumu değerlendirildiğinde, Tablo 14'e göre aşağıdaki bulgulardan hangisi tespit edilir?
Doğru Şık (D): Mine ve dentinde hipokalsifikasyon
Açıklama: Hipofosfatemide fosforun aşırı renal atılımı, diş sert dokularının normal kalsifikasyonunu engelleyerek mine ve dentinde hipokalsifikasyona neden olur. Osteoskleroz daha çok hiperparatiroidizmin bazı sklerotik iyileşme evrelerinde veya osteopetroziste izlenirken, hipofosfatemi mineral kütlesinin zayıflığıyla seyreder. Hastaların radyografilerinde ayrıca geniş pulpa odaları ve incelmiş lamina dura tespit edilir.

**Soru 2 (ID: b0ea189e-2ca4-488c-b19c-6a5308eb6517)**
Soru Kökü: Gelişim geriliği ve bacaklarda eğrilme şikayetiyle başvuran 6 yaşındaki erkek hastaya hipofosfatemi tanısı konmuştur. Ağız içi muayenesinde herhangi bir çürük izlenmemesine rağmen spesifik dişlerde tekrarlayan periapikal apseler saptanmıştır. Alınan radyografisinde bu enfeksiyonlara anatomik olarak zemin hazırlayan karakteristik pulpa bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Genişlemiş pulpa odaları ve kanallar
Açıklama: Hipofosfatemi olgularında dentin yapımındaki defekt ve yetersiz mineralizasyon, pulpa odalarının ve kök kanallarının anormal derecede geniş kalmasına (ve pulpa boynuzlarının mine-dentin sınırına kadar uzanmasına) yol açar. Pulpa kalsifikasyonu (obliterasyon) osteogenezis imperfekta veya Cushing sendromunda görülürken, hipofosfatemide dentin çok incedir. Bu anatomik zayıflık, minör abrazyonlarda bile mikroorganizmaların pulpaya kolayca ulaşıp apse yapmasına zemin hazırlar.

---

### ÇİFT 396 (Benzerlik: 0.69)

**Soru 1 (ID: 643f5856-156a-4eb0-b4b5-a9f79e64e5d1)**
Soru Kökü: D vitamini metabolizmasındaki defekte bağlı olarak gelişen rikets hastalarında, diş gelişim sürecinde aşağıdaki radyografik bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (A): Diş foliküllerinin kortikal sınırlarında incelme veya kaybolma
Açıklama: Rikets hastalığında kalsiyum ve fosfat yetersizliğine bağlı olarak kemik ve dişlerin normal kalsifikasyonu bozulur; bu durum radyografik olarak lamina dura ve diş foliküllerinin kortikal sınırlarında incelme veya kaybolma şeklinde izlenir. Güçlü bir çeldirici olan pulpa odası daralması aksine, rikets vakalarında kalsifikasyon eksikliği nedeniyle geniş pulpa odaları görülür. Ayrıca bu hastalarda dişlerin sürme zamanlarında erken değil, tam tersine gecikme tablosu saptanır.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 397 (Benzerlik: 0.69)

**Soru 1 (ID: 9a623075-2c0b-4e72-a544-5fda9d26739d)**
Soru Kökü: Çocukluk çağında D vitamini eksikliğine (Rikets) maruz kalmış hastanın dental ve radyografik tablosunda;
I. Mine hipoplazisi
II. Lamina durada incelme
III. Diş sürmesinde gecikme
bulgularından hangilerinin bir arada görülmesi beklenir?
Doğru Şık (E): I, II ve III
Açıklama: Rikets hastalarında kalsiyum eksikliğine bağlı olarak gelişmekte olan ameloblastların fonksiyonu bozulur (Mine hipoplazisi - Tablo 14). Aynı zamanda çevre kemik dokusu yeterli mineralizasyona uğrayamadığı için kortikal sınır ve lamina durada incelme veya silinme görülür. Kemik yapımındaki defekt diş folikülünün itici gücünü de zayıflatarak sürmede belirgin gecikmeye yol açar (Her 3 öncül de doğrudur).

**Soru 2 (ID: d51fbf35-fb4b-4acf-b2cb-83f790e41ab1)**
Soru Kökü: D vitamini metabolitinin eksikliği nedeniyle inorganik mineral seviyelerinin düştüğü raşitizm (rikets) hastalığında, diş hekimini en çok ilgilendiren koronal sert doku defekti (Tablo 14) aşağıdakilerden hangisidir?
Doğru Şık (C): Mine tabakasında hipokalsifikasyon
Açıklama: Rikets ve osteomalazide sorun organik matriksin (osteoid) var olması ancak kalsiyum/fosfor yetersizliği yüzünden üzerine mineral çökememesidir (zayıf kalsifikasyon). Tablo 14'te rikets için kalsifikasyon sutununda doğrudan "Evet, mine" ibaresi yer alır. Bu nedenle minede hipokalsifikasyon görülür ve dişler mekanik streslere dayanamayarak kolayca çürür veya aşınır.

---

### ÇİFT 398 (Benzerlik: 0.69)

**Soru 1 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

**Soru 2 (ID: cb5d34dd-366e-46d2-9163-5bcdf0c1c3b3)**
Soru Kökü: Kırk beş yaşında erkek hasta, makroglossi, alt çenede Sınıf III iskeletsel prognati ve dişler arası diastemalarla kliniğe başvuruyor. Radyografide mandibula ramus ile gövde açısının arttığı tespit ediliyor. Yetişkin dönem hiperpituitarizm (Akromegali) ile uyumlu bu tabloda, özellikle posterior bölgede hangi dental sürme anomalisinin görülmesi en olasıdır?
Doğru Şık (D): Posterior dişlerde süper-erüpsiyon
Açıklama: Akromegali hastalarında büyüme hormonu fazlalığına bağlı olarak mandibular kemik büyümesi devam eder ve vertikal alveoler kemik boyutu artar. Tablo 14'te de belirtildiği üzere, bu boyutsal artışı telafi etmek ve oklüzyonu sağlamak adına posterior dişlerde süper-erüpsiyon (aşırı sürme) ile birlikte hipersementoz karakteristiktir. Ankiloz veya gömüklük durumu bu tablonun patofizyolojisiyle çelişir.

---

### ÇİFT 399 (Benzerlik: 0.69)

**Soru 1 (ID: 10f4a8a9-8460-4247-9f52-b2550481b7a2)**
Soru Kökü: Tablo 13 incelendiğinde, çene kemiklerinde granüler trabeküler yapı görülmesi **en az olası** olan hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Osteoporozis
Açıklama: Hiperparatiroidizm, Cushing sendromu, Renal osteodistrofi ve Hipofosfatemi çene kemiklerinde klasik olarak 'granüler' trabeküler patern yaratırken; osteoporozis tablosunda sadece kemik dansitesi ve trabekül sayısında azalma görülür, granüler bir yapı izlenmez. Bu ayrım kemik metabolizma hastalıklarının radyografik ayırıcı tanısında kritiktir.

**Soru 2 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

---

### ÇİFT 400 (Benzerlik: 0.69)

**Soru 1 (ID: 59dbbcb0-d1b7-4165-9fe6-5ec3aa1688b7)**
Soru Kökü: On iki yaşında erkek hasta, yaşıtlarına göre boy kısalığı ve çeneler arası uyumsuzluk şikayetiyle ortodonti kliniğine başvurmuştur. Çocuğun ekstremite oranları (kol/bacak) gövdesine göre normaldir ancak iskeleti genel olarak çok küçüktür. Sefalometrik analizde maksillanın normalden küçük, mandibulanın ise maksilladan daha da küçük ve geri pozisyonda olduğu belirlenmiştir. Bu klinik tablonun altında yatan en olası endokrin/gelişimsel bozukluk aşağıdakilerden hangisidir?
Doğru Şık (A): Hipopituitarizm (Hipofizer Cücelik)
Açıklama: Vücut oranlarının normal kalmasına rağmen hastanın genel iskelet sisteminin küçük olması ve mandibulanın maksillaya oranla belirgin bir şekilde geride kalarak mikrognati yaratması hipopituitarizm (dwarfizm) için karakteristiktir. Akondroplazide ekstremiteler gövdeye göre çok daha kısadır ve baş orantısız büyüktür. Bu orantılı (simetrik) büyüme geriliği tablosu, doğrudan hipofizden salınan büyüme hormonunun yetersizliğine işaret eder.

**Soru 2 (ID: f5d6534b-6729-4744-a9e1-22eaac4aa229)**
Soru Kökü: Büyüme hormonunun yetersiz salgılanması sonucu dwarfizm (cücelik) gelişen bir hastada, çene kemiklerinin boyutunda izlenen temel değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Boyutlarda küçülme
Açıklama: Hipopituitarizm tablosunda büyüme faktörlerinin eksikliği nedeniyle iskeletsel gelişim geriler ve çene kemiklerinin boyutlarında küçülme (mikrognati) izlenir. Bu küçülme, diş boyutları normal kaldığı için şiddetli çapraşıklık ve maloklüzyonlara zemin hazırlar. Mandibulada asimetrik genişleme hiperpituitarizm veya lokalize tümöral lezyonların bulgusu olup bu tabloda yeri yoktur.

---

### ÇİFT 401 (Benzerlik: 0.69)

**Soru 1 (ID: 2978db96-cf82-4c50-ba8a-392e58b2f84c)**
Soru Kökü: Akromegali hastalarında tipik olarak izlenen sınıf III iskeletsel maloklüzyon tablosunun temel biyomekanik ve gelişimsel kökeni aşağıdakilerden hangisidir?
Doğru Şık (D): Mandibular kondiler büyümenin aşırı şekilde uyarılması
Açıklama: Sınıf III iskeletsel maloklüzyon, büyüme hormonunun (GH) mandibular kondildeki kıkırdak dokusunu sekonder olarak aşırı uyarması ve alt çenenin anteriora doğru yer değiştirmesi (prognati) sonucunda oluşur. Maksiller protrüzyon akromegalide değil, tam tersine talasemi gibi kemik iliği genişlemesi yapan anemi türlerinde (premaksilla protrüzyonu) görülür. Bu kontrolsüz kondiler büyüme, çeneler arası sagittal ilişkinin alt çene lehine bozulmasına zemin hazırlar.

**Soru 2 (ID: af953903-9287-46e7-8de5-c19f00526933)**
Soru Kökü: Hipopituitarizm hastalarının maksillofasiyal gelişimi incelendiğinde, mandibulanın kondiler büyümesindeki yetersizliğin çeneler arası ilişkiye yansıması en net şekilde hangi oklüzal anomali olarak izlenir?
Doğru Şık (E): Anterior derin kapanış (Deep bite)
Açıklama: Hipopituitarizmde mandibula büyüme potansiyelini tamamlayamaz; bu sebeple maksilladan daha küçük ve daha geri (retrüziv) bir pozisyonda kalır, bu morfolojik asimetri şiddetli bir anterior derin kapanışa (deep bite) neden olur. Sınıf III ve açık kapanış akromegali (hiperpituitarizm) olgularında görülen oklüzal defektlerdir. Mandibulanın bu gerideki pozisyonu iskeletsel sınıf II paterne yatkınlık ve vertikal boyutta derin örtülemeyle sonlanır.

---

### ÇİFT 402 (Benzerlik: 0.69)

**Soru 1 (ID: 8f1a0878-04bc-4347-8218-ad43b5f05fbe)**
Soru Kökü: Aşağıdaki sistemik hastalıklardan hangisinde, mineralizasyon defektleri ve granüler trabeküler değişikliklerle birlikte çene boyutlarında 'artma (genişleme)' beklenir?
Doğru Şık (E): Renal osteodistrofi
Açıklama: Renal osteodistrofi (kronik böbrek yetmezliği sekeli), KIBT ve klinik görüntülerinde maksilla ve mandibulada ekspansiyon (genişleme) ve kemik boyutlarında artma ile karakterize olabilir. Hipopituitarizm ve hipotiroidizm çene boyutlarında küçülmeye neden olurken, rikets veya osteoporoziste çene boyutunda bir değişiklik beklenmez.

**Soru 2 (ID: ba7868fa-9937-4994-88d9-c4cc90b9216a)**
Soru Kökü: Tablo 13 referans alındığında, çene kemiklerinde genel olarak kemik dansitesi azalmasına rağmen 'nadiren artma' (osteoskleroz) bulgusunun da raporlanabildiği sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Renal osteodistrofi
Açıklama: Renal osteodistrofi kompleks bir metabolik hastalıktır ve fasiyal kemiklerde 'tuz-biber' görüntüsü yaratan osteolitik ve osteosklerotik bölgeleri aynı anda barındırabilir. Bu nedenle Tablo 13'te kemik dansitesinin temel olarak azaldığı ancak 'nadiren arttığı' belirtilir. Osteoporoz ve Cushing sendromunda ise sadece dansite azalması mevcuttur, osteosklerotik odak görülmez.

---

### ÇİFT 403 (Benzerlik: 0.69)

**Soru 1 (ID: 9ba1ae4e-85db-470e-912b-52a08b9c3cf4)**
Soru Kökü: Endokrin sistem hastalıklarında dişlerde görülen genel gelişimsel ve radyografik anormallikler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (B): Mine insizal kenarlarında aşırı atrisyon
Açıklama: Endokrin hastalıklarda sürmede hızlanma veya gecikme, hipoplazi, hipokalsifikasyon ve lamina dura belirginliğinin kaybı görülür. Aşınma (atrisyon) lokal faktörlere bağlı mekanik bir kayıptır ve endokrin sistemin doğrudan bir bulgusu olarak belirtilmez.

**Soru 2 (ID: c4163a70-7624-46de-b5b9-a6012b1029cd)**
Soru Kökü: Çocukluk çağında gelişen tiroid hormon eksikliği (kretinizm) hastalarının çene, kafa ve ekstremite kemiklerini ilgilendiren radyografik izlemlerinde aşağıdaki bulgulardan hangisi **görülmez**?
Doğru Şık (E): Kortikal sınırlarda diffüz incelme ve radyografik osteoporoz tablosu
Açıklama: Osteoporoz nedeniyle kortikal sınırlarda incelme, hipotiroidizmde değil tam tersi mekanizmayla çalışan ve kemik yapım-yıkım döngüsünü felte eden hipertiroidizm (tirotoksikoz), hiperparatiroidizm veya osteoporoz gibi tablolarda izlenir. Hipotiroidizm radyografilerinde lamina durada belirgin kalınlaşma görülür; epifizlerin geç kapanması, wormian kemikler ve kısa kökler teşhisi destekleyen en önemli büyüme geriliği verileridir.

---

### ÇİFT 404 (Benzerlik: 0.69)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 405 (Benzerlik: 0.69)

**Soru 1 (ID: 1f1773bc-46e8-4c71-8ac8-6e1f6767433d)**
Soru Kökü: Dokuz yaşında kız hasta, sol alt çenede şişlik, şiddetli ağrı ve akıntı şikayetiyle başvuruyor. Anamnezden hastanın bebeklik döneminde hidrosefali geçirdiği, işitme kaybı bulunduğu ve sık kemik kırıkları yaşadığı öğreniliyor. Radyografik incelemede çenelerde belirgin radyoopasite artışı saptanmış olup sol alt molar bölgede rekürrent osteomiyelit tablosu izlenmiştir. Bu hastanın tedavisinde karşılaşılan zorluğun fizyolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Artmış kemik dansitesi ve azalan kemik iliği boşluklarının bölgenin kanlanmasını (vaskülarizasyonu) bozması
Açıklama: Verilen klinik tablo hidrosefali, sağırlık ve kemiklerde opasite artışıyla giden osteopetrozis (mermer kemik hastalığı) sendromudur. Osteopetroziste aşırı kemik birikimi medüller boşlukları tıkayarak kemiğin kan desteğini (vaskülarizasyonunu) neredeyse sıfırlar. Kanlanmayan kemik dokusuna savunma hücreleri ve antibiyotikler ulaşamadığı için enfeksiyon gelişimi çok kolay, tedavisi (osteomiyelit tablosu) ise hiperbarik oksijen gerektirecek kadar zordur.

**Soru 2 (ID: 88ee8bd0-8a9b-4115-860c-55d9ae21ef23)**
Soru Kökü: Bebeklik döneminde hidrosefali, sağırlık, körlük ve vestibüler disfonksiyon gibi kranial sinir felçleri geliştiren bir hastanın çene radyografilerinde; kortikal sınırların ayırt edilemediği ve kemik iliği boşluklarının daraldığı saptanmıştır. Bu hastada nörolojik komplikasyonların ortaya çıkmasının en olası radyografik ve patofizyolojik temeli aşağıdakilerden hangisidir?
Doğru Şık (C): Artmış kemik dansitesi ve sklerozun nöral baskı yaratarak kranial foramenleri daraltması
Açıklama: Mermer kemik hastalığı olarak bilinen osteopetroziste tüm iskelette aşırı kemik yapımı (dansite artışı) izlenir ve daralan kemik foramenleri, içinden geçen vestibüler, fasiyal ve optik sinirleri sıkıştırarak sağırlık, körlük ve hidrosefali gibi ağır nörolojik defisitlere neden olur. Kemik iliği hiperplazisi talasemi ve orak hücreli anemide görülür, osteopetroziste ise tam tersine medüller boşluk kemik ile dolarak daralır. Komplikasyonların kök nedeni kemik dokusunun anormal kütlesel artışıdır.

---

### ÇİFT 406 (Benzerlik: 0.69)

**Soru 1 (ID: 74fc207f-f136-4261-97a0-00b6cb22984e)**
Soru Kökü: Tablo 14'te belirtilen sistemik hastalıkların dental bulguları karşılaştırıldığında, hipokalsifikasyon görülmesine rağmen diş hipoplazisi gelişiminin **en az olası** (nadir) olduğu hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Osteopetrozis
Açıklama: Osteopetrozis hastalarında zayıf kalsifikasyon (hipokalsifikasyon) yaygın görülmesine karşın, ameloblast veya odontoblast matriks sekresyonunun çökmesiyle oluşan belirgin diş hipoplazisi 'nadir' olarak izlenir. Hipofosfatazya ve rikets hastalarında hem hipokalsifikasyon hem de hipoplazi birlikte sık görülürken, osteopetroziste sert doku hacminden çok mineral yoğunluğu hedeflenir. Diş anatomik formu korunsa da doku kalitesi oldukça zayıftır.

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 407 (Benzerlik: 0.69)

**Soru 1 (ID: 6f18f11c-a3df-4596-acaf-f30f960b3afc)**
Soru Kökü: Bir hastanın radyografisinde kemik dansitesinin değişmediği ancak çene boyutlarının belirgin şekilde küçüldüğü saptanmıştır. Tablo 13 referans alındığında, bu radyografik profilin **en olası** iki nedeni hangi şıkta birlikte verilmiştir?
Doğru Şık (C): Hipopituitarizm ve Hipotiroidizm
Açıklama: Büyüme hormonu eksikliğine bağlı hipopituitarizm (cücelik) ve tiroid hormonu eksikliğine bağlı hipotiroidizm (kretinizm) iskelet sisteminin gelişimini durdurarak çene boyutlarında küçülmeye (mikrognati) neden olurlar. Her iki hastalıkta da kemik yapısının iç mimarisinde (dansite veya trabekül sayısında) belirgin bir patolojik yıkım tariflenmemiştir (Tabloda dansite: Hayır).

**Soru 2 (ID: d41cf4f1-b6d0-4ad8-8ce7-c82545d326e8)**
Soru Kökü: On iki yaşında erkek hasta, tekrarlayan çene enfeksiyonu ve diş sürme gecikmesi şikayetiyle başvuruyor. Radyografik muayenede kemik iliği boşluklarının daraldığı, trabeküler yapının belirsizleştiği ve yaygın osteoskleroz tespit ediliyor. Tablo 13 verilerine göre osteopetrozis tanısı alan bu hastanın çene kemiklerinde hangi boyutsal değişimin izlenmesi en olasıdır?
Doğru Şık (B): Çenelerin her ikisinde de boyut artışı
Açıklama: Osteopetrozis (mermer kemik hastalığı) kemik yapım-yıkım dengesinin yapım lehine, daha doğrusu yıkılamama lehine bozulduğu bir durumdur ve bu nedenle Tablo 13'e göre çenelerde boyut artışı izlenir. En güçlü distraktör olan atrofik küçülme şıkkı, kemik iliğinin daralmasıyla karıştırılabilir ancak dış kemik konturları rezorbe olamadığı için tam tersine genişler. Bu anatomik genişleme diş sürme problemlerini de beraberinde getirir.

---

### ÇİFT 408 (Benzerlik: 0.69)

**Soru 1 (ID: 4f41dad4-d101-4379-988c-a2acfe0c0f77)**
Soru Kökü: Genç bir hastanın radyografisinde süt ve daimi dişlerin mine tabakalarının çok ince olduğu, dentin yapımının baskılandığı ve buna paralel olarak pulpa odalarının ile kök kanallarının anormal derecede geniş (büyük) olduğu saptanmıştır. Tablo verilerine göre, bu diş patolojisini primer olarak üreten iki kalıtsal kemik/metabolizma hastalığı aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Hipofosfatazya - Hipofosfatemi
Açıklama: Dişlerin sert dokularının (mine/dentin) yeterince üretilememesine (hipoplazi/hipokalsifikasyon) bağlı olarak pulpa odalarının fizyolojik daralmayı yapamaması ve geniş kalması, temel olarak sistemik fosfor metabolizması hatalarında (Hipofosfatemi) ve alkalen fosfataz eksikliğinde (Hipofosfatazya) izlenir. Diğer seçeneklerdeki hastalıklar ya pulpayı kalsifiye ederek daraltır (Cushing, Osteopetrozis) ya da ebatlarını direkt etkilemez.

**Soru 2 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

---

### ÇİFT 409 (Benzerlik: 0.69)

**Soru 1 (ID: 486ba4e3-e394-44fe-a0bf-a9930fb9b12d)**
Soru Kökü: Endokrin sistemin temel belirleyicisi olan hipofiz bezinin fonksiyon bozukluklarının çene ve diş gelişimine etkileri (Tablo 13 ve 14) incelendiğinde, aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Cücelik (dwarfizm) sendromunda dişlerin pulpa odaları ve apikal foramenleri skleroz nedeniyle daralmıştır.
Açıklama: Hipopituitarizme bağlı cücelikte (dwarfizm) radyograflarda dişlerin pulpa odaları ve apikal foramenleri daralmış değildir, aksine kaynak metinde "geniş görülür" ibaresiyle belirtildiği üzere açık ve geniştir. Cücelikte diş kronları normal kalsa da çeneler ufaktır ve sürme gecikir. Diğer şıklardaki hiperpituitarizm (süper-erüpsiyon) ve hipopituitarizm özellikleri doğrudur.

**Soru 2 (ID: 85e1bb6d-f98c-40c3-8fe4-8d7c5c937661)**
Soru Kökü: Gövde oranları normal ancak çeneleri gelişimsel olarak yaşına göre oldukça küçük olan ve "cücelik (dwarfizm)" tanısı almış on yaşındaki hastanın (hipopituitarizm) dental gelişimi hakkında aşağıdakilerden hangisi doğrudur?
Doğru Şık (E): Daimi dişlerin kronları normal boyutlardadır ancak sürmelerinde gecikme görülür.
Açıklama: Hipopituitarizm hastalarında diş gelişim hızı düşüktür; süt dişlerinin düşmesi birkaç yıl gecikebilir ve daimi dişlerin sürmesi de gecikir. Ancak dişlerin kron boyutları normaldir, sorun çenelerin, özellikle mandibulanın küçük kalmasıdır. Küçük çene ve normal boyuttaki diş kronları şiddetli çapraşıklık ile maloklüzyonlara sebep olur.

---

### ÇİFT 410 (Benzerlik: 0.69)

**Soru 1 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 411 (Benzerlik: 0.69)

**Soru 1 (ID: 00da7744-3800-4ed5-9326-833ed106e061)**
Soru Kökü: Altı aylık erkek bebek, süt kesici dişlerinin kök gelişimi tamamlanmadan kendiliğinden düşmesi şikayetiyle getiriliyor. Pediatrik konsültasyonda bacaklarda eğrilik ve kafa kemiklerinde belirgin ossifikasyon eksikliği rapor ediliyor. Bu klinik tabloya yol açan kalıtsal hastalık aşağıdakilerden hangisidir?
Doğru Şık (D): Hipofosfatazya
Açıklama: Süt dişlerinin (özellikle kesicilerin) erken kaybı, bebeklerde bacak eğriliği ve kafatası ossifikasyon eksikliği hipofosfatazya sendromunun en erken ve karakteristik tanı koydurucu belirtileridir. Osteopetrozis artmış kemik dansitesi ve sürme gecikmesi ile karakterize iken, burada belirgin bir mineralizasyon ve tutunma eksikliği vardır. Akondroplazi ise orantısız cücelik yapar ancak süt dişi erken kaybı primer bulgusu değildir.

**Soru 2 (ID: beb85f6b-a19d-4cc7-afe5-f7c65914d290)**
Soru Kökü: Dört yaşında erkek çocuk hasta, bacaklarında parantez (O) şeklinde eğrilik ve diş sürmesinde gecikme şikayetiyle getiriliyor. Radyografik incelemede çene kemiklerinin kansellöz kısmında trabekül dansitesinde azalma ve uzun kemik epifizlerinde aşınma saptanıyor. Bu hastadaki sendromun etyolojisinde rol oynayan temel eksiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Aktif D vitamini metabolitinin (1,25 (OH)2 D) eksikliği
Açıklama: Bacaklarda O şeklinde eğrilik, uzun kemik epifizlerinde genişleme/aşınma ve diş sürmesinde gecikme tablosu çocukluk çağı rikets (raşitizm) hastalığının tipik özellikleridir. Rikets hastalığı, kalsiyumun bağırsaklardan emilmesi için zorunlu olan aktif D vitamini metabolitinin (1,25 (OH)2 D) eksikliği veya aktivite defektine bağlı olarak osteoid dokunun mineralize olamaması sonucu gelişir. Alkalen fosfataz eksikliği hipofosfatazyanın patogenezini açıklar.

---

### ÇİFT 412 (Benzerlik: 0.69)

**Soru 1 (ID: 54a32375-d9dd-4810-8aae-9edfcd623353)**
Soru Kökü: Erken süt dişi kaybı öyküsü olan çocuk hastanın laboratuvar testlerinde serum alkalen fosfataz (ALP) düzeyi çok düşük bulunmuştur. Hipofosfatazya tablosundaki bu hastanın genel çene kemiği radyografisinde dansite açısından hangi spesifik değişim gözlenir?
Doğru Şık (C): Dansitede generalize azalma
Açıklama: Hipofosfatazyada ALP yetersizliği nedeniyle osteoid dokunun normal mineralizasyonu gerçekleşemez, bu da kalsifikasyon eksikliğine ve kemik dansitesinde generalize azalmaya yol açar. Radyografide alveoler kemik dansitesi azalmıştır ve dişler kemik desteğini kaybeder. Kortikal kemikte skleroz veya dansite artışı osteoblastik / anabolik patolojilerin bulgusu olup burada görülemez.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 413 (Benzerlik: 0.69)

**Soru 1 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

**Soru 2 (ID: bad1ffc3-a183-480f-a8ec-199aca44342c)**
Soru Kökü: Yetişkinlerde kemiklerde yumuşama, kas zayıflığı ve pseudofraktürlerle karakterize osteomalazya hastalarının (Tablo 14) çene kemiği radyografik bulgularıyla ilgili olarak aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (D): Tablo 14'e göre uzun vadede tam ve kesin bir diş kaybı beklenir.
Açıklama: Osteomalazya yetişkinlikte ortaya çıktığı için dişlerin kalsifikasyon dönemi bitmiştir (mine hipoplazisi olmaz). Kortikal incelme ve lamina dura zayıflığı (Tablo 14: İncelmiş) görülse de, Tablo 14'te osteomalazya için "Diş kaybı" sütununda açıkça "Hayır" yazmaktadır. Alveol kemiği zayıflasa bile doğrudan bir diş dökülme sendromu osteomalazyaya atfedilmez.

---

### ÇİFT 414 (Benzerlik: 0.69)

**Soru 1 (ID: 66891f0c-7462-4101-aff7-f08db8b7bc65)**
Soru Kökü: Çene kemiklerinde radyolojik olarak izlenen yaygın 'granüler' veya 'tuz-biber' görünümü, kemik döngüsünün bozulduğu hastalıklarda kansellöz kemiğin karakteristik bir alterasyonudur. Aşağıdaki sistemik hastalıklardan hangisinin radyografik muayenesinde çenelerde granüler kemik paterni izlenmesi **beklenmez**?
Doğru Şık (E): Osteopetrozis
Açıklama: Osteopetroziste osteoklastik yetmezliğe bağlı kemik rezorpsiyonu durur; bu da tüm trabeküllerin aşırı kalsifiye olmasına, kemik iliğinin kapanmasına ve radyografik olarak tamamen opak/masif (mermer) bir görünüme neden olur. Oysa Hiperparatiroidizm, Cushing, Renal osteodistrofi ve Hipofosfatemide kemik yıkımı ve ince reaktif yapım bir arada olduğu için trabeküller çok küçük, ince kumlu bir benekli yapı (granüler) kazanır.

**Soru 2 (ID: 8f1a0878-04bc-4347-8218-ad43b5f05fbe)**
Soru Kökü: Aşağıdaki sistemik hastalıklardan hangisinde, mineralizasyon defektleri ve granüler trabeküler değişikliklerle birlikte çene boyutlarında 'artma (genişleme)' beklenir?
Doğru Şık (E): Renal osteodistrofi
Açıklama: Renal osteodistrofi (kronik böbrek yetmezliği sekeli), KIBT ve klinik görüntülerinde maksilla ve mandibulada ekspansiyon (genişleme) ve kemik boyutlarında artma ile karakterize olabilir. Hipopituitarizm ve hipotiroidizm çene boyutlarında küçülmeye neden olurken, rikets veya osteoporoziste çene boyutunda bir değişiklik beklenmez.

---

### ÇİFT 415 (Benzerlik: 0.69)

**Soru 1 (ID: 8a90c027-8dec-4c43-ac4a-677e61d94d4d)**
Soru Kökü: Bir çocukluk çağı endokrin bozukluğu olan hipopituitarizm hastalarının klinik ve radyografik çene incelemelerinde aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Lamina duranın normalden kalın izlenmesi
Açıklama: Hipopituitarizmde diş formasyon hızında yavaşlama olduğu için radyograflarda pulpa odaları ve apikal foramenler normalden daha geniş izlenir, sürme gecikir, 3. molar agenezisi ve mine hipoplazileri sıktır. Ancak lamina durada kalınlaşma hipopituitarizmin değil, hipotiroidizm (kretinizm) ve osteopetrozis gibi kemik yoğunluğunu/formasyon hızını değiştiren hastalıkların spesifik bir göstergesidir.

**Soru 2 (ID: acc51f82-1a5b-4ade-9ca1-25be3b5ec9cc)**
Soru Kökü: Hipofosfatazya tanısı almış bir çocuk hastanın dental gelişim süreci incelendiğinde, radyografik diş sürme paterni hakkında aşağıdakilerden hangisinin görülmesi **yanlıştır**?
Doğru Şık (D): Diş sürmesinde hızlanma
Açıklama: Hipofosfatazya hastalarında daimi dişlerin sürme sürecinde hızlanma değil, belirgin bir gecikme yaşanır. Diş sürmesinde hızlanma hipertiroidizm olgularında beklenirken, hipofosfatazyanın kemik metabolizma bozukluğu sürme kuvvetlerini zayıflatır. Ayrıca ince mine tabakası ve geniş pulpa odaları bu hastaların radyografilerinde tipik olarak izlenen bulgulardır.

---

### ÇİFT 416 (Benzerlik: 0.69)

**Soru 1 (ID: 168fc360-a805-4e46-ad12-4728306dde35)**
Soru Kökü: Cushing sendromunda adrenal adenom veya hiperplaziye bağlı olarak aşırı glukokortikoid salgılanmasının kemik metabolizmasında tetiklediği primer fizyopatolojik değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoklastik aktivitenin artması ve osteoblastik aktivitenin azalmasıyla gelişen kemik kaybı
Açıklama: Glukokortikoidlerin kanda yüksek seviyelerde bulunması osteoblastik aktiviteyi (kemik yapımını) baskılarken, direkt veya dolaylı yollarla osteoklastik aktiviteyi (kemik yıkımını) artırarak patolojik kırıklara eğilim yaratan generalize osteoporoza neden olur. Osteoblastik aktivitenin artması çeldiricisi tam tersi mekanizmayı ifade ettiği için yanlıştır. Sonuç olarak lamina dura kaybı ve granüler bir osteoporotik patern izlenir.

**Soru 2 (ID: 54a3f445-3015-4469-a341-6d2b9ae2b23f)**
Soru Kökü: 42 yaşında kadın hasta, aydede yüzü ve gövdesel obezite klinik tablosu sergilemektedir. Ekzojen kortikosteroid kullanımına bağlı Cushing sendromu gelişen bu hastanın panoramik radyografisinde kemik dansitesinde beklenen temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Dansitede azalma
Açıklama: Cushing sendromunda yüksek glukokortikoid seviyesi osteoblastik aktiviteyi baskılar ve direkt/dolaylı yoldan osteoklastik aktiviteyi artırarak net kemik kütlesinde (dansitede) azalmaya neden olur. Bu kayıp, generalize osteoporozis tablosuna ve patolojik kırıklara zemin hazırlar. Opasite artışı veya pamuk yumağı görünümü gibi anabolik kemik patolojileri glukokortikoid fazlalığında kesinlikle beklenmez.

---

### ÇİFT 417 (Benzerlik: 0.69)

**Soru 1 (ID: 6c719faa-87e9-4f86-b840-dcd979c0ec31)**
Soru Kökü: Osteomalazya hastalarının radyografik incelemesinde çene kemiklerinde trabekül sayısında izlenen spesifik istatistiksel eğilim Tablo 13'e göre hangisidir?
Doğru Şık (E): Nadiren azalma
Açıklama: Yetişkinlerde görülen D vitamini eksikliğinde (osteomalazya), kemik kütlesi daha önce oluştuğu için rikets kadar şiddetli çene bulguları vermez ve trabekül sayısında sadece 'nadiren azalma' izlenir. Çene kemiklerinde trabekülasyonda yaygın (sıklıkla) azalma çocukluk çağı varyantı olan rikets'te görülür. Granüler patern ise bu metabolik bozukluğun bir parçası değildir.

**Soru 2 (ID: bf22c087-8c5a-4055-964f-1de88fcf6335)**
Soru Kökü: Hipofosfatemi hastalarında, trabekül sayısındaki azalmaya ek olarak kemik mikro-mimarisi Tablo 13'e göre hangi spesifik kalitatif özelliği sergiler?
Doğru Şık (C): Granüler trabeküler yapı
Açıklama: Hipofosfatemide yetersiz kalsifikasyon ve değişen kemik döngüsü sonucu çenelerde granüler trabeküler yapı izlenir. Bu granüler görünüm, osteoporotik kemik matriksinin tipik radyografik yansımasıdır. Dövülmüş bakır görünümü hipofosfatazyada kafatasında izlenirken, hipofosfatemik rikets çenede granüler formdadır.

---

### ÇİFT 418 (Benzerlik: 0.69)

**Soru 1 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

**Soru 2 (ID: f9811bc3-a547-4958-a3f9-111d3338f5af)**
Soru Kökü: Hipofosfatemi hastalarında alveoler kemik desteğinde ve dişi çevreleyen radyografik sınırlarda patolojik değişimler meydana gelmektedir. Tablo 14 verilerine göre bu hastalarda lamina dura yapısında aşağıdaki radyografik bulgulardan hangisi izlenir?
Doğru Şık (B): Lamina dura kaybı (seyrelme veya kaybolma)
Açıklama: Hipofosfatemide alveolar kemik mineralizasyonunun bozulması ve kalsifikasyon yetersizliği, radyografik olarak lamina duranın seyrelmesi veya tamamen incelerek kaybı ile sonuçlanır. Lamina durada sklerotik kalınlaşma osteopetrozis gibi kemik yapımının yıkımdan fazla olduğu durumlarda beklenir. Rikets varyantı olan bu tabloda çene kemiği osteoporotik, trabeküler yapı ise granüler görünümdedir.

---

### ÇİFT 419 (Benzerlik: 0.69)

**Soru 1 (ID: 15c182d9-3581-4016-96db-8d6231a29685)**
Soru Kökü: Çocukluk döneminde başlayan hipofiz bezi disfonksiyonlarının iskelet sistemi üzerine etkileri incelendiğinde; büyüme hormonunun aşırı salgılanması gigantizme, yetersiz salgılanması ise cüceliğe (dwarfizm) yol açmaktadır. Hipofiz yetmezliğine bağlı dwarfizm izlenen bir hastada aşağıdaki maksillofasiyal bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): Dişlerin pulpa odaları ve apikal foramenlerinde anormal genişlik
Açıklama: Hipofiz hormon yetersizliğine bağlı cücelik (dwarfizm/akondroplazi) sendromlarında fiziksel gelişimle birlikte diş gelişimi de orantılı olarak duraksar. Çeneler olması gerekenden çok küçüktür (çapraşıklık yapar, prognati yapmaz). Gelişimin yavaş olması nedeniyle dişlerin apikal foramenlerinin kapanması ve sekonder dentin yapımı gecikir; bu da radyograflarda pulpa odalarının ve apikal foramenlerin belirgin şekilde anormal derecede daha geniş görünmesine neden olur.

**Soru 2 (ID: 486ba4e3-e394-44fe-a0bf-a9930fb9b12d)**
Soru Kökü: Endokrin sistemin temel belirleyicisi olan hipofiz bezinin fonksiyon bozukluklarının çene ve diş gelişimine etkileri (Tablo 13 ve 14) incelendiğinde, aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Cücelik (dwarfizm) sendromunda dişlerin pulpa odaları ve apikal foramenleri skleroz nedeniyle daralmıştır.
Açıklama: Hipopituitarizme bağlı cücelikte (dwarfizm) radyograflarda dişlerin pulpa odaları ve apikal foramenleri daralmış değildir, aksine kaynak metinde "geniş görülür" ibaresiyle belirtildiği üzere açık ve geniştir. Cücelikte diş kronları normal kalsa da çeneler ufaktır ve sürme gecikir. Diğer şıklardaki hiperpituitarizm (süper-erüpsiyon) ve hipopituitarizm özellikleri doğrudur.

---

### ÇİFT 420 (Benzerlik: 0.69)

**Soru 1 (ID: 6bab2a95-d12a-4a14-ad62-80880f67f6b2)**
Soru Kökü: Hipokalsemiye bağlı tetani ve kas krampları ile karakterize hipoparatiroidizm tablosunda, çene kemiklerinin radyografik incelmesinde kemik dansitesi açısından Tablo 13'e göre **en az olası** duruma rağmen nadiren de olsa hangi bulgu izlenebilir?
Doğru Şık (D): Nadiren artma
Açıklama: Hipoparatiroidizmde parathormon yetersizliği kalsiyum mobilizasyonunu durdurduğu için genellikle kemik dansitesinde belirgin bir değişiklik izlenmez. Ancak hedef doku yanıtına veya kronik kalsiyum/fosfat dengesizliğine bağlı olarak çene kemiklerinde 'nadiren artma' rapor edilmektedir. Generalize radyolüsensi (azalma) veya granüler yapı hiperparatiroidizmin karakteristik bulgularıdır ve bu hastalıkta görülmez.

**Soru 2 (ID: 728cd650-cf43-4756-adf3-a717d7a5b997)**
Soru Kökü: Hiperparatiroidizm hastalığında kemik rezorpsiyonu ve osteitis fibrosa cystica gibi yaygın yıkım alanları görülmesine rağmen, Tablo 14'e göre bu hastaların diş sert dokuları değerlendirildiğinde aşağıdaki özelliklerden hangisi geçerlidir?
Doğru Şık (B): Diş kaybı nadiren izlenir
Açıklama: Hiperparatiroidizm kalsiyumun kemikten kana geçişini artırarak çenelerde şiddetli demineralizasyon (Brown tümörleri vb.) yapsa da, Tablo 14'te açıkça belirtildiği üzere "Diş kaybı: Nadir"dir ve mine hipoplazisi veya pulpa genişlemesi oluşturmaz. Kök rezorpsiyonu görülebilse de alveol kemiği zayıflamasına rağmen dişlerin kendiliğinden erken dökülmesi bu hastalık için karakteristik bir bulgu değildir.

---

### ÇİFT 421 (Benzerlik: 0.69)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

### ÇİFT 422 (Benzerlik: 0.69)

**Soru 1 (ID: 9a623075-2c0b-4e72-a544-5fda9d26739d)**
Soru Kökü: Çocukluk çağında D vitamini eksikliğine (Rikets) maruz kalmış hastanın dental ve radyografik tablosunda;
I. Mine hipoplazisi
II. Lamina durada incelme
III. Diş sürmesinde gecikme
bulgularından hangilerinin bir arada görülmesi beklenir?
Doğru Şık (E): I, II ve III
Açıklama: Rikets hastalarında kalsiyum eksikliğine bağlı olarak gelişmekte olan ameloblastların fonksiyonu bozulur (Mine hipoplazisi - Tablo 14). Aynı zamanda çevre kemik dokusu yeterli mineralizasyona uğrayamadığı için kortikal sınır ve lamina durada incelme veya silinme görülür. Kemik yapımındaki defekt diş folikülünün itici gücünü de zayıflatarak sürmede belirgin gecikmeye yol açar (Her 3 öncül de doğrudur).

**Soru 2 (ID: b6aeca94-4d7a-4c6d-99a7-829c65c384ab)**
Soru Kökü: Süt dişlerinin erken kaybı ve "kabuk diş" görünümü ile kliniğe başvuran bir çocuk hastanın radyografisinde, ince mine formasyonu ve alveolar korteks incelmesi saptanmıştır. Biyokimyasal olarak alkalen fosfataz düşüklüğü izlenen (Hipofosfatazya) bu olguda (Tablo 14) beklenen karakteristik yüzey defekti aşağıdakilerden hangisidir?
Doğru Şık (D): Diş dokularında (mine, dentin, sement) hipoplazi
Açıklama: Hipofosfatazya hastalarında osteoid ve dental doku mineralizasyonu eksik kalır. Tablo 14'e göre hastalık "Diş Hipoplazisine" (Evet) sebep olur. Sement üretimi yetersiz kaldığı için periodontal ataşman tutunamaz ve dişler erken kaybedilir. Pulpa sekonder dentin yapımını gerçekleştiremez, bu yüzden pulpa odası hep geniş kalır ve diş adeta ince bir tabaka halindedir (hipoplazi).

---

### ÇİFT 423 (Benzerlik: 0.69)

**Soru 1 (ID: 5c8c1d83-b57e-4729-8fde-723740746fda)**
Soru Kökü: 35 yaşında kadın hasta, taşikardi, sinirlilik ve ısı intoleransı şikayetiyle başvurmuştur. Hastanın Graves hastalığı öyküsü bulunmaktadır. Radyolojik incelemede, tüm çene kemik dansitesinde nasıl bir değişim beklenir?
Doğru Şık (C): Azalma
Açıklama: Hipertiroidizmde artmış bazal metabolizma ve tiroksin seviyesi kemik döngüsünü hızlandırarak kemik yapım-yıkım dengesini yıkım lehine bozar ve kemik dansitesinde azalmaya neden olur. Bu durum kortikal sınırlarda incelme ve generalize osteoporoz yaratır ancak granüler patern oluşturmaz. Değişiklik izlenmez distraktörü, kemik dansitesini etkilemeyen hipotiroidizm ile karıştıranları hedeflemektedir.

**Soru 2 (ID: 69b0eb4a-f821-475a-bd51-1c7dc02f2502)**
Soru Kökü: Hipertiroidizm (tirotoksikoz) sendromuna sahip olan hastaların ağız içi muayenelerinde, sağlıklı bireylere kıyasla daha yaygın periodontal doku kaybı profili gözlenmektedir. Bu hastalardaki diş eti hastalığının agresif seyretmesine yatkınlık yaratan ana iskeletsel/radyografik patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoporoz nedeniyle alveoler kortikal sınırlarda incelme yaşanması
Açıklama: Hipertiroidizm (tirotoksikoz) hastalarında artan metabolizma hızı kemik döngüsünü (turnover) etkileyerek radyograflarda da izlenebilen generalize osteoporoza ve kortikal sınırlarda incelmeye neden olur. Tükürükte glikoz artışı diyabete, periodontal ligament genişlemesi ve mikrostomi ise sklerodermaya özgüdür. Kemik yapısındaki bu osteoporotik zayıflama, en ufak bir enflamatuar yanıtta dahi ciddi kemik kaybıyla sonuçlanan periodontal problemlere davetiye çıkarır.

---

### ÇİFT 424 (Benzerlik: 0.69)

**Soru 1 (ID: 827a3be6-9a8c-4f8d-9cc7-16d90c913b13)**
Soru Kökü: Kronik böbrek yetmezliği nedeniyle diyaliz tedavisi gören bir hastanın radyolojik incelemesinde, kafatası ve çene kemiklerinde izlenen 'tuz-biber (salt-and-pepper)' ve granüler trabeküler görünümün temel fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Böbrekten fosfor atılımının azalmasıyla gelişen hiperfosfatemi ve sekonder hiperparatiroidizm
Açıklama: Renal osteodistrofi (renal rikets) kronik böbrek yetmezliği olan hastalarda böbrekten fosfor atılımının azalması (hiperfosfatemi) ve sekonder olarak kalsiyum emiliminin düşmesi (hipokalsemi) sonucu gelişir. Bu mineral dengesizliği sekonder hiperparatiroidizmi tetikleyerek artmış osteoklastik kemik yıkımına, fasiyal kemiklerde litik/sklerotik 'tuz-biber' görünümüne ve lamina dura kayıplarına yol açar. Diğer hormonal mekanizmalar bu sürecin primer nedeni değildir.

**Soru 2 (ID: 9ec7babe-8a39-40be-8a5f-ad9658d4bb53)**
Soru Kökü: 50 yaşında kronik diyaliz hastasının panoramik radyografisinde maksilla ve mandibulada ekspansiyon ile lamina dura kaybı izlenmiştir. Bu hastanın trabeküler yapısı detaylı incelendiğinde Tablo 13'e göre hangi spesifik radyografik görünüm saptanır?
Doğru Şık (D): Granüler trabekül yapısı
Açıklama: Böbrek yetmezliğine bağlı renal osteodistrofi hastalarında çene trabekülleri granüler bir yapı (tuz-biber görüntüsü) alır. Hair-on-end orak hücreli anemide, dövülmüş bakır hipofosfatazyada, pamuk yumağı ise Paget hastalığında izlenirken, granüler yapı sekonder hiperparatiroidizm kökenli hastalıklarda spesifiktir.

---

### ÇİFT 425 (Benzerlik: 0.69)

**Soru 1 (ID: a73aaf43-394b-4007-9158-4daf4afa2f2d)**
Soru Kökü: Hipofosfatemi (D vitaminine dirençli rikets) sendromunda diş ve çevre dokularda görülen patolojik bulgularla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Klinik çürük olmaksızın gelişen apikal apseler, dişlerin tamamen sementle kaplanmasına (hipersementoz) bağlıdır.
Açıklama: Hipofosfatemide dentin hipoplazisine ve yetersiz mineralizasyona bağlı genişlemiş pulpa odaları bulunur. Bu anatomik zayıflık, klinik bir çürük lezyonu olmasa dahi mikroorganizmaların ince mine/dentin çatlaklarından direkt pulpaya ulaşarak apse yapmasına yol açar. Apsenin sebebi hipersementoz değil, diş sert dokularının kalitesiz oluşumudur. Hipersementoz akromegali veya Paget gibi hastalıklarda görülür.

**Soru 2 (ID: a7a77719-78a2-4f0e-bcbc-c0f170c1a432)**
Soru Kökü: Aşırı fosfor atılmasına yol açan renal tübüler bozuklukların neden olduğu hipofosfatemik (D vitaminine dirençli) rikets tablosunda çene kemik dansitesinde hangi değişim izlenir?
Doğru Şık (B): Dansitede azalma
Açıklama: Hipofosfatemide normal kalsifikasyon için gerekli fosfor seviyesinin sağlanamaması, osteoidin mineralizasyonunu bozar ve radyografide kemik dansitesinde azalma ile karakterize bir tablo yaratır. Bu durum sıklıkla genişlemiş pulpa odaları ve dişlerde apikal apselerle komplike olur. Dansite artışı (skleroz) bu mineralizasyon defektinde fizyolojik olarak beklenmez.

---

### ÇİFT 426 (Benzerlik: 0.69)

**Soru 1 (ID: 637dfd0e-a502-4c20-ab1c-a1602654da70)**
Soru Kökü: Kronik böbrek yetmezliği olan 55 yaşında bir hastada sekonder hiperparatiroidizm geliştiği tespit edilmiştir. Renal osteodistrofi (renal rikets) tanılı bu hastanın çene kemik dansitesinde beklenen birincil radyografik değişim Tablo 13'e göre hangisidir?
Doğru Şık (A): Dansitede azalma
Açıklama: Renal osteodistrofide kalsiyum absorbsiyonu azalır ve böbrekten fosfor atılamamasına bağlı sekonder hiperparatiroidizm tetiklenir. Bu durum radyografik olarak çene kemik dansitesinde generalize azalmaya ve kortikal incelmeye yol açar. Klasik bulgu azalma olmasına rağmen lokal osteosklerotik alanlarla karşılaşılabilir, ancak birincil değişim dansite azalmasıdır.

**Soru 2 (ID: bbf17920-94c7-41d4-be42-56610d4b815c)**
Soru Kökü: Hiperparatiroidizmde iskelet sisteminde görülen yaygın demineralizasyon süreci çenelere yansıdığında, radyografik değerlendirmede aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Tüm çene kemiklerinin dansitesinde artış
Açıklama: Hastalıkta yoğun osteoklastik aktivite sonucu iskelet sisteminde demineralizasyon gelişir, bu durum çene radyografilerine çene dansitesinde belirgin bir 'azalma' (radyolüsensi) olarak yansır. Kemik yoğunluğunda artış bu tablonun tam zıttıdır ve osteopetrozis gibi hastalıklarda görülür.

---

### ÇİFT 427 (Benzerlik: 0.69)

**Soru 1 (ID: 0e6c9cc8-d3d6-4709-8bf1-a2f97ad83a51)**
Soru Kökü: D vitamini dirençli rikets (hipofosfatemi) hastalarının dental özellikleriyle ilgili olarak; geniş pulpa odaları ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, klinikte en sık hangi spesifik komplikasyona yol açar?
Doğru Şık (C): Çürük olmaksızın gelişen spontan periapikal ve periodontal apseler
Açıklama: Hipofosfatemi hastalarında mine tabakasının yapısal inceliği ve pulpa boynuzlarının mine-dentin sınırına kadar uzanması, en ufak bir mikroskobik çatlak veya atrisyonda mikroorganizmaların doğrudan pulpaya ulaşmasına neden olur. Bu durum hastanın dişlerinde herhangi bir görünür çürük defekti olmamasına rağmen spontan periapikal ve periodontal apse gelişiminin en temel nedenidir. Süt dişlerinin travmasız erken dökülmesi ise hipofosfatazya için spesifiktir.

**Soru 2 (ID: 4d893071-77ae-4f58-ae9d-f9402266cca9)**
Soru Kökü: Metabolik kemik hastalıklarına sahip iki farklı çocuk hastadan birincisinde 'süt kesici dişlerinin kök rezorpsiyonu olmaksızın spontan erken dökülmesi', ikincisinde ise 'sağlam (çürüksüz) dişlerde genişlemiş pulpa boynuzlarına bağlı spontan periapikal apseler' saptanmıştır. Bu klinik senaryolara göre, birinci ve ikinci hastanın en olası ayırıcı tanıları sırasıyla aşağıdakilerden hangisidir?
Doğru Şık (B): Hipofosfatazya - Hipofosfatemi
Açıklama: Süt dişlerinin travma veya fizyolojik kök rezorpsiyonu olmaksızın erken dökülmesi (özellikle kesiciler), alkalen fosfataz eksikliği ile seyreden hipofosfatazya sendromunun pathognomonik majör bulgusudur. Buna karşın dişlerin pulpa boynuzlarının mine-dentin sınırına kadar uzanarak çürük olmaksızın mikroorganizma invazyonuna (spontan periapikal apseler) yol açması, D vitamini dirençli rikets olan hipofosfatemi hastalığının en belirgin ayırıcı komplikasyonudur.

---

### ÇİFT 428 (Benzerlik: 0.69)

**Soru 1 (ID: 85fa4a47-dc42-4517-af50-5442876c2957)**
Soru Kökü: Beş yaşında D vitamini dirençli rikets (hipofosfatemi) teşhisiyle takip edilen kız hastada, şiddetli ağrı şikayetinin ardından tekrarlayan periapikal ve periodontal apseler saptanmıştır. Bu klinik durumun doğal ilerleyişinde söz konusu hastalarda Tablo 14'e göre aşağıdaki komplikasyonlardan hangisinin görülmesi karakteristiktir?
Doğru Şık (E): Erken diş kaybı
Açıklama: Hipofosfatemi hastalarında genişlemiş pulpa odaları, ince sert doku tabakaları ve kolayca gelişen periapikal/periodontal apseler sekonder olarak erken diş kaybına yol açar. Dişlerin gömülü kalması veya ankiloz olması bu hastalığın direkt veya primer karakteristiği değildir; temel sorun enfeksiyöz yıkımdır. Hastalarda gelişen spesifik maloklüzyonlar da bu diş kayıplarıyla ilişkilidir.

**Soru 2 (ID: ce3c9865-f4ca-4bc5-9d35-f23d1b777995)**
Soru Kökü: Renal osteodistrofi tanısı olan 14 yaşındaki kız hastanın diş yüzeylerinde şekil bozuklukları şikayeti mevcuttur. Ağız içi muayenesinde dişlerde gelişimsel sert doku eksiklikleri gözlenmiştir. Bu hastada diş dokularında mine ve dentin oluşumunu etkileyen temel patolojik bulgu olarak aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (B): Mine hipoplazisi
Açıklama: Renal osteodistrofi hastalarında hipokalsemi ve hiperfosfatemi, ameloblastların normal matriks sentezini bozarak dişlerde mine hipoplazisine neden olur. Hipersementoz daha çok akromegali veya Paget hastalığı gibi durumlarda izlenirken, böbrek yetmezliğine bağlı kemik hastalıklarında hipoplazi ve hipokalsifikasyon bir aradadır. Hastalarda ayrıca lamina durada silinme ve tuz-biber manzarası gözlenir.

---

### ÇİFT 429 (Benzerlik: 0.69)

**Soru 1 (ID: 822cd981-2d05-4929-b11d-2c5845e70555)**
Soru Kökü: Tablo verileri ve fizyopatolojik mekanizmalara göre, sistemik kemik metabolizma hastalıkları dentin ve minenin sertleşme ve olgunlaşma aşamalarını etkileyerek hipokalsifikasyon yaratabilirler. Aşağıdaki hastalıklardan hangisinin dentisyon üzerinde hipokalsifikasyon yapıcı bir sekonder etkisi **yoktur**?
Doğru Şık (B): Osteoporozis
Açıklama: Diş dokuları bir kez mineralize olduktan sonra (özellikle mine ve dentin) kemik gibi kalsiyum deposu olarak dolaşıma geri katılmazlar. Rikets, hipofosfatemi, hipofosfatazya, renal osteodistrofi ve osteopetrozis dişlerin GELİŞİM aşamasında kalsiyum/fosfor dengesini bozarak zayıf mineralize (hipokalsifiye/hipoplazik) dişler oluştururlar. Osteoporozis ise yaşlılık/menopoz sonrasında (dişler çoktan oluştuktan sonra) var olan kemiği eritir, dolayısıyla diş anatomisinde hipokalsifikasyon yapmaz.

**Soru 2 (ID: 88df1e24-9013-4649-8120-683ef730b9d9)**
Soru Kökü: Alkalen fosfataz enziminin işlev bozukluğuna bağlı gelişen hipofosfatazya sendromunda kemik ve diş dokusu kalsifikasyonu derinden etkilenir. Tablo 14 bulguları ışığında bu hastalarda aşağıdaki dental durumlardan hangisi **izlenmez**?
Doğru Şık (C): Kök kanal boyutlarında sklerotik daralma
Açıklama: Hipofosfatazyada ALP eksikliği sebebiyle sement üretimi sekteye uğrar (erken diş kaybı), mine ve dentin hipokalsifiye kalır (Tablo 14: Hipokalsifikasyon ve Hipoplazi = Evet). Pulpa kalsifikasyon yapamadığı için kök kanalları daralmaz, tam aksine Tablo 14'te vurgulandığı gibi "genişlemiş pulpa odası" ve artmış kök kanalı boşlukları ile "kabuk diş" görünümü verir.

---

