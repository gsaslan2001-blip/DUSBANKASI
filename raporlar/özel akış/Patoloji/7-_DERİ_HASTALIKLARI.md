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

**Soru 1 (ID: aca5d08d-f68e-47a7-9ee2-66358149dfb7)**
Soru Kökü: Bazal hücreli karsinom (BCC) en sık görülen deri kanseridir ve kendine has büyüme karakterleri barındırır. Bu lezyonun biyolojik ve lokalizasyon özellikleri göz önüne alındığında aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Sıklıkla kıl folikülü bulunmayan mukozal alanlardan köken alması tipiktir.
Açıklama: Bazal hücreli karsinom (BCC) kıl folikülü ünitesinden/plakodlarından köken alır. Bu nedenle, kıl folikülü içermeyen dudak mukozası veya genital mukoza gibi bölgelerde kesinlikle görülmez. Mukoza tutulumu, SCC'yi BCC'den ayıran en kritik anatomik kısıtlamadır. Diğer tüm özellikler (palizadik dizilim, rodent ülser, telenjiektazi) BCC'nin klinik imzasıdır.

**Soru 2 (ID: b8caeed9-b556-4682-8080-f8c0343e0e4f)**
Soru Kökü: Bazal hücreli karsinom (BCC) ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Tükürük bezi ve oral mukoza gibi kıl folikülü bulunmayan bölgelerde de sık gelişir.
Açıklama: Bazal hücreli karsinom, kıl folikülü aparatından kaynaklandığı için kıl folikülü bulunmayan alanlarda (örneğin oral mukozal membranlar, dudak kırmızı çizgisi hariç ağız içi) görülmez. Bu özellik onun klinik olarak ağız içi skuamöz karsinomlarından ayrılmasını sağlayan en majör farklılıklardandır.

---

### ÇİFT 2 (Benzerlik: 0.84)

**Soru 1 (ID: 4713683c-f24f-483c-9363-5e0cddacdd61)**
Soru Kökü: Altmış beş yaşındaki erkek hastanın sırt bölgesinde aniden çok sayıda koyu kahverengi seboreik keratoz lezyonları ortaya çıkmıştır. Hastanın eş zamanlı yapılan endoskopisinde gastrik karsinom tespit edilmiştir. Leser-Trélat bulgusu olarak adlandırılan bu paraneoplastik cilt reaksiyonunun altındaki mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Karsinom kökenli TGF-alfa salınımındaki aşırı artış
Açıklama: Leser-Trélat bulgusu, özellikle gastrointestinal sistem karsinomlarından aşırı miktarda salınan dönüştürücü büyüme faktörü alfa (TGF-alfa) uyarısıyla cildin epidermal hücrelerinin hiperplaziye gitmesi ve çok sayıda seboreik keratoz oluşmasıdır. FGFR3 mutasyonu sporadik seboreik keratozda varken, bu paraneoplastik formda karsinom kaynaklı büyüme faktörü sağanağı (TGF-alfa) etkilidir.

**Soru 2 (ID: b3fe3177-0930-4d77-b015-01b87922c21e)**
Soru Kökü: 68 yaşında erkek hasta, son aylarda izah edilemeyen kilo kaybı ve mide ağrısı yaşamaktadır. Eş zamanlı olarak sırt bölgesinde aniden çok sayıda, koyu kahverengi, yüzeye yapışmış gibi duran papüller ortaya çıkmıştır. Yapılan incelemede papüllerin invajinasyon kistleri içeren seboreik keratoz olduğu anlaşılır. Bu paraneoplastik cilt döküntüsünden (Leser-Trelat bulgusu) sorumlu primer mediyatör aşağıdakilerden hangisidir?
Doğru Şık (C): Transforme edici büyüme faktörü alfa (TGF-α)
Açıklama: Leser-Trelat bulgusu, özellikle gastrointestinal sistem adenokarsinomlarının salgıladığı TGF-α (Transforme edici büyüme faktörü alfa) miktarındaki artışın epidermisi stimüle ederek patlayıcı tarzda çok sayıda seboreik keratoz oluşturmasıdır. Normal (sporadik) seboreik keratozlarda FGFR3 mutasyonu sıkken, bu paraneoplastik sendromda tetikleyici sistemik TGF-α'dır.

---

### ÇİFT 3 (Benzerlik: 0.82)

**Soru 1 (ID: 1f13e030-6aed-4544-8bf4-3345b186292c)**
Soru Kökü: Malign melanom, melanositlerden gelişen ve agressif seyredebilen bir tümördür. Aşağıdakilerden hangisi malign melanomun progresyonunda izlenen iyi prognostik faktörlerden biri **değildir**?
Doğru Şık (D): Hücresel mitoz sayısının 1/mm²'den fazla olması
Açıklama: Malign melanomda mitoz sayısının 1/mm²'den az (<1/mm²) olması iyi prognoz kriteridir; 1'den fazla olması ise kötü prognozu işaret eder. En güçlü distraktör olan regresyon yokluğu çeldiricidir; çünkü melanomda kendi kendine regresyon oluşması tümörün daha derin katmanlara immün kaçış geliştirdiğinin dolaylı bir kanıtı olduğundan, regresyon 'yokluğu' iyi bir faktördür. Derinlik (Breslow) en kritik bağımsız faktördür.

**Soru 2 (ID: 27d1ced0-f623-417b-adf6-4952f6d27ecd)**
Soru Kökü: Malign melanomda tümör biyopsisinin değerlendirilmesinde aşağıdaki histolojik özelliklerden hangisi iyi prognoz göstergelerinden biri **değildir**?
Doğru Şık (D): Tümör üzerindeki deride ülserasyon varlığı
Açıklama: Malign melanomda ülserasyonun varlığı, tümörün biyolojik olarak agresifleştiğini ve epidermisi destrükte edecek kadar hızlı büyüdüğünü gösteren kötü prognostik bir faktördür. Ülserasyon olmaması iyi prognoz işaretidir. Lenfosit infiltrasyonunun yüksek olması (immün yanıt) ve mitoz sayısının düşüklüğü ise olumlu gidişatı yansıtır.

---

### ÇİFT 4 (Benzerlik: 0.78)

**Soru 1 (ID: 65e5b614-8d02-4995-8281-c2d9ca7c5a7a)**
Soru Kökü: Deri belirtileri ile internal malignitelerin eşlik ettiği genetik sendromlar dikkate alındığında, Muir-Torre sendromu için aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pankreas karsinomu ve melanom en sık eşlik eden iç organ malignitesidir.
Açıklama: Muir-Torre sendromunda (MSH2/MLH1 mutasyonları) deri bulgusu olarak sebase neoplaziler görülürken en sık eşlik eden internal malignite kolon karsinomudur. Melanom ve pankreas karsinomu birlikteliği CDKN2A gen ailesiyle ilişkili 'Ailesel melanom sendromu'nun klasik spektrumudur. Sendromların moleküler altyapısı ve predispoze oldukları spesifik neoplaziler arasındaki bu korelasyon klinik tanıda belirleyicidir.

**Soru 2 (ID: c0c8e56c-2edc-4fdf-a179-6da83bf84e57)**
Soru Kökü: Herediter non-polipozis kolorektal kanser (HNPCC) sendromunun spesifik bir alt tipinde, kolorektal malignitelere eşlik eden kutanöz bir deri eki tümörü izlenmektedir. Bu internal malignite ilişkili sendromda (Muir-Torre) görülen en karakteristik deri lezyonu aşağıdakilerden hangisidir?
Doğru Şık (D): Sebase adenom
Açıklama: Muir-Torre sendromu, HNPCC'nin bir varyantıdır ve iç organ maligniteleri (özellikle kolorektal kanser) ile sebase adenom birlikteliği ile karakterizedir. Trikilemmom Cowden sendromunda yer alırken, siringoma alt göz kapağı ekrin bez tümörüdür. Sebase bez diferansiyasyonu gösteren kitleler Muir-Torre için uyarıcı dermatolojik belirteçtir.

