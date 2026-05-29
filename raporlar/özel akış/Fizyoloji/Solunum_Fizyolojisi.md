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

### ÇİFT 1 (Benzerlik: 0.87)

**Soru 1 (ID: 79664fb9-0932-47fa-94fd-c3f02ddc6aa7)**
Soru Kökü: Oksijen-hemoglobin dissosiasyon eğrisini sağa kaydırarak dokulara oksijen sunumunu artıran faktörler arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (A): Fetal hemoglobin (HbF) varlığı
Açıklama: Fetal hemoglobin (HbF), 2,3-DPG bağlayamadığı için oksijene yüksek afinite duyar ve eğriyi sağa değil sola kaydırır. PCO2 artışı, sıcaklık artışı, asidoz ve yüksek 2,3-DPG düzeyleri ise doku metabolizmasının hızlandığını işaret ederek eğriyi sağa kaydırır. Sağa kayma, oksijenin dokulara daha kolay serbestleşmesini sağlar.

**Soru 2 (ID: e94c0012-9268-46a8-bc1f-baef296e45c6)**
Soru Kökü: Hemoglobin-oksijen ayrışma (dissosiasyon) eğrisinin durumunu belirleyen faktörlerden hangisi, dokulara daha fazla oksijen bırakılmasını sağlayacak şekilde eğriyi sağa **kaydırmaz**?
Doğru Şık (B): Eritrositlerde yoğun oranda fetal hemoglobin (HbF) bulunması
Açıklama: Fetal hemoglobin (HbF) yapısında 2,3-DPG molekülünü bağlayacak yapı bulunmadığı için oksijene olan afinitesi erişkin HbA'ya göre çok daha yüksektir; bu nedenle eğriyi sola kaydırarak oksijeni daha sıkı tutar. Artmış ısı, asidoz (Bohr etkisi), yüksek CO2 ve yüksek 2,3-DPG seviyeleri ise hemoglobinin afinitesini düşürerek oksijenin dokuya kolay bırakılmasını (eğrinin sağa kaymasını) garanti eder.

---

### ÇİFT 2 (Benzerlik: 0.86)

**Soru 1 (ID: 79664fb9-0932-47fa-94fd-c3f02ddc6aa7)**
Soru Kökü: Oksijen-hemoglobin dissosiasyon eğrisini sağa kaydırarak dokulara oksijen sunumunu artıran faktörler arasında aşağıdakilerden hangisi yer **almaz**?
Doğru Şık (A): Fetal hemoglobin (HbF) varlığı
Açıklama: Fetal hemoglobin (HbF), 2,3-DPG bağlayamadığı için oksijene yüksek afinite duyar ve eğriyi sağa değil sola kaydırır. PCO2 artışı, sıcaklık artışı, asidoz ve yüksek 2,3-DPG düzeyleri ise doku metabolizmasının hızlandığını işaret ederek eğriyi sağa kaydırır. Sağa kayma, oksijenin dokulara daha kolay serbestleşmesini sağlar.

**Soru 2 (ID: ee44a977-b24b-4013-bee8-7bcb277a4d2b)**
Soru Kökü: Aşağıdaki faktörlerden hangisi hemoglobin-oksijen dissosiasyon eğrisini sola kaydıran (afiniteyi artıran) nedenlerden biri **değildir**?
Doğru Şık (E): Vücut sıcaklığının artması
Açıklama: Vücut sıcaklığının artması doku metabolizmasının hızlandığını gösterir ve hemoglobinin oksijeni bırakmasını kolaylaştırmak için eğriyi sağa kaydırır. Düşük PCO2, alkaloz (pH artışı), methemoglobinemi, HbF ve düşük 2,3-DPG seviyeleri ise hemoglobinin oksijeni sıkı tutmasına neden olarak eğriyi sola kaydırır.

---

### ÇİFT 3 (Benzerlik: 0.84)

**Soru 1 (ID: 41da022e-2a74-46a9-8835-90b531e8fc1c)**
Soru Kökü: Endüstriyel bir kaza sonrası yoğun siyanür gazı soluyan 35 yaşındaki işçi acile getirilmiştir. Hastanın ölçülen arteriyal kanda PO2 düzeyi ve kanda taşıyıcı kapasitesi (Hb) tamamen normal saptanmasına rağmen hasta şiddetli laktik asidoz ve doku hipoksisi tablosundadır. Bu hastadaki patolojik süreç hangi hipoksi tipi ile tanımlanır?
Doğru Şık (D): Histotoksik hipoksi
Açıklama: Siyanür zehirlenmesinde akciğerlerin O2 alımı, kanın taşıma kapasitesi ve dokuya perfüzyon normaldir, ancak mitokondriyal sitokrom c oksidaz enzimi siyanür tarafından bloke edildiği için hücreler sunulan oksijeni kullanamaz; bu tablonun adı histotoksik hipoksidir. Kalp yetmezliği iskemik hipoksiye, CO zehirlenmesi anemik hipoksiye, yüksek irtifa veya solunum depresyonu hipoksik hipoksiye yol açar.

**Soru 2 (ID: a93c41a5-7a6e-484a-9b45-184870717024)**
Soru Kökü: Endüstriyel bir kazada siyanür gazına maruz kalan bir işçide, arteriyel PO2 düzeyi, doku kan perfüzyonu ve kanın oksijen taşıma kapasitesi normal olmasına rağmen şiddetli doku asidozu ve hücresel ölüm gerçekleşiyor. Bu patolojinin temelinde yatan hücresel metabolizma defekti, aşağıdaki hipoksi türlerinden hangisiyle adlandırılır?
Doğru Şık (D): Histotoksik hipoksi
Açıklama: Siyanür zehirlenmesi, dokulara sunulan oksijen miktarı ve kan akımı tamamen normal olmasına rağmen, hücre içi solunum enzimlerinin inhibisyonu nedeniyle oksijenin kullanılamadığı histotoksik hipoksi tablosuna neden olur. Anemik ve iskemik hipokside problem dokuya oksijenin taşınması veya ulaştırılmasındayken, histotoksik formda kan dokuya yeterli oksijeni bırakamaz çünkü hücre oksijeni alıp metabolize edemez. Bu özel durum, kanın dokulardan venöz sisteme paradoksal olarak çok yüksek oksijen satürasyonu ile dönmesine yol açar.

---

### ÇİFT 4 (Benzerlik: 0.84)

**Soru 1 (ID: 5829a25b-fea5-4118-9964-aee485e2bfa8)**
Soru Kökü: Otuz beş yaşında erkek hasta, kış aylarında kömür sobası kullanılan bir odada bilinç bulanıklığı şikayetiyle acil servise getiriliyor. Yapılan kan gazı analizinde arteriyel PO2 düzeyi normal sınırlarda saptanmasına rağmen şiddetli doku hipoksisi bulguları izleniyor. Bu hastadaki klinik tablonun fizyopatolojik temeli olan hipoksi türü aşağıdakilerden hangisidir?
Doğru Şık (D): Anemik hipoksi
Açıklama: Karbonmonoksit (CO) zehirlenmesi, arteriyel PO2 seviyesi normal olmasına rağmen oksijeni taşıyacak fonksiyonel hemoglobin miktarının fonksiyonel olarak azaldığı anemik hipoksi tablosuna neden olur. Histotoksik hipokside sorun hemoglobinin taşımasında değil, hücrelerin oksijeni kullanım defektindedir (örneğin siyanür zehirlenmesi). CO, hemoglobine oksijenden çok daha yüksek bir afiniteyle (karboksihemoglobin) bağlanarak kanın oksijen taşıma kapasitesini doğrudan bloke eder.

