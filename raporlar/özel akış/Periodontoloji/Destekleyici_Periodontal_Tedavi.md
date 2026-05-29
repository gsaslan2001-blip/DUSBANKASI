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

**Soru 1 (ID: 4debb6dc-ce29-4d11-924a-5705c4c07ac2)**
Soru Kökü: Hamilelik ve periodontal hastalık arasındaki ilişkiyi inceleyen çalışmalara göre, erken doğum yapan kadınların amnion sıvısında subgingival plaktaki suşlarla benzerlik gösteren ve erken doğum riskiyle en sık ilişkilendirilen periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (E): Fusobacterium nucleatum
Açıklama: Erken doğum yapan kadınların amnion sıvısında en sık izole edilen bakteri F. nucleatum'dur ve subgingival plak ile genetik benzerlik gösterir. Bu patojen amniyonik dokularda PGE2 ve PGF2 alfa seviyelerini uyararak genitoüriner bir enfeksiyon olmadan bile erken uterin kontraksiyonlara ve erken doğuma neden olabilir.

**Soru 2 (ID: 58639162-1559-47a3-a160-7d9b0afe66fc)**
Soru Kökü: Periodontal enfeksiyonların hamilelik komplikasyonları ile ilişkisi araştırıldığında, erken doğum yapan kadınların amnion sıvısı kültürlerinden izole edilen ve subgingival plaktaki suşlarla birebir benzerlik gösterdiği kanıtlanan spesifik anaerobik mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (E): Fusobacterium nucleatum
Açıklama: Fusobacterium nucleatum, subgingival plakta yoğun bulunan ve erken doğum yapan annelerin amnion sıvısı kültürlerinde en sık izole edilen spesifik mikroorganizmadır. Bakterinin feto-plasental üniteye hematojen yolla ulaşarak PGE2 ve PGF2 alfa gibi erken doğumu başlatan proinflamatuvar mediyatörlerin artışına yol açtığı ve patogenezde kilit rol oynadığı gösterilmiştir.

---

### ÇİFT 2 (Benzerlik: 0.85)

**Soru 1 (ID: 50664af6-5edd-416a-b969-7657727a2cbb)**
Soru Kökü: Böbrek transplantasyonu geçirmiş otuz beş yaşında kadın hasta, organ reddini önlemek amacıyla kullandığı spesifik bir ilaca bağlı olarak gelişen yaygın fibrotik dişeti büyümesi şikayeti ile peridontoloğa başvurmuştur. Bu tabloya neden olan en olası farmakolojik ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Siklosporin-A
Açıklama: Siklosporin-A (Cyclosporin-A), transplantasyon hastalarında greft reddini baskılamak için kullanılan spesifik bir immünsüpresif ilaçtır. En yaygın ve rahatsız edici dental yan etkilerinden biri, gingival fibroblastların aşırı kollajen üretmesini tetikleyerek yarattığı idiyopatik fibrotik dişeti büyümesidir (Gingival Hiperplazi). Diğer dişeti büyütücü ajanlar nifedipin (Ca kanal blokeri) ve fenitoin'dir (epilepsi).

**Soru 2 (ID: b0b2e1df-6090-42c5-b709-3defe3cf6d66)**
Soru Kökü: Otuz beş yaşında böbrek transplantasyonlu bir hasta, yaygın diş eti büyümesi (gingival overgrowth) şikayetiyle başvurmuştur. Oral hijyeni ideal olmasına rağmen büyümenin devam etmesi, hastanın doku reddini önlemek amacıyla kullandığı spesifik bir ilacın yan etkisi olarak değerlendirilmiştir. Bu hastada diş eti büyümesine yol açan farmakolojik ajan aşağıdakilerden hangisidir?
Doğru Şık (A): Siklosporin-A
Açıklama: Siklosporin-A, organ nakli hastalarında doku reddini engellemek için kullanılan güçlü bir immünosüpresif ajandır. Fenitoin (epilepsi) ve kalsiyum kanal blokerleri (hipertansiyon - örn: Nifedipin) ile birlikte sistemik kullanımında yaygın fibrotik diş eti büyümesine neden olan üç ana ilaç grubundan biridir. Atropin ağız kuruluğu yaparken, nitrogliserin vazodilatördür.

---

### ÇİFT 3 (Benzerlik: 0.85)

**Soru 1 (ID: a968ab65-defa-4e93-9c4c-0d111fae8de8)**
Soru Kökü: Periodontal enfeksiyonlar, hamilelik sürecinde genitoüriner bir enfeksiyon odağı olmaksızın dahi erken doğum ve düşük doğum ağırlığı için majör bir risk faktörü oluştururlar. Bu patolojik kaskadda rol oynadığı tespit edilen ve amniyon sıvısında en sık izole edilen periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (D): Fusobacterium nucleatum
Açıklama: Fusobacterium nucleatum, subgingival plaktan amniyon sıvısına hematojen yolla ulaşabilen ve burada izole edilen en yaygın periodontal bakteridir. Bu patojenin varlığı, inflamatuar bir immün yanıt tetikleyerek lokal PGE2 ve PGF2-alfa seviyelerinde artışa yol açar; bu artan mediatörler ise myometrial kontraksiyonları başlatarak servikal dilatasyona ve sonuç olarak erken doğuma neden olurlar.

**Soru 2 (ID: 58639162-1559-47a3-a160-7d9b0afe66fc)**
Soru Kökü: Periodontal enfeksiyonların hamilelik komplikasyonları ile ilişkisi araştırıldığında, erken doğum yapan kadınların amnion sıvısı kültürlerinden izole edilen ve subgingival plaktaki suşlarla birebir benzerlik gösterdiği kanıtlanan spesifik anaerobik mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (E): Fusobacterium nucleatum
Açıklama: Fusobacterium nucleatum, subgingival plakta yoğun bulunan ve erken doğum yapan annelerin amnion sıvısı kültürlerinde en sık izole edilen spesifik mikroorganizmadır. Bakterinin feto-plasental üniteye hematojen yolla ulaşarak PGE2 ve PGF2 alfa gibi erken doğumu başlatan proinflamatuvar mediyatörlerin artışına yol açtığı ve patogenezde kilit rol oynadığı gösterilmiştir.

---

### ÇİFT 4 (Benzerlik: 0.85)

**Soru 1 (ID: 0e504b08-5669-4e31-a314-8e4aa513ee51)**
Soru Kökü: AHA (Amerikan Kalp Birliği) kılavuzlarına göre, infektif endokardit (İE) açısından sadece yüksek risk taşıyan hastalara profilaksi önerilmektedir. Aşağıdaki durumlardan hangisi profilaksi gerektiren yüksek risk gruplarından biridir?
Doğru Şık (A): Cerrahi onarım uygulanmamış siyanotik doğumsal kalp hastalığı
Açıklama: AHA kriterlerine göre yüksek risk grubunda yer alan ve profilaksi gerektirenler: Protez kapaklılar, İE öyküsü olanlar, palyatif şantı bulunan onarılmamış siyanotik kalp hastaları ve onarımın ilk 6 ayındaki vakalardır. Bypass hastalarında veya kapak hasarı bırakmayan romatizmal ateşte kardiyolog özel bir uyarı yapmadıkça profilaksi gerekmez.

**Soru 2 (ID: bd89ea83-63b1-4ca1-91b4-80b8bc78752e)**
Soru Kökü: Amerikan Kalp Birliği (AHA) güncel kılavuzlarına göre infektif endokardit (İE) gelişimi açısından yüksek risk grubunda yer alan ve periodontal muayene (sondlama) dahil profilaksi uygulanması **kesinlikle** zorunlu olan hasta profili aşağıdakilerden hangisidir?
Doğru Şık (A): Kalp kapağı onarımında protez materyali kullanılmış olan hastalar
Açıklama: AHA kriterlerine göre İE için yüksek risk taşıyan grupta; protez kalp kapağı bulunanlar (veya onarımda protez materyali kullanılanlar), önceden İE öyküsü olanlar, siyanotik doğumsal kalp hastaları ve kapak patolojisi gelişmiş kalp nakli hastaları yer alır. Bu gruptaki hastalara sondlama dahil tüm kanamalı periodontal işlemlerde profilaksi şarttır. Masum üfürüm veya hipertansiyon bu risk grubunda değildir.

---

### ÇİFT 5 (Benzerlik: 0.85)

**Soru 1 (ID: a968ab65-defa-4e93-9c4c-0d111fae8de8)**
Soru Kökü: Periodontal enfeksiyonlar, hamilelik sürecinde genitoüriner bir enfeksiyon odağı olmaksızın dahi erken doğum ve düşük doğum ağırlığı için majör bir risk faktörü oluştururlar. Bu patolojik kaskadda rol oynadığı tespit edilen ve amniyon sıvısında en sık izole edilen periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (D): Fusobacterium nucleatum
Açıklama: Fusobacterium nucleatum, subgingival plaktan amniyon sıvısına hematojen yolla ulaşabilen ve burada izole edilen en yaygın periodontal bakteridir. Bu patojenin varlığı, inflamatuar bir immün yanıt tetikleyerek lokal PGE2 ve PGF2-alfa seviyelerinde artışa yol açar; bu artan mediatörler ise myometrial kontraksiyonları başlatarak servikal dilatasyona ve sonuç olarak erken doğuma neden olurlar.

**Soru 2 (ID: 4debb6dc-ce29-4d11-924a-5705c4c07ac2)**
Soru Kökü: Hamilelik ve periodontal hastalık arasındaki ilişkiyi inceleyen çalışmalara göre, erken doğum yapan kadınların amnion sıvısında subgingival plaktaki suşlarla benzerlik gösteren ve erken doğum riskiyle en sık ilişkilendirilen periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (E): Fusobacterium nucleatum
Açıklama: Erken doğum yapan kadınların amnion sıvısında en sık izole edilen bakteri F. nucleatum'dur ve subgingival plak ile genetik benzerlik gösterir. Bu patojen amniyonik dokularda PGE2 ve PGF2 alfa seviyelerini uyararak genitoüriner bir enfeksiyon olmadan bile erken uterin kontraksiyonlara ve erken doğuma neden olabilir.

---

### ÇİFT 6 (Benzerlik: 0.85)

**Soru 1 (ID: b4e589b8-da51-4dee-b90a-22ed5165cbe6)**
Soru Kökü: Son dönem böbrek yetmezliği nedeniyle düzenli hemodiyaliz programına dahil olan bir hastaya cerrahi periodontal tedavi uygulanması gerekmektedir. Operatif alanda sekonder kanama riskini en aza indirmek için bu hastanın dental tedavi zamanlaması nasıl planlanmalıdır?
Doğru Şık (D): Kullanılan heparinin etkisinin geçmesi için diyaliz aldıktan 1 gün sonra yapılmalıdır
Açıklama: Hemodiyaliz makinesinde kanın pıhtılaşmasını engellemek amacıyla işlem sırasında hastalara sistemik heparin uygulanır. Heparinin kandan tamamen temizlenmesi ve kanama zamanının normale dönmesi yaklaşık 24 saat sürer. Bu farmakokinetik nedenle, fatal kanama komplikasyonlarını önlemek adına her türlü cerrahi veya travmatik dental işlem, hasta diyalize girdikten tam bir gün (24 saat) sonra yapılmalıdır.

**Soru 2 (ID: 74eedcd1-3555-4cb2-8959-4926e18066a9)**
Soru Kökü: Son dönem böbrek yetmezliği nedeniyle haftanın belirli günlerinde hemodiyalize giren bir hastanın periodontal cerrahi tedavileri planlanacaktır. Diyaliz prosedürü sırasında hastaya rutin olarak yüksek doz sistemik Heparin verildiği göz önüne alındığında, operasyon sonrası kanama komplikasyonlarını önlemek adına periodontal cerrahinin zamanlaması **en uygun** ne zaman yapılmalıdır?
Doğru Şık (E): Diyaliz tedavisi tamamlandıktan 1 tam gün (24 saat) sonra
Açıklama: Hemodiyaliz makinesindeki tüplerin pıhtılaşmasını önlemek için hastaya yüksek doz Heparin verilir. Heparin kısa yarı ömürlü bir antikoagülandır ancak seans bitiminde kanda hala aktif olduğundan anında işlem yapılırsa masif kanama gelişir. Güvenli yaklaşım, Heparin etkisinin tamamen ortadan kalktığı diyalizden 1 tam gün sonra periodontal işlemlerin yapılmasıdır.

---

### ÇİFT 7 (Benzerlik: 0.85)

**Soru 1 (ID: c06e8598-4f3d-4c32-8040-10af0f9e0950)**
Soru Kökü: Serbest sonlu hareketli bölümlü protezlerde, destek dişe gelen zararlı kuvvetleri azaltmak ve periodontal sağlığı korumak amacıyla kroşe ve tırnak konumu için geçerli olan temel biyomekanik kural aşağıdakilerden hangisidir?
Doğru Şık (D): Tırnak meziale taşınmalı, retansiyon için distal undercuttan yararlanılmalıdır.
Açıklama: Serbest sonlu protezlerde kural olarak okluzal tırnak meziale taşınır ve retansiyon distal undercuttan alınır. Bu yerleşim, hareketli kret üzerindeki protezin dokuya gömülmesi sırasında dişi arkada doğru deviren zararlı tork kuvvetini kompanse ederek kuvvetin dişin uzun eksenine paralel gelmesini sağlar. Tırnağın distale yerleştirilmesi dişte distal yönde yıkıcı bir kaldıraç etkisi yaratır.

**Soru 2 (ID: d8821115-9e9a-4037-9fd4-ae8da9467a2a)**
Soru Kökü: Serbest sonlu parsiyel hareketli protez kullanan hastalarda, destek dişe ve alveol kemiğine gelen zararlı kuvvetlerin minimize edilmesi hedeflenir. Bu amaçla protezin destek dişteki tırnak ve kroşe konumu nasıl planlanmalıdır?
Doğru Şık (B): Tırnak meziale taşınmalı, retansiyon distal undercuttan sağlanmalı
Açıklama: Serbest sonlu (distal eklenti) vakalarında okluzal kuvvet protez kaidesini dokuya doğru bastırdığında, dişin distale devrilmesini engellemek için tırnak mutlaka meziale yerleştirilmelidir. Retansiyon ise distal undercuttan alınarak stres kırıcı bir hareket paterni sağlanır. Bu biyomekanik prensip, destek dişin uzun eksenine paralel kuvvet gelmesini sağlayarak dişin periodontal yıkımını önler.

---

### ÇİFT 8 (Benzerlik: 0.84)

**Soru 1 (ID: 2d8141ab-e83b-472b-8cb2-d700eb218945)**
Soru Kökü: İnfektif Endokardit (İE) gelişme riski yüksek olan bir hastanın periodontal idamesi sırasında yapılan işlemlerden hangisi düşük riskli kabul edilerek antibiyotik profilaksisi gerektirmeyen (AHA kriterlerine göre) bir prosedürdür?
Doğru Şık (D): Sadece supragingival diş taşı temizliği (scaling) ve profilaksi yapılması
Açıklama: Sadece kuron yüzeyinden eklentilerin uzaklaştırıldığı supragingival scaling ve lastik kap/fırça ile yapılan profilaksi işlemleri dişetini penetre etmediği için düşük riskli işlemler grubundadır ve profilaksi gerektirmez. Apse drenajı, subgingival klemp yerleşimi veya implant işlemleri kanama yarattığı için yüksek risklidir.

**Soru 2 (ID: 6ca5807f-ba5a-4bc9-a779-972c2e90b3bf)**
Soru Kökü: İnfektif Endokardit (İE) için yüksek risk grubunda olan bir hastada uygulanacak dental işlemin tipi, antibiyotik profilaksisi gerekip gerekmediğini belirler. Amerikan Kalp Birliği (AHA) rehberine göre aşağıdakilerden hangisi bakteriyemi riski yüksek olduğu için profilaksi gerektiren (yüksek riskli) periodontal girişimlerden **değildir**?
Doğru Şık (B): Geçirilmiş flep cerrahisi sonrası rutin sütur alınması
Açıklama: AHA rehberlerine göre; sondlama, implant cerrahisi, subgingival bant yerleşimi ve kök yüzeyi düzleştirilmesi gibi dişeti veya periapikal dokunun manipüle edildiği işlemler yüksek risk grubundadır ve mutlak profilaksi gerektirir. Sütur alınması, anestezi enjeksiyonu (enfekte olmayan dokuya), ve radyograf çekimi ise düşük riskli işlemler kategorisinde olup profilaksi zorunluluğu barındırmaz.

---

### ÇİFT 9 (Benzerlik: 0.84)

**Soru 1 (ID: 4f74d12c-1ec8-448a-bc24-2ae3221d3a9d)**
Soru Kökü: Endodontik ve periodontal dokular anatomik olarak sürekli bir iletişim içindedir. Aşağıdakilerden hangisi pulpa ile periodonsiyum arasındaki fizyolojik veya patolojik geçiş yollarından biri olarak gösterilemez?
Doğru Şık (E): Mine prizmaları
Açıklama: Pulpa-periodonsiyum arası doğal geçiş yolları şunlardır: Fistülasyon, nöral yollar, lateral/aksesuar kanallar, dentin tübülleri, Sharpey lifleri uzantıları, apikal foramen ve vaskülo-lenfatik yollardır. Mine prizmaları kronda yer alan epitel kökenli aselüler yapılardır; kök dokusunda bulunmazlar ve periodonsiyum ile pulpa arasında bir köprü oluşturmazlar.

**Soru 2 (ID: 2498db8e-741d-4ca7-9807-a7130da7fdd9)**
Soru Kökü: Pulpa hastalıklarının periodonsiyuma, periodontal hastalıkların da pulpaya ulaşarak inflamatuar yanıt oluşturması pulpa-periodonsiyum arası anatomik geçiş yolları sayesinde gerçekleşir. Aşağıdakilerden hangisi bu anatomik veya fizyolojik geçiş yollarından biri **değildir**?
Doğru Şık (A): Mine lamelleri
Açıklama: Mine lamelleri, mine gelişim kusuru olup pulpa ile periodonsiyum arasında bir köprü görevi görmez. Pulpa ve periodonsiyum arasındaki ana iletişim kanalları apikal foramen, lateral/aksesuar kanallar, dentin tübülleri, fistülasyon, nöral yollar, Sharpey lifleri ve vaskülo-lenfatik drenaj hatlarıdır. Bu yollar inflamatuar mediatörlerin iki doku arasında çift yönlü geçişine olanak tanır.

---

### ÇİFT 10 (Benzerlik: 0.84)

**Soru 1 (ID: e2643780-cb26-4578-915c-f56dd630677e)**
Soru Kökü: Altmış beş yaşında erkek hasta diş taşı temizliği için diş hekimine gelmiştir. Anamnezinde son günlerde istirahat halindeyken bile göğsünde başlayan, sol omzuna vuran baskı ve sıkışma hissi olduğunu, kardiyoloğunun 'stabil olmayan anjina pektoris' teşhisi koyduğunu belirtmiştir. Bu durum karşısında diş hekiminin izlemesi gereken protokol aşağıdakilerden hangisidir?
Doğru Şık (E): Elektif (rutin) dental tedaviyi ertelemek ve sadece acil ağrı dindirici işlemleri konsültasyonla uygulamak
Açıklama: Stabil olmayan anjina pektoris, çok yakın bir akut miyokard enfarktüsü (kalp krizi) riskinin öncü habercisidir. Bu hastalarda oluşan en ufak dental stres bile ölümcül ventriküler aritmiye veya MI'a yol açabilir. Bu yüzden stabil olmayan anjina hastalarında tüm rutin/elektif tedaviler kesinlikle ertelenmeli, sadece hayati aciliyet arz eden işlemler kardiyoloji konsültasyonu eşliğinde ve hastanede uygulanmalıdır.

**Soru 2 (ID: 94a515df-8e27-4425-8a06-531343ff2e6b)**
Soru Kökü: Altmış yaşında, iskemik kalp hastalığı öyküsü olan ve son bir haftadır istirahat halinde dahi göğüs ağrısı atakları yaşayan (stabil olmayan anjina pektoris) bir hasta, dişte ağrı ve apseli şişlik nedeniyle kliniğe başvuruyor. Bu hastada hekimin izlemesi gereken klinik yol haritası aşağıdakilerden hangisidir?
Doğru Şık (E): Sadece apsenin acil drenajı sağlanmalı, diğer tüm elektif tedaviler hasta stabil hale gelene dek ertelenmelidir.
Açıklama: Stabil olmayan anjina pektoris (istirahatte veya düşük eforda gelen göğüs ağrısı), akut miyokard infarktüsünün habercisidir ve dental tedaviler için mutlak bir kontrendikasyon teşkil eder. Bu hastalarda asla elektif veya rutin işlem (çekim, küretaj vs.) yapılmaz; sadece hayati risk yaratan veya şiddetli ağrı oluşturan acil durumlar (apse gibi) palyatif olarak drene edilir ve tıbbi müdahaleye yönlendirilir.

---

### ÇİFT 11 (Benzerlik: 0.84)

**Soru 1 (ID: a1c19cd3-7855-47a9-8706-ae9c0b02a310)**
Soru Kökü: Aort kapak replasmanı öyküsü olan 55 yaşındaki kadın hastaya, jeneralize kök yüzeyi düzleştirilmesi işlemi planlanmıştır. Anamnezinde penisiline karşı anafilaksi hikayesi bulunan bu hasta için AHA'nın önerdiği **en ideal** oral profilaktik antibiyotik rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): İşlemden 30 ila 60 dakika önce 500 mg Azitromisin oral
Açıklama: AHA profilaksi kurallarına göre penisilin/amoksisilin alerjisi olan ve oral yolla ilaç alabilen yetişkin hastalarda makrolid grubu olan Azitromisin veya Klaritromisin 500 mg (işlemden 30-60 dk önce tek doz) birinci tercih alternatiflerdendir. Hastada alerji hikayesi olması Sefaleksin (çapraz alerji riski) ve Amoksisilin kullanımını elediği için azitromisin spesifik ve güvenli bir rejimdir.

**Soru 2 (ID: 9fd06c6e-3dfb-457c-a1bc-e9deb1f019d7)**
Soru Kökü: Daha önce İnfektif Endokardit (İE) atağı geçirmiş olan 38 yaşındaki kadın hastaya diş çekimi ve apse drenajı yapılacaktır. Anamnezinde penisiline karşı anafilaksi öyküsü bulunan ve oral ilaç kullanabilen bu hastaya profilaktik olarak hangi antibiyotik rejimi reçete edilmelidir?
Doğru Şık (A): İşlemden 30-60 dakika önce 100 mg oral Doksisiklin
Açıklama: Penisilin alerjisi olan ve oral ilaç alabilen yetişkin hastalarda Sefaleksin (2g), Azitromisin/Klaritromisin (500mg) veya Doksisiklin (100mg) kullanılabilir. Sefaleksin anafilaksi durumlarında çapraz reaksiyon riski nedeniyle tercih edilmeyebilir, Doksisiklin 100 mg oral alımı güvenli ve etkin bir alternatiftir. Amoksisilin ve Ampisilin penisilin alerjisi nedeniyle kesin kontrendikedir.

---

### ÇİFT 12 (Benzerlik: 0.84)

**Soru 1 (ID: 3ac35987-e1fd-4782-8e59-35776e24ef34)**
Soru Kökü: İleri derecede ilerlemiş bir periodontitis vakasında, bakteri ve iltihabi ürünlerin derinleşen cep vasıtasıyla apikal foramene veya aksesuar kanallara ulaşarak pulpa dokusunu enfekte etmesi olayına ne ad verilir?
Doğru Şık (C): Retrograt pulpitis
Açıklama: Retrograt pulpitis, enfeksiyon yönünün pulpadan periodonsiyuma değil, tam tersi şekilde şiddetli periodontal cepten apikal foramen veya lateral kanallar aracılığıyla pulpaya doğru ilerleyerek pulpayı sekonder olarak enfekte etmesi durumudur. Bozulmamış sement tabakası normalde pulpayı korur; ancak plak apikale ulaştığında kan desteği bozulur ve retrograt nekroz kaçınılmaz hale gelir.

**Soru 2 (ID: 4f74df17-083e-4d43-a00d-9aaf049548ed)**
Soru Kökü: İleri düzey periodontitisli vakalarda, derin ceplerdeki plak patojenlerinin ve enflamatuar ürünlerin pulpa dokusuna sızarak pulpa nekrozuna kadar gidebilen patolojik bir süreci başlatması klinik pratikte mümkündür. Perio orijinli bu bakteri sızıntısının pulpayı enfekte etmesi tablosuna verilen özel isim aşağıdakilerden hangisidir?
Doğru Şık (D): Retrograt pulpitis
Açıklama: Aksesuar kanallar, lateral kanallar veya apikal foramen yoluyla periodontitis tabanındaki bakteri ve toksinlerinin pulpa dokusuna girerek 'ters yönden' (aşağıdan yukarıya) pulpa iltihabı yaratmasına retrograt pulpitis denir. Ancak klinik olarak bozulmamış sementin koruyucu etkisi nedeniyle çok nadir görülür.

---

### ÇİFT 13 (Benzerlik: 0.84)

**Soru 1 (ID: 47f56668-4a92-424d-b85c-c68ef49b5082)**
Soru Kökü: İleri evre KOAH (Kronik Obstrüktif Akciğer Hastalığı) rahatsızlığı bulunan 68 yaşındaki bir hastada rutin cerrahi dışı periodontal tedavi seansları uygulanmaktadır. Akciğer ventilasyon kapasitesi zayıf olan bu hastanın operasyon koltuğundaki yönetimi sırasında aşağıdaki yaklaşımlardan hangisi medikal bir kriz yaratabilir ve **kesinlikle kaçınılması** gerekir?
Doğru Şık (D): Hava yolu hakimiyetinin daralma riskine karşı bilateral mandibular blok anestezi uygulanması
Açıklama: KOAH hastalarında ventilasyon zaten problemlidir. Bilateral mandibular blok (alt çenenin her iki tarafının aynı anda uyuşturulması), dildeki duyu kaybı nedeniyle hastada hava yolunun tıkandığı veya yutkunamadığı hissi (veya gerçek bir kas laksitesi) yaratarak panik ve ciddi solunum sıkıntısı oluşturabilir. Bilateral anestezi ve solunumu baskılayan narkotik sedatiflerden uzak durulmalıdır.

**Soru 2 (ID: 64b40fed-59fc-4289-9fae-1d5b10587963)**
Soru Kökü: Kronik obstrüktif pulmoner hastalık (KOAH) tanısı ile takip edilen bir hastanın, periodontal cerrahi işlemleri sırasında genel tıbbi durumunun korunması esastır. Bu hastanın cerrahi yönetimi ile ilgili aşağıdaki uygulamalardan hangisi **yanlıştır**?
Doğru Şık (E): Bölgesel tam uyuşma sağlamak için rutin olarak bilateral mandibular anestezi uygulanması
Açıklama: KOAH ve ağır astım hastalarında yutkunma ve solunum refleksinin kontrolü hayati önem taşır. Bilateral mandibular anestezi, her iki taraftaki kas tonusunu ve yutkunma duyusunu bloke ederek hastada hava yolu darlığı veya boğulma hissi yaratabilir, bu da panik atağa ve solunum yetmezliğine zemin hazırlar. Bu yüzden KOAH'lı hastalarda hava yolunu korumak adına bilateral mandibular anesteziden kesinlikle kaçınılmalıdır.

---

### ÇİFT 14 (Benzerlik: 0.83)

**Soru 1 (ID: 6ca5807f-ba5a-4bc9-a779-972c2e90b3bf)**
Soru Kökü: İnfektif Endokardit (İE) için yüksek risk grubunda olan bir hastada uygulanacak dental işlemin tipi, antibiyotik profilaksisi gerekip gerekmediğini belirler. Amerikan Kalp Birliği (AHA) rehberine göre aşağıdakilerden hangisi bakteriyemi riski yüksek olduğu için profilaksi gerektiren (yüksek riskli) periodontal girişimlerden **değildir**?
Doğru Şık (B): Geçirilmiş flep cerrahisi sonrası rutin sütur alınması
Açıklama: AHA rehberlerine göre; sondlama, implant cerrahisi, subgingival bant yerleşimi ve kök yüzeyi düzleştirilmesi gibi dişeti veya periapikal dokunun manipüle edildiği işlemler yüksek risk grubundadır ve mutlak profilaksi gerektirir. Sütur alınması, anestezi enjeksiyonu (enfekte olmayan dokuya), ve radyograf çekimi ise düşük riskli işlemler kategorisinde olup profilaksi zorunluluğu barındırmaz.

**Soru 2 (ID: c6f0e3e7-dfef-479b-9615-729100c07d41)**
Soru Kökü: İnfektif endokardit açısından yüksek riskli kabul edilen bir hastada, uygulanacak dental işlemlerin kanama ve bakteriyemi potansiyeli profilaksi kararını belirler. Aşağıdaki işlemlerden hangisi için antibiyotik profilaksisi yapılmasına gerek **yoktur**?
Doğru Şık (B): Basit periodontal muayene ve supragingival scaling
Açıklama: Supragingival scaling, basit CPITN indeksi ölçümü, radyograf çekimi veya supragingival bant/sütur alınması AHA'ya göre düşük riskli işlemlerdir ve antibiyotik profilaksisi gerektirmez. Ancak enflame dokuda sondlama, subgingival işlem gerektiren matriks uygulaması veya periimplantitis debridmanı yüksek invaziv işlemler olup profilaksi şarttır.

---

### ÇİFT 15 (Benzerlik: 0.83)

**Soru 1 (ID: 9ee40be8-0cc6-49a0-b2ba-6d08a120aeee)**
Soru Kökü: Penisilin alerjisi olan ve oral yolla ilaç kullanabilen erişkin bir hastada, mukozayı perfore edecek bir periodontal cerrahi işlemden 30-60 dakika önce uygulanması gereken İE profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin 500 mg oral
Açıklama: Hasta oral ilaç alabiliyorsa ve amoksisilin/penisilin alerjisi varsa alternatif oral rejimler tercih edilir: Sefaleksin (2 gr), Azitromisin veya Klaritromisin (500 mg) ya da Doksisiklin (100 mg). Amoksisilin ilk seçenektir ancak alerji durumunda kontrendikedir. Sefazolin ve Ampisilin parenteral (IM/IV) yolla, oral ilaç alamayan hastalarda kullanılır.

**Soru 2 (ID: 4ae8f3d7-0a89-4595-b880-1b4f2469d5c3)**
Soru Kökü: Kırk beş yaşındaki erkek hasta protez kalp kapağı taşımaktadır ve penisilin alerjisi bulunmamaktadır. Ancak hasta gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir gıda ve ilaç alamamaktadır. Bu hastaya periodontal cerrahi öncesi uygulanması gereken parenteral (IM veya IV) profilaksi ajanı ve dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 2 g IM veya IV Ampisilin
Açıklama: Oral ilaç alamayan ve penisilin alerjisi OLMAYAN bir yetişkinde standart parenteral profilaksi ajanı 2 g IM veya IV Ampisilindir. (Sefazolin/Seftriakson 1g de kullanılabilir ancak penisilin grubu tercih edilecekse doğrudan Ampisilin 2g temeldir). Oral ajanlar (amoksisilin, klaritromisin) hasta yutamadığı için elenir.

---

### ÇİFT 16 (Benzerlik: 0.83)

**Soru 1 (ID: e2360bc1-dd8f-4b01-883a-1ca7db7b4c71)**
Soru Kökü: Apikal apse kaynaklı bir fistül yolunun ilerleyerek halihazırda var olan kronik bir periodontal ceple birleşmesi sonucu "gerçek kombine lezyon" tablosu ortaya çıkmıştır. Bu dişi ağızda tutmak amacıyla planlanacak tedavinin stratejik sıralaması aşağıdakilerden hangisi olmalıdır?
Doğru Şık (B): Önce endodontik tedavi yapılır, başarılı endodontik tedaviden sonra periodontal cebin tedavisi uygulanır
Açıklama: Kombine endo-perio lezyonlarda öncelikli tedavi her zaman endodontik yaklaşımdır çünkü endodontik sorun var olduğu sürece periodontal defektin tam iyileşmesi mümkün değildir. Başarılı bir endodontik tedavinin ardından radyografik ve klinik iyileşme gözlemlenir, geriye kalan kalıcı cep defekti ise daha sonra periodontal tedavi yaklaşımlarıyla çözülür. Periodontal tedavi önce yapılırsa iyileşme dokusu enfekte apikal sızıntı sebebiyle hızla tekrar yıkılır.

**Soru 2 (ID: 12bf8272-29f3-4d6b-bd03-b04d7198b8d8)**
Soru Kökü: Endodontik bir lezyonun kuronale doğru, kronik bir periodontal lezyonun ise apikale doğru ilerleyerek birbiriyle birleştiği gerçek kombine (perio-endo) lezyonlu bir dişin ağızda tutulmasına karar verilmiştir. Bu dişin tedavisinde izlenmesi gereken doğru sıralama aşağıdakilerden hangisidir?
Doğru Şık (D): Periodontal cebin giderilmesinden önce endodontik tedavi yapılmalıdır.
Açıklama: Kombine lezyonlarda öncelik daima kök kanal tedavisindedir, çünkü endodontik sorun var olduğu sürece periodontal yara iyileşmesi gerçekleşemez. Başarılı bir endodontik tedaviden sonra radyografik ve klinik iyileşme gözlenir, ardından kalan periodontal cep rezidüel defekt olarak değerlendirilir ve mekanik/cerrahi periodontal işlemlerle tedavi edilir.

---

### ÇİFT 17 (Benzerlik: 0.82)

**Soru 1 (ID: e9559738-5ed2-474b-9fab-74b30e836bdb)**
Soru Kökü: Endodontik ve periodontal lezyonlar radyografik olarak birbirini taklit edebilse de, kemik kaybının paterni ayırıcı tanıda önemli bir ipucudur. Primer endodontik lezyonun radyografik yayılım paterni aşağıdakilerden hangisidir?
Doğru Şık (A): Radyolusent görüntü apikal bölgede daha geniştir ve marjinal bölgeye doğru daralır.
Açıklama: Primer endodontik kökenli bir enfeksiyon apikal foramen yoluyla çıkış yaptığı için yıkım periapikal alanda en geniş halindedir ve lezyon kuronale doğru ilerledikçe (marjine doğru) daralır. Periodontal bir lezyonda ise yıkım marjinden başladığı için radyolusent defekt krestal bölgede geniş, apekse doğru daralan bir huni veya üçgen formundadır. Bu ayrım tanı koymada kritik radyografik belirteçtir.

**Soru 2 (ID: 297cf8d7-949f-4b80-80fc-766f25166c0d)**
Soru Kökü: Periodontal ve endodontik orijinli lezyonların ayırıcı tanısında radyografik kemik yıkım paternleri önemli farklılıklar gösterir. Kemik harabiyetinin radyografik profili incelendiğinde, bu iki durum arasındaki anatomik ayrım aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (E): Endodontik lezyonda radyolusent alan apikal bölgede en geniştir ve koronal/marjinal bölgeye doğru daralır.
Açıklama: Endodontik lezyon (pulpa nekrozu) apeksten köken aldığı için kemik yıkımı apikalde geniş, yukarı servikale (fistül yoluna) çıkarken daralan 'damla/huni' formundadır. Periodontal hastalık ise diş etinden başladığı için krestte geniş, apekse doğru daralan ters bir huni şeklindedir.

---

### ÇİFT 18 (Benzerlik: 0.82)

**Soru 1 (ID: cb6c6b0e-339f-493d-98da-53f25dbdd7b8)**
Soru Kökü: Sekiz yaşında ve 30 kg ağırlığında olan, siyanotik doğumsal kalp hastalığı teşhisi bulunan bir çocuk hastaya kök yüzey düzleştirmesi planlanmaktadır. Hastanın herhangi bir ilaç alerjisi yoktur. Amerikan Kalp Birliği (AHA) kurallarına göre, bu hastaya işlemden 30-60 dakika önce oral yolla verilmesi gereken doğru antibiyotik ajanı ve toplam dozu aşağıdakilerden hangisidir?
Doğru Şık (C): 1500 mg Amoksisilin
Açıklama: Alerjisi olmayan çocuklarda standart İE profilaksisi oral Amoksisilindir. Dozaj 50 mg/kg olarak hesaplanır. 30 kg ağırlığındaki bir çocuk için 30 x 50 mg = 1500 mg Amoksisilin işlemden 30-60 dk önce verilmelidir. 2000 mg amoksisilin/ampisilin yetişkin dozudur.

**Soru 2 (ID: d0f156e0-3e71-44e2-81d9-8bc28bbd4225)**
Soru Kökü: Doğumsal siyanotik kalp hastalığı bulunan ve Amerikan Kalp Birliği (AHA) kriterlerine göre enfektif endokardit gelişimi açısından yüksek risk kategorisinde yer alan 10 yaşındaki (30 kg) bir çocuk hastaya sondlama ve başlangıç periodontal tedavisi uygulanacaktır. Hastanın penisilin alerjisi bulunmadığına ve ilaçları oral yolla alabildiğine göre uygulanması gereken **doğru profilaksi rejimi ve dozu** aşağıdakilerden hangisidir?
Doğru Şık (B): İşlemden 30-60 dakika önce 50 mg/kg (toplam 1500 mg) oral Amoksisilin
Açıklama: Penisilin alerjisi olmayan ve oral ilaç kullanabilen riskli çocuk hastalarda AHA standart profilaksi protokolü; işlemden 30 ila 60 dakika önce oral yolla 50 mg/kg Amoksisilin uygulamasıdır. Yetişkin dozu ise aynı zamanlamayla tek doz 2 gram oral Amoksisilin'dir.

---

### ÇİFT 19 (Benzerlik: 0.81)

