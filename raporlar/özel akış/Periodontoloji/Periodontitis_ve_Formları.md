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

**Soru 1 (ID: 3f8ecc60-d480-4770-96e2-ef780e14f8ad)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) etyolojisinde primer rol oynayan sabit bakteriyel flora incelendiğinde, aşağıdaki patojenlerden hangisinin bu komplekste yer alması **en az olasıdır**?
Doğru Şık (E): Aggregatibacter actinomycetemcomitans
Açıklama: NUG etyolojisindeki sabit mikrobiyal flora esas olarak Fusobacterium türleri, Spiroketler (Treponema), Selenomonas türleri ve P. intermedia'dan oluşur. A. actinomycetemcomitans, lokalize agresif periodontitiste dominant olan temel patojendir ve NUG'un klasik fusospiroketal flora kompleksine dahil değildir. NUG lezyonlarındaki karakteristik nekroz tablosu bu spesifik anaerob kombinasyona bağlıdır.

**Soru 2 (ID: d9d5b410-4d89-4376-8179-d1970243bad5)**
Soru Kökü: Akut seyirli ve doku nekrozuyla karakterize nekrotizan ülseratif gingivitisin (NUG) mikrobiyal etyolojisinde spesifik olarak baskın olan patojen grubu aşağıdakilerden hangisidir?
Doğru Şık (E): Fusiform basiller ve Spiroketler
Açıklama: NUG etyolojisinde sabit flora esas olarak Treponema türleri (spiroketler) ve fusiform basillerden oluşur, ayrıca P. intermedia da tabloda rol alır. Agresif periodontitisin baskın ajanı A. actinomycetemcomitans veya kronik tablodaki kırmızı kompleks (P. gingivalis) bu tablonun temel başlatici florası değildir. Fusospiroketal kompleks, doku nekrozunun ve tipik klinik bulguların (psödomembran, krater papil) primer sorumlusudur.

---

### ÇİFT 2 (Benzerlik: 0.82)

**Soru 1 (ID: 26b8a6d1-0cd5-4c72-8c3f-c25709654349)**
Soru Kökü: Kırk beş yaşında erkek hasta, üst çene ön dişlerinde yemek yerken hissettiği sallanma şikayetiyle başvurmuştur. Periodontal muayenede dişlerin fizyolojik sınırları aşan bir hareketliliği gözlenmemiştir. Ancak hekim, hastanın dişlerini maksimum interküspal pozisyonda kapatmasını, ardından sağa, sola ve öne doğru sürtünme hareketleri yapmasını istemiş; bu esnada üst çene ön dişlerin vestibül yüzeyine yerleştirdiği işaret parmağı ile fonksiyon sırasındaki titreşim ve hareketliliği tespit etmiştir. Bu klinik senaryoda uygulanan muayene yöntemi aşağıdakilerden hangisidir?
Doğru Şık (A): Fremitus muayenesi
Açıklama: Fremitus, dişlerin fonksiyonel okluzal kuvvetlere maruz kaldıklarında ortaya çıkan dinamik hareketliliğidir ve hastaya maksimum interküspal pozisyonda açma-kapama ile eksantrik hareketler yaptırılarak işaret parmağı ile bukkalden palpe edilir. Miller indeksi manuel statik mobiliteyi ölçerken, fremitus doğrudan fonksiyon ve okluzal temaslar sırasındaki hareketi değerlendirir. Bu durum okluzal travmanın önemli bir göstergesidir.

**Soru 2 (ID: 5fcbc48b-12d7-4a1b-a597-d3f6d3d1e252)**
Soru Kökü: Kırk iki yaşındaki erkek hastanın oklüzal analizini yapan hekim, işaret parmağını hastanın maksiller dişlerinin bukkal yüzeyine koyarak hastadan maksimum interkuspal pozisyonda ısırmasını ve yanlara doğru hareket etmesini istemiş, bu sırada dişteki fonksiyonel titreşimi değerlendirmiştir. Hekimin bu muayene ile saptamaya çalıştığı klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Fremitus
Açıklama: Fremitus, dişler fonksiyon halindeyken (karşıt dişlerle temas ve hareket sırasında) izlenen fonksiyonel mobilitenin elle hissedilmesidir. Aletle yapılan statik mobilite ölçümünden farklı olarak hastanın kendi kas kuvvetiyle dinamik olarak oluşturulur ve oklüzal travmanın en önemli erken tanılarından biridir.

---

### ÇİFT 3 (Benzerlik: 0.81)

**Soru 1 (ID: 32d16f2b-c508-42a9-82fc-27f202070e78)**
Soru Kökü: Dentin tübüllerini kısmen tıkayan (dentin parlatması / burnishing) ajanlar, dentin aşırı duyarlılığı tedavisinde sık kullanılan materyallerdir. Tabloya göre aşağıdakilerden hangisi bu sınıfın bir üyesi **değildir**?
Doğru Şık (C): Kavite vernikleri
Açıklama: Dentin duyarlılığı tedavisinde kavite vernikleri, tübül tıkayan kimyasal presipitanlardan bağımsız ayrı bir yüzeysel bariyer örtücü sınıfı oluşturur. Gümüş nitrat, formalin ve çinko klorür-potasyum ferrocyanide karışımı doğrudan dentin proteinlerini çökelterek tübülleri kısmen tıkayan (burnishing) kimyasal ajanlardır.

**Soru 2 (ID: b947051e-d2a0-4218-8c42-c0e58aa5a4e3)**
Soru Kökü: Dentin duyarlılığının giderilmesinde dentin parlatması (burnishing) yaparak dentin tübüllerini kısmen tıkayan tedavi ajanları arasında aşağıdakilerden hangisi yer alır?
Doğru Şık (B): Çinko klorür-potasyum ferrocyanide
Açıklama: Çinko klorür-potasyum ferrocyanide, gümüş nitrat ve formalin ile birlikte dentin tübüllerini kısmen tıkayan (protein presipitasyonu/burnishing) ajanlar grubundadır. Kalsiyum hidroksit kalsiyum bileşikleri, stannöz ve sodyum florür flor bileşikleri arasında yer alır. Dentin bonding ajanları ise adeziv restoratif gruptadır.

---

### ÇİFT 4 (Benzerlik: 0.81)

**Soru 1 (ID: 4bd315f0-ba03-4961-a321-21930080f68c)**
Soru Kökü: Fonksiyonel oklüzal travmanın klinik muayenesi sırasında, klinisyenin işaret parmağını hastanın maksiller dişlerinin bukkal yüzeyine yerleştirerek hastaya maksimum interkuspal pozisyonda sıkma, lateral ve protruziv hareketler yaptırmasıyla tespit edilen patolojik titreşim hissine ne ad verilir?
Doğru Şık (D): Fremitus
Açıklama: Fremitus, dişlerin oklüzal kontakları sırasında fonksiyonel olarak (hastanın kendi kas kuvvetiyle) meydana gelen titreşim veya mikroskobik hareketliliktir. Pasif mobilite muayenesinden farklıdır; travmatik oklüzyonun en erken ve spesifik klinik göstergelerinden biri olarak kabul edilir.

**Soru 2 (ID: 5fcbc48b-12d7-4a1b-a597-d3f6d3d1e252)**
Soru Kökü: Kırk iki yaşındaki erkek hastanın oklüzal analizini yapan hekim, işaret parmağını hastanın maksiller dişlerinin bukkal yüzeyine koyarak hastadan maksimum interkuspal pozisyonda ısırmasını ve yanlara doğru hareket etmesini istemiş, bu sırada dişteki fonksiyonel titreşimi değerlendirmiştir. Hekimin bu muayene ile saptamaya çalıştığı klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Fremitus
Açıklama: Fremitus, dişler fonksiyon halindeyken (karşıt dişlerle temas ve hareket sırasında) izlenen fonksiyonel mobilitenin elle hissedilmesidir. Aletle yapılan statik mobilite ölçümünden farklı olarak hastanın kendi kas kuvvetiyle dinamik olarak oluşturulur ve oklüzal travmanın en önemli erken tanılarından biridir.

---

### ÇİFT 5 (Benzerlik: 0.78)

**Soru 1 (ID: b01a6c3d-2b1c-4355-a115-0585c28d9d43)**
Soru Kökü: Dentin aşırı duyarlılığı tedavisinde kullanılan ajanlar ve ait oldukları sınıflamalarla ilgili eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Formalin – Antienflamatuar ajan
Açıklama: Formalin bir antienflamatuar ajan değil, gümüş nitrat ve çinko klorür ile birlikte dentin tübüllerini kısmen tıkayan (burnishing) ajanlar grubunda yer alır. İyontoforez flor penetrasyonunu artırdığı için flor grubunda sınıflandırılır. Antienflamatuar ajanlar tabloda bağımsız bir grup olarak belirtilmiştir ancak formalin bu grupta yer almaz.

**Soru 2 (ID: c99dab3b-58e7-4c8b-b535-12564397ecd4)**
Soru Kökü: Dentin duyarlılığı ajanlarının etki mekanizmalarına göre sınıflandırılmasında, aşağıdaki ajan-grup eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Stronsiyum klorid – Kalsiyum bileşiği
Açıklama: Stronsiyum klorid, dentin duyarlılığı tablosunda kalsiyum bileşiği olarak değil, kendi başına bağımsız bir moleküler ajan olarak yer alır. Kalsiyum bileşikleri grubunda sadece kalsiyum hidroksit ve dibazik kalsiyum fosfat bulunur. Diğer tüm eşleştirmeler doğru etki mekanizmalarını yansıtmaktadır.

---

### ÇİFT 6 (Benzerlik: 0.77)

**Soru 1 (ID: 03cd5076-30b3-4cd8-a300-594d9354302e)**
Soru Kökü: 45 yaşında erkek hasta, diş fırçalarken kanama ve şiddetli ağız kokusu şikayetiyle başvurmuştur. Yapılan mikrobiyolojik plakta subgingival floranın spesiğe özgü patojenler barındırdığı görülmüştür. Bu patojenler arasında, özellikle periodontal doku yıkımında ve periyodontal apse formasyonunda prevelansı %50-100 arasında olan en virülan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (C): Porphyromonas gingivalis
Açıklama: Kırmızı kompleks bakterileri kronik periodontitis etyolojisinde en önemli rolü oynar. Bunlar arasında Porphyromonas gingivalis, apseyle ilgili ve doku yıkımında en virülan mikroorganizma olup apse vakalarındaki prevelansı %50-100'ü bulur. Prevotella intermedia daha çok NUG vakalarında veya gebelik gingivitinde ön plandayken, A. actinomycetemcomitans agresif (Derece C) periodontitis ile karakterizedir.

**Soru 2 (ID: 3b5740bb-d25f-4e69-bcf6-44edbe0ed631)**
Soru Kökü: Periodontal apselerin mikrobiyotası genellikle polimikrobiyal olup, kronik periodontitis lezyonlarına benzerlik gösterir. Ancak apse tablosuyla ilişkili en virülan mikroorganizma olarak kabul edilen ve periodontal apselerdeki prevalansı %50-100 arasında değişen spesifik patojen aşağıdakilerden hangisidir?
Doğru Şık (E): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis (P. gingivalis), doku invazyon yeteneği ve çoklu virülans faktörleri sayesinde periodontal apse oluşumunda izole edilen en yaygın ve en agresif mikroorganizmadır (%50-100 prevalans). Diğer anaeroblar apsede mevcut olsa da, P. gingivalis konak immünitesinden kaçabilme ve hızlı proteolitik yıkım yapma yeteneğiyle akut atakları asıl tetikleyen keystone patojendir. Dokulardaki fulminan yıkım doğrudan bu bakterinin toksinleriyle ilgilidir.

---

### ÇİFT 7 (Benzerlik: 0.77)

**Soru 1 (ID: 067a86be-d035-454f-bedd-8d61197b6954)**
Soru Kökü: Trizomi 21 tanısı olan 14 yaşındaki bir hastada süt dişlerinde başlayan ve erişkin dönemde devam eden yaygın periodontitis saptanmıştır. Bu hastadaki şiddetli periodontal yıkımın etyolojisinde aşağıdaki mekanizmalardan hangisinin rol oynaması **en az olasıdır**?
Doğru Şık (B): Artmış sement yapımı ve ankiloz eğilimi
Açıklama: Down sendromlu (Trizomi 21) bireylerde peridontal hastalığın etyolojisinde matriks metalloproteinaz enzim defektleri, T hücre yetmezlikleri ve nötrofil fonksiyon (kemotaksis/fagositoz) bozuklukları rol oynar. Artmış sement yapımı veya ankiloza yatkınlık, bu sendromda görülen immünosupresif profilin ve periodontal yıkımın bir mekanizması değildir. Aşırı kollajen yıkımı ve zayıf nötrofil yanıtı enfeksiyonun hızlı ilerlemesine zemin hazırlar.

**Soru 2 (ID: 9cdfb194-1b8b-435d-9f67-5aec652c5b78)**
Soru Kökü: Down sendromlu bireylerde (Trizomi 21) gözlenen sistemik yatkınlığa bağlı şiddetli periodontal yıkımın immünopatogenezinde;
I. Matriks metalloproteinaz enzim bozukluğu
II. B hücresi aracılı antikor hiperaktivitesi
III. T hücresi immün yetmezliği
faktörlerinden hangilerinin rol oynadığı düşünülmektedir?
Doğru Şık (A): I ve III
Açıklama: Down sendromlu bireylerde periodontal yıkımın etyolojisinde; kollajen dejenerasyonunu kontrolsüz artıran matriks metalloproteinaz bozuklukları, hücresel yanıt zayıflığına yol açan T hücre immün yetmezliği ve nötrofil kemotaksis kusurları rol alır (I ve III). B hücre hiperaktivitesi bu sendromla karakterize spesifik bir bulgu değildir. Bu patofizyoloji, zayıf oral hijyenle birleştiğinde çocukluktan itibaren hızlı ataşman kaybı yaratır.

---

### ÇİFT 8 (Benzerlik: 0.77)

**Soru 1 (ID: 9a7a42fe-2e34-484d-9106-12876e24fd54)**
Soru Kökü: Açığa çıkan kök yüzeylerindeki dentin aşırı duyarlılığının kimyasal tedavisinde 'Kalsiyum bileşikleri' grubunda yer alan ve dentin tübüllerini bu mekanizma ile izole eden ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Dibazik kalsiyum fosfat
Açıklama: Dentin duyarlılığı tedavisinde kalsiyum hidroksit ve dibazik kalsiyum fosfat, kalsiyum bileşikleri sınıfında yer alarak etki gösterir. Gümüş nitrat dentin tübüllerini tıkayan protein presipitanı iken, sodyum florid flor bileşikleri sınıfındadır. Dibazik kalsiyum fosfat doğrudan mineral matriks bariyeri oluşturmayı hedefler.

**Soru 2 (ID: d0366905-3b16-4acd-9f63-906631a6fd8b)**
Soru Kökü: Dentin tübüllerini yüzeysel olarak tıkayan veya nöral iletimi bloke eden ajanlar, farklı kimyasal mekanizmalar üzerinden etki gösterirler. Aşağıdaki duyarlılık giderici kimyasallardan hangisi dentin tedavisinde spesifik bir kalsiyum veya flor bileşiği olarak **değerlendirilmez**?
Doğru Şık (B): Stronsiyum klorid
Açıklama: Stronsiyum klorid, dentin duyarlılığında kullanılan metalik bir tuz olmakla birlikte kalsiyum veya flor bileşikleri ana başlıkları altında sınıflanmaz. Dibazik kalsiyum fosfat ve kalsiyum hidroksit spesifik olarak kalsiyum grubunda; sodyum ve stannöz florür ise flor grubundadır. Sınıflandırmada stronsiyum klorid ve potasyum oksalat ayrı bağımsız moleküllerdir.

---

### ÇİFT 9 (Benzerlik: 0.76)

**Soru 1 (ID: 3f8ecc60-d480-4770-96e2-ef780e14f8ad)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) etyolojisinde primer rol oynayan sabit bakteriyel flora incelendiğinde, aşağıdaki patojenlerden hangisinin bu komplekste yer alması **en az olasıdır**?
Doğru Şık (E): Aggregatibacter actinomycetemcomitans
Açıklama: NUG etyolojisindeki sabit mikrobiyal flora esas olarak Fusobacterium türleri, Spiroketler (Treponema), Selenomonas türleri ve P. intermedia'dan oluşur. A. actinomycetemcomitans, lokalize agresif periodontitiste dominant olan temel patojendir ve NUG'un klasik fusospiroketal flora kompleksine dahil değildir. NUG lezyonlarındaki karakteristik nekroz tablosu bu spesifik anaerob kombinasyona bağlıdır.

