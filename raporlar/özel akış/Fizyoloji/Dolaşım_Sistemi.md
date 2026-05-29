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

**Soru 1 (ID: 6d4e5fec-e67b-4932-87a1-6728ab9021a9)**
Soru Kökü: Doku kan akımının otoregülasyonunu sağlayan prekapiller sfinkterler ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Güçlü bir sempatik sinir inervasyonu ile merkezi olarak kontrol edilirler.
Açıklama: Prekapiller sfinkterlerin düz kaslarında sinirsel inervasyon (sempatik dahil) yoktur. Bu sfinkterler tamamen lokal doku faktörlerine (O2, CO2, H+, laktat, adenozin) bağlı olarak çalışır ve otoregülasyonu sağlarlar. Arteriyollerde sinir inervasyonu varken, prekapiller sfinkterler sadece metabolitlerle kontrol edilir.

**Soru 2 (ID: 99c0eaf0-333a-4de7-b8da-62f32feb90e6)**
Soru Kökü: Doku kan akımının lokal otoregülasyonunda temel rol oynayan prekapiller sfinkterler ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Güçlü bir vazomotor otonomik sinirsel inervasyona sahiptirler.
Açıklama: Prekapiller sfinkterler, arteriyollerin aksine sinirsel inervasyona sahip değildir; çaplarını tamamen otonomik uyarılardan bağımsız olarak lokal doku faktörlerine (hipoksi, laktat, CO2) göre ayarlarlar. Arteriyoller sempatik inervasyon ile güçlü şekilde daralırken, kapiller yatağa giden nihai akım sadece sfinkterin lokal metabolitlere verdiği yanıtla belirlenir. Bu mekanizma hayati dokuların perfüzyon önceliğini korur.

---

### ÇİFT 2 (Benzerlik: 0.93)

**Soru 1 (ID: 59b5f819-d33c-4211-be16-d566de3b661a)**
Soru Kökü: Doku lokal kan akımının düzenlenmesinde kilit rol oynayan prekapiller sfinkterlerin otoregülasyon dinamikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Güçlü sempatik sinir inervasyonları sayesinde sistemik vazokonstriksiyona katılırlar.
Açıklama: Prekapiller sfinkterlerin düz kaslarında otonom (sempatik) sinirsel inervasyon yoktur. Kasılıp gevşemeleri tamamen dokunun lokal metabolik faktörlerine (hipoksi, laktat, CO2, adenozin artışı) bağlı olarak gelişen otoregülasyon ile sağlanır. Sempatik kontrol, bu seviyeden daha geride olan arteriyoller üzerinde etkilidir.

**Soru 2 (ID: 6d4e5fec-e67b-4932-87a1-6728ab9021a9)**
Soru Kökü: Doku kan akımının otoregülasyonunu sağlayan prekapiller sfinkterler ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Güçlü bir sempatik sinir inervasyonu ile merkezi olarak kontrol edilirler.
Açıklama: Prekapiller sfinkterlerin düz kaslarında sinirsel inervasyon (sempatik dahil) yoktur. Bu sfinkterler tamamen lokal doku faktörlerine (O2, CO2, H+, laktat, adenozin) bağlı olarak çalışır ve otoregülasyonu sağlarlar. Arteriyollerde sinir inervasyonu varken, prekapiller sfinkterler sadece metabolitlerle kontrol edilir.

---

### ÇİFT 3 (Benzerlik: 0.92)

**Soru 1 (ID: 59b5f819-d33c-4211-be16-d566de3b661a)**
Soru Kökü: Doku lokal kan akımının düzenlenmesinde kilit rol oynayan prekapiller sfinkterlerin otoregülasyon dinamikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Güçlü sempatik sinir inervasyonları sayesinde sistemik vazokonstriksiyona katılırlar.
Açıklama: Prekapiller sfinkterlerin düz kaslarında otonom (sempatik) sinirsel inervasyon yoktur. Kasılıp gevşemeleri tamamen dokunun lokal metabolik faktörlerine (hipoksi, laktat, CO2, adenozin artışı) bağlı olarak gelişen otoregülasyon ile sağlanır. Sempatik kontrol, bu seviyeden daha geride olan arteriyoller üzerinde etkilidir.

**Soru 2 (ID: 99c0eaf0-333a-4de7-b8da-62f32feb90e6)**
Soru Kökü: Doku kan akımının lokal otoregülasyonunda temel rol oynayan prekapiller sfinkterler ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Güçlü bir vazomotor otonomik sinirsel inervasyona sahiptirler.
Açıklama: Prekapiller sfinkterler, arteriyollerin aksine sinirsel inervasyona sahip değildir; çaplarını tamamen otonomik uyarılardan bağımsız olarak lokal doku faktörlerine (hipoksi, laktat, CO2) göre ayarlarlar. Arteriyoller sempatik inervasyon ile güçlü şekilde daralırken, kapiller yatağa giden nihai akım sadece sfinkterin lokal metabolitlere verdiği yanıtla belirlenir. Bu mekanizma hayati dokuların perfüzyon önceliğini korur.

---

### ÇİFT 4 (Benzerlik: 0.91)

**Soru 1 (ID: 140f1471-0885-490b-babc-292936c47dfe)**
Soru Kökü: Kalp kası hücrelerinde sarkoplazmik retikulum (SR) kalsiyum pompasının (SERCA) aktivitesini artırarak kasın daha kısa sürede gevşemesini sağlayan protein kinaz-A aracılı mekanizmanın hedef proteini aşağıdakilerden hangisidir?
Doğru Şık (A): Fosfolamban
Açıklama: Normalde defosforile fosfolamban SERCA'yı inhibe ederek yavaş çalıştırır; ancak protein kinaz-A ile fosforile edildiğinde bu inhibisyon kalkar ve SERCA hızlanarak kalsiyumu SR içine hızla pompalar, böylece gevşeme süresi kısalır. Ryanodin reseptörleri ise kalsiyumun SR'den sitoplazmaya salınımını sağlar, geri alımını değil. Fosfolambanın bu çift yönlü regülasyonu kalp atım hızı arttığında diyastol süresinin optimize edilmesini sağlar.

**Soru 2 (ID: dd620952-0017-4c72-b80c-06523615373f)**
Soru Kökü: Miyokard hücresinde sarkoplazmik retikuluma (SR) kalsiyum alımını sağlayan SERCA pompasının hızını düzenleyen ve protein kinaz-A ile fosforile olduğunda kalp kasının daha kısa sürede gevşemesini sağlayan protein aşağıdakilerden hangisidir?
Doğru Şık (B): Fosfolamban
Açıklama: Fosfolamban (PLB), defosforile haldeyken SERCA aktivitesini yavaşlatan, ancak sempatik uyarı sonucu protein kinaz-A ile fosforile edildiğinde bu inhibisyonu kaldırarak SERCA'nın hızla kalsiyumu içeri almasını sağlayan proteindir. Ryanodin, SR'den sitoplazmaya kalsiyum çıkışını sağlayan kanaldır. Fosfolambanın fosforilasyonu sayesinde miyokardiyal gevşeme (luzitropik etki) hızlanır ve bir sonraki kasılma için SR'de daha fazla kalsiyum depolanır.

---

### ÇİFT 5 (Benzerlik: 0.87)

**Soru 1 (ID: 080d86b8-2b07-470f-93d8-4e9242ab2309)**
Soru Kökü: Ekokardiyografi yapılan bir hastanın sol ventrikül end-diyastolik volümü 140 ml, end-sistolik volümü ise 70 ml olarak ölçülmüştür. Bu hastanın ejeksiyon fraksiyonu (EF) yüzde kaçtır?
Doğru Şık (C): 50
Açıklama: Ejeksiyon Fraksiyonu (EF) = Stroke Volüm (Atım Hacmi) / End-Diyastolik Volüm formülü ile hesaplanır. Atım hacmi = EDV - ESV (140 - 70 = 70 ml). EF = 70 / 140 = 0.50 yani %50'dir. Bu parametre sol ventrikül kasılma gücünün klinik olarak en sık kullanılan göstergesidir.

**Soru 2 (ID: 816a62e8-0261-4753-b830-06cb14114354)**
Soru Kökü: Kalp yetmezliği şüphesiyle değerlendirilen bir hastanın ekokardiyografik ölçümlerinde, sol ventrikülün diyastol sonundaki hacmi (end-diyastolik volüm) 120 mL ve sistol sonunda kasılmayı takiben kalan hacmi (end-sistolik volüm) 60 mL olarak bulunmuştur. Buna göre bu hastanın Ejeksiyon Fraksiyonu (EF) yaklaşık yüzde kaçtır?
Doğru Şık (C): 50
Açıklama: Ejeksiyon fraksiyonu (EF), bir atımda pompalanan kan hacminin (Atım Hacmi), diyastol sonu mevcut en büyük hacme oranıdır. Atım hacmi = End-diyastolik volüm (120 mL) eksi End-sistolik volüm (60 mL) = 60 mL. EF = 60 mL / 120 mL = 0.50 yani %50'dir. Sağlıklı bireylerde bu oran %58-60 civarındadır.

---

### ÇİFT 6 (Benzerlik: 0.87)

**Soru 1 (ID: 639433e7-c988-4790-a6e3-fd73bd609825)**
Soru Kökü: 42 yaşında kadın hastanın çarpıntı şikayetiyle başvurduğu acil serviste 25 mm/sn standart kağıt hızıyla çekilen EKG'sinde, birbirini takip eden iki R dalgasının tepesi arasında 20 küçük kare sayılmıştır. Bu hastanın ventriküler atım hızı dakikada kaçtır?
Doğru Şık (C): 75
Açıklama: Standart EKG hızında (25 mm/sn) bir dakikada toplam 1500 küçük kare (60x25) yazdırılır. Kalp hızı, 1500 sayısının iki R dalgası arasındaki küçük kare sayısına bölünmesiyle bulunur. 1500 / 20 = 75 atım/dk olarak hesaplanır. Alternatif olarak büyük kare sayısı kullanılsaydı 300 / 4 (20 küçük kare = 4 büyük kare) = 75 sonucu bulunurdu.

**Soru 2 (ID: b437fb1d-9531-4a57-a3d2-bbf03ee13b1e)**
Soru Kökü: Yirmi beş yaşında sağlıklı kadın hastanın kontrolünde çekilen standart hızlı (25 mm/sn) elektrokardiyogramda, birbirini izleyen iki R dalgası tepesi arasında 20 küçük kare sayılmıştır. Bu bulguya dayanarak hastanın dakika kalp atım hızı kaçtır?
Doğru Şık (A): 75
Açıklama: Standart EKG hızı saniyede 25 mm'dir ve bir dakikada toplam 1500 küçük karelik kağıt ilerler. Kalp hızını bulmak için 1500 sayısı, iki R dalgası arasındaki küçük kare sayısına bölünür (1500 / 20 = 75 atım/dk). 300 sayısını büyük kare sayısına (yaklaşık 4) bölmek de aynı matematiksel sonucu (300/4 = 75) verir.

---

### ÇİFT 7 (Benzerlik: 0.87)

**Soru 1 (ID: 648a7061-ac7c-4460-b370-a9910e5e8019)**
Soru Kökü: Şiddetli sıvı kaybı ve kan basıncı düşüklüğü yaşayan bir kişide, hipotalamus uyarılarak nörohipofizden salınan vazopressin (ADH), damar düz kaslarında aşağıdaki hangi reseptörü aktive ederek vazokonstriksiyon oluşturur?
Doğru Şık (C): V1 reseptörü
Açıklama: Vazopressin (ADH), böbreklerde su geri emilimini toplayıcı kanallardaki V2 reseptörleri aracılığıyla yaparken; güçlü bir vazokonstriktör etkisini damar düz kaslarında bulunan V1 reseptörlerini aktive ederek gösterir. Sempatik tonus alfa-1 ile, kalpteki etkiler ise beta-1 ve M2 ile ilişkilidir.

**Soru 2 (ID: 82770831-1263-4c6c-9c52-1dfbe1fe1711)**
Soru Kökü: Hipovolemi veya kan ozmolaritesinin artışı durumunda nörohipofizden dolaşıma salgılanan ADH (Vazopressin), kan basıncını yükseltici kritik vazokonstriktif etkisini arteriyol düz kaslarındaki hangi reseptör alt tipi üzerinden gerçekleştirir?
Doğru Şık (C): V1 reseptörü
Açıklama: Antidiüretik hormon (ADH/Vazopressin), kan basıncını desteklemek için iki farklı hedefte çalışır. Damar düz kaslarında bulunan V1 reseptörlerini uyararak güçlü bir vazokonstriksiyona (total periferik direnc artışı) neden olur. Böbrek toplayıcı kanallarındaki V2 reseptörleri üzerinden ise akuaporinleri membrana yerleştirerek suyun geri emilimini (hacim artışı) sağlar. AT1 ve Alfa-1 diğer vazokonstriktör sistemlerin (Renin-Anjiyotensin ve Sempatik) reseptörleridir.

---

### ÇİFT 8 (Benzerlik: 0.87)

**Soru 1 (ID: 648a7061-ac7c-4460-b370-a9910e5e8019)**
Soru Kökü: Şiddetli sıvı kaybı ve kan basıncı düşüklüğü yaşayan bir kişide, hipotalamus uyarılarak nörohipofizden salınan vazopressin (ADH), damar düz kaslarında aşağıdaki hangi reseptörü aktive ederek vazokonstriksiyon oluşturur?
Doğru Şık (C): V1 reseptörü
Açıklama: Vazopressin (ADH), böbreklerde su geri emilimini toplayıcı kanallardaki V2 reseptörleri aracılığıyla yaparken; güçlü bir vazokonstriktör etkisini damar düz kaslarında bulunan V1 reseptörlerini aktive ederek gösterir. Sempatik tonus alfa-1 ile, kalpteki etkiler ise beta-1 ve M2 ile ilişkilidir.

**Soru 2 (ID: c96b3d98-8318-4701-8b84-45114d92b1ba)**
Soru Kökü: Trafik kazası sonrası ciddi kan kaybına (hipovolemi) bağlı şok tablosuyla acil servise getirilen 30 yaşındaki erkek hastada, kompensatuar olarak nörohipofizden yüksek miktarda vazopressin (ADH) salgılanmaktadır. Salgılanan bu hormonun hem böbreklerden su tutulumunu sağlaması hem de arteriyollerde vazokonstriksiyon oluşturması beklenmektedir. Bu hastada vazopressinin damar düz kaslarını kasarak kan basıncını yükseltmesi, aşağıdaki reseptörlerden hangisi aracılığıyla gerçekleşir?
Doğru Şık (B): V1
Açıklama: Vazopressin (ADH), vasküler düz kaslarda bulunan V1 reseptörlerine bağlanarak güçlü bir vazokonstriksiyon oluşturur ve akut kan kaybında basıncı hızla artırır. Böbrek toplayıcı kanallarında bulunan V2 reseptörleri ise suyun geri emilimini sağlayarak kan hacmini destekler. Alfa-1 reseptörleri sempatik sinir sistemine ait katekolaminlerin vazokonstriktör etkisine aracılık eder.

---

### ÇİFT 9 (Benzerlik: 0.87)

**Soru 1 (ID: a88088e4-3582-4c0b-971e-7949d0265307)**
Soru Kökü: Senkop atakları geçiren yirmi yaşında kadın hastaya konjenital Uzun QT Sendromu tanısı konuluyor. Bu hastada letal bir aritmi olan Torsades de Pointes gelişiminin temel hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Faz 3 repolarizasyonunun uzaması ve erken art-depolarizasyonlar
Açıklama: Uzun QT sendromunda sıklıkla potasyum kanallarındaki mutasyon nedeniyle Faz 3 repolarizasyon evresi uzar. Hücre dinlenim zar potansiyeline yavaş döndüğü için, repolarizasyon tamamlanmadan yeni ve anormal sızıntılarla "erken art-depolarizasyonlar (early after-depolarisation)" tetiklenir, bu da Torsades de Pointes adı verilen ventriküler taşikardiye yol açar. Diğer şıklar bu aritminin primer patogenezini açıklamaz.

**Soru 2 (ID: e3cb8ba5-c9ee-48ee-8bb3-a8428a74f6f4)**
Soru Kökü: Yirmi beş yaşında senkop öyküsüyle acil servise getirilen kadın hastanın EKG'sinde polimorfik ventriküler taşikardi (Torsades de Pointes) saptanıyor. Uzun QT sendromu tanısı alan bu hastada aritmiyi başlatan temel hücresel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Repolarizasyonun uzamasına bağlı gelişen erken artçı depolarizasyon (early after-depolarization)
Açıklama: Uzun QT sendromunda potasyum kanallarındaki disfonksiyon nedeniyle repolarizasyon fazı (faz 3) uzar ve hücre dinlenim potansiyeline geç döner. Bu uzamış süreçte kalsiyum kanallarının yeniden açılmasıyla oluşan erken artçı depolarizasyonlar (EAD), Torsades de Pointes aritmisini tetikler. İskemik reentry miyokard enfarktüsü sonrası VT'nin ana mekanizmasıdır, ancak Torsades'in patogenezi EAD'dir. Uzun QT'de ileti yavaşlaması değil, aksiyon potansiyeli süresinin uzaması söz konusudur.

---

### ÇİFT 10 (Benzerlik: 0.86)

**Soru 1 (ID: 7dbc7fb3-ccce-4f7c-b391-4b3804b14ae4)**
Soru Kökü: 65 yaşında hipertansiyon hastası erkek, yeni başlanan bir ilaç sonrasında ortaya çıkan inatçı ve kuru öksürük şikayetiyle başvuruyor. İlacın anjiyotensin dönüştürücü enzimi (ACE) bloke ettiği biliniyor. Bu hastada öksürük yan etkisinin ortaya çıkmasına neden olan ve enzim blokajı nedeniyle solunum yollarında yıkılamayarak biriken inflamatuar madde aşağıdakilerden hangisidir?
Doğru Şık (E): Bradikinin
Açıklama: Anjiyotensin dönüştürücü enzim (ACE), aynı zamanda kininaz II olarak da adlandırılır ve dolaşımdaki bradikinini yıkan ana enzimdir. ACE inhibitörleri kullanıldığında bradikinin yıkımı engellenir ve dokularda (özellikle akciğer) biriken bu vazodilatatör/inflamatuar molekül kuru öksürük tablosuna yol açar. Histamin veya substans P birikimi ACE inhibisyonunun doğrudan primer mekanizması değildir.

**Soru 2 (ID: b2e212b2-6b39-4a63-8b2c-e4a8f7b3c469)**
Soru Kökü: 60 yaşında hipertansiyon hastası, yeni başlanan antihipertansif tedavi sonrası inatçı kuru öksürük şikayetiyle başvuruyor. Bu hastanın tedavisinde kullanılan ilacın mekanizması göz önüne alındığında, öksürüğe neden olan inflamatuar maddenin yıkımını engelleyen enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Kininaz II
Açıklama: Anjiyotensin dönüştürücü enzim (ACE) inhibitörleri (kaptopril vb.), aynı zamanda Kininaz II enzimini bloke ederek bradikinin yıkımını engellerler. Dokularda, özellikle solunum yollarında biriken bradikinin inflamatuar bir medyatör olarak inatçı kuru öksürüğe neden olur. Bu spesifik yan etki ACE inhibitörlerinin ayırıcı özelliğidir.

---

### ÇİFT 11 (Benzerlik: 0.86)

**Soru 1 (ID: b07f7ed3-cf52-4b28-a3f8-81ff139d872c)**
Soru Kökü: Kanın damar içerisindeki akış tipini belirleyen Reynolds sayısı formülüne göre, aşağıdakilerden hangisi türbülan (girdaplı) akım eğilimini **azaltıcı** yönde etki yapar?
Doğru Şık (D): Kanın viskozitesinin (Viscosity) artması
Açıklama: Reynolds sayısı (Re) = (Yoğunluk x Damar Çapı x Akım Hızı) / Viskozite formülüyle hesaplanır. Formüle göre viskozitenin artması paydayı büyüteceği için Reynolds sayısını düşürür ve kanı laminer akıma yaklaştırarak türbülan akım eğilimini azaltır. Hız, çap ve yoğunluk pay kısmında olduğu için artışları türbülansı artırır.

**Soru 2 (ID: c60ad3c5-8491-4b9f-8b52-4e0059ef26a5)**
Soru Kökü: Kalp hastalıklarında veya damar patolojilerinde kan akımı laminer formdan türbülan (girdaplı) forma dönüşebilir. Türbülan akım eğilimini belirleyen Reynold (Re) sayısının formülü dikkate alındığında, aşağıdakilerden hangisi türbülan akım olasılığını **artırmaz**?
Doğru Şık (C): Kanın viskozitesinin artması
Açıklama: Reynold Sayısı = (Yoğunluk × Damar çapı × Akım hızı) / Viskozite şeklindedir. Formülden anlaşılacağı üzere viskozite (kanın akmaya karşı gösterdiği iç direnç) paydada yer alır. Viskozitenin artması (örneğin polisitemi) Reynold sayısını düşürür ve türbülan akım olasılığını azaltır. Akım hızının artması ve çapın büyümesi ise türbülansı artırır.

---

### ÇİFT 12 (Benzerlik: 0.86)

**Soru 1 (ID: 08d4d1f2-02ff-47cc-be1b-a48ab74e3d46)**
Soru Kökü: Kalp döngüsünde (kardiyak siklus), QRS kompleksinin hemen ardından başlayan; atriyoventriküler ve semilüner kapakların tamamının kapalı olduğu, ventrikül içi hacmin değişmediği ancak ventrikül basıncının atriyumları aştığı anda birinci kalp sesinin (S1) duyulduğu hemodinamik evre aşağıdakilerden hangisidir?
Doğru Şık (D): İzovolümetrik kontraksiyon evresi
Açıklama: Ventriküller kasılmaya başladığı anda basınç atriyumları aşar ve AV kapaklar aniden kapanarak S1 sesini oluşturur. Ancak aorta kapağını açacak basınca (örn. 80 mmHg) henüz ulaşılamadığı için tüm kapaklar kısa bir süre kapalı kalır. Kanın hiçbir yere gidemediği ve kasılma şiddetiyle hacmin sabit kalıp basıncın aniden fırladığı bu kritik döneme izovolümetrik kontraksiyon evresi denir.

**Soru 2 (ID: 820352e9-61ef-4bc2-87da-e41532a068ce)**
Soru Kökü: Kalp siklusunda ventriküler basıncın atriyum basıncını ilk aştığı anda atriyoventriküler kapakların aniden kapanmasıyla birinci kalp sesinin (S1) duyulduğu evre aşağıdakilerden hangisidir?
Doğru Şık (B): İzovolumetrik kontraksiyon evresi
Açıklama: QRS kompleksi ile başlayan ventrikül kasılmasının ilk fazı olan izovolumetrik kontraksiyonda, artan basınç AV kapakları (mitral ve triküspit) kapatır ve birinci kalp sesi (S1) oluşur. Bu evrede aort ve pulmoner kapaklar henüz açılmadığı için dört kapak da kapalıdır ve kan hacminde değişiklik olmaz. İkinci kalp sesi (S2) ise semilüner kapakların kapanmasıyla izovolumetrik gevşeme evresinde duyulur. S1, sistolün başlangıç belirtecidir.

---

### ÇİFT 13 (Benzerlik: 0.85)

**Soru 1 (ID: 930fdf6d-4744-488d-9a9a-bf007dcb5d23)**
Soru Kökü: 22 yaşında kadın hasta, aşırı korku yaşadığı bir anın ardından fenalaşarak acile getiriliyor. EKG'sinde QT intervalinin 0.55 saniye (uzamış) olduğu ve polimorfik ventriküler taşikardi (Torsades de Pointes) atakları geçirdiği saptanıyor. Bu hastada aritmiyi tetikleyen hücresel aksiyon potansiyeli mekanizması ve ilgili faz uzaması aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): Faz 3 potasyum çıkışında defekt – Erken (early) after-depolarizasyon
Açıklama: Uzun QT sendromlu hastalarda sıklıkla potasyum kanallarındaki mutasyonlar nedeniyle Faz 3 repolarizasyon evresi uzar. Hücrenin dinlenim potansiyeline dönmesi geciktiği için repolarizasyon tamamlanmadan yeniden uyarılma meydana gelir; buna 'erken after-depolarizasyon (early after depolarization)' denir. Bu hücresel sapma klinik olarak Torsades de Pointes aritmisini doğurur.

**Soru 2 (ID: e3cb8ba5-c9ee-48ee-8bb3-a8428a74f6f4)**
Soru Kökü: Yirmi beş yaşında senkop öyküsüyle acil servise getirilen kadın hastanın EKG'sinde polimorfik ventriküler taşikardi (Torsades de Pointes) saptanıyor. Uzun QT sendromu tanısı alan bu hastada aritmiyi başlatan temel hücresel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Repolarizasyonun uzamasına bağlı gelişen erken artçı depolarizasyon (early after-depolarization)
Açıklama: Uzun QT sendromunda potasyum kanallarındaki disfonksiyon nedeniyle repolarizasyon fazı (faz 3) uzar ve hücre dinlenim potansiyeline geç döner. Bu uzamış süreçte kalsiyum kanallarının yeniden açılmasıyla oluşan erken artçı depolarizasyonlar (EAD), Torsades de Pointes aritmisini tetikler. İskemik reentry miyokard enfarktüsü sonrası VT'nin ana mekanizmasıdır, ancak Torsades'in patogenezi EAD'dir. Uzun QT'de ileti yavaşlaması değil, aksiyon potansiyeli süresinin uzaması söz konusudur.

---

### ÇİFT 14 (Benzerlik: 0.85)

**Soru 1 (ID: 930fdf6d-4744-488d-9a9a-bf007dcb5d23)**
Soru Kökü: 22 yaşında kadın hasta, aşırı korku yaşadığı bir anın ardından fenalaşarak acile getiriliyor. EKG'sinde QT intervalinin 0.55 saniye (uzamış) olduğu ve polimorfik ventriküler taşikardi (Torsades de Pointes) atakları geçirdiği saptanıyor. Bu hastada aritmiyi tetikleyen hücresel aksiyon potansiyeli mekanizması ve ilgili faz uzaması aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): Faz 3 potasyum çıkışında defekt – Erken (early) after-depolarizasyon
Açıklama: Uzun QT sendromlu hastalarda sıklıkla potasyum kanallarındaki mutasyonlar nedeniyle Faz 3 repolarizasyon evresi uzar. Hücrenin dinlenim potansiyeline dönmesi geciktiği için repolarizasyon tamamlanmadan yeniden uyarılma meydana gelir; buna 'erken after-depolarizasyon (early after depolarization)' denir. Bu hücresel sapma klinik olarak Torsades de Pointes aritmisini doğurur.

**Soru 2 (ID: a88088e4-3582-4c0b-971e-7949d0265307)**
Soru Kökü: Senkop atakları geçiren yirmi yaşında kadın hastaya konjenital Uzun QT Sendromu tanısı konuluyor. Bu hastada letal bir aritmi olan Torsades de Pointes gelişiminin temel hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Faz 3 repolarizasyonunun uzaması ve erken art-depolarizasyonlar
Açıklama: Uzun QT sendromunda sıklıkla potasyum kanallarındaki mutasyon nedeniyle Faz 3 repolarizasyon evresi uzar. Hücre dinlenim zar potansiyeline yavaş döndüğü için, repolarizasyon tamamlanmadan yeni ve anormal sızıntılarla "erken art-depolarizasyonlar (early after-depolarisation)" tetiklenir, bu da Torsades de Pointes adı verilen ventriküler taşikardiye yol açar. Diğer şıklar bu aritminin primer patogenezini açıklamaz.

---

### ÇİFT 15 (Benzerlik: 0.85)

**Soru 1 (ID: 82770831-1263-4c6c-9c52-1dfbe1fe1711)**
Soru Kökü: Hipovolemi veya kan ozmolaritesinin artışı durumunda nörohipofizden dolaşıma salgılanan ADH (Vazopressin), kan basıncını yükseltici kritik vazokonstriktif etkisini arteriyol düz kaslarındaki hangi reseptör alt tipi üzerinden gerçekleştirir?
Doğru Şık (C): V1 reseptörü
Açıklama: Antidiüretik hormon (ADH/Vazopressin), kan basıncını desteklemek için iki farklı hedefte çalışır. Damar düz kaslarında bulunan V1 reseptörlerini uyararak güçlü bir vazokonstriksiyona (total periferik direnc artışı) neden olur. Böbrek toplayıcı kanallarındaki V2 reseptörleri üzerinden ise akuaporinleri membrana yerleştirerek suyun geri emilimini (hacim artışı) sağlar. AT1 ve Alfa-1 diğer vazokonstriktör sistemlerin (Renin-Anjiyotensin ve Sempatik) reseptörleridir.

**Soru 2 (ID: c96b3d98-8318-4701-8b84-45114d92b1ba)**
Soru Kökü: Trafik kazası sonrası ciddi kan kaybına (hipovolemi) bağlı şok tablosuyla acil servise getirilen 30 yaşındaki erkek hastada, kompensatuar olarak nörohipofizden yüksek miktarda vazopressin (ADH) salgılanmaktadır. Salgılanan bu hormonun hem böbreklerden su tutulumunu sağlaması hem de arteriyollerde vazokonstriksiyon oluşturması beklenmektedir. Bu hastada vazopressinin damar düz kaslarını kasarak kan basıncını yükseltmesi, aşağıdaki reseptörlerden hangisi aracılığıyla gerçekleşir?
Doğru Şık (B): V1
Açıklama: Vazopressin (ADH), vasküler düz kaslarda bulunan V1 reseptörlerine bağlanarak güçlü bir vazokonstriksiyon oluşturur ve akut kan kaybında basıncı hızla artırır. Böbrek toplayıcı kanallarında bulunan V2 reseptörleri ise suyun geri emilimini sağlayarak kan hacmini destekler. Alfa-1 reseptörleri sempatik sinir sistemine ait katekolaminlerin vazokonstriktör etkisine aracılık eder.

