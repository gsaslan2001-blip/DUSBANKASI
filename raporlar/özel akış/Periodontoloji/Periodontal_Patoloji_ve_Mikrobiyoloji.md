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

**Soru 1 (ID: 284b6782-f9fd-49b3-8232-0bd51f494c44)**
Soru Kökü: İmmün sistem hücreleri, patojenleri tanımak için Toll-like reseptörleri (TLR) kullanır. Klasik olarak Gram negatif bakterilerin lipopolisakkaritleri TLR-4'ü uyarırken, Gram pozitif bakterilerin yapıları TLR-2'yi uyarır. Aşağıdaki periodontal patojenlerden hangisi, sahip olduğu atipik yapısı nedeniyle hem TLR-2 hem de TLR-4 üzerinden konak hücresini uyarabilme yeteneğine sahiptir?
Doğru Şık (B): Porphyromonas gingivalis
Açıklama: P. gingivalis, sahip olduğu atipik LPS yapısı nedeniyle diğer klasik Gram negatif bakterilerin aksine sadece TLR-4'ü değil, aynı zamanda TLR-2'yi de uyarabilen spesifik bir patojendir. Diğer şıklardaki gram negatif periodontal patojenler (A. actinomycetemcomitans vb.) standart olarak TLR-4 yolağını aktive ederler.

**Soru 2 (ID: 332273f3-278f-4cfb-b102-3c90e67aa7a7)**
Soru Kökü: Standart Gram negatif bakteriler genel olarak bağışıklık hücrelerindeki TLR-4 reseptörünü uyarırken, atipik bir lipopolisakkarit (LPS) yapısına sahip olduğu için hem TLR-2 hem de TLR-4 üzerinden eşzamanlı sinyal yolağı oluşturabilen majör periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis, atipik bir LPS yapısına sahiptir; bu farklı moleküler yapı sayesinde konağın immün sistemindeki hem TLR-2 hem de TLR-4 reseptörlerini aktive edebilir. Bu durum bakteriye konak immün yanıtını (sitokin profilini) kendi lehine manipüle etme yeteneği sağlayan eşsiz bir virülans faktörüdür.

---

### ÇİFT 2 (Benzerlik: 0.85)

**Soru 1 (ID: 3385aebf-49b9-4315-bfa0-f744b162aa6a)**
Soru Kökü: Alveolar kemik rezorpsiyonunu düzenleyen RANK-RANKL etkileşimi, periodontal enflamasyon sırasında salınan çeşitli konak mediatörleri tarafından regüle edilir. Aşağıdaki sitokinlerden hangisi osteoklastogenezi stimüle eden (pro-osteoklastojenik) faktörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-10
Açıklama: IL-1, IL-6, TNF, IL-17 ve PGE-2 osteoklastogenezi aktive eden (osteoklastojenik) mediatörlerdir. Buna karşın İnterlökin-10 (IL-10), makrofaj aktivasyonunu baskılayan ve anti-inflamatuar / anti-osteoklastojenik özellikte olan temel bir sitokindir.

**Soru 2 (ID: 9549cd10-a3c6-4266-b9c5-03c7655afc57)**
Soru Kökü: Aşağıdaki sitokinlerden hangisi periodontal dokularda inflamasyonu baskılayarak doku tamirini teşvik eden ve anti-osteoklastojenik etki gösteren mediatörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-18
Açıklama: İnterlökin-18 nötrofil aktivasyonuna katılan pro-inflamatuar bir sitokindir. IL-4, IL-10, IL-13 ve TGF-beta ise inflamasyonu baskılayan, Th2 yanıtını destekleyen ve kemik rezorpsiyonunu durduran temel anti-inflamatuar/anti-osteoklastojenik sitokinlerdir. Patojenik mikroçevrede bu anti-inflamatuar mediatörlerin yetersizliği yıkımın devam etmesine neden olur.

---

### ÇİFT 3 (Benzerlik: 0.84)

**Soru 1 (ID: 6955bea8-29d5-4c11-9295-b6ae9b09f2b1)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik aktiviteyi durdurarak yıkımı sınırlandırmakla görevli anti-osteoklastojenik sitokinler bulunur. Aşağıdakilerden hangisi bu inhibitör sitokinlerden biri **değildir**?
Doğru Şık (C): İnterlökin-6
Açıklama: İnterlökin-6 (IL-6), IL-1 beta ve TNF-alfa gibi proinflamatuar ve kemik rezorpsiyonunu stimüle eden (osteoklastojenik) sitokinler arasında yer alır. IL-4, IL-10, IL-13 ve İnterferon-gama ise kemik yıkımını baskılayan ve enflamasyonu sınırlandıran anti-osteoklastojenik sitokinlerdir.

**Soru 2 (ID: 9549cd10-a3c6-4266-b9c5-03c7655afc57)**
Soru Kökü: Aşağıdaki sitokinlerden hangisi periodontal dokularda inflamasyonu baskılayarak doku tamirini teşvik eden ve anti-osteoklastojenik etki gösteren mediatörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-18
Açıklama: İnterlökin-18 nötrofil aktivasyonuna katılan pro-inflamatuar bir sitokindir. IL-4, IL-10, IL-13 ve TGF-beta ise inflamasyonu baskılayan, Th2 yanıtını destekleyen ve kemik rezorpsiyonunu durduran temel anti-inflamatuar/anti-osteoklastojenik sitokinlerdir. Patojenik mikroçevrede bu anti-inflamatuar mediatörlerin yetersizliği yıkımın devam etmesine neden olur.

---

### ÇİFT 4 (Benzerlik: 0.82)

**Soru 1 (ID: 524fbc2f-9609-4780-a361-1d50f371725b)**
Soru Kökü: Periodontal hastalık seyrinde inflamatuar cevabı sınırlayan moleküllerin dengesi büyük önem taşır. Aşağıdakilerden hangisi makrofaj kaynaklı doku yıkımını yavaşlatan ve antienflamatuar/baskılayıcı etkinlik gösteren sitokinlerden biri **değildir**?
Doğru Şık (E): İnterlökin-1 alfa
Açıklama: IL-1 alfa, IL-1 beta ile birlikte inflamasyonu başlatan, endotel hücrelerinde selektin ekspresyonunu artıran ve kemik rezorpsiyonunu şiddetle uyaran en güçlü pro-inflamatuar (osteoklast aktive edici) sitokinlerden biridir. TGF-beta, IL-10, IL-1Ra ve IL-13 ise anti-inflamatuar savunma ordusunu oluştururlar.

**Soru 2 (ID: 9549cd10-a3c6-4266-b9c5-03c7655afc57)**
Soru Kökü: Aşağıdaki sitokinlerden hangisi periodontal dokularda inflamasyonu baskılayarak doku tamirini teşvik eden ve anti-osteoklastojenik etki gösteren mediatörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-18
Açıklama: İnterlökin-18 nötrofil aktivasyonuna katılan pro-inflamatuar bir sitokindir. IL-4, IL-10, IL-13 ve TGF-beta ise inflamasyonu baskılayan, Th2 yanıtını destekleyen ve kemik rezorpsiyonunu durduran temel anti-inflamatuar/anti-osteoklastojenik sitokinlerdir. Patojenik mikroçevrede bu anti-inflamatuar mediatörlerin yetersizliği yıkımın devam etmesine neden olur.

---

### ÇİFT 5 (Benzerlik: 0.82)

**Soru 1 (ID: 3385aebf-49b9-4315-bfa0-f744b162aa6a)**
Soru Kökü: Alveolar kemik rezorpsiyonunu düzenleyen RANK-RANKL etkileşimi, periodontal enflamasyon sırasında salınan çeşitli konak mediatörleri tarafından regüle edilir. Aşağıdaki sitokinlerden hangisi osteoklastogenezi stimüle eden (pro-osteoklastojenik) faktörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-10
Açıklama: IL-1, IL-6, TNF, IL-17 ve PGE-2 osteoklastogenezi aktive eden (osteoklastojenik) mediatörlerdir. Buna karşın İnterlökin-10 (IL-10), makrofaj aktivasyonunu baskılayan ve anti-inflamatuar / anti-osteoklastojenik özellikte olan temel bir sitokindir.

**Soru 2 (ID: 6955bea8-29d5-4c11-9295-b6ae9b09f2b1)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik aktiviteyi durdurarak yıkımı sınırlandırmakla görevli anti-osteoklastojenik sitokinler bulunur. Aşağıdakilerden hangisi bu inhibitör sitokinlerden biri **değildir**?
Doğru Şık (C): İnterlökin-6
Açıklama: İnterlökin-6 (IL-6), IL-1 beta ve TNF-alfa gibi proinflamatuar ve kemik rezorpsiyonunu stimüle eden (osteoklastojenik) sitokinler arasında yer alır. IL-4, IL-10, IL-13 ve İnterferon-gama ise kemik yıkımını baskılayan ve enflamasyonu sınırlandıran anti-osteoklastojenik sitokinlerdir.

---

### ÇİFT 6 (Benzerlik: 0.81)

**Soru 1 (ID: dd122fe9-1ca6-42e9-9832-72096bf7d5d8)**
Soru Kökü: Kırk yaşında kadın hasta, radyografik olarak alveol kemik kaybı tespit edilen aktif periodontitis teşhisi almıştır. Bu hastanın dişeti oluğu sıvısında (DOS) saptanan immünglobülin G (IgG) seviyesinin, hastanın sistemik kan serumundaki IgG seviyesine göre durumu aşağıdakilerden hangisinde doğru tanımlanmıştır?
Doğru Şık (C): Serumdaki seviyesinden çok daha yüksek düzeylere çıkmıştır.
Açıklama: Sağlıklı bireylerde DOS içindeki IgG seviyesi serumun yarısı civarındayken, periodontal hastalık durumunda yerleşmiş lezyondaki yoğun plazma hücresi (IgG üreten hücreler) infiltrasyonu nedeniyle lokal IgG sentezi artar ve DOS IgG seviyesi serumdakini fazlasıyla aşar. Bu lokal bir immün adaptasyon mekanizmasıdır.

**Soru 2 (ID: f5aca59e-da1d-4cad-964e-dc51824da145)**
Soru Kökü: Dişeti oluğu sıvısı (DOS) içeriği sağlıklı ve hastalıklı durumlarda farklılık gösterir. Periodontal olarak sağlıklı bir bireyin DOS'undaki İmmünglobulin G (IgG) yoğunluğunun, hastanın kendi kan serumundaki IgG yoğunluğuna oranı ile periodontitis varlığındaki durumu aşağıdakilerin hangisinde doğru karşılaştırılmıştır?
Doğru Şık (B): Sağlıklı durumda serumun yarısı kadardır, hastalıkta ise serumdan çok daha yüksek düzeylere çıkar.
Açıklama: Sağlıklı bireylerde DOS içindeki IgG yoğunluğu düşük olup serumdaki seviyenin yaklaşık yarısı kadardır. Ancak periodontal enflamasyon ve antijen uyarımı başladığında (hastalık sırasında), lokal plazma hücrelerinin aktivasyonu sonucu DOS'daki IgG miktarı dramatik şekilde artarak serum seviyelerinin çok üzerine çıkar.

---

### ÇİFT 7 (Benzerlik: 0.80)

**Soru 1 (ID: 524fbc2f-9609-4780-a361-1d50f371725b)**
Soru Kökü: Periodontal hastalık seyrinde inflamatuar cevabı sınırlayan moleküllerin dengesi büyük önem taşır. Aşağıdakilerden hangisi makrofaj kaynaklı doku yıkımını yavaşlatan ve antienflamatuar/baskılayıcı etkinlik gösteren sitokinlerden biri **değildir**?
Doğru Şık (E): İnterlökin-1 alfa
Açıklama: IL-1 alfa, IL-1 beta ile birlikte inflamasyonu başlatan, endotel hücrelerinde selektin ekspresyonunu artıran ve kemik rezorpsiyonunu şiddetle uyaran en güçlü pro-inflamatuar (osteoklast aktive edici) sitokinlerden biridir. TGF-beta, IL-10, IL-1Ra ve IL-13 ise anti-inflamatuar savunma ordusunu oluştururlar.

**Soru 2 (ID: 6955bea8-29d5-4c11-9295-b6ae9b09f2b1)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik aktiviteyi durdurarak yıkımı sınırlandırmakla görevli anti-osteoklastojenik sitokinler bulunur. Aşağıdakilerden hangisi bu inhibitör sitokinlerden biri **değildir**?
Doğru Şık (C): İnterlökin-6
Açıklama: İnterlökin-6 (IL-6), IL-1 beta ve TNF-alfa gibi proinflamatuar ve kemik rezorpsiyonunu stimüle eden (osteoklastojenik) sitokinler arasında yer alır. IL-4, IL-10, IL-13 ve İnterferon-gama ise kemik yıkımını baskılayan ve enflamasyonu sınırlandıran anti-osteoklastojenik sitokinlerdir.

---

### ÇİFT 8 (Benzerlik: 0.80)

**Soru 1 (ID: 66c72aca-47b2-411f-bffa-485338526883)**
Soru Kökü: Kemik rezorpsiyonunun çok şiddetli olduğu bir periodontitis hastasında immünopatolojik dengenin Th2 (T-helper 2) hücreleri lehine bozulduğu saptanmıştır. Hastalığın ilerlemesini inceleyen 'Th1/Th2 Modeli' bağlamında, stabilitenin bozularak doku yıkımına zemin hazırlayan temel süreç aşağıdakilerden hangisidir?
Doğru Şık (C): Zayıf doğal bağışıklık sonucu IL-12'nin azalarak Th2 ve yoğun B hücre/plazma aktivasyonuna yol açması
Açıklama: Th1/Th2 konseptine göre; güçlü doğal immün yanıt IL-12'yi artırarak koruyucu ve stabil bir Th1 infiltrasyonu sağlar. Ancak bağışıklık yanıtı zayıfladığında IL-12 üretimi düşer, bu durum sistemin Th2 yanıtına kaymasına yol açar. Th2 ortamında artan plazma hücreleri ve B hücreleri IL-1 aracılığıyla agresif periodontal lezyonlara ve yıkıma neden olur.

