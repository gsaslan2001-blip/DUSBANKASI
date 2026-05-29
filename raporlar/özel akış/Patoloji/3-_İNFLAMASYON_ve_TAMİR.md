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

### ÇİFT 1 (Benzerlik: 0.83)

**Soru 1 (ID: 1328123c-9803-4e84-a84a-e626117dea3c)**
Soru Kökü: Akut inflamasyonda lökositlerin damar dışına çıkışı olan transmigrasyon (diapedez) aşamasında, endotel hücreleri ve lökositler üzerinde bulunan temel adezyon molekülü aşağıdakilerden hangisidir?
Doğru Şık (E): PECAM-1 (CD31)
Açıklama: Lökositlerin endotel duvarından damar dışı dokuya göç etmesi (transmigrasyon), PECAM-1 (CD31) molekülü sayesinde gerçekleşir. P-selektin yuvarlanmada, integrinler ise lökositlerin endoteldeki stabil adezyon aşamasında görev alır. PECAM-1 hem endotel hücresinde hem de lökositte eksprese edilerek lökositin dokuya geçişini sağlar.

**Soru 2 (ID: ed2c5e61-59bd-489b-828a-dabf380f508a)**
Soru Kökü: Lökositlerin inflamasyon bölgesine göçü sırasında endotel hücreleri arasından geçerek dokuya ulaşmasını (transmigrasyon/diapedez) sağlayan ve endotel ile lökositler arasında homotipik (aynı moleküllerin karşılıklı etkileşimi) bağlar kuran immünglobulin süperailesi üyesi molekül aşağıdakilerden hangisidir?
Doğru Şık (A): CD31 (PECAM-1)
Açıklama: CD31 (PECAM-1), lökosit transmigrasyonu sırasında hem lökositte hem de endotelde eksprese edilip iki hücre arasında homotipik etkileşim kurarak lökositin damar duvarını geçmesine izin veren spesifik moleküldür. ICAM-1 ve VCAM-1 ise endotel tarafında bulunur ve lökositteki farklı moleküllerle (LFA-1, VLA-4 vb.) heterotipik bağlar kurarak adezyonu sağlarlar; transmigrasyonu değil.

---

### ÇİFT 2 (Benzerlik: 0.83)

**Soru 1 (ID: 0498953a-dd60-4352-9b20-d63c3385fc64)**
Soru Kökü: Lökositlerin damar duvarına yaklaşması ve staz sebebiyle kenara yönelmesi olan marjinasyon sonrası, lökositlerin endotel üzerinde yuvarlanma hareketini sağlayan temel adezyon molekülü sınıfı aşağıdakilerden hangisidir?
Doğru Şık (B): Selektinler
Açıklama: Lökositlerin endotel üzerinde hızını keserek 'yuvarlanma' hareketini gerçekleştirmesini sağlayan temel moleküller L, E ve P-Selektinlerdir. Selektinler lökositlerdeki Sialil-Lewis X'e tutunurken, integrinler stabil adezyondan, PECAM-1 transmigrasyondan ve kemokinler kemotaksisten sorumludur.

**Soru 2 (ID: 1328123c-9803-4e84-a84a-e626117dea3c)**
Soru Kökü: Akut inflamasyonda lökositlerin damar dışına çıkışı olan transmigrasyon (diapedez) aşamasında, endotel hücreleri ve lökositler üzerinde bulunan temel adezyon molekülü aşağıdakilerden hangisidir?
Doğru Şık (E): PECAM-1 (CD31)
Açıklama: Lökositlerin endotel duvarından damar dışı dokuya göç etmesi (transmigrasyon), PECAM-1 (CD31) molekülü sayesinde gerçekleşir. P-selektin yuvarlanmada, integrinler ise lökositlerin endoteldeki stabil adezyon aşamasında görev alır. PECAM-1 hem endotel hücresinde hem de lökositte eksprese edilerek lökositin dokuya geçişini sağlar.

---

### ÇİFT 3 (Benzerlik: 0.81)

**Soru 1 (ID: 5e313a8d-b465-47bc-b5aa-e0e4b831094b)**
Soru Kökü: Kompleman sisteminde hücre yüzeyine bağlanarak geç kompleman komponentleriyle birleşen ve mikrobun lizisini sağlayan "Membran Atak Kompleksi"nin (MAC) oluşumunda yer alan, sistemin en etkin komponenti aşağıdakilerden hangisidir?
Doğru Şık (E): C9
Açıklama: Membran Atak Kompleksi (MAC/C5b-9), hedef mikrobun zarına porlar açarak lizise neden olan yapıdır ve bu lizisi gerçekleştiren en etkin parçası C9 molekülüdür. C3a ve C5a inflamasyon sürecini uyarırken, C3b opsonizasyonda görevlidir.

**Soru 2 (ID: c65efca4-e743-4f31-9633-3978ee3467b4)**
Soru Kökü: Kompleman sisteminin üç ayrı yolağının ortak son hedefi mikrop zarında kalıcı bir delik açmaktır. Bu hücre lizisine yol açan Membran Atak Kompleksinde (MAK) polimerize olarak miktar bazında en fazla bulunan molekül aşağıdakilerden hangisidir?
Doğru Şık (A): C9
Açıklama: Membran Atak Kompleksi (MAK) oluşurken C5b molekülü önce C6, C7 ve C8'e bağlanarak lipid membrana saplanır, ardından sayısız C9 molekülü ardışık olarak polimerize olup por (delik) yapısını oluşturur. Komplekste en etkin ve sayıca en fazla bulunan komponent C9'dur.

---

### ÇİFT 4 (Benzerlik: 0.78)

**Soru 1 (ID: a375940a-6e2e-45a7-8b38-17a91120a858)**
Soru Kökü: Araşidonik asit metabolizmasında nötrofil adezyonunu inhibe ederek anti-inflamatuvar etki gösteren lipoksinlerin sentezlenebilmesi için lökositlerden alınan ara ürünlerin, hangi hücre tipine geçerek 12-lipooksijenaz enzimi ile işlenmesi (transselüler biyosentez) zorunludur?
Doğru Şık (E): Trombositler
Açıklama: Lipoksinler, inflamasyonu durduran majör lipid mediyatörlerdir ve sentezleri için sadece lökosit yetmez; lökositteki ara ürünler trombositlere geçmelidir. Trombositlerde bulunan 12-lipooksijenaz enzimi ile bu döngü tamamlanarak fonksiyonel lipoksin üretilir.

