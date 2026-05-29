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

### ÇİFT 1 (Benzerlik: 0.88)

**Soru 1 (ID: eb7401aa-24a4-49f5-9fba-6cde046855a8)**
Soru Kökü: Paratiroid bezinin histolojik yapısında puberteden sonra sayısı artan, sitoplazmasında bol miktarda mitokondri içerdiği için asidofilik boyanan hücreler aşağıdakilerden hangisidir?
Doğru Şık (D): Oksifilik hücreler
Açıklama: Oksifil hücreler, paratiroid bezinde ergenlikle birlikte belirginleşen, mitokondriyal yoğunlukları nedeniyle histolojik preparatlarda eozinofilik (asidofilik) boyanan hücrelerdir. Asıl hormon sekresyonu şef hücreler tarafından yapılsa da, oksifil hücrelerin gerektiğinde şef hücrelere diferansiye olarak aktivite gösterebildiği bilinmektedir.

**Soru 2 (ID: efb9480f-3d95-4e32-bf5d-33d10824bc97)**
Soru Kökü: Paratiroid bezinin histolojik kesitlerinde, puberteden sonra sayıları belirgin olarak artan, sitoplazması bol miktarda mitokondri içerdiği için hematoksilen-eozin (H&E) boyamasında asidofilik (pembe-kırmızı) boyanan hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (D): Oksifilik hücre
Açıklama: Oksifilik hücreler, paratiroid bezinde bulunan ve özellikle yaşla (puberte sonrası) sayısı artan, mitokondriden zengin oldukları için asidofilik boyanan hücrelerdir. İşlevleri esas hücrelere göre daha geri plandadır ancak gerektiğinde esas hücrelere diferansiye olma potansiyeli taşırlar. Pitusit veya foliküler hücreler paratiroid bezinin stromasında yer almaz.

---

### ÇİFT 2 (Benzerlik: 0.88)

**Soru 1 (ID: a7fd787d-439b-43e5-aa02-d386df5579eb)**
Soru Kökü: Tiroid dışı dokularda, öncü prohormon olan T4'ün dış halkasından bir iyot atomunu ayırarak onu biyolojik etkinliği en yüksek form olan aktif T3 molekülüne dönüştüren spesifik enzim aşağıdakilerden hangisidir?
Doğru Şık (C): 5'-deiyodinaz
Açıklama: Dolaşımdan hücre içine giren T4, periferik dokularda (özellikle karaciğer ve kaslarda) 5'-deiyodinaz (Tip 1 ve Tip 2) enzimi kullanılarak aktif T3'e çevrilir. Bu reaksiyonda T4'ün dış halkasındaki (5' pozisyonundaki) iyot molekülü ayrılır. 5-deiyodinaz (Tip 3 deiyodinaz) ise iç halkadaki iyodu ayırarak T4'ü inaktif form olan rT3'e çeviren enzimdir.

**Soru 2 (ID: ed3d83c7-52a0-4cee-97b5-3ccec48ec0d3)**
Soru Kökü: Tiroid bezinden dolaşıma en yüksek oranda T4 (tiroksin) salınmasına rağmen, dokularda hücresel mekanizmayı harekete geçiren esas biyoaktif molekül T3'tür. Karaciğer, böbrek ve kas gibi periferik dokularda, inaktif prohormon olan T4'ü dış halkasından bir iyot kopararak aktif T3'e dönüştüren enzim aşağıdakilerden hangisidir?
Doğru Şık (C): 5'-deiyodinaz (D1 ve D2)
Açıklama: Periferik dokularda, T4'ün %80'i deiyodinaz enzimleri tarafından T3 veya reverse-T3'e çevrilir; T4'ü fizyolojik olarak en aktif olan T3'e dönüştüren enzim 5'-deiyodinazdır. 5-deiyodinaz enzimi ise T4'ün iç halkasından iyot kopararak metabolik olarak inaktif olan reverse-T3 (rT3) oluşumuna yol açar. Bu mekanizma, organizmanın metabolizma hızını doku düzeyinde ayarlamasını sağlayan önemli bir regülatördür.

---

### ÇİFT 3 (Benzerlik: 0.88)

**Soru 1 (ID: 54b83455-f530-4db6-90f1-f0c8f0637f73)**
Soru Kökü: Antidiüretik hormonun (ADH) distal tübül ve toplayıcı kanallarda su geri emilimini artırarak idrarı konsantre etmesini sağlayan reseptör alt tipi ve kullandığı ikincil haberci sistemi aşağıdakilerden hangisidir?
Doğru Şık (E): V2 reseptörü - cAMP artışı
Açıklama: ADH'nın böbreklerde su tutucu etkisi, tübül hücrelerinin bazolateral membranındaki V2 reseptörlerinin uyarılması ve Gs proteini üzerinden cAMP düzeylerinin artmasıyla gerçekleşir. Artan cAMP, Aquaporin-2 su kanallarının apikal membrana yerleşmesini sağlayarak su emilimini başlatır. V1A reseptörleri ise damar düz kasında bulunur ve IP3/Ca++ üzerinden vazokonstriksiyon yapar.

**Soru 2 (ID: bf610fc0-6f08-4e31-9995-177a64a18aff)**
Soru Kökü: Antidiüretik hormon (ADH), kan osmolalitesi arttığında salgılanarak böbrekten su emilimini kontrol eder. ADH'nin distal tübül ve toplayıcı kanal apikal membranlarına akuaporin-2 (su kanalı) yerleştirilmesini sağlayan spesifik reseptör alt tipi ve bu reseptörün kullandığı ikincil haberci molekül aşağıdakilerden hangisidir?
Doğru Şık (C): V2 reseptörü / Siklik AMP (cAMP)
Açıklama: ADH, kan damarlarındaki vazokonstriktör etkisini V1 reseptörleri ve IP3-Kalsiyum yolağı ile sağlarken; böbrekteki su geri emilimini (antidiüretik etki) distal tübül basolaterolünde yerleşik V2 reseptörlerine bağlanarak gösterir. V2 reseptörü, Gs proteini üzerinden adenilat siklazı uyarır ve hücre içi cAMP seviyesini yükselterek akuaporin-2 kanallarının lümene eksprese olmasını sağlar.

---

### ÇİFT 4 (Benzerlik: 0.88)

**Soru 1 (ID: 8c1507ca-adca-41d4-af12-f2f864e8a45d)**
Soru Kökü: Bir aylık erkek bebek, uzamış fizyolojik sarılık, kaba sesle ağlama, emme güçlüğü ve giderek belirginleşen göbek fıtığı şikayetleriyle çocuk polikliniğine getiriliyor. Yapılan tiroid fonksiyon testlerinde konjenital hipotiroidi saptanıyor. Bu klinik tablonun (kretenizm) yenidoğan dönemindeki en sık görülen etyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Tiroid bezi disgenezisi
Açıklama: Yenidoğanda konjenital hipotiroidinin (kretenizm) en sık karşılaşılan yapısal sebebi, bezin embriyolojik gelişim basamaklarındaki hata olan tiroid disgenezisidir. Disgenezis sonucu hormon eksikliği uzamış sarılık, göbek fıtığı, kaba saç ve zeka geriliği riski ile seyreder. Enzim defektleri veya reseptör mutasyonları daha nadir izlenen otozomal resesif patolojilerdir.

**Soru 2 (ID: 92b0f6cd-9d82-4cdb-b9fa-5f746eb87944)**
Soru Kökü: Altı haftalık bir yenidoğan, çocuk polikliniğine uzamış fizyolojik sarılık, ağlarken fark edilen çok kaba ses, göbek fıtığı ve kaba saç teli görünümü şikayetleriyle getirilmiştir. Klinik olarak konjenital hipotiroidi (kretinizm) düşünülen bu bebekte, toplumda saptanan en sık etyolojik neden aşağıdakilerden hangisidir?
Doğru Şık (C): Embriyolojik tiroid bezi disgenezisi
Açıklama: Yenidoğan (konjenital) hipotiroidizminin günümüz toplumlarındaki en sık sebebi, organogenez sırasındaki göç bozuklukları veya anatomik gelişim yetersizliklerini kapsayan tiroid bezi disgenezisidir (agenezi, ektopi veya hipoplazi). İyot eksikliği dünya genelinde endemik bölgelerde ilk sırayı alsa da, standart toplum analizlerinde disgenezis en sık rastlanan etyolojidir. Tabloya eşlik eden göbek fıtığı ve kaba ses klasik muayene bulgularıdır.

---

### ÇİFT 5 (Benzerlik: 0.87)

**Soru 1 (ID: 295575ed-6564-43dc-9253-3b3c52bf6011)**
Soru Kökü: Elli beş yaşında, diyaliz programında takip edilen kronik böbrek yetmezliği (KBY) hastası yaygın kemik ağrılarıyla polikliniğe başvuruyor. Yapılan tetkiklerde kalsiyum seviyesi düşük, fosfat ve parathormon (PTH) seviyeleri ise oldukça yüksek bulunuyor. Bu hastada sekonder hiperparatiroidizm gelişimini başlatan temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Böbrekte aktif D vitamini (1,25-dihidroksikolekalsiferol) sentezlenememesi ve kalsiyum emiliminin bozulması
Açıklama: Kronik böbrek yetmezliğinde, parankim hasarına bağlı olarak 1-alfa hidroksilaz enzimi yetersiz kalır ve 1,25-dihidroksikolekalsiferol (aktif D vitamini) üretilemez. Aktif D vitamini eksikliği bağırsaktan kalsiyum emilimini bozar; ayrıca atılamayan fosfatın kanda birikmesi (hiperfosfatemi) serbest kalsiyumu bağlar. Düşen iyonize kalsiyum, paratiroid bezini sürekli stimüle ederek bezin hiperplazisine ve sekonder hiperparatiroidizm tablosuna yol açar.

**Soru 2 (ID: 3a285a29-a864-4155-95e4-d6c7f303d660)**
Soru Kökü: Elli iki yaşında kadın hasta, son evre kronik böbrek yetmezliği nedeniyle diyalize girmektedir. Tetkiklerinde kronik hipokalsemi, hiperfosfatemi ve aşırı yükselmiş serum PTH düzeyi saptanıyor. Bu hastada gözlenen sekonder hiperparatiroidizmin fizyopatolojik kökeni aşağıdakilerden hangisidir?
Doğru Şık (E): Böbrekte 1-alfa hidroksilaz aktivitesinin kaybına bağlı aktif vitamin D üretilememesi
Açıklama: Kronik böbrek yetmezliğinde, böbrek dokusu hasar gördüğü için 1-alfa hidroksilaz enzimi çalışamaz ve D vitamini aktif formuna dönüşemez. Aktif D vitamini eksikliği bağırsaktan kalsiyum emilimini bozar ve oluşan sürekli hipokalsemi, paratiroid bezini sekonder olarak uyararak PTH deşarjına (sekonder hiperparatiroidizm) yol açar. Primer sorun kemik veya otonom paratiroid dokusu değildir.

---

### ÇİFT 6 (Benzerlik: 0.87)

**Soru 1 (ID: c81cb385-8c12-489f-aaf8-e80425e013ee)**
Soru Kökü: Laktasyon dönemindeki bir kadında süt üretimini (laktogenez) prolaktin hormonu gerçekleştirirken, üretilen sütün duktus sistemine pompalanarak atılımı (galaktokinez) arka hipofiz kaynaklı oksitosin tarafından yürütülür. Oksitosin, memede sütün kanallar boyunca ilerlemesini (süt ejeksiyonu) hangi hücre grubunu kasarak sağlar?
Doğru Şık (A): Miyoepitelyal hücreler
Açıklama: Oksitosin, meme alveollerini saran kontraktil özellikli miyoepitelyal hücreleri kasarak, içerde biriken sütün duktuslara fışkırmasını sağlar (süt boşalma refleksi). Asiner epitel hücreleri prolaktinin etkisiyle bizzat sütü sentezleyen fabrikalarken, sütün mekanik olarak atılımını gerçekleştiren güç miyoepitelyal dokudandır.

**Soru 2 (ID: cf70f47f-11bb-457e-b648-a1d806092b48)**
Soru Kökü: Laktasyon sırasında bebeğin emmesiyle hipotalamusa ulaşan nöral sinyaller nörohipofizden oksitosin salınımını tetikler. Kana karışan oksitosin, meme dokusunda sütün kanallara fırlatılmasını (ejeksiyon) sağlamak için aşağıdaki hücrelerden hangisinde kasılma oluşturur?
Doğru Şık (B): Miyoepitelyal hücreler
Açıklama: Oksitosin, memedeki asinusları ve küçük kanalları çevreleyen kontraktil miyoepitelyal hücreler üzerinde spesifik reseptörlere sahiptir. Bu hücrelerin kasılması, süt bezlerinde üretilen sütün kanallar boyunca ilerleyerek meme ucuna fırlatılmasını (süt ejeksiyon refleksi) sağlar. Asiner sekresyon hücreleri ise prolaktin uyarısıyla süt üretiminden (laktogenez) sorumludur, kasılma yetenekleri yoktur.

---

### ÇİFT 7 (Benzerlik: 0.87)

**Soru 1 (ID: 10b0abcf-6564-4500-8b9c-746c953f658f)**
Soru Kökü: Tiroid hormon biyosentezinde bazal membrandan NIS ile hücre içine alınan sodyum ve iyodür iyonlarından iyodürün, apikal zardan kolloid lümenine tek yönlü taşınmasını sağlayan ve bu esnada hücre içine klorür iyonu (Cl-) alan değişim proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Pendrin
Açıklama: Folikül hücresinin bazolateral (kan tarafı) membranından alınan iyot, apikal (lümen) membranda yer alan Pendrin adlı bir klor/iyot taşıyıcı proteini sayesinde kolloid lümenine pompalanır. Pendrin mutasyonları tiroidde iyot organifikasyonunu bozarak Pendred sendromuna (sağırlık ve guatr) yol açar. NIS, bazal membranda sodyum bağımlı sekonder aktif taşıma yapan pompadır.

**Soru 2 (ID: 8339313b-3c89-49e0-967a-7bde56c6b015)**
Soru Kökü: Tiroid hormon sentezi aşamalarında, folikül hücrelerinin bazolateral membranından sodyum ile birlikte hücre içine alınan iyodürün (I-), apikal membran üzerinden kolloid lümenine klor ile yer değiştirerek taşınmasını sağlayan özgül protein aşağıdakilerden hangisidir?
Doğru Şık (C): Pendrin
Açıklama: Pendrin, folikül hücresinin apikal membranında yer alan ve iyodürü klor iyonuyla değiştirerek kolloide aktaran transport proteinidir. Sodyum-iyot simportu (NIS) ise iyodu kandan folikül hücresi içine almakla görevli olup bazolateral zarda lokalizedir. Megalin, tiroglobulinin pinositozla geri alınmasında görev yapar.

---

### ÇİFT 8 (Benzerlik: 0.86)

**Soru 1 (ID: 1c65235e-85b9-4146-b6ce-7b88c9776652)**
Soru Kökü: Diş gelişimi sürecinde dental dokuların olgunlaşması spesifik parakrin faktörlerin kontrolü altındadır. Fetal dönemde kıkırdak gelişmesini sağlarken aynı zamanda dişlerin enamel (mine) tabakasının oluşumunu destekleyen peptit aşağıdakilerden hangisidir?
Doğru Şık (A): PTHrP (Paratiroid hormonla ilişkili protein)
Açıklama: Paratiroid hormonla ilişkili protein (PTHrP), PTH ile aynı reseptöre bağlanarak parakrin etki gösterir ancak fizyolojik hedefleri farklıdır. Özellikle fetal dönemde plasentadan kalsiyum geçişi, kıkırdak formasyonu ve embriyolojik diş gelişiminde enamel (mine) tabakasının olgunlaşmasını doğrudan uyarır. Klasik PTH ise sistemik kalsiyum homeostazı üzerinde çalışır.

**Soru 2 (ID: ff2903f7-28a4-499f-8f8d-c7f6d7966555)**
Soru Kökü: Fetal dönemde kıkırdak gelişimi ve mineralizasyonunu düzenleyen, aynı zamanda dişlerin mine (enamel) tabakasının formasyonunda kritik parakrin rol oynayan faktör aşağıdakilerden hangisidir?
Doğru Şık (C): Paratiroid hormonla ilişkili protein (PTHrP)
Açıklama: PTHrP (Paratiroid hormonla ilişkili protein), PTH ile aynı reseptöre bağlanan ancak endokrin değil parakrin etki gösteren bir moleküldür. Fetal kıkırdak formasyonu, plasental kalsiyum transferi ve odontogeneziste enamel (mine) tabakasının normal gelişimi için zorunlu bir fizyolojik sinyaldir.

---

### ÇİFT 9 (Benzerlik: 0.86)

**Soru 1 (ID: b663d8b1-64c7-4fdf-bee5-2af8dbaa7c86)**
Soru Kökü: Beyin dokusunda astrositler ve kan-beyin bariyerini oluşturan kapiller endotel hücreleri ile sistemik dolaşımdaki eritrositlerde insülinden bağımsız olarak bazal glikoz alımını sürekli kılan hücresel taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (E): GLUT-1
Açıklama: GLUT-1 taşıyıcısı, insülin konsantrasyonundan bağımsız olarak çalışan bir kolaylaştırılmış difüzyon kanalıdır. Eritrositler ve kan-beyin bariyeri endotel hücreleri gibi glikoza kesintisiz ve mutlak bağımlılığı olan dokularda sürekli bazal glikoz alımını sağlar. İskelet kası ve adipoz dokudaki glikoz alımı ise insüline bağımlı olan GLUT-4 ile regüle edilir.

**Soru 2 (ID: e7c7424f-6cdf-4f80-adeb-1ed9203c81fa)**
Soru Kökü: Hücre membranlarında bulunan taşıyıcı proteinler glukozun dokulara alımını kolaylaştırılmış difüzyonla sağlar. Santral sinir sisteminin enerji akışını korumak adına beyin kapiller endotelinde ve eritrositlerde yüksek oranda ifade edilen, insülinden bağımsız çalışan glukoz taşıyıcısı aşağıdakilerden hangisidir?
Doğru Şık (D): GLUT-1
Açıklama: GLUT-1 taşıyıcısı, kan-beyin bariyerini oluşturan astrosit ve kapiller endotelleri ile eritrositlerin membranında bulunur ve bazal, sürekli bir glukoz alımı sağlar. Bu sistem insülinden tamamen bağımsızdır, zira beyin kan şekeri düştüğünde dahi glukozu hücre içine alabilmelidir. İnsüline bağımlı olan tek transporter iskelet ve yağ dokusunda bulunan GLUT-4'tür.

---

### ÇİFT 10 (Benzerlik: 0.86)

**Soru 1 (ID: 02c68f2f-130b-4657-b711-8544b60cb2f8)**
Soru Kökü: Doğum sonrası altıncı ayında olan ve aktif olarak emziren yirmi sekiz yaşındaki bir hastada menstrüel siklusun henüz başlamadığı (laktasyonel amenore) gözlemleniyor. Bu hastada ovulasyonun fizyolojik olarak baskılanmasından sorumlu majör mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Yüksek prolaktin düzeylerinin hipotalamik GnRH salınımını inhibe etmesi
Açıklama: Emzirme sürecinde ön hipofizden salgılanan yoğun prolaktin hormonu, hipotalamustan GnRH (Gonadotropin Salgılatıcı Hormon) sentez ve salınımını güçlü şekilde inhibe eder. GnRH baskılandığı için hipofizden LH ve FSH salgılanamaz, folikül gelişimi durur ve anovülasyon (süt koruması) gerçekleşir.

**Soru 2 (ID: ec08e280-0e4e-4a46-867a-7aefa2a36d2c)**
Soru Kökü: Yirmi sekiz yaşında, 4 aylık postpartum dönemde olan ve aktif emziren bir kadın hasta amenore şikayetiyle başvuruyor. Bu hastada fizyolojik anovulasyonun oluşmasından sorumlu temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Prolaktin yüksekliğine bağlı GnRH sentez ve salınımının inhibe olması
Açıklama: Emzirme döneminde laktasyonu sürdüren yüksek prolaktin seviyeleri, hipotalamustan GnRH sentez ve salınımını güçlü bir şekilde inhibe eder. GnRH'ın baskılanması, ön hipofizden gonadotropinlerin (FSH ve LH) salgılanmasını azaltarak folikül gelişimini durdurur ve anovulasyona neden olur. Oksitosin meme bezlerinde miyoepitelyal kasılma sağlasa da, menstrüel siklusun laktasyonel inhibisyonunda doğrudan rol almaz. Bu mekanizma fizyolojik süt koruması olarak da bilinir.

---

### ÇİFT 11 (Benzerlik: 0.86)

**Soru 1 (ID: 73a2ac69-da5a-4298-829b-97cb299c4eec)**
Soru Kökü: Böbrek üstü bezi korteks tabakaları ve buralardan sentezlenen temel hormon eşleştirmelerinden hangisi **yanlıştır**?
Doğru Şık (B): Zona fasikülata - Androstenedion
Açıklama: Zona fasikülata, glikokortikoid (kortizol) sentezinden sorumlu olan orta tabakadır. Androstenedion ve DHEA gibi zayıf androjenler adrenal korteksin en iç tabakası olan zona retikülaristen sentezlenir. Kortikal mimari dıştan içe G-F-R sırasıyla mineralokortikoid, glikokortikoid ve androjen üretim hatlarına ayrılmıştır.

**Soru 2 (ID: b2c743a3-73cc-4478-82b1-e4e4bed67b46)**
Soru Kökü: Aşağıdaki böbrek üstü bezi histolojik tabakaları ve sentezledikleri majör steroid hormon çiftlerinden hangisi **yanlıştır**?
Doğru Şık (E): Zona glomeruloza - Androstenedion
Açıklama: Androstenedion bir adrenal androjendir ve sentez yeri böbrek üstü bezinin en iç tabakası olan zona retikülaris'tir. Zona glomeruloza ise sadece mineralokortikoid (aldosteron) sentezler; bu tabakada androjen yapım yolağı enzimleri bulunmaz. Zona fasikülata ise glikokortikoid olan kortizol ve az miktarda kortikosteron sentezinden sorumludur.

---

### ÇİFT 12 (Benzerlik: 0.85)

**Soru 1 (ID: 27d9a016-286d-4ffa-ba32-f05aee5aa7ac)**
Soru Kökü: Karbonhidrat emilimi epitelial transport sistemlerine dayanır. Diyetle alınan meyve şekeri fruktozun bağırsak lümeninden enterosit sitoplazmasına alınmasında özelleşmiş olan apikal zar taşıyıcısı aşağıdakilerden hangisidir?
Doğru Şık (B): GLUT-5
Açıklama: GLUT-5 taşıyıcısı, ince bağırsak lümeninden enterosite spesifik olarak fruktoz geçişini sağlayan fasilite difüzyon kanalıdır. Glikoz ve galaktoz ise SGLT-1 aracılığıyla sodyuma bağımlı ikincil aktif taşımayla alınır. SGLT-2 böbrek tübülünde çalışırken, GLUT-4 insüline bağımlı kas hücresi transporterıdır.

**Soru 2 (ID: 8691292e-030f-44f6-825e-38beaea02ba1)**
Soru Kökü: Diyetle alınan fruktozun bağırsak lümeninden enterosite emilimini sağlayan ve aynı zamanda mikroglialarda da eksprese edilen spesifik taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (D): GLUT-5
Açıklama: GLUT-5, bağırsak lümeninden enterosite spesifik olarak fruktoz emilimini gerçekleştiren ve mikroglialarda da bulunan taşıyıcı moleküldür. SGLT-1 bağırsakta glikoz ve galaktozu sodyumla eşlenik taşırken fruktoza afinitesi yoktur. Fruktozun fruktoz taşıyıcısıyla girmesi, glikoz transporterlarından izole bir yolak oluşturmasını sağlar.

