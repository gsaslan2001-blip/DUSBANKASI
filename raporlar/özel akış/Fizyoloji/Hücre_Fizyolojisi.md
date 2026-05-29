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

**Soru 1 (ID: 9a2e49b8-4d65-4f36-8c63-87ca0de96a94)**
Soru Kökü: 24 yaşında kadın hasta, kronik yorgunluk ve solukluk şikayetleriyle başvuruyor. Laboratuvar tetkiklerinde mikrositik anemi saptanıyor ve oral demir (Fe+2) tedavisi başlanıyor. Lümenden enterosite alınan Fe+2 iyonlarının, bazolateral membrandan intertisyel aralığa çıkışını sağlayan spesifik kolaylaştırılmış difüzyon taşıyıcısı aşağıdakilerden hangisidir?
Doğru Şık (D): Ferroportin
Açıklama: Enterosit içindeki Fe+2 iyonlarının bazolateral membrandan kana (intertisyel aralığa) geçişi ferroportin adlı taşıyıcı protein ile kolaylaştırılmış difüzyonla sağlanır. Transferrin kanda demiri taşıyan plazma proteinidir. Sınavda emilim zinciri sorulduğunda kana çıkış kapısının ferroportin olduğu entegre edilmelidir.

**Soru 2 (ID: a106e081-34a8-4bc6-ba78-c98506315e76)**
Soru Kökü: 24 yaşında kadın hasta, kronik yorgunluk ve solukluk şikayetleriyle başvuruyor. Laboratuvar tetkiklerinde mikrositik anemi saptanıyor ve oral demir (Fe+2) tedavisi başlanıyor. Lümenden enterosite alınan Fe+2 iyonlarının, bazolateral membrandan intertisyel aralığa çıkışını sağlayan spesifik kolaylaştırılmış difüzyon taşıyıcısı aşağıdakilerden hangisidir?
Doğru Şık (D): Ferroportin
Açıklama: Enterosit içindeki Fe+2 iyonlarının bazolateral membrandan kana (intertisyel aralığa) geçişi ferroportin adlı taşıyıcı protein ile kolaylaştırılmış difüzyonla sağlanır. Transferrin kanda demiri taşıyan plazma proteinidir. Sınavda emilim zinciri sorulduğunda kana çıkış kapısının ferroportin olduğu entegre edilmelidir.

---

### ÇİFT 2 (Benzerlik: 1.00)

**Soru 1 (ID: 121b7ddd-d4a7-4b40-8d99-5bef8faf6aae)**
Soru Kökü: Hücre membranı fosfolipid, kolesterol ve çeşitli proteinlerden oluşan dinamik bir yapıdır. Ancak fizyolojik bağlamda, insan vücudundaki tüm biyolojik materyaller zarda yer almaz. Aşağıdaki lipit bileşenlerinden hangi ikilisi normal hücre zarı yapısında kesinlikle **bulunmaz**?
Doğru Şık (A): Trigliseridler ve kolesterol esterleri
Açıklama: Hücre zarında yağ asitlerinin depo şekli olan trigliseridler ve kolesterolün depo şekli olan kolesterol esterleri hiçbir zaman bulunmaz. Membranda fosfolipidler (en sık lesitin), serbest kolesterol, glikolipidler ve proteinler yapısal olarak yer alır.

**Soru 2 (ID: 3b7849a1-691f-4c68-b93e-1b409da8f6ad)**
Soru Kökü: Hücre membranı fosfolipid, kolesterol ve çeşitli proteinlerden oluşan dinamik bir yapıdır. Ancak fizyolojik bağlamda, insan vücudundaki tüm biyolojik materyaller zarda yer almaz. Aşağıdaki lipit bileşenlerinden hangi ikilisi normal hücre zarı yapısında kesinlikle **bulunmaz**?
Doğru Şık (A): Trigliseridler ve kolesterol esterleri
Açıklama: Hücre zarında yağ asitlerinin depo şekli olan trigliseridler ve kolesterolün depo şekli olan kolesterol esterleri hiçbir zaman bulunmaz. Membranda fosfolipidler (en sık lesitin), serbest kolesterol, glikolipidler ve proteinler yapısal olarak yer alır.

---

### ÇİFT 3 (Benzerlik: 1.00)

**Soru 1 (ID: 16548272-1000-4e10-8e68-16892b11e796)**
Soru Kökü: Böbrek tübül sisteminde, özellikle toplayıcı kanalların alfa-interkale hücrelerinde yerleşik olan ve idrara asit salgılanmasını primer aktif transport mekanizması ile (ATP harcayarak) gerçekleştiren taşıyıcı pompa aşağıdakilerden hangisidir?
Doğru Şık (B): H+-K+ ATPaz
Açıklama: Renal toplayıcı kanalların alfa-interkale hücrelerinde ve mide paryetal hücrelerinde bulunan H+-K+ ATPaz pompası, protonları lümene sekrete ederken potasyumu hücre içine alır ve bu süreçte doğrudan ATP harcar. Na+-H+ antiportu ise sekonder aktif bir transporttur, enerjiyi dolaylı olarak sodyum gradientinden alır.

**Soru 2 (ID: 9f7f8426-c8aa-4428-961c-36bc30059404)**
Soru Kökü: Böbrek tübül sisteminde, özellikle toplayıcı kanalların alfa-interkale hücrelerinde yerleşik olan ve idrara asit salgılanmasını primer aktif transport mekanizması ile (ATP harcayarak) gerçekleştiren taşıyıcı pompa aşağıdakilerden hangisidir?
Doğru Şık (B): H+-K+ ATPaz
Açıklama: Renal toplayıcı kanalların alfa-interkale hücrelerinde ve mide paryetal hücrelerinde bulunan H+-K+ ATPaz pompası, protonları lümene sekrete ederken potasyumu hücre içine alır ve bu süreçte doğrudan ATP harcar. Na+-H+ antiportu ise sekonder aktif bir transporttur, enerjiyi dolaylı olarak sodyum gradientinden alır.

---

### ÇİFT 4 (Benzerlik: 1.00)

**Soru 1 (ID: 2d98397b-7eb8-4456-b12c-ee9a2b321e2e)**
Soru Kökü: Siklik GMP (cGMP) ikinci habercisini kullanan sinyal iletim yolları incelendiğinde, aşağıdakilerden hangisi doğrudan guanilat siklaz enzimini aktive ederek etkisini cGMP üzerinden gösteren moleküllerden biri **değildir**?
Doğru Şık (E): Kalsitonin
Açıklama: Kalsitonin, etkisini Gs proteini üzerinden Adenilat siklazı uyararak cAMP mekanizmasıyla gösteren bir hormondur. Karbonmonoksit (CO), Nitrik Oksit (NO) ve Natriüretik peptidler (ANP/BNP) ise fizyolojik etkilerini guanilat siklazı uyararak artan cGMP üzerinden oluştururlar.

**Soru 2 (ID: 4c0cd7aa-2aff-469f-847c-eda0af7388f7)**
Soru Kökü: Siklik GMP (cGMP) ikinci habercisini kullanan sinyal iletim yolları incelendiğinde, aşağıdakilerden hangisi doğrudan guanilat siklaz enzimini aktive ederek etkisini cGMP üzerinden gösteren moleküllerden biri **değildir**?
Doğru Şık (E): Kalsitonin
Açıklama: Kalsitonin, etkisini Gs proteini üzerinden Adenilat siklazı uyararak cAMP mekanizmasıyla gösteren bir hormondur. Karbonmonoksit (CO), Nitrik Oksit (NO) ve Natriüretik peptidler (ANP/BNP) ise fizyolojik etkilerini guanilat siklazı uyararak artan cGMP üzerinden oluştururlar.

---

### ÇİFT 5 (Benzerlik: 1.00)

**Soru 1 (ID: 24837c32-1e2e-47e7-a4a2-3e1ba1b5edcc)**
Soru Kökü: Hücre içinde sentezlenen veziküllerin, hücre zarıyla füzyon yaparak içeriklerini dış ortama salgıladıkları aktif mekanizmaya ekzositoz denir. Bu hücresel sekresyon sürecinin başlatılabilmesi ve başarıyla gerçekleşmesi için stoplazmik düzeyde temel olarak hangi molekül ve iyon ikilisine mutlak ihtiyaç vardır?
Doğru Şık (E): Kalsiyum ve ATP
Açıklama: Ekzositozun tetiklenmesi için hücre içi kalsiyum (Ca+2) konsantrasyonunun artması şarttır. Kalsiyum, veziküllerin hücre membranına yönelmesi ve kaynaşması (SNARE proteinleri) için esasken, süreç aktif olduğu için membran füzyonu ATP hidrolizi gerektirir.

**Soru 2 (ID: 2db17740-66c3-4a57-aaeb-2770a82e20cc)**
Soru Kökü: Hücre içinde sentezlenen veziküllerin, hücre zarıyla füzyon yaparak içeriklerini dış ortama salgıladıkları aktif mekanizmaya ekzositoz denir. Bu hücresel sekresyon sürecinin başlatılabilmesi ve başarıyla gerçekleşmesi için stoplazmik düzeyde temel olarak hangi molekül ve iyon ikilisine mutlak ihtiyaç vardır?
Doğru Şık (E): Kalsiyum ve ATP
Açıklama: Ekzositozun tetiklenmesi için hücre içi kalsiyum (Ca+2) konsantrasyonunun artması şarttır. Kalsiyum, veziküllerin hücre membranına yönelmesi ve kaynaşması (SNARE proteinleri) için esasken, süreç aktif olduğu için membran füzyonu ATP hidrolizi gerektirir.

---

### ÇİFT 6 (Benzerlik: 1.00)

**Soru 1 (ID: 0fa4f160-5bde-44de-8f90-760175c0d9aa)**
Soru Kökü: Madde transportu sırasında elektrokimyasal gradient yönünde gerçekleşen, enerji (ATP) gerektirmeyen ancak spesifik transport proteinlerinin kullanılması nedeniyle bir doyma kinetiğine (Vmax) sahip olan taşıma mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Kolaylaştırılmış difüzyon
Açıklama: Kolaylaştırılmış difüzyon, taşıyıcı proteinler kullanılarak konsantrasyon gradienti yönünde yapılan ve ATP harcanmayan geçiş tipidir. Protein kullanıldığı için belli bir konsantrasyonda taşıyıcılar doyar ve hız plato çizer (Vmax). Basit difüzyonda doyma kinetiği yoktur, konsantrasyon arttıkça hız doğrusal olarak artmaya devam eder.

**Soru 2 (ID: c115b142-6b76-4212-85c4-d023be753fea)**
Soru Kökü: Madde transportu sırasında elektrokimyasal gradient yönünde gerçekleşen, enerji (ATP) gerektirmeyen ancak spesifik transport proteinlerinin kullanılması nedeniyle bir doyma kinetiğine (Vmax) sahip olan taşıma mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Kolaylaştırılmış difüzyon
Açıklama: Kolaylaştırılmış difüzyon, taşıyıcı proteinler kullanılarak konsantrasyon gradienti yönünde yapılan ve ATP harcanmayan geçiş tipidir. Protein kullanıldığı için belli bir konsantrasyonda taşıyıcılar doyar ve hız plato çizer (Vmax). Basit difüzyonda doyma kinetiği yoktur, konsantrasyon arttıkça hız doğrusal olarak artmaya devam eder.

---

### ÇİFT 7 (Benzerlik: 1.00)

**Soru 1 (ID: 1266e24c-0938-4bec-8f0e-2c1691a4654c)**
Soru Kökü: Gq proteini kenetli reseptörlerin uyarılmasıyla aktive olan Fosfolipaz C enziminin, membran fosfolipidlerinden fosfoinozitol 4,5-bifosfatı (PIP2) parçalayarak oluşturduğu iki önemli ikinci haberci molekül aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Diaçil gliserol (DAG) ve inozitol trifosfat (IP3)
Açıklama: Fosfolipaz C enzimi membran bileşenlerinden olan PIP2'yi hidrolize ederek iki temel ikinci haberci üretir: Endoplazmik retikulumdan kalsiyum salgılatacak olan IP3 ve hücre zarına tutunup Protein Kinaz C'yi aktive edecek olan DAG. Araşidonik asit ise Fosfolipaz A2'nin ürünüdür.

**Soru 2 (ID: e53e2321-c662-4227-8cca-9ffc3da102e8)**
Soru Kökü: Gq proteini kenetli reseptörlerin uyarılmasıyla aktive olan Fosfolipaz C enziminin, membran fosfolipidlerinden fosfoinozitol 4,5-bifosfatı (PIP2) parçalayarak oluşturduğu iki önemli ikinci haberci molekül aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Diaçil gliserol (DAG) ve inozitol trifosfat (IP3)
Açıklama: Fosfolipaz C enzimi membran bileşenlerinden olan PIP2'yi hidrolize ederek iki temel ikinci haberci üretir: Endoplazmik retikulumdan kalsiyum salgılatacak olan IP3 ve hücre zarına tutunup Protein Kinaz C'yi aktive edecek olan DAG. Araşidonik asit ise Fosfolipaz A2'nin ürünüdür.

---

### ÇİFT 8 (Benzerlik: 1.00)

**Soru 1 (ID: 5550f8e7-a366-464b-a7c9-cfe6323afb9e)**
Soru Kökü: Bir sinir hücresinde aksiyon potansiyelinin oluşumu sırasında, voltaj kapılı sodyum kanallarının açılmasıyla hücre içine giren sodyum, membran potansiyelini depolarize ederek daha fazla sodyum kanalının açılmasına neden olur. Bu amplifikasyon süreci aşağıdaki kontrol mekanizmalarından hangisi ile açıklanır?
Doğru Şık (A): Pozitif feedback
Açıklama: Aksiyon potansiyelindeki depolarizasyon foku, açılan Na+ kanallarının membranı pozitifleştirip, bu pozitifliğin daha fazla komşu Na+ kanalını açması prensibine dayanır. Bu durum, uyaranın kendi etkisini giderek büyütmesi nedeniyle net bir pozitif feedback örneğidir.

**Soru 2 (ID: c0538129-3f63-4797-bbcc-c921f112083f)**
Soru Kökü: Bir sinir hücresinde aksiyon potansiyelinin oluşumu sırasında, voltaj kapılı sodyum kanallarının açılmasıyla hücre içine giren sodyum, membran potansiyelini depolarize ederek daha fazla sodyum kanalının açılmasına neden olur. Bu amplifikasyon süreci aşağıdaki kontrol mekanizmalarından hangisi ile açıklanır?
Doğru Şık (A): Pozitif feedback
Açıklama: Aksiyon potansiyelindeki depolarizasyon foku, açılan Na+ kanallarının membranı pozitifleştirip, bu pozitifliğin daha fazla komşu Na+ kanalını açması prensibine dayanır. Bu durum, uyaranın kendi etkisini giderek büyütmesi nedeniyle net bir pozitif feedback örneğidir.

---

### ÇİFT 9 (Benzerlik: 1.00)

**Soru 1 (ID: 3432d67b-b01a-48af-a3d7-d5cef1c396f5)**
Soru Kökü: Hücre membranı gibi seçici geçirgen bir zardan solit (çözünen) maddelerin değil, sadece çözücü moleküllerin (suyun) kendi konsantrasyon farkına bağlı olarak net difüzyonla yer değiştirmesi olayına verilen ad aşağıdakilerden hangisidir?
Doğru Şık (E): Osmoz
Açıklama: Suyun seçici geçirgen bir zardan yüksek su konsantrasyonlu bölgeden düşük su konsantrasyonlu bölgeye net difüzyonuna osmoz denir. Filtrasyon hidrostatik basınç farkıyla sıvının itilmesi iken, basit difüzyon çözünen maddelerin gradient yönünde membrandan doğrudan geçişidir.

**Soru 2 (ID: 7f504198-85b0-452d-b774-92d66dbb41dc)**
Soru Kökü: Hücre membranı gibi seçici geçirgen bir zardan solit (çözünen) maddelerin değil, sadece çözücü moleküllerin (suyun) kendi konsantrasyon farkına bağlı olarak net difüzyonla yer değiştirmesi olayına verilen ad aşağıdakilerden hangisidir?
Doğru Şık (E): Osmoz
Açıklama: Suyun seçici geçirgen bir zardan yüksek su konsantrasyonlu bölgeden düşük su konsantrasyonlu bölgeye net difüzyonuna osmoz denir. Filtrasyon hidrostatik basınç farkıyla sıvının itilmesi iken, basit difüzyon çözünen maddelerin gradient yönünde membrandan doğrudan geçişidir.

---

### ÇİFT 10 (Benzerlik: 1.00)

**Soru 1 (ID: 5a0aa633-9ea2-41f0-8977-b610384065e2)**
Soru Kökü: Bağırsak epitelinde ve proksimal böbrek tübüllerinde lümende bulunan aminoasitler hücre içine alınırken, sodyum iyonunun içeri giriş enerjisini motor güç olarak kullanırlar. İki maddenin de hücre içine (aynı yöne) taşındığı bu sekonder aktif taşıma mekanizmasına ne ad verilir?
Doğru Şık (C): Simport (Cotransport)
Açıklama: Sekonder aktif transportta enerji ATP'den değil sodyum gradientinden sağlanır. Eğer sodyum hücre içine girerken taşınan diğer madde de (aminoasit, glikoz vb.) hücre içine aynı yönde alınıyorsa bu sisteme simport (cotransport) denir. Zıt yönde taşınma antiporttur.

**Soru 2 (ID: e8ba4cc7-4bd7-43ff-822c-8c4948a9e540)**
Soru Kökü: Bağırsak epitelinde ve proksimal böbrek tübüllerinde lümende bulunan aminoasitler hücre içine alınırken, sodyum iyonunun içeri giriş enerjisini motor güç olarak kullanırlar. İki maddenin de hücre içine (aynı yöne) taşındığı bu sekonder aktif taşıma mekanizmasına ne ad verilir?
Doğru Şık (C): Simport (Cotransport)
Açıklama: Sekonder aktif transportta enerji ATP'den değil sodyum gradientinden sağlanır. Eğer sodyum hücre içine girerken taşınan diğer madde de (aminoasit, glikoz vb.) hücre içine aynı yönde alınıyorsa bu sisteme simport (cotransport) denir. Zıt yönde taşınma antiporttur.

---

### ÇİFT 11 (Benzerlik: 1.00)

**Soru 1 (ID: db971997-3a73-40c2-92a5-e5c5a323c995)**
Soru Kökü: Klinik fizyolojide plazma osmolaritesini hesaplamak için [ 2x(Na+K) + Glikoz/18 + BUN/2.8 ] formülü kullanılır. Bu formülde sodyum iyonunun iki ile çarpılmasının rasyoneli olan ve sodyumla birlikte ekstraselüler sıvının total osmolaritesini en fazla etkileyen (–) yüklü eşlikçi anyon aşağıdakilerden hangisidir?
Doğru Şık (D): Klor
Açıklama: Ekstraselüler sıvıda en fazla bulunan anyon Klor'dur (Cl-). Plazma osmolaritesi hesaplanırken sodyumun iki ile çarpılması, ortama sodyuma eşlik eden anyonların (başta klor olmak üzere) katkısının formüle pratik olarak dâhil edilmesini sağlar.