**Soru 2 (ID: c2f5806e-427e-4951-bdaf-b1e6461402cc)**
Soru Kökü: Araşidonik asit metabolizmasında lipooksijenaz yolağı ürünlerinden hangisi nötrofil kemotaksisini ve endotele adezyonu inhibe ederek anti-inflamatuvar etki gösterir ve sentezi için araşidonik asit ürünlerinin nötrofilden trombositlere geçişine ihtiyaç duyar?
Doğru Şık (C): Lipoksinler
Açıklama: Lipoksinler, nötrofil kemotaksisini ve endotele tutunmasını inhibe eden anti-inflamatuvar moleküllerdir. Üretimleri için araşidonik asit ürünlerinin nötrofilden trombositlere transfer edilmesi (transselüler biyosentez) şarttır. Prostaglandinler ve Lökotrien B4 pro-inflamatuvar etkiler gösterir.

---

### ÇİFT 5 (Benzerlik: 0.77)

**Soru 1 (ID: 0498953a-dd60-4352-9b20-d63c3385fc64)**
Soru Kökü: Lökositlerin damar duvarına yaklaşması ve staz sebebiyle kenara yönelmesi olan marjinasyon sonrası, lökositlerin endotel üzerinde yuvarlanma hareketini sağlayan temel adezyon molekülü sınıfı aşağıdakilerden hangisidir?
Doğru Şık (B): Selektinler
Açıklama: Lökositlerin endotel üzerinde hızını keserek 'yuvarlanma' hareketini gerçekleştirmesini sağlayan temel moleküller L, E ve P-Selektinlerdir. Selektinler lökositlerdeki Sialil-Lewis X'e tutunurken, integrinler stabil adezyondan, PECAM-1 transmigrasyondan ve kemokinler kemotaksisten sorumludur.

**Soru 2 (ID: ed2c5e61-59bd-489b-828a-dabf380f508a)**
Soru Kökü: Lökositlerin inflamasyon bölgesine göçü sırasında endotel hücreleri arasından geçerek dokuya ulaşmasını (transmigrasyon/diapedez) sağlayan ve endotel ile lökositler arasında homotipik (aynı moleküllerin karşılıklı etkileşimi) bağlar kuran immünglobulin süperailesi üyesi molekül aşağıdakilerden hangisidir?
Doğru Şık (A): CD31 (PECAM-1)
Açıklama: CD31 (PECAM-1), lökosit transmigrasyonu sırasında hem lökositte hem de endotelde eksprese edilip iki hücre arasında homotipik etkileşim kurarak lökositin damar duvarını geçmesine izin veren spesifik moleküldür. ICAM-1 ve VCAM-1 ise endotel tarafında bulunur ve lökositteki farklı moleküllerle (LFA-1, VLA-4 vb.) heterotipik bağlar kurarak adezyonu sağlarlar; transmigrasyonu değil.

---

### ÇİFT 6 (Benzerlik: 0.76)

**Soru 1 (ID: 31dae15e-053e-4cef-885d-d532157e1059)**
Soru Kökü: Kırk beş yaşında erkek hastada gelişen akut gut artriti atağının 5. gününde eklemdeki inflamasyonun kendiliğinden gerilemeye başladığı izleniyor. Yapılan incelemede nötrofil ve trombositlerin ortaklaşa bir mediyatör sentezleyerek lökosit göçünü inhibe ettiği saptanıyor. Nötrofillerden trombositlere araşidonik asit ürünü geçişi (transselüler biyosentez) ile sentezlenen ve inflamasyonu sınırlandırıcı etki gösteren bu mediyatör aşağıdakilerden hangisidir?
Doğru Şık (C): Lipoksin A4
Açıklama: Lipoksinler, trombositlerde 12-lipooksijenaz enzimi aracılığıyla üretilen ve nötrofil kemotaksisini inhibe ederek anti-inflamatuvar etki gösteren mediyatörlerdir. Trombositler bu molekülü tek başına sentezleyemez, bu nedenle nötrofillerden ara ürün geçişine ihtiyaç duyulan transselüler biyosentez mekanizması kullanılır. Lökotrien B4 ise tam aksine güçlü bir nötrofil kemoatraktanıdır ve inflamasyonu şiddetlendirir.

**Soru 2 (ID: c2f5806e-427e-4951-bdaf-b1e6461402cc)**
Soru Kökü: Araşidonik asit metabolizmasında lipooksijenaz yolağı ürünlerinden hangisi nötrofil kemotaksisini ve endotele adezyonu inhibe ederek anti-inflamatuvar etki gösterir ve sentezi için araşidonik asit ürünlerinin nötrofilden trombositlere geçişine ihtiyaç duyar?
Doğru Şık (C): Lipoksinler
Açıklama: Lipoksinler, nötrofil kemotaksisini ve endotele tutunmasını inhibe eden anti-inflamatuvar moleküllerdir. Üretimleri için araşidonik asit ürünlerinin nötrofilden trombositlere transfer edilmesi (transselüler biyosentez) şarttır. Prostaglandinler ve Lökotrien B4 pro-inflamatuvar etkiler gösterir.

---

### ÇİFT 7 (Benzerlik: 0.74)

**Soru 1 (ID: 0498953a-dd60-4352-9b20-d63c3385fc64)**
Soru Kökü: Lökositlerin damar duvarına yaklaşması ve staz sebebiyle kenara yönelmesi olan marjinasyon sonrası, lökositlerin endotel üzerinde yuvarlanma hareketini sağlayan temel adezyon molekülü sınıfı aşağıdakilerden hangisidir?
Doğru Şık (B): Selektinler
Açıklama: Lökositlerin endotel üzerinde hızını keserek 'yuvarlanma' hareketini gerçekleştirmesini sağlayan temel moleküller L, E ve P-Selektinlerdir. Selektinler lökositlerdeki Sialil-Lewis X'e tutunurken, integrinler stabil adezyondan, PECAM-1 transmigrasyondan ve kemokinler kemotaksisten sorumludur.