---

### ÇİFT 5 (Benzerlik: 0.77)

**Soru 1 (ID: 4eb7dfb6-e67f-456c-b1de-4a6bb1210ce4)**
Soru Kökü: Dört aylık bir bebek, şiddetli diyare ve sebase bezlerden zengin kafa derisi ile dış kulak yolunda görülen makülopapüler krutlu lezyonlar nedeniyle kliniğe getirilmiştir. Bu hastanın deri biyopsisinde, hücreler arası boşlukta sıvı tutulumuna bağlı olarak izlenmesi en olası histopatolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Spongioz
Açıklama: Leiner hastalığı, bebeklerde şiddetli diyare ile birlikte seyreden ağır bir seboreik dermatit formudur ve bu tablonun histopatolojisinde hücreler arası ödemi ifade eden spongioz ile geç dönemde akantoz izlenir. Liken simpleks kronikusta görülen hipergranülozis bu hastalıkta beklenmez, keza akantoliz büllöz pemfigus grubunun özelliğidir. Erken dönem infantil dermatitlerde epidermal sıvı birikimi hücresel disfonksiyonun temel yansımasıdır.

**Soru 2 (ID: b091c3e7-72d4-42e1-bac5-7d2f5d0264b8)**
Soru Kökü: Üç aylık bir bebek, kronik seyirli şiddetli diyare ve özellikle saçlı derisi ile kulak arkasında sarımsı kurutlarla kaplı makülopapüler lezyonlar şikayetiyle pediatri kliniğine getiriliyor. Bu hastada lezyon bölgelerinde spongioz saptanıyor. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (E): Leiner hastalığı
Açıklama: Bebeklerde şiddetli diyare ile birlikte seyreden ve seboreik dermatit bulguları (saçlı deri, kulak arkası kurutlu lezyonlar) gösteren ağır klinik tabloya Leiner hastalığı adı verilir. Dermatitis herpetiformis çölyakla (diyare) ilişkili olsa da vezikülobüllöz bir hastalıktır ve kurutlu makülopapüler yapılarla karakterize değildir. Bu spesifik sendrom Malassezia furfur ilişkili seboreik dermatitin şiddetli bebeklik formudur.

---

### ÇİFT 6 (Benzerlik: 0.77)

**Soru 1 (ID: 32d5f4b9-2c56-40d0-9899-60b6b7de35c6)**
Soru Kökü: Sistemik tutulum ile karakterize, kaşıntı, kanama ve kemik dokuda aşırı histamine sekonder osteoporoz kliniğiyle seyreden neoplastik bir proliferasyon saptanmıştır. Hastalığın sistemik formunda vakaların %90'ından fazlasında saptanan onkojenik mutasyon aşağıdakilerden hangisidir?
Doğru Şık (E): c-KIT mutasyonu
Açıklama: Mastositoz tablosu, mast hücrelerinin cilt ve iç organlarda orantısız birikimidir. Sistemik mastositozda vakaların >%90'ında mast hücre gelişim reseptörü olan c-KIT geninde aktive edici nokta mutasyonları saptanır. Sürekli aktif kalan c-KIT, histamin deşarjına ve kemik dahil organ harabiyetine neden olur.

**Soru 2 (ID: 65040c8c-993b-4de8-9465-1e696afcdbd4)**
Soru Kökü: 45 yaşında kadın hasta kronik şiddetli kaşıntı, zaman zaman oluşan yüzde kızarma (flushing) ve erken başlangıçlı kemik erimesi (osteoporoz) şikayetleriyle başvuruyor. Hastanın kaşınan derisinde lineer ödem izleniyor (Darier belirtisi). Yapılan kemik iliği biyopsisinde mast hücre infiltrasyonu saptanıyor. Sistemik tutulumu da olan bu hastanın patogenezinde en büyük oranda (%90) rol oynayan genetik mutasyon aşağıdakilerden hangisidir?
Doğru Şık (B): c-KIT kinaz mutasyonu
Açıklama: Sistemik mastositoz erişkinlerde görülen, mast hücrelerinin kemik iliği ve iç organlarda birikerek yoğun histamin salınımına bağlı osteoporoz, kaşıntı ve flushing yaptığı klinik tablodur. Olguların %90'ından fazlasında mast hücre proliferasyonunu tetikleyen c-KIT (Tirozin kinaz reseptörü) mutasyonu bulunur.

---

### ÇİFT 7 (Benzerlik: 0.77)

**Soru 1 (ID: 82ea65a6-223e-4de6-8a72-ab7715c97564)**
Soru Kökü: Toksik epidermal nekrolizis (TEN) ve Steven-Johnson Sendromu (SJS) spektrumunda yer alan, hedef tahtası lezyonlarla karakterize eritema multiformenin patogenezindeki temel efektör hücre aşağıdakilerden hangisidir?
Doğru Şık (D): CD8+ sitotoksik T hücreleri
Açıklama: Eritema multiformede patogenezin merkezinde, epidermis hücrelerine saldıran ve hedef tahtası lezyonlardaki ortası soluk nekrotik dokuyu oluşturan CD8+ sitotoksik T lenfositleri yer alır. Hastalıkta mast hücre degranülasyonu (ürtikerdeki gibi) veya antikor aracılı (pemfigustaki gibi B hücre/antikor kaynaklı) bir direkt hasar mekanizması birincil değildir.

**Soru 2 (ID: a380f4ed-130c-4afa-8a3d-f5bc94b47106)**
Soru Kökü: Sulfonamid kullanımı sonrası ekstremitelerinde bilateral, merkezi soluk, etrafı veziküler kırmızı papüllerden oluşan 'hedef tahtası' lezyonları gelişen bir hastada, bu döküntülerin patogenezinde rol oynayan temel inflamatuvar hücre aşağıdakilerden hangisidir?
Doğru Şık (B): CD8+ sitotoksik T lenfositler
Açıklama: Eritema multiforme patogenezinde, bazal tabaka keratinositlerindeki antijenik değişikliklere (ilaç veya enfeksiyon kaynaklı) yanıt veren CD8+ sitotoksik T lenfositler lezyonların oluşumundan birincil derecede sorumludur. Allerjik ve paraziter tablolarda eozinofiller ön plandayken, bu hastalıkta doğrudan T hücre aracılı bir sitotoksisite mevcuttur. İlaç ilişkili formların enfeksiyon ilişkili olanlara göre çok daha ağır seyretmesi bu güçlü immün yanıtın bir sonucudur.

---

### ÇİFT 8 (Benzerlik: 0.75)

**Soru 1 (ID: 221b1f9c-4aed-4827-917e-550e2a80327e)**
Soru Kökü: Kolonoskopi sırasında kolon kanseri teşhisi konulan 50 yaşındaki hastanın fizik muayenesinde cildinde multipl sebase neoplaziler (adenom ve karsinomlar) saptanmıştır. Ailesel kanser sendromlarından Muir-Torre sendromu düşünülen bu hastada aşağıdaki genlerden hangisinin mutasyonu beklenir?
Doğru Şık (B): MSH2
Açıklama: Sebase neoplaziler ve internal malignitelerin (özellikle kolon kanseri) birlikteliği Muir-Torre sendromu olarak adlandırılır ve DNA uyumsuzluk tamiri genleri olan MSH2 veya MLH1 mutasyonlarıyla ortaya çıkar. ATM ataksi-telenjektaziye, TSC2 tüberoskleroza, XPA kseroderma pigmentozuma yol açar.