**Soru 1 (ID: 2888582d-7211-4012-8c31-3ed269331042)**
Soru Kökü: Periodontal cerrahi (küretaj veya flap) planlanan ve anamnezinde antihipertansif ilaç kullanımı olan hastanın, klinik ölçümünde kan basıncı sistolik olarak 185 mmHg bulunmuştur. Hastada acil bir ağrı veya akut apse durumu yoktur. Medikal risk değerlendirmesi protokollerine göre bu hastanın tedavisine yaklaşım **en doğru** nasıl olmalıdır?
Doğru Şık (A): Sadece acil palyatif tedaviler uygulanıp uzman doktor medikal konsültasyonuna yönlendirilmelidir.
Açıklama: Sistolik kan basıncının 180 mmHg ve üzerinde olması majör bir risk faktörüdür (Hipertansif kriz sınırı). Bu hastalarda rutin/elektif cerrahi ve periodontal işlemler kesinlikle kontrendikedir; sadece hastayı rahatlatacak acil prosedürler yapılır ve hasta hızla medikal kontrole gönderilir.

**Soru 2 (ID: 08f0bb95-79bc-47f9-81a5-55b99ed45ccc)**
Soru Kökü: Elli yaşındaki erkek hasta, rutin periodontal kontrol ve diş taşı temizliği için kliniğe başvurmuştur. İşlem öncesi yapılan rutin ölçümde kan basıncı 185/105 mmHg olarak tespit edilmiştir. Hastanın mevcut sistemik durumu göz önüne alındığında izlenmesi gereken doğru klinik yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (D): Rutin periodontal tedavi iptal edilmeli, sadece varsa acil durumlar tedavi edilip hasta tıp hekimine konsülte edilmelidir.
Açıklama: Sistolik kan basıncının 180 mmHg ve/veya diastolik basıncın 110 mmHg ve üzerinde olması hipertansif kriz riskini ifade eder. Bu durumda hiçbir elektif veya rutin dental işlem yapılmaz, tedavi iptal edilir. Yalnızca ağrı, kanama veya enfeksiyon gibi acil durumlar varsa asgari müdahale ile çözülür ve hasta derhal tıbbi konsültasyona yönlendirilir.

---

### ÇİFT 20 (Benzerlik: 0.80)

**Soru 1 (ID: b4e589b8-da51-4dee-b90a-22ed5165cbe6)**
Soru Kökü: Son dönem böbrek yetmezliği nedeniyle düzenli hemodiyaliz programına dahil olan bir hastaya cerrahi periodontal tedavi uygulanması gerekmektedir. Operatif alanda sekonder kanama riskini en aza indirmek için bu hastanın dental tedavi zamanlaması nasıl planlanmalıdır?
Doğru Şık (D): Kullanılan heparinin etkisinin geçmesi için diyaliz aldıktan 1 gün sonra yapılmalıdır
Açıklama: Hemodiyaliz makinesinde kanın pıhtılaşmasını engellemek amacıyla işlem sırasında hastalara sistemik heparin uygulanır. Heparinin kandan tamamen temizlenmesi ve kanama zamanının normale dönmesi yaklaşık 24 saat sürer. Bu farmakokinetik nedenle, fatal kanama komplikasyonlarını önlemek adına her türlü cerrahi veya travmatik dental işlem, hasta diyalize girdikten tam bir gün (24 saat) sonra yapılmalıdır.

**Soru 2 (ID: af622e36-84b3-4f94-aad5-dbe8ecb6cb7e)**
Soru Kökü: Son evre böbrek yetmezliği nedeniyle düzenli hemodiyaliz gören bir hastada, uygulanacak invaziv periodontal debridman için planlanacak ideal randevu zamanlaması aşağıdakilerden hangisidir?
Doğru Şık (D): Diyaliz seansından 1 gün sonra
Açıklama: Hemodiyaliz gören hastalarda diyaliz sırasında dolaşımdaki ekstrakorporeal pıhtılaşmayı önlemek amacıyla yüksek dozda Heparin verilir. Heparinin kandan tamamen temizlenmesi ve kanama zamanının normale dönmesi için dental invaziv işlemler diyaliz alındıktan 1 gün sonra planlanmalıdır. Diyaliz günü yapılan işlemlerde durdurulamayan şiddetli kanamalar görülür.

---

### ÇİFT 21 (Benzerlik: 0.80)

**Soru 1 (ID: 4ae8f3d7-0a89-4595-b880-1b4f2469d5c3)**
Soru Kökü: Kırk beş yaşındaki erkek hasta protez kalp kapağı taşımaktadır ve penisilin alerjisi bulunmamaktadır. Ancak hasta gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir gıda ve ilaç alamamaktadır. Bu hastaya periodontal cerrahi öncesi uygulanması gereken parenteral (IM veya IV) profilaksi ajanı ve dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 2 g IM veya IV Ampisilin
Açıklama: Oral ilaç alamayan ve penisilin alerjisi OLMAYAN bir yetişkinde standart parenteral profilaksi ajanı 2 g IM veya IV Ampisilindir. (Sefazolin/Seftriakson 1g de kullanılabilir ancak penisilin grubu tercih edilecekse doğrudan Ampisilin 2g temeldir). Oral ajanlar (amoksisilin, klaritromisin) hasta yutamadığı için elenir.

**Soru 2 (ID: 9fd06c6e-3dfb-457c-a1bc-e9deb1f019d7)**
Soru Kökü: Daha önce İnfektif Endokardit (İE) atağı geçirmiş olan 38 yaşındaki kadın hastaya diş çekimi ve apse drenajı yapılacaktır. Anamnezinde penisiline karşı anafilaksi öyküsü bulunan ve oral ilaç kullanabilen bu hastaya profilaktik olarak hangi antibiyotik rejimi reçete edilmelidir?
Doğru Şık (A): İşlemden 30-60 dakika önce 100 mg oral Doksisiklin
Açıklama: Penisilin alerjisi olan ve oral ilaç alabilen yetişkin hastalarda Sefaleksin (2g), Azitromisin/Klaritromisin (500mg) veya Doksisiklin (100mg) kullanılabilir. Sefaleksin anafilaksi durumlarında çapraz reaksiyon riski nedeniyle tercih edilmeyebilir, Doksisiklin 100 mg oral alımı güvenli ve etkin bir alternatiftir. Amoksisilin ve Ampisilin penisilin alerjisi nedeniyle kesin kontrendikedir.

---

### ÇİFT 22 (Benzerlik: 0.80)

**Soru 1 (ID: af622e36-84b3-4f94-aad5-dbe8ecb6cb7e)**
Soru Kökü: Son evre böbrek yetmezliği nedeniyle düzenli hemodiyaliz gören bir hastada, uygulanacak invaziv periodontal debridman için planlanacak ideal randevu zamanlaması aşağıdakilerden hangisidir?
Doğru Şık (D): Diyaliz seansından 1 gün sonra
Açıklama: Hemodiyaliz gören hastalarda diyaliz sırasında dolaşımdaki ekstrakorporeal pıhtılaşmayı önlemek amacıyla yüksek dozda Heparin verilir. Heparinin kandan tamamen temizlenmesi ve kanama zamanının normale dönmesi için dental invaziv işlemler diyaliz alındıktan 1 gün sonra planlanmalıdır. Diyaliz günü yapılan işlemlerde durdurulamayan şiddetli kanamalar görülür.

**Soru 2 (ID: 74eedcd1-3555-4cb2-8959-4926e18066a9)**
Soru Kökü: Son dönem böbrek yetmezliği nedeniyle haftanın belirli günlerinde hemodiyalize giren bir hastanın periodontal cerrahi tedavileri planlanacaktır. Diyaliz prosedürü sırasında hastaya rutin olarak yüksek doz sistemik Heparin verildiği göz önüne alındığında, operasyon sonrası kanama komplikasyonlarını önlemek adına periodontal cerrahinin zamanlaması **en uygun** ne zaman yapılmalıdır?
Doğru Şık (E): Diyaliz tedavisi tamamlandıktan 1 tam gün (24 saat) sonra
Açıklama: Hemodiyaliz makinesindeki tüplerin pıhtılaşmasını önlemek için hastaya yüksek doz Heparin verilir. Heparin kısa yarı ömürlü bir antikoagülandır ancak seans bitiminde kanda hala aktif olduğundan anında işlem yapılırsa masif kanama gelişir. Güvenli yaklaşım, Heparin etkisinin tamamen ortadan kalktığı diyalizden 1 tam gün sonra periodontal işlemlerin yapılmasıdır.

---

### ÇİFT 23 (Benzerlik: 0.80)

**Soru 1 (ID: 2d8141ab-e83b-472b-8cb2-d700eb218945)**
Soru Kökü: İnfektif Endokardit (İE) gelişme riski yüksek olan bir hastanın periodontal idamesi sırasında yapılan işlemlerden hangisi düşük riskli kabul edilerek antibiyotik profilaksisi gerektirmeyen (AHA kriterlerine göre) bir prosedürdür?
Doğru Şık (D): Sadece supragingival diş taşı temizliği (scaling) ve profilaksi yapılması
Açıklama: Sadece kuron yüzeyinden eklentilerin uzaklaştırıldığı supragingival scaling ve lastik kap/fırça ile yapılan profilaksi işlemleri dişetini penetre etmediği için düşük riskli işlemler grubundadır ve profilaksi gerektirmez. Apse drenajı, subgingival klemp yerleşimi veya implant işlemleri kanama yarattığı için yüksek risklidir.

**Soru 2 (ID: c6f0e3e7-dfef-479b-9615-729100c07d41)**
Soru Kökü: İnfektif endokardit açısından yüksek riskli kabul edilen bir hastada, uygulanacak dental işlemlerin kanama ve bakteriyemi potansiyeli profilaksi kararını belirler. Aşağıdaki işlemlerden hangisi için antibiyotik profilaksisi yapılmasına gerek **yoktur**?
Doğru Şık (B): Basit periodontal muayene ve supragingival scaling
Açıklama: Supragingival scaling, basit CPITN indeksi ölçümü, radyograf çekimi veya supragingival bant/sütur alınması AHA'ya göre düşük riskli işlemlerdir ve antibiyotik profilaksisi gerektirmez. Ancak enflame dokuda sondlama, subgingival işlem gerektiren matriks uygulaması veya periimplantitis debridmanı yüksek invaziv işlemler olup profilaksi şarttır.

---

### ÇİFT 24 (Benzerlik: 0.80)

**Soru 1 (ID: 283e4a86-7b20-4ed2-b656-59dfcdecb8e9)**
Soru Kökü: Sabit restorasyonlarda biyolojik genişliğin ihlal edilip edilmediğinin tespitinde klinik sondlama teknikleri kullanılır. Bir restorasyon marjininin altında biyolojik genişliğin bozulduğundan kesin olarak şüphelenilen bir durumda, klinik değerlendirmenin **doğru** metodolojisi aşağıdakilerden hangisidir?
Doğru Şık (E): Anestezi altında sondun epitel ataşmanını geçerek (penetre edilerek) kemik kretine kadar itilmesi
Açıklama: Biyolojik genişlik, sadece interproksimal kemiği gösteren radyografilerle net ölçülemez. En iyi tanı yöntemi; anestezi altında (hastanın ağrı duymasını engellemek için) sondun cep tabanını geçip kemiğe değene kadar itilmesi (kemik sounding) ve bu mesafenin restorasyon marjiniyle kıyaslanmasıdır. Mesafe 2 mm'den azsa ihlal kesinleşir.

**Soru 2 (ID: 2ba12455-88e1-4552-870b-3e8f162d1612)**
Soru Kökü: Mevcut bir porselen kuronun altında inatçı dişeti kanaması olan hastada, restorasyon marjininin biyolojik genişliği ihlal edip etmediğinin değerlendirilmesi gerekmektedir. Klinik pratikte bu ihlali doğrulamak için kullanılabilecek **en kesin** teşhis yöntemi aşağıdakilerden hangisidir?
Doğru Şık (B): Lokal anestezi altında restorasyon marjininden kemik kretine kadar periodontal sondlama yapılması (Kemik sounding)
Açıklama: Radyograflar biyolojik genişlik hakkında sadece interproksimal iki boyutlu bilgi verebilir ve bukkal/lingual yüzeyleri değerlendirmede yetersizdir. En kesin klinik yöntem, anestezi altında sulkus tabanının periodontal prob ile penetre edilip kemiğe değene kadar sondlanmasıdır. Elde edilen mesafe restorasyon marjiniyle 2 mm'den az bir aralık bırakıyorsa, biyolojik genişlik net olarak ihlal edilmiştir.

---

### ÇİFT 25 (Benzerlik: 0.80)

**Soru 1 (ID: f5d7e280-78b0-4d52-81a9-0d04485581b0)**
Soru Kökü: Tip 2 Diabetes Mellitus tanısı bulunan bir hastanın medikal ve periodontal durumu entegre şekilde değerlendirilmektedir. Hekim, hastanın sadece anlık şeker düzeyine değil, son 3 aylık glisemik kontrol başarısına odaklanarak cerrahi iyileşme potansiyelini öngörmek istemektedir. Bu amaçla istenmesi gereken **en değerli** laboratuvar tetkiki aşağıdakilerden hangisidir?
Doğru Şık (C): Glikolize hemoglobin (HbA1c) testi
Açıklama: Diyabetik hastaların uzun dönem (son 3 ay) glisemik kontrol profilini yansıtan biyokimyasal belirteç HbA1c'dir. Anlık açlık veya tokluk kan şekeri hastanın diyetine göre o gün için değişebilirken, HbA1c eritrosit ömrü boyunca maruz kalınan glukozizasyonu gösterir ve yara iyileşme riskini analiz etmede altın standarttır.

**Soru 2 (ID: 6a88090f-18d7-432a-9a86-2c609a895de9)**
Soru Kökü: Diş hekimliği uygulamalarında diyabetli bir hastanın uzun dönem (son 3 aylık) glisemik kontrolünün değerlendirilmesinde ve periodontal tedavinin başarısının öngörülmesinde hekime en doğru bilgiyi sağlayan laboratuvar parametresi aşağıdakilerden hangisidir?
Doğru Şık (B): Glikolize hemoglobin (HbA1c)
Açıklama: Eritrositlerin ömrü yaklaşık 120 gün (3-4 ay) olduğu için, glikolize hemoglobin (HbA1c) ölçümü hastanın son 3 aydaki ortalama kan şekeri seviyesini gösterir ve glisemik kontrolün en güvenilir retrospektif göstergesidir. Açlık veya tokluk kan glukozu sadece o anki anlık durumu yansıtırken, HbA1c kronik kontrolsüzlüğü saptayarak cerrahi/periodontal komplikasyon riskini değerlendirmeyi sağlar.

---

### ÇİFT 26 (Benzerlik: 0.80)

**Soru 1 (ID: a97daa81-fde5-4bb8-812e-0bba25732fde)**
Soru Kökü: Ortodontik tedavi sırasında dişlerin bukkolingual yönde hareket ettirilmesi planlanan bir hastada, profilaktik olarak dişeti miktarının artırılmasını gerektiren ve tedavi için bir kontrendikasyon oluşturan risk faktörü aşağıdakilerden hangisidir?
Doğru Şık (E): Yetersiz yapışık dişeti varlığı
Açıklama: Yetersiz yapışık dişeti (özellikle bukkal dişeti ince ise) ortodontik bukkolingual diş hareketi sırasında ciddi bir risk oluşturur ve dişeti ile kemikte dehiscence (açılma) tablosuna yol açabilir. Bu nedenle bu hareket öncesi profilaktik dişeti greftleriyle doku miktarının artırılması gerekebilir; enflamasyonla birlikte en temel kontrendikasyonlardan biridir.

**Soru 2 (ID: 0c87d1f1-3c67-4570-9290-5185128fb872)**
Soru Kökü: Ortodontik tedavi sırasında dişlere bukkolingual yönde kuvvet uygulanması, dişi çevreleyen alveolar kemik ve gingival dokunun ince olduğu bölgelerde iatrojenik hasara neden olabilir. Bu biyomekanik baskı sonucunda dehisens (kemik çatlağı) ve dişeti çekilmesini engellemek için ortodonti öncesinde uygulanması gereken **profilaktik** yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (C): Dişeti grefti cerrahisi ile yapışık dişeti miktarının ve kalınlığının artırılması
Açıklama: İnce bukkal kemik ve yetersiz yapışık dişeti varlığında, ortodontik ekspansiyon veya dişi bukkale iten hareketler, dokunun fizyolojik sınırlarını aşarak şiddetli kemik dehisensine ve fenestrasyona sekonder dişeti çekilmesine sebep olur. Bunu önlemenin yegane yolu, ortodontik hareket başlamadan önce serbest dişeti grefti veya bağ dokusu grefti ile yapışık doku bandını biyotipe uygun olarak kalınlaştırmaktır.

---

### ÇİFT 27 (Benzerlik: 0.80)

**Soru 1 (ID: 0c6db846-8143-4f07-a91c-e304b2215865)**
Soru Kökü: İnce kemik plakalarına sahip ince periodontal biyotipli bir hastada, yapılan sabit restorasyonun marjini biyolojik genişliği ihlal edecek şekilde yerleştirilmiştir. Bu hastada dokunun biyolojik genişliği yeniden sağlama çabası sonucu en olası fizyolojik yanıt aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik rezorpsiyonu ve eş zamanlı dişeti çekilmesi
Açıklama: İnce biyotipli hastalarda ve derin dantela formuna sahip dişetlerinde doku, bozulan biyolojik genişliği yeniden oluşturmak için marjinal kemiği rezorbe eder ve buna dişeti çekilmesi eşlik eder. Kalın biyotipli dokularda ise kemik rezorpsiyonu yerine yaygın olarak kemik seviyesinin değişmediği inatçı gingival inflamasyon izlenir. Biyotip kalınlığı, organizmanın restoratif mikrotravmaya vereceği yanıtın yönünü tayin eden ana unsurdur.

**Soru 2 (ID: 3586b0f2-5fcb-45bb-b523-60c3be9e8589)**
Soru Kökü: Cerrahi kron boyu uzatma işlemleri sırasında hekimin dişeti biyotipine ve kemik anatomisine göre dokunun fizyolojik yanıtını öngörmesi zorunludur. Anatomik olarak ince kemik plakalarına sahip ve **derin dantela (scalloped) formunda** dişeti olan bir hastada, restorasyon biyolojik genişliği ihlal ederse görülecek tepki aşağıdakilerden hangisidir?
Doğru Şık (E): Kemik dokusu rezorbe olarak biyolojik boşluk açmaya çalışır ve eşzamanlı dişeti çekilmesi yaşanır
Açıklama: Biyolojik genişliğin ihlaline verilen doku tepkisi marjinal anatomiyle birebir ilişkilidir. İnce kemik plakası ve derin dantela (scalloped) tipi mimariye sahip olan dişetlerinde kemik beslenmesi kırılgandır. Restorasyon marjininin yarattığı inflamatuar yük kemiği eriterek (rezorpsiyon) marjini apikale taşır. Kemiğin desteğini kaybeden ince dişeti de onu takip ederek belirgin bir dişeti çekilmesine (resesyon) neden olur.

---

### ÇİFT 28 (Benzerlik: 0.80)

**Soru 1 (ID: 4a0b613a-e888-49ba-991e-27159dd50f70)**
Soru Kökü: Dental muayene sırasında hastanın ağrı karakteristiği orijinin tespiti için belirleyicidir. Anamnezinde dişlerinde hissettiği ağrının 'hafif-orta şiddette olduğu, uykudan uyandırmadığı ve analjezik alımıyla hemen geçtiği' öğrenilen bir vakada, bu ağrının **en olası** kaynağı aşağıdakilerden hangisidir?
Doğru Şık (B): Periodontal kaynaklı kronik inflamasyon
Açıklama: Periodontal hastalık kaynaklı ağrılar genellikle sinsi seyirlidir, hafiftir ve analjeziklerle rahatça baskılanır; hastayı uykudan uyandırmaz. Buna karşın endodontik ağrılar (irreversible pulpitis veya apikal apse) başlangıçta akut, spontan, gece uykudan uyandıran ve analjeziklerin etkisiz kaldığı şiddetli tablolardır.

**Soru 2 (ID: f759fdef-14d9-4245-8779-e590f07f7e0a)**
Soru Kökü: Dental kaynaklı ağrıların teşhisinde, ağrının spontan olarak başlaması, uykudan uyandırması ve alınan sıradan analjeziklerle geçmemesi belirgindir. Bu semptomları gösteren patolojik durum aşağıdakilerden hangisi ile en çok uyumludur?
Doğru Şık (B): Akut evredeki primer pulpal/endodontik enfeksiyon
Açıklama: Endodontik ağrının karakteristiği, pulpa odası içindeki iltihabi ödemin kapalı bir kutuda yarattığı şiddetli basınç nedeniyle analjeziklere dirençli, nabız atışı tarzında zonklayıcı ve hastayı gece uykusundan uyandıran nitelikte olmasıdır. Periodontal kaynaklı ağrılar (apse hariç) çoğunlukla daha hafif, künt karakterdedir ve analjezik kullanımına oldukça iyi yanıt vererek baskılanabilir.

---

### ÇİFT 29 (Benzerlik: 0.80)

**Soru 1 (ID: c06e8598-4f3d-4c32-8040-10af0f9e0950)**
Soru Kökü: Serbest sonlu hareketli bölümlü protezlerde, destek dişe gelen zararlı kuvvetleri azaltmak ve periodontal sağlığı korumak amacıyla kroşe ve tırnak konumu için geçerli olan temel biyomekanik kural aşağıdakilerden hangisidir?
Doğru Şık (D): Tırnak meziale taşınmalı, retansiyon için distal undercuttan yararlanılmalıdır.
Açıklama: Serbest sonlu protezlerde kural olarak okluzal tırnak meziale taşınır ve retansiyon distal undercuttan alınır. Bu yerleşim, hareketli kret üzerindeki protezin dokuya gömülmesi sırasında dişi arkada doğru deviren zararlı tork kuvvetini kompanse ederek kuvvetin dişin uzun eksenine paralel gelmesini sağlar. Tırnağın distale yerleştirilmesi dişte distal yönde yıkıcı bir kaldıraç etkisi yaratır.

**Soru 2 (ID: e29d5f9e-88ba-4442-8d4f-7550edb3cc53)**
Soru Kökü: Serbest sonlu parsiyel protezlerin tasarımında, doku gömülmesi sırasında dayanak dişe iletilen tork kuvvetlerini azaltmak amacıyla özel konumlandırma prensipleri uygulanır. Alveol kemiğine gelecek hasarı minimuma indiren bu prensip aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (C): Tırnak dişteki mezial fossaya taşınmalı ve retansiyon için distal undercuttan yararlanılmalıdır.
Açıklama: Serbest sonlu protezlerde çiğneme anında kret dokusu çöker. Tırnak distale yerleştirilirse protez dişi arkaya doğru devirmeye çalışır. Tırnağın meziale alınması ve retansiyonun distal undercuttan sağlanması durumunda, protez mezial tırnak çevresinde bir miktar dönerek diş üzerindeki yıkıcı çekme ve devirme stresini absorbe eder.

---

### ÇİFT 30 (Benzerlik: 0.79)

**Soru 1 (ID: 4d931085-f9f6-4cb4-880b-e0eea208d0b0)**
Soru Kökü: Kardiyak risk grubundaki bir hastanın periodontal tedavi planı değerlendirilirken işlemlerin kanama ve bakteriyemi oluşturma potansiyeline göre risk analizi yapılır. Buna göre aşağıdakilerden hangisi İnfektif Endokardit açısından yüksek riskli (invaziv) grupta yer alan bir işlemdir?
Doğru Şık (C): Mukogingival cerrahi tedaviler
Açıklama: Mukogingival cerrahi, dokunun kesilmesi, flep kaldırılması ve sütürasyon aşamalarını içeren invaziv bir işlemdir ve yoğun bakteriyemi yaratarak yüksek risk oluşturur. Sütur alımı, supragingival band yerleşimi veya basit protez uyumlamaları mukoza perforasyonu yapmadıkları için düşük riskli kabul edilir.

**Soru 2 (ID: 6ca5807f-ba5a-4bc9-a779-972c2e90b3bf)**
Soru Kökü: İnfektif Endokardit (İE) için yüksek risk grubunda olan bir hastada uygulanacak dental işlemin tipi, antibiyotik profilaksisi gerekip gerekmediğini belirler. Amerikan Kalp Birliği (AHA) rehberine göre aşağıdakilerden hangisi bakteriyemi riski yüksek olduğu için profilaksi gerektiren (yüksek riskli) periodontal girişimlerden **değildir**?
Doğru Şık (B): Geçirilmiş flep cerrahisi sonrası rutin sütur alınması
Açıklama: AHA rehberlerine göre; sondlama, implant cerrahisi, subgingival bant yerleşimi ve kök yüzeyi düzleştirilmesi gibi dişeti veya periapikal dokunun manipüle edildiği işlemler yüksek risk grubundadır ve mutlak profilaksi gerektirir. Sütur alınması, anestezi enjeksiyonu (enfekte olmayan dokuya), ve radyograf çekimi ise düşük riskli işlemler kategorisinde olup profilaksi zorunluluğu barındırmaz.

---

### ÇİFT 31 (Benzerlik: 0.79)

**Soru 1 (ID: 9ee40be8-0cc6-49a0-b2ba-6d08a120aeee)**
Soru Kökü: Penisilin alerjisi olan ve oral yolla ilaç kullanabilen erişkin bir hastada, mukozayı perfore edecek bir periodontal cerrahi işlemden 30-60 dakika önce uygulanması gereken İE profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin 500 mg oral
Açıklama: Hasta oral ilaç alabiliyorsa ve amoksisilin/penisilin alerjisi varsa alternatif oral rejimler tercih edilir: Sefaleksin (2 gr), Azitromisin veya Klaritromisin (500 mg) ya da Doksisiklin (100 mg). Amoksisilin ilk seçenektir ancak alerji durumunda kontrendikedir. Sefazolin ve Ampisilin parenteral (IM/IV) yolla, oral ilaç alamayan hastalarda kullanılır.

**Soru 2 (ID: 121cba99-848f-4f28-8b08-504314b34b26)**
Soru Kökü: Hem penisilin alerjisi olan hem de geçirdiği bir oral operasyon nedeniyle ağızdan hiçbir ilaç yutamayacak durumda olan yüksek riskli bir kardiyak hastada, invaziv periodontal işlemden önce uygulanması gereken en güvenli profilaktik protokol aşağıdakilerden hangisidir?
Doğru Şık (B): 1 g IM veya IV Sefazolin veya Seftriakson uygulanması
Açıklama: Hasta oral ilaç alamıyor ve penisilin alerjisi varsa (ve anafilaksi tipinde değilse sefalosporinler kullanılabilir) AHA kılavuzuna göre standart yaklaşım 1 g Sefazolin veya Seftriakson'un IM veya IV olarak uygulanmasıdır. Ampisilin, penisilin alerjisi olduğu için ölümcül anaflaksiye yol açabilir; sadece lokal Klorheksidin ile bakteriyemi engellenemez.

---

### ÇİFT 32 (Benzerlik: 0.79)

**Soru 1 (ID: 4ae8f3d7-0a89-4595-b880-1b4f2469d5c3)**
Soru Kökü: Kırk beş yaşındaki erkek hasta protez kalp kapağı taşımaktadır ve penisilin alerjisi bulunmamaktadır. Ancak hasta gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir gıda ve ilaç alamamaktadır. Bu hastaya periodontal cerrahi öncesi uygulanması gereken parenteral (IM veya IV) profilaksi ajanı ve dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 2 g IM veya IV Ampisilin
Açıklama: Oral ilaç alamayan ve penisilin alerjisi OLMAYAN bir yetişkinde standart parenteral profilaksi ajanı 2 g IM veya IV Ampisilindir. (Sefazolin/Seftriakson 1g de kullanılabilir ancak penisilin grubu tercih edilecekse doğrudan Ampisilin 2g temeldir). Oral ajanlar (amoksisilin, klaritromisin) hasta yutamadığı için elenir.

**Soru 2 (ID: 121cba99-848f-4f28-8b08-504314b34b26)**
Soru Kökü: Hem penisilin alerjisi olan hem de geçirdiği bir oral operasyon nedeniyle ağızdan hiçbir ilaç yutamayacak durumda olan yüksek riskli bir kardiyak hastada, invaziv periodontal işlemden önce uygulanması gereken en güvenli profilaktik protokol aşağıdakilerden hangisidir?
Doğru Şık (B): 1 g IM veya IV Sefazolin veya Seftriakson uygulanması
Açıklama: Hasta oral ilaç alamıyor ve penisilin alerjisi varsa (ve anafilaksi tipinde değilse sefalosporinler kullanılabilir) AHA kılavuzuna göre standart yaklaşım 1 g Sefazolin veya Seftriakson'un IM veya IV olarak uygulanmasıdır. Ampisilin, penisilin alerjisi olduğu için ölümcül anaflaksiye yol açabilir; sadece lokal Klorheksidin ile bakteriyemi engellenemez.

---

### ÇİFT 33 (Benzerlik: 0.79)

**Soru 1 (ID: 9ee40be8-0cc6-49a0-b2ba-6d08a120aeee)**
Soru Kökü: Penisilin alerjisi olan ve oral yolla ilaç kullanabilen erişkin bir hastada, mukozayı perfore edecek bir periodontal cerrahi işlemden 30-60 dakika önce uygulanması gereken İE profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin 500 mg oral
Açıklama: Hasta oral ilaç alabiliyorsa ve amoksisilin/penisilin alerjisi varsa alternatif oral rejimler tercih edilir: Sefaleksin (2 gr), Azitromisin veya Klaritromisin (500 mg) ya da Doksisiklin (100 mg). Amoksisilin ilk seçenektir ancak alerji durumunda kontrendikedir. Sefazolin ve Ampisilin parenteral (IM/IV) yolla, oral ilaç alamayan hastalarda kullanılır.

**Soru 2 (ID: 9fd06c6e-3dfb-457c-a1bc-e9deb1f019d7)**
Soru Kökü: Daha önce İnfektif Endokardit (İE) atağı geçirmiş olan 38 yaşındaki kadın hastaya diş çekimi ve apse drenajı yapılacaktır. Anamnezinde penisiline karşı anafilaksi öyküsü bulunan ve oral ilaç kullanabilen bu hastaya profilaktik olarak hangi antibiyotik rejimi reçete edilmelidir?
Doğru Şık (A): İşlemden 30-60 dakika önce 100 mg oral Doksisiklin
Açıklama: Penisilin alerjisi olan ve oral ilaç alabilen yetişkin hastalarda Sefaleksin (2g), Azitromisin/Klaritromisin (500mg) veya Doksisiklin (100mg) kullanılabilir. Sefaleksin anafilaksi durumlarında çapraz reaksiyon riski nedeniyle tercih edilmeyebilir, Doksisiklin 100 mg oral alımı güvenli ve etkin bir alternatiftir. Amoksisilin ve Ampisilin penisilin alerjisi nedeniyle kesin kontrendikedir.

---

### ÇİFT 34 (Benzerlik: 0.79)

**Soru 1 (ID: 7460a442-8e06-40a5-ac65-8fcfa5421d78)**
Soru Kökü: Şüpheli lezyonların endodontik veya periodontal kaynaklı olduğunun teşhisinde vitalite durumunun net olarak belirlenmesi gerekir. Elektrik ve ısı testlerinin şüpheli kaldığı durumlarda uygulanan 'kavite testi' ile ilgili aşağıdaki ifadelerden hangisi **doğrudur**?
Doğru Şık (B): Anestezi uygulanmadan mine ve dentinden küçük bir preparasyon yapılarak vitalite aranır.
Açıklama: Kavite testi, diğer testlerden sonuç alınamayan veya kuron kaplı dişlerde son çare olarak kullanılır. Hastaya anestezi yapılmadan dentine küçük bir frezle girilir; ani keskin ağrı pulpanın canlı (vital) olduğunu, hiç tepki olmaması ise nekrozu doğrular.

**Soru 2 (ID: a73e3366-c996-4d77-8902-a924d53b75a5)**
Soru Kökü: Endodontik ve periodontal lezyonların ayırıcı tanısında kullanılan kavite testinin uygulama prosedürü ve temel mekanizması aşağıdakilerden hangisinde doğru ifade edilmiştir?
Doğru Şık (A): Pulpada vitalite olup olmadığını anlamak için anestezi uygulanmadan doğrudan mine veya dentin yoluyla giriş yapılarak uygulanır.
Açıklama: Kavite testi, dişte vitalite olup olmadığını kesin olarak belirlemek amacıyla anestezi olmadan mine veya giriş kavitesi yoluyla doğrudan mekanik uyaran verilmesi işlemidir. Eğer pulpa nekrotikse anestezi olmamasına rağmen hasta ağrı hissetmez; anestezi yapılırsa bu testin ayırıcı tanıdaki tüm geçerliliği kaybolur. Guta-perka ile fistül takibi sondlama işlemidir, kavite testi değildir.

---

### ÇİFT 35 (Benzerlik: 0.79)

**Soru 1 (ID: 50664af6-5edd-416a-b969-7657727a2cbb)**
Soru Kökü: Böbrek transplantasyonu geçirmiş otuz beş yaşında kadın hasta, organ reddini önlemek amacıyla kullandığı spesifik bir ilaca bağlı olarak gelişen yaygın fibrotik dişeti büyümesi şikayeti ile peridontoloğa başvurmuştur. Bu tabloya neden olan en olası farmakolojik ajan aşağıdakilerden hangisidir?
Doğru Şık (C): Siklosporin-A
Açıklama: Siklosporin-A (Cyclosporin-A), transplantasyon hastalarında greft reddini baskılamak için kullanılan spesifik bir immünsüpresif ilaçtır. En yaygın ve rahatsız edici dental yan etkilerinden biri, gingival fibroblastların aşırı kollajen üretmesini tetikleyerek yarattığı idiyopatik fibrotik dişeti büyümesidir (Gingival Hiperplazi). Diğer dişeti büyütücü ajanlar nifedipin (Ca kanal blokeri) ve fenitoin'dir (epilepsi).

**Soru 2 (ID: 2478d3c5-b063-4e6b-b824-8ed1708690a3)**
Soru Kökü: Organ transplantasyonu geçirmiş hastaların organ reddini önlemek için yaşam boyu kullandıkları bazı ilaçlar, oral mukozada fibröz doku hiperplazisine neden olmaktadır. Bu spesifik yan etkiye yol açan majör immünsupresif ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Siklosporin-A
Açıklama: Siklosporin-A, transplant hastalarında hücresel bağışıklığı T-lenfosit üzerinden baskılayan potent bir immünsupresif olup, bilinen en belirgin oral yan etkisi jeneralize gingival doku büyümesidir (gingival overgrowth). İlaç kesilemediği için bu hastalarda plak kontrolünün mükemmel seviyede tutulması, sekonder gingivektomi cerrahilerinin sıklığını azaltan yegane faktördür.

---

### ÇİFT 36 (Benzerlik: 0.79)

**Soru 1 (ID: a1c19cd3-7855-47a9-8706-ae9c0b02a310)**
Soru Kökü: Aort kapak replasmanı öyküsü olan 55 yaşındaki kadın hastaya, jeneralize kök yüzeyi düzleştirilmesi işlemi planlanmıştır. Anamnezinde penisiline karşı anafilaksi hikayesi bulunan bu hasta için AHA'nın önerdiği **en ideal** oral profilaktik antibiyotik rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): İşlemden 30 ila 60 dakika önce 500 mg Azitromisin oral
Açıklama: AHA profilaksi kurallarına göre penisilin/amoksisilin alerjisi olan ve oral yolla ilaç alabilen yetişkin hastalarda makrolid grubu olan Azitromisin veya Klaritromisin 500 mg (işlemden 30-60 dk önce tek doz) birinci tercih alternatiflerdendir. Hastada alerji hikayesi olması Sefaleksin (çapraz alerji riski) ve Amoksisilin kullanımını elediği için azitromisin spesifik ve güvenli bir rejimdir.

**Soru 2 (ID: 4ae8f3d7-0a89-4595-b880-1b4f2469d5c3)**
Soru Kökü: Kırk beş yaşındaki erkek hasta protez kalp kapağı taşımaktadır ve penisilin alerjisi bulunmamaktadır. Ancak hasta gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir gıda ve ilaç alamamaktadır. Bu hastaya periodontal cerrahi öncesi uygulanması gereken parenteral (IM veya IV) profilaksi ajanı ve dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 2 g IM veya IV Ampisilin
Açıklama: Oral ilaç alamayan ve penisilin alerjisi OLMAYAN bir yetişkinde standart parenteral profilaksi ajanı 2 g IM veya IV Ampisilindir. (Sefazolin/Seftriakson 1g de kullanılabilir ancak penisilin grubu tercih edilecekse doğrudan Ampisilin 2g temeldir). Oral ajanlar (amoksisilin, klaritromisin) hasta yutamadığı için elenir.

---

### ÇİFT 37 (Benzerlik: 0.79)

**Soru 1 (ID: 6ca5807f-ba5a-4bc9-a779-972c2e90b3bf)**
Soru Kökü: İnfektif Endokardit (İE) için yüksek risk grubunda olan bir hastada uygulanacak dental işlemin tipi, antibiyotik profilaksisi gerekip gerekmediğini belirler. Amerikan Kalp Birliği (AHA) rehberine göre aşağıdakilerden hangisi bakteriyemi riski yüksek olduğu için profilaksi gerektiren (yüksek riskli) periodontal girişimlerden **değildir**?
Doğru Şık (B): Geçirilmiş flep cerrahisi sonrası rutin sütur alınması
Açıklama: AHA rehberlerine göre; sondlama, implant cerrahisi, subgingival bant yerleşimi ve kök yüzeyi düzleştirilmesi gibi dişeti veya periapikal dokunun manipüle edildiği işlemler yüksek risk grubundadır ve mutlak profilaksi gerektirir. Sütur alınması, anestezi enjeksiyonu (enfekte olmayan dokuya), ve radyograf çekimi ise düşük riskli işlemler kategorisinde olup profilaksi zorunluluğu barındırmaz.

