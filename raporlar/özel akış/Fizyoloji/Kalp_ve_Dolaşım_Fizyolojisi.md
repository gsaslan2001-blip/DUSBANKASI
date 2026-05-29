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

### ÇİFT 1 (Benzerlik: 0.90)

**Soru 1 (ID: 411da5d2-0edf-4329-a53c-a6a81663ca23)**
Soru Kökü: Kalp yetmezliği şüphesiyle değerlendirilen bir hastanın ekokardiyografik ölçümlerinde, sol ventrikülün diyastol sonundaki hacmi (end-diyastolik volüm) 120 mL ve sistol sonunda kasılmayı takiben kalan hacmi (end-sistolik volüm) 60 mL olarak bulunmuştur. Buna göre bu hastanın Ejeksiyon Fraksiyonu (EF) yaklaşık yüzde kaçtır?
Doğru Şık (C): 50
Açıklama: Ejeksiyon fraksiyonu (EF), bir atımda pompalanan kan hacminin (Atım Hacmi), diyastol sonu mevcut en büyük hacme oranıdır. Atım hacmi = End-diyastolik volüm (120 mL) eksi End-sistolik volüm (60 mL) = 60 mL. EF = 60 mL / 120 mL = 0.50 yani %50'dir. Sağlıklı bireylerde bu oran %58-60 civarındadır.

**Soru 2 (ID: 57b5eb6b-ff6a-4adb-86df-cf605c1820ad)**
Soru Kökü: 60 yaşındaki bir hastanın kardiyoloji polikliniğinde yapılan ekokardiyografik incelemesinde, ventriküllerin diyastol sonunda maksimum genişlediği andaki hacmi (EDV) 120 ml, sistol sonrası kalpte arta kalan hacim (ESV) ise 50 ml olarak ölçülmüştür. Bu hastanın kalbinin ejeksiyon fraksiyonu (EF) yaklaşık olarak yüzde kaçtır?
Doğru Şık (C): 58-60
Açıklama: Ejeksiyon fraksiyonu, kalbin bir atımda fırlattığı kanın (stroke volüm), kalbe dolan toplam kana (end-diyastolik volüm) oranıdır. Hastanın atım hacmi 120 - 50 = 70 ml'dir. EF = 70 / 120 işlemi yapıldığında sonuç %58.3 çıkar. Normal fizyolojik EF değerleri %58-60 civarındadır.

---

### ÇİFT 2 (Benzerlik: 0.87)

**Soru 1 (ID: 05768c1a-7bfb-4f97-bb99-154ce460da7c)**
Soru Kökü: Motorlu taşıt kazası sonrası kafa travması ile getirilen ve kafa içi basınç artışı (KİBAS) sendromu gelişen hastada, medulladaki iskemik refleksin tetiklenmesiyle belirgin hipertansiyon ve buna sekonder güçlü bir refleks yanıt ortaya çıkar. Bu fizyolojik mekanizmanın oluşturduğu klinik tabloya verilen isim (Cushing triadı) aşağıdakilerden hangisini içerir?
Doğru Şık (A): KİBAS + Hipertansiyon + Bradikardi
Açıklama: Kafa içi basıncın serebral perfüzyon basıncını aşacak kadar artması serebral iskemiye yol açar ve vazomotor merkezi uyararak (MSS iskemik yanıtı) masif sempatik deşarjla sistemik hipertansiyona neden olur. Bu şiddetli kan basıncı artışı ise aort ve karotid sinüsteki baroreseptörleri uyararak vagal yolla refleks bradikardi yaratır. Klinikte bu tablo KİBAS, Hipertansiyon ve Bradikardi üçlüsü olan Cushing Triadı olarak bilinir.

**Soru 2 (ID: 1055ab78-fd9a-4003-90bc-de61a21ba163)**
Soru Kökü: Motorlu taşıt kazası sonrası travmatik beyin hasarı ile acil servise getirilen hastanın intrakraniyal basıncında (KİBAS) ilerleyici bir artış saptanmıştır. Bu hastada santral sinir sistemi iskemik cevabına bağlı olarak ortaya çıkan ve klinikte 'Cushing triadı' olarak adlandırılan bulgular aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (E): Kafa içi basınç artışı, Hipertansiyon, Bradikardi
Açıklama: Cushing triadı, kafa içi basınç artışı (KİBAS), buna eşlik eden güçlü sistemik hipertansiyon ve refleks bradikardi üçlemesinden oluşur. Kafa içi basınç arttığında beyin sapı iskemisi gelişir; vazomotor merkez iskemiden kurtulmak için devasa bir sempatik deşarjla kan basıncını yükseltir (hipertansiyon). Bu şiddetli basınç artışı boyundaki baroreseptörleri uyararak vagal inhibisyon yapar ve kalp atım hızını düşürür (bradikardi).

---

### ÇİFT 3 (Benzerlik: 0.84)

**Soru 1 (ID: 744d718b-ec1f-4200-9605-52dd60a360f3)**
Soru Kökü: Spor hekimliği kliniğine başvuran 28 yaşındaki atletin istirahat EKG trasesi standart kayıt hızında (25 mm/sn) incelenmektedir. Düzenli ritmi olan hastada iki ardışık R dalgası tepesi arasında net olarak 15 küçük kare bulunduğu saptanmıştır. Sinyal ileti frekansı dikkate alındığında, bu hastanın kalp hızı dakikada kaç atımdır?
Doğru Şık (D): 100
Açıklama: Standart EKG cihazları kağıdı saniyede 25 mm hızla yazdırır, bu da dakikada (25x60) toplam 1500 küçük kareye tekabül eder. Ritmi düzenli hastalarda kalp atım hızını bulmak için 1500 rakamı, R-R mesafesindeki küçük kare sayısına bölünür (1500 / 15). İşlem sonucunda kalp hızı dakikada 100 atım olarak hesaplanır.

**Soru 2 (ID: a2564a23-a8fd-4c0e-874f-f03038614bcc)**
Soru Kökü: Yirmi beş yaşında sağlıklı kadın hastanın kontrolünde çekilen standart hızlı (25 mm/sn) elektrokardiyogramda, birbirini izleyen iki R dalgası tepesi arasında 20 küçük kare sayılmıştır. Bu bulguya dayanarak hastanın dakika kalp atım hızı kaçtır?
Doğru Şık (A): 75
Açıklama: Standart EKG hızı saniyede 25 mm'dir ve bir dakikada toplam 1500 küçük karelik kağıt ilerler. Kalp hızını bulmak için 1500 sayısı, iki R dalgası arasındaki küçük kare sayısına bölünür (1500 / 20 = 75 atım/dk). 300 sayısını büyük kare sayısına (yaklaşık 4) bölmek de aynı matematiksel sonucu (300/4 = 75) verir.

---

### ÇİFT 4 (Benzerlik: 0.83)