**Soru 2 (ID: c0c8e56c-2edc-4fdf-a179-6da83bf84e57)**
Soru Kökü: Herediter non-polipozis kolorektal kanser (HNPCC) sendromunun spesifik bir alt tipinde, kolorektal malignitelere eşlik eden kutanöz bir deri eki tümörü izlenmektedir. Bu internal malignite ilişkili sendromda (Muir-Torre) görülen en karakteristik deri lezyonu aşağıdakilerden hangisidir?
Doğru Şık (D): Sebase adenom
Açıklama: Muir-Torre sendromu, HNPCC'nin bir varyantıdır ve iç organ maligniteleri (özellikle kolorektal kanser) ile sebase adenom birlikteliği ile karakterizedir. Trikilemmom Cowden sendromunda yer alırken, siringoma alt göz kapağı ekrin bez tümörüdür. Sebase bez diferansiyasyonu gösteren kitleler Muir-Torre için uyarıcı dermatolojik belirteçtir.

---

### ÇİFT 9 (Benzerlik: 0.75)

**Soru 1 (ID: cfa986a0-4b57-4638-8a71-fbaab96ff5b5)**
Soru Kökü: Çocukluk çağından beri ufak travmalarla sağlam deride gergın büller gelişen bir hastanın histopatolojik incelemesinde büllerin lamina densanın hemen altında (derininde) yerleştiği saptanmıştır. Bu klinik tablonun genetik ve moleküler temeli aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (E): Tip VII kollajen (COL7A1) mutasyonu
Açıklama: Distrofik tip epidermolizis büllozada büller lamina densanın derininde yer alır ve bu durum lamina densayı dermise bağlayan Tip VII kollajeni kodlayan COL7A1 genindeki mutasyonlardan kaynaklanır. Keratin 14 mutasyonları defektin bazal tabakada olduğu epidermolizis bülloza simplekse, BPAG2 ve laminin defektleri ise ayrışmanın lamina lusidada olduğu junctional tipe neden olur. Büllöz hastalıkların seviyesini belirleyen temel unsur mutasyona uğrayan yapışma proteininin anatomik lokalizasyonudur.

**Soru 2 (ID: e7ae50c6-e080-4b72-96bd-b321b12cd36d)**
Soru Kökü: Tüm epidermolizis bülloza olgularının %75-85'ini oluşturan, travma sonrası büllerin geliştiği 'simpleks tip' hastalıkta, defektin doğrudan yer aldığı bazal hücre tabakasındaki genetik bozukluk aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (B): Keratin 14 ve Keratin 5
Açıklama: Epidermolizis bülloza simpleks, keratin 5 ve keratin 14'ü kodlayan genlerdeki mutasyonlar sonucu bazal hücre tabakasındaki sitoiskelet bütünlüğünün bozulmasıyla ortaya çıkar. Tip XVII kollajen ve BPAG2 junctional tipte, Tip VII kollajen ise distrofik tipte izlenen mutasyon hedefleridir. Epidermisin dermise en zayıf tutunduğu nokta, bu vakalarda mutasyona uğramış keratin ağının bulunduğu bazal keratinositlerdir.

---

### ÇİFT 10 (Benzerlik: 0.75)

**Soru 1 (ID: 02206207-3f65-4e94-889f-6faa3aa151f2)**
Soru Kökü: Büllöz hastalıklardan pemfigusun klinik varyantları değerlendirildiğinde, sıklıkla Non-Hodgkin lenfoma (NHL) gibi malignitelerle eşzamanlı ortaya çıkan tip aşağıdakilerden hangisidir?
Doğru Şık (A): Paraneoplastik pemfigus
Açıklama: Paraneoplastik pemfigus, malignitelerle (en sık Non-Hodgkin Lenfoma - NHL, KLL, Castleman hastalığı) sekonder olarak gelişen spesifik ve agresif bir otoimmün sendromdur. Pemfigus eritematozus hafif seyirli lupoid özellikler taşıyan tipken, vejetans formu siğilimsi plaklarla seyreden bir varyanttır.

**Soru 2 (ID: 8be84ea3-e2c2-46f4-8782-560fbd1d8d7f)**
Soru Kökü: Paraneoplastik pemfigus olguları değerlendirildiğinde;
I. Sıklıkla Non-Hodgkin Lenfoma (NHL) ile birlikte görülmesi
II. Yalnızca güneşe maruz kalan malar bölgeye sınırlı olması
III. İntraepidermal bül ve akantoliz bulgusu taşıması
ifadelerinden hangileri doğrudur?
Doğru Şık (E): I ve III
Açıklama: Paraneoplastik pemfigus genellikle lenforetiküler malignitelerle, özellikle de Non-Hodgkin Lenfoma (NHL) ile tetiklenen nadir ama ağır seyirli bir tablodur ve pemfigus ailesinin özelliği olan akantoliz ile intraepidermal bülleri barındırır. Sadece malar bölgeye sınırlı kalması ve nispeten hafif seyretmesi pemfigus eritematozusun belirgin özelliğidir. Bu durum, malignite kökenli otoantikorların desmozomal hedeflerle çapraz reaksiyona girmesiyle açıklanır.

---

### ÇİFT 11 (Benzerlik: 0.74)

**Soru 1 (ID: 83bcae94-14bd-40a5-ba38-63de9f18e468)**
Soru Kökü: Glutensiz diyete yanıt veren dermatitis herpetiformis hastalığında patogenezin başlangıcını tetikleyen immünolojik reaksiyon, İgA sınıfı antikorların bazal membranda yer alan hangi spesifik yapıya bağlanması ile gerçekleşir?
Doğru Şık (B): Retikülin
Açıklama: Dermatitis herpetiformiste çölyak kaynaklı otoimmün çapraz reaksiyona sekonder oluşan IgA antikorları, bazal membran ile epidermisi tutunduran dermal fibrillerden retikülin lifleri ile reaksiyona girer. Plakoglobin ve desmokolin desmozomal bağlantı proteinleri iken, keratin 14 bazal sitoplazmik bir yapıdır.

**Soru 2 (ID: c28887d3-432a-4e09-b909-740ce7a77ef5)**
Soru Kökü: Glutensiz diyetle semptomları gerileyen ve çok kaşıntılı ürtikeryal lezyonları olan bir hastanın derisinden alınan direkt immünfloresan incelemesinde granüler İgA birikimi saptanmıştır. Bu birikimin dokudaki karakteristik topografik yerleşimi aşağıdakilerden hangisidir?
Doğru Şık (D): Dermal papillaların tepe noktalarında
Açıklama: Çölyak hastalığı ile ilişkili olan dermatitis herpetiformiste, IgA otoantikorları spesifik olarak dermal papillaların tepe noktalarındaki retikülin lifleriyle reaksiyona girerek kesintili, granüler birikimler yapar. Balık ağı paterni pemfigusta, lineer dermoepidermal bant tarzı birikim ise pemfigoid büllöz hastalık grubunda görülür. Bu lokalizasyon, dermal papillada mikroapseler oluşturarak subepidermal veziküllerin patogenezini açıklar.

---

### ÇİFT 12 (Benzerlik: 0.74)

**Soru 1 (ID: 221b1f9c-4aed-4827-917e-550e2a80327e)**
Soru Kökü: Kolonoskopi sırasında kolon kanseri teşhisi konulan 50 yaşındaki hastanın fizik muayenesinde cildinde multipl sebase neoplaziler (adenom ve karsinomlar) saptanmıştır. Ailesel kanser sendromlarından Muir-Torre sendromu düşünülen bu hastada aşağıdaki genlerden hangisinin mutasyonu beklenir?
Doğru Şık (B): MSH2
Açıklama: Sebase neoplaziler ve internal malignitelerin (özellikle kolon kanseri) birlikteliği Muir-Torre sendromu olarak adlandırılır ve DNA uyumsuzluk tamiri genleri olan MSH2 veya MLH1 mutasyonlarıyla ortaya çıkar. ATM ataksi-telenjektaziye, TSC2 tüberoskleroza, XPA kseroderma pigmentozuma yol açar.

