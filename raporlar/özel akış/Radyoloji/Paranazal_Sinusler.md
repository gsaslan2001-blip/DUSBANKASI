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

**Soru 1 (ID: 942c9165-16c7-4fd3-be04-a6d00bd9cf4f)**
Soru Kökü: Kronik sinüzit tedavisinde genellikle konservatif yöntemler tercih edilse de belirli klinik krizlerde radikal cerrahi şarttır. Aşağıdakilerden hangisi radikal sinüs cerrahisi yapılması için kesin bir endikasyon **değildir**?
Doğru Şık (D): Antibiyotik tedavisine yanıt veren akut alevlenme periyodu
Açıklama: Antibiyotik veya dekonjestan gibi medikal tedaviye (konservatif yöntemlere) olumlu cevap veren akut alevlenmeler doğrudan cerrahi değil, medikal takip gerektirir. Mukosel, orbital apse, kemik nekrozu veya intrakranial ilerleme durumlarında ise drenaj ve enfekte dokunun çıkarılması zorunludur. Radikal cerrahi kararı geri dönüşümsüz veya hayati yapıları tehdit eden patolojilerde alınır.

**Soru 2 (ID: a93199af-f8aa-4847-bf04-dab43e2da892)**
Soru Kökü: Kronik sinüzit tedavisinde medikal yaklaşımların yetersiz kaldığı durumlarda radikal cerrahi prosedürlere başvurulabilir. Aşağıdakilerden hangisi kronik maksiller sinüzitte radikal cerrahi endikasyonu taşıyan durumlardan biri **değildir**?
Doğru Şık (E): Normal lamina dura bütünlüğüne sahip 2 mm'lik mukozal kalınlaşma
Açıklama: Genel olarak 2 mm ve üzerindeki mukozal kalınlaşmalar patolojik (mukozit) sayılsa da, izole ve asemptomatik küçük kalınlaşmalar kendi başına agresif bir radikal cerrahi endikasyonu oluşturmaz. Mukosel, fistül, kafa içi komplikasyon ve orbital komplikasyonlar ise acil cerrahi drenaj ve debridman gerektiren tehlikeli tablolardır.

---

### ÇİFT 2 (Benzerlik: 0.80)

**Soru 1 (ID: 9ac60142-d98f-4eec-9804-34acb9e3f2d8)**
Soru Kökü: Otuz beş yaşındaki kadın hasta; sağ burun deliğinde tıkanıklık, kötü kokulu akıntı ve kokuları kötü algılama (kakozmi) şikayetiyle başvurmuştur. Görüntülemelerde sağ maksiller sinüs içerisinde yuvarlak, iyi sınırlı ve kalsifiye bir nidus etrafında şekillenmiş radyoopak bir kitle saptanmıştır. Bu tabloya neden olan en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Antrolit
Açıklama: Antrolit, kalsiyum tuzlarının bir nidus etrafında çökelmesiyle oluşan ve kronik sinüziti tetikleyerek pürülan akıntı, kakozmi (kötü koku algılama) ve anozmiye yol açan kalsifiye bir kitledir. Osteom da kalsifiyedir ancak genellikle aseptomatiktir ve kakozmi/pürülan akıntı gibi enfektif semptomlar yaratmaz.

**Soru 2 (ID: ed19afb0-461a-42a4-bf2d-ee037cf7198d)**
Soru Kökü: Elli yaşında kadın hasta, burnundan gelen kötü kokulu pürülan akıntı, kakozmi (kötü koku algısı) ve sağ maksiller posterior bölgede üç ay önce çekilmiş diş boşluğundan gelen sıvı şikayetiyle başvuruyor. Panoramik grafide sağ maksiller sinüs içinde homojen olmayan radyoopak bir kitle izlenirken, kitlenin içerisinde mine veya pulpa yapısı ayırt edilemiyor. Bu hastada **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Oroantral fistül zemininde gelişmiş antrolit
Açıklama: Hastadaki oroantral fistül, uzun süreli kronik enflamasyon ve enfeksiyona yol açar. Kötü koku (kakozmi) ve pürülan akıntı kronik enfeksiyonun bulgularıdır. Pulpa veya mine barındırmayan radyoopak kitle, bu enflamatuar nidiüs (fistül/yabancı cisim vb.) etrafında çökelen kalsiyum tuzlarının oluşturduğu bir 'antrolit'tir. Odontoma ve kök parçaları pulpa/mine bulgularıyla bu durumdan ayrılır.

---

### ÇİFT 3 (Benzerlik: 0.80)

**Soru 1 (ID: 2b9c2652-a76b-4b59-909b-d7a28f5014a6)**
Soru Kökü: Bir paranazal radyografide maksiller sinüs tabanında izlenen radyopasitenin retansiyon psödokisti olduğunu gösterip, benign bir neoplazm (örn: odontoma) olasılığını ekarte eden en temel görüntüleme farklılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Oluşumun kortikal bir kemik sınırla çevrili olmaması
Açıklama: Retansiyon psödokistleri sadece mukozal bir şişlik olduklarından kemiksel (kortikal) bir sınır (halo) barındırmazlar ve sinüs içi hava ile yumuşakça örtüşürler. Odontojenik kistler veya benign neoplazmlar ise intraosseoz kökenli oldukları için genellikle ince radyoopak bir sınırla sinüs boşluğundan ayrılırlar. Kalsifikasyon retansiyon psödokistinde görülen bir özellik değildir.

**Soru 2 (ID: 7df7de4a-0c0a-4110-bba9-ae99e5e18dcb)**
Soru Kökü: 35 yaşında asemptomatik kadın hastanın rutin panoramik radyografisinde sağ maksiller sinüs tabanında kubbe şeklinde homojen bir radyoopasite saptanıyor. Bu lezyonun epitel döşeli bir odontojenik kist yerine, benign bir retansiyon psödokisti olduğunu savunan bir hekimin dayandığı en güçlü radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kortikal sınırla çevrili olmaması ve komşu dişlerin lamina dura devamlılığının bozulmaması
Açıklama: Retansiyon psödokistleri odontojenik kist ve tümörlerde görülen kortikal sınıra sahip değildir ve çevresel kemik yıkımı yapmadıkları için komşu dişlerin lamina dura bütünlüğünü bozmazlar. Odontojenik kistler ise sınırları belirli radyografik kortikal bir hatta sahiptir ve sıklıkla kök bölgesindeki lamina durayı harabiyete uğratırlar.

---

### ÇİFT 4 (Benzerlik: 0.79)

**Soru 1 (ID: 2b9c2652-a76b-4b59-909b-d7a28f5014a6)**
Soru Kökü: Bir paranazal radyografide maksiller sinüs tabanında izlenen radyopasitenin retansiyon psödokisti olduğunu gösterip, benign bir neoplazm (örn: odontoma) olasılığını ekarte eden en temel görüntüleme farklılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Oluşumun kortikal bir kemik sınırla çevrili olmaması
Açıklama: Retansiyon psödokistleri sadece mukozal bir şişlik olduklarından kemiksel (kortikal) bir sınır (halo) barındırmazlar ve sinüs içi hava ile yumuşakça örtüşürler. Odontojenik kistler veya benign neoplazmlar ise intraosseoz kökenli oldukları için genellikle ince radyoopak bir sınırla sinüs boşluğundan ayrılırlar. Kalsifikasyon retansiyon psödokistinde görülen bir özellik değildir.

**Soru 2 (ID: 2c225743-4322-4ab0-80d5-5ee09cf2461d)**
Soru Kökü: Maksiller sinüste izlenen retansiyon psödokistlerinin radyografik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Etrafı belirgin bir kortikal sınırla **çevrilidir**.
Açıklama: Retansiyon psödokistleri, odontojen kistlerden farklı olarak etrafı ince bir kortikal sınırla çevrili DEĞİLDİR. Bu kortikal sınır yokluğu ve kubbe şekilli büyüme deseni, lezyonun odontojenik kist veya neoplazmlardan ayrımında kullanılan en kritik ayırıcı tanı kriteridir.

---

### ÇİFT 5 (Benzerlik: 0.78)

**Soru 1 (ID: 2c225743-4322-4ab0-80d5-5ee09cf2461d)**
Soru Kökü: Maksiller sinüste izlenen retansiyon psödokistlerinin radyografik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Etrafı belirgin bir kortikal sınırla **çevrilidir**.
Açıklama: Retansiyon psödokistleri, odontojen kistlerden farklı olarak etrafı ince bir kortikal sınırla çevrili DEĞİLDİR. Bu kortikal sınır yokluğu ve kubbe şekilli büyüme deseni, lezyonun odontojenik kist veya neoplazmlardan ayrımında kullanılan en kritik ayırıcı tanı kriteridir.

**Soru 2 (ID: 7df7de4a-0c0a-4110-bba9-ae99e5e18dcb)**
Soru Kökü: 35 yaşında asemptomatik kadın hastanın rutin panoramik radyografisinde sağ maksiller sinüs tabanında kubbe şeklinde homojen bir radyoopasite saptanıyor. Bu lezyonun epitel döşeli bir odontojenik kist yerine, benign bir retansiyon psödokisti olduğunu savunan bir hekimin dayandığı en güçlü radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kortikal sınırla çevrili olmaması ve komşu dişlerin lamina dura devamlılığının bozulmaması
Açıklama: Retansiyon psödokistleri odontojenik kist ve tümörlerde görülen kortikal sınıra sahip değildir ve çevresel kemik yıkımı yapmadıkları için komşu dişlerin lamina dura bütünlüğünü bozmazlar. Odontojenik kistler ise sınırları belirli radyografik kortikal bir hatta sahiptir ve sıklıkla kök bölgesindeki lamina durayı harabiyete uğratırlar.

---

### ÇİFT 6 (Benzerlik: 0.78)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: 7df7de4a-0c0a-4110-bba9-ae99e5e18dcb)**
Soru Kökü: 35 yaşında asemptomatik kadın hastanın rutin panoramik radyografisinde sağ maksiller sinüs tabanında kubbe şeklinde homojen bir radyoopasite saptanıyor. Bu lezyonun epitel döşeli bir odontojenik kist yerine, benign bir retansiyon psödokisti olduğunu savunan bir hekimin dayandığı en güçlü radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kortikal sınırla çevrili olmaması ve komşu dişlerin lamina dura devamlılığının bozulmaması
Açıklama: Retansiyon psödokistleri odontojenik kist ve tümörlerde görülen kortikal sınıra sahip değildir ve çevresel kemik yıkımı yapmadıkları için komşu dişlerin lamina dura bütünlüğünü bozmazlar. Odontojenik kistler ise sınırları belirli radyografik kortikal bir hatta sahiptir ve sıklıkla kök bölgesindeki lamina durayı harabiyete uğratırlar.

---

### ÇİFT 7 (Benzerlik: 0.78)

**Soru 1 (ID: 2b9c2652-a76b-4b59-909b-d7a28f5014a6)**
Soru Kökü: Bir paranazal radyografide maksiller sinüs tabanında izlenen radyopasitenin retansiyon psödokisti olduğunu gösterip, benign bir neoplazm (örn: odontoma) olasılığını ekarte eden en temel görüntüleme farklılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Oluşumun kortikal bir kemik sınırla çevrili olmaması
Açıklama: Retansiyon psödokistleri sadece mukozal bir şişlik olduklarından kemiksel (kortikal) bir sınır (halo) barındırmazlar ve sinüs içi hava ile yumuşakça örtüşürler. Odontojenik kistler veya benign neoplazmlar ise intraosseoz kökenli oldukları için genellikle ince radyoopak bir sınırla sinüs boşluğundan ayrılırlar. Kalsifikasyon retansiyon psödokistinde görülen bir özellik değildir.

**Soru 2 (ID: 8d4c5fd4-2300-455d-bcbb-4cf32e9d31f8)**
Soru Kökü: Bir paranazal sinüs radyografisinde izlenen kistik kitlelerin, basit retansiyon psödokistlerinden ziyade enflamatuar polip olma ihtimalini en çok artıran spesifik görüntüleme bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kitleye difüz mukozal kalınlaşmaların eşlik etmesi
Açıklama: Polipler kronik olarak enflame olmuş sinüs müköz membranının oluşturduğu düzensiz katlantılar olduğundan, her zaman jeneralize bir mukozal kalınlaşma zemininde gelişirler. Retansiyon psödokistleri ise genellikle normal incelikteki bir mukoza üzerinde izole kubbe yapısı şeklinde dururlar. Kortikal sınır her ikisinde de yoktur, varsa kistik/neoplastik bir ayrım düşünülmelidir.

---

### ÇİFT 8 (Benzerlik: 0.78)

**Soru 1 (ID: 4e111342-ce1b-4327-b439-dc2b1a6b4544)**
Soru Kökü: Aşağıdaki patolojilerden hangisi maksiller sinüs içinde gelişmeye başlayıp ostiumdan çıkarak nazal kaviteye veya koanaya doğru uzanım gösteren, histolojik olarak kronik enflamatuar yapıdaki soliter kitleyi tanımlar?
Doğru Şık (E): Antrokoanal polip
Açıklama: Antrokoanal polip, maksiller antrumdan köken alıp ostiumdan geçerek koanaya sarkan soliter sinonazal polip tipidir ve obstrüksiyon semptomlarına yol açar. İnverted papillom lateral nazal duvardan kaynaklanıp sinüse girme eğilimindeyken, antrokoanal polip sinüsten çıkıp nazal kaviteye sarkar. Retansiyon psödokistleri soliterdir ancak ostiumdan ekstrüze olacak kadar obstrüktif büyüme genellikle göstermezler.

**Soru 2 (ID: 5a675a34-0326-43d7-ac49-b0fd4b58c1b0)**
Soru Kökü: Otuz sekiz yaşında erkek hasta, tek taraflı şiddetli burun tıkanıklığı ve öksürükle ağızdan da görülebilen, posteriora doğru sarkan bir yumuşak doku kitlesi şikayetiyle başvuruyor. Alınan BT kesitlerinde, maksiller sinüs lümeninde yer alan kitlenin medial duvarda kemik harabiyetine neden olduğu gözleniyor.
Bu klinik tabloya yol açan ve soliter sinonazal lezyon karakterinde olan **en olası** benign patoloji aşağıdakilerden hangisidir?
Doğru Şık (A): Antrokoanal polip
Açıklama: Antrokoanal polipler, doğrudan maksiller sinüs kaynaklı soliter enflamatuar poliplerdir ve büyüdükçe anatomik ostium yoluyla nazofarenkse prolabe olarak ağızdan izlenebilir hale gelebilirler. Benign karakterde olmalarına rağmen ekspansif büyümeleri nedeniyle kemik harabiyeti ve komşu yapıları deplase etme potansiyeli taşırlar; bu radyolojik agresiflik nedeniyle malign tümörleri (ör. karsinom) taklit edebilirler. Skuamöz hücreli karsinom benzer şiddette destrüksiyon yapsa da 'benign soliter sinonazal lezyon' tanımı ve yaş profili doğrudan antrokoanal polipi işaret eder.

---

### ÇİFT 9 (Benzerlik: 0.77)

**Soru 1 (ID: b3ed38c2-d20c-464b-806f-1d241aa7445e)**
Soru Kökü: Maksiller büyük azı dişinin çekimi esnasında dişin palatinal kökü aniden gözden kaybolmuştur. Hekim kökün sinüs zarını (Schneiderian membran) yırtarak sinüs lümenine kaçıp kaçmadığını klinik olarak anlamak için hastadan burnunu eliyle kapatarak ve ağzını açık tutarak hafifçe burnundan hava vermesini ister.
Bu provokasyon sırasında soket tabanındaki kan gölcüğünde köpürme veya hava kabarcıkları izlenmesi fizyolojik olarak neyin kanıtıdır?
Doğru Şık (B): Alveolar kemik ile sinüs lümeni arasında oroantral iştirak oluştuğunu
Açıklama: Burun hava yolu kapatılıp nazofarenks yoluyla hava üflendiğinde (modifiye Valsalva manevrası), paranazal sinüsler içindeki statik basınç keskin bir şekilde artar. Eğer travmatik çekim sonucu maksiller sinüs taban kemiği ve zarı yırtılarak ağız ortamıyla bir kanal (oroantral fistül/iştirak) meydana gelmişse, artan hava basıncı bu yırtıktan ağız boşluğuna kaçmaya çalışır. Havanın sokette biriken kan veya tükürük sıvısının içinden geçişi, doğrudan görsel köpürme veya baloncuklanma yaratarak anatomik bariyerin tamamen ihlal edildiğini hekime kesin olarak mekanize eder.

