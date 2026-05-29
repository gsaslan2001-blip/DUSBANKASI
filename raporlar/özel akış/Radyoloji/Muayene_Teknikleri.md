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

### ÇİFT 1 (Benzerlik: 0.80)

**Soru 1 (ID: 81598fd7-f7bb-4b75-aad7-d83f9555f9fc)**
Soru Kökü: Alt çene premolar bölgesinde dişeti üzerinde 4 mm çapında, mavimsi-mor renkli asemptomatik bir makül saptanmıştır. Cam lam ile yapılan diaskopi testinde lezyonun renginde solma (beyazlaşma) olmadığı görülmüştür. Bu klinik bulguya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Amalgam dövmesi
Açıklama: Amalgam dövmeleri (veya peteşi, hematom gibi lezyonlar) doku içine yerleşmiş kütleler veya damar dışına çıkmış kan olduğu için diaskopik basınç altında beyazlaşmaz (solgunlaşmaz). Hemanjiyom, varis ve telanjiektazi gibi damar içi kan kaynaklı lezyonlar basınçla içlerindeki kanın boşalması sonucu renk kaybeder. Bu test vasküler ve pigmente/ekstravaze lezyonları ayırmak için temel bir basamaktır.

**Soru 2 (ID: e6d0a2bd-ea9b-4f5f-9dd6-f77a93b1dd92)**
Soru Kökü: Kırk beş yaşında erkek hasta, alt dudağında uzun süredir var olan mavimsi-mor renkli bir lezyon şikayetiyle başvuruyor. Yapılan diaskopi muayenesinde şeffaf akrilik ile lezyona basınç uygulandığında lezyonun renginde herhangi bir solgunlaşma (beyazlaşma) izlenmiyor. Bu klinik tabloya göre, aşağıdaki tanılardan hangisi en olasıdır?
Doğru Şık (C): Mavi nevüs
Açıklama: Diaskopi muayenesinde basınçla solgunlaşmayan bir lezyon, damar içi kanlanmadan ziyade doku içi pigmentasyon veya damar dışına çıkmış (ekstravaze) kanı gösterir. Mavi nevüs, amalgam dövmesi ve hematomlar diaskopide solgunlaşmazken; hemanjiyom, telenjiektazi ve varis gibi vasküler lümen içi lezyonlar basınç altında solgunlaşır. Bu ayrım, vasküler anomaliler ile melanotik veya travmatik lezyonların klinik ayırıcı tanısında altın standarttır.

---

### ÇİFT 2 (Benzerlik: 0.79)

**Soru 1 (ID: 79a8ba5c-7735-4f5e-977a-75188a3daa3c)**
Soru Kökü: Çiğneme fonksiyonunun sağlıklı ve koordine bir şekilde gerçekleşebilmesi için gereken fizyolojik ve anatomik ön koşullardan biri aşağıdakilerden hangisi **değildir**?
Doğru Şık (B): Tırnak açısının (Lovibond) normal olması
Açıklama: Çiğneme fonksiyonunun komponentleri arasında tükürük sekresyonu, çiğneme kası koordinasyonu, TMJ sağlığı, oklüzyon ve sağlıklı mukoza yer alır. Lovibond açısı, el tırnak yatağının cilt ile yaptığı açıdır ve solunum/kardiyovasküler sistem bozukluklarında (çomak parmak) bozulur; lokal çiğneme mekaniğiyle bir ilgisi yoktur.