**Soru 2 (ID: 5e722b6c-d6b6-4fe4-8507-30c49299ed25)**
Soru Kökü: Dolaşımdaki lökositlerin (nötrofil, monosit, lenfosit) endotel yüzeyindeki E-selektin ve P-selektin moleküllerine zayıf bağlar kurarak 'yuvarlanma (rolling)' hareketini başlatmasını sağlayan lökosit yüzey ligandı aşağıdakilerden hangisidir?
Doğru Şık (A): Sialil-Lewis X-modifiye glikoprotein
Açıklama: Lökositlerin yüzeyindeki Sialil-Lewis X glikoproteini, endoteldeki E-selektin ve P-selektinlere bağlanarak inflamasyonun erken fazı olan yuvarlanma hareketini gerçekleştirir. ICAM-1 ve VCAM-1 ise yuvarlanma bittikten sonra integrinler (LFA-1, MAC-1, VLA-4) aracılığıyla kurulan stabil adezyon aşamasının endotelyal reseptörleridir. Yuvarlanma aşamasının zayıf bağ karakteri tamamen selektin-karbonhidrat etkileşimine dayanır.

---

### ÇİFT 8 (Benzerlik: 0.74)

**Soru 1 (ID: 0357428f-43a1-43e9-adef-3a0837064b7f)**
Soru Kökü: Kompleman sisteminin klasik yolağında antijen-antikor kompleksi tetikleyici rol oynarken, alternatif yolağın aktivasyon sürecinde görev alan ve yolağın düzenlenmesini (stabilizasyonunu) sağlayan plazma proteinlerinden biri aşağıdakilerden hangisidir?
Doğru Şık (C): Faktör B
Açıklama: Kompleman sisteminin alternatif yolağı mikrobiyal yüzey molekülleri ile antikor bağımsız aktive olur ve bu yolağın düzenleyicileri (regülatörleri) spesifik olarak Properdin, Faktör B ve Faktör D'dir. Mannoz bağlayıcı lektin adından anlaşılacağı üzere sadece lektin yolağını tetikler. Faktör XII ise kompleman sistemini değil, kinin, pıhtılaşma ve fibrinolitik kaskadları başlatan esas mekanizmadır.

**Soru 2 (ID: 1d13f74c-679e-4963-b764-5f22f934c3e2)**
Soru Kökü: Kompleman sisteminin mikrobiyal yapıları algılama yöntemlerinden biri olan lektin yolağı aktivasyonu sırasında, mikrop üzerindeki karbonhidrat komplekslerine doğrudan bağlanarak C1 aktivasyonunu (antikor olmadan) tetikleyen plazma proteini aşağıdakilerden hangisidir?
Doğru Şık (C): Mannoz bağlayıcı lektin
Açıklama: Mannoz bağlayıcı lektin (MBL), plazmada dolaşan ve mikrobiyal yüzeylerdeki karbonhidratlara bağlandığında kompleman C1 kompleksini direkt aktive edebilen moleküldür (Lektin yolağı). CRP ve SAA opsonin olarak görev yapar ancak kompleman sisteminin klasik veya alternatif yolağı üzerinden aktivatör isimleri olarak geçmezler. Faktör B ve properdin ise sadece alternatif yolağın düzenleyicileridir.

---

### ÇİFT 9 (Benzerlik: 0.74)

**Soru 1 (ID: 5e722b6c-d6b6-4fe4-8507-30c49299ed25)**
Soru Kökü: Dolaşımdaki lökositlerin (nötrofil, monosit, lenfosit) endotel yüzeyindeki E-selektin ve P-selektin moleküllerine zayıf bağlar kurarak 'yuvarlanma (rolling)' hareketini başlatmasını sağlayan lökosit yüzey ligandı aşağıdakilerden hangisidir?
Doğru Şık (A): Sialil-Lewis X-modifiye glikoprotein
Açıklama: Lökositlerin yüzeyindeki Sialil-Lewis X glikoproteini, endoteldeki E-selektin ve P-selektinlere bağlanarak inflamasyonun erken fazı olan yuvarlanma hareketini gerçekleştirir. ICAM-1 ve VCAM-1 ise yuvarlanma bittikten sonra integrinler (LFA-1, MAC-1, VLA-4) aracılığıyla kurulan stabil adezyon aşamasının endotelyal reseptörleridir. Yuvarlanma aşamasının zayıf bağ karakteri tamamen selektin-karbonhidrat etkileşimine dayanır.

**Soru 2 (ID: ed2c5e61-59bd-489b-828a-dabf380f508a)**
Soru Kökü: Lökositlerin inflamasyon bölgesine göçü sırasında endotel hücreleri arasından geçerek dokuya ulaşmasını (transmigrasyon/diapedez) sağlayan ve endotel ile lökositler arasında homotipik (aynı moleküllerin karşılıklı etkileşimi) bağlar kuran immünglobulin süperailesi üyesi molekül aşağıdakilerden hangisidir?
Doğru Şık (A): CD31 (PECAM-1)
Açıklama: CD31 (PECAM-1), lökosit transmigrasyonu sırasında hem lökositte hem de endotelde eksprese edilip iki hücre arasında homotipik etkileşim kurarak lökositin damar duvarını geçmesine izin veren spesifik moleküldür. ICAM-1 ve VCAM-1 ise endotel tarafında bulunur ve lökositteki farklı moleküllerle (LFA-1, VLA-4 vb.) heterotipik bağlar kurarak adezyonu sağlarlar; transmigrasyonu değil.

---

### ÇİFT 10 (Benzerlik: 0.74)

**Soru 1 (ID: 93605351-058f-48ba-a1dc-d88392e14644)**
Soru Kökü: Antijen sunan hücrelerin alt grupları olan foliküler dendritik hücreler, lenfoid foliküllerin germinal merkezlerinde bulunurlar. Bu spesifik hücre grubu için aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): MHC II molekülleri aracılığıyla antijenleri T lenfositlere sunmaları
Açıklama: Foliküler dendritik hücrelerin immün sistemdeki temel istisnai özelliği MHC Sınıf II molekülü barındırmamaları ve bu nedenle T lenfositlere antijen SUNMAMALARIDIR. Bu hücreler sadece germinal merkezlerde antijen-antikor-kompleman komplekslerini bağlayarak B lenfositlere sunar ve humoral (antikor) belleği güçlendirirler.

**Soru 2 (ID: e7bcfb96-82e3-4c30-aa3b-3f129e028fb3)**
Soru Kökü: Dendritik hücreler ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?
Doğru Şık (D): Lenfoid foliküllerdeki foliküler dendritik hücreler antijenleri doğrudan T lenfositlere sunarlar.
Açıklama: Lenf nodlarında yer alan Foliküler Dendritik Hücrelerin (FDC) MHC II molekülü bulunmaz ve T lenfositlere antijen sunmazlar. FDC'ler antijenleri yakalayıp B lenfositlere sunarak bellek gelişimine yardımcı olurlar. Diğer dendritik hücreler ise T hücrelerine sunum yapar.

