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

**Soru 1 (ID: 53ab09cd-7bd9-4097-a7c6-d245ea4519c8)**
Soru Kökü: Yirmi iki yaşında bir hastanın panoramik radyografisinde çenelerin birçok bölgesinde toplam altı adet dens kemik adası ve iki adet süpernümerer diş izlenmektedir. Hastada Gardner sendromu şüphesi ile detaylı tıbbi öykü alınmasına karar verilir. Sendroma bağlı diğer olası çene-yüz dental lezyonları arasında aşağıdakilerden hangisinin bulunma sıklığında belirgin bir **artış** gözlenir?
Doğru Şık (D): Odontoma ve gömülü dişler
Açıklama: Gardner Sendromu'nda çene-yüz bulguları olarak multipl osteomalar ve dens kemik adaları (enostozlar) başta olmak üzere; süpernümerer dişler, gömülü dişler ve odontomaların görülme sıklığında belirgin bir artış rapor edilmektedir. Hemanjiom veya mikzoma insidansında sendroma özgü artış yoktur.

**Soru 2 (ID: f32ef843-bea1-4646-a56b-28cf9827ba4c)**
Soru Kökü: Yirmi yaşında bir hastada tesadüfen altı adet dens kemik adası (enostoz) saptanmış, çenelerde ayrıca iki adet süpernümerer diş tespit edilmiştir. Hekim hastayı sistemik bir sendrom açısından değerlendirmektedir. Aşağıdaki kütanöz bulgulardan hangisinin bu hastada görülmesi Gardner Sendromu şüphesini **artırır**?
Doğru Şık (E): Subkütan desmoid tümörler ve epidermoid kistler
Açıklama: Beş veya daha fazla dens kemik adası (enostoz), süpernümerer dişler ve gömülü dişler Gardner sendromunun majör dental/osseöz bulgularındandır. Bu hastalığın kütanöz (deri/yumuşak doku) lezyonları epidermoid kistler ve subkütan desmoid tümörlerdir. Cafe au lait ve nörofibromlar Nörofibromatozise aittir.

---

### ÇİFT 2 (Benzerlik: 0.78)

**Soru 1 (ID: 90441e52-3bba-4693-8266-663efe3bbd89)**
Soru Kökü: Ameloblastik fibromanın radyolojik olarak diğer multiloküler lezyonlardan ayrımıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Ameloblastik fibromdaki iç septalar, ameloblastomaya göre daha ince ve belirsiz sınırlıdır.
Açıklama: Ameloblastik fibromadaki septalar ameloblastomaya göre çok daha 'belirgin ve kalındır'. Bu kalın septa yapısı, ameloblastik fibromayı klasik sabun köpüğü yapan ameloblastomdan ayırır. Granüler/ince/belirsiz septa yapısı ise Dev Hücreli Granülomun karakteristik özelliğidir.

**Soru 2 (ID: 9464bc95-2c46-486c-a3ae-a25a77d31f62)**
Soru Kökü: Ameloblastomanın radyolojik ve klinik özellikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Radyografide internal yapısında mine benzeri kalsifiye radyoopak odaklar içermesi tipiktir.
Açıklama: Ameloblastoma radyografik olarak tam radyolüsentten kemik septalı (bal peteği veya sabun köpüğü) miks yapıya kadar değişebilir ancak içerisinde kalsifiye radyoopak sert doku (mine/sement) odakları barındırmaz. Kalsifiye odaklar Adenomatoid Odontojenik Tümör, Pindborg tümörü veya Odontomalar için karakteristiktir. Yumurta kabuğu etkisi, bıçak sırtı kök rezorpsiyonu ve multikistik görünüm ameloblastoma için tipik bulgulardır.

---

### ÇİFT 3 (Benzerlik: 0.77)

**Soru 1 (ID: 1edafac3-1860-47af-8925-6245d9c78c6a)**
Soru Kökü: Çene kemiklerinde santral olarak gelişebilen ve yalnızca odontojenik ektomezenşim kaynaklı olduğu bilinen benign tümörler bulunmaktadır. Aşağıdakilerden hangisi bu saf ektomezenşimal kökenli tümörlere radyografik bir örnektir?
Doğru Şık (A): Odontojenik miksoma
Açıklama: Odontojenik miksoma, gelişmekte olan dişin papillasını veya dental folikülünü andıran, saf ektomezenşimal yapıda ve düzensiz septalara (tenis raketi) sahip olan bir tümördür. Ameloblastik fibroma ve odontomalar miks yapıda iken, Pindborg ve ameloblastomalar epitel kaynaklıdır. Ektomezenşimal tümörlerin invaziv özellikleri, kemik iliğine mikroskobik düzeyde sızmalarından kaynaklanır.

**Soru 2 (ID: f133dd55-0494-45a6-8bbe-cbbdf1585ff8)**
Soru Kökü: Hem odontojenik epitelden hem de ektomezenşimal dokulardan köken alan (miks) tümörlerin klinik ve radyolojik davranışları birbirlerinden farklıdır. Aşağıdaki tümörlerden hangisi bu 'miks odontojenik tümörler' kategorisinin en sık görülen temsilcisidir?
Doğru Şık (E): Odontoma
Açıklama: Odontoma, epitelyal ve ektomezenşimal (miks) hücrelerin ikisini de barındıran ve dentin, mine gibi matür diş dokularının düzensiz gelişim gösterdiği, en sık karşılaşılan odontojenik tümördür. AOT, Pindborg ve Ameloblastoma epitel grubuna ait olup, miksomalar saf ektomezenşim kökenlidir. Odontoma aslında gerçek bir neoplazmdan ziyade gelişimsel bir hamartom özelliği de gösterir.

---

### ÇİFT 4 (Benzerlik: 0.76)

**Soru 1 (ID: 18212c92-ac58-48a3-b535-272af1aa6bd2)**
Soru Kökü: Bilinen nörofibromatozis tanısı olan 14 yaşındaki hastanın alınan kraniofasiyal radyografilerinde temporomandibuler eklem (TME) bölgesini ilgilendiren spesifik anomaliler saptanmıştır. Bu hastanın ramus ve kondil kompleksinde aşağıdaki radyografik bulgulardan hangisinin görülmesi **beklenir**?
Doğru Şık (A): Kondil başında deformite ve kondil boynunun uzaması
Açıklama: Nörofibromatozis, çene kemiklerinde displastik anormalliklere yol açar. Kondil başında deformite, kondil boynunun belirgin şekilde uzaması, ramusta lateral eğrilik ve incelme, koronoid çentikte genişleme karakteristik radyolojik bulgulardır. Osteofit oluşumu osteoartrite, tam ankiloz ciddi travma/enfeksiyona daha çok uyan bulgulardır.

**Soru 2 (ID: 283147d7-4119-476f-817f-49d8685d591f)**
Soru Kökü: Von Recklinghausen Hastalığı olarak da bilinen Nörofibromatozis tip 1 sendromu bulunan bir hastanın baş-boyun radyografik değerlendirmesinde aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Maksiller sinüse uzanan konsantrik radyoopak osteomalar
Açıklama: Konsantrik radyoopak osteomalar, epidermal kistler ve enostozlar Gardner sendromuna özgüdür. Nörofibromatozis hastalarının bazal kafa grafilerinde kondil ve koronoid anomalileri, ramusta lateral eğrilik, mandibular foramen ve kanalda genişlemeler (Nörofibroma lokal invazyonu kaynaklı) izlenir.

---

### ÇİFT 5 (Benzerlik: 0.76)

**Soru 1 (ID: 000c4d4c-8692-4b8c-9c40-33b5118a4a85)**
Soru Kökü: Otuz yaşında bir hastada anterior mandibulada orta hattı geçen ekspansif bir kitle tespit ediliyor. Panoramik radyografide multiloküler kistik görünüm izlenmekle birlikte, içerisindeki septaların incecik, belirsiz ve 'granüler' yapıda olduğu saptanıyor. Bu lezyon için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Santral Dev Hücreli Granüloma
Açıklama: Anterior mandibulada orta hattı geçme eğilimi gösteren, 30'lu yaşlarda görülen ve radyografik olarak septalarının 'granüler' ve belirsiz sınırlı olmasıyla karakterize multiloküler lezyon Santral Dev Hücreli Granülom'dur. Ameloblastik fibroma ve odontojenik miksomalar daha çok posterior çenede görülürler.

**Soru 2 (ID: d89d3849-2eba-444a-a403-fdb6fd609dd4)**
Soru Kökü: Yirmi iki yaşında kadın hasta, premolar-molar bölgede yavaş büyüyen ağrılı şişlik şikayetiyle başvuruyor. Radyografide ince, düz ve yer yer 'tenis raketi' şeklinde septalar içeren multiloküler lezyon saptanıyor. Operasyon sırasında lezyonun kapsülsüz olduğu ve kemik iliği boşluklarına jelatinöz (miksoid) yapıda infiltre olduğu görülüyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Odontojenik mikzoma
Açıklama: Odontojenik mikzomalar çoğunlukla 10-30 yaş arası genç kadınlarda görülür, kapsülsüz oldukları için kemik iliğine infiltre olurlar ve ince, düz (tenis raketi/merdiven basamağı) septalar ile karakterizedirler. Jelatinöz (miksoid) kıvamda olmaları cerrahi sınırların belirlenmesini zorlaştırarak nüks riskini (%25) artırır. Hemanjiomlar da multiloküler olabilir ancak miksoid jelatinöz doku barındırmazlar.

---

### ÇİFT 6 (Benzerlik: 0.76)

**Soru 1 (ID: a058e98d-252c-4a4b-b8a7-8b719369be76)**
Soru Kökü: Nörofibromatozis (Von Recklinghausen) hastalarının çene yüz bölgesi radyografik değerlendirmesinde karşılaşılan kemik displazisi bulguları arasında;
I. Ramusta lateral yönde eğrilik ve incelme
II. Ramus ile mandibula gövdesi arasında geniş açı
III. Koronoid çentikte yatay/dikey yönde büyümeler
bulgularından hangileri yer alır?
Doğru Şık (C): I, II ve III
Açıklama: Von Recklinghausen hastalığının (Nörofibromatozis) radyolojik incelemelerinde, mandibula ramus bölgesinde displastik değişimler sıktır. Hastalarda koronoid çentikte (sigmoid çentik) horizontal/vertikal büyüme, ramusta dışa (lateral) doğru eğrilme ve kemikte incelme, ve ramus-gövde arasındaki angulasyonun artması (geniş açı) görülebilen klasik anomalilerdendir.

**Soru 2 (ID: b4b33be5-b47c-43d9-bb17-a7b7feec1977)**
Soru Kökü: Nörofibromatozis Tip 1 (Von Recklinghausen Hastalığı) hastalarının çene ve yüz bölgesinde izlenen radyografik özellikler arasında aşağıdakilerden hangisi yer almaz?
Doğru Şık (B): Mandibula ramus ve gövdesi arasındaki açının daralması
Açıklama: Nörofibromatozis Tip 1 vakalarında mandibula ramus ve gövdesi arasındaki açı daralmaz, aksine genetik yapısal deformitelerin bir sonucu olarak 'genişler'. İnceltilmiş ramus, uzamış kondil boynu, genişlemiş mandibular foramina/kanal, artmış kanal dallanması (bifürkasyon/trifürkasyon) ve deride cafe-au-lait lekeleri bu sendromun ayrılmaz radyolojik-klinik komponentleridir.

---

### ÇİFT 7 (Benzerlik: 0.76)

**Soru 1 (ID: 037e6413-49d3-4fbf-9388-4aa2d06d25c9)**
Soru Kökü: Histopatolojik ve radyografik olarak birbirine benzeyen osteoblastom ve osteoid osteoma arasındaki majör klinik ayırıcı tanı kriteri aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoblastomun osteoid osteoma kadar ağrılı olmaması ve ağrısının salisilatlar ile belirgin şekilde hafiflememesi
Açıklama: Osteoid osteomalar şiddetli (gece artan) kemik ağrısı ile karakterizedir ve bu ağrı spesifik olarak NSAİİ (salisilat) ile belirgin şekilde hafifler. Osteoblastom daha agresif bir büyüme potansiyeline sahip olmakla birlikte, ağrısı daha hafiftir ve salisilat türevleriyle rahatlamaz.

**Soru 2 (ID: f56e05e4-f0f3-459f-9581-3b1495e0caea)**
Soru Kökü: Osteoblastoma ve Osteoid Osteoma'nın klinik ve histopatolojik özellikleri sıklıkla birbirine karışmaktadır. Bu iki patolojinin klinik ve radyolojik ayrımına dair aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Osteoid osteoma daha agresif olup kemik çevresindeki yumuşak dokulara hızla yayılma potansiyeline sahiptir.
Açıklama: Osteoblastoma, osteoid osteomaya göre 'daha fazla büyüme potansiyeline sahip ve daha agresif' olarak kabul edilen lezyondur. Çevre dokulara yayılma (malignite olmasa da daha yaygın lokal destrüksiyon) osteoblastomda beklenir. Osteoid osteoma sınırlı kalır, etrafı kalın sklerotik reaksiyonla çevrilir ve ağrısı NSAİİ (salisilat) ile karakteristik olarak hızlıca geçer.

---

### ÇİFT 8 (Benzerlik: 0.76)

**Soru 1 (ID: bb4f0664-dae0-47a6-a329-38e8180d6299)**
Soru Kökü: Odontojenik tümörlerin Dünya Sağlık Örgütü sınıflandırması temel alındığında, aşağıdaki tümörlerden hangisi yalnızca 'epitel kaynaklı' odontojenik tümörler başlığı altında değerlendirilir?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma histopatolojik ve embriyolojik olarak tamamen odontojenik epitelden köken alan, ektomezenşim ihtiva etmeyen bir benign tümördür. Sementoblastoma, miksom ve fibrom saf ektomezenşimal kaynaklı iken, odontoma her iki germ katmanını da barındıran miks (karma) doku tümörüdür. Ameloblastoma bu grubun açık ara en klinik semptom veren epitelial üyesidir.

**Soru 2 (ID: f133dd55-0494-45a6-8bbe-cbbdf1585ff8)**
Soru Kökü: Hem odontojenik epitelden hem de ektomezenşimal dokulardan köken alan (miks) tümörlerin klinik ve radyolojik davranışları birbirlerinden farklıdır. Aşağıdaki tümörlerden hangisi bu 'miks odontojenik tümörler' kategorisinin en sık görülen temsilcisidir?
Doğru Şık (E): Odontoma
Açıklama: Odontoma, epitelyal ve ektomezenşimal (miks) hücrelerin ikisini de barındıran ve dentin, mine gibi matür diş dokularının düzensiz gelişim gösterdiği, en sık karşılaşılan odontojenik tümördür. AOT, Pindborg ve Ameloblastoma epitel grubuna ait olup, miksomalar saf ektomezenşim kökenlidir. Odontoma aslında gerçek bir neoplazmdan ziyade gelişimsel bir hamartom özelliği de gösterir.

---

### ÇİFT 9 (Benzerlik: 0.76)

**Soru 1 (ID: a0a4f8ea-2928-4506-8843-16838d89b777)**
Soru Kökü: Otuz yaşında kadın hastanın mandibula posterior bölgesinde, sferik ve belirgin sınırlı, etrafı ince radyolusent bir bant (kapsül) ile çevrili homojen radyoopak kitle saptanıyor. Lezyon çenede konsantrik ekspansiyon yapmış ve komşu dişleri iterek yer değiştirmiştir. Bu lezyonun Fibröz Displaziden ayrımını sağlayan en kritik radyografik özellik aşağıdakilerden hangisidir?
Doğru Şık (E): İyi sınırlı olması ve etrafında fibröz kapsülü temsil eden radyolusent bandın bulunması
Açıklama: Semento-ossifiye fibromun fibröz displaziden ayrımındaki en önemli fark sınır karakteridir. Fibröz displazi çevre kemik doku ile karışmış (sınırları belirsiz) bir buzlu cam paterni sunarken, ossifiye fibromların etrafında fibröz kapsülü temsil eden belirgin bir radyolusent bant ve kortikal sınır vardır; konsantrik büyürler.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 10 (Benzerlik: 0.76)

**Soru 1 (ID: 6f6bd325-92f3-4ff0-8b33-cea38a42fbd4)**
Soru Kökü: 42 yaşında kadın hastanın panoramik radyografisinde sağ alt 3. molar kökü komşuluğunda asimetri yaratmayan 1.5 cm çapında homojen radyoopak bir kitle izlenmektedir. Bu lezyonun Osteoskleroz (Enostoz) yerine Osteoma lehine yorumlanmasını sağlayan en önemli takip/klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Lezyonun büyüme-gelişim dönemi tamamlandıktan sonra bile belirgin boyut artışı ve ekspansiyon yapabilmesi
Açıklama: Osteoskleroz (enostoz) durağandır (statiktir); kemik boyutları yerine oturduktan sonra ekspansiyon yapmaz ve devasa boyutlara ulaşmaz. Oysa Osteoma gerçek bir iyi huylu tümördür; yetişkinlikte dahi büyümeye devam edebilir ve çenelerde deformite (ekspansiyon) yapacak düzeye gelebilir. Enostozda etrafta kapsül de olmaz, bu ikisini klinik davranış dinamikleri (büyüme-ekspansiyon) ayırır.

**Soru 2 (ID: dc53e52f-a02d-43f6-8188-6204b9c9b1df)**
Soru Kökü: 35 yaşındaki kadın hastanın alt birinci molar dişinin apikalinde iyi sınırlı homojen bir radyopasite izlenmektedir. İlgili diş çürüksüz, canlı ve semptomsuzdur. Radyopasitenin periapikal sklerozan osteit yerine bir enostoz (kemik adacığı) olduğuna karar vermede en kritik radyografik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Apikal periodontal ligament aralığında iltihabi bir genişlemenin bulunmaması
Açıklama: Periapikal sklerozan osteit, bir enflamasyon kaynağına (çürük, pulpa nekrozu) reaktif olarak gelişen ve apikal periodontal ligament aralığında tipik genişlemeye neden olan bir kemik reaksiyonudur. Enostozlarda ise PDL tamamen intakt ve normal genişliktedir; enflamasyon emaresi barındırmazlar. Her iki lezyon da radyolüsent kapsül içermez, bu da sementoblastomadan ayrılmalarını sağlar.

---

### ÇİFT 11 (Benzerlik: 0.75)

**Soru 1 (ID: d8cd7b66-23f2-4814-aa54-8af9a9952960)**
Soru Kökü: Mandibular kanal içinde genişlemeye neden olan radyolüsent bir lezyonun ayırıcı tanısında kranial BT görüntülemesi isteniyor. Görüntülemede çok düşük atenüasyonlu (attenuation) ve fokal karakterde bir lezyon tespit ediliyor. Enfeksiyon bulgusu olmayan bu hastada intravenöz kontrast madde uygulanmasına rağmen lezyonda hiçbir kontrastlanma izlenmiyor. Bu klinik ve radyolojik bulgular ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Lenfatik malformasyon
Açıklama: Lenfatik malformasyonlar kan akımı içermeyen, lenf sıvısıyla dolu kistik yapılar olduklarından BT'de düşük atenüasyon gösterirler ve enfekte olmadıkları sürece intravenöz kontrast madde tutulumu (enhancement) göstermezler. Santral hemanjiyom ve A-V fistüller yüksek kan akımı nedeniyle kontrastlanma gösterirken, venöz malformasyonlarda yavaş akıma bağlı kalsifiye flebolitler izlenir. Bu ayrım vasküler tümör ile lenfatik lezyonun tedavisindeki farklılıklar açısından kritiktir.

