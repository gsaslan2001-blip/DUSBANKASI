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

### ÇİFT 1 (Benzerlik: 0.78)

**Soru 1 (ID: 47bde81b-aac4-4f77-8bcb-f15631a8b1dd)**
Soru Kökü: Ateroskleroz patogenezinde damar yataklarının tutulum sıklığı hemodinamik strese göre değişiklik gösterir. Buna göre, aterosklerotik plak gelişiminin aşağıdaki damarlardan hangisinde görülmesi **en az olasıdır**?
Doğru Şık (C): Üst ekstremite arterleri
Açıklama: Ateroskleroz en sık infrarenal abdominal aort ve koroner arterleri tutarken, üst ekstremite arterleri ile mezenterik ve renal arterler (ağız kısımları hariç) karakteristik olarak korunur. İnfrarenal aort ve internal karotid arterlerdeki türbülanslı akım endotel hasarını tetiklediği için plak oluşumu daha sık izlenir. Korunan yataklarda hemodinamik akım paterni aterojenez için uygun biyomekanik ortam oluşturmaz.

**Soru 2 (ID: 74f0a213-db1a-4120-9230-31bbf026ee62)**
Soru Kökü: Hiperlipidemik ve hipertansif bir hastanın diffüz vasküler yatağında endotelyal hücre disfonksiyonu başlamıştır. Patogenez incelendiğinde, bu hastada aterosklerotik lezyonların aşağıdaki vasküler lokalizasyonların hangisinde gelişmesi **en az olasıdır**?
Doğru Şık (D): Üst ekstremite arterleri
Açıklama: Ateroskleroz gelişiminde hemodinamik akım stresi nedeniyle vasküler yataklar azalan sırayla infrarenal aort, koroner, popliteal, internal karotid ve Willis halkasını tutar. Üst ekstremite arterleri, mezenterik arterler ve ostiyumları hariç renal arterler türbülans dinamiği gereği aterom plaklarından tipik olarak korunmuştur. En yoğun aterom yükü her zaman abdominal alt bölgededir.

---

### ÇİFT 2 (Benzerlik: 0.77)

**Soru 1 (ID: 5fd66c63-c2b6-4859-ba3d-0f9c52671a8b)**
Soru Kökü: Yetmiş yaşında kadın hasta; tek taraflı fasiyal ağrı, çiğneme sırasında çenede yorulma (kladikasyon) ve ani görme kaybı tablosu ile acile başvuruyor. Hastanın şikayetlerinin oftalmik arter tutulumu kaynaklı olduğu tespit ediliyor. Bu vasküler inflamasyonun doku zedelenmesine neden olan hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Damar duvarı antijenlerine karşı spesifik CD4+ T hücre yanıtı
Açıklama: Yaşlı hasta, çene kladikasyonu ve görme kaybı kliniği Dev Hücreli (Temporal) Arterit'i tanımlar. Oftalmik arter tutulumu hastalığın körlük yapan en tehlikeli komplikasyonudur; patogenezde damar duvar antijenlerine karşı gelişen agresif CD4+ T lenfosit aracılı granülomatöz inflamasyon rol oynar. İmmün kompleks (IgA) birikimi Henoch-Schönlein purpurasına, nötrofilik mekanizma ise Behçet'e özgüdür.

**Soru 2 (ID: 7b1cbcd1-ccaf-49bd-a06e-d785f3c5b987)**
Soru Kökü: Yetmiş yaşında erkek hasta, son bir haftadır şiddetlenen tek taraflı fasiyal ağrı, çiğneme sırasında çenede yorulma ve görme bulanıklığı şikayetiyle başvuruyor. Temporal bölgede damar trasesi boyunca palpasyonla ağrı saptanıyor. Biyopsi sonucu internal elastik membranın parçalandığını gösteriyor. Bu tablonun patogenezinde, damar duvarı antijenine karşı gelişen granülomatöz inflamasyonu yöneten primer hücre sınıfı aşağıdakilerden hangisidir?
Doğru Şık (C): CD4+ T lenfositler
Açıklama: Dev hücreli (temporal) arterit, özellikle >50 yaş hastalarda oftalmik arter tutulumu ile sekonder oküler semptomlar ve çene kladikasyonu ile seyreden, damar duvarı antijenlerine karşı CD4+ T hücre aracılı bir immün hastalıktır. Nötrofiller veya eozinofiller bu dev hücreli, lenfomakrofajik doku yıkımının primer orkestratörü değildir. Makrofajları bölgeye çekip internal elastik membranı granülomatöz yolla parçalatan asıl etmen CD4+ hücreleridir.

---

### ÇİFT 3 (Benzerlik: 0.77)