**Soru 2 (ID: 9ad7f98a-3cc7-4d0c-a3af-06b8c5a04bdb)**
Soru Kökü: Kırk yaşında erkek hasta kapalı garajda çalıştıktan sonra bilinç bulanıklığı ile acil servise getiriliyor. Hastanın arteriyel PO2 değeri normal saptanmasına rağmen şiddetli doku hipoksisi mevcuttur. Bu hastadaki hipoksi tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Anemik hipoksi
Açıklama: Arteriyel PO2 normal olmasına rağmen oksijeni taşıyacak aktif hemoglobin miktarının azaldığı durumlara (karbonmonoksit zehirlenmesi veya anemi) anemik hipoksi denir. Histotoksik hipokside hücreler zehirlenmiştir (örn. siyanür), hipoksik hipokside PO2 düşüktür (örn. yüksek irtifa), iskemik hipokside ise kan akımı yetersizdir.

---

### ÇİFT 5 (Benzerlik: 0.83)

**Soru 1 (ID: 5829a25b-fea5-4118-9964-aee485e2bfa8)**
Soru Kökü: Otuz beş yaşında erkek hasta, kış aylarında kömür sobası kullanılan bir odada bilinç bulanıklığı şikayetiyle acil servise getiriliyor. Yapılan kan gazı analizinde arteriyel PO2 düzeyi normal sınırlarda saptanmasına rağmen şiddetli doku hipoksisi bulguları izleniyor. Bu hastadaki klinik tablonun fizyopatolojik temeli olan hipoksi türü aşağıdakilerden hangisidir?
Doğru Şık (D): Anemik hipoksi
Açıklama: Karbonmonoksit (CO) zehirlenmesi, arteriyel PO2 seviyesi normal olmasına rağmen oksijeni taşıyacak fonksiyonel hemoglobin miktarının fonksiyonel olarak azaldığı anemik hipoksi tablosuna neden olur. Histotoksik hipokside sorun hemoglobinin taşımasında değil, hücrelerin oksijeni kullanım defektindedir (örneğin siyanür zehirlenmesi). CO, hemoglobine oksijenden çok daha yüksek bir afiniteyle (karboksihemoglobin) bağlanarak kanın oksijen taşıma kapasitesini doğrudan bloke eder.

**Soru 2 (ID: b63d3630-eef1-4e5d-92a7-477247b7f22d)**
Soru Kökü: Eski model bir doğal gaz sobasından sızan karbonmonoksit nedeniyle bilinci kapalı halde hastaneye getirilen 40 yaşındaki erkek hastada, arteriyal kan gazında çözünmüş PO2 basıncının normal olduğu ancak hemoglobin satürasyonunun çok düşük olduğu gözlenmiştir. Bu klinik senaryo fizyolojik olarak hangi başlık altında sınıflandırılır?
Doğru Şık (E): Anemik hipoksi
Açıklama: Karbonmonoksit (CO) zehirlenmesinde CO, hemoglobine yapışıp onu işlevsizleştirir. Kandaki taşıyıcı proteinler gazları nakledemez hale geldiğinden, klinik tablo aynen gerçek anemi (Hb eksikliği) durumunda olduğu gibi 'Anemik Hipoksi' sınıfına girer. Histotoksik hipokside enzimatik zehirlenme (siyanür), iskemik hipokside dokuya kalp tarafından kan gitmemesi, hipoksik hipokside ise temel PO2 düşüşü söz konusudur.

---

### ÇİFT 6 (Benzerlik: 0.82)

**Soru 1 (ID: 6404dd3c-c260-4c1e-b7c6-d06a47105604)**
Soru Kökü: Kronik sigara kullanımına bağlı amfizem gelişen 65 yaşındaki hastada, lökositlerden kontrolsüzce salınan elastaz enziminin akciğer dokusundaki tahribatına ikincil olarak solunum mekaniğinde aşağıdaki değişimlerden hangisi meydana gelir?
Doğru Şık (A): Akciğer kompliyansı ve fonksiyonel rezidüel kapasite (FRC) patolojik olarak artar.
Açıklama: Amfizem durumunda kontrolsüz elastaz enzimi akciğer elastik liflerini parçalar, bu nedenle elastik 'recoil' (geri çekilme) kuvveti azalır ve akciğer genişlemeye fazlasıyla meyilli hale gelir. Elastik kuvvetin düşmesi kompliyansı artırır, havayolları ekspirasyonda kolayca çöktüğü için boşalamayan havanın birikmesiyle Fonksiyonel Rezidüel Kapasite (FRC) ciddi oranda artar. Kompliyans düşüşü amfizem değil fibrozis/RDS paternidir.

**Soru 2 (ID: b329602d-746b-4e41-b09a-107d08e07d60)**
Soru Kökü: Alfa-1 antitripsin eksikliğine bağlı amfizem tanısı konulan 45 yaşındaki erkek hastada, alveol duvarlarında progresif yıkım ve akciğer elastikiyetinde kayıp tespit edilmiştir. Bu hastanın akciğer mekaniği incelendiğinde, normal bir bireye göre aşağıdaki değişikliklerden hangisinin görülmesi en olasıdır?
Doğru Şık (E): Fonksiyonel rezidüel kapasitede (FRC) artış
Açıklama: Amfizem durumunda lökositlerden salınan elastaz enziminin aktivitesi durdurulamaz ve akciğerin elastik geri çekilme kuvveti kaybolur. Bu elastikiyet kaybı kompliyansın patolojik artışına neden olurken, dışa doğru iten göğüs duvarı kuvveti baskın çıktığı için Akciğerde hapsolan hava artar; dolayısıyla Fonksiyonel Rezidüel Kapasite (FRC) yükselir. Fibroziste ise tam tersi elastikiyet artışı ve kompliyans düşüşü FRC'yi azaltır.

---

### ÇİFT 7 (Benzerlik: 0.82)

**Soru 1 (ID: 1b6b44b3-0bb3-440f-bc06-43148fe61346)**
Soru Kökü: Aşağıdaki moleküllerin oksijene olan afiniteleri en yüksekten en düşüğe doğru sıralandığında, doğru sıralama hangisidir?
Doğru Şık (B): CO > Miyoglobin > HbF > HbA > HbS
Açıklama: Oksijene en yüksek afiniteyi karbonmonoksit (CO) gösterir, ardından dokularda oksijen depolayan miyoglobin gelir. Fetal hemoglobin (HbF) 2,3-DPG bağlayamadığı için erişkin hemoglobininden (HbA) daha yüksek afiniteye sahiptir; orak hücreli anemideki HbS'in afinitesi ise en düşüktür. Bu sıralama dokulara oksijen transfer yönünü belirleyen temel gradiyenttir.