**Soru 2 (ID: 9e300847-7daf-4b94-b451-3f01984ce183)**
Soru Kökü: T-Helper 1 (Th1) ve T-Helper 2 (Th2) lenfositlerinin periodontal hastalık patogenezi üzerindeki dinamik etkileşimi incelendiğinde, bu iki yolak arasındaki denge ile hastalığın klinik ilerlemesi arasındaki ilişki aşağıdakilerin hangisinde doğru tanımlanmıştır?
Doğru Şık (C): Güçlü bir doğal bağışıklık sonucu gelişen Th1 yanıtı koruyucu olup stabil bir lezyon sağlarken, Th2 yanıtı yıkıcı periodontal lezyonla ilişkilidir.
Açıklama: Periodontal ilerleme konseptine göre; güçlü doğal bağışıklık IL-12'yi artırır, bu Th1'e kayarak hücresel bağışıklığı ve 'stabil' koruyucu lezyonu oluşturur. Zayıf doğal yanıtta ise IL-12 azalır, süreç Th2'ye kayar ve B hücre aktivasyonu (IL-1 aracılı) yıkıcı, ilerleyen periodontal lezyona neden olur.

---

### ÇİFT 9 (Benzerlik: 0.80)

**Soru 1 (ID: 3f736528-783c-418a-860a-528484cfcf86)**
Soru Kökü: Porphyromonas gingivalis, periodontitisin progresyonunda 'keystone' patojen olarak tanımlanır ve konağın immün savunmasını manipüle etme yeteneğine sahiptir. Bu bakterinin hücre içi invazyon yeteneğini kullanarak, epitel hücrelerinden salınımını doğrudan inhibe ettiği ve böylece nötrofil kemotaksisini felce uğrattığı molekül aşağıdakilerden hangisidir?
Doğru Şık (C): İnterlökin-8 (CXCL-8)
Açıklama: P. gingivalis, epitel hücrelerini enfekte edip içerisine invaze olduğunda lokal bir immün paralizi (felç) yaratmak için IL-8 (nötrofil kemotaktik faktör) sekresyonunu durdurur. Bu sayede birleşim epiteline nötrofil göçü engellenir, bakteri kendi yaşam alanı etrafında fagositozdan uzak güvenli bir disbiyotik bölge oluşturur.

**Soru 2 (ID: e912fd8f-85c3-40c3-8597-2e19c8359f99)**
Soru Kökü: Porphyromonas gingivalis, periodontal cepteki lokal bağışıklık yanıtını modifiye ederek hayatta kalma yeteneğine sahiptir. Bu bakterinin epitel hücrelerinden salınımını inhibe ederek lökositlerin transepitelyal migrasyonunu engellediği ve PMNL kaynaklı mikroorganizma ölümünü durdurduğu kemokin aşağıdakilerden hangisidir?
Doğru Şık (E): İnterlökin-8 (IL-8 / CXCL8)
Açıklama: IL-8, nötrofillerin enfeksiyon bölgesine kemotaksisini sağlayan temel kemokindir ve P. gingivalis epitelden bu molekülün salınımını engelleyerek nötrofil göçünü durdurur. TNF-alfa ve IL-1b proinflamatuar stokinler olup doğrudan PMNL kemotaksisine değil, makrofaj aktivasyonu ve kemik yıkımına aracılık ederler. Bu mekanizma, bakterinin konak savunmasını atlatmasındaki kilit stratejilerden biridir.

---

### ÇİFT 10 (Benzerlik: 0.79)

**Soru 1 (ID: 284b6782-f9fd-49b3-8232-0bd51f494c44)**
Soru Kökü: İmmün sistem hücreleri, patojenleri tanımak için Toll-like reseptörleri (TLR) kullanır. Klasik olarak Gram negatif bakterilerin lipopolisakkaritleri TLR-4'ü uyarırken, Gram pozitif bakterilerin yapıları TLR-2'yi uyarır. Aşağıdaki periodontal patojenlerden hangisi, sahip olduğu atipik yapısı nedeniyle hem TLR-2 hem de TLR-4 üzerinden konak hücresini uyarabilme yeteneğine sahiptir?
Doğru Şık (B): Porphyromonas gingivalis
Açıklama: P. gingivalis, sahip olduğu atipik LPS yapısı nedeniyle diğer klasik Gram negatif bakterilerin aksine sadece TLR-4'ü değil, aynı zamanda TLR-2'yi de uyarabilen spesifik bir patojendir. Diğer şıklardaki gram negatif periodontal patojenler (A. actinomycetemcomitans vb.) standart olarak TLR-4 yolağını aktive ederler.

**Soru 2 (ID: 96d1e1b3-e459-4798-9b4f-04bb7638af3f)**
Soru Kökü: Periodontopatogen Gram negatif bakterilerin dış membranında bulunan lipopolisakkaritler (LPS), konağın doğal bağışıklık sistemi tarafından tanınarak proinflamatuar kaskadı başlatır. P. gingivalis istisnası hariç tutulduğunda, klasik Gram negatif LPS tabakası immün sistem hücrelerinde spesifik olarak hangi reseptörü uyarır?
Doğru Şık (D): TLR-4
Açıklama: Gram negatif bakterilerin dış membranındaki endotoksinler (LPS), makrofaj ve epitel hücrelerindeki Toll-like reseptör 4'ü (TLR-4) aktive eder. Gram pozitif bakterilerin hücre duvarı bileşenleri ise TLR-2'yi uyarır. P. gingivalis atipik LPS yapısı nedeniyle her iki reseptörü (TLR-2 ve TLR-4) aktive edebilen özgün bir patojendir.

---

### ÇİFT 11 (Benzerlik: 0.79)

**Soru 1 (ID: 5834eee2-ef5a-46b8-94a2-f507569d908b)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik rezorpsiyon çeşitli mediatörler tarafından aktive edilmektedir. Aşağıdakilerden hangisi osteoklastları uyararak kemik rezorpsiyonunu stimüle eden faktörlerden biri **değildir**?
Doğru Şık (D): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak onun RANK reseptörüyle etkileşimini bloke eden ve böylece osteoklastogenezi inhibe eden koruyucu bir tuzak (decoy) reseptördür. LIF, Oncostatin M, bradikinin ve trombin ise IL-1 ve TNF-alfa ile birlikte osteoklastik aktiviteyi uyararak yıkıma katkıda bulunurlar.

**Soru 2 (ID: 6955bea8-29d5-4c11-9295-b6ae9b09f2b1)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik aktiviteyi durdurarak yıkımı sınırlandırmakla görevli anti-osteoklastojenik sitokinler bulunur. Aşağıdakilerden hangisi bu inhibitör sitokinlerden biri **değildir**?
Doğru Şık (C): İnterlökin-6
Açıklama: İnterlökin-6 (IL-6), IL-1 beta ve TNF-alfa gibi proinflamatuar ve kemik rezorpsiyonunu stimüle eden (osteoklastojenik) sitokinler arasında yer alır. IL-4, IL-10, IL-13 ve İnterferon-gama ise kemik yıkımını baskılayan ve enflamasyonu sınırlandıran anti-osteoklastojenik sitokinlerdir.

---

### ÇİFT 12 (Benzerlik: 0.78)

**Soru 1 (ID: d4803cd8-ff7a-4b21-bb08-610cfcd64e23)**
Soru Kökü: Aşağıdakilerden hangisi klinik olarak sağlıklı diş etinde bakteri-konak dengesinin korunmasını sağlayan lokal fiziksel savunma mekanizmalarından biridir?
Doğru Şık (B): Birleşim ve sulkus epitel hücrelerinin yüzeye dökülmesi
Açıklama: Birleşim ve sulkus epitelinin yüzey epitel hücrelerinin sürekli dökülmesi (deskuamasyon), bakterilerin mekanik olarak uzaklaştırılmasını sağlayan temel bir savunma mekanizmasıdır. Epitel hücre bağlantılarının genişlemesi ve lenfosit infiltrasyonu sağlıklı dokunun değil, inflamasyonun başlangıç bulgularıdır. P. intermedia artışı ise klinik olarak patolojik bir duruma işaret eder.

**Soru 2 (ID: de7c8622-e4d5-433d-ae66-f6020637436d)**
Soru Kökü: Sağlıklı periodontal dokularda bakteri biyofilminin invazyonunu engelleyen doğal lokal savunma mekanizmalarıyla ilgili aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (B): Birleşim epitelindeki hücrelerin sürekli yüzeye doğru dökülmesi mekanik temizlik sağlar.
Açıklama: Sağlıklı dokuda epitel hücrelerinin yüzeye doğru sürekli dökülmesi (deskuamasyon), hücreye tutunan bakterilerin fiziksel olarak uzaklaştırılmasını sağlayan çok güçlü bir mekanizmadır. DOS akışı koronal yöndedir (dışarıya), apikale akmaz. Ağız ortamı hiçbir zaman steril değildir ve sağlıklı dokuda bağ dokusunda baskın hücre grubu nötrofillerdir, plazma hücreleri değil.

---

### ÇİFT 13 (Benzerlik: 0.78)

**Soru 1 (ID: 3385aebf-49b9-4315-bfa0-f744b162aa6a)**
Soru Kökü: Alveolar kemik rezorpsiyonunu düzenleyen RANK-RANKL etkileşimi, periodontal enflamasyon sırasında salınan çeşitli konak mediatörleri tarafından regüle edilir. Aşağıdaki sitokinlerden hangisi osteoklastogenezi stimüle eden (pro-osteoklastojenik) faktörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-10
Açıklama: IL-1, IL-6, TNF, IL-17 ve PGE-2 osteoklastogenezi aktive eden (osteoklastojenik) mediatörlerdir. Buna karşın İnterlökin-10 (IL-10), makrofaj aktivasyonunu baskılayan ve anti-inflamatuar / anti-osteoklastojenik özellikte olan temel bir sitokindir.

**Soru 2 (ID: 524fbc2f-9609-4780-a361-1d50f371725b)**
Soru Kökü: Periodontal hastalık seyrinde inflamatuar cevabı sınırlayan moleküllerin dengesi büyük önem taşır. Aşağıdakilerden hangisi makrofaj kaynaklı doku yıkımını yavaşlatan ve antienflamatuar/baskılayıcı etkinlik gösteren sitokinlerden biri **değildir**?
Doğru Şık (E): İnterlökin-1 alfa
Açıklama: IL-1 alfa, IL-1 beta ile birlikte inflamasyonu başlatan, endotel hücrelerinde selektin ekspresyonunu artıran ve kemik rezorpsiyonunu şiddetle uyaran en güçlü pro-inflamatuar (osteoklast aktive edici) sitokinlerden biridir. TGF-beta, IL-10, IL-1Ra ve IL-13 ise anti-inflamatuar savunma ordusunu oluştururlar.

---

### ÇİFT 14 (Benzerlik: 0.78)

**Soru 1 (ID: 3385aebf-49b9-4315-bfa0-f744b162aa6a)**
Soru Kökü: Alveolar kemik rezorpsiyonunu düzenleyen RANK-RANKL etkileşimi, periodontal enflamasyon sırasında salınan çeşitli konak mediatörleri tarafından regüle edilir. Aşağıdaki sitokinlerden hangisi osteoklastogenezi stimüle eden (pro-osteoklastojenik) faktörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-10
Açıklama: IL-1, IL-6, TNF, IL-17 ve PGE-2 osteoklastogenezi aktive eden (osteoklastojenik) mediatörlerdir. Buna karşın İnterlökin-10 (IL-10), makrofaj aktivasyonunu baskılayan ve anti-inflamatuar / anti-osteoklastojenik özellikte olan temel bir sitokindir.

**Soru 2 (ID: 5834eee2-ef5a-46b8-94a2-f507569d908b)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik rezorpsiyon çeşitli mediatörler tarafından aktive edilmektedir. Aşağıdakilerden hangisi osteoklastları uyararak kemik rezorpsiyonunu stimüle eden faktörlerden biri **değildir**?
Doğru Şık (D): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak onun RANK reseptörüyle etkileşimini bloke eden ve böylece osteoklastogenezi inhibe eden koruyucu bir tuzak (decoy) reseptördür. LIF, Oncostatin M, bradikinin ve trombin ise IL-1 ve TNF-alfa ile birlikte osteoklastik aktiviteyi uyararak yıkıma katkıda bulunurlar.

---

### ÇİFT 15 (Benzerlik: 0.78)

**Soru 1 (ID: 00080b31-fc3d-476a-81ef-2fdbc04546ff)**
Soru Kökü: Diş plağı biyofilminin gelişim sürecinde erken (birincil) kolonize olan mikroorganizmalar ile geç (ikincil) kolonize olan periodontal patojenler arasında birleşmeyi sağlayan, ekosistemde 'köprü bakterisi' olarak görev yapan tür aşağıdakilerden hangisidir?
Doğru Şık (C): Fusobacterium nucleatum
Açıklama: Koagregasyon mekanizmasında F. nucleatum, hem erken kolonize olanlarla (örn. S. gordonii) hem de geç kolonize olan zorunlu anaeroplarla (örn. P. gingivalis) bağlanabildiği için biyofilm matürasyonunda kritik bir 'köprü' rolü üstlenir. Diğer geç kolonize olan bakterilerin birçoğu F. nucleatum ortamda yoksa diş plağına katılamaz.

**Soru 2 (ID: eaac7b6a-dbc7-493f-83a8-f3e4bf864197)**
Soru Kökü: Yirmi beş yaşındaki hastanın subgingival plak örneğinin analizinde, Porphyromonas gingivalis'in ortamda bulunmasına rağmen plak biyofilm iskeletine tutunamadığı ve planktonik formda kaldığı tespit edilmiştir. Bu defektif kolonizasyon sürecinde, erken kolonizörler ile geç kolonizörler arasında 'köprü bakterisi' olarak iş gören hangi mikroorganizmanın plaktaki eksikliği **en olasıdır**?
Doğru Şık (B): Fusobacterium nucleatum
Açıklama: Fusobacterium nucleatum, hem erken kolonize olan streptokoklar ile hem de geç kolonize olan zorunlu anaeroblarla koagregasyon yapabilen yegane 'köprü bakterisi'dir. P. gingivalis gibi geç kolonizör anaeroblar, F. nucleatum ortamda yoksa dişe veya erken kolonizörlere tutunamazlar ve planktonik fazda kalarak elimine olurlar.

---

### ÇİFT 16 (Benzerlik: 0.78)