**Soru 1 (ID: 2942d065-e1f6-4cdc-bd72-bad91379e08d)**
Soru Kökü: Sürekli ve ritmik kasılma aktivitesi gösteren kalp kası hücrelerinin istirahat halinde ihtiyaç duyduğu ATP'nin üretimi için asıl enerji kaynağı olarak kullandığı substrat aşağıdakilerden hangisidir?
Doğru Şık (D): Serbest yağ asitleri
Açıklama: Kalp kası için gerekli enerji birincil ve asıl olarak serbest yağ asitlerinin beta-oksidasyonu ile sağlanır. Her ne kadar iskelet kası veya beyin glikoza bağımlı olsa da, kalp kası yüksek oksijenli ortamda en verimli enerji kaynağı olan yağ asitlerini tercih eder; glikoz ve laktat ise daha az oranda kullanılır. Bu metabolik tercih, miyokardın kesintisiz çalışması için yüksek ATP verimi sağlar.

**Soru 2 (ID: 4824c2bf-8747-4012-b1b5-8aca92d50365)**
Soru Kökü: Sürekli ve ritmik kasılma aktivitesi göstererek hiç dinlenmeyen kalp kası hücreleri (miyositler), oksidatif fosforilasyon için gerekli olan temel enerjiyi asıl olarak aşağıdaki kaynakların hangisinden sağlar?
Doğru Şık (D): Serbest yağ asitleri
Açıklama: Kalp kası için gerekli enerji asıl olarak serbest yağ asitlerinden beta-oksidasyon yoluyla sağlanır; glikoz ve laktat sadece çok daha düşük oranlarda (ikincil olarak) kullanılır. İskelet kası yoğun egzersizde glikozu anaerobik kullanabilirken, miyokardiyal metabolizma tamamen aerobiktir ve verimi çok daha yüksek olan yağ asitlerini zorunlu olarak tercih eder.

---

### ÇİFT 5 (Benzerlik: 0.82)

**Soru 1 (ID: 09357dc5-a194-4ea1-bb68-4da433de6257)**
Soru Kökü: Kalp yetmezliği şüphesiyle değerlendirilen 50 yaşındaki hastanın ekokardiyografisinde, sol ventrikül diyastol sonu hacmi 120 ml, sistol sonu hacmi ise 50 ml saptanmıştır. Bu verilere göre hastanın sol ventrikül atım hacmi (stroke volume) ve ejeksiyon fraksiyonu (EF) hangi seçenekte doğru olarak eşleştirilmiştir?
Doğru Şık (A): Atım hacmi: 70 ml / Ejeksiyon fraksiyonu: %58
Açıklama: Atım hacmi (Stroke Volüm), diyastol sonu hacimden (120 ml) sistol sonu hacmin (50 ml) çıkarılmasıyla 70 ml olarak bulunur. Ejeksiyon fraksiyonu (EF), pompalanan net kan miktarının kalbe dolan toplam kana oranıdır ve (70 / 120) x 100 formülü ile fizyolojik olarak %58-60 civarında bir değere tekabül eder.

**Soru 2 (ID: 411da5d2-0edf-4329-a53c-a6a81663ca23)**
Soru Kökü: Kalp yetmezliği şüphesiyle değerlendirilen bir hastanın ekokardiyografik ölçümlerinde, sol ventrikülün diyastol sonundaki hacmi (end-diyastolik volüm) 120 mL ve sistol sonunda kasılmayı takiben kalan hacmi (end-sistolik volüm) 60 mL olarak bulunmuştur. Buna göre bu hastanın Ejeksiyon Fraksiyonu (EF) yaklaşık yüzde kaçtır?
Doğru Şık (C): 50
Açıklama: Ejeksiyon fraksiyonu (EF), bir atımda pompalanan kan hacminin (Atım Hacmi), diyastol sonu mevcut en büyük hacme oranıdır. Atım hacmi = End-diyastolik volüm (120 mL) eksi End-sistolik volüm (60 mL) = 60 mL. EF = 60 mL / 120 mL = 0.50 yani %50'dir. Sağlıklı bireylerde bu oran %58-60 civarındadır.

---

### ÇİFT 6 (Benzerlik: 0.82)

**Soru 1 (ID: 64c07d61-4642-4445-98d9-cf6f62f0a7be)**
Soru Kökü: Kalp kası dokusunda elektriksel uyarının bir miyokard hücresinden diğerine kesintisiz ve çok hızlı bir şekilde geçerek tüm ventrikülün fonksiyonel bir sinsityum olarak kasılmasını sağlayan, interkale diskler içerisindeki yapı aşağıdakilerden hangisidir?
Doğru Şık (C): Gap junction (Oluklu bağlantı)
Açıklama: Gap junctionlar, komşu kalp kası hücrelerini elektriksel ve kimyasal olarak birbirine bağlayan, iyonların hücreler arası serbest geçişini sağlayarak kalbin tek bir ünite halinde (sinsityal) kasılmasına olanak tanıyan yapılardır. Desmozomlar hücrelerin mekanik olarak birbirinden kopmasını engeller ancak elektriksel akım iletmez. Bu iyonik kapılar olmadan kalbin ritmik uyarım dalgası yayılamaz.

**Soru 2 (ID: b514a1d5-fc86-47dd-be75-91b7407f943f)**
Soru Kökü: Kalp kası hücrelerinin 'sinsityal' bir bütün olarak aynı anda kasılmasını sağlayan ve aksiyon potansiyelinin bir hücreden diğerine elektriksel direnç olmadan hızlı geçişine olanak tanıyan yapı aşağıdakilerden hangisidir?
Doğru Şık (A): Gap junction
Açıklama: İnterkale disklerin içinde yer alan gap junctionlar, hücreler arası iyonik geçişi hızlandırarak kalp kasının elektriksel bir sinsityum gibi tek vücut halinde kasılmasını sağlar. Desmozomlar hücreleri mekanik olarak birbirine sıkıca bağlar ancak elektriksel ileti sağlamazlar. Gap junctionlar miyokardın fonksiyonel bütünlüğünün temel unsurudur.

---

### ÇİFT 7 (Benzerlik: 0.82)

**Soru 1 (ID: 3c3e6aac-73df-4182-9de8-ad4e0113fb5e)**
Soru Kökü: Aortik nabız basıncı trasesinde gözlenen ve ventrikül sistolü bittikten hemen sonra kanın geriye dönme eğilimi ile aort kapağına çarparak yarattığı basınç dalgasına verilen isim aşağıdakilerden hangisidir?
Doğru Şık (B): Dikrotik çentik
Açıklama: Aort kapağının sistol sonunda kapanması sırasında, perifere atılmış olan kanın elastik aort duvarından geri teperek kapalı aort kapakçıklarına esnemeyle çarpması ve tekrar ileri itilmesi sonucu aortik nabız basıncı eğrisinde izlenen ufak dalgalanmaya dikrotik çentik (incisura dicrotica) denir. Bu olay ventrikül sistolünün bittiğini ve aort kapağının tam kapandığı (izovolümetrik gevşeme evresinin başı) anı net olarak gösterir.