**Soru 2 (ID: b13e6e1a-309c-458a-9ccc-2ee24967823d)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) geçiren bir hastanın immünolojik profili incelendiğinde, lezyonun patogeneziyle ilişkili olarak aşağıdaki periodontal patojenlerden hangisine karşı serum IgG titresinde belirgin bir artış görülmesi en olasıdır?
Doğru Şık (D): Prevotella intermedia
Açıklama: NUG hastalarının sistemik immün yanıtı incelendiğinde, hastalık florasındaki ana patojenlerden biri olan Prevotella intermedia'ya (eski adıyla Bacteroides intermedius) karşı spesifik serum IgG ve IgM antikor düzeylerinde yükselme görülür. Bu artış, patojenin sadece lokal invazyon yapmadığını, aynı zamanda konakta kuvvetli bir hümoral immün yanıt tetiklediğini gösterir. Diğer kırmızı kompleks üyelerine ait titrelerde bu düzeyde bir spesifik primer artış beklenmez.

---

### ÇİFT 10 (Benzerlik: 0.76)

**Soru 1 (ID: 1ba0eda3-5bfa-4435-b0ee-3c7e7d3742c2)**
Soru Kökü: Yedi yaşındaki kız çocuğu, alt ve üst süt kesici dişlerinin köklerinin kısa olduğu ve kendiliğinden döküldüğü şikayetiyle başvuruyor. Yapılan intraoral muayenede herhangi bir gingival inflamasyon veya plak bulgusuna rastlanmamıştır. Kemik yapımı ve sement mineralizasyonunda bozukluğa yol açan, idrarda fosfoetanolamin varlığıyla teşhis edilen hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Hipofosfatazya
Açıklama: Hipofosfatazya, alkalen fosfataz geni mutasyonu sonucu kemik ve sement formasyonunun bozulduğu metabolik bir hastalıktır. İltihap bulgusu olmaksızın, sadece kök oluşum defektine bağlı olarak öncelikle anterior süt dişlerinin erken kaybıyla klinik verir. Plazma alkalen fosfataz düzeyi düşükken, idrar fosfoetanolamin düzeyi artar.

**Soru 2 (ID: dcfc5a48-0050-4ff8-b185-f5166e345b6a)**
Soru Kökü: 4 yaşında erkek çocuğu, dişetinde hiçbir iltihap bulgusu olmamasına rağmen alt süt kesici dişlerini erken kaybetmesi şikayetiyle kliniğe getirilmiştir. Hastanın alınan serum örneğinde alkalen fosfataz düzeyi düşük bulunmuştur. Bu hastanın idrar tahlilinde aşağıdaki metabolitlerden hangisinin saptanması en olasıdır?
Doğru Şık (D): Fosfaetanolamin
Açıklama: Hipofosfatazya, alkalen fosfataz gen mutasyonuna bağlı gelişen, zayıf kemik formasyonu ve dişetinde inflamasyon olmaksızın süt dişlerinin erken kaybıyla karakterize nadir bir iskeletsel hastalıktır. Bu hastaların serum ve idrar analizlerinde biriken substrat olan fosfaetanolamin saptanır. Sement formasyonunun azalmasına bağlı olarak periodontal ligamentin zayıf tutunması, travma olmaksızın spontan diş kayıplarına yol açar.

---

### ÇİFT 11 (Benzerlik: 0.76)

**Soru 1 (ID: c99dab3b-58e7-4c8b-b535-12564397ecd4)**
Soru Kökü: Dentin duyarlılığı ajanlarının etki mekanizmalarına göre sınıflandırılmasında, aşağıdaki ajan-grup eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Stronsiyum klorid – Kalsiyum bileşiği
Açıklama: Stronsiyum klorid, dentin duyarlılığı tablosunda kalsiyum bileşiği olarak değil, kendi başına bağımsız bir moleküler ajan olarak yer alır. Kalsiyum bileşikleri grubunda sadece kalsiyum hidroksit ve dibazik kalsiyum fosfat bulunur. Diğer tüm eşleştirmeler doğru etki mekanizmalarını yansıtmaktadır.

**Soru 2 (ID: d0366905-3b16-4acd-9f63-906631a6fd8b)**
Soru Kökü: Dentin tübüllerini yüzeysel olarak tıkayan veya nöral iletimi bloke eden ajanlar, farklı kimyasal mekanizmalar üzerinden etki gösterirler. Aşağıdaki duyarlılık giderici kimyasallardan hangisi dentin tedavisinde spesifik bir kalsiyum veya flor bileşiği olarak **değerlendirilmez**?
Doğru Şık (B): Stronsiyum klorid
Açıklama: Stronsiyum klorid, dentin duyarlılığında kullanılan metalik bir tuz olmakla birlikte kalsiyum veya flor bileşikleri ana başlıkları altında sınıflanmaz. Dibazik kalsiyum fosfat ve kalsiyum hidroksit spesifik olarak kalsiyum grubunda; sodyum ve stannöz florür ise flor grubundadır. Sınıflandırmada stronsiyum klorid ve potasyum oksalat ayrı bağımsız moleküllerdir.

---

### ÇİFT 12 (Benzerlik: 0.76)

**Soru 1 (ID: 1efa0dc5-283b-437c-986b-d278aa1741c2)**
Soru Kökü: Üç yaşındaki erkek çocuk kliniğe yaygın, çok şiddetli dişeti inflamasyonu ve kanama tablosu ile başvuruyor. Anamnezinde sık tekrarlayan üst solunum yolu enfeksiyonları ile orta kulak iltihabı hikayesi bulunuyor. Muayenede belirgin eklenti olmamasına rağmen aşırı kemik yıkımı var ancak lezyonlarda tipik püy (cerahat) formasyonu izlenmiyor. Genetik incelemede nötrofillerin damar dışına göçünü sağlayan beta-2 integrin zincirinde mutasyon olduğu raporlanıyor. Bu nadir sendrom aşağıdakilerden hangisidir?
Doğru Şık (C): Tip 1 Lökosit Adezyon Eksikliği
Açıklama: Lökosit Adezyon Eksikliği (LAD), lökositlerin enfeksiyon alanına tutunmasını sağlayan integrin moleküllerindeki mutasyon ile karakterizedir. Fagositoz yapan hücreler dokuya ulaşamadığı için püy oluşmaz; ancak savunmasız doku hızla yıkılarak çocukluk çağında şiddetli periodontitis ve sekonder jeneralize enfeksiyonlarla sonuçlanır.

**Soru 2 (ID: 2ddaddde-b1eb-45ae-91c4-d3957c7dc3e4)**
Soru Kökü: On iki yaşındaki hasta, şiddetli tekrarlayan solunum yolu enfeksiyonları ve hafif kanama bozuklukları şikayetleriyle takip edilmektedir. Fizik muayenesinde saç, deri ve gözde lokalize pigment kaybı (parsiyel albinizm) saptanmıştır. İntraoral muayenesinde evre 3 generalize agresif periodontitis (Derece C) tablosu izlenmektedir. Nötrofillerin anormal, dev lizozomlar içererek fagositoz yeteneğini kaybettiği genetik sendrom aşağıdakilerden hangisidir?
Doğru Şık (D): Chediak-Higashi Sendromu
Açıklama: Chediak-Higashi Sendromu, nötrofil lizozomlarının dev veziküller oluşturarak (LYST geni mutasyonu) içeriğini serbestleştirememesi sonucu immünitenin zayıflaması ile karakterizedir. Klinik olarak diğer immün yetmezliklerden farklı şekilde, melanin granüllerinin dağılım defektine bağlı olarak spesifik 'parsiyel albinizm' bulgusu ile ayırt edilir.

---

### ÇİFT 13 (Benzerlik: 0.76)

**Soru 1 (ID: 126da0a3-61ce-4834-a06c-791ed328807e)**
Soru Kökü: Yirmi iki yaşında kadın hasta, üst ön dişlerinin son bir yıl içinde aralanarak öne doğru yelpaze gibi açıldığından şikayetçidir. Sistemik anamnezi temiz olan hastanın, klinik muayenesinde ağız hijyeni iyi olmasına rağmen maksiller anterior bölgede ileri düzeyde ataşman kaybı ve patolojik diş migrasyonu saptanmıştır. Genç bir bireyde anterior bölgede gözlenen bu tipik patolojik diş migrasyonunun (ekstrüzyon ve açılma) **en olası** altındaki klinik tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Lokalize agresif periodontitis
Açıklama: Genç bireylerde, özellikle anterior dişlerde hızlı ataşman kaybı ve buna bağlı dişlerin yelpaze şeklinde öne doğru açılması (patolojik migrasyon), lokalize agresif periodontitisin en karakteristik belirtilerinden biridir. Hastanın plak miktarının az olmasına rağmen yıkımın şiddetli olması bu tanıyı doğrular niteliktedir. NUP tablosunda doku nekrozu ve şiddetli ağrı ön plandayken, kronik periodontitis yaşlı hastalarda bol plakla uyumlu yıkım gösterir.

**Soru 2 (ID: 520c50a3-c5fa-4cc4-b2f8-3f3b5963bb09)**
Soru Kökü: Elli yaşında kadın hasta, dişetlerinde kanama ve ağzında kötü tat şikayetiyle başvurmuştur. Yapılan klinik muayenede, alt çene sol premolar bölgesindeki dişeti kenarının mavimsi kırmızı bir renk aldığı ve bu dişlerin oklüzal düzlemden belirgin şekilde yukarı doğru uzadığı (ekstrüzyon) tespit edilmiştir. İlgili bölgeden spontan süpurasyon izlenmektedir. Bu klinik tabloda gözlenen dişlerdeki uzama (ekstrüzyon) bulgusu, aşağıdaki patolojik durumlardan hangisinin spesifik bir varlık göstergesidir?
Doğru Şık (A): Periodontal cep mevcudiyeti
Açıklama: Renk değişikliği, dişeti kenarındaki ödem, sondalamada kanama, süpurasyon ve dişlerdeki uzama (ekstrüzyon/migrasyon) periodontal cebin mevcudiyetini gösteren klinik bulgulardır. Diş, periodontal destek dokusunu kaybettiğinde patolojik olarak yer değiştirme ve uzama eğilimi gösterir. Atrizyon dişin oklüzal boyunu kısaltırken, aşırı derin kapanış alt ön dişlerde görülür ve primer olarak kronik travma bulgusu verir.

---

### ÇİFT 14 (Benzerlik: 0.76)

**Soru 1 (ID: 5c2dbdb1-500c-4f1e-8be7-5fd5faf09615)**
Soru Kökü: Otuz iki yaşındaki kadın hasta, alt kesici dişlerinin vestibül bölgesinde fırçalama sırasında hissettiği şiddetli ağrı şikayetiyle kliniğe başvurmuştur. Muayenede, aşırı ve sert fırçalamaya bağlı olarak meydana gelen, altındaki kök yüzeyi ağrılı ve plak ile kaplı, dar yarık şeklinde dişeti çekilmeleri izlenmiştir. Bu klinik tablo aşağıdakilerden hangisi ile tanımlanır?
Doğru Şık (E): Stilman's cleft
Açıklama: Stilman's cleft, travmatik nedenlerle (özellikle sert fırçalama) dişetinde meydana gelen dar, yarık şeklindeki çekilmelerdir ve altındaki kök yüzeyi sıklıkla ağrılıdır. McCall festoon dişeti marjinindeki fibroz bant şeklindeki kalınlaşmayı ifade ederken, pseudocleft komşu papillerin büyümesiyle oluşan yalancı bir yarıktır. Bu nedenle travma ve ağrı ile karakterize yarık lezyonu Stilman's cleft'tir.

**Soru 2 (ID: b2d67d6f-6eb4-4c0b-a395-d395b35d8911)**
Soru Kökü: Dişlerini oldukça sert, yatay ve aşındırıcı şekilde fırçalayan otuz beş yaşındaki hastanın alt çene premolar dişlerinde vestibül yüzeyde belirgin dişeti çekilmesi izleniyor. İlgili yapışık dişetinde inflamasyon veya plak bulgusu olmamasına rağmen, kurdele (bant) tarzında spesifik bir fibröz kalınlaşma saptanıyor. Lokal irritan ve enflamasyon olmaksızın reaktif gelişen bu morfolojik deformite aşağıdakilerden hangisidir?
Doğru Şık (D): McCall festoon
Açıklama: Dişeti çekilmesi sınırında yapışık dişetinde görülen bant şeklindeki fibröz reaktif kalınlaşma 'McCall festoon' olarak adlandırılır. İnflamasyondan ziyade travmatik bir doku cevabıdır. Çekilmenin kendisinin ince, dar V biçimindeki yarık gibi apikale inmesine ise 'Stillman cleft (yarığı)' denir.

---

### ÇİFT 15 (Benzerlik: 0.75)

**Soru 1 (ID: 26b8a6d1-0cd5-4c72-8c3f-c25709654349)**
Soru Kökü: Kırk beş yaşında erkek hasta, üst çene ön dişlerinde yemek yerken hissettiği sallanma şikayetiyle başvurmuştur. Periodontal muayenede dişlerin fizyolojik sınırları aşan bir hareketliliği gözlenmemiştir. Ancak hekim, hastanın dişlerini maksimum interküspal pozisyonda kapatmasını, ardından sağa, sola ve öne doğru sürtünme hareketleri yapmasını istemiş; bu esnada üst çene ön dişlerin vestibül yüzeyine yerleştirdiği işaret parmağı ile fonksiyon sırasındaki titreşim ve hareketliliği tespit etmiştir. Bu klinik senaryoda uygulanan muayene yöntemi aşağıdakilerden hangisidir?
Doğru Şık (A): Fremitus muayenesi
Açıklama: Fremitus, dişlerin fonksiyonel okluzal kuvvetlere maruz kaldıklarında ortaya çıkan dinamik hareketliliğidir ve hastaya maksimum interküspal pozisyonda açma-kapama ile eksantrik hareketler yaptırılarak işaret parmağı ile bukkalden palpe edilir. Miller indeksi manuel statik mobiliteyi ölçerken, fremitus doğrudan fonksiyon ve okluzal temaslar sırasındaki hareketi değerlendirir. Bu durum okluzal travmanın önemli bir göstergesidir.

**Soru 2 (ID: 4bd315f0-ba03-4961-a321-21930080f68c)**
Soru Kökü: Fonksiyonel oklüzal travmanın klinik muayenesi sırasında, klinisyenin işaret parmağını hastanın maksiller dişlerinin bukkal yüzeyine yerleştirerek hastaya maksimum interkuspal pozisyonda sıkma, lateral ve protruziv hareketler yaptırmasıyla tespit edilen patolojik titreşim hissine ne ad verilir?
Doğru Şık (D): Fremitus
Açıklama: Fremitus, dişlerin oklüzal kontakları sırasında fonksiyonel olarak (hastanın kendi kas kuvvetiyle) meydana gelen titreşim veya mikroskobik hareketliliktir. Pasif mobilite muayenesinden farklıdır; travmatik oklüzyonun en erken ve spesifik klinik göstergelerinden biri olarak kabul edilir.

---

### ÇİFT 16 (Benzerlik: 0.75)

**Soru 1 (ID: 7ff20909-c0f4-48e6-9f93-9dd62f44439d)**
Soru Kökü: 50 yaşında kadın hasta, bir yıl önce başarılı bir periodontal cerrahi geçirmiş ve tam iyileşme sağlanmıştır. Ancak kontrol seansında, hastanın etkili plak kontrolü yapamadığı, diş yüzeylerinde yoğun subgingival biyofilm biriktiği ve periodontal ceplerin tekrar derinleştiği tespit edilmiştir. Bu durum aşağıdaki klinik tablolardan hangisi ile tanımlanır?
Doğru Şık (C): Rekürrent periodontitis
Açıklama: Tedavi ile tam bir stabilizasyon sağlandıktan sonra, sekonder olarak oral hijyen eksikliği, sistemik durum değişikliği veya uyumsuz restorasyonlar gibi etkenlerle hastalığın yeniden alevlenmesi 'rekürrent (tekrarlayan) periodontitis' olarak adlandırılır. Refraktör hastalıkta ise baştan itibaren tedaviye yanıt alınamaz. İdame tedavisinin aksatılması rekürrent vakaların temel etyolojik faktörüdür.