**Soru 2 (ID: bd89ea83-63b1-4ca1-91b4-80b8bc78752e)**
Soru Kökü: Amerikan Kalp Birliği (AHA) güncel kılavuzlarına göre infektif endokardit (İE) gelişimi açısından yüksek risk grubunda yer alan ve periodontal muayene (sondlama) dahil profilaksi uygulanması **kesinlikle** zorunlu olan hasta profili aşağıdakilerden hangisidir?
Doğru Şık (A): Kalp kapağı onarımında protez materyali kullanılmış olan hastalar
Açıklama: AHA kriterlerine göre İE için yüksek risk taşıyan grupta; protez kalp kapağı bulunanlar (veya onarımda protez materyali kullanılanlar), önceden İE öyküsü olanlar, siyanotik doğumsal kalp hastaları ve kapak patolojisi gelişmiş kalp nakli hastaları yer alır. Bu gruptaki hastalara sondlama dahil tüm kanamalı periodontal işlemlerde profilaksi şarttır. Masum üfürüm veya hipertansiyon bu risk grubunda değildir.

---

### ÇİFT 38 (Benzerlik: 0.79)

**Soru 1 (ID: bd89ea83-63b1-4ca1-91b4-80b8bc78752e)**
Soru Kökü: Amerikan Kalp Birliği (AHA) güncel kılavuzlarına göre infektif endokardit (İE) gelişimi açısından yüksek risk grubunda yer alan ve periodontal muayene (sondlama) dahil profilaksi uygulanması **kesinlikle** zorunlu olan hasta profili aşağıdakilerden hangisidir?
Doğru Şık (A): Kalp kapağı onarımında protez materyali kullanılmış olan hastalar
Açıklama: AHA kriterlerine göre İE için yüksek risk taşıyan grupta; protez kalp kapağı bulunanlar (veya onarımda protez materyali kullanılanlar), önceden İE öyküsü olanlar, siyanotik doğumsal kalp hastaları ve kapak patolojisi gelişmiş kalp nakli hastaları yer alır. Bu gruptaki hastalara sondlama dahil tüm kanamalı periodontal işlemlerde profilaksi şarttır. Masum üfürüm veya hipertansiyon bu risk grubunda değildir.

**Soru 2 (ID: bec09423-354f-4da2-9848-6d1cbfd8e66e)**
Soru Kökü: Sistemik hastalıkları olan hastaların periodontal tedavilerinde antibiyotik profilaksisi yaklaşımıyla ilgili aşağıdaki durumlardan hangisi İnfektif Endokardit (İE) açısından yüksek risk taşıyan ve AHA'ya göre profilaksi önerilen gruplar arasında **yer almaz**?
Doğru Şık (D): Komplike olmayan koroner arter bypass greft (CABG) operasyonu geçirmiş hastalar
Açıklama: Amerikan Kalp Birliği (AHA) kılavuzlarına göre, komplike olmayan koroner arter bypass operasyonu geçirmiş hastalarda kardiyolog tarafından aksine bir uyarı yapılmadığı sürece rutin infektif endokardit profilaksisi uygulanmasına gerek yoktur. Geçirilmiş İE, protez kapak varlığı ve siyanotik doğumsal kalp hastalıkları yüksek risk grubundadır ve mukozayı perfore eden tüm işlemlerde profilaksi zorunludur. Yanlış profilaksi uygulaması, dirençli bakteri gelişimine yol açan bir klinik hatadır.

---

### ÇİFT 39 (Benzerlik: 0.78)

**Soru 1 (ID: 0c6db846-8143-4f07-a91c-e304b2215865)**
Soru Kökü: İnce kemik plakalarına sahip ince periodontal biyotipli bir hastada, yapılan sabit restorasyonun marjini biyolojik genişliği ihlal edecek şekilde yerleştirilmiştir. Bu hastada dokunun biyolojik genişliği yeniden sağlama çabası sonucu en olası fizyolojik yanıt aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik rezorpsiyonu ve eş zamanlı dişeti çekilmesi
Açıklama: İnce biyotipli hastalarda ve derin dantela formuna sahip dişetlerinde doku, bozulan biyolojik genişliği yeniden oluşturmak için marjinal kemiği rezorbe eder ve buna dişeti çekilmesi eşlik eder. Kalın biyotipli dokularda ise kemik rezorpsiyonu yerine yaygın olarak kemik seviyesinin değişmediği inatçı gingival inflamasyon izlenir. Biyotip kalınlığı, organizmanın restoratif mikrotravmaya vereceği yanıtın yönünü tayin eden ana unsurdur.

**Soru 2 (ID: 4bdf8020-5b79-476d-a664-baf73a8e5174)**
Soru Kökü: Kırk beş yaşında kadın hastanın üst anterior bölgesine yapılan porselen kuronların marjinleri biyolojik genişliği ihlal etmiştir. Hastanın ince dişeti biyotipine ve derin dantela formuna sahip olduğu gözlemlenmiştir. Bu biyolojik alan ihlali sonucunda dokuların en olası fizyolojik yanıtı ne olacaktır?
Doğru Şık (B): Yeterli mesafeyi sağlamak için kemik rezorbe olur ve dişeti çekilmesi meydana gelir.
Açıklama: İnce kemik plakaları ve ince dişeti biyotipine (derin dantela formu) sahip hastalarda, biyolojik genişliğin ihlal edilmesi durumunda doku kendi fizyolojik alanını yeniden oluşturmak için marjinal kemiği rezorbe eder. Kemiğin apikale çekilmesini takiben ince biyotipli dişeti de rezorpsiyonu takip eder ve dişeti çekilmesi görülür. Kalın biyotipte ise rezorpsiyon yerine kronik enflamasyon daha sıktır.

---

### ÇİFT 40 (Benzerlik: 0.78)

**Soru 1 (ID: 5f1bdeda-7f6b-40cb-ba29-ebaaed06e928)**
Soru Kökü: Erişkin hastalarda periodontal tedaviye destek amacıyla uygulanan ortodontik tedavinin bazı durumlar için sınırlamaları vardır. Aşağıdakilerden hangisi periodontolojide ortodontik müdahale gerektiren bir endikasyon **değildir**?
Doğru Şık (D): Periodontal yıkım nedeniyle yeterli ankarajın kalmadığı devrilmiş dişleri hareket ettirmek
Açıklama: Ortodontik diş hareketi sağlamak için reaksiyon kuvvetini karşılayacak sağlam dayanaklara (ankaraj) ihtiyaç vardır. İleri düzeyde kemik kaybı olan, ankaraj değeri yetersiz periodontal hastalıklı dişlerde ortodontik tedavi kontrendikedir, endikasyon değildir. Diğer şıkların tümü ortodontinin periodontolojiye olumlu katkı sağladığı kesin tedavi endikasyonlarıdır.

**Soru 2 (ID: 4a4c6da9-f262-4453-8dd6-5670afac6389)**
Soru Kökü: Ortodontik diş hareketi uygulanacak hastalarda, periodontal sağlığın idamesi ve tedavi planlaması büyük önem taşır. Aşağıdakilerden hangisi bir hastada planlanan ortodontik tedavi için kontrendikasyon **değildir**?
Doğru Şık (D): Hastanın kronik periodontitis geçmişine sahip erişkin yaşta olması
Açıklama: Yaş ve daha önceden geçirilmiş periodontal hastalık varlığı tek başına ortodontik tedavi için bir kontrendikasyon değildir. İltihap tam olarak kontrol altına alındığı sürece, erişkin hastalarda ortodontik tedavi güvenle ve başarıyla uygulanabilir. Ancak aktif inflamasyon, yetersiz yapışık dişeti kalınlığı ve kontrolsüz hastalık aktivitesi mutlak kontrendikasyonlar arasında yer alır.

---

### ÇİFT 41 (Benzerlik: 0.78)

**Soru 1 (ID: 4ae8f3d7-0a89-4595-b880-1b4f2469d5c3)**
Soru Kökü: Kırk beş yaşındaki erkek hasta protez kalp kapağı taşımaktadır ve penisilin alerjisi bulunmamaktadır. Ancak hasta gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir gıda ve ilaç alamamaktadır. Bu hastaya periodontal cerrahi öncesi uygulanması gereken parenteral (IM veya IV) profilaksi ajanı ve dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 2 g IM veya IV Ampisilin
Açıklama: Oral ilaç alamayan ve penisilin alerjisi OLMAYAN bir yetişkinde standart parenteral profilaksi ajanı 2 g IM veya IV Ampisilindir. (Sefazolin/Seftriakson 1g de kullanılabilir ancak penisilin grubu tercih edilecekse doğrudan Ampisilin 2g temeldir). Oral ajanlar (amoksisilin, klaritromisin) hasta yutamadığı için elenir.

**Soru 2 (ID: ba0c4ba7-0d13-4261-9904-ecbfcd750c02)**
Soru Kökü: İnfektif Endokardit (İE) profilaksisi gereken, oral ilaç kullanamayan ancak penisilin grubuna alerjisi olmadığı bilinen yetişkin bir hastada, Ampisilin yerine alternatif olarak kullanılabilecek sefalosporin grubu ajan ve doğru dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 1 g IM veya IV Sefazolin veya Seftriakson
Açıklama: Oral ilaç alamayan yetişkin hastalarda Ampisilin (2g IM/IV) kullanılabileceği gibi alternatif olarak 1 g IM veya IV Sefazolin veya Seftriakson da tercih edilebilir. Seçenek A ve B oral formdur (hasta oral alamıyor), Azitromisin ve Doksisiklin bu spesifik endikasyonda (alerjisiz, oral alamayan) primer tercih değildir.

---

### ÇİFT 42 (Benzerlik: 0.78)

**Soru 1 (ID: f19a83fd-742f-4218-a974-4a71c71c6af6)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, sağ alt birinci büyük azı dişinin dişetinde hafif şişlik ve fırçalama sırasında rahatsızlık şikayetiyle başvuruyor. Klinik muayenede dişte derin bir periodontal cep tespit ediliyor, ancak spontan şiddetli ağrı bulunmuyor. Radyografide apikal lezyon izlenmiyor. Bu vakada lezyonun şiddetli ağrıya neden olmamasının en olası patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Apse formasyonunun sulkus içinde bağ dokusu ataşmanı düzeyinde gelişmesi ve periostu yükseltmemesi
Açıklama: Periodontal apseler genellikle şiddetli ağrılı lezyonlar değildir çünkü pürülan birikim periodontal cep içinde, bağ dokusu ataşmanı düzeyinde lokalize olur ve kemik üzerindeki periostu kemikten ayırıp yükseltmez. Akut apikal apselerde ise enfeksiyon doğrudan kemik içine ilerleyip periostu yükselttiği için basınç artar ve zonklayıcı, şiddetli bir ağrı ortaya çıkar. Pulpal drenaj veya lateral kanal tutulumu bu spesifik ağrı farkını açıklayan primer mekanizma değildir.

**Soru 2 (ID: 6e8824cd-d746-4190-8992-0aedfa1db70e)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, sol üst birinci küçük azı dişinde gece uykudan uyandıran, zonklayıcı ve şiddetli ağrı şikayetiyle başvuruyor. Klinik muayenede diş perküsyon testine aşırı hassas bulunuyor ve ilgili bölgede mukobukkal katlantıda belirgin bir ödem izleniyor. Hastadaki bu dayanılmaz ağrının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Akut apikal apsede iltihabın periodontal ligamente ulaşıp kemik perforasyonuyla periostu yükseltmesi
Açıklama: Akut apikal apselerde enfeksiyon kök ucundan periodontal ligamente, oradan da alveolar kemiği perfore ederek periost altına yayılır; periostun kemikten ayrılıp yükselmesi kapalı alanda aşırı basınca neden olarak şiddetli zonklayıcı ağrı yaratır. Sulkus epitelindeki ülserasyon veya sement erozyonu kronik periodontitisin özellikleridir ve bu derece akut/şiddetli ağrı üretmezler. Hasta, drenaj sağlanana kadar (fistül açılana dek) bu şiddetli ağrıyı duymaya devam eder.

---

### ÇİFT 43 (Benzerlik: 0.78)

**Soru 1 (ID: b657aa4c-95f8-427c-82a7-9a6301843adb)**
Soru Kökü: Cerrahi kron boyu uzatma işlemleri sırasında biyolojik genişliğin korunması için kemik kreti ile planlanan restorasyonun dişeti marjini arasında minimum ne kadar mesafe bırakılması önerilir?
Doğru Şık (B): 3 mm
Açıklama: Biyolojik genişlik ölçüsü ortalama 2.04 mm, sağlıklı sulkus ise ortalama 0.69 mm olduğundan, cerrahi sırasında kemik kreti ile dişeti marjini arasında bu yapıların fizyolojik restorasyonu için en az 3 mm boşluk bırakılması gerekir. Kırık veya çürük varlığında bu mesafe 4 mm'ye çıksa da, temel marjin-kret mesafesi kuralı 3 mm olarak sabittir. Daha az mesafe bırakılması biyolojik alanın invazyonuna neden olur.

**Soru 2 (ID: e1bbbf70-3272-48c7-8dab-54a1101af234)**
Soru Kökü: Cerrahi kron boyu uzatma işlemleri sırasında kırık veya çürük sınırının periodontal dokulara olan mesafesi dikkatle ayarlanmalıdır. Subgingival bölgeye uzanan derin bir kron kırığı tespit edilen vakada, cerrahi şekillendirme yapıldıktan sonra biyolojik genişlik ihlali olmaması için kemik kret ile kırık hattı arasında **en az** kaç mm kemiksuz güvenli mesafe bırakılmalıdır?
Doğru Şık (D): 4 mm
Açıklama: Sağlam bir diş için restorasyon marjini ile kemik kreti arasında biyolojik genişliği korumak adına ideal 3 mm mesafe aranır. Ancak dişte açık çürük veya subgingival kırık hattı varlığında, enfekte alandan yeterince uzaklaşabilmek ve epitelin sağlıklı dokuya tutunmasını garanti altına almak için bu mesafenin kemik kreti ile kırık hattı arasında en az 4 mm olması gerektiği vurgulanmıştır.

---

### ÇİFT 44 (Benzerlik: 0.78)

**Soru 1 (ID: 3f441704-59fd-49ab-a509-5450af8c809c)**
Soru Kökü: Ağızda aniden ortaya çıkan ve lokalize ödem yapan apselerin tanısında radyografik iz sürücüler (gutta-percha) kullanılır. Klinik muayenesinde şiddetli perküsyon hassasiyeti ve gece ağrısı olmayan, sadece diş eti üzerinde lokalize bir şişlik hisseden hastanın fistülünden gutta-percha gönderildiğinde aşağıdakilerden hangisinin gerçekleşmesi **en güçlü** şekilde periodontal apseyi işaret eder?
Doğru Şık (C): Gutta-perchanın periodontal ceple bağlantı kurarak cep sınırları (kök yan yüzeyi) içerisinde kalması
Açıklama: Periodontal apsede drenaj yolu mevcut bir periodontal cebe açılır. Bu nedenle fistülden yerleştirilen gutta-percha apekse (kök ucuna) kadar inmez; kökün yan yüzeyindeki lateral cep defektinde durur. Endodontik apsede ise gutta-percha enfeksiyonun kökeni olan foramen apikale noktasına kadar kesintisiz ilerler.

**Soru 2 (ID: a5b70ddb-07fd-46ab-b61c-f0aa3de52fd4)**
Soru Kökü: Otuz yaşında erkek hasta lokalize bir dişeti şişliği şikayetiyle başvuruyor. Periodontal muayenede dişeti mukozasında bir fistül ağzı saptanıyor. Teşhis amacıyla fistül yoluna ince bir guta-perka konulup radyograf alınıyor. Guta-perka izinin furkasyonda, kök ortasında kalmayıp doğrudan apekse kadar ilerlediği görülüyor. Bu bulgu öncelikle aşağıdakilerden hangisini düşündürür?
Doğru Şık (C): Fistül yolu endodontik kökenlidir ve apikal apsenin yumuşak dokuya drenajını gösterir.
Açıklama: Guta-perka veya sond ile yapılan fistül izleme (tracking) testinde, radyografik olarak guta-perkanın ucunun doğrudan apekse ulaştığı görülüyorsa, enfeksiyonun birincil kaynağı pulpal nekroza bağlı gelişen apikal periodontitis/apsedir. Eğer guta furkasyonda veya kök ortasında kalsaydı, lateral kanal orijinli endodontik veya periodontal bir apse düşünülürdü.

---

### ÇİFT 45 (Benzerlik: 0.78)

**Soru 1 (ID: aa05ae69-6672-416f-b3e2-2dd5325d6ab4)**
Soru Kökü: Periodontitisin kardiyovasküler sistem üzerindeki olumsuz etkilerinin patogenezinde, trombositlere selektif olarak bağlanarak trombosit agregasyonu yapan ve böylece akut tromboembolitik olaylara yol açan mikroorganizmalar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (A): S. sanguis ve P. gingivalis
Açıklama: Periodontal patojenlerden Streptococcus sanguis ve Porphyromonas gingivalis, doğrudan trombositlere selektif bağlanma yeteneğine sahiptir. Bu bağlanma trombosit agregasyonunu (kümeleşmesini) indükler ve dolaşımda pıhtı oluşumunu tetikleyerek miyokardiyal enfarktüs veya iskemik felç gibi akut tromboembolitik olaylar için direkt bir risk yaratır.

**Soru 2 (ID: 76fbf396-c006-41af-b858-c8fd1ef35fc3)**
Soru Kökü: İskemik kalp hastalığı risk faktörleri incelendiğinde, periodontal plakta bulunan spesifik bakterilerin dolaşıma girerek endotel duvarında selektif olarak trombositlere tutunduğu ve akut tromboembolik olayları başlattığı (trombogenezis) gösterilmiştir. Bu mekanizmada rolü kanıtlanmış ana mikrobiyal ikili aşağıdakilerin hangisinde verilmiştir?
Doğru Şık (C): Streptococcus sanguis ve Porphyromonas gingivalis
Açıklama: Oral floradan kan akımına karışan Streptococcus sanguis ve periodontal patojen Porphyromonas gingivalis, yüzeylerinde bulunan özel protein yapılar sayesinde kanda trombositlere direkt bağlanma afinitesine sahiptir. Bu hücre-hücre adezyonu, trombositlerin hatalı olarak aktive olmasına ve kümelenmesine (agregasyon) yol açarak iskemik inme veya miyokard infarktüsünü tetikleyen intravasküler trombüsleri yaratır.

---

### ÇİFT 46 (Benzerlik: 0.78)

**Soru 1 (ID: ba0c4ba7-0d13-4261-9904-ecbfcd750c02)**
Soru Kökü: İnfektif Endokardit (İE) profilaksisi gereken, oral ilaç kullanamayan ancak penisilin grubuna alerjisi olmadığı bilinen yetişkin bir hastada, Ampisilin yerine alternatif olarak kullanılabilecek sefalosporin grubu ajan ve doğru dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 1 g IM veya IV Sefazolin veya Seftriakson
Açıklama: Oral ilaç alamayan yetişkin hastalarda Ampisilin (2g IM/IV) kullanılabileceği gibi alternatif olarak 1 g IM veya IV Sefazolin veya Seftriakson da tercih edilebilir. Seçenek A ve B oral formdur (hasta oral alamıyor), Azitromisin ve Doksisiklin bu spesifik endikasyonda (alerjisiz, oral alamayan) primer tercih değildir.

**Soru 2 (ID: 9fd06c6e-3dfb-457c-a1bc-e9deb1f019d7)**
Soru Kökü: Daha önce İnfektif Endokardit (İE) atağı geçirmiş olan 38 yaşındaki kadın hastaya diş çekimi ve apse drenajı yapılacaktır. Anamnezinde penisiline karşı anafilaksi öyküsü bulunan ve oral ilaç kullanabilen bu hastaya profilaktik olarak hangi antibiyotik rejimi reçete edilmelidir?
Doğru Şık (A): İşlemden 30-60 dakika önce 100 mg oral Doksisiklin
Açıklama: Penisilin alerjisi olan ve oral ilaç alabilen yetişkin hastalarda Sefaleksin (2g), Azitromisin/Klaritromisin (500mg) veya Doksisiklin (100mg) kullanılabilir. Sefaleksin anafilaksi durumlarında çapraz reaksiyon riski nedeniyle tercih edilmeyebilir, Doksisiklin 100 mg oral alımı güvenli ve etkin bir alternatiftir. Amoksisilin ve Ampisilin penisilin alerjisi nedeniyle kesin kontrendikedir.

---

### ÇİFT 47 (Benzerlik: 0.77)

**Soru 1 (ID: 72945e00-0a20-4886-bd46-5fe09d6b2cc6)**
Soru Kökü: Kardiyovasküler sistem üzerindeki etkileri incelendiğinde, dolaşıma giren *S. sanguis* ve *P. gingivalis* gibi oral patojenlerin miyokardiyal infarktüs gibi akut tromboembolitik olayları tetiklemesinin temel hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Trombositlere selektif bağlanarak agregasyona yol açmaları
Açıklama: S. sanguis ve P. gingivalis gibi periodontal patojenlerin yüzey proteinleri, kanda bulunan trombositlere (kan pulcuklarına) spesifik olarak bağlanma yeteneğine sahiptir. Bu bağlanma, trombositleri aktive ederek onların birbirine yapışmasına (agregasyon) neden olur ve damar lümenini aniden tıkayabilen mikrotrombüs (pıhtı) oluşumunu tetikler.

**Soru 2 (ID: 76fbf396-c006-41af-b858-c8fd1ef35fc3)**
Soru Kökü: İskemik kalp hastalığı risk faktörleri incelendiğinde, periodontal plakta bulunan spesifik bakterilerin dolaşıma girerek endotel duvarında selektif olarak trombositlere tutunduğu ve akut tromboembolik olayları başlattığı (trombogenezis) gösterilmiştir. Bu mekanizmada rolü kanıtlanmış ana mikrobiyal ikili aşağıdakilerin hangisinde verilmiştir?
Doğru Şık (C): Streptococcus sanguis ve Porphyromonas gingivalis
Açıklama: Oral floradan kan akımına karışan Streptococcus sanguis ve periodontal patojen Porphyromonas gingivalis, yüzeylerinde bulunan özel protein yapılar sayesinde kanda trombositlere direkt bağlanma afinitesine sahiptir. Bu hücre-hücre adezyonu, trombositlerin hatalı olarak aktive olmasına ve kümelenmesine (agregasyon) yol açarak iskemik inme veya miyokard infarktüsünü tetikleyen intravasküler trombüsleri yaratır.

---

### ÇİFT 48 (Benzerlik: 0.77)

**Soru 1 (ID: 0e504b08-5669-4e31-a314-8e4aa513ee51)**
Soru Kökü: AHA (Amerikan Kalp Birliği) kılavuzlarına göre, infektif endokardit (İE) açısından sadece yüksek risk taşıyan hastalara profilaksi önerilmektedir. Aşağıdaki durumlardan hangisi profilaksi gerektiren yüksek risk gruplarından biridir?
Doğru Şık (A): Cerrahi onarım uygulanmamış siyanotik doğumsal kalp hastalığı
Açıklama: AHA kriterlerine göre yüksek risk grubunda yer alan ve profilaksi gerektirenler: Protez kapaklılar, İE öyküsü olanlar, palyatif şantı bulunan onarılmamış siyanotik kalp hastaları ve onarımın ilk 6 ayındaki vakalardır. Bypass hastalarında veya kapak hasarı bırakmayan romatizmal ateşte kardiyolog özel bir uyarı yapmadıkça profilaksi gerekmez.

**Soru 2 (ID: f3deeb9d-9d9b-4d2a-b73b-5952ab45309c)**
Soru Kökü: Doğumsal kalp hastalıkları alt grubunda yer alan hastalarda, İnfektif Endokardit (İE) açısından yüksek risk taşıdığı için dental işlemler öncesi antibiyotik profilaksisi gerektiren spesifik anatomik/cerrahi durum aşağıdakilerden hangisidir?
Doğru Şık (B): Cerrahi onarım uygulanmamış, palyatif şantlar veya kondüitler bulunduran siyanotik doğumsal kalp hastalıkları
Açıklama: Doğumsal kalp hastalıkları içinde profilaksi sadece belirli şartlarda önerilir: Cerrahi onarım görmemiş palyatif şantlı siyanotik hastalıklar, tam onarım yapılmış ancak ilk 6 ayını doldurmamış vakalar veya onarım materyali etrafında rezidüel defekt kalan vakalar yüksek risklidir. Tamamen iyileşmiş ve kalıntısız onarımlar (ilk 6 aydan sonra) veya kalp pili (pacemaker) taşıyan hastalar endokardit profilaksisi gerektirmez.

---

### ÇİFT 49 (Benzerlik: 0.77)

**Soru 1 (ID: d0f156e0-3e71-44e2-81d9-8bc28bbd4225)**
Soru Kökü: Doğumsal siyanotik kalp hastalığı bulunan ve Amerikan Kalp Birliği (AHA) kriterlerine göre enfektif endokardit gelişimi açısından yüksek risk kategorisinde yer alan 10 yaşındaki (30 kg) bir çocuk hastaya sondlama ve başlangıç periodontal tedavisi uygulanacaktır. Hastanın penisilin alerjisi bulunmadığına ve ilaçları oral yolla alabildiğine göre uygulanması gereken **doğru profilaksi rejimi ve dozu** aşağıdakilerden hangisidir?
Doğru Şık (B): İşlemden 30-60 dakika önce 50 mg/kg (toplam 1500 mg) oral Amoksisilin
Açıklama: Penisilin alerjisi olmayan ve oral ilaç kullanabilen riskli çocuk hastalarda AHA standart profilaksi protokolü; işlemden 30 ila 60 dakika önce oral yolla 50 mg/kg Amoksisilin uygulamasıdır. Yetişkin dozu ise aynı zamanlamayla tek doz 2 gram oral Amoksisilin'dir.

**Soru 2 (ID: 4ae8f3d7-0a89-4595-b880-1b4f2469d5c3)**
Soru Kökü: Kırk beş yaşındaki erkek hasta protez kalp kapağı taşımaktadır ve penisilin alerjisi bulunmamaktadır. Ancak hasta gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir gıda ve ilaç alamamaktadır. Bu hastaya periodontal cerrahi öncesi uygulanması gereken parenteral (IM veya IV) profilaksi ajanı ve dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 2 g IM veya IV Ampisilin
Açıklama: Oral ilaç alamayan ve penisilin alerjisi OLMAYAN bir yetişkinde standart parenteral profilaksi ajanı 2 g IM veya IV Ampisilindir. (Sefazolin/Seftriakson 1g de kullanılabilir ancak penisilin grubu tercih edilecekse doğrudan Ampisilin 2g temeldir). Oral ajanlar (amoksisilin, klaritromisin) hasta yutamadığı için elenir.

---

### ÇİFT 50 (Benzerlik: 0.77)

**Soru 1 (ID: 0e504b08-5669-4e31-a314-8e4aa513ee51)**
Soru Kökü: AHA (Amerikan Kalp Birliği) kılavuzlarına göre, infektif endokardit (İE) açısından sadece yüksek risk taşıyan hastalara profilaksi önerilmektedir. Aşağıdaki durumlardan hangisi profilaksi gerektiren yüksek risk gruplarından biridir?
Doğru Şık (A): Cerrahi onarım uygulanmamış siyanotik doğumsal kalp hastalığı
Açıklama: AHA kriterlerine göre yüksek risk grubunda yer alan ve profilaksi gerektirenler: Protez kapaklılar, İE öyküsü olanlar, palyatif şantı bulunan onarılmamış siyanotik kalp hastaları ve onarımın ilk 6 ayındaki vakalardır. Bypass hastalarında veya kapak hasarı bırakmayan romatizmal ateşte kardiyolog özel bir uyarı yapmadıkça profilaksi gerekmez.

**Soru 2 (ID: bec09423-354f-4da2-9848-6d1cbfd8e66e)**
Soru Kökü: Sistemik hastalıkları olan hastaların periodontal tedavilerinde antibiyotik profilaksisi yaklaşımıyla ilgili aşağıdaki durumlardan hangisi İnfektif Endokardit (İE) açısından yüksek risk taşıyan ve AHA'ya göre profilaksi önerilen gruplar arasında **yer almaz**?
Doğru Şık (D): Komplike olmayan koroner arter bypass greft (CABG) operasyonu geçirmiş hastalar
Açıklama: Amerikan Kalp Birliği (AHA) kılavuzlarına göre, komplike olmayan koroner arter bypass operasyonu geçirmiş hastalarda kardiyolog tarafından aksine bir uyarı yapılmadığı sürece rutin infektif endokardit profilaksisi uygulanmasına gerek yoktur. Geçirilmiş İE, protez kapak varlığı ve siyanotik doğumsal kalp hastalıkları yüksek risk grubundadır ve mukozayı perfore eden tüm işlemlerde profilaksi zorunludur. Yanlış profilaksi uygulaması, dirençli bakteri gelişimine yol açan bir klinik hatadır.

---

### ÇİFT 51 (Benzerlik: 0.77)

**Soru 1 (ID: def3c584-ab2c-4eec-aad4-20d967edaceb)**
Soru Kökü: Malokluzyon durumunun doğrudan bir etyolojik faktör olmamasına rağmen periodontitis patogenezine sekonder olarak katkıda bulunduğu en temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (E): Dişlerin temizlenmesini zorlaştırarak plak retansiyon alanları oluşturması
Açıklama: Malokluzyon (örneğin çapraşıklık), periodontal hastalıklar için tek başına doğrudan bir etken değildir. Ancak, fırçalama ve diş ipi kullanımını imkansız kılan plak retansiyon alanları oluşturarak mikroorganizmaların birikimi için zemin hazırlar ve böylece periodontal iltihabı kolaylaştırır. Biyolojik genişlik ihlali ise malokluzyonun değil, hatalı yapılmış taşkın restorasyonların bir sonucudur.

**Soru 2 (ID: c4e9c7ab-71f6-4749-ad72-2750dbdb23ac)**
Soru Kökü: Malokluzyon ve çapraşıklık durumlarının periodonsiyum üzerinde yarattığı tahribatı açıklayan mekanizmalar arasında aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (A): Sistemik proinflamatuar sitokin fırtınası yaratarak immün yanıtı baskılaması
Açıklama: Malokluzyon; plak retansiyonu, food impaction, temizlik güçlüğü ve okluzal travma gibi lokal faktörlerle periodontal yıkıma katkıda bulunur. Çapraşıklık durumunun kendisi sistemik bir sitokin fırtınası veya sistemik immünsüpresyon yaratmaz; bu durum ancak şiddetli sistemik hastalıklar (diyabet, HIV vb.) ile ilişkilidir.

---

### ÇİFT 52 (Benzerlik: 0.77)

**Soru 1 (ID: 1e42dad8-9780-4299-8880-6c4b5419fd77)**
Soru Kökü: Kırık bir kron restorasyonuna sahip olan dişte radyografik olarak periapikal radyolusensi izlenmektedir. Klinik muayenede diş canlılık testlerine negatif yanıt vermekte, periodontal prob ile yapılan incelemede sadece tek bir yüzeyden apekse kadar inen kısıtlı bir sondlama tespiti yapılmaktadır. Bu bulgular ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Primer pulpal lezyon
Açıklama: Primer pulpal lezyonlarda pulpa nonvitaldir ve enfeksiyon apeksten sulkusa doğru bir sinüs yolu açarak direne olabilir. Bu drenaj yolu klinik olarak geniş bir ataşman kaybı şeklinde değil, sadece fistül hattı boyunca apeksine inen çok dar ve kısıtlı bir sondlama profili olarak tespit edilir. Geniş generalize kemik kaybının olmaması durumu primer periodontal patolojilerden ayırır.

**Soru 2 (ID: 11789274-1f57-49ff-bdbf-f771fe9d32df)**
Soru Kökü: Kron bölgesinde geniş madde kaybı bulunan, elektrikli pulpa testine negatif (nonvital) yanıt veren bir dişte; radyografik incelemede periapikal bölgede başlayan ve kök yüzeyi boyunca kuronal yöne (servikale) doğru ilerleyen bir kemik yıkım profili tespit edilmiştir. İlgili dişteki periodontal sondlamada apeks yönünde dar ve derin bir defekt saptanmıştır. Bu klinik tablo aşağıdaki lezyon sınıflandırmalarından hangisiyle **en çok** uyumludur?
Doğru Şık (A): Primer pulpal lezyon
Açıklama: Primer pulpal lezyonda asıl sorun nonvital pulpadır. Periapikalde başlayan radyolusent enfeksiyon, basınçla kendine yol arayarak kök yüzeyi (periodontal ligament) boyunca servikale doğru yukarı yönde drene olur ve dar bir cep yaratır. Yıkımın yönünün apikalden koronale olması primer endodontik kaynağın tipik belirtecidir.

---

### ÇİFT 53 (Benzerlik: 0.76)

**Soru 1 (ID: 2d8141ab-e83b-472b-8cb2-d700eb218945)**
Soru Kökü: İnfektif Endokardit (İE) gelişme riski yüksek olan bir hastanın periodontal idamesi sırasında yapılan işlemlerden hangisi düşük riskli kabul edilerek antibiyotik profilaksisi gerektirmeyen (AHA kriterlerine göre) bir prosedürdür?
Doğru Şık (D): Sadece supragingival diş taşı temizliği (scaling) ve profilaksi yapılması
Açıklama: Sadece kuron yüzeyinden eklentilerin uzaklaştırıldığı supragingival scaling ve lastik kap/fırça ile yapılan profilaksi işlemleri dişetini penetre etmediği için düşük riskli işlemler grubundadır ve profilaksi gerektirmez. Apse drenajı, subgingival klemp yerleşimi veya implant işlemleri kanama yarattığı için yüksek risklidir.

**Soru 2 (ID: 4d931085-f9f6-4cb4-880b-e0eea208d0b0)**
Soru Kökü: Kardiyak risk grubundaki bir hastanın periodontal tedavi planı değerlendirilirken işlemlerin kanama ve bakteriyemi oluşturma potansiyeline göre risk analizi yapılır. Buna göre aşağıdakilerden hangisi İnfektif Endokardit açısından yüksek riskli (invaziv) grupta yer alan bir işlemdir?
Doğru Şık (C): Mukogingival cerrahi tedaviler
Açıklama: Mukogingival cerrahi, dokunun kesilmesi, flep kaldırılması ve sütürasyon aşamalarını içeren invaziv bir işlemdir ve yoğun bakteriyemi yaratarak yüksek risk oluşturur. Sütur alımı, supragingival band yerleşimi veya basit protez uyumlamaları mukoza perforasyonu yapmadıkları için düşük riskli kabul edilir.

---

### ÇİFT 54 (Benzerlik: 0.76)

**Soru 1 (ID: ef48c821-a14b-43c3-97eb-57c77ac00e1d)**
Soru Kökü: Sabit protez yapımında subgingival marjin yerleştirilecek bir dişte, sağlıklı sulkus derinliği 2 mm'den çok fazla ölçülmüştür. Bu durumda restorasyon marjininin konumlandırılması için en uygun periodontal-protetik yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (C): Öncelikle gingivektomi ile derinlik 1.5 mm'ye indirilir ve marjin 0.5 mm apikale konumlanır.
Açıklama: Sulkus derinliği 2 mm'den çok fazlaysa, marjini doğrudan derin sulkusa uzatmak patolojik florayı destekler; bu nedenle öncelikle gingivektomi ile derinliğin 1.5 mm'ye düşürülmesi gerekir. Derinlik ideal seviyeye indikten sonra marjin gingival marjinden ancak 0.5 mm apikalde konumlandırılabilir. Doğrudan derin sulkusun yarısına kadar inilmesi kuralı yalnızca sulkus derinliği 1.5 mm'den biraz fazla olduğunda geçerlidir.

**Soru 2 (ID: 9db9058b-985f-4c2d-afc8-ecd1fb7f70f7)**
Soru Kökü: 35 yaşında erkek hasta, sol alt birinci büyük azı dişine yapılacak sabit protez öncesi muayene ediliyor. Yapılan periodontal sondlamada dişin sulkus derinliğinin tüm yüzeylerde 3 mm civarında (çok fazla) olduğu tespit ediliyor. Bu dişte protetik restorasyon marjininin sağlıklı şekilde konumlandırılabilmesi için uygulanması gereken **en ideal** yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (E): Öncelikle gingivektomi ile derinliğin 1.5 mm'ye indirilmesi ve marjinin 0.5 mm apikale konumlanması
Açıklama: Sulkus derinliği 2 mm'den çok fazlaysa, restorasyon marjini doğrudan subgingival bölgeye yerleştirilmemeli; önce gingivektomi ile derinlik ideal olan 1.5 mm seviyesine indirilmelidir. İşlem sonrasında marjin, yeni oluşturulan gingival kenardan 0.5 mm apikale yerleştirilerek epitel ataşmanı korunur. Bu sayede biyolojik genişlik ihlalinden kaynaklanacak iatrojenik periodontitisin önüne geçilir.

---

### ÇİFT 55 (Benzerlik: 0.76)

**Soru 1 (ID: dfaa06cc-a6d9-480f-9181-fc3a7c3afacf)**
Soru Kökü: 40 yaşında erkek hasta, sol üst ikinci küçük azı dişindeki derin subgingival çürük nedeniyle başvuruyor. Restoratif işlemlere olanak tanımak amacıyla dişe cerrahi kron boyu uzatma işlemi planlanıyor. İşlem sırasında biyolojik genişliğin ihlal edilmemesi için kemik kreti ile çürük hattı arasında bırakılması gereken **minimum** sağlıklı mesafe ne kadar olmalıdır?
Doğru Şık (A): En az 4 mm
Açıklama: Cerrahi kron boyu uzatma işlemlerinde çürük veya kırık hattı varlığında, kemik kreti ile defektin sınırı (kırık hattı/çürük) arasında en az 4 mm mesafe bırakılması temel kuraldır. Bu mesafe, restorasyon marjini için gereken ferrule etkisini sağlamak ve 2.04 mm'lik fizyolojik biyolojik genişliğe zarar vermemek adına cerrahi sırasında mutlak olarak korunmalıdır.

