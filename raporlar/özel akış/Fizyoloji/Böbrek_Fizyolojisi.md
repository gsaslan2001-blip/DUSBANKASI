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

**Soru 1 (ID: 15aed56c-ee4b-44ee-bb26-7f73751bf23e)**
Soru Kökü: Altmış iki yaşında hipertansiyon ve ödem şikayeti olan hastaya tiazid grubu bir diüretik olan klortiyazid reçete ediliyor. İlaç tedavisinin ardından hastanın ekstraselüler hacminin azaldığı gözlemleniyor. Klortiyazid ve metalazon gibi ajanların diürez oluşturmak için inhibe ettiği spesifik taşıyıcı mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Erken distal tübülde Sodyum-Klorür kotransportu
Açıklama: Klortiyazid ve metalazon gibi tiazid diüretikleri, etki alanları olan erken distal tübülde yer alan lüminal membran Sodyum-Klorür kotransportunu (NCC) inhibe ederek diüretik yanıt oluştururlar. Henle kulpundaki mekanizmalar furosemidin, toplayıcı kanallardaki sodyum kanalları ise amilorid gibi ajanların hedefleridir. Distal segmentin suya geçirgen olmaması nedeniyle tiazid blokajı güçlü bir kortikal dilüsyon sendromu riski taşır.

**Soru 2 (ID: abc60992-4720-44c2-92dc-17f049bec068)**
Soru Kökü: Altmış iki yaşında hipertansiyon ve ödem şikayeti olan hastaya tiazid grubu bir diüretik olan klortiyazid reçete ediliyor. İlaç tedavisinin ardından hastanın ekstraselüler hacminin azaldığı gözlemleniyor. Klortiyazid ve metalazon gibi ajanların diürez oluşturmak için inhibe ettiği spesifik taşıyıcı mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Erken distal tübülde Sodyum-Klorür kotransportu
Açıklama: Klortiyazid ve metalazon gibi tiazid diüretikleri, etki alanları olan erken distal tübülde yer alan lüminal membran Sodyum-Klorür kotransportunu (NCC) inhibe ederek diüretik yanıt oluştururlar. Henle kulpundaki mekanizmalar furosemidin, toplayıcı kanallardaki sodyum kanalları ise amilorid gibi ajanların hedefleridir. Distal segmentin suya geçirgen olmaması nedeniyle tiazid blokajı güçlü bir kortikal dilüsyon sendromu riski taşır.

---

### ÇİFT 2 (Benzerlik: 1.00)

**Soru 1 (ID: 3c04d47f-1f02-4010-a7a9-62bf86eff56d)**
Soru Kökü: Hipoksiye renal adaptasyon, kemik iliğini uyararak sistemik oksijen taşıma kapasitesini artırmayı hedefler. Böbreğin yapısal anatomi elemanları incelendiğinde, bu adaptasyonu sağlayan eritropoetin sentezinden birincil olarak sorumlu doku veya hücre grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Peritübüler kapiller yataktaki intertisyel hücreler
Açıklama: Eritropoetin (EPO), kortekste JGA veya glomerüllerden değil, böbreğin daha derinlerindeki peritübüler kapiller yatağın komşuluğunda bulunan renal intertisyel hücreler tarafından üretilir. Bu hücreler plazma oksijen parsiyel basıncındaki düşüşe karşı mükemmel bir O2 sensörü olarak işlev görür. Kronik tubulointerstisyel nefritlerde hastaların ağır anemi geliştirmesinin sırrı bu histolojik alanın tahribata uğramasıdır.

**Soru 2 (ID: 9a4830bb-e4cb-4318-a5d6-03f129821f73)**
Soru Kökü: Hipoksiye renal adaptasyon, kemik iliğini uyararak sistemik oksijen taşıma kapasitesini artırmayı hedefler. Böbreğin yapısal anatomi elemanları incelendiğinde, bu adaptasyonu sağlayan eritropoetin sentezinden birincil olarak sorumlu doku veya hücre grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Peritübüler kapiller yataktaki intertisyel hücreler
Açıklama: Eritropoetin (EPO), kortekste JGA veya glomerüllerden değil, böbreğin daha derinlerindeki peritübüler kapiller yatağın komşuluğunda bulunan renal intertisyel hücreler tarafından üretilir. Bu hücreler plazma oksijen parsiyel basıncındaki düşüşe karşı mükemmel bir O2 sensörü olarak işlev görür. Kronik tubulointerstisyel nefritlerde hastaların ağır anemi geliştirmesinin sırrı bu histolojik alanın tahribata uğramasıdır.

---

### ÇİFT 3 (Benzerlik: 1.00)

**Soru 1 (ID: 6898c21e-92b1-4892-b0c6-63511c6170ec)**
Soru Kökü: Anjiyotensin-I'i aktif formuna dönüştüren ACE (Anjiyotensin Dönüştürücü Enzim), böbrekte farklı otoregülatör ve vazoaktif mekanizmaların molekülleriyle yakından ilişkilidir. ACE, aktivitesi sırasında sadece Ang-II üretmekle kalmaz, aynı zamanda afferent arteriyolü genişleten hangi vazoaktif maddenin yıkımından (inaktivasyonundan) sorumludur?
Doğru Şık (C): Bradikinin
Açıklama: ACE (kininaz II olarak da bilinir), anjiyotensin-I'i anjiyotensin-II'ye dönüştürmenin yanı sıra, renal afferent arteriolde vazodilatasyon yapan güçlü bir peptit olan bradikininin yıkılmasından da sorumludur. Prostaglandinler veya NO'nun enzimatik yıkımı ACE üzerinden gerçekleşmez. ACE inhibitörü sınıfı ilaçların yan etki olarak inatçı kuru öksürük yapmasının altında bradikininin yıkılamayıp birikmesi patolojisi yatmaktadır.

**Soru 2 (ID: 7acda481-5385-4da1-9445-baca96b4546a)**
Soru Kökü: Anjiyotensin-I'i aktif formuna dönüştüren ACE (Anjiyotensin Dönüştürücü Enzim), böbrekte farklı otoregülatör ve vazoaktif mekanizmaların molekülleriyle yakından ilişkilidir. ACE, aktivitesi sırasında sadece Ang-II üretmekle kalmaz, aynı zamanda afferent arteriyolü genişleten hangi vazoaktif maddenin yıkımından (inaktivasyonundan) sorumludur?
Doğru Şık (C): Bradikinin
Açıklama: ACE (kininaz II olarak da bilinir), anjiyotensin-I'i anjiyotensin-II'ye dönüştürmenin yanı sıra, renal afferent arteriolde vazodilatasyon yapan güçlü bir peptit olan bradikininin yıkılmasından da sorumludur. Prostaglandinler veya NO'nun enzimatik yıkımı ACE üzerinden gerçekleşmez. ACE inhibitörü sınıfı ilaçların yan etki olarak inatçı kuru öksürük yapmasının altında bradikininin yıkılamayıp birikmesi patolojisi yatmaktadır.

---

### ÇİFT 4 (Benzerlik: 1.00)

**Soru 1 (ID: 954bea20-0fde-4a77-a905-d9bdd95b1f6e)**
Soru Kökü: Renin-anjiyotensin-aldosteron sisteminin (RAAS) aktivasyonu, böbrek hemodinamisinin korunmasında temel rol oynar. Jukstaglomerüler hücrelerden salgılanan renin enziminin kaskaddaki doğrudan görevi aşağıdakilerden hangisidir?
Doğru Şık (B): Anjiyotensinojenin anjiyotensin-I'e çevrilmesi
Açıklama: Renin, jukstaglomerüler hücrelerden dolaşıma salgılanan ve karaciğer kaynaklı anjiyotensinojeni anjiyotensin-I'e çeviren proteolitik bir enzimdir. Anjiyotensin-I'in anjiyotensin-II'ye dönüşümü ise renin tarafından değil, anjiyotensin dönüştürücü enzim (ACE) tarafından gerçekleştirilir. Bu enzimatik basamak, sistemik kan basıncı kontrolünün hız kısıtlayıcı ilk ve en önemli adımıdır.

**Soru 2 (ID: d77979cf-e26b-4834-8dac-9fe489af7b1e)**
Soru Kökü: Renin-anjiyotensin-aldosteron sisteminin (RAAS) aktivasyonu, böbrek hemodinamisinin korunmasında temel rol oynar. Jukstaglomerüler hücrelerden salgılanan renin enziminin kaskaddaki doğrudan görevi aşağıdakilerden hangisidir?
Doğru Şık (B): Anjiyotensinojenin anjiyotensin-I'e çevrilmesi
Açıklama: Renin, jukstaglomerüler hücrelerden dolaşıma salgılanan ve karaciğer kaynaklı anjiyotensinojeni anjiyotensin-I'e çeviren proteolitik bir enzimdir. Anjiyotensin-I'in anjiyotensin-II'ye dönüşümü ise renin tarafından değil, anjiyotensin dönüştürücü enzim (ACE) tarafından gerçekleştirilir. Bu enzimatik basamak, sistemik kan basıncı kontrolünün hız kısıtlayıcı ilk ve en önemli adımıdır.

---

### ÇİFT 5 (Benzerlik: 1.00)

**Soru 1 (ID: 5a19a559-fec3-4db4-9e39-c10a2385ef94)**
Soru Kökü: Elli beş yaşında kadın hasta, kronik böbrek yetmezliği takibi altındayken yaygın kemik ağrıları şikayetiyle başvuruyor. Hastanın laboratuvar testlerinde hipokalsemi ve serum aktif D vitamini düzeyinde belirgin düşüklük saptanıyor. Bu hastada aktif D vitamini (kalsitriyol) sentezinin yapılamamasının temel nedeni böbreğin hangi spesifik lokalizasyonundaki fonksiyon kaybıdır?
Doğru Şık (E): Proksimal tübül epitel hücreleri
Açıklama: D vitamininin aktif formu olan 1,25 dihidroksikolekalsiferol (kalsitriyol), enzimatik olarak spesifik şekilde proksimal tübül epitel hücrelerinde sentezlenir. Bu aktivasyon distal tübül veya Henle kulpunda değil, doğrudan proksimal segmentteki hücre içi metabolik yollarla gerçekleşir. Kronik böbrek yetmezliğinde bu fonksiyonel hücre kitlesinin kaybı, renal osteodistrofinin patogenezinde rol oynayan ana faktörlerden biridir.

**Soru 2 (ID: ad8a7526-7d59-457f-aaf4-a90eafd2ff63)**
Soru Kökü: Elli beş yaşında kadın hasta, kronik böbrek yetmezliği takibi altındayken yaygın kemik ağrıları şikayetiyle başvuruyor. Hastanın laboratuvar testlerinde hipokalsemi ve serum aktif D vitamini düzeyinde belirgin düşüklük saptanıyor. Bu hastada aktif D vitamini (kalsitriyol) sentezinin yapılamamasının temel nedeni böbreğin hangi spesifik lokalizasyonundaki fonksiyon kaybıdır?
Doğru Şık (E): Proksimal tübül epitel hücreleri
Açıklama: D vitamininin aktif formu olan 1,25 dihidroksikolekalsiferol (kalsitriyol), enzimatik olarak spesifik şekilde proksimal tübül epitel hücrelerinde sentezlenir. Bu aktivasyon distal tübül veya Henle kulpunda değil, doğrudan proksimal segmentteki hücre içi metabolik yollarla gerçekleşir. Kronik böbrek yetmezliğinde bu fonksiyonel hücre kitlesinin kaybı, renal osteodistrofinin patogenezinde rol oynayan ana faktörlerden biridir.

---

### ÇİFT 6 (Benzerlik: 1.00)

**Soru 1 (ID: e9abccf7-6da1-448c-ba23-3ff604c601db)**
Soru Kökü: Ağır preeklampsi tanısıyla izlenen otuz beş yaşındaki gebe hastaya konvülziyon profilaksisi amacıyla yüksek doz intravenöz magnezyum sülfat infüzyonu başlanıyor. Gelişen iyatrojenik hipermagnezemi tablosunun tübüler mekanizmalar üzerinden hangi iyonun idrarla atılımını belirgin şekilde artırması beklenir?
Doğru Şık (A): Kalsiyum atılımında artış
Açıklama: Henle kulpunun çıkan kalın kolunda magnezyum ve kalsiyum emilimi lümen içi pozitif potansiyele bağlı olarak paraselüler yoldan aynı gradiyenti paylaşarak yarışmalı şekilde gerçekleşir; bu nedenle hipermagnezemi kalsiyum atılımını doğrudan artırır. Sodyum ve klorür ise Na-K-2Cl transportuyla aktif olarak hücre içine taşındığından bu yarıştan primer olarak etkilenmez. Bu elektriksel rekabet, klinik toksisitelerde iyonların birbirinin atılımını manipüle etmesini sağlar.

**Soru 2 (ID: eb035e9d-1451-4803-9190-6b472532c913)**
Soru Kökü: Ağır preeklampsi tanısıyla izlenen otuz beş yaşındaki gebe hastaya konvülziyon profilaksisi amacıyla yüksek doz intravenöz magnezyum sülfat infüzyonu başlanıyor. Gelişen iyatrojenik hipermagnezemi tablosunun tübüler mekanizmalar üzerinden hangi iyonun idrarla atılımını belirgin şekilde artırması beklenir?
Doğru Şık (A): Kalsiyum atılımında artış
Açıklama: Henle kulpunun çıkan kalın kolunda magnezyum ve kalsiyum emilimi lümen içi pozitif potansiyele bağlı olarak paraselüler yoldan aynı gradiyenti paylaşarak yarışmalı şekilde gerçekleşir; bu nedenle hipermagnezemi kalsiyum atılımını doğrudan artırır. Sodyum ve klorür ise Na-K-2Cl transportuyla aktif olarak hücre içine taşındığından bu yarıştan primer olarak etkilenmez. Bu elektriksel rekabet, klinik toksisitelerde iyonların birbirinin atılımını manipüle etmesini sağlar.