**Soru 2 (ID: c8f21b59-9aa3-46b2-8f5e-e9740f1ca496)**
Soru Kökü: Ağız boşluğunun temel fonksiyonlarından olan çiğneme (mastikasyon) eyleminin sistemik bir uyum içinde gerçekleşebilmesi için çeşitli doku şartlarının sağlanması gerekir. Aşağıdakilerden hangisi bu eylemin sorunsuz işleyişi için belirtilen koşullardan biri **değildir**?
Doğru Şık (C): Tüm dişlerin ideal sentrik ilişkide ve tam kilitlenme durumunda temas etmesi
Açıklama: Çiğneme işlemi için belli miktarda tükürük, sağlıklı periodonsiyum, hastalıksız eklem, kas koordinasyonu ve genel bir "yeterli oklüzyon" şarttır; ancak bütün dişlerin ideal sentrik ilişkide ve tam temasta olması zorunlu bir kriter değildir. Hastalar suboptimal oklüzyon veya eksik diş profiliyle de yeterli düzeyde çiğnemeyi sürdürebilirler. Fonksiyonel yeterlilik, morfolojik mükemmellikten bağımsız bir kavramdır.

---

### ÇİFT 3 (Benzerlik: 0.78)

**Soru 1 (ID: 106ad37a-67fe-41c3-8b3f-6b640554a712)**
Soru Kökü: Klinik muayene sırasında palpe edilen bir nodülün kıvamı 'kauçuksu (rubbery)' olarak tanımlanmıştır. Bu terim ile kastedilen fiziksel his aşağıdakilerden hangisine en yakın benzetme ile açıklanır?
Doğru Şık (B): Sakız silgisine benzer direnç gösteren yapı
Açıklama: Nodül palpasyonunda 'kauçuksu (rubbery)' kıvam, tıpkı bir sakız silgisini sıkıştırırken hissedilen orta dereceli sertlikte ve geri esneyen direnci ifade eder. 'Yumuşak' kıvam esneklik olmadan basıktırılabilir yapıyı, 'sert/katılaşmış' kıvam hiç sıkıştırılamayan yapıyı, 'süngerimsi' ise yumuşak ama geri esneyen yapıyı tanımlar. Kauçuksu kıvam klasik olarak lenfomalar veya bazı benign mikst tümörlerde görülür.

**Soru 2 (ID: 78cfe2f7-d0f7-4c94-8023-6d62a28c749f)**
Soru Kökü: Bukkal mukozadaki lokalize kitleye bidijital palpasyon uygulanıyor. Nodül dokusunun, belirgin bir direnç veya sertlik göstermeden, kolaylıkla ve tamamen düzleştirilip sıkıştırılabildiği hissediliyor. Muayene formunda bu kitlenin kıvamı için kullanılacak en doğru tıbbi terim aşağıdakilerden hangisidir?
Doğru Şık (D): Yumuşak
Açıklama: Kitlenin hiçbir esneklik veya direnç göstermeden tamamen sıkıştırılabilir (düzleşebilir) olması palpasyon terminolojisinde "yumuşak" olarak tanımlanır. "Süngerimsi" kıvam bir miktar esneklikle ezilmeyi, "kauçuksu" kıvam ise sakız silgisi direnci gösteren yapıları ifade eder. Doku terminolojisi tümör hücresel yoğunluğunun kaba bir öngörüsünü sağlar.

---

### ÇİFT 4 (Benzerlik: 0.73)

**Soru 1 (ID: 2fa6bf24-094d-40da-bf3b-3f51904160d1)**
Soru Kökü: Transillüminasyon testi ile bir nodülün saydamlığını değerlendirirken, ışık geçişini bloke eden (ışığı iletmeyen) biyolojik içerik aşağıdakilerden hangisidir?
Doğru Şık (B): Püy
Açıklama: Transillüminasyon, parlak bir nokta ışık kaynağının dokuya tutulmasıyla yapılır. Berrak sıvılar (seröz sıvı, tükürük, saf kist sıvısı) ışığı geçirerek nodülün parlak/saydam görünmesini sağlarken; kan, irin (püy) ve katı tümöral dokular ışığı bloke ederek karanlık bir silüet oluşturur. Bu test, sıvı dolu kistik yapıları solid kitlelerden veya abselerden ayırmada kullanılır.

