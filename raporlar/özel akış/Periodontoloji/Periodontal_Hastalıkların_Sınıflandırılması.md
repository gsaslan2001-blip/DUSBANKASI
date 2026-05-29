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

**Soru 1 (ID: 4f6d3523-1615-472c-9d70-88d73727a89f)**
Soru Kökü: Dental plak birikimi ile iyileşmeyen, klinik kazıma ile dokudan uzaklaştırılamayan ve biyofilmden bağımsız gingival hastalıklar altındaki 'Neoplazmalar' ana başlığında yer alan premalign özellikteki lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Lökoplaki
Açıklama: Lökoplaki, epitel kaynaklı olup kazınamayan beyaz plaklarla karakterize ve 2017 gingival hastalıklar sınıflandırmasında direkt olarak 'Neoplazmalar - Premalign' başlığı altında yer alan bir hastalıktır. Squamous hücreli karsinoma distraktörü yanlıştır, çünkü bu karsinom premalign değil doğrudan 'Malign neoplazmalar' alt başlığında değerlendirilir. Candidiozis kazınabilir bir mantar plağı iken, lökoplaki epitelyal kalınlaşma veya displazi içerir.

**Soru 2 (ID: d913d77f-69c1-4e34-a7fc-69ceabdd934b)**
Soru Kökü: Biyofilm tarafından indüklenmeyen gingival hastalıklar sınıflandırmasında, premalign lezyonlar kategorisinde yer alan patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Eritroplaki
Açıklama: Eritroplaki ve lökoplaki, biyofilmden bağımsız gingival hastalıklar içindeki neoplazmalar başlığında 'premalign' (kanser öncülü) lezyonlar olarak sınıflandırılır. Skuamöz hücreli karsinoma ise artık premalign değil, doğrudan malign bir neoplazmadır. Bu ayrım, dokudaki displazinin invaziv kansere dönüşüm potansiyelini evrelendirmek açısından kritiktir.

---

### ÇİFT 2 (Benzerlik: 0.81)

**Soru 1 (ID: 110b0de8-9c01-4e97-bab5-5cd36f4799e0)**
Soru Kökü: Klasik periodontitis mekanizmasından bağımsız olarak, sadece kendi patogeneziyle periodontal dokuların doğrudan kaybıyla sonuçlanan sistemik hastalık ve durumlar tanımlanmıştır. Aşağıdakilerden hangisi bu gruba dahil olan hastalıklardan biri **değildir**?
Doğru Şık (A): Papillon Lefevre sendromu
Açıklama: Papillon Lefevre sendromu 'Periodontal inflamasyona etki ederek periodontal dokuların kaybına major etkisi olan genetik hastalıklar' altındadır; yani inflamatuar periodontitisin patogenezini destekler. Ancak Langerhans histiyositoz, hiperparatiroidizm (brown tümör), Gorham-Stout ve dev hücreli tümörler diş eti iltihabından tamamen bağımsız olarak primer kemik yıkım tümörleri/kistleri gibi çalışır. Bu ayrım kemik kaybının plak ilişkili inflamasyon kökenli olup olmadığını belirlemede esastır.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 3 (Benzerlik: 0.80)

**Soru 1 (ID: 0807306f-ab07-47e1-9b50-43e6fce0c096)**
Soru Kökü: Aşağıdakilerden hangisi periodontitis olmayan bir hastada periodontal apseye yol açabilecek 'minör anatomik değişiklikler' arasında yer **almaz**?
Doğru Şık (D): Odontodisplazi
Açıklama: Odontodisplazi, dişin tüm sert dokularının gelişimini lokalize olarak bozan, hayalet diş görünümüne yol açan şiddetli ve kompleks bir anatomik gelişim anomalisidir ve 'şiddetli anatomik değişiklikler' başlığındadır. Mine incisi ve semental tears ise genel morfolojiyi bozmadan lokalize plak birikimi yaratan 'minör anatomik değişiklikler'dir. Odontodisplazi, etkilenen dokuların yaygınlığı açısından minör kategoride olamaz.

**Soru 2 (ID: 0fdb3db5-6fa0-4aa1-941b-a5896a774c95)**
Soru Kökü: Periodontitis öyküsü olmayan bir hastada gelişen periodontal apsenin etiyolojisi incelenirken çeşitli anatomik değişiklikler değerlendirilmektedir. Aşağıdakilerden hangisi bu patolojiye zemin hazırlayan 'şiddetli anatomik değişiklikler' kategorisinde yer alır?
Doğru Şık (E): İnvagine diş
Açıklama: İnvagine diş, dens eveginatus ve odontodisplazi gibi dişin tüm formunu veya invaginasyon derecesini bozan gelişimsel defektler 'şiddetli anatomik değişiklikler' olarak apselere zemin hazırlar. Mine incisi veya semental tears gibi kök yüzeyindeki ufak çıkıntı/yırtıklar ise 'minör anatomik değişiklikler' kategorisindedir. Şiddetli anatomik defektler çok daha derin ve temizlenmesi imkansız mikrobiyal nişler yaratır.

---

### ÇİFT 4 (Benzerlik: 0.80)

**Soru 1 (ID: 708f2f1d-3974-4570-b052-cb719f7e8568)**
Soru Kökü: Periodontitis hastalarının evrelendirmesinde aşağıdakilerden hangisi hastalığın doğrudan Evre 3 veya Evre 4 olduğuna işaret eden spesifik komplekslik faktörlerinden biridir?
Doğru Şık (B): Mastikatör disfonksiyon bulunması
Açıklama: Mastikatör disfonksiyon, ciddi doku kaybı ve oklüzal instabilite nedeniyle oluşan fonksiyon kaybını gösterir ve doğrudan Evre 3 veya Evre 4 komplekslik faktörüdür. Moderate kret defekti ve horizontal kemik kaybı Evre 2 sınırlarında kalabilirken, disfonksiyon tüm sistemik çiğneme dengesini bozduğu için ileri evre markerıdır. Fonksiyon kaybı, kompleks tedavileri (Evre 3/4) zorunlu kılar.

**Soru 2 (ID: 9ad7d80d-ad68-49cf-a351-868ae1d58b1f)**
Soru Kökü: Periodontitis hastalarında evre belirlenirken komplekslik (karmaşıklık) faktörleri teşhisi daha yüksek bir evreye kaydırır. Aşağıdakilerden hangisi Evre 3 periodontitis'e ait bir komplekslik faktörü **değildir**?
Doğru Şık (C): Çoğunlukla horizontal kemik kaybının görülmesi
Açıklama: Çoğunlukla horizontal kemik kaybı, kompleksliğin düşük olduğu Evre 1 ve Evre 2'nin tipik özelliğidir ve hastalığı Evre 3'e taşıyan bir karmaşıklık faktörü değildir. Evre 3'e geçiş için vertikal kemik kaybı (≥3mm), derin cepler (≥6mm) veya sınıf 2/3 furkasyon tutulumu gibi anatomik cerrahi zorluk yaratan faktörlerin varlığı şarttır. Komplekslik faktörleri hastalığın cerrahi tedavi ihtiyacını doğrudan belirleyen majör elementlerdir.

---

### ÇİFT 5 (Benzerlik: 0.80)

**Soru 1 (ID: 25a84d86-d935-4365-bab6-088f823dd523)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar içindeki malign neoplazmalardan biri **değildir**?
Doğru Şık (D): Lökoplaki
Açıklama: Lökoplaki, invaziv bir kanser olmayıp epiteldeki hücresel değişimleri ifade eden premalign bir lezyondur. Skuamöz hücreli karsinoma, lösemik hücre infiltrasyonu ve lenfomalar (Hodgkin ve Non-Hodgkin) ise gingivayı etkileyebilen kesin malign neoplazmalardır. Hücrelerin bazal membranı aşıp invaze olma durumu bu kesin ayrımın histolojik temelidir.

**Soru 2 (ID: ec98f11f-0663-4343-beae-8ad7f8ee5eda)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar ana başlığında incelenen 'Epulides (Reaktif süreçler)' kategorisine ait alt patolojilerden biri **değildir**?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, epitelin displastik değişiklikler barındırabilen, sürtünme veya tütün gibi etkenlerle tetiklenen ancak potansiyel olarak malignleşebilen 'Premalign Neoplazmalar' grubunda yer alır; reaktif bir süreç olan epulides grubuna ait değildir. Kalsifiye fibroblastik granuloma distraktörü kafa karıştırıcı olabilir, ancak bu lezyon mikroskobik olarak kalsifikasyon alanları içeren bağ dokusu büyümesi olup epulides (reaktif süreçler) klasifikasyonu içindedir. Epulides grubu lokal irritasyona verilen aşırı ama masum tepkileri kapsar.

---

### ÇİFT 6 (Benzerlik: 0.79)

**Soru 1 (ID: 0fdb3db5-6fa0-4aa1-941b-a5896a774c95)**
Soru Kökü: Periodontitis öyküsü olmayan bir hastada gelişen periodontal apsenin etiyolojisi incelenirken çeşitli anatomik değişiklikler değerlendirilmektedir. Aşağıdakilerden hangisi bu patolojiye zemin hazırlayan 'şiddetli anatomik değişiklikler' kategorisinde yer alır?
Doğru Şık (E): İnvagine diş
Açıklama: İnvagine diş, dens eveginatus ve odontodisplazi gibi dişin tüm formunu veya invaginasyon derecesini bozan gelişimsel defektler 'şiddetli anatomik değişiklikler' olarak apselere zemin hazırlar. Mine incisi veya semental tears gibi kök yüzeyindeki ufak çıkıntı/yırtıklar ise 'minör anatomik değişiklikler' kategorisindedir. Şiddetli anatomik defektler çok daha derin ve temizlenmesi imkansız mikrobiyal nişler yaratır.

**Soru 2 (ID: 384396c4-4082-46fe-af3c-1ea01d772169)**
Soru Kökü: 2017 sınıflandırmasına göre, periodontitis olmayan hastalarda periodontal apse gelişimine neden olabilen ve kök yüzeyi morfolojisini majör derecede bozan lokal faktörlerden 'şiddetli anatomik değişiklikler' arasında aşağıdakilerden hangisi bulunur?
Doğru Şık (B): Dens eveginatus
Açıklama: Dens eveginatus, normal diş konturunun dışında tüberkül/ek eklenti oluşumuyla karakterize şiddetli bir anatomik değişikliktir ve cep formasyonuna, ardından apse gelişimine yatkınlık yaratır. Çatlak diş sendromu ciddi kök hasarıdır; impaksiyon dışarıdan giren yabancı cisimdir. Semental tears ise sadece kök yüzeyi düzeyinde kalan minör bir değişikliktir.

---

### ÇİFT 7 (Benzerlik: 0.79)

**Soru 1 (ID: 0cd39ffe-649b-4061-ad18-89bb57799589)**
Soru Kökü: Endodontik-periodontal lezyonların sınıflandırılmasında, kök hasarlı lezyonlar prognozu en fazla etkileyen spesifik bir alt grup oluşturur. Aşağıdakilerden hangisi 'Kök hasarlı endodontik-periodontal lezyonlar' grubuna giren durumlardan biridir?
Doğru Şık (D): İyatrojenik kök kanalı veya pulpa odası perforasyonu
Açıklama: Endodontik tedaviler veya post hazırlıkları sırasında meydana gelen iyatrojenik pulpa odası veya kök kanalı perforasyonları, enfeksiyonun periodonsiyuma doğrudan açıldığı majör defektlerdir ve 'Kök hasarlı EPL' kategorisindedir. Diğer kök hasarlı durumlar kök kırıkları ve eksternal kök rezorpsiyonlarıdır. Dişin yüzündeki derin cepler ise kök hasarsız EPL sınıflandırma parametreleridir.

**Soru 2 (ID: b709644c-84f1-44a1-a9d7-a4b60cf136b0)**
Soru Kökü: Endodontik-Periodontal lezyonların (EPL) gelişmesinde iatrojenik veya travmatik faktörler rol oynayabilir. Aşağıdakilerden hangisi kök hasarlı endodontik-periodontal lezyon sınıfına giren durumlardan biri **değildir**?
Doğru Şık (B): Pulpa nekrozuna bağlı apikal patoloji gelişimi
Açıklama: Pulpa nekrozu (kök hasarsız) endodontik enfeksiyonun foraminal veya lateral kanallardan periodonsiyuma sızmasıyla oluşan primer mikrobiyal enfeksiyon bazlı bir endodontik-periodontal lezyondur; anatomik bir kök hasarı içermez. Perforasyonlar, rezorpsiyonlar, çatlaklar ve kırıklar ise kök bütünlüğünün fiziksel olarak bozulduğu (kök hasarlı) durumlardır. Hasarlı lezyonların klinik prognozu hasarın yerine ve seviyesine bağlı olduğu için hasarsız mikrobiyal lezyonlardan daha kötüdür.

---

### ÇİFT 8 (Benzerlik: 0.79)

**Soru 1 (ID: 25a84d86-d935-4365-bab6-088f823dd523)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar içindeki malign neoplazmalardan biri **değildir**?
Doğru Şık (D): Lökoplaki
Açıklama: Lökoplaki, invaziv bir kanser olmayıp epiteldeki hücresel değişimleri ifade eden premalign bir lezyondur. Skuamöz hücreli karsinoma, lösemik hücre infiltrasyonu ve lenfomalar (Hodgkin ve Non-Hodgkin) ise gingivayı etkileyebilen kesin malign neoplazmalardır. Hücrelerin bazal membranı aşıp invaze olma durumu bu kesin ayrımın histolojik temelidir.

**Soru 2 (ID: d913d77f-69c1-4e34-a7fc-69ceabdd934b)**
Soru Kökü: Biyofilm tarafından indüklenmeyen gingival hastalıklar sınıflandırmasında, premalign lezyonlar kategorisinde yer alan patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Eritroplaki
Açıklama: Eritroplaki ve lökoplaki, biyofilmden bağımsız gingival hastalıklar içindeki neoplazmalar başlığında 'premalign' (kanser öncülü) lezyonlar olarak sınıflandırılır. Skuamöz hücreli karsinoma ise artık premalign değil, doğrudan malign bir neoplazmadır. Bu ayrım, dokudaki displazinin invaziv kansere dönüşüm potansiyelini evrelendirmek açısından kritiktir.

---

### ÇİFT 9 (Benzerlik: 0.78)

**Soru 1 (ID: 25a84d86-d935-4365-bab6-088f823dd523)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar içindeki malign neoplazmalardan biri **değildir**?
Doğru Şık (D): Lökoplaki
Açıklama: Lökoplaki, invaziv bir kanser olmayıp epiteldeki hücresel değişimleri ifade eden premalign bir lezyondur. Skuamöz hücreli karsinoma, lösemik hücre infiltrasyonu ve lenfomalar (Hodgkin ve Non-Hodgkin) ise gingivayı etkileyebilen kesin malign neoplazmalardır. Hücrelerin bazal membranı aşıp invaze olma durumu bu kesin ayrımın histolojik temelidir.

**Soru 2 (ID: 4f6d3523-1615-472c-9d70-88d73727a89f)**
Soru Kökü: Dental plak birikimi ile iyileşmeyen, klinik kazıma ile dokudan uzaklaştırılamayan ve biyofilmden bağımsız gingival hastalıklar altındaki 'Neoplazmalar' ana başlığında yer alan premalign özellikteki lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Lökoplaki
Açıklama: Lökoplaki, epitel kaynaklı olup kazınamayan beyaz plaklarla karakterize ve 2017 gingival hastalıklar sınıflandırmasında direkt olarak 'Neoplazmalar - Premalign' başlığı altında yer alan bir hastalıktır. Squamous hücreli karsinoma distraktörü yanlıştır, çünkü bu karsinom premalign değil doğrudan 'Malign neoplazmalar' alt başlığında değerlendirilir. Candidiozis kazınabilir bir mantar plağı iken, lökoplaki epitelyal kalınlaşma veya displazi içerir.

---

### ÇİFT 10 (Benzerlik: 0.78)

**Soru 1 (ID: 128382fe-fd9e-4477-b7fe-07a9e454f81f)**
Soru Kökü: Gingival pigmentasyonların etiyolojisi ve sınıflandırması ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Amalgam renklenmeleri bakteriyel biyofilmin pigmentasyonu sonucu oluşan bir enfeksiyon tablosudur.
Açıklama: Amalgam renklenmesi (dövmesi), bakteriyel biyofilmin pigmentasyonu değil; restoratif işlem sırasında dişeti dokusu içine giren ve orada kalan gümüş/amalgam partiküllerinin makrofajlar tarafından fagosite edilmesiyle oluşan ekzojen bir renklenmedir. Diğer tüm şıklar pigmentasyonun fizyolojik, kimyasal veya farmakolojik mekanizmalarını doğru tanımlar. Bakteriyel etiyoloji bu tabloda tamamen dışlanır.

**Soru 2 (ID: c6ab1ae8-d460-4ec2-8e7c-b6685c864d0a)**
Soru Kökü: Aşağıdakilerden hangisi 2017 sınıflandırmasında belirtilen gingival pigmentasyon nedenlerinden biri **değildir**?
Doğru Şık (D): Fibröz epulis
Açıklama: Fibröz epulis, biyofilm tarafından indüklenmeyen hastalıklarda 'reaktif süreçler' grubunda yer alan lokalize bir doku büyümesidir ve pigmentasyon hastalığı değildir. Melanoplakia, sigara, ilaçlar ve amalgam ise gingival dokuda melanin veya ekzojen materyal birikimi ile karakterize pigmentasyon nedenleridir. Reaktif kitle ile renk değişimi lezyonlarının ayrımı klinik morfolojiye dayanır.

---

### ÇİFT 11 (Benzerlik: 0.78)

**Soru 1 (ID: 4e27fef6-4d82-41a5-95db-defcf5a87dd4)**
Soru Kökü: Yedi yaşında erkek çocuk, 38.5 derece ateş, yutkunma zorluğu ve elleri ile ayak tabanlarında ortaya çıkan kaşıntılı makülopapüler veziküller şikayetiyle başvuruyor. Ağız içi muayenesinde gingiva ve oral mukozada plak kontrolünden bağımsız olarak gelişen ağrılı eritem ve veziküler ülserasyonlar izleniyor. 2017 sınıflamasına göre bu spesifik viral gingival enfeksiyonun en olası etkeni aşağıdakilerden hangisidir?
Doğru Şık (C): Coxackie virus
Açıklama: El, ayak ve ağız içinde eş zamanlı görülen veziküler lezyonlar ile karakterize olan tablo 'El-ayak-ağız hastalığı' olup etkeni viral orijinli Coxackie virüsüdür. Varicella zoster distraktörü yanlıştır çünkü suçiçeğinde döküntüler gövdede yoğunlaşan, polimorfik (aynı anda makül, papül, vezikül, kabuk) yapıdadır ve el/ayak tabanına spesifik bir lokalizasyon göstermez. Tedavisi semptomatik olup, lezyonlar biyofilm eliminasyonu ile iyileşmez.

**Soru 2 (ID: 5268ec0e-7e86-493c-ad3c-6102c1bdc7d8)**
Soru Kökü: Primer enfeksiyonu genellikle çocukluk çağında döküntülü bir tabloyla seyreden, reaktivasyonunda ise tek taraflı dermatom boyunca ağrılı gingival ve mukozal lezyonlara yol açan spesifik viral orijinli etken aşağıdakilerden hangisidir?
Doğru Şık (B): Varicella zoster
Açıklama: Varicella zoster, primer enfeksiyonda suçiçeği, sekonder reaktivasyonda ise trigeminal sinir dalları boyunca tek taraflı (unilateral) ağrılı veziküler döküntüler (zona) yapan, biyofilmden bağımsız viral bir ajandır. Coxackie virüs distraktörü yanlıştır, zira bu virüs dermatomal reaktivasyon (zona benzeri tek taraflı dağılım) göstermez, genellikle çocukluk çağında bilateral simetrik el-ayak-ağız hastalığı yapar. Bu viral lezyonlar gingivada şiddetli ülserasyon ve ağrı ile seyreder.

---

### ÇİFT 12 (Benzerlik: 0.77)

**Soru 1 (ID: e75a8387-c694-4a8d-ad69-d0f964258e85)**
Soru Kökü: Altmış yaşında kadın hasta, arka dişlerini kaybetmesinin ardından ön dişlerinin aralarının açılmasından ve çiğneme kuvvetinin azalmasından şikayetçidir. Klinik muayenede yaygın kemik kaybı, posterior destek kaybına sekonder 'ısırma zayıflığı (bite collapse)' saptanmıştır. Bu klinik bulgu doğrultusunda hastanın periodontitis evresi nedir?
Doğru Şık (D): Evre 4
Açıklama: Bite collapse (ısırma zayıflığı), posterior desteğin çökmesi sonucu anterior dişlere aşırı yük binmesini ve dikey boyutun düşmesini ifade eder. Bu majör fonksiyonel ve anatomik yıkım, dentisyon kaybı potansiyelini simgelediği için hastayı Evre 3 kompleksliğine ilave olarak doğrudan Evre 4'e taşır. Evre 4 sınıflandırması çoklu disiplinli kompleks oklüzal rehabilitasyon ihtiyacı olan hastaları tanımlar.