**Soru 2 (ID: b6ffca12-48f4-49dd-92b4-7898ec9ad209)**
Soru Kökü: Uygun periodontal tedavi yapılmasına ve hastanın mükemmel bir plak kontrolü sağlamasına rağmen, bilinmeyen nedenlerle tedaviye yanıt vermeyen veya tedaviden hemen sonra hızla yeniden ataşman kaybı sergileyen hastalık tablosu aşağıdakilerden hangisidir?
Doğru Şık (A): Refraktör periodontitis
Açıklama: Refraktör (inatçı) periodontitis, bilinen tüm risk faktörleri ve iyi oral hijyen parametreleri kontrol altında olmasına rağmen doku yıkımının durdurulamadığı nadir durumlara verilen genel bir tanımlamadır. Rekürrent periodontitis ise hastanın plak kontrolünün yetersiz kalmasına veya lokal faktörlerin (bırakılmış diştaşı vb.) düzeltilememesine bağlı olarak iyileşmiş olan dokunun tekrar hastalanmasıdır. Refraktör vakalarda konak yanıtında henüz tanımlanamamış defektler rol oynar.

---

### ÇİFT 17 (Benzerlik: 0.75)

**Soru 1 (ID: 50d55a06-a278-452a-87f8-113c6d8be096)**
Soru Kökü: İltihabın dişetinde meydana getirdiği mikroskobik yapısal değişikliklere göre sınıflandırılan periodontal ceplerin histopatolojik özellikleri hakkında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Fibrotik cep duvarında, inflamasyona bağlı hücresel yıkım olayları fibrozis yapım olaylarından daha baskın olduğu için doku yumuşak kıvamlıdır.
Açıklama: Fibrotik ceplerde yıkım değil, 'yapım (tamir)' olayları inflamasyona üstün gelir. Doku, artmış kollajen ve bağ dokusu hücreleri (fibrozis) nedeniyle yumuşak değil, sıkı ve sert kıvamlıdır; klinik olarak pembe görünür ve yanıltsa da altta hastalık devam etmektedir. Yıkımın baskın olduğu yapı ödematöz ceptir.

**Soru 2 (ID: 5ac0e58d-4ef4-49cf-bbb9-47746f892a23)**
Soru Kökü: 45 yaşında erkek hasta, alt kesici dişler bölgesinde derin periodontal cepler saptanması üzerine değerlendiriliyor. Cep duvarı incelendiğinde dişetinin pembe renkli ve sıkı kıvamlı olduğu görülüyor. Bu bulguya dayanarak ilgili cep duvarı için aşağıdaki histopatolojik durumlardan hangisi en olasıdır?
Doğru Şık (B): Dokudaki yapım olaylarının yıkım olaylarına göre baskın olması
Açıklama: Fibrotik ceplerde yeni bağ dokusu hücrelerinin ve kollajen fibrillerin oluşumu (yapım olayları), dejeneratif yıkım olaylarından daha aktiftir. İnflamasyon devam etmesine rağmen eksudatif ödematöz yanıt zayıfladığında, doku sıkılaşıp pembe bir görünüm kazanır. İltihapta yapım ve yıkım olayları daima birlikte devam eder; hangisinin baskın olduğu cep duvarının kıvamını ve rengini belirler.

---

### ÇİFT 18 (Benzerlik: 0.75)

**Soru 1 (ID: 206c78c2-f9f2-4773-80ce-34360eb74b6d)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) lezyonlarında mikroorganizmalar canlı dokuya da invaze olmaktadır. Histopatolojik incelemede, bağ dokusunun en derinine inen ve diğer patojenik organizmaların izlenmeyip *sadece* spiroketlerin bulunduğu en alt penetrasyon bölgesi aşağıdakilerden hangisidir?
Doğru Şık (C): Spiroketal infiltrasyon tabakası
Açıklama: NUG lezyonu mikroskobik olarak 4 tabakadan incelenir. Yüzeyden derine doğru sırasıyla; bakteriyel tabaka, nötrofilden zengin tabaka, nekrotik tabaka ve en derinde sağlam canlı dokuya komşu olan spiroketal infiltrasyon tabakası gelir. Spiroketlerin yoğun hareketliliği ve doku invazyon yetenekleri, onların nekrotik alanı aşarak derin dokulara tek başlarına girmelerini sağlar.

**Soru 2 (ID: 3173ffd9-dd58-431e-9887-27d7ff693768)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) mikroskobik incelemesinde çok sayıda polimorfonükleer lökositin bulunduğu "nötrofilden zengin tabaka" olarak adlandırılan alan, karakteristik lezyon formasyonunda hangi iki mikroskobik tabaka arasında konumlanmaktadır?
Doğru Şık (E): Bakteriyel tabaka ile nekrotik tabaka
Açıklama: NUG histopatolojisinde yüzeyde lökosit ve spiroket içeren 'bakteriyel tabaka' bulunur; bunu hemen altında çok sayıda nötrofil lökositin göç edip bakteri barajı oluşturduğu 'nötrofilden zengin tabaka' izler. Onun altında ise hücrelerin öldüğü 'nekrotik tabaka' yer alır. Dolayısıyla nötrofilden zengin hat, yüzeydeki mikrobiyal kolonizasyon ile alttaki doku nekrozu evresinin ortasında bir immün savunma hattıdır.

---

### ÇİFT 19 (Benzerlik: 0.74)

**Soru 1 (ID: 59b27f5e-a28a-43ba-9b63-342050b5e9f7)**
Soru Kökü: Oklüzal kuvvetlerin peridonsiyum üzerindeki patolojik etkileri ve adaptasyon mekanizmalarıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): İltihabın bulunmadığı durumlarda, primer oklüzal travma tek başına klinik ataşman kaybı ve periodontal cep oluşumunu başlatır.
Açıklama: Primer oklüzal travma tek başına hiçbir zaman patolojik periodontal cep oluşumunu başlatmaz veya bağ dokusu ataşman seviyesini apikale göç ettirmez. Suprakrestal gingival lifler etkilenmediği sürece junctional epitel apikale inemez. Cep formasyonu için plak kaynaklı iltihabi reaksiyon zorunludur.

**Soru 2 (ID: 604fbc08-6617-44fc-b266-5528fa1236b8)**
Soru Kökü: Aşırı oklüzal kuvvetlerin kronik olarak devam etmesi durumunda, periodonsiyumun zarar görmemek için yapısal değişikliğe gittiği adaptasyon evresinde aşağıdakilerden hangisinin gerçekleşmesi **beklenmez**?
Doğru Şık (E): Suprakrestal fibril yıkımına bağlı olarak patolojik periodontal cep oluşumu
Açıklama: Primer oklüzal travma ve ona bağlı adaptasyon evresinde, bakteriyel iltihap (plak) sürece dahil olmadıkça suprakrestal fibriller etkilenmez ve epitel ataçmanı apikale göç etmez; dolayısıyla patolojik periodontal cep oluşumu görülmez. Adaptasyonda sadece periodontal aralık genişler, damarlanma artar, diş mobilitesi fizyolojik sınırları aşar ve cep olmaksızın kemik defekti izlenir.

---

### ÇİFT 20 (Benzerlik: 0.74)

**Soru 1 (ID: b13e6e1a-309c-458a-9ccc-2ee24967823d)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) geçiren bir hastanın immünolojik profili incelendiğinde, lezyonun patogeneziyle ilişkili olarak aşağıdaki periodontal patojenlerden hangisine karşı serum IgG titresinde belirgin bir artış görülmesi en olasıdır?
Doğru Şık (D): Prevotella intermedia
Açıklama: NUG hastalarının sistemik immün yanıtı incelendiğinde, hastalık florasındaki ana patojenlerden biri olan Prevotella intermedia'ya (eski adıyla Bacteroides intermedius) karşı spesifik serum IgG ve IgM antikor düzeylerinde yükselme görülür. Bu artış, patojenin sadece lokal invazyon yapmadığını, aynı zamanda konakta kuvvetli bir hümoral immün yanıt tetiklediğini gösterir. Diğer kırmızı kompleks üyelerine ait titrelerde bu düzeyde bir spesifik primer artış beklenmez.

**Soru 2 (ID: d9d5b410-4d89-4376-8179-d1970243bad5)**
Soru Kökü: Akut seyirli ve doku nekrozuyla karakterize nekrotizan ülseratif gingivitisin (NUG) mikrobiyal etyolojisinde spesifik olarak baskın olan patojen grubu aşağıdakilerden hangisidir?
Doğru Şık (E): Fusiform basiller ve Spiroketler
Açıklama: NUG etyolojisinde sabit flora esas olarak Treponema türleri (spiroketler) ve fusiform basillerden oluşur, ayrıca P. intermedia da tabloda rol alır. Agresif periodontitisin baskın ajanı A. actinomycetemcomitans veya kronik tablodaki kırmızı kompleks (P. gingivalis) bu tablonun temel başlatici florası değildir. Fusospiroketal kompleks, doku nekrozunun ve tipik klinik bulguların (psödomembran, krater papil) primer sorumlusudur.

---

### ÇİFT 21 (Benzerlik: 0.74)

**Soru 1 (ID: 308849f9-b078-4fcd-82d2-2041a3ae34ab)**
Soru Kökü: Nekrotizan periodontal hastalıkların seyri sırasında enfeksiyonun, mukogingival hattı aşarak apikalindeki yumuşak dokuları da etkilemesi ve ilerleyerek yanak derisinde perforasyona yol açması durumuna ne ad verilir?
Doğru Şık (C): Noma
Açıklama: Nekrotizan stomatitis (NUS), inflamasyonun mukogingival hattı aşıp çevresel mukozal dokuları tahrip etmesidir; yanak dokusunu tam kat perfore edecek kadar ilerlediğinde bu duruma Noma (gangrenöz stomatit) denir. NUG ve NUP dişeti ve alveol kemiği ile sınırlı kalırken, noma beslenme yetersizliği olan çocuklarda mortalitesi yüksek fasyal doku yıkımına işaret eder. Hastalık sürecinin en şiddetli safhasıdır.

**Soru 2 (ID: d0ca172b-13d3-407d-90d1-50d0eb316990)**
Soru Kökü: Gelişmemiş ülkelerdeki çocuklarda yetersiz beslenmeye ve bağışıklık çöküşüne sekonder olarak, dişeti ve kemik nekrozuyla ilerleyen Nekrotizan Periodontitis (NUP) lezyonlarının, yanak mukozası ve derisini perfore edecek şekilde ağız dışına kadar uzanan gangrenöz forma dönüşmesine ne ad verilir?
Doğru Şık (E): Noma
Açıklama: Noma (Cancrum Oris), immünsüprese ve malnütrisyonlu hastalarda görülen NUG/NUP silsilesinin son basamağı olan şiddetli gangrenöz stomatit tablosudur. İltihap, oral mukozayı tamamen nekroza uğratarak yanak derisini perfore eder ve yüz defektine neden olur. Plaut Vincent NUG'un kendisi için kullanılan lokal bir isimlendirmedir.

---

### ÇİFT 22 (Benzerlik: 0.74)

**Soru 1 (ID: 464f2c1f-9b0a-4988-97ce-fa6b4e756f6f)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, alt sol ikinci molar dişindeki mobilite ve çiğneme ağrısı nedeniyle başvuruyor. Dişte hiçbir karies veya restorasyon bulunmamasına karşın pulpa vitalite testlerine yanıt alınmıyor. Radyografik incelemede alveol kretinden apekse kadar uzanan ve apeksi de içine alan kesintisiz, geniş bir kemik radyolusensisi görülüyor. Probing derinliği dişin mesialinde kesintisiz şekilde apekse kadar inmektedir. Bu tablo Simon'un endo-perio sınıflamasına göre hangisi ile en uyumludur?
Doğru Şık (A): Kombine endodontik-periodontal lezyon
Açıklama: Dişin devital olması (pulpal patoloji) ile apekse kadar inen periodontal sondlama ve kesintisiz geniş kemik yıkımı (periodontal patoloji) birlikte izlenmektedir. Koronalden inen cep ile apeksten yukarı çıkan kemik yıkımının birleşerek oluşturduğu bu patoloji 'Kombine Endodontik-Periodontal Lezyon' olarak adlandırılır.

**Soru 2 (ID: 4c62a3be-8e05-40e6-b54e-d373e2014395)**
Soru Kökü: 40 yaşında bir hastanın alt sağ birinci büyük azı dişinde kök kanal tedavisi endikasyonu mevcuttur. Radyografik incelemede geniş bir periapikal radyolusensi saptanmış, ayrıca periodontolojik muayenede dişe ait servikal krestal kemik kaybı tespit edilmiştir. Lezyonların birbirleriyle birleşmediği ve aralarında sağlıklı bir alveoler kemik köprüsü bulunduğu görülmüştür. Bu tablo endo-perio lezyon sınıflandırmasına göre nasıl adlandırılır?
Doğru Şık (E): Bağımsız endodontik-periodontik lezyon
Açıklama: Eğer bir dişte hem pulpal patolojiye bağlı apikal lezyon hem de periodontal hastalığa bağlı koronal cep/ataşman kaybı varsa ve bu iki yıkım alanı radyografik veya klinik olarak birbiriyle birleşmiyorsa (ayrı sınırlar içindeyse), bu durum 'Bağımsız Endo-Perio Lezyon' olarak adlandırılır. İki süreç zamanla ilerleyerek birbirine kaynaştığında ise ancak o zaman 'Gerçek Kombine Lezyon' halini alır.

---

### ÇİFT 23 (Benzerlik: 0.74)

**Soru 1 (ID: 32d16f2b-c508-42a9-82fc-27f202070e78)**
Soru Kökü: Dentin tübüllerini kısmen tıkayan (dentin parlatması / burnishing) ajanlar, dentin aşırı duyarlılığı tedavisinde sık kullanılan materyallerdir. Tabloya göre aşağıdakilerden hangisi bu sınıfın bir üyesi **değildir**?
Doğru Şık (C): Kavite vernikleri
Açıklama: Dentin duyarlılığı tedavisinde kavite vernikleri, tübül tıkayan kimyasal presipitanlardan bağımsız ayrı bir yüzeysel bariyer örtücü sınıfı oluşturur. Gümüş nitrat, formalin ve çinko klorür-potasyum ferrocyanide karışımı doğrudan dentin proteinlerini çökelterek tübülleri kısmen tıkayan (burnishing) kimyasal ajanlardır.

**Soru 2 (ID: 9a7a42fe-2e34-484d-9106-12876e24fd54)**
Soru Kökü: Açığa çıkan kök yüzeylerindeki dentin aşırı duyarlılığının kimyasal tedavisinde 'Kalsiyum bileşikleri' grubunda yer alan ve dentin tübüllerini bu mekanizma ile izole eden ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Dibazik kalsiyum fosfat
Açıklama: Dentin duyarlılığı tedavisinde kalsiyum hidroksit ve dibazik kalsiyum fosfat, kalsiyum bileşikleri sınıfında yer alarak etki gösterir. Gümüş nitrat dentin tübüllerini tıkayan protein presipitanı iken, sodyum florid flor bileşikleri sınıfındadır. Dibazik kalsiyum fosfat doğrudan mineral matriks bariyeri oluşturmayı hedefler.

---

### ÇİFT 24 (Benzerlik: 0.74)

**Soru 1 (ID: 4c6aef07-3df5-4fbb-b60d-4cc96f4acee9)**
Soru Kökü: Akut periodontal apse teşhisi konulan bir hastanın tedavi planlamasında, hekimin reçeteye sistemik antibiyotik ilave etmesine karar verirken aşağıdaki klinik veya sistemik tablolardan hangisi endikasyon **oluşturmaz**?
Doğru Şık (C): Fistül yolu ile lezyonun epitelden spontan olarak drene olması
Açıklama: Akut periodontal apsede primer tedavi drenajın (cep veya insizyon yoluyla) sağlanmasıdır. Sistemik antibiyotikler ancak enfeksiyonun lokalleşemeyip sistemik bulgular vermesi halinde (ateş, selülit, lenfadenopati, ulaşılamayan anatomik bölge veya immün bozukluk) reçete edilir. Fistülize olmuş bir apse kendi kendine kronik drenaj yolu bulmuştur; bu durumda lokal müdahale ile toksin uzaklaştırılır, antibiyotiğe gerek kalmaz.

**Soru 2 (ID: f8ea7440-6801-492f-937a-72c499794a83)**
Soru Kökü: Periodontal apselerin klinik özellikleri ve güncel tedavi yaklaşımlarıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Sistemik komplikasyon ve lenfadenopati bulunmayan lokalize apselerde ilk tedavi seçeneği ampirik sistemik antibiyotik başlanmasıdır.
Açıklama: Periodontal apselerde ilk tedavi yaklaşımı enfeksiyon kaynağının mekanik olarak uzaklaştırılması, yani insizyon veya cep yoluyla drenaj sağlanmasıdır. Ateş, lenfadenopati, yayılan selülit veya immün yetmezlik bulunmadıkça lokalize periodontal apselerde rutin sistemik antibiyotik endikasyonu yoktur.

