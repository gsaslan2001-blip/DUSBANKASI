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

### ÇİFT 1 (Benzerlik: 0.84)

**Soru 1 (ID: 91504bc9-3500-4b1f-bbca-10d32e16e5bf)**
Soru Kökü: Derin ven trombozu kökenli masif bir pulmoner tromboemboli atağının ani ölüm, akut kor pulmonale veya sağ kalp yetmezliğine bağlı şok tablosu (kardiyovasküler kollaps) yaratabilmesi için, pulmoner arteriyel sirkülasyonun **en az** yüzde kaçlık bir kısmında tıkanıklık meydana getirmesi gerekir?
Doğru Şık (E): %60
Açıklama: Pulmoner dolaşım yüksek kapasiteli ve düşük dirençli bir sistem olduğu için küçük emboliler genellikle asemptomatiktir. Ancak ana pulmoner arterin veya dallarının tıkanmasıyla pulmoner sirkülasyonun %60'ı veya daha fazlası oklüde olursa sağ kalbin fırlatma gücü bu akut dirence yetemez ve kardiyovasküler kollaps, akut kor pulmonale veya ani ölüm gerçekleşir.

**Soru 2 (ID: b4c997e0-5f44-4185-a5da-aca6ecc1575f)**
Soru Kökü: Pulmoner tromboemboli (PTE) klinik olarak asemptomatik seyredebileceği gibi ani kardiyak arrest ile de sonuçlanabilir. Bir PTE vakasında ani ölüm, akut kor pulmonale veya kardiyovasküler şok tablosunun gelişmesi için pulmoner sirkülasyonun en az yüzde kaçının tıkanmış olması beklenir?
Doğru Şık (B): %60
Açıklama: Pulmoner tromboembolide sağ ventrikülün akut olarak yetmezliğe girmesi (akut kor pulmonale), şok veya ani ölüm tablosunun ortaya çıkabilmesi için pulmoner arteriyel sirkülasyonun %60 veya daha fazlasının ani olarak tıkanması gereklidir. Daha küçük oklüzyonlar genellikle pulmoner kanama veya asemptomatik seyirle sonuçlanır.

---

### ÇİFT 2 (Benzerlik: 0.81)

**Soru 1 (ID: 66a35253-011c-4486-8165-1661e7147997)**
Soru Kökü: Sekonder hemostazı oluşturan pıhtılaşma faktörü eksiklikleri şiddetlerine göre farklı klinik tablolar yaratır. Aşağıdaki faktör eksikliklerinden hangisinin in vivo mutlak yokluğu, intrauterin dönemde fetüs için yaşamla bağdaşmayan (letal) bir durum oluşturur?
Doğru Şık (C): Protrombin (Faktör 2)
Açıklama: Pıhtılaşma kaskadının kalbinde yer alan Protrombinin (Faktör 2) mutlak eksikliği yaşamla bağdaşmaz ve in utero ölüme neden olur. Faktör 5, 7, 8, 9 ve 10 eksiklikleri orta-ciddi kanamalara yol açarken hastalar hayatta kalabilir. Protrombinin pıhtı stabilizasyonundan hücre aktivasyonuna kadar uzanan çoklu rolleri onu sistemin vazgeçilmez enzimi yapar.

**Soru 2 (ID: eec201a1-9668-4f42-8db4-f4a4bf23b7c3)**
Soru Kökü: Kanamanın kontrolünde kilit bir rol üstlenen sekonder hemostaz (koagülasyon) faktörlerinin doğumsal eksiklikleri farklı klinik şiddetlerde tablolar oluşturur. Aşağıdaki koagülasyon faktörü mutasyon/eksikliklerinden hangisi gelişimsel olarak yaşamla bağdaşmaz?
Doğru Şık (E): Faktör II (Protrombin) eksikliği
Açıklama: Protrombin (Faktör II) trombinin inaktif prekürsörü olup pıhtılaşma sistemi, trombosit agregasyonu (PAR aktivasyonu) ve embriyolojik gelişim için en hayati moleküldür, bu nedenle mutasyonla tam yokluğu yaşamla bağdaşmaz. Hemofiliye yol açan F8, F9, F11 ve ekstrinsik başlatıcı F7 defektleri kanama bozuklukları ile yaşarken, F12 defekti kanama dahi yapmaz.

---

### ÇİFT 3 (Benzerlik: 0.79)

**Soru 1 (ID: 7abc2731-6732-4dba-b5a9-f2e8ce4c234c)**
Soru Kökü: Pıhtılaşma şemasında intrinsik ve ekstrinsik yolaklar birbirinden bağımsız görünse de in vivo şartlarda birbirleriyle bağlantılıdır. İn vivo olarak intrinsik yolaktaki faktör 9'un aktivasyonunu sağlamada, faktör 11a'dan çok daha kritik öneme sahip olan molekül aşağıdakilerden hangisidir?
Doğru Şık (B): Faktör 7a
Açıklama: In vivo hemostaz modelinde ekstrinsik ve intrinsik yolaklar çapraz etkileşim halindedir; Doku Faktörü ile birleşen Faktör 7a, sadece Faktör 10'u değil, aynı zamanda doğrudan Faktör 9'u da aktive ederek intrinsik yolağı hızlandırır. İn vitro testlerde Faktör 9'u Faktör 11a aktiflerken, organizmada asıl ateşleyici mekanizma Faktör 7a üzerinden yürür. Bu çapraz reaksiyon pıhtılaşmanın hızlı ve masif amplifikasyonunu sağlar.

**Soru 2 (ID: 9ae7d0b8-f2ad-40e1-98f7-016291188ab4)**
Soru Kökü: Koagülasyon kaskadında Faktör IX, hem intrinsik hem de ekstrinsik yolak elemanları tarafından aktive edilebilir. İn vivo koşullarda Faktör IX aktivasyonunu sağlayarak yolları birbirine bağlayan en önemli molekül aşağıdakilerden hangisidir?
Doğru Şık (B): Faktör VIIa
Açıklama: İn vivo koşullarda Faktör IX (intrinsik yolak), Faktör XIa'dan ziyade doku faktörü kompleksi içindeki ekstrinsik Faktör VIIa tarafından daha güçlü bir şekilde aktive edilir. Faktör XIa in vitro koşullarda aktifken, fizyolojik kanamada VIIa çapraz aktivasyonu koagülasyonu katlayarak artırır. Bu durum ekstrinsik yolun intrinsik kaskadı başlatmadaki primer önemini vurgular.

---

### ÇİFT 4 (Benzerlik: 0.77)

**Soru 1 (ID: 08d778e0-f8de-4b2d-8871-9497bd24234c)**
Soru Kökü: Kardiyojenik şok geçirip hayatını kaybeden bir hastanın otopsisinde, miyokard dokusunda hipoperfüzyon/iskemiye sekonder gelişen en karakteristik hücresel hasar paterni aşağıdakilerden hangisidir?
Doğru Şık (A): Kontraksiyon band nekrozu
Açıklama: Şok sırasında miyokardın hipoperfüzyonu ve bunu takip eden iskemik hasar, hücre içine kalsiyum girişini kontrolsüz hale getirir. Bu durum hiperkontraksiyona yol açarak histolojik olarak kalpte 'kontraksiyon band nekrozu' ile subendokardiyal kanamalara neden olur.

**Soru 2 (ID: fd305047-250a-436e-b01c-b18b86b28f14)**
Soru Kökü: Ağır hipovolemik şok tablosu sonrası kaybedilen bir travma hastasının otopsisinde kardiyak doku incelenmektedir. Şokun kalp üzerindeki iskemik-toksik etkisine bağlı olarak myokardiyal bölgede aşağıdaki spesifik patolojik bulgulardan hangisinin saptanması en olasıdır?
Doğru Şık (E): Subendokardiyal kanama ve kontraksiyon band nekrozu
Açıklama: Şok tablosunda kalpte sistemik hipoperfüzyon ve aşırı katekolamin deşarjının toksik etkisiyle subendokardiyal bölgede kanama ve iskemik zedelenmenin bir bulgusu olan kontraksiyon band nekrozu (miyositlerde enine eozinofilik bantlar) görülür. Aschoff cisimcikleri romatizmal ateşe, fibrinöz perikardit ise üremi veya MI sonrası süreçlere özgüdür.

---

### ÇİFT 5 (Benzerlik: 0.76)