**Soru 1 (ID: 225845ae-4b1f-4679-b714-01b71909a713)**
Soru Kökü: Travma sonrası kolunda geniş bir arteriyovenöz (AV) fistül gelişen hastada, fistül onarılmadığı takdirde sistemik dolaşımda gelişmesi beklenen en ciddi sekonder komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Yüksek atımlı kalp yetmezliği
Açıklama: Geniş AV fistüller, arteryel sistemdeki yüksek basınçlı kanın kapiller yatağı by-pass ederek doğrudan venöz sisteme geçmesine (şant) neden olur; bu hacim yükü kalbin venöz dönüşünü şiddetle artırarak yüksek atımlı kalp yetmezliğine yol açar. Glomerüler skarlaşma hiyalin arteriyolosklerozun bir sonucudur. Şant akımı telafi edilemediğinde kalp dekompanse olur.

**Soru 2 (ID: 7074ae10-854a-48ef-9673-c38b6954c5b7)**
Soru Kökü: Konjenital gelişimsel damar bozukluklarından olan büyük hacimli arteriyovenöz (AV) fistüller, kalbin atım dinamiğini ve periferik vasküler direnci sekonder olarak tahrip eder. Hastada gelişen sistemik klinik tablonun kardiak yansıması en spesifik haliyle aşağıdakilerden hangisidir?
Doğru Şık (B): Yüksek atımlı kalp yetmezliği
Açıklama: Arterler ve venler arasında kapiller direnç yatağının atlanarak direkt akım yolu açılması (AV fistül), kanın yüksek arter basıncından doğrudan düşük basınçlı vene boşalmasını sağlar. Venöz sistemin hızla aşırı yüklenmesi kalbe dönen kan hacmini şiddetle artırır. Kalp bu yüksek volümü atabilmek için inotropik hızını zorlayarak 'yüksek atımlı (high-output) kalp yetmezliği' tablosuna girer.

---

### ÇİFT 4 (Benzerlik: 0.77)

**Soru 1 (ID: 9cc2258c-560f-4c65-8aaf-611d5c9e43d5)**
Soru Kökü: Vasküler anomalilerde izlenen hemanjiyom varyantlarının klinik seyri ve anatomik yapısı değerlendirildiğinde, derin dokulara invaze olan "Kavernöz Hemanjiyom" tablolarında aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (B): Tümöral yapının etrafını saran iyi sınırlı bir gerçek kapsül varlığı
Açıklama: Kavernöz hemanjiyomlar, kapiller hemanjiyomların aksine derin yerleşimli, infiltratif ve geniş boşluklu lezyonlardır. Yüzeyel kapiller hemanjiyomlar etraflarında bağ dokusu kaynaklı gerçek bir kapsül taşırken, kavernöz hemanjiyomlar kapsülsüzdür; bu nedenle cerrahi eksizyonları oldukça zordur. Ayrıca kapiller/juvenil tiplerin aksine kendi kendine gerileme (regresyon) yapmazlar ve lokal travma riskinden dolayı içinde kalsifik trombozlar barındırırlar.

**Soru 2 (ID: f43f47fa-ede5-4bf3-8cbb-47419d8bdea2)**
Soru Kökü: Damar tümörleri arasında yer alan Kavernöz Hemanjiyom ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Belirgin bir bağ doku kapsülü vardır ve zamanla spontan regrese olur
Açıklama: Kavernöz hemanjiyomlar kapsülsüzdür, derin dokulara infiltratiftir ve kapiller hemanjiyomların aksine spontan olarak regrese olmazlar (gerilemezler). Belirgin bağ doku kapsülü olan ve sıklıkla regrese olabilen lezyon yüzeysel yerleşimli Kapiller hemanjiyomdur. Kavernöz lezyonların geniş vasküler kanalları içinde kan stazına bağlı tromboz ve kalsifikasyon gelişimi tipiktir.

---

### ÇİFT 5 (Benzerlik: 0.76)

**Soru 1 (ID: 7580265c-48aa-4346-903b-fc70a9736d8c)**
Soru Kökü: Damar duvarının anatomik katmanlarının korunup korunmamasına göre anevrizmalar 'gerçek' ve 'yalancı' (psödoanevrizma) olarak alt tiplere ayrılır. Radyolojik görüntülemede bir kitlenin kesinlikle 'yalancı anevrizma' olarak tanımlanabilmesini sağlayan temel patolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Vasküler boşlukla bağlantılı, damar duvarı dışına çıkmış pulsatil ekstra vasküler hematom formasyonu
Açıklama: Yalancı anevrizmalar (Psödoanevrizmalar), damar duvarının anatomik üç katmanının (intima, media, adventisya) bütünlüğünü yitirerek defektif bir pencere açması ve bu yırtıktan çıkan kanın ekstra vasküler bağ doku içerisinde pulsatil bir hematom oluşturmasıdır. Kan pıhtısı damar lümeniyle dolaşım iştirakini korur. 3 tabakanın topyekün dilatasyonu 'Gerçek' anevrizma, media içine intimal yırtıktan ilerleyen kan ise 'Diseksiyon' tablosudur.