---

### ÇİFT 13 (Benzerlik: 0.85)

**Soru 1 (ID: 93669607-437d-4a2f-89b6-32ad54828005)**
Soru Kökü: Aktif D vitamini (1,25-dihidroksikolekalsiferol), bağırsaklardan kalsiyum emilimini artırıcı fizyolojik etkisini ince bağırsak enterositlerinde öncelikle hangi proteinin sentezini uyararak gerçekleştirir?
Doğru Şık (D): Kalbindin
Açıklama: Aktif D vitamini steroid yapıdadır ve sitoplazmik reseptörüne bağlanarak enterosit çekirdeğinde kalsiyum bağlayıcı bir protein olan kalbindin (D-28K) gen ekspresyonunu artırır. Kalbindin, lümenden apikal kalsiyum kanallarıyla hücreye giren kalsiyumu bağlayarak bazolateral membrana taşır ve Ca-ATPaz pompası aracılığıyla kana geçişini güvence altına alır.

**Soru 2 (ID: ce100743-2456-4d9a-a59a-72036ccc222f)**
Soru Kökü: D vitamini (1,25-dihidroksikolekalsiferol), bağırsaklardan kalsiyum emilimini spesifik gen ekspresyonlarını değiştirerek kontrol eder. Aktif D vitamini, enterositlerin sitoplazmasında aşağıdaki proteinlerden hangisinin yapımını artırarak lümendeki kalsiyumun hücre içine transportunu sağlar?
Doğru Şık (E): Kalbindin
Açıklama: D vitamini nükleer bir reseptör üzerinden gen transkripsiyonunu artırarak ince bağırsak epitel hücrelerinde (enterositlerde) kalsiyum bağlayan özgül bir protein olan kalbindin (calbindin) sentezini uyarır. Kalbindin, hücre içi kalsiyum taşıma kapasitesini büyüterek lümenden kana net geçişi artırır. Pendrin iyot transportunda, alkalen fosfataz ise kemik mineralizasyonunda aktiftir.

---

### ÇİFT 14 (Benzerlik: 0.85)

**Soru 1 (ID: 16bade31-8cba-4bcf-bf29-52d3c8b67fff)**
Soru Kökü: On iki yaşındaki erkek hastada diş çekimi sonrası uzamış kanama görülüyor. Yapılan testlerde von Willebrand faktör (vWF) eksikliği düşünülerek hastaya endotel hücrelerinden endojen faktör salınımını tetiklemek amacıyla ADH analoğu (Desmopressin) veriliyor. Bu ilacın V2 reseptörleri aracılığıyla uyardığı ve vWF'yi depolayan hücresel yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Weibel-Palade cisimciği
Açıklama: ADH, damar endotel hücrelerindeki V2 reseptörlerini uyararak Weibel-Palade cisimciklerinin eksositozunu tetikler. Weibel-Palade cisimcikleri, endotel hücrelerinde von Willebrand faktörünün (vWF) ve P-selektinin depolandığı organellerdir ve kanama bozukluklarında terapötik bir hedef olarak kullanılır. Herring cisimcikleri hipofizdeki hormon depolarıyken, alfa granülleri trombositlerde bulunur.

**Soru 2 (ID: a6339b0d-94f0-4839-bc18-de4f2f04da5a)**
Soru Kökü: Hafif seyirli von Willebrand hastalığı olan ve diş çekimi planlanan bir hastaya kanama komplikasyonunu önlemek amacıyla desmopressin (sentetik ADH analoğu) uygulanmıştır. Desmopressinin, endotel hücreleri üzerinde bulunan V2 reseptörlerini uyararak plazmaya von Willebrand faktörünün (vWF) çıkışını sağladığı spesifik sitoplazmik depolama organeli aşağıdakilerden hangisidir?
Doğru Şık (B): Weibel-Palade cisimcikleri
Açıklama: Endotel hücrelerindeki Weibel-Palade cisimcikleri, von Willebrand faktörü (vWF) ve P-selektin için spesifik depo granülleridir. ADH (Vazopressin) V2 reseptörleri aracılığıyla bu granüllerden vWF çıkışını indükler. Herring cisimcikleri ise hipotalamik nöronların nörohipofizdeki aksonlarında ADH ve oksitosini depolayan şişkinliklerdir.

---

### ÇİFT 15 (Benzerlik: 0.84)

**Soru 1 (ID: 29c22fd5-9a56-40a2-b4a2-365d85320681)**
Soru Kökü: Elli beş yaşında kadın hasta kemik ağrısı ve tekrarlayan böbrek taşı şikayetiyle başvuruyor. Tetkiklerinde primer hiperparatiroidizm saptanıyor. Aktive olan osteoklastların kemiğin organik matriksini yıkması sonucunda, hastanın idrarında aşağıdaki metabolitlerden hangisinin atılımının artması beklenir?
Doğru Şık (A): Hidroksiprolin
Açıklama: PTH, osteoblastlar üzerinden RANKL ürettirerek osteoklastları aktive eder. Osteoklastların salgıladığı lizozomal enzimler kemiğin organik matriksinin ana bileşeni olan Tip I kollajeni parçalar. Kollajen yapısında spesifik olarak yüksek oranda bulunan hidroksiprolin ve hidroksilizin aminoasitleri yıkım sonrası kana geçer ve idrarla atılır, bu nedenle kemik rezorpsiyon markeri olarak kullanılırlar.

**Soru 2 (ID: b4091988-9a83-44be-8c78-db06d61e3467)**
Soru Kökü: Elli iki yaşında erkek hasta, tekrarlayan böbrek taşı ve yaygın kemik ağrıları şikayetiyle başvuruyor. İncelemelerde serum kalsiyum seviyesi yüksek, fosfat seviyesi düşük ve PTH düzeyi belirgin artmış bulunarak primer hiperparatiroidi tanısı alıyor. Bu hastada aktifleşen osteoklastik kemik yıkımı sonucunda, organik matriksin parçalanmasını yansıtacak şekilde idrarda aşağıdaki metabolitlerden hangisinin atılımının artması **en olasıdır**?
Doğru Şık (B): Hidroksiprolin
Açıklama: Kemiğin organik matriksinin büyük bir kısmı tip 1 kollajenden oluşur ve bu protein hidroksiprolin ile hidroksilizin açısından çok zengindir. Osteoklastlar tarafından kollajen yıkıldığında, açığa çıkan hidroksiprolin kana geçer ve filtre edilerek idrarla atılır. İdrar hidroksiprolin artışı, osteoklastik rezorpsiyon hızının ve kemik döngüsünün en spesifik biyokimyasal kanıtlarından biridir.

---

### ÇİFT 16 (Benzerlik: 0.84)

**Soru 1 (ID: 52abc959-97f3-4f13-a4ba-79c6f7ffcf3c)**
Soru Kökü: Paratiroid bezi parankimasını oluşturan hücreler spesifik histolojik yapılarına göre farklılık gösterir. Sitoplazmik granüllerinde kalsiyum regülasyonundan sorumlu parathormonu (PTH) depolayan ve aynı zamanda glikojen inklüzyonları içeren hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Esas (şef) hücreler
Açıklama: Paratiroid bezinin ana salgı elemanı olan esas (şef) hücreler, PTH sentezleyen ve bu hormonu sitoplazmik granüllerinde depolayan temel hücrelerdir. Oksifil hücreler ise bezde bulunan ancak PTH sentezine doğrudan primer katkı sağlamayan, mitokondri zengini destek hücreleridir. Kalsiyum dengesinin primer sensörü ve effektörü şef hücrelerdir.

**Soru 2 (ID: a9fc2a40-e3ce-4a28-a065-e449ec582596)**
Soru Kökü: Paratiroid bezinin histolojik incelemesinde, sitoplazmik granüllerinde parathormon (PTH) depolayan ve bezin esas endokrin sekresyon fonksiyonunu yürüten hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Şef (esas) hücreler
Açıklama: Paratiroid bezinin asıl endokrin parenkimini oluşturan ve PTH sentezleyip salgılayan hücreler şef (esas) hücrelerdir. Parafoliküler C hücreleri tiroid bezinde kalsitonin üretirken, oksifil hücreler paratiroidde bulunmasına rağmen puberteden sonra sayısı artan ve fonksiyonu tam anlaşılamamış destek hücreleridir.

---

### ÇİFT 17 (Benzerlik: 0.84)

**Soru 1 (ID: 156624f9-610a-433c-8a15-a180ea3ffa57)**
Soru Kökü: Tiroid bezinin parafoliküler C hücrelerinden sentezlenen ve kan kalsiyum düzeyi arttığında salgılanan kalsitonin hormonunun fizyolojik etkileri ve regülasyonu ile ilgili aşağıdakilerden hangisi **değildir**?
Doğru Şık (D): Kemik dokuda osteoblastik aktiviteyi hızlandırarak matrikse direkt kalsiyum çökmesini uyarır.
Açıklama: Kalsitonin, hiperkalsemi durumunda kan kalsiyumunu düşürmek için salgılanan hormondur. Bu etkiyi kemikteki osteoklast hücrelerini (kemik yıkan hücreler) doğrudan bloke ederek ve uzun dönemde oluşumlarını engelleyerek yapar. Kalsitoninin osteoblastik (kemik yapan) aktiviteyi artırmak gibi direkt anabolik bir etkisi yoktur; etki mekanizması kemik yıkımının frenlenmesi prensibine dayanır.

**Soru 2 (ID: 9139f05c-4ba8-4060-8e02-52380e366c27)**
Soru Kökü: Tiroid bezinin interfolliküler alanındaki C hücrelerinden salgılanan ve plazma kalsiyumu yükseldiğinde kana verilen kalsitonin hormonunun kalsiyum düşürücü en hızlı ve temel etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Kemik dokusunda osteoklastik aktiviteyi ve kemik yıkımını baskılaması
Açıklama: Kalsitonin, kan kalsiyumu arttığında salgılanır ve asıl hedefleri olan osteoklastlar üzerindeki reseptörlerine bağlanarak onların kemik rezorpsiyon (yıkım) aktivitelerini hızlıca bloke eder. Uzun dönemde ise yeni osteoklast oluşumunu da azaltarak kalsiyumun kemikte kalmasını sağlar ve plazma kalsiyumunu düşürür.

---

### ÇİFT 18 (Benzerlik: 0.83)

**Soru 1 (ID: 7cde3988-271b-439d-be83-6746f710125a)**
Soru Kökü: Tiroid hormonlarının metabolik etkileri dikkate alındığında, yüksek hormon seviyelerinin (hipertiroidizm) lipid ve kolesterol mekanizmaları üzerindeki eylemleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Plazmada dolaşan fosfolipid miktarını artırır
Açıklama: Tiroid hormonları yağ dokusundan lipolizi hızlandırır ve plazmaya serbest yağ asidi geçişini artırır (kalorijenik yıkım). Ancak, karaciğerde kolesterol ve lipid temizlenme oranını da artırdığı için dolaşımdaki kolesterol, trigliserid ve fosfolipid miktarı AZALIR. Hastanın tirotoksikozunda total lipid profili düşük seviyelerde seyreder. Bu nedenle fosfolipid artışı yanlıştır.

**Soru 2 (ID: d88fa780-4d68-4957-837b-775c7c2c090a)**
Soru Kökü: Tiroid hormonlarının sistemik lipid metabolizması üzerindeki hücresel hedefleri ve etkileri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Plazmada serbest yağ asidi miktarını azaltarak lipogenezi uyarır
Açıklama: Tiroid hormonları yağ dokusunda belirgin lipolitik etki gösterir; depo yağlarını yıkarak kana serbest yağ asidi salınımını artırır (azaltmaz). Aynı zamanda karaciğerde LDL reseptör sayısını artırdıkları için dolaşımdan lipit klirensini hızlandırır, plazma kolesterol, trigliserit ve fosfolipid seviyelerini belirgin şekilde düşürürler.

---

### ÇİFT 19 (Benzerlik: 0.83)

**Soru 1 (ID: 99031747-65ee-4cec-be24-c6569f680488)**
Soru Kökü: Otuz dört yaşında kadın hasta sinirlilik, çarpıntı, kilo kaybı ve gözlerin öne doğru fırlaması (ekzoftalmi) şikayetleriyle başvuruyor. Muayenede difüz tiroid büyümesi (guatr) ve laboratuvarda serbest T3, T4 yüksekliği saptanıyor. Graves hastalığı tanısı konan bu hastada, ekzoftalmi tablosunu oluşturan primer mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): TSH reseptörü benzeri otoantikorların retrobulber fibroblastları uyararak glikozaminoglikan sentezini artırması
Açıklama: Graves hastalığında sentezlenen otoantikorlar sadece tiroid bezini uyarmakla kalmaz, aynı zamanda göz arkasındaki retrobulber fibroblastların üzerinde de bulunan TSH reseptörlerine bağlanır. Bu bağlanma fibroblastları aktive ederek ortama bol miktarda glikozaminoglikan sentezletir ve su tutulumu ile gelişen hacim artışı ekzoftalmiye neden olur. Bu patogenez doğrudan tiroid hormonlarının değil, otoantikorların çapraz reaksiyonunun bir sonucudur.

**Soru 2 (ID: b4f4d2b8-11d9-4449-b2d5-073001e85ca3)**
Soru Kökü: Kırk beş yaşında kadın hasta kilo kaybı, anksiyete, çarpıntı ve belirgin ekzoftalmi tablosuyla başvuruyor. Yapılan tetkiklerde toplumda hipertiroidinin en sık sebebi olan Graves hastalığı saptanıyor. Bu hastalığın ekzoftalmi patogenezinde, TSH benzeri otoantikorların orbita arkasındaki bağ dokusunda hangi hücreler üzerindeki reseptörleri aktive edip glikozaminoglikan sentezini artırdığı gösterilmiştir?
Doğru Şık (A): Fibroblast
Açıklama: Graves hastalığında TSH reseptörlerine karşı gelişen uyarıcı otoantikorlar sadece tiroid bezinde hiperplazi ve hormon sentezini uyarmakla kalmaz. TSH reseptörleri tiroid dışı dokularda, özellikle retrobulber bağ dokudaki fibroblastlarda da eksprese edilir. Bu fibroblastların otoantikorlarla aktivasyonu, aşırı hidrofilik glikozaminoglikan sentezine, ödeme ve sonuç olarak göz küresinin öne doğru itilmesine (ekzoftalmi) yol açar.

---

### ÇİFT 20 (Benzerlik: 0.83)

**Soru 1 (ID: 8c1507ca-adca-41d4-af12-f2f864e8a45d)**
Soru Kökü: Bir aylık erkek bebek, uzamış fizyolojik sarılık, kaba sesle ağlama, emme güçlüğü ve giderek belirginleşen göbek fıtığı şikayetleriyle çocuk polikliniğine getiriliyor. Yapılan tiroid fonksiyon testlerinde konjenital hipotiroidi saptanıyor. Bu klinik tablonun (kretenizm) yenidoğan dönemindeki en sık görülen etyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Tiroid bezi disgenezisi
Açıklama: Yenidoğanda konjenital hipotiroidinin (kretenizm) en sık karşılaşılan yapısal sebebi, bezin embriyolojik gelişim basamaklarındaki hata olan tiroid disgenezisidir. Disgenezis sonucu hormon eksikliği uzamış sarılık, göbek fıtığı, kaba saç ve zeka geriliği riski ile seyreder. Enzim defektleri veya reseptör mutasyonları daha nadir izlenen otozomal resesif patolojilerdir.

**Soru 2 (ID: 8dbe9782-d255-4567-97a0-8213b1680dc6)**
Soru Kökü: Bir aylık erkek bebek, uzamış sarılık, kaba sesle ağlama ve göbek fıtığı şikayetleriyle çocuk hastalıkları polikliniğine getiriliyor. Laboratuvar testlerinde TSH düzeyi belirgin yüksek, serbest T4 düzeyi ise düşük bulunuyor. Bu yenidoğan hipotiroidisi tablosunun **en olası** nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Tiroid bezi disgenezisi
Açıklama: Yenidoğan döneminde görülen konjenital hipotiroidinin açık ara en sık görülen nedeni tiroid bezi disgenezisidir (agenezis, hipoplazi veya ektopik yerleşim). İyot eksikliği daha çok endemik bölgelerde guatr ile seyreden maternal bir faktördür. Disgenezis durumunda tiroid dokusu yeterince gelişmediği için tiroid hormon sentezi yapılamaz ve klinik olarak mental retardasyona gidebilecek kretinizm bulguları başlar.

---

### ÇİFT 21 (Benzerlik: 0.82)

**Soru 1 (ID: 167e1ce5-0c62-49e6-bcde-87a77af4fcbc)**
Soru Kökü: Kırk beş yaşında kadın hasta; son zamanlarda seste kalınlaşma, kilo artışı, soğuğa tahammülsüzlük ve cildinde çukurlaşmayan hamurumsu bir ödem şikayetiyle başvuruyor. Yapılan muayenede hipotiroidi tanısı konan bu hastada görülen ödemin (miksödem) patofizyolojisinde yatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Tiroid hormon yokluğunda cilt altında biriken ve yıkılamayan glikozaminoglikanların yüksek miktarda su tutması
Açıklama: Tiroid hormonları dokularda glikozaminoglikan (GAG) turnoverini (yapım/yıkım döngüsünü) düzenler. Hipotiroidizm durumunda bu turnover bozulur ve hücreler arası alanda özellikle hiyalüronik asit gibi yıkılamayan glikozaminoglikanlar birikmeye başlar. GAG'lar hidrofilik özellikte olduklarından osmotik olarak suyu kendi üzerlerine çekerek ciltte bastırmakla iz bırakmayan, sert (non-pitting) 'miksödem' tablosunu oluştururlar.

**Soru 2 (ID: aec8503c-e686-4edf-bc1b-401392cb39b3)**
Soru Kökü: Elli beş yaşında, şiddetli hipotiroidisi bulunan bir kadın hastada seste kabalaşma ve yüzde godet (çukur) bırakmayan ödem formasyonları (miksödem) saptanmıştır. Tiroid hormon yokluğuna bağlı olarak dokularda suyun hapsolmasına ve bu ödeme yol açan birincil doku mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): İnterstisyel alanda glikozaminoglikanların yıkılamayarak birikmesi ve onkotik basıncı artırması
Açıklama: Tiroid hormonları, bağ dokusundaki temel zemin maddesi olan glikozaminoglikanların normal hücresel döngüsünü (turnover) ve yıkımını sağlar. Hipotiroidizm durumunda bu polimerler yıkılamaz, interstisyel dokularda birikir. Suyu güçlü bir şekilde çeken bu higroskopik makromoleküller, yerçekimiyle yer değiştirmeyen sert bir doku ödemine (miksödem) neden olur.

---

### ÇİFT 22 (Benzerlik: 0.82)

**Soru 1 (ID: c1b28487-f9b9-4841-9da2-377e6ce5ea15)**
Soru Kökü: Otuz yaşında kadın hasta, son birkaç aydır devam eden aşırı yorgunluk, ayağa kalkınca baş dönmesi ve kilo kaybı şikayetleriyle geliyor. Fizik muayenede kan basıncı 90/60 mmHg ölçülüyor; hastanın dirsekleri, dizleri, areola çevresi ve diş eti mukozasında bariz renk koyulaşması (hiperpigmentasyon) dikkati çekiyor. Primer adrenokortikal yetmezlik (Addison hastalığı) şüphesi uyandıran bu tabloda, derideki pigmentasyonun nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Düşen kortizolün feedback inhibisyonunu kaldırmasıyla artan ACTH öncülü POMC molekülünden MSH'ın (melanosit-stimüle edici hormon) açığa çıkması
Açıklama: Primer adrenal yetmezlikte (Addison hastalığı) hedef organ hasarı nedeniyle kortizol yapılamadığı için hipotalamus ve hipofiz üzerindeki negatif feedback ortadan kalkar. Bunun sonucunda hipofiz ön lobundan ACTH sekresyonu çok yüksek seviyelere ulaşır. ACTH, Pro-opiyomelanokortin (POMC) adı verilen büyük bir prekürsörden klevaj ile sentezlenir. Bu klevaj sırasında ACTH ile eş zamanlı olarak Melanosit-stimüle edici hormon (MSH) fragmanları da oluşur ve bu fragmanlar deride hiperpigmentasyon yapar.

**Soru 2 (ID: cac0b73a-38cb-4d7c-b4ac-3b22de4c133d)**
Soru Kökü: Kırk yaşında erkek hasta; ilerleyici zayıflık, gastrointestinal şikayetler ve hipotansiyon tablosuyla incelenirken, özellikle tırnak yatakları ve dirseklerinde belirgin esmerleşme (hiperpigmentasyon) saptanıyor. Primer adrenokortikal yetmezlik (Addison hastalığı) tanısı alan bu hastadaki deri pigmentasyonunun patogenezi aşağıdakilerden hangisidir?
Doğru Şık (C): Kortizol eksikliğine tepki olarak artan ACTH sentezinde POMC'un yıkılarak MSH oluşturması
Açıklama: Addison hastalığında adrenal bez hasarına bağlı kortizol üretilemez. Kortizolün negatif feedback etkisi kalktığı için hipofizden aşırı ACTH sentezlenir. ACTH'ın öncül molekülü olan proopiomelanokortin (POMC) parçalandığında ACTH ile birlikte Melanosit Uyarıcı Hormon (MSH) açığa çıkar; bu da melanositleri uyararak karakteristik cilt koyulaşmasını yapar.

---

### ÇİFT 23 (Benzerlik: 0.82)

**Soru 1 (ID: 3123013a-10e0-4ab5-892f-4f194948da91)**
Soru Kökü: Dehidratasyon tablosunda kan sodyum düzeyinin yükselmesiyle artan plazma ozmolaritesi, beyin omurilik sıvısı bariyerinin olmadığı özel alanlardaki osmoreseptörler tarafından algılanır. Aşağıdakilerden hangisi bu duyusal algılamayı yaparak susama merkezini uyaran yapılardan biridir?
Doğru Şık (D): Organum vaskulozum lamina terminalis (OVLT)
Açıklama: Plazma ozmolaritesindeki artışı doğrudan algılayan osmoreseptörler, kan-beyin bariyerinin bulunmadığı sirkümventriküler organlar olan Organum vaskulozum lamina terminalis (OVLT) ve subfornikal organ içinde yer alır. Bu bölgelerden çıkan sinyaller hipotalamusun susama merkezine (median preoptik nükleus) ve ADH salgılayan supraoptik nükleusa iletilir. Arkuat nükleus beslenme ve nöroendokrin kontrolde görevliyken osmotik duyarlılığı yoktur.

**Soru 2 (ID: ff51e5e8-1b04-48e7-b38f-83e4152293a4)**
Soru Kökü: Güneş altında ağır fiziksel aktivite sonrasında vücut sıvısı kaybeden bir kişide plazma sodyum ve klor konsantrasyonu artarak hiperozmolarite tablosu gelişir. Merkezi sinir sisteminde plazma ozmolaritesini algılayarak ADH sekresyonunu başlatan ve aynı zamanda güçlü bir susama hissi oluşturan osmoreseptör odaklarından subfornikal organ ile koordineli çalışan bölge aşağıdakilerden hangisidir?
Doğru Şık (D): Organum vaskulozum lamina terminalis (OVLT)
Açıklama: Subfornikal organ, Organum vaskulozum lamina terminalis (OVLT) ve median preoptik nükleus, kan-beyin bariyerinin zayıf olduğu 3. ventrikül anteroventral alanında yer alırlar ve vücudun temel susama/osmoreseptör merkezi olarak işlev görürler. Ventromedial hipotalamus tokluk, arkuat nükleus ise GHRH ve nöropeptid-Y salınımı ile görevlidir. OVLT'den çıkan sinyaller, plazma ozmolaritesi artışını ADH deşarjına dönüştürür.