**Soru 2 (ID: e1bbbf70-3272-48c7-8dab-54a1101af234)**
Soru Kökü: Cerrahi kron boyu uzatma işlemleri sırasında kırık veya çürük sınırının periodontal dokulara olan mesafesi dikkatle ayarlanmalıdır. Subgingival bölgeye uzanan derin bir kron kırığı tespit edilen vakada, cerrahi şekillendirme yapıldıktan sonra biyolojik genişlik ihlali olmaması için kemik kret ile kırık hattı arasında **en az** kaç mm kemiksuz güvenli mesafe bırakılmalıdır?
Doğru Şık (D): 4 mm
Açıklama: Sağlam bir diş için restorasyon marjini ile kemik kreti arasında biyolojik genişliği korumak adına ideal 3 mm mesafe aranır. Ancak dişte açık çürük veya subgingival kırık hattı varlığında, enfekte alandan yeterince uzaklaşabilmek ve epitelin sağlıklı dokuya tutunmasını garanti altına almak için bu mesafenin kemik kreti ile kırık hattı arasında en az 4 mm olması gerektiği vurgulanmıştır.

---

### ÇİFT 56 (Benzerlik: 0.76)

**Soru 1 (ID: 72945e00-0a20-4886-bd46-5fe09d6b2cc6)**
Soru Kökü: Kardiyovasküler sistem üzerindeki etkileri incelendiğinde, dolaşıma giren *S. sanguis* ve *P. gingivalis* gibi oral patojenlerin miyokardiyal infarktüs gibi akut tromboembolitik olayları tetiklemesinin temel hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Trombositlere selektif bağlanarak agregasyona yol açmaları
Açıklama: S. sanguis ve P. gingivalis gibi periodontal patojenlerin yüzey proteinleri, kanda bulunan trombositlere (kan pulcuklarına) spesifik olarak bağlanma yeteneğine sahiptir. Bu bağlanma, trombositleri aktive ederek onların birbirine yapışmasına (agregasyon) neden olur ve damar lümenini aniden tıkayabilen mikrotrombüs (pıhtı) oluşumunu tetikler.

**Soru 2 (ID: aa05ae69-6672-416f-b3e2-2dd5325d6ab4)**
Soru Kökü: Periodontitisin kardiyovasküler sistem üzerindeki olumsuz etkilerinin patogenezinde, trombositlere selektif olarak bağlanarak trombosit agregasyonu yapan ve böylece akut tromboembolitik olaylara yol açan mikroorganizmalar aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (A): S. sanguis ve P. gingivalis
Açıklama: Periodontal patojenlerden Streptococcus sanguis ve Porphyromonas gingivalis, doğrudan trombositlere selektif bağlanma yeteneğine sahiptir. Bu bağlanma trombosit agregasyonunu (kümeleşmesini) indükler ve dolaşımda pıhtı oluşumunu tetikleyerek miyokardiyal enfarktüs veya iskemik felç gibi akut tromboembolitik olaylar için direkt bir risk yaratır.

---

### ÇİFT 57 (Benzerlik: 0.76)

**Soru 1 (ID: b657aa4c-95f8-427c-82a7-9a6301843adb)**
Soru Kökü: Cerrahi kron boyu uzatma işlemleri sırasında biyolojik genişliğin korunması için kemik kreti ile planlanan restorasyonun dişeti marjini arasında minimum ne kadar mesafe bırakılması önerilir?
Doğru Şık (B): 3 mm
Açıklama: Biyolojik genişlik ölçüsü ortalama 2.04 mm, sağlıklı sulkus ise ortalama 0.69 mm olduğundan, cerrahi sırasında kemik kreti ile dişeti marjini arasında bu yapıların fizyolojik restorasyonu için en az 3 mm boşluk bırakılması gerekir. Kırık veya çürük varlığında bu mesafe 4 mm'ye çıksa da, temel marjin-kret mesafesi kuralı 3 mm olarak sabittir. Daha az mesafe bırakılması biyolojik alanın invazyonuna neden olur.

**Soru 2 (ID: c7d70831-a704-44dd-a730-0aa8324a65f3)**
Soru Kökü: Cerrahi kron boyu uzatma işlemi planlanan bir vakada, yeterli keratinize diş eti genişliğinin mevcut olduğu doğrulanmıştır. İşlem sırasında biyolojik genişliği ihlal etmemek adına, sadece yumuşak doku redüksiyonunun (gingivektomi) yeterli olabilmesi için kemik kretinin koronalinde bulunması gereken **minimum** yumuşak doku miktarı kaç mm olmalıdır?
Doğru Şık (D): 3 mm
Açıklama: Yeterli keratinize doku varlığında, kemik kretinin koronalinde minimum 3 mm yumuşak doku bulunuyorsa, bu dokunun redüksiyonu yeterli olur ve kemiğe müdahale gerekmez. Eğer bu mesafe 3 mm'den az ise, cerrahi flap operasyonu ile birlikte mutlaka kemik redüksiyonu da (ostektomi/osteoplasti) yapılmalıdır. Biyolojik genişlik (yaklaşık 2 mm) ile sulkus derinliği hesaplandığında 3 mm'lik bariyer kritik bir güvenlik sınırıdır.

---

### ÇİFT 58 (Benzerlik: 0.76)

**Soru 1 (ID: d8821115-9e9a-4037-9fd4-ae8da9467a2a)**
Soru Kökü: Serbest sonlu parsiyel hareketli protez kullanan hastalarda, destek dişe ve alveol kemiğine gelen zararlı kuvvetlerin minimize edilmesi hedeflenir. Bu amaçla protezin destek dişteki tırnak ve kroşe konumu nasıl planlanmalıdır?
Doğru Şık (B): Tırnak meziale taşınmalı, retansiyon distal undercuttan sağlanmalı
Açıklama: Serbest sonlu (distal eklenti) vakalarında okluzal kuvvet protez kaidesini dokuya doğru bastırdığında, dişin distale devrilmesini engellemek için tırnak mutlaka meziale yerleştirilmelidir. Retansiyon ise distal undercuttan alınarak stres kırıcı bir hareket paterni sağlanır. Bu biyomekanik prensip, destek dişin uzun eksenine paralel kuvvet gelmesini sağlayarak dişin periodontal yıkımını önler.

**Soru 2 (ID: e29d5f9e-88ba-4442-8d4f-7550edb3cc53)**
Soru Kökü: Serbest sonlu parsiyel protezlerin tasarımında, doku gömülmesi sırasında dayanak dişe iletilen tork kuvvetlerini azaltmak amacıyla özel konumlandırma prensipleri uygulanır. Alveol kemiğine gelecek hasarı minimuma indiren bu prensip aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (C): Tırnak dişteki mezial fossaya taşınmalı ve retansiyon için distal undercuttan yararlanılmalıdır.
Açıklama: Serbest sonlu protezlerde çiğneme anında kret dokusu çöker. Tırnak distale yerleştirilirse protez dişi arkaya doğru devirmeye çalışır. Tırnağın meziale alınması ve retansiyonun distal undercuttan sağlanması durumunda, protez mezial tırnak çevresinde bir miktar dönerek diş üzerindeki yıkıcı çekme ve devirme stresini absorbe eder.

---

### ÇİFT 59 (Benzerlik: 0.76)

**Soru 1 (ID: bec09423-354f-4da2-9848-6d1cbfd8e66e)**
Soru Kökü: Sistemik hastalıkları olan hastaların periodontal tedavilerinde antibiyotik profilaksisi yaklaşımıyla ilgili aşağıdaki durumlardan hangisi İnfektif Endokardit (İE) açısından yüksek risk taşıyan ve AHA'ya göre profilaksi önerilen gruplar arasında **yer almaz**?
Doğru Şık (D): Komplike olmayan koroner arter bypass greft (CABG) operasyonu geçirmiş hastalar
Açıklama: Amerikan Kalp Birliği (AHA) kılavuzlarına göre, komplike olmayan koroner arter bypass operasyonu geçirmiş hastalarda kardiyolog tarafından aksine bir uyarı yapılmadığı sürece rutin infektif endokardit profilaksisi uygulanmasına gerek yoktur. Geçirilmiş İE, protez kapak varlığı ve siyanotik doğumsal kalp hastalıkları yüksek risk grubundadır ve mukozayı perfore eden tüm işlemlerde profilaksi zorunludur. Yanlış profilaksi uygulaması, dirençli bakteri gelişimine yol açan bir klinik hatadır.

**Soru 2 (ID: 15bccae7-3958-4eb4-a598-25dd88d298fe)**
Soru Kökü: AHA'nın profilaksi yönergeleri ışığında, bakteriyemi yaratan dental işlemler öncesinde koruyucu antibiyotik rejimi uygulanması gereken **riskli hasta gruplarından biri olmayan** seçenek aşağıdakilerden hangisidir?
Doğru Şık (C): Daha önce tıkalı damarı için koroner arter bypass grefti (CABG) ameliyatı geçiren hastalar
Açıklama: CABG (Koroner Arter Bypass Grefti) operasyonu kalbin kas ve damar yapısıyla ilgili olup intrakardiyak (kapakçık) bir protez implantasyonu içermez. Bu sebeple AHA yönergelerine göre by-pass operasyonu geçirmiş hastalarda, kardiyoloğun özel bir uyarısı veya ikincil bir defekt bulunmadığı sürece dental işlemler öncesi infektif endokardit profilaksisi uygulanmasına gerek yoktur.

---

### ÇİFT 60 (Benzerlik: 0.76)

**Soru 1 (ID: 9743e6ad-ea11-4ff9-b047-70d7c7f59571)**
Soru Kökü: Geçirilmiş kapak replasmanı nedeniyle İnfektif Endokardit gelişimi açısından yüksek risk grubunda bulunan hastaya sistemik antibiyotik profilaksisi uygulanmıştır. Kılavuzlara göre, bu hastada periodontal sondlama dahi yapılmadan hemen önce rutin ağız içi bakteri yükünü minimize etmek amacıyla tavsiye edilen lokal koruyucu uygulama aşağıdakilerden hangisidir?
Doğru Şık (E): Tüm mukozal yüzeylerdeki bakteri sayısını düşürmek için işlem öncesi klorheksidin ile gargara yaptırılması
Açıklama: İE profilaksisi sadece sistemik antibiyotik kullanımını içermez. Bakteriyemi potansiyelini fiziksel olarak da düşürmek hedeflenir. Bu nedenle sondlama dahil tüm kanamalı ve invaziv işlemlerden hemen önce hastaya %0.12 veya %0.2'lik klorheksidin gargara yaptırılarak oral mukozadaki ve plaktaki başlangıç bakteri yükü azaltılır. Bu basit adım, dolaşıma katılacak mikroorganizma miktarını dramatik olarak düşürür.

**Soru 2 (ID: 121cba99-848f-4f28-8b08-504314b34b26)**
Soru Kökü: Hem penisilin alerjisi olan hem de geçirdiği bir oral operasyon nedeniyle ağızdan hiçbir ilaç yutamayacak durumda olan yüksek riskli bir kardiyak hastada, invaziv periodontal işlemden önce uygulanması gereken en güvenli profilaktik protokol aşağıdakilerden hangisidir?
Doğru Şık (B): 1 g IM veya IV Sefazolin veya Seftriakson uygulanması
Açıklama: Hasta oral ilaç alamıyor ve penisilin alerjisi varsa (ve anafilaksi tipinde değilse sefalosporinler kullanılabilir) AHA kılavuzuna göre standart yaklaşım 1 g Sefazolin veya Seftriakson'un IM veya IV olarak uygulanmasıdır. Ampisilin, penisilin alerjisi olduğu için ölümcül anaflaksiye yol açabilir; sadece lokal Klorheksidin ile bakteriyemi engellenemez.

---

### ÇİFT 61 (Benzerlik: 0.76)

**Soru 1 (ID: 4bdf8020-5b79-476d-a664-baf73a8e5174)**
Soru Kökü: Kırk beş yaşında kadın hastanın üst anterior bölgesine yapılan porselen kuronların marjinleri biyolojik genişliği ihlal etmiştir. Hastanın ince dişeti biyotipine ve derin dantela formuna sahip olduğu gözlemlenmiştir. Bu biyolojik alan ihlali sonucunda dokuların en olası fizyolojik yanıtı ne olacaktır?
Doğru Şık (B): Yeterli mesafeyi sağlamak için kemik rezorbe olur ve dişeti çekilmesi meydana gelir.
Açıklama: İnce kemik plakaları ve ince dişeti biyotipine (derin dantela formu) sahip hastalarda, biyolojik genişliğin ihlal edilmesi durumunda doku kendi fizyolojik alanını yeniden oluşturmak için marjinal kemiği rezorbe eder. Kemiğin apikale çekilmesini takiben ince biyotipli dişeti de rezorpsiyonu takip eder ve dişeti çekilmesi görülür. Kalın biyotipte ise rezorpsiyon yerine kronik enflamasyon daha sıktır.

**Soru 2 (ID: 3586b0f2-5fcb-45bb-b523-60c3be9e8589)**
Soru Kökü: Cerrahi kron boyu uzatma işlemleri sırasında hekimin dişeti biyotipine ve kemik anatomisine göre dokunun fizyolojik yanıtını öngörmesi zorunludur. Anatomik olarak ince kemik plakalarına sahip ve **derin dantela (scalloped) formunda** dişeti olan bir hastada, restorasyon biyolojik genişliği ihlal ederse görülecek tepki aşağıdakilerden hangisidir?
Doğru Şık (E): Kemik dokusu rezorbe olarak biyolojik boşluk açmaya çalışır ve eşzamanlı dişeti çekilmesi yaşanır
Açıklama: Biyolojik genişliğin ihlaline verilen doku tepkisi marjinal anatomiyle birebir ilişkilidir. İnce kemik plakası ve derin dantela (scalloped) tipi mimariye sahip olan dişetlerinde kemik beslenmesi kırılgandır. Restorasyon marjininin yarattığı inflamatuar yük kemiği eriterek (rezorpsiyon) marjini apikale taşır. Kemiğin desteğini kaybeden ince dişeti de onu takip ederek belirgin bir dişeti çekilmesine (resesyon) neden olur.

---

### ÇİFT 62 (Benzerlik: 0.76)

**Soru 1 (ID: f1e0a3a8-9ada-41ee-84da-08ca51497d64)**
Soru Kökü: Elli yaşında Tip 2 Diabetes Mellitus tanılı erkek hasta kliniğe yaygın kemik kaybı, derin cepler ve mobilite şikayeti ile başvuruyor. Son 3 aylık glisemik kontrolü yansıtan HbA1c düzeyi %8.5 olarak ölçülmüştür. Bu hastaya uygulanacak kapsamlı mekanik periodontal tedavi ve antibiyoterapi sürecinin diyabet seyri üzerindeki en olası sistemik etkisi aşağıdakilerden hangisi olacaktır?
Doğru Şık (A): Sistemik enflamasyon yükünün azalmasıyla glisemik kontrol iyileşir ve insülin gereksinimi azalır.
Açıklama: Şiddetli periodontitis, konak dokusunda kronik sistemik enflamatuar bir yük yaratarak dokularda insülin direncini artırır. Araştırmalar, mekanik periodontal debridman ve gerekirse antibiyoterapi (örn. doksisiklin) ile periodontal sağlığın geri kazanılmasının, HbA1c seviyelerinde anlamlı düşüşler sağladığını ve sistemik glisemik kontrolü doğrudan iyileştirdiğini net olarak ortaya koymaktadır.

**Soru 2 (ID: 6c179197-7b3a-4a97-b19c-b9d3bab49bf5)**
Soru Kökü: Tip 2 Diabetes Mellitus ve şiddetli periodontitis hastalarında, cerrahi ve mekanik periodontal tedavi sonrasında lokal inflamasyonun azaltılması sistemik glisemik durumu doğrudan etkilemektedir. Başarılı bir periodontal tedavi sonucunda hastanın glisemik parametrelerinde beklenen en net değişim aşağıdakilerden hangisidir?
Doğru Şık (D): HbA1c seviyelerinde azalma ve insülin gereksiniminde düşüş
Açıklama: Diabet ve periodontitis arasındaki iki yönlü ilişki gereği, şiddetli periodontal doku yıkımı lokal alandan dolaşıma yüksek miktarda proinflamatuar sitokin (özellikle TNF-alfa) salınmasına sebep olarak dokularda sistemik insülin direncini artırır. Periodontal cep eliminasyonu ve enfeksiyonun kontrolü bu sitokin yükünü düşüreceğinden, hücrelerin insülin duyarlılığı artar, hastanın HbA1c değeri düşer ve günlük insülin gereksinimi azalır.

---

### ÇİFT 63 (Benzerlik: 0.75)

**Soru 1 (ID: a1c19cd3-7855-47a9-8706-ae9c0b02a310)**
Soru Kökü: Aort kapak replasmanı öyküsü olan 55 yaşındaki kadın hastaya, jeneralize kök yüzeyi düzleştirilmesi işlemi planlanmıştır. Anamnezinde penisiline karşı anafilaksi hikayesi bulunan bu hasta için AHA'nın önerdiği **en ideal** oral profilaktik antibiyotik rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): İşlemden 30 ila 60 dakika önce 500 mg Azitromisin oral
Açıklama: AHA profilaksi kurallarına göre penisilin/amoksisilin alerjisi olan ve oral yolla ilaç alabilen yetişkin hastalarda makrolid grubu olan Azitromisin veya Klaritromisin 500 mg (işlemden 30-60 dk önce tek doz) birinci tercih alternatiflerdendir. Hastada alerji hikayesi olması Sefaleksin (çapraz alerji riski) ve Amoksisilin kullanımını elediği için azitromisin spesifik ve güvenli bir rejimdir.

**Soru 2 (ID: ba0c4ba7-0d13-4261-9904-ecbfcd750c02)**
Soru Kökü: İnfektif Endokardit (İE) profilaksisi gereken, oral ilaç kullanamayan ancak penisilin grubuna alerjisi olmadığı bilinen yetişkin bir hastada, Ampisilin yerine alternatif olarak kullanılabilecek sefalosporin grubu ajan ve doğru dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 1 g IM veya IV Sefazolin veya Seftriakson
Açıklama: Oral ilaç alamayan yetişkin hastalarda Ampisilin (2g IM/IV) kullanılabileceği gibi alternatif olarak 1 g IM veya IV Sefazolin veya Seftriakson da tercih edilebilir. Seçenek A ve B oral formdur (hasta oral alamıyor), Azitromisin ve Doksisiklin bu spesifik endikasyonda (alerjisiz, oral alamayan) primer tercih değildir.

---

### ÇİFT 64 (Benzerlik: 0.75)

**Soru 1 (ID: 9ee40be8-0cc6-49a0-b2ba-6d08a120aeee)**
Soru Kökü: Penisilin alerjisi olan ve oral yolla ilaç kullanabilen erişkin bir hastada, mukozayı perfore edecek bir periodontal cerrahi işlemden 30-60 dakika önce uygulanması gereken İE profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin 500 mg oral
Açıklama: Hasta oral ilaç alabiliyorsa ve amoksisilin/penisilin alerjisi varsa alternatif oral rejimler tercih edilir: Sefaleksin (2 gr), Azitromisin veya Klaritromisin (500 mg) ya da Doksisiklin (100 mg). Amoksisilin ilk seçenektir ancak alerji durumunda kontrendikedir. Sefazolin ve Ampisilin parenteral (IM/IV) yolla, oral ilaç alamayan hastalarda kullanılır.

**Soru 2 (ID: ba0c4ba7-0d13-4261-9904-ecbfcd750c02)**
Soru Kökü: İnfektif Endokardit (İE) profilaksisi gereken, oral ilaç kullanamayan ancak penisilin grubuna alerjisi olmadığı bilinen yetişkin bir hastada, Ampisilin yerine alternatif olarak kullanılabilecek sefalosporin grubu ajan ve doğru dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 1 g IM veya IV Sefazolin veya Seftriakson
Açıklama: Oral ilaç alamayan yetişkin hastalarda Ampisilin (2g IM/IV) kullanılabileceği gibi alternatif olarak 1 g IM veya IV Sefazolin veya Seftriakson da tercih edilebilir. Seçenek A ve B oral formdur (hasta oral alamıyor), Azitromisin ve Doksisiklin bu spesifik endikasyonda (alerjisiz, oral alamayan) primer tercih değildir.

---

### ÇİFT 65 (Benzerlik: 0.75)

**Soru 1 (ID: 12bf8272-29f3-4d6b-bd03-b04d7198b8d8)**
Soru Kökü: Endodontik bir lezyonun kuronale doğru, kronik bir periodontal lezyonun ise apikale doğru ilerleyerek birbiriyle birleştiği gerçek kombine (perio-endo) lezyonlu bir dişin ağızda tutulmasına karar verilmiştir. Bu dişin tedavisinde izlenmesi gereken doğru sıralama aşağıdakilerden hangisidir?
Doğru Şık (D): Periodontal cebin giderilmesinden önce endodontik tedavi yapılmalıdır.
Açıklama: Kombine lezyonlarda öncelik daima kök kanal tedavisindedir, çünkü endodontik sorun var olduğu sürece periodontal yara iyileşmesi gerçekleşemez. Başarılı bir endodontik tedaviden sonra radyografik ve klinik iyileşme gözlenir, ardından kalan periodontal cep rezidüel defekt olarak değerlendirilir ve mekanik/cerrahi periodontal işlemlerle tedavi edilir.

**Soru 2 (ID: f405995a-b51a-4156-a862-9ea0407d2efc)**
Soru Kökü: Gerçek kombine (perio-endo) lezyona sahip bir dişin klinik tedavisinde uzun dönem prognozu belirleyen ve dişin ağızda kalıp kalmayacağına karar verdiren en kritik faktör aşağıdakilerden hangisidir?
Doğru Şık (E): Periodontitis sonucu gelişen ataşman kaybının büyüklüğü ve tipi
Açıklama: Kombine lezyonlarda endodontik enfeksiyonun tedavisi genellikle yüksek öngörülebilirliğe sahiptir ve başarı oranı yüksektir. Ancak periodontitis sonucu oluşan çok duvarlı kemik defektleri ve horizontal ataşman kaybının rejenerasyonu çok daha zordur. Bu nedenle kombine lezyonlu bir dişin klinik kaderini endodontik patoloji değil, geride kalan periodontal ataşman kaybının şiddeti ve tedavi edilebilirliği belirler.

---

### ÇİFT 66 (Benzerlik: 0.75)

**Soru 1 (ID: 11789274-1f57-49ff-bdbf-f771fe9d32df)**
Soru Kökü: Kron bölgesinde geniş madde kaybı bulunan, elektrikli pulpa testine negatif (nonvital) yanıt veren bir dişte; radyografik incelemede periapikal bölgede başlayan ve kök yüzeyi boyunca kuronal yöne (servikale) doğru ilerleyen bir kemik yıkım profili tespit edilmiştir. İlgili dişteki periodontal sondlamada apeks yönünde dar ve derin bir defekt saptanmıştır. Bu klinik tablo aşağıdaki lezyon sınıflandırmalarından hangisiyle **en çok** uyumludur?
Doğru Şık (A): Primer pulpal lezyon
Açıklama: Primer pulpal lezyonda asıl sorun nonvital pulpadır. Periapikalde başlayan radyolusent enfeksiyon, basınçla kendine yol arayarak kök yüzeyi (periodontal ligament) boyunca servikale doğru yukarı yönde drene olur ve dar bir cep yaratır. Yıkımın yönünün apikalden koronale olması primer endodontik kaynağın tipik belirtecidir.

**Soru 2 (ID: 83a43dd8-90fe-48cb-ba10-a75feef51364)**
Soru Kökü: Koronal bütünlüğü sağlam (intact) olan ve pulpa vitalite testlerine pozitif (vital) yanıt veren bir molar dişte, radyografik olarak servikal krestal bölgeden başlayıp apekse doğru inen geniş tabanlı, yaygın alveolar kemik harabiyeti görülmektedir. Hastanın temel şikayeti hafif kanama ve rahatsızlık hissidir. Bu tablonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Primer periodontal lezyon
Açıklama: Koronal yapının sağlam olması ve pulpanın vital olması endodontik orijini dışlar. Yıkımın marjinal kısımdan (servikalden) apekse doğru geniş yüzeyli şekilde inmesi ve hastanın klinik semptomlarının (hafif rahatsızlık) primer periodontal hastalık profiliyle birebir uyuşması bu lezyonun kesin olarak 'primer periodontal lezyon' olduğunu gösterir.

---

### ÇİFT 67 (Benzerlik: 0.75)

**Soru 1 (ID: de163498-b33a-4def-ba5a-408531d9cc1a)**
Soru Kökü: Suprakrestal yapışık dokular olarak da bilinen biyolojik genişlik, fizyolojik boyutları nispeten sabit olan dokulardan oluşur. Biyolojik genişliği oluşturan periodontal dokular aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (A): Birleşim epiteli ve bağ dokusu ataçmanı
Açıklama: Biyolojik genişlik (suprakrestal yapışık dokular), 0.97 mm birleşim epiteli ve 1.07 mm bağ dokusu ataçmanından meydana gelerek ortalama 2.04 mm'lik bir alan kaplar. Sulkus derinliği bu anatomik kompleksin üzerinde yer alır ve fizyolojik genişliğin bir parçası olarak değerlendirilmez. Restorasyon marjinlerinin bu bariyeri ihlal etmesi, lokalize yıkım süreçlerini başlatır.

**Soru 2 (ID: acf17622-4522-4af6-8bb2-f1d22bcfc6f5)**
Soru Kökü: Sabit restorasyonlar sırasında korunması kritik öneme sahip olan suprakrestal yapışık dokular (biyolojik genişlik), aşağıdaki hangi iki periodontal yapının birleşiminden oluşur?
Doğru Şık (A): Birleşim epiteli ve bağ dokusu ataçmanı
Açıklama: Biyolojik genişliği oluşturan suprakrestal yapışık dokular, fizyolojik boyutları nispeten sabit olan birleşim epiteli (0.97 mm) ve bağ dokusu ataçmanı (1.07 mm) tarafından oluşturulur. Sulkus epiteli veya periodontal ligament bu biyolojik mühür bölgesinin tanımlanmış yapısına doğrudan dahil edilmez. Bu boyutun ihlali kalıcı periodontal enflamasyon veya kemik yıkımı ile sonuçlanır.

---

### ÇİFT 68 (Benzerlik: 0.75)

**Soru 1 (ID: beee8b11-bb70-44fc-926b-1034b3511f91)**
Soru Kökü: Ortodontik bozuklukların periodonsiyum üzerindeki yıkıcı etkileri değerlendirildiğinde, malokluzyonun sadece plak retansiyonu yaratmakla kalmayıp aynı zamanda periodontal yıkımı hızlandıran ikinci ana mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Anormal okluzal ilişkiler ve prematür kontaktlar yaratarak okluzal travmaya neden olması
Açıklama: Malokluzyonun periodontal hastalığa yol açtığı iki ana mekanizma vardır: Birincisi plak retansiyonunu artırması, ikincisi ise anormal okluzal ilişkiler (prematür kontaktlar) oluşturarak okluzal travma ve bruksizme zemin hazırlamasıdır. Okluzal travma, plak varlığında periodontal doku yıkımını ve ataşman kaybını belirgin şekilde hızlandırır. Diğer şıklar malokluzyonun fizyopatolojik sonuçları arasında yer almaz.

**Soru 2 (ID: c4e9c7ab-71f6-4749-ad72-2750dbdb23ac)**
Soru Kökü: Malokluzyon ve çapraşıklık durumlarının periodonsiyum üzerinde yarattığı tahribatı açıklayan mekanizmalar arasında aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (A): Sistemik proinflamatuar sitokin fırtınası yaratarak immün yanıtı baskılaması
Açıklama: Malokluzyon; plak retansiyonu, food impaction, temizlik güçlüğü ve okluzal travma gibi lokal faktörlerle periodontal yıkıma katkıda bulunur. Çapraşıklık durumunun kendisi sistemik bir sitokin fırtınası veya sistemik immünsüpresyon yaratmaz; bu durum ancak şiddetli sistemik hastalıklar (diyabet, HIV vb.) ile ilişkilidir.

---

### ÇİFT 69 (Benzerlik: 0.75)

**Soru 1 (ID: 1e42dad8-9780-4299-8880-6c4b5419fd77)**
Soru Kökü: Kırık bir kron restorasyonuna sahip olan dişte radyografik olarak periapikal radyolusensi izlenmektedir. Klinik muayenede diş canlılık testlerine negatif yanıt vermekte, periodontal prob ile yapılan incelemede sadece tek bir yüzeyden apekse kadar inen kısıtlı bir sondlama tespiti yapılmaktadır. Bu bulgular ışığında en olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Primer pulpal lezyon
Açıklama: Primer pulpal lezyonlarda pulpa nonvitaldir ve enfeksiyon apeksten sulkusa doğru bir sinüs yolu açarak direne olabilir. Bu drenaj yolu klinik olarak geniş bir ataşman kaybı şeklinde değil, sadece fistül hattı boyunca apeksine inen çok dar ve kısıtlı bir sondlama profili olarak tespit edilir. Geniş generalize kemik kaybının olmaması durumu primer periodontal patolojilerden ayırır.

**Soru 2 (ID: 83a43dd8-90fe-48cb-ba10-a75feef51364)**
Soru Kökü: Koronal bütünlüğü sağlam (intact) olan ve pulpa vitalite testlerine pozitif (vital) yanıt veren bir molar dişte, radyografik olarak servikal krestal bölgeden başlayıp apekse doğru inen geniş tabanlı, yaygın alveolar kemik harabiyeti görülmektedir. Hastanın temel şikayeti hafif kanama ve rahatsızlık hissidir. Bu tablonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Primer periodontal lezyon
Açıklama: Koronal yapının sağlam olması ve pulpanın vital olması endodontik orijini dışlar. Yıkımın marjinal kısımdan (servikalden) apekse doğru geniş yüzeyli şekilde inmesi ve hastanın klinik semptomlarının (hafif rahatsızlık) primer periodontal hastalık profiliyle birebir uyuşması bu lezyonun kesin olarak 'primer periodontal lezyon' olduğunu gösterir.

---

### ÇİFT 70 (Benzerlik: 0.75)

**Soru 1 (ID: 0e504b08-5669-4e31-a314-8e4aa513ee51)**
Soru Kökü: AHA (Amerikan Kalp Birliği) kılavuzlarına göre, infektif endokardit (İE) açısından sadece yüksek risk taşıyan hastalara profilaksi önerilmektedir. Aşağıdaki durumlardan hangisi profilaksi gerektiren yüksek risk gruplarından biridir?
Doğru Şık (A): Cerrahi onarım uygulanmamış siyanotik doğumsal kalp hastalığı
Açıklama: AHA kriterlerine göre yüksek risk grubunda yer alan ve profilaksi gerektirenler: Protez kapaklılar, İE öyküsü olanlar, palyatif şantı bulunan onarılmamış siyanotik kalp hastaları ve onarımın ilk 6 ayındaki vakalardır. Bypass hastalarında veya kapak hasarı bırakmayan romatizmal ateşte kardiyolog özel bir uyarı yapmadıkça profilaksi gerekmez.

**Soru 2 (ID: 6ca5807f-ba5a-4bc9-a779-972c2e90b3bf)**
Soru Kökü: İnfektif Endokardit (İE) için yüksek risk grubunda olan bir hastada uygulanacak dental işlemin tipi, antibiyotik profilaksisi gerekip gerekmediğini belirler. Amerikan Kalp Birliği (AHA) rehberine göre aşağıdakilerden hangisi bakteriyemi riski yüksek olduğu için profilaksi gerektiren (yüksek riskli) periodontal girişimlerden **değildir**?
Doğru Şık (B): Geçirilmiş flep cerrahisi sonrası rutin sütur alınması
Açıklama: AHA rehberlerine göre; sondlama, implant cerrahisi, subgingival bant yerleşimi ve kök yüzeyi düzleştirilmesi gibi dişeti veya periapikal dokunun manipüle edildiği işlemler yüksek risk grubundadır ve mutlak profilaksi gerektirir. Sütur alınması, anestezi enjeksiyonu (enfekte olmayan dokuya), ve radyograf çekimi ise düşük riskli işlemler kategorisinde olup profilaksi zorunluluğu barındırmaz.

---

### ÇİFT 71 (Benzerlik: 0.74)

**Soru 1 (ID: 3f441704-59fd-49ab-a509-5450af8c809c)**
Soru Kökü: Ağızda aniden ortaya çıkan ve lokalize ödem yapan apselerin tanısında radyografik iz sürücüler (gutta-percha) kullanılır. Klinik muayenesinde şiddetli perküsyon hassasiyeti ve gece ağrısı olmayan, sadece diş eti üzerinde lokalize bir şişlik hisseden hastanın fistülünden gutta-percha gönderildiğinde aşağıdakilerden hangisinin gerçekleşmesi **en güçlü** şekilde periodontal apseyi işaret eder?
Doğru Şık (C): Gutta-perchanın periodontal ceple bağlantı kurarak cep sınırları (kök yan yüzeyi) içerisinde kalması
Açıklama: Periodontal apsede drenaj yolu mevcut bir periodontal cebe açılır. Bu nedenle fistülden yerleştirilen gutta-percha apekse (kök ucuna) kadar inmez; kökün yan yüzeyindeki lateral cep defektinde durur. Endodontik apsede ise gutta-percha enfeksiyonun kökeni olan foramen apikale noktasına kadar kesintisiz ilerler.

**Soru 2 (ID: f6587212-e67b-4649-a842-7cd94cc3e51d)**
Soru Kökü: Kronik bir periapikal lezyonun basınçla kök yüzeyi boyunca direne olarak diş eti sulkusundan ağız ortamına açıldığı bir 'endodontik fistül' vakasında, klinik sondlama yapıldığında karşılaşılacak **en tipik** anatomik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Sulkustan girildiğinde sadece fistül yolu boyunca ilerleyen dar ve kısıtlı bir sondlama (dar kanal)
Açıklama: Endodontik kaynaklı fistül yolunun diş eti sulkusundan direne olduğu durumlarda, klasik periodontal hastalığın aksine geniş bir çevresel cep oluşmaz. Sond sulkusa yerleştirildiğinde sanki dar bir tünelden (fistül kanalından) apikale kadar düşer; komşu yüzeylerde ataşman seviyesi tamamen normal kalır.

---

### ÇİFT 72 (Benzerlik: 0.74)

**Soru 1 (ID: e2360bc1-dd8f-4b01-883a-1ca7db7b4c71)**
Soru Kökü: Apikal apse kaynaklı bir fistül yolunun ilerleyerek halihazırda var olan kronik bir periodontal ceple birleşmesi sonucu "gerçek kombine lezyon" tablosu ortaya çıkmıştır. Bu dişi ağızda tutmak amacıyla planlanacak tedavinin stratejik sıralaması aşağıdakilerden hangisi olmalıdır?
Doğru Şık (B): Önce endodontik tedavi yapılır, başarılı endodontik tedaviden sonra periodontal cebin tedavisi uygulanır
Açıklama: Kombine endo-perio lezyonlarda öncelikli tedavi her zaman endodontik yaklaşımdır çünkü endodontik sorun var olduğu sürece periodontal defektin tam iyileşmesi mümkün değildir. Başarılı bir endodontik tedavinin ardından radyografik ve klinik iyileşme gözlemlenir, geriye kalan kalıcı cep defekti ise daha sonra periodontal tedavi yaklaşımlarıyla çözülür. Periodontal tedavi önce yapılırsa iyileşme dokusu enfekte apikal sızıntı sebebiyle hızla tekrar yıkılır.

**Soru 2 (ID: f405995a-b51a-4156-a862-9ea0407d2efc)**
Soru Kökü: Gerçek kombine (perio-endo) lezyona sahip bir dişin klinik tedavisinde uzun dönem prognozu belirleyen ve dişin ağızda kalıp kalmayacağına karar verdiren en kritik faktör aşağıdakilerden hangisidir?
Doğru Şık (E): Periodontitis sonucu gelişen ataşman kaybının büyüklüğü ve tipi
Açıklama: Kombine lezyonlarda endodontik enfeksiyonun tedavisi genellikle yüksek öngörülebilirliğe sahiptir ve başarı oranı yüksektir. Ancak periodontitis sonucu oluşan çok duvarlı kemik defektleri ve horizontal ataşman kaybının rejenerasyonu çok daha zordur. Bu nedenle kombine lezyonlu bir dişin klinik kaderini endodontik patoloji değil, geride kalan periodontal ataşman kaybının şiddeti ve tedavi edilebilirliği belirler.

---

### ÇİFT 73 (Benzerlik: 0.74)

**Soru 1 (ID: c4e1b73a-decd-485c-b5f6-60946011c6d7)**
Soru Kökü: Gelişmiş karaciğer sirozu olan hastalarda, majör bir periodontal flep cerrahisi planlanmadan önce konsültasyon istenmesi ve protrombin zamanının ölçülmesi zorunludur. Bu gruptaki hastalarda periodontal müdahale sonrasında görülebilecek en ciddi riskin temel fizyolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Pıhtılaşma faktörlerinin üretim eksikliğine bağlı sekonder kanama eğilimi
Açıklama: Karaciğer, protrombin başta olmak üzere koagülasyon kaskadında görev alan K vitaminine bağımlı pıhtılaşma faktörlerinin (II, VII, IX, X) ana sentez merkezidir. Karaciğer yetmezliği veya siroz durumlarında bu faktörlerin üretimi düşer, bu da cerrahi sonrası kontrol edilemeyen sekonder kanama riskine yol açar. Bu mekanizma nedeniyle pre-operatif protrombin zamanı tayini kritik önem taşır.

**Soru 2 (ID: a91bfb43-6aa2-45d8-bf7e-736c6c2076e8)**
Soru Kökü: İleri evre siroz tanısı bulunan bir hastanın basit bir diş çekimi sonrasında uzun süreli ve kontrol altına alınamayan bir kanama yaşadığı rapor edilmiştir. Bu hastalarda sekonder kanama eğiliminin primer fizyopatolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Pıhtılaşma faktörlerinin sentezinin bozulması
Açıklama: Karaciğer, kan pıhtılaşma şelalesinde rol alan faktörlerin (Faktör II, VII, IX, X vb.) başlıca üretim merkezidir. Karaciğer yetmezliği veya siroz durumunda, bu koagülasyon faktörlerinin sentezi bozulduğu için pıhtılaşma mekanizması sekteye uğrar ve diş hekimliğindeki cerrahi işlemler sonrası uzamış kanamalara yatkınlık oluşur.