**Soru 2 (ID: ec9255fc-1ae1-4252-939e-17424812e928)**
Soru Kökü: Klinik fizyolojide plazma osmolaritesini hesaplamak için [ 2x(Na+K) + Glikoz/18 + BUN/2.8 ] formülü kullanılır. Bu formülde sodyum iyonunun iki ile çarpılmasının rasyoneli olan ve sodyumla birlikte ekstraselüler sıvının total osmolaritesini en fazla etkileyen (–) yüklü eşlikçi anyon aşağıdakilerden hangisidir?
Doğru Şık (D): Klor
Açıklama: Ekstraselüler sıvıda en fazla bulunan anyon Klor'dur (Cl-). Plazma osmolaritesi hesaplanırken sodyumun iki ile çarpılması, ortama sodyuma eşlik eden anyonların (başta klor olmak üzere) katkısının formüle pratik olarak dâhil edilmesini sağlar.

---

### ÇİFT 12 (Benzerlik: 1.00)

**Soru 1 (ID: 5a49efda-e477-4e5d-a959-f73b4bdc6112)**
Soru Kökü: Hücre içi kalsiyum sinyalizasyonunda, sitoplazmada serbest dolaşan kalsiyum iyonlarını yüksek afinite ile bağlayarak protein kinazların aktive edilmesini sağlayan hücresel proteinlerden biri aşağıdakilerden hangisidir?
Doğru Şık (E): Kalbindin-D
Açıklama: Kalbindin-D, kalmodülin ve troponin-C hücre içinde serbest kalsiyumu bağlayan (CaBP) ve kalsiyumun fizyolojik görevlerini yerine getirmesine aracılık eden proteinlerdir. En tehlikeli distraktör olan Kalsinörin, kalsiyum bağlamaz; kalsiyum-kalmodülin kompleksi tarafından aktive edilen bir enzimdir (fosfataz).

**Soru 2 (ID: d44ae5b5-8042-4027-bc99-6f2a162df52b)**
Soru Kökü: Hücre içi kalsiyum sinyalizasyonunda, sitoplazmada serbest dolaşan kalsiyum iyonlarını yüksek afinite ile bağlayarak protein kinazların aktive edilmesini sağlayan hücresel proteinlerden biri aşağıdakilerden hangisidir?
Doğru Şık (E): Kalbindin-D
Açıklama: Kalbindin-D, kalmodülin ve troponin-C hücre içinde serbest kalsiyumu bağlayan (CaBP) ve kalsiyumun fizyolojik görevlerini yerine getirmesine aracılık eden proteinlerdir. En tehlikeli distraktör olan Kalsinörin, kalsiyum bağlamaz; kalsiyum-kalmodülin kompleksi tarafından aktive edilen bir enzimdir (fosfataz).

---

### ÇİFT 13 (Benzerlik: 1.00)

**Soru 1 (ID: 50bd565a-0ea4-43e3-94f8-f4e6d7b47e64)**
Soru Kökü: 68 yaşında erkek hasta, üç gündür devam eden şiddetli ateş ve yetersiz oral sıvı alımı nedeniyle dehidratasyon tablosunda acil servise getiriliyor. Fizik muayenesinde oral mukozanın kuru olduğu ve deri turgorunun belirgin şekilde azaldığı saptanıyor. Bu klinik tabloda, hastanın plazma kompartmanında aşağıdaki değişikliklerden hangisinin görülmesi en olasıdır?
Doğru Şık (C): Solit tanecik sayısının oransal olarak artması ve ozmotik basıncın yükselmesi
Açıklama: Dehidratasyon durumunda vücuttan su kaybedilirken solüt kaybı aynı oranda olmaz. Bu durumda plazmada su oranı düşer ve solit tanecik sayısı (özellikle sodyum) oransal olarak artar. Artan tanecik yoğunluğu plazmanın ozmotik basıncının yükselmesi ile sonuçlanır.

**Soru 2 (ID: ea2ee570-d7a2-4f9e-b343-8cf57fcee596)**
Soru Kökü: 68 yaşında erkek hasta, üç gündür devam eden şiddetli ateş ve yetersiz oral sıvı alımı nedeniyle dehidratasyon tablosunda acil servise getiriliyor. Fizik muayenesinde oral mukozanın kuru olduğu ve deri turgorunun belirgin şekilde azaldığı saptanıyor. Bu klinik tabloda, hastanın plazma kompartmanında aşağıdaki değişikliklerden hangisinin görülmesi en olasıdır?
Doğru Şık (C): Solit tanecik sayısının oransal olarak artması ve ozmotik basıncın yükselmesi
Açıklama: Dehidratasyon durumunda vücuttan su kaybedilirken solüt kaybı aynı oranda olmaz. Bu durumda plazmada su oranı düşer ve solit tanecik sayısı (özellikle sodyum) oransal olarak artar. Artan tanecik yoğunluğu plazmanın ozmotik basıncının yükselmesi ile sonuçlanır.

---

### ÇİFT 14 (Benzerlik: 1.00)

**Soru 1 (ID: b9f60b2e-a624-41d9-9689-84095cff29a0)**
Soru Kökü: Maddelerin plazma membranından basit difüzyonla geçiş hızları, moleküllerin lipofilik özellikleri ve boyutlarıyla doğrudan ilişkilidir. Buna göre aşağıdaki moleküllerin geçiş hızlarının büyükten küçüğe doğru sıralaması hangi seçenekte doğru verilmiştir?
Doğru Şık (A): CO2 > O2 > Su
Açıklama: CO2'nin lipiddeki çözünürlüğü O2'den çok daha yüksek olduğu için membrandan geçiş hızı en fazladır. Sıralama fizyolojik olarak CO2 > O2 > Su şeklinde ilerler. Suyun geçişi kısmen akuaporinler aracılığıyla olsa da, lipid tabakadan doğrudan geçişte lipofilik gazlar her zaman daha hızlıdır.

**Soru 2 (ID: d9824999-4d98-4bcb-a6d6-8d4ee837de1e)**
Soru Kökü: Maddelerin plazma membranından basit difüzyonla geçiş hızları, moleküllerin lipofilik özellikleri ve boyutlarıyla doğrudan ilişkilidir. Buna göre aşağıdaki moleküllerin geçiş hızlarının büyükten küçüğe doğru sıralaması hangi seçenekte doğru verilmiştir?
Doğru Şık (A): CO2 > O2 > Su
Açıklama: CO2'nin lipiddeki çözünürlüğü O2'den çok daha yüksek olduğu için membrandan geçiş hızı en fazladır. Sıralama fizyolojik olarak CO2 > O2 > Su şeklinde ilerler. Suyun geçişi kısmen akuaporinler aracılığıyla olsa da, lipid tabakadan doğrudan geçişte lipofilik gazlar her zaman daha hızlıdır.

---

### ÇİFT 15 (Benzerlik: 1.00)

**Soru 1 (ID: bd98295c-8602-4d4b-a487-5dea193b5fae)**
Soru Kökü: Hücre membranının akışkanlık ve geçirgenlik kontrolü hücresel homeostaz için hayati öneme sahiptir. Membranın akışkanlığını ters orantılı olarak etkileyen ve stabilitenin sağlanmasında en etkili yapısal faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Kolesterol miktarı
Açıklama: Hücre zarında kolesterol miktarı ile membranın akışkanlığı ters orantılıdır ve bu faktör akışkanlığı en fazla etkileyen unsurdur. Yağ asidi doymamışlık derecesi ve sıcaklık akışkanlığı doğru orantılı artırırken, proteinler bu mekanizmada primer belirleyici değildir. Kolesterolün bu sabitleyici etkisi suda eriyen maddelere karşı geçirgenlik bariyerini oluşturur.

**Soru 2 (ID: e50c2b15-1710-4dfa-b70e-60c0afa83b5d)**
Soru Kökü: Hücre membranının akışkanlık ve geçirgenlik kontrolü hücresel homeostaz için hayati öneme sahiptir. Membranın akışkanlığını ters orantılı olarak etkileyen ve stabilitenin sağlanmasında en etkili yapısal faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Kolesterol miktarı
Açıklama: Hücre zarında kolesterol miktarı ile membranın akışkanlığı ters orantılıdır ve bu faktör akışkanlığı en fazla etkileyen unsurdur. Yağ asidi doymamışlık derecesi ve sıcaklık akışkanlığı doğru orantılı artırırken, proteinler bu mekanizmada primer belirleyici değildir. Kolesterolün bu sabitleyici etkisi suda eriyen maddelere karşı geçirgenlik bariyerini oluşturur.

---

### ÇİFT 16 (Benzerlik: 1.00)

**Soru 1 (ID: 594abd11-1b6c-45cb-82a5-4d315cdea3cb)**
Soru Kökü: Hücre içi sinyal iletim yollarından biri olan adenilat siklaz yolağında, artan sitoplazmik cAMP seviyelerinin hücresel etkilerini oluşturmak üzere doğrudan aktive ettiği sitoplazmik hedef enzim aşağıdakilerden hangisidir?
Doğru Şık (D): Protein kinaz A
Açıklama: cAMP'nin hücre içindeki birincil ve spesifik hedefi Protein Kinaz A (PKA)'dır. PKA aktive olduktan sonra spesifik hücresel proteinleri fosforilleyerek enzimleri aktif veya inaktif hale getirir. Protein kinaz C (PKC) ise Diaçil gliserol (DAG) tarafından, Protein kinaz G (PKG) cGMP tarafından aktive edilir.

**Soru 2 (ID: b5277607-cddc-4567-9894-db992905f65c)**
Soru Kökü: Hücre içi sinyal iletim yollarından biri olan adenilat siklaz yolağında, artan sitoplazmik cAMP seviyelerinin hücresel etkilerini oluşturmak üzere doğrudan aktive ettiği sitoplazmik hedef enzim aşağıdakilerden hangisidir?
Doğru Şık (D): Protein kinaz A
Açıklama: cAMP'nin hücre içindeki birincil ve spesifik hedefi Protein Kinaz A (PKA)'dır. PKA aktive olduktan sonra spesifik hücresel proteinleri fosforilleyerek enzimleri aktif veya inaktif hale getirir. Protein kinaz C (PKC) ise Diaçil gliserol (DAG) tarafından, Protein kinaz G (PKG) cGMP tarafından aktive edilir.

---

### ÇİFT 17 (Benzerlik: 1.00)

**Soru 1 (ID: aa91c337-b65e-4340-bd22-f1fb3b1f99f6)**
Soru Kökü: Hücre zarı üzerinden gerçekleşen suyun net difüzyonunu (osmoz) durdurabilmek için kompartmanlar arası uygulanması gereken fizyolojik kuvvete ozmotik basınç denir. Gaz kanunları temel alındığında, ozmotik basınç ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Ortam sıcaklığı ile ters orantılıdır.
Açıklama: Ozmotik basınç (P = nRT/V) aynen gaz basıncında olduğu gibi mutlak sıcaklık (T) ile doğru orantılıdır. Çözeltinin hacmi (V) ile ters, tanecik sayısı (n) ile doğru orantılıdır. Sıcaklığın ters orantılı olduğu bilgisi formülün temel mekanizmasına aykırıdır.

**Soru 2 (ID: bae18c36-4ed3-4147-b68c-d1c2df887c20)**
Soru Kökü: Hücre zarı üzerinden gerçekleşen suyun net difüzyonunu (osmoz) durdurabilmek için kompartmanlar arası uygulanması gereken fizyolojik kuvvete ozmotik basınç denir. Gaz kanunları temel alındığında, ozmotik basınç ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Ortam sıcaklığı ile ters orantılıdır.
Açıklama: Ozmotik basınç (P = nRT/V) aynen gaz basıncında olduğu gibi mutlak sıcaklık (T) ile doğru orantılıdır. Çözeltinin hacmi (V) ile ters, tanecik sayısı (n) ile doğru orantılıdır. Sıcaklığın ters orantılı olduğu bilgisi formülün temel mekanizmasına aykırıdır.

---

### ÇİFT 18 (Benzerlik: 1.00)

**Soru 1 (ID: 8bb73561-b4bc-4356-83f1-3d9d28974d7e)**
Soru Kökü: 32 yaşındaki böbrek nakli alıcısı hastaya immünsüpresif tedavi protokolü kapsamında takrolimus başlanmıştır. Takrolimusun hücresel düzeyde inhibe ettiği kalsinörin enziminin, fizyolojik koşullarda kalmodülin ile birleşerek T hücrelerinde gerçekleştirdiği spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (E): T hücrelerindeki kalsiyum kanallarını kapatmak
Açıklama: Kalsinörin enzimi, kalsiyum ile doymuş kalmodülin tarafından aktive edildiğinde T hücrelerindeki kalsiyum kanallarını kapatır ve bu hücrelerin aktive olmasında kilit bir rol oynar. Takrolimus ve siklosporin gibi majör immünsüpresifler kalsinörini bloke ederek T hücresi yanıtını felce uğratır.

**Soru 2 (ID: 8fff97a0-6346-4483-b5ea-c52d1e32acb5)**
Soru Kökü: 32 yaşındaki böbrek nakli alıcısı hastaya immünsüpresif tedavi protokolü kapsamında takrolimus başlanmıştır. Takrolimusun hücresel düzeyde inhibe ettiği kalsinörin enziminin, fizyolojik koşullarda kalmodülin ile birleşerek T hücrelerinde gerçekleştirdiği spesifik etki aşağıdakilerden hangisidir?
Doğru Şık (E): T hücrelerindeki kalsiyum kanallarını kapatmak
Açıklama: Kalsinörin enzimi, kalsiyum ile doymuş kalmodülin tarafından aktive edildiğinde T hücrelerindeki kalsiyum kanallarını kapatır ve bu hücrelerin aktive olmasında kilit bir rol oynar. Takrolimus ve siklosporin gibi majör immünsüpresifler kalsinörini bloke ederek T hücresi yanıtını felce uğratır.

---

### ÇİFT 19 (Benzerlik: 1.00)

**Soru 1 (ID: 27d9e24e-3430-4a5c-965f-0f40385d54fc)**
Soru Kökü: Büyüme faktörleri veya spesifik sitokinler hücre zarındaki reseptörlerine bağlandıklarında, membran üzerinde birbirinden ayrı duran iki reseptör parçasının bir araya gelerek tek bir fonksiyonel, aktif ünite oluşturduğu görülür. Reseptör aktivasyonundaki bu fiziksel birleşme olayına ne ad verilir?
Doğru Şık (B): Dimerizasyon
Açıklama: Dimerizasyon, ligand (substrat) bağlandığında hücre zarında izole şekilde yüzen reseptör alt birimlerinin birbirine yaklaşarak birleşmesidir. Özellikle tirozin kinaz ve JAK-STAT yolağını kullanan büyüme faktörleri ve sitokinlerin aktivasyonunda ilk ve en zorunlu adımdır.

**Soru 2 (ID: 379f74bf-67ef-492b-b20f-28cbb4ecc9f2)**
Soru Kökü: Büyüme faktörleri veya spesifik sitokinler hücre zarındaki reseptörlerine bağlandıklarında, membran üzerinde birbirinden ayrı duran iki reseptör parçasının bir araya gelerek tek bir fonksiyonel, aktif ünite oluşturduğu görülür. Reseptör aktivasyonundaki bu fiziksel birleşme olayına ne ad verilir?
Doğru Şık (B): Dimerizasyon
Açıklama: Dimerizasyon, ligand (substrat) bağlandığında hücre zarında izole şekilde yüzen reseptör alt birimlerinin birbirine yaklaşarak birleşmesidir. Özellikle tirozin kinaz ve JAK-STAT yolağını kullanan büyüme faktörleri ve sitokinlerin aktivasyonunda ilk ve en zorunlu adımdır.

---

### ÇİFT 20 (Benzerlik: 1.00)

**Soru 1 (ID: 7400be64-aafd-48b3-87ec-7be385ee3368)**
Soru Kökü: Kortizol ve aldosteron gibi lipofilik hormonların etki mekanizmasında, hormon bulunmayan istirahat dönemindeki sitoplazmik reseptör durumu ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): İnaktif haldeki reseptör-Hsp-90 kompleksi zaten hedef gen üzerindeki nükleer DNA sekansına sıkıca bağlıdır.
Açıklama: Steroid hormon reseptörleri, hormon bulunmadığı dönemde nükleusta (çekirdekte) DNA'ya bağlı halde DEĞİL, sitoplazmada Hsp-90 ısı şok proteini ile kaplanmış halde serbest beklerler. Reseptörün çekirdeğe girip DNA'ya bağlanabilmesi için ancak hormonun gelip Hsp-90'ı reseptörden koparması şarttır.

**Soru 2 (ID: fdc84a06-9a1d-4f64-999a-80f492bd38ef)**
Soru Kökü: Kortizol ve aldosteron gibi lipofilik hormonların etki mekanizmasında, hormon bulunmayan istirahat dönemindeki sitoplazmik reseptör durumu ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): İnaktif haldeki reseptör-Hsp-90 kompleksi zaten hedef gen üzerindeki nükleer DNA sekansına sıkıca bağlıdır.
Açıklama: Steroid hormon reseptörleri, hormon bulunmadığı dönemde nükleusta (çekirdekte) DNA'ya bağlı halde DEĞİL, sitoplazmada Hsp-90 ısı şok proteini ile kaplanmış halde serbest beklerler. Reseptörün çekirdeğe girip DNA'ya bağlanabilmesi için ancak hormonun gelip Hsp-90'ı reseptörden koparması şarttır.

---

### ÇİFT 21 (Benzerlik: 1.00)

**Soru 1 (ID: 02ca2ddc-5b88-4134-857e-e34ef86f8631)**
Soru Kökü: Kas dokusu başta olmak üzere kalsiyum aracılı hücresel süreçlerde görev yapan ve yapısında özgül kalsiyum bağlanma bölgeleri barındıran spesifik sitoplazmik protein aşağıdakilerden hangisidir?
Doğru Şık (C): Troponin-C
Açıklama: Troponin-C, özellikle iskelet ve kalp kasında sitoplazmik kalsiyumu bağlayarak kasılma döngüsünü tetikleyen ana kalsiyum bağlayıcı proteindir (CaBP). Kalmodülin de bir CaBP olmasına rağmen, Troponin-C kas dokusundaki spesifik rolüyle fizyolojide ayrı bir yere sahiptir.

**Soru 2 (ID: 39285dd4-6921-4508-80bc-d93315f34971)**
Soru Kökü: Kas dokusu başta olmak üzere kalsiyum aracılı hücresel süreçlerde görev yapan ve yapısında özgül kalsiyum bağlanma bölgeleri barındıran spesifik sitoplazmik protein aşağıdakilerden hangisidir?
Doğru Şık (C): Troponin-C
Açıklama: Troponin-C, özellikle iskelet ve kalp kasında sitoplazmik kalsiyumu bağlayarak kasılma döngüsünü tetikleyen ana kalsiyum bağlayıcı proteindir (CaBP). Kalmodülin de bir CaBP olmasına rağmen, Troponin-C kas dokusundaki spesifik rolüyle fizyolojide ayrı bir yere sahiptir.

---

### ÇİFT 22 (Benzerlik: 1.00)