**Soru 2 (ID: f97e2969-7d08-4dca-b186-7de78342fb77)**
Soru Kökü: Altmış yaşında erkek hasta kliniğe başvuruyor. En fazla kayıp olan maksiller molar bölgedeki interdental klinik ataşman kaybı 6 mm'dir. Radyografik kemik kaybı kökün apikal üçlüsüne kadar uzanmaktadır ve hastanın periodontitis kaynaklı olarak kaybettiği diş sayısı 5'tir. Bu hastanın güncel sınıflandırmaya göre periodontitis evresi aşağıdakilerden hangisidir?
Doğru Şık (D): Evre 4
Açıklama: Periodontitis kaynaklı kaybedilen diş sayısının 5 veya daha fazla olması (≥ 5 diş), olguyu klinik ataşman ve kemik kaybından bağımsız olarak doğrudan Evre 4 kompleksliğine taşır. Evre 3'te periodontitis kaynaklı diş kaybı ≤ 4 diştir, bu ince sınır Evre 3 ile 4'ü ayıran en önemli parametredir. Ayrıca apikal üçlüye uzanan yıkım ve ≥ 5 mm CAL varlığı da şiddetli form olan Evre 4 tablosunu desteler.

---

### ÇİFT 13 (Benzerlik: 0.77)

**Soru 1 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

**Soru 2 (ID: d979b584-6c8e-4e27-8c2a-e3e20f2c0523)**
Soru Kökü: Aşağıdaki hastalıklardan hangisi 2017 Periodontal Hastalıklar Sınıflamasında, biyofilm tarafından indüklenmeyen gingival hastalıklarda 'Hipersensitivite Reaksiyonları' alt başlığında değerlendirilmektedir?
Doğru Şık (B): Erythema multiforme
Açıklama: Erythema multiforme, akut seyirli, immün kompleks aracılı bir aşırı duyarlılık (hipersensitivite) reaksiyonudur ve kontakt alerji/plasma cell gingivitis ile aynı kategoride yer alır. Liken planus ve Pemfigus vulgaris distraktörleri yanlıştır, çünkü bu hastalıklar 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' kategorisine dâhildir. Erythema multiforme klinik olarak sıklıkla hedef tarzı deri lezyonları ve kanamalı kabuklu dudak lezyonları ile izlenir.

---

### ÇİFT 14 (Benzerlik: 0.77)

**Soru 1 (ID: 0359b6ea-b5ba-4d1b-a8a8-3db0f07c9cc0)**
Soru Kökü: Travmatik oklüzal kuvvetler, bölgenin adaptasyon kapasitesini aşarak periodonsiyumda yaralanmaya yol açan kuvvetlerdir. Aşağıdakilerden hangisi bu kuvvetlere sekonder olarak ortaya çıkan spesifik klinik belirti veya semptomlardan biri **değildir**?
Doğru Şık (A): Marjinal dokularda pürülan eksüda (süpürasyon)
Açıklama: Pürülan eksüda (süpürasyon) bakteriyel bir enfeksiyon ve piyojenik yanıtın sonucudur, saf mekanik bir yüklenme olan okluzal travmanın birincil belirtisi olamaz. Fremitus, diş migrasyonu, termal hassasiyet ve okluzal aşınma ise diş ve çevre dokularının biyomekanik stres altında sergilediği doğrudan yanıtlar ve mikrotravma bulgularıdır. Okluzal travma tek başına enfeksiyon yaratmaz.

**Soru 2 (ID: b6e5e75e-5390-4899-b8de-8b6459941166)**
Soru Kökü: Doku adaptasyon kapasitesini aşan oklüzal yüklerin oluşturduğu travmatik oklüzal kuvvetler, periodontal ligament ve kök yüzeyinde belirgin hasarlar yaratır. Aşağıdakilerden hangisi travmatik oklüzal kuvvetin diş ve destek dokulardaki klasik bulgularından biri **değildir**?
Doğru Şık (A): Radyografik olarak daralmış periodontal ligament aralığı
Açıklama: Travmatik oklüzal kuvvetler periodontal ligament aralığında kompresyon ve nekroz oluşturarak radyografik olarak daralmaya değil, tam tersine kretal bölgede huni şeklinde 'genişlemiş' bir periodontal bağ aralığına neden olurlar. Fremitus, hipersementoz ve kök rezorpsiyonu dokunun bu yıkıcı strese karşı verdiği adaptif ve patolojik klasik hücresel yanıtlardır. Kuvvet ortadan kaldırıldığında mobilite ve aralık genişlemesi reverzibl karakterdedir.

---

### ÇİFT 15 (Benzerlik: 0.76)

**Soru 1 (ID: 110b0de8-9c01-4e97-bab5-5cd36f4799e0)**
Soru Kökü: Klasik periodontitis mekanizmasından bağımsız olarak, sadece kendi patogeneziyle periodontal dokuların doğrudan kaybıyla sonuçlanan sistemik hastalık ve durumlar tanımlanmıştır. Aşağıdakilerden hangisi bu gruba dahil olan hastalıklardan biri **değildir**?
Doğru Şık (A): Papillon Lefevre sendromu
Açıklama: Papillon Lefevre sendromu 'Periodontal inflamasyona etki ederek periodontal dokuların kaybına major etkisi olan genetik hastalıklar' altındadır; yani inflamatuar periodontitisin patogenezini destekler. Ancak Langerhans histiyositoz, hiperparatiroidizm (brown tümör), Gorham-Stout ve dev hücreli tümörler diş eti iltihabından tamamen bağımsız olarak primer kemik yıkım tümörleri/kistleri gibi çalışır. Bu ayrım kemik kaybının plak ilişkili inflamasyon kökenli olup olmadığını belirlemede esastır.

**Soru 2 (ID: 69e00f25-8e90-4877-9938-4726a9358616)**
Soru Kökü: Periodontal destekleyici dokuları etkileyen sistemik hastalıklar sınıflandırmasında, periodontal inflamasyona etki ederek yıkıma major katkısı olan hastalıklardan hangisi genetik kökenli bir immünolojik hastalık **değildir**?
Doğru Şık (B): Epidermolizis bülloza
Açıklama: Epidermolizis bülloza genetik bir hastalık olmasına rağmen immünolojik değil, 'oral mukoza ve gingival dokuyu etkileyen' vezikülobüllöz bir mukoza-deri hastalığıdır ve patolojisi kollajen tutunma defektlerine dayanır. Papillon Lefevre, Chediak-Higashi ve lökosit adezyon yetmezliği ise doğrudan polimorfonükleer lökositlerin kemotaksis veya fagosite defektlerine yol açan immünolojik genetik sendromlardır. İmmün sistem defektleri periodontal patojenlerin dokuya hızlı ve agresif invazyonuna zemin hazırlar.

---

### ÇİFT 16 (Benzerlik: 0.76)

**Soru 1 (ID: 941b0e46-cf22-42d6-a7f3-0f2b79365e91)**
Soru Kökü: 12 yaşında erkek hasta, düzenli aralıklarla tekrarlayan şiddetli dişeti enfeksiyonları şikayetiyle başvuruyor. Tıbbi anamnezinde "Siklik nötropeni" tanısı mevcuttur. Bu hastanın durumu, 2017 Periodontal Sınıflandırmasına göre aşağıdaki ana hastalık başlıklarından hangisi altında değerlendirilir?
Doğru Şık (C): Periodontal inflamasyona etki ederek doku kaybına majör etkisi olan sistemik düzensizlikler
Açıklama: Siklik nötropeni, şiddetli nötropeni alt grubu olarak doğrudan 'periodontal inflamasyona etki ederek periodontal dokuların kaybına majör etkisi olan sistemik düzensizlikler' içerisinde genetik bir hastalık olarak sınıflandırılır. Kazanılmış immun yetmezlik şıkkı, durumun konjenital/genetik kökenini yadsıdığı için yanlıştır. Nötrofil eksikliği periodontal bölgedeki inflamatuar yanıtı dramatik şekilde bozarak primer yıkım etkeni olur.

**Soru 2 (ID: f541605e-fb60-40e6-aa61-69008c38ba15)**
Soru Kökü: 15 yaşında erkek hasta, dişetlerinde şiddetli kanama ve ilerleyici yıkım tablosuyla kliniğe başvuruyor. Tıbbi konsültasyon sonucunda hastaya nadir görülen Haim-Mumk sendromu tanısı konulduğu öğreniliyor. 2017 Periodontal Sınıflandırmasına göre hastanın bu sistemik durumu "genetik hastalıklar" başlığı altında spesifik olarak hangi alt grupta değerlendirilmelidir?
Doğru Şık (A): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Haim-Mumk sendromu, periodontal inflamasyona etki ederek majör doku kaybı yapan genetik hastalıklar arasında 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubunda sınıflandırılır. En güçlü çeldirici olan konnektif doku hastalıkları seçeneği, kollajen defekti yapan durumları (örn. Ehlers-Danlos) içerdiği için bu vakada yanlıştır. Sınıflandırma, hastalığın periodontal dokudaki defektif bağışıklık yanıtı üzerinden yarattığı şiddetli yıkım mekanizmasını bu şekilde konumlandırır.

---

### ÇİFT 17 (Benzerlik: 0.76)

**Soru 1 (ID: 70a02231-5ff8-4531-8ed9-b088f4a449c2)**
Soru Kökü: 2017 Periodontal ve Peri-İmplant Hastalıklar Sınıflandırmasında 'biyolojik genişlik' teriminin yerine güncel klinik anatomik uyumu sağlamak amacıyla aşağıdaki isimlendirmelerden hangisi getirilmiştir?
Doğru Şık (C): Suprakrestal yapışık dokular
Açıklama: 2017 sınıflandırmasında, dişin anatomik yapısıyla daha doğru hücresel ilişki kurabilmek için 'biyolojik genişlik' terimi 'suprakrestal yapışık dokular' olarak güncellenmiştir. Junctional epitel bariyeri veya bağ dokusu terimleri anatomik kompleksin sadece tek bir parçasını tanımladığı için bu kapsamda eksik distraktörlerdir. Bu kavram, protetik ve restoratif işlemlerin periodontal doku sınırlarına saygısını klinik olarak tanımlamada altın standarttır.

**Soru 2 (ID: d00f09ec-0c37-4499-9bd5-a0b652e86382)**
Soru Kökü: 2017 Periodontal Hastalıklar ve Durumlar Sınıflaması'nda, geçmişte mukogingival deformiteleri tanımlamak için kullanılan 'periodontal biyotip' teriminin yerine güncel olarak hangi isimlendirme getirilmiştir?
Doğru Şık (C): Periodontal fenotip
Açıklama: 2017 güncel sınıflamasında mukogingival durumlarda genetik kökeni vurgulayan biyotip terimi terk edilmiş, klinik olarak gözlemlenebilen ve çevresel faktörlerle değişebilen özellikler bütününü ifade eden 'Periodontal Fenotip' terimi benimsenmiştir. Atake suprakrestal doku distraktörü yanlıştır, çünkü bu terim 'biyolojik genişlik' kavramının yerine getirilmiş farklı bir terminolojik güncellemedir. Fenotip kavramı, dokunun travma ve cerrahiye vereceği yanıtı öngörmede kritik klinik değere sahiptir.

---

### ÇİFT 18 (Benzerlik: 0.75)

**Soru 1 (ID: 54e178d1-0a4f-4d50-bbc5-5c3d9e7d05cb)**
Soru Kökü: Otoimmün karakterde olan ve deri ile mukoz membranları tutarak dental plaktan bağımsız gingival hastalık tablosu oluşturan Discoid lupus eritematosis, güncel 2017 periodontal sınıflamasında hangi ana kategori altında değerlendirilir?
Doğru Şık (D): İltihabi ve immünolojik durumlar
Açıklama: Discoid lupus eritematosis, Pemfigus ve Liken Planus gibi hastalıklarla birlikte 'İltihabi ve immünolojik durumlar' ana başlığı altındaki 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' alt kategorisinde yer alır. Granulamatoz iltihabi lezyonlar distraktörü yanlıştır, çünkü bu grupta sistemik otoimmün antikorlardan ziyade makrofajların epitelioid hücrelere dönüşerek oluşturduğu granülomlar (Crohn, sarkoidoz) bulunur. Discoid lupus, SLE'nin ağırlıklı olarak kutanöz ve mukozal lezyonlarla sınırlı formudur.

**Soru 2 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

---

### ÇİFT 19 (Benzerlik: 0.75)

**Soru 1 (ID: 0647f05e-ed66-4a8a-81c4-96cf1575461f)**
Soru Kökü: Metabolik ve endokrin genetik hastalıklar grubunda yer alan "Hipofosfatazya", erken süt dişi kaybı ve şiddetli periodontal yıkımla karakterizedir. Aşağıdakilerden hangisi bu sendromla 2017 sınıflandırmasında aynı majör alt grupta yer **almaz**?
Doğru Şık (B): Ehlers-Danlos sendromu
Açıklama: Ehlers-Danlos sendromu metabolik/endokrin değil, 'konnektif dokuları etkileyen hastalıklar' grubundadır. Hipofosfatazya, çimentum oluşumunu engelleyerek genetik kaynaklı majör periodontal kayba neden olur ve kemik mineralizasyon bozukluğu olan rickets ve osteoliz yapan Hajdu-Cheney ile birlikte metabolik grupta incelenir. Bağ dokusu fibril defektleri ile mineralizasyon/metabolizma defektleri sınıflandırmada net şekilde ayrılmıştır.

**Soru 2 (ID: da9ddb1b-d97f-4501-8408-b3ec70368dc2)**
Soru Kökü: Metabolik ve endokrin hastalıklar kategorisinde sınıflandırılan ve periodontal doku kaybına majör etkisi olan "Glikojen depo hastalığı", aşağıdaki genetik sistemik durumlardan hangisi ile aynı alt grupta **sınıflandırılmaz**?
Doğru Şık (E): Cohen sendromu
Açıklama: Cohen sendromu metabolik veya endokrin kökenli değil, 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubundadır. Glikojen depo, Gaucher, Hipofosfatazya ve Hajdu-Cheney doğrudan sistemik metabolizmayı ve mineralizasyon dengesini bozarak majör kemik/ataşman kaybı yapan metabolik hastalıklar olarak aynı listede bulunur. Sınıflama, yıkımın bağışıklık çöküşünden mi yoksa metabolik/kemik turnover defektinden mi kaynaklandığını ayırır.

---

### ÇİFT 20 (Benzerlik: 0.75)

**Soru 1 (ID: 4e990bea-13cf-41fd-a3c3-dba15121edad)**
Soru Kökü: 22 yaşında kadın hasta, bilateral mandibular osteoliz ve şiddetli periodontal yıkım nedeniyle izlenmekte olup, sistemik olarak nadir görülen Hajdu-Cheney sendromu tanısına sahiptir. Bu sendromun periodontal inflamasyona olan majör etkisi, 2017 sınıflandırmasında hangi patolojik kategori altında konumlandırılmıştır?
Doğru Şık (D): Metabolik ve endokrin hastalıklar
Açıklama: Hajdu-Cheney sendromu, jeneralize osteoporoz ve akro-osteoliz (terminal kemik yıkımı) karakteristiği nedeniyle kemik yapım-yıkım dengesini hücresel metabolizma bazında bozduğu için 'metabolik ve endokrin hastalıklar' içerisinde yer alır. Konnektif doku hastalıkları şıkkı, bağ dokusu zayıflığı zannedilip seçilebilecek güçlü bir çeldiricidir. Ancak hastalık doğrudan kemik doku metabolizmasını vurduğundan metabolik sınıftadır.

**Soru 2 (ID: f541605e-fb60-40e6-aa61-69008c38ba15)**
Soru Kökü: 15 yaşında erkek hasta, dişetlerinde şiddetli kanama ve ilerleyici yıkım tablosuyla kliniğe başvuruyor. Tıbbi konsültasyon sonucunda hastaya nadir görülen Haim-Mumk sendromu tanısı konulduğu öğreniliyor. 2017 Periodontal Sınıflandırmasına göre hastanın bu sistemik durumu "genetik hastalıklar" başlığı altında spesifik olarak hangi alt grupta değerlendirilmelidir?
Doğru Şık (A): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Haim-Mumk sendromu, periodontal inflamasyona etki ederek majör doku kaybı yapan genetik hastalıklar arasında 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubunda sınıflandırılır. En güçlü çeldirici olan konnektif doku hastalıkları seçeneği, kollajen defekti yapan durumları (örn. Ehlers-Danlos) içerdiği için bu vakada yanlıştır. Sınıflandırma, hastalığın periodontal dokudaki defektif bağışıklık yanıtı üzerinden yarattığı şiddetli yıkım mekanizmasını bu şekilde konumlandırır.

---

### ÇİFT 21 (Benzerlik: 0.75)

**Soru 1 (ID: 2b39ba02-686f-4d9e-b8a1-b5626022979b)**
Soru Kökü: Deri ve mukoz membranları etkileyen ve periodontal dokularda spesifik deskuamatif gingivitis tablosu oluşturarak biyofilmden bağımsız yıkım yapan otoimmün hastalık aşağıdakilerden hangisidir?
Doğru Şık (E): Pemfigus vulgaris
Açıklama: Pemfigus vulgaris, mukozal membranları ve deriyi etkileyen, epitel hücreleri arasındaki dezmozomlara karşı antikor gelişmesiyle karakterize bir otoimmün vezikülobüllöz hastalıktır ve deskuamatif gingivitise yol açar. Eritema multiforme bir otoimmün hastalık değil, genellikle bir antijene karşı gelişen hipersensitivite (bağışıklık kompleksi) reaksiyonudur. Sarkoidoz ve Crohn ise otoimmün mukoza hastalığı değil, granülomatöz inflamatuar lezyonlar sınıfındadır.

**Soru 2 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

---

### ÇİFT 22 (Benzerlik: 0.75)

**Soru 1 (ID: 0807306f-ab07-47e1-9b50-43e6fce0c096)**
Soru Kökü: Aşağıdakilerden hangisi periodontitis olmayan bir hastada periodontal apseye yol açabilecek 'minör anatomik değişiklikler' arasında yer **almaz**?
Doğru Şık (D): Odontodisplazi
Açıklama: Odontodisplazi, dişin tüm sert dokularının gelişimini lokalize olarak bozan, hayalet diş görünümüne yol açan şiddetli ve kompleks bir anatomik gelişim anomalisidir ve 'şiddetli anatomik değişiklikler' başlığındadır. Mine incisi ve semental tears ise genel morfolojiyi bozmadan lokalize plak birikimi yaratan 'minör anatomik değişiklikler'dir. Odontodisplazi, etkilenen dokuların yaygınlığı açısından minör kategoride olamaz.

**Soru 2 (ID: 384396c4-4082-46fe-af3c-1ea01d772169)**
Soru Kökü: 2017 sınıflandırmasına göre, periodontitis olmayan hastalarda periodontal apse gelişimine neden olabilen ve kök yüzeyi morfolojisini majör derecede bozan lokal faktörlerden 'şiddetli anatomik değişiklikler' arasında aşağıdakilerden hangisi bulunur?
Doğru Şık (B): Dens eveginatus
Açıklama: Dens eveginatus, normal diş konturunun dışında tüberkül/ek eklenti oluşumuyla karakterize şiddetli bir anatomik değişikliktir ve cep formasyonuna, ardından apse gelişimine yatkınlık yaratır. Çatlak diş sendromu ciddi kök hasarıdır; impaksiyon dışarıdan giren yabancı cisimdir. Semental tears ise sadece kök yüzeyi düzeyinde kalan minör bir değişikliktir.

---

### ÇİFT 23 (Benzerlik: 0.75)

**Soru 1 (ID: af25578c-f841-4187-a3bb-c05c1b71045a)**
Soru Kökü: Dişeti dokusunun kronik irritasyona maruz kalması sonucu interdental papilden köken alan, yavaş büyüyen, ağrısız ve soluk pembe renkli bağ dokusu proliferasyonlarının 2017 sınıflandırmasındaki yeri olan 'Fibröz epulis' aşağıdaki kategorilerden hangisine aittir?
Doğru Şık (B): Reaktif süreçler (Epulides)
Açıklama: Fibröz epulis, travma veya lokal irritanlara karşı konak dokusunun oluşturduğu fokal, patolojik bir hiperplazi olup, 2017 sınıflandırmasında 'Reaktif süreçler (Epulides)' ana başlığı altında yer alır. Premalign neoplazmalar distraktörü yanlıştır, çünkü fibröz epulis malignleşme potansiyeli olmayan ve tamamen inflamatuar bir reaksiyon ürünü olan benign karakterli bağ dokusu proliferasyonudur. Bu lezyonların tedavisinde cerrahi eksizyon ve irritanın eliminasyonu şarttır.