---

### ÇİFT 7 (Benzerlik: 1.00)

**Soru 1 (ID: 44b3a47a-8486-4033-9c83-082a7b514113)**
Soru Kökü: Böbreğin glomerüler filtrasyon hızını (GFR) ölçmek için klinikte ve laboratuvarda bazı spesifik endojen veya ekzojen maddelerin temizlenme hızları (klirens) hesaplanır. 

I. İdrar Kreatinini 
II. İdrar Hacmi 
III. Serum Kreatinini 

Bir hastanın kreatinin klirensini hesaplarken, yukarıdaki parametrelerden hangileri formülde doğrudan çarpım faktörü (pay bölümü) olarak yer alır?
Doğru Şık (B): I ve II
Açıklama: Bir maddenin klirensi (temizlenme hızı) idrar konsantrasyonu (İdrar Kreatinini) ile birim zamandaki idrar hacminin çarpılması, ardından plazma konsantrasyonuna (Serum Kreatinini) bölünmesiyle bulunur. Serum kreatinini payda kısmında yer alır çünkü plazmadaki yüksek seviye renal klerensin bozulduğuna, yani maddenin yeterince filtre edilemediğine işaret eder. GFR hesaplamaları için pratik yaklaşımda idrardaki total yükün (U x V) kana oranlanması altın standarttır.

**Soru 2 (ID: b5863e5c-a59f-4b22-907b-92734fa730c3)**
Soru Kökü: Böbreğin glomerüler filtrasyon hızını (GFR) ölçmek için klinikte ve laboratuvarda bazı spesifik endojen veya ekzojen maddelerin temizlenme hızları (klirens) hesaplanır. 

I. İdrar Kreatinini 
II. İdrar Hacmi 
III. Serum Kreatinini 

Bir hastanın kreatinin klirensini hesaplarken, yukarıdaki parametrelerden hangileri formülde doğrudan çarpım faktörü (pay bölümü) olarak yer alır?
Doğru Şık (B): I ve II
Açıklama: Bir maddenin klirensi (temizlenme hızı) idrar konsantrasyonu (İdrar Kreatinini) ile birim zamandaki idrar hacminin çarpılması, ardından plazma konsantrasyonuna (Serum Kreatinini) bölünmesiyle bulunur. Serum kreatinini payda kısmında yer alır çünkü plazmadaki yüksek seviye renal klerensin bozulduğuna, yani maddenin yeterince filtre edilemediğine işaret eder. GFR hesaplamaları için pratik yaklaşımda idrardaki total yükün (U x V) kana oranlanması altın standarttır.

---

### ÇİFT 8 (Benzerlik: 1.00)

**Soru 1 (ID: 7d6f1d13-633b-498a-99c9-c4d2a38524fe)**
Soru Kökü: Antidiüretik hormon (ADH), plazma ozmolaritesi artışı veya kan volümü düşüklüğü gibi hipovolemik uyaranlar karşısında vücudun ana su koruyucu mekanizmasıdır. ADH metabolizması ve fizyolojik etkileriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Hormonun asıl sentez yeri nörohipofiz hücrelerinin gövdeleridir.
Açıklama: ADH'nin asıl sentez yeri hipotalamustaki supraoptik nükleus nöronlarının gövdeleridir, hormon nörohipofizde sentezlenmez; burası sadece üretilen hormonun depolanıp dolaşıma aktarıldığı terminal aksonların bulunduğu bölgedir. Nörohipofiz, doğrudan bir hormon üretim merkezi değil, depolama alanıdır. Santral diabetes insipitus kliniğinde lezyon genellikle üretim yeri olan hipotalamusu veya aksonal transport sapını tutar.

**Soru 2 (ID: fdeb10fc-eb6d-46c6-a71a-af1b52387976)**
Soru Kökü: Antidiüretik hormon (ADH), plazma ozmolaritesi artışı veya kan volümü düşüklüğü gibi hipovolemik uyaranlar karşısında vücudun ana su koruyucu mekanizmasıdır. ADH metabolizması ve fizyolojik etkileriyle ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Hormonun asıl sentez yeri nörohipofiz hücrelerinin gövdeleridir.
Açıklama: ADH'nin asıl sentez yeri hipotalamustaki supraoptik nükleus nöronlarının gövdeleridir, hormon nörohipofizde sentezlenmez; burası sadece üretilen hormonun depolanıp dolaşıma aktarıldığı terminal aksonların bulunduğu bölgedir. Nörohipofiz, doğrudan bir hormon üretim merkezi değil, depolama alanıdır. Santral diabetes insipitus kliniğinde lezyon genellikle üretim yeri olan hipotalamusu veya aksonal transport sapını tutar.

---

### ÇİFT 9 (Benzerlik: 1.00)

**Soru 1 (ID: 03427e58-59b3-42e4-935a-af7b789bfc32)**
Soru Kökü: Makula densa hücreleri, distal tübüldeki NaCl konsantrasyonunu anlık olarak analiz eden fizyolojik ozmosensörler olarak görev yapar. Tübülo-glomerüler geri bildirim döngüsünde, sodyum klörür konsantrasyonunun düştüğünü algılayan makula densa, jukstaglomerüler hücreleri renin sekresyonuna teşvik etmek için aşağıdakilerden hangisini parakrin ajan olarak salgılar?
Doğru Şık (A): Prostaglandin E2 (PGE2)
Açıklama: Distal tübülde NaCl azaldığında makula densa hücreleri komşu jukstaglomerüler hücrelere NO (nitrik oksit) ve PGE2 salgılayarak lokal vazodilatasyon ve renin deşarjı sağlarlar. Aksine kan basıncı arttığında NaCl sunumu yükselirse makula densa bu kez ATP ve adenozin salgılayarak afferent arteriyolü daraltır ve GFR artışını frenler. Bu çift yönlü moleküler sensör dinamiği renal otoregülasyonun ana taşıyıcı kolonudur.

**Soru 2 (ID: 587c2932-32c5-4e79-ba10-eca84dc05157)**
Soru Kökü: Makula densa hücreleri, distal tübüldeki NaCl konsantrasyonunu anlık olarak analiz eden fizyolojik ozmosensörler olarak görev yapar. Tübülo-glomerüler geri bildirim döngüsünde, sodyum klörür konsantrasyonunun düştüğünü algılayan makula densa, jukstaglomerüler hücreleri renin sekresyonuna teşvik etmek için aşağıdakilerden hangisini parakrin ajan olarak salgılar?
Doğru Şık (A): Prostaglandin E2 (PGE2)
Açıklama: Distal tübülde NaCl azaldığında makula densa hücreleri komşu jukstaglomerüler hücrelere NO (nitrik oksit) ve PGE2 salgılayarak lokal vazodilatasyon ve renin deşarjı sağlarlar. Aksine kan basıncı arttığında NaCl sunumu yükselirse makula densa bu kez ATP ve adenozin salgılayarak afferent arteriyolü daraltır ve GFR artışını frenler. Bu çift yönlü moleküler sensör dinamiği renal otoregülasyonun ana taşıyıcı kolonudur.

---

### ÇİFT 10 (Benzerlik: 1.00)

**Soru 1 (ID: 2bb0a4ed-ba97-4ac5-bb21-65672eee6980)**
Soru Kökü: Metabolik asidoz tanısıyla yatırılan bir hastada kompanzatuar fizyolojik yanıtlar kan pH'ını düzeltmek üzere harekete geçer. Böbreklerin asit yükünü kalıcı olarak vücuttan uzaklaştırmak için kullandığı ve özellikle kronik asidozda en önemli kapasiteye sahip olan tübüler mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Amonyum (NH4+) formunda atılımın artması
Açıklama: Vücutta biriken asidi atmak için böbreğin en esnek ve kapasitesi en yüksek tamponlama yolu, proksimal tübülde glutaminden üretilen amonyak (NH3) ile hidrojeni bağlayarak amonyum (NH4+) şeklinde atmaktır. Bikarbonat sekresyonu asit yükünü atmaz, kalsitriyolün ise hidrojen atılımında direkt bir rolü bulunmaz. Kronik böbrek yetmezliği hastalarında bu amonyogenez mekanizmasının çökmesi, derin ve tehlikeli bir asidozla sonuçlanır.

**Soru 2 (ID: 9260220f-5dfc-40fd-a014-44252fcc2bdf)**
Soru Kökü: Metabolik asidoz tanısıyla yatırılan bir hastada kompanzatuar fizyolojik yanıtlar kan pH'ını düzeltmek üzere harekete geçer. Böbreklerin asit yükünü kalıcı olarak vücuttan uzaklaştırmak için kullandığı ve özellikle kronik asidozda en önemli kapasiteye sahip olan tübüler mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Amonyum (NH4+) formunda atılımın artması
Açıklama: Vücutta biriken asidi atmak için böbreğin en esnek ve kapasitesi en yüksek tamponlama yolu, proksimal tübülde glutaminden üretilen amonyak (NH3) ile hidrojeni bağlayarak amonyum (NH4+) şeklinde atmaktır. Bikarbonat sekresyonu asit yükünü atmaz, kalsitriyolün ise hidrojen atılımında direkt bir rolü bulunmaz. Kronik böbrek yetmezliği hastalarında bu amonyogenez mekanizmasının çökmesi, derin ve tehlikeli bir asidozla sonuçlanır.

---

### ÇİFT 11 (Benzerlik: 1.00)

**Soru 1 (ID: 5731e5ac-1858-4f71-b288-c2b397b68260)**
Soru Kökü: Metabolik asidoz; plazma bikarbonat düzeyinin 24 mEq/L'nin altına düşmesi ve hidrojen iyonlarının artarak pH değerinin düşmesi tablosudur. Aşağıda verilen patolojik durumlardan hangisi metabolik asidoz etiyolojileri arasında **değildir**?
Doğru Şık (B): Mide sıvısı kaybına yol açan şiddetli kusma
Açıklama: Şiddetli kusma ve gastrik drenaj, mideden yoğun miktarda asit (HCl) ve klorür kaybına neden olarak metabolik asidoz değil, metabolik alkaloz (hipokloremik alkaloz) tablosuna yol açar. Böbrek yetmezliği, ishal ve karbonik anhidraz kullanımı ise bikarbonat kaybı veya asit atılamaması yoluyla doğrudan asidoz oluşturur. Asit-baz bozukluğu olan hastalarda kusma-ishal ayrımı volüm ve elektrolit reçetesini tamamen değiştirir.

**Soru 2 (ID: 67fb7640-cab6-4d97-af42-248a55e99456)**
Soru Kökü: Metabolik asidoz; plazma bikarbonat düzeyinin 24 mEq/L'nin altına düşmesi ve hidrojen iyonlarının artarak pH değerinin düşmesi tablosudur. Aşağıda verilen patolojik durumlardan hangisi metabolik asidoz etiyolojileri arasında **değildir**?
Doğru Şık (B): Mide sıvısı kaybına yol açan şiddetli kusma
Açıklama: Şiddetli kusma ve gastrik drenaj, mideden yoğun miktarda asit (HCl) ve klorür kaybına neden olarak metabolik asidoz değil, metabolik alkaloz (hipokloremik alkaloz) tablosuna yol açar. Böbrek yetmezliği, ishal ve karbonik anhidraz kullanımı ise bikarbonat kaybı veya asit atılamaması yoluyla doğrudan asidoz oluşturur. Asit-baz bozukluğu olan hastalarda kusma-ishal ayrımı volüm ve elektrolit reçetesini tamamen değiştirir.

---

### ÇİFT 12 (Benzerlik: 1.00)

**Soru 1 (ID: 51293078-6ee7-4d7c-b24f-3bae9692b321)**
Soru Kökü: Glomerüler filtrasyon hızı (GFR), böbrek perfüzyonunu değiştiren farklı hemodinamik faktörlerden doğrudan etkilenir. Aşağıdaki durumlardan hangisi GFR'yi artıran faktörlerden biri **değildir**?
Doğru Şık (D): Böbrek ödemine bağlı olarak Bowman kapsülü basıncının artması
Açıklama: Böbrek ödemi veya böbrek taşı gibi obstrüktif durumlarda Bowman kapsülü hidrostatik basıncı artar, bu durum net filtrasyon basıncını mekanik olarak düşürerek GFR'yi azaltır. Ortalama arter basıncı artışı veya afferent arteriyol genişlemesi glomerüler kanlanmayı iyileştirerek GFR'yi artıran net fizyolojik faktörlerdir. Bowman alanındaki karşı basınç her zaman filtrasyona direnen majör bir kuvvet oluşturur.

**Soru 2 (ID: ce92625b-3b86-4edd-abf5-facc99913cf0)**
Soru Kökü: Glomerüler filtrasyon hızı (GFR), böbrek perfüzyonunu değiştiren farklı hemodinamik faktörlerden doğrudan etkilenir. Aşağıdaki durumlardan hangisi GFR'yi artıran faktörlerden biri **değildir**?
Doğru Şık (D): Böbrek ödemine bağlı olarak Bowman kapsülü basıncının artması
Açıklama: Böbrek ödemi veya böbrek taşı gibi obstrüktif durumlarda Bowman kapsülü hidrostatik basıncı artar, bu durum net filtrasyon basıncını mekanik olarak düşürerek GFR'yi azaltır. Ortalama arter basıncı artışı veya afferent arteriyol genişlemesi glomerüler kanlanmayı iyileştirerek GFR'yi artıran net fizyolojik faktörlerdir. Bowman alanındaki karşı basınç her zaman filtrasyona direnen majör bir kuvvet oluşturur.