---

### ÇİFT 74 (Benzerlik: 0.74)

**Soru 1 (ID: 45a0f46b-11cb-489b-bf2e-e329b4886418)**
Soru Kökü: Akut apikal apsenin periodonsiyum içindeki yayılım patterni incelendiğinde, apsenin kemiği perfore ederek oluşturduğu fistül yolunun anatomik olarak en sık izlediği rota aşağıdakilerden hangisidir?
Doğru Şık (D): Dişin apeksinden lateral olarak uzanarak bukkal kortikal plağı geçip bukkale yönelmesi
Açıklama: Endodontik kökenli akut apikal apselerde fistül yolu genellikle dişin apeksinden bukkale doğru uzanır, çünkü bukkal kemik korteksi palatinal veya lingual kemiğe göre çok daha incedir ve direncin en az olduğu yolu oluşturur. Palatinal ve lingual fistülizasyonlar anatomik kalınlık nedeniyle bukkal çıkışa kıyasla çok daha nadir görülür.

**Soru 2 (ID: f6587212-e67b-4649-a842-7cd94cc3e51d)**
Soru Kökü: Kronik bir periapikal lezyonun basınçla kök yüzeyi boyunca direne olarak diş eti sulkusundan ağız ortamına açıldığı bir 'endodontik fistül' vakasında, klinik sondlama yapıldığında karşılaşılacak **en tipik** anatomik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Sulkustan girildiğinde sadece fistül yolu boyunca ilerleyen dar ve kısıtlı bir sondlama (dar kanal)
Açıklama: Endodontik kaynaklı fistül yolunun diş eti sulkusundan direne olduğu durumlarda, klasik periodontal hastalığın aksine geniş bir çevresel cep oluşmaz. Sond sulkusa yerleştirildiğinde sanki dar bir tünelden (fistül kanalından) apikale kadar düşer; komşu yüzeylerde ataşman seviyesi tamamen normal kalır.

---

### ÇİFT 75 (Benzerlik: 0.74)

**Soru 1 (ID: a97daa81-fde5-4bb8-812e-0bba25732fde)**
Soru Kökü: Ortodontik tedavi sırasında dişlerin bukkolingual yönde hareket ettirilmesi planlanan bir hastada, profilaktik olarak dişeti miktarının artırılmasını gerektiren ve tedavi için bir kontrendikasyon oluşturan risk faktörü aşağıdakilerden hangisidir?
Doğru Şık (E): Yetersiz yapışık dişeti varlığı
Açıklama: Yetersiz yapışık dişeti (özellikle bukkal dişeti ince ise) ortodontik bukkolingual diş hareketi sırasında ciddi bir risk oluşturur ve dişeti ile kemikte dehiscence (açılma) tablosuna yol açabilir. Bu nedenle bu hareket öncesi profilaktik dişeti greftleriyle doku miktarının artırılması gerekebilir; enflamasyonla birlikte en temel kontrendikasyonlardan biridir.

**Soru 2 (ID: 4a4c6da9-f262-4453-8dd6-5670afac6389)**
Soru Kökü: Ortodontik diş hareketi uygulanacak hastalarda, periodontal sağlığın idamesi ve tedavi planlaması büyük önem taşır. Aşağıdakilerden hangisi bir hastada planlanan ortodontik tedavi için kontrendikasyon **değildir**?
Doğru Şık (D): Hastanın kronik periodontitis geçmişine sahip erişkin yaşta olması
Açıklama: Yaş ve daha önceden geçirilmiş periodontal hastalık varlığı tek başına ortodontik tedavi için bir kontrendikasyon değildir. İltihap tam olarak kontrol altına alındığı sürece, erişkin hastalarda ortodontik tedavi güvenle ve başarıyla uygulanabilir. Ancak aktif inflamasyon, yetersiz yapışık dişeti kalınlığı ve kontrolsüz hastalık aktivitesi mutlak kontrendikasyonlar arasında yer alır.

---

### ÇİFT 76 (Benzerlik: 0.74)

**Soru 1 (ID: 83a43dd8-90fe-48cb-ba10-a75feef51364)**
Soru Kökü: Koronal bütünlüğü sağlam (intact) olan ve pulpa vitalite testlerine pozitif (vital) yanıt veren bir molar dişte, radyografik olarak servikal krestal bölgeden başlayıp apekse doğru inen geniş tabanlı, yaygın alveolar kemik harabiyeti görülmektedir. Hastanın temel şikayeti hafif kanama ve rahatsızlık hissidir. Bu tablonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Primer periodontal lezyon
Açıklama: Koronal yapının sağlam olması ve pulpanın vital olması endodontik orijini dışlar. Yıkımın marjinal kısımdan (servikalden) apekse doğru geniş yüzeyli şekilde inmesi ve hastanın klinik semptomlarının (hafif rahatsızlık) primer periodontal hastalık profiliyle birebir uyuşması bu lezyonun kesin olarak 'primer periodontal lezyon' olduğunu gösterir.

**Soru 2 (ID: b7a5893c-35bb-49b7-9472-5b7ec79e58c6)**
Soru Kökü: 45 yaşında kadın hasta, alt çene sağ bölgesinde dişlerinde sallanma şikayetiyle başvuruyor. Alınan radyografta marjinal kret bölgesinde geniş başlayıp apekse doğru giderek daralan V şeklinde bir radyolusensi saptanıyor. Diş pulpa testlerine vital (canlı) yanıt veriyor. Bu klinik ve radyografik tabloya neden olan en olası durum aşağıdakilerden hangisidir?
Doğru Şık (C): Primer periodontal lezyon
Açıklama: Primer periodontal lezyonlarda yıkım dişeti kenarından apekse doğru ilerlediği için radyolusent kemik kaybı görüntüsü marjinal bölgede en geniştir ve apekse doğru daralır. Dişin vital olması ve marjinalden apekse doğru daralan kemik kaybı formu, problemin kökeninin endodontik olmadığını ve primer periodontal yıkım olduğunu kesinleştirir. Endodontik lezyonlarda ise yıkım apeksten başlayıp koronale ilerlediği için görüntü bunun tam tersidir.

---

### ÇİFT 77 (Benzerlik: 0.74)

**Soru 1 (ID: d0f156e0-3e71-44e2-81d9-8bc28bbd4225)**
Soru Kökü: Doğumsal siyanotik kalp hastalığı bulunan ve Amerikan Kalp Birliği (AHA) kriterlerine göre enfektif endokardit gelişimi açısından yüksek risk kategorisinde yer alan 10 yaşındaki (30 kg) bir çocuk hastaya sondlama ve başlangıç periodontal tedavisi uygulanacaktır. Hastanın penisilin alerjisi bulunmadığına ve ilaçları oral yolla alabildiğine göre uygulanması gereken **doğru profilaksi rejimi ve dozu** aşağıdakilerden hangisidir?
Doğru Şık (B): İşlemden 30-60 dakika önce 50 mg/kg (toplam 1500 mg) oral Amoksisilin
Açıklama: Penisilin alerjisi olmayan ve oral ilaç kullanabilen riskli çocuk hastalarda AHA standart profilaksi protokolü; işlemden 30 ila 60 dakika önce oral yolla 50 mg/kg Amoksisilin uygulamasıdır. Yetişkin dozu ise aynı zamanlamayla tek doz 2 gram oral Amoksisilin'dir.

**Soru 2 (ID: 9fd06c6e-3dfb-457c-a1bc-e9deb1f019d7)**
Soru Kökü: Daha önce İnfektif Endokardit (İE) atağı geçirmiş olan 38 yaşındaki kadın hastaya diş çekimi ve apse drenajı yapılacaktır. Anamnezinde penisiline karşı anafilaksi öyküsü bulunan ve oral ilaç kullanabilen bu hastaya profilaktik olarak hangi antibiyotik rejimi reçete edilmelidir?
Doğru Şık (A): İşlemden 30-60 dakika önce 100 mg oral Doksisiklin
Açıklama: Penisilin alerjisi olan ve oral ilaç alabilen yetişkin hastalarda Sefaleksin (2g), Azitromisin/Klaritromisin (500mg) veya Doksisiklin (100mg) kullanılabilir. Sefaleksin anafilaksi durumlarında çapraz reaksiyon riski nedeniyle tercih edilmeyebilir, Doksisiklin 100 mg oral alımı güvenli ve etkin bir alternatiftir. Amoksisilin ve Ampisilin penisilin alerjisi nedeniyle kesin kontrendikedir.

---

### ÇİFT 78 (Benzerlik: 0.74)

**Soru 1 (ID: a1c19cd3-7855-47a9-8706-ae9c0b02a310)**
Soru Kökü: Aort kapak replasmanı öyküsü olan 55 yaşındaki kadın hastaya, jeneralize kök yüzeyi düzleştirilmesi işlemi planlanmıştır. Anamnezinde penisiline karşı anafilaksi hikayesi bulunan bu hasta için AHA'nın önerdiği **en ideal** oral profilaktik antibiyotik rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): İşlemden 30 ila 60 dakika önce 500 mg Azitromisin oral
Açıklama: AHA profilaksi kurallarına göre penisilin/amoksisilin alerjisi olan ve oral yolla ilaç alabilen yetişkin hastalarda makrolid grubu olan Azitromisin veya Klaritromisin 500 mg (işlemden 30-60 dk önce tek doz) birinci tercih alternatiflerdendir. Hastada alerji hikayesi olması Sefaleksin (çapraz alerji riski) ve Amoksisilin kullanımını elediği için azitromisin spesifik ve güvenli bir rejimdir.

**Soru 2 (ID: 9ee40be8-0cc6-49a0-b2ba-6d08a120aeee)**
Soru Kökü: Penisilin alerjisi olan ve oral yolla ilaç kullanabilen erişkin bir hastada, mukozayı perfore edecek bir periodontal cerrahi işlemden 30-60 dakika önce uygulanması gereken İE profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin 500 mg oral
Açıklama: Hasta oral ilaç alabiliyorsa ve amoksisilin/penisilin alerjisi varsa alternatif oral rejimler tercih edilir: Sefaleksin (2 gr), Azitromisin veya Klaritromisin (500 mg) ya da Doksisiklin (100 mg). Amoksisilin ilk seçenektir ancak alerji durumunda kontrendikedir. Sefazolin ve Ampisilin parenteral (IM/IV) yolla, oral ilaç alamayan hastalarda kullanılır.

---

### ÇİFT 79 (Benzerlik: 0.74)

**Soru 1 (ID: cb6c6b0e-339f-493d-98da-53f25dbdd7b8)**
Soru Kökü: Sekiz yaşında ve 30 kg ağırlığında olan, siyanotik doğumsal kalp hastalığı teşhisi bulunan bir çocuk hastaya kök yüzey düzleştirmesi planlanmaktadır. Hastanın herhangi bir ilaç alerjisi yoktur. Amerikan Kalp Birliği (AHA) kurallarına göre, bu hastaya işlemden 30-60 dakika önce oral yolla verilmesi gereken doğru antibiyotik ajanı ve toplam dozu aşağıdakilerden hangisidir?
Doğru Şık (C): 1500 mg Amoksisilin
Açıklama: Alerjisi olmayan çocuklarda standart İE profilaksisi oral Amoksisilindir. Dozaj 50 mg/kg olarak hesaplanır. 30 kg ağırlığındaki bir çocuk için 30 x 50 mg = 1500 mg Amoksisilin işlemden 30-60 dk önce verilmelidir. 2000 mg amoksisilin/ampisilin yetişkin dozudur.

**Soru 2 (ID: 4ae8f3d7-0a89-4595-b880-1b4f2469d5c3)**
Soru Kökü: Kırk beş yaşındaki erkek hasta protez kalp kapağı taşımaktadır ve penisilin alerjisi bulunmamaktadır. Ancak hasta gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir gıda ve ilaç alamamaktadır. Bu hastaya periodontal cerrahi öncesi uygulanması gereken parenteral (IM veya IV) profilaksi ajanı ve dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 2 g IM veya IV Ampisilin
Açıklama: Oral ilaç alamayan ve penisilin alerjisi OLMAYAN bir yetişkinde standart parenteral profilaksi ajanı 2 g IM veya IV Ampisilindir. (Sefazolin/Seftriakson 1g de kullanılabilir ancak penisilin grubu tercih edilecekse doğrudan Ampisilin 2g temeldir). Oral ajanlar (amoksisilin, klaritromisin) hasta yutamadığı için elenir.

---

### ÇİFT 80 (Benzerlik: 0.73)

**Soru 1 (ID: e1b21956-39f9-4f6b-acd8-90e790d3ec65)**
Soru Kökü: Altmış yaşında erkek hasta alt çene tam bölümlü dişsizliğin rehabilitasyonu için hareketli bölümlü protez yaptırmak istemektedir. Tasarım aşamasında "at nalı" şeklinde bir ana bağlayıcı planlanması gündeme gelmiştir. Periodontal sağlık açısından bu tasarımın kullanılması neden en kötü biyomekanik planlama olarak kabul edilir?
Doğru Şık (C): Rijit olmadığı için esneyerek destek dişlere çok fazla yanal (lateral) yıkıcı kuvvet verdiği için
Açıklama: Ana bağlayıcılar daima sert (rijit) planlanmalıdır ki çiğneme kuvvetleri ark boyunca eşit dağılsın. At nalı şeklindeki ana bağlayıcı tasarımı rijitliğini kaybederek bükülmeye eğilimlidir. Bu esneme hareketi, kuvvetin destek dişlere fizyolojik olmayan, son derece yıkıcı lateral (yatay) yönde aktarılmasına yol açar, bu da en kısa sürede periodontal harabiyet ve mobilite yaratır.

**Soru 2 (ID: 539326ab-931d-406b-a3cc-9dae498e0a94)**
Soru Kökü: Üst çene diş eksikliklerinde hareketli parsiyel protez planlanan hastalarda, destek dişlerin periodonsiyumunu korumak birincil hedeftir. Buna göre, rijiditesi yetersiz olduğu için esneyerek destek dişlere aşırı miktarda lateral (yatay) devirici kuvvet veren ve mekanik olarak **en kötü** planlama kabul edilen ana bağlayıcı tipi aşağıdakilerden hangisidir?
Doğru Şık (A): At nalı şeklinde (U-plak) ana bağlayıcı
Açıklama: At nalı şeklindeki ana bağlayıcılar yapısal formlarından dolayı yeterli rijidite sağlayamazlar ve çiğneme yükü altında esnerler. Bu esneme, protezi tutan destek dişlere şiddetli lateral kuvvetlerin yansımasına ve periodontal yıkımın hızlanmasına neden olduğu için en zayıf mekanik tasarım olarak kabul edilir. İdeal bir ana bağlayıcı kesinlikle rijit olmalıdır.

---

### ÇİFT 81 (Benzerlik: 0.73)

**Soru 1 (ID: b4e589b8-da51-4dee-b90a-22ed5165cbe6)**
Soru Kökü: Son dönem böbrek yetmezliği nedeniyle düzenli hemodiyaliz programına dahil olan bir hastaya cerrahi periodontal tedavi uygulanması gerekmektedir. Operatif alanda sekonder kanama riskini en aza indirmek için bu hastanın dental tedavi zamanlaması nasıl planlanmalıdır?
Doğru Şık (D): Kullanılan heparinin etkisinin geçmesi için diyaliz aldıktan 1 gün sonra yapılmalıdır
Açıklama: Hemodiyaliz makinesinde kanın pıhtılaşmasını engellemek amacıyla işlem sırasında hastalara sistemik heparin uygulanır. Heparinin kandan tamamen temizlenmesi ve kanama zamanının normale dönmesi yaklaşık 24 saat sürer. Bu farmakokinetik nedenle, fatal kanama komplikasyonlarını önlemek adına her türlü cerrahi veya travmatik dental işlem, hasta diyalize girdikten tam bir gün (24 saat) sonra yapılmalıdır.

**Soru 2 (ID: f4ae38ae-167d-4dd8-ad5c-7532a1d604df)**
Soru Kökü: Diyaliz gereksinimi olan kronik böbrek hastalarının periodontal operasyon planlamalarında diş hekimlerinin karşılaşabileceği en majör sistemik risk kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Viral hepatit bulaş riski ve sekonder kanama
Açıklama: Kronik böbrek hastalarında, diyaliz sürecinde kullanılan heparin nedeniyle ciddi bir ikincil (sekonder) kanama riski vardır (bu nedenle cerrahi işlemler diyalizden 1 gün sonra yapılmalıdır). Ayrıca sık diyalize giren ve kan ürünleriyle temas eden bu hastalarda Hepatit B ve C gibi viral hepatit enfeksiyonu taşıma riski genel popülasyona göre belirgin şekilde yüksektir.

---

### ÇİFT 82 (Benzerlik: 0.73)

**Soru 1 (ID: 4d931085-f9f6-4cb4-880b-e0eea208d0b0)**
Soru Kökü: Kardiyak risk grubundaki bir hastanın periodontal tedavi planı değerlendirilirken işlemlerin kanama ve bakteriyemi oluşturma potansiyeline göre risk analizi yapılır. Buna göre aşağıdakilerden hangisi İnfektif Endokardit açısından yüksek riskli (invaziv) grupta yer alan bir işlemdir?
Doğru Şık (C): Mukogingival cerrahi tedaviler
Açıklama: Mukogingival cerrahi, dokunun kesilmesi, flep kaldırılması ve sütürasyon aşamalarını içeren invaziv bir işlemdir ve yoğun bakteriyemi yaratarak yüksek risk oluşturur. Sütur alımı, supragingival band yerleşimi veya basit protez uyumlamaları mukoza perforasyonu yapmadıkları için düşük riskli kabul edilir.

**Soru 2 (ID: c6f0e3e7-dfef-479b-9615-729100c07d41)**
Soru Kökü: İnfektif endokardit açısından yüksek riskli kabul edilen bir hastada, uygulanacak dental işlemlerin kanama ve bakteriyemi potansiyeli profilaksi kararını belirler. Aşağıdaki işlemlerden hangisi için antibiyotik profilaksisi yapılmasına gerek **yoktur**?
Doğru Şık (B): Basit periodontal muayene ve supragingival scaling
Açıklama: Supragingival scaling, basit CPITN indeksi ölçümü, radyograf çekimi veya supragingival bant/sütur alınması AHA'ya göre düşük riskli işlemlerdir ve antibiyotik profilaksisi gerektirmez. Ancak enflame dokuda sondlama, subgingival işlem gerektiren matriks uygulaması veya periimplantitis debridmanı yüksek invaziv işlemler olup profilaksi şarttır.

---

### ÇİFT 83 (Benzerlik: 0.73)

**Soru 1 (ID: cb6c6b0e-339f-493d-98da-53f25dbdd7b8)**
Soru Kökü: Sekiz yaşında ve 30 kg ağırlığında olan, siyanotik doğumsal kalp hastalığı teşhisi bulunan bir çocuk hastaya kök yüzey düzleştirmesi planlanmaktadır. Hastanın herhangi bir ilaç alerjisi yoktur. Amerikan Kalp Birliği (AHA) kurallarına göre, bu hastaya işlemden 30-60 dakika önce oral yolla verilmesi gereken doğru antibiyotik ajanı ve toplam dozu aşağıdakilerden hangisidir?
Doğru Şık (C): 1500 mg Amoksisilin
Açıklama: Alerjisi olmayan çocuklarda standart İE profilaksisi oral Amoksisilindir. Dozaj 50 mg/kg olarak hesaplanır. 30 kg ağırlığındaki bir çocuk için 30 x 50 mg = 1500 mg Amoksisilin işlemden 30-60 dk önce verilmelidir. 2000 mg amoksisilin/ampisilin yetişkin dozudur.

**Soru 2 (ID: a1c19cd3-7855-47a9-8706-ae9c0b02a310)**
Soru Kökü: Aort kapak replasmanı öyküsü olan 55 yaşındaki kadın hastaya, jeneralize kök yüzeyi düzleştirilmesi işlemi planlanmıştır. Anamnezinde penisiline karşı anafilaksi hikayesi bulunan bu hasta için AHA'nın önerdiği **en ideal** oral profilaktik antibiyotik rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): İşlemden 30 ila 60 dakika önce 500 mg Azitromisin oral
Açıklama: AHA profilaksi kurallarına göre penisilin/amoksisilin alerjisi olan ve oral yolla ilaç alabilen yetişkin hastalarda makrolid grubu olan Azitromisin veya Klaritromisin 500 mg (işlemden 30-60 dk önce tek doz) birinci tercih alternatiflerdendir. Hastada alerji hikayesi olması Sefaleksin (çapraz alerji riski) ve Amoksisilin kullanımını elediği için azitromisin spesifik ve güvenli bir rejimdir.

---

### ÇİFT 84 (Benzerlik: 0.73)

**Soru 1 (ID: 6ca5807f-ba5a-4bc9-a779-972c2e90b3bf)**
Soru Kökü: İnfektif Endokardit (İE) için yüksek risk grubunda olan bir hastada uygulanacak dental işlemin tipi, antibiyotik profilaksisi gerekip gerekmediğini belirler. Amerikan Kalp Birliği (AHA) rehberine göre aşağıdakilerden hangisi bakteriyemi riski yüksek olduğu için profilaksi gerektiren (yüksek riskli) periodontal girişimlerden **değildir**?
Doğru Şık (B): Geçirilmiş flep cerrahisi sonrası rutin sütur alınması
Açıklama: AHA rehberlerine göre; sondlama, implant cerrahisi, subgingival bant yerleşimi ve kök yüzeyi düzleştirilmesi gibi dişeti veya periapikal dokunun manipüle edildiği işlemler yüksek risk grubundadır ve mutlak profilaksi gerektirir. Sütur alınması, anestezi enjeksiyonu (enfekte olmayan dokuya), ve radyograf çekimi ise düşük riskli işlemler kategorisinde olup profilaksi zorunluluğu barındırmaz.

**Soru 2 (ID: bec09423-354f-4da2-9848-6d1cbfd8e66e)**
Soru Kökü: Sistemik hastalıkları olan hastaların periodontal tedavilerinde antibiyotik profilaksisi yaklaşımıyla ilgili aşağıdaki durumlardan hangisi İnfektif Endokardit (İE) açısından yüksek risk taşıyan ve AHA'ya göre profilaksi önerilen gruplar arasında **yer almaz**?
Doğru Şık (D): Komplike olmayan koroner arter bypass greft (CABG) operasyonu geçirmiş hastalar
Açıklama: Amerikan Kalp Birliği (AHA) kılavuzlarına göre, komplike olmayan koroner arter bypass operasyonu geçirmiş hastalarda kardiyolog tarafından aksine bir uyarı yapılmadığı sürece rutin infektif endokardit profilaksisi uygulanmasına gerek yoktur. Geçirilmiş İE, protez kapak varlığı ve siyanotik doğumsal kalp hastalıkları yüksek risk grubundadır ve mukozayı perfore eden tüm işlemlerde profilaksi zorunludur. Yanlış profilaksi uygulaması, dirençli bakteri gelişimine yol açan bir klinik hatadır.

---

### ÇİFT 85 (Benzerlik: 0.73)

**Soru 1 (ID: c7d70831-a704-44dd-a730-0aa8324a65f3)**
Soru Kökü: Cerrahi kron boyu uzatma işlemi planlanan bir vakada, yeterli keratinize diş eti genişliğinin mevcut olduğu doğrulanmıştır. İşlem sırasında biyolojik genişliği ihlal etmemek adına, sadece yumuşak doku redüksiyonunun (gingivektomi) yeterli olabilmesi için kemik kretinin koronalinde bulunması gereken **minimum** yumuşak doku miktarı kaç mm olmalıdır?
Doğru Şık (D): 3 mm
Açıklama: Yeterli keratinize doku varlığında, kemik kretinin koronalinde minimum 3 mm yumuşak doku bulunuyorsa, bu dokunun redüksiyonu yeterli olur ve kemiğe müdahale gerekmez. Eğer bu mesafe 3 mm'den az ise, cerrahi flap operasyonu ile birlikte mutlaka kemik redüksiyonu da (ostektomi/osteoplasti) yapılmalıdır. Biyolojik genişlik (yaklaşık 2 mm) ile sulkus derinliği hesaplandığında 3 mm'lik bariyer kritik bir güvenlik sınırıdır.

**Soru 2 (ID: e1bbbf70-3272-48c7-8dab-54a1101af234)**
Soru Kökü: Cerrahi kron boyu uzatma işlemleri sırasında kırık veya çürük sınırının periodontal dokulara olan mesafesi dikkatle ayarlanmalıdır. Subgingival bölgeye uzanan derin bir kron kırığı tespit edilen vakada, cerrahi şekillendirme yapıldıktan sonra biyolojik genişlik ihlali olmaması için kemik kret ile kırık hattı arasında **en az** kaç mm kemiksuz güvenli mesafe bırakılmalıdır?
Doğru Şık (D): 4 mm
Açıklama: Sağlam bir diş için restorasyon marjini ile kemik kreti arasında biyolojik genişliği korumak adına ideal 3 mm mesafe aranır. Ancak dişte açık çürük veya subgingival kırık hattı varlığında, enfekte alandan yeterince uzaklaşabilmek ve epitelin sağlıklı dokuya tutunmasını garanti altına almak için bu mesafenin kemik kreti ile kırık hattı arasında en az 4 mm olması gerektiği vurgulanmıştır.

---

### ÇİFT 86 (Benzerlik: 0.73)

**Soru 1 (ID: d0f156e0-3e71-44e2-81d9-8bc28bbd4225)**
Soru Kökü: Doğumsal siyanotik kalp hastalığı bulunan ve Amerikan Kalp Birliği (AHA) kriterlerine göre enfektif endokardit gelişimi açısından yüksek risk kategorisinde yer alan 10 yaşındaki (30 kg) bir çocuk hastaya sondlama ve başlangıç periodontal tedavisi uygulanacaktır. Hastanın penisilin alerjisi bulunmadığına ve ilaçları oral yolla alabildiğine göre uygulanması gereken **doğru profilaksi rejimi ve dozu** aşağıdakilerden hangisidir?
Doğru Şık (B): İşlemden 30-60 dakika önce 50 mg/kg (toplam 1500 mg) oral Amoksisilin
Açıklama: Penisilin alerjisi olmayan ve oral ilaç kullanabilen riskli çocuk hastalarda AHA standart profilaksi protokolü; işlemden 30 ila 60 dakika önce oral yolla 50 mg/kg Amoksisilin uygulamasıdır. Yetişkin dozu ise aynı zamanlamayla tek doz 2 gram oral Amoksisilin'dir.

**Soru 2 (ID: a1c19cd3-7855-47a9-8706-ae9c0b02a310)**
Soru Kökü: Aort kapak replasmanı öyküsü olan 55 yaşındaki kadın hastaya, jeneralize kök yüzeyi düzleştirilmesi işlemi planlanmıştır. Anamnezinde penisiline karşı anafilaksi hikayesi bulunan bu hasta için AHA'nın önerdiği **en ideal** oral profilaktik antibiyotik rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): İşlemden 30 ila 60 dakika önce 500 mg Azitromisin oral
Açıklama: AHA profilaksi kurallarına göre penisilin/amoksisilin alerjisi olan ve oral yolla ilaç alabilen yetişkin hastalarda makrolid grubu olan Azitromisin veya Klaritromisin 500 mg (işlemden 30-60 dk önce tek doz) birinci tercih alternatiflerdendir. Hastada alerji hikayesi olması Sefaleksin (çapraz alerji riski) ve Amoksisilin kullanımını elediği için azitromisin spesifik ve güvenli bir rejimdir.

---

### ÇİFT 87 (Benzerlik: 0.73)

**Soru 1 (ID: 984daba7-9ca6-4cec-a19e-0e958a9118de)**
Soru Kökü: Pulpal ve periodontal kaynaklı enfeksiyonların ayırıcı tanısında ağrı karakteristiği değerlendirilirken, endodontik orijinli bir ağrıyı periodontal ağrıdan kesin olarak ayıran klinik özellik aşağıdakilerden hangisidir?
Doğru Şık (E): Analjezik kullanımının ağrıyı geçirmemesi ve hastayı uykusundan uyandırması
Açıklama: Endodontik kökenli ağrı başlangıçta akut ve şiddetlidir, hastayı uykudan uyandırabilir ve basit analjeziklerle yatıştırılamaz. Buna karşın primer periodontal kaynaklı ağrılar sıklıkla hafif ya da orta düzeydedir, analjeziklerle kolayca geçer ve hastayı uykudan uyandırmaz. Periodontal bir apse drenajı sağlandığında dahi endodontik pulpa enfeksiyonunun derin zonklaması devam eder.

**Soru 2 (ID: 4a0b613a-e888-49ba-991e-27159dd50f70)**
Soru Kökü: Dental muayene sırasında hastanın ağrı karakteristiği orijinin tespiti için belirleyicidir. Anamnezinde dişlerinde hissettiği ağrının 'hafif-orta şiddette olduğu, uykudan uyandırmadığı ve analjezik alımıyla hemen geçtiği' öğrenilen bir vakada, bu ağrının **en olası** kaynağı aşağıdakilerden hangisidir?
Doğru Şık (B): Periodontal kaynaklı kronik inflamasyon
Açıklama: Periodontal hastalık kaynaklı ağrılar genellikle sinsi seyirlidir, hafiftir ve analjeziklerle rahatça baskılanır; hastayı uykudan uyandırmaz. Buna karşın endodontik ağrılar (irreversible pulpitis veya apikal apse) başlangıçta akut, spontan, gece uykudan uyandıran ve analjeziklerin etkisiz kaldığı şiddetli tablolardır.

---

### ÇİFT 88 (Benzerlik: 0.72)

**Soru 1 (ID: beee8b11-bb70-44fc-926b-1034b3511f91)**
Soru Kökü: Ortodontik bozuklukların periodonsiyum üzerindeki yıkıcı etkileri değerlendirildiğinde, malokluzyonun sadece plak retansiyonu yaratmakla kalmayıp aynı zamanda periodontal yıkımı hızlandıran ikinci ana mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Anormal okluzal ilişkiler ve prematür kontaktlar yaratarak okluzal travmaya neden olması
Açıklama: Malokluzyonun periodontal hastalığa yol açtığı iki ana mekanizma vardır: Birincisi plak retansiyonunu artırması, ikincisi ise anormal okluzal ilişkiler (prematür kontaktlar) oluşturarak okluzal travma ve bruksizme zemin hazırlamasıdır. Okluzal travma, plak varlığında periodontal doku yıkımını ve ataşman kaybını belirgin şekilde hızlandırır. Diğer şıklar malokluzyonun fizyopatolojik sonuçları arasında yer almaz.

**Soru 2 (ID: def3c584-ab2c-4eec-aad4-20d967edaceb)**
Soru Kökü: Malokluzyon durumunun doğrudan bir etyolojik faktör olmamasına rağmen periodontitis patogenezine sekonder olarak katkıda bulunduğu en temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (E): Dişlerin temizlenmesini zorlaştırarak plak retansiyon alanları oluşturması
Açıklama: Malokluzyon (örneğin çapraşıklık), periodontal hastalıklar için tek başına doğrudan bir etken değildir. Ancak, fırçalama ve diş ipi kullanımını imkansız kılan plak retansiyon alanları oluşturarak mikroorganizmaların birikimi için zemin hazırlar ve böylece periodontal iltihabı kolaylaştırır. Biyolojik genişlik ihlali ise malokluzyonun değil, hatalı yapılmış taşkın restorasyonların bir sonucudur.

---

### ÇİFT 89 (Benzerlik: 0.72)

**Soru 1 (ID: 984daba7-9ca6-4cec-a19e-0e958a9118de)**
Soru Kökü: Pulpal ve periodontal kaynaklı enfeksiyonların ayırıcı tanısında ağrı karakteristiği değerlendirilirken, endodontik orijinli bir ağrıyı periodontal ağrıdan kesin olarak ayıran klinik özellik aşağıdakilerden hangisidir?
Doğru Şık (E): Analjezik kullanımının ağrıyı geçirmemesi ve hastayı uykusundan uyandırması
Açıklama: Endodontik kökenli ağrı başlangıçta akut ve şiddetlidir, hastayı uykudan uyandırabilir ve basit analjeziklerle yatıştırılamaz. Buna karşın primer periodontal kaynaklı ağrılar sıklıkla hafif ya da orta düzeydedir, analjeziklerle kolayca geçer ve hastayı uykudan uyandırmaz. Periodontal bir apse drenajı sağlandığında dahi endodontik pulpa enfeksiyonunun derin zonklaması devam eder.

**Soru 2 (ID: f759fdef-14d9-4245-8779-e590f07f7e0a)**
Soru Kökü: Dental kaynaklı ağrıların teşhisinde, ağrının spontan olarak başlaması, uykudan uyandırması ve alınan sıradan analjeziklerle geçmemesi belirgindir. Bu semptomları gösteren patolojik durum aşağıdakilerden hangisi ile en çok uyumludur?
Doğru Şık (B): Akut evredeki primer pulpal/endodontik enfeksiyon
Açıklama: Endodontik ağrının karakteristiği, pulpa odası içindeki iltihabi ödemin kapalı bir kutuda yarattığı şiddetli basınç nedeniyle analjeziklere dirençli, nabız atışı tarzında zonklayıcı ve hastayı gece uykusundan uyandıran nitelikte olmasıdır. Periodontal kaynaklı ağrılar (apse hariç) çoğunlukla daha hafif, künt karakterdedir ve analjezik kullanımına oldukça iyi yanıt vererek baskılanabilir.

---

### ÇİFT 90 (Benzerlik: 0.72)

**Soru 1 (ID: bd89ea83-63b1-4ca1-91b4-80b8bc78752e)**
Soru Kökü: Amerikan Kalp Birliği (AHA) güncel kılavuzlarına göre infektif endokardit (İE) gelişimi açısından yüksek risk grubunda yer alan ve periodontal muayene (sondlama) dahil profilaksi uygulanması **kesinlikle** zorunlu olan hasta profili aşağıdakilerden hangisidir?
Doğru Şık (A): Kalp kapağı onarımında protez materyali kullanılmış olan hastalar
Açıklama: AHA kriterlerine göre İE için yüksek risk taşıyan grupta; protez kalp kapağı bulunanlar (veya onarımda protez materyali kullanılanlar), önceden İE öyküsü olanlar, siyanotik doğumsal kalp hastaları ve kapak patolojisi gelişmiş kalp nakli hastaları yer alır. Bu gruptaki hastalara sondlama dahil tüm kanamalı periodontal işlemlerde profilaksi şarttır. Masum üfürüm veya hipertansiyon bu risk grubunda değildir.

**Soru 2 (ID: 15bccae7-3958-4eb4-a598-25dd88d298fe)**
Soru Kökü: AHA'nın profilaksi yönergeleri ışığında, bakteriyemi yaratan dental işlemler öncesinde koruyucu antibiyotik rejimi uygulanması gereken **riskli hasta gruplarından biri olmayan** seçenek aşağıdakilerden hangisidir?
Doğru Şık (C): Daha önce tıkalı damarı için koroner arter bypass grefti (CABG) ameliyatı geçiren hastalar
Açıklama: CABG (Koroner Arter Bypass Grefti) operasyonu kalbin kas ve damar yapısıyla ilgili olup intrakardiyak (kapakçık) bir protez implantasyonu içermez. Bu sebeple AHA yönergelerine göre by-pass operasyonu geçirmiş hastalarda, kardiyoloğun özel bir uyarısı veya ikincil bir defekt bulunmadığı sürece dental işlemler öncesi infektif endokardit profilaksisi uygulanmasına gerek yoktur.

---

### ÇİFT 91 (Benzerlik: 0.72)

**Soru 1 (ID: dfaa06cc-a6d9-480f-9181-fc3a7c3afacf)**
Soru Kökü: 40 yaşında erkek hasta, sol üst ikinci küçük azı dişindeki derin subgingival çürük nedeniyle başvuruyor. Restoratif işlemlere olanak tanımak amacıyla dişe cerrahi kron boyu uzatma işlemi planlanıyor. İşlem sırasında biyolojik genişliğin ihlal edilmemesi için kemik kreti ile çürük hattı arasında bırakılması gereken **minimum** sağlıklı mesafe ne kadar olmalıdır?
Doğru Şık (A): En az 4 mm
Açıklama: Cerrahi kron boyu uzatma işlemlerinde çürük veya kırık hattı varlığında, kemik kreti ile defektin sınırı (kırık hattı/çürük) arasında en az 4 mm mesafe bırakılması temel kuraldır. Bu mesafe, restorasyon marjini için gereken ferrule etkisini sağlamak ve 2.04 mm'lik fizyolojik biyolojik genişliğe zarar vermemek adına cerrahi sırasında mutlak olarak korunmalıdır.

**Soru 2 (ID: b657aa4c-95f8-427c-82a7-9a6301843adb)**
Soru Kökü: Cerrahi kron boyu uzatma işlemleri sırasında biyolojik genişliğin korunması için kemik kreti ile planlanan restorasyonun dişeti marjini arasında minimum ne kadar mesafe bırakılması önerilir?
Doğru Şık (B): 3 mm
Açıklama: Biyolojik genişlik ölçüsü ortalama 2.04 mm, sağlıklı sulkus ise ortalama 0.69 mm olduğundan, cerrahi sırasında kemik kreti ile dişeti marjini arasında bu yapıların fizyolojik restorasyonu için en az 3 mm boşluk bırakılması gerekir. Kırık veya çürük varlığında bu mesafe 4 mm'ye çıksa da, temel marjin-kret mesafesi kuralı 3 mm olarak sabittir. Daha az mesafe bırakılması biyolojik alanın invazyonuna neden olur.

---

### ÇİFT 92 (Benzerlik: 0.72)