**Soru 2 (ID: c9e531fb-ae26-4d89-8725-18fdf3c19b33)**
Soru Kökü: Aort kapağının kapanması sırasında kanın geri akımıyla kapağın geriye doğru esnemesi ve sonrasında kanın tekrar arter ağacına doğru itilmesi sonucu nabız dalgasında ortaya çıkan fizyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Dikrotik çentik
Açıklama: Dikrotik çentik, ejeksiyon bitiminde aort kapağı kapandığında geri dönen kanın elastik kapağa çarpıp sekmesiyle arteriyel basınç eğrisinde oluşturduğu karakteristik küçük yükseliştir. a, c, v, x ve y dalgaları ise arteryel sistemde değil, atriyum içi basınç değişikliklerini yansıtan venöz pulsasyon (juguler ven) dalgalarıdır. Bu çentik, sistol ile diyastol arasındaki mekanik sınırı belirler.

---

### ÇİFT 8 (Benzerlik: 0.82)

**Soru 1 (ID: 314bdc97-47f2-419d-93d0-65a8fc93000b)**
Soru Kökü: Kırk beş yaşında kronik böbrek yetmezliği hastası, halsizlik ve çarpıntı şikayetiyle getiriliyor. Laboratuvar tetkiklerinde plazma potasyum düzeyi 7.2 mEq/L (Normal: 3.5-5.0) olarak saptanıyor. Bu şiddetli hiperkalemi durumunda, hücre istirahat membran potansiyelinin (-90 mV'den -70 mV'ye) hipopolarize olmasına sekonder olarak, EKG'de erken dönemde aşağıdaki bulgulardan hangisi izlenir?
Doğru Şık (A): T dalgasında sivrileşme (peaked T)
Açıklama: Hiperkalemide hücre istirahat potansiyelinin eşik değere yaklaşması (hipopolarizasyon), repolarizasyonun daha kolay ve güçlü gerçekleşmesine neden olur, bu da EKG'de ilk bulgu olarak dar tabanlı, sivri ve yüksek T dalgalarına yol açar. Hipokalemide U dalgası belirginleşirken, hiperkalemide voltaj bağımlı Na+ kanallarının inaktivasyonu ilerleyen süreçte QRS genişlemesine neden olur.

**Soru 2 (ID: ee4edcbd-f697-4fc9-b4cb-fe85b8004c52)**
Soru Kökü: Elli yaşında hipertansiyon hastası, diüretik ilaç kullanımına bağlı halsizlik ile acile başvuruyor. Alınan kanda serum potasyum düzeyinin ileri derecede düşük (hipopotasemi) olduğu saptanıyor. Bu hastanın EKG'sinde, miyokard istirahat membran potansiyelinin -110 mV seviyelerine hiperpolarize olmasına bağlı olarak aşağıdaki bulgulardan hangisinin görülmesi **en olasıdır**?
Doğru Şık (B): U dalgasının belirginleşmesi ve T dalgasının yassılaşıp negatifleşmesi
Açıklama: Hipopotasemide hücre dışı potasyum konsantrasyonu düştüğü için hücre istirahat potansiyeli çok daha negatif olur (-110 mV). Bu hiperpolarizasyon repolarizasyonun uzamasına ve zorlaşmasına yol açar, T dalgası yassılaşır veya negatifleşir. Papiller kasların uzun süren repolarizasyonunu yansıtan patolojik bir 'U dalgası' EKG'ye eklenir. Sivri T dalgaları ise hiperpotasemide hücrenin hipopolarize olmasının sonucudur.

---

### ÇİFT 9 (Benzerlik: 0.81)

**Soru 1 (ID: 09357dc5-a194-4ea1-bb68-4da433de6257)**
Soru Kökü: Kalp yetmezliği şüphesiyle değerlendirilen 50 yaşındaki hastanın ekokardiyografisinde, sol ventrikül diyastol sonu hacmi 120 ml, sistol sonu hacmi ise 50 ml saptanmıştır. Bu verilere göre hastanın sol ventrikül atım hacmi (stroke volume) ve ejeksiyon fraksiyonu (EF) hangi seçenekte doğru olarak eşleştirilmiştir?
Doğru Şık (A): Atım hacmi: 70 ml / Ejeksiyon fraksiyonu: %58
Açıklama: Atım hacmi (Stroke Volüm), diyastol sonu hacimden (120 ml) sistol sonu hacmin (50 ml) çıkarılmasıyla 70 ml olarak bulunur. Ejeksiyon fraksiyonu (EF), pompalanan net kan miktarının kalbe dolan toplam kana oranıdır ve (70 / 120) x 100 formülü ile fizyolojik olarak %58-60 civarında bir değere tekabül eder.

**Soru 2 (ID: 57b5eb6b-ff6a-4adb-86df-cf605c1820ad)**
Soru Kökü: 60 yaşındaki bir hastanın kardiyoloji polikliniğinde yapılan ekokardiyografik incelemesinde, ventriküllerin diyastol sonunda maksimum genişlediği andaki hacmi (EDV) 120 ml, sistol sonrası kalpte arta kalan hacim (ESV) ise 50 ml olarak ölçülmüştür. Bu hastanın kalbinin ejeksiyon fraksiyonu (EF) yaklaşık olarak yüzde kaçtır?
Doğru Şık (C): 58-60
Açıklama: Ejeksiyon fraksiyonu, kalbin bir atımda fırlattığı kanın (stroke volüm), kalbe dolan toplam kana (end-diyastolik volüm) oranıdır. Hastanın atım hacmi 120 - 50 = 70 ml'dir. EF = 70 / 120 işlemi yapıldığında sonuç %58.3 çıkar. Normal fizyolojik EF değerleri %58-60 civarındadır.

---

### ÇİFT 10 (Benzerlik: 0.81)

**Soru 1 (ID: 9fa65fc3-af66-4704-8198-8714b0c397e8)**
Soru Kökü: Kapiller ve postkapiller venüllerin duvarında yerleşmiş, kasılma yeteneği bulunan ve gerektiğinde diğer mezoderm kökenli hücrelere farklanabilme özelliğine sahip hücre aşağıdakilerden hangisidir?
Doğru Şık (B): Perisit
Açıklama: Perisitler, kapiller ve postkapiller venül duvarında bulunan, kasılma yeteneği ile kan akımını regüle eden ve farklılaşma potansiyeli taşıyan özelleşmiş hücrelerdir. Endotel hücreleri damar lümenini döşeyen tek sıra epiteldir ancak kasılma yetenekleri ve mezodermal multipotent farklılaşma özellikleri perisitler kadar belirgin değildir. Bu histolojik ayrım kapiller seviyedeki mikrodolaşım regülasyonu için kritiktir.

**Soru 2 (ID: bcacfa93-bdb3-4a8b-948b-34c02edfeead)**
Soru Kökü: Kapiller ve postkapiller venüllerin duvarında yerleşen, uzantılı morfolojiye sahip mezoderm kökenli hücrelerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Sadece mekanik destek sağlayan inaktif endoteliyal türevlerdir.
Açıklama: Perisitler, sadece pasif mekanik destek sağlayan hücreler değil, kasılma yeteneği (kontraktil) sayesinde bölgesel kapiller akımı regüle edebilen aktif hücrelerdir. Aynı zamanda hasar onarımında düz kas hücrelerine veya fibroblastlara farklılaşabilirler. Endotel hücresi sanılmaları sık bir hatadır, ancak perisitler endotelin dışına yerleşmiş, işlevi daha geniş kök hücre benzeri elemanlardır.

