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

**Soru 1 (ID: 41a72de7-34e4-4a63-9e97-996f96653dfc)**
Soru Kökü: Basit kemik kisti (SBC) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Sementoosseöz displazi ile birlikte görüldüğünde bile daima soliter (tekil) lezyon olarak kalırlar.
Açıklama: Basit kemik kistleri genel karakteristikleri gereği soliter yapıdadırlar ancak sementoosseöz displazi gibi spesifik fibroosseöz lezyonlarla eş zamanlı bulunduklarında multiple olarak gelişme eğilimindedirler. Kemiğin uzun aksına büyüme, taraklı sınır ve vital diş varlığı basit kemik kistinin en belirgin ayırıcı tanı özellikleridir. Basit kemik kisti cerrahisinde iç çeperin kürete edilerek kavite içine kanama oluşturulması, osteojenik öncül hücrelerin ortama gelmesini sağlayarak spontan iyileşmeyi tetikler.

**Soru 2 (ID: 5f66eb00-4750-4ba2-8432-14fb980b6a52)**
Soru Kökü: Basit kemik kisti (SBC) ve patolojik özellikleri hakkında aşağıda verilen bilgilerden hangisi **yanlıştır**?
Doğru Şık (A): Lamina dura devamlılığının olmaması ve invaziv kemik dekstrüksiyonu karakteristik özellikleridir.
Açıklama: Basit kemik kistleri benign (iyi huylu) özellik gösteren boşluklardır; diş köklerindeki lamina durayı bozmazlar veya kemiği osteolitik malign tümörler gibi invaziv şekilde dekstrükte etmezler. Aksine, lamina duranın sağlam kalması ve çevresel kemik infiltrasyonunun yokluğu SBC'yi radyolojik olarak malignitelerden ekarte eden en temel güvencedir. Diğer tüm şıklarda belirtilenler SBC'nin karakteristik klinik paternidir.

---

### ÇİFT 2 (Benzerlik: 0.80)

**Soru 1 (ID: 22f5105c-cac4-4085-b6f4-ade3c664f1aa)**
Soru Kökü: Kronik olarak enfekte dentijeröz kistlerin epitel döşemesinden köken alarak malign transformasyon gösterebilen patolojiler literatürde tanımlanmıştır. Aşağıdakilerden hangisi bu kistlerden geliştiği rapor edilen malign tümörlerden biri **değildir**?
Doğru Şık (D): Asiner hücreli adenokarsinom
Açıklama: Kronik olarak enfekte dentijeröz kistlerden, skuamöz metaplazi üzerinden skuamöz hücreli karsinom veya glandüler diferansiyasyon üzerinden mukoepidermoid karsinom gelişebildiği kanıtlanmıştır. Kistik ameloblastoma gelişimi de bilinmektedir. Ancak asiner hücreli adenokarsinom, odontojenik kist epitelinden değil tükürük bezi asini yapılarından köken alan bir tümördür.

**Soru 2 (ID: 75b13e2a-5149-4132-9994-056cd9afa035)**
Soru Kökü: Aşağıdakilerden hangisi kronik olarak enfekte kalmış büyük çaplı bir dentijeröz kistin duvarındaki epitelyal döşemeden gelişebileceği bildirilen malignitelerden biri **değildir**?
Doğru Şık (C): Santral dev hücreli granülom
Açıklama: Santral dev hücreli granülom reaktif/benign bir fibroosseöz lezyondur ve dentijeröz kist epitelinden köken alan bir malignite değildir. Kronik inflamasyon altındaki dentijeröz kist epiteli skuamöz metaplazi geçirerek skuamöz hücreli karsinoma veya mukus üreten hücrelerin proliferasyonu ile mukoepidermoid karsinoma dönüşebilir. Bu nadir malign transformasyon riski, tüm kistlerin cerrahi sonrası histolojik incelemeye gönderilmesini zorunlu kılar.

---

### ÇİFT 3 (Benzerlik: 0.79)

**Soru 1 (ID: 18620d3d-b337-4961-84d5-0eea71621e26)**
Soru Kökü: Kırk beş yaşında erkek hasta travma öyküsü olan 21 numaralı diş bölgesinde şişlik şikayetiyle başvurmuştur. Diş kronu renkleşmiş olup vitalite testine negatif yanıt vermiştir. Panoramik grafide kök ucunda 2.5 cm çapında, yuvarlak şekilli, belirgin kortikal sınırlı bir radyolüsensi saptanmıştır. Köklerde hafif rezorpsiyon izlenmektedir. Bu vakadaki en olası tanı ve onu diğer benzer lezyonlardan ayıran spesifik radyografik bulgu eşleşmesi aşağıdakilerden hangisinde en doğru verilmiştir?
Doğru Şık (E): Radiküler kist - 2 cm'den büyük, iyi sınırlı yuvarlak kavite ve devital diş
Açıklama: Devital bir dişin apeksindeki radyolüsensi granülom veya kist olabilir. Ancak lezyonun yuvarlak şekli, çok belirgin kortikal sınırı ve 2 cm'den büyük boyutu radiküler kist için patognomoniktir. Granülomlar nadiren bu kadar büyük ve mükemmel kortikal sınırlı olurlar.