**Soru 2 (ID: fe8930ab-0307-4072-bf03-a27dcc1f690f)**
Soru Kökü: Zorlu bir üst molar diş çekimi esnasında hekim, çekim soketinden kanla karışık hava kabarcıkları geldiğini fark etmiştir. Bu klinik bulgunun doğrulanması ve kırık bir kökün maksiller sinüse kaçıp kaçmadığının anlaşılması için hastaya yapılması gereken manevra/test aşağıdakilerden hangisidir?
Doğru Şık (C): Hastanın burnu tutulup burnundan hava vermesi istenir ve sokette baloncuk oluşumu aranır.
Açıklama: Oroantral fistülün (iştirakin) klinik tespiti için Valsalva benzeri manevra kullanılır: Hastanın burnu kapatılır ve burnundan hava vermesi istenir. Eğer sinüs tabanı açılmışsa, hava sinüsten ağız boşluğuna doğru geçerek çekim soketindeki kanın içerisinde baloncuklar oluşturur. Bu durum sinüse kök kaçması ihtimalini güçlendirir.

---

### ÇİFT 10 (Benzerlik: 0.77)

**Soru 1 (ID: c9b280b7-1c06-49ca-b0da-99da53d88414)**
Soru Kökü: Maksiller sinüs bölgesinde yaygın radyoopak skleroz durumlarında ayırıcı tanıya gidilirken, lezyonun Fibröz Displazi mi yoksa kemik yapım-yıkım hastalığı olan Paget mi olduğunu ayırt etmede klinisyene yardımcı olan en net radyografik özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Paget hastalığının maksiller kemiği genişletmesine rağmen sinüs obliterasyonuna yol açmaması
Açıklama: Her iki hastalık da maksillada kemik genişlemesi ve opasite artışı yapar. Ancak Fibröz displazi sinüs içine doğru kütlesel büyüyerek sinüs hava boşluğunu tamamen kapatabilir (obliterasyon). Paget hastalığında ise kemik kaba ve büyük hale gelse de, sinüs lümeni sekonder olarak oblitere olmaz. Ayrıca Paget daha çok 40 yaş üstü erişkin hastalığıdır.

**Soru 2 (ID: d03ef412-fca4-47cd-bef4-5fc8bc9df48d)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ yanakta yavaş gelişen asimetri şikayetiyle başvuruyor. Alınan panoramik radyografta, sağ maksiller sinüsü tamamen dolduran ve sinüs sınırlarını silikleştiren 'buzlu cam' manzarasında radyoopak bir genişleme izleniyor. Elde edilen bulgularla fibröz displazi düşünülen bu hastada, ayırıcı tanıda yer almasına rağmen 'maksiller sinüs obliterasyonuna yol açmaması' karakteristik özelliği ile dışlanması gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Paget hastalığı
Açıklama: Fibröz displazi, maksiller sinüste kemik yapımı ile obliterasyona ve buzlu cam görüntüsüne neden olabilir. Ancak ayırıcı tanıda yer alan Paget hastalığı karakteristik olarak sinüs obliterasyonu yapmaz. Ossifiye fibrom ise yumuşak doku kapsülü bulundurur ve fibröz displaziye benzer şekilde sinüste genişleme veya obliterasyon yapabilir.

---

### ÇİFT 11 (Benzerlik: 0.77)

**Soru 1 (ID: 18dbdb0e-c41c-4d59-9a4e-63292c6be06a)**
Soru Kökü: Maksiller sinüs boşluğunda veya tabanına yakın bölgede izlenen düzensiz radyoopak bir kitlenin; bir antrolit, ekzostoz veya septa değil de sinüs içerisine kaçmış bir 'diş kökü' olduğunu kanıtlayan **en güçlü** radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Yapının merkezinde pulpa kanalı veya çevresinde mine tabakasının seçilmesi
Açıklama: Sinüs içindeki ekzostozlar, anatomik septalar veya antrolitler konvansiyonel grafilerde kök parçalarına çok benzeyebilir. Bir yapının kesinlikle diş veya diş kökü olduğunu gösteren en güçlü anatomik belirteç, iç yapısındaki pulpa kanalının veya dişin mine dokusunun radyografik olarak izlenebilmesidir. Radyoopasitenin konumu veya destrüksiyon yapmaması antrolitler için de geçerlidir.

**Soru 2 (ID: 6f650c71-9a08-4e9c-b78c-d58a05b21e97)**
Soru Kökü: Üst posterior bölgede komplike bir diş çekimi sırasında kırılan bir kök parçasının, maksiller sinüs lümeninin içerisine mi kaçtığı, yoksa süperpozisyona uğrayıp halen alveolar kret kemiği içinde mi kaldığı hususunda klinik şüphe bulunmaktadır. Radyografik değerlendirmede kök parçasının alveolar soket içinde kaldığını doğrulayan en majör yapısal kanıt aşağıdakilerden hangisidir?
Doğru Şık (D): Kök çevresinde lamina dura veya periodontal ligament aralığının izlenmeye devam etmesi
Açıklama: Kök sokette kalmış olmasına rağmen çekim açısına bağlı olarak radyografide sinüse süperpoze gibi durabilir. Ancak kök etrafında dişin fizyolojik anatomik sınırlarını gösteren lamina dura radyopasitesinin veya periodontal ligament aralığının (radyolüsensi) varlığını sürdürmesi, o kökün halen alveolar kemik yuvasının içinde olduğunu kesin olarak gösterir.

---

### ÇİFT 12 (Benzerlik: 0.76)

**Soru 1 (ID: 6fcb59ab-9f01-486e-9ae0-c477bd607aa3)**
Soru Kökü: Maksiller sinüs patolojilerinin değerlendirilmesinde kullanılan periapikal radyografi tekniği ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Kavitenin superior bölümlerinin ve ostiumun incelenmesinde en uygun yöntemdir.
Açıklama: Periapikal radyografi tekniği detayı çok net vermesine karşın, sadece sinüs tabanını ve kavitenin inferior kısımlarını gösterebilir. Superior kısımların ve ostium gibi üst anatomik yapıların izlenmesinde panoramik veya BT/MRG gibi ileri görüntüleme yöntemlerine ihtiyaç duyulur. Bu kısıtlı görüş alanı, periapikal grafilerin sinüs taramalarındaki en temel dezavantajıdır.

**Soru 2 (ID: e8ed6b5d-20ab-4772-aa35-9fcd37eb43d6)**
Soru Kökü: Diş hekimliğinde maksiller sinüs hastalıklarının ve internal radyoopasitelerin ön tanısında kullanılan geleneksel radyolojik görüntüleme algoritmalarıyla ilgili aşağıdaki açıklamalardan hangisi **yanlıştır**?
Doğru Şık (C): Panoramik radyografi sağ-sol sinüs lümen yoğunluklarını fantom gölgeler olmadan, orta hat yapılarını maskelemeden en net gösteren sistemdir.
Açıklama: Panoramik radyografi tomografik tabaka prensibiyle çalıştığı için rotasyon merkezi dışındaki yapıları siler ancak aynı zamanda x-ışını demetinin doğası gereği servikal omurga ve başın karşı tarafındaki sert dokuların (örneğin karşı taraf ramus mandibula) ikincil, bulanık 'fantom gölgelerini' tam da orta hat ve maksiller sinüsler üzerine düşürür. Bu durum, orta hat ve her iki sinüs radyodansitesinin temiz bir şekilde incelenmesini ve sağ-sol lümen parlaklığı kıyaslamasını imkansız hale getirir. Bu nedenle panoramik filmler internal sinüs yoğunluk değerlendirmesi için asla güvenilir kabul edilmez.

---

### ÇİFT 13 (Benzerlik: 0.76)

**Soru 1 (ID: 5828a966-b961-4ddc-a91b-f91bd53a47b1)**
Soru Kökü: Bir maksiller sinüs lezyonunun spesifik olarak sinüsün sadece anterior bölümünde lokalize olduğu düşünülmektedir. Diğer sinüs bölgelerine radyasyon vermeden yalnızca bu sınırlı alanı iki boyutlu incelemek isteyen bir hekimin öncelikle tercih etmesi gereken radyografik yöntem aşağıdakilerden hangisidir?
Doğru Şık (A): Oklüzal grafi
Açıklama: Oklüzal grafiler, maksiller sinüsün spesifik olarak anterior kısmını ve sınırlı bir alanı yansıtan bölgesel değerlendirme araçlarıdır. Waters grafisi tüm maksiller sinüsü, frontal ve etmoid hücreleri gösterirken, anterior sınırlı bir alan için fazla radyasyon alanına sahiptir. Oklüzal grafilerin dezavantajı sağ ve sol tarafı karşılaştırma imkanı sunmamasıdır.

**Soru 2 (ID: e70f446a-5953-426a-bb1a-4303c0985413)**
Soru Kökü: İnternal radyoopasitelerin sağ-sol olarak kıyaslanmasında ve özellikle maksiller sinüslerle birlikte frontal sinüsler ve etmoid hava hücrelerinin eşzamanlı, net görüntülenmesinde tercih edilen en uygun konvansiyonel radyografik yöntem aşağıdakilerden hangisidir?
Doğru Şık (B): Waters grafisi
Açıklama: Waters grafisi, başın spesifik bir açıyla konumlandırılmasıyla maksiller sinüslerin, frontal sinüslerin ve etmoid hava hücrelerinin aynı anda görüntülenerek sağ-sol opasite karşılaştırmasının yapıldığı en ideal konvansiyonel yöntemdir. Panoramik radyografide hayalet (fantom) imajların ve diğer dokuların süperpozisyonu nedeniyle internal opasitelerin kıyaslanması yanıltıcı olabilir.

---

### ÇİFT 14 (Benzerlik: 0.75)

**Soru 1 (ID: 5a675a34-0326-43d7-ac49-b0fd4b58c1b0)**
Soru Kökü: Otuz sekiz yaşında erkek hasta, tek taraflı şiddetli burun tıkanıklığı ve öksürükle ağızdan da görülebilen, posteriora doğru sarkan bir yumuşak doku kitlesi şikayetiyle başvuruyor. Alınan BT kesitlerinde, maksiller sinüs lümeninde yer alan kitlenin medial duvarda kemik harabiyetine neden olduğu gözleniyor.
Bu klinik tabloya yol açan ve soliter sinonazal lezyon karakterinde olan **en olası** benign patoloji aşağıdakilerden hangisidir?
Doğru Şık (A): Antrokoanal polip
Açıklama: Antrokoanal polipler, doğrudan maksiller sinüs kaynaklı soliter enflamatuar poliplerdir ve büyüdükçe anatomik ostium yoluyla nazofarenkse prolabe olarak ağızdan izlenebilir hale gelebilirler. Benign karakterde olmalarına rağmen ekspansif büyümeleri nedeniyle kemik harabiyeti ve komşu yapıları deplase etme potansiyeli taşırlar; bu radyolojik agresiflik nedeniyle malign tümörleri (ör. karsinom) taklit edebilirler. Skuamöz hücreli karsinom benzer şiddette destrüksiyon yapsa da 'benign soliter sinonazal lezyon' tanımı ve yaş profili doğrudan antrokoanal polipi işaret eder.

**Soru 2 (ID: 9ac60142-d98f-4eec-9804-34acb9e3f2d8)**
Soru Kökü: Otuz beş yaşındaki kadın hasta; sağ burun deliğinde tıkanıklık, kötü kokulu akıntı ve kokuları kötü algılama (kakozmi) şikayetiyle başvurmuştur. Görüntülemelerde sağ maksiller sinüs içerisinde yuvarlak, iyi sınırlı ve kalsifiye bir nidus etrafında şekillenmiş radyoopak bir kitle saptanmıştır. Bu tabloya neden olan en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Antrolit
Açıklama: Antrolit, kalsiyum tuzlarının bir nidus etrafında çökelmesiyle oluşan ve kronik sinüziti tetikleyerek pürülan akıntı, kakozmi (kötü koku algılama) ve anozmiye yol açan kalsifiye bir kitledir. Osteom da kalsifiyedir ancak genellikle aseptomatiktir ve kakozmi/pürülan akıntı gibi enfektif semptomlar yaratmaz.

---

### ÇİFT 15 (Benzerlik: 0.74)

**Soru 1 (ID: 4fc78b4a-032e-4692-9e43-2c09fcf4346f)**
Soru Kökü: Klinik olarak tamamen sağlıklı, herhangi bir alerjik veya enfeksiyöz öyküsü bulunmayan bir bireyde, maksiller sinüsü çevreleyen normal mukozanın ortalama kalınlığı aşağıdakilerden hangisidir?
Doğru Şık (D): 1 mm
Açıklama: Sağlıklı paranazal sinüsleri örten ince mukozal tabaka yaklaşık 1 mm kalınlığındadır ve bu haliyle standart radyograflarda tespit edilemez. Mukoza 3 mm veya 5 mm gibi kalınlıklara ulaştığında enfeksiyöz veya alerjik bir inflamasyonu temsil eder. Radyografik olarak görünür hale gelmesi için bu kalınlığın 10-15 kat artması gerekir.

**Soru 2 (ID: e975b735-e395-4777-b3f7-afa8904cc18a)**
Soru Kökü: Maksiller sinüs radyografilerini yorumlayan bir hekim, mukozal kalınlaşma saptamıştır. Güncel radyolojik kriterlere göre, bu kalınlaşmanın patolojik kabul edilebilmesi için aşması gereken minimum kalınlık eşiği aşağıdakilerden hangisidir?
Doğru Şık (C): 2 mm
Açıklama: Genel tıbbi konsensüse göre, maksiller sinüs mukozasında 2 mm ve üzerindeki kalınlaşmalar patolojik (mukozit) olarak değerlendirilir. 1 mm normal mukoza kalınlığı iken, 5 mm veya 10 mm çoktan patolojik sınırları aşmış belirgin bir enflamasyonu gösterir. Bu ölçüm sınırı, asemptomatik tesadüfi bulguların raporlanmasında kritik önem taşır.

---

### ÇİFT 16 (Benzerlik: 0.73)

**Soru 1 (ID: 2c225743-4322-4ab0-80d5-5ee09cf2461d)**
Soru Kökü: Maksiller sinüste izlenen retansiyon psödokistlerinin radyografik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Etrafı belirgin bir kortikal sınırla **çevrilidir**.
Açıklama: Retansiyon psödokistleri, odontojen kistlerden farklı olarak etrafı ince bir kortikal sınırla çevrili DEĞİLDİR. Bu kortikal sınır yokluğu ve kubbe şekilli büyüme deseni, lezyonun odontojenik kist veya neoplazmlardan ayrımında kullanılan en kritik ayırıcı tanı kriteridir.

**Soru 2 (ID: 8d4c5fd4-2300-455d-bcbb-4cf32e9d31f8)**
Soru Kökü: Bir paranazal sinüs radyografisinde izlenen kistik kitlelerin, basit retansiyon psödokistlerinden ziyade enflamatuar polip olma ihtimalini en çok artıran spesifik görüntüleme bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kitleye difüz mukozal kalınlaşmaların eşlik etmesi
Açıklama: Polipler kronik olarak enflame olmuş sinüs müköz membranının oluşturduğu düzensiz katlantılar olduğundan, her zaman jeneralize bir mukozal kalınlaşma zemininde gelişirler. Retansiyon psödokistleri ise genellikle normal incelikteki bir mukoza üzerinde izole kubbe yapısı şeklinde dururlar. Kortikal sınır her ikisinde de yoktur, varsa kistik/neoplastik bir ayrım düşünülmelidir.

---

### ÇİFT 17 (Benzerlik: 0.73)

**Soru 1 (ID: 2b9c2652-a76b-4b59-909b-d7a28f5014a6)**
Soru Kökü: Bir paranazal radyografide maksiller sinüs tabanında izlenen radyopasitenin retansiyon psödokisti olduğunu gösterip, benign bir neoplazm (örn: odontoma) olasılığını ekarte eden en temel görüntüleme farklılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Oluşumun kortikal bir kemik sınırla çevrili olmaması
Açıklama: Retansiyon psödokistleri sadece mukozal bir şişlik olduklarından kemiksel (kortikal) bir sınır (halo) barındırmazlar ve sinüs içi hava ile yumuşakça örtüşürler. Odontojenik kistler veya benign neoplazmlar ise intraosseoz kökenli oldukları için genellikle ince radyoopak bir sınırla sinüs boşluğundan ayrılırlar. Kalsifikasyon retansiyon psödokistinde görülen bir özellik değildir.

**Soru 2 (ID: 9a3f2809-9f81-4ec2-8153-c9f0f2a99f81)**
Soru Kökü: Maksiller sinüs içinden lokalize kaynak alan veya komşu diş köklerinden sinüs lümenine doğru büyüme eğilimi gösteren kistik formasyonlar, çevresel kemik doku ile kurdukları reaktif ilişkiye göre birbirlerinden kolaylıkla ayırt edilebilirler.
Radyolojik görüntülemede periferinde belirgin veya ince bir beyaz 'kortikal sınır' **bulunmayan**, kemiği itmediği için reaktif osteogenez tetiklemeyen yumuşak doku lezyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Retansiyon psödokisti
Açıklama: Odontojenik kistler (radiküler kist, dentijeröz kist) ve benign odontojenik tümörler (ameloblastoma), doğaları gereği sert kemik matriksinin içinde basınçla büyüme gösterirler. Genişleyen kitlenin çevre kemik duvarlara yaptığı sürekli mekanik itme kuvveti, sınır bölgesindeki osteoblastları uyararak radyografide tümörü net bir şekilde çevreleyen ince beyaz 'kortikal bir duvar' (hiperostoz) oluşmasına neden olur. Oysa retansiyon psödokistleri bütünüyle yumuşak dokudaki sinüs mukozasından kaynaklanan sıvı birikintileridir; kemik içinde gelişmedikleri ve kemiği doğrudan itmedikleri için radyografik profillerinde hiçbir kortikal sınır hattı barındırmazlar.