---

### ÇİFT 16 (Benzerlik: 0.84)

**Soru 1 (ID: 1fb9963c-a2f0-4598-9ad4-141e487c0add)**
Soru Kökü: Kardiyovasküler sistemde damar çapı, direnç, akım hızı ve basınç ilişkileri değerlendirildiğinde, kanın lineer akım hızının (velocity) aorta kıyasla kapiller yatakta çok daha yavaş olmasının temel fiziksel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Kapiller yatağın toplam enine kesit alanının arteriyel sisteme göre dramatik şekilde yüksek olması
Açıklama: Kanın damar içindeki çizgisel akım hızı (velocity), içinden geçtiği bölgenin 'toplam enine kesit alanı' ile ters orantılıdır (Hız = Debi / Enine kesit alanı). Her bir kapiller çok dar olsa da, milyonlarca kapillerin oluşturduğu paralel ağın toplam enine kesit alanı aortadan yüzlerce kat fazladır. Bu sayede kan hızı yavaşlar ve madde alışverişi için gerekli kritik süre (transit time) kazanılmış olur.

**Soru 2 (ID: 421bd349-e22f-46bd-b213-eceaec76f5c7)**
Soru Kökü: Dolaşım sisteminde kanın akım hızı (velocity) ve damar yatağının fiziksel özellikleri arasındaki ilişkiyi tanımlayan kurala göre, kanın akım hızının en yavaş olduğu damar segmentinin nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): Kan akım hızının damarların toplam enine kesit alanıyla ters orantılı olması
Açıklama: Kanın damar içindeki akış hızı (velocity), damarların toplam enine kesit alanı ile ters orantılıdır. Kapillerlerin tekil çapı çok küçük olsa da, milyarlarca kapillerin toplam enine kesit alanı aorttan yüzlerce kat büyük olduğu için akım hızı burada en düşüktür. Bu yavaşlama, madde alışverişi için gerekli süreyi sağlar.

---

### ÇİFT 17 (Benzerlik: 0.84)

**Soru 1 (ID: 95871c12-020b-4640-8f3e-0a9af2316391)**
Soru Kökü: Efor testi sırasında sempatik sinir sistemi aktive olan hastada kalp atım hızı artmasına rağmen diyastol süresi kısalır, ancak ventrikül gevşemesi hızlanarak kalbin doluşu telafi edilir. Protein kinaz-A aracılığıyla fosforile edilerek SERCA'nın daha hızlı çalışmasına ve miyokardın çok kısa sürede gevşemesine olanak sağlayan protein aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfolamban
Açıklama: Fosfolamban (PLB), defosforile haldeyken SERCA pompasını inhibe eden bir regülatör proteindir. Sempatik uyarım sonucu Beta-1 reseptörleri üzerinden PKA aktive olur ve fosfolambanı fosforile eder. Bu durum inhibisyonu kaldırır, SERCA hızlanır ve kalsiyum hızla SR'ye depolanarak miyokardın gevşemesi (lusitropik etki) hızlandırılır.

**Soru 2 (ID: dd620952-0017-4c72-b80c-06523615373f)**
Soru Kökü: Miyokard hücresinde sarkoplazmik retikuluma (SR) kalsiyum alımını sağlayan SERCA pompasının hızını düzenleyen ve protein kinaz-A ile fosforile olduğunda kalp kasının daha kısa sürede gevşemesini sağlayan protein aşağıdakilerden hangisidir?
Doğru Şık (B): Fosfolamban
Açıklama: Fosfolamban (PLB), defosforile haldeyken SERCA aktivitesini yavaşlatan, ancak sempatik uyarı sonucu protein kinaz-A ile fosforile edildiğinde bu inhibisyonu kaldırarak SERCA'nın hızla kalsiyumu içeri almasını sağlayan proteindir. Ryanodin, SR'den sitoplazmaya kalsiyum çıkışını sağlayan kanaldır. Fosfolambanın fosforilasyonu sayesinde miyokardiyal gevşeme (luzitropik etki) hızlanır ve bir sonraki kasılma için SR'de daha fazla kalsiyum depolanır.

---

### ÇİFT 18 (Benzerlik: 0.84)

**Soru 1 (ID: 5c5a461f-bc50-41a8-8fbe-1e35135b2a4e)**
Soru Kökü: Kanın arter ve arteriyollerde akarken damar duvarına uyguladığı sürtünme (shear) stresi sonucunda sentezlenen ve büyük arterlerde vazodilatasyon yaparak lokal kan akımı artışını destekleyen endotelyal faktör aşağıdakilerden hangisidir?
Doğru Şık (C): Nitrik oksit (NO)
Açıklama: Sürtünme stresi, endotel hücrelerini uyararak nitrik oksit (NO) salınımına neden olur ve bu durum damar düz kasını gevşeterek vazodilatasyon sağlar. Endotelin-1 ve Tromboksan A2 güçlü vazokonstriktörlerdir. NO, doku kanlanmasını akut olarak artıran en önemli lokal regülatörlerden biridir.

**Soru 2 (ID: db59230c-52fc-48b3-80ba-9cb6d74e65e1)**
Soru Kökü: Kanın arter ve arteriyollerde akarken damar duvarı endoteline uyguladığı fiziksel sürtünme stresi (shear stress), lokal kan akımını artırmak amacıyla aşağıdaki vazodilatatör maddelerden hangisinin doğrudan salınımını uyarır?
Doğru Şık (B): Nitrik oksit (NO)
Açıklama: Akım hızının artmasıyla endotel üzerindeki sürtünme stresi yükselir, bu durum endotelyal nitrik oksit sentaz (eNOS) enzimini aktive ederek güçlü bir vazodilatatör olan Nitrik Oksit (NO) sentezini artırır. Endotelin-1 ve Tromboksan A2 ise damar hasarı durumlarında salınan güçlü vazokonstrüktörlerdir. NO, damarın çapını genişleterek artan akıma karşı direnci dengeler.

---

### ÇİFT 19 (Benzerlik: 0.84)

**Soru 1 (ID: 186b46e1-a8f8-49a0-bb94-9d1f1c7541cf)**
Soru Kökü: Sistemik dolaşımda kanın bölümlere göre dağılımı incelendiğinde, kardiyovasküler sistemin temel hacim rezervuarı olarak işlev gören damar yapısı aşağıdakilerden hangisidir?
Doğru Şık (B): Venöz sistem
Açıklama: Sistemik dolaşımdaki kanın yaklaşık %64'ü venöz sistemde bulunur. Bu nedenle venler, dolaşım dinamiğinde ana hacim rezervuarı olarak görev yapar ve venokonstriksiyon ile kalbe dönen kan miktarını doğrudan belirlerler. Arteriyoller ise sistemik direnci belirleyen ana damar yapılarıdır.

**Soru 2 (ID: eb0f7afd-7263-4e50-9f37-2950dea3590f)**
Soru Kökü: Dolaşım sistemindeki total kan hacminin dağılımı incelendiğinde, vücuttaki kanın %64'lük büyük bir kısmını barındıran ve sistemik dolaşımda "hacim rezervuarı" olarak görev yapan vasküler yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Venöz sistem
Açıklama: Vücuttaki kanın yaklaşık %84'ü sistemik dolaşımdadır ve bunun da %64'lük aslan payı venöz sistemde bulunur. Yüksek kompliyans kapasiteleri (esneme yetenekleri) sayesinde venler, ihtiyaç halinde kanın mobilize edildiği bir hacim rezervuarı işlevi görür. Arteriyel sistem ise sadece basınçlı iletimden sorumludur.

---

### ÇİFT 20 (Benzerlik: 0.84)

**Soru 1 (ID: 7702bc63-5ff2-4325-ad59-2d05fa77c499)**
Soru Kökü: Artmış venöz dönüş sonucu kalp boşluklarında meydana gelen gerilmeye sekonder olarak dolaşıma salınan Atriyal Natriüretik Peptid (ANP), kan basıncını regüle eden güçlü bir faktördür. ANP'nin hedef vasküler düz kas hücre membranındaki reseptörüne bağlanarak vazodilatasyon oluşturması, aşağıdaki intraselüler moleküllerden hangisinin artışıyla ilişkilidir?
Doğru Şık (D): cGMP
Açıklama: ANP, vasküler düz kas membranındaki özgül reseptörüne bağlandıktan sonra hücre içi cGMP (siklik guanozin monofosfat) sentezini doğrudan artırır. Yükselen cGMP düz kasta güçlü bir vazodilatasyon oluşturarak total periferik direnci ve kan basıncını düşürür. Etki yolağı nitrik oksit (NO) ile benzerken, adrenalin gibi ajanlar genelde cAMP yolağını aktive eder.

**Soru 2 (ID: f664f933-73a5-4cc9-bc2e-a84b8c8deefe)**
Soru Kökü: Hipervolemi durumunda atriyum endokardının aşırı gerilmesi sonucu salgılanan ve anjiyotensin II'nin etkilerini antagonize ederek kan basıncını düşüren Atriyal Natriüretik Peptid'in (ANP) hücre içi hedef molekülü ve ikincil habercisi aşağıdakilerden hangisidir?
Doğru Şık (E): Düz kas membranındaki reseptör üzerinden intraselüler cGMP artışı
Açıklama: Atriyal Natriüretik Peptid (ANP), hedef dokularda membrana bağlı guanilat siklaz reseptörüne tutunarak hücre içinde cGMP (Siklik guanozin monofosfat) düzeyini artırır. cGMP artışı, damar düz kasında miyozin hafif zincir defosforilasyonuna yol açarak güçlü bir vazodilatasyon yapar ve kan basıncını düşürür. Sempatik sistem ve hormonların çoğu cAMP veya IP3/DAG yolağını kullanırken, ANP ve NO (Nitrik Oksit) cGMP üzerinden gevşeme sağlar.

---

### ÇİFT 21 (Benzerlik: 0.84)

**Soru 1 (ID: 431f6401-e07c-49f1-a462-8c9e99e2f331)**
Soru Kökü: Sağlıklı bir bireyde kan basıncı manşonla (sfigmomanometre) ölçülürken sistolik 120 mmHg, diyastolik 80 mmHg olarak kaydediliyor. Bu hastanın ortalama arteriyel basıncı (OAB) kaç mmHg'dir?
Doğru Şık (A): 93
Açıklama: Ortalama Arter Basıncı (OAB) = Diyastolik Basınç + (Nabız Basıncı / 3) formülüyle hesaplanır. Nabız basıncı = Sistolik - Diyastolik = 120 - 80 = 40 mmHg'dir. OAB = 80 + (40 / 3) = 80 + 13.3 = 93.3 mmHg (yaklaşık 93) olarak bulunur. Kalp döngüsünde diyastol süresi sistole göre daha uzun olduğu için OAB basit aritmetik ortalama olan 100'e eşit değildir, diyastolik basınca daha yakındır.

**Soru 2 (ID: 516ea8af-c4b4-4daa-bce5-465c9199a22e)**
Soru Kökü: Arteriyel sistemde sistolik kan basıncı 130 mmHg, diyastolik kan basıncı ise 70 mmHg olarak ölçülen bir kişinin, ortalama arter basıncı (OAB) kaç mmHg'dir?
Doğru Şık (A): 90
Açıklama: Ortalama Arter Basıncı (OAB) = Diyastolik Basınç + (Nabız Basıncı / 3) formülüyle hesaplanır. Nabız basıncı: 130 - 70 = 60 mmHg. OAB = 70 + (60 / 3) = 70 + 20 = 90 mmHg. Bu basınç, doku perfüzyonunu sağlayan temel hemodinamik itici güçtür.

---

### ÇİFT 22 (Benzerlik: 0.83)

**Soru 1 (ID: 6fa44df6-9d32-448c-9eec-99e3d448d8d6)**
Soru Kökü: Doku kan akımının lokal otoregülasyonu incelendiğinde, aşağıdaki faktörlerden hangisinin arteriyol düz kaslarında vazokonstriksiyon (kasılma) yapması **beklenmez**?
Doğru Şık (B): Adenozin
Açıklama: Adenozin, potasyum, laktat ve lokal CO2 artışı doku metabolizmasının hızlandığının göstergeleridir ve prekapiller sfinkter ile arteriyollerde vazodilatasyon (gevşeme) yaparak bölgeye daha fazla kan akımını sağlarlar. Endotelin-1, Tromboksan A2 ve Nöropeptid Y ise güçlü vazokonstriktör ajanlardır.

**Soru 2 (ID: d3eaf19c-cca6-4671-862d-65a661c56084)**
Soru Kökü: Doku kan akımının lokal faktörlerle otoregülasyonu sırasında mikrosirkülasyonda vazodilatasyon veya vazokonstriksiyon yanıtları oluşur. Aşağıdaki medyatörlerden hangisi prekapiller sfinkterlerde veya arteriyollerde vazodilatasyona neden **olmaz**?
Doğru Şık (B): Endotelin-1
Açıklama: Endotelin-1 damar endotelinden hasar sonrası sentezlenen ve bilinen en güçlü lokal vazokonstriktörlerden biridir. Lokal CO2 artışı, adenozin, hipoksi, laktat gibi metabolizma ürünleri ve nitrik oksit, prostasiklin gibi endotel ürünleri vazodilatasyon yaparak aktif dokunun (örneğin egzersiz yapan iskelet kası) kan akımını artırırlar.

---

### ÇİFT 23 (Benzerlik: 0.83)

**Soru 1 (ID: 0ef05a2b-3a01-43df-9347-7a0ac19a47e3)**
Soru Kökü: EKG'de kullanılan standart ekstremite derivasyonları ve bağlantı noktalarıyla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): DIII: Sağ kol negatif, sol bacak pozitif
Açıklama: DIII derivasyonu sol kol (negatif) ile sol bacak (pozitif) arasındaki potansiyel farkı ölçen bipolar bir derivasyondur. Seçenekte verilen 'Sağ kol negatif, sol bacak pozitif' bağlantısı DII derivasyonuna aittir. Diğer tüm bağlantı noktaları ve elektrot kutupları doğru eşleştirilmiştir.

**Soru 2 (ID: a7b2b7d7-c9cf-4054-92b8-fefb78b31403)**
Soru Kökü: Einthoven üçgenini temel alan standart bipolar ekstremite derivasyonlarının elektrot yerleşimleri ve oluşturdukları potansiyel farklarla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Derivasyon III: Sağ kol ile Sol bacak arasındaki potansiyel farkı ölçer.
Açıklama: Bipolar ekstremite derivasyonlarında; DI sağ kol (-) ve sol kol (+) arasını, DII sağ kol (-) ve sol bacak (+) arasını ölçer. DIII ise sol kol (-) ve sol bacak (+) arasındaki potansiyel farkı ölçer. B seçeneğinde verilen 'sağ kol - sol bacak' tanımı DII derivasyonuna aittir ve DIII için tamamen yanlıştır.

---

### ÇİFT 24 (Benzerlik: 0.83)

**Soru 1 (ID: a834eda8-8ac6-4bdb-ad44-6873a926bc6c)**
Soru Kökü: Altmış iki yaşında erkek hasta, kalp yetmezliği tedavisi amacıyla bir kardiyak glikozid olan digoksin kullanmaktadır. Digoksinin pozitif inotropik etki oluşturmasını sağlayan birincil hücresel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Hücre zarı Na-K ATPaz pompasını inhibe ederek ikincil kalsiyum birikimi sağlamak
Açıklama: Kalp glikozidleri (digital), hücre zarındaki Na-K ATPaz pompasını bloke eder, bu durum hücre içinde Na birikmesine yol açar. Artan hücre içi Na, normalde kalsiyumu dışarı atan 3Na-1Ca antiport (değiştirici) sistemini durdurur, böylece hücre içi Ca seviyesi artar ve kasılma gücü (pozitif inotropi) yükselir. Beta-1 reseptör stimülasyonu sempatik sinir sisteminin mekanizmasıdır, digitalin değil.

**Soru 2 (ID: d7f8fc10-bb67-451b-95ca-59667952e6f6)**
Soru Kökü: Kardiyoloji servisinde takip edilen sistolik kalp yetmezliği hastasına kalp kasılma gücünü artırmak amacıyla digitalis (kalp glikozidi) tedavisi başlanmıştır. Bu ilacın miyokard hücresinde pozitif inotropik etki yaratmasını sağlayan ana mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Sodyum-potasyum ATPaz enzimini inhibe etmek
Açıklama: Digital grubu kalp glikozidleri, miyokard hücresi zarındaki Na+/K+ ATPaz pompasını inhibe ederler. Bu durum hücre içinde sodyum (Na+) birikimine neden olur. Na+ gradyentinin azalması, hücre içindeki kalsiyumu dışarı atan 3Na+/1Ca++ antiport sisteminin (NCX) çalışmasını yavaşlatır. Sonuçta sitoplazmada kalsiyum birikir ve kasılma gücü artar.

---

### ÇİFT 25 (Benzerlik: 0.83)