---

### ÇİFT 24 (Benzerlik: 0.82)

**Soru 1 (ID: 7d3b9ca0-fd80-4981-b451-d344ba0157cd)**
Soru Kökü: Kan kalsiyum düzeyi düşen bir bireyde, paratiroid bezinden kana salınan Parathormon (PTH), etkisini gösterebilmek için hedef dokularda spesifik reseptörlerine bağlanmalıdır. Kemiğin yapım veya yıkım sürecinde, PTH'nin doğrudan bağlandığı fizyolojik reseptörler hangi hücre üzerinde eksprese edilir?
Doğru Şık (E): Kemik iliği kökenli osteoblast
Açıklama: PTH kemik yıkımını artırıp kalsiyumu serbestleştirir ancak osteoklastların üzerinde PTH reseptörü bulunmaz. PTH doğrudan osteoblast yüzeyindeki reseptörlerine bağlanır ve bu osteoblastları uyararak M-CSF ile RANKL salgılanmasını sağlar. Bu parakrin moleküller daha sonra osteoklastları aktive eder. Sistemin başlangıç tetiği osteoblastik regülasyona dayanır.

**Soru 2 (ID: fe8aa662-f645-4133-bf87-308ef39d88ab)**
Soru Kökü: Paratiroid hormonunun (PTH) kemik dokusunda dolaylı yoldan kalsiyum rezorpsiyonunu uyarma mekanizması, spesifik reseptörlerine bağlandıktan sonra hangi hücreden osteoprotegerin ligandı (RANKL) salınımını tetiklemesine dayanır?
Doğru Şık (D): Osteoblast
Açıklama: Kemik yıkımını yapan osteoklast hücrelerinde doğrudan PTH reseptörü bulunmaz. PTH, osteoblastlarda bulunan reseptörlerine bağlanarak bu hücrelerden RANKL ve M-CSF salınmasını sağlar; bu faktörler de öncü osteoklastları aktive ederek kemik matriksinin yıkımını başlatır. Mekanizma osteoblast üzerinden dolaylı yürütülür.

---

### ÇİFT 25 (Benzerlik: 0.82)

**Soru 1 (ID: 0bf46e3c-8257-456e-be6c-0e8c70bb1315)**
Soru Kökü: Böbrek üstü bezinin spesifik bir bölgesinde lokalize olan ve inaktif bir öncül molekül olan kortikosteronu, esas mineralokortikoid olan aldosterona dönüştürerek elektrolit dengesinin temelini atan majör enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Aldosteron sentaz
Açıklama: Zona glomeruloza tabakasında kortikosteronu aldosterona dönüştüren terminal ve spesifik enzim aldosteron sentazdır. 21 ve 11 beta hidroksilaz enzimleri glikokortikoid yolakları da dahil ortak kaskadlarda rol alırken, aldosteron sentaz sadece zona glomerulozada eksprese edilir ve nihai mineralokortikoid yapımı ile görevlidir. Bu nedenle eksikliği izole aldosteron düşüklüğüne yol açar.

**Soru 2 (ID: dd6dc6f6-536c-4bca-8828-ef4a6f8bf440)**
Soru Kökü: Adrenal kortekste spesifik olarak sadece zona glomeruloza hücrelerinde eksprese edilen ve kortikosteronun mineralokortikoid olan aldosterona son dönüşüm basamağını katalizleyen enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Aldosteron sentaz
Açıklama: Aldosteron sentaz, adrenal korteksin dış katmanı olan zona glomerulozada bulunur ve kortikosteronu son ürün olan aldosterona dönüştürür. Bu enzimin ekspresyonu büyük oranda anjiotensin II ve kan potasyum düzeyleri ile kontrol edilirken ACTH'ın enzime etkisi çok kısıtlıdır.

---

### ÇİFT 26 (Benzerlik: 0.82)

**Soru 1 (ID: 8997d3e3-2d42-4089-9e79-e158dda9eb50)**
Soru Kökü: Sülfonilüre grubu oral antidiyabetik ajanlar, kan glukozunu düşürmek için doğrudan pankreasın Langerhans adacıkları üzerinde etki gösterir. Bu ilaçların insülin salgısını artırmak için hedeflendiği spesifik iyon kanalı mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Beta hücresi membranındaki ATP bağımlı potasyum kanallarını kapatarak hücreyi depolarize etmek
Açıklama: Pankreas beta hücrelerinde fizyolojik insülin salınımı, glukozdan elde edilen ATP'nin zardaki K+ kanallarını kapatması, böylece hücrenin depolarize olması ve Ca++ kanallarının açılarak kalsiyumun içeri girmesi zinciriyle olur. Sülfonilüre grubu ilaçlar glukoz düzeyinden bağımsız olarak membrandaki bu 'ATP bağımlı potasyum kanallarını' doğrudan kapatarak depolarizasyon sağlar ve insülin ekzositozunu artırırlar.

**Soru 2 (ID: e859469c-0a7a-46f3-8c3b-4edc0a3d48f7)**
Soru Kökü: Tip 2 diyabet hastalarının farmakolojik tedavisinde yaygın olarak kullanılan sülfonilüre grubu antidiyabetik ajanlar, insülin sekresyonunu artırmak için pankreas beta hücrelerinde spesifik bir enzimi veya kanalı hedeflerler. Bu ilaçların temel hücresel hedefi aşağıdakilerden hangisidir?
Doğru Şık (D): Membrandaki ATP bağımlı potasyum kanalları
Açıklama: Sülfonilüre grubu oral antidiyabetikler, normalde glikozun ATP'ye dönüşümüyle fizyolojik olarak kapanan 'ATP-bağımlı potasyum kanallarını' dışarıdan farmakolojik olarak kapatırlar. Bu kapanma beta hücresini depolarize eder, kalsiyum akışını başlatır ve kan şekerinden bağımsız olarak insülin deşarjını tetikler.

---

### ÇİFT 27 (Benzerlik: 0.82)

**Soru 1 (ID: b367528c-1e89-48cc-8424-e608f205d1c3)**
Soru Kökü: Glikokortikoidlerin klinik tedavide sıklıkla kullanılmasını sağlayan güçlü anti-enflamatuvar ve immünsüpresif özellikleri bulunmaktadır. Kortizolün T lenfosit proliferasyonunu hücresel boyutta baskılayan mekanizması aşağıdakilerden hangisine dayanır?
Doğru Şık (E): Çekirdekteki Nükleer Faktör-kappa B'yi (NF-κB) inhibe ederek interlökin-2 (IL-2) üretimini engellemesine
Açıklama: Kortizol immün sistem hücrelerine girdiğinde, inflamasyonun ana genetik şalterlerinden biri olan Nükleer Faktör-kappa B (NF-kB) kompleksini inaktif halde tutar. NF-kB'nin inhibisyonu, T hücre çoğalması ve inflamasyon için kritik olan interlökin-2 (IL-2) ve IL-1 gibi sitokinlerin transkripsiyonunu baskılar ve güçlü bir immünsüpresyon oluşturur.

**Soru 2 (ID: d166e3b8-6766-4d7a-9077-2b1c39d3c16b)**
Soru Kökü: Kortizolün anti-enflamatuar ve immünosüpresif etkileri büyük ölçüde gen düzeyindeki modülasyonlara dayanır. Kortizol, çekirdek içindeki hangi spesifik transkripsiyon faktörünü inhibe ederek interlökin-2 oluşumunu ve T lenfosit proliferasyonunu baskılar?
Doğru Şık (A): Nükleer Faktör-κB (NF-κB)
Açıklama: Kortizol sitoplazmik reseptörüne bağlanıp çekirdeğe geçtiğinde, güçlü bir enflamasyon uyarıcısı olan transkripsiyon faktörü NF-κB'nin hedef genlere bağlanmasını engeller. NF-κB'nin blokajı interlökin-2 (IL-2) dahil birçok sitokinin sentezini keser; IL-2 eksikliği de T lenfosit çoğalmasını durdurarak immünsupresyon sağlar.

---

### ÇİFT 28 (Benzerlik: 0.82)

**Soru 1 (ID: 773a9352-ccf3-4b09-88f2-b131838495f7)**
Soru Kökü: Hücreler arası sinyal ileti yollarında, salgılanan molekülün doğrudan komşu hücre zarına temas ederek etki gösterdiği ve transforme edici büyüme faktörü-alfa (TGF-a) tarafından kullanılan ileti mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Jukstakrin ileti
Açıklama: Jukstakrin ileti, hücre membranı üzerindeki sinyallerin doğrudan temas yoluyla komşu hücreyi etkilemesi prensibine dayanır. Transforme edici büyüme faktörü-alfa (TGF-a) bu spesifik temas bağımlı yolağı kullanırken, parakrin ileti ekstraselüler sıvıya difüzyon gerektirir. Dolayısıyla molekülün komşu hücreye difüzyon yerine doğrudan temasla sinyal iletmesi onu diğer hücreler arası iletişim tiplerinden ayırır.

**Soru 2 (ID: ed616f18-b230-4b24-966b-900e33001c19)**
Soru Kökü: Transforme edici büyüme faktörü-α (TGF-α) aracılığıyla komşu hücrenin doğrudan etkilenmesini sağlayan ve hücreler arası fiziksel temasa dayalı olan sinyal ileti modeli aşağıdakilerden hangisidir?
Doğru Şık (A): Jukstakrin
Açıklama: Transforme edici büyüme faktörü-alfa (TGF-a) hücre yüzeyine tutunarak komşu hücrenin reseptörüyle doğrudan temas kurar ve bu ileti modeline jukstakrin ileti adı verilir. Parakrin iletide molekül interstisyel sıvıya difüze olarak etki gösterirken, jukstakrinde hücreler arası lokal temas şarttır. Diğer seçenekler difüzyon veya dolaşım yoluyla uzak/yakın hedeflere ulaşan ileti tipleridir.

---

### ÇİFT 29 (Benzerlik: 0.81)

**Soru 1 (ID: 1a29425f-7954-45c5-8894-206e9c556586)**
Soru Kökü: Büyüme hormonunun (GH) ön hipofizden sentezi ve salınımı çeşitli fizyolojik durumlarda artar veya baskılanır.
Aşağıdaki mekanizma ve faktörlerden hangisi somatotrop hücrelerden büyüme hormonu sekresyonunu baskılayan durumlardan biri **değildir**?
Doğru Şık (E): Beslenme yoluyla artan plazma arjinin aminoasiti düzeyi
Açıklama: Protein bakımından zengin diyetler tüketmek veya kanda arjinin gibi dolaşan aminoasitlerin miktarının artması, dokuların proteini alıp anabolik sürece girmesi için büyüme hormonu salınımını aktive eden ana uyaranlardır. REM uykusu, plazmada glukoz veya yağ asidi fazlalığı (hiperglisemi/yüksek serbest yağ asidi) ile dışarıdan verilen GH, hipotalamo-hipofizer ekseni negatif geri bildirim ile durdurarak salgıyı baskılar.

**Soru 2 (ID: 49f51ba8-484a-47ca-a529-20c36d27ce17)**
Soru Kökü: Büyüme hormonu (GH) sekresyonu hipotalamustan salınan GHRH ve somatostatin arasındaki dinamik dengeyle düzenlenir; metabolik durumlar ve uyku evreleri bu salınım üzerinde belirleyicidir. Aşağıdakilerden hangisi büyüme hormonu salgısını uyaran faktörlerden biri **değildir**?
Doğru Şık (D): Hiperglisemi ve REM uykusu
Açıklama: Büyüme hormonu salgısı hipoglisemi, açlık, protein eksikliği ve Non-REM uyku evrelerinde artarken; yüksek kan şekeri (hiperglisemi) ve uykunun REM evresinde baskılanır. Hipoglisemi anında vücut glukoz çıkışını artırmak için GH sekresyonunu bir savunma mekanizması olarak uyarır. Bu nedenle hiperglisemi ve REM uykusu GH için inhibitör etkiye sahiptir.

---

### ÇİFT 30 (Benzerlik: 0.81)

**Soru 1 (ID: be45042e-a9bd-4b58-a056-da82ff002852)**
Soru Kökü: Karaciğer dokusunda T4 metabolizması iki zıt fizyolojik yolakta ilerleyebilir. T4'ü biyolojik aktivitesi olmayan ve periferik etkileri bulunmayan rT3 (reverse T3) molekülüne dönüştüren enzimin tam adı aşağıdakilerden hangisidir?
Doğru Şık (D): 5-deiyodinaz
Açıklama: Tiroid hormon inaktivasyonundan sorumlu olan enzim 5-deiyodinazdır. Bu enzim, T4'ün iç halkasından bir iyot kopararak 3-3',5'-T3 formunu, yani reseptör aktivasyonu yapamayan inaktif rT3'ü sentezler. C şıkkındaki 5'-deiyodinaz dış halkadan iyot kopararak aktif T3'ü üreten zıt enzimdir, bu ayrım periferik tiroid hormon hemostazının temelidir.

**Soru 2 (ID: ed3d83c7-52a0-4cee-97b5-3ccec48ec0d3)**
Soru Kökü: Tiroid bezinden dolaşıma en yüksek oranda T4 (tiroksin) salınmasına rağmen, dokularda hücresel mekanizmayı harekete geçiren esas biyoaktif molekül T3'tür. Karaciğer, böbrek ve kas gibi periferik dokularda, inaktif prohormon olan T4'ü dış halkasından bir iyot kopararak aktif T3'e dönüştüren enzim aşağıdakilerden hangisidir?
Doğru Şık (C): 5'-deiyodinaz (D1 ve D2)
Açıklama: Periferik dokularda, T4'ün %80'i deiyodinaz enzimleri tarafından T3 veya reverse-T3'e çevrilir; T4'ü fizyolojik olarak en aktif olan T3'e dönüştüren enzim 5'-deiyodinazdır. 5-deiyodinaz enzimi ise T4'ün iç halkasından iyot kopararak metabolik olarak inaktif olan reverse-T3 (rT3) oluşumuna yol açar. Bu mekanizma, organizmanın metabolizma hızını doku düzeyinde ayarlamasını sağlayan önemli bir regülatördür.

---

### ÇİFT 31 (Benzerlik: 0.81)

**Soru 1 (ID: 4fef870e-2478-460b-99ae-6b1fe3061df6)**
Soru Kökü: İnsülinin hücresel hedef dokularda enerji depolarının korunmasını sağlayan spesifik enzimatik etkileriyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Yağ dokusu içinde hormona duyarlı lipazı (HSL) güçlü şekilde aktive eder
Açıklama: İnsülin, depo yağlarının parçalanmasını engellemek için adiposit içindeki 'hormona duyarlı lipaz' (HSL) enzimini inhibe eder. Bu sayede trigliserit yıkımı azalır ve serbest yağ asidi çıkışı baskılanır. Endotel yüzeyindeki lipoprotein lipazı (LPL) ise dolaşımdaki lipidleri hücreye sokmak amacıyla aktive eder.

**Soru 2 (ID: 9465a4f4-a646-47ac-baf1-838b046be127)**
Soru Kökü: İnsülin hormonunun hedef dokulardaki metabolik etkileriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Yağ dokusunda hormona duyarlı lipazı aktive eder
Açıklama: İnsülin anabolik bir hormondur ve yağ dokusunda hücre içi trigliserid yıkımını sağlayan 'hormona duyarlı lipazı' aktive etmez, aksine inhibe eder. Tam tersine lipojenezi uyarır ve trigliserid sentezini artırır. Glikojenoliz, ketogenez ve glukoneogenez gibi katabolik yıkım yolları insülin yüksekliğinde tamamen baskılanır.

---

### ÇİFT 32 (Benzerlik: 0.81)

**Soru 1 (ID: 8dbe9782-d255-4567-97a0-8213b1680dc6)**
Soru Kökü: Bir aylık erkek bebek, uzamış sarılık, kaba sesle ağlama ve göbek fıtığı şikayetleriyle çocuk hastalıkları polikliniğine getiriliyor. Laboratuvar testlerinde TSH düzeyi belirgin yüksek, serbest T4 düzeyi ise düşük bulunuyor. Bu yenidoğan hipotiroidisi tablosunun **en olası** nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Tiroid bezi disgenezisi
Açıklama: Yenidoğan döneminde görülen konjenital hipotiroidinin açık ara en sık görülen nedeni tiroid bezi disgenezisidir (agenezis, hipoplazi veya ektopik yerleşim). İyot eksikliği daha çok endemik bölgelerde guatr ile seyreden maternal bir faktördür. Disgenezis durumunda tiroid dokusu yeterince gelişmediği için tiroid hormon sentezi yapılamaz ve klinik olarak mental retardasyona gidebilecek kretinizm bulguları başlar.

**Soru 2 (ID: 92b0f6cd-9d82-4cdb-b9fa-5f746eb87944)**
Soru Kökü: Altı haftalık bir yenidoğan, çocuk polikliniğine uzamış fizyolojik sarılık, ağlarken fark edilen çok kaba ses, göbek fıtığı ve kaba saç teli görünümü şikayetleriyle getirilmiştir. Klinik olarak konjenital hipotiroidi (kretinizm) düşünülen bu bebekte, toplumda saptanan en sık etyolojik neden aşağıdakilerden hangisidir?
Doğru Şık (C): Embriyolojik tiroid bezi disgenezisi
Açıklama: Yenidoğan (konjenital) hipotiroidizminin günümüz toplumlarındaki en sık sebebi, organogenez sırasındaki göç bozuklukları veya anatomik gelişim yetersizliklerini kapsayan tiroid bezi disgenezisidir (agenezi, ektopi veya hipoplazi). İyot eksikliği dünya genelinde endemik bölgelerde ilk sırayı alsa da, standart toplum analizlerinde disgenezis en sık rastlanan etyolojidir. Tabloya eşlik eden göbek fıtığı ve kaba ses klasik muayene bulgularıdır.

---

### ÇİFT 33 (Benzerlik: 0.80)

**Soru 1 (ID: 4c6fbf1d-2386-4f54-b399-d71e7a9ad394)**
Soru Kökü: Nörohipofiz, ön hipofizden farklı olarak klasik anlamda kendi hormonunu sentezleyen glandüler epitelyal hücreler içermez. Hipotalamustan inen magnoselüler nöronların miyelinsiz aksonlarına arka lobda yapısal ve metabolik destek sağlayan, astrosit benzeri özelleşmiş glial hücreler aşağıdakilerden hangisidir?
Doğru Şık (C): Pitusitler
Açıklama: Pitusitler, arka hipofizde (pars nervoza) yer alan ve doğrudan hormon sentezlemeyip inen aksonlara mekanik/destek fonksiyonu sunan özelleşmiş glial hücrelerdir. Oligodendrositler merkezi sinir sisteminde miyelinasyon yaparken, nörohipofizdeki aksonlar miyelinsizdir. Hormonlar (ADH ve Oksitosin) hipotalamusta üretilir ve pitusitlerin çevrelediği akson terminallerinden doğrudan kana verilir.

**Soru 2 (ID: 7fc75770-623c-45be-80c4-6a1e18a9954f)**
Soru Kökü: Oksitosin ve ADH (Vazopressin) hormonlarının kana salgılandığı anatomik bölge olan nörohipofizde salgı epiteli hücreleri bulunmaz. Bunun yerine miyelinsiz nöron aksonlarına eşlik eden özel glial destek hücreleri bulunur. Nörohipofize özgü bu yapısal glial hücreler aşağıdakilerden hangisidir?
Doğru Şık (A): Pitusit
Açıklama: Nörohipofiz (arka hipofiz) hormon sentezleyen bez dokusu değildir; hipotalamustaki magnoselüler nöronların uzantılarını barındırır. Bu aksonal uzantılara destek olan, astrosit benzeri glial hücrelere pitusit adı verilir. Herring cisimciği akson ucu vezikül kümelerine verilen addır, hücre değildir.

---

### ÇİFT 34 (Benzerlik: 0.80)

**Soru 1 (ID: 2a92a87e-8d78-46c8-9722-b68e4ce77c76)**
Soru Kökü: Büyüme hormonunun (GH) organizma üzerindeki farklı etkileri direkt veya indirekt mekanizmalarla gerçekleşir. Buna göre;
I. Karaciğerden glukoz çıkışını artırması (diabetojenik etki)
II. Kondrositlerde mitozu artırarak boy uzamasını sağlaması
III. Yağ dokusunda lipoliz ile serbest yağ asidi miktarını artırması
etkilerinden hangileri büyüme hormonunun aracısız (direkt) etkilerindendir?
Doğru Şık (A): I ve III
Açıklama: Büyüme hormonunun lipoliz yaparak serbest yağ asitlerini artırması ve glukozun kas içine girişini engelleyip karaciğerden çıkışını artırması (anti-insülin/diabetojenik) doğrudan kendi reseptörleri aracılığıyla olan etkilerdir (I ve III). Ancak, kıkırdak ve kemikteki kondrosit mitozu ve protein sentezi (boy uzaması), karaciğerden sentezini uyardığı Somatomedin C (IGF-1) molekülü üzerinden gerçekleşen indirekt bir etkidir (II).

**Soru 2 (ID: 3b3a5dc6-113a-4cda-8d79-3ecd61407a28)**
Soru Kökü: Büyüme hormonunun lipit (yağ) metabolizması dinamikleri üzerindeki etkisi dikkate alındığında;
I. Yağ dokusunda lipolizi aktive ederek plazma serbest yağ asitlerini yükseltir.
II. Karaciğerde LDL reseptör üretimini artırarak plazma kolesterol seviyesini belirgin şekilde azaltır.
III. Artan trigliserid yıkımı sonucunda, vücudu enerji substratı olarak yağları kullanmaya yönlendirir.
ifadelerinden hangileri doğrudur?
Doğru Şık (D): I, II ve III
Açıklama: Büyüme hormonu genel lipolitik etkisi ile yağ dokusunda trigliseridleri parçalar ve kana ciddi oranda serbest yağ asidi salınmasını sağlar (I ve III doğru). Ayrıca karaciğerde safra asidi dönüşümü ve LDL klirensi gibi mekanizmaları aktive ederek plazmada bulunan kolesterol miktarının azalmasını sağlar (II doğru). Bu yolla kasların enerjiyi karbonhidrattan değil lipitlerden elde etmesine izin verir.

---

### ÇİFT 35 (Benzerlik: 0.80)

**Soru 1 (ID: 4765184a-2dff-4942-95cb-ffec0b329c67)**
Soru Kökü: Yirmi dört yaşında kadın hasta, son altı aydır adet görememe (amenore) ve göğüslerinden süt gelmesi (galaktore) şikayetleriyle başvuruyor. Hastanın MR incelemesinde hipofizde laktotrop kaynaklı bir mikroadenom (prolaktinoma) saptanıyor. Bu hastada patolojik hormon sekresyonunu medikal olarak baskılamak amacıyla verilecek olan dopamin agonistlerinin taklit ettiği endojen inhibitör (PIH) ajan aşağıdakilerden hangisidir?
Doğru Şık (A): Dopamin
Açıklama: Hipotalamustan salgılanan dopamin, aynı zamanda Prolaktin İnhibe Edici Hormon (PIH) olarak görev yapar ve ön hipofizdeki laktotrop hücreler üzerinde sürekli tonik bir baskı kurar. Somatostatin büyüme hormonunu baskılarken, TRH ise prolaktin salgısını uyarıcı etki yapar. Bu nedenle prolaktinoma tedavisinde hipersekresyonu engellemek için dopamin agonistleri (örn. bromokriptin, kabergolin) ilk basamak tedavidir.