**Soru 2 (ID: bba052ad-df69-4221-8bfc-340296b54840)**
Soru Kökü: Gaz bağlama kinetikleri incelendiğinde moleküllerin ilgili yapıtaşlarına gösterdiği afiniteler farklılık arz eder. Aşağıdaki molekül-yapı çiftlerinin oksijen veya gaza olan afinitelerinin büyüklük sırası (en yüksekten en düşüğe) hangisinde doğru verilmiştir?
Doğru Şık (D): Karbonmonoksit > Miyoglobin > Fetal HbF > Erişkin HbA > Orak hücreli HbS
Açıklama: Hemoglobin ailesinin CO'ya ilgisi, oksijene olan ilgisinden yaklaşık 200-250 kat yüksektir, bu nedenle en yüksek afinite CO'dadır. Oksijen için bakıldığında; miyoglobinin tek polipeptid zincirli hiperbolik doğası nedeniyle oksijen tutuculuğu en fazladır. HbF ise 2,3-DPG bağlamadığı için erişkin HbA'dan daha yüksek afinite gösterir. Orak hücreli anemiye neden olan HbS varyantında ise gaz taşıma ilgisi en düşüktür.

---

### ÇİFT 8 (Benzerlik: 0.80)

**Soru 1 (ID: 6619924a-7f94-4302-8b96-e2e2c98dea04)**
Soru Kökü: Rutin spirometri testi ile soluk hacmi ve yedek kapasiteler hesaplanabilmektedir. Aşağıdaki akciğer hacim veya kapasitelerinden hangisi tek başına direkt spirometri cihazı ile **ölçülemez**?
Doğru Şık (E): Fonksiyonel rezidüel kapasite
Açıklama: Fonksiyonel rezidüel kapasite (FRC), formül olarak Ekspirasyon Yedek Hacmi (EYH) ile Rezidüel Hacim (RH) toplamından oluşur ve içinde zorlu ekspirasyonla bile çıkarılamayan 'Rezidüel Hacim' barındırdığı için spirometreyle ölçülemez. Kalan statik hacimlerin ölçümü için helyum dilüsyonu gibi özel kapalı devre tekniklere ihtiyaç vardır. Vital kapasite veya yedek hacimler direkt akım sensörleriyle tespit edilir.

**Soru 2 (ID: 934aa7f7-8220-41b2-95d0-63f9b904000d)**
Soru Kökü: Standart spirometre cihazı ile klinikte pek çok akciğer hacmi ve kapasitesi ölçülebilmektedir. Buna göre aşağıda verilen solunum mekaniği parametrelerinden hangisi spirometre yöntemiyle doğrudan **ölçülemez**?
Doğru Şık (E): Fonksiyonel rezidüel kapasite
Açıklama: Fonksiyonel rezidüel kapasite (FRC), ekspirasyon yedek hacmi ile rezidüel hacmin toplamına eşittir. Spirometre ile ekspirasyon yedek hacmi ölçülebilse de, rezidüel hacim (akciğerde daima hapis kalan hava) ağız yoluyla dışarı üflenemediğinden FRC'nin toplam boyutu basit spirometriyle belirlenemez. Bu ölçüm için helyum dilüsyonu veya vücut pletismografisi kullanılır.

---

### ÇİFT 9 (Benzerlik: 0.80)

**Soru 1 (ID: 1a6af557-bd2d-4e71-9327-8880cf04e5a3)**
Soru Kökü: Altmış beş yaşındaki erkek hastada konjestif kalp yetmezliğine bağlı olarak kardiyak debi düşmüş ve doku perfüzyonunun belirgin derecede bozulduğu tespit edilmiştir. Hastanın arteriyel kan gazı analizinde PO2 değerleri ve kanda bulunan total hemoglobin miktarı normal sınırlardadır. Buna rağmen dokulara ulaşan oksijen miktarının düşük olması, aşağıdaki klinik durumlardan hangisiyle açıklanır?
Doğru Şık (D): İskemik hipoksi
Açıklama: Arteriyel kanda oksijen bağlama ve taşıma parametreleri (PO2 ve Hb) normal olduğu halde, pompa zafiyetine (kalp yetmezliği veya lokal damar tıkanıklığı) bağlı olarak kanın dokuya ulaşamaması iskemik hipoksi (stagnant hipoksi) tablosudur. Siyanür zehirlenmesinde histotoksik, karbonmonoksit vakalarında anemik ve yüksek irtifada ise hipoksik hipoksi mekanizmaları işler.

**Soru 2 (ID: acf2dabb-53a5-4097-9821-8481a43ac75e)**
Soru Kökü: Altmış beş yaşında konjestif kalp yetmezliği tanısı olan kadın hasta, eforla gelen nefes darlığı ve periferik siyanoz şikayetiyle başvuruyor. Laboratuvar testlerinde hemoglobin miktarı ve kan gazında arteriyel PO2 düzeyi tamamen normal saptanıyor. Bu hastanın periferik dokularında gözlenen hipoksi tipi aşağıdakilerden hangisidir?
Doğru Şık (B): İskemik hipoksi
Açıklama: Konjestif kalp yetmezliği veya dolaşım şoku gibi klinik durumlarda, arteriyel PO2 ve kanın hemoglobin miktarı normal olmasına rağmen dokulara giden kan akımının (perfüzyonun) yetersizliğine bağlı olarak iskemik hipoksi gelişir. Anemik hipokside oksijen taşıma kapasitesi (Hb) düşükken, hipoksik hipokside ise kana geçen oksijen basıncı (PO2) seviyesi yetersizdir. Kalp debisinin düşmesi, dokuların birim zamanda karşılaştığı oksijen miktarını mekanik olarak sınırlayarak bu tabloyu yaratır.

---

### ÇİFT 10 (Benzerlik: 0.80)

**Soru 1 (ID: dedde726-d0b0-43d1-a5f6-5abd862a0b3d)**
Soru Kökü: Venöz kanda karbondioksitin yaklaşık %23'lük kısmını oluşturan ve doğrudan hemoglobine bağlı olarak taşınan form aşağıdakilerden hangisidir?
Doğru Şık (A): Karbaminohemoglobin
Açıklama: Karbondioksitin hemoglobine bağlanarak oluşturduğu kompleks karbaminohemoglobindir ve toplam CO2 taşımasının %23'ünü oluşturur. Karboksihemoglobin karbonmonoksit bağlanmasıyla oluşurken, methemoglobin demirin +3 değerlikli olduğu patolojik formdur. Karbondioksit globin zincirlerindeki amino asit kalıntılarına bağlanır.