---

### ÇİFT 25 (Benzerlik: 0.73)

**Soru 1 (ID: 32d16f2b-c508-42a9-82fc-27f202070e78)**
Soru Kökü: Dentin tübüllerini kısmen tıkayan (dentin parlatması / burnishing) ajanlar, dentin aşırı duyarlılığı tedavisinde sık kullanılan materyallerdir. Tabloya göre aşağıdakilerden hangisi bu sınıfın bir üyesi **değildir**?
Doğru Şık (C): Kavite vernikleri
Açıklama: Dentin duyarlılığı tedavisinde kavite vernikleri, tübül tıkayan kimyasal presipitanlardan bağımsız ayrı bir yüzeysel bariyer örtücü sınıfı oluşturur. Gümüş nitrat, formalin ve çinko klorür-potasyum ferrocyanide karışımı doğrudan dentin proteinlerini çökelterek tübülleri kısmen tıkayan (burnishing) kimyasal ajanlardır.

**Soru 2 (ID: b01a6c3d-2b1c-4355-a115-0585c28d9d43)**
Soru Kökü: Dentin aşırı duyarlılığı tedavisinde kullanılan ajanlar ve ait oldukları sınıflamalarla ilgili eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Formalin – Antienflamatuar ajan
Açıklama: Formalin bir antienflamatuar ajan değil, gümüş nitrat ve çinko klorür ile birlikte dentin tübüllerini kısmen tıkayan (burnishing) ajanlar grubunda yer alır. İyontoforez flor penetrasyonunu artırdığı için flor grubunda sınıflandırılır. Antienflamatuar ajanlar tabloda bağımsız bir grup olarak belirtilmiştir ancak formalin bu grupta yer almaz.

---

### ÇİFT 26 (Benzerlik: 0.73)

**Soru 1 (ID: 9a7a42fe-2e34-484d-9106-12876e24fd54)**
Soru Kökü: Açığa çıkan kök yüzeylerindeki dentin aşırı duyarlılığının kimyasal tedavisinde 'Kalsiyum bileşikleri' grubunda yer alan ve dentin tübüllerini bu mekanizma ile izole eden ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Dibazik kalsiyum fosfat
Açıklama: Dentin duyarlılığı tedavisinde kalsiyum hidroksit ve dibazik kalsiyum fosfat, kalsiyum bileşikleri sınıfında yer alarak etki gösterir. Gümüş nitrat dentin tübüllerini tıkayan protein presipitanı iken, sodyum florid flor bileşikleri sınıfındadır. Dibazik kalsiyum fosfat doğrudan mineral matriks bariyeri oluşturmayı hedefler.

**Soru 2 (ID: f9fecf53-42d3-4318-845c-0efb973bf493)**
Soru Kökü: Aşağıdakilerden hangisi dentin aşırı duyarlılığı tedavisinde uygulanan ve etki mekanizması bakımından 'Flor bileşikleri' ana başlığı altında sınıflandırılan yöntemlerden biridir?
Doğru Şık (E): İyontoforez
Açıklama: İyontoforez, sodyum florid ve stannöz florür ile birlikte dentin duyarlılığı tedavisinde flor bileşikleri ve türevleri sınıfı altında değerlendirilir ve flor iyonlarının elektrik akımı ile dentin tübüllerine penetrasyonunu artırmayı hedefler. Formalin ve çinko klorür kısmen tıkayıcı (burnishing) ajanlardır. Kavite vernikleri ise bağımsız bir yüzey örtücü gruptur.

---

### ÇİFT 27 (Benzerlik: 0.73)

**Soru 1 (ID: 05916a48-3d78-4475-9d68-9a1dd4aed461)**
Soru Kökü: Oklüzal travmaya karşı periodonsiyumun gösterdiği doku cevabının tamir evresinde, alveol kemiği rezorpsiyonunu mekanik olarak dengelemek amacıyla mevcut trabeküllerin kalınlaşması ve ilik boşluklarının daralmasıyla ortaya çıkan yapıya ne ad verilir?
Doğru Şık (B): Santral destekleyici kemik
Açıklama: Tamir evresinde alveol kemiği rezorpsiyonunu dengeleme çabası 'destekleyici kemik' yapımını tetikler. Mevcut trabeküllerin kalınlaşarak kemik içindeki ilik boşluklarını daraltması ile oluşan yapı 'santral destekleyici kemik'tir. Periferik destekleyici kemik ise kemiğin tamamen dış yüzeyinde (vestibül/oral) kalınlaşma yapmasıdır.

**Soru 2 (ID: a823ffb9-f9e3-444d-abe4-3369f0a8dc62)**
Soru Kökü: Travmatik oklüzyona maruz kalan dişlerde kemik rezorpsiyonunu telafi etmek için, alveol kemiğinin vestibül veya oral dış yüzeylerinde yeni kemik birikimi sonucu kretlerde çıkıntı ve kalınlaşmalarla karakterize kemik apozisyonuna ne ad verilir?
Doğru Şık (D): Periferik destekleyici kemik
Açıklama: Kemiğin iç trabeküler yapısındaki kalınlaşma 'santral', dış yüzeyinde (vestibül/oral kret bölgeleri) çıkıntı oluşturarak kalınlaşması ise 'periferik destekleyici kemik' olarak adlandırılır. Bu durum oklüzal travmanın kemikte yarattığı aşırı baskıyı daha geniş bir yüzey alanında sönümleme (tamir) çabasının histolojik bir sonucudur.

---

### ÇİFT 28 (Benzerlik: 0.73)

**Soru 1 (ID: 9a7a42fe-2e34-484d-9106-12876e24fd54)**
Soru Kökü: Açığa çıkan kök yüzeylerindeki dentin aşırı duyarlılığının kimyasal tedavisinde 'Kalsiyum bileşikleri' grubunda yer alan ve dentin tübüllerini bu mekanizma ile izole eden ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Dibazik kalsiyum fosfat
Açıklama: Dentin duyarlılığı tedavisinde kalsiyum hidroksit ve dibazik kalsiyum fosfat, kalsiyum bileşikleri sınıfında yer alarak etki gösterir. Gümüş nitrat dentin tübüllerini tıkayan protein presipitanı iken, sodyum florid flor bileşikleri sınıfındadır. Dibazik kalsiyum fosfat doğrudan mineral matriks bariyeri oluşturmayı hedefler.

**Soru 2 (ID: b947051e-d2a0-4218-8c42-c0e58aa5a4e3)**
Soru Kökü: Dentin duyarlılığının giderilmesinde dentin parlatması (burnishing) yaparak dentin tübüllerini kısmen tıkayan tedavi ajanları arasında aşağıdakilerden hangisi yer alır?
Doğru Şık (B): Çinko klorür-potasyum ferrocyanide
Açıklama: Çinko klorür-potasyum ferrocyanide, gümüş nitrat ve formalin ile birlikte dentin tübüllerini kısmen tıkayan (protein presipitasyonu/burnishing) ajanlar grubundadır. Kalsiyum hidroksit kalsiyum bileşikleri, stannöz ve sodyum florür flor bileşikleri arasında yer alır. Dentin bonding ajanları ise adeziv restoratif gruptadır.

---

### ÇİFT 29 (Benzerlik: 0.73)

**Soru 1 (ID: ef71fa1a-0a26-4dee-8560-0db4b93066cd)**
Soru Kökü: Periodontal cep oluşumu sırasında klinik olarak dişeti kenarının keskinliğini kaybederek dişi sarmalamadığı ve künt bir biçim aldığı görülür. Histolojik düzeyde bu küntleşme tablosuna aşağıdaki değişikliklerden hangisi neden **olmaz**?
Doğru Şık (C): Yüzey epitelinde yaygın atrofi
Açıklama: Dişeti kenarının küntleşmesi ve diş yüzeyinden ayrılarak kalınlaşması dokudaki ödem ve hiperplazi kaynaklı bağ dokusu hacim artışıdır. Epitel atrofisi ise küntleşmeye değil, dokunun parlak ve düz bir yüzey (stippling kaybı) almasına neden olan temel reaksiyondur.

**Soru 2 (ID: f763499b-ef29-462d-bed8-273f2930364e)**
Soru Kökü: Kronik periodontitisli bireylerde, sağlıklı dokuya özgü 'portakal kabuğu' (stippling) manzarasının kaybolarak dişetinin şiş, parlak ve tamamen düz yüzeyli hale geldiği gözlenir. Doku ödemine eşlik ederek bu görünüme zemin hazırlayan temel morfolojik değişiklik aşağıdakilerden hangisidir?
Doğru Şık (E): Epitelin atrofisi ve epitel bağ dokusu kenetlenmesinin düzleşmesi
Açıklama: Sağlıklı stippling görünümü epitel ile bağ dokusu arasındaki rete-peg kenetlenmesinden kaynaklanır. İnflamasyon sırasında bu kenetlenmenin bozulması, epitel dokusunun atrofisi ve alttaki ödem basıncı ile birleşerek dişetini parlak, gergin ve düz bir yüzeye dönüştürür.

---

### ÇİFT 30 (Benzerlik: 0.73)

**Soru 1 (ID: 04d69698-8b9d-4550-a474-2aaf9963408f)**
Soru Kökü: Oklüzal travmaya maruz kalan bir dişte lamina duranın radyografik devamlılığının kaybolması ve kök yüzeyinde lokal rezorpsiyonların başlaması, fizyomekanik olarak öncelikle dişin hangi bölgesinde gerçekleşir?
Doğru Şık (C): Basıncın yüksek olduğu tarafta
Açıklama: Oklüzal kuvvetlerin dişi ittiği (basınç) yönde periodontal aralık daralır, kan damarları küçülür, tromboz/nekroz ve ardından osteoklastik aktivite ile lamina dura rezorpsiyonu başlar. Dişin çekildiği (gerilim) tarafta ise tam tersine kemik yapımı (apozisyon) uyarılır ve lamina dura kalınlaşır. Bu nedenle rezorpsiyon daima basınç tarafındadır.

**Soru 2 (ID: bd772d12-b980-4731-a32e-f334bb237f27)**
Soru Kökü: Radyografik incelemede lamina dura kalınlığının bölgesel olarak belirgin şekilde artmış (apozisyon) olarak izlenmesi, travmatik oklüzyon kuvvetlerinin biyomekanik dağılımında aşağıdakilerden hangisine işaret eder?
Doğru Şık (E): Kuvvetin dişi kemikten uzaklaştırdığı gerilim alanına
Açıklama: Oklüzal travmada diş kökünün kemikten uzaklaşmaya zorlandığı bölge 'gerilim alanı'dır. Bu bölgede periodontal lifler uzar ve alveol kemiğinde osteoblastik aktivite uyarılarak lamina durada radyografik bir kalınlaşma (apozisyon) meydana gelir. Basınç bölgesinde ise tam tersine rezorpsiyon ve lamina durada kayıp izlenir.

---

### ÇİFT 31 (Benzerlik: 0.73)

**Soru 1 (ID: 604fbc08-6617-44fc-b266-5528fa1236b8)**
Soru Kökü: Aşırı oklüzal kuvvetlerin kronik olarak devam etmesi durumunda, periodonsiyumun zarar görmemek için yapısal değişikliğe gittiği adaptasyon evresinde aşağıdakilerden hangisinin gerçekleşmesi **beklenmez**?
Doğru Şık (E): Suprakrestal fibril yıkımına bağlı olarak patolojik periodontal cep oluşumu
Açıklama: Primer oklüzal travma ve ona bağlı adaptasyon evresinde, bakteriyel iltihap (plak) sürece dahil olmadıkça suprakrestal fibriller etkilenmez ve epitel ataçmanı apikale göç etmez; dolayısıyla patolojik periodontal cep oluşumu görülmez. Adaptasyonda sadece periodontal aralık genişler, damarlanma artar, diş mobilitesi fizyolojik sınırları aşar ve cep olmaksızın kemik defekti izlenir.

**Soru 2 (ID: 60e652ef-5311-4991-b762-fc58a24f4b95)**
Soru Kökü: Yalnızca aşırı oklüzal kuvvetler değil, dişe antagonist olmaması gibi durumlarda oluşan yetersiz oklüzal (hipofonksiyon) kuvvetler de periodonsiyuma zarar verir. Aşağıdakilerden hangisi yetersiz oklüzal kuvvetlerin periyodontal dokularda yarattığı patolojik etkilerden biri **değildir**?
Doğru Şık (D): İlik boşluklarında daralma ve santral destekleyici kemik hipertrofisi
Açıklama: İlik boşluklarının daralması ve santral kemiğin kalınlaşarak hipertrofiye uğraması (santral destekleyici kemik), aşırı (yüksek) oklüzal travmaya verilen adaptif tamir reaksiyonudur. Yetersiz (hipofonksiyonel) kuvvetlerde ise kemik trabekülleri zayıflar (osteoporozis), ligament incelir ve liflerde fonksiyon görmemeye bağlı atrofi gelişir.

---

### ÇİFT 32 (Benzerlik: 0.72)

**Soru 1 (ID: 52c12f5f-33d0-4d99-a998-0bc6ccc9e8c1)**
Soru Kökü: Elli yaşındaki erkek hastanın radyografik incelemesinde, oklüzal travmaya bağlı olarak periodontal membranın dikey yönde kum saati şeklini aldığı ve bu bölgede mobilite saptandığı görülmüştür. Bu hastanın periodonsiyumunun aşırı oklüzal kuvvetlere karşı 'adaptasyon (adaptif remodelling)' evresinde olduğuna işaret eden en spesifik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Periodontal cep oluşumu olmadan izlenen açısal kemik defekti
Açıklama: Aşırı oklüzal kuvvetler varlığını sürdürdüğünde periodonsiyum adaptasyon evresine girer. Bu evrenin en spesifik bulgusu, patolojik bir derinleşme (periodontal cep) oluşmadan alveol kemiğinde açısal (vertikal) kemik defekti meydana gelmesidir. İltihap yokluğunda, oklüzal travma tek başına periodontal cep oluşturmaz, sadece kemikte adaptif mekanik deformasyonlara neden olur.

**Soru 2 (ID: 604fbc08-6617-44fc-b266-5528fa1236b8)**
Soru Kökü: Aşırı oklüzal kuvvetlerin kronik olarak devam etmesi durumunda, periodonsiyumun zarar görmemek için yapısal değişikliğe gittiği adaptasyon evresinde aşağıdakilerden hangisinin gerçekleşmesi **beklenmez**?
Doğru Şık (E): Suprakrestal fibril yıkımına bağlı olarak patolojik periodontal cep oluşumu
Açıklama: Primer oklüzal travma ve ona bağlı adaptasyon evresinde, bakteriyel iltihap (plak) sürece dahil olmadıkça suprakrestal fibriller etkilenmez ve epitel ataçmanı apikale göç etmez; dolayısıyla patolojik periodontal cep oluşumu görülmez. Adaptasyonda sadece periodontal aralık genişler, damarlanma artar, diş mobilitesi fizyolojik sınırları aşar ve cep olmaksızın kemik defekti izlenir.

---

### ÇİFT 33 (Benzerlik: 0.72)

**Soru 1 (ID: ad0b2f99-365c-4a01-99de-ef8cd98b86b9)**
Soru Kökü: Oklüzal travmanın radyografik belirtilerinden olan ve kök apeksinde artan stres ile gerilim kuvvetlerinin kronik etkisine cevap olarak sement dokusunun kalınlaşmasıyla karakterize yapısal değişiklik aşağıdakilerden hangisidir?
Doğru Şık (B): Hipersementozis
Açıklama: Kök apeksine gelen aşırı oklüzal kuvvetlere yanıt olarak, sementoblastların aktivitesinin artması sonucu kök ucunda sement dokusunun kalınlaşması hipersementozis olarak adlandırılır. Bu durum oklüzal travmanın tipik radyografik bulgularından biri olup dişin artan kuvvetlere adaptasyon çabasının bir parçasıdır.

**Soru 2 (ID: bd772d12-b980-4731-a32e-f334bb237f27)**
Soru Kökü: Radyografik incelemede lamina dura kalınlığının bölgesel olarak belirgin şekilde artmış (apozisyon) olarak izlenmesi, travmatik oklüzyon kuvvetlerinin biyomekanik dağılımında aşağıdakilerden hangisine işaret eder?
Doğru Şık (E): Kuvvetin dişi kemikten uzaklaştırdığı gerilim alanına
Açıklama: Oklüzal travmada diş kökünün kemikten uzaklaşmaya zorlandığı bölge 'gerilim alanı'dır. Bu bölgede periodontal lifler uzar ve alveol kemiğinde osteoblastik aktivite uyarılarak lamina durada radyografik bir kalınlaşma (apozisyon) meydana gelir. Basınç bölgesinde ise tam tersine rezorpsiyon ve lamina durada kayıp izlenir.