---

### ÇİFT 11 (Benzerlik: 0.73)

**Soru 1 (ID: 5ccf5105-b3b0-4a34-8bf5-2dcc1b69a032)**
Soru Kökü: Araşidonik asit metabolizmasında histaminden çok daha güçlü damar geçirgenliği artışı sağlayan, şiddetli bronkokonstriksiyon oluşturan ve 'Anaflaksinin yavaş reaktan maddeleri' (SRS-A) olarak da isimlendirilen sisteinil içeren lökotrien grubu aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (C): LTC4, LTD4, LTE4
Açıklama: Sisteinil lökotrienler (LTC4, LTD4 ve LTE4), araşidonik asit yolağında üretilen ve SRS-A (slow reacting substance of anaphylaxis) olarak bilinen, yoğun düz kas spazmı ve damar geçirgenliği yapan molekül grubudur. LTB4 ise bu gruba dahil değildir; o sisteinil içermeyen çok güçlü bir lökosit kemotaktik faktörüdür ve vasküler düzeyden çok hücresel toplanmayı yönetir.

**Soru 2 (ID: ddc5bb79-c570-4050-9e32-3eb5d9834133)**
Soru Kökü: Astım gibi aşırı duyarlılık reaksiyonlarının vazgeçilmez mediyatörleri olan lökotrienler ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): LTC4 ve LTD4 güçlü bronkodilatasyon yaparak akciğer hava yollarını enfeksiyonlarda açık tutar.
Açıklama: LTC4, LTD4 ve LTE4 (sisteinil lökotrienler) bronkodilatasyon yapmaz, aksine akciğerdeki düz kaslarda çok şiddetli bronkospazm oluştururlar. Bu bronkokonstrüktör etki nedeniyle astım tedavisinde lökotrien reseptör antagonistleri (zafirlukast vb.) kullanılır.

---

### ÇİFT 12 (Benzerlik: 0.73)

**Soru 1 (ID: 15e77f93-22f2-4da1-9c01-8b61f5e569f9)**
Soru Kökü: Gram negatif bakteriyemi (sepsis) tablosunda yoğun bakımda izlenen bir hastada, bakterilerin dış zarında bulunan lipopolisakkaritlerin (LPS) dolaşan lökositler tarafından hızla tanınması gerekir. Bu süreçte mikrobu doğrudan tanıyan ve hücre zarına gömülü TLR reseptörleri ile ortak çalışan makrofaj yüzey proteini aşağıdakilerden hangisidir?
Doğru Şık (E): CD14
Açıklama: Lökosit yüzeyinde bulunan Toll-like reseptör (TLR), tek başına Gram negatif bakteri endotoksinini (LPS) yakalayamaz; yanındaki yardımcı koreseptör olan CD14 molekülü LPS'i bağlar ve TLR sinyalini aktifleyerek fagositoz kaskadını tetikler.

**Soru 2 (ID: 93dcbc58-a145-41dc-9f78-3b00f7e091ad)**
Soru Kökü: Lökositlerin yüzeyinde Toll-benzeri reseptörler (TLR) ile eşlenik halde (ko-reseptör olarak) bulunan CD14 molekülünün hedef aldığı mikrobiyal patojenik komponent aşağıdakilerden hangisidir?
Doğru Şık (A): Lipopolisakkarit (LPS)
Açıklama: Lökosit yüzeyindeki CD14 molekülü, Toll-benzeri reseptörlerle (TLR) kompleks oluşturarak Gram-negatif bakterilerin dış zarında bulunan lipopolisakkariti (LPS) tanımakla görevlidir. Fungal glikanlar C-tipi lektin reseptörleri tarafından tanınırken, viral nükleik asitler hücre içi yerleşimli RIG-benzeri reseptörlerin hedefidir. CD14-LPS etkileşimi, endotoksik şok patogenezindeki en kritik başlangıç adımlarından biridir.

---

### ÇİFT 13 (Benzerlik: 0.73)

**Soru 1 (ID: 2eb35314-ac86-46aa-b13a-9c4482c2fb46)**
Soru Kökü: Tip 2 diyabet (obezite ilişkili), gut ve ateroskleroz patogenezinde rol oynadığı gösterilmiş olan; nekrotik hücre ürünleri, potasyum kaybı gibi iyon problemleri ve ürik asidi tanıyarak İL-1 üretimini tetikleyen reseptör/kompleks aşağıdakilerden hangisidir?
Doğru Şık (C): NOD-benzeri reseptörler ve İnflammazom
Açıklama: NOD-benzeri reseptörler; ürik asit, ATP ve potasyum kaybı gibi uyaranları algılayarak İnflammazom kompleksini aktive eder ve kaspaz-1 aracılığıyla İL-1 sekresyonunu tetikler. Tip 2 diyabet ve gut patogenezi doğrudan bu reseptör yolaklarıyla ilişkilidir. Diğer reseptörler temel olarak patojen tanıma ve fagositoz süreçlerinde farklı işlevlere sahiptir.