**Soru 2 (ID: 4c8e7ca3-1374-4925-a4e9-932c7f5c4ac9)**
Soru Kökü: Otuz beş yaşındaki kadın hastanın çekilen kranial MR'ında adenohipofiz kaynaklı prolaktinoma tespit ediliyor. Medikal tedavi amacıyla hastaya prolaktin sekresyonunu baskılayacak bir ajan başlanması planlanıyor. Bu hastada hedeflenen mekanizma üzerinden prolaktin salgısını azaltması **beklenmeyen** faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Tirotropin salgılatıcı hormon (TRH)
Açıklama: TRH (Tirotropin salgılatıcı hormon), hipotalamustan salgılanan ve adenohipofizden TSH'ın yanı sıra prolaktin salgısını da güçlü bir şekilde uyaran faktördür. Dopamin (PIH) ve farmakolojik dopamin agonistleri ise prolaktin salgısını baskılayan birincil mekanizmayı oluşturur; bu nedenle prolaktinoma tedavisinde agonistler tercih edilir. Somatostatin de laktotrop hücreler üzerinde zayıf inhibe edici etkiye sahiptir.

---

### ÇİFT 36 (Benzerlik: 0.80)

**Soru 1 (ID: a7fd787d-439b-43e5-aa02-d386df5579eb)**
Soru Kökü: Tiroid dışı dokularda, öncü prohormon olan T4'ün dış halkasından bir iyot atomunu ayırarak onu biyolojik etkinliği en yüksek form olan aktif T3 molekülüne dönüştüren spesifik enzim aşağıdakilerden hangisidir?
Doğru Şık (C): 5'-deiyodinaz
Açıklama: Dolaşımdan hücre içine giren T4, periferik dokularda (özellikle karaciğer ve kaslarda) 5'-deiyodinaz (Tip 1 ve Tip 2) enzimi kullanılarak aktif T3'e çevrilir. Bu reaksiyonda T4'ün dış halkasındaki (5' pozisyonundaki) iyot molekülü ayrılır. 5-deiyodinaz (Tip 3 deiyodinaz) ise iç halkadaki iyodu ayırarak T4'ü inaktif form olan rT3'e çeviren enzimdir.

**Soru 2 (ID: be45042e-a9bd-4b58-a056-da82ff002852)**
Soru Kökü: Karaciğer dokusunda T4 metabolizması iki zıt fizyolojik yolakta ilerleyebilir. T4'ü biyolojik aktivitesi olmayan ve periferik etkileri bulunmayan rT3 (reverse T3) molekülüne dönüştüren enzimin tam adı aşağıdakilerden hangisidir?
Doğru Şık (D): 5-deiyodinaz
Açıklama: Tiroid hormon inaktivasyonundan sorumlu olan enzim 5-deiyodinazdır. Bu enzim, T4'ün iç halkasından bir iyot kopararak 3-3',5'-T3 formunu, yani reseptör aktivasyonu yapamayan inaktif rT3'ü sentezler. C şıkkındaki 5'-deiyodinaz dış halkadan iyot kopararak aktif T3'ü üreten zıt enzimdir, bu ayrım periferik tiroid hormon hemostazının temelidir.

---

### ÇİFT 37 (Benzerlik: 0.80)

**Soru 1 (ID: 62d00c4d-7f8b-4475-972c-444ced03a481)**
Soru Kökü: Uzun süreli aşırı kortizol maruziyeti sonucu gelişen Cushing sendromlu bir hastada; karın bölgesinde mor strialar (çatlaklar) oluşması, derinin incelmesi ve basit travmalarla bile şiddetli ekimozlar (kanama odakları) görülmesinin fizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Kortizolün fibroblastlar üzerinde tip 1 kollajen sentezini ve aktivitesini ciddi şekilde baskılaması
Açıklama: Kortizol katabolik bir hormondur; iskelet kası ve bağ dokusunda protein yıkımını artırır ve yeni protein sentezini engeller. Dermal ve damar duvarı dayanıklılığını sağlayan temel yapıtaşı olan Tip 1 kollajenin fibroblastlarca sentezini baskılar. Bağ dokusu desteğini kaybeden kılcal damarlar kolayca çatlar (ekimoz) ve gerilen deri dermisi yırtılarak mor striaları oluşturur.

**Soru 2 (ID: 7ec10c9a-79dd-4f92-afea-aeeb668d82f3)**
Soru Kökü: Otuz sekiz yaşında kadın hasta, son bir yılda özellikle gövdesinde belirginleşen kilo artışı, ense kökünde yağ birikimi (bizon hörgücü), aydede yüz ve karın bölgesinde geniş mor çatlaklar (stria) şikayetleriyle kliniğe başvuruyor. Cushing sendromu tespit edilen hastanın karın cildindeki mor çatlakların oluşumunun hücresel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Glikokortikoidlerin dokudaki fibroblastları baskılayarak tip I kollajen sentezini bozması
Açıklama: Kortizol fazlalığı protein katabolizmasını şiddetli şekilde artırır. Kemik matriksinde ve ciltte bulunan fibroblastların aktivitesini baskılayarak başta tip I kollajen olmak üzere yapısal proteinlerin sentezini engeller. Derialtı kollajen ağının zayıflaması ile cilt mekanik gerilime dayanamaz ve kolayca yırtılır. İnceltilmiş epidermisin altından alttaki damarların görünmesi strialara o karakteristik mor/kırmızı rengini verir.

---

### ÇİFT 38 (Benzerlik: 0.79)

**Soru 1 (ID: 167e1ce5-0c62-49e6-bcde-87a77af4fcbc)**
Soru Kökü: Kırk beş yaşında kadın hasta; son zamanlarda seste kalınlaşma, kilo artışı, soğuğa tahammülsüzlük ve cildinde çukurlaşmayan hamurumsu bir ödem şikayetiyle başvuruyor. Yapılan muayenede hipotiroidi tanısı konan bu hastada görülen ödemin (miksödem) patofizyolojisinde yatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Tiroid hormon yokluğunda cilt altında biriken ve yıkılamayan glikozaminoglikanların yüksek miktarda su tutması
Açıklama: Tiroid hormonları dokularda glikozaminoglikan (GAG) turnoverini (yapım/yıkım döngüsünü) düzenler. Hipotiroidizm durumunda bu turnover bozulur ve hücreler arası alanda özellikle hiyalüronik asit gibi yıkılamayan glikozaminoglikanlar birikmeye başlar. GAG'lar hidrofilik özellikte olduklarından osmotik olarak suyu kendi üzerlerine çekerek ciltte bastırmakla iz bırakmayan, sert (non-pitting) 'miksödem' tablosunu oluştururlar.

**Soru 2 (ID: f02ca713-b272-465c-9a9d-24d03f8eca61)**
Soru Kökü: Otoimmün tiroiditi nedeniyle medikal tedavi alan ancak ilaçlarını düzensiz kullanan 55 yaşında kadın hastanın fizik muayenesinde; ciltte soğukluk, pretibial bölgede gode bırakmayan ödem ve kaba yüz hatları saptanıyor. Hastada bu tabloya yol açan asıl mekanizma, hipotiroidizm zemininde aşağıdaki moleküllerden hangisinin yıkılamayıp su tutmasına bağlıdır?
Doğru Şık (B): Glikozaminoglikan
Açıklama: Tiroid hormonları normal şartlarda bağ dokusunda glikozaminoglikan turnoverini sağlar. Hipotiroidizm durumunda bu dönüşüm durur ve yıkılamayan glikozaminoglikanlar interstisyel alanda birikerek aşırı miktarda su tutar. Bu patolojik birikim klinik olarak miksödem adını verdiğimiz gode bırakmayan ödem formunu ortaya çıkarır.

---

### ÇİFT 39 (Benzerlik: 0.79)

**Soru 1 (ID: 092f91d6-865f-4783-adae-56042f547768)**
Soru Kökü: Adrenal glikokortikoidlerin (kortizol) doku hasarına ve enfeksiyona karşı gelişen inflamatuvar yanıtı güçlü bir şekilde baskıladığı bilinmektedir. Kortizolün immünsüpresif etkisine aracılık eden temel intraselüler mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Hücre çekirdeğindeki Nükleer Faktör-kappa B (NF-kB) yolağını inhibe ederek İnterlökin-2 (IL-2) üretimini azaltması
Açıklama: Kortizolün güçlü anti-inflamatuar ve immünsüpresif etkisi, inflamatuvar sitokinlerin gen transkripsiyonunu sağlayan ana şalter olan Nükleer Faktör-kappa B (NF-kB) proteinini bloke etmesine dayanır. Bu inhibisyon özellikle T-lenfositlerin klonal proliferasyonunu sağlayan İnterlökin-2 (IL-2) sentezini durdurur. Nötrofil sayısı kortizol etkisiyle kanda azalmaz, aksine marjinasyon bozulduğu için kanda dolaşan nötrofil sayısı (PMNL) artar.

**Soru 2 (ID: b367528c-1e89-48cc-8424-e608f205d1c3)**
Soru Kökü: Glikokortikoidlerin klinik tedavide sıklıkla kullanılmasını sağlayan güçlü anti-enflamatuvar ve immünsüpresif özellikleri bulunmaktadır. Kortizolün T lenfosit proliferasyonunu hücresel boyutta baskılayan mekanizması aşağıdakilerden hangisine dayanır?
Doğru Şık (E): Çekirdekteki Nükleer Faktör-kappa B'yi (NF-κB) inhibe ederek interlökin-2 (IL-2) üretimini engellemesine
Açıklama: Kortizol immün sistem hücrelerine girdiğinde, inflamasyonun ana genetik şalterlerinden biri olan Nükleer Faktör-kappa B (NF-kB) kompleksini inaktif halde tutar. NF-kB'nin inhibisyonu, T hücre çoğalması ve inflamasyon için kritik olan interlökin-2 (IL-2) ve IL-1 gibi sitokinlerin transkripsiyonunu baskılar ve güçlü bir immünsüpresyon oluşturur.

---

### ÇİFT 40 (Benzerlik: 0.79)

**Soru 1 (ID: 8339313b-3c89-49e0-967a-7bde56c6b015)**
Soru Kökü: Tiroid hormon sentezi aşamalarında, folikül hücrelerinin bazolateral membranından sodyum ile birlikte hücre içine alınan iyodürün (I-), apikal membran üzerinden kolloid lümenine klor ile yer değiştirerek taşınmasını sağlayan özgül protein aşağıdakilerden hangisidir?
Doğru Şık (C): Pendrin
Açıklama: Pendrin, folikül hücresinin apikal membranında yer alan ve iyodürü klor iyonuyla değiştirerek kolloide aktaran transport proteinidir. Sodyum-iyot simportu (NIS) ise iyodu kandan folikül hücresi içine almakla görevli olup bazolateral zarda lokalizedir. Megalin, tiroglobulinin pinositozla geri alınmasında görev yapar.

**Soru 2 (ID: c3887790-cf0a-41d1-89fd-1308ae3465d7)**
Soru Kökü: Tiroid hormon sentezi sürecinde, kandaki iyodürün (I-) foliküler hücreye aktif olarak alınmasını sağlayan, tiroid hormon üretiminin hız kısıtlayıcı basamağı olan ve yüksek plazma iyot düzeylerinde inhibe olarak Wolf-Chaikoff etkisine aracılık eden protein aşağıdakilerden hangisidir?
Doğru Şık (C): Sodyum-iyot simport proteini (NIS)
Açıklama: İyot iyonları tiroid foliküler hücrelerinin bazolateral membranından sodyum-iyot simport proteini (NIS) ile hücre içine aktif transportla alınır ki bu aşama sentezin hız kısıtlayıcı basamağıdır. Yüksek ekstraselüler iyot konsantrasyonu NIS aktivitesini baskılayarak tiroid sentezini durdurur ve bu otoregülasyon mekanizmasına Wolf-Chaikoff etkisi denir. Pendrin ise iyodu lümene taşıyan apikal yerleşimli klor-iyot değiştirici proteindir.

---

### ÇİFT 41 (Benzerlik: 0.79)

**Soru 1 (ID: 4cb7a55c-8f6d-4881-8962-224b404de220)**
Soru Kökü: Otuz iki yaşında kadın hasta; terleme, çarpıntı, uykusuzluk, istirahat taşikardisi ve kilo kaybı şikayetleriyle başvuruyor. Plazma testlerinde TSH baskılanmış, serbest T3 ve T4 oldukça yüksek bulunuyor. Graves hastalığı tanısı konulan hastanın medikal tedavisinde kullanılacak olan propiltiyourasil veya metimazol gibi farmakolojik ajanların tiroid folikülünde direkt olarak inhibe ettiği hedef yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Peroksidaz enzimi
Açıklama: Antitiroid ajanlar olan propiltiyourasil (PTU) ve metimazol (tiyamazol), iyodürün oksidasyonunu ve tirozine bağlanmasını sağlayan tiroid peroksidaz enzimini doğrudan inhibe ederek tiroid hormon sentezini durdururlar. Na-iyot simportunu inhibe eden maddeler tiyosiyanat veya perklorat gibi anyonlardır. Propiltiyourasil ayrıca periferde 5'-deiyodinazı da hafif inhibe etse de asıl majör santral tiroid etkisi peroksidaz blokajıdır.

**Soru 2 (ID: b78fb952-196b-4ac8-b76f-f385eda099b9)**
Soru Kökü: Otuz iki yaşındaki kadın hastaya tirotoksikoz tanısı konulmuş ve tedavide bir tiyonamid türevi olan propiltiyourasil (PTU) reçete edilmiştir. Bu antitiroid ilacın folikül hücresindeki temel hücresel etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Apikal membrandaki peroksidaz enzimini inhibe ederek oksidasyon ve kenetlenmeyi önler
Açıklama: Propiltiyourasil (PTU) ve metimazol gibi antitiroid (tiyonamid) ilaçların ortak etki mekanizması, tiroid peroksidaz (TPO) enzimini bloke etmektir. Bu inhibisyon sayesinde iyodür oksidasyonu, iyodinasyon ve özellikle MIT/DIT kenetlenme (coupling) reaksiyonları durdurulur ve yeni tiroid hormonu sentezi engellenir. NIS pompasını bloke edenler perklorat ve tiyosiyanattır.

---

### ÇİFT 42 (Benzerlik: 0.79)

**Soru 1 (ID: 5a8c093c-653c-4194-9905-d2b0da271840)**
Soru Kökü: Egzersiz ve ağır fizyolojik stres durumlarında iskelet kasının enerji ihtiyacını karşılamak üzere glukozun kanda kalması istenir. Bu metabolik koruma refleksinin bir parçası olarak, aşağıdaki otonomik reseptör sinyallerinden hangisi pankreas beta hücrelerindeki insülin salgısını güçlü bir şekilde baskılar?
Doğru Şık (A): Alfa-adrenerjik uyarı
Açıklama: Stres ve travma anında salınan katekolaminler, pankreas beta hücrelerindeki alfa-adrenerjik reseptörleri aktive ederek insülin salınımını dramatik olarak baskılar. Bu durum kandaki glukozun kas veya yağ dokusuna insülin aracılı olarak değil, doğrudan santral sinir sistemine gitmesini güvence altına alır. Parasempatik (kolinerjik) veya beta-adrenerjik uyarım ise aksine insülin salgısını artırıcı etki gösterir.

**Soru 2 (ID: e2c66b94-9309-4d5e-84c6-6717323c8b3a)**
Soru Kökü: Kan glukoz dengesinin otonom sinir sistemi regülasyonunda, stres veya ağır egzersiz anında pankreas beta hücrelerinden insülin salgısını doğrudan inhibe eden nörotransmitter reseptörü aşağıdakilerden hangisidir?
Doğru Şık (B): Alfa-adrenerjik
Açıklama: Pankreas beta hücrelerinde sempatik sistemin inhibitör etkisi, membranlarında bulunan alfa-adrenerjik reseptörler üzerinden gerçekleşir. Bu mekanizma, stres anında kanda insülinin düşmesini ve glukagon/epinefrin etkisiyle kan şekerinin beyin kullanımına sunulmak üzere artırılmasını garanti altına alır. Parasempatik asetilkolin uyarısı ise insülin salgısını artırır.

---

### ÇİFT 43 (Benzerlik: 0.79)

**Soru 1 (ID: b1fcf050-3f5c-4903-a0ad-95a8f834c6f6)**
Soru Kökü: Hücre çekirdeğindeki tiroid hormon reseptörlerine yüksek afinite ile bağlanan ve mRNA sentezini indükleyerek Na-K ATPaz aktivitesi, oksijen tüketimi ve kalorijenik etkilerin büyük kısmından sorumlu olan fizyolojik açıdan en aktif tiroid hormonu aşağıdakilerden hangisidir?
Doğru Şık (B): Triiyodotironin (T3)
Açıklama: Triiyodotironin (T3), tiroid bezinden sadece %7 oranında salgılanmasına rağmen, periferik dokularda T4'ün deiyodinasyonuyla üretimi desteklenen ve tiroid nükleer reseptörlerine afinitesi T4'e göre yaklaşık 10-15 kat daha yüksek olan hormondur. Büyüme, bazal metabolizma hızı artışı ve kalorijenik etkileri hücresel düzeyde tetikleyen esas aktif form T3'tür.

**Soru 2 (ID: dae476de-6090-4c9e-b991-09f22f22578e)**
Soru Kökü: Sağlıklı bir insanda tiroid bezinden kana salgılanan hormonların yaklaşık %93'ünü oluşturan ancak hedef dokulardaki nükleer reseptör afinitesi oldukça düşük olduğundan bir 'öncü hormon' olarak kabul edilen molekül aşağıdakilerden hangisidir?
Doğru Şık (A): Tiroksin (T4)
Açıklama: Tiroid foliküllerinden dolaşıma en yüksek oranda (%93) salgılanan hormon 3,5-3',5'-tetraiyodotironin, yani Tiroksin (T4)'dir. Ancak T4'ün nükleer tiroid reseptörüne afinitesi ve fizyolojik aktivitesi çok zayıftır. Periferik dokulara (karaciğer, böbrek, kas) ulaştığında yapısındaki bir iyot molekülünün koparılmasıyla asıl aktif form olan T3'e dönüştürülerek biyolojik etkisini gösterir.

---

### ÇİFT 44 (Benzerlik: 0.79)

**Soru 1 (ID: 06206639-fc91-42aa-a406-0e7fcdc5d023)**
Soru Kökü: Protein içerikli zengin bir yemek sonrasında ve fiziksel egzersiz sırasında salgılanması belirgin şekilde artan, aktivasyonu temel olarak kolinerjik (parasempatik) denetim altında gerçekleşen pankreas kaynaklı hormon aşağıdakilerden hangisidir?
Doğru Şık (D): Pankreatik polipeptid
Açıklama: Pankreatik polipeptid (PP), pankreasın F hücrelerinden salgılanır ve salınımı dominant olarak vagal (kolinerjik) yolaklarla kontrol edilir. Egzersiz, proteinli diyet ve akut hipoglisemi parasempatik aktiviteyi tetikleyerek F hücrelerinden PP deşarjına neden olur. İnsülin ve glukagonun temel regülasyonu ise otonom sinir sisteminden ziyade kan glukoz ve aminoasit seviyelerine doğrudan duyarlılıkla sağlanır.

**Soru 2 (ID: af90d115-ebf1-47e4-ac53-cebdfe6e9566)**
Soru Kökü: Langerhans adacıklarının yaklaşık %5'lik kısmını oluşturan, salgılanması tamamen kolinerjik denetim altında olan ve özellikle protein içeren yemek sonrası veya akut hipoglisemik stres durumunda kana salınan hormon aşağıdakilerden hangisidir?
Doğru Şık (D): Pankreatik polipeptid
Açıklama: Pankreatik polipeptid, Langerhans adacıklarındaki F hücreleri tarafından sentezlenir ve parasempatik (kolinerjik) stimülasyonla sekresyonu artar. Protein ağırlıklı diyetler ve akut egzersiz gibi durumlar bu hücrelerin temel tetikleyicisidir. Gastrointestinal kanalda insülin veya glukagon dışındaki destekleyici adacık yanıtını organize eder.

---

### ÇİFT 45 (Benzerlik: 0.79)

**Soru 1 (ID: 9c481527-55e9-4335-9098-1b0100e84a21)**
Soru Kökü: Toplumda hipertiroidinin en sık sebebi olan Graves hastalığında, tiroid hormon yüksekliğinden bağımsız olarak gelişen ve otoimmün karakter taşıyan ekzoftalmi (gözlerin öne fırlaması) bulgusunun spesifik hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): TSH reseptörüne bağlanan otoantikorların retrobulber fibroblastlarda glikozaminoglikan sentezini artırması
Açıklama: Graves hastalığı, tiroid bezindeki TSH reseptörlerini uyaran otoantikorlar (TSI) nedeniyle oluşur. İlginç bir şekilde, bu TSH reseptörleri sadece tiroidde değil, retrobulber (göz arkası) bağ dokusundaki fibroblastların yüzeyinde de bulunur. Otoantikorlar bu fibroblastları uyararak lokal glikozaminoglikan (su tutucu matriks) üretimini artırır ve doku şişerek göz küresini öne iter.

**Soru 2 (ID: f32e65df-a71d-4ba4-9111-521f2eba6a35)**
Soru Kökü: Graves hastalığına bağlı olarak gelişen ekzoftalminin patogenezinde, retrobulber alandaki fibroblastların otoantikorlar tarafından uyarılması sonucunda aşağıdaki matriks elemanlarından hangisinin sentezi artar?
Doğru Şık (B): Glikozaminoglikan
Açıklama: Graves hastalığında TSH reseptörlerine karşı gelişen otoantikorlar (TSI), sadece tiroid bezini değil, aynı reseptörleri eksprese eden retrobulber bağ dokudaki fibroblastları da uyarır. Bu uyarım sonucunda fibroblastlar aşırı miktarda glikozaminoglikan sentezler. Biriken glikozaminoglikanların yüksek ozmotik gücü su çekerek retrobulber ödeme ve sonuçta ekzoftalmiye neden olur.

---

### ÇİFT 46 (Benzerlik: 0.79)

**Soru 1 (ID: 05ef171c-6d98-4f67-bd45-17cd91a94654)**
Soru Kökü: Kırk beş yaşında erkek hasta, son yıllarda ellerinde ve ayaklarında belirgin büyüme ile terleme artışı şikayetleriyle başvuruyor. Yapılan laboratuvar incelemesinde açlık kan şekeri 126 mg/dL saptanıyor ve hastaya büyüme hormonu (GH) salgılayan hipofiz adenomu tanısı konuluyor. Bu hastada gözlenen hipergliseminin en olası temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): İskelet kasında glikoz girişinin engellenmesi (anti-insülin etki)
Açıklama: Büyüme hormonu (GH), kas ve yağ dokusunda glikoz alımını doğrudan bloke ederek insülinin karşısında (anti-insülin) etki gösterir. Bu durum dokuların glikoz kullanımını azaltır ve karaciğerden glikoz çıkışını (diyabetojenik etki) artırarak kan şekerini yükseltir. Pankreas hücrelerinde harabiyet birincil neden değil, uzun dönem hipergliseminin sekonder sonucu olabilir.