**Soru 1 (ID: 332273f3-278f-4cfb-b102-3c90e67aa7a7)**
Soru Kökü: Standart Gram negatif bakteriler genel olarak bağışıklık hücrelerindeki TLR-4 reseptörünü uyarırken, atipik bir lipopolisakkarit (LPS) yapısına sahip olduğu için hem TLR-2 hem de TLR-4 üzerinden eşzamanlı sinyal yolağı oluşturabilen majör periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis, atipik bir LPS yapısına sahiptir; bu farklı moleküler yapı sayesinde konağın immün sistemindeki hem TLR-2 hem de TLR-4 reseptörlerini aktive edebilir. Bu durum bakteriye konak immün yanıtını (sitokin profilini) kendi lehine manipüle etme yeteneği sağlayan eşsiz bir virülans faktörüdür.

**Soru 2 (ID: 96d1e1b3-e459-4798-9b4f-04bb7638af3f)**
Soru Kökü: Periodontopatogen Gram negatif bakterilerin dış membranında bulunan lipopolisakkaritler (LPS), konağın doğal bağışıklık sistemi tarafından tanınarak proinflamatuar kaskadı başlatır. P. gingivalis istisnası hariç tutulduğunda, klasik Gram negatif LPS tabakası immün sistem hücrelerinde spesifik olarak hangi reseptörü uyarır?
Doğru Şık (D): TLR-4
Açıklama: Gram negatif bakterilerin dış membranındaki endotoksinler (LPS), makrofaj ve epitel hücrelerindeki Toll-like reseptör 4'ü (TLR-4) aktive eder. Gram pozitif bakterilerin hücre duvarı bileşenleri ise TLR-2'yi uyarır. P. gingivalis atipik LPS yapısı nedeniyle her iki reseptörü (TLR-2 ve TLR-4) aktive edebilen özgün bir patojendir.

---

### ÇİFT 17 (Benzerlik: 0.77)

**Soru 1 (ID: 6ce73a6c-1b77-4942-954b-2f1274c054a3)**
Soru Kökü: Otuz iki yaşında kadın hasta, yoğun plak birikimi ve dişeti oluğundan eksüda akışı bulgularıyla değerlendiriliyor. Dişeti oluğu sıvısı analizinde transepitelyal göçü tamamlamış yoğun polimorf nükleer lökosit (PMNL) saptanıyor. Bağ dokusunda ve junctional epitelde üretilerek bu spesifik nötrofilik infiltrasyonu sağlayan birincil kemotaktik ajan aşağıdakilerden hangisidir?
Doğru Şık (B): CXCL-8 (IL-8)
Açıklama: CXCL-8 (IL-8), birleşim epiteli tarafından salgılanan ve nötrofillerin enfeksiyon bölgesine spesifik kemotaksisini sağlayan ana kemokindir. P. gingivalis gibi bazı patojenler virülans mekanizması olarak epitelden IL-8 salınımını inhibe edip nötrofil göçünü felce uğratarak doku invazyonu yaparlar. Lipoksin A4 ise nötrofil infiltrasyonunu durdurarak inflamasyonu çözer.

**Soru 2 (ID: e6294d2b-8c92-47cd-96b6-db53bf7470de)**
Soru Kökü: Elli yaşında kadın hasta, alt çene anterior bölgede dişetlerinde renk değişikliği ve şişlik şikayetiyle kliniğe başvuruyor. Yapılan histolojik incelemede, inflame bağ dokusuna yoğun bir T lenfosit migrasyonu olduğu gözleniyor. Bu spesifik lenfosit göçünü koordine eden temel kemokin aşağıdakilerden hangisidir?
Doğru Şık (C): CXCL-10
Açıklama: CXCL-10, özellikle T lenfositlerin inflame periodontal dokuya spesifik migrasyonundan sorumlu kemokindir. CXCL-8 (IL-8) nötrofilleri çekerken, CCL-2 monositleri hedefler. Kemokinlerin bu seçici reseptör affinitesi, lezyonun erken veya yerleşmiş evrelerindeki baskın hücre tipini belirler.

---

### ÇİFT 18 (Benzerlik: 0.77)

**Soru 1 (ID: a903424e-db33-4bb9-b978-70d5bbc5469f)**
Soru Kökü: Periodontal ceplerdeki aktif viral enfeksiyonların lokal konak savunmasını bozduğu ve periodontal patojenlerin (özellikle P. gingivalis ve A. actinomycetemcomitans) çoğalmasını artırdığı saptanmıştır. Bu bağlamda, periodonsiyumdaki lokal T lenfositlerini ve monosit/makrofaj serisi hücrelerini doğrudan enfekte ederek immün yanıtı modifiye eden virüs aşağıdakilerden hangisidir?
Doğru Şık (C): Human cytomegalovirüs
Açıklama: Human cytomegalovirüs (hCMV) periodontal dokulardaki savunma mekanizmasını doğrudan hedef alır. Periodonsiyuma göç eden monositleri, makrofajları ve T lenfositlerini enfekte eder. EBV-1 ise periodontal B lenfositlerini hedefler. hCMV'nin makrofajlarda oluşturduğu bu disfonksiyon, lokal savunmayı düşürerek anaerob periodontal patojenlerin doku invazyonunu katlanarak artırır.

**Soru 2 (ID: e11718fe-b805-4271-adcc-02db0db770aa)**
Soru Kökü: Periodontal hastalıkların ilerlemesinde bazı uçuk virüslerinin immün hücreleri enfekte ederek konak savunmasını bozduğu gösterilmiştir. Epstein-Barr virüs (EBV-1) ve Sitomegalovirüs'ün (CMV) periodontitis lezyonlarında sırasıyla primer olarak enfekte ettiği hücre grupları aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (A): B lenfositler – Monosit/Makrofajlar
Açıklama: Periodontal lezyonlarda virüs reaktivasyonlarına bakıldığında, Epstein-Barr virüsü (EBV-1) başlıca periodontal B lenfositlerini enfekte ederken, Sitomegalovirüs (CMV) periodontal monositler, makrofajlar ve T lenfositlerini enfekte eder. Bu viral enfeksiyonlar lokal periodontal savunmayı bozarak bakteriyel patojenlerin virülansını artırır.

---

### ÇİFT 19 (Benzerlik: 0.77)

**Soru 1 (ID: 074dc988-7a06-415e-8b61-ce94436d9c49)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, birinci büyük azı dişlerinde ve kesicilerde lokalize şiddetli kemik kaybı ile karakterize Lokalize Agresif Periodontitis (LAP) teşhisi almıştır. Hastadan alınan örnekte saptanan spesifik patojenin, konak fagositoz mekanizmasını LFA-1 adezinlerine bağlanarak inhibe ettiği ve lökositleri öldürdüğü bilinmektedir. Bu majör virülans faktörü aşağıdakilerden hangisidir?
Doğru Şık (C): Lökotoksin
Açıklama: A. actinomycetemcomitans'ın (Aa) en önemli virülans faktörü, lökositlerin yüzeyindeki LFA-1 reseptörlerine bağlanarak onları tahrip eden lökotoksin (lökosidin) molekülüdür. Gingipain P. gingivalis'e, dentilisin ise T. denticola'ya ait bir proteazdır. Lökositlerin fonksiyon dışı bırakılması, LAP'taki hızlı doku yıkımının primer nedenidir.

**Soru 2 (ID: 25a32fd1-0aea-4b4d-87e2-c044719b6391)**
Soru Kökü: Lokalize agresif periodontitis (LAP) etiyolojisinde primer rol oynayan Aggregatibacter actinomycetemcomitans'ın temel virülans faktörü olan lökotoksin, konak fagositer hücrelerini spesifik olarak hangi yüzey yapısına bağlanarak öldürür?
Doğru Şık (B): Lökosit fonksiyonu ile ilişkili antijen (LFA-1)
Açıklama: A. actinomycetemcomitans lökotoksini, nötrofil ve makrofajların yüzeyindeki LFA-1 (lökosit fonksiyonu ile ilişkili antijen) moleküllerine bağlanarak bu fagositik hücrelerin ölümüne (nonoksidatif liziz) neden olur. ICAM-1, lökositlerin trans-epitelyal göçü için bağlandığı epitel reseptörü olup lökotoksinin doğrudan hedefi değildir.

---

### ÇİFT 20 (Benzerlik: 0.77)

**Soru 1 (ID: 0b4981e2-9762-47e0-a599-64c29df589be)**
Soru Kökü: Bir hastanın diş eti dokusu histopatolojik olarak incelendiğinde 'ilerlemiş lezyon' teşhisi konulmuştur. Periodontal cep oluşumunu da barındıran bu lezyon evresini, önceki lezyonlardan (kronik gingivitis) ayıran en spesifik ve geri dönüşümsüz bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Alveolar kemik kaybı ve birleşim epitelinin cep epiteline dönüşerek apikale göçü
Açıklama: İlerlemiş lezyonun (periodontitisin) gingivitisten (yerleşmiş lezyondan) en önemli klinik ve histopatolojik ayırıcı farkı; alveolar kemik kaybının başlaması, periodontal ligamentin harabiyeti ve birleşim epitelinin kök yüzeyi boyunca apikale göç ederek cep epiteline dönüşmesidir. Eritem, sirküler lif kaybı ve artan DOS erken/yerleşmiş lezyonlarda da tipiktir.

**Soru 2 (ID: ad52c0a9-9e27-457a-8fc5-3f2dd0355485)**
Soru Kökü: Aşağıdakilerden hangisi plak birikimini takiben 2-3 hafta içinde gelişen 'yerleşmiş lezyon' (kronik gingivitis) evresinin histopatolojik bulgularından biri **değildir**?
Doğru Şık (A): Alveolar kemikte osteoklastik aktivitenin başlaması
Açıklama: Yerleşmiş lezyon evresinde plazma hücreleri baskındır, immünglobulinler üretilir ve birleşim epiteli cep epiteline dönüşür; ancak kemik kaybı henüz başlamamıştır. Alveolar kemik ve periodontal ligamentte yıkımın başlaması, yerleşmiş lezyonun 'ilerlemiş lezyona' (periodontitis) dönüştüğünü gösteren anahtar ayırt edici bulgudur.

---

### ÇİFT 21 (Benzerlik: 0.76)

**Soru 1 (ID: 7ac0de71-2deb-4406-882e-637b0eee6770)**
Soru Kökü: Biyofilm içindeki bakteriler arasında gözlenen 'quorum sensing' sinyal sistemi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Farklı türlerin koagregasyonunu başlatan primer immünolojik aglütinasyon köprüsüdür.
Açıklama: Quorum sensing fiziksel veya immünolojik bir tutunma/aglütinasyon köprüsü değildir; mikroorganizmaların kimyasal sinyal molekülleri salgılayarak sayısal yoğunluklarını (quorum) algıladıkları ve buna göre patojenite veya direnç genlerini eksprese ettikleri kimyasal bir iletişim yoludur. Koagregasyon ise tamamen fiziksel tutunma ile ilgilidir.

**Soru 2 (ID: 7c3b8d90-3a33-4da7-b5e0-3ba05f3d570b)**
Soru Kökü: Ağız bakterilerinin birbirleriyle kurduğu iletişim mekanizmaları ile ilgili olarak aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Koagregasyon, konak antikorlarının yönlendirmesiyle hücrelerin çökelmesini sağlayan bir aglütinasyon reaksiyonudur.
Açıklama: Koagregasyon bir immünolojik aglütinasyon reaksiyonu değildir; genetik olarak farklı bakterilerin kendi ürettikleri özel yüzey molekülleri aracılığıyla birbirlerine fiziksel olarak yapışması olayıdır. Konak antikorlarıyla oluşan aglütinasyondan temel olarak ayrılır ve diş plağının 3 boyutlu büyümesinde anahtar fiziksel mekanizmadır.

---

### ÇİFT 22 (Benzerlik: 0.75)

**Soru 1 (ID: be8e3702-191c-44c0-b375-9ab86ba9aae1)**
Soru Kökü: Subgingival mikrobiyota içerisinde metabolik işbirliği hayati bir kolonizasyon faktörüdür. Ağız florasındaki Treponema türlerinin cep içerisinde üreyebilmesi ve canlılığını sürdürebilmesi için diğer bakteriler tarafından üretilmesine zorunlu olarak bağımlı olduğu metabolit aşağıdakilerden hangisidir?
Doğru Şık (C): İsobütirik asit
Açıklama: Treponema türleri üremek için zorunlu olarak isobütirik aside (kısa zincirli bir yağ asidi) bağımlıdırlar. Bu metabolit, Fusobacterium veya Porphyromonas gibi diğer proteolitik anaeropların aminoasit metabolizması son ürünü olarak ortama salınır ve ekolojik gıda zincirinin (metabolik işbirliği) klasik bir örneğini oluşturur.

**Soru 2 (ID: c0bf2fe3-0ac6-45da-9a2a-e99470e56246)**
Soru Kökü: Altmış yaşında erkek hasta inatçı ağız kokusu ve dişetlerinde yoğun kanama şikayetiyle başvuruyor. Karanlık alan mikroskobisi incelemesinde cep sıvısında yoğun miktarda oldukça hareketli, spiral şekilli organizmalar saptanıyor. Subgingival ekosistemde metabolik iş birliğinin bir kanıtı olarak, izole edilen bu türün (Treponema türleri) hayatta kalabilmesi için diğer bakterilerin metabolik son ürünü olan hangi moleküle zorunlu ihtiyacı vardır?
Doğru Şık (D): İzobütirik asit
Açıklama: Spiral şekilli, gram negatif ve oldukça hareketli olan Treponema türleri (örn. T. denticola), beslenme ve üreme için zorunlu olarak diğer plak bakterilerinin aminoasit metabolizması son ürünü olan 'izobütirik aside' bağımlıdır. Bu durum, subgingival mikrobiyotadaki patojenlerin kendi aralarındaki sıkı metabolik sinerjiyi (iş birliğini) kanıtlayan klasik bir örnektir.

---

### ÇİFT 23 (Benzerlik: 0.74)

**Soru 1 (ID: 5834eee2-ef5a-46b8-94a2-f507569d908b)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik rezorpsiyon çeşitli mediatörler tarafından aktive edilmektedir. Aşağıdakilerden hangisi osteoklastları uyararak kemik rezorpsiyonunu stimüle eden faktörlerden biri **değildir**?
Doğru Şık (D): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak onun RANK reseptörüyle etkileşimini bloke eden ve böylece osteoklastogenezi inhibe eden koruyucu bir tuzak (decoy) reseptördür. LIF, Oncostatin M, bradikinin ve trombin ise IL-1 ve TNF-alfa ile birlikte osteoklastik aktiviteyi uyararak yıkıma katkıda bulunurlar.