**Soru 1 (ID: 407fa46e-7ae4-438a-9ab8-c1a4ced989d9)**
Soru Kökü: Altmış yaşında kadın hasta, geçirdiği geniş anterior miyokard enfarktüsünden iki hafta sonra sağ bacağında ani solukluk, soğukluk ve nabız alınamaması şikayetiyle başvuruyor. Anjiyografide popliteal arterde embolik tıkanma saptanıyor. Bu hastadaki embolinin en olası kaynağı aşağıdakilerden hangisidir?
Doğru Şık (C): Sol ventrikül duvar infarktı üzeri
Açıklama: Sistemik arteryel tromboembolilerin %80'i intrakardiyak mural trombüslerden kaynaklanır ve bunların büyük bir kısmı miyokard enfarktüsü sonrası oluşan sol ventrikül duvar diskinetik/nekrotik alanları üzerinde gelişir. Sistemik emboliler en sık alt ekstremiteye (%75) gider.

**Soru 2 (ID: 78ae8efc-2b49-4c31-a46b-019021f01259)**
Soru Kökü: Sistemik dolaşıma katılarak organ infarktlarına yol açan sistemik tromboembolilerin en sık karşılaşılan kaynağı aşağıdakilerden hangisidir?
Doğru Şık (D): İntrakardiyak mural trombüsler
Açıklama: Sistemik tromboembolilerin yaklaşık %80'i intrakardiyak mural trombüslerden kaynaklanır. Bunların da büyük çoğunluğunu sol ventrikül duvar infarktları ve atriyal fibrilasyona bağlı atriyal dilatasyonlar oluşturur. Paradoksal emboli veya valvüler vejetasyonlar çok daha nadir sebeplerdir.

---

### ÇİFT 6 (Benzerlik: 0.76)

**Soru 1 (ID: 261fa9bd-7d5f-4da9-83aa-4c396b736348)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, trafik kazası sonrası gelişen çoklu uzun kemik kırıkları nedeniyle ameliyat ediliyor. Travmadan 48 saat sonra hastada ani gelişen takipne, dispne, nörolojik semptomlar ve gövdede diffüz peteşiyal döküntüler ortaya çıkıyor. Bu hastanın kliniğindeki peteşiyal döküntülerin patofizyolojik varlığı aşağıdakilerden hangisinin kullanışlı bir tanısal göstergesidir?
Doğru Şık (B): Trombositopeninin hızlı bir şekilde başladığı
Açıklama: Yağ embolisi sendromunda hastaların %20-50'sinde görülen diffüz peteşiyal döküntüler, trombositlerin yağ globülleri etrafında hızla kümelenip tükenmesiyle başlayan sekonder trombositopeninin kritik bir klinik belirtecidir. Alveoler hyalen membran birikimi (ARDS bulgusu) solunum sıkıntısını açıklasa da peteşilerin doğrudan mekanizması değildir. Peteşi, kemik iliği kaynaklı embolinin koagülasyon kaskadını hızla tükettiğini gösterir.

**Soru 2 (ID: e5babd7a-acc3-4e01-8674-780667c12ed1)**
Soru Kökü: Uzun kemik kırığı sonrası aniden gelişen dispne ve takipne tablosuna nörolojik semptomların eşlik ettiği bir hastada, yağ embolisi sendromunu diğer embolik tablolardan ayıran ve trombositopeninin başladığını gösteren en kullanışlı klinik/tanısal özellik aşağıdakilerden hangisidir?
Doğru Şık (E): Diffüz peteşiyal döküntüler
Açıklama: Yağ embolisi sendromunda hastaların %20-50'sinde görülen diffüz peteşiyal döküntüler, mikrovasküler oklüzyon ve trombosit tüketimine (trombositopeni) işaret eden oldukça spesifik bir klinik bulgudur. Sağ kalp yetmezliği masif pulmoner tromboembolide görülürken, peteşiyal döküntü yağ embolisinin ayırıcı tanısında kilit rol oynar.

---

### ÇİFT 7 (Benzerlik: 0.76)

**Soru 1 (ID: 3ee865ce-3180-470e-a537-c48f27a660f8)**
Soru Kökü: Faktör 12 eksikliğinde izole aPTT uzamasına rağmen hastaların klinik olarak kanamaktan ziyade tromboza eğilimli olmasının patofizyolojik temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Plazminojenden plazmin üretiminin fizyolojik olarak uyarılamaması
Açıklama: Faktör 12'nin koagülasyonu başlatıcı etkisinin ötesinde, in vivo hemostaz dengesinde plazminojen aktivatörlerini tetikleyerek plazmin oluşumunu ve fibrinolizi başlatmak gibi kritik bir rolü vardır. Bu faktör eksik olduğunda pıhtılaşma ekstrinsik yol üzerinden devam eder ancak üretilen pıhtıyı yıkacak plazmin yeterince oluşturulamaz, bu da tromboza yol açar. Diğer şıklar endotel veya trombosit kökenli olup Faktör 12 defektiyle doğrudan ilişkili değildir.

**Soru 2 (ID: fda856fe-fbb9-4e94-8379-bac892b103c3)**
Soru Kökü: 30 yaşında kadın hasta, travma öyküsü olmaksızın gelişen derin ven trombozu (DVT) şikayetiyle başvuruyor. Hastanın özgeçmişinde kanama diyatezine dair hiçbir öykü bulunmamaktadır. Laboratuvar incelemesinde PT normal, ancak aPTT süresi belirgin düzeyde uzamış saptanıyor. Kanama beklenirken paradoksal olarak artmış tromboz riski ve izole aPTT uzamasıyla seyreden bu klinik tablo, aşağıdaki faktörlerden hangisinin eksikliğiyle en iyi açıklanır?
Doğru Şık (A): Faktör 12
Açıklama: Faktör 12 (Hageman Faktörü) eksikliği, pıhtılaşma kaskadında aPTT'yi uzatmasına rağmen in vivo koşullarda kanama bozukluğu oluşturmayan tek faktördür. Ayrıca Faktör 12, plazminojenin plazmine dönüşümünü uyararak fibrinolitik sistemi aktive ettiğinden, eksikliğinde fibrinoliz bozulur ve paradoksal tromboz riski ortaya çıkar. Diğer intrinsik yol faktörlerinin (F8, F9, F11) eksiklikleri doğrudan klinik kanama diyatezleri (hemofililer) ile sonuçlanır.

---

### ÇİFT 8 (Benzerlik: 0.74)

**Soru 1 (ID: 49248830-b949-436c-b211-530dd0c66f28)**
Soru Kökü: Arteryel ve venöz trombüslerin oluşum mekanizmaları ve morfolojileri birbirinden farklıdır. Aşağıdakilerden hangisi arteryel trombüslere ait bir özellik **değildir**?
Doğru Şık (B): Kan akımı ile aynı yönde (ileriye doğru) büyümesi
Açıklama: Venöz trombüsler (flebotromboz) kan akımı ile aynı yönde kalbe doğru büyürken, arteryel trombüsler kan akımının tersine kalbe doğru geri yönde büyürler. Arteryel trombüslerin en belirgin özellikleri trombositlerden zengin olmaları ve endotel hasarı (ateroskleroz vb.) zemininde damara sıkıca yapışmalarıdır.

**Soru 2 (ID: ab442a31-776d-41f6-86e8-0e9f5a9cb19a)**
Soru Kökü: Venöz ve arteryel trombüslerin klinik özellikleri ve büyüme paternleri birbirlerinden farklılık gösterir. Derin ven trombozu (DVT) sonucu bacak venlerinde oluşan bir trombüsün morfolojik büyüme paterni ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (B): Arteryel trombüslerin aksine kan akımı ile aynı yönde büyüme eğilimi gösterir.
Açıklama: Venöz trombüsler (flebotromboz) kan akımının yavaşladığı staz bölgelerinde oluşur ve pıhtının yeni eklenen kuyruk kısmı kan akımı ile aynı yönde (kalbe doğru) büyür. Arteryel trombüsler endotel hasarına bağlı gelişip sıkı tutunurken, venöz trombüsler eritrositten zengin (kırmızı trombüs), duvara zayıf tutunan ve neredeyse her zaman lümeni tıkayan yapılardır.

---

### ÇİFT 9 (Benzerlik: 0.74)

**Soru 1 (ID: 06c39099-66d8-4d50-a97f-ae12f60f42b6)**
Soru Kökü: Doku Faktör Yolak İnhibitörü (TFPI), normal endotelin ürettiği güçlü bir antikoagülan moleküldür. Aşağıdakilerden hangisi TFPI tarafından doğrudan inhibe edilen aktif faktör ya da komplekslerden biri **değildir**?
Doğru Şık (B): Faktör 9a
Açıklama: TFPI, ekstrinsik kaskadın temel baskılayıcısıdır ve spesifik olarak Doku Faktörü/Faktör 7a kompleksini ile aktif Faktör 10'u (10a) inhibe eder. Faktör 9a ise intrinsik kaskadın bir parçası olup TFPI'nin değil, Antitrombin III'ün doğrudan inhibisyon hedeflerinden biridir. Bu ince ayrım, endotelin antikoagülan sistemlerinin spesifik hedeflerini kavramak açısından kritiktir.