**Soru 2 (ID: ec98f11f-0663-4343-beae-8ad7f8ee5eda)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar ana başlığında incelenen 'Epulides (Reaktif süreçler)' kategorisine ait alt patolojilerden biri **değildir**?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, epitelin displastik değişiklikler barındırabilen, sürtünme veya tütün gibi etkenlerle tetiklenen ancak potansiyel olarak malignleşebilen 'Premalign Neoplazmalar' grubunda yer alır; reaktif bir süreç olan epulides grubuna ait değildir. Kalsifiye fibroblastik granuloma distraktörü kafa karıştırıcı olabilir, ancak bu lezyon mikroskobik olarak kalsifikasyon alanları içeren bağ dokusu büyümesi olup epulides (reaktif süreçler) klasifikasyonu içindedir. Epulides grubu lokal irritasyona verilen aşırı ama masum tepkileri kapsar.

---

### ÇİFT 24 (Benzerlik: 0.74)

**Soru 1 (ID: 69e00f25-8e90-4877-9938-4726a9358616)**
Soru Kökü: Periodontal destekleyici dokuları etkileyen sistemik hastalıklar sınıflandırmasında, periodontal inflamasyona etki ederek yıkıma major katkısı olan hastalıklardan hangisi genetik kökenli bir immünolojik hastalık **değildir**?
Doğru Şık (B): Epidermolizis bülloza
Açıklama: Epidermolizis bülloza genetik bir hastalık olmasına rağmen immünolojik değil, 'oral mukoza ve gingival dokuyu etkileyen' vezikülobüllöz bir mukoza-deri hastalığıdır ve patolojisi kollajen tutunma defektlerine dayanır. Papillon Lefevre, Chediak-Higashi ve lökosit adezyon yetmezliği ise doğrudan polimorfonükleer lökositlerin kemotaksis veya fagosite defektlerine yol açan immünolojik genetik sendromlardır. İmmün sistem defektleri periodontal patojenlerin dokuya hızlı ve agresif invazyonuna zemin hazırlar.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 25 (Benzerlik: 0.74)

**Soru 1 (ID: d913d77f-69c1-4e34-a7fc-69ceabdd934b)**
Soru Kökü: Biyofilm tarafından indüklenmeyen gingival hastalıklar sınıflandırmasında, premalign lezyonlar kategorisinde yer alan patoloji aşağıdakilerden hangisidir?
Doğru Şık (B): Eritroplaki
Açıklama: Eritroplaki ve lökoplaki, biyofilmden bağımsız gingival hastalıklar içindeki neoplazmalar başlığında 'premalign' (kanser öncülü) lezyonlar olarak sınıflandırılır. Skuamöz hücreli karsinoma ise artık premalign değil, doğrudan malign bir neoplazmadır. Bu ayrım, dokudaki displazinin invaziv kansere dönüşüm potansiyelini evrelendirmek açısından kritiktir.

**Soru 2 (ID: ec98f11f-0663-4343-beae-8ad7f8ee5eda)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar ana başlığında incelenen 'Epulides (Reaktif süreçler)' kategorisine ait alt patolojilerden biri **değildir**?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, epitelin displastik değişiklikler barındırabilen, sürtünme veya tütün gibi etkenlerle tetiklenen ancak potansiyel olarak malignleşebilen 'Premalign Neoplazmalar' grubunda yer alır; reaktif bir süreç olan epulides grubuna ait değildir. Kalsifiye fibroblastik granuloma distraktörü kafa karıştırıcı olabilir, ancak bu lezyon mikroskobik olarak kalsifikasyon alanları içeren bağ dokusu büyümesi olup epulides (reaktif süreçler) klasifikasyonu içindedir. Epulides grubu lokal irritasyona verilen aşırı ama masum tepkileri kapsar.

---

### ÇİFT 26 (Benzerlik: 0.74)

**Soru 1 (ID: 4e990bea-13cf-41fd-a3c3-dba15121edad)**
Soru Kökü: 22 yaşında kadın hasta, bilateral mandibular osteoliz ve şiddetli periodontal yıkım nedeniyle izlenmekte olup, sistemik olarak nadir görülen Hajdu-Cheney sendromu tanısına sahiptir. Bu sendromun periodontal inflamasyona olan majör etkisi, 2017 sınıflandırmasında hangi patolojik kategori altında konumlandırılmıştır?
Doğru Şık (D): Metabolik ve endokrin hastalıklar
Açıklama: Hajdu-Cheney sendromu, jeneralize osteoporoz ve akro-osteoliz (terminal kemik yıkımı) karakteristiği nedeniyle kemik yapım-yıkım dengesini hücresel metabolizma bazında bozduğu için 'metabolik ve endokrin hastalıklar' içerisinde yer alır. Konnektif doku hastalıkları şıkkı, bağ dokusu zayıflığı zannedilip seçilebilecek güçlü bir çeldiricidir. Ancak hastalık doğrudan kemik doku metabolizmasını vurduğundan metabolik sınıftadır.

**Soru 2 (ID: adc8d526-d594-47ea-b296-147f68467c81)**
Soru Kökü: 25 yaşında kadın hasta, plaktan bağımsız ilerleyen dişeti çekilmesi ve erken diş kaybı şikayetiyle başvuruyor. Anamnezinde Tip VIII Ehlers-Danlos sendromu öyküsü bulunmaktadır. Hastanın bu durumu, 2017 sınıflandırmasına göre periodontal dokuları hangi patolojik başlık altında yıkıma uğratır?
Doğru Şık (C): Konnektif dokuları etkileyen hastalıklar
Açıklama: Ehlers-Danlos sendromu, Tip IV ve VIII formlarıyla 'konnektif dokuları etkileyen hastalıklar' başlığı altında sınıflandırılmıştır. Oral mukoza hastalıkları çeldiricisi yüzeysel epitel defektlerini kapsarken, Ehlers-Danlos doğrudan periodontal ligamentin ve bağ dokusunun kollajen bütünlüğünü bozduğu için konnektif doku grubundadır. Sınıflandırma, defektin bağ dokusunun derin fibriler yapısında olduğunu işaret eder.

---

### ÇİFT 27 (Benzerlik: 0.74)

**Soru 1 (ID: af25578c-f841-4187-a3bb-c05c1b71045a)**
Soru Kökü: Dişeti dokusunun kronik irritasyona maruz kalması sonucu interdental papilden köken alan, yavaş büyüyen, ağrısız ve soluk pembe renkli bağ dokusu proliferasyonlarının 2017 sınıflandırmasındaki yeri olan 'Fibröz epulis' aşağıdaki kategorilerden hangisine aittir?
Doğru Şık (B): Reaktif süreçler (Epulides)
Açıklama: Fibröz epulis, travma veya lokal irritanlara karşı konak dokusunun oluşturduğu fokal, patolojik bir hiperplazi olup, 2017 sınıflandırmasında 'Reaktif süreçler (Epulides)' ana başlığı altında yer alır. Premalign neoplazmalar distraktörü yanlıştır, çünkü fibröz epulis malignleşme potansiyeli olmayan ve tamamen inflamatuar bir reaksiyon ürünü olan benign karakterli bağ dokusu proliferasyonudur. Bu lezyonların tedavisinde cerrahi eksizyon ve irritanın eliminasyonu şarttır.

**Soru 2 (ID: fe19270d-2c02-4a69-a734-95e58729bbb1)**
Soru Kökü: Özellikle hamilelik döneminde hormonal değişikliklerle şiddetlenen ve klinik olarak interdental bölgede morumsu-kırmızı renkte, kanamaya son derece eğilimli, yüksek anjiyogenik karaktere sahip dişeti büyümeleri olan Vasküler epulis, 2017 sınıflamasında hangi ana klinik başlık altında tanımlanmıştır?
Doğru Şık (C): Reaktif süreçler (Epulides)
Açıklama: Vasküler epulis (piyojenik granülom), hormonal faktörlerin lokal irritanlara verilen vasküler yanıtı abartmasıyla ortaya çıkan 'Reaktif süreçler (Epulides)' sınıfında yer alan patolojik bir doku büyümesidir. Endokrin, beslenme ve metabolik hastalıklar distraktörü yanlıştır, çünkü bu grupta örneğin C vitamini eksikliği (skorbüt) bulunur; hamilelik epulisi hormonal etkiyle modifiye olsa da doku kökeni lokal irritana verilen 'reaktif' yanıttır. Lezyon yüksek damarsal içeriği nedeniyle kanamaya eğilimlidir.

---

### ÇİFT 28 (Benzerlik: 0.74)

**Soru 1 (ID: 061d44d8-8683-4a8c-a562-fb9cb7180005)**
Soru Kökü: 48 yaşında kadın hasta, rutin muayene sırasında generalize alveoler kemik kaybı saptanarak periodontoloji kliniğine yönlendirilmiştir. Klinik muayenede minimal plak birikimi ve yok denecek kadar az sondlamada kanama saptanmış, ancak radyografik incelemede yaygın lamina dura kaybı ve alveolar kemikte litik değişiklikler görülmüştür. Medikal anamnezinde paratiroid adenomu öyküsü bulunan bu hastadaki periodontal doku kaybı, 2017 Sınıflandırmasına göre aşağıdaki ana başlıklardan hangisinde değerlendirilir?
Doğru Şık (A): Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler
Açıklama: Hiperparatiroidizm, klasik periodontitis patogenezinden (plak birikimi ve inflamasyon) bağımsız olarak doğrudan kemik metabolizmasını etkileyerek rezorpsiyona ve lamina dura kaybına neden olan bir hastalıktır. Bu nedenle güncel sınıflandırmada 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığında yer alır. Diyabet gibi hastalıklar inflamatuar yanıtı (patogenezi) modifiye ederken, hiperparatiroidizm plağa bağlı inflamasyon olmaksızın kendi başına bağımsız yıkım yapar. Bu klinik ayrım teşhis ve tedavi protokolünü tamamen değiştirir.

**Soru 2 (ID: 50bc5733-6d5f-4173-90c1-2b80e7afa8e7)**
Soru Kökü: 65 yaşında kadın hasta, belirgin radyografik krestal kemik kaybı ve generalize diş mobilitesi ile başvuruyor. Tıbbi anamnezinde şiddetli postmenopozal "Osteoporozis" tanısı mevcuttur. Osteoporozis, 2017 Periodontal Sınıflandırmasına göre hangi temel kategorik sisteme dahil edilmiştir?
Doğru Şık (E): Periodontal hastalıkların patogenezini etkileyen diğer sistemik düzensizlikler
Açıklama: Osteoporozis, 2017 sınıflandırmasında Obezite ve Diabet ile aynı listede, yani 'Periodontal hastalıkların patogenezini etkileyen diğer sistemik düzensizlikler' arasında yer alır. Metabolik ve endokrin hastalıklar (örn. Hipofosfatazya) çeldiricisi osteoporozun bir kemik metabolizma sorunu olması sebebiyle en güçlü yanılgıdır. Ancak osteoporoz dişe spesifik majör tek başına yıkımdan ziyade, periodontal plaktan doğan yıkımı hızlandıran sistemik bir modifikatördür.

---

### ÇİFT 29 (Benzerlik: 0.74)

**Soru 1 (ID: 4e990bea-13cf-41fd-a3c3-dba15121edad)**
Soru Kökü: 22 yaşında kadın hasta, bilateral mandibular osteoliz ve şiddetli periodontal yıkım nedeniyle izlenmekte olup, sistemik olarak nadir görülen Hajdu-Cheney sendromu tanısına sahiptir. Bu sendromun periodontal inflamasyona olan majör etkisi, 2017 sınıflandırmasında hangi patolojik kategori altında konumlandırılmıştır?
Doğru Şık (D): Metabolik ve endokrin hastalıklar
Açıklama: Hajdu-Cheney sendromu, jeneralize osteoporoz ve akro-osteoliz (terminal kemik yıkımı) karakteristiği nedeniyle kemik yapım-yıkım dengesini hücresel metabolizma bazında bozduğu için 'metabolik ve endokrin hastalıklar' içerisinde yer alır. Konnektif doku hastalıkları şıkkı, bağ dokusu zayıflığı zannedilip seçilebilecek güçlü bir çeldiricidir. Ancak hastalık doğrudan kemik doku metabolizmasını vurduğundan metabolik sınıftadır.

**Soru 2 (ID: dd43ab91-ee64-4d93-a693-69f0c34112bc)**
Soru Kökü: 40 yaşında erkek hasta, dişhekimine şiddetli ve generalize alveolar kemik yıkımı tablosuyla başvuruyor. Tıbbi kayıtlarında lipid depo bozukluğu olan "Gaucher hastalığı" saptanıyor. 2017 Sınıflandırmasına göre bu hastalık periodontal inflamasyona etki eden hangi ana sistemik başlık altında konumlandırılır?
Doğru Şık (A): Metabolik ve endokrin hastalıklar
Açıklama: Gaucher hastalığı, lizozomal depo bozukluğu yapısı gereği 2017 sınıflandırmasında 'Metabolik ve endokrin hastalıklar' majör başlığındadır. İmmunolojik bozukluklar güçlü bir çeldiricidir çünkü makrofaj fonksiyonları da bozulur; ancak temel patoloji enzim eksikliği olduğu için metabolik sınıftadır. Bu durum çene kemiklerinde infiltrasyona ve kistik lezyonlara yol açarak doğrudan yıkım yapar.

---

### ÇİFT 30 (Benzerlik: 0.74)

**Soru 1 (ID: 992f21ae-d62f-489c-ae46-1b36eba75d6d)**
Soru Kökü: Şiddetli nötropeni spektrumunda yer alan Konjenital nötropeni (Kostmann sendromu), periodontal doku kaybına majör etkisi olan genetik düzensizlikler içinde değerlendirilir. Aşağıdakilerden hangisi, 2017 sınıflandırmasında bu hastalıkla aynı alt kategoride (İmmunolojik hastalıklar ile ilişkili hastalıklar) yer **almaz**?
Doğru Şık (B): Plazminojen eksikliği
Açıklama: Plazminojen eksikliği immunolojik bir bozukluk değil, 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' alt başlığında sınıflandırılan genetik bir durumdur. Diğer seçeneklerin tümü lökosit/nötrofil fonksiyon defektleri veya sistemik bağışıklık anormallikleri üzerinden majör yıkım yapan immunolojik kökenli hastalıklardır. Bu ayrım, defektin doğrudan mukozada mı yoksa sistemik savunma hücrelerinde mi olduğunu belirler.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 31 (Benzerlik: 0.74)

**Soru 1 (ID: 69e00f25-8e90-4877-9938-4726a9358616)**
Soru Kökü: Periodontal destekleyici dokuları etkileyen sistemik hastalıklar sınıflandırmasında, periodontal inflamasyona etki ederek yıkıma major katkısı olan hastalıklardan hangisi genetik kökenli bir immünolojik hastalık **değildir**?
Doğru Şık (B): Epidermolizis bülloza
Açıklama: Epidermolizis bülloza genetik bir hastalık olmasına rağmen immünolojik değil, 'oral mukoza ve gingival dokuyu etkileyen' vezikülobüllöz bir mukoza-deri hastalığıdır ve patolojisi kollajen tutunma defektlerine dayanır. Papillon Lefevre, Chediak-Higashi ve lökosit adezyon yetmezliği ise doğrudan polimorfonükleer lökositlerin kemotaksis veya fagosite defektlerine yol açan immünolojik genetik sendromlardır. İmmün sistem defektleri periodontal patojenlerin dokuya hızlı ve agresif invazyonuna zemin hazırlar.

**Soru 2 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

---

### ÇİFT 32 (Benzerlik: 0.73)

**Soru 1 (ID: 59d38994-f001-4dd1-9d0a-5619a26cad78)**
Soru Kökü: Periodontal dokuların kaybına majör etkisi olan sistemik düzensizlikler değerlendirildiğinde, nadir görülen genetik durumlardan biri olan "Cohen sendromu" 2017 sınıflandırmasında hangi temel kategorik bozukluk başlığı altında incelenir?
Doğru Şık (E): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Cohen sendromu, genetik kökenli sistemik hastalıklar içerisinde 'immunolojik hastalıklar ile ilişkili hastalıklar' şemsiyesi altında konumlandırılmıştır. Metabolik bozukluklar çeldiricisi, sendromun sistemik etkileri nedeniyle yanıltıcı olabilir ancak sınıflama bağışıklık sistemi defektini referans alır. Hastalık periodontal inflamasyon yanıtını bozarak ataşman kaybını hızlandırır.

**Soru 2 (ID: da9ddb1b-d97f-4501-8408-b3ec70368dc2)**
Soru Kökü: Metabolik ve endokrin hastalıklar kategorisinde sınıflandırılan ve periodontal doku kaybına majör etkisi olan "Glikojen depo hastalığı", aşağıdaki genetik sistemik durumlardan hangisi ile aynı alt grupta **sınıflandırılmaz**?
Doğru Şık (E): Cohen sendromu
Açıklama: Cohen sendromu metabolik veya endokrin kökenli değil, 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubundadır. Glikojen depo, Gaucher, Hipofosfatazya ve Hajdu-Cheney doğrudan sistemik metabolizmayı ve mineralizasyon dengesini bozarak majör kemik/ataşman kaybı yapan metabolik hastalıklar olarak aynı listede bulunur. Sınıflama, yıkımın bağışıklık çöküşünden mi yoksa metabolik/kemik turnover defektinden mi kaynaklandığını ayırır.

---

### ÇİFT 33 (Benzerlik: 0.73)

**Soru 1 (ID: 03ec6987-13e7-476c-9acf-46b85c5266a5)**
Soru Kökü: Elli beş yaşında kadın hasta, dişetlerinin soyulduğu, fırçalarken şiddetli acı hissettiği şikayetiyle başvuruyor. Klinik muayenede epitelyal ayrışma ve deskuamatif gingivitis tablosu izleniyor. Biyopsi sonucunda bazal membran seviyesinde otoantikor birikimi tespit ediliyor. Bu klinik tablo 2017 sınıflamasında aşağıdaki alt başlıklardan hangisi ile uyumludur?
Doğru Şık (D): Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar (Pemfigoid)
Açıklama: Bazal membranda antikor birikimi (subepitelyal ayrışma) ve deskuamatif gingivitis tablosu mukoza membran pemfigoidinin patognomonik bulgusudur ve sistem otoimmün karakterlidir. Hipersensitivite reaksiyonları distraktörü yanlıştır, çünkü bu grupta antijene (alerjene) karşı gelişen immün kompleks reaksiyonu (Erythema multiforme/Kontakt alerji) vardır, dokuya spesifik kalıcı otoantikor birikimi bazal membran yıkımı yapmaz. Bu durum plak eliminasyonuna yanıt vermez ve sistemik veya topikal immünsüpresif tedavi gerektirir.

**Soru 2 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

---

### ÇİFT 34 (Benzerlik: 0.73)

**Soru 1 (ID: 0647f05e-ed66-4a8a-81c4-96cf1575461f)**
Soru Kökü: Metabolik ve endokrin genetik hastalıklar grubunda yer alan "Hipofosfatazya", erken süt dişi kaybı ve şiddetli periodontal yıkımla karakterizedir. Aşağıdakilerden hangisi bu sendromla 2017 sınıflandırmasında aynı majör alt grupta yer **almaz**?
Doğru Şık (B): Ehlers-Danlos sendromu
Açıklama: Ehlers-Danlos sendromu metabolik/endokrin değil, 'konnektif dokuları etkileyen hastalıklar' grubundadır. Hipofosfatazya, çimentum oluşumunu engelleyerek genetik kaynaklı majör periodontal kayba neden olur ve kemik mineralizasyon bozukluğu olan rickets ve osteoliz yapan Hajdu-Cheney ile birlikte metabolik grupta incelenir. Bağ dokusu fibril defektleri ile mineralizasyon/metabolizma defektleri sınıflandırmada net şekilde ayrılmıştır.