**Soru 1 (ID: 650bb068-6791-4686-98ca-7833ff069912)**
Soru Kökü: Hücre zarına yerleşik spesifik reseptörlere bağlanan büyük moleküllerin, iç yüzeydeki adaptin ve yapısal kılıf proteinleri aracılığıyla vezikül oluşturarak hücre içine alınmasına klatrin aracılı endositoz denir. Aşağıdaki ikililerden hangisi doğrudan bu özelleşmiş yolla stoplazmaya alınır?
Doğru Şık (E): LDL ve B12 vitamini
Açıklama: Klatrin aracılı reseptör bağımlı endositozla hücreye alınan kritik moleküller arasında LDL (Düşük dansiteli lipoprotein), B12 vitamini, Transferrin, opiatlar ve Sinir Büyüme Faktörü yer alır. Su kanallardan/ozmozla, gazlar difüzyonla, bakteriler ise fagositozla geçer.

**Soru 2 (ID: f5835b38-0f26-4061-bdf2-4341681c5bda)**
Soru Kökü: Hücre zarına yerleşik spesifik reseptörlere bağlanan büyük moleküllerin, iç yüzeydeki adaptin ve yapısal kılıf proteinleri aracılığıyla vezikül oluşturarak hücre içine alınmasına klatrin aracılı endositoz denir. Aşağıdaki ikililerden hangisi doğrudan bu özelleşmiş yolla stoplazmaya alınır?
Doğru Şık (E): LDL ve B12 vitamini
Açıklama: Klatrin aracılı reseptör bağımlı endositozla hücreye alınan kritik moleküller arasında LDL (Düşük dansiteli lipoprotein), B12 vitamini, Transferrin, opiatlar ve Sinir Büyüme Faktörü yer alır. Su kanallardan/ozmozla, gazlar difüzyonla, bakteriler ise fagositozla geçer.

---

### ÇİFT 23 (Benzerlik: 1.00)

**Soru 1 (ID: 70181eb0-32fb-4a58-91b9-0b355114cac1)**
Soru Kökü: Endotel hücrelerinden fizyolojik bir vazodilatatör olan NO (Nitrik Oksit) üretimi süreci ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): NO molekülü suda yüksek oranda çözünerek uzun süre endotel veziküllerinde depolanır.
Açıklama: Nitrik Oksit (NO) gaz yapılı lipofilik bir moleküldür. Sentezlendiği anda membranlardan çok hızlı ve kolaylıkla difüze olup komşu düz kas hücrelerine geçer; herhangi bir vezikül içinde depolanması veya suda yüksek oranda çözünmesi söz konusu değildir.

**Soru 2 (ID: edf0fc65-fc77-4135-ae28-5ff1a4930bca)**
Soru Kökü: Endotel hücrelerinden fizyolojik bir vazodilatatör olan NO (Nitrik Oksit) üretimi süreci ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): NO molekülü suda yüksek oranda çözünerek uzun süre endotel veziküllerinde depolanır.
Açıklama: Nitrik Oksit (NO) gaz yapılı lipofilik bir moleküldür. Sentezlendiği anda membranlardan çok hızlı ve kolaylıkla difüze olup komşu düz kas hücrelerine geçer; herhangi bir vezikül içinde depolanması veya suda yüksek oranda çözünmesi söz konusu değildir.

---

### ÇİFT 24 (Benzerlik: 1.00)

**Soru 1 (ID: 3417a0ff-a2b5-463b-bf5e-410b1f7941ab)**
Soru Kökü: 39 haftalık gebe olan 28 yaşındaki bir kadının doğum eylemi sırasında, fetusun başının serviksi (rahim ağzı) germesine bağlı olarak uterus kasılmalarının şiddetinin giderek artması gözlenmektedir. Bu fizyolojik süreç aşağıdaki homeostatik kontrol mekanizmalarından hangisine örnektir?
Doğru Şık (A): Pozitif feedback
Açıklama: Doğumda serviksin gerilmesi, hipofizden oksitosin salınımını tetikler; oksitosin uterusu kasar, kasılan uterus serviksi daha çok gerer. Bu durum, oluşan cevabın uyarıyı daha da güçlendirdiği klasik bir pozitif feedback (kısır döngü) mekanizmasıdır. Süreç ancak fetüs doğduğunda uyaranın ortadan kalkmasıyla son bulur.

**Soru 2 (ID: 4320ea54-a02a-47eb-9862-6e6aae5d9829)**
Soru Kökü: 39 haftalık gebe olan 28 yaşındaki bir kadının doğum eylemi sırasında, fetusun başının serviksi (rahim ağzı) germesine bağlı olarak uterus kasılmalarının şiddetinin giderek artması gözlenmektedir. Bu fizyolojik süreç aşağıdaki homeostatik kontrol mekanizmalarından hangisine örnektir?
Doğru Şık (A): Pozitif feedback
Açıklama: Doğumda serviksin gerilmesi, hipofizden oksitosin salınımını tetikler; oksitosin uterusu kasar, kasılan uterus serviksi daha çok gerer. Bu durum, oluşan cevabın uyarıyı daha da güçlendirdiği klasik bir pozitif feedback (kısır döngü) mekanizmasıdır. Süreç ancak fetüs doğduğunda uyaranın ortadan kalkmasıyla son bulur.

---

### ÇİFT 25 (Benzerlik: 1.00)

**Soru 1 (ID: 26616b7b-f26a-45fe-a9eb-7030f02174a6)**
Soru Kökü: Vücut iç çevresinin kararlı tutulmasını sağlayan kontrol mekanizmaları incelendiğinde, aşağıdakilerden hangisi pozitif feedback sistemlerinin özelliklerinden biri **değildir**?
Doğru Şık (D): Olayı başlatan uyarıya zıt yönde etki ederek iç çevreyi hızla sabitlemesi
Açıklama: Olayı başlatan uyarıya zıt yönde etki ederek homeostazisi hızla kilitleyen ve dengeye getiren sistem negatif feedback mekanizmasıdır. Pozitif feedback, uyarıyı sönümlemez; aksine uyarıyı daha da büyüterek (amplifikasyon) süreci son noktaya kadar (örneğin doğum eylemi bitene kadar) güçlendirerek kısır döngü yaratır.

**Soru 2 (ID: 5a45457b-c8fa-45f6-b79e-1b6996de6eb2)**
Soru Kökü: Vücut iç çevresinin kararlı tutulmasını sağlayan kontrol mekanizmaları incelendiğinde, aşağıdakilerden hangisi pozitif feedback sistemlerinin özelliklerinden biri **değildir**?
Doğru Şık (D): Olayı başlatan uyarıya zıt yönde etki ederek iç çevreyi hızla sabitlemesi
Açıklama: Olayı başlatan uyarıya zıt yönde etki ederek homeostazisi hızla kilitleyen ve dengeye getiren sistem negatif feedback mekanizmasıdır. Pozitif feedback, uyarıyı sönümlemez; aksine uyarıyı daha da büyüterek (amplifikasyon) süreci son noktaya kadar (örneğin doğum eylemi bitene kadar) güçlendirerek kısır döngü yaratır.

---

### ÇİFT 26 (Benzerlik: 1.00)

**Soru 1 (ID: 44a53ec6-5b9a-463f-a538-b0219d92fa8a)**
Soru Kökü: Böbrek proksimal tübüllerinde hücre içi sodyum konsantrasyonunu düşük tutan sodyum gradienti sayesinde hidrojen (H+) iyonları hücreden idrar lümenine sekrete edilir. Sodyum hücreye girerken hidrojenin dışarı atıldığı bu transport mekanizmasının tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Antiport (Counter transport)
Açıklama: Na+-H+ mekanizmasında sodyum elektrokimyasal gradyanı yönünde hücre içine girerken, bu enerjiyi kullanarak hidrojen iyonu lümene (hücre dışına) atılır. Moleküllerin zıt yönlerde yer değiştirdiği bu sekonder aktif transport mekanizmasına antiport (counter transport) denir.

**Soru 2 (ID: 65b0a2a2-a452-473b-ace9-cc5c3decdd33)**
Soru Kökü: Böbrek proksimal tübüllerinde hücre içi sodyum konsantrasyonunu düşük tutan sodyum gradienti sayesinde hidrojen (H+) iyonları hücreden idrar lümenine sekrete edilir. Sodyum hücreye girerken hidrojenin dışarı atıldığı bu transport mekanizmasının tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Antiport (Counter transport)
Açıklama: Na+-H+ mekanizmasında sodyum elektrokimyasal gradyanı yönünde hücre içine girerken, bu enerjiyi kullanarak hidrojen iyonu lümene (hücre dışına) atılır. Moleküllerin zıt yönlerde yer değiştirdiği bu sekonder aktif transport mekanizmasına antiport (counter transport) denir.

---

### ÇİFT 27 (Benzerlik: 1.00)

**Soru 1 (ID: 667482e5-87b9-4754-b240-926cb28e8d76)**
Soru Kökü: Basit difüzyon dinamiklerini etkileyen faktörler incelendiğinde, belli bir dereceye kadar ortam sıcaklığının artırılmasının net difüzyon hızını ivmelendirdiği bilinmektedir. Bu etkinin hücresel düzeydeki temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Moleküllerin kinetik enerjisini ve rastgele termal hareketini artırması
Açıklama: Sıcaklık artışı moleküllerin kinetik enerjisini yükseltir, bu da onların daha hızlı ve rastgele hareket etmesine neden olarak difüzyon hızını artırır. Basit difüzyonda taşıyıcı protein görev almadığı için Vmax ile ilgili bir durum söz konusu değildir. Konsantrasyon farkının sıfırlanması ise difüzyonun durması anlamına gelir.

**Soru 2 (ID: e1aa2098-0400-412a-8769-665bd7604a82)**
Soru Kökü: Basit difüzyon dinamiklerini etkileyen faktörler incelendiğinde, belli bir dereceye kadar ortam sıcaklığının artırılmasının net difüzyon hızını ivmelendirdiği bilinmektedir. Bu etkinin hücresel düzeydeki temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Moleküllerin kinetik enerjisini ve rastgele termal hareketini artırması
Açıklama: Sıcaklık artışı moleküllerin kinetik enerjisini yükseltir, bu da onların daha hızlı ve rastgele hareket etmesine neden olarak difüzyon hızını artırır. Basit difüzyonda taşıyıcı protein görev almadığı için Vmax ile ilgili bir durum söz konusu değildir. Konsantrasyon farkının sıfırlanması ise difüzyonun durması anlamına gelir.

---

### ÇİFT 28 (Benzerlik: 1.00)

**Soru 1 (ID: 8cbf9301-6251-41e4-971d-fafdc5bc0c5e)**
Soru Kökü: Trafik kazası sonrası hipovolemik şok tablosuyla acil servise getirilen hastaya, hızlı volüm replasmanı amacıyla IV %0.9 NaCl solüsyonu infüzyonu başlanıyor. Klinikte en sık kullanılan bu solüsyonun eritrosit hacmi üzerinde değişiklik yaratmamasının (şişme veya büzülme yapmamasının) nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): 280 mOsm/L ozmotik basınç ile plazmaya izotonik bir yapı sergilemesi
Açıklama: %0.9 NaCl solüsyonunun osmolaritesi 280 mOsm/L civarındadır. Normal plazma osmolaritesine eşdeğer (izotonik) olduğu için hücre içine veya dışına net su geçişi olmaz, bu nedenle eritrosit hacmi değişmez.

**Soru 2 (ID: b198f2bc-4bdf-480b-80b9-ba90a33f72b5)**
Soru Kökü: Trafik kazası sonrası hipovolemik şok tablosuyla acil servise getirilen hastaya, hızlı volüm replasmanı amacıyla IV %0.9 NaCl solüsyonu infüzyonu başlanıyor. Klinikte en sık kullanılan bu solüsyonun eritrosit hacmi üzerinde değişiklik yaratmamasının (şişme veya büzülme yapmamasının) nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): 280 mOsm/L ozmotik basınç ile plazmaya izotonik bir yapı sergilemesi
Açıklama: %0.9 NaCl solüsyonunun osmolaritesi 280 mOsm/L civarındadır. Normal plazma osmolaritesine eşdeğer (izotonik) olduğu için hücre içine veya dışına net su geçişi olmaz, bu nedenle eritrosit hacmi değişmez.

---

### ÇİFT 29 (Benzerlik: 1.00)

**Soru 1 (ID: 00bef8bd-519f-42a7-a628-d6f74084a5ef)**
Soru Kökü: G protein kenetli reseptörlerin aktivasyonu sonucunda, Gs proteininin alfa alt birimi hücre membranında bulunan bir enzimi uyarır. Forskolin tarafından da doğrudan aktive edilebilen ve ATP molekülünü hücre içi ikinci haberci olan cAMP'ye dönüştüren bu enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Adenilat siklaz
Açıklama: Adenilat siklaz, hücre membranında yerleşik bir enzimdir ve Gs proteini aracılığıyla aktifleştiğinde sitoplazmadaki ATP'yi kullanarak cAMP sentezler. En güçlü distraktör olan fosfodiesteraz ise tam tersi bir görev üstlenerek üretilmiş olan cAMP'yi yıkarak 5'AMP'ye dönüştürür.

**Soru 2 (ID: 25de6d3b-43b7-43dd-87ed-98d0f34d53fa)**
Soru Kökü: G protein kenetli reseptörlerin aktivasyonu sonucunda, Gs proteininin alfa alt birimi hücre membranında bulunan bir enzimi uyarır. Forskolin tarafından da doğrudan aktive edilebilen ve ATP molekülünü hücre içi ikinci haberci olan cAMP'ye dönüştüren bu enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Adenilat siklaz
Açıklama: Adenilat siklaz, hücre membranında yerleşik bir enzimdir ve Gs proteini aracılığıyla aktifleştiğinde sitoplazmadaki ATP'yi kullanarak cAMP sentezler. En güçlü distraktör olan fosfodiesteraz ise tam tersi bir görev üstlenerek üretilmiş olan cAMP'yi yıkarak 5'AMP'ye dönüştürür.

---

### ÇİFT 30 (Benzerlik: 1.00)

**Soru 1 (ID: 1af19448-3f6d-47b3-ad1f-b37ae8053cf6)**
Soru Kökü: Araşidonik asit metabolizmasında görevli enzimlerden olan Siklooksijenaz-1 (COX-1) izoformunun biyolojik rolü ve ekspresyonu ile ilgili aşağıdakilerden hangisi doğrudur?
Doğru Şık (C): Organizmadaki bazal fizyolojik fonksiyonların sürekli olarak sürdürülmesinde görev alır.
Açıklama: COX-1 enzimi yapısal (konstitütif) bir enzimdir ve mide mukozasının korunması, böbrek kan akımının düzenlenmesi ve trombosit fonksiyonları gibi bazal fizyolojik süreçlerde sürekli çalışır. Membrandan araşidonik asit koparan enzim COX değil, Fosfolipaz A2'dir.

**Soru 2 (ID: 63367662-af3e-4e46-b9a1-69d1888d148d)**
Soru Kökü: Araşidonik asit metabolizmasında görevli enzimlerden olan Siklooksijenaz-1 (COX-1) izoformunun biyolojik rolü ve ekspresyonu ile ilgili aşağıdakilerden hangisi doğrudur?
Doğru Şık (C): Organizmadaki bazal fizyolojik fonksiyonların sürekli olarak sürdürülmesinde görev alır.
Açıklama: COX-1 enzimi yapısal (konstitütif) bir enzimdir ve mide mukozasının korunması, böbrek kan akımının düzenlenmesi ve trombosit fonksiyonları gibi bazal fizyolojik süreçlerde sürekli çalışır. Membrandan araşidonik asit koparan enzim COX değil, Fosfolipaz A2'dir.

---

### ÇİFT 31 (Benzerlik: 1.00)

**Soru 1 (ID: ae27b19d-b864-4ff4-b2a3-6735fecd8977)**
Soru Kökü: Lösemi tedavisi alan ve ciddi nötropeni gelişen 12 yaşındaki çocuk hastaya, kemik iliğini uyararak lökosit yapımını artırmak amacıyla koloni stimulan faktör (CSF) tedavisi başlanmıştır. CSF'nin hedef kök hücrelerde mitotik çoğalma sinyalini çekirdeğe iletmek için kullandığı temel sinyal yolağı aşağıdakilerden hangisidir?
Doğru Şık (D): JAK-STAT sinyal yolağı
Açıklama: Koloni stimulan faktörler (CSF), büyüme hormonu, prolaktin, leptin ve sitokinler hücre içi sinyal iletiminde JAK-STAT yolağını kullanırlar. Reseptör aktivasyonu sonrası tirozin kinaz alt grubu olan JAK aktiflenir, o da transkripsiyon faktörü olan STAT'ı fosforilleyerek çekirdeğe gönderir.

**Soru 2 (ID: da96e5ac-4486-4f4a-b121-ac7d51b5ab97)**
Soru Kökü: Lösemi tedavisi alan ve ciddi nötropeni gelişen 12 yaşındaki çocuk hastaya, kemik iliğini uyararak lökosit yapımını artırmak amacıyla koloni stimulan faktör (CSF) tedavisi başlanmıştır. CSF'nin hedef kök hücrelerde mitotik çoğalma sinyalini çekirdeğe iletmek için kullandığı temel sinyal yolağı aşağıdakilerden hangisidir?
Doğru Şık (D): JAK-STAT sinyal yolağı
Açıklama: Koloni stimulan faktörler (CSF), büyüme hormonu, prolaktin, leptin ve sitokinler hücre içi sinyal iletiminde JAK-STAT yolağını kullanırlar. Reseptör aktivasyonu sonrası tirozin kinaz alt grubu olan JAK aktiflenir, o da transkripsiyon faktörü olan STAT'ı fosforilleyerek çekirdeğe gönderir.

---

### ÇİFT 32 (Benzerlik: 1.00)

**Soru 1 (ID: 57bd4cb1-9d25-4c53-8593-5ca217741c22)**
Soru Kökü: Vücut sıvı kompartmanlarının fizikokimyasal özelliklerini tanımlayan osmolalite kavramı ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): 1 litre çözeltide çözünmüş partiküllerin sayısını ifade eder.
Açıklama: 1 litre çözeltide çözünmüş partiküllerin sayısını ifade eden kavram osmolalite değil, ozmolaritedir. Osmolalitenin en önemli klinik avantajı, hacimden ziyade 1 kilogram çözücü üzerinden hesaplanması sayesinde sıcaklık ve solüt hacminden etkilenmeyen çok daha net bir ölçüm sunmasıdır.

**Soru 2 (ID: 667cefa3-b8b2-4995-9de8-65e0474c3728)**
Soru Kökü: Vücut sıvı kompartmanlarının fizikokimyasal özelliklerini tanımlayan osmolalite kavramı ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): 1 litre çözeltide çözünmüş partiküllerin sayısını ifade eder.
Açıklama: 1 litre çözeltide çözünmüş partiküllerin sayısını ifade eden kavram osmolalite değil, ozmolaritedir. Osmolalitenin en önemli klinik avantajı, hacimden ziyade 1 kilogram çözücü üzerinden hesaplanması sayesinde sıcaklık ve solüt hacminden etkilenmeyen çok daha net bir ölçüm sunmasıdır.