---

### ÇİFT 13 (Benzerlik: 1.00)

**Soru 1 (ID: 63d38678-6394-4453-98b2-9fe716f8d6b3)**
Soru Kökü: Böbrek içi lokal hemodinamik dengenin sağlanmasında çeşitli parakrin peptitler rol oynamaktadır. Distal tübül hücrelerinde sentezlenen, glomerüler filtrasyon hızını (GFR) artıran ve sodyum geri emilimini azaltan peptit aşağıdakilerden hangisidir?
Doğru Şık (A): Ürodilatin
Açıklama: Distal tübül hücrelerinden sentezlenen ve lokal parakrin etki gösteren ürodilatin, GFR'yi artırıcı ve lüminal sodyum geri emilimini azaltıcı natriüretik özelliklere sahiptir. Renin veya aldosteron gibi moleküller antidiüretik/sodyum tutucu yolağın parçasıyken, ürodilatin bu etkiye karşıt yönde çalışarak sıvı-elektrolit atılımını destekler. Bu özelliğiyle Atrial Natriüretik Peptid (ANP) ile benzer bir fizyolojik role sahiptir.

**Soru 2 (ID: 69269532-2129-4f11-8dce-60076459cf8d)**
Soru Kökü: Böbrek içi lokal hemodinamik dengenin sağlanmasında çeşitli parakrin peptitler rol oynamaktadır. Distal tübül hücrelerinde sentezlenen, glomerüler filtrasyon hızını (GFR) artıran ve sodyum geri emilimini azaltan peptit aşağıdakilerden hangisidir?
Doğru Şık (A): Ürodilatin
Açıklama: Distal tübül hücrelerinden sentezlenen ve lokal parakrin etki gösteren ürodilatin, GFR'yi artırıcı ve lüminal sodyum geri emilimini azaltıcı natriüretik özelliklere sahiptir. Renin veya aldosteron gibi moleküller antidiüretik/sodyum tutucu yolağın parçasıyken, ürodilatin bu etkiye karşıt yönde çalışarak sıvı-elektrolit atılımını destekler. Bu özelliğiyle Atrial Natriüretik Peptid (ANP) ile benzer bir fizyolojik role sahiptir.

---

### ÇİFT 14 (Benzerlik: 1.00)

**Soru 1 (ID: 3b75417d-cebd-4e1a-92df-8bcc939a7746)**
Soru Kökü: Kırk yaşında hipertansiyon tanısı yeni konulan hastada, renal arter stenozuna bağlı sekonder hiperaldosteronizm saptanıyor. Sistemik vazokonstriksiyona rağmen hastanın nabzında beklenen refleks yavaşlamanın (bradikardi) oluşmadığı gözlemleniyor. Anjiyotensin-II'nin hangi spesifik etkisi kan basıncı yükselirken bradikardinin ortaya çıkmasını engeller?
Doğru Şık (A): Barorefleks duyarlılığını beyin üzerinden azaltması
Açıklama: Anjiyotensin-II, sistemik vazokonstriksiyon ile kan basıncını artırmanın yanı sıra, beyin sapı düzeyinde etki göstererek barorefleks mekanizmasının duyarlılığını santral olarak azaltır. Vagal lifleri veya karotis sinüs reseptörlerini mekanik olarak doğrudan bloke etmez, ancak beyne ulaşan basınç sinyallerine verilecek refleks kalp hızı düşürücü yanıtı zayıflatır. Bu sayede, yükselen kan basıncı refleks mekanizmalarla sönümlenmeden sabitlenmiş olur.

**Soru 2 (ID: 9aa2a485-794c-4712-ba70-d9ac51dfbb47)**
Soru Kökü: Kırk yaşında hipertansiyon tanısı yeni konulan hastada, renal arter stenozuna bağlı sekonder hiperaldosteronizm saptanıyor. Sistemik vazokonstriksiyona rağmen hastanın nabzında beklenen refleks yavaşlamanın (bradikardi) oluşmadığı gözlemleniyor. Anjiyotensin-II'nin hangi spesifik etkisi kan basıncı yükselirken bradikardinin ortaya çıkmasını engeller?
Doğru Şık (A): Barorefleks duyarlılığını beyin üzerinden azaltması
Açıklama: Anjiyotensin-II, sistemik vazokonstriksiyon ile kan basıncını artırmanın yanı sıra, beyin sapı düzeyinde etki göstererek barorefleks mekanizmasının duyarlılığını santral olarak azaltır. Vagal lifleri veya karotis sinüs reseptörlerini mekanik olarak doğrudan bloke etmez, ancak beyne ulaşan basınç sinyallerine verilecek refleks kalp hızı düşürücü yanıtı zayıflatır. Bu sayede, yükselen kan basıncı refleks mekanizmalarla sönümlenmeden sabitlenmiş olur.

---

### ÇİFT 15 (Benzerlik: 1.00)

**Soru 1 (ID: 5008cfaa-307d-4b3b-b216-a0fbd488efc0)**
Soru Kökü: Anjiyotensin-II'nin fonksiyonlarını anlamak, antihipertansif tedavi protokollerinin farmakolojik mekanizmalarını kavramak için elzemdir. Ang-II'nin proksimal nefrondaki antinatriüretik ve sodyum koruyucu fizyolojik etkisinin altında doğrudan yatan enzimatik aktivasyon mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Hücre bazolateral membranında Na-K ATPaz aktivasyonu
Açıklama: Anjiyotensin-II, sadece aldosteron mekanizmasıyla değil, proksimal tübül epitel hücresinin bazolateral membranındaki Na-K ATPaz pompasını doğrudan aktive ederek sodyum ve eşliğinde suyun reabsorbsiyonunu artırır. ENaC aktivasyonu distal nefronda doğrudan aldosteronun işleviyken, proksimal tübüldeki taşıyıcı kapasite artışı Ang-II'ye bağımlıdır. Bu ikili hedefleme, RAAS sisteminin hem proksimal hem de distal segmentte kümülatif sodyum retansiyonu yapmasını sağlar.

**Soru 2 (ID: f050f0b1-6993-4a4c-a458-b1b99429c34f)**
Soru Kökü: Anjiyotensin-II'nin fonksiyonlarını anlamak, antihipertansif tedavi protokollerinin farmakolojik mekanizmalarını kavramak için elzemdir. Ang-II'nin proksimal nefrondaki antinatriüretik ve sodyum koruyucu fizyolojik etkisinin altında doğrudan yatan enzimatik aktivasyon mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Hücre bazolateral membranında Na-K ATPaz aktivasyonu
Açıklama: Anjiyotensin-II, sadece aldosteron mekanizmasıyla değil, proksimal tübül epitel hücresinin bazolateral membranındaki Na-K ATPaz pompasını doğrudan aktive ederek sodyum ve eşliğinde suyun reabsorbsiyonunu artırır. ENaC aktivasyonu distal nefronda doğrudan aldosteronun işleviyken, proksimal tübüldeki taşıyıcı kapasite artışı Ang-II'ye bağımlıdır. Bu ikili hedefleme, RAAS sisteminin hem proksimal hem de distal segmentte kümülatif sodyum retansiyonu yapmasını sağlar.

---

### ÇİFT 16 (Benzerlik: 1.00)

**Soru 1 (ID: 556b2a88-0340-434d-8acd-083a74f8c72c)**
Soru Kökü: Hücresel metabolizma sonucu ortaya çıkan günlük asit yükü, vücut sıvılarındaki pH değişikliklerini sınırlayan tampon sistemleri sayesinde dengede tutulur. 

I. Plazmada bikarbonat sistemi 
II. İdrarda fosfat tampon sistemi 
III. İdrarda amonyak tampon sistemi 
IV. Eritrositlerde hemoglobin tampon sistemi 

Yukarıdakilerden hangileri fizyolojik pH homeostazını sağlayan birincil tampon mekanizmaları arasında yer alır?
Doğru Şık (D): I, II, III ve IV
Açıklama: Organizmada asit-baz stabilitesini sağlamak için plazmada HCO3, idrarda fosfat ve amonyak, eritrositte ise hemoglobin özgül birer biyolojik tampon olarak eşgüdüm içinde çalışır. Bu kompartmansal iş bölümü, asit yükünün lokal doku hasarı oluşturmadan kana karışmasına ve ardından idrar yoluyla atılmasına olanak tanır. Amonyak sistemi özellikle kronik asidoz adaptasyonunda asit itrahını artırmada en kritik rezervi sunar.

**Soru 2 (ID: bfc718f0-059b-4b5b-9705-f5ba87a266f5)**
Soru Kökü: Hücresel metabolizma sonucu ortaya çıkan günlük asit yükü, vücut sıvılarındaki pH değişikliklerini sınırlayan tampon sistemleri sayesinde dengede tutulur. 

I. Plazmada bikarbonat sistemi 
II. İdrarda fosfat tampon sistemi 
III. İdrarda amonyak tampon sistemi 
IV. Eritrositlerde hemoglobin tampon sistemi 

Yukarıdakilerden hangileri fizyolojik pH homeostazını sağlayan birincil tampon mekanizmaları arasında yer alır?
Doğru Şık (D): I, II, III ve IV
Açıklama: Organizmada asit-baz stabilitesini sağlamak için plazmada HCO3, idrarda fosfat ve amonyak, eritrositte ise hemoglobin özgül birer biyolojik tampon olarak eşgüdüm içinde çalışır. Bu kompartmansal iş bölümü, asit yükünün lokal doku hasarı oluşturmadan kana karışmasına ve ardından idrar yoluyla atılmasına olanak tanır. Amonyak sistemi özellikle kronik asidoz adaptasyonunda asit itrahını artırmada en kritik rezervi sunar.

---

### ÇİFT 17 (Benzerlik: 1.00)

**Soru 1 (ID: 32b239d7-6418-41ba-b9ca-c45c35da712e)**
Soru Kökü: Böbrek fonksiyonlarının analizinde sıklıkla kullanılan klirens kavramı belirli maddelerin farmakokinetiğine dayanır. GFR değerlendirmesinde inülin klirensinin temel standart olmasını sağlayan özellik veya bu özelliklerin uygulamadaki karşılığı ile ilgili hangisi **yanlıştır**?
Doğru Şık (D): İnülinin tübüllerden aktif olarak sekrete edilip renal plazma akımını göstermesi.
Açıklama: İnülin böbrek tübüllerinden kesinlikle reabsorbe veya sekrete edilmeyen saf bir filtrasyon belirtecidir ve bu nedenle klirensi sadece GFR'yi gösterir. Tübüllerden tamamen sekrete edilerek böbreklerden hızla uzaklaştırılan ve renal plazma akımını (RPF) mükemmel bir şekilde gösteren madde inülin değil PAH (Para-aminohippurik asit)'tir. İnülin klirensi fizyolojide bir altın standart iken, sekresyon yapılmaması mekanizmasının en temel taşıdır.

**Soru 2 (ID: 9b98da4b-716b-4625-8281-531d4437ee0b)**
Soru Kökü: Böbrek fonksiyonlarının analizinde sıklıkla kullanılan klirens kavramı belirli maddelerin farmakokinetiğine dayanır. GFR değerlendirmesinde inülin klirensinin temel standart olmasını sağlayan özellik veya bu özelliklerin uygulamadaki karşılığı ile ilgili hangisi **yanlıştır**?
Doğru Şık (D): İnülinin tübüllerden aktif olarak sekrete edilip renal plazma akımını göstermesi.
Açıklama: İnülin böbrek tübüllerinden kesinlikle reabsorbe veya sekrete edilmeyen saf bir filtrasyon belirtecidir ve bu nedenle klirensi sadece GFR'yi gösterir. Tübüllerden tamamen sekrete edilerek böbreklerden hızla uzaklaştırılan ve renal plazma akımını (RPF) mükemmel bir şekilde gösteren madde inülin değil PAH (Para-aminohippurik asit)'tir. İnülin klirensi fizyolojide bir altın standart iken, sekresyon yapılmaması mekanizmasının en temel taşıdır.

---

### ÇİFT 18 (Benzerlik: 1.00)

**Soru 1 (ID: 1441817c-7474-4911-bbcf-8c60deaa64f1)**
Soru Kökü: Otuz yaşında travmatik beyin hasarı öyküsü olan erkek hasta, şiddetli poliüri ve polidipsi şikayetiyle başvuruyor ve santral tip diabetes insipitus tanısıyla desmopressin (sentetik ADH) tedavisi başlanıyor. Tedavi sonrası idrarın hızla konsantre olduğu gözlemleniyor. Bu hastada suyun toplayıcı kanalların lüminal membranı üzerinden geri emilimini sağlayan spesifik kanal aşağıdakilerden hangisidir?
Doğru Şık (C): Aquaporin 2
Açıklama: ADH (vazopressin), toplayıcı kanallardaki esas hücrelerin bazolateral yüzeyindeki V2 reseptörlerine bağlanarak cAMP yolunu uyarır ve apikal (lüminal) membranda Aquaporin 2 (AQP2) kanallarının ekspresyonunu artırır. Aquaporin 3 ve 4 toplayıcı kanalların bazolateral yüzeyinde bulunur ve ADH kontrolünden bağımsız şekilde suyun kana geçişini sağlar. Suyun dinamik geri emilimindeki esas terapötik kapı AQP2 ile sağlanır.