**Soru 2 (ID: 0a95c259-0e1a-44f1-bdf7-e1708cac909d)**
Soru Kökü: Periodontal inflamasyona etki ederek majör doku kaybı yapan hastalıkların 2017 sınıflandırmasında;
I. Glikojen depo hastalığı
II. Hipofosfatemik rickets
III. Lökosit adezyon yetmezliği
durumlarından hangisi ya da hangileri "Metabolik ve endokrin hastalıklar" alt grubuna dahildir?
Doğru Şık (C): I ve II
Açıklama: Glikojen depo hastalığı ve Hipofosfatemik rickets metabolik/endokrin genetik bozukluklar şemsiyesi altındayken, Lökosit adezyon yetmezliği immunolojik hastalıklar başlığındadır. İmmunolojik defektler hücresel immün yanıt üzerinden yıkım yaparken, metabolik hastalıklar hücresel döngü, mineralizasyon ve substrat birikimi mekanizmaları ile periodonsiyumu yıkar. 2017 tasnifi bu patofizyolojik ayrımı ana başlıklar düzeyinde korur.

---

### ÇİFT 35 (Benzerlik: 0.73)

**Soru 1 (ID: a626ce0e-79dc-45cf-9cd0-a6992e9a17a3)**
Soru Kökü: Mukogingival deformite, dişeti ve alveoler mukoza arasındaki hücresel boyutsal ilişkileri etkileyen morfolojik problemleri kapsar. 2017 sınıflandırmasına göre aşağıdakilerden hangisi doğrudan mukogingival bir durum/deformite olarak kategorize **edilmez**?
Doğru Şık (D): Artmış suprakrestal bağ dokusu yüksekliği
Açıklama: Suprakrestal bağ dokusu (eski adıyla biyolojik genişlik), dişin periodonsiyuma bağlanma aygıtının fizyolojik bir sınırıdır ve bunun artması tek başına bir mukogingival deformite olarak sınıflandırılmaz. Azalmış vestibül derinliği, anormal frenulum, çekilme ve anormal renk mukogingival deformiteler ana başlığı altında detaylandırılan, sıklıkla cerrahi müdahale gerektiren morfolojik kusurlardır. Anatomik deformiteler genellikle fonksiyonel temizliği zorlaştırarak sekonder inflamasyona yol açar.

**Soru 2 (ID: a7898477-9fb8-4249-b70b-7fa55b3ff990)**
Soru Kökü: Periodontal muayene sırasında dişetinin alveolar mukoza ve anatomik yapılarla olan ilişkisi detaylı olarak incelenir.

I. Gingival fenotip
II. Anormal frenilum
III. Plazminojen eksikliği
IV. Azalmış vestibüler derinlik

Yukarıdakilerden hangileri 2017 sınıflandırmasında doğrudan 'Diş çevresinde mukogingival durum ve deformiteler' başlığı altında yer alır?
Doğru Şık (C): I, II ve IV
Açıklama: 2017 sınıflandırmasında diş çevresindeki mukogingival durum ve deformiteler arasında gingival fenotip, yumuşak doku çekilmesi, azalmış vestibüler derinlik ve anormal frenilum gibi temel anatomik parametreler yer almaktadır. Plazminojen eksikliği ise dişetini lokal bir deformite olarak değil, 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' üst başlığı altında mukozal bir patoloji (psödomembran oluşumu) olarak genel sistemik hastalıklara bağlı periodontal durumlar arasında sınıflandırılır.

---

### ÇİFT 36 (Benzerlik: 0.73)

**Soru 1 (ID: ae7d6c18-06ed-4556-9072-c39e4c5da7a2)**
Soru Kökü: Plazminojen eksikliği, 2017 Periodontal Sınıflandırmasında oral mukoza ve gingival dokuyu etkileyen hastalıklar kategorisinde değerlendirilir. Aşağıdakilerden hangisi bu spesifik genetik kategori başlığı altında yer **almaz**?
Doğru Şık (B): Anjiyo ödem
Açıklama: Anjiyo ödem (C1 inhibitör eksikliği), mukozal defekt değil 'konnektif dokuları etkileyen hastalıklar' başlığı altında yer alan genetik bir vasküler-bağ dokusu reaksiyon bozukluğudur. Distrofik ve Kindler sendromları epidermolizis bülloza şemsiyesi altında doğrudan mukoza etkilenimi gösterir. Bu tasnif, primer doku hedefinin neresi olduğuna göre şekillenir.

**Soru 2 (ID: d3565e8f-6e2c-477b-be4a-90a81ce16a92)**
Soru Kökü: Periodontal doku kaybına majör etkisi olan konnektif doku hastalıkları arasında yer alan "Anjiyo ödem", 2017 sınıflandırma sisteminde hangi spesifik moleküler faktörün eksikliği/defekti ile ilişkilendirilerek spesifik olarak tanımlanmıştır?
Doğru Şık (D): C1 inhibitör eksikliği
Açıklama: 2017 sınıflandırma metninde Anjiyo ödem doğrudan (C1 inhibitör eksikliği) parantezi ile konnektif dokuları etkileyen genetik hastalıklar altında listelenmiştir. Plazminojen eksikliği mukoza hastalıkları kategorisinde yer aldığı için en güçlü çeldiricidir ancak konnektif doku başlığında bulunmaz. C1 inhibitör yokluğu, aşırı bradikinin üretimi üzerinden bağ dokusunda ani ve yıkıcı ödem mekanizmasını tetikler.

---

### ÇİFT 37 (Benzerlik: 0.73)

**Soru 1 (ID: 2b18ee84-abbd-4e00-9f2c-91edbc311e79)**
Soru Kökü: Kırk sekiz yaşında kadın hasta, bukkal mukozasında her iki taraflı ağvari (retiküler) beyaz çizgiler ve anterior dişeti bölgesinde yaygın kızarıklık, soyulma (deskuamatif gingivitis) şikayetiyle kliniğe başvuruyor. 2017 sınıflamasına göre bu tabloya yol açan biyofilmden bağımsız hastalık kategorisi ve en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Otoimmün hastalıklar - Liken Planus
Açıklama: Bukkal mukozada simetrik retiküler ağsu çizgiler (Wickham striaları) ve deskuamatif gingivitis tablosu T hücresi aracılı otoimmün bir hastalık olan Liken Planus'un klasik klinik yansımasıdır. Lökoplaki distraktörü yanlıştır, çünkü lökoplaki premalign karakterde ve genellikle tek taraflı izole beyaz bir yama şeklindedir, retiküler bir deskuamatif tablo çizmez. Bu lezyonlar 2017 sınıflamasında Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar grubundadır.

**Soru 2 (ID: ba559b1c-4626-4914-8a71-829091eb1604)**
Soru Kökü: Yirmi iki yaşında kadın hasta, dişetlerinde yaygın beyazlaşma şikayetiyle başvurmuştur. Anamnezden hastanın estetik kaygılarla sert kıllı bir diş fırçasını aşırı baskı uygulayarak günde 4 kez kullandığı öğrenilmiştir. Mukogingival sınırın koronalinde soluk, beyazımsı ve keratinize alanlar izlenmektedir. Bu hastada sınıflandırmaya göre en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Sürtünmeye bağlı keratosis
Açıklama: Sert diş fırçalamaya bağlı sürekli mekanik irritasyon, epitelde koruyucu bir yanıt olarak hiperkeratoza (sürtünmeye bağlı keratosis) yol açar ve bu fiziksel/mekanik travmatik lezyonlar başlığında incelenir. Kimyasal veya termal ajanlara bağlı değildir; liken planus ise otoimmün bir tablodur ve fırçalama travmasıyla doğrudan başlatılmaz. Fırçalama gibi rutin alışkanlıkların abartılması spesifik lokalize keratozların başlıca nedenidir.

---

### ÇİFT 38 (Benzerlik: 0.73)

**Soru 1 (ID: 69e00f25-8e90-4877-9938-4726a9358616)**
Soru Kökü: Periodontal destekleyici dokuları etkileyen sistemik hastalıklar sınıflandırmasında, periodontal inflamasyona etki ederek yıkıma major katkısı olan hastalıklardan hangisi genetik kökenli bir immünolojik hastalık **değildir**?
Doğru Şık (B): Epidermolizis bülloza
Açıklama: Epidermolizis bülloza genetik bir hastalık olmasına rağmen immünolojik değil, 'oral mukoza ve gingival dokuyu etkileyen' vezikülobüllöz bir mukoza-deri hastalığıdır ve patolojisi kollajen tutunma defektlerine dayanır. Papillon Lefevre, Chediak-Higashi ve lökosit adezyon yetmezliği ise doğrudan polimorfonükleer lökositlerin kemotaksis veya fagosite defektlerine yol açan immünolojik genetik sendromlardır. İmmün sistem defektleri periodontal patojenlerin dokuya hızlı ve agresif invazyonuna zemin hazırlar.

**Soru 2 (ID: 992f21ae-d62f-489c-ae46-1b36eba75d6d)**
Soru Kökü: Şiddetli nötropeni spektrumunda yer alan Konjenital nötropeni (Kostmann sendromu), periodontal doku kaybına majör etkisi olan genetik düzensizlikler içinde değerlendirilir. Aşağıdakilerden hangisi, 2017 sınıflandırmasında bu hastalıkla aynı alt kategoride (İmmunolojik hastalıklar ile ilişkili hastalıklar) yer **almaz**?
Doğru Şık (B): Plazminojen eksikliği
Açıklama: Plazminojen eksikliği immunolojik bir bozukluk değil, 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' alt başlığında sınıflandırılan genetik bir durumdur. Diğer seçeneklerin tümü lökosit/nötrofil fonksiyon defektleri veya sistemik bağışıklık anormallikleri üzerinden majör yıkım yapan immunolojik kökenli hastalıklardır. Bu ayrım, defektin doğrudan mukozada mı yoksa sistemik savunma hücrelerinde mi olduğunu belirler.

---

### ÇİFT 39 (Benzerlik: 0.73)

**Soru 1 (ID: 4f6d3523-1615-472c-9d70-88d73727a89f)**
Soru Kökü: Dental plak birikimi ile iyileşmeyen, klinik kazıma ile dokudan uzaklaştırılamayan ve biyofilmden bağımsız gingival hastalıklar altındaki 'Neoplazmalar' ana başlığında yer alan premalign özellikteki lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Lökoplaki
Açıklama: Lökoplaki, epitel kaynaklı olup kazınamayan beyaz plaklarla karakterize ve 2017 gingival hastalıklar sınıflandırmasında direkt olarak 'Neoplazmalar - Premalign' başlığı altında yer alan bir hastalıktır. Squamous hücreli karsinoma distraktörü yanlıştır, çünkü bu karsinom premalign değil doğrudan 'Malign neoplazmalar' alt başlığında değerlendirilir. Candidiozis kazınabilir bir mantar plağı iken, lökoplaki epitelyal kalınlaşma veya displazi içerir.

**Soru 2 (ID: ec98f11f-0663-4343-beae-8ad7f8ee5eda)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar ana başlığında incelenen 'Epulides (Reaktif süreçler)' kategorisine ait alt patolojilerden biri **değildir**?
Doğru Şık (E): Lökoplaki
Açıklama: Lökoplaki, epitelin displastik değişiklikler barındırabilen, sürtünme veya tütün gibi etkenlerle tetiklenen ancak potansiyel olarak malignleşebilen 'Premalign Neoplazmalar' grubunda yer alır; reaktif bir süreç olan epulides grubuna ait değildir. Kalsifiye fibroblastik granuloma distraktörü kafa karıştırıcı olabilir, ancak bu lezyon mikroskobik olarak kalsifikasyon alanları içeren bağ dokusu büyümesi olup epulides (reaktif süreçler) klasifikasyonu içindedir. Epulides grubu lokal irritasyona verilen aşırı ama masum tepkileri kapsar.

---

### ÇİFT 40 (Benzerlik: 0.73)

**Soru 1 (ID: 0647f05e-ed66-4a8a-81c4-96cf1575461f)**
Soru Kökü: Metabolik ve endokrin genetik hastalıklar grubunda yer alan "Hipofosfatazya", erken süt dişi kaybı ve şiddetli periodontal yıkımla karakterizedir. Aşağıdakilerden hangisi bu sendromla 2017 sınıflandırmasında aynı majör alt grupta yer **almaz**?
Doğru Şık (B): Ehlers-Danlos sendromu
Açıklama: Ehlers-Danlos sendromu metabolik/endokrin değil, 'konnektif dokuları etkileyen hastalıklar' grubundadır. Hipofosfatazya, çimentum oluşumunu engelleyerek genetik kaynaklı majör periodontal kayba neden olur ve kemik mineralizasyon bozukluğu olan rickets ve osteoliz yapan Hajdu-Cheney ile birlikte metabolik grupta incelenir. Bağ dokusu fibril defektleri ile mineralizasyon/metabolizma defektleri sınıflandırmada net şekilde ayrılmıştır.

**Soru 2 (ID: 4e990bea-13cf-41fd-a3c3-dba15121edad)**
Soru Kökü: 22 yaşında kadın hasta, bilateral mandibular osteoliz ve şiddetli periodontal yıkım nedeniyle izlenmekte olup, sistemik olarak nadir görülen Hajdu-Cheney sendromu tanısına sahiptir. Bu sendromun periodontal inflamasyona olan majör etkisi, 2017 sınıflandırmasında hangi patolojik kategori altında konumlandırılmıştır?
Doğru Şık (D): Metabolik ve endokrin hastalıklar
Açıklama: Hajdu-Cheney sendromu, jeneralize osteoporoz ve akro-osteoliz (terminal kemik yıkımı) karakteristiği nedeniyle kemik yapım-yıkım dengesini hücresel metabolizma bazında bozduğu için 'metabolik ve endokrin hastalıklar' içerisinde yer alır. Konnektif doku hastalıkları şıkkı, bağ dokusu zayıflığı zannedilip seçilebilecek güçlü bir çeldiricidir. Ancak hastalık doğrudan kemik doku metabolizmasını vurduğundan metabolik sınıftadır.

---

### ÇİFT 41 (Benzerlik: 0.72)

**Soru 1 (ID: 03ec6987-13e7-476c-9acf-46b85c5266a5)**
Soru Kökü: Elli beş yaşında kadın hasta, dişetlerinin soyulduğu, fırçalarken şiddetli acı hissettiği şikayetiyle başvuruyor. Klinik muayenede epitelyal ayrışma ve deskuamatif gingivitis tablosu izleniyor. Biyopsi sonucunda bazal membran seviyesinde otoantikor birikimi tespit ediliyor. Bu klinik tablo 2017 sınıflamasında aşağıdaki alt başlıklardan hangisi ile uyumludur?
Doğru Şık (D): Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar (Pemfigoid)
Açıklama: Bazal membranda antikor birikimi (subepitelyal ayrışma) ve deskuamatif gingivitis tablosu mukoza membran pemfigoidinin patognomonik bulgusudur ve sistem otoimmün karakterlidir. Hipersensitivite reaksiyonları distraktörü yanlıştır, çünkü bu grupta antijene (alerjene) karşı gelişen immün kompleks reaksiyonu (Erythema multiforme/Kontakt alerji) vardır, dokuya spesifik kalıcı otoantikor birikimi bazal membran yıkımı yapmaz. Bu durum plak eliminasyonuna yanıt vermez ve sistemik veya topikal immünsüpresif tedavi gerektirir.

**Soru 2 (ID: 2b18ee84-abbd-4e00-9f2c-91edbc311e79)**
Soru Kökü: Kırk sekiz yaşında kadın hasta, bukkal mukozasında her iki taraflı ağvari (retiküler) beyaz çizgiler ve anterior dişeti bölgesinde yaygın kızarıklık, soyulma (deskuamatif gingivitis) şikayetiyle kliniğe başvuruyor. 2017 sınıflamasına göre bu tabloya yol açan biyofilmden bağımsız hastalık kategorisi ve en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Otoimmün hastalıklar - Liken Planus
Açıklama: Bukkal mukozada simetrik retiküler ağsu çizgiler (Wickham striaları) ve deskuamatif gingivitis tablosu T hücresi aracılı otoimmün bir hastalık olan Liken Planus'un klasik klinik yansımasıdır. Lökoplaki distraktörü yanlıştır, çünkü lökoplaki premalign karakterde ve genellikle tek taraflı izole beyaz bir yama şeklindedir, retiküler bir deskuamatif tablo çizmez. Bu lezyonlar 2017 sınıflamasında Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar grubundadır.

---

### ÇİFT 42 (Benzerlik: 0.72)

**Soru 1 (ID: adc8d526-d594-47ea-b296-147f68467c81)**
Soru Kökü: 25 yaşında kadın hasta, plaktan bağımsız ilerleyen dişeti çekilmesi ve erken diş kaybı şikayetiyle başvuruyor. Anamnezinde Tip VIII Ehlers-Danlos sendromu öyküsü bulunmaktadır. Hastanın bu durumu, 2017 sınıflandırmasına göre periodontal dokuları hangi patolojik başlık altında yıkıma uğratır?
Doğru Şık (C): Konnektif dokuları etkileyen hastalıklar
Açıklama: Ehlers-Danlos sendromu, Tip IV ve VIII formlarıyla 'konnektif dokuları etkileyen hastalıklar' başlığı altında sınıflandırılmıştır. Oral mukoza hastalıkları çeldiricisi yüzeysel epitel defektlerini kapsarken, Ehlers-Danlos doğrudan periodontal ligamentin ve bağ dokusunun kollajen bütünlüğünü bozduğu için konnektif doku grubundadır. Sınıflandırma, defektin bağ dokusunun derin fibriler yapısında olduğunu işaret eder.

**Soru 2 (ID: f541605e-fb60-40e6-aa61-69008c38ba15)**
Soru Kökü: 15 yaşında erkek hasta, dişetlerinde şiddetli kanama ve ilerleyici yıkım tablosuyla kliniğe başvuruyor. Tıbbi konsültasyon sonucunda hastaya nadir görülen Haim-Mumk sendromu tanısı konulduğu öğreniliyor. 2017 Periodontal Sınıflandırmasına göre hastanın bu sistemik durumu "genetik hastalıklar" başlığı altında spesifik olarak hangi alt grupta değerlendirilmelidir?
Doğru Şık (A): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Haim-Mumk sendromu, periodontal inflamasyona etki ederek majör doku kaybı yapan genetik hastalıklar arasında 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubunda sınıflandırılır. En güçlü çeldirici olan konnektif doku hastalıkları seçeneği, kollajen defekti yapan durumları (örn. Ehlers-Danlos) içerdiği için bu vakada yanlıştır. Sınıflandırma, hastalığın periodontal dokudaki defektif bağışıklık yanıtı üzerinden yarattığı şiddetli yıkım mekanizmasını bu şekilde konumlandırır.

---

### ÇİFT 43 (Benzerlik: 0.72)

**Soru 1 (ID: 0647f05e-ed66-4a8a-81c4-96cf1575461f)**
Soru Kökü: Metabolik ve endokrin genetik hastalıklar grubunda yer alan "Hipofosfatazya", erken süt dişi kaybı ve şiddetli periodontal yıkımla karakterizedir. Aşağıdakilerden hangisi bu sendromla 2017 sınıflandırmasında aynı majör alt grupta yer **almaz**?
Doğru Şık (B): Ehlers-Danlos sendromu
Açıklama: Ehlers-Danlos sendromu metabolik/endokrin değil, 'konnektif dokuları etkileyen hastalıklar' grubundadır. Hipofosfatazya, çimentum oluşumunu engelleyerek genetik kaynaklı majör periodontal kayba neden olur ve kemik mineralizasyon bozukluğu olan rickets ve osteoliz yapan Hajdu-Cheney ile birlikte metabolik grupta incelenir. Bağ dokusu fibril defektleri ile mineralizasyon/metabolizma defektleri sınıflandırmada net şekilde ayrılmıştır.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 44 (Benzerlik: 0.72)

**Soru 1 (ID: 6d360587-9af3-4297-bd84-25acf229e4ad)**
Soru Kökü: "Giant cell granulomas" (Dev hücreli granülomlar) tanısı alan bir hastada gözlenen ilerleyici lokal kemik ve ataşman kaybı, klinik olarak dental plak varlığından veya geleneksel bir periodontitis öyküsünden bağımsız olarak gelişmektedir. 2017 Sınıflandırmasına göre bu tabloya yol açan sistemik düzensizliklerin en temel sınıflama kriteri (özelliği) aşağıdakilerden hangisidir?
Doğru Şık (E): Periodontitisten (plak kaynaklı ataşman kaybından) bağımsız olarak periodontal dokuların kaybıyla sonuçlanmaları
Açıklama: Giant cell granulomas, Odontojenik tümörler ve Langherans hücreli histiyositozis gibi patolojiler 2017 Sınıflandırmasında spesifik olarak 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' majör şemsiyesinde tanımlanır. Endokrin veya genetik mutasyon çeldiricileri, yıkımın biyolojik doğası varsayılarak düşülebilecek tuzaklardır ancak sınıflandırma bu spesifik hastalıkları doğrudan 'periodontitis dışı primer litik olaylar' olarak etiketler. Bu lezyonların destrüksiyonu geleneksel cep-plak formasyonuna ihtiyaç duymadan agresif yer kaplayıcı etkiyle oluşur.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 45 (Benzerlik: 0.72)