**Soru 2 (ID: c9df65ab-6405-4674-b13f-2054105a8d39)**
Soru Kökü: Boyun lateralinde saptanan yumuşak kıvamlı bir nodülün karanlık ortamda fiber optik ışık kaynağı ile transillüminasyona tabi tutulması sonucunda, dokunun ışığı güçlü bir şekilde ilettiği (parladığı) görülmüştür. Bu bulgu, lezyonun yapısı hakkında aşağıdakilerden hangisini doğrular?
Doğru Şık (B): Berrak kistik bir sıvı ile dolu olduğunu
Açıklama: Transillüminasyon (ışık geçirgenliği) muayenesinde sadece berrak sıvılar ışığı iletir; bu nedenle pozitif bir bulgu lezyonun berrak sıvı içeren benign bir kist olduğunu doğrular. Kan, irin (pürülan eksüda) ve katı/solid dokular ışık geçirmez ve optik bariyer oluştururlar. Bu yöntem boyun kitlelerinin non-invaziv ön ayrımında vazgeçilmezdir.

---

### ÇİFT 5 (Benzerlik: 0.73)

**Soru 1 (ID: b65804d3-b3ac-4486-851b-03fabdded939)**
Soru Kökü: Otuz beş yaşında kadın hasta, sağ üst santral dişinin apikal bölgesinde izlenen kronik bir fistül yolu ile kliniğe başvuruyor. Fistülün kaynağını ve ilgili dişi kesin olarak lokalize etmek için sondlama (probing) işleminde aşağıdaki materyallerden hangisinin kullanılması endikedir?
Doğru Şık (E): Gutta perka ucu
Açıklama: Fistül yollarının kökenini belirlemek ve radyografik izlenebilirliği sağlamak için fistül traktı boyunca bir gutta perka ucu yerleştirilerek röntgen alınması temel muayene kuralıdır. Periodontal sond sadece sulkus derinliği için kullanılırken, gümüş konlar güncel pratikte kullanılmaz ve fistül yolunu travmatize edebilir. Gutta perka, esnekliği ve radyoopasitesi sayesinde bu işlem için en uygun materyaldir.

**Soru 2 (ID: e5a71d03-5228-4328-ad02-5739435f5fb9)**
Soru Kökü: Ağız içi muayenesinde alt birinci büyük azı dişinin bukkal mukozasında aktif pürülan akıntısı olan bir fistül ağzı saptanmıştır. Bu fistül yolunun apikal anatomik kökenini kesin ve üç boyutlu olarak belirlemek için yapılması gereken en doğru uygulama aşağıdakilerden hangisidir?
Doğru Şık (D): Fistül yolu içerisine radyopak güta perka ucu yerleştirerek radyografi almak
Açıklama: Fistülün köken aldığı enfekte kök ucunu anatomik olarak tam tespit etmek için, yumuşak doku trasesini takip edebilen ve röntgende iz bırakan güta perka uçları (gutta percha) fistül içine yerleştirilir ve radyografi alınır. Perküsyon sadece ağrılı dişi gösterir, transillüminasyon ise yumuşak doku içindeki yolu haritalayamaz. Bu kombinasyonel teknik gereksiz veya yanlış diş tedavisini önler.

---

### ÇİFT 6 (Benzerlik: 0.73)

**Soru 1 (ID: 59e21d4f-f401-4729-bd8b-2041a240ff7c)**
Soru Kökü: Enflamasyonlu bir dokunun sıcaklık değişimini palpasyonla değerlendirirken, muayene eden kişinin parmaklarının dorsal (ekstansör) yüzeyini kullanmasının birincil anatomik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Derinin ince ve iyi innerve edilmiş olması
Açıklama: Sıcaklık değişiklikleri en iyi şekilde parmakların dorsal veya ekstansör yüzeyleri kullanılarak değerlendirilir çünkü buradaki deri çok incedir ve termal uyaranlara karşı zengin bir innervasyona sahiptir. Parmak uçlarındaki palmar yüzey doku tespiti için idealken, kalın stratum corneum tabakası hassas ısı değişimlerini maskeleyebilir. Bu nedenle sıcaklık ölçümünde ekstansör yüzey fizyolojik bir zorunluluktur.