**Soru 2 (ID: f920cd12-7bf2-4c6d-baef-c52a0619ab24)**
Soru Kökü: Otuz yaşında travmatik beyin hasarı öyküsü olan erkek hasta, şiddetli poliüri ve polidipsi şikayetiyle başvuruyor ve santral tip diabetes insipitus tanısıyla desmopressin (sentetik ADH) tedavisi başlanıyor. Tedavi sonrası idrarın hızla konsantre olduğu gözlemleniyor. Bu hastada suyun toplayıcı kanalların lüminal membranı üzerinden geri emilimini sağlayan spesifik kanal aşağıdakilerden hangisidir?
Doğru Şık (C): Aquaporin 2
Açıklama: ADH (vazopressin), toplayıcı kanallardaki esas hücrelerin bazolateral yüzeyindeki V2 reseptörlerine bağlanarak cAMP yolunu uyarır ve apikal (lüminal) membranda Aquaporin 2 (AQP2) kanallarının ekspresyonunu artırır. Aquaporin 3 ve 4 toplayıcı kanalların bazolateral yüzeyinde bulunur ve ADH kontrolünden bağımsız şekilde suyun kana geçişini sağlar. Suyun dinamik geri emilimindeki esas terapötik kapı AQP2 ile sağlanır.

---

### ÇİFT 19 (Benzerlik: 1.00)

**Soru 1 (ID: 00625062-095c-41da-a343-10035347195b)**
Soru Kökü: Tübülo-glomerüler geri bildirim mekanizmasının merkezinde yer alan jukstaglomeruler aparat, böbrek kan akımını ve filtrasyon hızını hassas bir şekilde düzenler. 

I. Podositler 
II. Makula densa hücreleri 
III. Jukstaglomerüler hücreler 
IV. Lacis hücreleri (Ekstraglomerüler mezangiyal hücreler) 

Yukarıda verilen yapıların hangileri jukstaglomeruler aparatı oluşturur?
Doğru Şık (C): II, III ve IV
Açıklama: Jukstaglomerüler aparat anatomik ve işlevsel olarak; arteriyol duvarındaki jukstaglomerüler hücreler, distal tübüldeki osmoreseptör makula densa hücreleri ve ekstraglomerüler mezangiyal (Lacis) hücrelerden oluşur. Podositler Bowman kapsülünün visseral yaprağını oluşturan filtrasyon membranının bir parçasıdır, jukstaglomerüler aparatın bileşeni değildirler. Bu üçlü lokalizasyon böbrek otoregülasyon döngüsünün histolojik temelidir.

**Soru 2 (ID: f305a837-fbf7-49a0-9ba5-b7a5740498fc)**
Soru Kökü: Tübülo-glomerüler geri bildirim mekanizmasının merkezinde yer alan jukstaglomeruler aparat, böbrek kan akımını ve filtrasyon hızını hassas bir şekilde düzenler. 

I. Podositler 
II. Makula densa hücreleri 
III. Jukstaglomerüler hücreler 
IV. Lacis hücreleri (Ekstraglomerüler mezangiyal hücreler) 

Yukarıda verilen yapıların hangileri jukstaglomeruler aparatı oluşturur?
Doğru Şık (C): II, III ve IV
Açıklama: Jukstaglomerüler aparat anatomik ve işlevsel olarak; arteriyol duvarındaki jukstaglomerüler hücreler, distal tübüldeki osmoreseptör makula densa hücreleri ve ekstraglomerüler mezangiyal (Lacis) hücrelerden oluşur. Podositler Bowman kapsülünün visseral yaprağını oluşturan filtrasyon membranının bir parçasıdır, jukstaglomerüler aparatın bileşeni değildirler. Bu üçlü lokalizasyon böbrek otoregülasyon döngüsünün histolojik temelidir.

---

### ÇİFT 20 (Benzerlik: 1.00)

**Soru 1 (ID: 3d968b83-421d-44be-8a98-a90cbbee80f5)**
Soru Kökü: Kırk iki yaşında erkek hasta asit-baz dengesizliği nedeniyle izlenmektedir. Distal tübül segmentlerinde asit-baz atılımını dengeleyen hücresel elementler mevcuttur. Aşağıdaki patofizyolojik durumların hangisi distal tübülde potasyum (K+) sekresyonunu artırıcı bir özellik **göstermez**?
Doğru Şık (E): Akut asidoz tablosunun varlığı
Açıklama: Akut asidoz, tübül hücrelerinde bazolateral membrandaki Na-K pompasının aktivitesini azaltarak potasyum sekresyonunu belirgin şekilde inhibe eder ve potasyum tutulumuna (hiperkalemiye) eğilim yaratır. Alkaloz durumunda ise kan hidrojen iyonunu hücreden alırken karşılığında hücre içine potasyum girdiği için sekresyon artar. Bu durum akut ve kronik asidozdaki potasyum denge değişikliklerinin yönünün neden zıt olduğunu klinik olarak açıklar.

**Soru 2 (ID: 40941ac4-3dcb-4d77-9821-aa88d955d874)**
Soru Kökü: Kırk iki yaşında erkek hasta asit-baz dengesizliği nedeniyle izlenmektedir. Distal tübül segmentlerinde asit-baz atılımını dengeleyen hücresel elementler mevcuttur. Aşağıdaki patofizyolojik durumların hangisi distal tübülde potasyum (K+) sekresyonunu artırıcı bir özellik **göstermez**?
Doğru Şık (E): Akut asidoz tablosunun varlığı
Açıklama: Akut asidoz, tübül hücrelerinde bazolateral membrandaki Na-K pompasının aktivitesini azaltarak potasyum sekresyonunu belirgin şekilde inhibe eder ve potasyum tutulumuna (hiperkalemiye) eğilim yaratır. Alkaloz durumunda ise kan hidrojen iyonunu hücreden alırken karşılığında hücre içine potasyum girdiği için sekresyon artar. Bu durum akut ve kronik asidozdaki potasyum denge değişikliklerinin yönünün neden zıt olduğunu klinik olarak açıklar.

---

### ÇİFT 21 (Benzerlik: 1.00)

**Soru 1 (ID: 2f986f58-6ca4-4d12-97cd-89f199d716f0)**
Soru Kökü: Anjiyotensin-II, böbrek ve kardiyovasküler sistem üzerinde geniş fizyolojik yelpazeye sahip bir efektör moleküldür. Anjiyotensin-II'nin fizyolojik etkileri ile ilgili aşağıdakilerden hangisi **değildir**?
Doğru Şık (E): Beyin üzerinden barorefleks duyarlılığını artırması
Açıklama: Anjiyotensin-II, beyin üzerinden barorefleks duyarlılığını artırmaz, aksine azaltır; bu mekanizma sayesinde artan kan basıncına refleks olarak gelişmesi gereken bradikardi yanıtını baskılar. Proksimal tübülde sodyum tutulumunu, hipotalamusta ise ADH ve susama hissini aktive eden güçlü bir moleküldür. Barorefleks inhibisyonu, Ang-II'nin hipertansif gücünün sistemik kontrol mekanizmalarınca dengelenmesini imkansız hale getirir.

**Soru 2 (ID: d59fac76-7fea-4d5b-bf83-144644c5459d)**
Soru Kökü: Anjiyotensin-II, böbrek ve kardiyovasküler sistem üzerinde geniş fizyolojik yelpazeye sahip bir efektör moleküldür. Anjiyotensin-II'nin fizyolojik etkileri ile ilgili aşağıdakilerden hangisi **değildir**?
Doğru Şık (E): Beyin üzerinden barorefleks duyarlılığını artırması
Açıklama: Anjiyotensin-II, beyin üzerinden barorefleks duyarlılığını artırmaz, aksine azaltır; bu mekanizma sayesinde artan kan basıncına refleks olarak gelişmesi gereken bradikardi yanıtını baskılar. Proksimal tübülde sodyum tutulumunu, hipotalamusta ise ADH ve susama hissini aktive eden güçlü bir moleküldür. Barorefleks inhibisyonu, Ang-II'nin hipertansif gücünün sistemik kontrol mekanizmalarınca dengelenmesini imkansız hale getirir.

---

### ÇİFT 22 (Benzerlik: 1.00)

**Soru 1 (ID: 7d9f3592-21fd-4247-8388-cd65ee8ac950)**
Soru Kökü: Böbrek, filtrasyon ve reabsorbsiyon görevlerinin yanı sıra sistemik ve parakrin etkili birçok hormon üretir. Böbreğin endokrin fonksiyonları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Prostaglandin E2 (PGE2) jukstaglomerüler hücrelerden kana salgılanır.
Açıklama: Böbrekte üretilen Prostaglandin E2 (PGE2), korteksteki jukstaglomerüler hücrelerden değil, renal medulladaki intertisyel hücrelerden (RMICs) üretilir. Jukstaglomerüler hücreler renin salgısından sorumlu iken, medüller intertisyel hücreler lokal hemodinamiyi ve su-tuz dengesini PGE2 üzerinden düzenler. Bu vazodilatatör prostaglandinler, böbrek kan akımının otoregülasyonunda iskemiden koruyucu bir tampon görevi üstlenir.

**Soru 2 (ID: c6c183b7-5938-404a-8942-090ec6614385)**
Soru Kökü: Böbrek, filtrasyon ve reabsorbsiyon görevlerinin yanı sıra sistemik ve parakrin etkili birçok hormon üretir. Böbreğin endokrin fonksiyonları ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Prostaglandin E2 (PGE2) jukstaglomerüler hücrelerden kana salgılanır.
Açıklama: Böbrekte üretilen Prostaglandin E2 (PGE2), korteksteki jukstaglomerüler hücrelerden değil, renal medulladaki intertisyel hücrelerden (RMICs) üretilir. Jukstaglomerüler hücreler renin salgısından sorumlu iken, medüller intertisyel hücreler lokal hemodinamiyi ve su-tuz dengesini PGE2 üzerinden düzenler. Bu vazodilatatör prostaglandinler, böbrek kan akımının otoregülasyonunda iskemiden koruyucu bir tampon görevi üstlenir.

---

### ÇİFT 23 (Benzerlik: 1.00)

**Soru 1 (ID: 264a1e16-ef35-4992-9673-7658c3b7eebb)**
Soru Kökü: Kırk beş yaşında erkek hasta, doğal afet sonrası göçük altından 5 gün süren açlık ve susuzluk sonrasında kurtarılıyor. Hastanın kan glukoz düzeyinin korunması amacıyla karaciğer dışında böbreklerde de spesifik bir metabolik adaptasyonun devreye girdiği biliniyor. Uzun süreli açlık durumlarında böbreklerin glukoz regülasyonuna katkısı hangi hücresel mekanizma ile gerçekleşir?
Doğru Şık (A): Tübüler hücrelerde glikoneogenez gerçekleşmesi
Açıklama: Uzun süreli açlık durumlarında böbrek tübüler hücreleri glikoneogenez yaparak sistemik kan glukoz düzeyinin korunmasına doğrudan katkı sağlar. Glomerüler yapılar veya podositler metabolik regülasyondan ziyade filtrasyon bariyerinden sorumlu oldukları için glikoz metabolizmasında anahtar rol oynamazlar. Bu adaptif fonksiyon, böbreğin sistemik enerji homeostazındaki kritik ancak sıklıkla gözden kaçan rollerinden biridir.

**Soru 2 (ID: e2f82b84-2481-4da5-bf33-f39ef3742414)**
Soru Kökü: Kırk beş yaşında erkek hasta, doğal afet sonrası göçük altından 5 gün süren açlık ve susuzluk sonrasında kurtarılıyor. Hastanın kan glukoz düzeyinin korunması amacıyla karaciğer dışında böbreklerde de spesifik bir metabolik adaptasyonun devreye girdiği biliniyor. Uzun süreli açlık durumlarında böbreklerin glukoz regülasyonuna katkısı hangi hücresel mekanizma ile gerçekleşir?
Doğru Şık (A): Tübüler hücrelerde glikoneogenez gerçekleşmesi
Açıklama: Uzun süreli açlık durumlarında böbrek tübüler hücreleri glikoneogenez yaparak sistemik kan glukoz düzeyinin korunmasına doğrudan katkı sağlar. Glomerüler yapılar veya podositler metabolik regülasyondan ziyade filtrasyon bariyerinden sorumlu oldukları için glikoz metabolizmasında anahtar rol oynamazlar. Bu adaptif fonksiyon, böbreğin sistemik enerji homeostazındaki kritik ancak sıklıkla gözden kaçan rollerinden biridir.

---

### ÇİFT 24 (Benzerlik: 1.00)

**Soru 1 (ID: 041c30f6-8e7b-4a78-a70a-ed3201886a40)**
Soru Kökü: Kırk yedi yaşında erkek hasta travmatik şok tablosuyla takip edilirken aşırı sıvı kaybına bağlı ciddi hipotansiyon gelişiyor. Glomerüler kan akımı azalmasına rağmen hastanın böbreklerinde GFR belli bir ölçüde korunmaya çalışılır. Bu koruyucu mekanizmada Ang-II'nin efferent arteriolü daraltması sonucu aşağıdakilerden hangisi gerçekleşerek GFR'nin düşmesi engellenir?
Doğru Şık (E): Glomerüler kapiller içindeki hidrostatik basıncın artırılması
Açıklama: Anjiyotensin-II'nin kanın çıkış kapısı olan efferent arteriolü güçlü şekilde daraltması, doğrudan glomerüler kapiller içerisindeki hidrostatik basıncı artırır veya düşmesini engeller. Bowman kapsülü basıncı veya podositlerin durumu filtrasyon net gücünü bu hemodinamik çerçevede doğrudan koruyamaz. Akut iskemik periyotta bu çıkış kapısı rezistansının artışı, kan akımı düşük olsa dahi kandan bowman boşluğuna süzülme fizyolojisini ayakta tutar.