**Soru 2 (ID: eb924d21-4ca1-4711-9da1-be3927928930)**
Soru Kökü: Doku metabolizması sonucu üretilen ve atılmak üzere venöz kana geçen karbondioksitin taşınmasında üç temel fizyolojik yol bulunur. Toplam karbondioksitin yaklaşık %23'lük kısmını oluşturan ve doğrudan globin zincirlerine bağlanarak taşınan spesifik form aşağıdakilerden hangisidir?
Doğru Şık (D): Karbaminohemoglobin
Açıklama: Karbondioksitin kanda hemoglobine doğrudan bağlanarak oluşturduğu yapı karbaminohemoglobindir ve total CO2 naklinin %23'ünü teşkil eder. En büyük taşıma mekanizması olan bikarbonat (HCO3-) formu ise total taşınmanın %70'ini oluşturur ve eritrositlerde karbonik anhidraz enzimi kullanılarak sentezlenir. Karbaminohemoglobinde CO2 demire değil, proteinin terminal amino gruplarına bağlanır.

---

### ÇİFT 11 (Benzerlik: 0.80)

**Soru 1 (ID: 05e36e16-f20d-4980-adfb-3471ce852dad)**
Soru Kökü: Kan karbondioksit (PCO2) düzeyi arttığında medullada yer alan santral kemoreseptörler solunumu uyarır. Bu uyarı mekanizmasında kemoreseptörleri doğrudan ve birincil olarak aktive eden sinyal molekülü aşağıdakilerden hangisidir?
Doğru Şık (D): BOS (Beyin Omurilik Sıvısı) içindeki hidrojen iyonları
Açıklama: Kandaki hidrojen iyonları kan-beyin bariyerini (KBB) aşamaz. Kan karbondioksiti (CO2) yüksek liposolubl olduğu için rahatça KBB'yi geçer ve BOS'a ulaşır; burada suyla reaksiyona girerek karbonik asidi oluşturur. İyonize olan bu asitten salınan BOS içindeki H+ iyonları santral kemoreseptörleri doğrudan uyararak kemoduyar alanı aktive eder. Uyarıcı tetik molekülü spesifik olarak BOS içi H+ iyonlarıdır.

**Soru 2 (ID: 5baf7e57-a24b-4c28-a1a0-0d1d08009f0c)**
Soru Kökü: Medullada yer alan santral kemoreseptörleri doğrudan uyararak solunum merkezinde sinyal oluşturulmasını sağlayan molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Hidrojen (H+) iyonları
Açıklama: Santral kemoreseptörler kan CO2 seviyelerine karşı duyarlı olsalar da, kan-beyin bariyerini geçen CO2 beyin omurilik sıvısında (BOS) su ile birleşerek karbonik asit oluşturur ve bu asit H+ iyonlarına ayrışır. Kemoreseptörleri doğrudan (direkt) uyaran molekül sadece H+ iyonlarıdır. CO2 indirekt bir etkendir.

---

### ÇİFT 12 (Benzerlik: 0.80)

**Soru 1 (ID: 36da21e0-727e-4adf-9d4e-10cb4d5e4767)**
Soru Kökü: 34 haftalık doğan diyabetik bir anne bebeğinde, doğumdan hemen sonra şiddetli takipne, inleme ve siyanoz (solunumsal distres sendromu) gelişmiştir. Bu klinik tablonun zemininde yatan en olası endokrin mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): Fetal hiperinsülineminin SP-A sentezini azaltması
Açıklama: Diyabetik anne bebeklerinde yüksek maternal glukoza yanıt olarak gelişen fetal hiperinsülinemi, sürfaktan yapısına katılan proteinlerden SP-A sentezini baskılar ve sürfaktanın yüzey gerilimini düşürücü etkinliğini bozar. Kortizol ve tiroid hormonları aksine fetal akciğer matürasyonunu hızlandıran ve sürfaktan üretimini teşvik eden fizyolojik regülatörlerdir. SP-A eksikliği alveollerin geri emilim ve yayılım dinamiğini kırarak kollapsa yol açar.

**Soru 2 (ID: b3a7d3dc-bbcf-4fe2-b539-6e4ac3633acd)**
Soru Kökü: Kırk haftalık gebe olan 32 yaşındaki diyabetik bir hastanın, 4200 gram ağırlığında makrozomik bir bebeği doğmuştur. Bebeğin doğumdan kısa süre sonra solunum sıkıntısı (distres sendromu) geliştirdiği gözlenmiştir. Bu bebekte solunum distres sendromu gelişim riskini artıran temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (D): İnsülinin SP-A sentezini azaltarak sürfaktan etkinliğini bozması
Açıklama: Diyabetik anne bebeklerinde hiperinsülinemi tablosu mevcuttur ve yüksek insülin, fetal akciğerlerde Tip II pnömositlerden SP-A sentezini doğrudan azaltır. SP-A eksikliği, sürfaktanın geri emilimini ve alveoler dizilimini bozduğu için sürfaktanın toplam etkinliği azalır, bu da matürasyonda gecikme ve respiratuar distres ile sonuçlanır. Tiroid ve kortizol hormonları sürfaktan sentezini stimüle ederken insülin tam zıt etki gösterir.

---

### ÇİFT 13 (Benzerlik: 0.79)

**Soru 1 (ID: 62d05fbf-bf75-401e-a0c6-6f5bce7751a8)**
Soru Kökü: Otuz beş yaşındaki sigara kullanıcısı erkek hastada solunum yollarında obstrüksiyon şüphesi bulunmaktadır. FEV1 ve FVC değerleri sınırda normal çıkan hastanın, hava yollarındaki daralmayı en erken aşamada gösterecek ve özellikle küçük hava yolları obstrüksiyonunu yansıtacak spirometrik parametre aşağıdakilerden hangisidir?
Doğru Şık (A): FEF25-75 (Zorlu ekspirasyon ortası akım hızı)
Açıklama: Zorlu ekspirasyonun %25'i ile %75'i arasında gerçekleşen akım hızı (FEF25-75), obstrüktif akciğer hastalıklarının erken dönem tespiti için en hassas parametredir. Büyük hava yollarının direnci PEF veya FEV1'e daha fazla yansırken, periferal 2 mm'den küçük hava yollarındaki inflamatuvar daralmalar ilk olarak eforun orta fazında akım hızını düşürerek FEF25-75'te bozulmaya neden olur.

**Soru 2 (ID: 6ddff03d-f901-48a4-803b-90581d6b217d)**
Soru Kökü: Uzun süredir alerjik duyarlanması olan 32 yaşındaki bir astım hastasında solunum fonksiyon testi yapılmıştır. Havayollarında, özellikle orta ve küçük dallardaki obstrüksiyonu gösteren ve kronik süreçte daralmayı en erken saptayan parametre aşağıdakilerden hangisidir?
Doğru Şık (D): Zorlu ekspirasyon ortası akım hızı (FEF25-75)
Açıklama: Küçük hava yolları akciğerin sessiz zonlarıdır ve spirometride başlangıçta Tiffeneau indeksi normal görünse de, zorlu ekspirasyon ortası akım hızında (FEF25-75) meydana gelen düşüş hava yollarındaki hastalığın (astım, erken KOAH vb.) en erken indikatörüdür. Normalde %70'den büyük olması beklenen bu değerin erken düşmesi çap daralmasını spesifik olarak gösterir.

---

### ÇİFT 14 (Benzerlik: 0.79)