**Soru 1 (ID: adb986d5-52f9-446e-aaa4-bc3bc87b12d3)**
Soru Kökü: 58 yaşındaki erkek hastanın göğüs ağrısı şikayetiyle başvurusunda çekilen EKG'sinde V4, V5 ve V6 derivasyonlarında süresi 0.05 saniye olan ve derinliği R dalgasının %40'ına ulaşan negatif patolojik Q dalgaları saptanıyor. Bu özgül EKG bulgusunun altında yatan patofizyolojik durum aşağıdakilerden hangisidir?
Doğru Şık (C): Geçirilmiş transmural miyokardiyal infarktüste ölen dokunun depolarize olamaması
Açıklama: Patolojik Q dalgası (süresi >0.04 sn ve derinliği R dalgasının %30'undan fazla), geçirilmiş tam kat (transmural) miyokard infarktüsünün (MI) izidir. İskemi sonrası nekroza uğrayan (ölen) hücreler elektriksel olarak ölü oldukları için uyarılmazlar ve bu bölgeden kayıt yapan elektrotlar karşı tarafın uzaklaşan vektörünü görerek derin negatif bir Q dalgası kaydederler.

**Soru 2 (ID: e0d4d466-0422-41b6-bf49-0a78a0a69377)**
Soru Kökü: Altmış yaşındaki erkek hasta, göğüs kafesinin ortasında sol kola yayılan ezici tarzda ağrı şikayetiyle başvuruyor. Çekilen EKG'sinde V1-V6 derivasyonlarında ST segment elevasyonu ve patolojik Q dalgaları tespit ediliyor. Bu bulgular ışığında hastanın miyokard dokusundaki hücresel hasarın tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Ventrikül duvarının tam katını (transmural) tutan enfarktüs
Açıklama: EKG'de ST segment elevasyonu tam kat (transmural) miyokard hasarını, yani genellikle hiperakut veya akut tam obstrüktif miyokard infarktüsünü (MI) gösterir. Subendokardiyal lokal iskemiler ST depresyonu oluşturur. Patolojik Q dalgası ise hücrelerin öldüğünü ve aksiyon potansiyeli üretemeyerek o bölgenin elektriksel boşluk (negatif dalga) bıraktığını gösterir.

---

### ÇİFT 26 (Benzerlik: 0.83)

**Soru 1 (ID: 88f2c60d-c345-465d-8904-23d8d3e2d473)**
Soru Kökü: Dolaşım sisteminde arteriyol kasılmasını tetikleyen çok sayıda hormon ve lokal faktör bulunmaktadır. Bunlar arasında fizyolojik olarak bilinen en güçlü vazokonstriksiyon yapıcı madde aşağıdakilerden hangisidir?
Doğru Şık (D): Ürotensin-II
Açıklama: Fizyolojide bilinen en güçlü vazokonstriksiyon yapan madde ürotensin-II'dir. Endotelin-1 ve anjiyotensin-II de çok güçlü vazokonstriktörler olmasına rağmen, ürotensin-II damar yatağındaki kasıcı etkisi açısından bunları geride bırakır. Bu bilgi spesifik bir hemodinami markörüdür.

**Soru 2 (ID: c2035044-28d7-496f-bb70-0f315f003a6a)**
Soru Kökü: Dolaşım sisteminde arteriyol çapını etkileyen lokal endoteliyal ve dolaşan maddeler arasında bilinen **en güçlü** vazokonstriktör (daraltıcı) peptid aşağıdakilerden hangisidir?
Doğru Şık (C): Ürotensin-II
Açıklama: Fizyolojik sistemlerde bilinen en güçlü (potent) vazokonstriktör madde ürotensin-II'dir. Endotelin-1, Anjiyotensin-II ve Norepinefrin de güçlü vazokonstriktörler olmakla birlikte, ürotensin-II'nin molar bazda kasıcı aktivitesi bu maddelerden çok daha üstündür.

---

### ÇİFT 27 (Benzerlik: 0.82)

**Soru 1 (ID: 7547f140-f91f-4062-a7f0-aab9cb45435c)**
Soru Kökü: Altmış yaşında ilerleyici efor dispnesi ile başvuran hastaya yapılan ekokardiyografide atım hacmi (stroke volume) 30 ml, end-diyastolik hacmi ise 100 ml olarak ölçülmüştür. Bu hastanın kalbinin pompalama performansını gösteren ejeksiyon fraksiyonu yüzde kaçtır?
Doğru Şık (A): %30
Açıklama: Ejeksiyon fraksiyonu (EF), atım hacminin (stroke volüm) end-diyastolik volüme (EDV) oranıdır ve kalbin sistolik performansının göstergesidir. Formülü EF = SV / EDV şeklindedir. Verilen rakamlara göre 30 ml / 100 ml = 0.30 yani %30 bulunur. Sağlıklı erişkinlerde bu oran %55-60 arasındadır, %30 belirgin bir sistolik kalp yetmezliğini gösterir.

**Soru 2 (ID: 816a62e8-0261-4753-b830-06cb14114354)**
Soru Kökü: Kalp yetmezliği şüphesiyle değerlendirilen bir hastanın ekokardiyografik ölçümlerinde, sol ventrikülün diyastol sonundaki hacmi (end-diyastolik volüm) 120 mL ve sistol sonunda kasılmayı takiben kalan hacmi (end-sistolik volüm) 60 mL olarak bulunmuştur. Buna göre bu hastanın Ejeksiyon Fraksiyonu (EF) yaklaşık yüzde kaçtır?
Doğru Şık (C): 50
Açıklama: Ejeksiyon fraksiyonu (EF), bir atımda pompalanan kan hacminin (Atım Hacmi), diyastol sonu mevcut en büyük hacme oranıdır. Atım hacmi = End-diyastolik volüm (120 mL) eksi End-sistolik volüm (60 mL) = 60 mL. EF = 60 mL / 120 mL = 0.50 yani %50'dir. Sağlıklı bireylerde bu oran %58-60 civarındadır.

---

### ÇİFT 28 (Benzerlik: 0.82)

**Soru 1 (ID: 34179b26-f76e-4baa-8570-f220c0a459a4)**
Soru Kökü: Gelişen akut dekompanse kalp yetmezliğinde kalbin ventriküler duvar geriliminin artması sonucu dolaşıma salınan ve günümüzde sentetik formları acil kalp yetmezliği tedavisinde terapötik ajan olarak da kullanılabilen majör hormon aşağıdakilerden hangisidir?
Doğru Şık (D): Brain Natriüretik Peptid (BNP)
Açıklama: BNP, artmış ventrikül yüküne yanıt olarak kardiyomiyositlerden kana verilen güçlü bir natriüretik peptiddir. Kan basıncını, venöz dönüşü ve periferal direnci düşürücü vazodilatatör etkilerinin yanı sıra, sodyum/su atılımını da artırarak kalbin yükünü hafiflettiği için akut dekompanse kalp yetmezliğinin farmakolojik tedavisinde kullanılır. Aldosteron ve vazopressin ise su tutarak kalbin yükünü artırır.

**Soru 2 (ID: 95b7a9f2-1ed5-4251-9566-e4f06e49749b)**
Soru Kökü: Akut dekompanse kalp yetmezliği tedavisinde de kullanılmaya başlanan, yapısal olarak ANP'ye (Atriyal Natriüretik Peptid) benzeyen ancak hipervolemik durumlarda temel olarak ventrikül endokardının gerilmesiyle salgılanarak kan basıncını düşürmeye çalışan hormon aşağıdakilerden hangisidir?
Doğru Şık (B): Brain Natriüretik Peptid (BNP)
Açıklama: BNP (Brain Natriuretic Peptide) ilk kez beyinden izole edildiği için bu ismi alsa da, insan fizyolojisinde hacim yüklenmesine bağlı olarak esas sentez ve salınım yeri kalp ventrikül endokardıdır. Atriyum gerilince ANP, ventrikül gerilince BNP salınır; her ikisi de cGMP'yi artırarak vazodilatasyon ve natriürez yapar. Klinik pratikte BNP düzeyleri kalp yetmezliğinin kritik bir biyobelirteci ve sentetik formu da tedavi ajanıdır.

---

### ÇİFT 29 (Benzerlik: 0.82)

**Soru 1 (ID: 60c3ae2b-193a-4c1b-97f2-5c638ac0c984)**
Soru Kökü: Ciddi kusma ve diüretik kullanımı sonrası halsizlik şikayetiyle başvuran bir hastanın serum potasyum düzeyi 2.1 mEq/L (hipopotasemi) saptanıyor. Bu hastanın ventrikül miyokardında dinlenim membran potansiyelinde (İMP) ve EKG trasajında oluşması beklenen en spesifik değişiklik çifti aşağıdakilerden hangisidir?
Doğru Şık (B): İMP -110 mV'a düşer / T dalgası yassılaşır ve U dalgası belirginleşir
Açıklama: Hipopotasemide, potasyumun hücre dışına konsantrasyon gradyanı arttığı için istirahat membran potansiyeli -90 mV'dan -110 mV'a düşerek hiperpolarize olur. Bu aşırı negatiflik nedeniyle repolarizasyona dönüş süreci uzar ve zorlaşır; klinik EKG'de T dalgası küçülür/kaybolur, repolarizasyonun uzamasını temsil eden U dalgası belirginleşir. İMP'nin -70 mV'a kayması hiperpotasemi bulgusudur.

**Soru 2 (ID: a6c35de4-051b-4ff9-a760-783ee86a3afd)**
Soru Kökü: Elli yaşında hipertansiyon hastası, diüretik ilaç kullanımına bağlı halsizlik ile acile başvuruyor. Alınan kanda serum potasyum düzeyinin ileri derecede düşük (hipopotasemi) olduğu saptanıyor. Bu hastanın EKG'sinde, miyokard istirahat membran potansiyelinin -110 mV seviyelerine hiperpolarize olmasına bağlı olarak aşağıdaki bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): U dalgasının belirginleşmesi ve T dalgasının yassılaşıp negatifleşmesi
Açıklama: Hipopotasemide hücre dışı potasyum konsantrasyonu düştüğü için hücre istirahat potansiyeli çok daha negatif olur (-110 mV). Bu hiperpolarizasyon repolarizasyonun uzamasına ve zorlaşmasına yol açar, T dalgası yassılaşır veya negatifleşir. Papiller kasların uzun süren repolarizasyonunu yansıtan patolojik bir 'U dalgası' EKG'ye eklenir. Sivri T dalgaları ise hiperpotasemide hücrenin hipopolarize olmasının sonucudur.

---

### ÇİFT 30 (Benzerlik: 0.82)

**Soru 1 (ID: 80887963-a2a4-495f-bed5-b23c8b9f63e7)**
Soru Kökü: Sinoatriyal düğümdeki (SA nod) otoritmik hücrelerin aksiyon potansiyelinde, eşik değere ulaşmadan önceki pace-maker (prepotansiyel) döneminde hücre içine sızarak depolarizasyon sürecini başlatan kalsiyum kanalı tipi aşağıdakilerden hangisidir?
Doğru Şık (A): T tipi kalsiyum kanalı
Açıklama: SA nodun Faz 4 prepotansiyel evresinde, 'I funny' sodyum akımı ile birlikte voltaja duyarlı T (Transient) tipi kalsiyum kanallarından hücre içine kalsiyum girişi olur. L (Long-lasting) tipi kalsiyum kanalları ise eşik değer aşıldıktan sonraki asıl depolarizasyon (Faz 0) fazından sorumludur. T tipi kanallar pace-maker ritminin temel belirleyicilerindendir.

**Soru 2 (ID: 9dffac1a-897c-4cbe-808f-965d38233f47)**
Soru Kökü: Kalbin otoritmik (SA nod) hücrelerinde aksiyon potansiyeli oluşumu sırasında, prepotansiyelin (Faz 4) eşik değere ulaşmasını sağlayan spesifik kalsiyum kanalı aşağıdakilerden hangisidir?
Doğru Şık (D): Voltaja duyarlı T-tipi kanal
Açıklama: SA nod Faz 4 döneminde, hücre içine sızan sodyumun (I funny) ardından voltaja duyarlı T-tipi kalsiyum kanallarından kalsiyum girişi başlar ve bu durum membranı eşik değere ulaştırır. Eşik değere ulaşıldıktan sonra depolarizasyon evresinde (Faz 0) ise L-tipi kalsiyum kanalları devreye girerek asıl hızlı kalsiyum girişini sağlar. Dolayısıyla tetikleyici rol T-tipi kanallara aittir.

---

### ÇİFT 31 (Benzerlik: 0.81)

**Soru 1 (ID: a6c35de4-051b-4ff9-a760-783ee86a3afd)**
Soru Kökü: Elli yaşında hipertansiyon hastası, diüretik ilaç kullanımına bağlı halsizlik ile acile başvuruyor. Alınan kanda serum potasyum düzeyinin ileri derecede düşük (hipopotasemi) olduğu saptanıyor. Bu hastanın EKG'sinde, miyokard istirahat membran potansiyelinin -110 mV seviyelerine hiperpolarize olmasına bağlı olarak aşağıdaki bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): U dalgasının belirginleşmesi ve T dalgasının yassılaşıp negatifleşmesi
Açıklama: Hipopotasemide hücre dışı potasyum konsantrasyonu düştüğü için hücre istirahat potansiyeli çok daha negatif olur (-110 mV). Bu hiperpolarizasyon repolarizasyonun uzamasına ve zorlaşmasına yol açar, T dalgası yassılaşır veya negatifleşir. Papiller kasların uzun süren repolarizasyonunu yansıtan patolojik bir 'U dalgası' EKG'ye eklenir. Sivri T dalgaları ise hiperpotasemide hücrenin hipopolarize olmasının sonucudur.

**Soru 2 (ID: f98b18a0-c0d9-4edd-9bd1-06d5072967a6)**
Soru Kökü: Aşağıdaki EKG bulgularından hangisi, hücre dinlenim membran potansiyelinin -90 mV'dan -110 mV'a inerek hiperpolarize olduğu ve repolarizasyonun uzadığı hipopotasemi tablosunun karakteristik bir göstergesidir?
Doğru Şık (A): U dalgasının belirginleşmesi
Açıklama: Hipopotasemide, potasyum hücre dışına daha fazla çıkma eğiliminde olduğu için hücre -110 mV'a kadar hiperpolarize olur. Bu durumda repolarizasyon zorlaşır ve uzar. T dalgası yassılaşır veya negatifleşir ve uzamış repolarizasyonu (özellikle papiller kasın) gösteren belirgin bir U dalgası ortaya çıkar. Hiperkalemide ise T sivrileşir.

---

### ÇİFT 32 (Benzerlik: 0.81)

**Soru 1 (ID: 456952f8-d85c-4d8a-822e-93129636f39b)**
Soru Kökü: Ağır kronik böbrek yetmezliği olan 60 yaşındaki kadın hastanın serum potasyum düzeyi 7.2 mEq/L (Normal: 3.5-5.0) olarak ölçülmüştür. Bu hastanın EKG'sinde aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (D): Belirgin U dalgası
Açıklama: Belirgin U dalgası hiperpotasemide değil, hipopotasemide (düşük potasyum) papiller kasın uzamış repolarizasyonu sonucu görülen bir bulgudur. Hiperpotasemide hücre membran potansiyeli kısmi depolarize hale gelir; bu durum repolarizasyonu hızlandırıp T dalgasını sivrileştirirken, voltaj bağımlı Na kanallarını inaktive ederek QRS'i genişletir ve ileri evrede P dalgası kaybı ile diyastolik arreste yol açar.

**Soru 2 (ID: a6c35de4-051b-4ff9-a760-783ee86a3afd)**
Soru Kökü: Elli yaşında hipertansiyon hastası, diüretik ilaç kullanımına bağlı halsizlik ile acile başvuruyor. Alınan kanda serum potasyum düzeyinin ileri derecede düşük (hipopotasemi) olduğu saptanıyor. Bu hastanın EKG'sinde, miyokard istirahat membran potansiyelinin -110 mV seviyelerine hiperpolarize olmasına bağlı olarak aşağıdaki bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): U dalgasının belirginleşmesi ve T dalgasının yassılaşıp negatifleşmesi
Açıklama: Hipopotasemide hücre dışı potasyum konsantrasyonu düştüğü için hücre istirahat potansiyeli çok daha negatif olur (-110 mV). Bu hiperpolarizasyon repolarizasyonun uzamasına ve zorlaşmasına yol açar, T dalgası yassılaşır veya negatifleşir. Papiller kasların uzun süren repolarizasyonunu yansıtan patolojik bir 'U dalgası' EKG'ye eklenir. Sivri T dalgaları ise hiperpotasemide hücrenin hipopolarize olmasının sonucudur.

---

### ÇİFT 33 (Benzerlik: 0.81)

**Soru 1 (ID: 9c07fd26-33ba-4b32-9e15-af93d77d6955)**
Soru Kökü: Kalbin kasılma gücü fizyolojik olarak Frank-Starling yasasına göre ayarlanır. Bu yasaya göre kalbe gelen kan miktarı (venöz dönüş) arttığında kasılma gücünün artmasını sağlayan primer mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Artan gerim ile aktin ve miyozin flamentlerinin daha optimum düzeyde örtüşmesi
Açıklama: Frank-Starling yasasının temelinde kas fibrilinin boy-gerim ilişkisi yatar. Diyastol sonu hacim (ön yük) arttığında, miyokardiyal sarkomerler bir yay gibi gerilir. Bu uzama, aktin ve miyozin çapraz köprülerinin kasılma için en uygun (optimum) örtüşme pozisyonuna gelmesini sağlar ve bir sonraki sistolde dışarıya daha güçlü bir fırlatma (artmış atım hacmi) gerçekleşir. Bu intrinsik bir özelliktir, sempatik sinir veya kalsiyum depolarıyla ilgisi yoktur.

**Soru 2 (ID: d45cde9b-8aea-4032-a7de-7ad5396a951b)**
Soru Kökü: Frank-Starling yasasına göre, venöz dönüşün artmasının kalbin atım hacmini artırması fizyolojik olarak hangi hücresel mekanizmayla gerçekleşir?
Doğru Şık (E): Sarkomer boyunun uzamasıyla aktin ve miyozin flamentlerinin optimum örtüşme noktasına gelmesiyle
Açıklama: Frank-Starling (kalbin kendi kendini düzenleme) yasasının temelinde kas liflerinin gerilme miktarı yatar. Artan venöz dönüş ventrikülü gerdiğinde, sarkomer boyu 2.0-2.2 mikrometre uzunluğa erişir; bu noktada aktin ve miyozin çapraz köprüleri en optimum örtüşme seviyesinde yakalar ve kasılma gücü maksimuma çıkar. Bu intrinsik bir özelliktir, sempatik sinir sistemi veya hormonların (Beta-1 etkisi) dâhiliyeti olmadan da kalp kendi doluşunu atıma çevirebilir.

---

### ÇİFT 34 (Benzerlik: 0.81)

**Soru 1 (ID: 36d9fa0c-2445-44d8-a68d-66b8557ba39d)**
Soru Kökü: Altmış beş yaşında erkek hastada akut kan basıncı artışı (hipertansif kriz) gelişmiştir. Karotis sinüsü ve aort arkındaki baroreseptörler bu gerimi algılayarak beyin sapındaki NTS (nükleus traktus solitarius) bölgesini uyarır. Bedeni korumaya yönelik bu refleks arkında, kan basıncını düşürmek için eferent kolda aşağıdaki mekanizmalardan hangisi gerçekleşir?
Doğru Şık (B): Vazomotor merkezdeki vazokonstriktör alanın inhibe edilerek damarların genişletilmesi
Açıklama: Basınç yükseldiğinde baroreseptör gerimi artar ve uyarılar NTS üzerinden vazomotor merkeze ulaşır. NTS, vazodilatatör alanı aktif hale getirip, damarları büzen sempatik vazokonstriktör alanı inhibe eder. Bu durum periferik direnci düşürür. Eş zamanlı olarak vagus üzerinden kalp hızı da düşürülür (parasempatik aktivite artar, baskılanmaz). Böylece arteryel basınç regüle edilir.

**Soru 2 (ID: 5eeafcbe-b955-4ff8-a9fd-7e444d4d6e6e)**
Soru Kökü: Altmış yaşında erkek hasta, ani başlayan şiddetli baş ağrısı şikayetiyle acile getiriliyor. Vital bulgularında kan basıncı 180/110 mmHg olarak ölçülüyor. Bu akut arteryel kan basıncı yükselmesi karşısında baroreseptör refleksinin vereceği fizyolojik nöral yanıt aşağıdakilerden hangisidir?
Doğru Şık (D): Vazokonstriktör alan inhibe edilir, sempatik tonus ve kalp debisi düşer.
Açıklama: Kan basıncı yükseldiğinde baroreseptörler gerilir ve NTS'ye giden uyarı frekansı artar. NTS, vazodilatatör alanı aktive ederken vazokonstriktör alanı inhibe eder. Bu da sempatik tonusun geri çekilmesine, damarların genişlemesine (direnç düşüşü) ve vagal aktivasyonla kalp debisinin düşmesine neden olarak tansiyonu normale indirir.

---

### ÇİFT 35 (Benzerlik: 0.81)

**Soru 1 (ID: 7dbc7fb3-ccce-4f7c-b391-4b3804b14ae4)**
Soru Kökü: 65 yaşında hipertansiyon hastası erkek, yeni başlanan bir ilaç sonrasında ortaya çıkan inatçı ve kuru öksürük şikayetiyle başvuruyor. İlacın anjiyotensin dönüştürücü enzimi (ACE) bloke ettiği biliniyor. Bu hastada öksürük yan etkisinin ortaya çıkmasına neden olan ve enzim blokajı nedeniyle solunum yollarında yıkılamayarak biriken inflamatuar madde aşağıdakilerden hangisidir?
Doğru Şık (E): Bradikinin
Açıklama: Anjiyotensin dönüştürücü enzim (ACE), aynı zamanda kininaz II olarak da adlandırılır ve dolaşımdaki bradikinini yıkan ana enzimdir. ACE inhibitörleri kullanıldığında bradikinin yıkımı engellenir ve dokularda (özellikle akciğer) biriken bu vazodilatatör/inflamatuar molekül kuru öksürük tablosuna yol açar. Histamin veya substans P birikimi ACE inhibisyonunun doğrudan primer mekanizması değildir.

**Soru 2 (ID: ed0e1d30-32a4-45e1-909f-626a1c33000a)**
Soru Kökü: Hipertansiyon tedavisi için ACE (Anjiyotensin Dönüştürücü Enzim) inhibitörü grubundan kaptopril başlanan bir hasta, kan basıncı düşmesine rağmen 2 hafta sonra inatçı ve kuru bir öksürük şikayetiyle polikliniğe başvuruyor. Bu yan etkinin hücresel temelini oluşturan olay, ACE enziminin inhibisyonu sonucu akciğer kapiller endotelinde aşağıda verilen hangi molekülün yıkılamayıp birikmesidir?
Doğru Şık (C): Bradikinin
Açıklama: Akciğer kaynaklı ACE (Anjiotensin konverting enzim) sadece Anjiyotensin I'i, Anjiyotensin II'ye çevirmekle kalmaz; aynı zamanda 'kininaz II' olarak da bilinir ve vazodilatatör/inflamatuar bir peptid olan bradikinini yıkar. Kaptopril gibi ACE inhibitörleri enzimi bloke edince, akciğerde bradikinin yıkılamaz ve lokal birikim yaparak hava yollarını irrite eder, bu da tipik kuru öksürük yan etkisini oluşturur.

---

### ÇİFT 36 (Benzerlik: 0.81)

**Soru 1 (ID: 5a17e3bd-4a42-4204-b0d4-5a8ce371e135)**
Soru Kökü: Bayılma atakları ile hastaneye başvuran genç bir hastanın genetik analizinde voltaj bağımlı potasyum kanallarında mutasyon saptanmıştır. EKG'de ventriküler aksiyon potansiyelinin faz 3 evresinin (repolarizasyon) yavaşlamasına bağlı uzamış bir aralık dikkati çekmiştir. Bu duruma bağlı olarak hastada Torsades de Pointes adı verilen ölümcül aritmi gelişme riski yüksektir. Hastanın EKG'sinde hangi mesafenin uzamış olması beklenir?
Doğru Şık (A): QT aralığı
Açıklama: Uzun QT sendromu, potasyum kanallarındaki mutasyon nedeniyle repolarizasyonun (Faz 3) uzadığı genetik bir durumdur. QT mesafesi, ventrikülün tüm depolarizasyon ve repolarizasyon sürecini yansıtır. Hücre dinlenim potansiyeline geç döndüğü için 'erken art-depolarizasyon'lar tetiklenir ve bu durum ventriküler taşikardiye (Torsades de Pointes) dönüşebilir.

**Soru 2 (ID: 930fdf6d-4744-488d-9a9a-bf007dcb5d23)**
Soru Kökü: 22 yaşında kadın hasta, aşırı korku yaşadığı bir anın ardından fenalaşarak acile getiriliyor. EKG'sinde QT intervalinin 0.55 saniye (uzamış) olduğu ve polimorfik ventriküler taşikardi (Torsades de Pointes) atakları geçirdiği saptanıyor. Bu hastada aritmiyi tetikleyen hücresel aksiyon potansiyeli mekanizması ve ilgili faz uzaması aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): Faz 3 potasyum çıkışında defekt – Erken (early) after-depolarizasyon
Açıklama: Uzun QT sendromlu hastalarda sıklıkla potasyum kanallarındaki mutasyonlar nedeniyle Faz 3 repolarizasyon evresi uzar. Hücrenin dinlenim potansiyeline dönmesi geciktiği için repolarizasyon tamamlanmadan yeniden uyarılma meydana gelir; buna 'erken after-depolarizasyon (early after depolarization)' denir. Bu hücresel sapma klinik olarak Torsades de Pointes aritmisini doğurur.

---

### ÇİFT 37 (Benzerlik: 0.80)

**Soru 1 (ID: 7d872eca-6a9a-4ff8-9cdc-ed6385568c00)**
Soru Kökü: Aşağıdakilerden hangisi sempatik otonom sinir sistemi uyarısının kalpte oluşturduğu fizyolojik yanıtlardan biri **değildir**?
Doğru Şık (B): SA nodda pace-maker potansiyel (faz 4) süresinin uzaması
Açıklama: Sempatik uyarım SA nod hücrelerinde sodyum ve kalsiyum girişini kolaylaştırarak dinlenim zarından eşik potansiyeline ulaşmayı hızlandırır; yani faz 4 (prepotansiyel) süresini KISALTIR, uzatmaz. Pace-maker süresinin uzaması bradikardiye neden olan parasempatik (vagal) etkiye aittir.

**Soru 2 (ID: b7210c54-668d-441e-9663-ff812bec68a2)**
Soru Kökü: Aşağıdakilerden hangisi kalbe otonom sinir sisteminin etkilerinden biri **değildir**?
Doğru Şık (C): Parasempatik uyarı, vagus siniri üzerinden asetilkolin salgılayarak ventrikül kasılma gücünü dramatik olarak azaltır.
Açıklama: Parasempatik (vagal) uyarının atriyumlar üzerinde inotropik baskılayıcı etkisi varken, ventriküller üzerinde vagal inervasyon çok zayıf olduğundan ventriküler kasılma gücünü (negatif inotropik etki) doğrudan ve güçlü bir şekilde etkilemez. Sempatik sistem hem atriyum hem ventriküllere güçlü inervasyon sağlar.

---

### ÇİFT 38 (Benzerlik: 0.80)

**Soru 1 (ID: 36c888a1-1dcc-4cd6-b616-475993a3b23c)**
Soru Kökü: Altmış beş yaşında erkek hasta, genel halsizlik ve çarpıntı şikayetiyle acil servise başvuruyor. Fizik muayenesinde bradikardi saptanan hastanın laboratuvar incelemesinde serum potasyum düzeyi 7.2 mEq/L (Yüksek) bulunuyor. Bu hastanın EKG'sinde aşağıdaki bulgulardan hangisinin görülmesi **beklenmez**?
Doğru Şık (D): QT mesafesinde uzama
Açıklama: Hiperkalemide hücre dinlenim membran potansiyeli düşer (hipopolarizasyon) ve hücre repolarizasyonu kolaylaştığı için T dalgası sivrileşir, aksiyon potansiyelinin süresi ve dolayısıyla QT mesafesi kısalır. Ancak sodyum kanalları inaktive olduğu için depolarizasyon yavaşlar ve QRS genişler, yüksek dozlarda P dalgası kaybolur. QT mesafesinin uzaması hiperkalemi değil, hipokalsemi veya hipokalemi bulgusudur.

**Soru 2 (ID: 456952f8-d85c-4d8a-822e-93129636f39b)**
Soru Kökü: Ağır kronik böbrek yetmezliği olan 60 yaşındaki kadın hastanın serum potasyum düzeyi 7.2 mEq/L (Normal: 3.5-5.0) olarak ölçülmüştür. Bu hastanın EKG'sinde aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (D): Belirgin U dalgası
Açıklama: Belirgin U dalgası hiperpotasemide değil, hipopotasemide (düşük potasyum) papiller kasın uzamış repolarizasyonu sonucu görülen bir bulgudur. Hiperpotasemide hücre membran potansiyeli kısmi depolarize hale gelir; bu durum repolarizasyonu hızlandırıp T dalgasını sivrileştirirken, voltaj bağımlı Na kanallarını inaktive ederek QRS'i genişletir ve ileri evrede P dalgası kaybı ile diyastolik arreste yol açar.

---

### ÇİFT 39 (Benzerlik: 0.80)

**Soru 1 (ID: c2035044-28d7-496f-bb70-0f315f003a6a)**
Soru Kökü: Dolaşım sisteminde arteriyol çapını etkileyen lokal endoteliyal ve dolaşan maddeler arasında bilinen **en güçlü** vazokonstriktör (daraltıcı) peptid aşağıdakilerden hangisidir?
Doğru Şık (C): Ürotensin-II
Açıklama: Fizyolojik sistemlerde bilinen en güçlü (potent) vazokonstriktör madde ürotensin-II'dir. Endotelin-1, Anjiyotensin-II ve Norepinefrin de güçlü vazokonstriktörler olmakla birlikte, ürotensin-II'nin molar bazda kasıcı aktivitesi bu maddelerden çok daha üstündür.

**Soru 2 (ID: c545edd7-3540-47ed-bc66-23c0ac5ac91b)**
Soru Kökü: Damar duvarı üzerindeki otoregülasyon mekanizmalarında rol oynayan moleküller incelendiğinde, insan vücudunda sentezlenen ve bilinen en güçlü lokal vazokonstriktör etkiye sahip olan peptit molekül aşağıdakilerden hangisidir?
Doğru Şık (E): Ürotensin-II
Açıklama: Kan damarlarında vazokonstriksiyon yapan Angiotensin-II, Endotelin-1 ve Tromboksan A2 gibi çok güçlü maddeler bulunmasına rağmen, kaynağa göre memelilerde bilinen en güçlü vazokonstriktör madde Ürotensin-II molekülüdür. Bu bilgi periferik direnci artıran lokal faktörler içinde spesifik bir farmakolojik sıradışılıktır.

---

### ÇİFT 40 (Benzerlik: 0.80)

**Soru 1 (ID: 044e08ea-2aa1-4616-b5fa-bca1f737b4d4)**
Soru Kökü: Kapiller ve postkapiller venüllerin duvarında yerleşen, uzantılı morfolojiye sahip mezoderm kökenli hücrelerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Sadece mekanik destek sağlayan inaktif endoteliyal türevlerdir.
Açıklama: Perisitler, sadece pasif mekanik destek sağlayan hücreler değil, kasılma yeteneği (kontraktil) sayesinde bölgesel kapiller akımı regüle edebilen aktif hücrelerdir. Aynı zamanda hasar onarımında düz kas hücrelerine veya fibroblastlara farklılaşabilirler. Endotel hücresi sanılmaları sık bir hatadır, ancak perisitler endotelin dışına yerleşmiş, işlevi daha geniş kök hücre benzeri elemanlardır.

**Soru 2 (ID: d6cbc19f-e7a0-49a4-b6bf-a62a43e8b8a0)**
Soru Kökü: Kapiller ve postkapiller venüllerin duvarında yerleşen, uzantıları olan, kasılma yeteneğine sahip ve gerektiğinde diğer mezoderm kökenli hücrelere farklılaşabilen hücreler aşağıdakilerden hangisidir?
Doğru Şık (C): Perisitler
Açıklama: Perisitler, kapiller ve postkapiller venüllerin etrafını saran, hem kasılma yeteneğiyle lokal kan akımını modüle eden hem de onarım süreçlerinde farklı mezoderm kökenli hücrelere dönüşebilen özel hücrelerdir. Endotel hücreleri damar lümenini döşeyen epitel tabakasıdır ve bu farklılaşma potansiyeline sahip değildir. Düz kas hücreleri ise arteriyol ve arterlerin tunika medyasında bulunur, kapillerde bulunmazlar.

---

### ÇİFT 41 (Benzerlik: 0.80)

**Soru 1 (ID: 16393053-c482-46e7-b247-3690fbdca974)**
Soru Kökü: Miyokard dokusunun elektrofizyolojik özellikleri göz önüne alındığında, kalp kasının iskelet kasından farklı olarak sürekli ve yüksek frekanslı uyarımlarla spazma girmemesinin (tetani oluşmamasının) temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): Mutlak refrakter dönem ile kasılma evresinin eş zamanlı olarak gerçekleşmesi
Açıklama: Kalp kası hücresinin aksiyon potansiyeli süresi çok uzundur (yaklaşık 250-300 msn) ve hücrenin ikinci bir uyarıya yanıt veremediği mutlak refrakter dönem, mekanik kasılma süresi ile tamamen çakışır. Kasılma bitmeden yeni bir elektriksel uyarının mekanik bir yanıt oluşturamaması, kalbin bir pompa olarak dinlenmesine olanak tanır ve ölümcül tetanik spazmları önler.

**Soru 2 (ID: e889853f-90d8-4e8d-b261-b0f264a63795)**
Soru Kökü: Otuz yaşında erkek hasta, farmakoloji laboratuvarında yüksek frekanslı elektriksel uyarılara maruz bırakılan izole iskelet kasında tetanik kasılma gözlemlerken, aynı uyarı frekansında miyokard dokusunda tetani elde edememektedir. Kalp kasında fizyolojik olarak tetani oluşumunu imkansız kılan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Mutlak refrakter dönem ile kasılma cevabının eş zamanlı sonlanması
Açıklama: Kalp kasında aksiyon potansiyelinin plato evresi nedeniyle mutlak refrakter (uyarılamaz) dönem çok uzundur (yaklaşık 250-300 msn) ve mekanik kasılma süresiyle neredeyse aynı uzunluktadır. Miyokard hücresi gevşemeye başlamadan önce yeni bir elektriksel uyarıya yanıt veremez, bu da kasılmaların birleşerek ölümcül bir tetani (kramp) oluşturmasını engeller.

---

### ÇİFT 42 (Benzerlik: 0.80)

**Soru 1 (ID: 251fbb7c-7f69-447d-a9d2-4a9584a259e0)**
Soru Kökü: Ailesel bayılma nöbetleri araştırılan genç hastaya 'Uzun QT Sendromu' tanısı konulmuştur. Bu hastalarda repolarizasyon fazının (Faz 3) uzamasına bağlı hücrenin yeniden kolay uyarılabilir hale gelmesi, klinikte 'Torsades de Pointes' adı verilen polimorfik ventriküler taşikardiye zemin hazırlar. Bu patolojiye yol açan hücresel iyon kanalı mutasyonu aşağıdakilerden hangisini doğrudan etkiler?
Doğru Şık (E): Voltaj bağımlı potasyum kanalları
Açıklama: QT aralığı miyokard aksiyon potansiyeli süresine eşittir. Aksiyon potansiyelinin Faz 3'ünü (repolarizasyon) hücre dışına potasyum (K+) çıkışı sağlar. Uzun QT sendromunda potasyum kanallarındaki genetik mutasyonlar nedeniyle repolarizasyon çok yavaşlar. Bu uzama periyodunda hücrenin erken uyarılması 'early afterdepolarization' mekanizmasıyla ölümcül aritmileri (Torsades de Pointes) tetikler.

**Soru 2 (ID: 5a17e3bd-4a42-4204-b0d4-5a8ce371e135)**
Soru Kökü: Bayılma atakları ile hastaneye başvuran genç bir hastanın genetik analizinde voltaj bağımlı potasyum kanallarında mutasyon saptanmıştır. EKG'de ventriküler aksiyon potansiyelinin faz 3 evresinin (repolarizasyon) yavaşlamasına bağlı uzamış bir aralık dikkati çekmiştir. Bu duruma bağlı olarak hastada Torsades de Pointes adı verilen ölümcül aritmi gelişme riski yüksektir. Hastanın EKG'sinde hangi mesafenin uzamış olması beklenir?
Doğru Şık (A): QT aralığı
Açıklama: Uzun QT sendromu, potasyum kanallarındaki mutasyon nedeniyle repolarizasyonun (Faz 3) uzadığı genetik bir durumdur. QT mesafesi, ventrikülün tüm depolarizasyon ve repolarizasyon sürecini yansıtır. Hücre dinlenim potansiyeline geç döndüğü için 'erken art-depolarizasyon'lar tetiklenir ve bu durum ventriküler taşikardiye (Torsades de Pointes) dönüşebilir.

---

### ÇİFT 43 (Benzerlik: 0.80)

**Soru 1 (ID: 236d634c-c198-420e-ac9a-270c0b489bb3)**
Soru Kökü: 45 yaşında erkek hastanın rutin kardiyolojik değerlendirmesinde standart bipolar ekstremite derivasyonları incelenmektedir. Sağ kolun negatif, sol bacağın pozitif elektrot olarak bağlandığı ve kalbin elektriksel eksenini belirlemede sıkça kullanılan derivasyon aşağıdakilerden hangisidir?
Doğru Şık (C): DII
Açıklama: Standart bipolar ekstremite derivasyonlarından DII, sağ kolun negatif (-) ve sol bacağın pozitif (+) elektrot olarak kullanıldığı derivasyondur. Normal elektriksel eksenin +59 derece olması, kalbin ana depolarizasyon vektörünün en net DII derivasyonunda izlenmesini sağlar. aVF sol bacağı kullanmasına rağmen bipolar değil, unipolar bir derivasyondur.

**Soru 2 (ID: 693b5b10-3266-4799-919b-0638ad60b50d)**
Soru Kökü: EKG kaydında tek bir elektrotla potansiyel farkın kaydedildiği, elde edilen düşük voltajların %50 oranında amplifiye edildiği ve sol koldaki elektriksel potansiyeli spesifik olarak yansıtan derivasyon aşağıdakilerden hangisidir?
Doğru Şık (B): aVL
Açıklama: Unipolar ekstremite derivasyonları (aVR, aVL, aVF) tek bir elektrotla potansiyel farkı kaydeder ve voltajları cihaz tarafından amplifiye (a) edilir. 'L' harfi sol kolu (Left arm) temsil ettiği için sol koldaki potansiyeli aVL derivasyonu kaydeder. Bipolar derivasyonlar (DI, DII, DIII) ise iki elektrot arasındaki farkı ölçtüğü için bu gruba dahil değildir.

---

### ÇİFT 44 (Benzerlik: 0.80)

**Soru 1 (ID: 251fbb7c-7f69-447d-a9d2-4a9584a259e0)**
Soru Kökü: Ailesel bayılma nöbetleri araştırılan genç hastaya 'Uzun QT Sendromu' tanısı konulmuştur. Bu hastalarda repolarizasyon fazının (Faz 3) uzamasına bağlı hücrenin yeniden kolay uyarılabilir hale gelmesi, klinikte 'Torsades de Pointes' adı verilen polimorfik ventriküler taşikardiye zemin hazırlar. Bu patolojiye yol açan hücresel iyon kanalı mutasyonu aşağıdakilerden hangisini doğrudan etkiler?
Doğru Şık (E): Voltaj bağımlı potasyum kanalları
Açıklama: QT aralığı miyokard aksiyon potansiyeli süresine eşittir. Aksiyon potansiyelinin Faz 3'ünü (repolarizasyon) hücre dışına potasyum (K+) çıkışı sağlar. Uzun QT sendromunda potasyum kanallarındaki genetik mutasyonlar nedeniyle repolarizasyon çok yavaşlar. Bu uzama periyodunda hücrenin erken uyarılması 'early afterdepolarization' mekanizmasıyla ölümcül aritmileri (Torsades de Pointes) tetikler.

**Soru 2 (ID: 930fdf6d-4744-488d-9a9a-bf007dcb5d23)**
Soru Kökü: 22 yaşında kadın hasta, aşırı korku yaşadığı bir anın ardından fenalaşarak acile getiriliyor. EKG'sinde QT intervalinin 0.55 saniye (uzamış) olduğu ve polimorfik ventriküler taşikardi (Torsades de Pointes) atakları geçirdiği saptanıyor. Bu hastada aritmiyi tetikleyen hücresel aksiyon potansiyeli mekanizması ve ilgili faz uzaması aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (C): Faz 3 potasyum çıkışında defekt – Erken (early) after-depolarizasyon
Açıklama: Uzun QT sendromlu hastalarda sıklıkla potasyum kanallarındaki mutasyonlar nedeniyle Faz 3 repolarizasyon evresi uzar. Hücrenin dinlenim potansiyeline dönmesi geciktiği için repolarizasyon tamamlanmadan yeniden uyarılma meydana gelir; buna 'erken after-depolarizasyon (early after depolarization)' denir. Bu hücresel sapma klinik olarak Torsades de Pointes aritmisini doğurur.

---

### ÇİFT 45 (Benzerlik: 0.80)