**Soru 2 (ID: 5b313a74-66a1-4081-9031-76b046add173)**
Soru Kökü: İnflamatuar bir lezyonun muayenesinde lokal ısı artışının değerlendirilmesi planlanmaktadır. Bu işlem için palpasyonun hangi anatomik yüzeyle yapılması en doğru sonucu verir?
Doğru Şık (B): Parmakların dorsal veya ekstansör yüzeylerini kullanarak
Açıklama: Sıcaklık değişiklikleri en iyi şekilde parmakların dorsal veya ekstansör yüzeyleri kullanılarak değerlendirilir çünkü buradaki deri ince ve iyi innerve edilmiştir. Parmak uçları doku kıvamını belirlemede üstünken, ısı hassasiyeti için dorsal yüzeyin ince derisi gereklidir. Vasküler veya iltihaplı lezyonların artmış kan akışı bu yöntemle saptanır.

---

### ÇİFT 7 (Benzerlik: 0.72)

**Soru 1 (ID: 38aa1ff2-e484-4a3e-887a-5bc78e020bc8)**
Soru Kökü: Kırk yaşında erkek hasta sert damaktaki ağrısız, derin ülserasyon şikayetiyle başvuruyor. Muayenede ülser tabanının güderi derisine benzer pul pul bir yara kabuğu ile örtülü olduğu ve kenarlarının tam kat nekrotik görünümde olduğu saptanıyor. Bu klinik özellikler öncelikle aşağıdaki hastalıkların hangisiyle ilişkilidir?
Doğru Şık (A): Sifiliz
Açıklama: Sifilitik ülserlerin tabanında güderi derisine benzeyen spesifik bir yara kabuğu (pul pul olma) bulunur ve epitelin tüm kalınlığını içeren delikli bir nekrotik sınıra sahiptirler. Tüberküloz ülserlerinde ise mavimsi granülasyon dokusu ve altı oyulmuş (undermined) kenar görülür. Ülser taban mimarisi spesifik enfeksiyonun teşhisi için doğrudan patognomonik veri sağlar.

**Soru 2 (ID: 4e4c3a96-6494-48db-97e7-bbcb5c852800)**
Soru Kökü: Ağız mukozasında kronik seyirli bir ülseri olan hastanın muayenesinde; ülser tabanında piyojenik granülomaya benzeyen mavimsi bir granülasyon dokusu ve kenarlarında altı oyulmuş (undermined) bir sınır izlenmektedir. Bu lezyonun etiyolojisinde aşağıdaki patolojilerden hangisi en olasıdır?
Doğru Şık (D): Tüberküloz enfeksiyonu
Açıklama: Tüberküloz ve histoplazmoz gibi granülomatöz ülserlerde altı oyulmuş (undermined) kenarlar ve tabanda mavimsi granülasyon dokusu (piyojenik granülom benzeri) spesifik klinik bulgulardır. Bazal hücreli karsinom sığ ve kıvrımlı kenarlara sahipken, sifiliz güderi benzeri bir taban sunar. Kenarın altı oyuk morfolojisi mikroorganizmanın doku nekrozu yaratma paterniyle ilişkilidir.

---

### ÇİFT 8 (Benzerlik: 0.71)

**Soru 1 (ID: 81598fd7-f7bb-4b75-aad7-d83f9555f9fc)**
Soru Kökü: Alt çene premolar bölgesinde dişeti üzerinde 4 mm çapında, mavimsi-mor renkli asemptomatik bir makül saptanmıştır. Cam lam ile yapılan diaskopi testinde lezyonun renginde solma (beyazlaşma) olmadığı görülmüştür. Bu klinik bulguya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Amalgam dövmesi
Açıklama: Amalgam dövmeleri (veya peteşi, hematom gibi lezyonlar) doku içine yerleşmiş kütleler veya damar dışına çıkmış kan olduğu için diaskopik basınç altında beyazlaşmaz (solgunlaşmaz). Hemanjiyom, varis ve telanjiektazi gibi damar içi kan kaynaklı lezyonlar basınçla içlerindeki kanın boşalması sonucu renk kaybeder. Bu test vasküler ve pigmente/ekstravaze lezyonları ayırmak için temel bir basamaktır.

