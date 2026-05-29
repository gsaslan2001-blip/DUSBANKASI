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

### ÇİFT 1 (Benzerlik: 1.00)

**Soru 1 (ID: 0d01a7cc-7186-40bf-b52a-cdbdbe94dac1)**
Soru Kökü: Baş-boyun bölgesine radyoterapi gören bir hastada kserostomi gelişmesi durumunda, tükürüğün koruyucu özelliklerindeki kayba bağlı olarak periodontal hastalık ve çürük riskinin artmasında temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Salyanın tamponlama etkisinin azalması
Açıklama: Radyoterapi alanının tükürük bezlerini içermesi kserostomiye yol açarak tükürüğün doğal savunma mekanizmalarını bozar. Salyanın asitleri nötralize eden tamponlama etkisinin azalması ve mekanik yıkayıcı özelliğinin kaybı, plak birikimini ve doku yıkımını doğrudan artırır. Satürasyon artışı veya glikoprotein inhibisyonu kserostominin yarattığı patolojik tablonun temel nedeni değildir; aksine azalan akış hızına bağlı pH regülasyonunun çökmesi ana mekanizmadır.

**Soru 2 (ID: 2d8e6511-57e1-4c52-9b28-de99d634945e)**
Soru Kökü: Baş-boyun bölgesine radyoterapi gören bir hastada kserostomi gelişmesi durumunda, tükürüğün koruyucu özelliklerindeki kayba bağlı olarak periodontal hastalık ve çürük riskinin artmasında temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Salyanın tamponlama etkisinin azalması
Açıklama: Radyoterapi alanının tükürük bezlerini içermesi kserostomiye yol açarak tükürüğün doğal savunma mekanizmalarını bozar. Salyanın asitleri nötralize eden tamponlama etkisinin azalması ve mekanik yıkayıcı özelliğinin kaybı, plak birikimini ve doku yıkımını doğrudan artırır. Satürasyon artışı veya glikoprotein inhibisyonu kserostominin yarattığı patolojik tablonun temel nedeni değildir; aksine azalan akış hızına bağlı pH regülasyonunun çökmesi ana mekanizmadır.

---

### ÇİFT 2 (Benzerlik: 1.00)

**Soru 1 (ID: 763cbd95-d0a5-4832-919e-ce945417ff04)**
Soru Kökü: Kırk beş yaşında erkek hasta, baş ve boyun bölgesi radyoterapisi sonrası şiddetli kserostomi şikayetiyle başvuruyor. Ağız içi muayenesinde yoğun yapışkan plak birikimi, yaygın kök yüzeyi demineralizasyonları ve şiddetli marjinal gingivitis tablosu izleniyor. Bu hastanın klinik tablosunun patofizyolojisi ve idamesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Tükürük akışındaki kayıp, diş eti oluğu sıvısının (DOS) tamponlama kapasitesini artırarak lokal bir kompansatuvar mekanizma tetikler.
Açıklama: Radyoterapiye bağlı kserostomilerde tükürüğün akış hızı ve asitleri nötralize eden tamponlama kapasitesi düşerek plak birikimine ve çürük/gingivitis tablosuna zemin hazırlar. Diş eti oluğu sıvısının (DOS) tükürük eksikliğini algılayıp kendi tamponlama kapasitesini artırmak gibi bir kompansatuvar mekanizması yoktur, bu durum ilgili şıkkı yanlış yapar. Ağız kuruluğunun yarattığı ekolojik yıkımı durdurmak için lokal florid tatbiki ve düzenli hekim kontrolü klinik yönetimde mutlaka gereklidir.

**Soru 2 (ID: a267dec4-9aea-4004-83cc-08f556cad630)**
Soru Kökü: Kırk beş yaşında erkek hasta, baş ve boyun bölgesi radyoterapisi sonrası şiddetli kserostomi şikayetiyle başvuruyor. Ağız içi muayenesinde yoğun yapışkan plak birikimi, yaygın kök yüzeyi demineralizasyonları ve şiddetli marjinal gingivitis tablosu izleniyor. Bu hastanın klinik tablosunun patofizyolojisi ve idamesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Tükürük akışındaki kayıp, diş eti oluğu sıvısının (DOS) tamponlama kapasitesini artırarak lokal bir kompansatuvar mekanizma tetikler.
Açıklama: Radyoterapiye bağlı kserostomilerde tükürüğün akış hızı ve asitleri nötralize eden tamponlama kapasitesi düşerek plak birikimine ve çürük/gingivitis tablosuna zemin hazırlar. Diş eti oluğu sıvısının (DOS) tükürük eksikliğini algılayıp kendi tamponlama kapasitesini artırmak gibi bir kompansatuvar mekanizması yoktur, bu durum ilgili şıkkı yanlış yapar. Ağız kuruluğunun yarattığı ekolojik yıkımı durdurmak için lokal florid tatbiki ve düzenli hekim kontrolü klinik yönetimde mutlaka gereklidir.

---

### ÇİFT 3 (Benzerlik: 0.85)

**Soru 1 (ID: 0743c9f7-fed5-457a-a818-8e6219e3199d)**
Soru Kökü: Ortodontik tedavi gören genç bir hastada, dişlere yerleştirilen bantların mikrobiyal flora üzerindeki ekolojik modifikasyon yeteneği incelendiğinde; ortamın anaerobikleşmesi ve plak retansiyonunun artmasıyla birlikte aşağıdaki patojenik mikroorganizmalardan hangisinin subgingival oransal dağılımında artış **beklenmez**?
Doğru Şık (C): Fakültatif mikroorganizma türleri
Açıklama: Ortodontik bantlar çevresindeki ekolojik modifikasyon, oksijensiz ortamı destekleyerek spesifik periodontopatojenlerin (P. intermedia, P. melaninogenica, A. actinomycetemcomitans) oranını şiddetle artırır. Buna karşın sağlıklı floranın parçası olan oksijen toleranslı 'fakültatif' mikroorganizmaların oransal seviyesinde belirgin bir düşüş gözlenir.

**Soru 2 (ID: 40e23310-ae43-4eab-9e83-eac6c03300ca)**
Soru Kökü: Ortodontik tedavi sürecinde takılan bantlar ve braketler sadece plak miktarını artırmakla kalmaz, aynı zamanda subgingival floranın kompozisyonunda da değişime neden olurlar. Buna göre, ortodontik aparey uygulaması sonrası subgingival florada aşağıdaki mikroorganizmalardan hangisinin oranında bir artış beklenmesi **en az** olasıdır?
Doğru Şık (C): Fakültatif mikroorganizmalar
Açıklama: Ortodontik bantların yerleştirilmesi dişeti oluğunda ekolojik dengeyi değiştirerek ortamı daha anaerobik hale getirir. Bu durum Prevotella spp. ve A. actinomycetemcomitans gibi anaerob ve kapnofilik patojenlerin sayısında artışa yol açarken, sağlığı temsil eden fakültatif mikroorganizmaların oranında düşüşe neden olur. Floradaki bu shift, ortodontik tedavi sırasında görülen hızlı gingival enflamasyonun mikrobiyolojik altyapısıdır.

---

### ÇİFT 4 (Benzerlik: 0.84)

**Soru 1 (ID: 477364dc-89b4-4e58-b92e-991acc25d358)**
Soru Kökü: Periodontal dokuları etkileyen lokal eklentilerden 'pigmente boyalar' ve 'gıda kalıntıları (materia alba ve debris)' klinik potansiyelleri açısından karşılaştırıldığında, bu iki faktörün ortak özelliği aşağıdakilerden hangisidir?
Doğru Şık (A): Her ikisinin de gingivitis patogenezini tetikleyen primer irritan faktörler olarak kabul edilmemesi
Açıklama: Ne pigmente boyalar ne de gıda kalıntıları (debris) gingivitisin başlatılmasında primer etyolojik faktörler değildirler. Boyalar estetik sorun yaratırken, gıda artıklarının kendisi değil ancak o gıdaların bakteriyel biyofilmi (organize plak) besleyip olgunlaştırması inflamasyona neden olur.

**Soru 2 (ID: 8856b68d-e501-4cfb-9a36-d02a7af3013d)**
Soru Kökü: Periodontal sağlık üzerinde dişler üzerine biriken lokal eklentilerin etkisi değerlendirildiğinde, pigmente boyaların (dental stain) klinik tablodaki temel rolü aşağıdakilerden hangisidir?
Doğru Şık (B): Yalnızca estetik problemlere yol açarlar ve primer olarak gingivitise neden olmazlar.
Açıklama: Dişler üzerinde biriken pigmente boyalar, periodontal dokular üzerinde yıkıcı veya inflamatuvar bir patogenez başlatmazlar, yalnızca estetik problemler oluştururlar. Gıda kalıntıları veya asit üreten plak gibi doğrudan hücresel inflamasyon (gingivitis) tetikleyici özellikleri yoktur. Bu nedenle gingivitis veya cep oluşumu gibi klinik bulgular boyalarla doğrudan ilişkilendirilemez.