**Soru 2 (ID: db1d65ac-acca-462d-a0c6-497b3dbdedd8)**
Soru Kökü: Bakteriyel LPS'nin epitel hücreleri, monosit ve makrofajları aktive etmesi sonucu salgılanan ve gingival inflamasyonu başlatan vazoaktif maddeler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak osteoklast aktivasyonunu inhibe eden ve kemik rezorpsiyonunu engelleyen bir konak anti-rezorptif faktörüdür; inflamasyonu başlatan bir vazoaktif madde değildir. TNF-a, IL-1, PGE2 ve interferon ise makrofaj ve epitel hücrelerinden salınarak vazodilatasyona ve kapiller geçirgenlik artışına yol açan temel proinflamatuar mediatörlerdir.

---

### ÇİFT 24 (Benzerlik: 0.74)

**Soru 1 (ID: 3710b7c9-39fc-45b0-956f-6f7c9bb78071)**
Soru Kökü: Kırk yaşında erkek hasta refrakter periodontitis tablosu ile değerlendirilmektedir. Alınan subgingival plak örneğinde toplam mikrobiyal yük düşük olmasına rağmen, spesifik bir patojenin ortamdaki az sayısına karşılık lokal konak inflamatuar yanıtını tamamen kendi lehine çevirdiği ve tüm mikrobiyota dengesini bozduğu saptanmıştır. 'Keystone patojen' kavramına uyan ve bu özellikleriyle ön plana çıkan bakteri aşağıdakilerden hangisidir?
Doğru Şık (C): Porphyromonas gingivalis
Açıklama: Keystone patojen, dominant bir türün çok sayıda olmasının aksine, sayıca az olsa bile konak immün yanıtını manipüle ederek (örn. IL-8 inhibisyonu, TLR-2/4 çift aktivasyonu) lokal homeostazı disbiyozise çeviren bakteridir. Periodontitis patogenezinde bu modelin ana örneği Porphyromonas gingivalis'tir.

**Soru 2 (ID: a3cde156-1ea7-4663-a328-9fb3178a93cb)**
Soru Kökü: Kırk sekiz yaşında erkek hasta, derin periodontal cepleri ve şiddetli kemik yıkımı olan bölgelerle kliniğe başvuruyor. Bakteriyel analizde, sivri uçlu (fusiform) gram negatif anaerop bir çomak saptanıyor. Bu bakterinin en önemli virülans faktörünün konak hücrelere adezyonu sağlayan 'BspA' (Bacteroides surface protein A) olduğu biliniyor. Tanımlanan bu kırmızı kompleks üyesi patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Tannerella forsythia
Açıklama: BspA (Bacteroides surface protein A), Tannerella forsythia'nın en iyi tanımlanmış majör virülans faktörüdür ve fibronektin ile fibrinojene bağlanarak konak hücre invazyonunda rol oynar. P. gingivalis'te FimA ve gingipain, T. denticola'da ise Msp (major dış membran proteini) spesifik virülans faktörleridir.

---

### ÇİFT 25 (Benzerlik: 0.74)

**Soru 1 (ID: 074dc988-7a06-415e-8b61-ce94436d9c49)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, birinci büyük azı dişlerinde ve kesicilerde lokalize şiddetli kemik kaybı ile karakterize Lokalize Agresif Periodontitis (LAP) teşhisi almıştır. Hastadan alınan örnekte saptanan spesifik patojenin, konak fagositoz mekanizmasını LFA-1 adezinlerine bağlanarak inhibe ettiği ve lökositleri öldürdüğü bilinmektedir. Bu majör virülans faktörü aşağıdakilerden hangisidir?
Doğru Şık (C): Lökotoksin
Açıklama: A. actinomycetemcomitans'ın (Aa) en önemli virülans faktörü, lökositlerin yüzeyindeki LFA-1 reseptörlerine bağlanarak onları tahrip eden lökotoksin (lökosidin) molekülüdür. Gingipain P. gingivalis'e, dentilisin ise T. denticola'ya ait bir proteazdır. Lökositlerin fonksiyon dışı bırakılması, LAP'taki hızlı doku yıkımının primer nedenidir.

**Soru 2 (ID: a3cde156-1ea7-4663-a328-9fb3178a93cb)**
Soru Kökü: Kırk sekiz yaşında erkek hasta, derin periodontal cepleri ve şiddetli kemik yıkımı olan bölgelerle kliniğe başvuruyor. Bakteriyel analizde, sivri uçlu (fusiform) gram negatif anaerop bir çomak saptanıyor. Bu bakterinin en önemli virülans faktörünün konak hücrelere adezyonu sağlayan 'BspA' (Bacteroides surface protein A) olduğu biliniyor. Tanımlanan bu kırmızı kompleks üyesi patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Tannerella forsythia
Açıklama: BspA (Bacteroides surface protein A), Tannerella forsythia'nın en iyi tanımlanmış majör virülans faktörüdür ve fibronektin ile fibrinojene bağlanarak konak hücre invazyonunda rol oynar. P. gingivalis'te FimA ve gingipain, T. denticola'da ise Msp (major dış membran proteini) spesifik virülans faktörleridir.

---

### ÇİFT 26 (Benzerlik: 0.74)

**Soru 1 (ID: 074dc988-7a06-415e-8b61-ce94436d9c49)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, birinci büyük azı dişlerinde ve kesicilerde lokalize şiddetli kemik kaybı ile karakterize Lokalize Agresif Periodontitis (LAP) teşhisi almıştır. Hastadan alınan örnekte saptanan spesifik patojenin, konak fagositoz mekanizmasını LFA-1 adezinlerine bağlanarak inhibe ettiği ve lökositleri öldürdüğü bilinmektedir. Bu majör virülans faktörü aşağıdakilerden hangisidir?
Doğru Şık (C): Lökotoksin
Açıklama: A. actinomycetemcomitans'ın (Aa) en önemli virülans faktörü, lökositlerin yüzeyindeki LFA-1 reseptörlerine bağlanarak onları tahrip eden lökotoksin (lökosidin) molekülüdür. Gingipain P. gingivalis'e, dentilisin ise T. denticola'ya ait bir proteazdır. Lökositlerin fonksiyon dışı bırakılması, LAP'taki hızlı doku yıkımının primer nedenidir.

**Soru 2 (ID: 7e7f6195-55f7-4a68-9282-335ebffb3da1)**
Soru Kökü: Porphyromonas gingivalis ve Aggregatibacter actinomycetemcomitans gibi majör periodontal patojenlerin konak dokuya tutunmasını, kolonize olmasını ve makrofajlardan IL-12 salınımını inhibe etmesini sağlayan en önemli yüzey virülans yapısı aşağıdakilerden hangisidir?
Doğru Şık (B): Pili (Fimbria)
Açıklama: Pili veya fimbrialar, P. gingivalis ve A.a'nın epitel hücrelerine ve diğer bakterilere sıkıca yapışmasını sağlayan, hareketle ilgisi olmayan temel adezin yapılarıdır. Fimbrialar aynı zamanda makrofajları modüle ederek IL-12 salınımını engeller ve hücresel immün yanıtı zayıflatır. Gingipain ise proteolitik yıkım ve sitokin inaktivasyonu yapan bir enzimdir.

---

### ÇİFT 27 (Benzerlik: 0.74)

**Soru 1 (ID: 6c0baaca-899b-4b1b-950d-866a79d81420)**
Soru Kökü: Elli yaşında erkek hastaya subgingival küretaj işlemi uygulanmaktadır. İşlem sırasında periodontal cebin yapışık olmayan zonundan alınan örnekte, hastalığın progresyonunda rol oynayan 'Turuncu kompleks' mikroorganizmaları ağırlıklı olarak saptanmıştır. Aşağıdaki mikroorganizmalardan hangisi bu zonda yer alan birlikteliğin bir üyesidir?
Doğru Şık (D): Prevotella intermedia
Açıklama: Socransky'nin komplekslerinde Prevotella intermedia, Fusobacterium nucleatum ve Campylobacter türleri yapışık olmayan zonda bulunan 'Turuncu' birlikteliği oluşturur. A. viscosus mavi (yapışık zon), S. sanguinis sarı, E. corrodens yeşil, T. forsythia ise cep epiteliyle ilişkili zon olan kırmızı komplekstendir.

**Soru 2 (ID: 72b9ccd7-5ea7-47df-b2a7-8e9dd79f2c8d)**
Soru Kökü: Aşağıdakilerden hangisi Socransky'nin tanımladığı, cep epiteline komşu olmayan 'yapışık olmayan zonda' yer alan ve periodontal yıkım progresyonuna geçiş florası kabul edilen turuncu bakteri birlikteliğinin üyelerinden biri **değildir**?
Doğru Şık (D): Actinomyces viscosus
Açıklama: Actinomyces viscosus, dişeti sağlığı ile doğrudan ilişkili olan ve yapışık zonda yer alan mavi bakteri birlikteliğinin bir üyesidir. Prevotella intermedia, Parvimonas micra, Fusobacterium nucleatum ve Campylobacter rectus ise yapışık olmayan zonda yerleşen, periodontal hastalık florasına (kırmızı komplekse) geçişte rol oynayan turuncu kompleks üyeleridir.

---

### ÇİFT 28 (Benzerlik: 0.74)

**Soru 1 (ID: b7d241b6-d601-4730-8463-e27af4f981f6)**
Soru Kökü: Yirmi beş yaşında erkek hasta, diş fırçalama sırasında dişetlerinde kanama şikayetiyle başvuruyor. Klinik muayenede dişetlerinde eritem ve sondalamada kanama izleniyor. Anamnezden hastanın 5 gündür dişlerini fırçalamadığı öğreniliyor. Hastanın mevcut periodontal lezyonunda baskın olarak beklenen hücresel yapı ve kollajen yıkım durumu aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (C): Baskın T lenfosit - İnfiltrasyon çevresinde artan kollajen yıkımı
Açıklama: Klinik senaryoda tarif edilen plak akümülasyonundan 4-7 gün sonra ortaya çıkan eritem ve sondalamada kanama bulguları 'Erken Lezyon' evresini işaret eder. Bu evrede ağırlıklı hücre tipi lenfositlerdir (%74 oranında, çoğunluğu T lenfosit) ve infiltrasyon çevresinde kollajen yıkımı artmıştır. PMNL'ler başlangıç lezyonunda (2-4 gün), plazma hücreleri ise yerleşmiş lezyonda (14-21 gün) baskındır.

**Soru 2 (ID: c98f688f-01ce-45c0-b64f-9e08c9b08ee2)**
Soru Kökü: Otuz beş yaşındaki erkek hasta, sondalamada diş eti kanaması şikayetiyle başvurmuştur. Muayenede eritem izlenmiş, ancak klinik ataşman kaybı saptanmamıştır. Plak birikiminden 4-7 gün sonra ortaya çıkan bu erken lezyon tablosunda, yıkıma uğrayan ve en fazla etkilenen spesifik kollajen lif grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Sirküler ve dentogingival lifler
Açıklama: Erken lezyonda (4-7 gün) bağ dokusu lif grupları matriks metalloproteinazlar tarafından yıkılmaya başlar ve ilk/en yoğun etkilenen grup birleşim epitelini doğrudan destekleyen sirküler ve dentogingival liflerdir. Apikal, oblik, krestal ve interradiküler lifler periodontal ligamentin temel lifleridir ve periodontitis (ilerlemiş lezyon) aşamasına geçilmeden yıkılmazlar.

---

### ÇİFT 29 (Benzerlik: 0.73)

**Soru 1 (ID: c49150b2-e29f-46b2-8674-09216c41726a)**
Soru Kökü: Periodontal hastalık patogenezinde 'İyileşme ve fibrozis' aşamasında gerçekleşen hücresel ve dokusal olaylarla ilgili aşağıdaki ifadelerden hangisi **en az olasıdır**?
Doğru Şık (E): Başlangıç lezyonundaki baskın PMNL infitrasyonu sayıca zirve yapar.
Açıklama: Başlangıç lezyonundaki PMNL (nötrofil) infiltrasyonunun zirve yapması akut inflamasyonun ilk evrelerine aittir; iyileşme ve fibrozis aşamasında bu hücreler azalır. İyileşme sürecinde PMNL baskınlığı yerini makrofajlara, adaptif immün sisteme ve fibroblastik onarım aktivitesine bırakır. Akut yıkım evresi sönümlenmeden tamir fazına geçilemez.

**Soru 2 (ID: f5324911-86da-401b-9032-47cf6d5e4705)**
Soru Kökü: Periodontal hastalık patogenezindeki aşamalar değerlendirildiğinde, 'İnvazyon' evresi için aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Antijenlere karşı humoral immün cevabın oluştuğu esas basamaktır.
Açıklama: Humoral immün cevabın (B lenfosit ve antikor üretimi) antijenlere karşı güçlü bir şekilde oluştuğu evre iyileşme ve fibrozis aşamasıdır, invazyon değil. İnvazyon; bakteri ve ürünlerinin epitel bariyerini aşıp bağ dokusuna ve alveolar kemiğe doğru ilerlemesini ifade eder. Bu süreç doku destrüksiyonu ve alevlenme ile karakterizedir.

---

### ÇİFT 30 (Benzerlik: 0.73)

**Soru 1 (ID: 5834eee2-ef5a-46b8-94a2-f507569d908b)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik rezorpsiyon çeşitli mediatörler tarafından aktive edilmektedir. Aşağıdakilerden hangisi osteoklastları uyararak kemik rezorpsiyonunu stimüle eden faktörlerden biri **değildir**?
Doğru Şık (D): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak onun RANK reseptörüyle etkileşimini bloke eden ve böylece osteoklastogenezi inhibe eden koruyucu bir tuzak (decoy) reseptördür. LIF, Oncostatin M, bradikinin ve trombin ise IL-1 ve TNF-alfa ile birlikte osteoklastik aktiviteyi uyararak yıkıma katkıda bulunurlar.