**Soru 1 (ID: 71023ec1-9e22-41aa-9820-d35c92b75aa8)**
Soru Kökü: Otuz dört yaşındaki kadın hasta, çapraşık dişlerinin düzeltilmesi amacıyla ortodonti kliniğine sevk ediliyor. Yapılan periodontal muayenede Faz 1 (başlangıç) tedavisinin uygulandığı ancak yaygın sondlamada kanama ve 5-6 mm'lik aktif ceplerin sebat ettiği görülüyor. Bu aşamada hastaya ortodontik tedavi başlanmasının kesin kontrendike olmasının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Dişeti iltihabı varlığında ortodontik hareketin plağı subgingival alana iterek periodontal ataşman kaybını artırması
Açıklama: Ortodontik tedavinin en önemli kontrendikasyonu, aktif ve iyileşmemiş dişeti iltihabının varlığıdır. İltihaplı ve derin cepli bir dişe ortodontik kuvvet uygulandığında, diş hareketi esnasında supragingival plak subgingival alana itilir ve mikrobiyal denge bozularak kemik yıkımı ve ataşman kaybı şiddetlenir. Ortodontik mekanikler ankiloz yaratmaz veya kemik yapımını iltihaplı alanda artırmaz.

**Soru 2 (ID: 4a4c6da9-f262-4453-8dd6-5670afac6389)**
Soru Kökü: Ortodontik diş hareketi uygulanacak hastalarda, periodontal sağlığın idamesi ve tedavi planlaması büyük önem taşır. Aşağıdakilerden hangisi bir hastada planlanan ortodontik tedavi için kontrendikasyon **değildir**?
Doğru Şık (D): Hastanın kronik periodontitis geçmişine sahip erişkin yaşta olması
Açıklama: Yaş ve daha önceden geçirilmiş periodontal hastalık varlığı tek başına ortodontik tedavi için bir kontrendikasyon değildir. İltihap tam olarak kontrol altına alındığı sürece, erişkin hastalarda ortodontik tedavi güvenle ve başarıyla uygulanabilir. Ancak aktif inflamasyon, yetersiz yapışık dişeti kalınlığı ve kontrolsüz hastalık aktivitesi mutlak kontrendikasyonlar arasında yer alır.

---

### ÇİFT 93 (Benzerlik: 0.72)

**Soru 1 (ID: 71023ec1-9e22-41aa-9820-d35c92b75aa8)**
Soru Kökü: Otuz dört yaşındaki kadın hasta, çapraşık dişlerinin düzeltilmesi amacıyla ortodonti kliniğine sevk ediliyor. Yapılan periodontal muayenede Faz 1 (başlangıç) tedavisinin uygulandığı ancak yaygın sondlamada kanama ve 5-6 mm'lik aktif ceplerin sebat ettiği görülüyor. Bu aşamada hastaya ortodontik tedavi başlanmasının kesin kontrendike olmasının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Dişeti iltihabı varlığında ortodontik hareketin plağı subgingival alana iterek periodontal ataşman kaybını artırması
Açıklama: Ortodontik tedavinin en önemli kontrendikasyonu, aktif ve iyileşmemiş dişeti iltihabının varlığıdır. İltihaplı ve derin cepli bir dişe ortodontik kuvvet uygulandığında, diş hareketi esnasında supragingival plak subgingival alana itilir ve mikrobiyal denge bozularak kemik yıkımı ve ataşman kaybı şiddetlenir. Ortodontik mekanikler ankiloz yaratmaz veya kemik yapımını iltihaplı alanda artırmaz.

**Soru 2 (ID: 5f1bdeda-7f6b-40cb-ba29-ebaaed06e928)**
Soru Kökü: Erişkin hastalarda periodontal tedaviye destek amacıyla uygulanan ortodontik tedavinin bazı durumlar için sınırlamaları vardır. Aşağıdakilerden hangisi periodontolojide ortodontik müdahale gerektiren bir endikasyon **değildir**?
Doğru Şık (D): Periodontal yıkım nedeniyle yeterli ankarajın kalmadığı devrilmiş dişleri hareket ettirmek
Açıklama: Ortodontik diş hareketi sağlamak için reaksiyon kuvvetini karşılayacak sağlam dayanaklara (ankaraj) ihtiyaç vardır. İleri düzeyde kemik kaybı olan, ankaraj değeri yetersiz periodontal hastalıklı dişlerde ortodontik tedavi kontrendikedir, endikasyon değildir. Diğer şıkların tümü ortodontinin periodontolojiye olumlu katkı sağladığı kesin tedavi endikasyonlarıdır.

---

### ÇİFT 94 (Benzerlik: 0.72)

**Soru 1 (ID: 648643bf-5c13-477c-a702-6dd892f1f9ad)**
Soru Kökü: Hareketli bölümlü protez planlamasında periodontal dokuların korunmasına yönelik uyulması gereken mekanik kurallar düşünüldüğünde, aşağıdaki yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (D): Ön dişlere konacak tırnaklar dişlerin eğimli yüzeylerine konumlandırılarak okluzal tork oluşturulmalıdır.
Açıklama: Ön dişlere (özellikle kaninlere) konacak tırnaklar kesinlikle dişlerin eğimli (inkline) palatinal yüzeylerine doğrudan yerleştirilmemelidir. Eğimli yüzeye gelen okluzal kuvvet dişi vestibüle doğru devirici bir ortodontik tork yaratır. Bu yüzden kuvveti uzun eksene paralel iletmek ve protezin dişetine batmasını engellemek için dişe önceden düz tabanlı singulum veya insizal tırnak yuvaları (rest seat) açılmalıdır.

**Soru 2 (ID: e29d5f9e-88ba-4442-8d4f-7550edb3cc53)**
Soru Kökü: Serbest sonlu parsiyel protezlerin tasarımında, doku gömülmesi sırasında dayanak dişe iletilen tork kuvvetlerini azaltmak amacıyla özel konumlandırma prensipleri uygulanır. Alveol kemiğine gelecek hasarı minimuma indiren bu prensip aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (C): Tırnak dişteki mezial fossaya taşınmalı ve retansiyon için distal undercuttan yararlanılmalıdır.
Açıklama: Serbest sonlu protezlerde çiğneme anında kret dokusu çöker. Tırnak distale yerleştirilirse protez dişi arkaya doğru devirmeye çalışır. Tırnağın meziale alınması ve retansiyonun distal undercuttan sağlanması durumunda, protez mezial tırnak çevresinde bir miktar dönerek diş üzerindeki yıkıcı çekme ve devirme stresini absorbe eder.

---

### ÇİFT 95 (Benzerlik: 0.72)

**Soru 1 (ID: 6e8824cd-d746-4190-8992-0aedfa1db70e)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, sol üst birinci küçük azı dişinde gece uykudan uyandıran, zonklayıcı ve şiddetli ağrı şikayetiyle başvuruyor. Klinik muayenede diş perküsyon testine aşırı hassas bulunuyor ve ilgili bölgede mukobukkal katlantıda belirgin bir ödem izleniyor. Hastadaki bu dayanılmaz ağrının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Akut apikal apsede iltihabın periodontal ligamente ulaşıp kemik perforasyonuyla periostu yükseltmesi
Açıklama: Akut apikal apselerde enfeksiyon kök ucundan periodontal ligamente, oradan da alveolar kemiği perfore ederek periost altına yayılır; periostun kemikten ayrılıp yükselmesi kapalı alanda aşırı basınca neden olarak şiddetli zonklayıcı ağrı yaratır. Sulkus epitelindeki ülserasyon veya sement erozyonu kronik periodontitisin özellikleridir ve bu derece akut/şiddetli ağrı üretmezler. Hasta, drenaj sağlanana kadar (fistül açılana dek) bu şiddetli ağrıyı duymaya devam eder.

**Soru 2 (ID: f759fdef-14d9-4245-8779-e590f07f7e0a)**
Soru Kökü: Dental kaynaklı ağrıların teşhisinde, ağrının spontan olarak başlaması, uykudan uyandırması ve alınan sıradan analjeziklerle geçmemesi belirgindir. Bu semptomları gösteren patolojik durum aşağıdakilerden hangisi ile en çok uyumludur?
Doğru Şık (B): Akut evredeki primer pulpal/endodontik enfeksiyon
Açıklama: Endodontik ağrının karakteristiği, pulpa odası içindeki iltihabi ödemin kapalı bir kutuda yarattığı şiddetli basınç nedeniyle analjeziklere dirençli, nabız atışı tarzında zonklayıcı ve hastayı gece uykusundan uyandıran nitelikte olmasıdır. Periodontal kaynaklı ağrılar (apse hariç) çoğunlukla daha hafif, künt karakterdedir ve analjezik kullanımına oldukça iyi yanıt vererek baskılanabilir.

---

### ÇİFT 96 (Benzerlik: 0.72)

**Soru 1 (ID: a5b70ddb-07fd-46ab-b61c-f0aa3de52fd4)**
Soru Kökü: Otuz yaşında erkek hasta lokalize bir dişeti şişliği şikayetiyle başvuruyor. Periodontal muayenede dişeti mukozasında bir fistül ağzı saptanıyor. Teşhis amacıyla fistül yoluna ince bir guta-perka konulup radyograf alınıyor. Guta-perka izinin furkasyonda, kök ortasında kalmayıp doğrudan apekse kadar ilerlediği görülüyor. Bu bulgu öncelikle aşağıdakilerden hangisini düşündürür?
Doğru Şık (C): Fistül yolu endodontik kökenlidir ve apikal apsenin yumuşak dokuya drenajını gösterir.
Açıklama: Guta-perka veya sond ile yapılan fistül izleme (tracking) testinde, radyografik olarak guta-perkanın ucunun doğrudan apekse ulaştığı görülüyorsa, enfeksiyonun birincil kaynağı pulpal nekroza bağlı gelişen apikal periodontitis/apsedir. Eğer guta furkasyonda veya kök ortasında kalsaydı, lateral kanal orijinli endodontik veya periodontal bir apse düşünülürdü.

**Soru 2 (ID: f6587212-e67b-4649-a842-7cd94cc3e51d)**
Soru Kökü: Kronik bir periapikal lezyonun basınçla kök yüzeyi boyunca direne olarak diş eti sulkusundan ağız ortamına açıldığı bir 'endodontik fistül' vakasında, klinik sondlama yapıldığında karşılaşılacak **en tipik** anatomik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Sulkustan girildiğinde sadece fistül yolu boyunca ilerleyen dar ve kısıtlı bir sondlama (dar kanal)
Açıklama: Endodontik kaynaklı fistül yolunun diş eti sulkusundan direne olduğu durumlarda, klasik periodontal hastalığın aksine geniş bir çevresel cep oluşmaz. Sond sulkusa yerleştirildiğinde sanki dar bir tünelden (fistül kanalından) apikale kadar düşer; komşu yüzeylerde ataşman seviyesi tamamen normal kalır.

---

### ÇİFT 97 (Benzerlik: 0.71)

**Soru 1 (ID: a792ec56-9620-404e-8638-54b84d8db04e)**
Soru Kökü: Erken doğum ve düşük doğum ağırlıklı bebek dünyaya getiren annelerin periodontal klinik ve mikrobiyolojik özellikleri incelendiğinde, sağlıklı gebelere kıyasla aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (E): Subgingival plakta Streptococcus mutans dominansı
Açıklama: Erken doğum yapan annelerin subgingival plak florasında sağlıklı gebelere kıyasla A. actinomycetemcomitans, P. gingivalis ve T. denticola gibi majör periodontal patojenlerin miktarı artmış olarak bulunur. Aynı zamanda bu hastalarda daha fazla ataşman kaybı izlenir ve amniyon sıvısında F. nucleatum sıkça izole edilir. S. mutans ise bir dental çürük patojeni olup, bu spesifik patolojik inflamatuvar kaskadın bir belirteci veya başlatıcısı değildir.

**Soru 2 (ID: 4debb6dc-ce29-4d11-924a-5705c4c07ac2)**
Soru Kökü: Hamilelik ve periodontal hastalık arasındaki ilişkiyi inceleyen çalışmalara göre, erken doğum yapan kadınların amnion sıvısında subgingival plaktaki suşlarla benzerlik gösteren ve erken doğum riskiyle en sık ilişkilendirilen periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (E): Fusobacterium nucleatum
Açıklama: Erken doğum yapan kadınların amnion sıvısında en sık izole edilen bakteri F. nucleatum'dur ve subgingival plak ile genetik benzerlik gösterir. Bu patojen amniyonik dokularda PGE2 ve PGF2 alfa seviyelerini uyararak genitoüriner bir enfeksiyon olmadan bile erken uterin kontraksiyonlara ve erken doğuma neden olabilir.

---

### ÇİFT 98 (Benzerlik: 0.71)

**Soru 1 (ID: ec481687-744c-46b2-8312-c6847c39f619)**
Soru Kökü: Elli beş yaşındaki hipertansiyon hastasına, sol alt çenede flep operasyonu planlanmıştır. Medikal konsültasyonu yapılmış ve durumu kontrol altında olan bu hastada kullanılacak lokal anestezi solüsyonu seçilirken vazokonstriktör konsantrasyonu açısından uyulması gereken temel kural aşağıdakilerden hangisidir?
Doğru Şık (B): 1/100.000 oranından daha fazla epinefrin içeren anestezikler kesinlikle kullanılmamalıdır.
Açıklama: Hipertansiyonu olan hastalarda endojen epinefrin üretimini azaltmak için derin anestezi sağlanmalıdır ancak kullanılacak anestezik solüsyondaki ekzojen epinefrin konsantrasyonu 1/100.000 oranından fazla olmamalıdır. 1/50.000 gibi yüksek epinefrin oranları kalp kasının oksijen ihtiyacını ve kan basıncını tehlikeli düzeyde artırabilir.

**Soru 2 (ID: 676248a1-9dd3-4d78-9fd4-0b2bd2801241)**
Soru Kökü: Hipertansiyonu kontrol altında olan bir hastaya flep operasyonu yapılacaktır. Bölgesel anestezi için epinefrin içeren bir solüsyon (%2 Lidokain + 1/100.000 Epinefrin) tercih edilmiştir. Bu solüsyonun sistemik dolaşıma karışarak akut bir hipertansif kriz veya taşikardi yaratmasını engellemek için anestezi sırasında yapılması gereken en kritik mekanik işlem aşağıdakilerden hangisidir?
Doğru Şık (D): Enjeksiyon yapmadan hemen önce enjektör pistonunu geri çekerek (aspirasyon) damar lümeninde olunmadığından emin olmak
Açıklama: Lokal anestezi uygulamalarında, özellikle epinefrin içeren solüsyonlar kullanıldığında, ilacın doğrudan venöz veya arteryel sisteme (damar içine) verilmesini engellemenin tek yolu aspirasyon yapmaktır. Eğer aspirasyonda kan gelirse iğne yönü değiştirilir; gelmezse solüsyon yavaşça verilir. İntravasküler enjeksiyon ani taşikardi, aritmiler ve sistemik krizlere neden olabilir.

---

### ÇİFT 99 (Benzerlik: 0.71)

**Soru 1 (ID: 9743e6ad-ea11-4ff9-b047-70d7c7f59571)**
Soru Kökü: Geçirilmiş kapak replasmanı nedeniyle İnfektif Endokardit gelişimi açısından yüksek risk grubunda bulunan hastaya sistemik antibiyotik profilaksisi uygulanmıştır. Kılavuzlara göre, bu hastada periodontal sondlama dahi yapılmadan hemen önce rutin ağız içi bakteri yükünü minimize etmek amacıyla tavsiye edilen lokal koruyucu uygulama aşağıdakilerden hangisidir?
Doğru Şık (E): Tüm mukozal yüzeylerdeki bakteri sayısını düşürmek için işlem öncesi klorheksidin ile gargara yaptırılması
Açıklama: İE profilaksisi sadece sistemik antibiyotik kullanımını içermez. Bakteriyemi potansiyelini fiziksel olarak da düşürmek hedeflenir. Bu nedenle sondlama dahil tüm kanamalı ve invaziv işlemlerden hemen önce hastaya %0.12 veya %0.2'lik klorheksidin gargara yaptırılarak oral mukozadaki ve plaktaki başlangıç bakteri yükü azaltılır. Bu basit adım, dolaşıma katılacak mikroorganizma miktarını dramatik olarak düşürür.

**Soru 2 (ID: 45245a1d-eec1-4058-820d-7befda3ece30)**
Soru Kökü: İnfektif endokardit riski taşıyan kardiyak bir hastaya periodontal tedavi planlaması yapılırken, sondlama dahil tüm işlemlerden hemen önce %0.12 Klorheksidin gargara kullandırılmasının temel fizyolojik amacı aşağıdakilerden hangisidir?
Doğru Şık (B): Mukozal yüzeylerdeki bakteri miktarını akut olarak azaltarak işlem sırasındaki bakteriyemi yükünü minimize etmek
Açıklama: Profilaktik Klorheksidin gargaraların dental invaziv girişimlerden hemen önce kullanılması, oral kavitedeki geçici ve kalıcı mikrobiyal florayı ani bir şekilde baskılar. Bu sayede, mukoza perfore edildiğinde kan dolaşımına geçecek olan bakteri miktarında (bakteriyemi yükünde) dramatik bir düşüş sağlanır; bu da endokardit riskinin mekanik olarak kırılmasının ilk adımıdır.

---

### ÇİFT 100 (Benzerlik: 0.71)

**Soru 1 (ID: bd89ea83-63b1-4ca1-91b4-80b8bc78752e)**
Soru Kökü: Amerikan Kalp Birliği (AHA) güncel kılavuzlarına göre infektif endokardit (İE) gelişimi açısından yüksek risk grubunda yer alan ve periodontal muayene (sondlama) dahil profilaksi uygulanması **kesinlikle** zorunlu olan hasta profili aşağıdakilerden hangisidir?
Doğru Şık (A): Kalp kapağı onarımında protez materyali kullanılmış olan hastalar
Açıklama: AHA kriterlerine göre İE için yüksek risk taşıyan grupta; protez kalp kapağı bulunanlar (veya onarımda protez materyali kullanılanlar), önceden İE öyküsü olanlar, siyanotik doğumsal kalp hastaları ve kapak patolojisi gelişmiş kalp nakli hastaları yer alır. Bu gruptaki hastalara sondlama dahil tüm kanamalı periodontal işlemlerde profilaksi şarttır. Masum üfürüm veya hipertansiyon bu risk grubunda değildir.

**Soru 2 (ID: f3deeb9d-9d9b-4d2a-b73b-5952ab45309c)**
Soru Kökü: Doğumsal kalp hastalıkları alt grubunda yer alan hastalarda, İnfektif Endokardit (İE) açısından yüksek risk taşıdığı için dental işlemler öncesi antibiyotik profilaksisi gerektiren spesifik anatomik/cerrahi durum aşağıdakilerden hangisidir?
Doğru Şık (B): Cerrahi onarım uygulanmamış, palyatif şantlar veya kondüitler bulunduran siyanotik doğumsal kalp hastalıkları
Açıklama: Doğumsal kalp hastalıkları içinde profilaksi sadece belirli şartlarda önerilir: Cerrahi onarım görmemiş palyatif şantlı siyanotik hastalıklar, tam onarım yapılmış ancak ilk 6 ayını doldurmamış vakalar veya onarım materyali etrafında rezidüel defekt kalan vakalar yüksek risklidir. Tamamen iyileşmiş ve kalıntısız onarımlar (ilk 6 aydan sonra) veya kalp pili (pacemaker) taşıyan hastalar endokardit profilaksisi gerektirmez.

---

### ÇİFT 101 (Benzerlik: 0.71)

**Soru 1 (ID: c7d70831-a704-44dd-a730-0aa8324a65f3)**
Soru Kökü: Cerrahi kron boyu uzatma işlemi planlanan bir vakada, yeterli keratinize diş eti genişliğinin mevcut olduğu doğrulanmıştır. İşlem sırasında biyolojik genişliği ihlal etmemek adına, sadece yumuşak doku redüksiyonunun (gingivektomi) yeterli olabilmesi için kemik kretinin koronalinde bulunması gereken **minimum** yumuşak doku miktarı kaç mm olmalıdır?
Doğru Şık (D): 3 mm
Açıklama: Yeterli keratinize doku varlığında, kemik kretinin koronalinde minimum 3 mm yumuşak doku bulunuyorsa, bu dokunun redüksiyonu yeterli olur ve kemiğe müdahale gerekmez. Eğer bu mesafe 3 mm'den az ise, cerrahi flap operasyonu ile birlikte mutlaka kemik redüksiyonu da (ostektomi/osteoplasti) yapılmalıdır. Biyolojik genişlik (yaklaşık 2 mm) ile sulkus derinliği hesaplandığında 3 mm'lik bariyer kritik bir güvenlik sınırıdır.

**Soru 2 (ID: f8dc88aa-c78c-40a7-a672-00c3c948bc91)**
Soru Kökü: Protetik restorasyonun retansiyonunu artırmak için uygulanan cerrahi kron boyu uzatma işlemi sırasında, flap kaldırılmasına ve alveoler kemiğin cerrahi olarak şekillendirilmesine gerek kalmadan **sadece yumuşak doku eksizyonunun (gingivektomi)** yeterli olduğu durum aşağıdakilerden hangisidir?
Doğru Şık (A): Kemik kretinin koronalinde minimum 3 mm yumuşak doku kalıyorsa
Açıklama: Yeterli keratinize dişeti mevcutsa ve planlanan kron boyu elde edildikten (kesim yapıldıktan) sonra marjinden alveoler kret tepesine kadar en az 3 mm'lik bir yumuşak doku bandı kalıyorsa, kemik yapısına dokunulmasına gerek yoktur. Sadece gingival dokunun kesilip atılması (gingivektomi) fizyolojik biyolojik genişliği ihlal etmeden işlemi tamamlamak için yeterlidir.

---

### ÇİFT 102 (Benzerlik: 0.71)

**Soru 1 (ID: b0b2e1df-6090-42c5-b709-3defe3cf6d66)**
Soru Kökü: Otuz beş yaşında böbrek transplantasyonlu bir hasta, yaygın diş eti büyümesi (gingival overgrowth) şikayetiyle başvurmuştur. Oral hijyeni ideal olmasına rağmen büyümenin devam etmesi, hastanın doku reddini önlemek amacıyla kullandığı spesifik bir ilacın yan etkisi olarak değerlendirilmiştir. Bu hastada diş eti büyümesine yol açan farmakolojik ajan aşağıdakilerden hangisidir?
Doğru Şık (A): Siklosporin-A
Açıklama: Siklosporin-A, organ nakli hastalarında doku reddini engellemek için kullanılan güçlü bir immünosüpresif ajandır. Fenitoin (epilepsi) ve kalsiyum kanal blokerleri (hipertansiyon - örn: Nifedipin) ile birlikte sistemik kullanımında yaygın fibrotik diş eti büyümesine neden olan üç ana ilaç grubundan biridir. Atropin ağız kuruluğu yaparken, nitrogliserin vazodilatördür.

**Soru 2 (ID: 2478d3c5-b063-4e6b-b824-8ed1708690a3)**
Soru Kökü: Organ transplantasyonu geçirmiş hastaların organ reddini önlemek için yaşam boyu kullandıkları bazı ilaçlar, oral mukozada fibröz doku hiperplazisine neden olmaktadır. Bu spesifik yan etkiye yol açan majör immünsupresif ajan aşağıdakilerden hangisidir?
Doğru Şık (B): Siklosporin-A
Açıklama: Siklosporin-A, transplant hastalarında hücresel bağışıklığı T-lenfosit üzerinden baskılayan potent bir immünsupresif olup, bilinen en belirgin oral yan etkisi jeneralize gingival doku büyümesidir (gingival overgrowth). İlaç kesilemediği için bu hastalarda plak kontrolünün mükemmel seviyede tutulması, sekonder gingivektomi cerrahilerinin sıklığını azaltan yegane faktördür.

---

### ÇİFT 103 (Benzerlik: 0.71)

**Soru 1 (ID: 5f1bdeda-7f6b-40cb-ba29-ebaaed06e928)**
Soru Kökü: Erişkin hastalarda periodontal tedaviye destek amacıyla uygulanan ortodontik tedavinin bazı durumlar için sınırlamaları vardır. Aşağıdakilerden hangisi periodontolojide ortodontik müdahale gerektiren bir endikasyon **değildir**?
Doğru Şık (D): Periodontal yıkım nedeniyle yeterli ankarajın kalmadığı devrilmiş dişleri hareket ettirmek
Açıklama: Ortodontik diş hareketi sağlamak için reaksiyon kuvvetini karşılayacak sağlam dayanaklara (ankaraj) ihtiyaç vardır. İleri düzeyde kemik kaybı olan, ankaraj değeri yetersiz periodontal hastalıklı dişlerde ortodontik tedavi kontrendikedir, endikasyon değildir. Diğer şıkların tümü ortodontinin periodontolojiye olumlu katkı sağladığı kesin tedavi endikasyonlarıdır.

**Soru 2 (ID: 44260d49-971e-41d8-b018-60c52d2448a0)**
Soru Kökü: İleri derecede kemik kaybı yaşamış ancak inflamasyonu kontrol altına alınmış bir periodontal hastada ortodontik tedavi planlanırken, hekimin karşılaşabileceği en majör biyomekanik sorun aşağıdakilerden hangisidir?
Doğru Şık (E): Destek doku yetersizliğine bağlı olarak yetersiz ankraj ve tedavi sonrası zayıf retansiyon olasılığı
Açıklama: Periodontal yıkım nedeniyle alveol kemik desteği azalmış dişlerin direnç merkezi apikale kayar ve bu dişler ortodontik hareket için kuvvet altyapısı olarak (ankraj) zayıftırlar. Kemik azaldığı için tedavi sonrası dişlerin eski pozisyonlarına dönme eğilimi yüksektir, bu da yetersiz ankraj ve yetersiz retansiyon problemini doğurur. Kemik kaybı dişlerin hareket etmesini engellemez, aksine kontrolsüz hareket riskini artırır.

---

### ÇİFT 104 (Benzerlik: 0.71)

**Soru 1 (ID: 648643bf-5c13-477c-a702-6dd892f1f9ad)**
Soru Kökü: Hareketli bölümlü protez planlamasında periodontal dokuların korunmasına yönelik uyulması gereken mekanik kurallar düşünüldüğünde, aşağıdaki yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (D): Ön dişlere konacak tırnaklar dişlerin eğimli yüzeylerine konumlandırılarak okluzal tork oluşturulmalıdır.
Açıklama: Ön dişlere (özellikle kaninlere) konacak tırnaklar kesinlikle dişlerin eğimli (inkline) palatinal yüzeylerine doğrudan yerleştirilmemelidir. Eğimli yüzeye gelen okluzal kuvvet dişi vestibüle doğru devirici bir ortodontik tork yaratır. Bu yüzden kuvveti uzun eksene paralel iletmek ve protezin dişetine batmasını engellemek için dişe önceden düz tabanlı singulum veya insizal tırnak yuvaları (rest seat) açılmalıdır.

**Soru 2 (ID: c06e8598-4f3d-4c32-8040-10af0f9e0950)**
Soru Kökü: Serbest sonlu hareketli bölümlü protezlerde, destek dişe gelen zararlı kuvvetleri azaltmak ve periodontal sağlığı korumak amacıyla kroşe ve tırnak konumu için geçerli olan temel biyomekanik kural aşağıdakilerden hangisidir?
Doğru Şık (D): Tırnak meziale taşınmalı, retansiyon için distal undercuttan yararlanılmalıdır.
Açıklama: Serbest sonlu protezlerde kural olarak okluzal tırnak meziale taşınır ve retansiyon distal undercuttan alınır. Bu yerleşim, hareketli kret üzerindeki protezin dokuya gömülmesi sırasında dişi arkada doğru deviren zararlı tork kuvvetini kompanse ederek kuvvetin dişin uzun eksenine paralel gelmesini sağlar. Tırnağın distale yerleştirilmesi dişte distal yönde yıkıcı bir kaldıraç etkisi yaratır.

---

### ÇİFT 105 (Benzerlik: 0.71)

**Soru 1 (ID: a1c19cd3-7855-47a9-8706-ae9c0b02a310)**
Soru Kökü: Aort kapak replasmanı öyküsü olan 55 yaşındaki kadın hastaya, jeneralize kök yüzeyi düzleştirilmesi işlemi planlanmıştır. Anamnezinde penisiline karşı anafilaksi hikayesi bulunan bu hasta için AHA'nın önerdiği **en ideal** oral profilaktik antibiyotik rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): İşlemden 30 ila 60 dakika önce 500 mg Azitromisin oral
Açıklama: AHA profilaksi kurallarına göre penisilin/amoksisilin alerjisi olan ve oral yolla ilaç alabilen yetişkin hastalarda makrolid grubu olan Azitromisin veya Klaritromisin 500 mg (işlemden 30-60 dk önce tek doz) birinci tercih alternatiflerdendir. Hastada alerji hikayesi olması Sefaleksin (çapraz alerji riski) ve Amoksisilin kullanımını elediği için azitromisin spesifik ve güvenli bir rejimdir.

**Soru 2 (ID: 121cba99-848f-4f28-8b08-504314b34b26)**
Soru Kökü: Hem penisilin alerjisi olan hem de geçirdiği bir oral operasyon nedeniyle ağızdan hiçbir ilaç yutamayacak durumda olan yüksek riskli bir kardiyak hastada, invaziv periodontal işlemden önce uygulanması gereken en güvenli profilaktik protokol aşağıdakilerden hangisidir?
Doğru Şık (B): 1 g IM veya IV Sefazolin veya Seftriakson uygulanması
Açıklama: Hasta oral ilaç alamıyor ve penisilin alerjisi varsa (ve anafilaksi tipinde değilse sefalosporinler kullanılabilir) AHA kılavuzuna göre standart yaklaşım 1 g Sefazolin veya Seftriakson'un IM veya IV olarak uygulanmasıdır. Ampisilin, penisilin alerjisi olduğu için ölümcül anaflaksiye yol açabilir; sadece lokal Klorheksidin ile bakteriyemi engellenemez.

---

### ÇİFT 106 (Benzerlik: 0.71)

**Soru 1 (ID: f19a83fd-742f-4218-a974-4a71c71c6af6)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, sağ alt birinci büyük azı dişinin dişetinde hafif şişlik ve fırçalama sırasında rahatsızlık şikayetiyle başvuruyor. Klinik muayenede dişte derin bir periodontal cep tespit ediliyor, ancak spontan şiddetli ağrı bulunmuyor. Radyografide apikal lezyon izlenmiyor. Bu vakada lezyonun şiddetli ağrıya neden olmamasının en olası patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Apse formasyonunun sulkus içinde bağ dokusu ataşmanı düzeyinde gelişmesi ve periostu yükseltmemesi
Açıklama: Periodontal apseler genellikle şiddetli ağrılı lezyonlar değildir çünkü pürülan birikim periodontal cep içinde, bağ dokusu ataşmanı düzeyinde lokalize olur ve kemik üzerindeki periostu kemikten ayırıp yükseltmez. Akut apikal apselerde ise enfeksiyon doğrudan kemik içine ilerleyip periostu yükselttiği için basınç artar ve zonklayıcı, şiddetli bir ağrı ortaya çıkar. Pulpal drenaj veya lateral kanal tutulumu bu spesifik ağrı farkını açıklayan primer mekanizma değildir.

**Soru 2 (ID: 4a0b613a-e888-49ba-991e-27159dd50f70)**
Soru Kökü: Dental muayene sırasında hastanın ağrı karakteristiği orijinin tespiti için belirleyicidir. Anamnezinde dişlerinde hissettiği ağrının 'hafif-orta şiddette olduğu, uykudan uyandırmadığı ve analjezik alımıyla hemen geçtiği' öğrenilen bir vakada, bu ağrının **en olası** kaynağı aşağıdakilerden hangisidir?
Doğru Şık (B): Periodontal kaynaklı kronik inflamasyon
Açıklama: Periodontal hastalık kaynaklı ağrılar genellikle sinsi seyirlidir, hafiftir ve analjeziklerle rahatça baskılanır; hastayı uykudan uyandırmaz. Buna karşın endodontik ağrılar (irreversible pulpitis veya apikal apse) başlangıçta akut, spontan, gece uykudan uyandıran ve analjeziklerin etkisiz kaldığı şiddetli tablolardır.

---

### ÇİFT 107 (Benzerlik: 0.71)

**Soru 1 (ID: 83be7d24-ae6b-424f-91a7-555cc018803b)**
Soru Kökü: Kırk yaşında kadın hasta şiddetli, uykudan uyandıran zonklayıcı ağrı ve dişetinde şişlik şikayeti ile kliniğe başvuruyor. Muayenede nekrotik pulpalı bir dişte oluşan akut apikal apsenin, kemiği perfore ederek periodontal ligament veya dişeti sulkusu içinde kök boyunca ilerlediği ve daha önceden var olan derin bir periodontal cebin içine boşaldığı (drene olduğu) tespit ediliyor. Bu klinik tabloya verilen isim aşağıdakilerden hangisidir?
Doğru Şık (B): Gerçek kombine lezyon (Perio-Endo)
Açıklama: Gerçek kombine lezyon (Perio-Endo), spesifik olarak apeksten kaynaklanan endodontik bir enfeksiyonun (apse veya granülom) kuronale doğru genişleyerek, halihazırda var olan kronik ve geniş tabanlı bir periodontal cep ile fiziksel olarak birleşmesi sonucunda ortaya çıkar. Bu durumda lezyon hem endodontik hem de periodontal komponentlerin özelliklerini bir arada sergiler.

**Soru 2 (ID: b7a5893c-35bb-49b7-9472-5b7ec79e58c6)**
Soru Kökü: 45 yaşında kadın hasta, alt çene sağ bölgesinde dişlerinde sallanma şikayetiyle başvuruyor. Alınan radyografta marjinal kret bölgesinde geniş başlayıp apekse doğru giderek daralan V şeklinde bir radyolusensi saptanıyor. Diş pulpa testlerine vital (canlı) yanıt veriyor. Bu klinik ve radyografik tabloya neden olan en olası durum aşağıdakilerden hangisidir?
Doğru Şık (C): Primer periodontal lezyon
Açıklama: Primer periodontal lezyonlarda yıkım dişeti kenarından apekse doğru ilerlediği için radyolusent kemik kaybı görüntüsü marjinal bölgede en geniştir ve apekse doğru daralır. Dişin vital olması ve marjinalden apekse doğru daralan kemik kaybı formu, problemin kökeninin endodontik olmadığını ve primer periodontal yıkım olduğunu kesinleştirir. Endodontik lezyonlarda ise yıkım apeksten başlayıp koronale ilerlediği için görüntü bunun tam tersidir.

---

### ÇİFT 108 (Benzerlik: 0.71)

**Soru 1 (ID: 74eedcd1-3555-4cb2-8959-4926e18066a9)**
Soru Kökü: Son dönem böbrek yetmezliği nedeniyle haftanın belirli günlerinde hemodiyalize giren bir hastanın periodontal cerrahi tedavileri planlanacaktır. Diyaliz prosedürü sırasında hastaya rutin olarak yüksek doz sistemik Heparin verildiği göz önüne alındığında, operasyon sonrası kanama komplikasyonlarını önlemek adına periodontal cerrahinin zamanlaması **en uygun** ne zaman yapılmalıdır?
Doğru Şık (E): Diyaliz tedavisi tamamlandıktan 1 tam gün (24 saat) sonra
Açıklama: Hemodiyaliz makinesindeki tüplerin pıhtılaşmasını önlemek için hastaya yüksek doz Heparin verilir. Heparin kısa yarı ömürlü bir antikoagülandır ancak seans bitiminde kanda hala aktif olduğundan anında işlem yapılırsa masif kanama gelişir. Güvenli yaklaşım, Heparin etkisinin tamamen ortadan kalktığı diyalizden 1 tam gün sonra periodontal işlemlerin yapılmasıdır.

**Soru 2 (ID: f4ae38ae-167d-4dd8-ad5c-7532a1d604df)**
Soru Kökü: Diyaliz gereksinimi olan kronik böbrek hastalarının periodontal operasyon planlamalarında diş hekimlerinin karşılaşabileceği en majör sistemik risk kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (E): Viral hepatit bulaş riski ve sekonder kanama
Açıklama: Kronik böbrek hastalarında, diyaliz sürecinde kullanılan heparin nedeniyle ciddi bir ikincil (sekonder) kanama riski vardır (bu nedenle cerrahi işlemler diyalizden 1 gün sonra yapılmalıdır). Ayrıca sık diyalize giren ve kan ürünleriyle temas eden bu hastalarda Hepatit B ve C gibi viral hepatit enfeksiyonu taşıma riski genel popülasyona göre belirgin şekilde yüksektir.

---

### ÇİFT 109 (Benzerlik: 0.71)

**Soru 1 (ID: cb6c6b0e-339f-493d-98da-53f25dbdd7b8)**
Soru Kökü: Sekiz yaşında ve 30 kg ağırlığında olan, siyanotik doğumsal kalp hastalığı teşhisi bulunan bir çocuk hastaya kök yüzey düzleştirmesi planlanmaktadır. Hastanın herhangi bir ilaç alerjisi yoktur. Amerikan Kalp Birliği (AHA) kurallarına göre, bu hastaya işlemden 30-60 dakika önce oral yolla verilmesi gereken doğru antibiyotik ajanı ve toplam dozu aşağıdakilerden hangisidir?
Doğru Şık (C): 1500 mg Amoksisilin
Açıklama: Alerjisi olmayan çocuklarda standart İE profilaksisi oral Amoksisilindir. Dozaj 50 mg/kg olarak hesaplanır. 30 kg ağırlığındaki bir çocuk için 30 x 50 mg = 1500 mg Amoksisilin işlemden 30-60 dk önce verilmelidir. 2000 mg amoksisilin/ampisilin yetişkin dozudur.

**Soru 2 (ID: 9fd06c6e-3dfb-457c-a1bc-e9deb1f019d7)**
Soru Kökü: Daha önce İnfektif Endokardit (İE) atağı geçirmiş olan 38 yaşındaki kadın hastaya diş çekimi ve apse drenajı yapılacaktır. Anamnezinde penisiline karşı anafilaksi öyküsü bulunan ve oral ilaç kullanabilen bu hastaya profilaktik olarak hangi antibiyotik rejimi reçete edilmelidir?
Doğru Şık (A): İşlemden 30-60 dakika önce 100 mg oral Doksisiklin
Açıklama: Penisilin alerjisi olan ve oral ilaç alabilen yetişkin hastalarda Sefaleksin (2g), Azitromisin/Klaritromisin (500mg) veya Doksisiklin (100mg) kullanılabilir. Sefaleksin anafilaksi durumlarında çapraz reaksiyon riski nedeniyle tercih edilmeyebilir, Doksisiklin 100 mg oral alımı güvenli ve etkin bir alternatiftir. Amoksisilin ve Ampisilin penisilin alerjisi nedeniyle kesin kontrendikedir.