---

### ÇİFT 33 (Benzerlik: 1.00)

**Soru 1 (ID: b171853f-d2f9-4cb0-a676-2523c19a12f3)**
Soru Kökü: Büyük bir cerrahi operasyon sırasında kanaması olan hastaya Ringer Laktat solüsyonu verilmektedir. Bu sıvının hücre içi ve hücre dışı sıvı kompartmanları arasındaki su dengesini bozmaması, solüsyonun hangi özelliği ile doğrudan ilişkilidir?
Doğru Şık (C): Yaklaşık 278 mOsm/L osmotik basınca sahip izotonik bir sıvı olması
Açıklama: Ringer Laktat solüsyonu 278 mOsm/L'lik osmolaritesi ile plazmaya izotonik bir sıvıdır. Tıpkı %0.9 NaCl gibi, hücre zarları üzerinden net su kaymasına yol açmadığı için eritrosit hacminde değişikliğe neden olmaz ve güvenli volüm genişlemesi sağlar.

**Soru 2 (ID: d8c545ff-f99d-46f2-8766-786cfe89e978)**
Soru Kökü: Büyük bir cerrahi operasyon sırasında kanaması olan hastaya Ringer Laktat solüsyonu verilmektedir. Bu sıvının hücre içi ve hücre dışı sıvı kompartmanları arasındaki su dengesini bozmaması, solüsyonun hangi özelliği ile doğrudan ilişkilidir?
Doğru Şık (C): Yaklaşık 278 mOsm/L osmotik basınca sahip izotonik bir sıvı olması
Açıklama: Ringer Laktat solüsyonu 278 mOsm/L'lik osmolaritesi ile plazmaya izotonik bir sıvıdır. Tıpkı %0.9 NaCl gibi, hücre zarları üzerinden net su kaymasına yol açmadığı için eritrosit hacminde değişikliğe neden olmaz ve güvenli volüm genişlemesi sağlar.

---

### ÇİFT 34 (Benzerlik: 1.00)

**Soru 1 (ID: 02887442-cd72-445e-81eb-3e116e5dbb01)**
Soru Kökü: Bağırsak lümenindeki aminoasitler sodyum bağımlı sekonder aktif transport ile enterosit içine konsantre edilir. Hücre içinde biriken bu aminoasitlerin bazolateral membrandan intertisyel aralığa geçişini sağlayan temel fizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Kolaylaştırılmış difüzyon
Açıklama: Enterosit içinde simport ile biriktirilen aminoasitler, hücre içinde yüksek konsantrasyona ulaşır. Bazolateral membrandan kana (intertisyel aralığa) geçişleri ise taşıyıcı proteinler aracılığıyla kendi konsantrasyon gradientleri yönünde, yani kolaylaştırılmış difüzyon mekanizmasıyla gerçekleşir. Burada ATP veya sodyum gradienti kullanılmaz.

**Soru 2 (ID: 4ae01c51-0444-4d6a-b974-387edf8d3904)**
Soru Kökü: Bağırsak lümenindeki aminoasitler sodyum bağımlı sekonder aktif transport ile enterosit içine konsantre edilir. Hücre içinde biriken bu aminoasitlerin bazolateral membrandan intertisyel aralığa geçişini sağlayan temel fizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Kolaylaştırılmış difüzyon
Açıklama: Enterosit içinde simport ile biriktirilen aminoasitler, hücre içinde yüksek konsantrasyona ulaşır. Bazolateral membrandan kana (intertisyel aralığa) geçişleri ise taşıyıcı proteinler aracılığıyla kendi konsantrasyon gradientleri yönünde, yani kolaylaştırılmış difüzyon mekanizmasıyla gerçekleşir. Burada ATP veya sodyum gradienti kullanılmaz.

---

### ÇİFT 35 (Benzerlik: 1.00)

**Soru 1 (ID: 63a7bb76-700d-46ff-8a55-aef053cff039)**
Soru Kökü: Ağır semptomatik hiponatremisi olan yoğun bakım hastasına serum sodyumunu kontrollü yükseltmek amacıyla intravenöz yoldan hipertonik %3 NaCl (1026 mOsm/L) solüsyonu infüze edilmektedir. Bu işlemin, hastanın kanındaki eritrositlerin hacmi üzerinde nasıl bir etki yaratması beklenir?
Doğru Şık (D): Ozmotik güçle su hücre dışına çekilir ve eritrosit hacmi azalır
Açıklama: Hipertonik sıvıların (örn. %3 NaCl) plazma osmolaritesi eritrosit içi sıvıdan çok daha yüksektir. Ozmotik gradyan nedeniyle su, derişimi düşük olan hücre içinden, derişimi yüksek olan hipertonik plazmaya doğru hareket eder (osmoz). Sonuç olarak eritrosit büzüşür ve hacmi azalır.

**Soru 2 (ID: a07fe42e-48fe-4d4c-98a8-2b1aa3cd135c)**
Soru Kökü: Ağır semptomatik hiponatremisi olan yoğun bakım hastasına serum sodyumunu kontrollü yükseltmek amacıyla intravenöz yoldan hipertonik %3 NaCl (1026 mOsm/L) solüsyonu infüze edilmektedir. Bu işlemin, hastanın kanındaki eritrositlerin hacmi üzerinde nasıl bir etki yaratması beklenir?
Doğru Şık (D): Ozmotik güçle su hücre dışına çekilir ve eritrosit hacmi azalır
Açıklama: Hipertonik sıvıların (örn. %3 NaCl) plazma osmolaritesi eritrosit içi sıvıdan çok daha yüksektir. Ozmotik gradyan nedeniyle su, derişimi düşük olan hücre içinden, derişimi yüksek olan hipertonik plazmaya doğru hareket eder (osmoz). Sonuç olarak eritrosit büzüşür ve hacmi azalır.

---

### ÇİFT 36 (Benzerlik: 1.00)

**Soru 1 (ID: 5836d67d-1a79-4bcc-9c6b-7d1399474858)**
Soru Kökü: Lipofilik yapılı steroid hormonların hücresel düzeydeki etki mekanizması incelendiğinde, hormonun sitoplazmadaki özgül reseptörüne bağlanmasıyla fizyolojik etkinin ortaya çıkması sürecinde gerçekleşen **ilk** kritik olay aşağıdakilerden hangisidir?
Doğru Şık (A): Hsp-90'ın ayrılarak hormon-reseptör kompleksinin çekirdeğe geçmesi
Açıklama: Steroid hormon hücre içine difüze olduktan sonra reseptörüne bağlanır. Bağlanma gerçekleşir gerçekleşmez, inaktif dönemde reseptörün DNA'ya bağlanacak domainini örten Hsp-90 (ısı şok proteini) ayrılır. Açığa çıkan hormon-reseptör kompleksi nükleus içine taşınarak transkripsiyonu başlatır.

**Soru 2 (ID: aee6f9cd-0420-4986-bd6a-3a40ab61b575)**
Soru Kökü: Lipofilik yapılı steroid hormonların hücresel düzeydeki etki mekanizması incelendiğinde, hormonun sitoplazmadaki özgül reseptörüne bağlanmasıyla fizyolojik etkinin ortaya çıkması sürecinde gerçekleşen **ilk** kritik olay aşağıdakilerden hangisidir?
Doğru Şık (A): Hsp-90'ın ayrılarak hormon-reseptör kompleksinin çekirdeğe geçmesi
Açıklama: Steroid hormon hücre içine difüze olduktan sonra reseptörüne bağlanır. Bağlanma gerçekleşir gerçekleşmez, inaktif dönemde reseptörün DNA'ya bağlanacak domainini örten Hsp-90 (ısı şok proteini) ayrılır. Açığa çıkan hormon-reseptör kompleksi nükleus içine taşınarak transkripsiyonu başlatır.

---

### ÇİFT 37 (Benzerlik: 1.00)

**Soru 1 (ID: 862b914b-b249-4940-8807-52efc1a62862)**
Soru Kökü: Vücut sıvı kompartmanlarında çözünmüş maddelerin konsantrasyonunu ifade etmek için kullanılan ve 'çözücünün 1 kilogramındaki çözünmüş partiküllerin sayısı' olarak tanımlanan kavram aşağıdakilerden hangisidir?
Doğru Şık (B): Ozmolalite
Açıklama: Ozmolalite, çözücünün 1 kilogramındaki çözünmüş partiküllerin sayısını (osmol/kg) ifade eden fizikokimyasal bir ölçümdür. Ozmolarite (1 litre çözeltideki partikül sayısı) ile sıkça karıştırılır, ancak hacim yerine kütle referans alındığı için osmolalite adını alır. Hacim bazlı ölçümler sıcaklık değişimleriyle dalgalanırken, kütle bazlı osmolalite daha stabil bir parametredir.

**Soru 2 (ID: b9fff66b-24d8-42d3-83ec-6f5f09d0e17b)**
Soru Kökü: Vücut sıvı kompartmanlarında çözünmüş maddelerin konsantrasyonunu ifade etmek için kullanılan ve 'çözücünün 1 kilogramındaki çözünmüş partiküllerin sayısı' olarak tanımlanan kavram aşağıdakilerden hangisidir?
Doğru Şık (B): Ozmolalite
Açıklama: Ozmolalite, çözücünün 1 kilogramındaki çözünmüş partiküllerin sayısını (osmol/kg) ifade eden fizikokimyasal bir ölçümdür. Ozmolarite (1 litre çözeltideki partikül sayısı) ile sıkça karıştırılır, ancak hacim yerine kütle referans alındığı için osmolalite adını alır. Hacim bazlı ölçümler sıcaklık değişimleriyle dalgalanırken, kütle bazlı osmolalite daha stabil bir parametredir.

---

### ÇİFT 38 (Benzerlik: 1.00)

**Soru 1 (ID: 0b455692-af96-4ee6-bedf-84f226ef359a)**
Soru Kökü: 45 yaşındaki bir hastada arteryel kan basıncının aniden yükselmesi üzerine baroreseptörler uyarılır. Bu uyarı sonucunda merkezi sinir sistemi damar direncini düşürerek kan basıncını yeniden normal seviyelere çeker. Oluşan bu fizyolojik cevabın, olayı başlatan uyarıya tam ters yönde etki etmesi prensibine dayanan homeostatik kontrol mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Negatif feedback
Açıklama: Negatif feedback sistemlerinde oluşan nihai hücresel veya fizyolojik cevap, olayı başlatan uyarının etkisini ortadan kaldırmak üzere zıt yönde etki eder. Vücuttaki fizyolojik olayların (kan basıncı, vücut ısısı, hormon salınımı) neredeyse tamamı negatif feedback döngüleriyle dar ve güvenli aralıklarda sabit tutulur. Pozitif feedback ise uyarıyı zıt yönde sönümlemek yerine daha da güçlendirir.

**Soru 2 (ID: a0d8bc9d-d066-420c-a2ab-d90f389b7ee0)**
Soru Kökü: 45 yaşındaki bir hastada arteryel kan basıncının aniden yükselmesi üzerine baroreseptörler uyarılır. Bu uyarı sonucunda merkezi sinir sistemi damar direncini düşürerek kan basıncını yeniden normal seviyelere çeker. Oluşan bu fizyolojik cevabın, olayı başlatan uyarıya tam ters yönde etki etmesi prensibine dayanan homeostatik kontrol mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Negatif feedback
Açıklama: Negatif feedback sistemlerinde oluşan nihai hücresel veya fizyolojik cevap, olayı başlatan uyarının etkisini ortadan kaldırmak üzere zıt yönde etki eder. Vücuttaki fizyolojik olayların (kan basıncı, vücut ısısı, hormon salınımı) neredeyse tamamı negatif feedback döngüleriyle dar ve güvenli aralıklarda sabit tutulur. Pozitif feedback ise uyarıyı zıt yönde sönümlemek yerine daha da güçlendirir.

---

### ÇİFT 39 (Benzerlik: 1.00)

**Soru 1 (ID: 2eb0aa28-7fd1-42c6-8405-ee8f0759cb6b)**
Soru Kökü: Myastenia gravis şüphesiyle incelenen 30 yaşındaki kadın hastada nöromüsküler kavşak iletimi değerlendirilmektedir. Presinaptik nörondan asetilkolin gibi nörotransmitterlerin veya endokrin hücrelerden protein yapılı hormonların dış ortama atılmasını sağlayan temel transport mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Ekzositoz
Açıklama: Salgı bezleri ve sinir hücreleri, ürettikleri proteinleri veya nörotransmitter/kimyasal habercileri ekzositoz mekanizması ile paketlenmiş veziküller halinde hücre dışına atarlar. Bu süreç kalsiyum girişine bağlı olarak membranın dışa açılmasıdır.

**Soru 2 (ID: 4511068d-0f92-4492-b932-4edf8010a9ac)**
Soru Kökü: Myastenia gravis şüphesiyle incelenen 30 yaşındaki kadın hastada nöromüsküler kavşak iletimi değerlendirilmektedir. Presinaptik nörondan asetilkolin gibi nörotransmitterlerin veya endokrin hücrelerden protein yapılı hormonların dış ortama atılmasını sağlayan temel transport mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Ekzositoz
Açıklama: Salgı bezleri ve sinir hücreleri, ürettikleri proteinleri veya nörotransmitter/kimyasal habercileri ekzositoz mekanizması ile paketlenmiş veziküller halinde hücre dışına atarlar. Bu süreç kalsiyum girişine bağlı olarak membranın dışa açılmasıdır.

---

### ÇİFT 40 (Benzerlik: 1.00)

**Soru 1 (ID: 2e8befd6-d219-4718-8be1-497b52d387fa)**
Soru Kökü: Hücre zarı asimetrik bir yapıya sahiptir ve lipit çift tabakasından oluşur. Bu yapı içinde sayıca en baskın olan ve hidrofobik yüksüz uçları birbirine dönük dizilerek temel membran iskeletini oluşturan yapıtaşı aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidilkolin (Lesitin)
Açıklama: Hücre zarında miktar olarak en çok bulunan fosfolipid, fosfatidilkolin (Lesitin)'dir. Trigliseridler hücre zarı yapısında hiçbir zaman bulunmazken, kolesterol akışkanlığı belirleyen yardımcı lipit bileşenidir. Sınavlarda hücresel iskeletin temel taşıyıcısı sorgulandığında akla ilk olarak lesitin gelmelidir.

**Soru 2 (ID: ab00731c-28ca-4512-afbf-3ebfff8e5fc7)**
Soru Kökü: Hücre zarı asimetrik bir yapıya sahiptir ve lipit çift tabakasından oluşur. Bu yapı içinde sayıca en baskın olan ve hidrofobik yüksüz uçları birbirine dönük dizilerek temel membran iskeletini oluşturan yapıtaşı aşağıdakilerden hangisidir?
Doğru Şık (C): Fosfatidilkolin (Lesitin)
Açıklama: Hücre zarında miktar olarak en çok bulunan fosfolipid, fosfatidilkolin (Lesitin)'dir. Trigliseridler hücre zarı yapısında hiçbir zaman bulunmazken, kolesterol akışkanlığı belirleyen yardımcı lipit bileşenidir. Sınavlarda hücresel iskeletin temel taşıyıcısı sorgulandığında akla ilk olarak lesitin gelmelidir.

---

### ÇİFT 41 (Benzerlik: 1.00)

**Soru 1 (ID: 2ec2da71-af8e-488d-a8f1-2b7c9c0ffe6a)**
Soru Kökü: Vücut sıvılarının kimyasal potansiyelini tanımlarken hacimsel birimler kullanılır. Sadece tek bir kilogramlık çözücü üzerinden değil, tam olarak '1 litre çözelti içinde çözünmüş partiküllerin sayısını' ifade eden ve milosmol/litre (mOsm/L) olarak ölçülen termodinamik birim aşağıdakilerden hangisidir?
Doğru Şık (D): Osmolarite
Açıklama: 1 litre çözeltide çözünmüş partikül sayısı 'Osmolarite' (mOsm/L) olarak adlandırılır. Çözücünün 1 kilogramındaki çözünmüş partikül sayısı ise 'Osmolalite' (osmol/kg) olarak ifade edilir. Osmolalite hacim ve sıcaklıktan etkilenmezken, osmolarite hacim temelindedir.

**Soru 2 (ID: 6cf9aa67-cc4e-47de-a2ee-3d350dc4dc68)**
Soru Kökü: Vücut sıvılarının kimyasal potansiyelini tanımlarken hacimsel birimler kullanılır. Sadece tek bir kilogramlık çözücü üzerinden değil, tam olarak '1 litre çözelti içinde çözünmüş partiküllerin sayısını' ifade eden ve milosmol/litre (mOsm/L) olarak ölçülen termodinamik birim aşağıdakilerden hangisidir?
Doğru Şık (D): Osmolarite
Açıklama: 1 litre çözeltide çözünmüş partikül sayısı 'Osmolarite' (mOsm/L) olarak adlandırılır. Çözücünün 1 kilogramındaki çözünmüş partikül sayısı ise 'Osmolalite' (osmol/kg) olarak ifade edilir. Osmolalite hacim ve sıcaklıktan etkilenmezken, osmolarite hacim temelindedir.

---

### ÇİFT 42 (Benzerlik: 1.00)

**Soru 1 (ID: a0648392-98a2-4c32-abea-ecf7ec6970c3)**
Soru Kökü: Taşınan molekül ile enerji sağlayan motor molekülün membran üzerinden aynı yönde (hücre içine) alındığı mekanizmaya simport (cotransport) denir. Aşağıdakilerden hangisi bu mekanizmaya verilebilecek uygun bir örnek **değildir**?
Doğru Şık (C): Glikoz ve früktozun GLUT-2 ile kandan hücreye alınması
Açıklama: GLUT-2 aracılı transport bir kolaylaştırılmış difüzyondur, simport (sekonder aktif transport) değildir. SGLT-1, SGLT-2, aminoasit simportu, Na-K-2Cl taşıyıcısı ve ISBT sodyum enerjisini kullanarak maddeleri aynı yöne taşıyan simport örnekleridir.

**Soru 2 (ID: aa17c65b-335f-497f-b3c8-ad9efc6392c6)**
Soru Kökü: Taşınan molekül ile enerji sağlayan motor molekülün membran üzerinden aynı yönde (hücre içine) alındığı mekanizmaya simport (cotransport) denir. Aşağıdakilerden hangisi bu mekanizmaya verilebilecek uygun bir örnek **değildir**?
Doğru Şık (C): Glikoz ve früktozun GLUT-2 ile kandan hücreye alınması
Açıklama: GLUT-2 aracılı transport bir kolaylaştırılmış difüzyondur, simport (sekonder aktif transport) değildir. SGLT-1, SGLT-2, aminoasit simportu, Na-K-2Cl taşıyıcısı ve ISBT sodyum enerjisini kullanarak maddeleri aynı yöne taşıyan simport örnekleridir.

---

### ÇİFT 43 (Benzerlik: 1.00)

