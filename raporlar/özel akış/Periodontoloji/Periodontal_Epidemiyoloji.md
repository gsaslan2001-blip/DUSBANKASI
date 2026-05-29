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

### ÇİFT 1 (Benzerlik: 0.93)

**Soru 1 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

**Soru 2 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

---

### ÇİFT 2 (Benzerlik: 0.92)

**Soru 1 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

**Soru 2 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

---

### ÇİFT 3 (Benzerlik: 0.90)

**Soru 1 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

**Soru 2 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

---

### ÇİFT 4 (Benzerlik: 0.89)

**Soru 1 (ID: 001367cf-c6b5-447e-9f53-f9504337f131)**
Soru Kökü: Bakteri plağının kalınlığını veya hacmini değerlendirmekten ziyade, mikrobiyal dental plağı boyayarak dişin 4 yüzeyinde sadece plağın varlığını (+) veya yokluğunu (-) kayıt altına alan, iyi bir ağız hijyeni için skorun sıfır olmasını hedefleyen indeks aşağıdakilerden hangisidir?
Doğru Şık (B): O'Leary Plak Kontrol Kaydı
Açıklama: O'Leary Plak Kontrol Kaydı (Plak İndeksi), dişlerin 4 yüzeyindeki plağı boyadıktan sonra sadece var (+) veya yok (-) olarak kaydeder ve plağın yüzdesini hesaplayarak hastanın motivasyonunda kullanılır. Löe-Silness indeksi plağın kalınlığını/miktarını 0-3 arası skorlarken, O'Leary ikili (dichotomous) bir değerlendirme sunar. Aproksimal alan plak indeksi ise 4 yüzey yerine sadece ara yüzleri değerlendirir.

**Soru 2 (ID: ec95a88f-ab59-4f26-9cad-54c8a0b91008)**
Soru Kökü: Dişlerin dört yüzeyindeki (fasial, mezial, distal, lingual) supragingival mikrobiyal dental plağı renklendirici boyalar yardımıyla tespit edip, sadece plak varlığını (+) veya yokluğunu (-) değerlendirerek yüzde (%) hesaplaması yapan indeks aşağıdakilerden hangisidir?
Doğru Şık (A): Plak kontrol kaydı (O'Leary)
Açıklama: O'Leary plak kontrol kaydı (Plak İndeksi), dişlerin dört yüzeyini boyayarak plak varlığını var/yok şeklinde nitel olarak kodlar ve bir yüzde skoru üretir. Sillness-Löe indeksi plak kalınlığını skorlarken (0-3), O'Leary indeksi hastanın ağız hijyeni motivasyonunda pratik bir (+) veya (-) haritalaması sunar.

---

### ÇİFT 5 (Benzerlik: 0.88)

**Soru 1 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

**Soru 2 (ID: ab55631c-ee00-4771-b25e-9ac17370c06a)**
Soru Kökü: Kırk beş yaşındaki kadın hasta rutin muayeneye başvurmuştur. Yapılan ölçümlerde alt sağ birinci büyük azı dişinde (46 numara) yaklaşık %25 oranında ataşman kaybı ve sığ bir Sınıf I furkasyon tutulumu saptanmıştır. Furkasyon bölgesine enstrümantasyon erişimi tamdır. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): İyi (Fair)
Açıklama: Yaklaşık %25 ataşman kaybının varlığı ve lokasyon/derinlik açısından küret erişimini engellemeyen Sınıf I furkasyon tutulumu 'İyi (Fair prognosis)' sınıfının tipik klinik kriterleridir. Ataşman kaybı %50'ye ulaşıp kök formu zayıfladığında ise prognoz kötüleşir.

---

### ÇİFT 6 (Benzerlik: 0.88)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: 87e13d94-2d81-48c5-ae0a-b5cff8a0983e)**
Soru Kökü: Kırk beş yaşında kadın hastanın 26 numaralı dişinde yaklaşık %50 ataçman kaybı, kısa kök formu, elverişsiz kron-kök oranı ve II. sınıf furkasyon tutulumu tespit ediliyor. Furkasyon bölgesine lokasyon ve derinlik açısından erişim ve alet adaptasyonu zor da olsa mümkün görünmektedir. Standart klinik kriterlere göre bu dişin periodontal prognoz kategorisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor prognosis)
Açıklama: Kötü (Poor) prognoz tanımı: %50 ataçman kaybı, zayıf/kısa kök formu, elverişsiz kron-kök oranı ve erişimin kolay olmamakla birlikte MÜMKÜN olduğu II. sınıf furkasyon tutulumunu tanımlar. Eğer erişim 'zor/mümkün değil' veya III. sınıf furka olsaydı Şüpheli (Questionable) prognoza girerdi.

---

### ÇİFT 7 (Benzerlik: 0.88)

**Soru 1 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 8 (Benzerlik: 0.88)

**Soru 1 (ID: 2ef78da9-38b6-40ad-af7c-93c8cfd2c90d)**
Soru Kökü: 22 yaşında kadın hasta, estetik şikayetle kliniğe geliyor. Anamnezde diş fırçalamayı ihmal ettiğini ancak diyetinde günde 2 litre asitli içecek tükettiğini belirtiyor. Muayenede mine yüzeyinde bakteri olmaksızın, pürüzsüz ve parlak karakterde geniş madde kayıpları izleniyor. Herhangi bir mekanik aşındırıcı teması rapor edilmeyen bu tablodaki madde kaybı patolojisi aşağıdakilerden hangisidir?
Doğru Şık (E): Erozyon
Açıklama: Erozyon, bakteriyel olmayan kimyasal asitlerin (gastrik reflü veya asitli gıdalar) diş yüzeyiyle teması sonucu oluşan mekanik olmayan madde kaybıdır. Abrazyon yabancı cisimlerle mekanik sürtünmeyi (fırça), atrizyon ise karşılıklı dişlerin birbirini çiğneme kuvvetiyle aşındırmasını ifade eder.

**Soru 2 (ID: f072b323-658e-484d-82d2-19df08141e84)**
Soru Kökü: Yirmi beş yaşında kadın hastanın üst ön dişlerinin vestibül yüzeylerinde, mine dokusunun parlaklığını kaybettiği ve sığ, düzgün çanak şeklinde madde kayıplarının olduğu izlenmektedir. Hastanın anamnezinde asitli içecekleri gün içinde sürekli ve yudumlayarak tükettiği öğrenilmiştir. Bakteriyel olmayan bu kimyasal aşınma türü aşağıdakilerden hangisi ile adlandırılır?
Doğru Şık (C): Erozyon
Açıklama: Erozyon, asitli gıda/içecek tüketimi veya mide reflüsü gibi mekanik ve bakteriyel olmayan, tamamen kimyasal süreçlerle meydana gelen diş dokusu kaybıdır. Abrazyon diş fırçalama gibi mekanik sürtünmeyle, atrizyon ise karşıt dişlerin temasıyla oluşur. Çanak şeklinde düzgün yüzeyler erozyonun tipik morfolojik klinik belirtecidir.

---

### ÇİFT 9 (Benzerlik: 0.87)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: d55ef9ac-aadb-4ec0-a9fb-14219f833c9a)**
Soru Kökü: Kırk sekiz yaşındaki sistemik stres altında çalışan bir hastanın muayenesinde; 26 numaralı dişte %50 ataşman kaybı, kısa-konik elverişsiz kök formu saptanmıştır. Dişte Sınıf II furkasyon tutulumu mevcuttur ancak furkasyon girişine klinisyenin el aletleriyle ulaşması mümkündür. Bu klinik tabloya göre 26 numaralı dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor)
Açıklama: Ataşman kaybının %50 civarında olması, elverişsiz kron/kök oranı (kısa konik kök) ve derinlik açısından erişimi zor olsa da mümkün olan Sınıf II furkasyon tutulumu tablosu, 'Kötü (Poor)' prognoz kriterlerini tam olarak karşılar. Ataşman kaybı %50'yi aşar, furkasyon Sınıf III'e ilerler veya erişim tamamen imkansızlaşırsa dişin durumu 'Şüpheli (Questionable)' seviyesine düşer.

---

### ÇİFT 10 (Benzerlik: 0.87)

**Soru 1 (ID: 790ee58f-375f-45be-ac2d-f51b3773e565)**
Soru Kökü: Saxer ve Muhlevan tarafından 1975 yılında geliştirilmiş olan ve gingival inflamasyonu değerlendirmek amacıyla sadece interdental bölgeye odaklanarak buradaki kanama profilini saptayan indeks aşağıdakilerden hangisidir?
Doğru Şık (C): Papil kanama indeksi (PBI)
Açıklama: İnterdental papil bölgesindeki kanamaya spesifik olarak odaklanan indeks Papil Kanama İndeksi'dir (PBI). Saxer ve Muhlevan tarafından geliştirilmiştir. Papiller bölge plak birikimine en yatkın alan olduğu için inflamasyonun ilk belirtilerini yakalamada son derece hassastır.

**Soru 2 (ID: b155f888-47c6-41f4-bc70-95e2148778bd)**
Soru Kökü: Periodontal muayenede enflamasyonun boyutunu belirlemek amacıyla kullanılan ve Saxer ile Muhlevan tarafından geliştirilip, marjinal dişetinden ziyade sadece interdental papillerdeki kanamayı skorlayan indeks aşağıdakilerden hangisidir?
Doğru Şık (E): Papil Kanama İndeksi (PBI)
Açıklama: Papil kanama indeksi (PBI), interdental papilin mezial ve distal sulkuslarında sondalama sonrası beliren kanamanın şiddetini lokal olarak değerlendirir. Marjinal veya tüm dişeti ünitelerini değerlendiren diğer indekslerin aksine, sadece papiller inflamasyon ocağına odaklanan spesifik bir tasarıma sahiptir.

---

### ÇİFT 11 (Benzerlik: 0.86)

**Soru 1 (ID: 73fec0b6-3f20-4893-9d56-e27ec721e8cc)**
Soru Kökü: Enflamasyonun patolojik mediatörlerinden biri olan ve tedavi edilmemiş periodontitisli hastaların dişeti oluğu sıvısında aktif yıkım bölgelerinde yüksek konsantrasyonda tespit edilen, temel etkisi osteoklastik kemik rezorpsiyonunu indüklemek olan molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Prostaglandin E2
Açıklama: Prostaglandin E2 (PGE2) araşidonik asit metabolitidir ve periodontal enflamasyonda kemik rezorpsiyonunu (osteoklast aktivasyonunu) güçlü biçimde indükleyen primer lokal lipid mediatördür. Aktif yıkım gösteren bölgelerdeki cep sıvısında düzeyi artar. Glukuronidaz ve elastaz lizozomal enzimdir; osteokalsin ise kemik yapım belirtecidir.

**Soru 2 (ID: afc71ce0-9962-428e-9b5e-6fbb1cfe8ad1)**
Soru Kökü: Aşağıdakilerden hangisi dişeti oluğu sıvısında saptanan, enflamasyonun patent bir mediatörü olarak doğrudan kemik rezorpsiyonunu indükleyen ve tedavi edilmemiş aktif yıkım vakalarında seviyesi artan moleküldür?
Doğru Şık (B): Prostaglandin E2
Açıklama: Prostaglandin E2, inflame bölgelerde artan, kemik rezorpsiyonunu şiddetle indükleyen ve konsantrasyonu aktif yıkım safhasında pik yapan spesifik bir inflamasyon mediatörüdür. Hidroksiprolin ve glikozaminoglikanlar mediatör değil yıkım ürünüdür; ALP ve katepsin ise enzimdir.

---

### ÇİFT 12 (Benzerlik: 0.86)

**Soru 1 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 13 (Benzerlik: 0.86)

**Soru 1 (ID: 454d966f-4132-4da1-bb98-4eaa814c19ef)**
Soru Kökü: Kırk beş yaşında erkek hasta alt ön bölgesindeki diş taşlarından rahatsızlık duymaktadır. Klinik muayenede WHO zondunun siyah bandı tamamen görünürken, supragingival ve subgingival alanlarda yoğun diş taşı birikimi tespit edilmiştir. Bu sekstant için CPITN kodu dikkate alındığında endike olan tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (D): Oral hijyen eğitimi ve kök yüzeyi düzleştirme
Açıklama: CPITN Kod 2; cep derinliğinin 3.5 mm'yi geçmediği ancak supra/subgingival diş taşının veya taşkın restorasyon marjinlerinin bulunduğu durumu ifade eder. Bu durumda tedavi protokolü oral hijyen eğitimi (OHE) ile birlikte diş taşı temizliği ve kök yüzeyi düzleştirilmesidir (SCRP). Cep derinliği patolojik sınırlara (4-5 mm) ulaşmadığı için Kod 3 tedavisi olan modifiye yaklaşımlara geçilmez.

**Soru 2 (ID: 89e8aa50-28b0-4b0b-b62d-8ea26e4141b1)**
Soru Kökü: 42 yaşında erkek hasta alt anterior bölgesindeki dişetlerinde rahatsızlık hissiyle geliyor. CPITN sondu ile yapılan muayenede patolojik cep derinliği saptanmamış (siyah bant görünür halde), ancak subgingival bölgelerde yoğun diş taşı tespit edilmiştir. İlgili sekstantın CPITN skoru ve uygulanması gereken minimum tedavi prosedürü aşağıdakilerden hangisidir?
Doğru Şık (B): Kod 2 / Oral hijyen eğitimi ve diş taşı temizliği
Açıklama: CPITN Kod 2, kanama olsun veya olmasın supragingival/subgingival diş taşının varlığı ile karakterizedir. Patolojik cep oluşumu henüz yoktur. Bu sekstant için tedavi protokolü kişisel oral hijyen eğitimine (OHE) ek olarak diş taşı temizliğinin (SCRP - scaling and root planing) uygulanmasıdır.

---

### ÇİFT 14 (Benzerlik: 0.86)

**Soru 1 (ID: 29f4af0b-3b85-4a62-b6fe-719ea0f2429f)**
Soru Kökü: Klinik periodontal muayenede iki aletin sapı kullanılarak bir dişe vestibülo-lingual yönde kuvvet uygulanmış ve dişteki hareketlilik gözlemlenmiştir. Diş hareketinin 0.2 mm'yi geçmediği, vertikal bir çökmenin olmadığı saptanmıştır. Miller'ın Mobilite İndeksi'ne göre bu dişin skoru aşağıdakilerden hangisidir?
Doğru Şık (E): Skor 0
Açıklama: Miller'ın Mobilite İndeksi'nde kuvvet uygulandığında dişin 0.2 mm'yi geçmeyen fizyolojik hareketi Skor 0 olarak değerlendirilir. Hareket 1 mm'den az ise Skor 1, 1-2 mm arası ise Skor 2, 2 mm'yi aşan dikey yönde (apikal çökme) veya dönme hareketi varsa Skor 3 olarak kaydedilir. Bu indeks patolojik ve fizyolojik mobilitenin klinik standart ayrımıdır.

**Soru 2 (ID: e45e061f-f975-43a9-8c61-7879ba71ba90)**
Soru Kökü: Klinik muayene sırasında diş mobilitesi periodontal teşhisin önemli bir parçasıdır. Miller Mobilite İndeksine göre, parmak basıncıyla uygulanan horizontal kuvvete karşı 1 ila 2 mm arasında diş hareketi saptanması durumunda kaydedilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (B): Skor 2
Açıklama: Miller İndeksi 0-3 arası skorlanır; Skor 1: 1 mm'den az horizontal hareket, Skor 2: 1-2 mm arası horizontal hareket, Skor 3: 2 mm'yi aşan dikey yönde (aksiyel) çökmeyi de içeren şiddetli mobiliteyi tanımlar. Bu derecelendirme patolojik sekonder mobilitenin şiddetini belirleyerek splintleme veya okluzal aşındırma ihtiyacını yönlendirir.

---

### ÇİFT 15 (Benzerlik: 0.86)

**Soru 1 (ID: 3e051156-66b5-402d-b639-4a153c636432)**
Soru Kökü: Epidemiyolojik çalışmalarda, gruplar arası kesitsel değerlendirmelerle belirlenmiş olan, muhtemel hastalık yapma ihtimali taşıyan ancak uzun dönem (longitudinal) prospektif çalışmalarla kesin nedensel rolü henüz tam teyit edilmemiş faktörler aşağıdakilerden hangisi ile isimlendirilir?
Doğru Şık (E): Risk göstergesi
Açıklama: Risk göstergeleri (Risk indikatörleri), kesitsel araştırmalarda hastalıkla ilişkili bulunan ancak nedenselliği boylamsal çalışmalarla kesinleşmemiş potansiyel faktörlerdir (örn. HIV, Osteoporoz). Risk faktörleri ise hastalığı başlattığı uzun dönem verilerle (örn. Sigara, Diyabet) kanıtlanmış çevresel veya davranışsal etkenlerdir. Bireysel risk belirleyicileri yaş ve genetik gibi hastanın değiştirilemez anatomik/biyolojik özellikleridir.

**Soru 2 (ID: e5c58dc2-7354-4497-a651-776be4361f3a)**
Soru Kökü: Gruplar arası çalışmalarda hastalık riski ile ilişkili bulunmuş olan, ancak uzun dönem (longitudinal) prospektif çalışmalarla bu ilişkisi henüz kesin olarak teyit edilmemiş faktörler terminolojik olarak nasıl adlandırılır?
Doğru Şık (E): Risk göstergeleri (indikatörleri)
Açıklama: Risk göstergeleri (indikatörleri), kesitsel gruplar arası araştırmalarda hastalıkla bağlantılı görünen fakat uzun soluklu izlem çalışmalarıyla nedenselliği kanıtlanmamış faktörlerdir. Risk faktörleri ise longitudinal çalışmalarla hastalığı artırdığı ispatlanmış parametrelerdir. Terminolojide bu ayrım epidemiyolojik kanıtın gücüne dayanır.

---

### ÇİFT 16 (Benzerlik: 0.86)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: 4550901e-be84-4163-86af-4acbdb0ee30f)**
Soru Kökü: Elli beş yaşındaki erkek hastanın panoramik ve periapikal radyografik muayenesinde 16 numaralı dişte %50 oranında ataşman kaybı saptanmıştır. Klinik sondalamada Sınıf II furkasyon tutulumu izlenmiş, ancak bu bölgeye spesifik küretlerle erişimin ve temizliğin tamamen mümkün olduğu belirlenmiştir. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (B): Kötü
Açıklama: Ataşman kaybının %50 civarında olması ve kron/kök oranının elverişsizleşmeye başlaması dişin prognozunu Kötü (Poor) sınıfına sokar. Sınıf II furkasyon varlığı Kötü ve Şüpheli (Questionable) prognoz arasında ayırıcıdır; erişimin KISMEN KOLAY VE MÜMKÜN olması dişi Kötü prognozda tutarken, erişimin İMKANSIZA YAKIN VEYA ZOR olması durumu Şüpheli prognoza düşürür. Vakada erişim mümkün olduğu için Kötü prognoz tanısı konur.

---

### ÇİFT 17 (Benzerlik: 0.85)

**Soru 1 (ID: 9dd40028-8123-476f-ab8b-36ee69a573b3)**
Soru Kökü: Periodontal risk değerlendirmesinde faktörler nedensellik potansiyellerine ve değiştirilebilirliklerine göre sınıflandırılır. Buna göre aşağıdakilerden hangisi periodontal hastalık için çevresel veya davranışsal bir "risk faktörü" değil, bir "bireysel risk belirleyicisi (determinantı)"dır?
Doğru Şık (E): Cinsiyet
Açıklama: Cinsiyet, yaş, sosyoekonomik durum ve genetik yapı bireyin değiştirilemeyen temel özellikleridir ve 'bireysel risk belirleyicisi' olarak adlandırılırlar. Sigara, spesifik bakteriler, anatomik/restoratif tutucular ve diyabet ise hastalığa doğrudan yatkınlık oluşturan 'risk faktörleri'dir.

**Soru 2 (ID: b0084ab3-3679-467b-8c4f-03b62bd3ea45)**
Soru Kökü: Periodontal hastalığın seyrini etkileyen 'bireysel risk belirleyicileri' (risk determinanları) arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (B): Sigara kullanımı
Açıklama: Bireysel risk belirleyicileri (determinanları), yaş, cinsiyet, genetik gibi bireyin değiştiremeyeceği (sosyoekonomik durum ve stres de bu gruba dahil edilmiştir) yapısal özellikleridir. Sigara ise dışarıdan alınan ve değiştirilebilen net bir 'risk faktörü'dür.

---

### ÇİFT 18 (Benzerlik: 0.85)

**Soru 1 (ID: 9d0c971c-99d1-43ec-8cdc-b11e6768ebbe)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) ve AAP tarafından desteklenen PSR (Periodontal Screening and Recording) indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): İndeksin temel zafiyeti, klinik ataşman kaybı hakkında hiçbir bilgi vermemesidir.
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermezken, onun modifiye versiyonu olan PSR indeksi ataşman kaybını gösteren özel işaretlemelere (* sembolü gibi klinik anormallikler) izin verir. PSR'ın CPITN'den ayrılan ve erken tanıda öne çıkan en önemli avantajı ataşman kaybını raporlayabilmesidir.

**Soru 2 (ID: cb732f6f-4bd4-4f85-9bc3-167a9f5eec92)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) tarafından CPITN temel alınarak modifiye edilen Periodontal Screening and Recording (PSR) indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sondalamada kanamayı klinik değerlendirme dışında tutar.
Açıklama: PSR (Periodontal Screening and Recording) indeksi, CPITN'in temel prensiplerini taşır ve dişetinin şimdiki inflamasyon durumunu, yani kanamayı (BOP) ve diş taşını kesinlikle içerir ve değerlendirir. Kanama gibi inflamatuar parametrelerin varlığı, skorlamayı ve dolayısıyla uzman sevkiyat gereksinimini doğrudan etkiler.

---

### ÇİFT 19 (Benzerlik: 0.85)

**Soru 1 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 20 (Benzerlik: 0.85)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: ab55631c-ee00-4771-b25e-9ac17370c06a)**
Soru Kökü: Kırk beş yaşındaki kadın hasta rutin muayeneye başvurmuştur. Yapılan ölçümlerde alt sağ birinci büyük azı dişinde (46 numara) yaklaşık %25 oranında ataşman kaybı ve sığ bir Sınıf I furkasyon tutulumu saptanmıştır. Furkasyon bölgesine enstrümantasyon erişimi tamdır. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): İyi (Fair)
Açıklama: Yaklaşık %25 ataşman kaybının varlığı ve lokasyon/derinlik açısından küret erişimini engellemeyen Sınıf I furkasyon tutulumu 'İyi (Fair prognosis)' sınıfının tipik klinik kriterleridir. Ataşman kaybı %50'ye ulaşıp kök formu zayıfladığında ise prognoz kötüleşir.

---

### ÇİFT 21 (Benzerlik: 0.84)

**Soru 1 (ID: 4550901e-be84-4163-86af-4acbdb0ee30f)**
Soru Kökü: Elli beş yaşındaki erkek hastanın panoramik ve periapikal radyografik muayenesinde 16 numaralı dişte %50 oranında ataşman kaybı saptanmıştır. Klinik sondalamada Sınıf II furkasyon tutulumu izlenmiş, ancak bu bölgeye spesifik küretlerle erişimin ve temizliğin tamamen mümkün olduğu belirlenmiştir. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (B): Kötü
Açıklama: Ataşman kaybının %50 civarında olması ve kron/kök oranının elverişsizleşmeye başlaması dişin prognozunu Kötü (Poor) sınıfına sokar. Sınıf II furkasyon varlığı Kötü ve Şüpheli (Questionable) prognoz arasında ayırıcıdır; erişimin KISMEN KOLAY VE MÜMKÜN olması dişi Kötü prognozda tutarken, erişimin İMKANSIZA YAKIN VEYA ZOR olması durumu Şüpheli prognoza düşürür. Vakada erişim mümkün olduğu için Kötü prognoz tanısı konur.

**Soru 2 (ID: d55ef9ac-aadb-4ec0-a9fb-14219f833c9a)**
Soru Kökü: Kırk sekiz yaşındaki sistemik stres altında çalışan bir hastanın muayenesinde; 26 numaralı dişte %50 ataşman kaybı, kısa-konik elverişsiz kök formu saptanmıştır. Dişte Sınıf II furkasyon tutulumu mevcuttur ancak furkasyon girişine klinisyenin el aletleriyle ulaşması mümkündür. Bu klinik tabloya göre 26 numaralı dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor)
Açıklama: Ataşman kaybının %50 civarında olması, elverişsiz kron/kök oranı (kısa konik kök) ve derinlik açısından erişimi zor olsa da mümkün olan Sınıf II furkasyon tutulumu tablosu, 'Kötü (Poor)' prognoz kriterlerini tam olarak karşılar. Ataşman kaybı %50'yi aşar, furkasyon Sınıf III'e ilerler veya erişim tamamen imkansızlaşırsa dişin durumu 'Şüpheli (Questionable)' seviyesine düşer.

---

### ÇİFT 22 (Benzerlik: 0.84)

**Soru 1 (ID: 4abd80a5-94a7-4543-b168-8a6a4db67cf3)**
Soru Kökü: Çok köklü dişlerde veya komşu dişler arasında köklerin birbirine aşırı yakın olması (root proximity) periodontal prognozu hangi temel biyolojik ve anatomik mekanizma üzerinden olumsuz etkiler?
Doğru Şık (D): İnterproksimal alveolar kemik hacmini azaltıp plak temizliğini engelleyerek
Açıklama: Köklerin birbirine aşırı yakın olduğu (root proximity) durumlarda, iki kök arasındaki interdental septal kemik hacmi çok incedir veya hiç yoktur (sadece bağ dokusu bulunur). Bu dar aralık hastanın arayüz temizliği yapmasını imkansız hale getirir ve inflamasyon başladığında kemik çok ince olduğu için anında vertikal veya horizontal kayba uğrar. Bu nedenle kök yakınlığı olan bölgelerde prognoz her zaman anatomik olarak dezavantajlıdır.

**Soru 2 (ID: 769f6678-4165-467e-a7c0-92274a0b7222)**
Soru Kökü: Çok köklü dişlerde veya komşu dişler arasında gözlenen 'kök yakınlığı (root proximity)' olgusu ile ilgili aşağıdakilerden hangisi doğrudur?
Doğru Şık (A): Kökleri birbirine çok yakın olan dişlerin periodontal prognozu, kökleri arasında yeterli kemik aralığı bulunanlara göre daha kötüdür.
Açıklama: Köklerin birbirine aşırı yakın olması (root proximity), o bölgedeki interdental kemik septumunun çok ince olmasına veya hiç bulunmamasına neden olur. Dar kemik aralığı hem enflamatuar yıkımın hızla yayılarak iki dişi birden etkilemesine yol açar hem de mekanik fırçalama veya hekimin küretaj yapmasını zorlaştırdığından prognozu her zaman kötüleştirir.

---

### ÇİFT 23 (Benzerlik: 0.84)

**Soru 1 (ID: 16260972-6a94-4d1d-8df7-fed48670082f)**
Soru Kökü: 48 yaşında erkek hasta generalize şiddetli kronik periodontitis şikayetiyle başvuruyor. Dişeti oluğu sıvısından (DOS) alınan örnekte nekrotik hücrelerden salınan, kalp (miyokard enfarktüsü) ve karaciğer (hepatit) kaynaklı yıkımlarda da artan, şiddetli gingival inflamasyon ve yakın geçmişteki periodontal ataşman kaybıyla pozitif ilişkili olan konak enzimi aşağıdakilerden hangisidir?
Doğru Şık (D): Aspartat aminotransferaz (AST)
Açıklama: Aspartat aminotransferaz (AST), hücre ölümü (nekroz) sırasında sitoplazmadan ekstrasellüler ortama salınan ve aktif periodontal doku yıkımının önemli bir belirteci olan enzimdir. B-glukuronidaz ve elastaz nötrofil granüllerinden kaynaklanırken, MMP'ler bağ dokusu matriksini spesifik olarak yıkan proteolitik enzimlerdir. AST'nin sistemik karşılıkları MI ve hepatit tablolarında da aynı hücre ölüm mekanizmasıyla kana karışmasıdır.

**Soru 2 (ID: 47d9bade-a14c-4fb6-8d0b-127b51996b66)**
Soru Kökü: Aktif periodontal yıkımın tespitinde kullanılan konak kaynaklı (host-derived) biyokimyasal markerlar dişeti oluğu sıvısında analiz edilebilir. Şiddetli gingival enflamasyon ve yakın geçmişte oluşmuş ataçman kaybı olan bölgelerde ölü hücrelerden salınan ve miyokard enfarktüsü sonrasında da sistemik olarak artış gösteren enzim aşağıdakilerden hangisidir?
Doğru Şık (B): Aspartat aminotransferaz (AST)
Açıklama: Aspartat aminotransferaz (AST), vücuttaki çeşitli dokularda (kalp, karaciğer, periodonsiyum) ölü hücrelerden salınan bir enzimdir ve periodontal yıkıma bağlı hücre nekrozunda lokal olarak cep sıvısında artar. Metalloproteinazlar yıkım matriksinden, beta-glukuronidaz ve elastaz ise nötrofil granüllerinden kaynaklanır.

---

### ÇİFT 24 (Benzerlik: 0.84)

**Soru 1 (ID: a8a9b86e-dc8c-436a-b894-db49561b40b2)**
Soru Kökü: Ramfjord'un Periodontal Disease Index (PDI) sisteminde tüm ağız yapısını ortaya koyduğu kabul edilen ve indeks ölçümü için seçilmiş 6 adet dişin numaraları aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (E): 16, 21, 24, 36, 41, 44
Açıklama: Ramfjord İndeksinde tüm ağzı temsil etmek üzere 16, 21, 24, 36, 41 ve 44 numaralı dişler seçilmiştir. Bu spesifik dişler, hem anterior hem posterior, hem sağ hem sol yarım çene bölgelerinin periodontal durumunu standardize etmek için kullanılır. OHI-S veya CPITN gibi indekslerin seçilmiş dişleri farklıdır.

**Soru 2 (ID: c4d7e7cb-733c-489b-8127-472505f0d409)**
Soru Kökü: Ramfjord tarafından tanımlanan Periodontal Disease İndeks (PDI) değerlendirmesinde, hastanın tüm ağız periodonsiyum durumunu en yüksek doğrulukla ve minimum süre harcayarak yansıttığı istatistiksel olarak kanıtlanmış 6 indeks dişi aşağıdakilerden hangisinde doğru şekilde gruplanmıştır?
Doğru Şık (E): 16, 21, 24, 36, 41, 44
Açıklama: Ramfjord PDI indeksinde hastanın tüm dentisyonunu temsil ettiği kabul edilen Ramfjord dişleri; maksiller sağ 1. büyük azı (16), maksiller sol santral (21), maksiller sol 1. küçük azı (24), mandibular sol 1. büyük azı (36), mandibular sağ santral (41) ve mandibular sağ 1. küçük azı (44) dişleridir. Bu seçki, molarlar, premolarlar ve keser dişlerden hem anterior hem posterior bölgelerin çapraz şekilde değerlendirilmesini sağlar.

---

### ÇİFT 25 (Benzerlik: 0.84)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

---

### ÇİFT 26 (Benzerlik: 0.84)

**Soru 1 (ID: b107b9da-42f4-41db-b42a-df162b1af347)**
Soru Kökü: Altmış iki yaşındaki erkek hasta, dişlerinde şiddetli sallanma şikayetiyle başvurmuştur. Muayenede 16 numaralı dişte kemik desteğinin tamamen yok olduğu, Sınıf III furkasyon tutulumu ve dikey mobilitenin bulunduğu saptanmıştır. Kalan periodontal doku fonksiyon ve yaşam kalitesini idame ettiremeyecek durumdadır. Bu dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz (Hopeless)
Açıklama: Sağlık, fonksiyon ve yaşam kalitesini devam ettirmeye yetecek minimal periodontal ataşmanın dahi bulunmadığı şiddetli yıkım durumları 'Umutsuz (Hopeless)' olarak sınıflandırılır ve bu dişler genellikle doğrudan çekim endikasyonuna sahiptir. Şüpheli prognozda ise %50'den fazla kayıp olmasına rağmen spesifik tedavilerle dişin ağızda tutulma olasılığı halen değerlendirilir.

**Soru 2 (ID: c54e139b-59ca-4927-9c6a-8319656ebdd9)**
Soru Kökü: 60 yaşında kadın hasta, dişlerinde aşırı mobilite ve çiğneme zorluğu yaşamaktadır. Klinik ve radyografik muayenede kemik desteğinin tamamen kaybedildiği, sağlık, fonksiyon ve yaşam kalitesini idame ettirmeye yetecek minimum ataşman seviyesinin dahi bulunmadığı tespit ediliyor. Dişin periodontal prognozu hangi sınıflandırmaya dahil edilmelidir?
Doğru Şık (A): Umutsuz (Hopeless)
Açıklama: Prognoz sınıflandırmasında, dişi fonksiyonel veya estetik olarak idame ettirecek düzeyde ataşman kalmadığı, çekim endikasyonu kesinleşen durumlar 'Umutsuz (Hopeless)' olarak adlandırılır. Şüpheli prognozda %50'den fazla kemik kaybı ve kök anatomisi zayıflığı varken tedavi umudu (radikal dahil) az da olsa mevcuttur. Umutsuz dişler, sistemik enfeksiyon riskini artırdığından protetik planlama öncesi ekstrakte edilmelidir.

---

### ÇİFT 27 (Benzerlik: 0.84)

**Soru 1 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 28 (Benzerlik: 0.84)

**Soru 1 (ID: 27492233-6eb6-4296-aa05-0b6aec971e43)**
Soru Kökü: Ağız hijyeni düzeyini belirlemek üzere muayene edilen bir hastada, serbest dişeti kenarına yapışmış ince bir tabaka gözlenmektedir. Çıplak gözle fark edilemeyen bu eklenti, ancak boyayıcı ajanlar veya dişeti cebinde bir sondun gezdirilmesi ile tespit edilebilmiştir. Löe ve Silness'in Plak İndeksi'ne göre bu bölgeye verilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 1
Açıklama: Löe ve Silness Plak İndeksi'nde Skor 1, çıplak gözle izlenemeyen ancak serbest dişeti kenarına film halinde yapışmış ve sond/boya ile tespit edilebilen plağı tanımlar. Skor 2'de eklenti çıplak gözle görülebilen orta derecede bir yapıya ulaşır. Skor 0 ise eklentinin tamamen yokluğunu ifade eder.

**Soru 2 (ID: c665e17b-7fd4-4ddc-86e0-c7c2d40b6472)**
Soru Kökü: Periodontal idame terapisindeki bir hastanın gingival marjini ve komşu diş yüzeylerinde, çıplak gözle kolayca izlenebilen bol miktarda yumuşak eklenti ve diş taşı saptanmıştır. Löe ve Silness'in Plak İndeksi kriterleri kullanıldığında, bu diş yüzeyine atanacak skor aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 3
Açıklama: Bol miktarda yumuşak eklenti ve kalkulus varlığı, Löe ve Silness Plak İndeksi'nde en yüksek değer olan Skor 3'e denk gelir. Skor 2 orta derecede eklentiyi ifade ederken, indeksin 4 gibi bir skor basamağı bulunmamaktadır. Klinik olarak belirgin kalın plak ve taş tabakası bu kodlamanın anahtarıdır.

---

### ÇİFT 29 (Benzerlik: 0.84)

**Soru 1 (ID: 2af7b21a-88a9-459a-94ef-5e5f2a8898a8)**
Soru Kökü: Kronik periodontal inflamasyona karşı gingival dokuların gösterdiği makroskobik tepki genellikle ödematöz veya fibrotik olmak üzere iki farklı klinik paterne ayrılır. Gingival mukozada **fibrotik** doku cevabının geliştiği bir periodontal hastada klinik muayene esnasında aşağıdaki bulgulardan hangisinin görülmesi **beklenmez**?
Doğru Şık (B): Doku kıvamının eski sıkılığını kaybederek aşırı yumuşak ve süngerimsi bir nitelik kazanması
Açıklama: Doku kıvamının yumuşak, süngerimsi olması ve düz, parlak, kırmızı bir görünüm alması fibrotik değil; aşırı sıvı birikimi ve damar geçirgenliği artışıyla karakterize ödematöz doku cevabının tipik bulgusudur. Fibrotik doku yanıtında tam tersine kronik makrofaj/fibroblast aktivasyonu nedeniyle bağ dokusu yoğunlaşır, dişeti klinik olarak sertleşir (sıkıdır), stippling (pürtük) izlenebilir ve doku opak bir renk alır. Ancak bu hiperplazik iyileşme anatomik konturu bozarak dişeti kenarının normal bıçak sırtı inceliğinden uzaklaşıp yuvarlak ve kalın görünmesine neden olur.

**Soru 2 (ID: 896d5c1d-07f7-45df-b3a6-144e996f0da0)**
Soru Kökü: Uzun süreli periodontal hastalığı olan bir bireyde, dişeti inflamasyonuna karşı gelişen 'fibrotik doku cevabının' klinik muayenesinde aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (A): Dişetinin daha sıkı, pürtüklü, opak ve kalın bir yapıda olması
Açıklama: Fibrotik doku cevabında kronik iltihaba yanıt olarak artan kollajen sentezi nedeniyle dişeti normal özelliklerinin bir kısmını koruyor gibi görünür. Doku pürtüklü, opak, daha sıkı ve kalındır ancak dişeti kenarı bıçak sırtı formunu kaybederek yuvarlaklaşmıştır. Kırmızı, yumuşak ve pürtüksüz yapı ise ödematöz doku cevabına aittir.

---

### ÇİFT 30 (Benzerlik: 0.84)

**Soru 1 (ID: 87e13d94-2d81-48c5-ae0a-b5cff8a0983e)**
Soru Kökü: Kırk beş yaşında kadın hastanın 26 numaralı dişinde yaklaşık %50 ataçman kaybı, kısa kök formu, elverişsiz kron-kök oranı ve II. sınıf furkasyon tutulumu tespit ediliyor. Furkasyon bölgesine lokasyon ve derinlik açısından erişim ve alet adaptasyonu zor da olsa mümkün görünmektedir. Standart klinik kriterlere göre bu dişin periodontal prognoz kategorisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor prognosis)
Açıklama: Kötü (Poor) prognoz tanımı: %50 ataçman kaybı, zayıf/kısa kök formu, elverişsiz kron-kök oranı ve erişimin kolay olmamakla birlikte MÜMKÜN olduğu II. sınıf furkasyon tutulumunu tanımlar. Eğer erişim 'zor/mümkün değil' veya III. sınıf furka olsaydı Şüpheli (Questionable) prognoza girerdi.

**Soru 2 (ID: ab55631c-ee00-4771-b25e-9ac17370c06a)**
Soru Kökü: Kırk beş yaşındaki kadın hasta rutin muayeneye başvurmuştur. Yapılan ölçümlerde alt sağ birinci büyük azı dişinde (46 numara) yaklaşık %25 oranında ataşman kaybı ve sığ bir Sınıf I furkasyon tutulumu saptanmıştır. Furkasyon bölgesine enstrümantasyon erişimi tamdır. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): İyi (Fair)
Açıklama: Yaklaşık %25 ataşman kaybının varlığı ve lokasyon/derinlik açısından küret erişimini engellemeyen Sınıf I furkasyon tutulumu 'İyi (Fair prognosis)' sınıfının tipik klinik kriterleridir. Ataşman kaybı %50'ye ulaşıp kök formu zayıfladığında ise prognoz kötüleşir.

---

### ÇİFT 31 (Benzerlik: 0.83)

**Soru 1 (ID: c3d872b4-dc2f-4155-851a-e6075fcda704)**
Soru Kökü: Periodontitiste inflamasyonun kemiğe ulaştığı erken dönemde radyografik olarak izlenen; septal kemik kretinin mezial ve distalinde kama şeklinde radyolusensi oluşması ve interproksimal kemik tepesindeki periodontal ligament aralığının genişlemesi ile karakterize bulguya ne ad verilir?
Doğru Şık (D): Triangulasyon
Açıklama: Triangulasyon (üçgenleşme), inflamasyonun periodontal ligament aralığından apikale doğru ilerlerken interdental septumun lateral duvarında yarattığı rezorpsiyonun radyografik yansımasıdır. Tabanı koronalde, tepesi apikalde olan bu kama şeklindeki genişleme, periodontitisin başlangıç radyografik bulgularındandır.

**Soru 2 (ID: d49326a7-1d53-4689-9da9-e7dd6107608a)**
Soru Kökü: Erken dönem periodontal hastalıklarda alveoler kemik değişiklikleri radyografik olarak izlenebilir. İnterdental septumun koronal kısmında lamina duranın devamlılığının bozulmasıyla başlayan, tabanı yukarıda tepesi apikale dönük kama şeklindeki radyolusensiye ne ad verilir?
Doğru Şık (B): Triangulasyon
Açıklama: Triangulasyon (üçgenleşme), interproksimal kemik tepesindeki periodontal ligament aralığının iltihaba bağlı genişlemesi sonucu oluşan karakteristik kama şeklindeki radyolusensidir. Kretsel düzensizlik sadece radyoopak hattaki silikleşmeyi ifade ederken, triangulasyon direkt olarak kemik içi yayılımın erken radyografik bulgusudur. Servikal burnout ise mine-sement sınırındaki fizyolojik anatomik bir illüzyondur.

---

### ÇİFT 32 (Benzerlik: 0.83)

**Soru 1 (ID: 29f4af0b-3b85-4a62-b6fe-719ea0f2429f)**
Soru Kökü: Klinik periodontal muayenede iki aletin sapı kullanılarak bir dişe vestibülo-lingual yönde kuvvet uygulanmış ve dişteki hareketlilik gözlemlenmiştir. Diş hareketinin 0.2 mm'yi geçmediği, vertikal bir çökmenin olmadığı saptanmıştır. Miller'ın Mobilite İndeksi'ne göre bu dişin skoru aşağıdakilerden hangisidir?
Doğru Şık (E): Skor 0
Açıklama: Miller'ın Mobilite İndeksi'nde kuvvet uygulandığında dişin 0.2 mm'yi geçmeyen fizyolojik hareketi Skor 0 olarak değerlendirilir. Hareket 1 mm'den az ise Skor 1, 1-2 mm arası ise Skor 2, 2 mm'yi aşan dikey yönde (apikal çökme) veya dönme hareketi varsa Skor 3 olarak kaydedilir. Bu indeks patolojik ve fizyolojik mobilitenin klinik standart ayrımıdır.

**Soru 2 (ID: a83ad7ec-5b07-43f2-a3d7-4838fb956c1c)**
Soru Kökü: Kırk iki yaşında erkek hasta, alt ön dişlerindeki sallanma şikayetiyle başvuruyor. Yapılan muayenede dişlerde fizyolojik sınırları aşan ve 1.5 mm ölçülen horizontal hareketlilik tespit ediliyor. Dikey (aksiyal) yönde bir çökme izlenmiyor. Miller'ın Mobilite İndeksi'ne göre bu dişteki klinik skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 2
Açıklama: Miller İndeksine göre 1-2 mm arasında olan diş hareketi Skor 2 olarak değerlendirilir. Skor 1, 1 mm'den az hareketi; Skor 3 ise 2 mm'yi aşan veya dikey yönde rotasyon/çökme gösteren hareketi ifade eder. Hastadaki 1.5 mm'lik hareket Skor 2 kriterlerine uymaktadır.

---

### ÇİFT 33 (Benzerlik: 0.83)

**Soru 1 (ID: 87e13d94-2d81-48c5-ae0a-b5cff8a0983e)**
Soru Kökü: Kırk beş yaşında kadın hastanın 26 numaralı dişinde yaklaşık %50 ataçman kaybı, kısa kök formu, elverişsiz kron-kök oranı ve II. sınıf furkasyon tutulumu tespit ediliyor. Furkasyon bölgesine lokasyon ve derinlik açısından erişim ve alet adaptasyonu zor da olsa mümkün görünmektedir. Standart klinik kriterlere göre bu dişin periodontal prognoz kategorisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor prognosis)
Açıklama: Kötü (Poor) prognoz tanımı: %50 ataçman kaybı, zayıf/kısa kök formu, elverişsiz kron-kök oranı ve erişimin kolay olmamakla birlikte MÜMKÜN olduğu II. sınıf furkasyon tutulumunu tanımlar. Eğer erişim 'zor/mümkün değil' veya III. sınıf furka olsaydı Şüpheli (Questionable) prognoza girerdi.

**Soru 2 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

---

### ÇİFT 34 (Benzerlik: 0.83)

**Soru 1 (ID: 50b16cce-e899-4b58-9142-d46738867a8a)**
Soru Kökü: Otuz beş yaşındaki hastanın alt sağ bölgesinde sadece taşkın amalgam dolgulu 46 numaralı dişte izole kemik kaybı saptanmıştır. Subgingival restorasyonların bu tür spesifik periodontal yıkıma yol açmasındaki asıl patogenetik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Subgingival marjinin ulaşılamaz ekolojik niş yaratarak plak miktarını artırması
Açıklama: Subgingival yerleşimli ve uyumsuz (taşkın) restorasyonlar, hastanın fırça veya diş ipi ile temizleyemeyeceği retansiyon alanları (ekolojik nişler) yaratır. Bu durum, bölgedeki mikrobiyal plağın miktarını artırır ve daha patojenik bir flora oluşumuna zemin hazırlayarak lokalize periodontal kemik kaybını tetikler.

**Soru 2 (ID: e54a4e28-678e-45b1-bf6d-b8403a0a6e8a)**
Soru Kökü: Otuz yaşındaki erkek hastanın 16 numaralı dişine bir yıl önce derin subgingival marjinli kuron restorasyonu yapılmıştır. Güncel muayenesinde tüm ağız plak indeksi düşük olmasına rağmen, sadece bu bölgede şiddetli lokalize kemik kaybı, hiperplazi ve sondalamada kanama izlenmektedir. Bu lokalize yıkımın birincil nedeni olan restoratif faktör periodonsiyumu hangi mekanizmayla etkiler?
Doğru Şık (A): Bakteriyel plak retansiyonunu artırıp biyolojik genişliği ihlal ederek
Açıklama: Subgingival olarak konumlandırılmış, taşkın veya uyumsuz restorasyon kenarları, mikrobiyal plak birikimi için mükemmel bir retansiyon alanı oluşturarak lokal flora patojenitesini artırır. Ayrıca diş eti sulkusu veya birleşim epitelinin sınırlarını aşarak biyolojik genişliği (supracrestal doku ataşmanını) ihlal eder. Bu durum konağın fizyolojik kemik mesafesini yeniden kurmak için osteoklastik aktivite başlatmasına (lokalize kemik kaybı) ve enflamasyona yol açar.

---

### ÇİFT 35 (Benzerlik: 0.82)

**Soru 1 (ID: 474b4ed3-e4a1-420b-91da-444ee46e70aa)**
Soru Kökü: Periodontal yıkımın ileri evresinde olan 50 yaşındaki hastanın alt birinci molar dişinde vertikal yönde (apikal çökme) mobilite izlenmiş ve diş kendi ekseni etrafında rahatlıkla döndürülebilmiştir. Bu klinik senaryoda Miller Mobilite İndeksi'ne göre dişe verilmesi gereken skor kaçtır?
Doğru Şık (A): Skor 3
Açıklama: Miller İndeksi'nde Skor 3, dişin dikey yönde (apikale doğru çökme) veya kendi ekseni etrafında rotasyonel hareket yapabildiği en ileri patolojik mobilite safhasını ifade eder. Yatay hareketlerin 2 mm'yi aştığı durumlar da Skor 3'e dahildir. İndekste Skor 4 bulunmamaktadır.

**Soru 2 (ID: a83ad7ec-5b07-43f2-a3d7-4838fb956c1c)**
Soru Kökü: Kırk iki yaşında erkek hasta, alt ön dişlerindeki sallanma şikayetiyle başvuruyor. Yapılan muayenede dişlerde fizyolojik sınırları aşan ve 1.5 mm ölçülen horizontal hareketlilik tespit ediliyor. Dikey (aksiyal) yönde bir çökme izlenmiyor. Miller'ın Mobilite İndeksi'ne göre bu dişteki klinik skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 2
Açıklama: Miller İndeksine göre 1-2 mm arasında olan diş hareketi Skor 2 olarak değerlendirilir. Skor 1, 1 mm'den az hareketi; Skor 3 ise 2 mm'yi aşan veya dikey yönde rotasyon/çökme gösteren hareketi ifade eder. Hastadaki 1.5 mm'lik hareket Skor 2 kriterlerine uymaktadır.

---

### ÇİFT 36 (Benzerlik: 0.82)

**Soru 1 (ID: 1e4d55db-0b63-433f-842c-1bb44c6eda40)**
Soru Kökü: Otuz beş yaşındaki kadın hastanın anamnezinden geçmişte şiddetli kronik periodontitis nedeniyle tedavi gördüğü anlaşılmıştır. Güncel radyografik incelemede kemik kaybının stabil olmadığı görülmüştür. Bu hastada gelecekteki yeni ataşman kayıpları riskini öngörmede kullanılan en güçlü risk işareti (marker) aşağıdakilerden hangisidir?
Doğru Şık (A): Geçirilmiş periodontal hastalık hikayesi
Açıklama: Bir hastada daha önceden var olan periodontal hastalık hikayesi, o hastanın gelecekteki hastalık aktivitesi ve ataşman kaybı riski için tanımlanmış en iyi ve en güçlü klinik risk işaretidir (marker). En şiddetli ataşman kayıpları bulunan hastalar, konağın biyolojik yatkınlığı nedeniyle gelecekte de en büyük risk altındaki gruptur. Sondalamada kanama da bir risk işaretidir ancak geçmiş hastalık hikayesi genel öngörüde en geniş kapsama sahip belirleyicidir.

**Soru 2 (ID: 76e5009e-60fb-495d-88f3-bd65a84428f9)**
Soru Kökü: Otuz iki yaşında kadın hasta rutin kontrol randevusuna geliyor. Daha önce her iki çenede de generalize kronik periodontitis nedeniyle tedavi görmüş. Hastanın önceki kayıtlarında kemik ve ataşman kayıpları açıkça izleniyor. Şu anki klinik muayenesinde cep derinlikleri 3-4 mm civarında olup, 4 ayrı bölgede sondalamada kanama (BOP) pozitif bulunuyor. Gelecekteki ataşman kaybı riskini tahmin etmede, bu hastanın taşıdığı en güçlü klinik risk işaretleri (risk prediktörleri) aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Daha önce geçirilmiş periodontal hastalık hikayesi ve BOP pozitifliği
Açıklama: Geçirilmiş bir periodontal hastalık öyküsü, gelecekteki hastalık riski için klinik olarak en iyi 'tahmini risk işaretidir (predictor)'. Ayrıca sondalamada kanama da inflamasyonun varlığını gösterir ve özellikle idame hastalarında cep ile beraber bulunduğunda ataşman kaybının mükemmel bir belirleyicisidir.

---

### ÇİFT 37 (Benzerlik: 0.82)

**Soru 1 (ID: 87e13d94-2d81-48c5-ae0a-b5cff8a0983e)**
Soru Kökü: Kırk beş yaşında kadın hastanın 26 numaralı dişinde yaklaşık %50 ataçman kaybı, kısa kök formu, elverişsiz kron-kök oranı ve II. sınıf furkasyon tutulumu tespit ediliyor. Furkasyon bölgesine lokasyon ve derinlik açısından erişim ve alet adaptasyonu zor da olsa mümkün görünmektedir. Standart klinik kriterlere göre bu dişin periodontal prognoz kategorisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor prognosis)
Açıklama: Kötü (Poor) prognoz tanımı: %50 ataçman kaybı, zayıf/kısa kök formu, elverişsiz kron-kök oranı ve erişimin kolay olmamakla birlikte MÜMKÜN olduğu II. sınıf furkasyon tutulumunu tanımlar. Eğer erişim 'zor/mümkün değil' veya III. sınıf furka olsaydı Şüpheli (Questionable) prognoza girerdi.

**Soru 2 (ID: d55ef9ac-aadb-4ec0-a9fb-14219f833c9a)**
Soru Kökü: Kırk sekiz yaşındaki sistemik stres altında çalışan bir hastanın muayenesinde; 26 numaralı dişte %50 ataşman kaybı, kısa-konik elverişsiz kök formu saptanmıştır. Dişte Sınıf II furkasyon tutulumu mevcuttur ancak furkasyon girişine klinisyenin el aletleriyle ulaşması mümkündür. Bu klinik tabloya göre 26 numaralı dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor)
Açıklama: Ataşman kaybının %50 civarında olması, elverişsiz kron/kök oranı (kısa konik kök) ve derinlik açısından erişimi zor olsa da mümkün olan Sınıf II furkasyon tutulumu tablosu, 'Kötü (Poor)' prognoz kriterlerini tam olarak karşılar. Ataşman kaybı %50'yi aşar, furkasyon Sınıf III'e ilerler veya erişim tamamen imkansızlaşırsa dişin durumu 'Şüpheli (Questionable)' seviyesine düşer.

---

### ÇİFT 38 (Benzerlik: 0.82)

**Soru 1 (ID: 4550901e-be84-4163-86af-4acbdb0ee30f)**
Soru Kökü: Elli beş yaşındaki erkek hastanın panoramik ve periapikal radyografik muayenesinde 16 numaralı dişte %50 oranında ataşman kaybı saptanmıştır. Klinik sondalamada Sınıf II furkasyon tutulumu izlenmiş, ancak bu bölgeye spesifik küretlerle erişimin ve temizliğin tamamen mümkün olduğu belirlenmiştir. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (B): Kötü
Açıklama: Ataşman kaybının %50 civarında olması ve kron/kök oranının elverişsizleşmeye başlaması dişin prognozunu Kötü (Poor) sınıfına sokar. Sınıf II furkasyon varlığı Kötü ve Şüpheli (Questionable) prognoz arasında ayırıcıdır; erişimin KISMEN KOLAY VE MÜMKÜN olması dişi Kötü prognozda tutarken, erişimin İMKANSIZA YAKIN VEYA ZOR olması durumu Şüpheli prognoza düşürür. Vakada erişim mümkün olduğu için Kötü prognoz tanısı konur.

**Soru 2 (ID: ab55631c-ee00-4771-b25e-9ac17370c06a)**
Soru Kökü: Kırk beş yaşındaki kadın hasta rutin muayeneye başvurmuştur. Yapılan ölçümlerde alt sağ birinci büyük azı dişinde (46 numara) yaklaşık %25 oranında ataşman kaybı ve sığ bir Sınıf I furkasyon tutulumu saptanmıştır. Furkasyon bölgesine enstrümantasyon erişimi tamdır. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): İyi (Fair)
Açıklama: Yaklaşık %25 ataşman kaybının varlığı ve lokasyon/derinlik açısından küret erişimini engellemeyen Sınıf I furkasyon tutulumu 'İyi (Fair prognosis)' sınıfının tipik klinik kriterleridir. Ataşman kaybı %50'ye ulaşıp kök formu zayıfladığında ise prognoz kötüleşir.

---

### ÇİFT 39 (Benzerlik: 0.82)

**Soru 1 (ID: 84e5c54c-2fe7-4d70-9168-8de6ab31f995)**
Soru Kökü: Aşağıdakilerden hangisi periodontal hastalık risk değerlendirmesinde değiştirilemeyen ve bireye ait özelliklerin tanımlandığı 'bireysel risk belirleyicileri (risk determinanları)' arasında yer alır?
Doğru Şık (A): Genetik faktörler
Açıklama: Bireysel risk belirleyicileri (determinanlar), kişinin cinsiyet, yaş, sosyoekonomik durum ve genetik faktörleri gibi değiştirilemeyen özelliklerini kapsar. Diyabet ve patojenik bakteriler değiştirilebilir risk faktörleridir. HIV/AIDS risk göstergesi (indikatörü), sondalamada kanama ise geleceğe ilişkin risk işareti (prediktörü) olarak sınıflandırılır.

**Soru 2 (ID: 9dd40028-8123-476f-ab8b-36ee69a573b3)**
Soru Kökü: Periodontal risk değerlendirmesinde faktörler nedensellik potansiyellerine ve değiştirilebilirliklerine göre sınıflandırılır. Buna göre aşağıdakilerden hangisi periodontal hastalık için çevresel veya davranışsal bir "risk faktörü" değil, bir "bireysel risk belirleyicisi (determinantı)"dır?
Doğru Şık (E): Cinsiyet
Açıklama: Cinsiyet, yaş, sosyoekonomik durum ve genetik yapı bireyin değiştirilemeyen temel özellikleridir ve 'bireysel risk belirleyicisi' olarak adlandırılırlar. Sigara, spesifik bakteriler, anatomik/restoratif tutucular ve diyabet ise hastalığa doğrudan yatkınlık oluşturan 'risk faktörleri'dir.

---

### ÇİFT 40 (Benzerlik: 0.82)

**Soru 1 (ID: ab55631c-ee00-4771-b25e-9ac17370c06a)**
Soru Kökü: Kırk beş yaşındaki kadın hasta rutin muayeneye başvurmuştur. Yapılan ölçümlerde alt sağ birinci büyük azı dişinde (46 numara) yaklaşık %25 oranında ataşman kaybı ve sığ bir Sınıf I furkasyon tutulumu saptanmıştır. Furkasyon bölgesine enstrümantasyon erişimi tamdır. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): İyi (Fair)
Açıklama: Yaklaşık %25 ataşman kaybının varlığı ve lokasyon/derinlik açısından küret erişimini engellemeyen Sınıf I furkasyon tutulumu 'İyi (Fair prognosis)' sınıfının tipik klinik kriterleridir. Ataşman kaybı %50'ye ulaşıp kök formu zayıfladığında ise prognoz kötüleşir.

**Soru 2 (ID: d55ef9ac-aadb-4ec0-a9fb-14219f833c9a)**
Soru Kökü: Kırk sekiz yaşındaki sistemik stres altında çalışan bir hastanın muayenesinde; 26 numaralı dişte %50 ataşman kaybı, kısa-konik elverişsiz kök formu saptanmıştır. Dişte Sınıf II furkasyon tutulumu mevcuttur ancak furkasyon girişine klinisyenin el aletleriyle ulaşması mümkündür. Bu klinik tabloya göre 26 numaralı dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor)
Açıklama: Ataşman kaybının %50 civarında olması, elverişsiz kron/kök oranı (kısa konik kök) ve derinlik açısından erişimi zor olsa da mümkün olan Sınıf II furkasyon tutulumu tablosu, 'Kötü (Poor)' prognoz kriterlerini tam olarak karşılar. Ataşman kaybı %50'yi aşar, furkasyon Sınıf III'e ilerler veya erişim tamamen imkansızlaşırsa dişin durumu 'Şüpheli (Questionable)' seviyesine düşer.

---

### ÇİFT 41 (Benzerlik: 0.82)

**Soru 1 (ID: 0ff38423-e601-4011-851d-c4fe3fa550c9)**
Soru Kökü: Bireyin gelecekte belirli bir zaman diliminde hastalığa yakalanma olasılığını tahmin etmek amacıyla yürütülen epidemiyolojik işlemlere ne ad verilir?
Doğru Şık (B): Risk tayini
Açıklama: Risk tayini, sağlıklı bir bireyin gelecekte hastalığa yakalanma ihtimalini öngörebilmek için yapılan analiz işlemlerinin tümüdür. Prognostik tayin ise halihazırda hastalığa yakalanmış bir bireyin klinik sonucunu kestirme işlemidir. Sağlıklı bireyde risk tayini, hasta bireyde ise prognostik tayin uygulanır.

**Soru 2 (ID: f4d9e6ed-35c2-42d6-a033-58cc52bd1ee5)**
Soru Kökü: Bireyin hastalığa yakalanma olasılığını tahmin etmek için yürütülen spesifik epidemiyolojik ve klinik işlemlere ne ad verilir?
Doğru Şık (E): Risk tayini
Açıklama: Risk tayini (risk assessment), bireyin gelecekte hastalığa yakalanma ihtimalini saptamak için risk faktörlerinin, belirleyicilerinin ve işaretlerinin bir arada analiz edildiği sürecin adıdır. Risk faktörü bu süreçte incelenen nedensel değişkenlerden biriyken, prognostik tayin zaten var olan bir hastalığın gelecekteki seyrini kestirmeye yönelik farklı bir işlemdir. Kavramların epidemiyolojik tanımları birbirinin yerine kullanılamaz.

---

### ÇİFT 42 (Benzerlik: 0.82)

**Soru 1 (ID: 47d9bade-a14c-4fb6-8d0b-127b51996b66)**
Soru Kökü: Aktif periodontal yıkımın tespitinde kullanılan konak kaynaklı (host-derived) biyokimyasal markerlar dişeti oluğu sıvısında analiz edilebilir. Şiddetli gingival enflamasyon ve yakın geçmişte oluşmuş ataçman kaybı olan bölgelerde ölü hücrelerden salınan ve miyokard enfarktüsü sonrasında da sistemik olarak artış gösteren enzim aşağıdakilerden hangisidir?
Doğru Şık (B): Aspartat aminotransferaz (AST)
Açıklama: Aspartat aminotransferaz (AST), vücuttaki çeşitli dokularda (kalp, karaciğer, periodonsiyum) ölü hücrelerden salınan bir enzimdir ve periodontal yıkıma bağlı hücre nekrozunda lokal olarak cep sıvısında artar. Metalloproteinazlar yıkım matriksinden, beta-glukuronidaz ve elastaz ise nötrofil granüllerinden kaynaklanır.

**Soru 2 (ID: 51799210-3b4e-4626-a2b4-ef0ff20a5652)**
Soru Kökü: Altmış iki yaşında erkek hasta, 6 ay önce geçirdiği miyokard enfarktüsü sonrası kliniğe başvurmuştur. Yapılan incelemede dişeti oluğu sıvısında belirli bir enzimin belirgin şekilde arttığı ve bu enzimin yakın geçmişte oluşmuş ataşman kaybı ile korele olduğu saptanmıştır. Hasta başı 'Periodgard' kiti ile de tespiti yapılabilen bu marker aşağıdakilerden hangisidir?
Doğru Şık (B): Aspartat aminotransferaz
Açıklama: Aspartat aminotransferaz (AST), miyokard ve karaciğer gibi dokulardaki ölü hücrelerden salınan bir enzim olup dişeti oluğu sıvısında hızlı ataşman kaybının belirtecidir. Elastaz da bir yıkım markeri olmasına rağmen kaynağı nötrofil granülleridir ve hasta başı 'Periocheck' kiti ile ölçülür. Bu enzimin ölü doku hücresi kaynaklı olması ve Periodgard sistemiyle entegrasyonu spesifik teşhis kriteridir.

---

### ÇİFT 43 (Benzerlik: 0.82)

**Soru 1 (ID: a83ad7ec-5b07-43f2-a3d7-4838fb956c1c)**
Soru Kökü: Kırk iki yaşında erkek hasta, alt ön dişlerindeki sallanma şikayetiyle başvuruyor. Yapılan muayenede dişlerde fizyolojik sınırları aşan ve 1.5 mm ölçülen horizontal hareketlilik tespit ediliyor. Dikey (aksiyal) yönde bir çökme izlenmiyor. Miller'ın Mobilite İndeksi'ne göre bu dişteki klinik skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 2
Açıklama: Miller İndeksine göre 1-2 mm arasında olan diş hareketi Skor 2 olarak değerlendirilir. Skor 1, 1 mm'den az hareketi; Skor 3 ise 2 mm'yi aşan veya dikey yönde rotasyon/çökme gösteren hareketi ifade eder. Hastadaki 1.5 mm'lik hareket Skor 2 kriterlerine uymaktadır.

**Soru 2 (ID: e45e061f-f975-43a9-8c61-7879ba71ba90)**
Soru Kökü: Klinik muayene sırasında diş mobilitesi periodontal teşhisin önemli bir parçasıdır. Miller Mobilite İndeksine göre, parmak basıncıyla uygulanan horizontal kuvvete karşı 1 ila 2 mm arasında diş hareketi saptanması durumunda kaydedilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (B): Skor 2
Açıklama: Miller İndeksi 0-3 arası skorlanır; Skor 1: 1 mm'den az horizontal hareket, Skor 2: 1-2 mm arası horizontal hareket, Skor 3: 2 mm'yi aşan dikey yönde (aksiyel) çökmeyi de içeren şiddetli mobiliteyi tanımlar. Bu derecelendirme patolojik sekonder mobilitenin şiddetini belirleyerek splintleme veya okluzal aşındırma ihtiyacını yönlendirir.

---

### ÇİFT 44 (Benzerlik: 0.82)

**Soru 1 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 45 (Benzerlik: 0.82)

**Soru 1 (ID: 84e5c54c-2fe7-4d70-9168-8de6ab31f995)**
Soru Kökü: Aşağıdakilerden hangisi periodontal hastalık risk değerlendirmesinde değiştirilemeyen ve bireye ait özelliklerin tanımlandığı 'bireysel risk belirleyicileri (risk determinanları)' arasında yer alır?
Doğru Şık (A): Genetik faktörler
Açıklama: Bireysel risk belirleyicileri (determinanlar), kişinin cinsiyet, yaş, sosyoekonomik durum ve genetik faktörleri gibi değiştirilemeyen özelliklerini kapsar. Diyabet ve patojenik bakteriler değiştirilebilir risk faktörleridir. HIV/AIDS risk göstergesi (indikatörü), sondalamada kanama ise geleceğe ilişkin risk işareti (prediktörü) olarak sınıflandırılır.

**Soru 2 (ID: b0084ab3-3679-467b-8c4f-03b62bd3ea45)**
Soru Kökü: Periodontal hastalığın seyrini etkileyen 'bireysel risk belirleyicileri' (risk determinanları) arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (B): Sigara kullanımı
Açıklama: Bireysel risk belirleyicileri (determinanları), yaş, cinsiyet, genetik gibi bireyin değiştiremeyeceği (sosyoekonomik durum ve stres de bu gruba dahil edilmiştir) yapısal özellikleridir. Sigara ise dışarıdan alınan ve değiştirilebilen net bir 'risk faktörü'dür.

---

### ÇİFT 46 (Benzerlik: 0.81)

**Soru 1 (ID: 4550901e-be84-4163-86af-4acbdb0ee30f)**
Soru Kökü: Elli beş yaşındaki erkek hastanın panoramik ve periapikal radyografik muayenesinde 16 numaralı dişte %50 oranında ataşman kaybı saptanmıştır. Klinik sondalamada Sınıf II furkasyon tutulumu izlenmiş, ancak bu bölgeye spesifik küretlerle erişimin ve temizliğin tamamen mümkün olduğu belirlenmiştir. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (B): Kötü
Açıklama: Ataşman kaybının %50 civarında olması ve kron/kök oranının elverişsizleşmeye başlaması dişin prognozunu Kötü (Poor) sınıfına sokar. Sınıf II furkasyon varlığı Kötü ve Şüpheli (Questionable) prognoz arasında ayırıcıdır; erişimin KISMEN KOLAY VE MÜMKÜN olması dişi Kötü prognozda tutarken, erişimin İMKANSIZA YAKIN VEYA ZOR olması durumu Şüpheli prognoza düşürür. Vakada erişim mümkün olduğu için Kötü prognoz tanısı konur.

**Soru 2 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

---

### ÇİFT 47 (Benzerlik: 0.81)

**Soru 1 (ID: 5644ee01-da15-4d0e-a239-5d8aee9fd9ba)**
Soru Kökü: Bir toplumda belirli bir zaman kesitinde veya periyodunda periodontal hastalıktan etkilenen bireylerin toplam oranını ifade eden epidemiyolojik terim aşağıdakilerden hangisidir?
Doğru Şık (E): Prevelans
Açıklama: Prevelans, belli bir zaman kesitinde bir toplumda hastalıktan etkilenenlerin toplam oranını (eski ve yeni vakalar dahil) ifade eder. En güçlü çeldirici olan insidans ise belli bir süre içinde sadece 'yeni' bir hastalığın ortaya çıkma sıklığını ölçer. Epidemiyolojik çalışmalarda kronik bir tablonun toplumdaki genel yükü prevelans ile belirlenir.

**Soru 2 (ID: 86a3b832-4d61-4587-a720-196a8268ba10)**
Soru Kökü: Geniş çaplı bir saha çalışmasında, 2025 yılının Haziran ayı itibariyle belirli bir ilçede yaşayan 40-50 yaş arası yetişkin bireylerin %65'inde kronik periodontitis bulunduğu saptanmıştır. Sadece belirli bir zaman kesitinde hastalıktan etkilenenlerin mevcut oranını ifade eden epidemiyolojik ölçüm aşağıdakilerden hangisidir?
Doğru Şık (E): Prevelans
Açıklama: Belirli bir zaman kesitinde veya periyodunda bir toplulukta hastalıktan etkilenenlerin mevcut oranına 'prevelans' adı verilir. Yeni vakaları değil, o anki toplam hasta yükünü yansıtır. Kronik hastalıkların toplumdaki yaygınlığını ölçmek için en sık kullanılan parametredir.

---

### ÇİFT 48 (Benzerlik: 0.81)

**Soru 1 (ID: 4bdb9bbf-c34d-43d9-8014-7162fa36747d)**
Soru Kökü: Löe ve Silness tarafından geliştirilen Gingival İndeks'te (GI), sondalamada kanama görülmediği halde renkte hafif değişiklik ve hafif ödemin izlendiği başlangıç aşamasındaki dişeti enflamasyonu hangi skor ile değerlendirilir?
Doğru Şık (B): Skor 1
Açıklama: Gingival İndeks'te Skor 1, renkte hafif değişiklik ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif enflamasyonu ifade eder. Skor 2'de orta enflamasyon ve sondalamada kanama başlar, Skor 3'te ise ülserasyon ve spontan kanama görülür.

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 49 (Benzerlik: 0.81)

**Soru 1 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

**Soru 2 (ID: d55ef9ac-aadb-4ec0-a9fb-14219f833c9a)**
Soru Kökü: Kırk sekiz yaşındaki sistemik stres altında çalışan bir hastanın muayenesinde; 26 numaralı dişte %50 ataşman kaybı, kısa-konik elverişsiz kök formu saptanmıştır. Dişte Sınıf II furkasyon tutulumu mevcuttur ancak furkasyon girişine klinisyenin el aletleriyle ulaşması mümkündür. Bu klinik tabloya göre 26 numaralı dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor)
Açıklama: Ataşman kaybının %50 civarında olması, elverişsiz kron/kök oranı (kısa konik kök) ve derinlik açısından erişimi zor olsa da mümkün olan Sınıf II furkasyon tutulumu tablosu, 'Kötü (Poor)' prognoz kriterlerini tam olarak karşılar. Ataşman kaybı %50'yi aşar, furkasyon Sınıf III'e ilerler veya erişim tamamen imkansızlaşırsa dişin durumu 'Şüpheli (Questionable)' seviyesine düşer.

---

### ÇİFT 50 (Benzerlik: 0.81)

**Soru 1 (ID: 15440e34-2e67-4e7a-8624-2caa4b9882a1)**
Soru Kökü: Modifiye Gingival İndekse (MGI) göre, papiller ve marjinal bölgeler dahil olmak üzere tüm dişeti ünitesini kaplayan ancak görsel olarak şiddetli düzeyde olmayan hafif bir inflamasyon tablosu aşağıdaki skorlardan hangisiyle ifade edilir?
Doğru Şık (D): 2
Açıklama: Tüm dişeti ünitesini kaplayan ancak klinik karakter olarak hala 'hafif' kategorisinde değerlendirilen inflamasyon Modifiye Gingival İndekste skor 2'dir. Skor 1 ile arasındaki temel fark lezyonun şiddeti değil, ünitedeki yaygınlığıdır (kapsama alanıdır).

**Soru 2 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

---

### ÇİFT 51 (Benzerlik: 0.81)

**Soru 1 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

**Soru 2 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

---

### ÇİFT 52 (Benzerlik: 0.81)

**Soru 1 (ID: 1729c99e-7327-49f3-b549-a805c0a70578)**
Soru Kökü: Uzun dönem epidemiyolojik ve klinik çalışmalarla kronik periodontitisin gelişiminde etyolojik ajan olarak rol oynadığı kesin olarak kanıtlanmış bir risk faktörü olan bakteri aşağıdakilerden hangisidir?
Doğru Şık (C): Tanerella forsythia
Açıklama: A. actinomycetemcomitans, P. gingivalis ve T. forsythia, periodontitis için nedensel olduğu açıkça kanıtlanmış ve risk faktörü olarak sınıflandırılan üç ana spesifik patojendir. Diğer şıklardaki bakteriler (C. rectus, F. nucleatum vb.) hastalıkla ilişkili olmakla birlikte, epidemiyolojik olarak klasik risk faktörü üçlüsünün dışında değerlendirilen destekleyici ajanlardır. Kesin nedensel kanıt mekanizması T. forsythia için netleştirilmiştir.

**Soru 2 (ID: b855cdb1-c024-4f54-9a6b-a2fbf450c348)**
Soru Kökü: Aşağıdaki bakterilerden hangisinin varlığı periodontitis için epidemiyolojik çalışmalarda açık bir risk faktörü olarak tanımlanmıştır ve sıklıkla agresif periodontitis tabloları ile güçlü korelasyon gösterir?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: Actinobacillus actinomycetemcomitans (A.a), P. gingivalis ve T. forsythia ile birlikte periodontitis için nedensel ajan (kesin risk faktörü) kriterlerini sağlayan üç spesifik bakteriden biridir ve agresif periodontitis ile karakterizedir. F. nucleatum ve C. rectus gibi ajanlar etyolojide rol alsa da ana 'risk faktörü' üçlüsünde yer almaz.

---

### ÇİFT 53 (Benzerlik: 0.81)

**Soru 1 (ID: 1729c99e-7327-49f3-b549-a805c0a70578)**
Soru Kökü: Uzun dönem epidemiyolojik ve klinik çalışmalarla kronik periodontitisin gelişiminde etyolojik ajan olarak rol oynadığı kesin olarak kanıtlanmış bir risk faktörü olan bakteri aşağıdakilerden hangisidir?
Doğru Şık (C): Tanerella forsythia
Açıklama: A. actinomycetemcomitans, P. gingivalis ve T. forsythia, periodontitis için nedensel olduğu açıkça kanıtlanmış ve risk faktörü olarak sınıflandırılan üç ana spesifik patojendir. Diğer şıklardaki bakteriler (C. rectus, F. nucleatum vb.) hastalıkla ilişkili olmakla birlikte, epidemiyolojik olarak klasik risk faktörü üçlüsünün dışında değerlendirilen destekleyici ajanlardır. Kesin nedensel kanıt mekanizması T. forsythia için netleştirilmiştir.

**Soru 2 (ID: 17b733d6-35fa-4686-a21f-734d30ae9e39)**
Soru Kökü: Kırk beş yaşında erkek hasta kronik periodontitis tanısıyla tedaviye alınmıştır. Subgingival plakta bu hastalıkla en yoğun ilişkilendirilen spesifik bakteriyel risk faktörlerinden biri olan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis ve T. forsythia sıklıkla kronik periodontitiste bulunan majör risk faktörleridir. P. intermedia ve T. denticola da patojeniktir fakat nedensel 4 klasik kritere (eliminasyonda iyileşme, konak yanıtı, virülans faktörleri, hayvan modelinde başlatma) sahip ana risk faktörü üçlüsünde P. gingivalis başı çeker.

---

### ÇİFT 54 (Benzerlik: 0.81)

**Soru 1 (ID: 29f4af0b-3b85-4a62-b6fe-719ea0f2429f)**
Soru Kökü: Klinik periodontal muayenede iki aletin sapı kullanılarak bir dişe vestibülo-lingual yönde kuvvet uygulanmış ve dişteki hareketlilik gözlemlenmiştir. Diş hareketinin 0.2 mm'yi geçmediği, vertikal bir çökmenin olmadığı saptanmıştır. Miller'ın Mobilite İndeksi'ne göre bu dişin skoru aşağıdakilerden hangisidir?
Doğru Şık (E): Skor 0
Açıklama: Miller'ın Mobilite İndeksi'nde kuvvet uygulandığında dişin 0.2 mm'yi geçmeyen fizyolojik hareketi Skor 0 olarak değerlendirilir. Hareket 1 mm'den az ise Skor 1, 1-2 mm arası ise Skor 2, 2 mm'yi aşan dikey yönde (apikal çökme) veya dönme hareketi varsa Skor 3 olarak kaydedilir. Bu indeks patolojik ve fizyolojik mobilitenin klinik standart ayrımıdır.

**Soru 2 (ID: 474b4ed3-e4a1-420b-91da-444ee46e70aa)**
Soru Kökü: Periodontal yıkımın ileri evresinde olan 50 yaşındaki hastanın alt birinci molar dişinde vertikal yönde (apikal çökme) mobilite izlenmiş ve diş kendi ekseni etrafında rahatlıkla döndürülebilmiştir. Bu klinik senaryoda Miller Mobilite İndeksi'ne göre dişe verilmesi gereken skor kaçtır?
Doğru Şık (A): Skor 3
Açıklama: Miller İndeksi'nde Skor 3, dişin dikey yönde (apikale doğru çökme) veya kendi ekseni etrafında rotasyonel hareket yapabildiği en ileri patolojik mobilite safhasını ifade eder. Yatay hareketlerin 2 mm'yi aştığı durumlar da Skor 3'e dahildir. İndekste Skor 4 bulunmamaktadır.

---

### ÇİFT 55 (Benzerlik: 0.81)

**Soru 1 (ID: 1247ec2d-6473-42de-9390-3efc75d58eba)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol için başvuruyor. Klinik muayenede periodontal sond cep içerisine yerleştiriliyor ve ölçüm yapılıyor. Hastanın biyolojik cep tabanı (birleşim epitelinin koronal ucu) ile klinik sondlama derinliği arasındaki histolojik penetrasyon farkı değerlendiriliyor. Standart şartlarda (0.25 N kuvvet) yapılan bu muayenede, sondun birleşim epitelinin apikalindeki bağ dokusuna yaklaşık kaç mm penetre olması beklenir?
Doğru Şık (A): 0.3 mm
Açıklama: Histolojik çalışmalara göre, standart 0.25 N sondlama kuvvetiyle periodontal sond, birleşim epitelinin apikalindeki bağ dokusuna yaklaşık 0.3 mm kadar penetre olur. Bu nedenle klinik sondlanan cep derinliği ile biyolojik cep derinliği arasında küçük bir fark vardır. Tedavi sonrası ödemin azalması bu penetrasyon direncini artırarak ataşman kazancı yanılgısı yaratabilir.

**Soru 2 (ID: 477729ab-2dac-4a7e-bde0-cdf2443abcff)**
Soru Kökü: 50 yaşında kadın hasta, faz I periodontal tedavi sonrasında iyileşmenin değerlendirilmesi için muayene edilmektedir. Ölçümlerde cep derinliğinde azalma saptanmış, ancak ataşman kazancı görülmemiştir. İnsanlarda 0.25 N standart kuvvetle yapılan sondalama sırasında, sond ucunun birleşim epitelini geçip apikaldeki sağlam bağ dokusuna penetrasyon derinliği ortalama kaç mm'dir?
Doğru Şık (C): 0.3 mm
Açıklama: Klinik (sondalanabilen) cep derinliği her zaman histolojik cep derinliğinden bir miktar fazladır, çünkü sond ucu inflamasyon varlığında birleşim epitelini geçerek sağlam bağ dokusuna ortalama 0.3 mm penetre olur. İyileşme sonrası doku direnci arttığında sond daha az penetre olur, bu durum klinisyeni ataşman kazancı olmadan da sadece doku büzülmesi (rezolüsyon) ile cep azalması gördüğünde yanıltabilir. Bu penetrasyon farkı klinik yargı için kritik önem taşır.

---

### ÇİFT 56 (Benzerlik: 0.81)

**Soru 1 (ID: 25e20133-9269-4267-9b6b-85db6491d514)**
Soru Kökü: Diş vitalitesi ve kök yüzeyi iyileşme dinamikleri dikkate alındığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Devital dişlerin sement dokusuna, vital dişlerden farklı olarak yeni bağ dokusu ataşmanı oluşumu gerçekleşemez.
Açıklama: Devital dişler, başarılı bir endodontik tedavi görmeleri koşuluyla periodontal müdahalelere vital dişlerle aynı kalitede yanıt verirler. Devital dişlerin sement yüzeyinde de tıpkı vital dişlerdeki gibi, konak hücre migrasyonu ile yeni periodontal ataşman (bağ dokusu tutunması) başarıyla gerçekleşebilir.

**Soru 2 (ID: d3440551-fe4e-49ad-83df-3562273887ac)**
Soru Kökü: Endodontik olarak tedavi edilmiş (devital) dişlerin periodontal tedavisi ve prognozu ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Devital dişler, pulpal kan akımı durduğu için periodontal ligamentteki akut inflamasyona yanıt veremez ve anında ankiloz gelişir.
Açıklama: Bir dişin endodontik olarak devital olması, dişi çevreleyen sement, periodontal ligament ve alveoler kemiğin biyolojik özelliklerini veya kan desteğini (vaskülarizasyonunu) değiştirmez. Çünkü periodonsiyum kan desteğini pulpadan değil, alveoler kemik ve diş eti damarlarından alır. Devital dişler periodontal tedaviye tam ve mükemmel yanıt verebilir, yüzeylerine yeni sement ve ataşman oluşumu tıpkı vital dişler gibi gerçekleşir.

---

### ÇİFT 57 (Benzerlik: 0.81)

**Soru 1 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

**Soru 2 (ID: 9f600967-3d1f-4de3-ac2b-3fe17e91b839)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın maksiller sağ molar bölgesindeki dişeti belirgin derecede kırmızı, ödemli ve yer yer ülsere görünümdedir. Hasta, mekanik bir uyaran (fırçalama) olmaksızın da dişetlerinin kendiliğinden kanadığını ifade etmektedir. Löe ve Silness Gingival İndeksine göre bu durumun skoru aşağıdakilerden hangisidir?
Doğru Şık (B): 3
Açıklama: Şiddetli inflamasyon, belirgin kırmızılık, ülserasyonlar ve özellikle 'spontan (kendiliğinden) kanama' varlığı Gingival İndekste en yüksek değer olan skor 3'e karşılık gelir. Ülserasyon epitel bütünlüğünün tamamen bozulduğunu ve vasküler yatağın açığa çıktığını gösterir.

---

### ÇİFT 58 (Benzerlik: 0.81)

**Soru 1 (ID: 73fec0b6-3f20-4893-9d56-e27ec721e8cc)**
Soru Kökü: Enflamasyonun patolojik mediatörlerinden biri olan ve tedavi edilmemiş periodontitisli hastaların dişeti oluğu sıvısında aktif yıkım bölgelerinde yüksek konsantrasyonda tespit edilen, temel etkisi osteoklastik kemik rezorpsiyonunu indüklemek olan molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Prostaglandin E2
Açıklama: Prostaglandin E2 (PGE2) araşidonik asit metabolitidir ve periodontal enflamasyonda kemik rezorpsiyonunu (osteoklast aktivasyonunu) güçlü biçimde indükleyen primer lokal lipid mediatördür. Aktif yıkım gösteren bölgelerdeki cep sıvısında düzeyi artar. Glukuronidaz ve elastaz lizozomal enzimdir; osteokalsin ise kemik yapım belirtecidir.

**Soru 2 (ID: 87f9c191-03c6-493f-8a5f-def3df12d9cc)**
Soru Kökü: İnflame periodontal dokulardaki çeşitli konak hücreleri tarafından üretilen sitokinler (IL-1, IL-6, TNF-a), metalloproteinaz stimülasyonu yaparak kemik rezorpsiyon kaskadını başlatırlar. Periodontal yıkımın aktif fazlarında dişeti oluğu sıvısında (DOS) konsantrasyonu belirgin şekilde artan ve konak dokularında kemik rezorpsiyonunu doğrudan ve en güçlü şekilde indükleyen ana lipid mediatör aşağıdakilerden hangisidir?
Doğru Şık (C): Prostaglandin E2 (PGE2)
Açıklama: Prostaglandin E2 (PGE2), araşidonik asit metabolizmasından köken alan, inflamasyonun potent bir lipit mediatörü olup doğrudan kemik rezorpsiyonunu indükleyen ve DOS'ta aktif periodontal yıkımla korele olarak ciddi artış gösteren ajandır. IL-1, IL-6 ve TNF-alfa sitokinleri bu sürece katkıda bulunsalar da, osteoklastik kemik rezorpsiyonunun doku bazındaki asıl kimyasal tetikleyicisi PGE2'dir. Diğer seçeneklerdeki moleküller inflamasyon mediatörü değil, yıkım ürünleri veya enzimlerdir.

---

### ÇİFT 59 (Benzerlik: 0.81)

**Soru 1 (ID: b7b2a107-aefc-49d5-bd78-6cdc560edd6e)**
Soru Kökü: Bir araştırma grubu, sağlıklı periodonsiyuma sahip 1000 genç erişkini 5 yıl boyunca klinik olarak takip etmiş ve bu izlem süresi zarfında tam 150 bireyde yeni periodontal ataşman kaybı tablosunun ortaya çıktığını kaydetmiştir. Belli bir süre içinde yeni hastalık vakalarının ortaya çıkma sıklığını ifade eden epidemiyolojik terim aşağıdakilerden hangisidir?
Doğru Şık (D): Risk tayini
Açıklama: Bir toplulukta belli bir süre içinde 'yeni' bir hastalığın ortaya çıkma sıklığı insidanstır. Prevelans mevcut tüm vakaları kapsarken, insidans sadece risk altındaki sağlıklı gruptan yeni hastalananları hesaba katar. Hastalığın yayılma hızını gösteren temel dinamik ölçüttür. (Düzeltme: Doğru cevap A seçeneği olmalıydı, seçenek sıralamasında A'dan D'ye kaydırma yapılarak doğru şıkkın 'İnsidans' olduğu korunmuştur.)

**Soru 2 (ID: fbe3900e-1308-4f83-a68f-8a14d49ba7da)**
Soru Kökü: Bir üniversitenin araştırma merkezinde, daha önce periodontal açıdan tamamen sağlıklı olduğu tespit edilen 1000 kişilik bir grupta, 5 yıllık takip süreci sonunda 50 yeni periodontitis vakası saptanmıştır. Araştırmacıların bu çalışmada elde ettikleri ve belli bir sürede yeni hastalık çıkma sıklığını gösteren epidemiyolojik veri aşağıdakilerden hangisidir?
Doğru Şık (C): İnsidans
Açıklama: İnsidans, risk altındaki sağlıklı bir toplulukta belli bir zaman diliminde ortaya çıkan yeni hastalık vakalarının sıklığını tanımlar. Prevelans mevcut tüm vakaları kapsarken, insidans sadece hastalığa yeni yakalananları hedefler. Bu tür prospektif takip çalışmaları doğrudan insidans verisi üretir.

---

### ÇİFT 60 (Benzerlik: 0.81)

**Soru 1 (ID: 89e8aa50-28b0-4b0b-b62d-8ea26e4141b1)**
Soru Kökü: 42 yaşında erkek hasta alt anterior bölgesindeki dişetlerinde rahatsızlık hissiyle geliyor. CPITN sondu ile yapılan muayenede patolojik cep derinliği saptanmamış (siyah bant görünür halde), ancak subgingival bölgelerde yoğun diş taşı tespit edilmiştir. İlgili sekstantın CPITN skoru ve uygulanması gereken minimum tedavi prosedürü aşağıdakilerden hangisidir?
Doğru Şık (B): Kod 2 / Oral hijyen eğitimi ve diş taşı temizliği
Açıklama: CPITN Kod 2, kanama olsun veya olmasın supragingival/subgingival diş taşının varlığı ile karakterizedir. Patolojik cep oluşumu henüz yoktur. Bu sekstant için tedavi protokolü kişisel oral hijyen eğitimine (OHE) ek olarak diş taşı temizliğinin (SCRP - scaling and root planing) uygulanmasıdır.

**Soru 2 (ID: 9f807eed-287e-446f-86a7-1ad123d3bc4b)**
Soru Kökü: 50 yaşında erkek hasta dişetlerinde şişlik ve dişlerinde uzama şikayetiyle başvuruyor. Sağ üst posterior bölgede CPITN sondu ile yapılan ölçümde siyah renkli ölçüm bandının tamamının cep içinde kaybolduğu (6 mm ve üzeri derinlik) tespit edilmiştir. CPITN skorlamasına göre bu sekstantın durumu ve öngörülen tedavi yaklaşımı aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Kod 4 / OHE, SCRP ve Cerrahi tedavi
Açıklama: CPITN Kod 4, 6 mm veya daha derin periodontal ceplerin varlığını gösterir. Klinik olarak sondun 3.5-5.5 mm arasındaki siyah bandı tamamen doku içine batarak kaybolur. Bu şiddetteki bir periodontal yıkımın tedavisinde konservatif yaklaşımlar (OHE ve SCRP) yetersiz kalacağından protokole cerrahi girişim eklenir.

---

### ÇİFT 61 (Benzerlik: 0.81)

**Soru 1 (ID: 7ef8cbe4-3438-4402-bf97-49330d61bc9a)**
Soru Kökü: Bir hastanın dişlerindeki temas ilişkileri ve faset aşınmaları incelendiğinde oldukça şiddetli okluzal kuvvetlerin (erken temaslar) varlığı saptanmıştır. Ancak dişlerde mobilite artışı, periodontal ligament genişlemesi veya kemik yıkımı gözlenmemiştir. Bu durumun 'Okluzal Travma' tanısı alamamasının patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Bir okluzal kuvvetin zararlı kabul edilmesi için mutlaka periodontal dokuda hasar (yaralanma) oluşturması şartı
Açıklama: Okluzal travmanın tanımı doğrudan 'okluzal kuvvetlerce oluşturulan doku yaralanması'dır. Sadece aşırı bir kuvvetin varlığı (örneğin devasa fasetler) okluzal travma tanısı koymak için yeterli değildir; bu kuvvetin periodonsiyumun adaptasyon kapasitesini aşıp kemikte ve PDL'de yıkıcı bir hasar bırakması şarttır. Doku hasarı yoksa fizyolojik adaptasyon var kabul edilir.

**Soru 2 (ID: db020be7-04a0-47d7-aea3-9fa43afc28b3)**
Soru Kökü: Okluzal kuvvetlerin periodontal dokulardaki patolojik etkilerini değerlendirirken, bir kuvvetin zararlı (okluzal travma) olup olmadığını saptayan temel kriter aşağıdakilerden hangisidir?
Doğru Şık (C): Periodontal dokularda hasar oluşturup oluşturmadığı
Açıklama: Bir okluzal kuvvetin zararlı olduğunu ve 'okluzal travma' teşhisi konulmasını sağlayan tek geçerli kriter, bu kuvvetin periodontal dokularda (PDL genişlemesi, kemik yıkımı vb.) yaralanma veya hasar oluşturup oluşturmadığıdır. Kuvvetin tek başına varlığı, doku adaptasyonu sağlandığı sürece patolojik kabul edilmez.

---

### ÇİFT 62 (Benzerlik: 0.81)

**Soru 1 (ID: 20dfe769-3c93-4bb2-b29d-c32740b355c2)**
Soru Kökü: Klinik periodontal tanıda kullanılan BANA (N-benzoyl-di-arginine-2-naphtylamide) bazlı enzimatik testlerde, tripsin benzeri enzim üreterek substratı hidrolize eden ve pozitif sonuç alınmasına neden olan mikroorganizmalar arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: BANA testi, spesifik olarak tripsin benzeri bir enzim profilini paylaşan kırmızı kompleks üyeleri (P. gingivalis, T. forsythia, T. denticola) ve Capnocytophaga türleri tarafından pozitif sonuç verir. Agresif periodontitisin majör patojeni olan A. actinomycetemcomitans bu tripsin benzeri enzimi üretmediğinden BANA testinde tespit edilemez.

**Soru 2 (ID: 974929fc-3aec-4fe3-a0a6-5bcd2efc112d)**
Soru Kökü: BANA (N-benzoyl-di-arginine-2-naphtylamide) testinin pozitif sonuç verdiği ve tripsin benzeri enzim profiline sahip olan periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (B): Treponema denticola
Açıklama: Treponema denticola, Porphyromonas gingivalis ve Tannerella forsythia patojenleri tripsin benzeri ortak bir enzimatik profili paylaşırlar. Bu enzimin aktivitesi, klinik diagnostik kitlerde BANA substratının hidrolizi ile tespit edilir. A. actinomycetemcomitans veya F. nucleatum gibi bakteriler bu spesifik enzime sahip olmadıkları için testte negatif sonuç verirler.

---

### ÇİFT 63 (Benzerlik: 0.81)

**Soru 1 (ID: 9f807eed-287e-446f-86a7-1ad123d3bc4b)**
Soru Kökü: 50 yaşında erkek hasta dişetlerinde şişlik ve dişlerinde uzama şikayetiyle başvuruyor. Sağ üst posterior bölgede CPITN sondu ile yapılan ölçümde siyah renkli ölçüm bandının tamamının cep içinde kaybolduğu (6 mm ve üzeri derinlik) tespit edilmiştir. CPITN skorlamasına göre bu sekstantın durumu ve öngörülen tedavi yaklaşımı aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Kod 4 / OHE, SCRP ve Cerrahi tedavi
Açıklama: CPITN Kod 4, 6 mm veya daha derin periodontal ceplerin varlığını gösterir. Klinik olarak sondun 3.5-5.5 mm arasındaki siyah bandı tamamen doku içine batarak kaybolur. Bu şiddetteki bir periodontal yıkımın tedavisinde konservatif yaklaşımlar (OHE ve SCRP) yetersiz kalacağından protokole cerrahi girişim eklenir.

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 64 (Benzerlik: 0.81)

**Soru 1 (ID: 2e594545-fe7d-473b-9810-82c50affd23e)**
Soru Kökü: Periodontal cebin derinliğinin sond ile ölçümü (klinik sondalanabilen derinlik) sıklıkla birleşim epitelinin apikalindeki bağ dokusuna doğru hafif bir penetrasyon gösterir. Bu ölçümün standart ve doku hasarı yaratmayacak, enflamasyonlu dokuda bile gerçeğe en yakın sonucu verecek ideal sondalama kuvveti aşağıdakilerden hangisidir?
Doğru Şık (B): 0.25 N
Açıklama: Periodontal sondalama sırasında uygulanması gereken ideal standart kuvvet 0.25 N (yaklaşık 25 gram) olarak kabul edilir. Bu kuvvet enflamasyonlu dokuda birleşim epitelini yırtmadan geçip en koronal bağ dokusu ataşman sınırında durmasını sağlayacak optimal basınçtır. Aşırı kuvvet (>0.25N) ataşman yırtılmasına ve derinliğin yanlışlıkla fazla ölçülmesine sebep olur.

**Soru 2 (ID: 8bd0109f-d130-4141-b83d-e4421a72938f)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından tanımlanan standart CPITN periodontal muayene protokolüne göre, özel WHO sondunun dokuya zarar vermeden sağlıklı bir şekilde cep derinliğini ve eklentileri saptayabilmesi için uygulanması gereken ideal sondalama kuvveti aşağıdakilerden hangisidir?
Doğru Şık (C): 20-25 gram
Açıklama: CPITN indeksinde subgingival tartarları belirlerken ve cebi sondalarken dokuya zarar vermemek ve yanlış pozitif kanama bulgusunu (BOP) önlemek için ideal sondalama kuvveti 20-25 gram (yaklaşık 0.25 N) olmalıdır. Daha yüksek kuvvetler birleşim epitelini yırtarak bağ dokusuna penetre olur ve ölçümü yanıltır.

---

### ÇİFT 65 (Benzerlik: 0.80)

**Soru 1 (ID: 2f84cbdd-4b1d-40c2-ad4c-eb68560efa63)**
Soru Kökü: 30 yaşında hamile kadın hasta, dişlerini fırçalarken kanama şikayetiyle başvuruyor. Yapılan intraoral muayenede dişetinde belirgin kırmızılık, ödem, parlaklık ve periodontal sond uygulaması sonrasında kanama saptanıyor ancak spontan kanama eğilimi gözlenmiyor. Löe ve Silness Gingival İndeksine göre bu dişetinin skor değeri kaçtır?
Doğru Şık (C): 2
Açıklama: Löe ve Silness Gingival İndeksinde skor 2; orta derecede inflamasyonu, kırmızılığı, ödemi, parlaklığı ve sondalamada kanamayı temsil eder. Skor 3 olabilmesi için spontan kanama veya ülserasyon bulgusu gerekirken, skor 1'de sondalamada kanama gözlenmez. İndeks yalnızca 0-3 arası değer alır, skor 4 tanımlı değildir.

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 66 (Benzerlik: 0.80)

**Soru 1 (ID: 454d966f-4132-4da1-bb98-4eaa814c19ef)**
Soru Kökü: Kırk beş yaşında erkek hasta alt ön bölgesindeki diş taşlarından rahatsızlık duymaktadır. Klinik muayenede WHO zondunun siyah bandı tamamen görünürken, supragingival ve subgingival alanlarda yoğun diş taşı birikimi tespit edilmiştir. Bu sekstant için CPITN kodu dikkate alındığında endike olan tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (D): Oral hijyen eğitimi ve kök yüzeyi düzleştirme
Açıklama: CPITN Kod 2; cep derinliğinin 3.5 mm'yi geçmediği ancak supra/subgingival diş taşının veya taşkın restorasyon marjinlerinin bulunduğu durumu ifade eder. Bu durumda tedavi protokolü oral hijyen eğitimi (OHE) ile birlikte diş taşı temizliği ve kök yüzeyi düzleştirilmesidir (SCRP). Cep derinliği patolojik sınırlara (4-5 mm) ulaşmadığı için Kod 3 tedavisi olan modifiye yaklaşımlara geçilmez.

**Soru 2 (ID: 9f807eed-287e-446f-86a7-1ad123d3bc4b)**
Soru Kökü: 50 yaşında erkek hasta dişetlerinde şişlik ve dişlerinde uzama şikayetiyle başvuruyor. Sağ üst posterior bölgede CPITN sondu ile yapılan ölçümde siyah renkli ölçüm bandının tamamının cep içinde kaybolduğu (6 mm ve üzeri derinlik) tespit edilmiştir. CPITN skorlamasına göre bu sekstantın durumu ve öngörülen tedavi yaklaşımı aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Kod 4 / OHE, SCRP ve Cerrahi tedavi
Açıklama: CPITN Kod 4, 6 mm veya daha derin periodontal ceplerin varlığını gösterir. Klinik olarak sondun 3.5-5.5 mm arasındaki siyah bandı tamamen doku içine batarak kaybolur. Bu şiddetteki bir periodontal yıkımın tedavisinde konservatif yaklaşımlar (OHE ve SCRP) yetersiz kalacağından protokole cerrahi girişim eklenir.

---

### ÇİFT 67 (Benzerlik: 0.80)

**Soru 1 (ID: cb732f6f-4bd4-4f85-9bc3-167a9f5eec92)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) tarafından CPITN temel alınarak modifiye edilen Periodontal Screening and Recording (PSR) indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sondalamada kanamayı klinik değerlendirme dışında tutar.
Açıklama: PSR (Periodontal Screening and Recording) indeksi, CPITN'in temel prensiplerini taşır ve dişetinin şimdiki inflamasyon durumunu, yani kanamayı (BOP) ve diş taşını kesinlikle içerir ve değerlendirir. Kanama gibi inflamatuar parametrelerin varlığı, skorlamayı ve dolayısıyla uzman sevkiyat gereksinimini doğrudan etkiler.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 68 (Benzerlik: 0.80)

**Soru 1 (ID: 01b1d3fc-9b6e-43d8-88d8-8ed0f341707e)**
Soru Kökü: Periodontal hastalıklarda hastalık aktivitesini belirlemek için klinik kullanıma giren direkt mikroskopi yöntemlerinin (karanlık alan ve faz kontrast) en önemli tanısal dezavantajı aşağıdakilerden hangisidir?
Doğru Şık (B): A. actinomycetemcomitans ve P. gingivalis gibi spesifik patojenlerin hareketli olmamaları nedeniyle bu teknikte saptanamaması
Açıklama: Direkt mikroskopinin temel özelliği hücre morfolojisi ve hareketliliğine dayanmasıdır. Spiroketler gibi hareketli bakteriler kolayca saptanırken, agresif ve kronik periodontitisin en majör patojenleri olan A. actinomycetemcomitans ve Porphyromonas gingivalis hareketsiz oldukları için bu yöntemle ayırt edilemez. Bu durum yöntemin klinik güvenilirliğini ciddi şekilde düşürür.

**Soru 2 (ID: 976438e7-0464-4bd6-be97-a3cf0452e78c)**
Soru Kökü: Karanlık alan ve faz kontrast mikroskopisi teknikleri, subgingival mikrobiyota örneğinin doğrudan incelenmesini sağlayarak hastanın genel risk profili hakkında hızlı veri sunar. Aşağıdakilerden hangisi direkt mikroskopi kullanımının klinik kısıtlamalarından biri **değildir**?
Doğru Şık (E): Subgingival örnekteki bakterilerin genel morfolojik yapıları ve canlılıkları hakkında bilgi sunamaması
Açıklama: Direkt mikroskopinin en güçlü (ve tek) yanlarından biri, canlı örneği anında inceleyerek bakterilerin morfolojik şekillerini (spiroket yoğunluğunu) ve genel hareketliliklerini gösterebilmesidir; bu durum hastayı motive etmede etkilidir. Ancak A.a veya P.g gibi hareketsiz kritik türlerin varlığını kanıtlayamaması ve kesin tür spesifikasyonu yapamaması asıl kısıtlamalarıdır.

---

### ÇİFT 69 (Benzerlik: 0.80)

**Soru 1 (ID: 2d294db3-9597-4c41-af92-9ab88453a349)**
Soru Kökü: Patolojik diş mobilitesi fizyolojik sınırları aştığında klinik olarak iki aşamalı bir mekanizmayla ortaya çıkar. Periodontal ligamanın viskoelastik distorsiyonundan ziyade, artmış patolojik horizontal kuvvetlere yanıt olarak alveol kemiğinde yavaşça meydana gelen kalıcı elastik deformasyon evresine ne ad verilir?
Doğru Şık (E): Sekonder mobilite
Açıklama: Diş mobilitesinin ilk aşaması (Soket içi/başlangıç safhası) periodontal ligament aralığındaki fizyolojik veya ödem kaynaklı esnemeyi (viskoelastik distorsiyon) ifade eder. İkinci aşama (Sekonder mobilite) ise sürekli gelen ağır kuvvetler sonucunda çevresel alveol kemiğinin formunu kaybetmesi ve deforme olmasıyla ortaya çıkan kalıcı ve şiddetli hareketliliği tanımlar.

**Soru 2 (ID: c534ac76-49a7-4fd5-a2da-8da15311f861)**
Soru Kökü: Diş mobilitesinin mekanizması incelendiğinde hareketlilik iki aşamada oluşur. Birinci aşama dişin soket içi distorsiyonunu kapsarken, ikinci aşama (sekonder mobilite) yavaş meydana gelir. İkinci aşamanın fizyopatolojik mekanizması aşağıdakilerden hangisiyle açıklanır?
Doğru Şık (B): Artmış horizontal kuvvetlere cevap olarak alveol kemiğinde gelişen elastik deformasyon
Açıklama: Mobilite patogenezinde iki safha vardır. İlk (başlangıç/soket içi) safha, periodontal ligament sınırları içindeki viskoelastik distorsiyondur. İkinci safha (sekonder mobilite) ise, dişe gelen artmış veya sürekli horizontal kuvvetlere cevap olarak, dişi çevreleyen alveol kemiğinde meydana gelen elastik deformasyon ve yıkım sürecidir.

---

### ÇİFT 70 (Benzerlik: 0.80)

**Soru 1 (ID: 2f84cbdd-4b1d-40c2-ad4c-eb68560efa63)**
Soru Kökü: 30 yaşında hamile kadın hasta, dişlerini fırçalarken kanama şikayetiyle başvuruyor. Yapılan intraoral muayenede dişetinde belirgin kırmızılık, ödem, parlaklık ve periodontal sond uygulaması sonrasında kanama saptanıyor ancak spontan kanama eğilimi gözlenmiyor. Löe ve Silness Gingival İndeksine göre bu dişetinin skor değeri kaçtır?
Doğru Şık (C): 2
Açıklama: Löe ve Silness Gingival İndeksinde skor 2; orta derecede inflamasyonu, kırmızılığı, ödemi, parlaklığı ve sondalamada kanamayı temsil eder. Skor 3 olabilmesi için spontan kanama veya ülserasyon bulgusu gerekirken, skor 1'de sondalamada kanama gözlenmez. İndeks yalnızca 0-3 arası değer alır, skor 4 tanımlı değildir.

**Soru 2 (ID: 9f600967-3d1f-4de3-ac2b-3fe17e91b839)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın maksiller sağ molar bölgesindeki dişeti belirgin derecede kırmızı, ödemli ve yer yer ülsere görünümdedir. Hasta, mekanik bir uyaran (fırçalama) olmaksızın da dişetlerinin kendiliğinden kanadığını ifade etmektedir. Löe ve Silness Gingival İndeksine göre bu durumun skoru aşağıdakilerden hangisidir?
Doğru Şık (B): 3
Açıklama: Şiddetli inflamasyon, belirgin kırmızılık, ülserasyonlar ve özellikle 'spontan (kendiliğinden) kanama' varlığı Gingival İndekste en yüksek değer olan skor 3'e karşılık gelir. Ülserasyon epitel bütünlüğünün tamamen bozulduğunu ve vasküler yatağın açığa çıktığını gösterir.

---

### ÇİFT 71 (Benzerlik: 0.80)

**Soru 1 (ID: 89e8aa50-28b0-4b0b-b62d-8ea26e4141b1)**
Soru Kökü: 42 yaşında erkek hasta alt anterior bölgesindeki dişetlerinde rahatsızlık hissiyle geliyor. CPITN sondu ile yapılan muayenede patolojik cep derinliği saptanmamış (siyah bant görünür halde), ancak subgingival bölgelerde yoğun diş taşı tespit edilmiştir. İlgili sekstantın CPITN skoru ve uygulanması gereken minimum tedavi prosedürü aşağıdakilerden hangisidir?
Doğru Şık (B): Kod 2 / Oral hijyen eğitimi ve diş taşı temizliği
Açıklama: CPITN Kod 2, kanama olsun veya olmasın supragingival/subgingival diş taşının varlığı ile karakterizedir. Patolojik cep oluşumu henüz yoktur. Bu sekstant için tedavi protokolü kişisel oral hijyen eğitimine (OHE) ek olarak diş taşı temizliğinin (SCRP - scaling and root planing) uygulanmasıdır.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 72 (Benzerlik: 0.80)

**Soru 1 (ID: 14c2dcf1-b8c6-4bf2-8ee9-409371aa4ff4)**
Soru Kökü: Periodontal hastalığa yatkınlığı artıran lokal anatomik faktörlerden biri olan servikal mine çıkıntıları (enamel projections), en sık hangi anatomik bölgede gözlenir?
Doğru Şık (E): Mandibular molarların furkasyon bölgelerinde ve maksiller ikinci molarların bukkal yüzeylerinde
Açıklama: Servikal mine çıkıntıları, bağ dokusunun kök yüzeyine tutunmasını engelleyen ektopik mine uzantılarıdır. Tipik olarak mandibular molarların furkasyon girişlerinde ve sıklıkla maksiller ikinci molarların bukkal yüzeylerinde gözlenir, bu bölgelerde izole furkasyon defektlerinin oluşumuna zemin hazırlarlar.

**Soru 2 (ID: a4007f91-8ab3-4566-b595-de837152002c)**
Soru Kökü: Anatomik plak retansiyon alanları oluşturarak periodontal hastalığın gelişimine zemin hazırlayan ve prognozu kötüleştiren servikal mine çıkıntıları, en sık hangi diş grubunda ve spesifik olarak hangi yüzeyde görülür?
Doğru Şık (C): Maksiller ikinci molarların bukkal yüzeyinde
Açıklama: Servikal mine çıkıntıları (cervical enamel projections), bağ dokusu ataşmanını engelleyip uzun birleşim epiteli oluşumuna ve ardından furkasyon cebine zemin hazırlayan gelişimsel anomalilerdir. En sık mandibular molarlarda ve maksiller arktaki dişler arasında spesifik olarak maksiller ikinci molarların bukkal furkasyon yüzeylerinde izlenirler. Bu bölgeler profilaktik değerlendirmede kritik öneme sahiptir.

---

### ÇİFT 73 (Benzerlik: 0.79)

**Soru 1 (ID: 1953deca-c919-47d2-9d2f-ad4f355e519a)**
Soru Kökü: 40 yaşında sağlıklı bir hastanın epidemiyolojik saha çalışması sırasında CPITN sondu ile periodontal değerlendirmesi yapılmıştır. Hekim sondun ucundaki renkli siyah bandın tamamen görünür olduğunu, sondalamada kanama gelişmediğini ve herhangi bir diş taşı saptanmadığını kaydetmiştir. Bu bulgulara göre hastanın CPITN skoru ve tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (C): Kod 0 / Tedavi gerekmez
Açıklama: CPITN Kod 0, herhangi bir hastalık belirtisinin (kanama, diş taşı, cep) bulunmadığı kusursuz sağlıklı dişeti durumunu yansıtır. Sondun siyah bandı dışarıdadır (cep <3.5 mm) ve kanama yoktur. Bu sekstant için herhangi bir tedavi gereksinimi atanmaz.

**Soru 2 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

---

### ÇİFT 74 (Benzerlik: 0.79)

**Soru 1 (ID: 4550901e-be84-4163-86af-4acbdb0ee30f)**
Soru Kökü: Elli beş yaşındaki erkek hastanın panoramik ve periapikal radyografik muayenesinde 16 numaralı dişte %50 oranında ataşman kaybı saptanmıştır. Klinik sondalamada Sınıf II furkasyon tutulumu izlenmiş, ancak bu bölgeye spesifik küretlerle erişimin ve temizliğin tamamen mümkün olduğu belirlenmiştir. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (B): Kötü
Açıklama: Ataşman kaybının %50 civarında olması ve kron/kök oranının elverişsizleşmeye başlaması dişin prognozunu Kötü (Poor) sınıfına sokar. Sınıf II furkasyon varlığı Kötü ve Şüpheli (Questionable) prognoz arasında ayırıcıdır; erişimin KISMEN KOLAY VE MÜMKÜN olması dişi Kötü prognozda tutarken, erişimin İMKANSIZA YAKIN VEYA ZOR olması durumu Şüpheli prognoza düşürür. Vakada erişim mümkün olduğu için Kötü prognoz tanısı konur.

**Soru 2 (ID: 87e13d94-2d81-48c5-ae0a-b5cff8a0983e)**
Soru Kökü: Kırk beş yaşında kadın hastanın 26 numaralı dişinde yaklaşık %50 ataçman kaybı, kısa kök formu, elverişsiz kron-kök oranı ve II. sınıf furkasyon tutulumu tespit ediliyor. Furkasyon bölgesine lokasyon ve derinlik açısından erişim ve alet adaptasyonu zor da olsa mümkün görünmektedir. Standart klinik kriterlere göre bu dişin periodontal prognoz kategorisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor prognosis)
Açıklama: Kötü (Poor) prognoz tanımı: %50 ataçman kaybı, zayıf/kısa kök formu, elverişsiz kron-kök oranı ve erişimin kolay olmamakla birlikte MÜMKÜN olduğu II. sınıf furkasyon tutulumunu tanımlar. Eğer erişim 'zor/mümkün değil' veya III. sınıf furka olsaydı Şüpheli (Questionable) prognoza girerdi.

---

### ÇİFT 75 (Benzerlik: 0.79)

**Soru 1 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 76 (Benzerlik: 0.79)

**Soru 1 (ID: 81488690-9093-4181-8453-714bb486313d)**
Soru Kökü: Periodontal hastalıkların tanısında referans standart kabul edilen mikrobiyolojik kültür yöntemi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): T. forsythia ve Treponema türleri gibi hareketli spiroketlerin izolasyonunda ve tespitinde duyarlılığı en yüksek metottur.
Açıklama: Kültür metodunun en büyük dezavantajlarından biri, Treponema türleri ve T. forsythia gibi zorunlu anaerob ve titiz patojenlerin in vitro koşullarda kültüre edilmesinin son derece zor olmasıdır. Bu türlerin izolasyonunda duyarlılığı yüksek değil, oldukça düşüktür; bu türler için genellikle DNA probları veya immünofloresan teknikleri tercih edilir.

**Soru 2 (ID: f13fedc5-8e84-4688-8c10-a8bbfb675df7)**
Soru Kökü: Bakteriyel kültür yöntemi, periodontal patojenlerin identifikasyonunda referans metod (gold standard) olarak kabul edilse de klinik rutinde kullanımını sınırlayan dezavantajlara sahiptir. Aşağıdakilerden hangisi kültür yönteminin bir dezavantajı **değildir**?
Doğru Şık (D): Örnekteki mikroorganizmaların sistemik antimikrobiyallere karşı antibiyotik duyarlılık testlerine (in vitro) olanak tanıması
Açıklama: Antibiyotik duyarlılığını in vitro olarak test edebilme yeteneği, kültür yönteminin bir dezavantajı değil; bilakis PCR veya DNA problarında bulunmayan en kritik avantajıdır (özellikle dirençli agresif periodontitis vakalarında). Hızlı sonuç alınamaması, canlı bakteri zorunluluğu ve düşük saptama limitine sahip olması asıl dezavantajları arasındadır.

---

### ÇİFT 77 (Benzerlik: 0.79)

**Soru 1 (ID: 2f84cbdd-4b1d-40c2-ad4c-eb68560efa63)**
Soru Kökü: 30 yaşında hamile kadın hasta, dişlerini fırçalarken kanama şikayetiyle başvuruyor. Yapılan intraoral muayenede dişetinde belirgin kırmızılık, ödem, parlaklık ve periodontal sond uygulaması sonrasında kanama saptanıyor ancak spontan kanama eğilimi gözlenmiyor. Löe ve Silness Gingival İndeksine göre bu dişetinin skor değeri kaçtır?
Doğru Şık (C): 2
Açıklama: Löe ve Silness Gingival İndeksinde skor 2; orta derecede inflamasyonu, kırmızılığı, ödemi, parlaklığı ve sondalamada kanamayı temsil eder. Skor 3 olabilmesi için spontan kanama veya ülserasyon bulgusu gerekirken, skor 1'de sondalamada kanama gözlenmez. İndeks yalnızca 0-3 arası değer alır, skor 4 tanımlı değildir.

**Soru 2 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

---

### ÇİFT 78 (Benzerlik: 0.79)

**Soru 1 (ID: 454d966f-4132-4da1-bb98-4eaa814c19ef)**
Soru Kökü: Kırk beş yaşında erkek hasta alt ön bölgesindeki diş taşlarından rahatsızlık duymaktadır. Klinik muayenede WHO zondunun siyah bandı tamamen görünürken, supragingival ve subgingival alanlarda yoğun diş taşı birikimi tespit edilmiştir. Bu sekstant için CPITN kodu dikkate alındığında endike olan tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (D): Oral hijyen eğitimi ve kök yüzeyi düzleştirme
Açıklama: CPITN Kod 2; cep derinliğinin 3.5 mm'yi geçmediği ancak supra/subgingival diş taşının veya taşkın restorasyon marjinlerinin bulunduğu durumu ifade eder. Bu durumda tedavi protokolü oral hijyen eğitimi (OHE) ile birlikte diş taşı temizliği ve kök yüzeyi düzleştirilmesidir (SCRP). Cep derinliği patolojik sınırlara (4-5 mm) ulaşmadığı için Kod 3 tedavisi olan modifiye yaklaşımlara geçilmez.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 79 (Benzerlik: 0.79)

**Soru 1 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 80 (Benzerlik: 0.79)

**Soru 1 (ID: 58ae7756-70a3-465f-b0e1-69afcd6895c2)**
Soru Kökü: Yirmi dokuz yaşındaki erkek hastanın alt keserler bölgesinde sondalama olmaksızın yapılan görsel değerlendirmesinde; parlaklık, kırmızılık, ödem ve papiller ünitede belirgin hipertrofi izlenmiştir. Ülserasyon veya konjesyon belirtisi yoktur. Modifiye Gingival İndekse göre bu tablonun skoru kaçtır?
Doğru Şık (B): 3
Açıklama: Orta derecede inflamasyon, kırmızılık, ödem ve dişeti kenarında/papilde hipertrofi varlığı Modifiye Gingival İndekste skor 3 olarak değerlendirilir. Ülserasyon veya spontan kanama tablosu eklenseydi skor 4 (şiddetli inflamasyon) seviyesine çıkardı.

**Soru 2 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

---

### ÇİFT 81 (Benzerlik: 0.79)

**Soru 1 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

**Soru 2 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

---

### ÇİFT 82 (Benzerlik: 0.79)

**Soru 1 (ID: 454d966f-4132-4da1-bb98-4eaa814c19ef)**
Soru Kökü: Kırk beş yaşında erkek hasta alt ön bölgesindeki diş taşlarından rahatsızlık duymaktadır. Klinik muayenede WHO zondunun siyah bandı tamamen görünürken, supragingival ve subgingival alanlarda yoğun diş taşı birikimi tespit edilmiştir. Bu sekstant için CPITN kodu dikkate alındığında endike olan tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (D): Oral hijyen eğitimi ve kök yüzeyi düzleştirme
Açıklama: CPITN Kod 2; cep derinliğinin 3.5 mm'yi geçmediği ancak supra/subgingival diş taşının veya taşkın restorasyon marjinlerinin bulunduğu durumu ifade eder. Bu durumda tedavi protokolü oral hijyen eğitimi (OHE) ile birlikte diş taşı temizliği ve kök yüzeyi düzleştirilmesidir (SCRP). Cep derinliği patolojik sınırlara (4-5 mm) ulaşmadığı için Kod 3 tedavisi olan modifiye yaklaşımlara geçilmez.

**Soru 2 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

---

### ÇİFT 83 (Benzerlik: 0.79)

**Soru 1 (ID: 15440e34-2e67-4e7a-8624-2caa4b9882a1)**
Soru Kökü: Modifiye Gingival İndekse (MGI) göre, papiller ve marjinal bölgeler dahil olmak üzere tüm dişeti ünitesini kaplayan ancak görsel olarak şiddetli düzeyde olmayan hafif bir inflamasyon tablosu aşağıdaki skorlardan hangisiyle ifade edilir?
Doğru Şık (D): 2
Açıklama: Tüm dişeti ünitesini kaplayan ancak klinik karakter olarak hala 'hafif' kategorisinde değerlendirilen inflamasyon Modifiye Gingival İndekste skor 2'dir. Skor 1 ile arasındaki temel fark lezyonun şiddeti değil, ünitedeki yaygınlığıdır (kapsama alanıdır).

**Soru 2 (ID: 4bdb9bbf-c34d-43d9-8014-7162fa36747d)**
Soru Kökü: Löe ve Silness tarafından geliştirilen Gingival İndeks'te (GI), sondalamada kanama görülmediği halde renkte hafif değişiklik ve hafif ödemin izlendiği başlangıç aşamasındaki dişeti enflamasyonu hangi skor ile değerlendirilir?
Doğru Şık (B): Skor 1
Açıklama: Gingival İndeks'te Skor 1, renkte hafif değişiklik ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif enflamasyonu ifade eder. Skor 2'de orta enflamasyon ve sondalamada kanama başlar, Skor 3'te ise ülserasyon ve spontan kanama görülür.

---

### ÇİFT 84 (Benzerlik: 0.79)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

---

### ÇİFT 85 (Benzerlik: 0.79)

**Soru 1 (ID: 3792084a-ad0d-4c2a-aded-547664abadc0)**
Soru Kökü: 45 yaşında erkek hasta kliniğe yaygın diş hassasiyeti şikayetiyle başvurmuştur. Yapılan anamnez ve klinik muayenede hastanın bruksizm alışkanlığı olduğu ve dişlerin okluzal yüzeylerinde, mineyi aşıp dentine ulaşan yaygın aşınmalar bulunduğu saptanmıştır. Bu hastadaki madde kaybı tablosunun primer tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin birbirleriyle fonksiyonel veya parafonksiyonel (bruksizm gibi) kontağı sonucu okluzal ve insizal yüzeylerde oluşan patolojik veya fizyolojik aşınmadır. Abrazyon mekanik dış faktörlere, erozyon ise asitli içecekler gibi kimyasal ajanlara bağlı madde kaybıdır. Bruksizm hikayesi ve okluzal lokalizasyon atrizyon tanısını kesinleştirir.

**Soru 2 (ID: bd1ce7e1-d7ae-4d36-8110-10613a9356b8)**
Soru Kökü: Otuz beş yaşında erkek hastanın muayenesinde anterior dişlerin insizal kenarlarının tamamen düzleştiği, mine tabakasının aşınıp dentin adacıklarının açığa çıktığı ve posterior dişlerin tüberküllerinin silindiği görülmüştür. Hasta sabahları uyandığında çene kaslarında yorgunluk hissettiğini belirtmektedir. Bu tablonun gelişimine neden olan ve karşıt dişlerin fonksiyonel/parafonksiyonel kontağı sonucu meydana gelen mekanik madde kaybı aşağıdakilerden hangisidir?
Doğru Şık (A): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin okluzal veya insizal yüzeylerinin birbiriyle doğrudan teması (çiğneme veya bruksizm gibi parafonksiyonlar) sonucunda meydana gelen fizyolojik veya patolojik mekanik aşınmadır. Hasta kas yorgunluğu tarif ederek bruksizmi doğrulamaktadır. Abrazyon fırça gibi dış maddelerle, erozyon ise asitle olur.

---

### ÇİFT 86 (Benzerlik: 0.79)

**Soru 1 (ID: 8e56c68e-a6b7-436d-866d-8504872a5965)**
Soru Kökü: Altmış yaşındaki diyabetik kadın hasta şiddetli diş eti kanaması ve ön dişlerinde sallanma şikayetiyle başvurmuştur. Muayenede 24 numaralı dişte okluzal travma ve periodontal apse bulgusu olmaksızın, vertikal yönde de çökme hareketi gösteren 3. derece mobilite izlenmiştir. Standardize klinik kriterlere göre bu diş için en olası periodontal prognoz aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz
Açıklama: Periodontal ligamentte mobiliteyi geçici olarak artıran akut inflamasyon (apse vb.) veya okluzal travma yokluğunda ortaya çıkan ve dişin apiko-koronal yönde (vertikal) de hareket etmesini kapsayan 3. derece mobilite, destek kemiğin hemen tamamen kaybedildiğini gösterir. Bu dişte sağlık ve fonksiyonu devam ettirmeye yetecek ataşman kalmadığı için prognoz kesin olarak 'Umutsuz (Hopeless)' kabul edilir ve çekim endikasyonu doğar.

**Soru 2 (ID: b107b9da-42f4-41db-b42a-df162b1af347)**
Soru Kökü: Altmış iki yaşındaki erkek hasta, dişlerinde şiddetli sallanma şikayetiyle başvurmuştur. Muayenede 16 numaralı dişte kemik desteğinin tamamen yok olduğu, Sınıf III furkasyon tutulumu ve dikey mobilitenin bulunduğu saptanmıştır. Kalan periodontal doku fonksiyon ve yaşam kalitesini idame ettiremeyecek durumdadır. Bu dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz (Hopeless)
Açıklama: Sağlık, fonksiyon ve yaşam kalitesini devam ettirmeye yetecek minimal periodontal ataşmanın dahi bulunmadığı şiddetli yıkım durumları 'Umutsuz (Hopeless)' olarak sınıflandırılır ve bu dişler genellikle doğrudan çekim endikasyonuna sahiptir. Şüpheli prognozda ise %50'den fazla kayıp olmasına rağmen spesifik tedavilerle dişin ağızda tutulma olasılığı halen değerlendirilir.

---

### ÇİFT 87 (Benzerlik: 0.78)

**Soru 1 (ID: 7d01595c-cf10-4781-b1e0-0c23a8777df9)**
Soru Kökü: Fonksiyonel okluzal kuvvetlere maruz kaldığında dişlerde ortaya çıkan gözle görülmez ancak parmak ucuyla hissedilebilir titreşimsel hareketliliği tespit etmek amacıyla, işaret parmağının maksiller dişlerin bukkal yüzeylerine yaslandığı ve hastadan maksimum interküspal pozisyonda çenelerini vurması (tapping) istenen klinik muayene yöntemi aşağıdakilerden hangisidir?
Doğru Şık (D): Fremitus muayenesi
Açıklama: Fremitus, dişlerin fonksiyonel okluzal temas (veya tapping) esnasında yaptığı mikro titreşim ve hareketliliğin dişin bukkal yüzeyine konan işaret parmağı ile hissedilmesidir. Alet saplarıyla bakılan standart mobilite muayenesinden farklı olarak fremitus, statik değil dinamik fonksiyon (kapanış hareketi) sırasındaki travmatik veya erken temasları gösterir.

**Soru 2 (ID: dc20ae9a-162f-4c4d-a445-755f2974989e)**
Soru Kökü: Klinik periodontal muayene sırasında hekim, işaret parmağını maksiller dişlerin bukkal yüzeylerine yaslamış; ardından hastadan dişlerini maksimum interküspal pozisyonda kapatıp açmasını ve lateral ile protrusiv temas hareketleri yapmasını istemiştir. Bu dinamik muayene yöntemi ile değerlendirilen bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Fremitus
Açıklama: Fremitus, fonksiyonel okluzal kuvvetlere maruz kaldıklarında dişlerde ortaya çıkan ve parmakla palpe edilebilen hareketliliktir. Aletlerle ölçülen statik diş mobilitesinden farklı olarak, doğrudan okluzal fonksiyon sırasındaki dinamik doku cevabını ve prematür temasların yaratabileceği travmatik yükleri hissetmek için uygulanır.

---

### ÇİFT 88 (Benzerlik: 0.78)

**Soru 1 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

**Soru 2 (ID: cb732f6f-4bd4-4f85-9bc3-167a9f5eec92)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) tarafından CPITN temel alınarak modifiye edilen Periodontal Screening and Recording (PSR) indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sondalamada kanamayı klinik değerlendirme dışında tutar.
Açıklama: PSR (Periodontal Screening and Recording) indeksi, CPITN'in temel prensiplerini taşır ve dişetinin şimdiki inflamasyon durumunu, yani kanamayı (BOP) ve diş taşını kesinlikle içerir ve değerlendirir. Kanama gibi inflamatuar parametrelerin varlığı, skorlamayı ve dolayısıyla uzman sevkiyat gereksinimini doğrudan etkiler.

---

### ÇİFT 89 (Benzerlik: 0.78)

**Soru 1 (ID: b6912b5e-c5a5-44e0-93bf-940f8934098d)**
Soru Kökü: Şiddetli kronik periodontitis teşhisi ile kliniğe başvuran 55 yaşındaki kadın hastanın muayenesinde zayıf kök formları ve kontrolsüz diyabet tespit edilmiştir. Hekim bu verileri kullanarak dişlerin önümüzdeki 5 yıl içindeki yaşam döngüsünü öngörmeye çalışmaktadır. Hekimin uyguladığı bu bilişsel süreç aşağıdakilerden hangisidir?
Doğru Şık (D): Prognostik tayin
Açıklama: Hastalığın gidişatını ve nihai sonucunu (diş kaybı vb.) tahmin etmeye yönelik yapılan bu öngörü işlemine prognostik tayin denir. Hastada zaten hastalık var olduğu için yapılan işlem risk tayini değil, doğrudan prognoz değerlendirmesidir. Kontrolsüz diyabet ve zayıf kök formu burada prognostik faktörler olarak kullanılmıştır.

**Soru 2 (ID: c22b3008-c1c5-4eaf-a5ea-fddf33bd02b6)**
Soru Kökü: Kapsamlı bir Faz-I periodontal tedavi ve cerrahi operasyon geçiren 55 yaşındaki hastaya, tedavi bitiminde hastalığının gelecekteki olası gidişatı ve dişlerinin ağızda kalma süresi hakkında bilimsel verilere dayalı bir öngörüde bulunulmuştur. Hekimin yaptığı bu tahmin işlemi aşağıdakilerden hangisidir?
Doğru Şık (A): Prognoz
Açıklama: Hastalığın sonucunun veya gidişatının tahmin edilmesine 'prognoz' adı verilir. Risk tayininden en büyük farkı, prognozun zaten oluşmuş ve teşhis edilmiş bir hastalığın seyrini konu almasıdır. Tedavi sonrası başarı şansı ve dişin fonksiyonel ömrü prognozun temel bileşenleridir.

---

### ÇİFT 90 (Benzerlik: 0.78)

**Soru 1 (ID: 4bdb9bbf-c34d-43d9-8014-7162fa36747d)**
Soru Kökü: Löe ve Silness tarafından geliştirilen Gingival İndeks'te (GI), sondalamada kanama görülmediği halde renkte hafif değişiklik ve hafif ödemin izlendiği başlangıç aşamasındaki dişeti enflamasyonu hangi skor ile değerlendirilir?
Doğru Şık (B): Skor 1
Açıklama: Gingival İndeks'te Skor 1, renkte hafif değişiklik ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif enflamasyonu ifade eder. Skor 2'de orta enflamasyon ve sondalamada kanama başlar, Skor 3'te ise ülserasyon ve spontan kanama görülür.

**Soru 2 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

---

### ÇİFT 91 (Benzerlik: 0.78)

**Soru 1 (ID: 454d966f-4132-4da1-bb98-4eaa814c19ef)**
Soru Kökü: Kırk beş yaşında erkek hasta alt ön bölgesindeki diş taşlarından rahatsızlık duymaktadır. Klinik muayenede WHO zondunun siyah bandı tamamen görünürken, supragingival ve subgingival alanlarda yoğun diş taşı birikimi tespit edilmiştir. Bu sekstant için CPITN kodu dikkate alındığında endike olan tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (D): Oral hijyen eğitimi ve kök yüzeyi düzleştirme
Açıklama: CPITN Kod 2; cep derinliğinin 3.5 mm'yi geçmediği ancak supra/subgingival diş taşının veya taşkın restorasyon marjinlerinin bulunduğu durumu ifade eder. Bu durumda tedavi protokolü oral hijyen eğitimi (OHE) ile birlikte diş taşı temizliği ve kök yüzeyi düzleştirilmesidir (SCRP). Cep derinliği patolojik sınırlara (4-5 mm) ulaşmadığı için Kod 3 tedavisi olan modifiye yaklaşımlara geçilmez.

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 92 (Benzerlik: 0.78)

**Soru 1 (ID: 719250ff-4df2-47d4-bb54-b2fde7fed218)**
Soru Kökü: 40 yaşında kronik periodontitis hastasının aktif periodontal ceplerinden alınan örneklerde, kırmızı kompleks bakterilerin ortak olarak ürettiği tripsin benzeri enzimin aktivitesi ölçülecektir. N-benzoyl-di-arginine-2-naphtylamide (BANA) substratının hidrolizi ile renk değişikliği sağlayan ve hastalık aktivitesini gösteren enzimatik diagnostik kit aşağıdakilerden hangisidir?
Doğru Şık (B): Perioscan
Açıklama: Perioscan, hedef mikroorganizmaların (T. denticola, P. gingivalis, T. forsythia) ortak bir tripsin benzeri enzim salgılamasına dayanan ve BANA substrat kartını kullanarak klinikte hızlı sonuç veren enzimatik bir teşhis kitidir. Periocheck ise nötrofil elastaz aktivitesini ölçer; Evalusite ise bir immünodiagnostik membran testidir.

**Soru 2 (ID: 974929fc-3aec-4fe3-a0a6-5bcd2efc112d)**
Soru Kökü: BANA (N-benzoyl-di-arginine-2-naphtylamide) testinin pozitif sonuç verdiği ve tripsin benzeri enzim profiline sahip olan periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (B): Treponema denticola
Açıklama: Treponema denticola, Porphyromonas gingivalis ve Tannerella forsythia patojenleri tripsin benzeri ortak bir enzimatik profili paylaşırlar. Bu enzimin aktivitesi, klinik diagnostik kitlerde BANA substratının hidrolizi ile tespit edilir. A. actinomycetemcomitans veya F. nucleatum gibi bakteriler bu spesifik enzime sahip olmadıkları için testte negatif sonuç verirler.

---

### ÇİFT 93 (Benzerlik: 0.78)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: fb07eea4-e47b-4902-86dd-ee313fb4b747)**
Soru Kökü: Bir dişin periodontal prognozu değerlendirilirken hastanın genel sistemi, lokal kemik kayıpları ve anatomik defektler dikkate alınır. Aşağıdaki klinik bulgulardan hangisi, ilgili dişin prognozunun 'Kötü' (Poor) veya 'Şüpheli' sınıfından çıkarılarak daha olumlu bir evre olan 'İyi' (Fair) prognoz kategorisinde değerlendirilmesini sağlar?
Doğru Şık (C): Ataşman kaybının sadece %25 civarında olması ve furkasyondaki girişin alet erişimini engellemeyen Sınıf I düzeyinde kalması
Açıklama: 'İyi (Fair) prognoz' kategorisi, kemik ve ataşman kaybının henüz erken evrelerde (%25 civarı) kaldığı, temizlik veya cerrahi alet erişiminin (Sınıf I furka) hekim ve hasta tarafından kolayca sağlandığı dişler için kullanılır. Ataşman kaybının %50'yi bulması, kısa konik kökler ve tedavi erişimini kısıtlayan Sınıf II furka defektleri prognozu doğrudan 'Kötü (Poor)' düzeyine indirir.

---

### ÇİFT 94 (Benzerlik: 0.78)

**Soru 1 (ID: 474b4ed3-e4a1-420b-91da-444ee46e70aa)**
Soru Kökü: Periodontal yıkımın ileri evresinde olan 50 yaşındaki hastanın alt birinci molar dişinde vertikal yönde (apikal çökme) mobilite izlenmiş ve diş kendi ekseni etrafında rahatlıkla döndürülebilmiştir. Bu klinik senaryoda Miller Mobilite İndeksi'ne göre dişe verilmesi gereken skor kaçtır?
Doğru Şık (A): Skor 3
Açıklama: Miller İndeksi'nde Skor 3, dişin dikey yönde (apikale doğru çökme) veya kendi ekseni etrafında rotasyonel hareket yapabildiği en ileri patolojik mobilite safhasını ifade eder. Yatay hareketlerin 2 mm'yi aştığı durumlar da Skor 3'e dahildir. İndekste Skor 4 bulunmamaktadır.

**Soru 2 (ID: e45e061f-f975-43a9-8c61-7879ba71ba90)**
Soru Kökü: Klinik muayene sırasında diş mobilitesi periodontal teşhisin önemli bir parçasıdır. Miller Mobilite İndeksine göre, parmak basıncıyla uygulanan horizontal kuvvete karşı 1 ila 2 mm arasında diş hareketi saptanması durumunda kaydedilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (B): Skor 2
Açıklama: Miller İndeksi 0-3 arası skorlanır; Skor 1: 1 mm'den az horizontal hareket, Skor 2: 1-2 mm arası horizontal hareket, Skor 3: 2 mm'yi aşan dikey yönde (aksiyel) çökmeyi de içeren şiddetli mobiliteyi tanımlar. Bu derecelendirme patolojik sekonder mobilitenin şiddetini belirleyerek splintleme veya okluzal aşındırma ihtiyacını yönlendirir.

---

### ÇİFT 95 (Benzerlik: 0.78)

**Soru 1 (ID: 1a41327c-e89d-4c5b-8717-ae72c1b34f44)**
Soru Kökü: Elli yaşında kadın hasta idame tedavisi (maintenance) kapsamındaki kontrol randevusuna geliyor. Daha önce kronik periodontitis tedavisi görmüş olan hastanın klinik muayenesinde 16 numaralı dişin palatinal bölgesinde sondalamada kanama (BOP) pozitif olarak kaydediliyor. İdame safhasındaki bu hastada tespit edilen BOP pozitifliği klinisyen için öncelikli olarak neyin göstergesidir?
Doğru Şık (A): Artmış ataçman kaybı için önemli bir risk prediktörü (tahmin edicisi) olduğunun
Açıklama: Sondalamada kanama (BOP) yokluğu periodontal sağlığın mükemmel bir indikatörüdür. Ancak tedavisi yapılmış ve idame safhasında olan bir hastada BOP pozitifliği devam ediyorsa veya yeniden ortaya çıktıysa, bu durum o bölgede artmış ataşman kaybı yaşanabileceği için güçlü bir 'geleceğe ilişkin risk işareti (prediktör)' kabul edilir. Bu, enflamasyonun kalıcı olduğunu gösterir.

**Soru 2 (ID: 76e5009e-60fb-495d-88f3-bd65a84428f9)**
Soru Kökü: Otuz iki yaşında kadın hasta rutin kontrol randevusuna geliyor. Daha önce her iki çenede de generalize kronik periodontitis nedeniyle tedavi görmüş. Hastanın önceki kayıtlarında kemik ve ataşman kayıpları açıkça izleniyor. Şu anki klinik muayenesinde cep derinlikleri 3-4 mm civarında olup, 4 ayrı bölgede sondalamada kanama (BOP) pozitif bulunuyor. Gelecekteki ataşman kaybı riskini tahmin etmede, bu hastanın taşıdığı en güçlü klinik risk işaretleri (risk prediktörleri) aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Daha önce geçirilmiş periodontal hastalık hikayesi ve BOP pozitifliği
Açıklama: Geçirilmiş bir periodontal hastalık öyküsü, gelecekteki hastalık riski için klinik olarak en iyi 'tahmini risk işaretidir (predictor)'. Ayrıca sondalamada kanama da inflamasyonun varlığını gösterir ve özellikle idame hastalarında cep ile beraber bulunduğunda ataşman kaybının mükemmel bir belirleyicisidir.

---

### ÇİFT 96 (Benzerlik: 0.78)

**Soru 1 (ID: 37f01011-c16c-4d78-ab16-ce89f35f8510)**
Soru Kökü: Doğal dişlerde mobilitenin derecesini ve dental implantlarda osseointegrasyonun kalitesini objektif olarak değerlendirmek için kullanılan mekanik direnç ölçüm aygıtı aşağıdakilerden hangisidir?
Doğru Şık (A): PerioTest
Açıklama: PerioTest, dişe veya implanta saniyede dört kez küçük bir çubukla vurarak dokunun gösterdiği mekanik sönümleme (damping) direncini elektronik olarak ölçer ve mobiliteyi standartlaştırır. CADIA dijital radyografilerde kemik yoğunluğu analizinde kullanılırken, OraTest mikrobiyal seviyeyi belirler. PerioTest'in hem doğal diş hem de implantta kullanılması temel ayırıcı özelliğidir.

**Soru 2 (ID: eb04d3d8-0bbc-44fb-be67-0b90a3b51275)**
Soru Kökü: Elli beş yaşında kadın hasta alt molar bölgesine yerleştirilen dental implantların stabilitesini kontrol ettirmek üzere gelmiştir. İmplantların osseointegrasyon derecesini ve çevre kemiğin fonksiyonel uyumunu non-invaziv olarak değerlendirmede klinisyenin kullanması gereken araç aşağıdakilerden hangisidir?
Doğru Şık (C): PerioTest
Açıklama: PerioTest cihazı, hem doğal dişlerin patolojik mobilitesini saptamada hem de dental implantların osseointegrasyon derecesini mikrodinamik perküsyonla ölçmede standarttır. Ultrason kemik morfolojisi içindir ancak dinamik stabilite ölçmez. Osseointegrasyonun klinik skorlaması PerioTest ile objektifleştirilir.

---

### ÇİFT 97 (Benzerlik: 0.78)

**Soru 1 (ID: 87f9c191-03c6-493f-8a5f-def3df12d9cc)**
Soru Kökü: İnflame periodontal dokulardaki çeşitli konak hücreleri tarafından üretilen sitokinler (IL-1, IL-6, TNF-a), metalloproteinaz stimülasyonu yaparak kemik rezorpsiyon kaskadını başlatırlar. Periodontal yıkımın aktif fazlarında dişeti oluğu sıvısında (DOS) konsantrasyonu belirgin şekilde artan ve konak dokularında kemik rezorpsiyonunu doğrudan ve en güçlü şekilde indükleyen ana lipid mediatör aşağıdakilerden hangisidir?
Doğru Şık (C): Prostaglandin E2 (PGE2)
Açıklama: Prostaglandin E2 (PGE2), araşidonik asit metabolizmasından köken alan, inflamasyonun potent bir lipit mediatörü olup doğrudan kemik rezorpsiyonunu indükleyen ve DOS'ta aktif periodontal yıkımla korele olarak ciddi artış gösteren ajandır. IL-1, IL-6 ve TNF-alfa sitokinleri bu sürece katkıda bulunsalar da, osteoklastik kemik rezorpsiyonunun doku bazındaki asıl kimyasal tetikleyicisi PGE2'dir. Diğer seçeneklerdeki moleküller inflamasyon mediatörü değil, yıkım ürünleri veya enzimlerdir.

**Soru 2 (ID: afc71ce0-9962-428e-9b5e-6fbb1cfe8ad1)**
Soru Kökü: Aşağıdakilerden hangisi dişeti oluğu sıvısında saptanan, enflamasyonun patent bir mediatörü olarak doğrudan kemik rezorpsiyonunu indükleyen ve tedavi edilmemiş aktif yıkım vakalarında seviyesi artan moleküldür?
Doğru Şık (B): Prostaglandin E2
Açıklama: Prostaglandin E2, inflame bölgelerde artan, kemik rezorpsiyonunu şiddetle indükleyen ve konsantrasyonu aktif yıkım safhasında pik yapan spesifik bir inflamasyon mediatörüdür. Hidroksiprolin ve glikozaminoglikanlar mediatör değil yıkım ürünüdür; ALP ve katepsin ise enzimdir.

---

### ÇİFT 98 (Benzerlik: 0.78)

**Soru 1 (ID: 20d30a64-4478-4dbb-9a7d-3753fca0ec65)**
Soru Kökü: Hastaların periodontal tedavi idamesi sırasında ağız kokusu şikayetinin objektif skorlamasını yaparak tedavinin başarısını kanıtlamak isteyen bir hekimin kullanacağı cihaz aşağıdakilerden hangisidir?
Doğru Şık (A): Halimeter
Açıklama: Halimeter, oral kavitedeki sülfür bileşiklerini ölçerek halitosis'i (ağız kokusu) kantitatif olarak test eden bir cihazdır. Ora test oral mikrobiyal seviyeyi ölçerken, Halimeter doğrudan malodor bileşenlerine odaklanır. Bu araç kokunun ağız içi kaynaklı şiddetini objektif şekilde kaydeder.

**Soru 2 (ID: 8e0ed245-f136-4a97-ab7f-c8002ad5ee5d)**
Soru Kökü: Oral malodor teşhisinde uçucu sülfür bileşiklerini (VSC) kantitatif olarak ölçerek halitozis değerlendirmesi yapan cihaz aşağıdakilerden hangisidir?
Doğru Şık (B): Halimeter
Açıklama: Halimeter (Interscan), nefes yoluyla atılan hidrojen sülfür ve metil merkaptan gibi uçucu sülfür bileşiklerini ölçerek halitozis teşhisinde objektif veri sağlayan standart cihazdır. BANA test subgingival bakterilerin tripsin benzeri enzim aktivitesini ölçerken, Flow Sitometri sıvı süspansiyonundaki hücreleri flüoresan işaretleyicilerle analiz eder. Cihazın spesifik hedefi gaz ölçümüdür.

---

### ÇİFT 99 (Benzerlik: 0.77)

**Soru 1 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

**Soru 2 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

---

### ÇİFT 100 (Benzerlik: 0.77)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: b107b9da-42f4-41db-b42a-df162b1af347)**
Soru Kökü: Altmış iki yaşındaki erkek hasta, dişlerinde şiddetli sallanma şikayetiyle başvurmuştur. Muayenede 16 numaralı dişte kemik desteğinin tamamen yok olduğu, Sınıf III furkasyon tutulumu ve dikey mobilitenin bulunduğu saptanmıştır. Kalan periodontal doku fonksiyon ve yaşam kalitesini idame ettiremeyecek durumdadır. Bu dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz (Hopeless)
Açıklama: Sağlık, fonksiyon ve yaşam kalitesini devam ettirmeye yetecek minimal periodontal ataşmanın dahi bulunmadığı şiddetli yıkım durumları 'Umutsuz (Hopeless)' olarak sınıflandırılır ve bu dişler genellikle doğrudan çekim endikasyonuna sahiptir. Şüpheli prognozda ise %50'den fazla kayıp olmasına rağmen spesifik tedavilerle dişin ağızda tutulma olasılığı halen değerlendirilir.

---

### ÇİFT 101 (Benzerlik: 0.77)

**Soru 1 (ID: 454d966f-4132-4da1-bb98-4eaa814c19ef)**
Soru Kökü: Kırk beş yaşında erkek hasta alt ön bölgesindeki diş taşlarından rahatsızlık duymaktadır. Klinik muayenede WHO zondunun siyah bandı tamamen görünürken, supragingival ve subgingival alanlarda yoğun diş taşı birikimi tespit edilmiştir. Bu sekstant için CPITN kodu dikkate alındığında endike olan tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (D): Oral hijyen eğitimi ve kök yüzeyi düzleştirme
Açıklama: CPITN Kod 2; cep derinliğinin 3.5 mm'yi geçmediği ancak supra/subgingival diş taşının veya taşkın restorasyon marjinlerinin bulunduğu durumu ifade eder. Bu durumda tedavi protokolü oral hijyen eğitimi (OHE) ile birlikte diş taşı temizliği ve kök yüzeyi düzleştirilmesidir (SCRP). Cep derinliği patolojik sınırlara (4-5 mm) ulaşmadığı için Kod 3 tedavisi olan modifiye yaklaşımlara geçilmez.

**Soru 2 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

---

### ÇİFT 102 (Benzerlik: 0.77)

**Soru 1 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

**Soru 2 (ID: cb732f6f-4bd4-4f85-9bc3-167a9f5eec92)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) tarafından CPITN temel alınarak modifiye edilen Periodontal Screening and Recording (PSR) indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sondalamada kanamayı klinik değerlendirme dışında tutar.
Açıklama: PSR (Periodontal Screening and Recording) indeksi, CPITN'in temel prensiplerini taşır ve dişetinin şimdiki inflamasyon durumunu, yani kanamayı (BOP) ve diş taşını kesinlikle içerir ve değerlendirir. Kanama gibi inflamatuar parametrelerin varlığı, skorlamayı ve dolayısıyla uzman sevkiyat gereksinimini doğrudan etkiler.

---

### ÇİFT 103 (Benzerlik: 0.77)

**Soru 1 (ID: 16260972-6a94-4d1d-8df7-fed48670082f)**
Soru Kökü: 48 yaşında erkek hasta generalize şiddetli kronik periodontitis şikayetiyle başvuruyor. Dişeti oluğu sıvısından (DOS) alınan örnekte nekrotik hücrelerden salınan, kalp (miyokard enfarktüsü) ve karaciğer (hepatit) kaynaklı yıkımlarda da artan, şiddetli gingival inflamasyon ve yakın geçmişteki periodontal ataşman kaybıyla pozitif ilişkili olan konak enzimi aşağıdakilerden hangisidir?
Doğru Şık (D): Aspartat aminotransferaz (AST)
Açıklama: Aspartat aminotransferaz (AST), hücre ölümü (nekroz) sırasında sitoplazmadan ekstrasellüler ortama salınan ve aktif periodontal doku yıkımının önemli bir belirteci olan enzimdir. B-glukuronidaz ve elastaz nötrofil granüllerinden kaynaklanırken, MMP'ler bağ dokusu matriksini spesifik olarak yıkan proteolitik enzimlerdir. AST'nin sistemik karşılıkları MI ve hepatit tablolarında da aynı hücre ölüm mekanizmasıyla kana karışmasıdır.

**Soru 2 (ID: 51799210-3b4e-4626-a2b4-ef0ff20a5652)**
Soru Kökü: Altmış iki yaşında erkek hasta, 6 ay önce geçirdiği miyokard enfarktüsü sonrası kliniğe başvurmuştur. Yapılan incelemede dişeti oluğu sıvısında belirli bir enzimin belirgin şekilde arttığı ve bu enzimin yakın geçmişte oluşmuş ataşman kaybı ile korele olduğu saptanmıştır. Hasta başı 'Periodgard' kiti ile de tespiti yapılabilen bu marker aşağıdakilerden hangisidir?
Doğru Şık (B): Aspartat aminotransferaz
Açıklama: Aspartat aminotransferaz (AST), miyokard ve karaciğer gibi dokulardaki ölü hücrelerden salınan bir enzim olup dişeti oluğu sıvısında hızlı ataşman kaybının belirtecidir. Elastaz da bir yıkım markeri olmasına rağmen kaynağı nötrofil granülleridir ve hasta başı 'Periocheck' kiti ile ölçülür. Bu enzimin ölü doku hücresi kaynaklı olması ve Periodgard sistemiyle entegrasyonu spesifik teşhis kriteridir.

---

### ÇİFT 104 (Benzerlik: 0.77)

**Soru 1 (ID: 39b0810b-ff47-4106-ae41-b7cd6d5130e7)**
Soru Kökü: Lobene ve arkadaşları tarafından geliştirilen Modifiye Gingival İndeks (MGI) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Her dişte sadece vestibül ve lingual orta marjinal yüzeyler değerlendirmeye alınır.
Açıklama: Modifiye Gingival İndekste her dişte sadece vestibül/lingual marjinler değil; iki dişeti kenarı (fasiyal/lingual marjinal) ve iki papiller bölge olmak üzere toplam 4 ünite değerlendirilir. Bu indeksin alametifarikası sondalama yapmayarak mekanik irritasyonu ekarte etmesi ve hafif inflamasyonu çok daha hassas şekilde skorlamasıdır.

**Soru 2 (ID: fce88a78-311c-4f83-9eaa-a6bcf66f0af3)**
Soru Kökü: Sondalamanın cebi ve plağı irrite edeceği düşünülerek geliştirilen ve değerlendirme sırasında dişeti cebine sond yerleştirilmeden sadece görsel kriterlerle uygulanan 'Modifiye Gingival İndeks' ile ilgili aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (E): Fiziksel stimulasyon sonrası ilk 10 saniye içinde ortaya çıkan kanamanın kaydedilmesi
Açıklama: Modifiye Gingival İndeks'in temel özelliği, standart Gingival İndeks'in aksine SONDALAMA VEYA STİMÜLASYON YAPILMADAN uygulanmasıdır. Kanamanın indeks dışı tutulmasıyla hafif ve orta iltihap yeniden görsel olarak tanımlanmıştır. 10 saniye içinde kanama ölçümü BOP veya spesifik kanama zamanı indekslerinin (GBI, GBTI) özelliğidir.

---

### ÇİFT 105 (Benzerlik: 0.77)

**Soru 1 (ID: dc19c943-c319-4405-b232-735cd80aa987)**
Soru Kökü: Aşağıdakilerden hangisi Periodontal Tarama ve Kayıt (PSR) indeksinin, öncülü olan CPITN indeksine göre sunduğu temel klinik üstünlüklerinden biri olarak kabul edilir?
Doğru Şık (A): Klinisyene hastanın ataşman kaybı durumu hakkında da bilgi verebilmesi
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermez, yalnızca tedavi ihtiyacını (diş taşı, kanama, cep) gösterir. PSR ise CPITN'in modifiye edilmiş halidir ve kompleks formu karmaşıklaştırmadan periodontitisin erken tanısına yardımcı olurken, aynı zamanda cep derinliğindeki olası değişimleri ve ATAŞMAN KAYBINI gösterebilmesiyle ayrılır.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 106 (Benzerlik: 0.77)

**Soru 1 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

**Soru 2 (ID: 89e8aa50-28b0-4b0b-b62d-8ea26e4141b1)**
Soru Kökü: 42 yaşında erkek hasta alt anterior bölgesindeki dişetlerinde rahatsızlık hissiyle geliyor. CPITN sondu ile yapılan muayenede patolojik cep derinliği saptanmamış (siyah bant görünür halde), ancak subgingival bölgelerde yoğun diş taşı tespit edilmiştir. İlgili sekstantın CPITN skoru ve uygulanması gereken minimum tedavi prosedürü aşağıdakilerden hangisidir?
Doğru Şık (B): Kod 2 / Oral hijyen eğitimi ve diş taşı temizliği
Açıklama: CPITN Kod 2, kanama olsun veya olmasın supragingival/subgingival diş taşının varlığı ile karakterizedir. Patolojik cep oluşumu henüz yoktur. Bu sekstant için tedavi protokolü kişisel oral hijyen eğitimine (OHE) ek olarak diş taşı temizliğinin (SCRP - scaling and root planing) uygulanmasıdır.

---

### ÇİFT 107 (Benzerlik: 0.77)

**Soru 1 (ID: 7a918509-dc0e-44c1-8726-e71919bf0be2)**
Soru Kökü: 45 yaşında erkek hasta, derin periodontal cepler ve şiddetli periodontal yıkım nedeniyle başvurmuştur. Laboratuvarda B. forsythus, P. gingivalis ve T. denticola'nın ortak enzim profilini hedefleyen Perioscan test kiti uygulanıyor. Bu enzimatik diagnostik test, aşağıdaki substratlardan hangisinin hidrolizini ölçmektedir?
Doğru Şık (E): Tripsin benzeri enzim substratı (BANA)
Açıklama: Kırmızı kompleks bakterilerinin (B. forsythus, P. gingivalis, T. denticola) ortak patojenik özelliği, tripsin benzeri bir enzim üretmeleridir. BANA testi, bu tripsin benzeri enzimin N-benzoyl-di-arginine-2-naphtylamide (BANA) substratını hidrolize etmesi mekanizmasına dayanır. Diğer enzimler (AST, Elastaz, Beta-glukuronidaz) konak hücre veya nötrofil kaynaklı yıkım markerlarıdır.

**Soru 2 (ID: dbda7bab-4c36-44f6-91ca-eb63c749658a)**
Soru Kökü: Subgingival plaktaki bakterilerin tanımlanması için kullanılan enzimatik kitler, belirli patojenlerin ortak profillerine dayanır. BANA testi olarak bilinen enzimatik teşhis yönteminde, T. forsythia, P. gingivalis ve T. denticola bakterilerinin aktivitesi hangi enzim üzerinden tespit edilir?
Doğru Şık (C): Tripsin benzeri enzim
Açıklama: Kırmızı kompleks bakterileri (T. forsythia, P. gingivalis, T. denticola) ve Capnocytophaga türleri ortak bir tripsin benzeri enzim salgılar. BANA testi, bu tripsin benzeri enzimin sentetik bir substratı hidrolize etmesi mekanizmasına dayanır. Diğer enzimler konak kaynaklı yıkım markerlarıdır (AST, Elastaz, Glukuronidaz).

---

### ÇİFT 108 (Benzerlik: 0.77)

**Soru 1 (ID: 4bdb9bbf-c34d-43d9-8014-7162fa36747d)**
Soru Kökü: Löe ve Silness tarafından geliştirilen Gingival İndeks'te (GI), sondalamada kanama görülmediği halde renkte hafif değişiklik ve hafif ödemin izlendiği başlangıç aşamasındaki dişeti enflamasyonu hangi skor ile değerlendirilir?
Doğru Şık (B): Skor 1
Açıklama: Gingival İndeks'te Skor 1, renkte hafif değişiklik ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif enflamasyonu ifade eder. Skor 2'de orta enflamasyon ve sondalamada kanama başlar, Skor 3'te ise ülserasyon ve spontan kanama görülür.

**Soru 2 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

---

### ÇİFT 109 (Benzerlik: 0.77)

**Soru 1 (ID: 89e8aa50-28b0-4b0b-b62d-8ea26e4141b1)**
Soru Kökü: 42 yaşında erkek hasta alt anterior bölgesindeki dişetlerinde rahatsızlık hissiyle geliyor. CPITN sondu ile yapılan muayenede patolojik cep derinliği saptanmamış (siyah bant görünür halde), ancak subgingival bölgelerde yoğun diş taşı tespit edilmiştir. İlgili sekstantın CPITN skoru ve uygulanması gereken minimum tedavi prosedürü aşağıdakilerden hangisidir?
Doğru Şık (B): Kod 2 / Oral hijyen eğitimi ve diş taşı temizliği
Açıklama: CPITN Kod 2, kanama olsun veya olmasın supragingival/subgingival diş taşının varlığı ile karakterizedir. Patolojik cep oluşumu henüz yoktur. Bu sekstant için tedavi protokolü kişisel oral hijyen eğitimine (OHE) ek olarak diş taşı temizliğinin (SCRP - scaling and root planing) uygulanmasıdır.

**Soru 2 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

---

### ÇİFT 110 (Benzerlik: 0.77)

**Soru 1 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

**Soru 2 (ID: cb732f6f-4bd4-4f85-9bc3-167a9f5eec92)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) tarafından CPITN temel alınarak modifiye edilen Periodontal Screening and Recording (PSR) indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sondalamada kanamayı klinik değerlendirme dışında tutar.
Açıklama: PSR (Periodontal Screening and Recording) indeksi, CPITN'in temel prensiplerini taşır ve dişetinin şimdiki inflamasyon durumunu, yani kanamayı (BOP) ve diş taşını kesinlikle içerir ve değerlendirir. Kanama gibi inflamatuar parametrelerin varlığı, skorlamayı ve dolayısıyla uzman sevkiyat gereksinimini doğrudan etkiler.

---

### ÇİFT 111 (Benzerlik: 0.77)

**Soru 1 (ID: 1953deca-c919-47d2-9d2f-ad4f355e519a)**
Soru Kökü: 40 yaşında sağlıklı bir hastanın epidemiyolojik saha çalışması sırasında CPITN sondu ile periodontal değerlendirmesi yapılmıştır. Hekim sondun ucundaki renkli siyah bandın tamamen görünür olduğunu, sondalamada kanama gelişmediğini ve herhangi bir diş taşı saptanmadığını kaydetmiştir. Bu bulgulara göre hastanın CPITN skoru ve tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (C): Kod 0 / Tedavi gerekmez
Açıklama: CPITN Kod 0, herhangi bir hastalık belirtisinin (kanama, diş taşı, cep) bulunmadığı kusursuz sağlıklı dişeti durumunu yansıtır. Sondun siyah bandı dışarıdadır (cep <3.5 mm) ve kanama yoktur. Bu sekstant için herhangi bir tedavi gereksinimi atanmaz.

**Soru 2 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

---

### ÇİFT 112 (Benzerlik: 0.77)

**Soru 1 (ID: 54a104f8-21b2-4dbb-a28c-44dcdd89b99f)**
Soru Kökü: 19 yaşında kadın hasta, alt ön kesici dişlerinin dudak tarafındaki dişetlerinde şiddetli inflamasyon ve mekanik tahriş şikayetiyle kliniğe başvurmuştur. Muayenede hastanın maksiller kesici dişlerinin mandibular kesicileri okluzal yönde tamamen örttüğü saptanmıştır. Bu hastada alt anterior dişetinde oluşan lokal yıkımın temel mekanik okluzal nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Aşırı derin kapanış (Deep-bite)
Açıklama: Aşırı derin kapanışta, üst kesiciler alt kesicileri fazlasıyla örter ve alt kesici dişlerin insizal kenarları üst palatinal mukozaya veya üst kesicilerin palatinal yüzeyleri alt dişlerin labial dişetine doğrudan mekanik travma uygular. Bu sürekli okluzal travma, gıda sıkışması ve doğrudan doku ezilmesine yol açarak ilgili bölgede şiddetli inflamasyonla sonuçlanır.

**Soru 2 (ID: a07313d2-d285-4b8a-8437-d9c87518b575)**
Soru Kökü: 22 yaşında erkek hasta ön bölgede dişetlerinde kanama ve şişlik şikayetiyle başvurmuştur. Muayenede anterior bölgede plak ve diştaşı birikiminin yoğun olduğu, dişlerin üst üste kapanmadığı ve temasın bulunmadığı saptanmıştır. Hastada yiyeceklerin mekanik temizleme etkisinin ortadan kalkmasına bağlı gelişen bu yoğun plak retansiyonunun anatomik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Açık kapanış
Açıklama: Açık kapanışta (open bite), karşıt çenedeki dişler arasında temas olmaması sebebiyle besinlerin çiğneme sırasında yarattığı mekanik temizleme etkisi ortadan kalkar. Çapraz kapanışta okluzal travma, derin kapanışta ise alt dişlerin üst damak dişetine travması söz konusu iken; fonksiyon dışı kalmaya bağlı lokalize yoğun plak birikimi açık kapanışın tipik bulgusudur.

---

### ÇİFT 113 (Benzerlik: 0.77)

**Soru 1 (ID: 9d0c971c-99d1-43ec-8cdc-b11e6768ebbe)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) ve AAP tarafından desteklenen PSR (Periodontal Screening and Recording) indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): İndeksin temel zafiyeti, klinik ataşman kaybı hakkında hiçbir bilgi vermemesidir.
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermezken, onun modifiye versiyonu olan PSR indeksi ataşman kaybını gösteren özel işaretlemelere (* sembolü gibi klinik anormallikler) izin verir. PSR'ın CPITN'den ayrılan ve erken tanıda öne çıkan en önemli avantajı ataşman kaybını raporlayabilmesidir.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 114 (Benzerlik: 0.77)

**Soru 1 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

**Soru 2 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

---

### ÇİFT 115 (Benzerlik: 0.77)

**Soru 1 (ID: 9f600967-3d1f-4de3-ac2b-3fe17e91b839)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın maksiller sağ molar bölgesindeki dişeti belirgin derecede kırmızı, ödemli ve yer yer ülsere görünümdedir. Hasta, mekanik bir uyaran (fırçalama) olmaksızın da dişetlerinin kendiliğinden kanadığını ifade etmektedir. Löe ve Silness Gingival İndeksine göre bu durumun skoru aşağıdakilerden hangisidir?
Doğru Şık (B): 3
Açıklama: Şiddetli inflamasyon, belirgin kırmızılık, ülserasyonlar ve özellikle 'spontan (kendiliğinden) kanama' varlığı Gingival İndekste en yüksek değer olan skor 3'e karşılık gelir. Ülserasyon epitel bütünlüğünün tamamen bozulduğunu ve vasküler yatağın açığa çıktığını gösterir.

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 116 (Benzerlik: 0.76)

**Soru 1 (ID: 58ae7756-70a3-465f-b0e1-69afcd6895c2)**
Soru Kökü: Yirmi dokuz yaşındaki erkek hastanın alt keserler bölgesinde sondalama olmaksızın yapılan görsel değerlendirmesinde; parlaklık, kırmızılık, ödem ve papiller ünitede belirgin hipertrofi izlenmiştir. Ülserasyon veya konjesyon belirtisi yoktur. Modifiye Gingival İndekse göre bu tablonun skoru kaçtır?
Doğru Şık (B): 3
Açıklama: Orta derecede inflamasyon, kırmızılık, ödem ve dişeti kenarında/papilde hipertrofi varlığı Modifiye Gingival İndekste skor 3 olarak değerlendirilir. Ülserasyon veya spontan kanama tablosu eklenseydi skor 4 (şiddetli inflamasyon) seviyesine çıkardı.

**Soru 2 (ID: 9f600967-3d1f-4de3-ac2b-3fe17e91b839)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın maksiller sağ molar bölgesindeki dişeti belirgin derecede kırmızı, ödemli ve yer yer ülsere görünümdedir. Hasta, mekanik bir uyaran (fırçalama) olmaksızın da dişetlerinin kendiliğinden kanadığını ifade etmektedir. Löe ve Silness Gingival İndeksine göre bu durumun skoru aşağıdakilerden hangisidir?
Doğru Şık (B): 3
Açıklama: Şiddetli inflamasyon, belirgin kırmızılık, ülserasyonlar ve özellikle 'spontan (kendiliğinden) kanama' varlığı Gingival İndekste en yüksek değer olan skor 3'e karşılık gelir. Ülserasyon epitel bütünlüğünün tamamen bozulduğunu ve vasküler yatağın açığa çıktığını gösterir.

---

### ÇİFT 117 (Benzerlik: 0.76)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

---

### ÇİFT 118 (Benzerlik: 0.76)

**Soru 1 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 119 (Benzerlik: 0.76)

**Soru 1 (ID: 17b733d6-35fa-4686-a21f-734d30ae9e39)**
Soru Kökü: Kırk beş yaşında erkek hasta kronik periodontitis tanısıyla tedaviye alınmıştır. Subgingival plakta bu hastalıkla en yoğun ilişkilendirilen spesifik bakteriyel risk faktörlerinden biri olan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis ve T. forsythia sıklıkla kronik periodontitiste bulunan majör risk faktörleridir. P. intermedia ve T. denticola da patojeniktir fakat nedensel 4 klasik kritere (eliminasyonda iyileşme, konak yanıtı, virülans faktörleri, hayvan modelinde başlatma) sahip ana risk faktörü üçlüsünde P. gingivalis başı çeker.

**Soru 2 (ID: 8f78f6ba-b372-410b-bee5-ad5e8255035a)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta şiddetli ataçman kaybı tablosu ile başvuruyor. Muayenede plak miktarı çok az (minimal) olmasına rağmen periodontal yıkımın şiddetli olduğu ve lokalize bir dağılım gösterdiği saptanıyor. Bu durum periodontal mikrobiyolojide plağın kantitesinden çok kalitesinin hastalıkla ilişkili olduğunu vurgulamaktadır. Bu spesifik klinik tabloda (lokalize agresif periodontitis eğilimi) yıkımdan sorumlu olması en muhtemel birincil patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: Az plak varlığına rağmen şiddetli yıkım lokalize agresif periodontitisin tipik özelliğidir. A. actinomycetemcomitans sıklıkla bu klinik tabloyla güçlü bir nedensel ilişkiye sahiptir. P. gingivalis ve T. forsythia ise daha çok bol eklentiyle karakterize kronik periodontitis risk faktörleridir.

---

### ÇİFT 120 (Benzerlik: 0.76)

**Soru 1 (ID: 790ee58f-375f-45be-ac2d-f51b3773e565)**
Soru Kökü: Saxer ve Muhlevan tarafından 1975 yılında geliştirilmiş olan ve gingival inflamasyonu değerlendirmek amacıyla sadece interdental bölgeye odaklanarak buradaki kanama profilini saptayan indeks aşağıdakilerden hangisidir?
Doğru Şık (C): Papil kanama indeksi (PBI)
Açıklama: İnterdental papil bölgesindeki kanamaya spesifik olarak odaklanan indeks Papil Kanama İndeksi'dir (PBI). Saxer ve Muhlevan tarafından geliştirilmiştir. Papiller bölge plak birikimine en yatkın alan olduğu için inflamasyonun ilk belirtilerini yakalamada son derece hassastır.

**Soru 2 (ID: ce2bf536-42e4-4ff0-826b-25a80eee89f4)**
Soru Kökü: Gingival inflamasyonun teşhisine yönelik indekslerin geliştirilme sürecinde, klinik olarak görünür bir renk değişikliği oluşmadan önce bile, hafif sondalama sırasında sulkusta ortaya çıkan kanamayı iltihabın ilk belirteci (ilk kriter) olarak kabul eden indeks aşağıdakilerden hangisidir?
Doğru Şık (C): Sulkus kanama indeksi (SBI - Muhleman)
Açıklama: Muhleman ve Mazar'ın geliştirdiği Sulkus Kanama İndeksi (SBI), hafif sondalama ile oluşan kanamayı dişeti iltihabının en erken işareti olarak kabul eden 0-5 arası bir skaladır. Löe ve Silness'in Gingival İndeksi'nde ilk iltihap bulgusu kanama değil, hafif renk değişikliğidir (Skor 1). SBI, kanamanın histolojik inflamasyonla güçlü korelasyonunu temel alır.

---

### ÇİFT 121 (Benzerlik: 0.76)

**Soru 1 (ID: 9d0c971c-99d1-43ec-8cdc-b11e6768ebbe)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) ve AAP tarafından desteklenen PSR (Periodontal Screening and Recording) indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): İndeksin temel zafiyeti, klinik ataşman kaybı hakkında hiçbir bilgi vermemesidir.
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermezken, onun modifiye versiyonu olan PSR indeksi ataşman kaybını gösteren özel işaretlemelere (* sembolü gibi klinik anormallikler) izin verir. PSR'ın CPITN'den ayrılan ve erken tanıda öne çıkan en önemli avantajı ataşman kaybını raporlayabilmesidir.

**Soru 2 (ID: dc19c943-c319-4405-b232-735cd80aa987)**
Soru Kökü: Aşağıdakilerden hangisi Periodontal Tarama ve Kayıt (PSR) indeksinin, öncülü olan CPITN indeksine göre sunduğu temel klinik üstünlüklerinden biri olarak kabul edilir?
Doğru Şık (A): Klinisyene hastanın ataşman kaybı durumu hakkında da bilgi verebilmesi
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermez, yalnızca tedavi ihtiyacını (diş taşı, kanama, cep) gösterir. PSR ise CPITN'in modifiye edilmiş halidir ve kompleks formu karmaşıklaştırmadan periodontitisin erken tanısına yardımcı olurken, aynı zamanda cep derinliğindeki olası değişimleri ve ATAŞMAN KAYBINI gösterebilmesiyle ayrılır.

---

### ÇİFT 122 (Benzerlik: 0.76)

**Soru 1 (ID: 51605b6d-65a9-49dc-bd8e-195e1e067e75)**
Soru Kökü: Periodontitisin hücresel seviyedeki en majör özelliklerinden biri destek dokulardaki tip 1 kollajen ağının ve zemin maddesi olan ekstrasellüler matriksin enzimatik olarak parçalanmasıdır. Dişeti oluğu sıvısının (DOS) biyokimyasal analizinde, sırasıyla *doğrudan kollajen proteinin spesifik yıkımını* ve *zemin maddesi olan matriksin glikoprotein bozulmasını* yansıtan substrat belirteçleri aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): Hidroksiprolin / Glikozaaminoglikanlar
Açıklama: Periodontal konak yanıtında matriks metaloproteinazlar tarafından parçalanan kollajen moleküllerinin hidrolizi doğrudan DOS'a hidroksiprolin salınımına neden olurken; ekstrasellüler matriksin temel ara maddesini oluşturan zemin maddesinin bozulması glikozaaminoglikanları (GAG) serbest bırakır. Osteokalsin alveoler kemik döngüsünü (turnover) gösteren protein bir marker olup yumuşak dokunun kollajen yıkımını direkt temsil etmez. Bu ayrım, hastalığın aktif fazında hedeflenen dokunun (spesifik kollajen bantları vs mukopolisakkarit matriks) saptanmasında belirleyicidir.

**Soru 2 (ID: 9617fd73-93f5-47aa-9673-41e742c8bdc8)**
Soru Kökü: Aşağıdaki doku yıkım ürünlerinden hangisi, periodontitiste bağ dokusu ekstrasellüler matriksinin enzimatik olarak bozulması sonucunda dişeti oluğu sıvısında artış gösterir?
Doğru Şık (B): Glikozaaminoglikanlar
Açıklama: Glikozaaminoglikanlar, ekstrasellüler matriksin proteolitik enzimlerce yıkılmasıyla serbest kalarak dişeti oluğu sıvısında tespit edilir. Hidroksiprolin doğrudan kollajen peptid yıkımını temsil ederken osteokalsin kemik rezorpsiyon döngüsüne aittir. Matriks temel maddesinin yıkım ürünü glikozaminoglikanlardır.

---

### ÇİFT 123 (Benzerlik: 0.76)

**Soru 1 (ID: 9f600967-3d1f-4de3-ac2b-3fe17e91b839)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın maksiller sağ molar bölgesindeki dişeti belirgin derecede kırmızı, ödemli ve yer yer ülsere görünümdedir. Hasta, mekanik bir uyaran (fırçalama) olmaksızın da dişetlerinin kendiliğinden kanadığını ifade etmektedir. Löe ve Silness Gingival İndeksine göre bu durumun skoru aşağıdakilerden hangisidir?
Doğru Şık (B): 3
Açıklama: Şiddetli inflamasyon, belirgin kırmızılık, ülserasyonlar ve özellikle 'spontan (kendiliğinden) kanama' varlığı Gingival İndekste en yüksek değer olan skor 3'e karşılık gelir. Ülserasyon epitel bütünlüğünün tamamen bozulduğunu ve vasküler yatağın açığa çıktığını gösterir.

**Soru 2 (ID: c665e17b-7fd4-4ddc-86e0-c7c2d40b6472)**
Soru Kökü: Periodontal idame terapisindeki bir hastanın gingival marjini ve komşu diş yüzeylerinde, çıplak gözle kolayca izlenebilen bol miktarda yumuşak eklenti ve diş taşı saptanmıştır. Löe ve Silness'in Plak İndeksi kriterleri kullanıldığında, bu diş yüzeyine atanacak skor aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 3
Açıklama: Bol miktarda yumuşak eklenti ve kalkulus varlığı, Löe ve Silness Plak İndeksi'nde en yüksek değer olan Skor 3'e denk gelir. Skor 2 orta derecede eklentiyi ifade ederken, indeksin 4 gibi bir skor basamağı bulunmamaktadır. Klinik olarak belirgin kalın plak ve taş tabakası bu kodlamanın anahtarıdır.

---

### ÇİFT 124 (Benzerlik: 0.76)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: 454d966f-4132-4da1-bb98-4eaa814c19ef)**
Soru Kökü: Kırk beş yaşında erkek hasta alt ön bölgesindeki diş taşlarından rahatsızlık duymaktadır. Klinik muayenede WHO zondunun siyah bandı tamamen görünürken, supragingival ve subgingival alanlarda yoğun diş taşı birikimi tespit edilmiştir. Bu sekstant için CPITN kodu dikkate alındığında endike olan tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (D): Oral hijyen eğitimi ve kök yüzeyi düzleştirme
Açıklama: CPITN Kod 2; cep derinliğinin 3.5 mm'yi geçmediği ancak supra/subgingival diş taşının veya taşkın restorasyon marjinlerinin bulunduğu durumu ifade eder. Bu durumda tedavi protokolü oral hijyen eğitimi (OHE) ile birlikte diş taşı temizliği ve kök yüzeyi düzleştirilmesidir (SCRP). Cep derinliği patolojik sınırlara (4-5 mm) ulaşmadığı için Kod 3 tedavisi olan modifiye yaklaşımlara geçilmez.

---

### ÇİFT 125 (Benzerlik: 0.76)

**Soru 1 (ID: 04c19cfb-e462-44bb-9734-7f988c40b77d)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın oral hijyeni genel olarak iyi düzeyde olmasına rağmen, sadece 12 ve 22 numaralı dişlerin palatinal yüzeylerinde derin, dar lokalize periodontal cepler saptanmıştır. Panoramik radyografisinde yaygın bir periodontal yıkım izlenmemektedir. Bu spesifik izole ataşman kaybına zemin hazırlayan ve ilgili dişlerin prognozunu olumsuz etkileyen en olası lokal anatomik varyasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Gelişimsel palatinal oluk (Developmental groove)
Açıklama: Maksiller lateral kesici dişlerin (12 ve 22 numaralar) palatinal yüzeylerinde embriyolojik dönemde sıkça şekillenen 'gelişimsel palatinal oluklar', mine-sement birleşimini aşıp kök yüzeyine doğru ilerleyen anatomik tünellerdir. Bu oluklar fırça kıllarının ve hatta küretlerin ulaşamayacağı mikrobiyal plak retansiyon alanları yaratarak, hastanın genel hijyeni iyi olsa bile o dişe özgü şiddetli lokalize kemik kaybı ve cep oluşumuna (kötü prognoza) yol açarlar.

**Soru 2 (ID: cb90cbf5-1bfc-4c80-8312-5ad70f80104f)**
Soru Kökü: Anatomik faktörlerin periodontal hastalık prognozuna etkileri incelendiğinde; özellikle maksiller kesici dişlerin palatinal yüzeylerinde izlenen, fırçalamanın anatomik zorluğu nedeniyle ciddi subgingival plak retansiyonu ve lokalize derin cep oluşumu yaratarak tedavinin prognozunu olumsuz etkileyen gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (B): Gelişimsel oluk (Palatogingival oluk)
Açıklama: Gelişimsel oluklar (palatogingival oluklar), sıklıkla maksiller yan kesici dişlerin palatinalinden başlayarak kök apeksine doğru uzanan anatomik defektlerdir. Bu oluklar, bakteri plağı için korunaklı bir rezervuar oluşturur ve mekanik (fırça/sond) erişimi imkansız kılarak şiddetli lokalize kemik kaybı ve pulpa-periodontal lezyonlara yol açar. Servikal mine çıkıntısı ise daha çok mandibular ve maksiller molarlarda (özellikle 2. molar) görülür.

---

### ÇİFT 126 (Benzerlik: 0.76)

**Soru 1 (ID: 33fcb848-a98c-490a-a332-c44acf150376)**
Soru Kökü: Prognoz belirlenirken dikkate alınan faktörler genel, sistemik, lokal ve restoratif olarak sınıflandırılır. Buna göre aşağıdakilerden hangisi doğrudan 'genel klinik faktörler' kategorisinde yer **almaz**?
Doğru Şık (A): Subgingival marjinli restorasyonlar
Açıklama: Subgingival marjinli restorasyonlar, plak retansiyonuna neden olan anatomik ve iyatrojenik tabiatlı 'lokal faktörler' grubuna girer. Yaş, hastalığın genel şiddeti, hastanın kliniğe geliş uyumu ve tüm ağızdaki genel biyofilm kontrol kapasitesi ise 'genel klinik faktörler' olarak değerlendirilir.

**Soru 2 (ID: f17d7f4c-9e39-47fc-a47f-2a3ef2ca6488)**
Soru Kökü: Dişlerin periodontal prognozunu belirlerken dikkat edilmesi gereken spesifik faktörler lokal, sistemik ve protetik olmak üzere gruplandırılır. Buna göre aşağıdakilerden hangisi protetik ve restoratif faktörler grubunda **yer almaz**?
Doğru Şık (C): Köklerin birbirine yakınlığı
Açıklama: Kök yakınlığı (root proximity), servikal mine çıkıntıları ve kök konkaviteleri gibi anatomik-gelişimsel kök anomalilerinden olup "lokal faktörler" sınıfında değerlendirilir. Abutment seçimi, protez tipi ve subgingival restorasyon kenarları iatrojenik/protetik planlamaya dahil olan restoratif prognostik faktörlerdir. Sistematik risk değerlendirmesinde bu faktörlerin kaynağı tedavi stratejisini değiştirir.

---

### ÇİFT 127 (Benzerlik: 0.76)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

---

### ÇİFT 128 (Benzerlik: 0.76)

**Soru 1 (ID: 2394a201-1707-473a-8acd-1612a2cbd903)**
Soru Kökü: Bir toplum taramasında kullanılan CPITN sondunun (ilk renkli bandı 3.5 - 5.5 mm arası olan) dişeti cebine yerleştirilmesi sırasında siyah bandın sadece bir kısmının görünür kaldığı, geri kalan kısmının cep içinde kaybolduğu saptanmıştır. Bu derinlik bulgusu aşağıdaki CPITN skorlarından hangisini tanımlar?
Doğru Şık (E): Kod 3
Açıklama: CPITN Kod 3, 4-5 mm arası derinlikteki patolojik cepleri ifade eder. Sondun ucundaki ilk boyalı bant 3.5 mm'den başlayıp 5.5 mm'de bittiği için, bu derinlikteki bir cepte siyah bandın bir kısmı doku içinde kalırken bir kısmı dışarıda gözükür. Bu bulgu doğrudan Kod 3 olarak skorlanır.

**Soru 2 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

---

### ÇİFT 129 (Benzerlik: 0.76)

**Soru 1 (ID: 58ae7756-70a3-465f-b0e1-69afcd6895c2)**
Soru Kökü: Yirmi dokuz yaşındaki erkek hastanın alt keserler bölgesinde sondalama olmaksızın yapılan görsel değerlendirmesinde; parlaklık, kırmızılık, ödem ve papiller ünitede belirgin hipertrofi izlenmiştir. Ülserasyon veya konjesyon belirtisi yoktur. Modifiye Gingival İndekse göre bu tablonun skoru kaçtır?
Doğru Şık (B): 3
Açıklama: Orta derecede inflamasyon, kırmızılık, ödem ve dişeti kenarında/papilde hipertrofi varlığı Modifiye Gingival İndekste skor 3 olarak değerlendirilir. Ülserasyon veya spontan kanama tablosu eklenseydi skor 4 (şiddetli inflamasyon) seviyesine çıkardı.

**Soru 2 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

---

### ÇİFT 130 (Benzerlik: 0.76)

**Soru 1 (ID: 033b323a-b49d-411f-bb26-c862fc587c81)**
Soru Kökü: Basitleştirilmiş Oral Hijyen İndeksi (OHI-S, Green-Vermillion), gingivitis ölçümünden ziyade debris ve diş taşı varlığını standartize etmek için tasarlanmıştır. Bu indekste değerlendirilen diş yüzeyleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Mandibular 36 ve 46 numaralı dişlerin de fasial yüzeyleri değerlendirilir.
Açıklama: OHI-S'de (Green-Vermillion) değerlendirme bölgeleri zaman kazanmak için basitleştirilmiştir. Üst çenede 16 ve 26'nın fasial, 11'in fasial yüzeyi; alt çenede ise 31'in fasial, ancak alt büyük azıların (36, 46) LİNGUAL yüzeyleri seçilir. Çünkü alt molarların lingual yüzeyleri (Wharton kanalının ağzı) diş taşı birikimine en yatkın bölgelerdir. Alt molarların fasial yüzeyi değerlendirilmez.

**Soru 2 (ID: 2a882abe-be57-4504-9478-e24b008f95d6)**
Soru Kökü: Aşağıdakilerden hangisi Green-Vermillion Basitleştirilmiş Oral Hijyen İndeksi (OHI-S) değerlendirmesinde seçilen standart indeks dişlerinden biridir?
Doğru Şık (B): Mandibular sol 1 numaralı dişin fasial yüzeyi
Açıklama: OHI-S indeksinde uygulama kolaylığı için maksiller 6-1-6 numaralı dişlerin fasial yüzeyleri ile mandibular sol 1'in fasial yüzeyi ve alt 6'ların lingual yüzeyleri seçilmiştir. Maksiller bölgede palatinal, mandibular keser bölgesinde ise sağ diş değerlendirme dışı tutulmuştur. Bu spesifik diş seçimi, indeksin klinikte hızlı ve basitleştirilmiş şekilde uygulanabilmesini sağlar.

---

### ÇİFT 131 (Benzerlik: 0.76)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: 9f807eed-287e-446f-86a7-1ad123d3bc4b)**
Soru Kökü: 50 yaşında erkek hasta dişetlerinde şişlik ve dişlerinde uzama şikayetiyle başvuruyor. Sağ üst posterior bölgede CPITN sondu ile yapılan ölçümde siyah renkli ölçüm bandının tamamının cep içinde kaybolduğu (6 mm ve üzeri derinlik) tespit edilmiştir. CPITN skorlamasına göre bu sekstantın durumu ve öngörülen tedavi yaklaşımı aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Kod 4 / OHE, SCRP ve Cerrahi tedavi
Açıklama: CPITN Kod 4, 6 mm veya daha derin periodontal ceplerin varlığını gösterir. Klinik olarak sondun 3.5-5.5 mm arasındaki siyah bandı tamamen doku içine batarak kaybolur. Bu şiddetteki bir periodontal yıkımın tedavisinde konservatif yaklaşımlar (OHE ve SCRP) yetersiz kalacağından protokole cerrahi girişim eklenir.

---

### ÇİFT 132 (Benzerlik: 0.76)

**Soru 1 (ID: 4df0e91e-c524-429d-8863-afeec7c98e3d)**
Soru Kökü: Mikrobiyolojik teşhiste subgingival örnekler için kullanılan immünodiagnostik yöntemlerin (Örn. İmmünfloresans, Elisa), klasik referans standart olan bakteriyel kültür yöntemine kıyasla en belirgin farklılığı/avantajı aşağıdakilerden hangisidir?
Doğru Şık (C): Testin çalışması için canlı mikroorganizma varlığına gereksinim duymamaları
Açıklama: İmmünodiagnostik testler hücre yüzeyindeki spesifik antijenleri hedefler; bu nedenle transport sırasında bakteri ölse dahi antijen bozulmadığı sürece tespit yapılabilir (canlı mikroorganizma gerektirmez). Kültür yöntemi ise canlılık ve çok hassas taşıma koşulları gerektirir. Antibiyotik duyarlılığını test edebilen tek in vitro yöntem ise sadece kültürdür.

**Soru 2 (ID: c06c7eb7-75fc-4c4c-8c47-5dfba67b98a7)**
Soru Kökü: İmmünolojik teşhis metodları (Elisa, Akım sitometrisi, İmmünfloresans) periodontal klinik mikrobiyolojide kültüre göre daha hassastır ve incelenecek örneğin canlı mikroorganizma içermesi zorunluluğunu ortadan kaldırır. Ancak bu testlerin rutin klinik kullanımlarını en çok kısıtlayan dezavantaj aşağıdakilerden hangisidir?
Doğru Şık (C): Yalnızca sınırlı sayıda spesifik bakteri türü için antikor üretilmiş olması ve antibiyogram testi yapamamaları
Açıklama: İmmünodiagnostik testler antijen-antikor reaksiyonuna dayanır, bu nedenle yalnızca önceden tespit edilip antikoru sentezlenmiş spesifik patojenleri tespit edebilirler. Plakta bulunan yüzlerce yeni veya nadir türü tanıyamazlar ve en kritik klinik eksiklikleri olarak antimikrobiyal duyarlılık testi (antibiyogram) yapılmasını imkansız kılarlar. PCR'a göre saptama limitleri de genellikle daha zayıftır.

---

### ÇİFT 133 (Benzerlik: 0.76)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: c54e139b-59ca-4927-9c6a-8319656ebdd9)**
Soru Kökü: 60 yaşında kadın hasta, dişlerinde aşırı mobilite ve çiğneme zorluğu yaşamaktadır. Klinik ve radyografik muayenede kemik desteğinin tamamen kaybedildiği, sağlık, fonksiyon ve yaşam kalitesini idame ettirmeye yetecek minimum ataşman seviyesinin dahi bulunmadığı tespit ediliyor. Dişin periodontal prognozu hangi sınıflandırmaya dahil edilmelidir?
Doğru Şık (A): Umutsuz (Hopeless)
Açıklama: Prognoz sınıflandırmasında, dişi fonksiyonel veya estetik olarak idame ettirecek düzeyde ataşman kalmadığı, çekim endikasyonu kesinleşen durumlar 'Umutsuz (Hopeless)' olarak adlandırılır. Şüpheli prognozda %50'den fazla kemik kaybı ve kök anatomisi zayıflığı varken tedavi umudu (radikal dahil) az da olsa mevcuttur. Umutsuz dişler, sistemik enfeksiyon riskini artırdığından protetik planlama öncesi ekstrakte edilmelidir.

---

### ÇİFT 134 (Benzerlik: 0.76)

**Soru 1 (ID: 9cd40e84-4700-454b-8cae-7d61089be91c)**
Soru Kökü: Muhleman ve Mazar tarafından geliştirilen Sulkus Kanama İndeksi (SBI), dişeti iltihabının erken tanısında kendisinden önce yaygın olarak kullanılan Gingival İndeks'ten (Löe-Silness) kavramsal bir farkla ayrılır. SBI, gingival inflamasyonun *ilk* klinik belirtisi olarak aşağıdakilerden hangisini kabul eder?
Doğru Şık (C): Hafif sondalama sırasında ortaya çıkan kanama
Açıklama: Löe-Silness Gingival İndeksi, inflamasyonun ilk işareti (Skor 1) olarak sondalamada kanamanın *olmadığı* hafif renk değişikliğini kabul eder. Buna karşılık Muhleman'ın Sulkus Kanama İndeksi (SBI), mikroskobik düzeydeki doku harabiyetine dayanarak hafif sondalamada ortaya çıkan kanamanın inflamasyonun gerçek ilk belirtisi olduğunu savunur.

**Soru 2 (ID: ce2bf536-42e4-4ff0-826b-25a80eee89f4)**
Soru Kökü: Gingival inflamasyonun teşhisine yönelik indekslerin geliştirilme sürecinde, klinik olarak görünür bir renk değişikliği oluşmadan önce bile, hafif sondalama sırasında sulkusta ortaya çıkan kanamayı iltihabın ilk belirteci (ilk kriter) olarak kabul eden indeks aşağıdakilerden hangisidir?
Doğru Şık (C): Sulkus kanama indeksi (SBI - Muhleman)
Açıklama: Muhleman ve Mazar'ın geliştirdiği Sulkus Kanama İndeksi (SBI), hafif sondalama ile oluşan kanamayı dişeti iltihabının en erken işareti olarak kabul eden 0-5 arası bir skaladır. Löe ve Silness'in Gingival İndeksi'nde ilk iltihap bulgusu kanama değil, hafif renk değişikliğidir (Skor 1). SBI, kanamanın histolojik inflamasyonla güçlü korelasyonunu temel alır.

---

### ÇİFT 135 (Benzerlik: 0.76)

**Soru 1 (ID: 1953deca-c919-47d2-9d2f-ad4f355e519a)**
Soru Kökü: 40 yaşında sağlıklı bir hastanın epidemiyolojik saha çalışması sırasında CPITN sondu ile periodontal değerlendirmesi yapılmıştır. Hekim sondun ucundaki renkli siyah bandın tamamen görünür olduğunu, sondalamada kanama gelişmediğini ve herhangi bir diş taşı saptanmadığını kaydetmiştir. Bu bulgulara göre hastanın CPITN skoru ve tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (C): Kod 0 / Tedavi gerekmez
Açıklama: CPITN Kod 0, herhangi bir hastalık belirtisinin (kanama, diş taşı, cep) bulunmadığı kusursuz sağlıklı dişeti durumunu yansıtır. Sondun siyah bandı dışarıdadır (cep <3.5 mm) ve kanama yoktur. Bu sekstant için herhangi bir tedavi gereksinimi atanmaz.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 136 (Benzerlik: 0.76)

**Soru 1 (ID: 16260972-6a94-4d1d-8df7-fed48670082f)**
Soru Kökü: 48 yaşında erkek hasta generalize şiddetli kronik periodontitis şikayetiyle başvuruyor. Dişeti oluğu sıvısından (DOS) alınan örnekte nekrotik hücrelerden salınan, kalp (miyokard enfarktüsü) ve karaciğer (hepatit) kaynaklı yıkımlarda da artan, şiddetli gingival inflamasyon ve yakın geçmişteki periodontal ataşman kaybıyla pozitif ilişkili olan konak enzimi aşağıdakilerden hangisidir?
Doğru Şık (D): Aspartat aminotransferaz (AST)
Açıklama: Aspartat aminotransferaz (AST), hücre ölümü (nekroz) sırasında sitoplazmadan ekstrasellüler ortama salınan ve aktif periodontal doku yıkımının önemli bir belirteci olan enzimdir. B-glukuronidaz ve elastaz nötrofil granüllerinden kaynaklanırken, MMP'ler bağ dokusu matriksini spesifik olarak yıkan proteolitik enzimlerdir. AST'nin sistemik karşılıkları MI ve hepatit tablolarında da aynı hücre ölüm mekanizmasıyla kana karışmasıdır.

**Soru 2 (ID: d1be3dfd-e07e-4f37-82a7-083b7dce7be6)**
Soru Kökü: Otuz dört yaşında kadın hasta, generalize şiddetli periodontitis bulguları ile kliniğe başvurmuştur. Dişeti oluğu sıvısı analizinde nötrofil granüllerinden kaynaklanan bir lizozomal enzimin aktivitesinin yüksek olduğu ve bu durumun ataşman kaybı için prediktif özellik taşıdığı raporlanmıştır. Tanımlanan bu enzim aşağıdakilerden hangisidir?
Doğru Şık (D): B-glukorinidaz
Açıklama: B-glukorinidaz, şiddetli periodontal hastalıklarda artış gösteren ve gelecekteki ataşman kaybı için güçlü prediktif (öngörücü) değer taşıyan bir nötrofil lizozomal enzimidir. AST ölü doku kaynaklıdır, katepsinler ise asidik protein yıkımından sorumludur. Bu nedenle nötrofil kaynaklı prediktif yıkım belirteci spesifik olarak B-glukorinidazdır.

---

### ÇİFT 137 (Benzerlik: 0.76)

**Soru 1 (ID: 0d300b31-2ed4-4edf-abb5-5068fc5e33a4)**
Soru Kökü: Aktif periodontal hastalık teşhisinde immünolojik prensipleri kullanan metodlar, spesifik bakteriyel antijenlerin izole edilmesine dayanır. Canlı mikroorganizma gereksinimini ortadan kaldıran bu yöntemlerden biri olan ve özel bir membran tabakası üzerinde gerçekleşen antikor-antijen bağlanma reaksiyonunun bir renk değişimi ile okunduğu, A. actinomycetemcomitans, P. gingivalis ve P. intermedia türlerini saptamak üzere özel tasarlanmış ticari testin adı aşağıdakilerden hangisidir?
Doğru Şık (A): Evalusite
Açıklama: Evalusite, hedef patojenlerin (Aa, Pg, Pi) özel bir membran üzerindeki antikorlarla reaksiyona girmesi ve bunun kalitatif bir renk değişimiyle izlenmesi esasına dayanan spesifik bir membran immunoassay testidir. En güçlü çeldirici olan Latex aglütinasyon testinde membran kullanılmaz; türe özgü antijenle kaplı lateks boncuklarının mikrobiyal yüzey yapıları ile temas ettiğinde kümelenme (aglütinasyon) göstermesi esasına dayanır. Perioscan ise BANA hidrolizine dayalı enzimatik bir yöntemdir.

**Soru 2 (ID: 805ab1e3-7390-43aa-a97c-4734a5302b22)**
Soru Kökü: Dişeti oluğu sıvısındaki hedef mikroorganizmaların veya inflamatuar mediatörlerin tespitinde kullanılan ve;
I. Antijen-antikor bağlanma prensibini temel alan,
II. Elde edilen enzimatik renk yoğunluğunun fotometrik olarak ölçüldüğü,
III. Renk şiddeti ile antijen konsantrasyonu arasında doğru orantı kuran
immünodiagnostik test aşağıdakilerden hangisidir?
Doğru Şık (D): Elisa (Enzyme linked immünoabsorbent assay)
Açıklama: Elisa yöntemi, antijenin veya antikorun bir yüzeye bağlanması ve ardından bir enzimle işaretlenmiş sekonder antikorun eklenmesiyle oluşan renk değişiminin fotometre ile kantitatif/yarı kantitatif olarak okunduğu tekniktir. Perioscan enzimatik (BANA) bir testtir. Membran deneyinde ve latexta fotometrik yoğunluk ölçümü yerine gözle görülür kalitatif değişim/kümelenme aranır.

---

### ÇİFT 138 (Benzerlik: 0.76)

**Soru 1 (ID: a01f94c6-e3b0-44bb-940c-750a91acd04f)**
Soru Kökü: Yirmi iki yaşında kadın hasta; anterior bölgede şiddetli açık kapanış ve posterior bölgede unilateral çapraz kapanış anomalileri ile kliniğe başvurmuştur. Dişlerin pozisyon anomalilerine ikincil olarak gelişen lokal periodontal yıkım mekanizmaları incelendiğinde, bu iki klinik tablonun periodontal etkilerine ilişkin aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Açık kapanış, bölgedeki mekanik temizleme etkisini artırarak koruyucu bir fizyolojik çevre yaratır ve diştaşı birikimini engeller.
Açıklama: Açık kapanış anomalilerinde yiyeceklerin fizyolojik ve mekanik temizleme etkisi artmaz, tam tersine belirgin şekilde azalır; bu durum plak ve diştaşı birikimini artırarak dişeti inflamasyonuna yatkınlık yaratır. Fonksiyonsuzluğa bağlı olarak bu dişlerde patolojik uzama (elongasyon) görülmesi tipiktir. Çapraz kapanış ise okluzal travma, artmış gıda sıkışması ve mandibular dişlerde bukkal/lingual yönde yelpaze benzeri açılma hareketleri ile karakterize yıkıcı bir periodontal biyomekanik zemin oluşturur.

**Soru 2 (ID: a07313d2-d285-4b8a-8437-d9c87518b575)**
Soru Kökü: 22 yaşında erkek hasta ön bölgede dişetlerinde kanama ve şişlik şikayetiyle başvurmuştur. Muayenede anterior bölgede plak ve diştaşı birikiminin yoğun olduğu, dişlerin üst üste kapanmadığı ve temasın bulunmadığı saptanmıştır. Hastada yiyeceklerin mekanik temizleme etkisinin ortadan kalkmasına bağlı gelişen bu yoğun plak retansiyonunun anatomik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Açık kapanış
Açıklama: Açık kapanışta (open bite), karşıt çenedeki dişler arasında temas olmaması sebebiyle besinlerin çiğneme sırasında yarattığı mekanik temizleme etkisi ortadan kalkar. Çapraz kapanışta okluzal travma, derin kapanışta ise alt dişlerin üst damak dişetine travması söz konusu iken; fonksiyon dışı kalmaya bağlı lokalize yoğun plak birikimi açık kapanışın tipik bulgusudur.

---

### ÇİFT 139 (Benzerlik: 0.75)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: 1953deca-c919-47d2-9d2f-ad4f355e519a)**
Soru Kökü: 40 yaşında sağlıklı bir hastanın epidemiyolojik saha çalışması sırasında CPITN sondu ile periodontal değerlendirmesi yapılmıştır. Hekim sondun ucundaki renkli siyah bandın tamamen görünür olduğunu, sondalamada kanama gelişmediğini ve herhangi bir diş taşı saptanmadığını kaydetmiştir. Bu bulgulara göre hastanın CPITN skoru ve tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (C): Kod 0 / Tedavi gerekmez
Açıklama: CPITN Kod 0, herhangi bir hastalık belirtisinin (kanama, diş taşı, cep) bulunmadığı kusursuz sağlıklı dişeti durumunu yansıtır. Sondun siyah bandı dışarıdadır (cep <3.5 mm) ve kanama yoktur. Bu sekstant için herhangi bir tedavi gereksinimi atanmaz.

---

### ÇİFT 140 (Benzerlik: 0.75)

**Soru 1 (ID: 1e4d55db-0b63-433f-842c-1bb44c6eda40)**
Soru Kökü: Otuz beş yaşındaki kadın hastanın anamnezinden geçmişte şiddetli kronik periodontitis nedeniyle tedavi gördüğü anlaşılmıştır. Güncel radyografik incelemede kemik kaybının stabil olmadığı görülmüştür. Bu hastada gelecekteki yeni ataşman kayıpları riskini öngörmede kullanılan en güçlü risk işareti (marker) aşağıdakilerden hangisidir?
Doğru Şık (A): Geçirilmiş periodontal hastalık hikayesi
Açıklama: Bir hastada daha önceden var olan periodontal hastalık hikayesi, o hastanın gelecekteki hastalık aktivitesi ve ataşman kaybı riski için tanımlanmış en iyi ve en güçlü klinik risk işaretidir (marker). En şiddetli ataşman kayıpları bulunan hastalar, konağın biyolojik yatkınlığı nedeniyle gelecekte de en büyük risk altındaki gruptur. Sondalamada kanama da bir risk işaretidir ancak geçmiş hastalık hikayesi genel öngörüde en geniş kapsama sahip belirleyicidir.

**Soru 2 (ID: 6dd15f1e-ffce-4651-a5a6-eec9385fd40e)**
Soru Kökü: Otuz beş yaşında erkek hasta, dişetlerinde kanama şikayetiyle başvurmuştur. Klinik ölçümlerde ataşman kaybı saptanmamış, sadece sondalamada kanama gözlenmiştir. Terminolojiye göre sondalamada kanama, hastanın ileride yaşayabileceği ataşman kaybı için hangi kategoride bir klinik bulgudur?
Doğru Şık (D): Geleceğe ilişkin tahmini risk işareti
Açıklama: Sondalamada kanama ve geçmiş periodontal hastalık hikayesi, hastalığa neden olmayan ancak hastalığın mevcut aktivitesiyle birlikte gelecekteki olası yıkımını öngören 'geleceğe ilişkin risk tahmini işaretleri' (risk markerları) arasındadır. Risk faktörü (örn. sigara) hastalığı başlatırken, risk işareti sadece klinik hasarın habercisidir.

---

### ÇİFT 141 (Benzerlik: 0.75)

**Soru 1 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

**Soru 2 (ID: fb07eea4-e47b-4902-86dd-ee313fb4b747)**
Soru Kökü: Bir dişin periodontal prognozu değerlendirilirken hastanın genel sistemi, lokal kemik kayıpları ve anatomik defektler dikkate alınır. Aşağıdaki klinik bulgulardan hangisi, ilgili dişin prognozunun 'Kötü' (Poor) veya 'Şüpheli' sınıfından çıkarılarak daha olumlu bir evre olan 'İyi' (Fair) prognoz kategorisinde değerlendirilmesini sağlar?
Doğru Şık (C): Ataşman kaybının sadece %25 civarında olması ve furkasyondaki girişin alet erişimini engellemeyen Sınıf I düzeyinde kalması
Açıklama: 'İyi (Fair) prognoz' kategorisi, kemik ve ataşman kaybının henüz erken evrelerde (%25 civarı) kaldığı, temizlik veya cerrahi alet erişiminin (Sınıf I furka) hekim ve hasta tarafından kolayca sağlandığı dişler için kullanılır. Ataşman kaybının %50'yi bulması, kısa konik kökler ve tedavi erişimini kısıtlayan Sınıf II furka defektleri prognozu doğrudan 'Kötü (Poor)' düzeyine indirir.

---

### ÇİFT 142 (Benzerlik: 0.75)

**Soru 1 (ID: 454d966f-4132-4da1-bb98-4eaa814c19ef)**
Soru Kökü: Kırk beş yaşında erkek hasta alt ön bölgesindeki diş taşlarından rahatsızlık duymaktadır. Klinik muayenede WHO zondunun siyah bandı tamamen görünürken, supragingival ve subgingival alanlarda yoğun diş taşı birikimi tespit edilmiştir. Bu sekstant için CPITN kodu dikkate alındığında endike olan tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (D): Oral hijyen eğitimi ve kök yüzeyi düzleştirme
Açıklama: CPITN Kod 2; cep derinliğinin 3.5 mm'yi geçmediği ancak supra/subgingival diş taşının veya taşkın restorasyon marjinlerinin bulunduğu durumu ifade eder. Bu durumda tedavi protokolü oral hijyen eğitimi (OHE) ile birlikte diş taşı temizliği ve kök yüzeyi düzleştirilmesidir (SCRP). Cep derinliği patolojik sınırlara (4-5 mm) ulaşmadığı için Kod 3 tedavisi olan modifiye yaklaşımlara geçilmez.

**Soru 2 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

---

### ÇİFT 143 (Benzerlik: 0.75)

**Soru 1 (ID: 0ef6727d-847f-4cea-b9b7-4ffcfd214189)**
Soru Kökü: Elli iki yaşında erkek hasta, dişhekimine rutin kontrolünde diş eti kanaması şikayetiyle gelmiştir. Hekim patojenik bakterilerin enzim aktivitesini hasta başında BANA isimli substratın hidroliziyle test etmek istemektedir. Bu yöntemle ortak enzimatik profili saptanan bakteri grubu aşağıdakilerden hangisidir?
Doğru Şık (B): P. gingivalis, T. forsythia, T. denticola, Capnocytophaga
Açıklama: Tannerella forsythia (B. forsythus), Porphyromonas gingivalis, Treponema denticola ve Capnocytophaga türleri ortak bir tripsin benzeri enzim içerir ve BANA (N-benzoyl-di-arginine-2-naphtylamide) substratını hidrolize ederler. Perioscan kiti ile yapılan bu test bu spesifik patojen grubunun enzimatik tanısında kullanılır.

**Soru 2 (ID: 974929fc-3aec-4fe3-a0a6-5bcd2efc112d)**
Soru Kökü: BANA (N-benzoyl-di-arginine-2-naphtylamide) testinin pozitif sonuç verdiği ve tripsin benzeri enzim profiline sahip olan periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (B): Treponema denticola
Açıklama: Treponema denticola, Porphyromonas gingivalis ve Tannerella forsythia patojenleri tripsin benzeri ortak bir enzimatik profili paylaşırlar. Bu enzimin aktivitesi, klinik diagnostik kitlerde BANA substratının hidrolizi ile tespit edilir. A. actinomycetemcomitans veya F. nucleatum gibi bakteriler bu spesifik enzime sahip olmadıkları için testte negatif sonuç verirler.

---

### ÇİFT 144 (Benzerlik: 0.75)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: 89e8aa50-28b0-4b0b-b62d-8ea26e4141b1)**
Soru Kökü: 42 yaşında erkek hasta alt anterior bölgesindeki dişetlerinde rahatsızlık hissiyle geliyor. CPITN sondu ile yapılan muayenede patolojik cep derinliği saptanmamış (siyah bant görünür halde), ancak subgingival bölgelerde yoğun diş taşı tespit edilmiştir. İlgili sekstantın CPITN skoru ve uygulanması gereken minimum tedavi prosedürü aşağıdakilerden hangisidir?
Doğru Şık (B): Kod 2 / Oral hijyen eğitimi ve diş taşı temizliği
Açıklama: CPITN Kod 2, kanama olsun veya olmasın supragingival/subgingival diş taşının varlığı ile karakterizedir. Patolojik cep oluşumu henüz yoktur. Bu sekstant için tedavi protokolü kişisel oral hijyen eğitimine (OHE) ek olarak diş taşı temizliğinin (SCRP - scaling and root planing) uygulanmasıdır.

---

### ÇİFT 145 (Benzerlik: 0.75)

**Soru 1 (ID: 9d0c971c-99d1-43ec-8cdc-b11e6768ebbe)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) ve AAP tarafından desteklenen PSR (Periodontal Screening and Recording) indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): İndeksin temel zafiyeti, klinik ataşman kaybı hakkında hiçbir bilgi vermemesidir.
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermezken, onun modifiye versiyonu olan PSR indeksi ataşman kaybını gösteren özel işaretlemelere (* sembolü gibi klinik anormallikler) izin verir. PSR'ın CPITN'den ayrılan ve erken tanıda öne çıkan en önemli avantajı ataşman kaybını raporlayabilmesidir.

**Soru 2 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

---

### ÇİFT 146 (Benzerlik: 0.75)

**Soru 1 (ID: 00b8455f-e5fa-43d6-8787-c18b89016099)**
Soru Kökü: Periodontal hastalıklarda radyografik inceleme, kemik yıkımının tespiti için önemlidir. Aşağıdakilerden hangisi periodontitise bağlı alveol kemiğinde meydana gelen erken dönem radyografik değişikliklerden biri **değildir**?
Doğru Şık (D): Diş köklerinin bukkal veya lingual kortikal tabakalarında ileri derecede belirgin radyolusensi
Açıklama: Diş köklerinin bukkal veya lingual kortikal tabakalarındaki kayıp süperpozisyonlar nedeniyle radyografilerde kolayca görülmez ve belirgin hale gelmesi ileri/şiddetli furkasyon veya kemik yıkımının bir sonucudur. Kretsel düzensizlikler, triangulasyon (üçgenleşme) ve lamina dura silikleşmesi klasik erken dönem periodontal radyografik bulgulardır.

**Soru 2 (ID: 0dc842ec-6557-49ff-904a-6ab0971eaa45)**
Soru Kökü: Periodontal hastalıkların tanısında rutin olarak kullanılan radyografik incelemenin limitasyonlarından biri aşağıdakilerden hangisi **değildir**?
Doğru Şık (A): Kök yapısının dansitesindeki küçük değişikliklerin bukkal veya lingual bölgedeki kemik kaybını gösterebilmesi
Açıklama: Kök yapısındaki dansite değişikliklerinin bukkal veya lingual kemik kaybını işaret edebilmesi radyografinin bir yeteneğidir, limitasyonu değildir. Radyografiler yumuşak dokuyu göstermez, üç boyutlu defektleri süperpozisyonla gizler ve periodontal cebin varlığını kanıtlayamaz. Bu nedenle radyolojik değerlendirme daima klinik sondalama ile entegre edilmelidir.

---

### ÇİFT 147 (Benzerlik: 0.75)

**Soru 1 (ID: 0ef6727d-847f-4cea-b9b7-4ffcfd214189)**
Soru Kökü: Elli iki yaşında erkek hasta, dişhekimine rutin kontrolünde diş eti kanaması şikayetiyle gelmiştir. Hekim patojenik bakterilerin enzim aktivitesini hasta başında BANA isimli substratın hidroliziyle test etmek istemektedir. Bu yöntemle ortak enzimatik profili saptanan bakteri grubu aşağıdakilerden hangisidir?
Doğru Şık (B): P. gingivalis, T. forsythia, T. denticola, Capnocytophaga
Açıklama: Tannerella forsythia (B. forsythus), Porphyromonas gingivalis, Treponema denticola ve Capnocytophaga türleri ortak bir tripsin benzeri enzim içerir ve BANA (N-benzoyl-di-arginine-2-naphtylamide) substratını hidrolize ederler. Perioscan kiti ile yapılan bu test bu spesifik patojen grubunun enzimatik tanısında kullanılır.

**Soru 2 (ID: 719250ff-4df2-47d4-bb54-b2fde7fed218)**
Soru Kökü: 40 yaşında kronik periodontitis hastasının aktif periodontal ceplerinden alınan örneklerde, kırmızı kompleks bakterilerin ortak olarak ürettiği tripsin benzeri enzimin aktivitesi ölçülecektir. N-benzoyl-di-arginine-2-naphtylamide (BANA) substratının hidrolizi ile renk değişikliği sağlayan ve hastalık aktivitesini gösteren enzimatik diagnostik kit aşağıdakilerden hangisidir?
Doğru Şık (B): Perioscan
Açıklama: Perioscan, hedef mikroorganizmaların (T. denticola, P. gingivalis, T. forsythia) ortak bir tripsin benzeri enzim salgılamasına dayanan ve BANA substrat kartını kullanarak klinikte hızlı sonuç veren enzimatik bir teşhis kitidir. Periocheck ise nötrofil elastaz aktivitesini ölçer; Evalusite ise bir immünodiagnostik membran testidir.

---

### ÇİFT 148 (Benzerlik: 0.75)

**Soru 1 (ID: d55ef9ac-aadb-4ec0-a9fb-14219f833c9a)**
Soru Kökü: Kırk sekiz yaşındaki sistemik stres altında çalışan bir hastanın muayenesinde; 26 numaralı dişte %50 ataşman kaybı, kısa-konik elverişsiz kök formu saptanmıştır. Dişte Sınıf II furkasyon tutulumu mevcuttur ancak furkasyon girişine klinisyenin el aletleriyle ulaşması mümkündür. Bu klinik tabloya göre 26 numaralı dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor)
Açıklama: Ataşman kaybının %50 civarında olması, elverişsiz kron/kök oranı (kısa konik kök) ve derinlik açısından erişimi zor olsa da mümkün olan Sınıf II furkasyon tutulumu tablosu, 'Kötü (Poor)' prognoz kriterlerini tam olarak karşılar. Ataşman kaybı %50'yi aşar, furkasyon Sınıf III'e ilerler veya erişim tamamen imkansızlaşırsa dişin durumu 'Şüpheli (Questionable)' seviyesine düşer.

**Soru 2 (ID: fb07eea4-e47b-4902-86dd-ee313fb4b747)**
Soru Kökü: Bir dişin periodontal prognozu değerlendirilirken hastanın genel sistemi, lokal kemik kayıpları ve anatomik defektler dikkate alınır. Aşağıdaki klinik bulgulardan hangisi, ilgili dişin prognozunun 'Kötü' (Poor) veya 'Şüpheli' sınıfından çıkarılarak daha olumlu bir evre olan 'İyi' (Fair) prognoz kategorisinde değerlendirilmesini sağlar?
Doğru Şık (C): Ataşman kaybının sadece %25 civarında olması ve furkasyondaki girişin alet erişimini engellemeyen Sınıf I düzeyinde kalması
Açıklama: 'İyi (Fair) prognoz' kategorisi, kemik ve ataşman kaybının henüz erken evrelerde (%25 civarı) kaldığı, temizlik veya cerrahi alet erişiminin (Sınıf I furka) hekim ve hasta tarafından kolayca sağlandığı dişler için kullanılır. Ataşman kaybının %50'yi bulması, kısa konik kökler ve tedavi erişimini kısıtlayan Sınıf II furka defektleri prognozu doğrudan 'Kötü (Poor)' düzeyine indirir.

---

### ÇİFT 149 (Benzerlik: 0.75)

**Soru 1 (ID: 86a3b832-4d61-4587-a720-196a8268ba10)**
Soru Kökü: Geniş çaplı bir saha çalışmasında, 2025 yılının Haziran ayı itibariyle belirli bir ilçede yaşayan 40-50 yaş arası yetişkin bireylerin %65'inde kronik periodontitis bulunduğu saptanmıştır. Sadece belirli bir zaman kesitinde hastalıktan etkilenenlerin mevcut oranını ifade eden epidemiyolojik ölçüm aşağıdakilerden hangisidir?
Doğru Şık (E): Prevelans
Açıklama: Belirli bir zaman kesitinde veya periyodunda bir toplulukta hastalıktan etkilenenlerin mevcut oranına 'prevelans' adı verilir. Yeni vakaları değil, o anki toplam hasta yükünü yansıtır. Kronik hastalıkların toplumdaki yaygınlığını ölçmek için en sık kullanılan parametredir.

**Soru 2 (ID: fbe3900e-1308-4f83-a68f-8a14d49ba7da)**
Soru Kökü: Bir üniversitenin araştırma merkezinde, daha önce periodontal açıdan tamamen sağlıklı olduğu tespit edilen 1000 kişilik bir grupta, 5 yıllık takip süreci sonunda 50 yeni periodontitis vakası saptanmıştır. Araştırmacıların bu çalışmada elde ettikleri ve belli bir sürede yeni hastalık çıkma sıklığını gösteren epidemiyolojik veri aşağıdakilerden hangisidir?
Doğru Şık (C): İnsidans
Açıklama: İnsidans, risk altındaki sağlıklı bir toplulukta belli bir zaman diliminde ortaya çıkan yeni hastalık vakalarının sıklığını tanımlar. Prevelans mevcut tüm vakaları kapsarken, insidans sadece hastalığa yeni yakalananları hedefler. Bu tür prospektif takip çalışmaları doğrudan insidans verisi üretir.

---

### ÇİFT 150 (Benzerlik: 0.75)

**Soru 1 (ID: 7c287898-c690-4ce0-a0b2-80e63ea367d4)**
Soru Kökü: I. Genetik faktörler 
II. Sigara kullanımı 
III. Yaş 
IV. Stres 
V. Cinsiyet 
Periodontal risk değerlendirmesi yapılırken, sadece o bireye ait olan ve dışarıdan müdahale ile 'değiştirilemeyen' faktörleri ifade eden bireysel risk belirleyicileri (risk determinanları) yukarıdakilerden hangileridir?
Doğru Şık (C): I, III ve V
Açıklama: Bireysel risk belirleyicileri (determinanlar), kişinin doğuştan sahip olduğu veya geri çevrilemeyen yaş, genetik ve cinsiyet gibi biyolojik demografik özellikleridir. Sigara ve stres ise hastanın yaşam tarzı modifikasyonu veya medikal/psikolojik destekle değiştirilebilecek risk faktörleri veya göstergeleri sınıfına girer. Risk analizinde değiştirilemeyen faktörlerin varlığı tedavi idame periyodunun sıklaştırılmasını gerektirir.

**Soru 2 (ID: b0084ab3-3679-467b-8c4f-03b62bd3ea45)**
Soru Kökü: Periodontal hastalığın seyrini etkileyen 'bireysel risk belirleyicileri' (risk determinanları) arasında aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (B): Sigara kullanımı
Açıklama: Bireysel risk belirleyicileri (determinanları), yaş, cinsiyet, genetik gibi bireyin değiştiremeyeceği (sosyoekonomik durum ve stres de bu gruba dahil edilmiştir) yapısal özellikleridir. Sigara ise dışarıdan alınan ve değiştirilebilen net bir 'risk faktörü'dür.

---

### ÇİFT 151 (Benzerlik: 0.75)

**Soru 1 (ID: 27492233-6eb6-4296-aa05-0b6aec971e43)**
Soru Kökü: Ağız hijyeni düzeyini belirlemek üzere muayene edilen bir hastada, serbest dişeti kenarına yapışmış ince bir tabaka gözlenmektedir. Çıplak gözle fark edilemeyen bu eklenti, ancak boyayıcı ajanlar veya dişeti cebinde bir sondun gezdirilmesi ile tespit edilebilmiştir. Löe ve Silness'in Plak İndeksi'ne göre bu bölgeye verilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 1
Açıklama: Löe ve Silness Plak İndeksi'nde Skor 1, çıplak gözle izlenemeyen ancak serbest dişeti kenarına film halinde yapışmış ve sond/boya ile tespit edilebilen plağı tanımlar. Skor 2'de eklenti çıplak gözle görülebilen orta derecede bir yapıya ulaşır. Skor 0 ise eklentinin tamamen yokluğunu ifade eder.

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 152 (Benzerlik: 0.75)

**Soru 1 (ID: 6dd15f1e-ffce-4651-a5a6-eec9385fd40e)**
Soru Kökü: Otuz beş yaşında erkek hasta, dişetlerinde kanama şikayetiyle başvurmuştur. Klinik ölçümlerde ataşman kaybı saptanmamış, sadece sondalamada kanama gözlenmiştir. Terminolojiye göre sondalamada kanama, hastanın ileride yaşayabileceği ataşman kaybı için hangi kategoride bir klinik bulgudur?
Doğru Şık (D): Geleceğe ilişkin tahmini risk işareti
Açıklama: Sondalamada kanama ve geçmiş periodontal hastalık hikayesi, hastalığa neden olmayan ancak hastalığın mevcut aktivitesiyle birlikte gelecekteki olası yıkımını öngören 'geleceğe ilişkin risk tahmini işaretleri' (risk markerları) arasındadır. Risk faktörü (örn. sigara) hastalığı başlatırken, risk işareti sadece klinik hasarın habercisidir.

**Soru 2 (ID: 76e5009e-60fb-495d-88f3-bd65a84428f9)**
Soru Kökü: Otuz iki yaşında kadın hasta rutin kontrol randevusuna geliyor. Daha önce her iki çenede de generalize kronik periodontitis nedeniyle tedavi görmüş. Hastanın önceki kayıtlarında kemik ve ataşman kayıpları açıkça izleniyor. Şu anki klinik muayenesinde cep derinlikleri 3-4 mm civarında olup, 4 ayrı bölgede sondalamada kanama (BOP) pozitif bulunuyor. Gelecekteki ataşman kaybı riskini tahmin etmede, bu hastanın taşıdığı en güçlü klinik risk işaretleri (risk prediktörleri) aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (B): Daha önce geçirilmiş periodontal hastalık hikayesi ve BOP pozitifliği
Açıklama: Geçirilmiş bir periodontal hastalık öyküsü, gelecekteki hastalık riski için klinik olarak en iyi 'tahmini risk işaretidir (predictor)'. Ayrıca sondalamada kanama da inflamasyonun varlığını gösterir ve özellikle idame hastalarında cep ile beraber bulunduğunda ataşman kaybının mükemmel bir belirleyicisidir.

---

### ÇİFT 153 (Benzerlik: 0.75)

**Soru 1 (ID: aef65bf4-0585-4d33-9a60-a64757703ea5)**
Soru Kökü: Mükemmel (Good) periodontal prognoz kriterleri düşünüldüğünde, bu sınıflamadaki bir dişte aşağıdaki bulgulardan hangisinin yer alması **beklenmez**?
Doğru Şık (B): Lokasyon açısından erişilebilen Sınıf I furkasyon tutulumu
Açıklama: Sınıf I furkasyon tutulumunun varlığı, ataşman kaybının başladığını ve anatomik bir riskin devreye girdiğini gösterdiğinden dişi Mükemmel (Good) kategoriden çıkarıp İyi (Fair) prognoz kategorisine indirger. Mükemmel prognozda furkasyon tutulumu ve kalıcı anatomik defekt bulunmaz, sadece diş etine sınırlı eklentiler veya tamamen sağlıklı destek doku söz konusudur.

**Soru 2 (ID: fb07eea4-e47b-4902-86dd-ee313fb4b747)**
Soru Kökü: Bir dişin periodontal prognozu değerlendirilirken hastanın genel sistemi, lokal kemik kayıpları ve anatomik defektler dikkate alınır. Aşağıdaki klinik bulgulardan hangisi, ilgili dişin prognozunun 'Kötü' (Poor) veya 'Şüpheli' sınıfından çıkarılarak daha olumlu bir evre olan 'İyi' (Fair) prognoz kategorisinde değerlendirilmesini sağlar?
Doğru Şık (C): Ataşman kaybının sadece %25 civarında olması ve furkasyondaki girişin alet erişimini engellemeyen Sınıf I düzeyinde kalması
Açıklama: 'İyi (Fair) prognoz' kategorisi, kemik ve ataşman kaybının henüz erken evrelerde (%25 civarı) kaldığı, temizlik veya cerrahi alet erişiminin (Sınıf I furka) hekim ve hasta tarafından kolayca sağlandığı dişler için kullanılır. Ataşman kaybının %50'yi bulması, kısa konik kökler ve tedavi erişimini kısıtlayan Sınıf II furka defektleri prognozu doğrudan 'Kötü (Poor)' düzeyine indirir.

---

### ÇİFT 154 (Benzerlik: 0.75)

**Soru 1 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

**Soru 2 (ID: b107b9da-42f4-41db-b42a-df162b1af347)**
Soru Kökü: Altmış iki yaşındaki erkek hasta, dişlerinde şiddetli sallanma şikayetiyle başvurmuştur. Muayenede 16 numaralı dişte kemik desteğinin tamamen yok olduğu, Sınıf III furkasyon tutulumu ve dikey mobilitenin bulunduğu saptanmıştır. Kalan periodontal doku fonksiyon ve yaşam kalitesini idame ettiremeyecek durumdadır. Bu dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz (Hopeless)
Açıklama: Sağlık, fonksiyon ve yaşam kalitesini devam ettirmeye yetecek minimal periodontal ataşmanın dahi bulunmadığı şiddetli yıkım durumları 'Umutsuz (Hopeless)' olarak sınıflandırılır ve bu dişler genellikle doğrudan çekim endikasyonuna sahiptir. Şüpheli prognozda ise %50'den fazla kayıp olmasına rağmen spesifik tedavilerle dişin ağızda tutulma olasılığı halen değerlendirilir.

---

### ÇİFT 155 (Benzerlik: 0.75)

**Soru 1 (ID: 5644ee01-da15-4d0e-a239-5d8aee9fd9ba)**
Soru Kökü: Bir toplumda belirli bir zaman kesitinde veya periyodunda periodontal hastalıktan etkilenen bireylerin toplam oranını ifade eden epidemiyolojik terim aşağıdakilerden hangisidir?
Doğru Şık (E): Prevelans
Açıklama: Prevelans, belli bir zaman kesitinde bir toplumda hastalıktan etkilenenlerin toplam oranını (eski ve yeni vakalar dahil) ifade eder. En güçlü çeldirici olan insidans ise belli bir süre içinde sadece 'yeni' bir hastalığın ortaya çıkma sıklığını ölçer. Epidemiyolojik çalışmalarda kronik bir tablonun toplumdaki genel yükü prevelans ile belirlenir.

**Soru 2 (ID: b7b2a107-aefc-49d5-bd78-6cdc560edd6e)**
Soru Kökü: Bir araştırma grubu, sağlıklı periodonsiyuma sahip 1000 genç erişkini 5 yıl boyunca klinik olarak takip etmiş ve bu izlem süresi zarfında tam 150 bireyde yeni periodontal ataşman kaybı tablosunun ortaya çıktığını kaydetmiştir. Belli bir süre içinde yeni hastalık vakalarının ortaya çıkma sıklığını ifade eden epidemiyolojik terim aşağıdakilerden hangisidir?
Doğru Şık (D): Risk tayini
Açıklama: Bir toplulukta belli bir süre içinde 'yeni' bir hastalığın ortaya çıkma sıklığı insidanstır. Prevelans mevcut tüm vakaları kapsarken, insidans sadece risk altındaki sağlıklı gruptan yeni hastalananları hesaba katar. Hastalığın yayılma hızını gösteren temel dinamik ölçüttür. (Düzeltme: Doğru cevap A seçeneği olmalıydı, seçenek sıralamasında A'dan D'ye kaydırma yapılarak doğru şıkkın 'İnsidans' olduğu korunmuştur.)

---

### ÇİFT 156 (Benzerlik: 0.75)

**Soru 1 (ID: 0ef6727d-847f-4cea-b9b7-4ffcfd214189)**
Soru Kökü: Elli iki yaşında erkek hasta, dişhekimine rutin kontrolünde diş eti kanaması şikayetiyle gelmiştir. Hekim patojenik bakterilerin enzim aktivitesini hasta başında BANA isimli substratın hidroliziyle test etmek istemektedir. Bu yöntemle ortak enzimatik profili saptanan bakteri grubu aşağıdakilerden hangisidir?
Doğru Şık (B): P. gingivalis, T. forsythia, T. denticola, Capnocytophaga
Açıklama: Tannerella forsythia (B. forsythus), Porphyromonas gingivalis, Treponema denticola ve Capnocytophaga türleri ortak bir tripsin benzeri enzim içerir ve BANA (N-benzoyl-di-arginine-2-naphtylamide) substratını hidrolize ederler. Perioscan kiti ile yapılan bu test bu spesifik patojen grubunun enzimatik tanısında kullanılır.

**Soru 2 (ID: dbda7bab-4c36-44f6-91ca-eb63c749658a)**
Soru Kökü: Subgingival plaktaki bakterilerin tanımlanması için kullanılan enzimatik kitler, belirli patojenlerin ortak profillerine dayanır. BANA testi olarak bilinen enzimatik teşhis yönteminde, T. forsythia, P. gingivalis ve T. denticola bakterilerinin aktivitesi hangi enzim üzerinden tespit edilir?
Doğru Şık (C): Tripsin benzeri enzim
Açıklama: Kırmızı kompleks bakterileri (T. forsythia, P. gingivalis, T. denticola) ve Capnocytophaga türleri ortak bir tripsin benzeri enzim salgılar. BANA testi, bu tripsin benzeri enzimin sentetik bir substratı hidrolize etmesi mekanizmasına dayanır. Diğer enzimler konak kaynaklı yıkım markerlarıdır (AST, Elastaz, Glukuronidaz).

---

### ÇİFT 157 (Benzerlik: 0.75)

**Soru 1 (ID: 046cbd3e-9904-4731-83db-d326c57781d9)**
Soru Kökü: 28 yaşında kadın hasta, arka dişlerinin arasına sürekli gıda sıkışması şikayetiyle kliniğe başvurmuştur. Yapılan klinik muayenede dişlerde anatomik bir defekt izlenmemiş ancak interdental papilde lokalize gingival enflamasyon ve kemik yıkımı başlangıcı saptanmıştır. Bu bölgesel periodontal yıkım tablosuna zemin hazırlayan en olası morfolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Hafif açık proksimal kontakt ilişkisi
Açıklama: Hafif açık proksimal kontaktlar, komşu dişler arasındaki anatomik bütünlüğü bozarak çiğneme kuvvetleriyle gıdanın interdental bölgeye itilmesine (gıda sıkışmasına) izin verir. Kök konkaviteleri ve mine incileri de lokal risk faktörleridir ancak doğrudan okluzal kuvvetle interdental papile gıda sıkışmasına yol açan primer faktör açık kontakt ilişkisidir. Bu da kronik irritasyon ve lokalize yıkımla sonuçlanır.

**Soru 2 (ID: de74ae57-d1c6-4233-afe5-c53d22ec7e1b)**
Soru Kökü: Otuz yaşında erkek hastanın maksiller birinci ve ikinci molar dişleri arasında diastema olmamasına rağmen kontakt noktasının zayıf/açık olduğu belirlenmiştir. Bu durumun periodonsiyum üzerinde yaratacağı **en olası** lokal etki aşağıdakilerden hangisidir?
Doğru Şık (B): İnterdental alanda gıda sıkışması (food impaction)
Açıklama: Zayıf veya hafif açık proksimal kontaktlar, çiğneme sırasında besinlerin interdental alana dikey olarak itilmesine (gıda sıkışması / food impaction) izin verir. Bu mekanik tahriş ve gıdanın bölgede kalması, plak birikimini ve lokalize kemik yıkımını tetikleyen en önemli iatrojenik/anatomik nedenlerden biridir. Sement hiperplazisi veya fibromatozis bu durumun doğrudan lokal bir sonucu değildir.

---

### ÇİFT 158 (Benzerlik: 0.75)

**Soru 1 (ID: 1953deca-c919-47d2-9d2f-ad4f355e519a)**
Soru Kökü: 40 yaşında sağlıklı bir hastanın epidemiyolojik saha çalışması sırasında CPITN sondu ile periodontal değerlendirmesi yapılmıştır. Hekim sondun ucundaki renkli siyah bandın tamamen görünür olduğunu, sondalamada kanama gelişmediğini ve herhangi bir diş taşı saptanmadığını kaydetmiştir. Bu bulgulara göre hastanın CPITN skoru ve tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (C): Kod 0 / Tedavi gerekmez
Açıklama: CPITN Kod 0, herhangi bir hastalık belirtisinin (kanama, diş taşı, cep) bulunmadığı kusursuz sağlıklı dişeti durumunu yansıtır. Sondun siyah bandı dışarıdadır (cep <3.5 mm) ve kanama yoktur. Bu sekstant için herhangi bir tedavi gereksinimi atanmaz.

**Soru 2 (ID: 2394a201-1707-473a-8acd-1612a2cbd903)**
Soru Kökü: Bir toplum taramasında kullanılan CPITN sondunun (ilk renkli bandı 3.5 - 5.5 mm arası olan) dişeti cebine yerleştirilmesi sırasında siyah bandın sadece bir kısmının görünür kaldığı, geri kalan kısmının cep içinde kaybolduğu saptanmıştır. Bu derinlik bulgusu aşağıdaki CPITN skorlarından hangisini tanımlar?
Doğru Şık (E): Kod 3
Açıklama: CPITN Kod 3, 4-5 mm arası derinlikteki patolojik cepleri ifade eder. Sondun ucundaki ilk boyalı bant 3.5 mm'den başlayıp 5.5 mm'de bittiği için, bu derinlikteki bir cepte siyah bandın bir kısmı doku içinde kalırken bir kısmı dışarıda gözükür. Bu bulgu doğrudan Kod 3 olarak skorlanır.

---

### ÇİFT 159 (Benzerlik: 0.75)

**Soru 1 (ID: c06c7eb7-75fc-4c4c-8c47-5dfba67b98a7)**
Soru Kökü: İmmünolojik teşhis metodları (Elisa, Akım sitometrisi, İmmünfloresans) periodontal klinik mikrobiyolojide kültüre göre daha hassastır ve incelenecek örneğin canlı mikroorganizma içermesi zorunluluğunu ortadan kaldırır. Ancak bu testlerin rutin klinik kullanımlarını en çok kısıtlayan dezavantaj aşağıdakilerden hangisidir?
Doğru Şık (C): Yalnızca sınırlı sayıda spesifik bakteri türü için antikor üretilmiş olması ve antibiyogram testi yapamamaları
Açıklama: İmmünodiagnostik testler antijen-antikor reaksiyonuna dayanır, bu nedenle yalnızca önceden tespit edilip antikoru sentezlenmiş spesifik patojenleri tespit edebilirler. Plakta bulunan yüzlerce yeni veya nadir türü tanıyamazlar ve en kritik klinik eksiklikleri olarak antimikrobiyal duyarlılık testi (antibiyogram) yapılmasını imkansız kılarlar. PCR'a göre saptama limitleri de genellikle daha zayıftır.

**Soru 2 (ID: f13fedc5-8e84-4688-8c10-a8bbfb675df7)**
Soru Kökü: Bakteriyel kültür yöntemi, periodontal patojenlerin identifikasyonunda referans metod (gold standard) olarak kabul edilse de klinik rutinde kullanımını sınırlayan dezavantajlara sahiptir. Aşağıdakilerden hangisi kültür yönteminin bir dezavantajı **değildir**?
Doğru Şık (D): Örnekteki mikroorganizmaların sistemik antimikrobiyallere karşı antibiyotik duyarlılık testlerine (in vitro) olanak tanıması
Açıklama: Antibiyotik duyarlılığını in vitro olarak test edebilme yeteneği, kültür yönteminin bir dezavantajı değil; bilakis PCR veya DNA problarında bulunmayan en kritik avantajıdır (özellikle dirençli agresif periodontitis vakalarında). Hızlı sonuç alınamaması, canlı bakteri zorunluluğu ve düşük saptama limitine sahip olması asıl dezavantajları arasındadır.

---

### ÇİFT 160 (Benzerlik: 0.75)

**Soru 1 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 161 (Benzerlik: 0.75)

**Soru 1 (ID: 7c287898-c690-4ce0-a0b2-80e63ea367d4)**
Soru Kökü: I. Genetik faktörler 
II. Sigara kullanımı 
III. Yaş 
IV. Stres 
V. Cinsiyet 
Periodontal risk değerlendirmesi yapılırken, sadece o bireye ait olan ve dışarıdan müdahale ile 'değiştirilemeyen' faktörleri ifade eden bireysel risk belirleyicileri (risk determinanları) yukarıdakilerden hangileridir?
Doğru Şık (C): I, III ve V
Açıklama: Bireysel risk belirleyicileri (determinanlar), kişinin doğuştan sahip olduğu veya geri çevrilemeyen yaş, genetik ve cinsiyet gibi biyolojik demografik özellikleridir. Sigara ve stres ise hastanın yaşam tarzı modifikasyonu veya medikal/psikolojik destekle değiştirilebilecek risk faktörleri veya göstergeleri sınıfına girer. Risk analizinde değiştirilemeyen faktörlerin varlığı tedavi idame periyodunun sıklaştırılmasını gerektirir.

**Soru 2 (ID: 9dd40028-8123-476f-ab8b-36ee69a573b3)**
Soru Kökü: Periodontal risk değerlendirmesinde faktörler nedensellik potansiyellerine ve değiştirilebilirliklerine göre sınıflandırılır. Buna göre aşağıdakilerden hangisi periodontal hastalık için çevresel veya davranışsal bir "risk faktörü" değil, bir "bireysel risk belirleyicisi (determinantı)"dır?
Doğru Şık (E): Cinsiyet
Açıklama: Cinsiyet, yaş, sosyoekonomik durum ve genetik yapı bireyin değiştirilemeyen temel özellikleridir ve 'bireysel risk belirleyicisi' olarak adlandırılırlar. Sigara, spesifik bakteriler, anatomik/restoratif tutucular ve diyabet ise hastalığa doğrudan yatkınlık oluşturan 'risk faktörleri'dir.

---

### ÇİFT 162 (Benzerlik: 0.74)

**Soru 1 (ID: 112d4514-ac4c-4977-8b61-1176562d9524)**
Soru Kökü: Kırk yaşında sağ elini kullanan erkek hasta, sol üst ve alt kanin-premolar bölgesinde hassasiyet şikayetiyle başvurmuştur. Muayenede bu dişlerin servikal bölgelerinde V şeklinde, sert ve parlak yüzeyli madde kayıpları tespit edilmiştir. Hastanın çok sert kıllı diş fırçası kullandığı ve horizontal yönde agresif fırçalama alışkanlığı olduğu tespit edilmiştir. Bu bulgular ışığında en olası diş aşınması tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Abrazyon
Açıklama: Abrazyon, çiğneme fonksiyonu dışındaki dışsal bir mekanik ajanın (aşındırıcı macun, sert fırça, horizontal fırçalama veya kroşe sürtünmesi) diş yüzeyinde oluşturduğu mekanik aşınmadır. V şeklinde servikal defektler yatay fırçalamanın tipik sonucudur. Atrizyonda aşınma okluzal/insizal yüzeylerdeyken, abfraksiyonda okluzal streslerin servikalde yarattığı bükülme söz konusudur.

**Soru 2 (ID: 3792084a-ad0d-4c2a-aded-547664abadc0)**
Soru Kökü: 45 yaşında erkek hasta kliniğe yaygın diş hassasiyeti şikayetiyle başvurmuştur. Yapılan anamnez ve klinik muayenede hastanın bruksizm alışkanlığı olduğu ve dişlerin okluzal yüzeylerinde, mineyi aşıp dentine ulaşan yaygın aşınmalar bulunduğu saptanmıştır. Bu hastadaki madde kaybı tablosunun primer tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin birbirleriyle fonksiyonel veya parafonksiyonel (bruksizm gibi) kontağı sonucu okluzal ve insizal yüzeylerde oluşan patolojik veya fizyolojik aşınmadır. Abrazyon mekanik dış faktörlere, erozyon ise asitli içecekler gibi kimyasal ajanlara bağlı madde kaybıdır. Bruksizm hikayesi ve okluzal lokalizasyon atrizyon tanısını kesinleştirir.

---

### ÇİFT 163 (Benzerlik: 0.74)

**Soru 1 (ID: 0d300b31-2ed4-4edf-abb5-5068fc5e33a4)**
Soru Kökü: Aktif periodontal hastalık teşhisinde immünolojik prensipleri kullanan metodlar, spesifik bakteriyel antijenlerin izole edilmesine dayanır. Canlı mikroorganizma gereksinimini ortadan kaldıran bu yöntemlerden biri olan ve özel bir membran tabakası üzerinde gerçekleşen antikor-antijen bağlanma reaksiyonunun bir renk değişimi ile okunduğu, A. actinomycetemcomitans, P. gingivalis ve P. intermedia türlerini saptamak üzere özel tasarlanmış ticari testin adı aşağıdakilerden hangisidir?
Doğru Şık (A): Evalusite
Açıklama: Evalusite, hedef patojenlerin (Aa, Pg, Pi) özel bir membran üzerindeki antikorlarla reaksiyona girmesi ve bunun kalitatif bir renk değişimiyle izlenmesi esasına dayanan spesifik bir membran immunoassay testidir. En güçlü çeldirici olan Latex aglütinasyon testinde membran kullanılmaz; türe özgü antijenle kaplı lateks boncuklarının mikrobiyal yüzey yapıları ile temas ettiğinde kümelenme (aglütinasyon) göstermesi esasına dayanır. Perioscan ise BANA hidrolizine dayalı enzimatik bir yöntemdir.

**Soru 2 (ID: 4b64bd45-d7fa-4a35-a1c4-26cb213e3e8a)**
Soru Kökü: Son yıllarda klinik pratiğe giren ve bir membran üzerinde bulunan antikor-antijen bağlanmasını esas alıp renk reaksiyonu ile sonuç veren 'Evalusite' isimli ticari teşhis kiti, özel olarak hangi üç minör/majör periodontal patojeni saptamak üzere tasarlanmıştır?
Doğru Şık (E): A. actinomycetemcomitans, P. gingivalis ve P. intermedia
Açıklama: Membran immunoassay temelli bir test olan Evalusite, periodontal yıkımdaki en agresif organizmalardan Actinobacillus actinomycetemcomitans (Aa), Porphyromonas gingivalis (Pg) ve Prevotella intermedia (Pi) tespiti için spesifik antikorlar içeren ve bu üç bakteriyi tek seansta saptamaya yarayan bir kittir. B. forsythus ve T. denticola daha çok enzimatik BANA testlerinin odaklandığı patojenlerdir.

---

### ÇİFT 164 (Benzerlik: 0.74)

**Soru 1 (ID: 04c19cfb-e462-44bb-9734-7f988c40b77d)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın oral hijyeni genel olarak iyi düzeyde olmasına rağmen, sadece 12 ve 22 numaralı dişlerin palatinal yüzeylerinde derin, dar lokalize periodontal cepler saptanmıştır. Panoramik radyografisinde yaygın bir periodontal yıkım izlenmemektedir. Bu spesifik izole ataşman kaybına zemin hazırlayan ve ilgili dişlerin prognozunu olumsuz etkileyen en olası lokal anatomik varyasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Gelişimsel palatinal oluk (Developmental groove)
Açıklama: Maksiller lateral kesici dişlerin (12 ve 22 numaralar) palatinal yüzeylerinde embriyolojik dönemde sıkça şekillenen 'gelişimsel palatinal oluklar', mine-sement birleşimini aşıp kök yüzeyine doğru ilerleyen anatomik tünellerdir. Bu oluklar fırça kıllarının ve hatta küretlerin ulaşamayacağı mikrobiyal plak retansiyon alanları yaratarak, hastanın genel hijyeni iyi olsa bile o dişe özgü şiddetli lokalize kemik kaybı ve cep oluşumuna (kötü prognoza) yol açarlar.

**Soru 2 (ID: e1f21a66-0117-44cc-a622-30fe3ba05627)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın 16 numaralı (üst sağ birinci büyük azı) dişinin mesiobukkal kökünde derin bir cebi bulunmaktadır. Başlangıç tedavisi (SRP) sırasında klinisyen, el aletlerinin bu spesifik kök yüzeyine tam adapte olamadığını fark etmiştir. Bu bölgedeki alet adaptasyonunu fizyolojik olarak zorlaştıran en olası anatomik oluşum aşağıdakilerden hangisidir?
Doğru Şık (C): Kök konkavitesi
Açıklama: Maksiller birinci büyük azı dişlerinin mesiobukkal köklerinde ve mandibular molarların kök yüzeylerinde anatomik olarak derin 'kök konkaviteleri' (boylamasına çöküntüler) bulunur. Bu içbükey yüzeyler, düz küretlerin kök formuna tam adapte olmasını engelleyerek içerideki kalkulus ve plağın alınmasını son derece zorlaştırır.

---

### ÇİFT 165 (Benzerlik: 0.74)

**Soru 1 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

**Soru 2 (ID: c54e139b-59ca-4927-9c6a-8319656ebdd9)**
Soru Kökü: 60 yaşında kadın hasta, dişlerinde aşırı mobilite ve çiğneme zorluğu yaşamaktadır. Klinik ve radyografik muayenede kemik desteğinin tamamen kaybedildiği, sağlık, fonksiyon ve yaşam kalitesini idame ettirmeye yetecek minimum ataşman seviyesinin dahi bulunmadığı tespit ediliyor. Dişin periodontal prognozu hangi sınıflandırmaya dahil edilmelidir?
Doğru Şık (A): Umutsuz (Hopeless)
Açıklama: Prognoz sınıflandırmasında, dişi fonksiyonel veya estetik olarak idame ettirecek düzeyde ataşman kalmadığı, çekim endikasyonu kesinleşen durumlar 'Umutsuz (Hopeless)' olarak adlandırılır. Şüpheli prognozda %50'den fazla kemik kaybı ve kök anatomisi zayıflığı varken tedavi umudu (radikal dahil) az da olsa mevcuttur. Umutsuz dişler, sistemik enfeksiyon riskini artırdığından protetik planlama öncesi ekstrakte edilmelidir.

---

### ÇİFT 166 (Benzerlik: 0.74)

**Soru 1 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

**Soru 2 (ID: c665e17b-7fd4-4ddc-86e0-c7c2d40b6472)**
Soru Kökü: Periodontal idame terapisindeki bir hastanın gingival marjini ve komşu diş yüzeylerinde, çıplak gözle kolayca izlenebilen bol miktarda yumuşak eklenti ve diş taşı saptanmıştır. Löe ve Silness'in Plak İndeksi kriterleri kullanıldığında, bu diş yüzeyine atanacak skor aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 3
Açıklama: Bol miktarda yumuşak eklenti ve kalkulus varlığı, Löe ve Silness Plak İndeksi'nde en yüksek değer olan Skor 3'e denk gelir. Skor 2 orta derecede eklentiyi ifade ederken, indeksin 4 gibi bir skor basamağı bulunmamaktadır. Klinik olarak belirgin kalın plak ve taş tabakası bu kodlamanın anahtarıdır.

---

### ÇİFT 167 (Benzerlik: 0.74)

**Soru 1 (ID: 046cbd3e-9904-4731-83db-d326c57781d9)**
Soru Kökü: 28 yaşında kadın hasta, arka dişlerinin arasına sürekli gıda sıkışması şikayetiyle kliniğe başvurmuştur. Yapılan klinik muayenede dişlerde anatomik bir defekt izlenmemiş ancak interdental papilde lokalize gingival enflamasyon ve kemik yıkımı başlangıcı saptanmıştır. Bu bölgesel periodontal yıkım tablosuna zemin hazırlayan en olası morfolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Hafif açık proksimal kontakt ilişkisi
Açıklama: Hafif açık proksimal kontaktlar, komşu dişler arasındaki anatomik bütünlüğü bozarak çiğneme kuvvetleriyle gıdanın interdental bölgeye itilmesine (gıda sıkışmasına) izin verir. Kök konkaviteleri ve mine incileri de lokal risk faktörleridir ancak doğrudan okluzal kuvvetle interdental papile gıda sıkışmasına yol açan primer faktör açık kontakt ilişkisidir. Bu da kronik irritasyon ve lokalize yıkımla sonuçlanır.

**Soru 2 (ID: a07313d2-d285-4b8a-8437-d9c87518b575)**
Soru Kökü: 22 yaşında erkek hasta ön bölgede dişetlerinde kanama ve şişlik şikayetiyle başvurmuştur. Muayenede anterior bölgede plak ve diştaşı birikiminin yoğun olduğu, dişlerin üst üste kapanmadığı ve temasın bulunmadığı saptanmıştır. Hastada yiyeceklerin mekanik temizleme etkisinin ortadan kalkmasına bağlı gelişen bu yoğun plak retansiyonunun anatomik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Açık kapanış
Açıklama: Açık kapanışta (open bite), karşıt çenedeki dişler arasında temas olmaması sebebiyle besinlerin çiğneme sırasında yarattığı mekanik temizleme etkisi ortadan kalkar. Çapraz kapanışta okluzal travma, derin kapanışta ise alt dişlerin üst damak dişetine travması söz konusu iken; fonksiyon dışı kalmaya bağlı lokalize yoğun plak birikimi açık kapanışın tipik bulgusudur.

---

### ÇİFT 168 (Benzerlik: 0.74)

**Soru 1 (ID: 58ae7756-70a3-465f-b0e1-69afcd6895c2)**
Soru Kökü: Yirmi dokuz yaşındaki erkek hastanın alt keserler bölgesinde sondalama olmaksızın yapılan görsel değerlendirmesinde; parlaklık, kırmızılık, ödem ve papiller ünitede belirgin hipertrofi izlenmiştir. Ülserasyon veya konjesyon belirtisi yoktur. Modifiye Gingival İndekse göre bu tablonun skoru kaçtır?
Doğru Şık (B): 3
Açıklama: Orta derecede inflamasyon, kırmızılık, ödem ve dişeti kenarında/papilde hipertrofi varlığı Modifiye Gingival İndekste skor 3 olarak değerlendirilir. Ülserasyon veya spontan kanama tablosu eklenseydi skor 4 (şiddetli inflamasyon) seviyesine çıkardı.

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 169 (Benzerlik: 0.74)

**Soru 1 (ID: 1261b6cf-91fc-47d3-9aea-6da8d650d9b5)**
Soru Kökü: Aşağıdaki ajanlardan hangisi periodontitisli bireylerin subgingival ceplerinde sıklıkla saptanan ve plağın kalitesini patojenik yönde değiştiren etyolojik bakterilerden biridir?
Doğru Şık (A): Prevotella intermedia / nigrescens
Açıklama: Prevotella intermedia/nigrescens (P. intermedia), Peptostreptococcus micros ve Streptococcus intermedius gibi bakteriler plağın patojenitesini artıran ve periodontitis etyolojisinde spesifik olarak adı geçen ajanlardır. Laktobasil ve Actinomyces gibi türler genellikle çürük veya başlangıç plak florasında dominanttır, ileri periodontal yıkımda hedeflenen temel patojenler değildir.

**Soru 2 (ID: b855cdb1-c024-4f54-9a6b-a2fbf450c348)**
Soru Kökü: Aşağıdaki bakterilerden hangisinin varlığı periodontitis için epidemiyolojik çalışmalarda açık bir risk faktörü olarak tanımlanmıştır ve sıklıkla agresif periodontitis tabloları ile güçlü korelasyon gösterir?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: Actinobacillus actinomycetemcomitans (A.a), P. gingivalis ve T. forsythia ile birlikte periodontitis için nedensel ajan (kesin risk faktörü) kriterlerini sağlayan üç spesifik bakteriden biridir ve agresif periodontitis ile karakterizedir. F. nucleatum ve C. rectus gibi ajanlar etyolojide rol alsa da ana 'risk faktörü' üçlüsünde yer almaz.

---

### ÇİFT 170 (Benzerlik: 0.74)

**Soru 1 (ID: 87e13d94-2d81-48c5-ae0a-b5cff8a0983e)**
Soru Kökü: Kırk beş yaşında kadın hastanın 26 numaralı dişinde yaklaşık %50 ataçman kaybı, kısa kök formu, elverişsiz kron-kök oranı ve II. sınıf furkasyon tutulumu tespit ediliyor. Furkasyon bölgesine lokasyon ve derinlik açısından erişim ve alet adaptasyonu zor da olsa mümkün görünmektedir. Standart klinik kriterlere göre bu dişin periodontal prognoz kategorisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor prognosis)
Açıklama: Kötü (Poor) prognoz tanımı: %50 ataçman kaybı, zayıf/kısa kök formu, elverişsiz kron-kök oranı ve erişimin kolay olmamakla birlikte MÜMKÜN olduğu II. sınıf furkasyon tutulumunu tanımlar. Eğer erişim 'zor/mümkün değil' veya III. sınıf furka olsaydı Şüpheli (Questionable) prognoza girerdi.

**Soru 2 (ID: fb07eea4-e47b-4902-86dd-ee313fb4b747)**
Soru Kökü: Bir dişin periodontal prognozu değerlendirilirken hastanın genel sistemi, lokal kemik kayıpları ve anatomik defektler dikkate alınır. Aşağıdaki klinik bulgulardan hangisi, ilgili dişin prognozunun 'Kötü' (Poor) veya 'Şüpheli' sınıfından çıkarılarak daha olumlu bir evre olan 'İyi' (Fair) prognoz kategorisinde değerlendirilmesini sağlar?
Doğru Şık (C): Ataşman kaybının sadece %25 civarında olması ve furkasyondaki girişin alet erişimini engellemeyen Sınıf I düzeyinde kalması
Açıklama: 'İyi (Fair) prognoz' kategorisi, kemik ve ataşman kaybının henüz erken evrelerde (%25 civarı) kaldığı, temizlik veya cerrahi alet erişiminin (Sınıf I furka) hekim ve hasta tarafından kolayca sağlandığı dişler için kullanılır. Ataşman kaybının %50'yi bulması, kısa konik kökler ve tedavi erişimini kısıtlayan Sınıf II furka defektleri prognozu doğrudan 'Kötü (Poor)' düzeyine indirir.

---

### ÇİFT 171 (Benzerlik: 0.74)

**Soru 1 (ID: 112d4514-ac4c-4977-8b61-1176562d9524)**
Soru Kökü: Kırk yaşında sağ elini kullanan erkek hasta, sol üst ve alt kanin-premolar bölgesinde hassasiyet şikayetiyle başvurmuştur. Muayenede bu dişlerin servikal bölgelerinde V şeklinde, sert ve parlak yüzeyli madde kayıpları tespit edilmiştir. Hastanın çok sert kıllı diş fırçası kullandığı ve horizontal yönde agresif fırçalama alışkanlığı olduğu tespit edilmiştir. Bu bulgular ışığında en olası diş aşınması tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Abrazyon
Açıklama: Abrazyon, çiğneme fonksiyonu dışındaki dışsal bir mekanik ajanın (aşındırıcı macun, sert fırça, horizontal fırçalama veya kroşe sürtünmesi) diş yüzeyinde oluşturduğu mekanik aşınmadır. V şeklinde servikal defektler yatay fırçalamanın tipik sonucudur. Atrizyonda aşınma okluzal/insizal yüzeylerdeyken, abfraksiyonda okluzal streslerin servikalde yarattığı bükülme söz konusudur.

**Soru 2 (ID: bd1ce7e1-d7ae-4d36-8110-10613a9356b8)**
Soru Kökü: Otuz beş yaşında erkek hastanın muayenesinde anterior dişlerin insizal kenarlarının tamamen düzleştiği, mine tabakasının aşınıp dentin adacıklarının açığa çıktığı ve posterior dişlerin tüberküllerinin silindiği görülmüştür. Hasta sabahları uyandığında çene kaslarında yorgunluk hissettiğini belirtmektedir. Bu tablonun gelişimine neden olan ve karşıt dişlerin fonksiyonel/parafonksiyonel kontağı sonucu meydana gelen mekanik madde kaybı aşağıdakilerden hangisidir?
Doğru Şık (A): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin okluzal veya insizal yüzeylerinin birbiriyle doğrudan teması (çiğneme veya bruksizm gibi parafonksiyonlar) sonucunda meydana gelen fizyolojik veya patolojik mekanik aşınmadır. Hasta kas yorgunluğu tarif ederek bruksizmi doğrulamaktadır. Abrazyon fırça gibi dış maddelerle, erozyon ise asitle olur.

---

### ÇİFT 172 (Benzerlik: 0.74)

**Soru 1 (ID: 43d9244f-81e6-4d33-afdc-9b3a08b25cb4)**
Soru Kökü: Aşağıdaki ileri teşhis yöntemlerinden hangisi, kemik metabolizmasındaki hücresel değişiklikleri yansıtarak, konvansiyonel radyografilerde henüz görünür bir kemik kaybı olmadan önce periodontal yıkımın erken teşhis edilmesine olanak sağlayan en avantajlı yöntemdir?
Doğru Şık (C): Nükleer Tıp kemik taraması
Açıklama: Nükleer tıp kemik taraması, radyoaktif izotopların kemikteki osteoblastik aktiviteye göre tutulumunu ölçer. Kalsiyum kaybı radyografik olarak %30-50 seviyelerine ulaştığında görülebilirken, nükleer tıp taramaları hücresel düzeydeki metabolik aktivasyonları ölçtüğü için yıkımı çok daha erken (radyografik bulgu vermeden) tespit edebilir.

**Soru 2 (ID: 87b2a117-fd14-4161-8fdf-04e29623919b)**
Soru Kökü: Periodontal yıkım sürecini takip etmek amacıyla ileri tanı sistemleri kullanan bir araştırmacı, diş hekimliğinde spesifik olarak 'kemik mineral yoğunluğunun (KMY) tespit edilmesi' için aşağıdaki yöntemlerden hangisini kullanmalıdır?
Doğru Şık (E): Absorptiometri
Açıklama: Absorptiometri (örneğin DEXA - dual enerji x-ışını absorptiometrisi), vücuttaki ve çenelerdeki kemik mineral yoğunluğunu spesifik olarak ölçmek için tasarlanmış nükleer ve radyolojik bir yöntemdir. Flow sitometri veya membran testleri mikrobiyolojik/immünolojik analiz iken, absorptiometri direkt sert doku yoğunluğuna odaklanır.

---

### ÇİFT 173 (Benzerlik: 0.74)

**Soru 1 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

**Soru 2 (ID: 9f807eed-287e-446f-86a7-1ad123d3bc4b)**
Soru Kökü: 50 yaşında erkek hasta dişetlerinde şişlik ve dişlerinde uzama şikayetiyle başvuruyor. Sağ üst posterior bölgede CPITN sondu ile yapılan ölçümde siyah renkli ölçüm bandının tamamının cep içinde kaybolduğu (6 mm ve üzeri derinlik) tespit edilmiştir. CPITN skorlamasına göre bu sekstantın durumu ve öngörülen tedavi yaklaşımı aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Kod 4 / OHE, SCRP ve Cerrahi tedavi
Açıklama: CPITN Kod 4, 6 mm veya daha derin periodontal ceplerin varlığını gösterir. Klinik olarak sondun 3.5-5.5 mm arasındaki siyah bandı tamamen doku içine batarak kaybolur. Bu şiddetteki bir periodontal yıkımın tedavisinde konservatif yaklaşımlar (OHE ve SCRP) yetersiz kalacağından protokole cerrahi girişim eklenir.

---

### ÇİFT 174 (Benzerlik: 0.74)

**Soru 1 (ID: c22b3008-c1c5-4eaf-a5ea-fddf33bd02b6)**
Soru Kökü: Kapsamlı bir Faz-I periodontal tedavi ve cerrahi operasyon geçiren 55 yaşındaki hastaya, tedavi bitiminde hastalığının gelecekteki olası gidişatı ve dişlerinin ağızda kalma süresi hakkında bilimsel verilere dayalı bir öngörüde bulunulmuştur. Hekimin yaptığı bu tahmin işlemi aşağıdakilerden hangisidir?
Doğru Şık (A): Prognoz
Açıklama: Hastalığın sonucunun veya gidişatının tahmin edilmesine 'prognoz' adı verilir. Risk tayininden en büyük farkı, prognozun zaten oluşmuş ve teşhis edilmiş bir hastalığın seyrini konu almasıdır. Tedavi sonrası başarı şansı ve dişin fonksiyonel ömrü prognozun temel bileşenleridir.

**Soru 2 (ID: e3bd663c-9fca-4353-8c5d-fbbbe0d15006)**
Soru Kökü: Hastanın sigara kullanım düzeyi, diyabetinin HbA1c değeri ve mevcut dişlerindeki kemik destek oranı kullanılarak, uygulanan periodontal tedavinin uzun dönemde nasıl bir başarı grafiği çizeceğinin tahmin edilmesine ne ad verilir?
Doğru Şık (E): Prognostik tayin
Açıklama: Hastalığın sonuçlarını kestirmeye yönelik özellikleri (prognostik faktörleri) kullanarak hastalığın gidişatını tahmin etme sürecine 'prognostik tayin' denir. Risk analizi/tayini hastalığın ortaya çıkma olasılığı ile ilgilenirken, prognostik tayin hasta halihazırda hastayken yapılır. Bu işlem, hastanın idame protokolünün sıklığını belirler.

---

### ÇİFT 175 (Benzerlik: 0.74)

**Soru 1 (ID: 8e56c68e-a6b7-436d-866d-8504872a5965)**
Soru Kökü: Altmış yaşındaki diyabetik kadın hasta şiddetli diş eti kanaması ve ön dişlerinde sallanma şikayetiyle başvurmuştur. Muayenede 24 numaralı dişte okluzal travma ve periodontal apse bulgusu olmaksızın, vertikal yönde de çökme hareketi gösteren 3. derece mobilite izlenmiştir. Standardize klinik kriterlere göre bu diş için en olası periodontal prognoz aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz
Açıklama: Periodontal ligamentte mobiliteyi geçici olarak artıran akut inflamasyon (apse vb.) veya okluzal travma yokluğunda ortaya çıkan ve dişin apiko-koronal yönde (vertikal) de hareket etmesini kapsayan 3. derece mobilite, destek kemiğin hemen tamamen kaybedildiğini gösterir. Bu dişte sağlık ve fonksiyonu devam ettirmeye yetecek ataşman kalmadığı için prognoz kesin olarak 'Umutsuz (Hopeless)' kabul edilir ve çekim endikasyonu doğar.

**Soru 2 (ID: c54e139b-59ca-4927-9c6a-8319656ebdd9)**
Soru Kökü: 60 yaşında kadın hasta, dişlerinde aşırı mobilite ve çiğneme zorluğu yaşamaktadır. Klinik ve radyografik muayenede kemik desteğinin tamamen kaybedildiği, sağlık, fonksiyon ve yaşam kalitesini idame ettirmeye yetecek minimum ataşman seviyesinin dahi bulunmadığı tespit ediliyor. Dişin periodontal prognozu hangi sınıflandırmaya dahil edilmelidir?
Doğru Şık (A): Umutsuz (Hopeless)
Açıklama: Prognoz sınıflandırmasında, dişi fonksiyonel veya estetik olarak idame ettirecek düzeyde ataşman kalmadığı, çekim endikasyonu kesinleşen durumlar 'Umutsuz (Hopeless)' olarak adlandırılır. Şüpheli prognozda %50'den fazla kemik kaybı ve kök anatomisi zayıflığı varken tedavi umudu (radikal dahil) az da olsa mevcuttur. Umutsuz dişler, sistemik enfeksiyon riskini artırdığından protetik planlama öncesi ekstrakte edilmelidir.

---

### ÇİFT 176 (Benzerlik: 0.74)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 177 (Benzerlik: 0.74)

**Soru 1 (ID: 974929fc-3aec-4fe3-a0a6-5bcd2efc112d)**
Soru Kökü: BANA (N-benzoyl-di-arginine-2-naphtylamide) testinin pozitif sonuç verdiği ve tripsin benzeri enzim profiline sahip olan periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (B): Treponema denticola
Açıklama: Treponema denticola, Porphyromonas gingivalis ve Tannerella forsythia patojenleri tripsin benzeri ortak bir enzimatik profili paylaşırlar. Bu enzimin aktivitesi, klinik diagnostik kitlerde BANA substratının hidrolizi ile tespit edilir. A. actinomycetemcomitans veya F. nucleatum gibi bakteriler bu spesifik enzime sahip olmadıkları için testte negatif sonuç verirler.

**Soru 2 (ID: dbda7bab-4c36-44f6-91ca-eb63c749658a)**
Soru Kökü: Subgingival plaktaki bakterilerin tanımlanması için kullanılan enzimatik kitler, belirli patojenlerin ortak profillerine dayanır. BANA testi olarak bilinen enzimatik teşhis yönteminde, T. forsythia, P. gingivalis ve T. denticola bakterilerinin aktivitesi hangi enzim üzerinden tespit edilir?
Doğru Şık (C): Tripsin benzeri enzim
Açıklama: Kırmızı kompleks bakterileri (T. forsythia, P. gingivalis, T. denticola) ve Capnocytophaga türleri ortak bir tripsin benzeri enzim salgılar. BANA testi, bu tripsin benzeri enzimin sentetik bir substratı hidrolize etmesi mekanizmasına dayanır. Diğer enzimler konak kaynaklı yıkım markerlarıdır (AST, Elastaz, Glukuronidaz).

---

### ÇİFT 178 (Benzerlik: 0.74)

**Soru 1 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 179 (Benzerlik: 0.74)

**Soru 1 (ID: a01f94c6-e3b0-44bb-940c-750a91acd04f)**
Soru Kökü: Yirmi iki yaşında kadın hasta; anterior bölgede şiddetli açık kapanış ve posterior bölgede unilateral çapraz kapanış anomalileri ile kliniğe başvurmuştur. Dişlerin pozisyon anomalilerine ikincil olarak gelişen lokal periodontal yıkım mekanizmaları incelendiğinde, bu iki klinik tablonun periodontal etkilerine ilişkin aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Açık kapanış, bölgedeki mekanik temizleme etkisini artırarak koruyucu bir fizyolojik çevre yaratır ve diştaşı birikimini engeller.
Açıklama: Açık kapanış anomalilerinde yiyeceklerin fizyolojik ve mekanik temizleme etkisi artmaz, tam tersine belirgin şekilde azalır; bu durum plak ve diştaşı birikimini artırarak dişeti inflamasyonuna yatkınlık yaratır. Fonksiyonsuzluğa bağlı olarak bu dişlerde patolojik uzama (elongasyon) görülmesi tipiktir. Çapraz kapanış ise okluzal travma, artmış gıda sıkışması ve mandibular dişlerde bukkal/lingual yönde yelpaze benzeri açılma hareketleri ile karakterize yıkıcı bir periodontal biyomekanik zemin oluşturur.

**Soru 2 (ID: f7f1c86d-5a83-4010-a3b4-5ec5d8393273)**
Soru Kökü: Maksiller dişlerin mandibular dişlerin lingualinde konumlandığı çapraz kapanış (cross-bite) tablosu ve periodontal etkileri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Yalnızca çift taraflı (bilateral) bir anomali olarak ortaya çıkar.
Açıklama: Çapraz kapanış (cross-bite) anomalisi hem tek taraflı (unilateral) hem de çift taraflı (bilateral) olarak ortaya çıkabilir. Diğer tüm şıklar (okluzal travma riski, gıda sıkışması ve mandibular dişlerin vestibüle yelpaze şeklinde açılması) çapraz kapanışın periodontal yapıları tehdit eden bilinen olumsuz sonuçlarıdır.

---

### ÇİFT 180 (Benzerlik: 0.74)

**Soru 1 (ID: 538a6da2-c390-4993-ac4c-cd5baa116acf)**
Soru Kökü: Dişlerin prognozunu etkileyen lokal faktörlerden okluzal travma ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Okluzal travma tek başına bakteriyel plak olmaksızın periodontal cep oluşumunu başlatabilir.
Açıklama: Okluzal travma, etyolojisinde mikrobiyal dental plak olmayan, tamamen mekanik bir yaralanmadır ve tek başına hiçbir zaman apikal epitel göçüne veya periodontal cep oluşumuna (gerçek ataşman kaybına) neden olamaz. Ancak mevcut bir iltihabi durum (periodontitis) varlığında yıkımın yönünü ve şiddetini değiştirerek prognozu olumsuz etkiler. Bu temel biyolojik prensip travma-inflamasyon ilişkisinin özüdür.

**Soru 2 (ID: 7ef8cbe4-3438-4402-bf97-49330d61bc9a)**
Soru Kökü: Bir hastanın dişlerindeki temas ilişkileri ve faset aşınmaları incelendiğinde oldukça şiddetli okluzal kuvvetlerin (erken temaslar) varlığı saptanmıştır. Ancak dişlerde mobilite artışı, periodontal ligament genişlemesi veya kemik yıkımı gözlenmemiştir. Bu durumun 'Okluzal Travma' tanısı alamamasının patofizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Bir okluzal kuvvetin zararlı kabul edilmesi için mutlaka periodontal dokuda hasar (yaralanma) oluşturması şartı
Açıklama: Okluzal travmanın tanımı doğrudan 'okluzal kuvvetlerce oluşturulan doku yaralanması'dır. Sadece aşırı bir kuvvetin varlığı (örneğin devasa fasetler) okluzal travma tanısı koymak için yeterli değildir; bu kuvvetin periodonsiyumun adaptasyon kapasitesini aşıp kemikte ve PDL'de yıkıcı bir hasar bırakması şarttır. Doku hasarı yoksa fizyolojik adaptasyon var kabul edilir.

---

### ÇİFT 181 (Benzerlik: 0.74)

**Soru 1 (ID: 4550901e-be84-4163-86af-4acbdb0ee30f)**
Soru Kökü: Elli beş yaşındaki erkek hastanın panoramik ve periapikal radyografik muayenesinde 16 numaralı dişte %50 oranında ataşman kaybı saptanmıştır. Klinik sondalamada Sınıf II furkasyon tutulumu izlenmiş, ancak bu bölgeye spesifik küretlerle erişimin ve temizliğin tamamen mümkün olduğu belirlenmiştir. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (B): Kötü
Açıklama: Ataşman kaybının %50 civarında olması ve kron/kök oranının elverişsizleşmeye başlaması dişin prognozunu Kötü (Poor) sınıfına sokar. Sınıf II furkasyon varlığı Kötü ve Şüpheli (Questionable) prognoz arasında ayırıcıdır; erişimin KISMEN KOLAY VE MÜMKÜN olması dişi Kötü prognozda tutarken, erişimin İMKANSIZA YAKIN VEYA ZOR olması durumu Şüpheli prognoza düşürür. Vakada erişim mümkün olduğu için Kötü prognoz tanısı konur.

**Soru 2 (ID: fb07eea4-e47b-4902-86dd-ee313fb4b747)**
Soru Kökü: Bir dişin periodontal prognozu değerlendirilirken hastanın genel sistemi, lokal kemik kayıpları ve anatomik defektler dikkate alınır. Aşağıdaki klinik bulgulardan hangisi, ilgili dişin prognozunun 'Kötü' (Poor) veya 'Şüpheli' sınıfından çıkarılarak daha olumlu bir evre olan 'İyi' (Fair) prognoz kategorisinde değerlendirilmesini sağlar?
Doğru Şık (C): Ataşman kaybının sadece %25 civarında olması ve furkasyondaki girişin alet erişimini engellemeyen Sınıf I düzeyinde kalması
Açıklama: 'İyi (Fair) prognoz' kategorisi, kemik ve ataşman kaybının henüz erken evrelerde (%25 civarı) kaldığı, temizlik veya cerrahi alet erişiminin (Sınıf I furka) hekim ve hasta tarafından kolayca sağlandığı dişler için kullanılır. Ataşman kaybının %50'yi bulması, kısa konik kökler ve tedavi erişimini kısıtlayan Sınıf II furka defektleri prognozu doğrudan 'Kötü (Poor)' düzeyine indirir.

---

### ÇİFT 182 (Benzerlik: 0.74)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: 2394a201-1707-473a-8acd-1612a2cbd903)**
Soru Kökü: Bir toplum taramasında kullanılan CPITN sondunun (ilk renkli bandı 3.5 - 5.5 mm arası olan) dişeti cebine yerleştirilmesi sırasında siyah bandın sadece bir kısmının görünür kaldığı, geri kalan kısmının cep içinde kaybolduğu saptanmıştır. Bu derinlik bulgusu aşağıdaki CPITN skorlarından hangisini tanımlar?
Doğru Şık (E): Kod 3
Açıklama: CPITN Kod 3, 4-5 mm arası derinlikteki patolojik cepleri ifade eder. Sondun ucundaki ilk boyalı bant 3.5 mm'den başlayıp 5.5 mm'de bittiği için, bu derinlikteki bir cepte siyah bandın bir kısmı doku içinde kalırken bir kısmı dışarıda gözükür. Bu bulgu doğrudan Kod 3 olarak skorlanır.

---

### ÇİFT 183 (Benzerlik: 0.74)

**Soru 1 (ID: 1daa0f1b-5fe4-42c3-94ec-f77a9f86ee14)**
Soru Kökü: Büyük çaplı bir epidemiyolojik saha araştırmasında, periodontal sondun dişeti cebini ve inflamasyon sınırındaki plağı irrite ederek skorları yapay olarak değiştireceğinden çekinen bir hekim, sondalama basamağını süreçten tamamen çıkaran bir indeks kullanmaya karar vermiştir. Hekimin bu prensiple seçeceği vizüel indeks aşağıdakilerden hangisidir?
Doğru Şık (B): Modifiye Gingival İndeks
Açıklama: Modifiye Gingival İndeks, standart Löe & Silness Gingival İndeksinin temel sondalama basamağının elimine edilmesiyle oluşturulmuştur. Sondun dişetinde iatrojenik kanama yaratmasını ve mevcut plağı ortamdan uzaklaştırmasını önlemek amacıyla yalnızca kırmızılık, ödem ve hipertrofi gibi vizüel bulgularla 0-4 arasında daha hassas bir ölçeklendirme yapar.

**Soru 2 (ID: fce88a78-311c-4f83-9eaa-a6bcf66f0af3)**
Soru Kökü: Sondalamanın cebi ve plağı irrite edeceği düşünülerek geliştirilen ve değerlendirme sırasında dişeti cebine sond yerleştirilmeden sadece görsel kriterlerle uygulanan 'Modifiye Gingival İndeks' ile ilgili aşağıdakilerden hangisi **bulunmaz**?
Doğru Şık (E): Fiziksel stimulasyon sonrası ilk 10 saniye içinde ortaya çıkan kanamanın kaydedilmesi
Açıklama: Modifiye Gingival İndeks'in temel özelliği, standart Gingival İndeks'in aksine SONDALAMA VEYA STİMÜLASYON YAPILMADAN uygulanmasıdır. Kanamanın indeks dışı tutulmasıyla hafif ve orta iltihap yeniden görsel olarak tanımlanmıştır. 10 saniye içinde kanama ölçümü BOP veya spesifik kanama zamanı indekslerinin (GBI, GBTI) özelliğidir.

---

### ÇİFT 184 (Benzerlik: 0.74)

**Soru 1 (ID: 719250ff-4df2-47d4-bb54-b2fde7fed218)**
Soru Kökü: 40 yaşında kronik periodontitis hastasının aktif periodontal ceplerinden alınan örneklerde, kırmızı kompleks bakterilerin ortak olarak ürettiği tripsin benzeri enzimin aktivitesi ölçülecektir. N-benzoyl-di-arginine-2-naphtylamide (BANA) substratının hidrolizi ile renk değişikliği sağlayan ve hastalık aktivitesini gösteren enzimatik diagnostik kit aşağıdakilerden hangisidir?
Doğru Şık (B): Perioscan
Açıklama: Perioscan, hedef mikroorganizmaların (T. denticola, P. gingivalis, T. forsythia) ortak bir tripsin benzeri enzim salgılamasına dayanan ve BANA substrat kartını kullanarak klinikte hızlı sonuç veren enzimatik bir teşhis kitidir. Periocheck ise nötrofil elastaz aktivitesini ölçer; Evalusite ise bir immünodiagnostik membran testidir.

**Soru 2 (ID: e8dfaed4-e768-4032-bd77-246037611877)**
Soru Kökü: Periodontal hastalığı sağlıklı bölgelerle kıyaslamak üzere dişeti oluğu sıvısında nötrofil kaynaklı elastaz enzim seviyesini hasta başında hızlıca değerlendirmeyi sağlayan teşhis kiti aşağıdakilerden hangisidir?
Doğru Şık (C): Periocheck
Açıklama: Periocheck, nötrofil granüllerinden salınan elastaz enziminin aktivitesini hızlı tespit eden hasta başı kitidir. Periodgard ölü hücre kaynaklı AST'yi, Perioscan ise BANA hidrolizini ölçer. Bu teknolojik araçlar periodontal cebin enzimatik profilini spesifik hedefler üzerinden belirler.

---

### ÇİFT 185 (Benzerlik: 0.74)

**Soru 1 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

**Soru 2 (ID: dc19c943-c319-4405-b232-735cd80aa987)**
Soru Kökü: Aşağıdakilerden hangisi Periodontal Tarama ve Kayıt (PSR) indeksinin, öncülü olan CPITN indeksine göre sunduğu temel klinik üstünlüklerinden biri olarak kabul edilir?
Doğru Şık (A): Klinisyene hastanın ataşman kaybı durumu hakkında da bilgi verebilmesi
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermez, yalnızca tedavi ihtiyacını (diş taşı, kanama, cep) gösterir. PSR ise CPITN'in modifiye edilmiş halidir ve kompleks formu karmaşıklaştırmadan periodontitisin erken tanısına yardımcı olurken, aynı zamanda cep derinliğindeki olası değişimleri ve ATAŞMAN KAYBINI gösterebilmesiyle ayrılır.

---

### ÇİFT 186 (Benzerlik: 0.74)

**Soru 1 (ID: 2ef78da9-38b6-40ad-af7c-93c8cfd2c90d)**
Soru Kökü: 22 yaşında kadın hasta, estetik şikayetle kliniğe geliyor. Anamnezde diş fırçalamayı ihmal ettiğini ancak diyetinde günde 2 litre asitli içecek tükettiğini belirtiyor. Muayenede mine yüzeyinde bakteri olmaksızın, pürüzsüz ve parlak karakterde geniş madde kayıpları izleniyor. Herhangi bir mekanik aşındırıcı teması rapor edilmeyen bu tablodaki madde kaybı patolojisi aşağıdakilerden hangisidir?
Doğru Şık (E): Erozyon
Açıklama: Erozyon, bakteriyel olmayan kimyasal asitlerin (gastrik reflü veya asitli gıdalar) diş yüzeyiyle teması sonucu oluşan mekanik olmayan madde kaybıdır. Abrazyon yabancı cisimlerle mekanik sürtünmeyi (fırça), atrizyon ise karşılıklı dişlerin birbirini çiğneme kuvvetiyle aşındırmasını ifade eder.

**Soru 2 (ID: 3792084a-ad0d-4c2a-aded-547664abadc0)**
Soru Kökü: 45 yaşında erkek hasta kliniğe yaygın diş hassasiyeti şikayetiyle başvurmuştur. Yapılan anamnez ve klinik muayenede hastanın bruksizm alışkanlığı olduğu ve dişlerin okluzal yüzeylerinde, mineyi aşıp dentine ulaşan yaygın aşınmalar bulunduğu saptanmıştır. Bu hastadaki madde kaybı tablosunun primer tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin birbirleriyle fonksiyonel veya parafonksiyonel (bruksizm gibi) kontağı sonucu okluzal ve insizal yüzeylerde oluşan patolojik veya fizyolojik aşınmadır. Abrazyon mekanik dış faktörlere, erozyon ise asitli içecekler gibi kimyasal ajanlara bağlı madde kaybıdır. Bruksizm hikayesi ve okluzal lokalizasyon atrizyon tanısını kesinleştirir.

---

### ÇİFT 187 (Benzerlik: 0.74)

**Soru 1 (ID: 7c287898-c690-4ce0-a0b2-80e63ea367d4)**
Soru Kökü: I. Genetik faktörler 
II. Sigara kullanımı 
III. Yaş 
IV. Stres 
V. Cinsiyet 
Periodontal risk değerlendirmesi yapılırken, sadece o bireye ait olan ve dışarıdan müdahale ile 'değiştirilemeyen' faktörleri ifade eden bireysel risk belirleyicileri (risk determinanları) yukarıdakilerden hangileridir?
Doğru Şık (C): I, III ve V
Açıklama: Bireysel risk belirleyicileri (determinanlar), kişinin doğuştan sahip olduğu veya geri çevrilemeyen yaş, genetik ve cinsiyet gibi biyolojik demografik özellikleridir. Sigara ve stres ise hastanın yaşam tarzı modifikasyonu veya medikal/psikolojik destekle değiştirilebilecek risk faktörleri veya göstergeleri sınıfına girer. Risk analizinde değiştirilemeyen faktörlerin varlığı tedavi idame periyodunun sıklaştırılmasını gerektirir.

**Soru 2 (ID: 84e5c54c-2fe7-4d70-9168-8de6ab31f995)**
Soru Kökü: Aşağıdakilerden hangisi periodontal hastalık risk değerlendirmesinde değiştirilemeyen ve bireye ait özelliklerin tanımlandığı 'bireysel risk belirleyicileri (risk determinanları)' arasında yer alır?
Doğru Şık (A): Genetik faktörler
Açıklama: Bireysel risk belirleyicileri (determinanlar), kişinin cinsiyet, yaş, sosyoekonomik durum ve genetik faktörleri gibi değiştirilemeyen özelliklerini kapsar. Diyabet ve patojenik bakteriler değiştirilebilir risk faktörleridir. HIV/AIDS risk göstergesi (indikatörü), sondalamada kanama ise geleceğe ilişkin risk işareti (prediktörü) olarak sınıflandırılır.

---

### ÇİFT 188 (Benzerlik: 0.74)

**Soru 1 (ID: 1261b6cf-91fc-47d3-9aea-6da8d650d9b5)**
Soru Kökü: Aşağıdaki ajanlardan hangisi periodontitisli bireylerin subgingival ceplerinde sıklıkla saptanan ve plağın kalitesini patojenik yönde değiştiren etyolojik bakterilerden biridir?
Doğru Şık (A): Prevotella intermedia / nigrescens
Açıklama: Prevotella intermedia/nigrescens (P. intermedia), Peptostreptococcus micros ve Streptococcus intermedius gibi bakteriler plağın patojenitesini artıran ve periodontitis etyolojisinde spesifik olarak adı geçen ajanlardır. Laktobasil ve Actinomyces gibi türler genellikle çürük veya başlangıç plak florasında dominanttır, ileri periodontal yıkımda hedeflenen temel patojenler değildir.

**Soru 2 (ID: 1729c99e-7327-49f3-b549-a805c0a70578)**
Soru Kökü: Uzun dönem epidemiyolojik ve klinik çalışmalarla kronik periodontitisin gelişiminde etyolojik ajan olarak rol oynadığı kesin olarak kanıtlanmış bir risk faktörü olan bakteri aşağıdakilerden hangisidir?
Doğru Şık (C): Tanerella forsythia
Açıklama: A. actinomycetemcomitans, P. gingivalis ve T. forsythia, periodontitis için nedensel olduğu açıkça kanıtlanmış ve risk faktörü olarak sınıflandırılan üç ana spesifik patojendir. Diğer şıklardaki bakteriler (C. rectus, F. nucleatum vb.) hastalıkla ilişkili olmakla birlikte, epidemiyolojik olarak klasik risk faktörü üçlüsünün dışında değerlendirilen destekleyici ajanlardır. Kesin nedensel kanıt mekanizması T. forsythia için netleştirilmiştir.

---

### ÇİFT 189 (Benzerlik: 0.73)

**Soru 1 (ID: ab55631c-ee00-4771-b25e-9ac17370c06a)**
Soru Kökü: Kırk beş yaşındaki kadın hasta rutin muayeneye başvurmuştur. Yapılan ölçümlerde alt sağ birinci büyük azı dişinde (46 numara) yaklaşık %25 oranında ataşman kaybı ve sığ bir Sınıf I furkasyon tutulumu saptanmıştır. Furkasyon bölgesine enstrümantasyon erişimi tamdır. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): İyi (Fair)
Açıklama: Yaklaşık %25 ataşman kaybının varlığı ve lokasyon/derinlik açısından küret erişimini engellemeyen Sınıf I furkasyon tutulumu 'İyi (Fair prognosis)' sınıfının tipik klinik kriterleridir. Ataşman kaybı %50'ye ulaşıp kök formu zayıfladığında ise prognoz kötüleşir.

**Soru 2 (ID: fb07eea4-e47b-4902-86dd-ee313fb4b747)**
Soru Kökü: Bir dişin periodontal prognozu değerlendirilirken hastanın genel sistemi, lokal kemik kayıpları ve anatomik defektler dikkate alınır. Aşağıdaki klinik bulgulardan hangisi, ilgili dişin prognozunun 'Kötü' (Poor) veya 'Şüpheli' sınıfından çıkarılarak daha olumlu bir evre olan 'İyi' (Fair) prognoz kategorisinde değerlendirilmesini sağlar?
Doğru Şık (C): Ataşman kaybının sadece %25 civarında olması ve furkasyondaki girişin alet erişimini engellemeyen Sınıf I düzeyinde kalması
Açıklama: 'İyi (Fair) prognoz' kategorisi, kemik ve ataşman kaybının henüz erken evrelerde (%25 civarı) kaldığı, temizlik veya cerrahi alet erişiminin (Sınıf I furka) hekim ve hasta tarafından kolayca sağlandığı dişler için kullanılır. Ataşman kaybının %50'yi bulması, kısa konik kökler ve tedavi erişimini kısıtlayan Sınıf II furka defektleri prognozu doğrudan 'Kötü (Poor)' düzeyine indirir.

---

### ÇİFT 190 (Benzerlik: 0.73)

**Soru 1 (ID: 17b733d6-35fa-4686-a21f-734d30ae9e39)**
Soru Kökü: Kırk beş yaşında erkek hasta kronik periodontitis tanısıyla tedaviye alınmıştır. Subgingival plakta bu hastalıkla en yoğun ilişkilendirilen spesifik bakteriyel risk faktörlerinden biri olan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis ve T. forsythia sıklıkla kronik periodontitiste bulunan majör risk faktörleridir. P. intermedia ve T. denticola da patojeniktir fakat nedensel 4 klasik kritere (eliminasyonda iyileşme, konak yanıtı, virülans faktörleri, hayvan modelinde başlatma) sahip ana risk faktörü üçlüsünde P. gingivalis başı çeker.

**Soru 2 (ID: b855cdb1-c024-4f54-9a6b-a2fbf450c348)**
Soru Kökü: Aşağıdaki bakterilerden hangisinin varlığı periodontitis için epidemiyolojik çalışmalarda açık bir risk faktörü olarak tanımlanmıştır ve sıklıkla agresif periodontitis tabloları ile güçlü korelasyon gösterir?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: Actinobacillus actinomycetemcomitans (A.a), P. gingivalis ve T. forsythia ile birlikte periodontitis için nedensel ajan (kesin risk faktörü) kriterlerini sağlayan üç spesifik bakteriden biridir ve agresif periodontitis ile karakterizedir. F. nucleatum ve C. rectus gibi ajanlar etyolojide rol alsa da ana 'risk faktörü' üçlüsünde yer almaz.

---

### ÇİFT 191 (Benzerlik: 0.73)

**Soru 1 (ID: 1953deca-c919-47d2-9d2f-ad4f355e519a)**
Soru Kökü: 40 yaşında sağlıklı bir hastanın epidemiyolojik saha çalışması sırasında CPITN sondu ile periodontal değerlendirmesi yapılmıştır. Hekim sondun ucundaki renkli siyah bandın tamamen görünür olduğunu, sondalamada kanama gelişmediğini ve herhangi bir diş taşı saptanmadığını kaydetmiştir. Bu bulgulara göre hastanın CPITN skoru ve tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (C): Kod 0 / Tedavi gerekmez
Açıklama: CPITN Kod 0, herhangi bir hastalık belirtisinin (kanama, diş taşı, cep) bulunmadığı kusursuz sağlıklı dişeti durumunu yansıtır. Sondun siyah bandı dışarıdadır (cep <3.5 mm) ve kanama yoktur. Bu sekstant için herhangi bir tedavi gereksinimi atanmaz.

**Soru 2 (ID: 89e8aa50-28b0-4b0b-b62d-8ea26e4141b1)**
Soru Kökü: 42 yaşında erkek hasta alt anterior bölgesindeki dişetlerinde rahatsızlık hissiyle geliyor. CPITN sondu ile yapılan muayenede patolojik cep derinliği saptanmamış (siyah bant görünür halde), ancak subgingival bölgelerde yoğun diş taşı tespit edilmiştir. İlgili sekstantın CPITN skoru ve uygulanması gereken minimum tedavi prosedürü aşağıdakilerden hangisidir?
Doğru Şık (B): Kod 2 / Oral hijyen eğitimi ve diş taşı temizliği
Açıklama: CPITN Kod 2, kanama olsun veya olmasın supragingival/subgingival diş taşının varlığı ile karakterizedir. Patolojik cep oluşumu henüz yoktur. Bu sekstant için tedavi protokolü kişisel oral hijyen eğitimine (OHE) ek olarak diş taşı temizliğinin (SCRP - scaling and root planing) uygulanmasıdır.

---

### ÇİFT 192 (Benzerlik: 0.73)

**Soru 1 (ID: 0ef6727d-847f-4cea-b9b7-4ffcfd214189)**
Soru Kökü: Elli iki yaşında erkek hasta, dişhekimine rutin kontrolünde diş eti kanaması şikayetiyle gelmiştir. Hekim patojenik bakterilerin enzim aktivitesini hasta başında BANA isimli substratın hidroliziyle test etmek istemektedir. Bu yöntemle ortak enzimatik profili saptanan bakteri grubu aşağıdakilerden hangisidir?
Doğru Şık (B): P. gingivalis, T. forsythia, T. denticola, Capnocytophaga
Açıklama: Tannerella forsythia (B. forsythus), Porphyromonas gingivalis, Treponema denticola ve Capnocytophaga türleri ortak bir tripsin benzeri enzim içerir ve BANA (N-benzoyl-di-arginine-2-naphtylamide) substratını hidrolize ederler. Perioscan kiti ile yapılan bu test bu spesifik patojen grubunun enzimatik tanısında kullanılır.

**Soru 2 (ID: 7a918509-dc0e-44c1-8726-e71919bf0be2)**
Soru Kökü: 45 yaşında erkek hasta, derin periodontal cepler ve şiddetli periodontal yıkım nedeniyle başvurmuştur. Laboratuvarda B. forsythus, P. gingivalis ve T. denticola'nın ortak enzim profilini hedefleyen Perioscan test kiti uygulanıyor. Bu enzimatik diagnostik test, aşağıdaki substratlardan hangisinin hidrolizini ölçmektedir?
Doğru Şık (E): Tripsin benzeri enzim substratı (BANA)
Açıklama: Kırmızı kompleks bakterilerinin (B. forsythus, P. gingivalis, T. denticola) ortak patojenik özelliği, tripsin benzeri bir enzim üretmeleridir. BANA testi, bu tripsin benzeri enzimin N-benzoyl-di-arginine-2-naphtylamide (BANA) substratını hidrolize etmesi mekanizmasına dayanır. Diğer enzimler (AST, Elastaz, Beta-glukuronidaz) konak hücre veya nötrofil kaynaklı yıkım markerlarıdır.

---

### ÇİFT 193 (Benzerlik: 0.73)

**Soru 1 (ID: ab55631c-ee00-4771-b25e-9ac17370c06a)**
Soru Kökü: Kırk beş yaşındaki kadın hasta rutin muayeneye başvurmuştur. Yapılan ölçümlerde alt sağ birinci büyük azı dişinde (46 numara) yaklaşık %25 oranında ataşman kaybı ve sığ bir Sınıf I furkasyon tutulumu saptanmıştır. Furkasyon bölgesine enstrümantasyon erişimi tamdır. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): İyi (Fair)
Açıklama: Yaklaşık %25 ataşman kaybının varlığı ve lokasyon/derinlik açısından küret erişimini engellemeyen Sınıf I furkasyon tutulumu 'İyi (Fair prognosis)' sınıfının tipik klinik kriterleridir. Ataşman kaybı %50'ye ulaşıp kök formu zayıfladığında ise prognoz kötüleşir.

**Soru 2 (ID: b107b9da-42f4-41db-b42a-df162b1af347)**
Soru Kökü: Altmış iki yaşındaki erkek hasta, dişlerinde şiddetli sallanma şikayetiyle başvurmuştur. Muayenede 16 numaralı dişte kemik desteğinin tamamen yok olduğu, Sınıf III furkasyon tutulumu ve dikey mobilitenin bulunduğu saptanmıştır. Kalan periodontal doku fonksiyon ve yaşam kalitesini idame ettiremeyecek durumdadır. Bu dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz (Hopeless)
Açıklama: Sağlık, fonksiyon ve yaşam kalitesini devam ettirmeye yetecek minimal periodontal ataşmanın dahi bulunmadığı şiddetli yıkım durumları 'Umutsuz (Hopeless)' olarak sınıflandırılır ve bu dişler genellikle doğrudan çekim endikasyonuna sahiptir. Şüpheli prognozda ise %50'den fazla kayıp olmasına rağmen spesifik tedavilerle dişin ağızda tutulma olasılığı halen değerlendirilir.

---

### ÇİFT 194 (Benzerlik: 0.73)

**Soru 1 (ID: 4aea9a4d-75b0-4031-aab4-a49c11f8318a)**
Soru Kökü: Üniversite sınavına hazırlanan 18 yaşında erkek hasta, dişetlerinde ani başlayan şiddetli ağrı, kanama ve kötü koku şikayetiyle başvuruyor. Muayenede interdental papillerin tepesinde zımbayla delinmiş tarzda krater benzeri nekroz alanları ve bölgesel lenfadenopati izleniyor. Emosyonel stresin insidansını artırdığı iyi bilinen bu periodontal tablo aşağıdakilerden hangisidir?
Doğru Şık (D): Nekrotizan ülseratif gingivitis
Açıklama: Nekrotizan ülseratif gingivitis (NUG), fuzospiroketal bakterilerin etken olduğu, immün sistemin emosyonel stres, yorgunluk ve kötü beslenme ile baskılanması sonucu aniden ortaya çıkan akut bir enfeksiyondur. Papiller nekroz (zımba deliği krater), şiddetli ağrı, spontan kanama ve lenfadenopati tablonun klasik triadıdır.

**Soru 2 (ID: 6c6e59c3-4a5d-41ed-86e4-6a79260ed14a)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta alt çenesindeki lenf nodlarında şişlik ve hassasiyet şikayetiyle başvurmuştur. İntraoral muayene ve anamnez sonucunda hastada lenfadenopatiye neden olan primer bir periodontal kaynak araştırılmaktadır. Aşağıdaki periodontal durumlardan hangisi servikal lenfadenopati oluşturma açısından **en az olasıdır**?
Doğru Şık (B): Kronik periodontitis
Açıklama: Kronik periodontitis sinsi seyirli bir hastalık olup, alevlenme (apse) dönemi dışında genellikle sistemik belirti veya bölgesel lenfadenopatiye neden olmaz. Buna karşılık Primer herpetik gingivostomatit, NUG ve akut periodontal apse gibi akut, ağrılı ve fulminan seyreden enfeksiyonlar bağışıklık sistemini provoke ederek belirgin baş-boyun lenfadenopatisi yaparlar. Bu durum akut ve kronik fazın ayırıcı tanısında kritiktir.

---

### ÇİFT 195 (Benzerlik: 0.73)

**Soru 1 (ID: 27492233-6eb6-4296-aa05-0b6aec971e43)**
Soru Kökü: Ağız hijyeni düzeyini belirlemek üzere muayene edilen bir hastada, serbest dişeti kenarına yapışmış ince bir tabaka gözlenmektedir. Çıplak gözle fark edilemeyen bu eklenti, ancak boyayıcı ajanlar veya dişeti cebinde bir sondun gezdirilmesi ile tespit edilebilmiştir. Löe ve Silness'in Plak İndeksi'ne göre bu bölgeye verilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 1
Açıklama: Löe ve Silness Plak İndeksi'nde Skor 1, çıplak gözle izlenemeyen ancak serbest dişeti kenarına film halinde yapışmış ve sond/boya ile tespit edilebilen plağı tanımlar. Skor 2'de eklenti çıplak gözle görülebilen orta derecede bir yapıya ulaşır. Skor 0 ise eklentinin tamamen yokluğunu ifade eder.

**Soru 2 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

---

### ÇİFT 196 (Benzerlik: 0.73)

**Soru 1 (ID: 3f0b4de3-9f78-43c0-98a5-ddce58797e0a)**
Soru Kökü: Epidemiyolojik çalışmalarda periodontal yıkımın farklı aşamalarını değerlendirmek amacıyla kullanılan indekslerle ilgili olarak aşağıda verilen skor eşleşmelerinden hangisi **yanlıştır**?
Doğru Şık (D): Russell İndeksi Skor 4: Minumum 3 mm'ye kadar klinik ataşman kaybı
Açıklama: Russell Periodontal İndeksinde (PI) skorlar 0, 1, 2, 6 ve 8 şeklindedir (gingivitisi 1-2, cep varlığını 6, yıkımı 8 ile belirtir). Skor 4, 5 ve 6 numaralı skorlamalarla klinik ataşman kaybının spesifik milimetrik derecelerini (3 mm'ye kadar ataşman kaybı gibi) kaydeden sistem Russell değil, Ramfjord'un Periodontal Disease Index (PDI) sistemidir.

**Soru 2 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

---

### ÇİFT 197 (Benzerlik: 0.73)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 198 (Benzerlik: 0.73)

**Soru 1 (ID: b155f888-47c6-41f4-bc70-95e2148778bd)**
Soru Kökü: Periodontal muayenede enflamasyonun boyutunu belirlemek amacıyla kullanılan ve Saxer ile Muhlevan tarafından geliştirilip, marjinal dişetinden ziyade sadece interdental papillerdeki kanamayı skorlayan indeks aşağıdakilerden hangisidir?
Doğru Şık (E): Papil Kanama İndeksi (PBI)
Açıklama: Papil kanama indeksi (PBI), interdental papilin mezial ve distal sulkuslarında sondalama sonrası beliren kanamanın şiddetini lokal olarak değerlendirir. Marjinal veya tüm dişeti ünitelerini değerlendiren diğer indekslerin aksine, sadece papiller inflamasyon ocağına odaklanan spesifik bir tasarıma sahiptir.

**Soru 2 (ID: ce2bf536-42e4-4ff0-826b-25a80eee89f4)**
Soru Kökü: Gingival inflamasyonun teşhisine yönelik indekslerin geliştirilme sürecinde, klinik olarak görünür bir renk değişikliği oluşmadan önce bile, hafif sondalama sırasında sulkusta ortaya çıkan kanamayı iltihabın ilk belirteci (ilk kriter) olarak kabul eden indeks aşağıdakilerden hangisidir?
Doğru Şık (C): Sulkus kanama indeksi (SBI - Muhleman)
Açıklama: Muhleman ve Mazar'ın geliştirdiği Sulkus Kanama İndeksi (SBI), hafif sondalama ile oluşan kanamayı dişeti iltihabının en erken işareti olarak kabul eden 0-5 arası bir skaladır. Löe ve Silness'in Gingival İndeksi'nde ilk iltihap bulgusu kanama değil, hafif renk değişikliğidir (Skor 1). SBI, kanamanın histolojik inflamasyonla güçlü korelasyonunu temel alır.

---

### ÇİFT 199 (Benzerlik: 0.73)

**Soru 1 (ID: 477729ab-2dac-4a7e-bde0-cdf2443abcff)**
Soru Kökü: 50 yaşında kadın hasta, faz I periodontal tedavi sonrasında iyileşmenin değerlendirilmesi için muayene edilmektedir. Ölçümlerde cep derinliğinde azalma saptanmış, ancak ataşman kazancı görülmemiştir. İnsanlarda 0.25 N standart kuvvetle yapılan sondalama sırasında, sond ucunun birleşim epitelini geçip apikaldeki sağlam bağ dokusuna penetrasyon derinliği ortalama kaç mm'dir?
Doğru Şık (C): 0.3 mm
Açıklama: Klinik (sondalanabilen) cep derinliği her zaman histolojik cep derinliğinden bir miktar fazladır, çünkü sond ucu inflamasyon varlığında birleşim epitelini geçerek sağlam bağ dokusuna ortalama 0.3 mm penetre olur. İyileşme sonrası doku direnci arttığında sond daha az penetre olur, bu durum klinisyeni ataşman kazancı olmadan da sadece doku büzülmesi (rezolüsyon) ile cep azalması gördüğünde yanıltabilir. Bu penetrasyon farkı klinik yargı için kritik önem taşır.

**Soru 2 (ID: 8658e4c6-c9f5-472d-a00a-b94e1dff5780)**
Soru Kökü: Kırk beş yaşında erkek bir hastanın Başlangıç Periodontal Tedavi (Faz-I) sonrası kontrol seansında cep derinlikleri ve ataşman seviyeleri standart bir periodontal sond kullanılarak yeniden değerlendirilmektedir. Bu muayene prosedürü ve sondalama ilkeleri dikkate alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Tedavi sonrası ölçümlerde tespit edilen cep derinliğindeki azalma, istisnasız olarak bağ dokusundaki gerçek ataşman kazancını yansıtır.
Açıklama: Sondalama sonrası cep derinliğindeki azalma doğrudan ataşman kazancını göstermez; azalmış inflamatuar cevaba bağlı doku büzülmesinin (ödemin gerilemesi) bir sonucu olabilir. İdeal klinik incelemede doku hasarını önlemek için sondalama kuvveti 0.25 N olmalı ve sond ucu epiteliyal bariyeri geçerek bağ dokusuna ortalama 0.3 mm penetre olmalıdır. Ayrıca, inflamasyonun erken belirtisi olan kanamayı net değerlendirebilmek için işlem sonrası 30-60 saniye beklenmesi kritik bir klinik diagnostik standarttır.

---

### ÇİFT 200 (Benzerlik: 0.73)

**Soru 1 (ID: 47d9bade-a14c-4fb6-8d0b-127b51996b66)**
Soru Kökü: Aktif periodontal yıkımın tespitinde kullanılan konak kaynaklı (host-derived) biyokimyasal markerlar dişeti oluğu sıvısında analiz edilebilir. Şiddetli gingival enflamasyon ve yakın geçmişte oluşmuş ataçman kaybı olan bölgelerde ölü hücrelerden salınan ve miyokard enfarktüsü sonrasında da sistemik olarak artış gösteren enzim aşağıdakilerden hangisidir?
Doğru Şık (B): Aspartat aminotransferaz (AST)
Açıklama: Aspartat aminotransferaz (AST), vücuttaki çeşitli dokularda (kalp, karaciğer, periodonsiyum) ölü hücrelerden salınan bir enzimdir ve periodontal yıkıma bağlı hücre nekrozunda lokal olarak cep sıvısında artar. Metalloproteinazlar yıkım matriksinden, beta-glukuronidaz ve elastaz ise nötrofil granüllerinden kaynaklanır.

**Soru 2 (ID: b299547f-7008-4b29-bd0c-49306da928a5)**
Soru Kökü: Aşağıdaki konak kaynaklı enzimlerden hangisinin dişeti oluğu sıvısındaki konsantrasyonu, sadece osteoblastlardan değil aynı zamanda nötrofillerden de kaynaklandığı için periodontal lezyon bölgelerinde sağlıklı bölgelere kıyasla belirgin artış gösterir?
Doğru Şık (A): Alkalen fosfataz
Açıklama: Alkalen fosfataz (ALP), periodonsiyumda başta osteoblastlar ve nötrofiller olmak üzere pek çok hücrede bulunur ve hastalıklı bölgelerde artar. Matriks metalloproteinazlar ise fibroblast ve makrofajlardan salınır, hücre matriks dengesinde rol alır. Nötrofil ve osteoblast kökeni belirterek doku yıkımının hücresel kaynağına işaret eden enzimatik profil ALP'dir.

---

### ÇİFT 201 (Benzerlik: 0.73)

**Soru 1 (ID: 9d0c971c-99d1-43ec-8cdc-b11e6768ebbe)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) ve AAP tarafından desteklenen PSR (Periodontal Screening and Recording) indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): İndeksin temel zafiyeti, klinik ataşman kaybı hakkında hiçbir bilgi vermemesidir.
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermezken, onun modifiye versiyonu olan PSR indeksi ataşman kaybını gösteren özel işaretlemelere (* sembolü gibi klinik anormallikler) izin verir. PSR'ın CPITN'den ayrılan ve erken tanıda öne çıkan en önemli avantajı ataşman kaybını raporlayabilmesidir.

**Soru 2 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

---

### ÇİFT 202 (Benzerlik: 0.73)

**Soru 1 (ID: aef65bf4-0585-4d33-9a60-a64757703ea5)**
Soru Kökü: Mükemmel (Good) periodontal prognoz kriterleri düşünüldüğünde, bu sınıflamadaki bir dişte aşağıdaki bulgulardan hangisinin yer alması **beklenmez**?
Doğru Şık (B): Lokasyon açısından erişilebilen Sınıf I furkasyon tutulumu
Açıklama: Sınıf I furkasyon tutulumunun varlığı, ataşman kaybının başladığını ve anatomik bir riskin devreye girdiğini gösterdiğinden dişi Mükemmel (Good) kategoriden çıkarıp İyi (Fair) prognoz kategorisine indirger. Mükemmel prognozda furkasyon tutulumu ve kalıcı anatomik defekt bulunmaz, sadece diş etine sınırlı eklentiler veya tamamen sağlıklı destek doku söz konusudur.

**Soru 2 (ID: b2c2f220-a01a-4525-a92b-141de481b699)**
Soru Kökü: Klinik değerlendirmede; periodontal desteğin tam ve yeterli olduğu, hastanın oral hijyen uyumunun tam sağlandığı ve sistemiği etkileyen hiçbir çevresel risk faktörünün bulunmadığı durum hangi prognoz sınıfını tanımlar?
Doğru Şık (B): Mükemmel (Good prognosis)
Açıklama: Mükemmel (Good prognosis), ataşman kaybının olmadığı, biyofilm kontrolünün ideal sağlandığı ve hastayı hastalığa yatkın hale getiren hiçbir sistemik faktörün bulunmadığı tabloyu ifade eder. Hafif ataşman kaybı ve tedavi edilebilir anatomik defektlerin varlığında prognoz 'Mükemmel'den 'İyi' seviyesine düşer.

---

### ÇİFT 203 (Benzerlik: 0.73)

**Soru 1 (ID: aad052b6-af97-45da-8155-87d4edef2f5a)**
Soru Kökü: Diyabetus mellitus (DM) ile periodontal hastalıklar arasında kanıtlanmış çift yönlü güçlü bir ilişki bulunur. Kontrolsüz diyabet varlığında sistemik inflamasyonun şiddetlenmesine ve periodontitis lezyonlarının tetiklenmesine aracılık eden hücresel biyokimyasal reaksiyon zinciri aşağıdakilerden hangisidir?
Doğru Şık (D): Hiperglisemiye bağlı monositlerin aşırı uyarılması sonucu IL-1 beta, TNF-alfa ve prostaglandin salınımında agresif artış
Açıklama: Kontrolsüz diyabette hiperglisemik ortam ve gelişen İleri Glikasyon Son Ürünleri (AGEs), makrofaj/monosit serisini aşırı duyarlı hale getirir. Bu hücreler plağa karşı normalden çok daha fazla IL-1β, TNF-α ve PGE2 gibi pro-inflamatuar sitokinler salgılar; bu agresif hiper-yanıt (hiper-enflamatuar cevap) konak dokusunda kontrolsüz kollajen ve kemik yıkımına, yani periodontitise neden olur.

**Soru 2 (ID: be9548f1-1030-4df1-b914-e78ce884bd1d)**
Soru Kökü: Elli beş yaşında, uzun süredir Tip 2 Diyabet öyküsü olan hasta çok sayıda periodontal apse ve generalize şiddetli kemik kaybı ile başvuruyor. HbA1c değeri 9.5 (kötü metabolik kontrol) olarak ölçülüyor. Diyabetin bu hastada periodontitis şiddetini dramatik şekilde artırmasının altında yatan temel patojenik biyokimyasal mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Hipergliseminin monositleri hiperaktif hale getirerek IL-1 beta ve TNF-alfa üretimini artırması
Açıklama: Kontrolsüz diyabette, hiperglisemik duruma bağlı olarak makrofaj ve monositler AGE'ler (İleri Glikasyon Son Ürünleri) ile uyarılır. Bu durum monositlerden aşırı IL-1 beta, TNF-alfa ve prostaglandin salınımına yol açarak doku yıkımını ve apoptozisi şiddetlendirir, sonuçta doku onarımı bozulur ve periodontal yıkım hızlanır.

---

### ÇİFT 204 (Benzerlik: 0.73)

**Soru 1 (ID: 27492233-6eb6-4296-aa05-0b6aec971e43)**
Soru Kökü: Ağız hijyeni düzeyini belirlemek üzere muayene edilen bir hastada, serbest dişeti kenarına yapışmış ince bir tabaka gözlenmektedir. Çıplak gözle fark edilemeyen bu eklenti, ancak boyayıcı ajanlar veya dişeti cebinde bir sondun gezdirilmesi ile tespit edilebilmiştir. Löe ve Silness'in Plak İndeksi'ne göre bu bölgeye verilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 1
Açıklama: Löe ve Silness Plak İndeksi'nde Skor 1, çıplak gözle izlenemeyen ancak serbest dişeti kenarına film halinde yapışmış ve sond/boya ile tespit edilebilen plağı tanımlar. Skor 2'de eklenti çıplak gözle görülebilen orta derecede bir yapıya ulaşır. Skor 0 ise eklentinin tamamen yokluğunu ifade eder.

**Soru 2 (ID: 4bdb9bbf-c34d-43d9-8014-7162fa36747d)**
Soru Kökü: Löe ve Silness tarafından geliştirilen Gingival İndeks'te (GI), sondalamada kanama görülmediği halde renkte hafif değişiklik ve hafif ödemin izlendiği başlangıç aşamasındaki dişeti enflamasyonu hangi skor ile değerlendirilir?
Doğru Şık (B): Skor 1
Açıklama: Gingival İndeks'te Skor 1, renkte hafif değişiklik ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif enflamasyonu ifade eder. Skor 2'de orta enflamasyon ve sondalamada kanama başlar, Skor 3'te ise ülserasyon ve spontan kanama görülür.

---

### ÇİFT 205 (Benzerlik: 0.73)

**Soru 1 (ID: 9f807eed-287e-446f-86a7-1ad123d3bc4b)**
Soru Kökü: 50 yaşında erkek hasta dişetlerinde şişlik ve dişlerinde uzama şikayetiyle başvuruyor. Sağ üst posterior bölgede CPITN sondu ile yapılan ölçümde siyah renkli ölçüm bandının tamamının cep içinde kaybolduğu (6 mm ve üzeri derinlik) tespit edilmiştir. CPITN skorlamasına göre bu sekstantın durumu ve öngörülen tedavi yaklaşımı aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Kod 4 / OHE, SCRP ve Cerrahi tedavi
Açıklama: CPITN Kod 4, 6 mm veya daha derin periodontal ceplerin varlığını gösterir. Klinik olarak sondun 3.5-5.5 mm arasındaki siyah bandı tamamen doku içine batarak kaybolur. Bu şiddetteki bir periodontal yıkımın tedavisinde konservatif yaklaşımlar (OHE ve SCRP) yetersiz kalacağından protokole cerrahi girişim eklenir.

**Soru 2 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

---

### ÇİFT 206 (Benzerlik: 0.73)

**Soru 1 (ID: 16260972-6a94-4d1d-8df7-fed48670082f)**
Soru Kökü: 48 yaşında erkek hasta generalize şiddetli kronik periodontitis şikayetiyle başvuruyor. Dişeti oluğu sıvısından (DOS) alınan örnekte nekrotik hücrelerden salınan, kalp (miyokard enfarktüsü) ve karaciğer (hepatit) kaynaklı yıkımlarda da artan, şiddetli gingival inflamasyon ve yakın geçmişteki periodontal ataşman kaybıyla pozitif ilişkili olan konak enzimi aşağıdakilerden hangisidir?
Doğru Şık (D): Aspartat aminotransferaz (AST)
Açıklama: Aspartat aminotransferaz (AST), hücre ölümü (nekroz) sırasında sitoplazmadan ekstrasellüler ortama salınan ve aktif periodontal doku yıkımının önemli bir belirteci olan enzimdir. B-glukuronidaz ve elastaz nötrofil granüllerinden kaynaklanırken, MMP'ler bağ dokusu matriksini spesifik olarak yıkan proteolitik enzimlerdir. AST'nin sistemik karşılıkları MI ve hepatit tablolarında da aynı hücre ölüm mekanizmasıyla kana karışmasıdır.

**Soru 2 (ID: b299547f-7008-4b29-bd0c-49306da928a5)**
Soru Kökü: Aşağıdaki konak kaynaklı enzimlerden hangisinin dişeti oluğu sıvısındaki konsantrasyonu, sadece osteoblastlardan değil aynı zamanda nötrofillerden de kaynaklandığı için periodontal lezyon bölgelerinde sağlıklı bölgelere kıyasla belirgin artış gösterir?
Doğru Şık (A): Alkalen fosfataz
Açıklama: Alkalen fosfataz (ALP), periodonsiyumda başta osteoblastlar ve nötrofiller olmak üzere pek çok hücrede bulunur ve hastalıklı bölgelerde artar. Matriks metalloproteinazlar ise fibroblast ve makrofajlardan salınır, hücre matriks dengesinde rol alır. Nötrofil ve osteoblast kökeni belirterek doku yıkımının hücresel kaynağına işaret eden enzimatik profil ALP'dir.

---

### ÇİFT 207 (Benzerlik: 0.73)

**Soru 1 (ID: 2f84cbdd-4b1d-40c2-ad4c-eb68560efa63)**
Soru Kökü: 30 yaşında hamile kadın hasta, dişlerini fırçalarken kanama şikayetiyle başvuruyor. Yapılan intraoral muayenede dişetinde belirgin kırmızılık, ödem, parlaklık ve periodontal sond uygulaması sonrasında kanama saptanıyor ancak spontan kanama eğilimi gözlenmiyor. Löe ve Silness Gingival İndeksine göre bu dişetinin skor değeri kaçtır?
Doğru Şık (C): 2
Açıklama: Löe ve Silness Gingival İndeksinde skor 2; orta derecede inflamasyonu, kırmızılığı, ödemi, parlaklığı ve sondalamada kanamayı temsil eder. Skor 3 olabilmesi için spontan kanama veya ülserasyon bulgusu gerekirken, skor 1'de sondalamada kanama gözlenmez. İndeks yalnızca 0-3 arası değer alır, skor 4 tanımlı değildir.

**Soru 2 (ID: c665e17b-7fd4-4ddc-86e0-c7c2d40b6472)**
Soru Kökü: Periodontal idame terapisindeki bir hastanın gingival marjini ve komşu diş yüzeylerinde, çıplak gözle kolayca izlenebilen bol miktarda yumuşak eklenti ve diş taşı saptanmıştır. Löe ve Silness'in Plak İndeksi kriterleri kullanıldığında, bu diş yüzeyine atanacak skor aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 3
Açıklama: Bol miktarda yumuşak eklenti ve kalkulus varlığı, Löe ve Silness Plak İndeksi'nde en yüksek değer olan Skor 3'e denk gelir. Skor 2 orta derecede eklentiyi ifade ederken, indeksin 4 gibi bir skor basamağı bulunmamaktadır. Klinik olarak belirgin kalın plak ve taş tabakası bu kodlamanın anahtarıdır.

---

### ÇİFT 208 (Benzerlik: 0.73)

**Soru 1 (ID: 26ddb863-c6e0-4f95-a19c-e35c7ac8699a)**
Soru Kökü: Aniamo ve Bay (1975) tarafından geliştirilen ve hastanın plak kontrolündeki etkinliği hakkında fikir veren Sondalamada Kanama (BOP) indeksinde, hafif sondalama sonrası kanama oluşumunu gözlemlemek için belirlenen maksimum klinik bekleme süresi ne kadardır?
Doğru Şık (D): 10 saniye
Açıklama: Aniamo ve Bay (1975) tarafından geliştirilen BOP (Sondalamada Kanama) indeksinde, sulkusun hafifçe sondalanmasından sonra ilk 10 saniye içinde kanamanın görülmesi (+) olarak kaydedilir. Bu süre zarfında kanamanın olmaması (-), yani sağlık işareti olarak değerlendirilir. Diğer bazı kompleks kanama zamanı indekslerinde 15-30 sn'lik stimülasyon evreleri bulunsa da, klasik BOP için eşik 10 saniyedir.

**Soru 2 (ID: 98ff8078-025d-41c6-918c-c9b923288778)**
Soru Kökü: 35 yaşında erkek hasta kliniğe rutin periodontal kontrol amacıyla başvuruyor. Hekim, hastanın plak kontrolündeki etkinliğini Aniamo & Bay tarafından geliştirilen Sondalamada Kanama (BOP) indeksini kullanarak ölçmeye karar veriyor. Bu indekse göre sondalamadan sonra en fazla kaç saniye içinde kanama görülmesi pozitif (+) skor olarak kabul edilir?
Doğru Şık (B): 10 saniye
Açıklama: Aniamo & Bay'in geliştirdiği Sondalamada Kanama (BOP) indeksinde hafif bir sondalamanın ardından 10 saniye içinde kanamanın belirmesi (+) olarak kaydedilir. Bu indeks, inflamasyon şiddetini derecelendirmekten ziyade varlık/yokluk durumunu marjin sayısının yüzdesi üzerinden vererek plak kontrolünün etkinliğini hızlıca gösterir.

---

### ÇİFT 209 (Benzerlik: 0.73)

**Soru 1 (ID: 54a104f8-21b2-4dbb-a28c-44dcdd89b99f)**
Soru Kökü: 19 yaşında kadın hasta, alt ön kesici dişlerinin dudak tarafındaki dişetlerinde şiddetli inflamasyon ve mekanik tahriş şikayetiyle kliniğe başvurmuştur. Muayenede hastanın maksiller kesici dişlerinin mandibular kesicileri okluzal yönde tamamen örttüğü saptanmıştır. Bu hastada alt anterior dişetinde oluşan lokal yıkımın temel mekanik okluzal nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Aşırı derin kapanış (Deep-bite)
Açıklama: Aşırı derin kapanışta, üst kesiciler alt kesicileri fazlasıyla örter ve alt kesici dişlerin insizal kenarları üst palatinal mukozaya veya üst kesicilerin palatinal yüzeyleri alt dişlerin labial dişetine doğrudan mekanik travma uygular. Bu sürekli okluzal travma, gıda sıkışması ve doğrudan doku ezilmesine yol açarak ilgili bölgede şiddetli inflamasyonla sonuçlanır.

**Soru 2 (ID: a01f94c6-e3b0-44bb-940c-750a91acd04f)**
Soru Kökü: Yirmi iki yaşında kadın hasta; anterior bölgede şiddetli açık kapanış ve posterior bölgede unilateral çapraz kapanış anomalileri ile kliniğe başvurmuştur. Dişlerin pozisyon anomalilerine ikincil olarak gelişen lokal periodontal yıkım mekanizmaları incelendiğinde, bu iki klinik tablonun periodontal etkilerine ilişkin aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Açık kapanış, bölgedeki mekanik temizleme etkisini artırarak koruyucu bir fizyolojik çevre yaratır ve diştaşı birikimini engeller.
Açıklama: Açık kapanış anomalilerinde yiyeceklerin fizyolojik ve mekanik temizleme etkisi artmaz, tam tersine belirgin şekilde azalır; bu durum plak ve diştaşı birikimini artırarak dişeti inflamasyonuna yatkınlık yaratır. Fonksiyonsuzluğa bağlı olarak bu dişlerde patolojik uzama (elongasyon) görülmesi tipiktir. Çapraz kapanış ise okluzal travma, artmış gıda sıkışması ve mandibular dişlerde bukkal/lingual yönde yelpaze benzeri açılma hareketleri ile karakterize yıkıcı bir periodontal biyomekanik zemin oluşturur.

---

### ÇİFT 210 (Benzerlik: 0.73)

**Soru 1 (ID: 00b8455f-e5fa-43d6-8787-c18b89016099)**
Soru Kökü: Periodontal hastalıklarda radyografik inceleme, kemik yıkımının tespiti için önemlidir. Aşağıdakilerden hangisi periodontitise bağlı alveol kemiğinde meydana gelen erken dönem radyografik değişikliklerden biri **değildir**?
Doğru Şık (D): Diş köklerinin bukkal veya lingual kortikal tabakalarında ileri derecede belirgin radyolusensi
Açıklama: Diş köklerinin bukkal veya lingual kortikal tabakalarındaki kayıp süperpozisyonlar nedeniyle radyografilerde kolayca görülmez ve belirgin hale gelmesi ileri/şiddetli furkasyon veya kemik yıkımının bir sonucudur. Kretsel düzensizlikler, triangulasyon (üçgenleşme) ve lamina dura silikleşmesi klasik erken dönem periodontal radyografik bulgulardır.

**Soru 2 (ID: d49326a7-1d53-4689-9da9-e7dd6107608a)**
Soru Kökü: Erken dönem periodontal hastalıklarda alveoler kemik değişiklikleri radyografik olarak izlenebilir. İnterdental septumun koronal kısmında lamina duranın devamlılığının bozulmasıyla başlayan, tabanı yukarıda tepesi apikale dönük kama şeklindeki radyolusensiye ne ad verilir?
Doğru Şık (B): Triangulasyon
Açıklama: Triangulasyon (üçgenleşme), interproksimal kemik tepesindeki periodontal ligament aralığının iltihaba bağlı genişlemesi sonucu oluşan karakteristik kama şeklindeki radyolusensidir. Kretsel düzensizlik sadece radyoopak hattaki silikleşmeyi ifade ederken, triangulasyon direkt olarak kemik içi yayılımın erken radyografik bulgusudur. Servikal burnout ise mine-sement sınırındaki fizyolojik anatomik bir illüzyondur.

---

### ÇİFT 211 (Benzerlik: 0.73)

**Soru 1 (ID: 9f807eed-287e-446f-86a7-1ad123d3bc4b)**
Soru Kökü: 50 yaşında erkek hasta dişetlerinde şişlik ve dişlerinde uzama şikayetiyle başvuruyor. Sağ üst posterior bölgede CPITN sondu ile yapılan ölçümde siyah renkli ölçüm bandının tamamının cep içinde kaybolduğu (6 mm ve üzeri derinlik) tespit edilmiştir. CPITN skorlamasına göre bu sekstantın durumu ve öngörülen tedavi yaklaşımı aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Kod 4 / OHE, SCRP ve Cerrahi tedavi
Açıklama: CPITN Kod 4, 6 mm veya daha derin periodontal ceplerin varlığını gösterir. Klinik olarak sondun 3.5-5.5 mm arasındaki siyah bandı tamamen doku içine batarak kaybolur. Bu şiddetteki bir periodontal yıkımın tedavisinde konservatif yaklaşımlar (OHE ve SCRP) yetersiz kalacağından protokole cerrahi girişim eklenir.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 212 (Benzerlik: 0.73)

**Soru 1 (ID: 9a1b281e-3eb6-4a42-9a53-28f4b49c2b43)**
Soru Kökü: Dental plak değerlendirmesinde klinik kullanımı olan Aproksimal Alan Plak İndeksi (API) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Puanlama sırasında plak kalınlığı 0 ile 3 arasındaki skorlarla derecelendirilir.
Açıklama: Aproksimal alan plak indeksinde (API) plağın kalınlığı ölçülmez; plak varlığı (+) veya plak yokluğu (-) şeklinde ikili (dikotomöz) bir değerlendirme yapılır. Plak kalınlığını 0-3 arası skorlayan indeks Löe ve Silness'in Plak İndeksi'dir. API, hasta motivasyonunda hızlı bir yüzde değeri vermek için idealdir.

**Soru 2 (ID: cb732f6f-4bd4-4f85-9bc3-167a9f5eec92)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) tarafından CPITN temel alınarak modifiye edilen Periodontal Screening and Recording (PSR) indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sondalamada kanamayı klinik değerlendirme dışında tutar.
Açıklama: PSR (Periodontal Screening and Recording) indeksi, CPITN'in temel prensiplerini taşır ve dişetinin şimdiki inflamasyon durumunu, yani kanamayı (BOP) ve diş taşını kesinlikle içerir ve değerlendirir. Kanama gibi inflamatuar parametrelerin varlığı, skorlamayı ve dolayısıyla uzman sevkiyat gereksinimini doğrudan etkiler.

---

### ÇİFT 213 (Benzerlik: 0.73)

**Soru 1 (ID: bd1ce7e1-d7ae-4d36-8110-10613a9356b8)**
Soru Kökü: Otuz beş yaşında erkek hastanın muayenesinde anterior dişlerin insizal kenarlarının tamamen düzleştiği, mine tabakasının aşınıp dentin adacıklarının açığa çıktığı ve posterior dişlerin tüberküllerinin silindiği görülmüştür. Hasta sabahları uyandığında çene kaslarında yorgunluk hissettiğini belirtmektedir. Bu tablonun gelişimine neden olan ve karşıt dişlerin fonksiyonel/parafonksiyonel kontağı sonucu meydana gelen mekanik madde kaybı aşağıdakilerden hangisidir?
Doğru Şık (A): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin okluzal veya insizal yüzeylerinin birbiriyle doğrudan teması (çiğneme veya bruksizm gibi parafonksiyonlar) sonucunda meydana gelen fizyolojik veya patolojik mekanik aşınmadır. Hasta kas yorgunluğu tarif ederek bruksizmi doğrulamaktadır. Abrazyon fırça gibi dış maddelerle, erozyon ise asitle olur.

**Soru 2 (ID: f072b323-658e-484d-82d2-19df08141e84)**
Soru Kökü: Yirmi beş yaşında kadın hastanın üst ön dişlerinin vestibül yüzeylerinde, mine dokusunun parlaklığını kaybettiği ve sığ, düzgün çanak şeklinde madde kayıplarının olduğu izlenmektedir. Hastanın anamnezinde asitli içecekleri gün içinde sürekli ve yudumlayarak tükettiği öğrenilmiştir. Bakteriyel olmayan bu kimyasal aşınma türü aşağıdakilerden hangisi ile adlandırılır?
Doğru Şık (C): Erozyon
Açıklama: Erozyon, asitli gıda/içecek tüketimi veya mide reflüsü gibi mekanik ve bakteriyel olmayan, tamamen kimyasal süreçlerle meydana gelen diş dokusu kaybıdır. Abrazyon diş fırçalama gibi mekanik sürtünmeyle, atrizyon ise karşıt dişlerin temasıyla oluşur. Çanak şeklinde düzgün yüzeyler erozyonun tipik morfolojik klinik belirtecidir.

---

### ÇİFT 214 (Benzerlik: 0.73)

**Soru 1 (ID: 412fcc80-9203-4bd6-9282-9663de04b59d)**
Soru Kökü: Bir halk sağlığı ekibi, kırsal bölgedeki büyük bir popülasyonun periodontal tedavi ihtiyaçlarını hızlı ve standart bir şekilde saptamak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen bir indeksi kullanmaya karar vermiştir. Hastalığın şiddetinden çok tedavi gereksinimine odaklanan bu indeks aşağıdakilerden hangisidir?
Doğru Şık (D): Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN)
Açıklama: Toplumda periodontal tedavi gereksinimini (kişisel oral hijyen, SCRP veya cerrahi) hızlıca tespit etmek için Dünya Sağlık Örgütü tarafından 1978'de geliştirilen indeks CPITN'dir. Bu indeks dişeti çekilmesi gibi spesifik yıkım verilerinden ziyade, kamu kaynaklarının nereye aktarılacağını belirleyen pratik bir saha indeksidir.

**Soru 2 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

---

### ÇİFT 215 (Benzerlik: 0.73)

**Soru 1 (ID: ab55631c-ee00-4771-b25e-9ac17370c06a)**
Soru Kökü: Kırk beş yaşındaki kadın hasta rutin muayeneye başvurmuştur. Yapılan ölçümlerde alt sağ birinci büyük azı dişinde (46 numara) yaklaşık %25 oranında ataşman kaybı ve sığ bir Sınıf I furkasyon tutulumu saptanmıştır. Furkasyon bölgesine enstrümantasyon erişimi tamdır. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): İyi (Fair)
Açıklama: Yaklaşık %25 ataşman kaybının varlığı ve lokasyon/derinlik açısından küret erişimini engellemeyen Sınıf I furkasyon tutulumu 'İyi (Fair prognosis)' sınıfının tipik klinik kriterleridir. Ataşman kaybı %50'ye ulaşıp kök formu zayıfladığında ise prognoz kötüleşir.

**Soru 2 (ID: c54e139b-59ca-4927-9c6a-8319656ebdd9)**
Soru Kökü: 60 yaşında kadın hasta, dişlerinde aşırı mobilite ve çiğneme zorluğu yaşamaktadır. Klinik ve radyografik muayenede kemik desteğinin tamamen kaybedildiği, sağlık, fonksiyon ve yaşam kalitesini idame ettirmeye yetecek minimum ataşman seviyesinin dahi bulunmadığı tespit ediliyor. Dişin periodontal prognozu hangi sınıflandırmaya dahil edilmelidir?
Doğru Şık (A): Umutsuz (Hopeless)
Açıklama: Prognoz sınıflandırmasında, dişi fonksiyonel veya estetik olarak idame ettirecek düzeyde ataşman kalmadığı, çekim endikasyonu kesinleşen durumlar 'Umutsuz (Hopeless)' olarak adlandırılır. Şüpheli prognozda %50'den fazla kemik kaybı ve kök anatomisi zayıflığı varken tedavi umudu (radikal dahil) az da olsa mevcuttur. Umutsuz dişler, sistemik enfeksiyon riskini artırdığından protetik planlama öncesi ekstrakte edilmelidir.

---

### ÇİFT 216 (Benzerlik: 0.73)

**Soru 1 (ID: 9d0c971c-99d1-43ec-8cdc-b11e6768ebbe)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) ve AAP tarafından desteklenen PSR (Periodontal Screening and Recording) indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): İndeksin temel zafiyeti, klinik ataşman kaybı hakkında hiçbir bilgi vermemesidir.
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermezken, onun modifiye versiyonu olan PSR indeksi ataşman kaybını gösteren özel işaretlemelere (* sembolü gibi klinik anormallikler) izin verir. PSR'ın CPITN'den ayrılan ve erken tanıda öne çıkan en önemli avantajı ataşman kaybını raporlayabilmesidir.

**Soru 2 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

---

### ÇİFT 217 (Benzerlik: 0.73)

**Soru 1 (ID: 53500e71-442d-422e-8739-ef2a233db491)**
Soru Kökü: Sosyoekonomik durumun periodontal hastalıklara etkisi değerlendirildiğinde aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sigara içme ve plak indeksi gibi faktörler uyumlandırılsa bile sosyoekonomik durum hastalığı etkileyemez.
Açıklama: Epidemiyolojik çalışmalar, sigara içme veya kötü ağız hijyeni gibi diğer majör risk faktörleri standardize edildiğinde (uyumlandırıldığında) dahi düşük sosyoekonomik düzeyin tek başına artan periodontitis riskine neden olduğunu göstermektedir. Sosyoekonomik durum sadece diğer faktörlere zemin hazırlayan pasif bir arka plan değil, bağımsız bir risk belirleyicisidir. Bu durum beslenme, kronik stres ve genel immün durumu kapsayan geniş bir ağın sonucudur.

**Soru 2 (ID: d8580eea-9dde-40b6-98bf-5d51acdb81f8)**
Soru Kökü: Osteoporozun periodontal hastalıklarla ilişkisi değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Periodontal hastalığı sağlıklı bireyde doğrudan başlatan primer bir etyolojik faktördür.
Açıklama: Osteoporoz, periodontitisi doğrudan başlatan bir etyolojik ajan (primer başlatıcı) değil, süreci şiddetlendiren bir 'risk göstergesi'dir. Hayvan modelleri, osteoporozun hastalığı başlatmadığını ancak sistemik kemik kütlesi azaldığında plaka bağlı sekonder kemik yıkımının çok daha hızlı ilerlediğini kanıtlamıştır.

---

### ÇİFT 218 (Benzerlik: 0.72)

**Soru 1 (ID: 20dfe769-3c93-4bb2-b29d-c32740b355c2)**
Soru Kökü: Klinik periodontal tanıda kullanılan BANA (N-benzoyl-di-arginine-2-naphtylamide) bazlı enzimatik testlerde, tripsin benzeri enzim üreterek substratı hidrolize eden ve pozitif sonuç alınmasına neden olan mikroorganizmalar arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: BANA testi, spesifik olarak tripsin benzeri bir enzim profilini paylaşan kırmızı kompleks üyeleri (P. gingivalis, T. forsythia, T. denticola) ve Capnocytophaga türleri tarafından pozitif sonuç verir. Agresif periodontitisin majör patojeni olan A. actinomycetemcomitans bu tripsin benzeri enzimi üretmediğinden BANA testinde tespit edilemez.

**Soru 2 (ID: dbda7bab-4c36-44f6-91ca-eb63c749658a)**
Soru Kökü: Subgingival plaktaki bakterilerin tanımlanması için kullanılan enzimatik kitler, belirli patojenlerin ortak profillerine dayanır. BANA testi olarak bilinen enzimatik teşhis yönteminde, T. forsythia, P. gingivalis ve T. denticola bakterilerinin aktivitesi hangi enzim üzerinden tespit edilir?
Doğru Şık (C): Tripsin benzeri enzim
Açıklama: Kırmızı kompleks bakterileri (T. forsythia, P. gingivalis, T. denticola) ve Capnocytophaga türleri ortak bir tripsin benzeri enzim salgılar. BANA testi, bu tripsin benzeri enzimin sentetik bir substratı hidrolize etmesi mekanizmasına dayanır. Diğer enzimler konak kaynaklı yıkım markerlarıdır (AST, Elastaz, Glukuronidaz).

---

### ÇİFT 219 (Benzerlik: 0.72)

**Soru 1 (ID: 538a6da2-c390-4993-ac4c-cd5baa116acf)**
Soru Kökü: Dişlerin prognozunu etkileyen lokal faktörlerden okluzal travma ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Okluzal travma tek başına bakteriyel plak olmaksızın periodontal cep oluşumunu başlatabilir.
Açıklama: Okluzal travma, etyolojisinde mikrobiyal dental plak olmayan, tamamen mekanik bir yaralanmadır ve tek başına hiçbir zaman apikal epitel göçüne veya periodontal cep oluşumuna (gerçek ataşman kaybına) neden olamaz. Ancak mevcut bir iltihabi durum (periodontitis) varlığında yıkımın yönünü ve şiddetini değiştirerek prognozu olumsuz etkiler. Bu temel biyolojik prensip travma-inflamasyon ilişkisinin özüdür.

**Soru 2 (ID: db020be7-04a0-47d7-aea3-9fa43afc28b3)**
Soru Kökü: Okluzal kuvvetlerin periodontal dokulardaki patolojik etkilerini değerlendirirken, bir kuvvetin zararlı (okluzal travma) olup olmadığını saptayan temel kriter aşağıdakilerden hangisidir?
Doğru Şık (C): Periodontal dokularda hasar oluşturup oluşturmadığı
Açıklama: Bir okluzal kuvvetin zararlı olduğunu ve 'okluzal travma' teşhisi konulmasını sağlayan tek geçerli kriter, bu kuvvetin periodontal dokularda (PDL genişlemesi, kemik yıkımı vb.) yaralanma veya hasar oluşturup oluşturmadığıdır. Kuvvetin tek başına varlığı, doku adaptasyonu sağlandığı sürece patolojik kabul edilmez.

---

### ÇİFT 220 (Benzerlik: 0.72)

**Soru 1 (ID: 87e13d94-2d81-48c5-ae0a-b5cff8a0983e)**
Soru Kökü: Kırk beş yaşında kadın hastanın 26 numaralı dişinde yaklaşık %50 ataçman kaybı, kısa kök formu, elverişsiz kron-kök oranı ve II. sınıf furkasyon tutulumu tespit ediliyor. Furkasyon bölgesine lokasyon ve derinlik açısından erişim ve alet adaptasyonu zor da olsa mümkün görünmektedir. Standart klinik kriterlere göre bu dişin periodontal prognoz kategorisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor prognosis)
Açıklama: Kötü (Poor) prognoz tanımı: %50 ataçman kaybı, zayıf/kısa kök formu, elverişsiz kron-kök oranı ve erişimin kolay olmamakla birlikte MÜMKÜN olduğu II. sınıf furkasyon tutulumunu tanımlar. Eğer erişim 'zor/mümkün değil' veya III. sınıf furka olsaydı Şüpheli (Questionable) prognoza girerdi.

**Soru 2 (ID: c54e139b-59ca-4927-9c6a-8319656ebdd9)**
Soru Kökü: 60 yaşında kadın hasta, dişlerinde aşırı mobilite ve çiğneme zorluğu yaşamaktadır. Klinik ve radyografik muayenede kemik desteğinin tamamen kaybedildiği, sağlık, fonksiyon ve yaşam kalitesini idame ettirmeye yetecek minimum ataşman seviyesinin dahi bulunmadığı tespit ediliyor. Dişin periodontal prognozu hangi sınıflandırmaya dahil edilmelidir?
Doğru Şık (A): Umutsuz (Hopeless)
Açıklama: Prognoz sınıflandırmasında, dişi fonksiyonel veya estetik olarak idame ettirecek düzeyde ataşman kalmadığı, çekim endikasyonu kesinleşen durumlar 'Umutsuz (Hopeless)' olarak adlandırılır. Şüpheli prognozda %50'den fazla kemik kaybı ve kök anatomisi zayıflığı varken tedavi umudu (radikal dahil) az da olsa mevcuttur. Umutsuz dişler, sistemik enfeksiyon riskini artırdığından protetik planlama öncesi ekstrakte edilmelidir.

---

### ÇİFT 221 (Benzerlik: 0.72)

**Soru 1 (ID: 15440e34-2e67-4e7a-8624-2caa4b9882a1)**
Soru Kökü: Modifiye Gingival İndekse (MGI) göre, papiller ve marjinal bölgeler dahil olmak üzere tüm dişeti ünitesini kaplayan ancak görsel olarak şiddetli düzeyde olmayan hafif bir inflamasyon tablosu aşağıdaki skorlardan hangisiyle ifade edilir?
Doğru Şık (D): 2
Açıklama: Tüm dişeti ünitesini kaplayan ancak klinik karakter olarak hala 'hafif' kategorisinde değerlendirilen inflamasyon Modifiye Gingival İndekste skor 2'dir. Skor 1 ile arasındaki temel fark lezyonun şiddeti değil, ünitedeki yaygınlığıdır (kapsama alanıdır).

**Soru 2 (ID: 58ae7756-70a3-465f-b0e1-69afcd6895c2)**
Soru Kökü: Yirmi dokuz yaşındaki erkek hastanın alt keserler bölgesinde sondalama olmaksızın yapılan görsel değerlendirmesinde; parlaklık, kırmızılık, ödem ve papiller ünitede belirgin hipertrofi izlenmiştir. Ülserasyon veya konjesyon belirtisi yoktur. Modifiye Gingival İndekse göre bu tablonun skoru kaçtır?
Doğru Şık (B): 3
Açıklama: Orta derecede inflamasyon, kırmızılık, ödem ve dişeti kenarında/papilde hipertrofi varlığı Modifiye Gingival İndekste skor 3 olarak değerlendirilir. Ülserasyon veya spontan kanama tablosu eklenseydi skor 4 (şiddetli inflamasyon) seviyesine çıkardı.

---

### ÇİFT 222 (Benzerlik: 0.72)

**Soru 1 (ID: 2af7b21a-88a9-459a-94ef-5e5f2a8898a8)**
Soru Kökü: Kronik periodontal inflamasyona karşı gingival dokuların gösterdiği makroskobik tepki genellikle ödematöz veya fibrotik olmak üzere iki farklı klinik paterne ayrılır. Gingival mukozada **fibrotik** doku cevabının geliştiği bir periodontal hastada klinik muayene esnasında aşağıdaki bulgulardan hangisinin görülmesi **beklenmez**?
Doğru Şık (B): Doku kıvamının eski sıkılığını kaybederek aşırı yumuşak ve süngerimsi bir nitelik kazanması
Açıklama: Doku kıvamının yumuşak, süngerimsi olması ve düz, parlak, kırmızı bir görünüm alması fibrotik değil; aşırı sıvı birikimi ve damar geçirgenliği artışıyla karakterize ödematöz doku cevabının tipik bulgusudur. Fibrotik doku yanıtında tam tersine kronik makrofaj/fibroblast aktivasyonu nedeniyle bağ dokusu yoğunlaşır, dişeti klinik olarak sertleşir (sıkıdır), stippling (pürtük) izlenebilir ve doku opak bir renk alır. Ancak bu hiperplazik iyileşme anatomik konturu bozarak dişeti kenarının normal bıçak sırtı inceliğinden uzaklaşıp yuvarlak ve kalın görünmesine neden olur.

**Soru 2 (ID: 5b775b51-5620-42f5-98e8-1613503f0c39)**
Soru Kökü: 35 yaşında sistemik olarak sağlıklı kadın hasta dişetlerinde spontan kanama şikayetiyle başvurmuştur. Muayenede gingival dokuların düz, parlak, kırmızı renkte olduğu ve formunu kaybedip yumuşak bir kıvam sergilediği gözlenmiştir. Bu klinik tablo dişeti inflamasyonuna karşı gelişen hangi tip doku cevabını yansıtmaktadır?
Doğru Şık (E): Ödematöz doku cevabı
Açıklama: Dişeti iltihabında izlenen düz, parlak, yoğun kırmızı renk ve yumuşak kıvam ödematöz doku cevabının karakteristik belirtileridir. Fibrotik doku cevabında ise uzun süreli kronik inflamasyona yanıt olarak bağ dokusu yapımı artar; doku soluk, pürtüklü, sert kıvamlı ve kalınlaşmış (yuvarlak kenarlı) bir görünüm alır.

---

### ÇİFT 223 (Benzerlik: 0.72)

**Soru 1 (ID: 0ef6727d-847f-4cea-b9b7-4ffcfd214189)**
Soru Kökü: Elli iki yaşında erkek hasta, dişhekimine rutin kontrolünde diş eti kanaması şikayetiyle gelmiştir. Hekim patojenik bakterilerin enzim aktivitesini hasta başında BANA isimli substratın hidroliziyle test etmek istemektedir. Bu yöntemle ortak enzimatik profili saptanan bakteri grubu aşağıdakilerden hangisidir?
Doğru Şık (B): P. gingivalis, T. forsythia, T. denticola, Capnocytophaga
Açıklama: Tannerella forsythia (B. forsythus), Porphyromonas gingivalis, Treponema denticola ve Capnocytophaga türleri ortak bir tripsin benzeri enzim içerir ve BANA (N-benzoyl-di-arginine-2-naphtylamide) substratını hidrolize ederler. Perioscan kiti ile yapılan bu test bu spesifik patojen grubunun enzimatik tanısında kullanılır.

**Soru 2 (ID: 20dfe769-3c93-4bb2-b29d-c32740b355c2)**
Soru Kökü: Klinik periodontal tanıda kullanılan BANA (N-benzoyl-di-arginine-2-naphtylamide) bazlı enzimatik testlerde, tripsin benzeri enzim üreterek substratı hidrolize eden ve pozitif sonuç alınmasına neden olan mikroorganizmalar arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: BANA testi, spesifik olarak tripsin benzeri bir enzim profilini paylaşan kırmızı kompleks üyeleri (P. gingivalis, T. forsythia, T. denticola) ve Capnocytophaga türleri tarafından pozitif sonuç verir. Agresif periodontitisin majör patojeni olan A. actinomycetemcomitans bu tripsin benzeri enzimi üretmediğinden BANA testinde tespit edilemez.

---

### ÇİFT 224 (Benzerlik: 0.72)

**Soru 1 (ID: cb732f6f-4bd4-4f85-9bc3-167a9f5eec92)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) tarafından CPITN temel alınarak modifiye edilen Periodontal Screening and Recording (PSR) indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sondalamada kanamayı klinik değerlendirme dışında tutar.
Açıklama: PSR (Periodontal Screening and Recording) indeksi, CPITN'in temel prensiplerini taşır ve dişetinin şimdiki inflamasyon durumunu, yani kanamayı (BOP) ve diş taşını kesinlikle içerir ve değerlendirir. Kanama gibi inflamatuar parametrelerin varlığı, skorlamayı ve dolayısıyla uzman sevkiyat gereksinimini doğrudan etkiler.

**Soru 2 (ID: dc19c943-c319-4405-b232-735cd80aa987)**
Soru Kökü: Aşağıdakilerden hangisi Periodontal Tarama ve Kayıt (PSR) indeksinin, öncülü olan CPITN indeksine göre sunduğu temel klinik üstünlüklerinden biri olarak kabul edilir?
Doğru Şık (A): Klinisyene hastanın ataşman kaybı durumu hakkında da bilgi verebilmesi
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermez, yalnızca tedavi ihtiyacını (diş taşı, kanama, cep) gösterir. PSR ise CPITN'in modifiye edilmiş halidir ve kompleks formu karmaşıklaştırmadan periodontitisin erken tanısına yardımcı olurken, aynı zamanda cep derinliğindeki olası değişimleri ve ATAŞMAN KAYBINI gösterebilmesiyle ayrılır.

---

### ÇİFT 225 (Benzerlik: 0.72)

**Soru 1 (ID: 2394a201-1707-473a-8acd-1612a2cbd903)**
Soru Kökü: Bir toplum taramasında kullanılan CPITN sondunun (ilk renkli bandı 3.5 - 5.5 mm arası olan) dişeti cebine yerleştirilmesi sırasında siyah bandın sadece bir kısmının görünür kaldığı, geri kalan kısmının cep içinde kaybolduğu saptanmıştır. Bu derinlik bulgusu aşağıdaki CPITN skorlarından hangisini tanımlar?
Doğru Şık (E): Kod 3
Açıklama: CPITN Kod 3, 4-5 mm arası derinlikteki patolojik cepleri ifade eder. Sondun ucundaki ilk boyalı bant 3.5 mm'den başlayıp 5.5 mm'de bittiği için, bu derinlikteki bir cepte siyah bandın bir kısmı doku içinde kalırken bir kısmı dışarıda gözükür. Bu bulgu doğrudan Kod 3 olarak skorlanır.

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 226 (Benzerlik: 0.72)

**Soru 1 (ID: 2ef78da9-38b6-40ad-af7c-93c8cfd2c90d)**
Soru Kökü: 22 yaşında kadın hasta, estetik şikayetle kliniğe geliyor. Anamnezde diş fırçalamayı ihmal ettiğini ancak diyetinde günde 2 litre asitli içecek tükettiğini belirtiyor. Muayenede mine yüzeyinde bakteri olmaksızın, pürüzsüz ve parlak karakterde geniş madde kayıpları izleniyor. Herhangi bir mekanik aşındırıcı teması rapor edilmeyen bu tablodaki madde kaybı patolojisi aşağıdakilerden hangisidir?
Doğru Şık (E): Erozyon
Açıklama: Erozyon, bakteriyel olmayan kimyasal asitlerin (gastrik reflü veya asitli gıdalar) diş yüzeyiyle teması sonucu oluşan mekanik olmayan madde kaybıdır. Abrazyon yabancı cisimlerle mekanik sürtünmeyi (fırça), atrizyon ise karşılıklı dişlerin birbirini çiğneme kuvvetiyle aşındırmasını ifade eder.

**Soru 2 (ID: bd1ce7e1-d7ae-4d36-8110-10613a9356b8)**
Soru Kökü: Otuz beş yaşında erkek hastanın muayenesinde anterior dişlerin insizal kenarlarının tamamen düzleştiği, mine tabakasının aşınıp dentin adacıklarının açığa çıktığı ve posterior dişlerin tüberküllerinin silindiği görülmüştür. Hasta sabahları uyandığında çene kaslarında yorgunluk hissettiğini belirtmektedir. Bu tablonun gelişimine neden olan ve karşıt dişlerin fonksiyonel/parafonksiyonel kontağı sonucu meydana gelen mekanik madde kaybı aşağıdakilerden hangisidir?
Doğru Şık (A): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin okluzal veya insizal yüzeylerinin birbiriyle doğrudan teması (çiğneme veya bruksizm gibi parafonksiyonlar) sonucunda meydana gelen fizyolojik veya patolojik mekanik aşınmadır. Hasta kas yorgunluğu tarif ederek bruksizmi doğrulamaktadır. Abrazyon fırça gibi dış maddelerle, erozyon ise asitle olur.

---

### ÇİFT 227 (Benzerlik: 0.72)

**Soru 1 (ID: 27492233-6eb6-4296-aa05-0b6aec971e43)**
Soru Kökü: Ağız hijyeni düzeyini belirlemek üzere muayene edilen bir hastada, serbest dişeti kenarına yapışmış ince bir tabaka gözlenmektedir. Çıplak gözle fark edilemeyen bu eklenti, ancak boyayıcı ajanlar veya dişeti cebinde bir sondun gezdirilmesi ile tespit edilebilmiştir. Löe ve Silness'in Plak İndeksi'ne göre bu bölgeye verilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 1
Açıklama: Löe ve Silness Plak İndeksi'nde Skor 1, çıplak gözle izlenemeyen ancak serbest dişeti kenarına film halinde yapışmış ve sond/boya ile tespit edilebilen plağı tanımlar. Skor 2'de eklenti çıplak gözle görülebilen orta derecede bir yapıya ulaşır. Skor 0 ise eklentinin tamamen yokluğunu ifade eder.

**Soru 2 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

---

### ÇİFT 228 (Benzerlik: 0.72)

**Soru 1 (ID: 112d4514-ac4c-4977-8b61-1176562d9524)**
Soru Kökü: Kırk yaşında sağ elini kullanan erkek hasta, sol üst ve alt kanin-premolar bölgesinde hassasiyet şikayetiyle başvurmuştur. Muayenede bu dişlerin servikal bölgelerinde V şeklinde, sert ve parlak yüzeyli madde kayıpları tespit edilmiştir. Hastanın çok sert kıllı diş fırçası kullandığı ve horizontal yönde agresif fırçalama alışkanlığı olduğu tespit edilmiştir. Bu bulgular ışığında en olası diş aşınması tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Abrazyon
Açıklama: Abrazyon, çiğneme fonksiyonu dışındaki dışsal bir mekanik ajanın (aşındırıcı macun, sert fırça, horizontal fırçalama veya kroşe sürtünmesi) diş yüzeyinde oluşturduğu mekanik aşınmadır. V şeklinde servikal defektler yatay fırçalamanın tipik sonucudur. Atrizyonda aşınma okluzal/insizal yüzeylerdeyken, abfraksiyonda okluzal streslerin servikalde yarattığı bükülme söz konusudur.

**Soru 2 (ID: 9a16298d-c327-46d2-8925-0d147cdd3847)**
Soru Kökü: Sert fırçalama, abrasiv diş macunu kullanımı veya kroşelerin oluşturduğu sürtünme gibi çiğneme dışındaki mekanik faktörler sonucu dişlerde ortaya çıkan madde kaybı aşağıdakilerden hangisidir?
Doğru Şık (C): Abrazyon
Açıklama: Abrazyon, fizyolojik çiğneme dışındaki dış mekanik etkiler (örneğin horizontal sert fırçalama veya kroşe sürtünmesi) sonucu oluşan madde kaybıdır. En güçlü çeldirici olan atrizyon ise karşıt dişlerin fonksiyonel teması sonucu oluşan okluzal aşınmayı ifade eder. Bu durum klinik muayenede dişin kole bölgesindeki karakteristik defektlerle ayırt edilir.

---

### ÇİFT 229 (Benzerlik: 0.72)

**Soru 1 (ID: 3792084a-ad0d-4c2a-aded-547664abadc0)**
Soru Kökü: 45 yaşında erkek hasta kliniğe yaygın diş hassasiyeti şikayetiyle başvurmuştur. Yapılan anamnez ve klinik muayenede hastanın bruksizm alışkanlığı olduğu ve dişlerin okluzal yüzeylerinde, mineyi aşıp dentine ulaşan yaygın aşınmalar bulunduğu saptanmıştır. Bu hastadaki madde kaybı tablosunun primer tanısı aşağıdakilerden hangisidir?
Doğru Şık (D): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin birbirleriyle fonksiyonel veya parafonksiyonel (bruksizm gibi) kontağı sonucu okluzal ve insizal yüzeylerde oluşan patolojik veya fizyolojik aşınmadır. Abrazyon mekanik dış faktörlere, erozyon ise asitli içecekler gibi kimyasal ajanlara bağlı madde kaybıdır. Bruksizm hikayesi ve okluzal lokalizasyon atrizyon tanısını kesinleştirir.

**Soru 2 (ID: f072b323-658e-484d-82d2-19df08141e84)**
Soru Kökü: Yirmi beş yaşında kadın hastanın üst ön dişlerinin vestibül yüzeylerinde, mine dokusunun parlaklığını kaybettiği ve sığ, düzgün çanak şeklinde madde kayıplarının olduğu izlenmektedir. Hastanın anamnezinde asitli içecekleri gün içinde sürekli ve yudumlayarak tükettiği öğrenilmiştir. Bakteriyel olmayan bu kimyasal aşınma türü aşağıdakilerden hangisi ile adlandırılır?
Doğru Şık (C): Erozyon
Açıklama: Erozyon, asitli gıda/içecek tüketimi veya mide reflüsü gibi mekanik ve bakteriyel olmayan, tamamen kimyasal süreçlerle meydana gelen diş dokusu kaybıdır. Abrazyon diş fırçalama gibi mekanik sürtünmeyle, atrizyon ise karşıt dişlerin temasıyla oluşur. Çanak şeklinde düzgün yüzeyler erozyonun tipik morfolojik klinik belirtecidir.

---

### ÇİFT 230 (Benzerlik: 0.72)

**Soru 1 (ID: 1729c99e-7327-49f3-b549-a805c0a70578)**
Soru Kökü: Uzun dönem epidemiyolojik ve klinik çalışmalarla kronik periodontitisin gelişiminde etyolojik ajan olarak rol oynadığı kesin olarak kanıtlanmış bir risk faktörü olan bakteri aşağıdakilerden hangisidir?
Doğru Şık (C): Tanerella forsythia
Açıklama: A. actinomycetemcomitans, P. gingivalis ve T. forsythia, periodontitis için nedensel olduğu açıkça kanıtlanmış ve risk faktörü olarak sınıflandırılan üç ana spesifik patojendir. Diğer şıklardaki bakteriler (C. rectus, F. nucleatum vb.) hastalıkla ilişkili olmakla birlikte, epidemiyolojik olarak klasik risk faktörü üçlüsünün dışında değerlendirilen destekleyici ajanlardır. Kesin nedensel kanıt mekanizması T. forsythia için netleştirilmiştir.

**Soru 2 (ID: 4c2b6293-c743-4eb6-b7a9-014c5f81aaa5)**
Soru Kökü: Periodontal hastalık etyolojisinde rol alan ancak hayvan modelleri, konak immün yanıtı ve tedavi eliminasyonu kriterlerinin tümünü sağlayamadığı için ana risk faktörleri arasında sayılmayan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (C): Campylobacter rectus
Açıklama: Campylobacter rectus, F. nucleatum ve E. nodatum gibi bakteriler periodontitise etyolojik faktör olmalarına rağmen nedensellik kriterlerini (hayvan inokülasyonu vb.) tam desteklemedikleri için primer risk faktörü listesinde (A.a, P.g, T.f) bulunmazlar. Bu ayrım spesifik tedavi hedeflemesinde önemlidir.

---

### ÇİFT 231 (Benzerlik: 0.72)

**Soru 1 (ID: 51605b6d-65a9-49dc-bd8e-195e1e067e75)**
Soru Kökü: Periodontitisin hücresel seviyedeki en majör özelliklerinden biri destek dokulardaki tip 1 kollajen ağının ve zemin maddesi olan ekstrasellüler matriksin enzimatik olarak parçalanmasıdır. Dişeti oluğu sıvısının (DOS) biyokimyasal analizinde, sırasıyla *doğrudan kollajen proteinin spesifik yıkımını* ve *zemin maddesi olan matriksin glikoprotein bozulmasını* yansıtan substrat belirteçleri aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (B): Hidroksiprolin / Glikozaaminoglikanlar
Açıklama: Periodontal konak yanıtında matriks metaloproteinazlar tarafından parçalanan kollajen moleküllerinin hidrolizi doğrudan DOS'a hidroksiprolin salınımına neden olurken; ekstrasellüler matriksin temel ara maddesini oluşturan zemin maddesinin bozulması glikozaaminoglikanları (GAG) serbest bırakır. Osteokalsin alveoler kemik döngüsünü (turnover) gösteren protein bir marker olup yumuşak dokunun kollajen yıkımını direkt temsil etmez. Bu ayrım, hastalığın aktif fazında hedeflenen dokunun (spesifik kollajen bantları vs mukopolisakkarit matriks) saptanmasında belirleyicidir.

**Soru 2 (ID: ebe07572-a3ab-4548-b058-f2dffd73d39f)**
Soru Kökü: Periodontal doku yıkımının moleküler patogenezinde, ekstrasellüler matriksin ve konak hücrelerinin biyokimyasal reaksiyonlarına yön veren çeşitli konak kaynaklı enzimler dişeti oluğu sıvısına (DOS) salınır. Enzim adı ve bu enzimin temel hücresel kaynağı/özelliği arasındaki ilişkilendirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Elastaz: Dokularda ekstrasellüler matriks döngüsünü korumak ve aşırı doku hasarını dengelemekle görevli anti-proteolitik bir inhibitördür.
Açıklama: Elastaz, dokuyu koruyan anti-proteolitik bir inhibitör değil; nötrofil granüllerinde bulunan ve periodontitisli bölgelerde aktif bağ dokusu proteinlerinin proteolitik yıkımından sorumlu agresif bir enzimdir. Matriks metalloproteinazlar (MMP) ekstrasellüler matriksin hücresel yıkım döngüsünü fizyolojik dengede tutmaya çalışırken patolojik durumda destrüksiyona yol açar. Alkalen fosfataz seviyesi ise artmış nötrofil degranülasyonu ve hücre ölümü (osteoblastlar dahil) kaynaklı olarak inflamasyon alanında yükselir.

---

### ÇİFT 232 (Benzerlik: 0.72)

**Soru 1 (ID: 1247ec2d-6473-42de-9390-3efc75d58eba)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol için başvuruyor. Klinik muayenede periodontal sond cep içerisine yerleştiriliyor ve ölçüm yapılıyor. Hastanın biyolojik cep tabanı (birleşim epitelinin koronal ucu) ile klinik sondlama derinliği arasındaki histolojik penetrasyon farkı değerlendiriliyor. Standart şartlarda (0.25 N kuvvet) yapılan bu muayenede, sondun birleşim epitelinin apikalindeki bağ dokusuna yaklaşık kaç mm penetre olması beklenir?
Doğru Şık (A): 0.3 mm
Açıklama: Histolojik çalışmalara göre, standart 0.25 N sondlama kuvvetiyle periodontal sond, birleşim epitelinin apikalindeki bağ dokusuna yaklaşık 0.3 mm kadar penetre olur. Bu nedenle klinik sondlanan cep derinliği ile biyolojik cep derinliği arasında küçük bir fark vardır. Tedavi sonrası ödemin azalması bu penetrasyon direncini artırarak ataşman kazancı yanılgısı yaratabilir.

**Soru 2 (ID: 2e594545-fe7d-473b-9810-82c50affd23e)**
Soru Kökü: Periodontal cebin derinliğinin sond ile ölçümü (klinik sondalanabilen derinlik) sıklıkla birleşim epitelinin apikalindeki bağ dokusuna doğru hafif bir penetrasyon gösterir. Bu ölçümün standart ve doku hasarı yaratmayacak, enflamasyonlu dokuda bile gerçeğe en yakın sonucu verecek ideal sondalama kuvveti aşağıdakilerden hangisidir?
Doğru Şık (B): 0.25 N
Açıklama: Periodontal sondalama sırasında uygulanması gereken ideal standart kuvvet 0.25 N (yaklaşık 25 gram) olarak kabul edilir. Bu kuvvet enflamasyonlu dokuda birleşim epitelini yırtmadan geçip en koronal bağ dokusu ataşman sınırında durmasını sağlayacak optimal basınçtır. Aşırı kuvvet (>0.25N) ataşman yırtılmasına ve derinliğin yanlışlıkla fazla ölçülmesine sebep olur.

---

### ÇİFT 233 (Benzerlik: 0.72)

**Soru 1 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 234 (Benzerlik: 0.72)

**Soru 1 (ID: 1247ec2d-6473-42de-9390-3efc75d58eba)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol için başvuruyor. Klinik muayenede periodontal sond cep içerisine yerleştiriliyor ve ölçüm yapılıyor. Hastanın biyolojik cep tabanı (birleşim epitelinin koronal ucu) ile klinik sondlama derinliği arasındaki histolojik penetrasyon farkı değerlendiriliyor. Standart şartlarda (0.25 N kuvvet) yapılan bu muayenede, sondun birleşim epitelinin apikalindeki bağ dokusuna yaklaşık kaç mm penetre olması beklenir?
Doğru Şık (A): 0.3 mm
Açıklama: Histolojik çalışmalara göre, standart 0.25 N sondlama kuvvetiyle periodontal sond, birleşim epitelinin apikalindeki bağ dokusuna yaklaşık 0.3 mm kadar penetre olur. Bu nedenle klinik sondlanan cep derinliği ile biyolojik cep derinliği arasında küçük bir fark vardır. Tedavi sonrası ödemin azalması bu penetrasyon direncini artırarak ataşman kazancı yanılgısı yaratabilir.

**Soru 2 (ID: 8658e4c6-c9f5-472d-a00a-b94e1dff5780)**
Soru Kökü: Kırk beş yaşında erkek bir hastanın Başlangıç Periodontal Tedavi (Faz-I) sonrası kontrol seansında cep derinlikleri ve ataşman seviyeleri standart bir periodontal sond kullanılarak yeniden değerlendirilmektedir. Bu muayene prosedürü ve sondalama ilkeleri dikkate alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Tedavi sonrası ölçümlerde tespit edilen cep derinliğindeki azalma, istisnasız olarak bağ dokusundaki gerçek ataşman kazancını yansıtır.
Açıklama: Sondalama sonrası cep derinliğindeki azalma doğrudan ataşman kazancını göstermez; azalmış inflamatuar cevaba bağlı doku büzülmesinin (ödemin gerilemesi) bir sonucu olabilir. İdeal klinik incelemede doku hasarını önlemek için sondalama kuvveti 0.25 N olmalı ve sond ucu epiteliyal bariyeri geçerek bağ dokusuna ortalama 0.3 mm penetre olmalıdır. Ayrıca, inflamasyonun erken belirtisi olan kanamayı net değerlendirebilmek için işlem sonrası 30-60 saniye beklenmesi kritik bir klinik diagnostik standarttır.

---

### ÇİFT 235 (Benzerlik: 0.72)

**Soru 1 (ID: 0d300b31-2ed4-4edf-abb5-5068fc5e33a4)**
Soru Kökü: Aktif periodontal hastalık teşhisinde immünolojik prensipleri kullanan metodlar, spesifik bakteriyel antijenlerin izole edilmesine dayanır. Canlı mikroorganizma gereksinimini ortadan kaldıran bu yöntemlerden biri olan ve özel bir membran tabakası üzerinde gerçekleşen antikor-antijen bağlanma reaksiyonunun bir renk değişimi ile okunduğu, A. actinomycetemcomitans, P. gingivalis ve P. intermedia türlerini saptamak üzere özel tasarlanmış ticari testin adı aşağıdakilerden hangisidir?
Doğru Şık (A): Evalusite
Açıklama: Evalusite, hedef patojenlerin (Aa, Pg, Pi) özel bir membran üzerindeki antikorlarla reaksiyona girmesi ve bunun kalitatif bir renk değişimiyle izlenmesi esasına dayanan spesifik bir membran immunoassay testidir. En güçlü çeldirici olan Latex aglütinasyon testinde membran kullanılmaz; türe özgü antijenle kaplı lateks boncuklarının mikrobiyal yüzey yapıları ile temas ettiğinde kümelenme (aglütinasyon) göstermesi esasına dayanır. Perioscan ise BANA hidrolizine dayalı enzimatik bir yöntemdir.

**Soru 2 (ID: ed2e7c47-e477-42ad-9f35-2f9b5e44ea8c)**
Soru Kökü: Periodontal patojenleri hızlı tespit etmek amacıyla, türe özgü antikorla kaplanmış sentetik boncukların mikrobiyal hücre yüzey antijenleri ile temas ettiğinde 2-5 dakika içinde gözle görülür bir kümelenme reaksiyonu oluşturması prensibiyle çalışan immünolojik test aşağıdakilerden hangisidir?
Doğru Şık (A): Latex aglütinasyon
Açıklama: Latex aglütinasyon testi, lateks boncuklarının antikorlarla kaplanıp plağa karıştırılmasıyla yapılır. İlgili bakteri ortamda varsa antijen-antikor birleşmesi makroskobik bir kümelenme (aglütinasyon) oluşturur. Hızlı ve basit olması en büyük avantajıdır. Membran deneyi ise kağıt/membran filtre üzerinde bant renklenmesi şeklinde sonuç verir.

---

### ÇİFT 236 (Benzerlik: 0.72)

**Soru 1 (ID: 89e8aa50-28b0-4b0b-b62d-8ea26e4141b1)**
Soru Kökü: 42 yaşında erkek hasta alt anterior bölgesindeki dişetlerinde rahatsızlık hissiyle geliyor. CPITN sondu ile yapılan muayenede patolojik cep derinliği saptanmamış (siyah bant görünür halde), ancak subgingival bölgelerde yoğun diş taşı tespit edilmiştir. İlgili sekstantın CPITN skoru ve uygulanması gereken minimum tedavi prosedürü aşağıdakilerden hangisidir?
Doğru Şık (B): Kod 2 / Oral hijyen eğitimi ve diş taşı temizliği
Açıklama: CPITN Kod 2, kanama olsun veya olmasın supragingival/subgingival diş taşının varlığı ile karakterizedir. Patolojik cep oluşumu henüz yoktur. Bu sekstant için tedavi protokolü kişisel oral hijyen eğitimine (OHE) ek olarak diş taşı temizliğinin (SCRP - scaling and root planing) uygulanmasıdır.

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 237 (Benzerlik: 0.72)

**Soru 1 (ID: 5b775b51-5620-42f5-98e8-1613503f0c39)**
Soru Kökü: 35 yaşında sistemik olarak sağlıklı kadın hasta dişetlerinde spontan kanama şikayetiyle başvurmuştur. Muayenede gingival dokuların düz, parlak, kırmızı renkte olduğu ve formunu kaybedip yumuşak bir kıvam sergilediği gözlenmiştir. Bu klinik tablo dişeti inflamasyonuna karşı gelişen hangi tip doku cevabını yansıtmaktadır?
Doğru Şık (E): Ödematöz doku cevabı
Açıklama: Dişeti iltihabında izlenen düz, parlak, yoğun kırmızı renk ve yumuşak kıvam ödematöz doku cevabının karakteristik belirtileridir. Fibrotik doku cevabında ise uzun süreli kronik inflamasyona yanıt olarak bağ dokusu yapımı artar; doku soluk, pürtüklü, sert kıvamlı ve kalınlaşmış (yuvarlak kenarlı) bir görünüm alır.

**Soru 2 (ID: 896d5c1d-07f7-45df-b3a6-144e996f0da0)**
Soru Kökü: Uzun süreli periodontal hastalığı olan bir bireyde, dişeti inflamasyonuna karşı gelişen 'fibrotik doku cevabının' klinik muayenesinde aşağıdakilerden hangisinin görülmesi en olasıdır?
Doğru Şık (A): Dişetinin daha sıkı, pürtüklü, opak ve kalın bir yapıda olması
Açıklama: Fibrotik doku cevabında kronik iltihaba yanıt olarak artan kollajen sentezi nedeniyle dişeti normal özelliklerinin bir kısmını koruyor gibi görünür. Doku pürtüklü, opak, daha sıkı ve kalındır ancak dişeti kenarı bıçak sırtı formunu kaybederek yuvarlaklaşmıştır. Kırmızı, yumuşak ve pürtüksüz yapı ise ödematöz doku cevabına aittir.

---

### ÇİFT 238 (Benzerlik: 0.72)

**Soru 1 (ID: 492254ca-5729-4b70-b216-8867ca0fcf39)**
Soru Kökü: Aşağıdakilerden hangisi periodonsiyumu hastalığa yatkın hale getiren doğal 'lokal anatomik faktörler' arasında yer **almaz**?
Doğru Şık (D): Uyumsuz subgingival kron kenarları
Açıklama: Uyumsuz subgingival kron kenarları, plağa yatkınlık oluşturan bir lokal faktör olmakla birlikte doğal bir 'anatomik faktör' değil, iyatrojenik (hekim uygulamasına bağlı) bir 'restoratif faktör'dür. Gelişimsel oluklar, mine incileri, kısa/konik kök formları ve bifurkasyon kenarları ise dişin doğal gelişim morfolojisinden kaynaklanan anatomik zorluklardır.

**Soru 2 (ID: f17d7f4c-9e39-47fc-a47f-2a3ef2ca6488)**
Soru Kökü: Dişlerin periodontal prognozunu belirlerken dikkat edilmesi gereken spesifik faktörler lokal, sistemik ve protetik olmak üzere gruplandırılır. Buna göre aşağıdakilerden hangisi protetik ve restoratif faktörler grubunda **yer almaz**?
Doğru Şık (C): Köklerin birbirine yakınlığı
Açıklama: Kök yakınlığı (root proximity), servikal mine çıkıntıları ve kök konkaviteleri gibi anatomik-gelişimsel kök anomalilerinden olup "lokal faktörler" sınıfında değerlendirilir. Abutment seçimi, protez tipi ve subgingival restorasyon kenarları iatrojenik/protetik planlamaya dahil olan restoratif prognostik faktörlerdir. Sistematik risk değerlendirmesinde bu faktörlerin kaynağı tedavi stratejisini değiştirir.

---

### ÇİFT 239 (Benzerlik: 0.72)

**Soru 1 (ID: 1953deca-c919-47d2-9d2f-ad4f355e519a)**
Soru Kökü: 40 yaşında sağlıklı bir hastanın epidemiyolojik saha çalışması sırasında CPITN sondu ile periodontal değerlendirmesi yapılmıştır. Hekim sondun ucundaki renkli siyah bandın tamamen görünür olduğunu, sondalamada kanama gelişmediğini ve herhangi bir diş taşı saptanmadığını kaydetmiştir. Bu bulgulara göre hastanın CPITN skoru ve tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (C): Kod 0 / Tedavi gerekmez
Açıklama: CPITN Kod 0, herhangi bir hastalık belirtisinin (kanama, diş taşı, cep) bulunmadığı kusursuz sağlıklı dişeti durumunu yansıtır. Sondun siyah bandı dışarıdadır (cep <3.5 mm) ve kanama yoktur. Bu sekstant için herhangi bir tedavi gereksinimi atanmaz.

**Soru 2 (ID: 729f4d46-cc92-4b89-a3c0-24f00ff71934)**
Soru Kökü: Elli beş yaşında kadın hasta dişetlerinde sızlama şikayetiyle muayene edilmektedir. Alt sağ sekstant incelenirken, 0.5 mm topuzlu WHO zondunun ilk koyu renkli bandının kısmen dişeti cebi içinde kaybolduğu gözlemlenmiştir. Bu bulguya göre hastanın CPITN skoru ve uygulanması gereken tedavi kombinasyonu hangisinde doğru verilmiştir?
Doğru Şık (E): Kod 3 - Oral hijyen eğitimi ve kök yüzeyi düzleştirme (SCRP)
Açıklama: WHO zondunun koyu bandı 3.5 - 5.5 mm arasını işaretler; bandın kısmen kaybolması cep derinliğinin 4-5 mm arasında (Kod 3) olduğunu gösterir. CPITN Kod 3 durumunda tedavi gereksinimi oral hijyen eğitimi ile birlikte detartraj ve kök yüzeyi düzleştirmesidir (OHE + SCRP). Cerrahi tedavi (Kod 4) ancak koyu bandın tamamen kaybolduğu 6 mm ve üzeri ceplerde endikedir.

---

### ÇİFT 240 (Benzerlik: 0.72)

**Soru 1 (ID: a07313d2-d285-4b8a-8437-d9c87518b575)**
Soru Kökü: 22 yaşında erkek hasta ön bölgede dişetlerinde kanama ve şişlik şikayetiyle başvurmuştur. Muayenede anterior bölgede plak ve diştaşı birikiminin yoğun olduğu, dişlerin üst üste kapanmadığı ve temasın bulunmadığı saptanmıştır. Hastada yiyeceklerin mekanik temizleme etkisinin ortadan kalkmasına bağlı gelişen bu yoğun plak retansiyonunun anatomik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Açık kapanış
Açıklama: Açık kapanışta (open bite), karşıt çenedeki dişler arasında temas olmaması sebebiyle besinlerin çiğneme sırasında yarattığı mekanik temizleme etkisi ortadan kalkar. Çapraz kapanışta okluzal travma, derin kapanışta ise alt dişlerin üst damak dişetine travması söz konusu iken; fonksiyon dışı kalmaya bağlı lokalize yoğun plak birikimi açık kapanışın tipik bulgusudur.

**Soru 2 (ID: de74ae57-d1c6-4233-afe5-c53d22ec7e1b)**
Soru Kökü: Otuz yaşında erkek hastanın maksiller birinci ve ikinci molar dişleri arasında diastema olmamasına rağmen kontakt noktasının zayıf/açık olduğu belirlenmiştir. Bu durumun periodonsiyum üzerinde yaratacağı **en olası** lokal etki aşağıdakilerden hangisidir?
Doğru Şık (B): İnterdental alanda gıda sıkışması (food impaction)
Açıklama: Zayıf veya hafif açık proksimal kontaktlar, çiğneme sırasında besinlerin interdental alana dikey olarak itilmesine (gıda sıkışması / food impaction) izin verir. Bu mekanik tahriş ve gıdanın bölgede kalması, plak birikimini ve lokalize kemik yıkımını tetikleyen en önemli iatrojenik/anatomik nedenlerden biridir. Sement hiperplazisi veya fibromatozis bu durumun doğrudan lokal bir sonucu değildir.

---

### ÇİFT 241 (Benzerlik: 0.72)

**Soru 1 (ID: b107b9da-42f4-41db-b42a-df162b1af347)**
Soru Kökü: Altmış iki yaşındaki erkek hasta, dişlerinde şiddetli sallanma şikayetiyle başvurmuştur. Muayenede 16 numaralı dişte kemik desteğinin tamamen yok olduğu, Sınıf III furkasyon tutulumu ve dikey mobilitenin bulunduğu saptanmıştır. Kalan periodontal doku fonksiyon ve yaşam kalitesini idame ettiremeyecek durumdadır. Bu dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz (Hopeless)
Açıklama: Sağlık, fonksiyon ve yaşam kalitesini devam ettirmeye yetecek minimal periodontal ataşmanın dahi bulunmadığı şiddetli yıkım durumları 'Umutsuz (Hopeless)' olarak sınıflandırılır ve bu dişler genellikle doğrudan çekim endikasyonuna sahiptir. Şüpheli prognozda ise %50'den fazla kayıp olmasına rağmen spesifik tedavilerle dişin ağızda tutulma olasılığı halen değerlendirilir.

**Soru 2 (ID: d55ef9ac-aadb-4ec0-a9fb-14219f833c9a)**
Soru Kökü: Kırk sekiz yaşındaki sistemik stres altında çalışan bir hastanın muayenesinde; 26 numaralı dişte %50 ataşman kaybı, kısa-konik elverişsiz kök formu saptanmıştır. Dişte Sınıf II furkasyon tutulumu mevcuttur ancak furkasyon girişine klinisyenin el aletleriyle ulaşması mümkündür. Bu klinik tabloya göre 26 numaralı dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor)
Açıklama: Ataşman kaybının %50 civarında olması, elverişsiz kron/kök oranı (kısa konik kök) ve derinlik açısından erişimi zor olsa da mümkün olan Sınıf II furkasyon tutulumu tablosu, 'Kötü (Poor)' prognoz kriterlerini tam olarak karşılar. Ataşman kaybı %50'yi aşar, furkasyon Sınıf III'e ilerler veya erişim tamamen imkansızlaşırsa dişin durumu 'Şüpheli (Questionable)' seviyesine düşer.

---

### ÇİFT 242 (Benzerlik: 0.72)

**Soru 1 (ID: 719250ff-4df2-47d4-bb54-b2fde7fed218)**
Soru Kökü: 40 yaşında kronik periodontitis hastasının aktif periodontal ceplerinden alınan örneklerde, kırmızı kompleks bakterilerin ortak olarak ürettiği tripsin benzeri enzimin aktivitesi ölçülecektir. N-benzoyl-di-arginine-2-naphtylamide (BANA) substratının hidrolizi ile renk değişikliği sağlayan ve hastalık aktivitesini gösteren enzimatik diagnostik kit aşağıdakilerden hangisidir?
Doğru Şık (B): Perioscan
Açıklama: Perioscan, hedef mikroorganizmaların (T. denticola, P. gingivalis, T. forsythia) ortak bir tripsin benzeri enzim salgılamasına dayanan ve BANA substrat kartını kullanarak klinikte hızlı sonuç veren enzimatik bir teşhis kitidir. Periocheck ise nötrofil elastaz aktivitesini ölçer; Evalusite ise bir immünodiagnostik membran testidir.

**Soru 2 (ID: dbda7bab-4c36-44f6-91ca-eb63c749658a)**
Soru Kökü: Subgingival plaktaki bakterilerin tanımlanması için kullanılan enzimatik kitler, belirli patojenlerin ortak profillerine dayanır. BANA testi olarak bilinen enzimatik teşhis yönteminde, T. forsythia, P. gingivalis ve T. denticola bakterilerinin aktivitesi hangi enzim üzerinden tespit edilir?
Doğru Şık (C): Tripsin benzeri enzim
Açıklama: Kırmızı kompleks bakterileri (T. forsythia, P. gingivalis, T. denticola) ve Capnocytophaga türleri ortak bir tripsin benzeri enzim salgılar. BANA testi, bu tripsin benzeri enzimin sentetik bir substratı hidrolize etmesi mekanizmasına dayanır. Diğer enzimler konak kaynaklı yıkım markerlarıdır (AST, Elastaz, Glukuronidaz).

---

### ÇİFT 243 (Benzerlik: 0.72)

**Soru 1 (ID: 15440e34-2e67-4e7a-8624-2caa4b9882a1)**
Soru Kökü: Modifiye Gingival İndekse (MGI) göre, papiller ve marjinal bölgeler dahil olmak üzere tüm dişeti ünitesini kaplayan ancak görsel olarak şiddetli düzeyde olmayan hafif bir inflamasyon tablosu aşağıdaki skorlardan hangisiyle ifade edilir?
Doğru Şık (D): 2
Açıklama: Tüm dişeti ünitesini kaplayan ancak klinik karakter olarak hala 'hafif' kategorisinde değerlendirilen inflamasyon Modifiye Gingival İndekste skor 2'dir. Skor 1 ile arasındaki temel fark lezyonun şiddeti değil, ünitedeki yaygınlığıdır (kapsama alanıdır).

**Soru 2 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

---

### ÇİFT 244 (Benzerlik: 0.72)

**Soru 1 (ID: 3526beb7-0766-48e5-808a-aa9cc6e4c5b4)**
Soru Kökü: Periodontal muayene sırasında sadece dişlerin interproksimal (arayüz) bölgelerindeki plak varlığını boyama sonrası (+) veya (-) olarak kaydedip hastanın ara yüz temizlik etkinliğini değerlendiren Lange (1986) kaynaklı indeks aşağıdakilerden hangisidir?
Doğru Şık (C): Aproksimal Alan Plak İndeksi (API)
Açıklama: Aproksimal alan plak indeksi (API), özellikle ara yüz temizliğinin (diş ipi/arayüz fırçası kullanımı) etkinliğini ölçmek için spesifik olarak mezial ve distal alanlara odaklanır. O'Leary tüm yüzeyleri değerlendirirken, API yalnızca aproksimal alanlara daraltılmış bir perspektif sunar.

**Soru 2 (ID: ec95a88f-ab59-4f26-9cad-54c8a0b91008)**
Soru Kökü: Dişlerin dört yüzeyindeki (fasial, mezial, distal, lingual) supragingival mikrobiyal dental plağı renklendirici boyalar yardımıyla tespit edip, sadece plak varlığını (+) veya yokluğunu (-) değerlendirerek yüzde (%) hesaplaması yapan indeks aşağıdakilerden hangisidir?
Doğru Şık (A): Plak kontrol kaydı (O'Leary)
Açıklama: O'Leary plak kontrol kaydı (Plak İndeksi), dişlerin dört yüzeyini boyayarak plak varlığını var/yok şeklinde nitel olarak kodlar ve bir yüzde skoru üretir. Sillness-Löe indeksi plak kalınlığını skorlarken (0-3), O'Leary indeksi hastanın ağız hijyeni motivasyonunda pratik bir (+) veya (-) haritalaması sunar.

---

### ÇİFT 245 (Benzerlik: 0.72)

**Soru 1 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

**Soru 2 (ID: 9f807eed-287e-446f-86a7-1ad123d3bc4b)**
Soru Kökü: 50 yaşında erkek hasta dişetlerinde şişlik ve dişlerinde uzama şikayetiyle başvuruyor. Sağ üst posterior bölgede CPITN sondu ile yapılan ölçümde siyah renkli ölçüm bandının tamamının cep içinde kaybolduğu (6 mm ve üzeri derinlik) tespit edilmiştir. CPITN skorlamasına göre bu sekstantın durumu ve öngörülen tedavi yaklaşımı aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (D): Kod 4 / OHE, SCRP ve Cerrahi tedavi
Açıklama: CPITN Kod 4, 6 mm veya daha derin periodontal ceplerin varlığını gösterir. Klinik olarak sondun 3.5-5.5 mm arasındaki siyah bandı tamamen doku içine batarak kaybolur. Bu şiddetteki bir periodontal yıkımın tedavisinde konservatif yaklaşımlar (OHE ve SCRP) yetersiz kalacağından protokole cerrahi girişim eklenir.

---

### ÇİFT 246 (Benzerlik: 0.72)

**Soru 1 (ID: d053701d-f302-45e5-a1a3-7777ef19cad0)**
Soru Kökü: Diagnostik bir testin ilgili hastalığın varlığını doğru şekilde tespit edebilme yeteneğine 'sensitivite' adı verilir. Sensitivite kavramı temel alındığında, periodontal patojenleri saptamak için geliştirilen mevcut genetik teknolojiler içerisinde, bir örnekte spesifik hedef organizmadan sadece 5-10 hücre bulunsa bile bunu amplifiye ederek saptayabilen ve en yüksek analitik duyarlılığa sahip yöntem aşağıdakilerden hangisidir?
Doğru Şık (C): Polimeraz zincir reaksiyonu (PCR)
Açıklama: Polimeraz zincir reaksiyonu (PCR), nükleik asitlerin hedeflenen spesifik bölgelerinin tekrarlayan amplifikasyonu sayesinde bir klinik örnekteki 5-10 patojen hücreyi dahi saptayabilen, sensitivitesi en yüksek moleküler teşhis yöntemidir. Bakteriyel kültür altın standart olmasına rağmen 10^3 - 10^4 bakteri saptama limitiyle daha düşük bir sensitivite sergiler ve zor üreyen anaerobları kaçırabilir. Sensitivite, bir testin hastalıklı mikroorganizmayı ne derece keskin bir saptama eşiğiyle (threshold) "var" olarak belirleyebildiğinin ana ölçütüdür.

**Soru 2 (ID: e3329215-12ef-4d1a-8f0b-123b2015cdec)**
Soru Kökü: 38 yaşında agresif periodontitis tablosu sergileyen kadın hastadan alınan subgingival plak örneğinde, hedef A. actinomycetemcomitans'a ait spesifik DNA dizilerini radyoizotop veya floresan yardımıyla laboratuvarda tespit eden, karmaşık plak kültüründeki diğer alakasız bakterilerden etkilenmeyen teşhis yöntemi aşağıdakilerden hangisidir?
Doğru Şık (A): Nükleik asit probları
Açıklama: Nükleik asit (DNA) probları, hedef patojene spesifik kısa DNA dizileridir. Bu problar, plakta aranan bakterinin genomuna hidrojen bağlarıyla tutunur (hibridizasyon) ve floresan işaretleyicilerle parlayarak varlığını kanıtlar. Alakasız bakterilerden etkilenmeden yüksek spesifite sağlar. PCR ise enzimatik yolla DNA parçasını logaritmik olarak çoğaltma işlemidir; prob tekniği direkt hedef tespiti sağlar.

---

### ÇİFT 247 (Benzerlik: 0.72)

**Soru 1 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

**Soru 2 (ID: c665e17b-7fd4-4ddc-86e0-c7c2d40b6472)**
Soru Kökü: Periodontal idame terapisindeki bir hastanın gingival marjini ve komşu diş yüzeylerinde, çıplak gözle kolayca izlenebilen bol miktarda yumuşak eklenti ve diş taşı saptanmıştır. Löe ve Silness'in Plak İndeksi kriterleri kullanıldığında, bu diş yüzeyine atanacak skor aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 3
Açıklama: Bol miktarda yumuşak eklenti ve kalkulus varlığı, Löe ve Silness Plak İndeksi'nde en yüksek değer olan Skor 3'e denk gelir. Skor 2 orta derecede eklentiyi ifade ederken, indeksin 4 gibi bir skor basamağı bulunmamaktadır. Klinik olarak belirgin kalın plak ve taş tabakası bu kodlamanın anahtarıdır.

---

### ÇİFT 248 (Benzerlik: 0.72)

**Soru 1 (ID: 76e3f9a5-39c3-4465-aa10-17660d4b2be9)**
Soru Kökü: Periodontal tedavi başarısını sınırlandıran ve ciddi kemik içi defektlere yol açabilen 'gelişimsel oluklar', en sık aşağıdaki lokalizasyonların hangisinde izlenir?
Doğru Şık (A): Maksiller kesicilerin palatinal yüzeylerinde
Açıklama: Gelişimsel palatinal oluklar, en yaygın olarak maksiller kesicilerin (özellikle lateral kesicilerin) palatinal yüzeylerinde görülür. Bu oluklar sement-mine birleşiminden başlayıp kök boyunca apikale doğru uzanarak mikrobiyal plak için ulaşılamaz bir kanal oluşturur ve bu dişlerin prognozunu ciddi şekilde riske atar.

**Soru 2 (ID: cb90cbf5-1bfc-4c80-8312-5ad70f80104f)**
Soru Kökü: Anatomik faktörlerin periodontal hastalık prognozuna etkileri incelendiğinde; özellikle maksiller kesici dişlerin palatinal yüzeylerinde izlenen, fırçalamanın anatomik zorluğu nedeniyle ciddi subgingival plak retansiyonu ve lokalize derin cep oluşumu yaratarak tedavinin prognozunu olumsuz etkileyen gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (B): Gelişimsel oluk (Palatogingival oluk)
Açıklama: Gelişimsel oluklar (palatogingival oluklar), sıklıkla maksiller yan kesici dişlerin palatinalinden başlayarak kök apeksine doğru uzanan anatomik defektlerdir. Bu oluklar, bakteri plağı için korunaklı bir rezervuar oluşturur ve mekanik (fırça/sond) erişimi imkansız kılarak şiddetli lokalize kemik kaybı ve pulpa-periodontal lezyonlara yol açar. Servikal mine çıkıntısı ise daha çok mandibular ve maksiller molarlarda (özellikle 2. molar) görülür.

---

### ÇİFT 249 (Benzerlik: 0.72)

**Soru 1 (ID: 2394a201-1707-473a-8acd-1612a2cbd903)**
Soru Kökü: Bir toplum taramasında kullanılan CPITN sondunun (ilk renkli bandı 3.5 - 5.5 mm arası olan) dişeti cebine yerleştirilmesi sırasında siyah bandın sadece bir kısmının görünür kaldığı, geri kalan kısmının cep içinde kaybolduğu saptanmıştır. Bu derinlik bulgusu aşağıdaki CPITN skorlarından hangisini tanımlar?
Doğru Şık (E): Kod 3
Açıklama: CPITN Kod 3, 4-5 mm arası derinlikteki patolojik cepleri ifade eder. Sondun ucundaki ilk boyalı bant 3.5 mm'den başlayıp 5.5 mm'de bittiği için, bu derinlikteki bir cepte siyah bandın bir kısmı doku içinde kalırken bir kısmı dışarıda gözükür. Bu bulgu doğrudan Kod 3 olarak skorlanır.

**Soru 2 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

---

### ÇİFT 250 (Benzerlik: 0.72)

**Soru 1 (ID: 84e5c54c-2fe7-4d70-9168-8de6ab31f995)**
Soru Kökü: Aşağıdakilerden hangisi periodontal hastalık risk değerlendirmesinde değiştirilemeyen ve bireye ait özelliklerin tanımlandığı 'bireysel risk belirleyicileri (risk determinanları)' arasında yer alır?
Doğru Şık (A): Genetik faktörler
Açıklama: Bireysel risk belirleyicileri (determinanlar), kişinin cinsiyet, yaş, sosyoekonomik durum ve genetik faktörleri gibi değiştirilemeyen özelliklerini kapsar. Diyabet ve patojenik bakteriler değiştirilebilir risk faktörleridir. HIV/AIDS risk göstergesi (indikatörü), sondalamada kanama ise geleceğe ilişkin risk işareti (prediktörü) olarak sınıflandırılır.

**Soru 2 (ID: d9d015b3-27a5-4bed-a52d-b41d86100493)**
Soru Kökü: Bir hastanın ailesinde görülen şiddetli erken diş kaybı hikayesi (genetik yatkınlık), ileri yaş ve cinsiyet gibi değiştirilemeyen özellikleri, periodontal hastalık risk sınıflamasında hangi özel kategori altında değerlendirilir?
Doğru Şık (C): Bireysel risk belirleyicileri (Determinanlar)
Açıklama: Bireysel risk belirleyicileri (Risk determinanları) terimi, bireyin doğası gereği sahip olduğu ve klinik müdahale ile değiştirilmesi mümkün olmayan (yaş, cinsiyet, genetik yapı, ırk) değişkenleri tanımlamak için kullanılır. Sigara veya spesifik bakteri plağı gibi değişkenler müdahale edilebilir risk faktörleri iken, determinanlar konağın hastalığa yapısal yatkınlık tabanını oluşturur.

---

### ÇİFT 251 (Benzerlik: 0.72)

**Soru 1 (ID: 2a5bcb26-6b3a-4e7e-b019-68ea717d6736)**
Soru Kökü: Bir bireyin periodontal hastalığa yakalanma olasılığını tahmin etmek amacıyla klinik verilerin toplanması, risk faktörlerinin analizi ve bu verilerin yorumlanması için yürütülen sistematik işlemlerin tamamı aşağıdaki terimlerden hangisiyle tanımlanır?
Doğru Şık (B): Risk tayini
Açıklama: Bireyin hastalığa yakalanma olasılığını (riskini) tahmin etmek için yürütülen işlemlere 'risk tayini' (risk assessment) denir. Prognostik tayin ise henüz hastalığa yakalanmamış biri için değil, zaten var olan bir hastalığın sonucunu kestirmek için yapılır. Risk tayini, primer koruma stratejilerinin planlanmasında temel basamaktır.

**Soru 2 (ID: f4d9e6ed-35c2-42d6-a033-58cc52bd1ee5)**
Soru Kökü: Bireyin hastalığa yakalanma olasılığını tahmin etmek için yürütülen spesifik epidemiyolojik ve klinik işlemlere ne ad verilir?
Doğru Şık (E): Risk tayini
Açıklama: Risk tayini (risk assessment), bireyin gelecekte hastalığa yakalanma ihtimalini saptamak için risk faktörlerinin, belirleyicilerinin ve işaretlerinin bir arada analiz edildiği sürecin adıdır. Risk faktörü bu süreçte incelenen nedensel değişkenlerden biriyken, prognostik tayin zaten var olan bir hastalığın gelecekteki seyrini kestirmeye yönelik farklı bir işlemdir. Kavramların epidemiyolojik tanımları birbirinin yerine kullanılamaz.

---

### ÇİFT 252 (Benzerlik: 0.71)

**Soru 1 (ID: 81e7756f-6777-4165-8aaa-67f5a61968ca)**
Soru Kökü: Bir hastanın periodontal muayenesinde ekspoze diş yüzeyinin 2/3'ünden fazlasını kaplayan supragingival kalkulus ve servikal bölgede kesintisiz bant şeklinde kalın bir subgingival diş taşı tespit edilmiştir. Green-Vermillion OHI-S basitleştirilmiş kalkulus kriterlerine (CI-S) göre bu tabloya verilmesi gereken skor kaçtır?
Doğru Şık (A): 3
Açıklama: CI-S kriterlerinde servikalde bant şeklinde kesintisiz kalın subgingival taş birikimi veya 2/3'ü aşan supragingival taş birikimi Skor 3 olarak değerlendirilir. Ayrı ayrı duran bölgesel servikal taşlar veya 1/3 - 2/3 arası supragingival birikim ise Skor 2 sınırları içinde kalır. CI-S skorlaması hem yüzey alanını hem de subgingival taşın morfolojisini (bant vs bölgesel) dikkate alır.

**Soru 2 (ID: c665e17b-7fd4-4ddc-86e0-c7c2d40b6472)**
Soru Kökü: Periodontal idame terapisindeki bir hastanın gingival marjini ve komşu diş yüzeylerinde, çıplak gözle kolayca izlenebilen bol miktarda yumuşak eklenti ve diş taşı saptanmıştır. Löe ve Silness'in Plak İndeksi kriterleri kullanıldığında, bu diş yüzeyine atanacak skor aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 3
Açıklama: Bol miktarda yumuşak eklenti ve kalkulus varlığı, Löe ve Silness Plak İndeksi'nde en yüksek değer olan Skor 3'e denk gelir. Skor 2 orta derecede eklentiyi ifade ederken, indeksin 4 gibi bir skor basamağı bulunmamaktadır. Klinik olarak belirgin kalın plak ve taş tabakası bu kodlamanın anahtarıdır.

---

### ÇİFT 253 (Benzerlik: 0.71)

**Soru 1 (ID: 4df0e91e-c524-429d-8863-afeec7c98e3d)**
Soru Kökü: Mikrobiyolojik teşhiste subgingival örnekler için kullanılan immünodiagnostik yöntemlerin (Örn. İmmünfloresans, Elisa), klasik referans standart olan bakteriyel kültür yöntemine kıyasla en belirgin farklılığı/avantajı aşağıdakilerden hangisidir?
Doğru Şık (C): Testin çalışması için canlı mikroorganizma varlığına gereksinim duymamaları
Açıklama: İmmünodiagnostik testler hücre yüzeyindeki spesifik antijenleri hedefler; bu nedenle transport sırasında bakteri ölse dahi antijen bozulmadığı sürece tespit yapılabilir (canlı mikroorganizma gerektirmez). Kültür yöntemi ise canlılık ve çok hassas taşıma koşulları gerektirir. Antibiyotik duyarlılığını test edebilen tek in vitro yöntem ise sadece kültürdür.

**Soru 2 (ID: f13fedc5-8e84-4688-8c10-a8bbfb675df7)**
Soru Kökü: Bakteriyel kültür yöntemi, periodontal patojenlerin identifikasyonunda referans metod (gold standard) olarak kabul edilse de klinik rutinde kullanımını sınırlayan dezavantajlara sahiptir. Aşağıdakilerden hangisi kültür yönteminin bir dezavantajı **değildir**?
Doğru Şık (D): Örnekteki mikroorganizmaların sistemik antimikrobiyallere karşı antibiyotik duyarlılık testlerine (in vitro) olanak tanıması
Açıklama: Antibiyotik duyarlılığını in vitro olarak test edebilme yeteneği, kültür yönteminin bir dezavantajı değil; bilakis PCR veya DNA problarında bulunmayan en kritik avantajıdır (özellikle dirençli agresif periodontitis vakalarında). Hızlı sonuç alınamaması, canlı bakteri zorunluluğu ve düşük saptama limitine sahip olması asıl dezavantajları arasındadır.

---

### ÇİFT 254 (Benzerlik: 0.71)

**Soru 1 (ID: 412fcc80-9203-4bd6-9282-9663de04b59d)**
Soru Kökü: Bir halk sağlığı ekibi, kırsal bölgedeki büyük bir popülasyonun periodontal tedavi ihtiyaçlarını hızlı ve standart bir şekilde saptamak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen bir indeksi kullanmaya karar vermiştir. Hastalığın şiddetinden çok tedavi gereksinimine odaklanan bu indeks aşağıdakilerden hangisidir?
Doğru Şık (D): Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN)
Açıklama: Toplumda periodontal tedavi gereksinimini (kişisel oral hijyen, SCRP veya cerrahi) hızlıca tespit etmek için Dünya Sağlık Örgütü tarafından 1978'de geliştirilen indeks CPITN'dir. Bu indeks dişeti çekilmesi gibi spesifik yıkım verilerinden ziyade, kamu kaynaklarının nereye aktarılacağını belirleyen pratik bir saha indeksidir.

**Soru 2 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

---

### ÇİFT 255 (Benzerlik: 0.71)

**Soru 1 (ID: 0179fbf0-ad72-47a4-8651-177dde2e9b51)**
Soru Kökü: 55 yaşında erkek hasta, alt sağ birinci büyük azı dişinin furkasyon bölgesinde radyolusensi tespit edilmiştir. Farklı açılanmalarla alınan seri radyografilerde, kemik defektinin lingual kortikal tabakayı da içerdiği ve normal kemikten daha düzensiz (irregüler) göründüğü saptanmıştır. Bu tablo, periodontal iltihabın hangi bölgesel yayılımını radyografik olarak doğrular?
Doğru Şık (E): İltihabın interradiküler (kökler arası) kemiğe uzandığını
Açıklama: Çok köklü dişlerde furkasyon radyolusensisi, periodontal ataşman kaybının interradiküler kemiğe (kökler arası bölgeye) uzandığının temel bulgusudur. Kortikal tabakaların (bukkal veya lingual) rezorpsiyonu ile lezyon belirginleşir ve irregüler, sınırları tam seçilemeyen bir radyolusensi oluşur. Erken teşhisi prognozu (iyi'den şüpheliye) doğrudan değiştirir.

**Soru 2 (ID: 37259194-df73-4322-a568-faeeef6dde91)**
Soru Kökü: Elli altı yaşında erkek hasta, alt sağ birinci büyük azı dişinde (46 numaralı diş) çiğneme hassasiyeti ile başvuruyor. Radyografik değerlendirmede 46 numaralı dişin furkasyon bölgesinin apikaline uzanan belirgin bir radyolusent alan saptanıyor. Klinisyen, oluşan kemik defektinin karşı taraftaki kortikal tabakaya (lingual) ulaşıp ulaşmadığını kesinleştirmek istiyor. Bu defekt yapısının kortikal tutulumunu doğrulamak için yapılması gereken en uygun radyografik hamle aşağıdakilerden hangisidir?
Doğru Şık (B): Farklı tüp açılamalarıyla birden fazla periapikal görüntü almak
Açıklama: Mandibular molar furkasyon defektleri bukkal veya lingual kortikal tabakayı içerebilir. Defektin karşı taraftaki kortikal tabakaya ulaşıp ulaşmadığını (rezorbe edip etmediğini) saptayabilmek için röntgen tüpünün farklı yatay açılamalarıyla (mesial veya distal angulasyon) projeksiyon yapılması gerekir. Bu, süperpozisyonu kırar ve kortikal bütünlüğü gösterir.

---

### ÇİFT 256 (Benzerlik: 0.71)

**Soru 1 (ID: 8f78f6ba-b372-410b-bee5-ad5e8255035a)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta şiddetli ataçman kaybı tablosu ile başvuruyor. Muayenede plak miktarı çok az (minimal) olmasına rağmen periodontal yıkımın şiddetli olduğu ve lokalize bir dağılım gösterdiği saptanıyor. Bu durum periodontal mikrobiyolojide plağın kantitesinden çok kalitesinin hastalıkla ilişkili olduğunu vurgulamaktadır. Bu spesifik klinik tabloda (lokalize agresif periodontitis eğilimi) yıkımdan sorumlu olması en muhtemel birincil patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: Az plak varlığına rağmen şiddetli yıkım lokalize agresif periodontitisin tipik özelliğidir. A. actinomycetemcomitans sıklıkla bu klinik tabloyla güçlü bir nedensel ilişkiye sahiptir. P. gingivalis ve T. forsythia ise daha çok bol eklentiyle karakterize kronik periodontitis risk faktörleridir.

**Soru 2 (ID: ce920347-1080-4ca3-8d8c-3ff9739f3316)**
Soru Kökü: Periodontal hastalığın patogenezini inceleyen bir hekim, şiddetli ve hızlı ataşman kaybı olan lokalize bölgeleri incelerken yüzeyde minimal düzeyde bakteri plağı bulunduğunu saptamıştır. Bu klinik tablo, hastalığın gelişiminde plak miktarından (kantite) ziyade plağın patojenik kompozisyonunun (kalite) belirleyici olduğunu kanıtlamaktadır. Bu senaryo aşağıdaki hastalıklardan hangisinin karakteristik doğasını yansıtır?
Doğru Şık (E): Agresif periodontitis
Açıklama: Agresif periodontitisin en temel klinik özelliklerinden biri, yıkımın şiddetinin mevcut bakteri plağı miktarı (kantitesi) ile orantısız olmasıdır; bu da Aa gibi çok virulent bakterilerin oluşturduğu plak 'kalitesi'nin ön planda olduğunu gösterir. Kronik periodontitiste genellikle birikmiş lokal faktörler ve plak miktarı yıkımın seviyesi ile daha tutarlı bir korelasyon gösterir. Bu orantısızlık agresif formun anahtar ayırıcı tanısıdır.

---

### ÇİFT 257 (Benzerlik: 0.71)

**Soru 1 (ID: 4530c3d2-2f44-4192-995e-3114712724d8)**
Soru Kökü: Aile bireyleri arasında spesifik periodontal patojenlerin geçiş yollarını araştırmak isteyen bir araştırmacı, bakterilerin genetik heterojenliğini 'parmak izi' benzeri DNA fragmanlarına ayırarak incelemeyi planlamaktadır. Bu amaçla kullanılması gereken **en uygun** genetik yöntem aşağıdakilerden hangisidir?
Doğru Şık (C): Restriction endonükleaz analizi
Açıklama: Restriction endonükleaz analizi, çift iplikli DNA'yı spesifik sekanslardan bölerek türe özel 'parmak izi' benzeri fragmanlar oluşturur ve aile içi bakteri geçişinin incelenmesinde kullanılır. Nükleik asit probları ve PCR, DNA amplifikasyonu veya spesifik dizi tanıma prensibiyle çalışır ancak aile içi genotipik dağılım haritalamasından ziyade hızlı varlık tespiti yaparlar. Bu nedenle epidemiyolojik geçiş izleme çalışmalarında temel tercih restriction endonükleaz enzimlerinin kullanımıdır.

**Soru 2 (ID: e3329215-12ef-4d1a-8f0b-123b2015cdec)**
Soru Kökü: 38 yaşında agresif periodontitis tablosu sergileyen kadın hastadan alınan subgingival plak örneğinde, hedef A. actinomycetemcomitans'a ait spesifik DNA dizilerini radyoizotop veya floresan yardımıyla laboratuvarda tespit eden, karmaşık plak kültüründeki diğer alakasız bakterilerden etkilenmeyen teşhis yöntemi aşağıdakilerden hangisidir?
Doğru Şık (A): Nükleik asit probları
Açıklama: Nükleik asit (DNA) probları, hedef patojene spesifik kısa DNA dizileridir. Bu problar, plakta aranan bakterinin genomuna hidrojen bağlarıyla tutunur (hibridizasyon) ve floresan işaretleyicilerle parlayarak varlığını kanıtlar. Alakasız bakterilerden etkilenmeden yüksek spesifite sağlar. PCR ise enzimatik yolla DNA parçasını logaritmik olarak çoğaltma işlemidir; prob tekniği direkt hedef tespiti sağlar.

---

### ÇİFT 258 (Benzerlik: 0.71)

**Soru 1 (ID: 86a3b832-4d61-4587-a720-196a8268ba10)**
Soru Kökü: Geniş çaplı bir saha çalışmasında, 2025 yılının Haziran ayı itibariyle belirli bir ilçede yaşayan 40-50 yaş arası yetişkin bireylerin %65'inde kronik periodontitis bulunduğu saptanmıştır. Sadece belirli bir zaman kesitinde hastalıktan etkilenenlerin mevcut oranını ifade eden epidemiyolojik ölçüm aşağıdakilerden hangisidir?
Doğru Şık (E): Prevelans
Açıklama: Belirli bir zaman kesitinde veya periyodunda bir toplulukta hastalıktan etkilenenlerin mevcut oranına 'prevelans' adı verilir. Yeni vakaları değil, o anki toplam hasta yükünü yansıtır. Kronik hastalıkların toplumdaki yaygınlığını ölçmek için en sık kullanılan parametredir.

**Soru 2 (ID: b7b2a107-aefc-49d5-bd78-6cdc560edd6e)**
Soru Kökü: Bir araştırma grubu, sağlıklı periodonsiyuma sahip 1000 genç erişkini 5 yıl boyunca klinik olarak takip etmiş ve bu izlem süresi zarfında tam 150 bireyde yeni periodontal ataşman kaybı tablosunun ortaya çıktığını kaydetmiştir. Belli bir süre içinde yeni hastalık vakalarının ortaya çıkma sıklığını ifade eden epidemiyolojik terim aşağıdakilerden hangisidir?
Doğru Şık (D): Risk tayini
Açıklama: Bir toplulukta belli bir süre içinde 'yeni' bir hastalığın ortaya çıkma sıklığı insidanstır. Prevelans mevcut tüm vakaları kapsarken, insidans sadece risk altındaki sağlıklı gruptan yeni hastalananları hesaba katar. Hastalığın yayılma hızını gösteren temel dinamik ölçüttür. (Düzeltme: Doğru cevap A seçeneği olmalıydı, seçenek sıralamasında A'dan D'ye kaydırma yapılarak doğru şıkkın 'İnsidans' olduğu korunmuştur.)

---

### ÇİFT 259 (Benzerlik: 0.71)

**Soru 1 (ID: 2f84cbdd-4b1d-40c2-ad4c-eb68560efa63)**
Soru Kökü: 30 yaşında hamile kadın hasta, dişlerini fırçalarken kanama şikayetiyle başvuruyor. Yapılan intraoral muayenede dişetinde belirgin kırmızılık, ödem, parlaklık ve periodontal sond uygulaması sonrasında kanama saptanıyor ancak spontan kanama eğilimi gözlenmiyor. Löe ve Silness Gingival İndeksine göre bu dişetinin skor değeri kaçtır?
Doğru Şık (C): 2
Açıklama: Löe ve Silness Gingival İndeksinde skor 2; orta derecede inflamasyonu, kırmızılığı, ödemi, parlaklığı ve sondalamada kanamayı temsil eder. Skor 3 olabilmesi için spontan kanama veya ülserasyon bulgusu gerekirken, skor 1'de sondalamada kanama gözlenmez. İndeks yalnızca 0-3 arası değer alır, skor 4 tanımlı değildir.

**Soru 2 (ID: 58ae7756-70a3-465f-b0e1-69afcd6895c2)**
Soru Kökü: Yirmi dokuz yaşındaki erkek hastanın alt keserler bölgesinde sondalama olmaksızın yapılan görsel değerlendirmesinde; parlaklık, kırmızılık, ödem ve papiller ünitede belirgin hipertrofi izlenmiştir. Ülserasyon veya konjesyon belirtisi yoktur. Modifiye Gingival İndekse göre bu tablonun skoru kaçtır?
Doğru Şık (B): 3
Açıklama: Orta derecede inflamasyon, kırmızılık, ödem ve dişeti kenarında/papilde hipertrofi varlığı Modifiye Gingival İndekste skor 3 olarak değerlendirilir. Ülserasyon veya spontan kanama tablosu eklenseydi skor 4 (şiddetli inflamasyon) seviyesine çıkardı.

---

### ÇİFT 260 (Benzerlik: 0.71)

**Soru 1 (ID: 7c1492e5-39ca-4e75-ad59-ccb84713d464)**
Soru Kökü: Subgingival plaktaki spesifik bakterilerin saptanması için geliştirilen DNA teknolojilerinden Polimeraz Zincir Reaksiyonu (PCR) ile immünodiagnostik yöntemler kıyaslandığında, PCR'ın özelliği olarak aşağıdakilerden hangisi **yoktur**?
Doğru Şık (D): Spesifik mikrobiyal antijenleri tanıyan işaretli florasan antikorlar kullanması
Açıklama: Antijen-antikor reaksiyonunu kullanarak floresan işaretleme yapan yöntem 'İmmünofloresans Mikroskopisi'dir (immünodiagnostik bir tekniktir). PCR bir immünolojik (antikor) test değil, nükleik asit (DNA) dizisinin polimeraz enzimi ile kopyalanarak amplifiye edilmesi temeline dayanan yüksek hassasiyetli bir DNA testidir.

**Soru 2 (ID: c06c7eb7-75fc-4c4c-8c47-5dfba67b98a7)**
Soru Kökü: İmmünolojik teşhis metodları (Elisa, Akım sitometrisi, İmmünfloresans) periodontal klinik mikrobiyolojide kültüre göre daha hassastır ve incelenecek örneğin canlı mikroorganizma içermesi zorunluluğunu ortadan kaldırır. Ancak bu testlerin rutin klinik kullanımlarını en çok kısıtlayan dezavantaj aşağıdakilerden hangisidir?
Doğru Şık (C): Yalnızca sınırlı sayıda spesifik bakteri türü için antikor üretilmiş olması ve antibiyogram testi yapamamaları
Açıklama: İmmünodiagnostik testler antijen-antikor reaksiyonuna dayanır, bu nedenle yalnızca önceden tespit edilip antikoru sentezlenmiş spesifik patojenleri tespit edebilirler. Plakta bulunan yüzlerce yeni veya nadir türü tanıyamazlar ve en kritik klinik eksiklikleri olarak antimikrobiyal duyarlılık testi (antibiyogram) yapılmasını imkansız kılarlar. PCR'a göre saptama limitleri de genellikle daha zayıftır.

---

### ÇİFT 261 (Benzerlik: 0.71)

**Soru 1 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

**Soru 2 (ID: d7da17a8-f16e-46fd-b46a-2d661fd5847d)**
Soru Kökü: CPITN indeksi taramaları için Dünya Sağlık Örgütü (WHO) tarafından özel olarak dizayn edilmiş olan periodontal sondun ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Sadece kanama indeksini görsel olarak belirlemek amacıyla tasarlanmıştır.
Açıklama: WHO sondu sadece kanamayı tespit etmek için değil; uçtaki topuzu sayesinde subgingival diş taşlarının (tartarların) palpe edilerek belirlenmesi ve koyu renkli referans bantları ile cep derinliğinin (3.5 - 5.5 mm) hızlıca ölçülmesi amacıyla çok fonksiyonlu olarak tasarlanmıştır. Sondun ucu sivri olmadığı için doku travması engellenir.

---

### ÇİFT 262 (Benzerlik: 0.71)

**Soru 1 (ID: b299547f-7008-4b29-bd0c-49306da928a5)**
Soru Kökü: Aşağıdaki konak kaynaklı enzimlerden hangisinin dişeti oluğu sıvısındaki konsantrasyonu, sadece osteoblastlardan değil aynı zamanda nötrofillerden de kaynaklandığı için periodontal lezyon bölgelerinde sağlıklı bölgelere kıyasla belirgin artış gösterir?
Doğru Şık (A): Alkalen fosfataz
Açıklama: Alkalen fosfataz (ALP), periodonsiyumda başta osteoblastlar ve nötrofiller olmak üzere pek çok hücrede bulunur ve hastalıklı bölgelerde artar. Matriks metalloproteinazlar ise fibroblast ve makrofajlardan salınır, hücre matriks dengesinde rol alır. Nötrofil ve osteoblast kökeni belirterek doku yıkımının hücresel kaynağına işaret eden enzimatik profil ALP'dir.

**Soru 2 (ID: ebe07572-a3ab-4548-b058-f2dffd73d39f)**
Soru Kökü: Periodontal doku yıkımının moleküler patogenezinde, ekstrasellüler matriksin ve konak hücrelerinin biyokimyasal reaksiyonlarına yön veren çeşitli konak kaynaklı enzimler dişeti oluğu sıvısına (DOS) salınır. Enzim adı ve bu enzimin temel hücresel kaynağı/özelliği arasındaki ilişkilendirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Elastaz: Dokularda ekstrasellüler matriks döngüsünü korumak ve aşırı doku hasarını dengelemekle görevli anti-proteolitik bir inhibitördür.
Açıklama: Elastaz, dokuyu koruyan anti-proteolitik bir inhibitör değil; nötrofil granüllerinde bulunan ve periodontitisli bölgelerde aktif bağ dokusu proteinlerinin proteolitik yıkımından sorumlu agresif bir enzimdir. Matriks metalloproteinazlar (MMP) ekstrasellüler matriksin hücresel yıkım döngüsünü fizyolojik dengede tutmaya çalışırken patolojik durumda destrüksiyona yol açar. Alkalen fosfataz seviyesi ise artmış nötrofil degranülasyonu ve hücre ölümü (osteoblastlar dahil) kaynaklı olarak inflamasyon alanında yükselir.

---

### ÇİFT 263 (Benzerlik: 0.71)

**Soru 1 (ID: 5644ee01-da15-4d0e-a239-5d8aee9fd9ba)**
Soru Kökü: Bir toplumda belirli bir zaman kesitinde veya periyodunda periodontal hastalıktan etkilenen bireylerin toplam oranını ifade eden epidemiyolojik terim aşağıdakilerden hangisidir?
Doğru Şık (E): Prevelans
Açıklama: Prevelans, belli bir zaman kesitinde bir toplumda hastalıktan etkilenenlerin toplam oranını (eski ve yeni vakalar dahil) ifade eder. En güçlü çeldirici olan insidans ise belli bir süre içinde sadece 'yeni' bir hastalığın ortaya çıkma sıklığını ölçer. Epidemiyolojik çalışmalarda kronik bir tablonun toplumdaki genel yükü prevelans ile belirlenir.

**Soru 2 (ID: fbe3900e-1308-4f83-a68f-8a14d49ba7da)**
Soru Kökü: Bir üniversitenin araştırma merkezinde, daha önce periodontal açıdan tamamen sağlıklı olduğu tespit edilen 1000 kişilik bir grupta, 5 yıllık takip süreci sonunda 50 yeni periodontitis vakası saptanmıştır. Araştırmacıların bu çalışmada elde ettikleri ve belli bir sürede yeni hastalık çıkma sıklığını gösteren epidemiyolojik veri aşağıdakilerden hangisidir?
Doğru Şık (C): İnsidans
Açıklama: İnsidans, risk altındaki sağlıklı bir toplulukta belli bir zaman diliminde ortaya çıkan yeni hastalık vakalarının sıklığını tanımlar. Prevelans mevcut tüm vakaları kapsarken, insidans sadece hastalığa yeni yakalananları hedefler. Bu tür prospektif takip çalışmaları doğrudan insidans verisi üretir.

---

### ÇİFT 264 (Benzerlik: 0.71)

**Soru 1 (ID: 3f0b4de3-9f78-43c0-98a5-ddce58797e0a)**
Soru Kökü: Epidemiyolojik çalışmalarda periodontal yıkımın farklı aşamalarını değerlendirmek amacıyla kullanılan indekslerle ilgili olarak aşağıda verilen skor eşleşmelerinden hangisi **yanlıştır**?
Doğru Şık (D): Russell İndeksi Skor 4: Minumum 3 mm'ye kadar klinik ataşman kaybı
Açıklama: Russell Periodontal İndeksinde (PI) skorlar 0, 1, 2, 6 ve 8 şeklindedir (gingivitisi 1-2, cep varlığını 6, yıkımı 8 ile belirtir). Skor 4, 5 ve 6 numaralı skorlamalarla klinik ataşman kaybının spesifik milimetrik derecelerini (3 mm'ye kadar ataşman kaybı gibi) kaydeden sistem Russell değil, Ramfjord'un Periodontal Disease Index (PDI) sistemidir.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 265 (Benzerlik: 0.71)

**Soru 1 (ID: 1261b6cf-91fc-47d3-9aea-6da8d650d9b5)**
Soru Kökü: Aşağıdaki ajanlardan hangisi periodontitisli bireylerin subgingival ceplerinde sıklıkla saptanan ve plağın kalitesini patojenik yönde değiştiren etyolojik bakterilerden biridir?
Doğru Şık (A): Prevotella intermedia / nigrescens
Açıklama: Prevotella intermedia/nigrescens (P. intermedia), Peptostreptococcus micros ve Streptococcus intermedius gibi bakteriler plağın patojenitesini artıran ve periodontitis etyolojisinde spesifik olarak adı geçen ajanlardır. Laktobasil ve Actinomyces gibi türler genellikle çürük veya başlangıç plak florasında dominanttır, ileri periodontal yıkımda hedeflenen temel patojenler değildir.

**Soru 2 (ID: 17b733d6-35fa-4686-a21f-734d30ae9e39)**
Soru Kökü: Kırk beş yaşında erkek hasta kronik periodontitis tanısıyla tedaviye alınmıştır. Subgingival plakta bu hastalıkla en yoğun ilişkilendirilen spesifik bakteriyel risk faktörlerinden biri olan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis ve T. forsythia sıklıkla kronik periodontitiste bulunan majör risk faktörleridir. P. intermedia ve T. denticola da patojeniktir fakat nedensel 4 klasik kritere (eliminasyonda iyileşme, konak yanıtı, virülans faktörleri, hayvan modelinde başlatma) sahip ana risk faktörü üçlüsünde P. gingivalis başı çeker.

---

### ÇİFT 266 (Benzerlik: 0.71)

**Soru 1 (ID: 046cbd3e-9904-4731-83db-d326c57781d9)**
Soru Kökü: 28 yaşında kadın hasta, arka dişlerinin arasına sürekli gıda sıkışması şikayetiyle kliniğe başvurmuştur. Yapılan klinik muayenede dişlerde anatomik bir defekt izlenmemiş ancak interdental papilde lokalize gingival enflamasyon ve kemik yıkımı başlangıcı saptanmıştır. Bu bölgesel periodontal yıkım tablosuna zemin hazırlayan en olası morfolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Hafif açık proksimal kontakt ilişkisi
Açıklama: Hafif açık proksimal kontaktlar, komşu dişler arasındaki anatomik bütünlüğü bozarak çiğneme kuvvetleriyle gıdanın interdental bölgeye itilmesine (gıda sıkışmasına) izin verir. Kök konkaviteleri ve mine incileri de lokal risk faktörleridir ancak doğrudan okluzal kuvvetle interdental papile gıda sıkışmasına yol açan primer faktör açık kontakt ilişkisidir. Bu da kronik irritasyon ve lokalize yıkımla sonuçlanır.

**Soru 2 (ID: 04c19cfb-e462-44bb-9734-7f988c40b77d)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın oral hijyeni genel olarak iyi düzeyde olmasına rağmen, sadece 12 ve 22 numaralı dişlerin palatinal yüzeylerinde derin, dar lokalize periodontal cepler saptanmıştır. Panoramik radyografisinde yaygın bir periodontal yıkım izlenmemektedir. Bu spesifik izole ataşman kaybına zemin hazırlayan ve ilgili dişlerin prognozunu olumsuz etkileyen en olası lokal anatomik varyasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Gelişimsel palatinal oluk (Developmental groove)
Açıklama: Maksiller lateral kesici dişlerin (12 ve 22 numaralar) palatinal yüzeylerinde embriyolojik dönemde sıkça şekillenen 'gelişimsel palatinal oluklar', mine-sement birleşimini aşıp kök yüzeyine doğru ilerleyen anatomik tünellerdir. Bu oluklar fırça kıllarının ve hatta küretlerin ulaşamayacağı mikrobiyal plak retansiyon alanları yaratarak, hastanın genel hijyeni iyi olsa bile o dişe özgü şiddetli lokalize kemik kaybı ve cep oluşumuna (kötü prognoza) yol açarlar.

---

### ÇİFT 267 (Benzerlik: 0.71)

**Soru 1 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

**Soru 2 (ID: d7da17a8-f16e-46fd-b46a-2d661fd5847d)**
Soru Kökü: CPITN indeksi taramaları için Dünya Sağlık Örgütü (WHO) tarafından özel olarak dizayn edilmiş olan periodontal sondun ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Sadece kanama indeksini görsel olarak belirlemek amacıyla tasarlanmıştır.
Açıklama: WHO sondu sadece kanamayı tespit etmek için değil; uçtaki topuzu sayesinde subgingival diş taşlarının (tartarların) palpe edilerek belirlenmesi ve koyu renkli referans bantları ile cep derinliğinin (3.5 - 5.5 mm) hızlıca ölçülmesi amacıyla çok fonksiyonlu olarak tasarlanmıştır. Sondun ucu sivri olmadığı için doku travması engellenir.

---

### ÇİFT 268 (Benzerlik: 0.71)

**Soru 1 (ID: 1261b6cf-91fc-47d3-9aea-6da8d650d9b5)**
Soru Kökü: Aşağıdaki ajanlardan hangisi periodontitisli bireylerin subgingival ceplerinde sıklıkla saptanan ve plağın kalitesini patojenik yönde değiştiren etyolojik bakterilerden biridir?
Doğru Şık (A): Prevotella intermedia / nigrescens
Açıklama: Prevotella intermedia/nigrescens (P. intermedia), Peptostreptococcus micros ve Streptococcus intermedius gibi bakteriler plağın patojenitesini artıran ve periodontitis etyolojisinde spesifik olarak adı geçen ajanlardır. Laktobasil ve Actinomyces gibi türler genellikle çürük veya başlangıç plak florasında dominanttır, ileri periodontal yıkımda hedeflenen temel patojenler değildir.

**Soru 2 (ID: 3d75a178-07a3-4f9b-ad4a-699c1600236d)**
Soru Kökü: Aşağıdaki bakteriyel ajanlardan hangisi subgingival biyofilm kompozisyonunda yer alıp periodontitis etyolojisine katkıda bulunmasına rağmen, primer nedensel risk faktörü üçlüsünden (A.a, P.g, T.f) biri **değildir**?
Doğru Şık (D): Eubacterium nodatum
Açıklama: Eubacterium nodatum sekonder bir etyolojik ajandır. Periodontal hastalıklarda risk faktörü olabilmenin ana kriterleri konak yanıtı, virülans, eliminasyon sonrası klinik iyileşmedir ve bu özellikleri P. gingivalis, A. actinomycetemcomitans ve T. forsythia tam olarak karşılar.

---

### ÇİFT 269 (Benzerlik: 0.71)

**Soru 1 (ID: 4550901e-be84-4163-86af-4acbdb0ee30f)**
Soru Kökü: Elli beş yaşındaki erkek hastanın panoramik ve periapikal radyografik muayenesinde 16 numaralı dişte %50 oranında ataşman kaybı saptanmıştır. Klinik sondalamada Sınıf II furkasyon tutulumu izlenmiş, ancak bu bölgeye spesifik küretlerle erişimin ve temizliğin tamamen mümkün olduğu belirlenmiştir. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (B): Kötü
Açıklama: Ataşman kaybının %50 civarında olması ve kron/kök oranının elverişsizleşmeye başlaması dişin prognozunu Kötü (Poor) sınıfına sokar. Sınıf II furkasyon varlığı Kötü ve Şüpheli (Questionable) prognoz arasında ayırıcıdır; erişimin KISMEN KOLAY VE MÜMKÜN olması dişi Kötü prognozda tutarken, erişimin İMKANSIZA YAKIN VEYA ZOR olması durumu Şüpheli prognoza düşürür. Vakada erişim mümkün olduğu için Kötü prognoz tanısı konur.

**Soru 2 (ID: aef65bf4-0585-4d33-9a60-a64757703ea5)**
Soru Kökü: Mükemmel (Good) periodontal prognoz kriterleri düşünüldüğünde, bu sınıflamadaki bir dişte aşağıdaki bulgulardan hangisinin yer alması **beklenmez**?
Doğru Şık (B): Lokasyon açısından erişilebilen Sınıf I furkasyon tutulumu
Açıklama: Sınıf I furkasyon tutulumunun varlığı, ataşman kaybının başladığını ve anatomik bir riskin devreye girdiğini gösterdiğinden dişi Mükemmel (Good) kategoriden çıkarıp İyi (Fair) prognoz kategorisine indirger. Mükemmel prognozda furkasyon tutulumu ve kalıcı anatomik defekt bulunmaz, sadece diş etine sınırlı eklentiler veya tamamen sağlıklı destek doku söz konusudur.

---

### ÇİFT 270 (Benzerlik: 0.71)

**Soru 1 (ID: bd1ce7e1-d7ae-4d36-8110-10613a9356b8)**
Soru Kökü: Otuz beş yaşında erkek hastanın muayenesinde anterior dişlerin insizal kenarlarının tamamen düzleştiği, mine tabakasının aşınıp dentin adacıklarının açığa çıktığı ve posterior dişlerin tüberküllerinin silindiği görülmüştür. Hasta sabahları uyandığında çene kaslarında yorgunluk hissettiğini belirtmektedir. Bu tablonun gelişimine neden olan ve karşıt dişlerin fonksiyonel/parafonksiyonel kontağı sonucu meydana gelen mekanik madde kaybı aşağıdakilerden hangisidir?
Doğru Şık (A): Atrizyon
Açıklama: Atrizyon, karşıt dişlerin okluzal veya insizal yüzeylerinin birbiriyle doğrudan teması (çiğneme veya bruksizm gibi parafonksiyonlar) sonucunda meydana gelen fizyolojik veya patolojik mekanik aşınmadır. Hasta kas yorgunluğu tarif ederek bruksizmi doğrulamaktadır. Abrazyon fırça gibi dış maddelerle, erozyon ise asitle olur.

**Soru 2 (ID: d7e1df15-99f6-4dd0-9aad-26d5542ab399)**
Soru Kökü: Yirmi sekiz yaşındaki erkek hasta, şiddetli psikolojik iş stresi yaşadığını ve son aylarda sabahları uyandığında çenelerinde yaygın kas ağrısı olduğunu ifade etmektedir. Klinik muayenede dişlerde atrizyon fasetleri saptanmış, horizontal ve apiko-koronal yönlerde hafif artmış mobilite izlenmiştir. Ancak hiçbir dişte sondalanabilir patolojik derin cep izlenmemiştir. Bu hastadaki artmış dişi mobilitesini açıklayan fizyopatolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Artmış horizontal okluzal kuvvetlere bağlı olarak alveol kemiğinde gelişen elastik deformasyon
Açıklama: Strese bağlı gelişen bruksizm (sıkma/gıcırdatma), dişe fizyolojik sınırları aşan ağır okluzal (horizontal) kuvvetler binmesine neden olur. Bu durum okluzal travma mekanizmasını tetikler. Plak ve iltihap (cep) yokluğunda bu mekanik kuvvetler, alveol kemiğinde sekonder mobilite adını verdiğimiz elastik deformasyona ve periodontal ligament aralığında huni tarzı genişlemeye neden olarak dişte sallanma yaratır.

---

### ÇİFT 271 (Benzerlik: 0.71)

**Soru 1 (ID: 1729c99e-7327-49f3-b549-a805c0a70578)**
Soru Kökü: Uzun dönem epidemiyolojik ve klinik çalışmalarla kronik periodontitisin gelişiminde etyolojik ajan olarak rol oynadığı kesin olarak kanıtlanmış bir risk faktörü olan bakteri aşağıdakilerden hangisidir?
Doğru Şık (C): Tanerella forsythia
Açıklama: A. actinomycetemcomitans, P. gingivalis ve T. forsythia, periodontitis için nedensel olduğu açıkça kanıtlanmış ve risk faktörü olarak sınıflandırılan üç ana spesifik patojendir. Diğer şıklardaki bakteriler (C. rectus, F. nucleatum vb.) hastalıkla ilişkili olmakla birlikte, epidemiyolojik olarak klasik risk faktörü üçlüsünün dışında değerlendirilen destekleyici ajanlardır. Kesin nedensel kanıt mekanizması T. forsythia için netleştirilmiştir.

**Soru 2 (ID: 3d75a178-07a3-4f9b-ad4a-699c1600236d)**
Soru Kökü: Aşağıdaki bakteriyel ajanlardan hangisi subgingival biyofilm kompozisyonunda yer alıp periodontitis etyolojisine katkıda bulunmasına rağmen, primer nedensel risk faktörü üçlüsünden (A.a, P.g, T.f) biri **değildir**?
Doğru Şık (D): Eubacterium nodatum
Açıklama: Eubacterium nodatum sekonder bir etyolojik ajandır. Periodontal hastalıklarda risk faktörü olabilmenin ana kriterleri konak yanıtı, virülans, eliminasyon sonrası klinik iyileşmedir ve bu özellikleri P. gingivalis, A. actinomycetemcomitans ve T. forsythia tam olarak karşılar.

---

### ÇİFT 272 (Benzerlik: 0.71)

**Soru 1 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

**Soru 2 (ID: d7da17a8-f16e-46fd-b46a-2d661fd5847d)**
Soru Kökü: CPITN indeksi taramaları için Dünya Sağlık Örgütü (WHO) tarafından özel olarak dizayn edilmiş olan periodontal sondun ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Sadece kanama indeksini görsel olarak belirlemek amacıyla tasarlanmıştır.
Açıklama: WHO sondu sadece kanamayı tespit etmek için değil; uçtaki topuzu sayesinde subgingival diş taşlarının (tartarların) palpe edilerek belirlenmesi ve koyu renkli referans bantları ile cep derinliğinin (3.5 - 5.5 mm) hızlıca ölçülmesi amacıyla çok fonksiyonlu olarak tasarlanmıştır. Sondun ucu sivri olmadığı için doku travması engellenir.

---

### ÇİFT 273 (Benzerlik: 0.71)

**Soru 1 (ID: 492254ca-5729-4b70-b216-8867ca0fcf39)**
Soru Kökü: Aşağıdakilerden hangisi periodonsiyumu hastalığa yatkın hale getiren doğal 'lokal anatomik faktörler' arasında yer **almaz**?
Doğru Şık (D): Uyumsuz subgingival kron kenarları
Açıklama: Uyumsuz subgingival kron kenarları, plağa yatkınlık oluşturan bir lokal faktör olmakla birlikte doğal bir 'anatomik faktör' değil, iyatrojenik (hekim uygulamasına bağlı) bir 'restoratif faktör'dür. Gelişimsel oluklar, mine incileri, kısa/konik kök formları ve bifurkasyon kenarları ise dişin doğal gelişim morfolojisinden kaynaklanan anatomik zorluklardır.

**Soru 2 (ID: cb90cbf5-1bfc-4c80-8312-5ad70f80104f)**
Soru Kökü: Anatomik faktörlerin periodontal hastalık prognozuna etkileri incelendiğinde; özellikle maksiller kesici dişlerin palatinal yüzeylerinde izlenen, fırçalamanın anatomik zorluğu nedeniyle ciddi subgingival plak retansiyonu ve lokalize derin cep oluşumu yaratarak tedavinin prognozunu olumsuz etkileyen gelişimsel anomali aşağıdakilerden hangisidir?
Doğru Şık (B): Gelişimsel oluk (Palatogingival oluk)
Açıklama: Gelişimsel oluklar (palatogingival oluklar), sıklıkla maksiller yan kesici dişlerin palatinalinden başlayarak kök apeksine doğru uzanan anatomik defektlerdir. Bu oluklar, bakteri plağı için korunaklı bir rezervuar oluşturur ve mekanik (fırça/sond) erişimi imkansız kılarak şiddetli lokalize kemik kaybı ve pulpa-periodontal lezyonlara yol açar. Servikal mine çıkıntısı ise daha çok mandibular ve maksiller molarlarda (özellikle 2. molar) görülür.

---

### ÇİFT 274 (Benzerlik: 0.71)

**Soru 1 (ID: 63e160ee-2f94-49f9-9eb0-a832154f539c)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol amacıyla kliniğe başvurmuştur. Yapılan periodontal muayenede, WHO zondu kullanılarak tüm sekstantlar değerlendirilmiş; diş taşı saptanmamış, sondalamada kanama görülmemiş ve zondun ucundaki siyah bant tüm ceplerde tamamen görünür kalmıştır. Bu hastanın CPITN skoruna göre uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Hastalık belirtisi olmadığı için tedavi gerekmez
Açıklama: CPITN indeksinde diş taşı, kanama ve cep derinliğinin (3.5 mm altı) olmaması Kod 0 olarak değerlendirilir ve bu durumda periodontal sağlık mevcuttur. Hastaya kişisel oral hijyen eğitimi bile rutin profilaksi dışında bu kod kapsamında zorunlu tutulmaz, spesifik bir tedavi gerekmez. Sadece kanama olması (Kod 1) durumunda oral hijyen eğitimi verilirdi.

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 275 (Benzerlik: 0.70)

**Soru 1 (ID: 001367cf-c6b5-447e-9f53-f9504337f131)**
Soru Kökü: Bakteri plağının kalınlığını veya hacmini değerlendirmekten ziyade, mikrobiyal dental plağı boyayarak dişin 4 yüzeyinde sadece plağın varlığını (+) veya yokluğunu (-) kayıt altına alan, iyi bir ağız hijyeni için skorun sıfır olmasını hedefleyen indeks aşağıdakilerden hangisidir?
Doğru Şık (B): O'Leary Plak Kontrol Kaydı
Açıklama: O'Leary Plak Kontrol Kaydı (Plak İndeksi), dişlerin 4 yüzeyindeki plağı boyadıktan sonra sadece var (+) veya yok (-) olarak kaydeder ve plağın yüzdesini hesaplayarak hastanın motivasyonunda kullanılır. Löe-Silness indeksi plağın kalınlığını/miktarını 0-3 arası skorlarken, O'Leary ikili (dichotomous) bir değerlendirme sunar. Aproksimal alan plak indeksi ise 4 yüzey yerine sadece ara yüzleri değerlendirir.

**Soru 2 (ID: 3526beb7-0766-48e5-808a-aa9cc6e4c5b4)**
Soru Kökü: Periodontal muayene sırasında sadece dişlerin interproksimal (arayüz) bölgelerindeki plak varlığını boyama sonrası (+) veya (-) olarak kaydedip hastanın ara yüz temizlik etkinliğini değerlendiren Lange (1986) kaynaklı indeks aşağıdakilerden hangisidir?
Doğru Şık (C): Aproksimal Alan Plak İndeksi (API)
Açıklama: Aproksimal alan plak indeksi (API), özellikle ara yüz temizliğinin (diş ipi/arayüz fırçası kullanımı) etkinliğini ölçmek için spesifik olarak mezial ve distal alanlara odaklanır. O'Leary tüm yüzeyleri değerlendirirken, API yalnızca aproksimal alanlara daraltılmış bir perspektif sunar.

---

### ÇİFT 276 (Benzerlik: 0.70)

**Soru 1 (ID: 33a43953-2acf-447a-a458-d4a7b9c1ab81)**
Soru Kökü: 16 yaşında sistemik olarak sağlıklı erkek hasta, üst ön dişlerinin pozisyon değiştirerek yelpaze gibi açılmaya başladığı şikayetiyle ebeveyni tarafından kliniğe getirilmiştir. Klinik muayenede belirgin bir plak veya diştaşı birikimi olmamasına rağmen, radyografide birinci molar ve kesici bölgelerinde şiddetli vertikal kemik yıkımı izlenmiştir. Bu hastadaki patolojik diş migrasyonu öncelikle aşağıdakilerden hangisinin bir klinik belirtecidir?
Doğru Şık (E): Lokalize agresif periodontitis
Açıklama: Genç bireylerde, lokalize şiddetli kemik kaybıyla birlikte özellikle anterior dişlerde pozisyon değişikliğinin (patolojik migrasyon ve yelpaze gibi açılma) görülmesi, lokalize agresif periodontitisin klinik bir hallmark (ayırıcı belirti) bulgusudur. Hastalığın inflamatuar komponenti zayıf olsa da bağ dokusu yıkımı dişin desteğini zayıflatarak fizyolojik dudak/dil kuvvetleriyle bile göç etmesine neden olur.

**Soru 2 (ID: a07313d2-d285-4b8a-8437-d9c87518b575)**
Soru Kökü: 22 yaşında erkek hasta ön bölgede dişetlerinde kanama ve şişlik şikayetiyle başvurmuştur. Muayenede anterior bölgede plak ve diştaşı birikiminin yoğun olduğu, dişlerin üst üste kapanmadığı ve temasın bulunmadığı saptanmıştır. Hastada yiyeceklerin mekanik temizleme etkisinin ortadan kalkmasına bağlı gelişen bu yoğun plak retansiyonunun anatomik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Açık kapanış
Açıklama: Açık kapanışta (open bite), karşıt çenedeki dişler arasında temas olmaması sebebiyle besinlerin çiğneme sırasında yarattığı mekanik temizleme etkisi ortadan kalkar. Çapraz kapanışta okluzal travma, derin kapanışta ise alt dişlerin üst damak dişetine travması söz konusu iken; fonksiyon dışı kalmaya bağlı lokalize yoğun plak birikimi açık kapanışın tipik bulgusudur.

---

### ÇİFT 277 (Benzerlik: 0.70)

**Soru 1 (ID: 3cd7638b-880f-4c6a-ae63-08571b966598)**
Soru Kökü: Kırk beş yaşındaki erkek hastanın muayenesinde, 46 numaralı dişte %60 oranında ataşman kaybı, klinik kronun kök boyunu aştığı elverişsiz bir kron/kök oranı ve lokasyon açısından alet erişiminin oldukça zor olduğu Sınıf II furkasyon tutulumu tespit edilmiştir. Standart sınıflandırmaya göre bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (E): Şüpheli (Questionable)
Açıklama: Şüpheli (Questionable) prognozun temel klinik kriterleri; ataşman kaybının %50'den fazla olması, elverişsiz kron/kök oranı ve özellikle erişimi zor Sınıf II veya Sınıf III furkasyon tutulumunun varlığıdır. Kötü (Poor) prognozda da %50 ataşman kaybı ve Sınıf II furkasyon olabilir ancak oradaki temel ayrım Sınıf II defekte erişimin kolay (fakat tam temizlenmesi mümkün) olmasıdır. Erişim zorluğu direkt olarak durumu Şüpheli veya Umutsuz basamağına yaklaştırır.

**Soru 2 (ID: 8e56c68e-a6b7-436d-866d-8504872a5965)**
Soru Kökü: Altmış yaşındaki diyabetik kadın hasta şiddetli diş eti kanaması ve ön dişlerinde sallanma şikayetiyle başvurmuştur. Muayenede 24 numaralı dişte okluzal travma ve periodontal apse bulgusu olmaksızın, vertikal yönde de çökme hareketi gösteren 3. derece mobilite izlenmiştir. Standardize klinik kriterlere göre bu diş için en olası periodontal prognoz aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz
Açıklama: Periodontal ligamentte mobiliteyi geçici olarak artıran akut inflamasyon (apse vb.) veya okluzal travma yokluğunda ortaya çıkan ve dişin apiko-koronal yönde (vertikal) de hareket etmesini kapsayan 3. derece mobilite, destek kemiğin hemen tamamen kaybedildiğini gösterir. Bu dişte sağlık ve fonksiyonu devam ettirmeye yetecek ataşman kalmadığı için prognoz kesin olarak 'Umutsuz (Hopeless)' kabul edilir ve çekim endikasyonu doğar.

---

### ÇİFT 278 (Benzerlik: 0.70)

**Soru 1 (ID: 9617fd73-93f5-47aa-9673-41e742c8bdc8)**
Soru Kökü: Aşağıdaki doku yıkım ürünlerinden hangisi, periodontitiste bağ dokusu ekstrasellüler matriksinin enzimatik olarak bozulması sonucunda dişeti oluğu sıvısında artış gösterir?
Doğru Şık (B): Glikozaaminoglikanlar
Açıklama: Glikozaaminoglikanlar, ekstrasellüler matriksin proteolitik enzimlerce yıkılmasıyla serbest kalarak dişeti oluğu sıvısında tespit edilir. Hidroksiprolin doğrudan kollajen peptid yıkımını temsil ederken osteokalsin kemik rezorpsiyon döngüsüne aittir. Matriks temel maddesinin yıkım ürünü glikozaminoglikanlardır.

**Soru 2 (ID: afc71ce0-9962-428e-9b5e-6fbb1cfe8ad1)**
Soru Kökü: Aşağıdakilerden hangisi dişeti oluğu sıvısında saptanan, enflamasyonun patent bir mediatörü olarak doğrudan kemik rezorpsiyonunu indükleyen ve tedavi edilmemiş aktif yıkım vakalarında seviyesi artan moleküldür?
Doğru Şık (B): Prostaglandin E2
Açıklama: Prostaglandin E2, inflame bölgelerde artan, kemik rezorpsiyonunu şiddetle indükleyen ve konsantrasyonu aktif yıkım safhasında pik yapan spesifik bir inflamasyon mediatörüdür. Hidroksiprolin ve glikozaminoglikanlar mediatör değil yıkım ürünüdür; ALP ve katepsin ise enzimdir.

---

### ÇİFT 279 (Benzerlik: 0.70)

**Soru 1 (ID: 412fcc80-9203-4bd6-9282-9663de04b59d)**
Soru Kökü: Bir halk sağlığı ekibi, kırsal bölgedeki büyük bir popülasyonun periodontal tedavi ihtiyaçlarını hızlı ve standart bir şekilde saptamak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen bir indeksi kullanmaya karar vermiştir. Hastalığın şiddetinden çok tedavi gereksinimine odaklanan bu indeks aşağıdakilerden hangisidir?
Doğru Şık (D): Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN)
Açıklama: Toplumda periodontal tedavi gereksinimini (kişisel oral hijyen, SCRP veya cerrahi) hızlıca tespit etmek için Dünya Sağlık Örgütü tarafından 1978'de geliştirilen indeks CPITN'dir. Bu indeks dişeti çekilmesi gibi spesifik yıkım verilerinden ziyade, kamu kaynaklarının nereye aktarılacağını belirleyen pratik bir saha indeksidir.

**Soru 2 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

---

### ÇİFT 280 (Benzerlik: 0.70)

**Soru 1 (ID: 8d62237a-6acb-4833-a64e-b638d8d46ac7)**
Soru Kökü: Otuz beş yaşındaki erkek hastanın mandibular anterior bölgesinde kırmızılık, ödem ve parlaklık izlenmiş, cep içerisine sond yerleştirilip gezdirildiğinde dişetinde kanama meydana geldiği görülmüştür. Spontan kanama veya ülserasyon saptanmamıştır. Löe ve Silness'in Gingival İndeksine (GI) göre bu bölgenin skoru aşağıdakilerden hangisidir?
Doğru Şık (C): 2
Açıklama: Gingival İndekste skor 2, 'orta inflamasyon' tablosudur ve kırmızılık, ödem, parlaklık ile birlikte karakteristik olarak 'sondalamada kanama' varlığı ile tanımlanır. Eğer kanama sondalama olmadan kendiliğinden (spontan) olsaydı skor 3 olarak değerlendirilirdi.

**Soru 2 (ID: ea6d4d10-cca0-4b6d-8f62-aadd2d403bb8)**
Soru Kökü: Yirmi iki yaşında erkek hasta diş fırçalarken kanama şikayetiyle başvurmuştur. İntraoral muayenede diş taşı izlenmemiş, WHO zonduyla yapılan sekstant değerlendirmesinde sondalamada kanama pozitif bulunmuş, ancak cep derinlikleri 3 mm'yi geçmemiştir. CPITN indeksine göre bu hastanın tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (B): Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, sadece sondalamada dişeti kanaması olan vakaları tanımlar ve tedavi gereksinimi olarak yalnızca kişisel oral hijyen eğitimi verilmesini öngörür. Eğer dişte herhangi bir düzeyde taş bulunsaydı Kod 2'ye geçer ve mekanik debridman gerekirdi. Bu vakada eklenti olmaksızın sadece enflamasyon belirtisi kanama vardır.

---

### ÇİFT 281 (Benzerlik: 0.70)

**Soru 1 (ID: a12015f3-bedf-49d0-8bb6-c92921357795)**
Soru Kökü: 48 yaşında erkek hastanın tedavi sonrası idame safhasında, alveoler kemik yoğunluğundaki tekrarlayan değişimlerin dijital analizi planlanmaktadır. Video kameranın radyograftan yansıyan ışığı ölçüp skala çıkarması esasına dayanan, subtraction radyografiden daha hassas ve yüksek tekrarlanabilirliğe sahip sistem aşağıdakilerden hangisidir?
Doğru Şık (B): CADIA (Computer-assisted densitometric image analysis)
Açıklama: CADIA (Bilgisayar destekli densitometrik görüntü analizi sistemi), video kameranın radyograftan yansıyan ışığı okuyarak piksel bazlı yoğunluk skalası oluşturduğu çok hassas bir yöntemdir. Subtraction (çıkartma) radyografisine kıyasla kemik mineral yoğunluğundaki mikroskobik değişiklikleri daha yüksek bir sensitiviteyle ve tekrarlanabilirlikle ölçer.

**Soru 2 (ID: eddcaa5d-bcc8-4e9c-8c67-05524a14741a)**
Soru Kökü: Geleneksel klinik ve radyografik parametrelerin limitasyonlarını aşmak için geliştirilen ileri teşhis ve görüntüleme sistemleri ile bunların spesifik çalışma mekanizmaları arasındaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (B): CADIA (Computer-assisted densitometric image analysis): Radyoaktif izotoplar kullanılarak alveoler kret metabolizmasındaki artmış kemik döngüsünü tarar.
Açıklama: CADIA (Computer-assisted densitometric image analysis), radyoaktif izotop kullanmaz; bir video kameranın standart radyograftan yansıyan ışığı ölçmesi ve bunu dijital bir skalaya çevirmesi esasına dayanır. Nükleer tıp (kemik taraması) izotopik işaretleyicilerle kemik metabolizmasındaki erken fizyopatolojik değişiklikleri geleneksel yıkım görünmeden önce saptar. Absorptiometri ise spesifik olarak alveoler kemiğin mineral yoğunluğunun sayısal tayininde tercih edilen bir metodolojidir.

---

### ÇİFT 282 (Benzerlik: 0.70)

**Soru 1 (ID: b6912b5e-c5a5-44e0-93bf-940f8934098d)**
Soru Kökü: Şiddetli kronik periodontitis teşhisi ile kliniğe başvuran 55 yaşındaki kadın hastanın muayenesinde zayıf kök formları ve kontrolsüz diyabet tespit edilmiştir. Hekim bu verileri kullanarak dişlerin önümüzdeki 5 yıl içindeki yaşam döngüsünü öngörmeye çalışmaktadır. Hekimin uyguladığı bu bilişsel süreç aşağıdakilerden hangisidir?
Doğru Şık (D): Prognostik tayin
Açıklama: Hastalığın gidişatını ve nihai sonucunu (diş kaybı vb.) tahmin etmeye yönelik yapılan bu öngörü işlemine prognostik tayin denir. Hastada zaten hastalık var olduğu için yapılan işlem risk tayini değil, doğrudan prognoz değerlendirmesidir. Kontrolsüz diyabet ve zayıf kök formu burada prognostik faktörler olarak kullanılmıştır.

**Soru 2 (ID: e3bd663c-9fca-4353-8c5d-fbbbe0d15006)**
Soru Kökü: Hastanın sigara kullanım düzeyi, diyabetinin HbA1c değeri ve mevcut dişlerindeki kemik destek oranı kullanılarak, uygulanan periodontal tedavinin uzun dönemde nasıl bir başarı grafiği çizeceğinin tahmin edilmesine ne ad verilir?
Doğru Şık (E): Prognostik tayin
Açıklama: Hastalığın sonuçlarını kestirmeye yönelik özellikleri (prognostik faktörleri) kullanarak hastalığın gidişatını tahmin etme sürecine 'prognostik tayin' denir. Risk analizi/tayini hastalığın ortaya çıkma olasılığı ile ilgilenirken, prognostik tayin hasta halihazırda hastayken yapılır. Bu işlem, hastanın idame protokolünün sıklığını belirler.

---

### ÇİFT 283 (Benzerlik: 0.70)

**Soru 1 (ID: 3f0b4de3-9f78-43c0-98a5-ddce58797e0a)**
Soru Kökü: Epidemiyolojik çalışmalarda periodontal yıkımın farklı aşamalarını değerlendirmek amacıyla kullanılan indekslerle ilgili olarak aşağıda verilen skor eşleşmelerinden hangisi **yanlıştır**?
Doğru Şık (D): Russell İndeksi Skor 4: Minumum 3 mm'ye kadar klinik ataşman kaybı
Açıklama: Russell Periodontal İndeksinde (PI) skorlar 0, 1, 2, 6 ve 8 şeklindedir (gingivitisi 1-2, cep varlığını 6, yıkımı 8 ile belirtir). Skor 4, 5 ve 6 numaralı skorlamalarla klinik ataşman kaybının spesifik milimetrik derecelerini (3 mm'ye kadar ataşman kaybı gibi) kaydeden sistem Russell değil, Ramfjord'un Periodontal Disease Index (PDI) sistemidir.

**Soru 2 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

---

### ÇİFT 284 (Benzerlik: 0.70)

**Soru 1 (ID: 9617fd73-93f5-47aa-9673-41e742c8bdc8)**
Soru Kökü: Aşağıdaki doku yıkım ürünlerinden hangisi, periodontitiste bağ dokusu ekstrasellüler matriksinin enzimatik olarak bozulması sonucunda dişeti oluğu sıvısında artış gösterir?
Doğru Şık (B): Glikozaaminoglikanlar
Açıklama: Glikozaaminoglikanlar, ekstrasellüler matriksin proteolitik enzimlerce yıkılmasıyla serbest kalarak dişeti oluğu sıvısında tespit edilir. Hidroksiprolin doğrudan kollajen peptid yıkımını temsil ederken osteokalsin kemik rezorpsiyon döngüsüne aittir. Matriks temel maddesinin yıkım ürünü glikozaminoglikanlardır.

**Soru 2 (ID: b299547f-7008-4b29-bd0c-49306da928a5)**
Soru Kökü: Aşağıdaki konak kaynaklı enzimlerden hangisinin dişeti oluğu sıvısındaki konsantrasyonu, sadece osteoblastlardan değil aynı zamanda nötrofillerden de kaynaklandığı için periodontal lezyon bölgelerinde sağlıklı bölgelere kıyasla belirgin artış gösterir?
Doğru Şık (A): Alkalen fosfataz
Açıklama: Alkalen fosfataz (ALP), periodonsiyumda başta osteoblastlar ve nötrofiller olmak üzere pek çok hücrede bulunur ve hastalıklı bölgelerde artar. Matriks metalloproteinazlar ise fibroblast ve makrofajlardan salınır, hücre matriks dengesinde rol alır. Nötrofil ve osteoblast kökeni belirterek doku yıkımının hücresel kaynağına işaret eden enzimatik profil ALP'dir.

---

### ÇİFT 285 (Benzerlik: 0.70)

**Soru 1 (ID: 339084be-0ed6-44ba-b2cd-7c13d4727052)**
Soru Kökü: I. Spesifik interlökin-1 (IL-1) polimorfizmlerinin tespiti 
II. Monosit ve makrofajlarda IgG2 FcgRII reseptöründeki yapısal değişimler 
III. Nötrofillerde görülen kemotaksis ve fagositoz anomalileri 
Aile içi kümelenme gösteren şiddetli periodontitis hastalarının immünopatogenezinin arka planında yatan ve genetik predispozisyonu destekleyen mekanizmalar yukarıdakilerden hangileridir?
Doğru Şık (C): I, II ve III
Açıklama: Lokalize ve generalize agresif periodontitis formlarında hücresel bağışıklık fonksiyonları genetik kontrol altındadır. IL-1 pozitif genotipi aşırı inflamatuar yanıtla kronik/agresif yıkıma meyil yaratır. Nötrofil kemotaksis defektleri lokalize agresif formun klasik bulgusudur. Aynı zamanda A.a patojenine karşı konak yanıtını kontrol eden monosit FcgRII reseptör varyasyonları da hücresel genetik defektin temel parçasıdır.

**Soru 2 (ID: 7d815603-7001-4523-b90e-f92e1dc738e0)**
Soru Kökü: Genetik polimorfizmler periodontal hastalığın bireyler arasındaki klinik şiddet farklarını açıklamada önemlidir. Şiddetli kronik periodontitis tabloları ile spesifik genotipi arasında en güçlü ilişki kurulan proinflamatuar molekül aşağıdakilerden hangisidir?
Doğru Şık (D): İnterlökin-1 (IL-1)
Açıklama: Özellikle spesifik İnterlökin-1 (IL-1) genotip pozitifliğinin, artmış inflamatuar yanıt üzerinden şiddetli kronik periodontitis ile güçlü genetik ilişkisi bulunmuştur. Bu genotipe sahip hastalar (IL-1 pozitif) bakteriyel uyarıya abartılı sitokin salınımıyla yanıt vererek agresif ataçman kaybı yaşarlar. PGE2 lokal bir mediatördür ancak primer genetik test hedefi IL-1'dir.

---

### ÇİFT 286 (Benzerlik: 0.70)

**Soru 1 (ID: 3f0b4de3-9f78-43c0-98a5-ddce58797e0a)**
Soru Kökü: Epidemiyolojik çalışmalarda periodontal yıkımın farklı aşamalarını değerlendirmek amacıyla kullanılan indekslerle ilgili olarak aşağıda verilen skor eşleşmelerinden hangisi **yanlıştır**?
Doğru Şık (D): Russell İndeksi Skor 4: Minumum 3 mm'ye kadar klinik ataşman kaybı
Açıklama: Russell Periodontal İndeksinde (PI) skorlar 0, 1, 2, 6 ve 8 şeklindedir (gingivitisi 1-2, cep varlığını 6, yıkımı 8 ile belirtir). Skor 4, 5 ve 6 numaralı skorlamalarla klinik ataşman kaybının spesifik milimetrik derecelerini (3 mm'ye kadar ataşman kaybı gibi) kaydeden sistem Russell değil, Ramfjord'un Periodontal Disease Index (PDI) sistemidir.

**Soru 2 (ID: cb732f6f-4bd4-4f85-9bc3-167a9f5eec92)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) tarafından CPITN temel alınarak modifiye edilen Periodontal Screening and Recording (PSR) indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sondalamada kanamayı klinik değerlendirme dışında tutar.
Açıklama: PSR (Periodontal Screening and Recording) indeksi, CPITN'in temel prensiplerini taşır ve dişetinin şimdiki inflamasyon durumunu, yani kanamayı (BOP) ve diş taşını kesinlikle içerir ve değerlendirir. Kanama gibi inflamatuar parametrelerin varlığı, skorlamayı ve dolayısıyla uzman sevkiyat gereksinimini doğrudan etkiler.

---

### ÇİFT 287 (Benzerlik: 0.70)

**Soru 1 (ID: 146693d7-e450-4f7e-8a80-86d4e9455923)**
Soru Kökü: Periodontal yıkım sürecinde hücrelerarası proteinlerin parçalanmasından sorumlu olan asidik lizozomal enzim aşağıdakilerden hangisidir?
Doğru Şık (E): Katepsinler
Açıklama: Katepsinler, hastalığın ilerlemekte olduğunu gösteren asidik lizozomal enzimlerdir ve temel rolleri hücrelerarası protein yıkımını gerçekleştirmektir. B-glukorinidaz ve elastaz da lizozomal veya granül kaynaklı olmalarına rağmen asidik ortamda protein hidrolizi fonksiyonu direkt katepsinler üzerinden tanımlanmıştır. Bu biyokimyasal ayrım aktif hastalık markerlarının temelini oluşturur.

**Soru 2 (ID: d1be3dfd-e07e-4f37-82a7-083b7dce7be6)**
Soru Kökü: Otuz dört yaşında kadın hasta, generalize şiddetli periodontitis bulguları ile kliniğe başvurmuştur. Dişeti oluğu sıvısı analizinde nötrofil granüllerinden kaynaklanan bir lizozomal enzimin aktivitesinin yüksek olduğu ve bu durumun ataşman kaybı için prediktif özellik taşıdığı raporlanmıştır. Tanımlanan bu enzim aşağıdakilerden hangisidir?
Doğru Şık (D): B-glukorinidaz
Açıklama: B-glukorinidaz, şiddetli periodontal hastalıklarda artış gösteren ve gelecekteki ataşman kaybı için güçlü prediktif (öngörücü) değer taşıyan bir nötrofil lizozomal enzimidir. AST ölü doku kaynaklıdır, katepsinler ise asidik protein yıkımından sorumludur. Bu nedenle nötrofil kaynaklı prediktif yıkım belirteci spesifik olarak B-glukorinidazdır.

---

### ÇİFT 288 (Benzerlik: 0.70)

**Soru 1 (ID: 29f4af0b-3b85-4a62-b6fe-719ea0f2429f)**
Soru Kökü: Klinik periodontal muayenede iki aletin sapı kullanılarak bir dişe vestibülo-lingual yönde kuvvet uygulanmış ve dişteki hareketlilik gözlemlenmiştir. Diş hareketinin 0.2 mm'yi geçmediği, vertikal bir çökmenin olmadığı saptanmıştır. Miller'ın Mobilite İndeksi'ne göre bu dişin skoru aşağıdakilerden hangisidir?
Doğru Şık (E): Skor 0
Açıklama: Miller'ın Mobilite İndeksi'nde kuvvet uygulandığında dişin 0.2 mm'yi geçmeyen fizyolojik hareketi Skor 0 olarak değerlendirilir. Hareket 1 mm'den az ise Skor 1, 1-2 mm arası ise Skor 2, 2 mm'yi aşan dikey yönde (apikal çökme) veya dönme hareketi varsa Skor 3 olarak kaydedilir. Bu indeks patolojik ve fizyolojik mobilitenin klinik standart ayrımıdır.

**Soru 2 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

---

### ÇİFT 289 (Benzerlik: 0.70)

**Soru 1 (ID: 86a3b832-4d61-4587-a720-196a8268ba10)**
Soru Kökü: Geniş çaplı bir saha çalışmasında, 2025 yılının Haziran ayı itibariyle belirli bir ilçede yaşayan 40-50 yaş arası yetişkin bireylerin %65'inde kronik periodontitis bulunduğu saptanmıştır. Sadece belirli bir zaman kesitinde hastalıktan etkilenenlerin mevcut oranını ifade eden epidemiyolojik ölçüm aşağıdakilerden hangisidir?
Doğru Şık (E): Prevelans
Açıklama: Belirli bir zaman kesitinde veya periyodunda bir toplulukta hastalıktan etkilenenlerin mevcut oranına 'prevelans' adı verilir. Yeni vakaları değil, o anki toplam hasta yükünü yansıtır. Kronik hastalıkların toplumdaki yaygınlığını ölçmek için en sık kullanılan parametredir.

**Soru 2 (ID: d3d4e99c-c108-411b-b315-ccfd9a5007bf)**
Soru Kökü: 35 yaşında erkek hasta kliniğe başvuruyor. Kendisini muayene eden hekim, eş zamanlı olarak toplumda belirli bir zaman kesitinde hastalıktan etkilenen bireylerin oranını hesaplayan bir halk sağlığı araştırması yürütmektedir. Hekimin bu epidemiyolojik çalışmada hesaplamaya çalıştığı veri aşağıdakilerden hangisidir?
Doğru Şık (A): Prevelans
Açıklama: Prevelans, bir zaman kesitinde veya periyodunda toplulukta hastalıktan etkilenenlerin genel oranını ifade eder ve kesitsel epidemiyolojik çalışmaların temel verisidir. İnsidans, belli bir süre içinde yeni ortaya çıkan hastalık sıklığıdır. Risk ve prognoz ise olasılık ve gidişat tahmini ile ilgili kavramlar olup anlık toplum kesitini yansıtmazlar.

---

### ÇİFT 290 (Benzerlik: 0.70)

**Soru 1 (ID: 0cc469f7-719f-4c35-b292-a89144ac4acc)**
Soru Kökü: Epidemiyolojik bir tarama çalışmasında incelenen bireyin 16 numaralı indeks dişinde sekstant değerlendirmesi CPITN probu ile yapılıyor. Probun ucundaki renkli bant tamamen kaybolmuş ancak subgingival tartar hissi alınmıyor. Yapılan ölçümde tespit edilen klinik tabloya göre, bireyin tedavi gereksinim sınıflandırması (CPITN skoru) ve önerilen tedavi protokolü aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 4 - OHE + Kök yüzeyi düzleştirmesi + Cerrahi periodontal tedavi
Açıklama: CPITN sondunun koyu renkli bandı 3.5 - 5.5 mm arasındadır. Bandın tamamen kaybolması, cebin 5.5 mm'den, yani 6 mm veya daha derin olduğunu gösterir. CPITN sınıflamasında 6 mm veya daha derin patolojik cep durumu 'Skor 4' olarak adlandırılır. Skor 4'ün tedavi prosedürü Oral Hijyen Eğitimi + Subgingival Küretaj (SCRP) + Cerrahi işlemdir.

**Soru 2 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

---

### ÇİFT 291 (Benzerlik: 0.70)

**Soru 1 (ID: 8f78f6ba-b372-410b-bee5-ad5e8255035a)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta şiddetli ataçman kaybı tablosu ile başvuruyor. Muayenede plak miktarı çok az (minimal) olmasına rağmen periodontal yıkımın şiddetli olduğu ve lokalize bir dağılım gösterdiği saptanıyor. Bu durum periodontal mikrobiyolojide plağın kantitesinden çok kalitesinin hastalıkla ilişkili olduğunu vurgulamaktadır. Bu spesifik klinik tabloda (lokalize agresif periodontitis eğilimi) yıkımdan sorumlu olması en muhtemel birincil patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: Az plak varlığına rağmen şiddetli yıkım lokalize agresif periodontitisin tipik özelliğidir. A. actinomycetemcomitans sıklıkla bu klinik tabloyla güçlü bir nedensel ilişkiye sahiptir. P. gingivalis ve T. forsythia ise daha çok bol eklentiyle karakterize kronik periodontitis risk faktörleridir.

**Soru 2 (ID: b855cdb1-c024-4f54-9a6b-a2fbf450c348)**
Soru Kökü: Aşağıdaki bakterilerden hangisinin varlığı periodontitis için epidemiyolojik çalışmalarda açık bir risk faktörü olarak tanımlanmıştır ve sıklıkla agresif periodontitis tabloları ile güçlü korelasyon gösterir?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: Actinobacillus actinomycetemcomitans (A.a), P. gingivalis ve T. forsythia ile birlikte periodontitis için nedensel ajan (kesin risk faktörü) kriterlerini sağlayan üç spesifik bakteriden biridir ve agresif periodontitis ile karakterizedir. F. nucleatum ve C. rectus gibi ajanlar etyolojide rol alsa da ana 'risk faktörü' üçlüsünde yer almaz.

---

### ÇİFT 292 (Benzerlik: 0.70)

**Soru 1 (ID: 3d75a178-07a3-4f9b-ad4a-699c1600236d)**
Soru Kökü: Aşağıdaki bakteriyel ajanlardan hangisi subgingival biyofilm kompozisyonunda yer alıp periodontitis etyolojisine katkıda bulunmasına rağmen, primer nedensel risk faktörü üçlüsünden (A.a, P.g, T.f) biri **değildir**?
Doğru Şık (D): Eubacterium nodatum
Açıklama: Eubacterium nodatum sekonder bir etyolojik ajandır. Periodontal hastalıklarda risk faktörü olabilmenin ana kriterleri konak yanıtı, virülans, eliminasyon sonrası klinik iyileşmedir ve bu özellikleri P. gingivalis, A. actinomycetemcomitans ve T. forsythia tam olarak karşılar.

**Soru 2 (ID: b855cdb1-c024-4f54-9a6b-a2fbf450c348)**
Soru Kökü: Aşağıdaki bakterilerden hangisinin varlığı periodontitis için epidemiyolojik çalışmalarda açık bir risk faktörü olarak tanımlanmıştır ve sıklıkla agresif periodontitis tabloları ile güçlü korelasyon gösterir?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: Actinobacillus actinomycetemcomitans (A.a), P. gingivalis ve T. forsythia ile birlikte periodontitis için nedensel ajan (kesin risk faktörü) kriterlerini sağlayan üç spesifik bakteriden biridir ve agresif periodontitis ile karakterizedir. F. nucleatum ve C. rectus gibi ajanlar etyolojide rol alsa da ana 'risk faktörü' üçlüsünde yer almaz.

---

### ÇİFT 293 (Benzerlik: 0.70)

**Soru 1 (ID: 87e13d94-2d81-48c5-ae0a-b5cff8a0983e)**
Soru Kökü: Kırk beş yaşında kadın hastanın 26 numaralı dişinde yaklaşık %50 ataçman kaybı, kısa kök formu, elverişsiz kron-kök oranı ve II. sınıf furkasyon tutulumu tespit ediliyor. Furkasyon bölgesine lokasyon ve derinlik açısından erişim ve alet adaptasyonu zor da olsa mümkün görünmektedir. Standart klinik kriterlere göre bu dişin periodontal prognoz kategorisi aşağıdakilerden hangisidir?
Doğru Şık (C): Kötü (Poor prognosis)
Açıklama: Kötü (Poor) prognoz tanımı: %50 ataçman kaybı, zayıf/kısa kök formu, elverişsiz kron-kök oranı ve erişimin kolay olmamakla birlikte MÜMKÜN olduğu II. sınıf furkasyon tutulumunu tanımlar. Eğer erişim 'zor/mümkün değil' veya III. sınıf furka olsaydı Şüpheli (Questionable) prognoza girerdi.

**Soru 2 (ID: b107b9da-42f4-41db-b42a-df162b1af347)**
Soru Kökü: Altmış iki yaşındaki erkek hasta, dişlerinde şiddetli sallanma şikayetiyle başvurmuştur. Muayenede 16 numaralı dişte kemik desteğinin tamamen yok olduğu, Sınıf III furkasyon tutulumu ve dikey mobilitenin bulunduğu saptanmıştır. Kalan periodontal doku fonksiyon ve yaşam kalitesini idame ettiremeyecek durumdadır. Bu dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz (Hopeless)
Açıklama: Sağlık, fonksiyon ve yaşam kalitesini devam ettirmeye yetecek minimal periodontal ataşmanın dahi bulunmadığı şiddetli yıkım durumları 'Umutsuz (Hopeless)' olarak sınıflandırılır ve bu dişler genellikle doğrudan çekim endikasyonuna sahiptir. Şüpheli prognozda ise %50'den fazla kayıp olmasına rağmen spesifik tedavilerle dişin ağızda tutulma olasılığı halen değerlendirilir.

---

### ÇİFT 294 (Benzerlik: 0.70)

**Soru 1 (ID: 15440e34-2e67-4e7a-8624-2caa4b9882a1)**
Soru Kökü: Modifiye Gingival İndekse (MGI) göre, papiller ve marjinal bölgeler dahil olmak üzere tüm dişeti ünitesini kaplayan ancak görsel olarak şiddetli düzeyde olmayan hafif bir inflamasyon tablosu aşağıdaki skorlardan hangisiyle ifade edilir?
Doğru Şık (D): 2
Açıklama: Tüm dişeti ünitesini kaplayan ancak klinik karakter olarak hala 'hafif' kategorisinde değerlendirilen inflamasyon Modifiye Gingival İndekste skor 2'dir. Skor 1 ile arasındaki temel fark lezyonun şiddeti değil, ünitedeki yaygınlığıdır (kapsama alanıdır).

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 295 (Benzerlik: 0.70)

**Soru 1 (ID: 412fcc80-9203-4bd6-9282-9663de04b59d)**
Soru Kökü: Bir halk sağlığı ekibi, kırsal bölgedeki büyük bir popülasyonun periodontal tedavi ihtiyaçlarını hızlı ve standart bir şekilde saptamak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen bir indeksi kullanmaya karar vermiştir. Hastalığın şiddetinden çok tedavi gereksinimine odaklanan bu indeks aşağıdakilerden hangisidir?
Doğru Şık (D): Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN)
Açıklama: Toplumda periodontal tedavi gereksinimini (kişisel oral hijyen, SCRP veya cerrahi) hızlıca tespit etmek için Dünya Sağlık Örgütü tarafından 1978'de geliştirilen indeks CPITN'dir. Bu indeks dişeti çekilmesi gibi spesifik yıkım verilerinden ziyade, kamu kaynaklarının nereye aktarılacağını belirleyen pratik bir saha indeksidir.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 296 (Benzerlik: 0.70)

**Soru 1 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

**Soru 2 (ID: dc19c943-c319-4405-b232-735cd80aa987)**
Soru Kökü: Aşağıdakilerden hangisi Periodontal Tarama ve Kayıt (PSR) indeksinin, öncülü olan CPITN indeksine göre sunduğu temel klinik üstünlüklerinden biri olarak kabul edilir?
Doğru Şık (A): Klinisyene hastanın ataşman kaybı durumu hakkında da bilgi verebilmesi
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermez, yalnızca tedavi ihtiyacını (diş taşı, kanama, cep) gösterir. PSR ise CPITN'in modifiye edilmiş halidir ve kompleks formu karmaşıklaştırmadan periodontitisin erken tanısına yardımcı olurken, aynı zamanda cep derinliğindeki olası değişimleri ve ATAŞMAN KAYBINI gösterebilmesiyle ayrılır.

---

### ÇİFT 297 (Benzerlik: 0.70)

**Soru 1 (ID: 4bdb9bbf-c34d-43d9-8014-7162fa36747d)**
Soru Kökü: Löe ve Silness tarafından geliştirilen Gingival İndeks'te (GI), sondalamada kanama görülmediği halde renkte hafif değişiklik ve hafif ödemin izlendiği başlangıç aşamasındaki dişeti enflamasyonu hangi skor ile değerlendirilir?
Doğru Şık (B): Skor 1
Açıklama: Gingival İndeks'te Skor 1, renkte hafif değişiklik ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif enflamasyonu ifade eder. Skor 2'de orta enflamasyon ve sondalamada kanama başlar, Skor 3'te ise ülserasyon ve spontan kanama görülür.

**Soru 2 (ID: c665e17b-7fd4-4ddc-86e0-c7c2d40b6472)**
Soru Kökü: Periodontal idame terapisindeki bir hastanın gingival marjini ve komşu diş yüzeylerinde, çıplak gözle kolayca izlenebilen bol miktarda yumuşak eklenti ve diş taşı saptanmıştır. Löe ve Silness'in Plak İndeksi kriterleri kullanıldığında, bu diş yüzeyine atanacak skor aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 3
Açıklama: Bol miktarda yumuşak eklenti ve kalkulus varlığı, Löe ve Silness Plak İndeksi'nde en yüksek değer olan Skor 3'e denk gelir. Skor 2 orta derecede eklentiyi ifade ederken, indeksin 4 gibi bir skor basamağı bulunmamaktadır. Klinik olarak belirgin kalın plak ve taş tabakası bu kodlamanın anahtarıdır.

---

### ÇİFT 298 (Benzerlik: 0.70)

**Soru 1 (ID: 001367cf-c6b5-447e-9f53-f9504337f131)**
Soru Kökü: Bakteri plağının kalınlığını veya hacmini değerlendirmekten ziyade, mikrobiyal dental plağı boyayarak dişin 4 yüzeyinde sadece plağın varlığını (+) veya yokluğunu (-) kayıt altına alan, iyi bir ağız hijyeni için skorun sıfır olmasını hedefleyen indeks aşağıdakilerden hangisidir?
Doğru Şık (B): O'Leary Plak Kontrol Kaydı
Açıklama: O'Leary Plak Kontrol Kaydı (Plak İndeksi), dişlerin 4 yüzeyindeki plağı boyadıktan sonra sadece var (+) veya yok (-) olarak kaydeder ve plağın yüzdesini hesaplayarak hastanın motivasyonunda kullanılır. Löe-Silness indeksi plağın kalınlığını/miktarını 0-3 arası skorlarken, O'Leary ikili (dichotomous) bir değerlendirme sunar. Aproksimal alan plak indeksi ise 4 yüzey yerine sadece ara yüzleri değerlendirir.

**Soru 2 (ID: 27492233-6eb6-4296-aa05-0b6aec971e43)**
Soru Kökü: Ağız hijyeni düzeyini belirlemek üzere muayene edilen bir hastada, serbest dişeti kenarına yapışmış ince bir tabaka gözlenmektedir. Çıplak gözle fark edilemeyen bu eklenti, ancak boyayıcı ajanlar veya dişeti cebinde bir sondun gezdirilmesi ile tespit edilebilmiştir. Löe ve Silness'in Plak İndeksi'ne göre bu bölgeye verilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 1
Açıklama: Löe ve Silness Plak İndeksi'nde Skor 1, çıplak gözle izlenemeyen ancak serbest dişeti kenarına film halinde yapışmış ve sond/boya ile tespit edilebilen plağı tanımlar. Skor 2'de eklenti çıplak gözle görülebilen orta derecede bir yapıya ulaşır. Skor 0 ise eklentinin tamamen yokluğunu ifade eder.

---

### ÇİFT 299 (Benzerlik: 0.70)

**Soru 1 (ID: 8e56c68e-a6b7-436d-866d-8504872a5965)**
Soru Kökü: Altmış yaşındaki diyabetik kadın hasta şiddetli diş eti kanaması ve ön dişlerinde sallanma şikayetiyle başvurmuştur. Muayenede 24 numaralı dişte okluzal travma ve periodontal apse bulgusu olmaksızın, vertikal yönde de çökme hareketi gösteren 3. derece mobilite izlenmiştir. Standardize klinik kriterlere göre bu diş için en olası periodontal prognoz aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz
Açıklama: Periodontal ligamentte mobiliteyi geçici olarak artıran akut inflamasyon (apse vb.) veya okluzal travma yokluğunda ortaya çıkan ve dişin apiko-koronal yönde (vertikal) de hareket etmesini kapsayan 3. derece mobilite, destek kemiğin hemen tamamen kaybedildiğini gösterir. Bu dişte sağlık ve fonksiyonu devam ettirmeye yetecek ataşman kalmadığı için prognoz kesin olarak 'Umutsuz (Hopeless)' kabul edilir ve çekim endikasyonu doğar.

**Soru 2 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

---

### ÇİFT 300 (Benzerlik: 0.70)

**Soru 1 (ID: 046cbd3e-9904-4731-83db-d326c57781d9)**
Soru Kökü: 28 yaşında kadın hasta, arka dişlerinin arasına sürekli gıda sıkışması şikayetiyle kliniğe başvurmuştur. Yapılan klinik muayenede dişlerde anatomik bir defekt izlenmemiş ancak interdental papilde lokalize gingival enflamasyon ve kemik yıkımı başlangıcı saptanmıştır. Bu bölgesel periodontal yıkım tablosuna zemin hazırlayan en olası morfolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Hafif açık proksimal kontakt ilişkisi
Açıklama: Hafif açık proksimal kontaktlar, komşu dişler arasındaki anatomik bütünlüğü bozarak çiğneme kuvvetleriyle gıdanın interdental bölgeye itilmesine (gıda sıkışmasına) izin verir. Kök konkaviteleri ve mine incileri de lokal risk faktörleridir ancak doğrudan okluzal kuvvetle interdental papile gıda sıkışmasına yol açan primer faktör açık kontakt ilişkisidir. Bu da kronik irritasyon ve lokalize yıkımla sonuçlanır.

**Soru 2 (ID: e1f21a66-0117-44cc-a622-30fe3ba05627)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın 16 numaralı (üst sağ birinci büyük azı) dişinin mesiobukkal kökünde derin bir cebi bulunmaktadır. Başlangıç tedavisi (SRP) sırasında klinisyen, el aletlerinin bu spesifik kök yüzeyine tam adapte olamadığını fark etmiştir. Bu bölgedeki alet adaptasyonunu fizyolojik olarak zorlaştıran en olası anatomik oluşum aşağıdakilerden hangisidir?
Doğru Şık (C): Kök konkavitesi
Açıklama: Maksiller birinci büyük azı dişlerinin mesiobukkal köklerinde ve mandibular molarların kök yüzeylerinde anatomik olarak derin 'kök konkaviteleri' (boylamasına çöküntüler) bulunur. Bu içbükey yüzeyler, düz küretlerin kök formuna tam adapte olmasını engelleyerek içerideki kalkulus ve plağın alınmasını son derece zorlaştırır.

---

### ÇİFT 301 (Benzerlik: 0.70)

**Soru 1 (ID: 9a16298d-c327-46d2-8925-0d147cdd3847)**
Soru Kökü: Sert fırçalama, abrasiv diş macunu kullanımı veya kroşelerin oluşturduğu sürtünme gibi çiğneme dışındaki mekanik faktörler sonucu dişlerde ortaya çıkan madde kaybı aşağıdakilerden hangisidir?
Doğru Şık (C): Abrazyon
Açıklama: Abrazyon, fizyolojik çiğneme dışındaki dış mekanik etkiler (örneğin horizontal sert fırçalama veya kroşe sürtünmesi) sonucu oluşan madde kaybıdır. En güçlü çeldirici olan atrizyon ise karşıt dişlerin fonksiyonel teması sonucu oluşan okluzal aşınmayı ifade eder. Bu durum klinik muayenede dişin kole bölgesindeki karakteristik defektlerle ayırt edilir.

**Soru 2 (ID: f072b323-658e-484d-82d2-19df08141e84)**
Soru Kökü: Yirmi beş yaşında kadın hastanın üst ön dişlerinin vestibül yüzeylerinde, mine dokusunun parlaklığını kaybettiği ve sığ, düzgün çanak şeklinde madde kayıplarının olduğu izlenmektedir. Hastanın anamnezinde asitli içecekleri gün içinde sürekli ve yudumlayarak tükettiği öğrenilmiştir. Bakteriyel olmayan bu kimyasal aşınma türü aşağıdakilerden hangisi ile adlandırılır?
Doğru Şık (C): Erozyon
Açıklama: Erozyon, asitli gıda/içecek tüketimi veya mide reflüsü gibi mekanik ve bakteriyel olmayan, tamamen kimyasal süreçlerle meydana gelen diş dokusu kaybıdır. Abrazyon diş fırçalama gibi mekanik sürtünmeyle, atrizyon ise karşıt dişlerin temasıyla oluşur. Çanak şeklinde düzgün yüzeyler erozyonun tipik morfolojik klinik belirtecidir.

---

### ÇİFT 302 (Benzerlik: 0.70)

**Soru 1 (ID: 9a1b281e-3eb6-4a42-9a53-28f4b49c2b43)**
Soru Kökü: Dental plak değerlendirmesinde klinik kullanımı olan Aproksimal Alan Plak İndeksi (API) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Puanlama sırasında plak kalınlığı 0 ile 3 arasındaki skorlarla derecelendirilir.
Açıklama: Aproksimal alan plak indeksinde (API) plağın kalınlığı ölçülmez; plak varlığı (+) veya plak yokluğu (-) şeklinde ikili (dikotomöz) bir değerlendirme yapılır. Plak kalınlığını 0-3 arası skorlayan indeks Löe ve Silness'in Plak İndeksi'dir. API, hasta motivasyonunda hızlı bir yüzde değeri vermek için idealdir.

**Soru 2 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

---

### ÇİFT 303 (Benzerlik: 0.70)

**Soru 1 (ID: 8dc1e8a4-6b2b-4b21-b596-e53c7ed7a7c4)**
Soru Kökü: Halihazırda teşhisi konmuş bir periodontal hastalığın seyrini, sonucunu ve gidişatını kestirmeye yarayan hasta veya hastalığa ait özelliklere ne ad verilir?
Doğru Şık (E): Prognostik faktörler
Açıklama: Prognostik faktörler, var olan bir hastalığın ilerleyişini, tedaviye vereceği yanıtı ve nihai sonucunu etkileyen unsurlardır. Risk faktörleri hastalığın başlangıcını tetikleyen değişkenlerken, prognostik faktörler teşhis sonrası sürecin dinamiğini belirler. Hastalığın teşhis edilmiş olması bu iki kavramı ayıran en net çizgidir.

**Soru 2 (ID: a658f5f2-0581-4582-8e17-3ed59d45a7f4)**
Soru Kökü: Bir hastalığın gelecekteki seyri, yıkım hızı ve uygulanan tedaviye vereceği muhtemel cevap hakkında patogenez ve mevcut risk faktörleri verilerine dayanarak önceden tahmin yürütme işlemine ne ad verilir?
Doğru Şık (D): Prognoz tayini
Açıklama: Prognoz, hastalığın sonucunun veya tedaviye vereceği yanıtın gidişatının tahmin edilmesidir ve bu tahmin hastanın risk faktörleri ile hastalık patogenezi ışığında yapılır. Risk değerlendirmesi gelecekte hastalığa yakalanma ihtimalini ölçerken, prognoz halihazırda teşhis edilmiş bir hastalığın akıbetini belirler. Tedavi planlamasının ilk ve en kritik stratejik basamağıdır.

---

### ÇİFT 304 (Benzerlik: 0.70)

**Soru 1 (ID: b2c2f220-a01a-4525-a92b-141de481b699)**
Soru Kökü: Klinik değerlendirmede; periodontal desteğin tam ve yeterli olduğu, hastanın oral hijyen uyumunun tam sağlandığı ve sistemiği etkileyen hiçbir çevresel risk faktörünün bulunmadığı durum hangi prognoz sınıfını tanımlar?
Doğru Şık (B): Mükemmel (Good prognosis)
Açıklama: Mükemmel (Good prognosis), ataşman kaybının olmadığı, biyofilm kontrolünün ideal sağlandığı ve hastayı hastalığa yatkın hale getiren hiçbir sistemik faktörün bulunmadığı tabloyu ifade eder. Hafif ataşman kaybı ve tedavi edilebilir anatomik defektlerin varlığında prognoz 'Mükemmel'den 'İyi' seviyesine düşer.

**Soru 2 (ID: fb07eea4-e47b-4902-86dd-ee313fb4b747)**
Soru Kökü: Bir dişin periodontal prognozu değerlendirilirken hastanın genel sistemi, lokal kemik kayıpları ve anatomik defektler dikkate alınır. Aşağıdaki klinik bulgulardan hangisi, ilgili dişin prognozunun 'Kötü' (Poor) veya 'Şüpheli' sınıfından çıkarılarak daha olumlu bir evre olan 'İyi' (Fair) prognoz kategorisinde değerlendirilmesini sağlar?
Doğru Şık (C): Ataşman kaybının sadece %25 civarında olması ve furkasyondaki girişin alet erişimini engellemeyen Sınıf I düzeyinde kalması
Açıklama: 'İyi (Fair) prognoz' kategorisi, kemik ve ataşman kaybının henüz erken evrelerde (%25 civarı) kaldığı, temizlik veya cerrahi alet erişiminin (Sınıf I furka) hekim ve hasta tarafından kolayca sağlandığı dişler için kullanılır. Ataşman kaybının %50'yi bulması, kısa konik kökler ve tedavi erişimini kısıtlayan Sınıf II furka defektleri prognozu doğrudan 'Kötü (Poor)' düzeyine indirir.

---

### ÇİFT 305 (Benzerlik: 0.70)

**Soru 1 (ID: a3b283c6-b7b9-4297-b1c4-1880beb995c3)**
Soru Kökü: 28 yaşında kadın hasta rutin kontrol için kliniğe başvuruyor. CPITN sondu ile yapılan muayenede, sondun 3.5 ile 5.5 mm arasındaki siyah renkli bandı sulkus dışında tamamen görünmektedir. Supragingival veya subgingival diş taşı tespit edilmemiştir ancak sondalama sonrası dişeti kanaması gözlenmiştir. CPITN sınıflamasına göre bu sekstant için doğru kod ve tedavi planı kombinasyonu aşağıdakilerden hangisidir?
Doğru Şık (A): Kod 1 / Kişisel oral hijyen eğitimi
Açıklama: CPITN Kod 1, cep derinliğinin patolojik boyutlara ulaşmadığı (siyah bant tamamen dışarıda, cep <3.5 mm) ve diş taşının olmadığı, ancak sondalamada kanamanın bulunduğu başlangıç inflamasyonunu tanımlar. Bu tablonun tek tedavi gereksinimi hastanın plak kontrolünü geliştirmesi için verilecek Kişisel Oral Hijyen Eğitimidir (OHE).

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 306 (Benzerlik: 0.70)

**Soru 1 (ID: 92f6148f-23e6-47d5-8c1e-f5667f00652e)**
Soru Kökü: Kırk yaşındaki kadın hastanın muayenesinde 36 numaralı dişte kemik kaybına bağlı %25 ataşman kaybı tespit edilmiştir. İlgili dişin furkasyon bölgesinde Sınıf I düzeyinde tutulum mevcut olup, bölgeye standart el aletleriyle lokasyon ve derinlik açısından erişim tamamen mümkündür. Bu klinik tabloya göre dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): İyi
Açıklama: Mevcut klinik senaryoda %25 gibi erken-orta seviye ataşman kaybı ve derinliği alet adaptasyonunu engellemeyen Sınıf I furkasyon tutulumu, standart prognostik sınıflamada dişin "İyi (Fair)" prognoza sahip olduğunu gösterir. Diş mükemmel prognozdan çıkmıştır çünkü defekt başlamıştır, ancak köklü bir kemik kaybı veya erişilemeyen bir Sınıf II furkasyonu olmadığı için henüz Kötü (Poor) veya Şüpheli (Questionable) kategorisine inmemiştir.

**Soru 2 (ID: aef65bf4-0585-4d33-9a60-a64757703ea5)**
Soru Kökü: Mükemmel (Good) periodontal prognoz kriterleri düşünüldüğünde, bu sınıflamadaki bir dişte aşağıdaki bulgulardan hangisinin yer alması **beklenmez**?
Doğru Şık (B): Lokasyon açısından erişilebilen Sınıf I furkasyon tutulumu
Açıklama: Sınıf I furkasyon tutulumunun varlığı, ataşman kaybının başladığını ve anatomik bir riskin devreye girdiğini gösterdiğinden dişi Mükemmel (Good) kategoriden çıkarıp İyi (Fair) prognoz kategorisine indirger. Mükemmel prognozda furkasyon tutulumu ve kalıcı anatomik defekt bulunmaz, sadece diş etine sınırlı eklentiler veya tamamen sağlıklı destek doku söz konusudur.

---

### ÇİFT 307 (Benzerlik: 0.70)

**Soru 1 (ID: 9617fd73-93f5-47aa-9673-41e742c8bdc8)**
Soru Kökü: Aşağıdaki doku yıkım ürünlerinden hangisi, periodontitiste bağ dokusu ekstrasellüler matriksinin enzimatik olarak bozulması sonucunda dişeti oluğu sıvısında artış gösterir?
Doğru Şık (B): Glikozaaminoglikanlar
Açıklama: Glikozaaminoglikanlar, ekstrasellüler matriksin proteolitik enzimlerce yıkılmasıyla serbest kalarak dişeti oluğu sıvısında tespit edilir. Hidroksiprolin doğrudan kollajen peptid yıkımını temsil ederken osteokalsin kemik rezorpsiyon döngüsüne aittir. Matriks temel maddesinin yıkım ürünü glikozaminoglikanlardır.

**Soru 2 (ID: ebe07572-a3ab-4548-b058-f2dffd73d39f)**
Soru Kökü: Periodontal doku yıkımının moleküler patogenezinde, ekstrasellüler matriksin ve konak hücrelerinin biyokimyasal reaksiyonlarına yön veren çeşitli konak kaynaklı enzimler dişeti oluğu sıvısına (DOS) salınır. Enzim adı ve bu enzimin temel hücresel kaynağı/özelliği arasındaki ilişkilendirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Elastaz: Dokularda ekstrasellüler matriks döngüsünü korumak ve aşırı doku hasarını dengelemekle görevli anti-proteolitik bir inhibitördür.
Açıklama: Elastaz, dokuyu koruyan anti-proteolitik bir inhibitör değil; nötrofil granüllerinde bulunan ve periodontitisli bölgelerde aktif bağ dokusu proteinlerinin proteolitik yıkımından sorumlu agresif bir enzimdir. Matriks metalloproteinazlar (MMP) ekstrasellüler matriksin hücresel yıkım döngüsünü fizyolojik dengede tutmaya çalışırken patolojik durumda destrüksiyona yol açar. Alkalen fosfataz seviyesi ise artmış nötrofil degranülasyonu ve hücre ölümü (osteoblastlar dahil) kaynaklı olarak inflamasyon alanında yükselir.

---

### ÇİFT 308 (Benzerlik: 0.70)

**Soru 1 (ID: 9a1b281e-3eb6-4a42-9a53-28f4b49c2b43)**
Soru Kökü: Dental plak değerlendirmesinde klinik kullanımı olan Aproksimal Alan Plak İndeksi (API) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Puanlama sırasında plak kalınlığı 0 ile 3 arasındaki skorlarla derecelendirilir.
Açıklama: Aproksimal alan plak indeksinde (API) plağın kalınlığı ölçülmez; plak varlığı (+) veya plak yokluğu (-) şeklinde ikili (dikotomöz) bir değerlendirme yapılır. Plak kalınlığını 0-3 arası skorlayan indeks Löe ve Silness'in Plak İndeksi'dir. API, hasta motivasyonunda hızlı bir yüzde değeri vermek için idealdir.

**Soru 2 (ID: ea84a558-b028-423f-8319-b864cb09ffd0)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca tespit etmek için geliştirilen CPITN (Toplumda Periodontal Tedavi Gereksinimi İndeksi) ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Klinik muayene sırasında ataçman kaybı miktarını belirlemek için temel referanstır.
Açıklama: CPITN indeksi dişeti iltihabı, kanama, diş taşı ve cep derinliği hakkında bilgi verirken ataçman kaybı hakkında kesinlikle bilgi vermez. Ataçman kaybını da gösteren ve CPITN'in modifiye hali olan indeks PSR (Periodontal Screening and Recording) indeksidir. Özel sond kullanımı ve indeks dişi seçimi CPITN'in temel standartlarındandır.

---

### ÇİFT 309 (Benzerlik: 0.70)

**Soru 1 (ID: de74ae57-d1c6-4233-afe5-c53d22ec7e1b)**
Soru Kökü: Otuz yaşında erkek hastanın maksiller birinci ve ikinci molar dişleri arasında diastema olmamasına rağmen kontakt noktasının zayıf/açık olduğu belirlenmiştir. Bu durumun periodonsiyum üzerinde yaratacağı **en olası** lokal etki aşağıdakilerden hangisidir?
Doğru Şık (B): İnterdental alanda gıda sıkışması (food impaction)
Açıklama: Zayıf veya hafif açık proksimal kontaktlar, çiğneme sırasında besinlerin interdental alana dikey olarak itilmesine (gıda sıkışması / food impaction) izin verir. Bu mekanik tahriş ve gıdanın bölgede kalması, plak birikimini ve lokalize kemik yıkımını tetikleyen en önemli iatrojenik/anatomik nedenlerden biridir. Sement hiperplazisi veya fibromatozis bu durumun doğrudan lokal bir sonucu değildir.

**Soru 2 (ID: e54a4e28-678e-45b1-bf6d-b8403a0a6e8a)**
Soru Kökü: Otuz yaşındaki erkek hastanın 16 numaralı dişine bir yıl önce derin subgingival marjinli kuron restorasyonu yapılmıştır. Güncel muayenesinde tüm ağız plak indeksi düşük olmasına rağmen, sadece bu bölgede şiddetli lokalize kemik kaybı, hiperplazi ve sondalamada kanama izlenmektedir. Bu lokalize yıkımın birincil nedeni olan restoratif faktör periodonsiyumu hangi mekanizmayla etkiler?
Doğru Şık (A): Bakteriyel plak retansiyonunu artırıp biyolojik genişliği ihlal ederek
Açıklama: Subgingival olarak konumlandırılmış, taşkın veya uyumsuz restorasyon kenarları, mikrobiyal plak birikimi için mükemmel bir retansiyon alanı oluşturarak lokal flora patojenitesini artırır. Ayrıca diş eti sulkusu veya birleşim epitelinin sınırlarını aşarak biyolojik genişliği (supracrestal doku ataşmanını) ihlal eder. Bu durum konağın fizyolojik kemik mesafesini yeniden kurmak için osteoklastik aktivite başlatmasına (lokalize kemik kaybı) ve enflamasyona yol açar.

---

### ÇİFT 310 (Benzerlik: 0.70)

**Soru 1 (ID: 0ff38423-e601-4011-851d-c4fe3fa550c9)**
Soru Kökü: Bireyin gelecekte belirli bir zaman diliminde hastalığa yakalanma olasılığını tahmin etmek amacıyla yürütülen epidemiyolojik işlemlere ne ad verilir?
Doğru Şık (B): Risk tayini
Açıklama: Risk tayini, sağlıklı bir bireyin gelecekte hastalığa yakalanma ihtimalini öngörebilmek için yapılan analiz işlemlerinin tümüdür. Prognostik tayin ise halihazırda hastalığa yakalanmış bir bireyin klinik sonucunu kestirme işlemidir. Sağlıklı bireyde risk tayini, hasta bireyde ise prognostik tayin uygulanır.

**Soru 2 (ID: a658f5f2-0581-4582-8e17-3ed59d45a7f4)**
Soru Kökü: Bir hastalığın gelecekteki seyri, yıkım hızı ve uygulanan tedaviye vereceği muhtemel cevap hakkında patogenez ve mevcut risk faktörleri verilerine dayanarak önceden tahmin yürütme işlemine ne ad verilir?
Doğru Şık (D): Prognoz tayini
Açıklama: Prognoz, hastalığın sonucunun veya tedaviye vereceği yanıtın gidişatının tahmin edilmesidir ve bu tahmin hastanın risk faktörleri ile hastalık patogenezi ışığında yapılır. Risk değerlendirmesi gelecekte hastalığa yakalanma ihtimalini ölçerken, prognoz halihazırda teşhis edilmiş bir hastalığın akıbetini belirler. Tedavi planlamasının ilk ve en kritik stratejik basamağıdır.

---

### ÇİFT 311 (Benzerlik: 0.70)

**Soru 1 (ID: 4550901e-be84-4163-86af-4acbdb0ee30f)**
Soru Kökü: Elli beş yaşındaki erkek hastanın panoramik ve periapikal radyografik muayenesinde 16 numaralı dişte %50 oranında ataşman kaybı saptanmıştır. Klinik sondalamada Sınıf II furkasyon tutulumu izlenmiş, ancak bu bölgeye spesifik küretlerle erişimin ve temizliğin tamamen mümkün olduğu belirlenmiştir. Bu dişin periodontal prognozu aşağıdakilerden hangisidir?
Doğru Şık (B): Kötü
Açıklama: Ataşman kaybının %50 civarında olması ve kron/kök oranının elverişsizleşmeye başlaması dişin prognozunu Kötü (Poor) sınıfına sokar. Sınıf II furkasyon varlığı Kötü ve Şüpheli (Questionable) prognoz arasında ayırıcıdır; erişimin KISMEN KOLAY VE MÜMKÜN olması dişi Kötü prognozda tutarken, erişimin İMKANSIZA YAKIN VEYA ZOR olması durumu Şüpheli prognoza düşürür. Vakada erişim mümkün olduğu için Kötü prognoz tanısı konur.

**Soru 2 (ID: b107b9da-42f4-41db-b42a-df162b1af347)**
Soru Kökü: Altmış iki yaşındaki erkek hasta, dişlerinde şiddetli sallanma şikayetiyle başvurmuştur. Muayenede 16 numaralı dişte kemik desteğinin tamamen yok olduğu, Sınıf III furkasyon tutulumu ve dikey mobilitenin bulunduğu saptanmıştır. Kalan periodontal doku fonksiyon ve yaşam kalitesini idame ettiremeyecek durumdadır. Bu dişin prognozu aşağıdakilerden hangisidir?
Doğru Şık (D): Umutsuz (Hopeless)
Açıklama: Sağlık, fonksiyon ve yaşam kalitesini devam ettirmeye yetecek minimal periodontal ataşmanın dahi bulunmadığı şiddetli yıkım durumları 'Umutsuz (Hopeless)' olarak sınıflandırılır ve bu dişler genellikle doğrudan çekim endikasyonuna sahiptir. Şüpheli prognozda ise %50'den fazla kayıp olmasına rağmen spesifik tedavilerle dişin ağızda tutulma olasılığı halen değerlendirilir.

---

### ÇİFT 312 (Benzerlik: 0.70)

**Soru 1 (ID: 7c1492e5-39ca-4e75-ad59-ccb84713d464)**
Soru Kökü: Subgingival plaktaki spesifik bakterilerin saptanması için geliştirilen DNA teknolojilerinden Polimeraz Zincir Reaksiyonu (PCR) ile immünodiagnostik yöntemler kıyaslandığında, PCR'ın özelliği olarak aşağıdakilerden hangisi **yoktur**?
Doğru Şık (D): Spesifik mikrobiyal antijenleri tanıyan işaretli florasan antikorlar kullanması
Açıklama: Antijen-antikor reaksiyonunu kullanarak floresan işaretleme yapan yöntem 'İmmünofloresans Mikroskopisi'dir (immünodiagnostik bir tekniktir). PCR bir immünolojik (antikor) test değil, nükleik asit (DNA) dizisinin polimeraz enzimi ile kopyalanarak amplifiye edilmesi temeline dayanan yüksek hassasiyetli bir DNA testidir.

**Soru 2 (ID: d053701d-f302-45e5-a1a3-7777ef19cad0)**
Soru Kökü: Diagnostik bir testin ilgili hastalığın varlığını doğru şekilde tespit edebilme yeteneğine 'sensitivite' adı verilir. Sensitivite kavramı temel alındığında, periodontal patojenleri saptamak için geliştirilen mevcut genetik teknolojiler içerisinde, bir örnekte spesifik hedef organizmadan sadece 5-10 hücre bulunsa bile bunu amplifiye ederek saptayabilen ve en yüksek analitik duyarlılığa sahip yöntem aşağıdakilerden hangisidir?
Doğru Şık (C): Polimeraz zincir reaksiyonu (PCR)
Açıklama: Polimeraz zincir reaksiyonu (PCR), nükleik asitlerin hedeflenen spesifik bölgelerinin tekrarlayan amplifikasyonu sayesinde bir klinik örnekteki 5-10 patojen hücreyi dahi saptayabilen, sensitivitesi en yüksek moleküler teşhis yöntemidir. Bakteriyel kültür altın standart olmasına rağmen 10^3 - 10^4 bakteri saptama limitiyle daha düşük bir sensitivite sergiler ve zor üreyen anaerobları kaçırabilir. Sensitivite, bir testin hastalıklı mikroorganizmayı ne derece keskin bir saptama eşiğiyle (threshold) "var" olarak belirleyebildiğinin ana ölçütüdür.

---

### ÇİFT 313 (Benzerlik: 0.70)

**Soru 1 (ID: 54caaaa1-c090-4f4f-8b2f-5bca79600c99)**
Soru Kökü: Basitleştirilmiş Oral Hijyen İndeksi (OHI-S) uygulanarak değerlendirilen bir dişte, yüzeyin 1/3'ünden daha az bir kısmını kaplayan yumuşak debris saptanmış ve debrisin olmadığı diğer alanlarda belirgin diş boyanması gözlenmiştir. OHI-S'nin DI-S (basitleştirilmiş debris) kriterlerine göre bu yüzeyin skoru aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: DI-S kriterlerinde Skor 1, diş yüzeyinin 1/3'ünden az yumuşak debris bulunmasını veya debris olmaksızın belirgin boyanma görülmesini ifade eder. Yüzeyin 1/3'ünden fazla ancak 2/3'ünden az tutulum Skor 2 iken, 2/3'ünden fazlası Skor 3 olarak kaydedilir. Boyanmanın debris olmadan da Skor 1 sebebi sayılması bu indeksin önemli bir klinik özelliğidir.

**Soru 2 (ID: 81e7756f-6777-4165-8aaa-67f5a61968ca)**
Soru Kökü: Bir hastanın periodontal muayenesinde ekspoze diş yüzeyinin 2/3'ünden fazlasını kaplayan supragingival kalkulus ve servikal bölgede kesintisiz bant şeklinde kalın bir subgingival diş taşı tespit edilmiştir. Green-Vermillion OHI-S basitleştirilmiş kalkulus kriterlerine (CI-S) göre bu tabloya verilmesi gereken skor kaçtır?
Doğru Şık (A): 3
Açıklama: CI-S kriterlerinde servikalde bant şeklinde kesintisiz kalın subgingival taş birikimi veya 2/3'ü aşan supragingival taş birikimi Skor 3 olarak değerlendirilir. Ayrı ayrı duran bölgesel servikal taşlar veya 1/3 - 2/3 arası supragingival birikim ise Skor 2 sınırları içinde kalır. CI-S skorlaması hem yüzey alanını hem de subgingival taşın morfolojisini (bant vs bölgesel) dikkate alır.

---

### ÇİFT 314 (Benzerlik: 0.70)

**Soru 1 (ID: 1953deca-c919-47d2-9d2f-ad4f355e519a)**
Soru Kökü: 40 yaşında sağlıklı bir hastanın epidemiyolojik saha çalışması sırasında CPITN sondu ile periodontal değerlendirmesi yapılmıştır. Hekim sondun ucundaki renkli siyah bandın tamamen görünür olduğunu, sondalamada kanama gelişmediğini ve herhangi bir diş taşı saptanmadığını kaydetmiştir. Bu bulgulara göre hastanın CPITN skoru ve tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (C): Kod 0 / Tedavi gerekmez
Açıklama: CPITN Kod 0, herhangi bir hastalık belirtisinin (kanama, diş taşı, cep) bulunmadığı kusursuz sağlıklı dişeti durumunu yansıtır. Sondun siyah bandı dışarıdadır (cep <3.5 mm) ve kanama yoktur. Bu sekstant için herhangi bir tedavi gereksinimi atanmaz.

**Soru 2 (ID: c6572a2b-be2c-422f-a73d-ff640d26b428)**
Soru Kökü: Altmış yaşında erkek hastanın sol üst molar bölgesinde ileri derecede kemik yıkımı izlenmektedir. Sondalama sırasında WHO zondunun 3.5 - 5.5 mm arasındaki siyah bandı cebin içinde tamamen kaybolmuştur. CPITN sınıflamasına göre bu dişin bulunduğu sekstant için öngörülen en ileri tedavi gereksinimi aşağıdakilerden hangisidir?
Doğru Şık (A): OHE, SCRP ve Cerrahi tedavi
Açıklama: Siyah bandın tamamen kaybolması cep derinliğinin 6 mm veya daha derin olduğunu gösterir, bu da CPITN Kod 4'e karşılık gelir. Kod 4 vakalarında standart tedavi protokolü oral hijyen eğitimi, kök yüzeyi düzleştirme ve periodontal cerrahinin bir kombinasyonudur (OHE+SCRP+Cerrahi). Cerrahi tedavi asla başlangıç periodontal tedavisi (OHE+SCRP) atlanarak tek başına uygulanmaz.

---

### ÇİFT 315 (Benzerlik: 0.70)

**Soru 1 (ID: 112d4514-ac4c-4977-8b61-1176562d9524)**
Soru Kökü: Kırk yaşında sağ elini kullanan erkek hasta, sol üst ve alt kanin-premolar bölgesinde hassasiyet şikayetiyle başvurmuştur. Muayenede bu dişlerin servikal bölgelerinde V şeklinde, sert ve parlak yüzeyli madde kayıpları tespit edilmiştir. Hastanın çok sert kıllı diş fırçası kullandığı ve horizontal yönde agresif fırçalama alışkanlığı olduğu tespit edilmiştir. Bu bulgular ışığında en olası diş aşınması tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Abrazyon
Açıklama: Abrazyon, çiğneme fonksiyonu dışındaki dışsal bir mekanik ajanın (aşındırıcı macun, sert fırça, horizontal fırçalama veya kroşe sürtünmesi) diş yüzeyinde oluşturduğu mekanik aşınmadır. V şeklinde servikal defektler yatay fırçalamanın tipik sonucudur. Atrizyonda aşınma okluzal/insizal yüzeylerdeyken, abfraksiyonda okluzal streslerin servikalde yarattığı bükülme söz konusudur.

**Soru 2 (ID: f072b323-658e-484d-82d2-19df08141e84)**
Soru Kökü: Yirmi beş yaşında kadın hastanın üst ön dişlerinin vestibül yüzeylerinde, mine dokusunun parlaklığını kaybettiği ve sığ, düzgün çanak şeklinde madde kayıplarının olduğu izlenmektedir. Hastanın anamnezinde asitli içecekleri gün içinde sürekli ve yudumlayarak tükettiği öğrenilmiştir. Bakteriyel olmayan bu kimyasal aşınma türü aşağıdakilerden hangisi ile adlandırılır?
Doğru Şık (C): Erozyon
Açıklama: Erozyon, asitli gıda/içecek tüketimi veya mide reflüsü gibi mekanik ve bakteriyel olmayan, tamamen kimyasal süreçlerle meydana gelen diş dokusu kaybıdır. Abrazyon diş fırçalama gibi mekanik sürtünmeyle, atrizyon ise karşıt dişlerin temasıyla oluşur. Çanak şeklinde düzgün yüzeyler erozyonun tipik morfolojik klinik belirtecidir.

---

### ÇİFT 316 (Benzerlik: 0.70)

**Soru 1 (ID: 39577ac8-6ef1-4b3c-a99e-2873b8fb742a)**
Soru Kökü: Ramfjord İndeksi (Periodontal Disease Index) kullanılarak değerlendirilen spesifik bir indeks dişinde (örneğin 16 numaralı diş), gingival marjindeki inflamasyonun yer yer lokalize olmadığı, aksine dişin tüm çevresini saran hafif-orta şiddette bir gingivitis tablosu olduğu belirlenmiştir. Bu dişin 'gingival' skoru kaçtır?
Doğru Şık (A): 2
Açıklama: Ramfjord İndeksinde gingival skorlama 0-3 arasındadır. Skor 1 lokalize gingivitis iken, Skor 2 dişin tüm çevresini (çevresel/sirkümferansiyel) saran hafif-orta şiddette gingivitisi tanımlar. İleri/şiddetli gingivitis ve ülserasyon ise Skor 3'e denk gelir.

**Soru 2 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

---

### ÇİFT 317 (Benzerlik: 0.70)

**Soru 1 (ID: 27492233-6eb6-4296-aa05-0b6aec971e43)**
Soru Kökü: Ağız hijyeni düzeyini belirlemek üzere muayene edilen bir hastada, serbest dişeti kenarına yapışmış ince bir tabaka gözlenmektedir. Çıplak gözle fark edilemeyen bu eklenti, ancak boyayıcı ajanlar veya dişeti cebinde bir sondun gezdirilmesi ile tespit edilebilmiştir. Löe ve Silness'in Plak İndeksi'ne göre bu bölgeye verilmesi gereken skor aşağıdakilerden hangisidir?
Doğru Şık (D): Skor 1
Açıklama: Löe ve Silness Plak İndeksi'nde Skor 1, çıplak gözle izlenemeyen ancak serbest dişeti kenarına film halinde yapışmış ve sond/boya ile tespit edilebilen plağı tanımlar. Skor 2'de eklenti çıplak gözle görülebilen orta derecede bir yapıya ulaşır. Skor 0 ise eklentinin tamamen yokluğunu ifade eder.

**Soru 2 (ID: 9f600967-3d1f-4de3-ac2b-3fe17e91b839)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın maksiller sağ molar bölgesindeki dişeti belirgin derecede kırmızı, ödemli ve yer yer ülsere görünümdedir. Hasta, mekanik bir uyaran (fırçalama) olmaksızın da dişetlerinin kendiliğinden kanadığını ifade etmektedir. Löe ve Silness Gingival İndeksine göre bu durumun skoru aşağıdakilerden hangisidir?
Doğru Şık (B): 3
Açıklama: Şiddetli inflamasyon, belirgin kırmızılık, ülserasyonlar ve özellikle 'spontan (kendiliğinden) kanama' varlığı Gingival İndekste en yüksek değer olan skor 3'e karşılık gelir. Ülserasyon epitel bütünlüğünün tamamen bozulduğunu ve vasküler yatağın açığa çıktığını gösterir.

---

### ÇİFT 318 (Benzerlik: 0.70)

**Soru 1 (ID: 3915b641-b0de-4137-9eaa-0aa080da2a39)**
Soru Kökü: Epidemiyolojik çalışmalarda 'yetersiz sıklıkta dental ziyaretler', gruplar arası çalışmalarda hastalıkla ilişkili bulunmasına rağmen uzun dönem araştırmalarla kesin nedenselliği teyit edilmediği için hangi kategoride sınıflandırılır?
Doğru Şık (C): Risk göstergesi (Risk indikatörü)
Açıklama: Uzun dönem (longitudinal) çalışmalarla teyit edilmemiş, sadece kesitsel veya gruplar arası çalışmalarda hastalıkla olası bağlantısı saptanan şüpheli durumlara 'risk göstergesi' (risk indikatörü) denir. Yetersiz dental ziyaretler, osteoporoz ve HIV/AIDS epidemiyolojik olarak bu kategoride değerlendirilirken; sigara ve diyabet kesinleşmiş risk faktörleridir.

**Soru 2 (ID: 5e9215ae-d3e0-4a8c-92be-30e7c89cdbd1)**
Soru Kökü: Diş hekimini düzenli ziyaret etme alışkanlığının yetersiz olması periodontal epidemiyolojide hangi başlık altında değerlendirilmektedir?
Doğru Şık (C): Risk göstergesi
Açıklama: Yeterli sıklıkta olmayan dental kontroller, bazı araştırmalarda hastalıkla ilişkilendirilse de diğerlerinde yaş farkı vb. nedenlerle doğrulanmamıştır, bu sebeple epidemiyolojik olarak bir 'risk göstergesi' (indikatör) sınıfındadır. Sigara gibi tartışmasız bir 'risk faktörü' veya genetik gibi bir 'risk belirleyicisi' değildir.

---

### ÇİFT 319 (Benzerlik: 0.70)

**Soru 1 (ID: 4df0e91e-c524-429d-8863-afeec7c98e3d)**
Soru Kökü: Mikrobiyolojik teşhiste subgingival örnekler için kullanılan immünodiagnostik yöntemlerin (Örn. İmmünfloresans, Elisa), klasik referans standart olan bakteriyel kültür yöntemine kıyasla en belirgin farklılığı/avantajı aşağıdakilerden hangisidir?
Doğru Şık (C): Testin çalışması için canlı mikroorganizma varlığına gereksinim duymamaları
Açıklama: İmmünodiagnostik testler hücre yüzeyindeki spesifik antijenleri hedefler; bu nedenle transport sırasında bakteri ölse dahi antijen bozulmadığı sürece tespit yapılabilir (canlı mikroorganizma gerektirmez). Kültür yöntemi ise canlılık ve çok hassas taşıma koşulları gerektirir. Antibiyotik duyarlılığını test edebilen tek in vitro yöntem ise sadece kültürdür.

**Soru 2 (ID: 81488690-9093-4181-8453-714bb486313d)**
Soru Kökü: Periodontal hastalıkların tanısında referans standart kabul edilen mikrobiyolojik kültür yöntemi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): T. forsythia ve Treponema türleri gibi hareketli spiroketlerin izolasyonunda ve tespitinde duyarlılığı en yüksek metottur.
Açıklama: Kültür metodunun en büyük dezavantajlarından biri, Treponema türleri ve T. forsythia gibi zorunlu anaerob ve titiz patojenlerin in vitro koşullarda kültüre edilmesinin son derece zor olmasıdır. Bu türlerin izolasyonunda duyarlılığı yüksek değil, oldukça düşüktür; bu türler için genellikle DNA probları veya immünofloresan teknikleri tercih edilir.

---

### ÇİFT 320 (Benzerlik: 0.70)

**Soru 1 (ID: 0dc733b1-c4d4-4006-b5b1-3b834bb1bf1d)**
Soru Kökü: Sondalamada kanama (BOP) testi, klinik periodontal teşhisin merkezinde yer alır. Sondalamada kanama indeksinin klinik yorumlanmasıyla ilgili aşağıda verilen ifadelerden hangisi **en az olasıdır**?
Doğru Şık (E): Başlangıç muayenesinde tespit edilen yaygın BOP varlığı, gelecekte kesin olarak çok şiddetli kemik kaybı yaşanacağının kusursuz garantisidir.
Açıklama: Sondalamada kanamanın (BOP) 'varlığı' zayıf bir negatif prediktif değer taşır, yani kanama olması dişte kesinlikle ataşman yıkımı ilerleyeceği (kusursuz garanti) anlamına gelmez (sadece gingivitis olabilir). Buna karşın sondalamada kanamanın 'yokluğu', periodontal sağlığın idame ettiğinin ve yıkım olmadığının mükemmel bir göstergesidir. İdame fazında kronik kanayan bölgeler ise riskli kabul edilir.

**Soru 2 (ID: 1a41327c-e89d-4c5b-8717-ae72c1b34f44)**
Soru Kökü: Elli yaşında kadın hasta idame tedavisi (maintenance) kapsamındaki kontrol randevusuna geliyor. Daha önce kronik periodontitis tedavisi görmüş olan hastanın klinik muayenesinde 16 numaralı dişin palatinal bölgesinde sondalamada kanama (BOP) pozitif olarak kaydediliyor. İdame safhasındaki bu hastada tespit edilen BOP pozitifliği klinisyen için öncelikli olarak neyin göstergesidir?
Doğru Şık (A): Artmış ataçman kaybı için önemli bir risk prediktörü (tahmin edicisi) olduğunun
Açıklama: Sondalamada kanama (BOP) yokluğu periodontal sağlığın mükemmel bir indikatörüdür. Ancak tedavisi yapılmış ve idame safhasında olan bir hastada BOP pozitifliği devam ediyorsa veya yeniden ortaya çıktıysa, bu durum o bölgede artmış ataşman kaybı yaşanabileceği için güçlü bir 'geleceğe ilişkin risk işareti (prediktör)' kabul edilir. Bu, enflamasyonun kalıcı olduğunu gösterir.

---

### ÇİFT 321 (Benzerlik: 0.70)

**Soru 1 (ID: afc71ce0-9962-428e-9b5e-6fbb1cfe8ad1)**
Soru Kökü: Aşağıdakilerden hangisi dişeti oluğu sıvısında saptanan, enflamasyonun patent bir mediatörü olarak doğrudan kemik rezorpsiyonunu indükleyen ve tedavi edilmemiş aktif yıkım vakalarında seviyesi artan moleküldür?
Doğru Şık (B): Prostaglandin E2
Açıklama: Prostaglandin E2, inflame bölgelerde artan, kemik rezorpsiyonunu şiddetle indükleyen ve konsantrasyonu aktif yıkım safhasında pik yapan spesifik bir inflamasyon mediatörüdür. Hidroksiprolin ve glikozaminoglikanlar mediatör değil yıkım ürünüdür; ALP ve katepsin ise enzimdir.

**Soru 2 (ID: b299547f-7008-4b29-bd0c-49306da928a5)**
Soru Kökü: Aşağıdaki konak kaynaklı enzimlerden hangisinin dişeti oluğu sıvısındaki konsantrasyonu, sadece osteoblastlardan değil aynı zamanda nötrofillerden de kaynaklandığı için periodontal lezyon bölgelerinde sağlıklı bölgelere kıyasla belirgin artış gösterir?
Doğru Şık (A): Alkalen fosfataz
Açıklama: Alkalen fosfataz (ALP), periodonsiyumda başta osteoblastlar ve nötrofiller olmak üzere pek çok hücrede bulunur ve hastalıklı bölgelerde artar. Matriks metalloproteinazlar ise fibroblast ve makrofajlardan salınır, hücre matriks dengesinde rol alır. Nötrofil ve osteoblast kökeni belirterek doku yıkımının hücresel kaynağına işaret eden enzimatik profil ALP'dir.

---

### ÇİFT 322 (Benzerlik: 0.70)

**Soru 1 (ID: 73fec0b6-3f20-4893-9d56-e27ec721e8cc)**
Soru Kökü: Enflamasyonun patolojik mediatörlerinden biri olan ve tedavi edilmemiş periodontitisli hastaların dişeti oluğu sıvısında aktif yıkım bölgelerinde yüksek konsantrasyonda tespit edilen, temel etkisi osteoklastik kemik rezorpsiyonunu indüklemek olan molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Prostaglandin E2
Açıklama: Prostaglandin E2 (PGE2) araşidonik asit metabolitidir ve periodontal enflamasyonda kemik rezorpsiyonunu (osteoklast aktivasyonunu) güçlü biçimde indükleyen primer lokal lipid mediatördür. Aktif yıkım gösteren bölgelerdeki cep sıvısında düzeyi artar. Glukuronidaz ve elastaz lizozomal enzimdir; osteokalsin ise kemik yapım belirtecidir.

**Soru 2 (ID: b299547f-7008-4b29-bd0c-49306da928a5)**
Soru Kökü: Aşağıdaki konak kaynaklı enzimlerden hangisinin dişeti oluğu sıvısındaki konsantrasyonu, sadece osteoblastlardan değil aynı zamanda nötrofillerden de kaynaklandığı için periodontal lezyon bölgelerinde sağlıklı bölgelere kıyasla belirgin artış gösterir?
Doğru Şık (A): Alkalen fosfataz
Açıklama: Alkalen fosfataz (ALP), periodonsiyumda başta osteoblastlar ve nötrofiller olmak üzere pek çok hücrede bulunur ve hastalıklı bölgelerde artar. Matriks metalloproteinazlar ise fibroblast ve makrofajlardan salınır, hücre matriks dengesinde rol alır. Nötrofil ve osteoblast kökeni belirterek doku yıkımının hücresel kaynağına işaret eden enzimatik profil ALP'dir.

---

### ÇİFT 323 (Benzerlik: 0.70)

**Soru 1 (ID: 972c23f0-3aa8-4978-b77c-9407f235cb17)**
Soru Kökü: Bir hastanın sağ üst birinci küçük azı dişinde sondalama yapılmadan gerçekleştirilen görsel muayenede, dişetinin sadece belirli bir bölümünde sınırlı kalmış hafif iltihap, renk değişikliği ve ödem tespit edilmiştir. Tüm dişeti ünitesi etkilenmemiştir. Modifiye Gingival İndekse göre bu bölgenin alacağı skor aşağıdakilerden hangisidir?
Doğru Şık (E): 1
Açıklama: Modifiye Gingival İndekste skor 1; dişetinin *herhangi bir bölümünde* lokalize kalmış hafif iltihap, renk değişikliği ve ödemi ifade eder. İnflamasyon papil veya marjinin tamamına yayılmadığı için skor 2'den ayrılır. Bu ayrım hafif inflamasyonun erken fazlarını saptamada kritiktir.

**Soru 2 (ID: 9f600967-3d1f-4de3-ac2b-3fe17e91b839)**
Soru Kökü: Kırk iki yaşındaki kadın hastanın maksiller sağ molar bölgesindeki dişeti belirgin derecede kırmızı, ödemli ve yer yer ülsere görünümdedir. Hasta, mekanik bir uyaran (fırçalama) olmaksızın da dişetlerinin kendiliğinden kanadığını ifade etmektedir. Löe ve Silness Gingival İndeksine göre bu durumun skoru aşağıdakilerden hangisidir?
Doğru Şık (B): 3
Açıklama: Şiddetli inflamasyon, belirgin kırmızılık, ülserasyonlar ve özellikle 'spontan (kendiliğinden) kanama' varlığı Gingival İndekste en yüksek değer olan skor 3'e karşılık gelir. Ülserasyon epitel bütünlüğünün tamamen bozulduğunu ve vasküler yatağın açığa çıktığını gösterir.

---

### ÇİFT 324 (Benzerlik: 0.70)

**Soru 1 (ID: 9a1b281e-3eb6-4a42-9a53-28f4b49c2b43)**
Soru Kökü: Dental plak değerlendirmesinde klinik kullanımı olan Aproksimal Alan Plak İndeksi (API) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Puanlama sırasında plak kalınlığı 0 ile 3 arasındaki skorlarla derecelendirilir.
Açıklama: Aproksimal alan plak indeksinde (API) plağın kalınlığı ölçülmez; plak varlığı (+) veya plak yokluğu (-) şeklinde ikili (dikotomöz) bir değerlendirme yapılır. Plak kalınlığını 0-3 arası skorlayan indeks Löe ve Silness'in Plak İndeksi'dir. API, hasta motivasyonunda hızlı bir yüzde değeri vermek için idealdir.

**Soru 2 (ID: b1194d09-a964-45ea-a781-e5f1d9e3f842)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlıca taramak için Dünya Sağlık Örgütü (WHO) tarafından geliştirilen CPITN indeksi ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Hastalığın mevcut ataşman kaybı düzeyi hakkında kesin ve detaylı bilgi verir.
Açıklama: CPITN indeksinin en büyük kısıtlaması ataşman kaybı (cep tabanının mine-sement sınırına olan mesafesi) hakkında hiçbir bilgi vermemesidir. İndeks yalnızca cep derinliği, kanama ve diş taşı varlığını temel alarak acil tedavi gereksinimini (OHE, SCRP, Cerrahi) belirler. Ataşman seviyesi bilgisini atlaması, geçmiş yıkım miktarını yansıtamamasına neden olur.

---

### ÇİFT 325 (Benzerlik: 0.70)

**Soru 1 (ID: 20dfe769-3c93-4bb2-b29d-c32740b355c2)**
Soru Kökü: Klinik periodontal tanıda kullanılan BANA (N-benzoyl-di-arginine-2-naphtylamide) bazlı enzimatik testlerde, tripsin benzeri enzim üreterek substratı hidrolize eden ve pozitif sonuç alınmasına neden olan mikroorganizmalar arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (A): Actinobacillus actinomycetemcomitans
Açıklama: BANA testi, spesifik olarak tripsin benzeri bir enzim profilini paylaşan kırmızı kompleks üyeleri (P. gingivalis, T. forsythia, T. denticola) ve Capnocytophaga türleri tarafından pozitif sonuç verir. Agresif periodontitisin majör patojeni olan A. actinomycetemcomitans bu tripsin benzeri enzimi üretmediğinden BANA testinde tespit edilemez.

**Soru 2 (ID: 7a918509-dc0e-44c1-8726-e71919bf0be2)**
Soru Kökü: 45 yaşında erkek hasta, derin periodontal cepler ve şiddetli periodontal yıkım nedeniyle başvurmuştur. Laboratuvarda B. forsythus, P. gingivalis ve T. denticola'nın ortak enzim profilini hedefleyen Perioscan test kiti uygulanıyor. Bu enzimatik diagnostik test, aşağıdaki substratlardan hangisinin hidrolizini ölçmektedir?
Doğru Şık (E): Tripsin benzeri enzim substratı (BANA)
Açıklama: Kırmızı kompleks bakterilerinin (B. forsythus, P. gingivalis, T. denticola) ortak patojenik özelliği, tripsin benzeri bir enzim üretmeleridir. BANA testi, bu tripsin benzeri enzimin N-benzoyl-di-arginine-2-naphtylamide (BANA) substratını hidrolize etmesi mekanizmasına dayanır. Diğer enzimler (AST, Elastaz, Beta-glukuronidaz) konak hücre veya nötrofil kaynaklı yıkım markerlarıdır.

---

### ÇİFT 326 (Benzerlik: 0.70)

**Soru 1 (ID: 9a1b281e-3eb6-4a42-9a53-28f4b49c2b43)**
Soru Kökü: Dental plak değerlendirmesinde klinik kullanımı olan Aproksimal Alan Plak İndeksi (API) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Puanlama sırasında plak kalınlığı 0 ile 3 arasındaki skorlarla derecelendirilir.
Açıklama: Aproksimal alan plak indeksinde (API) plağın kalınlığı ölçülmez; plak varlığı (+) veya plak yokluğu (-) şeklinde ikili (dikotomöz) bir değerlendirme yapılır. Plak kalınlığını 0-3 arası skorlayan indeks Löe ve Silness'in Plak İndeksi'dir. API, hasta motivasyonunda hızlı bir yüzde değeri vermek için idealdir.

**Soru 2 (ID: b62d54bf-2364-4dbf-9f2a-b72d8dc86435)**
Soru Kökü: Toplumda periodontal tedavi gereksinimini hızlı belirlemek amacıyla Dünya Sağlık Örgütü tarafından geliştirilen CPITN indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Tedavi gereksiniminin yanı sıra dişeti çekilmesi ve klinik ataşman kaybı seviyesini doğrudan gösterir.
Açıklama: CPITN indeksinin en temel kısıtlaması, dişeti çekilmesi veya klinik ataşman kaybı hakkında bilgi vermemesidir. Tedavi gereksinimini (OHI, SCRP, Cerrahi) kodlara (0-4) göre hızlıca belirler ancak periodontal yıkımın kümülatif seviyesini gösteren ataşman düzeyini saptayamaz. Bu nedenle gelişmiş epidemiyolojik taramalarda sıklıkla modifikasyonlara veya ek ölçümlere ihtiyaç duyulur.

---

### ÇİFT 327 (Benzerlik: 0.70)

**Soru 1 (ID: 15440e34-2e67-4e7a-8624-2caa4b9882a1)**
Soru Kökü: Modifiye Gingival İndekse (MGI) göre, papiller ve marjinal bölgeler dahil olmak üzere tüm dişeti ünitesini kaplayan ancak görsel olarak şiddetli düzeyde olmayan hafif bir inflamasyon tablosu aşağıdaki skorlardan hangisiyle ifade edilir?
Doğru Şık (D): 2
Açıklama: Tüm dişeti ünitesini kaplayan ancak klinik karakter olarak hala 'hafif' kategorisinde değerlendirilen inflamasyon Modifiye Gingival İndekste skor 2'dir. Skor 1 ile arasındaki temel fark lezyonun şiddeti değil, ünitedeki yaygınlığıdır (kapsama alanıdır).

**Soru 2 (ID: c665e17b-7fd4-4ddc-86e0-c7c2d40b6472)**
Soru Kökü: Periodontal idame terapisindeki bir hastanın gingival marjini ve komşu diş yüzeylerinde, çıplak gözle kolayca izlenebilen bol miktarda yumuşak eklenti ve diş taşı saptanmıştır. Löe ve Silness'in Plak İndeksi kriterleri kullanıldığında, bu diş yüzeyine atanacak skor aşağıdakilerden hangisidir?
Doğru Şık (C): Skor 3
Açıklama: Bol miktarda yumuşak eklenti ve kalkulus varlığı, Löe ve Silness Plak İndeksi'nde en yüksek değer olan Skor 3'e denk gelir. Skor 2 orta derecede eklentiyi ifade ederken, indeksin 4 gibi bir skor basamağı bulunmamaktadır. Klinik olarak belirgin kalın plak ve taş tabakası bu kodlamanın anahtarıdır.

---

### ÇİFT 328 (Benzerlik: 0.69)

**Soru 1 (ID: 50b16cce-e899-4b58-9142-d46738867a8a)**
Soru Kökü: Otuz beş yaşındaki hastanın alt sağ bölgesinde sadece taşkın amalgam dolgulu 46 numaralı dişte izole kemik kaybı saptanmıştır. Subgingival restorasyonların bu tür spesifik periodontal yıkıma yol açmasındaki asıl patogenetik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Subgingival marjinin ulaşılamaz ekolojik niş yaratarak plak miktarını artırması
Açıklama: Subgingival yerleşimli ve uyumsuz (taşkın) restorasyonlar, hastanın fırça veya diş ipi ile temizleyemeyeceği retansiyon alanları (ekolojik nişler) yaratır. Bu durum, bölgedeki mikrobiyal plağın miktarını artırır ve daha patojenik bir flora oluşumuna zemin hazırlayarak lokalize periodontal kemik kaybını tetikler.

**Soru 2 (ID: de74ae57-d1c6-4233-afe5-c53d22ec7e1b)**
Soru Kökü: Otuz yaşında erkek hastanın maksiller birinci ve ikinci molar dişleri arasında diastema olmamasına rağmen kontakt noktasının zayıf/açık olduğu belirlenmiştir. Bu durumun periodonsiyum üzerinde yaratacağı **en olası** lokal etki aşağıdakilerden hangisidir?
Doğru Şık (B): İnterdental alanda gıda sıkışması (food impaction)
Açıklama: Zayıf veya hafif açık proksimal kontaktlar, çiğneme sırasında besinlerin interdental alana dikey olarak itilmesine (gıda sıkışması / food impaction) izin verir. Bu mekanik tahriş ve gıdanın bölgede kalması, plak birikimini ve lokalize kemik yıkımını tetikleyen en önemli iatrojenik/anatomik nedenlerden biridir. Sement hiperplazisi veya fibromatozis bu durumun doğrudan lokal bir sonucu değildir.

---

### ÇİFT 329 (Benzerlik: 0.69)

**Soru 1 (ID: 9a1b281e-3eb6-4a42-9a53-28f4b49c2b43)**
Soru Kökü: Dental plak değerlendirmesinde klinik kullanımı olan Aproksimal Alan Plak İndeksi (API) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Puanlama sırasında plak kalınlığı 0 ile 3 arasındaki skorlarla derecelendirilir.
Açıklama: Aproksimal alan plak indeksinde (API) plağın kalınlığı ölçülmez; plak varlığı (+) veya plak yokluğu (-) şeklinde ikili (dikotomöz) bir değerlendirme yapılır. Plak kalınlığını 0-3 arası skorlayan indeks Löe ve Silness'in Plak İndeksi'dir. API, hasta motivasyonunda hızlı bir yüzde değeri vermek için idealdir.

**Soru 2 (ID: 9d0c971c-99d1-43ec-8cdc-b11e6768ebbe)**
Soru Kökü: Amerikan Dişhekimleri Birliği (ADA) ve AAP tarafından desteklenen PSR (Periodontal Screening and Recording) indeksi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): İndeksin temel zafiyeti, klinik ataşman kaybı hakkında hiçbir bilgi vermemesidir.
Açıklama: CPITN indeksi ataşman kaybı hakkında bilgi vermezken, onun modifiye versiyonu olan PSR indeksi ataşman kaybını gösteren özel işaretlemelere (* sembolü gibi klinik anormallikler) izin verir. PSR'ın CPITN'den ayrılan ve erken tanıda öne çıkan en önemli avantajı ataşman kaybını raporlayabilmesidir.

---

### ÇİFT 330 (Benzerlik: 0.69)

**Soru 1 (ID: 3d75a178-07a3-4f9b-ad4a-699c1600236d)**
Soru Kökü: Aşağıdaki bakteriyel ajanlardan hangisi subgingival biyofilm kompozisyonunda yer alıp periodontitis etyolojisine katkıda bulunmasına rağmen, primer nedensel risk faktörü üçlüsünden (A.a, P.g, T.f) biri **değildir**?
Doğru Şık (D): Eubacterium nodatum
Açıklama: Eubacterium nodatum sekonder bir etyolojik ajandır. Periodontal hastalıklarda risk faktörü olabilmenin ana kriterleri konak yanıtı, virülans, eliminasyon sonrası klinik iyileşmedir ve bu özellikleri P. gingivalis, A. actinomycetemcomitans ve T. forsythia tam olarak karşılar.

**Soru 2 (ID: 4c2b6293-c743-4eb6-b7a9-014c5f81aaa5)**
Soru Kökü: Periodontal hastalık etyolojisinde rol alan ancak hayvan modelleri, konak immün yanıtı ve tedavi eliminasyonu kriterlerinin tümünü sağlayamadığı için ana risk faktörleri arasında sayılmayan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (C): Campylobacter rectus
Açıklama: Campylobacter rectus, F. nucleatum ve E. nodatum gibi bakteriler periodontitise etyolojik faktör olmalarına rağmen nedensellik kriterlerini (hayvan inokülasyonu vb.) tam desteklemedikleri için primer risk faktörü listesinde (A.a, P.g, T.f) bulunmazlar. Bu ayrım spesifik tedavi hedeflemesinde önemlidir.

---

### ÇİFT 331 (Benzerlik: 0.69)

**Soru 1 (ID: 47d9bade-a14c-4fb6-8d0b-127b51996b66)**
Soru Kökü: Aktif periodontal yıkımın tespitinde kullanılan konak kaynaklı (host-derived) biyokimyasal markerlar dişeti oluğu sıvısında analiz edilebilir. Şiddetli gingival enflamasyon ve yakın geçmişte oluşmuş ataçman kaybı olan bölgelerde ölü hücrelerden salınan ve miyokard enfarktüsü sonrasında da sistemik olarak artış gösteren enzim aşağıdakilerden hangisidir?
Doğru Şık (B): Aspartat aminotransferaz (AST)
Açıklama: Aspartat aminotransferaz (AST), vücuttaki çeşitli dokularda (kalp, karaciğer, periodonsiyum) ölü hücrelerden salınan bir enzimdir ve periodontal yıkıma bağlı hücre nekrozunda lokal olarak cep sıvısında artar. Metalloproteinazlar yıkım matriksinden, beta-glukuronidaz ve elastaz ise nötrofil granüllerinden kaynaklanır.

**Soru 2 (ID: d1be3dfd-e07e-4f37-82a7-083b7dce7be6)**
Soru Kökü: Otuz dört yaşında kadın hasta, generalize şiddetli periodontitis bulguları ile kliniğe başvurmuştur. Dişeti oluğu sıvısı analizinde nötrofil granüllerinden kaynaklanan bir lizozomal enzimin aktivitesinin yüksek olduğu ve bu durumun ataşman kaybı için prediktif özellik taşıdığı raporlanmıştır. Tanımlanan bu enzim aşağıdakilerden hangisidir?
Doğru Şık (D): B-glukorinidaz
Açıklama: B-glukorinidaz, şiddetli periodontal hastalıklarda artış gösteren ve gelecekteki ataşman kaybı için güçlü prediktif (öngörücü) değer taşıyan bir nötrofil lizozomal enzimidir. AST ölü doku kaynaklıdır, katepsinler ise asidik protein yıkımından sorumludur. Bu nedenle nötrofil kaynaklı prediktif yıkım belirteci spesifik olarak B-glukorinidazdır.

---

### ÇİFT 332 (Benzerlik: 0.69)

**Soru 1 (ID: 8dc1e8a4-6b2b-4b21-b596-e53c7ed7a7c4)**
Soru Kökü: Halihazırda teşhisi konmuş bir periodontal hastalığın seyrini, sonucunu ve gidişatını kestirmeye yarayan hasta veya hastalığa ait özelliklere ne ad verilir?
Doğru Şık (E): Prognostik faktörler
Açıklama: Prognostik faktörler, var olan bir hastalığın ilerleyişini, tedaviye vereceği yanıtı ve nihai sonucunu etkileyen unsurlardır. Risk faktörleri hastalığın başlangıcını tetikleyen değişkenlerken, prognostik faktörler teşhis sonrası sürecin dinamiğini belirler. Hastalığın teşhis edilmiş olması bu iki kavramı ayıran en net çizgidir.

**Soru 2 (ID: e3bd663c-9fca-4353-8c5d-fbbbe0d15006)**
Soru Kökü: Hastanın sigara kullanım düzeyi, diyabetinin HbA1c değeri ve mevcut dişlerindeki kemik destek oranı kullanılarak, uygulanan periodontal tedavinin uzun dönemde nasıl bir başarı grafiği çizeceğinin tahmin edilmesine ne ad verilir?
Doğru Şık (E): Prognostik tayin
Açıklama: Hastalığın sonuçlarını kestirmeye yönelik özellikleri (prognostik faktörleri) kullanarak hastalığın gidişatını tahmin etme sürecine 'prognostik tayin' denir. Risk analizi/tayini hastalığın ortaya çıkma olasılığı ile ilgilenirken, prognostik tayin hasta halihazırda hastayken yapılır. Bu işlem, hastanın idame protokolünün sıklığını belirler.

---

### ÇİFT 333 (Benzerlik: 0.69)

**Soru 1 (ID: 17b733d6-35fa-4686-a21f-734d30ae9e39)**
Soru Kökü: Kırk beş yaşında erkek hasta kronik periodontitis tanısıyla tedaviye alınmıştır. Subgingival plakta bu hastalıkla en yoğun ilişkilendirilen spesifik bakteriyel risk faktörlerinden biri olan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis ve T. forsythia sıklıkla kronik periodontitiste bulunan majör risk faktörleridir. P. intermedia ve T. denticola da patojeniktir fakat nedensel 4 klasik kritere (eliminasyonda iyileşme, konak yanıtı, virülans faktörleri, hayvan modelinde başlatma) sahip ana risk faktörü üçlüsünde P. gingivalis başı çeker.

**Soru 2 (ID: 4c2b6293-c743-4eb6-b7a9-014c5f81aaa5)**
Soru Kökü: Periodontal hastalık etyolojisinde rol alan ancak hayvan modelleri, konak immün yanıtı ve tedavi eliminasyonu kriterlerinin tümünü sağlayamadığı için ana risk faktörleri arasında sayılmayan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (C): Campylobacter rectus
Açıklama: Campylobacter rectus, F. nucleatum ve E. nodatum gibi bakteriler periodontitise etyolojik faktör olmalarına rağmen nedensellik kriterlerini (hayvan inokülasyonu vb.) tam desteklemedikleri için primer risk faktörü listesinde (A.a, P.g, T.f) bulunmazlar. Bu ayrım spesifik tedavi hedeflemesinde önemlidir.

---

### ÇİFT 334 (Benzerlik: 0.69)

**Soru 1 (ID: 0d300b31-2ed4-4edf-abb5-5068fc5e33a4)**
Soru Kökü: Aktif periodontal hastalık teşhisinde immünolojik prensipleri kullanan metodlar, spesifik bakteriyel antijenlerin izole edilmesine dayanır. Canlı mikroorganizma gereksinimini ortadan kaldıran bu yöntemlerden biri olan ve özel bir membran tabakası üzerinde gerçekleşen antikor-antijen bağlanma reaksiyonunun bir renk değişimi ile okunduğu, A. actinomycetemcomitans, P. gingivalis ve P. intermedia türlerini saptamak üzere özel tasarlanmış ticari testin adı aşağıdakilerden hangisidir?
Doğru Şık (A): Evalusite
Açıklama: Evalusite, hedef patojenlerin (Aa, Pg, Pi) özel bir membran üzerindeki antikorlarla reaksiyona girmesi ve bunun kalitatif bir renk değişimiyle izlenmesi esasına dayanan spesifik bir membran immunoassay testidir. En güçlü çeldirici olan Latex aglütinasyon testinde membran kullanılmaz; türe özgü antijenle kaplı lateks boncuklarının mikrobiyal yüzey yapıları ile temas ettiğinde kümelenme (aglütinasyon) göstermesi esasına dayanır. Perioscan ise BANA hidrolizine dayalı enzimatik bir yöntemdir.

**Soru 2 (ID: e8dfaed4-e768-4032-bd77-246037611877)**
Soru Kökü: Periodontal hastalığı sağlıklı bölgelerle kıyaslamak üzere dişeti oluğu sıvısında nötrofil kaynaklı elastaz enzim seviyesini hasta başında hızlıca değerlendirmeyi sağlayan teşhis kiti aşağıdakilerden hangisidir?
Doğru Şık (C): Periocheck
Açıklama: Periocheck, nötrofil granüllerinden salınan elastaz enziminin aktivitesini hızlı tespit eden hasta başı kitidir. Periodgard ölü hücre kaynaklı AST'yi, Perioscan ise BANA hidrolizini ölçer. Bu teknolojik araçlar periodontal cebin enzimatik profilini spesifik hedefler üzerinden belirler.

---

### ÇİFT 335 (Benzerlik: 0.69)

**Soru 1 (ID: 0d300b31-2ed4-4edf-abb5-5068fc5e33a4)**
Soru Kökü: Aktif periodontal hastalık teşhisinde immünolojik prensipleri kullanan metodlar, spesifik bakteriyel antijenlerin izole edilmesine dayanır. Canlı mikroorganizma gereksinimini ortadan kaldıran bu yöntemlerden biri olan ve özel bir membran tabakası üzerinde gerçekleşen antikor-antijen bağlanma reaksiyonunun bir renk değişimi ile okunduğu, A. actinomycetemcomitans, P. gingivalis ve P. intermedia türlerini saptamak üzere özel tasarlanmış ticari testin adı aşağıdakilerden hangisidir?
Doğru Şık (A): Evalusite
Açıklama: Evalusite, hedef patojenlerin (Aa, Pg, Pi) özel bir membran üzerindeki antikorlarla reaksiyona girmesi ve bunun kalitatif bir renk değişimiyle izlenmesi esasına dayanan spesifik bir membran immunoassay testidir. En güçlü çeldirici olan Latex aglütinasyon testinde membran kullanılmaz; türe özgü antijenle kaplı lateks boncuklarının mikrobiyal yüzey yapıları ile temas ettiğinde kümelenme (aglütinasyon) göstermesi esasına dayanır. Perioscan ise BANA hidrolizine dayalı enzimatik bir yöntemdir.

**Soru 2 (ID: 719250ff-4df2-47d4-bb54-b2fde7fed218)**
Soru Kökü: 40 yaşında kronik periodontitis hastasının aktif periodontal ceplerinden alınan örneklerde, kırmızı kompleks bakterilerin ortak olarak ürettiği tripsin benzeri enzimin aktivitesi ölçülecektir. N-benzoyl-di-arginine-2-naphtylamide (BANA) substratının hidrolizi ile renk değişikliği sağlayan ve hastalık aktivitesini gösteren enzimatik diagnostik kit aşağıdakilerden hangisidir?
Doğru Şık (B): Perioscan
Açıklama: Perioscan, hedef mikroorganizmaların (T. denticola, P. gingivalis, T. forsythia) ortak bir tripsin benzeri enzim salgılamasına dayanan ve BANA substrat kartını kullanarak klinikte hızlı sonuç veren enzimatik bir teşhis kitidir. Periocheck ise nötrofil elastaz aktivitesini ölçer; Evalusite ise bir immünodiagnostik membran testidir.

---

### ÇİFT 336 (Benzerlik: 0.69)

**Soru 1 (ID: 39577ac8-6ef1-4b3c-a99e-2873b8fb742a)**
Soru Kökü: Ramfjord İndeksi (Periodontal Disease Index) kullanılarak değerlendirilen spesifik bir indeks dişinde (örneğin 16 numaralı diş), gingival marjindeki inflamasyonun yer yer lokalize olmadığı, aksine dişin tüm çevresini saran hafif-orta şiddette bir gingivitis tablosu olduğu belirlenmiştir. Bu dişin 'gingival' skoru kaçtır?
Doğru Şık (A): 2
Açıklama: Ramfjord İndeksinde gingival skorlama 0-3 arasındadır. Skor 1 lokalize gingivitis iken, Skor 2 dişin tüm çevresini (çevresel/sirkümferansiyel) saran hafif-orta şiddette gingivitisi tanımlar. İleri/şiddetli gingivitis ve ülserasyon ise Skor 3'e denk gelir.

**Soru 2 (ID: c18792b8-994a-488b-a864-1c2ff529e4e2)**
Soru Kökü: Yirmi dört yaşındaki kadın hasta rutin muayene için başvurmuştur. Değerlendirmede dişeti renginde hafif bir kırmızılık ve minimal ödem tespit edilmiş, ancak cebin sondlanması sırasında herhangi bir kanama gözlenmemiştir. Löe ve Silness'in Gingival İndeksine (GI) göre bu dişetinin skoru kaçtır?
Doğru Şık (A): 1
Açıklama: Löe ve Silness'in Gingival İndeksine göre skor 1; dişetinde renk değişikliği ve hafif ödemin olduğu ancak sondalamada kanamanın (BOP) görülmediği hafif inflamasyon aşamasıdır. Kanama başladığı an skor 2'ye yükselir. Kanama yokluğu bu skoru ayırt edici kılan temel bulgudur.

---

### ÇİFT 337 (Benzerlik: 0.69)

**Soru 1 (ID: 04c19cfb-e462-44bb-9734-7f988c40b77d)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın oral hijyeni genel olarak iyi düzeyde olmasına rağmen, sadece 12 ve 22 numaralı dişlerin palatinal yüzeylerinde derin, dar lokalize periodontal cepler saptanmıştır. Panoramik radyografisinde yaygın bir periodontal yıkım izlenmemektedir. Bu spesifik izole ataşman kaybına zemin hazırlayan ve ilgili dişlerin prognozunu olumsuz etkileyen en olası lokal anatomik varyasyon aşağıdakilerden hangisidir?
Doğru Şık (A): Gelişimsel palatinal oluk (Developmental groove)
Açıklama: Maksiller lateral kesici dişlerin (12 ve 22 numaralar) palatinal yüzeylerinde embriyolojik dönemde sıkça şekillenen 'gelişimsel palatinal oluklar', mine-sement birleşimini aşıp kök yüzeyine doğru ilerleyen anatomik tünellerdir. Bu oluklar fırça kıllarının ve hatta küretlerin ulaşamayacağı mikrobiyal plak retansiyon alanları yaratarak, hastanın genel hijyeni iyi olsa bile o dişe özgü şiddetli lokalize kemik kaybı ve cep oluşumuna (kötü prognoza) yol açarlar.

**Soru 2 (ID: 76e3f9a5-39c3-4465-aa10-17660d4b2be9)**
Soru Kökü: Periodontal tedavi başarısını sınırlandıran ve ciddi kemik içi defektlere yol açabilen 'gelişimsel oluklar', en sık aşağıdaki lokalizasyonların hangisinde izlenir?
Doğru Şık (A): Maksiller kesicilerin palatinal yüzeylerinde
Açıklama: Gelişimsel palatinal oluklar, en yaygın olarak maksiller kesicilerin (özellikle lateral kesicilerin) palatinal yüzeylerinde görülür. Bu oluklar sement-mine birleşiminden başlayıp kök boyunca apikale doğru uzanarak mikrobiyal plak için ulaşılamaz bir kanal oluşturur ve bu dişlerin prognozunu ciddi şekilde riske atar.

---

### ÇİFT 338 (Benzerlik: 0.69)

**Soru 1 (ID: 3f0b4de3-9f78-43c0-98a5-ddce58797e0a)**
Soru Kökü: Epidemiyolojik çalışmalarda periodontal yıkımın farklı aşamalarını değerlendirmek amacıyla kullanılan indekslerle ilgili olarak aşağıda verilen skor eşleşmelerinden hangisi **yanlıştır**?
Doğru Şık (D): Russell İndeksi Skor 4: Minumum 3 mm'ye kadar klinik ataşman kaybı
Açıklama: Russell Periodontal İndeksinde (PI) skorlar 0, 1, 2, 6 ve 8 şeklindedir (gingivitisi 1-2, cep varlığını 6, yıkımı 8 ile belirtir). Skor 4, 5 ve 6 numaralı skorlamalarla klinik ataşman kaybının spesifik milimetrik derecelerini (3 mm'ye kadar ataşman kaybı gibi) kaydeden sistem Russell değil, Ramfjord'un Periodontal Disease Index (PDI) sistemidir.

**Soru 2 (ID: c214f06f-b9f2-4267-b259-dd1e768c6395)**
Soru Kökü: Dünya Sağlık Örgütü (WHO) tarafından geliştirilen Toplumda Periodontal Tedavi Gereksinimi İndeksi (CPITN) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Geçmişte yaşanan periodontal yıkımı belirlemek için ataçman kaybını milimetrik olarak ölçer.
Açıklama: CPITN indeksinin en temel sınırlaması, klinik ataçman seviyesi (kaybı) hakkında hiçbir bilgi vermemesidir. Yalnızca mevcut inflamasyon, diş taşı ve patolojik cep derinliğini skorlayarak acil tedavi ihtiyacını (OHE, SCRP, cerrahi) sınıflandırır. Geçmiş yıkım miktarı veya dişi destekleyen kemik seviyesi bu indeksle saptanamaz.

---

### ÇİFT 339 (Benzerlik: 0.69)

**Soru 1 (ID: 0ff38423-e601-4011-851d-c4fe3fa550c9)**
Soru Kökü: Bireyin gelecekte belirli bir zaman diliminde hastalığa yakalanma olasılığını tahmin etmek amacıyla yürütülen epidemiyolojik işlemlere ne ad verilir?
Doğru Şık (B): Risk tayini
Açıklama: Risk tayini, sağlıklı bir bireyin gelecekte hastalığa yakalanma ihtimalini öngörebilmek için yapılan analiz işlemlerinin tümüdür. Prognostik tayin ise halihazırda hastalığa yakalanmış bir bireyin klinik sonucunu kestirme işlemidir. Sağlıklı bireyde risk tayini, hasta bireyde ise prognostik tayin uygulanır.

**Soru 2 (ID: 2a5bcb26-6b3a-4e7e-b019-68ea717d6736)**
Soru Kökü: Bir bireyin periodontal hastalığa yakalanma olasılığını tahmin etmek amacıyla klinik verilerin toplanması, risk faktörlerinin analizi ve bu verilerin yorumlanması için yürütülen sistematik işlemlerin tamamı aşağıdaki terimlerden hangisiyle tanımlanır?
Doğru Şık (B): Risk tayini
Açıklama: Bireyin hastalığa yakalanma olasılığını (riskini) tahmin etmek için yürütülen işlemlere 'risk tayini' (risk assessment) denir. Prognostik tayin ise henüz hastalığa yakalanmamış biri için değil, zaten var olan bir hastalığın sonucunu kestirmek için yapılır. Risk tayini, primer koruma stratejilerinin planlanmasında temel basamaktır.

---

### ÇİFT 340 (Benzerlik: 0.69)

**Soru 1 (ID: 17b733d6-35fa-4686-a21f-734d30ae9e39)**
Soru Kökü: Kırk beş yaşında erkek hasta kronik periodontitis tanısıyla tedaviye alınmıştır. Subgingival plakta bu hastalıkla en yoğun ilişkilendirilen spesifik bakteriyel risk faktörlerinden biri olan mikroorganizma aşağıdakilerden hangisidir?
Doğru Şık (D): Porphyromonas gingivalis
Açıklama: Porphyromonas gingivalis ve T. forsythia sıklıkla kronik periodontitiste bulunan majör risk faktörleridir. P. intermedia ve T. denticola da patojeniktir fakat nedensel 4 klasik kritere (eliminasyonda iyileşme, konak yanıtı, virülans faktörleri, hayvan modelinde başlatma) sahip ana risk faktörü üçlüsünde P. gingivalis başı çeker.

**Soru 2 (ID: 752e8fd3-d4db-4237-a49b-143b63ff5aba)**
Soru Kökü: Elli yaşında kadın hasta, sondalamada kanama ve kök yüzeylerinde plak birikimi şikayetiyle muayene edilmiştir. Mikrobiyolojik incelemede Fusobacterium nucleatum ağırlıklı bir flora saptanmıştır. Bu bakteri periodontal hastalık literatüründe nasıl sınıflandırılır?
Doğru Şık (B): Nedensel risk faktörü kriterlerini tam sağlamasa da etyolojik bir faktördür
Açıklama: Fusobacterium nucleatum (F. nudeatum olarak da geçer), C. rectus ve P. intermedia gibi bakteriler, patojenik risk kriterleriyle tam olarak desteklenmemekle birlikte periodontitiste etyolojik faktörler olarak görev alırlar. Ana risk faktörü P. gingivalis veya A. actinomycetemcomitans gibi direkt hastalık başlatıcı model rolü üstlenmezler.

---

### ÇİFT 341 (Benzerlik: 0.69)

**Soru 1 (ID: 34f7d9d4-b5e7-4112-8196-8c7f44fcdae3)**
Soru Kökü: Artan hastalık riski ile klinik olarak güçlü bir şekilde ilişkili olmalarına rağmen, hastalığa biyolojik olarak doğrudan neden olmayan (nedensel olmayan) faktörlere epidemiyolojik olarak ne ad verilir?
Doğru Şık (D): Risk işareti (Marker)
Açıklama: Risk işaretleri (markerlar), örneğin geçirilmiş periodontal hastalık hikayesi veya kanama bulgusu gibi, hastalığın doğrudan etyolojik nedeni olmayan ancak riskin yüksekliğini gösteren prediktif araçlardır. Risk faktörleri (sigara, diyabet) patogenezde doğrudan nedensel rol oynarken, risk işaretleri sadece klinik öngörü sağlar. Bu temel fark risk analizi sınıflandırmasının omurgasını oluşturur.

**Soru 2 (ID: 3e051156-66b5-402d-b639-4a153c636432)**
Soru Kökü: Epidemiyolojik çalışmalarda, gruplar arası kesitsel değerlendirmelerle belirlenmiş olan, muhtemel hastalık yapma ihtimali taşıyan ancak uzun dönem (longitudinal) prospektif çalışmalarla kesin nedensel rolü henüz tam teyit edilmemiş faktörler aşağıdakilerden hangisi ile isimlendirilir?
Doğru Şık (E): Risk göstergesi
Açıklama: Risk göstergeleri (Risk indikatörleri), kesitsel araştırmalarda hastalıkla ilişkili bulunan ancak nedenselliği boylamsal çalışmalarla kesinleşmemiş potansiyel faktörlerdir (örn. HIV, Osteoporoz). Risk faktörleri ise hastalığı başlattığı uzun dönem verilerle (örn. Sigara, Diyabet) kanıtlanmış çevresel veya davranışsal etkenlerdir. Bireysel risk belirleyicileri yaş ve genetik gibi hastanın değiştirilemez anatomik/biyolojik özellikleridir.

---

### ÇİFT 342 (Benzerlik: 0.69)

**Soru 1 (ID: 7c287898-c690-4ce0-a0b2-80e63ea367d4)**
Soru Kökü: I. Genetik faktörler 
II. Sigara kullanımı 
III. Yaş 
IV. Stres 
V. Cinsiyet 
Periodontal risk değerlendirmesi yapılırken, sadece o bireye ait olan ve dışarıdan müdahale ile 'değiştirilemeyen' faktörleri ifade eden bireysel risk belirleyicileri (risk determinanları) yukarıdakilerden hangileridir?
Doğru Şık (C): I, III ve V
Açıklama: Bireysel risk belirleyicileri (determinanlar), kişinin doğuştan sahip olduğu veya geri çevrilemeyen yaş, genetik ve cinsiyet gibi biyolojik demografik özellikleridir. Sigara ve stres ise hastanın yaşam tarzı modifikasyonu veya medikal/psikolojik destekle değiştirilebilecek risk faktörleri veya göstergeleri sınıfına girer. Risk analizinde değiştirilemeyen faktörlerin varlığı tedavi idame periyodunun sıklaştırılmasını gerektirir.

**Soru 2 (ID: d9d015b3-27a5-4bed-a52d-b41d86100493)**
Soru Kökü: Bir hastanın ailesinde görülen şiddetli erken diş kaybı hikayesi (genetik yatkınlık), ileri yaş ve cinsiyet gibi değiştirilemeyen özellikleri, periodontal hastalık risk sınıflamasında hangi özel kategori altında değerlendirilir?
Doğru Şık (C): Bireysel risk belirleyicileri (Determinanlar)
Açıklama: Bireysel risk belirleyicileri (Risk determinanları) terimi, bireyin doğası gereği sahip olduğu ve klinik müdahale ile değiştirilmesi mümkün olmayan (yaş, cinsiyet, genetik yapı, ırk) değişkenleri tanımlamak için kullanılır. Sigara veya spesifik bakteri plağı gibi değişkenler müdahale edilebilir risk faktörleri iken, determinanlar konağın hastalığa yapısal yatkınlık tabanını oluşturur.

---

### ÇİFT 343 (Benzerlik: 0.69)

**Soru 1 (ID: 046cbd3e-9904-4731-83db-d326c57781d9)**
Soru Kökü: 28 yaşında kadın hasta, arka dişlerinin arasına sürekli gıda sıkışması şikayetiyle kliniğe başvurmuştur. Yapılan klinik muayenede dişlerde anatomik bir defekt izlenmemiş ancak interdental papilde lokalize gingival enflamasyon ve kemik yıkımı başlangıcı saptanmıştır. Bu bölgesel periodontal yıkım tablosuna zemin hazırlayan en olası morfolojik faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Hafif açık proksimal kontakt ilişkisi
Açıklama: Hafif açık proksimal kontaktlar, komşu dişler arasındaki anatomik bütünlüğü bozarak çiğneme kuvvetleriyle gıdanın interdental bölgeye itilmesine (gıda sıkışmasına) izin verir. Kök konkaviteleri ve mine incileri de lokal risk faktörleridir ancak doğrudan okluzal kuvvetle interdental papile gıda sıkışmasına yol açan primer faktör açık kontakt ilişkisidir. Bu da kronik irritasyon ve lokalize yıkımla sonuçlanır.

**Soru 2 (ID: a01f94c6-e3b0-44bb-940c-750a91acd04f)**
Soru Kökü: Yirmi iki yaşında kadın hasta; anterior bölgede şiddetli açık kapanış ve posterior bölgede unilateral çapraz kapanış anomalileri ile kliniğe başvurmuştur. Dişlerin pozisyon anomalilerine ikincil olarak gelişen lokal periodontal yıkım mekanizmaları incelendiğinde, bu iki klinik tablonun periodontal etkilerine ilişkin aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (A): Açık kapanış, bölgedeki mekanik temizleme etkisini artırarak koruyucu bir fizyolojik çevre yaratır ve diştaşı birikimini engeller.
Açıklama: Açık kapanış anomalilerinde yiyeceklerin fizyolojik ve mekanik temizleme etkisi artmaz, tam tersine belirgin şekilde azalır; bu durum plak ve diştaşı birikimini artırarak dişeti inflamasyonuna yatkınlık yaratır. Fonksiyonsuzluğa bağlı olarak bu dişlerde patolojik uzama (elongasyon) görülmesi tipiktir. Çapraz kapanış ise okluzal travma, artmış gıda sıkışması ve mandibular dişlerde bukkal/lingual yönde yelpaze benzeri açılma hareketleri ile karakterize yıkıcı bir periodontal biyomekanik zemin oluşturur.

---

### ÇİFT 344 (Benzerlik: 0.69)

**Soru 1 (ID: 53500e71-442d-422e-8739-ef2a233db491)**
Soru Kökü: Sosyoekonomik durumun periodontal hastalıklara etkisi değerlendirildiğinde aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Sigara içme ve plak indeksi gibi faktörler uyumlandırılsa bile sosyoekonomik durum hastalığı etkileyemez.
Açıklama: Epidemiyolojik çalışmalar, sigara içme veya kötü ağız hijyeni gibi diğer majör risk faktörleri standardize edildiğinde (uyumlandırıldığında) dahi düşük sosyoekonomik düzeyin tek başına artan periodontitis riskine neden olduğunu göstermektedir. Sosyoekonomik durum sadece diğer faktörlere zemin hazırlayan pasif bir arka plan değil, bağımsız bir risk belirleyicisidir. Bu durum beslenme, kronik stres ve genel immün durumu kapsayan geniş bir ağın sonucudur.

**Soru 2 (ID: 7d7de700-45c7-4df3-a2ae-9aa474de1969)**
Soru Kökü: Periodontal hastalıkların epidemiyolojik olarak incelenmesini ve popülasyon bazlı verilerin standardizasyonunu zorlaştıran çeşitli faktörler bulunmaktadır. Aşağıdakilerden hangisi periodontal epidemiyolojik çalışmaları zorlaştıran bu etkenlerden biri **değildir**?
Doğru Şık (D): Hastalığın akut ve son derece hızlı ilerleyen karakterde olması
Açıklama: Periodontal hastalıklar doğası gereği genellikle kronik bir seyir izlerler ve uzun yıllar içinde yavaş bir yıkım gösterirler. Bu kronik yapı epidemiyolojik olarak hastalığın başlangıç noktasını ve seyrini takip etmeyi zorlaştıran temel bir etkendir. Diğer şıklarda yer alan heterojenite, multifaktöriyel yapı ve patognomonik özellik yokluğu epidemiyolojiyi zorlaştıran gerçek faktörlerdir.

---