**Soru 2 (ID: 9549cd10-a3c6-4266-b9c5-03c7655afc57)**
Soru Kökü: Aşağıdaki sitokinlerden hangisi periodontal dokularda inflamasyonu baskılayarak doku tamirini teşvik eden ve anti-osteoklastojenik etki gösteren mediatörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-18
Açıklama: İnterlökin-18 nötrofil aktivasyonuna katılan pro-inflamatuar bir sitokindir. IL-4, IL-10, IL-13 ve TGF-beta ise inflamasyonu baskılayan, Th2 yanıtını destekleyen ve kemik rezorpsiyonunu durduran temel anti-inflamatuar/anti-osteoklastojenik sitokinlerdir. Patojenik mikroçevrede bu anti-inflamatuar mediatörlerin yetersizliği yıkımın devam etmesine neden olur.

---

### ÇİFT 31 (Benzerlik: 0.73)

**Soru 1 (ID: 3f736528-783c-418a-860a-528484cfcf86)**
Soru Kökü: Porphyromonas gingivalis, periodontitisin progresyonunda 'keystone' patojen olarak tanımlanır ve konağın immün savunmasını manipüle etme yeteneğine sahiptir. Bu bakterinin hücre içi invazyon yeteneğini kullanarak, epitel hücrelerinden salınımını doğrudan inhibe ettiği ve böylece nötrofil kemotaksisini felce uğrattığı molekül aşağıdakilerden hangisidir?
Doğru Şık (C): İnterlökin-8 (CXCL-8)
Açıklama: P. gingivalis, epitel hücrelerini enfekte edip içerisine invaze olduğunda lokal bir immün paralizi (felç) yaratmak için IL-8 (nötrofil kemotaktik faktör) sekresyonunu durdurur. Bu sayede birleşim epiteline nötrofil göçü engellenir, bakteri kendi yaşam alanı etrafında fagositozdan uzak güvenli bir disbiyotik bölge oluşturur.

**Soru 2 (ID: 7e7f6195-55f7-4a68-9282-335ebffb3da1)**
Soru Kökü: Porphyromonas gingivalis ve Aggregatibacter actinomycetemcomitans gibi majör periodontal patojenlerin konak dokuya tutunmasını, kolonize olmasını ve makrofajlardan IL-12 salınımını inhibe etmesini sağlayan en önemli yüzey virülans yapısı aşağıdakilerden hangisidir?
Doğru Şık (B): Pili (Fimbria)
Açıklama: Pili veya fimbrialar, P. gingivalis ve A.a'nın epitel hücrelerine ve diğer bakterilere sıkıca yapışmasını sağlayan, hareketle ilgisi olmayan temel adezin yapılarıdır. Fimbrialar aynı zamanda makrofajları modüle ederek IL-12 salınımını engeller ve hücresel immün yanıtı zayıflatır. Gingipain ise proteolitik yıkım ve sitokin inaktivasyonu yapan bir enzimdir.

---

### ÇİFT 32 (Benzerlik: 0.73)

**Soru 1 (ID: 524fbc2f-9609-4780-a361-1d50f371725b)**
Soru Kökü: Periodontal hastalık seyrinde inflamatuar cevabı sınırlayan moleküllerin dengesi büyük önem taşır. Aşağıdakilerden hangisi makrofaj kaynaklı doku yıkımını yavaşlatan ve antienflamatuar/baskılayıcı etkinlik gösteren sitokinlerden biri **değildir**?
Doğru Şık (E): İnterlökin-1 alfa
Açıklama: IL-1 alfa, IL-1 beta ile birlikte inflamasyonu başlatan, endotel hücrelerinde selektin ekspresyonunu artıran ve kemik rezorpsiyonunu şiddetle uyaran en güçlü pro-inflamatuar (osteoklast aktive edici) sitokinlerden biridir. TGF-beta, IL-10, IL-1Ra ve IL-13 ise anti-inflamatuar savunma ordusunu oluştururlar.

**Soru 2 (ID: db1d65ac-acca-462d-a0c6-497b3dbdedd8)**
Soru Kökü: Bakteriyel LPS'nin epitel hücreleri, monosit ve makrofajları aktive etmesi sonucu salgılanan ve gingival inflamasyonu başlatan vazoaktif maddeler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak osteoklast aktivasyonunu inhibe eden ve kemik rezorpsiyonunu engelleyen bir konak anti-rezorptif faktörüdür; inflamasyonu başlatan bir vazoaktif madde değildir. TNF-a, IL-1, PGE2 ve interferon ise makrofaj ve epitel hücrelerinden salınarak vazodilatasyona ve kapiller geçirgenlik artışına yol açan temel proinflamatuar mediatörlerdir.

---

### ÇİFT 33 (Benzerlik: 0.73)

**Soru 1 (ID: 3385aebf-49b9-4315-bfa0-f744b162aa6a)**
Soru Kökü: Alveolar kemik rezorpsiyonunu düzenleyen RANK-RANKL etkileşimi, periodontal enflamasyon sırasında salınan çeşitli konak mediatörleri tarafından regüle edilir. Aşağıdaki sitokinlerden hangisi osteoklastogenezi stimüle eden (pro-osteoklastojenik) faktörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-10
Açıklama: IL-1, IL-6, TNF, IL-17 ve PGE-2 osteoklastogenezi aktive eden (osteoklastojenik) mediatörlerdir. Buna karşın İnterlökin-10 (IL-10), makrofaj aktivasyonunu baskılayan ve anti-inflamatuar / anti-osteoklastojenik özellikte olan temel bir sitokindir.

**Soru 2 (ID: db1d65ac-acca-462d-a0c6-497b3dbdedd8)**
Soru Kökü: Bakteriyel LPS'nin epitel hücreleri, monosit ve makrofajları aktive etmesi sonucu salgılanan ve gingival inflamasyonu başlatan vazoaktif maddeler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak osteoklast aktivasyonunu inhibe eden ve kemik rezorpsiyonunu engelleyen bir konak anti-rezorptif faktörüdür; inflamasyonu başlatan bir vazoaktif madde değildir. TNF-a, IL-1, PGE2 ve interferon ise makrofaj ve epitel hücrelerinden salınarak vazodilatasyona ve kapiller geçirgenlik artışına yol açan temel proinflamatuar mediatörlerdir.

---

### ÇİFT 34 (Benzerlik: 0.73)

**Soru 1 (ID: 074dc988-7a06-415e-8b61-ce94436d9c49)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, birinci büyük azı dişlerinde ve kesicilerde lokalize şiddetli kemik kaybı ile karakterize Lokalize Agresif Periodontitis (LAP) teşhisi almıştır. Hastadan alınan örnekte saptanan spesifik patojenin, konak fagositoz mekanizmasını LFA-1 adezinlerine bağlanarak inhibe ettiği ve lökositleri öldürdüğü bilinmektedir. Bu majör virülans faktörü aşağıdakilerden hangisidir?
Doğru Şık (C): Lökotoksin
Açıklama: A. actinomycetemcomitans'ın (Aa) en önemli virülans faktörü, lökositlerin yüzeyindeki LFA-1 reseptörlerine bağlanarak onları tahrip eden lökotoksin (lökosidin) molekülüdür. Gingipain P. gingivalis'e, dentilisin ise T. denticola'ya ait bir proteazdır. Lökositlerin fonksiyon dışı bırakılması, LAP'taki hızlı doku yıkımının primer nedenidir.

**Soru 2 (ID: 9264ec2c-185c-47cb-97ef-892d3b6a62f5)**
Soru Kökü: On sekiz yaşındaki kadın hasta, birinci büyük azı ve kesici dişlerinde simetrik ve ileri derecede alveol kemik kaybı ile başvurmuştur. Lokalize agresif periodontitis (LAP) ön tanısı konulan hastanın defekt bölgelerinden alınan mikrobiyolojik kültürde Aggregatibacter actinomycetemcomitans'ın lökotoksin üreten varyantları saptanmıştır. Bu klinik tabloda izolasyonu **en sık** bildirilen A. actinomycetemcomitans serotipi aşağıdakilerden hangisidir?
Doğru Şık (E): Serotip b
Açıklama: Aggregatibacter actinomycetemcomitans (Aa) fakültatif anaerop ve kapnofil bir bakteridir ve Lokalize Agresif Periodontitis (LAP) etkeni olarak kabul edilir. Patojenezde en büyük rol oynayan lökotoksini üretir. Toplam beş serotipi (a-e) tanımlanmış olmakla birlikte, hastalıklı dokulardan ve lezyonlardan klinik olarak en çok saptanan ve doku yıkımıyla en sık ilişkilendirilen tipi Serotip b'dir.

---

### ÇİFT 35 (Benzerlik: 0.72)

**Soru 1 (ID: 01872eef-a7d8-4b88-b0a3-6fd95c590d46)**
Soru Kökü: Otuz sekiz yaşında erkek hastadan alınan subgingival plak örneğinde, ortamın pH'sının asidikten nötrale doğru kaydığı ve Prevotella intermedia ile Fusobacterium nucleatum bakterilerinin hızla kolonize olduğu saptanmıştır. Bu iki patojenin subgingival ortamda baskın hale gelmesini ve pH'yı nötralize etmesini sağlayan temel enerji (besin) kaynağı aşağıdakilerden hangisidir?
Doğru Şık (C): Aminoasitler
Açıklama: P. intermedia ve F. nucleatum asakkarolitik / proteolitik eğilimli bakteriler olup temel enerji kaynağı olarak aminoasitleri tercih ederler. Bu aminoasitlerin deaminasyonu sonucu ortaya çıkan amonyak ve yan ürünler, sakkarolitik bakterilerin asidik ortamını alkali/nötral yöne çekerek P. gingivalis gibi daha agresif anaeropların yerleşmesine zemin hazırlar.

**Soru 2 (ID: 1fd6932c-df5a-46e9-a224-2b4c59328610)**
Soru Kökü: Elli iki yaşında kadın hastanın subgingival biyofilm florası incelendiğinde, anaerobik ve proteolitik bir mikrobiyal ortamın geliştiği saptanmıştır. Bu zorlu ortamda kendi başına konak proteinlerini parçalayıp, enerji ve besin kaynağı olarak özelikle 'dipeptidleri' tercih etmesi sayesinde diğer bakterilere karşı evrimsel beslenme avantajı sağlayan patojen aşağıdakilerden hangisidir?
Doğru Şık (E): Porphyromonas gingivalis
Açıklama: Beslenme gereksinimleri açısından P. intermedia ve F. nucleatum daha çok aminoasitleri tercih ederken, P. gingivalis dipeptidleri tercih eder. P. gingivalis'in kendi ürettiği güçlü proteazlarla (gingipain vb.) konak dokusunu peptitlere parçalayıp hızla hücre içine alabilmesi subgingival ekosistemde ona büyük bir hayatta kalma avantajı sağlar.

---

### ÇİFT 36 (Benzerlik: 0.72)

**Soru 1 (ID: 3f736528-783c-418a-860a-528484cfcf86)**
Soru Kökü: Porphyromonas gingivalis, periodontitisin progresyonunda 'keystone' patojen olarak tanımlanır ve konağın immün savunmasını manipüle etme yeteneğine sahiptir. Bu bakterinin hücre içi invazyon yeteneğini kullanarak, epitel hücrelerinden salınımını doğrudan inhibe ettiği ve böylece nötrofil kemotaksisini felce uğrattığı molekül aşağıdakilerden hangisidir?
Doğru Şık (C): İnterlökin-8 (CXCL-8)
Açıklama: P. gingivalis, epitel hücrelerini enfekte edip içerisine invaze olduğunda lokal bir immün paralizi (felç) yaratmak için IL-8 (nötrofil kemotaktik faktör) sekresyonunu durdurur. Bu sayede birleşim epiteline nötrofil göçü engellenir, bakteri kendi yaşam alanı etrafında fagositozdan uzak güvenli bir disbiyotik bölge oluşturur.

**Soru 2 (ID: a619474b-aad7-4948-b311-02b11e1b132f)**
Soru Kökü: Porphyromonas gingivalis'in majör virülans faktörlerinden olan ve salgıladığı proteazlar olarak bilinen 'Gingipain'lerin immün sistem üzerindeki etkileriyle ilgili aşağıdaki mekanizmalardan hangisi doğrudur?
Doğru Şık (E): TNF-alfayı degrade edip inaktive ederken, eş zamanlı olarak IL-6 ve IL-8 salınımını uyarması
Açıklama: Gingipainler konak yanıtını çok yönlü modüle eden güçlü proteazlardır; TNF-alfayı parçalayıp inaktive ederken, paradoksal olarak doku yıkımını artırmak için hücrelerden IL-6 ve IL-8 salınımını uyarırlar. IL-12 inhibisyonu fimbria kaynaklıdır, IL-8'in genel inhibisyonu ise bakterinin hücresel invazyon yetenekleriyle ilişkilidir.

---

### ÇİFT 37 (Benzerlik: 0.72)

**Soru 1 (ID: 54d487c5-37c0-4f99-8292-56e146f9e333)**
Soru Kökü: Kırk beş yaşındaki kronik periodontitis hastasına amoksisilin reçete edilmiş, ancak subgingival mikrobiyotadaki patojenler ilaca direnç göstermiştir. Yapılan in vitro testlerde, bakterilerin tekil (planktonik) formda amoksisiline duyarlı olduğu, ancak biyofilm içinde dirençli hale geldikleri saptanmıştır. Bu tabloya neden olan **en olası** biyofilm spesifik direnç mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Biyofilm matriksi içinde yer alan ekstrasellüler beta-laktamaz enzimlerinin varlığı
Açıklama: Biyofilm bakterileri antimikrobiyallere 1000 kat daha dirençlidir. Subgingival floradaki bazı bakteriler tarafından üretilip biyofilm matriksine salgılanan ekstrasellüler enzimler (örneğin beta-laktamaz), amoksisilin gibi antibiyotikleri matriksten geçerken enzimatik olarak parçalar ve inaktive eder. Tekil formda duyarlı olan bir bakterinin sadece biyofilm içindeyken ilaca direnç göstermesi, matriksin bu farmakolojik bariyer etkisinin sonucudur.

