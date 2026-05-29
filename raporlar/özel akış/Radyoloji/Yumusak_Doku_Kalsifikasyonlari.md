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

### ÇİFT 1 (Benzerlik: 0.77)

**Soru 1 (ID: 75370956-7884-4993-8422-2f6b0bf5a166)**
Soru Kökü: Maksiller sinüs ve nazal kavite kalsifikasyonları ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Rinolitlerin ayırıcı tanısında lezyonun sinüs sınırına yapışık olma durumu değerlendirilmelidir.
Açıklama: Radyoopak alanın maksiller sinüs duvarına yapışık olup olmadığının değerlendirilmesi antrolit ile antral ekzostoz (kemik çıkıntısı) ayrımında kullanılır, rinolitte değil. Rinolit nazal kavitede yer alır ve ekzojen kaynaklıdır. Antrolit ise sinüs içindedir ve endojen kaynaklı materyaller üzerinde kalsiyum çökmesiyle tabakalı formda izlenir.

**Soru 2 (ID: e4807850-a1c8-466a-9f0b-60992c4ff952)**
Soru Kökü: Maksiller sinüs bölgesinde izlenen kalsifikasyonların etiyolojik ayırıcı tanısıyla ilgili verilenlerden hangisi doğrudur?
Doğru Şık (D): Antrolitler kemik parçası veya pıhtılaşmış kan gibi endojen çekirdekler üzerinde oluşan kalsifikasyonlardır.
Açıklama: Antrolitler diş kökü, pıhtı veya mukus gibi endojen kaynakların çevresinde kalsiyum tuzu birikmesiyle oluşurken; rinolitler burun boşluğunda yabancı cisim (ekzojen) etrafında oluşurlar. Antral ekzostoz ise sinüs sınırına her pozisyonda yapışık kemik çıkıntısıdır. Ayrıca küçük antrolitler sıklıkla asemptomatiktir.

---

### ÇİFT 2 (Benzerlik: 0.76)

**Soru 1 (ID: 4bb0be2f-5334-4d1a-af78-7a4aeae50956)**
Soru Kökü: İdiopatik kalsifikasyonlar, serum kalsiyum ve fosfat düzeyleri normal olmasına rağmen tamamen sağlıklı dokularda ektopik mineral depolanmasıyla ayrışır. Buna göre aşağıdaki kalsifikasyon lezyonlarından hangisi patogenezi gereği bu gruba dahildir?
Doğru Şık (C): Sialolit
Açıklama: Kaynak metne göre İdiopatik Kalsifikasyon sınıfına giren lezyonlar; serum Ca/P seviyesi normal iken sağlıklı dokularda gelişen kalsifikasyonlardır. Sialolit ve antrolit bu grubun örneklerindendir. Kalsifiye lenf nodu ise hasarlı/enflame doku üzerinde geliştiğinden Distrofik kalsifikasyon grubundadır.

**Soru 2 (ID: b5fccb75-613e-4819-a3e0-ccc904b9dce8)**
Soru Kökü: Serum kalsiyum ve fosfat seviyeleri normal olan bir hastada, geçirilmiş kronik enflamasyona bağlı olarak hasar görmüş dokuda kalsiyum tuzlarının birikmesiyle karakterize durum aşağıdakilerden hangisidir?
Doğru Şık (A): Distrofik kalsifikasyon
Açıklama: Distrofik kalsifikasyon, serum kalsiyum/fosfat dengesi normal iken dejenere olmuş veya ölü dokularda kalsiyum depolanmasıdır. Metastatik kalsifikasyon ise tam tersine kalsiyum/fosfat seviyelerinin yüksek olduğu (örneğin hiperparatiroidizm) durumlarda normal dokulara çökme ile oluşur. Sıklıkla tonsillolit ve kalsifiye lenf nodlarında distrofik mekanizma devrededir.

---

### ÇİFT 3 (Benzerlik: 0.73)

**Soru 1 (ID: 459f3616-5c67-4319-9be5-f6d49a61bc7a)**
Soru Kökü: Fasial arterde 'pipo sapı' (pipe stem) görüntüsü veren kalsifikasyonun hücresel düzeydeki başlangıç patolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Damarların medial örtüsü içinde elastik fibril kaybı
Açıklama: Monckeberg medial kalsinozisi (Arteriosklerozis), arterlerin tunika media tabakasındaki dejenerasyon ve elastik fibril kaybını takiben gelişen kalsiyum depolanmasıdır. Arter bifurkasyonlarındaki lümeni daraltan lipid birikimi kalsifiye aterosklerotik plağın özelliğidir ve Monckeberg tablosundan tamamen farklı bir patogeneze sahiptir. Bu fibril kaybı sonucunda fasial arter boyunca birbirine paralel ince radyopak çizgiler izlenir.