---

### ÇİFT 34 (Benzerlik: 0.72)

**Soru 1 (ID: b01a6c3d-2b1c-4355-a115-0585c28d9d43)**
Soru Kökü: Dentin aşırı duyarlılığı tedavisinde kullanılan ajanlar ve ait oldukları sınıflamalarla ilgili eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Formalin – Antienflamatuar ajan
Açıklama: Formalin bir antienflamatuar ajan değil, gümüş nitrat ve çinko klorür ile birlikte dentin tübüllerini kısmen tıkayan (burnishing) ajanlar grubunda yer alır. İyontoforez flor penetrasyonunu artırdığı için flor grubunda sınıflandırılır. Antienflamatuar ajanlar tabloda bağımsız bir grup olarak belirtilmiştir ancak formalin bu grupta yer almaz.

**Soru 2 (ID: f9fecf53-42d3-4318-845c-0efb973bf493)**
Soru Kökü: Aşağıdakilerden hangisi dentin aşırı duyarlılığı tedavisinde uygulanan ve etki mekanizması bakımından 'Flor bileşikleri' ana başlığı altında sınıflandırılan yöntemlerden biridir?
Doğru Şık (E): İyontoforez
Açıklama: İyontoforez, sodyum florid ve stannöz florür ile birlikte dentin duyarlılığı tedavisinde flor bileşikleri ve türevleri sınıfı altında değerlendirilir ve flor iyonlarının elektrik akımı ile dentin tübüllerine penetrasyonunu artırmayı hedefler. Formalin ve çinko klorür kısmen tıkayıcı (burnishing) ajanlardır. Kavite vernikleri ise bağımsız bir yüzey örtücü gruptur.

---

### ÇİFT 35 (Benzerlik: 0.72)

**Soru 1 (ID: 0ff50f04-282d-45c4-8c4f-9c985959e18c)**
Soru Kökü: Periodonsiyumun artmış aşırı oklüzal kuvvetlere karşı verdiği hücresel ve yapısal doku cevabının fizyolojik sıralaması aşağıdakilerin hangisinde doğru olarak verilmiştir?
Doğru Şık (A): Hasar → Tamir → Adaptatif remodelling
Açıklama: Aşırı oklüzal kuvvetler önce periodontal ligaman ve kemikte 'Hasar (yaralanma)' evresini başlatır. Vücut bu dokuları uzaklaştırıp yenilerini sentezleyerek 'Tamir' evresine geçer. Eğer travmatik kuvvetler kalıcı ise, periodonsiyum bu kronik strese zarar görmeden dayanabilmek için kum saati formu alarak 'Adaptasyon (remodelling)' evresini tamamlar.

**Soru 2 (ID: 604fbc08-6617-44fc-b266-5528fa1236b8)**
Soru Kökü: Aşırı oklüzal kuvvetlerin kronik olarak devam etmesi durumunda, periodonsiyumun zarar görmemek için yapısal değişikliğe gittiği adaptasyon evresinde aşağıdakilerden hangisinin gerçekleşmesi **beklenmez**?
Doğru Şık (E): Suprakrestal fibril yıkımına bağlı olarak patolojik periodontal cep oluşumu
Açıklama: Primer oklüzal travma ve ona bağlı adaptasyon evresinde, bakteriyel iltihap (plak) sürece dahil olmadıkça suprakrestal fibriller etkilenmez ve epitel ataçmanı apikale göç etmez; dolayısıyla patolojik periodontal cep oluşumu görülmez. Adaptasyonda sadece periodontal aralık genişler, damarlanma artar, diş mobilitesi fizyolojik sınırları aşar ve cep olmaksızın kemik defekti izlenir.

---

### ÇİFT 36 (Benzerlik: 0.72)

**Soru 1 (ID: 5742c9db-e84f-4797-a12f-6143ebd24f1b)**
Soru Kökü: Otuz iki yaşındaki kadın hasta, alt sağ birinci molar dişinde zonklayıcı ağrı, çiğnemede hassasiyet ve şişlik şikayetiyle kliniğe başvuruyor. Yapılan muayenede dişin vital olduğu, ilgili dişin vestibülünde gingival marjinden probing yapıldığında dar fakat derin bir periodontal cep bulunduğu saptanıyor. Radyografide apikal alan sağlıklı ancak kökün lateral yüzeyinde sınırlı radyolusensi izleniyor. Mevcut bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Akut periodontal apse
Açıklama: Dişin canlı (vital) olması ve radyolusent alanın periapikal değil lateralde (kök yan yüzeyinde) lokalize olması, enflamasyon kaynağının pulpal değil periodontal cep olduğunu net şekilde gösterir. Gingival apsede lezyon sadece marjinal dokudayken, periodontal apsede destek kemik yıkımı ve derin cep varlığı mevcuttur.

**Soru 2 (ID: 5f963e8e-725d-4b8a-b0ab-9bcd8a7805d7)**
Soru Kökü: 62 yaşında erkek hasta alt sağ ikinci küçük azı dişinde zonklayıcı spontan ağrı şikayetiyle gelmiştir. İlgili dişte herhangi bir kuronal çürük, kırık veya daha önce yapılmış bir restorasyon saptanmamasına karşın, radyografide dişi mesiale kadar saran 8 mm kemik yıkımı ve klinik cep izlenmiştir. Dişin vitalitesi negatiftir. Bu dişteki pulpa hastalığının sekonder olarak tetiklenmesindeki en olası mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Periodontal cepteki enfeksiyonun kök yüzeyindeki yan kanallar yoluyla pulpaya ulaşması
Açıklama: Kuronal çürük yokluğunda tespit edilen devital diş (pulpa nekrozu) ve ağrı, sıklıkla ileri periodontal yıkım ile ilişkilidir. Kök yüzeyinin açılmasıyla periodontal cep içindeki bakteri ve ürünleri yan kanallar (lateral kanallar) veya çok ileri kemik kaybında foramen apikale yoluyla pulpayı doğrudan enfekte eder.

---

### ÇİFT 37 (Benzerlik: 0.72)

**Soru 1 (ID: 19912a5a-bab7-48d3-b9b7-224ffbbe6b23)**
Soru Kökü: Oklüzal kuvvetlerin periodontal dokulardaki patolojik etkileri incelendiğinde;
I. Sağlıklı bir peridonsiyuma sahip olan dişe gelen aşırı veya yönü sapmış kuvvetlerin meydana getirdiği doku hasarı primer oklüzal travmadır.
II. Primer oklüzal travmada doku cevabı ağırlıklı olarak adaptasyonla sınırlıdır, iltihap eklenmedikçe kemik içi cep oluşumu başlatılmaz.
III. Periodontal ataşman desteği önemli ölçüde azalmış bir dişe gelen fizyolojik düzeydeki normal oklüzal kuvvetlerin yarattığı yıkım sekonder oklüzal travmadır.
ifadelerinden hangileri doğrudur?
Doğru Şık (E): I, II ve III
Açıklama: Primer oklüzal travma intakt (sağlıklı) dişe gelen aşırı yüktür ve tek başına periodontal cep oluşturmaz, doku sadece adapte olur veya ligamenti genişletir. Sekonder oklüzal travma ise zaten kemiği erimiş ve zayıflamış dişe fizyolojik (normal) çiğneme kuvvetlerinin bile zarar vermesidir. Her üç öncül de doku biyodinamiğini doğru açıklamaktadır.

**Soru 2 (ID: 8c4b0780-c7e7-4bc2-b8cb-f7180c49aef8)**
Soru Kökü: I. İnterdental septumda vertikal (açısal) kemik kaybı 
II. Lamina durada kalınlaşma veya devamlılığın kaybolması 
III. Periodontal aralıkta genişleme 
IV. Marjinal krette tüm ark boyunca horizontal kemik kaybı 
Yukarıdakilerden hangileri primer oklüzal travmanın radyografik belirtileri arasında yer alır?
Doğru Şık (D): I, II ve III
Açıklama: Primer oklüzal travmada kuvvetin geldiği yöne bağlı olarak periodontal aralık genişler, basınç/gerilim alanlarında lamina dura rezorpsiyonu veya kalınlaşması izlenir ve furkasyon/septum bölgelerinde 'vertikal' kemik defektleri oluşur. Tüm ark boyunca izlenen horizontal kemik kaybı ise genel kronik periodontitisin sonucudur, spesifik oklüzal travma bulgusu değildir.

---

### ÇİFT 38 (Benzerlik: 0.72)

**Soru 1 (ID: 2ddaddde-b1eb-45ae-91c4-d3957c7dc3e4)**
Soru Kökü: On iki yaşındaki hasta, şiddetli tekrarlayan solunum yolu enfeksiyonları ve hafif kanama bozuklukları şikayetleriyle takip edilmektedir. Fizik muayenesinde saç, deri ve gözde lokalize pigment kaybı (parsiyel albinizm) saptanmıştır. İntraoral muayenesinde evre 3 generalize agresif periodontitis (Derece C) tablosu izlenmektedir. Nötrofillerin anormal, dev lizozomlar içererek fagositoz yeteneğini kaybettiği genetik sendrom aşağıdakilerden hangisidir?
Doğru Şık (D): Chediak-Higashi Sendromu
Açıklama: Chediak-Higashi Sendromu, nötrofil lizozomlarının dev veziküller oluşturarak (LYST geni mutasyonu) içeriğini serbestleştirememesi sonucu immünitenin zayıflaması ile karakterizedir. Klinik olarak diğer immün yetmezliklerden farklı şekilde, melanin granüllerinin dağılım defektine bağlı olarak spesifik 'parsiyel albinizm' bulgusu ile ayırt edilir.

**Soru 2 (ID: 69ac3e70-31bf-4989-9c99-dc59a140f4b3)**
Soru Kökü: Dört yaşındaki erkek çocuk, dizlerinde, dirseklerinde ve avuç içlerinde balık pulu görünümünde (iktiyozis) hiperkeratotik deri lezyonları ile kliniğe getiriliyor. Yapılan intraoral muayenede, şiddetli alveolar kemik yıkımı ve süt dişlerinin çoğunda spontan eksfoliasyon izleniyor. Anamnezden ebeveynlerin akraba olduğu öğreniliyor. Cathepsin C gen mutasyonuyla ilişkili bu sendrom aşağıdakilerden hangisidir?
Doğru Şık (A): Papillon-Lefevre Sendromu
Açıklama: Papillon-Lefevre Sendromu (PLS), avuç içi ve ayak tabanlarında hiperkeratoz ile çok erken yaşta ortaya çıkan şiddetli periodontitis ve dökülen dişlerle karakterizedir. 11. kromozomdaki Cathepsin C geni mutasyonludur. Chediak-Higashi kısmi albinizm yaparken, Hipofosfatazyada deri lezyonu değil ALP eksikliği ön plandadır.

---

### ÇİFT 39 (Benzerlik: 0.71)

**Soru 1 (ID: 5ac0e58d-4ef4-49cf-bbb9-47746f892a23)**
Soru Kökü: 45 yaşında erkek hasta, alt kesici dişler bölgesinde derin periodontal cepler saptanması üzerine değerlendiriliyor. Cep duvarı incelendiğinde dişetinin pembe renkli ve sıkı kıvamlı olduğu görülüyor. Bu bulguya dayanarak ilgili cep duvarı için aşağıdaki histopatolojik durumlardan hangisi en olasıdır?
Doğru Şık (B): Dokudaki yapım olaylarının yıkım olaylarına göre baskın olması
Açıklama: Fibrotik ceplerde yeni bağ dokusu hücrelerinin ve kollajen fibrillerin oluşumu (yapım olayları), dejeneratif yıkım olaylarından daha aktiftir. İnflamasyon devam etmesine rağmen eksudatif ödematöz yanıt zayıfladığında, doku sıkılaşıp pembe bir görünüm kazanır. İltihapta yapım ve yıkım olayları daima birlikte devam eder; hangisinin baskın olduğu cep duvarının kıvamını ve rengini belirler.

**Soru 2 (ID: 9e2c8b19-5f61-4c6f-9053-7d26fdb870bd)**
Soru Kökü: 42 yaşında kadın hasta, dişetlerinin sızladığını ve fırçalama sırasında anormal esnediğini tarif etmektedir. Periodontal sondlamada hekim doku direncinin çok düşük olduğunu ve dişeti kenarının gevşek/süngerimsi bir kıvama sahip olduğunu fark etmiştir. Bu gevşekliğin altında yatan direkt hücresel olay aşağıdakilerden hangisidir?
Doğru Şık (A): Dişeti bağdokusu fibrillerinin harabiyeti
Açıklama: Sağlıklı dişetindeki sıkı ve sert kıvamı büyük oranda yoğun bağ dokusu fibrilleri (kollajen ağ) sağlar. İnflamatuar matriks metalloproteinazlar tarafından bu fibrillerin harabiyete uğraması, dişetinin sıkı kıvamını kaybederek gevşek ve süngerimsi bir yapıya dönüşmesine neden olur.

---

### ÇİFT 40 (Benzerlik: 0.71)

**Soru 1 (ID: 1efa0dc5-283b-437c-986b-d278aa1741c2)**
Soru Kökü: Üç yaşındaki erkek çocuk kliniğe yaygın, çok şiddetli dişeti inflamasyonu ve kanama tablosu ile başvuruyor. Anamnezinde sık tekrarlayan üst solunum yolu enfeksiyonları ile orta kulak iltihabı hikayesi bulunuyor. Muayenede belirgin eklenti olmamasına rağmen aşırı kemik yıkımı var ancak lezyonlarda tipik püy (cerahat) formasyonu izlenmiyor. Genetik incelemede nötrofillerin damar dışına göçünü sağlayan beta-2 integrin zincirinde mutasyon olduğu raporlanıyor. Bu nadir sendrom aşağıdakilerden hangisidir?
Doğru Şık (C): Tip 1 Lökosit Adezyon Eksikliği
Açıklama: Lökosit Adezyon Eksikliği (LAD), lökositlerin enfeksiyon alanına tutunmasını sağlayan integrin moleküllerindeki mutasyon ile karakterizedir. Fagositoz yapan hücreler dokuya ulaşamadığı için püy oluşmaz; ancak savunmasız doku hızla yıkılarak çocukluk çağında şiddetli periodontitis ve sekonder jeneralize enfeksiyonlarla sonuçlanır.

**Soru 2 (ID: 69ac3e70-31bf-4989-9c99-dc59a140f4b3)**
Soru Kökü: Dört yaşındaki erkek çocuk, dizlerinde, dirseklerinde ve avuç içlerinde balık pulu görünümünde (iktiyozis) hiperkeratotik deri lezyonları ile kliniğe getiriliyor. Yapılan intraoral muayenede, şiddetli alveolar kemik yıkımı ve süt dişlerinin çoğunda spontan eksfoliasyon izleniyor. Anamnezden ebeveynlerin akraba olduğu öğreniliyor. Cathepsin C gen mutasyonuyla ilişkili bu sendrom aşağıdakilerden hangisidir?
Doğru Şık (A): Papillon-Lefevre Sendromu
Açıklama: Papillon-Lefevre Sendromu (PLS), avuç içi ve ayak tabanlarında hiperkeratoz ile çok erken yaşta ortaya çıkan şiddetli periodontitis ve dökülen dişlerle karakterizedir. 11. kromozomdaki Cathepsin C geni mutasyonludur. Chediak-Higashi kısmi albinizm yaparken, Hipofosfatazyada deri lezyonu değil ALP eksikliği ön plandadır.

---

### ÇİFT 41 (Benzerlik: 0.71)

**Soru 1 (ID: 9a7a42fe-2e34-484d-9106-12876e24fd54)**
Soru Kökü: Açığa çıkan kök yüzeylerindeki dentin aşırı duyarlılığının kimyasal tedavisinde 'Kalsiyum bileşikleri' grubunda yer alan ve dentin tübüllerini bu mekanizma ile izole eden ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Dibazik kalsiyum fosfat
Açıklama: Dentin duyarlılığı tedavisinde kalsiyum hidroksit ve dibazik kalsiyum fosfat, kalsiyum bileşikleri sınıfında yer alarak etki gösterir. Gümüş nitrat dentin tübüllerini tıkayan protein presipitanı iken, sodyum florid flor bileşikleri sınıfındadır. Dibazik kalsiyum fosfat doğrudan mineral matriks bariyeri oluşturmayı hedefler.