**Soru 2 (ID: c55cbbdc-b64e-423d-921e-7d72153c69f5)**
Soru Kökü: Psödoanevrizma (yalancı anevrizma) ile ilgili aşağıdaki patofizyolojik tanımlamalardan hangisi doğrudur?
Doğru Şık (B): Damar duvarı defektinden çıkarak intravasküler boşlukla bağlantılı ekstra vasküler hematomdur
Açıklama: Yalancı anevrizma (psödoanevrizma), damar duvarındaki bir defektten sızan kanın etraftaki dokular tarafından sınırlandırılarak lümenle ilişkili pulsatil bir ekstra vasküler hematom oluşturmasıdır. Üç damar tabakasını birden içeren genişlemeler gerçek anevrizma olarak tanımlanır. Kanın intima yırtığından media tabakasına girip ilerlemesi ise diseksiyon mekanizmasıdır.

---

### ÇİFT 6 (Benzerlik: 0.75)

**Soru 1 (ID: bd9e38f7-c5bd-4166-a498-051d98e44b1d)**
Soru Kökü: Kırk yaşında erkek hasta, iyileşmeyen persistan pnömoni, kaviter akciğer lezyonları, kronik sinüzit ve idrarda kanama (glomerülonefrit) şikayetleriyle incelenmektedir. Histopatolojik incelemede küçük damarlarda nekrotizan granülomlar saptanıyor. Bu klinik tablonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (E): Polianjitisli granülomatoz (Wegener)
Açıklama: Üst solunum yolu (sinüzit), alt solunum yolu (kaviter pnömoni) ve böbreği (glomerülonefrit) tutan hastalık, c-ANCA ile ilişkili nekrotizan granülomatoz vaskülit olan Polianjitisli Granülomatoz'dur (Wegener). Mikroskobik polianjitiste klinik benzerlik görülse de granülom oluşumu izlenmez (p-ANCA aktiftir). Goodpasture sendromunda akciğer kanaması ve böbrek tutulumu vardır ancak granülomatöz inflamasyon gözlenmez.

**Soru 2 (ID: ef340f99-5313-4a39-be6b-5a82075d3c48)**
Soru Kökü: Kırk iki yaşında erkek hasta, burun kökünde destrüksiyon, kronik sinüzit, nefes darlığı ve bilateral kaviter akciğer lezyonlarıyla tetkik ediliyor. İmmünofloresan incelemede lökosit sitoplazmasında %95 oranında PR3-ANCA pozitifliği gözleniyor. Bu hastanın muhtemel orofasiyal lezyon bulgusu ve böbrek biyopsisindeki histolojik paterni aşağıdakilerin hangisinde sırasıyla doğru eşleştirilmiştir?
Doğru Şık (B): Çilek gingivitis – Fokal nekrotizan kresentik glomerülonefrit
Açıklama: PR3-ANCA (c-ANCA) pozitifliği ve kaviter üst/alt solunum yolu triyadı, polianjitisli granülomatoz (Wegener) teşhisini kesinleştirir. Bu hastalığın diş hekimliği klinik pratiğindeki karşılığı olan oral lezyonu 'çilek (strawberry) gingivitis', %80 oranında görülen ölümcül renal yansıması ise hızlı ilerleyen fokal nekrotizan ve sıklıkla kresentik glomerülonefrittir. Kaldırım taşı Crohn'da, yıldız ülser Tüberkülozda izlenir.

---

### ÇİFT 7 (Benzerlik: 0.75)

**Soru 1 (ID: e2a6c6cc-b65d-4f81-8389-0110f3e585de)**
Soru Kökü: Kan basıncı regülasyonu kaybolmuş ve malign (ciddi) hipertansif faza girmiş bir hastada göz dibi kanamaları ve akut renal disfonksiyon saptanmıştır. Bu hastaya yapılacak böbrek biyopsisinde spesifik olarak izlenmesi beklenen lezyon paterni ve hücresel dejenerasyon modeli aşağıdakilerden hangisidir?
Doğru Şık (C): Soğan zarı (onion-skin) tarzında kalınlaşma – Fibrinoid nekroz
Açıklama: Ciddi (malign) hipertansiyon krizlerinde, küçük kan damarlarında hiperplastik arteriyoloskleroz gelişir. Bu tablonun patolojik imzası, düz kas hücrelerinin agresif proliferasyonuyla konsantrik (soğan zarı/onion-skin) lümen daralmasıdır. Ayrıca ekstrem hemodinamik basınca dayanamayan böbrek arteriyolleri spesifik olarak parçalanıp 'fibrinoid nekroz' (nekrotizan arteriyolit) gösterir; böbrek küçülür ve tabloya malign nefroskleroz adı verilir.