**Soru 1 (ID: 92d0a172-b69a-4b01-ad22-5774e79ed3d9)**
Soru Kökü: Yetmiş yaşında erkek hasta halsizlik ve çarpıntı şikayetiyle başvuruyor. EKG incelemesinde P dalgası ile QRS kompleksinin başlangıcı arasındaki sürenin uzadığı ve 0.20 saniyenin üzerinde sabit kaldığı görülüyor. Bu EKG bulgusu aşağıdakilerden hangisinin doğrudan bir göstergesidir?
Doğru Şık (D): Atriyumdan başlayan elektriksel iletinin AV noddan geçerken anormal gecikmesi
Açıklama: PR aralığı, atriyumların depolarizasyonundan ventrikül depolarizasyonuna kadar geçen süredir ve en fazla AV noddaki iletim hızını yansıtır. Normal süresi 0.12 ile 0.20 saniye arasındadır. Bu sürenin 0.20 saniyeyi aşması, AV nodda ileti gecikmesi olduğunu gösterir ve Birinci Derece AV Blok olarak tanımlanır. İskemi ST segmentini, repolarizasyon bozuklukları ise T dalgası ve QT'yi etkiler.

**Soru 2 (ID: b6c7ec50-d341-4708-81bc-01ae86d4c33f)**
Soru Kökü: Kırk beş yaşında erkek hastanın rutin EKG değerlendirmesinde, P dalgasının başlangıcı ile QRS kompleksinin başlangıcı arasındaki sürenin (PR aralığı) 0.24 saniye olduğu ancak her P dalgasını bir QRS kompleksinin takip ettiği saptanmıştır. Bu bulgu aşağıdaki durumlardan hangisi ile en uyumludur?
Doğru Şık (B): Birinci derece AV blok
Açıklama: Normal PR aralığı 0.12 ile 0.20 saniye arasındadır; bu sürenin uzaması ve her P dalgasının bir QRS üretmesi I. Derece AV bloğun karakteristik özelliğidir. Mobitz tip I'de PR giderek uzar ve QRS düşer, Mobitz tip II'de ise PR sabittir ancak aniden QRS düşer. Tam blokta ise atriyum ve ventrikül birbirinden tamamen bağımsız çalışır.

---

### ÇİFT 46 (Benzerlik: 0.80)

**Soru 1 (ID: 2255139c-2db9-4714-bd66-822ecc887ce9)**
Soru Kökü: Hipovolemi veya hipotansiyon durumunda adrenal korteksten salınan aldosteron hormonunun, kan basıncını yükseltici fizyolojik etkisini hücre düzeyinde sağlayan spesifik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Esas hücrelerde protein sentezi yoluyla epiteliyal sodyum kanallarını (ENaC) artırmak
Açıklama: Aldosteron bir steroid hormonudur ve etkisini böbreğin distal tübül ikinci yarısı ile toplayıcı kanallarındaki esas (principal) hücrelerde çekirdek transkripsiyonu ile yeni protein sentezleyerek gösterir. Bu proteinler epiteliyal sodyum kanalları (ENaC) olup, sodyum ve su reabsorbsiyonunu yavaş ama kalıcı şekilde artırarak kardiyak debiyi destekler.

**Soru 2 (ID: ef7d9c08-5ca3-43bb-9e3c-6b5ba14fb108)**
Soru Kökü: Kan basıncının hormonal yolla uzun süreli düzenlenmesinde görev alan aldosteronun böbrekler üzerindeki birincil etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Distal tübülün ikinci kısmındaki hücrelerde ENaC sentezini artırmak
Açıklama: Aldosteron böbreğin distal tübül ikinci yarısında ve toplayıcı kanallardaki esas hücrelerde protein sentezi yoluyla endotelyal sodyum kanallarının (ENaC) sayısını artırır. Bu etki genomik mekanizmayla gerçekleştiği için yavaştır ve sodyum ile suyun geri emilimini artırarak kan hacmini destekler. V2 reseptörleri üzerinden etki eden hormon ADH'dir.

---

### ÇİFT 47 (Benzerlik: 0.80)

**Soru 1 (ID: 42c3cc04-db6e-4372-bcf9-d11b69546f0c)**
Soru Kökü: Trafik kazası sonrası intrakraniyal basıncının (KİBAS) hızla arttığı ve buna bağlı olarak serebral iskemi geliştiği izlenen bir hastada, beyin sapındaki vazomotor merkezin uyarılmasıyla muazzam bir sempatik deşarj başlar. Serebral perfüzyonu korumaya yönelik olarak gelişen 'Cushing triadı'nda aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Taşikardi atakları
Açıklama: Cushing triadı; kafatası içindeki basıncın artışı (KİBAS), buna beyin kan akımını sağlamak için sistemik olarak yanıt veren şiddetli hipertansiyon ve bu kan basıncı yüksekliğinin baroreseptörleri uyarmasıyla gelişen refleks bradikardi üçlüsünden oluşur. İskemik MSS tepkisi kan basıncını ne pahasına olursa olsun artırırken, refleks yay vazovagal aktiviteyle kalbi yavaşlatır; bu nedenle taşikardi beklenmez.

**Soru 2 (ID: 7fcfc7da-9d7f-4edc-aae4-a9669c9833a8)**
Soru Kökü: Ağır kafa travması geçiren bir hastada kafa içi basıncının (KİBAS) şiddetle artmasına bağlı olarak, beyin iskemisi gelişmesini engellemek için vazomotor merkezin tetiklediği spesifik otonom refleks üçlemesi olan 'Cushing Triadı'nın kardiyovasküler yansımaları aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (A): Hipertansiyon + Bradikardi
Açıklama: Kafa içi basınç arttığında beyin dokusu baskı altında kalır ve iskemik yanıt başlar. Merkez (NTS/vazomotor alan), beyni perfüze edebilmek için sempatik deşarjı maksimuma çıkararak şiddetli sistemik Hipertansiyon yaratır. Yükselen kan basıncı aort/karotid baroreseptörleri hızla uyarır ve vagal refleks üzerinden Bradikardi gelişir. Bu birbirine zıt gibi görünen HT+Bradikardi kliniğine solunum düzensizliği de eklenince Cushing triadı oluşur.

---

### ÇİFT 48 (Benzerlik: 0.80)

**Soru 1 (ID: 9499befd-696d-47f6-b1b6-c01c05760685)**
Soru Kökü: Hipertansiyon tedavisi için Anjiyotensin Dönüştürücü Enzim (ACE) inhibitörü (örn: Enalapril) kullanan hastalarda, ilacın bırakılmasına neden olabilen inatçı kuru öksürük yan etkisinin farmakolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Kininaz II enzimi inhibisyonuna bağlı bradikinin yıkımının azalması
Açıklama: ACE enzimi aynı zamanda 'kininaz II' olarak bilinir ve vazodilatatör/inflamatuar bir peptid olan bradikinini parçalayarak etkisizleştirir. ACE inhibitörleri kullanıldığında bradikinin yıkılamaz ve özellikle akciğerlerde birikerek lokal inflamasyon, bronkospazm ve inatçı kuru öksürük gibi yan etkilere neden olur. Bu durum, ilacın Angiotensin II oluşumunu bloke etme ana etkisinden bağımsız bir sonuçtur.

**Soru 2 (ID: ed0e1d30-32a4-45e1-909f-626a1c33000a)**
Soru Kökü: Hipertansiyon tedavisi için ACE (Anjiyotensin Dönüştürücü Enzim) inhibitörü grubundan kaptopril başlanan bir hasta, kan basıncı düşmesine rağmen 2 hafta sonra inatçı ve kuru bir öksürük şikayetiyle polikliniğe başvuruyor. Bu yan etkinin hücresel temelini oluşturan olay, ACE enziminin inhibisyonu sonucu akciğer kapiller endotelinde aşağıda verilen hangi molekülün yıkılamayıp birikmesidir?
Doğru Şık (C): Bradikinin
Açıklama: Akciğer kaynaklı ACE (Anjiotensin konverting enzim) sadece Anjiyotensin I'i, Anjiyotensin II'ye çevirmekle kalmaz; aynı zamanda 'kininaz II' olarak da bilinir ve vazodilatatör/inflamatuar bir peptid olan bradikinini yıkar. Kaptopril gibi ACE inhibitörleri enzimi bloke edince, akciğerde bradikinin yıkılamaz ve lokal birikim yaparak hava yollarını irrite eder, bu da tipik kuru öksürük yan etkisini oluşturur.

---

### ÇİFT 49 (Benzerlik: 0.79)

**Soru 1 (ID: e64044a4-c4f9-4330-b9a4-dbd92a7ef8a5)**
Soru Kökü: Adrenal medulladan kana salınan epinefrinin (adrenalin), iskelet kası damar yatağında vazodilatasyon oluşturarak bölgesel kan akımını artırması ve eş zamanlı olarak karaciğer ile kasta glikojenolizi stimüle etmesi aşağıdaki reseptörlerden hangisinin aktivasyonu ile oluşur?
Doğru Şık (C): Beta-2 adrenerjik
Açıklama: Epinefrin Beta-2 reseptörlerine yüksek afinite gösterir; iskelet kası damarlarında ve karaciğerde bu reseptörleri aktive ederek cAMP artışına, dolayısıyla damar düz kasında gevşemeye ve hücresel glikojenolize neden olur. Alfa-1 reseptörleri sistemik vazokonstriksiyondan, Beta-1 ise kalp performansını artırmaktan sorumludur. Beta-2'nin bu selektif etkisi 'kaç ya da savaş' yanıtında hayati kasların beslenmesini sağlar.

**Soru 2 (ID: e90fe3e3-d062-4bb2-983c-c33fa91db76e)**
Soru Kökü: Egzersiz sırasında sempatik sinir sistemi hem kalpte hem de damarlarda yaygın değişiklikler yapar. Adrenal medulladan salınan epinefrinin (adrenalin), norepinefrinden farklı olarak iskelet kası ve karaciğer yatağına giden damarlarda spesifik vazodilatasyon yapmasını ve kan akımını artırmasını sağlayan reseptör alt tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Beta-2 adrenerjik reseptör
Açıklama: Norepinefrin güçlü Alfa-1 etkisi ile sistemik damarlarda vazokonstriksiyon yapar. Ancak dolaşımdaki epinefrinin (adrenalin) iskelet kası ve karaciğerdeki damarlarda yer alan Beta-2 reseptörlere affinitesi çok yüksektir ve bu bağlanma bölgesel vazodilatasyon oluşturarak egzersiz halindeki kasa kan akımını maksimize eder. Kalpteki inotropik etki ise Beta-1 üzerinden yürür.

---

### ÇİFT 50 (Benzerlik: 0.79)

**Soru 1 (ID: 99d8cc18-89bf-4ed6-9ed2-259a99309b70)**
Soru Kökü: Kırk yaşında erkek hastanın EKG'sinde atriyumların düzenli ve senkronize bir şekilde kasıldığı izlenmektedir. Kalp kası hücrelerinde elektriksel uyarının bir hücreden diğerine dirençsiz ve son derece hızlı geçerek miyokardın bir sinsityum gibi aynı anda kasılmasını sağlayan hücresel bağlantı türü aşağıdakilerden hangisidir?
Doğru Şık (A): Gap junction
Açıklama: Gap junctionlar (oluklu bağlantılar), interkale disklerin içinde yer alan ve iyonların hücreler arası doğrudan geçişine izin veren düşük dirençli elektriksel kanallardır. Bu yapı kalbin tüm hücrelerinin aynı anda (sinsityal) uyarılıp kasılmasını sağlar. Desmozomlar ise sadece mekanik tutunmadan sorumludur.

**Soru 2 (ID: bddc73b3-afa4-407e-8c3f-f818fd671ad7)**
Soru Kökü: Kalp kası dokusunda elektriksel uyarının bir miyokard hücresinden diğerine kesintisiz ve çok hızlı bir şekilde geçerek tüm ventrikülün fonksiyonel bir sinsityum olarak kasılmasını sağlayan, interkale diskler içerisindeki yapı aşağıdakilerden hangisidir?
Doğru Şık (C): Gap junction (Oluklu bağlantı)
Açıklama: Gap junctionlar, komşu kalp kası hücrelerini elektriksel ve kimyasal olarak birbirine bağlayan, iyonların hücreler arası serbest geçişini sağlayarak kalbin tek bir ünite halinde (sinsityal) kasılmasına olanak tanıyan yapılardır. Desmozomlar hücrelerin mekanik olarak birbirinden kopmasını engeller ancak elektriksel akım iletmez. Bu iyonik kapılar olmadan kalbin ritmik uyarım dalgası yayılamaz.

---

### ÇİFT 51 (Benzerlik: 0.79)

**Soru 1 (ID: 2797b037-98eb-4ecc-8032-d3d5cad24efa)**
Soru Kökü: Otuz yaşında erkek hasta, motosiklet kazası sonrası masif iç kanama şüphesiyle acil servise getiriliyor. Muayenede cilt soluk ve terli; kan basıncı 70/40 mmHg, nabız 125/dk olarak saptanıyor. Hipovolemi ve hipotansiyon tablosunda tetiklenen baroreseptör refleksinin efferent mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Sempatik tonus artırılır, total periferik direnç ve kalp debisi yükseltilir.
Açıklama: Akut kan kaybı ve hipotansiyon durumunda baroreseptörlerin gerilimi azalır, NTS'ye giden inhibitör sinyaller kesilir. Bu durumda vazokonstriktör alan (C1) serbest kalarak güçlü sempatik deşarj başlatır. Çaplar daralır (direnç artar), venöz dönüş artar ve kalp hızı yükselerek kan basıncı kompanse edilmeye çalışılır. Refleks taşikardinin nedeni budur.

**Soru 2 (ID: 77e612ea-76c8-4372-a331-c16f8c13679c)**
Soru Kökü: Trafik kazası sonrası aşırı kanama tablosuyla (hipovolemi) acil servise getirilen bir hastanın tansiyonu 80/50 mmHg olarak ölçülüyor. Bu akut durumda baroreseptör refleksi devresi nasıl çalışır?
Doğru Şık (C): Karotid sinüs gerimi azalır -> NTS'ye giden sinyal azalır -> Vazokonstriktör alan aktifleşir.
Açıklama: Akut kan kaybında kan basıncı düştüğünde baroreseptörlerdeki gerim azalır ve buradan beyin sapındaki NTS'ye giden inhibitör sinyal sayısı düşer. NTS'den gelen sinyallerin azalması, vazokonstriktör alanı üzerindeki freni kaldırır (aktifleşir) ve sempatik deşarj artar. Sonuçta vazokonstriksiyon, taşikardi ve venöz dönüşte artış meydana gelerek tansiyon toparlanır.

---

### ÇİFT 52 (Benzerlik: 0.79)

**Soru 1 (ID: 140f1471-0885-490b-babc-292936c47dfe)**
Soru Kökü: Kalp kası hücrelerinde sarkoplazmik retikulum (SR) kalsiyum pompasının (SERCA) aktivitesini artırarak kasın daha kısa sürede gevşemesini sağlayan protein kinaz-A aracılı mekanizmanın hedef proteini aşağıdakilerden hangisidir?
Doğru Şık (A): Fosfolamban
Açıklama: Normalde defosforile fosfolamban SERCA'yı inhibe ederek yavaş çalıştırır; ancak protein kinaz-A ile fosforile edildiğinde bu inhibisyon kalkar ve SERCA hızlanarak kalsiyumu SR içine hızla pompalar, böylece gevşeme süresi kısalır. Ryanodin reseptörleri ise kalsiyumun SR'den sitoplazmaya salınımını sağlar, geri alımını değil. Fosfolambanın bu çift yönlü regülasyonu kalp atım hızı arttığında diyastol süresinin optimize edilmesini sağlar.

**Soru 2 (ID: 95871c12-020b-4640-8f3e-0a9af2316391)**
Soru Kökü: Efor testi sırasında sempatik sinir sistemi aktive olan hastada kalp atım hızı artmasına rağmen diyastol süresi kısalır, ancak ventrikül gevşemesi hızlanarak kalbin doluşu telafi edilir. Protein kinaz-A aracılığıyla fosforile edilerek SERCA'nın daha hızlı çalışmasına ve miyokardın çok kısa sürede gevşemesine olanak sağlayan protein aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfolamban
Açıklama: Fosfolamban (PLB), defosforile haldeyken SERCA pompasını inhibe eden bir regülatör proteindir. Sempatik uyarım sonucu Beta-1 reseptörleri üzerinden PKA aktive olur ve fosfolambanı fosforile eder. Bu durum inhibisyonu kaldırır, SERCA hızlanır ve kalsiyum hızla SR'ye depolanarak miyokardın gevşemesi (lusitropik etki) hızlandırılır.

---

### ÇİFT 53 (Benzerlik: 0.79)

**Soru 1 (ID: 3f398d3d-3fe3-42d0-9a52-53586762100e)**
Soru Kökü: Hücre zarındaki Na+-K+ ATPaz pompasını inhibe ederek etki gösteren, farmakolojik olarak digital türevlerine benzeyen ve endojen olarak surrenal bezden salgılanan molekül aşağıdakilerden hangisidir?
Doğru Şık (A): Ouabain
Açıklama: Ouabain, surrenal bezden salınan, steroid yapılı ve digitalis glikozidlerine benzer şekilde Na+-K+ ATPaz pompasını inhibe eden endojen bir moleküldür. ANP ise tam tersine natriürez yapan ve vazodilatasyon sağlayan kalpten salınan bir peptiddir. Ouabain pompa inhibisyonu ile hücre içi kalsiyumu artırır.

**Soru 2 (ID: dc4dca59-ae3d-4858-b04d-ae8e88b0a31e)**
Soru Kökü: Surrenal bezden salınan, steroid yapılı olan ve kalp hücre membranındaki Na+-K+ ATPaz pompasını doğrudan inhibe ederek intraselüler kalsiyum miktarının artışına yol açan endojen kardiyak glikozid benzeri molekül aşağıdakilerden hangisidir?
Doğru Şık (A): Ouabain
Açıklama: Ouabain, endojen bir digital benzeri faktördür ve Na+-K+ ATPaz pompasını bloke ederek hücre içi sodyumun artmasına, bu da Na+-Ca+2 değiştiricisinin (antiport) sekonder inhibisyonuna yol açarak miyokardda pozitif inotropik etki sağlar. Ürotensin-II bilinen en güçlü vazokonstrüktör proteindir, ouabain gibi iyon pompası inhibitörü değildir. Bu mekanizma dijital tedavisinin de temel dayanağıdır.

---

### ÇİFT 54 (Benzerlik: 0.79)

**Soru 1 (ID: 2255139c-2db9-4714-bd66-822ecc887ce9)**
Soru Kökü: Hipovolemi veya hipotansiyon durumunda adrenal korteksten salınan aldosteron hormonunun, kan basıncını yükseltici fizyolojik etkisini hücre düzeyinde sağlayan spesifik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): Esas hücrelerde protein sentezi yoluyla epiteliyal sodyum kanallarını (ENaC) artırmak
Açıklama: Aldosteron bir steroid hormonudur ve etkisini böbreğin distal tübül ikinci yarısı ile toplayıcı kanallarındaki esas (principal) hücrelerde çekirdek transkripsiyonu ile yeni protein sentezleyerek gösterir. Bu proteinler epiteliyal sodyum kanalları (ENaC) olup, sodyum ve su reabsorbsiyonunu yavaş ama kalıcı şekilde artırarak kardiyak debiyi destekler.

**Soru 2 (ID: d84da784-5f89-4ecf-8196-b3b2c1b16981)**
Soru Kökü: Renin-Anjiyotensin-Aldosteron (RAAS) sistemi üzerinden salgılanan Aldosteron hormonu, böbreklerden sodyum ve su geri emilimini artırarak uzun süreli kan basıncı regülasyonunu sağlar. Aldosteronun sodyum reabsorbsiyonunu artırıcı bu yavaş gelişen hücresel etkisi, distal tübülün ikinci kısmındaki esas hücrelerde hangi spesifik yapının sentezini artırarak gerçekleşir?
Doğru Şık (E): Endotelyal Sodyum Kanalı (ENaC)
Açıklama: Aldosteron steroit yapılı bir hormondur ve distal tübül sonu ile toplayıcı kanallardaki esas hücrelerin çekirdeğinde yeni protein sentezi (transkripsiyon/translasyon) uyarır. Bu sayede lüminal membrandaki 'Endotelyal Sodyum Kanal' (ENaC) sayısını artırarak Na+ emilimini kronik olarak güçlendirir. Bu protein sentezi bağımlılığı, aldosteron etkisinin anjiyotensin'in direkt damar kasıcı etkisinden daha yavaş oturmasına neden olur.

---

### ÇİFT 55 (Benzerlik: 0.79)

**Soru 1 (ID: b2e212b2-6b39-4a63-8b2c-e4a8f7b3c469)**
Soru Kökü: 60 yaşında hipertansiyon hastası, yeni başlanan antihipertansif tedavi sonrası inatçı kuru öksürük şikayetiyle başvuruyor. Bu hastanın tedavisinde kullanılan ilacın mekanizması göz önüne alındığında, öksürüğe neden olan inflamatuar maddenin yıkımını engelleyen enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Kininaz II
Açıklama: Anjiyotensin dönüştürücü enzim (ACE) inhibitörleri (kaptopril vb.), aynı zamanda Kininaz II enzimini bloke ederek bradikinin yıkımını engellerler. Dokularda, özellikle solunum yollarında biriken bradikinin inflamatuar bir medyatör olarak inatçı kuru öksürüğe neden olur. Bu spesifik yan etki ACE inhibitörlerinin ayırıcı özelliğidir.

**Soru 2 (ID: ed0e1d30-32a4-45e1-909f-626a1c33000a)**
Soru Kökü: Hipertansiyon tedavisi için ACE (Anjiyotensin Dönüştürücü Enzim) inhibitörü grubundan kaptopril başlanan bir hasta, kan basıncı düşmesine rağmen 2 hafta sonra inatçı ve kuru bir öksürük şikayetiyle polikliniğe başvuruyor. Bu yan etkinin hücresel temelini oluşturan olay, ACE enziminin inhibisyonu sonucu akciğer kapiller endotelinde aşağıda verilen hangi molekülün yıkılamayıp birikmesidir?
Doğru Şık (C): Bradikinin
Açıklama: Akciğer kaynaklı ACE (Anjiotensin konverting enzim) sadece Anjiyotensin I'i, Anjiyotensin II'ye çevirmekle kalmaz; aynı zamanda 'kininaz II' olarak da bilinir ve vazodilatatör/inflamatuar bir peptid olan bradikinini yıkar. Kaptopril gibi ACE inhibitörleri enzimi bloke edince, akciğerde bradikinin yıkılamaz ve lokal birikim yaparak hava yollarını irrite eder, bu da tipik kuru öksürük yan etkisini oluşturur.

---

### ÇİFT 56 (Benzerlik: 0.79)

**Soru 1 (ID: 3f8709ef-910a-4447-95c7-0749959fddd3)**
Soru Kökü: Poiseuille-Hagen eşitliği dikkate alındığında, bir damar içerisindeki kan debisini (akım miktarını) **ters** yönde etkileyen (azaltan) faktörler aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Kan viskozitesi ve damar uzunluğu
Açıklama: Formülde debi = (π × ΔP × r^4) / (8 × viskozite × uzunluk) olarak ifade edilir. Dolayısıyla paydada yer alan kanın viskozitesi (koyuluğu) ve damarın uzunluğu arttıkça sürtünme direnci artar, bu da kan debisinin azalmasına neden olur. Yarıçap ve basınç farkı ise debi ile doğru orantılıdır.

**Soru 2 (ID: 99006c4a-c8c9-4969-af8d-cb9c5a26f21f)**
Soru Kökü: Kan debisinin regülasyonunu açıklayan Poiseuille-Hagen eşitliğine göre, aşağıdaki parametre çiftlerinden hangisinin artışı kan akımını ters yönde etkileyerek debiyi azaltır?
Doğru Şık (D): Kan viskozitesi ve Damar uzunluğu
Açıklama: Poiseuille-Hagen denkleminde kan debisi; kanın viskozitesi ve damarın uzunluğu ile ters orantılıdır (formülün paydasında yer alırlar). Basınç farkı ve damar yarıçapı ise doğrudan akımı artıran faktörlerdir. Hematokrit artışı viskoziteyi artırarak akımı zorlaştırır.

---

### ÇİFT 57 (Benzerlik: 0.79)

**Soru 1 (ID: 7dbc7fb3-ccce-4f7c-b391-4b3804b14ae4)**
Soru Kökü: 65 yaşında hipertansiyon hastası erkek, yeni başlanan bir ilaç sonrasında ortaya çıkan inatçı ve kuru öksürük şikayetiyle başvuruyor. İlacın anjiyotensin dönüştürücü enzimi (ACE) bloke ettiği biliniyor. Bu hastada öksürük yan etkisinin ortaya çıkmasına neden olan ve enzim blokajı nedeniyle solunum yollarında yıkılamayarak biriken inflamatuar madde aşağıdakilerden hangisidir?
Doğru Şık (E): Bradikinin
Açıklama: Anjiyotensin dönüştürücü enzim (ACE), aynı zamanda kininaz II olarak da adlandırılır ve dolaşımdaki bradikinini yıkan ana enzimdir. ACE inhibitörleri kullanıldığında bradikinin yıkımı engellenir ve dokularda (özellikle akciğer) biriken bu vazodilatatör/inflamatuar molekül kuru öksürük tablosuna yol açar. Histamin veya substans P birikimi ACE inhibisyonunun doğrudan primer mekanizması değildir.

**Soru 2 (ID: 9499befd-696d-47f6-b1b6-c01c05760685)**
Soru Kökü: Hipertansiyon tedavisi için Anjiyotensin Dönüştürücü Enzim (ACE) inhibitörü (örn: Enalapril) kullanan hastalarda, ilacın bırakılmasına neden olabilen inatçı kuru öksürük yan etkisinin farmakolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Kininaz II enzimi inhibisyonuna bağlı bradikinin yıkımının azalması
Açıklama: ACE enzimi aynı zamanda 'kininaz II' olarak bilinir ve vazodilatatör/inflamatuar bir peptid olan bradikinini parçalayarak etkisizleştirir. ACE inhibitörleri kullanıldığında bradikinin yıkılamaz ve özellikle akciğerlerde birikerek lokal inflamasyon, bronkospazm ve inatçı kuru öksürük gibi yan etkilere neden olur. Bu durum, ilacın Angiotensin II oluşumunu bloke etme ana etkisinden bağımsız bir sonuçtur.

---

### ÇİFT 58 (Benzerlik: 0.79)

**Soru 1 (ID: 1ae47ed7-727c-4930-a70e-2e20ca5c432e)**
Soru Kökü: Dolaşım sisteminde total periferik direnci belirleyen ve kapiller yatağa kan akımını düzenleyen asıl damar segmenti aşağıdakilerden hangisidir?
Doğru Şık (B): Arteriyoller
Açıklama: Arteriyoller, kalın bir düz kas tabakasına sahip oldukları için damar çapını en fazla değiştirebilen ve total periferik direnci belirleyen ana damarlardır. Büyük elastik arterler (Aort gibi) kanı yüksek basınçla iletmekten sorumludur, direnç oluşturmaktan değil. Kapillerler ise madde alışverişinin yapıldığı yerdir ve dirençleri düşüktür.

**Soru 2 (ID: dcef591c-b270-4d63-8c0f-01fd57d6a338)**
Soru Kökü: Kan dolaşımında basıncın sistemik arterlerden venöz sisteme aktarımı sırasında, düz kas lümen çapını değiştirerek total periferik direnci (TPR) tayin eden ve kan basıncı düşüşünün en keskin yaşandığı damar segmenti aşağıdakilerden hangisidir?
Doğru Şık (E): Arteriyoller
Açıklama: Dolaşım sisteminde dirence en büyük katkıyı sağlayan ve 'direnç damarları' olarak tanımlanan yapı arteriyollerdir. Otonom sinir sistemi uyarısıyla kalın dairesel düz kasları kasılarak kanın dokuya geçişine karşı ciddi bir mekanik bariyer oluştururlar. Direncin en yüksek olduğu bu bölgede kan basıncı büyük oranda düşer ve kapillerlere doku hasarı yaratmayacak güvenli bir akım ulaşır.

---

### ÇİFT 59 (Benzerlik: 0.79)

**Soru 1 (ID: 0272050a-7516-46c7-a510-822d59a8021c)**
Soru Kökü: Parasempatik (vagal) uyarıların kalp üzerindeki etkileriyle ilgili aşağıdaki ifadelerden hangisi **en az olasıdır**?
Doğru Şık (D): Ventrikül miyokardında doğrudan ve güçlü bir negatif inotropik etki yaratır.
Açıklama: Parasempatik uyarının atriyumlar, SA nod ve AV nod üzerinde belirgin inhibitör etkileri varken, ventriküller üzerinde vagal inervasyon çok zayıf olduğu için ventrikül kasılma gücü (inotropi) üzerindeki negatif etkisi yok denecek kadar sınırlıdır. Vagal tonus artışı potasyum kanallarını açar, membranı hiperpolarize eder ve AV düğümde iletimi geciktirerek PR mesafesini uzatır.

**Soru 2 (ID: b7210c54-668d-441e-9663-ff812bec68a2)**
Soru Kökü: Aşağıdakilerden hangisi kalbe otonom sinir sisteminin etkilerinden biri **değildir**?
Doğru Şık (C): Parasempatik uyarı, vagus siniri üzerinden asetilkolin salgılayarak ventrikül kasılma gücünü dramatik olarak azaltır.
Açıklama: Parasempatik (vagal) uyarının atriyumlar üzerinde inotropik baskılayıcı etkisi varken, ventriküller üzerinde vagal inervasyon çok zayıf olduğundan ventriküler kasılma gücünü (negatif inotropik etki) doğrudan ve güçlü bir şekilde etkilemez. Sempatik sistem hem atriyum hem ventriküllere güçlü inervasyon sağlar.