**Soru 2 (ID: ece814db-9231-496b-824e-e8a2cfa4b98b)**
Soru Kökü: Biyofilm yapısı içerisindeki bakteriler, aynı türün serbest (planktonik) formuna kıyasla antimikrobiyal ajanlara karşı 1000 kata kadar daha dirençlidir. Aşağıdakilerden hangisi biyofilmin antibiyotik direncinin nedenlerinden biri **yanlıştır**?
Doğru Şık (B): Biyofilm içinde bakterilerin planktonik forma göre daha hızlı çoğalması
Açıklama: Biyofilm içerisinde besin sınırlılığı ve oksijen azlığı gibi uygun olmayan koşullar nedeniyle bakteriler serbest forma göre daha *yavaş* büyürler ve metabolizmaları yavaşlar. Antibiyotiklerin çoğu (özellikle hücre duvarı sentez inhibitörleri) aktif ve hızlı çoğalan bakterilere karşı etkili olduğundan, bu yavaş büyüme hızı antibiyotik direncinin temel sebeplerinden biridir.

---

### ÇİFT 38 (Benzerlik: 0.72)

**Soru 1 (ID: 9549cd10-a3c6-4266-b9c5-03c7655afc57)**
Soru Kökü: Aşağıdaki sitokinlerden hangisi periodontal dokularda inflamasyonu baskılayarak doku tamirini teşvik eden ve anti-osteoklastojenik etki gösteren mediatörler arasında **yer almaz**?
Doğru Şık (E): İnterlökin-18
Açıklama: İnterlökin-18 nötrofil aktivasyonuna katılan pro-inflamatuar bir sitokindir. IL-4, IL-10, IL-13 ve TGF-beta ise inflamasyonu baskılayan, Th2 yanıtını destekleyen ve kemik rezorpsiyonunu durduran temel anti-inflamatuar/anti-osteoklastojenik sitokinlerdir. Patojenik mikroçevrede bu anti-inflamatuar mediatörlerin yetersizliği yıkımın devam etmesine neden olur.

**Soru 2 (ID: db1d65ac-acca-462d-a0c6-497b3dbdedd8)**
Soru Kökü: Bakteriyel LPS'nin epitel hücreleri, monosit ve makrofajları aktive etmesi sonucu salgılanan ve gingival inflamasyonu başlatan vazoaktif maddeler arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak osteoklast aktivasyonunu inhibe eden ve kemik rezorpsiyonunu engelleyen bir konak anti-rezorptif faktörüdür; inflamasyonu başlatan bir vazoaktif madde değildir. TNF-a, IL-1, PGE2 ve interferon ise makrofaj ve epitel hücrelerinden salınarak vazodilatasyona ve kapiller geçirgenlik artışına yol açan temel proinflamatuar mediatörlerdir.

---

### ÇİFT 39 (Benzerlik: 0.72)

**Soru 1 (ID: 0f02a015-31e2-4d2e-af4a-9120750f2457)**
Soru Kökü: Erken plak kolonizasyonunda yer alan Gram pozitif bakterilerin hücre duvarında yoğun olarak bulunan, konak dokusuna adhezyonu sağlayan ve inflamatuar sinyal iletimi için TLR-2 reseptörüne bağlanan hidrofobik virülans molekülü aşağıdakilerden hangisidir?
Doğru Şık (C): Lipoteikoik asit (LTA)
Açıklama: Lipoteikoik asit (LTA), Gram pozitif bakterilerin hücre duvarı bileşenidir, epitel hücrelerindeki lipofilik reseptörlere bağlanan hidrofobik bir adezindir ve spesifik olarak TLR-2 aracılığıyla inflamatuar yanıtı başlatır. Lipid A Gram negatif bakterilerdeki endotoksinin (LPS) çekirdek toksik merkezidir. BspA ise Tannerella forsythia'nın temel yüzey proteinidir.

**Soru 2 (ID: e1a710ff-5836-4b4c-8f93-289059d20000)**
Soru Kökü: Bakteri adhezyon mekanizmalarında, hücre duvarındaki spesifik lipoteikoik asit (LTA) adezinlerinin, konak epitel hücresinin yüzeyindeki lipofilik reseptörlerle eşleşerek gerçekleştirdiği non-spesifik bağ tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Hidrofobik bağlar
Açıklama: Gram pozitif bakterilerin hücre duvarındaki lipoteikoik asit (LTA), yapısal olarak hidrofobik bir adezindir ve konak hücre lipofilik (hidrofobik) reseptörlerine uyum sağlayarak hidrofobik etkileşimle bağlanır. Bu, bakterinin ıslak ağız ortamında hücre yüzeyine stabilizasyonunu sağlayan güçlü bir non-spesifik bağlanma mekanizmasıdır.

---

### ÇİFT 40 (Benzerlik: 0.72)

**Soru 1 (ID: b316c807-45b7-42c1-9268-b67f583a57d4)**
Soru Kökü: Konak savunma hücreleri olan nötrofiller, fagositoz sırasında reaktif oksijen türleri (ROS) üreterek bakterilerin membran ve proteinlerini parçalarlar. Aşağıdakilerden hangisi anaerop bakterilerin kendilerini bu toksik oksijen türevlerinden korumak için salgıladığı enzimlerden biri **değildir**?
Doğru Şık (D): Myeloperoksidaz
Açıklama: Myeloperoksidaz, anaerop bakterilerin değil, konağın polimorf nükleer lökositlerinin (nötrofillerin) azürofilik granüllerinde bulunan ve hidrojen peroksiti hipokloröz aside (güçlü bir antibakteriyel ajan) dönüştüren konak kaynaklı bir enzimdir. Süperoksit dismutaz, katalaz ve NAD oksidaz ise anaerop bakterilerin ROS'u detoksifiye etmek için kullandığı hayatta kalma mekanizmalarıdır.

**Soru 2 (ID: e1e88b5a-a8c0-4eae-acbe-8a96a9e2328b)**
Soru Kökü: Nötrofillerin fagozom içerisine aldıkları bakterileri hücresel düzeyde yok etmek için kullandıkları nonoksidatif (oksijenden bağımsız) öldürme mekanizmaları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (A): Süperoksit radikali ve hidrojen peroksit üretimi
Açıklama: Süperoksit radikali (O2-) ve hidrojen peroksit (H2O2) üretimi 'oksidatif' (solunum patlaması - respiratory burst) öldürme mekanizmasının temel elementleridir. Nonoksidatif yolda ise fagolizozom içerisine lizozim, catepsin-g, defensinler ve laktoferrin gibi preforme granül içerikleri boşaltılarak bakterinin fizyolojik dengesi ve hücre duvarı parçalanır.

---

### ÇİFT 41 (Benzerlik: 0.72)

**Soru 1 (ID: a3cde156-1ea7-4663-a328-9fb3178a93cb)**
Soru Kökü: Kırk sekiz yaşında erkek hasta, derin periodontal cepleri ve şiddetli kemik yıkımı olan bölgelerle kliniğe başvuruyor. Bakteriyel analizde, sivri uçlu (fusiform) gram negatif anaerop bir çomak saptanıyor. Bu bakterinin en önemli virülans faktörünün konak hücrelere adezyonu sağlayan 'BspA' (Bacteroides surface protein A) olduğu biliniyor. Tanımlanan bu kırmızı kompleks üyesi patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Tannerella forsythia
Açıklama: BspA (Bacteroides surface protein A), Tannerella forsythia'nın en iyi tanımlanmış majör virülans faktörüdür ve fibronektin ile fibrinojene bağlanarak konak hücre invazyonunda rol oynar. P. gingivalis'te FimA ve gingipain, T. denticola'da ise Msp (major dış membran proteini) spesifik virülans faktörleridir.

**Soru 2 (ID: cd66910d-7845-46f2-8f4b-28fc43a55d27)**
Soru Kökü: Kırk sekiz yaşında erkek hasta, sondalamada kanaması olan 8 mm'lik periodontal ceplere sahiptir. Bölgedeki lokalize pürülan inflamasyon nedeniyle cep içi ısısının dişe göre belirgin şekilde (yaklaşık 2-3°C) arttığı ölçülmüştür. Bu sıcaklık dalgalanmasının P. gingivalis üzerinde yarattığı moleküler yanıt ve klinik sonucu aşağıdakilerden hangisidir?
Doğru Şık (C): Isı şok proteinleri (HSP) sentezlenir, majör fimbrial adezin ekspresyonu değişerek virülans artar.
Açıklama: Periodontal cepte artan lokal ısı, bakterilerde gen ekspresyonunu değiştirerek Isı Şok Proteinlerinin (HSP) sentezini tetikler. Bu proteinler, P. gingivalis gibi patojenlerde majör fimbrial adezinlerin yapısını ve ekspresyonunu değiştirerek bakterinin tutunma kapasitesini ve virülansını artırır. Bu durum patojenlerin inflamatuar strese karşı geliştirdiği hücresel bir adaptasyondur.

---

### ÇİFT 42 (Benzerlik: 0.71)

**Soru 1 (ID: 00080b31-fc3d-476a-81ef-2fdbc04546ff)**
Soru Kökü: Diş plağı biyofilminin gelişim sürecinde erken (birincil) kolonize olan mikroorganizmalar ile geç (ikincil) kolonize olan periodontal patojenler arasında birleşmeyi sağlayan, ekosistemde 'köprü bakterisi' olarak görev yapan tür aşağıdakilerden hangisidir?
Doğru Şık (C): Fusobacterium nucleatum
Açıklama: Koagregasyon mekanizmasında F. nucleatum, hem erken kolonize olanlarla (örn. S. gordonii) hem de geç kolonize olan zorunlu anaeroplarla (örn. P. gingivalis) bağlanabildiği için biyofilm matürasyonunda kritik bir 'köprü' rolü üstlenir. Diğer geç kolonize olan bakterilerin birçoğu F. nucleatum ortamda yoksa diş plağına katılamaz.

**Soru 2 (ID: 79765654-14d0-44b3-ae48-4a200c1586ed)**
Soru Kökü: Diş yüzeyinde oluşan biyofilmin üç evreli gelişim sürecinde mikroorganizmalar, pelikıla yapışma zamanlarına göre 'erken' ve 'geç (ikincil)' kolonizatörler olarak sınıflandırılır. Aşağıdakilerden hangisi biyofilm oluşumuna katılan erken kolonizasyon bakterilerinden biri **değildir**?
Doğru Şık (B): Eubacterium nodatum
Açıklama: Streptococcus, Actinomyces, Capnocytophaga ve Veillonella türleri biyofilmin birinci ve ikinci evrelerinde (erken ardıllık) pelikıla ve birbirlerine tutunan erken kolonizatörlerdir. Eubacterium nodatum ise tıpkı Campylobacter, Porphyromonas ve Treponema türleri gibi biyofilmin olgunlaşma aşamasında plağa dahil olan ikincil (geç) kolonizatörlerdendir.

---

### ÇİFT 43 (Benzerlik: 0.71)

**Soru 1 (ID: ad52c0a9-9e27-457a-8fc5-3f2dd0355485)**
Soru Kökü: Aşağıdakilerden hangisi plak birikimini takiben 2-3 hafta içinde gelişen 'yerleşmiş lezyon' (kronik gingivitis) evresinin histopatolojik bulgularından biri **değildir**?
Doğru Şık (A): Alveolar kemikte osteoklastik aktivitenin başlaması
Açıklama: Yerleşmiş lezyon evresinde plazma hücreleri baskındır, immünglobulinler üretilir ve birleşim epiteli cep epiteline dönüşür; ancak kemik kaybı henüz başlamamıştır. Alveolar kemik ve periodontal ligamentte yıkımın başlaması, yerleşmiş lezyonun 'ilerlemiş lezyona' (periodontitis) dönüştüğünü gösteren anahtar ayırt edici bulgudur.

**Soru 2 (ID: c49150b2-e29f-46b2-8674-09216c41726a)**
Soru Kökü: Periodontal hastalık patogenezinde 'İyileşme ve fibrozis' aşamasında gerçekleşen hücresel ve dokusal olaylarla ilgili aşağıdaki ifadelerden hangisi **en az olasıdır**?
Doğru Şık (E): Başlangıç lezyonundaki baskın PMNL infitrasyonu sayıca zirve yapar.
Açıklama: Başlangıç lezyonundaki PMNL (nötrofil) infiltrasyonunun zirve yapması akut inflamasyonun ilk evrelerine aittir; iyileşme ve fibrozis aşamasında bu hücreler azalır. İyileşme sürecinde PMNL baskınlığı yerini makrofajlara, adaptif immün sisteme ve fibroblastik onarım aktivitesine bırakır. Akut yıkım evresi sönümlenmeden tamir fazına geçilemez.

---

### ÇİFT 44 (Benzerlik: 0.71)

**Soru 1 (ID: 674e3452-02c0-425c-8b1e-472f78d200ed)**
Soru Kökü: Yirmi yaşındaki kadın hasta, diş etlerinde iki gündür hafif bir sızı hissettiğini ancak kızarıklık veya kanama olmadığını belirtmektedir. Bu hastada mikroskobik düzeyde inflamasyonun ilk bulguları olan vasküler eksuda oluşumu ve polimorfonükleer lökositlerin (PMNL) damar dışına göçü (marjinasyon) öncelikle hangi fizyolojik yanıtın doğrudan bir sonucudur?
Doğru Şık (A): Kapillerin genişlemesi ve kan akışının artması
Açıklama: İnflamasyonun (başlangıç lezyonu) ilk bulgusu kan akımındaki artış ve kapiller vazodilatasyondur. Bu durum hidrostatik basıncı artırarak vasküler eksuda oluşumuna ve lökositlerin damar duvarına yanaşıp (marjinasyon) dokuya sızmasına olanak tanır. Plazma hücrelerinin IgG sentezi yerleşmiş lezyonun (kronik dönem) bulgusudur, akut süreçte henüz devrede değildir.

**Soru 2 (ID: b7d241b6-d601-4730-8463-e27af4f981f6)**
Soru Kökü: Yirmi beş yaşında erkek hasta, diş fırçalama sırasında dişetlerinde kanama şikayetiyle başvuruyor. Klinik muayenede dişetlerinde eritem ve sondalamada kanama izleniyor. Anamnezden hastanın 5 gündür dişlerini fırçalamadığı öğreniliyor. Hastanın mevcut periodontal lezyonunda baskın olarak beklenen hücresel yapı ve kollajen yıkım durumu aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (C): Baskın T lenfosit - İnfiltrasyon çevresinde artan kollajen yıkımı
Açıklama: Klinik senaryoda tarif edilen plak akümülasyonundan 4-7 gün sonra ortaya çıkan eritem ve sondalamada kanama bulguları 'Erken Lezyon' evresini işaret eder. Bu evrede ağırlıklı hücre tipi lenfositlerdir (%74 oranında, çoğunluğu T lenfosit) ve infiltrasyon çevresinde kollajen yıkımı artmıştır. PMNL'ler başlangıç lezyonunda (2-4 gün), plazma hücreleri ise yerleşmiş lezyonda (14-21 gün) baskındır.