---

### ÇİFT 11 (Benzerlik: 0.80)

**Soru 1 (ID: 23564772-41aa-489c-a3ba-935521c1150d)**
Soru Kökü: Elektrokardiyografik değerlendirmede kalbin ortalama elektriksel aksının +120 derece olarak bulunması, kardiyak vektörün sağ eksene saptığını gösterir. Aşağıdaki patolojik durumlardan hangisi sağ eksen sapmasına (right axis deviation) yol açan nedenlerden biridir?
Doğru Şık (A): Pulmoner stenoz
Açıklama: Pulmoner stenoz gibi sağ ventrikül hipertrofisine yol açan veya sağ dal bloğu gibi sağ ventrikül depolarizasyonunu geciktiren durumlar, elektriksel vektörün sağa kaymasına (+110 derecenin sağı) neden olur. Sistemik hipertansiyon, sol dal bloğu ve aort darlığı ise belirgin bir sol ventrikül kas kitlesi artışına neden olarak sol eksen sapmasına yol açar.

**Soru 2 (ID: 31ca9b1a-2947-4ae0-a7e6-87542e6585eb)**
Soru Kökü: 55 yaşında kadın hastanın EKG'sinde QRS komplekslerinin bileşke vektörüne bakıldığında, kalbin ortalama elektriksel aksının +130 derece saptandığı (Sağ Eksen Sapması) görülüyor. Bu hastanın altta yatan kardiyak patolojisinin etiyolojisinde aşağıdakilerden hangisi **en az olasıdır**?
Doğru Şık (B): Uzun süreli kontrolsüz sistemik hipertansiyon
Açıklama: Sistemik hipertansiyon sol ventriküle binen ard yükü artırır ve zamanla 'Sol Ventrikül Hipertrofisine' yol açarak EKG'de aksın sola doğru (sol eksen sapması, -30 dereceden negatif) kaymasına neden olur. Sağ dal bloğu, pulmoner stenoz ve mitral patolojileri ise sağ kalbi zorlayarak sağ ventrikül duvarını kalınlaştırır ve ekseni sağa (+110 dereceden büyük) saptırır.

---

### ÇİFT 12 (Benzerlik: 0.79)

**Soru 1 (ID: 1b8644ab-29a7-485e-9324-8519a2b6f9b4)**
Soru Kökü: Renin-Anjiyotensin-Aldosteron sisteminde Anjiyotensin I'in aktif Anjiyotensin II formuna dönüşümünü sağlayan ACE enzimi, insan vücudunda büyük oranda aşağıdaki hücrelerin hangisinde sentezlenir?
Doğru Şık (E): Pulmoner kapiller endotel hücreleri
Açıklama: ACE (Anjiotensin Dönüştürücü Enzim) en yüksek konsantrasyonda akciğerlerdeki pulmoner kapiller endotel hücrelerinde üretilir. Jukstaglomerüler hücreler renini, hepatositler ise anjiyotensinojeni sentezler. Tüm venöz kan akciğerlerden geçtiği için anjiyotensin I'in %80'inden fazlası tek bir geçişte akciğerlerde enzimatik olarak anjiyotensin II'ye dönüşür.

**Soru 2 (ID: 1f19a534-3c4e-4aff-b6d7-766f73f3c26c)**
Soru Kökü: Kan basıncının uzun süreli düzenlenmesinde rol oynayan ve hipovolemi anında aktive olan Renin-Anjiyotensin-Aldosteron Sistemi'nde (RAAS); dolaşımdaki inaktif Anjiyotensin I molekülünü güçlü bir vazokonstriktör olan aktif Anjiyotensin II formuna dönüştüren ACE (Anjiyotensin Dönüştürücü Enzim) temel olarak hangi dokunun kapiller yatağında sentezlenir?
Doğru Şık (D): Akciğer (pulmoner) endoteli
Açıklama: RAAS mekanizmasında karaciğer kökenli anjiyotensinojen, böbrek kökenli renin ile Anjiyotensin I'e dönüşür. Ancak sistemik dolaşımdaki asıl biyolojik reaksiyonu yürütecek olan Anjiyotensin II, pulmoner kapiller endotel yüzeyinde yüksek oranda bulunan ACE enzimi tarafından oluşturulur. ACE inhibitörleri, akciğerde aynı zamanda kinin yıkımını da durdurduğu için bradikinin birikimine bağlı kronik öksürük yaparlar.

---

### ÇİFT 13 (Benzerlik: 0.78)

**Soru 1 (ID: 121fc32f-0913-441c-87a3-ffaffb58ff55)**
Soru Kökü: Aşağıdaki endojen fizyolojik ajanlardan hangisi, güçlü bir vazokonstrüktör olan Endotelin-1 üretimini inhibe ederek damar yatağında vazodilatasyon oluşumuna katkı **sağlamaz**?
Doğru Şık (E): Tromboksan A2
Açıklama: Tromboksan A2 trombositlerden salınan lokal bir aracıdır ve damar düz kasını kuvvetli şekilde kasarak vazokonstriksiyon yapar, endotelin-1'i inhibe etmez. Nitrik oksit, ANP, prostasiklin ve PGE2 ise endotelin-1 sentezini baskılayarak vazodilatasyonu destekleyen ajanlardır. Bu karşılıklı antagonizma lokal damar tonusunun hassas ayarını sağlar.

**Soru 2 (ID: 42b4586e-2d82-4fcb-94a7-ed7547f777c3)**
Soru Kökü: Damar endoteli, kan akımına ve lokal gerilime yanıt olarak düz kas tonusunu düzenleyen güçlü moleküller salgılar. Aşağıdaki medyatörlerden hangisi vasküler endotelden salınan ve arteriyollerde vazodilatasyona aracılık eden ürünlerden biri **değildir**?
Doğru Şık (E): Endotelin-1
Açıklama: Endotelin-1, damar endotelinden özellikle doku hasarı sonrasında salınan ve bilinen en güçlü endojen vazokonstriktör (daraltıcı) maddelerden biridir. Nitrik oksit, prostasiklin ve prostaglandin E2 endotel kaynaklı vazodilatatörlerdir; ANP de düz kas düzeyinde vazodilatasyon yapar ancak ANP'nin salınım yeri atriyum miyokardıdır. Endotelin-1 fizyolojik hedeflenmesinde belirgin zıtlık gösterir.

---

### ÇİFT 14 (Benzerlik: 0.78)

**Soru 1 (ID: 280fe934-feb7-4d9a-805f-8ae0efc7cb4b)**
Soru Kökü: Kardiyovasküler sistem hücre zarlarındaki iyon akışını modüle eden, böbreküstü bezinden salgılandığı düşünülen ve dijital ilaçları gibi etki göstererek kalbin kasılma gücünü artıran endojen Na+-K+ ATPaz inhibitörü aşağıdakilerden hangisidir?
Doğru Şık (D): Ouabain
Açıklama: Ouabain, steroid yapılı endojen dijital benzeri bir moleküldür. Hücre zarındaki Na+-K+ ATPaz pompasını inhibe ederek stoplazmada sodyum iyonlarının birikmesine sebep olur. Artan sodyum konsantrasyon eğimi, Na+/Ca+2 antiport değiştiricisini yavaşlatır ve hücre içi kalsiyumun artmasına yol açarak kalpte pozitif inotropik etki yaratır.