**Soru 1 (ID: a186e696-4558-40f6-81e0-d638032a08c6)**
Soru Kökü: Hücre membranı, dış ortamdaki bazı materyalleri çevreleyerek vezikül formunda içeri alabilir. Sıvı olmayan, aksine iri yapılı katı partiküllerin veya bakterilerin membran tarafından sarmalanarak aktif bir şekilde sitoplazmaya alınması sürecine verilen isim aşağıdakilerden hangisidir?
Doğru Şık (D): Fagositoz
Açıklama: İri katı partiküllerin hücre içine aktif olarak alınması (hücre yemesi) fagositozdur. Su ve küçük çözünmüş moleküllerin alınması pinositoz, membran reseptörlerine bağlanan ligandların özgül olarak içeri alınması ise klatrin aracılı endositoz olarak tanımlanır.

**Soru 2 (ID: e46618be-c0c4-43a9-bed6-5e57f3b187d7)**
Soru Kökü: Hücre membranı, dış ortamdaki bazı materyalleri çevreleyerek vezikül formunda içeri alabilir. Sıvı olmayan, aksine iri yapılı katı partiküllerin veya bakterilerin membran tarafından sarmalanarak aktif bir şekilde sitoplazmaya alınması sürecine verilen isim aşağıdakilerden hangisidir?
Doğru Şık (D): Fagositoz
Açıklama: İri katı partiküllerin hücre içine aktif olarak alınması (hücre yemesi) fagositozdur. Su ve küçük çözünmüş moleküllerin alınması pinositoz, membran reseptörlerine bağlanan ligandların özgül olarak içeri alınması ise klatrin aracılı endositoz olarak tanımlanır.

---

### ÇİFT 44 (Benzerlik: 1.00)

**Soru 1 (ID: 0d72863f-ccb0-441d-9cfa-c7d8355c3c6b)**
Soru Kökü: 40 yaşındaki kronik eklem ağrısı olan hastaya, mide mukozasını koruyan fizyolojik prostaglandin sentezini bozmamak amacıyla spesifik olarak inflamasyon bölgesindeki enzimi hedefleyen selektif bir NSAİ ilaç reçete edilmiştir. Sadece hücresel stres ve inflamasyon durumlarında aktive olduğu bilinen bu hedef enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Siklooksijenaz-2 (COX-2)
Açıklama: COX-2 enzimi, normal dokularda düşük seviyelerde bulunurken inflamasyon, enfeksiyon ve hücresel stres gibi uyaranlarla hızla sentezlenerek patolojik prostaglandin üretiminden sorumlu olur. Selektif COX-2 inhibitörleri, COX-1'e dokunmayarak fizyolojik dokuları (mide) korumayı hedefler.

**Soru 2 (ID: d714fbe8-5521-4d0f-8794-adc427442d92)**
Soru Kökü: 40 yaşındaki kronik eklem ağrısı olan hastaya, mide mukozasını koruyan fizyolojik prostaglandin sentezini bozmamak amacıyla spesifik olarak inflamasyon bölgesindeki enzimi hedefleyen selektif bir NSAİ ilaç reçete edilmiştir. Sadece hücresel stres ve inflamasyon durumlarında aktive olduğu bilinen bu hedef enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Siklooksijenaz-2 (COX-2)
Açıklama: COX-2 enzimi, normal dokularda düşük seviyelerde bulunurken inflamasyon, enfeksiyon ve hücresel stres gibi uyaranlarla hızla sentezlenerek patolojik prostaglandin üretiminden sorumlu olur. Selektif COX-2 inhibitörleri, COX-1'e dokunmayarak fizyolojik dokuları (mide) korumayı hedefler.

---

### ÇİFT 45 (Benzerlik: 1.00)

**Soru 1 (ID: 065c9928-4b63-4d1e-956c-8ddc2ac61e3b)**
Soru Kökü: Sağlıklı bir böbrekte filtrelenen glikozun neredeyse tamamı lümenden geri emilir. Bu emilimi proksimal tübül hücrelerinde lüminal membrandan içeriye doğru sodyum iyonunun elektrokimyasal gradientini kullanarak gerçekleştiren simport (cotransport) taşıyıcısı aşağıdakilerden hangisidir?
Doğru Şık (B): SGLT-2
Açıklama: Proksimal tübül lümeninden glikozun sodyum ile aynı yönde hücre içine alınmasını (simport) sağlayan taşıyıcı protein SGLT-2'dir. İnce bağırsakta benzer görevi yapan izoform SGLT-1'dir. GLUT taşıyıcıları ise bazolateral membranda görev alan ve enerji harcamayan difüzyon proteinleridir.

**Soru 2 (ID: d05d2d4d-dd06-41ec-aa8e-f1163cfc8ae2)**
Soru Kökü: Sağlıklı bir böbrekte filtrelenen glikozun neredeyse tamamı lümenden geri emilir. Bu emilimi proksimal tübül hücrelerinde lüminal membrandan içeriye doğru sodyum iyonunun elektrokimyasal gradientini kullanarak gerçekleştiren simport (cotransport) taşıyıcısı aşağıdakilerden hangisidir?
Doğru Şık (B): SGLT-2
Açıklama: Proksimal tübül lümeninden glikozun sodyum ile aynı yönde hücre içine alınmasını (simport) sağlayan taşıyıcı protein SGLT-2'dir. İnce bağırsakta benzer görevi yapan izoform SGLT-1'dir. GLUT taşıyıcıları ise bazolateral membranda görev alan ve enerji harcamayan difüzyon proteinleridir.

---

### ÇİFT 46 (Benzerlik: 1.00)

**Soru 1 (ID: affc7fcb-5702-4b7b-b09b-e1b6314bc6ad)**
Soru Kökü: Elektrokimyasal gradient yönünde gerçekleşen ve enerji (ATP) harcanmayan membran geçiş tipleriyle ilgili olarak, aşağıdakilerden hangisi pasif transport mekanizmalarından biri **değildir**?
Doğru Şık (D): Fagositoz
Açıklama: Fagositoz, iri katı partiküllerin hücre içine aktif olarak alındığı bir endositoz alt tipidir ve doğrudan ATP gerektirir. Basit/kolaylaştırılmış difüzyon, osmoz ve filtrasyon ise konsantrasyon gradientine bağımlı çalışan pasif transport mekanizmalarıdır. Madde geçişinin temel felsefesi enerjinin kaynağına göre pasif ve aktif olarak ikiye ayrılır.

**Soru 2 (ID: ed227a82-e6bf-4215-8f2d-dbfbd0586efb)**
Soru Kökü: Elektrokimyasal gradient yönünde gerçekleşen ve enerji (ATP) harcanmayan membran geçiş tipleriyle ilgili olarak, aşağıdakilerden hangisi pasif transport mekanizmalarından biri **değildir**?
Doğru Şık (D): Fagositoz
Açıklama: Fagositoz, iri katı partiküllerin hücre içine aktif olarak alındığı bir endositoz alt tipidir ve doğrudan ATP gerektirir. Basit/kolaylaştırılmış difüzyon, osmoz ve filtrasyon ise konsantrasyon gradientine bağımlı çalışan pasif transport mekanizmalarıdır. Madde geçişinin temel felsefesi enerjinin kaynağına göre pasif ve aktif olarak ikiye ayrılır.

---

### ÇİFT 47 (Benzerlik: 1.00)

**Soru 1 (ID: 4f0113b0-1ff0-44a7-a1aa-778d6ca3b00e)**
Soru Kökü: 55 yaşında erkek hasta, uzun süreli sigara kullanımı sonucu gelişen amfizem tanısı ile takip edilmektedir. Akciğer radyografisinde havalanma artışı ve alveolar yıkım tespit edilmiştir. Fick difüzyon yasasına göre, bu hastadaki gaz değişim bozukluğunun (net difüzyon hızı azalmasının) temel mekanizması aşağıdakilerden hangisiyle doğrudan ilişkilidir?
Doğru Şık (E): Difüzyon membran yüzey alanının azalması
Açıklama: Amfizem gibi kronik obstrüktif akciğer hastalıklarında alveolar septaların yıkımı sonucu difüzyon membranı yüzey alanı daralır. Fick difüzyon yasasına göre yüzey alanı (A) net difüzyon hızı ile doğrudan orantılıdır, bu alanın azalması geçişi zorlaştırır. Solubilite veya molekül ağırlığı gazın kendi fizikokimyasal özelliği olup hastalığa bağlı olarak değişmez.

**Soru 2 (ID: f28ed321-ad55-4230-992a-ef8901c648a5)**
Soru Kökü: 55 yaşında erkek hasta, uzun süreli sigara kullanımı sonucu gelişen amfizem tanısı ile takip edilmektedir. Akciğer radyografisinde havalanma artışı ve alveolar yıkım tespit edilmiştir. Fick difüzyon yasasına göre, bu hastadaki gaz değişim bozukluğunun (net difüzyon hızı azalmasının) temel mekanizması aşağıdakilerden hangisiyle doğrudan ilişkilidir?
Doğru Şık (E): Difüzyon membran yüzey alanının azalması
Açıklama: Amfizem gibi kronik obstrüktif akciğer hastalıklarında alveolar septaların yıkımı sonucu difüzyon membranı yüzey alanı daralır. Fick difüzyon yasasına göre yüzey alanı (A) net difüzyon hızı ile doğrudan orantılıdır, bu alanın azalması geçişi zorlaştırır. Solubilite veya molekül ağırlığı gazın kendi fizikokimyasal özelliği olup hastalığa bağlı olarak değişmez.

---

### ÇİFT 48 (Benzerlik: 1.00)

**Soru 1 (ID: cd350614-2315-4b6d-a951-569eca9b464e)**
Soru Kökü: Böbrekte tübüler lümendeki iyonların geri emiliminde çeşitli sekonder aktif taşıyıcılar görev yapar. Özellikle Henle kulpunun çıkan kalın kolunda lokalize olan ve lümendeki sodyum, potasyum ve klor iyonlarını simport mekanizmasıyla tübül hücresine eş zamanlı alan taşıyıcı kompleks aşağıdakilerden hangisidir?
Doğru Şık (A): Na+-K+-2Cl- pompası
Açıklama: Henle kulpu çıkan kalın kolda lümenden tübül hücresi içine sodyum, potasyum ve klor iyonlarının aynı yönde alındığı taşıyıcı sistem Na+-K+-2Cl- simportudur. Bu mekanizma kıvrım (loop) diüretiklerinin temel inhisyon hedefidir.

**Soru 2 (ID: d324f2d3-1977-4319-bcda-b7d36e644104)**
Soru Kökü: Böbrekte tübüler lümendeki iyonların geri emiliminde çeşitli sekonder aktif taşıyıcılar görev yapar. Özellikle Henle kulpunun çıkan kalın kolunda lokalize olan ve lümendeki sodyum, potasyum ve klor iyonlarını simport mekanizmasıyla tübül hücresine eş zamanlı alan taşıyıcı kompleks aşağıdakilerden hangisidir?
Doğru Şık (A): Na+-K+-2Cl- pompası
Açıklama: Henle kulpu çıkan kalın kolda lümenden tübül hücresi içine sodyum, potasyum ve klor iyonlarının aynı yönde alındığı taşıyıcı sistem Na+-K+-2Cl- simportudur. Bu mekanizma kıvrım (loop) diüretiklerinin temel inhisyon hedefidir.

---

### ÇİFT 49 (Benzerlik: 1.00)

**Soru 1 (ID: 2f2b9278-119d-456c-a039-98e47d88e147)**
Soru Kökü: Hücre içi kalsiyum sinyalizasyon döngüsü tamamlandıktan sonra, yüksek sitoplazmik kalsiyum seviyelerinin bazal düzeye indirilmesi gerekir. Kalsiyumu sitoplazmadan alıp, aktif olarak endoplazmik/sarkoplazmik retikulum lümenine geri pompalayarak ortamdan uzaklaştıran taşıyıcı sistem aşağıdakilerden hangisidir?
Doğru Şık (C): Sarkoplazmik retikulum Ca-ATPaz (SERCA)
Açıklama: Hücre içi kalsiyumun sarkoplazmik ve endoplazmik retikulum içine hapsedilerek sitoplazmanın temizlenmesinden sorumlu pompa SERCA (Sarko/Endoplazmik Retikulum Ca-ATPaz)'dır. PMCA ve Sodyum-kalsiyum antiportu ise kalsiyumu retikuluma değil, hücre zarından dışarı (ekstraselüler alana) atan sistemlerdir.

**Soru 2 (ID: acfc4bde-43ed-4c50-8ca1-81148f88dec1)**
Soru Kökü: Hücre içi kalsiyum sinyalizasyon döngüsü tamamlandıktan sonra, yüksek sitoplazmik kalsiyum seviyelerinin bazal düzeye indirilmesi gerekir. Kalsiyumu sitoplazmadan alıp, aktif olarak endoplazmik/sarkoplazmik retikulum lümenine geri pompalayarak ortamdan uzaklaştıran taşıyıcı sistem aşağıdakilerden hangisidir?
Doğru Şık (C): Sarkoplazmik retikulum Ca-ATPaz (SERCA)
Açıklama: Hücre içi kalsiyumun sarkoplazmik ve endoplazmik retikulum içine hapsedilerek sitoplazmanın temizlenmesinden sorumlu pompa SERCA (Sarko/Endoplazmik Retikulum Ca-ATPaz)'dır. PMCA ve Sodyum-kalsiyum antiportu ise kalsiyumu retikuluma değil, hücre zarından dışarı (ekstraselüler alana) atan sistemlerdir.

---

### ÇİFT 50 (Benzerlik: 1.00)

**Soru 1 (ID: 0fc841a2-42da-4704-9d15-b00605619ec9)**
Soru Kökü: 40 yaşında kadın hasta, karbonhidrat ağırlıklı bir öğün sonrası kan glikoz düzeyinde hızlı bir yükselme yaşamaktadır. İnce bağırsak lümeninden SGLT-1 aracılığıyla enterosit içine aktif olarak alınan glikozun, hücre içinden bazolateral membranı aşarak intertisyel aralığa (kana) geçişinde rol alan temel taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (D): GLUT-2
Açıklama: Glikoz, galaktoz ve fruktozun enterosit veya böbrek tübül hücresinden bazolateral membranı geçerek intertisyel aralığa ulaşması GLUT-2 isimli taşıyıcı ile kolaylaştırılmış difüzyonla gerçekleşir. İnsüline bağımlı olan GLUT-4 çizgili kas/yağ dokusunda bulunurken, fruktozu lümenden alan GLUT-5'tir.

**Soru 2 (ID: 16c6b3f4-0c10-40bd-bde9-3675951a5d2e)**
Soru Kökü: 40 yaşında kadın hasta, karbonhidrat ağırlıklı bir öğün sonrası kan glikoz düzeyinde hızlı bir yükselme yaşamaktadır. İnce bağırsak lümeninden SGLT-1 aracılığıyla enterosit içine aktif olarak alınan glikozun, hücre içinden bazolateral membranı aşarak intertisyel aralığa (kana) geçişinde rol alan temel taşıyıcı protein aşağıdakilerden hangisidir?
Doğru Şık (D): GLUT-2
Açıklama: Glikoz, galaktoz ve fruktozun enterosit veya böbrek tübül hücresinden bazolateral membranı geçerek intertisyel aralığa ulaşması GLUT-2 isimli taşıyıcı ile kolaylaştırılmış difüzyonla gerçekleşir. İnsüline bağımlı olan GLUT-4 çizgili kas/yağ dokusunda bulunurken, fruktozu lümenden alan GLUT-5'tir.

---

### ÇİFT 51 (Benzerlik: 1.00)

**Soru 1 (ID: 3355813b-cbe8-410c-8e17-288526f2a9f3)**
Soru Kökü: 58 yaşındaki erkek hasta, dirençli hipertansiyon nedeniyle kliniğe başvuruyor. Anjiotensin II'nin damar düz kasında güçlü bir vazokonstriksiyon oluşturmak için kullandığı spesifik reseptör alt tipi ve bu reseptörün kalsiyum salınımını tetikleyen hücre içi ikinci haberci sistemi aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): AT-1 reseptörü – IP3 sistemi
Açıklama: Anjiotensin II, damar düz kaslarında Gq kenetli AT-1 reseptörlerine bağlanır ve Fosfolipaz C'yi aktive ederek IP3/DAG yolağını kullanır. IP3, intraselüler kalsiyum depolarından kalsiyum fışkırmasına neden olarak vazokonstriksiyon oluşturur. V1 reseptörü ADH'a aittir, alfa-1 ise katekolaminlerindir.

**Soru 2 (ID: d70b8d10-0c86-4014-938f-2bbcb56539d3)**
Soru Kökü: 58 yaşındaki erkek hasta, dirençli hipertansiyon nedeniyle kliniğe başvuruyor. Anjiotensin II'nin damar düz kasında güçlü bir vazokonstriksiyon oluşturmak için kullandığı spesifik reseptör alt tipi ve bu reseptörün kalsiyum salınımını tetikleyen hücre içi ikinci haberci sistemi aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): AT-1 reseptörü – IP3 sistemi
Açıklama: Anjiotensin II, damar düz kaslarında Gq kenetli AT-1 reseptörlerine bağlanır ve Fosfolipaz C'yi aktive ederek IP3/DAG yolağını kullanır. IP3, intraselüler kalsiyum depolarından kalsiyum fışkırmasına neden olarak vazokonstriksiyon oluşturur. V1 reseptörü ADH'a aittir, alfa-1 ise katekolaminlerindir.

---

### ÇİFT 52 (Benzerlik: 1.00)

**Soru 1 (ID: 7e26e6a1-49e5-4ac4-a558-67068407a209)**
Soru Kökü: Hücre zarında, moleküllerin elektrokimyasal gradiente karşıt yönde ve doğrudan ATP harcanarak taşındığı temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Primer aktif transport
Açıklama: ATP'nin doğrudan hidrolize edilerek kullanıldığı sistem primer aktif transporttur (örneğin Na+-K+ ATPaz). Sekonder aktif transportta enerji doğrudan ATP'den değil, önceden oluşturulmuş bir sodyum gradientinden sağlanır. Kolaylaştırılmış difüzyonda ise enerji harcanmaz, sadece taşıyıcı protein kullanılır.

**Soru 2 (ID: cd9a94c2-9cec-43c7-85c7-87ec483b788c)**
Soru Kökü: Hücre zarında, moleküllerin elektrokimyasal gradiente karşıt yönde ve doğrudan ATP harcanarak taşındığı temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Primer aktif transport
Açıklama: ATP'nin doğrudan hidrolize edilerek kullanıldığı sistem primer aktif transporttur (örneğin Na+-K+ ATPaz). Sekonder aktif transportta enerji doğrudan ATP'den değil, önceden oluşturulmuş bir sodyum gradientinden sağlanır. Kolaylaştırılmış difüzyonda ise enerji harcanmaz, sadece taşıyıcı protein kullanılır.

---

### ÇİFT 53 (Benzerlik: 0.88)

**Soru 1 (ID: 74262726-fd9c-4ced-ae09-9becfe9c4431)**
Soru Kökü: Steroid hormonların etki mekanizmasında, hormonun reseptöre bağlanmadığı inaktif dönemde DNA'ya bağlanma (domain) bölgesini örterek reseptörü baskılayan yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Hsp-90 (Isı şok proteini)
Açıklama: Kortizol ve progesteron gibi steroid hormonların sitoplazmik reseptörlerinde, ortamda hormon yokken DNA bağlanma bölgesini kapatarak inaktif tutan yapı Isı Şok Proteini 90'dır (Hsp-90). Hormon reseptöre bağlandığında Hsp-90 ayrılır ve aktifleşen hormon-reseptör kompleksi DNA'ya giderek etki gösterir.