**Soru 2 (ID: 65e5b614-8d02-4995-8281-c2d9ca7c5a7a)**
Soru Kökü: Deri belirtileri ile internal malignitelerin eşlik ettiği genetik sendromlar dikkate alındığında, Muir-Torre sendromu için aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (E): Pankreas karsinomu ve melanom en sık eşlik eden iç organ malignitesidir.
Açıklama: Muir-Torre sendromunda (MSH2/MLH1 mutasyonları) deri bulgusu olarak sebase neoplaziler görülürken en sık eşlik eden internal malignite kolon karsinomudur. Melanom ve pankreas karsinomu birlikteliği CDKN2A gen ailesiyle ilişkili 'Ailesel melanom sendromu'nun klasik spektrumudur. Sendromların moleküler altyapısı ve predispoze oldukları spesifik neoplaziler arasındaki bu korelasyon klinik tanıda belirleyicidir.

---

### ÇİFT 13 (Benzerlik: 0.74)

**Soru 1 (ID: b328e69d-9e6b-4fbf-a3b4-2451cb6cd056)**
Soru Kökü: Otuz yaşında Çölyak hastalığı öyküsü bulunan erkek, dirseklerinde ve dizlerinin ekstansör yüzlerinde simetrik, grup yapmış ve çok kaşıntılı veziküllerle başvurmuştur. Hastanın derisinde mikroapseler ile birlikte Tip II aşırı duyarlılığa bağlı hasar gören yapışma molekülü aşağıdakilerden hangisidir?
Doğru Şık (B): Retikülin
Açıklama: Dermatitis herpetiformis tablosunda IgA tipi otoantikorlar, epidermisi bazal membrana tutunduran papiller dermis yerleşimli retikülin lifleriyle reaksiyona girerek doku hasarına neden olurlar. Laminin 5 mukozal pemfigoidin, desmoglein 1 ise pemfigus foliaceusun hedeflenen yapışma antijenidir. Gluten intoleransına hücresel düzeyde deri yansıması bu spesifik retikülin çarpraz reaksiyonu (moleküler mimikri) mekanizmasıyla gerçekleşir.

**Soru 2 (ID: fda14b86-d0fc-4caa-80ff-f05cefc9b5f2)**
Soru Kökü: Elli beş yaşındaki erkek hasta, öncelikle ağız mukozasında başlayan, daha sonra deriye yayılan ve kolayca patlayıp skar bırakmayan gevşek büllerle başvuruyor. İmmünfloresan incelemede epitel hücreleri etrafında balık ağı manzarasında interselüler birikim saptanıyor. Bu hastanın serumundaki otoantikorların temel hedefi olan desmozom proteini aşağıdakilerden hangisidir?
Doğru Şık (B): Desmoglein 3
Açıklama: Mukoza başlangıçlı, kolay patlayan büller (suprabazal akantoliz) ve balık ağı IF paterni Pemfigus Vulgaris'i tanımlar; bu otoimmün reaksiyonda hedef, özellikle derin epidermis ve mukozada yoğun bulunan Desmoglein 1 ve 3'tür. Hemidesmozom komponentleri (BPAG1, Laminin 5) bazal membran hedefleridir ve büllöz/mukozal pemfigoid patogenezinde yer alırlar.

---

### ÇİFT 14 (Benzerlik: 0.73)

**Soru 1 (ID: 20d9c5f4-a525-4ef1-9361-a3b30a6db50c)**
Soru Kökü: Dermoepidermal arayüzde destrüktif lenfositik infiltrat sonucu bazal membranın 'testere dişi (sawtoothing)' görünümü alması ve klinik muayenede papüller üzerinde hipergranüloza bağlı 'Wickham striaları' bulunması aşağıdaki hastalıklardan hangisi için en tipiktir?
Doğru Şık (E): Liken planus
Açıklama: Liken planusun en karakteristik histopatolojik bulguları arayüz dermatiti, bazal membranda testere dişi (sawtoothing) kontürler, hipergranüloz ve Civatte cisimciklerinin varlığıdır; makroskopide hipergranülozis alanları beyazımsı Wickham strialarını oluşturur. Psöriyaziste testere dişi değil, retelerde düzenli uzama ve akantoz görülür.

**Soru 2 (ID: 494fb6dd-c4ec-42ab-a35b-a4c2858aab30)**
Soru Kökü: Bilek fleksör yüzlerinde kaşıntılı, mor ve poligonal plakları olan bir hastada lezyonların üzerinde izlenen küçük beyaz noktacık ve çizgilenmelerin (Wickham striaları) histolojik karşılığı aşağıdakilerden hangisidir?
Doğru Şık (D): Hipergranülozis
Açıklama: Liken planusta karakteristik olarak izlenen Wickham striaları, histolojik olarak stratum granülozum tabakasının fokal kalınlaşması olan hipergranülozis alanlarına denk gelir. Psöriyazisteki Munro mikroapseleri stratum korneumda izlenirken, liken planustaki bu spesifik çizgilenmeler doğrudan granüler tabakanın hipertrofisiyle oluşur. Bu klinik ve histolojik korelasyon liken planusun tanınmasında kritik öneme sahiptir.

---

### ÇİFT 15 (Benzerlik: 0.73)

**Soru 1 (ID: a90cf8de-9538-4905-b1c9-9d89716b8941)**
Soru Kökü: Altmış beş yaşında bir hastada ekstremitelerin fleksör yüzlerinde gergin, kolay patlamayan büyük büller izlenmektedir. Biyopside hemidesmozom komponentlerine karşı otoantikorlar saptanmıştır. Bu hastalıkla ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Epidermiste yaygın akantolitik büller karakteristiktir.
Açıklama: Büllöz pemfigoidde otoantikorlar dermoepidermal bileşkedeki hemidesmozomları (BPAG1 ve BPAG2) hedef alır; hücreler arası desmozomlar sağlam kaldığı için akantoliz görülmez. Pemfigus grubunda ise akantoliz tipiktir ve büller intraepidermal yerleşimlidir. Büllöz pemfigoid bülleri subepidermal ve akantolitik olmadıkları için çok gergindir ve Nikolsky testinde epidermisin soyulması (pozitiflik) beklenmez.

**Soru 2 (ID: fda14b86-d0fc-4caa-80ff-f05cefc9b5f2)**
Soru Kökü: Elli beş yaşındaki erkek hasta, öncelikle ağız mukozasında başlayan, daha sonra deriye yayılan ve kolayca patlayıp skar bırakmayan gevşek büllerle başvuruyor. İmmünfloresan incelemede epitel hücreleri etrafında balık ağı manzarasında interselüler birikim saptanıyor. Bu hastanın serumundaki otoantikorların temel hedefi olan desmozom proteini aşağıdakilerden hangisidir?
Doğru Şık (B): Desmoglein 3
Açıklama: Mukoza başlangıçlı, kolay patlayan büller (suprabazal akantoliz) ve balık ağı IF paterni Pemfigus Vulgaris'i tanımlar; bu otoimmün reaksiyonda hedef, özellikle derin epidermis ve mukozada yoğun bulunan Desmoglein 1 ve 3'tür. Hemidesmozom komponentleri (BPAG1, Laminin 5) bazal membran hedefleridir ve büllöz/mukozal pemfigoid patogenezinde yer alırlar.