---

### ÇİFT 60 (Benzerlik: 0.79)

**Soru 1 (ID: 0293175e-b218-4a3f-99b2-843bad4558ba)**
Soru Kökü: Kan damarlarının histolojik yapısı incelendiğinde, en içte yer alan tunika intima tabakası sırasıyla hangi yapılardan oluşmaktadır?
Doğru Şık (A): Endotel, subendotel ve membrana elastika interna
Açıklama: Tunika intima kan damarlarının lümene bakan en iç tabakasıdır ve endotel, altındaki gevşek bağ dokusundan oluşan subendotel ile membrana elastika internadan meydana gelir. Tunika media dairesel düz kaslardan, tunika adventisiya ise vaza vazorum ve sinirleri içeren gevşek bağ dokusundan oluşur. Bu nedenle distraktörlerdeki kas ve vaza vazorum eşleşmeleri yanlıştır.

**Soru 2 (ID: 3b2d5859-d57b-479f-a127-13f41b59fec7)**
Soru Kökü: Kan damarlarının histolojik yapısında; kanla doğrudan temas eden endotel hücrelerini, altındaki gevşek bağ dokusunu ve kan akımına karşı bariyer oluşturan m. elastika interna tabakasını içeren yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Tunika intima
Açıklama: Tunika intima, damar lümenini döşeyen endotel, subendoteliyal gevşek bağ dokusu ve membrana elastika internadan oluşan en iç tabakadır. Öğrenciler tarafından sıkça karıştırılan tunika media ise damarın kasılmasını sağlayan dairesel düz kas ve elastik lamellerden meydana gelir, bu nedenle en güçlü çeldiricidir. Damarın kan ile molekül alışverişi yapan ve aterosklerozun başladığı asıl anatomik kapısı tunika intimadır.

---

### ÇİFT 61 (Benzerlik: 0.79)

**Soru 1 (ID: 251fbb7c-7f69-447d-a9d2-4a9584a259e0)**
Soru Kökü: Ailesel bayılma nöbetleri araştırılan genç hastaya 'Uzun QT Sendromu' tanısı konulmuştur. Bu hastalarda repolarizasyon fazının (Faz 3) uzamasına bağlı hücrenin yeniden kolay uyarılabilir hale gelmesi, klinikte 'Torsades de Pointes' adı verilen polimorfik ventriküler taşikardiye zemin hazırlar. Bu patolojiye yol açan hücresel iyon kanalı mutasyonu aşağıdakilerden hangisini doğrudan etkiler?
Doğru Şık (E): Voltaj bağımlı potasyum kanalları
Açıklama: QT aralığı miyokard aksiyon potansiyeli süresine eşittir. Aksiyon potansiyelinin Faz 3'ünü (repolarizasyon) hücre dışına potasyum (K+) çıkışı sağlar. Uzun QT sendromunda potasyum kanallarındaki genetik mutasyonlar nedeniyle repolarizasyon çok yavaşlar. Bu uzama periyodunda hücrenin erken uyarılması 'early afterdepolarization' mekanizmasıyla ölümcül aritmileri (Torsades de Pointes) tetikler.

**Soru 2 (ID: a88088e4-3582-4c0b-971e-7949d0265307)**
Soru Kökü: Senkop atakları geçiren yirmi yaşında kadın hastaya konjenital Uzun QT Sendromu tanısı konuluyor. Bu hastada letal bir aritmi olan Torsades de Pointes gelişiminin temel hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Faz 3 repolarizasyonunun uzaması ve erken art-depolarizasyonlar
Açıklama: Uzun QT sendromunda sıklıkla potasyum kanallarındaki mutasyon nedeniyle Faz 3 repolarizasyon evresi uzar. Hücre dinlenim zar potansiyeline yavaş döndüğü için, repolarizasyon tamamlanmadan yeni ve anormal sızıntılarla "erken art-depolarizasyonlar (early after-depolarisation)" tetiklenir, bu da Torsades de Pointes adı verilen ventriküler taşikardiye yol açar. Diğer şıklar bu aritminin primer patogenezini açıklamaz.

---

### ÇİFT 62 (Benzerlik: 0.79)

**Soru 1 (ID: 642aeed0-5588-43f8-837a-f7b629edc9eb)**
Soru Kökü: Böbrek perfüzyon basıncı azaldığında devreye giren Renin-Anjiyotensin-Aldosteron sisteminde, distal tübüldeki NaCl miktarını algılayarak jukstaglomerüler hücreleri uyaran kemo/osmoreseptör yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Maküla densa
Açıklama: Maküla densa, böbrek nefronunun distal tübülünde yer alan ve tübüler sıvıdaki NaCl konsantrasyonuna duyarlı özel bir osmoreseptör alandır. Kan basıncı düşüp GFR azaldığında distal tübüle ulaşan NaCl azalır; maküla densa bunu algılar ve afferent arteriyoldeki jukstaglomerüler hücrelerden renin salınımını tetikler.

**Soru 2 (ID: ce5ff3f0-dd92-4da1-ad4b-5767361fe116)**
Soru Kökü: 50 yaşında kadın hasta ağır dehidratasyon tablosuyla acil servise getiriliyor. Renal perfüzyon basıncındaki düşüşe bağlı olarak böbrek distal tübülüne ulaşan NaCl miktarının azaldığı görülüyor. Distal tübülde bu sodyum klorür azalmasını algılayarak aferent arteriyoldeki jukstaglomerüler hücreleri renin salgılaması için uyaran lokal osmoreseptör yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Maküla densa
Açıklama: Maküla densa, böbrekte distal tübülün başlangıcında yer alan ve tübül sıvısındaki sodyum klorür (NaCl) konsantrasyonuna duyarlı özel bir epitel hücresi grubudur. NaCl azaldığında maküla densa bu değişikliği algılar ve parakrin sinyallerle jukstaglomerüler hücrelerden renin salınımını tetikler. Prensipal hücreler ise daha distalde yer alıp aldosteron ve ADH yanıtından sorumludur.

---

### ÇİFT 63 (Benzerlik: 0.79)

**Soru 1 (ID: 36c888a1-1dcc-4cd6-b616-475993a3b23c)**
Soru Kökü: Altmış beş yaşında erkek hasta, genel halsizlik ve çarpıntı şikayetiyle acil servise başvuruyor. Fizik muayenesinde bradikardi saptanan hastanın laboratuvar incelemesinde serum potasyum düzeyi 7.2 mEq/L (Yüksek) bulunuyor. Bu hastanın EKG'sinde aşağıdaki bulgulardan hangisinin görülmesi **beklenmez**?
Doğru Şık (D): QT mesafesinde uzama
Açıklama: Hiperkalemide hücre dinlenim membran potansiyeli düşer (hipopolarizasyon) ve hücre repolarizasyonu kolaylaştığı için T dalgası sivrileşir, aksiyon potansiyelinin süresi ve dolayısıyla QT mesafesi kısalır. Ancak sodyum kanalları inaktive olduğu için depolarizasyon yavaşlar ve QRS genişler, yüksek dozlarda P dalgası kaybolur. QT mesafesinin uzaması hiperkalemi değil, hipokalsemi veya hipokalemi bulgusudur.

**Soru 2 (ID: a6c35de4-051b-4ff9-a760-783ee86a3afd)**
Soru Kökü: Elli yaşında hipertansiyon hastası, diüretik ilaç kullanımına bağlı halsizlik ile acile başvuruyor. Alınan kanda serum potasyum düzeyinin ileri derecede düşük (hipopotasemi) olduğu saptanıyor. Bu hastanın EKG'sinde, miyokard istirahat membran potansiyelinin -110 mV seviyelerine hiperpolarize olmasına bağlı olarak aşağıdaki bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): U dalgasının belirginleşmesi ve T dalgasının yassılaşıp negatifleşmesi
Açıklama: Hipopotasemide hücre dışı potasyum konsantrasyonu düştüğü için hücre istirahat potansiyeli çok daha negatif olur (-110 mV). Bu hiperpolarizasyon repolarizasyonun uzamasına ve zorlaşmasına yol açar, T dalgası yassılaşır veya negatifleşir. Papiller kasların uzun süren repolarizasyonunu yansıtan patolojik bir 'U dalgası' EKG'ye eklenir. Sivri T dalgaları ise hiperpotasemide hücrenin hipopolarize olmasının sonucudur.

---

### ÇİFT 64 (Benzerlik: 0.79)

**Soru 1 (ID: 080d86b8-2b07-470f-93d8-4e9242ab2309)**
Soru Kökü: Ekokardiyografi yapılan bir hastanın sol ventrikül end-diyastolik volümü 140 ml, end-sistolik volümü ise 70 ml olarak ölçülmüştür. Bu hastanın ejeksiyon fraksiyonu (EF) yüzde kaçtır?
Doğru Şık (C): 50
Açıklama: Ejeksiyon Fraksiyonu (EF) = Stroke Volüm (Atım Hacmi) / End-Diyastolik Volüm formülü ile hesaplanır. Atım hacmi = EDV - ESV (140 - 70 = 70 ml). EF = 70 / 140 = 0.50 yani %50'dir. Bu parametre sol ventrikül kasılma gücünün klinik olarak en sık kullanılan göstergesidir.

**Soru 2 (ID: 7547f140-f91f-4062-a7f0-aab9cb45435c)**
Soru Kökü: Altmış yaşında ilerleyici efor dispnesi ile başvuran hastaya yapılan ekokardiyografide atım hacmi (stroke volume) 30 ml, end-diyastolik hacmi ise 100 ml olarak ölçülmüştür. Bu hastanın kalbinin pompalama performansını gösteren ejeksiyon fraksiyonu yüzde kaçtır?
Doğru Şık (A): %30
Açıklama: Ejeksiyon fraksiyonu (EF), atım hacminin (stroke volüm) end-diyastolik volüme (EDV) oranıdır ve kalbin sistolik performansının göstergesidir. Formülü EF = SV / EDV şeklindedir. Verilen rakamlara göre 30 ml / 100 ml = 0.30 yani %30 bulunur. Sağlıklı erişkinlerde bu oran %55-60 arasındadır, %30 belirgin bir sistolik kalp yetmezliğini gösterir.

---

### ÇİFT 65 (Benzerlik: 0.79)

**Soru 1 (ID: 67f71a1a-87c1-423e-84aa-cbd1bb8cc7eb)**
Soru Kökü: 40 yaşında total tiroidektomi sonrası paratiroid bezleri hasar gören kadın hastada tetani kasılmaları gözleniyor. Bu hastanın elektrokardiyografisinde (EKG) aşağıdaki bulgulardan hangisinin ortaya çıkması en olasıdır?
Doğru Şık (D): ST segmentinin ve QT süresinin uzaması
Açıklama: Hipokalsemide hücre dışından miyokard hücresine kalsiyum girişi yavaşlar, bu da aksiyon potansiyeli eğrisindeki plato fazının (Faz 2) uzamasına neden olur. Plato fazının uzaması EKG'ye ST segmentinin ve dolayısıyla toplam aksiyon potansiyeli süresini gösteren QT aralığının uzaması olarak yansır. Hiperkalsemide ise tam tersine kalsiyum girişi hızlanır ve QT kısalır.

**Soru 2 (ID: 9f0cbd82-56e0-4ca5-870b-6fbce6753dc8)**
Soru Kökü: Kırk yaşında tiroid cerrahisi (total tiroidektomi) geçiren bir kadın hasta, ameliyatın ertesi günü el ve ayaklarında karıncalanma ile kas krampları tarifliyor. Hastanın çekilen EKG'sinde aksiyon potansiyelindeki plato fazının uzamasına bağlı bir anormallik izleniyor. Bu hastanın klinik tablosu ve EKG bulgusu aşağıdakilerden hangisiyle en uyumludur?
Doğru Şık (A): Hipokalsemiye bağlı QT mesafesinin uzaması
Açıklama: Paratiroid bezlerinin de etkilendiği cerrahi sonrası hipokalsemi gelişir. Miyokard aksiyon potansiyelinde plato fazını (Faz 2) kalsiyum girişi oluşturur. Hipokalsemide kalsiyum girişi yavaşlar, plato uzar ve bu da EKG'de QT mesafesinin uzamasıyla kendini gösterir. Hiperkalsemi durumunda ise kalsiyum girişi hızlandığından QT kısalır.

---

### ÇİFT 66 (Benzerlik: 0.79)

**Soru 1 (ID: 6db6fbab-b009-4305-a6ca-fa3218516ffc)**
Soru Kökü: 28 yaşındaki asemptomatik bir erkek sporcunun rutin sağlık taramasında çekilen EKG'sinde her P dalgasını takiben düzenli bir QRS kompleksi izlenmekte, ancak PR intervalinin 0.26 saniye olarak uzadığı saptanmaktadır. Bu hastadaki elektrofizyolojik durum en doğru şekilde nasıl tanımlanır?
Doğru Şık (C): Birinci derece AV blok
Açıklama: PR intervalinin normal üst sınırı olan 0.20 saniyenin üzerinde uzaması (>0.20 sn) ve bu uzamanın her atımda sabit kalarak hiçbir QRS kompleksinin düşmemesi (kaybolmaması) birinci derece AV bloğun karakteristik özelliğidir. Sporcularda artmış vagal tonusa bağlı olarak klinik önemi olmayan fizyolojik bir bulgu olarak karşımıza çıkabilir.

**Soru 2 (ID: b6c7ec50-d341-4708-81bc-01ae86d4c33f)**
Soru Kökü: Kırk beş yaşında erkek hastanın rutin EKG değerlendirmesinde, P dalgasının başlangıcı ile QRS kompleksinin başlangıcı arasındaki sürenin (PR aralığı) 0.24 saniye olduğu ancak her P dalgasını bir QRS kompleksinin takip ettiği saptanmıştır. Bu bulgu aşağıdaki durumlardan hangisi ile en uyumludur?
Doğru Şık (B): Birinci derece AV blok
Açıklama: Normal PR aralığı 0.12 ile 0.20 saniye arasındadır; bu sürenin uzaması ve her P dalgasının bir QRS üretmesi I. Derece AV bloğun karakteristik özelliğidir. Mobitz tip I'de PR giderek uzar ve QRS düşer, Mobitz tip II'de ise PR sabittir ancak aniden QRS düşer. Tam blokta ise atriyum ve ventrikül birbirinden tamamen bağımsız çalışır.

---

### ÇİFT 67 (Benzerlik: 0.79)

**Soru 1 (ID: 1127b253-2e17-4669-80fc-ebbba482b07f)**
Soru Kökü: Venöz sistemin, arteryel sisteme kıyasla vücuttaki kanın büyük bölümünü (yaklaşık %64) depolayabilen bir hacim rezervuarı olarak işlev görmesinde 'vasküler kompliyans' farkı rol oynar. Venlerin kompliyansının arterlerden yaklaşık 24 kat fazla olmasının fizyolojik matematiksel arka planı aşağıdakilerden hangisidir?
Doğru Şık (D): Venlerin esneyebilirliğinin arterlere göre 8 kat, istirahat kan hacimlerinin de 3 kat fazla olması
Açıklama: Vasküler kompliyans = Esneyebilirlik x Hacim formülü ile hesaplanır. Venlerin duvar yapısı gereği esneme yeteneği (distensibility) arterlerden 8 kat daha fazladır. Aynı zamanda normal şartlarda içerdikleri kesit hacmi arterlerin yaklaşık 3 katıdır. Bu iki çarpanın birleşimi (8 x 3) venlerin toplam kompliyansının arterlere göre 24 kat devasa bir kapasiteye ulaşmasını sağlar.

**Soru 2 (ID: 81e3ebfd-178b-4514-b6c3-aec99d795202)**
Soru Kökü: Vasküler kompliyans (esneyebilirlik ve depolama kapasitesi) değerlendirildiğinde, venöz sistemin kompliyansının arteriyel sisteme oranı yaklaşık olarak ne kadardır?
Doğru Şık (B): 24 kat fazladır
Açıklama: Kompliyans, damarın esneyebilirliği ile taşıdığı hacmin çarpımıdır. Arterlere göre venlerin esneyebilirliği (distensibility) 8 kat, çapları (hacmi) ise yaklaşık 3 kat fazladır. Bu faktörlerin çarpımı (8x3) sonucunda venlerin toplam kompliyansı arterlerden yaklaşık 24 kat daha yüksektir.

---

### ÇİFT 68 (Benzerlik: 0.78)

**Soru 1 (ID: 2d292342-6866-48db-80b4-bfc44ff170f5)**
Soru Kökü: 35 yaşında tiroid cerrahisi geçirmiş kadın hasta, ağız çevresinde uyuşma ve kas krampları şikayetiyle başvuruyor. Çekilen EKG'sinde QT süresinin belirgin şekilde uzadığı ve ST segmentinin normalden daha uzun bir izoelektrik hat çizdiği görülüyor. Bu hastadaki EKG bulgusuna neden olan asıl elektrolit dengesizliği ve miyokard aksiyon potansiyelindeki karşılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Hipokalsemi – Faz 2 plato fazının uzaması
Açıklama: Miyokard hücrelerinde aksiyon potansiyelinin platosunu (Faz 2) oluşturan temel iyon kalsiyumdur. Hipokalsemide (özellikle tiroid cerrahisi sonrası paratiroid hasarında sık görülür) hücre dışından kalsiyum girişi yavaşlar, bu durum plato fazını ve dolayısıyla ST segmentini/QT süresini uzatır. Hipopotasemi de repolarizasyonu bozar ancak ST segmentini uzatmaktan ziyade U dalgası ve T düzleşmesi yapar.

**Soru 2 (ID: 9f0cbd82-56e0-4ca5-870b-6fbce6753dc8)**
Soru Kökü: Kırk yaşında tiroid cerrahisi (total tiroidektomi) geçiren bir kadın hasta, ameliyatın ertesi günü el ve ayaklarında karıncalanma ile kas krampları tarifliyor. Hastanın çekilen EKG'sinde aksiyon potansiyelindeki plato fazının uzamasına bağlı bir anormallik izleniyor. Bu hastanın klinik tablosu ve EKG bulgusu aşağıdakilerden hangisiyle en uyumludur?
Doğru Şık (A): Hipokalsemiye bağlı QT mesafesinin uzaması
Açıklama: Paratiroid bezlerinin de etkilendiği cerrahi sonrası hipokalsemi gelişir. Miyokard aksiyon potansiyelinde plato fazını (Faz 2) kalsiyum girişi oluşturur. Hipokalsemide kalsiyum girişi yavaşlar, plato uzar ve bu da EKG'de QT mesafesinin uzamasıyla kendini gösterir. Hiperkalsemi durumunda ise kalsiyum girişi hızlandığından QT kısalır.

---

### ÇİFT 69 (Benzerlik: 0.78)

**Soru 1 (ID: 5bf60852-f2ff-4969-87a4-e0738e3e5521)**
Soru Kökü: Tiroid cerrahisi sonrası paratiroid bezleri yanlışlıkla eksize edilen bir hastada, postoperatif dönemde dudak çevresinde uyuşma ve kas spazmları (hipokalsemi) gelişiyor. Bu hastanın EKG'sinde hangi dalga mesafesinde bir uzama beklenir?
Doğru Şık (D): QT aralığı
Açıklama: Hipokalsemide hücre dışından miyokard hücresine kalsiyum girişi yavaşlar, bu durum aksiyon potansiyelinde plato fazının (Faz 2) uzamasına neden olur. Plato fazının uzaması EKG'de doğrudan ST segmentinin ve dolayısıyla QT aralığının uzaması olarak görülür. PR aralığı aksine, hücre uyarılabilirliği arttığı için hafifçe kısalabilir.

**Soru 2 (ID: 67f71a1a-87c1-423e-84aa-cbd1bb8cc7eb)**
Soru Kökü: 40 yaşında total tiroidektomi sonrası paratiroid bezleri hasar gören kadın hastada tetani kasılmaları gözleniyor. Bu hastanın elektrokardiyografisinde (EKG) aşağıdaki bulgulardan hangisinin ortaya çıkması en olasıdır?
Doğru Şık (D): ST segmentinin ve QT süresinin uzaması
Açıklama: Hipokalsemide hücre dışından miyokard hücresine kalsiyum girişi yavaşlar, bu da aksiyon potansiyeli eğrisindeki plato fazının (Faz 2) uzamasına neden olur. Plato fazının uzaması EKG'ye ST segmentinin ve dolayısıyla toplam aksiyon potansiyeli süresini gösteren QT aralığının uzaması olarak yansır. Hiperkalsemide ise tam tersine kalsiyum girişi hızlanır ve QT kısalır.

---

### ÇİFT 70 (Benzerlik: 0.78)

**Soru 1 (ID: 67f71a1a-87c1-423e-84aa-cbd1bb8cc7eb)**
Soru Kökü: 40 yaşında total tiroidektomi sonrası paratiroid bezleri hasar gören kadın hastada tetani kasılmaları gözleniyor. Bu hastanın elektrokardiyografisinde (EKG) aşağıdaki bulgulardan hangisinin ortaya çıkması en olasıdır?
Doğru Şık (D): ST segmentinin ve QT süresinin uzaması
Açıklama: Hipokalsemide hücre dışından miyokard hücresine kalsiyum girişi yavaşlar, bu da aksiyon potansiyeli eğrisindeki plato fazının (Faz 2) uzamasına neden olur. Plato fazının uzaması EKG'ye ST segmentinin ve dolayısıyla toplam aksiyon potansiyeli süresini gösteren QT aralığının uzaması olarak yansır. Hiperkalsemide ise tam tersine kalsiyum girişi hızlanır ve QT kısalır.

**Soru 2 (ID: e7434e32-5fb0-4eb0-b169-622bef19fd5b)**
Soru Kökü: 45 yaşında kadın hasta yorgunluk ve kas güçsüzlüğü şikayetiyle başvuruyor. Laboratuvar incelemesinde serum kalsiyum düzeyi 14 mg/dL (N: 8.5-10.5) olarak ölçülüyor. Çekilen elektrokardiyografide (EKG) aşağıdaki bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (E): QT mesafesinde kısalma
Açıklama: Hiperkalsemi durumunda hücre dışından miyokard hücresine kalsiyum girişi hızlanır ve artar, bu da aksiyon potansiyelindeki plato (faz 2) süresini kısaltır. Hipokalsemide plato süresinin uzamasına bağlı olarak ST ve QT mesafesi uzarken, hiperkalsemide bu mesafe doğrudan kısalır. U dalgasında belirginleşme ise kalsiyumdan ziyade hipopotasemiye özgü klasik bir bulgudur.

---

### ÇİFT 71 (Benzerlik: 0.78)

**Soru 1 (ID: 60c3ae2b-193a-4c1b-97f2-5c638ac0c984)**
Soru Kökü: Ciddi kusma ve diüretik kullanımı sonrası halsizlik şikayetiyle başvuran bir hastanın serum potasyum düzeyi 2.1 mEq/L (hipopotasemi) saptanıyor. Bu hastanın ventrikül miyokardında dinlenim membran potansiyelinde (İMP) ve EKG trasajında oluşması beklenen en spesifik değişiklik çifti aşağıdakilerden hangisidir?
Doğru Şık (B): İMP -110 mV'a düşer / T dalgası yassılaşır ve U dalgası belirginleşir
Açıklama: Hipopotasemide, potasyumun hücre dışına konsantrasyon gradyanı arttığı için istirahat membran potansiyeli -90 mV'dan -110 mV'a düşerek hiperpolarize olur. Bu aşırı negatiflik nedeniyle repolarizasyona dönüş süreci uzar ve zorlaşır; klinik EKG'de T dalgası küçülür/kaybolur, repolarizasyonun uzamasını temsil eden U dalgası belirginleşir. İMP'nin -70 mV'a kayması hiperpotasemi bulgusudur.

**Soru 2 (ID: f98b18a0-c0d9-4edd-9bd1-06d5072967a6)**
Soru Kökü: Aşağıdaki EKG bulgularından hangisi, hücre dinlenim membran potansiyelinin -90 mV'dan -110 mV'a inerek hiperpolarize olduğu ve repolarizasyonun uzadığı hipopotasemi tablosunun karakteristik bir göstergesidir?
Doğru Şık (A): U dalgasının belirginleşmesi
Açıklama: Hipopotasemide, potasyum hücre dışına daha fazla çıkma eğiliminde olduğu için hücre -110 mV'a kadar hiperpolarize olur. Bu durumda repolarizasyon zorlaşır ve uzar. T dalgası yassılaşır veya negatifleşir ve uzamış repolarizasyonu (özellikle papiller kasın) gösteren belirgin bir U dalgası ortaya çıkar. Hiperkalemide ise T sivrileşir.

---

### ÇİFT 72 (Benzerlik: 0.78)

**Soru 1 (ID: db37f088-402e-4ea4-8273-0b050ffe8578)**
Soru Kökü: Kalpte uyarı üreten ve ileten sistemlerin çalışma prensipleri göz önüne alındığında, aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): Sinoatrial nod – İleti hızının en yüksek olduğu kalp odacıği
Açıklama: Sinoatrial (SA) nod kalbin doğal pace-maker'ı olarak en sık uyarı çıkaran merkezdir, ancak uyarı iletim hızı SA ve AV nodda en yavaştır (yaklaşık 0.05 m/sn). İleti hızının en yüksek olduğu yer, çapları en geniş olan ve ventriküllere senkron kasılmayı sağlayan Purkinje lifleridir (4 m/sn).

**Soru 2 (ID: efcdacd9-5734-4914-a0ae-77f74c06dafb)**
Soru Kökü: Kalbin otonom ileti sistemine ait hız parametreleri göz önüne alındığında, aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Atriyal kas hücrelerindeki ileti hızı SA noddan daha yavaştır.
Açıklama: Atriyal kas hücresi ileti hızı yaklaşık 1 m/sn'dir ve uyarı üreten sinoatriyal noddan (0.05 m/sn) belirgin derecede hızlıdır. Kalpte iletinin en yavaş olduğu iki bölge SA nod ve AV noddur. AV noddaki bu yavaş ileti, ventriküllerin sistol öncesi tam dolabilmesi için gerekli fizyolojik gecikmeyi sağlar.

---

### ÇİFT 73 (Benzerlik: 0.78)

**Soru 1 (ID: 5a67ee6c-36ab-46f5-a5e0-9fb968c958bb)**
Soru Kökü: Normal bir EKG trasajında, QRS kompleksi oluşumu sırasında V1 derivasyonunda küçük bir pozitif 'r' dalgasının, V6 derivasyonunda ise küçük bir negatif 'q' dalgasının oluşmasının temel vektöryel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): İnterventriküler septumun soldan sağa doğru depolarize olması
Açıklama: İnterventriküler septum kalpte ilk depolarize olan bölgedir ve bu elektriksel yayılım soldan sağa doğrudur. Sağ göğüs kafesinde olan V1 derivasyonuna bu akım yaklaştığı için pozitif 'r' dalgası çizerken, sol koltuk altında olan V6 derivasyonundan uzaklaştığı için negatif 'q' dalgası çizer. Sol ventrikül duvar kalınlığı QRS'in ana (R) aksını sola kaydırır ancak septal r/q paternini oluşturan septumun yönelimidir.

**Soru 2 (ID: 999bb971-a816-4e09-8637-80015ca97edd)**
Soru Kökü: Ventrikül miyokardının depolarizasyonu sırasında V1 ve V6 derivasyonlarında oluşan QRS kompleksinin temel morfolojisi ile ilgili aşağıdakilerden hangisi doğrudur?
Doğru Şık (E): V1 derivasyonunda pozitif r dalgası, V6 derivasyonunda negatif q dalgası oluşur.
Açıklama: İlk depolarize olan bölge interventriküler septumdur ve bu depolarizasyon soldan sağa doğru ilerler. Bu vektör sağda yer alan V1 derivasyonuna yaklaştığı için pozitif bir r dalgası, solda yer alan V6 derivasyonundan uzaklaştığı için negatif bir q dalgası oluşturur. Daha sonra sağ ve sol ventrikül kütlesinin asıl depolarizasyonu ile morfoloji tamamlanır.

---

### ÇİFT 74 (Benzerlik: 0.78)

**Soru 1 (ID: 8e55828e-9f73-4515-ab3c-03ddf68d05b4)**
Soru Kökü: Akut stres reaksiyonu yaşayan ve sempatik deşarjı artan 25 yaşındaki sporcunun kalp debisinde artış ve iskelet kası kan akımında hızlanma tespit edilmiştir. Adrenal medulladan salınan adrenalinin, hastanın iskelet kası ve karaciğerinde glikojenolizi tetikleyerek sistemik metabolizmayı %100'e kadar artırmasını sağlayan primer reseptör aşağıdakilerden hangisidir?
Doğru Şık (C): Beta-2
Açıklama: Adrenalin, iskelet kası damarları ile kas ve karaciğer dokusunda belirgin olarak Beta-2 reseptörlerine bağlanır. Bu reseptörlerin aktivasyonu kas damarlarında vazodilatasyon sağlarken, aynı zamanda hücresel glikojenolizi başlatarak metabolizma hızını masif oranda artırır. Beta-1 reseptörleri ise başlıca kalpte inotropik (kasılma) ve kronotropik (hız) etkilerden sorumludur.