**Soru 2 (ID: ec7782e2-a006-49d0-ab0b-9c1588e22cce)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, anterior maksillada rutin radyografik inceleme sırasında sol üst lateral kesici dişinin apekste sınırları belirgin, yuvarlak bir radyolüsensi ile başvurmuştur. Dişin kronunda geniş bir kompozit restorasyon mevcuttur ve diş vitalite testine negatif yanıt vermiştir. Hastanın anemnezinde herhangi bir şikayet bildirilmemektedir. Bu klinik senaryoda radiküler kist ön tanısı ile değerlendirilen dişte aşağıdaki bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (E): Etkilenen dişte perküsyonda şiddetli hassasiyet
Açıklama: Radiküler kistler pulpa nekrozu sonucu gelişen inflamatuar kistler olup sekonder enfeksiyon gelişmedikçe karakteristik olarak asemptomatiktirler ve dişte perküsyon hassasiyeti izlenmez. Akut periapikal abse formasyonuna dönüşen veya sekonder enfekte olan vakalar dışında perküsyon pozitifliği ayırıcı tanıda ekarte edici bir bulgudur. Diğer şıklar (kök rezorpsiyonu, ekspansiyon, 2 cm'den büyük boyut ve belirgin kortikal sınır) radiküler kistin doğal büyüme paterni ve radyografik özellikleriyle birebir uyumludur.

---

### ÇİFT 4 (Benzerlik: 0.78)

**Soru 1 (ID: c96de0a9-ad27-4802-8238-022d92a1a734)**
Soru Kökü: 34 yaşında erkek hasta, damak ön bölgesinde hafif şişlik ve ara sıra tuzlu bir tat algısı şikayetiyle başvuruyor. Klinik muayenede palatin papillanın hemen posteriorunda küçük, maviye çalan flüktüan bir şişlik izleniyor. İlgili santral kesici dişlerin vitalite testleri pozitif bulunuyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kisti, insisiv kanalda epitel artıklarından gelişir ve sıvının ağız içine drene olması nedeniyle hastada tuzlu tat hissi yaratır; palatin papilla arkasında şişlik oluşturur. Santral kesicilerin apikalinde yerleşip kalp şeklinde görünebilirse de, bu dişlerin vital kalması radiküler kist seçeneğini ekarte ettirir. Bu topografik ve klinik triyad (lokasyon, vitalite, tuzlu tat) nazopalatin kiste özgüdür.

**Soru 2 (ID: f4f02f15-26db-4582-a7db-25f421924a92)**
Soru Kökü: Otuz beş yaşındaki erkek hasta, ara sıra ağzında tuzlu bir tat hissettiğini ve sert damağının ön kısmından bir akıntı geldiğini fark ederek başvurmuştur. Alınan periapikal radyografide; maksiller iki santral dişin apikalinde, nazal spina gölgesiyle süperpoze olmuş kalp formunda net sınırlı bir radyolüsensi saptanmıştır. İnflamatuar kaynak ekarte edildiğine göre, hastanın tuzlu tat almasına neden olan kistik yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kistinin intraoral sinüs yolu vasıtasıyla veya direkt nazopalatin kanal açıklığı boyunca drene olması, hastaların klinikte spontan sıvı gelişi ve 'tuzlu tat' tarif etmesine sebep olur. Kalp şeklindeki radyolojik görünüm, maksiller anterior (kesici) apikali orta hattı ile nazal anterior spinanın gölgelerinin birleşmesinden ortaya çıkan bu kistin diagnostik çapa bulgusudur.

---

### ÇİFT 5 (Benzerlik: 0.77)

**Soru 1 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

**Soru 2 (ID: fd1844d8-a7c9-446e-98d2-812bc063294c)**
Soru Kökü: Altmış yaşındaki kadın hastanın panoramik radyografisinde, sol inferior alveolar sinir kanalının altında ve mandibula açısının hemen önünde, sınırları belirgin, yuvarlak bir radyolüsensi saptanmıştır. BT incelemesinde bu defektin içinin yağ dansitesine sahip doku ile dolu olduğu ve lingual kortekste incelme yarattığı görülmüştür. Bu lezyon için uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (E): Hiçbir cerrahi müdahaleye gerek yoktur, takibi yeterlidir
Açıklama: Tarif edilen lezyon Stafne idiyopatik kemik kavitesidir (lingual tükrük bezi depresyonu). Submandibuler bezin veya yağ dokusunun mandibula lingual korteksinde oluşturduğu gelişimsel bir depresyondur. BT'de yağ/glandüler doku dansitesi izlenmesi teşhisi kesinleştirir ve bu fizyolojik bir varyasyon olduğu için patolojik bir süreç işlemez; dolayısıyla cerrahi veya medikal bir tedavi gerekmez.

---

### ÇİFT 6 (Benzerlik: 0.77)

**Soru 1 (ID: 1972cd30-554d-4fff-8258-c485cf8e41a7)**
Soru Kökü: Odontojenik enfeksiyon kaynaklı olmayan, 50 yaşlarında dişsiz mandibulaya sahip bir kadının posterior mandibular bölgesinde, sınırları belirsiz veya zayıf kalsifikasyonlar içeren litik radyolüsent alan saptanmıştır. Çevreleyen kemikte inflamatuar reaksiyon yoktur. Histolojik incelemesinde normal ilik dokusu saptanan bu lezyonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Fokal osteoporotik kemik iliği
Açıklama: Fokal osteoporotik kemik iliği defekti, özellikle orta yaşlı dişsiz kadınların alt çene arka bölgesinde görülen, enfeksiyöz (osteomyelit) veya neoplastik bir tabiatı olmayan, sadece ilik adacıklarının kemikte litik/radyolüsent bir alan gibi görüldüğü varyasyondur. Kesin tanısı radyografiyle her zaman anlaşılamayıp biyopside normal kemik iliği çıkması ile konur; tedavi gerektirmeyen self-limiting (kendi kendini sınırlayan) bir durumdur.

**Soru 2 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

---

### ÇİFT 7 (Benzerlik: 0.76)

**Soru 1 (ID: 54d1b6d2-0892-4185-9869-db4383048974)**
Soru Kökü: Otuz iki yaşındaki bir hastada rutin panoramik muayenede sürmemiş mandibular yirmi yaş dişi etrafında bir radyolüsensi fark edilmiştir. Ayırıcı tanıda kistik ameloblastoma ve dentijeröz kist düşünülmektedir. Bu iki lezyonu radyolojik olarak birbirinden ayırmayı imkansız kılabilecek temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kistik ameloblastomanın erken evrelerinde küçük tek odacıklı (uniloküler) bir perikoronal görünüm verebilmesi
Açıklama: Dentijeröz kist her zaman mine sement birleşimine tutunan uniloküler bir radyolüsensidir. Unikistik ameloblastoma veya kistik ameloblastoma erken evrelerde dentijeröz kist ile birebir aynı uniloküler ve perikoronal radyografik paterni çizebilir; bu durumda iki lezyonu radyografik olarak ayırt etmek imkansız hale gelir, kesin tanı yalnızca histopatolojik inceleme ile konur.

**Soru 2 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

---

### ÇİFT 8 (Benzerlik: 0.76)

**Soru 1 (ID: 4c4ac888-e43d-45e9-9184-c4867bf604ef)**
Soru Kökü: Ouz otuz beş yaşında erkek hasta, üst çene ön bölgede hafif şişlik şikayetiyle başvurmuştur. Yapılan klinik muayenede 11 numaralı dişte geniş bir restorasyon izlenmiş olup diş canlılık testlerine negatif yanıt vermiştir. Alınan periapikal radyografide iyi kortikal sınırlı radyolüsent lezyon saptanmıştır. Bu hastadaki lezyonun kaynağı olarak en olası mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Büyük çürük veya travma yüzünden nekrotik pulpaya sahip devital diş varlığı
Açıklama: Radiküler kistler, büyük çürük, geniş restorasyon veya travma kaynaklı nekrotik pulpaya sahip devital dişlerden köken alırlar. Hastanın 11 numaralı dişinin canlılık testlerine negatif yanıt vermesi, kistin inflamatuar kökenli olduğunu gösterir. Gelişimsel epitel artıkları dentijeröz kist veya KOT etyolojisinde rol oynarken, radiküler kist tamamen pulpa nekrozu ile tetiklenir.

**Soru 2 (ID: ec7782e2-a006-49d0-ab0b-9c1588e22cce)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, anterior maksillada rutin radyografik inceleme sırasında sol üst lateral kesici dişinin apekste sınırları belirgin, yuvarlak bir radyolüsensi ile başvurmuştur. Dişin kronunda geniş bir kompozit restorasyon mevcuttur ve diş vitalite testine negatif yanıt vermiştir. Hastanın anemnezinde herhangi bir şikayet bildirilmemektedir. Bu klinik senaryoda radiküler kist ön tanısı ile değerlendirilen dişte aşağıdaki bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (E): Etkilenen dişte perküsyonda şiddetli hassasiyet
Açıklama: Radiküler kistler pulpa nekrozu sonucu gelişen inflamatuar kistler olup sekonder enfeksiyon gelişmedikçe karakteristik olarak asemptomatiktirler ve dişte perküsyon hassasiyeti izlenmez. Akut periapikal abse formasyonuna dönüşen veya sekonder enfekte olan vakalar dışında perküsyon pozitifliği ayırıcı tanıda ekarte edici bir bulgudur. Diğer şıklar (kök rezorpsiyonu, ekspansiyon, 2 cm'den büyük boyut ve belirgin kortikal sınır) radiküler kistin doğal büyüme paterni ve radyografik özellikleriyle birebir uyumludur.

---

### ÇİFT 9 (Benzerlik: 0.75)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: ecfc385f-86a1-4740-a3b9-f4a00882cfb3)**
Soru Kökü: Otuz altı yaşındaki kadın hastanın üst çene anterior bölgesinde, sürmemiş maksiller kanin dişiyle ilişkili ve dişi erüpsiyondan alıkoyan iyi sınırlı bir lezyon tespit edilmiştir. Lezyonun internal yapısında küçük düzgün çakıl taşları şeklinde belirgin radyoopak odaklar mevcuttur. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsifiye kistik odontojenik tümör (Gorlin Kisti)
Açıklama: Kalsifiye kistik odontojenik tümör, ortalama 30'lu yaşlarda görülen, özellikle insizör-kanin bölgesinde yerleşerek diş sürmesini engelleyen ve radyografik olarak internal beyaz benekler/çakıl taşları şeklinde distrofik kalsifikasyonlar sunan bir lezyondur. Glandüler kistte kalsifikasyon beklenmez; sementoblastoma ise vital dişin apeksine yapışık kök rezorpsiyonu ile karakterizedir.

---

### ÇİFT 10 (Benzerlik: 0.75)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: ab9ec88d-ef57-4832-aa70-59dfdc3c1682)**
Soru Kökü: Kırk sekiz yaşındaki kadın hasta anterior mandibulada dişlerde yer değişikliği yaratan multiloküler bir radyolüsensi ile başvurmuştur. Biyopsi sonucu glandular odontojenik kist olarak raporlanmıştır. Bu kistin klinik seyri ve davranışı için aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Basit enükleasyondan sonra hiçbir şekilde rekürrens eğilimi göstermez.
Açıklama: Glandular odontojenik kist son derece agresif bir davranıştır ve konservatif cerrahilerden (enükleasyon vb.) sonra yüksek oranda rekürrens eğilimi gösterir. Bu rekürrens potansiyelinden dolayı, rezeksiyon gibi daha agresif tedavi planlamaları göz önünde bulundurulur ve operasyon sonrası dikkatli periyodik klinik/radyolojik takip gerekir.

---

### ÇİFT 11 (Benzerlik: 0.75)

**Soru 1 (ID: 347c2f7d-9e2f-4e85-8851-142ce2d6484f)**
Soru Kökü: Gömülü bir dişin çevresinde gelişen dentijeröz kistlerin morfolojik ve radyolojik bulguları değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Kistin anatomik sınırı daima diş kökünün orta veya apikal üçlüsüne tutunarak ilerler.
Açıklama: Dentijeröz kistin karakteristik tutunma noktası mine-sement birleşimidir (CEJ). Kistik astar, kronu çevreleyip CEJ'de sonlanır. Kök boyunca apikale inen kistik sınırlar dentijeröz kistten ziyade KOT (Keratokistik Odontojenik Tümör) gibi diğer agresif patolojileri veya periodontal ilişkili kistleri düşündürür.

**Soru 2 (ID: 7afd1494-f48b-4428-b6a1-934231edb8e9)**
Soru Kökü: Sürmemiş bir dişin kronu etrafında perikoronal pozisyonda izlenen radyolüsent lezyonların radyolojik değerlendirmesinde, lezyonun dentijeröz kist yerine keratokistik odontojenik tümör (KOT) olabileceğini düşündüren tutunma paterni aşağıdakilerden hangisidir?
Doğru Şık (B): Mine-sement birleşiminin apikaline bağlanması
Açıklama: Perikoronal pozisyondaki bir KOT'u dentijeröz kistten ayıran en önemli radyografik işaretlerden biri, kistik dış sınırın mine-sement birleşiminin apikaline (kök yüzeyine) bağlanmasıdır. Dentijeröz kist ise patogenezi gereği foliküler kaynaklıdır ve tam olarak mine-sement birleşimine (CEJ) tutunur. Kortikal plakta belirgin ekspansiyonun olmaması da KOT lehine değerlendirilen ek bir bulgudur.

---

### ÇİFT 12 (Benzerlik: 0.74)

**Soru 1 (ID: 40edb7b8-e12d-4ed7-bf2e-bc739226be05)**
Soru Kökü: Mandibula posterior bölgede radyolüsent bir lezyon saptanan hastada, ayırıcı tanıda odontojenik kist ile lingual tükrük bezi depresyonunu birbirinden ayırmak için dikkate alınması gereken en kritik anatomik pozisyon ilişkisi aşağıdakilerden hangisidir?
Doğru Şık (E): İnferior alveolar sinir kanalı ile olan süperior-inferior konum ilişkisi
Açıklama: Odontojenik kistlerin merkez üssü dişe ait dokulardan köken aldıkları için daima inferior alveolar kanalın üstünde yer alırken, lingual tükrük bezi depresyonu embriyolojik bir inklüzyon veya bez baskısı nedeniyle mandibular kanalın altında lokalize olur. Eğer patoloji inferior alveolar kanalın üstünde yer alıyorsa tanı ilk etapta odontojenik orijinlere (KOT, vb.) yönelmelidir. İstisnai olarak sublingual beze bağlı defektler anterior bölgede kanal üstünde görülebilir ancak molar/antegonial bölgedeki superior/inferior ayrımı kesin bir radyografik markerdir.

**Soru 2 (ID: e5d4c2e2-22a2-44ba-80eb-4bd9a06cde74)**
Soru Kökü: Posterior mandibula inferior sınırında radyolüsent lezyonu bulunan ve lingual tükrük bezi depresyonu ön tanısı alan bir hastada, ileri tetkik amacıyla çok kesitli bilgisayarlı tomografi (BT) alınmıştır. Biyopsiye gerek kalmadan ön tanıyı doğrulayan radyolojik internal bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Defekt alanı içerisinde izlenen belirgin yağ yoğunluğu dokusu
Açıklama: Lingual tükrük bezi depresyonu (Stafne defekti) gerçek bir kist veya tümör olmayıp mandibular kemiğin lingual yüzündeki glandüler dokuya (çoğunlukla submandibular bez) bağlı konjenital veya gelişimsel bir girintidir. Çok kesitli BT kesitlerinde bu defekt alanının içinin yağ dokusu yoğunluğu taşıdığı ve bitişik tükrük bezi ile süreklilik arz ettiği net bir şekilde izlenir. Odontojenik lezyonların aksine kalsifikasyon, kolesterol veya multiloküler bağ dokusu barındırmadığından yağ dansitesinin görülmesi patognomoniktir.

---

### ÇİFT 13 (Benzerlik: 0.74)

**Soru 1 (ID: 0cd24602-c0de-413d-9da6-45e53ae9e316)**
Soru Kökü: Çenelerde kist ve tümör benzeri oluşumların klinik ve radyografik özellikleriyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Basit kemik kistinin en ayırıcı radyografik özelliği belirgin bir kortikal ekspansiyona neden olmasıdır.
Açıklama: Basit kemik kistleri, kemik içinde fibröz dokunun boşluk bırakmasıyla karakterize kist benzeri kavitelerdir ve KOT'lar gibi kemiğin uzun ekseninde yayıldıkları için genellikle ekspansiyon yapmazlar. Aksine, dentijeröz kistler veya cherubism gibi durumlar belirgin ekspansiyona neden olur. SBC'lerin minimal klinik belirti vermesi ve korteksi dışarı itmemesi temel tanı kriterlerinden biridir.

**Soru 2 (ID: 347c2f7d-9e2f-4e85-8851-142ce2d6484f)**
Soru Kökü: Gömülü bir dişin çevresinde gelişen dentijeröz kistlerin morfolojik ve radyolojik bulguları değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Kistin anatomik sınırı daima diş kökünün orta veya apikal üçlüsüne tutunarak ilerler.
Açıklama: Dentijeröz kistin karakteristik tutunma noktası mine-sement birleşimidir (CEJ). Kistik astar, kronu çevreleyip CEJ'de sonlanır. Kök boyunca apikale inen kistik sınırlar dentijeröz kistten ziyade KOT (Keratokistik Odontojenik Tümör) gibi diğer agresif patolojileri veya periodontal ilişkili kistleri düşündürür.

---

### ÇİFT 14 (Benzerlik: 0.74)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

---

### ÇİFT 15 (Benzerlik: 0.74)

**Soru 1 (ID: eb70b5c5-f04e-4221-9f6d-f8000c6f86e3)**
Soru Kökü: Gelişimsel süreçlerde mandibular kanal (inferior alveoler sinir) komşuluğu anatomik sınıflama için bir bariyerdir. Aşağıdaki lezyonlardan hangisi mandibulada radyografik olarak saptandığında, lezyonun merkezi inferior alveoler sinir kanalının **altında** kalır?
Doğru Şık (D): Stafne (Lingual tükrük bezi) depresyonu
Açıklama: Stafne depresyonu gelişim sırasında submandibular veya sublingual tükrük bezi dokusunun mandibular korteks üzerinde oluşturduğu fizyolojik bir baskı çukurudur ve klasik lokalizasyonu angulusun hemen önü ile inferior alveoler kanalın ALTI'dır. Odontojenik kistler (radiküler, rezidüel, KOT) kökenlerini diş embriyolojisinden aldıkları için mandibulada daima alveolar krette, yani inferior alveoler kanalın ÜSTÜNDE yerleşmek zorundadırlar.

**Soru 2 (ID: f875ebc9-2d93-41d3-9264-6b5f4fdae1f8)**
Soru Kökü: 45 yaşında kadın hasta, alt sağ posterior bölgede hafif bir ekspansiyon şikayetiyle kliniğe başvuruyor. Alınan anamnezde bu bölgeden aylar önce kronik enfekte bir dişin çekildiği öğreniliyor. Radyografide iyi sınırlı, oval şekilli kemik içi bir kavitasyon saptanıyor. Bu lezyonun mandibuladaki merkezi inferior alveoler sinir kanalı ile ilişkisi nasıldır?
Doğru Şık (D): Merkezi her zaman kanalın üzerindedir
Açıklama: Rezidüel kistler diş çekimi sonrası alveolde kalan epitel artıklarından (genellikle radiküler kist kalıntısı) kaynaklandığı için odontojenik kökenlidir ve bu nedenle merkezleri daima inferior alveoler sinir kanalının koronalinde (üzerinde) yer alır. Stafne defekti gibi gelişimsel glandüler doku kaynaklı kemik depresyonları ise kanalın altında kalarak rezidüel kistlerden ayrılır. Kanal ilişkisi patolojinin dokusal kökenini belirleyen en temel topografik ipucudur.

---

### ÇİFT 16 (Benzerlik: 0.74)

**Soru 1 (ID: 8885dd9c-7cbe-4c31-9ce6-9ea309fe1a4e)**
Soru Kökü: Erişkin dönemde, her iki parotis bezinde eşzamanlı olarak gelişen çoklu, ağrısız, yavaş büyüyen lenfoepitelyal kistik lezyonların varlığı, klinisyende öncelikle hangi sistemik enfeksiyöz tablonun şüphesini uyandırmalıdır?
Doğru Şık (C): Human Immunodeficiency Virus (HIV)
Açıklama: Parotis bezinde gelişen lenfoepitelyal kistler tek taraflı olduğunda genellikle gelişimseldir; ancak yetişkinlerde bilateral (çift taraflı) ve çoklu kistik tutulum gösterdiğinde bu durum HIV enfeksiyonunun prodromal veya eşlik eden güçlü bir belirtecidir. Sjogren sendromu solid lenfoepitelyal sialadenit (miyoepitelyal adalar) yapar ancak dev kistik yapılar ilk planda HIV'i işaret eder.

**Soru 2 (ID: bc7b2c83-b803-4550-bceb-e25a80dc76ce)**
Soru Kökü: Sistemik viral bir enfeksiyonun bölgesel bir bulgusu olarak, özellikle HIV pozitif çocukluk veya yetişkin dönem hastalarında iki taraflı (bilateral) olarak parotis bezlerinde gelişen sıvı dansitesindeki kistik lezyonlara ne ad verilir?
Doğru Şık (C): Lenfoepitelyal kist
Açıklama: Lenfoepitelyal kistler, baş boyun bölgesinde sıklıkla parotis bezini tutan, tek taraflı gelişebileceği gibi HIV enfekte hastalarda (özellikle immün yetmezlik komponenti olarak) spesifik olarak bilateral parotis tutulumuyla karakterize kistik patolojilerdir. Warthin tümörü de bilateral olabilen bir parotis neoplazmıdır ancak solid-kistik yapısı vardır ve daha çok ileri yaş sigara içen erkeklerde izlenir; HIV spesifikliği ile öne çıkan lezyon lenfoepitelyal kisttir.

---

### ÇİFT 17 (Benzerlik: 0.74)

**Soru 1 (ID: 93939bfd-7728-41b4-85c3-23a52ae5496f)**
Soru Kökü: Çenelerde izlenen farklı kist tiplerinin büyüme dinamikleri karşılaştırıldığında, odontojenik keratokist (KOT) ve rezidüel kist için aşağıdaki kıyaslamalardan hangisi **yanlıştır**?
Doğru Şık (B): Rezidüel kistler, KOT'lara göre daha az kortikal ekspansiyon yapma potansiyeline sahiptir.
Açıklama: Rezidüel kistlerin odontojenik keratokiste (KOT) oranla kortikal ekspansiyon yapma potansiyeli daha fazladır. KOT medüller alanda yayılarak ilerlerken, rezidüel kist basınçla dış korteksi ekspanse etmeye daha meyillidir. B şıkkı bu nedenle yanlıştır.

**Soru 2 (ID: 9d09bc1f-6b34-42ba-831f-3a02620771ad)**
Soru Kökü: Diş çekim boşluğunda gelişen ve radyografik olarak oval şekilli, kortikal sınırlı bir lezyon olarak izlenen rezidüel kistin kemik ekspansiyon karakteristiği, ayırıcı tanısında yer alan odontojenik keratokist (KOT) ile karşılaştırıldığında nasıldır?
Doğru Şık (B): Rezidüel kist KOT'a oranla daha fazla ekspansiyon yapma potansiyeline sahiptir.
Açıklama: Rezidüel kistler, çenelerin dış kortikal plağında belirgin ekspansiyona sebep olabilir ve bu özellikleri odontojenik keratokiste (KOT) göre daha fazla ekspansiyon yapma potansiyeline sahip olduklarını gösterir. KOT ise karakteristik olarak kortikal ekspansiyona neden olmaktan ziyade çenelerin internal yönü boyunca tünel şeklinde büyüme eğilimindedir.

---

### ÇİFT 18 (Benzerlik: 0.74)

**Soru 1 (ID: 8800cb75-880d-4277-ad2c-6f16553c7744)**
Soru Kökü: Dentijeröz kist cerrahisi sonrasında çıkarılan dokunun mutlak suretle histopatolojik değerlendirmeye gönderilmesi zorunludur. Bunun en önemli nedeni, bu kistin epitelyal astarından kaynaklanabilen ve perikoronal bölgede dentijeröz kist ile birebir aynı radyografik görüntüyü verebilen odontojenik tümörün varlık riskidir. Bu odontojenik tümör aşağıdakilerden hangisidir?
Doğru Şık (C): Ameloblastoma
Açıklama: Dentijeröz kistlerin kistik astarından ameloblastoma (kistik ameloblastoma) gelişebileceği literatürde sıkça rapor edilmiştir. Küçük bir ameloblastomayı radyografik olarak basit bir dentijeröz kistten ayırt etmek imkansız olabilir; bu nedenle her dentijeröz kist örneği, malign transformasyonlar (örn. mukoepidermoid karsinom) ve ameloblastoma dışlanması için patolojiye gönderilmelidir.

**Soru 2 (ID: 8f3102e4-3837-4acb-90a2-bc2f0d1204ec)**
Soru Kökü: Ameloblastoma ile çok ciddi radyolojik ve mikroskopik benzerlik gösterebilen, cerrahi enükleasyon sonrası çok yüksek oranda agresif rekürrens sergilediği için hekimi rezeksiyon gibi daha majör tedavilere yönlendiren odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist, radyografide multiloküler görünümü, septasyonları ve yarattığı şiddetli kemik deformasyonu ile ameloblastomayı birebir taklit eder. Epitelyal proliferasyon gücünün yüksekliği nedeniyle standart küretaj sonrası hızla nüks eder. Bu patolojik tabiatı, onu cerrahi sınırları daha güvenli alınması gereken agresif (rezeksiyon/marjineksizyon) tedavi profiline sokar.

---

### ÇİFT 19 (Benzerlik: 0.74)

**Soru 1 (ID: 7afd1494-f48b-4428-b6a1-934231edb8e9)**
Soru Kökü: Sürmemiş bir dişin kronu etrafında perikoronal pozisyonda izlenen radyolüsent lezyonların radyolojik değerlendirmesinde, lezyonun dentijeröz kist yerine keratokistik odontojenik tümör (KOT) olabileceğini düşündüren tutunma paterni aşağıdakilerden hangisidir?
Doğru Şık (B): Mine-sement birleşiminin apikaline bağlanması
Açıklama: Perikoronal pozisyondaki bir KOT'u dentijeröz kistten ayıran en önemli radyografik işaretlerden biri, kistik dış sınırın mine-sement birleşiminin apikaline (kök yüzeyine) bağlanmasıdır. Dentijeröz kist ise patogenezi gereği foliküler kaynaklıdır ve tam olarak mine-sement birleşimine (CEJ) tutunur. Kortikal plakta belirgin ekspansiyonun olmaması da KOT lehine değerlendirilen ek bir bulgudur.

**Soru 2 (ID: b8fd0e55-e2ca-4e48-a90c-4af8eca7bd33)**
Soru Kökü: Odontojenik tümör ve kistlerin internal yapıları radyolüsensi/radyoopasite açısından farklılık gösterir. Maksiller kanin bölgesinde lokalize, perikoronal pozisyonda gelişen, sürmeyi engelleyen ve radyografik olarak içinde beyaz benekler veya çakıl taşına benzer kalsifiye odakları bulunduran lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Kalsifiye kistik odontojenik tümör
Açıklama: Kalsifiye kistik odontojenik tümör (CCOT), %50 oranında diş sürmesini engelleyerek perikoronal yerleşim gösterir (özellikle kanin bölgesi) ve internal yapısında karakteristik amorf kalsifiye beyaz benekler veya odakçıklar (radyoopasite) barındırır. Dentijeröz kist de perikoronal yerleşimlidir ancak kalsifikasyon içermez, KOT ve Ameloblastoma ise pür radyolüsent (sıklıkla multiloküler) boşluklardan oluşur. Kalsifikasyon varlığı CCOT için patognomonik bir ipucudur.

---

### ÇİFT 20 (Benzerlik: 0.74)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: 8f3102e4-3837-4acb-90a2-bc2f0d1204ec)**
Soru Kökü: Ameloblastoma ile çok ciddi radyolojik ve mikroskopik benzerlik gösterebilen, cerrahi enükleasyon sonrası çok yüksek oranda agresif rekürrens sergilediği için hekimi rezeksiyon gibi daha majör tedavilere yönlendiren odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist, radyografide multiloküler görünümü, septasyonları ve yarattığı şiddetli kemik deformasyonu ile ameloblastomayı birebir taklit eder. Epitelyal proliferasyon gücünün yüksekliği nedeniyle standart küretaj sonrası hızla nüks eder. Bu patolojik tabiatı, onu cerrahi sınırları daha güvenli alınması gereken agresif (rezeksiyon/marjineksizyon) tedavi profiline sokar.

---

### ÇİFT 21 (Benzerlik: 0.74)

**Soru 1 (ID: 18620d3d-b337-4961-84d5-0eea71621e26)**
Soru Kökü: Kırk beş yaşında erkek hasta travma öyküsü olan 21 numaralı diş bölgesinde şişlik şikayetiyle başvurmuştur. Diş kronu renkleşmiş olup vitalite testine negatif yanıt vermiştir. Panoramik grafide kök ucunda 2.5 cm çapında, yuvarlak şekilli, belirgin kortikal sınırlı bir radyolüsensi saptanmıştır. Köklerde hafif rezorpsiyon izlenmektedir. Bu vakadaki en olası tanı ve onu diğer benzer lezyonlardan ayıran spesifik radyografik bulgu eşleşmesi aşağıdakilerden hangisinde en doğru verilmiştir?
Doğru Şık (E): Radiküler kist - 2 cm'den büyük, iyi sınırlı yuvarlak kavite ve devital diş
Açıklama: Devital bir dişin apeksindeki radyolüsensi granülom veya kist olabilir. Ancak lezyonun yuvarlak şekli, çok belirgin kortikal sınırı ve 2 cm'den büyük boyutu radiküler kist için patognomoniktir. Granülomlar nadiren bu kadar büyük ve mükemmel kortikal sınırlı olurlar.

**Soru 2 (ID: 4c4ac888-e43d-45e9-9184-c4867bf604ef)**
Soru Kökü: Ouz otuz beş yaşında erkek hasta, üst çene ön bölgede hafif şişlik şikayetiyle başvurmuştur. Yapılan klinik muayenede 11 numaralı dişte geniş bir restorasyon izlenmiş olup diş canlılık testlerine negatif yanıt vermiştir. Alınan periapikal radyografide iyi kortikal sınırlı radyolüsent lezyon saptanmıştır. Bu hastadaki lezyonun kaynağı olarak en olası mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Büyük çürük veya travma yüzünden nekrotik pulpaya sahip devital diş varlığı
Açıklama: Radiküler kistler, büyük çürük, geniş restorasyon veya travma kaynaklı nekrotik pulpaya sahip devital dişlerden köken alırlar. Hastanın 11 numaralı dişinin canlılık testlerine negatif yanıt vermesi, kistin inflamatuar kökenli olduğunu gösterir. Gelişimsel epitel artıkları dentijeröz kist veya KOT etyolojisinde rol oynarken, radiküler kist tamamen pulpa nekrozu ile tetiklenir.

---

### ÇİFT 22 (Benzerlik: 0.73)

**Soru 1 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

**Soru 2 (ID: ecfc385f-86a1-4740-a3b9-f4a00882cfb3)**
Soru Kökü: Otuz altı yaşındaki kadın hastanın üst çene anterior bölgesinde, sürmemiş maksiller kanin dişiyle ilişkili ve dişi erüpsiyondan alıkoyan iyi sınırlı bir lezyon tespit edilmiştir. Lezyonun internal yapısında küçük düzgün çakıl taşları şeklinde belirgin radyoopak odaklar mevcuttur. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsifiye kistik odontojenik tümör (Gorlin Kisti)
Açıklama: Kalsifiye kistik odontojenik tümör, ortalama 30'lu yaşlarda görülen, özellikle insizör-kanin bölgesinde yerleşerek diş sürmesini engelleyen ve radyografik olarak internal beyaz benekler/çakıl taşları şeklinde distrofik kalsifikasyonlar sunan bir lezyondur. Glandüler kistte kalsifikasyon beklenmez; sementoblastoma ise vital dişin apeksine yapışık kök rezorpsiyonu ile karakterizedir.

---

### ÇİFT 23 (Benzerlik: 0.73)

**Soru 1 (ID: 347c2f7d-9e2f-4e85-8851-142ce2d6484f)**
Soru Kökü: Gömülü bir dişin çevresinde gelişen dentijeröz kistlerin morfolojik ve radyolojik bulguları değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Kistin anatomik sınırı daima diş kökünün orta veya apikal üçlüsüne tutunarak ilerler.
Açıklama: Dentijeröz kistin karakteristik tutunma noktası mine-sement birleşimidir (CEJ). Kistik astar, kronu çevreleyip CEJ'de sonlanır. Kök boyunca apikale inen kistik sınırlar dentijeröz kistten ziyade KOT (Keratokistik Odontojenik Tümör) gibi diğer agresif patolojileri veya periodontal ilişkili kistleri düşündürür.

**Soru 2 (ID: 61b58d30-a396-4d84-a766-5b4f97c5dff1)**
Soru Kökü: Çenelerde görülen en yaygın ikinci kist tipi olan dentijeröz kistlerin cerrahi radyografik değerlendirmesinde, kistik yapının dişe tutunma noktası ayırıcı tanıda kritik bir kriterdir. Dentijeröz kist radyografik olarak ilgili dişin hangi anatomik yapısına sınır oluşturarak tutunur?
Doğru Şık (B): Mine-sement birleşimi (CEJ)
Açıklama: Dentijeröz kistler sürmemiş dişin kuronu etrafında foliküler boşluğun genişlemesiyle oluşur ve epitel ataşmanı karakteristik olarak dişin mine-sement birleşimine (CEJ) tutunur. Keratokistik odontojenik tümörler (KOT) ise CEJ yerine daha apikalde kök üzerine tutunma eğilimindedir. Bu anatomik ataşman sınırı, perikoronal radyolüsensilerin ayırıcı tanısında altın standarttır.

---

### ÇİFT 24 (Benzerlik: 0.73)

**Soru 1 (ID: 18ca2b30-27ff-481f-ac57-deeeebb5c220)**
Soru Kökü: Hastaların klinik muayenesinde saptanan bazı iskeletsel anomaliler, çenelerde multipl kistik lezyonların habercisi olabilir. Palmar çukurlar, bifid kaburga anomalisi, falx cerebri kalsifikasyonu ve multipl KOT'lar (Keratokistik Odontojenik Tümör) üçlemesiyle karakterize genetik sendrom aşağıdakilerden hangisidir?
Doğru Şık (D): Bazal Hücreli Nevus (Gorlin) Sendromu
Açıklama: Bazal hücreli nevus sendromu (Gorlin Sendromu), multipl KOT'ların genç yaşta izlenmesi, falx cerebri'nin erken dönem kalsifikasyonu ve bifid (ayrık) kaburga iskelet deformiteleri ile tanımlanır. Cherubism'de bilateral dev hücreli lezyonlar varken kemik dışında bulgu azdır; Gorlin sendromunda ise cilt (bazal hücreli karsinomlar) ve iskelet bulguları çene kistleriyle beraber seyrederek multi-sistemik bir profil çizer.

**Soru 2 (ID: d9137d0f-aa1b-45b8-95e7-26a938650a4c)**
Soru Kökü: On dokuz yaşındaki erkek hasta çenelerinde ağrısız şişlik şikayetiyle başvurmuş olup, panoramik radyografisinde bilateral multiple KOT varlığı saptanmıştır. Ortodontik ve ortopedik konsültasyonlar neticesinde hastaya Bazal Hücreli Nevus Sendromu (Gorlin Sendromu) tanısı konmuştur. Bu hastanın iskelet sisteminde en olası ve sık saptanan patolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Bifid kaburga ve kostal deformiteler
Açıklama: Bazal hücreli nevus sendromunun iskeletsel anomalileri arasında en yaygın görüleni 'bifid kaburga' (kaburganın çatallanması) deformitesidir. Buna ek olarak agenezi, kifoskolyoz, vertebral füzyon ve metakarpallarda kısalma gibi diğer kemik bulguları da izlenebilir. Klavikula agenezisi Kleidotokraniyal Displazinin, pamuk atığı görüntüsü ise Paget hastalığının karakteristik bulgularıdır.

---

### ÇİFT 25 (Benzerlik: 0.73)

**Soru 1 (ID: b8fd0e55-e2ca-4e48-a90c-4af8eca7bd33)**
Soru Kökü: Odontojenik tümör ve kistlerin internal yapıları radyolüsensi/radyoopasite açısından farklılık gösterir. Maksiller kanin bölgesinde lokalize, perikoronal pozisyonda gelişen, sürmeyi engelleyen ve radyografik olarak içinde beyaz benekler veya çakıl taşına benzer kalsifiye odakları bulunduran lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Kalsifiye kistik odontojenik tümör
Açıklama: Kalsifiye kistik odontojenik tümör (CCOT), %50 oranında diş sürmesini engelleyerek perikoronal yerleşim gösterir (özellikle kanin bölgesi) ve internal yapısında karakteristik amorf kalsifiye beyaz benekler veya odakçıklar (radyoopasite) barındırır. Dentijeröz kist de perikoronal yerleşimlidir ancak kalsifikasyon içermez, KOT ve Ameloblastoma ise pür radyolüsent (sıklıkla multiloküler) boşluklardan oluşur. Kalsifikasyon varlığı CCOT için patognomonik bir ipucudur.

**Soru 2 (ID: ecfc385f-86a1-4740-a3b9-f4a00882cfb3)**
Soru Kökü: Otuz altı yaşındaki kadın hastanın üst çene anterior bölgesinde, sürmemiş maksiller kanin dişiyle ilişkili ve dişi erüpsiyondan alıkoyan iyi sınırlı bir lezyon tespit edilmiştir. Lezyonun internal yapısında küçük düzgün çakıl taşları şeklinde belirgin radyoopak odaklar mevcuttur. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsifiye kistik odontojenik tümör (Gorlin Kisti)
Açıklama: Kalsifiye kistik odontojenik tümör, ortalama 30'lu yaşlarda görülen, özellikle insizör-kanin bölgesinde yerleşerek diş sürmesini engelleyen ve radyografik olarak internal beyaz benekler/çakıl taşları şeklinde distrofik kalsifikasyonlar sunan bir lezyondur. Glandüler kistte kalsifikasyon beklenmez; sementoblastoma ise vital dişin apeksine yapışık kök rezorpsiyonu ile karakterizedir.

---

### ÇİFT 26 (Benzerlik: 0.73)

**Soru 1 (ID: 713625e1-3f30-471d-a03d-a49cb8c3fb9a)**
Soru Kökü: 22 yaşında hasta boynun ön bölgesinde, orta hatta yerleşmiş ağrısız bir kitle şikayeti ile kliniğe başvuruyor. Yapılan muayenede kitle yutkunma hareketi ile birlikte yukarı-aşağı yönde hareket ediyor. Baş-boyun bölgesinin bu en yaygın konjenital kistinin anatomik olarak en sık yerleştiği düzey neresidir?
Doğru Şık (A): İnfrahyoid bölge
Açıklama: Tiroglossal duktus kistleri konjenital boyun kistlerinin %70'ini oluşturur ve foramen çekumdan tiroid glandına uzanan embriyolojik traktus boyunca herhangi bir yerde oluşabilse de en yüksek oranda (%45) infrahyoid (hyoid altı) bölgede yerleşirler. Brankial kleft kistleri ise boynun lateralinde, SCM kasının komşuluğunda görülerek anatomik pozisyon açısından tiroglossal kistlerden ekarte edilirler.

**Soru 2 (ID: c6b8dedb-45f8-4cfb-878a-654e9388ae5f)**
Soru Kökü: On beş yaşındaki kız hasta, boynunun ön tarafında orta hatta yerleşen ağrısız bir yumru şikayetiyle hekime başvurmuştur. Fiziksel muayene sırasında hekim, hastadan yutkunmasını istemiş ve yutkunma esnasında kitlenin de belirgin şekilde yukarı-aşağı hareket ettiğini gözlemlemiştir. Bu hastadaki kitlenin en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Tiroglossal duktus kisti
Açıklama: Tiroglossal duktus kistini boyundaki diğer kitlelerden ayıran en spesifik klinik özellik, dil kökü (foramen caecum) ve tiroid trajesi ile olan fizyolojik ve anatomik bağlantısıdır. Bu bağ nedeniyle hasta yutkunduğunda veya dilini dışarı çıkardığında kist boyun kaslarıyla beraber dikey eksende hareket eder. Dermoid veya brankial kistler bu spesifik dinamik yutkunma hareketini göstermez.

---

### ÇİFT 27 (Benzerlik: 0.73)

**Soru 1 (ID: 0b80f889-6df8-4c41-8134-36f7d0d36f5a)**
Soru Kökü: Ağız mukozasından drene olan ve hastanın 'ağzıma tuzlu su akıyor' şeklinde tarif ettiği bir sıvı sızıntısı anamnezi, aşağıdaki kistlerden hangisinin tanısında güçlü bir klinik ipucudur?
Doğru Şık (B): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kisti sert damakta, nazopalatin duktus kalıntılarından gelişir. Bu bölgedeki basınç arttığında veya bir miktar dekompresyon gerçekleştiğinde kistik kavitasyon oral kaviteye ince bir sinüs yolu açarak drene olabilir. Kistik içeriğin boşalması hasta tarafından tipik olarak 'tuzlu bir tat' şeklinde tanımlanır.

**Soru 2 (ID: f4f02f15-26db-4582-a7db-25f421924a92)**
Soru Kökü: Otuz beş yaşındaki erkek hasta, ara sıra ağzında tuzlu bir tat hissettiğini ve sert damağının ön kısmından bir akıntı geldiğini fark ederek başvurmuştur. Alınan periapikal radyografide; maksiller iki santral dişin apikalinde, nazal spina gölgesiyle süperpoze olmuş kalp formunda net sınırlı bir radyolüsensi saptanmıştır. İnflamatuar kaynak ekarte edildiğine göre, hastanın tuzlu tat almasına neden olan kistik yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kistinin intraoral sinüs yolu vasıtasıyla veya direkt nazopalatin kanal açıklığı boyunca drene olması, hastaların klinikte spontan sıvı gelişi ve 'tuzlu tat' tarif etmesine sebep olur. Kalp şeklindeki radyolojik görünüm, maksiller anterior (kesici) apikali orta hattı ile nazal anterior spinanın gölgelerinin birleşmesinden ortaya çıkan bu kistin diagnostik çapa bulgusudur.

---

### ÇİFT 28 (Benzerlik: 0.72)

**Soru 1 (ID: 9c0ae07e-d042-46a6-8da4-35445c1a3b46)**
Soru Kökü: Boyut olarak oldukça küçük olan ve rekürrens eğilimi göstermedikleri bilinen lateral periodontal kistlerin saptandıkları durumda güncel olarak tercih edilen en uygun tedavi yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Eksizyonel biyopsi veya basit enükleasyon
Açıklama: Lateral periodontal kistler rekürrens yapma potansiyeline sahip olmadıkları ve yavaş büyüme profili sergiledikleri için eksizyonel biyopsi veya basit enükleasyon, kesin tedavidir. Kist küçüktür ve ilgili dişler vital olduğu için kök kanal tedavisi veya apikal cerrahi kontrendikedir (yanlış dişe devitalizasyon işlemi yapılmamalıdır).

**Soru 2 (ID: a65a6e01-fed5-4ede-9274-72f53086cbac)**
Soru Kökü: Kırk beş yaşında kadın hasta alt çenede hafif şişlik şikayetiyle başvurmuştur. Alınan anamnezde lezyon bölgesindeki dişin yıllar önce çekildiği öğrenilmiştir. Panoramik radyografide, merkezi mandibular kanalın üzerinde yer alan, iyi kortikal sınırlı, oval şekilli ve dış kortikal plakta ekspansiyon yapmış bir radyolüsensi saptanmıştır. Rezidüel kist ön tanısı alan bu lezyon için endike olan birincil tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Cerrahi olarak çıkarılma ya da kist çok büyükse marsüpyalizasyon
Açıklama: Rezidüel kistlerin tedavisi cerrahi çıkarılma (enükleasyon) ya da kist aşırı büyükse her iki yöntemin (marsüpyalizasyon ve takiben enükleasyon) kombine uygulanmasıdır. Dişsiz bölgede yer almaları agresif rezeksiyon gerektirmez, ayrıca komşu vital dişlerin profilaktik kanal tedavisine de ihtiyaç yoktur.

---

### ÇİFT 29 (Benzerlik: 0.72)

**Soru 1 (ID: 764e1ec7-edb5-4b56-90f4-674f4d276351)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, maksillada giderek büyüyen ve hafif fasiyal asimetriye neden olan ağrısız şişlik şikayetiyle başvurmaktadır. Alınan radyografik kesitlerde, maksiller antruma invajine olarak tüm sinüs boşluğunu dolduran multiloküler, ekspansif görünümlü bir radyolüsensi saptanmıştır. Minimal kemik ekspansiyonu yaparak tünel formunda büyüyen bu kistin en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Keratokistik odontojenik tümör
Açıklama: Keratokistik odontojenik tümör (KOT), çenelerin internal yönü boyunca tünel şeklinde büyüme eğilimindedir ve maksillada yerleştiğinde maksiller antruma invajine olarak bütün maksiller sinüsü doldurabilme kapasitesine sahiptir. Dentijeröz kistler perikoronal alanda izole kalıp daha uniform ekspansiyon yaparken, KOT sinüs boşluğu gibi anatomik boşluklara güçlü penetrasyon gösterir. BT kesitlerinde sinüsü dolduran multiloküler radyolüsensi, KOT için yüksek prediktif değere sahip bir bulgudur.

**Soru 2 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

---

### ÇİFT 30 (Benzerlik: 0.72)

**Soru 1 (ID: 61b58d30-a396-4d84-a766-5b4f97c5dff1)**
Soru Kökü: Çenelerde görülen en yaygın ikinci kist tipi olan dentijeröz kistlerin cerrahi radyografik değerlendirmesinde, kistik yapının dişe tutunma noktası ayırıcı tanıda kritik bir kriterdir. Dentijeröz kist radyografik olarak ilgili dişin hangi anatomik yapısına sınır oluşturarak tutunur?
Doğru Şık (B): Mine-sement birleşimi (CEJ)
Açıklama: Dentijeröz kistler sürmemiş dişin kuronu etrafında foliküler boşluğun genişlemesiyle oluşur ve epitel ataşmanı karakteristik olarak dişin mine-sement birleşimine (CEJ) tutunur. Keratokistik odontojenik tümörler (KOT) ise CEJ yerine daha apikalde kök üzerine tutunma eğilimindedir. Bu anatomik ataşman sınırı, perikoronal radyolüsensilerin ayırıcı tanısında altın standarttır.

**Soru 2 (ID: 7afd1494-f48b-4428-b6a1-934231edb8e9)**
Soru Kökü: Sürmemiş bir dişin kronu etrafında perikoronal pozisyonda izlenen radyolüsent lezyonların radyolojik değerlendirmesinde, lezyonun dentijeröz kist yerine keratokistik odontojenik tümör (KOT) olabileceğini düşündüren tutunma paterni aşağıdakilerden hangisidir?
Doğru Şık (B): Mine-sement birleşiminin apikaline bağlanması
Açıklama: Perikoronal pozisyondaki bir KOT'u dentijeröz kistten ayıran en önemli radyografik işaretlerden biri, kistik dış sınırın mine-sement birleşiminin apikaline (kök yüzeyine) bağlanmasıdır. Dentijeröz kist ise patogenezi gereği foliküler kaynaklıdır ve tam olarak mine-sement birleşimine (CEJ) tutunur. Kortikal plakta belirgin ekspansiyonun olmaması da KOT lehine değerlendirilen ek bir bulgudur.

---

### ÇİFT 31 (Benzerlik: 0.72)

**Soru 1 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

**Soru 2 (ID: f875ebc9-2d93-41d3-9264-6b5f4fdae1f8)**
Soru Kökü: 45 yaşında kadın hasta, alt sağ posterior bölgede hafif bir ekspansiyon şikayetiyle kliniğe başvuruyor. Alınan anamnezde bu bölgeden aylar önce kronik enfekte bir dişin çekildiği öğreniliyor. Radyografide iyi sınırlı, oval şekilli kemik içi bir kavitasyon saptanıyor. Bu lezyonun mandibuladaki merkezi inferior alveoler sinir kanalı ile ilişkisi nasıldır?
Doğru Şık (D): Merkezi her zaman kanalın üzerindedir
Açıklama: Rezidüel kistler diş çekimi sonrası alveolde kalan epitel artıklarından (genellikle radiküler kist kalıntısı) kaynaklandığı için odontojenik kökenlidir ve bu nedenle merkezleri daima inferior alveoler sinir kanalının koronalinde (üzerinde) yer alır. Stafne defekti gibi gelişimsel glandüler doku kaynaklı kemik depresyonları ise kanalın altında kalarak rezidüel kistlerden ayrılır. Kanal ilişkisi patolojinin dokusal kökenini belirleyen en temel topografik ipucudur.

---

### ÇİFT 32 (Benzerlik: 0.72)

**Soru 1 (ID: 8f3102e4-3837-4acb-90a2-bc2f0d1204ec)**
Soru Kökü: Ameloblastoma ile çok ciddi radyolojik ve mikroskopik benzerlik gösterebilen, cerrahi enükleasyon sonrası çok yüksek oranda agresif rekürrens sergilediği için hekimi rezeksiyon gibi daha majör tedavilere yönlendiren odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist, radyografide multiloküler görünümü, septasyonları ve yarattığı şiddetli kemik deformasyonu ile ameloblastomayı birebir taklit eder. Epitelyal proliferasyon gücünün yüksekliği nedeniyle standart küretaj sonrası hızla nüks eder. Bu patolojik tabiatı, onu cerrahi sınırları daha güvenli alınması gereken agresif (rezeksiyon/marjineksizyon) tedavi profiline sokar.

**Soru 2 (ID: f38be487-9378-4504-8a0f-dc77fc9c097f)**
Soru Kökü: Aşağıdaki çene kistlerinden hangisi karakteristik olarak anterior mandibulayı veya globulomaksiller bölgeyi tutan, histolojik olarak mukus üreten hücreler içerdiği için radyolojik ayırıcı tanısında santral mukoepidermoid karsinomun mutlaka bulundurulması gereken agresif karakterli kisttir?
Doğru Şık (C): Glandüler odontojenik kist
Açıklama: Glandüler odontojenik kist, siliyer hücreler ve mukus göllenmeleri içeren spesifik histolojisiyle santral mukoepidermoid karsinoma benzerlik gösteren, agresif seyirli ve nüks oranı yüksek bir gelişimsel kisttir. Radyografik olarak sıklıkla multiloküler görünümdedir ve dişlerde yer değiştirmeye sebep olur; enükleasyon tek başına yetersiz kalabilir ve rezeksiyon gerektirebilir.

---

### ÇİFT 33 (Benzerlik: 0.72)

**Soru 1 (ID: 0cd24602-c0de-413d-9da6-45e53ae9e316)**
Soru Kökü: Çenelerde kist ve tümör benzeri oluşumların klinik ve radyografik özellikleriyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Basit kemik kistinin en ayırıcı radyografik özelliği belirgin bir kortikal ekspansiyona neden olmasıdır.
Açıklama: Basit kemik kistleri, kemik içinde fibröz dokunun boşluk bırakmasıyla karakterize kist benzeri kavitelerdir ve KOT'lar gibi kemiğin uzun ekseninde yayıldıkları için genellikle ekspansiyon yapmazlar. Aksine, dentijeröz kistler veya cherubism gibi durumlar belirgin ekspansiyona neden olur. SBC'lerin minimal klinik belirti vermesi ve korteksi dışarı itmemesi temel tanı kriterlerinden biridir.

**Soru 2 (ID: 5f66eb00-4750-4ba2-8432-14fb980b6a52)**
Soru Kökü: Basit kemik kisti (SBC) ve patolojik özellikleri hakkında aşağıda verilen bilgilerden hangisi **yanlıştır**?
Doğru Şık (A): Lamina dura devamlılığının olmaması ve invaziv kemik dekstrüksiyonu karakteristik özellikleridir.
Açıklama: Basit kemik kistleri benign (iyi huylu) özellik gösteren boşluklardır; diş köklerindeki lamina durayı bozmazlar veya kemiği osteolitik malign tümörler gibi invaziv şekilde dekstrükte etmezler. Aksine, lamina duranın sağlam kalması ve çevresel kemik infiltrasyonunun yokluğu SBC'yi radyolojik olarak malignitelerden ekarte eden en temel güvencedir. Diğer tüm şıklarda belirtilenler SBC'nin karakteristik klinik paternidir.

---

### ÇİFT 34 (Benzerlik: 0.72)

**Soru 1 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

**Soru 2 (ID: eb70b5c5-f04e-4221-9f6d-f8000c6f86e3)**
Soru Kökü: Gelişimsel süreçlerde mandibular kanal (inferior alveoler sinir) komşuluğu anatomik sınıflama için bir bariyerdir. Aşağıdaki lezyonlardan hangisi mandibulada radyografik olarak saptandığında, lezyonun merkezi inferior alveoler sinir kanalının **altında** kalır?
Doğru Şık (D): Stafne (Lingual tükrük bezi) depresyonu
Açıklama: Stafne depresyonu gelişim sırasında submandibular veya sublingual tükrük bezi dokusunun mandibular korteks üzerinde oluşturduğu fizyolojik bir baskı çukurudur ve klasik lokalizasyonu angulusun hemen önü ile inferior alveoler kanalın ALTI'dır. Odontojenik kistler (radiküler, rezidüel, KOT) kökenlerini diş embriyolojisinden aldıkları için mandibulada daima alveolar krette, yani inferior alveoler kanalın ÜSTÜNDE yerleşmek zorundadırlar.

---

### ÇİFT 35 (Benzerlik: 0.72)

**Soru 1 (ID: 5eeb9708-56c3-4bb1-8036-9aa8d5669069)**
Soru Kökü: Rutin radyografik kontrolde 17 yaşındaki erkek hastanın posterior mandibulasında, vital dişlerin kökleri arasına doğru girinti (taraklanma/scalloping) yaparak uzanan radyolüsent lezyon saptanıyor. Kortikal genişleme minimaldir. Lezyona cerrahi olarak girildiğinde epitelle döşeli bir kese değil, içi boş veya sadece az miktarda seröz sıvı içeren bir kavite ile karşılaşılıyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Basit kemik kisti
Açıklama: Basit kemik kistleri (SBC) epitel ile kaplı gerçek bir kist değildir; kemik içinde travma veya infarkt sonrası kalan boş kavitelerdir (pseudokist). Radyografide kökler arası taraklanma (scalloping) en tipik özelliğidir. Biyopside epitel veya doku kitlesi olmaması, tamamen boş kavite görülmesi ve sadece kanatma yoluyla iyileşmenin sağlanması bu patolojiye özgü klinik-cerrahi karakteristiklerdir.

**Soru 2 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

---

### ÇİFT 36 (Benzerlik: 0.72)

**Soru 1 (ID: 6b406063-6470-4d3b-9d34-33fe26ff470a)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın rutin ortodontik değerlendirme için alınan radyografisinde mandibulada bilateral olarak yerleşmiş, multiple basit kemik kistleri tespit edilmiştir. İlgili bölgedeki dişlerin tamamı vital ve lezyonlar klinik olarak asemptomatiktir. Hastada soliter yerine multiple basit kemik kisti formasyonuna zemin hazırladığı bilinen patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoosseöz displazi
Açıklama: Basit kemik kistleri tipik olarak soliter (tekil) gelişme eğiliminde olmalarına rağmen, özellikle sementoosseöz displazi ile birlikte görüldüklerinde multiple (çoklu) karakterde ortaya çıkabilirler. Nevoid bazal hücreli karsinom sendromu multiple Keratokistik Odontojenik Tümör (KOT) ile ilişkili iken, basit kemik kistleri bu sendromun bir parçası değildir. Sementoosseöz displazi dokusunun yarattığı lokal kemik hemodinamik değişimlerin veya bağ dokusu stroma reaksiyonunun bu çoklu psödokist boşluklarının oluşumunu tetiklediği düşünülmektedir.

**Soru 2 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

---

### ÇİFT 37 (Benzerlik: 0.72)

**Soru 1 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

**Soru 2 (ID: e5d4c2e2-22a2-44ba-80eb-4bd9a06cde74)**
Soru Kökü: Posterior mandibula inferior sınırında radyolüsent lezyonu bulunan ve lingual tükrük bezi depresyonu ön tanısı alan bir hastada, ileri tetkik amacıyla çok kesitli bilgisayarlı tomografi (BT) alınmıştır. Biyopsiye gerek kalmadan ön tanıyı doğrulayan radyolojik internal bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Defekt alanı içerisinde izlenen belirgin yağ yoğunluğu dokusu
Açıklama: Lingual tükrük bezi depresyonu (Stafne defekti) gerçek bir kist veya tümör olmayıp mandibular kemiğin lingual yüzündeki glandüler dokuya (çoğunlukla submandibular bez) bağlı konjenital veya gelişimsel bir girintidir. Çok kesitli BT kesitlerinde bu defekt alanının içinin yağ dokusu yoğunluğu taşıdığı ve bitişik tükrük bezi ile süreklilik arz ettiği net bir şekilde izlenir. Odontojenik lezyonların aksine kalsifikasyon, kolesterol veya multiloküler bağ dokusu barındırmadığından yağ dansitesinin görülmesi patognomoniktir.

---

### ÇİFT 38 (Benzerlik: 0.72)

**Soru 1 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

**Soru 2 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

---

### ÇİFT 39 (Benzerlik: 0.72)

**Soru 1 (ID: 04737103-4ba8-4314-974a-8a021c2f7b89)**
Soru Kökü: Aşağıdaki kist veya kist benzeri durumlardan hangisinin tedavisinde ilgili dişi çekmek veya rutin cerrahi enükleasyon yapmak yerine, öncelikle hastayı radyografik takip altında tutmak veya konservatif boşluk küretajı ile kanatmak doğru bir yaklaşımdır?
Doğru Şık (B): Basit kemik kisti
Açıklama: Basit kemik kistinin (SBC) tedavisinde kistik duvar epiteli bulunmadığından rezeksiyon veya enükleasyon yapılamaz; tedavi tekniği kemik korteksinde ufak bir pencere açarak kist kavitesini kanatmaktır (hemorajik organizasyonla kemik iyileşmesi indüklenir). Diğer kist tipleri epitelyal karakterli oldukları için tamamen kürete edilmeleri veya eksize edilmeleri şarttır.

**Soru 2 (ID: a65a6e01-fed5-4ede-9274-72f53086cbac)**
Soru Kökü: Kırk beş yaşında kadın hasta alt çenede hafif şişlik şikayetiyle başvurmuştur. Alınan anamnezde lezyon bölgesindeki dişin yıllar önce çekildiği öğrenilmiştir. Panoramik radyografide, merkezi mandibular kanalın üzerinde yer alan, iyi kortikal sınırlı, oval şekilli ve dış kortikal plakta ekspansiyon yapmış bir radyolüsensi saptanmıştır. Rezidüel kist ön tanısı alan bu lezyon için endike olan birincil tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Cerrahi olarak çıkarılma ya da kist çok büyükse marsüpyalizasyon
Açıklama: Rezidüel kistlerin tedavisi cerrahi çıkarılma (enükleasyon) ya da kist aşırı büyükse her iki yöntemin (marsüpyalizasyon ve takiben enükleasyon) kombine uygulanmasıdır. Dişsiz bölgede yer almaları agresif rezeksiyon gerektirmez, ayrıca komşu vital dişlerin profilaktik kanal tedavisine de ihtiyaç yoktur.

---

### ÇİFT 40 (Benzerlik: 0.72)

**Soru 1 (ID: adc8cab7-4676-48fe-8565-4c873dc1178b)**
Soru Kökü: Gerçek bir kemik kisti olmamasına (yumuşak doku kaynaklı olmasına) karşın, genişlemiş nazolabial kistlerin radyolojik incelemesinde anatomik komşuluklarından ötürü kemik yapıda izlenen en tipik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Alttaki maksiller kemikte erozyon ve nazal fossa inferior sınırında distorsiyon
Açıklama: Nazolabial kistler santral (kemik içi) bir patoloji değildir, nazolabial yumuşak dokudan doğarlar. Ancak kist büyüdükçe yarattığı sürekli mekanik basınç rezorpsiyonuna bağlı olarak altta yatan kemikte (piriform açıklıkta) çukur şeklinde bir erozyon ve nazal fossanın inferior sınırında distorsiyon yaratabilirler. Diş köklerinde masif rezorpsiyon veya hiperostozis beklenmez.

**Soru 2 (ID: d7affd2c-d70c-4c46-83c4-1a141eec6863)**
Soru Kökü: Nonodontojenik kistlerin anatomik konumları tanıda anahtar rol oynar. Aşağıdaki kistlerden hangisi yumuşak doku kökenli olup intraosseöz (kemik içi) bir destrüksiyon yaratmaz, ancak büyüdüğünde nazal kavitenin tabanını iterken burun deliklerinde asimetriye neden olur?
Doğru Şık (E): Nazolabial kist
Açıklama: Nazolabial kist, maxiller kesicilerin apikali hizasında, alveoler prosesin komşuluğundaki yumuşak dokuda nazolabial fold içine yerleşir ve kemik içi bir lezyon değildir; burun tabanını eleve ederek estetik bozulmaya (burun kanadı yayılması) yol açar. Nazopalatin kanal kisti insisiv kanalda (kemik içi) yer alırken, dermoid kist genellikle ağız tabanı yumuşak dokularına yerleşir. Görüntülemelerde kemikte sadece basınç erozyonu yapması (invazyon değil) nazolabial kisti intraosseöz kistlerden kesin çizgilerle ayırır.

---

### ÇİFT 41 (Benzerlik: 0.72)

**Soru 1 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

**Soru 2 (ID: ecfc385f-86a1-4740-a3b9-f4a00882cfb3)**
Soru Kökü: Otuz altı yaşındaki kadın hastanın üst çene anterior bölgesinde, sürmemiş maksiller kanin dişiyle ilişkili ve dişi erüpsiyondan alıkoyan iyi sınırlı bir lezyon tespit edilmiştir. Lezyonun internal yapısında küçük düzgün çakıl taşları şeklinde belirgin radyoopak odaklar mevcuttur. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsifiye kistik odontojenik tümör (Gorlin Kisti)
Açıklama: Kalsifiye kistik odontojenik tümör, ortalama 30'lu yaşlarda görülen, özellikle insizör-kanin bölgesinde yerleşerek diş sürmesini engelleyen ve radyografik olarak internal beyaz benekler/çakıl taşları şeklinde distrofik kalsifikasyonlar sunan bir lezyondur. Glandüler kistte kalsifikasyon beklenmez; sementoblastoma ise vital dişin apeksine yapışık kök rezorpsiyonu ile karakterizedir.

---

### ÇİFT 42 (Benzerlik: 0.71)

**Soru 1 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

**Soru 2 (ID: f875ebc9-2d93-41d3-9264-6b5f4fdae1f8)**
Soru Kökü: 45 yaşında kadın hasta, alt sağ posterior bölgede hafif bir ekspansiyon şikayetiyle kliniğe başvuruyor. Alınan anamnezde bu bölgeden aylar önce kronik enfekte bir dişin çekildiği öğreniliyor. Radyografide iyi sınırlı, oval şekilli kemik içi bir kavitasyon saptanıyor. Bu lezyonun mandibuladaki merkezi inferior alveoler sinir kanalı ile ilişkisi nasıldır?
Doğru Şık (D): Merkezi her zaman kanalın üzerindedir
Açıklama: Rezidüel kistler diş çekimi sonrası alveolde kalan epitel artıklarından (genellikle radiküler kist kalıntısı) kaynaklandığı için odontojenik kökenlidir ve bu nedenle merkezleri daima inferior alveoler sinir kanalının koronalinde (üzerinde) yer alır. Stafne defekti gibi gelişimsel glandüler doku kaynaklı kemik depresyonları ise kanalın altında kalarak rezidüel kistlerden ayrılır. Kanal ilişkisi patolojinin dokusal kökenini belirleyen en temel topografik ipucudur.

---

### ÇİFT 43 (Benzerlik: 0.71)

**Soru 1 (ID: 9c0ae07e-d042-46a6-8da4-35445c1a3b46)**
Soru Kökü: Boyut olarak oldukça küçük olan ve rekürrens eğilimi göstermedikleri bilinen lateral periodontal kistlerin saptandıkları durumda güncel olarak tercih edilen en uygun tedavi yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Eksizyonel biyopsi veya basit enükleasyon
Açıklama: Lateral periodontal kistler rekürrens yapma potansiyeline sahip olmadıkları ve yavaş büyüme profili sergiledikleri için eksizyonel biyopsi veya basit enükleasyon, kesin tedavidir. Kist küçüktür ve ilgili dişler vital olduğu için kök kanal tedavisi veya apikal cerrahi kontrendikedir (yanlış dişe devitalizasyon işlemi yapılmamalıdır).

**Soru 2 (ID: cf17d940-1c89-41cc-9c31-8564c1bfb849)**
Soru Kökü: Odontojenik kistlerin tedavileri lezyonun tipine göre değişiklik gösterir. Bukkal bifurkasyon kisti (BBC) tanısı almış bir vakada endike olan tedavi yöntemi aşağıdakilerden hangisidir?
Doğru Şık (A): İlgili dişi koruyarak konservatif küretaj yapılması
Açıklama: Bukkal bifurkasyon kistleri rekürrens göstermeyen kistlerdir ve standart tedavileri ilgili molar diş ağızda bırakılarak (çekilmeden) lezyonun konservatif küretajla alınmasıdır. Diş vitaldir ve kemik desteğini kaybedecek bir aşamada değilse çekimi medikal bir hatadır. BBC'ler dentijeröz kistlerin aksine, ilgili dişi koruma prensibiyle tedavi edilirler.

---

### ÇİFT 44 (Benzerlik: 0.71)

**Soru 1 (ID: 52857c6f-ff14-4945-b2a4-095bac279b65)**
Soru Kökü: Keratokistik odontojenik tümörün (KOT) biyolojik davranışı diğer çoğu çene kistinden farklıdır. KOT'un mandibuladaki gelişim ve büyüme mekanizması radyografik olarak en iyi nasıl tanımlanır?
Doğru Şık (B): Çenelerin internal yönü (kemiğin uzun ekseni) boyunca minimal ekspansiyonla tünel şeklinde büyüme
Açıklama: Keratokistik odontojenik tümörlerin (KOT) en tipik büyüme paterni; medüller boşluk içinde, kemiğin uzun ekseni boyunca yayılarak tünel şeklinde ilerlemesidir, bu yüzden devasa boyutlara ulaşsa bile kortikal ekspansiyon minimal düzeyde kalır. Ameloblastomalar ve dentijeröz kistler ise izotropik (her yöne eşit) büyüme eğiliminde oldukları için kemikte daha erken ve daha belirgin dışa doğru ekspansiyon yaratırlar. Bu anteroposterior büyüme davranışı KOT'un ayırıcı tanısında kilit rol oynar.

**Soru 2 (ID: 9d09bc1f-6b34-42ba-831f-3a02620771ad)**
Soru Kökü: Diş çekim boşluğunda gelişen ve radyografik olarak oval şekilli, kortikal sınırlı bir lezyon olarak izlenen rezidüel kistin kemik ekspansiyon karakteristiği, ayırıcı tanısında yer alan odontojenik keratokist (KOT) ile karşılaştırıldığında nasıldır?
Doğru Şık (B): Rezidüel kist KOT'a oranla daha fazla ekspansiyon yapma potansiyeline sahiptir.
Açıklama: Rezidüel kistler, çenelerin dış kortikal plağında belirgin ekspansiyona sebep olabilir ve bu özellikleri odontojenik keratokiste (KOT) göre daha fazla ekspansiyon yapma potansiyeline sahip olduklarını gösterir. KOT ise karakteristik olarak kortikal ekspansiyona neden olmaktan ziyade çenelerin internal yönü boyunca tünel şeklinde büyüme eğilimindedir.

---

### ÇİFT 45 (Benzerlik: 0.71)

**Soru 1 (ID: 11dc2aa0-7747-4de2-8dd8-9fb8ef297b27)**
Soru Kökü: 34 yaşındaki kadın hasta, üst dudağın sağ tarafında ve burun kanadında yukarı doğru şişlik şikayetiyle başvuruyor. Yüz simetrisinin bozulduğu, burun deliğinin genişlediği ancak ağız içi dişlerin tamamen sağlıklı ve vital olduğu saptanıyor. Klinisyen hastayı değerlendirirken bu kistin sekonder olarak enfekte olması durumunda en fazla hangi akut tablo ile karışabileceğini düşünmelidir?
Doğru Şık (A): Akut dentoalveoler apse
Açıklama: Nazolabial kistler maksiller vestibülde (kanin-lateral bölgesinin üzerinde) şişlik yarattığından, eğer mikrobiyal olarak enfekte olurlarsa mukozada apse benzeri flüktüasyon ve şiddetli inflamasyon gösterirler. Bu dışsal (ekstraoral ve vestibüler) tablo, santral/lateral kesici veya kanin dişlerinden kaynaklanan akut bir dentoalveoler (periapikal) apsenin kliniği ile birebir örtüşür ve vitalite testleri yapılmadan yanlış dişe endodonti uygulanmasına yol açabilir.

**Soru 2 (ID: 9b1f02bd-f09d-4039-84a9-825601fec932)**
Soru Kökü: Klinikte burun kanadında yayılma, burun deliklerinde distorsiyon ve üst dudakta dolgunluk yaratan, ortalama 44 yaşlarında kadınlarda daha sık görülen nazolabial kistlerin lokalize olduğu spesifik anatomik bölge neresidir?
Doğru Şık (A): Kesicilerin apikalleri üzerinde alveoler proçese komşu yumuşak doku (nazolabial fold)
Açıklama: Nazolabial kist yumuşak doku kaynaklı, epitelyal bir gelişimsel kisttir ve doğrudan maksiller kesicilerin apikalleri üzerinde, nazolabial fold (sulcus) içinde alveoler proçese komşu yumuşak dokuda gelişir. Bu stratejik lokasyon kistin nazal kavite tabanını yukarı itmesine, burun deliklerinde asimetriye ve dışarıdan bariz dudak dolgunluğuna yol açmasına neden olur.

---

### ÇİFT 46 (Benzerlik: 0.71)

**Soru 1 (ID: e5d4c2e2-22a2-44ba-80eb-4bd9a06cde74)**
Soru Kökü: Posterior mandibula inferior sınırında radyolüsent lezyonu bulunan ve lingual tükrük bezi depresyonu ön tanısı alan bir hastada, ileri tetkik amacıyla çok kesitli bilgisayarlı tomografi (BT) alınmıştır. Biyopsiye gerek kalmadan ön tanıyı doğrulayan radyolojik internal bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Defekt alanı içerisinde izlenen belirgin yağ yoğunluğu dokusu
Açıklama: Lingual tükrük bezi depresyonu (Stafne defekti) gerçek bir kist veya tümör olmayıp mandibular kemiğin lingual yüzündeki glandüler dokuya (çoğunlukla submandibular bez) bağlı konjenital veya gelişimsel bir girintidir. Çok kesitli BT kesitlerinde bu defekt alanının içinin yağ dokusu yoğunluğu taşıdığı ve bitişik tükrük bezi ile süreklilik arz ettiği net bir şekilde izlenir. Odontojenik lezyonların aksine kalsifikasyon, kolesterol veya multiloküler bağ dokusu barındırmadığından yağ dansitesinin görülmesi patognomoniktir.

**Soru 2 (ID: fd1844d8-a7c9-446e-98d2-812bc063294c)**
Soru Kökü: Altmış yaşındaki kadın hastanın panoramik radyografisinde, sol inferior alveolar sinir kanalının altında ve mandibula açısının hemen önünde, sınırları belirgin, yuvarlak bir radyolüsensi saptanmıştır. BT incelemesinde bu defektin içinin yağ dansitesine sahip doku ile dolu olduğu ve lingual kortekste incelme yarattığı görülmüştür. Bu lezyon için uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (E): Hiçbir cerrahi müdahaleye gerek yoktur, takibi yeterlidir
Açıklama: Tarif edilen lezyon Stafne idiyopatik kemik kavitesidir (lingual tükrük bezi depresyonu). Submandibuler bezin veya yağ dokusunun mandibula lingual korteksinde oluşturduğu gelişimsel bir depresyondur. BT'de yağ/glandüler doku dansitesi izlenmesi teşhisi kesinleştirir ve bu fizyolojik bir varyasyon olduğu için patolojik bir süreç işlemez; dolayısıyla cerrahi veya medikal bir tedavi gerekmez.

---

### ÇİFT 47 (Benzerlik: 0.71)

**Soru 1 (ID: 1972cd30-554d-4fff-8258-c485cf8e41a7)**
Soru Kökü: Odontojenik enfeksiyon kaynaklı olmayan, 50 yaşlarında dişsiz mandibulaya sahip bir kadının posterior mandibular bölgesinde, sınırları belirsiz veya zayıf kalsifikasyonlar içeren litik radyolüsent alan saptanmıştır. Çevreleyen kemikte inflamatuar reaksiyon yoktur. Histolojik incelemesinde normal ilik dokusu saptanan bu lezyonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Fokal osteoporotik kemik iliği
Açıklama: Fokal osteoporotik kemik iliği defekti, özellikle orta yaşlı dişsiz kadınların alt çene arka bölgesinde görülen, enfeksiyöz (osteomyelit) veya neoplastik bir tabiatı olmayan, sadece ilik adacıklarının kemikte litik/radyolüsent bir alan gibi görüldüğü varyasyondur. Kesin tanısı radyografiyle her zaman anlaşılamayıp biyopside normal kemik iliği çıkması ile konur; tedavi gerektirmeyen self-limiting (kendi kendini sınırlayan) bir durumdur.

**Soru 2 (ID: ecfc385f-86a1-4740-a3b9-f4a00882cfb3)**
Soru Kökü: Otuz altı yaşındaki kadın hastanın üst çene anterior bölgesinde, sürmemiş maksiller kanin dişiyle ilişkili ve dişi erüpsiyondan alıkoyan iyi sınırlı bir lezyon tespit edilmiştir. Lezyonun internal yapısında küçük düzgün çakıl taşları şeklinde belirgin radyoopak odaklar mevcuttur. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsifiye kistik odontojenik tümör (Gorlin Kisti)
Açıklama: Kalsifiye kistik odontojenik tümör, ortalama 30'lu yaşlarda görülen, özellikle insizör-kanin bölgesinde yerleşerek diş sürmesini engelleyen ve radyografik olarak internal beyaz benekler/çakıl taşları şeklinde distrofik kalsifikasyonlar sunan bir lezyondur. Glandüler kistte kalsifikasyon beklenmez; sementoblastoma ise vital dişin apeksine yapışık kök rezorpsiyonu ile karakterizedir.

---

### ÇİFT 48 (Benzerlik: 0.71)

**Soru 1 (ID: 282570fb-cdb2-4a8f-aca1-872d9ca8b03d)**
Soru Kökü: Keratokistik odontojenik tümörlerin (KOT) klinik davranışı ve tedavi sonrası seyri hakkında verilen bilgilerden hangisi **yanlıştır**?
Doğru Şık (D): Diğer çene kistlerine kıyasla çok düşük bir rekürrens oranına sahiptirler.
Açıklama: KOT, kistlere zıt olarak ince, fragmente olmaya meyilli duvar yapısı ve uydu (satellit) mikro kistler içerebilmesi nedeniyle yüksek rekürrens eğilimine sahiptir. 'Düşük rekürrens' ifadesi yanlıştır, aksine lokal agresif büyümesi ve nüks ihtimali onu diğer sıradan odontojenik kistlerden ayırarak WHO sınıflamasında tümör niteliği ile anılmasına dahi neden olmuştur.

**Soru 2 (ID: 93939bfd-7728-41b4-85c3-23a52ae5496f)**
Soru Kökü: Çenelerde izlenen farklı kist tiplerinin büyüme dinamikleri karşılaştırıldığında, odontojenik keratokist (KOT) ve rezidüel kist için aşağıdaki kıyaslamalardan hangisi **yanlıştır**?
Doğru Şık (B): Rezidüel kistler, KOT'lara göre daha az kortikal ekspansiyon yapma potansiyeline sahiptir.
Açıklama: Rezidüel kistlerin odontojenik keratokiste (KOT) oranla kortikal ekspansiyon yapma potansiyeli daha fazladır. KOT medüller alanda yayılarak ilerlerken, rezidüel kist basınçla dış korteksi ekspanse etmeye daha meyillidir. B şıkkı bu nedenle yanlıştır.

---

### ÇİFT 49 (Benzerlik: 0.71)

**Soru 1 (ID: 54d1b6d2-0892-4185-9869-db4383048974)**
Soru Kökü: Otuz iki yaşındaki bir hastada rutin panoramik muayenede sürmemiş mandibular yirmi yaş dişi etrafında bir radyolüsensi fark edilmiştir. Ayırıcı tanıda kistik ameloblastoma ve dentijeröz kist düşünülmektedir. Bu iki lezyonu radyolojik olarak birbirinden ayırmayı imkansız kılabilecek temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kistik ameloblastomanın erken evrelerinde küçük tek odacıklı (uniloküler) bir perikoronal görünüm verebilmesi
Açıklama: Dentijeröz kist her zaman mine sement birleşimine tutunan uniloküler bir radyolüsensidir. Unikistik ameloblastoma veya kistik ameloblastoma erken evrelerde dentijeröz kist ile birebir aynı uniloküler ve perikoronal radyografik paterni çizebilir; bu durumda iki lezyonu radyografik olarak ayırt etmek imkansız hale gelir, kesin tanı yalnızca histopatolojik inceleme ile konur.

**Soru 2 (ID: ecfc385f-86a1-4740-a3b9-f4a00882cfb3)**
Soru Kökü: Otuz altı yaşındaki kadın hastanın üst çene anterior bölgesinde, sürmemiş maksiller kanin dişiyle ilişkili ve dişi erüpsiyondan alıkoyan iyi sınırlı bir lezyon tespit edilmiştir. Lezyonun internal yapısında küçük düzgün çakıl taşları şeklinde belirgin radyoopak odaklar mevcuttur. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsifiye kistik odontojenik tümör (Gorlin Kisti)
Açıklama: Kalsifiye kistik odontojenik tümör, ortalama 30'lu yaşlarda görülen, özellikle insizör-kanin bölgesinde yerleşerek diş sürmesini engelleyen ve radyografik olarak internal beyaz benekler/çakıl taşları şeklinde distrofik kalsifikasyonlar sunan bir lezyondur. Glandüler kistte kalsifikasyon beklenmez; sementoblastoma ise vital dişin apeksine yapışık kök rezorpsiyonu ile karakterizedir.

---

### ÇİFT 50 (Benzerlik: 0.71)

**Soru 1 (ID: 54d1b6d2-0892-4185-9869-db4383048974)**
Soru Kökü: Otuz iki yaşındaki bir hastada rutin panoramik muayenede sürmemiş mandibular yirmi yaş dişi etrafında bir radyolüsensi fark edilmiştir. Ayırıcı tanıda kistik ameloblastoma ve dentijeröz kist düşünülmektedir. Bu iki lezyonu radyolojik olarak birbirinden ayırmayı imkansız kılabilecek temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kistik ameloblastomanın erken evrelerinde küçük tek odacıklı (uniloküler) bir perikoronal görünüm verebilmesi
Açıklama: Dentijeröz kist her zaman mine sement birleşimine tutunan uniloküler bir radyolüsensidir. Unikistik ameloblastoma veya kistik ameloblastoma erken evrelerde dentijeröz kist ile birebir aynı uniloküler ve perikoronal radyografik paterni çizebilir; bu durumda iki lezyonu radyografik olarak ayırt etmek imkansız hale gelir, kesin tanı yalnızca histopatolojik inceleme ile konur.

**Soru 2 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

---

### ÇİFT 51 (Benzerlik: 0.71)

**Soru 1 (ID: 67fa614d-c3dc-488e-a42e-867284af7386)**
Soru Kökü: Radiküler kist şüphesi taşıyan devital bir dişte, sekonder bir akut inflamasyon tablosunun eklenmediği safhalarda tanıyı destekleyen en spesifik klinik palpasyon ve perküsyon bulgusu aşağıdakilerden hangisidir?
Doğru Şık (D): Dişin perküsyona hassas olmaması ve ağrısız seyir
Açıklama: Radiküler kistlerin klinik tablosu, devital dişe rağmen çoğunlukla ağrısız bir seyir ve perküsyon hassasiyeti yokluğu ile karakterizedir. Termal testlere uzamış yanıt irreversibl pulpiti, aksiyel perküsyonda metalik ses ankilozu işaret ederken; krepitasyon çok ileri derece kortikal incelmede görülebilen nadir bir bulgudur. Perküsyon hassasiyetinin olmaması, lezyonun kronik kistik safhada stabilize olduğunu ve akut bir periodontal ligament inflamasyonu (akut apikal periodontitis) barındırmadığını kanıtlar.

**Soru 2 (ID: ec7782e2-a006-49d0-ab0b-9c1588e22cce)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, anterior maksillada rutin radyografik inceleme sırasında sol üst lateral kesici dişinin apekste sınırları belirgin, yuvarlak bir radyolüsensi ile başvurmuştur. Dişin kronunda geniş bir kompozit restorasyon mevcuttur ve diş vitalite testine negatif yanıt vermiştir. Hastanın anemnezinde herhangi bir şikayet bildirilmemektedir. Bu klinik senaryoda radiküler kist ön tanısı ile değerlendirilen dişte aşağıdaki bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (E): Etkilenen dişte perküsyonda şiddetli hassasiyet
Açıklama: Radiküler kistler pulpa nekrozu sonucu gelişen inflamatuar kistler olup sekonder enfeksiyon gelişmedikçe karakteristik olarak asemptomatiktirler ve dişte perküsyon hassasiyeti izlenmez. Akut periapikal abse formasyonuna dönüşen veya sekonder enfekte olan vakalar dışında perküsyon pozitifliği ayırıcı tanıda ekarte edici bir bulgudur. Diğer şıklar (kök rezorpsiyonu, ekspansiyon, 2 cm'den büyük boyut ve belirgin kortikal sınır) radiküler kistin doğal büyüme paterni ve radyografik özellikleriyle birebir uyumludur.

---

### ÇİFT 52 (Benzerlik: 0.71)

**Soru 1 (ID: 8f3102e4-3837-4acb-90a2-bc2f0d1204ec)**
Soru Kökü: Ameloblastoma ile çok ciddi radyolojik ve mikroskopik benzerlik gösterebilen, cerrahi enükleasyon sonrası çok yüksek oranda agresif rekürrens sergilediği için hekimi rezeksiyon gibi daha majör tedavilere yönlendiren odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist, radyografide multiloküler görünümü, septasyonları ve yarattığı şiddetli kemik deformasyonu ile ameloblastomayı birebir taklit eder. Epitelyal proliferasyon gücünün yüksekliği nedeniyle standart küretaj sonrası hızla nüks eder. Bu patolojik tabiatı, onu cerrahi sınırları daha güvenli alınması gereken agresif (rezeksiyon/marjineksizyon) tedavi profiline sokar.

**Soru 2 (ID: b8fd0e55-e2ca-4e48-a90c-4af8eca7bd33)**
Soru Kökü: Odontojenik tümör ve kistlerin internal yapıları radyolüsensi/radyoopasite açısından farklılık gösterir. Maksiller kanin bölgesinde lokalize, perikoronal pozisyonda gelişen, sürmeyi engelleyen ve radyografik olarak içinde beyaz benekler veya çakıl taşına benzer kalsifiye odakları bulunduran lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Kalsifiye kistik odontojenik tümör
Açıklama: Kalsifiye kistik odontojenik tümör (CCOT), %50 oranında diş sürmesini engelleyerek perikoronal yerleşim gösterir (özellikle kanin bölgesi) ve internal yapısında karakteristik amorf kalsifiye beyaz benekler veya odakçıklar (radyoopasite) barındırır. Dentijeröz kist de perikoronal yerleşimlidir ancak kalsifikasyon içermez, KOT ve Ameloblastoma ise pür radyolüsent (sıklıkla multiloküler) boşluklardan oluşur. Kalsifikasyon varlığı CCOT için patognomonik bir ipucudur.

---

### ÇİFT 53 (Benzerlik: 0.71)

**Soru 1 (ID: 764e1ec7-edb5-4b56-90f4-674f4d276351)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, maksillada giderek büyüyen ve hafif fasiyal asimetriye neden olan ağrısız şişlik şikayetiyle başvurmaktadır. Alınan radyografik kesitlerde, maksiller antruma invajine olarak tüm sinüs boşluğunu dolduran multiloküler, ekspansif görünümlü bir radyolüsensi saptanmıştır. Minimal kemik ekspansiyonu yaparak tünel formunda büyüyen bu kistin en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Keratokistik odontojenik tümör
Açıklama: Keratokistik odontojenik tümör (KOT), çenelerin internal yönü boyunca tünel şeklinde büyüme eğilimindedir ve maksillada yerleştiğinde maksiller antruma invajine olarak bütün maksiller sinüsü doldurabilme kapasitesine sahiptir. Dentijeröz kistler perikoronal alanda izole kalıp daha uniform ekspansiyon yaparken, KOT sinüs boşluğu gibi anatomik boşluklara güçlü penetrasyon gösterir. BT kesitlerinde sinüsü dolduran multiloküler radyolüsensi, KOT için yüksek prediktif değere sahip bir bulgudur.

**Soru 2 (ID: b1ef0513-e86a-448a-b3ce-9a817eefe932)**
Soru Kökü: On yaşında erkek çocuk hastanın ailesi, çocuğun üst ön çenesinde sürmemiş bir dış yüzey asimetrisi olduğunu belirterek kliniğe başvurmuştur. Radyografik değerlendirmede sürmemiş bir sürnumerer yapının kronunu çevreleyen, iyi sınırlı, radyolüsent ve ağrısız bir lezyon saptanmıştır. Anterior maksillada mesiodens etrafında en sık gelişme eğilimi gösteren bu odontojenik kist aşağıdakilerden hangisidir?
Doğru Şık (E): Dentijeröz kist
Açıklama: Dentijeröz kistler sürmemiş veya sürnumerer bir dişin kronu etrafında gelişirler. En sık mandibular veya maksiller 3. molarlar ile maksiller kaninlerde görülseler de, anterior maksillada sıklıkla bir mesiodensin etrafında gelişmeleri karakteristik klinik lokasyonlarından biridir. Ağrısız fasiyal asimetri tipik bulgularıdır.

---

### ÇİFT 54 (Benzerlik: 0.71)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: 6b406063-6470-4d3b-9d34-33fe26ff470a)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın rutin ortodontik değerlendirme için alınan radyografisinde mandibulada bilateral olarak yerleşmiş, multiple basit kemik kistleri tespit edilmiştir. İlgili bölgedeki dişlerin tamamı vital ve lezyonlar klinik olarak asemptomatiktir. Hastada soliter yerine multiple basit kemik kisti formasyonuna zemin hazırladığı bilinen patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoosseöz displazi
Açıklama: Basit kemik kistleri tipik olarak soliter (tekil) gelişme eğiliminde olmalarına rağmen, özellikle sementoosseöz displazi ile birlikte görüldüklerinde multiple (çoklu) karakterde ortaya çıkabilirler. Nevoid bazal hücreli karsinom sendromu multiple Keratokistik Odontojenik Tümör (KOT) ile ilişkili iken, basit kemik kistleri bu sendromun bir parçası değildir. Sementoosseöz displazi dokusunun yarattığı lokal kemik hemodinamik değişimlerin veya bağ dokusu stroma reaksiyonunun bu çoklu psödokist boşluklarının oluşumunu tetiklediği düşünülmektedir.

---

### ÇİFT 55 (Benzerlik: 0.71)

**Soru 1 (ID: 3a2230d4-1f75-4ce9-a0c1-e6e644895d6f)**
Soru Kökü: Bazal hücreli nevus sendromu (Gorlin Sendromu) kompleks genetik geçişli bir hastalıktır ve hastaların değerlendirilmesinde multisipliner klinik bulgular aranır. Aşağıdakilerden hangisi bu sendrom tablosunda karşılaşılması beklenen iskelet anomalilerinden biri **değildir**?
Doğru Şık (B): Santral kesicilerin kökleri arasında nazal tabana uzanan kalpleşme ve kök ayrılması
Açıklama: Santral kesicilerin kökleri arasında (foramen insizivada) kemik destrüksiyonu yaparak kalp şekli yaratan ve kökleri V harfi (diverjan) şeklinde ayıran tablo Nazopalatin Kanal kistinin radyolojik bulgusudur, Gorlin sendromunun iskeletsel bulgularından biri değildir. Gorlin sendromunda kifoskolyoz, metakarpal kısalıklar, vertebral füzyonlar ve bifid kaburga gibi kosta anomalileri izlenir.

**Soru 2 (ID: d9137d0f-aa1b-45b8-95e7-26a938650a4c)**
Soru Kökü: On dokuz yaşındaki erkek hasta çenelerinde ağrısız şişlik şikayetiyle başvurmuş olup, panoramik radyografisinde bilateral multiple KOT varlığı saptanmıştır. Ortodontik ve ortopedik konsültasyonlar neticesinde hastaya Bazal Hücreli Nevus Sendromu (Gorlin Sendromu) tanısı konmuştur. Bu hastanın iskelet sisteminde en olası ve sık saptanan patolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Bifid kaburga ve kostal deformiteler
Açıklama: Bazal hücreli nevus sendromunun iskeletsel anomalileri arasında en yaygın görüleni 'bifid kaburga' (kaburganın çatallanması) deformitesidir. Buna ek olarak agenezi, kifoskolyoz, vertebral füzyon ve metakarpallarda kısalma gibi diğer kemik bulguları da izlenebilir. Klavikula agenezisi Kleidotokraniyal Displazinin, pamuk atığı görüntüsü ise Paget hastalığının karakteristik bulgularıdır.

---

### ÇİFT 56 (Benzerlik: 0.71)

**Soru 1 (ID: d64b7d08-b651-4169-9a31-297d455b5c52)**
Soru Kökü: Glandular odontojenik kistler genellikle anterior mandibulada yerleşim gösterseler de, üst çenede (maksilla) ortaya çıktıklarında anatomik olarak en yoğun saptandıkları lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Globulomaksiller bölge
Açıklama: Glandular odontojenik kist maksillada izlendiğinde klasik olarak globulomaksiller bölgeyi (lateral kesici ile kanin dişi arası) tercih eder. Geçmiş yıllarda gerçek bir kist zannedilen 'globulomaksiller kist' tanımı anatomik bir pozisyondur; günümüzde bu bölgede ortaya çıkan armut şekilli lezyonların patolojik tanısı genellikle radiküler kist, lateral periodontal kist veya glandular odontojenik kisttir.

**Soru 2 (ID: f38be487-9378-4504-8a0f-dc77fc9c097f)**
Soru Kökü: Aşağıdaki çene kistlerinden hangisi karakteristik olarak anterior mandibulayı veya globulomaksiller bölgeyi tutan, histolojik olarak mukus üreten hücreler içerdiği için radyolojik ayırıcı tanısında santral mukoepidermoid karsinomun mutlaka bulundurulması gereken agresif karakterli kisttir?
Doğru Şık (C): Glandüler odontojenik kist
Açıklama: Glandüler odontojenik kist, siliyer hücreler ve mukus göllenmeleri içeren spesifik histolojisiyle santral mukoepidermoid karsinoma benzerlik gösteren, agresif seyirli ve nüks oranı yüksek bir gelişimsel kisttir. Radyografik olarak sıklıkla multiloküler görünümdedir ve dişlerde yer değiştirmeye sebep olur; enükleasyon tek başına yetersiz kalabilir ve rezeksiyon gerektirebilir.

---

### ÇİFT 57 (Benzerlik: 0.70)

**Soru 1 (ID: 7afd1494-f48b-4428-b6a1-934231edb8e9)**
Soru Kökü: Sürmemiş bir dişin kronu etrafında perikoronal pozisyonda izlenen radyolüsent lezyonların radyolojik değerlendirmesinde, lezyonun dentijeröz kist yerine keratokistik odontojenik tümör (KOT) olabileceğini düşündüren tutunma paterni aşağıdakilerden hangisidir?
Doğru Şık (B): Mine-sement birleşiminin apikaline bağlanması
Açıklama: Perikoronal pozisyondaki bir KOT'u dentijeröz kistten ayıran en önemli radyografik işaretlerden biri, kistik dış sınırın mine-sement birleşiminin apikaline (kök yüzeyine) bağlanmasıdır. Dentijeröz kist ise patogenezi gereği foliküler kaynaklıdır ve tam olarak mine-sement birleşimine (CEJ) tutunur. Kortikal plakta belirgin ekspansiyonun olmaması da KOT lehine değerlendirilen ek bir bulgudur.

**Soru 2 (ID: 9d09bc1f-6b34-42ba-831f-3a02620771ad)**
Soru Kökü: Diş çekim boşluğunda gelişen ve radyografik olarak oval şekilli, kortikal sınırlı bir lezyon olarak izlenen rezidüel kistin kemik ekspansiyon karakteristiği, ayırıcı tanısında yer alan odontojenik keratokist (KOT) ile karşılaştırıldığında nasıldır?
Doğru Şık (B): Rezidüel kist KOT'a oranla daha fazla ekspansiyon yapma potansiyeline sahiptir.
Açıklama: Rezidüel kistler, çenelerin dış kortikal plağında belirgin ekspansiyona sebep olabilir ve bu özellikleri odontojenik keratokiste (KOT) göre daha fazla ekspansiyon yapma potansiyeline sahip olduklarını gösterir. KOT ise karakteristik olarak kortikal ekspansiyona neden olmaktan ziyade çenelerin internal yönü boyunca tünel şeklinde büyüme eğilimindedir.

---

### ÇİFT 58 (Benzerlik: 0.70)

**Soru 1 (ID: 10868ab5-8f69-440e-b5b4-fdd52724687f)**
Soru Kökü: Keratokistik odontojenik tümörlerin (KOT) çenelerdeki anatomik dağılımı incelendiğinde, bu lezyonun istatistiksel olarak en yaygın bulunduğu lokasyon aşağıdakilerden hangisidir?
Doğru Şık (E): Mandibulanın posterioru ve ramus
Açıklama: KOT'ların en sık yerleştiği alan (%60-80 oranında) mandibulanın posterioru, angulusu ve ramus bölgeleridir. Maksilla anterior bölgede daha çok radiküler veya dentijeröz (mesiodens ilişkili) kistler görülürken, ramus bölgesinde tünel şeklinde büyüyen büyük radyolüsensiler her zaman ilk olarak KOT şüphesi yaratır.

**Soru 2 (ID: d64b7d08-b651-4169-9a31-297d455b5c52)**
Soru Kökü: Glandular odontojenik kistler genellikle anterior mandibulada yerleşim gösterseler de, üst çenede (maksilla) ortaya çıktıklarında anatomik olarak en yoğun saptandıkları lokalizasyon aşağıdakilerden hangisidir?
Doğru Şık (D): Globulomaksiller bölge
Açıklama: Glandular odontojenik kist maksillada izlendiğinde klasik olarak globulomaksiller bölgeyi (lateral kesici ile kanin dişi arası) tercih eder. Geçmiş yıllarda gerçek bir kist zannedilen 'globulomaksiller kist' tanımı anatomik bir pozisyondur; günümüzde bu bölgede ortaya çıkan armut şekilli lezyonların patolojik tanısı genellikle radiküler kist, lateral periodontal kist veya glandular odontojenik kisttir.

---

### ÇİFT 59 (Benzerlik: 0.70)

**Soru 1 (ID: 54d1b6d2-0892-4185-9869-db4383048974)**
Soru Kökü: Otuz iki yaşındaki bir hastada rutin panoramik muayenede sürmemiş mandibular yirmi yaş dişi etrafında bir radyolüsensi fark edilmiştir. Ayırıcı tanıda kistik ameloblastoma ve dentijeröz kist düşünülmektedir. Bu iki lezyonu radyolojik olarak birbirinden ayırmayı imkansız kılabilecek temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kistik ameloblastomanın erken evrelerinde küçük tek odacıklı (uniloküler) bir perikoronal görünüm verebilmesi
Açıklama: Dentijeröz kist her zaman mine sement birleşimine tutunan uniloküler bir radyolüsensidir. Unikistik ameloblastoma veya kistik ameloblastoma erken evrelerde dentijeröz kist ile birebir aynı uniloküler ve perikoronal radyografik paterni çizebilir; bu durumda iki lezyonu radyografik olarak ayırt etmek imkansız hale gelir, kesin tanı yalnızca histopatolojik inceleme ile konur.

**Soru 2 (ID: ab9ec88d-ef57-4832-aa70-59dfdc3c1682)**
Soru Kökü: Kırk sekiz yaşındaki kadın hasta anterior mandibulada dişlerde yer değişikliği yaratan multiloküler bir radyolüsensi ile başvurmuştur. Biyopsi sonucu glandular odontojenik kist olarak raporlanmıştır. Bu kistin klinik seyri ve davranışı için aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (B): Basit enükleasyondan sonra hiçbir şekilde rekürrens eğilimi göstermez.
Açıklama: Glandular odontojenik kist son derece agresif bir davranıştır ve konservatif cerrahilerden (enükleasyon vb.) sonra yüksek oranda rekürrens eğilimi gösterir. Bu rekürrens potansiyelinden dolayı, rezeksiyon gibi daha agresif tedavi planlamaları göz önünde bulundurulur ve operasyon sonrası dikkatli periyodik klinik/radyolojik takip gerekir.

---

### ÇİFT 60 (Benzerlik: 0.70)

**Soru 1 (ID: 54d1b6d2-0892-4185-9869-db4383048974)**
Soru Kökü: Otuz iki yaşındaki bir hastada rutin panoramik muayenede sürmemiş mandibular yirmi yaş dişi etrafında bir radyolüsensi fark edilmiştir. Ayırıcı tanıda kistik ameloblastoma ve dentijeröz kist düşünülmektedir. Bu iki lezyonu radyolojik olarak birbirinden ayırmayı imkansız kılabilecek temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kistik ameloblastomanın erken evrelerinde küçük tek odacıklı (uniloküler) bir perikoronal görünüm verebilmesi
Açıklama: Dentijeröz kist her zaman mine sement birleşimine tutunan uniloküler bir radyolüsensidir. Unikistik ameloblastoma veya kistik ameloblastoma erken evrelerde dentijeröz kist ile birebir aynı uniloküler ve perikoronal radyografik paterni çizebilir; bu durumda iki lezyonu radyografik olarak ayırt etmek imkansız hale gelir, kesin tanı yalnızca histopatolojik inceleme ile konur.

**Soru 2 (ID: 6b406063-6470-4d3b-9d34-33fe26ff470a)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın rutin ortodontik değerlendirme için alınan radyografisinde mandibulada bilateral olarak yerleşmiş, multiple basit kemik kistleri tespit edilmiştir. İlgili bölgedeki dişlerin tamamı vital ve lezyonlar klinik olarak asemptomatiktir. Hastada soliter yerine multiple basit kemik kisti formasyonuna zemin hazırladığı bilinen patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoosseöz displazi
Açıklama: Basit kemik kistleri tipik olarak soliter (tekil) gelişme eğiliminde olmalarına rağmen, özellikle sementoosseöz displazi ile birlikte görüldüklerinde multiple (çoklu) karakterde ortaya çıkabilirler. Nevoid bazal hücreli karsinom sendromu multiple Keratokistik Odontojenik Tümör (KOT) ile ilişkili iken, basit kemik kistleri bu sendromun bir parçası değildir. Sementoosseöz displazi dokusunun yarattığı lokal kemik hemodinamik değişimlerin veya bağ dokusu stroma reaksiyonunun bu çoklu psödokist boşluklarının oluşumunu tetiklediği düşünülmektedir.

---

### ÇİFT 61 (Benzerlik: 0.70)

**Soru 1 (ID: 0b80f889-6df8-4c41-8134-36f7d0d36f5a)**
Soru Kökü: Ağız mukozasından drene olan ve hastanın 'ağzıma tuzlu su akıyor' şeklinde tarif ettiği bir sıvı sızıntısı anamnezi, aşağıdaki kistlerden hangisinin tanısında güçlü bir klinik ipucudur?
Doğru Şık (B): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kisti sert damakta, nazopalatin duktus kalıntılarından gelişir. Bu bölgedeki basınç arttığında veya bir miktar dekompresyon gerçekleştiğinde kistik kavitasyon oral kaviteye ince bir sinüs yolu açarak drene olabilir. Kistik içeriğin boşalması hasta tarafından tipik olarak 'tuzlu bir tat' şeklinde tanımlanır.

**Soru 2 (ID: c96de0a9-ad27-4802-8238-022d92a1a734)**
Soru Kökü: 34 yaşında erkek hasta, damak ön bölgesinde hafif şişlik ve ara sıra tuzlu bir tat algısı şikayetiyle başvuruyor. Klinik muayenede palatin papillanın hemen posteriorunda küçük, maviye çalan flüktüan bir şişlik izleniyor. İlgili santral kesici dişlerin vitalite testleri pozitif bulunuyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kisti, insisiv kanalda epitel artıklarından gelişir ve sıvının ağız içine drene olması nedeniyle hastada tuzlu tat hissi yaratır; palatin papilla arkasında şişlik oluşturur. Santral kesicilerin apikalinde yerleşip kalp şeklinde görünebilirse de, bu dişlerin vital kalması radiküler kist seçeneğini ekarte ettirir. Bu topografik ve klinik triyad (lokasyon, vitalite, tuzlu tat) nazopalatin kiste özgüdür.

---

### ÇİFT 62 (Benzerlik: 0.70)

**Soru 1 (ID: 40edb7b8-e12d-4ed7-bf2e-bc739226be05)**
Soru Kökü: Mandibula posterior bölgede radyolüsent bir lezyon saptanan hastada, ayırıcı tanıda odontojenik kist ile lingual tükrük bezi depresyonunu birbirinden ayırmak için dikkate alınması gereken en kritik anatomik pozisyon ilişkisi aşağıdakilerden hangisidir?
Doğru Şık (E): İnferior alveolar sinir kanalı ile olan süperior-inferior konum ilişkisi
Açıklama: Odontojenik kistlerin merkez üssü dişe ait dokulardan köken aldıkları için daima inferior alveolar kanalın üstünde yer alırken, lingual tükrük bezi depresyonu embriyolojik bir inklüzyon veya bez baskısı nedeniyle mandibular kanalın altında lokalize olur. Eğer patoloji inferior alveolar kanalın üstünde yer alıyorsa tanı ilk etapta odontojenik orijinlere (KOT, vb.) yönelmelidir. İstisnai olarak sublingual beze bağlı defektler anterior bölgede kanal üstünde görülebilir ancak molar/antegonial bölgedeki superior/inferior ayrımı kesin bir radyografik markerdir.

**Soru 2 (ID: eb70b5c5-f04e-4221-9f6d-f8000c6f86e3)**
Soru Kökü: Gelişimsel süreçlerde mandibular kanal (inferior alveoler sinir) komşuluğu anatomik sınıflama için bir bariyerdir. Aşağıdaki lezyonlardan hangisi mandibulada radyografik olarak saptandığında, lezyonun merkezi inferior alveoler sinir kanalının **altında** kalır?
Doğru Şık (D): Stafne (Lingual tükrük bezi) depresyonu
Açıklama: Stafne depresyonu gelişim sırasında submandibular veya sublingual tükrük bezi dokusunun mandibular korteks üzerinde oluşturduğu fizyolojik bir baskı çukurudur ve klasik lokalizasyonu angulusun hemen önü ile inferior alveoler kanalın ALTI'dır. Odontojenik kistler (radiküler, rezidüel, KOT) kökenlerini diş embriyolojisinden aldıkları için mandibulada daima alveolar krette, yani inferior alveoler kanalın ÜSTÜNDE yerleşmek zorundadırlar.

---

### ÇİFT 63 (Benzerlik: 0.70)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: 54d1b6d2-0892-4185-9869-db4383048974)**
Soru Kökü: Otuz iki yaşındaki bir hastada rutin panoramik muayenede sürmemiş mandibular yirmi yaş dişi etrafında bir radyolüsensi fark edilmiştir. Ayırıcı tanıda kistik ameloblastoma ve dentijeröz kist düşünülmektedir. Bu iki lezyonu radyolojik olarak birbirinden ayırmayı imkansız kılabilecek temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kistik ameloblastomanın erken evrelerinde küçük tek odacıklı (uniloküler) bir perikoronal görünüm verebilmesi
Açıklama: Dentijeröz kist her zaman mine sement birleşimine tutunan uniloküler bir radyolüsensidir. Unikistik ameloblastoma veya kistik ameloblastoma erken evrelerde dentijeröz kist ile birebir aynı uniloküler ve perikoronal radyografik paterni çizebilir; bu durumda iki lezyonu radyografik olarak ayırt etmek imkansız hale gelir, kesin tanı yalnızca histopatolojik inceleme ile konur.

---

### ÇİFT 64 (Benzerlik: 0.70)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: f38be487-9378-4504-8a0f-dc77fc9c097f)**
Soru Kökü: Aşağıdaki çene kistlerinden hangisi karakteristik olarak anterior mandibulayı veya globulomaksiller bölgeyi tutan, histolojik olarak mukus üreten hücreler içerdiği için radyolojik ayırıcı tanısında santral mukoepidermoid karsinomun mutlaka bulundurulması gereken agresif karakterli kisttir?
Doğru Şık (C): Glandüler odontojenik kist
Açıklama: Glandüler odontojenik kist, siliyer hücreler ve mukus göllenmeleri içeren spesifik histolojisiyle santral mukoepidermoid karsinoma benzerlik gösteren, agresif seyirli ve nüks oranı yüksek bir gelişimsel kisttir. Radyografik olarak sıklıkla multiloküler görünümdedir ve dişlerde yer değiştirmeye sebep olur; enükleasyon tek başına yetersiz kalabilir ve rezeksiyon gerektirebilir.

---

### ÇİFT 65 (Benzerlik: 0.70)

**Soru 1 (ID: 0cd24602-c0de-413d-9da6-45e53ae9e316)**
Soru Kökü: Çenelerde kist ve tümör benzeri oluşumların klinik ve radyografik özellikleriyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Basit kemik kistinin en ayırıcı radyografik özelliği belirgin bir kortikal ekspansiyona neden olmasıdır.
Açıklama: Basit kemik kistleri, kemik içinde fibröz dokunun boşluk bırakmasıyla karakterize kist benzeri kavitelerdir ve KOT'lar gibi kemiğin uzun ekseninde yayıldıkları için genellikle ekspansiyon yapmazlar. Aksine, dentijeröz kistler veya cherubism gibi durumlar belirgin ekspansiyona neden olur. SBC'lerin minimal klinik belirti vermesi ve korteksi dışarı itmemesi temel tanı kriterlerinden biridir.

**Soru 2 (ID: 41a72de7-34e4-4a63-9e97-996f96653dfc)**
Soru Kökü: Basit kemik kisti (SBC) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Sementoosseöz displazi ile birlikte görüldüğünde bile daima soliter (tekil) lezyon olarak kalırlar.
Açıklama: Basit kemik kistleri genel karakteristikleri gereği soliter yapıdadırlar ancak sementoosseöz displazi gibi spesifik fibroosseöz lezyonlarla eş zamanlı bulunduklarında multiple olarak gelişme eğilimindedirler. Kemiğin uzun aksına büyüme, taraklı sınır ve vital diş varlığı basit kemik kistinin en belirgin ayırıcı tanı özellikleridir. Basit kemik kisti cerrahisinde iç çeperin kürete edilerek kavite içine kanama oluşturulması, osteojenik öncül hücrelerin ortama gelmesini sağlayarak spontan iyileşmeyi tetikler.

---

### ÇİFT 66 (Benzerlik: 0.70)

**Soru 1 (ID: a65a6e01-fed5-4ede-9274-72f53086cbac)**
Soru Kökü: Kırk beş yaşında kadın hasta alt çenede hafif şişlik şikayetiyle başvurmuştur. Alınan anamnezde lezyon bölgesindeki dişin yıllar önce çekildiği öğrenilmiştir. Panoramik radyografide, merkezi mandibular kanalın üzerinde yer alan, iyi kortikal sınırlı, oval şekilli ve dış kortikal plakta ekspansiyon yapmış bir radyolüsensi saptanmıştır. Rezidüel kist ön tanısı alan bu lezyon için endike olan birincil tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Cerrahi olarak çıkarılma ya da kist çok büyükse marsüpyalizasyon
Açıklama: Rezidüel kistlerin tedavisi cerrahi çıkarılma (enükleasyon) ya da kist aşırı büyükse her iki yöntemin (marsüpyalizasyon ve takiben enükleasyon) kombine uygulanmasıdır. Dişsiz bölgede yer almaları agresif rezeksiyon gerektirmez, ayrıca komşu vital dişlerin profilaktik kanal tedavisine de ihtiyaç yoktur.

**Soru 2 (ID: fd1844d8-a7c9-446e-98d2-812bc063294c)**
Soru Kökü: Altmış yaşındaki kadın hastanın panoramik radyografisinde, sol inferior alveolar sinir kanalının altında ve mandibula açısının hemen önünde, sınırları belirgin, yuvarlak bir radyolüsensi saptanmıştır. BT incelemesinde bu defektin içinin yağ dansitesine sahip doku ile dolu olduğu ve lingual kortekste incelme yarattığı görülmüştür. Bu lezyon için uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (E): Hiçbir cerrahi müdahaleye gerek yoktur, takibi yeterlidir
Açıklama: Tarif edilen lezyon Stafne idiyopatik kemik kavitesidir (lingual tükrük bezi depresyonu). Submandibuler bezin veya yağ dokusunun mandibula lingual korteksinde oluşturduğu gelişimsel bir depresyondur. BT'de yağ/glandüler doku dansitesi izlenmesi teşhisi kesinleştirir ve bu fizyolojik bir varyasyon olduğu için patolojik bir süreç işlemez; dolayısıyla cerrahi veya medikal bir tedavi gerekmez.

---

### ÇİFT 67 (Benzerlik: 0.70)

**Soru 1 (ID: 6b406063-6470-4d3b-9d34-33fe26ff470a)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın rutin ortodontik değerlendirme için alınan radyografisinde mandibulada bilateral olarak yerleşmiş, multiple basit kemik kistleri tespit edilmiştir. İlgili bölgedeki dişlerin tamamı vital ve lezyonlar klinik olarak asemptomatiktir. Hastada soliter yerine multiple basit kemik kisti formasyonuna zemin hazırladığı bilinen patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoosseöz displazi
Açıklama: Basit kemik kistleri tipik olarak soliter (tekil) gelişme eğiliminde olmalarına rağmen, özellikle sementoosseöz displazi ile birlikte görüldüklerinde multiple (çoklu) karakterde ortaya çıkabilirler. Nevoid bazal hücreli karsinom sendromu multiple Keratokistik Odontojenik Tümör (KOT) ile ilişkili iken, basit kemik kistleri bu sendromun bir parçası değildir. Sementoosseöz displazi dokusunun yarattığı lokal kemik hemodinamik değişimlerin veya bağ dokusu stroma reaksiyonunun bu çoklu psödokist boşluklarının oluşumunu tetiklediği düşünülmektedir.

**Soru 2 (ID: 764e1ec7-edb5-4b56-90f4-674f4d276351)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, maksillada giderek büyüyen ve hafif fasiyal asimetriye neden olan ağrısız şişlik şikayetiyle başvurmaktadır. Alınan radyografik kesitlerde, maksiller antruma invajine olarak tüm sinüs boşluğunu dolduran multiloküler, ekspansif görünümlü bir radyolüsensi saptanmıştır. Minimal kemik ekspansiyonu yaparak tünel formunda büyüyen bu kistin en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Keratokistik odontojenik tümör
Açıklama: Keratokistik odontojenik tümör (KOT), çenelerin internal yönü boyunca tünel şeklinde büyüme eğilimindedir ve maksillada yerleştiğinde maksiller antruma invajine olarak bütün maksiller sinüsü doldurabilme kapasitesine sahiptir. Dentijeröz kistler perikoronal alanda izole kalıp daha uniform ekspansiyon yaparken, KOT sinüs boşluğu gibi anatomik boşluklara güçlü penetrasyon gösterir. BT kesitlerinde sinüsü dolduran multiloküler radyolüsensi, KOT için yüksek prediktif değere sahip bir bulgudur.

---

### ÇİFT 68 (Benzerlik: 0.70)

**Soru 1 (ID: 964276d6-42af-43ca-a03c-1aa6a029b70e)**
Soru Kökü: Çene ve yüz bölgesi kistleriyle ilgili aşağıdaki eşleştirmelerden hangisi klinik-radyolojik olarak **en az olasıdır** (uyumsuzdur)?
Doğru Şık (A): Nazolabial kist - Radyografik homojen radyolüsensi ve internal yapıda kalsifikasyonlar
Açıklama: Nazolabial kist, alveolar kemiğin dışında labial mukozada gelişen yumuşak doku kökenli bir epiteliyal kisttir. Kemiğin içine girmez, sadece dış kortekste baskı erozyonu yapabilir ve hiçbir zaman internal radyoopak kalsifikasyonlar barındırmaz. Kalsifikasyonlar tipik olarak CCOT veya adenomatoid tümörlerde görülür. Diğer şıklarda eşleştirilen patolojik özellikler lezyonların tanısal standartlarıdır.

**Soru 2 (ID: adc8cab7-4676-48fe-8565-4c873dc1178b)**
Soru Kökü: Gerçek bir kemik kisti olmamasına (yumuşak doku kaynaklı olmasına) karşın, genişlemiş nazolabial kistlerin radyolojik incelemesinde anatomik komşuluklarından ötürü kemik yapıda izlenen en tipik radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (C): Alttaki maksiller kemikte erozyon ve nazal fossa inferior sınırında distorsiyon
Açıklama: Nazolabial kistler santral (kemik içi) bir patoloji değildir, nazolabial yumuşak dokudan doğarlar. Ancak kist büyüdükçe yarattığı sürekli mekanik basınç rezorpsiyonuna bağlı olarak altta yatan kemikte (piriform açıklıkta) çukur şeklinde bir erozyon ve nazal fossanın inferior sınırında distorsiyon yaratabilirler. Diş köklerinde masif rezorpsiyon veya hiperostozis beklenmez.

---

### ÇİFT 69 (Benzerlik: 0.70)

**Soru 1 (ID: bc0c5cf8-728a-4019-ba00-4a5d1a0ac5ef)**
Soru Kökü: Çene lezyonlarının BT veya MR ile çapraz kesit değerlendirmeleri günümüzde yaygındır. Keratokistik Odontojenik Tümörün (KOT) cerrahi sınırlarını ameloblastomadan ayırt etmek amacıyla MR çekildiğinde, ameloblastomayı işaret eden en net manyetik rezonans (MR) bulgusu aşağıdakilerden hangisidir?
Doğru Şık (C): Solid ve kistik komponentlerin karışımı ile düzensiz solid kısımlarda kontrastlanma olması
Açıklama: MR görüntülemede ameloblastomalar sıklıkla pür kistik değil, solid komponentlerle miks kistik yapıya sahiptir; bu solid adacıklar damarlanma içerdiği için radyofarmasötik kontrast maddeleri (gadolinyum) güçlü tutar. KOT ise merkezi lümenli bir kese olup duvarı genellikle ince kalır ve kontrastlanma ameloblastomadaki gibi solid tümör paterni sergilemez. Yumuşak doku çözünürlüğündeki bu farklılık, cerraha rezeksiyonun marjinleri hakkında vital bilgi sunar.

**Soru 2 (ID: c838382a-d858-4b32-9779-975adb4894b0)**
Soru Kökü: Keratokistik odontojenik tümör (KOT) cerrahisi öncesinde; lezyonun boyut sınırlarını, yumuşak doku ekstansiyonunu ve komşu anatomik yapılardaki olası kortikal perforasyon alanlarını belirlemek için tercih edilen en ideal görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (C): Bilgisayarlı tomografi (BT)
Açıklama: Keratokistik odontojenik tümörlerin kemik içindeki 3 boyutlu dekstrüksiyon sınırları, kortikal perforasyon alanları ve çevre yumuşak dokuya ekstansiyonu en iyi Bilgisayarlı Tomografi (BT) ile incelenir. Panoramik radyografi kortikal sınır aşımlarını net gösteremezken, MR daha çok ameloblastoma gibi lezyonların kistik/solid paternlerini ayırt etmede tercih edilir. Cerrahi sınırların belirlenmesi açısından BT altın standarttır.

---

### ÇİFT 70 (Benzerlik: 0.70)

**Soru 1 (ID: 347c2f7d-9e2f-4e85-8851-142ce2d6484f)**
Soru Kökü: Gömülü bir dişin çevresinde gelişen dentijeröz kistlerin morfolojik ve radyolojik bulguları değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Kistin anatomik sınırı daima diş kökünün orta veya apikal üçlüsüne tutunarak ilerler.
Açıklama: Dentijeröz kistin karakteristik tutunma noktası mine-sement birleşimidir (CEJ). Kistik astar, kronu çevreleyip CEJ'de sonlanır. Kök boyunca apikale inen kistik sınırlar dentijeröz kistten ziyade KOT (Keratokistik Odontojenik Tümör) gibi diğer agresif patolojileri veya periodontal ilişkili kistleri düşündürür.

**Soru 2 (ID: 54d1b6d2-0892-4185-9869-db4383048974)**
Soru Kökü: Otuz iki yaşındaki bir hastada rutin panoramik muayenede sürmemiş mandibular yirmi yaş dişi etrafında bir radyolüsensi fark edilmiştir. Ayırıcı tanıda kistik ameloblastoma ve dentijeröz kist düşünülmektedir. Bu iki lezyonu radyolojik olarak birbirinden ayırmayı imkansız kılabilecek temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kistik ameloblastomanın erken evrelerinde küçük tek odacıklı (uniloküler) bir perikoronal görünüm verebilmesi
Açıklama: Dentijeröz kist her zaman mine sement birleşimine tutunan uniloküler bir radyolüsensidir. Unikistik ameloblastoma veya kistik ameloblastoma erken evrelerde dentijeröz kist ile birebir aynı uniloküler ve perikoronal radyografik paterni çizebilir; bu durumda iki lezyonu radyografik olarak ayırt etmek imkansız hale gelir, kesin tanı yalnızca histopatolojik inceleme ile konur.

---

### ÇİFT 71 (Benzerlik: 0.70)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: af8c42c3-385b-46d2-b2ba-a8a8655bfc14)**
Soru Kökü: Altmış iki yaşındaki erkek hastanın panoramik radyografisinde sağ mandibula inferior sınırında, molar bölgede lokalize sirküler bir radyolüsensi saptanmıştır. Klinik muayenede kitle veya asimetri palpe edilememekte, hasta tamamen asemptomatik seyretmektedir. Dişlerde vitalite kaybı veya enfeksiyon bulgusu yoktur. Bu klinik tablo aşağıdaki lezyonlardan hangisi için en tipik sunumdur?
Doğru Şık (D): Lingual tükrük bezi depresyonu
Açıklama: Lingual tükrük bezi depresyonu (Stafne idiopatik kemik kavitesi) 50-60 yaş erkeklerde tipik olarak palpe edilemeyen, tamamen asemptomatik, radyografik olarak rastlantısal saptanan bir anatomik varyasyondur. Diğer patolojik kist ve tümörlerin aksine kemik içinde büyüyen aktif bir kitle olmadığı için hastaya hiçbir rahatsızlık vermez ve dış konturda ekspansiyon yerine lingual yüzde bir girinti yaratır. Fokal osteoporotik kemik iliği de asemptomatiktir ancak dişsiz kret bölgelerinde veya apekslerde düzensiz sklerotik kenarlı litik görünüme sahiptir, oysa tükrük bezi depresyonu spesifik olarak mandibula inferior sınırında yer alır.

---

### ÇİFT 72 (Benzerlik: 0.70)

**Soru 1 (ID: b8fd0e55-e2ca-4e48-a90c-4af8eca7bd33)**
Soru Kökü: Odontojenik tümör ve kistlerin internal yapıları radyolüsensi/radyoopasite açısından farklılık gösterir. Maksiller kanin bölgesinde lokalize, perikoronal pozisyonda gelişen, sürmeyi engelleyen ve radyografik olarak içinde beyaz benekler veya çakıl taşına benzer kalsifiye odakları bulunduran lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Kalsifiye kistik odontojenik tümör
Açıklama: Kalsifiye kistik odontojenik tümör (CCOT), %50 oranında diş sürmesini engelleyerek perikoronal yerleşim gösterir (özellikle kanin bölgesi) ve internal yapısında karakteristik amorf kalsifiye beyaz benekler veya odakçıklar (radyoopasite) barındırır. Dentijeröz kist de perikoronal yerleşimlidir ancak kalsifikasyon içermez, KOT ve Ameloblastoma ise pür radyolüsent (sıklıkla multiloküler) boşluklardan oluşur. Kalsifikasyon varlığı CCOT için patognomonik bir ipucudur.

**Soru 2 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

---

### ÇİFT 73 (Benzerlik: 0.70)

**Soru 1 (ID: 347c2f7d-9e2f-4e85-8851-142ce2d6484f)**
Soru Kökü: Gömülü bir dişin çevresinde gelişen dentijeröz kistlerin morfolojik ve radyolojik bulguları değerlendirildiğinde aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Kistin anatomik sınırı daima diş kökünün orta veya apikal üçlüsüne tutunarak ilerler.
Açıklama: Dentijeröz kistin karakteristik tutunma noktası mine-sement birleşimidir (CEJ). Kistik astar, kronu çevreleyip CEJ'de sonlanır. Kök boyunca apikale inen kistik sınırlar dentijeröz kistten ziyade KOT (Keratokistik Odontojenik Tümör) gibi diğer agresif patolojileri veya periodontal ilişkili kistleri düşündürür.

**Soru 2 (ID: 5362de49-64ab-46ec-9b07-bf505ea15c06)**
Soru Kökü: Lateral periodontal kistin genel ve demografik özellikleriyle ilgili olarak aşağıdaki klinik/radyolojik ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Sert damak anteriorunda nazal spinanın süperpozisyonu ile kalp şeklinde görülür.
Açıklama: Sert damak anteriorunda santral kesicilerin arasında nazal spinanın gölgesi ile 'kalp şeklinde' görülen lezyon lateral periodontal kist değil, nazopalatin kanal kistidir (insiziv kanal kisti). Lateral periodontal kist mandibulada lateral-premolar bölgesine lokalize yuvarlak veya oval radyolüsensi şeklindedir ve dişlerin lamina durasını silebilir.

---

### ÇİFT 74 (Benzerlik: 0.70)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: 764e1ec7-edb5-4b56-90f4-674f4d276351)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, maksillada giderek büyüyen ve hafif fasiyal asimetriye neden olan ağrısız şişlik şikayetiyle başvurmaktadır. Alınan radyografik kesitlerde, maksiller antruma invajine olarak tüm sinüs boşluğunu dolduran multiloküler, ekspansif görünümlü bir radyolüsensi saptanmıştır. Minimal kemik ekspansiyonu yaparak tünel formunda büyüyen bu kistin en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Keratokistik odontojenik tümör
Açıklama: Keratokistik odontojenik tümör (KOT), çenelerin internal yönü boyunca tünel şeklinde büyüme eğilimindedir ve maksillada yerleştiğinde maksiller antruma invajine olarak bütün maksiller sinüsü doldurabilme kapasitesine sahiptir. Dentijeröz kistler perikoronal alanda izole kalıp daha uniform ekspansiyon yaparken, KOT sinüs boşluğu gibi anatomik boşluklara güçlü penetrasyon gösterir. BT kesitlerinde sinüsü dolduran multiloküler radyolüsensi, KOT için yüksek prediktif değere sahip bir bulgudur.

---

### ÇİFT 75 (Benzerlik: 0.70)

**Soru 1 (ID: 6b406063-6470-4d3b-9d34-33fe26ff470a)**
Soru Kökü: Yirmi iki yaşındaki kadın hastanın rutin ortodontik değerlendirme için alınan radyografisinde mandibulada bilateral olarak yerleşmiş, multiple basit kemik kistleri tespit edilmiştir. İlgili bölgedeki dişlerin tamamı vital ve lezyonlar klinik olarak asemptomatiktir. Hastada soliter yerine multiple basit kemik kisti formasyonuna zemin hazırladığı bilinen patoloji aşağıdakilerden hangisidir?
Doğru Şık (E): Sementoosseöz displazi
Açıklama: Basit kemik kistleri tipik olarak soliter (tekil) gelişme eğiliminde olmalarına rağmen, özellikle sementoosseöz displazi ile birlikte görüldüklerinde multiple (çoklu) karakterde ortaya çıkabilirler. Nevoid bazal hücreli karsinom sendromu multiple Keratokistik Odontojenik Tümör (KOT) ile ilişkili iken, basit kemik kistleri bu sendromun bir parçası değildir. Sementoosseöz displazi dokusunun yarattığı lokal kemik hemodinamik değişimlerin veya bağ dokusu stroma reaksiyonunun bu çoklu psödokist boşluklarının oluşumunu tetiklediği düşünülmektedir.

**Soru 2 (ID: ecfc385f-86a1-4740-a3b9-f4a00882cfb3)**
Soru Kökü: Otuz altı yaşındaki kadın hastanın üst çene anterior bölgesinde, sürmemiş maksiller kanin dişiyle ilişkili ve dişi erüpsiyondan alıkoyan iyi sınırlı bir lezyon tespit edilmiştir. Lezyonun internal yapısında küçük düzgün çakıl taşları şeklinde belirgin radyoopak odaklar mevcuttur. Bu hastadaki **en olası** tanı aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsifiye kistik odontojenik tümör (Gorlin Kisti)
Açıklama: Kalsifiye kistik odontojenik tümör, ortalama 30'lu yaşlarda görülen, özellikle insizör-kanin bölgesinde yerleşerek diş sürmesini engelleyen ve radyografik olarak internal beyaz benekler/çakıl taşları şeklinde distrofik kalsifikasyonlar sunan bir lezyondur. Glandüler kistte kalsifikasyon beklenmez; sementoblastoma ise vital dişin apeksine yapışık kök rezorpsiyonu ile karakterizedir.

---

### ÇİFT 76 (Benzerlik: 0.70)

**Soru 1 (ID: 0cd24602-c0de-413d-9da6-45e53ae9e316)**
Soru Kökü: Çenelerde kist ve tümör benzeri oluşumların klinik ve radyografik özellikleriyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Basit kemik kistinin en ayırıcı radyografik özelliği belirgin bir kortikal ekspansiyona neden olmasıdır.
Açıklama: Basit kemik kistleri, kemik içinde fibröz dokunun boşluk bırakmasıyla karakterize kist benzeri kavitelerdir ve KOT'lar gibi kemiğin uzun ekseninde yayıldıkları için genellikle ekspansiyon yapmazlar. Aksine, dentijeröz kistler veya cherubism gibi durumlar belirgin ekspansiyona neden olur. SBC'lerin minimal klinik belirti vermesi ve korteksi dışarı itmemesi temel tanı kriterlerinden biridir.

**Soru 2 (ID: 5362de49-64ab-46ec-9b07-bf505ea15c06)**
Soru Kökü: Lateral periodontal kistin genel ve demografik özellikleriyle ilgili olarak aşağıdaki klinik/radyolojik ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Sert damak anteriorunda nazal spinanın süperpozisyonu ile kalp şeklinde görülür.
Açıklama: Sert damak anteriorunda santral kesicilerin arasında nazal spinanın gölgesi ile 'kalp şeklinde' görülen lezyon lateral periodontal kist değil, nazopalatin kanal kistidir (insiziv kanal kisti). Lateral periodontal kist mandibulada lateral-premolar bölgesine lokalize yuvarlak veya oval radyolüsensi şeklindedir ve dişlerin lamina durasını silebilir.

---

### ÇİFT 77 (Benzerlik: 0.70)

**Soru 1 (ID: d17d2cb1-58e2-41ed-a0bb-6256deb0b659)**
Soru Kökü: Multiple keratokistik odontojenik tümörlerin karakterize ettiği Bazal Hücreli Nevus Sendromunda (Gorlin Sendromu) izlenen tipik deri lezyonları aşağıdakilerden hangisidir?
Doğru Şık (B): Özellikle yüz, boyun ve gövdede ten rengi/kahverengi papüller (bazal hücreli karsinomlar)
Açıklama: Bazal hücreli nevus sendromunun dermatolojik kardinal bulgusu; vücudun her yerinde olabilen ancak bilhassa yüz, boyun ve gövdede göze çarpan küçük, düz, ten rengi veya kahverengi papüllerdir. Hayatın ilerleyen evrelerinde bu masum görünümlü lezyonlar bazal hücreli karsinomlara dönüşüm gösterir. Oral mukozadaki melanin pigmentasyonları (Peutz-Jeghers vb.) bu sendromun bir parçası değildir.

**Soru 2 (ID: d9137d0f-aa1b-45b8-95e7-26a938650a4c)**
Soru Kökü: On dokuz yaşındaki erkek hasta çenelerinde ağrısız şişlik şikayetiyle başvurmuş olup, panoramik radyografisinde bilateral multiple KOT varlığı saptanmıştır. Ortodontik ve ortopedik konsültasyonlar neticesinde hastaya Bazal Hücreli Nevus Sendromu (Gorlin Sendromu) tanısı konmuştur. Bu hastanın iskelet sisteminde en olası ve sık saptanan patolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Bifid kaburga ve kostal deformiteler
Açıklama: Bazal hücreli nevus sendromunun iskeletsel anomalileri arasında en yaygın görüleni 'bifid kaburga' (kaburganın çatallanması) deformitesidir. Buna ek olarak agenezi, kifoskolyoz, vertebral füzyon ve metakarpallarda kısalma gibi diğer kemik bulguları da izlenebilir. Klavikula agenezisi Kleidotokraniyal Displazinin, pamuk atığı görüntüsü ise Paget hastalığının karakteristik bulgularıdır.

---

### ÇİFT 78 (Benzerlik: 0.70)

**Soru 1 (ID: eb70b5c5-f04e-4221-9f6d-f8000c6f86e3)**
Soru Kökü: Gelişimsel süreçlerde mandibular kanal (inferior alveoler sinir) komşuluğu anatomik sınıflama için bir bariyerdir. Aşağıdaki lezyonlardan hangisi mandibulada radyografik olarak saptandığında, lezyonun merkezi inferior alveoler sinir kanalının **altında** kalır?
Doğru Şık (D): Stafne (Lingual tükrük bezi) depresyonu
Açıklama: Stafne depresyonu gelişim sırasında submandibular veya sublingual tükrük bezi dokusunun mandibular korteks üzerinde oluşturduğu fizyolojik bir baskı çukurudur ve klasik lokalizasyonu angulusun hemen önü ile inferior alveoler kanalın ALTI'dır. Odontojenik kistler (radiküler, rezidüel, KOT) kökenlerini diş embriyolojisinden aldıkları için mandibulada daima alveolar krette, yani inferior alveoler kanalın ÜSTÜNDE yerleşmek zorundadırlar.

**Soru 2 (ID: fd1844d8-a7c9-446e-98d2-812bc063294c)**
Soru Kökü: Altmış yaşındaki kadın hastanın panoramik radyografisinde, sol inferior alveolar sinir kanalının altında ve mandibula açısının hemen önünde, sınırları belirgin, yuvarlak bir radyolüsensi saptanmıştır. BT incelemesinde bu defektin içinin yağ dansitesine sahip doku ile dolu olduğu ve lingual kortekste incelme yarattığı görülmüştür. Bu lezyon için uygulanması gereken en uygun tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (E): Hiçbir cerrahi müdahaleye gerek yoktur, takibi yeterlidir
Açıklama: Tarif edilen lezyon Stafne idiyopatik kemik kavitesidir (lingual tükrük bezi depresyonu). Submandibuler bezin veya yağ dokusunun mandibula lingual korteksinde oluşturduğu gelişimsel bir depresyondur. BT'de yağ/glandüler doku dansitesi izlenmesi teşhisi kesinleştirir ve bu fizyolojik bir varyasyon olduğu için patolojik bir süreç işlemez; dolayısıyla cerrahi veya medikal bir tedavi gerekmez.

---

### ÇİFT 79 (Benzerlik: 0.70)

**Soru 1 (ID: 11dc2aa0-7747-4de2-8dd8-9fb8ef297b27)**
Soru Kökü: 34 yaşındaki kadın hasta, üst dudağın sağ tarafında ve burun kanadında yukarı doğru şişlik şikayetiyle başvuruyor. Yüz simetrisinin bozulduğu, burun deliğinin genişlediği ancak ağız içi dişlerin tamamen sağlıklı ve vital olduğu saptanıyor. Klinisyen hastayı değerlendirirken bu kistin sekonder olarak enfekte olması durumunda en fazla hangi akut tablo ile karışabileceğini düşünmelidir?
Doğru Şık (A): Akut dentoalveoler apse
Açıklama: Nazolabial kistler maksiller vestibülde (kanin-lateral bölgesinin üzerinde) şişlik yarattığından, eğer mikrobiyal olarak enfekte olurlarsa mukozada apse benzeri flüktüasyon ve şiddetli inflamasyon gösterirler. Bu dışsal (ekstraoral ve vestibüler) tablo, santral/lateral kesici veya kanin dişlerinden kaynaklanan akut bir dentoalveoler (periapikal) apsenin kliniği ile birebir örtüşür ve vitalite testleri yapılmadan yanlış dişe endodonti uygulanmasına yol açabilir.

**Soru 2 (ID: c96de0a9-ad27-4802-8238-022d92a1a734)**
Soru Kökü: 34 yaşında erkek hasta, damak ön bölgesinde hafif şişlik ve ara sıra tuzlu bir tat algısı şikayetiyle başvuruyor. Klinik muayenede palatin papillanın hemen posteriorunda küçük, maviye çalan flüktüan bir şişlik izleniyor. İlgili santral kesici dişlerin vitalite testleri pozitif bulunuyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kisti, insisiv kanalda epitel artıklarından gelişir ve sıvının ağız içine drene olması nedeniyle hastada tuzlu tat hissi yaratır; palatin papilla arkasında şişlik oluşturur. Santral kesicilerin apikalinde yerleşip kalp şeklinde görünebilirse de, bu dişlerin vital kalması radiküler kist seçeneğini ekarte ettirir. Bu topografik ve klinik triyad (lokasyon, vitalite, tuzlu tat) nazopalatin kiste özgüdür.

---

### ÇİFT 80 (Benzerlik: 0.70)

**Soru 1 (ID: 18620d3d-b337-4961-84d5-0eea71621e26)**
Soru Kökü: Kırk beş yaşında erkek hasta travma öyküsü olan 21 numaralı diş bölgesinde şişlik şikayetiyle başvurmuştur. Diş kronu renkleşmiş olup vitalite testine negatif yanıt vermiştir. Panoramik grafide kök ucunda 2.5 cm çapında, yuvarlak şekilli, belirgin kortikal sınırlı bir radyolüsensi saptanmıştır. Köklerde hafif rezorpsiyon izlenmektedir. Bu vakadaki en olası tanı ve onu diğer benzer lezyonlardan ayıran spesifik radyografik bulgu eşleşmesi aşağıdakilerden hangisinde en doğru verilmiştir?
Doğru Şık (E): Radiküler kist - 2 cm'den büyük, iyi sınırlı yuvarlak kavite ve devital diş
Açıklama: Devital bir dişin apeksindeki radyolüsensi granülom veya kist olabilir. Ancak lezyonun yuvarlak şekli, çok belirgin kortikal sınırı ve 2 cm'den büyük boyutu radiküler kist için patognomoniktir. Granülomlar nadiren bu kadar büyük ve mükemmel kortikal sınırlı olurlar.

**Soru 2 (ID: bdddb24c-a74b-4346-aeb9-338c41174437)**
Soru Kökü: Yirmi iki yaşında kadın hasta mandibula sol posterior bölgesinde hafif asimetri şikayetiyle kliniğe başvurmuştur. Radyografide 38 numaralı gömülü dişi çevreleyen ve ramusa doğru uzanan geniş bir radyolüsensi tespit edilmiştir. Kistik dış sınırın, ilgili gömülü dişin mine-sement birleşimine (CEJ) değil, kök üzerinden daha apikale tutunduğu ve kortikal plakta şiddetli ekspansiyon olmadığı izlenmiştir. Bu radyolojik bulgular öncelikle aşağıdaki lezyonlardan hangisini düşündürmelidir?
Doğru Şık (C): Keratokistik odontojenik tümör
Açıklama: Perikoronal pozisyonda bulunan bir radyolüsenside, kistik tutunma CEJ hizasında değil de kökün daha apikaline doğru iniyorsa ve beklenen yüksek kortikal ekspansiyon yoksa (dentijeröz kistin aksine), tanı büyük ihtimalle Keratokistik Odontojenik Tümördür (KOT). Bu özellik KOT ile dentijeröz kisti ayırmadaki en güçlü klinik-radyolojik veridir.

---

### ÇİFT 81 (Benzerlik: 0.69)

**Soru 1 (ID: 10868ab5-8f69-440e-b5b4-fdd52724687f)**
Soru Kökü: Keratokistik odontojenik tümörlerin (KOT) çenelerdeki anatomik dağılımı incelendiğinde, bu lezyonun istatistiksel olarak en yaygın bulunduğu lokasyon aşağıdakilerden hangisidir?
Doğru Şık (E): Mandibulanın posterioru ve ramus
Açıklama: KOT'ların en sık yerleştiği alan (%60-80 oranında) mandibulanın posterioru, angulusu ve ramus bölgeleridir. Maksilla anterior bölgede daha çok radiküler veya dentijeröz (mesiodens ilişkili) kistler görülürken, ramus bölgesinde tünel şeklinde büyüyen büyük radyolüsensiler her zaman ilk olarak KOT şüphesi yaratır.

**Soru 2 (ID: 953a73c7-4863-4a6a-b736-cc472a1332c3)**
Soru Kökü: Çenelerde en sık izlenen kist tipi olan radiküler kistlerin radyolojik ve anatomik lokalizasyonu değerlendirildiğinde, en karakteristik tutulum bölgesi aşağıdakilerden hangisidir?
Doğru Şık (C): Maksillada özellikle kesici ve kaninlerin çevresi
Açıklama: Radiküler kistler en sık maksillada, özellikle kesici ve kanin dişlerin çevresinde lokalize olurlar. Mandibula posterior bölge daha çok keratokistik odontojenik tümörlerin (KOT) ve basit kemik kistlerinin favori yerleşkesidir. Maksiller anterior bölgenin anatomik yapısı ve travmaya açıklığı bu kistlerin bu alanda daha sık görülmesine zemin hazırlar.

---

### ÇİFT 82 (Benzerlik: 0.69)

**Soru 1 (ID: 764e1ec7-edb5-4b56-90f4-674f4d276351)**
Soru Kökü: Yirmi beş yaşındaki erkek hasta, maksillada giderek büyüyen ve hafif fasiyal asimetriye neden olan ağrısız şişlik şikayetiyle başvurmaktadır. Alınan radyografik kesitlerde, maksiller antruma invajine olarak tüm sinüs boşluğunu dolduran multiloküler, ekspansif görünümlü bir radyolüsensi saptanmıştır. Minimal kemik ekspansiyonu yaparak tünel formunda büyüyen bu kistin en olası tanısı aşağıdakilerden hangisidir?
Doğru Şık (A): Keratokistik odontojenik tümör
Açıklama: Keratokistik odontojenik tümör (KOT), çenelerin internal yönü boyunca tünel şeklinde büyüme eğilimindedir ve maksillada yerleştiğinde maksiller antruma invajine olarak bütün maksiller sinüsü doldurabilme kapasitesine sahiptir. Dentijeröz kistler perikoronal alanda izole kalıp daha uniform ekspansiyon yaparken, KOT sinüs boşluğu gibi anatomik boşluklara güçlü penetrasyon gösterir. BT kesitlerinde sinüsü dolduran multiloküler radyolüsensi, KOT için yüksek prediktif değere sahip bir bulgudur.

**Soru 2 (ID: f4f02f15-26db-4582-a7db-25f421924a92)**
Soru Kökü: Otuz beş yaşındaki erkek hasta, ara sıra ağzında tuzlu bir tat hissettiğini ve sert damağının ön kısmından bir akıntı geldiğini fark ederek başvurmuştur. Alınan periapikal radyografide; maksiller iki santral dişin apikalinde, nazal spina gölgesiyle süperpoze olmuş kalp formunda net sınırlı bir radyolüsensi saptanmıştır. İnflamatuar kaynak ekarte edildiğine göre, hastanın tuzlu tat almasına neden olan kistik yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Nazopalatin kanal kisti
Açıklama: Nazopalatin kanal kistinin intraoral sinüs yolu vasıtasıyla veya direkt nazopalatin kanal açıklığı boyunca drene olması, hastaların klinikte spontan sıvı gelişi ve 'tuzlu tat' tarif etmesine sebep olur. Kalp şeklindeki radyolojik görünüm, maksiller anterior (kesici) apikali orta hattı ile nazal anterior spinanın gölgelerinin birleşmesinden ortaya çıkan bu kistin diagnostik çapa bulgusudur.

---

### ÇİFT 83 (Benzerlik: 0.69)

**Soru 1 (ID: ca9f1900-d085-42d4-8a43-8c75bdb3329f)**
Soru Kökü: Çene kistlerinin radyografik ve mikroskopik görünümleri tanılamada önemlidir. Genellikle mandibular lateral kesiciden ikinci premolara kadar olan bölgede vital dişler arasında lokalize olan, multiloküler bir yapı sergilediğinde spesifik olarak 'Botryoid' ismini alan kist hangisidir?
Doğru Şık (B): Lateral periodontal kist
Açıklama: Lateral periodontal kistler genellikle 1 cm'den küçük, uniloküler ve diş kökleri arasında vital dokuda yerleşen asemptomatik lezyonlardır; bu kistlerin radyografik ve makroskopik olarak üzüm salkımı benzeri (multiloküler) büyüme gösteren nadir varyantına Botryoid kist adı verilir. Glandular odontojenik kistler de multiloküler olabilir ancak spesifik 'Botryoid' isimlendirmesi sadece lateral periodontal kistin multiloküler formuna aittir.

**Soru 2 (ID: f38be487-9378-4504-8a0f-dc77fc9c097f)**
Soru Kökü: Aşağıdaki çene kistlerinden hangisi karakteristik olarak anterior mandibulayı veya globulomaksiller bölgeyi tutan, histolojik olarak mukus üreten hücreler içerdiği için radyolojik ayırıcı tanısında santral mukoepidermoid karsinomun mutlaka bulundurulması gereken agresif karakterli kisttir?
Doğru Şık (C): Glandüler odontojenik kist
Açıklama: Glandüler odontojenik kist, siliyer hücreler ve mukus göllenmeleri içeren spesifik histolojisiyle santral mukoepidermoid karsinoma benzerlik gösteren, agresif seyirli ve nüks oranı yüksek bir gelişimsel kisttir. Radyografik olarak sıklıkla multiloküler görünümdedir ve dişlerde yer değiştirmeye sebep olur; enükleasyon tek başına yetersiz kalabilir ve rezeksiyon gerektirebilir.

---

### ÇİFT 84 (Benzerlik: 0.69)

**Soru 1 (ID: 00313ada-6186-4958-b954-55f80ab94c35)**
Soru Kökü: Elli iki yaşındaki kadın hasta, alt çene sağ yanal kesici ile kanin dişi arasındaki bölgede lokalize ağrılı bir şişlik şikayetiyle gelmiştir. İlgili dişlere uygulanan soğuk ve elektrikli pulpa testleri pozitif (vital) sonuç vermiştir. Hastanın kliniği sekonder olarak enfekte olmuş bir lateral periodontal kist ile uyumluysa, bu tablo fiziksel muayenede en çok aşağıdaki hastalıklardan hangisini taklit eder?
Doğru Şık (D): Lateral periodontal apse
Açıklama: Asemptomatik olan lateral periodontal kistler sekonder olarak enfekte olduklarında klinik olarak lateral periodontal apseyi birebir taklit ederler. Akut apikal apseden (kök ucu patolojisi) ayrımı ilgili dişlerin vitalitesinin pozitif olmasıyla, normal periodontal apseden ayrımı ise sondlamada derin bir cep yerine gerçek bir kavitenin (kistin) varlığıyla yapılır. Fokal osteoporotik kemik iliği ise kemik defektidir, ağrılı apse formu yoktur.

**Soru 2 (ID: ec7782e2-a006-49d0-ab0b-9c1588e22cce)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, anterior maksillada rutin radyografik inceleme sırasında sol üst lateral kesici dişinin apekste sınırları belirgin, yuvarlak bir radyolüsensi ile başvurmuştur. Dişin kronunda geniş bir kompozit restorasyon mevcuttur ve diş vitalite testine negatif yanıt vermiştir. Hastanın anemnezinde herhangi bir şikayet bildirilmemektedir. Bu klinik senaryoda radiküler kist ön tanısı ile değerlendirilen dişte aşağıdaki bulgulardan hangisinin görülmesi **en az olasıdır**?
Doğru Şık (E): Etkilenen dişte perküsyonda şiddetli hassasiyet
Açıklama: Radiküler kistler pulpa nekrozu sonucu gelişen inflamatuar kistler olup sekonder enfeksiyon gelişmedikçe karakteristik olarak asemptomatiktirler ve dişte perküsyon hassasiyeti izlenmez. Akut periapikal abse formasyonuna dönüşen veya sekonder enfekte olan vakalar dışında perküsyon pozitifliği ayırıcı tanıda ekarte edici bir bulgudur. Diğer şıklar (kök rezorpsiyonu, ekspansiyon, 2 cm'den büyük boyut ve belirgin kortikal sınır) radiküler kistin doğal büyüme paterni ve radyografik özellikleriyle birebir uyumludur.

---

### ÇİFT 85 (Benzerlik: 0.69)

**Soru 1 (ID: 0cd24602-c0de-413d-9da6-45e53ae9e316)**
Soru Kökü: Çenelerde kist ve tümör benzeri oluşumların klinik ve radyografik özellikleriyle ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Basit kemik kistinin en ayırıcı radyografik özelliği belirgin bir kortikal ekspansiyona neden olmasıdır.
Açıklama: Basit kemik kistleri, kemik içinde fibröz dokunun boşluk bırakmasıyla karakterize kist benzeri kavitelerdir ve KOT'lar gibi kemiğin uzun ekseninde yayıldıkları için genellikle ekspansiyon yapmazlar. Aksine, dentijeröz kistler veya cherubism gibi durumlar belirgin ekspansiyona neden olur. SBC'lerin minimal klinik belirti vermesi ve korteksi dışarı itmemesi temel tanı kriterlerinden biridir.

**Soru 2 (ID: 964276d6-42af-43ca-a03c-1aa6a029b70e)**
Soru Kökü: Çene ve yüz bölgesi kistleriyle ilgili aşağıdaki eşleştirmelerden hangisi klinik-radyolojik olarak **en az olasıdır** (uyumsuzdur)?
Doğru Şık (A): Nazolabial kist - Radyografik homojen radyolüsensi ve internal yapıda kalsifikasyonlar
Açıklama: Nazolabial kist, alveolar kemiğin dışında labial mukozada gelişen yumuşak doku kökenli bir epiteliyal kisttir. Kemiğin içine girmez, sadece dış kortekste baskı erozyonu yapabilir ve hiçbir zaman internal radyoopak kalsifikasyonlar barındırmaz. Kalsifikasyonlar tipik olarak CCOT veya adenomatoid tümörlerde görülür. Diğer şıklarda eşleştirilen patolojik özellikler lezyonların tanısal standartlarıdır.

---

### ÇİFT 86 (Benzerlik: 0.69)

**Soru 1 (ID: b72542e4-3ce6-4eb6-bce1-12b8a022c964)**
Soru Kökü: Cerrahi olarak çenelerden ekstirpe edilen ve mikroskopik değerlendirmesi Keratokistik Odontojenik Tümör (KOT) olarak raporlanan lezyonlar uzun yıllar takip edilmelidir. Nadir olmakla birlikte KOT kist epitelinden malignite gelişimi görüldüğünde, epitel kökenli bu lezyon en sık hangi karsinoma türüne dönüşür?
Doğru Şık (B): Skuamöz hücreli karsinom
Açıklama: Keratokistik odontojenik tümör, skuamöz odontojenik epitelden köken alır ve bu nedenle malign transformasyon geçirdiğinde en sık skuamöz hücreli karsinoma (SCC) dönüşür. Bu dönüşüm PET/BT incelemelerinde yoğun FDG (fluorodeoksiglukoz) hipermetabolizması ile kendini gösterir. Mukoepidermoid karsinom genellikle mukoza veya tükrük bezi kökenliyken, sarkomlar mezenkimal doku yıkımlarından oluşur.

**Soru 2 (ID: f46f98f0-e9b0-4047-8d8c-4cb4fff40d8a)**
Soru Kökü: Mandibula posterior bölgede multiloküler radyolüsent lezyonu olan 40 yaşındaki bir hastada biyopsi sonucu keratokistik odontojenik tümör (KOT) olarak rapor edilmiştir. İleri görüntüleme amacıyla çekilen PET/BT'de lezyon bölgesinde yoğun FDG (Florodeoksiglukoz) hipermetabolizması saptanmıştır. Bu bulgunun varlığı öncelikli olarak aşağıdakilerden hangisini düşündürmelidir?
Doğru Şık (B): Lezyonda skuamöz hücreli karsinoma malign transformasyon geliştiğini
Açıklama: PET/BT'de yoğun FDG tutulumu, artmış hücresel glikoliz metabolizmasına işaret eder ve KOT zemininde nadir görülen skuamöz hücreli karsinoma (SCC) malign transformasyonunu gösteren tipik bir radyolojik bulgudur. Benign KOT veya sekonder enfeksiyonlarda bu denli yoğun ve fokal bir hipermetabolizma izlenmez; bu bulgu malignite şüphesiyle radikal rezeksiyon planlamasını gerektirir.

---

### ÇİFT 87 (Benzerlik: 0.69)

**Soru 1 (ID: 1972cd30-554d-4fff-8258-c485cf8e41a7)**
Soru Kökü: Odontojenik enfeksiyon kaynaklı olmayan, 50 yaşlarında dişsiz mandibulaya sahip bir kadının posterior mandibular bölgesinde, sınırları belirsiz veya zayıf kalsifikasyonlar içeren litik radyolüsent alan saptanmıştır. Çevreleyen kemikte inflamatuar reaksiyon yoktur. Histolojik incelemesinde normal ilik dokusu saptanan bu lezyonun tanısı aşağıdakilerden hangisidir?
Doğru Şık (C): Fokal osteoporotik kemik iliği
Açıklama: Fokal osteoporotik kemik iliği defekti, özellikle orta yaşlı dişsiz kadınların alt çene arka bölgesinde görülen, enfeksiyöz (osteomyelit) veya neoplastik bir tabiatı olmayan, sadece ilik adacıklarının kemikte litik/radyolüsent bir alan gibi görüldüğü varyasyondur. Kesin tanısı radyografiyle her zaman anlaşılamayıp biyopside normal kemik iliği çıkması ile konur; tedavi gerektirmeyen self-limiting (kendi kendini sınırlayan) bir durumdur.

**Soru 2 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

---

### ÇİFT 88 (Benzerlik: 0.69)

**Soru 1 (ID: a65a6e01-fed5-4ede-9274-72f53086cbac)**
Soru Kökü: Kırk beş yaşında kadın hasta alt çenede hafif şişlik şikayetiyle başvurmuştur. Alınan anamnezde lezyon bölgesindeki dişin yıllar önce çekildiği öğrenilmiştir. Panoramik radyografide, merkezi mandibular kanalın üzerinde yer alan, iyi kortikal sınırlı, oval şekilli ve dış kortikal plakta ekspansiyon yapmış bir radyolüsensi saptanmıştır. Rezidüel kist ön tanısı alan bu lezyon için endike olan birincil tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (C): Cerrahi olarak çıkarılma ya da kist çok büyükse marsüpyalizasyon
Açıklama: Rezidüel kistlerin tedavisi cerrahi çıkarılma (enükleasyon) ya da kist aşırı büyükse her iki yöntemin (marsüpyalizasyon ve takiben enükleasyon) kombine uygulanmasıdır. Dişsiz bölgede yer almaları agresif rezeksiyon gerektirmez, ayrıca komşu vital dişlerin profilaktik kanal tedavisine de ihtiyaç yoktur.

**Soru 2 (ID: ac46cad2-3503-41b2-8c39-bed3ef470de7)**
Soru Kökü: Radiküler kist tanısı almış bir dişin başarılı bir şekilde tedavi edilebilmesi için planlanacak protokol;

I. İlgili dişin çekimi
II. Etkilenen dişin endodontik tedavisi
III. Büyük kistlerde marsüpyalizasyon

uygulamalarından hangilerini vakanın durumuna göre içerebilir?
Doğru Şık (E): I, II ve III
Açıklama: Radiküler kist tedavisi vakanın boyutuna ve dişin restoratif durumuna göre esneklik gösterir; tedavi çekim, endodontik tedavi ve apikal cerrahiyi içerebilir. İlgili diş restore edilemeyecek durumdaysa kist ile birlikte çekilir; kurtarılabiliyorsa endodontik tedavi yapılır. Büyük radiküler kistlerin tedavisi genellikle cerrahi alınım ya da marsüpyalizasyondur.

---

### ÇİFT 89 (Benzerlik: 0.69)

**Soru 1 (ID: 3b5e9e5a-8228-4f20-b713-9fd52fbf4ea8)**
Soru Kökü: 48 yaşında kadın hasta, anterior mandibulada orta hattı geçen geniş ekspansif lezyonla başvuruyor. Radyografik değerlendirmede düz ve yer yer dilimli kortikal sınıra sahip multiloküler bir yapı izleniyor. Biyopsi sonucu agresif davranışlı ve yüksek rekürrens oranlı nadir bir odontojenik kist tanısı doğruluyor. Klinik tabloya uyan en olası lezyon aşağıdakilerden hangisidir?
Doğru Şık (C): Glandular odontojenik kist
Açıklama: Glandular odontojenik kist (GOC), sıklıkla orta yaş grubunda (46-50 yaş) anterior mandibulada veya maksillada globulomaksiller bölgede görülen, yüksek rekürrens oranına ve multiloküler radyografik görünüme sahip agresif bir lezyondur. Lateral periodontal kist ve basit kemik kistinin nüks oranı yok denecek kadar azdır; KOT ise daha çok posterior mandibula ve ramus bölgesini tercih eder. Anatomik yerleşim ve agresyon düzeyi GOC tanısını öne çıkarır.

**Soru 2 (ID: b8fd0e55-e2ca-4e48-a90c-4af8eca7bd33)**
Soru Kökü: Odontojenik tümör ve kistlerin internal yapıları radyolüsensi/radyoopasite açısından farklılık gösterir. Maksiller kanin bölgesinde lokalize, perikoronal pozisyonda gelişen, sürmeyi engelleyen ve radyografik olarak içinde beyaz benekler veya çakıl taşına benzer kalsifiye odakları bulunduran lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Kalsifiye kistik odontojenik tümör
Açıklama: Kalsifiye kistik odontojenik tümör (CCOT), %50 oranında diş sürmesini engelleyerek perikoronal yerleşim gösterir (özellikle kanin bölgesi) ve internal yapısında karakteristik amorf kalsifiye beyaz benekler veya odakçıklar (radyoopasite) barındırır. Dentijeröz kist de perikoronal yerleşimlidir ancak kalsifikasyon içermez, KOT ve Ameloblastoma ise pür radyolüsent (sıklıkla multiloküler) boşluklardan oluşur. Kalsifikasyon varlığı CCOT için patognomonik bir ipucudur.

---

### ÇİFT 90 (Benzerlik: 0.69)

**Soru 1 (ID: 54d1b6d2-0892-4185-9869-db4383048974)**
Soru Kökü: Otuz iki yaşındaki bir hastada rutin panoramik muayenede sürmemiş mandibular yirmi yaş dişi etrafında bir radyolüsensi fark edilmiştir. Ayırıcı tanıda kistik ameloblastoma ve dentijeröz kist düşünülmektedir. Bu iki lezyonu radyolojik olarak birbirinden ayırmayı imkansız kılabilecek temel faktör aşağıdakilerden hangisidir?
Doğru Şık (B): Kistik ameloblastomanın erken evrelerinde küçük tek odacıklı (uniloküler) bir perikoronal görünüm verebilmesi
Açıklama: Dentijeröz kist her zaman mine sement birleşimine tutunan uniloküler bir radyolüsensidir. Unikistik ameloblastoma veya kistik ameloblastoma erken evrelerde dentijeröz kist ile birebir aynı uniloküler ve perikoronal radyografik paterni çizebilir; bu durumda iki lezyonu radyografik olarak ayırt etmek imkansız hale gelir, kesin tanı yalnızca histopatolojik inceleme ile konur.

**Soru 2 (ID: b8fd0e55-e2ca-4e48-a90c-4af8eca7bd33)**
Soru Kökü: Odontojenik tümör ve kistlerin internal yapıları radyolüsensi/radyoopasite açısından farklılık gösterir. Maksiller kanin bölgesinde lokalize, perikoronal pozisyonda gelişen, sürmeyi engelleyen ve radyografik olarak içinde beyaz benekler veya çakıl taşına benzer kalsifiye odakları bulunduran lezyon aşağıdakilerden hangisidir?
Doğru Şık (D): Kalsifiye kistik odontojenik tümör
Açıklama: Kalsifiye kistik odontojenik tümör (CCOT), %50 oranında diş sürmesini engelleyerek perikoronal yerleşim gösterir (özellikle kanin bölgesi) ve internal yapısında karakteristik amorf kalsifiye beyaz benekler veya odakçıklar (radyoopasite) barındırır. Dentijeröz kist de perikoronal yerleşimlidir ancak kalsifikasyon içermez, KOT ve Ameloblastoma ise pür radyolüsent (sıklıkla multiloküler) boşluklardan oluşur. Kalsifikasyon varlığı CCOT için patognomonik bir ipucudur.

---