**Soru 2 (ID: db049926-cc0c-4c0f-946b-5334a85a9e54)**
Soru Kökü: 50 yaşında obez erkek hasta, ayak başparmağında ani başlayan şiddetli ağrı, kızarıklık ve şişlik şikayetiyle başvuruyor. Eklem sıvısı incelemesinde ürik asit kristalleri saptanıyor. Bu hastada dokudaki nekrotik hücre ürünleri ve ürik asiti tanıyarak kaspaz-1 aktivasyonu üzerinden interlökin-1 (İL-1) üretimini tetikleyen majör reseptör sistemi aşağıdakilerden hangisidir?
Doğru Şık (E): NOD-benzeri reseptörler (İnflammazom)
Açıklama: NOD-benzeri reseptörler (NLR'ler) ve eşlik eden İnflammazom kompleksi; ürik asit, ATP gibi nekrotik/endojen tehlike sinyallerini tanıyarak kaspaz-1'i aktive eder ve sitokin (IL-1) fırtınasını başlatır. Gut, ailesel Akdeniz ateşi (FMF) ve tip 2 diyabet patogenezinde doku inflamasyonunu başlatan temel mekanizma bu komplekstir.

---

### ÇİFT 14 (Benzerlik: 0.72)

**Soru 1 (ID: 117328f2-31e4-48d6-814c-db3a7036d538)**
Soru Kökü: Sekonder yara iyileşmesinde yara kontraksiyonunu (yara büzüşmesini) sağlayarak, defekt boyutunu orijinalin %5-10'una kadar düşürebilen temel hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Myofibroblastlar
Açıklama: Sekonder yara tamirinde yara kontraksiyonunu sağlayan ve defekti küçülten temel yapı, kontraktil proteinler (aktin filamentleri) kazanan özelleşmiş Myofibroblastlardır. Makrofajlar debris temizliğinde, endotel hücreleri ise anjiyogenezde görev alıp kontraksiyonda doğrudan rol oynamazlar.

**Soru 2 (ID: d586199f-930c-42fa-ac36-b1d4173f5dec)**
Soru Kökü: Büyük doku kaybının olduğu sekonder yara iyileşmesinde inflamasyon ve onarım evreleri iç içe geçmiştir. Yara iyileşmesinin 3. gününde dominant hale gelerek ekstrasellüler atıkları temizleyen, fibrini yıkan, anjiyogenezi başlatan ve doku tamirinin anahtar hücresi olarak kabul edilen hücre aşağıdakilerden hangisidir?
Doğru Şık (D): Makrofaj
Açıklama: Yara iyileşmesinin 3. gününde akut evredeki nötrofillerin yerini makrofajlar alır. Makrofajlar salgıladıkları büyüme faktörleri ile (VEGF, FGF, TGF-b) hem anjiyogenezi hem fibroblast proliferasyonunu yöneterek tamir sürecinin orkestra şefi rolünü üstlenirler. Nötrofiller sadece ilk 24-48 saatte debridman için ortamda baskındır.

---

### ÇİFT 15 (Benzerlik: 0.72)

**Soru 1 (ID: 538958fa-b0fd-4bc9-89cf-c13221e931a7)**
Soru Kökü: Granülomatöz inflamasyon izlenen bir hastadan alınan lenf nodu biyopsisinde nekrotik merkezleri görülmeyen "non-kazeöz" granülomlar tespit edilmiştir. Buna göre bu hasta için aşağıdaki hastalıklardan hangisi en az olasıdır?
Doğru Şık (E): Tüberküloz
Açıklama: Tüberküloz (Mycobacterium tuberculosis), hücre sınırlarının kaybolduğu ve merkezinde kazeifikasyon nekrozu bulunan kazeöz granülomlarla karakterizedir. Sarkoidoz, Crohn hastalığı, lepra ve yabancı cisim reaksiyonlarında ise genellikle nekroz içermeyen (non-kazeöz) granülomlar görülür.

**Soru 2 (ID: faf2ac29-0553-497f-8a6b-95d4ebd33e97)**
Soru Kökü: Otuz beş yaşındaki kadın hasta, vücudunda iz bırakan nodüler lezyonlar nedeniyle başvurmuştur. Biyopsi incelemesinde 'gom' olarak adlandırılan alanlar ve eşlik eden yoğun plazmosit infiltrasyonu saptanmıştır. Bu hastadaki granülomatöz inflamasyon tablosunun etkeni aşağıdakilerden hangisidir?
Doğru Şık (B): Treponema pallidum
Açıklama: Gom oluşumu ve yoğun plazmosit (plazma hücresi) infiltrasyonu, Treponema pallidum'un neden olduğu Tersiyer Sifiliz granülomlarının patognomonik morfolojik bulgusudur. M. tuberculosis kazeifiye tüberkül ve Langhans dev hücresi oluştururken, M. leprae non-kazeifiye granülom ve asit-fast basil izleriyle karakterizedir.

---

### ÇİFT 16 (Benzerlik: 0.72)

**Soru 1 (ID: 31dae15e-053e-4cef-885d-d532157e1059)**
Soru Kökü: Kırk beş yaşında erkek hastada gelişen akut gut artriti atağının 5. gününde eklemdeki inflamasyonun kendiliğinden gerilemeye başladığı izleniyor. Yapılan incelemede nötrofil ve trombositlerin ortaklaşa bir mediyatör sentezleyerek lökosit göçünü inhibe ettiği saptanıyor. Nötrofillerden trombositlere araşidonik asit ürünü geçişi (transselüler biyosentez) ile sentezlenen ve inflamasyonu sınırlandırıcı etki gösteren bu mediyatör aşağıdakilerden hangisidir?
Doğru Şık (C): Lipoksin A4
Açıklama: Lipoksinler, trombositlerde 12-lipooksijenaz enzimi aracılığıyla üretilen ve nötrofil kemotaksisini inhibe ederek anti-inflamatuvar etki gösteren mediyatörlerdir. Trombositler bu molekülü tek başına sentezleyemez, bu nedenle nötrofillerden ara ürün geçişine ihtiyaç duyulan transselüler biyosentez mekanizması kullanılır. Lökotrien B4 ise tam aksine güçlü bir nötrofil kemoatraktanıdır ve inflamasyonu şiddetlendirir.

**Soru 2 (ID: 560cec7a-2c09-4dfb-a59a-d772f3881792)**
Soru Kökü: İnflamatuvar yanıtta, makrofaj veya lökosit kaynaklı mediyatörlerin sentezi farklı yolaklarla düzenlenir. Komşu hücrelerde sentezlenmiş prekürsörlerin transselüler (hücreden hücreye aktarım) biyosentezle işlenmesine bağımlı olan anti-inflamatuvar mediyatör sınıfı aşağıdakilerden hangisidir?
Doğru Şık (B): Lipoksinler
Açıklama: Lipoksin (LXA4, LXB4) üretimi eikozanoid sentezi içinde bir istisnadır. Nötrofiller ve trombositler bu ürünü tek başlarına üretemezler. Nötrofilden trombositlere geçen ara ürün, trombositteki 12-lipooksijenaz ile son anti-inflamatuvar lipoksin molekülüne çevrilir.

---

### ÇİFT 17 (Benzerlik: 0.72)

**Soru 1 (ID: 3317ae88-0f51-4b4a-89ff-9fb0cd674eac)**
Soru Kökü: Doku tamiri sürecinin son aşamasında ekstrasellüler matriks proteinlerinin (ECM) parçalanması matriks metalloproteinazlar (MMP) tarafından gerçekleştirilir. Özellikle laminin ve fibronektin gibi bağ doku elemanlarını yıkan 'Sitromelizin' grubu enzimler aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (B): MMP-3, MMP-10, MMP-11
Açıklama: Sitromelizin grubu matriks metalloproteinazlar MMP-3, 10 ve 11'den oluşur; temel olarak laminin, fibronektin ve amorf kollajeni parçalarlar. MMP-1, 2, 3 intertisyel kollajenaz olarak fibriler kollajeni yıkarken, nötrofil elastaz ve katepsin G serin proteaz yapısındadır ve metalloenzim grubuna dahil değildirler. Bu yıkım dengesi remodeling için şarttır.

**Soru 2 (ID: 5088411c-ee03-4abc-b5a8-a6e8785878fd)**
Soru Kökü: Doku tamirinin remodeling (yeniden biçimlenme) aşamasında, ekstrasellüler matriks (ECM) proteinlerinin ve kollajenin parçalanmasını sağlayan matriks metalloproteinazların (MMP) dokudaki temel aktivite inhibitörü aşağıdakilerden hangisidir?
Doğru Şık (B): Doku metalloproteinaz inhibitörleri (TIMPs)
Açıklama: Matriks metalloproteinazların (MMP) ECM üzerindeki yıkıcı etkisini sınırlayarak remodeling sürecini dengeleyen temel enzimler Doku Metalloproteinaz İnhibitörleridir (TIMPs). Alfa-1 antitripsin nötrofil elastazını inhibe ederken, TGF-beta kollajen sentezini artıran pro-fibrotik bir mediyatördür.

---

### ÇİFT 18 (Benzerlik: 0.70)

**Soru 1 (ID: 1328123c-9803-4e84-a84a-e626117dea3c)**
Soru Kökü: Akut inflamasyonda lökositlerin damar dışına çıkışı olan transmigrasyon (diapedez) aşamasında, endotel hücreleri ve lökositler üzerinde bulunan temel adezyon molekülü aşağıdakilerden hangisidir?
Doğru Şık (E): PECAM-1 (CD31)
Açıklama: Lökositlerin endotel duvarından damar dışı dokuya göç etmesi (transmigrasyon), PECAM-1 (CD31) molekülü sayesinde gerçekleşir. P-selektin yuvarlanmada, integrinler ise lökositlerin endoteldeki stabil adezyon aşamasında görev alır. PECAM-1 hem endotel hücresinde hem de lökositte eksprese edilerek lökositin dokuya geçişini sağlar.

**Soru 2 (ID: 5e722b6c-d6b6-4fe4-8507-30c49299ed25)**
Soru Kökü: Dolaşımdaki lökositlerin (nötrofil, monosit, lenfosit) endotel yüzeyindeki E-selektin ve P-selektin moleküllerine zayıf bağlar kurarak 'yuvarlanma (rolling)' hareketini başlatmasını sağlayan lökosit yüzey ligandı aşağıdakilerden hangisidir?
Doğru Şık (A): Sialil-Lewis X-modifiye glikoprotein
Açıklama: Lökositlerin yüzeyindeki Sialil-Lewis X glikoproteini, endoteldeki E-selektin ve P-selektinlere bağlanarak inflamasyonun erken fazı olan yuvarlanma hareketini gerçekleştirir. ICAM-1 ve VCAM-1 ise yuvarlanma bittikten sonra integrinler (LFA-1, MAC-1, VLA-4) aracılığıyla kurulan stabil adezyon aşamasının endotelyal reseptörleridir. Yuvarlanma aşamasının zayıf bağ karakteri tamamen selektin-karbonhidrat etkileşimine dayanır.

---

### ÇİFT 19 (Benzerlik: 0.70)

**Soru 1 (ID: 172b5826-3efa-438f-8142-7074f0244660)**
Soru Kökü: Anjiyogenezin stabilizasyon evresinde, yeni oluşan ince endotelyal tüplerin perisitler ve düz kas hücreleriyle desteklenerek yapısal matürasyon kazanması gerekir. Bu kritik yapısal matürasyon sürecinde endotel hücresi üzerindeki Tie2 tirozin kinaz reseptörüne bağlanan büyüme faktörü aşağıdakilerden hangisidir?
Doğru Şık (E): Anjiyopoetin
Açıklama: Yeni damarların yapısal olarak olgunlaşması ve stabilizasyonu anjiyopoetin molekülünün Tie2 reseptörüne bağlanmasıyla tetiklenir; bu süreç perisit ve düz kas toplanmasını sağlar. VEGF endotel göçü ve proliferasyonunu başlatan ilk faktörken damar olgunlaşmasından ziyade damar taslağı oluşumunda görev alır. Notch sinyali ise damarların düzenli dallanmasını yönetir.

**Soru 2 (ID: 88cbb985-16ea-43df-b299-2027c1b69f78)**
Soru Kökü: Anjiyogenez sürecinde yeni damarların dallanmasını ve filizlenmesini sağlayarak iyileşen dokuda kan desteğinin düzenli olmasını koordine eden sinyal yolağı aşağıdakilerden hangisidir?
Doğru Şık (A): Notch sinyali
Açıklama: Notch sinyal yolağı, anjiyogenez sırasında aşırı endotel proliferasyonunu kontrol ederek damarların düzenli filizlenmesini ve dallanmasını koordine eder. VEGF yolağı büyüme için temel uyarıyı sağlarken, Notch bu sürecin kaotik olmasını engelleyen yönlendirici olarak çalışır.

---

### ÇİFT 20 (Benzerlik: 0.70)

**Soru 1 (ID: 63b3f3ba-0041-4458-a4fc-b4a50e42d671)**
Soru Kökü: Akut inflamasyon sırasında damar duvarından en erken eksprese olan adezyon molekülü P-selektindir. Bu hızlı uyarımın asıl sebebi, sitokin uyarısı gelen endotelde P-selektinin hücre içinde hangi depo yapıdan doğrudan dışarıya transfer edilmesidir?
Doğru Şık (E): Weibel-Palade cisimcikleri
Açıklama: P-selektin (CD62P), endotel hücreleri içindeki spesifik sitoplazmik depo organeli olan Weibel-Palade cisimciklerinde hazır bekler. Histamin, trombin veya sitokinlerin bağlandığı saniyelerde vezikül membranıyla bütünleşerek hızlı ekspresyon rekorunu kırar.

**Soru 2 (ID: defed684-6cbe-4c88-9a3c-e600bd617091)**
Soru Kökü: Yirmi beş yaşında kadın hasta, ciltte oluşan mekanik kesi sonrası ilk dakikalarda bölgede kızarıklık tablosu sergiliyor. İnflamasyonun en erken evresinde endotelde eksprese edilen ve uyarılmamış hücrelerde Weibel-Palade cisimciklerinde depolandığı bilinen adezyon molekülü aşağıdakilerden hangisidir?
Doğru Şık (B): P-selektin
Açıklama: P-selektin, endotel hücrelerinin Weibel-Palade cisimciklerinde hazır olarak depolanan ve histamin veya trombin uyarısıyla dakikalar içinde hücre yüzeyine çıkan en erken adezyon molekülüdür. E-selektin ise TNF-alfa veya IL-1 gibi sitokinlerin gen transkripsiyonunu uyarmasıyla daha geç (saatler sonra) eksprese edilir. L-selektin endotelde değil, lökosit yüzeyinde bulunur.

---

### ÇİFT 21 (Benzerlik: 0.69)

**Soru 1 (ID: 13b248bc-a4ae-430c-9023-bca125f1f5b9)**
Soru Kökü: Doku hasarı durumunda kollajene bağlanarak plazma kökenli mediyatörlerin üretimini başlatan Faktör 12'nin (Hageman Faktör), doğrudan ya da dolaylı olarak aktive ettiği dört sistem bulunmaktadır. Aşağıdakilerden hangisi bu dört temel sistemden biri **değildir**?
Doğru Şık (C): Lipooksijenaz yolağı
Açıklama: Faktör 12 (Hageman Faktör) aktivasyonu; 1) Kinin kaskadını (Bradikinin üretimi), 2) Pıhtılaşma kaskadını (Trombin oluşumu), 3) Fibrinolitik sistemi (Plazmin oluşumu) ve 4) Kompleman kaskadını (Plazmin üzerinden C3 parçalanması) tetikler. Lipooksijenaz yolağı ise membran fosfolipitlerinden ayrılan araşidonik asit üzerinden işleyen hücre kaynaklı bir yoldur, plazma kökenli Hageman faktörü kaskadlarının direkt bir parçası değildir.