**Soru 2 (ID: 091ab1df-579f-4305-856b-11d9f2568a6b)**
Soru Kökü: Sağlıklı bir kan damarında antikoagülan mekanizmaların temel taşlarından biri olan Aktif Protein C'nin enzimatik yıkımına uğrayarak inaktive edilen ve pıhtılaşma sistemini yavaşlatan hedef pıhtılaşma kaskadı faktörleri arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Faktör Xa (Aktif Faktör X)
Açıklama: Aktif Protein C'nin tek enzimatik hedefi hemostaz kaskadında amplifikasyonu sağlayan kofaktörler olan Faktör 5 ve Faktör 8'dir (ve bunların aktif formları). Faktör Xa'nın inhibisyonu Protein C tarafından değil, Doku Faktör Yolak İnhibitörü (TFPI) veya Antitrombin III tarafından gerçekleştirilir. Ortak yolun giriş kapısı olan Faktör Xa, Protein C yolağının bir menzili değildir.

---

### ÇİFT 10 (Benzerlik: 0.74)

**Soru 1 (ID: bc8fc81a-7bfd-4022-8564-c191d7010651)**
Soru Kökü: Uzun süredir şiddetli kalp yetmezliği tedavisi gören 65 yaşındaki hastanın otopsisinde karaciğer 'hint cevizi' (nutmeg) görünümündedir. Histopatolojik incelemede sentrilobüler hepatositlerde belirgin nekroz izlenirken, periportal hepatositlerde sadece yağlı değişiklik görülmüş ve nekroz saptanmamıştır. Periportal hepatositlerin nekrozdan korunmasının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Periportal hepatositlerin hepatik arteriole yakın olup daha iyi oksijenlenmesi
Açıklama: Kronik pasif hepatik konjesyonda, hepatik arteriole anatomik olarak daha yakın olan periportal hepatositler daha yüksek oksijenasyon sağladığı için kronik hipoksiden sadece yağlı değişiklik düzeyinde etkilenirler. Kan akımının en uç noktası olan perisantral (Zon 3) hepatositler ise hipoksiye en duyarlı alan oldukları için nekroza giderler. Bu oksijenizasyon gradyanı, makroskopik düzeyde izlenen kırmızı-kahverengi hint cevizi görünümünün histolojik temelidir.

**Soru 2 (ID: cd81c02a-c9e2-41e3-a33d-f286550c9aa2)**
Soru Kökü: Kalp yetmezliği olan hastalarda karaciğerin kronik pasif konjesyonuna sekonder olarak gelişen 'hint cevizi karaciğer' (nutmeg liver) görünümü mikroskobik düzeyde spesifik değişiklikler içerir. Aşağıdaki histopatolojik bulgulardan hangisinin bu hastaların karaciğer dokusunda görülmesi **en az olasıdır**?
Doğru Şık (B): Periportal hepatositlerde belirgin iskemik nekroz
Açıklama: Nutmeg liver patogenezinde dokunun venöz drenajı tıkandığı için kan sinüzoidlerde göllenir (konjesyon ve dilatasyon) ve hemosiderin-yüklü makrofajlar birikir. Venöz çıkışa en yakın ve oksijeni en son alan sentrilobüler (Zon 3) alanlarda şiddetli nekroz, kanama ve ilerleyen dönemde atrofi görülürken, kanlanmayı ilk alan periportal hepatositlerde nekroz görülmez, oksijen yetersizliği sadece lipit metabolizmasını bozarak periportal yağlanmaya (steatoz) yol açar.

---

### ÇİFT 11 (Benzerlik: 0.74)

**Soru 1 (ID: 091ab1df-579f-4305-856b-11d9f2568a6b)**
Soru Kökü: Sağlıklı bir kan damarında antikoagülan mekanizmaların temel taşlarından biri olan Aktif Protein C'nin enzimatik yıkımına uğrayarak inaktive edilen ve pıhtılaşma sistemini yavaşlatan hedef pıhtılaşma kaskadı faktörleri arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Faktör Xa (Aktif Faktör X)
Açıklama: Aktif Protein C'nin tek enzimatik hedefi hemostaz kaskadında amplifikasyonu sağlayan kofaktörler olan Faktör 5 ve Faktör 8'dir (ve bunların aktif formları). Faktör Xa'nın inhibisyonu Protein C tarafından değil, Doku Faktör Yolak İnhibitörü (TFPI) veya Antitrombin III tarafından gerçekleştirilir. Ortak yolun giriş kapısı olan Faktör Xa, Protein C yolağının bir menzili değildir.

**Soru 2 (ID: 5fc033d7-26e4-46fb-8920-946b9ffeaa52)**
Soru Kökü: Endotel hücrelerinin koagülasyonu sınırlayıcı antikoagülan mekanizmaları incelendiğinde, moleküller arası kofaktör kullanımları dikkat çekmektedir. Hem aktif Protein C'nin faktör 5 ve 8'i inhibe ederken hem de Doku Faktör Yolak İnhibitörünün (TFPI) hedeflerini baskılarken kofaktör olarak kullandığı ortak molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Protein S
Açıklama: Protein S, koagülasyon sisteminin negatif geri bildiriminde merkezi bir kofaktördür; hem aktif Protein C'ye (faktör 5 ve 8'in inhibisyonu için) hem de TFPI'ye (Doku Faktörü/7a ve Faktör 10a'nın inhibisyonu için) bağlanarak işlev görmelerini sağlar. Trombomodülin trombinin hedefini değiştiren bir reseptörken, heparin benzeri moleküller Antitrombin III'ü aktifleyen ayrı bir yolaktır. Protein S'in bu çift kofaktör rolü endotel antikoagülan fonksiyonunun omurgasıdır.

---

### ÇİFT 12 (Benzerlik: 0.74)

**Soru 1 (ID: 06c39099-66d8-4d50-a97f-ae12f60f42b6)**
Soru Kökü: Doku Faktör Yolak İnhibitörü (TFPI), normal endotelin ürettiği güçlü bir antikoagülan moleküldür. Aşağıdakilerden hangisi TFPI tarafından doğrudan inhibe edilen aktif faktör ya da komplekslerden biri **değildir**?
Doğru Şık (B): Faktör 9a
Açıklama: TFPI, ekstrinsik kaskadın temel baskılayıcısıdır ve spesifik olarak Doku Faktörü/Faktör 7a kompleksini ile aktif Faktör 10'u (10a) inhibe eder. Faktör 9a ise intrinsik kaskadın bir parçası olup TFPI'nin değil, Antitrombin III'ün doğrudan inhibisyon hedeflerinden biridir. Bu ince ayrım, endotelin antikoagülan sistemlerinin spesifik hedeflerini kavramak açısından kritiktir.

**Soru 2 (ID: 5fc033d7-26e4-46fb-8920-946b9ffeaa52)**
Soru Kökü: Endotel hücrelerinin koagülasyonu sınırlayıcı antikoagülan mekanizmaları incelendiğinde, moleküller arası kofaktör kullanımları dikkat çekmektedir. Hem aktif Protein C'nin faktör 5 ve 8'i inhibe ederken hem de Doku Faktör Yolak İnhibitörünün (TFPI) hedeflerini baskılarken kofaktör olarak kullandığı ortak molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Protein S
Açıklama: Protein S, koagülasyon sisteminin negatif geri bildiriminde merkezi bir kofaktördür; hem aktif Protein C'ye (faktör 5 ve 8'in inhibisyonu için) hem de TFPI'ye (Doku Faktörü/7a ve Faktör 10a'nın inhibisyonu için) bağlanarak işlev görmelerini sağlar. Trombomodülin trombinin hedefini değiştiren bir reseptörken, heparin benzeri moleküller Antitrombin III'ü aktifleyen ayrı bir yolaktır. Protein S'in bu çift kofaktör rolü endotel antikoagülan fonksiyonunun omurgasıdır.

---

### ÇİFT 13 (Benzerlik: 0.73)

**Soru 1 (ID: 1174d97a-4c4d-4b17-9510-2657f666b573)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta tekrarlayan derin ven trombozları nedeniyle araştırılıyor. Aile öyküsünde de erken yaşta DVT vakaları bulunan hastanın genetik testinde, koagülasyon kaskadında inaktive edici bir enzime karşı direnç tespit ediliyor. Bu klinik tabloya en yüksek olasılıkla neden olan mutasyon hangi faktörü kodlayan gendedir?
Doğru Şık (C): Faktör V
Açıklama: Genetik hiperkoagülabilite (trombofili) nedenleri arasında en sık görüleni Faktör V Leiden mutasyonudur. Bu mutasyon, Faktör V'i yapısal olarak değiştirerek fizyolojik bir antikoagülan olan Protein C tarafından parçalanmasına (inaktive edilmesine) karşı dirençli hale getirir (Aktif protein C rezistansı).