**Soru 2 (ID: e93dff6c-f096-4f23-867a-ab71ce8b372f)**
Soru Kökü: Mandibular kanalın seyri boyunca genişleme ve hem litik hem sklerotik alanlar barındıran multiloküler radyolüsensi izlenen hastanın ayırıcı tanısı yapılmaktadır. Hastanın yumuşak dokuya taşan komponentlerinde yuvarlak formlu, lamine kalsifikasyonlar tespit edilmiştir. İntravenöz kontrast incelemede düzensiz ve yavaş birikim izlenmiştir. Belirtilen bu 'kalsifiye yapıların' varlığı aşağıdaki patolojilerden hangisinin tanısını diğerlerinden daha spesifik olarak doğrular?
Doğru Şık (C): Venöz malformasyon
Açıklama: Vasküler lezyonlarda yavaş kan akımına (staz) bağlı olarak lümen içerisinde kalsiyum tuzlarının birikmesiyle oluşan organize lamine kalsifikasyonlara 'flebolit' denir ve bunlar tipik olarak venöz malformasyonlar ile kapiller hemanjiomların yumuşak doku komponentlerinde görülür. Lenfatik malformasyonlarda kan akımı veya staz kalsifikasyonu olmaz, odontojenik kist/tümörlerde ise lümen içi kalsifiye trombüs gelişimi mümkün değildir.

---

### ÇİFT 12 (Benzerlik: 0.75)

**Soru 1 (ID: dc53e52f-a02d-43f6-8188-6204b9c9b1df)**
Soru Kökü: 35 yaşındaki kadın hastanın alt birinci molar dişinin apikalinde iyi sınırlı homojen bir radyopasite izlenmektedir. İlgili diş çürüksüz, canlı ve semptomsuzdur. Radyopasitenin periapikal sklerozan osteit yerine bir enostoz (kemik adacığı) olduğuna karar vermede en kritik radyografik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Apikal periodontal ligament aralığında iltihabi bir genişlemenin bulunmaması
Açıklama: Periapikal sklerozan osteit, bir enflamasyon kaynağına (çürük, pulpa nekrozu) reaktif olarak gelişen ve apikal periodontal ligament aralığında tipik genişlemeye neden olan bir kemik reaksiyonudur. Enostozlarda ise PDL tamamen intakt ve normal genişliktedir; enflamasyon emaresi barındırmazlar. Her iki lezyon da radyolüsent kapsül içermez, bu da sementoblastomadan ayrılmalarını sağlar.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 13 (Benzerlik: 0.75)

**Soru 1 (ID: 2e69e995-d468-4dfa-b69a-37e6ec1660ec)**
Soru Kökü: Ailesel adenomatöz polipozis tablosunu da içeren Gardner Sendromu tanılı bir hastada, dental ve kraniofasiyal bölgelerdeki lezyonların erken teşhisi hayati önem taşır. Bu sendromda çene kemiklerinde multipl osteomalar teşhis edildiğinde hastanın derhal hangi hayatı tehdit eden sistemik komplikasyon açısından konsülte edilmesi gerekir?
Doğru Şık (C): Kolon kanserine dönüşebilecek multipl intestinal polipler
Açıklama: Gardner Sendromu, APC genindeki mutasyon sonucu gelişen, multipl osteomalar, desmoid tümörler, epidermoid kistler ve bağırsaklarda (özellikle kolon) yüzlerce adenomatöz polip ile seyreden bir sendromdur. Bu poliplerin %100'e yakın oranda kolon kanserine (adenokarsinom) dönüşme riski vardır. Osteomalar bağırsak poliplerinden daha önce ortaya çıktığı için diş hekiminin erken tanısı hayat kurtarıcıdır.

**Soru 2 (ID: d1293daf-b782-42f5-bdfc-ef0af496ee93)**
Soru Kökü: APC (Adenomatöz polipozis koli) gen mutasyonunun neden olduğu Gardner sendromunda, hastanın erken teşhis ve hayat kurtarıcı tedavisi için baş-boyun radyografilerinde tespit edilebilen bulgular aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Multipl osteomalar ve multipl dens kemik adaları
Açıklama: Gardner sendromu dental/radyografik olarak multipl osteomalar, beş veya daha fazla dens kemik adası (enostoz), gömülü ve süpernümere dişlerle karakterizedir; bu bulgular bağırsak poliplerinden (ve kanserleşme riskinden) daha erken ortaya çıktığı için tanısal değere sahiptir. Cafe-au-lait lekeleri ve kondil deformitesi Nörofibromatozis tip 1'e ait bulgulardır.

---

### ÇİFT 14 (Benzerlik: 0.75)

**Soru 1 (ID: 755860aa-5a3d-4f61-9091-ba975d7e0850)**
Soru Kökü: Mandibular anterior bölgedeki vital dişlerin apekslerinde radyoopak odakların saptandığı bir hastada, bu durumun enostoz mu yoksa periapikal osseöz displazi (POD) mi olduğu değerlendirilmektedir. Hangi spesifik radyografik bulgu lezyonun doğrudan POD lehine yorumlanmasını sağlar?
Doğru Şık (C): Radyopak lezyonun etrafını çevreleyen ince, belirgin bir radyolüsent çerçevenin (perifer) varlığı
Açıklama: Periapikal osseöz displazi (POD) matürasyonunu tamamlarken kemik odacığının etrafında fibröz bir bağ dokusu halesi bırakır ve bu da filmlerde lezyonu çevreleyen karakteristik bir radyolüsent periferik çizgi olarak görülür. Enostozlar (kemik adacıkları) ise normal kemik trabeküllerine kesintisiz karışır ve etrafında herhangi bir kapsül görüntüsü vermez. Bu net radyolüsent çerçeve, displastik fibröz dokunun yansımasıdır.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 15 (Benzerlik: 0.75)

**Soru 1 (ID: 35d022ef-85d5-4282-9b08-0bebd79e55d1)**
Soru Kökü: Genç bir hastanın rutin radyografik incelemesinde ameloblastik fibro-odontoma teşhis edilmiştir. Bu lezyonun klinik ve radyografik tablosuyla ilgili aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (A): Lezyonun karakteristik olarak anterior maksillada kanin kronunu çevrelemesi
Açıklama: Ameloblastik fibro-odontomaların büyük çoğunluğu (%70'in üzeri) mandibulanın posterior (molar) bölgesinde izlenir. Anterior maksillada gömülü kanin kuronunu içine alan karakteristik miks kitle Adenomatoid Odontojenik Tümöre (AOT) ve kompound odontomaya aittir.

**Soru 2 (ID: 92a89548-4031-4fdd-9f72-eb3cf058f649)**
Soru Kökü: Radyografik ve klinik olarak birbirine oldukça benzeyen ameloblastik fibrom ve ameloblastoma vakalarının ayrımında klinik muayene ve yaş profilinin yanı sıra en çok dikkat edilen özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik fibromanın daha erken yaşlarda görülmesi ve ameloblastomadaki septaların daha belirgin/kalın olması
Açıklama: Ameloblastik fibrom (ort. yaş 15) ameloblastomaya (ort. yaş 40) göre belirgin olarak daha genç yaşta görülür. Radyografik olarak ameloblastomanın iç septaları, ameloblastik fibroma kıyasla çok daha belirgin ve kalındır. Diğer şıklardaki kalsifikasyonlar ve çakıl taşı görünümü AOT'ye, gece ağrısı ise osteoid osteomaya aittir.

---

### ÇİFT 16 (Benzerlik: 0.74)

**Soru 1 (ID: 283147d7-4119-476f-817f-49d8685d591f)**
Soru Kökü: Von Recklinghausen Hastalığı olarak da bilinen Nörofibromatozis tip 1 sendromu bulunan bir hastanın baş-boyun radyografik değerlendirmesinde aşağıdaki bulgulardan hangisinin izlenmesi **beklenmez**?
Doğru Şık (A): Maksiller sinüse uzanan konsantrik radyoopak osteomalar
Açıklama: Konsantrik radyoopak osteomalar, epidermal kistler ve enostozlar Gardner sendromuna özgüdür. Nörofibromatozis hastalarının bazal kafa grafilerinde kondil ve koronoid anomalileri, ramusta lateral eğrilik, mandibular foramen ve kanalda genişlemeler (Nörofibroma lokal invazyonu kaynaklı) izlenir.

**Soru 2 (ID: b4b33be5-b47c-43d9-bb17-a7b7feec1977)**
Soru Kökü: Nörofibromatozis Tip 1 (Von Recklinghausen Hastalığı) hastalarının çene ve yüz bölgesinde izlenen radyografik özellikler arasında aşağıdakilerden hangisi yer almaz?
Doğru Şık (B): Mandibula ramus ve gövdesi arasındaki açının daralması
Açıklama: Nörofibromatozis Tip 1 vakalarında mandibula ramus ve gövdesi arasındaki açı daralmaz, aksine genetik yapısal deformitelerin bir sonucu olarak 'genişler'. İnceltilmiş ramus, uzamış kondil boynu, genişlemiş mandibular foramina/kanal, artmış kanal dallanması (bifürkasyon/trifürkasyon) ve deride cafe-au-lait lekeleri bu sendromun ayrılmaz radyolojik-klinik komponentleridir.

---

### ÇİFT 17 (Benzerlik: 0.74)

**Soru 1 (ID: 18212c92-ac58-48a3-b535-272af1aa6bd2)**
Soru Kökü: Bilinen nörofibromatozis tanısı olan 14 yaşındaki hastanın alınan kraniofasiyal radyografilerinde temporomandibuler eklem (TME) bölgesini ilgilendiren spesifik anomaliler saptanmıştır. Bu hastanın ramus ve kondil kompleksinde aşağıdaki radyografik bulgulardan hangisinin görülmesi **beklenir**?
Doğru Şık (A): Kondil başında deformite ve kondil boynunun uzaması
Açıklama: Nörofibromatozis, çene kemiklerinde displastik anormalliklere yol açar. Kondil başında deformite, kondil boynunun belirgin şekilde uzaması, ramusta lateral eğrilik ve incelme, koronoid çentikte genişleme karakteristik radyolojik bulgulardır. Osteofit oluşumu osteoartrite, tam ankiloz ciddi travma/enfeksiyona daha çok uyan bulgulardır.

**Soru 2 (ID: b4b33be5-b47c-43d9-bb17-a7b7feec1977)**
Soru Kökü: Nörofibromatozis Tip 1 (Von Recklinghausen Hastalığı) hastalarının çene ve yüz bölgesinde izlenen radyografik özellikler arasında aşağıdakilerden hangisi yer almaz?
Doğru Şık (B): Mandibula ramus ve gövdesi arasındaki açının daralması
Açıklama: Nörofibromatozis Tip 1 vakalarında mandibula ramus ve gövdesi arasındaki açı daralmaz, aksine genetik yapısal deformitelerin bir sonucu olarak 'genişler'. İnceltilmiş ramus, uzamış kondil boynu, genişlemiş mandibular foramina/kanal, artmış kanal dallanması (bifürkasyon/trifürkasyon) ve deride cafe-au-lait lekeleri bu sendromun ayrılmaz radyolojik-klinik komponentleridir.

---

### ÇİFT 18 (Benzerlik: 0.74)

**Soru 1 (ID: 2fff2f19-7bef-4b0e-ae40-3ad422bd4492)**
Soru Kökü: 28 yaşındaki erkek hasta alt çenesinin iç kısmında dilini rahatsız eden çıkıntılar şikayetiyle başvurmuştur. İntraoral muayenede, mandibulanın lingual yüzeyinde mylohyoid çizginin hemen üzerinde ve premolar dişler hizasında, üzeri intakt mukoza ile örtülü, sert nodüler yapılar izlenmiştir. Tanı ve lezyonun özellikleri ile ilgili aşağıdakilerden hangisi en olasıdır?
Doğru Şık (E): %90'ın üzerinde bilateral olarak izlenen torus mandibularis vakasıdır.
Açıklama: Torus mandibularis vakalarının karakteristik özelliği, %90'ın üzerindeki devasa bir oranla bilateral (iki taraflı) ortaya çıkmasıdır. Torus palatinusun aksine bu durum genç erişkin erkeklerde daha yüksek oranda saptanır. Lezyonlar diş canlılığını etkileyen osteosklerotik endodontik lezyonlardan farklı olarak ekstrinsik bir büyüme sergiler.

**Soru 2 (ID: dab782f2-f59a-4cfd-86cf-426d25fea03d)**
Soru Kökü: İntraoral muayenede alt çene lingual yüzünde, mylohyoid çizginin hemen üzerinde ve premolar bölgesinde yerleşmiş, normal mukozayla örtülü bilateral kemik sertliğinde lobüler nodüller izlenmektedir. Rutin ön bölge periapikal radyograflarında kökler üzerine süperpoze radyopasiteler olarak görüntü veren bu tablo aşağıdakilerden hangisidir?
Doğru Şık (C): Torus mandibularis
Açıklama: Torus mandibularis tipik olarak mylohyoid çizgi üzerinde, premolar bölgesinde ve %90 oranında bilateral olarak gelişen lingual kemik hiperplazileridir. Periapikal filmlerde köklere süperpoze olan homojen radyopasiteler şeklinde izlenirler. Bukkal ekzostozlar alveolün fasiyal (dış) tarafında yer alır.

---

### ÇİFT 19 (Benzerlik: 0.74)

**Soru 1 (ID: 690f0545-77c4-4afb-bed3-88295e31dbd5)**
Soru Kökü: Odontojenik Miksoma (Miksofibroma) vakalarında cerrahi rezeksiyon sonrası %25 gibi yüksek bir rekürrens oranının görülmesinin primer fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Tümörün kapsülsüz olması ve jelöz miksoid yapısının trabeküler kemik iliği boşluklarına fark edilmeden infiltre olması
Açıklama: Odontojenik miksomaların en kritik cerrahi problemi iyi tanımlanmış bir kapsüllerinin olmamasıdır. Jelöz (miksoid) kıvamdaki tümör dokusu komşu süngerimsi kemiğin medüller (trabeküler) boşluklarına paketler halinde yayılarak infiltre olur, bu da basit küretajla tümörün tamamen temizlenmesini neredeyse imkansız hale getirir ve yüksek nüks (%25) sebebidir.

**Soru 2 (ID: db27ca3c-287a-4e3d-a8e4-9921506a32c6)**
Soru Kökü: Odontojenik mikzomaların tedavisinde konservatif yaklaşımlar yerine çevre kemik doku ile birlikte genişçe rezeksiyon önerilmesinin temel histolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Tümörün kapsülsüz olup kemik iliği boşluklarına miksoid uzantılarla infiltre olması
Açıklama: Odontojenik mikzomalar kapsülsüzdür ve kemik trabekülleri arasına miksoid (jelöz) paketler halinde sızma (infiltrasyon) gösterirler. Bu durum, cerrahi küretaj sırasında artık doku kalma riskini artırdığı için basit eksizyondan ziyade geniş rezeksiyon gerektirir. Dentikel içermesi odontomaya, kalsifiye nidus osteoid osteomaya aittir.

---

### ÇİFT 20 (Benzerlik: 0.74)

**Soru 1 (ID: 35bd4e16-616d-4e18-a79a-1d37949dc4bf)**
Soru Kökü: On yaşında kız hasta, sağ alt çenede yavaş büyüyen, ağrısız şişlik ve diş boynu bölgesinde dişeti kanaması şikayetiyle başvuruyor. İlgili bölgedeki dişler soketlerine bastırıldığında 'ribaunt mobilite' gösteriyor. Radyografide kemik yüzeyinden çıkan güneş ışını (sun-ray) benzeri spiküller ile serpijinöz kanallar izleniyor. Bu hastada şüphelenilen tümöral kitle infiltre edildikten sonra enjektöre aspire edildiğinde en olası bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Yüksek basınç oluşturan arteryal kan
Açıklama: Belirtilen klinik bulgular (ribaunt mobilite, dişeti kanaması, güneş ışını görünümü, serpijinöz kanallar) santral hemanjiyom için oldukça spesifiktir. Vasküler doğası nedeniyle aspirasyon işleminde enjektörde yüksek basınç oluşturan arteryal kan görülür. İatrojenik kanama riski nedeniyle tedavisinde çok dikkatli olunmalıdır.

**Soru 2 (ID: be50517e-c9c9-4b8d-b389-29002f9f8388)**
Soru Kökü: 10 yaşında kız hasta, sağ alt çenesinde giderek büyüyen ve ara sıra dipten sızlayan bir şişlik şikayetiyle başvuruyor. İntraoral muayenede 46 numaralı dişin soketine bastırıldığında 'rebound' (geri yaylanma) tarzı mobilite gösterdiği tespit ediliyor. Radyografide mandibular kanalı içeren serpijinöz multiloküler defekt ve dış korteksi yıkarak periosttan dışarı uzanan çizgisel (sun-ray) spiküller saptanıyor. Biyopsi öncesi iğne aspirasyonu yapıldığında enjektöre yüksek basınçlı kan doluyor. Bu hastada kesin tanı konulmadan gerçekleştirilecek dikkatsiz bir diş çekiminin yol açacağı en olası majör komplikasyon ve doğru önleyici tedavi protokolü eşleşmesi aşağıdakilerden hangisidir?
Doğru Şık (A): Lethal hemoraji — İşlem öncesi embolizasyon ve eksternal karotid arter ligasyonu
Açıklama: Rebound mobilite, aspirasyonda yüksek basınçlı kan ve güneş ışını manzarası lezyonun agresif bir santral hemanjiyom ya da A-V fistül olduğunu kesinleştirir. Bu vakalarda diş doğrudan yüksek basınçlı damar yatağının tıkacı gibidir. Dişin plansız çekilmesi durdurulamayan lethal (ölümcül) hemorajiye sebep olur. Bu tablodan korunmanın tek yolu çekim öncesi vasküler yatak tıkaması (embolizasyon) ve cerrahi besleyici damar ligasyonudur (eksternal karotid arter).

---

### ÇİFT 21 (Benzerlik: 0.74)

**Soru 1 (ID: 92a89548-4031-4fdd-9f72-eb3cf058f649)**
Soru Kökü: Radyografik ve klinik olarak birbirine oldukça benzeyen ameloblastik fibrom ve ameloblastoma vakalarının ayrımında klinik muayene ve yaş profilinin yanı sıra en çok dikkat edilen özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik fibromanın daha erken yaşlarda görülmesi ve ameloblastomadaki septaların daha belirgin/kalın olması
Açıklama: Ameloblastik fibrom (ort. yaş 15) ameloblastomaya (ort. yaş 40) göre belirgin olarak daha genç yaşta görülür. Radyografik olarak ameloblastomanın iç septaları, ameloblastik fibroma kıyasla çok daha belirgin ve kalındır. Diğer şıklardaki kalsifikasyonlar ve çakıl taşı görünümü AOT'ye, gece ağrısı ise osteoid osteomaya aittir.

**Soru 2 (ID: c04c2a08-c1cb-436f-9591-4bb089968aa9)**
Soru Kökü: 15 yaşındaki bir hastada posterior mandibulada, uniloküler radyolüsent bir kitle tespit ediliyor. Ameloblastik fibroma ve ameloblastoma ayırıcı tanısında radyolojik septa morfolojisi incelenmektedir. Bu iki lezyonun ayırıcı tanısıyla ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (D): Ameloblastomadaki septalar ameloblastik fibromaya göre daha belirgin ve kalındır.
Açıklama: Ameloblastik fibroma (AF) radyolojik olarak ameloblastoma ile benzerlik gösterse de, ameloblastomadaki septalar AF'deki septalara göre daha belirgin ve kalındır. Ameloblastik fibroma tipik olarak daha erken yaşta (ortalama 15 yaş) görülürken, ameloblastoma daha ileri yaşlarda ortaya çıkar. Tenis raketi görünümü mikzomaya, granüler septa ise dev hücreli granülomaya aittir.

---

### ÇİFT 22 (Benzerlik: 0.73)

**Soru 1 (ID: afddf703-9190-44d3-8f9e-7dde2f52bb6b)**
Soru Kökü: Yirmi altı yaşında erkek hastanın alt birinci molar dişinin periapikal bölgesinde 'tekerlek teli' görünümünde radyoopak bir kitle izlenmiştir. Kitle periferal radyolüsent bir bant ile sınırlandırılmıştır ve diş ile kaynaşmıştır. Ayırıcı tanıda yer alan Periapikal Sklerozan Osteit (PSO) ile bu kitle (Benign Sementoblastom) arasındaki en temel radyolojik/histolojik fark aşağıdakilerden hangisidir?
Doğru Şık (D): PSO ve dens kemik adalarının sementoblastomadaki gibi yumuşak doku kapsülü içermemesi
Açıklama: Benign sementoblastom, kortikal kemiğin hemen altında veya periferinde radyolüsent bir bant (yumuşak doku kapsülü) içerirken; reaktif bir süreç olan Periapikal Sklerozan Osteit (PSO) ve dens kemik adaları bu tarz bir kapsül barındırmazlar. Ayrıca sementoblastom vital dişlerde izlenirken, PSO devital (inflamatuar) diş apekstlerinde gelişir.

**Soru 2 (ID: dc53e52f-a02d-43f6-8188-6204b9c9b1df)**
Soru Kökü: 35 yaşındaki kadın hastanın alt birinci molar dişinin apikalinde iyi sınırlı homojen bir radyopasite izlenmektedir. İlgili diş çürüksüz, canlı ve semptomsuzdur. Radyopasitenin periapikal sklerozan osteit yerine bir enostoz (kemik adacığı) olduğuna karar vermede en kritik radyografik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Apikal periodontal ligament aralığında iltihabi bir genişlemenin bulunmaması
Açıklama: Periapikal sklerozan osteit, bir enflamasyon kaynağına (çürük, pulpa nekrozu) reaktif olarak gelişen ve apikal periodontal ligament aralığında tipik genişlemeye neden olan bir kemik reaksiyonudur. Enostozlarda ise PDL tamamen intakt ve normal genişliktedir; enflamasyon emaresi barındırmazlar. Her iki lezyon da radyolüsent kapsül içermez, bu da sementoblastomadan ayrılmalarını sağlar.

---

### ÇİFT 23 (Benzerlik: 0.73)

**Soru 1 (ID: 18212c92-ac58-48a3-b535-272af1aa6bd2)**
Soru Kökü: Bilinen nörofibromatozis tanısı olan 14 yaşındaki hastanın alınan kraniofasiyal radyografilerinde temporomandibuler eklem (TME) bölgesini ilgilendiren spesifik anomaliler saptanmıştır. Bu hastanın ramus ve kondil kompleksinde aşağıdaki radyografik bulgulardan hangisinin görülmesi **beklenir**?
Doğru Şık (A): Kondil başında deformite ve kondil boynunun uzaması
Açıklama: Nörofibromatozis, çene kemiklerinde displastik anormalliklere yol açar. Kondil başında deformite, kondil boynunun belirgin şekilde uzaması, ramusta lateral eğrilik ve incelme, koronoid çentikte genişleme karakteristik radyolojik bulgulardır. Osteofit oluşumu osteoartrite, tam ankiloz ciddi travma/enfeksiyona daha çok uyan bulgulardır.

**Soru 2 (ID: a058e98d-252c-4a4b-b8a7-8b719369be76)**
Soru Kökü: Nörofibromatozis (Von Recklinghausen) hastalarının çene yüz bölgesi radyografik değerlendirmesinde karşılaşılan kemik displazisi bulguları arasında;
I. Ramusta lateral yönde eğrilik ve incelme
II. Ramus ile mandibula gövdesi arasında geniş açı
III. Koronoid çentikte yatay/dikey yönde büyümeler
bulgularından hangileri yer alır?
Doğru Şık (C): I, II ve III
Açıklama: Von Recklinghausen hastalığının (Nörofibromatozis) radyolojik incelemelerinde, mandibula ramus bölgesinde displastik değişimler sıktır. Hastalarda koronoid çentikte (sigmoid çentik) horizontal/vertikal büyüme, ramusta dışa (lateral) doğru eğrilme ve kemikte incelme, ve ramus-gövde arasındaki angulasyonun artması (geniş açı) görülebilen klasik anomalilerdendir.

---

### ÇİFT 24 (Benzerlik: 0.73)

**Soru 1 (ID: 46624a9f-ddc0-44f7-a440-a091ed463bce)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt birinci molar diş bölgesinde ağrı şikayetiyle başvuruyor; ağrının antienflamatuar ilaçlarla belirgin şekilde azaldığını belirtiyor. Radyografide, klinik olarak vital olan ilgili dişin köküne yapışık, dış korteksi radyoopak, iyi sınırlı ve etrafı radyolusent bir bantla çevrili 'tekerlek teli' görünümlü kitle izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Benign sementoblastom
Açıklama: Benign sementoblastom sıklıkla genç erişkinlerde mandibular premolar/molar vital dişlerin köküne kaynaşık, tekerlek teli (wheel-spoke) görünümünde, etrafı radyolusent kapsüllü radyoopak kitlelerdir ve NSAİİ ile azalan lokalize ağrıya neden olurlar. Periapikal sklerozan osteit yumuşak doku kapsülü içermez ve genellikle devital dişlerde görülür.

**Soru 2 (ID: afddf703-9190-44d3-8f9e-7dde2f52bb6b)**
Soru Kökü: Yirmi altı yaşında erkek hastanın alt birinci molar dişinin periapikal bölgesinde 'tekerlek teli' görünümünde radyoopak bir kitle izlenmiştir. Kitle periferal radyolüsent bir bant ile sınırlandırılmıştır ve diş ile kaynaşmıştır. Ayırıcı tanıda yer alan Periapikal Sklerozan Osteit (PSO) ile bu kitle (Benign Sementoblastom) arasındaki en temel radyolojik/histolojik fark aşağıdakilerden hangisidir?
Doğru Şık (D): PSO ve dens kemik adalarının sementoblastomadaki gibi yumuşak doku kapsülü içermemesi
Açıklama: Benign sementoblastom, kortikal kemiğin hemen altında veya periferinde radyolüsent bir bant (yumuşak doku kapsülü) içerirken; reaktif bir süreç olan Periapikal Sklerozan Osteit (PSO) ve dens kemik adaları bu tarz bir kapsül barındırmazlar. Ayrıca sementoblastom vital dişlerde izlenirken, PSO devital (inflamatuar) diş apekstlerinde gelişir.

---

### ÇİFT 25 (Benzerlik: 0.73)

**Soru 1 (ID: 000c4d4c-8692-4b8c-9c40-33b5118a4a85)**
Soru Kökü: Otuz yaşında bir hastada anterior mandibulada orta hattı geçen ekspansif bir kitle tespit ediliyor. Panoramik radyografide multiloküler kistik görünüm izlenmekle birlikte, içerisindeki septaların incecik, belirsiz ve 'granüler' yapıda olduğu saptanıyor. Bu lezyon için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Santral Dev Hücreli Granüloma
Açıklama: Anterior mandibulada orta hattı geçme eğilimi gösteren, 30'lu yaşlarda görülen ve radyografik olarak septalarının 'granüler' ve belirsiz sınırlı olmasıyla karakterize multiloküler lezyon Santral Dev Hücreli Granülom'dur. Ameloblastik fibroma ve odontojenik miksomalar daha çok posterior çenede görülürler.

**Soru 2 (ID: 6ad3e0da-679c-4ceb-bb13-66ffa6e9cb24)**
Soru Kökü: Otuz beş yaşında kadın hasta, alt dudakta aylardır süren ve yavaş yavaş artan hissizlik (parestezi) şikayetiyle başvuruyor. Radyografide, mental foramenin posteriorunda inferior alveolar kanal boyunca fusiform genişleme yapan iyi kortikal sınırlı bir radyolüsensi saptanıyor. Tümör kanal korteksini bozmamış, köklerde minör rezorpsiyon yapmıştır. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Nörilemoma (Schwannom)
Açıklama: İnferior alveolar kanaldan köken alan nörilemomalar (schwannomalar), komşu sinire baskı yaparak paresteziye yol açabilirler. Radyografide mandibular kanalda fusiform (iğ şeklinde) bir genişleme yapmaları ve kanalın genel seyrini korumaları tipiktir. Hemanjiomlar da kanalı genişletebilir ancak genellikle serpijinöz (kıvrımlı) bir yapı oluştururlar.

---

### ÇİFT 26 (Benzerlik: 0.73)

**Soru 1 (ID: 57684c1d-eb42-4380-9dcc-76faa1092b02)**
Soru Kökü: 22 yaşında kadın hastada maksiller asimetri mevcuttur. Çekilen konik ışınlı bilgisayarlı tomografide maksiller antruma doğru kemik büyümesi tespit edilmiştir. Bu bulgunun Fibröz Displazi yerine Semento-Ossifiye Fibrom lehine değerlendirilebilmesi için aşağıdaki radyolojik paternden hangisinin görülmesi beklenir?
Doğru Şık (C): Lezyonun maksiller antruma doğru, belirgin bir kapsül hattıyla daha konveks (bombeli) bir merkezden uzanım göstermesi
Açıklama: Fibröz displazi displastik bir patolojidir; kemiğin genel morfolojisini sürdürür ve maksilla lateral duvarını 'dış şekli koruyarak' antruma doğru iter. Ossifiye Fibrom ise gerçek bir tümör (neoplazm) gibi davranarak kendi merkezinden ekspansif büyür, konsantriktir ve antrumun içine doğru oldukça konveks, sınırları belirgin (kapsüllü) bir balonlaşma yapar.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 27 (Benzerlik: 0.73)

**Soru 1 (ID: cfec61a4-8dc8-4f7c-96be-ec86f8eb20bf)**
Soru Kökü: Rutin dental muayene için başvuran 15 yaşındaki asemptomatik bir hastanın panoramik radyografisinde, çenelerde yerleşim gösteren 6 adet dens kemik adası (enostoz), gömülü dişler ve her iki çene köşesinde radyoopak osteoma benzeri kitleler saptanmıştır. Bu dental bulgular saptanan hastanın medikal onkoloji veya gastroenterolojiye yönlendirilmesinde engellenmesi hedeflenen potansiyel patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): APC gen mutasyonuna bağlı malignite potansiyelli intestinal polipler
Açıklama: Beş veya daha fazla dens kemik adası (enostoz) ve multipl osteoma tablosu Gardner sendromu için çok güçlü belirtilerdir. Bu sendromda APC gen mutasyonuna bağlı kalın bağırsak polipleri bulunur ve bunlar kolon kanserine dönüşme konusunda %100'e varan yüksek riske sahiptir. Çene bulguları bağırsak bulgularından önce ortaya çıkarak hayat kurtarıcı bir erken teşhis fırsatı verir.