**Soru 2 (ID: e056a941-4789-42d7-94cc-72c57cc4dad8)**
Soru Kökü: Ağız mukozasında saptanan lezyonların doğasını belirlemek için diaskopi (cam lam kompresyonu) yapılmaktadır.

I. Eritroplaki
II. Amalgam dövmesi
III. Hemanjiyom
IV. Ekimoz

Yukarıdaki lezyonların hangilerinde diaskopik basınç uygulandığında lezyonun renginde belirgin bir solma (beyazlaşma) gözlemlenir?
Doğru Şık (B): I ve III
Açıklama: Eritroplaki ve hemanjiyom gibi damar içi kanlanmanın artışına bağlı vasküler lezyonlar, uygulanan cam lam basıncıyla içlerindeki kanı çevreye ittikleri için solgunlaşır (beyazlaşır). Ancak amalgam dövmesi bir yabancı cisim, ekimoz/peteşi ise damar dışına sızmış kan (ekstravazasyon) olduğu için basınçla renk değiştirmezler. Bu teknik damar içi-damar dışı patoloji ayırımında altın standarttır.

---

### ÇİFT 9 (Benzerlik: 0.71)

**Soru 1 (ID: 4789a988-7661-47f9-8d18-229f874d22cb)**
Soru Kökü: Altmış beş yaşında aşırı kilolu bir erkek hastanın yüz ve boyun bölgesindeki genişlemenin ödem kaynaklı mı yoksa yağ birikimi mi olduğunu belirlemek için palpasyon yapılıyor. Parmağın bölgeye bastırılıp çekilmesinden sonra dokuda çukur şeklinde izin kaldığı izleniyor. Bu klinik tablo aşağıdakilerden hangisinin göstergesidir?
Doğru Şık (B): Gode bırakan ödem varlığı
Açıklama: Gode bırakan (çukurlaşan) ödem, dokuya parmakla bastırıldığında hücreler arası sıvının yer değiştirmesi ve basınç kalktıktan sonra çukurluğun dokuda korunması durumudur. Yağ dokusu ise basıldığında esnekliğinden dolayı hemen eski halini alır (geri teper). Bu test, obezite ile sıvı tutulumuna bağlı lokal/sistemik ödem ayrımında temel bir yöntemdir.

**Soru 2 (ID: 633fb8c0-0eca-46af-b1aa-86c57c2b0090)**
Soru Kökü: Elli beş yaşında, kilolu bir hastanın alt ekstremite muayenesinde şişlik bölgesine parmakla basıldığında, parmak çekildikten sonra dokuda oluşturulan çukurluğun bir süre kaybolmadığı izlenmiştir. Bu klinik bulgu için kullanılan tanımlama aşağıdakilerden hangisidir?
Doğru Şık (B): Gode bırakan ödem
Açıklama: Büyüklüğün obeziteye (yağ dokusu) mi yoksa sistemik sıvı tutulumuna mı bağlı olduğunu anlamak için dokuya bastırılır. Yağ dokusu esnekliği nedeniyle anında geri teperken, interstisyel dokudaki patolojik sıvı birikimi (ödem) basınç kalktıktan sonra çukurluğunu korur. Bu spesifik fenomene 'gode bırakan ödem' (pitting edema) denir ve kalp, karaciğer veya böbrek yetmezliği göstergesi olabilir.

---

### ÇİFT 10 (Benzerlik: 0.71)