**Soru 2 (ID: 936291a1-c963-4b75-adc4-16f7b2c51b17)**
Soru Kökü: Damarların medial örtüsü içinde elastik fibril kaybını takiben gelişen, panoramik radyografta birbirine paralel ince radyoopak çizgiler halinde (pipo sapı/tramvay hattı) izlenen kalsifikasyon tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Monckeberg medial kalsinozisi
Açıklama: Monckeberg medial kalsinozisi (Arteriosklerozis), arterin medial tabakasını tutar ve tübüler bir yapı olan damarın kenarlarını paralel çizgiler (tramvay hattı) şeklinde görünür kılar. Aterosklerotik plak ise bifurkasyon bölgelerinde lümende gelişen, vertikal lineer ve düzensiz yapıdadır. Monckeberg fasial arterde sık görülür ve kesitsel görüntülerde yüzük halkası şeklindedir.

---

### ÇİFT 4 (Benzerlik: 0.73)

**Soru 1 (ID: 81bfe72d-f443-45e8-98f0-c3b9630588ec)**
Soru Kökü: Yutkunma, konuşma ve başın hareketi ile şiddetlenen boğaz ve kulak ağrısı şikayeti olan bir hastanın panoramik radyografisinde hyoid kemiğe doğru uzanan radyoopak bantlar izlenmiştir. Bu hastanın tanısında değerlendirilen anatomik yapının normal uzunluk sınırı aşağıdakilerden hangisidir?
Doğru Şık (C): 25-30 mm
Açıklama: Eagle sendromuna neden olan stylohyoid ligament ossifikasyonunda temel alınan anatomik ölçüt, styloid çıkıntının uzunluğudur. Sağlıklı bireylerde normal styloid proçes uzunluğu 25-30 mm arasındadır. Bu sınırın üzerindeki kalsifikasyon uzantıları, komşu vasküler ve nöral yapılara (glossofaringeal sinir, karotid arter) bası yaparak yutkunma ve baş hareketleriyle ağrı yaratır.

**Soru 2 (ID: a47375f0-1d14-4f91-b1c0-7c1018b5470a)**
Soru Kökü: Stylohyoid ligament ossifikasyonunun değerlendirildiği bir vakada, Eagle sendromu teşhisi koyulabilmesi için radyografide ölçülen styloid proçes uzunluğunun normal fizyolojik sınırı aşması beklenir. Literatüre göre asemptomatik bireylerde styloid proçesin normal uzunluğu genel olarak hangi aralıkta kabul edilmektedir?
Doğru Şık (B): 25-30 mm
Açıklama: Normal fizyolojik koşullarda styloid proçesin uzunluğu 25-30 mm arasında kabul edilir; bu sınırın aşılması ve ligamentin ossifiye olması durumunda klinik semptomların eşlik etmesiyle Eagle sendromu düşünülür. Bu uzunluk ölçümü radyografik tanının temel yapıtaşlarından biridir. Semptomsuz hastalarda ise proçes uzun olsa bile genellikle tedavi endikasyonu doğmaz.

---

### ÇİFT 5 (Benzerlik: 0.73)

**Soru 1 (ID: 2556ba11-bd26-474a-8dae-7708c5c6d5fb)**
Soru Kökü: Altmış beş yaşında asemptomatik erkek hastanın rutin panoramik radyografisinde, hyoid kemiğin büyük boynuzunun yakınında, servikal vertebralar ile aynı seviyede vertikal lineer dağılım gösteren multipl homojen radyopasiteler izlenmiştir. Bu kalsifikasyonun lokalizasyonu dikkate alındığında, en çok hangi servikal omur seviyeleri arasında yer alması beklenir?
Doğru Şık (D): C3 - C4
Açıklama: Kalsifiye aterosklerotik plaklar tipik olarak karotid arter bifurkasyon bölgelerinde oluşur ve bu bölge anatomik olarak hyoid kemiğin büyük boynuzu hizasında, radyografik olarak ise C3 ile C4 servikal vertebraları arasında lokalize olur. C1-C2 veya daha alt servikal seviyeler (C5-C7) bu bifurkasyonun ve karakteristik plak görünümünün yerleşim alanı değildir. Bu alanın homojen radyopasitesi tanı koydurucudur.