---

### ÇİFT 18 (Benzerlik: 0.73)

**Soru 1 (ID: 2b9c2652-a76b-4b59-909b-d7a28f5014a6)**
Soru Kökü: Bir paranazal radyografide maksiller sinüs tabanında izlenen radyopasitenin retansiyon psödokisti olduğunu gösterip, benign bir neoplazm (örn: odontoma) olasılığını ekarte eden en temel görüntüleme farklılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Oluşumun kortikal bir kemik sınırla çevrili olmaması
Açıklama: Retansiyon psödokistleri sadece mukozal bir şişlik olduklarından kemiksel (kortikal) bir sınır (halo) barındırmazlar ve sinüs içi hava ile yumuşakça örtüşürler. Odontojenik kistler veya benign neoplazmlar ise intraosseoz kökenli oldukları için genellikle ince radyoopak bir sınırla sinüs boşluğundan ayrılırlar. Kalsifikasyon retansiyon psödokistinde görülen bir özellik değildir.

**Soru 2 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

---

### ÇİFT 19 (Benzerlik: 0.73)

**Soru 1 (ID: 2b9c2652-a76b-4b59-909b-d7a28f5014a6)**
Soru Kökü: Bir paranazal radyografide maksiller sinüs tabanında izlenen radyopasitenin retansiyon psödokisti olduğunu gösterip, benign bir neoplazm (örn: odontoma) olasılığını ekarte eden en temel görüntüleme farklılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Oluşumun kortikal bir kemik sınırla çevrili olmaması
Açıklama: Retansiyon psödokistleri sadece mukozal bir şişlik olduklarından kemiksel (kortikal) bir sınır (halo) barındırmazlar ve sinüs içi hava ile yumuşakça örtüşürler. Odontojenik kistler veya benign neoplazmlar ise intraosseoz kökenli oldukları için genellikle ince radyoopak bir sınırla sinüs boşluğundan ayrılırlar. Kalsifikasyon retansiyon psödokistinde görülen bir özellik değildir.

**Soru 2 (ID: fbc2c838-0904-4a38-90ab-0df7d21844b9)**
Soru Kökü: Maksiller sinüs boşluğuna doğru ekspansiyon yapan bir radiküler kistin radyografik özellikleriyle normal sinüs anatomisi karşılaştırıldığında, aşağıdakilerden hangisi kist lezyonunun ayırt edici bir özelliğidir?
Doğru Şık (E): Sinüs duvarlarında izlenen normal vasküler yapıların kist sınırları içinde izlenmemesi
Açıklama: Odontojenik kistler maksiller sinüse doğru büyüdüklerinde kendi epitelyal döşemeleri ve kortikal sınırlarını sinüs boşluğuna iterler. Bu kistik alanın içerisinde, normal maksiller sinüs duvarında yer alan posterior süperior alveolar arter gibi vasküler kanalların izi bulunmaz. Vasküler izlerin aniden kesilmesi, radyolusent alanın bir kist boşluğu olduğunu sinüs boşluğundan ayırmada kritik anatomik bir ipucudur.

---

### ÇİFT 20 (Benzerlik: 0.73)

**Soru 1 (ID: ed19afb0-461a-42a4-bf2d-ee037cf7198d)**
Soru Kökü: Elli yaşında kadın hasta, burnundan gelen kötü kokulu pürülan akıntı, kakozmi (kötü koku algısı) ve sağ maksiller posterior bölgede üç ay önce çekilmiş diş boşluğundan gelen sıvı şikayetiyle başvuruyor. Panoramik grafide sağ maksiller sinüs içinde homojen olmayan radyoopak bir kitle izlenirken, kitlenin içerisinde mine veya pulpa yapısı ayırt edilemiyor. Bu hastada **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Oroantral fistül zemininde gelişmiş antrolit
Açıklama: Hastadaki oroantral fistül, uzun süreli kronik enflamasyon ve enfeksiyona yol açar. Kötü koku (kakozmi) ve pürülan akıntı kronik enfeksiyonun bulgularıdır. Pulpa veya mine barındırmayan radyoopak kitle, bu enflamatuar nidiüs (fistül/yabancı cisim vb.) etrafında çökelen kalsiyum tuzlarının oluşturduğu bir 'antrolit'tir. Odontoma ve kök parçaları pulpa/mine bulgularıyla bu durumdan ayrılır.

**Soru 2 (ID: fd43b1fd-f9ae-4dd8-b768-fb972457ba25)**
Soru Kökü: Kırk beş yaşında kadın hasta, medikal tedaviye dirençli sağ taraflı burun tıkanıklığı ve baş ağrısı şikayetiyle başvuruyor. Çekilen konik ışınlı BT görüntülemesinde, sağ maksiller sinüs tabanında, daha önce endodontik tedavi görmüş 16 numaralı dişin kök apeksinin hemen üzerinde, lineer mikrokalsifikasyon alanlarıyla çevrelenmiş parlak metalik yoğunlukta bir odak saptanıyor.
Bu klinik senaryoda öncelikli tanı ve en uygun tedavi yaklaşımı aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (E): Fungus topu (Aspergilloma) / Endoskopik endonazal cerrahi
Açıklama: Diş hekimliği uygulamalarında kanal dolgu materyallerinin (özellikle çinko oksit içerenler) kök ucundan sinüs lümenine taşması, lokal fungal elemanlar (Aspergillus türleri) için bir inkübasyon nidusu görevi görerek 'fungus topu' (aspergilloma) gelişimini şiddetle tetikler. Radyografide merkeze yerleşmiş parlak metalik dansite ve etrafındaki sarmal mikrokalsifikasyonlar bu kolonizasyonun patognomonik işaretidir. Medikal ve immün sisteme dirençli olan bu inaktif mantar toplarının kesin tedavisi, anatomik fizyolojiyi maksimize eden endoskopik endonazal cerrahi eksizyondur.

---

### ÇİFT 21 (Benzerlik: 0.72)

**Soru 1 (ID: 9ac60142-d98f-4eec-9804-34acb9e3f2d8)**
Soru Kökü: Otuz beş yaşındaki kadın hasta; sağ burun deliğinde tıkanıklık, kötü kokulu akıntı ve kokuları kötü algılama (kakozmi) şikayetiyle başvurmuştur. Görüntülemelerde sağ maksiller sinüs içerisinde yuvarlak, iyi sınırlı ve kalsifiye bir nidus etrafında şekillenmiş radyoopak bir kitle saptanmıştır. Bu tabloya neden olan en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Antrolit
Açıklama: Antrolit, kalsiyum tuzlarının bir nidus etrafında çökelmesiyle oluşan ve kronik sinüziti tetikleyerek pürülan akıntı, kakozmi (kötü koku algılama) ve anozmiye yol açan kalsifiye bir kitledir. Osteom da kalsifiyedir ancak genellikle aseptomatiktir ve kakozmi/pürülan akıntı gibi enfektif semptomlar yaratmaz.

**Soru 2 (ID: fd43b1fd-f9ae-4dd8-b768-fb972457ba25)**
Soru Kökü: Kırk beş yaşında kadın hasta, medikal tedaviye dirençli sağ taraflı burun tıkanıklığı ve baş ağrısı şikayetiyle başvuruyor. Çekilen konik ışınlı BT görüntülemesinde, sağ maksiller sinüs tabanında, daha önce endodontik tedavi görmüş 16 numaralı dişin kök apeksinin hemen üzerinde, lineer mikrokalsifikasyon alanlarıyla çevrelenmiş parlak metalik yoğunlukta bir odak saptanıyor.
Bu klinik senaryoda öncelikli tanı ve en uygun tedavi yaklaşımı aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (E): Fungus topu (Aspergilloma) / Endoskopik endonazal cerrahi
Açıklama: Diş hekimliği uygulamalarında kanal dolgu materyallerinin (özellikle çinko oksit içerenler) kök ucundan sinüs lümenine taşması, lokal fungal elemanlar (Aspergillus türleri) için bir inkübasyon nidusu görevi görerek 'fungus topu' (aspergilloma) gelişimini şiddetle tetikler. Radyografide merkeze yerleşmiş parlak metalik dansite ve etrafındaki sarmal mikrokalsifikasyonlar bu kolonizasyonun patognomonik işaretidir. Medikal ve immün sisteme dirençli olan bu inaktif mantar toplarının kesin tedavisi, anatomik fizyolojiyi maksimize eden endoskopik endonazal cerrahi eksizyondur.

---

### ÇİFT 22 (Benzerlik: 0.72)

**Soru 1 (ID: 63a6fcb6-7730-4586-b939-d10662f58858)**
Soru Kökü: Genç hastada tespit edilen maksiller fibröz displazi vakasında, lezyonun dental yapılara ve sinüs anatomisine etkisi göz önüne alındığında aşağıdaki klinik-radyografik ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Kuşattığı diş köklerinde genellikle agresif bir kök **rezorpsiyonuna** neden olur.
Açıklama: Fibröz displazi genellikle yavaş ve sinsi büyüyen bir hamartomatöz displazidir. Genişlerken diş köklerinde ayrılma (yer değiştirme) yapmasına rağmen, genellikle kök rezorpsiyonu yapmaz. Kök rezorpsiyonu daha çok agresif benign tümörler veya maligniteler (SCC, osteosarkom) için tipiktir.

**Soru 2 (ID: d03ef412-fca4-47cd-bef4-5fc8bc9df48d)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ yanakta yavaş gelişen asimetri şikayetiyle başvuruyor. Alınan panoramik radyografta, sağ maksiller sinüsü tamamen dolduran ve sinüs sınırlarını silikleştiren 'buzlu cam' manzarasında radyoopak bir genişleme izleniyor. Elde edilen bulgularla fibröz displazi düşünülen bu hastada, ayırıcı tanıda yer almasına rağmen 'maksiller sinüs obliterasyonuna yol açmaması' karakteristik özelliği ile dışlanması gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Paget hastalığı
Açıklama: Fibröz displazi, maksiller sinüste kemik yapımı ile obliterasyona ve buzlu cam görüntüsüne neden olabilir. Ancak ayırıcı tanıda yer alan Paget hastalığı karakteristik olarak sinüs obliterasyonu yapmaz. Ossifiye fibrom ise yumuşak doku kapsülü bulundurur ve fibröz displaziye benzer şekilde sinüste genişleme veya obliterasyon yapabilir.

---

### ÇİFT 23 (Benzerlik: 0.72)

**Soru 1 (ID: 1b725c01-e39e-4f54-bde5-770e54beaac0)**
Soru Kökü: Altmış beş yaşında erkek hasta, dişlerde nedensiz mobilite, yanak bölgesinde parestezi ve vestibüler şişlik şikayetiyle başvurmuştur. BT kesitlerinde maksiller sinüs tabanında kemik yıkımı ve komşu dişlerin periodontal ligament aralığında düzensiz genişlemeler saptanmıştır. Bu klinik tablodan sorumlu olan en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Skuamöz hücreli karsinom (SCC)
Açıklama: İleri yaş erkek hasta, maksiller sinüs duvarlarında dekstrüksiyon ve dişlerin periodontal ligament aralığında düzensiz genişleme, paranazal bölgenin en sık görülen malignitesi olan Skuamöz hücreli karsinomun (SCC) klasik prezentasyonudur. Fibröz displazi ekspansiyon yapsa da kökleri ayırır ancak kanser gibi agresif destrüksiyon ve parestezi yapmaz. Diş mobilitesi ve parestezi kanserin alveol içine yayılım işaretidir.

**Soru 2 (ID: 62065ad8-1024-43ea-8713-e2b03259957f)**
Soru Kökü: Altmış beş yaşında, yirmi yıldır sigara içen bir erkek hasta; sağ üst çenesinde hissettiği devamlı künt ağrı, diş dizisinde artan çapraşıklık ve diş etinde yaygın ülsere şişlikler ile başvuruyor. Panoramik radyografisinde 15, 16 ve 17 numaralı diş köklerinin periodontal ligament aralıklarında düzensiz devasa genişlemeler, alveolar krette ise sınırları seçilemeyen, güve yeniği tarzında infiltre edici yıkım ve dişlerin adeta 'havada asılı kalmış' gibi görünümü saptanıyor.
Biyolojik davranış paterni ve risk faktörleri göz önüne alındığında **en güçlü** ön tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Paranazal sinüs skuamöz hücreli karsinomunun alveolar yayılımı
Açıklama: Hızlı seyreden ağrı, düzensiz sınırları olmayan infiltratif 'güve yeniği' kemik dekstrüksiyonu, ve dişlerin etrafındaki alveolar desteği enzimatik olarak eriterek onları adeta doku içinde yüzer ('havada asılı', 'floating teeth') pozisyona getirmesi klasik malign davranış paternidir. Paranazal bölgenin açık ara en sık izlenen kanseri olan Skuamöz Hücreli Karsinom (SCC), ileri yaş ve yoğun tütün kullanımı gibi klasik risk faktörleriyle birlikte, maksiller sinüs tabanını aşarak alveolar kretteki dişleri desteksiz bırakır. Benign kistler ve displaziler güve yeniği şeklinde değil, düzgün sınırlı dışa ekspansif yıkım paterni gösterirler.

---

### ÇİFT 24 (Benzerlik: 0.72)

**Soru 1 (ID: 7bd482e9-d39f-4ca3-9a0e-e333cf6daa7f)**
Soru Kökü: Paranazal sinüs ostiumunun tıkanması sonucu mukus sekresyonunun birikmesi, antrum içi basıncın artması ve nihayetinde sinüs duvarlarında destrüksiyona yol açan hidrolik basınçla genişleyen lezyon aşağıdakilerden hangisidir?
Doğru Şık (A): Mukosel
Açıklama: Mukosel, ostium tıkanıklığı nedeniyle sekresyonun kistik bir yapı içinde hapsolup hidrolik basınçla sinüs duvarlarını erittiği ve ekspansiyon yaptığı agresif görünümlü kistik bir antitedir. Retansiyon psödokistleri destrüksiyon yapmazken, sessiz sinüs sendromunda basınç artmaz tam tersi negatif basınçla duvarlar içe çöker (implozyon). Mukosel kemik erozyonu yapabildiği için malignite ile karışabilir.

**Soru 2 (ID: c14016ad-92f8-4d53-8763-05f32712d04c)**
Soru Kökü: Maksiller sinüste gelişen bir mukoselin kemik duvarlarda incelme, yer değiştirme ve bazı ileri vakalarda destrüksiyona yol açan patofizyolojik agresyonunun temelindeki mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Tıkalı sinüs ostiumu nedeniyle biriken mukus sekresyonunun antrum içi basıncı mekanik olarak artırması
Açıklama: Mukosel, tıkalı sinüs ostiumundan sekonder olarak kaynaklanır. Mukus sekresyonu sürekli üretilip sinüs boşluğuna dolduğunda lokal basıncı mekanik olarak devasa boyutlara artırır. Bu artan antrum içi basınç, duvarlarda incelmeye, çevre yapılara doğru itilmeye (hidrolik şekil) ve harabiyete neden olur.

---

### ÇİFT 25 (Benzerlik: 0.72)

**Soru 1 (ID: e70f446a-5953-426a-bb1a-4303c0985413)**
Soru Kökü: İnternal radyoopasitelerin sağ-sol olarak kıyaslanmasında ve özellikle maksiller sinüslerle birlikte frontal sinüsler ve etmoid hava hücrelerinin eşzamanlı, net görüntülenmesinde tercih edilen en uygun konvansiyonel radyografik yöntem aşağıdakilerden hangisidir?
Doğru Şık (B): Waters grafisi
Açıklama: Waters grafisi, başın spesifik bir açıyla konumlandırılmasıyla maksiller sinüslerin, frontal sinüslerin ve etmoid hava hücrelerinin aynı anda görüntülenerek sağ-sol opasite karşılaştırmasının yapıldığı en ideal konvansiyonel yöntemdir. Panoramik radyografide hayalet (fantom) imajların ve diğer dokuların süperpozisyonu nedeniyle internal opasitelerin kıyaslanması yanıltıcı olabilir.