---

### ÇİFT 5 (Benzerlik: 0.80)

**Soru 1 (ID: 2065dd1c-63d5-446d-9986-defd45e39ef9)**
Soru Kökü: İatrojenik faktörlerden biri olan restorasyon marjinlerinin yerleşimi ve periodontal dokulara etkisi değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Son derece uyumlu yapılan subgingival marjinler restorasyonsuz proksimal alanlardan daha az plak tutar.
Açıklama: Son derece uygun yapılmış olsalar bile subgingival olarak bitirilen restorasyon marjinleri, interproksimal bölgelerdeki restorasyonsuz diş yüzeylerine eşit veya daha fazla miktarda plak birikimine ve dişeti enflamasyonuna yol açar. Hiçbir subgingival restoratif sınır doğal diş dokusundan daha biyouyumlu ve az plak tutucu olamaz. Bu nedenle periodontal sağlık açısından marjinler mümkün olduğunca supragingival veya equigingival alanda sonlandırılmalıdır.

**Soru 2 (ID: d235f076-7688-4b8e-8744-59c7f759da66)**
Soru Kökü: Klinikte gerçekleştirilen dental tedaviler (iatrojenik faktörler) sırasında dokularda bırakılan düzensizliklerin periodontal hastalık hazırlayıcı rolleri düşünüldüğünde, aşağıdaki durumlardan hangisi **yanlıştır**?
Doğru Şık (D): Bir restorasyon marjini subgingival seviyeye yerleştirilse dahi ideal polisaj uygulanmışsa plak birikimi ve iltihap riski tamamen sıfırlanır.
Açıklama: Literatür açıkça göstermektedir ki, en mükemmel şekilde uyumlandırılmış ve cila (polisaj) yapılmış restorasyonlar bile subgingival seviyede sonlandırıldığında dokuda mikroskobik retansiyon alanı oluşturur ve plak birikimini artırır. İnflamasyon riski hiçbir zaman tamamen sıfırlanmaz, aksine supragingival olanlara kıyasla daima daha yüksek iltihabi reaksiyon doğurur.

---

### ÇİFT 6 (Benzerlik: 0.76)

**Soru 1 (ID: 426cd456-3a08-4247-9e7e-0ce774c5bbc1)**
Soru Kökü: Diştaşı kalsifikasyon teorilerinden olan "mineral çökelmesi" modeline göre, ortamdaki kalsiyum ve fosfor iyonlarının satürasyon derecesini lokal olarak artıran ve pH'ı yükselten birincil mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Karbondioksit kaybı ve bakteriyel amonyak üretimi
Açıklama: Lokal pH artışı ve buna bağlı kalsiyum fosfat satürasyonu, tükürükten karbondioksit (CO2) kaybı ve plak bakterilerinin proteinleri parçalayarak amonyak üretmesi mekanizmalarıyla gerçekleşir. Esteraz enzimi pH artışından ziyade yağ esterlerini serbest yağ asidine çevirerek kalsifikasyonu başlatır. pH'ın alkali yöne kayması, çözünmüş iyonların kolloidal çökeltiler halinde mineral matrikse dönüşmesi için kritik ilk adımdır.