**Soru 2 (ID: b01a6c3d-2b1c-4355-a115-0585c28d9d43)**
Soru Kökü: Dentin aşırı duyarlılığı tedavisinde kullanılan ajanlar ve ait oldukları sınıflamalarla ilgili eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Formalin – Antienflamatuar ajan
Açıklama: Formalin bir antienflamatuar ajan değil, gümüş nitrat ve çinko klorür ile birlikte dentin tübüllerini kısmen tıkayan (burnishing) ajanlar grubunda yer alır. İyontoforez flor penetrasyonunu artırdığı için flor grubunda sınıflandırılır. Antienflamatuar ajanlar tabloda bağımsız bir grup olarak belirtilmiştir ancak formalin bu grupta yer almaz.

---

### ÇİFT 42 (Benzerlik: 0.71)

**Soru 1 (ID: 5cb125c1-41c3-448f-ad24-6792255bcffc)**
Soru Kökü: Periodontal hastalığın inaktif (sessiz) dönemi ile ilgili olarak;
I. Gram-pozitif bakterilerin prolifere olduğu görülür.
II. Bağ dokusu ataşmanı ve kemik kaybı şiddetlenerek devam eder.
III. İnflamatuar cevap azalır ve lezyon daha stabil hale gelir.
ifadelerinden hangileri doğrudur?
Doğru Şık (C): I ve III
Açıklama: Sessizlik döneminde Gram-pozitif mikroorganizmalar sahayı domine ederek mikrobiyal stabilite sağlar ve inflamatuar yanıt geriler (I ve III doğrudur). Bu dönemde bağ dokusu ataşmanı ve kemik kaybının çok az olduğu veya hiç olmadığı remisyon hali görülür (II yanlıştır). Periodontal yıkım, bu sessiz dönemler ile akut atakların birbirini izlediği döngüsel bir patern izler.

**Soru 2 (ID: 8c19d848-c358-4508-95fd-9f749b39de71)**
Soru Kökü: Periodontitis patogenezinde, sağlıklı gingival sulkusun patolojik periodontal cebe dönüşüm mekanizması dikkate alındığında;
I. Polimorfonükleer lökositlerin (PMN) sayıca artarak birleşim epiteline infiltre olması (%60 üzerine çıkması) doku yapışkanlığının kaybına neden olur.
II. Bağ dokusunda kollajen yıkımı gerçekleştikçe birleşim epiteli hücreleri prolifere olarak kök yüzeyi boyunca apikale doğru uzantılar (rete peg) yapar.
III. İltihabın ilerlemesi her durumda dikey alveol kemiği rezorpsiyonunu tetikleyerek sadece kemik içi (intrabony) cep oluşturur.
ifadelerinden hangileri patogenezle uyumludur?
Doğru Şık (B): I ve II
Açıklama: Periodontal cep oluşumunun ilk evrelerinde kollajen kaybı sonrası epitelin Rete Peg oluşturup apikale yürümesi ve PMN istilası ile dişe yapışıklığın (dezmozomal bağların) kopması kritik eşiklerdir. Ancak cepleşmenin her zaman dikey (intrabony) kemik kaybına yol açtığı bilgisi yanlıştır; horizontal rezorpsiyon ve kemik üstü cep de oluşabilir.

---

### ÇİFT 43 (Benzerlik: 0.71)

**Soru 1 (ID: b947051e-d2a0-4218-8c42-c0e58aa5a4e3)**
Soru Kökü: Dentin duyarlılığının giderilmesinde dentin parlatması (burnishing) yaparak dentin tübüllerini kısmen tıkayan tedavi ajanları arasında aşağıdakilerden hangisi yer alır?
Doğru Şık (B): Çinko klorür-potasyum ferrocyanide
Açıklama: Çinko klorür-potasyum ferrocyanide, gümüş nitrat ve formalin ile birlikte dentin tübüllerini kısmen tıkayan (protein presipitasyonu/burnishing) ajanlar grubundadır. Kalsiyum hidroksit kalsiyum bileşikleri, stannöz ve sodyum florür flor bileşikleri arasında yer alır. Dentin bonding ajanları ise adeziv restoratif gruptadır.

**Soru 2 (ID: f9fecf53-42d3-4318-845c-0efb973bf493)**
Soru Kökü: Aşağıdakilerden hangisi dentin aşırı duyarlılığı tedavisinde uygulanan ve etki mekanizması bakımından 'Flor bileşikleri' ana başlığı altında sınıflandırılan yöntemlerden biridir?
Doğru Şık (E): İyontoforez
Açıklama: İyontoforez, sodyum florid ve stannöz florür ile birlikte dentin duyarlılığı tedavisinde flor bileşikleri ve türevleri sınıfı altında değerlendirilir ve flor iyonlarının elektrik akımı ile dentin tübüllerine penetrasyonunu artırmayı hedefler. Formalin ve çinko klorür kısmen tıkayıcı (burnishing) ajanlardır. Kavite vernikleri ise bağımsız bir yüzey örtücü gruptur.

---

### ÇİFT 44 (Benzerlik: 0.71)

**Soru 1 (ID: b784e9cd-23f8-42d0-8b83-697319ad5889)**
Soru Kökü: Periodontal cep duvarında yıkım olaylarının yapım olaylarından daha baskın olduğu durumda aşağıdaki klinik bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (A): Soluk pembe renk ve sıkı kıvam
Açıklama: Ödematöz cep formunda yıkım olayları baskındır ve hücresel eksuda nedeniyle dişeti mavimtrak kırmızı, yumuşak ve parlak bir görünüm alır. Pembe renkli ve sıkı kıvamlı görünüm, bağ dokusu hücreleri ve kolajen liflerin sentezinin baskın olduğu (yapım olaylarının önde olduğu) fibrotik ceplerin karakteristik özelliğidir. Doku hasarının telafi edilme çabası, yapım ve yıkım dengesini değiştirerek doğrudan marjinal kliniğe yansır.

**Soru 2 (ID: ef71fa1a-0a26-4dee-8560-0db4b93066cd)**
Soru Kökü: Periodontal cep oluşumu sırasında klinik olarak dişeti kenarının keskinliğini kaybederek dişi sarmalamadığı ve künt bir biçim aldığı görülür. Histolojik düzeyde bu küntleşme tablosuna aşağıdaki değişikliklerden hangisi neden **olmaz**?
Doğru Şık (C): Yüzey epitelinde yaygın atrofi
Açıklama: Dişeti kenarının küntleşmesi ve diş yüzeyinden ayrılarak kalınlaşması dokudaki ödem ve hiperplazi kaynaklı bağ dokusu hacim artışıdır. Epitel atrofisi ise küntleşmeye değil, dokunun parlak ve düz bir yüzey (stippling kaybı) almasına neden olan temel reaksiyondur.

---

### ÇİFT 45 (Benzerlik: 0.71)

**Soru 1 (ID: 52c12f5f-33d0-4d99-a998-0bc6ccc9e8c1)**
Soru Kökü: Elli yaşındaki erkek hastanın radyografik incelemesinde, oklüzal travmaya bağlı olarak periodontal membranın dikey yönde kum saati şeklini aldığı ve bu bölgede mobilite saptandığı görülmüştür. Bu hastanın periodonsiyumunun aşırı oklüzal kuvvetlere karşı 'adaptasyon (adaptif remodelling)' evresinde olduğuna işaret eden en spesifik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Periodontal cep oluşumu olmadan izlenen açısal kemik defekti
Açıklama: Aşırı oklüzal kuvvetler varlığını sürdürdüğünde periodonsiyum adaptasyon evresine girer. Bu evrenin en spesifik bulgusu, patolojik bir derinleşme (periodontal cep) oluşmadan alveol kemiğinde açısal (vertikal) kemik defekti meydana gelmesidir. İltihap yokluğunda, oklüzal travma tek başına periodontal cep oluşturmaz, sadece kemikte adaptif mekanik deformasyonlara neden olur.

**Soru 2 (ID: bd772d12-b980-4731-a32e-f334bb237f27)**
Soru Kökü: Radyografik incelemede lamina dura kalınlığının bölgesel olarak belirgin şekilde artmış (apozisyon) olarak izlenmesi, travmatik oklüzyon kuvvetlerinin biyomekanik dağılımında aşağıdakilerden hangisine işaret eder?
Doğru Şık (E): Kuvvetin dişi kemikten uzaklaştırdığı gerilim alanına
Açıklama: Oklüzal travmada diş kökünün kemikten uzaklaşmaya zorlandığı bölge 'gerilim alanı'dır. Bu bölgede periodontal lifler uzar ve alveol kemiğinde osteoblastik aktivite uyarılarak lamina durada radyografik bir kalınlaşma (apozisyon) meydana gelir. Basınç bölgesinde ise tam tersine rezorpsiyon ve lamina durada kayıp izlenir.

---

### ÇİFT 46 (Benzerlik: 0.70)

**Soru 1 (ID: 1b4d0670-2fc5-4d7f-bf15-bb4baaeac453)**
Soru Kökü: 22 yaşında erkek hasta, sol alt arka bölgede ağrı, yutkunma zorluğu ve ağız açmada kısıtlılık (trismus) şikayetiyle başvurmuştur. Muayenede, kısmen sürmüş olan sol alt üçüncü büyük azı dişini örten yumuşak doku (operkulum) aşırı kızarık, şiş ve palpasyonda ağrılıdır. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Perikoronal apse
Açıklama: Kısmen sürmüş bir dişi (genellikle mandibular 3. azı dişi) örten dişeti flebinin (operkulum) altına plak ve gıda artıklarının gömülmesi sonucu akut inflamasyonla gelişen tablo Perikoronal Apse'dir. Gingival apse sadece marjinal dokuyu ilgilendirir, periodontal apse ise derinleşmiş ceplere sahip bir periodontitis hastasında ataşman kaybıyla birliktedir. Anatomik olarak retantif olan operkulum bölgesi bu tablonun temel zeminidir.

**Soru 2 (ID: dac6f516-6368-423b-8d03-d8bd06d3f7e5)**
Soru Kökü: 35 yaşında kadın hasta, bir gün önce yediği patlamış mısır sonrası sağ üst birinci küçük azı dişinin yanındaki dişetinde ani gelişen, şiddetli ağrılı ve lokalize bir şişlik şikayetiyle başvuruyor. İlgili dişin radyografisinde alveol kemik kaybı görülmemekte ve periodontal cebe rastlanmamaktadır. Şişlik sadece marjinal ve interdental dişetini ilgilendirmektedir. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Gingival apse
Açıklama: Sadece marjinal veya interdental dokuyu etkileyen, dişin derin destek dokularında harabiyet olmayan apseler gingival apselerdir ve tipik olarak yiyecek artığı/yabancı cisim batması (patlamış mısır kabuğu, kürdan, balık kılçığı) sonucu epitel bariyerinin yıkılmasıyla ortaya çıkarlar. Peridontal apse önceden var olan derin cebin tıkanmasına, perikoronal apse ise gömülü diş operkulumuna sekonder gelişir. Tedavisi insizyon ve yabancı cismin hemen uzaklaştırılmasıdır.

---

### ÇİFT 47 (Benzerlik: 0.70)

**Soru 1 (ID: 9a7a42fe-2e34-484d-9106-12876e24fd54)**
Soru Kökü: Açığa çıkan kök yüzeylerindeki dentin aşırı duyarlılığının kimyasal tedavisinde 'Kalsiyum bileşikleri' grubunda yer alan ve dentin tübüllerini bu mekanizma ile izole eden ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Dibazik kalsiyum fosfat
Açıklama: Dentin duyarlılığı tedavisinde kalsiyum hidroksit ve dibazik kalsiyum fosfat, kalsiyum bileşikleri sınıfında yer alarak etki gösterir. Gümüş nitrat dentin tübüllerini tıkayan protein presipitanı iken, sodyum florid flor bileşikleri sınıfındadır. Dibazik kalsiyum fosfat doğrudan mineral matriks bariyeri oluşturmayı hedefler.

**Soru 2 (ID: c99dab3b-58e7-4c8b-b535-12564397ecd4)**
Soru Kökü: Dentin duyarlılığı ajanlarının etki mekanizmalarına göre sınıflandırılmasında, aşağıdaki ajan-grup eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (E): Stronsiyum klorid – Kalsiyum bileşiği
Açıklama: Stronsiyum klorid, dentin duyarlılığı tablosunda kalsiyum bileşiği olarak değil, kendi başına bağımsız bir moleküler ajan olarak yer alır. Kalsiyum bileşikleri grubunda sadece kalsiyum hidroksit ve dibazik kalsiyum fosfat bulunur. Diğer tüm eşleştirmeler doğru etki mekanizmalarını yansıtmaktadır.

---

### ÇİFT 48 (Benzerlik: 0.70)

**Soru 1 (ID: 5cb125c1-41c3-448f-ad24-6792255bcffc)**
Soru Kökü: Periodontal hastalığın inaktif (sessiz) dönemi ile ilgili olarak;
I. Gram-pozitif bakterilerin prolifere olduğu görülür.
II. Bağ dokusu ataşmanı ve kemik kaybı şiddetlenerek devam eder.
III. İnflamatuar cevap azalır ve lezyon daha stabil hale gelir.
ifadelerinden hangileri doğrudur?
Doğru Şık (C): I ve III
Açıklama: Sessizlik döneminde Gram-pozitif mikroorganizmalar sahayı domine ederek mikrobiyal stabilite sağlar ve inflamatuar yanıt geriler (I ve III doğrudur). Bu dönemde bağ dokusu ataşmanı ve kemik kaybının çok az olduğu veya hiç olmadığı remisyon hali görülür (II yanlıştır). Periodontal yıkım, bu sessiz dönemler ile akut atakların birbirini izlediği döngüsel bir patern izler.

**Soru 2 (ID: 86b791ce-1bbc-4f26-9504-0b31b5c0a12d)**
Soru Kökü: Periodontal hastalık aktivitesinde doku yıkımının pik yaptığı "aktif dönem" ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Subgingival florada Gram pozitif bakteriler proliferasyona uğrar ve baskındır.
Açıklama: Aktif yıkım döneminde Gram-negatif, hareketli ve anaerob bakterilerden oluşan patojenik biyofilm formasyonu hakimdir; Gram-pozitif mikroorganizmaların prolifere olduğu evre ise hastalığın remisyonda olduğu sessizlik (inaktif) dönemidir. Aktif dönemde cep epitelindeki ülserasyonlara sekonder olarak spontan kanamalar ve hızlı bağ dokusu yıkımı izlenir. Bu mikrobiyal popülasyon kayması (shift), hastalığın ilerleme hızını belirleyen ana faktördür.

---

### ÇİFT 49 (Benzerlik: 0.70)

**Soru 1 (ID: 32d16f2b-c508-42a9-82fc-27f202070e78)**
Soru Kökü: Dentin tübüllerini kısmen tıkayan (dentin parlatması / burnishing) ajanlar, dentin aşırı duyarlılığı tedavisinde sık kullanılan materyallerdir. Tabloya göre aşağıdakilerden hangisi bu sınıfın bir üyesi **değildir**?
Doğru Şık (C): Kavite vernikleri
Açıklama: Dentin duyarlılığı tedavisinde kavite vernikleri, tübül tıkayan kimyasal presipitanlardan bağımsız ayrı bir yüzeysel bariyer örtücü sınıfı oluşturur. Gümüş nitrat, formalin ve çinko klorür-potasyum ferrocyanide karışımı doğrudan dentin proteinlerini çökelterek tübülleri kısmen tıkayan (burnishing) kimyasal ajanlardır.

**Soru 2 (ID: f9fecf53-42d3-4318-845c-0efb973bf493)**
Soru Kökü: Aşağıdakilerden hangisi dentin aşırı duyarlılığı tedavisinde uygulanan ve etki mekanizması bakımından 'Flor bileşikleri' ana başlığı altında sınıflandırılan yöntemlerden biridir?
Doğru Şık (E): İyontoforez
Açıklama: İyontoforez, sodyum florid ve stannöz florür ile birlikte dentin duyarlılığı tedavisinde flor bileşikleri ve türevleri sınıfı altında değerlendirilir ve flor iyonlarının elektrik akımı ile dentin tübüllerine penetrasyonunu artırmayı hedefler. Formalin ve çinko klorür kısmen tıkayıcı (burnishing) ajanlardır. Kavite vernikleri ise bağımsız bir yüzey örtücü gruptur.

---

### ÇİFT 50 (Benzerlik: 0.70)