**Soru 1 (ID: 08c5db0f-0cf6-4328-afb8-b429d05fd5b4)**
Soru Kökü: Boyun bölgesinde palpe edilen atımlı (pulsatil) bir nodülden, kalp atışıyla eşzamanlı sistolik kan basıncına karşılık gelen bir ses duyulmaktadır. Vasküler nodüllerin yaydığı bu patolojik sese verilen isim aşağıdakilerden hangisidir?
Doğru Şık (C): Üfürüm
Açıklama: Üfürüm, sistolik kan basıncına karşılık gelen ve vasküler nodüllerden oskültasyonla duyulabilen spesifik kardiyovasküler sestir. Fluktuasyon içi sıvı dolu kistlerin dalgalanmasıdır, krepitasyon ise gaz veya kemik sürtünme sesidir. Üfürüm, damar içi kan akımındaki türbülansın stetoskopla algılanan akustik yansımasıdır.

**Soru 2 (ID: 7f05ad0f-25e5-4663-9179-3ff616d40907)**
Soru Kökü: Fiziksel muayene sırasında büyük ve dalgalı (fluktuasyon veren) bir nodülde, bir taraftan vurulduğunda karşı taraftan hissedilen perküsyon dalgalarını tanımlamak için kullanılan spesifik terim aşağıdakilerden hangisidir?
Doğru Şık (D): Sıvı titreşimi
Açıklama: Dalgalı ve içi sıvı dolu büyük bir nodüle vurulduğunda (perküsyon uygulandığında), oluşan basınç dalgalarının diğer taraftan palpasyon parmaklarıyla hissedilmesine 'sıvı titreşimi' (fluid thrill) denir. Üfürüm vasküler lezyonlardaki sistolik sesi, krepitasyon gaz/kemik sürtünmesini, gode bırakma ise ödem dokusunun çökmesini ifade eder.

---

### ÇİFT 11 (Benzerlik: 0.71)

**Soru 1 (ID: 1b45535c-6a0d-4ea9-8ddb-dc90ce4ae2b2)**
Soru Kökü: Diş hekimi, travma öyküsü olmayan bir üst kesici dişin palpasyonunda, dişin kendi soketi içerisinde sistolik kalp atımına eşzamanlı olarak titreştiğini (pulsatilite) fark etmiştir. Herhangi bir cerrahi müdahale öncesinde bu klinik bulgu öncelikle hangi teşhisi akla getirmelidir?
Doğru Şık (A): Santral hemanjiyom
Açıklama: Dişin yuvası içinde atımlı (pulsatil) şekilde titreşmesi, kök ucunda lokalize olan santral hemanjiyom veya arteriyovenöz anevrizma gibi yüksek hacimli vasküler anomalilerin hemodinamik basıncının dişe yansımasıdır. Bu durum dişe yapılan müdahalelerde (çekim) ölümcül, durdurulamayan masif kanama riski taşır. Enflamatuar lezyonlar ağrı yapsa da pulsatil fiziksel titreşim oluşturmazlar.

**Soru 2 (ID: 2cb51258-5b39-4d84-9c01-381334d0bf42)**
Soru Kökü: Mandibula posterior bölgede radyolüsensisi olan bir hastada, ilgili dişe ayna sapıyla hafifçe bastırıldığında (kompresyon), dişin yuvasında sistolik ritimle titreştiği ve dışarı itildiği tespit edilmiştir. Bu fonksiyonel muayene bulgusu aşağıdaki terimlerden hangisiyle ifade edilir?
Doğru Şık (C): Pulsatilite
Açıklama: Santral hemanjiyom veya arteriyovenöz anevrizma gibi yüksek akımlı vasküler lezyonlar, üstlerindeki bir dişin alveol yuvasında kalbin sistolik atımıyla uyumlu olarak titreşmesine neden olabilir. Hekimin dişi palpe ederken hissettiği bu nabız benzeri fonksiyonel harekete 'pulsatilite' adı verilir. Üfürüm işitsel bir bulgudur, pulsatilite ise dokunsal (palpasyon) bir olaydır.

---

### ÇİFT 12 (Benzerlik: 0.71)