---

### ÇİFT 110 (Benzerlik: 0.71)

**Soru 1 (ID: 15366f06-74c4-40ab-9086-0c72223b277f)**
Soru Kökü: Sindirim sistemi hastalıklarının tedavisinde kullanılan ajanların bazılarının periodonsiyumu etkileyebilecek majör oral yan etkileri bulunur. Peptik ülser ve H. pylori tedavisi sürecinde gastrointestinal spazmı önlemek için kullanılan antikolinerjik ilaçların (ör: atropin) neden olduğu temel periodontal komplikasyon riski aşağıdakilerden hangisidir?
Doğru Şık (D): Tükürük salgısının baskılanmasına bağlı şiddetli ağız kuruluğu (kserostomi)
Açıklama: Atropin gibi sistemik antikolinerjik (parasempatolitik) ilaçlar, tükürük bezlerindeki muskarinik reseptörleri bloke ederek sekresyonu şiddetli şekilde durdurur. Bunun sonucunda ortaya çıkan ağız kuruluğu (kserostomi), tükürüğün mekanik yıkayıcı ve antibakteriyel etkisini ortadan kaldırır. Hızlı plak birikimine, fırsatçı patojenlerin artışına ve sonuç olarak periodontitis riskinin katlanmasına neden olur.

**Soru 2 (ID: 3a3106d6-576f-4467-818e-6b0dbc351727)**
Soru Kökü: Kronik peptik ülser rahatsızlığı nedeniyle uzun süredir gastrointestinal sistem ilaçları kullanan bir hastada, yaygın kök çürükleri ve periodontal hastalıkta alevlenme izlenmektedir. Hastanın kullandığı ilaçların içeriğindeki hangi spesifik madde, oluşturduğu yan etki (kserostomi) mekanizmasıyla bu patolojik ağız tablosuna zemin hazırlamaktadır?
Doğru Şık (D): Atropin
Açıklama: Peptik ülser ve bazı bağırsak rahatsızlıklarının tedavisinde kullanılan antispazmodik ilaçların çoğunun içeriğinde bulunan Atropin, antikolinerjik (parasempatolitik) etkisiyle tükürük bezi sekresyonunu güçlü bir şekilde baskılar. Meydana gelen şiddetli ağız kuruluğu (kserostomi), tükürüğün yıkama ve tamponlama fonksiyonunu ortadan kaldırarak çürük ve periodontal yıkımı hızlandırır.

---

### ÇİFT 111 (Benzerlik: 0.71)

**Soru 1 (ID: d13adc59-a734-4603-8ce7-23ee9de8e3a6)**
Soru Kökü: Bir dişin apeksi etrafında radyolusent bir lezyon saptanmış olmasına rağmen, yapılan vitalite testlerinde dişin vital olduğu gözlemlenmiştir. Bu durumun en olası nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Okluzal travma
Açıklama: Okluzal travmaya maruz kalan dişlerde ligament aralığında genişleme ve apeks çevresinde radyolusensi görülebilir, ancak pulpa canlılığını (vitalitesini) korur. Apikal apse veya primer endodontik lezyonlarda pulpa mutlaka nekrotiktir ve vitalite testlerine negatif yanıt verir. Bu nedenle radyolusensi varlığında pozitif vitalite yanıtı okluzal travmanın ayırt edici bulgusudur.

**Soru 2 (ID: b0499d40-fd79-4d19-b56a-c63c4745edd0)**
Soru Kökü: Periodontal apse ile akut apikal (endodontik) apse ayrıcı tanısında, hastanın klinik semptomları ve yapılan vitalite testlerinin sonuçları belirleyicidir. Bu iki akut tabloyu birbirinden ayıran en temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Akut apikal apsede pulpanın nonvital olması, periodontal apsede ise vital pulpa yanıtı alınabilmesi
Açıklama: Akut apikal apse, pulpanın total nekrozu sonucu gelişen periapikal bir enfeksiyon olduğu için etkilenen dişte pulpa canlılık testleri (elektrik, soğuk) kesinlikle negatif yanıt verir. Buna karşın primer periodontal apse, dişi destekleyen bağ dokusunun lateral sulkus sınırından kaynaklanan enfeksiyonudur; bu durumda pulpa kan desteği apeksten devam ettiği için diş genellikle vitalite testlerine sağlıklı, pozitif yanıt verir.

---

### ÇİFT 112 (Benzerlik: 0.71)

**Soru 1 (ID: 82d97ff1-4375-41e1-aa0b-a6533a9cded2)**
Soru Kökü: Klinik pratikte endo-perio lezyonlarının ayırıcı tanısında lezyonun orijinini bulmak hayati önem taşır. Bağımsız (eşzamanlı) endodontik ve periodontik lezyonu olan bir dişin klinik değerlendirme tablosunda aşağıdakilerden hangisi **beklenmez**?
Doğru Şık (C): Dişin pulpa testine karşı güçlü vitalite göstermesi
Açıklama: Bağımsız endo-perio lezyonunda aynı dişte hem ilerlemiş bir periodontal hastalık hem de bağımsız bir pulpa nekrozu (pulpal lezyon) mevcuttur. Bu nedenle diş nonvitaldir. Pulpal lezyonun varlığında güçlü bir vitalite cevabı beklenmez; aksine diş elektrik veya soğuk testlerine hiçbir yanıt vermez.

**Soru 2 (ID: b0499d40-fd79-4d19-b56a-c63c4745edd0)**
Soru Kökü: Periodontal apse ile akut apikal (endodontik) apse ayrıcı tanısında, hastanın klinik semptomları ve yapılan vitalite testlerinin sonuçları belirleyicidir. Bu iki akut tabloyu birbirinden ayıran en temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Akut apikal apsede pulpanın nonvital olması, periodontal apsede ise vital pulpa yanıtı alınabilmesi
Açıklama: Akut apikal apse, pulpanın total nekrozu sonucu gelişen periapikal bir enfeksiyon olduğu için etkilenen dişte pulpa canlılık testleri (elektrik, soğuk) kesinlikle negatif yanıt verir. Buna karşın primer periodontal apse, dişi destekleyen bağ dokusunun lateral sulkus sınırından kaynaklanan enfeksiyonudur; bu durumda pulpa kan desteği apeksten devam ettiği için diş genellikle vitalite testlerine sağlıklı, pozitif yanıt verir.

---

### ÇİFT 113 (Benzerlik: 0.71)

**Soru 1 (ID: 9743e6ad-ea11-4ff9-b047-70d7c7f59571)**
Soru Kökü: Geçirilmiş kapak replasmanı nedeniyle İnfektif Endokardit gelişimi açısından yüksek risk grubunda bulunan hastaya sistemik antibiyotik profilaksisi uygulanmıştır. Kılavuzlara göre, bu hastada periodontal sondlama dahi yapılmadan hemen önce rutin ağız içi bakteri yükünü minimize etmek amacıyla tavsiye edilen lokal koruyucu uygulama aşağıdakilerden hangisidir?
Doğru Şık (E): Tüm mukozal yüzeylerdeki bakteri sayısını düşürmek için işlem öncesi klorheksidin ile gargara yaptırılması
Açıklama: İE profilaksisi sadece sistemik antibiyotik kullanımını içermez. Bakteriyemi potansiyelini fiziksel olarak da düşürmek hedeflenir. Bu nedenle sondlama dahil tüm kanamalı ve invaziv işlemlerden hemen önce hastaya %0.12 veya %0.2'lik klorheksidin gargara yaptırılarak oral mukozadaki ve plaktaki başlangıç bakteri yükü azaltılır. Bu basit adım, dolaşıma katılacak mikroorganizma miktarını dramatik olarak düşürür.

**Soru 2 (ID: 4ae8f3d7-0a89-4595-b880-1b4f2469d5c3)**
Soru Kökü: Kırk beş yaşındaki erkek hasta protez kalp kapağı taşımaktadır ve penisilin alerjisi bulunmamaktadır. Ancak hasta gastrointestinal bir rahatsızlık nedeniyle geçici olarak ağızdan hiçbir gıda ve ilaç alamamaktadır. Bu hastaya periodontal cerrahi öncesi uygulanması gereken parenteral (IM veya IV) profilaksi ajanı ve dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 2 g IM veya IV Ampisilin
Açıklama: Oral ilaç alamayan ve penisilin alerjisi OLMAYAN bir yetişkinde standart parenteral profilaksi ajanı 2 g IM veya IV Ampisilindir. (Sefazolin/Seftriakson 1g de kullanılabilir ancak penisilin grubu tercih edilecekse doğrudan Ampisilin 2g temeldir). Oral ajanlar (amoksisilin, klaritromisin) hasta yutamadığı için elenir.

---

### ÇİFT 114 (Benzerlik: 0.71)

**Soru 1 (ID: d0f156e0-3e71-44e2-81d9-8bc28bbd4225)**
Soru Kökü: Doğumsal siyanotik kalp hastalığı bulunan ve Amerikan Kalp Birliği (AHA) kriterlerine göre enfektif endokardit gelişimi açısından yüksek risk kategorisinde yer alan 10 yaşındaki (30 kg) bir çocuk hastaya sondlama ve başlangıç periodontal tedavisi uygulanacaktır. Hastanın penisilin alerjisi bulunmadığına ve ilaçları oral yolla alabildiğine göre uygulanması gereken **doğru profilaksi rejimi ve dozu** aşağıdakilerden hangisidir?
Doğru Şık (B): İşlemden 30-60 dakika önce 50 mg/kg (toplam 1500 mg) oral Amoksisilin
Açıklama: Penisilin alerjisi olmayan ve oral ilaç kullanabilen riskli çocuk hastalarda AHA standart profilaksi protokolü; işlemden 30 ila 60 dakika önce oral yolla 50 mg/kg Amoksisilin uygulamasıdır. Yetişkin dozu ise aynı zamanlamayla tek doz 2 gram oral Amoksisilin'dir.

**Soru 2 (ID: 9ee40be8-0cc6-49a0-b2ba-6d08a120aeee)**
Soru Kökü: Penisilin alerjisi olan ve oral yolla ilaç kullanabilen erişkin bir hastada, mukozayı perfore edecek bir periodontal cerrahi işlemden 30-60 dakika önce uygulanması gereken İE profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin 500 mg oral
Açıklama: Hasta oral ilaç alabiliyorsa ve amoksisilin/penisilin alerjisi varsa alternatif oral rejimler tercih edilir: Sefaleksin (2 gr), Azitromisin veya Klaritromisin (500 mg) ya da Doksisiklin (100 mg). Amoksisilin ilk seçenektir ancak alerji durumunda kontrendikedir. Sefazolin ve Ampisilin parenteral (IM/IV) yolla, oral ilaç alamayan hastalarda kullanılır.

---

### ÇİFT 115 (Benzerlik: 0.71)

**Soru 1 (ID: d0f156e0-3e71-44e2-81d9-8bc28bbd4225)**
Soru Kökü: Doğumsal siyanotik kalp hastalığı bulunan ve Amerikan Kalp Birliği (AHA) kriterlerine göre enfektif endokardit gelişimi açısından yüksek risk kategorisinde yer alan 10 yaşındaki (30 kg) bir çocuk hastaya sondlama ve başlangıç periodontal tedavisi uygulanacaktır. Hastanın penisilin alerjisi bulunmadığına ve ilaçları oral yolla alabildiğine göre uygulanması gereken **doğru profilaksi rejimi ve dozu** aşağıdakilerden hangisidir?
Doğru Şık (B): İşlemden 30-60 dakika önce 50 mg/kg (toplam 1500 mg) oral Amoksisilin
Açıklama: Penisilin alerjisi olmayan ve oral ilaç kullanabilen riskli çocuk hastalarda AHA standart profilaksi protokolü; işlemden 30 ila 60 dakika önce oral yolla 50 mg/kg Amoksisilin uygulamasıdır. Yetişkin dozu ise aynı zamanlamayla tek doz 2 gram oral Amoksisilin'dir.

**Soru 2 (ID: ba0c4ba7-0d13-4261-9904-ecbfcd750c02)**
Soru Kökü: İnfektif Endokardit (İE) profilaksisi gereken, oral ilaç kullanamayan ancak penisilin grubuna alerjisi olmadığı bilinen yetişkin bir hastada, Ampisilin yerine alternatif olarak kullanılabilecek sefalosporin grubu ajan ve doğru dozu aşağıdakilerden hangisidir?
Doğru Şık (D): 1 g IM veya IV Sefazolin veya Seftriakson
Açıklama: Oral ilaç alamayan yetişkin hastalarda Ampisilin (2g IM/IV) kullanılabileceği gibi alternatif olarak 1 g IM veya IV Sefazolin veya Seftriakson da tercih edilebilir. Seçenek A ve B oral formdur (hasta oral alamıyor), Azitromisin ve Doksisiklin bu spesifik endikasyonda (alerjisiz, oral alamayan) primer tercih değildir.

---

### ÇİFT 116 (Benzerlik: 0.70)

**Soru 1 (ID: 648643bf-5c13-477c-a702-6dd892f1f9ad)**
Soru Kökü: Hareketli bölümlü protez planlamasında periodontal dokuların korunmasına yönelik uyulması gereken mekanik kurallar düşünüldüğünde, aşağıdaki yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (D): Ön dişlere konacak tırnaklar dişlerin eğimli yüzeylerine konumlandırılarak okluzal tork oluşturulmalıdır.
Açıklama: Ön dişlere (özellikle kaninlere) konacak tırnaklar kesinlikle dişlerin eğimli (inkline) palatinal yüzeylerine doğrudan yerleştirilmemelidir. Eğimli yüzeye gelen okluzal kuvvet dişi vestibüle doğru devirici bir ortodontik tork yaratır. Bu yüzden kuvveti uzun eksene paralel iletmek ve protezin dişetine batmasını engellemek için dişe önceden düz tabanlı singulum veya insizal tırnak yuvaları (rest seat) açılmalıdır.

**Soru 2 (ID: e3c2e064-f61f-470a-ac94-bc9669c3e405)**
Soru Kökü: Anterior dişlerin hareketli bölümlü protezlerde destek olarak kullanıldığı bir vakada, protezden gelen yüklerin periodonsiyumda yıkıma yol açmasını engellemek hedeflenmektedir. Bu amaçla okluzal tırnakların eğimli yüzeyler yerine **singulum veya insizal bölgeye** yerleştirilmesinin temel mekanik gerekçesi aşağıdakilerden hangisidir?
Doğru Şık (B): Kuvvetlerin dişin uzun eksenine paralel iletilmesini sağlayarak lateral devrilmeyi önlemek
Açıklama: Tırnaklar dişin eğimli yüzeylerine yerleştirilirse, kuvvet uygulandığında protez kayma eğilimi gösterir ve dişe yatay (ortodontik benzeri) zararlı kuvvetler iletir. Tırnak yuvalarının singulum veya insizal kenarda dişe dik açı yapacak şekilde (uzun eksene paralel) hazırlanması, yükün periodontal ligament liflerince optimal karşılanmasını sağlar.

---

### ÇİFT 117 (Benzerlik: 0.70)

**Soru 1 (ID: e633bbb9-4f05-4241-a40e-1e315688fb4e)**
Soru Kökü: Faz-1 periodontal tedavisi tamamlanmış ancak halen kök yüzeyinde belirgin vertikal kemik defektleri bulunan bir hastada ortodontik diş hareketi uygulanmasının periodonsiyum açısından taşıdığı klinik risk nedir?
Doğru Şık (B): Uygulanan devirme (eğilme) veya gövdesel hareketlerin derin vertikal defekt içindeki bağ dokusu kaybını hızlandırabilmesi
Açıklama: Vertikal kemik defekti olan dişlere yönlendirilen ortodontik eğilme, intrüzyon veya tümüyle gövdesel hareketler, kuvvetin defekt tabanına yoğunlaşmasına neden olarak mevcut bağ dokusu ve kemik kaybının daha da derinleşmesine (periodontal yıkıma) yol açabilir. Bu nedenle vertikal defekti olan hastalarda ortodontik tedavi öncesi defektin rejeneratif veya rezektif olarak stabilizasyonu ve tedavi sırasında sıkı kontrol şarttır.

**Soru 2 (ID: 44260d49-971e-41d8-b018-60c52d2448a0)**
Soru Kökü: İleri derecede kemik kaybı yaşamış ancak inflamasyonu kontrol altına alınmış bir periodontal hastada ortodontik tedavi planlanırken, hekimin karşılaşabileceği en majör biyomekanik sorun aşağıdakilerden hangisidir?
Doğru Şık (E): Destek doku yetersizliğine bağlı olarak yetersiz ankraj ve tedavi sonrası zayıf retansiyon olasılığı
Açıklama: Periodontal yıkım nedeniyle alveol kemik desteği azalmış dişlerin direnç merkezi apikale kayar ve bu dişler ortodontik hareket için kuvvet altyapısı olarak (ankraj) zayıftırlar. Kemik azaldığı için tedavi sonrası dişlerin eski pozisyonlarına dönme eğilimi yüksektir, bu da yetersiz ankraj ve yetersiz retansiyon problemini doğurur. Kemik kaybı dişlerin hareket etmesini engellemez, aksine kontrolsüz hareket riskini artırır.

---

### ÇİFT 118 (Benzerlik: 0.70)

**Soru 1 (ID: 345f2088-25e3-484b-9cb9-ea2f00b1af2a)**
Soru Kökü: Klinik muayenesinde yaygın derin periodontal cepler, sondlamada kanama ve artmış diş mobilitesi saptanan 52 yaşındaki bir hastaya geniş çaplı sabit protez yapımı planlanmaktadır. Protetik işlemlerden önce bu hastadaki periodontal ceplerin elimine edilmesinin **en temel** fonksiyonel gerekçesi aşağıdakilerden hangisidir?
Doğru Şık (B): Cep kaynaklı ağrı ve mobiliteyi ortadan kaldırarak protezin fonksiyon ve çiğneme verimliliğini sağlamak
Açıklama: Periodontal ceplerde meydana gelen ağrı ve dişlerdeki mobilite, doğrudan protezin stabilizasyonunu bozarak hastanın çiğneme fonksiyonunu etkiler. Estetik veya doku konturu sekonder önem taşırken, temel biyomekanik sorun sallanan destek dişin fonksiyonu karşılayamamasıdır. Bu nedenle ceplerin eliminasyonu protezin fonksiyonel başarısı için primer şarttır.

**Soru 2 (ID: ef6daf35-f823-4bc0-937f-9bf819e662b1)**
Soru Kökü: Sabit köprü protezi kullanan 45 yaşındaki hastanın anamnezinde, köprünün yapıldığı dönemde diş etlerinde şiddetli kanama ve şişlik olduğu, ancak periodontal tedavi yapılmadan doğrudan ölçü alındığı öğrenilmektedir. Mevcut tabloda köprünün kısa sürede başarısız olmasında iltihaplı periodonsiyumun yarattığı **en belirleyici** biyomekanik dezavantaj aşağıdakilerden hangisidir?
Doğru Şık (A): İltihaplı periodonsiyumun protezden gelen okluzal kuvvetleri karşılayacak destek kapasitesini azaltması
Açıklama: Periodonsiyumun iltihaplı olması, sağlıklı periodontal ligamentin stres kırıcı fizyolojik yapısını bozar ve destek dişin yük taşıma kapasitesini doğrudan azaltır. Kapasitesi düşen diş, protezden gelen çiğneme kuvvetlerine karşı direnç gösteremediği için ağızda kalma süresi kısalır. Hiperplazi veya siman çözünmesi biyomekanik yük başarısızlığının temel nedeni değildir.

---

### ÇİFT 119 (Benzerlik: 0.70)

**Soru 1 (ID: 9fd06c6e-3dfb-457c-a1bc-e9deb1f019d7)**
Soru Kökü: Daha önce İnfektif Endokardit (İE) atağı geçirmiş olan 38 yaşındaki kadın hastaya diş çekimi ve apse drenajı yapılacaktır. Anamnezinde penisiline karşı anafilaksi öyküsü bulunan ve oral ilaç kullanabilen bu hastaya profilaktik olarak hangi antibiyotik rejimi reçete edilmelidir?
Doğru Şık (A): İşlemden 30-60 dakika önce 100 mg oral Doksisiklin
Açıklama: Penisilin alerjisi olan ve oral ilaç alabilen yetişkin hastalarda Sefaleksin (2g), Azitromisin/Klaritromisin (500mg) veya Doksisiklin (100mg) kullanılabilir. Sefaleksin anafilaksi durumlarında çapraz reaksiyon riski nedeniyle tercih edilmeyebilir, Doksisiklin 100 mg oral alımı güvenli ve etkin bir alternatiftir. Amoksisilin ve Ampisilin penisilin alerjisi nedeniyle kesin kontrendikedir.

**Soru 2 (ID: 121cba99-848f-4f28-8b08-504314b34b26)**
Soru Kökü: Hem penisilin alerjisi olan hem de geçirdiği bir oral operasyon nedeniyle ağızdan hiçbir ilaç yutamayacak durumda olan yüksek riskli bir kardiyak hastada, invaziv periodontal işlemden önce uygulanması gereken en güvenli profilaktik protokol aşağıdakilerden hangisidir?
Doğru Şık (B): 1 g IM veya IV Sefazolin veya Seftriakson uygulanması
Açıklama: Hasta oral ilaç alamıyor ve penisilin alerjisi varsa (ve anafilaksi tipinde değilse sefalosporinler kullanılabilir) AHA kılavuzuna göre standart yaklaşım 1 g Sefazolin veya Seftriakson'un IM veya IV olarak uygulanmasıdır. Ampisilin, penisilin alerjisi olduğu için ölümcül anaflaksiye yol açabilir; sadece lokal Klorheksidin ile bakteriyemi engellenemez.

---

### ÇİFT 120 (Benzerlik: 0.70)

**Soru 1 (ID: 71023ec1-9e22-41aa-9820-d35c92b75aa8)**
Soru Kökü: Otuz dört yaşındaki kadın hasta, çapraşık dişlerinin düzeltilmesi amacıyla ortodonti kliniğine sevk ediliyor. Yapılan periodontal muayenede Faz 1 (başlangıç) tedavisinin uygulandığı ancak yaygın sondlamada kanama ve 5-6 mm'lik aktif ceplerin sebat ettiği görülüyor. Bu aşamada hastaya ortodontik tedavi başlanmasının kesin kontrendike olmasının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Dişeti iltihabı varlığında ortodontik hareketin plağı subgingival alana iterek periodontal ataşman kaybını artırması
Açıklama: Ortodontik tedavinin en önemli kontrendikasyonu, aktif ve iyileşmemiş dişeti iltihabının varlığıdır. İltihaplı ve derin cepli bir dişe ortodontik kuvvet uygulandığında, diş hareketi esnasında supragingival plak subgingival alana itilir ve mikrobiyal denge bozularak kemik yıkımı ve ataşman kaybı şiddetlenir. Ortodontik mekanikler ankiloz yaratmaz veya kemik yapımını iltihaplı alanda artırmaz.

**Soru 2 (ID: 44260d49-971e-41d8-b018-60c52d2448a0)**
Soru Kökü: İleri derecede kemik kaybı yaşamış ancak inflamasyonu kontrol altına alınmış bir periodontal hastada ortodontik tedavi planlanırken, hekimin karşılaşabileceği en majör biyomekanik sorun aşağıdakilerden hangisidir?
Doğru Şık (E): Destek doku yetersizliğine bağlı olarak yetersiz ankraj ve tedavi sonrası zayıf retansiyon olasılığı
Açıklama: Periodontal yıkım nedeniyle alveol kemik desteği azalmış dişlerin direnç merkezi apikale kayar ve bu dişler ortodontik hareket için kuvvet altyapısı olarak (ankraj) zayıftırlar. Kemik azaldığı için tedavi sonrası dişlerin eski pozisyonlarına dönme eğilimi yüksektir, bu da yetersiz ankraj ve yetersiz retansiyon problemini doğurur. Kemik kaybı dişlerin hareket etmesini engellemez, aksine kontrolsüz hareket riskini artırır.

---

### ÇİFT 121 (Benzerlik: 0.70)

**Soru 1 (ID: 648643bf-5c13-477c-a702-6dd892f1f9ad)**
Soru Kökü: Hareketli bölümlü protez planlamasında periodontal dokuların korunmasına yönelik uyulması gereken mekanik kurallar düşünüldüğünde, aşağıdaki yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (D): Ön dişlere konacak tırnaklar dişlerin eğimli yüzeylerine konumlandırılarak okluzal tork oluşturulmalıdır.
Açıklama: Ön dişlere (özellikle kaninlere) konacak tırnaklar kesinlikle dişlerin eğimli (inkline) palatinal yüzeylerine doğrudan yerleştirilmemelidir. Eğimli yüzeye gelen okluzal kuvvet dişi vestibüle doğru devirici bir ortodontik tork yaratır. Bu yüzden kuvveti uzun eksene paralel iletmek ve protezin dişetine batmasını engellemek için dişe önceden düz tabanlı singulum veya insizal tırnak yuvaları (rest seat) açılmalıdır.

**Soru 2 (ID: 0c043dd7-2c2d-458b-8fd2-0be2194ec7e9)**
Soru Kökü: Restorasyon marjinlerinin yerleşimi ve şekillendirilmesi ile ilgili periodontal prensiplere göre aşağıdaki klinik uygulamalardan hangisi **yanlıştır**?
Doğru Şık (D): Under-contour (az konturlu) kronlar diş eti dokularını koruyarak kendi kendine temizlenmeyi maksimuma çıkarır.
Açıklama: Az konturlu (under-contour) kronlar sanılanın aksine koruyucu değildir; çiğneme sırasında gıda maddelerinin sapma açısını bozarak doğrudan diş etine çarpmasına ve fiziksel gingival yaralanmalara neden olur. Aşırı konturlu kronlar ise doku baskısı ve plak retansiyonu yaratır; bu nedenle ideal, dişin fizyolojik profilini taklit eden dengeli konturdur.

---

### ÇİFT 122 (Benzerlik: 0.70)

**Soru 1 (ID: a968ab65-defa-4e93-9c4c-0d111fae8de8)**
Soru Kökü: Periodontal enfeksiyonlar, hamilelik sürecinde genitoüriner bir enfeksiyon odağı olmaksızın dahi erken doğum ve düşük doğum ağırlığı için majör bir risk faktörü oluştururlar. Bu patolojik kaskadda rol oynadığı tespit edilen ve amniyon sıvısında en sık izole edilen periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (D): Fusobacterium nucleatum
Açıklama: Fusobacterium nucleatum, subgingival plaktan amniyon sıvısına hematojen yolla ulaşabilen ve burada izole edilen en yaygın periodontal bakteridir. Bu patojenin varlığı, inflamatuar bir immün yanıt tetikleyerek lokal PGE2 ve PGF2-alfa seviyelerinde artışa yol açar; bu artan mediatörler ise myometrial kontraksiyonları başlatarak servikal dilatasyona ve sonuç olarak erken doğuma neden olurlar.

**Soru 2 (ID: a792ec56-9620-404e-8638-54b84d8db04e)**
Soru Kökü: Erken doğum ve düşük doğum ağırlıklı bebek dünyaya getiren annelerin periodontal klinik ve mikrobiyolojik özellikleri incelendiğinde, sağlıklı gebelere kıyasla aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (E): Subgingival plakta Streptococcus mutans dominansı
Açıklama: Erken doğum yapan annelerin subgingival plak florasında sağlıklı gebelere kıyasla A. actinomycetemcomitans, P. gingivalis ve T. denticola gibi majör periodontal patojenlerin miktarı artmış olarak bulunur. Aynı zamanda bu hastalarda daha fazla ataşman kaybı izlenir ve amniyon sıvısında F. nucleatum sıkça izole edilir. S. mutans ise bir dental çürük patojeni olup, bu spesifik patolojik inflamatuvar kaskadın bir belirteci veya başlatıcısı değildir.

---

### ÇİFT 123 (Benzerlik: 0.70)

**Soru 1 (ID: f3deeb9d-9d9b-4d2a-b73b-5952ab45309c)**
Soru Kökü: Doğumsal kalp hastalıkları alt grubunda yer alan hastalarda, İnfektif Endokardit (İE) açısından yüksek risk taşıdığı için dental işlemler öncesi antibiyotik profilaksisi gerektiren spesifik anatomik/cerrahi durum aşağıdakilerden hangisidir?
Doğru Şık (B): Cerrahi onarım uygulanmamış, palyatif şantlar veya kondüitler bulunduran siyanotik doğumsal kalp hastalıkları
Açıklama: Doğumsal kalp hastalıkları içinde profilaksi sadece belirli şartlarda önerilir: Cerrahi onarım görmemiş palyatif şantlı siyanotik hastalıklar, tam onarım yapılmış ancak ilk 6 ayını doldurmamış vakalar veya onarım materyali etrafında rezidüel defekt kalan vakalar yüksek risklidir. Tamamen iyileşmiş ve kalıntısız onarımlar (ilk 6 aydan sonra) veya kalp pili (pacemaker) taşıyan hastalar endokardit profilaksisi gerektirmez.

**Soru 2 (ID: bec09423-354f-4da2-9848-6d1cbfd8e66e)**
Soru Kökü: Sistemik hastalıkları olan hastaların periodontal tedavilerinde antibiyotik profilaksisi yaklaşımıyla ilgili aşağıdaki durumlardan hangisi İnfektif Endokardit (İE) açısından yüksek risk taşıyan ve AHA'ya göre profilaksi önerilen gruplar arasında **yer almaz**?
Doğru Şık (D): Komplike olmayan koroner arter bypass greft (CABG) operasyonu geçirmiş hastalar
Açıklama: Amerikan Kalp Birliği (AHA) kılavuzlarına göre, komplike olmayan koroner arter bypass operasyonu geçirmiş hastalarda kardiyolog tarafından aksine bir uyarı yapılmadığı sürece rutin infektif endokardit profilaksisi uygulanmasına gerek yoktur. Geçirilmiş İE, protez kapak varlığı ve siyanotik doğumsal kalp hastalıkları yüksek risk grubundadır ve mukozayı perfore eden tüm işlemlerde profilaksi zorunludur. Yanlış profilaksi uygulaması, dirençli bakteri gelişimine yol açan bir klinik hatadır.

---

### ÇİFT 124 (Benzerlik: 0.70)

**Soru 1 (ID: 83be7d24-ae6b-424f-91a7-555cc018803b)**
Soru Kökü: Kırk yaşında kadın hasta şiddetli, uykudan uyandıran zonklayıcı ağrı ve dişetinde şişlik şikayeti ile kliniğe başvuruyor. Muayenede nekrotik pulpalı bir dişte oluşan akut apikal apsenin, kemiği perfore ederek periodontal ligament veya dişeti sulkusu içinde kök boyunca ilerlediği ve daha önceden var olan derin bir periodontal cebin içine boşaldığı (drene olduğu) tespit ediliyor. Bu klinik tabloya verilen isim aşağıdakilerden hangisidir?
Doğru Şık (B): Gerçek kombine lezyon (Perio-Endo)
Açıklama: Gerçek kombine lezyon (Perio-Endo), spesifik olarak apeksten kaynaklanan endodontik bir enfeksiyonun (apse veya granülom) kuronale doğru genişleyerek, halihazırda var olan kronik ve geniş tabanlı bir periodontal cep ile fiziksel olarak birleşmesi sonucunda ortaya çıkar. Bu durumda lezyon hem endodontik hem de periodontal komponentlerin özelliklerini bir arada sergiler.

**Soru 2 (ID: 6e8824cd-d746-4190-8992-0aedfa1db70e)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, sol üst birinci küçük azı dişinde gece uykudan uyandıran, zonklayıcı ve şiddetli ağrı şikayetiyle başvuruyor. Klinik muayenede diş perküsyon testine aşırı hassas bulunuyor ve ilgili bölgede mukobukkal katlantıda belirgin bir ödem izleniyor. Hastadaki bu dayanılmaz ağrının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Akut apikal apsede iltihabın periodontal ligamente ulaşıp kemik perforasyonuyla periostu yükseltmesi
Açıklama: Akut apikal apselerde enfeksiyon kök ucundan periodontal ligamente, oradan da alveolar kemiği perfore ederek periost altına yayılır; periostun kemikten ayrılıp yükselmesi kapalı alanda aşırı basınca neden olarak şiddetli zonklayıcı ağrı yaratır. Sulkus epitelindeki ülserasyon veya sement erozyonu kronik periodontitisin özellikleridir ve bu derece akut/şiddetli ağrı üretmezler. Hasta, drenaj sağlanana kadar (fistül açılana dek) bu şiddetli ağrıyı duymaya devam eder.

---

### ÇİFT 125 (Benzerlik: 0.70)

**Soru 1 (ID: 4ed0571a-5b12-4c83-9099-d427aebcd9e7)**
Soru Kökü: Periodontal destek kaybına bağlı olarak anterior dişlerde gelişen patolojik migrasyon ve diastemaların ortodontik tedavi ile kapatılması planlanmaktadır. Bu kombine tedavinin periodonsiyuma sağlayacağı yararlar arasında aşağıdakilerden hangisi **değildir**?
Doğru Şık (D): Dikey boyutun (vertikal istirahat aralığının) artırılarak temporomandibular eklemin dekomprese edilmesi
Açıklama: Diastemaların kapatılması ve migrasyonun ortodontik olarak düzeltilmesi estetiği sağlar, food impaction'ı engeller, papillaların geri kazanımına yardımcı olur ve restoratif/implant işlemleri kolaylaştırır. Ancak sadece anterior diastema kapatılması ile dikey okluzal boyut artırılamaz; dikey boyut artışı ortodontik veya protetik posterior yükseltmelerle sağlanır ve primer amacı TMJ dekompresyonu değil okluzal ilişkileri kurmaktır.

**Soru 2 (ID: 5f1bdeda-7f6b-40cb-ba29-ebaaed06e928)**
Soru Kökü: Erişkin hastalarda periodontal tedaviye destek amacıyla uygulanan ortodontik tedavinin bazı durumlar için sınırlamaları vardır. Aşağıdakilerden hangisi periodontolojide ortodontik müdahale gerektiren bir endikasyon **değildir**?
Doğru Şık (D): Periodontal yıkım nedeniyle yeterli ankarajın kalmadığı devrilmiş dişleri hareket ettirmek
Açıklama: Ortodontik diş hareketi sağlamak için reaksiyon kuvvetini karşılayacak sağlam dayanaklara (ankaraj) ihtiyaç vardır. İleri düzeyde kemik kaybı olan, ankaraj değeri yetersiz periodontal hastalıklı dişlerde ortodontik tedavi kontrendikedir, endikasyon değildir. Diğer şıkların tümü ortodontinin periodontolojiye olumlu katkı sağladığı kesin tedavi endikasyonlarıdır.

---

### ÇİFT 126 (Benzerlik: 0.70)

**Soru 1 (ID: 3f441704-59fd-49ab-a509-5450af8c809c)**
Soru Kökü: Ağızda aniden ortaya çıkan ve lokalize ödem yapan apselerin tanısında radyografik iz sürücüler (gutta-percha) kullanılır. Klinik muayenesinde şiddetli perküsyon hassasiyeti ve gece ağrısı olmayan, sadece diş eti üzerinde lokalize bir şişlik hisseden hastanın fistülünden gutta-percha gönderildiğinde aşağıdakilerden hangisinin gerçekleşmesi **en güçlü** şekilde periodontal apseyi işaret eder?
Doğru Şık (C): Gutta-perchanın periodontal ceple bağlantı kurarak cep sınırları (kök yan yüzeyi) içerisinde kalması
Açıklama: Periodontal apsede drenaj yolu mevcut bir periodontal cebe açılır. Bu nedenle fistülden yerleştirilen gutta-percha apekse (kök ucuna) kadar inmez; kökün yan yüzeyindeki lateral cep defektinde durur. Endodontik apsede ise gutta-percha enfeksiyonun kökeni olan foramen apikale noktasına kadar kesintisiz ilerler.

**Soru 2 (ID: 45a0f46b-11cb-489b-bf2e-e329b4886418)**
Soru Kökü: Akut apikal apsenin periodonsiyum içindeki yayılım patterni incelendiğinde, apsenin kemiği perfore ederek oluşturduğu fistül yolunun anatomik olarak en sık izlediği rota aşağıdakilerden hangisidir?
Doğru Şık (D): Dişin apeksinden lateral olarak uzanarak bukkal kortikal plağı geçip bukkale yönelmesi
Açıklama: Endodontik kökenli akut apikal apselerde fistül yolu genellikle dişin apeksinden bukkale doğru uzanır, çünkü bukkal kemik korteksi palatinal veya lingual kemiğe göre çok daha incedir ve direncin en az olduğu yolu oluşturur. Palatinal ve lingual fistülizasyonlar anatomik kalınlık nedeniyle bukkal çıkışa kıyasla çok daha nadir görülür.

---

### ÇİFT 127 (Benzerlik: 0.70)

**Soru 1 (ID: f19a83fd-742f-4218-a974-4a71c71c6af6)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, sağ alt birinci büyük azı dişinin dişetinde hafif şişlik ve fırçalama sırasında rahatsızlık şikayetiyle başvuruyor. Klinik muayenede dişte derin bir periodontal cep tespit ediliyor, ancak spontan şiddetli ağrı bulunmuyor. Radyografide apikal lezyon izlenmiyor. Bu vakada lezyonun şiddetli ağrıya neden olmamasının en olası patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Apse formasyonunun sulkus içinde bağ dokusu ataşmanı düzeyinde gelişmesi ve periostu yükseltmemesi
Açıklama: Periodontal apseler genellikle şiddetli ağrılı lezyonlar değildir çünkü pürülan birikim periodontal cep içinde, bağ dokusu ataşmanı düzeyinde lokalize olur ve kemik üzerindeki periostu kemikten ayırıp yükseltmez. Akut apikal apselerde ise enfeksiyon doğrudan kemik içine ilerleyip periostu yükselttiği için basınç artar ve zonklayıcı, şiddetli bir ağrı ortaya çıkar. Pulpal drenaj veya lateral kanal tutulumu bu spesifik ağrı farkını açıklayan primer mekanizma değildir.