**Soru 1 (ID: 2e2c5368-c56d-45eb-92d0-8c2e6e125e23)**
Soru Kökü: Derin ven trombozu öyküsü olan 60 yaşındaki kadın hastada masif pulmoner emboli tespit edilmiştir. Embolinin tıkayıcı etkisine maruz kalan spesifik akciğer lobunda alveol içi havalanma devam etmesine rağmen kan akımı sıfıra inmiştir. Bu hastanın etkilenen lobundaki ventilasyon/perfüzyon (V A/Q) oranı ile ilgili en doğru tanımlama aşağıdakilerden hangisidir?
Doğru Şık (E): Oran sonsuza ulaşır, alveolar ölü boşluk meydana gelir.
Açıklama: Pulmoner embolide kan akımı (Q) sıfıra düştüğü için V/Q (Ventilasyon / 0) denkleminin matematiksel karşılığı sonsuzdur. Alveollere hava girip çıkar ancak etrafında difüzyona katılacak kan olmadığı için o havanın fonksiyonel değeri olmaz, buna alveolar ölü boşluk (alveolar dead space) denir. Solunum yolunun tam tıkanması durumunda ise ventilasyon sıfırlanacağından V/Q oranı sıfır olur ve şant izlenir.

**Soru 2 (ID: 95f6cc78-39e8-4fc6-9710-83dded45d775)**
Soru Kökü: Geçirdiği derin ven trombozu sonrası masif pulmoner emboli tablosuyla getirilen 60 yaşındaki erkek hastada, tıkanan pulmoner damar yatağını drene eden alveollerdeki kan gazı dinamiği aşağıdakilerden hangisinde doğru tanımlanmıştır?
Doğru Şık (A): V/Q oranı sonsuz olur, alveoldeki PCO2 ve PO2 inspirasyon havasına yaklaşır.
Açıklama: Pulmoner embolide tıkanan damarın drene ettiği alveollere havalanma (Ventilasyon) gelse bile kan akımı (Perfüzyon/Q) sıfıra indiği için V/Q oranı matematiksel olarak sonsuz olur ve bölge 'ölü boşluk' görevi görür. Kan geçişi olmadığı için alveol içi gaz kompozisyonu çevresel inspirasyon havasına (Yüksek O2, sıfıra yakın CO2) döner. Havayolunun tıkanıp kanın devam ettiği tam tersi senaryoda V/Q sıfır (şant) olurdu.

---

### ÇİFT 15 (Benzerlik: 0.79)

**Soru 1 (ID: 5f9d1750-0cb5-441d-8e38-0cdef560bd95)**
Soru Kökü: Solunum fonksiyon testi uygulanan bir hastada, hem FEV1 hem de FVC değerlerinin referans aralığının altında olduğu görülmüştür. Ancak hastanın Tiffeneau indeksinin (FEV1/FVC) normal veya normale göre artmış olduğu saptanmıştır. Bu solunum paterni aşağıdaki hastalıklardan hangisi için **en tipik** bulgudur?
Doğru Şık (E): İntertisyel akciğer fibrozisi
Açıklama: İntertisyel fibrozis, tüberküloz veya atelektazi gibi restriktif akciğer hastalıklarında, parankimin elastik geri çekilme gücü artar (kompliyans düşer). Bu durum toplam kapasiteyi (FVC) daraltır ancak havayı itme kuvveti yüksek olduğu için birinci saniyede atılan oran yüksek kalır, böylece FEV1/FVC oranı normal ya da yüksek ölçülür. Obstrüktif hastalıklarda (astım, amfizem) ise oran mutlak surette düşer.

**Soru 2 (ID: f89cb4e4-c53c-453e-b468-326606d3d698)**
Soru Kökü: Rutin sağlık taraması için spirometri testine giren 50 yaşındaki kadın hastanın sonuçlarında; Zorlu Vital Kapasite (FVC) ve FEV1 değerlerinin belirgin düşük olduğu, ancak FEV1/FVC oranının normal referans sınırlarında korunduğu saptanmıştır. Bu tablo aşağıdaki patolojilerden hangisi ile en fazla uyumludur?
Doğru Şık (B): İntertisyel akciğer fibrozisi
Açıklama: İntertisyel fibrozis veya atelektazi gibi restriktif hastalıklarda akciğerin genişleme kapasitesi düştüğü için hem atılan toplam hava (FVC) hem de 1. saniyede çıkarılan hacim (FEV1) orantılı bir şekilde azalır; bu nedenle Tiffeneau indeksi (FEV1/FVC) normal veya yüksek kalır. Astım, KOAH veya amfizem gibi obstrüktif hastalıklarda ise birinci saniyedeki hava çıkış direnci çok yüksek olduğu için oran spesifik olarak azalır.

---

### ÇİFT 16 (Benzerlik: 0.79)

**Soru 1 (ID: 6e18e534-3148-40d4-8019-ae971384ae6d)**
Soru Kökü: Aortik ark ve karotis bifurkasyonunda yerleşen, Tip I ve Tip II hücrelerden zengin periferik kemoreseptörler (Glomus cisimleri) ile ilgili aşağıdaki mekanizmalardan hangisi **yanlıştır**?
Doğru Şık (B): Oksijen parsiyel basıncındaki (PO2) küçük oynamalara, örneğin 95'ten 85 mmHg'ye düşüşe son derece duyarlıdırlar.
Açıklama: Periferik glomus cisimciklerinin en önemli fizyolojik özelliği kandaki minör (hafif) oksijen düşüşlerine yanıt vermemeleridir. Sadece PO2 kritik olan 60 mmHg seviyesinin altına indiği zaman oksijene duyarlı K+ kanalları kapanıp hücreyi depolarize ederek hızlı bir acil koruyucu hiperventilasyon refleksi başlatırlar. Küçük dalgalanmaları ise medulladaki CO2 duyarlı santral reseptörler kompanse eder.

**Soru 2 (ID: cf39ab54-1a6c-47e5-b3e6-2fe2b3b2d821)**
Soru Kökü: Periferik kemoreseptörlerde bulunan Glomus Tip I hücreleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Arteriyel PO2 değeri 90 mmHg'nin altına düştüğünde uyarılırlar.
Açıklama: Glomus Tip I hücreleri yalnızca hipoksiye duyarlıdır ve uyarılabilmeleri için arteriyel PO2 değerinin spesifik olarak 60 mmHg'nin altına düşmesi gerekir. 90 mmHg gibi hafif düşüşler bu kemoreseptörleri aktive etmez. Uyarılma sonrası depolarizasyon, kalsiyum girişi ve ATP/Dopamin salınımı gerçekleşir.

---

### ÇİFT 17 (Benzerlik: 0.79)

**Soru 1 (ID: e94c0012-9268-46a8-bc1f-baef296e45c6)**
Soru Kökü: Hemoglobin-oksijen ayrışma (dissosiasyon) eğrisinin durumunu belirleyen faktörlerden hangisi, dokulara daha fazla oksijen bırakılmasını sağlayacak şekilde eğriyi sağa **kaydırmaz**?
Doğru Şık (B): Eritrositlerde yoğun oranda fetal hemoglobin (HbF) bulunması
Açıklama: Fetal hemoglobin (HbF) yapısında 2,3-DPG molekülünü bağlayacak yapı bulunmadığı için oksijene olan afinitesi erişkin HbA'ya göre çok daha yüksektir; bu nedenle eğriyi sola kaydırarak oksijeni daha sıkı tutar. Artmış ısı, asidoz (Bohr etkisi), yüksek CO2 ve yüksek 2,3-DPG seviyeleri ise hemoglobinin afinitesini düşürerek oksijenin dokuya kolay bırakılmasını (eğrinin sağa kaymasını) garanti eder.