---

### ÇİFT 16 (Benzerlik: 0.73)

**Soru 1 (ID: b328e69d-9e6b-4fbf-a3b4-2451cb6cd056)**
Soru Kökü: Otuz yaşında Çölyak hastalığı öyküsü bulunan erkek, dirseklerinde ve dizlerinin ekstansör yüzlerinde simetrik, grup yapmış ve çok kaşıntılı veziküllerle başvurmuştur. Hastanın derisinde mikroapseler ile birlikte Tip II aşırı duyarlılığa bağlı hasar gören yapışma molekülü aşağıdakilerden hangisidir?
Doğru Şık (B): Retikülin
Açıklama: Dermatitis herpetiformis tablosunda IgA tipi otoantikorlar, epidermisi bazal membrana tutunduran papiller dermis yerleşimli retikülin lifleriyle reaksiyona girerek doku hasarına neden olurlar. Laminin 5 mukozal pemfigoidin, desmoglein 1 ise pemfigus foliaceusun hedeflenen yapışma antijenidir. Gluten intoleransına hücresel düzeyde deri yansıması bu spesifik retikülin çarpraz reaksiyonu (moleküler mimikri) mekanizmasıyla gerçekleşir.

**Soru 2 (ID: c28887d3-432a-4e09-b909-740ce7a77ef5)**
Soru Kökü: Glutensiz diyetle semptomları gerileyen ve çok kaşıntılı ürtikeryal lezyonları olan bir hastanın derisinden alınan direkt immünfloresan incelemesinde granüler İgA birikimi saptanmıştır. Bu birikimin dokudaki karakteristik topografik yerleşimi aşağıdakilerden hangisidir?
Doğru Şık (D): Dermal papillaların tepe noktalarında
Açıklama: Çölyak hastalığı ile ilişkili olan dermatitis herpetiformiste, IgA otoantikorları spesifik olarak dermal papillaların tepe noktalarındaki retikülin lifleriyle reaksiyona girerek kesintili, granüler birikimler yapar. Balık ağı paterni pemfigusta, lineer dermoepidermal bant tarzı birikim ise pemfigoid büllöz hastalık grubunda görülür. Bu lokalizasyon, dermal papillada mikroapseler oluşturarak subepidermal veziküllerin patogenezini açıklar.

---

### ÇİFT 17 (Benzerlik: 0.72)

**Soru 1 (ID: 2a2b3f8d-cdc5-44cc-aea0-b04efee61828)**
Soru Kökü: Aşağıdaki hücrelerden hangisi psöriyazis patogenezi ve lezyon bölgesindeki spesifik histopatolojisinde aktif rol oynayan temel inflamatuvar hücrelerden biri **değildir**?
Doğru Şık (A): Eozinofiller
Açıklama: Psöriyazis patogenezinde TH1, TH17 ve CD8+ T lenfositleri dermise yerleşerek aşırı keratinosit proliferasyonunu tetikler; ayrıca stratum korneuma göçen nötrofiller Munro mikroapselerini oluşturur. Eozinofiller büllöz pemfigoid gibi paraziter veya alerjik (Tip II aşırı duyarlılık) hastalıklarda görülür, psöriyazis mekanizmasında doğrudan yer almaz.

**Soru 2 (ID: 695c6569-06cc-4973-8b22-f1da490770d3)**
Soru Kökü: Diz ve dirseklerinde pembemsi plakları olan bir hastanın alınan deri biyopsisinde, papiller dermisten stratum korneuma doğru göç eden inflamatuvar hücrelerin oluşturduğu Munro mikroapseleri saptanmıştır. Bu apse yapısını oluşturan dominant hücre grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Nötrofil
Açıklama: Psöriyazis patolojisinde, epidermiste toplanan nötrofiller spesifik olarak stratum korneum içinde Munro mikroapselerini ve spongioform püstülleri oluştururlar. Lenfositler (CD8+ ve TH17) olayın tetikleyicisi olarak dermiste ve alt epidermiste bulunurken, mikroapse formasyonunu nötrofilik infiltrasyon sağlar. Bu histolojik bulgu epidermal turn-over artışı ve parakeratoz ile birlikte psöriyazis için oldukça karakteristiktir.

---

### ÇİFT 18 (Benzerlik: 0.72)

**Soru 1 (ID: 199de9a9-4a16-4f70-91ac-a86a609f2b71)**
Soru Kökü: Mikroskopik incelemede stratum granülozum tabakasının altındaki hücrelerde anormal ve prematür keratinizasyon saptanan bir hastada, bu histopatolojik bulgunun tanımı aşağıdakilerden hangisidir?
Doğru Şık (A): Diskeratoz
Açıklama: Diskeratoz, stratum granülozum altındaki hücrelerde gözlenen anormal ve prematür (erken) keratinizasyon sürecini ifade eder. Parakeratoz ise stratum korneumda çekirdekli keratinizasyon kalıntılarıdır ve mukoza dışında patolojiktir. Bu hücre içi erken olgunlaşma defekti, spesifik olarak diskeratoz tanımıyla eşleşir.

**Soru 2 (ID: 536f2308-8f80-4d15-896f-0c83b7423d6f)**
Soru Kökü: Otuz beş yaşındaki kadın hastanın yanak mukozasından alınan biyopsi örneğinde, stratum korneum tabakasında çekirdeklerini korumuş keratinositler tespit ediliyor. Diğer epitel katmanlarında herhangi bir yapısal anormallik gözlenmiyor. Bu histopatolojik bulgu ile ilgili olarak en olası yorum aşağıdakilerden hangisidir?
Doğru Şık (D): Müköz membranlar için normal bir fizyolojik varyasyondur.
Açıklama: Stratum korneumda alıkonulmuş çekirdekli keratinizasyon süreci parakeratoz olarak adlandırılır ve deri için patolojik olsa da, müköz membranlar (ağız içi gibi) üzerinde normal bir bulgudur. En güçlü distraktör olan hidropik şişme keratinosit içi ödemdir ve çekirdek kalıntısıyla değil, hücre şişmesiyle karakterizedir. Dolayısıyla mukoza için bu durum malignite veya viral enfeksiyon değil, olağan yapıdır.

---

### ÇİFT 19 (Benzerlik: 0.72)

**Soru 1 (ID: b3e3643d-8f60-4616-b1f2-a26b716a3316)**
Soru Kökü: Epidermolizis büllozada genetik mutasyonun bulunduğu tabaka klinik bülün yerleşimini belirler. BPAG2 veya laminin moleküllerinin otozomal resesif mutasyonları ile ilişkili olan 'Junctional tip' epidermolizis büllozada veziküller aşağıdaki dermoepidermal katmanların hangisinde ayrışarak bül oluşturur?
Doğru Şık (A): Lamina lucida
Açıklama: Junctional tip epidermolizis bülloza, hemidesmozom ve tutundurucu filamanlara bağlanan proteinleri (laminin, BPAG2) etkileyerek ayrışmayı bazal membranın lamina lucida seviyesinde oluşturur. Basit tip bazal hücre tabakasında, distrofik tip ise lamina densa altında yer alır.

**Soru 2 (ID: cfa986a0-4b57-4638-8a71-fbaab96ff5b5)**
Soru Kökü: Çocukluk çağından beri ufak travmalarla sağlam deride gergın büller gelişen bir hastanın histopatolojik incelemesinde büllerin lamina densanın hemen altında (derininde) yerleştiği saptanmıştır. Bu klinik tablonun genetik ve moleküler temeli aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (E): Tip VII kollajen (COL7A1) mutasyonu
Açıklama: Distrofik tip epidermolizis büllozada büller lamina densanın derininde yer alır ve bu durum lamina densayı dermise bağlayan Tip VII kollajeni kodlayan COL7A1 genindeki mutasyonlardan kaynaklanır. Keratin 14 mutasyonları defektin bazal tabakada olduğu epidermolizis bülloza simplekse, BPAG2 ve laminin defektleri ise ayrışmanın lamina lusidada olduğu junctional tipe neden olur. Büllöz hastalıkların seviyesini belirleyen temel unsur mutasyona uğrayan yapışma proteininin anatomik lokalizasyonudur.