**Soru 1 (ID: 2c7c9ceb-5c98-4b60-94a8-13c1122ccad8)**
Soru Kökü: Bukkal mukozada (yanak) lokalize, mercimek büyüklüğündeki bir fibröz nodülün kıvam ve sınırlarını değerlendirmek için tercih edilmesi gereken en uygun palpasyon tekniği aşağıdakilerden hangisidir?
Doğru Şık (A): Başparmak ve işaret parmağı ile yapılan bidijital palpasyon
Açıklama: Dudak, bukkal mukoza (yanak) veya kulak heliksi gibi ince ve çift yüzeyli anatomik alanlardaki nodüller, bir elin baş ve işaret parmakları arasında sıkıştırılarak (bidijital palpasyon) en iyi şekilde değerlendirilir. Bimanuel palpasyon ağız tabanı gibi iki ayrı elin koordinasyonunu gerektiren bölgeler içindir. Bidijital yöntem, mukoza içi lezyonun derinlik ve mobilite haritasını net çıkarır.

**Soru 2 (ID: aed114e9-8115-4b6c-91c5-4d899bdaef40)**
Soru Kökü: Ağız tabanında şişlik şikayetiyle başvuran hastada submandibular tükürük bezi muayene edilecektir. Bu anatomik yapının klinik derinliğini belirlemek için en ideal palpasyon tekniği aşağıdakilerden hangisidir?
Doğru Şık (C): Bir elin işaret parmağı ağız tabanında, diğer elin parmakları ekstraoral deride bimanuel palpasyon
Açıklama: Submandibular bez gibi hem intraoral hem de ekstraoral erişimi olan derin yapıların manipülasyonunda bimanuel palpasyon kullanılır; bu teknikte bir elin parmağı ağız tabanındayken diğer el ekstraoral deriye bastırır. Bidijital palpasyon ise dudak gibi tek bir yapının iki parmak arasında sıkıştırılmasıdır ve submandibular bez için yetersiz kalır. Bimanuel yöntem yapının üç boyutlu derinliğini ortaya çıkarır.

---

### ÇİFT 13 (Benzerlik: 0.70)

**Soru 1 (ID: 4e4c3a96-6494-48db-97e7-bbcb5c852800)**
Soru Kökü: Ağız mukozasında kronik seyirli bir ülseri olan hastanın muayenesinde; ülser tabanında piyojenik granülomaya benzeyen mavimsi bir granülasyon dokusu ve kenarlarında altı oyulmuş (undermined) bir sınır izlenmektedir. Bu lezyonun etiyolojisinde aşağıdaki patolojilerden hangisi en olasıdır?
Doğru Şık (D): Tüberküloz enfeksiyonu
Açıklama: Tüberküloz ve histoplazmoz gibi granülomatöz ülserlerde altı oyulmuş (undermined) kenarlar ve tabanda mavimsi granülasyon dokusu (piyojenik granülom benzeri) spesifik klinik bulgulardır. Bazal hücreli karsinom sığ ve kıvrımlı kenarlara sahipken, sifiliz güderi benzeri bir taban sunar. Kenarın altı oyuk morfolojisi mikroorganizmanın doku nekrozu yaratma paterniyle ilişkilidir.

**Soru 2 (ID: c1762864-b17f-4383-bba9-f36bd038bfcc)**
Soru Kökü: Ağız içi ülserlerinin klinik teşhisinde kenar morfolojisinin incelenmesi etiyolojiyi aydınlatır. Aşağıdaki ülser etiyolojisi ve patognomonik sınır/taban eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (C): Bazal hücreli karsinom - Düz ve eğimli yumuşak sınır
Açıklama: Bazal hücreli karsinomların ülserleri sığ derinlikte olmakla birlikte, kanser dokusunun karakteri gereği sertleşmiş ve kıvrımlı (rolled) bir sınır özelliği gösterir. Düz ve eğimli yumuşak sınırlar epitelin onarıma geçtiği, iyileşmekte olan benign ülserlerin karakteristik özelliğidir. Ülser morfolojisi destrüktif ajanın doğası hakkında doğrudan mikroskobik projeksiyon sunar.