**Soru 2 (ID: e8ed6b5d-20ab-4772-aa35-9fcd37eb43d6)**
Soru Kökü: Diş hekimliğinde maksiller sinüs hastalıklarının ve internal radyoopasitelerin ön tanısında kullanılan geleneksel radyolojik görüntüleme algoritmalarıyla ilgili aşağıdaki açıklamalardan hangisi **yanlıştır**?
Doğru Şık (C): Panoramik radyografi sağ-sol sinüs lümen yoğunluklarını fantom gölgeler olmadan, orta hat yapılarını maskelemeden en net gösteren sistemdir.
Açıklama: Panoramik radyografi tomografik tabaka prensibiyle çalıştığı için rotasyon merkezi dışındaki yapıları siler ancak aynı zamanda x-ışını demetinin doğası gereği servikal omurga ve başın karşı tarafındaki sert dokuların (örneğin karşı taraf ramus mandibula) ikincil, bulanık 'fantom gölgelerini' tam da orta hat ve maksiller sinüsler üzerine düşürür. Bu durum, orta hat ve her iki sinüs radyodansitesinin temiz bir şekilde incelenmesini ve sağ-sol lümen parlaklığı kıyaslamasını imkansız hale getirir. Bu nedenle panoramik filmler internal sinüs yoğunluk değerlendirmesi için asla güvenilir kabul edilmez.

---

### ÇİFT 26 (Benzerlik: 0.72)

**Soru 1 (ID: 2c225743-4322-4ab0-80d5-5ee09cf2461d)**
Soru Kökü: Maksiller sinüste izlenen retansiyon psödokistlerinin radyografik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Etrafı belirgin bir kortikal sınırla **çevrilidir**.
Açıklama: Retansiyon psödokistleri, odontojen kistlerden farklı olarak etrafı ince bir kortikal sınırla çevrili DEĞİLDİR. Bu kortikal sınır yokluğu ve kubbe şekilli büyüme deseni, lezyonun odontojenik kist veya neoplazmlardan ayrımında kullanılan en kritik ayırıcı tanı kriteridir.

**Soru 2 (ID: 9a3f2809-9f81-4ec2-8153-c9f0f2a99f81)**
Soru Kökü: Maksiller sinüs içinden lokalize kaynak alan veya komşu diş köklerinden sinüs lümenine doğru büyüme eğilimi gösteren kistik formasyonlar, çevresel kemik doku ile kurdukları reaktif ilişkiye göre birbirlerinden kolaylıkla ayırt edilebilirler.
Radyolojik görüntülemede periferinde belirgin veya ince bir beyaz 'kortikal sınır' **bulunmayan**, kemiği itmediği için reaktif osteogenez tetiklemeyen yumuşak doku lezyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Retansiyon psödokisti
Açıklama: Odontojenik kistler (radiküler kist, dentijeröz kist) ve benign odontojenik tümörler (ameloblastoma), doğaları gereği sert kemik matriksinin içinde basınçla büyüme gösterirler. Genişleyen kitlenin çevre kemik duvarlara yaptığı sürekli mekanik itme kuvveti, sınır bölgesindeki osteoblastları uyararak radyografide tümörü net bir şekilde çevreleyen ince beyaz 'kortikal bir duvar' (hiperostoz) oluşmasına neden olur. Oysa retansiyon psödokistleri bütünüyle yumuşak dokudaki sinüs mukozasından kaynaklanan sıvı birikintileridir; kemik içinde gelişmedikleri ve kemiği doğrudan itmedikleri için radyografik profillerinde hiçbir kortikal sınır hattı barındırmazlar.

---

### ÇİFT 27 (Benzerlik: 0.72)

**Soru 1 (ID: 7df7de4a-0c0a-4110-bba9-ae99e5e18dcb)**
Soru Kökü: 35 yaşında asemptomatik kadın hastanın rutin panoramik radyografisinde sağ maksiller sinüs tabanında kubbe şeklinde homojen bir radyoopasite saptanıyor. Bu lezyonun epitel döşeli bir odontojenik kist yerine, benign bir retansiyon psödokisti olduğunu savunan bir hekimin dayandığı en güçlü radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kortikal sınırla çevrili olmaması ve komşu dişlerin lamina dura devamlılığının bozulmaması
Açıklama: Retansiyon psödokistleri odontojenik kist ve tümörlerde görülen kortikal sınıra sahip değildir ve çevresel kemik yıkımı yapmadıkları için komşu dişlerin lamina dura bütünlüğünü bozmazlar. Odontojenik kistler ise sınırları belirli radyografik kortikal bir hatta sahiptir ve sıklıkla kök bölgesindeki lamina durayı harabiyete uğratırlar.

**Soru 2 (ID: 9a3f2809-9f81-4ec2-8153-c9f0f2a99f81)**
Soru Kökü: Maksiller sinüs içinden lokalize kaynak alan veya komşu diş köklerinden sinüs lümenine doğru büyüme eğilimi gösteren kistik formasyonlar, çevresel kemik doku ile kurdukları reaktif ilişkiye göre birbirlerinden kolaylıkla ayırt edilebilirler.
Radyolojik görüntülemede periferinde belirgin veya ince bir beyaz 'kortikal sınır' **bulunmayan**, kemiği itmediği için reaktif osteogenez tetiklemeyen yumuşak doku lezyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Retansiyon psödokisti
Açıklama: Odontojenik kistler (radiküler kist, dentijeröz kist) ve benign odontojenik tümörler (ameloblastoma), doğaları gereği sert kemik matriksinin içinde basınçla büyüme gösterirler. Genişleyen kitlenin çevre kemik duvarlara yaptığı sürekli mekanik itme kuvveti, sınır bölgesindeki osteoblastları uyararak radyografide tümörü net bir şekilde çevreleyen ince beyaz 'kortikal bir duvar' (hiperostoz) oluşmasına neden olur. Oysa retansiyon psödokistleri bütünüyle yumuşak dokudaki sinüs mukozasından kaynaklanan sıvı birikintileridir; kemik içinde gelişmedikleri ve kemiği doğrudan itmedikleri için radyografik profillerinde hiçbir kortikal sınır hattı barındırmazlar.

---

### ÇİFT 28 (Benzerlik: 0.72)

**Soru 1 (ID: 823fd3f0-b0aa-4a8e-95ac-c5b657a709f4)**
Soru Kökü: Elli beş yaşında bir hasta, sol yanağında dolgunluk, diplopi ve sol üst molar dişlerinde kayıp şikayetiyle başvuruyor. Radyografik değerlendirmede sol maksiller sinüs lümeninde hidrolik şekilli bir radyoopasite, sinüs kemik sınırlarında belirgin yer değiştirme (ekspansiyon) ve incelme izleniyor.
Klinik ve radyolojik bulguları verilen bu durumun patofizyolojik birincil kök nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Maksiller sinüs ostiumunun mekanik tıkanmasıyla sekresyon birikimi
Açıklama: Mukoseller, sinüs ostiumunun inflamatuar veya mekanik obstrüksiyonu sonucu normal mukus sekresyonunun drene olamayıp sinüs içinde birikmesiyle oluşur. Aylar/yıllar içinde artan bu antrum içi sıvı basıncı, hidrolik prensiplerle sinüs kemik duvarlarında eşit ekspansiyon (dışa doğru yer değiştirme), incelme ve yer yer destrüksiyon yapar. Artan basınca bağlı olarak tavan (orbita tabanı) yer değiştirmesi diplopiye, alveolar proses yer değiştirmesi diş kayıplarına sebep olur. Fungal kalsifikasyonlar veya genetik siliyer disfonksiyon bu hidrolik balonu yaratmaz.

**Soru 2 (ID: b1ac463e-47da-4f0f-83c2-1315997bd250)**
Soru Kökü: Kırk beş yaşında erkek hasta, tek taraflı gözde küçülme (enoftalmus) ve aşağı kayma (hipoglobus) şikayetiyle başvurmuştur. Alınan bilgisayarlı tomografi kesitlerinde ilgili maksiller sinüs duvarlarında içe doğru eğilme, sinüs boyutunda belirgin azalma ve orbital içeriğin inferiora doğru yer değiştirdiği izlenmiştir. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Sessiz sinüs sendromu
Açıklama: Sessiz sinüs sendromu, maksiller sinüs ostiumunun tıkanması sonucu gelişen kronik hipoventilasyon ve negatif basınca bağlı olarak sinüs duvarlarının içe çökmesi durumudur. Mukosel tam tersine ostium tıkanıklığı sonrası içi basınç artışıyla duvarlarda dışa doğru ekspansiyona neden olduğu için bu tabloda yanlış bir seçenektir. Hastada klinik olarak izlenen enoftalmus ve hipoglobus, orbita tabanının yer değiştirmesinin doğrudan bir sonucudur.

---

### ÇİFT 29 (Benzerlik: 0.72)

**Soru 1 (ID: 15effc64-6e84-4814-85fa-f184aeebc315)**
Soru Kökü: Şiddetli baş ağrısı, bilateral burun tıkanıklığı, yanakta dolgunluk ve ilgili sinüste basınca karşı klinik hassasiyet şikayetleriyle başvuran 'akut maksiller sinüzit' tablosundaki bir hastanın radyografik incelemesinde aşağıdaki bulgulardan hangisinin izlenmesi **en az** olasıdır?
Doğru Şık (E): Enfeksiyonun çevredeki kortikal kemikte yoğun litik rezorpsiyon ve harabiyet oluşturması
Açıklama: Akut veya kronik sinüzit süreçlerinde inflamatuar reaksiyon sıvısına bağlı lokal opasite artışları (hava-sıvı sınırı, mukozit polipleri, total opasifikasyon) standart olarak görülür. Ancak sinüzite bağlı olarak sinüsün sağlıklı kortikal 'kemik sınırında belirgin rezorpsiyon veya kesinti olması' oldukça enderdir; bu tür bir kortikal dekstrüksiyon travmaya, agresif cerrahiye veya esas olarak malign tümörlere işaret eder.

**Soru 2 (ID: 78e055b0-b0c8-4f9f-a502-e98325146b0a)**
Soru Kökü: Kırk yaşında erkek hasta; sağ maksiller yanak bölgesinde doluluk hissi, baş hareketleriyle artan zonklayıcı ağrı ve dişlerde perküsyon hassasiyeti ile kliniğe başvurmuştur. Waters grafisinde sağ maksiller sinüste düz bir yatay hat ile birbirinden ayrılan radyolüsent ve radyoopak alan (hava-sıvı seviyesi) saptanmıştır. Bu klinik ve radyografik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Akut maksiller sinüzit
Açıklama: Akut maksiller sinüzit, sinüs içerisindeki enfekte sıvı birikimi nedeniyle radyograflarda yer çekimine paralel belirgin bir hava-sıvı seviyesi oluşturur ve baş hareketleriyle artan şiddetli ağrı tipik klinik bulgusudur. Retansiyon psödokisti kubbe formunda lokalize izlenir ve genellikle asemptomatiktir. Hava-sıvı seviyesinin varlığı akut inflamatuar eksüdasyonun en kesin kanıtıdır.

---

### ÇİFT 30 (Benzerlik: 0.72)

**Soru 1 (ID: 67b7cccc-2b07-429c-9a5f-51707a579e5a)**
Soru Kökü: Diyabet ve radyoterapi öyküsü olan yaşlı hastanın maksiller sinüsünde antrolit tespit edilmiştir. İncelemede dış kaynaklı hiçbir yabancı cisme rastlanmamıştır. Bu durumdaki antrolitin oluşumunda kalsiyum tuzlarının çökelmesi için odak teşkil eden 'intrinsik' etken en yüksek ihtimalle aşağıdakilerden hangisidir?
Doğru Şık (B): Endojen gelişen mantar topu (fungus ball)
Açıklama: İmmün sistemi baskılanmış veya diyabetik hastalarda maksiller sinüste kolonize olan mantar topları (aspergilloma), kalsifikasyon için ideal bir biyolojik zemin oluşturur ve intrinsik nidus olarak görev yapar. Kök parçası, kemik grefti veya amalgam artıkları tamamen dışarıdan gelen (ekstrinsik) faktörlerdir. Bu vaka biyolojik atıklar etrafındaki mineralizasyonu örneklendirir.

**Soru 2 (ID: bd2f7317-1a9f-4b19-bd21-9c17642a2c94)**
Soru Kökü: Maksiller sinüs lümeni içerisinde radyografik olarak izlenen lokalize kalsifiye lezyonların değerlendirilmesinde etyolojik nidus faktörleri oldukça değişkendir.
Aşağıdaki durumlardan hangisi, sinüs lümeninde bir kalsifikasyona (antrolit vb.) yol açan intrensek (içsel) fizyolojik faktörlerden biri **değildir**?
Doğru Şık (B): Endodontik tedavi sırasında sinüs boşluğuna itilmiş kanal patı
Açıklama: Sinüs içerisinde kalsiyum tuzlarının bir çekirdek (nidus) etrafında çökerek antrolit veya benzeri kalsifikasyonlar oluşturması içsel veya dışsal kaynaklı olabilir. Kök kanal dolgu patının iatrojenik olarak hekim tarafından sinüs lümenine itilmesi, dış ortamdan vücuda sokulan yabancı bir materyal olduğu için ekstrinsik (dışsal) bir faktördür. Yoğunlaşmış mukus, drenaj bozukluğuna sekonder mineral çökmesi ve kommensal mantarlar (aspergillus) sinüsün kendi patofizyolojisi ve iç mikrobiyotası içinde gelişen intrensek nidus kaynaklarıdır.

---

### ÇİFT 31 (Benzerlik: 0.72)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: d03ef412-fca4-47cd-bef4-5fc8bc9df48d)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ yanakta yavaş gelişen asimetri şikayetiyle başvuruyor. Alınan panoramik radyografta, sağ maksiller sinüsü tamamen dolduran ve sinüs sınırlarını silikleştiren 'buzlu cam' manzarasında radyoopak bir genişleme izleniyor. Elde edilen bulgularla fibröz displazi düşünülen bu hastada, ayırıcı tanıda yer almasına rağmen 'maksiller sinüs obliterasyonuna yol açmaması' karakteristik özelliği ile dışlanması gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Paget hastalığı
Açıklama: Fibröz displazi, maksiller sinüste kemik yapımı ile obliterasyona ve buzlu cam görüntüsüne neden olabilir. Ancak ayırıcı tanıda yer alan Paget hastalığı karakteristik olarak sinüs obliterasyonu yapmaz. Ossifiye fibrom ise yumuşak doku kapsülü bulundurur ve fibröz displaziye benzer şekilde sinüste genişleme veya obliterasyon yapabilir.

---

### ÇİFT 32 (Benzerlik: 0.72)

**Soru 1 (ID: 9a3f2809-9f81-4ec2-8153-c9f0f2a99f81)**
Soru Kökü: Maksiller sinüs içinden lokalize kaynak alan veya komşu diş köklerinden sinüs lümenine doğru büyüme eğilimi gösteren kistik formasyonlar, çevresel kemik doku ile kurdukları reaktif ilişkiye göre birbirlerinden kolaylıkla ayırt edilebilirler.
Radyolojik görüntülemede periferinde belirgin veya ince bir beyaz 'kortikal sınır' **bulunmayan**, kemiği itmediği için reaktif osteogenez tetiklemeyen yumuşak doku lezyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Retansiyon psödokisti
Açıklama: Odontojenik kistler (radiküler kist, dentijeröz kist) ve benign odontojenik tümörler (ameloblastoma), doğaları gereği sert kemik matriksinin içinde basınçla büyüme gösterirler. Genişleyen kitlenin çevre kemik duvarlara yaptığı sürekli mekanik itme kuvveti, sınır bölgesindeki osteoblastları uyararak radyografide tümörü net bir şekilde çevreleyen ince beyaz 'kortikal bir duvar' (hiperostoz) oluşmasına neden olur. Oysa retansiyon psödokistleri bütünüyle yumuşak dokudaki sinüs mukozasından kaynaklanan sıvı birikintileridir; kemik içinde gelişmedikleri ve kemiği doğrudan itmedikleri için radyografik profillerinde hiçbir kortikal sınır hattı barındırmazlar.

**Soru 2 (ID: fbc2c838-0904-4a38-90ab-0df7d21844b9)**
Soru Kökü: Maksiller sinüs boşluğuna doğru ekspansiyon yapan bir radiküler kistin radyografik özellikleriyle normal sinüs anatomisi karşılaştırıldığında, aşağıdakilerden hangisi kist lezyonunun ayırt edici bir özelliğidir?
Doğru Şık (E): Sinüs duvarlarında izlenen normal vasküler yapıların kist sınırları içinde izlenmemesi
Açıklama: Odontojenik kistler maksiller sinüse doğru büyüdüklerinde kendi epitelyal döşemeleri ve kortikal sınırlarını sinüs boşluğuna iterler. Bu kistik alanın içerisinde, normal maksiller sinüs duvarında yer alan posterior süperior alveolar arter gibi vasküler kanalların izi bulunmaz. Vasküler izlerin aniden kesilmesi, radyolusent alanın bir kist boşluğu olduğunu sinüs boşluğundan ayırmada kritik anatomik bir ipucudur.

---

### ÇİFT 33 (Benzerlik: 0.71)