**Soru 2 (ID: 4b714895-cdad-458c-9141-6d25ed084ccb)**
Soru Kökü: Yirmi yaşında genç bir hastada sebebi açıklanamayan tekrarlayan miyokard infarktüsü ve masif venöz tromboz epizotları izlenmektedir. Yapılan laboratuvar incelemesinde primer (genetik) hiperkoagülabilite hastalıkları içerisinde popülasyonda **çok nadir** görülen (%1'den az) bir patoloji saptanmıştır. Bu hastanın tanısı aşağıdakilerden hangisi olabilir?
Doğru Şık (C): Homozigot homosistinüri
Açıklama: Primer hiperkoagülabilite sendromları görülme sıklığına göre ayrılır. Faktör V Leiden ve protrombin mutasyonları sık (>%1 popülasyon) grupta yer alırken; homozigot homosistinüri, antitrombin III eksikliği, protein C/S eksikliği ve fibrinolizis defektleri çok daha nadir görülen ve genellikle genç yaşta agresif arteryel/venöz trombozlarla seyreden nadir sendromlardır.

---

### ÇİFT 14 (Benzerlik: 0.73)

**Soru 1 (ID: 407fa46e-7ae4-438a-9ab8-c1a4ced989d9)**
Soru Kökü: Altmış yaşında kadın hasta, geçirdiği geniş anterior miyokard enfarktüsünden iki hafta sonra sağ bacağında ani solukluk, soğukluk ve nabız alınamaması şikayetiyle başvuruyor. Anjiyografide popliteal arterde embolik tıkanma saptanıyor. Bu hastadaki embolinin en olası kaynağı aşağıdakilerden hangisidir?
Doğru Şık (C): Sol ventrikül duvar infarktı üzeri
Açıklama: Sistemik arteryel tromboembolilerin %80'i intrakardiyak mural trombüslerden kaynaklanır ve bunların büyük bir kısmı miyokard enfarktüsü sonrası oluşan sol ventrikül duvar diskinetik/nekrotik alanları üzerinde gelişir. Sistemik emboliler en sık alt ekstremiteye (%75) gider.

**Soru 2 (ID: 6bf12a7c-95ca-493b-81de-9c6246704de0)**
Soru Kökü: Kırk beş yaşında romatizmal kalp hastalığı öyküsü olan kadın hastada sol atriyal dilatasyon ve atriyal fibrilasyon bulunmaktadır. Bu hastada kalpten köken alan bir mural trombüsün sistemik dolaşıma katılarak emboli yapması durumunda, anatomik olarak **en sık** tıkayacağı vasküler yatak aşağıdakilerden hangisidir?
Doğru Şık (C): Alt ekstremite arteriyel sistemi
Açıklama: İntrakardiyak kaynaklı sistemik tromboemboliler büyük bir oranda sistemik dolaşıma fırlatılır ve anatomik olarak en sık (%75) alt ekstremite arterlerini tıkar. İkinci sıklıkta (%10) serebral arteriyel yatağa giderken, diğer organlar daha nadir tutulur. Atriyal fibrilasyon kaynaklı trombüs sol kalpten çıktığı için pulmoner sisteme değil, doğrudan majör sistemik damarlara yönelir.

---

### ÇİFT 15 (Benzerlik: 0.73)

**Soru 1 (ID: 3d58c654-7493-43f3-b88a-3cfc312d2da3)**
Soru Kökü: Endotel hücreleri normal süreçte prokoagülan ve antikoagülan molekülleri dikkatli bir dengeyle sentezler. Hasar olmamış sağlam endotel tabakasından sentezlenen ve düz kas vazodilatasyonu yaparken eşzamanlı trombosit agregasyonunu da engelleyen inhibitör molekül çifti aşağıdakilerden hangisidir?
Doğru Şık (C): Prostasiklin (PGI2) ve Nitrik Oksit (NO)
Açıklama: Prostasiklin (PGI2) ve Nitrik oksit (NO), sağlam endotelin damarı açık tutmak ve trombositlerin agregasyonunu engellemek için bazal olarak sürekli salgıladığı primer vazodilatatör ve anti-agregan çiftidir. Tromboksan A2 ve Endotelin ise tam zıt olarak vazokonstriksiyon ve trombosit toplanması uyarıcılarıdır. Pıhtılaşmayı engelleyen Protein C ve t-PA'nın doğrudan vazodilatasyon ve agregasyon blokaj görevi yoktur.

**Soru 2 (ID: 891e97fc-d9a3-4912-98b8-3993d4efc6df)**
Soru Kökü: Endotel hücreleri normal hemostazda hem prokoagülan hem de antikoagülan işlevleri bünyesinde barındıran kritik regülatörlerdir. Endotelin trombüs oluşumunu sabitlemek ve yıkımını engellemek amacıyla sentezlediği antifibrinolitik etkili molekül aşağıdakilerden hangisidir?
Doğru Şık (D): Plazminojen aktivatör inhibitörü (PAI)
Açıklama: Endotel, kanamanın sürdüğü evrede oluşturulan fibrin ağının zamansız yıkılmasını önlemek için antifibrinolitik etki gösteren Plazminojen Aktivatör İnhibitörü (PAI) sentezler. PAI, t-PA'yı bloke ederek plazmin oluşumunu durdurur ve pıhtı stabilizasyonuna katkı sağlar. t-PA ise pıhtıyı çözmek istendiğinde devreye giren karşıt mekanizmadır.

---

### ÇİFT 16 (Benzerlik: 0.73)

**Soru 1 (ID: 06c39099-66d8-4d50-a97f-ae12f60f42b6)**
Soru Kökü: Doku Faktör Yolak İnhibitörü (TFPI), normal endotelin ürettiği güçlü bir antikoagülan moleküldür. Aşağıdakilerden hangisi TFPI tarafından doğrudan inhibe edilen aktif faktör ya da komplekslerden biri **değildir**?
Doğru Şık (B): Faktör 9a
Açıklama: TFPI, ekstrinsik kaskadın temel baskılayıcısıdır ve spesifik olarak Doku Faktörü/Faktör 7a kompleksini ile aktif Faktör 10'u (10a) inhibe eder. Faktör 9a ise intrinsik kaskadın bir parçası olup TFPI'nin değil, Antitrombin III'ün doğrudan inhibisyon hedeflerinden biridir. Bu ince ayrım, endotelin antikoagülan sistemlerinin spesifik hedeflerini kavramak açısından kritiktir.

**Soru 2 (ID: 8f6549e2-5e4f-411f-b80a-06caae0d7408)**
Soru Kökü: Sekonder hemostaz tıkacının inşasında kilit enzim olan trombin (Faktör 2a), pıhtılaşmayı katlanarak büyütmek (amplifikasyon) için birçok koagülasyon faktörünü geri bildirimle aktive eder. Aşağıdakilerden hangisi trombin tarafından aktive edilen koagülasyon faktörlerinden biri **değildir**?
Doğru Şık (A): Faktör 9
Açıklama: Trombin, pıhtılaşmayı amplifiye etmek üzere Faktör 5, 8 ve 11'i aktive ederek intrinsik kaskadı hızlandırır ve Faktör 13'ü aktifleyerek fibrin polimerlerini çapraz bağlarla sarmalar. Ancak Faktör 9, trombinin doğrudan aktivasyon hedeflerinden biri değildir; Faktör 9 in vivo olarak Faktör 7a ve Faktör 11a tarafından aktiflenir. Bu durum trombinin etki spektrumundaki önemli istisnalardan biridir.

---

### ÇİFT 17 (Benzerlik: 0.73)

**Soru 1 (ID: 06c39099-66d8-4d50-a97f-ae12f60f42b6)**
Soru Kökü: Doku Faktör Yolak İnhibitörü (TFPI), normal endotelin ürettiği güçlü bir antikoagülan moleküldür. Aşağıdakilerden hangisi TFPI tarafından doğrudan inhibe edilen aktif faktör ya da komplekslerden biri **değildir**?
Doğru Şık (B): Faktör 9a
Açıklama: TFPI, ekstrinsik kaskadın temel baskılayıcısıdır ve spesifik olarak Doku Faktörü/Faktör 7a kompleksini ile aktif Faktör 10'u (10a) inhibe eder. Faktör 9a ise intrinsik kaskadın bir parçası olup TFPI'nin değil, Antitrombin III'ün doğrudan inhibisyon hedeflerinden biridir. Bu ince ayrım, endotelin antikoagülan sistemlerinin spesifik hedeflerini kavramak açısından kritiktir.

**Soru 2 (ID: 99dc8ddb-dff8-4c31-b39a-7af97f52d374)**
Soru Kökü: Sağlıklı endotel yüzeyinde bulunan heparin-benzeri moleküllerin Antitrombin III'ü (AT-III) aktive etmesi, trombozu engelleyici ana yollardan biridir. Aşağıdaki aktif enzimlerden hangisi Antitrombin III'ün hedeflerinden biri **değildir**?
Doğru Şık (E): Faktör 7a
Açıklama: Antitrombin III, adından da anlaşılacağı gibi başta Trombin (Faktör 2a) olmak üzere sırasıyla aktif Faktör 9, 10, 11 ve 12'yi (9a, 10a, 11a, 12a) doğrudan inhibe eden çok güçlü bir sistemdir. Ancak ekstrinsik yolun anahtar enzimi olan Faktör 7a, Antitrombin III'ün yıkım hedefleri arasında yer almaz; Faktör 7a kompleksi öncelikli olarak Doku Faktör Yolak İnhibitörü (TFPI) tarafından hedeflenir.

---

### ÇİFT 18 (Benzerlik: 0.72)

**Soru 1 (ID: 7b261638-a6b1-4a73-8874-1023392887b4)**
Soru Kökü: Pıhtılaşma faktör eksikliklerinde kalıtım paterni klinik danışmanlık için kritik öneme sahiptir. Aşağıdaki koagülasyon defektlerinden hangisi klinik pratikte otozomal resesif (OR) kalıtım gösterir?
Doğru Şık (C): Hemofili C (Faktör 11 eksikliği)
Açıklama: Hemofili C (Faktör 11 eksikliği), hemofili tipleri arasında X'e bağlı resesif geçiş göstermeyen ve otozomal resesif (OR) kalıtılan, daha hafif seyirli bir kanama bozukluğudur. Hemofili A ve Hemofili B doğrudan X kromozomuna bağlı resesif geçişli oldukları için temel olarak erkekleri etkiler. Bu kalıtımsal ayrım hastalığın kadınlarda görülme sıklığını doğrudan belirler.

**Soru 2 (ID: b1470936-5818-49f2-8859-ca3591c2de7b)**
Soru Kökü: Akraba evliliği yapmış sağlıklı bir çiftin 12 yaşındaki kız çocuğunda, minör travmalara karşı beklenenden uzun süren hafif kanama atakları öyküsü mevcuttur. Yapılan genetik incelemede, X'e bağlı resesif geçen klasik kanama bozukluklarından farklı olarak otozomal resesif bir kalıtım paterni saptanmıştır. Tarif edilen bu Hemofili C tablosunda aşağıdaki sekonder hemostaz faktörlerinden hangisinin sentez defekti izlenmektedir?
Doğru Şık (D): Faktör 11
Açıklama: Hemofili C, Faktör 11 eksikliği nedeniyle gelişen ve Hemofili A (Faktör 8) ile Hemofili B'nin (Faktör 9) X'e bağlı resesif kalıtım paterninden farklı olarak otozomal resesif (OR) geçiş gösteren bir kanama bozukluğudur. Faktör 11 eksikliğinde klinik tablo kural olarak Hemofili A ve B'ye kıyasla daha hafif seyirlidir ve spontan eklem içi kanamalardan ziyade cerrahi sonrası kanamalar ön plandadır.

---

### ÇİFT 19 (Benzerlik: 0.72)

**Soru 1 (ID: 091ab1df-579f-4305-856b-11d9f2568a6b)**
Soru Kökü: Sağlıklı bir kan damarında antikoagülan mekanizmaların temel taşlarından biri olan Aktif Protein C'nin enzimatik yıkımına uğrayarak inaktive edilen ve pıhtılaşma sistemini yavaşlatan hedef pıhtılaşma kaskadı faktörleri arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Faktör Xa (Aktif Faktör X)
Açıklama: Aktif Protein C'nin tek enzimatik hedefi hemostaz kaskadında amplifikasyonu sağlayan kofaktörler olan Faktör 5 ve Faktör 8'dir (ve bunların aktif formları). Faktör Xa'nın inhibisyonu Protein C tarafından değil, Doku Faktör Yolak İnhibitörü (TFPI) veya Antitrombin III tarafından gerçekleştirilir. Ortak yolun giriş kapısı olan Faktör Xa, Protein C yolağının bir menzili değildir.

**Soru 2 (ID: 99dc8ddb-dff8-4c31-b39a-7af97f52d374)**
Soru Kökü: Sağlıklı endotel yüzeyinde bulunan heparin-benzeri moleküllerin Antitrombin III'ü (AT-III) aktive etmesi, trombozu engelleyici ana yollardan biridir. Aşağıdaki aktif enzimlerden hangisi Antitrombin III'ün hedeflerinden biri **değildir**?
Doğru Şık (E): Faktör 7a
Açıklama: Antitrombin III, adından da anlaşılacağı gibi başta Trombin (Faktör 2a) olmak üzere sırasıyla aktif Faktör 9, 10, 11 ve 12'yi (9a, 10a, 11a, 12a) doğrudan inhibe eden çok güçlü bir sistemdir. Ancak ekstrinsik yolun anahtar enzimi olan Faktör 7a, Antitrombin III'ün yıkım hedefleri arasında yer almaz; Faktör 7a kompleksi öncelikli olarak Doku Faktör Yolak İnhibitörü (TFPI) tarafından hedeflenir.

---

### ÇİFT 20 (Benzerlik: 0.72)

**Soru 1 (ID: 34c2a167-a00c-4c6c-91b1-ae4cf8f8a1f2)**
Soru Kökü: Pıhtı rezorpsiyon sürecinde görev alan fibrinolitik sistemin temel elemanları aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (D): Doku plazminojen aktivatörü (t-PA) ve Plazmin
Açıklama: Fibrinolitik sistem, endotel kaynaklı doku plazminojen aktivatörü (t-PA) aracılığıyla plazminojeni aktif enzim olan plazmine çevirir ve plazmin de polimerize fibrini parçalar. Distraktör olan trombomodülin/Protein C kompleksi pıhtılaşma hızını frenleyen antikoagülan sistemi temsil ederken fibrinolitik yıkım yapmaz. t-PA ve plazmin pıhtı kütlesinin son temizleyicileridir.

**Soru 2 (ID: 5f7dea4c-eb90-489f-9609-1684e5ceff97)**
Soru Kökü: Doku hasarı iyileştikten sonra pıhtının tamamen rezorbe edilebilmesi için fibrinolitik sistemin hassas bir dengede çalışması gerekir. Plazminojenin plazmine dönüştükten sonra sistemik fibrin yıkımına yol açmasını engellemek üzere, dolaşımdaki serbest plazmini doğrudan inaktive eden ana molekül aşağıdakilerden hangisidir?
Doğru Şık (A): α-2 antiplazmin
Açıklama: α-2 antiplazmin, dolaşımda bulunan ve plazminin pıhtı dışına taşıp kontrolsüz bir şekilde sistemik fibrinolizis yapmasını engelleyen, serbest plazmini hızla inhibe eden plazma proteinidir. Plazminojen aktivatör inhibitörü (PAI) plazminin oluşum aşamasını bloke ederken, α-2 antiplazmin halihazırda oluşmuş olan serbest enzimin direkt inaktivatörüdür. Antitrombin III veya TFPI ise koagülasyon kaskadını hedef alır, fibrinolitik yıkım sistemini değil.

---

### ÇİFT 21 (Benzerlik: 0.72)

**Soru 1 (ID: 1174d97a-4c4d-4b17-9510-2657f666b573)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta tekrarlayan derin ven trombozları nedeniyle araştırılıyor. Aile öyküsünde de erken yaşta DVT vakaları bulunan hastanın genetik testinde, koagülasyon kaskadında inaktive edici bir enzime karşı direnç tespit ediliyor. Bu klinik tabloya en yüksek olasılıkla neden olan mutasyon hangi faktörü kodlayan gendedir?
Doğru Şık (C): Faktör V
Açıklama: Genetik hiperkoagülabilite (trombofili) nedenleri arasında en sık görüleni Faktör V Leiden mutasyonudur. Bu mutasyon, Faktör V'i yapısal olarak değiştirerek fizyolojik bir antikoagülan olan Protein C tarafından parçalanmasına (inaktive edilmesine) karşı dirençli hale getirir (Aktif protein C rezistansı).

**Soru 2 (ID: 2ed67395-cc47-4de0-82be-6b1a14707e30)**
Soru Kökü: Venöz tromboz riskini heterozigotlarda 5 kat, homozigotlarda ise 50 kat artıran Faktör V Leiden mutasyonunun temel patofizyolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (A): Faktör V'in protein C ile inaktive edilmesine karşı direnç gelişmesi
Açıklama: Faktör V Leiden mutasyonunda, pıhtılaşma kaskadında görevli Faktör V'in yapısı değişerek aktif protein C tarafından yıkılmasına ve inaktive edilmesine karşı direnç gelişir. Distraktörlerde yer alan antitrombin III eksikliği farklı bir primer hiperkoagülabilite nedenidir ve Faktör V ile direkt ilişkili değildir. Bu mutasyon pıhtılaşmanın doğal fren mekanizmasını bozarak yüksek venöz tromboz riski yaratır.

---

### ÇİFT 22 (Benzerlik: 0.72)

**Soru 1 (ID: dd3836ce-9e19-49d3-892f-9705131e30b0)**
Soru Kökü: Büyük bir trafik kazası sonrası masif kanama geçiren 25 yaşındaki hastada taşikardi, vazokonstriksiyon ve idrar çıkışında azalma gözlenmektedir. Bu hastada şokun nonprogresif evresini sürdüren ve kan basıncını korumaya çalışan temel fizyolojik mekanizma aşağıdakilerden hangisidir?
Doğru Şık (E): Baroreseptörlerin uyarılması ve katekolamin salınımı
Açıklama: Şokun nonprogresif (kompanse) evresinde, azalan kan hacmini dengelemek için baroreseptör refleksleri uyarılır, katekolaminler salınır, ADH salgılanır ve genel sempatik aktivite artarak vazokonstriksiyon sağlanır. Laktik asidoz ise hipoperfüzyonun derinleştiği progresif evrenin bulgusudur.

**Soru 2 (ID: f4e44bf9-63b4-4bb5-bf52-cfd8a874c7a1)**
Soru Kökü: Hipovolemik şok kliniğindeki bir hastanın kompanzasyon mekanizmalarının yetersiz kalması sonucu doku perfüzyon bozukluğunun derinleştiği evrede belirgin hücresel disfonksiyonlar gözlenir. Şokun bu progresif evresine (ilerleyici dönem) geçildiğini gösteren en tipik biyokimyasal bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Laktik asidoz gelişimi
Açıklama: Şokun nonprogresif (kompanzasyon) evresinde refleks nörohümöral mekanizmalar (katekolamin, ADH, baroreseptörler) kan basıncını korumaya çalışır. Ancak bu mekanizmalar yetersiz kalıp doku hipoksisi başlarsa hasta progresif evreye girer; bu evrede hücreler zorunlu anaerobik glikolize kaydığı için pirüvat laktata dönüşür ve asidemi (laktik asidoz) tablonun metabolik belirteci olur.

---

### ÇİFT 23 (Benzerlik: 0.71)

**Soru 1 (ID: 3b5da70a-3a66-4d20-960c-80d35a7ecc30)**
Soru Kökü: Tromboembolik hastalıkların klinik olarak en sık karşılaşılan formu olan pulmoner tromboembolilerin patolojik kökeni araştırıldığında, embolilerin %95 gibi büyük bir oranının aşağıdaki vasküler lokalizasyonların hangisinden kaynaklandığı görülür?
Doğru Şık (E): Popliteal fossa proksimalindeki derin venler
Açıklama: Klinik olarak belirgin pulmoner embolilerin %95'i alt ekstremitede, özellikle dizdeki popliteal fossanın proksimalinde yer alan derin venlerden (femoral, iliyak) köken alır. Yüzeyel venler tromboflebit yapsa da nadiren sistemik embolize olurlar; pulmoner embolinin majör patolojik yatağı her zaman proksimal derin ven trombozlarıdır (DVT).

**Soru 2 (ID: 78ae8efc-2b49-4c31-a46b-019021f01259)**
Soru Kökü: Sistemik dolaşıma katılarak organ infarktlarına yol açan sistemik tromboembolilerin en sık karşılaşılan kaynağı aşağıdakilerden hangisidir?
Doğru Şık (D): İntrakardiyak mural trombüsler
Açıklama: Sistemik tromboembolilerin yaklaşık %80'i intrakardiyak mural trombüslerden kaynaklanır. Bunların da büyük çoğunluğunu sol ventrikül duvar infarktları ve atriyal fibrilasyona bağlı atriyal dilatasyonlar oluşturur. Paradoksal emboli veya valvüler vejetasyonlar çok daha nadir sebeplerdir.

---

### ÇİFT 24 (Benzerlik: 0.71)

**Soru 1 (ID: ebcc2835-623f-431d-b1fd-056a6b888a5d)**
Soru Kökü: Kronik sol kalp yetmezliği veya mitral darlığı bulunan hastalarda, artan hidrostatik basınca yenik düşen akciğer kapillerleri çatlayarak alveol boşluğuna eritrosit sızıntısı yapar. Bu hücrelerin alveoler alanda sindirilmesi sonucunda akciğer parankiminde kalınlaşma, fibrozis ve makroskopik 'kahverengi indürasyon' saptanır. Bu kahverengi rengi veren hücreler aşağıdakilerden hangisidir?
Doğru Şık (C): Hemosiderin-yüklü makrofajlar (Kalp yetmezliği hücreleri)
Açıklama: Alveol içine kanayan eritrositler makrofajlar tarafından fagosite edilir; hemoglobin molekülü parçalanarak demir içeren hemosiderin pigmentine dönüştürülür. Miktarı gittikçe artan bu hemosiderin-yüklü makrofajlar akciğer dokusuna kiremit-kahve rengini verdiğinden 'kahverengi indürasyon' tablosu oluşur ve bu hücrelere klasik adıyla 'kalp yetmezliği hücreleri' veya siderofaj denir.

**Soru 2 (ID: efa14dd8-91d0-4541-9fb9-dbf911d51fa9)**
Soru Kökü: Kalp patolojilerine ikincil akciğerlerde gelişen hemodinamik değişiklikler akut veya kronik olabilir. Histopatolojik incelemede 'alveoler septalarda fibrozis kalınlaşma' ve 'kahverengi indürasyon' saptanması aşağıdaki durumlardan hangisinin kesin kanıtıdır?
Doğru Şık (A): Kronik pulmoner konjesyon
Açıklama: Kronik pulmoner konjesyon, alveol içi uzun süreli konjesyon sonucunda kalp yetmezliği hücrelerinin (siderofajların) hemosiderin birikimiyle 'kahverengi indürasyon' yaratması ve alveoler septalarda ilerleyici fibrotik kalınlaşma ile akut formdan ayrılır. Distraktör olan akut pulmoner konjesyonda septal fibrozis henüz gelişmemiştir, alveoler septal ödem ve sadece fokal taze hemoraji izlenir. Morfolojide fibrozis varlığı lezyonun kronikliğini işaretler.

---

### ÇİFT 25 (Benzerlik: 0.71)

**Soru 1 (ID: 1174d97a-4c4d-4b17-9510-2657f666b573)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta tekrarlayan derin ven trombozları nedeniyle araştırılıyor. Aile öyküsünde de erken yaşta DVT vakaları bulunan hastanın genetik testinde, koagülasyon kaskadında inaktive edici bir enzime karşı direnç tespit ediliyor. Bu klinik tabloya en yüksek olasılıkla neden olan mutasyon hangi faktörü kodlayan gendedir?
Doğru Şık (C): Faktör V
Açıklama: Genetik hiperkoagülabilite (trombofili) nedenleri arasında en sık görüleni Faktör V Leiden mutasyonudur. Bu mutasyon, Faktör V'i yapısal olarak değiştirerek fizyolojik bir antikoagülan olan Protein C tarafından parçalanmasına (inaktive edilmesine) karşı dirençli hale getirir (Aktif protein C rezistansı).

**Soru 2 (ID: 49fe85d3-5765-480c-bfee-d19286755a4d)**
Soru Kökü: Genetik hiperkoagülabilite paneli incelenen bir hastada protrombin gen mutasyonu saptanmıştır. Bu mutasyona sahip bireylerde, yüksek protrombin seviyeleri nedeniyle venöz tromboz riski normal popülasyona göre kaç kat artmış olarak kabul edilir?
Doğru Şık (D): 3 kat
Açıklama: Protrombin gen mutasyonunda prokoagülan bir faktör olan protrombinin plazma seviyeleri yükselir ve bu durum venöz tromboz riskini yaklaşık 3 kat artırır. Faktör V Leiden mutasyonunda ise bu risk heterozigotlarda 5 kat, homozigotlarda 50 kat artmıştır.

---

### ÇİFT 26 (Benzerlik: 0.71)

**Soru 1 (ID: 261fa9bd-7d5f-4da9-83aa-4c396b736348)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, trafik kazası sonrası gelişen çoklu uzun kemik kırıkları nedeniyle ameliyat ediliyor. Travmadan 48 saat sonra hastada ani gelişen takipne, dispne, nörolojik semptomlar ve gövdede diffüz peteşiyal döküntüler ortaya çıkıyor. Bu hastanın kliniğindeki peteşiyal döküntülerin patofizyolojik varlığı aşağıdakilerden hangisinin kullanışlı bir tanısal göstergesidir?
Doğru Şık (B): Trombositopeninin hızlı bir şekilde başladığı
Açıklama: Yağ embolisi sendromunda hastaların %20-50'sinde görülen diffüz peteşiyal döküntüler, trombositlerin yağ globülleri etrafında hızla kümelenip tükenmesiyle başlayan sekonder trombositopeninin kritik bir klinik belirtecidir. Alveoler hyalen membran birikimi (ARDS bulgusu) solunum sıkıntısını açıklasa da peteşilerin doğrudan mekanizması değildir. Peteşi, kemik iliği kaynaklı embolinin koagülasyon kaskadını hızla tükettiğini gösterir.

**Soru 2 (ID: 580a8fd1-163b-4db2-a1c3-71863b71bb45)**
Soru Kökü: Trafik kazasında her iki femurunda parçalı kırık oluşan otuz yaşında bir erkek hastada, yatışının 2. gününde aniden bilinç bulanıklığı, şiddetli solunum sıkıntısı (takipne) ve göğüs ön duvarında peteşiyal döküntüler gelişiyor. Bu hastanın klinik tablosuna neden olan emboli türünün kaynağı aşağıdakilerden hangisidir?
Doğru Şık (E): Kemik iliği kaynaklı yağ globülleri
Açıklama: Uzun kemik kırıklarından 1-3 gün sonra gelişen takipne, nörolojik bulgular (bilinç bulanıklığı) ve peteşiyal döküntü üçlüsü Yağ Embolisi Sendromu için tipiktir. Travma sonucu kemik iliğinden dolaşıma karışan mikroskopik yağ globülleri pulmoner ve serebral kapillerleri tıkayarak bu tabloyu oluşturur.

---

### ÇİFT 27 (Benzerlik: 0.70)

**Soru 1 (ID: 03caab0f-8a69-43b0-877f-46a96c7ec8f9)**
Soru Kökü: Virchow triadına göre, normal kan akımının bozulması tromboz gelişiminde kritik bir faktördür. Aşağıdakilerden hangisi özellikle venöz trombüs gelişiminde rol oynayan en temel uyarandır?
Doğru Şık (C): Staz
Açıklama: Venöz trombüs gelişiminde temel uyaran stazdır. Türbülans ve endotel hasarı ise öncelikle arteryel trombozu başlatan mekanizmalardır. Laminer akımın bozulduğu staz durumlarında pıhtılaşma faktörleri seyreltilemez ve fokal bölgede birikerek venöz trombüsü (kırmızı trombüs) başlatır.

**Soru 2 (ID: 2fe42afb-0264-4797-b900-2257233ddc8b)**
Soru Kökü: Normal kan akımı dinamiklerinde kan hücreleri damar lümeninin merkezinde laminer (düzgün tabakalı) bir seyir izlerler. Arteryel trombozun patogenezinde kritik rol oynayan 'türbülans' durumunun asıl pro-trombotik etkisi aşağıdaki mekanizmalardan hangisi üzerinden gerçekleşir?
Doğru Şık (B): Endotel hasarına yol açarak vWF ve doku faktörü salınımını tetiklemek
Açıklama: Laminer akımın bozulduğu türbülans noktalarında (örneğin aterosklerotik plak yüzeyleri veya damar bifurkasyonları) düzensiz kan girdapları endotel hücrelerinde fiziksel yırtılmaya veya disfonksiyona neden olur. Bu endotel hasarı subendotelyal Von Willebrand Faktörü (vWF) ve doku faktörünün açığa çıkmasına neden olarak trombositleri aktive eder ve arteryel trombozu başlatır.

---

### ÇİFT 28 (Benzerlik: 0.70)

**Soru 1 (ID: 6bf12a7c-95ca-493b-81de-9c6246704de0)**
Soru Kökü: Kırk beş yaşında romatizmal kalp hastalığı öyküsü olan kadın hastada sol atriyal dilatasyon ve atriyal fibrilasyon bulunmaktadır. Bu hastada kalpten köken alan bir mural trombüsün sistemik dolaşıma katılarak emboli yapması durumunda, anatomik olarak **en sık** tıkayacağı vasküler yatak aşağıdakilerden hangisidir?
Doğru Şık (C): Alt ekstremite arteriyel sistemi
Açıklama: İntrakardiyak kaynaklı sistemik tromboemboliler büyük bir oranda sistemik dolaşıma fırlatılır ve anatomik olarak en sık (%75) alt ekstremite arterlerini tıkar. İkinci sıklıkta (%10) serebral arteriyel yatağa giderken, diğer organlar daha nadir tutulur. Atriyal fibrilasyon kaynaklı trombüs sol kalpten çıktığı için pulmoner sisteme değil, doğrudan majör sistemik damarlara yönelir.

**Soru 2 (ID: 78ae8efc-2b49-4c31-a46b-019021f01259)**
Soru Kökü: Sistemik dolaşıma katılarak organ infarktlarına yol açan sistemik tromboembolilerin en sık karşılaşılan kaynağı aşağıdakilerden hangisidir?
Doğru Şık (D): İntrakardiyak mural trombüsler
Açıklama: Sistemik tromboembolilerin yaklaşık %80'i intrakardiyak mural trombüslerden kaynaklanır. Bunların da büyük çoğunluğunu sol ventrikül duvar infarktları ve atriyal fibrilasyona bağlı atriyal dilatasyonlar oluşturur. Paradoksal emboli veya valvüler vejetasyonlar çok daha nadir sebeplerdir.

---

### ÇİFT 29 (Benzerlik: 0.70)

**Soru 1 (ID: 48510b4f-49cc-441f-90df-7819f0e6c5ff)**
Soru Kökü: Sistemik inflamasyonla ilişkili septik şokta, yaygın damariçi pıhtılaşmayı (DİK) tetikleyen mikrovasküler tromboz gelişimi karmaşık bir kaskat sonucu oluşur. Mikrobiyal ürünlerin direkt etkisiyle aktive olarak prokoagülan fazı başlatan koagülasyon faktörü aşağıdakilerden hangisidir?
Doğru Şık (E): Faktör XII
Açıklama: Septik şok kaskadında, mikrobiyal ürünler kompleman sistemini ve direkt olarak Faktör 12'yi (Hageman Faktörü) aktive ederler. Faktör 12 aktivasyonu koagülasyon kaskadını başlatarak prokoagülan bir çevre yaratır ve Doku Faktörü artışı ile birleşerek DİK (mikrovasküler tromboz) tablosunu meydana getirir.

**Soru 2 (ID: 8d4edbd9-9246-4207-9765-6d1fea9dd6f8)**
Soru Kökü: Bakteriyel enfeksiyonlarda endotel yüzeyi güçlü bir antikoagülan yapıdan, prokoagülan ve trombozu tetikleyici bir alana dönüşebilir. Bu durum özellikle ekstrinsik yolu başlatan Doku Faktörü'nün (Faktör 3) sentezlenmesi ile hız kazanır. Bakteriyel endotoksinlerin yanı sıra bu spesifik faktör sentezini uyaran en güçlü sitokinler aşağıdakilerden hangisinde verilmiştir?
Doğru Şık (B): İnterlökin-1 ve TNF-alfa
Açıklama: Sepsis ve yaygın inflamasyon hallerinde ortamdaki IL-1 (İnterlökin-1) ve TNF-α (Tümör Nekroz Faktörü-alfa), normalde sessiz olan endotel hücrelerini aktive ederek Doku Faktörü (Tromboplastin/Faktör 3) sentezini indükler. Bu sentez, inflamatuvar durumlarda sekonder hemostazın (ekstrinsik yolağın) kontrolden çıkmasına ve yaygın pıhtılaşma (DİC vb.) oluşumuna temel hazırlar. PGI2 ve NO ise trombosit agregasyonunu inhibe eden koruyucu medyatörlerdir.

---

### ÇİFT 30 (Benzerlik: 0.70)

**Soru 1 (ID: 1174d97a-4c4d-4b17-9510-2657f666b573)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta tekrarlayan derin ven trombozları nedeniyle araştırılıyor. Aile öyküsünde de erken yaşta DVT vakaları bulunan hastanın genetik testinde, koagülasyon kaskadında inaktive edici bir enzime karşı direnç tespit ediliyor. Bu klinik tabloya en yüksek olasılıkla neden olan mutasyon hangi faktörü kodlayan gendedir?
Doğru Şık (C): Faktör V
Açıklama: Genetik hiperkoagülabilite (trombofili) nedenleri arasında en sık görüleni Faktör V Leiden mutasyonudur. Bu mutasyon, Faktör V'i yapısal olarak değiştirerek fizyolojik bir antikoagülan olan Protein C tarafından parçalanmasına (inaktive edilmesine) karşı dirençli hale getirir (Aktif protein C rezistansı).

**Soru 2 (ID: fda856fe-fbb9-4e94-8379-bac892b103c3)**
Soru Kökü: 30 yaşında kadın hasta, travma öyküsü olmaksızın gelişen derin ven trombozu (DVT) şikayetiyle başvuruyor. Hastanın özgeçmişinde kanama diyatezine dair hiçbir öykü bulunmamaktadır. Laboratuvar incelemesinde PT normal, ancak aPTT süresi belirgin düzeyde uzamış saptanıyor. Kanama beklenirken paradoksal olarak artmış tromboz riski ve izole aPTT uzamasıyla seyreden bu klinik tablo, aşağıdaki faktörlerden hangisinin eksikliğiyle en iyi açıklanır?
Doğru Şık (A): Faktör 12
Açıklama: Faktör 12 (Hageman Faktörü) eksikliği, pıhtılaşma kaskadında aPTT'yi uzatmasına rağmen in vivo koşullarda kanama bozukluğu oluşturmayan tek faktördür. Ayrıca Faktör 12, plazminojenin plazmine dönüşümünü uyararak fibrinolitik sistemi aktive ettiğinden, eksikliğinde fibrinoliz bozulur ve paradoksal tromboz riski ortaya çıkar. Diğer intrinsik yol faktörlerinin (F8, F9, F11) eksiklikleri doğrudan klinik kanama diyatezleri (hemofililer) ile sonuçlanır.

---

### ÇİFT 31 (Benzerlik: 0.69)

**Soru 1 (ID: 091ab1df-579f-4305-856b-11d9f2568a6b)**
Soru Kökü: Sağlıklı bir kan damarında antikoagülan mekanizmaların temel taşlarından biri olan Aktif Protein C'nin enzimatik yıkımına uğrayarak inaktive edilen ve pıhtılaşma sistemini yavaşlatan hedef pıhtılaşma kaskadı faktörleri arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Faktör Xa (Aktif Faktör X)
Açıklama: Aktif Protein C'nin tek enzimatik hedefi hemostaz kaskadında amplifikasyonu sağlayan kofaktörler olan Faktör 5 ve Faktör 8'dir (ve bunların aktif formları). Faktör Xa'nın inhibisyonu Protein C tarafından değil, Doku Faktör Yolak İnhibitörü (TFPI) veya Antitrombin III tarafından gerçekleştirilir. Ortak yolun giriş kapısı olan Faktör Xa, Protein C yolağının bir menzili değildir.

**Soru 2 (ID: 8f6549e2-5e4f-411f-b80a-06caae0d7408)**
Soru Kökü: Sekonder hemostaz tıkacının inşasında kilit enzim olan trombin (Faktör 2a), pıhtılaşmayı katlanarak büyütmek (amplifikasyon) için birçok koagülasyon faktörünü geri bildirimle aktive eder. Aşağıdakilerden hangisi trombin tarafından aktive edilen koagülasyon faktörlerinden biri **değildir**?
Doğru Şık (A): Faktör 9
Açıklama: Trombin, pıhtılaşmayı amplifiye etmek üzere Faktör 5, 8 ve 11'i aktive ederek intrinsik kaskadı hızlandırır ve Faktör 13'ü aktifleyerek fibrin polimerlerini çapraz bağlarla sarmalar. Ancak Faktör 9, trombinin doğrudan aktivasyon hedeflerinden biri değildir; Faktör 9 in vivo olarak Faktör 7a ve Faktör 11a tarafından aktiflenir. Bu durum trombinin etki spektrumundaki önemli istisnalardan biridir.

---

### ÇİFT 32 (Benzerlik: 0.69)

**Soru 1 (ID: bc8fc81a-7bfd-4022-8564-c191d7010651)**
Soru Kökü: Uzun süredir şiddetli kalp yetmezliği tedavisi gören 65 yaşındaki hastanın otopsisinde karaciğer 'hint cevizi' (nutmeg) görünümündedir. Histopatolojik incelemede sentrilobüler hepatositlerde belirgin nekroz izlenirken, periportal hepatositlerde sadece yağlı değişiklik görülmüş ve nekroz saptanmamıştır. Periportal hepatositlerin nekrozdan korunmasının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (E): Periportal hepatositlerin hepatik arteriole yakın olup daha iyi oksijenlenmesi
Açıklama: Kronik pasif hepatik konjesyonda, hepatik arteriole anatomik olarak daha yakın olan periportal hepatositler daha yüksek oksijenasyon sağladığı için kronik hipoksiden sadece yağlı değişiklik düzeyinde etkilenirler. Kan akımının en uç noktası olan perisantral (Zon 3) hepatositler ise hipoksiye en duyarlı alan oldukları için nekroza giderler. Bu oksijenizasyon gradyanı, makroskopik düzeyde izlenen kırmızı-kahverengi hint cevizi görünümünün histolojik temelidir.

**Soru 2 (ID: ead849a8-96b7-48bc-8391-d56f3d66e6d9)**
Soru Kökü: Masif miyokard enfarktüsü geçirerek ani kalp debisi düşüşü ile acile getirilen hastada akut hepatik konjesyon tablosu saptanmıştır. Karaciğerdeki anatomik kanlanma zonlarına göre histopatolojik analiz yapıldığında, hepatik arteriole yakın olduğu için hipoksiden nispeten daha iyi korunan periportal hepatositlerde izlenmesi beklenen lezyon formu hangisidir?
Doğru Şık (A): Sadece yağlı değişiklik (steatoz)
Açıklama: Akut karaciğer konjesyonunda veya şokta, oksijeni doğrudan arteriolden ilk elden alan periportal bölge (Zon 1) nekrozdan korunur ancak oksijen stresi sebebiyle uyum adaptasyonu göstererek izole yağlı değişiklik geçirir. Nekroz ve kanama venöz dönüşe yakın olan oksijenden en fakir sentrilobüler (Zon 3) alanda yaşanır. Bu topografik kontrast, organın akut hipoksideki hayatta kalma paternidir.

---

### ÇİFT 33 (Benzerlik: 0.69)

**Soru 1 (ID: 091ab1df-579f-4305-856b-11d9f2568a6b)**
Soru Kökü: Sağlıklı bir kan damarında antikoagülan mekanizmaların temel taşlarından biri olan Aktif Protein C'nin enzimatik yıkımına uğrayarak inaktive edilen ve pıhtılaşma sistemini yavaşlatan hedef pıhtılaşma kaskadı faktörleri arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (C): Faktör Xa (Aktif Faktör X)
Açıklama: Aktif Protein C'nin tek enzimatik hedefi hemostaz kaskadında amplifikasyonu sağlayan kofaktörler olan Faktör 5 ve Faktör 8'dir (ve bunların aktif formları). Faktör Xa'nın inhibisyonu Protein C tarafından değil, Doku Faktör Yolak İnhibitörü (TFPI) veya Antitrombin III tarafından gerçekleştirilir. Ortak yolun giriş kapısı olan Faktör Xa, Protein C yolağının bir menzili değildir.

**Soru 2 (ID: 92480fd1-6628-4a90-b26c-de2cddbc0917)**
Soru Kökü: Koagülasyon yolağında rol alan faktörlerin kalitatif veya kantitatif bozukluklarını tespit etmek için kullanılan tarama testlerinden Protrombin Zamanı (PT), organizmada ekstrinsik yolu değerlendirmek için kullanılır. Aşağıdaki hemostatik moleküllerden hangisi PT testinin normal sınırlarında çıkmasını sağlayan bileşenlerden biri **değildir**?
Doğru Şık (B): Faktör 12 (Hageman faktörü)
Açıklama: Protrombin Zamanı (PT) testi, faktör 7 (ekstrinsik başlangıç), faktör 10, 5, 2 (protrombin) ve fibrinojenin fonksiyonel bütünlüğünü ölçer. Faktör 12 ise intrinsik yolağın en tepesindeki tetikleyicidir ve aktivitesi PT ile değil, Parsiyel Tromboplastin Zamanı (aPTT) testi ile ölçülür. Ekstrinsik yolun gücünü, hızlı aktivasyon ve dış doku faktörü aracılı sistem oluşturur.

---