**Soru 2 (ID: e2dfbf9c-1307-4536-8549-01e9b22c1cf1)**
Soru Kökü: Ciddi (malign) hipertansiyon krizine giren hastanın böbrek biyopsisinde, arteriyol lümenlerini şiddetle daraltan hiperplastik arteriyoloskleroz tablosu saptanmıştır. Bu spesifik mikroskobik formda damar duvarında izlenen karakteristik morfolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Soğan zarı tarzında konsantrik kalınlaşma ve fibrinoid nekroz
Açıklama: Malign hipertansiyon sekonderi gelişen hiperplastik arteriyolosklerozda, düz kas hücrelerinin konsantrik (soğan zarı) laminer proliferasyonu ve sıklıkla buna eşlik eden nekrotizan arteriyolit (fibrinoid nekroz) görülür. Homojen hiyalin kalınlaşma benign hipertansiyonun bulgusudur. Soğan zarı görünümü, arteriyolün akut ve çok yüksek hemodinamik basınca verdiği aşırı adaptif-nekrotik bir yanıttır.

---

### ÇİFT 8 (Benzerlik: 0.75)

**Soru 1 (ID: 773a7e1d-c2df-46ca-bd13-f5354fb9cc94)**
Soru Kökü: Ateroskleroz gelişiminin başlatıcı olayı (ilk aşaması) aşağıdakilerden hangisidir?
Doğru Şık (A): Endotelyal hücre hasarı ve disfonksiyon
Açıklama: Ateroskleroz patogenezinin köşe taşı ve süreci başlatan ilk mikroskobik olay, hemodinamik stres veya hiperlipidemiye bağlı endotelyal hasar ve disfonksiyondur. Makrofajların köpüksü hücrelere dönüşmesi ve düz kas hücre proliferasyonu endotel hasarını takip eden sekonder inflamatuvar adımlardır. Endotel bütünlüğünün bozulması, lipidlerin ve monositlerin intima tabakasına geçişine izin vererek plak oluşumunu tetikler.

**Soru 2 (ID: 8ec6b2f1-9e63-4347-b288-eeefde3e7eef)**
Soru Kökü: Koroner arter tıkanıklığı nedeniyle kardiyovasküler sistemden mortalite riski taşıyan bir ateroskleroz hastasının patofizyolojik evreleri geriye doğru incelendiğinde; intimal düz kas göçü, LDL oksidasyonu ve köpüksü makrofaj dönüşümü zincirini provoke eden 'ilk patolojik olay / en erken değişiklik' morfolojik olarak aşağıdakilerden hangisidir?
Doğru Şık (D): Endotelyal hücre hasarı ve disfonksiyonu
Açıklama: Aterosklerozda plak matürasyon süreci komplike bir immün ve lipid döngüsü içerir. Ancak tüm sürecin patogenezini tetikleyen yegane 'köşetaşı' ilk aşama ve tabloda özellikle belirtildiği üzere 'başlatıcı olay/en erken değişiklik', endotel yüzeyindeki hemodinamik veya toksik (sigara vb.) faktörlere bağlı 'Endotelyal hasar/disfonksiyon' tablosudur. Diğer hücresel infiltrasyon ve oksidasyon olayları bu bariyer zafiyeti sonrasında başlar.

---

### ÇİFT 9 (Benzerlik: 0.75)

**Soru 1 (ID: 1c1ade24-c060-4e28-896c-20e21a995049)**
Soru Kökü: Orogenital ülserasyonları bulunan ve gözde inflamasyon (üveit) semptomlarıyla izlenen genç bir hastanın klinik patogenezi incelenmektedir. İlgili vasküler yapıda spesifik Th17 hücrelerinden salınan IL-17 varlığı söz konusudur. Bu hastada letal klinik sonlanıma sebep olan primer vasküler patoloji aşağıdakilerden hangisidir?
Doğru Şık (A): Vasküler anevrizmaların rüptürü
Açıklama: Verilen klinik yapı ve sitokin paneli Th17/IL-17 kaynaklı nötrofilik Behçet hastalığı tablosudur. Behçet vasküliti spesifik olarak küçük ve orta çaplı damar nekrozuna sebep olarak vasküler duvar direncini kırar; kaynak metinde 'Behçet hastalığında ölüm genellikle vasküler anevrizmaların rüptürü nedeniyle görülür' ifadesi mortalitenin direk sebebini belirler.