---

### ÇİFT 14 (Benzerlik: 0.70)

**Soru 1 (ID: 05744612-c334-41de-a6d8-9dad3bf214a0)**
Soru Kökü: Vital bulguların muayenesi sırasında, hastada tespit edilen hipotermi (vücut sıcaklığında patolojik azalma) tablosu en olası olarak aşağıdaki hipometabolik durumlardan hangisiyle ilişkilendirilir?
Doğru Şık (B): Miksödem
Açıklama: Sıcaklıkta artış (hipertermi) enfeksiyonlarda veya hipertiroidizm gibi hipermetabolik sendromlarda görülürken, sıcaklıkta azalma (hipotermi) şiddetli hipotiroidi tablosu olan miksödem gibi hipometabolik durumlara spesifiktir. Miksödem komasına giren hastalarda bazal metabolizma hızı dramatik şekilde düştüğünden vücut ısısı korunamamaktadır.

**Soru 2 (ID: a0231a9c-b544-4136-b534-c27899252b03)**
Soru Kökü: Kırk beş yaşında, aşırı halsizlik ve yüzde şişkinlik şikayetiyle başvuran hastanın vital bulgularında vücut sıcaklığının normalin belirgin altında (hipotermi) olduğu ölçülmüştür. Yüzdeki ödemin gode bırakmayan karakterde olduğu saptanmıştır. Bu klinik bulgular öncelikle aşağıdaki hastalıklardan hangisiyle ilişkilidir?
Doğru Şık (E): Miksödem
Açıklama: Miksödem (hipotiroidizm tablosu), hipometabolik bir durumdur ve vücut ısısının düşmesiyle (hipotermi) ile ilişkilidir; ayrıca ciltte biriken mukopolisakkaritler gode bırakmayan ödeme yol açar. Enfeksiyonlar veya hipertiroidizm ise hipermetabolik tablolardır ve sistemik ateşi yükseltirler (hipertermi). Vital bulgulardaki bu tersine dönüş doğrudan endokrinolojik kaynağı işaret eder.

---

### ÇİFT 15 (Benzerlik: 0.70)

**Soru 1 (ID: 4c268f60-bba9-4f2a-a1cc-4fc5a2e0f54b)**
Soru Kökü: Fiziksel muayene sırasında dinleme (oskültasyon) yöntemi kullanıldığında, nodül üzerinde 'üfürüm' olarak adlandırılan sesin saptanması, o lezyonun yapısal olarak hangi kategoride yer aldığını kanıtlar?
Doğru Şık (D): Vasküler
Açıklama: Üfürüm, sistolik kan basıncına karşılık gelen ve damar içindeki türbülanslı kan akışından kaynaklanan spesifik bir sestir. Bu sesin stetoskopla duyulması veya palpasyonla titreşim olarak hissedilmesi, lezyonun kistik veya katı bir tümörden ziyade anevrizma veya büyük bir hemanjiyom gibi yüksek debili bir 'vasküler' lezyon olduğunu doğrular.

**Soru 2 (ID: 7f05ad0f-25e5-4663-9179-3ff616d40907)**
Soru Kökü: Fiziksel muayene sırasında büyük ve dalgalı (fluktuasyon veren) bir nodülde, bir taraftan vurulduğunda karşı taraftan hissedilen perküsyon dalgalarını tanımlamak için kullanılan spesifik terim aşağıdakilerden hangisidir?
Doğru Şık (D): Sıvı titreşimi
Açıklama: Dalgalı ve içi sıvı dolu büyük bir nodüle vurulduğunda (perküsyon uygulandığında), oluşan basınç dalgalarının diğer taraftan palpasyon parmaklarıyla hissedilmesine 'sıvı titreşimi' (fluid thrill) denir. Üfürüm vasküler lezyonlardaki sistolik sesi, krepitasyon gaz/kemik sürtünmesini, gode bırakma ise ödem dokusunun çökmesini ifade eder.

---