**Soru 2 (ID: 3ecaa825-acc1-4668-b990-2fe095a570bf)**
Soru Kökü: I. Hageman faktör (Faktör 12) aktivasyonu 
II. Plazmin ile fibrinolitik sistemin uyarılması 
III. Bradikinin sentezi 
Koagülasyon sistemi aktivasyonu sırasında yukarıda belirtilen molekül ve yollardan hangileri doğrudan plazma kinin sistemi kaskadı ile ilişkilidir?
Doğru Şık (C): I ve III
Açıklama: Faktör 12 (Hageman Faktör), pıhtılaşmayı başlatırken aynı anda prekallikreini aktive ederek kinin sistemini uyarır ve sonuçta vazodilatör bradikinin sentezlenir. Plazmin ise fibrini yıkan bir sistem elemanıdır ve kinin kaskadının doğrudan bir parçası değildir.

---

### ÇİFT 22 (Benzerlik: 0.69)

**Soru 1 (ID: 560cec7a-2c09-4dfb-a59a-d772f3881792)**
Soru Kökü: İnflamatuvar yanıtta, makrofaj veya lökosit kaynaklı mediyatörlerin sentezi farklı yolaklarla düzenlenir. Komşu hücrelerde sentezlenmiş prekürsörlerin transselüler (hücreden hücreye aktarım) biyosentezle işlenmesine bağımlı olan anti-inflamatuvar mediyatör sınıfı aşağıdakilerden hangisidir?
Doğru Şık (B): Lipoksinler
Açıklama: Lipoksin (LXA4, LXB4) üretimi eikozanoid sentezi içinde bir istisnadır. Nötrofiller ve trombositler bu ürünü tek başlarına üretemezler. Nötrofilden trombositlere geçen ara ürün, trombositteki 12-lipooksijenaz ile son anti-inflamatuvar lipoksin molekülüne çevrilir.