**Soru 2 (ID: 697c9786-5c3a-4198-99f2-ac5b3ec4b34a)**
Soru Kökü: Majör aftöz ülserler, genital ülserler ve üveit klinik triyadı gösteren 35 yaşındaki HLA-B51 taşıyıcısı hastada, vasküler lezyonun patogenezinden spesifik bir sitokin yolağı sorumlu tutulmaktadır. Hastalık dokusunda yoğun nötrofil birikimini provoke eden patojenik sitokin kaynağı aşağıdakilerden hangisidir?
Doğru Şık (D): T helper 17 (Th17) hücrelerinden salınan IL-17
Açıklama: Verilen klinik tablo ve HLA-B51 pozitifliği nötrofilik bir immün vaskülit olan Behçet hastalığını tanımlar. Behçet hastalığının patogenezinin merkezinde, Th17 lenfositlerinin aşırı reaktivitesiyle ortama IL-17 sekrete etmeleri ve bu sitokinin devasa bir kemotaktik sinyalle dokuya sürekli nötrofil çekmesi yatar. IFN-γ hücresel makrofaj aktivasyonu (Tüberküloz), Treg/TGF-β ise daha çok immün tolerans veya fibroziste çalışır.

---

### ÇİFT 10 (Benzerlik: 0.74)

**Soru 1 (ID: b0d8f9d6-0277-41f9-851e-37357f79feb2)**
Soru Kökü: Baş ve boyun bölgesinde yerleşen, zamanla solmayan ve gerilemeyen özel bir nevüs flammeus formu olan porto şarabı lekesi, Trigeminal sinir dağılımı bölgesinde yerleştiğinde aşağıdaki sendromlardan hangisiyle güçlü birliktelik gösterir?
Doğru Şık (C): Sturge-Weber sendromu
Açıklama: Trigeminal sinir trasesini takip eden fasiyal porto şarabı lekesi (nevüs flammeus), ipsilateral leptomeningeal vasküler malformasyonlar ile karakterize Sturge-Weber (ensefalotrigeminal anjiomatöz) sendromunun klasik bulgusudur. Osler-Weber-Rendu hastalığı mukozalarda herediter hemorajik telenjektaziler yapar ancak tek taraflı fasiyal dermatom dağılımı göstermez. Sturge-Weber'de lezyonlar zamanla büyüme eğilimindedir.

**Soru 2 (ID: fd12f41a-ea1e-4934-abda-3672f56ae735)**
Soru Kökü: Santral sinir sisteminde ipsilateral ensefalotrigeminal anjiyomatöz anormalliklerle bilinen Sturge-Weber sendromu tanısı alan bir çocukta, dermatolojik muayenede trigeminal sinir inervasyonu hattına tam uygunluk gösteren ve yaşla birlikte kalınlaşıp regrese olmayan vasküler lezyonun patolojik ismi aşağıdakilerden hangisidir?
Doğru Şık (A): Porto şarabı lekesi
Açıklama: Sturge-Weber sendromu (ensefalotrigeminal anjiyomatoz), yüzde trigeminal sinir trasesi boyunca kalıcı, nevüs flammeusun hipertrofik spesifik bir formu olan 'Porto şarabı lekesi' (Port wine stain) lezyonuyla seyreder. Bu lezyon spider veya basit hemanjiyomların aksine solmaz, basınçla kaybolmaz ve hasta büyüdükçe regrese olmak yerine bağ doku artışıyla kalınlaşır.

---

### ÇİFT 11 (Benzerlik: 0.72)

**Soru 1 (ID: 697c9786-5c3a-4198-99f2-ac5b3ec4b34a)**
Soru Kökü: Majör aftöz ülserler, genital ülserler ve üveit klinik triyadı gösteren 35 yaşındaki HLA-B51 taşıyıcısı hastada, vasküler lezyonun patogenezinden spesifik bir sitokin yolağı sorumlu tutulmaktadır. Hastalık dokusunda yoğun nötrofil birikimini provoke eden patojenik sitokin kaynağı aşağıdakilerden hangisidir?
Doğru Şık (D): T helper 17 (Th17) hücrelerinden salınan IL-17
Açıklama: Verilen klinik tablo ve HLA-B51 pozitifliği nötrofilik bir immün vaskülit olan Behçet hastalığını tanımlar. Behçet hastalığının patogenezinin merkezinde, Th17 lenfositlerinin aşırı reaktivitesiyle ortama IL-17 sekrete etmeleri ve bu sitokinin devasa bir kemotaktik sinyalle dokuya sürekli nötrofil çekmesi yatar. IFN-γ hücresel makrofaj aktivasyonu (Tüberküloz), Treg/TGF-β ise daha çok immün tolerans veya fibroziste çalışır.