**Soru 2 (ID: 75d69f80-e324-4bb6-98f0-eaed0c4d953b)**
Soru Kökü: Surrenal bezden salınan, steroid yapılı olan ve kalp hücre membranındaki Na+-K+ ATPaz pompasını doğrudan inhibe ederek intraselüler kalsiyum miktarının artışına yol açan endojen kardiyak glikozid benzeri molekül aşağıdakilerden hangisidir?
Doğru Şık (A): Ouabain
Açıklama: Ouabain, endojen bir digital benzeri faktördür ve Na+-K+ ATPaz pompasını bloke ederek hücre içi sodyumun artmasına, bu da Na+-Ca+2 değiştiricisinin (antiport) sekonder inhibisyonuna yol açarak miyokardda pozitif inotropik etki sağlar. Ürotensin-II bilinen en güçlü vazokonstrüktör proteindir, ouabain gibi iyon pompası inhibitörü değildir. Bu mekanizma dijital tedavisinin de temel dayanağıdır.

---

### ÇİFT 15 (Benzerlik: 0.78)

**Soru 1 (ID: 42b4586e-2d82-4fcb-94a7-ed7547f777c3)**
Soru Kökü: Damar endoteli, kan akımına ve lokal gerilime yanıt olarak düz kas tonusunu düzenleyen güçlü moleküller salgılar. Aşağıdaki medyatörlerden hangisi vasküler endotelden salınan ve arteriyollerde vazodilatasyona aracılık eden ürünlerden biri **değildir**?
Doğru Şık (E): Endotelin-1
Açıklama: Endotelin-1, damar endotelinden özellikle doku hasarı sonrasında salınan ve bilinen en güçlü endojen vazokonstriktör (daraltıcı) maddelerden biridir. Nitrik oksit, prostasiklin ve prostaglandin E2 endotel kaynaklı vazodilatatörlerdir; ANP de düz kas düzeyinde vazodilatasyon yapar ancak ANP'nin salınım yeri atriyum miyokardıdır. Endotelin-1 fizyolojik hedeflenmesinde belirgin zıtlık gösterir.

**Soru 2 (ID: 711dcdf8-b817-4ecf-833a-5eb0ae8551a9)**
Soru Kökü: Kanın arter ve arteriyollerde akarken damar duvarı endoteline uyguladığı fiziksel sürtünme stresi (shear stress), lokal kan akımını artırmak amacıyla aşağıdaki vazodilatatör maddelerden hangisinin doğrudan salınımını uyarır?
Doğru Şık (B): Nitrik oksit (NO)
Açıklama: Akım hızının artmasıyla endotel üzerindeki sürtünme stresi yükselir, bu durum endotelyal nitrik oksit sentaz (eNOS) enzimini aktive ederek güçlü bir vazodilatatör olan Nitrik Oksit (NO) sentezini artırır. Endotelin-1 ve Tromboksan A2 ise damar hasarı durumlarında salınan güçlü vazokonstrüktörlerdir. NO, damarın çapını genişleterek artan akıma karşı direnci dengeler.

---

### ÇİFT 16 (Benzerlik: 0.77)

**Soru 1 (ID: a87b9c8b-39a3-4e41-8287-a2f18cdcac2b)**
Soru Kökü: Poiseuille-Hagen eşitliğine göre, bir kan damarından akan sıvının hacimsel hızını (debisini) belirleyen parametreler arasında en ufak değişimiyle dirence en yüksek çarpan etkisi yapan temel değişken aşağıdakilerden hangisidir?
Doğru Şık (A): Damar yarıçapı
Açıklama: Poiseuille kanununa göre kanın akım hızı, damar yarıçapının dördüncü kuvveti (r^4) ile doğru orantılıdır. Yarıçaptaki çok küçük bir daralma direnci 4. kuvvet oranında artırdığı için akımda devasa düşüşe neden olur. Uzunluk ve viskozite ise akım ile ters orantılıdır ancak çarpan etkileri birinci derecedendir.

**Soru 2 (ID: f948f688-204e-44e9-bbab-f446d011dd5b)**
Soru Kökü: Poiseuille-Hagen eşitliğine göre, kanın damarlardaki akış debisini (F) veya damar direncini (R) belirleyen faktörler göz önüne alındığında;
I. Damar uzunluğu
II. Kanın vizkositesi (hematokrit)
III. Damarın yarıçapı

yukarıdaki değişkenlerden hangilerindeki artış kan akım hızını doğrudan **azaltıcı** etki gösterir?
Doğru Şık (B): I ve II
Açıklama: Poiseuille-Hagen eşitliğinde kan akım debisi (F); basınç farkı ve damar yarıçapının 4. kuvveti ile doğru orantılıyken, damar uzunluğu (L) ve kanın vizkositesi (μ) ile ters orantılıdır. Dolayısıyla damar uzunluğunun artması ve kan vizkozitesinin (hematokritin) artması direnci büyüteceği için akım hızını doğrudan azaltır. Damar yarıçapının artması ise akımı katlanarak artırır.

---

### ÇİFT 17 (Benzerlik: 0.77)

**Soru 1 (ID: 0a0794d3-47b2-4771-bff1-8d5d3bcd23a9)**
Soru Kökü: Kırk beş yaşında kadın hasta, her iki bacağında giderek artan şişlik şikayetiyle başvuruyor. Fizik muayenede pretibial gode bırakan ödem saptanıyor. Laboratuvar incelemesinde serum albümin düzeyinin belirgin olarak düştüğü gözleniyor. Bu hastada ödem oluşumuna yol açan kapiller sistemdeki Starling kuvveti değişikliği aşağıdakilerden hangisidir?
Doğru Şık (C): Plazma kolloid osmotik basıncında azalma
Açıklama: Plazma proteinlerinin (albümin) azalması, damar içinde suyu tutan ana kuvvet olan plazma kolloid osmotik basıncını düşürerek sıvının interstisyel alana kaçmasına ve ödeme neden olur. Kapiller hidrostatik basınç artışı kalp yetmezliği veya venöz göllenmede görülürken, permeabilite artışı inflamatuar durumlarda kinin/histamin salınımına bağlıdır. Starling kuvvetleri arasındaki denge bozulduğunda net filtrasyon basıncı ödem lehine değişir.

**Soru 2 (ID: 63c19ce2-26a9-45e0-9d79-dd7a5a9642bc)**
Soru Kökü: 55 yaşında siroz hastası erkek, bacaklarında belirginleşen gode bırakan ödem şikayetiyle başvuruyor. Laboratuvar incelemesinde plazma albümin düzeyi ileri derecede düşük bulunuyor. Bu hastada sıvıların kapiller dışına kaçarak ödem oluşturmasının temel nedeni, Starling dengesindeki hangi kuvvetin azalmasıdır?
Doğru Şık (B): Plazma kolloid osmotik basıncı
Açıklama: Siroz gibi karaciğer yetmezliği durumlarında albümin sentezi düşer, bu da damar içindeki sıvıyı tutan ana kuvvet olan plazma kolloid osmotik basıncının azalmasına yol açar. Kapiller hidrostatik basınç suyu dışarı iten kuvvetken, plazma proteinlerinin yarattığı osmotik basınç suyu içeri çeker. Bu dengenin bozulması net filtrasyon lehine değişerek dokularda ödem birikimiyle sonuçlanır.