**Soru 2 (ID: a10c1ff3-0c3c-4368-90fd-0c6941569c1e)**
Soru Kökü: Steroid yapılı hormonların hücre sitoplazmasındaki spesifik reseptörlerine bağlanmadan önceki dinlenme durumunda, reseptörün DNA'ya bağlanacak olan aktif domain kısmını örterek onu inaktif halde tutan koruyucu protein molekülü aşağıdakilerden hangisidir?
Doğru Şık (E): Isı şok proteini-90 (Hsp-90)
Açıklama: Steroid hormonlar (kortizol, aldosteron vb.) için sitoplazmik reseptörlerin DNA bağlayıcı domaini, hormon ortada yokken Isı şok proteini 90 (Hsp-90) tarafından kapatılır. Hormon hücre içine difüze olup reseptöre bağlandığında Hsp-90 yapıdan ayrılır, reseptör kompleksi çekirdeğe girerek spesifik DNA dizisine (hormon cevap elemanı) bağlanır.

---

### ÇİFT 54 (Benzerlik: 0.85)

**Soru 1 (ID: 2efa9dda-7fc3-4d35-ac40-7920604bda5a)**
Soru Kökü: Steroid ve tiroid yapılı hormonların etki mekanizmaları genellikle membran yüzeyinde değil, hücre içinde gerçekleşir. Aşağıdaki hormonlardan hangisi spesifik reseptörüne sitoplazmada bağlanarak hücre çekirdeğine taşınır?
Doğru Şık (A): Kortizol
Açıklama: Kortizol, aldosteron ve progesteron gibi steroid hormonların reseptörleri sitoplazmada bulunur. Hormon bu sitoplazmik reseptöre bağlandıktan sonra oluşan kompleks çekirdeğe göç ederek DNA üzerindeki bölgeye tutunur. Tiroid hormonları, Vitamin D, Östrojen, Androjen ve Retinoik asit reseptörleri ise halihazırda doğrudan hücre çekirdeğinde yerleşimlidir.

**Soru 2 (ID: 52fd7f71-20b8-4d4a-8c9e-ff4be4c91c74)**
Soru Kökü: Steroid ve tiroid hormonları lipofilik yapıları sayesinde hücre zarını serbestçe geçerek stoplazmik veya nükleer reseptörlerine bağlanırlar. Aşağıdaki hormonlardan hangisinin spesifik fizyolojik reseptörü sitoplazmada **bulunmaz**?
Doğru Şık (A): Retinoik asit
Açıklama: Kortizol (glukokortikoidler), aldosteron ve progesteron reseptörleri sitoplazmik lokalizasyonludur ve hormon bağlandıktan sonra nükleusa göç ederler. Tiroid hormonları, Vitamin D ve Retinoik asitin reseptörleri ise halihazırda doğrudan çekirdek (nükleus) içerisinde, kromatin üzerinde aktive edilmeyi bekler halde bulunurlar.

---

### ÇİFT 55 (Benzerlik: 0.83)

**Soru 1 (ID: dee32201-b778-4509-8488-46751b2079f8)**
Soru Kökü: Hücre zarı, kolesterol, fosfolipid ve spesifik proteinlerden oluşan asimetrik ve dinamik bir mozaik yapı sergiler. Ancak bazı lipid türleri yapısal özelliklerinden dolayı hücre membranının bileşimine asla katılmazlar. Aşağıdakilerden hangisi hücre zarının yapısında kesinlikle **bulunmayan** lipid türüdür?
Doğru Şık (A): Trigliseridler
Açıklama: Trigliseridler yağ asitlerinin vücuttaki depo şeklidir ve tıpkı kolesterol esterleri gibi hiçbir zaman hücre membranının lipid çift tabakasının yapısına katılmazlar. Zarda asıl bulunanlar fosfolipidler (en sık lesitin), kolesterol ve glikolipitlerdir. Zarda serbest kolesterol bulunurken esterleşmiş depo kolesterolü bulunmaz.

**Soru 2 (ID: f60a9979-fda2-494e-ad05-a274487574d6)**
Soru Kökü: Hücre zarının yapısında aşağıdaki lipid türlerinden hangisi kesinlikle **bulunmaz**?
Doğru Şık (E): Trigliserid
Açıklama: Trigliseridler, yağ asitlerinin hücresel depo şekli oldukları için plazma membranının yapısal komponentlerine katılmazlar. En güçlü distraktör olan kolesterol membranda bulunurken, kolesterol esterleri tıpkı trigliseridler gibi zar yapısında bulunmaz. Hücre zarı esas olarak fosfolipid, kolesterol ve az miktarda glikolipidden oluşur.

---

### ÇİFT 56 (Benzerlik: 0.82)

**Soru 1 (ID: 2f364793-b185-4de3-82d2-e458da15f348)**
Soru Kökü: Hücre zarının akışkanlığı ve madde geçirgenliği çeşitli yapısal bileşenler tarafından kontrol edilir. Aşağıdakilerden hangisi hücre membranının akışkanlığını ters yönde etkileyen en güçlü faktördür?
Doğru Şık (C): Kolesterol miktarı
Açıklama: Membran akışkanlığını ters yönde etkileyen (azaltan) en güçlü faktör kolesterol miktarıdır. Yağ asidi zincir uzunluğu da ters orantılıdır ancak kolesterol temel belirleyicidir. Sıcaklık ve yağ asidi doymamışlık derecesi ise akışkanlıkla doğru orantılıdır.

**Soru 2 (ID: e50c2b15-1710-4dfa-b70e-60c0afa83b5d)**
Soru Kökü: Hücre membranının akışkanlık ve geçirgenlik kontrolü hücresel homeostaz için hayati öneme sahiptir. Membranın akışkanlığını ters orantılı olarak etkileyen ve stabilitenin sağlanmasında en etkili yapısal faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Kolesterol miktarı
Açıklama: Hücre zarında kolesterol miktarı ile membranın akışkanlığı ters orantılıdır ve bu faktör akışkanlığı en fazla etkileyen unsurdur. Yağ asidi doymamışlık derecesi ve sıcaklık akışkanlığı doğru orantılı artırırken, proteinler bu mekanizmada primer belirleyici değildir. Kolesterolün bu sabitleyici etkisi suda eriyen maddelere karşı geçirgenlik bariyerini oluşturur.

---

### ÇİFT 57 (Benzerlik: 0.82)

**Soru 1 (ID: 2f364793-b185-4de3-82d2-e458da15f348)**
Soru Kökü: Hücre zarının akışkanlığı ve madde geçirgenliği çeşitli yapısal bileşenler tarafından kontrol edilir. Aşağıdakilerden hangisi hücre membranının akışkanlığını ters yönde etkileyen en güçlü faktördür?
Doğru Şık (C): Kolesterol miktarı
Açıklama: Membran akışkanlığını ters yönde etkileyen (azaltan) en güçlü faktör kolesterol miktarıdır. Yağ asidi zincir uzunluğu da ters orantılıdır ancak kolesterol temel belirleyicidir. Sıcaklık ve yağ asidi doymamışlık derecesi ise akışkanlıkla doğru orantılıdır.

**Soru 2 (ID: bd98295c-8602-4d4b-a487-5dea193b5fae)**
Soru Kökü: Hücre membranının akışkanlık ve geçirgenlik kontrolü hücresel homeostaz için hayati öneme sahiptir. Membranın akışkanlığını ters orantılı olarak etkileyen ve stabilitenin sağlanmasında en etkili yapısal faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Kolesterol miktarı
Açıklama: Hücre zarında kolesterol miktarı ile membranın akışkanlığı ters orantılıdır ve bu faktör akışkanlığı en fazla etkileyen unsurdur. Yağ asidi doymamışlık derecesi ve sıcaklık akışkanlığı doğru orantılı artırırken, proteinler bu mekanizmada primer belirleyici değildir. Kolesterolün bu sabitleyici etkisi suda eriyen maddelere karşı geçirgenlik bariyerini oluşturur.

---

### ÇİFT 58 (Benzerlik: 0.82)

**Soru 1 (ID: 5a45457b-c8fa-45f6-b79e-1b6996de6eb2)**
Soru Kökü: Vücut iç çevresinin kararlı tutulmasını sağlayan kontrol mekanizmaları incelendiğinde, aşağıdakilerden hangisi pozitif feedback sistemlerinin özelliklerinden biri **değildir**?
Doğru Şık (D): Olayı başlatan uyarıya zıt yönde etki ederek iç çevreyi hızla sabitlemesi
Açıklama: Olayı başlatan uyarıya zıt yönde etki ederek homeostazisi hızla kilitleyen ve dengeye getiren sistem negatif feedback mekanizmasıdır. Pozitif feedback, uyarıyı sönümlemez; aksine uyarıyı daha da büyüterek (amplifikasyon) süreci son noktaya kadar (örneğin doğum eylemi bitene kadar) güçlendirerek kısır döngü yaratır.

**Soru 2 (ID: ef7d5079-1a32-49a7-af5f-c4d51d1afc4f)**
Soru Kökü: Vücutta iç çevrenin sabit tutulması amacıyla çalışan kontrol mekanizmalarında, pozitif feedback (kısır döngü) fizyolojik koşullarda oldukça nadir görülür. Aşağıdakilerden hangisi bu duruma bir örnek **değildir**?
Doğru Şık (A): Kan glukoz düzeyinin insülin salgısını artırması
Açıklama: Kan glukoz düzeyinin artması sonucu insülin salgılanması ve bu insülinin glukozu düşürerek uyarıyı ortadan kaldırması tipik bir negatif feedback mekanizmasıdır. Doğum eylemi, kanın pıhtılaşması, depolarizasyon ve ovulasyon öncesi LH piki ise olayı başlatan uyarının daha da güçlenmesini sağlayan nadir fizyolojik pozitif feedback örnekleridir. Fizyolojik olayların neredeyse tamamı negatif feedback ile kontrol edilir.

---

### ÇİFT 59 (Benzerlik: 0.82)

**Soru 1 (ID: 26616b7b-f26a-45fe-a9eb-7030f02174a6)**
Soru Kökü: Vücut iç çevresinin kararlı tutulmasını sağlayan kontrol mekanizmaları incelendiğinde, aşağıdakilerden hangisi pozitif feedback sistemlerinin özelliklerinden biri **değildir**?
Doğru Şık (D): Olayı başlatan uyarıya zıt yönde etki ederek iç çevreyi hızla sabitlemesi
Açıklama: Olayı başlatan uyarıya zıt yönde etki ederek homeostazisi hızla kilitleyen ve dengeye getiren sistem negatif feedback mekanizmasıdır. Pozitif feedback, uyarıyı sönümlemez; aksine uyarıyı daha da büyüterek (amplifikasyon) süreci son noktaya kadar (örneğin doğum eylemi bitene kadar) güçlendirerek kısır döngü yaratır.

**Soru 2 (ID: ef7d5079-1a32-49a7-af5f-c4d51d1afc4f)**
Soru Kökü: Vücutta iç çevrenin sabit tutulması amacıyla çalışan kontrol mekanizmalarında, pozitif feedback (kısır döngü) fizyolojik koşullarda oldukça nadir görülür. Aşağıdakilerden hangisi bu duruma bir örnek **değildir**?
Doğru Şık (A): Kan glukoz düzeyinin insülin salgısını artırması
Açıklama: Kan glukoz düzeyinin artması sonucu insülin salgılanması ve bu insülinin glukozu düşürerek uyarıyı ortadan kaldırması tipik bir negatif feedback mekanizmasıdır. Doğum eylemi, kanın pıhtılaşması, depolarizasyon ve ovulasyon öncesi LH piki ise olayı başlatan uyarının daha da güçlenmesini sağlayan nadir fizyolojik pozitif feedback örnekleridir. Fizyolojik olayların neredeyse tamamı negatif feedback ile kontrol edilir.

---

### ÇİFT 60 (Benzerlik: 0.81)

**Soru 1 (ID: 3355813b-cbe8-410c-8e17-288526f2a9f3)**
Soru Kökü: 58 yaşındaki erkek hasta, dirençli hipertansiyon nedeniyle kliniğe başvuruyor. Anjiotensin II'nin damar düz kasında güçlü bir vazokonstriksiyon oluşturmak için kullandığı spesifik reseptör alt tipi ve bu reseptörün kalsiyum salınımını tetikleyen hücre içi ikinci haberci sistemi aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): AT-1 reseptörü – IP3 sistemi
Açıklama: Anjiotensin II, damar düz kaslarında Gq kenetli AT-1 reseptörlerine bağlanır ve Fosfolipaz C'yi aktive ederek IP3/DAG yolağını kullanır. IP3, intraselüler kalsiyum depolarından kalsiyum fışkırmasına neden olarak vazokonstriksiyon oluşturur. V1 reseptörü ADH'a aittir, alfa-1 ise katekolaminlerindir.

**Soru 2 (ID: ef9a15df-7950-4f1b-8695-584ae373104f)**
Soru Kökü: Kırk beş yaşında hipertansiyon şikayetiyle polikliniğe başvuran kadın hastanın kan testlerinde Anjiyotensin II seviyesi yüksek bulunuyor. Anjiyotensin II, AT-1 reseptörlerine bağlanarak damar düz kasında güçlü bir vazokonstriksiyona neden olmaktadır. Bu güçlü düz kas kasılmasını başlatan hücre içi ikincil haberci sistemi aşağıdakilerden hangisidir?
Doğru Şık (D): İnozitol trifosfat (IP3) ve DAG yolağı
Açıklama: Anjiyotensin II (AT-1 reseptörü), oksitosin (düz kas kasılması) ve katekolaminlerin alfa-1 reseptörleri Gq proteini üzerinden Fosfolipaz C'yi aktive eder. Bu enzim hücre zarındaki PIP2'yi IP3 ve DAG'a yıkar. IP3 endoplazmik retikulumdan kalsiyum salınımını tetikleyerek düz kaslarda güçlü bir kasılma (vazokonstriksiyon) oluşturur.

---

### ÇİFT 61 (Benzerlik: 0.81)

**Soru 1 (ID: d70b8d10-0c86-4014-938f-2bbcb56539d3)**
Soru Kökü: 58 yaşındaki erkek hasta, dirençli hipertansiyon nedeniyle kliniğe başvuruyor. Anjiotensin II'nin damar düz kasında güçlü bir vazokonstriksiyon oluşturmak için kullandığı spesifik reseptör alt tipi ve bu reseptörün kalsiyum salınımını tetikleyen hücre içi ikinci haberci sistemi aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): AT-1 reseptörü – IP3 sistemi
Açıklama: Anjiotensin II, damar düz kaslarında Gq kenetli AT-1 reseptörlerine bağlanır ve Fosfolipaz C'yi aktive ederek IP3/DAG yolağını kullanır. IP3, intraselüler kalsiyum depolarından kalsiyum fışkırmasına neden olarak vazokonstriksiyon oluşturur. V1 reseptörü ADH'a aittir, alfa-1 ise katekolaminlerindir.

**Soru 2 (ID: ef9a15df-7950-4f1b-8695-584ae373104f)**
Soru Kökü: Kırk beş yaşında hipertansiyon şikayetiyle polikliniğe başvuran kadın hastanın kan testlerinde Anjiyotensin II seviyesi yüksek bulunuyor. Anjiyotensin II, AT-1 reseptörlerine bağlanarak damar düz kasında güçlü bir vazokonstriksiyona neden olmaktadır. Bu güçlü düz kas kasılmasını başlatan hücre içi ikincil haberci sistemi aşağıdakilerden hangisidir?
Doğru Şık (D): İnozitol trifosfat (IP3) ve DAG yolağı
Açıklama: Anjiyotensin II (AT-1 reseptörü), oksitosin (düz kas kasılması) ve katekolaminlerin alfa-1 reseptörleri Gq proteini üzerinden Fosfolipaz C'yi aktive eder. Bu enzim hücre zarındaki PIP2'yi IP3 ve DAG'a yıkar. IP3 endoplazmik retikulumdan kalsiyum salınımını tetikleyerek düz kaslarda güçlü bir kasılma (vazokonstriksiyon) oluşturur.

---

### ÇİFT 62 (Benzerlik: 0.80)

**Soru 1 (ID: 121b7ddd-d4a7-4b40-8d99-5bef8faf6aae)**
Soru Kökü: Hücre membranı fosfolipid, kolesterol ve çeşitli proteinlerden oluşan dinamik bir yapıdır. Ancak fizyolojik bağlamda, insan vücudundaki tüm biyolojik materyaller zarda yer almaz. Aşağıdaki lipit bileşenlerinden hangi ikilisi normal hücre zarı yapısında kesinlikle **bulunmaz**?
Doğru Şık (A): Trigliseridler ve kolesterol esterleri
Açıklama: Hücre zarında yağ asitlerinin depo şekli olan trigliseridler ve kolesterolün depo şekli olan kolesterol esterleri hiçbir zaman bulunmaz. Membranda fosfolipidler (en sık lesitin), serbest kolesterol, glikolipidler ve proteinler yapısal olarak yer alır.

**Soru 2 (ID: dee32201-b778-4509-8488-46751b2079f8)**
Soru Kökü: Hücre zarı, kolesterol, fosfolipid ve spesifik proteinlerden oluşan asimetrik ve dinamik bir mozaik yapı sergiler. Ancak bazı lipid türleri yapısal özelliklerinden dolayı hücre membranının bileşimine asla katılmazlar. Aşağıdakilerden hangisi hücre zarının yapısında kesinlikle **bulunmayan** lipid türüdür?
Doğru Şık (A): Trigliseridler
Açıklama: Trigliseridler yağ asitlerinin vücuttaki depo şeklidir ve tıpkı kolesterol esterleri gibi hiçbir zaman hücre membranının lipid çift tabakasının yapısına katılmazlar. Zarda asıl bulunanlar fosfolipidler (en sık lesitin), kolesterol ve glikolipitlerdir. Zarda serbest kolesterol bulunurken esterleşmiş depo kolesterolü bulunmaz.

---

### ÇİFT 63 (Benzerlik: 0.80)

**Soru 1 (ID: 3b7849a1-691f-4c68-b93e-1b409da8f6ad)**
Soru Kökü: Hücre membranı fosfolipid, kolesterol ve çeşitli proteinlerden oluşan dinamik bir yapıdır. Ancak fizyolojik bağlamda, insan vücudundaki tüm biyolojik materyaller zarda yer almaz. Aşağıdaki lipit bileşenlerinden hangi ikilisi normal hücre zarı yapısında kesinlikle **bulunmaz**?
Doğru Şık (A): Trigliseridler ve kolesterol esterleri
Açıklama: Hücre zarında yağ asitlerinin depo şekli olan trigliseridler ve kolesterolün depo şekli olan kolesterol esterleri hiçbir zaman bulunmaz. Membranda fosfolipidler (en sık lesitin), serbest kolesterol, glikolipidler ve proteinler yapısal olarak yer alır.