**Soru 2 (ID: b1ce48b2-d0d5-483b-991d-9dd589433313)**
Soru Kökü: Küçük ve orta çaplı damarların nötrofilik vasküliti ile karakterize Behçet hastalığının doku hasarı patogenezinde rol oynayan temel immünolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): TH17 hücrelerinden İL-17 sekresyonu ile nötrofil toplanması
Açıklama: Behçet hastalığının patogenezinde spesifik olarak TH17 lenfositleri İL-17 sitokini sekrete eder ve bu durum nötrofillerin damar duvarına şiddetli bir şekilde toplanarak nötrofilik vaskülit yapmasına neden olur. CD4+ T hücre aracılı granülomatöz reaksiyon dev hücreli arteritin temel mekanizmasıdır. Behçet sendromunda doku hasarını tetikleyen temel hücre serisi granülomatoz değil, İL-17 güdümlü nötrofillerdir.

---

### ÇİFT 12 (Benzerlik: 0.71)

**Soru 1 (ID: 27e235e2-dc34-4d1d-b20b-554de854937b)**
Soru Kökü: Altmış beş yaşında, 15 yıldır diabetes mellitus öyküsü olan erkek hastanın rutin kontrolünde böbrek fonksiyonlarında bozulma tespit ediliyor. Yapılan böbrek biyopsisinde, plazma proteinlerinin endotelden sızması sonucu gelişen arteriyoler daralma görülüyor. Bu hastanın mikroskobik incelemesinde en olası bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Homojen, hiyalin duvar kalınlaşması ve lümen daralması
Açıklama: Benign hipertansiyon ve diyabetik mikroanjiyopati zemininde gelişen patoloji, plazma proteinlerinin sızıntısı ve matriks artışına bağlı hiyalin arteriyolosklerozdur. Fibrinoid nekroz ve soğan zarı tarzı kalınlaşma, benign değil malign (ciddi) hipertansiyonun neden olduğu hiperplastik arteriyoloskleroz tablosudur. Hiyalin arteriyoloskleroz böbrekte diffüz iskemiye yol açarak benign nefroskleroz ile sonuçlanır.

**Soru 2 (ID: e2a6c6cc-b65d-4f81-8389-0110f3e585de)**
Soru Kökü: Kan basıncı regülasyonu kaybolmuş ve malign (ciddi) hipertansif faza girmiş bir hastada göz dibi kanamaları ve akut renal disfonksiyon saptanmıştır. Bu hastaya yapılacak böbrek biyopsisinde spesifik olarak izlenmesi beklenen lezyon paterni ve hücresel dejenerasyon modeli aşağıdakilerden hangisidir?
Doğru Şık (C): Soğan zarı (onion-skin) tarzında kalınlaşma – Fibrinoid nekroz
Açıklama: Ciddi (malign) hipertansiyon krizlerinde, küçük kan damarlarında hiperplastik arteriyoloskleroz gelişir. Bu tablonun patolojik imzası, düz kas hücrelerinin agresif proliferasyonuyla konsantrik (soğan zarı/onion-skin) lümen daralmasıdır. Ayrıca ekstrem hemodinamik basınca dayanamayan böbrek arteriyolleri spesifik olarak parçalanıp 'fibrinoid nekroz' (nekrotizan arteriyolit) gösterir; böbrek küçülür ve tabloya malign nefroskleroz adı verilir.

---

### ÇİFT 13 (Benzerlik: 0.71)

**Soru 1 (ID: 1e4d83ac-c928-457c-8bd1-6041d6fa5c5d)**
Soru Kökü: Oral bölgede granülomatöz lezyonlar ile seyreden sistemik hastalıkların klinik dışavurumlarıyla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (C): Sarkoidoz - Diş eti bölgesinde çilek (strawberry) gingivitis
Açıklama: Çilek (strawberry) gingivitis, orta hatta nekrotizan granülomlar yapan Polianjitisli Granülomatoz'un (Wegener) karakteristik oral bulgusudur; Sarkoidozda ise Mikulicz sendromu veya dudak çevresinde eritemli plaklar görülür. Crohn hastalığında izlenen kaldırım taşı görünümü ve tüberkülozun yıldız biçimli ülserleri klasik granülomatöz paternlerdir. Sarkoidoz çilek gingivitis yapmaz.