**Soru 2 (ID: f759fdef-14d9-4245-8779-e590f07f7e0a)**
Soru Kökü: Dental kaynaklı ağrıların teşhisinde, ağrının spontan olarak başlaması, uykudan uyandırması ve alınan sıradan analjeziklerle geçmemesi belirgindir. Bu semptomları gösteren patolojik durum aşağıdakilerden hangisi ile en çok uyumludur?
Doğru Şık (B): Akut evredeki primer pulpal/endodontik enfeksiyon
Açıklama: Endodontik ağrının karakteristiği, pulpa odası içindeki iltihabi ödemin kapalı bir kutuda yarattığı şiddetli basınç nedeniyle analjeziklere dirençli, nabız atışı tarzında zonklayıcı ve hastayı gece uykusundan uyandıran nitelikte olmasıdır. Periodontal kaynaklı ağrılar (apse hariç) çoğunlukla daha hafif, künt karakterdedir ve analjezik kullanımına oldukça iyi yanıt vererek baskılanabilir.

---

### ÇİFT 128 (Benzerlik: 0.70)

**Soru 1 (ID: 2d8141ab-e83b-472b-8cb2-d700eb218945)**
Soru Kökü: İnfektif Endokardit (İE) gelişme riski yüksek olan bir hastanın periodontal idamesi sırasında yapılan işlemlerden hangisi düşük riskli kabul edilerek antibiyotik profilaksisi gerektirmeyen (AHA kriterlerine göre) bir prosedürdür?
Doğru Şık (D): Sadece supragingival diş taşı temizliği (scaling) ve profilaksi yapılması
Açıklama: Sadece kuron yüzeyinden eklentilerin uzaklaştırıldığı supragingival scaling ve lastik kap/fırça ile yapılan profilaksi işlemleri dişetini penetre etmediği için düşük riskli işlemler grubundadır ve profilaksi gerektirmez. Apse drenajı, subgingival klemp yerleşimi veya implant işlemleri kanama yarattığı için yüksek risklidir.

**Soru 2 (ID: 9743e6ad-ea11-4ff9-b047-70d7c7f59571)**
Soru Kökü: Geçirilmiş kapak replasmanı nedeniyle İnfektif Endokardit gelişimi açısından yüksek risk grubunda bulunan hastaya sistemik antibiyotik profilaksisi uygulanmıştır. Kılavuzlara göre, bu hastada periodontal sondlama dahi yapılmadan hemen önce rutin ağız içi bakteri yükünü minimize etmek amacıyla tavsiye edilen lokal koruyucu uygulama aşağıdakilerden hangisidir?
Doğru Şık (E): Tüm mukozal yüzeylerdeki bakteri sayısını düşürmek için işlem öncesi klorheksidin ile gargara yaptırılması
Açıklama: İE profilaksisi sadece sistemik antibiyotik kullanımını içermez. Bakteriyemi potansiyelini fiziksel olarak da düşürmek hedeflenir. Bu nedenle sondlama dahil tüm kanamalı ve invaziv işlemlerden hemen önce hastaya %0.12 veya %0.2'lik klorheksidin gargara yaptırılarak oral mukozadaki ve plaktaki başlangıç bakteri yükü azaltılır. Bu basit adım, dolaşıma katılacak mikroorganizma miktarını dramatik olarak düşürür.

---

### ÇİFT 129 (Benzerlik: 0.70)

**Soru 1 (ID: 2d8141ab-e83b-472b-8cb2-d700eb218945)**
Soru Kökü: İnfektif Endokardit (İE) gelişme riski yüksek olan bir hastanın periodontal idamesi sırasında yapılan işlemlerden hangisi düşük riskli kabul edilerek antibiyotik profilaksisi gerektirmeyen (AHA kriterlerine göre) bir prosedürdür?
Doğru Şık (D): Sadece supragingival diş taşı temizliği (scaling) ve profilaksi yapılması
Açıklama: Sadece kuron yüzeyinden eklentilerin uzaklaştırıldığı supragingival scaling ve lastik kap/fırça ile yapılan profilaksi işlemleri dişetini penetre etmediği için düşük riskli işlemler grubundadır ve profilaksi gerektirmez. Apse drenajı, subgingival klemp yerleşimi veya implant işlemleri kanama yarattığı için yüksek risklidir.

**Soru 2 (ID: bd89ea83-63b1-4ca1-91b4-80b8bc78752e)**
Soru Kökü: Amerikan Kalp Birliği (AHA) güncel kılavuzlarına göre infektif endokardit (İE) gelişimi açısından yüksek risk grubunda yer alan ve periodontal muayene (sondlama) dahil profilaksi uygulanması **kesinlikle** zorunlu olan hasta profili aşağıdakilerden hangisidir?
Doğru Şık (A): Kalp kapağı onarımında protez materyali kullanılmış olan hastalar
Açıklama: AHA kriterlerine göre İE için yüksek risk taşıyan grupta; protez kalp kapağı bulunanlar (veya onarımda protez materyali kullanılanlar), önceden İE öyküsü olanlar, siyanotik doğumsal kalp hastaları ve kapak patolojisi gelişmiş kalp nakli hastaları yer alır. Bu gruptaki hastalara sondlama dahil tüm kanamalı periodontal işlemlerde profilaksi şarttır. Masum üfürüm veya hipertansiyon bu risk grubunda değildir.

---

### ÇİFT 130 (Benzerlik: 0.70)

**Soru 1 (ID: f19a83fd-742f-4218-a974-4a71c71c6af6)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, sağ alt birinci büyük azı dişinin dişetinde hafif şişlik ve fırçalama sırasında rahatsızlık şikayetiyle başvuruyor. Klinik muayenede dişte derin bir periodontal cep tespit ediliyor, ancak spontan şiddetli ağrı bulunmuyor. Radyografide apikal lezyon izlenmiyor. Bu vakada lezyonun şiddetli ağrıya neden olmamasının en olası patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Apse formasyonunun sulkus içinde bağ dokusu ataşmanı düzeyinde gelişmesi ve periostu yükseltmemesi
Açıklama: Periodontal apseler genellikle şiddetli ağrılı lezyonlar değildir çünkü pürülan birikim periodontal cep içinde, bağ dokusu ataşmanı düzeyinde lokalize olur ve kemik üzerindeki periostu kemikten ayırıp yükseltmez. Akut apikal apselerde ise enfeksiyon doğrudan kemik içine ilerleyip periostu yükselttiği için basınç artar ve zonklayıcı, şiddetli bir ağrı ortaya çıkar. Pulpal drenaj veya lateral kanal tutulumu bu spesifik ağrı farkını açıklayan primer mekanizma değildir.

**Soru 2 (ID: b7a5893c-35bb-49b7-9472-5b7ec79e58c6)**
Soru Kökü: 45 yaşında kadın hasta, alt çene sağ bölgesinde dişlerinde sallanma şikayetiyle başvuruyor. Alınan radyografta marjinal kret bölgesinde geniş başlayıp apekse doğru giderek daralan V şeklinde bir radyolusensi saptanıyor. Diş pulpa testlerine vital (canlı) yanıt veriyor. Bu klinik ve radyografik tabloya neden olan en olası durum aşağıdakilerden hangisidir?
Doğru Şık (C): Primer periodontal lezyon
Açıklama: Primer periodontal lezyonlarda yıkım dişeti kenarından apekse doğru ilerlediği için radyolusent kemik kaybı görüntüsü marjinal bölgede en geniştir ve apekse doğru daralır. Dişin vital olması ve marjinalden apekse doğru daralan kemik kaybı formu, problemin kökeninin endodontik olmadığını ve primer periodontal yıkım olduğunu kesinleştirir. Endodontik lezyonlarda ise yıkım apeksten başlayıp koronale ilerlediği için görüntü bunun tam tersidir.

---

### ÇİFT 131 (Benzerlik: 0.70)

**Soru 1 (ID: 6e8824cd-d746-4190-8992-0aedfa1db70e)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, sol üst birinci küçük azı dişinde gece uykudan uyandıran, zonklayıcı ve şiddetli ağrı şikayetiyle başvuruyor. Klinik muayenede diş perküsyon testine aşırı hassas bulunuyor ve ilgili bölgede mukobukkal katlantıda belirgin bir ödem izleniyor. Hastadaki bu dayanılmaz ağrının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Akut apikal apsede iltihabın periodontal ligamente ulaşıp kemik perforasyonuyla periostu yükseltmesi
Açıklama: Akut apikal apselerde enfeksiyon kök ucundan periodontal ligamente, oradan da alveolar kemiği perfore ederek periost altına yayılır; periostun kemikten ayrılıp yükselmesi kapalı alanda aşırı basınca neden olarak şiddetli zonklayıcı ağrı yaratır. Sulkus epitelindeki ülserasyon veya sement erozyonu kronik periodontitisin özellikleridir ve bu derece akut/şiddetli ağrı üretmezler. Hasta, drenaj sağlanana kadar (fistül açılana dek) bu şiddetli ağrıyı duymaya devam eder.

**Soru 2 (ID: b7a5893c-35bb-49b7-9472-5b7ec79e58c6)**
Soru Kökü: 45 yaşında kadın hasta, alt çene sağ bölgesinde dişlerinde sallanma şikayetiyle başvuruyor. Alınan radyografta marjinal kret bölgesinde geniş başlayıp apekse doğru giderek daralan V şeklinde bir radyolusensi saptanıyor. Diş pulpa testlerine vital (canlı) yanıt veriyor. Bu klinik ve radyografik tabloya neden olan en olası durum aşağıdakilerden hangisidir?
Doğru Şık (C): Primer periodontal lezyon
Açıklama: Primer periodontal lezyonlarda yıkım dişeti kenarından apekse doğru ilerlediği için radyolusent kemik kaybı görüntüsü marjinal bölgede en geniştir ve apekse doğru daralır. Dişin vital olması ve marjinalden apekse doğru daralan kemik kaybı formu, problemin kökeninin endodontik olmadığını ve primer periodontal yıkım olduğunu kesinleştirir. Endodontik lezyonlarda ise yıkım apeksten başlayıp koronale ilerlediği için görüntü bunun tam tersidir.

---

### ÇİFT 132 (Benzerlik: 0.70)

**Soru 1 (ID: 2cf3a6a5-5d68-475d-8b9d-468039b12e2e)**
Soru Kökü: Aşırı çürük, kırık veya tutuculuk kaybı olan dişlerde restorasyon yapabilmek için uygulanan cerrahi kuron boyu uzatma işlemleri bazı durumlarda hastaya zarar verebilir. Aşağıdakilerden hangisi bu prosedür için bir kontrendikasyon **değildir**?
Doğru Şık (E): Restorasyon için yetersiz klinik kron boyu varlığı
Açıklama: Yetersiz klinik kron boyunun (tutuculuk eksikliği) olması cerrahi kron boyu uzatmanın temel ve en yaygın 'endikasyonudur', kontrendikasyon değildir. Ancak işlem sonrası aşırı kemik desteği kaybı olacaksa, zayıf restoratif profile sahipse veya estetik anterior asimetri yaratacaksa işlem kesinlikle kontrendikedir.

**Soru 2 (ID: 4a4c6da9-f262-4453-8dd6-5670afac6389)**
Soru Kökü: Ortodontik diş hareketi uygulanacak hastalarda, periodontal sağlığın idamesi ve tedavi planlaması büyük önem taşır. Aşağıdakilerden hangisi bir hastada planlanan ortodontik tedavi için kontrendikasyon **değildir**?
Doğru Şık (D): Hastanın kronik periodontitis geçmişine sahip erişkin yaşta olması
Açıklama: Yaş ve daha önceden geçirilmiş periodontal hastalık varlığı tek başına ortodontik tedavi için bir kontrendikasyon değildir. İltihap tam olarak kontrol altına alındığı sürece, erişkin hastalarda ortodontik tedavi güvenle ve başarıyla uygulanabilir. Ancak aktif inflamasyon, yetersiz yapışık dişeti kalınlığı ve kontrolsüz hastalık aktivitesi mutlak kontrendikasyonlar arasında yer alır.

---

### ÇİFT 133 (Benzerlik: 0.70)

**Soru 1 (ID: a97daa81-fde5-4bb8-812e-0bba25732fde)**
Soru Kökü: Ortodontik tedavi sırasında dişlerin bukkolingual yönde hareket ettirilmesi planlanan bir hastada, profilaktik olarak dişeti miktarının artırılmasını gerektiren ve tedavi için bir kontrendikasyon oluşturan risk faktörü aşağıdakilerden hangisidir?
Doğru Şık (E): Yetersiz yapışık dişeti varlığı
Açıklama: Yetersiz yapışık dişeti (özellikle bukkal dişeti ince ise) ortodontik bukkolingual diş hareketi sırasında ciddi bir risk oluşturur ve dişeti ile kemikte dehiscence (açılma) tablosuna yol açabilir. Bu nedenle bu hareket öncesi profilaktik dişeti greftleriyle doku miktarının artırılması gerekebilir; enflamasyonla birlikte en temel kontrendikasyonlardan biridir.

**Soru 2 (ID: 44260d49-971e-41d8-b018-60c52d2448a0)**
Soru Kökü: İleri derecede kemik kaybı yaşamış ancak inflamasyonu kontrol altına alınmış bir periodontal hastada ortodontik tedavi planlanırken, hekimin karşılaşabileceği en majör biyomekanik sorun aşağıdakilerden hangisidir?
Doğru Şık (E): Destek doku yetersizliğine bağlı olarak yetersiz ankraj ve tedavi sonrası zayıf retansiyon olasılığı
Açıklama: Periodontal yıkım nedeniyle alveol kemik desteği azalmış dişlerin direnç merkezi apikale kayar ve bu dişler ortodontik hareket için kuvvet altyapısı olarak (ankraj) zayıftırlar. Kemik azaldığı için tedavi sonrası dişlerin eski pozisyonlarına dönme eğilimi yüksektir, bu da yetersiz ankraj ve yetersiz retansiyon problemini doğurur. Kemik kaybı dişlerin hareket etmesini engellemez, aksine kontrolsüz hareket riskini artırır.

---

### ÇİFT 134 (Benzerlik: 0.70)

**Soru 1 (ID: dfaa06cc-a6d9-480f-9181-fc3a7c3afacf)**
Soru Kökü: 40 yaşında erkek hasta, sol üst ikinci küçük azı dişindeki derin subgingival çürük nedeniyle başvuruyor. Restoratif işlemlere olanak tanımak amacıyla dişe cerrahi kron boyu uzatma işlemi planlanıyor. İşlem sırasında biyolojik genişliğin ihlal edilmemesi için kemik kreti ile çürük hattı arasında bırakılması gereken **minimum** sağlıklı mesafe ne kadar olmalıdır?
Doğru Şık (A): En az 4 mm
Açıklama: Cerrahi kron boyu uzatma işlemlerinde çürük veya kırık hattı varlığında, kemik kreti ile defektin sınırı (kırık hattı/çürük) arasında en az 4 mm mesafe bırakılması temel kuraldır. Bu mesafe, restorasyon marjini için gereken ferrule etkisini sağlamak ve 2.04 mm'lik fizyolojik biyolojik genişliğe zarar vermemek adına cerrahi sırasında mutlak olarak korunmalıdır.

**Soru 2 (ID: 9db9058b-985f-4c2d-afc8-ecd1fb7f70f7)**
Soru Kökü: 35 yaşında erkek hasta, sol alt birinci büyük azı dişine yapılacak sabit protez öncesi muayene ediliyor. Yapılan periodontal sondlamada dişin sulkus derinliğinin tüm yüzeylerde 3 mm civarında (çok fazla) olduğu tespit ediliyor. Bu dişte protetik restorasyon marjininin sağlıklı şekilde konumlandırılabilmesi için uygulanması gereken **en ideal** yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (E): Öncelikle gingivektomi ile derinliğin 1.5 mm'ye indirilmesi ve marjinin 0.5 mm apikale konumlanması
Açıklama: Sulkus derinliği 2 mm'den çok fazlaysa, restorasyon marjini doğrudan subgingival bölgeye yerleştirilmemeli; önce gingivektomi ile derinlik ideal olan 1.5 mm seviyesine indirilmelidir. İşlem sonrasında marjin, yeni oluşturulan gingival kenardan 0.5 mm apikale yerleştirilerek epitel ataşmanı korunur. Bu sayede biyolojik genişlik ihlalinden kaynaklanacak iatrojenik periodontitisin önüne geçilir.

---

### ÇİFT 135 (Benzerlik: 0.70)

**Soru 1 (ID: 3dc5e994-d9fa-4157-bd05-4dc1cb926298)**
Soru Kökü: Otuz iki yaşındaki kadın hasta, 34. haftada gerçekleşen erken doğum sonrası rutin diş eti kontrolü için kliniğe başvurmuştur. Hastanın periodontal muayenesinde generalize kanama ve derin cepler tespit edilmiştir. Literatür verilerine göre, bu hastanın subgingival plak örneklerinde aşağıdaki spiroket türlerinden hangisinin miktarında patolojik bir artış saptanması en olasıdır?
Doğru Şık (B): Treponema denticola
Açıklama: Erken doğum ve düşük doğum ağırlığı (EDDDA) gerçekleşen annelerin mikrobiyolojik profilinde, kırmızı kompleks üyelerinden olan Treponema denticola'nın subgingival alanda belirgin şekilde arttığı gösterilmiştir. Bu spiroket, lokal inflamatuvar sitokin üretimini tetikleyerek sistemik dolaşım üzerinden uterin kontraksiyonları etkileyebilmektedir. T. pallidum sifiliz etkeni olup, T. socranskii ve T. vincentii plak içerisinde bulunabilse de EDDDA ile spesifik korelasyonu vurgulanan tür T. denticola'dır.

**Soru 2 (ID: 58639162-1559-47a3-a160-7d9b0afe66fc)**
Soru Kökü: Periodontal enfeksiyonların hamilelik komplikasyonları ile ilişkisi araştırıldığında, erken doğum yapan kadınların amnion sıvısı kültürlerinden izole edilen ve subgingival plaktaki suşlarla birebir benzerlik gösterdiği kanıtlanan spesifik anaerobik mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (E): Fusobacterium nucleatum
Açıklama: Fusobacterium nucleatum, subgingival plakta yoğun bulunan ve erken doğum yapan annelerin amnion sıvısı kültürlerinde en sık izole edilen spesifik mikroorganizmadır. Bakterinin feto-plasental üniteye hematojen yolla ulaşarak PGE2 ve PGF2 alfa gibi erken doğumu başlatan proinflamatuvar mediyatörlerin artışına yol açtığı ve patogenezde kilit rol oynadığı gösterilmiştir.

---

### ÇİFT 136 (Benzerlik: 0.69)

**Soru 1 (ID: d13adc59-a734-4603-8ce7-23ee9de8e3a6)**
Soru Kökü: Bir dişin apeksi etrafında radyolusent bir lezyon saptanmış olmasına rağmen, yapılan vitalite testlerinde dişin vital olduğu gözlemlenmiştir. Bu durumun en olası nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Okluzal travma
Açıklama: Okluzal travmaya maruz kalan dişlerde ligament aralığında genişleme ve apeks çevresinde radyolusensi görülebilir, ancak pulpa canlılığını (vitalitesini) korur. Apikal apse veya primer endodontik lezyonlarda pulpa mutlaka nekrotiktir ve vitalite testlerine negatif yanıt verir. Bu nedenle radyolusensi varlığında pozitif vitalite yanıtı okluzal travmanın ayırt edici bulgusudur.

**Soru 2 (ID: 83a43dd8-90fe-48cb-ba10-a75feef51364)**
Soru Kökü: Koronal bütünlüğü sağlam (intact) olan ve pulpa vitalite testlerine pozitif (vital) yanıt veren bir molar dişte, radyografik olarak servikal krestal bölgeden başlayıp apekse doğru inen geniş tabanlı, yaygın alveolar kemik harabiyeti görülmektedir. Hastanın temel şikayeti hafif kanama ve rahatsızlık hissidir. Bu tablonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (B): Primer periodontal lezyon
Açıklama: Koronal yapının sağlam olması ve pulpanın vital olması endodontik orijini dışlar. Yıkımın marjinal kısımdan (servikalden) apekse doğru geniş yüzeyli şekilde inmesi ve hastanın klinik semptomlarının (hafif rahatsızlık) primer periodontal hastalık profiliyle birebir uyuşması bu lezyonun kesin olarak 'primer periodontal lezyon' olduğunu gösterir.

---

### ÇİFT 137 (Benzerlik: 0.69)

**Soru 1 (ID: ace138ad-f39d-405c-b67b-42e4c60bce65)**
Soru Kökü: Yirmi sekiz yaşındaki erkek hasta, alt anterior dişlerinin dudak tarafındaki dişetinde sürekli yara oluşumu ve çekilme şikayetiyle başvuruyor. Klinik muayenede üst kesicilerin alt kesicileri tamamen örttüğü ve okluzal travma yarattığı görülüyor. Bu hastada periodontal doku yıkımını durdurmak için öncelikli olarak endike olan tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (B): Ortodontik tedavi ile derin overbite ve deepbite'ın azaltılması
Açıklama: Şiddetli overbite ve deepbite durumlarında üst dişler, alt dişlerin labial dişetine doğrudan mekanik travma uygulayarak lokalize dişeti çekilmesi ve okluzal travma yaratır. Bu durumun periodontal tedavisinde asıl etkeni ortadan kaldırmak için ortodontik düzeltme yapılması kesin endikasyondur. Sadece greft yapmak veya gece plağı kullandırmak travmayı kalıcı olarak çözmez.

**Soru 2 (ID: 0c87d1f1-3c67-4570-9290-5185128fb872)**
Soru Kökü: Ortodontik tedavi sırasında dişlere bukkolingual yönde kuvvet uygulanması, dişi çevreleyen alveolar kemik ve gingival dokunun ince olduğu bölgelerde iatrojenik hasara neden olabilir. Bu biyomekanik baskı sonucunda dehisens (kemik çatlağı) ve dişeti çekilmesini engellemek için ortodonti öncesinde uygulanması gereken **profilaktik** yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (C): Dişeti grefti cerrahisi ile yapışık dişeti miktarının ve kalınlığının artırılması
Açıklama: İnce bukkal kemik ve yetersiz yapışık dişeti varlığında, ortodontik ekspansiyon veya dişi bukkale iten hareketler, dokunun fizyolojik sınırlarını aşarak şiddetli kemik dehisensine ve fenestrasyona sekonder dişeti çekilmesine sebep olur. Bunu önlemenin yegane yolu, ortodontik hareket başlamadan önce serbest dişeti grefti veya bağ dokusu grefti ile yapışık doku bandını biyotipe uygun olarak kalınlaştırmaktır.

---

### ÇİFT 138 (Benzerlik: 0.69)

**Soru 1 (ID: c894268f-51e0-4ebd-963f-3efc0a7d5263)**
Soru Kökü: İnfektif Endokardit (İE) profilaksisi altında tüm ağız kök yüzey düzleştirilmesi yapılacak ve yorulmaması için tedavisi birden fazla seansa bölünecek olan yüksek riskli bir kalp hastasında, antibiyotik direnci gelişimini önlemek için iki ardışık seans arası bırakılması gereken ideal süre aşağıdakilerden hangisidir?
Doğru Şık (C): Dirençli bakteriyel suşların oral floradan temizlenmesi için en az 7 gün (tercihen 10-14 gün)
Açıklama: AHA kılavuzlarına göre, profilaksi gerektiren hastada birden fazla seansta tedavi yapılacaksa, aynı antibiyotikle tekrarlayan kullanımlarda oral florada dirençli streptokok suşlarının oluşmasını engellemek için seanslar arasına en az 7 gün, tercihen 10-14 gün konulmalıdır. Eğer 7 günden önce mecburi bir seans gerekirse farklı bir antibiyotik grubuna (alternatif rejim) geçilmelidir.

**Soru 2 (ID: 9ee40be8-0cc6-49a0-b2ba-6d08a120aeee)**
Soru Kökü: Penisilin alerjisi olan ve oral yolla ilaç kullanabilen erişkin bir hastada, mukozayı perfore edecek bir periodontal cerrahi işlemden 30-60 dakika önce uygulanması gereken İE profilaksi rejimi aşağıdakilerden hangisidir?
Doğru Şık (C): Azitromisin 500 mg oral
Açıklama: Hasta oral ilaç alabiliyorsa ve amoksisilin/penisilin alerjisi varsa alternatif oral rejimler tercih edilir: Sefaleksin (2 gr), Azitromisin veya Klaritromisin (500 mg) ya da Doksisiklin (100 mg). Amoksisilin ilk seçenektir ancak alerji durumunda kontrendikedir. Sefazolin ve Ampisilin parenteral (IM/IV) yolla, oral ilaç alamayan hastalarda kullanılır.

---

### ÇİFT 139 (Benzerlik: 0.69)

**Soru 1 (ID: dfaa06cc-a6d9-480f-9181-fc3a7c3afacf)**
Soru Kökü: 40 yaşında erkek hasta, sol üst ikinci küçük azı dişindeki derin subgingival çürük nedeniyle başvuruyor. Restoratif işlemlere olanak tanımak amacıyla dişe cerrahi kron boyu uzatma işlemi planlanıyor. İşlem sırasında biyolojik genişliğin ihlal edilmemesi için kemik kreti ile çürük hattı arasında bırakılması gereken **minimum** sağlıklı mesafe ne kadar olmalıdır?
Doğru Şık (A): En az 4 mm
Açıklama: Cerrahi kron boyu uzatma işlemlerinde çürük veya kırık hattı varlığında, kemik kreti ile defektin sınırı (kırık hattı/çürük) arasında en az 4 mm mesafe bırakılması temel kuraldır. Bu mesafe, restorasyon marjini için gereken ferrule etkisini sağlamak ve 2.04 mm'lik fizyolojik biyolojik genişliğe zarar vermemek adına cerrahi sırasında mutlak olarak korunmalıdır.

**Soru 2 (ID: c7d70831-a704-44dd-a730-0aa8324a65f3)**
Soru Kökü: Cerrahi kron boyu uzatma işlemi planlanan bir vakada, yeterli keratinize diş eti genişliğinin mevcut olduğu doğrulanmıştır. İşlem sırasında biyolojik genişliği ihlal etmemek adına, sadece yumuşak doku redüksiyonunun (gingivektomi) yeterli olabilmesi için kemik kretinin koronalinde bulunması gereken **minimum** yumuşak doku miktarı kaç mm olmalıdır?
Doğru Şık (D): 3 mm
Açıklama: Yeterli keratinize doku varlığında, kemik kretinin koronalinde minimum 3 mm yumuşak doku bulunuyorsa, bu dokunun redüksiyonu yeterli olur ve kemiğe müdahale gerekmez. Eğer bu mesafe 3 mm'den az ise, cerrahi flap operasyonu ile birlikte mutlaka kemik redüksiyonu da (ostektomi/osteoplasti) yapılmalıdır. Biyolojik genişlik (yaklaşık 2 mm) ile sulkus derinliği hesaplandığında 3 mm'lik bariyer kritik bir güvenlik sınırıdır.

---

### ÇİFT 140 (Benzerlik: 0.69)

**Soru 1 (ID: 11789274-1f57-49ff-bdbf-f771fe9d32df)**
Soru Kökü: Kron bölgesinde geniş madde kaybı bulunan, elektrikli pulpa testine negatif (nonvital) yanıt veren bir dişte; radyografik incelemede periapikal bölgede başlayan ve kök yüzeyi boyunca kuronal yöne (servikale) doğru ilerleyen bir kemik yıkım profili tespit edilmiştir. İlgili dişteki periodontal sondlamada apeks yönünde dar ve derin bir defekt saptanmıştır. Bu klinik tablo aşağıdaki lezyon sınıflandırmalarından hangisiyle **en çok** uyumludur?
Doğru Şık (A): Primer pulpal lezyon
Açıklama: Primer pulpal lezyonda asıl sorun nonvital pulpadır. Periapikalde başlayan radyolusent enfeksiyon, basınçla kendine yol arayarak kök yüzeyi (periodontal ligament) boyunca servikale doğru yukarı yönde drene olur ve dar bir cep yaratır. Yıkımın yönünün apikalden koronale olması primer endodontik kaynağın tipik belirtecidir.

**Soru 2 (ID: b7a5893c-35bb-49b7-9472-5b7ec79e58c6)**
Soru Kökü: 45 yaşında kadın hasta, alt çene sağ bölgesinde dişlerinde sallanma şikayetiyle başvuruyor. Alınan radyografta marjinal kret bölgesinde geniş başlayıp apekse doğru giderek daralan V şeklinde bir radyolusensi saptanıyor. Diş pulpa testlerine vital (canlı) yanıt veriyor. Bu klinik ve radyografik tabloya neden olan en olası durum aşağıdakilerden hangisidir?
Doğru Şık (C): Primer periodontal lezyon
Açıklama: Primer periodontal lezyonlarda yıkım dişeti kenarından apekse doğru ilerlediği için radyolusent kemik kaybı görüntüsü marjinal bölgede en geniştir ve apekse doğru daralır. Dişin vital olması ve marjinalden apekse doğru daralan kemik kaybı formu, problemin kökeninin endodontik olmadığını ve primer periodontal yıkım olduğunu kesinleştirir. Endodontik lezyonlarda ise yıkım apeksten başlayıp koronale ilerlediği için görüntü bunun tam tersidir.

---

### ÇİFT 141 (Benzerlik: 0.69)

**Soru 1 (ID: c06e8598-4f3d-4c32-8040-10af0f9e0950)**
Soru Kökü: Serbest sonlu hareketli bölümlü protezlerde, destek dişe gelen zararlı kuvvetleri azaltmak ve periodontal sağlığı korumak amacıyla kroşe ve tırnak konumu için geçerli olan temel biyomekanik kural aşağıdakilerden hangisidir?
Doğru Şık (D): Tırnak meziale taşınmalı, retansiyon için distal undercuttan yararlanılmalıdır.
Açıklama: Serbest sonlu protezlerde kural olarak okluzal tırnak meziale taşınır ve retansiyon distal undercuttan alınır. Bu yerleşim, hareketli kret üzerindeki protezin dokuya gömülmesi sırasında dişi arkada doğru deviren zararlı tork kuvvetini kompanse ederek kuvvetin dişin uzun eksenine paralel gelmesini sağlar. Tırnağın distale yerleştirilmesi dişte distal yönde yıkıcı bir kaldıraç etkisi yaratır.

**Soru 2 (ID: e3c2e064-f61f-470a-ac94-bc9669c3e405)**
Soru Kökü: Anterior dişlerin hareketli bölümlü protezlerde destek olarak kullanıldığı bir vakada, protezden gelen yüklerin periodonsiyumda yıkıma yol açmasını engellemek hedeflenmektedir. Bu amaçla okluzal tırnakların eğimli yüzeyler yerine **singulum veya insizal bölgeye** yerleştirilmesinin temel mekanik gerekçesi aşağıdakilerden hangisidir?
Doğru Şık (B): Kuvvetlerin dişin uzun eksenine paralel iletilmesini sağlayarak lateral devrilmeyi önlemek
Açıklama: Tırnaklar dişin eğimli yüzeylerine yerleştirilirse, kuvvet uygulandığında protez kayma eğilimi gösterir ve dişe yatay (ortodontik benzeri) zararlı kuvvetler iletir. Tırnak yuvalarının singulum veya insizal kenarda dişe dik açı yapacak şekilde (uzun eksene paralel) hazırlanması, yükün periodontal ligament liflerince optimal karşılanmasını sağlar.

---

### ÇİFT 142 (Benzerlik: 0.69)

**Soru 1 (ID: 648643bf-5c13-477c-a702-6dd892f1f9ad)**
Soru Kökü: Hareketli bölümlü protez planlamasında periodontal dokuların korunmasına yönelik uyulması gereken mekanik kurallar düşünüldüğünde, aşağıdaki yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (D): Ön dişlere konacak tırnaklar dişlerin eğimli yüzeylerine konumlandırılarak okluzal tork oluşturulmalıdır.
Açıklama: Ön dişlere (özellikle kaninlere) konacak tırnaklar kesinlikle dişlerin eğimli (inkline) palatinal yüzeylerine doğrudan yerleştirilmemelidir. Eğimli yüzeye gelen okluzal kuvvet dişi vestibüle doğru devirici bir ortodontik tork yaratır. Bu yüzden kuvveti uzun eksene paralel iletmek ve protezin dişetine batmasını engellemek için dişe önceden düz tabanlı singulum veya insizal tırnak yuvaları (rest seat) açılmalıdır.

**Soru 2 (ID: 539326ab-931d-406b-a3cc-9dae498e0a94)**
Soru Kökü: Üst çene diş eksikliklerinde hareketli parsiyel protez planlanan hastalarda, destek dişlerin periodonsiyumunu korumak birincil hedeftir. Buna göre, rijiditesi yetersiz olduğu için esneyerek destek dişlere aşırı miktarda lateral (yatay) devirici kuvvet veren ve mekanik olarak **en kötü** planlama kabul edilen ana bağlayıcı tipi aşağıdakilerden hangisidir?
Doğru Şık (A): At nalı şeklinde (U-plak) ana bağlayıcı
Açıklama: At nalı şeklindeki ana bağlayıcılar yapısal formlarından dolayı yeterli rijidite sağlayamazlar ve çiğneme yükü altında esnerler. Bu esneme, protezi tutan destek dişlere şiddetli lateral kuvvetlerin yansımasına ve periodontal yıkımın hızlanmasına neden olduğu için en zayıf mekanik tasarım olarak kabul edilir. İdeal bir ana bağlayıcı kesinlikle rijit olmalıdır.

---

### ÇİFT 143 (Benzerlik: 0.69)

**Soru 1 (ID: e9559738-5ed2-474b-9fab-74b30e836bdb)**
Soru Kökü: Endodontik ve periodontal lezyonlar radyografik olarak birbirini taklit edebilse de, kemik kaybının paterni ayırıcı tanıda önemli bir ipucudur. Primer endodontik lezyonun radyografik yayılım paterni aşağıdakilerden hangisidir?
Doğru Şık (A): Radyolusent görüntü apikal bölgede daha geniştir ve marjinal bölgeye doğru daralır.
Açıklama: Primer endodontik kökenli bir enfeksiyon apikal foramen yoluyla çıkış yaptığı için yıkım periapikal alanda en geniş halindedir ve lezyon kuronale doğru ilerledikçe (marjine doğru) daralır. Periodontal bir lezyonda ise yıkım marjinden başladığı için radyolusent defekt krestal bölgede geniş, apekse doğru daralan bir huni veya üçgen formundadır. Bu ayrım tanı koymada kritik radyografik belirteçtir.

**Soru 2 (ID: 11789274-1f57-49ff-bdbf-f771fe9d32df)**
Soru Kökü: Kron bölgesinde geniş madde kaybı bulunan, elektrikli pulpa testine negatif (nonvital) yanıt veren bir dişte; radyografik incelemede periapikal bölgede başlayan ve kök yüzeyi boyunca kuronal yöne (servikale) doğru ilerleyen bir kemik yıkım profili tespit edilmiştir. İlgili dişteki periodontal sondlamada apeks yönünde dar ve derin bir defekt saptanmıştır. Bu klinik tablo aşağıdaki lezyon sınıflandırmalarından hangisiyle **en çok** uyumludur?
Doğru Şık (A): Primer pulpal lezyon
Açıklama: Primer pulpal lezyonda asıl sorun nonvital pulpadır. Periapikalde başlayan radyolusent enfeksiyon, basınçla kendine yol arayarak kök yüzeyi (periodontal ligament) boyunca servikale doğru yukarı yönde drene olur ve dar bir cep yaratır. Yıkımın yönünün apikalden koronale olması primer endodontik kaynağın tipik belirtecidir.

---

### ÇİFT 144 (Benzerlik: 0.69)

**Soru 1 (ID: 984daba7-9ca6-4cec-a19e-0e958a9118de)**
Soru Kökü: Pulpal ve periodontal kaynaklı enfeksiyonların ayırıcı tanısında ağrı karakteristiği değerlendirilirken, endodontik orijinli bir ağrıyı periodontal ağrıdan kesin olarak ayıran klinik özellik aşağıdakilerden hangisidir?
Doğru Şık (E): Analjezik kullanımının ağrıyı geçirmemesi ve hastayı uykusundan uyandırması
Açıklama: Endodontik kökenli ağrı başlangıçta akut ve şiddetlidir, hastayı uykudan uyandırabilir ve basit analjeziklerle yatıştırılamaz. Buna karşın primer periodontal kaynaklı ağrılar sıklıkla hafif ya da orta düzeydedir, analjeziklerle kolayca geçer ve hastayı uykudan uyandırmaz. Periodontal bir apse drenajı sağlandığında dahi endodontik pulpa enfeksiyonunun derin zonklaması devam eder.

**Soru 2 (ID: b0499d40-fd79-4d19-b56a-c63c4745edd0)**
Soru Kökü: Periodontal apse ile akut apikal (endodontik) apse ayrıcı tanısında, hastanın klinik semptomları ve yapılan vitalite testlerinin sonuçları belirleyicidir. Bu iki akut tabloyu birbirinden ayıran en temel bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Akut apikal apsede pulpanın nonvital olması, periodontal apsede ise vital pulpa yanıtı alınabilmesi
Açıklama: Akut apikal apse, pulpanın total nekrozu sonucu gelişen periapikal bir enfeksiyon olduğu için etkilenen dişte pulpa canlılık testleri (elektrik, soğuk) kesinlikle negatif yanıt verir. Buna karşın primer periodontal apse, dişi destekleyen bağ dokusunun lateral sulkus sınırından kaynaklanan enfeksiyonudur; bu durumda pulpa kan desteği apeksten devam ettiği için diş genellikle vitalite testlerine sağlıklı, pozitif yanıt verir.

---