**Soru 2 (ID: e64044a4-c4f9-4330-b9a4-dbd92a7ef8a5)**
Soru Kökü: Adrenal medulladan kana salınan epinefrinin (adrenalin), iskelet kası damar yatağında vazodilatasyon oluşturarak bölgesel kan akımını artırması ve eş zamanlı olarak karaciğer ile kasta glikojenolizi stimüle etmesi aşağıdaki reseptörlerden hangisinin aktivasyonu ile oluşur?
Doğru Şık (C): Beta-2 adrenerjik
Açıklama: Epinefrin Beta-2 reseptörlerine yüksek afinite gösterir; iskelet kası damarlarında ve karaciğerde bu reseptörleri aktive ederek cAMP artışına, dolayısıyla damar düz kasında gevşemeye ve hücresel glikojenolize neden olur. Alfa-1 reseptörleri sistemik vazokonstriksiyondan, Beta-1 ise kalp performansını artırmaktan sorumludur. Beta-2'nin bu selektif etkisi 'kaç ya da savaş' yanıtında hayati kasların beslenmesini sağlar.

---

### ÇİFT 75 (Benzerlik: 0.78)

**Soru 1 (ID: 36ecfb99-e9d7-41a6-818e-4772b38cfe02)**
Soru Kökü: 55 yaşındaki sağlıklı bir erkek hastanın göğüs kafesinde sol 5. interkostal ile orta aksiller çizginin kesişimine elektrot yerleştirilerek V6 derivasyonu kaydedilmektedir. Bu trasede QRS kompleksinin başında küçük bir negatif dalga (q dalgası) izlenmesinin fizyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (B): İnterventriküler septum depolarizasyon vektörünün V6 elektrodundan uzaklaşması
Açıklama: V6 derivasyonu kalbin sol yanını görür. İnterventriküler septum depolarizasyonu soldan sağa doğru olduğu için, elektriksel akım V6 elektrodundan uzaklaşır ve bu durum küçük bir başlangıç negatif dalgası (q dalgası) üretir. Bu dalga patolojik Q dalgasından süresinin kısalığı ve derinliğinin azlığı ile ayrılır.

**Soru 2 (ID: 5a67ee6c-36ab-46f5-a5e0-9fb968c958bb)**
Soru Kökü: Normal bir EKG trasajında, QRS kompleksi oluşumu sırasında V1 derivasyonunda küçük bir pozitif 'r' dalgasının, V6 derivasyonunda ise küçük bir negatif 'q' dalgasının oluşmasının temel vektöryel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): İnterventriküler septumun soldan sağa doğru depolarize olması
Açıklama: İnterventriküler septum kalpte ilk depolarize olan bölgedir ve bu elektriksel yayılım soldan sağa doğrudur. Sağ göğüs kafesinde olan V1 derivasyonuna bu akım yaklaştığı için pozitif 'r' dalgası çizerken, sol koltuk altında olan V6 derivasyonundan uzaklaştığı için negatif 'q' dalgası çizer. Sol ventrikül duvar kalınlığı QRS'in ana (R) aksını sola kaydırır ancak septal r/q paternini oluşturan septumun yönelimidir.

---

### ÇİFT 76 (Benzerlik: 0.78)

**Soru 1 (ID: 3f8709ef-910a-4447-95c7-0749959fddd3)**
Soru Kökü: Poiseuille-Hagen eşitliği dikkate alındığında, bir damar içerisindeki kan debisini (akım miktarını) **ters** yönde etkileyen (azaltan) faktörler aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Kan viskozitesi ve damar uzunluğu
Açıklama: Formülde debi = (π × ΔP × r^4) / (8 × viskozite × uzunluk) olarak ifade edilir. Dolayısıyla paydada yer alan kanın viskozitesi (koyuluğu) ve damarın uzunluğu arttıkça sürtünme direnci artar, bu da kan debisinin azalmasına neden olur. Yarıçap ve basınç farkı ise debi ile doğru orantılıdır.

**Soru 2 (ID: 5666b697-0f22-4fc6-8663-3a2498b1d8b4)**
Soru Kökü: Poiseuille-Hagen eşitliğine göre, bir damardaki kan debisini (akım miktarını) artıran ve formülde dördüncü kuvvetiyle yer alan en güçlü anatomik belirleyici faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Damar yarıçapı
Açıklama: Poiseuille-Hagen eşitliğine göre kan debisi, damarın iki ucu arasındaki basınç farkı ve damar yarıçapının dördüncü kuvveti (r^4) ile doğru orantılıdır. Yarıçaptaki çok küçük bir artış (örneğin vazodilatasyon), debiyi dördüncü kuvvetiyle katlanarak artırır. Damar içi basınç farkı doğru orantılıdır ancak dördüncü kuvvetiyle etki etmez.

---

### ÇİFT 77 (Benzerlik: 0.78)

**Soru 1 (ID: 7787c88a-9883-41ea-bc36-c717d1b734a4)**
Soru Kökü: Boyun venöz dolgunluğu olan 65 yaşında bir hastanın juguler venöz nabız trasesi incelenmektedir. Trasedeki 'c' dalgasının oluşum mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): İzovolümetrik kontraksiyon evresinde triküspit kapağın atriyuma doğru bombeleşmesi
Açıklama: Juguler venöz trasede 'c' dalgası, ventrikül sistolünün başlangıcında (izovolümetrik kontraksiyon) hızla artan ventrikül basıncının, kapalı olan triküspit kapağı sağ atriyuma doğru itmesi (bombeleştirmesi) sonucu atriyum basıncında oluşan geçici artışı yansıtır. Atriyum kasılması 'a' dalgasını, venöz doluş 'v' dalgasını, atriyumun boşalması ise 'y' inişini oluşturur.

**Soru 2 (ID: db5432e8-33a0-4e87-9bd0-c3d7d122f8ec)**
Soru Kökü: 60 yaşında erkek hasta boyun venlerinde belirginleşme şikayetiyle polikliniğe başvuruyor. Yapılan juguler venöz pulsasyon analizinde, diyastolün başlamasıyla triküspit kapağın ani açılması ve atriyumdan ventriküle kanın hızlı boşalması sonucu oluşan negatif bir çöküntü dalgası tespit ediliyor. Bu fizyolojik dalga aşağıdakilerden hangisidir?
Doğru Şık (C): y dalgası
Açıklama: Juguler venöz trasade y dalgası, triküspit kapağın açılmasıyla sağ atriyumdaki kanın hızla sağ ventriküle boşalması neticesinde atriyum içi basıncın düşmesini yansıtır. x dalgası da bir basınç düşüşünü gösterir ancak bu durum ventrikül sistolü sırasında atriyumun gevşemesiyle oluşur. Triküspit kapağın açılış anı doğrudan y dalgasının iniş fazını başlatır.

---

### ÇİFT 78 (Benzerlik: 0.78)

**Soru 1 (ID: 02a1d18b-01c6-4255-918f-766ae470d461)**
Soru Kökü: 50 yaşında aterosklerotik renal arter stenozu olan erkek hastada sistemik hipertansiyon tespit ediliyor. Böbrek perfüzyon basıncının düşmesiyle tetiklenen hormon şelalesinde, distal tübüle azalan sodyum klorür miktarını algılayarak afferent arteriyolden renin salınımını başlatan özelleşmiş hücre grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Maküla densa hücreleri
Açıklama: Distal tübülde sodyum klorür miktarını algılayan osmoreseptör yapı maküla densa'dır. Renal arter stenozunda tübüler sodyum yükü azalınca maküla densa bu değişimi hisseder ve komşuluğundaki afferent arteriyol duvarında bulunan jukstaglomerüler (granüler) hücreleri uyararak renin salınımını tetikler. Bu durum RAAS kaskadını başlatarak sekonder hipertansiyona yol açar.

**Soru 2 (ID: ce5ff3f0-dd92-4da1-ad4b-5767361fe116)**
Soru Kökü: 50 yaşında kadın hasta ağır dehidratasyon tablosuyla acil servise getiriliyor. Renal perfüzyon basıncındaki düşüşe bağlı olarak böbrek distal tübülüne ulaşan NaCl miktarının azaldığı görülüyor. Distal tübülde bu sodyum klorür azalmasını algılayarak aferent arteriyoldeki jukstaglomerüler hücreleri renin salgılaması için uyaran lokal osmoreseptör yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Maküla densa
Açıklama: Maküla densa, böbrekte distal tübülün başlangıcında yer alan ve tübül sıvısındaki sodyum klorür (NaCl) konsantrasyonuna duyarlı özel bir epitel hücresi grubudur. NaCl azaldığında maküla densa bu değişikliği algılar ve parakrin sinyallerle jukstaglomerüler hücrelerden renin salınımını tetikler. Prensipal hücreler ise daha distalde yer alıp aldosteron ve ADH yanıtından sorumludur.

---

### ÇİFT 79 (Benzerlik: 0.78)

**Soru 1 (ID: d50eae4a-2b63-4e63-b85f-cb59de033254)**
Soru Kökü: Vagal sinir uyarımı ile salınan asetilkolin, miyokardiyal otonom hücrelerde etki göstererek kalp hızını yavaşlatır. Bu negatif kronotropik etkiyi başlatan spesifik iyonik ve reseptöryal etkileşim aşağıdakilerden hangisidir?
Doğru Şık (A): M2 reseptörü aracılığıyla potasyum kanallarının açılması
Açıklama: Asetilkolin, SA nod ve AV nodda lokalize olan muskarinik-2 (M2) reseptörlerine bağlanır. İnhibitör G proteinleri (Gi) üzerinden cAMP'yi düşürür ve belirli potasyum kanallarını (K-ACh) açarak hücreden potasyum çıkışını artırır. Oluşan hiperpolarizasyon pacemaker potansiyelin (Faz 4) eşik değere ulaşmasını geciktirerek negatif kronotropik etki yaratır.

**Soru 2 (ID: fec78fae-e6bb-4bea-872f-bf9fcd17aa91)**
Soru Kökü: Kırk beş yaşında erkek hastada uygulanan karotis masajı (vagal manevra) sonrası parasempatik sinir sisteminin aşırı aktivasyonuna bağlı olarak kalp hızı belirgin şekilde yavaşlamıştır. Asetilkolinin sinoatriyal nodda (SA nod) bu negatif kronotropik etkiyi oluştururken bağlandığı spesifik reseptör aşağıdakilerden hangisidir?
Doğru Şık (A): Muskarinik-2 (M2)
Açıklama: Parasempatik sinir sistemi uyarıldığında vagus sinirinden asetilkolin (ACh) salınır. ACh, kalpte özellikle SA ve AV nodlarda bulunan M2 (Muskarinik tip 2) reseptörlerine bağlanır. Bu bağlanma potasyum kanallarını açıp K+ çıkışını artırarak hücreyi hiperpolarize eder, eşik değere ulaşmayı zorlaştırarak kalp hızını yavaşlatır.

---

### ÇİFT 80 (Benzerlik: 0.78)

**Soru 1 (ID: b38a242e-788b-40f8-bf90-b4ccd4c59a20)**
Soru Kökü: Altmış beş yaşında kronik hipertansiyon nedeniyle ventrikül hipertrofisi gelişmiş erkek hastanın oskültasyonunda, birinci kalp sesinden (S1) hemen önce diyastol sonunda presistolik patolojik bir ses duyuluyor. Bu dördüncü kalp sesinin (S4) eş zamanlı olduğu fizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Atriyumların sistolü
Açıklama: Dördüncü kalp sesi (S4), diyastolün sonunda gerçekleşen atriyum sistolü ile eşzamanlıdır. Normalde duyulmayan bu ses, kanın hipertansiyon veya hipertrofi nedeniyle kompliyansı azalmış (sertleşmiş) ventrikül duvarına çarpması sonucu patolojik bir titreşim olarak oskülte edilir. S1'den hemen önce (presistolik) duyulan bu sesin mekanizması, atriyal kontraksiyonun ventrikülü zorla doldurma çabasıdır.

**Soru 2 (ID: f21347d9-5627-4b42-921d-2e2d64041233)**
Soru Kökü: Oskültasyonda diyastolün ilk üçte birlik bölümünün sonunda duyulan ve kanın atriyumlardan ventriküle gürültüyle akarken miyokard duvarında oluşturduğu titreşimleri temsil eden 3. kalp sesinin (S3) jeneratör mekanizması ile diyastol sonunda duyulan presistolik 4. kalp sesinin (S4) kaynağı aşağıdakilerden hangisinde sırasıyla doğru eşleştirilmiştir?
Doğru Şık (A): Hızlı doluş dönemi sonu akım çarpması – Atriyum sistolünün ventrikül duvarına etkisi
Açıklama: S3, ventrikül içi basıncın düşmesiyle atriyumdaki kanın A-V kapakları açarak hızla ventriküle aktığı (hızlı doluş dönemi) ve duvarlara çarptığı evrenin sonunda duyulur. S4 ise diyastolün en sonunda, atriyum sistolü ile pompalanan son %30'luk kanın ventriküle girişindeki titreşimdir ve presistolik bir sestir. Aort kapak kapanması S2'yi, AV kapak kapanması S1'i oluşturur.

---

### ÇİFT 81 (Benzerlik: 0.78)

**Soru 1 (ID: 0f85326f-7d53-4c3e-bc2c-1c9e28a1c514)**
Soru Kökü: Şiddetli hiperpotasemide kalpte ileti yavaşlamasının (QRS genişlemesi ve P dalgası kaybı) altında yatan temel elektrofizyolojik anormallik aşağıdakilerden hangisidir?
Doğru Şık (D): İstirahat membran potansiyelinin hipopolarize olması (-70 mV) ve sodyum kanallarını inaktive etmesi
Açıklama: Hiperpotasemide hücre dışı K+ arttığı için potasyumun dışarı çıkış itici gücü azalır ve istirahat membran potansiyeli -90 mV'dan -70 mV'a yükselir (hipopolarizasyon). Bu kalıcı kısmi depolarizasyon durumu, faz 0'dan sorumlu hızlı sodyum kanallarının inaktive pozisyonda kalmasına neden olarak aksiyon potansiyeli oluşumunu ve hücreden hücreye iletiyi yavaşlatır (QRS genişlemesi). Hiperpolarizasyon (-110 mV) tablosu hipopotasemide görülür ve ileti hızını değil repolarizasyon süresini etkiler.

**Soru 2 (ID: a7cc8122-3a5d-4031-8436-9e63c27b312e)**
Soru Kökü: Hiperpotaseminin ölümcül kardiyak etkilerinden biri olan diyastolik arrest (kalp durması) mekanizması hücresel düzeyde incelendiğinde, bu duruma yol açan temel elektrofizyolojik anormallik aşağıdakilerden hangisidir?
Doğru Şık (A): Hücre zarının kısmı depolarize kalarak (-70 mV) voltaj bağımlı sodyum kanallarını inaktive etmesi
Açıklama: Hücre dışında potasyum arttığında (hiperpotasemi), istirahat membran potansiyeli -90 mV'dan -70 mV'a kayar (hipopolarizasyon). Başlangıçta repolarizasyon hızlansa da (sivri T), bu kronik -70 mV potansiyeli, aksiyon potansiyelini başlatan 'hızlı voltaj kapılı Na+ kanallarını' kapalı (inaktive) formda kilitler. Hücre içine sodyum giremediği için QRS genişler, uyarılabilirlik kaybolur ve hücre diyastolde arrest olur.

---

### ÇİFT 82 (Benzerlik: 0.78)

**Soru 1 (ID: 8e55828e-9f73-4515-ab3c-03ddf68d05b4)**
Soru Kökü: Akut stres reaksiyonu yaşayan ve sempatik deşarjı artan 25 yaşındaki sporcunun kalp debisinde artış ve iskelet kası kan akımında hızlanma tespit edilmiştir. Adrenal medulladan salınan adrenalinin, hastanın iskelet kası ve karaciğerinde glikojenolizi tetikleyerek sistemik metabolizmayı %100'e kadar artırmasını sağlayan primer reseptör aşağıdakilerden hangisidir?
Doğru Şık (C): Beta-2
Açıklama: Adrenalin, iskelet kası damarları ile kas ve karaciğer dokusunda belirgin olarak Beta-2 reseptörlerine bağlanır. Bu reseptörlerin aktivasyonu kas damarlarında vazodilatasyon sağlarken, aynı zamanda hücresel glikojenolizi başlatarak metabolizma hızını masif oranda artırır. Beta-1 reseptörleri ise başlıca kalpte inotropik (kasılma) ve kronotropik (hız) etkilerden sorumludur.

**Soru 2 (ID: e90fe3e3-d062-4bb2-983c-c33fa91db76e)**
Soru Kökü: Egzersiz sırasında sempatik sinir sistemi hem kalpte hem de damarlarda yaygın değişiklikler yapar. Adrenal medulladan salınan epinefrinin (adrenalin), norepinefrinden farklı olarak iskelet kası ve karaciğer yatağına giden damarlarda spesifik vazodilatasyon yapmasını ve kan akımını artırmasını sağlayan reseptör alt tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Beta-2 adrenerjik reseptör
Açıklama: Norepinefrin güçlü Alfa-1 etkisi ile sistemik damarlarda vazokonstriksiyon yapar. Ancak dolaşımdaki epinefrinin (adrenalin) iskelet kası ve karaciğerdeki damarlarda yer alan Beta-2 reseptörlere affinitesi çok yüksektir ve bu bağlanma bölgesel vazodilatasyon oluşturarak egzersiz halindeki kasa kan akımını maksimize eder. Kalpteki inotropik etki ise Beta-1 üzerinden yürür.

---

### ÇİFT 83 (Benzerlik: 0.78)

**Soru 1 (ID: 0e24f8d5-af14-4f1c-be7e-43ef974d5f54)**
Soru Kökü: I. Düz kas hücresinde cGMP miktarını artırır.
II. Böbrek tübüllerinde Na-K ATPaz pompasını inhibe ederek natriürez yapar.
III. Anjiyotensin II etkilerini zayıflatarak kan basıncını düşürür.
Yukarıda özellikleri verilen vazoaktif hormon aşağıdakilerden hangisidir?
Doğru Şık (B): Atrial Natriüretik Peptid (ANP)
Açıklama: Atrial Natriüretik Peptid (ANP), hipervolemi durumunda atriyum duvarının gerilmesiyle salgılanır. Kan hacmini ve basıncını düşürmeye yönelik çalışır; reseptörüne bağlanıp cGMP'yi artırarak vazodilatasyon yapar, böbrekte Na atılımını (natriürez) artırır ve RAAS sistemini antagonize eder. Verilen tüm özellikler ANP'nin kan basıncını düşürücü (Hacim Refleksi) mekanizmalarını tanımlar.

**Soru 2 (ID: 4d2bb126-76c5-47e6-bddb-db5b612cafd4)**
Soru Kökü: Aşırı tuz ve su yüklenmesi nedeniyle dolaşım hacmi (hipervolemi) artan bir bireyde, atriyum duvarının gerilmesi sonucu sentezlenen ve düz kaslarda cGMP'yi artırarak vazodilatasyon sağlayan hormon aşağıdakilerden hangisidir?
Doğru Şık (E): Atrial Natriüretik Peptid (ANP)
Açıklama: Hipervolemiye bağlı atriyum gerilmesi sonucu Atrial Natriüretik Peptid (ANP) salgılanır. ANP, anjiyotensin II'nin tam zıttı yönde etki göstererek Na-K ATP-az pompasını inhibe eder (natriürez) ve cGMP aracılığıyla düz kasları gevşeterek kan basıncını düşürür. Bu durum 'hacim refleksi'nin hormonal bacağıdır.

---

### ÇİFT 84 (Benzerlik: 0.77)

**Soru 1 (ID: 15247839-3e5c-4b05-9ce3-7fbd89f01f9f)**
Soru Kökü: 45 yaşında erkek hasta trafik kazası sonrası acil servise getiriliyor; intrakraniyal basıncının (KİBAS) hızla arttığı saptanıyor. Hastanın monitörizasyonunda sistemik kan basıncında belirgin artış ve buna eşlik eden bradikardi gözleniyor. Cushing triadında görülen bu refleks bradikardinin afferent iletisini vazomotor merkeze taşıyan yapılar aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (B): Hering siniri ve N. Vagus duysal lifleri
Açıklama: KİBAS artışıyla gelişen serebral iskemi (MSS iskemik yanıtı), masif sempatik deşarja yol açarak sistemik hipertansiyon yaratır. Bu akut kan basıncı artışı, karotid sinüs ve arkus aortadaki gerim reseptörlerini (baroreseptörler) aktive eder. Buradan çıkan sinyaller Hering siniri (Glossofaringeal sinirin dalı) ve Vagus sinirinin duysal lifleri ile medulla oblongatadaki NTS'ye iletilir. Refleks olarak parasempatik deşarj artar ve bradikardi gelişir.

**Soru 2 (ID: 42c3cc04-db6e-4372-bcf9-d11b69546f0c)**
Soru Kökü: Trafik kazası sonrası intrakraniyal basıncının (KİBAS) hızla arttığı ve buna bağlı olarak serebral iskemi geliştiği izlenen bir hastada, beyin sapındaki vazomotor merkezin uyarılmasıyla muazzam bir sempatik deşarj başlar. Serebral perfüzyonu korumaya yönelik olarak gelişen 'Cushing triadı'nda aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Taşikardi atakları
Açıklama: Cushing triadı; kafatası içindeki basıncın artışı (KİBAS), buna beyin kan akımını sağlamak için sistemik olarak yanıt veren şiddetli hipertansiyon ve bu kan basıncı yüksekliğinin baroreseptörleri uyarmasıyla gelişen refleks bradikardi üçlüsünden oluşur. İskemik MSS tepkisi kan basıncını ne pahasına olursa olsun artırırken, refleks yay vazovagal aktiviteyle kalbi yavaşlatır; bu nedenle taşikardi beklenmez.

---

### ÇİFT 85 (Benzerlik: 0.77)

**Soru 1 (ID: 15f86f11-527f-461d-a1a7-c74eb08f1515)**
Soru Kökü: Sağlıklı bir insanda boyundaki juguler venöz pulsasyon dalgaları değerlendirilirken izlenen ilk pozitif sapma olan 'a dalgası', kalp siklusunda hangi fizyolojik olaya bağlı olarak meydana gelir?
Doğru Şık (D): Diyastol sonunda atriyum kasılmasının (sistol) venöz basınca yansıması
Açıklama: Juguler vendeki 'a dalgası', diyastolün son üçte birlik bölümünde sağ atriyumun kasılmasına (sistolüne) bağlı olarak artan basıncın geriye, büyük venlere yansımasıyla oluşur. İzovolumetrik kontraksiyon sırasında triküspit kapağın atriyuma bombeleşmesi 'c dalgası'nı, atriyumun venöz kanla pasif doluşu ise 'v dalgası'nı yaratır. a dalgası, sağ ventrikül kompliyansının azaldığı durumlarda büyür.

**Soru 2 (ID: 9dea92e4-5803-4e79-9a29-0c1b4e21aea6)**
Soru Kökü: Juguler venöz pulsasyon dalgaları incelendiğinde, ventrikül sistolü sırasında sağ atriyumun gevşemesi ve atriyal basıncın düşmesiyle aşağı doğru çizilen dalga hangisidir?
Doğru Şık (B): x dalgası
Açıklama: Juguler vende 'x dalgası', atriyumun gevşemesiyle basıncın düştüğü (negatif dalga) dönemi ifade eder. 'a dalgası' atriyum sistolü, 'c dalgası' triküspit kapağın atriyuma bombeleşmesi, 'v dalgası' kapalı kapağa rağmen venöz doluş basıncı, 'y dalgası' ise diyastolde kapağın açılmasıyla kanın atriyumdan ventriküle boşalmasını gösterir.

---

### ÇİFT 86 (Benzerlik: 0.77)

**Soru 1 (ID: 0ef05a2b-3a01-43df-9347-7a0ac19a47e3)**
Soru Kökü: EKG'de kullanılan standart ekstremite derivasyonları ve bağlantı noktalarıyla ilgili aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (E): DIII: Sağ kol negatif, sol bacak pozitif
Açıklama: DIII derivasyonu sol kol (negatif) ile sol bacak (pozitif) arasındaki potansiyel farkı ölçen bipolar bir derivasyondur. Seçenekte verilen 'Sağ kol negatif, sol bacak pozitif' bağlantısı DII derivasyonuna aittir. Diğer tüm bağlantı noktaları ve elektrot kutupları doğru eşleştirilmiştir.

**Soru 2 (ID: 236d634c-c198-420e-ac9a-270c0b489bb3)**
Soru Kökü: 45 yaşında erkek hastanın rutin kardiyolojik değerlendirmesinde standart bipolar ekstremite derivasyonları incelenmektedir. Sağ kolun negatif, sol bacağın pozitif elektrot olarak bağlandığı ve kalbin elektriksel eksenini belirlemede sıkça kullanılan derivasyon aşağıdakilerden hangisidir?
Doğru Şık (C): DII
Açıklama: Standart bipolar ekstremite derivasyonlarından DII, sağ kolun negatif (-) ve sol bacağın pozitif (+) elektrot olarak kullanıldığı derivasyondur. Normal elektriksel eksenin +59 derece olması, kalbin ana depolarizasyon vektörünün en net DII derivasyonunda izlenmesini sağlar. aVF sol bacağı kullanmasına rağmen bipolar değil, unipolar bir derivasyondur.

---

### ÇİFT 87 (Benzerlik: 0.77)

**Soru 1 (ID: 3f8709ef-910a-4447-95c7-0749959fddd3)**
Soru Kökü: Poiseuille-Hagen eşitliği dikkate alındığında, bir damar içerisindeki kan debisini (akım miktarını) **ters** yönde etkileyen (azaltan) faktörler aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (C): Kan viskozitesi ve damar uzunluğu
Açıklama: Formülde debi = (π × ΔP × r^4) / (8 × viskozite × uzunluk) olarak ifade edilir. Dolayısıyla paydada yer alan kanın viskozitesi (koyuluğu) ve damarın uzunluğu arttıkça sürtünme direnci artar, bu da kan debisinin azalmasına neden olur. Yarıçap ve basınç farkı ise debi ile doğru orantılıdır.

**Soru 2 (ID: ff94a925-c4b4-4e15-b173-540e77675276)**
Soru Kökü: Poiseuille-Hagen eşitliğine göre damar ağacında akan kanın debisi (akım hızı) çeşitli faktörlerden etkilenir. Bu formül bağlamında aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Damar yarıçapının dördüncü kuvveti ile ters orantılıdır.
Açıklama: Poiseuille eşitliğinde akım hızı, damar yarıçapının (r) dördüncü kuvveti ile ters DEĞİL, DOĞRU orantılıdır. Yani damar yarıçapındaki çok ufak bir genişleme, kan akımını 4. kuvveti oranında artırır. Viskozite, damar uzunluğu ve hematokrit ise dirence katkı sağladığı için akımla ters orantılı parametrelerdir.

---

### ÇİFT 88 (Benzerlik: 0.77)

**Soru 1 (ID: 9dea92e4-5803-4e79-9a29-0c1b4e21aea6)**
Soru Kökü: Juguler venöz pulsasyon dalgaları incelendiğinde, ventrikül sistolü sırasında sağ atriyumun gevşemesi ve atriyal basıncın düşmesiyle aşağı doğru çizilen dalga hangisidir?
Doğru Şık (B): x dalgası
Açıklama: Juguler vende 'x dalgası', atriyumun gevşemesiyle basıncın düştüğü (negatif dalga) dönemi ifade eder. 'a dalgası' atriyum sistolü, 'c dalgası' triküspit kapağın atriyuma bombeleşmesi, 'v dalgası' kapalı kapağa rağmen venöz doluş basıncı, 'y dalgası' ise diyastolde kapağın açılmasıyla kanın atriyumdan ventriküle boşalmasını gösterir.

**Soru 2 (ID: f00ba902-c62f-48e1-8218-c0500e9be315)**
Soru Kökü: Kardiyak siklus sırasında izovolumetrik kontraksiyon evresinde sağ ventrikül basıncının hızla artmasıyla kapalı olan triküspit kapağın atriyuma doğru esneyerek bombeleşmesi, juguler venöz trasede hangi dalga ile temsil edilir?
Doğru Şık (B): c dalgası
Açıklama: Juguler trasedeki 'c dalgası', QRS sonrasında ventriküllerin izovolumetrik olarak kasıldığı evrede oluşan basıncın, AV kapağı atriyum içine doğru mekanik olarak itmesi (bombeleşme) sonucunda atriyal basıncın anlık artışıyla oluşur. a dalgası atriyal sistolü, v dalgası kapalı kapağa karşı venöz dönüşle doluşu, y inişi ise kapağın açılıp atriyumun ventriküle boşaldığı evreyi simgeler.

---

### ÇİFT 89 (Benzerlik: 0.77)

**Soru 1 (ID: 5666b697-0f22-4fc6-8663-3a2498b1d8b4)**
Soru Kökü: Poiseuille-Hagen eşitliğine göre, bir damardaki kan debisini (akım miktarını) artıran ve formülde dördüncü kuvvetiyle yer alan en güçlü anatomik belirleyici faktör aşağıdakilerden hangisidir?
Doğru Şık (A): Damar yarıçapı
Açıklama: Poiseuille-Hagen eşitliğine göre kan debisi, damarın iki ucu arasındaki basınç farkı ve damar yarıçapının dördüncü kuvveti (r^4) ile doğru orantılıdır. Yarıçaptaki çok küçük bir artış (örneğin vazodilatasyon), debiyi dördüncü kuvvetiyle katlanarak artırır. Damar içi basınç farkı doğru orantılıdır ancak dördüncü kuvvetiyle etki etmez.