**Soru 2 (ID: a120e4e6-d87a-4e34-b083-8e5e84813dc7)**
Soru Kökü: Elli yaşında, çenesinde ve ellerinde son on yılda patolojik büyüme tespit edilen, kanda büyüme hormonu yüksekliğine bağlı akromegali tanısı alan bir erkek hastada, kontrol altına alınamayan kronik hiperglisemi (ikincil diyabet) saptanıyor.
Bu hastadaki hiperglisemik tablonun ortaya çıkmasında, büyüme hormonunun karbonhidrat metabolizmasına ait hangi etkisi ana rol oynamaktadır?
Doğru Şık (C): Özellikle kas dokusunda membran glukoz taşıyıcılarını bloke edip insülin direncine yol açarak anti-insülin etki yaratması
Açıklama: Büyüme hormonu (GH), kaslarda hücre içine glikoz girişini inhibe eder ve aynı zamanda karaciğerden glukoneogenez ile kana bol miktarda glikoz salınımını tetikler. Bu fizyolojik değişiklikler neticesinde vücut hücreleri insülinin hipoglisemik etkisine karşı direnç geliştirir ve bu olaya Büyüme hormonunun 'anti-insülin' veya 'diyabetojenik' etkisi denir. Hastadaki uzun süreli sekonder diyabet bu güçlü insülin direncinin sonucudur.

---

### ÇİFT 47 (Benzerlik: 0.79)

**Soru 1 (ID: 99031747-65ee-4cec-be24-c6569f680488)**
Soru Kökü: Otuz dört yaşında kadın hasta sinirlilik, çarpıntı, kilo kaybı ve gözlerin öne doğru fırlaması (ekzoftalmi) şikayetleriyle başvuruyor. Muayenede difüz tiroid büyümesi (guatr) ve laboratuvarda serbest T3, T4 yüksekliği saptanıyor. Graves hastalığı tanısı konan bu hastada, ekzoftalmi tablosunu oluşturan primer mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): TSH reseptörü benzeri otoantikorların retrobulber fibroblastları uyararak glikozaminoglikan sentezini artırması
Açıklama: Graves hastalığında sentezlenen otoantikorlar sadece tiroid bezini uyarmakla kalmaz, aynı zamanda göz arkasındaki retrobulber fibroblastların üzerinde de bulunan TSH reseptörlerine bağlanır. Bu bağlanma fibroblastları aktive ederek ortama bol miktarda glikozaminoglikan sentezletir ve su tutulumu ile gelişen hacim artışı ekzoftalmiye neden olur. Bu patogenez doğrudan tiroid hormonlarının değil, otoantikorların çapraz reaksiyonunun bir sonucudur.

**Soru 2 (ID: 9c481527-55e9-4335-9098-1b0100e84a21)**
Soru Kökü: Toplumda hipertiroidinin en sık sebebi olan Graves hastalığında, tiroid hormon yüksekliğinden bağımsız olarak gelişen ve otoimmün karakter taşıyan ekzoftalmi (gözlerin öne fırlaması) bulgusunun spesifik hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): TSH reseptörüne bağlanan otoantikorların retrobulber fibroblastlarda glikozaminoglikan sentezini artırması
Açıklama: Graves hastalığı, tiroid bezindeki TSH reseptörlerini uyaran otoantikorlar (TSI) nedeniyle oluşur. İlginç bir şekilde, bu TSH reseptörleri sadece tiroidde değil, retrobulber (göz arkası) bağ dokusundaki fibroblastların yüzeyinde de bulunur. Otoantikorlar bu fibroblastları uyararak lokal glikozaminoglikan (su tutucu matriks) üretimini artırır ve doku şişerek göz küresini öne iter.

---

### ÇİFT 48 (Benzerlik: 0.79)

**Soru 1 (ID: d9b7c547-d2aa-4baf-81d0-e8fc4f12f676)**
Soru Kökü: Tiroid hormon biyosentezinde lümene geçen iyodürün (I-) reaktif iyota (I0) dönüştürülmesi (oksidasyon) ile monoiyodotirozin ve diiyodotirozinlerin birleşerek T3/T4 hormonlarını oluşturduğu (kenetlenme) aşamaları katalizleyen tek membran enzimi aşağıdakilerden hangisidir?
Doğru Şık (C): Tiroid peroksidaz
Açıklama: Tiroid folikül hücresinin apikal membranında yer alan tiroid peroksidaz (TPO) enzimi; hidrojen peroksit (H2O2) varlığında iyodürün oksitlenmesi, iyodun tirozine bağlanması (bu aşamayı iyodinaz hızlandırsa da reaksiyon kompleksini TPO da destekler) ve özellikle MIT ile DIT'lerin eşleşerek (coupling/kenetlenme) T3 ve T4'ü oluşturması aşamalarının tümünde katalizör görevi üstlenir. Hashimoto tiroiditinde hedef olan anti-TPO antikorları bu enzime karşı gelişir.

**Soru 2 (ID: f4978766-391e-46f5-a74b-c40d9ca57a24)**
Soru Kökü: Tiroid bezi foliküler epitel hücreleri tarafından kandan sodyum gradyanıyla (NIS) alınan inorganik iyodür (I-), lümene geçtikten sonra reaktif bir form olan iyota (I+ veya I0) dönüştürülmelidir. Hidrojen peroksit (H2O2) varlığında gerçekleşen ve tiroid hormon sentezi için mutlak gerekli olan bu oksidasyon reaksiyonunu katalizleyen enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksidaz
Açıklama: İyodür iyonunun inorganik iyoda çevrildiği kritik oksidasyon basamağı tiroid peroksidaz (TPO) enzimi tarafından gerçekleştirilir. Pendrin sadece iyodürün folikül hücresinden lümene geçişini sağlayan bir klor-iyot değiştirici kanaldır. Peroksidaz eksikliği, oksidasyonun ve dolayısıyla tüm tiroid sentezinin durmasına neden olur.

---

### ÇİFT 49 (Benzerlik: 0.79)

**Soru 1 (ID: 62ab7281-b2f3-4da7-aa28-a37dedb38eca)**
Soru Kökü: Pankreas adacık hücrelerinin yaklaşık %10'unu oluşturan ve salgıladığı hormon ile lokal (parakrin) etki göstererek hem insülin hem de glukagon sekresyonunu güçlü şekilde inhibe eden hücreler aşağıdakilerden hangisidir?
Doğru Şık (D): Delta hücreleri
Açıklama: Delta hücreleri pankreas adacıklarının %10'unu oluşturur ve somatostatin sentezler. Pankreatik somatostatin, tıpkı hipotalamik versiyonu gibi güçlü bir inhibitördür; adacık içi parakrin etkiyle hem alfa hücrelerinden glukagonu hem de beta hücrelerinden insülini baskılayarak besinlerin hücreye hızlı geçişini tamponlar.

**Soru 2 (ID: 881ab99b-6e48-460d-a960-a89577564ee9)**
Soru Kökü: Endokrin pankreası oluşturan Langerhans adacıkları, kan glukoz düzeyini hassas bir denge içinde tutmak için parakrin iletişim halindedir. Pankreatik delta (Δ) hücreleri tarafından sentezlenen ve lokal olarak hem insülin hem de glukagon salgısını güçlü bir şekilde inhibe eden peptid yapılı molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Somatostatin
Açıklama: Somatostatin, endokrin pankreastaki delta (Δ) hücrelerinden salgılanır ve adacık içerisindeki parakrin etkisiyle hem alfa hücrelerinden glukagon hem de beta hücrelerinden insülin salınımını güçlü bir negatif regülatör olarak baskılar. Bu çoklu inhibisyon mekanizması, adacık hormonlarının aşırı dalgalanmasını önleyen hücresel bir fren sistemidir.

---

### ÇİFT 50 (Benzerlik: 0.78)

**Soru 1 (ID: 10c019a9-3a2f-40e8-b83c-d68f3cbc4673)**
Soru Kökü: Böbrek üstü bezinin zona glomeruloza tabakasından mineralokortikoid (aldosteron) sekresyonunu tetikleyen en önemli iki fizyolojik uyarıcı faktör aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Anjiyotensin II ve hücre dışı sıvı Potasyum (K+) artışı
Açıklama: Aldosteron salgısını denetleyen ana mekanizma hipofizer-ACTH aksı değil, renal perfüzyon ile tetiklenen renin-anjiyotensin-aldosteron (RAAS) sistemi ve plazma potasyum seviyesidir. Anjiyotensin II, zona glomeruloza hücrelerindeki spesifik reseptörleri üzerinden ve artan potasyum ise doğrudan bu hücrelerin membran potansiyelini değiştirerek aldosteron sentezinde rol oynayan aldosteron sentaz enzimini güçlü şekilde aktive eder.

**Soru 2 (ID: 7e7f6bd7-5286-4598-93ca-19f8b977a254)**
Soru Kökü: Adrenal bezden aldosteron salgısını stimüle eden temel fizyolojik faktörler düşünüldüğünde, aşağıdakilerden hangisi doğrudan ve belirgin bir uyaran **değildir**?
Doğru Şık (B): Plazma sodyum konsantrasyonunda artış (hipernatremi)
Açıklama: Aldosteron salgısını tetikleyen iki büyük majör uyaran ekstraselüler K+ artışı (hiperkalemi) ve renin-anjiotensin aktivasyonudur (hipovolemi/hipotansiyon nedenli). Plazma Na+ konsantrasyonunun artması (hipernatremi) aldosteronu uyarmaz, aksine sodyum zaten yüksek olduğu için aldosteron mekanizması baskılanır.

---

### ÇİFT 51 (Benzerlik: 0.78)

**Soru 1 (ID: 51b3ae98-ea2f-4e50-b1b3-5b88e5d261f2)**
Soru Kökü: Kardiyovasküler sistem tiroid hormonlarına son derece duyarlıdır. Şiddetli bir hipertiroidi hastasının kan basıncı hemodinamiği incelendiğinde, yüksek nabız basıncına eşlik eden fizyolojik değişiklik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Artan metabolizmaya bağlı periferik vazodilatasyonun diyastolik basıncı düşürmesi
Açıklama: Hipertiroidizmde artmış doku metabolizması aşırı vücut ısısı üretir ve bunun atılması için deri ve diğer organlarda güçlü bir vazodilatasyon gerçekleşir; arteriyovenöz şantlar açılır. Bu devasa direnç düşüşü diyastolik kan basıncını bariz şekilde düşürürken, kalbin artmış atım volümü sistolik basıncı artırır. Sonuçta ortalama arter basıncı değişmese de nabız basıncı genişler. Beta reseptörler azalmaz, tam tersine artar.

**Soru 2 (ID: e8651c36-1be8-4db8-a876-04c60059b6fd)**
Soru Kökü: Otuz iki yaşında kadın hasta; aşırı terleme, çarpıntı, iştah artışına rağmen kilo kaybı şikayetleriyle başvuruyor. Muayenesinde tiroid bezi difüz hipertrofik bulunuyor, kan basıncı 150/60 mmHg (genişlemiş nabız basıncı) ve nabız 110/dk olarak ölçülüyor. Bu toktoksik hastada diyastolik kan basıncının fizyolojik seviyenin altına inmesinin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Artmış metabolik hıza ikincil ısı artışının periferik vazodilatasyona yol açması
Açıklama: Hipertiroidizmde artan bazal metabolizma hızı vücut ısısını yükseltir. Vücut bu ısıyı uzaklaştırmak için kutanöz ve periferik damarlarda yoğun vazodilatasyon (arteri-venöz şantların açılması) yapar. Periferik direncin bu denli düşmesi diyastolik kan basıncının azalmasına ve nabız basıncının genişlemesine neden olur. Kalp debisi azalmaz, aksine artar.

---

### ÇİFT 52 (Benzerlik: 0.78)

**Soru 1 (ID: 35654a12-4f27-4a80-89ef-3122ad8463fa)**
Soru Kökü: Tiroglobulin molekülü, tiroid folikül hücresi endoplazmik retikulumunda sentezlenip kolloid içine salgılanan büyük bir glikoproteindir. Okside olmuş reaktif iyotun tiroglobulin üzerindeki tirozin kalıntılarına bağlanarak iyodotirozinleri oluşturduğu 'iyodinasyon' basamağını hızlandıran spesifik enzim aşağıdakilerden hangisidir?
Doğru Şık (E): İyodinaz
Açıklama: Tiroid hormon sentezinde oksidasyon ve kenetlenme reaksiyonları esas olarak tiroid peroksidaz tarafından yürütülürken, okside olmuş reaktif iyotun tiroglobulin yapısındaki tirozin aminoasitlerine eklenmesi (iyodinasyon/organifikasyon) basamağını hızlandıran enzim iyodinazdır. Megalin folikül hücresindeki kolloid endositozunu sağlayan reseptördür, pendrin ise klor/iyot değişimi yapan bazal zarda değil apikal zardaki taşıyıcıdır.

**Soru 2 (ID: f4978766-391e-46f5-a74b-c40d9ca57a24)**
Soru Kökü: Tiroid bezi foliküler epitel hücreleri tarafından kandan sodyum gradyanıyla (NIS) alınan inorganik iyodür (I-), lümene geçtikten sonra reaktif bir form olan iyota (I+ veya I0) dönüştürülmelidir. Hidrojen peroksit (H2O2) varlığında gerçekleşen ve tiroid hormon sentezi için mutlak gerekli olan bu oksidasyon reaksiyonunu katalizleyen enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Peroksidaz
Açıklama: İyodür iyonunun inorganik iyoda çevrildiği kritik oksidasyon basamağı tiroid peroksidaz (TPO) enzimi tarafından gerçekleştirilir. Pendrin sadece iyodürün folikül hücresinden lümene geçişini sağlayan bir klor-iyot değiştirici kanaldır. Peroksidaz eksikliği, oksidasyonun ve dolayısıyla tüm tiroid sentezinin durmasına neden olur.

---

### ÇİFT 53 (Benzerlik: 0.78)

**Soru 1 (ID: 93a321c2-a309-407a-89ee-11feb565e5a3)**
Soru Kökü: Cushing hastalığı tanısı konulan ve hipofizinde ACTH üreten bir adenom bulunan hastaya deksametazon supresyon testi yapıldığında meydana gelen fizyolojik yanıtın hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Kortizol analogunun CRH-ACTH eksenini negatif feedback ile baskılaması
Açıklama: Deksametazon supresyon testi, dışarıdan verilen güçlü sentetik kortizol analoğunun (deksametazon), hipofiz ve hipotalamus üzerindeki reseptörleri uyararak ACTH üretimini negatif feedback yolla kesmesine dayanır. Tümör bağımsızsa (adrenal) bu kesilme işe yaramaz; tümör hipofizdeyse yüksek doz verildiğinde hipofiz adenomu bu negatif geribildirimi algılayıp salgıyı durdurur.

**Soru 2 (ID: d168f189-ddb5-447e-8a18-c60e90d5cd5d)**
Soru Kökü: Aşırı kortizol üretimi olan bir hastada yüksek kortizolün kaynağını (hipofiz mi yoksa sürrenal mi olduğunu) belirlemek amacıyla uygulanan deksametazon supresyon testinin mekanizması değerlendirildiğinde, aşağıdaki hasta profillerinden hangisinde kortizol seviyesinde baskılanma görülmesi beklenir?
Doğru Şık (A): Hipofizde ACTH salgılayan benign adenomu (Cushing hastalığı) olan hasta
Açıklama: Deksametazon supresyon testinin mantığı, sentetik bir glikokortikoid olan deksametazonun hipofizdeki ACTH salınımını güçlü bir negatif feedback ile baskılamasıdır. Hipofiz adenomlarında (Cushing hastalığı) hipofiz bezi regülasyonunu tam olarak kaybetmemiştir ve yüksek doz deksametazona yanıt vererek ACTH (ve dolaylı olarak kortizol) salgısını baskılar. Ancak adrenal korteks adenomu veya ektopik ACTH üreten tümörler dışarıdan gelen steroid sinyaline tamamen duyarsızdır ve baskılanma göstermezler.

---

### ÇİFT 54 (Benzerlik: 0.78)

**Soru 1 (ID: 9c7d2540-578c-4e5f-a3aa-3d90d31c24d2)**
Soru Kökü: Ciddi dehidratasyon tablosu ile acile getirilen bir hastanın kan ozmolaritesi artmış, buna ikincil olarak hipofizden bol miktarda ADH (Vazopressin) dolaşıma verilmiştir. ADH'nin, distal tübül ve toplayıcı kanallarda suyun osmozla lümenden hücreye geri emilimini sağlamak için apikal membrana spesifik olarak yerleştirdiği yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Aquaporin-2
Açıklama: ADH, böbrek toplayıcı kanallarının bazolateral yüzeyindeki Gs kenetli V2 reseptörlerine bağlanır ve cAMP üzerinden Aquaporin-2 su kanallarının apikal membrana ekzositozla yerleşmesini sağlar. ENaC kanalları aldosteronun hedefi iken, SGLT-2 proksimal tübülde glukoz emilimi yapar. Aquaporin-2 translokasyonu olmadan böbreğin suyu idrardan geri alıp konsantre etmesi imkansızdır.

**Soru 2 (ID: bf610fc0-6f08-4e31-9995-177a64a18aff)**
Soru Kökü: Antidiüretik hormon (ADH), kan osmolalitesi arttığında salgılanarak böbrekten su emilimini kontrol eder. ADH'nin distal tübül ve toplayıcı kanal apikal membranlarına akuaporin-2 (su kanalı) yerleştirilmesini sağlayan spesifik reseptör alt tipi ve bu reseptörün kullandığı ikincil haberci molekül aşağıdakilerden hangisidir?
Doğru Şık (C): V2 reseptörü / Siklik AMP (cAMP)
Açıklama: ADH, kan damarlarındaki vazokonstriktör etkisini V1 reseptörleri ve IP3-Kalsiyum yolağı ile sağlarken; böbrekteki su geri emilimini (antidiüretik etki) distal tübül basolaterolünde yerleşik V2 reseptörlerine bağlanarak gösterir. V2 reseptörü, Gs proteini üzerinden adenilat siklazı uyarır ve hücre içi cAMP seviyesini yükselterek akuaporin-2 kanallarının lümene eksprese olmasını sağlar.

---

### ÇİFT 55 (Benzerlik: 0.78)

**Soru 1 (ID: 2a92a87e-8d78-46c8-9722-b68e4ce77c76)**
Soru Kökü: Büyüme hormonunun (GH) organizma üzerindeki farklı etkileri direkt veya indirekt mekanizmalarla gerçekleşir. Buna göre;
I. Karaciğerden glukoz çıkışını artırması (diabetojenik etki)
II. Kondrositlerde mitozu artırarak boy uzamasını sağlaması
III. Yağ dokusunda lipoliz ile serbest yağ asidi miktarını artırması
etkilerinden hangileri büyüme hormonunun aracısız (direkt) etkilerindendir?
Doğru Şık (A): I ve III
Açıklama: Büyüme hormonunun lipoliz yaparak serbest yağ asitlerini artırması ve glukozun kas içine girişini engelleyip karaciğerden çıkışını artırması (anti-insülin/diabetojenik) doğrudan kendi reseptörleri aracılığıyla olan etkilerdir (I ve III). Ancak, kıkırdak ve kemikteki kondrosit mitozu ve protein sentezi (boy uzaması), karaciğerden sentezini uyardığı Somatomedin C (IGF-1) molekülü üzerinden gerçekleşen indirekt bir etkidir (II).

**Soru 2 (ID: c43a874b-fc45-4be6-8e33-3faae24f481c)**
Soru Kökü: Büyüme hormonunun (GH) iskelet sistemi, doku proteinleri ve enerji metabolizması üzerindeki etkileri, doğrudan kendi reseptörü aracılığıyla olanlar ve karaciğer kökenli IGF-1 üzerinden gerçekleşen indirekt etkiler olarak ikiye ayrılır. Aşağıdakilerden hangisi GH'nin **doğrudan (direkt)** etkilerinden biri **değildir**?
Doğru Şık (C): Kondrositlerde mitozu ve protein sentezini uyararak lineer boy uzamasını sağlaması
Açıklama: Büyüme hormonu lipoliz, hiperglisemi (anti-insülin etki) ve aminoasit alımı gibi akut/metabolik etkilerini hedef dokulardaki kendi reseptörleri aracılığıyla doğrudan yapar. Ancak epifiz plaklarındaki kondrositleri uyararak hücre çoğalmasını ve boy uzamasını sağlaması, karaciğerden salınımını uyardığı Somatomedin-C (IGF-1) üzerinden indirekt yolla gerçekleşir.

---

### ÇİFT 56 (Benzerlik: 0.78)

**Soru 1 (ID: 4f5a9881-36ee-4852-99d5-74ee3169c8c1)**
Soru Kökü: Glukagonun karaciğer üzerindeki temel metabolik etkileri arasında aşağıdakilerden hangisi **değildir**?
Doğru Şık (D): Asetil KoA'dan keton cisimciği oluşumunu azaltır
Açıklama: Glukagon katabolik ve enerji açığa çıkarıcı bir hormondur; karaciğerde yağ asidi oksidasyonunu ve Asetil KoA'dan keton oluşumunu (ketogenez) artırır, azaltmaz. Glukoneogenez için substrat sağlamak amacıyla karaciğerin kandan aminoasit çekişini maksimize eder. Tüm bu mekanizmalar açlık veya artmış enerji ihtiyacı durumlarında kanı besleyici yakıtlarla doldurmaya yöneliktir.

**Soru 2 (ID: db4c8c30-cdae-4677-8ee4-605e3b99bfe9)**
Soru Kökü: Açlık durumunda enerji depolarını mobilize eden glukagonun metabolik etkileri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): İskelet kasında glikojen yıkımını uyararak doğrudan kan glukozunu yükseltir.
Açıklama: Glukagonun karaciğerde glikojenoliz ve glukoneogenezi uyarıcı etkisi çok güçlü olsa da iskelet kasında glukagon reseptörü bulunmadığından kas glikojenini yıkamaz. Karaciğer glukoneogenezi için substrat sağlamak amacıyla kandan aminoasit alımını artırır ve plazma aminoasit düzeyini düşürür. Bu nedenle kas glikojenini yıktığını iddia eden seçenek mekanik olarak hatalıdır.

---

### ÇİFT 57 (Benzerlik: 0.77)

**Soru 1 (ID: 7e2f2bce-d045-430b-a07b-dbe9d0f97d3c)**
Soru Kökü: Büyüme hormonunun (GH) metabolik etkileri dikkate alındığında, aşağıdaki hücresel yanıtlardan hangisi bu hormonun direkt etkilerinden biri **değildir**?
Doğru Şık (A): İskelet kası hücrelerinde glukoz girişini kolaylaştırarak glikojenolizi durdurması
Açıklama: Büyüme hormonu klasik bir 'anti-insülin' etki göstererek iskelet kası hücrelerine glukoz girişini engeller ve kan şekerini yükseltir (diabetojenik etki). İskelet kasında glukoz girişini kolaylaştıran hormon büyüme hormonu değil, insülindir. Hormonun lipoliz, karaciğerden glukoz çıkışı ve protein sentezi artışı ise doğrudan temel metabolik etkileri arasındadır.