**Soru 1 (ID: 59d38994-f001-4dd1-9d0a-5619a26cad78)**
Soru Kökü: Periodontal dokuların kaybına majör etkisi olan sistemik düzensizlikler değerlendirildiğinde, nadir görülen genetik durumlardan biri olan "Cohen sendromu" 2017 sınıflandırmasında hangi temel kategorik bozukluk başlığı altında incelenir?
Doğru Şık (E): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Cohen sendromu, genetik kökenli sistemik hastalıklar içerisinde 'immunolojik hastalıklar ile ilişkili hastalıklar' şemsiyesi altında konumlandırılmıştır. Metabolik bozukluklar çeldiricisi, sendromun sistemik etkileri nedeniyle yanıltıcı olabilir ancak sınıflama bağışıklık sistemi defektini referans alır. Hastalık periodontal inflamasyon yanıtını bozarak ataşman kaybını hızlandırır.

**Soru 2 (ID: f541605e-fb60-40e6-aa61-69008c38ba15)**
Soru Kökü: 15 yaşında erkek hasta, dişetlerinde şiddetli kanama ve ilerleyici yıkım tablosuyla kliniğe başvuruyor. Tıbbi konsültasyon sonucunda hastaya nadir görülen Haim-Mumk sendromu tanısı konulduğu öğreniliyor. 2017 Periodontal Sınıflandırmasına göre hastanın bu sistemik durumu "genetik hastalıklar" başlığı altında spesifik olarak hangi alt grupta değerlendirilmelidir?
Doğru Şık (A): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Haim-Mumk sendromu, periodontal inflamasyona etki ederek majör doku kaybı yapan genetik hastalıklar arasında 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubunda sınıflandırılır. En güçlü çeldirici olan konnektif doku hastalıkları seçeneği, kollajen defekti yapan durumları (örn. Ehlers-Danlos) içerdiği için bu vakada yanlıştır. Sınıflandırma, hastalığın periodontal dokudaki defektif bağışıklık yanıtı üzerinden yarattığı şiddetli yıkım mekanizmasını bu şekilde konumlandırır.

---

### ÇİFT 46 (Benzerlik: 0.72)

**Soru 1 (ID: 841e1e5f-3226-4ccc-a18f-b412b155ebc0)**
Soru Kökü: Obezite, 2017 Periodontal Sınıflandırmasında sistemik bir risk faktörü olarak tanımlanmıştır. Aşağıdakilerden hangisi bu kategoride (Periodontal hastalıkların patogenezini etkileyen diğer sistemik düzensizlikler) Obezite ile birlikte yer **almaz**?
Doğru Şık (D): Granulomatosis with polyangiitis
Açıklama: Granulomatosis with polyangiitis, patogenezi etkileyen (modifiye eden) grupta değil, periodontitisten 'bağımsız' olarak doğrudan periodontal dokuları rezorbe eden/yıkan hastalıklar grubundadır. Obezite, Diabet, Osteoporoz, Stres ve Artrit türevleri ise mevcut bir periodontal hastalığın şiddetini, inflamatuar yükü (örn. sitokin salınımı) artırarak etkileyen patogenez modifikatörleridir. Sınıflandırma, hastalığın doğrudan destrüksiyon yapması ile süreci hızlandırmasını ayırır.

**Soru 2 (ID: fed5b4b8-61f9-499c-878e-46763e7b1908)**
Soru Kökü: Emosyonel stres ve depresyon, periodontal hastalıkların ilerleyişini değiştiren psikonöroimmünolojik faktörler olarak tanımlanmıştır. Aşağıdaki sistemik durumlardan hangisi, 2017 sınıflandırmasında bu faktörlerle aynı majör kategori olan "patogenezi etkileyen diğer sistemik düzensizlikler" grubunda **bulunmaz**?
Doğru Şık (B): Epidermolysis bullosa acquisita
Açıklama: Epidermolysis bullosa acquisita, patogenezi modifiye eden bir risk faktörü değil, periodontal doku kaybına 'majör etkisi olan inflamatuar hastalıklar' grubunda yer alır. Emosyonel stres, obezite, sigara, diyabet ve artrit ise bağışıklık sistemini baskılayarak veya inflamasyonu hücresel bazda modifiye ederek periodontitisin yıkım hızını değiştiren durumlardır. Bu sınıflandırma farkı, lezyonun doğrudan sistemik mi yoksa plağın sekonder fasilitasyonu mu olduğunu ayırır.

---

### ÇİFT 47 (Benzerlik: 0.72)

**Soru 1 (ID: 2842088f-ce50-493f-84cd-3320d22326b9)**
Soru Kökü: Aşağıdaki patojenlerden hangisi, 2017 sınıflama sistemine göre biyofilm tarafından indüklenmeyen gingival hastalıklarda 'Spesifik enfeksiyonlar - Bakteriyel orijinli' ana başlığı altında sınıflandırılan ajanlardan biridir?
Doğru Şık (C): Streptokokkal gingivitis etkenleri
Açıklama: Streptokokkal gingivitis, güncel 2017 periodontoloji sınıflandırmasında biyofilm kaynaklı olmayan spesifik bakteriyel enfeksiyonlar kategorisinde doğrudan yer alır. Histoplasma distraktörü yanlıştır, çünkü bu organizma bakteriyel değil fungal kaynaklı (diğer mikozlar) kategorisinde sınıflandırılan bir patojendir. Bu tip lezyonların klinik çözümü ancak etkene yönelik spesifik antibiyotik kullanımı ile sağlanabilir.

**Soru 2 (ID: f2a3f828-ee74-47c9-af2c-8b21ca7ba0c5)**
Soru Kökü: Dental plaktan bağımsız olarak gelişen ve spesifik bakteriyel enfeksiyonlara bağlı olarak ortaya çıkan gingival lezyonların etiyolojisinde aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (D): Neisseria meningitidis
Açıklama: 2017 sınıflandırmasında biyofilm tarafından indüklenmeyen, spesifik bakteriyel orijinli enfeksiyonlar kategorisinde Neisseria gonorrhoea, Treponema pallidum, Mycobacterium tuberculosis ve Streptokokkal enfeksiyonlar tanımlanmıştır. Neisseria meningitidis distraktörü yanlıştır, çünkü bu organizma oral kavitede spesifik, izole ve biyofilmden bağımsız bir gingivitis tablosunun primer etkeni olarak güncel sınıflandırma listesinde yer almaz. Bu lezyonlar standart plak kontrolüyle düzelmeyen inatçı tablolardır.

---

### ÇİFT 48 (Benzerlik: 0.72)

**Soru 1 (ID: 03ec6987-13e7-476c-9acf-46b85c5266a5)**
Soru Kökü: Elli beş yaşında kadın hasta, dişetlerinin soyulduğu, fırçalarken şiddetli acı hissettiği şikayetiyle başvuruyor. Klinik muayenede epitelyal ayrışma ve deskuamatif gingivitis tablosu izleniyor. Biyopsi sonucunda bazal membran seviyesinde otoantikor birikimi tespit ediliyor. Bu klinik tablo 2017 sınıflamasında aşağıdaki alt başlıklardan hangisi ile uyumludur?
Doğru Şık (D): Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar (Pemfigoid)
Açıklama: Bazal membranda antikor birikimi (subepitelyal ayrışma) ve deskuamatif gingivitis tablosu mukoza membran pemfigoidinin patognomonik bulgusudur ve sistem otoimmün karakterlidir. Hipersensitivite reaksiyonları distraktörü yanlıştır, çünkü bu grupta antijene (alerjene) karşı gelişen immün kompleks reaksiyonu (Erythema multiforme/Kontakt alerji) vardır, dokuya spesifik kalıcı otoantikor birikimi bazal membran yıkımı yapmaz. Bu durum plak eliminasyonuna yanıt vermez ve sistemik veya topikal immünsüpresif tedavi gerektirir.

**Soru 2 (ID: 2b39ba02-686f-4d9e-b8a1-b5626022979b)**
Soru Kökü: Deri ve mukoz membranları etkileyen ve periodontal dokularda spesifik deskuamatif gingivitis tablosu oluşturarak biyofilmden bağımsız yıkım yapan otoimmün hastalık aşağıdakilerden hangisidir?
Doğru Şık (E): Pemfigus vulgaris
Açıklama: Pemfigus vulgaris, mukozal membranları ve deriyi etkileyen, epitel hücreleri arasındaki dezmozomlara karşı antikor gelişmesiyle karakterize bir otoimmün vezikülobüllöz hastalıktır ve deskuamatif gingivitise yol açar. Eritema multiforme bir otoimmün hastalık değil, genellikle bir antijene karşı gelişen hipersensitivite (bağışıklık kompleksi) reaksiyonudur. Sarkoidoz ve Crohn ise otoimmün mukoza hastalığı değil, granülomatöz inflamatuar lezyonlar sınıfındadır.

---

### ÇİFT 49 (Benzerlik: 0.72)

**Soru 1 (ID: 2b18ee84-abbd-4e00-9f2c-91edbc311e79)**
Soru Kökü: Kırk sekiz yaşında kadın hasta, bukkal mukozasında her iki taraflı ağvari (retiküler) beyaz çizgiler ve anterior dişeti bölgesinde yaygın kızarıklık, soyulma (deskuamatif gingivitis) şikayetiyle kliniğe başvuruyor. 2017 sınıflamasına göre bu tabloya yol açan biyofilmden bağımsız hastalık kategorisi ve en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Otoimmün hastalıklar - Liken Planus
Açıklama: Bukkal mukozada simetrik retiküler ağsu çizgiler (Wickham striaları) ve deskuamatif gingivitis tablosu T hücresi aracılı otoimmün bir hastalık olan Liken Planus'un klasik klinik yansımasıdır. Lökoplaki distraktörü yanlıştır, çünkü lökoplaki premalign karakterde ve genellikle tek taraflı izole beyaz bir yama şeklindedir, retiküler bir deskuamatif tablo çizmez. Bu lezyonlar 2017 sınıflamasında Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar grubundadır.

**Soru 2 (ID: a1364729-cfd0-4236-a469-5b07a5cd9933)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta, yeni bir tarçın özlü diş macunu kullanmaya başladıktan sonra tüm generalize dişetinde parlak kırmızı renk değişikliği, şişlik ve şiddetli yanma hissi ile kliniğe başvuruyor. Yapılan muayenede diş taşı veya yoğun plak gözlenmiyor. 2017 sınıflamasına göre bu lezyonun patogenezi aşağıdakilerden hangisi ile açıklanır?
Doğru Şık (E): Hipersensitivite reaksiyonu (Kontakt alerji)
Açıklama: Hastanın dental ürünlerdeki aromalara (tarçın gibi) bağlı olarak plak varlığı olmaksızın geliştirdiği generalize eritem ve yanma tablosu, alerjik kaynaklı bir hipersensitivite reaksiyonu (kontakt alerji) tipidir. Pemfigoid distraktörü yanlıştır, çünkü otoimmün büllöz bir hastalık olan pemfigoidde dokuda vezikül/bül oluşumu ve epitelin bağ dokudan ayrılmasıyla oluşan deskuamatif gingivitis tablosu spesifik bir ürüne bağlanmaksızın spontan gelişir. Bu hastalıklar, Biyofilm Tarafından İndüklenmeyen İltihabi ve İmmünolojik Durumlar altında sınıflandırılır.

---

### ÇİFT 50 (Benzerlik: 0.72)

**Soru 1 (ID: 94f5daf3-ddc3-42a5-a5f7-2bff5d7b8f25)**
Soru Kökü: Okluzal travma şüphesiyle klinik ve radyografik olarak incelenen bir hastada, aşağıdaki bulgulardan hangisinin varlığı travmatik oklüzal kuvvetlerin spesifik bir göstergesi **olamaz**?
Doğru Şık (C): İnterdental papilde kraterleşme
Açıklama: İnterdental papilde kraterleşme, spesifik olarak Nekrotizan Periodontal Hastalıkların (NPD) patognomonik bir yumuşak doku lezyonudur ve doku nekrozuna işaret eder. Genişlemiş periodontal ligament aralığı, çiğneme ağrısı, kök rezorpsiyonu ve pulpal kan akımı değişikliklerine ikincil termal hassasiyet ise okluzal travmanın klasik adaptif/yıkıcı belirtileridir. Yumuşak doku krateri okluzal stüdrüs ile açıklanamaz.

**Soru 2 (ID: b6e5e75e-5390-4899-b8de-8b6459941166)**
Soru Kökü: Doku adaptasyon kapasitesini aşan oklüzal yüklerin oluşturduğu travmatik oklüzal kuvvetler, periodontal ligament ve kök yüzeyinde belirgin hasarlar yaratır. Aşağıdakilerden hangisi travmatik oklüzal kuvvetin diş ve destek dokulardaki klasik bulgularından biri **değildir**?
Doğru Şık (A): Radyografik olarak daralmış periodontal ligament aralığı
Açıklama: Travmatik oklüzal kuvvetler periodontal ligament aralığında kompresyon ve nekroz oluşturarak radyografik olarak daralmaya değil, tam tersine kretal bölgede huni şeklinde 'genişlemiş' bir periodontal bağ aralığına neden olurlar. Fremitus, hipersementoz ve kök rezorpsiyonu dokunun bu yıkıcı strese karşı verdiği adaptif ve patolojik klasik hücresel yanıtlardır. Kuvvet ortadan kaldırıldığında mobilite ve aralık genişlemesi reverzibl karakterdedir.

---

### ÇİFT 51 (Benzerlik: 0.72)

**Soru 1 (ID: 6df097ab-f265-41ad-bfd1-9a1d2e286f65)**
Soru Kökü: Dental implant çevresi dokularda gelişen inflamasyon süreçlerinde, peri-implant mukozitis tanısını peri-implantitisten ayıran en temel patolojik fark aşağıdakilerden hangisidir?
Doğru Şık (C): Destekleyici alveoler kemikte ilerleyici yıkımın bulunmaması
Açıklama: Peri-implant mukozitis tıpkı doğal dişlerdeki gingivitis gibi kemik yıkımı olmadan sadece yumuşak dokuda kalan inflamasyondur; peri-implantitiste ise inflamasyona eşlik eden ilerleyici marjinal kemik kaybı vardır. Sondlamada kanama her iki tabloda da görülür, bu nedenle ayırıcı değildir. Mukozitis plak kontrolüyle tamamen geri döndürülebilir (reverzibl) iken, kemik kaybı başladıktan sonra tam re-osseointegrasyon çoğunlukla cerrahi gerektiren zorlu bir süreçtir.

**Soru 2 (ID: b1a613eb-5bd9-4a99-b7a7-35ccd0806487)**
Soru Kökü: Kırk beş yaşında erkek hasta, 46 numaralı implant bölgesinde fırçalama sırasında kanama ve kızarıklık şikayetiyle başvurmuştur. Yapılan klinik muayenede sondlamada kanama saptanmış, radyografik incelemede implantın yerleştirildiği döneme ait geçmiş verilerle karşılaştırıldığında marjinal kemik seviyesinde herhangi bir kayıp gözlenmemiştir. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Peri-implant mukositis
Açıklama: Peri-implant mukositis, klinik olarak sondlamada kanama ve görsel iltihap belirtileri ile karakterize olup, kemik kaybının eşlik etmediği reverzibl bir durumdur. Peri-implantitis distraktörü yanlıştır çünkü bu tanıyı koyabilmek için ilerleyici alveolar kemik kaybının (genellikle ≥3 mm) radyografik olarak saptanması gerekir. Bu durum, plağın elimine edilmesiyle tamamen geri döndürülebilir ve peri-implant sağlığa kavuşulabilir.

---

### ÇİFT 52 (Benzerlik: 0.72)

**Soru 1 (ID: 110b0de8-9c01-4e97-bab5-5cd36f4799e0)**
Soru Kökü: Klasik periodontitis mekanizmasından bağımsız olarak, sadece kendi patogeneziyle periodontal dokuların doğrudan kaybıyla sonuçlanan sistemik hastalık ve durumlar tanımlanmıştır. Aşağıdakilerden hangisi bu gruba dahil olan hastalıklardan biri **değildir**?
Doğru Şık (A): Papillon Lefevre sendromu
Açıklama: Papillon Lefevre sendromu 'Periodontal inflamasyona etki ederek periodontal dokuların kaybına major etkisi olan genetik hastalıklar' altındadır; yani inflamatuar periodontitisin patogenezini destekler. Ancak Langerhans histiyositoz, hiperparatiroidizm (brown tümör), Gorham-Stout ve dev hücreli tümörler diş eti iltihabından tamamen bağımsız olarak primer kemik yıkım tümörleri/kistleri gibi çalışır. Bu ayrım kemik kaybının plak ilişkili inflamasyon kökenli olup olmadığını belirlemede esastır.

**Soru 2 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

---

### ÇİFT 53 (Benzerlik: 0.71)

**Soru 1 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 54 (Benzerlik: 0.71)

**Soru 1 (ID: 29defe13-0cf1-4dc6-aa95-6fcdad4d9854)**
Soru Kökü: 45 yaşında erkek hasta, sol alt birinci büyük azı dişinin ekstraksiyonundan iki yıl sonra aynı bölgeye yerleştirilen implantın apikalinde izlenen asemptomatik radyolüsent lezyon nedeniyle başvurmuştur. Klinik muayenede implantın fonksiyonel stabilitesinin tam olduğu ve marjinal kemik seviyelerinin/cep derinliklerinin tamamen normal sınırda olduğu gözlenmiştir. Geçmiş yıllarda 'retrograd peri-implantitis' olarak bilinen ve 2020 yılında güncellenen bu lezyonun temel etiyolojisi aşağıdakilerden hangisidir?
Doğru Şık (D): Çekim öncesi dişten kalan rezidüel endodontik bakteriler
Açıklama: Önceden retrograd peri-implantitis olarak adlandırılan ve 2020 konsensusu ile 'Endodontik-Peri-implant Lezyon (Endo-implant)' olarak yeniden isimlendirilen bu durum, eski çekim soketinde kalan rezidüel endodontik bakterilerin implant apikalinde reaktive olmasıyla gelişir. Klasik peri-implantitis implantın koronal (marjinal) kısmından mikrogab sızıntısı veya plak birikimiyle başlarken, endo-implant lezyon doğrudan apekste ortaya çıkar ve sıklıkla implantın fonksiyonel stabilitesini bozmaz.

**Soru 2 (ID: b1a613eb-5bd9-4a99-b7a7-35ccd0806487)**
Soru Kökü: Kırk beş yaşında erkek hasta, 46 numaralı implant bölgesinde fırçalama sırasında kanama ve kızarıklık şikayetiyle başvurmuştur. Yapılan klinik muayenede sondlamada kanama saptanmış, radyografik incelemede implantın yerleştirildiği döneme ait geçmiş verilerle karşılaştırıldığında marjinal kemik seviyesinde herhangi bir kayıp gözlenmemiştir. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Peri-implant mukositis
Açıklama: Peri-implant mukositis, klinik olarak sondlamada kanama ve görsel iltihap belirtileri ile karakterize olup, kemik kaybının eşlik etmediği reverzibl bir durumdur. Peri-implantitis distraktörü yanlıştır çünkü bu tanıyı koyabilmek için ilerleyici alveolar kemik kaybının (genellikle ≥3 mm) radyografik olarak saptanması gerekir. Bu durum, plağın elimine edilmesiyle tamamen geri döndürülebilir ve peri-implant sağlığa kavuşulabilir.

---

### ÇİFT 55 (Benzerlik: 0.71)

**Soru 1 (ID: 992f21ae-d62f-489c-ae46-1b36eba75d6d)**
Soru Kökü: Şiddetli nötropeni spektrumunda yer alan Konjenital nötropeni (Kostmann sendromu), periodontal doku kaybına majör etkisi olan genetik düzensizlikler içinde değerlendirilir. Aşağıdakilerden hangisi, 2017 sınıflandırmasında bu hastalıkla aynı alt kategoride (İmmunolojik hastalıklar ile ilişkili hastalıklar) yer **almaz**?
Doğru Şık (B): Plazminojen eksikliği
Açıklama: Plazminojen eksikliği immunolojik bir bozukluk değil, 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' alt başlığında sınıflandırılan genetik bir durumdur. Diğer seçeneklerin tümü lökosit/nötrofil fonksiyon defektleri veya sistemik bağışıklık anormallikleri üzerinden majör yıkım yapan immunolojik kökenli hastalıklardır. Bu ayrım, defektin doğrudan mukozada mı yoksa sistemik savunma hücrelerinde mi olduğunu belirler.