---

### ÇİFT 20 (Benzerlik: 0.72)

**Soru 1 (ID: 561e6ed7-a7b5-4ff5-b85a-89395da5ff26)**
Soru Kökü: On iki yaşındaki erkek çocuğun doğduğundan beri cildi kalın, pul pul ve serttir. Biyopside stratum korneumun aşırı kalınlaştığı gözlenmiştir. Hastanın annesinde herhangi bir bulgu yokken, anne tarafından dayısında da aynı tablonun olduğu öğrenilmiştir. Deskuamasyon defektine bağlı bu X'e bağlı kalıtsal hastalığın temelinde hangi enzimin eksikliği yatar?
Doğru Şık (B): Steroid sülfataz
Açıklama: Genetik paterni (X'e bağlı, erkeklerde görülüp kadın taşıyıcı olması) ve 'balık derisi' benzeri iktiyozis bulgularını tanımlayan bu klinik senaryo, X'e bağlı iktiyozis tablosudur. İktiyozis vulgaris OD geçişli iken, X'e bağlı form sadece steroid sülfataz enzimi defektinde gözlenir ve Odland cisimlerinde kolesterol sülfat birikimi ile karakterizedir.

**Soru 2 (ID: 62761175-fd20-4cc0-9f95-41f350b39b3c)**
Soru Kökü: X'e bağlı formunda steroid sülfataz enzim defekti olan bir çocukta, deri yüzeyinde balık pulu benzeri sert ve kalın lezyonlar izlenmiştir. Bu hastalıkta stratum korneum yapısını bozarak sepet örgü morfolojisinin kaybına neden olan ve hücre içinde birikerek spesifik inklüzyonlar yaratan madde/cisimcik eşleşmesi aşağıdakilerden hangisidir?
Doğru Şık (C): Kolesterol sülfat birikimi - Odland cisimcikleri
Açıklama: İktiyozis tablosunun X'e bağlı formunda steroid sülfataz enzimi eksiktir, bu yüzden kolesterol sülfat parçalanamaz ve epidermal keratinositlerde birikir. Bu birikim mikroskopta Odland cisimleri olarak izlenir. Sepet örgü şeklindeki esnek keratin yapısı bozularak hastanın derisi aşırı kalın ve pullu bir balık derisine benzer.

---

### ÇİFT 21 (Benzerlik: 0.71)

**Soru 1 (ID: 380c965b-a26b-40d7-b2bb-0fcbd92f9f2c)**
Soru Kökü: Lentigo ile ilgili aşağıdaki patolojik veya klinik özelliklerden hangisi **yanlıştır**?
Doğru Şık (A): Epidermiste nevüsler gibi yuvalanma (nest) oluştururlar.
Açıklama: Lentigoda stratum bazalede melanosit hiperplazisi izlenir ancak nevüslerden farklı olarak hücresel yuvalanma (adalar) oluşturmazlar. Melanositler bazal membranda lineer dizilim gösterir. Ayrıca çillerden (frekel) farklı olarak güneşle koyulaşmazlar ve melanosit sayısı artmıştır (çilde melanin artar, hücre sayısı belirgin artmaz).

**Soru 2 (ID: f7cc8e48-8a88-4b78-8964-7b0e3715a3bf)**
Soru Kökü: Pigmentasyon patolojilerinden lentigo ve çil (frekel) histopatolojik düzeyde farklılık gösterir. Aşağıdakilerden hangisi çil patogenezinden farklı olarak doğrudan lentigoya ait bir özelliktir?
Doğru Şık (B): Güneş ışığı maruziyeti ile lezyon renginde koyulaşma olmaması
Açıklama: Lentigo, stratum bazalede yuvalanma yapmayan melanosit hiperplazisi sonucu oluşur ve çilden farklı olarak güneş maruziyeti ile rengi koyulaşmaz. Çil (frekel) ise melanosit sayısında anlamlı bir artış olmadan keratinositlerde melanin artışıyla karakterizedir ve spesifik olarak güneş gördüğünde rengi koyulaşır. Melanosit sayısı artışı lentigonun, hücre içi pigment artışı çilin temel mekanizmasıdır.

---

### ÇİFT 22 (Benzerlik: 0.71)

**Soru 1 (ID: 83bcae94-14bd-40a5-ba38-63de9f18e468)**
Soru Kökü: Glutensiz diyete yanıt veren dermatitis herpetiformis hastalığında patogenezin başlangıcını tetikleyen immünolojik reaksiyon, İgA sınıfı antikorların bazal membranda yer alan hangi spesifik yapıya bağlanması ile gerçekleşir?
Doğru Şık (B): Retikülin
Açıklama: Dermatitis herpetiformiste çölyak kaynaklı otoimmün çapraz reaksiyona sekonder oluşan IgA antikorları, bazal membran ile epidermisi tutunduran dermal fibrillerden retikülin lifleri ile reaksiyona girer. Plakoglobin ve desmokolin desmozomal bağlantı proteinleri iken, keratin 14 bazal sitoplazmik bir yapıdır.

**Soru 2 (ID: b328e69d-9e6b-4fbf-a3b4-2451cb6cd056)**
Soru Kökü: Otuz yaşında Çölyak hastalığı öyküsü bulunan erkek, dirseklerinde ve dizlerinin ekstansör yüzlerinde simetrik, grup yapmış ve çok kaşıntılı veziküllerle başvurmuştur. Hastanın derisinde mikroapseler ile birlikte Tip II aşırı duyarlılığa bağlı hasar gören yapışma molekülü aşağıdakilerden hangisidir?
Doğru Şık (B): Retikülin
Açıklama: Dermatitis herpetiformis tablosunda IgA tipi otoantikorlar, epidermisi bazal membrana tutunduran papiller dermis yerleşimli retikülin lifleriyle reaksiyona girerek doku hasarına neden olurlar. Laminin 5 mukozal pemfigoidin, desmoglein 1 ise pemfigus foliaceusun hedeflenen yapışma antijenidir. Gluten intoleransına hücresel düzeyde deri yansıması bu spesifik retikülin çarpraz reaksiyonu (moleküler mimikri) mekanizmasıyla gerçekleşir.

---

### ÇİFT 23 (Benzerlik: 0.71)

**Soru 1 (ID: b3e3643d-8f60-4616-b1f2-a26b716a3316)**
Soru Kökü: Epidermolizis büllozada genetik mutasyonun bulunduğu tabaka klinik bülün yerleşimini belirler. BPAG2 veya laminin moleküllerinin otozomal resesif mutasyonları ile ilişkili olan 'Junctional tip' epidermolizis büllozada veziküller aşağıdaki dermoepidermal katmanların hangisinde ayrışarak bül oluşturur?
Doğru Şık (A): Lamina lucida
Açıklama: Junctional tip epidermolizis bülloza, hemidesmozom ve tutundurucu filamanlara bağlanan proteinleri (laminin, BPAG2) etkileyerek ayrışmayı bazal membranın lamina lucida seviyesinde oluşturur. Basit tip bazal hücre tabakasında, distrofik tip ise lamina densa altında yer alır.

**Soru 2 (ID: e7ae50c6-e080-4b72-96bd-b321b12cd36d)**
Soru Kökü: Tüm epidermolizis bülloza olgularının %75-85'ini oluşturan, travma sonrası büllerin geliştiği 'simpleks tip' hastalıkta, defektin doğrudan yer aldığı bazal hücre tabakasındaki genetik bozukluk aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (B): Keratin 14 ve Keratin 5
Açıklama: Epidermolizis bülloza simpleks, keratin 5 ve keratin 14'ü kodlayan genlerdeki mutasyonlar sonucu bazal hücre tabakasındaki sitoiskelet bütünlüğünün bozulmasıyla ortaya çıkar. Tip XVII kollajen ve BPAG2 junctional tipte, Tip VII kollajen ise distrofik tipte izlenen mutasyon hedefleridir. Epidermisin dermise en zayıf tutunduğu nokta, bu vakalarda mutasyona uğramış keratin ağının bulunduğu bazal keratinositlerdir.

---

### ÇİFT 24 (Benzerlik: 0.71)

**Soru 1 (ID: 20266cd1-bf42-4193-abfc-10e0abb2bf59)**
Soru Kökü: Ellerindeki eklemlerde ağrı ve şişlik (sosis parmak) bulunan 45 yaşındaki erkek hastanın intergluteal bölgesinde ve dizlerinde iyi sınırlı, somon rengi plaklar mevcuttur. Lezyonların üzerindeki kabuk kaldırıldığında punktat kanamalar (Auspitz bulgusu) izlenmiştir. Bu hastanın hastalığı için aşağıdaki doku uygunluk antijenlerinden hangisiyle güçlü bir genetik ilişki tanımlanmıştır?
Doğru Şık (B): HLA-Cw*0602
Açıklama: Eklemlerde artrit (sosis parmak), somon renkli plaklar, Auspitz bulgusu psöriyazisin klasik tablosudur. Psöriyazisin, özellikle HLA-C bölgesiyle, spesifik olarak da HLA-Cw*0602 alleli ile güçlü bir genetik bağlantısı bulunur. HLA-DQ2 dermatitis herpetiformiste (çölyak) beklenen bir marker iken psöriyaziste rolü yoktur.

**Soru 2 (ID: 75a97d55-62b3-4eef-bd3a-bdfc552fc6c7)**
Soru Kökü: Psöriyazis hastalarında genetik bir yatkınlık zemini bulunduğuna işaret eden ve bağışıklık yanıtındaki TH1/TH17 yönelimini şekillendiren en güçlü immünogenetik gösterge (alel) aşağıdakilerden hangisidir?
Doğru Şık (D): HLA-Cw*0602
Açıklama: Psöriyaziste epidermis hücrelerinin (keratinositlerin) artmış turn-over'ı ve hiperkeratoz, spesifik olarak HLA-C allelleriyle (özellikle HLA-Cw*0602) güçlü bir genetik ilişki zemininde tetiklenen bir süreçtir. HLA-B27 ankilozan spondilit, HLA-B51 Behçet, HLA-DQ2 çölyak hastalığı, HLA-DR4 ise romatoid artrit ile ilişkilidir. Genetik zeminin ve ko-faktör travmanın (Koebner fenomeni) birlikte hücresel birikimi artırması psöriyazisin karakteristiğidir.

---

### ÇİFT 25 (Benzerlik: 0.71)

**Soru 1 (ID: 04deae70-81b7-4be6-8f55-4e40a305841a)**
Soru Kökü: Elli yaşındaki bir erkek hastanın el sırtında, kısa süre içinde hızla büyüyen 2 cm çapında bir nodül izlenmektedir. Lezyonun merkezinde keratin dolu bir krater mevcuttur. Histopatolojik incelemede iyi diferansiye epidermoid karsinom ile yüksek benzerlik gösteren atipi ve ani keratinizasyon odakları saptanmıştır. Birkaç ay sonra lezyon cerrahi müdahale olmaksızın kendi kendine gerilemiştir. En olası tanı aşağıdakilerden hangisidir?
Doğru Şık (D): Keratoakantom
Açıklama: Keratoakantomun en belirleyici üç özelliği: (1) Çok kısa sürede hızlı büyüme, (2) Merkezi keratin tıkacı (krater) barındırması ve histolojisinin SCC'ye çok benzemesi, (3) Klasik malignitelerin aksine zamanla kendiliğinden regrese olmasıdır. SCC'den klinik büyüme hızı ve gerileme kapasitesi ile net şekilde ayrılır.

**Soru 2 (ID: f9ce711d-e0f2-4e32-be6e-deb2aec996ff)**
Soru Kökü: İyi diferansiye skuamöz hücreli karsinoma mikroskobik olarak çok benzeyen ancak klinik seyri açısından SCC'den ayrılması gereken keratoakantomun en önemli karakteristik klinik özelliği aşağıdakilerden hangisidir?
Doğru Şık (E): Kısa zamanda hızla büyümesi ve sıklıkla kendiliğinden gerilemesi
Açıklama: Keratoakantom, ortasında keratin dolu bir krater bulunan ve haftalar içinde çok hızlı büyüyüp sonrasında aylar içinde spontan olarak gerileme (involüsyon) eğilimi gösteren bir tümördür. Yüksek diferansiasyonu nedeniyle SCC'ye benzer, ancak bu klinik büyüme/gerileme paterni ile ayırt edilir.

---

### ÇİFT 26 (Benzerlik: 0.70)

**Soru 1 (ID: 440a45f8-3ab2-425a-aa95-ef229d689348)**
Soru Kökü: Pemfigus foliaceus klinik olarak diğer pemfigus varyantlarına göre daha hafif seyirli olup mukoza tutulumu göstermez. Bu durumun moleküler patogenezi aşağıdakilerden hangisi ile doğrudan açıklanabilir?
Doğru Şık (A): Otoantikorların sadece desmoglein 1'e karşı gelişmesi
Açıklama: Pemfigus foliaceusta otoantikorlar sadece epidermisin üst tabakalarında eksprese edilen desmoglein 1'e karşı gelişir, bu da büllerin yüzeysel (subkorneal) kalmasına ve mukozanın korunmasına neden olur. Pemfigus vulgariste ise hem desmoglein 1 hem de desmoglein 3 hedeflendiği için büller suprabazal yerleşimlidir ve mukozal lezyonlar çok daha şiddetlidir. Lineer IgG ve Tip XVII kollajen defektleri ise pemfigoid grubunun bulgularıdır.

**Soru 2 (ID: fda14b86-d0fc-4caa-80ff-f05cefc9b5f2)**
Soru Kökü: Elli beş yaşındaki erkek hasta, öncelikle ağız mukozasında başlayan, daha sonra deriye yayılan ve kolayca patlayıp skar bırakmayan gevşek büllerle başvuruyor. İmmünfloresan incelemede epitel hücreleri etrafında balık ağı manzarasında interselüler birikim saptanıyor. Bu hastanın serumundaki otoantikorların temel hedefi olan desmozom proteini aşağıdakilerden hangisidir?
Doğru Şık (B): Desmoglein 3
Açıklama: Mukoza başlangıçlı, kolay patlayan büller (suprabazal akantoliz) ve balık ağı IF paterni Pemfigus Vulgaris'i tanımlar; bu otoimmün reaksiyonda hedef, özellikle derin epidermis ve mukozada yoğun bulunan Desmoglein 1 ve 3'tür. Hemidesmozom komponentleri (BPAG1, Laminin 5) bazal membran hedefleridir ve büllöz/mukozal pemfigoid patogenezinde yer alırlar.

---

### ÇİFT 27 (Benzerlik: 0.70)

**Soru 1 (ID: 11d8c00f-5080-48c2-ad6e-91a21dfb7142)**
Soru Kökü: Büllöz pemfigoidin patogenezinde hedef alınan temel antijenlerden olan BPAG2 proteini, bazal membran bölgesinin stabilitesini sağlayan kollajen tiplerinden hangisine karşılık gelmektedir?
Doğru Şık (D): Tip XVII kollajen
Açıklama: Hemidesmozom yapısındaki BPAG2 antijeni, dermoepidermal adezyondan sorumlu bir transmembran proteini olan Tip XVII kollajendir. Distrofik epidermolizis büllozada defektif olan Tip VII kollajen (lamina densa derinindeki ankraj fibrilleri) ile karıştırılmamalıdır. Subepidermal büllerin patogenezinde bu spesifik kollajen tipine karşı kompleman fikse eden IgG sınıfı antikorlar doku hasarını başlatır.

**Soru 2 (ID: b3e3643d-8f60-4616-b1f2-a26b716a3316)**
Soru Kökü: Epidermolizis büllozada genetik mutasyonun bulunduğu tabaka klinik bülün yerleşimini belirler. BPAG2 veya laminin moleküllerinin otozomal resesif mutasyonları ile ilişkili olan 'Junctional tip' epidermolizis büllozada veziküller aşağıdaki dermoepidermal katmanların hangisinde ayrışarak bül oluşturur?
Doğru Şık (A): Lamina lucida
Açıklama: Junctional tip epidermolizis bülloza, hemidesmozom ve tutundurucu filamanlara bağlanan proteinleri (laminin, BPAG2) etkileyerek ayrışmayı bazal membranın lamina lucida seviyesinde oluşturur. Basit tip bazal hücre tabakasında, distrofik tip ise lamina densa altında yer alır.

---

### ÇİFT 28 (Benzerlik: 0.70)

**Soru 1 (ID: 09e8606b-998e-4098-9394-39d1502f641c)**
Soru Kökü: Tip II aşırı duyarlılık reaksiyonu olarak gelişen büllöz pemfigoidin karakteristik özellikleri değerlendirildiğinde aşağıdakilerden hangisi hastalığın patolojik veya klinik bir bulgusu **değildir**?
Doğru Şık (E): Suprabazal yerleşimli akantolitik büller görülmesi
Açıklama: Suprabazal yerleşimli akantolitik büller Büllöz Pemfigoidin değil, desmozomal bağlantıların yıkıldığı Pemfigus Vulgaris'in özelliğidir. Büllöz pemfigoid subepidermal (tam bir dermoepidermal ayrışma) lezyon yapar ve akantoliz göstermez; bu nedenle bülleri gergindir ve Nikolsky negatiftir.

**Soru 2 (ID: a90cf8de-9538-4905-b1c9-9d89716b8941)**
Soru Kökü: Altmış beş yaşında bir hastada ekstremitelerin fleksör yüzlerinde gergin, kolay patlamayan büyük büller izlenmektedir. Biyopside hemidesmozom komponentlerine karşı otoantikorlar saptanmıştır. Bu hastalıkla ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Epidermiste yaygın akantolitik büller karakteristiktir.
Açıklama: Büllöz pemfigoidde otoantikorlar dermoepidermal bileşkedeki hemidesmozomları (BPAG1 ve BPAG2) hedef alır; hücreler arası desmozomlar sağlam kaldığı için akantoliz görülmez. Pemfigus grubunda ise akantoliz tipiktir ve büller intraepidermal yerleşimlidir. Büllöz pemfigoid bülleri subepidermal ve akantolitik olmadıkları için çok gergindir ve Nikolsky testinde epidermisin soyulması (pozitiflik) beklenmez.

---

### ÇİFT 29 (Benzerlik: 0.69)

**Soru 1 (ID: 9e74f84e-6d52-4993-9150-901313954551)**
Soru Kökü: Kırk yaşındaki kadın hastanın yüzünde saç foliküllerine benzer morfolojide bazaloid hücre proliferasyonu gösteren çok sayıda küçük kitle tespit ediliyor. Yapılan genetik analizde PTEN geninde inaktive edici mutasyon bulunuyor. Bu kutanöz belirti hangi sendromun habercisidir?
Doğru Şık (A): Cowden sendromu
Açıklama: Trikilemmom, bazaloid hücrelerin saç folikülüne benzer şekilde prolifere olduğu bir deri eki tümörüdür ve PTEN gen mutasyonu zemininde geliştiğinde çoklu lezyonlarla Cowden sendromunun karakteristik bulgusunu oluşturur. Bu sendrom meme ve tiroid gibi iç organ maligniteleri açısından yüksek risk taşır.

**Soru 2 (ID: 9f41ebbc-e043-4c90-986e-3d7c3a1ea5ff)**
Soru Kökü: 35 yaşında kadın hasta, özellikle alt göz kapağı çevresinde yoğunlaşmış olan 1-2 mm çaplı çok sayıda taba (kahverengimsi) renkli papülden rahatsız olduğunu belirtiyor. Biyopsi sonucu lezyonun ekrin farklılaşma gösterdiği tespit ediliyor. Tanımlanan bu benign epitel tümörü aşağıdakilerden hangisidir?
Doğru Şık (A): Siringoma
Açıklama: Alt göz kapağı çevresinde yerleşim gösteren, ekrin duktus farklılaşmasına sahip çoklu, küçük papüler lezyonlar siringomadır. Ekrin poroma el/ayak tabanında, silindiroma kafa derisinde yerleşirken; trikilemmom saç folikülü diferansiyasyonuna sahiptir.

---

### ÇİFT 30 (Benzerlik: 0.69)

**Soru 1 (ID: cfa986a0-4b57-4638-8a71-fbaab96ff5b5)**
Soru Kökü: Çocukluk çağından beri ufak travmalarla sağlam deride gergın büller gelişen bir hastanın histopatolojik incelemesinde büllerin lamina densanın hemen altında (derininde) yerleştiği saptanmıştır. Bu klinik tablonun genetik ve moleküler temeli aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (E): Tip VII kollajen (COL7A1) mutasyonu
Açıklama: Distrofik tip epidermolizis büllozada büller lamina densanın derininde yer alır ve bu durum lamina densayı dermise bağlayan Tip VII kollajeni kodlayan COL7A1 genindeki mutasyonlardan kaynaklanır. Keratin 14 mutasyonları defektin bazal tabakada olduğu epidermolizis bülloza simplekse, BPAG2 ve laminin defektleri ise ayrışmanın lamina lusidada olduğu junctional tipe neden olur. Büllöz hastalıkların seviyesini belirleyen temel unsur mutasyona uğrayan yapışma proteininin anatomik lokalizasyonudur.

**Soru 2 (ID: fda14b86-d0fc-4caa-80ff-f05cefc9b5f2)**
Soru Kökü: Elli beş yaşındaki erkek hasta, öncelikle ağız mukozasında başlayan, daha sonra deriye yayılan ve kolayca patlayıp skar bırakmayan gevşek büllerle başvuruyor. İmmünfloresan incelemede epitel hücreleri etrafında balık ağı manzarasında interselüler birikim saptanıyor. Bu hastanın serumundaki otoantikorların temel hedefi olan desmozom proteini aşağıdakilerden hangisidir?
Doğru Şık (B): Desmoglein 3
Açıklama: Mukoza başlangıçlı, kolay patlayan büller (suprabazal akantoliz) ve balık ağı IF paterni Pemfigus Vulgaris'i tanımlar; bu otoimmün reaksiyonda hedef, özellikle derin epidermis ve mukozada yoğun bulunan Desmoglein 1 ve 3'tür. Hemidesmozom komponentleri (BPAG1, Laminin 5) bazal membran hedefleridir ve büllöz/mukozal pemfigoid patogenezinde yer alırlar.

---