**Soru 2 (ID: c43a874b-fc45-4be6-8e33-3faae24f481c)**
Soru Kökü: Büyüme hormonunun (GH) iskelet sistemi, doku proteinleri ve enerji metabolizması üzerindeki etkileri, doğrudan kendi reseptörü aracılığıyla olanlar ve karaciğer kökenli IGF-1 üzerinden gerçekleşen indirekt etkiler olarak ikiye ayrılır. Aşağıdakilerden hangisi GH'nin **doğrudan (direkt)** etkilerinden biri **değildir**?
Doğru Şık (C): Kondrositlerde mitozu ve protein sentezini uyararak lineer boy uzamasını sağlaması
Açıklama: Büyüme hormonu lipoliz, hiperglisemi (anti-insülin etki) ve aminoasit alımı gibi akut/metabolik etkilerini hedef dokulardaki kendi reseptörleri aracılığıyla doğrudan yapar. Ancak epifiz plaklarındaki kondrositleri uyararak hücre çoğalmasını ve boy uzamasını sağlaması, karaciğerden salınımını uyardığı Somatomedin-C (IGF-1) üzerinden indirekt yolla gerçekleşir.

---

### ÇİFT 58 (Benzerlik: 0.77)

**Soru 1 (ID: aec8503c-e686-4edf-bc1b-401392cb39b3)**
Soru Kökü: Elli beş yaşında, şiddetli hipotiroidisi bulunan bir kadın hastada seste kabalaşma ve yüzde godet (çukur) bırakmayan ödem formasyonları (miksödem) saptanmıştır. Tiroid hormon yokluğuna bağlı olarak dokularda suyun hapsolmasına ve bu ödeme yol açan birincil doku mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): İnterstisyel alanda glikozaminoglikanların yıkılamayarak birikmesi ve onkotik basıncı artırması
Açıklama: Tiroid hormonları, bağ dokusundaki temel zemin maddesi olan glikozaminoglikanların normal hücresel döngüsünü (turnover) ve yıkımını sağlar. Hipotiroidizm durumunda bu polimerler yıkılamaz, interstisyel dokularda birikir. Suyu güçlü bir şekilde çeken bu higroskopik makromoleküller, yerçekimiyle yer değiştirmeyen sert bir doku ödemine (miksödem) neden olur.

**Soru 2 (ID: f02ca713-b272-465c-9a9d-24d03f8eca61)**
Soru Kökü: Otoimmün tiroiditi nedeniyle medikal tedavi alan ancak ilaçlarını düzensiz kullanan 55 yaşında kadın hastanın fizik muayenesinde; ciltte soğukluk, pretibial bölgede gode bırakmayan ödem ve kaba yüz hatları saptanıyor. Hastada bu tabloya yol açan asıl mekanizma, hipotiroidizm zemininde aşağıdaki moleküllerden hangisinin yıkılamayıp su tutmasına bağlıdır?
Doğru Şık (B): Glikozaminoglikan
Açıklama: Tiroid hormonları normal şartlarda bağ dokusunda glikozaminoglikan turnoverini sağlar. Hipotiroidizm durumunda bu dönüşüm durur ve yıkılamayan glikozaminoglikanlar interstisyel alanda birikerek aşırı miktarda su tutar. Bu patolojik birikim klinik olarak miksödem adını verdiğimiz gode bırakmayan ödem formunu ortaya çıkarır.

---

### ÇİFT 59 (Benzerlik: 0.77)

**Soru 1 (ID: a7fd787d-439b-43e5-aa02-d386df5579eb)**
Soru Kökü: Tiroid dışı dokularda, öncü prohormon olan T4'ün dış halkasından bir iyot atomunu ayırarak onu biyolojik etkinliği en yüksek form olan aktif T3 molekülüne dönüştüren spesifik enzim aşağıdakilerden hangisidir?
Doğru Şık (C): 5'-deiyodinaz
Açıklama: Dolaşımdan hücre içine giren T4, periferik dokularda (özellikle karaciğer ve kaslarda) 5'-deiyodinaz (Tip 1 ve Tip 2) enzimi kullanılarak aktif T3'e çevrilir. Bu reaksiyonda T4'ün dış halkasındaki (5' pozisyonundaki) iyot molekülü ayrılır. 5-deiyodinaz (Tip 3 deiyodinaz) ise iç halkadaki iyodu ayırarak T4'ü inaktif form olan rT3'e çeviren enzimdir.

**Soru 2 (ID: d9b7c547-d2aa-4baf-81d0-e8fc4f12f676)**
Soru Kökü: Tiroid hormon biyosentezinde lümene geçen iyodürün (I-) reaktif iyota (I0) dönüştürülmesi (oksidasyon) ile monoiyodotirozin ve diiyodotirozinlerin birleşerek T3/T4 hormonlarını oluşturduğu (kenetlenme) aşamaları katalizleyen tek membran enzimi aşağıdakilerden hangisidir?
Doğru Şık (C): Tiroid peroksidaz
Açıklama: Tiroid folikül hücresinin apikal membranında yer alan tiroid peroksidaz (TPO) enzimi; hidrojen peroksit (H2O2) varlığında iyodürün oksitlenmesi, iyodun tirozine bağlanması (bu aşamayı iyodinaz hızlandırsa da reaksiyon kompleksini TPO da destekler) ve özellikle MIT ile DIT'lerin eşleşerek (coupling/kenetlenme) T3 ve T4'ü oluşturması aşamalarının tümünde katalizör görevi üstlenir. Hashimoto tiroiditinde hedef olan anti-TPO antikorları bu enzime karşı gelişir.

---

### ÇİFT 60 (Benzerlik: 0.77)

**Soru 1 (ID: 27d9a016-286d-4ffa-ba32-f05aee5aa7ac)**
Soru Kökü: Karbonhidrat emilimi epitelial transport sistemlerine dayanır. Diyetle alınan meyve şekeri fruktozun bağırsak lümeninden enterosit sitoplazmasına alınmasında özelleşmiş olan apikal zar taşıyıcısı aşağıdakilerden hangisidir?
Doğru Şık (B): GLUT-5
Açıklama: GLUT-5 taşıyıcısı, ince bağırsak lümeninden enterosite spesifik olarak fruktoz geçişini sağlayan fasilite difüzyon kanalıdır. Glikoz ve galaktoz ise SGLT-1 aracılığıyla sodyuma bağımlı ikincil aktif taşımayla alınır. SGLT-2 böbrek tübülünde çalışırken, GLUT-4 insüline bağımlı kas hücresi transporterıdır.

**Soru 2 (ID: 3b3dd2b0-ac5c-47a1-bee7-9edead106e17)**
Soru Kökü: Bağırsak lümenindeki glikoz ve galaktozun ince bağırsak epitel hücrelerinin (enterosit) apikal membranından sodyum konsantrasyon gradyanını kullanarak sekonder aktif transportla içeri alınmasını sağlayan taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (C): SGLT-1
Açıklama: SGLT-1 (Sodium-Glucose Linked Transporter 1), enterositlerin fırçamsı kenarında yerleşiktir ve lümendeki glikozu düşük konsantrasyonda olsa bile hücre içi Na-K ATPaz'ın yarattığı sodyum gradyanını kullanarak içeri pompalar. GLUT-5 fruktoz emilimini kolaylaştırılmış difüzyonla sağlarken, SGLT-2 başlıca böbrek proksimal tübüllerinde glikoz reabsorpsiyonu yapar.

---

### ÇİFT 61 (Benzerlik: 0.77)

**Soru 1 (ID: 7a3efa03-00c8-4b4c-9a06-369ada2c13c5)**
Soru Kökü: Otuz iki yaşında erkek hasta ani başlayan çarpıntı, şiddetli baş ağrısı ve aşırı terleme şikayetleriyle acil servise başvuruyor. Muayenesinde kan basıncı 190/110 mmHg olarak ölçülüyor ve abdominal MR'da adrenal medullada kitle saptanıyor.
Bu hastada hiperdinamik tabloya yol açan katekolaminlerin, sentezlendikleri hücredeki depolanma vezikülleri içerisinde aşağıdakilerden hangisi ile birlikte bulunması **en olasıdır**?
Doğru Şık (C): Kromogranin ve adenozin trifosfat (ATP)
Açıklama: Adrenal medulla kaynaklı kitlelerde (feokromositoma) plazmaya yüksek miktarda epinefrin ve norepinefrin salınır; bu katekolaminler medulladaki kromafin hücrelerinin veziküllerinde kromogranin adlı taşıyıcı protein ve ATP ile birlikte stabil kompleksler halinde depolanır. Tiroglobulin tiroid bezine, nörofizin ise nörohipofizer hormonlara ait bir taşıyıcı ve depolanma formudur.

**Soru 2 (ID: 83fc543c-6247-48c9-b693-17ac43da6fc3)**
Soru Kökü: Otuş beş yaşında erkek hasta, ataklar halinde gelen baş ağrısı, çarpıntı ve ciddi hipertansiyon şikayetleriyle kliniğe başvuruyor. Yapılan tetkiklerde plazmada epinefrin ve norepinefrin seviyelerinin belirgin olarak arttığı ve bu hormonların veziküller içinde kromogranin ve ATP ile birlikte yüksek oranda depolandığı saptanıyor. Bu hastada otonomik semptomlara neden olan sekresyonun birincil üretim yeri aşağıdakilerden hangisidir?
Doğru Şık (A): Adrenal medulla
Açıklama: Katekolaminler (epinefrin ve norepinefrin) yapısal olarak amin türevi hormonlardır ve birincil sentez yeri adrenal medulladır. Adrenal korteksin zona tabakaları katekolamin değil, kolesterolden türeyen steroid yapılı hormonları (aldosteron, kortizol vb.) sentezler. Klinik pratikte bu hastadaki gibi katekolamin deşarjı bulguları genellikle adrenal medulla kaynaklı feokromasitoma ile ilişkilidir.

---

### ÇİFT 62 (Benzerlik: 0.77)

**Soru 1 (ID: 051c9983-9d38-4ca5-a37d-519afcba9e97)**
Soru Kökü: 42 yaşında erkek hasta, son aylarda giderek artan yorgunluk, bulantı ve iştahsızlık şikayetleriyle kliniğe başvuruyor. Fizik muayenesinde dirseklerinde, dizlerinde ve meme areolalarında belirgin cilt koyulaşması (hiperpigmentasyon) saptanıyor. Bu hastadaki hiperpigmentasyonun moleküler temelinde aşağıdaki prohormonlardan hangisinin aşırı parçalanması yatmaktadır?
Doğru Şık (D): Propiyomelanokortin (POMC)
Açıklama: Primer adrenokortikal yetmezlikte (Addison hastalığı) kortizol üretiminin durması, negatif feedback mekanizmasının kalkmasına ve ön hipofizden telafi edici ACTH sentezinin aşırı artmasına neden olur. ACTH sentezi için öncü molekül olan Propiyomelanokortin (POMC) parçalandığında, eş zamanlı olarak melanosit-stimüle edici hormon (MSH) fragmanları da açığa çıkar ve cilde koyu rengini verir. En güçlü çeldirici olan kolesterol desmolaz, adrenal steroid sentezindeki ilk enzimdir ancak hiperpigmentasyondan sorumlu bir prekürsör değildir.

**Soru 2 (ID: cac0b73a-38cb-4d7c-b4ac-3b22de4c133d)**
Soru Kökü: Kırk yaşında erkek hasta; ilerleyici zayıflık, gastrointestinal şikayetler ve hipotansiyon tablosuyla incelenirken, özellikle tırnak yatakları ve dirseklerinde belirgin esmerleşme (hiperpigmentasyon) saptanıyor. Primer adrenokortikal yetmezlik (Addison hastalığı) tanısı alan bu hastadaki deri pigmentasyonunun patogenezi aşağıdakilerden hangisidir?
Doğru Şık (C): Kortizol eksikliğine tepki olarak artan ACTH sentezinde POMC'un yıkılarak MSH oluşturması
Açıklama: Addison hastalığında adrenal bez hasarına bağlı kortizol üretilemez. Kortizolün negatif feedback etkisi kalktığı için hipofizden aşırı ACTH sentezlenir. ACTH'ın öncül molekülü olan proopiomelanokortin (POMC) parçalandığında ACTH ile birlikte Melanosit Uyarıcı Hormon (MSH) açığa çıkar; bu da melanositleri uyararak karakteristik cilt koyulaşmasını yapar.

---

### ÇİFT 63 (Benzerlik: 0.77)

**Soru 1 (ID: dd019511-c180-42f0-a684-b1e2129af2d2)**
Soru Kökü: Hipofiz-adrenal aksın patolojik aktivitesini (örneğin ektopik ACTH sendromu) ayırt etmek amacıyla kullanılan supresyon testlerinde, endojen kortizole kıyasla ortalama 30 kat daha güçlü ve çok daha uzun etki süresine sahip olan sentetik glikokortikoid analoğu aşağıdakilerden hangisidir?
Doğru Şık (D): Deksametazon
Açıklama: Deksametazon sentetik bir kortizol analoğu olup, doğal kortizolden 30 kat daha güçlü glikokortikoid etkiye sahiptir ve en uzun etkili preparattır. Yüksek gücü nedeniyle çok düşük dozlarda dahi hipofizi güçlü şekilde baskılayabilir, bu özellikleri onu Cushing sendromunun ayırıcı tanısında kullanılan 'Deksametazon supresyon testi' için ideal molekül yapar. Kortizon ise en kısa etkili ve en zayıf analoğudur.

**Soru 2 (ID: dd616a8d-0886-4c48-80a1-c5e173f913ab)**
Soru Kökü: Farmakolojik dozlarda kullanılan aşağıdaki sentetik kortikosteroid türevlerinden hangisi, endojen kortizolden yaklaşık 30 kat daha fazla aktiviteye sahip olup etki süresi en uzun olandır?
Doğru Şık (E): Deksametazon
Açıklama: Deksametazon, mineralokortikoid etkisi hiç olmayan, glikokortikoid ve anti-enflamatuar etkisi ise doğal kortizole kıyasla 30 kat daha güçlü olan uzun etkili bir moleküldür. Kortizon en zayıfı ve kısa etkilisi iken, prednizon ve metilprednizon orta şiddette kortizolden 4-5 kat güçlü ajanlardır.

---

### ÇİFT 64 (Benzerlik: 0.77)

**Soru 1 (ID: 717c0d0a-aa50-413d-a6f9-87332e02bab5)**
Soru Kökü: Primer hiperaldosteronizm (Conn sendromu) vakalarında, yüksek aldosteron seviyelerine ve güçlü sodyum-su retansiyonuna rağmen hastalarda tipik olarak periferik ödem gözlenmez. Bu paradoksal durumun temel fizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Uzun süreli hipokaleminin renal tübüllerin ADH duyarlılığını azaltması
Açıklama: Conn sendromunda yüksek aldosterona bağlı olarak uzun süre kan potasyum seviyesinin düşük seyretmesi (kronik hipokalemi), böbrek toplayıcı kanallarının Antidiüretik Hormona (ADH) olan hücresel yanıtını köreltir. ADH'ya yanıtsız kalan böbrek su tutamaz ve idrarla su kaçırır; bu da sodyum tutulumuna rağmen hastada ödem gelişmesini engeller. Bu spesifik mekanizma, primer aldosteronizmde ödemin neden oluşmadığını açıklayan en temel fizyolojik kök nedendir.

**Soru 2 (ID: cac3e6d5-4478-42f7-8e24-6f91f47a1d38)**
Soru Kökü: Otuz beş yaşında erkek hasta, kas güçsüzlüğü ve tedaviye dirençli hipertansiyon ile incelenirken plazma renin aktivitesinin çok düşük, serum potasyumunun tehlikeli sınırlarda hipokalemik ve aldosteronun çok yüksek olduğu saptanıyor. Primer hiperaldosteronizm tanısı alan bu hastada sodyum ve su tutulumuna rağmen dokularda klinik olarak belirgin ödem görülmemesinin temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Uzun süreli hipokaleminin böbreğin ADH'ye yanıtını bozarak idrarla su kaçışına (poliüri) neden olması
Açıklama: Conn sendromunda (primer hiperaldosteronizm) sodyum geri emilimi nedeniyle hipertansiyon gelişir, ancak su tutulumuna bağlı klinik ödem beklenmez. Bunun sebebi 'Aldosteron Kaçışı' olarak da bilinen mekanizmalar ve şiddetli hipokalemidir. Hipokalemi, böbrek toplayıcı kanallarının ADH'ye olan duyarlılığını azaltır (nefrojenik diabetes insipitus benzeri durum), böbrek su tutamaz ve poliüri ile su atılır; böylece ödem gelişmesi engellenir.

---

### ÇİFT 65 (Benzerlik: 0.77)

**Soru 1 (ID: 49f51ba8-484a-47ca-a529-20c36d27ce17)**
Soru Kökü: Büyüme hormonu (GH) sekresyonu hipotalamustan salınan GHRH ve somatostatin arasındaki dinamik dengeyle düzenlenir; metabolik durumlar ve uyku evreleri bu salınım üzerinde belirleyicidir. Aşağıdakilerden hangisi büyüme hormonu salgısını uyaran faktörlerden biri **değildir**?
Doğru Şık (D): Hiperglisemi ve REM uykusu
Açıklama: Büyüme hormonu salgısı hipoglisemi, açlık, protein eksikliği ve Non-REM uyku evrelerinde artarken; yüksek kan şekeri (hiperglisemi) ve uykunun REM evresinde baskılanır. Hipoglisemi anında vücut glukoz çıkışını artırmak için GH sekresyonunu bir savunma mekanizması olarak uyarır. Bu nedenle hiperglisemi ve REM uykusu GH için inhibitör etkiye sahiptir.

**Soru 2 (ID: 4e9331ee-652d-4549-9713-e7082eeee119)**
Soru Kökü: Hipotalamus-hipofiz ekseninde büyüme hormonu salınımı, bireyin anlık metabolik ihtiyaçlarına ve biyoritme göre dalgalanmalar gösterir.
Buna göre, tamamen sağlıklı bir bireyde aşağıdaki fizyolojik koşullardan hangisi dolaşıma salınan büyüme hormonu miktarında bir artışa neden **olmaz**?
Doğru Şık (E): Karbonhidrattan zengin bir yemek sonrası (Hiperglisemi)
Açıklama: Kan glikoz düzeyini ani olarak yükselten durumlar (karbonhidrat açısından zengin öğünler) büyüme hormonu salınımını çok hızlı ve güçlü bir şekilde inhibe eder. Buna karşın, vücudun enerji açığı hissettiği açlık, hipoglisemi, yorucu egzersiz ve doku yenilenmesinin gerçekleştiği derin Non-REM uyku periyotları hipofizden GH atılımını uyararak maksimal pikler oluşturur.

---

### ÇİFT 66 (Benzerlik: 0.77)

**Soru 1 (ID: 9d4171a6-7ee0-4ef5-8673-765a209e0eaa)**
Soru Kökü: Elli beş yaşındaki bir erkek hasta sıcak intoleransı, dinlenme anında taşikardi ve nabız basıncında artış şikayetleriyle geliyor. Tirotoksikoz tanısı konan bu hastada yüksek tiroid hormonlarının kardiyovasküler sistemde oluşturduğu nabız artışının hücresel patofizyolojisi temel olarak aşağıdakilerden hangisidir?
Doğru Şık (E): Kalp kasındaki beta-adrenerjik reseptör sayısının ve duyarlılığının artması
Açıklama: Tiroid hormonları (T3), kalp kası (miyosit) nükleuslarına etki ederek gen ekspresyonunu modifiye eder. Miyokardda miyozin ağır zincirini ve sarkoplazmik retikulum Ca-ATPaz pompasını artırmakla birlikte, membrandaki beta-1 adrenerjik reseptör sayısını da up-regüle eder. Bu durum kalbin katekolaminlere duyarlılığını abartılı seviyelere taşıyarak hipertiroidizmde gözlenen belirgin taşikardi ve artmış kalp debisine neden olur.

**Soru 2 (ID: d326ee59-b53e-464a-a5b1-d70eafe821a0)**
Soru Kökü: Kırk beş yaşında kadın hasta çarpıntı, aşırı terleme ve sıcağa tahammülsüzlük şikayetleriyle başvuruyor. Fizik muayenede kalp hızı 115 atım/dakika ölçülüyor. Laboratuvar tetkiklerinde TSH baskılanmış, serbest T4 yüksek bulunuyor. Bu hastadaki istirahat taşikardisinin hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Kalp kası hücrelerinde beta-adrenerjik reseptör sayısında artış
Açıklama: Tiroid hormonlarının kardiyovasküler sistem üzerindeki en belirgin dolaylı etkisi, miyokardda beta-adrenerjik reseptörlerin gen ekspresyonunu artırmasıdır. Bu upregülasyon, kalbin katekolaminlere olan duyarlılığını artırarak taşikardi ve artmış kardiyak debiye yol açar. Tirotoksikoz krizlerinde kardiyak etkileri bloke etmek için beta-bloker ilaçların kullanılmasının temel rasyoneli bu mekanizmadır.

---

### ÇİFT 67 (Benzerlik: 0.77)

**Soru 1 (ID: 87acb605-1c83-4639-a8cf-b39c9cec3263)**
Soru Kökü: Histolojik doku kültüründe, belirli bir hücre popülasyonu zarında üretilen Transforme edici büyüme faktörü-alfa (TGF-α) adı verilen bir sinyal molekülünün hiçbir şekilde hücre dışı boşluğa (ESS) sızmadan sadece hücrenin doğrudan temas halinde olduğu bitişik hücre reseptörünü uyarabildiği saptanıyor.
Fiziksel zarlara bağımlı, dolaşımın ya da difüzyonun söz konusu olmadığı bu özel ileti mekanizması literatürde aşağıdakilerden hangisi ile adlandırılır?
Doğru Şık (A): Jukstakrin ileti
Açıklama: Sinyalizasyon sürecinde, üretilen molekülün sentezlendiği hücre zarına takılı kalarak salınmadığı ve sadece direkt fiziksel membran teması sağladığı bitişik hücredeki lokal reseptörü uyarması jukstakrin ileti olarak bilinir. Otokrin ve parakrin iletide molekül mutlaka intertisiyel boşluğa difüze olur; gap junction'da ise zarlar arası bir kanal tünel oluşarak madde geçişi sağlanır ancak zardaki reseptör aktivasyonu olmaz.

**Soru 2 (ID: ed616f18-b230-4b24-966b-900e33001c19)**
Soru Kökü: Transforme edici büyüme faktörü-α (TGF-α) aracılığıyla komşu hücrenin doğrudan etkilenmesini sağlayan ve hücreler arası fiziksel temasa dayalı olan sinyal ileti modeli aşağıdakilerden hangisidir?
Doğru Şık (A): Jukstakrin
Açıklama: Transforme edici büyüme faktörü-alfa (TGF-a) hücre yüzeyine tutunarak komşu hücrenin reseptörüyle doğrudan temas kurar ve bu ileti modeline jukstakrin ileti adı verilir. Parakrin iletide molekül interstisyel sıvıya difüze olarak etki gösterirken, jukstakrinde hücreler arası lokal temas şarttır. Diğer seçenekler difüzyon veya dolaşım yoluyla uzak/yakın hedeflere ulaşan ileti tipleridir.

---

### ÇİFT 68 (Benzerlik: 0.77)

**Soru 1 (ID: 3b3dd2b0-ac5c-47a1-bee7-9edead106e17)**
Soru Kökü: Bağırsak lümenindeki glikoz ve galaktozun ince bağırsak epitel hücrelerinin (enterosit) apikal membranından sodyum konsantrasyon gradyanını kullanarak sekonder aktif transportla içeri alınmasını sağlayan taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (C): SGLT-1
Açıklama: SGLT-1 (Sodium-Glucose Linked Transporter 1), enterositlerin fırçamsı kenarında yerleşiktir ve lümendeki glikozu düşük konsantrasyonda olsa bile hücre içi Na-K ATPaz'ın yarattığı sodyum gradyanını kullanarak içeri pompalar. GLUT-5 fruktoz emilimini kolaylaştırılmış difüzyonla sağlarken, SGLT-2 başlıca böbrek proksimal tübüllerinde glikoz reabsorpsiyonu yapar.