**Soru 2 (ID: 5abc7842-daa0-41b0-b8f9-e1c811cdd6fe)**
Soru Kökü: Kırk yedi yaşında erkek hasta travmatik şok tablosuyla takip edilirken aşırı sıvı kaybına bağlı ciddi hipotansiyon gelişiyor. Glomerüler kan akımı azalmasına rağmen hastanın böbreklerinde GFR belli bir ölçüde korunmaya çalışılır. Bu koruyucu mekanizmada Ang-II'nin efferent arteriolü daraltması sonucu aşağıdakilerden hangisi gerçekleşerek GFR'nin düşmesi engellenir?
Doğru Şık (E): Glomerüler kapiller içindeki hidrostatik basıncın artırılması
Açıklama: Anjiyotensin-II'nin kanın çıkış kapısı olan efferent arteriolü güçlü şekilde daraltması, doğrudan glomerüler kapiller içerisindeki hidrostatik basıncı artırır veya düşmesini engeller. Bowman kapsülü basıncı veya podositlerin durumu filtrasyon net gücünü bu hemodinamik çerçevede doğrudan koruyamaz. Akut iskemik periyotta bu çıkış kapısı rezistansının artışı, kan akımı düşük olsa dahi kandan bowman boşluğuna süzülme fizyolojisini ayakta tutar.

---

### ÇİFT 25 (Benzerlik: 1.00)

**Soru 1 (ID: cd0d893a-b34c-4123-98df-e2e0b534b490)**
Soru Kökü: Renin-anjiyotensin sistemi kaskadında anjiyotensin-II'nin bir kısmı çeşitli proteolitik enzimlerle yıkıma uğrar. Aminopeptidazlar aracılığıyla oluşan ve adrenal korteksten aldosteron sentezini doğrudan uyarma yeteneğini koruyan molekül aşağıdakilerden hangisidir?
Doğru Şık (B): Anjiyotensin-III
Açıklama: Anjiyotensin-II'nin aminopeptidazlar tarafından inaktive edildiği düşünülse de, bu yıkımdan türeyen Anjiyotensin-III molekülü de tıpkı öncülü gibi aldosteron yapımını güçlü bir şekilde uyarır. Anjiyotensin-I veya anjiyotensinojen bu dizilimin inaktif öncülleridir ve doğrudan aldosteron sentezini uyaramazlar. RAAS kaskadı, sadece ana aktör Ang-II üzerinden değil, onun inme ürünleri aracılığıyla da sodyum tutucu etkisini sürdürür.

**Soru 2 (ID: f3e73d1f-51a1-4d81-b2aa-3f5b46f98ce6)**
Soru Kökü: Renin-anjiyotensin sistemi kaskadında anjiyotensin-II'nin bir kısmı çeşitli proteolitik enzimlerle yıkıma uğrar. Aminopeptidazlar aracılığıyla oluşan ve adrenal korteksten aldosteron sentezini doğrudan uyarma yeteneğini koruyan molekül aşağıdakilerden hangisidir?
Doğru Şık (B): Anjiyotensin-III
Açıklama: Anjiyotensin-II'nin aminopeptidazlar tarafından inaktive edildiği düşünülse de, bu yıkımdan türeyen Anjiyotensin-III molekülü de tıpkı öncülü gibi aldosteron yapımını güçlü bir şekilde uyarır. Anjiyotensin-I veya anjiyotensinojen bu dizilimin inaktif öncülleridir ve doğrudan aldosteron sentezini uyaramazlar. RAAS kaskadı, sadece ana aktör Ang-II üzerinden değil, onun inme ürünleri aracılığıyla da sodyum tutucu etkisini sürdürür.

---

### ÇİFT 26 (Benzerlik: 0.85)

**Soru 1 (ID: 51293078-6ee7-4d7c-b24f-3bae9692b321)**
Soru Kökü: Glomerüler filtrasyon hızı (GFR), böbrek perfüzyonunu değiştiren farklı hemodinamik faktörlerden doğrudan etkilenir. Aşağıdaki durumlardan hangisi GFR'yi artıran faktörlerden biri **değildir**?
Doğru Şık (D): Böbrek ödemine bağlı olarak Bowman kapsülü basıncının artması
Açıklama: Böbrek ödemi veya böbrek taşı gibi obstrüktif durumlarda Bowman kapsülü hidrostatik basıncı artar, bu durum net filtrasyon basıncını mekanik olarak düşürerek GFR'yi azaltır. Ortalama arter basıncı artışı veya afferent arteriyol genişlemesi glomerüler kanlanmayı iyileştirerek GFR'yi artıran net fizyolojik faktörlerdir. Bowman alanındaki karşı basınç her zaman filtrasyona direnen majör bir kuvvet oluşturur.

**Soru 2 (ID: bb654905-f322-4449-8f59-ff52e1c3096c)**
Soru Kökü: Böbreklerde glomerüler filtrasyon hızını (GFR) değiştiren faktörler incelendiğinde, aşağıdakilerden hangisi GFR'yi **azaltan** durumlardan biri **değildir**?
Doğru Şık (C): Prostaglandin E2 salınımının artması
Açıklama: Prostaglandin E2 (PGE2) afferent arteriolü genişleterek glomerüler kan akımını ve dolayısıyla GFR'yi artıran koruyucu bir medyatördür. Afferent arteriolde daralmaya neden olan sempatik uyarı veya endotelin ise hidrostatik basıncı düşürerek GFR'yi azaltır. Bowman basıncı artışı (örn. böbrek taşı) net filtrasyon basıncına zıt vektörel etki gösterdiği için filtrasyonu baskılar.

---

### ÇİFT 27 (Benzerlik: 0.85)

**Soru 1 (ID: bb654905-f322-4449-8f59-ff52e1c3096c)**
Soru Kökü: Böbreklerde glomerüler filtrasyon hızını (GFR) değiştiren faktörler incelendiğinde, aşağıdakilerden hangisi GFR'yi **azaltan** durumlardan biri **değildir**?
Doğru Şık (C): Prostaglandin E2 salınımının artması
Açıklama: Prostaglandin E2 (PGE2) afferent arteriolü genişleterek glomerüler kan akımını ve dolayısıyla GFR'yi artıran koruyucu bir medyatördür. Afferent arteriolde daralmaya neden olan sempatik uyarı veya endotelin ise hidrostatik basıncı düşürerek GFR'yi azaltır. Bowman basıncı artışı (örn. böbrek taşı) net filtrasyon basıncına zıt vektörel etki gösterdiği için filtrasyonu baskılar.

**Soru 2 (ID: ce92625b-3b86-4edd-abf5-facc99913cf0)**
Soru Kökü: Glomerüler filtrasyon hızı (GFR), böbrek perfüzyonunu değiştiren farklı hemodinamik faktörlerden doğrudan etkilenir. Aşağıdaki durumlardan hangisi GFR'yi artıran faktörlerden biri **değildir**?
Doğru Şık (D): Böbrek ödemine bağlı olarak Bowman kapsülü basıncının artması
Açıklama: Böbrek ödemi veya böbrek taşı gibi obstrüktif durumlarda Bowman kapsülü hidrostatik basıncı artar, bu durum net filtrasyon basıncını mekanik olarak düşürerek GFR'yi azaltır. Ortalama arter basıncı artışı veya afferent arteriyol genişlemesi glomerüler kanlanmayı iyileştirerek GFR'yi artıran net fizyolojik faktörlerdir. Bowman alanındaki karşı basınç her zaman filtrasyona direnen majör bir kuvvet oluşturur.

---

### ÇİFT 28 (Benzerlik: 0.85)

**Soru 1 (ID: 03427e58-59b3-42e4-935a-af7b789bfc32)**
Soru Kökü: Makula densa hücreleri, distal tübüldeki NaCl konsantrasyonunu anlık olarak analiz eden fizyolojik ozmosensörler olarak görev yapar. Tübülo-glomerüler geri bildirim döngüsünde, sodyum klörür konsantrasyonunun düştüğünü algılayan makula densa, jukstaglomerüler hücreleri renin sekresyonuna teşvik etmek için aşağıdakilerden hangisini parakrin ajan olarak salgılar?
Doğru Şık (A): Prostaglandin E2 (PGE2)
Açıklama: Distal tübülde NaCl azaldığında makula densa hücreleri komşu jukstaglomerüler hücrelere NO (nitrik oksit) ve PGE2 salgılayarak lokal vazodilatasyon ve renin deşarjı sağlarlar. Aksine kan basıncı arttığında NaCl sunumu yükselirse makula densa bu kez ATP ve adenozin salgılayarak afferent arteriyolü daraltır ve GFR artışını frenler. Bu çift yönlü moleküler sensör dinamiği renal otoregülasyonun ana taşıyıcı kolonudur.

**Soru 2 (ID: ddba2163-c1e3-453a-8311-4ac79c1e5916)**
Soru Kökü: Renal otoregülasyonda görev alan tübüloglomerüler geri bildirim mekanizmasında, makula densa hücreleri proksimal tübülden gelen filtredeki düşük sodyum klorür (NaCl) konsantrasyonunu algıladığında, jukstaglomerüler hücrelerden renin salgılatmak için hangi medyatörleri serbest bırakır?
Doğru Şık (B): Nitrik oksit ve PGE2
Açıklama: Makula densa hücreleri, düşük NaCl yükünü algıladığında afferent arteriyolü genişletmek ve renin salgılatmak için NO ve PGE2 salgılar. Kan basıncı artıp NaCl yükü yükseldiğinde ise makula densadan salgılanan ATP ve adenozin afferent arteriyolde vazokonstriksiyon yapar. Bu iki zıt mekanizma tübüloglomerüler geri bildirimin temelini oluşturur.

---

### ÇİFT 29 (Benzerlik: 0.85)

**Soru 1 (ID: 587c2932-32c5-4e79-ba10-eca84dc05157)**
Soru Kökü: Makula densa hücreleri, distal tübüldeki NaCl konsantrasyonunu anlık olarak analiz eden fizyolojik ozmosensörler olarak görev yapar. Tübülo-glomerüler geri bildirim döngüsünde, sodyum klörür konsantrasyonunun düştüğünü algılayan makula densa, jukstaglomerüler hücreleri renin sekresyonuna teşvik etmek için aşağıdakilerden hangisini parakrin ajan olarak salgılar?
Doğru Şık (A): Prostaglandin E2 (PGE2)
Açıklama: Distal tübülde NaCl azaldığında makula densa hücreleri komşu jukstaglomerüler hücrelere NO (nitrik oksit) ve PGE2 salgılayarak lokal vazodilatasyon ve renin deşarjı sağlarlar. Aksine kan basıncı arttığında NaCl sunumu yükselirse makula densa bu kez ATP ve adenozin salgılayarak afferent arteriyolü daraltır ve GFR artışını frenler. Bu çift yönlü moleküler sensör dinamiği renal otoregülasyonun ana taşıyıcı kolonudur.

**Soru 2 (ID: ddba2163-c1e3-453a-8311-4ac79c1e5916)**
Soru Kökü: Renal otoregülasyonda görev alan tübüloglomerüler geri bildirim mekanizmasında, makula densa hücreleri proksimal tübülden gelen filtredeki düşük sodyum klorür (NaCl) konsantrasyonunu algıladığında, jukstaglomerüler hücrelerden renin salgılatmak için hangi medyatörleri serbest bırakır?
Doğru Şık (B): Nitrik oksit ve PGE2
Açıklama: Makula densa hücreleri, düşük NaCl yükünü algıladığında afferent arteriyolü genişletmek ve renin salgılatmak için NO ve PGE2 salgılar. Kan basıncı artıp NaCl yükü yükseldiğinde ise makula densadan salgılanan ATP ve adenozin afferent arteriyolde vazokonstriksiyon yapar. Bu iki zıt mekanizma tübüloglomerüler geri bildirimin temelini oluşturur.

---

### ÇİFT 30 (Benzerlik: 0.82)

**Soru 1 (ID: 69269532-2129-4f11-8dce-60076459cf8d)**
Soru Kökü: Böbrek içi lokal hemodinamik dengenin sağlanmasında çeşitli parakrin peptitler rol oynamaktadır. Distal tübül hücrelerinde sentezlenen, glomerüler filtrasyon hızını (GFR) artıran ve sodyum geri emilimini azaltan peptit aşağıdakilerden hangisidir?
Doğru Şık (A): Ürodilatin
Açıklama: Distal tübül hücrelerinden sentezlenen ve lokal parakrin etki gösteren ürodilatin, GFR'yi artırıcı ve lüminal sodyum geri emilimini azaltıcı natriüretik özelliklere sahiptir. Renin veya aldosteron gibi moleküller antidiüretik/sodyum tutucu yolağın parçasıyken, ürodilatin bu etkiye karşıt yönde çalışarak sıvı-elektrolit atılımını destekler. Bu özelliğiyle Atrial Natriüretik Peptid (ANP) ile benzer bir fizyolojik role sahiptir.

**Soru 2 (ID: 77e9d236-6f15-4feb-b805-883bc1494f6a)**
Soru Kökü: Böbrek kökenli natriüretik peptid türevi olan ve distal tübül hücrelerinde üretilerek atriyal natriüretik peptide (ANP) benzer şekilde GFR'yi artırıp, sodyum geri emilimini azaltan medyatör aşağıdakilerden hangisidir?
Doğru Şık (C): Ürodilatin
Açıklama: Ürodilatin böbrekte distal tübül hücrelerinden üretilen, ANP ile yapısal benzerlik gösteren ve lokal olarak sodyum reabsorbsiyonunu azaltıp GFR'yi artıran bir peptittir. Nefrin filtrasyon yarığında bulunur. Endotelin ise tam zıt olarak vazokonstriksiyon yapar ve GFR'yi düşürür.