---

### ÇİFT 45 (Benzerlik: 0.71)

**Soru 1 (ID: 524fbc2f-9609-4780-a361-1d50f371725b)**
Soru Kökü: Periodontal hastalık seyrinde inflamatuar cevabı sınırlayan moleküllerin dengesi büyük önem taşır. Aşağıdakilerden hangisi makrofaj kaynaklı doku yıkımını yavaşlatan ve antienflamatuar/baskılayıcı etkinlik gösteren sitokinlerden biri **değildir**?
Doğru Şık (E): İnterlökin-1 alfa
Açıklama: IL-1 alfa, IL-1 beta ile birlikte inflamasyonu başlatan, endotel hücrelerinde selektin ekspresyonunu artıran ve kemik rezorpsiyonunu şiddetle uyaran en güçlü pro-inflamatuar (osteoklast aktive edici) sitokinlerden biridir. TGF-beta, IL-10, IL-1Ra ve IL-13 ise anti-inflamatuar savunma ordusunu oluştururlar.

**Soru 2 (ID: 65065180-8bf0-44e3-9278-3d11bdc8dbdc)**
Soru Kökü: İnflamasyonun çözülme sürecinde makrofaj ve fibroblastlardan salınarak IL-1 reseptörlerine kompetitif olarak bağlanan ve osteoklast aktivasyonunu baskılayan endojen molekül aşağıdakilerden hangisidir?
Doğru Şık (C): İnterlökin-1 reseptör antagonisti (IL-1Ra)
Açıklama: IL-1 ailesinde yer alan IL-1Ra, doku yıkımını önlemek için IL-1 reseptörlerine bağlanarak pro-inflamatuar sinyal yolağını bloke eder. PGE2 ve TNF-alfa kemik rezorpsiyonunu uyaran pro-inflamatuar mediatörlerdir. İnflamatuar-immün cevabın kendi kendini sınırlama mekanizmasında IL-1Ra kritik bir anti-inflamatuar inhibitör görevi görür.

---

### ÇİFT 46 (Benzerlik: 0.71)

**Soru 1 (ID: 2daff736-af4d-46c9-9d52-c33bfd479038)**
Soru Kökü: Kırk beş yaşındaki kadın hasta, üç haftadır dişlerini fırçalamadığını ve diş etlerinin renginin koyulaştığını ifade etmektedir. Klinik muayenede diş etlerinde mavimsi-mor bir renk değişikliği, kanama ve şiddetli ödem gözlenmiştir. Bu hastada izlenen renk değişikliğinin temel histopatolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Kan damarlarında genişleme ile venöz dönüşün bozulması ve lokal oksijensizlik
Açıklama: 2-3 haftalık plak birikimi sonucu oluşan yerleşmiş lezyonda kan damarları iyice genişler, kan akımı yavaşlar ve venöz dönüş bozulur. Lokalize oksijensizlik (staz) ve hemoglobin yıkım ürünleri diş etine karakteristik mavimsi (siyanotik) rengini verir. Melanin fizyolojik bir pigmentasyon olup, plak birikimi kaynaklı inflamasyonla ilişkili patolojik bir renklenmeyi açıklamaz.

**Soru 2 (ID: b7d241b6-d601-4730-8463-e27af4f981f6)**
Soru Kökü: Yirmi beş yaşında erkek hasta, diş fırçalama sırasında dişetlerinde kanama şikayetiyle başvuruyor. Klinik muayenede dişetlerinde eritem ve sondalamada kanama izleniyor. Anamnezden hastanın 5 gündür dişlerini fırçalamadığı öğreniliyor. Hastanın mevcut periodontal lezyonunda baskın olarak beklenen hücresel yapı ve kollajen yıkım durumu aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (C): Baskın T lenfosit - İnfiltrasyon çevresinde artan kollajen yıkımı
Açıklama: Klinik senaryoda tarif edilen plak akümülasyonundan 4-7 gün sonra ortaya çıkan eritem ve sondalamada kanama bulguları 'Erken Lezyon' evresini işaret eder. Bu evrede ağırlıklı hücre tipi lenfositlerdir (%74 oranında, çoğunluğu T lenfosit) ve infiltrasyon çevresinde kollajen yıkımı artmıştır. PMNL'ler başlangıç lezyonunda (2-4 gün), plazma hücreleri ise yerleşmiş lezyonda (14-21 gün) baskındır.

---

### ÇİFT 47 (Benzerlik: 0.70)

**Soru 1 (ID: 6ce73a6c-1b77-4942-954b-2f1274c054a3)**
Soru Kökü: Otuz iki yaşında kadın hasta, yoğun plak birikimi ve dişeti oluğundan eksüda akışı bulgularıyla değerlendiriliyor. Dişeti oluğu sıvısı analizinde transepitelyal göçü tamamlamış yoğun polimorf nükleer lökosit (PMNL) saptanıyor. Bağ dokusunda ve junctional epitelde üretilerek bu spesifik nötrofilik infiltrasyonu sağlayan birincil kemotaktik ajan aşağıdakilerden hangisidir?
Doğru Şık (B): CXCL-8 (IL-8)
Açıklama: CXCL-8 (IL-8), birleşim epiteli tarafından salgılanan ve nötrofillerin enfeksiyon bölgesine spesifik kemotaksisini sağlayan ana kemokindir. P. gingivalis gibi bazı patojenler virülans mekanizması olarak epitelden IL-8 salınımını inhibe edip nötrofil göçünü felce uğratarak doku invazyonu yaparlar. Lipoksin A4 ise nötrofil infiltrasyonunu durdurarak inflamasyonu çözer.

**Soru 2 (ID: a5286df5-7367-4923-aca4-9fecaa5bd6f9)**
Soru Kökü: Kırk beş yaşında kadın hasta, alt ön dişlerinde mobilite şikayetiyle başvuruyor. Klinik ve radyografik muayenede ileri derecede ataşman ve alveoler kemik kaybı tespit ediliyor. Alınan dişeti oluğu sıvısı (DOS) örneğinde matriks metalloproteinaz (MMP) seviyelerinin yüksek olduğu görülüyor. Periodontitiste ekstraselüler matriks yıkımında baskın rol oynayan MMP-8'in temel hücresel kaynağı aşağıdakilerden hangisidir?
Doğru Şık (E): Nötrofiller
Açıklama: Periodontitiste yıkımın primer proteinazları olan MMP'lerden kollajenaz aktivitesine sahip MMP-8, temel olarak nötrofillerden salınırken, MMP-1 fibroblastlardan salınmaktadır. Epitel hücreleri ve osteoklastlar da farklı enzimler üretse de (örn. katepsin K), MMP-8'in klinik doku yıkımındaki yoğunluğunun ana kaynağı PMNL (nötrofil) infiltrasyonudur.

---

### ÇİFT 48 (Benzerlik: 0.70)

**Soru 1 (ID: 074dc988-7a06-415e-8b61-ce94436d9c49)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, birinci büyük azı dişlerinde ve kesicilerde lokalize şiddetli kemik kaybı ile karakterize Lokalize Agresif Periodontitis (LAP) teşhisi almıştır. Hastadan alınan örnekte saptanan spesifik patojenin, konak fagositoz mekanizmasını LFA-1 adezinlerine bağlanarak inhibe ettiği ve lökositleri öldürdüğü bilinmektedir. Bu majör virülans faktörü aşağıdakilerden hangisidir?
Doğru Şık (C): Lökotoksin
Açıklama: A. actinomycetemcomitans'ın (Aa) en önemli virülans faktörü, lökositlerin yüzeyindeki LFA-1 reseptörlerine bağlanarak onları tahrip eden lökotoksin (lökosidin) molekülüdür. Gingipain P. gingivalis'e, dentilisin ise T. denticola'ya ait bir proteazdır. Lökositlerin fonksiyon dışı bırakılması, LAP'taki hızlı doku yıkımının primer nedenidir.

**Soru 2 (ID: 3f736528-783c-418a-860a-528484cfcf86)**
Soru Kökü: Porphyromonas gingivalis, periodontitisin progresyonunda 'keystone' patojen olarak tanımlanır ve konağın immün savunmasını manipüle etme yeteneğine sahiptir. Bu bakterinin hücre içi invazyon yeteneğini kullanarak, epitel hücrelerinden salınımını doğrudan inhibe ettiği ve böylece nötrofil kemotaksisini felce uğrattığı molekül aşağıdakilerden hangisidir?
Doğru Şık (C): İnterlökin-8 (CXCL-8)
Açıklama: P. gingivalis, epitel hücrelerini enfekte edip içerisine invaze olduğunda lokal bir immün paralizi (felç) yaratmak için IL-8 (nötrofil kemotaktik faktör) sekresyonunu durdurur. Bu sayede birleşim epiteline nötrofil göçü engellenir, bakteri kendi yaşam alanı etrafında fagositozdan uzak güvenli bir disbiyotik bölge oluşturur.

---

### ÇİFT 49 (Benzerlik: 0.70)

**Soru 1 (ID: 074dc988-7a06-415e-8b61-ce94436d9c49)**
Soru Kökü: Yirmi iki yaşındaki kadın hasta, birinci büyük azı dişlerinde ve kesicilerde lokalize şiddetli kemik kaybı ile karakterize Lokalize Agresif Periodontitis (LAP) teşhisi almıştır. Hastadan alınan örnekte saptanan spesifik patojenin, konak fagositoz mekanizmasını LFA-1 adezinlerine bağlanarak inhibe ettiği ve lökositleri öldürdüğü bilinmektedir. Bu majör virülans faktörü aşağıdakilerden hangisidir?
Doğru Şık (C): Lökotoksin
Açıklama: A. actinomycetemcomitans'ın (Aa) en önemli virülans faktörü, lökositlerin yüzeyindeki LFA-1 reseptörlerine bağlanarak onları tahrip eden lökotoksin (lökosidin) molekülüdür. Gingipain P. gingivalis'e, dentilisin ise T. denticola'ya ait bir proteazdır. Lökositlerin fonksiyon dışı bırakılması, LAP'taki hızlı doku yıkımının primer nedenidir.

**Soru 2 (ID: 332273f3-278f-4cfb-b102-3c90e67aa7a7)**
Soru Kökü: Standart Gram negatif bakteriler genel olarak bağışıklık hücrelerindeki TLR-4 reseptörünü uyarırken, atipik bir lipopolisakkarit (LPS) yapısına sahip olduğu için hem TLR-2 hem de TLR-4 üzerinden eşzamanlı sinyal yolağı oluşturabilen majör periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis, atipik bir LPS yapısına sahiptir; bu farklı moleküler yapı sayesinde konağın immün sistemindeki hem TLR-2 hem de TLR-4 reseptörlerini aktive edebilir. Bu durum bakteriye konak immün yanıtını (sitokin profilini) kendi lehine manipüle etme yeteneği sağlayan eşsiz bir virülans faktörüdür.

---

### ÇİFT 50 (Benzerlik: 0.70)

**Soru 1 (ID: 0b4981e2-9762-47e0-a599-64c29df589be)**
Soru Kökü: Bir hastanın diş eti dokusu histopatolojik olarak incelendiğinde 'ilerlemiş lezyon' teşhisi konulmuştur. Periodontal cep oluşumunu da barındıran bu lezyon evresini, önceki lezyonlardan (kronik gingivitis) ayıran en spesifik ve geri dönüşümsüz bulgu aşağıdakilerden hangisidir?
Doğru Şık (D): Alveolar kemik kaybı ve birleşim epitelinin cep epiteline dönüşerek apikale göçü
Açıklama: İlerlemiş lezyonun (periodontitisin) gingivitisten (yerleşmiş lezyondan) en önemli klinik ve histopatolojik ayırıcı farkı; alveolar kemik kaybının başlaması, periodontal ligamentin harabiyeti ve birleşim epitelinin kök yüzeyi boyunca apikale göç ederek cep epiteline dönüşmesidir. Eritem, sirküler lif kaybı ve artan DOS erken/yerleşmiş lezyonlarda da tipiktir.

**Soru 2 (ID: 6b71d891-ccf9-429c-abe3-53d333b95e9b)**
Soru Kökü: Gingival inflamasyonun klinik olarak henüz belirgin izlenmediği ilk safhalarında, bakteriyel komponentlerin epitel bariyerini aşıp bağ dokusuna ulaşmasını sağlayan en kritik mikroskobik değişim aşağıdakilerden hangisidir?
Doğru Şık (D): Epitel hücrelerinin birbirleriyle olan bağlantılarının gevşemesi ve aralarının genişlemesi
Açıklama: Gingival inflamasyonun ilk safhalarında (başlangıç lezyonu) mikroskobik olarak epitel hücrelerinin arasındaki bağlantılar (dezmozomlar) gevşer ve hücreler arası boşluklar genişler, bu da bakteri ürünlerinin lamine propriaya sızmasına yol açar. Epitelin apikale göçü yerleşmiş/ilerlemiş lezyon aşamasındadır. Ülserasyonlar ise erken dönem değil, ileri doku yıkımı bulgusudur.

---

### ÇİFT 51 (Benzerlik: 0.70)

**Soru 1 (ID: 65065180-8bf0-44e3-9278-3d11bdc8dbdc)**
Soru Kökü: İnflamasyonun çözülme sürecinde makrofaj ve fibroblastlardan salınarak IL-1 reseptörlerine kompetitif olarak bağlanan ve osteoklast aktivasyonunu baskılayan endojen molekül aşağıdakilerden hangisidir?
Doğru Şık (C): İnterlökin-1 reseptör antagonisti (IL-1Ra)
Açıklama: IL-1 ailesinde yer alan IL-1Ra, doku yıkımını önlemek için IL-1 reseptörlerine bağlanarak pro-inflamatuar sinyal yolağını bloke eder. PGE2 ve TNF-alfa kemik rezorpsiyonunu uyaran pro-inflamatuar mediatörlerdir. İnflamatuar-immün cevabın kendi kendini sınırlama mekanizmasında IL-1Ra kritik bir anti-inflamatuar inhibitör görevi görür.