**Soru 1 (ID: bd2f7317-1a9f-4b19-bd21-9c17642a2c94)**
Soru Kökü: Maksiller sinüs lümeni içerisinde radyografik olarak izlenen lokalize kalsifiye lezyonların değerlendirilmesinde etyolojik nidus faktörleri oldukça değişkendir.
Aşağıdaki durumlardan hangisi, sinüs lümeninde bir kalsifikasyona (antrolit vb.) yol açan intrensek (içsel) fizyolojik faktörlerden biri **değildir**?
Doğru Şık (B): Endodontik tedavi sırasında sinüs boşluğuna itilmiş kanal patı
Açıklama: Sinüs içerisinde kalsiyum tuzlarının bir çekirdek (nidus) etrafında çökerek antrolit veya benzeri kalsifikasyonlar oluşturması içsel veya dışsal kaynaklı olabilir. Kök kanal dolgu patının iatrojenik olarak hekim tarafından sinüs lümenine itilmesi, dış ortamdan vücuda sokulan yabancı bir materyal olduğu için ekstrinsik (dışsal) bir faktördür. Yoğunlaşmış mukus, drenaj bozukluğuna sekonder mineral çökmesi ve kommensal mantarlar (aspergillus) sinüsün kendi patofizyolojisi ve iç mikrobiyotası içinde gelişen intrensek nidus kaynaklarıdır.

**Soru 2 (ID: e2965f96-1b3f-44c1-8579-031f7578b9ef)**
Soru Kökü: Maksiller sinüzit etyolojisinde rol oynayan faktörler anatomik, enfeksiyöz ve iatrojenik olarak çeşitli sınıflara ayrılır.
Aşağıdakilerden hangisi maksiller sinüzit gelişimini kolaylaştıran etyolojik faktörlerden biri **değildir**?
Doğru Şık (C): İzole C şekilli kök kanal morfolojisi
Açıklama: Konka hipertrofisi ve septum deviasyonu osteomeatal kompleksin mekanik tıkanıklığına, tütün kullanımı siliyer disfonksiyona, dolgu materyali taşması ise mekanik ve fungal nidus oluşumuna zemin hazırlayarak sinüziti tetikler. Ancak izole bir dişin C şekilli kök kanal morfolojisine sahip olması dişin kendi iç endodontik zorluğu ile ilgilidir; pulpa enfekte olmadıkça veya bir iyatrojenik perforasyon yaratılmadıkça doğrudan sinüzit predispozan faktörü olarak kabul edilemez. Sinüsten serbest drenajı bozan anatomik ve fizyolojik faktörler patogenezin merkezindedir.

---

### ÇİFT 34 (Benzerlik: 0.71)

**Soru 1 (ID: f8fdeb7f-da44-4729-ad0d-1fe38e95018e)**
Soru Kökü: Kırk beş yaşında kadın hasta, sağ üst birinci büyük azı dişinin çekimi sırasında hekimin şüphesi üzerine klinik bir teste tabi tutuluyor. Hastanın burnu tutulup burnundan hava vermesi istendiğinde, yeni çekim yapılmış sokette kan içerisinde baloncuklar oluştuğu gözlemleniyor. Bu klinik senaryoda hastada geliştiği kanıtlanan **en olası** komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Oroantral fistül
Açıklama: Çekim sırasında maksiller sinüs tabanının devamlılığının kaybolması oroantral fistül ile sonuçlanır. Hastanın burnunu tutarak hava vermesi (Valsalva manevrası) sırasında çekim soketinde baloncuklar görülmesi, oral kavite ile paranazal sinüs arasında bir iştirak olduğunu kesin olarak kanıtlar. Kök fraktürü veya alveolar fraktür doğrudan hava sızıntısı yapmaz.

**Soru 2 (ID: fe8930ab-0307-4072-bf03-a27dcc1f690f)**
Soru Kökü: Zorlu bir üst molar diş çekimi esnasında hekim, çekim soketinden kanla karışık hava kabarcıkları geldiğini fark etmiştir. Bu klinik bulgunun doğrulanması ve kırık bir kökün maksiller sinüse kaçıp kaçmadığının anlaşılması için hastaya yapılması gereken manevra/test aşağıdakilerden hangisidir?
Doğru Şık (C): Hastanın burnu tutulup burnundan hava vermesi istenir ve sokette baloncuk oluşumu aranır.
Açıklama: Oroantral fistülün (iştirakin) klinik tespiti için Valsalva benzeri manevra kullanılır: Hastanın burnu kapatılır ve burnundan hava vermesi istenir. Eğer sinüs tabanı açılmışsa, hava sinüsten ağız boşluğuna doğru geçerek çekim soketindeki kanın içerisinde baloncuklar oluşturur. Bu durum sinüse kök kaçması ihtimalini güçlendirir.

---

### ÇİFT 35 (Benzerlik: 0.71)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: fd43b1fd-f9ae-4dd8-b768-fb972457ba25)**
Soru Kökü: Kırk beş yaşında kadın hasta, medikal tedaviye dirençli sağ taraflı burun tıkanıklığı ve baş ağrısı şikayetiyle başvuruyor. Çekilen konik ışınlı BT görüntülemesinde, sağ maksiller sinüs tabanında, daha önce endodontik tedavi görmüş 16 numaralı dişin kök apeksinin hemen üzerinde, lineer mikrokalsifikasyon alanlarıyla çevrelenmiş parlak metalik yoğunlukta bir odak saptanıyor.
Bu klinik senaryoda öncelikli tanı ve en uygun tedavi yaklaşımı aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (E): Fungus topu (Aspergilloma) / Endoskopik endonazal cerrahi
Açıklama: Diş hekimliği uygulamalarında kanal dolgu materyallerinin (özellikle çinko oksit içerenler) kök ucundan sinüs lümenine taşması, lokal fungal elemanlar (Aspergillus türleri) için bir inkübasyon nidusu görevi görerek 'fungus topu' (aspergilloma) gelişimini şiddetle tetikler. Radyografide merkeze yerleşmiş parlak metalik dansite ve etrafındaki sarmal mikrokalsifikasyonlar bu kolonizasyonun patognomonik işaretidir. Medikal ve immün sisteme dirençli olan bu inaktif mantar toplarının kesin tedavisi, anatomik fizyolojiyi maksimize eden endoskopik endonazal cerrahi eksizyondur.

---

### ÇİFT 36 (Benzerlik: 0.71)

**Soru 1 (ID: d03ef412-fca4-47cd-bef4-5fc8bc9df48d)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ yanakta yavaş gelişen asimetri şikayetiyle başvuruyor. Alınan panoramik radyografta, sağ maksiller sinüsü tamamen dolduran ve sinüs sınırlarını silikleştiren 'buzlu cam' manzarasında radyoopak bir genişleme izleniyor. Elde edilen bulgularla fibröz displazi düşünülen bu hastada, ayırıcı tanıda yer almasına rağmen 'maksiller sinüs obliterasyonuna yol açmaması' karakteristik özelliği ile dışlanması gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Paget hastalığı
Açıklama: Fibröz displazi, maksiller sinüste kemik yapımı ile obliterasyona ve buzlu cam görüntüsüne neden olabilir. Ancak ayırıcı tanıda yer alan Paget hastalığı karakteristik olarak sinüs obliterasyonu yapmaz. Ossifiye fibrom ise yumuşak doku kapsülü bulundurur ve fibröz displaziye benzer şekilde sinüste genişleme veya obliterasyon yapabilir.

**Soru 2 (ID: dc314765-060d-4c14-862b-f3cbb0c83cfd)**
Soru Kökü: Aşağıdaki kemik lezyonlarından hangisinin maksiller sinüste genişleme veya obliterasyon yapması **en az olasıdır**?
Doğru Şık (B): Paget hastalığı
Açıklama: Paget hastalığı maksiller kemikleri etkileyebilse de radyografik ve klinik olarak sinüs obliterasyonuna yol açması beklenmez. Fibröz displazi ve ossifiye fibrom gibi displastik/neoplastik lezyonlar ile odontojenik kistler sinüs boşluğuna doğru genişleyerek obliterasyon yaratmaya oldukça meyillidir. Bu klinik kural, söz konusu lezyonların radyografik ayrımında temel bir mihenk taşıdır.

---

### ÇİFT 37 (Benzerlik: 0.71)

**Soru 1 (ID: 6f66d8ab-3040-4cc5-a746-4ea2d7a223bf)**
Soru Kökü: Otuz beş yaşında asemptomatik bir hastada rutin dental kontroller sırasında tesadüfen saptanan kemik yoğunluğunda ekzofitik radyopasiteler izlenmiştir. Paranazal bölgede bu tip osteomaların en sık yerleştiği anatomik lokasyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Frontal sinüs - Etmoid sinüs
Açıklama: Osteomalar yavaş büyüyen kemik tümörleridir ve kraniofasiyal bölgede en sık frontal sinüste, ikinci sıklıkta ise etmoid sinüste lokalize olurlar. Maksiller sinüste görülmeleri nispeten daha nadirdir. Büyüdüklerinde çevre dokulara (orbita veya kraniuma) baskı yaparak proptozis veya fistül gibi komplikasyonlara yol açabilirler.

**Soru 2 (ID: f0f1cb3f-df05-44b7-9c78-61f80c92c983)**
Soru Kökü: Paranazal sinüslerin iyi huylu tümörlerinden biri olan osteomaların klinik davranışları değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Büyümeleri maksillayla sınırlı kalır ve yanakta hiçbir zaman dışarıdan şişlik **yapmazlar**.
Açıklama: Osteomalar genelde yavaş büyüyüp asemptomatik kalsalar da, büyümeye devam ettiklerinde maksiller sinüsteki genişleme burnuna, yanaklara ve sert damağa doğru ilerleyebilir. Bu ilerleme sonucunda yanak bölgesinde şişkinlik ve fasiyal asimetri yaratmaları mümkündür.

---

### ÇİFT 38 (Benzerlik: 0.71)

**Soru 1 (ID: 7bd482e9-d39f-4ca3-9a0e-e333cf6daa7f)**
Soru Kökü: Paranazal sinüs ostiumunun tıkanması sonucu mukus sekresyonunun birikmesi, antrum içi basıncın artması ve nihayetinde sinüs duvarlarında destrüksiyona yol açan hidrolik basınçla genişleyen lezyon aşağıdakilerden hangisidir?
Doğru Şık (A): Mukosel
Açıklama: Mukosel, ostium tıkanıklığı nedeniyle sekresyonun kistik bir yapı içinde hapsolup hidrolik basınçla sinüs duvarlarını erittiği ve ekspansiyon yaptığı agresif görünümlü kistik bir antitedir. Retansiyon psödokistleri destrüksiyon yapmazken, sessiz sinüs sendromunda basınç artmaz tam tersi negatif basınçla duvarlar içe çöker (implozyon). Mukosel kemik erozyonu yapabildiği için malignite ile karışabilir.

**Soru 2 (ID: 823fd3f0-b0aa-4a8e-95ac-c5b657a709f4)**
Soru Kökü: Elli beş yaşında bir hasta, sol yanağında dolgunluk, diplopi ve sol üst molar dişlerinde kayıp şikayetiyle başvuruyor. Radyografik değerlendirmede sol maksiller sinüs lümeninde hidrolik şekilli bir radyoopasite, sinüs kemik sınırlarında belirgin yer değiştirme (ekspansiyon) ve incelme izleniyor.
Klinik ve radyolojik bulguları verilen bu durumun patofizyolojik birincil kök nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Maksiller sinüs ostiumunun mekanik tıkanmasıyla sekresyon birikimi
Açıklama: Mukoseller, sinüs ostiumunun inflamatuar veya mekanik obstrüksiyonu sonucu normal mukus sekresyonunun drene olamayıp sinüs içinde birikmesiyle oluşur. Aylar/yıllar içinde artan bu antrum içi sıvı basıncı, hidrolik prensiplerle sinüs kemik duvarlarında eşit ekspansiyon (dışa doğru yer değiştirme), incelme ve yer yer destrüksiyon yapar. Artan basınca bağlı olarak tavan (orbita tabanı) yer değiştirmesi diplopiye, alveolar proses yer değiştirmesi diş kayıplarına sebep olur. Fungal kalsifikasyonlar veya genetik siliyer disfonksiyon bu hidrolik balonu yaratmaz.

---

### ÇİFT 39 (Benzerlik: 0.71)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: 9ac60142-d98f-4eec-9804-34acb9e3f2d8)**
Soru Kökü: Otuz beş yaşındaki kadın hasta; sağ burun deliğinde tıkanıklık, kötü kokulu akıntı ve kokuları kötü algılama (kakozmi) şikayetiyle başvurmuştur. Görüntülemelerde sağ maksiller sinüs içerisinde yuvarlak, iyi sınırlı ve kalsifiye bir nidus etrafında şekillenmiş radyoopak bir kitle saptanmıştır. Bu tabloya neden olan en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Antrolit
Açıklama: Antrolit, kalsiyum tuzlarının bir nidus etrafında çökelmesiyle oluşan ve kronik sinüziti tetikleyerek pürülan akıntı, kakozmi (kötü koku algılama) ve anozmiye yol açan kalsifiye bir kitledir. Osteom da kalsifiyedir ancak genellikle aseptomatiktir ve kakozmi/pürülan akıntı gibi enfektif semptomlar yaratmaz.

---

### ÇİFT 40 (Benzerlik: 0.71)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: 823fd3f0-b0aa-4a8e-95ac-c5b657a709f4)**
Soru Kökü: Elli beş yaşında bir hasta, sol yanağında dolgunluk, diplopi ve sol üst molar dişlerinde kayıp şikayetiyle başvuruyor. Radyografik değerlendirmede sol maksiller sinüs lümeninde hidrolik şekilli bir radyoopasite, sinüs kemik sınırlarında belirgin yer değiştirme (ekspansiyon) ve incelme izleniyor.
Klinik ve radyolojik bulguları verilen bu durumun patofizyolojik birincil kök nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Maksiller sinüs ostiumunun mekanik tıkanmasıyla sekresyon birikimi
Açıklama: Mukoseller, sinüs ostiumunun inflamatuar veya mekanik obstrüksiyonu sonucu normal mukus sekresyonunun drene olamayıp sinüs içinde birikmesiyle oluşur. Aylar/yıllar içinde artan bu antrum içi sıvı basıncı, hidrolik prensiplerle sinüs kemik duvarlarında eşit ekspansiyon (dışa doğru yer değiştirme), incelme ve yer yer destrüksiyon yapar. Artan basınca bağlı olarak tavan (orbita tabanı) yer değiştirmesi diplopiye, alveolar proses yer değiştirmesi diş kayıplarına sebep olur. Fungal kalsifikasyonlar veya genetik siliyer disfonksiyon bu hidrolik balonu yaratmaz.

---

### ÇİFT 41 (Benzerlik: 0.71)

**Soru 1 (ID: 8d4c5fd4-2300-455d-bcbb-4cf32e9d31f8)**
Soru Kökü: Bir paranazal sinüs radyografisinde izlenen kistik kitlelerin, basit retansiyon psödokistlerinden ziyade enflamatuar polip olma ihtimalini en çok artıran spesifik görüntüleme bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kitleye difüz mukozal kalınlaşmaların eşlik etmesi
Açıklama: Polipler kronik olarak enflame olmuş sinüs müköz membranının oluşturduğu düzensiz katlantılar olduğundan, her zaman jeneralize bir mukozal kalınlaşma zemininde gelişirler. Retansiyon psödokistleri ise genellikle normal incelikteki bir mukoza üzerinde izole kubbe yapısı şeklinde dururlar. Kortikal sınır her ikisinde de yoktur, varsa kistik/neoplastik bir ayrım düşünülmelidir.

**Soru 2 (ID: 9a3f2809-9f81-4ec2-8153-c9f0f2a99f81)**
Soru Kökü: Maksiller sinüs içinden lokalize kaynak alan veya komşu diş köklerinden sinüs lümenine doğru büyüme eğilimi gösteren kistik formasyonlar, çevresel kemik doku ile kurdukları reaktif ilişkiye göre birbirlerinden kolaylıkla ayırt edilebilirler.
Radyolojik görüntülemede periferinde belirgin veya ince bir beyaz 'kortikal sınır' **bulunmayan**, kemiği itmediği için reaktif osteogenez tetiklemeyen yumuşak doku lezyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Retansiyon psödokisti
Açıklama: Odontojenik kistler (radiküler kist, dentijeröz kist) ve benign odontojenik tümörler (ameloblastoma), doğaları gereği sert kemik matriksinin içinde basınçla büyüme gösterirler. Genişleyen kitlenin çevre kemik duvarlara yaptığı sürekli mekanik itme kuvveti, sınır bölgesindeki osteoblastları uyararak radyografide tümörü net bir şekilde çevreleyen ince beyaz 'kortikal bir duvar' (hiperostoz) oluşmasına neden olur. Oysa retansiyon psödokistleri bütünüyle yumuşak dokudaki sinüs mukozasından kaynaklanan sıvı birikintileridir; kemik içinde gelişmedikleri ve kemiği doğrudan itmedikleri için radyografik profillerinde hiçbir kortikal sınır hattı barındırmazlar.