**Soru 2 (ID: ae7d6c18-06ed-4556-9072-c39e4c5da7a2)**
Soru Kökü: Plazminojen eksikliği, 2017 Periodontal Sınıflandırmasında oral mukoza ve gingival dokuyu etkileyen hastalıklar kategorisinde değerlendirilir. Aşağıdakilerden hangisi bu spesifik genetik kategori başlığı altında yer **almaz**?
Doğru Şık (B): Anjiyo ödem
Açıklama: Anjiyo ödem (C1 inhibitör eksikliği), mukozal defekt değil 'konnektif dokuları etkileyen hastalıklar' başlığı altında yer alan genetik bir vasküler-bağ dokusu reaksiyon bozukluğudur. Distrofik ve Kindler sendromları epidermolizis bülloza şemsiyesi altında doğrudan mukoza etkilenimi gösterir. Bu tasnif, primer doku hedefinin neresi olduğuna göre şekillenir.

---

### ÇİFT 56 (Benzerlik: 0.71)

**Soru 1 (ID: 54e178d1-0a4f-4d50-bbc5-5c3d9e7d05cb)**
Soru Kökü: Otoimmün karakterde olan ve deri ile mukoz membranları tutarak dental plaktan bağımsız gingival hastalık tablosu oluşturan Discoid lupus eritematosis, güncel 2017 periodontal sınıflamasında hangi ana kategori altında değerlendirilir?
Doğru Şık (D): İltihabi ve immünolojik durumlar
Açıklama: Discoid lupus eritematosis, Pemfigus ve Liken Planus gibi hastalıklarla birlikte 'İltihabi ve immünolojik durumlar' ana başlığı altındaki 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' alt kategorisinde yer alır. Granulamatoz iltihabi lezyonlar distraktörü yanlıştır, çünkü bu grupta sistemik otoimmün antikorlardan ziyade makrofajların epitelioid hücrelere dönüşerek oluşturduğu granülomlar (Crohn, sarkoidoz) bulunur. Discoid lupus, SLE'nin ağırlıklı olarak kutanöz ve mukozal lezyonlarla sınırlı formudur.

**Soru 2 (ID: cac13848-e103-4767-ba47-1b486d4bed81)**
Soru Kökü: 2017 Periodontal Hastalıklar ve Durumlar Sınıflaması sistematiğinde, orofasiyal bölgede plak bağımsız lezyon oluşturan Sarcodiosis (Sarkoidoz) hastalığı hangi grupta sınıflandırılmaktadır?
Doğru Şık (C): Granulamatoz iltihabi lezyonlar
Açıklama: Sarcodiosis, idiyopatik non-kazeifiye granülomlarla seyreden sistemik bir hastalık olup, 2017 sınıflamasında Crohn's hastalığı ile birlikte 'Granulamatoz iltihabi lezyonlar' başlığı altında yer alır. Otoimmün hastalıklar distraktörü yanlıştır çünkü otoimmün gruptaki mekanizma otoantikor aracılı iken, sarkoidozda temel lezyon makrofaj ve T lenfositlerinin epitelioid granülomlar oluşturmasıdır. Oral lezyonları genellikle kırmızı, şişkin ve granüler karakterde dişeti büyümeleri şeklindedir.

---

### ÇİFT 57 (Benzerlik: 0.71)

**Soru 1 (ID: 82983d87-f085-4fec-91b0-93f925fcb071)**
Soru Kökü: Sistemik hastalıkların periodontal belirtileri incelendiğinde, "Kazanılmış nötropeni" olguları 2017 sınıflandırmasında spesifik olarak hangi alt hiyerarşik kategori bağlamında değerlendirilmektedir?
Doğru Şık (E): Kazanılmış immun yetmezlik hastalıkları
Açıklama: Kazanılmış nötropeni, HIV enfeksiyonu ile birlikte 'Kazanılmış immun yetmezlik hastalıkları' majör başlığında yer alır. Şiddetli nötropeni (Siklik ve Kostmann) genetik kökenli immunolojik hastalıklar başlığında olduğu için konjenital grupta yer alırken, yaşamın ilerleyen döneminde sonradan ortaya çıkan nötropeni kazanılmış olarak ayrı sınıflandırılır. Sınıflandırma etyolojinin doğuştan mı sonradan mı olduğuna odaklanır.

**Soru 2 (ID: 941b0e46-cf22-42d6-a7f3-0f2b79365e91)**
Soru Kökü: 12 yaşında erkek hasta, düzenli aralıklarla tekrarlayan şiddetli dişeti enfeksiyonları şikayetiyle başvuruyor. Tıbbi anamnezinde "Siklik nötropeni" tanısı mevcuttur. Bu hastanın durumu, 2017 Periodontal Sınıflandırmasına göre aşağıdaki ana hastalık başlıklarından hangisi altında değerlendirilir?
Doğru Şık (C): Periodontal inflamasyona etki ederek doku kaybına majör etkisi olan sistemik düzensizlikler
Açıklama: Siklik nötropeni, şiddetli nötropeni alt grubu olarak doğrudan 'periodontal inflamasyona etki ederek periodontal dokuların kaybına majör etkisi olan sistemik düzensizlikler' içerisinde genetik bir hastalık olarak sınıflandırılır. Kazanılmış immun yetmezlik şıkkı, durumun konjenital/genetik kökenini yadsıdığı için yanlıştır. Nötrofil eksikliği periodontal bölgedeki inflamatuar yanıtı dramatik şekilde bozarak primer yıkım etkeni olur.

---

### ÇİFT 58 (Benzerlik: 0.71)

**Soru 1 (ID: 59d38994-f001-4dd1-9d0a-5619a26cad78)**
Soru Kökü: Periodontal dokuların kaybına majör etkisi olan sistemik düzensizlikler değerlendirildiğinde, nadir görülen genetik durumlardan biri olan "Cohen sendromu" 2017 sınıflandırmasında hangi temel kategorik bozukluk başlığı altında incelenir?
Doğru Şık (E): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Cohen sendromu, genetik kökenli sistemik hastalıklar içerisinde 'immunolojik hastalıklar ile ilişkili hastalıklar' şemsiyesi altında konumlandırılmıştır. Metabolik bozukluklar çeldiricisi, sendromun sistemik etkileri nedeniyle yanıltıcı olabilir ancak sınıflama bağışıklık sistemi defektini referans alır. Hastalık periodontal inflamasyon yanıtını bozarak ataşman kaybını hızlandırır.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 59 (Benzerlik: 0.71)

**Soru 1 (ID: 0a95c259-0e1a-44f1-bdf7-e1708cac909d)**
Soru Kökü: Periodontal inflamasyona etki ederek majör doku kaybı yapan hastalıkların 2017 sınıflandırmasında;
I. Glikojen depo hastalığı
II. Hipofosfatemik rickets
III. Lökosit adezyon yetmezliği
durumlarından hangisi ya da hangileri "Metabolik ve endokrin hastalıklar" alt grubuna dahildir?
Doğru Şık (C): I ve II
Açıklama: Glikojen depo hastalığı ve Hipofosfatemik rickets metabolik/endokrin genetik bozukluklar şemsiyesi altındayken, Lökosit adezyon yetmezliği immunolojik hastalıklar başlığındadır. İmmunolojik defektler hücresel immün yanıt üzerinden yıkım yaparken, metabolik hastalıklar hücresel döngü, mineralizasyon ve substrat birikimi mekanizmaları ile periodonsiyumu yıkar. 2017 tasnifi bu patofizyolojik ayrımı ana başlıklar düzeyinde korur.

**Soru 2 (ID: da9ddb1b-d97f-4501-8408-b3ec70368dc2)**
Soru Kökü: Metabolik ve endokrin hastalıklar kategorisinde sınıflandırılan ve periodontal doku kaybına majör etkisi olan "Glikojen depo hastalığı", aşağıdaki genetik sistemik durumlardan hangisi ile aynı alt grupta **sınıflandırılmaz**?
Doğru Şık (E): Cohen sendromu
Açıklama: Cohen sendromu metabolik veya endokrin kökenli değil, 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubundadır. Glikojen depo, Gaucher, Hipofosfatazya ve Hajdu-Cheney doğrudan sistemik metabolizmayı ve mineralizasyon dengesini bozarak majör kemik/ataşman kaybı yapan metabolik hastalıklar olarak aynı listede bulunur. Sınıflama, yıkımın bağışıklık çöküşünden mi yoksa metabolik/kemik turnover defektinden mi kaynaklandığını ayırır.

---

### ÇİFT 60 (Benzerlik: 0.71)

**Soru 1 (ID: 841e1e5f-3226-4ccc-a18f-b412b155ebc0)**
Soru Kökü: Obezite, 2017 Periodontal Sınıflandırmasında sistemik bir risk faktörü olarak tanımlanmıştır. Aşağıdakilerden hangisi bu kategoride (Periodontal hastalıkların patogenezini etkileyen diğer sistemik düzensizlikler) Obezite ile birlikte yer **almaz**?
Doğru Şık (D): Granulomatosis with polyangiitis
Açıklama: Granulomatosis with polyangiitis, patogenezi etkileyen (modifiye eden) grupta değil, periodontitisten 'bağımsız' olarak doğrudan periodontal dokuları rezorbe eden/yıkan hastalıklar grubundadır. Obezite, Diabet, Osteoporoz, Stres ve Artrit türevleri ise mevcut bir periodontal hastalığın şiddetini, inflamatuar yükü (örn. sitokin salınımı) artırarak etkileyen patogenez modifikatörleridir. Sınıflandırma, hastalığın doğrudan destrüksiyon yapması ile süreci hızlandırmasını ayırır.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 61 (Benzerlik: 0.71)

**Soru 1 (ID: 2b39ba02-686f-4d9e-b8a1-b5626022979b)**
Soru Kökü: Deri ve mukoz membranları etkileyen ve periodontal dokularda spesifik deskuamatif gingivitis tablosu oluşturarak biyofilmden bağımsız yıkım yapan otoimmün hastalık aşağıdakilerden hangisidir?
Doğru Şık (E): Pemfigus vulgaris
Açıklama: Pemfigus vulgaris, mukozal membranları ve deriyi etkileyen, epitel hücreleri arasındaki dezmozomlara karşı antikor gelişmesiyle karakterize bir otoimmün vezikülobüllöz hastalıktır ve deskuamatif gingivitise yol açar. Eritema multiforme bir otoimmün hastalık değil, genellikle bir antijene karşı gelişen hipersensitivite (bağışıklık kompleksi) reaksiyonudur. Sarkoidoz ve Crohn ise otoimmün mukoza hastalığı değil, granülomatöz inflamatuar lezyonlar sınıfındadır.

**Soru 2 (ID: 69e00f25-8e90-4877-9938-4726a9358616)**
Soru Kökü: Periodontal destekleyici dokuları etkileyen sistemik hastalıklar sınıflandırmasında, periodontal inflamasyona etki ederek yıkıma major katkısı olan hastalıklardan hangisi genetik kökenli bir immünolojik hastalık **değildir**?
Doğru Şık (B): Epidermolizis bülloza
Açıklama: Epidermolizis bülloza genetik bir hastalık olmasına rağmen immünolojik değil, 'oral mukoza ve gingival dokuyu etkileyen' vezikülobüllöz bir mukoza-deri hastalığıdır ve patolojisi kollajen tutunma defektlerine dayanır. Papillon Lefevre, Chediak-Higashi ve lökosit adezyon yetmezliği ise doğrudan polimorfonükleer lökositlerin kemotaksis veya fagosite defektlerine yol açan immünolojik genetik sendromlardır. İmmün sistem defektleri periodontal patojenlerin dokuya hızlı ve agresif invazyonuna zemin hazırlar.

---

### ÇİFT 62 (Benzerlik: 0.71)

**Soru 1 (ID: 03ec6987-13e7-476c-9acf-46b85c5266a5)**
Soru Kökü: Elli beş yaşında kadın hasta, dişetlerinin soyulduğu, fırçalarken şiddetli acı hissettiği şikayetiyle başvuruyor. Klinik muayenede epitelyal ayrışma ve deskuamatif gingivitis tablosu izleniyor. Biyopsi sonucunda bazal membran seviyesinde otoantikor birikimi tespit ediliyor. Bu klinik tablo 2017 sınıflamasında aşağıdaki alt başlıklardan hangisi ile uyumludur?
Doğru Şık (D): Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar (Pemfigoid)
Açıklama: Bazal membranda antikor birikimi (subepitelyal ayrışma) ve deskuamatif gingivitis tablosu mukoza membran pemfigoidinin patognomonik bulgusudur ve sistem otoimmün karakterlidir. Hipersensitivite reaksiyonları distraktörü yanlıştır, çünkü bu grupta antijene (alerjene) karşı gelişen immün kompleks reaksiyonu (Erythema multiforme/Kontakt alerji) vardır, dokuya spesifik kalıcı otoantikor birikimi bazal membran yıkımı yapmaz. Bu durum plak eliminasyonuna yanıt vermez ve sistemik veya topikal immünsüpresif tedavi gerektirir.

**Soru 2 (ID: a1364729-cfd0-4236-a469-5b07a5cd9933)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta, yeni bir tarçın özlü diş macunu kullanmaya başladıktan sonra tüm generalize dişetinde parlak kırmızı renk değişikliği, şişlik ve şiddetli yanma hissi ile kliniğe başvuruyor. Yapılan muayenede diş taşı veya yoğun plak gözlenmiyor. 2017 sınıflamasına göre bu lezyonun patogenezi aşağıdakilerden hangisi ile açıklanır?
Doğru Şık (E): Hipersensitivite reaksiyonu (Kontakt alerji)
Açıklama: Hastanın dental ürünlerdeki aromalara (tarçın gibi) bağlı olarak plak varlığı olmaksızın geliştirdiği generalize eritem ve yanma tablosu, alerjik kaynaklı bir hipersensitivite reaksiyonu (kontakt alerji) tipidir. Pemfigoid distraktörü yanlıştır, çünkü otoimmün büllöz bir hastalık olan pemfigoidde dokuda vezikül/bül oluşumu ve epitelin bağ dokudan ayrılmasıyla oluşan deskuamatif gingivitis tablosu spesifik bir ürüne bağlanmaksızın spontan gelişir. Bu hastalıklar, Biyofilm Tarafından İndüklenmeyen İltihabi ve İmmünolojik Durumlar altında sınıflandırılır.

---

### ÇİFT 63 (Benzerlik: 0.71)

**Soru 1 (ID: 708f2f1d-3974-4570-b052-cb719f7e8568)**
Soru Kökü: Periodontitis hastalarının evrelendirmesinde aşağıdakilerden hangisi hastalığın doğrudan Evre 3 veya Evre 4 olduğuna işaret eden spesifik komplekslik faktörlerinden biridir?
Doğru Şık (B): Mastikatör disfonksiyon bulunması
Açıklama: Mastikatör disfonksiyon, ciddi doku kaybı ve oklüzal instabilite nedeniyle oluşan fonksiyon kaybını gösterir ve doğrudan Evre 3 veya Evre 4 komplekslik faktörüdür. Moderate kret defekti ve horizontal kemik kaybı Evre 2 sınırlarında kalabilirken, disfonksiyon tüm sistemik çiğneme dengesini bozduğu için ileri evre markerıdır. Fonksiyon kaybı, kompleks tedavileri (Evre 3/4) zorunlu kılar.

**Soru 2 (ID: f070bdf3-4389-4ff4-92c6-2d02074b03fc)**
Soru Kökü: Periodontitis evrelendirmesinde lokal komplekslik faktörlerinden biri olan kret defektinin şiddeti dikkate alınmaktadır. Buna göre, sondalama derinlikleri ile birlikte değerlendirildiğinde 'şiddetli (severe) kret defekti' hastayı en az hangi periodontitis evresine kaydırır?
Doğru Şık (A): Evre 3
Açıklama: Periodontitis evrelendirme sisteminde, moderate (orta) kret defekti Evre 2 komplekslik sınırındayken, şiddetli kret defekti hastanın en az Evre 3 komplekslik seviyesine kaymasına neden olur. Bu durum, alveoler kreti restore etme veya koruma işlemlerinin getireceği cerrahi karmaşıklığı yansıtır. Evreleme salt ataşman kaybı ile değil, protez ve rekonstrüksiyon zorluklarıyla da belirlenir.

---

### ÇİFT 64 (Benzerlik: 0.71)

**Soru 1 (ID: 2b18ee84-abbd-4e00-9f2c-91edbc311e79)**
Soru Kökü: Kırk sekiz yaşında kadın hasta, bukkal mukozasında her iki taraflı ağvari (retiküler) beyaz çizgiler ve anterior dişeti bölgesinde yaygın kızarıklık, soyulma (deskuamatif gingivitis) şikayetiyle kliniğe başvuruyor. 2017 sınıflamasına göre bu tabloya yol açan biyofilmden bağımsız hastalık kategorisi ve en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Otoimmün hastalıklar - Liken Planus
Açıklama: Bukkal mukozada simetrik retiküler ağsu çizgiler (Wickham striaları) ve deskuamatif gingivitis tablosu T hücresi aracılı otoimmün bir hastalık olan Liken Planus'un klasik klinik yansımasıdır. Lökoplaki distraktörü yanlıştır, çünkü lökoplaki premalign karakterde ve genellikle tek taraflı izole beyaz bir yama şeklindedir, retiküler bir deskuamatif tablo çizmez. Bu lezyonlar 2017 sınıflamasında Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar grubundadır.