**Soru 2 (ID: 5bed5165-7be5-4fd9-8ce5-89c35b2be2e2)**
Soru Kökü: Otuz beş yaşında erkek hasta, oral aftöz ülserler ve dudak mukozasında kaldırım taşı benzeri kabarık görünüm ile diş hekimine başvuruyor. Hastanın anamnezinden kronik gastrointestinal semptomları olduğu öğreniliyor. Oral mukoza biyopsisinde non-kazeöz granülomlar tespit edilen bu hastanın altta yatan primer hastalığı aşağıdakilerden hangisidir?
Doğru Şık (D): Crohn hastalığı
Açıklama: Oral mukozada aftöz ülserler ve kaldırım taşı görünümü ile birlikte gastrointestinal tutulum Crohn hastalığına ait karakteristik bulgulardır. Wegener granülomatozu oral bölgede çilek gingivitis ve nekrotizan granülomlar yapar. Sarkoidoz mikulicz sendromu veya spesifik mor plaklarla karşımıza çıkar; Crohn'un kaldırım taşı dokusu klinik ayırıcı tanıda kilit önemdedir.

---

### ÇİFT 14 (Benzerlik: 0.70)

**Soru 1 (ID: ae191a56-0aa1-4d5a-a773-c4050a59d7af)**
Soru Kökü: Dört yaşında erkek çocuk, 6 gündür devam eden dirençli ateş, avuç içlerinde eritem, servikal lenf nodunda büyüme ve papillomatöz görünümlü dilde kızarıklık ile servise kabul ediliyor. Bu çocukta morbidite ve mortaliteyi belirleyen en önemli komplikasyon olan dev koroner arter anevrizması riskini azaltmak için uygulanması gereken en uygun güncel yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (A): İntravenöz immünglobülin ve aspirin
Açıklama: Hastadaki >5 günlük ateş, mukokütanöz değişiklikler ve 'çilek dil' görünümü çocukluk çağının en sık ateşli vasküliti olan Kawasaki hastalığı tanısını kesinleştirir. Kawasaki hastalığında miyokard enfarktüsü ve koroner anevrizma riskini anlamlı ölçüde düşürdüğü kanıtlanan tek spesifik başlangıç tedavisi yüksek doz İVİG ve asprin kombinasyonudur. Steroidler veya diğer immünsüpresanlar bu patolojide ilk basamak endikasyon taşımaz.

**Soru 2 (ID: f08bcabc-cc8d-4dcb-ac6d-7565f4eec3a4)**
Soru Kökü: Çocukluk çağında gelişen ve koroner arter anevrizmalarına yol açma riski bulunan Kawasaki hastalığının erken dönem tedavisinde, vasküler hasarı durdurmak amacıyla kullanılan en spesifik ve kanıtlanmış ikili medikal tedavi kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (C): İntravenöz immünglobülin (IVIG) ve aspirin
Açıklama: Kawasaki hastalığında gelişebilecek mortal koroner arterit ve anevrizma riskini belirgin şekilde azaltmak için standart altın tedavi intravenöz immünglobülin (IVIG) ve yüksek doz aspirindir. Steroid ve siklofosfamid, Wegener ve PAN gibi nekrotizan vaskülitlerin tedavisinde kullanılır. Çocuklarda Reye sendromu riski nedeniyle aspirin kullanımından kaçınılırken, Kawasaki bu kuralın en istisnai ve hayati örneğidir.

---

### ÇİFT 15 (Benzerlik: 0.70)

**Soru 1 (ID: 26107e0c-54c3-4e53-9e0a-913154a43a2d)**
Soru Kökü: Nötrofilik bir vaskülit olan ve aftöz ülserler, genital ülserler ve üveit klasik triyadı ile seyreden Behçet hastalığı ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Primer doku hasarı IL-4 ve IL-5 üreten TH2 hücrelerinin eozinofil toplanmasına dayanır
Açıklama: Behçet hastalığının patogenezinde TH2 hücreleri ve eozinofiller değil, IL-17 sekrete ederek ortama yoğun nötrofil toplanmasını sağlayan TH17 hücreleri rol oynar. Hastalık temelde bir nötrofilik vaskülittir. Vasküler tutulum sonucu gelişen anevrizmaların rüptürü hastalık seyrindeki fatal komplikasyonların başında gelir.

**Soru 2 (ID: b1ce48b2-d0d5-483b-991d-9dd589433313)**
Soru Kökü: Küçük ve orta çaplı damarların nötrofilik vasküliti ile karakterize Behçet hastalığının doku hasarı patogenezinde rol oynayan temel immünolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): TH17 hücrelerinden İL-17 sekresyonu ile nötrofil toplanması
Açıklama: Behçet hastalığının patogenezinde spesifik olarak TH17 lenfositleri İL-17 sitokini sekrete eder ve bu durum nötrofillerin damar duvarına şiddetli bir şekilde toplanarak nötrofilik vaskülit yapmasına neden olur. CD4+ T hücre aracılı granülomatöz reaksiyon dev hücreli arteritin temel mekanizmasıdır. Behçet sendromunda doku hasarını tetikleyen temel hücre serisi granülomatoz değil, İL-17 güdümlü nötrofillerdir.