---

### ÇİFT 18 (Benzerlik: 0.77)

**Soru 1 (ID: a23131f9-17ef-4302-ad80-368ef1688ec0)**
Soru Kökü: Arteriyollerin çapını daraltarak total periferik direnci artıran lokal ve dolaşımsal faktörler değerlendirildiğinde;
I. Endotelin-1
II. Anjiyotensin II
III. Kalsitonin geniyle ilişkili peptid (CGRP)
IV. Nöropeptid Y
ajanlarından hangileri spesifik olarak vazokonstrüktör etki gösterir?
Doğru Şık (B): I, II ve IV
Açıklama: Endotelin-1, Anjiyotensin II ve Nöropeptid Y (sempatik ko-transmitter) damar düz kasını kasarak total periferik direnci artıran moleküllerdir. Kalsitonin geniyle ilişkili peptid (CGRP) ise bilinen en güçlü endojen vazodilatatörlerden biridir ve arteriyollerde gevşemeye yol açar. Damar çapının belirlenmesi bu antagonist ajanların net dengesine bağlıdır.

**Soru 2 (ID: d4b902cf-c092-41f0-8773-12952a6dbed8)**
Soru Kökü: Arteriyollerin lümen çapını daraltarak lokal doku kan akımını azaltan çeşitli nöronal ve hormonal mekanizmalar bulunmaktadır.
I. Nöropeptid Y
II. Nitrik oksit (NO)
III. Ürotensin-II
IV. Atriyal natriüretik peptid (ANP)
Yukarıda verilen ajanlardan hangileri, arteriyol düz kasında kasılma (vazokonstriksiyon) oluşturarak total periferik direncin artışına katkıda bulunur?
Doğru Şık (B): I ve III
Açıklama: Nöropeptid Y ve Ürotensin-II (I ve III) doğrudan arteriyol düz kasını kasarak vazokonstriksiyon yapar ve total periferik direnci yükseltir. Nitrik oksit (NO) endotel kaynaklı güçlü bir gevşetici iken, ANP hacim artışında kalpten salınarak cGMP üzerinden vazodilatasyon yapar. Dolayısıyla II ve IV numaralı moleküller kan basıncını düşürücü yönde etki gösterir.

---

### ÇİFT 19 (Benzerlik: 0.77)

**Soru 1 (ID: 07ab9386-62a1-4d91-b97b-3fe31d157f06)**
Soru Kökü: İnternal juguler ven üzerinden kaydedilen venöz pulsasyon dalgaları sağ kalpteki basınç değişikliklerini yansıtır. Bu trasede izlenen 'c dalgası', kalp siklusunun hangi spesifik mekanik olayına işaret eder?
Doğru Şık (E): İzovolumetrik kontraksiyon evresinde triküspit kapağın atriyuma bombeleşmesine
Açıklama: Juguler ven trasesindeki 'c dalgası', ventrikül sistolünün hemen başındaki izovolumetrik kontraksiyon sırasında kapanan triküspit kapağın sağ atriyum içine doğru esnemesi (bombeleşmesi) sonucu oluşan geçici basınç artışıdır. Atriyum sistolü 'a dalgası'nı, pasif doluş 'v dalgası'nı oluştururken kapağın açılması 'y inişi'ni yaratır.

**Soru 2 (ID: 3453063b-5848-4ded-ad6c-fc2fcb340596)**
Soru Kökü: Kardiyak siklus sırasında atriyum içi basınç değişiklikleri internal juguler vene yansıyarak spesifik pulsasyon dalgaları oluşturur. EKG'de P dalgasını takiben, diyastolün son evresinde atriyum kasılmasına bağlı olarak kaydedilen pozitif dalga aşağıdakilerden hangisidir?
Doğru Şık (B): a dalgası
Açıklama: Juguler ven trasesindeki 'a' dalgası, ventrikül diyastolünün son 1/3'lük diliminde atriyumların aktif sistolü (kasılması) neticesinde venöz sisteme yansıyan geriye doğru basınç artışıdır. 'c' dalgası triküspit kapağın bombeleşmesi, 'v' dalgası ise venöz doluşla oluşan basınç artışıdır.

---

### ÇİFT 20 (Benzerlik: 0.76)

**Soru 1 (ID: 06319346-5df3-4d81-9a9a-f60122cfd48e)**
Soru Kökü: Sistemik arteriyel kan basıncında ani bir artış meydana geldiğinde baroreseptör refleksi devreye girerek basıncı düşürür. Bu refleks arkının afferent yollarını oluşturan reseptör bölgeleri ve ilgili kranial sinir eşleşmelerinden hangisi doğrudur?
Doğru Şık (D): Sinüs karotikus baroreseptörleri - Hering siniri (N. glossofaringeus)
Açıklama: Sinüs karotikustaki baroreseptörlerden çıkan uyarılar Hering siniri (N. glossofaringeus, CN IX) aracılığıyla, aortik arktakiler ise Cyon siniri (N. vagus, CN X) aracılığıyla medulla oblangatadaki NTS'ye (Nükleus Traktus Solitarius) iletilir. Karotid cisim kemoreseptör olup baroreseptör refleksin ana unsuru değildir. Bu ayrım kranial sinir lezyonlarında refleks arkının nerede bozulduğunu saptamak için klinikte kritiktir.

**Soru 2 (ID: b8b0f5bb-7698-40ab-a194-9bdfe48dca58)**
Soru Kökü: Arteriyel kan basıncının kısa süreli (nörolojik) kontrolünü sağlayan baroreseptör refleksi mekanizmasında, sinüs karotikustan kalkan gerilme sinyallerini beyin sapındaki Nükleus Traktus Solitarius'a (NTS) taşıyan aferent sinir aşağıdakilerden hangisidir?
Doğru Şık (C): Hering siniri (N. Glossofaringeus dalı)
Açıklama: Karotid sinüs bölgesindeki baroreseptörlerden kalkan afferent uyarılar, IX. kafa çifti olan Nervus Glossofaringeus'un bir dalı olan Hering siniri ile medulla oblangatadaki NTS'ye taşınır. Arkus aortadaki baroreseptörlerden kalkan sinyaller ise X. kafa çifti olan Nervus Vagus'un duysal dalı olan Cyons siniri üzerinden aynı merkeze iletilir.

---

### ÇİFT 21 (Benzerlik: 0.76)