**Soru 1 (ID: 32d16f2b-c508-42a9-82fc-27f202070e78)**
Soru Kökü: Dentin tübüllerini kısmen tıkayan (dentin parlatması / burnishing) ajanlar, dentin aşırı duyarlılığı tedavisinde sık kullanılan materyallerdir. Tabloya göre aşağıdakilerden hangisi bu sınıfın bir üyesi **değildir**?
Doğru Şık (C): Kavite vernikleri
Açıklama: Dentin duyarlılığı tedavisinde kavite vernikleri, tübül tıkayan kimyasal presipitanlardan bağımsız ayrı bir yüzeysel bariyer örtücü sınıfı oluşturur. Gümüş nitrat, formalin ve çinko klorür-potasyum ferrocyanide karışımı doğrudan dentin proteinlerini çökelterek tübülleri kısmen tıkayan (burnishing) kimyasal ajanlardır.

**Soru 2 (ID: d0366905-3b16-4acd-9f63-906631a6fd8b)**
Soru Kökü: Dentin tübüllerini yüzeysel olarak tıkayan veya nöral iletimi bloke eden ajanlar, farklı kimyasal mekanizmalar üzerinden etki gösterirler. Aşağıdaki duyarlılık giderici kimyasallardan hangisi dentin tedavisinde spesifik bir kalsiyum veya flor bileşiği olarak **değerlendirilmez**?
Doğru Şık (B): Stronsiyum klorid
Açıklama: Stronsiyum klorid, dentin duyarlılığında kullanılan metalik bir tuz olmakla birlikte kalsiyum veya flor bileşikleri ana başlıkları altında sınıflanmaz. Dibazik kalsiyum fosfat ve kalsiyum hidroksit spesifik olarak kalsiyum grubunda; sodyum ve stannöz florür ise flor grubundadır. Sınıflandırmada stronsiyum klorid ve potasyum oksalat ayrı bağımsız moleküllerdir.

---

### ÇİFT 51 (Benzerlik: 0.70)

**Soru 1 (ID: b947051e-d2a0-4218-8c42-c0e58aa5a4e3)**
Soru Kökü: Dentin duyarlılığının giderilmesinde dentin parlatması (burnishing) yaparak dentin tübüllerini kısmen tıkayan tedavi ajanları arasında aşağıdakilerden hangisi yer alır?
Doğru Şık (B): Çinko klorür-potasyum ferrocyanide
Açıklama: Çinko klorür-potasyum ferrocyanide, gümüş nitrat ve formalin ile birlikte dentin tübüllerini kısmen tıkayan (protein presipitasyonu/burnishing) ajanlar grubundadır. Kalsiyum hidroksit kalsiyum bileşikleri, stannöz ve sodyum florür flor bileşikleri arasında yer alır. Dentin bonding ajanları ise adeziv restoratif gruptadır.

**Soru 2 (ID: d0366905-3b16-4acd-9f63-906631a6fd8b)**
Soru Kökü: Dentin tübüllerini yüzeysel olarak tıkayan veya nöral iletimi bloke eden ajanlar, farklı kimyasal mekanizmalar üzerinden etki gösterirler. Aşağıdaki duyarlılık giderici kimyasallardan hangisi dentin tedavisinde spesifik bir kalsiyum veya flor bileşiği olarak **değerlendirilmez**?
Doğru Şık (B): Stronsiyum klorid
Açıklama: Stronsiyum klorid, dentin duyarlılığında kullanılan metalik bir tuz olmakla birlikte kalsiyum veya flor bileşikleri ana başlıkları altında sınıflanmaz. Dibazik kalsiyum fosfat ve kalsiyum hidroksit spesifik olarak kalsiyum grubunda; sodyum ve stannöz florür ise flor grubundadır. Sınıflandırmada stronsiyum klorid ve potasyum oksalat ayrı bağımsız moleküllerdir.

---

### ÇİFT 52 (Benzerlik: 0.70)

**Soru 1 (ID: 9d462faa-bedc-469d-b8c1-ac2e45b9bedd)**
Soru Kökü: Dişin bir yüzeyinden başlayıp daha apikalde kıvrılarak başka bir yüzeyine doğru ilerleyen periodontal cep morfolojisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kompleks cep
Açıklama: Kompleks cepler spiral formda ilerleyerek dişin bir yüzeyinden başka bir yüzeyine uzanan patolojik derinleşmelerdir. Birleşik (compound) cepler iki veya daha fazla yüzeyi ilgilendirip doğrudan marjinle ilişkide kalırken, kompleks ceplerdeki sprial progresyon onları ayırır. Kök yüzeyindeki girintiler ve kök morfolojisindeki anatomik varyasyonlar bu tip ceplerin oluşumuna zemin hazırlar.

**Soru 2 (ID: bcbb4081-a83e-4187-aa07-bf8a86b04397)**
Soru Kökü: Periodontal cepler komşu oldukları diş yüzeyi sayısına ve uzanım biçimlerine göre sınıflandırılmaktadır. Dişin tek bir yüzeyinde bulunarak 'Basit Cep (Simple Cep)' olarak tanımlanan yapılar için aşağıdakilerden hangisi **doğru değildir**?
Doğru Şık (D): Dişin bir yüzeyinden başlayıp kemik içinde dolanarak başka bir kök yüzeyine sarmal ilerler.
Açıklama: Dişin bir yüzeyinden başlayıp sarmal (spiral) bir şekilde dolanarak apikalde başka bir yüzeye kadar ilerleyen cep tipi 'Kompleks Cep'tir. Simple (basit) cepler tek yüzeyi, Compound (birleşik) cepler ise iki veya daha fazla yüzeyi ilgilendirir ancak spiral dönme göstermez.

---

### ÇİFT 53 (Benzerlik: 0.70)

**Soru 1 (ID: 05eec6ce-0eca-4f9b-9ebb-d1cf657e8068)**
Soru Kökü: Sigara kullanımı, periodontal yıkımın şiddetini artıran ve konak immün yanıtını değiştiren en önemli çevresel risk faktörlerinden biridir. Sigara içen bireylerin subgingival florasında aşağıdaki kırmızı kompleks üyelerinden hangisinin oranında spesifik bir artış gözlenmesi beklenir?
Doğru Şık (D): Tannerella forsythia
Açıklama: Sigara kullanımı subgingival mikrobiyomun ekolojisini bozarak bakteriyel florayı değiştirir ve özellikle kırmızı kompleks üyesi Tannerella forsythia oranını artırır. A. viscosus ise daha çok kök çürüklerinde baskın olan bir organizmadır ve direkt sigara immünsupresyonu ile ilişkili florayı domine etmez.

**Soru 2 (ID: 1da2d681-6c0e-4290-959d-31b8e5b53a64)**
Soru Kökü: Sigara içen periodontitis hastalarında alveolar kemik kaybı daha agresif seyreder ve doku yıkımı artar. Bu yıkımın moleküler düzeydeki artışında, sigaranın bakteriyel lipopolisakkaritlere yanıt olarak hangi konak hücresinden hangi pro-inflamatuar medyatörün salınımını artırması en temel etkendir?
Doğru Şık (E): Monositlerden PGE2 (Prostaglandin E2) üretimini artırması
Açıklama: Sigara kullanımı bakteriyel floraya konak yanıtını bozar ve nötrofil fonksiyonlarını (kemotaksis/fagositoz) baskılar. Bununla birlikte, bakteriyel lipopolisakkaritlerin uyarısıyla monositlerden patolojik düzeyde PGE2 (Prostaglandin E2) üretimi tetiklenir ve bu durum kemik rezorpsiyonunu hızlandırır.

---

### ÇİFT 54 (Benzerlik: 0.70)

**Soru 1 (ID: 0ba2368f-d318-4905-b15e-db3a11939875)**
Soru Kökü: Uyku sırasında veya gün içinde dişlerini aşırı kuvvetlerle sıkan (clenching) veya gıcırdatan (bruksizm) bir hastanın periodontal dokularında aşağıdaki klinik bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (C): Plak birikimi olmadan şiddetli ve yaygın marjinal dişeti kanaması
Açıklama: Bruksizm ve clenching, periodontal dokularda travmatik okluzyon bulgularına neden olur; bunlar arasında fremitus, triangulasyon (periodontal ligamentte huni tarzı genişleme) ve atrizyon yer alır. Ancak marjinal dişeti kanaması enflamatuar bir bulgudur ve primer nedeni bakteri plağıdır; mekanik bir travma olan okluzal travma tek başına marjinal gingivitis tablosu veya kanama oluşturmaz. Plak yokluğunda dişeti kanaması beklenen bir bulgu değildir.

**Soru 2 (ID: b784e9cd-23f8-42d0-8b83-697319ad5889)**
Soru Kökü: Periodontal cep duvarında yıkım olaylarının yapım olaylarından daha baskın olduğu durumda aşağıdaki klinik bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (A): Soluk pembe renk ve sıkı kıvam
Açıklama: Ödematöz cep formunda yıkım olayları baskındır ve hücresel eksuda nedeniyle dişeti mavimtrak kırmızı, yumuşak ve parlak bir görünüm alır. Pembe renkli ve sıkı kıvamlı görünüm, bağ dokusu hücreleri ve kolajen liflerin sentezinin baskın olduğu (yapım olaylarının önde olduğu) fibrotik ceplerin karakteristik özelliğidir. Doku hasarının telafi edilme çabası, yapım ve yıkım dengesini değiştirerek doğrudan marjinal kliniğe yansır.

---

### ÇİFT 55 (Benzerlik: 0.70)

**Soru 1 (ID: 206c78c2-f9f2-4773-80ce-34360eb74b6d)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) lezyonlarında mikroorganizmalar canlı dokuya da invaze olmaktadır. Histopatolojik incelemede, bağ dokusunun en derinine inen ve diğer patojenik organizmaların izlenmeyip *sadece* spiroketlerin bulunduğu en alt penetrasyon bölgesi aşağıdakilerden hangisidir?
Doğru Şık (C): Spiroketal infiltrasyon tabakası
Açıklama: NUG lezyonu mikroskobik olarak 4 tabakadan incelenir. Yüzeyden derine doğru sırasıyla; bakteriyel tabaka, nötrofilden zengin tabaka, nekrotik tabaka ve en derinde sağlam canlı dokuya komşu olan spiroketal infiltrasyon tabakası gelir. Spiroketlerin yoğun hareketliliği ve doku invazyon yetenekleri, onların nekrotik alanı aşarak derin dokulara tek başlarına girmelerini sağlar.

**Soru 2 (ID: 3f8ecc60-d480-4770-96e2-ef780e14f8ad)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) etyolojisinde primer rol oynayan sabit bakteriyel flora incelendiğinde, aşağıdaki patojenlerden hangisinin bu komplekste yer alması **en az olasıdır**?
Doğru Şık (E): Aggregatibacter actinomycetemcomitans
Açıklama: NUG etyolojisindeki sabit mikrobiyal flora esas olarak Fusobacterium türleri, Spiroketler (Treponema), Selenomonas türleri ve P. intermedia'dan oluşur. A. actinomycetemcomitans, lokalize agresif periodontitiste dominant olan temel patojendir ve NUG'un klasik fusospiroketal flora kompleksine dahil değildir. NUG lezyonlarındaki karakteristik nekroz tablosu bu spesifik anaerob kombinasyona bağlıdır.

---

### ÇİFT 56 (Benzerlik: 0.70)

**Soru 1 (ID: d0366905-3b16-4acd-9f63-906631a6fd8b)**
Soru Kökü: Dentin tübüllerini yüzeysel olarak tıkayan veya nöral iletimi bloke eden ajanlar, farklı kimyasal mekanizmalar üzerinden etki gösterirler. Aşağıdaki duyarlılık giderici kimyasallardan hangisi dentin tedavisinde spesifik bir kalsiyum veya flor bileşiği olarak **değerlendirilmez**?
Doğru Şık (B): Stronsiyum klorid
Açıklama: Stronsiyum klorid, dentin duyarlılığında kullanılan metalik bir tuz olmakla birlikte kalsiyum veya flor bileşikleri ana başlıkları altında sınıflanmaz. Dibazik kalsiyum fosfat ve kalsiyum hidroksit spesifik olarak kalsiyum grubunda; sodyum ve stannöz florür ise flor grubundadır. Sınıflandırmada stronsiyum klorid ve potasyum oksalat ayrı bağımsız moleküllerdir.

**Soru 2 (ID: f9fecf53-42d3-4318-845c-0efb973bf493)**
Soru Kökü: Aşağıdakilerden hangisi dentin aşırı duyarlılığı tedavisinde uygulanan ve etki mekanizması bakımından 'Flor bileşikleri' ana başlığı altında sınıflandırılan yöntemlerden biridir?
Doğru Şık (E): İyontoforez
Açıklama: İyontoforez, sodyum florid ve stannöz florür ile birlikte dentin duyarlılığı tedavisinde flor bileşikleri ve türevleri sınıfı altında değerlendirilir ve flor iyonlarının elektrik akımı ile dentin tübüllerine penetrasyonunu artırmayı hedefler. Formalin ve çinko klorür kısmen tıkayıcı (burnishing) ajanlardır. Kavite vernikleri ise bağımsız bir yüzey örtücü gruptur.

---

### ÇİFT 57 (Benzerlik: 0.70)

**Soru 1 (ID: 464f2c1f-9b0a-4988-97ce-fa6b4e756f6f)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, alt sol ikinci molar dişindeki mobilite ve çiğneme ağrısı nedeniyle başvuruyor. Dişte hiçbir karies veya restorasyon bulunmamasına karşın pulpa vitalite testlerine yanıt alınmıyor. Radyografik incelemede alveol kretinden apekse kadar uzanan ve apeksi de içine alan kesintisiz, geniş bir kemik radyolusensisi görülüyor. Probing derinliği dişin mesialinde kesintisiz şekilde apekse kadar inmektedir. Bu tablo Simon'un endo-perio sınıflamasına göre hangisi ile en uyumludur?
Doğru Şık (A): Kombine endodontik-periodontal lezyon
Açıklama: Dişin devital olması (pulpal patoloji) ile apekse kadar inen periodontal sondlama ve kesintisiz geniş kemik yıkımı (periodontal patoloji) birlikte izlenmektedir. Koronalden inen cep ile apeksten yukarı çıkan kemik yıkımının birleşerek oluşturduğu bu patoloji 'Kombine Endodontik-Periodontal Lezyon' olarak adlandırılır.

**Soru 2 (ID: 5742c9db-e84f-4797-a12f-6143ebd24f1b)**
Soru Kökü: Otuz iki yaşındaki kadın hasta, alt sağ birinci molar dişinde zonklayıcı ağrı, çiğnemede hassasiyet ve şişlik şikayetiyle kliniğe başvuruyor. Yapılan muayenede dişin vital olduğu, ilgili dişin vestibülünde gingival marjinden probing yapıldığında dar fakat derin bir periodontal cep bulunduğu saptanıyor. Radyografide apikal alan sağlıklı ancak kökün lateral yüzeyinde sınırlı radyolusensi izleniyor. Mevcut bulgulara göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Akut periodontal apse
Açıklama: Dişin canlı (vital) olması ve radyolusent alanın periapikal değil lateralde (kök yan yüzeyinde) lokalize olması, enflamasyon kaynağının pulpal değil periodontal cep olduğunu net şekilde gösterir. Gingival apsede lezyon sadece marjinal dokudayken, periodontal apsede destek kemik yıkımı ve derin cep varlığı mevcuttur.

---

### ÇİFT 58 (Benzerlik: 0.70)

**Soru 1 (ID: 464f2c1f-9b0a-4988-97ce-fa6b4e756f6f)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, alt sol ikinci molar dişindeki mobilite ve çiğneme ağrısı nedeniyle başvuruyor. Dişte hiçbir karies veya restorasyon bulunmamasına karşın pulpa vitalite testlerine yanıt alınmıyor. Radyografik incelemede alveol kretinden apekse kadar uzanan ve apeksi de içine alan kesintisiz, geniş bir kemik radyolusensisi görülüyor. Probing derinliği dişin mesialinde kesintisiz şekilde apekse kadar inmektedir. Bu tablo Simon'un endo-perio sınıflamasına göre hangisi ile en uyumludur?
Doğru Şık (A): Kombine endodontik-periodontal lezyon
Açıklama: Dişin devital olması (pulpal patoloji) ile apekse kadar inen periodontal sondlama ve kesintisiz geniş kemik yıkımı (periodontal patoloji) birlikte izlenmektedir. Koronalden inen cep ile apeksten yukarı çıkan kemik yıkımının birleşerek oluşturduğu bu patoloji 'Kombine Endodontik-Periodontal Lezyon' olarak adlandırılır.