**Soru 2 (ID: ee44a977-b24b-4013-bee8-7bcb277a4d2b)**
Soru Kökü: Aşağıdaki faktörlerden hangisi hemoglobin-oksijen dissosiasyon eğrisini sola kaydıran (afiniteyi artıran) nedenlerden biri **değildir**?
Doğru Şık (E): Vücut sıcaklığının artması
Açıklama: Vücut sıcaklığının artması doku metabolizmasının hızlandığını gösterir ve hemoglobinin oksijeni bırakmasını kolaylaştırmak için eğriyi sağa kaydırır. Düşük PCO2, alkaloz (pH artışı), methemoglobinemi, HbF ve düşük 2,3-DPG seviyeleri ise hemoglobinin oksijeni sıkı tutmasına neden olarak eğriyi sola kaydırır.

---

### ÇİFT 18 (Benzerlik: 0.78)

**Soru 1 (ID: 44457232-1930-4d2e-9108-70ae7c5501ba)**
Soru Kökü: Merkezi sinir sisteminde solunumun ritmik elektriksel döngüsünü başlatan, birincil ritim oluşturucu 'pacemaker' hücresel alan aşağıdakilerden hangisidir?
Doğru Şık (C): Pre-Bötzinger kompleksi
Açıklama: Ventral solunum grubunun proksimalinde yer alan Pre-Bötzinger kompleksi solunumun temel pacemaker alanıdır ve ritmik inspirasyon ateşlemesini yönetir. Dorsal grup bu rampa sinyallerini taşıyıp diyafragmayı uyarırken, pnömotaksik merkez solunumun tepe (kesilme) noktasını ayarlar. Pre-Bötzinger kompleksinin P maddesi ile uyarılıp opioidlerle solunum arrestine gitmesi klinik bir yansımadır.

**Soru 2 (ID: 62a49f67-084a-4e2b-b671-be2dbcfbf0ce)**
Soru Kökü: Ventral solunum grubu nöronlarının hemen proksimalinde yer alan ve solunumun pacemaker (uyarı doğurucu) hücreleri olarak kabul edilen yapı aşağıdakilerden hangisidir?
Doğru Şık (E): Pre-Bötzinger kompleksi
Açıklama: Pre-Bötzinger kompleksi (Pre-BÖTC), medullada yer alan ve ritmik solunum deşarjlarını başlatan pacemaker hücrelerini içeren kritik bölgedir. Dorsal solunum grubu ile güçlü sinaptik bağlantıları vardır. Nükleus traktus solitarius ise periferik kemoreseptörlerden gelen duysal sinyalleri toplayan merkezdir.

---

### ÇİFT 19 (Benzerlik: 0.78)

**Soru 1 (ID: 7a2960aa-8639-42da-a94a-b09a92cc1283)**
Soru Kökü: Akciğerlerin aşırı havalanması sonucu bronş ve bronşiyol duvarlarındaki gerilme reseptörlerinin vagus siniri üzerinden medullayı uyararak inspirasyonu sonlandırdığı, akciğerleri aşırı genişlemeden koruyan refleks aşağıdakilerden hangisidir?
Doğru Şık (E): Hering-Breuer refleksi
Açıklama: Akciğerlerin aşırı genişlemesini veya sönmesini önleyen mekanizmaya Hering-Breuer refleksi denir. Bu refleks koruyucu bir geri bildirim mekanizmasıdır ve akciğer dokusu aşırı gerildiğinde vagus üzerinden inspirasyon merkezini (DSGN) inhibe eder. Bainbridge ve Cushing refleksleri kardiyovasküler sistemle ilgilidir.

**Soru 2 (ID: c50ee0dd-4c29-4654-9bbf-6a3891bd44f7)**
Soru Kökü: Solunum kontrolünde, akciğer parankimindeki mekanoreseptörlerin uyarılmasıyla akciğerlerin aşırı genişlemesini veya aşırı sönmesini önleyerek koruyucu rol oynayan refleks mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Hering-Breuer refleksi
Açıklama: Hering-Breuer refleksi, akciğer parankimindeki gerilme reseptörlerinin uyarılmasıyla akciğerlerin aşırı hacim değişikliklerini (aşırı genişleme veya sönme) engelleyen nöral koruyucu bir reflekstir. Klor şifti eritrositlerde CO2 taşınması sırasında gerçekleşen hücresel bir olayken, Bohr ve Haldane etkileri hemoglobinin oksijen ve karbondioksit afinitesiyle ilişkili kimyasal mekanizmalardır. Bu refleks, mekanik bir doku uyarısını solunum merkezini baskılayan bir sinyale dönüştürerek solunum derinliğini sınırlar.

---

### ÇİFT 20 (Benzerlik: 0.77)

**Soru 1 (ID: 41da022e-2a74-46a9-8835-90b531e8fc1c)**
Soru Kökü: Endüstriyel bir kaza sonrası yoğun siyanür gazı soluyan 35 yaşındaki işçi acile getirilmiştir. Hastanın ölçülen arteriyal kanda PO2 düzeyi ve kanda taşıyıcı kapasitesi (Hb) tamamen normal saptanmasına rağmen hasta şiddetli laktik asidoz ve doku hipoksisi tablosundadır. Bu hastadaki patolojik süreç hangi hipoksi tipi ile tanımlanır?
Doğru Şık (D): Histotoksik hipoksi
Açıklama: Siyanür zehirlenmesinde akciğerlerin O2 alımı, kanın taşıma kapasitesi ve dokuya perfüzyon normaldir, ancak mitokondriyal sitokrom c oksidaz enzimi siyanür tarafından bloke edildiği için hücreler sunulan oksijeni kullanamaz; bu tablonun adı histotoksik hipoksidir. Kalp yetmezliği iskemik hipoksiye, CO zehirlenmesi anemik hipoksiye, yüksek irtifa veya solunum depresyonu hipoksik hipoksiye yol açar.

**Soru 2 (ID: 9ad7f98a-3cc7-4d0c-a3af-06b8c5a04bdb)**
Soru Kökü: Kırk yaşında erkek hasta kapalı garajda çalıştıktan sonra bilinç bulanıklığı ile acil servise getiriliyor. Hastanın arteriyel PO2 değeri normal saptanmasına rağmen şiddetli doku hipoksisi mevcuttur. Bu hastadaki hipoksi tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Anemik hipoksi
Açıklama: Arteriyel PO2 normal olmasına rağmen oksijeni taşıyacak aktif hemoglobin miktarının azaldığı durumlara (karbonmonoksit zehirlenmesi veya anemi) anemik hipoksi denir. Histotoksik hipokside hücreler zehirlenmiştir (örn. siyanür), hipoksik hipokside PO2 düşüktür (örn. yüksek irtifa), iskemik hipokside ise kan akımı yetersizdir.