**Soru 2 (ID: a375940a-6e2e-45a7-8b38-17a91120a858)**
Soru Kökü: Araşidonik asit metabolizmasında nötrofil adezyonunu inhibe ederek anti-inflamatuvar etki gösteren lipoksinlerin sentezlenebilmesi için lökositlerden alınan ara ürünlerin, hangi hücre tipine geçerek 12-lipooksijenaz enzimi ile işlenmesi (transselüler biyosentez) zorunludur?
Doğru Şık (E): Trombositler
Açıklama: Lipoksinler, inflamasyonu durduran majör lipid mediyatörlerdir ve sentezleri için sadece lökosit yetmez; lökositteki ara ürünler trombositlere geçmelidir. Trombositlerde bulunan 12-lipooksijenaz enzimi ile bu döngü tamamlanarak fonksiyonel lipoksin üretilir.

---

### ÇİFT 23 (Benzerlik: 0.69)

**Soru 1 (ID: 84e7ee54-e524-4c91-9d04-7cf66687fc95)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta şiddetli adet sancısı (dismenore) ve spazmlarla başvuruyor. Uterin düz kasların ve bronşiyal arteriyollerin güçlü kontraksiyonunu uyararak klinik tabloya katkı sağlayan başlıca araşidonik asit ürünü aşağıdakilerden hangisidir?
Doğru Şık (B): Prostaglandin F2 alfa
Açıklama: Prostaglandin F2 alfa (PGF2a), özellikle uterus düz kaslarının kontraksiyonundan sorumlu olan mediyatördür ve klinik dismenore fizyopatolojisinde kritik rol oynar. Prostaglandin E2 de ağrı patogenezine katılır ancak hiperaljezi (ağrı eşiğinin düşmesi) ve lokal vazodilatasyon yapar, kas kontraksiyonu yapmaz. Prostasiklin tam tersi gevşeme etkilerine sahiptir.

**Soru 2 (ID: a59c12f1-a234-410c-8b24-e9b863761cd3)**
Soru Kökü: 25 yaşında kadın hasta, diş çekimi sonrası uygulama bölgesinde ağrı ve sistemik hafif ateş şikayetiyle başvuruyor. Hastanın şikayetlerinden sorumlu olan, deriyi ağrılı uyaranlara karşı hassaslaştıran (hiperaljezik) ve hipotalamusta set-pointi yükselterek ateşe neden olan eikozanoid aşağıdakilerden hangisidir?
Doğru Şık (A): Prostaglandin E2
Açıklama: Prostaglandin E2 (PGE2) hiperaljezik özellik göstererek ağrı eşiğini düşürür ve ateş döngüsünü başlatan nörolojik sinyali üretir. Prostaglandin D2 daha çok kemotaksi ve bronkospazmdan sorumlu iken lökotrien B4 nötrofil göçünü yönetir.