**Soru 2 (ID: 5f963e8e-725d-4b8a-b0ab-9bcd8a7805d7)**
Soru Kökü: 62 yaşında erkek hasta alt sağ ikinci küçük azı dişinde zonklayıcı spontan ağrı şikayetiyle gelmiştir. İlgili dişte herhangi bir kuronal çürük, kırık veya daha önce yapılmış bir restorasyon saptanmamasına karşın, radyografide dişi mesiale kadar saran 8 mm kemik yıkımı ve klinik cep izlenmiştir. Dişin vitalitesi negatiftir. Bu dişteki pulpa hastalığının sekonder olarak tetiklenmesindeki en olası mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Periodontal cepteki enfeksiyonun kök yüzeyindeki yan kanallar yoluyla pulpaya ulaşması
Açıklama: Kuronal çürük yokluğunda tespit edilen devital diş (pulpa nekrozu) ve ağrı, sıklıkla ileri periodontal yıkım ile ilişkilidir. Kök yüzeyinin açılmasıyla periodontal cep içindeki bakteri ve ürünleri yan kanallar (lateral kanallar) veya çok ileri kemik kaybında foramen apikale yoluyla pulpayı doğrudan enfekte eder.

---

### ÇİFT 59 (Benzerlik: 0.70)

**Soru 1 (ID: 0ba2368f-d318-4905-b15e-db3a11939875)**
Soru Kökü: Uyku sırasında veya gün içinde dişlerini aşırı kuvvetlerle sıkan (clenching) veya gıcırdatan (bruksizm) bir hastanın periodontal dokularında aşağıdaki klinik bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (C): Plak birikimi olmadan şiddetli ve yaygın marjinal dişeti kanaması
Açıklama: Bruksizm ve clenching, periodontal dokularda travmatik okluzyon bulgularına neden olur; bunlar arasında fremitus, triangulasyon (periodontal ligamentte huni tarzı genişleme) ve atrizyon yer alır. Ancak marjinal dişeti kanaması enflamatuar bir bulgudur ve primer nedeni bakteri plağıdır; mekanik bir travma olan okluzal travma tek başına marjinal gingivitis tablosu veya kanama oluşturmaz. Plak yokluğunda dişeti kanaması beklenen bir bulgu değildir.

**Soru 2 (ID: f9877656-21e2-4f69-adf5-d7e4bde60454)**
Soru Kökü: Yirmi sekiz yaşındaki erkek hasta, bruksizm ve sabahları çenelerde ağrı şikayetiyle muayene edilmektedir. Dişlerde ileri derecede oklüzal aşınma tespit edilmiştir. Travmatik oklüzyona maruz kalmış bu dişlerin fiziksel muayenesini yapan hekimin aşağıdaki bulgulardan hangisini saptaması **en olasıdır**?
Doğru Şık (A): Perküsyon muayenesinde seste belirgin donuklaşma
Açıklama: Oklüzal travmanın en tipik klinik muayene bulgularından biri, travmaya maruz kalmayan sağlıklı dişlerde sert ve tiz çıkan perküsyon sesinin, genişlemiş periodontal ligament nedeniyle matlaşması/donuklaşmasıdır. Pürülan eksuda ve çürük plak kaynaklı enfeksiyöz bulgulardır, salt oklüzal travma tablosunda primer olarak görülmezler.

---

### ÇİFT 60 (Benzerlik: 0.70)

**Soru 1 (ID: 74938f85-6a36-48b5-b84d-522adfddd684)**
Soru Kökü: Birleşik (Mikst / Karışık) periodontal cep tanısı konan bir bölgenin anatomik ve patofizyolojik özellikleri değerlendirildiğinde aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (A): Epitelyal ataşmanın dişeti kenarına doğru kuronal yönde migrasyon göstermesi
Açıklama: Birleşik (Mikst) cep, periodontal dokularda yıkımın olduğu (epitelyal ataşmanın apikale yer değiştirdiği) gerçek cep yapısı ile enflamasyona bağlı dişetinin şiştiği (dişeti kenarının kuronale büyüdüğü) ödematöz yalancı cep yapısının birleşimidir. Epitelyal ataşman apikale gider, asla kuronale migrasyon göstermez.

**Soru 2 (ID: b784e9cd-23f8-42d0-8b83-697319ad5889)**
Soru Kökü: Periodontal cep duvarında yıkım olaylarının yapım olaylarından daha baskın olduğu durumda aşağıdaki klinik bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (A): Soluk pembe renk ve sıkı kıvam
Açıklama: Ödematöz cep formunda yıkım olayları baskındır ve hücresel eksuda nedeniyle dişeti mavimtrak kırmızı, yumuşak ve parlak bir görünüm alır. Pembe renkli ve sıkı kıvamlı görünüm, bağ dokusu hücreleri ve kolajen liflerin sentezinin baskın olduğu (yapım olaylarının önde olduğu) fibrotik ceplerin karakteristik özelliğidir. Doku hasarının telafi edilme çabası, yapım ve yıkım dengesini değiştirerek doğrudan marjinal kliniğe yansır.

---

### ÇİFT 61 (Benzerlik: 0.70)

**Soru 1 (ID: 50d55a06-a278-452a-87f8-113c6d8be096)**
Soru Kökü: İltihabın dişetinde meydana getirdiği mikroskobik yapısal değişikliklere göre sınıflandırılan periodontal ceplerin histopatolojik özellikleri hakkında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Fibrotik cep duvarında, inflamasyona bağlı hücresel yıkım olayları fibrozis yapım olaylarından daha baskın olduğu için doku yumuşak kıvamlıdır.
Açıklama: Fibrotik ceplerde yıkım değil, 'yapım (tamir)' olayları inflamasyona üstün gelir. Doku, artmış kollajen ve bağ dokusu hücreleri (fibrozis) nedeniyle yumuşak değil, sıkı ve sert kıvamlıdır; klinik olarak pembe görünür ve yanıltsa da altta hastalık devam etmektedir. Yıkımın baskın olduğu yapı ödematöz ceptir.

**Soru 2 (ID: b784e9cd-23f8-42d0-8b83-697319ad5889)**
Soru Kökü: Periodontal cep duvarında yıkım olaylarının yapım olaylarından daha baskın olduğu durumda aşağıdaki klinik bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (A): Soluk pembe renk ve sıkı kıvam
Açıklama: Ödematöz cep formunda yıkım olayları baskındır ve hücresel eksuda nedeniyle dişeti mavimtrak kırmızı, yumuşak ve parlak bir görünüm alır. Pembe renkli ve sıkı kıvamlı görünüm, bağ dokusu hücreleri ve kolajen liflerin sentezinin baskın olduğu (yapım olaylarının önde olduğu) fibrotik ceplerin karakteristik özelliğidir. Doku hasarının telafi edilme çabası, yapım ve yıkım dengesini değiştirerek doğrudan marjinal kliniğe yansır.

---

### ÇİFT 62 (Benzerlik: 0.70)

**Soru 1 (ID: 52c12f5f-33d0-4d99-a998-0bc6ccc9e8c1)**
Soru Kökü: Elli yaşındaki erkek hastanın radyografik incelemesinde, oklüzal travmaya bağlı olarak periodontal membranın dikey yönde kum saati şeklini aldığı ve bu bölgede mobilite saptandığı görülmüştür. Bu hastanın periodonsiyumunun aşırı oklüzal kuvvetlere karşı 'adaptasyon (adaptif remodelling)' evresinde olduğuna işaret eden en spesifik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Periodontal cep oluşumu olmadan izlenen açısal kemik defekti
Açıklama: Aşırı oklüzal kuvvetler varlığını sürdürdüğünde periodonsiyum adaptasyon evresine girer. Bu evrenin en spesifik bulgusu, patolojik bir derinleşme (periodontal cep) oluşmadan alveol kemiğinde açısal (vertikal) kemik defekti meydana gelmesidir. İltihap yokluğunda, oklüzal travma tek başına periodontal cep oluşturmaz, sadece kemikte adaptif mekanik deformasyonlara neden olur.

**Soru 2 (ID: 8c4b0780-c7e7-4bc2-b8cb-f7180c49aef8)**
Soru Kökü: I. İnterdental septumda vertikal (açısal) kemik kaybı 
II. Lamina durada kalınlaşma veya devamlılığın kaybolması 
III. Periodontal aralıkta genişleme 
IV. Marjinal krette tüm ark boyunca horizontal kemik kaybı 
Yukarıdakilerden hangileri primer oklüzal travmanın radyografik belirtileri arasında yer alır?
Doğru Şık (D): I, II ve III
Açıklama: Primer oklüzal travmada kuvvetin geldiği yöne bağlı olarak periodontal aralık genişler, basınç/gerilim alanlarında lamina dura rezorpsiyonu veya kalınlaşması izlenir ve furkasyon/septum bölgelerinde 'vertikal' kemik defektleri oluşur. Tüm ark boyunca izlenen horizontal kemik kaybı ise genel kronik periodontitisin sonucudur, spesifik oklüzal travma bulgusu değildir.

---

### ÇİFT 63 (Benzerlik: 0.69)

**Soru 1 (ID: 0e8d8630-e2fd-4198-9d09-18c9084b3480)**
Soru Kökü: Periodontal hastalığı bulunan bir hasta, dişetlerindeki kaşınma hissi nedeniyle bölgeyi kürdanla kanattığını ve kanama sonrasında geçici bir süre için olsa da çok rahatladığını ifade etmektedir. Bu rahatlamanın altında yatan kök neden (root-cause) aşağıdakilerden hangisidir?
Doğru Şık (A): Kanamayı takiben dişetindeki stazın boşalması ve şişkinliğin azalması
Açıklama: Dişetini sivri bir araçla kurcalama isteği histamin kaynaklı kaşınmaya bağlıdır. Kurcalama sonucu oluşan kanama, bölgedeki konjeste (staz halindeki) vasküler sıvı yükünü dışarı boşaltarak dişetindeki şişkinliği ve doku içi basıncı azaltır, bu da hastaya geçici bir rahatlama sağlar.

**Soru 2 (ID: 82eab09a-0b00-4f3c-95aa-1aafec617c57)**
Soru Kökü: Kronik inflamasyon sürecindeki dişetlerinde hastalarda sıklıkla kaşınma hissi tarif edilmektedir. Bu duysal reaksiyonun patogenezi değerlendirildiğinde aşağıdakilerden hangisi **söylenemez**?
Doğru Şık (E): Sadece akut nekrotizan ülseratif gingivitis formuna özgü, sınırlı bir bulgudur.
Açıklama: Dişetlerinde kaşınma hissi subgingival diştaşı ve kronik inflamasyon sonucu mast hücrelerinin degranüle olarak histamin salgılamasından kaynaklanır. Bu semptom sadece akut formlara (ANUG) değil, sıklıkla yavaş ilerleyen kronik periyodontitise de eşlik eder.

---

### ÇİFT 64 (Benzerlik: 0.69)

**Soru 1 (ID: 206c78c2-f9f2-4773-80ce-34360eb74b6d)**
Soru Kökü: Nekrotizan Ülseratif Gingivitis (NUG) lezyonlarında mikroorganizmalar canlı dokuya da invaze olmaktadır. Histopatolojik incelemede, bağ dokusunun en derinine inen ve diğer patojenik organizmaların izlenmeyip *sadece* spiroketlerin bulunduğu en alt penetrasyon bölgesi aşağıdakilerden hangisidir?
Doğru Şık (C): Spiroketal infiltrasyon tabakası
Açıklama: NUG lezyonu mikroskobik olarak 4 tabakadan incelenir. Yüzeyden derine doğru sırasıyla; bakteriyel tabaka, nötrofilden zengin tabaka, nekrotik tabaka ve en derinde sağlam canlı dokuya komşu olan spiroketal infiltrasyon tabakası gelir. Spiroketlerin yoğun hareketliliği ve doku invazyon yetenekleri, onların nekrotik alanı aşarak derin dokulara tek başlarına girmelerini sağlar.

**Soru 2 (ID: d9d5b410-4d89-4376-8179-d1970243bad5)**
Soru Kökü: Akut seyirli ve doku nekrozuyla karakterize nekrotizan ülseratif gingivitisin (NUG) mikrobiyal etyolojisinde spesifik olarak baskın olan patojen grubu aşağıdakilerden hangisidir?
Doğru Şık (E): Fusiform basiller ve Spiroketler
Açıklama: NUG etyolojisinde sabit flora esas olarak Treponema türleri (spiroketler) ve fusiform basillerden oluşur, ayrıca P. intermedia da tabloda rol alır. Agresif periodontitisin baskın ajanı A. actinomycetemcomitans veya kronik tablodaki kırmızı kompleks (P. gingivalis) bu tablonun temel başlatici florası değildir. Fusospiroketal kompleks, doku nekrozunun ve tipik klinik bulguların (psödomembran, krater papil) primer sorumlusudur.

---

### ÇİFT 65 (Benzerlik: 0.69)

**Soru 1 (ID: ac15da95-45db-4bfd-8223-0a145ad8ad8a)**
Soru Kökü: 38 yaşında kadın hastanın klinik muayenesinde, periodontal yıkımın sadece belirli dişlerde yoğunlaştığı ve ağızdaki bölgelerin yaklaşık %20'sinde (16 yüzey) cep formasyonu ve klinik ataşman kaybı bulunduğu tespit edilmiştir. Hastalığın yayılım (dağılım) formuna göre doğru tanımlaması aşağıdakilerden hangisidir?
Doğru Şık (A): Lokalize periodontitis
Açıklama: Periodontitis dağılımı etkilenen bölge oranına göre klinik olarak sınıflandırılır. Etkilenen alan ağızdaki bölgelerin %30'undan az ise durum 'lokalize periodontitis', %30'undan fazla ise 'generalize periodontitis' olarak adlandırılır. Olgudaki %20'lik etkilenim direkt lokalize form tanımına uyar.

**Soru 2 (ID: b8603219-576d-44da-a572-cfe79d43c4a6)**
Soru Kökü: 52 yaşında sistemik olarak sağlıklı erkek hastanın klinik muayenesinde, alt sağ birinci molar dişinde 4 mm klinik ataşman kaybı ve horizontal karakterli kemik yıkımı tespit edilmiştir. Hastalığın yıkım şiddeti göz önüne alındığında bu olgu nasıl sınıflandırılmalıdır?
Doğru Şık (B): Orta dereceli periodontitis
Açıklama: Kronik periodontitiste hastalığın şiddeti doğrudan klinik ataşman kaybı milimetresi üzerinden tarif edilir. Ataşman kaybı 1-2 mm ise hafif, 3-4 mm ise orta dereceli, 5 mm ve daha fazla ise şiddetli periodontitis tanısı konulur.

---

### ÇİFT 66 (Benzerlik: 0.69)

**Soru 1 (ID: b01a6c3d-2b1c-4355-a115-0585c28d9d43)**
Soru Kökü: Dentin aşırı duyarlılığı tedavisinde kullanılan ajanlar ve ait oldukları sınıflamalarla ilgili eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Formalin – Antienflamatuar ajan
Açıklama: Formalin bir antienflamatuar ajan değil, gümüş nitrat ve çinko klorür ile birlikte dentin tübüllerini kısmen tıkayan (burnishing) ajanlar grubunda yer alır. İyontoforez flor penetrasyonunu artırdığı için flor grubunda sınıflandırılır. Antienflamatuar ajanlar tabloda bağımsız bir grup olarak belirtilmiştir ancak formalin bu grupta yer almaz.

**Soru 2 (ID: d0366905-3b16-4acd-9f63-906631a6fd8b)**
Soru Kökü: Dentin tübüllerini yüzeysel olarak tıkayan veya nöral iletimi bloke eden ajanlar, farklı kimyasal mekanizmalar üzerinden etki gösterirler. Aşağıdaki duyarlılık giderici kimyasallardan hangisi dentin tedavisinde spesifik bir kalsiyum veya flor bileşiği olarak **değerlendirilmez**?
Doğru Şık (B): Stronsiyum klorid
Açıklama: Stronsiyum klorid, dentin duyarlılığında kullanılan metalik bir tuz olmakla birlikte kalsiyum veya flor bileşikleri ana başlıkları altında sınıflanmaz. Dibazik kalsiyum fosfat ve kalsiyum hidroksit spesifik olarak kalsiyum grubunda; sodyum ve stannöz florür ise flor grubundadır. Sınıflandırmada stronsiyum klorid ve potasyum oksalat ayrı bağımsız moleküllerdir.

---