**Soru 2 (ID: 6955bea8-29d5-4c11-9295-b6ae9b09f2b1)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik aktiviteyi durdurarak yıkımı sınırlandırmakla görevli anti-osteoklastojenik sitokinler bulunur. Aşağıdakilerden hangisi bu inhibitör sitokinlerden biri **değildir**?
Doğru Şık (C): İnterlökin-6
Açıklama: İnterlökin-6 (IL-6), IL-1 beta ve TNF-alfa gibi proinflamatuar ve kemik rezorpsiyonunu stimüle eden (osteoklastojenik) sitokinler arasında yer alır. IL-4, IL-10, IL-13 ve İnterferon-gama ise kemik yıkımını baskılayan ve enflamasyonu sınırlandıran anti-osteoklastojenik sitokinlerdir.

---

### ÇİFT 52 (Benzerlik: 0.70)

**Soru 1 (ID: 3710b7c9-39fc-45b0-956f-6f7c9bb78071)**
Soru Kökü: Kırk yaşında erkek hasta refrakter periodontitis tablosu ile değerlendirilmektedir. Alınan subgingival plak örneğinde toplam mikrobiyal yük düşük olmasına rağmen, spesifik bir patojenin ortamdaki az sayısına karşılık lokal konak inflamatuar yanıtını tamamen kendi lehine çevirdiği ve tüm mikrobiyota dengesini bozduğu saptanmıştır. 'Keystone patojen' kavramına uyan ve bu özellikleriyle ön plana çıkan bakteri aşağıdakilerden hangisidir?
Doğru Şık (C): Porphyromonas gingivalis
Açıklama: Keystone patojen, dominant bir türün çok sayıda olmasının aksine, sayıca az olsa bile konak immün yanıtını manipüle ederek (örn. IL-8 inhibisyonu, TLR-2/4 çift aktivasyonu) lokal homeostazı disbiyozise çeviren bakteridir. Periodontitis patogenezinde bu modelin ana örneği Porphyromonas gingivalis'tir.

**Soru 2 (ID: cd66910d-7845-46f2-8f4b-28fc43a55d27)**
Soru Kökü: Kırk sekiz yaşında erkek hasta, sondalamada kanaması olan 8 mm'lik periodontal ceplere sahiptir. Bölgedeki lokalize pürülan inflamasyon nedeniyle cep içi ısısının dişe göre belirgin şekilde (yaklaşık 2-3°C) arttığı ölçülmüştür. Bu sıcaklık dalgalanmasının P. gingivalis üzerinde yarattığı moleküler yanıt ve klinik sonucu aşağıdakilerden hangisidir?
Doğru Şık (C): Isı şok proteinleri (HSP) sentezlenir, majör fimbrial adezin ekspresyonu değişerek virülans artar.
Açıklama: Periodontal cepte artan lokal ısı, bakterilerde gen ekspresyonunu değiştirerek Isı Şok Proteinlerinin (HSP) sentezini tetikler. Bu proteinler, P. gingivalis gibi patojenlerde majör fimbrial adezinlerin yapısını ve ekspresyonunu değiştirerek bakterinin tutunma kapasitesini ve virülansını artırır. Bu durum patojenlerin inflamatuar strese karşı geliştirdiği hücresel bir adaptasyondur.

---

### ÇİFT 53 (Benzerlik: 0.70)

**Soru 1 (ID: 6b71d891-ccf9-429c-abe3-53d333b95e9b)**
Soru Kökü: Gingival inflamasyonun klinik olarak henüz belirgin izlenmediği ilk safhalarında, bakteriyel komponentlerin epitel bariyerini aşıp bağ dokusuna ulaşmasını sağlayan en kritik mikroskobik değişim aşağıdakilerden hangisidir?
Doğru Şık (D): Epitel hücrelerinin birbirleriyle olan bağlantılarının gevşemesi ve aralarının genişlemesi
Açıklama: Gingival inflamasyonun ilk safhalarında (başlangıç lezyonu) mikroskobik olarak epitel hücrelerinin arasındaki bağlantılar (dezmozomlar) gevşer ve hücreler arası boşluklar genişler, bu da bakteri ürünlerinin lamine propriaya sızmasına yol açar. Epitelin apikale göçü yerleşmiş/ilerlemiş lezyon aşamasındadır. Ülserasyonlar ise erken dönem değil, ileri doku yıkımı bulgusudur.

**Soru 2 (ID: ad52c0a9-9e27-457a-8fc5-3f2dd0355485)**
Soru Kökü: Aşağıdakilerden hangisi plak birikimini takiben 2-3 hafta içinde gelişen 'yerleşmiş lezyon' (kronik gingivitis) evresinin histopatolojik bulgularından biri **değildir**?
Doğru Şık (A): Alveolar kemikte osteoklastik aktivitenin başlaması
Açıklama: Yerleşmiş lezyon evresinde plazma hücreleri baskındır, immünglobulinler üretilir ve birleşim epiteli cep epiteline dönüşür; ancak kemik kaybı henüz başlamamıştır. Alveolar kemik ve periodontal ligamentte yıkımın başlaması, yerleşmiş lezyonun 'ilerlemiş lezyona' (periodontitis) dönüştüğünü gösteren anahtar ayırt edici bulgudur.

---

### ÇİFT 54 (Benzerlik: 0.70)

**Soru 1 (ID: c49150b2-e29f-46b2-8674-09216c41726a)**
Soru Kökü: Periodontal hastalık patogenezinde 'İyileşme ve fibrozis' aşamasında gerçekleşen hücresel ve dokusal olaylarla ilgili aşağıdaki ifadelerden hangisi **en az olasıdır**?
Doğru Şık (E): Başlangıç lezyonundaki baskın PMNL infitrasyonu sayıca zirve yapar.
Açıklama: Başlangıç lezyonundaki PMNL (nötrofil) infiltrasyonunun zirve yapması akut inflamasyonun ilk evrelerine aittir; iyileşme ve fibrozis aşamasında bu hücreler azalır. İyileşme sürecinde PMNL baskınlığı yerini makrofajlara, adaptif immün sisteme ve fibroblastik onarım aktivitesine bırakır. Akut yıkım evresi sönümlenmeden tamir fazına geçilemez.

**Soru 2 (ID: ea14a73f-3e5d-468f-a107-01126a178f9a)**
Soru Kökü: Bakteriyel atağa karşı dişetinde gelişen enflamasyon sürecinde, plak akümülasyonundan 2-4 gün sonra ortaya çıkan 'başlangıç lezyonu' aşamasında bağ dokusunda dominant olarak izlenen enflamatuar hücre grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Polimorfonükleer lökositler (Nötrofiller)
Açıklama: Başlangıç lezyonunda kan damarları genişler ve vaskülit oluşurken, lökositlerin mikrobiyal atağa ilk cevabı olarak dominant hücre grubu PMNL'lerdir (nötrofiller). Makrofajlar ve lenfositler ise sürecin ilerleyen dönemlerinde (erken ve yerleşmiş lezyon) baskın hale gelmeye başlar. Bu nedenle ilk savunma hattını oluşturan ve dokuya ilk göç eden hücre nötrofildir.

---

### ÇİFT 55 (Benzerlik: 0.70)

**Soru 1 (ID: ad52c0a9-9e27-457a-8fc5-3f2dd0355485)**
Soru Kökü: Aşağıdakilerden hangisi plak birikimini takiben 2-3 hafta içinde gelişen 'yerleşmiş lezyon' (kronik gingivitis) evresinin histopatolojik bulgularından biri **değildir**?
Doğru Şık (A): Alveolar kemikte osteoklastik aktivitenin başlaması
Açıklama: Yerleşmiş lezyon evresinde plazma hücreleri baskındır, immünglobulinler üretilir ve birleşim epiteli cep epiteline dönüşür; ancak kemik kaybı henüz başlamamıştır. Alveolar kemik ve periodontal ligamentte yıkımın başlaması, yerleşmiş lezyonun 'ilerlemiş lezyona' (periodontitis) dönüştüğünü gösteren anahtar ayırt edici bulgudur.

**Soru 2 (ID: f5324911-86da-401b-9032-47cf6d5e4705)**
Soru Kökü: Periodontal hastalık patogenezindeki aşamalar değerlendirildiğinde, 'İnvazyon' evresi için aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Antijenlere karşı humoral immün cevabın oluştuğu esas basamaktır.
Açıklama: Humoral immün cevabın (B lenfosit ve antikor üretimi) antijenlere karşı güçlü bir şekilde oluştuğu evre iyileşme ve fibrozis aşamasıdır, invazyon değil. İnvazyon; bakteri ve ürünlerinin epitel bariyerini aşıp bağ dokusuna ve alveolar kemiğe doğru ilerlemesini ifade eder. Bu süreç doku destrüksiyonu ve alevlenme ile karakterizedir.

---

### ÇİFT 56 (Benzerlik: 0.69)

**Soru 1 (ID: 332273f3-278f-4cfb-b102-3c90e67aa7a7)**
Soru Kökü: Standart Gram negatif bakteriler genel olarak bağışıklık hücrelerindeki TLR-4 reseptörünü uyarırken, atipik bir lipopolisakkarit (LPS) yapısına sahip olduğu için hem TLR-2 hem de TLR-4 üzerinden eşzamanlı sinyal yolağı oluşturabilen majör periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis, atipik bir LPS yapısına sahiptir; bu farklı moleküler yapı sayesinde konağın immün sistemindeki hem TLR-2 hem de TLR-4 reseptörlerini aktive edebilir. Bu durum bakteriye konak immün yanıtını (sitokin profilini) kendi lehine manipüle etme yeteneği sağlayan eşsiz bir virülans faktörüdür.

**Soru 2 (ID: 7e7f6195-55f7-4a68-9282-335ebffb3da1)**
Soru Kökü: Porphyromonas gingivalis ve Aggregatibacter actinomycetemcomitans gibi majör periodontal patojenlerin konak dokuya tutunmasını, kolonize olmasını ve makrofajlardan IL-12 salınımını inhibe etmesini sağlayan en önemli yüzey virülans yapısı aşağıdakilerden hangisidir?
Doğru Şık (B): Pili (Fimbria)
Açıklama: Pili veya fimbrialar, P. gingivalis ve A.a'nın epitel hücrelerine ve diğer bakterilere sıkıca yapışmasını sağlayan, hareketle ilgisi olmayan temel adezin yapılarıdır. Fimbrialar aynı zamanda makrofajları modüle ederek IL-12 salınımını engeller ve hücresel immün yanıtı zayıflatır. Gingipain ise proteolitik yıkım ve sitokin inaktivasyonu yapan bir enzimdir.

---

### ÇİFT 57 (Benzerlik: 0.69)

**Soru 1 (ID: 524fbc2f-9609-4780-a361-1d50f371725b)**
Soru Kökü: Periodontal hastalık seyrinde inflamatuar cevabı sınırlayan moleküllerin dengesi büyük önem taşır. Aşağıdakilerden hangisi makrofaj kaynaklı doku yıkımını yavaşlatan ve antienflamatuar/baskılayıcı etkinlik gösteren sitokinlerden biri **değildir**?
Doğru Şık (E): İnterlökin-1 alfa
Açıklama: IL-1 alfa, IL-1 beta ile birlikte inflamasyonu başlatan, endotel hücrelerinde selektin ekspresyonunu artıran ve kemik rezorpsiyonunu şiddetle uyaran en güçlü pro-inflamatuar (osteoklast aktive edici) sitokinlerden biridir. TGF-beta, IL-10, IL-1Ra ve IL-13 ise anti-inflamatuar savunma ordusunu oluştururlar.

**Soru 2 (ID: 5834eee2-ef5a-46b8-94a2-f507569d908b)**
Soru Kökü: Alveolar kemik döngüsünde osteoklastik rezorpsiyon çeşitli mediatörler tarafından aktive edilmektedir. Aşağıdakilerden hangisi osteoklastları uyararak kemik rezorpsiyonunu stimüle eden faktörlerden biri **değildir**?
Doğru Şık (D): Osteoprotegerin (OPG)
Açıklama: Osteoprotegerin (OPG), RANKL'ye bağlanarak onun RANK reseptörüyle etkileşimini bloke eden ve böylece osteoklastogenezi inhibe eden koruyucu bir tuzak (decoy) reseptördür. LIF, Oncostatin M, bradikinin ve trombin ise IL-1 ve TNF-alfa ile birlikte osteoklastik aktiviteyi uyararak yıkıma katkıda bulunurlar.

---

### ÇİFT 58 (Benzerlik: 0.69)

**Soru 1 (ID: 7e7f6195-55f7-4a68-9282-335ebffb3da1)**
Soru Kökü: Porphyromonas gingivalis ve Aggregatibacter actinomycetemcomitans gibi majör periodontal patojenlerin konak dokuya tutunmasını, kolonize olmasını ve makrofajlardan IL-12 salınımını inhibe etmesini sağlayan en önemli yüzey virülans yapısı aşağıdakilerden hangisidir?
Doğru Şık (B): Pili (Fimbria)
Açıklama: Pili veya fimbrialar, P. gingivalis ve A.a'nın epitel hücrelerine ve diğer bakterilere sıkıca yapışmasını sağlayan, hareketle ilgisi olmayan temel adezin yapılarıdır. Fimbrialar aynı zamanda makrofajları modüle ederek IL-12 salınımını engeller ve hücresel immün yanıtı zayıflatır. Gingipain ise proteolitik yıkım ve sitokin inaktivasyonu yapan bir enzimdir.

**Soru 2 (ID: a619474b-aad7-4948-b311-02b11e1b132f)**
Soru Kökü: Porphyromonas gingivalis'in majör virülans faktörlerinden olan ve salgıladığı proteazlar olarak bilinen 'Gingipain'lerin immün sistem üzerindeki etkileriyle ilgili aşağıdaki mekanizmalardan hangisi doğrudur?
Doğru Şık (E): TNF-alfayı degrade edip inaktive ederken, eş zamanlı olarak IL-6 ve IL-8 salınımını uyarması
Açıklama: Gingipainler konak yanıtını çok yönlü modüle eden güçlü proteazlardır; TNF-alfayı parçalayıp inaktive ederken, paradoksal olarak doku yıkımını artırmak için hücrelerden IL-6 ve IL-8 salınımını uyarırlar. IL-12 inhibisyonu fimbria kaynaklıdır, IL-8'in genel inhibisyonu ise bakterinin hücresel invazyon yetenekleriyle ilişkilidir.

---