---

### ÇİFT 21 (Benzerlik: 0.77)

**Soru 1 (ID: 1a6af557-bd2d-4e71-9327-8880cf04e5a3)**
Soru Kökü: Altmış beş yaşındaki erkek hastada konjestif kalp yetmezliğine bağlı olarak kardiyak debi düşmüş ve doku perfüzyonunun belirgin derecede bozulduğu tespit edilmiştir. Hastanın arteriyel kan gazı analizinde PO2 değerleri ve kanda bulunan total hemoglobin miktarı normal sınırlardadır. Buna rağmen dokulara ulaşan oksijen miktarının düşük olması, aşağıdaki klinik durumlardan hangisiyle açıklanır?
Doğru Şık (D): İskemik hipoksi
Açıklama: Arteriyel kanda oksijen bağlama ve taşıma parametreleri (PO2 ve Hb) normal olduğu halde, pompa zafiyetine (kalp yetmezliği veya lokal damar tıkanıklığı) bağlı olarak kanın dokuya ulaşamaması iskemik hipoksi (stagnant hipoksi) tablosudur. Siyanür zehirlenmesinde histotoksik, karbonmonoksit vakalarında anemik ve yüksek irtifada ise hipoksik hipoksi mekanizmaları işler.

**Soru 2 (ID: 5829a25b-fea5-4118-9964-aee485e2bfa8)**
Soru Kökü: Otuz beş yaşında erkek hasta, kış aylarında kömür sobası kullanılan bir odada bilinç bulanıklığı şikayetiyle acil servise getiriliyor. Yapılan kan gazı analizinde arteriyel PO2 düzeyi normal sınırlarda saptanmasına rağmen şiddetli doku hipoksisi bulguları izleniyor. Bu hastadaki klinik tablonun fizyopatolojik temeli olan hipoksi türü aşağıdakilerden hangisidir?
Doğru Şık (D): Anemik hipoksi
Açıklama: Karbonmonoksit (CO) zehirlenmesi, arteriyel PO2 seviyesi normal olmasına rağmen oksijeni taşıyacak fonksiyonel hemoglobin miktarının fonksiyonel olarak azaldığı anemik hipoksi tablosuna neden olur. Histotoksik hipokside sorun hemoglobinin taşımasında değil, hücrelerin oksijeni kullanım defektindedir (örneğin siyanür zehirlenmesi). CO, hemoglobine oksijenden çok daha yüksek bir afiniteyle (karboksihemoglobin) bağlanarak kanın oksijen taşıma kapasitesini doğrudan bloke eder.

---

### ÇİFT 22 (Benzerlik: 0.77)

**Soru 1 (ID: 9ad7f98a-3cc7-4d0c-a3af-06b8c5a04bdb)**
Soru Kökü: Kırk yaşında erkek hasta kapalı garajda çalıştıktan sonra bilinç bulanıklığı ile acil servise getiriliyor. Hastanın arteriyel PO2 değeri normal saptanmasına rağmen şiddetli doku hipoksisi mevcuttur. Bu hastadaki hipoksi tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Anemik hipoksi
Açıklama: Arteriyel PO2 normal olmasına rağmen oksijeni taşıyacak aktif hemoglobin miktarının azaldığı durumlara (karbonmonoksit zehirlenmesi veya anemi) anemik hipoksi denir. Histotoksik hipokside hücreler zehirlenmiştir (örn. siyanür), hipoksik hipokside PO2 düşüktür (örn. yüksek irtifa), iskemik hipokside ise kan akımı yetersizdir.

**Soru 2 (ID: b63d3630-eef1-4e5d-92a7-477247b7f22d)**
Soru Kökü: Eski model bir doğal gaz sobasından sızan karbonmonoksit nedeniyle bilinci kapalı halde hastaneye getirilen 40 yaşındaki erkek hastada, arteriyal kan gazında çözünmüş PO2 basıncının normal olduğu ancak hemoglobin satürasyonunun çok düşük olduğu gözlenmiştir. Bu klinik senaryo fizyolojik olarak hangi başlık altında sınıflandırılır?
Doğru Şık (E): Anemik hipoksi
Açıklama: Karbonmonoksit (CO) zehirlenmesinde CO, hemoglobine yapışıp onu işlevsizleştirir. Kandaki taşıyıcı proteinler gazları nakledemez hale geldiğinden, klinik tablo aynen gerçek anemi (Hb eksikliği) durumunda olduğu gibi 'Anemik Hipoksi' sınıfına girer. Histotoksik hipokside enzimatik zehirlenme (siyanür), iskemik hipokside dokuya kalp tarafından kan gitmemesi, hipoksik hipokside ise temel PO2 düşüşü söz konusudur.

---

### ÇİFT 23 (Benzerlik: 0.77)

**Soru 1 (ID: 1a6af557-bd2d-4e71-9327-8880cf04e5a3)**
Soru Kökü: Altmış beş yaşındaki erkek hastada konjestif kalp yetmezliğine bağlı olarak kardiyak debi düşmüş ve doku perfüzyonunun belirgin derecede bozulduğu tespit edilmiştir. Hastanın arteriyel kan gazı analizinde PO2 değerleri ve kanda bulunan total hemoglobin miktarı normal sınırlardadır. Buna rağmen dokulara ulaşan oksijen miktarının düşük olması, aşağıdaki klinik durumlardan hangisiyle açıklanır?
Doğru Şık (D): İskemik hipoksi
Açıklama: Arteriyel kanda oksijen bağlama ve taşıma parametreleri (PO2 ve Hb) normal olduğu halde, pompa zafiyetine (kalp yetmezliği veya lokal damar tıkanıklığı) bağlı olarak kanın dokuya ulaşamaması iskemik hipoksi (stagnant hipoksi) tablosudur. Siyanür zehirlenmesinde histotoksik, karbonmonoksit vakalarında anemik ve yüksek irtifada ise hipoksik hipoksi mekanizmaları işler.

**Soru 2 (ID: 9ad7f98a-3cc7-4d0c-a3af-06b8c5a04bdb)**
Soru Kökü: Kırk yaşında erkek hasta kapalı garajda çalıştıktan sonra bilinç bulanıklığı ile acil servise getiriliyor. Hastanın arteriyel PO2 değeri normal saptanmasına rağmen şiddetli doku hipoksisi mevcuttur. Bu hastadaki hipoksi tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Anemik hipoksi
Açıklama: Arteriyel PO2 normal olmasına rağmen oksijeni taşıyacak aktif hemoglobin miktarının azaldığı durumlara (karbonmonoksit zehirlenmesi veya anemi) anemik hipoksi denir. Histotoksik hipokside hücreler zehirlenmiştir (örn. siyanür), hipoksik hipokside PO2 düşüktür (örn. yüksek irtifa), iskemik hipokside ise kan akımı yetersizdir.

---

### ÇİFT 24 (Benzerlik: 0.77)