---

### ÇİFT 16 (Benzerlik: 0.70)

**Soru 1 (ID: 27e235e2-dc34-4d1d-b20b-554de854937b)**
Soru Kökü: Altmış beş yaşında, 15 yıldır diabetes mellitus öyküsü olan erkek hastanın rutin kontrolünde böbrek fonksiyonlarında bozulma tespit ediliyor. Yapılan böbrek biyopsisinde, plazma proteinlerinin endotelden sızması sonucu gelişen arteriyoler daralma görülüyor. Bu hastanın mikroskobik incelemesinde en olası bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Homojen, hiyalin duvar kalınlaşması ve lümen daralması
Açıklama: Benign hipertansiyon ve diyabetik mikroanjiyopati zemininde gelişen patoloji, plazma proteinlerinin sızıntısı ve matriks artışına bağlı hiyalin arteriyolosklerozdur. Fibrinoid nekroz ve soğan zarı tarzı kalınlaşma, benign değil malign (ciddi) hipertansiyonun neden olduğu hiperplastik arteriyoloskleroz tablosudur. Hiyalin arteriyoloskleroz böbrekte diffüz iskemiye yol açarak benign nefroskleroz ile sonuçlanır.

**Soru 2 (ID: e2dfbf9c-1307-4536-8549-01e9b22c1cf1)**
Soru Kökü: Ciddi (malign) hipertansiyon krizine giren hastanın böbrek biyopsisinde, arteriyol lümenlerini şiddetle daraltan hiperplastik arteriyoloskleroz tablosu saptanmıştır. Bu spesifik mikroskobik formda damar duvarında izlenen karakteristik morfolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Soğan zarı tarzında konsantrik kalınlaşma ve fibrinoid nekroz
Açıklama: Malign hipertansiyon sekonderi gelişen hiperplastik arteriyolosklerozda, düz kas hücrelerinin konsantrik (soğan zarı) laminer proliferasyonu ve sıklıkla buna eşlik eden nekrotizan arteriyolit (fibrinoid nekroz) görülür. Homojen hiyalin kalınlaşma benign hipertansiyonun bulgusudur. Soğan zarı görünümü, arteriyolün akut ve çok yüksek hemodinamik basınca verdiği aşırı adaptif-nekrotik bir yanıttır.

---

### ÇİFT 17 (Benzerlik: 0.69)

**Soru 1 (ID: 219ff1a8-250d-40f4-a77b-627b0bb8faae)**
Soru Kökü: İmmün aracılı damar hasar mekanizmalarında spesifik antikorların serolojik testlerde tespit edilmesi tanısal öneme sahiptir. Dünyada yaşlılar arasında en sık görülen vaskülit olan Dev hücreli (temporal) arterit hastasının serumunda anti-düz kas antikorları (ASMA) dışında sıklıkla saptanan diğer immün belirteç aşağıdakilerden hangisidir?
Doğru Şık (B): Anti-endotelyal hücre antikorları
Açıklama: Dev hücreli arteritte (temporal arterit) damar cidarındaki internal elastik membranı yıkıma uğratan T hücre aktivasyonu sırasında, laboratuvar serolojisinde sıklıkla 'Anti-endotelyal hücre antikorları' ve ASMA pozitifliği eşlik eder. c-ANCA Wegener'in p-ANCA Churg-Strauss ve Mikroskobik Polianjitis'in, anti-dsDNA ise SLE'nin vaskülit yansımalarıdır.

**Soru 2 (ID: 6cbb5a8f-7d38-488b-8b5f-1a3e65fbe2fe)**
Soru Kökü: Üst ve alt solunum yollarında nekrotizan granülomlar ile böbreklerde fokal kresentik glomerülonefrit tablosuyla seyreden Polianjitisli Granülomatoz (Wegener) hastalarında, tanıyı destekleyen en spesifik serolojik belirteç aşağıdakilerden hangisidir?
Doğru Şık (A): PR3-ANCA (c-ANCA)
Açıklama: Polianjitisli granülomatoz (Wegener) tanılı hastaların %95'inde sitoplazmik paternde boyanan PR3-ANCA (c-ANCA) antikorları pozitif bulunur ve hastalık aktivitesiyle koreledir. Anti-endotelyal antikorlar Kawasaki hastalığında, HLA-B51 ise Behçet hastalığının patogenezinde rol oynayan hücresel belirteçlerdir. Wegener kliniğinde PR3-ANCA pozitifliği, steroid ve siklofosfamid tedavisine yönlendiren kritik bir serolojik markırdır.

---