---

### ÇİFT 31 (Benzerlik: 0.82)

**Soru 1 (ID: 63d38678-6394-4453-98b2-9fe716f8d6b3)**
Soru Kökü: Böbrek içi lokal hemodinamik dengenin sağlanmasında çeşitli parakrin peptitler rol oynamaktadır. Distal tübül hücrelerinde sentezlenen, glomerüler filtrasyon hızını (GFR) artıran ve sodyum geri emilimini azaltan peptit aşağıdakilerden hangisidir?
Doğru Şık (A): Ürodilatin
Açıklama: Distal tübül hücrelerinden sentezlenen ve lokal parakrin etki gösteren ürodilatin, GFR'yi artırıcı ve lüminal sodyum geri emilimini azaltıcı natriüretik özelliklere sahiptir. Renin veya aldosteron gibi moleküller antidiüretik/sodyum tutucu yolağın parçasıyken, ürodilatin bu etkiye karşıt yönde çalışarak sıvı-elektrolit atılımını destekler. Bu özelliğiyle Atrial Natriüretik Peptid (ANP) ile benzer bir fizyolojik role sahiptir.

**Soru 2 (ID: 77e9d236-6f15-4feb-b805-883bc1494f6a)**
Soru Kökü: Böbrek kökenli natriüretik peptid türevi olan ve distal tübül hücrelerinde üretilerek atriyal natriüretik peptide (ANP) benzer şekilde GFR'yi artırıp, sodyum geri emilimini azaltan medyatör aşağıdakilerden hangisidir?
Doğru Şık (C): Ürodilatin
Açıklama: Ürodilatin böbrekte distal tübül hücrelerinden üretilen, ANP ile yapısal benzerlik gösteren ve lokal olarak sodyum reabsorbsiyonunu azaltıp GFR'yi artıran bir peptittir. Nefrin filtrasyon yarığında bulunur. Endotelin ise tam zıt olarak vazokonstriksiyon yapar ve GFR'yi düşürür.

---

### ÇİFT 32 (Benzerlik: 0.81)

**Soru 1 (ID: 67fb7640-cab6-4d97-af42-248a55e99456)**
Soru Kökü: Metabolik asidoz; plazma bikarbonat düzeyinin 24 mEq/L'nin altına düşmesi ve hidrojen iyonlarının artarak pH değerinin düşmesi tablosudur. Aşağıda verilen patolojik durumlardan hangisi metabolik asidoz etiyolojileri arasında **değildir**?
Doğru Şık (B): Mide sıvısı kaybına yol açan şiddetli kusma
Açıklama: Şiddetli kusma ve gastrik drenaj, mideden yoğun miktarda asit (HCl) ve klorür kaybına neden olarak metabolik asidoz değil, metabolik alkaloz (hipokloremik alkaloz) tablosuna yol açar. Böbrek yetmezliği, ishal ve karbonik anhidraz kullanımı ise bikarbonat kaybı veya asit atılamaması yoluyla doğrudan asidoz oluşturur. Asit-baz bozukluğu olan hastalarda kusma-ishal ayrımı volüm ve elektrolit reçetesini tamamen değiştirir.

**Soru 2 (ID: 6e926e7b-a819-4c05-9e94-5a819f62c201)**
Soru Kökü: Metabolik asidoz gelişimi birçok klinik durumda gözlenebilir. Aşağıdaki durumlardan hangisi arteriyel kanda HCO3- iyonunun 24 mEq/L'nin altına düşmesine ve metabolik asidoza neden olan faktörlerden biri **değildir**?
Doğru Şık (D): Aldosteron fazlalığı
Açıklama: Aldosteron fazlalığı, distal tübüllerdeki esas ve alfa-interkale hücreler üzerinden hidrojen ve potasyum sekresyonunu şiddetle uyararak plazmada H+ eksikliğine ve bikarbonat hakimiyetine, yani metabolik alkaloza neden olur. Böbrek yetmezliği, ishal, sepsise bağlı doku hipoksisi (laktat birikimi) ve karbonik anhidraz inhibitörlerinin kullanımı ise baz (bikarbonat) kaybına veya endojen asit birikimine yol açarak net bir metabolik asidoz yaratır.

---

### ÇİFT 33 (Benzerlik: 0.81)

**Soru 1 (ID: 5731e5ac-1858-4f71-b288-c2b397b68260)**
Soru Kökü: Metabolik asidoz; plazma bikarbonat düzeyinin 24 mEq/L'nin altına düşmesi ve hidrojen iyonlarının artarak pH değerinin düşmesi tablosudur. Aşağıda verilen patolojik durumlardan hangisi metabolik asidoz etiyolojileri arasında **değildir**?
Doğru Şık (B): Mide sıvısı kaybına yol açan şiddetli kusma
Açıklama: Şiddetli kusma ve gastrik drenaj, mideden yoğun miktarda asit (HCl) ve klorür kaybına neden olarak metabolik asidoz değil, metabolik alkaloz (hipokloremik alkaloz) tablosuna yol açar. Böbrek yetmezliği, ishal ve karbonik anhidraz kullanımı ise bikarbonat kaybı veya asit atılamaması yoluyla doğrudan asidoz oluşturur. Asit-baz bozukluğu olan hastalarda kusma-ishal ayrımı volüm ve elektrolit reçetesini tamamen değiştirir.

**Soru 2 (ID: 6e926e7b-a819-4c05-9e94-5a819f62c201)**
Soru Kökü: Metabolik asidoz gelişimi birçok klinik durumda gözlenebilir. Aşağıdaki durumlardan hangisi arteriyel kanda HCO3- iyonunun 24 mEq/L'nin altına düşmesine ve metabolik asidoza neden olan faktörlerden biri **değildir**?
Doğru Şık (D): Aldosteron fazlalığı
Açıklama: Aldosteron fazlalığı, distal tübüllerdeki esas ve alfa-interkale hücreler üzerinden hidrojen ve potasyum sekresyonunu şiddetle uyararak plazmada H+ eksikliğine ve bikarbonat hakimiyetine, yani metabolik alkaloza neden olur. Böbrek yetmezliği, ishal, sepsise bağlı doku hipoksisi (laktat birikimi) ve karbonik anhidraz inhibitörlerinin kullanımı ise baz (bikarbonat) kaybına veya endojen asit birikimine yol açarak net bir metabolik asidoz yaratır.

---

### ÇİFT 34 (Benzerlik: 0.81)

**Soru 1 (ID: 09965c91-a5ec-4b0c-a079-8b84c66422d9)**
Soru Kökü: Rutin bir kardiyak tarama sırasında, kalbin inferior (diyafragmatik) duvarındaki patolojileri saptamak amacıyla kullanılan ve potansiyeli sol bacaktan kaydeden unipolar derivasyon aşağıdakilerden hangisidir?
Doğru Şık (C): aVF
Açıklama: aVF (augmented Vector Foot), pozitif algılayıcı elektrodun sol bacakta yer aldığı ve kalbi +90 derecelik dikey bir eksenden değerlendiren unipolar derivasyondur. Vektörel olarak kalbin inferior kısmını gördüğü için diyafragmatik yüzü tutan infarktüslerin tanısında DII ve DIII derivasyonları ile kombinasyon halinde vazgeçilmez bir klinik öneme sahiptir. V1 horizontal bir eksendir.

**Soru 2 (ID: f5e7f2b9-0226-427c-a812-21d01fd7bc4b)**
Soru Kökü: Kardiyak elektriksel eksen değerlendirmesinde, sol ventrikülün yüksek lateral duvarına anatomik komşuluk gösteren ve potansiyeli sol koldan kaydeden unipolar ekstremite derivasyonu aşağıdakilerden hangisidir?
Doğru Şık (B): aVL
Açıklama: aVL (augmented Vector Left), tek pozitif ölçüm elektrodunun sol kolda (-30 derece eksen) konumlandırıldığı unipolar ekstremite derivasyonudur. Bu lokalizasyon, sol ventrikülün yüksek lateral duvarına çok yakın olduğundan, bu bölgenin akut miyokardiyal infarktüsünde DI ile birlikte ST değişikliklerinin izlendiği temel kaynaktır. aVF inferiora, aVR ise sağ atriyum yönüne bakar.

---

### ÇİFT 35 (Benzerlik: 0.80)

**Soru 1 (ID: 3acb61c3-a996-4dd9-8e79-bb19e59a4239)**
Soru Kökü: Standart 12 derivasyonlu EKG'de, kalbin sol lateral duvarını en dıştan çevreleyen V6 prekordiyal elektrodunun toraks üzerindeki yerleşim bölgesi aşağıdakilerden hangisidir?
Doğru Şık (D): Sol 5. interkostal aralık orta aksiller çizgi
Açıklama: V6 elektrodu, kalbin elektriksel dolaşımını izleyen horizontal kuşağın en distal parçasıdır ve V4 ile V5 elektrotlarıyla aynı hizadaki sol 5. interkostal aralığın orta aksiller çizgi ile tam kesişimine yerleştirilir. V5 ve V6, ekstremite derivasyonlarından aVL ve DI ile birlikte sol ventrikül lateral duvar repolarizasyonunu yansıtır. Midklaviküler hat V4'e aittir.

**Soru 2 (ID: 607301af-d44f-4e72-9bff-8b0ed17f467c)**
Soru Kökü: Rutin bir poliklinik taraması sırasında sol ventrikülün lateral duvar fonksiyonları değerlendirilmek isteniyor. Bu amaçla V5 elektrodunun göğüs duvarına yerleştirilmesi gereken en doğru anatomik lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (C): Sol 5. interkostal aralık ön aksiller çizgi
Açıklama: V5 derivasyon elektrodu, horizontal planda V4 elektrodu ile aynı yatay hizada (sol 5. interkostal boşluk seviyesinde) kalmak koşuluyla, daha lateraldeki ön aksiller çizginin üzerine yerleştirilir. Bu spesifik lokalizasyon, V6 ile birlikte sol ventrikül lateral duvar miyokardının iskemik ve hipertrofik elektriksel yüklerini okumada kullanılır. Orta aksiller çizgi V6'nın yeridir.

---

### ÇİFT 36 (Benzerlik: 0.79)

**Soru 1 (ID: 54231e8a-6844-42b8-a447-7ab9e27b00b3)**
Soru Kökü: Kan basıncının uzun süreli düzenlenmesinde kilit rol oynayan Anjiyotensin II'nin sistemik etkileri arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (B): Arteriyol düz kaslarını gevşeterek vazodilatasyon yapmak
Açıklama: Anjiyotensin II, damar düz kası üzerinde bilinen en güçlü vazokonstriktör (kasıcı) ajanlardan biridir ve arteriyollerde yaygın kasılmaya yol açarak Total Periferik Direnci (TPR) artırır. Vazodilatasyon yapmaz. Diğer seçeneklerdeki aldosteron uyarısı, noradrenalin fasilitasyonu, Na emilimi ve susama hissi bilinen temel fonksiyonlarıdır.

**Soru 2 (ID: d59fac76-7fea-4d5b-bf83-144644c5459d)**
Soru Kökü: Anjiyotensin-II, böbrek ve kardiyovasküler sistem üzerinde geniş fizyolojik yelpazeye sahip bir efektör moleküldür. Anjiyotensin-II'nin fizyolojik etkileri ile ilgili aşağıdakilerden hangisi **değildir**?
Doğru Şık (E): Beyin üzerinden barorefleks duyarlılığını artırması
Açıklama: Anjiyotensin-II, beyin üzerinden barorefleks duyarlılığını artırmaz, aksine azaltır; bu mekanizma sayesinde artan kan basıncına refleks olarak gelişmesi gereken bradikardi yanıtını baskılar. Proksimal tübülde sodyum tutulumunu, hipotalamusta ise ADH ve susama hissini aktive eden güçlü bir moleküldür. Barorefleks inhibisyonu, Ang-II'nin hipertansif gücünün sistemik kontrol mekanizmalarınca dengelenmesini imkansız hale getirir.

---

### ÇİFT 37 (Benzerlik: 0.79)

**Soru 1 (ID: 2f986f58-6ca4-4d12-97cd-89f199d716f0)**
Soru Kökü: Anjiyotensin-II, böbrek ve kardiyovasküler sistem üzerinde geniş fizyolojik yelpazeye sahip bir efektör moleküldür. Anjiyotensin-II'nin fizyolojik etkileri ile ilgili aşağıdakilerden hangisi **değildir**?
Doğru Şık (E): Beyin üzerinden barorefleks duyarlılığını artırması
Açıklama: Anjiyotensin-II, beyin üzerinden barorefleks duyarlılığını artırmaz, aksine azaltır; bu mekanizma sayesinde artan kan basıncına refleks olarak gelişmesi gereken bradikardi yanıtını baskılar. Proksimal tübülde sodyum tutulumunu, hipotalamusta ise ADH ve susama hissini aktive eden güçlü bir moleküldür. Barorefleks inhibisyonu, Ang-II'nin hipertansif gücünün sistemik kontrol mekanizmalarınca dengelenmesini imkansız hale getirir.

**Soru 2 (ID: 54231e8a-6844-42b8-a447-7ab9e27b00b3)**
Soru Kökü: Kan basıncının uzun süreli düzenlenmesinde kilit rol oynayan Anjiyotensin II'nin sistemik etkileri arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (B): Arteriyol düz kaslarını gevşeterek vazodilatasyon yapmak
Açıklama: Anjiyotensin II, damar düz kası üzerinde bilinen en güçlü vazokonstriktör (kasıcı) ajanlardan biridir ve arteriyollerde yaygın kasılmaya yol açarak Total Periferik Direnci (TPR) artırır. Vazodilatasyon yapmaz. Diğer seçeneklerdeki aldosteron uyarısı, noradrenalin fasilitasyonu, Na emilimi ve susama hissi bilinen temel fonksiyonlarıdır.