**Soru 1 (ID: 74a6813c-949d-46a9-92e3-43a25d61100b)**
Soru Kökü: Einthoven üçgenini temel alan standart bipolar ekstremite derivasyonlarının elektrot yerleşimleri ve oluşturdukları potansiyel farklarla ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Derivasyon III: Sağ kol ile Sol bacak arasındaki potansiyel farkı ölçer.
Açıklama: Bipolar ekstremite derivasyonlarında; DI sağ kol (-) ve sol kol (+) arasını, DII sağ kol (-) ve sol bacak (+) arasını ölçer. DIII ise sol kol (-) ve sol bacak (+) arasındaki potansiyel farkı ölçer. B seçeneğinde verilen 'sağ kol - sol bacak' tanımı DII derivasyonuna aittir ve DIII için tamamen yanlıştır.

**Soru 2 (ID: 8d6217aa-86d2-47d4-a081-631069e161a2)**
Soru Kökü: Standart bipolar ekstremite derivasyonlarından biri olan DII derivasyonunun EKG kayıt ekseni (elektrot yerleşim polaritesi) aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (C): Sağ kol (-) ve Sol bacak (+)
Açıklama: Standart EKG'de DII derivasyonu, negatif elektrotun Sağ Kol'a, pozitif elektrotun ise Sol Bacak'a yerleştirilmesiyle elde edilir (Sağ kol -, Sol bacak +). Bu eksen kalbin normal elektriksel aksına (+59 derece) en yakın paralellikte olduğu için EKG kayıtlarında P, R ve T dalgalarının en net ve büyük izlendiği derivasyondur. DI derivasyonu sağ kol-sol kol, DIII derivasyonu sol kol-sol bacak arasındadır.

---

### ÇİFT 22 (Benzerlik: 0.76)

**Soru 1 (ID: 37fadddc-44d9-4dca-8d4e-52049a1fd172)**
Soru Kökü: Kan dolaşımında basıncın sistemik arterlerden venöz sisteme aktarımı sırasında, düz kas lümen çapını değiştirerek total periferik direnci (TPR) tayin eden ve kan basıncı düşüşünün en keskin yaşandığı damar segmenti aşağıdakilerden hangisidir?
Doğru Şık (E): Arteriyoller
Açıklama: Dolaşım sisteminde dirence en büyük katkıyı sağlayan ve 'direnç damarları' olarak tanımlanan yapı arteriyollerdir. Otonom sinir sistemi uyarısıyla kalın dairesel düz kasları kasılarak kanın dokuya geçişine karşı ciddi bir mekanik bariyer oluştururlar. Direncin en yüksek olduğu bu bölgede kan basıncı büyük oranda düşer ve kapillerlere doku hasarı yaratmayacak güvenli bir akım ulaşır.

**Soru 2 (ID: dc39c149-b728-432a-9d3c-aea74b491ef8)**
Soru Kökü: Kan basıncının dolaşım sistemi boyunca değişimi incelendiğinde, direncin çok yüksek olması nedeniyle kan basıncında en belirgin ve ani düşüşün yaşandığı vasküler segment aşağıdakilerden hangisidir?
Doğru Şık (B): Arteriyoller
Açıklama: Sistemik dolaşımda damar çapının dramatik şekilde küçüldüğü ve düz kas tonusunun yüksek olduğu arteriyollerde direnç zirve yapar, bu durum kan basıncının aniden ve keskin bir şekilde azalmasına neden olur. Kapillerlerde enine kesit alanı en geniş olduğu için kan akım hızı en düşüktür ancak ana basınç düşüşü arteriyollerde gerçekleşmiştir. Bu ani düşüş, narin kapiller ağın yüksek basınca maruz kalarak yırtılmasını engeller.

---

### ÇİFT 23 (Benzerlik: 0.76)

**Soru 1 (ID: 7a11e2bb-d5c2-49f8-a5cf-268bf0266adb)**
Soru Kökü: Egzersiz esnasında artan doku ihtiyacını karşılamak için kalbe dönen kan miktarı (venöz dönüş) ciddi oranda artar. Bu hacim yükü miyokard hücrelerini diyastolde gererek aktin ve miyozin örtüşmesini ideal noktaya getirir ve kalbin otomatik olarak daha güçlü kasılmasını sağlar. Atım hacmini artıran bu "Ön Yük (Preload)" mekanizması fizyolojide hangi yasayla ifade edilir?
Doğru Şık (A): Frank-Starling yasası
Açıklama: Kalp kasının, fizyolojik sınırlar içinde ne kadar gerilirse o kadar güçlü kasıldığını ifade eden temel prensip Frank-Starling yasasıdır. Kalbe dönen sıvı hacmi (ön yük/venöz dönüş) arttıkça sarkomerler bir yay gibi gerilir ve sistolde enerji yüksek atım hacmi olarak kan dolaşımına aktarılır. Bu otoregülasyon kalbin kanı biriktirmesini engeller.

**Soru 2 (ID: c6b2b925-24ed-430d-9e98-195ddab09eaf)**
Soru Kökü: Sağlıklı bir yetişkinde artan fiziksel aktiviteyle birlikte kalbe dönen venöz kan miktarı artmaktadır. Ventriküle gelen kan hacmi (ön yük) arttıkça sarkomer boyunun fizyolojik sınırlarda uzayarak miyozin ve aktin liflerinin optimum örtüşmesi sonucu miyokardın kasılma gücünün artması hangi mekanizma ile tanımlanır?
Doğru Şık (B): Frank-Starling yasası
Açıklama: Kalbin, kendisine venöz dönüşle gelen kanın tamamını, miyokard liflerinin gerilmesine bağlı olarak artan bir güçle sistolde fırlatabilme (otoregülasyon) yeteneğine Frank-Starling yasası denir. Kalp lifleri (sarkomerler) ne kadar çok gerilirse, aktin ve miyozin bağlanma bölgeleri o kadar mükemmel hizalanır ve atım volümü artar.

---

### ÇİFT 24 (Benzerlik: 0.76)

**Soru 1 (ID: 4626725c-5daa-4fa6-8df8-03270f609c48)**
Soru Kökü: Kalp döngüsü sırasında diyastolün başlangıcı olan izovolümetrik gevşeme evresinde duyulan ve aort ile pulmoner kapakların kapanmasıyla oluşan yüksek frekanslı kalp sesi aşağıdakilerden hangisidir?
Doğru Şık (A): S2
Açıklama: S2 kalp sesi, ventriküllerin kasılmayı bitirip gevşemeye başladığı izovolümetrik gevşeme evresinde semilüner kapakların kapanmasıyla oluşur. S1 ise atriyoventriküler kapakların kapanmasıyla sistolün başlangıcında duyulur ve S2'ye kıyasla daha uzun sürelidir. Bu seslerin ayrımı, ventriküler doluş öncesi ve ejeksiyon öncesi evrelerin belirlenmesinde kritik rol oynar.

**Soru 2 (ID: a0e324d3-9726-412a-8961-a18729b016cc)**
Soru Kökü: Kalp döngüsünün son 1/3'lük doluş döneminde, atriyum sistolüne bağlı olarak kanın ventriküle çarpmasıyla ortaya çıkan ve normalde sağlıklı erişkinde duyulmayan presistolik kalp sesi aşağıdakilerden hangisidir?
Doğru Şık (B): S4
Açıklama: S4, diyastolün en sonunda atriyumların aktif kasılması (sistolü) sırasında kanın sertleşmiş veya hipertrofik bir ventriküle çarpması sonucu oluşan presistolik bir sestir. S3 ise diyastolün ilk 1/3'lük dönemindeki pasif hızlı doluş evresinde ortaya çıkar. Dolayısıyla, kalp seslerinin döngüdeki yeri doğrudan ventrikül duvarının kompliyansı ve doluş hızına işaret eder.