**Soru 2 (ID: f32ef843-bea1-4646-a56b-28cf9827ba4c)**
Soru Kökü: Yirmi yaşında bir hastada tesadüfen altı adet dens kemik adası (enostoz) saptanmış, çenelerde ayrıca iki adet süpernümerer diş tespit edilmiştir. Hekim hastayı sistemik bir sendrom açısından değerlendirmektedir. Aşağıdaki kütanöz bulgulardan hangisinin bu hastada görülmesi Gardner Sendromu şüphesini **artırır**?
Doğru Şık (E): Subkütan desmoid tümörler ve epidermoid kistler
Açıklama: Beş veya daha fazla dens kemik adası (enostoz), süpernümerer dişler ve gömülü dişler Gardner sendromunun majör dental/osseöz bulgularındandır. Bu hastalığın kütanöz (deri/yumuşak doku) lezyonları epidermoid kistler ve subkütan desmoid tümörlerdir. Cafe au lait ve nörofibromlar Nörofibromatozise aittir.

---

### ÇİFT 28 (Benzerlik: 0.72)

**Soru 1 (ID: afddf703-9190-44d3-8f9e-7dde2f52bb6b)**
Soru Kökü: Yirmi altı yaşında erkek hastanın alt birinci molar dişinin periapikal bölgesinde 'tekerlek teli' görünümünde radyoopak bir kitle izlenmiştir. Kitle periferal radyolüsent bir bant ile sınırlandırılmıştır ve diş ile kaynaşmıştır. Ayırıcı tanıda yer alan Periapikal Sklerozan Osteit (PSO) ile bu kitle (Benign Sementoblastom) arasındaki en temel radyolojik/histolojik fark aşağıdakilerden hangisidir?
Doğru Şık (D): PSO ve dens kemik adalarının sementoblastomadaki gibi yumuşak doku kapsülü içermemesi
Açıklama: Benign sementoblastom, kortikal kemiğin hemen altında veya periferinde radyolüsent bir bant (yumuşak doku kapsülü) içerirken; reaktif bir süreç olan Periapikal Sklerozan Osteit (PSO) ve dens kemik adaları bu tarz bir kapsül barındırmazlar. Ayrıca sementoblastom vital dişlerde izlenirken, PSO devital (inflamatuar) diş apekstlerinde gelişir.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 29 (Benzerlik: 0.72)

**Soru 1 (ID: 6f6bd325-92f3-4ff0-8b33-cea38a42fbd4)**
Soru Kökü: 42 yaşında kadın hastanın panoramik radyografisinde sağ alt 3. molar kökü komşuluğunda asimetri yaratmayan 1.5 cm çapında homojen radyoopak bir kitle izlenmektedir. Bu lezyonun Osteoskleroz (Enostoz) yerine Osteoma lehine yorumlanmasını sağlayan en önemli takip/klinik bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Lezyonun büyüme-gelişim dönemi tamamlandıktan sonra bile belirgin boyut artışı ve ekspansiyon yapabilmesi
Açıklama: Osteoskleroz (enostoz) durağandır (statiktir); kemik boyutları yerine oturduktan sonra ekspansiyon yapmaz ve devasa boyutlara ulaşmaz. Oysa Osteoma gerçek bir iyi huylu tümördür; yetişkinlikte dahi büyümeye devam edebilir ve çenelerde deformite (ekspansiyon) yapacak düzeye gelebilir. Enostozda etrafta kapsül de olmaz, bu ikisini klinik davranış dinamikleri (büyüme-ekspansiyon) ayırır.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 30 (Benzerlik: 0.72)

**Soru 1 (ID: 0e2f4970-39f4-4da0-b28f-4b0def5c76ec)**
Soru Kökü: Çene lezyonlarının radyografik septa özelliklerinin eşleştirilmesiyle ilgili olarak;
I. Ameloblastoma – Kavisli, kalın ve 'sabun köpüğü' benzeri septa
II. Odontojenik Miksom – Düz, ince ve 'merdiven basamağı/tenis raketi' benzeri septa
III. Desmoplastik Fibrom – Çok kalın, düz ve açılı septa
IV. Santral Dev Hücreli Granülom – Çok keskin hatlı, sklerotik ağsı septa
eşleştirmelerinden hangileri doğrudur?
Doğru Şık (D): I, II ve III
Açıklama: Ameloblastoma, miksom ve desmoplastik fibroma için verilen septa morfolojileri doğrudur ve ayırıcı tanıda hayati öneme sahiptir. IV. öncül yanlıştır, çünkü santral dev hücreli granülomanın septaları ince, silik ve karakteristik olarak 'granüler' veya 'belirsiz sınırlı'dır; çok keskin/sklerotik değildir.

**Soru 2 (ID: 49ae8997-df8c-4cb4-8ec4-230636caf044)**
Soru Kökü: Çenelerde görülen desmoplastik fibroma ile ilgili olarak;
I. Malign tümörlere benzer şekilde invaziv karakter gösterir.
II. Radyografik septaları oldukça ince, düz ve tenis raketini andırır.
III. Yüksek lokal rekürrens oranı nedeniyle çevre kemik ile birlikte rezeksiyon gerektirir.
IV. Dış korteksi yıkarak çevre yumuşak dokuya girme eğilimindedir.
ifadelerinden hangileri doğrudur?
Doğru Şık (D): I, III ve IV
Açıklama: Desmoplastik fibroma çenelerde görülen oldukça agresif, korteksi perfore ederek yumuşak dokuya taşan ve rezeksiyon gerektiren benign bir patolojidir. Ancak II. öncül yanlıştır; ince ve tenis raketi benzeri septalar odontojenik miksoma'ya aittir. Desmoplastik fibromanın septaları çok kalın, düz ve açılıdır.

---

### ÇİFT 31 (Benzerlik: 0.72)

**Soru 1 (ID: 000c4d4c-8692-4b8c-9c40-33b5118a4a85)**
Soru Kökü: Otuz yaşında bir hastada anterior mandibulada orta hattı geçen ekspansif bir kitle tespit ediliyor. Panoramik radyografide multiloküler kistik görünüm izlenmekle birlikte, içerisindeki septaların incecik, belirsiz ve 'granüler' yapıda olduğu saptanıyor. Bu lezyon için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Santral Dev Hücreli Granüloma
Açıklama: Anterior mandibulada orta hattı geçme eğilimi gösteren, 30'lu yaşlarda görülen ve radyografik olarak septalarının 'granüler' ve belirsiz sınırlı olmasıyla karakterize multiloküler lezyon Santral Dev Hücreli Granülom'dur. Ameloblastik fibroma ve odontojenik miksomalar daha çok posterior çenede görülürler.

**Soru 2 (ID: f5778882-24b2-46fa-981f-dd5e0775edcf)**
Soru Kökü: 42 yaşındaki erkek hasta, alt çene sağ tarafında yavaş büyüyen, ağrısız ve fasiyal asimetriye neden olan bir şişlik nedeniyle kliniğe başvurmuştur. Muayenede o bölgedeki dişlerde mobilite saptanmıştır. Hastanın yaşı, cinsiyeti ve lezyonun davranışı göz önüne alındığında, açık ara en yaygın klinik bulgu veren odontojenik tümör olması sebebiyle ilk düşünülmesi gereken kemik patolojisi tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Ameloblastoma
Açıklama: Ameloblastomalar ortalama 40 yaş civarında ve erkeklerde nispeten daha sık saptanan, fasiyal asimetri, diş mobilitesi ve yavaş büyüme profili ile klinikte semptom veren en yaygın odontojenik tümördür. Adenomatoid odontojenik tümörler (AOT) genellikle kadınlarda ve daha genç yaş grubunda (ikinci dekad) görülürken, sementoblastoma diş köküne yapışık radyoopak kitle oluşturur. Hastanın yaş aralığı ve progresif ekspansiyon bulguları ameloblastomayı destekler.