---

### ÇİFT 42 (Benzerlik: 0.71)

**Soru 1 (ID: 2c225743-4322-4ab0-80d5-5ee09cf2461d)**
Soru Kökü: Maksiller sinüste izlenen retansiyon psödokistlerinin radyografik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Etrafı belirgin bir kortikal sınırla **çevrilidir**.
Açıklama: Retansiyon psödokistleri, odontojen kistlerden farklı olarak etrafı ince bir kortikal sınırla çevrili DEĞİLDİR. Bu kortikal sınır yokluğu ve kubbe şekilli büyüme deseni, lezyonun odontojenik kist veya neoplazmlardan ayrımında kullanılan en kritik ayırıcı tanı kriteridir.

**Soru 2 (ID: fbc2c838-0904-4a38-90ab-0df7d21844b9)**
Soru Kökü: Maksiller sinüs boşluğuna doğru ekspansiyon yapan bir radiküler kistin radyografik özellikleriyle normal sinüs anatomisi karşılaştırıldığında, aşağıdakilerden hangisi kist lezyonunun ayırt edici bir özelliğidir?
Doğru Şık (E): Sinüs duvarlarında izlenen normal vasküler yapıların kist sınırları içinde izlenmemesi
Açıklama: Odontojenik kistler maksiller sinüse doğru büyüdüklerinde kendi epitelyal döşemeleri ve kortikal sınırlarını sinüs boşluğuna iterler. Bu kistik alanın içerisinde, normal maksiller sinüs duvarında yer alan posterior süperior alveolar arter gibi vasküler kanalların izi bulunmaz. Vasküler izlerin aniden kesilmesi, radyolusent alanın bir kist boşluğu olduğunu sinüs boşluğundan ayırmada kritik anatomik bir ipucudur.

---

### ÇİFT 43 (Benzerlik: 0.71)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: 9a3f2809-9f81-4ec2-8153-c9f0f2a99f81)**
Soru Kökü: Maksiller sinüs içinden lokalize kaynak alan veya komşu diş köklerinden sinüs lümenine doğru büyüme eğilimi gösteren kistik formasyonlar, çevresel kemik doku ile kurdukları reaktif ilişkiye göre birbirlerinden kolaylıkla ayırt edilebilirler.
Radyolojik görüntülemede periferinde belirgin veya ince bir beyaz 'kortikal sınır' **bulunmayan**, kemiği itmediği için reaktif osteogenez tetiklemeyen yumuşak doku lezyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Retansiyon psödokisti
Açıklama: Odontojenik kistler (radiküler kist, dentijeröz kist) ve benign odontojenik tümörler (ameloblastoma), doğaları gereği sert kemik matriksinin içinde basınçla büyüme gösterirler. Genişleyen kitlenin çevre kemik duvarlara yaptığı sürekli mekanik itme kuvveti, sınır bölgesindeki osteoblastları uyararak radyografide tümörü net bir şekilde çevreleyen ince beyaz 'kortikal bir duvar' (hiperostoz) oluşmasına neden olur. Oysa retansiyon psödokistleri bütünüyle yumuşak dokudaki sinüs mukozasından kaynaklanan sıvı birikintileridir; kemik içinde gelişmedikleri ve kemiği doğrudan itmedikleri için radyografik profillerinde hiçbir kortikal sınır hattı barındırmazlar.

---

### ÇİFT 44 (Benzerlik: 0.71)

**Soru 1 (ID: b3ed38c2-d20c-464b-806f-1d241aa7445e)**
Soru Kökü: Maksiller büyük azı dişinin çekimi esnasında dişin palatinal kökü aniden gözden kaybolmuştur. Hekim kökün sinüs zarını (Schneiderian membran) yırtarak sinüs lümenine kaçıp kaçmadığını klinik olarak anlamak için hastadan burnunu eliyle kapatarak ve ağzını açık tutarak hafifçe burnundan hava vermesini ister.
Bu provokasyon sırasında soket tabanındaki kan gölcüğünde köpürme veya hava kabarcıkları izlenmesi fizyolojik olarak neyin kanıtıdır?
Doğru Şık (B): Alveolar kemik ile sinüs lümeni arasında oroantral iştirak oluştuğunu
Açıklama: Burun hava yolu kapatılıp nazofarenks yoluyla hava üflendiğinde (modifiye Valsalva manevrası), paranazal sinüsler içindeki statik basınç keskin bir şekilde artar. Eğer travmatik çekim sonucu maksiller sinüs taban kemiği ve zarı yırtılarak ağız ortamıyla bir kanal (oroantral fistül/iştirak) meydana gelmişse, artan hava basıncı bu yırtıktan ağız boşluğuna kaçmaya çalışır. Havanın sokette biriken kan veya tükürük sıvısının içinden geçişi, doğrudan görsel köpürme veya baloncuklanma yaratarak anatomik bariyerin tamamen ihlal edildiğini hekime kesin olarak mekanize eder.

**Soru 2 (ID: f8fdeb7f-da44-4729-ad0d-1fe38e95018e)**
Soru Kökü: Kırk beş yaşında kadın hasta, sağ üst birinci büyük azı dişinin çekimi sırasında hekimin şüphesi üzerine klinik bir teste tabi tutuluyor. Hastanın burnu tutulup burnundan hava vermesi istendiğinde, yeni çekim yapılmış sokette kan içerisinde baloncuklar oluştuğu gözlemleniyor. Bu klinik senaryoda hastada geliştiği kanıtlanan **en olası** komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Oroantral fistül
Açıklama: Çekim sırasında maksiller sinüs tabanının devamlılığının kaybolması oroantral fistül ile sonuçlanır. Hastanın burnunu tutarak hava vermesi (Valsalva manevrası) sırasında çekim soketinde baloncuklar görülmesi, oral kavite ile paranazal sinüs arasında bir iştirak olduğunu kesin olarak kanıtlar. Kök fraktürü veya alveolar fraktür doğrudan hava sızıntısı yapmaz.

---

### ÇİFT 45 (Benzerlik: 0.70)

**Soru 1 (ID: 823fd3f0-b0aa-4a8e-95ac-c5b657a709f4)**
Soru Kökü: Elli beş yaşında bir hasta, sol yanağında dolgunluk, diplopi ve sol üst molar dişlerinde kayıp şikayetiyle başvuruyor. Radyografik değerlendirmede sol maksiller sinüs lümeninde hidrolik şekilli bir radyoopasite, sinüs kemik sınırlarında belirgin yer değiştirme (ekspansiyon) ve incelme izleniyor.
Klinik ve radyolojik bulguları verilen bu durumun patofizyolojik birincil kök nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Maksiller sinüs ostiumunun mekanik tıkanmasıyla sekresyon birikimi
Açıklama: Mukoseller, sinüs ostiumunun inflamatuar veya mekanik obstrüksiyonu sonucu normal mukus sekresyonunun drene olamayıp sinüs içinde birikmesiyle oluşur. Aylar/yıllar içinde artan bu antrum içi sıvı basıncı, hidrolik prensiplerle sinüs kemik duvarlarında eşit ekspansiyon (dışa doğru yer değiştirme), incelme ve yer yer destrüksiyon yapar. Artan basınca bağlı olarak tavan (orbita tabanı) yer değiştirmesi diplopiye, alveolar proses yer değiştirmesi diş kayıplarına sebep olur. Fungal kalsifikasyonlar veya genetik siliyer disfonksiyon bu hidrolik balonu yaratmaz.

**Soru 2 (ID: fd43b1fd-f9ae-4dd8-b768-fb972457ba25)**
Soru Kökü: Kırk beş yaşında kadın hasta, medikal tedaviye dirençli sağ taraflı burun tıkanıklığı ve baş ağrısı şikayetiyle başvuruyor. Çekilen konik ışınlı BT görüntülemesinde, sağ maksiller sinüs tabanında, daha önce endodontik tedavi görmüş 16 numaralı dişin kök apeksinin hemen üzerinde, lineer mikrokalsifikasyon alanlarıyla çevrelenmiş parlak metalik yoğunlukta bir odak saptanıyor.
Bu klinik senaryoda öncelikli tanı ve en uygun tedavi yaklaşımı aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (E): Fungus topu (Aspergilloma) / Endoskopik endonazal cerrahi
Açıklama: Diş hekimliği uygulamalarında kanal dolgu materyallerinin (özellikle çinko oksit içerenler) kök ucundan sinüs lümenine taşması, lokal fungal elemanlar (Aspergillus türleri) için bir inkübasyon nidusu görevi görerek 'fungus topu' (aspergilloma) gelişimini şiddetle tetikler. Radyografide merkeze yerleşmiş parlak metalik dansite ve etrafındaki sarmal mikrokalsifikasyonlar bu kolonizasyonun patognomonik işaretidir. Medikal ve immün sisteme dirençli olan bu inaktif mantar toplarının kesin tedavisi, anatomik fizyolojiyi maksimize eden endoskopik endonazal cerrahi eksizyondur.

---

### ÇİFT 46 (Benzerlik: 0.70)

**Soru 1 (ID: 823fd3f0-b0aa-4a8e-95ac-c5b657a709f4)**
Soru Kökü: Elli beş yaşında bir hasta, sol yanağında dolgunluk, diplopi ve sol üst molar dişlerinde kayıp şikayetiyle başvuruyor. Radyografik değerlendirmede sol maksiller sinüs lümeninde hidrolik şekilli bir radyoopasite, sinüs kemik sınırlarında belirgin yer değiştirme (ekspansiyon) ve incelme izleniyor.
Klinik ve radyolojik bulguları verilen bu durumun patofizyolojik birincil kök nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Maksiller sinüs ostiumunun mekanik tıkanmasıyla sekresyon birikimi
Açıklama: Mukoseller, sinüs ostiumunun inflamatuar veya mekanik obstrüksiyonu sonucu normal mukus sekresyonunun drene olamayıp sinüs içinde birikmesiyle oluşur. Aylar/yıllar içinde artan bu antrum içi sıvı basıncı, hidrolik prensiplerle sinüs kemik duvarlarında eşit ekspansiyon (dışa doğru yer değiştirme), incelme ve yer yer destrüksiyon yapar. Artan basınca bağlı olarak tavan (orbita tabanı) yer değiştirmesi diplopiye, alveolar proses yer değiştirmesi diş kayıplarına sebep olur. Fungal kalsifikasyonlar veya genetik siliyer disfonksiyon bu hidrolik balonu yaratmaz.

**Soru 2 (ID: 9ac60142-d98f-4eec-9804-34acb9e3f2d8)**
Soru Kökü: Otuz beş yaşındaki kadın hasta; sağ burun deliğinde tıkanıklık, kötü kokulu akıntı ve kokuları kötü algılama (kakozmi) şikayetiyle başvurmuştur. Görüntülemelerde sağ maksiller sinüs içerisinde yuvarlak, iyi sınırlı ve kalsifiye bir nidus etrafında şekillenmiş radyoopak bir kitle saptanmıştır. Bu tabloya neden olan en olası patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Antrolit
Açıklama: Antrolit, kalsiyum tuzlarının bir nidus etrafında çökelmesiyle oluşan ve kronik sinüziti tetikleyerek pürülan akıntı, kakozmi (kötü koku algılama) ve anozmiye yol açan kalsifiye bir kitledir. Osteom da kalsifiyedir ancak genellikle aseptomatiktir ve kakozmi/pürülan akıntı gibi enfektif semptomlar yaratmaz.

---

### ÇİFT 47 (Benzerlik: 0.70)

**Soru 1 (ID: 751c37e6-415c-4e6b-b8ae-ba562403608b)**
Soru Kökü: Panoramik radyografide tek taraflı maksiller sinüs bölgesinde homojen radyoopasite artışı izlenen asemptomatik bir hastada, bu durumun enflamatuar bir patolojiden ziyade maksiller sinüs hipoplazisine bağlı olduğunu kanıtlayan en güçlü morfolojik belirteç aşağıdakilerden hangisidir?
Doğru Şık (D): Etkilenen sinüs etrafında görece daha fazla maksiller kemik dokusu bulunması
Açıklama: Maksiller sinüs hipoplazisinde, sinüs yeterince pnömatize olamadığı (havalanmadığı) için etrafında görece daha kalın ve fazla maksiller kemik dokusu kalır; bu da radyografide rölatif bir radyoopasite olarak izlenir. Orbita tabanının inferiora deplasmanı sessiz sinüs sendromunun bulgusudur, hipoplazinin değil. Duvar konfigürasyonu patoloji ile anatomik varyasyonu ayırmada temel anahtardır.

**Soru 2 (ID: d03ef412-fca4-47cd-bef4-5fc8bc9df48d)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ yanakta yavaş gelişen asimetri şikayetiyle başvuruyor. Alınan panoramik radyografta, sağ maksiller sinüsü tamamen dolduran ve sinüs sınırlarını silikleştiren 'buzlu cam' manzarasında radyoopak bir genişleme izleniyor. Elde edilen bulgularla fibröz displazi düşünülen bu hastada, ayırıcı tanıda yer almasına rağmen 'maksiller sinüs obliterasyonuna yol açmaması' karakteristik özelliği ile dışlanması gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Paget hastalığı
Açıklama: Fibröz displazi, maksiller sinüste kemik yapımı ile obliterasyona ve buzlu cam görüntüsüne neden olabilir. Ancak ayırıcı tanıda yer alan Paget hastalığı karakteristik olarak sinüs obliterasyonu yapmaz. Ossifiye fibrom ise yumuşak doku kapsülü bulundurur ve fibröz displaziye benzer şekilde sinüste genişleme veya obliterasyon yapabilir.

---

### ÇİFT 48 (Benzerlik: 0.70)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: 6f66d8ab-3040-4cc5-a746-4ea2d7a223bf)**
Soru Kökü: Otuz beş yaşında asemptomatik bir hastada rutin dental kontroller sırasında tesadüfen saptanan kemik yoğunluğunda ekzofitik radyopasiteler izlenmiştir. Paranazal bölgede bu tip osteomaların en sık yerleştiği anatomik lokasyonlar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Frontal sinüs - Etmoid sinüs
Açıklama: Osteomalar yavaş büyüyen kemik tümörleridir ve kraniofasiyal bölgede en sık frontal sinüste, ikinci sıklıkta ise etmoid sinüste lokalize olurlar. Maksiller sinüste görülmeleri nispeten daha nadirdir. Büyüdüklerinde çevre dokulara (orbita veya kraniuma) baskı yaparak proptozis veya fistül gibi komplikasyonlara yol açabilirler.

---

### ÇİFT 49 (Benzerlik: 0.70)

**Soru 1 (ID: 8d4c5fd4-2300-455d-bcbb-4cf32e9d31f8)**
Soru Kökü: Bir paranazal sinüs radyografisinde izlenen kistik kitlelerin, basit retansiyon psödokistlerinden ziyade enflamatuar polip olma ihtimalini en çok artıran spesifik görüntüleme bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kitleye difüz mukozal kalınlaşmaların eşlik etmesi
Açıklama: Polipler kronik olarak enflame olmuş sinüs müköz membranının oluşturduğu düzensiz katlantılar olduğundan, her zaman jeneralize bir mukozal kalınlaşma zemininde gelişirler. Retansiyon psödokistleri ise genellikle normal incelikteki bir mukoza üzerinde izole kubbe yapısı şeklinde dururlar. Kortikal sınır her ikisinde de yoktur, varsa kistik/neoplastik bir ayrım düşünülmelidir.

**Soru 2 (ID: fbc2c838-0904-4a38-90ab-0df7d21844b9)**
Soru Kökü: Maksiller sinüs boşluğuna doğru ekspansiyon yapan bir radiküler kistin radyografik özellikleriyle normal sinüs anatomisi karşılaştırıldığında, aşağıdakilerden hangisi kist lezyonunun ayırt edici bir özelliğidir?
Doğru Şık (E): Sinüs duvarlarında izlenen normal vasküler yapıların kist sınırları içinde izlenmemesi
Açıklama: Odontojenik kistler maksiller sinüse doğru büyüdüklerinde kendi epitelyal döşemeleri ve kortikal sınırlarını sinüs boşluğuna iterler. Bu kistik alanın içerisinde, normal maksiller sinüs duvarında yer alan posterior süperior alveolar arter gibi vasküler kanalların izi bulunmaz. Vasküler izlerin aniden kesilmesi, radyolusent alanın bir kist boşluğu olduğunu sinüs boşluğundan ayırmada kritik anatomik bir ipucudur.

---

### ÇİFT 50 (Benzerlik: 0.70)