---

### ÇİFT 38 (Benzerlik: 0.79)

**Soru 1 (ID: 04b61bd1-0094-49bc-97f5-a3327d55a27a)**
Soru Kökü: Nefronda hem emilip hem de sekrete edilen tek iyon olan potasyumun atılım dengesi, distal tübül lümenindeki koşullara son derece duyarlıdır. Aşağıdaki faktörlerden hangisi geç distal tübülde lümene potasyum sekresyonunu (atılımını) artıran faktörlerden biri **değildir**?
Doğru Şık (C): Amilorid sınıfı sodyum kanal blokörü kullanımı
Açıklama: Amilorid, distal tübül apikal membranındaki ENaC sodyum kanallarını bloke ederek sodyum emilimini durdurur; bu da lümen negatifliğini azaltarak potasyum sekresyonunu kestiği için "potasyum tutucu diüretik" olarak adlandırılır (sekresyonu azaltır, artırmaz). Aldosteron, alkaloz, yüksek akım hızı (diüretikler) ve lümendeki emilemeyen anyonların yarattığı negatiflik ise potasyumu lümene çeker (sekresyonu artırır).

**Soru 2 (ID: 22c629ec-4bd8-4589-9ed2-41fed8ad3fbb)**
Soru Kökü: Distal tübülde potasyum sekresyonunu etkileyen faktörler değerlendirildiğinde, aşağıdakilerden hangisi potasyum sekresyonunu **azaltan** durumlardan biridir?
Doğru Şık (A): Akut asidoz
Açıklama: Akut asidoz tablosu, tübül hücrelerinde Na-K pompasının aktivitesini baskıladığı için lümene potasyum sekresyonunu spesifik olarak inhibe eder. Tam aksine alkaloz durumu kanda hidrojen azaldığı için H+ iyonunun kana geçip K+ iyonunun hücre içine (dolayısıyla idrara) kaymasına neden olarak sekresyonu artırır. Loop ve tiazid diüretikleri ile artan tübüler akım hızı da potasyum sekresyonunu provoke eden majör dinamiklerdir.

---

### ÇİFT 39 (Benzerlik: 0.78)

**Soru 1 (ID: 2d4e9b75-20ac-4a11-8cc1-4bc4ee357554)**
Soru Kökü: Boyun bölgesine dışarıdan bası uygulanması sonucu sinüs karotikus baroreseptörlerinden çıkan afferent sinyaller, aşağıdaki sinirlerden hangisi aracılığıyla beyin sapına iletilir?
Doğru Şık (D): N. Glossofaringeus
Açıklama: Sinüs karotikustaki baroreseptörlerden çıkan afferent duysal sinyaller, N. Glossofaringeus'un (CN IX) bir dalı olan Hering siniri aracılığıyla beyin sapına taşınır. Arkus aortadan kalkan sinyalleri ise N. Vagus taşımaktadır.

**Soru 2 (ID: 614baf65-b2cb-4520-a0ba-a287861c2e8d)**
Soru Kökü: Arkus aorta duvarındaki baroreseptörlerden kaynaklanan kan basıncı değişikliklerine ait aferent uyarıları beyin sapındaki vazomotor merkeze taşıyan kraniyal sinir hangisidir?
Doğru Şık (E): CN X (Vagus)
Açıklama: Arkus aortadaki baroreseptörlerden çıkan duysal sinyaller N. Vagus (Cyons siniri - vagus afferent dalı) aracılığıyla iletilirken; sinüs karotikus sinyalleri N. Glossofaringeus ile taşınır. Her iki lif grubu da sonuçta medulladaki NTS'ye (Nükleus Traktus Solitarius) ulaşır.

---

### ÇİFT 40 (Benzerlik: 0.78)

**Soru 1 (ID: 47ef83a7-dd6c-4022-9ef4-d6bf9c19b91d)**
Soru Kökü: Glomerüler filtrasyon bariyerini oluşturan podosit hücrelerinin ayaksı çıkıntıları (pediseller) arasındaki filtrasyon yarıklarını döşeyen spesifik proteini kodlayan genin mutasyonuna bağlı olarak, yenidoğan döneminde masif proteinüri ile ortaya çıkan hastalık aşağıdakilerden hangisidir?
Doğru Şık (B): Konjenital nefrotik sendrom
Açıklama: Podositlerin ayaksı çıkıntılarının arasını döşeyen temel iskelet proteini 'nefrin'dir. Nefrin eksikliği veya mutasyonu, filtrasyon bariyerinin yapısal olarak bozulmasına ve konjenital nefrotik sendroma neden olur. Minimal değişiklik hastalığı ise yapısal protein mutasyonundan ziyade bazal membranın elektriksel (negatif) yük kaybına bağlı olarak genellikle çocukluk çağında görülür.

**Soru 2 (ID: 674b3700-d7bc-4e6f-b3cf-d5eb14c03595)**
Soru Kökü: Altı yaşındaki erkek çocuk, göz kapaklarında ve bacaklarında şişlik şikayetiyle getiriliyor. Laboratuvar incelemesinde idrarda yoğun protein (proteinüri) ve plazma onkotik basıncında düşme saptanıyor. Biyopside podositlerin ayaksı çıkıntılarının arasını döşeyen proteinde eksiklik tespit ediliyor. Bu hastada konjenital eksikliği olan protein aşağıdakilerden hangisidir?
Doğru Şık (B): Nefrin
Açıklama: Nefrin, podositlerin ayaksı çıkıntıları (Bowman epiteli) arasını döşeyen ve eksikliğinde konjenital nefrotik sendroma yol açan primer proteindir. Heparan sülfat bazal membranın güçlü negatif yükünü sağlayan ana glukozaminoglikan olup, podositler arasındaki yarık zarında bulunmaz. Bu vaka, glomerüler filtrasyon bariyerinin hücresel mimarisinin klinik yansımasını test eder.

---

### ÇİFT 41 (Benzerlik: 0.77)

**Soru 1 (ID: 3acb61c3-a996-4dd9-8e79-bb19e59a4239)**
Soru Kökü: Standart 12 derivasyonlu EKG'de, kalbin sol lateral duvarını en dıştan çevreleyen V6 prekordiyal elektrodunun toraks üzerindeki yerleşim bölgesi aşağıdakilerden hangisidir?
Doğru Şık (D): Sol 5. interkostal aralık orta aksiller çizgi
Açıklama: V6 elektrodu, kalbin elektriksel dolaşımını izleyen horizontal kuşağın en distal parçasıdır ve V4 ile V5 elektrotlarıyla aynı hizadaki sol 5. interkostal aralığın orta aksiller çizgi ile tam kesişimine yerleştirilir. V5 ve V6, ekstremite derivasyonlarından aVL ve DI ile birlikte sol ventrikül lateral duvar repolarizasyonunu yansıtır. Midklaviküler hat V4'e aittir.

**Soru 2 (ID: 6bd0f34e-0853-4439-963b-f8e754c6906e)**
Soru Kökü: Kalbin anteroseptal duvarındaki elektriksel olayları değerlendirmek amacıyla kullanılan V2 prekordiyal elektrodunun toraks yüzeyindeki standart anatomik yerleşimi aşağıdakilerden hangisidir?
Doğru Şık (E): Sol 4. interkostal aralık sternum kenarı
Açıklama: V2 derivasyonu algılayıcı elektrodu, solda sternum ile 4. interkostal aralığın tam birleşim noktasına yerleştirilir. V1 ile simetrik pozisyonda bulunan V2, kalbin anteroseptal bölgesini örttüğü için bu bölgeye lokalize iskemik zedelenme ve miyokard infarktüslerinin EKG tanısında son derece duyarlıdır. Sağ 4. interkostal aralık ise V1'in yeridir.

---

### ÇİFT 42 (Benzerlik: 0.77)

**Soru 1 (ID: 1eb63d42-dc5d-42af-b40f-f2ddd20cac24)**
Soru Kökü: Otuz iki yaşındaki kadın hasta travmatik kafa travması sonrasında günde 10 litreye varan aşırı miktarda dilüe idrar çıkarma şikayeti ile yatırılıyor. Teşhis edilen Santral Diabetes İnsipidus tablosunda, hormon eksikliğine bağlı olarak toplayıcı kanal esas hücrelerinde hangi sinyal iletim yolağı çalışmadığı için apikal membrana Aquaporin-2 yerleşemez?
Doğru Şık (E): V2 reseptörü - Gs proteini - Siklik AMP (cAMP) artışı
Açıklama: Vazopressin (ADH), toplayıcı kanalların bazolateral membranındaki V2 reseptörlerine bağlanır, Gs proteinini aktive eder ve intrasellüler cAMP düzeyini artırır. Bu kaskad, sitoplazmadaki veziküllerde bekleyen Aquaporin-2 kanallarının apikal membrana yerleşmesini sağlayarak suyu kana geri çeker. Santral DI'da ADH hiç üretilmediği için bu yolak sessiz kalır ve su lümende kalarak devasa boyutta poliüri yaratır.

**Soru 2 (ID: f920cd12-7bf2-4c6d-baef-c52a0619ab24)**
Soru Kökü: Otuz yaşında travmatik beyin hasarı öyküsü olan erkek hasta, şiddetli poliüri ve polidipsi şikayetiyle başvuruyor ve santral tip diabetes insipitus tanısıyla desmopressin (sentetik ADH) tedavisi başlanıyor. Tedavi sonrası idrarın hızla konsantre olduğu gözlemleniyor. Bu hastada suyun toplayıcı kanalların lüminal membranı üzerinden geri emilimini sağlayan spesifik kanal aşağıdakilerden hangisidir?
Doğru Şık (C): Aquaporin 2
Açıklama: ADH (vazopressin), toplayıcı kanallardaki esas hücrelerin bazolateral yüzeyindeki V2 reseptörlerine bağlanarak cAMP yolunu uyarır ve apikal (lüminal) membranda Aquaporin 2 (AQP2) kanallarının ekspresyonunu artırır. Aquaporin 3 ve 4 toplayıcı kanalların bazolateral yüzeyinde bulunur ve ADH kontrolünden bağımsız şekilde suyun kana geçişini sağlar. Suyun dinamik geri emilimindeki esas terapötik kapı AQP2 ile sağlanır.

---

### ÇİFT 43 (Benzerlik: 0.77)

**Soru 1 (ID: 1441817c-7474-4911-bbcf-8c60deaa64f1)**
Soru Kökü: Otuz yaşında travmatik beyin hasarı öyküsü olan erkek hasta, şiddetli poliüri ve polidipsi şikayetiyle başvuruyor ve santral tip diabetes insipitus tanısıyla desmopressin (sentetik ADH) tedavisi başlanıyor. Tedavi sonrası idrarın hızla konsantre olduğu gözlemleniyor. Bu hastada suyun toplayıcı kanalların lüminal membranı üzerinden geri emilimini sağlayan spesifik kanal aşağıdakilerden hangisidir?
Doğru Şık (C): Aquaporin 2
Açıklama: ADH (vazopressin), toplayıcı kanallardaki esas hücrelerin bazolateral yüzeyindeki V2 reseptörlerine bağlanarak cAMP yolunu uyarır ve apikal (lüminal) membranda Aquaporin 2 (AQP2) kanallarının ekspresyonunu artırır. Aquaporin 3 ve 4 toplayıcı kanalların bazolateral yüzeyinde bulunur ve ADH kontrolünden bağımsız şekilde suyun kana geçişini sağlar. Suyun dinamik geri emilimindeki esas terapötik kapı AQP2 ile sağlanır.

**Soru 2 (ID: 1eb63d42-dc5d-42af-b40f-f2ddd20cac24)**
Soru Kökü: Otuz iki yaşındaki kadın hasta travmatik kafa travması sonrasında günde 10 litreye varan aşırı miktarda dilüe idrar çıkarma şikayeti ile yatırılıyor. Teşhis edilen Santral Diabetes İnsipidus tablosunda, hormon eksikliğine bağlı olarak toplayıcı kanal esas hücrelerinde hangi sinyal iletim yolağı çalışmadığı için apikal membrana Aquaporin-2 yerleşemez?
Doğru Şık (E): V2 reseptörü - Gs proteini - Siklik AMP (cAMP) artışı
Açıklama: Vazopressin (ADH), toplayıcı kanalların bazolateral membranındaki V2 reseptörlerine bağlanır, Gs proteinini aktive eder ve intrasellüler cAMP düzeyini artırır. Bu kaskad, sitoplazmadaki veziküllerde bekleyen Aquaporin-2 kanallarının apikal membrana yerleşmesini sağlayarak suyu kana geri çeker. Santral DI'da ADH hiç üretilmediği için bu yolak sessiz kalır ve su lümende kalarak devasa boyutta poliüri yaratır.

---

### ÇİFT 44 (Benzerlik: 0.77)

**Soru 1 (ID: 0fc62fad-b4b0-4e7d-a5e0-b672d199ede7)**
Soru Kökü: Starling dengesinde yer alan kuvvetler göz önüne alındığında, damar içindeki sıvının kapiller lümende tutulmasını sağlayan ve filtrasyona en güçlü karşı koyan basınç hangisidir?
Doğru Şık (C): Plazma kolloid osmotik basıncı
Açıklama: Plazma kolloid osmotik basıncı (yaklaşık 28 mmHg), plazma proteinleri (özellikle albümin) tarafından oluşturulur ve sıvıyı damar içinde tutarak dokuya sızmasını (filtrasyonu) engeller. Kapiller hidrostatik basınç sıvıyı interstisyuma iterken, interstisyel kolloid osmotik basınç sıvıyı dokuya çeker.