**Soru 2 (ID: 7119f6e5-6750-499a-b157-7917ff9b48f2)**
Soru Kökü: Kalsifikasyon teorilerinden 'iyon satürasyonunda lokal artış' mekanizmasına göre; tükürük içerisindeki koloidal proteinlere bağlı stabil haldeki kalsiyum fosfat tuzlarının aniden çokelmesini ve kalsifikasyonu tetikleyen primer fizyolojik değişim aşağıdakilerden hangisidir?
Doğru Şık (A): Ortamda karbondioksit kaybı veya amonyak üretimine bağlı olarak gelişen lokal pH artışı
Açıklama: Salyadaki doymuş kalsiyum fosfatın sıvı formdan katı çökelek formuna geçebilmesi için ortamın asiditesinin azalması (pH'ın alkali yöne kayması) gerekir. Bu durum tükürükteki karbondioksitin gaz olarak kaybı veya plak bakterilerinin ürettiği amonyak nedeniyle pH'ın lokal artışıyla gerçekleşerek mineralizasyon kaskadını başlatır.

---

### ÇİFT 7 (Benzerlik: 0.74)

**Soru 1 (ID: 5201a3f6-8fe9-494f-be62-f0760058f90e)**
Soru Kökü: Supragingival diştaşının temel inorganik yapısı incelendiğinde, toplam kitlenin yalnızca yaklaşık %3.1'ini oluşturmasına rağmen mineral matriksin tamamlayıcı bir parçası olan bileşen aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsiyum karbonat
Açıklama: Supragingival diştaşının inorganik matriksinde kalsiyum fosfat %75.9 gibi dominant bir oranda bulunurken, kalsiyum karbonat (CaCO3) yalnızca %3.1 gibi küçük bir yer tutar. Kalsiyum karbonat, tükürük kökenli kalsifikasyonlarda spesifik inorganik çökelmelerin ara destek tuzlarından biridir.

**Soru 2 (ID: 6c3a1532-443b-49ba-9d38-dad955eb3cb9)**
Soru Kökü: Supragingival diştaşının kompozisyonu ile ilgili olarak;
I. Yapısının %70-90'ı inorganik karakterdedir.
II. İnorganik içeriğin en büyük kısmını %39 oranıyla kalsiyum oluşturur.
III. İnorganik yapı tamamen amorf olup kristal yapı göstermez.
İfadelerinden hangileri doğrudur?
Doğru Şık (E): I ve II
Açıklama: Supragingival diştaşının %70-90'ı inorganik olup bunun da temeli %39 ile kalsiyumdur (I ve II doğru). Ancak inorganik yapının amorf olduğu ifadesi yanlıştır; aksine inorganik komponentin üçte ikisi yüksek derecede kristalize formdadır (Hidroksiapatit, whitlockite, brushite vb.). Diştaşının sertliği ve dişe adaptasyonu bu kristalin yapının yoğunluğundan kaynaklanır.

---

### ÇİFT 8 (Benzerlik: 0.74)

**Soru 1 (ID: 006a0229-da80-4a7c-9125-489cc63c7753)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, sağ üst santral dişine yaptırdığı zirkonyum kuron sonrasında dişetinde kızarıklık, şişlik ve fırçalarken kanama şikayetiyle başvuruyor. Diştaşı veya yüzey pürüzlülüğü izlenmiyor, ancak kuron kenarlarının dişeti oluğunun 2 mm apikalinde (subgingival) bitirildiği sondlamada tespit ediliyor. Bu vakadaki iatrojenik gingivitisin temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Subgingival marjinin ekolojik ortamı bozarak anaerob bakteri plağı birikimine uygun kör alan yaratması
Açıklama: Restorasyon marjinlerinin subgingival yerleştirilmesi, sulkusun ekolojik dengesini bozan ve plağın mekanik temizliğinin hasta tarafından yapılmasını imkansız kılan en önemli iatrojenik hatadır. Son derece uyumlu ve pürüzsüz yapılmış restorasyonlar bile subgingival bölgede bırakıldığında lokal mikrobiyotayı agresifleştirerek dişeti oluğu sıvısını ve iltihabı artırır. Materyallerin kendisi (akrilik hariç) genellikle biyouyumludur, sorun sınırın lokalizasyonudur.

**Soru 2 (ID: 05f82f84-1ad0-4297-86ba-1165ca900623)**
Soru Kökü: 28 yaşında kadın hastada alt sağ ve sol molarlarına yerleştirilen mükemmel okluzal uyumlu iki kronun marjinal seviyeleri birbirinden farklıdır. Altı aylık klinik kontrolde; dişeti kenarı (equigingival) seviyesinde sonlandırılan kron marjini ile subgingival bölgede sonlandırılan kron marjininin periodontal dokular üzerindeki etkileri karşılaştırıldığında aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (D): Dişeti kenarı seviyesinde bitirilen restorasyon marjininin, subgingival marjine kıyasla belirgin derecede daha az şiddette inflamasyona neden olması
Açıklama: Ne kadar mükemmel parlatılırsa parlatılsın subgingival bölgeye yerleştirilen tüm restorasyon marjinleri otonom temizlenmeden mahrumdur ve mutlaka plak retansiyonuna, dolayısıyla dişeti inflamasyonuna yol açar. Dişeti kenarı (equigingival) veya supragingival bitirilen restorasyonlar bu ekolojik döngüyü çok daha az bozduklarından inflamasyon riski belirgin derecede düşüktür.

---

### ÇİFT 9 (Benzerlik: 0.73)

**Soru 1 (ID: 0743c9f7-fed5-457a-a818-8e6219e3199d)**
Soru Kökü: Ortodontik tedavi gören genç bir hastada, dişlere yerleştirilen bantların mikrobiyal flora üzerindeki ekolojik modifikasyon yeteneği incelendiğinde; ortamın anaerobikleşmesi ve plak retansiyonunun artmasıyla birlikte aşağıdaki patojenik mikroorganizmalardan hangisinin subgingival oransal dağılımında artış **beklenmez**?
Doğru Şık (C): Fakültatif mikroorganizma türleri
Açıklama: Ortodontik bantlar çevresindeki ekolojik modifikasyon, oksijensiz ortamı destekleyerek spesifik periodontopatojenlerin (P. intermedia, P. melaninogenica, A. actinomycetemcomitans) oranını şiddetle artırır. Buna karşın sağlıklı floranın parçası olan oksijen toleranslı 'fakültatif' mikroorganizmaların oransal seviyesinde belirgin bir düşüş gözlenir.

**Soru 2 (ID: fb91a031-81d1-4f42-a34f-347ee2be9d7e)**
Soru Kökü: 16 yaşında hastaya yerleştirilen sabit ortodontik bantların hemen altındaki gingival cepten alınan mikrobiyolojik kültür örneklerinin incelenmesi sonucunda;
I. Prevotella intermedia miktarında belirgin artış
II. Subgingival fakültatif mikroorganizma oranında düşüş
III. Aggregatibacter actinomycetemcomitans popülasyonunda artış
bulgularından hangilerinin meydana gelmesi beklenen fizyolojik bir reaksiyondur?
Doğru Şık (E): I, II ve III
Açıklama: Ortodontik bantlar marjinal dokuyu travmatize etmelerinin ötesinde mikrobiyal nişi de kökten değiştirir. Ortamın retantif hale gelmesiyle fakültatif (oksijen kullanabilen) bakteri oranı azalırken; doku yıkımından sorumlu siyah pigmente bakteriler (P. intermedia) ve lökotoksik agresif ajanlar (A. actinomycetemcomitans) hızla kolonize olur. Her üç öncül de ortodontinin floraya olan standart etkisidir.

---

### ÇİFT 10 (Benzerlik: 0.73)

**Soru 1 (ID: 4d66f6f8-99f2-4291-9736-9ebdfb656bb4)**
Soru Kökü: Baş-boyun radyoterapisi gören hastaların ağız bakım protokollerinde plak kontrolü kritik öneme sahiptir. Bu hastaların iatrojenik kimyasal doku hasarından korunması için aşağıdaki ajanlardan hangisinin kullanımından **kaçınılmalıdır**?
Doğru Şık (D): Yüksek alkol konsantrasyonu içeren klorheksidin gargaralar
Açıklama: Radyoterapi alan hastalarda tükürük bezi disfonksiyonuna bağlı kserostomi ve mukozitis görülür. Alkol içeren gargaralar bu hassas ve iskemik mukozayı daha fazla dehidrate ederek ağrıyı şiddetlendirir ve iyileşmeyi bozar. Plak kontrolü ve çürük önleme elzem olsa da (florür kullanımı şarttır), bu işlemler tahriş edici ajanlardan arındırılmış, nemlendirici ve yumuşak yöntemlerle yapılmalıdır.

**Soru 2 (ID: b2443a2f-39e6-4008-b71f-a4e7d825a453)**
Soru Kökü: 55 yaşında erkek hasta baş-boyun radyoterapisinin 6. gününde şiddetli mukoza hassasiyeti (mukozit) yaşamaktadır. Hekimi hastaya fırçalama yapamadığı için çürük koruyucu ajanlar reçete etmek istemektedir. Bu tablodaki mukozal irritasyonu daha da alevlendirerek hastanın klinik şikayetlerini artırabilecek olan içerik ve mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Alkol içeren gargaraların radyasyon hasarlı mukozayı şiddetle dehidrate etmesi
Açıklama: Radyoterapi sonrası ilk haftada gelişen mukozit dokuyu zaten inceltmiş ve hassaslaştırmıştır. Floridli gargaralar çürük kontrolü için önerilse de, içeriklerindeki alkol, hücreleri dehidrate (su kaybı) ederek yanma ve tahrişi inanılmaz derecede artırır. Bu nedenle onkoloji hastalarında her zaman alkolsüz ağız bakım ürünleri tercih edilmelidir.

---

### ÇİFT 11 (Benzerlik: 0.73)

**Soru 1 (ID: a926169e-6609-4b97-84d1-db8f6e97a3c4)**
Soru Kökü: Ağız içindeki anatomik bölgelere göre diştaşının içerdiği kristal tipleri farklılık gösterir. Posterior bölgelerdeki diştaşlarında mandibular anterior bölgeye kıyasla belirgin şekilde daha yaygın bulunan kristal yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Magnesium whitlockite
Açıklama: Magnesium whitlockite, posterior bölge diştaşlarında spesifik olarak daha yüksek oranda bulunan kristal formudur. Brushite anterior bölgede hakimken, bu bölgesel ayrım inorganik kompozisyonun tükürük havuzu dinamiklerinden etkilendiğini gösterir. Subgingival taşlarda da supragingivale kıyasla daha fazla magnezyum whitlockite bulunur.

**Soru 2 (ID: d6f85379-ca27-4447-8e34-1f25319dbe6f)**
Soru Kökü: Diştaşı kalsifikasyonu sürecinde zamanla inorganik kristal yapısı değişiklik gösterir. Oluşumunun üzerinden en fazla 2 hafta geçmiş genç diştaşlarında en sık izlenen kalsiyum fosfat kristal formu aşağıdakilerden hangisidir?
Doğru Şık (B): Brushite
Açıklama: Brushite, mineralizasyonun erken evresinde (ilk 2 hafta) ve özellikle mandibular anterior bölgede hakim olan kalsiyum fosfat kristal formudur. Hidroksiapatit ve oktakalsiyum fosfat ise yaşlı ve olgun diştaşlarında (özellikle iç ve dış tabakalarda) %97-100 oranında bulunan stabil formlardır. Bu kristal transformasyonu, diştaşının yaşının ve rezilyansının tahmin edilmesinde kullanılır.

---

### ÇİFT 12 (Benzerlik: 0.73)

**Soru 1 (ID: 8dee5287-9760-4206-b2a8-4ad1c7ed80f9)**
Soru Kökü: Kırk iki yaşında kadın hasta, ön dişlerinde sızlama ve dişetlerinde çekilme şikayetiyle başvuruyor. Muayenede hastanın oral hijyeninin çok iyi olduğu, ancak özellikle maksiller ve mandibular kanin ile premolar dişlerin bukkal yüzeylerinde U-şekilli dişeti çekilmeleri ve kök yüzeyi açılmaları izleniyor. İnterproksimal papiller tamamen sağlıklı ve kemik kaybı yok. Bu spesifik klinik tablonun en olası etiyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Kronik diş fırçası travması
Açıklama: Bakteriyel kaynaklı ataşman kayıpları genellikle interproksimal bölgelerden başlarken, sadece bukkal (veya lingual) yüzeyleri etkileyen, papillerin korunduğu izole dişeti çekilmeleri aşırı baskılı ve yatay (horizontal) fırçalamaya bağlı kronik fırça travmasının tipik bulgusudur. Akut travma ülseratif lezyon yaparken, kronik travma abrazyon ve dişeti çekilmesiyle (McCall festonları/Stillman yarıkları benzeri) sonuçlanır. U-şekilli defekt mekanik aşınmanın mekanizmasını gösterir.

**Soru 2 (ID: e4a78f85-fb4a-43bc-92ac-c97ba2228046)**
Soru Kökü: Otuz yaşında erkek hasta, alt arka dişlerinin arasına giren yiyecekleri kürdanla temizleme ihtiyacı hissettiğini ve bölgede sızlama olduğunu belirtiyor. Yapılan klinik muayenede okluzal uyumlanması tam yapılmamış bir restorasyona bağlı açık proksimal temas ve ilgili papilde eritem tespit ediliyor. Zamanında müdahale edilmeyen bu "food impaction" tablosunun periodontal dokularda oluşturacağı ilk patolojik yıkım genellikle hangi bölgede başlar?
Doğru Şık (D): İnterproksimal kemikte lokalize dikey (vertikal) rezorpsiyon
Açıklama: Gıda gömülmesi (food impaction), çiğneme kuvvetlerinin etkisiyle besinlerin açık kontaklardan dikey bir vektörle papile itilmesi durumudur ve bu mekanik travma + lokal bakteri birikimi doğrudan interproksimal kemikte lokalize dikey (vertikal) kemik kaybıyla sonuçlanır. Bukkal/lingual çekilmeler daha çok fırça travması kaynaklıyken, dikey gömülme papili ezerek periodontal desteği septal bölgeden çökertir.

---

### ÇİFT 13 (Benzerlik: 0.73)

**Soru 1 (ID: a926169e-6609-4b97-84d1-db8f6e97a3c4)**
Soru Kökü: Ağız içindeki anatomik bölgelere göre diştaşının içerdiği kristal tipleri farklılık gösterir. Posterior bölgelerdeki diştaşlarında mandibular anterior bölgeye kıyasla belirgin şekilde daha yaygın bulunan kristal yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Magnesium whitlockite
Açıklama: Magnesium whitlockite, posterior bölge diştaşlarında spesifik olarak daha yüksek oranda bulunan kristal formudur. Brushite anterior bölgede hakimken, bu bölgesel ayrım inorganik kompozisyonun tükürük havuzu dinamiklerinden etkilendiğini gösterir. Subgingival taşlarda da supragingivale kıyasla daha fazla magnezyum whitlockite bulunur.

**Soru 2 (ID: eb84e745-c8ca-43c6-84a8-cbc539d0c043)**
Soru Kökü: Elli yaşında erkek hastaya altı seanslık subgingival kök yüzeyi düzleştirmesi planlanmıştır. Küretaj işlemi sırasında cep tabanından çıkarılan derin, eski ve yoğun koyu renkli diştaşı parçaları laboratuvar analizine gönderiliyor. Bu diştaşının kristal yapısında aşağıdakilerden hangisinin oransal olarak en yüksek bulunması beklenir?
Doğru Şık (A): Hidroksiapatit
Açıklama: Eski diştaşlarının iç tabakalarında ve olgun subgingival taşlarda kalsiyum fosfatın en stabil ve mineralize formu olan Hidroksiapatit kristalleri hakimdir. Brushite yeni oluşan taşlarda, oktakalsiyum fosfat ise dış tabakalarda bulunur. Subgingival ortamda zamanla hidroksiapatit ve magnezyum whitlockite oranları artarken, brushite tamamen kaybolur.

---

### ÇİFT 14 (Benzerlik: 0.72)

**Soru 1 (ID: 40e23310-ae43-4eab-9e83-eac6c03300ca)**
Soru Kökü: Ortodontik tedavi sürecinde takılan bantlar ve braketler sadece plak miktarını artırmakla kalmaz, aynı zamanda subgingival floranın kompozisyonunda da değişime neden olurlar. Buna göre, ortodontik aparey uygulaması sonrası subgingival florada aşağıdaki mikroorganizmalardan hangisinin oranında bir artış beklenmesi **en az** olasıdır?
Doğru Şık (C): Fakültatif mikroorganizmalar
Açıklama: Ortodontik bantların yerleştirilmesi dişeti oluğunda ekolojik dengeyi değiştirerek ortamı daha anaerobik hale getirir. Bu durum Prevotella spp. ve A. actinomycetemcomitans gibi anaerob ve kapnofilik patojenlerin sayısında artışa yol açarken, sağlığı temsil eden fakültatif mikroorganizmaların oranında düşüşe neden olur. Floradaki bu shift, ortodontik tedavi sırasında görülen hızlı gingival enflamasyonun mikrobiyolojik altyapısıdır.

**Soru 2 (ID: fb91a031-81d1-4f42-a34f-347ee2be9d7e)**
Soru Kökü: 16 yaşında hastaya yerleştirilen sabit ortodontik bantların hemen altındaki gingival cepten alınan mikrobiyolojik kültür örneklerinin incelenmesi sonucunda;
I. Prevotella intermedia miktarında belirgin artış
II. Subgingival fakültatif mikroorganizma oranında düşüş
III. Aggregatibacter actinomycetemcomitans popülasyonunda artış
bulgularından hangilerinin meydana gelmesi beklenen fizyolojik bir reaksiyondur?
Doğru Şık (E): I, II ve III
Açıklama: Ortodontik bantlar marjinal dokuyu travmatize etmelerinin ötesinde mikrobiyal nişi de kökten değiştirir. Ortamın retantif hale gelmesiyle fakültatif (oksijen kullanabilen) bakteri oranı azalırken; doku yıkımından sorumlu siyah pigmente bakteriler (P. intermedia) ve lökotoksik agresif ajanlar (A. actinomycetemcomitans) hızla kolonize olur. Her üç öncül de ortodontinin floraya olan standart etkisidir.

---

### ÇİFT 15 (Benzerlik: 0.72)

**Soru 1 (ID: cea881cf-e137-45c4-abd7-16089ae910fc)**
Soru Kökü: Elli iki yaşında kadın hasta, dişeti kanaması şikayetiyle başvuruyor. Yapılan muayenede 6 mm derinliğinde periodontal cepler ve sondlamada kök yüzeyinde sert, koyu renkli eklentiler tespit ediliyor. Bu eklentilerin kompozisyonu supragingival diştaşı ile karşılaştırıldığında aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (A): Sodyum içeriği cep derinliği ile doğru orantılı olarak artış gösterir.
Açıklama: Subgingival diştaşında kalsiyum/fosfat oranı supragingivale göre daha yüksektir ve cep derinliği arttıkça yapıdaki sodyum içeriği paralel olarak artış gösterir. Subgingival çevre tükürük ile değil crevicular sıvı ile yıkandığından, yapısında supragingival taşın aksine salya glikoproteinleri bulunmaz. Bu farklılık, diştaşının bulunduğu mikroçevrenin eksüda özelliklerini doğrudan mineral matrikse yansıttığını kanıtlar.

**Soru 2 (ID: eb84e745-c8ca-43c6-84a8-cbc539d0c043)**
Soru Kökü: Elli yaşında erkek hastaya altı seanslık subgingival kök yüzeyi düzleştirmesi planlanmıştır. Küretaj işlemi sırasında cep tabanından çıkarılan derin, eski ve yoğun koyu renkli diştaşı parçaları laboratuvar analizine gönderiliyor. Bu diştaşının kristal yapısında aşağıdakilerden hangisinin oransal olarak en yüksek bulunması beklenir?
Doğru Şık (A): Hidroksiapatit
Açıklama: Eski diştaşlarının iç tabakalarında ve olgun subgingival taşlarda kalsiyum fosfatın en stabil ve mineralize formu olan Hidroksiapatit kristalleri hakimdir. Brushite yeni oluşan taşlarda, oktakalsiyum fosfat ise dış tabakalarda bulunur. Subgingival ortamda zamanla hidroksiapatit ve magnezyum whitlockite oranları artarken, brushite tamamen kaybolur.

---

### ÇİFT 16 (Benzerlik: 0.72)

**Soru 1 (ID: 0d01a7cc-7186-40bf-b52a-cdbdbe94dac1)**
Soru Kökü: Baş-boyun bölgesine radyoterapi gören bir hastada kserostomi gelişmesi durumunda, tükürüğün koruyucu özelliklerindeki kayba bağlı olarak periodontal hastalık ve çürük riskinin artmasında temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Salyanın tamponlama etkisinin azalması
Açıklama: Radyoterapi alanının tükürük bezlerini içermesi kserostomiye yol açarak tükürüğün doğal savunma mekanizmalarını bozar. Salyanın asitleri nötralize eden tamponlama etkisinin azalması ve mekanik yıkayıcı özelliğinin kaybı, plak birikimini ve doku yıkımını doğrudan artırır. Satürasyon artışı veya glikoprotein inhibisyonu kserostominin yarattığı patolojik tablonun temel nedeni değildir; aksine azalan akış hızına bağlı pH regülasyonunun çökmesi ana mekanizmadır.

**Soru 2 (ID: 763cbd95-d0a5-4832-919e-ce945417ff04)**
Soru Kökü: Kırk beş yaşında erkek hasta, baş ve boyun bölgesi radyoterapisi sonrası şiddetli kserostomi şikayetiyle başvuruyor. Ağız içi muayenesinde yoğun yapışkan plak birikimi, yaygın kök yüzeyi demineralizasyonları ve şiddetli marjinal gingivitis tablosu izleniyor. Bu hastanın klinik tablosunun patofizyolojisi ve idamesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Tükürük akışındaki kayıp, diş eti oluğu sıvısının (DOS) tamponlama kapasitesini artırarak lokal bir kompansatuvar mekanizma tetikler.
Açıklama: Radyoterapiye bağlı kserostomilerde tükürüğün akış hızı ve asitleri nötralize eden tamponlama kapasitesi düşerek plak birikimine ve çürük/gingivitis tablosuna zemin hazırlar. Diş eti oluğu sıvısının (DOS) tükürük eksikliğini algılayıp kendi tamponlama kapasitesini artırmak gibi bir kompansatuvar mekanizması yoktur, bu durum ilgili şıkkı yanlış yapar. Ağız kuruluğunun yarattığı ekolojik yıkımı durdurmak için lokal florid tatbiki ve düzenli hekim kontrolü klinik yönetimde mutlaka gereklidir.

---

### ÇİFT 17 (Benzerlik: 0.72)

**Soru 1 (ID: 0d01a7cc-7186-40bf-b52a-cdbdbe94dac1)**
Soru Kökü: Baş-boyun bölgesine radyoterapi gören bir hastada kserostomi gelişmesi durumunda, tükürüğün koruyucu özelliklerindeki kayba bağlı olarak periodontal hastalık ve çürük riskinin artmasında temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Salyanın tamponlama etkisinin azalması
Açıklama: Radyoterapi alanının tükürük bezlerini içermesi kserostomiye yol açarak tükürüğün doğal savunma mekanizmalarını bozar. Salyanın asitleri nötralize eden tamponlama etkisinin azalması ve mekanik yıkayıcı özelliğinin kaybı, plak birikimini ve doku yıkımını doğrudan artırır. Satürasyon artışı veya glikoprotein inhibisyonu kserostominin yarattığı patolojik tablonun temel nedeni değildir; aksine azalan akış hızına bağlı pH regülasyonunun çökmesi ana mekanizmadır.

**Soru 2 (ID: a267dec4-9aea-4004-83cc-08f556cad630)**
Soru Kökü: Kırk beş yaşında erkek hasta, baş ve boyun bölgesi radyoterapisi sonrası şiddetli kserostomi şikayetiyle başvuruyor. Ağız içi muayenesinde yoğun yapışkan plak birikimi, yaygın kök yüzeyi demineralizasyonları ve şiddetli marjinal gingivitis tablosu izleniyor. Bu hastanın klinik tablosunun patofizyolojisi ve idamesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Tükürük akışındaki kayıp, diş eti oluğu sıvısının (DOS) tamponlama kapasitesini artırarak lokal bir kompansatuvar mekanizma tetikler.
Açıklama: Radyoterapiye bağlı kserostomilerde tükürüğün akış hızı ve asitleri nötralize eden tamponlama kapasitesi düşerek plak birikimine ve çürük/gingivitis tablosuna zemin hazırlar. Diş eti oluğu sıvısının (DOS) tükürük eksikliğini algılayıp kendi tamponlama kapasitesini artırmak gibi bir kompansatuvar mekanizması yoktur, bu durum ilgili şıkkı yanlış yapar. Ağız kuruluğunun yarattığı ekolojik yıkımı durdurmak için lokal florid tatbiki ve düzenli hekim kontrolü klinik yönetimde mutlaka gereklidir.

---

### ÇİFT 18 (Benzerlik: 0.72)

**Soru 1 (ID: 2d8e6511-57e1-4c52-9b28-de99d634945e)**
Soru Kökü: Baş-boyun bölgesine radyoterapi gören bir hastada kserostomi gelişmesi durumunda, tükürüğün koruyucu özelliklerindeki kayba bağlı olarak periodontal hastalık ve çürük riskinin artmasında temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Salyanın tamponlama etkisinin azalması
Açıklama: Radyoterapi alanının tükürük bezlerini içermesi kserostomiye yol açarak tükürüğün doğal savunma mekanizmalarını bozar. Salyanın asitleri nötralize eden tamponlama etkisinin azalması ve mekanik yıkayıcı özelliğinin kaybı, plak birikimini ve doku yıkımını doğrudan artırır. Satürasyon artışı veya glikoprotein inhibisyonu kserostominin yarattığı patolojik tablonun temel nedeni değildir; aksine azalan akış hızına bağlı pH regülasyonunun çökmesi ana mekanizmadır.

**Soru 2 (ID: 763cbd95-d0a5-4832-919e-ce945417ff04)**
Soru Kökü: Kırk beş yaşında erkek hasta, baş ve boyun bölgesi radyoterapisi sonrası şiddetli kserostomi şikayetiyle başvuruyor. Ağız içi muayenesinde yoğun yapışkan plak birikimi, yaygın kök yüzeyi demineralizasyonları ve şiddetli marjinal gingivitis tablosu izleniyor. Bu hastanın klinik tablosunun patofizyolojisi ve idamesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Tükürük akışındaki kayıp, diş eti oluğu sıvısının (DOS) tamponlama kapasitesini artırarak lokal bir kompansatuvar mekanizma tetikler.
Açıklama: Radyoterapiye bağlı kserostomilerde tükürüğün akış hızı ve asitleri nötralize eden tamponlama kapasitesi düşerek plak birikimine ve çürük/gingivitis tablosuna zemin hazırlar. Diş eti oluğu sıvısının (DOS) tükürük eksikliğini algılayıp kendi tamponlama kapasitesini artırmak gibi bir kompansatuvar mekanizması yoktur, bu durum ilgili şıkkı yanlış yapar. Ağız kuruluğunun yarattığı ekolojik yıkımı durdurmak için lokal florid tatbiki ve düzenli hekim kontrolü klinik yönetimde mutlaka gereklidir.

---

### ÇİFT 19 (Benzerlik: 0.72)

**Soru 1 (ID: 2d8e6511-57e1-4c52-9b28-de99d634945e)**
Soru Kökü: Baş-boyun bölgesine radyoterapi gören bir hastada kserostomi gelişmesi durumunda, tükürüğün koruyucu özelliklerindeki kayba bağlı olarak periodontal hastalık ve çürük riskinin artmasında temel patofizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Salyanın tamponlama etkisinin azalması
Açıklama: Radyoterapi alanının tükürük bezlerini içermesi kserostomiye yol açarak tükürüğün doğal savunma mekanizmalarını bozar. Salyanın asitleri nötralize eden tamponlama etkisinin azalması ve mekanik yıkayıcı özelliğinin kaybı, plak birikimini ve doku yıkımını doğrudan artırır. Satürasyon artışı veya glikoprotein inhibisyonu kserostominin yarattığı patolojik tablonun temel nedeni değildir; aksine azalan akış hızına bağlı pH regülasyonunun çökmesi ana mekanizmadır.

**Soru 2 (ID: a267dec4-9aea-4004-83cc-08f556cad630)**
Soru Kökü: Kırk beş yaşında erkek hasta, baş ve boyun bölgesi radyoterapisi sonrası şiddetli kserostomi şikayetiyle başvuruyor. Ağız içi muayenesinde yoğun yapışkan plak birikimi, yaygın kök yüzeyi demineralizasyonları ve şiddetli marjinal gingivitis tablosu izleniyor. Bu hastanın klinik tablosunun patofizyolojisi ve idamesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Tükürük akışındaki kayıp, diş eti oluğu sıvısının (DOS) tamponlama kapasitesini artırarak lokal bir kompansatuvar mekanizma tetikler.
Açıklama: Radyoterapiye bağlı kserostomilerde tükürüğün akış hızı ve asitleri nötralize eden tamponlama kapasitesi düşerek plak birikimine ve çürük/gingivitis tablosuna zemin hazırlar. Diş eti oluğu sıvısının (DOS) tükürük eksikliğini algılayıp kendi tamponlama kapasitesini artırmak gibi bir kompansatuvar mekanizması yoktur, bu durum ilgili şıkkı yanlış yapar. Ağız kuruluğunun yarattığı ekolojik yıkımı durdurmak için lokal florid tatbiki ve düzenli hekim kontrolü klinik yönetimde mutlaka gereklidir.

---

### ÇİFT 20 (Benzerlik: 0.72)

**Soru 1 (ID: 59dd8105-f518-4675-be72-59c6a340c5d1)**
Soru Kökü: Diş fırçalama hatalarına bağlı gelişebilen travmatik lezyonlar sınıflandırıldığında, aşağıdakilerden hangisi **akut** diş fırçası travmasının spesifik bulgularından biri olarak değerlendirilmez?
Doğru Şık (A): Bakteriyel plak birikimi eşliğinde interproksimal ataşman kaybı
Açıklama: Bakteriyel plağın eşlik ettiği interproksimal ataşman kaybı, kronik periodontitisin bir sonucudur ve fırça travması ile ilişkili değildir (hatta fırçanın ulaşamadığı yerde olur). Akut fırça travması hastanın fırçayı birden çok sert kullanmasıyla dokuyu zımbalaması, yırtması (ülserasyon) veya fırça kılının dokuya batması (apse) ile karakterizedir. Mekanik travmaların dişeti dokusunda yarattığı hasar bakteriyel yıkımdan topografik olarak farklıdır.

**Soru 2 (ID: 91686d65-fb24-4dab-a296-6414359dee3e)**
Soru Kökü: 20 yaşında kadın hasta, estetik kaygılar nedeniyle dişlerini günde dört kez, yeni aldığı sert kıllı fırçasıyla agresif bir şekilde temizlemektedir. Klinik muayenesinde yapışık dişeti üzerinde, fırça kıllarının dik ve baskılı uygulanmasına bağlı olduğu düşünülen derin noktasal yaralanmalar izlenmektedir. Diş fırçasının bu spesifik travmatik hareket paterni klinikte hangi lezyon morfolojisini oluşturur?
Doğru Şık (B): Zımbalanmış (punched-out) tarzda epiteliyal lezyonlar
Açıklama: Diş fırçası kılları, dişetine dik açıyla tutulup aşırı basınç uygulandığında (stippling alanlarını ezercesine), dokuda mekanik yırtılmalara ve literatürde spesifik olarak 'zımbalanmış tarzda (punched-out)' olarak geçen izole yara lezyonlarına neden olur. Kılların yatay hareketleriyle olan kronik travma daha çok V şeklinde servikal kök aşınmasına yol açar.

---

### ÇİFT 21 (Benzerlik: 0.71)

**Soru 1 (ID: 0a604450-6791-4346-a92e-d71095212f80)**
Soru Kökü: Dental plağın diştaşına mineralizasyonu süreciyle ilgili hücresel mekanizmalar incelendiğinde aşağıdakilerden hangisi doğrudur?
Doğru Şık (D): Mineralizasyon hem gram-pozitif/negatif bakterilerin etrafında ekstrasellüler başlarken bazı mikroorganizmalarda intrasellüler kristalleşme de gösterebilir.
Açıklama: Plak mineralizasyonu hem hücre dışında kalsiyum tuzlarının çökelmesiyle (ekstrasellüler), hem de Bacterionema gibi türlerin hücre içi yapılarında (intrasellüler) başlayabilir. Taş oluşumu için canlı bakteriye mutlak ihtiyaç yoktur; germ-free hayvanlarda da hücresiz pelikıl/tükürük kaynaklı kalsifikasyonlar gelişebilir.

**Soru 2 (ID: 426cd456-3a08-4247-9e7e-0ce774c5bbc1)**
Soru Kökü: Diştaşı kalsifikasyon teorilerinden olan "mineral çökelmesi" modeline göre, ortamdaki kalsiyum ve fosfor iyonlarının satürasyon derecesini lokal olarak artıran ve pH'ı yükselten birincil mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Karbondioksit kaybı ve bakteriyel amonyak üretimi
Açıklama: Lokal pH artışı ve buna bağlı kalsiyum fosfat satürasyonu, tükürükten karbondioksit (CO2) kaybı ve plak bakterilerinin proteinleri parçalayarak amonyak üretmesi mekanizmalarıyla gerçekleşir. Esteraz enzimi pH artışından ziyade yağ esterlerini serbest yağ asidine çevirerek kalsifikasyonu başlatır. pH'ın alkali yöne kayması, çözünmüş iyonların kolloidal çökeltiler halinde mineral matrikse dönüşmesi için kritik ilk adımdır.

---

### ÇİFT 22 (Benzerlik: 0.71)

**Soru 1 (ID: 2065dd1c-63d5-446d-9986-defd45e39ef9)**
Soru Kökü: İatrojenik faktörlerden biri olan restorasyon marjinlerinin yerleşimi ve periodontal dokulara etkisi değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Son derece uyumlu yapılan subgingival marjinler restorasyonsuz proksimal alanlardan daha az plak tutar.
Açıklama: Son derece uygun yapılmış olsalar bile subgingival olarak bitirilen restorasyon marjinleri, interproksimal bölgelerdeki restorasyonsuz diş yüzeylerine eşit veya daha fazla miktarda plak birikimine ve dişeti enflamasyonuna yol açar. Hiçbir subgingival restoratif sınır doğal diş dokusundan daha biyouyumlu ve az plak tutucu olamaz. Bu nedenle periodontal sağlık açısından marjinler mümkün olduğunca supragingival veya equigingival alanda sonlandırılmalıdır.

**Soru 2 (ID: 376c5e67-6000-4594-9f04-0f517634b4f3)**
Soru Kökü: I. Restorasyonlarda interproksimal kontaktların açık bırakılması
II. Köprü gövdelerinin kret mukozasına aşırı temas etmesi
III. Restorasyon marjinlerinin kuron-kök birleşiminin 1 mm koronalinde bitirilmesi

Yukarıdaki iatrojenik dental uygulamalardan hangileri doğrudan plak retansiyonunu artırarak veya mekanik irritasyon yaratarak periodontal enflamasyon gelişimini kolaylaştırır?
Doğru Şık (B): I ve II
Açıklama: Açık temaslar gıda gömülmesine (food impaction), aşırı temaslı gövdeler ise hastanın o bölgeyi temizleyememesine (yalancı cep oluşumuna) yol açarak doğrudan enflamasyona neden olur (I ve II doğru). Restorasyon marjinlerinin supragingival (koronalde) bitirilmesi biyolojik genişliği ihlal etmeyen ve plak kontrolünü kolaylaştıran doğru bir yaklaşımdır, iatrojenik bir hata değildir. Periodontal sağlık için restorasyon kenarları olabildiğince dişetinin uzağında bırakılmalıdır.

---

### ÇİFT 23 (Benzerlik: 0.71)

**Soru 1 (ID: 35a9a5a1-5e67-42b4-af7f-2f6d7634f2e2)**
Soru Kökü: 42 yaşında erkek hasta, arka bölge porselen köprüsünün altındaki dişetinde şişlik, yoğun ağız kokusu ve kanama şikayetiyle başvuruyor. Radyografide herhangi bir kemik kaybı veya marjinal taşma görülmezken, klinik muayenede köprü gövdesinin (pontik) alveoler kret mukozasına aşırı sıkı temas ettiği ve arayüzde 5 mm derinliğinde sondalama yapıldığı belirleniyor. Bu tabloya yol açan primer dokusal patogenez aşağıdakilerden hangisidir?
Doğru Şık (E): Aşırı basınçlı temas yüzeyinin mekanik temizliği imkansızlaştırarak marjinal inflamasyon ve yalancı (pseudo) cep formasyonuna yol açması
Açıklama: Köprü gövdeleri (pontikler) mukozaya aşırı baskı yapmamalı, hafif ve hijyenik temas (modified ridge-lap vs.) kurmalıdır. Geniş temas alanı fırça veya diş ipi erişimini engeller, biriken plak enflamasyon yaratarak dişetinin şişmesine (kemik kaybı olmayan koronal büyüme) ve yalancı (pseudo) ceplere neden olur.

**Soru 2 (ID: 8dee5287-9760-4206-b2a8-4ad1c7ed80f9)**
Soru Kökü: Kırk iki yaşında kadın hasta, ön dişlerinde sızlama ve dişetlerinde çekilme şikayetiyle başvuruyor. Muayenede hastanın oral hijyeninin çok iyi olduğu, ancak özellikle maksiller ve mandibular kanin ile premolar dişlerin bukkal yüzeylerinde U-şekilli dişeti çekilmeleri ve kök yüzeyi açılmaları izleniyor. İnterproksimal papiller tamamen sağlıklı ve kemik kaybı yok. Bu spesifik klinik tablonun en olası etiyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Kronik diş fırçası travması
Açıklama: Bakteriyel kaynaklı ataşman kayıpları genellikle interproksimal bölgelerden başlarken, sadece bukkal (veya lingual) yüzeyleri etkileyen, papillerin korunduğu izole dişeti çekilmeleri aşırı baskılı ve yatay (horizontal) fırçalamaya bağlı kronik fırça travmasının tipik bulgusudur. Akut travma ülseratif lezyon yaparken, kronik travma abrazyon ve dişeti çekilmesiyle (McCall festonları/Stillman yarıkları benzeri) sonuçlanır. U-şekilli defekt mekanik aşınmanın mekanizmasını gösterir.

---

### ÇİFT 24 (Benzerlik: 0.71)

**Soru 1 (ID: d6f85379-ca27-4447-8e34-1f25319dbe6f)**
Soru Kökü: Diştaşı kalsifikasyonu sürecinde zamanla inorganik kristal yapısı değişiklik gösterir. Oluşumunun üzerinden en fazla 2 hafta geçmiş genç diştaşlarında en sık izlenen kalsiyum fosfat kristal formu aşağıdakilerden hangisidir?
Doğru Şık (B): Brushite
Açıklama: Brushite, mineralizasyonun erken evresinde (ilk 2 hafta) ve özellikle mandibular anterior bölgede hakim olan kalsiyum fosfat kristal formudur. Hidroksiapatit ve oktakalsiyum fosfat ise yaşlı ve olgun diştaşlarında (özellikle iç ve dış tabakalarda) %97-100 oranında bulunan stabil formlardır. Bu kristal transformasyonu, diştaşının yaşının ve rezilyansının tahmin edilmesinde kullanılır.

**Soru 2 (ID: eb84e745-c8ca-43c6-84a8-cbc539d0c043)**
Soru Kökü: Elli yaşında erkek hastaya altı seanslık subgingival kök yüzeyi düzleştirmesi planlanmıştır. Küretaj işlemi sırasında cep tabanından çıkarılan derin, eski ve yoğun koyu renkli diştaşı parçaları laboratuvar analizine gönderiliyor. Bu diştaşının kristal yapısında aşağıdakilerden hangisinin oransal olarak en yüksek bulunması beklenir?
Doğru Şık (A): Hidroksiapatit
Açıklama: Eski diştaşlarının iç tabakalarında ve olgun subgingival taşlarda kalsiyum fosfatın en stabil ve mineralize formu olan Hidroksiapatit kristalleri hakimdir. Brushite yeni oluşan taşlarda, oktakalsiyum fosfat ise dış tabakalarda bulunur. Subgingival ortamda zamanla hidroksiapatit ve magnezyum whitlockite oranları artarken, brushite tamamen kaybolur.

---

### ÇİFT 25 (Benzerlik: 0.71)

**Soru 1 (ID: 05f82f84-1ad0-4297-86ba-1165ca900623)**
Soru Kökü: 28 yaşında kadın hastada alt sağ ve sol molarlarına yerleştirilen mükemmel okluzal uyumlu iki kronun marjinal seviyeleri birbirinden farklıdır. Altı aylık klinik kontrolde; dişeti kenarı (equigingival) seviyesinde sonlandırılan kron marjini ile subgingival bölgede sonlandırılan kron marjininin periodontal dokular üzerindeki etkileri karşılaştırıldığında aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (D): Dişeti kenarı seviyesinde bitirilen restorasyon marjininin, subgingival marjine kıyasla belirgin derecede daha az şiddette inflamasyona neden olması
Açıklama: Ne kadar mükemmel parlatılırsa parlatılsın subgingival bölgeye yerleştirilen tüm restorasyon marjinleri otonom temizlenmeden mahrumdur ve mutlaka plak retansiyonuna, dolayısıyla dişeti inflamasyonuna yol açar. Dişeti kenarı (equigingival) veya supragingival bitirilen restorasyonlar bu ekolojik döngüyü çok daha az bozduklarından inflamasyon riski belirgin derecede düşüktür.

**Soru 2 (ID: 2065dd1c-63d5-446d-9986-defd45e39ef9)**
Soru Kökü: İatrojenik faktörlerden biri olan restorasyon marjinlerinin yerleşimi ve periodontal dokulara etkisi değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Son derece uyumlu yapılan subgingival marjinler restorasyonsuz proksimal alanlardan daha az plak tutar.
Açıklama: Son derece uygun yapılmış olsalar bile subgingival olarak bitirilen restorasyon marjinleri, interproksimal bölgelerdeki restorasyonsuz diş yüzeylerine eşit veya daha fazla miktarda plak birikimine ve dişeti enflamasyonuna yol açar. Hiçbir subgingival restoratif sınır doğal diş dokusundan daha biyouyumlu ve az plak tutucu olamaz. Bu nedenle periodontal sağlık açısından marjinler mümkün olduğunca supragingival veya equigingival alanda sonlandırılmalıdır.

---

### ÇİFT 26 (Benzerlik: 0.70)

**Soru 1 (ID: 0a604450-6791-4346-a92e-d71095212f80)**
Soru Kökü: Dental plağın diştaşına mineralizasyonu süreciyle ilgili hücresel mekanizmalar incelendiğinde aşağıdakilerden hangisi doğrudur?
Doğru Şık (D): Mineralizasyon hem gram-pozitif/negatif bakterilerin etrafında ekstrasellüler başlarken bazı mikroorganizmalarda intrasellüler kristalleşme de gösterebilir.
Açıklama: Plak mineralizasyonu hem hücre dışında kalsiyum tuzlarının çökelmesiyle (ekstrasellüler), hem de Bacterionema gibi türlerin hücre içi yapılarında (intrasellüler) başlayabilir. Taş oluşumu için canlı bakteriye mutlak ihtiyaç yoktur; germ-free hayvanlarda da hücresiz pelikıl/tükürük kaynaklı kalsifikasyonlar gelişebilir.

**Soru 2 (ID: 620ced87-e409-4683-839f-724fd3437d2f)**
Soru Kökü: I. Yeni diştaşı oluşumu için canlı mikroorganizma varlığı mutlak zorunludur.
II. Kalsifikasyon plağın iç yüzeyinden ve dişe komşu kısımdan başlar.
III. Kalsifikasyon ilerledikçe plaktaki filamentöz bakteri sayısı artış gösterir.

Diştaşı oluşum ve mineralizasyon süreci ile ilgili yukarıdaki ifadelerden hangileri doğrudur?
Doğru Şık (E): II ve III
Açıklama: Germ-free (mikroorganizmasız) hayvanlarda da diştaşı benzeri yapıların oluşabildiği gösterilmiştir, bu nedenle canlı organizma varlığı mutlak zorunlu değildir (I yanlış). Kalsifikasyon dişe komşu en iç tabakadan başlar ve olgunlaştıkça mikrobiyotada koklardan filamentöz formlara doğru bir kayma yaşanır. Plak matriksinin hücresiz ortamda bile çökeltici çekirdek görevi görebilmesi mineralizasyonun pasif yönünü vurgular.

---

### ÇİFT 27 (Benzerlik: 0.70)

**Soru 1 (ID: d7db78a5-a009-497b-89b6-e8aaa5e7ef64)**
Soru Kökü: Otuz beş yaşında kadın hasta, sol alt arka bölgesinde çiğneme sırasında sürekli yemek sıkışması ve ağrı şikayetiyle başvuruyor. Muayenede sol mandibular 1. molar dişin eksik olduğu, 2. moların meziale eğildiği ve dişeti papilinde lokalize derin enflamasyon bulunduğu saptanıyor. Bu klinik tablodaki gıda gömülmesine (food impaction) neden olan birincil mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Meziale eğilen 2. moların distal kaspının maksiller molarlar arasına delici kasp (plunger kusp) olarak etki etmesi
Açıklama: Mandibular 1. molar çekildiğinde, 2. molar meziale eğilir ve bu devrilme hareketi 2. moların distal kaspını uzatarak itici/delici (plunger kusp) aktivitesi kazandırır. Bu kasp çiğneme kuvvetleriyle maksiller 1. ve 2. molarlar arasındaki temas noktasını zorlayarak açar ve gıdaların interproksimal alana dikey olarak gömülmesine neden olur. Gıda gömülmesi lokalize derin dikey kemik kayıplarının klasik habercisidir.

**Soru 2 (ID: e4a78f85-fb4a-43bc-92ac-c97ba2228046)**
Soru Kökü: Otuz yaşında erkek hasta, alt arka dişlerinin arasına giren yiyecekleri kürdanla temizleme ihtiyacı hissettiğini ve bölgede sızlama olduğunu belirtiyor. Yapılan klinik muayenede okluzal uyumlanması tam yapılmamış bir restorasyona bağlı açık proksimal temas ve ilgili papilde eritem tespit ediliyor. Zamanında müdahale edilmeyen bu "food impaction" tablosunun periodontal dokularda oluşturacağı ilk patolojik yıkım genellikle hangi bölgede başlar?
Doğru Şık (D): İnterproksimal kemikte lokalize dikey (vertikal) rezorpsiyon
Açıklama: Gıda gömülmesi (food impaction), çiğneme kuvvetlerinin etkisiyle besinlerin açık kontaklardan dikey bir vektörle papile itilmesi durumudur ve bu mekanik travma + lokal bakteri birikimi doğrudan interproksimal kemikte lokalize dikey (vertikal) kemik kaybıyla sonuçlanır. Bukkal/lingual çekilmeler daha çok fırça travması kaynaklıyken, dikey gömülme papili ezerek periodontal desteği septal bölgeden çökertir.

---

### ÇİFT 28 (Benzerlik: 0.70)

**Soru 1 (ID: c37a4a9a-e6ce-4cd9-a978-6e6c44acc68f)**
Soru Kökü: 26 yaşında erkek hasta, sadece üst santral kesicilerinin arasındaki spesifik bir bölgede lokalize ağrı hissetmektedir. Bukkal ve lingual sulkuslar tamamen sağlıklı olup, yalnızca interdental papilin merkezinde, temas noktasından aşağıya doğru inen dikey bir kesi/yarık tablosu (cleft) mevcuttur. Hastanın oral hijyen araçları sorgulandığında bu izole papil travmasına en çok neden olduğu bilinen etken hangisidir?
Doğru Şık (E): Diş ipinin temas noktasından sert bir şekilde geçirilerek papile doğrudan travma yapması
Açıklama: Diş ipi, okluzal kontakt bölgesinden yavaşça vestibülo-lingual bir hareketle (testere hareketiyle) dokuya kaydırılmalıdır. İpin sertçe doğrudan papil tepesine oturtulması, keskin bir bıçak gibi interdental dokuyu zedeler ve dikey akut yarıklara yol açar. Gıda gömülmesi genellikle kontakt noktası açık olan restorasyon alanlarında görülür.

**Soru 2 (ID: e4a78f85-fb4a-43bc-92ac-c97ba2228046)**
Soru Kökü: Otuz yaşında erkek hasta, alt arka dişlerinin arasına giren yiyecekleri kürdanla temizleme ihtiyacı hissettiğini ve bölgede sızlama olduğunu belirtiyor. Yapılan klinik muayenede okluzal uyumlanması tam yapılmamış bir restorasyona bağlı açık proksimal temas ve ilgili papilde eritem tespit ediliyor. Zamanında müdahale edilmeyen bu "food impaction" tablosunun periodontal dokularda oluşturacağı ilk patolojik yıkım genellikle hangi bölgede başlar?
Doğru Şık (D): İnterproksimal kemikte lokalize dikey (vertikal) rezorpsiyon
Açıklama: Gıda gömülmesi (food impaction), çiğneme kuvvetlerinin etkisiyle besinlerin açık kontaklardan dikey bir vektörle papile itilmesi durumudur ve bu mekanik travma + lokal bakteri birikimi doğrudan interproksimal kemikte lokalize dikey (vertikal) kemik kaybıyla sonuçlanır. Bukkal/lingual çekilmeler daha çok fırça travması kaynaklıyken, dikey gömülme papili ezerek periodontal desteği septal bölgeden çökertir.

---

### ÇİFT 29 (Benzerlik: 0.69)

**Soru 1 (ID: 0a604450-6791-4346-a92e-d71095212f80)**
Soru Kökü: Dental plağın diştaşına mineralizasyonu süreciyle ilgili hücresel mekanizmalar incelendiğinde aşağıdakilerden hangisi doğrudur?
Doğru Şık (D): Mineralizasyon hem gram-pozitif/negatif bakterilerin etrafında ekstrasellüler başlarken bazı mikroorganizmalarda intrasellüler kristalleşme de gösterebilir.
Açıklama: Plak mineralizasyonu hem hücre dışında kalsiyum tuzlarının çökelmesiyle (ekstrasellüler), hem de Bacterionema gibi türlerin hücre içi yapılarında (intrasellüler) başlayabilir. Taş oluşumu için canlı bakteriye mutlak ihtiyaç yoktur; germ-free hayvanlarda da hücresiz pelikıl/tükürük kaynaklı kalsifikasyonlar gelişebilir.

**Soru 2 (ID: 917a8ba6-f9b4-4c31-904b-5b7548ae6686)**
Soru Kökü: Diştaşı mineralizasyon sürecinde mikroorganizmaların aktif mineralizasyon yetenekleri incelendiğinde; plağın asit üreten patojenlerinin aksine spesifik olarak kendi hücre membranı (sitoplazması) içerisinde intrasellüler kristal odakları oluşturma yeteneğine sahip **olmayan** bakteri aşağıdakilerden hangisidir?
Doğru Şık (B): Porphyromonas gingivalis
Açıklama: Filamentöz organizmalar, difteroidler, Bacterionema ve Veillonella türleri kalsifikasyonu hücresel yapıları içinde kalsiyum tuzlarını depolayarak (intrasellüler) başlatma yeteneğine sahipken, temel bir agresif periodontopatojen olan P. gingivalis için literatürde böyle bir özellik tanımlanmamıştır; genellikle mineralizasyon ekstrasellülerdir.

---

### ÇİFT 30 (Benzerlik: 0.69)

**Soru 1 (ID: 4d66f6f8-99f2-4291-9736-9ebdfb656bb4)**
Soru Kökü: Baş-boyun radyoterapisi gören hastaların ağız bakım protokollerinde plak kontrolü kritik öneme sahiptir. Bu hastaların iatrojenik kimyasal doku hasarından korunması için aşağıdaki ajanlardan hangisinin kullanımından **kaçınılmalıdır**?
Doğru Şık (D): Yüksek alkol konsantrasyonu içeren klorheksidin gargaralar
Açıklama: Radyoterapi alan hastalarda tükürük bezi disfonksiyonuna bağlı kserostomi ve mukozitis görülür. Alkol içeren gargaralar bu hassas ve iskemik mukozayı daha fazla dehidrate ederek ağrıyı şiddetlendirir ve iyileşmeyi bozar. Plak kontrolü ve çürük önleme elzem olsa da (florür kullanımı şarttır), bu işlemler tahriş edici ajanlardan arındırılmış, nemlendirici ve yumuşak yöntemlerle yapılmalıdır.

**Soru 2 (ID: a267dec4-9aea-4004-83cc-08f556cad630)**
Soru Kökü: Kırk beş yaşında erkek hasta, baş ve boyun bölgesi radyoterapisi sonrası şiddetli kserostomi şikayetiyle başvuruyor. Ağız içi muayenesinde yoğun yapışkan plak birikimi, yaygın kök yüzeyi demineralizasyonları ve şiddetli marjinal gingivitis tablosu izleniyor. Bu hastanın klinik tablosunun patofizyolojisi ve idamesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Tükürük akışındaki kayıp, diş eti oluğu sıvısının (DOS) tamponlama kapasitesini artırarak lokal bir kompansatuvar mekanizma tetikler.
Açıklama: Radyoterapiye bağlı kserostomilerde tükürüğün akış hızı ve asitleri nötralize eden tamponlama kapasitesi düşerek plak birikimine ve çürük/gingivitis tablosuna zemin hazırlar. Diş eti oluğu sıvısının (DOS) tükürük eksikliğini algılayıp kendi tamponlama kapasitesini artırmak gibi bir kompansatuvar mekanizması yoktur, bu durum ilgili şıkkı yanlış yapar. Ağız kuruluğunun yarattığı ekolojik yıkımı durdurmak için lokal florid tatbiki ve düzenli hekim kontrolü klinik yönetimde mutlaka gereklidir.

---

### ÇİFT 31 (Benzerlik: 0.69)

**Soru 1 (ID: 4d66f6f8-99f2-4291-9736-9ebdfb656bb4)**
Soru Kökü: Baş-boyun radyoterapisi gören hastaların ağız bakım protokollerinde plak kontrolü kritik öneme sahiptir. Bu hastaların iatrojenik kimyasal doku hasarından korunması için aşağıdaki ajanlardan hangisinin kullanımından **kaçınılmalıdır**?
Doğru Şık (D): Yüksek alkol konsantrasyonu içeren klorheksidin gargaralar
Açıklama: Radyoterapi alan hastalarda tükürük bezi disfonksiyonuna bağlı kserostomi ve mukozitis görülür. Alkol içeren gargaralar bu hassas ve iskemik mukozayı daha fazla dehidrate ederek ağrıyı şiddetlendirir ve iyileşmeyi bozar. Plak kontrolü ve çürük önleme elzem olsa da (florür kullanımı şarttır), bu işlemler tahriş edici ajanlardan arındırılmış, nemlendirici ve yumuşak yöntemlerle yapılmalıdır.

**Soru 2 (ID: 763cbd95-d0a5-4832-919e-ce945417ff04)**
Soru Kökü: Kırk beş yaşında erkek hasta, baş ve boyun bölgesi radyoterapisi sonrası şiddetli kserostomi şikayetiyle başvuruyor. Ağız içi muayenesinde yoğun yapışkan plak birikimi, yaygın kök yüzeyi demineralizasyonları ve şiddetli marjinal gingivitis tablosu izleniyor. Bu hastanın klinik tablosunun patofizyolojisi ve idamesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Tükürük akışındaki kayıp, diş eti oluğu sıvısının (DOS) tamponlama kapasitesini artırarak lokal bir kompansatuvar mekanizma tetikler.
Açıklama: Radyoterapiye bağlı kserostomilerde tükürüğün akış hızı ve asitleri nötralize eden tamponlama kapasitesi düşerek plak birikimine ve çürük/gingivitis tablosuna zemin hazırlar. Diş eti oluğu sıvısının (DOS) tükürük eksikliğini algılayıp kendi tamponlama kapasitesini artırmak gibi bir kompansatuvar mekanizması yoktur, bu durum ilgili şıkkı yanlış yapar. Ağız kuruluğunun yarattığı ekolojik yıkımı durdurmak için lokal florid tatbiki ve düzenli hekim kontrolü klinik yönetimde mutlaka gereklidir.

---