**Soru 1 (ID: 41da022e-2a74-46a9-8835-90b531e8fc1c)**
Soru Kökü: Endüstriyel bir kaza sonrası yoğun siyanür gazı soluyan 35 yaşındaki işçi acile getirilmiştir. Hastanın ölçülen arteriyal kanda PO2 düzeyi ve kanda taşıyıcı kapasitesi (Hb) tamamen normal saptanmasına rağmen hasta şiddetli laktik asidoz ve doku hipoksisi tablosundadır. Bu hastadaki patolojik süreç hangi hipoksi tipi ile tanımlanır?
Doğru Şık (D): Histotoksik hipoksi
Açıklama: Siyanür zehirlenmesinde akciğerlerin O2 alımı, kanın taşıma kapasitesi ve dokuya perfüzyon normaldir, ancak mitokondriyal sitokrom c oksidaz enzimi siyanür tarafından bloke edildiği için hücreler sunulan oksijeni kullanamaz; bu tablonun adı histotoksik hipoksidir. Kalp yetmezliği iskemik hipoksiye, CO zehirlenmesi anemik hipoksiye, yüksek irtifa veya solunum depresyonu hipoksik hipoksiye yol açar.

**Soru 2 (ID: 5829a25b-fea5-4118-9964-aee485e2bfa8)**
Soru Kökü: Otuz beş yaşında erkek hasta, kış aylarında kömür sobası kullanılan bir odada bilinç bulanıklığı şikayetiyle acil servise getiriliyor. Yapılan kan gazı analizinde arteriyel PO2 düzeyi normal sınırlarda saptanmasına rağmen şiddetli doku hipoksisi bulguları izleniyor. Bu hastadaki klinik tablonun fizyopatolojik temeli olan hipoksi türü aşağıdakilerden hangisidir?
Doğru Şık (D): Anemik hipoksi
Açıklama: Karbonmonoksit (CO) zehirlenmesi, arteriyel PO2 seviyesi normal olmasına rağmen oksijeni taşıyacak fonksiyonel hemoglobin miktarının fonksiyonel olarak azaldığı anemik hipoksi tablosuna neden olur. Histotoksik hipokside sorun hemoglobinin taşımasında değil, hücrelerin oksijeni kullanım defektindedir (örneğin siyanür zehirlenmesi). CO, hemoglobine oksijenden çok daha yüksek bir afiniteyle (karboksihemoglobin) bağlanarak kanın oksijen taşıma kapasitesini doğrudan bloke eder.

---

### ÇİFT 25 (Benzerlik: 0.76)

**Soru 1 (ID: 23bcf7d0-fbcb-4611-94b9-eb1d8279e68c)**
Soru Kökü: Hipovolemik şok tablosunda olan acil hastasına kan bankasından temin edilen bol miktarda 'bekletilmiş tam kan' transfüzyonu yapılmıştır. Ciddi kan hacmi düzeltilmiş olmasına rağmen hastanın doku hipoksisinin düzelmediği görülmüştür. Bu patolojinin temel fizyolojik kök nedeni (root-cause) aşağıdakilerden hangisidir?
Doğru Şık (E): Eritrositlerdeki 2,3-Difosfogliserik asit (2,3-DPG) miktarının tüketilip bitmesi
Açıklama: Olgun eritrositler glikolitik yolaktan enerji elde ederken 2,3-DPG sentezler; bu molekül oksijenin hemoglobinden ayrılarak dokuya bırakılmasını kolaylaştırır (eğriyi sağa kaydırır). Kan bankasında uzun süre saklanan kanlarda eritrosit metabolizması bozulduğu için 2,3-DPG seviyeleri hızla düşer ve neredeyse sıfırlanır. Hastaya verilen bu kan, oksijeni 'sıkıca tutar' (eğri tam sola kayar) ve dokuya geldiğinde oksijeni teslim etmeyerek hipoksiyi derinleştirir.

**Soru 2 (ID: 8d5ebfbf-0b92-4d3f-b0a8-5e147583e39b)**
Soru Kökü: Otuz beş yaşında kadın hasta masif travma sonrası acil servise getiriliyor ve kan bankasında uzun süre beklemiş çoklu ünite kan transfüzyonu yapılıyor. İşlem sonrası hastanın arteriyel PO2'si normal olmasına rağmen doku hipoksisi gelişiyor. Bu klinik tablonun hücresel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Eritrosit içi 2,3-DPG miktarının azalmasına bağlı sola kayma
Açıklama: Kan bankalarında bekleyen kanlarda eritrosit içi 2,3-DPG miktarı zamanla azalır, bu da hemoglobinin oksijene afinitesini artırarak eğriyi sola kaydırır. Eğri sola kaydığında hemoglobin oksijeni dokulara kolay bırakamaz ve PO2 normal olsa bile doku hipoksisi görülür. Asidoz veya Bohr etkisi eğriyi sağa kaydırarak dokulara oksijen sunumunu kolaylaştırırdı.

---

### ÇİFT 26 (Benzerlik: 0.75)

**Soru 1 (ID: 9ad7f98a-3cc7-4d0c-a3af-06b8c5a04bdb)**
Soru Kökü: Kırk yaşında erkek hasta kapalı garajda çalıştıktan sonra bilinç bulanıklığı ile acil servise getiriliyor. Hastanın arteriyel PO2 değeri normal saptanmasına rağmen şiddetli doku hipoksisi mevcuttur. Bu hastadaki hipoksi tipi aşağıdakilerden hangisidir?
Doğru Şık (C): Anemik hipoksi
Açıklama: Arteriyel PO2 normal olmasına rağmen oksijeni taşıyacak aktif hemoglobin miktarının azaldığı durumlara (karbonmonoksit zehirlenmesi veya anemi) anemik hipoksi denir. Histotoksik hipokside hücreler zehirlenmiştir (örn. siyanür), hipoksik hipokside PO2 düşüktür (örn. yüksek irtifa), iskemik hipokside ise kan akımı yetersizdir.

**Soru 2 (ID: acf2dabb-53a5-4097-9821-8481a43ac75e)**
Soru Kökü: Altmış beş yaşında konjestif kalp yetmezliği tanısı olan kadın hasta, eforla gelen nefes darlığı ve periferik siyanoz şikayetiyle başvuruyor. Laboratuvar testlerinde hemoglobin miktarı ve kan gazında arteriyel PO2 düzeyi tamamen normal saptanıyor. Bu hastanın periferik dokularında gözlenen hipoksi tipi aşağıdakilerden hangisidir?
Doğru Şık (B): İskemik hipoksi
Açıklama: Konjestif kalp yetmezliği veya dolaşım şoku gibi klinik durumlarda, arteriyel PO2 ve kanın hemoglobin miktarı normal olmasına rağmen dokulara giden kan akımının (perfüzyonun) yetersizliğine bağlı olarak iskemik hipoksi gelişir. Anemik hipokside oksijen taşıma kapasitesi (Hb) düşükken, hipoksik hipokside ise kana geçen oksijen basıncı (PO2) seviyesi yetersizdir. Kalp debisinin düşmesi, dokuların birim zamanda karşılaştığı oksijen miktarını mekanik olarak sınırlayarak bu tabloyu yaratır.

---