**Soru 2 (ID: 57db6f03-1b2e-4f66-ba05-f0bad7e83c42)**
Soru Kökü: Starling dengesini belirleyen kuvvetler analiz edildiğinde, fizyolojik durumda pozitif değer aldığında sıvıyı interstisyumdan kapiller lümen içine iterek filtrasyona karşı duran kuvvet aşağıdakilerden hangisidir?
Doğru Şık (C): İntertisyel sıvı basıncı
Açıklama: İntertisyel sıvı basıncı (Pi), pozitif olduğunda interstisyumdaki sıvıyı fiziksel olarak kapillerin içine iter. Normalde negatif değerli (-3 mmHg) olup sıvıyı dışarı çeken yönde çalışsa da, tanımlama gereği doku sıvısının oluşturduğu mekanik itici kuvvettir. Plazma kolloid osmotik basıncı ise osmotik çekim ile sıvıyı lümende tutar.

---

### ÇİFT 45 (Benzerlik: 0.76)

**Soru 1 (ID: 03427e58-59b3-42e4-935a-af7b789bfc32)**
Soru Kökü: Makula densa hücreleri, distal tübüldeki NaCl konsantrasyonunu anlık olarak analiz eden fizyolojik ozmosensörler olarak görev yapar. Tübülo-glomerüler geri bildirim döngüsünde, sodyum klörür konsantrasyonunun düştüğünü algılayan makula densa, jukstaglomerüler hücreleri renin sekresyonuna teşvik etmek için aşağıdakilerden hangisini parakrin ajan olarak salgılar?
Doğru Şık (A): Prostaglandin E2 (PGE2)
Açıklama: Distal tübülde NaCl azaldığında makula densa hücreleri komşu jukstaglomerüler hücrelere NO (nitrik oksit) ve PGE2 salgılayarak lokal vazodilatasyon ve renin deşarjı sağlarlar. Aksine kan basıncı arttığında NaCl sunumu yükselirse makula densa bu kez ATP ve adenozin salgılayarak afferent arteriyolü daraltır ve GFR artışını frenler. Bu çift yönlü moleküler sensör dinamiği renal otoregülasyonun ana taşıyıcı kolonudur.

**Soru 2 (ID: 2e0d061a-a617-432a-ae11-20d35b8c6382)**
Soru Kökü: Makula densa hücreleri tarafından salgılanan ve kan basıncı yükseldiğinde afferent arteriolde vazokonstriksiyon yaparak glomerüler filtrasyon hızını (GFR) otoregüle eden madde aşağıdakilerden hangisidir?
Doğru Şık (D): Adenozin
Açıklama: Kan basıncı arttığında, tübülo-glomerüler geri bildirim mekanizması kapsamında makula densa hücreleri ATP ve adenozin salgılayarak afferent arteriolde koruyucu vazokonstriksiyon yapar. Kan basıncı düştüğünde (NaCl gelişi azaldığında) ise makula densa nitrik oksit (NO) ve PGE2 salgılayarak afferent arteriolü genişletir. Anjiyotensin-II esas olarak efferent arteriolü daralttığı için bu hücresel feedback zincirinin afferent hedefli medyatörü değildir.

---

### ÇİFT 46 (Benzerlik: 0.76)

**Soru 1 (ID: 2e0d061a-a617-432a-ae11-20d35b8c6382)**
Soru Kökü: Makula densa hücreleri tarafından salgılanan ve kan basıncı yükseldiğinde afferent arteriolde vazokonstriksiyon yaparak glomerüler filtrasyon hızını (GFR) otoregüle eden madde aşağıdakilerden hangisidir?
Doğru Şık (D): Adenozin
Açıklama: Kan basıncı arttığında, tübülo-glomerüler geri bildirim mekanizması kapsamında makula densa hücreleri ATP ve adenozin salgılayarak afferent arteriolde koruyucu vazokonstriksiyon yapar. Kan basıncı düştüğünde (NaCl gelişi azaldığında) ise makula densa nitrik oksit (NO) ve PGE2 salgılayarak afferent arteriolü genişletir. Anjiyotensin-II esas olarak efferent arteriolü daralttığı için bu hücresel feedback zincirinin afferent hedefli medyatörü değildir.

**Soru 2 (ID: 587c2932-32c5-4e79-ba10-eca84dc05157)**
Soru Kökü: Makula densa hücreleri, distal tübüldeki NaCl konsantrasyonunu anlık olarak analiz eden fizyolojik ozmosensörler olarak görev yapar. Tübülo-glomerüler geri bildirim döngüsünde, sodyum klörür konsantrasyonunun düştüğünü algılayan makula densa, jukstaglomerüler hücreleri renin sekresyonuna teşvik etmek için aşağıdakilerden hangisini parakrin ajan olarak salgılar?
Doğru Şık (A): Prostaglandin E2 (PGE2)
Açıklama: Distal tübülde NaCl azaldığında makula densa hücreleri komşu jukstaglomerüler hücrelere NO (nitrik oksit) ve PGE2 salgılayarak lokal vazodilatasyon ve renin deşarjı sağlarlar. Aksine kan basıncı arttığında NaCl sunumu yükselirse makula densa bu kez ATP ve adenozin salgılayarak afferent arteriyolü daraltır ve GFR artışını frenler. Bu çift yönlü moleküler sensör dinamiği renal otoregülasyonun ana taşıyıcı kolonudur.

---

### ÇİFT 47 (Benzerlik: 0.76)

**Soru 1 (ID: 59c8b17d-a039-4290-a088-1429275ed0e3)**
Soru Kökü: Natriüretik mekanizmalar içinde yer alan ve renal arterde vazodilatasyon yaparak GFR'yi artırırken aynı zamanda proksimal tübülde Na-K ATPaz pompasını doğrudan inhibe ederek sodyum atılımına (natriürez) neden olan endojen madde aşağıdakilerden hangisidir?
Doğru Şık (A): Dopamin
Açıklama: Dopamin, renal yatakta vazodilatasyon yaparak kan akımını ve GFR'yi artırır, tübüler düzeyde ise proksimal tüpteki Na-K ATPaz'ı inhibe ederek güçlü bir natriüretik etki oluşturur. Endotelin ve Anjiyotensin-II güçlü vazokonstriktörler olup Na tutulumunu teşvik eder. ANP ve ürodilatin de natriüretiktir ancak proksimal tübülde primer olarak Dopamin tanımlanmıştır.

**Soru 2 (ID: 77e9d236-6f15-4feb-b805-883bc1494f6a)**
Soru Kökü: Böbrek kökenli natriüretik peptid türevi olan ve distal tübül hücrelerinde üretilerek atriyal natriüretik peptide (ANP) benzer şekilde GFR'yi artırıp, sodyum geri emilimini azaltan medyatör aşağıdakilerden hangisidir?
Doğru Şık (C): Ürodilatin
Açıklama: Ürodilatin böbrekte distal tübül hücrelerinden üretilen, ANP ile yapısal benzerlik gösteren ve lokal olarak sodyum reabsorbsiyonunu azaltıp GFR'yi artıran bir peptittir. Nefrin filtrasyon yarığında bulunur. Endotelin ise tam zıt olarak vazokonstriksiyon yapar ve GFR'yi düşürür.

---

### ÇİFT 48 (Benzerlik: 0.76)

**Soru 1 (ID: 1911c0f9-4e12-4b5b-90d5-037c44206197)**
Soru Kökü: Fizyolojik mekanizmalar idrar kalsiyum miktarını dengeleyerek plazma kalsiyum homeostazını korur. Aşağıdaki durumlardan hangisi böbrek tübüllerinden kalsiyum atılımını azaltarak (geri emilimini artırarak) plazma kalsiyum düzeyini yükseltici yönde etki gösteren faktörlerden biridir?
Doğru Şık (B): Plazma bikarbonatının yükselmesi (Metabolik Alkaloz)
Açıklama: Metabolik alkaloz, kalsiyum atılımını azaltan (hipokalsiürik) faktörlerden biridir. PTH artışı, fosfat artışı, D3 vitamini, ESS hacim azalması (hipovolemi) ve alkaloz tübüllerden kalsiyum emilimini artırır. Aksine hipermagnezemi (kalsiyum ile TAL segmentinde yarışır), hipervolemi ve furosemid gibi ajanlar kalsiyum idrar atılımını artırır. Kemik-mineral patofizyolojisinde bu faktörler majör etkilere sahiptir.

**Soru 2 (ID: 9739ebed-35e8-43dd-89f0-771fae6645d3)**
Soru Kökü: Kalsiyumun renal fizyolojisi incelendiğinde, aşağıdakilerden hangisi idrarla kalsiyum atılmasını **azaltan** (reabsorbsiyonu artıran) durumlardan biri **değildir**?
Doğru Şık (D): Hipermagnezemi varlığı
Açıklama: Henle kulpunun çıkan kalın kolunda magnezyum ve kalsiyum paraselüler yolaktan reabsorbe edilir ve birbirlerinin emilim gradyanını kompetitif olarak etkilerler. Kanda magnezyum arttığında (hipermagnezemi), tübüller lümeni terk etmesi gereken kalsiyumun önüne fizyolojik bir blokaj kurar ve kalsiyum atılımını zorunlu olarak artırır. PTH sekresyonu, alkaloz, D3 vitamini ve ESS azalması ise idrarda kalsiyum tutucu (reabsorbe edici) faktörlerdir.

---

### ÇİFT 49 (Benzerlik: 0.76)

**Soru 1 (ID: 2e0d061a-a617-432a-ae11-20d35b8c6382)**
Soru Kökü: Makula densa hücreleri tarafından salgılanan ve kan basıncı yükseldiğinde afferent arteriolde vazokonstriksiyon yaparak glomerüler filtrasyon hızını (GFR) otoregüle eden madde aşağıdakilerden hangisidir?
Doğru Şık (D): Adenozin
Açıklama: Kan basıncı arttığında, tübülo-glomerüler geri bildirim mekanizması kapsamında makula densa hücreleri ATP ve adenozin salgılayarak afferent arteriolde koruyucu vazokonstriksiyon yapar. Kan basıncı düştüğünde (NaCl gelişi azaldığında) ise makula densa nitrik oksit (NO) ve PGE2 salgılayarak afferent arteriolü genişletir. Anjiyotensin-II esas olarak efferent arteriolü daralttığı için bu hücresel feedback zincirinin afferent hedefli medyatörü değildir.

**Soru 2 (ID: ddba2163-c1e3-453a-8311-4ac79c1e5916)**
Soru Kökü: Renal otoregülasyonda görev alan tübüloglomerüler geri bildirim mekanizmasında, makula densa hücreleri proksimal tübülden gelen filtredeki düşük sodyum klorür (NaCl) konsantrasyonunu algıladığında, jukstaglomerüler hücrelerden renin salgılatmak için hangi medyatörleri serbest bırakır?
Doğru Şık (B): Nitrik oksit ve PGE2
Açıklama: Makula densa hücreleri, düşük NaCl yükünü algıladığında afferent arteriyolü genişletmek ve renin salgılatmak için NO ve PGE2 salgılar. Kan basıncı artıp NaCl yükü yükseldiğinde ise makula densadan salgılanan ATP ve adenozin afferent arteriyolde vazokonstriksiyon yapar. Bu iki zıt mekanizma tübüloglomerüler geri bildirimin temelini oluşturur.

---

### ÇİFT 50 (Benzerlik: 0.75)

**Soru 1 (ID: 5bc7999e-1736-4dd7-891a-b84f1c127a7e)**
Soru Kökü: Böbrek tübüllerinde iyonların geri emilimini hedef alan diüretik ajanlar ve hormonların kalsiyum atılımı üzerindeki etkileri değerlendirildiğinde, kalsiyum atılımını azaltan faktörler arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (B): Furosemid kullanımı
Açıklama: Furosemid gibi loop diüretikleri, çıkan kalın Henle kulpunun lümen pozitifliğini sağlayan Na-K-2Cl pompasını inhibe ederek kalsiyum ve magnezyumun paraselüler geri emilimini bozar, böylece kalsiyum atılımını (hiperkalsiüri) artırır. Tiazid diüretikleri ise distal tübülde kalsiyum emilimini artırarak atılımı azaltır ve hipokalsiüri yapar. PTH, metabolik alkaloz ve ESS azalması da kalsiyum atılımını azaltan diğer faktörlerdir.

**Soru 2 (ID: 9739ebed-35e8-43dd-89f0-771fae6645d3)**
Soru Kökü: Kalsiyumun renal fizyolojisi incelendiğinde, aşağıdakilerden hangisi idrarla kalsiyum atılmasını **azaltan** (reabsorbsiyonu artıran) durumlardan biri **değildir**?
Doğru Şık (D): Hipermagnezemi varlığı
Açıklama: Henle kulpunun çıkan kalın kolunda magnezyum ve kalsiyum paraselüler yolaktan reabsorbe edilir ve birbirlerinin emilim gradyanını kompetitif olarak etkilerler. Kanda magnezyum arttığında (hipermagnezemi), tübüller lümeni terk etmesi gereken kalsiyumun önüne fizyolojik bir blokaj kurar ve kalsiyum atılımını zorunlu olarak artırır. PTH sekresyonu, alkaloz, D3 vitamini ve ESS azalması ise idrarda kalsiyum tutucu (reabsorbe edici) faktörlerdir.

---