**Soru 2 (ID: 8691292e-030f-44f6-825e-38beaea02ba1)**
Soru Kökü: Diyetle alınan fruktozun bağırsak lümeninden enterosite emilimini sağlayan ve aynı zamanda mikroglialarda da eksprese edilen spesifik taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (D): GLUT-5
Açıklama: GLUT-5, bağırsak lümeninden enterosite spesifik olarak fruktoz emilimini gerçekleştiren ve mikroglialarda da bulunan taşıyıcı moleküldür. SGLT-1 bağırsakta glikoz ve galaktozu sodyumla eşlenik taşırken fruktoza afinitesi yoktur. Fruktozun fruktoz taşıyıcısıyla girmesi, glikoz transporterlarından izole bir yolak oluşturmasını sağlar.

---

### ÇİFT 69 (Benzerlik: 0.77)

**Soru 1 (ID: a5bff683-085b-4c8a-9819-36fca26b9d94)**
Soru Kökü: Doğuştan izole büyüme hormonu eksikliği saptanan bir bebek doğduğunda doğum ağırlığı ve boyunun tamamen normal referans aralığında olduğu, ancak birinci aydan itibaren büyümesinin durakladığı kaydediliyor.
Bu bebekte fetal dönem (intrauterin) boyunca organların normal büyümesini sağlayan, Büyüme Hormonundan bağımsız olarak sentezlenen ana büyüme faktörü aşağıdakilerden hangisidir?
Doğru Şık (B): İnsülin-benzeri büyüme faktörü-2 (IGF-II)
Açıklama: Postnatal (doğum sonrası) büyüme büyük ölçüde büyüme hormonuna (GH) ve onun tetiklediği IGF-1 üretimine bağımlı iken, intrauterin fetal büyüme GH'den neredeyse tamamen bağımsızdır. Fetal dönemdeki temel doku büyütücü ajan, büyüme hormonu stimülasyonuna gerek duymadan dokular tarafından serbestçe eksprese edilebilen IGF-II molekülüdür.

**Soru 2 (ID: deb57a75-bfa4-432b-8589-6e5129f053f3)**
Soru Kökü: Fetal gelişim sürecinde hücre proliferasyonunu ve doku büyümesini yönlendiren pek çok büyüme faktörü görev almaktadır. İntrauterin dönemde fetal büyümeden birincil derecede sorumlu olan ve hipofizer büyüme hormonundan (GH) tamamen bağımsız olarak üretilen medyatör aşağıdakilerden hangisidir?
Doğru Şık (C): İnsülin-benzeri Büyüme Faktörü-II (IGF-II)
Açıklama: Fetal büyüme sürecinde büyüme hormonu (GH) henüz tam etkin değildir ve fetal gelişimden temel olarak GH'dan bağımsız üretilen IGF-II sorumludur. Doğumdan sonraki somatik büyüme ise GH bağımlı olarak sentezlenen IGF-I (Somatomedin-C) üzerinden sürdürülür. Bu kritik fark, fetal evre ile postnatal evre arasındaki anabolik mekanizmayı ayırır.

---

### ÇİFT 70 (Benzerlik: 0.76)

**Soru 1 (ID: 35654a12-4f27-4a80-89ef-3122ad8463fa)**
Soru Kökü: Tiroglobulin molekülü, tiroid folikül hücresi endoplazmik retikulumunda sentezlenip kolloid içine salgılanan büyük bir glikoproteindir. Okside olmuş reaktif iyotun tiroglobulin üzerindeki tirozin kalıntılarına bağlanarak iyodotirozinleri oluşturduğu 'iyodinasyon' basamağını hızlandıran spesifik enzim aşağıdakilerden hangisidir?
Doğru Şık (E): İyodinaz
Açıklama: Tiroid hormon sentezinde oksidasyon ve kenetlenme reaksiyonları esas olarak tiroid peroksidaz tarafından yürütülürken, okside olmuş reaktif iyotun tiroglobulin yapısındaki tirozin aminoasitlerine eklenmesi (iyodinasyon/organifikasyon) basamağını hızlandıran enzim iyodinazdır. Megalin folikül hücresindeki kolloid endositozunu sağlayan reseptördür, pendrin ise klor/iyot değişimi yapan bazal zarda değil apikal zardaki taşıyıcıdır.

**Soru 2 (ID: d9b7c547-d2aa-4baf-81d0-e8fc4f12f676)**
Soru Kökü: Tiroid hormon biyosentezinde lümene geçen iyodürün (I-) reaktif iyota (I0) dönüştürülmesi (oksidasyon) ile monoiyodotirozin ve diiyodotirozinlerin birleşerek T3/T4 hormonlarını oluşturduğu (kenetlenme) aşamaları katalizleyen tek membran enzimi aşağıdakilerden hangisidir?
Doğru Şık (C): Tiroid peroksidaz
Açıklama: Tiroid folikül hücresinin apikal membranında yer alan tiroid peroksidaz (TPO) enzimi; hidrojen peroksit (H2O2) varlığında iyodürün oksitlenmesi, iyodun tirozine bağlanması (bu aşamayı iyodinaz hızlandırsa da reaksiyon kompleksini TPO da destekler) ve özellikle MIT ile DIT'lerin eşleşerek (coupling/kenetlenme) T3 ve T4'ü oluşturması aşamalarının tümünde katalizör görevi üstlenir. Hashimoto tiroiditinde hedef olan anti-TPO antikorları bu enzime karşı gelişir.

---

### ÇİFT 71 (Benzerlik: 0.76)

**Soru 1 (ID: 5e4ef0ce-3738-4277-80e1-2c685b01f2db)**
Soru Kökü: Nörohipofiz (arka hipofiz) bezinin histolojik ve fizyolojik özellikleri incelendiğinde;
I. Hormon üreten ve salgılayan gerçek endokrin hücre gövdelerini (somaları) barındırır.
II. Hipotalamustaki paraventriküler ve supraoptik nükleuslardan uzanan miyelinsiz aksonları içerir.
III. Aksonlara yapısal destek sağlayan, pitusit adı verilen özelleşmiş glial hücreler bulundurur.
yargılarından hangileri doğrudur?
Doğru Şık (D): II ve III
Açıklama: Nörohipofiz gerçek bir endokrin bez hücresi ağına sahip değildir, kendi bünyesinde hormon sentezleyen hücre gövdeleri barındırmaz (I yanlış). Hipotalamusta (magnoselüler nöronlar) sentezlenen ADH ve oksitosin, miyelinsiz aksonlar aracılığıyla arka loba taşınır (II doğru). Bu sinir aksonlarına arka lob içerisinde pitusit adı verilen spesifik glial hücreler destek ve kılavuzluk sağlar (III doğru).

**Soru 2 (ID: a4c5e224-c7a4-4e8a-ae75-043f399a258d)**
Soru Kökü: Nörohipofiz hormonları ile ilgili;
I. Oksitosin ve ADH, hipotalamustaki magnoselüler nöronlarda sentezlenir.
II. Aksonal taşıma sırasında veziküller içinde Nörofizin proteinleri ile birlikte bulunurlar.
III. Nörohipofizde kana salınan hormonlar öncelikle pars intermedia bölgesinde depolanır.
ifadelerinden hangileri doğrudur?
Doğru Şık (B): I ve II
Açıklama: Nörohipofiz hormonları olan ADH ve oksitosin hipotalamusun supraoptik ve paraventriküler nükleuslarında sentezlenerek Nörofizin (I ve II) taşıyıcı proteinleri ile aksonal yolla taşınır. Bu taşıma ve depolanma işlemi Herring cisimlerinde gerçekleşir, pars intermedia bölgesi ile ilgisi yoktur. Bu nedenle sadece sentez ve aksonal taşıma öncüllerini içeren seçenek doğru fizyolojik mekanizmayı yansıtır.

---

### ÇİFT 72 (Benzerlik: 0.76)

**Soru 1 (ID: 167e1ce5-0c62-49e6-bcde-87a77af4fcbc)**
Soru Kökü: Kırk beş yaşında kadın hasta; son zamanlarda seste kalınlaşma, kilo artışı, soğuğa tahammülsüzlük ve cildinde çukurlaşmayan hamurumsu bir ödem şikayetiyle başvuruyor. Yapılan muayenede hipotiroidi tanısı konan bu hastada görülen ödemin (miksödem) patofizyolojisinde yatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Tiroid hormon yokluğunda cilt altında biriken ve yıkılamayan glikozaminoglikanların yüksek miktarda su tutması
Açıklama: Tiroid hormonları dokularda glikozaminoglikan (GAG) turnoverini (yapım/yıkım döngüsünü) düzenler. Hipotiroidizm durumunda bu turnover bozulur ve hücreler arası alanda özellikle hiyalüronik asit gibi yıkılamayan glikozaminoglikanlar birikmeye başlar. GAG'lar hidrofilik özellikte olduklarından osmotik olarak suyu kendi üzerlerine çekerek ciltte bastırmakla iz bırakmayan, sert (non-pitting) 'miksödem' tablosunu oluştururlar.

**Soru 2 (ID: f66bf9ed-e517-42cd-aed3-e7d9ffef3e87)**
Soru Kökü: Hipotiroidizm tablosunda cilt altında sıvı birikimine bağlı olarak gelişen gode bırakmayan ödem (miksödem) patogenezinde, aşağıdaki bağ dokusu elemanlarından hangisinin yıkımının durması rol oynar?
Doğru Şık (A): Glikozaminoglikan
Açıklama: Normal şartlarda tiroid hormonları hücresel düzeyde glikozaminoglikan (GAG) turnoverını (yapım-yıkım döngüsünü) sağlar. Hipotiroidizmde glikozaminoglikanların yıkımı durur ve dokularda birikmeye başlarlar; GAG'ların yüksek su tutma kapasitesi intertisyel alanda sümüksü bir sıvı birikimine (miksödem) yol açar. Bu ödem yapısı protein/karbonhidrat komplekslerinden zengin olduğu için klasik kalp yetmezliği ödeminin aksine gode bırakmaz.

---

### ÇİFT 73 (Benzerlik: 0.76)

**Soru 1 (ID: 4fef870e-2478-460b-99ae-6b1fe3061df6)**
Soru Kökü: İnsülinin hücresel hedef dokularda enerji depolarının korunmasını sağlayan spesifik enzimatik etkileriyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Yağ dokusu içinde hormona duyarlı lipazı (HSL) güçlü şekilde aktive eder
Açıklama: İnsülin, depo yağlarının parçalanmasını engellemek için adiposit içindeki 'hormona duyarlı lipaz' (HSL) enzimini inhibe eder. Bu sayede trigliserit yıkımı azalır ve serbest yağ asidi çıkışı baskılanır. Endotel yüzeyindeki lipoprotein lipazı (LPL) ise dolaşımdaki lipidleri hücreye sokmak amacıyla aktive eder.

**Soru 2 (ID: 8f3f1f5c-572e-4224-a967-363e84ea9262)**
Soru Kökü: İnsülinin yağ dokusundaki (adipozit) fizyolojik etkisi mekanistik olarak incelendiğinde, lipid depolanmasını teşvik eden en önemli aktivite aşağıdakilerden hangisidir?
Doğru Şık (A): Endotel yüzeyindeki lipoprotein lipaz (LPL) enzimini aktive ederek şilomikronlardan serbest yağ asidi geçişini artırması
Açıklama: İnsülin anabolik bir hormon olarak yağ depolanmasını teşvik eder. Bunun en önemli mekanizması, endotel hücrelerindeki lipoprotein lipaz (LPL) enzimini aktive etmesidir. LPL kanda dolaşan trigliseridleri parçalar ve açığa çıkan yağ asitlerinin yağ hücresine girip yeniden sentezlenerek depolanmasını sağlar. Aksine, hücre içi trigliseridleri yıkan hormona duyarlı lipaz (HSL) enzimi ise insülin tarafından inhibe edilir.

---

### ÇİFT 74 (Benzerlik: 0.76)

**Soru 1 (ID: 051c9983-9d38-4ca5-a37d-519afcba9e97)**
Soru Kökü: 42 yaşında erkek hasta, son aylarda giderek artan yorgunluk, bulantı ve iştahsızlık şikayetleriyle kliniğe başvuruyor. Fizik muayenesinde dirseklerinde, dizlerinde ve meme areolalarında belirgin cilt koyulaşması (hiperpigmentasyon) saptanıyor. Bu hastadaki hiperpigmentasyonun moleküler temelinde aşağıdaki prohormonlardan hangisinin aşırı parçalanması yatmaktadır?
Doğru Şık (D): Propiyomelanokortin (POMC)
Açıklama: Primer adrenokortikal yetmezlikte (Addison hastalığı) kortizol üretiminin durması, negatif feedback mekanizmasının kalkmasına ve ön hipofizden telafi edici ACTH sentezinin aşırı artmasına neden olur. ACTH sentezi için öncü molekül olan Propiyomelanokortin (POMC) parçalandığında, eş zamanlı olarak melanosit-stimüle edici hormon (MSH) fragmanları da açığa çıkar ve cilde koyu rengini verir. En güçlü çeldirici olan kolesterol desmolaz, adrenal steroid sentezindeki ilk enzimdir ancak hiperpigmentasyondan sorumlu bir prekürsör değildir.

**Soru 2 (ID: c1b28487-f9b9-4841-9da2-377e6ce5ea15)**
Soru Kökü: Otuz yaşında kadın hasta, son birkaç aydır devam eden aşırı yorgunluk, ayağa kalkınca baş dönmesi ve kilo kaybı şikayetleriyle geliyor. Fizik muayenede kan basıncı 90/60 mmHg ölçülüyor; hastanın dirsekleri, dizleri, areola çevresi ve diş eti mukozasında bariz renk koyulaşması (hiperpigmentasyon) dikkati çekiyor. Primer adrenokortikal yetmezlik (Addison hastalığı) şüphesi uyandıran bu tabloda, derideki pigmentasyonun nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Düşen kortizolün feedback inhibisyonunu kaldırmasıyla artan ACTH öncülü POMC molekülünden MSH'ın (melanosit-stimüle edici hormon) açığa çıkması
Açıklama: Primer adrenal yetmezlikte (Addison hastalığı) hedef organ hasarı nedeniyle kortizol yapılamadığı için hipotalamus ve hipofiz üzerindeki negatif feedback ortadan kalkar. Bunun sonucunda hipofiz ön lobundan ACTH sekresyonu çok yüksek seviyelere ulaşır. ACTH, Pro-opiyomelanokortin (POMC) adı verilen büyük bir prekürsörden klevaj ile sentezlenir. Bu klevaj sırasında ACTH ile eş zamanlı olarak Melanosit-stimüle edici hormon (MSH) fragmanları da oluşur ve bu fragmanlar deride hiperpigmentasyon yapar.

---

### ÇİFT 75 (Benzerlik: 0.76)

**Soru 1 (ID: 246dcbc6-ceda-425c-a0fd-1660d8dcd0b9)**
Soru Kökü: Kırk yaşında obez bir erkek hastada hiperkortizolizm bulguları tespit edilmiştir. Ayırıcı tanı amacıyla yüksek doz deksametazon supresyon testi uygulanmış ve kortizol salgısının **baskılanamadığı** görülmüştür. Bu hastada en olası primer patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Adrenal korteks tümörü
Açıklama: Otonom olarak kortizol salgılayan primer adrenal tümörlerde, sentetik bir glikokortikoid olan deksametazon verilse bile tümör inhibe olmaz ve kortizol düzeyi düşmez (baskılanamaz). Hipofizer kaynaklı ACTH adenomlarında (Cushing hastalığı) ise yüksek doz deksametazon, CRH-ACTH eksenini kısmen regüle edebildiği için kortizol seviyesinde baskılanma görülür.

**Soru 2 (ID: c9d721e7-3bf3-4eea-a2f5-c72c93adf5f7)**
Soru Kökü: Aşırı kilo alma, deride mor strialar ve hipertansiyon bulgularıyla araştırılan hastada kortizol düzeyleri yüksek saptanarak etyolojiye yönelik deksametazon supresyon (baskılama) testi uygulanıyor. Uygulanan yüksek doz deksametazon sonrasında idrar ve kanda kortizol seviyelerinin baskılanamadığı görülüyor. Bu testin mekanistik sonucu ile hastanın tanısal klinik yönelimi için aşağıdakilerden hangisi doğrudur?
Doğru Şık (B): Kortizol aşırı üretimi otonomdur, en olası patoloji adrenal korteks tümörüdür.
Açıklama: Deksametazon, hipofizer ekseni negatif feedback ile baskılayabilen çok güçlü sentetik bir kortizol analoğudur. Hipofizer kaynaklı (ACTH bağımlı) Cushing hastalığında yüksek doz deksametazon ile kortizol salgısı baskılanabilirken; doğrudan adrenal bezden kaynaklanan otonom kortizol salgılayan bir tümör varlığında test yanıt vermez, baskılanma gerçekleşmez. Adrenal doku, hipofizden gelen negatif geri bildirim sinyaline tamamen sağırlaşmıştır.

---

### ÇİFT 76 (Benzerlik: 0.76)

**Soru 1 (ID: 1362dff1-6e94-4c85-98bc-5d2ccbe88239)**
Soru Kökü: Kan kalsiyum düzeyi yükseldiğinde salgılanarak osteoklastik kemik rezorpsiyonunu hızlı bir şekilde inhibe eden kalsitonin hormonunun sentezinden sorumlu hücreler aşağıdakilerden hangisidir?
Doğru Şık (D): Tiroid parafoliküler C hücreleri
Açıklama: Kalsitonin, tiroid bezinin folikülleri arasındaki intertisyel alanda yerleşim gösteren parafoliküler C hücreleri tarafından üretilen bir peptid hormondur. Başlıca fizyolojik uyaranı hiperkalsemidir ve osteoklast aktivitesini baskılayarak kan kalsiyum seviyesini düşürür. Tiroid folikül epitel hücreleri ise T3 ve T4 hormonlarının yapımından sorumludur.

**Soru 2 (ID: 9139f05c-4ba8-4060-8e02-52380e366c27)**
Soru Kökü: Tiroid bezinin interfolliküler alanındaki C hücrelerinden salgılanan ve plazma kalsiyumu yükseldiğinde kana verilen kalsitonin hormonunun kalsiyum düşürücü en hızlı ve temel etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Kemik dokusunda osteoklastik aktiviteyi ve kemik yıkımını baskılaması
Açıklama: Kalsitonin, kan kalsiyumu arttığında salgılanır ve asıl hedefleri olan osteoklastlar üzerindeki reseptörlerine bağlanarak onların kemik rezorpsiyon (yıkım) aktivitelerini hızlıca bloke eder. Uzun dönemde ise yeni osteoklast oluşumunu da azaltarak kalsiyumun kemikte kalmasını sağlar ve plazma kalsiyumunu düşürür.

---

### ÇİFT 77 (Benzerlik: 0.76)

**Soru 1 (ID: e9078b52-941b-41f7-a42e-4a7995e15987)**
Soru Kökü: Paratiroid hormonun (PTH) kemik dokusu üzerindeki etkileriyle ilgili;
I. Osteoklastlar üzerinde doğrudan PTH reseptörü bulunmaz.
II. PTH osteoblastlara bağlanarak bu hücrelerden RANKL salgılanmasına neden olur.
III. Salgılanan RANKL osteoklastik aktiviteyi ve kemik rezorpsiyonunu artırır.
ifadelerinden hangileri doğrudur?
Doğru Şık (C): I, II ve III
Açıklama: Kemiği yıkan osteoklastların kendi membranlarında fonksiyonel PTH reseptörü bulunmaz; bu nedenle PTH doğrudan osteoklastları etkileyemez. PTH önce osteoblastlara bağlanır, bu bağlanma osteoblastların OPG (osteoprotegerin) ligandı olan RANKL ve M-CSF salgılamasına neden olur. Salgılanan bu parakrin sinyaller osteoklast prekürsörlerini olgunlaştırıp aktive ederek kemik rezorpsiyonunu ve kana kalsiyum çıkışını başlatır.

**Soru 2 (ID: fe8aa662-f645-4133-bf87-308ef39d88ab)**
Soru Kökü: Paratiroid hormonunun (PTH) kemik dokusunda dolaylı yoldan kalsiyum rezorpsiyonunu uyarma mekanizması, spesifik reseptörlerine bağlandıktan sonra hangi hücreden osteoprotegerin ligandı (RANKL) salınımını tetiklemesine dayanır?
Doğru Şık (D): Osteoblast
Açıklama: Kemik yıkımını yapan osteoklast hücrelerinde doğrudan PTH reseptörü bulunmaz. PTH, osteoblastlarda bulunan reseptörlerine bağlanarak bu hücrelerden RANKL ve M-CSF salınmasını sağlar; bu faktörler de öncü osteoklastları aktive ederek kemik matriksinin yıkımını başlatır. Mekanizma osteoblast üzerinden dolaylı yürütülür.

---

### ÇİFT 78 (Benzerlik: 0.76)

**Soru 1 (ID: 092f91d6-865f-4783-adae-56042f547768)**
Soru Kökü: Adrenal glikokortikoidlerin (kortizol) doku hasarına ve enfeksiyona karşı gelişen inflamatuvar yanıtı güçlü bir şekilde baskıladığı bilinmektedir. Kortizolün immünsüpresif etkisine aracılık eden temel intraselüler mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Hücre çekirdeğindeki Nükleer Faktör-kappa B (NF-kB) yolağını inhibe ederek İnterlökin-2 (IL-2) üretimini azaltması
Açıklama: Kortizolün güçlü anti-inflamatuar ve immünsüpresif etkisi, inflamatuvar sitokinlerin gen transkripsiyonunu sağlayan ana şalter olan Nükleer Faktör-kappa B (NF-kB) proteinini bloke etmesine dayanır. Bu inhibisyon özellikle T-lenfositlerin klonal proliferasyonunu sağlayan İnterlökin-2 (IL-2) sentezini durdurur. Nötrofil sayısı kortizol etkisiyle kanda azalmaz, aksine marjinasyon bozulduğu için kanda dolaşan nötrofil sayısı (PMNL) artar.

**Soru 2 (ID: d166e3b8-6766-4d7a-9077-2b1c39d3c16b)**
Soru Kökü: Kortizolün anti-enflamatuar ve immünosüpresif etkileri büyük ölçüde gen düzeyindeki modülasyonlara dayanır. Kortizol, çekirdek içindeki hangi spesifik transkripsiyon faktörünü inhibe ederek interlökin-2 oluşumunu ve T lenfosit proliferasyonunu baskılar?
Doğru Şık (A): Nükleer Faktör-κB (NF-κB)
Açıklama: Kortizol sitoplazmik reseptörüne bağlanıp çekirdeğe geçtiğinde, güçlü bir enflamasyon uyarıcısı olan transkripsiyon faktörü NF-κB'nin hedef genlere bağlanmasını engeller. NF-κB'nin blokajı interlökin-2 (IL-2) dahil birçok sitokinin sentezini keser; IL-2 eksikliği de T lenfosit çoğalmasını durdurarak immünsupresyon sağlar.

---

### ÇİFT 79 (Benzerlik: 0.76)