**Soru 1 (ID: 7df7de4a-0c0a-4110-bba9-ae99e5e18dcb)**
Soru Kökü: 35 yaşında asemptomatik kadın hastanın rutin panoramik radyografisinde sağ maksiller sinüs tabanında kubbe şeklinde homojen bir radyoopasite saptanıyor. Bu lezyonun epitel döşeli bir odontojenik kist yerine, benign bir retansiyon psödokisti olduğunu savunan bir hekimin dayandığı en güçlü radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kortikal sınırla çevrili olmaması ve komşu dişlerin lamina dura devamlılığının bozulmaması
Açıklama: Retansiyon psödokistleri odontojenik kist ve tümörlerde görülen kortikal sınıra sahip değildir ve çevresel kemik yıkımı yapmadıkları için komşu dişlerin lamina dura bütünlüğünü bozmazlar. Odontojenik kistler ise sınırları belirli radyografik kortikal bir hatta sahiptir ve sıklıkla kök bölgesindeki lamina durayı harabiyete uğratırlar.

**Soru 2 (ID: fbc2c838-0904-4a38-90ab-0df7d21844b9)**
Soru Kökü: Maksiller sinüs boşluğuna doğru ekspansiyon yapan bir radiküler kistin radyografik özellikleriyle normal sinüs anatomisi karşılaştırıldığında, aşağıdakilerden hangisi kist lezyonunun ayırt edici bir özelliğidir?
Doğru Şık (E): Sinüs duvarlarında izlenen normal vasküler yapıların kist sınırları içinde izlenmemesi
Açıklama: Odontojenik kistler maksiller sinüse doğru büyüdüklerinde kendi epitelyal döşemeleri ve kortikal sınırlarını sinüs boşluğuna iterler. Bu kistik alanın içerisinde, normal maksiller sinüs duvarında yer alan posterior süperior alveolar arter gibi vasküler kanalların izi bulunmaz. Vasküler izlerin aniden kesilmesi, radyolusent alanın bir kist boşluğu olduğunu sinüs boşluğundan ayırmada kritik anatomik bir ipucudur.

---

### ÇİFT 51 (Benzerlik: 0.70)

**Soru 1 (ID: 15effc64-6e84-4814-85fa-f184aeebc315)**
Soru Kökü: Şiddetli baş ağrısı, bilateral burun tıkanıklığı, yanakta dolgunluk ve ilgili sinüste basınca karşı klinik hassasiyet şikayetleriyle başvuran 'akut maksiller sinüzit' tablosundaki bir hastanın radyografik incelemesinde aşağıdaki bulgulardan hangisinin izlenmesi **en az** olasıdır?
Doğru Şık (E): Enfeksiyonun çevredeki kortikal kemikte yoğun litik rezorpsiyon ve harabiyet oluşturması
Açıklama: Akut veya kronik sinüzit süreçlerinde inflamatuar reaksiyon sıvısına bağlı lokal opasite artışları (hava-sıvı sınırı, mukozit polipleri, total opasifikasyon) standart olarak görülür. Ancak sinüzite bağlı olarak sinüsün sağlıklı kortikal 'kemik sınırında belirgin rezorpsiyon veya kesinti olması' oldukça enderdir; bu tür bir kortikal dekstrüksiyon travmaya, agresif cerrahiye veya esas olarak malign tümörlere işaret eder.

**Soru 2 (ID: 751c37e6-415c-4e6b-b8ae-ba562403608b)**
Soru Kökü: Panoramik radyografide tek taraflı maksiller sinüs bölgesinde homojen radyoopasite artışı izlenen asemptomatik bir hastada, bu durumun enflamatuar bir patolojiden ziyade maksiller sinüs hipoplazisine bağlı olduğunu kanıtlayan en güçlü morfolojik belirteç aşağıdakilerden hangisidir?
Doğru Şık (D): Etkilenen sinüs etrafında görece daha fazla maksiller kemik dokusu bulunması
Açıklama: Maksiller sinüs hipoplazisinde, sinüs yeterince pnömatize olamadığı (havalanmadığı) için etrafında görece daha kalın ve fazla maksiller kemik dokusu kalır; bu da radyografide rölatif bir radyoopasite olarak izlenir. Orbita tabanının inferiora deplasmanı sessiz sinüs sendromunun bulgusudur, hipoplazinin değil. Duvar konfigürasyonu patoloji ile anatomik varyasyonu ayırmada temel anahtardır.

---

### ÇİFT 52 (Benzerlik: 0.70)

**Soru 1 (ID: 3eb800ef-884e-40ec-a09a-2122caa9343b)**
Soru Kökü: On dört yaşında kız hasta fasiyal asimetri şikayetiyle başvurmuştur. Çekilen konik ışınlı bilgisayarlı tomografide sağ posterior maksillayı kaplayan, korteks devamlılığını koruyan ancak sınırları belirsiz, diş köklerinde ayrılmaya neden olan 'portakal kabuğu / buzlu cam' radyopasitesi saptanmıştır. Olası teşhis aşağıdakilerden hangisidir?
Doğru Şık (D): Fibröz displazi
Açıklama: Genç hastalarda izlenen, sınırları belirsiz, dişleri rezorbe etmeden ayıran ve klasik 'buzlu cam' manzarasını oluşturan patoloji fibröz displazidir. Semento-ossifiye fibromanın belirgin ve keskin bir kapsülü vardır. Osteosarkom ise bu yaşta görülse bile korteksi agresif şekilde parçalayan ışınsal kemik spekülleri üretir, asimetrik şişlik korteks sağlamken olmaz.

**Soru 2 (ID: d03ef412-fca4-47cd-bef4-5fc8bc9df48d)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ yanakta yavaş gelişen asimetri şikayetiyle başvuruyor. Alınan panoramik radyografta, sağ maksiller sinüsü tamamen dolduran ve sinüs sınırlarını silikleştiren 'buzlu cam' manzarasında radyoopak bir genişleme izleniyor. Elde edilen bulgularla fibröz displazi düşünülen bu hastada, ayırıcı tanıda yer almasına rağmen 'maksiller sinüs obliterasyonuna yol açmaması' karakteristik özelliği ile dışlanması gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Paget hastalığı
Açıklama: Fibröz displazi, maksiller sinüste kemik yapımı ile obliterasyona ve buzlu cam görüntüsüne neden olabilir. Ancak ayırıcı tanıda yer alan Paget hastalığı karakteristik olarak sinüs obliterasyonu yapmaz. Ossifiye fibrom ise yumuşak doku kapsülü bulundurur ve fibröz displaziye benzer şekilde sinüste genişleme veya obliterasyon yapabilir.

---

### ÇİFT 53 (Benzerlik: 0.70)

**Soru 1 (ID: 15effc64-6e84-4814-85fa-f184aeebc315)**
Soru Kökü: Şiddetli baş ağrısı, bilateral burun tıkanıklığı, yanakta dolgunluk ve ilgili sinüste basınca karşı klinik hassasiyet şikayetleriyle başvuran 'akut maksiller sinüzit' tablosundaki bir hastanın radyografik incelemesinde aşağıdaki bulgulardan hangisinin izlenmesi **en az** olasıdır?
Doğru Şık (E): Enfeksiyonun çevredeki kortikal kemikte yoğun litik rezorpsiyon ve harabiyet oluşturması
Açıklama: Akut veya kronik sinüzit süreçlerinde inflamatuar reaksiyon sıvısına bağlı lokal opasite artışları (hava-sıvı sınırı, mukozit polipleri, total opasifikasyon) standart olarak görülür. Ancak sinüzite bağlı olarak sinüsün sağlıklı kortikal 'kemik sınırında belirgin rezorpsiyon veya kesinti olması' oldukça enderdir; bu tür bir kortikal dekstrüksiyon travmaya, agresif cerrahiye veya esas olarak malign tümörlere işaret eder.

**Soru 2 (ID: dfb36724-c640-488b-a3bc-fc35a6c5b8ee)**
Soru Kökü: Akut ve kronik maksiller sinüzitin klinik ve radyografik bulguları karşılaştırıldığında aşağıdakilerden hangisi doğrudur?
Doğru Şık (B): Kronik sinüzit ağrısız seyredebilir ve sistemik olarak alerjik rinit veya astım ile ilişkili olabilir.
Açıklama: Kronik maksiller sinüzit 3 ay boyunca iyileşmeyen enfeksiyonun sonucudur, akut alevlenmeler dışında genelde ağrısızdır ve astım, alerjik rinit gibi durumlarla ilişkilidir. Akut sinüzit sinüste en çok ağrıya yol açan durumdur ve kemik rezorpsiyonu akut sinüzit için son derece nadirdir (genellikle travma veya tümör kökenlidir).

---

### ÇİFT 54 (Benzerlik: 0.70)

**Soru 1 (ID: 7df7de4a-0c0a-4110-bba9-ae99e5e18dcb)**
Soru Kökü: 35 yaşında asemptomatik kadın hastanın rutin panoramik radyografisinde sağ maksiller sinüs tabanında kubbe şeklinde homojen bir radyoopasite saptanıyor. Bu lezyonun epitel döşeli bir odontojenik kist yerine, benign bir retansiyon psödokisti olduğunu savunan bir hekimin dayandığı en güçlü radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kortikal sınırla çevrili olmaması ve komşu dişlerin lamina dura devamlılığının bozulmaması
Açıklama: Retansiyon psödokistleri odontojenik kist ve tümörlerde görülen kortikal sınıra sahip değildir ve çevresel kemik yıkımı yapmadıkları için komşu dişlerin lamina dura bütünlüğünü bozmazlar. Odontojenik kistler ise sınırları belirli radyografik kortikal bir hatta sahiptir ve sıklıkla kök bölgesindeki lamina durayı harabiyete uğratırlar.

**Soru 2 (ID: 8d4c5fd4-2300-455d-bcbb-4cf32e9d31f8)**
Soru Kökü: Bir paranazal sinüs radyografisinde izlenen kistik kitlelerin, basit retansiyon psödokistlerinden ziyade enflamatuar polip olma ihtimalini en çok artıran spesifik görüntüleme bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kitleye difüz mukozal kalınlaşmaların eşlik etmesi
Açıklama: Polipler kronik olarak enflame olmuş sinüs müköz membranının oluşturduğu düzensiz katlantılar olduğundan, her zaman jeneralize bir mukozal kalınlaşma zemininde gelişirler. Retansiyon psödokistleri ise genellikle normal incelikteki bir mukoza üzerinde izole kubbe yapısı şeklinde dururlar. Kortikal sınır her ikisinde de yoktur, varsa kistik/neoplastik bir ayrım düşünülmelidir.

---

### ÇİFT 55 (Benzerlik: 0.69)

**Soru 1 (ID: 1ff74f66-1157-47a3-90d7-249c07ac7efe)**
Soru Kökü: Benign fibro-osseöz lezyonlar olan fibröz displazi ile semento-ossifiye fibrom vakalarının maksiller sinüs yerleşimi gösterdiğinde radyografik sınırlarına bakılarak ayırt edilmesi diagnostik öneme sahiptir.
Bu iki lezyonun ayırıcı tanısında, kitlenin sınır mimarisi değerlendirilirken aşağıdaki bulgulardan hangisi doğrudan ossifiye fibroma lehinedir?
Doğru Şık (A): Kitlenin çevre kemikle kaynaştığı net, ince bir yumuşak doku kapsülünün izlenmesi
Açıklama: Semento-ossifiye fibromlar fizyolojik dokudan bağımsız köken alan gerçek benign santral neoplazmlar oldukları için dışa doğru (sentrifüj) büyürken çevre normal kemikle kendi aralarında fibröz bir yumuşak doku kapsülü oluştururlar; bu durum radyografide lezyon çevresinde belirgin bir radyolüsent hale olarak yansır. Fibröz displazi ise gerçek bir tümör değil, lokal kemik matriksinin diskohezif fibröz doku ile yer değiştirdiği gelişimsel bir durumdur; dolayısıyla asla bir kapsül oluşturmaz, çevre sağlam kemik ile belirsiz şekilde kaynaşarak sinüs duvarı morfolojisini taklit eden 'buzlu cam' görünümü yaratır.

**Soru 2 (ID: c9b280b7-1c06-49ca-b0da-99da53d88414)**
Soru Kökü: Maksiller sinüs bölgesinde yaygın radyoopak skleroz durumlarında ayırıcı tanıya gidilirken, lezyonun Fibröz Displazi mi yoksa kemik yapım-yıkım hastalığı olan Paget mi olduğunu ayırt etmede klinisyene yardımcı olan en net radyografik özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Paget hastalığının maksiller kemiği genişletmesine rağmen sinüs obliterasyonuna yol açmaması
Açıklama: Her iki hastalık da maksillada kemik genişlemesi ve opasite artışı yapar. Ancak Fibröz displazi sinüs içine doğru kütlesel büyüyerek sinüs hava boşluğunu tamamen kapatabilir (obliterasyon). Paget hastalığında ise kemik kaba ve büyük hale gelse de, sinüs lümeni sekonder olarak oblitere olmaz. Ayrıca Paget daha çok 40 yaş üstü erişkin hastalığıdır.

---

### ÇİFT 56 (Benzerlik: 0.69)

**Soru 1 (ID: 2b9c2652-a76b-4b59-909b-d7a28f5014a6)**
Soru Kökü: Bir paranazal radyografide maksiller sinüs tabanında izlenen radyopasitenin retansiyon psödokisti olduğunu gösterip, benign bir neoplazm (örn: odontoma) olasılığını ekarte eden en temel görüntüleme farklılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Oluşumun kortikal bir kemik sınırla çevrili olmaması
Açıklama: Retansiyon psödokistleri sadece mukozal bir şişlik olduklarından kemiksel (kortikal) bir sınır (halo) barındırmazlar ve sinüs içi hava ile yumuşakça örtüşürler. Odontojenik kistler veya benign neoplazmlar ise intraosseoz kökenli oldukları için genellikle ince radyoopak bir sınırla sinüs boşluğundan ayrılırlar. Kalsifikasyon retansiyon psödokistinde görülen bir özellik değildir.

**Soru 2 (ID: 751c37e6-415c-4e6b-b8ae-ba562403608b)**
Soru Kökü: Panoramik radyografide tek taraflı maksiller sinüs bölgesinde homojen radyoopasite artışı izlenen asemptomatik bir hastada, bu durumun enflamatuar bir patolojiden ziyade maksiller sinüs hipoplazisine bağlı olduğunu kanıtlayan en güçlü morfolojik belirteç aşağıdakilerden hangisidir?
Doğru Şık (D): Etkilenen sinüs etrafında görece daha fazla maksiller kemik dokusu bulunması
Açıklama: Maksiller sinüs hipoplazisinde, sinüs yeterince pnömatize olamadığı (havalanmadığı) için etrafında görece daha kalın ve fazla maksiller kemik dokusu kalır; bu da radyografide rölatif bir radyoopasite olarak izlenir. Orbita tabanının inferiora deplasmanı sessiz sinüs sendromunun bulgusudur, hipoplazinin değil. Duvar konfigürasyonu patoloji ile anatomik varyasyonu ayırmada temel anahtardır.

---

### ÇİFT 57 (Benzerlik: 0.69)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: 8d4c5fd4-2300-455d-bcbb-4cf32e9d31f8)**
Soru Kökü: Bir paranazal sinüs radyografisinde izlenen kistik kitlelerin, basit retansiyon psödokistlerinden ziyade enflamatuar polip olma ihtimalini en çok artıran spesifik görüntüleme bulgusu aşağıdakilerden hangisidir?
Doğru Şık (A): Kitleye difüz mukozal kalınlaşmaların eşlik etmesi
Açıklama: Polipler kronik olarak enflame olmuş sinüs müköz membranının oluşturduğu düzensiz katlantılar olduğundan, her zaman jeneralize bir mukozal kalınlaşma zemininde gelişirler. Retansiyon psödokistleri ise genellikle normal incelikteki bir mukoza üzerinde izole kubbe yapısı şeklinde dururlar. Kortikal sınır her ikisinde de yoktur, varsa kistik/neoplastik bir ayrım düşünülmelidir.

---

### ÇİFT 58 (Benzerlik: 0.69)

**Soru 1 (ID: 5a675a34-0326-43d7-ac49-b0fd4b58c1b0)**
Soru Kökü: Otuz sekiz yaşında erkek hasta, tek taraflı şiddetli burun tıkanıklığı ve öksürükle ağızdan da görülebilen, posteriora doğru sarkan bir yumuşak doku kitlesi şikayetiyle başvuruyor. Alınan BT kesitlerinde, maksiller sinüs lümeninde yer alan kitlenin medial duvarda kemik harabiyetine neden olduğu gözleniyor.
Bu klinik tabloya yol açan ve soliter sinonazal lezyon karakterinde olan **en olası** benign patoloji aşağıdakilerden hangisidir?
Doğru Şık (A): Antrokoanal polip
Açıklama: Antrokoanal polipler, doğrudan maksiller sinüs kaynaklı soliter enflamatuar poliplerdir ve büyüdükçe anatomik ostium yoluyla nazofarenkse prolabe olarak ağızdan izlenebilir hale gelebilirler. Benign karakterde olmalarına rağmen ekspansif büyümeleri nedeniyle kemik harabiyeti ve komşu yapıları deplase etme potansiyeli taşırlar; bu radyolojik agresiflik nedeniyle malign tümörleri (ör. karsinom) taklit edebilirler. Skuamöz hücreli karsinom benzer şiddette destrüksiyon yapsa da 'benign soliter sinonazal lezyon' tanımı ve yaş profili doğrudan antrokoanal polipi işaret eder.