---

### ÇİFT 32 (Benzerlik: 0.72)

**Soru 1 (ID: 2e69e995-d468-4dfa-b69a-37e6ec1660ec)**
Soru Kökü: Ailesel adenomatöz polipozis tablosunu da içeren Gardner Sendromu tanılı bir hastada, dental ve kraniofasiyal bölgelerdeki lezyonların erken teşhisi hayati önem taşır. Bu sendromda çene kemiklerinde multipl osteomalar teşhis edildiğinde hastanın derhal hangi hayatı tehdit eden sistemik komplikasyon açısından konsülte edilmesi gerekir?
Doğru Şık (C): Kolon kanserine dönüşebilecek multipl intestinal polipler
Açıklama: Gardner Sendromu, APC genindeki mutasyon sonucu gelişen, multipl osteomalar, desmoid tümörler, epidermoid kistler ve bağırsaklarda (özellikle kolon) yüzlerce adenomatöz polip ile seyreden bir sendromdur. Bu poliplerin %100'e yakın oranda kolon kanserine (adenokarsinom) dönüşme riski vardır. Osteomalar bağırsak poliplerinden daha önce ortaya çıktığı için diş hekiminin erken tanısı hayat kurtarıcıdır.

**Soru 2 (ID: cfec61a4-8dc8-4f7c-96be-ec86f8eb20bf)**
Soru Kökü: Rutin dental muayene için başvuran 15 yaşındaki asemptomatik bir hastanın panoramik radyografisinde, çenelerde yerleşim gösteren 6 adet dens kemik adası (enostoz), gömülü dişler ve her iki çene köşesinde radyoopak osteoma benzeri kitleler saptanmıştır. Bu dental bulgular saptanan hastanın medikal onkoloji veya gastroenterolojiye yönlendirilmesinde engellenmesi hedeflenen potansiyel patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): APC gen mutasyonuna bağlı malignite potansiyelli intestinal polipler
Açıklama: Beş veya daha fazla dens kemik adası (enostoz) ve multipl osteoma tablosu Gardner sendromu için çok güçlü belirtilerdir. Bu sendromda APC gen mutasyonuna bağlı kalın bağırsak polipleri bulunur ve bunlar kolon kanserine dönüşme konusunda %100'e varan yüksek riske sahiptir. Çene bulguları bağırsak bulgularından önce ortaya çıkarak hayat kurtarıcı bir erken teşhis fırsatı verir.

---

### ÇİFT 33 (Benzerlik: 0.72)