---

### ÇİFT 24 (Benzerlik: 0.69)

**Soru 1 (ID: 2823bed9-faab-48a5-afa1-901cc3096c00)**
Soru Kökü: 35 yaşında erkek hasta, tekrarlayan bakteriyel enfeksiyonlar nedeniyle inceleniyor. Lökositlerin endotel yüzeyine stabil adezyonunda defekt saptanıyor. Bu hastada lökositler üzerindeki LFA-1 ve MAC-1 integrinlerinin inflamasyon alanında bağlanması gereken endotel kaynaklı ligand aşağıdakilerden hangisidir?
Doğru Şık (A): ICAM-1
Açıklama: LFA-1 ve MAC-1 integrinleri, lökositlerin endotele stabil adezyonunu sağlamak için endotel üzerindeki ICAM-1 (CD54) ve ICAM-2 ligandlarına bağlanır. VCAM-1 molekülü VLA-4 integrininin ligandı iken, Sialil-Lewis X lökosit yuvarlanmasını başlatan selektinlerin ligandıdır.

**Soru 2 (ID: 5e722b6c-d6b6-4fe4-8507-30c49299ed25)**
Soru Kökü: Dolaşımdaki lökositlerin (nötrofil, monosit, lenfosit) endotel yüzeyindeki E-selektin ve P-selektin moleküllerine zayıf bağlar kurarak 'yuvarlanma (rolling)' hareketini başlatmasını sağlayan lökosit yüzey ligandı aşağıdakilerden hangisidir?
Doğru Şık (A): Sialil-Lewis X-modifiye glikoprotein
Açıklama: Lökositlerin yüzeyindeki Sialil-Lewis X glikoproteini, endoteldeki E-selektin ve P-selektinlere bağlanarak inflamasyonun erken fazı olan yuvarlanma hareketini gerçekleştirir. ICAM-1 ve VCAM-1 ise yuvarlanma bittikten sonra integrinler (LFA-1, MAC-1, VLA-4) aracılığıyla kurulan stabil adezyon aşamasının endotelyal reseptörleridir. Yuvarlanma aşamasının zayıf bağ karakteri tamamen selektin-karbonhidrat etkileşimine dayanır.

---

### ÇİFT 25 (Benzerlik: 0.69)

**Soru 1 (ID: 81e42dc2-54da-49c2-9c76-38afc4ccfb3d)**
Soru Kökü: Doku onarımı sürecinde aşırı skar oluşumunu (fibrozis) engelleyen ve terapötik olarak yara izlerini azaltma potansiyeli taşıyan molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Dönüştürücü büyüme faktörü-beta 3 (TGF-b3)
Açıklama: Fibrozis ve skar dokusu birikiminden temel sorumlu sitokin TGF-b1 iken; TGF-b3 tam tersi bir etkiye sahiptir ve skar oluşumunu azaltır (anti-fibrotik). Klasik büyüme faktörleri olan EGF veya PDGF, matriks ve hücre sentezini artırarak skar yükünü artırma eğilimindedir. Bu zıt etki, fetal iyileşmenin skarsız olmasının temel mekanizmalarından biridir.

**Soru 2 (ID: e7b41247-38ea-4621-afc7-e5c6c059d892)**
Soru Kökü: Doku iyileşmesi sürecinde fibroblastlar tarafından sentezlenen, epitel dokusunu örten keratinositlerin yüzeye migrasyonunu, proliferasyonunu ve farklılaşmasını spesifik olarak uyaran büyüme faktörü aşağıdakilerden hangisidir?
Doğru Şık (C): Keratinosit büyüme faktörü (KGF / FGF-7)
Açıklama: Keratinosit büyüme faktörü (KGF), diğer adıyla Fibroblast büyüme faktörü-7 (FGF-7), fibroblastlar tarafından salınarak epidermal yaranın kapanmasında görevli keratinositlerin dokuyu örtmesi (farklılaşma ve migrasyon) için spesifik uyarım sağlar. TGF-a genel epitel proliferasyonunu uyarırken epidermal migrasyon spesifitesi KGF'de daha belirgindir.

---

### ÇİFT 26 (Benzerlik: 0.69)

**Soru 1 (ID: 692a57d4-7991-40ca-be1c-fa94bbfe83e3)**
Soru Kökü: Otuz beş yaşında astım hastası erkek, polen maruziyeti sonrası ani gelişen bronkospazm tablosuyla acile getiriliyor. Olayın patogenezinde mast hücreleri tarafından en bol miktarda sentezlenen, nötrofiller için güçlü bir kemoatraktan olan ve vazodilatasyonla birlikte yoğun bronkospazm ve mukus sekresyonuna yol açan ana prostaglandin türevi aşağıdakilerden hangisidir?
Doğru Şık (B): Prostaglandin D2 (PGD2)
Açıklama: Prostaglandin D2 (PGD2), mast hücrelerinin ürettiği başlıca araşidonik asit ürünüdür; yoğun bronkospazm ve mukus sekresyonu gibi allerjik tip inflamasyon bulgularını tetiklemesinin yanı sıra nötrofilleri ortama çağırır. Prostaglandin E2 de vazodilatasyon yapar ancak spesifik fonksiyonu ateşi yükseltmek ve hiperaljezi (ağrı duyarlılığı) yaratmaktır. Prostasiklin (PGI2) endotelden salınır ve trombositleri inhibe eder.

**Soru 2 (ID: a59c12f1-a234-410c-8b24-e9b863761cd3)**
Soru Kökü: 25 yaşında kadın hasta, diş çekimi sonrası uygulama bölgesinde ağrı ve sistemik hafif ateş şikayetiyle başvuruyor. Hastanın şikayetlerinden sorumlu olan, deriyi ağrılı uyaranlara karşı hassaslaştıran (hiperaljezik) ve hipotalamusta set-pointi yükselterek ateşe neden olan eikozanoid aşağıdakilerden hangisidir?
Doğru Şık (A): Prostaglandin E2
Açıklama: Prostaglandin E2 (PGE2) hiperaljezik özellik göstererek ağrı eşiğini düşürür ve ateş döngüsünü başlatan nörolojik sinyali üretir. Prostaglandin D2 daha çok kemotaksi ve bronkospazmdan sorumlu iken lökotrien B4 nötrofil göçünü yönetir.

---