**Soru 2 (ID: ff94a925-c4b4-4e15-b173-540e77675276)**
Soru Kökü: Poiseuille-Hagen eşitliğine göre damar ağacında akan kanın debisi (akım hızı) çeşitli faktörlerden etkilenir. Bu formül bağlamında aşağıdaki eşleştirmelerden hangisi **yanlıştır**?
Doğru Şık (D): Damar yarıçapının dördüncü kuvveti ile ters orantılıdır.
Açıklama: Poiseuille eşitliğinde akım hızı, damar yarıçapının (r) dördüncü kuvveti ile ters DEĞİL, DOĞRU orantılıdır. Yani damar yarıçapındaki çok ufak bir genişleme, kan akımını 4. kuvveti oranında artırır. Viskozite, damar uzunluğu ve hematokrit ise dirence katkı sağladığı için akımla ters orantılı parametrelerdir.

---

### ÇİFT 90 (Benzerlik: 0.77)

**Soru 1 (ID: 5a67ee6c-36ab-46f5-a5e0-9fb968c958bb)**
Soru Kökü: Normal bir EKG trasajında, QRS kompleksi oluşumu sırasında V1 derivasyonunda küçük bir pozitif 'r' dalgasının, V6 derivasyonunda ise küçük bir negatif 'q' dalgasının oluşmasının temel vektöryel nedeni aşağıdakilerden hangisidir?
Doğru Şık (C): İnterventriküler septumun soldan sağa doğru depolarize olması
Açıklama: İnterventriküler septum kalpte ilk depolarize olan bölgedir ve bu elektriksel yayılım soldan sağa doğrudur. Sağ göğüs kafesinde olan V1 derivasyonuna bu akım yaklaştığı için pozitif 'r' dalgası çizerken, sol koltuk altında olan V6 derivasyonundan uzaklaştığı için negatif 'q' dalgası çizer. Sol ventrikül duvar kalınlığı QRS'in ana (R) aksını sola kaydırır ancak septal r/q paternini oluşturan septumun yönelimidir.

**Soru 2 (ID: e9a636ec-4ef7-4666-86a4-e71caf491870)**
Soru Kökü: Kalpte depolarizasyon dalgasının ventriküllere yayılım süreci incelendiğinde; I. Anatomik olarak soldan sağa doğru gerçekleşir. II. Göğüs duvarında V1 derivasyonuna yaklaştığı için pozitif bir r dalgası oluşturur. III. V6 derivasyonundan elektriksel olarak uzaklaştığı için negatif bir q dalgası oluşturur. İnterventriküler septumun depolarizasyonu ile ilgili yukarıdaki ifadelerden hangileri doğrudur?
Doğru Şık (C): I, II ve III
Açıklama: İnterventriküler septum ilk depolarize olan ventrikül dokusudur ve depolarizasyon yönü sol dalın septal dalcıkları erken ateşlediği için soldan sağa doğrudur (I). Bu vektör göğüs sağındaki V1'e yaklaştığı için pozitif (r), solundaki V6'dan uzaklaştığı için negatif (q) bir ilk dalga yaratır (II ve III). Tüm öncüller elektrofizyolojik olarak doğrudur.

---

### ÇİFT 91 (Benzerlik: 0.77)

**Soru 1 (ID: 15247839-3e5c-4b05-9ce3-7fbd89f01f9f)**
Soru Kökü: 45 yaşında erkek hasta trafik kazası sonrası acil servise getiriliyor; intrakraniyal basıncının (KİBAS) hızla arttığı saptanıyor. Hastanın monitörizasyonunda sistemik kan basıncında belirgin artış ve buna eşlik eden bradikardi gözleniyor. Cushing triadında görülen bu refleks bradikardinin afferent iletisini vazomotor merkeze taşıyan yapılar aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (B): Hering siniri ve N. Vagus duysal lifleri
Açıklama: KİBAS artışıyla gelişen serebral iskemi (MSS iskemik yanıtı), masif sempatik deşarja yol açarak sistemik hipertansiyon yaratır. Bu akut kan basıncı artışı, karotid sinüs ve arkus aortadaki gerim reseptörlerini (baroreseptörler) aktive eder. Buradan çıkan sinyaller Hering siniri (Glossofaringeal sinirin dalı) ve Vagus sinirinin duysal lifleri ile medulla oblongatadaki NTS'ye iletilir. Refleks olarak parasempatik deşarj artar ve bradikardi gelişir.

**Soru 2 (ID: 7fcfc7da-9d7f-4edc-aae4-a9669c9833a8)**
Soru Kökü: Ağır kafa travması geçiren bir hastada kafa içi basıncının (KİBAS) şiddetle artmasına bağlı olarak, beyin iskemisi gelişmesini engellemek için vazomotor merkezin tetiklediği spesifik otonom refleks üçlemesi olan 'Cushing Triadı'nın kardiyovasküler yansımaları aşağıdakilerden hangisinde doğru verilmiştir?
Doğru Şık (A): Hipertansiyon + Bradikardi
Açıklama: Kafa içi basınç arttığında beyin dokusu baskı altında kalır ve iskemik yanıt başlar. Merkez (NTS/vazomotor alan), beyni perfüze edebilmek için sempatik deşarjı maksimuma çıkararak şiddetli sistemik Hipertansiyon yaratır. Yükselen kan basıncı aort/karotid baroreseptörleri hızla uyarır ve vagal refleks üzerinden Bradikardi gelişir. Bu birbirine zıt gibi görünen HT+Bradikardi kliniğine solunum düzensizliği de eklenince Cushing triadı oluşur.

---

### ÇİFT 92 (Benzerlik: 0.77)

**Soru 1 (ID: 2d292342-6866-48db-80b4-bfc44ff170f5)**
Soru Kökü: 35 yaşında tiroid cerrahisi geçirmiş kadın hasta, ağız çevresinde uyuşma ve kas krampları şikayetiyle başvuruyor. Çekilen EKG'sinde QT süresinin belirgin şekilde uzadığı ve ST segmentinin normalden daha uzun bir izoelektrik hat çizdiği görülüyor. Bu hastadaki EKG bulgusuna neden olan asıl elektrolit dengesizliği ve miyokard aksiyon potansiyelindeki karşılığı aşağıdakilerden hangisidir?
Doğru Şık (B): Hipokalsemi – Faz 2 plato fazının uzaması
Açıklama: Miyokard hücrelerinde aksiyon potansiyelinin platosunu (Faz 2) oluşturan temel iyon kalsiyumdur. Hipokalsemide (özellikle tiroid cerrahisi sonrası paratiroid hasarında sık görülür) hücre dışından kalsiyum girişi yavaşlar, bu durum plato fazını ve dolayısıyla ST segmentini/QT süresini uzatır. Hipopotasemi de repolarizasyonu bozar ancak ST segmentini uzatmaktan ziyade U dalgası ve T düzleşmesi yapar.

**Soru 2 (ID: 67f71a1a-87c1-423e-84aa-cbd1bb8cc7eb)**
Soru Kökü: 40 yaşında total tiroidektomi sonrası paratiroid bezleri hasar gören kadın hastada tetani kasılmaları gözleniyor. Bu hastanın elektrokardiyografisinde (EKG) aşağıdaki bulgulardan hangisinin ortaya çıkması en olasıdır?
Doğru Şık (D): ST segmentinin ve QT süresinin uzaması
Açıklama: Hipokalsemide hücre dışından miyokard hücresine kalsiyum girişi yavaşlar, bu da aksiyon potansiyeli eğrisindeki plato fazının (Faz 2) uzamasına neden olur. Plato fazının uzaması EKG'ye ST segmentinin ve dolayısıyla toplam aksiyon potansiyeli süresini gösteren QT aralığının uzaması olarak yansır. Hiperkalsemide ise tam tersine kalsiyum girişi hızlanır ve QT kısalır.

---

### ÇİFT 93 (Benzerlik: 0.76)

**Soru 1 (ID: 6db6fbab-b009-4305-a6ca-fa3218516ffc)**
Soru Kökü: 28 yaşındaki asemptomatik bir erkek sporcunun rutin sağlık taramasında çekilen EKG'sinde her P dalgasını takiben düzenli bir QRS kompleksi izlenmekte, ancak PR intervalinin 0.26 saniye olarak uzadığı saptanmaktadır. Bu hastadaki elektrofizyolojik durum en doğru şekilde nasıl tanımlanır?
Doğru Şık (C): Birinci derece AV blok
Açıklama: PR intervalinin normal üst sınırı olan 0.20 saniyenin üzerinde uzaması (>0.20 sn) ve bu uzamanın her atımda sabit kalarak hiçbir QRS kompleksinin düşmemesi (kaybolmaması) birinci derece AV bloğun karakteristik özelliğidir. Sporcularda artmış vagal tonusa bağlı olarak klinik önemi olmayan fizyolojik bir bulgu olarak karşımıza çıkabilir.

**Soru 2 (ID: 92d0a172-b69a-4b01-ad22-5774e79ed3d9)**
Soru Kökü: Yetmiş yaşında erkek hasta halsizlik ve çarpıntı şikayetiyle başvuruyor. EKG incelemesinde P dalgası ile QRS kompleksinin başlangıcı arasındaki sürenin uzadığı ve 0.20 saniyenin üzerinde sabit kaldığı görülüyor. Bu EKG bulgusu aşağıdakilerden hangisinin doğrudan bir göstergesidir?
Doğru Şık (D): Atriyumdan başlayan elektriksel iletinin AV noddan geçerken anormal gecikmesi
Açıklama: PR aralığı, atriyumların depolarizasyonundan ventrikül depolarizasyonuna kadar geçen süredir ve en fazla AV noddaki iletim hızını yansıtır. Normal süresi 0.12 ile 0.20 saniye arasındadır. Bu sürenin 0.20 saniyeyi aşması, AV nodda ileti gecikmesi olduğunu gösterir ve Birinci Derece AV Blok olarak tanımlanır. İskemi ST segmentini, repolarizasyon bozuklukları ise T dalgası ve QT'yi etkiler.

---

### ÇİFT 94 (Benzerlik: 0.76)

**Soru 1 (ID: 33c7394d-45e4-461a-bb5c-59e5b43caf37)**
Soru Kökü: Aşağıdaki elektrokardiyografik bulgulardan hangisi klinik hipopotasemi tablosunda **beklenmez**?
Doğru Şık (C): QRS kompleksinde genişleme
Açıklama: QRS genişlemesi, istirahat membran potansiyelinin yükselerek (-70 mV) sodyum kanallarını inaktive ettiği hiperpotasemi tablosunun tipik bir bulgusudur. Hipopotasemide ise hücre hiperpolarize (-110 mV) olur, repolarizasyon zorlaşır ve uzar. Bu zorlu repolarizasyon süreci EKG'de T yassılaşması/negatifleşmesi ve ardışık U dalgasının belirginleşmesi olarak izlenirken, iletinin gecikmesi PR uzamasına yol açar.

**Soru 2 (ID: 456952f8-d85c-4d8a-822e-93129636f39b)**
Soru Kökü: Ağır kronik böbrek yetmezliği olan 60 yaşındaki kadın hastanın serum potasyum düzeyi 7.2 mEq/L (Normal: 3.5-5.0) olarak ölçülmüştür. Bu hastanın EKG'sinde aşağıdakilerden hangisinin görülmesi **en az olasıdır**?
Doğru Şık (D): Belirgin U dalgası
Açıklama: Belirgin U dalgası hiperpotasemide değil, hipopotasemide (düşük potasyum) papiller kasın uzamış repolarizasyonu sonucu görülen bir bulgudur. Hiperpotasemide hücre membran potansiyeli kısmi depolarize hale gelir; bu durum repolarizasyonu hızlandırıp T dalgasını sivrileştirirken, voltaj bağımlı Na kanallarını inaktive ederek QRS'i genişletir ve ileri evrede P dalgası kaybı ile diyastolik arreste yol açar.

---

### ÇİFT 95 (Benzerlik: 0.76)

**Soru 1 (ID: 463fd1d4-31c3-448c-a9a8-b3f3757f4fda)**
Soru Kökü: Renin-Anjiyotensin-Aldosteron sistemi (RAAS) kan basıncı kontrolünde majör rol oynar. Aşağıdakilerden hangisi Anjiyotensin II'nin fizyolojik hedeflerinden biri **değildir**?
Doğru Şık (C): Nörohipofizden Antidiüretik Hormon (ADH) salınımını baskılamak
Açıklama: Anjiyotensin II hacim ve basıncı artırmaya odaklı bir hormondur. Bu amaçla nörohipofizden ADH (vazopressin) salınımını baskılamaz, aksine UYARIR. ADH böbreklerden su tutulumunu sağlayarak kan hacmini destekler. Ayrıca aldosteron salgılatır, doğrudan güçlü vazokonstriksiyon yapar ve susama merkezini stimüle eder.

**Soru 2 (ID: 5dfadd27-95e6-4305-b7e3-c11fb8898f1d)**
Soru Kökü: Renin-Anjiyotensin-Aldosteron sisteminin (RAAS) temel efektör molekülü olan Anjiyotensin II'nin otonomik ve renal sistemler üzerindeki etkileriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Böbrek proksimal tübüllerinde sodyum geri emilimini azaltarak şiddetli natriürez yapar.
Açıklama: Anjiyotensin II natriürez (sodyum atılımı) yapmaz; aksine proksimal tübüllerdeki Na+-H+ değiştiricisini (NHE3) uyararak sodyum ve suyun geri emilimini (reabsorbsiyon) güçlü bir şekilde artırır. Aldosteron sekresyonunu ve ADH salınımını uyararak kan hacmini muhafaza eder. Hem damar tonusunu hem de intravasküler volümü eş zamanlı artırarak kan basıncını yükseltir.

---

### ÇİFT 96 (Benzerlik: 0.76)

**Soru 1 (ID: 9499befd-696d-47f6-b1b6-c01c05760685)**
Soru Kökü: Hipertansiyon tedavisi için Anjiyotensin Dönüştürücü Enzim (ACE) inhibitörü (örn: Enalapril) kullanan hastalarda, ilacın bırakılmasına neden olabilen inatçı kuru öksürük yan etkisinin farmakolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Kininaz II enzimi inhibisyonuna bağlı bradikinin yıkımının azalması
Açıklama: ACE enzimi aynı zamanda 'kininaz II' olarak bilinir ve vazodilatatör/inflamatuar bir peptid olan bradikinini parçalayarak etkisizleştirir. ACE inhibitörleri kullanıldığında bradikinin yıkılamaz ve özellikle akciğerlerde birikerek lokal inflamasyon, bronkospazm ve inatçı kuru öksürük gibi yan etkilere neden olur. Bu durum, ilacın Angiotensin II oluşumunu bloke etme ana etkisinden bağımsız bir sonuçtur.

**Soru 2 (ID: b2e212b2-6b39-4a63-8b2c-e4a8f7b3c469)**
Soru Kökü: 60 yaşında hipertansiyon hastası, yeni başlanan antihipertansif tedavi sonrası inatçı kuru öksürük şikayetiyle başvuruyor. Bu hastanın tedavisinde kullanılan ilacın mekanizması göz önüne alındığında, öksürüğe neden olan inflamatuar maddenin yıkımını engelleyen enzim aşağıdakilerden hangisidir?
Doğru Şık (C): Kininaz II
Açıklama: Anjiyotensin dönüştürücü enzim (ACE) inhibitörleri (kaptopril vb.), aynı zamanda Kininaz II enzimini bloke ederek bradikinin yıkımını engellerler. Dokularda, özellikle solunum yollarında biriken bradikinin inflamatuar bir medyatör olarak inatçı kuru öksürüğe neden olur. Bu spesifik yan etki ACE inhibitörlerinin ayırıcı özelliğidir.

---

### ÇİFT 97 (Benzerlik: 0.76)

**Soru 1 (ID: 7b8b81ed-8b45-42c1-8025-d99fe1619b3e)**
Soru Kökü: Altmış yaşında kadın hasta, eforla gelen nefes darlığı şikayetiyle kardiyolojiye başvuruyor. Kalp yetmezliği teşhisi konulan hastaya miyokard içi cAMP düzeyini artıran pozitif inotropik bir ajan başlanıyor. Sempatik uyarının kalpteki etkisini taklit eden bu yolda, protein kinaz-A aracılığıyla fosforile edilerek SERCA'nın hızlanmasını ve diyastol süresinin kısalmasını sağlayan modülatör molekül aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfolamban
Açıklama: Fosfolamban (PLB), defosforile haldeyken SERCA pompasını inhibe eden kritik bir düzenleyicidir. Beta-1 uyarısı ile PKA aktive olduğunda fosfolamban fosforile edilir, engeli kalkar ve SERCA hızla kalsiyumu SR içine toplar; böylece kalp hem çok daha kısa sürede gevşer hem de bir sonraki atımda kullanılacak kalsiyum rezervi artar. Ryanodin reseptörü kalsiyumu hücre içine salan kapıdır, geri alımını değil.

**Soru 2 (ID: 95871c12-020b-4640-8f3e-0a9af2316391)**
Soru Kökü: Efor testi sırasında sempatik sinir sistemi aktive olan hastada kalp atım hızı artmasına rağmen diyastol süresi kısalır, ancak ventrikül gevşemesi hızlanarak kalbin doluşu telafi edilir. Protein kinaz-A aracılığıyla fosforile edilerek SERCA'nın daha hızlı çalışmasına ve miyokardın çok kısa sürede gevşemesine olanak sağlayan protein aşağıdakilerden hangisidir?
Doğru Şık (E): Fosfolamban
Açıklama: Fosfolamban (PLB), defosforile haldeyken SERCA pompasını inhibe eden bir regülatör proteindir. Sempatik uyarım sonucu Beta-1 reseptörleri üzerinden PKA aktive olur ve fosfolambanı fosforile eder. Bu durum inhibisyonu kaldırır, SERCA hızlanır ve kalsiyum hızla SR'ye depolanarak miyokardın gevşemesi (lusitropik etki) hızlandırılır.

---

### ÇİFT 98 (Benzerlik: 0.76)

**Soru 1 (ID: 36d9fa0c-2445-44d8-a68d-66b8557ba39d)**
Soru Kökü: Altmış beş yaşında erkek hastada akut kan basıncı artışı (hipertansif kriz) gelişmiştir. Karotis sinüsü ve aort arkındaki baroreseptörler bu gerimi algılayarak beyin sapındaki NTS (nükleus traktus solitarius) bölgesini uyarır. Bedeni korumaya yönelik bu refleks arkında, kan basıncını düşürmek için eferent kolda aşağıdaki mekanizmalardan hangisi gerçekleşir?
Doğru Şık (B): Vazomotor merkezdeki vazokonstriktör alanın inhibe edilerek damarların genişletilmesi
Açıklama: Basınç yükseldiğinde baroreseptör gerimi artar ve uyarılar NTS üzerinden vazomotor merkeze ulaşır. NTS, vazodilatatör alanı aktif hale getirip, damarları büzen sempatik vazokonstriktör alanı inhibe eder. Bu durum periferik direnci düşürür. Eş zamanlı olarak vagus üzerinden kalp hızı da düşürülür (parasempatik aktivite artar, baskılanmaz). Böylece arteryel basınç regüle edilir.

**Soru 2 (ID: c905e6ea-3ff2-4a6b-83c5-f8dbd31387d2)**
Soru Kökü: Akut masif kan kaybı yaşayan bir hastada, düşen sistemik kan basıncını düzeltmek için devreye giren baroreseptör refleksi sırasında medulla oblangatadaki NTS (Nükleus Traktus Solitaryus) üzerinden gelişen efferent nöral yanıt aşağıdakilerden hangisidir?
Doğru Şık (A): Kardiyak vagal inhibisyon ve sempatik alanın aktivasyonu
Açıklama: Kan basıncı düştüğünde karotid sinüs baroreseptörlerindeki gerim azalır ve NTS'ye giden sinyal frekansı düşer. NTS uyarılamayınca, vazodilatatör (parasempatik) alanı baskılayan sinyaller ortadan kalkar; vagal tonus düşer (kardiyak vagal inhibisyon) ve baskıdan kurtulan vazokonstriktör (sempatik) alan güçlü deşarjlar yaparak kalp hızını ve periferik direnci artırır.

---

### ÇİFT 99 (Benzerlik: 0.76)

**Soru 1 (ID: 3ab945ee-645d-4b94-9f80-8cb9334fbdbf)**
Soru Kökü: Miyokard histolojisi incelenirken hücrelerin uç uca geldikleri bölgelerde özelleşmiş hücresel bağlantılar dikkati çekmektedir. Kalp kası hücrelerini mekanik ve elektriksel olarak birbirine bağlayan bu özgün yapı aşağıdakilerden hangisidir?
Doğru Şık (E): İnterkale disk
Açıklama: İnterkale diskler (disci intercalares), yalnızca kalp kasına özgü olan ve miyositleri uç uca bağlayan spesifik kompleks yapılardır. İçerdikleri desmozomlar mekanik dayanıklılık sağlarken, gap junctionlar elektriksel uyarının doğrudan geçişini sağlar. Z çizgisi ve sarkomer iskelet kasında da ortaktır.

**Soru 2 (ID: 99d8cc18-89bf-4ed6-9ed2-259a99309b70)**
Soru Kökü: Kırk yaşında erkek hastanın EKG'sinde atriyumların düzenli ve senkronize bir şekilde kasıldığı izlenmektedir. Kalp kası hücrelerinde elektriksel uyarının bir hücreden diğerine dirençsiz ve son derece hızlı geçerek miyokardın bir sinsityum gibi aynı anda kasılmasını sağlayan hücresel bağlantı türü aşağıdakilerden hangisidir?
Doğru Şık (A): Gap junction
Açıklama: Gap junctionlar (oluklu bağlantılar), interkale disklerin içinde yer alan ve iyonların hücreler arası doğrudan geçişine izin veren düşük dirençli elektriksel kanallardır. Bu yapı kalbin tüm hücrelerinin aynı anda (sinsityal) uyarılıp kasılmasını sağlar. Desmozomlar ise sadece mekanik tutunmadan sorumludur.

---

### ÇİFT 100 (Benzerlik: 0.76)

**Soru 1 (ID: 251fbb7c-7f69-447d-a9d2-4a9584a259e0)**
Soru Kökü: Ailesel bayılma nöbetleri araştırılan genç hastaya 'Uzun QT Sendromu' tanısı konulmuştur. Bu hastalarda repolarizasyon fazının (Faz 3) uzamasına bağlı hücrenin yeniden kolay uyarılabilir hale gelmesi, klinikte 'Torsades de Pointes' adı verilen polimorfik ventriküler taşikardiye zemin hazırlar. Bu patolojiye yol açan hücresel iyon kanalı mutasyonu aşağıdakilerden hangisini doğrudan etkiler?
Doğru Şık (E): Voltaj bağımlı potasyum kanalları
Açıklama: QT aralığı miyokard aksiyon potansiyeli süresine eşittir. Aksiyon potansiyelinin Faz 3'ünü (repolarizasyon) hücre dışına potasyum (K+) çıkışı sağlar. Uzun QT sendromunda potasyum kanallarındaki genetik mutasyonlar nedeniyle repolarizasyon çok yavaşlar. Bu uzama periyodunda hücrenin erken uyarılması 'early afterdepolarization' mekanizmasıyla ölümcül aritmileri (Torsades de Pointes) tetikler.

**Soru 2 (ID: e3cb8ba5-c9ee-48ee-8bb3-a8428a74f6f4)**
Soru Kökü: Yirmi beş yaşında senkop öyküsüyle acil servise getirilen kadın hastanın EKG'sinde polimorfik ventriküler taşikardi (Torsades de Pointes) saptanıyor. Uzun QT sendromu tanısı alan bu hastada aritmiyi başlatan temel hücresel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Repolarizasyonun uzamasına bağlı gelişen erken artçı depolarizasyon (early after-depolarization)
Açıklama: Uzun QT sendromunda potasyum kanallarındaki disfonksiyon nedeniyle repolarizasyon fazı (faz 3) uzar ve hücre dinlenim potansiyeline geç döner. Bu uzamış süreçte kalsiyum kanallarının yeniden açılmasıyla oluşan erken artçı depolarizasyonlar (EAD), Torsades de Pointes aritmisini tetikler. İskemik reentry miyokard enfarktüsü sonrası VT'nin ana mekanizmasıdır, ancak Torsades'in patogenezi EAD'dir. Uzun QT'de ileti yavaşlaması değil, aksiyon potansiyeli süresinin uzaması söz konusudur.

---

### ÇİFT 101 (Benzerlik: 0.76)

**Soru 1 (ID: 4a1a25be-a26c-4ade-9077-be994811501f)**
Soru Kökü: İntraventriküler septumun depolarizasyonu ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (C): Depolarizasyon soldan sağa doğrudur ve V6 derivasyonunda negatif q dalgası oluşturur.
Açıklama: İlk depolarize olan ventrikül segmenti interventriküler septumdur ve depolarizasyon yönü soldan sağa doğrudur. Bu vektörel yönelim, sağda yer alan V1 derivasyonuna yaklaştığı için orada pozitif r dalgası, solda yer alan V6 derivasyonundan uzaklaştığı için orada negatif (ilk defleksiyon olan) q dalgası oluşturur. Septum her iki daldan gelen uyarılarla eşzamanlı aktive olur ancak kitle sol ağırlıklıdır.

**Soru 2 (ID: e9a636ec-4ef7-4666-86a4-e71caf491870)**
Soru Kökü: Kalpte depolarizasyon dalgasının ventriküllere yayılım süreci incelendiğinde; I. Anatomik olarak soldan sağa doğru gerçekleşir. II. Göğüs duvarında V1 derivasyonuna yaklaştığı için pozitif bir r dalgası oluşturur. III. V6 derivasyonundan elektriksel olarak uzaklaştığı için negatif bir q dalgası oluşturur. İnterventriküler septumun depolarizasyonu ile ilgili yukarıdaki ifadelerden hangileri doğrudur?
Doğru Şık (C): I, II ve III
Açıklama: İnterventriküler septum ilk depolarize olan ventrikül dokusudur ve depolarizasyon yönü sol dalın septal dalcıkları erken ateşlediği için soldan sağa doğrudur (I). Bu vektör göğüs sağındaki V1'e yaklaştığı için pozitif (r), solundaki V6'dan uzaklaştığı için negatif (q) bir ilk dalga yaratır (II ve III). Tüm öncüller elektrofizyolojik olarak doğrudur.

---

### ÇİFT 102 (Benzerlik: 0.76)

**Soru 1 (ID: 36c888a1-1dcc-4cd6-b616-475993a3b23c)**
Soru Kökü: Altmış beş yaşında erkek hasta, genel halsizlik ve çarpıntı şikayetiyle acil servise başvuruyor. Fizik muayenesinde bradikardi saptanan hastanın laboratuvar incelemesinde serum potasyum düzeyi 7.2 mEq/L (Yüksek) bulunuyor. Bu hastanın EKG'sinde aşağıdaki bulgulardan hangisinin görülmesi **beklenmez**?
Doğru Şık (D): QT mesafesinde uzama
Açıklama: Hiperkalemide hücre dinlenim membran potansiyeli düşer (hipopolarizasyon) ve hücre repolarizasyonu kolaylaştığı için T dalgası sivrileşir, aksiyon potansiyelinin süresi ve dolayısıyla QT mesafesi kısalır. Ancak sodyum kanalları inaktive olduğu için depolarizasyon yavaşlar ve QRS genişler, yüksek dozlarda P dalgası kaybolur. QT mesafesinin uzaması hiperkalemi değil, hipokalsemi veya hipokalemi bulgusudur.

**Soru 2 (ID: e7434e32-5fb0-4eb0-b169-622bef19fd5b)**
Soru Kökü: 45 yaşında kadın hasta yorgunluk ve kas güçsüzlüğü şikayetiyle başvuruyor. Laboratuvar incelemesinde serum kalsiyum düzeyi 14 mg/dL (N: 8.5-10.5) olarak ölçülüyor. Çekilen elektrokardiyografide (EKG) aşağıdaki bulgulardan hangisinin görülmesi en olasıdır?
Doğru Şık (E): QT mesafesinde kısalma
Açıklama: Hiperkalsemi durumunda hücre dışından miyokard hücresine kalsiyum girişi hızlanır ve artar, bu da aksiyon potansiyelindeki plato (faz 2) süresini kısaltır. Hipokalsemide plato süresinin uzamasına bağlı olarak ST ve QT mesafesi uzarken, hiperkalsemide bu mesafe doğrudan kısalır. U dalgasında belirginleşme ise kalsiyumdan ziyade hipopotasemiye özgü klasik bir bulgudur.

---

### ÇİFT 103 (Benzerlik: 0.76)

**Soru 1 (ID: 22cd5530-cdc4-4c3f-b999-08fd73656243)**
Soru Kökü: Aşağıdaki mekanizmalardan hangisi kan basıncındaki azalma sonrası aktive olan renin-anjiyotensin-aldosteron sisteminde, anjiyotensin-II'nin kan basıncını yükseltici doğrudan veya dolaylı etkilerinden biri **değildir**?
Doğru Şık (C): Atriyum endokardından natriüretik peptid salınımını uyarması
Açıklama: Anjiyotensin-II; aldosteron salınımı, vazokonstriksiyon, sempatik aktivasyon, ADH salınımı ve proksimal tübülde sodyum geri emilimini artırarak kan basıncını yükseltir. Atriyum endokardından salınan ANP (Atriyal Natriüretik Peptid) ise hipervolemiye bağlı kalp duvarının gerilmesi ile salgılanır ve anjiyotensin-II'nin etkilerini zayıflatarak kan basıncını düşürür. Bu nedenle ANP salınımı anjiyotensin-II'nin sistemik bir etkisi değil, ona karşı çalışan fizyolojik bir fren mekanizmasıdır.