**Soru 2 (ID: d9d34d61-4ba5-4015-ba91-abc5a674cc3f)**
Soru Kökü: 55 yaşında kadın hastanın rutin panoramik kontrolünde C3 ve C4 vertebraları hizasında, hyoid kemiğe yakın konumda, uniform boyutta ve düzgün şekilli radyoopak bir yapı tespit edilmiştir. Hasta tamamen asemptomatiktir. Bu lezyonun ayırıcı tanısında ilk olarak aşağıdakilerden hangisi düşünülmelidir?
Doğru Şık (E): Triköz kıkırdak kalsifikasyonu
Açıklama: C3-C4 mesafesi karotis arter bifurkasyonuna ve larengeal kıkırdaklara denk gelir. Burada kalsifiye aterosklerotik plaklar izlenebilir ancak plaklar genellikle irregüler ve vertikal lineer uzanımlıdır. Soruda tarif edilen 'uniform (düzgün ve tek tip) boyut ve şekil', larengeal kıkırdak içindeki triköz (triticeous) kıkırdak kalsifikasyonunun aterosklerotik plaktan ayrımında kullanılan anahtardır.

---

### ÇİFT 6 (Benzerlik: 0.73)

**Soru 1 (ID: 8979ec0b-5ea8-47ae-974a-9d8c07694e50)**
Soru Kökü: Panoramik radyografide mandibular ramus bölgesine süperpoze olan radyopak oluşumların flebolit olarak tanımlanabilmesi için radyolojik açıdan aşağıdaki kriterlerden hangisini taşıması karakteristiktir?
Doğru Şık (D): Çapının 6 mm'den büyük ve rastgele demetler halinde olması
Açıklama: Flebolitler genellikle çapı 6 mm'den büyük, multipl ve rastgele dağılım gösteren demetler şeklinde izlenen kalsifiye trombüslerdir. Tek bir hat üzerinde ardışık dizilim göstermesi sialolitlerin (submandibular kanal seyri boyunca) karakteristik özelliğidir. Flebolitlerin radyolüsent merkezi izlenebilse de asıl ayırıcı diagnostik kriter rastgele kümelenme paternidir.

