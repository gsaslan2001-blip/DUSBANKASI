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

### ÇİFT 1 (Benzerlik: 0.86)

**Soru 1 (ID: 5df85f67-09a8-42af-be69-86b0f6405bca)**
Soru Kökü: Melanositler ürettikleri melanozomları dendritik uzantıları vasıtasıyla doğrudan komşu keratinositlerin içerisine aktarırlar. Veziküllerin bu şekilde doğrudan bir hücreden diğerine aktarılması modeline ne ad verilir?
Doğru Şık (E): Sitokrin salgı
Açıklama: Sitokrin salgı, bir hücrenin ürettiği spesifik molekülleri veya vezikülleri (melanozom gibi) dendritik uzantıları ile doğrudan başka bir hücrenin sitoplazmasına enjekte etmesi işlemidir. Holokrin salgı (yağ bezleri) tüm hücrenin parçalanmasını, merokrin salgı ise klasik ekzositozu tanımlar. Melanosit-keratinosit etkileşimi sitokrin aktarımın histolojideki en prototipik örneğidir.

**Soru 2 (ID: fa0463a0-5a36-4b76-96ed-833a87fe4abf)**
Soru Kökü: Melanositlerin sitoplazmalarında ürettikleri melanozomları, uzun dendritik uzantıları aracılığıyla doğrudan komşu keratinositlerin sitoplazmasına aktarması şeklindeki hücreden hücreye transfer mekanizmasına ne ad verilir?
Doğru Şık (E): Sitokrin salgı
Açıklama: Melanositlerin dendritik uzantılarıyla kendi sentezledikleri yapıları (melanozomları) doğrudan başka bir hücrenin (keratinosit) içine zerk etmesi olayına sitokrin salgı denir. Holokrin veya apokrin salgı mekanizmaları hücrenin parçalanması veya zar kaybıyla dış ortama salınımı ifade ederken, sitokrin salgı interselüler pigmentasyon dağılımına has, hücreler arası direkt transferdir. Bu sistem sayesinde melanin, hücre çekirdeğinin üzerini kapatarak DNA'yı UV hasarından korur.

---

### ÇİFT 2 (Benzerlik: 0.79)

**Soru 1 (ID: 114b6fbc-d8a7-4fe2-8d92-4cd1fd4e602e)**
Soru Kökü: Epidermisin hücresel yenilenme dinamiğinde 'Malpighi tabakası' kritik rol oynar. Bu tabaka ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Keratohiyalin granüllerinin sentezlenip belirginleştiği poligonal katmandır.
Açıklama: Keratohiyalin granülleri Malpighi tabakasında (bazale + spinozum) değil, bir üst katman olan stratum granulozum tabakasında belirginleşir. Malpighi tabakası epidermisin proliferatif ve yapısal omurgasını oluşturur, yoğun mitoz ve desmozom aktivitesi ile karakterizedir. Granülozum aşamasında ise hücreler mitozu durdurur ve organellerini kaybetmeye başlayarak keratinizasyon sürecinin son evresine girer.

**Soru 2 (ID: 5a8735b4-df0d-4e81-b214-13e8cf8ffec2)**
Soru Kökü: Epidermisin en dış yüzeyini oluşturan stratum korneum tabakası ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Sitoplazmalarında bol miktarda keratohiyalin granülü barındırır.
Açıklama: Keratohiyalin granülleri stratum korneumda değil, daha derindeki stratum granulozum tabakasında bulunur ve apoptoz/keratinizasyon sürecine hizmet eder. Stratum korneumdaki hücreler (korneositler) tüm organellerini ve çekirdeklerini kaybetmiş, tamamen ölü ve keratin ile paketlenmiş yapılardır. Bu ölü hücre yığını derinin temel hidrasyon bariyerini oluşturur.

---

### ÇİFT 3 (Benzerlik: 0.75)

**Soru 1 (ID: 1f78452f-bdc4-41a5-ae52-00582aaf7b88)**
Soru Kökü: 3 yaşında erkek çocuk, hafif mekanik travmalar sonrasında derisinde su dolu kabarcıklar (bül) gelişmesi şikayetiyle getiriliyor. Yapılan genetik incelemede Epidermolizis bulloza simpleks tanısı konuluyor. Bu hastada patolojiye neden olan mutasyon, epidermal keratinositlerde sentezlenen aşağıdaki keratin tiplerinden hangilerini doğrudan etkilemektedir?
Doğru Şık (C): Keratin 5 ve 14
Açıklama: Epidermolizis bulloza simpleks, bazal tabakadaki keratinositlerde eksprese edilen keratin 5 ve 14 genlerindeki mutasyonlar sonucu gelişir. Çeldirici olarak verilen keratin 1 ve 10 mutasyonları ise epidermolitik hiperkeratoz tablosuna neden olmaktadır. Keratin arafilamanlarındaki bu yapısal zayıflık, bazal tabakanın mekanik direncini düşürerek epidermisin dermisten travma ile kolayca ayrılmasına yol açar.

**Soru 2 (ID: eeaa75af-e395-4110-949d-7936b3904e75)**
Soru Kökü: Dermatoloji kliniğine başvuran bir hastada, derinin üst tabakalarında keratin ağının çökmesiyle seyreden epidermolitik hiperkeratoz saptanıyor. Bu hastalığın patogenezinden sorumlu olan epidermal hücre iskeleti defekti, hangi keratin gen çiftindeki mutasyondan kaynaklanmaktadır?
Doğru Şık (A): Keratin 1 ve 10
Açıklama: Epidermolitik hiperkeratoz, stratum spinozum ve granulozum tabakalarında eksprese edilen keratin 1 ve 10 genlerindeki mutasyonlar sonucu ortaya çıkar. Keratin 5 ve 14 mutasyonları ise bazal tabakayı zayıflatarak epidermolizis bulloza simpleks hastalığına neden olur. Tabakaya özgü keratin ekspresyon profili, genetik deri hastalıklarının kliniğini belirleyen temel unsurdur.

---