**Soru 2 (ID: d03ef412-fca4-47cd-bef4-5fc8bc9df48d)**
Soru Kökü: Yirmi dört yaşında erkek hasta, sağ yanakta yavaş gelişen asimetri şikayetiyle başvuruyor. Alınan panoramik radyografta, sağ maksiller sinüsü tamamen dolduran ve sinüs sınırlarını silikleştiren 'buzlu cam' manzarasında radyoopak bir genişleme izleniyor. Elde edilen bulgularla fibröz displazi düşünülen bu hastada, ayırıcı tanıda yer almasına rağmen 'maksiller sinüs obliterasyonuna yol açmaması' karakteristik özelliği ile dışlanması gereken patoloji aşağıdakilerden hangisidir?
Doğru Şık (D): Paget hastalığı
Açıklama: Fibröz displazi, maksiller sinüste kemik yapımı ile obliterasyona ve buzlu cam görüntüsüne neden olabilir. Ancak ayırıcı tanıda yer alan Paget hastalığı karakteristik olarak sinüs obliterasyonu yapmaz. Ossifiye fibrom ise yumuşak doku kapsülü bulundurur ve fibröz displaziye benzer şekilde sinüste genişleme veya obliterasyon yapabilir.

---

### ÇİFT 59 (Benzerlik: 0.69)

**Soru 1 (ID: 751c37e6-415c-4e6b-b8ae-ba562403608b)**
Soru Kökü: Panoramik radyografide tek taraflı maksiller sinüs bölgesinde homojen radyoopasite artışı izlenen asemptomatik bir hastada, bu durumun enflamatuar bir patolojiden ziyade maksiller sinüs hipoplazisine bağlı olduğunu kanıtlayan en güçlü morfolojik belirteç aşağıdakilerden hangisidir?
Doğru Şık (D): Etkilenen sinüs etrafında görece daha fazla maksiller kemik dokusu bulunması
Açıklama: Maksiller sinüs hipoplazisinde, sinüs yeterince pnömatize olamadığı (havalanmadığı) için etrafında görece daha kalın ve fazla maksiller kemik dokusu kalır; bu da radyografide rölatif bir radyoopasite olarak izlenir. Orbita tabanının inferiora deplasmanı sessiz sinüs sendromunun bulgusudur, hipoplazinin değil. Duvar konfigürasyonu patoloji ile anatomik varyasyonu ayırmada temel anahtardır.

**Soru 2 (ID: c9b280b7-1c06-49ca-b0da-99da53d88414)**
Soru Kökü: Maksiller sinüs bölgesinde yaygın radyoopak skleroz durumlarında ayırıcı tanıya gidilirken, lezyonun Fibröz Displazi mi yoksa kemik yapım-yıkım hastalığı olan Paget mi olduğunu ayırt etmede klinisyene yardımcı olan en net radyografik özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Paget hastalığının maksiller kemiği genişletmesine rağmen sinüs obliterasyonuna yol açmaması
Açıklama: Her iki hastalık da maksillada kemik genişlemesi ve opasite artışı yapar. Ancak Fibröz displazi sinüs içine doğru kütlesel büyüyerek sinüs hava boşluğunu tamamen kapatabilir (obliterasyon). Paget hastalığında ise kemik kaba ve büyük hale gelse de, sinüs lümeni sekonder olarak oblitere olmaz. Ayrıca Paget daha çok 40 yaş üstü erişkin hastalığıdır.

---

### ÇİFT 60 (Benzerlik: 0.69)

**Soru 1 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

**Soru 2 (ID: 78e055b0-b0c8-4f9f-a502-e98325146b0a)**
Soru Kökü: Kırk yaşında erkek hasta; sağ maksiller yanak bölgesinde doluluk hissi, baş hareketleriyle artan zonklayıcı ağrı ve dişlerde perküsyon hassasiyeti ile kliniğe başvurmuştur. Waters grafisinde sağ maksiller sinüste düz bir yatay hat ile birbirinden ayrılan radyolüsent ve radyoopak alan (hava-sıvı seviyesi) saptanmıştır. Bu klinik ve radyografik veriler ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Akut maksiller sinüzit
Açıklama: Akut maksiller sinüzit, sinüs içerisindeki enfekte sıvı birikimi nedeniyle radyograflarda yer çekimine paralel belirgin bir hava-sıvı seviyesi oluşturur ve baş hareketleriyle artan şiddetli ağrı tipik klinik bulgusudur. Retansiyon psödokisti kubbe formunda lokalize izlenir ve genellikle asemptomatiktir. Hava-sıvı seviyesinin varlığı akut inflamatuar eksüdasyonun en kesin kanıtıdır.

---

### ÇİFT 61 (Benzerlik: 0.69)

**Soru 1 (ID: 823fd3f0-b0aa-4a8e-95ac-c5b657a709f4)**
Soru Kökü: Elli beş yaşında bir hasta, sol yanağında dolgunluk, diplopi ve sol üst molar dişlerinde kayıp şikayetiyle başvuruyor. Radyografik değerlendirmede sol maksiller sinüs lümeninde hidrolik şekilli bir radyoopasite, sinüs kemik sınırlarında belirgin yer değiştirme (ekspansiyon) ve incelme izleniyor.
Klinik ve radyolojik bulguları verilen bu durumun patofizyolojik birincil kök nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Maksiller sinüs ostiumunun mekanik tıkanmasıyla sekresyon birikimi
Açıklama: Mukoseller, sinüs ostiumunun inflamatuar veya mekanik obstrüksiyonu sonucu normal mukus sekresyonunun drene olamayıp sinüs içinde birikmesiyle oluşur. Aylar/yıllar içinde artan bu antrum içi sıvı basıncı, hidrolik prensiplerle sinüs kemik duvarlarında eşit ekspansiyon (dışa doğru yer değiştirme), incelme ve yer yer destrüksiyon yapar. Artan basınca bağlı olarak tavan (orbita tabanı) yer değiştirmesi diplopiye, alveolar proses yer değiştirmesi diş kayıplarına sebep olur. Fungal kalsifikasyonlar veya genetik siliyer disfonksiyon bu hidrolik balonu yaratmaz.

**Soru 2 (ID: bd2f7317-1a9f-4b19-bd21-9c17642a2c94)**
Soru Kökü: Maksiller sinüs lümeni içerisinde radyografik olarak izlenen lokalize kalsifiye lezyonların değerlendirilmesinde etyolojik nidus faktörleri oldukça değişkendir.
Aşağıdaki durumlardan hangisi, sinüs lümeninde bir kalsifikasyona (antrolit vb.) yol açan intrensek (içsel) fizyolojik faktörlerden biri **değildir**?
Doğru Şık (B): Endodontik tedavi sırasında sinüs boşluğuna itilmiş kanal patı
Açıklama: Sinüs içerisinde kalsiyum tuzlarının bir çekirdek (nidus) etrafında çökerek antrolit veya benzeri kalsifikasyonlar oluşturması içsel veya dışsal kaynaklı olabilir. Kök kanal dolgu patının iatrojenik olarak hekim tarafından sinüs lümenine itilmesi, dış ortamdan vücuda sokulan yabancı bir materyal olduğu için ekstrinsik (dışsal) bir faktördür. Yoğunlaşmış mukus, drenaj bozukluğuna sekonder mineral çökmesi ve kommensal mantarlar (aspergillus) sinüsün kendi patofizyolojisi ve iç mikrobiyotası içinde gelişen intrensek nidus kaynaklarıdır.

---

### ÇİFT 62 (Benzerlik: 0.69)

**Soru 1 (ID: 89c42f6b-61b7-40df-907c-179a27b28745)**
Soru Kökü: Panoramik radyografilerde sağ ve sol maksiller sinüs içerisindeki radyoopasite farklarını sağlıklı bir şekilde kıyaslamak çoğu zaman mümkün olmamaktadır. Bu durumun oluşmasındaki en temel radyofiziksel faktör aşağıdakilerden hangisidir?
Doğru Şık (E): Diğer dokuların oluşturduğu fantom imajlarının varyasyonlara neden olması
Açıklama: Panoramik radyografinin çalışma prensibi gereği, rotasyon merkezinin dışında kalan karşı taraf yapıları film üzerinde fantom imajlar (hayalet görüntüler) oluşturur. Bu fantom gölgeler sinüs bölgesine süperpoze olduğunda, sağ ve sol sinüsün gerçek yoğunluklarını karşılaştırmayı imkansız hale getirir. Bu nedenle sinüs kıyaslamalarında konvansiyonel olarak Waters grafisi altın standarttır.

**Soru 2 (ID: e70f446a-5953-426a-bb1a-4303c0985413)**
Soru Kökü: İnternal radyoopasitelerin sağ-sol olarak kıyaslanmasında ve özellikle maksiller sinüslerle birlikte frontal sinüsler ve etmoid hava hücrelerinin eşzamanlı, net görüntülenmesinde tercih edilen en uygun konvansiyonel radyografik yöntem aşağıdakilerden hangisidir?
Doğru Şık (B): Waters grafisi
Açıklama: Waters grafisi, başın spesifik bir açıyla konumlandırılmasıyla maksiller sinüslerin, frontal sinüslerin ve etmoid hava hücrelerinin aynı anda görüntülenerek sağ-sol opasite karşılaştırmasının yapıldığı en ideal konvansiyonel yöntemdir. Panoramik radyografide hayalet (fantom) imajların ve diğer dokuların süperpozisyonu nedeniyle internal opasitelerin kıyaslanması yanıltıcı olabilir.

---

### ÇİFT 63 (Benzerlik: 0.69)

**Soru 1 (ID: 823fd3f0-b0aa-4a8e-95ac-c5b657a709f4)**
Soru Kökü: Elli beş yaşında bir hasta, sol yanağında dolgunluk, diplopi ve sol üst molar dişlerinde kayıp şikayetiyle başvuruyor. Radyografik değerlendirmede sol maksiller sinüs lümeninde hidrolik şekilli bir radyoopasite, sinüs kemik sınırlarında belirgin yer değiştirme (ekspansiyon) ve incelme izleniyor.
Klinik ve radyolojik bulguları verilen bu durumun patofizyolojik birincil kök nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Maksiller sinüs ostiumunun mekanik tıkanmasıyla sekresyon birikimi
Açıklama: Mukoseller, sinüs ostiumunun inflamatuar veya mekanik obstrüksiyonu sonucu normal mukus sekresyonunun drene olamayıp sinüs içinde birikmesiyle oluşur. Aylar/yıllar içinde artan bu antrum içi sıvı basıncı, hidrolik prensiplerle sinüs kemik duvarlarında eşit ekspansiyon (dışa doğru yer değiştirme), incelme ve yer yer destrüksiyon yapar. Artan basınca bağlı olarak tavan (orbita tabanı) yer değiştirmesi diplopiye, alveolar proses yer değiştirmesi diş kayıplarına sebep olur. Fungal kalsifikasyonlar veya genetik siliyer disfonksiyon bu hidrolik balonu yaratmaz.

**Soru 2 (ID: ed19afb0-461a-42a4-bf2d-ee037cf7198d)**
Soru Kökü: Elli yaşında kadın hasta, burnundan gelen kötü kokulu pürülan akıntı, kakozmi (kötü koku algısı) ve sağ maksiller posterior bölgede üç ay önce çekilmiş diş boşluğundan gelen sıvı şikayetiyle başvuruyor. Panoramik grafide sağ maksiller sinüs içinde homojen olmayan radyoopak bir kitle izlenirken, kitlenin içerisinde mine veya pulpa yapısı ayırt edilemiyor. Bu hastada **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Oroantral fistül zemininde gelişmiş antrolit
Açıklama: Hastadaki oroantral fistül, uzun süreli kronik enflamasyon ve enfeksiyona yol açar. Kötü koku (kakozmi) ve pürülan akıntı kronik enfeksiyonun bulgularıdır. Pulpa veya mine barındırmayan radyoopak kitle, bu enflamatuar nidiüs (fistül/yabancı cisim vb.) etrafında çökelen kalsiyum tuzlarının oluşturduğu bir 'antrolit'tir. Odontoma ve kök parçaları pulpa/mine bulgularıyla bu durumdan ayrılır.

---

### ÇİFT 64 (Benzerlik: 0.69)

**Soru 1 (ID: 18dbdb0e-c41c-4d59-9a4e-63292c6be06a)**
Soru Kökü: Maksiller sinüs boşluğunda veya tabanına yakın bölgede izlenen düzensiz radyoopak bir kitlenin; bir antrolit, ekzostoz veya septa değil de sinüs içerisine kaçmış bir 'diş kökü' olduğunu kanıtlayan **en güçlü** radyografik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Yapının merkezinde pulpa kanalı veya çevresinde mine tabakasının seçilmesi
Açıklama: Sinüs içindeki ekzostozlar, anatomik septalar veya antrolitler konvansiyonel grafilerde kök parçalarına çok benzeyebilir. Bir yapının kesinlikle diş veya diş kökü olduğunu gösteren en güçlü anatomik belirteç, iç yapısındaki pulpa kanalının veya dişin mine dokusunun radyografik olarak izlenebilmesidir. Radyoopasitenin konumu veya destrüksiyon yapmaması antrolitler için de geçerlidir.

**Soru 2 (ID: 1e82dc5b-78b0-4d2a-9cfa-6e6245c58444)**
Soru Kökü: Radyografik incelemede, periapikal radyolusensisi bulunan kronik enfekte bir üst premolar dişin hemen apikalinde, maksiller sinüs korteksinin tabanından hafifçe havalandığı ve sinüs içine doğru 'ince çizgiler ya da tek bir kalın çizgi' şeklinde yeni kemik yapımı sergilediği görülmüştür. Orijinal kortikal taban ile bu yeni kemik arasında sıklıkla dar bir radyolüsent bant izlenmektedir.
Bu karakteristik 'halo' görünümü olarak bilinen tablo, aşağıdaki patolojilerin hangisini tanımlar?
Doğru Şık (A): Otoimmün reaksiyonlu periostit
Açıklama: Dental kökenli enflamatuar eksüda, medüller kemikten geçerek sinüs tabanındaki periost membranını mekanik olarak kaldırır ve burada reaktif kemik üretmesini stimüle eder. Yeni oluşan bu kalsifiye tabaka, konvansiyonel radyografide enfekte kök çevresinde 'halo' görünümü veren radyoopak bantlar (periostit) şeklinde izlenir.

---

### ÇİFT 65 (Benzerlik: 0.69)

**Soru 1 (ID: 1e82dc5b-78b0-4d2a-9cfa-6e6245c58444)**
Soru Kökü: Radyografik incelemede, periapikal radyolusensisi bulunan kronik enfekte bir üst premolar dişin hemen apikalinde, maksiller sinüs korteksinin tabanından hafifçe havalandığı ve sinüs içine doğru 'ince çizgiler ya da tek bir kalın çizgi' şeklinde yeni kemik yapımı sergilediği görülmüştür. Orijinal kortikal taban ile bu yeni kemik arasında sıklıkla dar bir radyolüsent bant izlenmektedir.
Bu karakteristik 'halo' görünümü olarak bilinen tablo, aşağıdaki patolojilerin hangisini tanımlar?
Doğru Şık (A): Otoimmün reaksiyonlu periostit
Açıklama: Dental kökenli enflamatuar eksüda, medüller kemikten geçerek sinüs tabanındaki periost membranını mekanik olarak kaldırır ve burada reaktif kemik üretmesini stimüle eder. Yeni oluşan bu kalsifiye tabaka, konvansiyonel radyografide enfekte kök çevresinde 'halo' görünümü veren radyoopak bantlar (periostit) şeklinde izlenir.

**Soru 2 (ID: 2c513e7a-0178-43e4-8ebf-1a2c1a238dac)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin dental kontrol amacıyla kliniğe başvurmuştur. Asemptomatik olan hastanın panoramik radyografisinde sol maksiller sinüs tabanında duvarlara paralel uzanan, kortikal bir sınır içermeyen radyopasite bandı izlenmiştir. Dişlerin lamina dura bütünlüğü sağlamdır. Bu radyografik tabloya en uygun teşhis aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozit (Kalınlaşmış mukoza)
Açıklama: Mukozit, sinüs duvarlarına paralel seyreden ve belirgin bir kortikal kemik sınırı olmayan kalınlaşmış mukoza bandı şeklinde görüntü verir. Retansiyon psödokistleri kubbe şeklinde homojen kitleler olarak izlenirken bant şeklinde uzanım göstermezler. Odontojenik kistler ise mutlaka lamina dura bütünlüğünü bozarak sinüse uzanan kortike sınırlı radyolusensilerdir.

---