**Soru 2 (ID: de52cb68-89f0-4351-a2f5-51e917a901b2)**
Soru Kökü: Aşağıdakilerden hangisi flebolitlerin radyografik veya klinik özelliklerinden biri **değildir**?
Doğru Şık (B): Birden fazla olduklarında tek bir çizgi üzerinde dizilim gösterirler.
Açıklama: Flebolitler ven içi kalsifiye trombüslerdir ve damar ağı (hemanjiom) içinde rastgele, demetler halinde (cluster) dağılım gösterirler. Birden fazla olduklarında tek bir çizgi üzerinde dizilim gösterme özelliği flebolitlere değil, tükürük bezi kanalını takip eden sialolitlere aittir. Boğa gözü (bull's eye) görünümü ve basınçla renk solması flebolit için tipiktir.

---

### ÇİFT 7 (Benzerlik: 0.72)

**Soru 1 (ID: 64d4b8b5-c8c5-4ffc-9115-8fb8df829879)**
Soru Kökü: Kalsifiye aterosklerotik plakların panoramik radyograftaki tespiti sırasında yanlış pozitifliği önlemek adına larengeal kıkırdak kalsifikasyonları ile ayırıcı tanısı yapılmalıdır. Bu bölgede plak ile en sık karışan, ancak üniform boyutu ve şekli ile ayırt edilen anatomik yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Tritiseöz kıkırdak
Açıklama: Aterosklerotik plakların ayırıcı tanısında, C3-C4 hizasındaki lokalizasyonu nedeniyle en sık karışan yapı kalsifiye tritiseöz (triticeous) kıkırdaktır. Tritiseöz kıkırdak; homojen, buğday tanesi şeklinde (üniform) boyutu ve spesifik larengeal lokalizasyonu ile düzensiz, multipl olan aterosklerotik plaktan ayrılır. Diğer kıkırdaklar daha belirgin hacimli ve farklı anatomik izdüşümlere sahiptir.

**Soru 2 (ID: b2357654-1863-49d8-b758-f3514ef2bc12)**
Soru Kökü: Altmış beş yaşındaki kadın hastanın panoramik radyografisinde boyun bölgesinde tesadüfen izlenen kalsifikasyonların laringeal kıkırdak kaynaklı olduğu düşünülmektedir. Aşağıdaki kıkırdak yapılarından hangisi yaşla beraber kalsifikasyon gösteren hiyalin yapısındaki laringeal kıkırdaklardan biri **değildir**?
Doğru Şık (C): Epiglot kıkırdak
Açıklama: Tiroid, krikoid ve aritenoid kıkırdağın büyük bir bölümü hiyalin kıkırdak yapısındadır ve yaşın ilerlemesiyle birlikte kalsifikasyon potansiyeli taşır. Epiglot ise elastik kıkırdak yapısındadır ve bu gruba dahil edilen tipik hiyalin kalsifikasyon paternini göstermez. Kalsifiye olan bu laringeal yapılar genelde klinik bulgu vermez ve tesadüfen saptanır.

---

### ÇİFT 8 (Benzerlik: 0.72)

**Soru 1 (ID: 878f9ad0-55b0-4d49-82c8-f70b0d3ceddd)**
Soru Kökü: Sekiz yaşındaki erkek hasta, tek taraflı şiddetli burun tıkanıklığı, kötü koku ve zaman zaman epistaksis (burun kanaması) şikayetiyle kliniğe getirilmiştir. Hastanın alınan paranazal grafilerinde nazal kavitede tek, düzensiz şekilli iyi sınırlı büyük bir radyopasite saptanmıştır. Etiyolojik faktörler göz önüne alındığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Rinolit
Açıklama: Burun boşluğunda (nazal kavite) ekzojen kaynaklı bir yabancı cismin (boncuk, para vs.) nidus görevi görmesiyle etrafında kalsiyum tuzlarının birikmesine rinolit denir. Tek taraflı obstrüksiyon, kanama ve kötü koku bu tablonun tipik klinik triadı içindedir. Maksiller sinüs içerisinde endojen kökenli kalsifikasyonlar ise antrolit olarak isimlendirilir.

**Soru 2 (ID: e4807850-a1c8-466a-9f0b-60992c4ff952)**
Soru Kökü: Maksiller sinüs bölgesinde izlenen kalsifikasyonların etiyolojik ayırıcı tanısıyla ilgili verilenlerden hangisi doğrudur?
Doğru Şık (D): Antrolitler kemik parçası veya pıhtılaşmış kan gibi endojen çekirdekler üzerinde oluşan kalsifikasyonlardır.
Açıklama: Antrolitler diş kökü, pıhtı veya mukus gibi endojen kaynakların çevresinde kalsiyum tuzu birikmesiyle oluşurken; rinolitler burun boşluğunda yabancı cisim (ekzojen) etrafında oluşurlar. Antral ekzostoz ise sinüs sınırına her pozisyonda yapışık kemik çıkıntısıdır. Ayrıca küçük antrolitler sıklıkla asemptomatiktir.

---

### ÇİFT 9 (Benzerlik: 0.71)

**Soru 1 (ID: 3ac02aea-be60-43d8-b542-020ae9f3813d)**
Soru Kökü: Uzun süredir dirençli akne vulgaris lezyonları bulunan 30 yaşındaki kadın hastanın yanak bölgesinden alınan periapikal radyografında, diş köklerine süperpoze olan ancak ortası küçük radyolüsent karakterde çok sayıda yuvarlak radyoopasite izlenmiştir. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Osteoma kutis
Açıklama: Derideki kronik enflamatuar olaylar (özellikle akne vulgaris) zemininde gelişen yumuşak doku ossifikasyonu Osteoma kutis'tir. Sıklıkla kadınlarda yanak/dudak bölgesinde izlenir. Diş çevresine süperpoze olduklarında enostozis ile karışırlar; ancak yanak ve kret arasına film konularak çekildiğinde yumuşak dokuda yer aldıkları ve merkezlerinde radyolüsenti barındırdıkları görülür.

**Soru 2 (ID: 4e11b4cf-2bb5-46c6-80a6-696328b7feed)**
Soru Kökü: Otuz beş yaşında kadın hasta, yanak ve dudak mukozası altında palpasyonda hissedilen küçük sertlikler şikayetiyle başvuruyor. Alınan periapikal radyografta bu bölgelerde ortasında radyolüsent bir merkez barındıran düzgün sınırlı radyopasiteler izleniyor. Bu klinik ve radyografik özellikler aşağıdaki heterotopik kalsifikasyon türlerinden hangisi için en tipiktir?
Doğru Şık (B): Osteoma kutis
Açıklama: Ortasında küçük bir radyolüsent merkez barındıran, yanak ve dudak bölgesinde izlenen küçük radyopasiteler osteoma kutis'in karakteristik radyografik bulgusudur. Miyozitis ossifikans kas dokusu içinde pseudotrabeküllerle karakterizeyken, sialolitler kanal boyunca homojen veya lamine opasiteler verir. Kadınlarda daha sık görülen bu tablo gerçek bir yumuşak doku ossifikasyonudur.

---

### ÇİFT 10 (Benzerlik: 0.71)

**Soru 1 (ID: 8979ec0b-5ea8-47ae-974a-9d8c07694e50)**
Soru Kökü: Panoramik radyografide mandibular ramus bölgesine süperpoze olan radyopak oluşumların flebolit olarak tanımlanabilmesi için radyolojik açıdan aşağıdaki kriterlerden hangisini taşıması karakteristiktir?
Doğru Şık (D): Çapının 6 mm'den büyük ve rastgele demetler halinde olması
Açıklama: Flebolitler genellikle çapı 6 mm'den büyük, multipl ve rastgele dağılım gösteren demetler şeklinde izlenen kalsifiye trombüslerdir. Tek bir hat üzerinde ardışık dizilim göstermesi sialolitlerin (submandibular kanal seyri boyunca) karakteristik özelliğidir. Flebolitlerin radyolüsent merkezi izlenebilse de asıl ayırıcı diagnostik kriter rastgele kümelenme paternidir.

**Soru 2 (ID: 9bcc599b-6ac7-4f43-9904-06696938e91b)**
Soru Kökü: Yumuşak doku kalsifikasyonlarının ayırıcı tanısında, submandibular bölgede izlenen flebolitler ile sialolitlerin radyografik dağılım paternleri farklılık gösterir. Bu iki lezyonu ayırt etmede kullanılan radyografik dağılım kuralı aşağıdakilerden hangisidir?
Doğru Şık (E): Sialolitler tek bir çizgi üzerinde dizilirken, flebolitler rastgele demetler halindedir.
Açıklama: Sialolitler anatomik olarak Wharton kanalını takip ettikleri için birden fazla olduklarında tek bir çizgi (boru) üzerinde sıralanmış gibi görünürler. Flebolitler ise damar ağı (hemanjiom) içerisinde oluştukları için belirli bir hat izlemezler, aksine demetler halinde ve rastgele pozisyonlanmış çoklu kalsifikasyonlar şeklinde izlenirler.

---

### ÇİFT 11 (Benzerlik: 0.70)

**Soru 1 (ID: 275603e2-bbf9-4118-b264-7161ebe19ebf)**
Soru Kökü: Tonsillolitler ile ilgili aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (A): Radyografik olarak dış çerçeveleri belirgin yumurta kabuğu formunda izlenirler.
Açıklama: Tonsillolitler radyografik olarak multipl, küçük, düzensiz salkım veya üzüm kümesi şeklinde kümeler halindeki radyoopasiteler olarak izlenir. Yumurta kabuğu (eggshell) görünümü ve karnabahar morfolojisi tonsillolitin değil, distrofik kalsifikasyona uğramış servikal/submandibular lenf nodlarının tipik özelliğidir.

**Soru 2 (ID: fea7c2ac-2b87-4d5a-822c-247f281094a5)**
Soru Kökü: Aşağıdakilerden hangisi mandibular ramus ortalarına süperpoze olmuş olarak izlenen tonsillolitlerin radyografik ayırıcı tanısında düşünülmesi gereken durumlardan biri **değildir**?
Doğru Şık (B): Osteoma kutis
Açıklama: Tonsillolitlerin ayırıcı tanısında kalsifiye granüloma, malignansi kalsifikasyonları, flebolitler ve sifilizin üçüncü evre lezyonları değerlendirilir. Osteoma kutis ise genellikle yanak ve dudak bölgesinde yüzeyel deri altı dokuda küçük radyolüsent merkezli opasiteler yapar ve ramus orta hattına derin farengeal bir lezyon gibi süperpoze olmaz. Tonsil lokalizasyonunda gerçek kemik formasyonu (osteoma) klinik olarak tipik değildir.

---