---

### ÇİFT 25 (Benzerlik: 0.76)

**Soru 1 (ID: 05768c1a-7bfb-4f97-bb99-154ce460da7c)**
Soru Kökü: Motorlu taşıt kazası sonrası kafa travması ile getirilen ve kafa içi basınç artışı (KİBAS) sendromu gelişen hastada, medulladaki iskemik refleksin tetiklenmesiyle belirgin hipertansiyon ve buna sekonder güçlü bir refleks yanıt ortaya çıkar. Bu fizyolojik mekanizmanın oluşturduğu klinik tabloya verilen isim (Cushing triadı) aşağıdakilerden hangisini içerir?
Doğru Şık (A): KİBAS + Hipertansiyon + Bradikardi
Açıklama: Kafa içi basıncın serebral perfüzyon basıncını aşacak kadar artması serebral iskemiye yol açar ve vazomotor merkezi uyararak (MSS iskemik yanıtı) masif sempatik deşarjla sistemik hipertansiyona neden olur. Bu şiddetli kan basıncı artışı ise aort ve karotid sinüsteki baroreseptörleri uyararak vagal yolla refleks bradikardi yaratır. Klinikte bu tablo KİBAS, Hipertansiyon ve Bradikardi üçlüsü olan Cushing Triadı olarak bilinir.

**Soru 2 (ID: 6f7ef2b6-1a44-45c4-82fa-65227a134c0f)**
Soru Kökü: 35 yaşında erkek hasta, kafasına aldığı sert darbe sonrası yoğun bakıma alınıyor. İntrakraniyal basınç (KİBAS) monitörizasyonunda aşırı artış saptanan hastanın kan basıncı 180/110 mmHg'ye yükseliyor, kalp hızı ise 45 atım/dakika'ya düşüyor. Serebral perfüzyonu korumaya yönelik refleks otonomik deşarjı tanımlayan bu sendrom aşağıdakilerden hangisidir?
Doğru Şık (E): Cushing triadı
Açıklama: Kafa içi basıncın artması vazomotor merkezin iskemisine yol açar; bu durum muazzam bir sempatik vazokonstriksiyona (hipertansiyon) neden olurken, artan kan basıncı baroreseptörleri uyararak vagal refleksle kalp hızını düşürür (bradikardi). KİBAS, Hipertansiyon ve Bradikardi üçlüsüne Cushing Triadı adı verilir ve MSS'nin ölümcül iskemik cevabıdır.

---

### ÇİFT 26 (Benzerlik: 0.75)

**Soru 1 (ID: 85cb1d88-855e-497b-82aa-e7ed8798632f)**
Soru Kökü: Derin inspirasyon sırasında sağ kalbe dönen venöz kan hacmi artar. Bu durumun normal oskültasyon bulgusu olan kalbin 2. sesi (S2) üzerindeki fizyolojik etkisi aşağıdakilerden hangisidir?
Doğru Şık (D): Pulmoner kapağın aort kapağından daha geç kapanmasına bağlı S2 çiftleşmesi
Açıklama: İnspirasyon sırasında intratorasik negatif basıncın artmasıyla sağ kalbe venöz dönüş artar, sağ ventrikülün atım hacmi ve ejeksiyon süresi uzar. Bu nedenle pulmoner kapak aort kapağına göre daha geç kapanır ve 2. kalp sesinin (S2) fizyolojik olarak çift duyulmasına (çiftleşmesine) neden olur. Aort kapağı kapanması her zaman daha erkendir ve sol kalp hemodinamiğinden etkilenir.

**Soru 2 (ID: bd24089b-7561-4cfa-8a67-eb4b1c08b582)**
Soru Kökü: Sağlıklı bir bireyde derin inspirasyon sırasında aort ve pulmoner kapakların kapanış zamanları arasındaki sürenin artmasına bağlı olarak oskültasyonda belirginleşen fizyolojik olay aşağıdakilerden hangisidir?
Doğru Şık (D): S2'nin fizyolojik çiftleşmesi
Açıklama: İnspirasyon sırasında intratorasik basıncın düşmesiyle sağ kalbe venöz dönüş artar ve sağ ventrikülün ejeksiyon süresi uzayarak pulmoner kapağın aort kapağından daha geç kapanmasına neden olur. Bu durum S2 sesinin fizyolojik olarak çift duyulmasıyla sonuçlanır. S3 veya S4 duyulması kapak asenkronizasyonundan ziyade sırasıyla hızlı doluş titreşimleri ve atriyum sistolü ile ilgilidir.

---

### ÇİFT 27 (Benzerlik: 0.75)

**Soru 1 (ID: 7903cd52-73e6-4976-817d-9343649d1847)**
Soru Kökü: Kalp yetmezliği tedavisinde kullanılan digital türevi ilaçlar ve endojen bir molekül olan ouabain, miyokard hücre membranında aşağıdaki proteinlerden hangisini doğrudan inhibe ederek pozitif inotropik etki gösterir?
Doğru Şık (A): Na+-K+ ATPaz pompası
Açıklama: Digital glikozidleri ve ouabain doğrudan Na+-K+ ATPaz pompasını inhibe eder, bu da hücre içi sodyum konsantrasyonunun artmasına yol açar. Artan sodyum, 3Na+-1Ca++ antiport sisteminin (NCX) çalışmasını yavaşlatır veya tersine çevirir, böylece hücre içi kalsiyum miktarı artarak daha güçlü bir kasılma (pozitif inotropik etki) elde edilir. L tipi kalsiyum kanalları sempatik uyarı ile aktive olurken, digital mekanizması sodyum gradyanı üzerinden dolaylı kalsiyum birikimi sağlar.

**Soru 2 (ID: fd43b056-8977-4677-a745-1d935454609f)**
Soru Kökü: Kalp yetmezliği tanısıyla izlenen ve pozitif inotropik (kasılma artırıcı) destek amacıyla dijital (kalp glikozidi) tedavisi başlanan bir hastada, bu ilacın hücresel kasılma gücünü artırıcı etkisi temel olarak hangi mekanizma üzerinden gerçekleşir?
Doğru Şık (A): Hücre zarındaki Na-K ATPaz pompasının inhibe edilmesiyle SR'ye Na-Ca değişiminin engellenmesi ve hücre içi kalsiyumun artması
Açıklama: Kalp glikozidleri (dijitaller), Na-K ATPaz pompasını bloke ederek hücre içi sodyum miktarını artırırlar. Konsantrasyon gradyanı kaybolduğu için 3Na içeri girerken 1 Ca dışarı atan sekonder aktif transport (antiport) sistemi durur; böylece hücre dışına atılamayan Ca hücre içinde birikir ve çok daha güçlü bir kasılma (pozitif inotropik etki) oluşturur. Adrenerjik reseptör veya L tipi kanal aktivasyonu sempatik ajanların mekanizmasıdır.

---