**Soru 2 (ID: dee32201-b778-4509-8488-46751b2079f8)**
Soru Kökü: Hücre zarı, kolesterol, fosfolipid ve spesifik proteinlerden oluşan asimetrik ve dinamik bir mozaik yapı sergiler. Ancak bazı lipid türleri yapısal özelliklerinden dolayı hücre membranının bileşimine asla katılmazlar. Aşağıdakilerden hangisi hücre zarının yapısında kesinlikle **bulunmayan** lipid türüdür?
Doğru Şık (A): Trigliseridler
Açıklama: Trigliseridler yağ asitlerinin vücuttaki depo şeklidir ve tıpkı kolesterol esterleri gibi hiçbir zaman hücre membranının lipid çift tabakasının yapısına katılmazlar. Zarda asıl bulunanlar fosfolipidler (en sık lesitin), kolesterol ve glikolipitlerdir. Zarda serbest kolesterol bulunurken esterleşmiş depo kolesterolü bulunmaz.

---

### ÇİFT 64 (Benzerlik: 0.80)

**Soru 1 (ID: c54375e5-db72-4252-95cf-781b187441b2)**
Soru Kökü: Hücre membranında sinyal transdüksiyonunda görev alan G proteinleri yapısal olarak çeşitlilik gösterir. Aşağıdakilerden hangisi polipeptit zinciri zarı 7 kez kat eden 'serpentin' reseptörlere kenetli, alfa-beta-gama alt birimlerinden oluşan heterotrimerik G proteinlerinden biri **değildir**?
Doğru Şık (E): Ras proteini
Açıklama: Gs, Gi ve Gq; alfa, beta ve gama alt ünitelerine sahip olan heterotrimerik 'büyük' G proteinleridir. Rab, Rho, Rac ve Ras proteinleri ise monomerik yapıda olup küçük G proteinleri sınıfındandır ve genellikle büyüme faktörleri ve intraselüler vezikül trafiği sinyalizasyonunda doğrudan görev alırlar.

**Soru 2 (ID: e8d872ff-4a9c-4a63-a861-7f6e77b1d1f5)**
Soru Kökü: Hücre membranındaki G proteinleri, reseptörlere bağlanan ligandların sinyallerini hücre içine iletir. Heterotrimerik yapıdaki G proteinleri üç alt birimden oluşurken, hücrede monomerik yapıya sahip küçük G proteinleri de bulunur. Aşağıdakilerden hangisi monomerik yapılı küçük G proteinlerinden biridir?
Doğru Şık (C): Ras
Açıklama: Ras, Rab ve Rho/Rac proteinleri monomerik yapıda olan küçük G proteinleridir ve genellikle tirozin kinaz yolaklarında (özellikle büyüme faktörleri ile) görev yaparlar. Gs, Gi ve Gq ise alfa, beta ve gama alt birimlerinden oluşan, 7 kez zarı kat eden serpentin reseptörleriyle ilişkili büyük heterotrimerik G proteinleridir.

---

### ÇİFT 65 (Benzerlik: 0.79)

**Soru 1 (ID: 37795d95-d8ba-4260-863a-90cef1026249)**
Soru Kökü: Endokrin sistemde hormonlar hücre içi sinyallerini iletirken farklı ikincil haberci sistemlerini kullanırlar. Aşağıdaki hormonlardan hangisi etkisini adenilat siklaz enzimini aktive edip cAMP seviyesini artırarak **göstermez**?
Doğru Şık (C): Gonadotropin salgılatıcı hormon (GnRH)
Açıklama: Gonadotropin salgılatıcı hormon (GnRH), GHRH ve TRH gibi hipotalamik serbestleştirici hormonların çoğu Gq kenetli reseptörler üzerinden IP3/DAG (Fosfolipaz C) yolağını kullanır. LH, ACTH, Glukagon ve PTH ise Gs üzerinden adenilat siklazı aktive ederek hücre içi cAMP düzeyini artıran klasik hormonlardır.

**Soru 2 (ID: cc7fec16-6910-4113-be7a-14341ccc46e3)**
Soru Kökü: Fizyolojik olayların düzenlenmesinde G protein kenetli yollar sıkça kullanılır. Aşağıdaki hormonlardan hangisinin ikincil haberci olarak cAMP'yi kullanarak hücresel etki oluşturması **beklenmez**?
Doğru Şık (C): Oksitosin
Açıklama: Oksitosin, hedef hücresi olan düz kaslarda kasılmayı sağlamak için Gq proteini üzerinden IP3 ve Kalsiyum yolağını kullanır. Glukagon, PTH, ACTH ve ADH'nın böbrekteki V2 reseptörü ise Gs proteini üzerinden cAMP miktarını artırarak etkilerini gösteren hormonlardır.

---

### ÇİFT 66 (Benzerlik: 0.78)

**Soru 1 (ID: 747088a7-b04e-4175-b023-3856f60586de)**
Soru Kökü: Otuz iki yaşında trafik kazası geçiren erkek hastaya, intrakraniyal basınç artışı şüphesiyle beyin ödemini azaltmak amacıyla %3 NaCl (hipertonik) solüsyonu infüzyonu başlanıyor. Bu solüsyonun eritrosit hacmi ve sıvı şifti üzerindeki etkisi aşağıdakilerden hangisidir?
Doğru Şık (B): Su eritrositten dışarı çıkar, hücre hacmi azalır.
Açıklama: Hipertonik (%3 NaCl, 1026 mosm/L) solüsyonlar plazma osmolaritesini artırdıkları için ozmotik basınç yasaları gereği suyu hücre içinden (eritrositlerden ve beyin hücrelerinden) ekstraselüler alana çekerler. Bu nedenle su eritrositten çıkar, eritrosit hacmi azalır (büzülme) ve beyin ödemi geriler. %5 Dekstroz gibi hipotonik sıvılar verilseydi eritrosit hacmi artardı.

**Soru 2 (ID: a07fe42e-48fe-4d4c-98a8-2b1aa3cd135c)**
Soru Kökü: Ağır semptomatik hiponatremisi olan yoğun bakım hastasına serum sodyumunu kontrollü yükseltmek amacıyla intravenöz yoldan hipertonik %3 NaCl (1026 mOsm/L) solüsyonu infüze edilmektedir. Bu işlemin, hastanın kanındaki eritrositlerin hacmi üzerinde nasıl bir etki yaratması beklenir?
Doğru Şık (D): Ozmotik güçle su hücre dışına çekilir ve eritrosit hacmi azalır
Açıklama: Hipertonik sıvıların (örn. %3 NaCl) plazma osmolaritesi eritrosit içi sıvıdan çok daha yüksektir. Ozmotik gradyan nedeniyle su, derişimi düşük olan hücre içinden, derişimi yüksek olan hipertonik plazmaya doğru hareket eder (osmoz). Sonuç olarak eritrosit büzüşür ve hacmi azalır.

---

### ÇİFT 67 (Benzerlik: 0.78)

**Soru 1 (ID: 63a7bb76-700d-46ff-8a55-aef053cff039)**
Soru Kökü: Ağır semptomatik hiponatremisi olan yoğun bakım hastasına serum sodyumunu kontrollü yükseltmek amacıyla intravenöz yoldan hipertonik %3 NaCl (1026 mOsm/L) solüsyonu infüze edilmektedir. Bu işlemin, hastanın kanındaki eritrositlerin hacmi üzerinde nasıl bir etki yaratması beklenir?
Doğru Şık (D): Ozmotik güçle su hücre dışına çekilir ve eritrosit hacmi azalır
Açıklama: Hipertonik sıvıların (örn. %3 NaCl) plazma osmolaritesi eritrosit içi sıvıdan çok daha yüksektir. Ozmotik gradyan nedeniyle su, derişimi düşük olan hücre içinden, derişimi yüksek olan hipertonik plazmaya doğru hareket eder (osmoz). Sonuç olarak eritrosit büzüşür ve hacmi azalır.

**Soru 2 (ID: 747088a7-b04e-4175-b023-3856f60586de)**
Soru Kökü: Otuz iki yaşında trafik kazası geçiren erkek hastaya, intrakraniyal basınç artışı şüphesiyle beyin ödemini azaltmak amacıyla %3 NaCl (hipertonik) solüsyonu infüzyonu başlanıyor. Bu solüsyonun eritrosit hacmi ve sıvı şifti üzerindeki etkisi aşağıdakilerden hangisidir?
Doğru Şık (B): Su eritrositten dışarı çıkar, hücre hacmi azalır.
Açıklama: Hipertonik (%3 NaCl, 1026 mosm/L) solüsyonlar plazma osmolaritesini artırdıkları için ozmotik basınç yasaları gereği suyu hücre içinden (eritrositlerden ve beyin hücrelerinden) ekstraselüler alana çekerler. Bu nedenle su eritrositten çıkar, eritrosit hacmi azalır (büzülme) ve beyin ödemi geriler. %5 Dekstroz gibi hipotonik sıvılar verilseydi eritrosit hacmi artardı.

---

### ÇİFT 68 (Benzerlik: 0.78)

**Soru 1 (ID: aee6f9cd-0420-4986-bd6a-3a40ab61b575)**
Soru Kökü: Lipofilik yapılı steroid hormonların hücresel düzeydeki etki mekanizması incelendiğinde, hormonun sitoplazmadaki özgül reseptörüne bağlanmasıyla fizyolojik etkinin ortaya çıkması sürecinde gerçekleşen **ilk** kritik olay aşağıdakilerden hangisidir?
Doğru Şık (A): Hsp-90'ın ayrılarak hormon-reseptör kompleksinin çekirdeğe geçmesi
Açıklama: Steroid hormon hücre içine difüze olduktan sonra reseptörüne bağlanır. Bağlanma gerçekleşir gerçekleşmez, inaktif dönemde reseptörün DNA'ya bağlanacak domainini örten Hsp-90 (ısı şok proteini) ayrılır. Açığa çıkan hormon-reseptör kompleksi nükleus içine taşınarak transkripsiyonu başlatır.

**Soru 2 (ID: fdc84a06-9a1d-4f64-999a-80f492bd38ef)**
Soru Kökü: Kortizol ve aldosteron gibi lipofilik hormonların etki mekanizmasında, hormon bulunmayan istirahat dönemindeki sitoplazmik reseptör durumu ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): İnaktif haldeki reseptör-Hsp-90 kompleksi zaten hedef gen üzerindeki nükleer DNA sekansına sıkıca bağlıdır.
Açıklama: Steroid hormon reseptörleri, hormon bulunmadığı dönemde nükleusta (çekirdekte) DNA'ya bağlı halde DEĞİL, sitoplazmada Hsp-90 ısı şok proteini ile kaplanmış halde serbest beklerler. Reseptörün çekirdeğe girip DNA'ya bağlanabilmesi için ancak hormonun gelip Hsp-90'ı reseptörden koparması şarttır.

---

### ÇİFT 69 (Benzerlik: 0.78)

**Soru 1 (ID: 7400be64-aafd-48b3-87ec-7be385ee3368)**
Soru Kökü: Kortizol ve aldosteron gibi lipofilik hormonların etki mekanizmasında, hormon bulunmayan istirahat dönemindeki sitoplazmik reseptör durumu ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): İnaktif haldeki reseptör-Hsp-90 kompleksi zaten hedef gen üzerindeki nükleer DNA sekansına sıkıca bağlıdır.
Açıklama: Steroid hormon reseptörleri, hormon bulunmadığı dönemde nükleusta (çekirdekte) DNA'ya bağlı halde DEĞİL, sitoplazmada Hsp-90 ısı şok proteini ile kaplanmış halde serbest beklerler. Reseptörün çekirdeğe girip DNA'ya bağlanabilmesi için ancak hormonun gelip Hsp-90'ı reseptörden koparması şarttır.

**Soru 2 (ID: aee6f9cd-0420-4986-bd6a-3a40ab61b575)**
Soru Kökü: Lipofilik yapılı steroid hormonların hücresel düzeydeki etki mekanizması incelendiğinde, hormonun sitoplazmadaki özgül reseptörüne bağlanmasıyla fizyolojik etkinin ortaya çıkması sürecinde gerçekleşen **ilk** kritik olay aşağıdakilerden hangisidir?
Doğru Şık (A): Hsp-90'ın ayrılarak hormon-reseptör kompleksinin çekirdeğe geçmesi
Açıklama: Steroid hormon hücre içine difüze olduktan sonra reseptörüne bağlanır. Bağlanma gerçekleşir gerçekleşmez, inaktif dönemde reseptörün DNA'ya bağlanacak domainini örten Hsp-90 (ısı şok proteini) ayrılır. Açığa çıkan hormon-reseptör kompleksi nükleus içine taşınarak transkripsiyonu başlatır.

---

### ÇİFT 70 (Benzerlik: 0.78)

**Soru 1 (ID: 5836d67d-1a79-4bcc-9c6b-7d1399474858)**
Soru Kökü: Lipofilik yapılı steroid hormonların hücresel düzeydeki etki mekanizması incelendiğinde, hormonun sitoplazmadaki özgül reseptörüne bağlanmasıyla fizyolojik etkinin ortaya çıkması sürecinde gerçekleşen **ilk** kritik olay aşağıdakilerden hangisidir?
Doğru Şık (A): Hsp-90'ın ayrılarak hormon-reseptör kompleksinin çekirdeğe geçmesi
Açıklama: Steroid hormon hücre içine difüze olduktan sonra reseptörüne bağlanır. Bağlanma gerçekleşir gerçekleşmez, inaktif dönemde reseptörün DNA'ya bağlanacak domainini örten Hsp-90 (ısı şok proteini) ayrılır. Açığa çıkan hormon-reseptör kompleksi nükleus içine taşınarak transkripsiyonu başlatır.

**Soru 2 (ID: 7400be64-aafd-48b3-87ec-7be385ee3368)**
Soru Kökü: Kortizol ve aldosteron gibi lipofilik hormonların etki mekanizmasında, hormon bulunmayan istirahat dönemindeki sitoplazmik reseptör durumu ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): İnaktif haldeki reseptör-Hsp-90 kompleksi zaten hedef gen üzerindeki nükleer DNA sekansına sıkıca bağlıdır.
Açıklama: Steroid hormon reseptörleri, hormon bulunmadığı dönemde nükleusta (çekirdekte) DNA'ya bağlı halde DEĞİL, sitoplazmada Hsp-90 ısı şok proteini ile kaplanmış halde serbest beklerler. Reseptörün çekirdeğe girip DNA'ya bağlanabilmesi için ancak hormonun gelip Hsp-90'ı reseptörden koparması şarttır.

---

### ÇİFT 71 (Benzerlik: 0.78)

**Soru 1 (ID: 5836d67d-1a79-4bcc-9c6b-7d1399474858)**
Soru Kökü: Lipofilik yapılı steroid hormonların hücresel düzeydeki etki mekanizması incelendiğinde, hormonun sitoplazmadaki özgül reseptörüne bağlanmasıyla fizyolojik etkinin ortaya çıkması sürecinde gerçekleşen **ilk** kritik olay aşağıdakilerden hangisidir?
Doğru Şık (A): Hsp-90'ın ayrılarak hormon-reseptör kompleksinin çekirdeğe geçmesi
Açıklama: Steroid hormon hücre içine difüze olduktan sonra reseptörüne bağlanır. Bağlanma gerçekleşir gerçekleşmez, inaktif dönemde reseptörün DNA'ya bağlanacak domainini örten Hsp-90 (ısı şok proteini) ayrılır. Açığa çıkan hormon-reseptör kompleksi nükleus içine taşınarak transkripsiyonu başlatır.

**Soru 2 (ID: fdc84a06-9a1d-4f64-999a-80f492bd38ef)**
Soru Kökü: Kortizol ve aldosteron gibi lipofilik hormonların etki mekanizmasında, hormon bulunmayan istirahat dönemindeki sitoplazmik reseptör durumu ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): İnaktif haldeki reseptör-Hsp-90 kompleksi zaten hedef gen üzerindeki nükleer DNA sekansına sıkıca bağlıdır.
Açıklama: Steroid hormon reseptörleri, hormon bulunmadığı dönemde nükleusta (çekirdekte) DNA'ya bağlı halde DEĞİL, sitoplazmada Hsp-90 ısı şok proteini ile kaplanmış halde serbest beklerler. Reseptörün çekirdeğe girip DNA'ya bağlanabilmesi için ancak hormonun gelip Hsp-90'ı reseptörden koparması şarttır.

---

### ÇİFT 72 (Benzerlik: 0.77)

**Soru 1 (ID: 1266e24c-0938-4bec-8f0e-2c1691a4654c)**
Soru Kökü: Gq proteini kenetli reseptörlerin uyarılmasıyla aktive olan Fosfolipaz C enziminin, membran fosfolipidlerinden fosfoinozitol 4,5-bifosfatı (PIP2) parçalayarak oluşturduğu iki önemli ikinci haberci molekül aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Diaçil gliserol (DAG) ve inozitol trifosfat (IP3)
Açıklama: Fosfolipaz C enzimi membran bileşenlerinden olan PIP2'yi hidrolize ederek iki temel ikinci haberci üretir: Endoplazmik retikulumdan kalsiyum salgılatacak olan IP3 ve hücre zarına tutunup Protein Kinaz C'yi aktive edecek olan DAG. Araşidonik asit ise Fosfolipaz A2'nin ürünüdür.

**Soru 2 (ID: fbfa5eef-037a-47df-8aee-8c7b26cc13bd)**
Soru Kökü: Hücre sinyal iletim yollarından biri olan Gq kenetli reseptör uyarımı sonrasında membran fosfolipitlerinden ayrışan ve endoplazmik retikulumdan kalsiyum salınımını tetikleyen ikincil haberci aşağıdakilerden hangisidir?
Doğru Şık (C): İnozitol trifosfat (IP3)
Açıklama: Gq proteini aktive olduğunda Fosfolipaz C enzimi membran lipitlerini (PIP2) parçalayarak DAG ve IP3 oluşturur. Suda çözünebilen IP3 endoplazmik retikulumdaki reseptörlerine bağlanarak depolanmış kalsiyumun sitoplazmaya salınmasını tetikler. DAG ise hücre zarında kalarak Protein Kinaz C'yi aktive eder.

---

### ÇİFT 73 (Benzerlik: 0.77)

**Soru 1 (ID: e53e2321-c662-4227-8cca-9ffc3da102e8)**
Soru Kökü: Gq proteini kenetli reseptörlerin uyarılmasıyla aktive olan Fosfolipaz C enziminin, membran fosfolipidlerinden fosfoinozitol 4,5-bifosfatı (PIP2) parçalayarak oluşturduğu iki önemli ikinci haberci molekül aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Diaçil gliserol (DAG) ve inozitol trifosfat (IP3)
Açıklama: Fosfolipaz C enzimi membran bileşenlerinden olan PIP2'yi hidrolize ederek iki temel ikinci haberci üretir: Endoplazmik retikulumdan kalsiyum salgılatacak olan IP3 ve hücre zarına tutunup Protein Kinaz C'yi aktive edecek olan DAG. Araşidonik asit ise Fosfolipaz A2'nin ürünüdür.