**Soru 2 (ID: 463fd1d4-31c3-448c-a9a8-b3f3757f4fda)**
Soru Kökü: Renin-Anjiyotensin-Aldosteron sistemi (RAAS) kan basıncı kontrolünde majör rol oynar. Aşağıdakilerden hangisi Anjiyotensin II'nin fizyolojik hedeflerinden biri **değildir**?
Doğru Şık (C): Nörohipofizden Antidiüretik Hormon (ADH) salınımını baskılamak
Açıklama: Anjiyotensin II hacim ve basıncı artırmaya odaklı bir hormondur. Bu amaçla nörohipofizden ADH (vazopressin) salınımını baskılamaz, aksine UYARIR. ADH böbreklerden su tutulumunu sağlayarak kan hacmini destekler. Ayrıca aldosteron salgılatır, doğrudan güçlü vazokonstriksiyon yapar ve susama merkezini stimüle eder.

---

### ÇİFT 104 (Benzerlik: 0.76)

**Soru 1 (ID: 20f31447-f3c3-443c-a995-be461d5fca31)**
Soru Kökü: On iki yaşında tamamen sağlıklı bir erkek çocuğun rutin kardiyovasküler muayenesinde, diyastolün hemen başında zayıf ve düşük frekanslı bir üçüncü kalp sesi (S3) duyuluyor. Bu fizyolojik sesin oluşum mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): AV kapakların açılmasıyla atriyumdaki kanın ventriküle hızla akarak duvar titreşimi yaratması
Açıklama: Üçüncü kalp sesi (S3), diyastolün ilk 1/3'lük kısmı olan hızlı doluş evresinde AV kapakların açılmasıyla kanın atriyumlardan ventriküllere gürültüyle akması ve ventrikül duvarında oluşturduğu titreşim nedeniyle duyulur. Bu ses çocuklarda ve gençlerde yüksek esneklik nedeniyle fizyolojiktir ancak yaşlılarda kalp yetmezliğini gösterir. Atriyum sistolünde oluşan ses S4, semilüner kapak asenkron kapanması ise S2 çiftleşmesidir.

**Soru 2 (ID: f21347d9-5627-4b42-921d-2e2d64041233)**
Soru Kökü: Oskültasyonda diyastolün ilk üçte birlik bölümünün sonunda duyulan ve kanın atriyumlardan ventriküle gürültüyle akarken miyokard duvarında oluşturduğu titreşimleri temsil eden 3. kalp sesinin (S3) jeneratör mekanizması ile diyastol sonunda duyulan presistolik 4. kalp sesinin (S4) kaynağı aşağıdakilerden hangisinde sırasıyla doğru eşleştirilmiştir?
Doğru Şık (A): Hızlı doluş dönemi sonu akım çarpması – Atriyum sistolünün ventrikül duvarına etkisi
Açıklama: S3, ventrikül içi basıncın düşmesiyle atriyumdaki kanın A-V kapakları açarak hızla ventriküle aktığı (hızlı doluş dönemi) ve duvarlara çarptığı evrenin sonunda duyulur. S4 ise diyastolün en sonunda, atriyum sistolü ile pompalanan son %30'luk kanın ventriküle girişindeki titreşimdir ve presistolik bir sestir. Aort kapak kapanması S2'yi, AV kapak kapanması S1'i oluşturur.

---

### ÇİFT 105 (Benzerlik: 0.76)

**Soru 1 (ID: 3f6744c6-665f-4d22-a6e6-a9edb98b8420)**
Soru Kökü: Bir organın artan metabolik ihtiyacına karşılık olarak, o bölgeye giden kan akımını artıran mikrosirkülasyon yapılarına prekapiller sfinkterler denir. Aşağıdakilerden hangisi prekapiller sfinkterleri dilate ederek doku kan akımını artıran lokal faktörlerden biri **değildir**?
Doğru Şık (C): Vazomotor merkez kaynaklı azalmış sempatik sinir deşarjı
Açıklama: Prekapiller sfinkterlerin düz kaslarında otonomik (sempatik veya parasempatik) sinir inervasyonu YOKTUR. Bu sfinkterlerin çapını tamamen doku lokalinde üretilen metabolitler (adenozin, CO2, laktat, potasyum) ve dokudaki gaz gerilimleri (hipoksi) belirler. Vazomotor nöronal etkiler daha proksimaldeki arteriyoller üzerinde etkilidir, sfinkterler sadece lokal otoregülasyonla çalışır.

**Soru 2 (ID: 59b5f819-d33c-4211-be16-d566de3b661a)**
Soru Kökü: Doku lokal kan akımının düzenlenmesinde kilit rol oynayan prekapiller sfinkterlerin otoregülasyon dinamikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Güçlü sempatik sinir inervasyonları sayesinde sistemik vazokonstriksiyona katılırlar.
Açıklama: Prekapiller sfinkterlerin düz kaslarında otonom (sempatik) sinirsel inervasyon yoktur. Kasılıp gevşemeleri tamamen dokunun lokal metabolik faktörlerine (hipoksi, laktat, CO2, adenozin artışı) bağlı olarak gelişen otoregülasyon ile sağlanır. Sempatik kontrol, bu seviyeden daha geride olan arteriyoller üzerinde etkilidir.

---

### ÇİFT 106 (Benzerlik: 0.75)

**Soru 1 (ID: 1f2447c6-667b-4312-a1bb-242c895cb2d0)**
Soru Kökü: Kalp döngüsünün son 1/3'lük doluş döneminde, atriyum sistolüne bağlı olarak kanın ventriküle çarpmasıyla ortaya çıkan ve normalde sağlıklı erişkinde duyulmayan presistolik kalp sesi aşağıdakilerden hangisidir?
Doğru Şık (B): S4
Açıklama: S4, diyastolün en sonunda atriyumların aktif kasılması (sistolü) sırasında kanın sertleşmiş veya hipertrofik bir ventriküle çarpması sonucu oluşan presistolik bir sestir. S3 ise diyastolün ilk 1/3'lük dönemindeki pasif hızlı doluş evresinde ortaya çıkar. Dolayısıyla, kalp seslerinin döngüdeki yeri doğrudan ventrikül duvarının kompliyansı ve doluş hızına işaret eder.

**Soru 2 (ID: 8a2be166-5523-4a61-a3af-7d80a680e55d)**
Soru Kökü: Kalp döngüsü sırasında diyastolün başlangıcı olan izovolümetrik gevşeme evresinde duyulan ve aort ile pulmoner kapakların kapanmasıyla oluşan yüksek frekanslı kalp sesi aşağıdakilerden hangisidir?
Doğru Şık (A): S2
Açıklama: S2 kalp sesi, ventriküllerin kasılmayı bitirip gevşemeye başladığı izovolümetrik gevşeme evresinde semilüner kapakların kapanmasıyla oluşur. S1 ise atriyoventriküler kapakların kapanmasıyla sistolün başlangıcında duyulur ve S2'ye kıyasla daha uzun sürelidir. Bu seslerin ayrımı, ventriküler doluş öncesi ve ejeksiyon öncesi evrelerin belirlenmesinde kritik rol oynar.

---

### ÇİFT 107 (Benzerlik: 0.75)

**Soru 1 (ID: 62d9b259-badd-4ce5-8d59-8c6531136e6a)**
Soru Kökü: Dolaşımda bulunan katekolaminlerden adrenalin ve noradrenalin kıyaslandığında, adrenalin için aşağıdakilerden hangisi **söylenemez**?
Doğru Şık (A): Kalbin kasılma kuvvetini noradrenaline göre daha zayıf oranda artırır.
Açıklama: Adrenalin, Beta-1 reseptörleri üzerinden kalbin kasılma kuvvetini (pozitif inotropik etki) noradrenaline göre çok daha fazla artırır. Noradrenalin ise ağırlıklı olarak alfa reseptörler üzerinden güçlü sistemik vazokonstriksiyon yaparak total periferik direnci yükseltir. Adrenalinin iskelet kası vazodilatasyonu ve metabolizma artırıcı yeteneği onu noradrenalinden ayıran temel klinik farklardır.

**Soru 2 (ID: a090462e-7089-432a-b614-56ba56337702)**
Soru Kökü: Adrenalin ve noradrenalin vasküler yatakta benzer etkiler göstermesine rağmen, adrenalinin noradrenaline göre sistemik hemodinami üzerinde farklılaştığı spesifik bir etki alanı vardır. Aşağıdakilerden hangisi adrenalinin noradrenaline kıyasla oluşturduğu bu farklılığın nedenidir?
Doğru Şık (B): Beta-2 reseptörlerini uyararak iskelet kası damarlarında vazodilatasyon yapması
Açıklama: Noradrenalin ağırlıklı olarak alfa reseptörleri üzerinden yaygın vazokonstriksiyon yaparken, adrenalin kalp (beta-1) ve özellikle iskelet kası ile karaciğerdeki damarlarda bulunan beta-2 reseptörlerini uyararak vazodilatasyona neden olur. Bu durum "savaş ya da kaç" yanıtında aktif kasların kanlanmasını artırır; noradrenalin ise periferik direnci genel olarak çok daha fazla yükseltir.

---

### ÇİFT 108 (Benzerlik: 0.75)

**Soru 1 (ID: d50eae4a-2b63-4e63-b85f-cb59de033254)**
Soru Kökü: Vagal sinir uyarımı ile salınan asetilkolin, miyokardiyal otonom hücrelerde etki göstererek kalp hızını yavaşlatır. Bu negatif kronotropik etkiyi başlatan spesifik iyonik ve reseptöryal etkileşim aşağıdakilerden hangisidir?
Doğru Şık (A): M2 reseptörü aracılığıyla potasyum kanallarının açılması
Açıklama: Asetilkolin, SA nod ve AV nodda lokalize olan muskarinik-2 (M2) reseptörlerine bağlanır. İnhibitör G proteinleri (Gi) üzerinden cAMP'yi düşürür ve belirli potasyum kanallarını (K-ACh) açarak hücreden potasyum çıkışını artırır. Oluşan hiperpolarizasyon pacemaker potansiyelin (Faz 4) eşik değere ulaşmasını geciktirerek negatif kronotropik etki yaratır.

**Soru 2 (ID: fcc886bc-e2a1-41bd-ae86-2df431215097)**
Soru Kökü: Kalpte parasempatik (vagal) uyarımın oluşturduğu negatif inotropik etki ile ilgili; I. Asetilkolinin miyokard hücrelerindeki M2 reseptörlerine bağlanmasıyla başlar. II. Aksiyon potansiyelinin platosu sırasında atriyum hücresi içine kalsiyum girişini azaltır. III. Ventrikül miyokardında da atriyumla aynı derecede güçlü bir kasılma zayıflamasına neden olur. ifadelerinden hangileri doğrudur?
Doğru Şık (A): I ve II
Açıklama: Parasempatik uyarım asetilkolin aracılığıyla M2 reseptörlerini aktive eder ve plato fazında kalsiyum girişini azaltarak atriyumların kasılma gücünü (inotropi) düşürür. Ventriküllerdeki parasempatik etki ise yok denecek kadar sınırlıdır, bu nedenle belirgin bir negatif inotropik yanıt gözlenmez. Diğer güçlü çeldirici olan III. öncül, otonomik sinir sisteminin kalpteki anatomik inervasyon farkını göz ardı ettiği için yanlıştır.

---

### ÇİFT 109 (Benzerlik: 0.75)

**Soru 1 (ID: 2caf7778-05f5-4063-9f56-415efdb46f8d)**
Soru Kökü: Kan basıncının uzun süreli düzenlenmesinde rol oynayan ve hipovolemi anında aktive olan Renin-Anjiyotensin-Aldosteron Sistemi'nde (RAAS); dolaşımdaki inaktif Anjiyotensin I molekülünü güçlü bir vazokonstriktör olan aktif Anjiyotensin II formuna dönüştüren ACE (Anjiyotensin Dönüştürücü Enzim) temel olarak hangi dokunun kapiller yatağında sentezlenir?
Doğru Şık (D): Akciğer (pulmoner) endoteli
Açıklama: RAAS mekanizmasında karaciğer kökenli anjiyotensinojen, böbrek kökenli renin ile Anjiyotensin I'e dönüşür. Ancak sistemik dolaşımdaki asıl biyolojik reaksiyonu yürütecek olan Anjiyotensin II, pulmoner kapiller endotel yüzeyinde yüksek oranda bulunan ACE enzimi tarafından oluşturulur. ACE inhibitörleri, akciğerde aynı zamanda kinin yıkımını da durdurduğu için bradikinin birikimine bağlı kronik öksürük yaparlar.

**Soru 2 (ID: f5060019-aabc-4c2f-89ca-c4ca74994679)**
Soru Kökü: Renin-Anjiyotensin-Aldosteron sistemi içinde rol alan ve Anjiotensin I'i Anjiotensin II'ye dönüştüren ACE enzimi ile ilgili aşağıdakilerden hangisi doğrudur?
Doğru Şık (D): Aynı zamanda bradikinini yıkan kininaz II enzimidir.
Açıklama: ACE (Anjiotensin dönüştürücü enzim) en yoğun olarak pulmoner kapiller endotelinde bulunur ve sadece anjiotensin I'i II'ye çevirmekle kalmaz, inflamatuar bir peptid olan bradikinini yıkan kininaz II enzimi olarak da işlev görür. ACE inhibitörleri (örn: kaptopril) kullanıldığında bradikinin yıkılamaz, birikir ve bu durum hastalarda kuru öksürük yan etkisine neden olur.

---

### ÇİFT 110 (Benzerlik: 0.75)

**Soru 1 (ID: c7fc30ee-6b35-486b-b9e8-3411e38f095e)**
Soru Kökü: Kalp seslerinin oluşum mekanizmaları incelendiğinde, diyastolün ilk üçte birlik döneminin sonunda, kanın ventriküllere gürültüyle akarken neden olduğu titreşimlerin oluşturduğu ve gençlerde fizyolojik olarak duyulabilen kalp sesi aşağıdakilerden hangisidir?
Doğru Şık (B): S3
Açıklama: S3, atriyoventriküler kapakların açılmasının ardından pasif hızlı ventriküler dolum sırasında kanın ventrikül duvarına çarpmasıyla oluşan sestir. S1 ve S2 kapak kapanma sesleri iken, S4 diyastol sonunda aktif atriyum sistolü sırasında oluşan patolojik veya fizyolojik sestir.

**Soru 2 (ID: f21347d9-5627-4b42-921d-2e2d64041233)**
Soru Kökü: Oskültasyonda diyastolün ilk üçte birlik bölümünün sonunda duyulan ve kanın atriyumlardan ventriküle gürültüyle akarken miyokard duvarında oluşturduğu titreşimleri temsil eden 3. kalp sesinin (S3) jeneratör mekanizması ile diyastol sonunda duyulan presistolik 4. kalp sesinin (S4) kaynağı aşağıdakilerden hangisinde sırasıyla doğru eşleştirilmiştir?
Doğru Şık (A): Hızlı doluş dönemi sonu akım çarpması – Atriyum sistolünün ventrikül duvarına etkisi
Açıklama: S3, ventrikül içi basıncın düşmesiyle atriyumdaki kanın A-V kapakları açarak hızla ventriküle aktığı (hızlı doluş dönemi) ve duvarlara çarptığı evrenin sonunda duyulur. S4 ise diyastolün en sonunda, atriyum sistolü ile pompalanan son %30'luk kanın ventriküle girişindeki titreşimdir ve presistolik bir sestir. Aort kapak kapanması S2'yi, AV kapak kapanması S1'i oluşturur.

---

### ÇİFT 111 (Benzerlik: 0.75)

**Soru 1 (ID: 7787c88a-9883-41ea-bc36-c717d1b734a4)**
Soru Kökü: Boyun venöz dolgunluğu olan 65 yaşında bir hastanın juguler venöz nabız trasesi incelenmektedir. Trasedeki 'c' dalgasının oluşum mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): İzovolümetrik kontraksiyon evresinde triküspit kapağın atriyuma doğru bombeleşmesi
Açıklama: Juguler venöz trasede 'c' dalgası, ventrikül sistolünün başlangıcında (izovolümetrik kontraksiyon) hızla artan ventrikül basıncının, kapalı olan triküspit kapağı sağ atriyuma doğru itmesi (bombeleştirmesi) sonucu atriyum basıncında oluşan geçici artışı yansıtır. Atriyum kasılması 'a' dalgasını, venöz doluş 'v' dalgasını, atriyumun boşalması ise 'y' inişini oluşturur.

**Soru 2 (ID: f00ba902-c62f-48e1-8218-c0500e9be315)**
Soru Kökü: Kardiyak siklus sırasında izovolumetrik kontraksiyon evresinde sağ ventrikül basıncının hızla artmasıyla kapalı olan triküspit kapağın atriyuma doğru esneyerek bombeleşmesi, juguler venöz trasede hangi dalga ile temsil edilir?
Doğru Şık (B): c dalgası
Açıklama: Juguler trasedeki 'c dalgası', QRS sonrasında ventriküllerin izovolumetrik olarak kasıldığı evrede oluşan basıncın, AV kapağı atriyum içine doğru mekanik olarak itmesi (bombeleşme) sonucunda atriyal basıncın anlık artışıyla oluşur. a dalgası atriyal sistolü, v dalgası kapalı kapağa karşı venöz dönüşle doluşu, y inişi ise kapağın açılıp atriyumun ventriküle boşaldığı evreyi simgeler.

---

### ÇİFT 112 (Benzerlik: 0.75)

**Soru 1 (ID: 3f6744c6-665f-4d22-a6e6-a9edb98b8420)**
Soru Kökü: Bir organın artan metabolik ihtiyacına karşılık olarak, o bölgeye giden kan akımını artıran mikrosirkülasyon yapılarına prekapiller sfinkterler denir. Aşağıdakilerden hangisi prekapiller sfinkterleri dilate ederek doku kan akımını artıran lokal faktörlerden biri **değildir**?
Doğru Şık (C): Vazomotor merkez kaynaklı azalmış sempatik sinir deşarjı
Açıklama: Prekapiller sfinkterlerin düz kaslarında otonomik (sempatik veya parasempatik) sinir inervasyonu YOKTUR. Bu sfinkterlerin çapını tamamen doku lokalinde üretilen metabolitler (adenozin, CO2, laktat, potasyum) ve dokudaki gaz gerilimleri (hipoksi) belirler. Vazomotor nöronal etkiler daha proksimaldeki arteriyoller üzerinde etkilidir, sfinkterler sadece lokal otoregülasyonla çalışır.

**Soru 2 (ID: 6d4e5fec-e67b-4932-87a1-6728ab9021a9)**
Soru Kökü: Doku kan akımının otoregülasyonunu sağlayan prekapiller sfinkterler ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Güçlü bir sempatik sinir inervasyonu ile merkezi olarak kontrol edilirler.
Açıklama: Prekapiller sfinkterlerin düz kaslarında sinirsel inervasyon (sempatik dahil) yoktur. Bu sfinkterler tamamen lokal doku faktörlerine (O2, CO2, H+, laktat, adenozin) bağlı olarak çalışır ve otoregülasyonu sağlarlar. Arteriyollerde sinir inervasyonu varken, prekapiller sfinkterler sadece metabolitlerle kontrol edilir.

---

### ÇİFT 113 (Benzerlik: 0.75)

**Soru 1 (ID: 0f9dd723-587f-49ed-8766-3f40937d2a43)**
Soru Kökü: Elli beş yaşındaki hasta şiddetli baş ağrısı, fışkırır tarzda kusma ve bilinç bulanıklığı ile acile getiriliyor. Muayenesinde kan basıncı 190/110 mmHg, nabzı 45/dk (bradikardi) ve solunumu düzensiz bulunuyor. Çekilen beyin tomografisinde kafa içi basıncını belirgin olarak artıran intrakraniyal kanama saptanıyor. Bu hastadaki fizyolojik yanıt paterni aşağıdakilerden hangisidir?
Doğru Şık (B): Cushing triadı
Açıklama: Kafa içi basıncın (KİBAS) artması beyin sapı kan akımını bozar ve MSS iskemik cevabını tetikler. Bu durum güçlü bir sempatik deşarj yaratarak şiddetli hipertansiyon oluşturur. Arteriyel basıncın bu denli yükselmesi ise baroreseptörleri uyararak refleks bradikardi yaratır. KİBAS, hipertansiyon ve bradikardi üçlüsüne Cushing triadı adı verilir.

**Soru 2 (ID: 42c3cc04-db6e-4372-bcf9-d11b69546f0c)**
Soru Kökü: Trafik kazası sonrası intrakraniyal basıncının (KİBAS) hızla arttığı ve buna bağlı olarak serebral iskemi geliştiği izlenen bir hastada, beyin sapındaki vazomotor merkezin uyarılmasıyla muazzam bir sempatik deşarj başlar. Serebral perfüzyonu korumaya yönelik olarak gelişen 'Cushing triadı'nda aşağıdakilerden hangisinin görülmesi **beklenmez**?
Doğru Şık (A): Taşikardi atakları
Açıklama: Cushing triadı; kafatası içindeki basıncın artışı (KİBAS), buna beyin kan akımını sağlamak için sistemik olarak yanıt veren şiddetli hipertansiyon ve bu kan basıncı yüksekliğinin baroreseptörleri uyarmasıyla gelişen refleks bradikardi üçlüsünden oluşur. İskemik MSS tepkisi kan basıncını ne pahasına olursa olsun artırırken, refleks yay vazovagal aktiviteyle kalbi yavaşlatır; bu nedenle taşikardi beklenmez.

---

### ÇİFT 114 (Benzerlik: 0.75)

**Soru 1 (ID: 529283ac-47d0-4746-b2ef-a016beb4a7ac)**
Soru Kökü: Elektrokardiyografide PR aralığının gittikçe uzadığı ve sonunda bir adet QRS kompleksinin oluşmadığı (atlandığı), AV nod patolojisine bağlı gelişen blok tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Mobitz Tip I (Wenckebach) AV blok
Açıklama: PR aralığının progresif olarak uzaması ve takibinde bir atımın bloke olması (Wenckebach fenomeni), tipik olarak Mobitz Tip I ikinci derece AV bloğun göstergesidir ve AV nod seviyesindeki bir patolojiyi yansıtır. Mobitz Tip II'de PR mesafesi sabittir ancak aniden QRS kayıpları yaşanır (His-Purkinje patolojisi). Tam blokta ise P ve QRS arasında tamamen bağımsızlık vardır.

**Soru 2 (ID: d67aa2e0-d68a-4f1d-a2e8-a49893690312)**
Soru Kökü: 62 yaşındaki kadın hastanın EKG'si incelendiğinde, PR intervalinin sabit ve normal olduğu, ancak art arda gelen 2 veya 3 P dalgasından sadece birini QRS kompleksinin takip ettiği (aralıklı QRS kaybı) görülmüştür. Mobitz tip II olarak tanımlanan bu blok tipinde lezyonun en olası lokalizasyonu aşağıdakilerden hangisidir?
Doğru Şık (D): His demeti ve Purkinje sistemi
Açıklama: İkinci derece AV bloklardan Mobitz tip II, iletinin His demeti veya Purkinje sistemi seviyesindeki organik bir patolojisine (blok) işaret eder. AV nod gövdesindeki uzamış refrakter döneme bağlı gelişen Wenckebach (Mobitz tip I) fenomeninin aksine, tip II blokta PR aralığı uzamadan aniden QRS kaybı yaşanır ve pacemaker gereksinimi yüksektir.

---

### ÇİFT 115 (Benzerlik: 0.75)

**Soru 1 (ID: 75397aeb-05d6-424f-bf54-376560f3b81f)**
Soru Kökü: Otuz beş yaşında erkek hasta, senkop (bayılma) öyküsüyle acil servise getiriliyor. EKG'de PR aralığının belirgin şekilde uzadığı ve ileti gecikmesi (negatif dromotropik etki) saptanıyor. Vagal uyarıya bağlı bu inhibisyon yanıtının oluşumunda rol oynayan otonomik reseptör ve hücresel değişim aşağıdakilerden hangisinde verilmiştir?
Doğru Şık (E): Muskarinik M2 reseptör / Potasyum çıkışında artış ile hiperpolarizasyon
Açıklama: Parasempatik vagal sistemin nörotransmitteri asetilkolindir ve SA/AV nodlarda Muskarinik M2 reseptörlerine bağlanır. Bu bağlanma, Gi proteini aracılığıyla adenilat siklazı inhibe ederken, spesifik potasyum kanallarını açarak K+ çıkışını artırır. Hücre hiperpolarize olur (negatifleşir), eşik değere ulaşması zorlaşır ve AV ileti hızı düşerek PR aralığı uzar.

**Soru 2 (ID: fec78fae-e6bb-4bea-872f-bf9fcd17aa91)**
Soru Kökü: Kırk beş yaşında erkek hastada uygulanan karotis masajı (vagal manevra) sonrası parasempatik sinir sisteminin aşırı aktivasyonuna bağlı olarak kalp hızı belirgin şekilde yavaşlamıştır. Asetilkolinin sinoatriyal nodda (SA nod) bu negatif kronotropik etkiyi oluştururken bağlandığı spesifik reseptör aşağıdakilerden hangisidir?
Doğru Şık (A): Muskarinik-2 (M2)
Açıklama: Parasempatik sinir sistemi uyarıldığında vagus sinirinden asetilkolin (ACh) salınır. ACh, kalpte özellikle SA ve AV nodlarda bulunan M2 (Muskarinik tip 2) reseptörlerine bağlanır. Bu bağlanma potasyum kanallarını açıp K+ çıkışını artırarak hücreyi hiperpolarize eder, eşik değere ulaşmayı zorlaştırarak kalp hızını yavaşlatır.

---

### ÇİFT 116 (Benzerlik: 0.75)

**Soru 1 (ID: 5eeafcbe-b955-4ff8-a9fd-7e444d4d6e6e)**
Soru Kökü: Altmış yaşında erkek hasta, ani başlayan şiddetli baş ağrısı şikayetiyle acile getiriliyor. Vital bulgularında kan basıncı 180/110 mmHg olarak ölçülüyor. Bu akut arteryel kan basıncı yükselmesi karşısında baroreseptör refleksinin vereceği fizyolojik nöral yanıt aşağıdakilerden hangisidir?
Doğru Şık (D): Vazokonstriktör alan inhibe edilir, sempatik tonus ve kalp debisi düşer.
Açıklama: Kan basıncı yükseldiğinde baroreseptörler gerilir ve NTS'ye giden uyarı frekansı artar. NTS, vazodilatatör alanı aktive ederken vazokonstriktör alanı inhibe eder. Bu da sempatik tonusun geri çekilmesine, damarların genişlemesine (direnç düşüşü) ve vagal aktivasyonla kalp debisinin düşmesine neden olarak tansiyonu normale indirir.

**Soru 2 (ID: c905e6ea-3ff2-4a6b-83c5-f8dbd31387d2)**
Soru Kökü: Akut masif kan kaybı yaşayan bir hastada, düşen sistemik kan basıncını düzeltmek için devreye giren baroreseptör refleksi sırasında medulla oblangatadaki NTS (Nükleus Traktus Solitaryus) üzerinden gelişen efferent nöral yanıt aşağıdakilerden hangisidir?
Doğru Şık (A): Kardiyak vagal inhibisyon ve sempatik alanın aktivasyonu
Açıklama: Kan basıncı düştüğünde karotid sinüs baroreseptörlerindeki gerim azalır ve NTS'ye giden sinyal frekansı düşer. NTS uyarılamayınca, vazodilatatör (parasempatik) alanı baskılayan sinyaller ortadan kalkar; vagal tonus düşer (kardiyak vagal inhibisyon) ve baskıdan kurtulan vazokonstriktör (sempatik) alan güçlü deşarjlar yaparak kalp hızını ve periferik direnci artırır.

---

### ÇİFT 117 (Benzerlik: 0.75)

**Soru 1 (ID: a7b2b7d7-c9cf-4054-92b8-fefb78b31403)**
Soru Kökü: Einthoven üçgenini temel alan standart bipolar ekstremite derivasyonlarının elektrot yerleşimleri ve oluşturdukları potansiyel farklarla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Derivasyon III: Sağ kol ile Sol bacak arasındaki potansiyel farkı ölçer.
Açıklama: Bipolar ekstremite derivasyonlarında; DI sağ kol (-) ve sol kol (+) arasını, DII sağ kol (-) ve sol bacak (+) arasını ölçer. DIII ise sol kol (-) ve sol bacak (+) arasındaki potansiyel farkı ölçer. B seçeneğinde verilen 'sağ kol - sol bacak' tanımı DII derivasyonuna aittir ve DIII için tamamen yanlıştır.

**Soru 2 (ID: d84050d9-7b6b-4278-bb80-90387a49fabf)**
Soru Kökü: Elektrokardiyografideki DI derivasyonunun elektriksel ve anatomik yerleşimi ile ilgili; I. Standart bipolar ekstremite derivasyonudur. II. Sağ kol negatif, sol kol pozitif elektrot olarak kullanılır. III. Sağ kol ile sol bacak arasındaki potansiyel farkı ölçer. ifadelerinden hangileri doğrudur?
Doğru Şık (D): I ve II
Açıklama: DI derivasyonu, sağ kolun negatif ve sol kolun pozitif olarak yerleştirildiği bipolar bir ekstremite derivasyonudur (Öncül I ve II doğru). Sağ kol ile sol bacak arasındaki potansiyel farkı ölçen derivasyon ise DII'dir (Öncül III yanlış). Bu konfigürasyon Einthoven üçgeninin yatay eksenini oluşturur.

---