**Soru 2 (ID: 66d1d812-2770-473f-ae21-29be8ffab1f6)**
Soru Kökü: Yirmi altı yaşında erkek hasta, uzun süreli diyare, şiddetli karın ağrısı ve kilo kaybı şikayetleri ile gastrointestinal tedavi görmektedir. Oral muayenesinde dişetlerinde yaygın asimetrik şişlikler ve bukkal mukozada 'kaldırım taşı' görünümüne sahip iltihabi doku büyümeleri saptanmıştır. Sınıflandırma sistemine göre bu gingival lezyonun patolojik karakteri aşağıdakilerden hangisidir?
Doğru Şık (D): Granulamatoz iltihabi lezyon (Crohn's hastalığı)
Açıklama: Gastrointestinal sistem bulguları (diyare, kilo kaybı) ile oral mukozadaki klasik 'kaldırım taşı' (cobblestone) görünümü ve dudak/dişeti şişlikleri, Crohn's hastalığının granulamatoz iltihabi lezyonlarının tipik özellikleridir. Reaktif fibröz büyüme distraktörü yanlıştır, zira epulis gibi reaktif lezyonlar genellikle lokal bir irritana (diştaşı, taşkın dolgu) karşı gelişen izole düğümcüklerdir, oysa burada sistemik bir granülomatöz inflamasyon dokusu söz konusudur. Tedavide lokal önlemler yetersizdir, sistemik hastalığın kontrol altına alınması esastır.

---

### ÇİFT 65 (Benzerlik: 0.70)

**Soru 1 (ID: b6e5e75e-5390-4899-b8de-8b6459941166)**
Soru Kökü: Doku adaptasyon kapasitesini aşan oklüzal yüklerin oluşturduğu travmatik oklüzal kuvvetler, periodontal ligament ve kök yüzeyinde belirgin hasarlar yaratır. Aşağıdakilerden hangisi travmatik oklüzal kuvvetin diş ve destek dokulardaki klasik bulgularından biri **değildir**?
Doğru Şık (A): Radyografik olarak daralmış periodontal ligament aralığı
Açıklama: Travmatik oklüzal kuvvetler periodontal ligament aralığında kompresyon ve nekroz oluşturarak radyografik olarak daralmaya değil, tam tersine kretal bölgede huni şeklinde 'genişlemiş' bir periodontal bağ aralığına neden olurlar. Fremitus, hipersementoz ve kök rezorpsiyonu dokunun bu yıkıcı strese karşı verdiği adaptif ve patolojik klasik hücresel yanıtlardır. Kuvvet ortadan kaldırıldığında mobilite ve aralık genişlemesi reverzibl karakterdedir.

**Soru 2 (ID: b709644c-84f1-44a1-a9d7-a4b60cf136b0)**
Soru Kökü: Endodontik-Periodontal lezyonların (EPL) gelişmesinde iatrojenik veya travmatik faktörler rol oynayabilir. Aşağıdakilerden hangisi kök hasarlı endodontik-periodontal lezyon sınıfına giren durumlardan biri **değildir**?
Doğru Şık (B): Pulpa nekrozuna bağlı apikal patoloji gelişimi
Açıklama: Pulpa nekrozu (kök hasarsız) endodontik enfeksiyonun foraminal veya lateral kanallardan periodonsiyuma sızmasıyla oluşan primer mikrobiyal enfeksiyon bazlı bir endodontik-periodontal lezyondur; anatomik bir kök hasarı içermez. Perforasyonlar, rezorpsiyonlar, çatlaklar ve kırıklar ise kök bütünlüğünün fiziksel olarak bozulduğu (kök hasarlı) durumlardır. Hasarlı lezyonların klinik prognozu hasarın yerine ve seviyesine bağlı olduğu için hasarsız mikrobiyal lezyonlardan daha kötüdür.

---

### ÇİFT 66 (Benzerlik: 0.70)

**Soru 1 (ID: ae7d6c18-06ed-4556-9072-c39e4c5da7a2)**
Soru Kökü: Plazminojen eksikliği, 2017 Periodontal Sınıflandırmasında oral mukoza ve gingival dokuyu etkileyen hastalıklar kategorisinde değerlendirilir. Aşağıdakilerden hangisi bu spesifik genetik kategori başlığı altında yer **almaz**?
Doğru Şık (B): Anjiyo ödem
Açıklama: Anjiyo ödem (C1 inhibitör eksikliği), mukozal defekt değil 'konnektif dokuları etkileyen hastalıklar' başlığı altında yer alan genetik bir vasküler-bağ dokusu reaksiyon bozukluğudur. Distrofik ve Kindler sendromları epidermolizis bülloza şemsiyesi altında doğrudan mukoza etkilenimi gösterir. Bu tasnif, primer doku hedefinin neresi olduğuna göre şekillenir.

**Soru 2 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

---

### ÇİFT 67 (Benzerlik: 0.70)

**Soru 1 (ID: 4e990bea-13cf-41fd-a3c3-dba15121edad)**
Soru Kökü: 22 yaşında kadın hasta, bilateral mandibular osteoliz ve şiddetli periodontal yıkım nedeniyle izlenmekte olup, sistemik olarak nadir görülen Hajdu-Cheney sendromu tanısına sahiptir. Bu sendromun periodontal inflamasyona olan majör etkisi, 2017 sınıflandırmasında hangi patolojik kategori altında konumlandırılmıştır?
Doğru Şık (D): Metabolik ve endokrin hastalıklar
Açıklama: Hajdu-Cheney sendromu, jeneralize osteoporoz ve akro-osteoliz (terminal kemik yıkımı) karakteristiği nedeniyle kemik yapım-yıkım dengesini hücresel metabolizma bazında bozduğu için 'metabolik ve endokrin hastalıklar' içerisinde yer alır. Konnektif doku hastalıkları şıkkı, bağ dokusu zayıflığı zannedilip seçilebilecek güçlü bir çeldiricidir. Ancak hastalık doğrudan kemik doku metabolizmasını vurduğundan metabolik sınıftadır.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 68 (Benzerlik: 0.70)

**Soru 1 (ID: 59d38994-f001-4dd1-9d0a-5619a26cad78)**
Soru Kökü: Periodontal dokuların kaybına majör etkisi olan sistemik düzensizlikler değerlendirildiğinde, nadir görülen genetik durumlardan biri olan "Cohen sendromu" 2017 sınıflandırmasında hangi temel kategorik bozukluk başlığı altında incelenir?
Doğru Şık (E): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Cohen sendromu, genetik kökenli sistemik hastalıklar içerisinde 'immunolojik hastalıklar ile ilişkili hastalıklar' şemsiyesi altında konumlandırılmıştır. Metabolik bozukluklar çeldiricisi, sendromun sistemik etkileri nedeniyle yanıltıcı olabilir ancak sınıflama bağışıklık sistemi defektini referans alır. Hastalık periodontal inflamasyon yanıtını bozarak ataşman kaybını hızlandırır.

**Soru 2 (ID: 992f21ae-d62f-489c-ae46-1b36eba75d6d)**
Soru Kökü: Şiddetli nötropeni spektrumunda yer alan Konjenital nötropeni (Kostmann sendromu), periodontal doku kaybına majör etkisi olan genetik düzensizlikler içinde değerlendirilir. Aşağıdakilerden hangisi, 2017 sınıflandırmasında bu hastalıkla aynı alt kategoride (İmmunolojik hastalıklar ile ilişkili hastalıklar) yer **almaz**?
Doğru Şık (B): Plazminojen eksikliği
Açıklama: Plazminojen eksikliği immunolojik bir bozukluk değil, 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' alt başlığında sınıflandırılan genetik bir durumdur. Diğer seçeneklerin tümü lökosit/nötrofil fonksiyon defektleri veya sistemik bağışıklık anormallikleri üzerinden majör yıkım yapan immunolojik kökenli hastalıklardır. Bu ayrım, defektin doğrudan mukozada mı yoksa sistemik savunma hücrelerinde mi olduğunu belirler.

---

### ÇİFT 69 (Benzerlik: 0.70)

**Soru 1 (ID: 941b0e46-cf22-42d6-a7f3-0f2b79365e91)**
Soru Kökü: 12 yaşında erkek hasta, düzenli aralıklarla tekrarlayan şiddetli dişeti enfeksiyonları şikayetiyle başvuruyor. Tıbbi anamnezinde "Siklik nötropeni" tanısı mevcuttur. Bu hastanın durumu, 2017 Periodontal Sınıflandırmasına göre aşağıdaki ana hastalık başlıklarından hangisi altında değerlendirilir?
Doğru Şık (C): Periodontal inflamasyona etki ederek doku kaybına majör etkisi olan sistemik düzensizlikler
Açıklama: Siklik nötropeni, şiddetli nötropeni alt grubu olarak doğrudan 'periodontal inflamasyona etki ederek periodontal dokuların kaybına majör etkisi olan sistemik düzensizlikler' içerisinde genetik bir hastalık olarak sınıflandırılır. Kazanılmış immun yetmezlik şıkkı, durumun konjenital/genetik kökenini yadsıdığı için yanlıştır. Nötrofil eksikliği periodontal bölgedeki inflamatuar yanıtı dramatik şekilde bozarak primer yıkım etkeni olur.

**Soru 2 (ID: 992f21ae-d62f-489c-ae46-1b36eba75d6d)**
Soru Kökü: Şiddetli nötropeni spektrumunda yer alan Konjenital nötropeni (Kostmann sendromu), periodontal doku kaybına majör etkisi olan genetik düzensizlikler içinde değerlendirilir. Aşağıdakilerden hangisi, 2017 sınıflandırmasında bu hastalıkla aynı alt kategoride (İmmunolojik hastalıklar ile ilişkili hastalıklar) yer **almaz**?
Doğru Şık (B): Plazminojen eksikliği
Açıklama: Plazminojen eksikliği immunolojik bir bozukluk değil, 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' alt başlığında sınıflandırılan genetik bir durumdur. Diğer seçeneklerin tümü lökosit/nötrofil fonksiyon defektleri veya sistemik bağışıklık anormallikleri üzerinden majör yıkım yapan immunolojik kökenli hastalıklardır. Bu ayrım, defektin doğrudan mukozada mı yoksa sistemik savunma hücrelerinde mi olduğunu belirler.

---

### ÇİFT 70 (Benzerlik: 0.70)

**Soru 1 (ID: 64b5d862-ffb2-47e9-892b-1c623c00db41)**
Soru Kökü: 35 yaşında erkek hasta, dişetlerinde jeneralize iltihap ve ülserasyon şikayetiyle başvuruyor. Sistemik anamnezinde Crohn benzeri spesifik İnflamatuar bağırsak hastalığı olduğu görülüyor. 2017 sınıflandırmasına göre bu durum, periodontal doku kaybına majör etkisi olan hastalıkların hangi majör grubunda bulunur?
Doğru Şık (B): İnflamatuar hastalıklar
Açıklama: İnflamatuar bağırsak hastalığı, Epidermolysis bullosa acquisita ile birlikte doğrudan 'İnflamatuar hastalıklar' başlığı altında majör doku kaybı yapan faktörler olarak sınıflandırılır. Oral mukoza hastalıkları güçlü bir çeldiricidir ancak o başlık genetik hastalıkları kapsar (örn. Plazminojen eksikliği). Otoimmün sistemik inflamasyonun ağız boşluğundaki agresif yansıması bu şekilde izole edilmiştir.

**Soru 2 (ID: 66d1d812-2770-473f-ae21-29be8ffab1f6)**
Soru Kökü: Yirmi altı yaşında erkek hasta, uzun süreli diyare, şiddetli karın ağrısı ve kilo kaybı şikayetleri ile gastrointestinal tedavi görmektedir. Oral muayenesinde dişetlerinde yaygın asimetrik şişlikler ve bukkal mukozada 'kaldırım taşı' görünümüne sahip iltihabi doku büyümeleri saptanmıştır. Sınıflandırma sistemine göre bu gingival lezyonun patolojik karakteri aşağıdakilerden hangisidir?
Doğru Şık (D): Granulamatoz iltihabi lezyon (Crohn's hastalığı)
Açıklama: Gastrointestinal sistem bulguları (diyare, kilo kaybı) ile oral mukozadaki klasik 'kaldırım taşı' (cobblestone) görünümü ve dudak/dişeti şişlikleri, Crohn's hastalığının granulamatoz iltihabi lezyonlarının tipik özellikleridir. Reaktif fibröz büyüme distraktörü yanlıştır, zira epulis gibi reaktif lezyonlar genellikle lokal bir irritana (diştaşı, taşkın dolgu) karşı gelişen izole düğümcüklerdir, oysa burada sistemik bir granülomatöz inflamasyon dokusu söz konusudur. Tedavide lokal önlemler yetersizdir, sistemik hastalığın kontrol altına alınması esastır.

---

### ÇİFT 71 (Benzerlik: 0.70)

**Soru 1 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

**Soru 2 (ID: c6ab1ae8-d460-4ec2-8e7c-b6685c864d0a)**
Soru Kökü: Aşağıdakilerden hangisi 2017 sınıflandırmasında belirtilen gingival pigmentasyon nedenlerinden biri **değildir**?
Doğru Şık (D): Fibröz epulis
Açıklama: Fibröz epulis, biyofilm tarafından indüklenmeyen hastalıklarda 'reaktif süreçler' grubunda yer alan lokalize bir doku büyümesidir ve pigmentasyon hastalığı değildir. Melanoplakia, sigara, ilaçlar ve amalgam ise gingival dokuda melanin veya ekzojen materyal birikimi ile karakterize pigmentasyon nedenleridir. Reaktif kitle ile renk değişimi lezyonlarının ayrımı klinik morfolojiye dayanır.

---

### ÇİFT 72 (Benzerlik: 0.70)

**Soru 1 (ID: 0359b6ea-b5ba-4d1b-a8a8-3db0f07c9cc0)**
Soru Kökü: Travmatik oklüzal kuvvetler, bölgenin adaptasyon kapasitesini aşarak periodonsiyumda yaralanmaya yol açan kuvvetlerdir. Aşağıdakilerden hangisi bu kuvvetlere sekonder olarak ortaya çıkan spesifik klinik belirti veya semptomlardan biri **değildir**?
Doğru Şık (A): Marjinal dokularda pürülan eksüda (süpürasyon)
Açıklama: Pürülan eksüda (süpürasyon) bakteriyel bir enfeksiyon ve piyojenik yanıtın sonucudur, saf mekanik bir yüklenme olan okluzal travmanın birincil belirtisi olamaz. Fremitus, diş migrasyonu, termal hassasiyet ve okluzal aşınma ise diş ve çevre dokularının biyomekanik stres altında sergilediği doğrudan yanıtlar ve mikrotravma bulgularıdır. Okluzal travma tek başına enfeksiyon yaratmaz.

**Soru 2 (ID: 94f5daf3-ddc3-42a5-a5f7-2bff5d7b8f25)**
Soru Kökü: Okluzal travma şüphesiyle klinik ve radyografik olarak incelenen bir hastada, aşağıdaki bulgulardan hangisinin varlığı travmatik oklüzal kuvvetlerin spesifik bir göstergesi **olamaz**?
Doğru Şık (C): İnterdental papilde kraterleşme
Açıklama: İnterdental papilde kraterleşme, spesifik olarak Nekrotizan Periodontal Hastalıkların (NPD) patognomonik bir yumuşak doku lezyonudur ve doku nekrozuna işaret eder. Genişlemiş periodontal ligament aralığı, çiğneme ağrısı, kök rezorpsiyonu ve pulpal kan akımı değişikliklerine ikincil termal hassasiyet ise okluzal travmanın klasik adaptif/yıkıcı belirtileridir. Yumuşak doku krateri okluzal stüdrüs ile açıklanamaz.

---

### ÇİFT 73 (Benzerlik: 0.70)

**Soru 1 (ID: 1a498cb4-0370-4c13-af39-438ea76b0762)**
Soru Kökü: Sistemik granülomatöz hastalıklardan biri olan "Granulomatosis with polyangiitis", çenelerde lokal periodontal yıkım bölgeleri yaratabilir. Aşağıdaki patolojilerden hangisi, 2017 sınıflandırmasında "Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler" grubunda bu hastalıkla aynı alt kategoride (diğer hastalıklar) yer alır?
Doğru Şık (D): Giant cell granulomas
Açıklama: Giant cell granulomas ve Granulomatosis with polyangiitis, periodontal dokuları etkileyen diğer hastalıklar olarak 'Periodontitisten bağımsız olarak periodontal doku kaybıyla sonuçlanan durumlar' grubundadır. Romatoid artrit en güçlü çeldiricidir ancak sadece patogenezi etkileyen/modifiye eden gruba aittir, dokuyu bağımsız olarak yıkmaz. Granülomatöz lezyonlar, inflamatuar hücre kitleleri ile basınç ve rezorpsiyon oluşturarak plak/cebi atlayıp kemiği doğrudan destrükte edebilirler.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 74 (Benzerlik: 0.70)

**Soru 1 (ID: 384396c4-4082-46fe-af3c-1ea01d772169)**
Soru Kökü: 2017 sınıflandırmasına göre, periodontitis olmayan hastalarda periodontal apse gelişimine neden olabilen ve kök yüzeyi morfolojisini majör derecede bozan lokal faktörlerden 'şiddetli anatomik değişiklikler' arasında aşağıdakilerden hangisi bulunur?
Doğru Şık (B): Dens eveginatus
Açıklama: Dens eveginatus, normal diş konturunun dışında tüberkül/ek eklenti oluşumuyla karakterize şiddetli bir anatomik değişikliktir ve cep formasyonuna, ardından apse gelişimine yatkınlık yaratır. Çatlak diş sendromu ciddi kök hasarıdır; impaksiyon dışarıdan giren yabancı cisimdir. Semental tears ise sadece kök yüzeyi düzeyinde kalan minör bir değişikliktir.

**Soru 2 (ID: 717e447c-17de-45ad-8daa-da6bcaf73293)**
Soru Kökü: Periodontal apse etiyolojisi belirlenirken kök yüzeyi değişiklikleri majör bir rol oynar. Bu bağlamda izole, hızlı ataşman kaybıyla seyreden 'semental tears (sement yırtıkları)' aşağıdaki kategorilerden hangisinde sınıflandırılmaktadır?
Doğru Şık (C): Minör anatomik değişiklikler
Açıklama: Semental tears, sement dokusunun dentinden lokalize olarak ayrılmasıdır ve 2017 sınıflandırmasına göre 'minör anatomik değişiklikler' arasında sayılır. Ciddi kök hasarı kırıklar veya şiddetli eksternal rezorpsiyonları kapsarken, sement yırtığı sadece sement kalınlığında gerçekleştiğinden minör grubundadır. Bu ayrım, kök bütünlüğünün pulpayı içerecek seviyede bozulup bozulmadığıyla ilişkilidir.

---

### ÇİFT 75 (Benzerlik: 0.70)

**Soru 1 (ID: 4e990bea-13cf-41fd-a3c3-dba15121edad)**
Soru Kökü: 22 yaşında kadın hasta, bilateral mandibular osteoliz ve şiddetli periodontal yıkım nedeniyle izlenmekte olup, sistemik olarak nadir görülen Hajdu-Cheney sendromu tanısına sahiptir. Bu sendromun periodontal inflamasyona olan majör etkisi, 2017 sınıflandırmasında hangi patolojik kategori altında konumlandırılmıştır?
Doğru Şık (D): Metabolik ve endokrin hastalıklar
Açıklama: Hajdu-Cheney sendromu, jeneralize osteoporoz ve akro-osteoliz (terminal kemik yıkımı) karakteristiği nedeniyle kemik yapım-yıkım dengesini hücresel metabolizma bazında bozduğu için 'metabolik ve endokrin hastalıklar' içerisinde yer alır. Konnektif doku hastalıkları şıkkı, bağ dokusu zayıflığı zannedilip seçilebilecek güçlü bir çeldiricidir. Ancak hastalık doğrudan kemik doku metabolizmasını vurduğundan metabolik sınıftadır.

**Soru 2 (ID: 59d38994-f001-4dd1-9d0a-5619a26cad78)**
Soru Kökü: Periodontal dokuların kaybına majör etkisi olan sistemik düzensizlikler değerlendirildiğinde, nadir görülen genetik durumlardan biri olan "Cohen sendromu" 2017 sınıflandırmasında hangi temel kategorik bozukluk başlığı altında incelenir?
Doğru Şık (E): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Cohen sendromu, genetik kökenli sistemik hastalıklar içerisinde 'immunolojik hastalıklar ile ilişkili hastalıklar' şemsiyesi altında konumlandırılmıştır. Metabolik bozukluklar çeldiricisi, sendromun sistemik etkileri nedeniyle yanıltıcı olabilir ancak sınıflama bağışıklık sistemi defektini referans alır. Hastalık periodontal inflamasyon yanıtını bozarak ataşman kaybını hızlandırır.

---

### ÇİFT 76 (Benzerlik: 0.70)

**Soru 1 (ID: 25a84d86-d935-4365-bab6-088f823dd523)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar içindeki malign neoplazmalardan biri **değildir**?
Doğru Şık (D): Lökoplaki
Açıklama: Lökoplaki, invaziv bir kanser olmayıp epiteldeki hücresel değişimleri ifade eden premalign bir lezyondur. Skuamöz hücreli karsinoma, lösemik hücre infiltrasyonu ve lenfomalar (Hodgkin ve Non-Hodgkin) ise gingivayı etkileyebilen kesin malign neoplazmalardır. Hücrelerin bazal membranı aşıp invaze olma durumu bu kesin ayrımın histolojik temelidir.

**Soru 2 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

---

### ÇİFT 77 (Benzerlik: 0.70)

**Soru 1 (ID: 992f21ae-d62f-489c-ae46-1b36eba75d6d)**
Soru Kökü: Şiddetli nötropeni spektrumunda yer alan Konjenital nötropeni (Kostmann sendromu), periodontal doku kaybına majör etkisi olan genetik düzensizlikler içinde değerlendirilir. Aşağıdakilerden hangisi, 2017 sınıflandırmasında bu hastalıkla aynı alt kategoride (İmmunolojik hastalıklar ile ilişkili hastalıklar) yer **almaz**?
Doğru Şık (B): Plazminojen eksikliği
Açıklama: Plazminojen eksikliği immunolojik bir bozukluk değil, 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' alt başlığında sınıflandırılan genetik bir durumdur. Diğer seçeneklerin tümü lökosit/nötrofil fonksiyon defektleri veya sistemik bağışıklık anormallikleri üzerinden majör yıkım yapan immunolojik kökenli hastalıklardır. Bu ayrım, defektin doğrudan mukozada mı yoksa sistemik savunma hücrelerinde mi olduğunu belirler.

**Soru 2 (ID: f541605e-fb60-40e6-aa61-69008c38ba15)**
Soru Kökü: 15 yaşında erkek hasta, dişetlerinde şiddetli kanama ve ilerleyici yıkım tablosuyla kliniğe başvuruyor. Tıbbi konsültasyon sonucunda hastaya nadir görülen Haim-Mumk sendromu tanısı konulduğu öğreniliyor. 2017 Periodontal Sınıflandırmasına göre hastanın bu sistemik durumu "genetik hastalıklar" başlığı altında spesifik olarak hangi alt grupta değerlendirilmelidir?
Doğru Şık (A): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Haim-Mumk sendromu, periodontal inflamasyona etki ederek majör doku kaybı yapan genetik hastalıklar arasında 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubunda sınıflandırılır. En güçlü çeldirici olan konnektif doku hastalıkları seçeneği, kollajen defekti yapan durumları (örn. Ehlers-Danlos) içerdiği için bu vakada yanlıştır. Sınıflandırma, hastalığın periodontal dokudaki defektif bağışıklık yanıtı üzerinden yarattığı şiddetli yıkım mekanizmasını bu şekilde konumlandırır.

---

### ÇİFT 78 (Benzerlik: 0.70)

**Soru 1 (ID: 992f21ae-d62f-489c-ae46-1b36eba75d6d)**
Soru Kökü: Şiddetli nötropeni spektrumunda yer alan Konjenital nötropeni (Kostmann sendromu), periodontal doku kaybına majör etkisi olan genetik düzensizlikler içinde değerlendirilir. Aşağıdakilerden hangisi, 2017 sınıflandırmasında bu hastalıkla aynı alt kategoride (İmmunolojik hastalıklar ile ilişkili hastalıklar) yer **almaz**?
Doğru Şık (B): Plazminojen eksikliği
Açıklama: Plazminojen eksikliği immunolojik bir bozukluk değil, 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' alt başlığında sınıflandırılan genetik bir durumdur. Diğer seçeneklerin tümü lökosit/nötrofil fonksiyon defektleri veya sistemik bağışıklık anormallikleri üzerinden majör yıkım yapan immunolojik kökenli hastalıklardır. Bu ayrım, defektin doğrudan mukozada mı yoksa sistemik savunma hücrelerinde mi olduğunu belirler.

**Soru 2 (ID: aed469f9-2476-4a21-b9a0-238462538d9f)**
Soru Kökü: Aşağıdakilerden hangisi 2017 gingival hastalıklar sınıflandırmasında, 'Deri ve mukoz membranları ilgilendiren otoimmün hastalıklar' ana kategorisi altında tanımlanmış patolojik tablolardan biri **değildir**?
Doğru Şık (D): Plasma cell gingivitis
Açıklama: Plasma cell gingivitis, otoimmün deri hastalıkları altında değil; kontakt alerji ve erythema multiforme ile birlikte 'İltihabi ve immünolojik durumlar - Hipersensitivite reaksiyonları' başlığı altında sınıflandırılmıştır. Sistemik lupus eritematosis distraktörü yanlıştır, çünkü SLE doğrudan dokulara saldıran otoantikorlarla seyreden sistemik otoimmün bir deri ve mukoza hastalığıdır. Otoimmün gruptaki hastalıkların ortak özelliği, doku destrüksiyonunu endojen otoantikorların başlatmasıdır.

---

### ÇİFT 79 (Benzerlik: 0.70)

**Soru 1 (ID: adc8d526-d594-47ea-b296-147f68467c81)**
Soru Kökü: 25 yaşında kadın hasta, plaktan bağımsız ilerleyen dişeti çekilmesi ve erken diş kaybı şikayetiyle başvuruyor. Anamnezinde Tip VIII Ehlers-Danlos sendromu öyküsü bulunmaktadır. Hastanın bu durumu, 2017 sınıflandırmasına göre periodontal dokuları hangi patolojik başlık altında yıkıma uğratır?
Doğru Şık (C): Konnektif dokuları etkileyen hastalıklar
Açıklama: Ehlers-Danlos sendromu, Tip IV ve VIII formlarıyla 'konnektif dokuları etkileyen hastalıklar' başlığı altında sınıflandırılmıştır. Oral mukoza hastalıkları çeldiricisi yüzeysel epitel defektlerini kapsarken, Ehlers-Danlos doğrudan periodontal ligamentin ve bağ dokusunun kollajen bütünlüğünü bozduğu için konnektif doku grubundadır. Sınıflandırma, defektin bağ dokusunun derin fibriler yapısında olduğunu işaret eder.

**Soru 2 (ID: da9bef12-0a5b-493d-9791-bc738aaf1ae9)**
Soru Kökü: 8 yaşında kız hasta, yaygın dişeti kanaması ve kolay soyulan oral mukoza lezyonları ile kliniğe başvuruyor. Yapılan konsültasyonda epidermolizis bülloza spektrumundaki "Kindler sendromu" teşhisi konuluyor. Bu hastalık, periodontal majör yıkım yapan genetik bozukluklar içerisinde hangi spesifik grupta yer alır?
Doğru Şık (A): Oral mukoza ve gingival dokuyu etkileyen hastalıklar
Açıklama: Kindler sendromu, Epidermolizis bülloza ile birlikte 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' altında sınıflandırılan genetik bir patolojidir. İnflamatuar hastalıklar seçeneği (Epidermolysis bullosa acquisita'nın bulunduğu yer) genetik olmayan sonradan kazanılmış benzer tabloları içerdiği için bu genetik senaryoda yanlıştır. Doku frajilitesi doğrudan epitelyal bütünlüğün bozulmasından kaynaklanır.

---

### ÇİFT 80 (Benzerlik: 0.70)

**Soru 1 (ID: da9ddb1b-d97f-4501-8408-b3ec70368dc2)**
Soru Kökü: Metabolik ve endokrin hastalıklar kategorisinde sınıflandırılan ve periodontal doku kaybına majör etkisi olan "Glikojen depo hastalığı", aşağıdaki genetik sistemik durumlardan hangisi ile aynı alt grupta **sınıflandırılmaz**?
Doğru Şık (E): Cohen sendromu
Açıklama: Cohen sendromu metabolik veya endokrin kökenli değil, 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubundadır. Glikojen depo, Gaucher, Hipofosfatazya ve Hajdu-Cheney doğrudan sistemik metabolizmayı ve mineralizasyon dengesini bozarak majör kemik/ataşman kaybı yapan metabolik hastalıklar olarak aynı listede bulunur. Sınıflama, yıkımın bağışıklık çöküşünden mi yoksa metabolik/kemik turnover defektinden mi kaynaklandığını ayırır.

**Soru 2 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

---

### ÇİFT 81 (Benzerlik: 0.70)

**Soru 1 (ID: 0a732f57-a316-41d1-9f0c-39143c2d9821)**
Soru Kökü: Distrofik epidermolizis bülloza genetik bir mukoza hastalığı iken, benzer vezikülobüllöz lezyonlar gösteren "Epidermolysis bullosa acquisita" 2017 Periodontal Sınıflandırmasında genetik olmayan hangi farklı kategori altındadır?
Doğru Şık (A): İnflamatuar hastalıklar
Açıklama: Epidermolysis bullosa acquisita (EBA), inflamatuar bağırsak hastalıkları ile beraber 'İnflamatuar hastalıklar' kategorisinde sınıflandırılmış otoimmün kazanılmış bir hastalıktır. Genetik formları olan epidermolizis bülloza (Kindler, Distrofik) oral mukoza hastalıkları başlığında yer aldığı için karıştırılmaya çok müsaittir. 'Acquisita' terimi hastalığın sonradan gelişen, otoimmün ve inflamatuar tabiatına işaret eder.

**Soru 2 (ID: da9bef12-0a5b-493d-9791-bc738aaf1ae9)**
Soru Kökü: 8 yaşında kız hasta, yaygın dişeti kanaması ve kolay soyulan oral mukoza lezyonları ile kliniğe başvuruyor. Yapılan konsültasyonda epidermolizis bülloza spektrumundaki "Kindler sendromu" teşhisi konuluyor. Bu hastalık, periodontal majör yıkım yapan genetik bozukluklar içerisinde hangi spesifik grupta yer alır?
Doğru Şık (A): Oral mukoza ve gingival dokuyu etkileyen hastalıklar
Açıklama: Kindler sendromu, Epidermolizis bülloza ile birlikte 'oral mukoza ve gingival dokuyu etkileyen hastalıklar' altında sınıflandırılan genetik bir patolojidir. İnflamatuar hastalıklar seçeneği (Epidermolysis bullosa acquisita'nın bulunduğu yer) genetik olmayan sonradan kazanılmış benzer tabloları içerdiği için bu genetik senaryoda yanlıştır. Doku frajilitesi doğrudan epitelyal bütünlüğün bozulmasından kaynaklanır.

---

### ÇİFT 82 (Benzerlik: 0.69)

**Soru 1 (ID: da9ddb1b-d97f-4501-8408-b3ec70368dc2)**
Soru Kökü: Metabolik ve endokrin hastalıklar kategorisinde sınıflandırılan ve periodontal doku kaybına majör etkisi olan "Glikojen depo hastalığı", aşağıdaki genetik sistemik durumlardan hangisi ile aynı alt grupta **sınıflandırılmaz**?
Doğru Şık (E): Cohen sendromu
Açıklama: Cohen sendromu metabolik veya endokrin kökenli değil, 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubundadır. Glikojen depo, Gaucher, Hipofosfatazya ve Hajdu-Cheney doğrudan sistemik metabolizmayı ve mineralizasyon dengesini bozarak majör kemik/ataşman kaybı yapan metabolik hastalıklar olarak aynı listede bulunur. Sınıflama, yıkımın bağışıklık çöküşünden mi yoksa metabolik/kemik turnover defektinden mi kaynaklandığını ayırır.

**Soru 2 (ID: dd43ab91-ee64-4d93-a693-69f0c34112bc)**
Soru Kökü: 40 yaşında erkek hasta, dişhekimine şiddetli ve generalize alveolar kemik yıkımı tablosuyla başvuruyor. Tıbbi kayıtlarında lipid depo bozukluğu olan "Gaucher hastalığı" saptanıyor. 2017 Sınıflandırmasına göre bu hastalık periodontal inflamasyona etki eden hangi ana sistemik başlık altında konumlandırılır?
Doğru Şık (A): Metabolik ve endokrin hastalıklar
Açıklama: Gaucher hastalığı, lizozomal depo bozukluğu yapısı gereği 2017 sınıflandırmasında 'Metabolik ve endokrin hastalıklar' majör başlığındadır. İmmunolojik bozukluklar güçlü bir çeldiricidir çünkü makrofaj fonksiyonları da bozulur; ancak temel patoloji enzim eksikliği olduğu için metabolik sınıftadır. Bu durum çene kemiklerinde infiltrasyona ve kistik lezyonlara yol açarak doğrudan yıkım yapar.

---

### ÇİFT 83 (Benzerlik: 0.69)

**Soru 1 (ID: 0647f05e-ed66-4a8a-81c4-96cf1575461f)**
Soru Kökü: Metabolik ve endokrin genetik hastalıklar grubunda yer alan "Hipofosfatazya", erken süt dişi kaybı ve şiddetli periodontal yıkımla karakterizedir. Aşağıdakilerden hangisi bu sendromla 2017 sınıflandırmasında aynı majör alt grupta yer **almaz**?
Doğru Şık (B): Ehlers-Danlos sendromu
Açıklama: Ehlers-Danlos sendromu metabolik/endokrin değil, 'konnektif dokuları etkileyen hastalıklar' grubundadır. Hipofosfatazya, çimentum oluşumunu engelleyerek genetik kaynaklı majör periodontal kayba neden olur ve kemik mineralizasyon bozukluğu olan rickets ve osteoliz yapan Hajdu-Cheney ile birlikte metabolik grupta incelenir. Bağ dokusu fibril defektleri ile mineralizasyon/metabolizma defektleri sınıflandırmada net şekilde ayrılmıştır.

**Soru 2 (ID: f541605e-fb60-40e6-aa61-69008c38ba15)**
Soru Kökü: 15 yaşında erkek hasta, dişetlerinde şiddetli kanama ve ilerleyici yıkım tablosuyla kliniğe başvuruyor. Tıbbi konsültasyon sonucunda hastaya nadir görülen Haim-Mumk sendromu tanısı konulduğu öğreniliyor. 2017 Periodontal Sınıflandırmasına göre hastanın bu sistemik durumu "genetik hastalıklar" başlığı altında spesifik olarak hangi alt grupta değerlendirilmelidir?
Doğru Şık (A): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Haim-Mumk sendromu, periodontal inflamasyona etki ederek majör doku kaybı yapan genetik hastalıklar arasında 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubunda sınıflandırılır. En güçlü çeldirici olan konnektif doku hastalıkları seçeneği, kollajen defekti yapan durumları (örn. Ehlers-Danlos) içerdiği için bu vakada yanlıştır. Sınıflandırma, hastalığın periodontal dokudaki defektif bağışıklık yanıtı üzerinden yarattığı şiddetli yıkım mekanizmasını bu şekilde konumlandırır.

---

### ÇİFT 84 (Benzerlik: 0.69)

**Soru 1 (ID: 25a84d86-d935-4365-bab6-088f823dd523)**
Soru Kökü: Aşağıdakilerden hangisi biyofilm tarafından indüklenmeyen gingival hastalıklar içindeki malign neoplazmalardan biri **değildir**?
Doğru Şık (D): Lökoplaki
Açıklama: Lökoplaki, invaziv bir kanser olmayıp epiteldeki hücresel değişimleri ifade eden premalign bir lezyondur. Skuamöz hücreli karsinoma, lösemik hücre infiltrasyonu ve lenfomalar (Hodgkin ve Non-Hodgkin) ise gingivayı etkileyebilen kesin malign neoplazmalardır. Hücrelerin bazal membranı aşıp invaze olma durumu bu kesin ayrımın histolojik temelidir.

**Soru 2 (ID: c6ab1ae8-d460-4ec2-8e7c-b6685c864d0a)**
Soru Kökü: Aşağıdakilerden hangisi 2017 sınıflandırmasında belirtilen gingival pigmentasyon nedenlerinden biri **değildir**?
Doğru Şık (D): Fibröz epulis
Açıklama: Fibröz epulis, biyofilm tarafından indüklenmeyen hastalıklarda 'reaktif süreçler' grubunda yer alan lokalize bir doku büyümesidir ve pigmentasyon hastalığı değildir. Melanoplakia, sigara, ilaçlar ve amalgam ise gingival dokuda melanin veya ekzojen materyal birikimi ile karakterize pigmentasyon nedenleridir. Reaktif kitle ile renk değişimi lezyonlarının ayrımı klinik morfolojiye dayanır.

---

### ÇİFT 85 (Benzerlik: 0.69)

**Soru 1 (ID: e581acaf-fc1e-4ede-84ca-4c0f1b6150fa)**
Soru Kökü: 2017 sınıflandırmasında 'Periodontitisten bağımsız olarak periodontal dokuların kaybıyla sonuçlanan sistemik düzensizlikler' başlığı altında, doğrudan litik kemik dokusu kaybına veya spesifik doku yıkımına yol açan sendromlar tanımlanmıştır. Aşağıdakilerden hangisi bu başlık altında yer alan hastalıklardan biri **değildir**?
Doğru Şık (B): Lökosit adezyon yetmezliği sendromu
Açıklama: Lökosit adezyon yetmezliği sendromu, immünolojik yanıtı (nötrofil migrasyonunu) bozarak plağa karşı gelişen savunmayı çökertir ve bu mekanizma üzerinden şiddetli yıkım yapar; bu nedenle 'Periodontal inflamasyona etki ederek doku kaybına yol açan' hastalıklar grubundadır. Gorham-Stout sendromu (kaybolan kemik hastalığı), Langerhans hücreli histiyositoz ve granülomatöz polianjiit ise periodontitis inflamasyonundan bağımsız, kendi idyopatik litik mekanizmalarıyla doğrudan doku yıkımı yapan hastalıklardır.

**Soru 2 (ID: f541605e-fb60-40e6-aa61-69008c38ba15)**
Soru Kökü: 15 yaşında erkek hasta, dişetlerinde şiddetli kanama ve ilerleyici yıkım tablosuyla kliniğe başvuruyor. Tıbbi konsültasyon sonucunda hastaya nadir görülen Haim-Mumk sendromu tanısı konulduğu öğreniliyor. 2017 Periodontal Sınıflandırmasına göre hastanın bu sistemik durumu "genetik hastalıklar" başlığı altında spesifik olarak hangi alt grupta değerlendirilmelidir?
Doğru Şık (A): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Haim-Mumk sendromu, periodontal inflamasyona etki ederek majör doku kaybı yapan genetik hastalıklar arasında 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubunda sınıflandırılır. En güçlü çeldirici olan konnektif doku hastalıkları seçeneği, kollajen defekti yapan durumları (örn. Ehlers-Danlos) içerdiği için bu vakada yanlıştır. Sınıflandırma, hastalığın periodontal dokudaki defektif bağışıklık yanıtı üzerinden yarattığı şiddetli yıkım mekanizmasını bu şekilde konumlandırır.

---

### ÇİFT 86 (Benzerlik: 0.69)

**Soru 1 (ID: dd43ab91-ee64-4d93-a693-69f0c34112bc)**
Soru Kökü: 40 yaşında erkek hasta, dişhekimine şiddetli ve generalize alveolar kemik yıkımı tablosuyla başvuruyor. Tıbbi kayıtlarında lipid depo bozukluğu olan "Gaucher hastalığı" saptanıyor. 2017 Sınıflandırmasına göre bu hastalık periodontal inflamasyona etki eden hangi ana sistemik başlık altında konumlandırılır?
Doğru Şık (A): Metabolik ve endokrin hastalıklar
Açıklama: Gaucher hastalığı, lizozomal depo bozukluğu yapısı gereği 2017 sınıflandırmasında 'Metabolik ve endokrin hastalıklar' majör başlığındadır. İmmunolojik bozukluklar güçlü bir çeldiricidir çünkü makrofaj fonksiyonları da bozulur; ancak temel patoloji enzim eksikliği olduğu için metabolik sınıftadır. Bu durum çene kemiklerinde infiltrasyona ve kistik lezyonlara yol açarak doğrudan yıkım yapar.

**Soru 2 (ID: f541605e-fb60-40e6-aa61-69008c38ba15)**
Soru Kökü: 15 yaşında erkek hasta, dişetlerinde şiddetli kanama ve ilerleyici yıkım tablosuyla kliniğe başvuruyor. Tıbbi konsültasyon sonucunda hastaya nadir görülen Haim-Mumk sendromu tanısı konulduğu öğreniliyor. 2017 Periodontal Sınıflandırmasına göre hastanın bu sistemik durumu "genetik hastalıklar" başlığı altında spesifik olarak hangi alt grupta değerlendirilmelidir?
Doğru Şık (A): İmmunolojik hastalıklar ile ilişkili hastalıklar
Açıklama: Haim-Mumk sendromu, periodontal inflamasyona etki ederek majör doku kaybı yapan genetik hastalıklar arasında 'immunolojik hastalıklar ile ilişkili hastalıklar' alt grubunda sınıflandırılır. En güçlü çeldirici olan konnektif doku hastalıkları seçeneği, kollajen defekti yapan durumları (örn. Ehlers-Danlos) içerdiği için bu vakada yanlıştır. Sınıflandırma, hastalığın periodontal dokudaki defektif bağışıklık yanıtı üzerinden yarattığı şiddetli yıkım mekanizmasını bu şekilde konumlandırır.

---

### ÇİFT 87 (Benzerlik: 0.69)

**Soru 1 (ID: b1a613eb-5bd9-4a99-b7a7-35ccd0806487)**
Soru Kökü: Kırk beş yaşında erkek hasta, 46 numaralı implant bölgesinde fırçalama sırasında kanama ve kızarıklık şikayetiyle başvurmuştur. Yapılan klinik muayenede sondlamada kanama saptanmış, radyografik incelemede implantın yerleştirildiği döneme ait geçmiş verilerle karşılaştırıldığında marjinal kemik seviyesinde herhangi bir kayıp gözlenmemiştir. Bu hastadaki en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Peri-implant mukositis
Açıklama: Peri-implant mukositis, klinik olarak sondlamada kanama ve görsel iltihap belirtileri ile karakterize olup, kemik kaybının eşlik etmediği reverzibl bir durumdur. Peri-implantitis distraktörü yanlıştır çünkü bu tanıyı koyabilmek için ilerleyici alveolar kemik kaybının (genellikle ≥3 mm) radyografik olarak saptanması gerekir. Bu durum, plağın elimine edilmesiyle tamamen geri döndürülebilir ve peri-implant sağlığa kavuşulabilir.

**Soru 2 (ID: c686d9cb-306c-4ba0-8c8d-ff22135eaa45)**
Soru Kökü: Kırk beş yaşında kadın hasta, daha önce kron uzatma operasyonu geçirdiği dişlerinde kanama şikayeti ile kliniğe başvuruyor. Yapılan muayenede tüm sondalama derinliklerinin ≤ 3 mm olduğu, ataşman kaybının bulunduğu ve sondlamada kanama oranının %12 olduğu tespit ediliyor. Bu hastanın güncel periodontal tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Periodontitis olmayan hastada azalmış periodonsiyumda gingivitis
Açıklama: Kron uzatma operasyonuna bağlı ataşman kaybı olan (periodontitis öyküsü olmayan) azalmış periodonsiyum olgularında, cep derinliği ≤ 3 mm ve kanama %10'un üzerinde ise tanı gingivitistir. Kanama skorunun %10'u geçmesi hastanın 'klinik sağlık' kategorisinden çıkmasına neden olduğundan sağlık şıkları elenir. Ataşman kaybı travma veya iatrojenik (kron uzatma) kaynaklı olduğunda, periodontitis tanısı konulamaz.

---