**Soru 2 (ID: fbfa5eef-037a-47df-8aee-8c7b26cc13bd)**
Soru Kökü: Hücre sinyal iletim yollarından biri olan Gq kenetli reseptör uyarımı sonrasında membran fosfolipitlerinden ayrışan ve endoplazmik retikulumdan kalsiyum salınımını tetikleyen ikincil haberci aşağıdakilerden hangisidir?
Doğru Şık (C): İnozitol trifosfat (IP3)
Açıklama: Gq proteini aktive olduğunda Fosfolipaz C enzimi membran lipitlerini (PIP2) parçalayarak DAG ve IP3 oluşturur. Suda çözünebilen IP3 endoplazmik retikulumdaki reseptörlerine bağlanarak depolanmış kalsiyumun sitoplazmaya salınmasını tetikler. DAG ise hücre zarında kalarak Protein Kinaz C'yi aktive eder.

---

### ÇİFT 74 (Benzerlik: 0.77)

**Soru 1 (ID: 594abd11-1b6c-45cb-82a5-4d315cdea3cb)**
Soru Kökü: Hücre içi sinyal iletim yollarından biri olan adenilat siklaz yolağında, artan sitoplazmik cAMP seviyelerinin hücresel etkilerini oluşturmak üzere doğrudan aktive ettiği sitoplazmik hedef enzim aşağıdakilerden hangisidir?
Doğru Şık (D): Protein kinaz A
Açıklama: cAMP'nin hücre içindeki birincil ve spesifik hedefi Protein Kinaz A (PKA)'dır. PKA aktive olduktan sonra spesifik hücresel proteinleri fosforilleyerek enzimleri aktif veya inaktif hale getirir. Protein kinaz C (PKC) ise Diaçil gliserol (DAG) tarafından, Protein kinaz G (PKG) cGMP tarafından aktive edilir.

**Soru 2 (ID: 82f4f24e-bbd9-44ba-a8d7-9267b8d470d6)**
Soru Kökü: Bir peptit hormonu olan Glukagon, hedef hücresindeki reseptörüne bağlandığında Gs proteini aracılığıyla adenilat siklaz enzimini aktive eder. Bu sinyal yolağında ATP'den sentezlenen ikincil haberci olan cAMP, aşağıdaki enzimlerden hangisini aktive ederek hücresel etkiyi başlatır?
Doğru Şık (C): Protein kinaz A
Açıklama: G proteinlerinden Gs uyarımı adenilat siklazı aktive eder ve cAMP artışına neden olur. Artan cAMP hücre sitoplazmasında Protein kinaz A'yı (PKA) aktive ederek proteinlerin fosforilasyonunu sağlar. Fosfolipaz C ve Protein kinaz C ise Gq proteinine bağlı İnozitol trifosfat (IP3) ve Diaçil gliserol (DAG) yolağının elemanlarıdır.

---

### ÇİFT 75 (Benzerlik: 0.77)

**Soru 1 (ID: 82f4f24e-bbd9-44ba-a8d7-9267b8d470d6)**
Soru Kökü: Bir peptit hormonu olan Glukagon, hedef hücresindeki reseptörüne bağlandığında Gs proteini aracılığıyla adenilat siklaz enzimini aktive eder. Bu sinyal yolağında ATP'den sentezlenen ikincil haberci olan cAMP, aşağıdaki enzimlerden hangisini aktive ederek hücresel etkiyi başlatır?
Doğru Şık (C): Protein kinaz A
Açıklama: G proteinlerinden Gs uyarımı adenilat siklazı aktive eder ve cAMP artışına neden olur. Artan cAMP hücre sitoplazmasında Protein kinaz A'yı (PKA) aktive ederek proteinlerin fosforilasyonunu sağlar. Fosfolipaz C ve Protein kinaz C ise Gq proteinine bağlı İnozitol trifosfat (IP3) ve Diaçil gliserol (DAG) yolağının elemanlarıdır.

**Soru 2 (ID: b5277607-cddc-4567-9894-db992905f65c)**
Soru Kökü: Hücre içi sinyal iletim yollarından biri olan adenilat siklaz yolağında, artan sitoplazmik cAMP seviyelerinin hücresel etkilerini oluşturmak üzere doğrudan aktive ettiği sitoplazmik hedef enzim aşağıdakilerden hangisidir?
Doğru Şık (D): Protein kinaz A
Açıklama: cAMP'nin hücre içindeki birincil ve spesifik hedefi Protein Kinaz A (PKA)'dır. PKA aktive olduktan sonra spesifik hücresel proteinleri fosforilleyerek enzimleri aktif veya inaktif hale getirir. Protein kinaz C (PKC) ise Diaçil gliserol (DAG) tarafından, Protein kinaz G (PKG) cGMP tarafından aktive edilir.

---

### ÇİFT 76 (Benzerlik: 0.77)

**Soru 1 (ID: 121b7ddd-d4a7-4b40-8d99-5bef8faf6aae)**
Soru Kökü: Hücre membranı fosfolipid, kolesterol ve çeşitli proteinlerden oluşan dinamik bir yapıdır. Ancak fizyolojik bağlamda, insan vücudundaki tüm biyolojik materyaller zarda yer almaz. Aşağıdaki lipit bileşenlerinden hangi ikilisi normal hücre zarı yapısında kesinlikle **bulunmaz**?
Doğru Şık (A): Trigliseridler ve kolesterol esterleri
Açıklama: Hücre zarında yağ asitlerinin depo şekli olan trigliseridler ve kolesterolün depo şekli olan kolesterol esterleri hiçbir zaman bulunmaz. Membranda fosfolipidler (en sık lesitin), serbest kolesterol, glikolipidler ve proteinler yapısal olarak yer alır.

**Soru 2 (ID: f60a9979-fda2-494e-ad05-a274487574d6)**
Soru Kökü: Hücre zarının yapısında aşağıdaki lipid türlerinden hangisi kesinlikle **bulunmaz**?
Doğru Şık (E): Trigliserid
Açıklama: Trigliseridler, yağ asitlerinin hücresel depo şekli oldukları için plazma membranının yapısal komponentlerine katılmazlar. En güçlü distraktör olan kolesterol membranda bulunurken, kolesterol esterleri tıpkı trigliseridler gibi zar yapısında bulunmaz. Hücre zarı esas olarak fosfolipid, kolesterol ve az miktarda glikolipidden oluşur.

---

### ÇİFT 77 (Benzerlik: 0.77)

**Soru 1 (ID: 3b7849a1-691f-4c68-b93e-1b409da8f6ad)**
Soru Kökü: Hücre membranı fosfolipid, kolesterol ve çeşitli proteinlerden oluşan dinamik bir yapıdır. Ancak fizyolojik bağlamda, insan vücudundaki tüm biyolojik materyaller zarda yer almaz. Aşağıdaki lipit bileşenlerinden hangi ikilisi normal hücre zarı yapısında kesinlikle **bulunmaz**?
Doğru Şık (A): Trigliseridler ve kolesterol esterleri
Açıklama: Hücre zarında yağ asitlerinin depo şekli olan trigliseridler ve kolesterolün depo şekli olan kolesterol esterleri hiçbir zaman bulunmaz. Membranda fosfolipidler (en sık lesitin), serbest kolesterol, glikolipidler ve proteinler yapısal olarak yer alır.

**Soru 2 (ID: f60a9979-fda2-494e-ad05-a274487574d6)**
Soru Kökü: Hücre zarının yapısında aşağıdaki lipid türlerinden hangisi kesinlikle **bulunmaz**?
Doğru Şık (E): Trigliserid
Açıklama: Trigliseridler, yağ asitlerinin hücresel depo şekli oldukları için plazma membranının yapısal komponentlerine katılmazlar. En güçlü distraktör olan kolesterol membranda bulunurken, kolesterol esterleri tıpkı trigliseridler gibi zar yapısında bulunmaz. Hücre zarı esas olarak fosfolipid, kolesterol ve az miktarda glikolipidden oluşur.

---

### ÇİFT 78 (Benzerlik: 0.77)

**Soru 1 (ID: 59966bec-c4e3-472f-88f8-f9fc945d000e)**
Soru Kökü: Gq proteini aracılığıyla aktive olan fosfolipaz C, membran fosfolipidlerini parçalayarak hücre içi kalsiyum salınımını tetikleyen IP3 molekülünü üretir. Aşağıdaki hormonlardan hangisi fizyolojik etkilerini IP3/DAG sinyal yolu üzerinden **gerçekleştirmez**?
Doğru Şık (A): ADH (V2 reseptörü)
Açıklama: ADH'nın damar büzücü etki gösteren V1 reseptörü IP3/DAG sistemini kullanırken, böbrek toplama kanallarında akuaporinleri yerleştiren V2 reseptörü Gs proteini üzerinden cAMP yolağını kullanır. Oksitosin, TRH, GnRH ve GHRH hormonları ise kalsiyumu artırmak için IP3/DAG kaskadını klasik biçimde tetiklerler.

**Soru 2 (ID: cc7fec16-6910-4113-be7a-14341ccc46e3)**
Soru Kökü: Fizyolojik olayların düzenlenmesinde G protein kenetli yollar sıkça kullanılır. Aşağıdaki hormonlardan hangisinin ikincil haberci olarak cAMP'yi kullanarak hücresel etki oluşturması **beklenmez**?
Doğru Şık (C): Oksitosin
Açıklama: Oksitosin, hedef hücresi olan düz kaslarda kasılmayı sağlamak için Gq proteini üzerinden IP3 ve Kalsiyum yolağını kullanır. Glukagon, PTH, ACTH ve ADH'nın böbrekteki V2 reseptörü ise Gs proteini üzerinden cAMP miktarını artırarak etkilerini gösteren hormonlardır.

---

### ÇİFT 79 (Benzerlik: 0.76)

**Soru 1 (ID: a10c1ff3-0c3c-4368-90fd-0c6941569c1e)**
Soru Kökü: Steroid yapılı hormonların hücre sitoplazmasındaki spesifik reseptörlerine bağlanmadan önceki dinlenme durumunda, reseptörün DNA'ya bağlanacak olan aktif domain kısmını örterek onu inaktif halde tutan koruyucu protein molekülü aşağıdakilerden hangisidir?
Doğru Şık (E): Isı şok proteini-90 (Hsp-90)
Açıklama: Steroid hormonlar (kortizol, aldosteron vb.) için sitoplazmik reseptörlerin DNA bağlayıcı domaini, hormon ortada yokken Isı şok proteini 90 (Hsp-90) tarafından kapatılır. Hormon hücre içine difüze olup reseptöre bağlandığında Hsp-90 yapıdan ayrılır, reseptör kompleksi çekirdeğe girerek spesifik DNA dizisine (hormon cevap elemanı) bağlanır.

**Soru 2 (ID: aee6f9cd-0420-4986-bd6a-3a40ab61b575)**
Soru Kökü: Lipofilik yapılı steroid hormonların hücresel düzeydeki etki mekanizması incelendiğinde, hormonun sitoplazmadaki özgül reseptörüne bağlanmasıyla fizyolojik etkinin ortaya çıkması sürecinde gerçekleşen **ilk** kritik olay aşağıdakilerden hangisidir?
Doğru Şık (A): Hsp-90'ın ayrılarak hormon-reseptör kompleksinin çekirdeğe geçmesi
Açıklama: Steroid hormon hücre içine difüze olduktan sonra reseptörüne bağlanır. Bağlanma gerçekleşir gerçekleşmez, inaktif dönemde reseptörün DNA'ya bağlanacak domainini örten Hsp-90 (ısı şok proteini) ayrılır. Açığa çıkan hormon-reseptör kompleksi nükleus içine taşınarak transkripsiyonu başlatır.

---

### ÇİFT 80 (Benzerlik: 0.76)

**Soru 1 (ID: 5836d67d-1a79-4bcc-9c6b-7d1399474858)**
Soru Kökü: Lipofilik yapılı steroid hormonların hücresel düzeydeki etki mekanizması incelendiğinde, hormonun sitoplazmadaki özgül reseptörüne bağlanmasıyla fizyolojik etkinin ortaya çıkması sürecinde gerçekleşen **ilk** kritik olay aşağıdakilerden hangisidir?
Doğru Şık (A): Hsp-90'ın ayrılarak hormon-reseptör kompleksinin çekirdeğe geçmesi
Açıklama: Steroid hormon hücre içine difüze olduktan sonra reseptörüne bağlanır. Bağlanma gerçekleşir gerçekleşmez, inaktif dönemde reseptörün DNA'ya bağlanacak domainini örten Hsp-90 (ısı şok proteini) ayrılır. Açığa çıkan hormon-reseptör kompleksi nükleus içine taşınarak transkripsiyonu başlatır.

**Soru 2 (ID: a10c1ff3-0c3c-4368-90fd-0c6941569c1e)**
Soru Kökü: Steroid yapılı hormonların hücre sitoplazmasındaki spesifik reseptörlerine bağlanmadan önceki dinlenme durumunda, reseptörün DNA'ya bağlanacak olan aktif domain kısmını örterek onu inaktif halde tutan koruyucu protein molekülü aşağıdakilerden hangisidir?
Doğru Şık (E): Isı şok proteini-90 (Hsp-90)
Açıklama: Steroid hormonlar (kortizol, aldosteron vb.) için sitoplazmik reseptörlerin DNA bağlayıcı domaini, hormon ortada yokken Isı şok proteini 90 (Hsp-90) tarafından kapatılır. Hormon hücre içine difüze olup reseptöre bağlandığında Hsp-90 yapıdan ayrılır, reseptör kompleksi çekirdeğe girerek spesifik DNA dizisine (hormon cevap elemanı) bağlanır.

---

### ÇİFT 81 (Benzerlik: 0.75)

**Soru 1 (ID: 29adf7f5-fb7f-479f-9dae-406986873629)**
Soru Kökü: Basit difüzyon hızını belirleyen temel prensiplerden biri olan Fick difüzyon yasasına göre, net difüzyon hızı denklemindeki difüzyon katsayısı (D) taşınan maddenin hangi özelliği ile **ters** orantılıdır?
Doğru Şık (D): Molekül ağırlığının karekökü
Açıklama: Fick difüzyon yasasında difüzyon katsayısı (D), molekülün solubilitesi (yağda çözünürlüğü) ile doğru orantılı, molekül ağırlığının karekökü ile ise ters orantılıdır. Molekül ne kadar ağır ve büyükse difüzyon katsayısı o kadar düşer. Membran kalınlığı da hızı ters yönde etkiler ancak katsayının (D) içindeki değişken doğrudan molekül ağırlığıdır.

**Soru 2 (ID: cd906563-736c-44b3-8225-483ebc571d70)**
Soru Kökü: Fick difüzyon yasasına göre, bir maddenin basit difüzyonla hücre zarından geçiş hızı aşağıdakilerden hangisiyle ters orantılıdır?
Doğru Şık (C): Difüzyon mesafesi (membran kalınlığı)
Açıklama: Basit difüzyon hızı; konsantrasyon farkı, membran yüzey alanı ve sıcaklık ile doğru orantılıdır. Ancak membranın kalınlığı (difüzyon mesafesi) ve maddenin molekül ağırlığı arttıkça geçiş zorlaşacağı için difüzyon hızı bunlarla ters orantılıdır. Lipofilik maddeler membranda kolay çözündükleri için hızla geçerler, bu nedenle lipofilik özellik difüzyon hızını artırır.

---

### ÇİFT 82 (Benzerlik: 0.75)

**Soru 1 (ID: 5df83d96-be55-462d-986d-5fb7a4de094f)**
Soru Kökü: Madde transport hızını maddenin konsantrasyonuna göre incelediğimizde, taşıyıcı protein kullanan sistemler spesifik bir taşıma profili sergiler. Kolaylaştırılmış difüzyonu, basit difüzyondan ayıran ve bir maksimum hız sınırına (Vmax) sahip olmasını sağlayan temel özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Taşıyıcı proteinlerin doyma kinetiğine sahip olması
Açıklama: Kolaylaştırılmış difüzyon, basit difüzyon gibi enerji harcamaz ve konsantrasyon gradyenti yönünde çalışır. Ancak taşıyıcı bir proteine (örn. GLUT taşıyıcıları) ihtiyaç duyduğu için, ortamdaki molekül sayısı taşıyıcı protein sayısını aştığında taşıyıcılar doyar (doyma kinetiği) ve reaksiyon hızı maksimum bir limite (Vmax) ulaşarak sabitlenir. Basit difüzyon ise taşıyıcı gerektirmez ve lineer artış gösterir.

**Soru 2 (ID: c115b142-6b76-4212-85c4-d023be753fea)**
Soru Kökü: Madde transportu sırasında elektrokimyasal gradient yönünde gerçekleşen, enerji (ATP) gerektirmeyen ancak spesifik transport proteinlerinin kullanılması nedeniyle bir doyma kinetiğine (Vmax) sahip olan taşıma mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Kolaylaştırılmış difüzyon
Açıklama: Kolaylaştırılmış difüzyon, taşıyıcı proteinler kullanılarak konsantrasyon gradienti yönünde yapılan ve ATP harcanmayan geçiş tipidir. Protein kullanıldığı için belli bir konsantrasyonda taşıyıcılar doyar ve hız plato çizer (Vmax). Basit difüzyonda doyma kinetiği yoktur, konsantrasyon arttıkça hız doğrusal olarak artmaya devam eder.

---

### ÇİFT 83 (Benzerlik: 0.75)

**Soru 1 (ID: 0fa4f160-5bde-44de-8f90-760175c0d9aa)**
Soru Kökü: Madde transportu sırasında elektrokimyasal gradient yönünde gerçekleşen, enerji (ATP) gerektirmeyen ancak spesifik transport proteinlerinin kullanılması nedeniyle bir doyma kinetiğine (Vmax) sahip olan taşıma mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Kolaylaştırılmış difüzyon
Açıklama: Kolaylaştırılmış difüzyon, taşıyıcı proteinler kullanılarak konsantrasyon gradienti yönünde yapılan ve ATP harcanmayan geçiş tipidir. Protein kullanıldığı için belli bir konsantrasyonda taşıyıcılar doyar ve hız plato çizer (Vmax). Basit difüzyonda doyma kinetiği yoktur, konsantrasyon arttıkça hız doğrusal olarak artmaya devam eder.

**Soru 2 (ID: 5df83d96-be55-462d-986d-5fb7a4de094f)**
Soru Kökü: Madde transport hızını maddenin konsantrasyonuna göre incelediğimizde, taşıyıcı protein kullanan sistemler spesifik bir taşıma profili sergiler. Kolaylaştırılmış difüzyonu, basit difüzyondan ayıran ve bir maksimum hız sınırına (Vmax) sahip olmasını sağlayan temel özellik aşağıdakilerden hangisidir?
Doğru Şık (A): Taşıyıcı proteinlerin doyma kinetiğine sahip olması
Açıklama: Kolaylaştırılmış difüzyon, basit difüzyon gibi enerji harcamaz ve konsantrasyon gradyenti yönünde çalışır. Ancak taşıyıcı bir proteine (örn. GLUT taşıyıcıları) ihtiyaç duyduğu için, ortamdaki molekül sayısı taşıyıcı protein sayısını aştığında taşıyıcılar doyar (doyma kinetiği) ve reaksiyon hızı maksimum bir limite (Vmax) ulaşarak sabitlenir. Basit difüzyon ise taşıyıcı gerektirmez ve lineer artış gösterir.

---