**Soru 1 (ID: dcd3ffcc-21cb-4bb3-a478-b5a4095f1e38)**
Soru Kökü: Pankreas beta hücrelerinde kan şekerindeki yükselmeye yanıt olarak insülin ekzositozunun başlamasını sağlayan kritik hücresel membran değişikliği aşağıdakilerden hangisidir?
Doğru Şık (E): Hücre içi ATP artışına bağlı olarak potasyum kanallarının kapanması ve membranın depolarize olması
Açıklama: Beta hücresine GLUT-2 ile giren glukoz metabolize olup ATP ürettiğinde, membrana yerleşik ATP-bağımlı potasyum kanalları kapanır ve K+ çıkışı durur. Bu durum hücreyi depolarize ederek voltaj kapılı kalsiyum kanallarının açılmasını, kalsiyumun hücre içine girmesini ve sonuçta insülin dolu veziküllerin ekzositozunu başlatır. Sülfonilüre grubu antidiyabetikler de tam olarak bu potasyum kanalını hedef alarak etki gösterir.

**Soru 2 (ID: e75a8645-2a3a-4f0b-ad2b-1b2c4deffd12)**
Soru Kökü: Pankreas beta hücresinden kan glikoz düzeyine yanıt olarak gelişen insülin sekresyon kaskadında, GLUT-2 aracılığıyla hücreye giren glikozun metabolize olup ATP konsantrasyonunu artırması, membran potansiyelini ilk olarak hangi mekanizmayla değiştirir?
Doğru Şık (A): ATP-bağımlı potasyum kanallarının kapanması
Açıklama: Beta hücresinde ATP seviyesi yükseldiğinde, hücre membranındaki ATP-bağımlı potasyum (K+) kanalları kapanır. Dışarıya K+ çıkışı durduğu için hücre içi pozitifleşir ve membran depolarize olur. Bu depolarizasyon voltaj kapılı kalsiyum kanallarını açar ve içeri giren Ca++ insülin ekzositozunu başlatır.

---

### ÇİFT 80 (Benzerlik: 0.76)

**Soru 1 (ID: 6b398d2d-6b6e-4977-ab91-39b6683b7373)**
Soru Kökü: Aşağıdakilerden hangisi tiroid hormonlarının metabolizma ve sistemler üzerindeki bilinen fizyolojik etkilerinden biri **değildir**?
Doğru Şık (C): Plazma fosfolipid ve trigliserid miktarının artırılması
Açıklama: Tiroid hormonları yağ dokusunda lipolizi artırarak serbest yağ asitlerini kana mobilize etse de, plazma kolesterol, fosfolipid ve trigliserid miktarlarını belirgin şekilde azaltır. Bunun temel nedeni karaciğerde LDL reseptör sentezinin uyarılmasıyla lipitlerin dolaşımdan hücre içine hızla alınmasıdır. Na-K ATPaz aktivitesinin artırılması ise bazal metabolizma hızını yükselten temel hücresel mekanizmadır.

**Soru 2 (ID: d88fa780-4d68-4957-837b-775c7c2c090a)**
Soru Kökü: Tiroid hormonlarının sistemik lipid metabolizması üzerindeki hücresel hedefleri ve etkileri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Plazmada serbest yağ asidi miktarını azaltarak lipogenezi uyarır
Açıklama: Tiroid hormonları yağ dokusunda belirgin lipolitik etki gösterir; depo yağlarını yıkarak kana serbest yağ asidi salınımını artırır (azaltmaz). Aynı zamanda karaciğerde LDL reseptör sayısını artırdıkları için dolaşımdan lipit klirensini hızlandırır, plazma kolesterol, trigliserit ve fosfolipid seviyelerini belirgin şekilde düşürürler.

---

### ÇİFT 81 (Benzerlik: 0.76)

**Soru 1 (ID: 7ec10c9a-79dd-4f92-afea-aeeb668d82f3)**
Soru Kökü: Otuz sekiz yaşında kadın hasta, son bir yılda özellikle gövdesinde belirginleşen kilo artışı, ense kökünde yağ birikimi (bizon hörgücü), aydede yüz ve karın bölgesinde geniş mor çatlaklar (stria) şikayetleriyle kliniğe başvuruyor. Cushing sendromu tespit edilen hastanın karın cildindeki mor çatlakların oluşumunun hücresel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Glikokortikoidlerin dokudaki fibroblastları baskılayarak tip I kollajen sentezini bozması
Açıklama: Kortizol fazlalığı protein katabolizmasını şiddetli şekilde artırır. Kemik matriksinde ve ciltte bulunan fibroblastların aktivitesini baskılayarak başta tip I kollajen olmak üzere yapısal proteinlerin sentezini engeller. Derialtı kollajen ağının zayıflaması ile cilt mekanik gerilime dayanamaz ve kolayca yırtılır. İnceltilmiş epidermisin altından alttaki damarların görünmesi strialara o karakteristik mor/kırmızı rengini verir.

**Soru 2 (ID: cc358050-540a-452e-a9b9-6f51b003ecc5)**
Soru Kökü: Otuz iki yaşında kadın hasta romatoid artrit tedavisi için uzun süredir yüksek doz glikokortikoid kullanmaktadır. Hastanın karın çevresinde mor renkli strialar (çatlaklar) ve kollarında kolay oluşan ekimozlar gözlenmiştir. Bu kutanöz bulguların temel hücresel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Fibroblastların kollajen sentezini baskılaması
Açıklama: Glikokortikoidler dermal fibroblastların fonksiyonunu baskılayarak tip I ve III kollajen sentezini ciddi şekilde azaltır. Bu durum deri ve cilt altı dokuların mekanik direncini düşürerek stria oluşumuna, perivasküler destek dokunun kaybına bağlı damar frajilitesindeki artış ise zayıf travmalarla bile ekimoz (morarma) oluşumuna yol açar.

---

### ÇİFT 82 (Benzerlik: 0.75)

**Soru 1 (ID: 10b0abcf-6564-4500-8b9c-746c953f658f)**
Soru Kökü: Tiroid hormon biyosentezinde bazal membrandan NIS ile hücre içine alınan sodyum ve iyodür iyonlarından iyodürün, apikal zardan kolloid lümenine tek yönlü taşınmasını sağlayan ve bu esnada hücre içine klorür iyonu (Cl-) alan değişim proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Pendrin
Açıklama: Folikül hücresinin bazolateral (kan tarafı) membranından alınan iyot, apikal (lümen) membranda yer alan Pendrin adlı bir klor/iyot taşıyıcı proteini sayesinde kolloid lümenine pompalanır. Pendrin mutasyonları tiroidde iyot organifikasyonunu bozarak Pendred sendromuna (sağırlık ve guatr) yol açar. NIS, bazal membranda sodyum bağımlı sekonder aktif taşıma yapan pompadır.

**Soru 2 (ID: c3887790-cf0a-41d1-89fd-1308ae3465d7)**
Soru Kökü: Tiroid hormon sentezi sürecinde, kandaki iyodürün (I-) foliküler hücreye aktif olarak alınmasını sağlayan, tiroid hormon üretiminin hız kısıtlayıcı basamağı olan ve yüksek plazma iyot düzeylerinde inhibe olarak Wolf-Chaikoff etkisine aracılık eden protein aşağıdakilerden hangisidir?
Doğru Şık (C): Sodyum-iyot simport proteini (NIS)
Açıklama: İyot iyonları tiroid foliküler hücrelerinin bazolateral membranından sodyum-iyot simport proteini (NIS) ile hücre içine aktif transportla alınır ki bu aşama sentezin hız kısıtlayıcı basamağıdır. Yüksek ekstraselüler iyot konsantrasyonu NIS aktivitesini baskılayarak tiroid sentezini durdurur ve bu otoregülasyon mekanizmasına Wolf-Chaikoff etkisi denir. Pendrin ise iyodu lümene taşıyan apikal yerleşimli klor-iyot değiştirici proteindir.

---

### ÇİFT 83 (Benzerlik: 0.75)

**Soru 1 (ID: aa1ea401-690c-4f79-bc28-639980a28539)**
Soru Kökü: Plasenta, böbrek ve nöron dokularında bazal glikoz alımından sorumlu olan glikoz taşıyıcı izoformu aşağıdakilerden hangisidir?
Doğru Şık (B): GLUT-3
Açıklama: GLUT-3, özellikle nöronlar, plasenta, böbrek ve diğer visseral organlarda bazal glikoz alımını sağlayan yüksek afiniteli taşıyıcıdır. GLUT-1 eritrosit ve kan-beyin bariyerinde bulunurken, nöron içi glikoz geçişi spesifik olarak GLUT-3 ile yürütülür. Glikoz seviyelerindeki ani dalgalanmalardan nöronların etkilenmesini engelleyen hücresel sigorta mekanizmasıdır.

**Soru 2 (ID: e7c7424f-6cdf-4f80-adeb-1ed9203c81fa)**
Soru Kökü: Hücre membranlarında bulunan taşıyıcı proteinler glukozun dokulara alımını kolaylaştırılmış difüzyonla sağlar. Santral sinir sisteminin enerji akışını korumak adına beyin kapiller endotelinde ve eritrositlerde yüksek oranda ifade edilen, insülinden bağımsız çalışan glukoz taşıyıcısı aşağıdakilerden hangisidir?
Doğru Şık (D): GLUT-1
Açıklama: GLUT-1 taşıyıcısı, kan-beyin bariyerini oluşturan astrosit ve kapiller endotelleri ile eritrositlerin membranında bulunur ve bazal, sürekli bir glukoz alımı sağlar. Bu sistem insülinden tamamen bağımsızdır, zira beyin kan şekeri düştüğünde dahi glukozu hücre içine alabilmelidir. İnsüline bağımlı olan tek transporter iskelet ve yağ dokusunda bulunan GLUT-4'tür.

---

### ÇİFT 84 (Benzerlik: 0.75)

**Soru 1 (ID: 4cee558e-1342-4d04-bf94-938cca9d0144)**
Soru Kökü: Kortizolün kan hücreleri üzerindeki sayısal etkileri değerlendirildiğinde, plazmada düzeyinin artmasıyla dolaşımdaki aşağıdaki hücre gruplarından hangisinin sayısında azalma **görülmez**?
Doğru Şık (D): Nötrofil
Açıklama: Kortizol eozinofil, lenfosit ve bazofil üretimini ve kanda kalış süresini azaltırken, nötrofil (PMNL) sayısını artırır. Monosit, eritrosit ve trombosit sayısı da kortizol ile artış gösterir. Kan sayımında lenfopeni ve eozinopeni yanında paradoksik nötrofili steroid etkisinin majör bulgusudur.

**Soru 2 (ID: 89ec7da6-e4db-45e9-87d5-dcda1c91d4c6)**
Soru Kökü: Cushing sendromu ön tanısı ile incelenen 38 yaşında erkek hastanın periferik kan yayması değerlendiriliyor. Yüksek kortizol düzeylerinin hematopoietik sistem üzerindeki fizyolojik etkisi dikkate alındığında, bu hastada aşağıdaki kan hücresi türlerinden hangisinin sayısında artış beklen **mez**?
Doğru Şık (C): Lenfosit
Açıklama: Glikokortikoidler periferik kanda lenfosit, eozinofil ve bazofil sayısını belirgin şekilde azaltırken; nötrofil (PMNL), eritrosit, trombosit ve monosit sayısını artırır. Kortizol lenfositlerin lenfoid dokularda sekestrasyonuna ve apoptozuna yol açarak sayısını düşürür. Bu nedenle Cushing hastalarında lökositoz görülse de bu lenfosit kaynaklı değil, nötrofil kaynaklıdır.

---

### ÇİFT 85 (Benzerlik: 0.75)

**Soru 1 (ID: 20810c2b-6376-49b8-aa73-1bb41ed7cd6e)**
Soru Kökü: İnce bağırsaktaki L hücrelerinden salgılanan ve moleküler yapısı itibarıyla pankreatik glukagona en fazla benzeyen gastrointestinal sistem hormonu aşağıdakilerden hangisidir?
Doğru Şık (C): Glisentin
Açıklama: İnce bağırsak L hücrelerinde de preproglukagon geni eksprese edilir, ancak buradaki proteolitik işlenme pankreastan farklıdır ve sonuç olarak glisentin, GLP-1 ve GLP-2 açığa çıkar. Glisentin yapısal olarak pankreatik glukagona en çok benzeyen GI hormonudur. Sekretin ailesi glukagonla akraba olsa da, doğrudan glisentin kadar primer aminoasit benzerliği taşımazlar.

**Soru 2 (ID: a9b91c10-ba18-44fb-8070-c7d6ad8f8212)**
Soru Kökü: Aşağıdaki gastrointestinal sistem hormonlarından hangisinin fizyolojik koşullarda pankreas beta hücrelerinden insülin salgısını artırıcı (inkretin etki) göstermesi **en az olasıdır**?
Doğru Şık (A): Somatostatin
Açıklama: Gastrointestinal sistemden besin alımıyla salgılanan GLP-1, GIP, Gastrin ve Sekretin, kan glukozu yükselirken beta hücrelerini önceden uyararak insülin yanıtını güçlendirir (inkretin etkisi). Somatostatin ise tam tersine, gastrointestinal asimilasyonu yavaşlatmak amacıyla insülin dahil tüm endokrin/ekzokrin salgıları bloke eden evrensel bir frenleyicidir.

---

### ÇİFT 86 (Benzerlik: 0.75)

**Soru 1 (ID: 9c481527-55e9-4335-9098-1b0100e84a21)**
Soru Kökü: Toplumda hipertiroidinin en sık sebebi olan Graves hastalığında, tiroid hormon yüksekliğinden bağımsız olarak gelişen ve otoimmün karakter taşıyan ekzoftalmi (gözlerin öne fırlaması) bulgusunun spesifik hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): TSH reseptörüne bağlanan otoantikorların retrobulber fibroblastlarda glikozaminoglikan sentezini artırması
Açıklama: Graves hastalığı, tiroid bezindeki TSH reseptörlerini uyaran otoantikorlar (TSI) nedeniyle oluşur. İlginç bir şekilde, bu TSH reseptörleri sadece tiroidde değil, retrobulber (göz arkası) bağ dokusundaki fibroblastların yüzeyinde de bulunur. Otoantikorlar bu fibroblastları uyararak lokal glikozaminoglikan (su tutucu matriks) üretimini artırır ve doku şişerek göz küresini öne iter.

**Soru 2 (ID: b4f4d2b8-11d9-4449-b2d5-073001e85ca3)**
Soru Kökü: Kırk beş yaşında kadın hasta kilo kaybı, anksiyete, çarpıntı ve belirgin ekzoftalmi tablosuyla başvuruyor. Yapılan tetkiklerde toplumda hipertiroidinin en sık sebebi olan Graves hastalığı saptanıyor. Bu hastalığın ekzoftalmi patogenezinde, TSH benzeri otoantikorların orbita arkasındaki bağ dokusunda hangi hücreler üzerindeki reseptörleri aktive edip glikozaminoglikan sentezini artırdığı gösterilmiştir?
Doğru Şık (A): Fibroblast
Açıklama: Graves hastalığında TSH reseptörlerine karşı gelişen uyarıcı otoantikorlar sadece tiroid bezinde hiperplazi ve hormon sentezini uyarmakla kalmaz. TSH reseptörleri tiroid dışı dokularda, özellikle retrobulber bağ dokudaki fibroblastlarda da eksprese edilir. Bu fibroblastların otoantikorlarla aktivasyonu, aşırı hidrofilik glikozaminoglikan sentezine, ödeme ve sonuç olarak göz küresinin öne doğru itilmesine (ekzoftalmi) yol açar.

---

### ÇİFT 87 (Benzerlik: 0.75)

**Soru 1 (ID: 5f2b0e52-b001-4315-a9dc-cfdb1a048dcb)**
Soru Kökü: Primer adrenokortikal yetmezlik (Addison hastalığı) tanısı alan 28 yaşında kadın hastada yorgunluk, senkop ve hiperpigmentasyon bulgularına ek olarak aksiller ve pubik kıllanmada belirgin azalma saptanıyor. Hastadaki kıllanma kaybından sorumlu hormonun temel üretim yeri ve adı aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): Zona retikülaris - Dihidroepiandrosteron (DHEA)
Açıklama: Kadınlarda aksiller ve pubik kıllanmadan ile cinsel libidodan sorumlu temel androjenler, böbrek üstü bezinin zona retikülaris tabakasından salgılanan DHEA ve androstenediondur. Addison hastalığında adrenal korteksin tüm tabakaları harap olduğundan, bu zayıf androjenlerin de üretimi durur. Androstenedion da bu bölgeden salgılansa da klinik tablo DHEA eksikliğinin daha belirgin bir yansımasıdır ve şıklarda spesifik olarak eşleştirilmiştir.

**Soru 2 (ID: fba97b3c-817d-4715-ad64-d1de6872a107)**
Soru Kökü: 35 yaşında kadın hasta, son altı aydır artan halsizlik, kilo kaybı ve ayağa kalktığında baş dönmesi şikayetleriyle başvuruyor. Anamnezinde aksiller ve pubik tüylenmesinde azalma olduğu ile belirgin libido kaybı yaşadığı öğreniliyor. Kan basıncı 90/60 mmHg olan bu hastadaki tüylenme ve libido değişikliklerinden aşağıdaki hormonların hangisinin eksikliği sorumludur?
Doğru Şık (B): Dihidroepiandrosteron (DHEA)
Açıklama: Addison hastalığı tablosu ile uyumlu bu hastada, adrenal korteksin zona retikülaris tabakasından sentezlenen androjenlerin (DHEA ve androstenedion) eksikliği söz konusudur. Kadınlarda bu zayıf etkili adrenal androjenlerin kaybı, koltuk altı ile pubik bölge tüylenmesinde ve libidoda azalmaya yol açar. Hipotansiyon ve kilo kaybı kortizol/aldosteron eksikliğine işaret etse de, tüylenme ve libido kaybının spesifik nedeni DHEA ve androstenedion eksikliğidir.

---

### ÇİFT 88 (Benzerlik: 0.75)

**Soru 1 (ID: af90d115-ebf1-47e4-ac53-cebdfe6e9566)**
Soru Kökü: Langerhans adacıklarının yaklaşık %5'lik kısmını oluşturan, salgılanması tamamen kolinerjik denetim altında olan ve özellikle protein içeren yemek sonrası veya akut hipoglisemik stres durumunda kana salınan hormon aşağıdakilerden hangisidir?
Doğru Şık (D): Pankreatik polipeptid
Açıklama: Pankreatik polipeptid, Langerhans adacıklarındaki F hücreleri tarafından sentezlenir ve parasempatik (kolinerjik) stimülasyonla sekresyonu artar. Protein ağırlıklı diyetler ve akut egzersiz gibi durumlar bu hücrelerin temel tetikleyicisidir. Gastrointestinal kanalda insülin veya glukagon dışındaki destekleyici adacık yanıtını organize eder.

**Soru 2 (ID: f247bc37-1597-451a-b566-94cff1a7d81c)**
Soru Kökü: Salgılanması kolinerjik denetim altında olan, özellikle protein içeriği yüksek bir yemek sonrası ve ağır egzersizde sekresyonu artan, Langerhans adacıklarının %5'ini oluşturan F hücreleri tarafından üretilen faktör aşağıdakilerden hangisidir?
Doğru Şık (E): Pankreatik polipeptid
Açıklama: Langerhans adacıklarının en nadir hücresel komponenti olan F hücreleri, pankreatik polipeptid sentezler. Glisentin bağırsak L hücrelerinden salınan bir proglukagon türevidir. Pankreatik polipeptid pankreasın ekzokrin salgısını ve safra kesesi kontraksiyonunu modüle eder.

---

### ÇİFT 89 (Benzerlik: 0.75)

**Soru 1 (ID: 62d00c4d-7f8b-4475-972c-444ced03a481)**
Soru Kökü: Uzun süreli aşırı kortizol maruziyeti sonucu gelişen Cushing sendromlu bir hastada; karın bölgesinde mor strialar (çatlaklar) oluşması, derinin incelmesi ve basit travmalarla bile şiddetli ekimozlar (kanama odakları) görülmesinin fizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Kortizolün fibroblastlar üzerinde tip 1 kollajen sentezini ve aktivitesini ciddi şekilde baskılaması
Açıklama: Kortizol katabolik bir hormondur; iskelet kası ve bağ dokusunda protein yıkımını artırır ve yeni protein sentezini engeller. Dermal ve damar duvarı dayanıklılığını sağlayan temel yapıtaşı olan Tip 1 kollajenin fibroblastlarca sentezini baskılar. Bağ dokusu desteğini kaybeden kılcal damarlar kolayca çatlar (ekimoz) ve gerilen deri dermisi yırtılarak mor striaları oluşturur.

**Soru 2 (ID: cc358050-540a-452e-a9b9-6f51b003ecc5)**
Soru Kökü: Otuz iki yaşında kadın hasta romatoid artrit tedavisi için uzun süredir yüksek doz glikokortikoid kullanmaktadır. Hastanın karın çevresinde mor renkli strialar (çatlaklar) ve kollarında kolay oluşan ekimozlar gözlenmiştir. Bu kutanöz bulguların temel hücresel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Fibroblastların kollajen sentezini baskılaması
Açıklama: Glikokortikoidler dermal fibroblastların fonksiyonunu baskılayarak tip I ve III kollajen sentezini ciddi şekilde azaltır. Bu durum deri ve cilt altı dokuların mekanik direncini düşürerek stria oluşumuna, perivasküler destek dokunun kaybına bağlı damar frajilitesindeki artış ise zayıf travmalarla bile ekimoz (morarma) oluşumuna yol açar.

---

### ÇİFT 90 (Benzerlik: 0.75)

**Soru 1 (ID: 35654a12-4f27-4a80-89ef-3122ad8463fa)**
Soru Kökü: Tiroglobulin molekülü, tiroid folikül hücresi endoplazmik retikulumunda sentezlenip kolloid içine salgılanan büyük bir glikoproteindir. Okside olmuş reaktif iyotun tiroglobulin üzerindeki tirozin kalıntılarına bağlanarak iyodotirozinleri oluşturduğu 'iyodinasyon' basamağını hızlandıran spesifik enzim aşağıdakilerden hangisidir?
Doğru Şık (E): İyodinaz
Açıklama: Tiroid hormon sentezinde oksidasyon ve kenetlenme reaksiyonları esas olarak tiroid peroksidaz tarafından yürütülürken, okside olmuş reaktif iyotun tiroglobulin yapısındaki tirozin aminoasitlerine eklenmesi (iyodinasyon/organifikasyon) basamağını hızlandıran enzim iyodinazdır. Megalin folikül hücresindeki kolloid endositozunu sağlayan reseptördür, pendrin ise klor/iyot değişimi yapan bazal zarda değil apikal zardaki taşıyıcıdır.

**Soru 2 (ID: c3887790-cf0a-41d1-89fd-1308ae3465d7)**
Soru Kökü: Tiroid hormon sentezi sürecinde, kandaki iyodürün (I-) foliküler hücreye aktif olarak alınmasını sağlayan, tiroid hormon üretiminin hız kısıtlayıcı basamağı olan ve yüksek plazma iyot düzeylerinde inhibe olarak Wolf-Chaikoff etkisine aracılık eden protein aşağıdakilerden hangisidir?
Doğru Şık (C): Sodyum-iyot simport proteini (NIS)
Açıklama: İyot iyonları tiroid foliküler hücrelerinin bazolateral membranından sodyum-iyot simport proteini (NIS) ile hücre içine aktif transportla alınır ki bu aşama sentezin hız kısıtlayıcı basamağıdır. Yüksek ekstraselüler iyot konsantrasyonu NIS aktivitesini baskılayarak tiroid sentezini durdurur ve bu otoregülasyon mekanizmasına Wolf-Chaikoff etkisi denir. Pendrin ise iyodu lümene taşıyan apikal yerleşimli klor-iyot değiştirici proteindir.

---