**Soru 1 (ID: 35d022ef-85d5-4282-9b08-0bebd79e55d1)**
Soru Kökü: Genç bir hastanın rutin radyografik incelemesinde ameloblastik fibro-odontoma teşhis edilmiştir. Bu lezyonun klinik ve radyografik tablosuyla ilgili aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (A): Lezyonun karakteristik olarak anterior maksillada kanin kronunu çevrelemesi
Açıklama: Ameloblastik fibro-odontomaların büyük çoğunluğu (%70'in üzeri) mandibulanın posterior (molar) bölgesinde izlenir. Anterior maksillada gömülü kanin kuronunu içine alan karakteristik miks kitle Adenomatoid Odontojenik Tümöre (AOT) ve kompound odontomaya aittir.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 34 (Benzerlik: 0.72)

**Soru 1 (ID: 18212c92-ac58-48a3-b535-272af1aa6bd2)**
Soru Kökü: Bilinen nörofibromatozis tanısı olan 14 yaşındaki hastanın alınan kraniofasiyal radyografilerinde temporomandibuler eklem (TME) bölgesini ilgilendiren spesifik anomaliler saptanmıştır. Bu hastanın ramus ve kondil kompleksinde aşağıdaki radyografik bulgulardan hangisinin görülmesi **beklenir**?
Doğru Şık (A): Kondil başında deformite ve kondil boynunun uzaması
Açıklama: Nörofibromatozis, çene kemiklerinde displastik anormalliklere yol açar. Kondil başında deformite, kondil boynunun belirgin şekilde uzaması, ramusta lateral eğrilik ve incelme, koronoid çentikte genişleme karakteristik radyolojik bulgulardır. Osteofit oluşumu osteoartrite, tam ankiloz ciddi travma/enfeksiyona daha çok uyan bulgulardır.

**Soru 2 (ID: db5195ec-6f75-430c-a644-6c9148eceec3)**
Soru Kökü: On yedi yaşında bir hastada, alt çenede asimetri ve ağrı şikayeti bulunmamasına rağmen çekilen radyografide mandibular kanalda dallanma insidansında artış ve mental foramende genişleme tespit ediliyor. Cilt muayenesinde multiple café au lait lekeleri saptanıyor. Bu lezyonların sebep olabileceği en olası dental komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Molar dişlerin sürmesinin engellenmesi
Açıklama: Verilen klinik bulgular (mental foramen/kanal genişlemesi, artmış dallanma, café au lait lekeleri) Nörofibromatozisi işaret eder. Nörofibromatozise bağlı displastik kemik değişiklikleri ve dış kortekste oluşan eroziv değişiklikler, özellikle molar dişlerin sürmesinde engellemelere (gömülü kalmalarına) neden olabilir. Yaygın ankiloz veya bilateral dentijeröz kist bu sendromun beklenen komplikasyonlarından değildir.

---

### ÇİFT 35 (Benzerlik: 0.72)

**Soru 1 (ID: 0319cc8e-45fb-4617-93a8-a4f377f3970c)**
Soru Kökü: Çenelerde radyolojik ve biyopsi verileri ışığında 'osteoid osteoma' tanısı almış bir hastada aşağıdaki radyografik ve patolojik bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (C): Lezyonun agresif büyümesine bağlı olarak ilgili kemiğin korteksinde dekstrüksiyon (erozyon) ve komşu yumuşak dokuya invazyon görülmesi
Açıklama: Osteoid osteoma tamamen benign seyirli, kemik sınırlarını aşmayan ve dış korteksi aşındırıp (erozyon/destrüksiyon) yumuşak dokuya invaze olmayan bir lezyondur. Aksine, ürettiği medyatörler ile komşu periostu uyararak kortekste destrüksiyon yerine apozisyonel kemik yapımı ile 'kalınlaşmaya' sebep olur. Yumuşak doku invazyonu ve kortikal destrüksiyon bulguları osteosarkom gibi malign mezenkimal tümörlere aittir.

**Soru 2 (ID: 037e6413-49d3-4fbf-9388-4aa2d06d25c9)**
Soru Kökü: Histopatolojik ve radyografik olarak birbirine benzeyen osteoblastom ve osteoid osteoma arasındaki majör klinik ayırıcı tanı kriteri aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoblastomun osteoid osteoma kadar ağrılı olmaması ve ağrısının salisilatlar ile belirgin şekilde hafiflememesi
Açıklama: Osteoid osteomalar şiddetli (gece artan) kemik ağrısı ile karakterizedir ve bu ağrı spesifik olarak NSAİİ (salisilat) ile belirgin şekilde hafifler. Osteoblastom daha agresif bir büyüme potansiyeline sahip olmakla birlikte, ağrısı daha hafiftir ve salisilat türevleriyle rahatlamaz.

---

### ÇİFT 36 (Benzerlik: 0.72)

**Soru 1 (ID: d1293daf-b782-42f5-bdfc-ef0af496ee93)**
Soru Kökü: APC (Adenomatöz polipozis koli) gen mutasyonunun neden olduğu Gardner sendromunda, hastanın erken teşhis ve hayat kurtarıcı tedavisi için baş-boyun radyografilerinde tespit edilebilen bulgular aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Multipl osteomalar ve multipl dens kemik adaları
Açıklama: Gardner sendromu dental/radyografik olarak multipl osteomalar, beş veya daha fazla dens kemik adası (enostoz), gömülü ve süpernümere dişlerle karakterizedir; bu bulgular bağırsak poliplerinden (ve kanserleşme riskinden) daha erken ortaya çıktığı için tanısal değere sahiptir. Cafe-au-lait lekeleri ve kondil deformitesi Nörofibromatozis tip 1'e ait bulgulardır.

**Soru 2 (ID: f32ef843-bea1-4646-a56b-28cf9827ba4c)**
Soru Kökü: Yirmi yaşında bir hastada tesadüfen altı adet dens kemik adası (enostoz) saptanmış, çenelerde ayrıca iki adet süpernümerer diş tespit edilmiştir. Hekim hastayı sistemik bir sendrom açısından değerlendirmektedir. Aşağıdaki kütanöz bulgulardan hangisinin bu hastada görülmesi Gardner Sendromu şüphesini **artırır**?
Doğru Şık (E): Subkütan desmoid tümörler ve epidermoid kistler
Açıklama: Beş veya daha fazla dens kemik adası (enostoz), süpernümerer dişler ve gömülü dişler Gardner sendromunun majör dental/osseöz bulgularındandır. Bu hastalığın kütanöz (deri/yumuşak doku) lezyonları epidermoid kistler ve subkütan desmoid tümörlerdir. Cafe au lait ve nörofibromlar Nörofibromatozise aittir.

---

### ÇİFT 37 (Benzerlik: 0.71)

**Soru 1 (ID: 90441e52-3bba-4693-8266-663efe3bbd89)**
Soru Kökü: Ameloblastik fibromanın radyolojik olarak diğer multiloküler lezyonlardan ayrımıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Ameloblastik fibromdaki iç septalar, ameloblastomaya göre daha ince ve belirsiz sınırlıdır.
Açıklama: Ameloblastik fibromadaki septalar ameloblastomaya göre çok daha 'belirgin ve kalındır'. Bu kalın septa yapısı, ameloblastik fibromayı klasik sabun köpüğü yapan ameloblastomdan ayırır. Granüler/ince/belirsiz septa yapısı ise Dev Hücreli Granülomun karakteristik özelliğidir.

**Soru 2 (ID: fcc7f2f7-b9f3-4a96-b67e-78ba93895793)**
Soru Kökü: Benign Sementoblastoma ile Hipersementozun radyografik olarak ayrımına dair aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (E): Hipersementozu çevreleyen periodontal aralık boşluğu, sementoblastomanın yumuşak doku kapsülünden belirgin şekilde daha kalındır.
Açıklama: Hipersementozu çevreleyen periodontal ligament aralığı oldukça ince ve homojendir. Oysa Sementoblastomayı çevreleyen radyolusent (yumuşak doku) bant ve kapsül çok daha kalın ve belirgindir. Diğer şıkların tümü (Sementoblastomda ekspansiyon, kök rezorpsiyonu olması, Periapikal osteitisin devital diş kaynaklı kapsülsüz olması) doğru ayırıcı tanı kriterleridir.

---

### ÇİFT 38 (Benzerlik: 0.71)

**Soru 1 (ID: 57684c1d-eb42-4380-9dcc-76faa1092b02)**
Soru Kökü: 22 yaşında kadın hastada maksiller asimetri mevcuttur. Çekilen konik ışınlı bilgisayarlı tomografide maksiller antruma doğru kemik büyümesi tespit edilmiştir. Bu bulgunun Fibröz Displazi yerine Semento-Ossifiye Fibrom lehine değerlendirilebilmesi için aşağıdaki radyolojik paternden hangisinin görülmesi beklenir?
Doğru Şık (C): Lezyonun maksiller antruma doğru, belirgin bir kapsül hattıyla daha konveks (bombeli) bir merkezden uzanım göstermesi
Açıklama: Fibröz displazi displastik bir patolojidir; kemiğin genel morfolojisini sürdürür ve maksilla lateral duvarını 'dış şekli koruyarak' antruma doğru iter. Ossifiye Fibrom ise gerçek bir tümör (neoplazm) gibi davranarak kendi merkezinden ekspansif büyür, konsantriktir ve antrumun içine doğru oldukça konveks, sınırları belirgin (kapsüllü) bir balonlaşma yapar.

**Soru 2 (ID: a0a4f8ea-2928-4506-8843-16838d89b777)**
Soru Kökü: Otuz yaşında kadın hastanın mandibula posterior bölgesinde, sferik ve belirgin sınırlı, etrafı ince radyolusent bir bant (kapsül) ile çevrili homojen radyoopak kitle saptanıyor. Lezyon çenede konsantrik ekspansiyon yapmış ve komşu dişleri iterek yer değiştirmiştir. Bu lezyonun Fibröz Displaziden ayrımını sağlayan en kritik radyografik özellik aşağıdakilerden hangisidir?
Doğru Şık (E): İyi sınırlı olması ve etrafında fibröz kapsülü temsil eden radyolusent bandın bulunması
Açıklama: Semento-ossifiye fibromun fibröz displaziden ayrımındaki en önemli fark sınır karakteridir. Fibröz displazi çevre kemik doku ile karışmış (sınırları belirsiz) bir buzlu cam paterni sunarken, ossifiye fibromların etrafında fibröz kapsülü temsil eden belirgin bir radyolusent bant ve kortikal sınır vardır; konsantrik büyürler.

---

### ÇİFT 39 (Benzerlik: 0.71)

**Soru 1 (ID: 92a89548-4031-4fdd-9f72-eb3cf058f649)**
Soru Kökü: Radyografik ve klinik olarak birbirine oldukça benzeyen ameloblastik fibrom ve ameloblastoma vakalarının ayrımında klinik muayene ve yaş profilinin yanı sıra en çok dikkat edilen özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik fibromanın daha erken yaşlarda görülmesi ve ameloblastomadaki septaların daha belirgin/kalın olması
Açıklama: Ameloblastik fibrom (ort. yaş 15) ameloblastomaya (ort. yaş 40) göre belirgin olarak daha genç yaşta görülür. Radyografik olarak ameloblastomanın iç septaları, ameloblastik fibroma kıyasla çok daha belirgin ve kalındır. Diğer şıklardaki kalsifikasyonlar ve çakıl taşı görünümü AOT'ye, gece ağrısı ise osteoid osteomaya aittir.

**Soru 2 (ID: 9464bc95-2c46-486c-a3ae-a25a77d31f62)**
Soru Kökü: Ameloblastomanın radyolojik ve klinik özellikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Radyografide internal yapısında mine benzeri kalsifiye radyoopak odaklar içermesi tipiktir.
Açıklama: Ameloblastoma radyografik olarak tam radyolüsentten kemik septalı (bal peteği veya sabun köpüğü) miks yapıya kadar değişebilir ancak içerisinde kalsifiye radyoopak sert doku (mine/sement) odakları barındırmaz. Kalsifiye odaklar Adenomatoid Odontojenik Tümör, Pindborg tümörü veya Odontomalar için karakteristiktir. Yumurta kabuğu etkisi, bıçak sırtı kök rezorpsiyonu ve multikistik görünüm ameloblastoma için tipik bulgulardır.

---

### ÇİFT 40 (Benzerlik: 0.71)

**Soru 1 (ID: 68178920-751c-4c67-82cb-db9672aef847)**
Soru Kökü: On altı yaşında kadın hasta, anterior maksillada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Radyografik muayenede, gömülü kanin dişin kronunu içine alan, mine-sement birleşiminin daha apikaline uzanan ve içinde çakıl taşı benzeri radyopasiteler barındıran iyi kortikal sınırlı radyolusent lezyon izleniyor. Bu klinik tablo için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Adenomatoid odontojenik tümör
Açıklama: Adenomatoid odontojenik tümör sıklıkla genç kadınlarda (yaş ortalaması 16), anterior maksillada (özellikle kanin bölgesi) ve gömülü dişle ilişkili görülür; içerisindeki kalsifikasyonlar çakıl taşına benzetilir. Dentigeröz kistten en önemli farkı, radyolüsensinin mine-sement birleşiminin apikaline (köke doğru) inebilmesidir. Kalsifiye epitelyal odontojenik tümör daha çok mandibula posterior yerleşimlidir.

**Soru 2 (ID: a5701cb6-34a2-423d-89ce-4692c8725437)**
Soru Kökü: Gömülü bir maksiller daimi kanin dişinin sürme gecikmesi nedeniyle başvuran 14 yaşındaki hastanın radyografisinde, gömülü dişin insizal kenarına komşu alanda, küçük düzensiz diş benzeri yapılar (dentikeller) saptanmıştır. Bu tablo aşağıdakilerden hangisi ile en iyi tanımlanır?
Doğru Şık (B): Kompound Odontoma
Açıklama: Kompound odontomalar, anterior maksillada sıklıkla gömülü kanin dişleriyle ilişkili olarak gelişir ve radyografik olarak multipl, küçük, düzenli diş benzeri yapılar (dentikeller) şeklinde izlenirler. Kompleks odontoma amorf bir kalsifiye doku yığını şeklinde olup daha çok posterior mandibulada izlenir.

---

### ÇİFT 41 (Benzerlik: 0.71)

**Soru 1 (ID: 90441e52-3bba-4693-8266-663efe3bbd89)**
Soru Kökü: Ameloblastik fibromanın radyolojik olarak diğer multiloküler lezyonlardan ayrımıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Ameloblastik fibromdaki iç septalar, ameloblastomaya göre daha ince ve belirsiz sınırlıdır.
Açıklama: Ameloblastik fibromadaki septalar ameloblastomaya göre çok daha 'belirgin ve kalındır'. Bu kalın septa yapısı, ameloblastik fibromayı klasik sabun köpüğü yapan ameloblastomdan ayırır. Granüler/ince/belirsiz septa yapısı ise Dev Hücreli Granülomun karakteristik özelliğidir.

**Soru 2 (ID: c04c2a08-c1cb-436f-9591-4bb089968aa9)**
Soru Kökü: 15 yaşındaki bir hastada posterior mandibulada, uniloküler radyolüsent bir kitle tespit ediliyor. Ameloblastik fibroma ve ameloblastoma ayırıcı tanısında radyolojik septa morfolojisi incelenmektedir. Bu iki lezyonun ayırıcı tanısıyla ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (D): Ameloblastomadaki septalar ameloblastik fibromaya göre daha belirgin ve kalındır.
Açıklama: Ameloblastik fibroma (AF) radyolojik olarak ameloblastoma ile benzerlik gösterse de, ameloblastomadaki septalar AF'deki septalara göre daha belirgin ve kalındır. Ameloblastik fibroma tipik olarak daha erken yaşta (ortalama 15 yaş) görülürken, ameloblastoma daha ileri yaşlarda ortaya çıkar. Tenis raketi görünümü mikzomaya, granüler septa ise dev hücreli granülomaya aittir.

---

### ÇİFT 42 (Benzerlik: 0.71)

**Soru 1 (ID: 9464bc95-2c46-486c-a3ae-a25a77d31f62)**
Soru Kökü: Ameloblastomanın radyolojik ve klinik özellikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Radyografide internal yapısında mine benzeri kalsifiye radyoopak odaklar içermesi tipiktir.
Açıklama: Ameloblastoma radyografik olarak tam radyolüsentten kemik septalı (bal peteği veya sabun köpüğü) miks yapıya kadar değişebilir ancak içerisinde kalsifiye radyoopak sert doku (mine/sement) odakları barındırmaz. Kalsifiye odaklar Adenomatoid Odontojenik Tümör, Pindborg tümörü veya Odontomalar için karakteristiktir. Yumurta kabuğu etkisi, bıçak sırtı kök rezorpsiyonu ve multikistik görünüm ameloblastoma için tipik bulgulardır.

**Soru 2 (ID: fcc7f2f7-b9f3-4a96-b67e-78ba93895793)**
Soru Kökü: Benign Sementoblastoma ile Hipersementozun radyografik olarak ayrımına dair aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (E): Hipersementozu çevreleyen periodontal aralık boşluğu, sementoblastomanın yumuşak doku kapsülünden belirgin şekilde daha kalındır.
Açıklama: Hipersementozu çevreleyen periodontal ligament aralığı oldukça ince ve homojendir. Oysa Sementoblastomayı çevreleyen radyolusent (yumuşak doku) bant ve kapsül çok daha kalın ve belirgindir. Diğer şıkların tümü (Sementoblastomda ekspansiyon, kök rezorpsiyonu olması, Periapikal osteitisin devital diş kaynaklı kapsülsüz olması) doğru ayırıcı tanı kriterleridir.

---

### ÇİFT 43 (Benzerlik: 0.71)

**Soru 1 (ID: 35d022ef-85d5-4282-9b08-0bebd79e55d1)**
Soru Kökü: Genç bir hastanın rutin radyografik incelemesinde ameloblastik fibro-odontoma teşhis edilmiştir. Bu lezyonun klinik ve radyografik tablosuyla ilgili aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (A): Lezyonun karakteristik olarak anterior maksillada kanin kronunu çevrelemesi
Açıklama: Ameloblastik fibro-odontomaların büyük çoğunluğu (%70'in üzeri) mandibulanın posterior (molar) bölgesinde izlenir. Anterior maksillada gömülü kanin kuronunu içine alan karakteristik miks kitle Adenomatoid Odontojenik Tümöre (AOT) ve kompound odontomaya aittir.

**Soru 2 (ID: 663b5481-250f-43c8-a061-58ab4a65b74d)**
Soru Kökü: Mandibula posterior bölgede radyografik olarak mikst internal yapı gösteren bir lezyonun ayırıcı tanısı yapılmaktadır. Bu lezyonun Kompleks Odontoma yerine Ameloblastik Fibro-Odontoma lehine yorumlanmasını sağlayan temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Merkezinde tek bir büyük kitle yerine çoklu, dağınık olgun küçük diş sert dokuları barındırması
Açıklama: Kompleks odontoma genellikle merkezinde bir tane büyük organize olmamış sert doku kitlesi barındırırken, ameloblastik fibro-odontomada genellikle geniş bir radyolusent zemin (fibrom komponenti) içinde çoklu dağınık, küçük kalsifikasyonlar/diş sert dokuları görülür. Ayrıca kompleks odontomaların yumuşak doku komponenti belirgin şekilde daha incedir.

---

### ÇİFT 44 (Benzerlik: 0.71)

**Soru 1 (ID: 000c4d4c-8692-4b8c-9c40-33b5118a4a85)**
Soru Kökü: Otuz yaşında bir hastada anterior mandibulada orta hattı geçen ekspansif bir kitle tespit ediliyor. Panoramik radyografide multiloküler kistik görünüm izlenmekle birlikte, içerisindeki septaların incecik, belirsiz ve 'granüler' yapıda olduğu saptanıyor. Bu lezyon için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Santral Dev Hücreli Granüloma
Açıklama: Anterior mandibulada orta hattı geçme eğilimi gösteren, 30'lu yaşlarda görülen ve radyografik olarak septalarının 'granüler' ve belirsiz sınırlı olmasıyla karakterize multiloküler lezyon Santral Dev Hücreli Granülom'dur. Ameloblastik fibroma ve odontojenik miksomalar daha çok posterior çenede görülürler.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 45 (Benzerlik: 0.71)

**Soru 1 (ID: 1edafac3-1860-47af-8925-6245d9c78c6a)**
Soru Kökü: Çene kemiklerinde santral olarak gelişebilen ve yalnızca odontojenik ektomezenşim kaynaklı olduğu bilinen benign tümörler bulunmaktadır. Aşağıdakilerden hangisi bu saf ektomezenşimal kökenli tümörlere radyografik bir örnektir?
Doğru Şık (A): Odontojenik miksoma
Açıklama: Odontojenik miksoma, gelişmekte olan dişin papillasını veya dental folikülünü andıran, saf ektomezenşimal yapıda ve düzensiz septalara (tenis raketi) sahip olan bir tümördür. Ameloblastik fibroma ve odontomalar miks yapıda iken, Pindborg ve ameloblastomalar epitel kaynaklıdır. Ektomezenşimal tümörlerin invaziv özellikleri, kemik iliğine mikroskobik düzeyde sızmalarından kaynaklanır.

**Soru 2 (ID: bb4f0664-dae0-47a6-a329-38e8180d6299)**
Soru Kökü: Odontojenik tümörlerin Dünya Sağlık Örgütü sınıflandırması temel alındığında, aşağıdaki tümörlerden hangisi yalnızca 'epitel kaynaklı' odontojenik tümörler başlığı altında değerlendirilir?
Doğru Şık (D): Ameloblastoma
Açıklama: Ameloblastoma histopatolojik ve embriyolojik olarak tamamen odontojenik epitelden köken alan, ektomezenşim ihtiva etmeyen bir benign tümördür. Sementoblastoma, miksom ve fibrom saf ektomezenşimal kaynaklı iken, odontoma her iki germ katmanını da barındıran miks (karma) doku tümörüdür. Ameloblastoma bu grubun açık ara en klinik semptom veren epitelial üyesidir.

---

### ÇİFT 46 (Benzerlik: 0.71)

**Soru 1 (ID: 000c4d4c-8692-4b8c-9c40-33b5118a4a85)**
Soru Kökü: Otuz yaşında bir hastada anterior mandibulada orta hattı geçen ekspansif bir kitle tespit ediliyor. Panoramik radyografide multiloküler kistik görünüm izlenmekle birlikte, içerisindeki septaların incecik, belirsiz ve 'granüler' yapıda olduğu saptanıyor. Bu lezyon için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Santral Dev Hücreli Granüloma
Açıklama: Anterior mandibulada orta hattı geçme eğilimi gösteren, 30'lu yaşlarda görülen ve radyografik olarak septalarının 'granüler' ve belirsiz sınırlı olmasıyla karakterize multiloküler lezyon Santral Dev Hücreli Granülom'dur. Ameloblastik fibroma ve odontojenik miksomalar daha çok posterior çenede görülürler.

**Soru 2 (ID: 46624a9f-ddc0-44f7-a440-a091ed463bce)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt birinci molar diş bölgesinde ağrı şikayetiyle başvuruyor; ağrının antienflamatuar ilaçlarla belirgin şekilde azaldığını belirtiyor. Radyografide, klinik olarak vital olan ilgili dişin köküne yapışık, dış korteksi radyoopak, iyi sınırlı ve etrafı radyolusent bir bantla çevrili 'tekerlek teli' görünümlü kitle izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Benign sementoblastom
Açıklama: Benign sementoblastom sıklıkla genç erişkinlerde mandibular premolar/molar vital dişlerin köküne kaynaşık, tekerlek teli (wheel-spoke) görünümünde, etrafı radyolusent kapsüllü radyoopak kitlelerdir ve NSAİİ ile azalan lokalize ağrıya neden olurlar. Periapikal sklerozan osteit yumuşak doku kapsülü içermez ve genellikle devital dişlerde görülür.

---

### ÇİFT 47 (Benzerlik: 0.71)

**Soru 1 (ID: 7b29cebc-23ce-49ba-965e-04287d7c826b)**
Soru Kökü: Kalsifiye Epitelyal Odontojenik Tümör (KEOT / Pindborg Tümörü) radyolojik olarak diğer odontojenik kist ve tümörlerle karışabilir. Bir radyolüsent lezyonu dentigeröz kist veya ameloblastomadan ziyade KEOT lehine yorumlatacak en karakteristik radyografik internal bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Gömülü dişin kronuna çok yakın komşuluktaki radyoopasiteler (kalsifikasyonlar)
Açıklama: KEOT'un (Pindborg Tümörü) en karakteristik diagnostik bulgusu, kist benzeri radyolüsent alanın içerisinde, özellikle gömülü diş kronuna yakın lokalize olan radyoopak kalsifikasyon odaklarıdır (Driven snow / kar fırtınası görünümü). Bal peteği veya bıçak sırtı kök rezorpsiyonu daha çok ameloblastoma lehinedir. Güneş ışını paterni ise hemanjiom (veya osteosarkom) bulgusudur.

**Soru 2 (ID: da4cf4a5-a34e-467b-b101-a23061c5e0ac)**
Soru Kökü: Kırk iki yaşında erkek hastanın radyografisinde, gömülü sağ alt ikinci molar dişin kronu ile ilişkili, sınırları kist benzeri olan ancak iç kısmında radyoopak odaklar barındıran asimetrik radyolüsensi izlenmektedir. İlgili dişte herhangi bir kök rezorpsiyonu yoktur. Görüntünün perikoronal radyolüsent yapısı nedeniyle dentigeröz kist ile Pindborg tümörü (KEOT) arasında ayırıcı tanı yapılmaktadır. Pindborg tümörünü destekleyen en güçlü bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Gömülü 2. molar çevresinde görülmesi ve Pindborg'un kök rezorpsiyonuna çok nadiren neden olması
Açıklama: Pindborg tümörü (KEOT) %52 oranında gömülü diş ile, sıklıkla 1. ve 2. molarlar ile ilgilidir (dentigeröz kist ise çok daha sık 3. molar ile görülür). Ayrıca KEOT radyografik olarak kök rezorpsiyonu yapmaya nadiren eğilimlidir; bu durum onu dentigeröz kist veya solid ameloblastomdan ayıran çok kritik bir özelliktir.

---

### ÇİFT 48 (Benzerlik: 0.70)

**Soru 1 (ID: 68178920-751c-4c67-82cb-db9672aef847)**
Soru Kökü: On altı yaşında kadın hasta, anterior maksillada ağrısız şişlik şikayetiyle kliniğe başvuruyor. Radyografik muayenede, gömülü kanin dişin kronunu içine alan, mine-sement birleşiminin daha apikaline uzanan ve içinde çakıl taşı benzeri radyopasiteler barındıran iyi kortikal sınırlı radyolusent lezyon izleniyor. Bu klinik tablo için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Adenomatoid odontojenik tümör
Açıklama: Adenomatoid odontojenik tümör sıklıkla genç kadınlarda (yaş ortalaması 16), anterior maksillada (özellikle kanin bölgesi) ve gömülü dişle ilişkili görülür; içerisindeki kalsifikasyonlar çakıl taşına benzetilir. Dentigeröz kistten en önemli farkı, radyolüsensinin mine-sement birleşiminin apikaline (köke doğru) inebilmesidir. Kalsifiye epitelyal odontojenik tümör daha çok mandibula posterior yerleşimlidir.

**Soru 2 (ID: f5778882-24b2-46fa-981f-dd5e0775edcf)**
Soru Kökü: 42 yaşındaki erkek hasta, alt çene sağ tarafında yavaş büyüyen, ağrısız ve fasiyal asimetriye neden olan bir şişlik nedeniyle kliniğe başvurmuştur. Muayenede o bölgedeki dişlerde mobilite saptanmıştır. Hastanın yaşı, cinsiyeti ve lezyonun davranışı göz önüne alındığında, açık ara en yaygın klinik bulgu veren odontojenik tümör olması sebebiyle ilk düşünülmesi gereken kemik patolojisi tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Ameloblastoma
Açıklama: Ameloblastomalar ortalama 40 yaş civarında ve erkeklerde nispeten daha sık saptanan, fasiyal asimetri, diş mobilitesi ve yavaş büyüme profili ile klinikte semptom veren en yaygın odontojenik tümördür. Adenomatoid odontojenik tümörler (AOT) genellikle kadınlarda ve daha genç yaş grubunda (ikinci dekad) görülürken, sementoblastoma diş köküne yapışık radyoopak kitle oluşturur. Hastanın yaş aralığı ve progresif ekspansiyon bulguları ameloblastomayı destekler.

---

### ÇİFT 49 (Benzerlik: 0.70)

**Soru 1 (ID: 6ad3e0da-679c-4ceb-bb13-66ffa6e9cb24)**
Soru Kökü: Otuz beş yaşında kadın hasta, alt dudakta aylardır süren ve yavaş yavaş artan hissizlik (parestezi) şikayetiyle başvuruyor. Radyografide, mental foramenin posteriorunda inferior alveolar kanal boyunca fusiform genişleme yapan iyi kortikal sınırlı bir radyolüsensi saptanıyor. Tümör kanal korteksini bozmamış, köklerde minör rezorpsiyon yapmıştır. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Nörilemoma (Schwannom)
Açıklama: İnferior alveolar kanaldan köken alan nörilemomalar (schwannomalar), komşu sinire baskı yaparak paresteziye yol açabilirler. Radyografide mandibular kanalda fusiform (iğ şeklinde) bir genişleme yapmaları ve kanalın genel seyrini korumaları tipiktir. Hemanjiomlar da kanalı genişletebilir ancak genellikle serpijinöz (kıvrımlı) bir yapı oluştururlar.

**Soru 2 (ID: db5195ec-6f75-430c-a644-6c9148eceec3)**
Soru Kökü: On yedi yaşında bir hastada, alt çenede asimetri ve ağrı şikayeti bulunmamasına rağmen çekilen radyografide mandibular kanalda dallanma insidansında artış ve mental foramende genişleme tespit ediliyor. Cilt muayenesinde multiple café au lait lekeleri saptanıyor. Bu lezyonların sebep olabileceği en olası dental komplikasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Molar dişlerin sürmesinin engellenmesi
Açıklama: Verilen klinik bulgular (mental foramen/kanal genişlemesi, artmış dallanma, café au lait lekeleri) Nörofibromatozisi işaret eder. Nörofibromatozise bağlı displastik kemik değişiklikleri ve dış kortekste oluşan eroziv değişiklikler, özellikle molar dişlerin sürmesinde engellemelere (gömülü kalmalarına) neden olabilir. Yaygın ankiloz veya bilateral dentijeröz kist bu sendromun beklenen komplikasyonlarından değildir.

---

### ÇİFT 50 (Benzerlik: 0.70)

**Soru 1 (ID: 663b5481-250f-43c8-a061-58ab4a65b74d)**
Soru Kökü: Mandibula posterior bölgede radyografik olarak mikst internal yapı gösteren bir lezyonun ayırıcı tanısı yapılmaktadır. Bu lezyonun Kompleks Odontoma yerine Ameloblastik Fibro-Odontoma lehine yorumlanmasını sağlayan temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Merkezinde tek bir büyük kitle yerine çoklu, dağınık olgun küçük diş sert dokuları barındırması
Açıklama: Kompleks odontoma genellikle merkezinde bir tane büyük organize olmamış sert doku kitlesi barındırırken, ameloblastik fibro-odontomada genellikle geniş bir radyolusent zemin (fibrom komponenti) içinde çoklu dağınık, küçük kalsifikasyonlar/diş sert dokuları görülür. Ayrıca kompleks odontomaların yumuşak doku komponenti belirgin şekilde daha incedir.

**Soru 2 (ID: 92a89548-4031-4fdd-9f72-eb3cf058f649)**
Soru Kökü: Radyografik ve klinik olarak birbirine oldukça benzeyen ameloblastik fibrom ve ameloblastoma vakalarının ayrımında klinik muayene ve yaş profilinin yanı sıra en çok dikkat edilen özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik fibromanın daha erken yaşlarda görülmesi ve ameloblastomadaki septaların daha belirgin/kalın olması
Açıklama: Ameloblastik fibrom (ort. yaş 15) ameloblastomaya (ort. yaş 40) göre belirgin olarak daha genç yaşta görülür. Radyografik olarak ameloblastomanın iç septaları, ameloblastik fibroma kıyasla çok daha belirgin ve kalındır. Diğer şıklardaki kalsifikasyonlar ve çakıl taşı görünümü AOT'ye, gece ağrısı ise osteoid osteomaya aittir.

---

### ÇİFT 51 (Benzerlik: 0.70)

**Soru 1 (ID: 46624a9f-ddc0-44f7-a440-a091ed463bce)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt birinci molar diş bölgesinde ağrı şikayetiyle başvuruyor; ağrının antienflamatuar ilaçlarla belirgin şekilde azaldığını belirtiyor. Radyografide, klinik olarak vital olan ilgili dişin köküne yapışık, dış korteksi radyoopak, iyi sınırlı ve etrafı radyolusent bir bantla çevrili 'tekerlek teli' görünümlü kitle izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Benign sementoblastom
Açıklama: Benign sementoblastom sıklıkla genç erişkinlerde mandibular premolar/molar vital dişlerin köküne kaynaşık, tekerlek teli (wheel-spoke) görünümünde, etrafı radyolusent kapsüllü radyoopak kitlelerdir ve NSAİİ ile azalan lokalize ağrıya neden olurlar. Periapikal sklerozan osteit yumuşak doku kapsülü içermez ve genellikle devital dişlerde görülür.

**Soru 2 (ID: f5778882-24b2-46fa-981f-dd5e0775edcf)**
Soru Kökü: 42 yaşındaki erkek hasta, alt çene sağ tarafında yavaş büyüyen, ağrısız ve fasiyal asimetriye neden olan bir şişlik nedeniyle kliniğe başvurmuştur. Muayenede o bölgedeki dişlerde mobilite saptanmıştır. Hastanın yaşı, cinsiyeti ve lezyonun davranışı göz önüne alındığında, açık ara en yaygın klinik bulgu veren odontojenik tümör olması sebebiyle ilk düşünülmesi gereken kemik patolojisi tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Ameloblastoma
Açıklama: Ameloblastomalar ortalama 40 yaş civarında ve erkeklerde nispeten daha sık saptanan, fasiyal asimetri, diş mobilitesi ve yavaş büyüme profili ile klinikte semptom veren en yaygın odontojenik tümördür. Adenomatoid odontojenik tümörler (AOT) genellikle kadınlarda ve daha genç yaş grubunda (ikinci dekad) görülürken, sementoblastoma diş köküne yapışık radyoopak kitle oluşturur. Hastanın yaş aralığı ve progresif ekspansiyon bulguları ameloblastomayı destekler.

---

### ÇİFT 52 (Benzerlik: 0.70)

**Soru 1 (ID: 3528839d-4d8c-4919-8427-6c73edc916b0)**
Soru Kökü: Çenelerde görülen yüksek debili vasküler lezyonların (arteriovenöz fistül ve santral hemanjiyom) klinik yönetimi ile ilgili aşağıdaki yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (A): Şiddetli ve rutin yöntemlerle kontrol altına alınamayan fatal durumlarda internal karotid arter ligasyonu hayat kurtarıcı bir cerrahi yaklaşımdır.
Açıklama: Santral hemanjiyom veya masif A-V fistüllerin cerrahi rezeksiyonunda majör komplikasyonları önlemek için bağlanan (ligasyon) damar eksternal karotid arterdir. İnternal karotid arter beyin dokusunun ana perfüzyonunu sağladığından, çene cerrahisinde klemplenmesi veya ligasyonu katastrofik nörolojik sonuçlar doğurur ve uygulanmaz. Diğer seçenekler vasküler lezyon patofizyolojisi ve teşhisi için altın standart uygulamalardır.

**Soru 2 (ID: bc1fb0a0-311b-4adb-ac06-a50687bd6023)**
Soru Kökü: Santral Hemanjiyom vakalarının operasyon sırasındaki morbidite ve letalite riski oldukça yüksektir. Bu tümörlerin klinik yönetimi ve tedavisi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Agresif seyirli olduğundan standart tedavisi radyoterapi ve lenf nodu diseksiyonu kombinasyonudur.
Açıklama: Santral hemanjiyom tamamen vasküler anomalilerden köken alan BENİGN bir kitle/hamartomatöz veya vasküler malformasyon havuzudur. Lenfatik metastaz yapmaz (bu nedenle boyun diseksiyonu kontrendikedir) ve radyoterapi endikasyonu primer tedavide yoktur. Tedavinin ana esası masif kanamayı önlemek adına embolizasyon, arter ligasyonu, sklerozan madde ve çok dikkatli cerrahi rezeksiyondur.

---

### ÇİFT 53 (Benzerlik: 0.70)

**Soru 1 (ID: 90441e52-3bba-4693-8266-663efe3bbd89)**
Soru Kökü: Ameloblastik fibromanın radyolojik olarak diğer multiloküler lezyonlardan ayrımıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Ameloblastik fibromdaki iç septalar, ameloblastomaya göre daha ince ve belirsiz sınırlıdır.
Açıklama: Ameloblastik fibromadaki septalar ameloblastomaya göre çok daha 'belirgin ve kalındır'. Bu kalın septa yapısı, ameloblastik fibromayı klasik sabun köpüğü yapan ameloblastomdan ayırır. Granüler/ince/belirsiz septa yapısı ise Dev Hücreli Granülomun karakteristik özelliğidir.

**Soru 2 (ID: 92a89548-4031-4fdd-9f72-eb3cf058f649)**
Soru Kökü: Radyografik ve klinik olarak birbirine oldukça benzeyen ameloblastik fibrom ve ameloblastoma vakalarının ayrımında klinik muayene ve yaş profilinin yanı sıra en çok dikkat edilen özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik fibromanın daha erken yaşlarda görülmesi ve ameloblastomadaki septaların daha belirgin/kalın olması
Açıklama: Ameloblastik fibrom (ort. yaş 15) ameloblastomaya (ort. yaş 40) göre belirgin olarak daha genç yaşta görülür. Radyografik olarak ameloblastomanın iç septaları, ameloblastik fibroma kıyasla çok daha belirgin ve kalındır. Diğer şıklardaki kalsifikasyonlar ve çakıl taşı görünümü AOT'ye, gece ağrısı ise osteoid osteomaya aittir.

---

### ÇİFT 54 (Benzerlik: 0.70)

**Soru 1 (ID: 3c3f7289-2173-4a17-9396-42f7321d3e02)**
Soru Kökü: Ağrısız çene şişliği şikayetiyle başvuran hastanın radyografik incelemesinde posterior mandibulada, sürmemiş bir dişin kronuna yakın yerleşimli radyoopasiteler içeren lezyon tespit ediliyor. Kalsifiye Epitelyal Odontojenik Tümör (KEOT) tanısı alan bu hasta için en olası yaş grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Kırk yaş civarı
Açıklama: Kalsifiye Epitelyal Odontojenik Tümör (KEOT/Pindborg tümörü) için ortalama görülme yaşı 42'dir. Ameloblastik fibroma veya adenomatoid odontojenik tümör gibi lezyonlar daha çok gençlerde (2. dekad) izlenirken, KEOT orta yaş erişkinlerde ortaya çıkar. Gömülü diş kronuna yakın radyopasiteler ise bu tümör için tanısal değer taşır.

**Soru 2 (ID: f5778882-24b2-46fa-981f-dd5e0775edcf)**
Soru Kökü: 42 yaşındaki erkek hasta, alt çene sağ tarafında yavaş büyüyen, ağrısız ve fasiyal asimetriye neden olan bir şişlik nedeniyle kliniğe başvurmuştur. Muayenede o bölgedeki dişlerde mobilite saptanmıştır. Hastanın yaşı, cinsiyeti ve lezyonun davranışı göz önüne alındığında, açık ara en yaygın klinik bulgu veren odontojenik tümör olması sebebiyle ilk düşünülmesi gereken kemik patolojisi tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Ameloblastoma
Açıklama: Ameloblastomalar ortalama 40 yaş civarında ve erkeklerde nispeten daha sık saptanan, fasiyal asimetri, diş mobilitesi ve yavaş büyüme profili ile klinikte semptom veren en yaygın odontojenik tümördür. Adenomatoid odontojenik tümörler (AOT) genellikle kadınlarda ve daha genç yaş grubunda (ikinci dekad) görülürken, sementoblastoma diş köküne yapışık radyoopak kitle oluşturur. Hastanın yaş aralığı ve progresif ekspansiyon bulguları ameloblastomayı destekler.

---

### ÇİFT 55 (Benzerlik: 0.70)

**Soru 1 (ID: 18212c92-ac58-48a3-b535-272af1aa6bd2)**
Soru Kökü: Bilinen nörofibromatozis tanısı olan 14 yaşındaki hastanın alınan kraniofasiyal radyografilerinde temporomandibuler eklem (TME) bölgesini ilgilendiren spesifik anomaliler saptanmıştır. Bu hastanın ramus ve kondil kompleksinde aşağıdaki radyografik bulgulardan hangisinin görülmesi **beklenir**?
Doğru Şık (A): Kondil başında deformite ve kondil boynunun uzaması
Açıklama: Nörofibromatozis, çene kemiklerinde displastik anormalliklere yol açar. Kondil başında deformite, kondil boynunun belirgin şekilde uzaması, ramusta lateral eğrilik ve incelme, koronoid çentikte genişleme karakteristik radyolojik bulgulardır. Osteofit oluşumu osteoartrite, tam ankiloz ciddi travma/enfeksiyona daha çok uyan bulgulardır.

**Soru 2 (ID: 57684c1d-eb42-4380-9dcc-76faa1092b02)**
Soru Kökü: 22 yaşında kadın hastada maksiller asimetri mevcuttur. Çekilen konik ışınlı bilgisayarlı tomografide maksiller antruma doğru kemik büyümesi tespit edilmiştir. Bu bulgunun Fibröz Displazi yerine Semento-Ossifiye Fibrom lehine değerlendirilebilmesi için aşağıdaki radyolojik paternden hangisinin görülmesi beklenir?
Doğru Şık (C): Lezyonun maksiller antruma doğru, belirgin bir kapsül hattıyla daha konveks (bombeli) bir merkezden uzanım göstermesi
Açıklama: Fibröz displazi displastik bir patolojidir; kemiğin genel morfolojisini sürdürür ve maksilla lateral duvarını 'dış şekli koruyarak' antruma doğru iter. Ossifiye Fibrom ise gerçek bir tümör (neoplazm) gibi davranarak kendi merkezinden ekspansif büyür, konsantriktir ve antrumun içine doğru oldukça konveks, sınırları belirgin (kapsüllü) bir balonlaşma yapar.

---

### ÇİFT 56 (Benzerlik: 0.70)

**Soru 1 (ID: 35d022ef-85d5-4282-9b08-0bebd79e55d1)**
Soru Kökü: Genç bir hastanın rutin radyografik incelemesinde ameloblastik fibro-odontoma teşhis edilmiştir. Bu lezyonun klinik ve radyografik tablosuyla ilgili aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (A): Lezyonun karakteristik olarak anterior maksillada kanin kronunu çevrelemesi
Açıklama: Ameloblastik fibro-odontomaların büyük çoğunluğu (%70'in üzeri) mandibulanın posterior (molar) bölgesinde izlenir. Anterior maksillada gömülü kanin kuronunu içine alan karakteristik miks kitle Adenomatoid Odontojenik Tümöre (AOT) ve kompound odontomaya aittir.

**Soru 2 (ID: 9464bc95-2c46-486c-a3ae-a25a77d31f62)**
Soru Kökü: Ameloblastomanın radyolojik ve klinik özellikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Radyografide internal yapısında mine benzeri kalsifiye radyoopak odaklar içermesi tipiktir.
Açıklama: Ameloblastoma radyografik olarak tam radyolüsentten kemik septalı (bal peteği veya sabun köpüğü) miks yapıya kadar değişebilir ancak içerisinde kalsifiye radyoopak sert doku (mine/sement) odakları barındırmaz. Kalsifiye odaklar Adenomatoid Odontojenik Tümör, Pindborg tümörü veya Odontomalar için karakteristiktir. Yumurta kabuğu etkisi, bıçak sırtı kök rezorpsiyonu ve multikistik görünüm ameloblastoma için tipik bulgulardır.

---

### ÇİFT 57 (Benzerlik: 0.70)

**Soru 1 (ID: 738e8cfe-08da-40a2-9ba5-8bcbb87c2a32)**
Soru Kökü: Desmoplastik fibroma ve Anevrizmal kemik kisti, benzer yaş gruplarında (1. ve 2. dekat) görülebilen ve mandibulada hızla büyüyerek çene ekspansiyonu yapabilen lezyonlardır. Bu iki patolojinin radyografik ayırıcı tanısında Anevrizmal Kemik Kisti lehine olan güçlü özellik aşağıdakilerden hangisidir?
Doğru Şık (D): Multiloküler radyolusensi içerisinde örümcek ağı benzeri ince, incecik (wispy) septaların bulunması
Açıklama: Anevrizmal kemik kisti geniş kan göllenmeleri içerdiği için radyografik olarak 'incecik (wispy) septalarla' karakterize olan balonu andıran multiloküler bir yapı gösterir. Desmoplastik fibromda ise kemik trabekülleri (septalar) maligniteyi andıracak düzeyde kaba, iri, çok kalın, düz ve açılıdır. Septa yapısı tanıya direkt etki eder.

**Soru 2 (ID: a0a4f8ea-2928-4506-8843-16838d89b777)**
Soru Kökü: Otuz yaşında kadın hastanın mandibula posterior bölgesinde, sferik ve belirgin sınırlı, etrafı ince radyolusent bir bant (kapsül) ile çevrili homojen radyoopak kitle saptanıyor. Lezyon çenede konsantrik ekspansiyon yapmış ve komşu dişleri iterek yer değiştirmiştir. Bu lezyonun Fibröz Displaziden ayrımını sağlayan en kritik radyografik özellik aşağıdakilerden hangisidir?
Doğru Şık (E): İyi sınırlı olması ve etrafında fibröz kapsülü temsil eden radyolusent bandın bulunması
Açıklama: Semento-ossifiye fibromun fibröz displaziden ayrımındaki en önemli fark sınır karakteridir. Fibröz displazi çevre kemik doku ile karışmış (sınırları belirsiz) bir buzlu cam paterni sunarken, ossifiye fibromların etrafında fibröz kapsülü temsil eden belirgin bir radyolusent bant ve kortikal sınır vardır; konsantrik büyürler.

---

### ÇİFT 58 (Benzerlik: 0.70)

**Soru 1 (ID: 0f1a5435-42da-4e5f-86dc-b186f6b69502)**
Soru Kökü: Çenelerde sıklıkla asemptomatik olarak tespit edilen radyoopak enostozları (osteoskleroz), periapikal osseöz displaziden (POD) ayırmak için aşağıdaki klinik ve radyografik özelliklerden hangileri kullanılır?
I. Enostozun etrafında radyolusent bir periferin (kapsül) bulunmaması
II. POD'un genellikle çok odaklı (multifokal), enostozun ise soliter olma eğilimi
III. Enostozların diş apekslerinde periodontal aralığı belirgin genişletmesi
IV. POD lezyonlarının dişsiz bölgelerde kesinlikle gelişmemesi
Doğru Şık (B): I ve II
Açıklama: Enostozun en önemli ayırıcı özelliği POD'da görülen kapsül (radyolusent bant) yapısının olmaması ve sıklıkla tekil (soliter) bulunmasıdır (5+ adet ise Gardner sendromu). III yanlıştır çünkü enostozda periodontal aralık genişlemez (hipersementozda veya sklerozan osteitde olabilir). IV yanlıştır çünkü POD dişsiz alanda kalabilir ve odontoma ile karışabilir.

**Soru 2 (ID: 755860aa-5a3d-4f61-9091-ba975d7e0850)**
Soru Kökü: Mandibular anterior bölgedeki vital dişlerin apekslerinde radyoopak odakların saptandığı bir hastada, bu durumun enostoz mu yoksa periapikal osseöz displazi (POD) mi olduğu değerlendirilmektedir. Hangi spesifik radyografik bulgu lezyonun doğrudan POD lehine yorumlanmasını sağlar?
Doğru Şık (C): Radyopak lezyonun etrafını çevreleyen ince, belirgin bir radyolüsent çerçevenin (perifer) varlığı
Açıklama: Periapikal osseöz displazi (POD) matürasyonunu tamamlarken kemik odacığının etrafında fibröz bir bağ dokusu halesi bırakır ve bu da filmlerde lezyonu çevreleyen karakteristik bir radyolüsent periferik çizgi olarak görülür. Enostozlar (kemik adacıkları) ise normal kemik trabeküllerine kesintisiz karışır ve etrafında herhangi bir kapsül görüntüsü vermez. Bu net radyolüsent çerçeve, displastik fibröz dokunun yansımasıdır.

---

### ÇİFT 59 (Benzerlik: 0.70)

**Soru 1 (ID: bfe80ebb-469f-4e84-98c7-668e5fe06001)**
Soru Kökü: Adenomatoid Odontojenik Tümör (AOT) ile Foliküler (Dentigeröz) Kist ve Kalsifiye Odontojenik Kist'in (KOK) ayırıcı tanısında aşağıdakilerden hangisi rol oynamaz?
I. Lezyonun mine-sement birleşiminden daha apikale tutunması AOT lehinedir.
II. Ekstrafoliküler AOT'nin, kalsifiye odontojenik kistten radyolojik olarak ayrımı imkansız olabilir.
III. Her ikisi de (AOT ve Dentigeröz kist) agresif kök rezorpsiyonu yaparak karakterize olur.
Doğru Şık (C): Yalnız III
Açıklama: AOT'de kök rezorpsiyonu görülmesi oldukça nadirdir, bu nedenle agresif kök rezorpsiyonu beklenmez (III yanlış). AOT, dentigeröz kistten farklı olarak kronu aşarak mine-sement sınırının çok daha apikaline kadar inen bir kapsül ataçmanı gösterir (I doğru). İçerisinde kalsifikasyon olmayan bir ekstrafoliküler AOT'yi KOK'tan radyografik olarak ayırmak imkansıza yakındır (II doğru).

**Soru 2 (ID: f7bcfe61-8bcb-4d31-ad71-2acf201cc633)**
Soru Kökü: Adenomatoid odontojenik tümörün (AOT - foliküler tip) tamamen radyolüsent olduğu erken dönemlerinde dentigeröz kistten ayrımında kullanılan en spesifik radyografik farklılık aşağıdakilerden hangisidir?
Doğru Şık (A): AOT lezyonunun ilgili dişin mine-sement birleşiminden (CEJ) daha apikaline inerek kökü sarması
Açıklama: Dentigeröz kist fizyolojik olarak foliküler boşluğun genişlemesidir ve her zaman tam olarak mine-sement birleşimine (CEJ) tutunur, köke inmez. Ancak AOT (foliküler varyantı) radyolüsent döneminde CEJ'yi geçerek daha apikale (dişin kökünün yarısına kadar) uzanır. Bu özellik onu dentigeröz kistten radyografik olarak ayırır.

---

### ÇİFT 60 (Benzerlik: 0.70)

**Soru 1 (ID: afddf703-9190-44d3-8f9e-7dde2f52bb6b)**
Soru Kökü: Yirmi altı yaşında erkek hastanın alt birinci molar dişinin periapikal bölgesinde 'tekerlek teli' görünümünde radyoopak bir kitle izlenmiştir. Kitle periferal radyolüsent bir bant ile sınırlandırılmıştır ve diş ile kaynaşmıştır. Ayırıcı tanıda yer alan Periapikal Sklerozan Osteit (PSO) ile bu kitle (Benign Sementoblastom) arasındaki en temel radyolojik/histolojik fark aşağıdakilerden hangisidir?
Doğru Şık (D): PSO ve dens kemik adalarının sementoblastomadaki gibi yumuşak doku kapsülü içermemesi
Açıklama: Benign sementoblastom, kortikal kemiğin hemen altında veya periferinde radyolüsent bir bant (yumuşak doku kapsülü) içerirken; reaktif bir süreç olan Periapikal Sklerozan Osteit (PSO) ve dens kemik adaları bu tarz bir kapsül barındırmazlar. Ayrıca sementoblastom vital dişlerde izlenirken, PSO devital (inflamatuar) diş apekstlerinde gelişir.

**Soru 2 (ID: fcc7f2f7-b9f3-4a96-b67e-78ba93895793)**
Soru Kökü: Benign Sementoblastoma ile Hipersementozun radyografik olarak ayrımına dair aşağıdaki özelliklerden hangisi **yanlıştır**?
Doğru Şık (E): Hipersementozu çevreleyen periodontal aralık boşluğu, sementoblastomanın yumuşak doku kapsülünden belirgin şekilde daha kalındır.
Açıklama: Hipersementozu çevreleyen periodontal ligament aralığı oldukça ince ve homojendir. Oysa Sementoblastomayı çevreleyen radyolusent (yumuşak doku) bant ve kapsül çok daha kalın ve belirgindir. Diğer şıkların tümü (Sementoblastomda ekspansiyon, kök rezorpsiyonu olması, Periapikal osteitisin devital diş kaynaklı kapsülsüz olması) doğru ayırıcı tanı kriterleridir.

---

### ÇİFT 61 (Benzerlik: 0.70)

**Soru 1 (ID: 755860aa-5a3d-4f61-9091-ba975d7e0850)**
Soru Kökü: Mandibular anterior bölgedeki vital dişlerin apekslerinde radyoopak odakların saptandığı bir hastada, bu durumun enostoz mu yoksa periapikal osseöz displazi (POD) mi olduğu değerlendirilmektedir. Hangi spesifik radyografik bulgu lezyonun doğrudan POD lehine yorumlanmasını sağlar?
Doğru Şık (C): Radyopak lezyonun etrafını çevreleyen ince, belirgin bir radyolüsent çerçevenin (perifer) varlığı
Açıklama: Periapikal osseöz displazi (POD) matürasyonunu tamamlarken kemik odacığının etrafında fibröz bir bağ dokusu halesi bırakır ve bu da filmlerde lezyonu çevreleyen karakteristik bir radyolüsent periferik çizgi olarak görülür. Enostozlar (kemik adacıkları) ise normal kemik trabeküllerine kesintisiz karışır ve etrafında herhangi bir kapsül görüntüsü vermez. Bu net radyolüsent çerçeve, displastik fibröz dokunun yansımasıdır.

**Soru 2 (ID: dc53e52f-a02d-43f6-8188-6204b9c9b1df)**
Soru Kökü: 35 yaşındaki kadın hastanın alt birinci molar dişinin apikalinde iyi sınırlı homojen bir radyopasite izlenmektedir. İlgili diş çürüksüz, canlı ve semptomsuzdur. Radyopasitenin periapikal sklerozan osteit yerine bir enostoz (kemik adacığı) olduğuna karar vermede en kritik radyografik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Apikal periodontal ligament aralığında iltihabi bir genişlemenin bulunmaması
Açıklama: Periapikal sklerozan osteit, bir enflamasyon kaynağına (çürük, pulpa nekrozu) reaktif olarak gelişen ve apikal periodontal ligament aralığında tipik genişlemeye neden olan bir kemik reaksiyonudur. Enostozlarda ise PDL tamamen intakt ve normal genişliktedir; enflamasyon emaresi barındırmazlar. Her iki lezyon da radyolüsent kapsül içermez, bu da sementoblastomadan ayrılmalarını sağlar.

---

### ÇİFT 62 (Benzerlik: 0.70)

**Soru 1 (ID: a0a4f8ea-2928-4506-8843-16838d89b777)**
Soru Kökü: Otuz yaşında kadın hastanın mandibula posterior bölgesinde, sferik ve belirgin sınırlı, etrafı ince radyolusent bir bant (kapsül) ile çevrili homojen radyoopak kitle saptanıyor. Lezyon çenede konsantrik ekspansiyon yapmış ve komşu dişleri iterek yer değiştirmiştir. Bu lezyonun Fibröz Displaziden ayrımını sağlayan en kritik radyografik özellik aşağıdakilerden hangisidir?
Doğru Şık (E): İyi sınırlı olması ve etrafında fibröz kapsülü temsil eden radyolusent bandın bulunması
Açıklama: Semento-ossifiye fibromun fibröz displaziden ayrımındaki en önemli fark sınır karakteridir. Fibröz displazi çevre kemik doku ile karışmış (sınırları belirsiz) bir buzlu cam paterni sunarken, ossifiye fibromların etrafında fibröz kapsülü temsil eden belirgin bir radyolusent bant ve kortikal sınır vardır; konsantrik büyürler.

**Soru 2 (ID: dc53e52f-a02d-43f6-8188-6204b9c9b1df)**
Soru Kökü: 35 yaşındaki kadın hastanın alt birinci molar dişinin apikalinde iyi sınırlı homojen bir radyopasite izlenmektedir. İlgili diş çürüksüz, canlı ve semptomsuzdur. Radyopasitenin periapikal sklerozan osteit yerine bir enostoz (kemik adacığı) olduğuna karar vermede en kritik radyografik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Apikal periodontal ligament aralığında iltihabi bir genişlemenin bulunmaması
Açıklama: Periapikal sklerozan osteit, bir enflamasyon kaynağına (çürük, pulpa nekrozu) reaktif olarak gelişen ve apikal periodontal ligament aralığında tipik genişlemeye neden olan bir kemik reaksiyonudur. Enostozlarda ise PDL tamamen intakt ve normal genişliktedir; enflamasyon emaresi barındırmazlar. Her iki lezyon da radyolüsent kapsül içermez, bu da sementoblastomadan ayrılmalarını sağlar.

---

### ÇİFT 63 (Benzerlik: 0.70)

**Soru 1 (ID: 0319cc8e-45fb-4617-93a8-a4f377f3970c)**
Soru Kökü: Çenelerde radyolojik ve biyopsi verileri ışığında 'osteoid osteoma' tanısı almış bir hastada aşağıdaki radyografik ve patolojik bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (C): Lezyonun agresif büyümesine bağlı olarak ilgili kemiğin korteksinde dekstrüksiyon (erozyon) ve komşu yumuşak dokuya invazyon görülmesi
Açıklama: Osteoid osteoma tamamen benign seyirli, kemik sınırlarını aşmayan ve dış korteksi aşındırıp (erozyon/destrüksiyon) yumuşak dokuya invaze olmayan bir lezyondur. Aksine, ürettiği medyatörler ile komşu periostu uyararak kortekste destrüksiyon yerine apozisyonel kemik yapımı ile 'kalınlaşmaya' sebep olur. Yumuşak doku invazyonu ve kortikal destrüksiyon bulguları osteosarkom gibi malign mezenkimal tümörlere aittir.

**Soru 2 (ID: f56e05e4-f0f3-459f-9581-3b1495e0caea)**
Soru Kökü: Osteoblastoma ve Osteoid Osteoma'nın klinik ve histopatolojik özellikleri sıklıkla birbirine karışmaktadır. Bu iki patolojinin klinik ve radyolojik ayrımına dair aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Osteoid osteoma daha agresif olup kemik çevresindeki yumuşak dokulara hızla yayılma potansiyeline sahiptir.
Açıklama: Osteoblastoma, osteoid osteomaya göre 'daha fazla büyüme potansiyeline sahip ve daha agresif' olarak kabul edilen lezyondur. Çevre dokulara yayılma (malignite olmasa da daha yaygın lokal destrüksiyon) osteoblastomda beklenir. Osteoid osteoma sınırlı kalır, etrafı kalın sklerotik reaksiyonla çevrilir ve ağrısı NSAİİ (salisilat) ile karakteristik olarak hızlıca geçer.

---

### ÇİFT 64 (Benzerlik: 0.70)

**Soru 1 (ID: 46624a9f-ddc0-44f7-a440-a091ed463bce)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt birinci molar diş bölgesinde ağrı şikayetiyle başvuruyor; ağrının antienflamatuar ilaçlarla belirgin şekilde azaldığını belirtiyor. Radyografide, klinik olarak vital olan ilgili dişin köküne yapışık, dış korteksi radyoopak, iyi sınırlı ve etrafı radyolusent bir bantla çevrili 'tekerlek teli' görünümlü kitle izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Benign sementoblastom
Açıklama: Benign sementoblastom sıklıkla genç erişkinlerde mandibular premolar/molar vital dişlerin köküne kaynaşık, tekerlek teli (wheel-spoke) görünümünde, etrafı radyolusent kapsüllü radyoopak kitlelerdir ve NSAİİ ile azalan lokalize ağrıya neden olurlar. Periapikal sklerozan osteit yumuşak doku kapsülü içermez ve genellikle devital dişlerde görülür.

**Soru 2 (ID: dc53e52f-a02d-43f6-8188-6204b9c9b1df)**
Soru Kökü: 35 yaşındaki kadın hastanın alt birinci molar dişinin apikalinde iyi sınırlı homojen bir radyopasite izlenmektedir. İlgili diş çürüksüz, canlı ve semptomsuzdur. Radyopasitenin periapikal sklerozan osteit yerine bir enostoz (kemik adacığı) olduğuna karar vermede en kritik radyografik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Apikal periodontal ligament aralığında iltihabi bir genişlemenin bulunmaması
Açıklama: Periapikal sklerozan osteit, bir enflamasyon kaynağına (çürük, pulpa nekrozu) reaktif olarak gelişen ve apikal periodontal ligament aralığında tipik genişlemeye neden olan bir kemik reaksiyonudur. Enostozlarda ise PDL tamamen intakt ve normal genişliktedir; enflamasyon emaresi barındırmazlar. Her iki lezyon da radyolüsent kapsül içermez, bu da sementoblastomadan ayrılmalarını sağlar.

---

### ÇİFT 65 (Benzerlik: 0.70)

**Soru 1 (ID: 46624a9f-ddc0-44f7-a440-a091ed463bce)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt birinci molar diş bölgesinde ağrı şikayetiyle başvuruyor; ağrının antienflamatuar ilaçlarla belirgin şekilde azaldığını belirtiyor. Radyografide, klinik olarak vital olan ilgili dişin köküne yapışık, dış korteksi radyoopak, iyi sınırlı ve etrafı radyolusent bir bantla çevrili 'tekerlek teli' görünümlü kitle izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Benign sementoblastom
Açıklama: Benign sementoblastom sıklıkla genç erişkinlerde mandibular premolar/molar vital dişlerin köküne kaynaşık, tekerlek teli (wheel-spoke) görünümünde, etrafı radyolusent kapsüllü radyoopak kitlelerdir ve NSAİİ ile azalan lokalize ağrıya neden olurlar. Periapikal sklerozan osteit yumuşak doku kapsülü içermez ve genellikle devital dişlerde görülür.

**Soru 2 (ID: d89d3849-2eba-444a-a403-fdb6fd609dd4)**
Soru Kökü: Yirmi iki yaşında kadın hasta, premolar-molar bölgede yavaş büyüyen ağrılı şişlik şikayetiyle başvuruyor. Radyografide ince, düz ve yer yer 'tenis raketi' şeklinde septalar içeren multiloküler lezyon saptanıyor. Operasyon sırasında lezyonun kapsülsüz olduğu ve kemik iliği boşluklarına jelatinöz (miksoid) yapıda infiltre olduğu görülüyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Odontojenik mikzoma
Açıklama: Odontojenik mikzomalar çoğunlukla 10-30 yaş arası genç kadınlarda görülür, kapsülsüz oldukları için kemik iliğine infiltre olurlar ve ince, düz (tenis raketi/merdiven basamağı) septalar ile karakterizedirler. Jelatinöz (miksoid) kıvamda olmaları cerrahi sınırların belirlenmesini zorlaştırarak nüks riskini (%25) artırır. Hemanjiomlar da multiloküler olabilir ancak miksoid jelatinöz doku barındırmazlar.

---

### ÇİFT 66 (Benzerlik: 0.70)

**Soru 1 (ID: be50517e-c9c9-4b8d-b389-29002f9f8388)**
Soru Kökü: 10 yaşında kız hasta, sağ alt çenesinde giderek büyüyen ve ara sıra dipten sızlayan bir şişlik şikayetiyle başvuruyor. İntraoral muayenede 46 numaralı dişin soketine bastırıldığında 'rebound' (geri yaylanma) tarzı mobilite gösterdiği tespit ediliyor. Radyografide mandibular kanalı içeren serpijinöz multiloküler defekt ve dış korteksi yıkarak periosttan dışarı uzanan çizgisel (sun-ray) spiküller saptanıyor. Biyopsi öncesi iğne aspirasyonu yapıldığında enjektöre yüksek basınçlı kan doluyor. Bu hastada kesin tanı konulmadan gerçekleştirilecek dikkatsiz bir diş çekiminin yol açacağı en olası majör komplikasyon ve doğru önleyici tedavi protokolü eşleşmesi aşağıdakilerden hangisidir?
Doğru Şık (A): Lethal hemoraji — İşlem öncesi embolizasyon ve eksternal karotid arter ligasyonu
Açıklama: Rebound mobilite, aspirasyonda yüksek basınçlı kan ve güneş ışını manzarası lezyonun agresif bir santral hemanjiyom ya da A-V fistül olduğunu kesinleştirir. Bu vakalarda diş doğrudan yüksek basınçlı damar yatağının tıkacı gibidir. Dişin plansız çekilmesi durdurulamayan lethal (ölümcül) hemorajiye sebep olur. Bu tablodan korunmanın tek yolu çekim öncesi vasküler yatak tıkaması (embolizasyon) ve cerrahi besleyici damar ligasyonudur (eksternal karotid arter).

**Soru 2 (ID: cc60b985-40fa-4e2f-8b28-cc619b80d93d)**
Soru Kökü: 12 yaşında kız hasta, sağ alt posterior bölgede yavaş büyüyen, palpasyonda nabız veren ve dişeti oluğundan spontan kanaması olan bir şişlik şikayetiyle başvuruyor. İlgili dişte 'rebound' mobilite saptanıyor. Bu lezyonun cerrahi tedavisinde, olası fatal kanama komplikasyonunu önlemek amacıyla uygulanan ve vasküler yolla inert materyallerin gönderilmesi prensibine dayanan işlem aşağıdakilerden hangisidir?
Doğru Şık (A): Embolizasyon
Açıklama: Yüksek debili vasküler lezyonlarda (santral hemanjiyom/A-V fistül), cerrahi öncesi kanamayı kontrol altına almak için damar yolundan inert partiküller gönderilerek damar lümeninin mekanik olarak tıkanması işlemine embolizasyon denir. Eksternal karotid ligasyonu cerrahi bir bağlama işlemidir, skleroterapi ise damar duvarını kimyasal olarak tahrip ederek pıhtılaştırır. Rebound mobilite ve nabız varlığı, diş çekiminin doğrudan masif kanamaya yol açacağını gösterdiği için öncesinde mutlaka embolizasyon yapılmalıdır.

---

### ÇİFT 67 (Benzerlik: 0.70)

**Soru 1 (ID: d5c0d9e2-68e8-41fc-a03e-65bd8d6a202c)**
Soru Kökü: Kemik ekzostozlarının internal eşdeğeri olarak bilinen Enostozlar (Osteoskleroz/Dens Kemik Adaları) ile ilgili aşağıdakilerden hangisi en tipik bulgudur?
Doğru Şık (E): Sıklıkla premolar-molar bölgede bulunurlar ve varlıkları dişlerin sürmesi veya canlılığı ile ilişkili değildir.
Açıklama: Enostozlar (dens kemik adaları) kompakt kemiğin spongiyoz kemik içine büyümesiyle oluşan idiyopatik radyoopasitelerdir. Mandibula premolar-molar bölgede çok sıktırlar, çevrelerinde asla radyolusent kapsül yoktur (Sementoblastoma ile ayrımı). İlgili bölgede diş olup olmamasından veya vitalitesinden bağımsız gelişirler (Sklerozan osteitis ile ayrımı).

**Soru 2 (ID: f1bd2ae1-945f-4de3-b08b-1a3d23d0a575)**
Soru Kökü: Enostozların (dens kemik adaları) biyolojik ve klinik davranışı incelendiğinde, komşu anatomik yapılara etkileri hakkında aşağıdakilerden hangisi beklenen bir özellik **değildir**?
Doğru Şık (A): Dişin apeksinde izlendiklerinde daima komşu dişte pulpal nekroza yol açmaları
Açıklama: Enostozlar canlı ve normal dişlerin çevresinde izlenen asemptomatik gelişimsel varyasyonlar olup, dişlerde pulpa nekrozuna sebep olmazlar. Etraflarında enfeksiyöz patolojiler veya tümörlerde izlenen tipik radyolüsent bir marjin bulunmaması en klasik tanımlayıcı özellikleridir. 5 veya daha fazla odakta multipl bulunmaları Gardner Sendromu açısından kuvvetli bir erken işarettir.

---

### ÇİFT 68 (Benzerlik: 0.70)

**Soru 1 (ID: 024c13af-382d-4962-a436-d509f0428a9e)**
Soru Kökü: Benign odontojenik ve non-odontojenik kemik lezyonlarının komşu diş köklerine (rezorpsiyon/iteleme) etkileri değerlendirildiğinde, aşağıdaki tümörlerden hangisinin belirgin kök rezorpsiyonu yapması **en az olasıdır**?
Doğru Şık (C): Kalsifiye epitelyal odontojenik tümör (KEOT)
Açıklama: Ameloblastoma (bıçak sırtı rezorpsiyon), Santral dev hücreli granülom ve vasküler lezyonlar (Hemanjiyom/A-V fistül) diş köklerinde sıklıkla rezorpsiyona veya malpozisyona neden olurlar. Pindborg Tümörü (KEOT) ve Odontojenik Miksom'un kök rezorpsiyonu yapması oldukça nadirdir.

**Soru 2 (ID: 1edafac3-1860-47af-8925-6245d9c78c6a)**
Soru Kökü: Çene kemiklerinde santral olarak gelişebilen ve yalnızca odontojenik ektomezenşim kaynaklı olduğu bilinen benign tümörler bulunmaktadır. Aşağıdakilerden hangisi bu saf ektomezenşimal kökenli tümörlere radyografik bir örnektir?
Doğru Şık (A): Odontojenik miksoma
Açıklama: Odontojenik miksoma, gelişmekte olan dişin papillasını veya dental folikülünü andıran, saf ektomezenşimal yapıda ve düzensiz septalara (tenis raketi) sahip olan bir tümördür. Ameloblastik fibroma ve odontomalar miks yapıda iken, Pindborg ve ameloblastomalar epitel kaynaklıdır. Ektomezenşimal tümörlerin invaziv özellikleri, kemik iliğine mikroskobik düzeyde sızmalarından kaynaklanır.

---

### ÇİFT 69 (Benzerlik: 0.70)

**Soru 1 (ID: 6ad3e0da-679c-4ceb-bb13-66ffa6e9cb24)**
Soru Kökü: Otuz beş yaşında kadın hasta, alt dudakta aylardır süren ve yavaş yavaş artan hissizlik (parestezi) şikayetiyle başvuruyor. Radyografide, mental foramenin posteriorunda inferior alveolar kanal boyunca fusiform genişleme yapan iyi kortikal sınırlı bir radyolüsensi saptanıyor. Tümör kanal korteksini bozmamış, köklerde minör rezorpsiyon yapmıştır. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Nörilemoma (Schwannom)
Açıklama: İnferior alveolar kanaldan köken alan nörilemomalar (schwannomalar), komşu sinire baskı yaparak paresteziye yol açabilirler. Radyografide mandibular kanalda fusiform (iğ şeklinde) bir genişleme yapmaları ve kanalın genel seyrini korumaları tipiktir. Hemanjiomlar da kanalı genişletebilir ancak genellikle serpijinöz (kıvrımlı) bir yapı oluştururlar.

**Soru 2 (ID: d89d3849-2eba-444a-a403-fdb6fd609dd4)**
Soru Kökü: Yirmi iki yaşında kadın hasta, premolar-molar bölgede yavaş büyüyen ağrılı şişlik şikayetiyle başvuruyor. Radyografide ince, düz ve yer yer 'tenis raketi' şeklinde septalar içeren multiloküler lezyon saptanıyor. Operasyon sırasında lezyonun kapsülsüz olduğu ve kemik iliği boşluklarına jelatinöz (miksoid) yapıda infiltre olduğu görülüyor. Bu hasta için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Odontojenik mikzoma
Açıklama: Odontojenik mikzomalar çoğunlukla 10-30 yaş arası genç kadınlarda görülür, kapsülsüz oldukları için kemik iliğine infiltre olurlar ve ince, düz (tenis raketi/merdiven basamağı) septalar ile karakterizedirler. Jelatinöz (miksoid) kıvamda olmaları cerrahi sınırların belirlenmesini zorlaştırarak nüks riskini (%25) artırır. Hemanjiomlar da multiloküler olabilir ancak miksoid jelatinöz doku barındırmazlar.

---

### ÇİFT 70 (Benzerlik: 0.70)

**Soru 1 (ID: 663b5481-250f-43c8-a061-58ab4a65b74d)**
Soru Kökü: Mandibula posterior bölgede radyografik olarak mikst internal yapı gösteren bir lezyonun ayırıcı tanısı yapılmaktadır. Bu lezyonun Kompleks Odontoma yerine Ameloblastik Fibro-Odontoma lehine yorumlanmasını sağlayan temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Merkezinde tek bir büyük kitle yerine çoklu, dağınık olgun küçük diş sert dokuları barındırması
Açıklama: Kompleks odontoma genellikle merkezinde bir tane büyük organize olmamış sert doku kitlesi barındırırken, ameloblastik fibro-odontomada genellikle geniş bir radyolusent zemin (fibrom komponenti) içinde çoklu dağınık, küçük kalsifikasyonlar/diş sert dokuları görülür. Ayrıca kompleks odontomaların yumuşak doku komponenti belirgin şekilde daha incedir.

**Soru 2 (ID: 90441e52-3bba-4693-8266-663efe3bbd89)**
Soru Kökü: Ameloblastik fibromanın radyolojik olarak diğer multiloküler lezyonlardan ayrımıyla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Ameloblastik fibromdaki iç septalar, ameloblastomaya göre daha ince ve belirsiz sınırlıdır.
Açıklama: Ameloblastik fibromadaki septalar ameloblastomaya göre çok daha 'belirgin ve kalındır'. Bu kalın septa yapısı, ameloblastik fibromayı klasik sabun köpüğü yapan ameloblastomdan ayırır. Granüler/ince/belirsiz septa yapısı ise Dev Hücreli Granülomun karakteristik özelliğidir.

---

### ÇİFT 71 (Benzerlik: 0.70)

**Soru 1 (ID: 000c4d4c-8692-4b8c-9c40-33b5118a4a85)**
Soru Kökü: Otuz yaşında bir hastada anterior mandibulada orta hattı geçen ekspansif bir kitle tespit ediliyor. Panoramik radyografide multiloküler kistik görünüm izlenmekle birlikte, içerisindeki septaların incecik, belirsiz ve 'granüler' yapıda olduğu saptanıyor. Bu lezyon için en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (C): Santral Dev Hücreli Granüloma
Açıklama: Anterior mandibulada orta hattı geçme eğilimi gösteren, 30'lu yaşlarda görülen ve radyografik olarak septalarının 'granüler' ve belirsiz sınırlı olmasıyla karakterize multiloküler lezyon Santral Dev Hücreli Granülom'dur. Ameloblastik fibroma ve odontojenik miksomalar daha çok posterior çenede görülürler.

**Soru 2 (ID: 35d022ef-85d5-4282-9b08-0bebd79e55d1)**
Soru Kökü: Genç bir hastanın rutin radyografik incelemesinde ameloblastik fibro-odontoma teşhis edilmiştir. Bu lezyonun klinik ve radyografik tablosuyla ilgili aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (A): Lezyonun karakteristik olarak anterior maksillada kanin kronunu çevrelemesi
Açıklama: Ameloblastik fibro-odontomaların büyük çoğunluğu (%70'in üzeri) mandibulanın posterior (molar) bölgesinde izlenir. Anterior maksillada gömülü kanin kuronunu içine alan karakteristik miks kitle Adenomatoid Odontojenik Tümöre (AOT) ve kompound odontomaya aittir.

---

### ÇİFT 72 (Benzerlik: 0.70)

**Soru 1 (ID: 037e6413-49d3-4fbf-9388-4aa2d06d25c9)**
Soru Kökü: Histopatolojik ve radyografik olarak birbirine benzeyen osteoblastom ve osteoid osteoma arasındaki majör klinik ayırıcı tanı kriteri aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoblastomun osteoid osteoma kadar ağrılı olmaması ve ağrısının salisilatlar ile belirgin şekilde hafiflememesi
Açıklama: Osteoid osteomalar şiddetli (gece artan) kemik ağrısı ile karakterizedir ve bu ağrı spesifik olarak NSAİİ (salisilat) ile belirgin şekilde hafifler. Osteoblastom daha agresif bir büyüme potansiyeline sahip olmakla birlikte, ağrısı daha hafiftir ve salisilat türevleriyle rahatlamaz.

**Soru 2 (ID: 92a89548-4031-4fdd-9f72-eb3cf058f649)**
Soru Kökü: Radyografik ve klinik olarak birbirine oldukça benzeyen ameloblastik fibrom ve ameloblastoma vakalarının ayrımında klinik muayene ve yaş profilinin yanı sıra en çok dikkat edilen özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Ameloblastik fibromanın daha erken yaşlarda görülmesi ve ameloblastomadaki septaların daha belirgin/kalın olması
Açıklama: Ameloblastik fibrom (ort. yaş 15) ameloblastomaya (ort. yaş 40) göre belirgin olarak daha genç yaşta görülür. Radyografik olarak ameloblastomanın iç septaları, ameloblastik fibroma kıyasla çok daha belirgin ve kalındır. Diğer şıklardaki kalsifikasyonlar ve çakıl taşı görünümü AOT'ye, gece ağrısı ise osteoid osteomaya aittir.

---

### ÇİFT 73 (Benzerlik: 0.69)

**Soru 1 (ID: 663b5481-250f-43c8-a061-58ab4a65b74d)**
Soru Kökü: Mandibula posterior bölgede radyografik olarak mikst internal yapı gösteren bir lezyonun ayırıcı tanısı yapılmaktadır. Bu lezyonun Kompleks Odontoma yerine Ameloblastik Fibro-Odontoma lehine yorumlanmasını sağlayan temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Merkezinde tek bir büyük kitle yerine çoklu, dağınık olgun küçük diş sert dokuları barındırması
Açıklama: Kompleks odontoma genellikle merkezinde bir tane büyük organize olmamış sert doku kitlesi barındırırken, ameloblastik fibro-odontomada genellikle geniş bir radyolusent zemin (fibrom komponenti) içinde çoklu dağınık, küçük kalsifikasyonlar/diş sert dokuları görülür. Ayrıca kompleks odontomaların yumuşak doku komponenti belirgin şekilde daha incedir.

**Soru 2 (ID: 9464bc95-2c46-486c-a3ae-a25a77d31f62)**
Soru Kökü: Ameloblastomanın radyolojik ve klinik özellikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Radyografide internal yapısında mine benzeri kalsifiye radyoopak odaklar içermesi tipiktir.
Açıklama: Ameloblastoma radyografik olarak tam radyolüsentten kemik septalı (bal peteği veya sabun köpüğü) miks yapıya kadar değişebilir ancak içerisinde kalsifiye radyoopak sert doku (mine/sement) odakları barındırmaz. Kalsifiye odaklar Adenomatoid Odontojenik Tümör, Pindborg tümörü veya Odontomalar için karakteristiktir. Yumurta kabuğu etkisi, bıçak sırtı kök rezorpsiyonu ve multikistik görünüm ameloblastoma için tipik bulgulardır.

---

### ÇİFT 74 (Benzerlik: 0.69)

**Soru 1 (ID: 35d022ef-85d5-4282-9b08-0bebd79e55d1)**
Soru Kökü: Genç bir hastanın rutin radyografik incelemesinde ameloblastik fibro-odontoma teşhis edilmiştir. Bu lezyonun klinik ve radyografik tablosuyla ilgili aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (A): Lezyonun karakteristik olarak anterior maksillada kanin kronunu çevrelemesi
Açıklama: Ameloblastik fibro-odontomaların büyük çoğunluğu (%70'in üzeri) mandibulanın posterior (molar) bölgesinde izlenir. Anterior maksillada gömülü kanin kuronunu içine alan karakteristik miks kitle Adenomatoid Odontojenik Tümöre (AOT) ve kompound odontomaya aittir.

**Soru 2 (ID: 6fac8525-0846-4785-899e-1253ae73a794)**
Soru Kökü: En sık görülen odontojenik tümör grubu olan odontomalarla ilgili aşağıdaki özelliklerden hangisi **doğru değildir**?
Doğru Şık (B): Kompleks odontomalar sıklıkla anterior maksillada, kompound odontomalar ise mandibular molar bölgede izlenir.
Açıklama: Lokasyon bilgisi tam tersidir; kompound odontomaların %62'si anterior maksillada (sıklıkla kanin kronu ile), kompleks odontomaların ise %70'i mandibular birinci ve ikinci molar bölgesinde görülür. Her ikisi de etrafı radyolüsent yumuşak doku kapsülüyle çevrili radyoopak lezyonlardır ve malpozisyon/sürme gecikmesine neden olurlar.

---

### ÇİFT 75 (Benzerlik: 0.69)

**Soru 1 (ID: 46624a9f-ddc0-44f7-a440-a091ed463bce)**
Soru Kökü: Yirmi iki yaşında erkek hasta, sol alt birinci molar diş bölgesinde ağrı şikayetiyle başvuruyor; ağrının antienflamatuar ilaçlarla belirgin şekilde azaldığını belirtiyor. Radyografide, klinik olarak vital olan ilgili dişin köküne yapışık, dış korteksi radyoopak, iyi sınırlı ve etrafı radyolusent bir bantla çevrili 'tekerlek teli' görünümlü kitle izleniyor. Bu klinik tabloda en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (A): Benign sementoblastom
Açıklama: Benign sementoblastom sıklıkla genç erişkinlerde mandibular premolar/molar vital dişlerin köküne kaynaşık, tekerlek teli (wheel-spoke) görünümünde, etrafı radyolusent kapsüllü radyoopak kitlelerdir ve NSAİİ ile azalan lokalize ağrıya neden olurlar. Periapikal sklerozan osteit yumuşak doku kapsülü içermez ve genellikle devital dişlerde görülür.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 76 (Benzerlik: 0.69)

**Soru 1 (ID: f5778882-24b2-46fa-981f-dd5e0775edcf)**
Soru Kökü: 42 yaşındaki erkek hasta, alt çene sağ tarafında yavaş büyüyen, ağrısız ve fasiyal asimetriye neden olan bir şişlik nedeniyle kliniğe başvurmuştur. Muayenede o bölgedeki dişlerde mobilite saptanmıştır. Hastanın yaşı, cinsiyeti ve lezyonun davranışı göz önüne alındığında, açık ara en yaygın klinik bulgu veren odontojenik tümör olması sebebiyle ilk düşünülmesi gereken kemik patolojisi tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Ameloblastoma
Açıklama: Ameloblastomalar ortalama 40 yaş civarında ve erkeklerde nispeten daha sık saptanan, fasiyal asimetri, diş mobilitesi ve yavaş büyüme profili ile klinikte semptom veren en yaygın odontojenik tümördür. Adenomatoid odontojenik tümörler (AOT) genellikle kadınlarda ve daha genç yaş grubunda (ikinci dekad) görülürken, sementoblastoma diş köküne yapışık radyoopak kitle oluşturur. Hastanın yaş aralığı ve progresif ekspansiyon bulguları ameloblastomayı destekler.

**Soru 2 (ID: f5934ad6-a68b-4361-be7e-453339bdb9fb)**
Soru Kökü: 35 yaşında kadın hasta kliniğe başvuruyor. Alınan panoramik grafide mandibula sağ molar bölgesinde, çevresi radyolusent bir sınır bandıyla çevrili tekil, sınırları iyi kalsifiye bir lezyon gözleniyor. İlgili diş vitaldir. Bu lezyonun Sementoblastoma veya Kompleks Odontoma olmadığı doğrulanırsa; ayırıcı tanıda yer alan Semento-Ossifiye Fibrom'u, Periapikal Osseöz Displazi'den (POD) kesin olarak ayıran karakteristik klinik/radyografik bilgi aşağıdakilerden hangisidir?
Doğru Şık (C): POD'un genellikle multifokal (çoklu odaklı) izlenip kapsül barındırmaması, ossifiye fibromun ise soliter ve kapsüllü konsantrik büyümesi
Açıklama: Periapikal semental/osseöz displaziler sıklıkla multifokaldir (özellikle anterior mandibula veya çoklu posterior alanlar), lezyonlar etrafında iyi sınırlı ve uniform bir yumuşak doku kapsülü bulunmaz ve agresif konsantrik ekspansiyon sergilemezler. Ossifiye fibroma ise tipik olarak soliter (tek), kapsüllü, konsantrik kemik genişlemesi yapan gerçek bir tümördür. POD'da dişler daima vitaldir (A yanlış).

---

### ÇİFT 77 (Benzerlik: 0.69)

**Soru 1 (ID: 4a10a00b-a645-4440-bdba-95e5583ae7b2)**
Soru Kökü: Kanselöz kemik içerisine doğru kompakt kemiğin lokalize büyümesi ile karakterize olan enostozların (osteoskleroz) çenelerdeki en yaygın radyografik lokalizasyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Mandibulanın premolar ve molar bölgesi
Açıklama: Enostozlar (kemiğin içe büyümesi) sıklıkla alt çenede ve özellikle premolar-molar dişlerin kökleri etrafında odaklanan izole sklerotik bölgeler olarak tespit edilir. Dışa doğru büyüyen ekzostozlardan bu yönüyle ayrılırlar. Dişin mevcudiyetinden bağımsız gelişen statik yapılar olup kemiğin medüller kavitesi içinde sınırlı kalırlar.

**Soru 2 (ID: 844f2647-0766-47a4-becf-79736944b8cb)**
Soru Kökü: Elli yaşında asemptomatik erkek hastanın rutin panoramik radyografisinde mandibulada iyi sınırlı, yoğun radyoopak bir kemik kitlesi saptanmıştır. Çenelerde görülen osteomaların klasik predileksiyon bölgesi göz önüne alındığında, bu lezyonun mandibulanın en sık hangi bölgesinde yerleşmesi beklenir?
Doğru Şık (A): Posterior korpus inferior sınırı veya ramus lingual yüzü
Açıklama: Osteomalar çenelerde en sık mandibula posteriorunda, molarlar bölgesinin altındaki inferior mandibular sınırda veya ramusun lingual (iç) yüzeyinde kortikal kemikten dışarıya doğru büyüyen ekzofitik, kemik sertliğinde radyoopak kitleler olarak yerleşim gösterirler.

---

### ÇİFT 78 (Benzerlik: 0.69)

**Soru 1 (ID: 7b29cebc-23ce-49ba-965e-04287d7c826b)**
Soru Kökü: Kalsifiye Epitelyal Odontojenik Tümör (KEOT / Pindborg Tümörü) radyolojik olarak diğer odontojenik kist ve tümörlerle karışabilir. Bir radyolüsent lezyonu dentigeröz kist veya ameloblastomadan ziyade KEOT lehine yorumlatacak en karakteristik radyografik internal bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Gömülü dişin kronuna çok yakın komşuluktaki radyoopasiteler (kalsifikasyonlar)
Açıklama: KEOT'un (Pindborg Tümörü) en karakteristik diagnostik bulgusu, kist benzeri radyolüsent alanın içerisinde, özellikle gömülü diş kronuna yakın lokalize olan radyoopak kalsifikasyon odaklarıdır (Driven snow / kar fırtınası görünümü). Bal peteği veya bıçak sırtı kök rezorpsiyonu daha çok ameloblastoma lehinedir. Güneş ışını paterni ise hemanjiom (veya osteosarkom) bulgusudur.

**Soru 2 (ID: f7bcfe61-8bcb-4d31-ad71-2acf201cc633)**
Soru Kökü: Adenomatoid odontojenik tümörün (AOT - foliküler tip) tamamen radyolüsent olduğu erken dönemlerinde dentigeröz kistten ayrımında kullanılan en spesifik radyografik farklılık aşağıdakilerden hangisidir?
Doğru Şık (A): AOT lezyonunun ilgili dişin mine-sement birleşiminden (CEJ) daha apikaline inerek kökü sarması
Açıklama: Dentigeröz kist fizyolojik olarak foliküler boşluğun genişlemesidir ve her zaman tam olarak mine-sement birleşimine (CEJ) tutunur, köke inmez. Ancak AOT (foliküler varyantı) radyolüsent döneminde CEJ'yi geçerek daha apikale (dişin kökünün yarısına kadar) uzanır. Bu özellik onu dentigeröz kistten radyografik olarak ayırır.

---

### ÇİFT 79 (Benzerlik: 0.69)

**Soru 1 (ID: c7998cb8-2cc3-4429-92ae-b65dd18b6620)**
Soru Kökü: Alt çene premolar bölgesinden çekilen periapikal bir radyografta, o bölgedeki dişlerin kökleri üzerine süperpoze olmuş ve kök anatomisini izlemeyi zorlaştıran yoğun, homojen radyopasiteler izlenmektedir. Hastanın hiçbir ağrı veya şikayeti yoktur ve dişler vitaldir. Bu radyografik görünüme en büyük olasılıkla yol açan lokal varyasyon aşağıdakilerden hangisidir?
Doğru Şık (B): Geniş torus mandibularis
Açıklama: Özellikle ön ve premolar bölgeden alınan mandibular periapikal filmlerde torus mandibularisler diş kökleri üzerine düşerek dens, süperpoze radyopasiteler oluştururlar. Sementoblastom diş apeksine bağlı ve etrafında radyolüsent halosu olan bir tümörken, torus mandibularis çevre kemikten sadece kalınlaşma olarak ayırt edilir. Klinik muayenede lingual kortikal şişliğin görülmesi tanıyı kesinleştirir.

**Soru 2 (ID: dc53e52f-a02d-43f6-8188-6204b9c9b1df)**
Soru Kökü: 35 yaşındaki kadın hastanın alt birinci molar dişinin apikalinde iyi sınırlı homojen bir radyopasite izlenmektedir. İlgili diş çürüksüz, canlı ve semptomsuzdur. Radyopasitenin periapikal sklerozan osteit yerine bir enostoz (kemik adacığı) olduğuna karar vermede en kritik radyografik ayırıcı bulgu aşağıdakilerden hangisidir?
Doğru Şık (B): Apikal periodontal ligament aralığında iltihabi bir genişlemenin bulunmaması
Açıklama: Periapikal sklerozan osteit, bir enflamasyon kaynağına (çürük, pulpa nekrozu) reaktif olarak gelişen ve apikal periodontal ligament aralığında tipik genişlemeye neden olan bir kemik reaksiyonudur. Enostozlarda ise PDL tamamen intakt ve normal genişliktedir; enflamasyon emaresi barındırmazlar. Her iki lezyon da radyolüsent kapsül içermez, bu da sementoblastomadan ayrılmalarını sağlar.

---

### ÇİFT 80 (Benzerlik: 0.69)

**Soru 1 (ID: a0a4f8ea-2928-4506-8843-16838d89b777)**
Soru Kökü: Otuz yaşında kadın hastanın mandibula posterior bölgesinde, sferik ve belirgin sınırlı, etrafı ince radyolusent bir bant (kapsül) ile çevrili homojen radyoopak kitle saptanıyor. Lezyon çenede konsantrik ekspansiyon yapmış ve komşu dişleri iterek yer değiştirmiştir. Bu lezyonun Fibröz Displaziden ayrımını sağlayan en kritik radyografik özellik aşağıdakilerden hangisidir?
Doğru Şık (E): İyi sınırlı olması ve etrafında fibröz kapsülü temsil eden radyolusent bandın bulunması
Açıklama: Semento-ossifiye fibromun fibröz displaziden ayrımındaki en önemli fark sınır karakteridir. Fibröz displazi çevre kemik doku ile karışmış (sınırları belirsiz) bir buzlu cam paterni sunarken, ossifiye fibromların etrafında fibröz kapsülü temsil eden belirgin bir radyolusent bant ve kortikal sınır vardır; konsantrik büyürler.

**Soru 2 (ID: afddf703-9190-44d3-8f9e-7dde2f52bb6b)**
Soru Kökü: Yirmi altı yaşında erkek hastanın alt birinci molar dişinin periapikal bölgesinde 'tekerlek teli' görünümünde radyoopak bir kitle izlenmiştir. Kitle periferal radyolüsent bir bant ile sınırlandırılmıştır ve diş ile kaynaşmıştır. Ayırıcı tanıda yer alan Periapikal Sklerozan Osteit (PSO) ile bu kitle (Benign Sementoblastom) arasındaki en temel radyolojik/histolojik fark aşağıdakilerden hangisidir?
Doğru Şık (D): PSO ve dens kemik adalarının sementoblastomadaki gibi yumuşak doku kapsülü içermemesi
Açıklama: Benign sementoblastom, kortikal kemiğin hemen altında veya periferinde radyolüsent bir bant (yumuşak doku kapsülü) içerirken; reaktif bir süreç olan Periapikal Sklerozan Osteit (PSO) ve dens kemik adaları bu tarz bir kapsül barındırmazlar. Ayrıca sementoblastom vital dişlerde izlenirken, PSO devital (inflamatuar) diş apekstlerinde gelişir.

---

