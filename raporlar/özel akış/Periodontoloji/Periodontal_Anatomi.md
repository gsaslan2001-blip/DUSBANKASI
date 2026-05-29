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

### ÇİFT 1 (Benzerlik: 0.86)

**Soru 1 (ID: 115383dc-fe29-4d68-b635-c90e925ce163)**
Soru Kökü: Elli beş yaşındaki sistemik rahatsızlığı olan bir erkek hastanın çekilen panoramik radyografisinde, tüm dentisyonda köklerin apikal bölgelerinde belirgin kalınlaşmalar ve radyoopasite artışı (hipersementoz) saptanmıştır. Aşağıdaki sistemik hastalıklardan hangisi bu jeneralize periodontal tablonun etyolojisinde yer **almaz**?
Doğru Şık (B): Hipertiroidizm
Açıklama: Paget hastalığı, akromegali, kalsinozis ve romatizmal ateş tüm dentisyonu etkileyen jeneralize hipersementoz nedenleri arasındadır; ancak hipertiroidizm değil tiroid guatr durumları bu tabloyla ilişkilendirilmiştir. Okluzal travma veya periapikal enflamasyon lokalize hipersementoz yaparken (güçlü çeldirici), Paget gibi kemik metabolizması bozuklukları klasik jeneralize semental hiperplazi tablolarıdır.

**Soru 2 (ID: c39fd5ad-4fe1-410c-a7dc-e754de01def0)**
Soru Kökü: Elli sekiz yaşındaki sistemik hastalıklı bir erkek hastanın radyografik muayenesinde, dişlerin apikal bölgelerinde aşırı miktarda kök kütlesi oluşturan yaygın sement kalınlaşması (hipersementoz) tespit edilmiştir. Tüm dentisyonun bu durumdan etkilendiği görülmüştür. 

Söz konusu jeneralize hipersementoz tablosunun etiyolojisinde yer alan en olası sistemik hastalık aşağıdakilerden hangisidir?
Doğru Şık (E): Paget Hastalığı
Açıklama: Hipersementoz (sementin anormal derecede kalınlaşması) lokal travma veya oklüzal düzensizliklerden kaynaklanabildiği gibi, tüm dentisyonu tutan jeneralize vakalarda sıklıkla sistemik kemik metabolizması hastalıklarıyla ilişkilidir. Özellikle osteitis deformans (Paget hastalığı), akromegali ve kalsinozis jeneralize hipersementozun en klasik sistemik sebepleridir.

---

### ÇİFT 2 (Benzerlik: 0.81)

**Soru 1 (ID: 5d418ffb-996b-4704-8afb-5be1a5d52553)**
Soru Kökü: Dişe gelen ani çiğneme kuvvetlerinin çeneye travma yaratmadan yutulması sürecinde, mekanik yükü birincil olarak kollajen liflerin değil periodontal ligament içindeki fizyolojik sıvıların ve hücre dışı matriks hidrodinamiğinin karşıladığını savunan teori aşağıdakilerden hangisidir?
Doğru Şık (E): Viskoelastik teori
Açıklama: Viskoelastik teori, diş üzerine gelen çiğneme kuvvetlerinin ilk şok etkisinin PDL matriksindeki doku sıvıları ve kan dolaşımı tarafından hidrolik sistem mantığıyla yastıklandığını, ardından bu sıvıların süngerimsi alveol içi damarlara itilmesiyle şokun atıldığını savunur. Tansiyonel teoride ise kollajen lif demetleri kuvveti esneyerek karşılar ve hidrodinamik rol ihmal edilir. Klinik diş mobilitesinin ilk fazı, bu sıvı deplasmanı ile çok iyi korelasyon gösterir.

**Soru 2 (ID: 72334796-f50a-4b8e-9620-5ba322ab0ca1)**
Soru Kökü: Periodontal ligamentin, dişe gelen okluzal kuvvetleri karşılayarak şok absorpsiyonu sağlamasını açıklayan iki temel teori bulunmaktadır. Okluzal kuvvetlerin sıvı hidrodinamiği ile karşılandığını ve PDL liflerinin bu süreçte ancak ikincil bir rol oynadığını savunan mekanizma aşağıdakilerden hangisidir?
Doğru Şık (E): Viskoelastik teori
Açıklama: Viskoelastik teoride okluzal kuvvetler periodontal ligament içerisindeki sıvılar (kan damarları ve interstisyel sıvı) tarafından karşılanırken, lifler bu sistemde gerilimi yönlendiren ikincil unsurlardır. Tansiyonel teoride ise kuvvetleri doğrudan kollajen PDL fibrillerinin gerilerek kemiğe ilettiği savunulur (en güçlü çeldirici). Bu iki teori, dişin fizyolojik mobilitesinin hidrolik ve mekanik komponentlerini temsil eder.

---

### ÇİFT 3 (Benzerlik: 0.80)

**Soru 1 (ID: 3a62f572-b6c9-47a3-b051-c3b22489c7cf)**
Soru Kökü: Kırk beş yaşındaki kadın hasta, alt ön dişlerinin dış yüzeyinde dişeti çekilmesi şikayetiyle başvurmuştur. Yapılan flep operasyonunda, dişin kök yüzeyinin üzerini örten kemiğin lokalize bir alanda pencere tarzında kaybolduğu ancak marjinal kemik köprüsünün tamamen sağlam olduğu izlenmiştir. Bu anatomik kemik defekti aşağıdakilerden hangisidir?
Doğru Şık (A): Fenestrasyon
Açıklama: Kök yüzeyinde alveol kretin marjinal sınırının sağlam kaldığı, ancak apikal veya orta kök bölgesinde sınırlı pencere şeklindeki kemik kayıplarına fenestrasyon adı verilir. Eğer bu kemik defekti marjinal kemiği de içine alacak şekilde koronalden tabana kadar yarık şeklinde açılsaydı klinik olarak dehisens tanısı alırdı. Genellikle ince labial kortikal kemik, dental malpozisyon ve kök protrüzyonu varlığında ortaya çıkan bu defektler mukogingival cerrahi prognozunu sınırlar.

**Soru 2 (ID: cbfd5796-51de-44d6-ab7d-5c0c5cdcb262)**
Soru Kökü: Periodontal cerrahi sırasında flep kaldırıldığında, dişin fasiyal yüzeyinde kökün üzerinde kemiğin bulunmadığı izole bir alan saptanmış, ancak marjinal kemiğin sağlam olduğu ve defektle birleşmediği görülmüştür. Bu anatomik osseoz topografi varyasyonunun tanımı aşağıdakilerden hangisidir?
Doğru Şık (A): Fenestrasyon
Açıklama: Kök üzerinde pencere şeklinde kemik kaybı olup marjinal kemiğin intakt kaldığı anatomik defektlere fenestrasyon denir. Marjinal kemiğin de yıkılarak defekte dahil olduğu durum ise dehisens olarak adlandırılır (en güçlü çeldirici). Belirgin kök konturları ve ince labial kemik duvarı bu durumun en önemli predispozan faktörleridir.

---

### ÇİFT 4 (Benzerlik: 0.80)

**Soru 1 (ID: 4d7c2d51-043d-4c5d-8049-161ffa98832c)**
Soru Kökü: Elli yaşında, periodontal sondalama derinlikleri 2-3 mm arası olan sağlıklı bir hastanın estetik şikayeti klinik kron boylarının uzun görünmesidir. Yapılan ölçümlerde sulkus tabanının sement üzerinde konumlandığı ve mine-sement sınırının (CEJ) kök sementiyle birlikte açığa çıktığı saptanmıştır. Bu anatomik durum pasif erupsiyonun hangi evresi ile eşleşmektedir?
Doğru Şık (D): Evre 4
Açıklama: Pasif erupsiyonun 4. evresinde, birleşim epiteli tamamen sement üzerindedir, sulkus tabanı apikale inerek sementin üzerindedir ve kök yüzeyi (sement) ağız ortamına açığa çıkmıştır. Evre 3'te sulkus tabanı tam CEJ'de iken açığa çıkan kök yoktur. Bu hasta klinik olarak çekilme (recession) gösteren klasik Evre 4 pasif erupsiyon tablosundadır.

**Soru 2 (ID: 9c6d5a0e-4f44-41ca-a1b5-238a0917e6f5)**
Soru Kökü: Altmış beş yaşında periodontal olarak sağlıklı bir erkek hastanın muayenesinde, dişeti sulkusunun tabanının tam olarak mine-sement sınırında (MSH) yer aldığı ve birleşim epitelinin tamamının sement üzerinde konumlandığı gözlenmiştir. Bu klinik tablo pasif erupsiyonun hangi evresi ile uyumludur?
Doğru Şık (B): Evre 3
Açıklama: Pasif erupsiyonun 3. evresinde sulkus tabanı mine-sement sınırında konumlanırken, birleşim epitelinin tamamı sement üzerinde yer alır. Evre 2'de birleşim epitelinin bir kısmı minede bir kısmı sementte iken, Evre 4'te sulkus tabanı sementin üzerine iner ve kök yüzeyi açığa çıkar. Hastanın mevcut ataşman durumu Evre 3'ün karakteristik tanımına tam uymaktadır.

---

### ÇİFT 5 (Benzerlik: 0.79)

**Soru 1 (ID: 7b1bc364-1f50-4e7e-b663-80cbbcb60403)**
Soru Kökü: Bir alt çene birinci molar dişin çekimi sırasında hekim, davye ile dişi koronal yönde vertikal olarak lükse etmeye (ekstrüzyon hareketi) çalışmaktadır. Bu zorlayıcı vertikal çekme kuvvetine karşı ilk ve en güçlü gerilim direncini gösteren periodontal ligament lif grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Alveolar kret lifleri
Açıklama: Alveolar kret lifleri, epitel ataşmanının hemen altındaki servikal sementten çıkıp apikal ve dışa yönlenerek alveol kretin tepe noktasına tutunurlar; dişi alveolden dışarı çekmeye (ekstrüzyon) çalışan kuvvetlere karşı asıl primer direnci oluştururlar. Oblik lifler ise alan olarak en geniş gruptur ancak kökü yukarıdan aşağıya (kemiğe doğru) gömülmeye zorlayan çiğneme basınçlarını asıcı olarak karşılar. Bu anatomik yönelim nedeniyle hekimin çekim sırasındaki çekme kuvveti önce kret grubunu parçalamak zorundadır.

**Soru 2 (ID: f648691b-3451-4367-8601-e5bdaa8216d2)**
Soru Kökü: Periodontal ligament lif grupları dişin fonksiyonel kuvvetlere karşı adaptasyonunu sağlar. Vertikal çiğneme kuvvetlerini karşılayarak alveol kemiğinde gerilime dönüştüren ve sayıca en fazla olan temel lif grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Oblik lifler
Açıklama: Oblik lifler periodontal ligamentin en geniş ve sayıca en fazla olan lif grubudur; koronal yönde kök doğrultulu seyrederek vertikal okluzal kuvvetleri şok absorpsiyonu ile karşılarlar. Alveolar kret lifleri ise oblik olarak zıt yönde seyrederek dişin ekstrüzyonuna ve lateral kuvvetlere direnç gösterir, vertikal kuvvetlerde temel taşıyıcı değildirler. Dişlerin dikey kuvvetleri en iyi tolere edebilmesinin mekanik altyapısı bu lif grubudur.

---

### ÇİFT 6 (Benzerlik: 0.79)

**Soru 1 (ID: 050507a8-1e2d-48d6-9f25-4fea4fca1445)**
Soru Kökü: Diş fırçalama veya lokma ısırma gibi fonksiyonel hareketler sırasında dişe iletilen mekanik stresi ve çenelerin proprioseptif reflekslerini düzenleyen, genellikle kökün sadece apikal alanında yoğunlaşmış kapsülsüz mekanoreseptör tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Ruffini benzeri reseptörler
Açıklama: Ruffini benzeri reseptörler, periodontal ligamentte ahtapot/ağaç dalları gibi yayılan ve özellikle kök apeksi çevresinde kümelenen, sürekli basınca yanıt vererek dişin konum bilgisini (propriosepsiyon) ileten primer mekanoreseptörlerdir. Serbest sinir sonlanmaları nosiseptif ağrı duyusu taşırken, Meissner korpuskülleri dokunma hissini daha koronal bir planda kök ortasından toplar. Bu reseptörlerin mekanik uyarımı, okluzal travma yaratacak aşırı basınç durumunda çeneyi hızla açma refleksini tetikler.

**Soru 2 (ID: 97b2a69b-1a22-4dbc-b081-2ed7d9081a6e)**
Soru Kökü: Dişin fonksiyonel çiğneme veya yatay hareketleri sırasında ortaya çıkan taktil (dokunma) ağırlıklı ince uyarıları algılayan ve anatomik dağılım olarak spesifik biçimde kökün orta üçlüsünde (orta kök çevresi) konumlanan periodontal reseptör aşağıdakilerden hangisidir?
Doğru Şık (A): Meissner korpuskülü
Açıklama: Meissner korpuskülü benzeri mekanoreseptörler, periodontal ligamentte dokunma ve düşük frekanslı basınç hissiyatını ileten, anatomik yerleşim olarak diş kökünün orta kesimlerinde lokalize olmuş reseptör yapılarıdır. Ruffini uzantıları ve iğ şeklindeki fibröz kapsüllü reseptörler daha çok dişin vertikal basınç merkezi olan apikal bölgeyi tercih eder. Kök üzerindeki bu uzamsal reseptör farklılaşması, trigeminal merkezin lüksasyon kuvvetinin yönünü üç boyutlu haritalamasını sağlar.

---

### ÇİFT 7 (Benzerlik: 0.79)

**Soru 1 (ID: 4853ebf7-959d-4302-be48-021b617b7746)**
Soru Kökü: Yaşlanmayla birlikte periodontal dokularda fizyolojik, hücresel ve yapısal birçok değişiklik meydana gelmektedir. Buna göre, aşağıdaki periodontal ve kemik parametrelerinden hangisi yaşlanma sürecinden **etkilenmez**?
Doğru Şık (C): Osteointegre dental implantların başarı oranı
Açıklama: Osseointegre dental implantların başarısı, çekim soketlerinin iyileşme kapasitesi ve dokuların periodontal tedaviye yanıtı fizyolojik yaşlanma sürecinden etkilenmez. Yaşlanma ile birlikte yapışık dişeti genişliği ve sement kalınlığı artarken; epitelin keratinizasyon derecesi, fibroblastların mitotik aktivitesi ve sementin geçirgenliği azalır. Öğrencilerin sıklıkla ileri yaşta kemik iyileşmesinin bozulacağını düşünmesi yaygın bir yanılgıdır, kemik metabolizması yavaşlasa da osseointegrasyon kapasitesi korunur.

**Soru 2 (ID: e5bcd80d-b01e-4e47-84f9-19c48b671a01)**
Soru Kökü: Yaşlı hastalarda gözlenen kemik ve periodontal doku değişiklikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): İleri yaşa bağlı olarak çene kemiklerinin mineral densitesinde azalma görülmesi osteointegrasyon sürecini bozar.
Açıklama: Kaynak metne göre osseointegre dental implantların başarısı yaştan etkilenmemektedir ve ileri yaşlarda görülen osteoporozis / mineral densite azalması fizyolojik yaşlanma sürecine bağlı değildir. Diğer şıklarda verilen immünolojik (Th1/Th17 sayılarında artış), hücresel (osteoklast sayısının sabit kalıp osteoblastın azalması) ve yapısal (PDL liflerinde kalınlaşma, epitelde incelme) değişikliklerin tümü yaşlanmanın fizyolojik bulguları olarak gerçekleşir. Çeldirici şık, yaşlılıkta osteointegrasyonun bozulacağı varsayımı üzerine kurulmuştur.

---

### ÇİFT 8 (Benzerlik: 0.78)

**Soru 1 (ID: 05f27d49-9c8f-46ad-a972-481cd430457f)**
Soru Kökü: Altmış beş yaşındaki sistemik olarak sağlıklı bir erkek hastanın posterior maksilla ve mandibulasındaki diş eksiklikleri osseointegre dental implantlarla tedavi edilmek istenmektedir.

Periodontal dokularda yaşlanmanın etkileri göz önüne alındığında, bu hastadaki osseointegrasyon ve yara iyileşme süreciyle ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (C): Yaşlanma süreci osseointegrasyon kapasitesini ve yara iyileşme potansiyelini anlamlı ölçüde etkilemez.
Açıklama: Yaşlanmayla birlikte kemik döngüsünde yavaşlama olsa da, klinik araştırmalar ve biyolojik veriler, sağlıklı yaşlı bireylerde osseointegre dental implantların başarısının ve çekim soketlerinin iyileşme kapasitesinin yaştan (kronolojik yaşlanmadan) olumsuz yönde etkilenmediğini açıkça göstermektedir. Kontrendikasyon veya süre uzatımı gerekmez.

**Soru 2 (ID: 7616d035-6f60-44ff-bd0c-395daf469ffc)**
Soru Kökü: 68 yaşında erkek hasta, alt çene sağ posterior bölgesindeki diş eksiklikleri nedeniyle dental implant tedavisi talebiyle kliniğe başvurmuştur. Sistemik anamnezinde herhangi bir kronik rahatsızlığı bulunmayan hastanın klinik muayenesinde periodontal dokuların fizyolojik yaşlanma değişimleri gösterdiği saptanmıştır. Bu hastanın cerrahi tedavi planlaması ve prognozu değerlendirilirken, hekimin aşağıdaki doku yanıtı parametrelerinden hangisinin genç bir bireyle aynı kapasitede kalmasını beklemesi en olasıdır?
Doğru Şık (C): Ekstraksiyon soketinin iyileşme ve kemik formasyon kapasitesi
Açıklama: Periodontal dokularda yaşlanmayla birlikte hücresel ve immünolojik savunma zayıflasa da, çekim soketlerinin iyileşme kapasitesi ve kemiğin osseointegrasyon yeteneği değişmez. Yaşlanmayla nötrofil fagositozu, sement dokusunun permeabilitesi, tükürük akış hızı ve fibroblastların kollajen üretimi belirgin şekilde azalır. Hekim, yaşlılıkta hücresel tamir mekanizmaları değişse de implantın osseointegrasyon süreci açısından hastayı genç bir bireyle eşdeğer kategoride değerlendirmelidir.

---

### ÇİFT 9 (Benzerlik: 0.78)

**Soru 1 (ID: a391dad9-9a9a-4f81-b702-11b0ba9f962d)**
Soru Kökü: Periodontal ligamentin temel fibril gruplarından olan ve dişlerin servikal alanından çıkıp interproksimal bölgede alveolar kret tepesi üzerinden aşarak komşu dişin sementine gömülen, bu sayede kemiğe atake olmadan gingivaya ait bir yapı gibi davranan lif grubu aşağıdakilerden hangisidir?
Doğru Şık (A): Transseptal lifler
Açıklama: Transseptal lifler, interdental kemiği horizontal olarak aşarak komşu iki dişin sementlerini birbirine bağlarlar; kemiğe tutunmadıkları için sıklıkla gingival lif grubu olarak da sınıflandırılırlar ve periodontal yıkım sonrası tamir kapasiteleri yüksektir. Alveolar kret lifleri ise sementten alveolar krete oblik uzanır ve dişi kemiğe bağlar (güçlü çeldirici), transseptal lifler komşu dişe tutunma mekanizmasıyla ayrılır.

**Soru 2 (ID: f648691b-3451-4367-8601-e5bdaa8216d2)**
Soru Kökü: Periodontal ligament lif grupları dişin fonksiyonel kuvvetlere karşı adaptasyonunu sağlar. Vertikal çiğneme kuvvetlerini karşılayarak alveol kemiğinde gerilime dönüştüren ve sayıca en fazla olan temel lif grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Oblik lifler
Açıklama: Oblik lifler periodontal ligamentin en geniş ve sayıca en fazla olan lif grubudur; koronal yönde kök doğrultulu seyrederek vertikal okluzal kuvvetleri şok absorpsiyonu ile karşılarlar. Alveolar kret lifleri ise oblik olarak zıt yönde seyrederek dişin ekstrüzyonuna ve lateral kuvvetlere direnç gösterir, vertikal kuvvetlerde temel taşıyıcı değildirler. Dişlerin dikey kuvvetleri en iyi tolere edebilmesinin mekanik altyapısı bu lif grubudur.

---

### ÇİFT 10 (Benzerlik: 0.78)

**Soru 1 (ID: 1380708f-c77c-44e7-9e16-918c4e3c823a)**
Soru Kökü: Epidemiyolojik ve klinik verilere göre, çocuklarda dental plağa bağlı oluşan gingivitis tablosunun yetişkinlerden farklı olarak yıkıcı periodontitise dönüşmesi oldukça nadir görülmektedir. 

Çocuklardaki bu yüksek direnci açıklayan dokusal ve immünolojik özellik aşağıdakilerden hangisidir?
Doğru Şık (D): Birleşim epitelinin daha kalın olması ve immün yanıtı antikor üreten B-lenfositlerden ziyade T-lenfositlerin domine etmesi
Açıklama: Çocuklarda gingivitisin periodontitise nadiren dönüşmesinin temel nedenleri şunlardır: 1) Süt dişlenmesinde birleşim epiteli kalındır ve bakteriyel toksinlere karşı daha az geçirgendir. 2) İnflamatuar lezyonda doku yıkımını hızlandıran B-lenfosit ve plazma hücreleri daha azdır, savunmayı lokal kontrol sağlayan T-lenfositler domine eder.

**Soru 2 (ID: eb99beec-1c98-4da4-9ecd-cc84a7655e23)**
Soru Kökü: Sekiz yaşındaki kız çocuğunda yaygın marjinal dişeti kanaması ve enflamasyon saptanmış, ancak radyografide herhangi bir kemik veya ataşman kaybı izlenmemiştir. Çocuklarda plağa bağlı gingivitisin periodontitise dönüşme oranının yetişkinlere göre nadir olmasının temel nedeni aşağıdakilerden hangisi **değildir**?
Doğru Şık (D): Çocukluk çağında mikrofloranın Porphyromonas gingivalis'ten tamamen yoksun olması
Açıklama: Çocuklarda gingivitis nadiren periodontitise ilerler çünkü T-hücre dominant, B-hücre fakir bir bağışıklık yanıtı vardır ve birleşim epiteli mekanik olarak daha kalındır. Ancak çocuk mikroflorası P. gingivalis'ten tamamen yoksun değildir; gingivitisli çocukların biyofilminde %68 oranında P. gingivalis saptanabildiği klinik olarak kanıtlanmıştır (en güçlü çeldirici). Toksin penetrasyonuna anatomik direnç ön plandadır.

---

### ÇİFT 11 (Benzerlik: 0.78)

**Soru 1 (ID: 505211d1-f213-4534-aab7-ab4a9ddccc58)**
Soru Kökü: Yapışık dişetinin klinik özelliklerinden biri olan ve bağ dokusu papillerinin epitele doğru yaptığı girintilerden (retepeg) kaynaklanan pürtüklü yüzey görünümü (stippling) ile ilgili aşağıdaki ifadelerden hangisi **doğrudur**?
Doğru Şık (D): Genellikle 5 yaş civarında klinik olarak görülmeye başlanır.
Açıklama: Stippling (pürtüklülük) yenidoğan döneminde mevcut değildir; genellikle 5 yaş civarında görülmeye başlar ve erişkin yaşta artarak yaşlılıkta tekrar azalır. Marjinal sınırlarda düzleşme varken interdental papilin orta kısımlarında pürtüklülük izlenir. Stippling oluşumu doğrudan keratinizasyon derecesi ve bağ dokusundaki rete-peg yapılarıyla ilişkilidir.

**Soru 2 (ID: 9afc4c87-e6b3-4a64-b83b-6de8e47f45ec)**
Soru Kökü: Dişetinde gözlemlenen stippling (pürtüklülük) yapısının fizyolojik ve yaşa bağlı seyri ile ilgili olarak aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Yenidoğan döneminde oldukça belirgin olarak izlenirken, 5 yaşından sonra silinmeye başlar.
Açıklama: Stippling (portakal kabuğu görüntüsü) yenidoğanda hiç yoktur. Yaklaşık 5 yaş civarında görülmeye başlanır ve dokuların mekanik uyaranlara adapte olduğu erişkin yaşta zirveye ulaşır, yaşlılıkta ise bağ dokusundaki değişikliklerle birlikte tekrar azalır. Marjinal dişetinin serbest yapısından ötürü stippling göstermemesi ve inflamasyonda (ödemle birlikte çukurcukların dolması) kaybolması ise doğru temel bilgilerdir.

---

### ÇİFT 12 (Benzerlik: 0.78)

**Soru 1 (ID: a3cb1800-ff9d-4ea5-8f71-e10da2ff7bad)**
Soru Kökü: Dişeti bağ dokusunun zemin matrikssinde bulunan glikoproteinlerden olan ve epitel hücrelerinin ataşman proteini olarak görev yapan molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Laminin
Açıklama: Laminin, bazal laminanın lamina lucida tabakasında yoğun olarak bulunan ve epitel hücrelerinin hemidesmozomlar aracılığıyla tutunmasını sağlayan majör ataşman glikoproteinidir. En güçlü çeldirici olan fibronektin ise bağ dokusu içinde fibroblastların kollajen fibrillere yapışmasını sağlayan ana ataşman proteinidir. Bu iki glikoprotein, epitel ve mezenşim kompartmanlarının yapısal stabilitesini farklı hedeflerle sağlar.

**Soru 2 (ID: f22064a1-8715-4bc9-8cc3-a15a368e45bb)**
Soru Kökü: Birleşim epitelinin dişe tutunma mekanizmasında rol oynayan ve epitelyal hücrelerin bazal laminaya fiziksel ataşmanını sağlayan, lamina lucidada yerleşik temel glikoprotein aşağıdakilerden hangisidir?
Doğru Şık (E): Laminin
Açıklama: Laminin, bazal membranın lamina lucida tabakasında yer alan ve epitelyal hemidesmozomların buraya tutunmasını sağlayarak birleşim epitelinin biyolojik adaptasyonuna hizmet eden temel glikoproteindir. Fibronektin ise bağ dokusunda fibroblastların kollajen fibrillere tutunmasını sağlayan moleküldür; dolayısıyla laminin epitelin, fibronektin ise bağ dokusunun ana ataşman proteinidir. Bu fark, periodontal membran bütünlüğünün histolojik anahtarıdır.

---

### ÇİFT 13 (Benzerlik: 0.78)

**Soru 1 (ID: c98d7ed9-7b90-4a28-973c-fd7e6770f81c)**
Soru Kökü: Yaşlanma ile birlikte alveoler kemikte ve periodontal ligamentte (PDL) meydana gelen hücresel değişikliklerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Kemik rezorpsiyonunda görev alan osteoklast sayısında belirgin bir azalma meydana gelir.
Açıklama: Yaşlanma sürecinde alveoler kemikte osteoblast sayısında ve yapım aktivitesinde azalma görülürken, osteoklast sayısında bir değişiklik (azalma) yaşanmaz. Osteoklastların sabit kalıp osteoblastların azalması, yaşlılarda net kemik döngüsünün (remodeling) rezorpsiyon (yıkım) yönüne kaymasına ve apozisyondan daha hızlı olmasına neden olur.

**Soru 2 (ID: e5bcd80d-b01e-4e47-84f9-19c48b671a01)**
Soru Kökü: Yaşlı hastalarda gözlenen kemik ve periodontal doku değişiklikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): İleri yaşa bağlı olarak çene kemiklerinin mineral densitesinde azalma görülmesi osteointegrasyon sürecini bozar.
Açıklama: Kaynak metne göre osseointegre dental implantların başarısı yaştan etkilenmemektedir ve ileri yaşlarda görülen osteoporozis / mineral densite azalması fizyolojik yaşlanma sürecine bağlı değildir. Diğer şıklarda verilen immünolojik (Th1/Th17 sayılarında artış), hücresel (osteoklast sayısının sabit kalıp osteoblastın azalması) ve yapısal (PDL liflerinde kalınlaşma, epitelde incelme) değişikliklerin tümü yaşlanmanın fizyolojik bulguları olarak gerçekleşir. Çeldirici şık, yaşlılıkta osteointegrasyonun bozulacağı varsayımı üzerine kurulmuştur.

---

### ÇİFT 14 (Benzerlik: 0.78)

**Soru 1 (ID: 9c6d5a0e-4f44-41ca-a1b5-238a0917e6f5)**
Soru Kökü: Altmış beş yaşında periodontal olarak sağlıklı bir erkek hastanın muayenesinde, dişeti sulkusunun tabanının tam olarak mine-sement sınırında (MSH) yer aldığı ve birleşim epitelinin tamamının sement üzerinde konumlandığı gözlenmiştir. Bu klinik tablo pasif erupsiyonun hangi evresi ile uyumludur?
Doğru Şık (B): Evre 3
Açıklama: Pasif erupsiyonun 3. evresinde sulkus tabanı mine-sement sınırında konumlanırken, birleşim epitelinin tamamı sement üzerinde yer alır. Evre 2'de birleşim epitelinin bir kısmı minede bir kısmı sementte iken, Evre 4'te sulkus tabanı sementin üzerine iner ve kök yüzeyi açığa çıkar. Hastanın mevcut ataşman durumu Evre 3'ün karakteristik tanımına tam uymaktadır.

**Soru 2 (ID: efb28ed8-007e-45de-b1e8-be093793a856)**
Soru Kökü: Yirmi dört yaşındaki erkek hastanın muayenesinde klinik kuron boylarının kısa olduğu ve pasif erüpsiyonun yetersiz seviyede kaldığı tespit edilmiştir. Fizyolojik veya patolojik olabilen pasif erüpsiyon sürecinin 3. evresinde sulkus tabanının ve birleşim epitelinin konumu aşağıdakilerden hangisinde doğru tanımlanmıştır?
Doğru Şık (D): Birleşim epitelinin tamamı sementtedir, sulkus tabanı mine-sement sınırındadır.
Açıklama: Pasif erüpsiyonun 3. evresinde birleşim epitelinin tamamı sement üzerine göç etmiş durumdadır ve sulkusun tabanı tam mine-sement sınırında (CEJ) konumlanır. En güçlü çeldirici olan Evre 4'te ise sulkus tabanı semente inmiş ve klinik olarak kök yüzeyi (sement) ağız ortamına açığa çıkmıştır. Bu migrasyon döngüsü dentogingival ünitenin dinamik yaşlanma sürecini gösterir.

---

### ÇİFT 15 (Benzerlik: 0.78)

**Soru 1 (ID: 63b67001-52f1-4c0b-b74f-2e5601f472b4)**
Soru Kökü: Periodontal enfeksiyonlara karşı konak yanıtında yaşlanmayla birlikte ortaya çıkan immünolojik değişikliklerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Nötrofillerin bakteriyel fagositoz kapasitesinde ve antimikrobiyal aktivitesinde artış izlenir.
Açıklama: Yaşlanma ile birlikte, bakterilere karşı ilk savunma hattını oluşturan nötrofillerin etkinliğinde artış değil, azalma meydana gelir. Nötrofillerin bakteriyel fagositoz kapasitesi zayıflar ve hücre dışı tuzak (NET) oluşturma mekanizmaları bozulur. İmmün sistem genel olarak (Th1, Th17 ve M1 makrofajlar üzerinden) daha kronik pro-inflamatuar, ancak akut fagositozda daha zayıf bir hale gelir.

**Soru 2 (ID: a24d10ad-9eb8-42d6-9ff6-45666c4ef7c0)**
Soru Kökü: Klinik araştırmalar, periodontal hastalıklarda immün yanıtın fizyolojik yaşlanma sürecinden doğrudan etkilendiğini göstermektedir. İleri yaştaki bireylerde periodonsiyumdaki bağışıklık hücre profili incelendiğinde, aşağıdakilerden hangisinin **artış** göstermesi beklenir?
Doğru Şık (B): Makrofajların proinflamatuar (M1 tipi) fenotipe kayması
Açıklama: Yaşlanma ile birlikte immün sistemde proinflamatuar bir ortam (inflammaging) gelişir; Th1, Th17 ve makrofajların M1 (yıkıcı/proinflamatuar) fenotipi artış gösterir. Nötrofillerin fagositoz ve NET oluşturma kapasiteleri, ayrıca fibroblastların kollajen sentez hızı belirgin şekilde azalır (güçlü çeldiriciler). Plakta ise A.a yerini yaşla birlikte P. gingivalis'e bırakır.

---

### ÇİFT 16 (Benzerlik: 0.77)

**Soru 1 (ID: 4853ebf7-959d-4302-be48-021b617b7746)**
Soru Kökü: Yaşlanmayla birlikte periodontal dokularda fizyolojik, hücresel ve yapısal birçok değişiklik meydana gelmektedir. Buna göre, aşağıdaki periodontal ve kemik parametrelerinden hangisi yaşlanma sürecinden **etkilenmez**?
Doğru Şık (C): Osteointegre dental implantların başarı oranı
Açıklama: Osseointegre dental implantların başarısı, çekim soketlerinin iyileşme kapasitesi ve dokuların periodontal tedaviye yanıtı fizyolojik yaşlanma sürecinden etkilenmez. Yaşlanma ile birlikte yapışık dişeti genişliği ve sement kalınlığı artarken; epitelin keratinizasyon derecesi, fibroblastların mitotik aktivitesi ve sementin geçirgenliği azalır. Öğrencilerin sıklıkla ileri yaşta kemik iyileşmesinin bozulacağını düşünmesi yaygın bir yanılgıdır, kemik metabolizması yavaşlasa da osseointegrasyon kapasitesi korunur.

**Soru 2 (ID: b0287562-a252-4977-bff8-cabe6c2d2207)**
Soru Kökü: Periodontal dokularda yaşlanmayla birlikte meydana gelen fizyolojik değişiklikler incelendiğinde, aşağıdaki parametrelerden hangisinde belirgin bir **artış** gözlenmesi beklenir?
Doğru Şık (E): Periodontal ligamentte yer alan elastik liflerin miktarı
Açıklama: Yaşlanma ile periodontal ligamentte ve bağ dokusunda kollajen sentezi ve fibroblast aktivitesi azalırken, elastik liflerin sayısında ve hiyalinizasyon alanlarında artış gözlenir. En güçlü çeldirici olan bağ dokusu epitelinin durumu tam tersine incelme ve keratinizasyonda azalma yönündedir, bu da mukozanın mekanik travmalara direncini düşürür. Hücresel düzeydeki bu makromoleküler değişim, dokunun esnekliğini ve tamir kapasitesini sınırlar.

---

### ÇİFT 17 (Benzerlik: 0.77)

**Soru 1 (ID: d115bd04-9193-483e-8c9d-b8806fb396a7)**
Soru Kökü: Yaşlı bir hastanın dişeti dokusunun histolojik incelemesinde, epitel ile bağ dokusu arasındaki sınırın genç bireylere kıyasla yapısal değişime uğradığı saptanmıştır.

Bu bölgedeki yaşa bağlı en karakteristik morfolojik değişiklik aşağıdakilerden hangisidir?
Doğru Şık (B): Rete-peg (epitelyal girinti) görüntüsünde düzleşme
Açıklama: Yaşlanmayla birlikte dişeti epitelinin bağ dokusuna yaptığı girintiler olan rete-peg'lerin (epitelyal kretler) boylarında kısalma ve düzleşme meydana gelir. Bu düzleşme, epitel ile bağ dokusu arasındaki yüzey alanını daraltır ve dokunun mekanik kuvvetlere karşı dayanıklılığını azaltır. Hiperkeratoz yerine keratinizasyon azalması görülür.

**Soru 2 (ID: eb2ff8c5-be22-455d-a566-c468075ceb94)**
Soru Kökü: Yaşlanma sürecinin dişeti epiteli üzerindeki etkilerine ilişkin aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Dişeti epitelinde hücresel kalınlaşma ve keratinizasyon derecesinde artış görülür.
Açıklama: Yaşlanma ile birlikte dişeti epitelinde kalınlaşma değil, aksine incelme ve keratinizasyon derecesinde azalma görülür. Bu yapısal incelme ve keratin kaybı, epitelin antijenlere karşı geçirgenliğini artırarak travmalara karşı daha frajil (kırılgan) hale gelmesine neden olur. Rete-peglerdeki düzleşme de bu doku zayıflamasının bir parçasıdır.

---

### ÇİFT 18 (Benzerlik: 0.77)

**Soru 1 (ID: d9f28e7b-c6f6-4d2c-8b5d-7fcfce779c62)**
Soru Kökü: Hücreli sement ile hücresiz sementin oluşum zamanı ve biyolojik yapısı karşılaştırıldığında, aşağıdakilerden hangisi bu iki doku arasındaki temel farklardan biridir?
Doğru Şık (E): Hücresiz sement diş oklüzal düzleme ulaşmadan önce şekillenirken, hücreli sement esas olarak diş sürdükten sonra oluşur.
Açıklama: Hücresiz (asellüler) sement, diş henüz erüpsiyon aşamasındayken ve oklüzal düzleme ulaşmadan önce kökün servikal yarısında oluşan ilk sement tabakasıdır. Hücreli (sellüler) sement ise diş fonksiyona geçtikten sonra özellikle apikal üçlü ve furkasyonda daha düzensiz, hızlı sentezlenen ve sementosit içeren sekonder bir tabakadır.

**Soru 2 (ID: e62d6e4d-f18a-4b14-b3e8-b114a7425280)**
Soru Kökü: Sement dokusunun özellikleri incelendiğinde, hücreli ve hücresiz sement arasındaki farklılıklara dair aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Hücreli sement, hücresiz semente göre daha fazla kalsifiye olmuştur.
Açıklama: Hücreli sement daha hızlı gelişen ve reaktif bir doku olduğu için, hücresiz semente göre daha az kalsifiye olmuştur. Çeldirici olarak verilen hücresiz sementin oklüzyon öncesi oluşumu doğru bir bilgidir ve bu dokunun daha düzenli, inorganik içeriği yüksek bir matrikse sahip olmasını sağlar. Hücreli sementin apikaldeki konumu, dişin sürmesini telafi etmek için yaşam boyu devam eden apozisyonel kalınlaşma mekanizmasıyla ilişkilidir.

---

### ÇİFT 19 (Benzerlik: 0.77)

**Soru 1 (ID: 4e671015-85e7-45e9-b52e-f0151383a143)**
Soru Kökü: Dişeti epitelinde keratinositler dışında bağışıklık ve duyu sistemine ait hücreler de bulunur. Dendritik uzantılarıyla öne çıkan bu hücrelerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Langerhans hücreleri mikrobiyal geçişin en yoğun olduğu birleşim epitelinde bol miktarda bulunur.
Açıklama: Langerhans hücreleri oral epitelde ve daha az sayıda sulkus epitelinde bulunmasına rağmen, birleşim epitelinde bulunmazlar. En güçlü çeldirici olan kemik iliği kökenli olmaları ve antijen sunmaları doğru bilgilerdir; ancak anatomik olarak birleşim epitelinin hızlı turnoverı ve non-keratinize gevşek yapısı içinde bu hücreler lokalize olmamıştır. Vücut savunması bu bölgede daha çok sızan PMNL'ler üzerinden yürür.

**Soru 2 (ID: d8c1f9ff-c84d-4e50-adb9-dba6bb569121)**
Soru Kökü: Dişeti epitelinde bulunan keratinosit dışı (non-keratinosit) berrak hücreler ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (B): Langerhans hücreleri sadece birleşim epitelinde yoğun olarak lokalizedir
Açıklama: Langerhans hücreleri, normal dişetinin oral epitelinde ve daha az sayıda sulkus epitelinde bulunurken, birleşim epitelinde bulunmazlar. Bu hücrelerin antijenik yükün en yüksek olduğu birleşim epitelinden ziyade daha koroner seviyelerde konumlanması hücresel bir farklılıktır. Melanosit ve Merkel hücrelerinin bazal ve derin katmanlardaki tanımlamaları ise tamamen doğrudur.

---

### ÇİFT 20 (Benzerlik: 0.77)

**Soru 1 (ID: 16fc3708-429f-4398-86c2-d7957f6f2dad)**
Soru Kökü: Otuz iki yaşındaki kadın hasta, dişetlerinde son altı ayda artan kahverengi-siyah renklenmeler şikayetiyle başvurmuştur. Alınan anamnezde sistemik bir hastalığı olmadığı ancak düzenli ilaç kullandığı öğrenilmiştir. Bu hastada endojen melanin pigmentasyonunu artıran farmakolojik ajan aşağıdakilerden hangisi olabilir?
Doğru Şık (D): Oral kontraseptifler
Açıklama: Oral kontraseptif kullanımı, hamilelik ve menstruasyon gibi hormonal dalgalanmalar dişetindeki melanin pigmentasyonunu artırarak kahverengi-siyah renklenmelere neden olabilir. Güçlü çeldiriciler olan fenitoin ve siklosporin melanin pigmentasyonu değil, fibroblast proliferasyonu üzerinden ilaca bağlı dişeti büyümesine (hiperplazi) yol açarlar. Bu durum sistemik endokrinolojik etkinin lokal mukozal yansımasıdır.

**Soru 2 (ID: 212933f0-3b25-4fd5-b4b6-630c7ec69b3d)**
Soru Kökü: Otuz yaşında hamile kadın hastanın oral muayenesinde dişetlerinde dağınık kahverengi pigmentasyonlar izlenmiştir. Sistemik hastalık, sigara kullanımı veya ağır metal maruziyeti öyküsü bulunmayan bu hastadaki renklenmenin en olası nedeni ve artan pigment aşağıdakilerden hangisinde verilmiştir?
Doğru Şık (B): Hormonal değişimlere bağlı pigmentasyon - Melanin
Açıklama: Hamilelik, oral kontraseptif kullanımı ve menstrüasyon gibi durumlardaki hormonal değişimler, melanosit aktivitesini artırarak fizyolojik melanin pigmentasyonuna neden olabilir. Hastanın ağır metal öyküsü olmaması kurşunu (Burton), sistemik hastalık öyküsü olmaması hemokromatozisi (Demir) dışlar. Bu kahverengi lekeler gebelikte sık karşılaşılan melanin birikimleridir.

---

### ÇİFT 21 (Benzerlik: 0.76)

**Soru 1 (ID: 52d6b3af-6bc6-45bd-944e-c52c2ac123ed)**
Soru Kökü: Periodonsiyumda ilerleyen yaşa bağlı gelişen hücresel yaşlanma, yapısal ve morfolojik değişiklikler incelendiğinde, aşağıdakilerden hangisi birey yaşlandıkça miktar/kalınlık olarak belirgin şekilde **artış** gösteren anatomik parametrelerden biridir?
Doğru Şık (E): Dişin kök apikal bölgesi ve lingual yüzeyindeki sement kalınlığı
Açıklama: Sementasyon yaşam boyu dinamik biçimde apozisyonel olarak apikal ve furkasyon bölgelerinde devam ettiği için yaşlanmayla birlikte total sement kalınlığı (özellikle kök ucunda) gençliğe kıyasla 5-10 katına kadar artar. Yaşlılıkta bunun tam aksine epitel stratumları incelir, hücre yenilenme hızı yavaşlar, osteoblastik apozisyon osteoklastik yıkımın gerisinde kalır. Bu nedenle sementteki bu yığılma hipertrofisi atrizyonu kompanze etmeye dönük fi zyolojik bir telafi mekanizması olarak okunur.

**Soru 2 (ID: b0287562-a252-4977-bff8-cabe6c2d2207)**
Soru Kökü: Periodontal dokularda yaşlanmayla birlikte meydana gelen fizyolojik değişiklikler incelendiğinde, aşağıdaki parametrelerden hangisinde belirgin bir **artış** gözlenmesi beklenir?
Doğru Şık (E): Periodontal ligamentte yer alan elastik liflerin miktarı
Açıklama: Yaşlanma ile periodontal ligamentte ve bağ dokusunda kollajen sentezi ve fibroblast aktivitesi azalırken, elastik liflerin sayısında ve hiyalinizasyon alanlarında artış gözlenir. En güçlü çeldirici olan bağ dokusu epitelinin durumu tam tersine incelme ve keratinizasyonda azalma yönündedir, bu da mukozanın mekanik travmalara direncini düşürür. Hücresel düzeydeki bu makromoleküler değişim, dokunun esnekliğini ve tamir kapasitesini sınırlar.

---

### ÇİFT 22 (Benzerlik: 0.76)

**Soru 1 (ID: 360638c4-6edd-4c95-8d6f-1e7d1cb9bcfe)**
Soru Kökü: Osteoblastlar tarafından yeni sentezlenmiş, ancak kalsiyum ve fosfat iyonlarının henüz çökmediği için mineralize olmamış, temel olarak tip 1 kollajenden oluşan kemik organik matriksine ne ad verilir?
Doğru Şık (C): Osteoid doku
Açıklama: Osteoid, osteoblastların ürettiği ve henüz kalsifiye olmamış organik kemik matriksidir. Mineral çekirdeklenmesi bu osteoid yapı içindeki kollajen fibriller boyunca gelişerek hidroksiapatit kristallerini oluşturur. Sementoid sementin kalsifiye olmamış hali iken, demet kemiği tam mineralize bir yapısal formdur.

**Soru 2 (ID: 71131a79-931f-412f-81e6-ec8b244c33c6)**
Soru Kökü: Sementogenez sürecinde sementoblastlar tarafından üretilen ve henüz kalsifiye olmamış, düzensiz dizilmiş interfibriller ara madde içinde kolajen fibrillerden oluşan matriks yapısına ne ad verilir?
Doğru Şık (A): Sementoid
Açıklama: Sementoid, kemik yapımındaki osteoide benzer şekilde, sementoblastlar tarafından ilk salgılanan ancak henüz kalsiyum ve fosfat iyonlarının çökmediği mineralize olmamış organik matrikstir. Sementikel ise periodontal ligament içinde bulunan kalsifiye ektopik sement kütleleridir. Mineralizasyon, bu sementoid tabakanın üzerine hidroksiapatit kristallerinin depolanmasıyla ilerler.

---

### ÇİFT 23 (Benzerlik: 0.76)

**Soru 1 (ID: 9a5e3416-ea7b-4887-9d7f-062e0c155b06)**
Soru Kökü: Periodontal cerrahi sonrası iyileşme evresindeki 35 yaşındaki bir hastanın dişeti biyopsisi incelenmektedir. Lamina propriadaki toplam hücre popülasyonunun yaklaşık %65'ini oluşturan, mezenşim kökenli olup kollajen sentezi ve yıkımından sorumlu temel hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Fibroblastlar
Açıklama: Fibroblastlar, dişeti bağ dokusunun (lamina propria) baskın hücreleri olup toplam hücresel popülasyonun yaklaşık %65'ini oluştururlar. Mast, makrofaj ve histiyosit gibi hücreler inflamasyon ve savunma süreçlerinde sayısal olarak artsalar da temel bağ dokusu hücresi daima fibroblasttır. Hem sentez hem de lizozomal enzimlerle kollajen yıkımı yaparak yara tamirinde matriksteki yapım-yıkım dengesini tek başlarına idame ettirirler.

**Soru 2 (ID: eb84e7e0-11c4-4a95-b7c8-bc571ca534ef)**
Soru Kökü: Kırk iki yaşında sistemik sağlıklı kadın hasta, ortodontik tedavi amacıyla kliniğe başvurmuştur. Diş hareketleri sırasında periodontal ligamentin fizyolojik remodelasyonu gerekmektedir. Periodontal ligamentte hem yapım hem de enzimler aracılığıyla yıkım faaliyetlerini eşzamanlı yürüterek bu remodelasyonu tek başına koordine eden temel hücre aşağıdakilerden hangisidir?
Doğru Şık (C): Fibroblast
Açıklama: Fibroblastlar, sadece kollajen sentezi yapmakla kalmayıp matriksmetalloproteinaz (MMP) enzimleri ile mevcut kollajeni sindirerek (yıkım) bağ dokusu döngüsünü sağlarlar. Ortodontik gerilim kuvvetlerinde hızlı bir şekilde reorganize olarak periodontal ligament genişliğini fizyolojik sınırlarda tutan ana aktör fibroblasttır. Osteoklastlar kemiği yıkar, sementoblastlar sement yapar ancak ligament bağ dokusunun turnover'ı tamamen fibroblastların sorumluluğundadır.

---

### ÇİFT 24 (Benzerlik: 0.76)

**Soru 1 (ID: 72334796-f50a-4b8e-9620-5ba322ab0ca1)**
Soru Kökü: Periodontal ligamentin, dişe gelen okluzal kuvvetleri karşılayarak şok absorpsiyonu sağlamasını açıklayan iki temel teori bulunmaktadır. Okluzal kuvvetlerin sıvı hidrodinamiği ile karşılandığını ve PDL liflerinin bu süreçte ancak ikincil bir rol oynadığını savunan mekanizma aşağıdakilerden hangisidir?
Doğru Şık (E): Viskoelastik teori
Açıklama: Viskoelastik teoride okluzal kuvvetler periodontal ligament içerisindeki sıvılar (kan damarları ve interstisyel sıvı) tarafından karşılanırken, lifler bu sistemde gerilimi yönlendiren ikincil unsurlardır. Tansiyonel teoride ise kuvvetleri doğrudan kollajen PDL fibrillerinin gerilerek kemiğe ilettiği savunulur (en güçlü çeldirici). Bu iki teori, dişin fizyolojik mobilitesinin hidrolik ve mekanik komponentlerini temsil eder.

**Soru 2 (ID: 8305aacf-004a-4504-9964-fd992b8f6160)**
Soru Kökü: Okluzal kuvvetlere karşı periodontal ligamentin (PDL) gösterdiği adaptif şok emilimini açıklayan teorilerden hangisi, gelen dikey yükün temel olarak ana kollajen fibrillerin gerilmesi prensibiyle alveol kemiğine bir 'çekme kuvveti' olarak iletilmesi mekanizmasına dayanır?
Doğru Şık (C): Tansiyonel teori
Açıklama: Tansiyonel teori, dişin bir hamak gibi asılı olduğunu ve özellikle oblik kollajen lif gruplarının çiğneme yükünde çadır ipi gibi gerildiğini, bu gerilimin kemiğe bir yıkım baskısı değil, kemik yapımını uyaran bir 'gerilim/çekme' kuvveti olarak yansıdığını savunur. Viskoelastik model tamamen sıvı hareketini vurgularken, tansiyonel teori dokunun fibröz katı bileşenlerini biyomekanik aktör yapar. Kemik dokusunun basınca yıkımla, çekmeye yapımla cevap vermesi yasası bu sistemin ana dayanağıdır.

---

### ÇİFT 25 (Benzerlik: 0.75)

**Soru 1 (ID: 4853ebf7-959d-4302-be48-021b617b7746)**
Soru Kökü: Yaşlanmayla birlikte periodontal dokularda fizyolojik, hücresel ve yapısal birçok değişiklik meydana gelmektedir. Buna göre, aşağıdaki periodontal ve kemik parametrelerinden hangisi yaşlanma sürecinden **etkilenmez**?
Doğru Şık (C): Osteointegre dental implantların başarı oranı
Açıklama: Osseointegre dental implantların başarısı, çekim soketlerinin iyileşme kapasitesi ve dokuların periodontal tedaviye yanıtı fizyolojik yaşlanma sürecinden etkilenmez. Yaşlanma ile birlikte yapışık dişeti genişliği ve sement kalınlığı artarken; epitelin keratinizasyon derecesi, fibroblastların mitotik aktivitesi ve sementin geçirgenliği azalır. Öğrencilerin sıklıkla ileri yaşta kemik iyileşmesinin bozulacağını düşünmesi yaygın bir yanılgıdır, kemik metabolizması yavaşlasa da osseointegrasyon kapasitesi korunur.

**Soru 2 (ID: 52d6b3af-6bc6-45bd-944e-c52c2ac123ed)**
Soru Kökü: Periodonsiyumda ilerleyen yaşa bağlı gelişen hücresel yaşlanma, yapısal ve morfolojik değişiklikler incelendiğinde, aşağıdakilerden hangisi birey yaşlandıkça miktar/kalınlık olarak belirgin şekilde **artış** gösteren anatomik parametrelerden biridir?
Doğru Şık (E): Dişin kök apikal bölgesi ve lingual yüzeyindeki sement kalınlığı
Açıklama: Sementasyon yaşam boyu dinamik biçimde apozisyonel olarak apikal ve furkasyon bölgelerinde devam ettiği için yaşlanmayla birlikte total sement kalınlığı (özellikle kök ucunda) gençliğe kıyasla 5-10 katına kadar artar. Yaşlılıkta bunun tam aksine epitel stratumları incelir, hücre yenilenme hızı yavaşlar, osteoblastik apozisyon osteoklastik yıkımın gerisinde kalır. Bu nedenle sementteki bu yığılma hipertrofisi atrizyonu kompanze etmeye dönük fi zyolojik bir telafi mekanizması olarak okunur.

---

### ÇİFT 26 (Benzerlik: 0.75)

**Soru 1 (ID: 1a57ce35-9540-4060-bccc-a89daa605eb5)**
Soru Kökü: Ortodontik tedavi sonrası kök yüzeyinde oluşan mikroskobik rezorpsiyon lakünlerinin içini dolduran ve tamir amacıyla sentezlenen 'reparatif sement' aşağıdakilerden hangisidir?
Doğru Şık (C): Hücreli intrinsik fibrilli sement
Açıklama: Hücreli intrinsik fibrilli sement, kök rezorpsiyon bölgelerinde tamir amacıyla (reparatif sement) sentezlenen ve yapısında dışarıdan gelen Sharpey liflerinden ziyade sementoblastların kendi ürettiği intrinsik lifleri barındıran sementtir. Reaktif sement apikalde boyu korurken, bu reparatif sement patolojik veya travmatik lakünlerin doldurulmasında görev alır. İçerisinde sementositler bulunur.

**Soru 2 (ID: 95f8de71-adbc-4f85-b104-1e5080ef835a)**
Soru Kökü: Dişin kökünün apikal üçte birlik kısmında ve furkasyon bölgelerinde yer alan, mekanik gerilimlere ve atrizyona karşı oklüzal boyu korumak için hızlıca sentezlenen 'reaktif sement' tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Hücreli karışık tabakalı sement
Açıklama: Hücreli karışık tabakalı sement, özellikle apikal üçlü ve furkasyonlarda lokalizedir; mekanik gerilim, mezial migrasyon ve oklüzal atrizyonu kompanze etmek için sementositler tarafından hızla üretilir. Hem intrinsik hem de ekstrinsik lifleri bir arada barındırdığı için 'karışık tabakalı' olarak adlandırılır. Hızlı yapımı nedeniyle hücresiz sementten daha az kalsifiye ve daha düzensizdir.

---

### ÇİFT 27 (Benzerlik: 0.75)

**Soru 1 (ID: 40b10353-8e8d-42b0-ae4f-f78148bdcc15)**
Soru Kökü: Kemik remodelasyonu, hücresel yapım ve yıkım dengesiyle sürdürülen dinamik bir süreçtir. Bu süreçte osteoklastların kemik rezorpsiyon aktivitesini doğrudan inhibe ederek kemik yıkımını durduran hormon aşağıdakilerden hangisidir?
Doğru Şık (B): Kalsitonin
Açıklama: Kalsitonin, osteoklastlar üzerinde bulunan spesifik transmembran reseptörlerine bağlanarak onların rezorptif faaliyetlerini ve fırçamsı kenar yapılarını doğrudan hızla inhibe eder. Parathormon ise osteoblastik sitokinler üzerinden kemik yıkımını teşvik eden zıt biyolojik etkiye sahip peptit hormonudur. Kalsitoninin bu koruyucu enzimatik kısıtlaması, sistemik hiperkalsemi durumlarında ve mineral homeostazında stabilite sağlar.

**Soru 2 (ID: c8323826-d144-418c-b58e-82f03a489b64)**
Soru Kökü: Kan kalsiyum seviyesi düştüğünde salgılanan ve osteoblastları interlökin-1 ile interlökin-6 üretimi için uyararak monositlerin osteoklastlara farklılaşmasını başlatan hormon aşağıdakilerden hangisidir?
Doğru Şık (C): Parathormon
Açıklama: Parathormon (PTH), kanda serbest kalsiyum azaldığında salgılanır ve kemik yıkımını tetikleyerek kana hızlı kalsiyum geçişini sağlar. Ancak osteoklastlar üzerinde doğrudan fonksiyonel PTH reseptörü bulunmadığından, bu yıkım emrini osteoblastlar üzerinden proinflamatuar sitokin (IL-1, IL-6) salgılatarak dolaylı olarak iletir. Kalsitonin ise tam tersi mekanizmayla kan kalsiyumunu düşürmek için osteoklastları doğrudan inhibe ederek görev yapar.

---

### ÇİFT 28 (Benzerlik: 0.75)

**Soru 1 (ID: c8323826-d144-418c-b58e-82f03a489b64)**
Soru Kökü: Kan kalsiyum seviyesi düştüğünde salgılanan ve osteoblastları interlökin-1 ile interlökin-6 üretimi için uyararak monositlerin osteoklastlara farklılaşmasını başlatan hormon aşağıdakilerden hangisidir?
Doğru Şık (C): Parathormon
Açıklama: Parathormon (PTH), kanda serbest kalsiyum azaldığında salgılanır ve kemik yıkımını tetikleyerek kana hızlı kalsiyum geçişini sağlar. Ancak osteoklastlar üzerinde doğrudan fonksiyonel PTH reseptörü bulunmadığından, bu yıkım emrini osteoblastlar üzerinden proinflamatuar sitokin (IL-1, IL-6) salgılatarak dolaylı olarak iletir. Kalsitonin ise tam tersi mekanizmayla kan kalsiyumunu düşürmek için osteoklastları doğrudan inhibe ederek görev yapar.

**Soru 2 (ID: f2ea4761-a9cb-4f0b-aae6-b4de1e99abf0)**
Soru Kökü: Alveol kemiğinde fizyolojik remodeling süreci kompleks bir sitokin ağzıyla yürütülür. Kanda kalsiyum düzeyi azaldığında salgılanan Parathormon (PTH), kemik rezorpsiyonunu başlatmak için interlökin-1 (IL-1) ve interlökin-6 (IL-6) salınımını doğrudan aşağıdaki hücrelerden hangisi üzerinden uyarır?
Doğru Şık (A): Osteoblast
Açıklama: Paratiroid hormon (PTH) reseptörleri osteoblastların üzerinde bulunur; PTH bu hücreleri uyararak IL-1 ve IL-6 salgılatır, bu sitokinler de monositleri uyararak multinükleer osteoklastlara dönüşmelerini sağlar. En yaygın yanılgı PTH'ın doğrudan osteoklastı aktive ettiğidir (güçlü çeldirici), ancak sinyal zinciri yapıcı hücre olan osteoblast üzerinden yıkıcı hücrenin uyarılması (coupled remodeling) prensibine dayanır.

---

### ÇİFT 29 (Benzerlik: 0.75)

**Soru 1 (ID: 4d7c2d51-043d-4c5d-8049-161ffa98832c)**
Soru Kökü: Elli yaşında, periodontal sondalama derinlikleri 2-3 mm arası olan sağlıklı bir hastanın estetik şikayeti klinik kron boylarının uzun görünmesidir. Yapılan ölçümlerde sulkus tabanının sement üzerinde konumlandığı ve mine-sement sınırının (CEJ) kök sementiyle birlikte açığa çıktığı saptanmıştır. Bu anatomik durum pasif erupsiyonun hangi evresi ile eşleşmektedir?
Doğru Şık (D): Evre 4
Açıklama: Pasif erupsiyonun 4. evresinde, birleşim epiteli tamamen sement üzerindedir, sulkus tabanı apikale inerek sementin üzerindedir ve kök yüzeyi (sement) ağız ortamına açığa çıkmıştır. Evre 3'te sulkus tabanı tam CEJ'de iken açığa çıkan kök yoktur. Bu hasta klinik olarak çekilme (recession) gösteren klasik Evre 4 pasif erupsiyon tablosundadır.

**Soru 2 (ID: efb28ed8-007e-45de-b1e8-be093793a856)**
Soru Kökü: Yirmi dört yaşındaki erkek hastanın muayenesinde klinik kuron boylarının kısa olduğu ve pasif erüpsiyonun yetersiz seviyede kaldığı tespit edilmiştir. Fizyolojik veya patolojik olabilen pasif erüpsiyon sürecinin 3. evresinde sulkus tabanının ve birleşim epitelinin konumu aşağıdakilerden hangisinde doğru tanımlanmıştır?
Doğru Şık (D): Birleşim epitelinin tamamı sementtedir, sulkus tabanı mine-sement sınırındadır.
Açıklama: Pasif erüpsiyonun 3. evresinde birleşim epitelinin tamamı sement üzerine göç etmiş durumdadır ve sulkusun tabanı tam mine-sement sınırında (CEJ) konumlanır. En güçlü çeldirici olan Evre 4'te ise sulkus tabanı semente inmiş ve klinik olarak kök yüzeyi (sement) ağız ortamına açığa çıkmıştır. Bu migrasyon döngüsü dentogingival ünitenin dinamik yaşlanma sürecini gösterir.

---

### ÇİFT 30 (Benzerlik: 0.75)

**Soru 1 (ID: 2ae8d787-daf8-4a7a-a3f7-c397b0336dd2)**
Soru Kökü: Periodontal ligament, dişleri kemiğe mekanik olarak asan güçlü kollajen yapılardan oluşur. Bu ligamentin esas liflerinin, alveol kemiği ve kök sementi dokusu içine doğrudan gömülerek kalsifiye olan terminal uçlarına ne ad verilir?
Doğru Şık (A): Sharpey lifleri
Açıklama: Sharpey lifleri, periodontal ligamentin ekstrinsik tip 1 kollajen demetlerinin sement ve alveol kemiği matriksine hapsolmuş, kemik ve sement sınırında yüksek oranda kalsifiye kısımlarıdır. Oksitalan ve elaunin lifleri PDL içinde esneklik sağlayan elastik sistemin uzantıları olup damar çeperlerine paralel uzanır, ancak kemiğe asıcı bir ankraj sağlamazlar. Bu terminal kalsifiye ankraj bağlantıları, çiğneme kuvvetlerinin çene kemiklerine dengeli bir şok emilimiyle aktarılmasını garantiler.

**Soru 2 (ID: 683c174f-3c3a-44d7-affc-f4d0bca804d1)**
Soru Kökü: Sement dokusunun organik matriksini oluşturan kollajen fibrillerin kaynağı histolojik özelliklerini belirler. Sement dokusuna dışarıdan giren, periodontal ligament fibroblastları tarafından üretilen ve kök yüzeyine dik açıyla gömülen ekstrensek fibrillere ne ad verilir?
Doğru Şık (A): Sharpey fibrilleri
Açıklama: PDL fibroblastları tarafından üretilen ve sementin içine dik açıyla gömülerek kalsifiye olan dış kaynaklı (ekstrensek) kollajen demetlerine Sharpey fibrilleri denir. İntrensek fibriller ise bizzat sementoblastlar tarafından üretilir ve matrikse paralel seyreder (en güçlü çeldirici). Oksitalan ve retiküler lifler bağ dokusunun elastik ve destek elemanları olup sement içine gömülü ana taşıyıcı kolonları oluşturmazlar.

---

### ÇİFT 31 (Benzerlik: 0.74)

**Soru 1 (ID: 23f84a79-bafa-45c8-a609-7880bb6d6574)**
Soru Kökü: Bağ dokusu hücrelerinin yönlendirilmesi ve matriks içi adezyonun sağlanması doku bütünlüğü için şarttır. Trombositlerin fibrin pıhtısına ve fibroblastların matriksteki kollajen fibrillere yapışmasını sağlayan ana ataşman proteini aşağıdakilerden hangisidir?
Doğru Şık (D): Fibronektin
Açıklama: Fibronektin, bağ dokusunun ana ataşman proteini olup hücrelerin (fibroblast, trombosit vb.) ekstraselüler matrikse, özellikle kollajen fibrillere tutunmasını sağlar ve hücre göçünü yönlendirir. Laminin epitel hücrelerinin bazal laminaya ataşmanından sorumluyken, fibronektin direkt bağ dokusu içerisindeki yapışma olaylarını yönetir. Bu fark, periodontal membran onarımında kan pıhtısının kök yüzeyine stabilizasyonunda fibronektinin klinik başarısını açıklar.

**Soru 2 (ID: a3cb1800-ff9d-4ea5-8f71-e10da2ff7bad)**
Soru Kökü: Dişeti bağ dokusunun zemin matrikssinde bulunan glikoproteinlerden olan ve epitel hücrelerinin ataşman proteini olarak görev yapan molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Laminin
Açıklama: Laminin, bazal laminanın lamina lucida tabakasında yoğun olarak bulunan ve epitel hücrelerinin hemidesmozomlar aracılığıyla tutunmasını sağlayan majör ataşman glikoproteinidir. En güçlü çeldirici olan fibronektin ise bağ dokusu içinde fibroblastların kollajen fibrillere yapışmasını sağlayan ana ataşman proteinidir. Bu iki glikoprotein, epitel ve mezenşim kompartmanlarının yapısal stabilitesini farklı hedeflerle sağlar.

---

### ÇİFT 32 (Benzerlik: 0.74)

**Soru 1 (ID: a704e935-0f1c-450b-bce3-5e917cc9ff15)**
Soru Kökü: Stratum basale hücreleri bazal membrana tutunarak epitel bütünlüğünü sağlarlar. Birleşim epitelinin dişe ve bağ dokusuna fiziksel bağlantısında birincil rol oynayan bu yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Hemidesmozom
Açıklama: Hemidesmozomlar, stratum basale hücrelerini lamina lucidaya (bazal membrana) bağlayan ve epitel-bağ dokusu mekanik bütünlüğünü sağlayan temel yapılardır. Desmozomlar ise hücreleri bazal membrana değil, birbirlerine (hücreden hücreye) bağlayarak mekanik destek sağlarlar. Birleşim epiteli internal bazal laminası aracılığıyla mineye tutunurken de bu hemidesmozomal bağlantı sistemini aktif olarak kullanır.

**Soru 2 (ID: cda8ef90-8828-4d13-ad57-145e9e21ea48)**
Soru Kökü: Epitel ve bağ dokusu bileşkesinde, bazal laminanın hemen altındaki bağ dokusu fibrillerine bağlanmasını ve böylece iki dokunun fiziksel bütünlüğünü sağlayan yapılar aşağıdakilerden hangisidir?
Doğru Şık (B): Anker (çapa) fibriller
Açıklama: Anker (çapa) fibriller, bazal laminanın (özellikle tip 4 kollajenden oluşan lamina densa) hemen altındaki bağ dokusu fibrillerine sıkıca bağlanmasını sağlayan mikro-bağlantı elemanlarıdır. Hemidesmozomlar ise epitel hücrelerini bazal membranın kendisine bağlar, bağ dokusuna uzanmaz. Anker fibrillerin bu özelliği sayesinde epitel dokusu, altındaki bağ dokusundan gelen çiğneme basınçlarına karşı dokudan ayrılmadan bütünlüğünü korur.

---

### ÇİFT 33 (Benzerlik: 0.74)

**Soru 1 (ID: 97b2a69b-1a22-4dbc-b081-2ed7d9081a6e)**
Soru Kökü: Dişin fonksiyonel çiğneme veya yatay hareketleri sırasında ortaya çıkan taktil (dokunma) ağırlıklı ince uyarıları algılayan ve anatomik dağılım olarak spesifik biçimde kökün orta üçlüsünde (orta kök çevresi) konumlanan periodontal reseptör aşağıdakilerden hangisidir?
Doğru Şık (A): Meissner korpuskülü
Açıklama: Meissner korpuskülü benzeri mekanoreseptörler, periodontal ligamentte dokunma ve düşük frekanslı basınç hissiyatını ileten, anatomik yerleşim olarak diş kökünün orta kesimlerinde lokalize olmuş reseptör yapılarıdır. Ruffini uzantıları ve iğ şeklindeki fibröz kapsüllü reseptörler daha çok dişin vertikal basınç merkezi olan apikal bölgeyi tercih eder. Kök üzerindeki bu uzamsal reseptör farklılaşması, trigeminal merkezin lüksasyon kuvvetinin yönünü üç boyutlu haritalamasını sağlar.

**Soru 2 (ID: 9afdca13-b7bf-47b7-a843-3e9682dce097)**
Soru Kökü: Periodontal ligament dokusunda etrafı fibröz bir kapsülle çevrili olarak tasarlanmış, özellikle ince basınç ve vibrasyon (titreşim) algılanmasından sorumlu olan ve anatomik olarak dişin kök apeksinde yoğunluk gösteren sinir sonlanması aşağıdakilerden hangisidir?
Doğru Şık (D): İğ şeklinde (spindle) sonlanmalar
Açıklama: İğ şeklinde (spindle) yapıya sahip fibröz kapsüllü sonlanmalar, PDL anatomi yapısında kökün apeks noktasına yerleşmiş olup ani basınç artışları ve yüksek frekanslı titreşim hissinin sönümlenmeden algılanmasından sorumludurlar. Ruffini reseptörleri de apikalde bulunmasına rağmen ağaç dalı tarzında kapsülsüz (veya gevşek) proprioseptörlerdir. Bu kalın miyelinli kapsüllü morfoloji, titreşim dalgalarının hızlı mekanik iletiminde adaptif bir üstünlük sağlar.

---

### ÇİFT 34 (Benzerlik: 0.74)

**Soru 1 (ID: c98d7ed9-7b90-4a28-973c-fd7e6770f81c)**
Soru Kökü: Yaşlanma ile birlikte alveoler kemikte ve periodontal ligamentte (PDL) meydana gelen hücresel değişikliklerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Kemik rezorpsiyonunda görev alan osteoklast sayısında belirgin bir azalma meydana gelir.
Açıklama: Yaşlanma sürecinde alveoler kemikte osteoblast sayısında ve yapım aktivitesinde azalma görülürken, osteoklast sayısında bir değişiklik (azalma) yaşanmaz. Osteoklastların sabit kalıp osteoblastların azalması, yaşlılarda net kemik döngüsünün (remodeling) rezorpsiyon (yıkım) yönüne kaymasına ve apozisyondan daha hızlı olmasına neden olur.

**Soru 2 (ID: f9895d61-312d-4812-9e79-bc6bf027c56b)**
Soru Kökü: İlerleyen yaşla birlikte alveoler kemikte rezorpsiyonun apozisyondan (kemik yapımı) daha baskın hale gelmesinin temel hücresel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Osteoblast sayısının azalmasına karşılık osteoklast sayısının değişmemesi
Açıklama: Alveol kemiğinde fizyolojik yaşlanmanın en belirgin hücresel yansıması, yapım hücresi olan osteoblastların sayısının ve mitotik aktivitesinin azalmasıdır. Yıkım hücresi olan osteoklastların sayısı ise değişmez. Bu durum, remodeling dengesini yıkan tarafın lehine bozar ve apozisyona kıyasla net rezorpsiyon miktarının daha fazla olmasına yol açar.

---

### ÇİFT 35 (Benzerlik: 0.74)

**Soru 1 (ID: 54e08518-230e-4c0c-b0cc-51dab0fe995e)**
Soru Kökü: Elli yaşındaki erkek hastanın radyografik muayenesinde mandibular kanin dişinin fasiyal yüzeyinde alveol kretin apikaline doğru uzanan bir infrabony (kemik içi) defekt tespit edilmiştir. Bu hastada cerrahi planlama öncesi sağlıklı 'yapışık dişeti genişliği' ölçümü yapılırken referans alınması gereken koronal nokta neresidir?
Doğru Şık (C): Kemik tepesi (Alveoler kret)
Açıklama: Normal sağlıklı periodonsiyumda yapışık dişeti sulkus tabanından mukogingival hatta kadar ölçülürken; infrabony defekti olan periodontitis hastalarında suprakrestal doku sadece kemiğe bağlı olabileceğinden ölçüm sulkus tabanı yerine 'kemik tepesinden' (alveoler kret) mukogingival bileşkeye kadar yapılmalıdır. Sağlıklı birey ölçüm kriteri olan sulkus tabanı (en güçlü çeldirici) defektli anatomide doğru biyo-mekanik ataşman sınırını vermez.

**Soru 2 (ID: aef35b02-52fd-494c-aa54-2a2d1f490f33)**
Soru Kökü: 48 yaşında kadın hasta, fasial yüzeyde infrabony defekti bulunan şiddetli periodontitis tablosuyla başvuruyor. Cerrahi planlama öncesinde yapışık dişeti genişliği hesaplanacaktır. Hastalıklı suprakrestal dokuların sadece alveol kemiğine bağlı olduğu bu spesifik senaryoda, yapışık dişeti referans noktaları nasıl belirlenmelidir?
Doğru Şık (C): Kemik tepesinden mukogingival bileşkeye kadar ölçülerek
Açıklama: Sağlıklı bireylerde yapışık dişeti sondlanan sulkus tabanından mukogingival bileşkeye kadar hesaplanır. Ancak kemik yıkımının (infrabony defekt) yaşandığı ve suprakrestal dokunun dişten ziyade sadece kemik üzerinde yer aldığı periodontitis vakalarında sulkus tabanı doğru bir anatomik sınır vermez; bu yüzden ölçüm sağlam kemik tepesi ile mukogingival bileşke arasında yapılır.

---

### ÇİFT 36 (Benzerlik: 0.74)

**Soru 1 (ID: 6fa306c4-ce93-4c6f-95dc-88e68b0807ff)**
Soru Kökü: Kırk yaşındaki kadın hastada derin sondalama sonucu dişeti cebi tabanında aktif kanama saptanmıştır. Periodonsiyumun vaskülarizasyon özellikleri göz önüne alındığında, gingival dokuların internal (iç) bölgesine kan taşıyan ve cep duvarında gingival pleksusu oluşturan ana anastomoz ağı nereden kaynaklanmaktadır?
Doğru Şık (B): İnterdental septum kreti ve periodontal ligament arterlerinden
Açıklama: Gingival dokuların internal bölgesine (sulkus/cep duvarı) kan akışı temel olarak interdental septum kretinden çıkan arterioller ve periodontal ligamentten koronal yönde uzanan damarlar aracılığıyla sağlanır. Supraperiosteal arterioller ise yapışık dişeti ve eksternal bölgenin (dış yüzey) vaskülarizasyonundan sorumludur (güçlü çeldirici). Bu üçlü kanlanma ağı, dişetinin iskemik nekroza karşı direncini açıklar.

**Soru 2 (ID: bc8ccc2c-2995-48c5-85ff-79fee4aae65f)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol sırasında incelenmektedir. Fasiyal ve lingual yüzeylerde yer alan yapışık dişetinin temel kanlanmasını (vaskülarizasyonunu) sağlayan yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Supraperiosteal arterioller
Açıklama: Yapışık dişetine kan akışı temel olarak alveolar kemiğin fasiyal ve lingual dış yüzeyini örten periost tabakasından uzanan supraperiosteal arterioller aracılığıyla gelir. İnterdental septumdan veya ligamentten gelen damarlar marjinal ve interdental gingivayı desteklerken, kret dışı sabit alanın beslenmesi dış periosteal ağ üzerine kuruludur. Bu nedenle tam kalınlık periostun da kaldırıldığı fleplerde yapışık dişeti kanlanması anlık olarak sekteye uğrar.

---

### ÇİFT 37 (Benzerlik: 0.74)

**Soru 1 (ID: e5bcd80d-b01e-4e47-84f9-19c48b671a01)**
Soru Kökü: Yaşlı hastalarda gözlenen kemik ve periodontal doku değişiklikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): İleri yaşa bağlı olarak çene kemiklerinin mineral densitesinde azalma görülmesi osteointegrasyon sürecini bozar.
Açıklama: Kaynak metne göre osseointegre dental implantların başarısı yaştan etkilenmemektedir ve ileri yaşlarda görülen osteoporozis / mineral densite azalması fizyolojik yaşlanma sürecine bağlı değildir. Diğer şıklarda verilen immünolojik (Th1/Th17 sayılarında artış), hücresel (osteoklast sayısının sabit kalıp osteoblastın azalması) ve yapısal (PDL liflerinde kalınlaşma, epitelde incelme) değişikliklerin tümü yaşlanmanın fizyolojik bulguları olarak gerçekleşir. Çeldirici şık, yaşlılıkta osteointegrasyonun bozulacağı varsayımı üzerine kurulmuştur.

**Soru 2 (ID: eb2ff8c5-be22-455d-a566-c468075ceb94)**
Soru Kökü: Yaşlanma sürecinin dişeti epiteli üzerindeki etkilerine ilişkin aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Dişeti epitelinde hücresel kalınlaşma ve keratinizasyon derecesinde artış görülür.
Açıklama: Yaşlanma ile birlikte dişeti epitelinde kalınlaşma değil, aksine incelme ve keratinizasyon derecesinde azalma görülür. Bu yapısal incelme ve keratin kaybı, epitelin antijenlere karşı geçirgenliğini artırarak travmalara karşı daha frajil (kırılgan) hale gelmesine neden olur. Rete-peglerdeki düzleşme de bu doku zayıflamasının bir parçasıdır.

---

### ÇİFT 38 (Benzerlik: 0.74)

**Soru 1 (ID: 8543fa21-b7d7-4691-a48d-a89d2f0be840)**
Soru Kökü: Pediatrik hastaların periodontal muayenesinde yetişkinlere kıyasla farklı fizyolojik ve anatomik özellikler gözlenir. Primer dentisyona sahip bir çocukta aşağıdaki periodontal bulgulardan hangisinin görülmesi **beklenmez**?
Doğru Şık (B): Periodontal ligament aralığının yetişkinlere göre daha dar olması
Açıklama: Primer dentisyonda periodontal aralık daimi dişlenmeye göre daha geniştir, bu da süt dişlerindeki fizyolojik mobilitenin yetişkinlere göre bir miktar daha fazla olmasını açıklar. En güçlü çeldirici olan birleşim epitelinin kalınlığı, çocuklarda bakteriyel toksinlere karşı ekstra bir bariyer sağlayarak gingivitisin periodontitise dönüşmesini zorlaştıran anatomik bir gerçektir. Lamina duranın belirginliği ise aktif kemik remodelinginin radyografik yansımasıdır.

**Soru 2 (ID: eb99beec-1c98-4da4-9ecd-cc84a7655e23)**
Soru Kökü: Sekiz yaşındaki kız çocuğunda yaygın marjinal dişeti kanaması ve enflamasyon saptanmış, ancak radyografide herhangi bir kemik veya ataşman kaybı izlenmemiştir. Çocuklarda plağa bağlı gingivitisin periodontitise dönüşme oranının yetişkinlere göre nadir olmasının temel nedeni aşağıdakilerden hangisi **değildir**?
Doğru Şık (D): Çocukluk çağında mikrofloranın Porphyromonas gingivalis'ten tamamen yoksun olması
Açıklama: Çocuklarda gingivitis nadiren periodontitise ilerler çünkü T-hücre dominant, B-hücre fakir bir bağışıklık yanıtı vardır ve birleşim epiteli mekanik olarak daha kalındır. Ancak çocuk mikroflorası P. gingivalis'ten tamamen yoksun değildir; gingivitisli çocukların biyofilminde %68 oranında P. gingivalis saptanabildiği klinik olarak kanıtlanmıştır (en güçlü çeldirici). Toksin penetrasyonuna anatomik direnç ön plandadır.

---

### ÇİFT 39 (Benzerlik: 0.73)

**Soru 1 (ID: a391dad9-9a9a-4f81-b702-11b0ba9f962d)**
Soru Kökü: Periodontal ligamentin temel fibril gruplarından olan ve dişlerin servikal alanından çıkıp interproksimal bölgede alveolar kret tepesi üzerinden aşarak komşu dişin sementine gömülen, bu sayede kemiğe atake olmadan gingivaya ait bir yapı gibi davranan lif grubu aşağıdakilerden hangisidir?
Doğru Şık (A): Transseptal lifler
Açıklama: Transseptal lifler, interdental kemiği horizontal olarak aşarak komşu iki dişin sementlerini birbirine bağlarlar; kemiğe tutunmadıkları için sıklıkla gingival lif grubu olarak da sınıflandırılırlar ve periodontal yıkım sonrası tamir kapasiteleri yüksektir. Alveolar kret lifleri ise sementten alveolar krete oblik uzanır ve dişi kemiğe bağlar (güçlü çeldirici), transseptal lifler komşu dişe tutunma mekanizmasıyla ayrılır.

**Soru 2 (ID: a830832e-c033-4962-9af1-47c1ed05e697)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, ön dişlerindeki marjinal uyumsuzluk şikayetiyle başvurmuştur. Periodontal muayenede serbest dişetinin servikal bölgede dişe sıkıca adapte olduğu ve esnekliğini koruduğu saptanmıştır. Bu bölgede birleşim epitelinin hemen altında sementten çıkıp fasiyal ve lingual yönde yelpaze gibi dağılarak serbest dişetini destekleyen lif grubu aşağıdakilerden hangisidir?
Doğru Şık (E): Gingivodental (Dentogingival) grup
Açıklama: Gingivodental (Dentogingival) lifler, birleşim epitelinin hemen apikalindeki sementten çıkarak serbest dişetine doğru yelpaze gibi dağılan ve marjinal gingivayı dişe sıkıca adapte eden temel lif grubudur. Transseptal lifler komşu dişleri bağlarken, sirküler lifler kemiğe veya semente bağlanmadan dişi halka şeklinde sararlar. Bu liflerin yıkımı klinik olarak dişeti kenarının dişe olan adaptasyonunun kaybolmasına ve cep oluşumuna yol açar.

---

### ÇİFT 40 (Benzerlik: 0.73)

**Soru 1 (ID: 1e1c1a02-024c-42bc-9a93-997301031324)**
Soru Kökü: Daimi dişlerde sement dokusunda meydana gelen mikroskobik kök rezorpsiyonlarının tamir süreciyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Dişeti epitel hücrelerinin rezorpsiyon bölgesine prolifere olması sement tamirini hızlandırarak destekler.
Açıklama: Kök yüzeyindeki rezorpsiyon lakünlerinin sementoblastlar tarafından onarılabilmesi (tamiri) için bölgeye canlı bağ dokusu hücrelerinin ulaşması gerekir. Eğer bölgeye hızlı göç eden epitel hücreleri (dişeti epiteli) prolifere olup kök yüzeyini kaplarsa, sementoblast farklılaşması engellenir ve sement tamiri gerçekleşemez (bağ dokusu ataşmanı yerine uzun birleşim epiteli oluşur).

**Soru 2 (ID: a6c6e0da-4903-4c6a-b33b-e0214b7325f6)**
Soru Kökü: Kök yüzeyini kaplayan sementin biyolojik dinamikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Sement dokusu sağlıklı dişte kemik gibi sürekli fizyolojik rezorpsiyon ve remodelasyona uğrar.
Açıklama: Daimi dentisyonda sementin, kemik dokusunda olduğu gibi bir osteoklastik rezorpsiyon/yapım döngüsü (remodeling) kesinlikle bulunmaz; fizyolojik şartlarda sadece matriks üstüne yeni tabaka yığılır (apozisyonel büyüme). Alveol kemiği ise yaşam boyu eski matriksin yıkılıp yerine yenisinin yapıldığı aktif ve kanlı bir döngüdedir. Sement yüzeyinde görülen mikroskobik veya makroskobik lakün rezorpsiyonları her zaman okluzal travma, enfeksiyon veya ortodontik şiddet gibi patolojik stres kökenlidir.

---

### ÇİFT 41 (Benzerlik: 0.73)

**Soru 1 (ID: 7b1bc364-1f50-4e7e-b663-80cbbcb60403)**
Soru Kökü: Bir alt çene birinci molar dişin çekimi sırasında hekim, davye ile dişi koronal yönde vertikal olarak lükse etmeye (ekstrüzyon hareketi) çalışmaktadır. Bu zorlayıcı vertikal çekme kuvvetine karşı ilk ve en güçlü gerilim direncini gösteren periodontal ligament lif grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Alveolar kret lifleri
Açıklama: Alveolar kret lifleri, epitel ataşmanının hemen altındaki servikal sementten çıkıp apikal ve dışa yönlenerek alveol kretin tepe noktasına tutunurlar; dişi alveolden dışarı çekmeye (ekstrüzyon) çalışan kuvvetlere karşı asıl primer direnci oluştururlar. Oblik lifler ise alan olarak en geniş gruptur ancak kökü yukarıdan aşağıya (kemiğe doğru) gömülmeye zorlayan çiğneme basınçlarını asıcı olarak karşılar. Bu anatomik yönelim nedeniyle hekimin çekim sırasındaki çekme kuvveti önce kret grubunu parçalamak zorundadır.

**Soru 2 (ID: a391dad9-9a9a-4f81-b702-11b0ba9f962d)**
Soru Kökü: Periodontal ligamentin temel fibril gruplarından olan ve dişlerin servikal alanından çıkıp interproksimal bölgede alveolar kret tepesi üzerinden aşarak komşu dişin sementine gömülen, bu sayede kemiğe atake olmadan gingivaya ait bir yapı gibi davranan lif grubu aşağıdakilerden hangisidir?
Doğru Şık (A): Transseptal lifler
Açıklama: Transseptal lifler, interdental kemiği horizontal olarak aşarak komşu iki dişin sementlerini birbirine bağlarlar; kemiğe tutunmadıkları için sıklıkla gingival lif grubu olarak da sınıflandırılırlar ve periodontal yıkım sonrası tamir kapasiteleri yüksektir. Alveolar kret lifleri ise sementten alveolar krete oblik uzanır ve dişi kemiğe bağlar (güçlü çeldirici), transseptal lifler komşu dişe tutunma mekanizmasıyla ayrılır.

---

### ÇİFT 42 (Benzerlik: 0.73)

**Soru 1 (ID: 5e1c5407-f7a9-4535-9256-0842b90bbb6f)**
Soru Kökü: Marjinal dişetinin anatomik formunu koruyan lif grupları incelenmektedir. Aşağıdaki gingival lif gruplarından hangisi dişe (semente veya kemiğe) atake **değildir** ve dişi çepeçevre kuşatır?
Doğru Şık (E): Sirküler
Açıklama: Sirküler lif grubu, marjinal ve interdental dişetinin bağ dokusu içinde yer alan ve semente ya da alveol kemiğine mekanik olarak tutunmayan (atake olmayan) tek ana gingival lif grubudur. Diğer tüm lif grupları (dentogingival, dentoperiosteal, vb.) mutlaka sement veya periosttan köken alarak dokular arası bağlantı sağlar. Sirküler lifler bir büzgü ipi gibi dişi sararak marjinal dişetinin formunu ve servikal adaptasyonunu muhafaza eder.

**Soru 2 (ID: a830832e-c033-4962-9af1-47c1ed05e697)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, ön dişlerindeki marjinal uyumsuzluk şikayetiyle başvurmuştur. Periodontal muayenede serbest dişetinin servikal bölgede dişe sıkıca adapte olduğu ve esnekliğini koruduğu saptanmıştır. Bu bölgede birleşim epitelinin hemen altında sementten çıkıp fasiyal ve lingual yönde yelpaze gibi dağılarak serbest dişetini destekleyen lif grubu aşağıdakilerden hangisidir?
Doğru Şık (E): Gingivodental (Dentogingival) grup
Açıklama: Gingivodental (Dentogingival) lifler, birleşim epitelinin hemen apikalindeki sementten çıkarak serbest dişetine doğru yelpaze gibi dağılan ve marjinal gingivayı dişe sıkıca adapte eden temel lif grubudur. Transseptal lifler komşu dişleri bağlarken, sirküler lifler kemiğe veya semente bağlanmadan dişi halka şeklinde sararlar. Bu liflerin yıkımı klinik olarak dişeti kenarının dişe olan adaptasyonunun kaybolmasına ve cep oluşumuna yol açar.

---

### ÇİFT 43 (Benzerlik: 0.72)

**Soru 1 (ID: 5e1c5407-f7a9-4535-9256-0842b90bbb6f)**
Soru Kökü: Marjinal dişetinin anatomik formunu koruyan lif grupları incelenmektedir. Aşağıdaki gingival lif gruplarından hangisi dişe (semente veya kemiğe) atake **değildir** ve dişi çepeçevre kuşatır?
Doğru Şık (E): Sirküler
Açıklama: Sirküler lif grubu, marjinal ve interdental dişetinin bağ dokusu içinde yer alan ve semente ya da alveol kemiğine mekanik olarak tutunmayan (atake olmayan) tek ana gingival lif grubudur. Diğer tüm lif grupları (dentogingival, dentoperiosteal, vb.) mutlaka sement veya periosttan köken alarak dokular arası bağlantı sağlar. Sirküler lifler bir büzgü ipi gibi dişi sararak marjinal dişetinin formunu ve servikal adaptasyonunu muhafaza eder.

**Soru 2 (ID: a391dad9-9a9a-4f81-b702-11b0ba9f962d)**
Soru Kökü: Periodontal ligamentin temel fibril gruplarından olan ve dişlerin servikal alanından çıkıp interproksimal bölgede alveolar kret tepesi üzerinden aşarak komşu dişin sementine gömülen, bu sayede kemiğe atake olmadan gingivaya ait bir yapı gibi davranan lif grubu aşağıdakilerden hangisidir?
Doğru Şık (A): Transseptal lifler
Açıklama: Transseptal lifler, interdental kemiği horizontal olarak aşarak komşu iki dişin sementlerini birbirine bağlarlar; kemiğe tutunmadıkları için sıklıkla gingival lif grubu olarak da sınıflandırılırlar ve periodontal yıkım sonrası tamir kapasiteleri yüksektir. Alveolar kret lifleri ise sementten alveolar krete oblik uzanır ve dişi kemiğe bağlar (güçlü çeldirici), transseptal lifler komşu dişe tutunma mekanizmasıyla ayrılır.

---

### ÇİFT 44 (Benzerlik: 0.72)

**Soru 1 (ID: 0f296026-e9cd-4784-a783-5b466f72eacb)**
Soru Kökü: Sekiz yaşındaki bir erkek çocuğun klinik muayenesinde marjinal dişetlerinde kızarıklık, şişlik ve fırçalamada kanama şikayeti mevcuttur. Ataçman kaybı ve radyografik kemik yıkımı izlenmemiştir. 

Bu çocuk hastanın subgingival biyofilm florası incelendiğinde en yüksek oranda (%68) tespit edilmesi beklenen periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Porphyromonas gingivalis
Açıklama: Çocuklarda görülen gingivitis vakalarının biyofilm analizlerinde en sık rastlanan periodontal patojen %68 oranıyla Porphyromonas gingivalis'tir. Tannerella forsythia ise yaklaşık %20 oranında görülür ve dişeti kanamasıyla spesifik korelasyon gösterir. A. actinomycetemcomitans daha çok adölesan dönemdeki agresif periodontitis formlarında baskındır.

**Soru 2 (ID: 842da5cf-45b8-4744-ac61-baca5cdb669d)**
Soru Kökü: Epidemiyolojik çalışmalara göre, periodontal cep içindeki bakteriyel plak kompozisyonunda yaşlanmayla birlikte belirgin bir mikrobiyolojik kayma (shift) gözlenmektedir.

Buna göre, adölesan dönemde baskın olan Aggregatibacter actinomycetemcomitans'ın (A.a) rolü azalırken, ilerleyen yaşla birlikte plaktaki önemi ve yüzdesi artan temel patojen aşağıdakilerden hangisidir?
Doğru Şık (B): Porphyromonas gingivalis
Açıklama: Yaşlanma ile birlikte periodontal mikrobiyotada spesifik bir değişim görülür; agresif periodontitisin ana ajanı olan A.a.'nın plaktaki rolü yaş ilerledikçe azalırken, kronik doku yıkımından sorumlu olan Porphyromonas gingivalis'in (P. gingivalis) dominansı ve hastalığın patogenezindeki klinik önemi belirgin şekilde artar.

---

### ÇİFT 45 (Benzerlik: 0.72)

**Soru 1 (ID: 5d418ffb-996b-4704-8afb-5be1a5d52553)**
Soru Kökü: Dişe gelen ani çiğneme kuvvetlerinin çeneye travma yaratmadan yutulması sürecinde, mekanik yükü birincil olarak kollajen liflerin değil periodontal ligament içindeki fizyolojik sıvıların ve hücre dışı matriks hidrodinamiğinin karşıladığını savunan teori aşağıdakilerden hangisidir?
Doğru Şık (E): Viskoelastik teori
Açıklama: Viskoelastik teori, diş üzerine gelen çiğneme kuvvetlerinin ilk şok etkisinin PDL matriksindeki doku sıvıları ve kan dolaşımı tarafından hidrolik sistem mantığıyla yastıklandığını, ardından bu sıvıların süngerimsi alveol içi damarlara itilmesiyle şokun atıldığını savunur. Tansiyonel teoride ise kollajen lif demetleri kuvveti esneyerek karşılar ve hidrodinamik rol ihmal edilir. Klinik diş mobilitesinin ilk fazı, bu sıvı deplasmanı ile çok iyi korelasyon gösterir.

**Soru 2 (ID: 8305aacf-004a-4504-9964-fd992b8f6160)**
Soru Kökü: Okluzal kuvvetlere karşı periodontal ligamentin (PDL) gösterdiği adaptif şok emilimini açıklayan teorilerden hangisi, gelen dikey yükün temel olarak ana kollajen fibrillerin gerilmesi prensibiyle alveol kemiğine bir 'çekme kuvveti' olarak iletilmesi mekanizmasına dayanır?
Doğru Şık (C): Tansiyonel teori
Açıklama: Tansiyonel teori, dişin bir hamak gibi asılı olduğunu ve özellikle oblik kollajen lif gruplarının çiğneme yükünde çadır ipi gibi gerildiğini, bu gerilimin kemiğe bir yıkım baskısı değil, kemik yapımını uyaran bir 'gerilim/çekme' kuvveti olarak yansıdığını savunur. Viskoelastik model tamamen sıvı hareketini vurgularken, tansiyonel teori dokunun fibröz katı bileşenlerini biyomekanik aktör yapar. Kemik dokusunun basınca yıkımla, çekmeye yapımla cevap vermesi yasası bu sistemin ana dayanağıdır.

---

### ÇİFT 46 (Benzerlik: 0.72)

**Soru 1 (ID: 969eb19d-d901-412d-8b83-e34b1b70f2f3)**
Soru Kökü: İnterdental papillada belirgin inflamasyon saptanan bir hastada, bu bölgenin vasküler drenajı ve kanlanması incelenmektedir. Alveol kemiğinin tepesinden çıkarak interdental dişetini doğrudan vaskülarize eden yapılar aşağıdakilerden hangisidir?
Doğru Şık (D): İntraseptal arterioller
Açıklama: İntraseptal arterioller, interdental kemik septumunun (komşu iki dişin alveollerini ayıran kret) tepesinden çıkarak hemen üzerindeki interdental dişetini (papili) vaskülarize eder. Supraperiosteal damarlar bukkolingual yüzeylerde kalırken, intraseptal damarlar doğrudan papil merkezine ulaşır. Papil dokusunun cerrahi onarımlarındaki yüksek başarısı, bu intraseptal vasküler desteğin kesintiye uğramadan devamlılık sağlamasıyla ilişkilidir.

**Soru 2 (ID: bc8ccc2c-2995-48c5-85ff-79fee4aae65f)**
Soru Kökü: Otuz beş yaşında kadın hasta rutin kontrol sırasında incelenmektedir. Fasiyal ve lingual yüzeylerde yer alan yapışık dişetinin temel kanlanmasını (vaskülarizasyonunu) sağlayan yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Supraperiosteal arterioller
Açıklama: Yapışık dişetine kan akışı temel olarak alveolar kemiğin fasiyal ve lingual dış yüzeyini örten periost tabakasından uzanan supraperiosteal arterioller aracılığıyla gelir. İnterdental septumdan veya ligamentten gelen damarlar marjinal ve interdental gingivayı desteklerken, kret dışı sabit alanın beslenmesi dış periosteal ağ üzerine kuruludur. Bu nedenle tam kalınlık periostun da kaldırıldığı fleplerde yapışık dişeti kanlanması anlık olarak sekteye uğrar.

---

### ÇİFT 47 (Benzerlik: 0.72)

**Soru 1 (ID: f0c087b8-83a0-4dda-8f7b-d2d26e5ba396)**
Soru Kökü: 40 yaşında kadın hasta, marjinal gingivada izlenen soluk pembe lezyonun incelenmesi için biyopsiye alınıyor. İncelemede stratum corneum tabakasındaki hücrelerin keratinize olduğu ancak sitoplazmalarının ortasında büzüşmüş, yoğun boyanan (piknotik) çekirdek kalıntıları barındırdıkları saptanıyor. Gingivada en sık rastlanan bu histolojik yapı tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Parakeratinizasyon
Açıklama: Keratinize hücrelerin içinde piknotik (küçülmüş ve yoğun) çekirdeklerin varlığı parakeratinizasyonun en belirgin histolojik işaretidir. Gingivayı örten oral epitel çoğunlukla parakeratinize yapıdadır, bu durum dokunun hem mekanik stresleri karşılamasını hem de yüksek turnover hızıyla kendini yenilemesini dengeler. Ortokeratinizasyonda çekirdek tamamen silinir.

**Soru 2 (ID: f3626207-342c-4d4d-9e2e-a20d4ba00c58)**
Soru Kökü: Sert damak mukozasından alınan bir biyopsi materyalinin histopatolojik incelemesinde, epitelin en üst tabakasındaki keratinositlerin hücre içi organellerini ve çekirdeklerini tamamen kaybettiği, sitoplazmalarının yoğun keratin filamentleri ile dolduğu gözlemlenmiştir. Ağız içinde çok az bölgede izlenen bu tam hücresel farklılaşma tablosu aşağıdakilerden hangisi ile adlandırılır?
Doğru Şık (C): Ortokeratinizasyon
Açıklama: Çekirdek ve organellerin tamamen kaybolduğu, stratum granülozumun belirgin olduğu eksiksiz ve en ileri düzey keratinizasyon formu 'ortokeratinizasyon'dur. Parakeratinizasyonda çekirdekler piknotik halde kalır. Ağız boşluğu sürekli nemli bir ortam olduğu için ciltteki gibi tam bir ortokeratinizasyon çok az bölgede (sert damak gibi yoğun stres alanlarında) izlenir.

---

### ÇİFT 48 (Benzerlik: 0.72)

**Soru 1 (ID: 2b19ab86-66e0-4d09-bdc1-f79b8ab8810d)**
Soru Kökü: Oral mukozanın maruz kaldığı mekanik kuvvetler ve lokal fonksiyon farklılıkları, bölgeler arası keratinizasyon derecelerinde farklılıklara yol açar. Ağız boşluğundaki anatomik alanlar keratinizasyon derecelerine göre en fazla keratinize olandan en az keratinize olana doğru sıralandığında, aşağıdaki dizilimlerden hangisi doğrudur?
Doğru Şık (D): Sert Damak > Dişeti > Dil Gövdesi > Yanak
Açıklama: Oral mukozada keratinizasyon en fazla çiğneme kuvvetlerine sürekli ve yoğun maruz kalan sert damakta görülür. Onu ikinci sırada dişeti takip eder. Özelleşmiş yapısı ve koruyucu bariyerleri ile dil gövdesi orta sıralarda yer alırken, esnekliğin ön planda olduğu ve kemik desteği olmayan yanak (örtücü) mukozası en az keratinize bölgedir. Anatomik sıralama Damak > Dişeti > Dil > Yanak şeklindedir.

**Soru 2 (ID: 4a277050-93c4-44ed-8cd7-b94eddc3917f)**
Soru Kökü: Sicher'in oral mukoza sınıflamasına göre, doğrudan çiğneme kuvvetlerine maruz kalan ve bu nedenle epitel dokusu mekanik strese direnç gösterecek şekilde adapte olmuş alanlar aşağıdakilerden hangisinde birlikte verilmiştir?
Doğru Şık (C): Gingiva ve sert damak
Açıklama: Sicher sınıflamasına göre çiğneme mukozası, doğrudan mekanik sürtünmeye maruz kalan gingiva ve sert damağı kaplayan dokudur. En güçlü çeldirici olan dilin sırtı ise özelleşmiş mukoza sınıfına girer. Yanak, dudak içi, yumuşak damak ve dil altı bölgeleri örtücü mukoza olarak fonksiyon görür ve bu strese adaptasyonları farklıdır.

---

### ÇİFT 49 (Benzerlik: 0.72)

**Soru 1 (ID: 9afdca13-b7bf-47b7-a843-3e9682dce097)**
Soru Kökü: Periodontal ligament dokusunda etrafı fibröz bir kapsülle çevrili olarak tasarlanmış, özellikle ince basınç ve vibrasyon (titreşim) algılanmasından sorumlu olan ve anatomik olarak dişin kök apeksinde yoğunluk gösteren sinir sonlanması aşağıdakilerden hangisidir?
Doğru Şık (D): İğ şeklinde (spindle) sonlanmalar
Açıklama: İğ şeklinde (spindle) yapıya sahip fibröz kapsüllü sonlanmalar, PDL anatomi yapısında kökün apeks noktasına yerleşmiş olup ani basınç artışları ve yüksek frekanslı titreşim hissinin sönümlenmeden algılanmasından sorumludurlar. Ruffini reseptörleri de apikalde bulunmasına rağmen ağaç dalı tarzında kapsülsüz (veya gevşek) proprioseptörlerdir. Bu kalın miyelinli kapsüllü morfoloji, titreşim dalgalarının hızlı mekanik iletiminde adaptif bir üstünlük sağlar.

**Soru 2 (ID: ec36a84b-8c87-45fb-8ebc-2a4a188aa332)**
Soru Kökü: Akut apikal periodontitisi olan bir hasta, ilgili dişe ufak bir okluzal dokunuşta dahi şiddetli, lokalize bir ağrı hissettiğini ifade etmektedir. Periodontal ligament içinde bulunan ve artmış doku basıncı ile enflamasyon kaynaklı nosiseptif (ağrı) uyarıları merkezi sinir sistemine taşıyan birincil sinir sonlanması türü aşağıdakilerden hangisidir?
Doğru Şık (C): Serbest sonlu sinir lifleri
Açıklama: Periodontal ligament, C ve A-delta tipi ağaç benzeri dallanan serbest sinir sonlanmalarıyla donatılmıştır ve sadece bu ince sonlanmalar pulpal ve periodontal ağrı (nosiseptif) duyusunu taşımakla görevlidir. Meissner, Ruffini ve iğ şeklindeki kapsüllü sonlanmalar sırasıyla dokunma, basınç ve ince titreşim gibi mekanik proprioseptif hisleri algılar ancak ağrıyı taşımazlar. Akut eksüda birikimi ligament içindeki sıvı basıncını artırdığında doğrudan bu serbest lifleri tetikleyerek vurma ağrısı yaratır.

---

### ÇİFT 50 (Benzerlik: 0.72)

**Soru 1 (ID: c98d7ed9-7b90-4a28-973c-fd7e6770f81c)**
Soru Kökü: Yaşlanma ile birlikte alveoler kemikte ve periodontal ligamentte (PDL) meydana gelen hücresel değişikliklerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Kemik rezorpsiyonunda görev alan osteoklast sayısında belirgin bir azalma meydana gelir.
Açıklama: Yaşlanma sürecinde alveoler kemikte osteoblast sayısında ve yapım aktivitesinde azalma görülürken, osteoklast sayısında bir değişiklik (azalma) yaşanmaz. Osteoklastların sabit kalıp osteoblastların azalması, yaşlılarda net kemik döngüsünün (remodeling) rezorpsiyon (yıkım) yönüne kaymasına ve apozisyondan daha hızlı olmasına neden olur.

**Soru 2 (ID: eb2ff8c5-be22-455d-a566-c468075ceb94)**
Soru Kökü: Yaşlanma sürecinin dişeti epiteli üzerindeki etkilerine ilişkin aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Dişeti epitelinde hücresel kalınlaşma ve keratinizasyon derecesinde artış görülür.
Açıklama: Yaşlanma ile birlikte dişeti epitelinde kalınlaşma değil, aksine incelme ve keratinizasyon derecesinde azalma görülür. Bu yapısal incelme ve keratin kaybı, epitelin antijenlere karşı geçirgenliğini artırarak travmalara karşı daha frajil (kırılgan) hale gelmesine neden olur. Rete-peglerdeki düzleşme de bu doku zayıflamasının bir parçasıdır.

---

### ÇİFT 51 (Benzerlik: 0.72)

**Soru 1 (ID: a391dad9-9a9a-4f81-b702-11b0ba9f962d)**
Soru Kökü: Periodontal ligamentin temel fibril gruplarından olan ve dişlerin servikal alanından çıkıp interproksimal bölgede alveolar kret tepesi üzerinden aşarak komşu dişin sementine gömülen, bu sayede kemiğe atake olmadan gingivaya ait bir yapı gibi davranan lif grubu aşağıdakilerden hangisidir?
Doğru Şık (A): Transseptal lifler
Açıklama: Transseptal lifler, interdental kemiği horizontal olarak aşarak komşu iki dişin sementlerini birbirine bağlarlar; kemiğe tutunmadıkları için sıklıkla gingival lif grubu olarak da sınıflandırılırlar ve periodontal yıkım sonrası tamir kapasiteleri yüksektir. Alveolar kret lifleri ise sementten alveolar krete oblik uzanır ve dişi kemiğe bağlar (güçlü çeldirici), transseptal lifler komşu dişe tutunma mekanizmasıyla ayrılır.

**Soru 2 (ID: ac43f7c7-85e9-4b2b-af95-29c75158f1e8)**
Soru Kökü: Çok köklü posterior dişlerin periodontal anatomisi, tek köklü dişlere kıyasla lateral okluzal kuvvetlere ekstra stabilite sağlayan spesifik lif demetleri içerir. Yalnızca çok köklü dişlerde bulunan ve köklerin birleşim alanındaki sementten kemiğe ışınsal olarak bağlanan periodontal ligament grubu aşağıdakilerden hangisidir?
Doğru Şık (D): İnterradiküler lifler
Açıklama: İnterradiküler lifler isminden de anlaşılabileceği gibi yalnızca birden fazla kökü olan dişlerin furkasyon çatısı altında sementten başlayıp, interradiküler kemik septumuna uzanan yelpaze şekilli fibrillerdir. Transseptal lifler kökler arasında değil, komşu iki komşu dişin servikal sementleri arasında interdental kretin üst kısmında uzanan dişeti fibrilleridir. İnterradiküler lifler çok köklü dişin rotasyonel devrilme hareketlerini güçlü biçimde engeller.

---

### ÇİFT 52 (Benzerlik: 0.72)

**Soru 1 (ID: 86f2a94a-7971-4002-9eb6-6c8ccbcebd92)**
Soru Kökü: Ortodontik tedavi gören 18 yaşındaki kadın hastada, dişin uzun aksına paralel uzanan ve periodontal ligament aralığında bol miktarda bulunan, mekanik gerilimlerde esneklik sağlayan uzun ince fibriller izlenmiştir. Tanımlanan bu yapı aşağıdakilerden hangisidir?
Doğru Şık (C): Oksitalan lifler
Açıklama: Oksitalan lifler, periodontal ligament aralığında dişin uzun aksına paralel olarak seyreden ve esneklik sağlayan ince uzun elastik benzeri fibrillerdir. Sharpey lifleri ve Tip 1 kollajen daha çok oblik veya yatay doğrultuda uzanarak dişi kemiğe ankore ederken, oksitalan liflerin dikey ve paralel yerleşimi damar yapılarını destekler. Gingiva bağ dokusunda nispeten az bulunmalarına rağmen PDL içinde çok yoğun olarak izlenirler.

**Soru 2 (ID: a830832e-c033-4962-9af1-47c1ed05e697)**
Soru Kökü: Yirmi sekiz yaşında erkek hasta, ön dişlerindeki marjinal uyumsuzluk şikayetiyle başvurmuştur. Periodontal muayenede serbest dişetinin servikal bölgede dişe sıkıca adapte olduğu ve esnekliğini koruduğu saptanmıştır. Bu bölgede birleşim epitelinin hemen altında sementten çıkıp fasiyal ve lingual yönde yelpaze gibi dağılarak serbest dişetini destekleyen lif grubu aşağıdakilerden hangisidir?
Doğru Şık (E): Gingivodental (Dentogingival) grup
Açıklama: Gingivodental (Dentogingival) lifler, birleşim epitelinin hemen apikalindeki sementten çıkarak serbest dişetine doğru yelpaze gibi dağılan ve marjinal gingivayı dişe sıkıca adapte eden temel lif grubudur. Transseptal lifler komşu dişleri bağlarken, sirküler lifler kemiğe veya semente bağlanmadan dişi halka şeklinde sararlar. Bu liflerin yıkımı klinik olarak dişeti kenarının dişe olan adaptasyonunun kaybolmasına ve cep oluşumuna yol açar.

---

### ÇİFT 53 (Benzerlik: 0.71)

**Soru 1 (ID: 4853ebf7-959d-4302-be48-021b617b7746)**
Soru Kökü: Yaşlanmayla birlikte periodontal dokularda fizyolojik, hücresel ve yapısal birçok değişiklik meydana gelmektedir. Buna göre, aşağıdaki periodontal ve kemik parametrelerinden hangisi yaşlanma sürecinden **etkilenmez**?
Doğru Şık (C): Osteointegre dental implantların başarı oranı
Açıklama: Osseointegre dental implantların başarısı, çekim soketlerinin iyileşme kapasitesi ve dokuların periodontal tedaviye yanıtı fizyolojik yaşlanma sürecinden etkilenmez. Yaşlanma ile birlikte yapışık dişeti genişliği ve sement kalınlığı artarken; epitelin keratinizasyon derecesi, fibroblastların mitotik aktivitesi ve sementin geçirgenliği azalır. Öğrencilerin sıklıkla ileri yaşta kemik iyileşmesinin bozulacağını düşünmesi yaygın bir yanılgıdır, kemik metabolizması yavaşlasa da osseointegrasyon kapasitesi korunur.

**Soru 2 (ID: c98d7ed9-7b90-4a28-973c-fd7e6770f81c)**
Soru Kökü: Yaşlanma ile birlikte alveoler kemikte ve periodontal ligamentte (PDL) meydana gelen hücresel değişikliklerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Kemik rezorpsiyonunda görev alan osteoklast sayısında belirgin bir azalma meydana gelir.
Açıklama: Yaşlanma sürecinde alveoler kemikte osteoblast sayısında ve yapım aktivitesinde azalma görülürken, osteoklast sayısında bir değişiklik (azalma) yaşanmaz. Osteoklastların sabit kalıp osteoblastların azalması, yaşlılarda net kemik döngüsünün (remodeling) rezorpsiyon (yıkım) yönüne kaymasına ve apozisyondan daha hızlı olmasına neden olur.

---

### ÇİFT 54 (Benzerlik: 0.71)

**Soru 1 (ID: a24d10ad-9eb8-42d6-9ff6-45666c4ef7c0)**
Soru Kökü: Klinik araştırmalar, periodontal hastalıklarda immün yanıtın fizyolojik yaşlanma sürecinden doğrudan etkilendiğini göstermektedir. İleri yaştaki bireylerde periodonsiyumdaki bağışıklık hücre profili incelendiğinde, aşağıdakilerden hangisinin **artış** göstermesi beklenir?
Doğru Şık (B): Makrofajların proinflamatuar (M1 tipi) fenotipe kayması
Açıklama: Yaşlanma ile birlikte immün sistemde proinflamatuar bir ortam (inflammaging) gelişir; Th1, Th17 ve makrofajların M1 (yıkıcı/proinflamatuar) fenotipi artış gösterir. Nötrofillerin fagositoz ve NET oluşturma kapasiteleri, ayrıca fibroblastların kollajen sentez hızı belirgin şekilde azalır (güçlü çeldiriciler). Plakta ise A.a yerini yaşla birlikte P. gingivalis'e bırakır.

**Soru 2 (ID: b0287562-a252-4977-bff8-cabe6c2d2207)**
Soru Kökü: Periodontal dokularda yaşlanmayla birlikte meydana gelen fizyolojik değişiklikler incelendiğinde, aşağıdaki parametrelerden hangisinde belirgin bir **artış** gözlenmesi beklenir?
Doğru Şık (E): Periodontal ligamentte yer alan elastik liflerin miktarı
Açıklama: Yaşlanma ile periodontal ligamentte ve bağ dokusunda kollajen sentezi ve fibroblast aktivitesi azalırken, elastik liflerin sayısında ve hiyalinizasyon alanlarında artış gözlenir. En güçlü çeldirici olan bağ dokusu epitelinin durumu tam tersine incelme ve keratinizasyonda azalma yönündedir, bu da mukozanın mekanik travmalara direncini düşürür. Hücresel düzeydeki bu makromoleküler değişim, dokunun esnekliğini ve tamir kapasitesini sınırlar.

---

### ÇİFT 55 (Benzerlik: 0.71)

**Soru 1 (ID: 9defdbf9-76ff-4d38-af45-09d20326a40f)**
Soru Kökü: Dişeti epitelinin farklı topografik bölgeleri karşılaştırıldığında, rete-peg içermeyen, hücreler arası alanı nispeten dar olan ve stratum corneum tabakasından yoksun olan bölge aşağıdakilerden hangisidir?
Doğru Şık (B): Cep (Sulkuler) epiteli
Açıklama: Sulkuler (cep) epiteli non-keratinize olup (stratum corneum yok) rete-peg içermez ve oral epitel gibi hücreler arası alanı dardır. Birleşim epiteli de non-keratinize ve rete-peg'siz olmasına rağmen, hücreler arası boşlukları sıvı ve savunma hücresi geçişine izin vermek için oldukça geniştir (en güçlü çeldirici). Bu yapısal farklılık, sulkusun mikrobiyal ürünlere karşı yarı geçirgen mekanizmasını belirler.

**Soru 2 (ID: a320ac40-f691-45e1-ad62-6ae411483855)**
Soru Kökü: Dişeti epitelini oluşturan tabakalar incelendiğinde, sağlıklı non-keratinize sulkuler epitelde aşağıdaki tabakalardan hangisinin bulunması **beklenmez**?
Doğru Şık (D): Stratum corneum
Açıklama: Sulkuler epitel non-keratinize çok katlı yassı epitel karakterindedir ve parakeratinize/ortokeratinize oral epitelden farklı olarak stratum corneum ve stratum granulosum tabakalarını içermez. En güçlü çeldirici olan stratum spinosum tüm epitel tiplerinde hücrelerin yassılaşmaya başladığı temel bir tabaka olarak mevcuttur. Bakteriyel ürünlerin geçişine izin veren bu non-keratinize yapı, sulkusun yarı geçirgen membran karakterini belirler.

---

### ÇİFT 56 (Benzerlik: 0.71)

**Soru 1 (ID: 32ad97fc-03c3-485f-b9d0-4d933be9c4fa)**
Soru Kökü: Alveoler proçesin histolojik yapısı incelendiğinde, bu kemik dokusunun dış sınırlarını oluşturan, mekanik dirence sahip Havers sistemleri ve kompakt lamellerden meydana gelen yapısı aşağıdakilerden hangisidir?
Doğru Şık (D): Kortikal kemik
Açıklama: Kortikal kemik alveoler proçesin dış tabakasını oluşturan, Havers sistemleri (osteonlar) ve yoğun kompakt lameller içeren sert yapıdır. Kanselöz kemik bu iki kortikal tabaka arasında yer alan süngerimsi dokudur. Demet kemiği ve cribriform plate ise soket iç duvarını kaplayan daha özelleşmiş ince kemik katmanlarıdır.

**Soru 2 (ID: c732e76d-ceb0-4a70-9958-ad7afe5da5e8)**
Soru Kökü: Kompakt (kortikal) kemiğin fonksiyonel ve mikroskobik ünitesi olan; merkezinde kemiği besleyen bir kan damarını barındıran Havers kanalı ve bunun etrafında eş merkezli olarak sıralanmış lamellerden oluşan yapıya ne ad verilir?
Doğru Şık (E): Osteon
Açıklama: Osteon, Havers kanalı ve etrafındaki eş merkezli kemik lamellerinin oluşturduğu kompakt kemiğin temel yapı taşıdır. Volkmann kanalları bu osteonları birbirine bağlayan yatay yapılardır. Howship lakünleri ise rezorpsiyon alanlarıdır ve osteonun anatomik bir parçası değildir.

---

### ÇİFT 57 (Benzerlik: 0.71)

**Soru 1 (ID: f2ea4761-a9cb-4f0b-aae6-b4de1e99abf0)**
Soru Kökü: Alveol kemiğinde fizyolojik remodeling süreci kompleks bir sitokin ağzıyla yürütülür. Kanda kalsiyum düzeyi azaldığında salgılanan Parathormon (PTH), kemik rezorpsiyonunu başlatmak için interlökin-1 (IL-1) ve interlökin-6 (IL-6) salınımını doğrudan aşağıdaki hücrelerden hangisi üzerinden uyarır?
Doğru Şık (A): Osteoblast
Açıklama: Paratiroid hormon (PTH) reseptörleri osteoblastların üzerinde bulunur; PTH bu hücreleri uyararak IL-1 ve IL-6 salgılatır, bu sitokinler de monositleri uyararak multinükleer osteoklastlara dönüşmelerini sağlar. En yaygın yanılgı PTH'ın doğrudan osteoklastı aktive ettiğidir (güçlü çeldirici), ancak sinyal zinciri yapıcı hücre olan osteoblast üzerinden yıkıcı hücrenin uyarılması (coupled remodeling) prensibine dayanır.

**Soru 2 (ID: f9895d61-312d-4812-9e79-bc6bf027c56b)**
Soru Kökü: İlerleyen yaşla birlikte alveoler kemikte rezorpsiyonun apozisyondan (kemik yapımı) daha baskın hale gelmesinin temel hücresel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Osteoblast sayısının azalmasına karşılık osteoklast sayısının değişmemesi
Açıklama: Alveol kemiğinde fizyolojik yaşlanmanın en belirgin hücresel yansıması, yapım hücresi olan osteoblastların sayısının ve mitotik aktivitesinin azalmasıdır. Yıkım hücresi olan osteoklastların sayısı ise değişmez. Bu durum, remodeling dengesini yıkan tarafın lehine bozar ve apozisyona kıyasla net rezorpsiyon miktarının daha fazla olmasına yol açar.

---

### ÇİFT 58 (Benzerlik: 0.71)

**Soru 1 (ID: 081a0983-973a-4cd8-aa39-bf6875cf44b6)**
Soru Kökü: Yaşlanma sürecinin dişin kök yüzeyini örten sement dokusu üzerindeki etkisi aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (E): Sement kalınlığı özellikle apikal bölgede artar ve dokunun geçirgenliği azalır.
Açıklama: Sement dokusu, dişin erüpsiyonu ve oklüzal kuvvetleri (atrizyonu) kompanze etmek amacıyla hayat boyu birikmeye (depozisyon) devam eder. Yaşlanmayla birlikte sementin kalınlığı özellikle dişin apikal ve lingual bölgelerinde 5-10 katına kadar artış gösterirken, kalsifikasyonun artmasıyla sementin madde geçirgenliği erken yaşlara göre belirgin şekilde azalır.

**Soru 2 (ID: a6c6e0da-4903-4c6a-b33b-e0214b7325f6)**
Soru Kökü: Kök yüzeyini kaplayan sementin biyolojik dinamikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Sement dokusu sağlıklı dişte kemik gibi sürekli fizyolojik rezorpsiyon ve remodelasyona uğrar.
Açıklama: Daimi dentisyonda sementin, kemik dokusunda olduğu gibi bir osteoklastik rezorpsiyon/yapım döngüsü (remodeling) kesinlikle bulunmaz; fizyolojik şartlarda sadece matriks üstüne yeni tabaka yığılır (apozisyonel büyüme). Alveol kemiği ise yaşam boyu eski matriksin yıkılıp yerine yenisinin yapıldığı aktif ve kanlı bir döngüdedir. Sement yüzeyinde görülen mikroskobik veya makroskobik lakün rezorpsiyonları her zaman okluzal travma, enfeksiyon veya ortodontik şiddet gibi patolojik stres kökenlidir.

---

### ÇİFT 59 (Benzerlik: 0.71)

**Soru 1 (ID: 2cc8b913-7e0c-4601-baea-e02078f42cfd)**
Soru Kökü: Ortodontik konsültasyon yapılan 18 yaşındaki hastanın alt anterior bölgesinde dişler arasında belirgin çapraşıklık ve temas alanlarının düz/geniş formda olduğu saptanmıştır. Bu bölgedeki interdental papilla yapısının anatomik karakteristiği aşağıdakilerden hangisinde doğru tanımlanmıştır?
Doğru Şık (C): İnterdental papillada sadece serbest dişeti dokusu bulunur.
Açıklama: Dişler arasındaki temas düz, geniş ise veya dişlerde çapraşıklık mevcutsa, interdental boşluk o kadar daralır ki papilla dokusunda yapışık dişetine yer kalmaz ve sadece serbest dişeti bulunur. Temas küçük ve nokta şeklindeyse hem yapışık hem serbest dişeti gözlenir. Çapraşıklığın bu anatomik sonucu, bölgedeki plak kontrolünün zorlaşmasının yapısal nedenlerinden biridir.

**Soru 2 (ID: 99997dde-e0cc-493b-b1d7-ab5499ff11e4)**
Soru Kökü: 26 yaşında erkek hasta, ortodontik tedavi sonrası üst santral dişleri arasındaki diastemanın kapanmasının ardından kontrol randevusuna geliyor. İki dişin birbirine tam temas etmediği diastema döneminde bulunmayan ancak kontak sağlandıktan sonra interdental bölgede iki papil (fasiyal ve lingual) arasında oluşan ve keratinize olmayan içbükey vadi şeklindeki anatomi aşağıdakilerden hangisidir?
Doğru Şık (D): Col (vadi) bölgesi
Açıklama: İnterdental papil, temas eden dişler arasında fasiyal ve lingual papiller olmak üzere iki parçalıdır; bu iki parça arasındaki keratinize olmayan içbükey, vadi şeklindeki bölgeye 'col' adı verilir. Dişler arasında temas (kontakt) yoksa, fasiyal ve lingual papiller birleşmez ve col yapısı fiziksel olarak oluşamaz. Ortodontik olarak temas sağlandığında bu doku yeniden şekillenir.

---

### ÇİFT 60 (Benzerlik: 0.71)

**Soru 1 (ID: 709b0e73-fe28-44a5-85b9-8b054b24bc1b)**
Soru Kökü: Ataşman aparatının en önemli parçası olan, kökün koronal ve orta üçlüsünü kaplayıp dişi alveolar kemiğe bağlayan ve yapısının çoğunluğunu Sharpey lif demetlerinin oluşturduğu 'yapışık sement' aşağıdakilerden hangisidir?
Doğru Şık (D): Hücresiz ekstrinsik fibrilli sement
Açıklama: Hücresiz ekstrinsik fibrilli sement, periodontal ligamentin Sharpey liflerini (ekstrinsik lifler) yoğun şekilde içeren ve dişin kemiğe asıl bağlanmasını sağlayan sement tipidir. Hücreli sement daha çok apikalde kompanzasyon için reaktif olarak üretilirken, dişin stabilitesini sağlayan ana yapı servikal ve orta üçlüdeki bu hücresiz fibrilli sementtir. Diğer adıyla yapışık sement olarak bilinir.

**Soru 2 (ID: 80d8b5dd-9dc5-4c21-88f7-0524c0f2373e)**
Soru Kökü: Dişin erüpsiyonu sırasında azalmış mine epitelinin ortadan kalkmasıyla bağ dokusunun mine ile temas ettiği servikal bölgelerde oluşan, klasik sement yapısından farklı olarak lif içermeyen sement tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Hücresiz fibrilsiz sement
Açıklama: Hücresiz fibrilsiz sement, esas olarak minenin servikal kısmında bulunan ve bağ dokusunun gelişim defekti sonucu doğrudan mineyle temasıyla biriken atipik bir sement tabakasıdır. Hücresiz ekstrinsik fibrilli sement kök yüzeyinde ana tutunmayı sağlarken, fibrilsiz tip sadece mine üzerinde hücresiz ve fibrilsiz bir kalsifiye birikinti olarak yer alır. Dişin destek aparatında fonksiyonel bir görevi yoktur.

---

### ÇİFT 61 (Benzerlik: 0.70)

**Soru 1 (ID: 4853ebf7-959d-4302-be48-021b617b7746)**
Soru Kökü: Yaşlanmayla birlikte periodontal dokularda fizyolojik, hücresel ve yapısal birçok değişiklik meydana gelmektedir. Buna göre, aşağıdaki periodontal ve kemik parametrelerinden hangisi yaşlanma sürecinden **etkilenmez**?
Doğru Şık (C): Osteointegre dental implantların başarı oranı
Açıklama: Osseointegre dental implantların başarısı, çekim soketlerinin iyileşme kapasitesi ve dokuların periodontal tedaviye yanıtı fizyolojik yaşlanma sürecinden etkilenmez. Yaşlanma ile birlikte yapışık dişeti genişliği ve sement kalınlığı artarken; epitelin keratinizasyon derecesi, fibroblastların mitotik aktivitesi ve sementin geçirgenliği azalır. Öğrencilerin sıklıkla ileri yaşta kemik iyileşmesinin bozulacağını düşünmesi yaygın bir yanılgıdır, kemik metabolizması yavaşlasa da osseointegrasyon kapasitesi korunur.

**Soru 2 (ID: 7616d035-6f60-44ff-bd0c-395daf469ffc)**
Soru Kökü: 68 yaşında erkek hasta, alt çene sağ posterior bölgesindeki diş eksiklikleri nedeniyle dental implant tedavisi talebiyle kliniğe başvurmuştur. Sistemik anamnezinde herhangi bir kronik rahatsızlığı bulunmayan hastanın klinik muayenesinde periodontal dokuların fizyolojik yaşlanma değişimleri gösterdiği saptanmıştır. Bu hastanın cerrahi tedavi planlaması ve prognozu değerlendirilirken, hekimin aşağıdaki doku yanıtı parametrelerinden hangisinin genç bir bireyle aynı kapasitede kalmasını beklemesi en olasıdır?
Doğru Şık (C): Ekstraksiyon soketinin iyileşme ve kemik formasyon kapasitesi
Açıklama: Periodontal dokularda yaşlanmayla birlikte hücresel ve immünolojik savunma zayıflasa da, çekim soketlerinin iyileşme kapasitesi ve kemiğin osseointegrasyon yeteneği değişmez. Yaşlanmayla nötrofil fagositozu, sement dokusunun permeabilitesi, tükürük akış hızı ve fibroblastların kollajen üretimi belirgin şekilde azalır. Hekim, yaşlılıkta hücresel tamir mekanizmaları değişse de implantın osseointegrasyon süreci açısından hastayı genç bir bireyle eşdeğer kategoride değerlendirmelidir.

---

### ÇİFT 62 (Benzerlik: 0.70)

**Soru 1 (ID: a320ac40-f691-45e1-ad62-6ae411483855)**
Soru Kökü: Dişeti epitelini oluşturan tabakalar incelendiğinde, sağlıklı non-keratinize sulkuler epitelde aşağıdaki tabakalardan hangisinin bulunması **beklenmez**?
Doğru Şık (D): Stratum corneum
Açıklama: Sulkuler epitel non-keratinize çok katlı yassı epitel karakterindedir ve parakeratinize/ortokeratinize oral epitelden farklı olarak stratum corneum ve stratum granulosum tabakalarını içermez. En güçlü çeldirici olan stratum spinosum tüm epitel tiplerinde hücrelerin yassılaşmaya başladığı temel bir tabaka olarak mevcuttur. Bakteriyel ürünlerin geçişine izin veren bu non-keratinize yapı, sulkusun yarı geçirgen membran karakterini belirler.

**Soru 2 (ID: d41a1b87-fd0e-4e69-84ff-8b3b5c868a74)**
Soru Kökü: Aşağıdaki epitel dokularından hangisi stratum corneum ve stratum granulosum tabakalarından tamamen yoksundur ve sağlıklı durumda keratinizasyon **göstermez**?
Doğru Şık (A): Birleşim epiteli
Açıklama: Birleşim epiteli ve gingival sulkus epiteli non-keratinize bir karakter sergiler; bu nedenle stratum corneum ve granulosum içermez. Serbest dişeti vestibül yüzü, yapışık dişeti ve sert damak mukozası ise mekanik strese direnmek için parakeratinize veya ortokeratinize yapı sergiler. Bu non-keratinize yapı, birleşim epitelinin yarı geçirgenliğini artırarak immün hücrelerin sulkusa göçünü kolaylaştırır.

---

### ÇİFT 63 (Benzerlik: 0.70)

**Soru 1 (ID: 081a0983-973a-4cd8-aa39-bf6875cf44b6)**
Soru Kökü: Yaşlanma sürecinin dişin kök yüzeyini örten sement dokusu üzerindeki etkisi aşağıdakilerden hangisinde doğru olarak verilmiştir?
Doğru Şık (E): Sement kalınlığı özellikle apikal bölgede artar ve dokunun geçirgenliği azalır.
Açıklama: Sement dokusu, dişin erüpsiyonu ve oklüzal kuvvetleri (atrizyonu) kompanze etmek amacıyla hayat boyu birikmeye (depozisyon) devam eder. Yaşlanmayla birlikte sementin kalınlığı özellikle dişin apikal ve lingual bölgelerinde 5-10 katına kadar artış gösterirken, kalsifikasyonun artmasıyla sementin madde geçirgenliği erken yaşlara göre belirgin şekilde azalır.

**Soru 2 (ID: 52d6b3af-6bc6-45bd-944e-c52c2ac123ed)**
Soru Kökü: Periodonsiyumda ilerleyen yaşa bağlı gelişen hücresel yaşlanma, yapısal ve morfolojik değişiklikler incelendiğinde, aşağıdakilerden hangisi birey yaşlandıkça miktar/kalınlık olarak belirgin şekilde **artış** gösteren anatomik parametrelerden biridir?
Doğru Şık (E): Dişin kök apikal bölgesi ve lingual yüzeyindeki sement kalınlığı
Açıklama: Sementasyon yaşam boyu dinamik biçimde apozisyonel olarak apikal ve furkasyon bölgelerinde devam ettiği için yaşlanmayla birlikte total sement kalınlığı (özellikle kök ucunda) gençliğe kıyasla 5-10 katına kadar artar. Yaşlılıkta bunun tam aksine epitel stratumları incelir, hücre yenilenme hızı yavaşlar, osteoblastik apozisyon osteoklastik yıkımın gerisinde kalır. Bu nedenle sementteki bu yığılma hipertrofisi atrizyonu kompanze etmeye dönük fi zyolojik bir telafi mekanizması olarak okunur.

---

### ÇİFT 64 (Benzerlik: 0.70)

**Soru 1 (ID: 1a57ce35-9540-4060-bccc-a89daa605eb5)**
Soru Kökü: Ortodontik tedavi sonrası kök yüzeyinde oluşan mikroskobik rezorpsiyon lakünlerinin içini dolduran ve tamir amacıyla sentezlenen 'reparatif sement' aşağıdakilerden hangisidir?
Doğru Şık (C): Hücreli intrinsik fibrilli sement
Açıklama: Hücreli intrinsik fibrilli sement, kök rezorpsiyon bölgelerinde tamir amacıyla (reparatif sement) sentezlenen ve yapısında dışarıdan gelen Sharpey liflerinden ziyade sementoblastların kendi ürettiği intrinsik lifleri barındıran sementtir. Reaktif sement apikalde boyu korurken, bu reparatif sement patolojik veya travmatik lakünlerin doldurulmasında görev alır. İçerisinde sementositler bulunur.

**Soru 2 (ID: 1e1c1a02-024c-42bc-9a93-997301031324)**
Soru Kökü: Daimi dişlerde sement dokusunda meydana gelen mikroskobik kök rezorpsiyonlarının tamir süreciyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (C): Dişeti epitel hücrelerinin rezorpsiyon bölgesine prolifere olması sement tamirini hızlandırarak destekler.
Açıklama: Kök yüzeyindeki rezorpsiyon lakünlerinin sementoblastlar tarafından onarılabilmesi (tamiri) için bölgeye canlı bağ dokusu hücrelerinin ulaşması gerekir. Eğer bölgeye hızlı göç eden epitel hücreleri (dişeti epiteli) prolifere olup kök yüzeyini kaplarsa, sementoblast farklılaşması engellenir ve sement tamiri gerçekleşemez (bağ dokusu ataşmanı yerine uzun birleşim epiteli oluşur).

---

### ÇİFT 65 (Benzerlik: 0.70)

**Soru 1 (ID: 2e966ef1-6772-444b-b061-978ea1155db7)**
Soru Kökü: Dokuz yaşındaki bir hastanın ağız ortamına yeni ulaşmış alt sağ birinci küçük azı dişinde fizyolojik mobilite gözlemlenmektedir. Radyografik incelemede kök gelişiminin henüz tamamlanmadığı ve foramen apikalenin açık olduğu görülmektedir. Bu dişte henüz olgunlaşmamış ve organizasyonunu tamamlamamış periodontal ligament lif grubu aşağıdakilerden hangisidir?
Doğru Şık (B): Apikal lifler
Açıklama: Apikal lifler dişin foramen apikalesi etrafından ışınsal olarak çevre kemiğe yönelirler ve ancak dişin kök epitel kını görevini bitirip kök oluşumu anatomik olarak tamamlandığında gelişirler. Alveolar kret, oblik ve horizontal lifler dişin ağız içi sürme aşamalarında servikalden başlayarak çok daha erken organize olurlar. Kök ucu kapanmamış dişlerde bu apikal ankraj bantlarının eksikliği, çocukluk çağı radyografilerinde geniş bir siyah kuşak görünümüne neden olur.

**Soru 2 (ID: 7b1bc364-1f50-4e7e-b663-80cbbcb60403)**
Soru Kökü: Bir alt çene birinci molar dişin çekimi sırasında hekim, davye ile dişi koronal yönde vertikal olarak lükse etmeye (ekstrüzyon hareketi) çalışmaktadır. Bu zorlayıcı vertikal çekme kuvvetine karşı ilk ve en güçlü gerilim direncini gösteren periodontal ligament lif grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Alveolar kret lifleri
Açıklama: Alveolar kret lifleri, epitel ataşmanının hemen altındaki servikal sementten çıkıp apikal ve dışa yönlenerek alveol kretin tepe noktasına tutunurlar; dişi alveolden dışarı çekmeye (ekstrüzyon) çalışan kuvvetlere karşı asıl primer direnci oluştururlar. Oblik lifler ise alan olarak en geniş gruptur ancak kökü yukarıdan aşağıya (kemiğe doğru) gömülmeye zorlayan çiğneme basınçlarını asıcı olarak karşılar. Bu anatomik yönelim nedeniyle hekimin çekim sırasındaki çekme kuvveti önce kret grubunu parçalamak zorundadır.

---

### ÇİFT 66 (Benzerlik: 0.70)

**Soru 1 (ID: a6c6e0da-4903-4c6a-b33b-e0214b7325f6)**
Soru Kökü: Kök yüzeyini kaplayan sementin biyolojik dinamikleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Sement dokusu sağlıklı dişte kemik gibi sürekli fizyolojik rezorpsiyon ve remodelasyona uğrar.
Açıklama: Daimi dentisyonda sementin, kemik dokusunda olduğu gibi bir osteoklastik rezorpsiyon/yapım döngüsü (remodeling) kesinlikle bulunmaz; fizyolojik şartlarda sadece matriks üstüne yeni tabaka yığılır (apozisyonel büyüme). Alveol kemiği ise yaşam boyu eski matriksin yıkılıp yerine yenisinin yapıldığı aktif ve kanlı bir döngüdedir. Sement yüzeyinde görülen mikroskobik veya makroskobik lakün rezorpsiyonları her zaman okluzal travma, enfeksiyon veya ortodontik şiddet gibi patolojik stres kökenlidir.

**Soru 2 (ID: e62d6e4d-f18a-4b14-b3e8-b114a7425280)**
Soru Kökü: Sement dokusunun özellikleri incelendiğinde, hücreli ve hücresiz sement arasındaki farklılıklara dair aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Hücreli sement, hücresiz semente göre daha fazla kalsifiye olmuştur.
Açıklama: Hücreli sement daha hızlı gelişen ve reaktif bir doku olduğu için, hücresiz semente göre daha az kalsifiye olmuştur. Çeldirici olarak verilen hücresiz sementin oklüzyon öncesi oluşumu doğru bir bilgidir ve bu dokunun daha düzenli, inorganik içeriği yüksek bir matrikse sahip olmasını sağlar. Hücreli sementin apikaldeki konumu, dişin sürmesini telafi etmek için yaşam boyu devam eden apozisyonel kalınlaşma mekanizmasıyla ilişkilidir.

---

### ÇİFT 67 (Benzerlik: 0.70)

**Soru 1 (ID: cda8ef90-8828-4d13-ad57-145e9e21ea48)**
Soru Kökü: Epitel ve bağ dokusu bileşkesinde, bazal laminanın hemen altındaki bağ dokusu fibrillerine bağlanmasını ve böylece iki dokunun fiziksel bütünlüğünü sağlayan yapılar aşağıdakilerden hangisidir?
Doğru Şık (B): Anker (çapa) fibriller
Açıklama: Anker (çapa) fibriller, bazal laminanın (özellikle tip 4 kollajenden oluşan lamina densa) hemen altındaki bağ dokusu fibrillerine sıkıca bağlanmasını sağlayan mikro-bağlantı elemanlarıdır. Hemidesmozomlar ise epitel hücrelerini bazal membranın kendisine bağlar, bağ dokusuna uzanmaz. Anker fibrillerin bu özelliği sayesinde epitel dokusu, altındaki bağ dokusundan gelen çiğneme basınçlarına karşı dokudan ayrılmadan bütünlüğünü korur.

**Soru 2 (ID: f22064a1-8715-4bc9-8cc3-a15a368e45bb)**
Soru Kökü: Birleşim epitelinin dişe tutunma mekanizmasında rol oynayan ve epitelyal hücrelerin bazal laminaya fiziksel ataşmanını sağlayan, lamina lucidada yerleşik temel glikoprotein aşağıdakilerden hangisidir?
Doğru Şık (E): Laminin
Açıklama: Laminin, bazal membranın lamina lucida tabakasında yer alan ve epitelyal hemidesmozomların buraya tutunmasını sağlayarak birleşim epitelinin biyolojik adaptasyonuna hizmet eden temel glikoproteindir. Fibronektin ise bağ dokusunda fibroblastların kollajen fibrillere tutunmasını sağlayan moleküldür; dolayısıyla laminin epitelin, fibronektin ise bağ dokusunun ana ataşman proteinidir. Bu fark, periodontal membran bütünlüğünün histolojik anahtarıdır.

---

### ÇİFT 68 (Benzerlik: 0.70)

**Soru 1 (ID: 2149b01a-c78a-42a2-bfb2-69da78846d85)**
Soru Kökü: Periodontal fenotipler ve alveolar kemik anatomisi ilişkisi değerlendirildiğinde, 'ince scallop' periodontal fenotipe sahip bir bireyde aşağıdaki bulgulardan hangisinin görülmesi en yüksek ihtimaldir?
Doğru Şık (C): Sulkus içerisine yerleştirilen periodontal sondun dışarıdan fark edilebilmesi
Açıklama: İnce scallop fenotipte doku ince olduğu için periodontal sond sulkus içinden rahatlıkla yansıma yapar ve görülebilir. Bu fenotip popülasyonun 1/3'ünde, sıklıkla kadınlarda görülür ve dehisens/fenestrasyon riski yüksektir. Kalın ve geniş doku, künt kemik marjini gibi özellikler kalın-düz fenotiplerin tipik karakteristiğidir.

**Soru 2 (ID: fd343267-421f-4628-84dd-b8280d09f8cf)**
Soru Kökü: Yirmi sekiz yaşında kadın hastanın periodontal muayenesinde, anterior bölgede dişeti marjininin belirgin kavisler çizerek apikale konumlandığı ve sulkusa yerleştirilen periodontal sondun dişeti dokusunun dışından gözlenebildiği saptanmıştır. Bu hastadaki periodontal fenotip aşağıdakilerden hangisidir?
Doğru Şık (E): İnce scallop
Açıklama: Periodontal sond sulkus içine yerleştirildiğinde dışarıdan görülebiliyorsa, doku kalınlığının az olduğu 'ince' fenotip saptanır; dişeti marjininin derin kavisler (scallop) yapması da 'ince scallop' fenotipi tanımlar. Kalın fenotiplerde sond doku altından yansımaz ve dişeti kavisleri genellikle daha düz veya yatay seyreder. Bu fenotip özellikle kadınlarda ve popülasyonun üçte birinde sık görülür.

---

### ÇİFT 69 (Benzerlik: 0.70)

**Soru 1 (ID: 36f0e0ac-e5db-4313-a8b1-ca702afb217f)**
Soru Kökü: Otuz beş yaşında kadın hastanın periapikal radyografisinde, mandibula posterior dişlerin köklerini çepeçevre saran sürekli ve belirgin bir radyoopak çizgi izlenmiştir. Klinik sağlıkta gözlenen bu radyografik yapının histolojik karşılığı aşağıdakilerden hangisidir?
Doğru Şık (C): Alveolar bone proper
Açıklama: Radyografide kökleri saran radyoopak çizgi 'lamina dura' olarak adlandırılır ve bu yapının histolojik karşılığı soketin iç duvarını döşeyen 'alveolar bone proper' (kalbursu kemik/demet kemiği) dir. Kortikal kemik çenelerin dış yüzeyini örterken, radyografik kök çevresi radyoopasitesini sağlamaz. Bu yapıdaki kayıplar periodontal hastalıkların erken radyografik bulgusudur.

**Soru 2 (ID: 5b6de1c3-78c9-42aa-9472-cc99068c5a58)**
Soru Kökü: Otuz beş yaşındaki kadın hastanın travma geçmişi olan üst yan kesici dişinin apeksinde, kronik inflamasyon zemininde gelişmiş radyolüsent bir periapikal radiküler kist tespit edilmiştir. Periodontal ligament içinde ağsı bir yapıda inaktif bekleyen ve inflamatuar uyararanlarla prolife olarak bu kistlerin epitel bariyerini oluşturan embriyolojik kalıntılar aşağıdakilerden hangisidir?
Doğru Şık (A): Malassez epitel artıkları
Açıklama: Malassez epitel artıkları, dişin kök morfogenezini yönlendiren Hertwig epitelyal kök kınının parçalanması sonrası periodontal ligament aralığında hapsolan ektodermal hücre kümeleridir. Serres incileri ise dental laminanın döküntüleri olup genellikle bebeklerde krestal gingivada yüzeyel kistler oluşturur. Malassez artıkları periodontal enfeksiyon ortamında reaktif mitotik aktiviteye girerek odontojenik radiküler kistlerin lümen döşemesini meydana getirir.

---

### ÇİFT 70 (Benzerlik: 0.70)

**Soru 1 (ID: b0287562-a252-4977-bff8-cabe6c2d2207)**
Soru Kökü: Periodontal dokularda yaşlanmayla birlikte meydana gelen fizyolojik değişiklikler incelendiğinde, aşağıdaki parametrelerden hangisinde belirgin bir **artış** gözlenmesi beklenir?
Doğru Şık (E): Periodontal ligamentte yer alan elastik liflerin miktarı
Açıklama: Yaşlanma ile periodontal ligamentte ve bağ dokusunda kollajen sentezi ve fibroblast aktivitesi azalırken, elastik liflerin sayısında ve hiyalinizasyon alanlarında artış gözlenir. En güçlü çeldirici olan bağ dokusu epitelinin durumu tam tersine incelme ve keratinizasyonda azalma yönündedir, bu da mukozanın mekanik travmalara direncini düşürür. Hücresel düzeydeki bu makromoleküler değişim, dokunun esnekliğini ve tamir kapasitesini sınırlar.

**Soru 2 (ID: d115bd04-9193-483e-8c9d-b8806fb396a7)**
Soru Kökü: Yaşlı bir hastanın dişeti dokusunun histolojik incelemesinde, epitel ile bağ dokusu arasındaki sınırın genç bireylere kıyasla yapısal değişime uğradığı saptanmıştır.

Bu bölgedeki yaşa bağlı en karakteristik morfolojik değişiklik aşağıdakilerden hangisidir?
Doğru Şık (B): Rete-peg (epitelyal girinti) görüntüsünde düzleşme
Açıklama: Yaşlanmayla birlikte dişeti epitelinin bağ dokusuna yaptığı girintiler olan rete-peg'lerin (epitelyal kretler) boylarında kısalma ve düzleşme meydana gelir. Bu düzleşme, epitel ile bağ dokusu arasındaki yüzey alanını daraltır ve dokunun mekanik kuvvetlere karşı dayanıklılığını azaltır. Hiperkeratoz yerine keratinizasyon azalması görülür.

---

### ÇİFT 71 (Benzerlik: 0.70)

**Soru 1 (ID: 05f27d49-9c8f-46ad-a972-481cd430457f)**
Soru Kökü: Altmış beş yaşındaki sistemik olarak sağlıklı bir erkek hastanın posterior maksilla ve mandibulasındaki diş eksiklikleri osseointegre dental implantlarla tedavi edilmek istenmektedir.

Periodontal dokularda yaşlanmanın etkileri göz önüne alındığında, bu hastadaki osseointegrasyon ve yara iyileşme süreciyle ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (C): Yaşlanma süreci osseointegrasyon kapasitesini ve yara iyileşme potansiyelini anlamlı ölçüde etkilemez.
Açıklama: Yaşlanmayla birlikte kemik döngüsünde yavaşlama olsa da, klinik araştırmalar ve biyolojik veriler, sağlıklı yaşlı bireylerde osseointegre dental implantların başarısının ve çekim soketlerinin iyileşme kapasitesinin yaştan (kronolojik yaşlanmadan) olumsuz yönde etkilenmediğini açıkça göstermektedir. Kontrendikasyon veya süre uzatımı gerekmez.

**Soru 2 (ID: e5bcd80d-b01e-4e47-84f9-19c48b671a01)**
Soru Kökü: Yaşlı hastalarda gözlenen kemik ve periodontal doku değişiklikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): İleri yaşa bağlı olarak çene kemiklerinin mineral densitesinde azalma görülmesi osteointegrasyon sürecini bozar.
Açıklama: Kaynak metne göre osseointegre dental implantların başarısı yaştan etkilenmemektedir ve ileri yaşlarda görülen osteoporozis / mineral densite azalması fizyolojik yaşlanma sürecine bağlı değildir. Diğer şıklarda verilen immünolojik (Th1/Th17 sayılarında artış), hücresel (osteoklast sayısının sabit kalıp osteoblastın azalması) ve yapısal (PDL liflerinde kalınlaşma, epitelde incelme) değişikliklerin tümü yaşlanmanın fizyolojik bulguları olarak gerçekleşir. Çeldirici şık, yaşlılıkta osteointegrasyonun bozulacağı varsayımı üzerine kurulmuştur.

---

### ÇİFT 72 (Benzerlik: 0.70)

**Soru 1 (ID: a704e935-0f1c-450b-bce3-5e917cc9ff15)**
Soru Kökü: Stratum basale hücreleri bazal membrana tutunarak epitel bütünlüğünü sağlarlar. Birleşim epitelinin dişe ve bağ dokusuna fiziksel bağlantısında birincil rol oynayan bu yapı aşağıdakilerden hangisidir?
Doğru Şık (D): Hemidesmozom
Açıklama: Hemidesmozomlar, stratum basale hücrelerini lamina lucidaya (bazal membrana) bağlayan ve epitel-bağ dokusu mekanik bütünlüğünü sağlayan temel yapılardır. Desmozomlar ise hücreleri bazal membrana değil, birbirlerine (hücreden hücreye) bağlayarak mekanik destek sağlarlar. Birleşim epiteli internal bazal laminası aracılığıyla mineye tutunurken de bu hemidesmozomal bağlantı sistemini aktif olarak kullanır.

**Soru 2 (ID: f22064a1-8715-4bc9-8cc3-a15a368e45bb)**
Soru Kökü: Birleşim epitelinin dişe tutunma mekanizmasında rol oynayan ve epitelyal hücrelerin bazal laminaya fiziksel ataşmanını sağlayan, lamina lucidada yerleşik temel glikoprotein aşağıdakilerden hangisidir?
Doğru Şık (E): Laminin
Açıklama: Laminin, bazal membranın lamina lucida tabakasında yer alan ve epitelyal hemidesmozomların buraya tutunmasını sağlayarak birleşim epitelinin biyolojik adaptasyonuna hizmet eden temel glikoproteindir. Fibronektin ise bağ dokusunda fibroblastların kollajen fibrillere tutunmasını sağlayan moleküldür; dolayısıyla laminin epitelin, fibronektin ise bağ dokusunun ana ataşman proteinidir. Bu fark, periodontal membran bütünlüğünün histolojik anahtarıdır.

---

### ÇİFT 73 (Benzerlik: 0.70)

**Soru 1 (ID: 86f2a94a-7971-4002-9eb6-6c8ccbcebd92)**
Soru Kökü: Ortodontik tedavi gören 18 yaşındaki kadın hastada, dişin uzun aksına paralel uzanan ve periodontal ligament aralığında bol miktarda bulunan, mekanik gerilimlerde esneklik sağlayan uzun ince fibriller izlenmiştir. Tanımlanan bu yapı aşağıdakilerden hangisidir?
Doğru Şık (C): Oksitalan lifler
Açıklama: Oksitalan lifler, periodontal ligament aralığında dişin uzun aksına paralel olarak seyreden ve esneklik sağlayan ince uzun elastik benzeri fibrillerdir. Sharpey lifleri ve Tip 1 kollajen daha çok oblik veya yatay doğrultuda uzanarak dişi kemiğe ankore ederken, oksitalan liflerin dikey ve paralel yerleşimi damar yapılarını destekler. Gingiva bağ dokusunda nispeten az bulunmalarına rağmen PDL içinde çok yoğun olarak izlenirler.

**Soru 2 (ID: a391dad9-9a9a-4f81-b702-11b0ba9f962d)**
Soru Kökü: Periodontal ligamentin temel fibril gruplarından olan ve dişlerin servikal alanından çıkıp interproksimal bölgede alveolar kret tepesi üzerinden aşarak komşu dişin sementine gömülen, bu sayede kemiğe atake olmadan gingivaya ait bir yapı gibi davranan lif grubu aşağıdakilerden hangisidir?
Doğru Şık (A): Transseptal lifler
Açıklama: Transseptal lifler, interdental kemiği horizontal olarak aşarak komşu iki dişin sementlerini birbirine bağlarlar; kemiğe tutunmadıkları için sıklıkla gingival lif grubu olarak da sınıflandırılırlar ve periodontal yıkım sonrası tamir kapasiteleri yüksektir. Alveolar kret lifleri ise sementten alveolar krete oblik uzanır ve dişi kemiğe bağlar (güçlü çeldirici), transseptal lifler komşu dişe tutunma mekanizmasıyla ayrılır.

---

### ÇİFT 74 (Benzerlik: 0.70)

**Soru 1 (ID: 4ada866a-0096-49fb-97ac-4a5d152ff88c)**
Soru Kökü: Alveolar mukozanın kan damarları fizyolojik şartlarda mukogingival hat sınırında sonlanır ve bu hat belirgin bir renk farklılığı yaratır. Ancak, aşağıdaki sistemik veya patolojik durumların hangisinde, alveolar mukozadan gelen kan damarlarının yapışık dişetine doğru seyrettiği ve bu sınırın görsel olarak kaybolduğu izlenebilir?
Doğru Şık (D): Lösemi ve polikistik over sendromu gibi hormonal/sistemik dengesizlikler
Açıklama: Alveolar mukozanın zengin vasküler ağı normalde mukogingival sınırda durur. Ancak lösemi, lepra veya polikistik over sendromu gibi yoğun sistemik ve hormonal reaksiyonların yaşandığı durumlarda damar geçirgenlik ve proliferasyon paternleri bozulur. Kan damarları bu sınırı aşarak yapışık dişetine doğru yürür ve mukogingival hattın klinik belirginliği kaybolur. Peutz-Jeghers melanin pigmentasyonu yapar, damarsal ilerleme yapmaz.

**Soru 2 (ID: da030a18-810c-4162-9aab-3fa074a400ba)**
Soru Kökü: Elli yaşında sistemik sağlıklı erkek hastada periodontal flep cerrahisi planlanmaktadır. Alveoler mukoza ile yapışık dişeti sınırındaki mukogingival hattın kanlanma dinamikleri incelendiğinde, sağlıklı durumda alveolar mukozadan gelen kan damarları ile ilgili aşağıdakilerden hangisi doğrudur?
Doğru Şık (E): Sağlıkta mukogingival hat sınırında sonlanırlar
Açıklama: Alveolar mukozanın kan damarları, doku sağlıklı iken mukogingival hat (MGJ) hizasında sonlanır ve yapışık dişetinin içine geçmezler. Ancak lösemi veya hormonal dengesizlikler gibi patolojik tablolarda bu vasküler sınır kaybolabilir ve alveolar mukoza damarları yapışık dişetine doğru taşabilir. Sağlıklı bir cerrahi değerlendirmede MGJ'nin apikal ve koronal zonları, sahip oldukları bu birbirinden bağımsız kanlanma profilleri nedeniyle farklı renkte izlenirler.

---

### ÇİFT 75 (Benzerlik: 0.70)

**Soru 1 (ID: 0f296026-e9cd-4784-a783-5b466f72eacb)**
Soru Kökü: Sekiz yaşındaki bir erkek çocuğun klinik muayenesinde marjinal dişetlerinde kızarıklık, şişlik ve fırçalamada kanama şikayeti mevcuttur. Ataçman kaybı ve radyografik kemik yıkımı izlenmemiştir. 

Bu çocuk hastanın subgingival biyofilm florası incelendiğinde en yüksek oranda (%68) tespit edilmesi beklenen periodontal patojen aşağıdakilerden hangisidir?
Doğru Şık (A): Porphyromonas gingivalis
Açıklama: Çocuklarda görülen gingivitis vakalarının biyofilm analizlerinde en sık rastlanan periodontal patojen %68 oranıyla Porphyromonas gingivalis'tir. Tannerella forsythia ise yaklaşık %20 oranında görülür ve dişeti kanamasıyla spesifik korelasyon gösterir. A. actinomycetemcomitans daha çok adölesan dönemdeki agresif periodontitis formlarında baskındır.

**Soru 2 (ID: eb99beec-1c98-4da4-9ecd-cc84a7655e23)**
Soru Kökü: Sekiz yaşındaki kız çocuğunda yaygın marjinal dişeti kanaması ve enflamasyon saptanmış, ancak radyografide herhangi bir kemik veya ataşman kaybı izlenmemiştir. Çocuklarda plağa bağlı gingivitisin periodontitise dönüşme oranının yetişkinlere göre nadir olmasının temel nedeni aşağıdakilerden hangisi **değildir**?
Doğru Şık (D): Çocukluk çağında mikrofloranın Porphyromonas gingivalis'ten tamamen yoksun olması
Açıklama: Çocuklarda gingivitis nadiren periodontitise ilerler çünkü T-hücre dominant, B-hücre fakir bir bağışıklık yanıtı vardır ve birleşim epiteli mekanik olarak daha kalındır. Ancak çocuk mikroflorası P. gingivalis'ten tamamen yoksun değildir; gingivitisli çocukların biyofilminde %68 oranında P. gingivalis saptanabildiği klinik olarak kanıtlanmıştır (en güçlü çeldirici). Toksin penetrasyonuna anatomik direnç ön plandadır.

---

### ÇİFT 76 (Benzerlik: 0.70)

**Soru 1 (ID: 2ae8d787-daf8-4a7a-a3f7-c397b0336dd2)**
Soru Kökü: Periodontal ligament, dişleri kemiğe mekanik olarak asan güçlü kollajen yapılardan oluşur. Bu ligamentin esas liflerinin, alveol kemiği ve kök sementi dokusu içine doğrudan gömülerek kalsifiye olan terminal uçlarına ne ad verilir?
Doğru Şık (A): Sharpey lifleri
Açıklama: Sharpey lifleri, periodontal ligamentin ekstrinsik tip 1 kollajen demetlerinin sement ve alveol kemiği matriksine hapsolmuş, kemik ve sement sınırında yüksek oranda kalsifiye kısımlarıdır. Oksitalan ve elaunin lifleri PDL içinde esneklik sağlayan elastik sistemin uzantıları olup damar çeperlerine paralel uzanır, ancak kemiğe asıcı bir ankraj sağlamazlar. Bu terminal kalsifiye ankraj bağlantıları, çiğneme kuvvetlerinin çene kemiklerine dengeli bir şok emilimiyle aktarılmasını garantiler.

**Soru 2 (ID: ce101580-97a9-4bd9-9736-7f5490330751)**
Soru Kökü: Periodontal ligamentten köken alan ekstrinsik kollajen liflerinin (Sharpey lifleri) doğrudan içine gömüldüğü, soket iç duvarını döşeyen alveolar kemik proper'ın özelleşmiş kısmına ne ad verilir?
Doğru Şık (E): Demet kemiği
Açıklama: Demet kemiği (bundle bone), çok sayıda kalsifiye Sharpey lifi içeren ve periodontal ligamente komşu olan kemik dokusudur. Kanselöz kemik veya bazal kemik, PDL'nin doğrudan gömüldüğü soket duvarını oluşturmaz. Demet kemiği terimi, içerdiği bu yoğun fibril demetlerinden kaynaklanmaktadır.

---

### ÇİFT 77 (Benzerlik: 0.69)

**Soru 1 (ID: 63b67001-52f1-4c0b-b74f-2e5601f472b4)**
Soru Kökü: Periodontal enfeksiyonlara karşı konak yanıtında yaşlanmayla birlikte ortaya çıkan immünolojik değişikliklerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Nötrofillerin bakteriyel fagositoz kapasitesinde ve antimikrobiyal aktivitesinde artış izlenir.
Açıklama: Yaşlanma ile birlikte, bakterilere karşı ilk savunma hattını oluşturan nötrofillerin etkinliğinde artış değil, azalma meydana gelir. Nötrofillerin bakteriyel fagositoz kapasitesi zayıflar ve hücre dışı tuzak (NET) oluşturma mekanizmaları bozulur. İmmün sistem genel olarak (Th1, Th17 ve M1 makrofajlar üzerinden) daha kronik pro-inflamatuar, ancak akut fagositozda daha zayıf bir hale gelir.

**Soru 2 (ID: e5bcd80d-b01e-4e47-84f9-19c48b671a01)**
Soru Kökü: Yaşlı hastalarda gözlenen kemik ve periodontal doku değişiklikleri ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): İleri yaşa bağlı olarak çene kemiklerinin mineral densitesinde azalma görülmesi osteointegrasyon sürecini bozar.
Açıklama: Kaynak metne göre osseointegre dental implantların başarısı yaştan etkilenmemektedir ve ileri yaşlarda görülen osteoporozis / mineral densite azalması fizyolojik yaşlanma sürecine bağlı değildir. Diğer şıklarda verilen immünolojik (Th1/Th17 sayılarında artış), hücresel (osteoklast sayısının sabit kalıp osteoblastın azalması) ve yapısal (PDL liflerinde kalınlaşma, epitelde incelme) değişikliklerin tümü yaşlanmanın fizyolojik bulguları olarak gerçekleşir. Çeldirici şık, yaşlılıkta osteointegrasyonun bozulacağı varsayımı üzerine kurulmuştur.

---

### ÇİFT 78 (Benzerlik: 0.69)

**Soru 1 (ID: 27745221-a340-4302-b192-f7b50ff7e77d)**
Soru Kökü: Gingival pleksusun oluşumuna katkıda bulunan damarlar dişetine üç farklı yoldan ulaşır. Sulkus bölgesinde anastomozlar oluşturarak marjinal dişetinin kanlanmasına apikalden koronale doğru destek veren damarlar aşağıdakilerden hangisinden kaynaklanır?
Doğru Şık (C): Periodontal ligament arterleri
Açıklama: Periodontal ligament arterleri (PDL arteriolleri), sement ve kemik arasındaki boşluktan apiko-koronal yönde ilerleyerek dişetine ulaşır ve sulkus bölgesinde diğer damarlarla birleşip (anastomoz) gingival pleksusu oluşturur. Supraperiosteal damarlar kemiğin dışından gelirken, PDL damarları doğrudan dişin periodonsiyumundan destek verir. Bu sayede dişi çevreleyen yaka formundaki marjinal dişeti yoğun kan akışıyla inflamasyona anında cevap üretebilir.

**Soru 2 (ID: 969eb19d-d901-412d-8b83-e34b1b70f2f3)**
Soru Kökü: İnterdental papillada belirgin inflamasyon saptanan bir hastada, bu bölgenin vasküler drenajı ve kanlanması incelenmektedir. Alveol kemiğinin tepesinden çıkarak interdental dişetini doğrudan vaskülarize eden yapılar aşağıdakilerden hangisidir?
Doğru Şık (D): İntraseptal arterioller
Açıklama: İntraseptal arterioller, interdental kemik septumunun (komşu iki dişin alveollerini ayıran kret) tepesinden çıkarak hemen üzerindeki interdental dişetini (papili) vaskülarize eder. Supraperiosteal damarlar bukkolingual yüzeylerde kalırken, intraseptal damarlar doğrudan papil merkezine ulaşır. Papil dokusunun cerrahi onarımlarındaki yüksek başarısı, bu intraseptal vasküler desteğin kesintiye uğramadan devamlılık sağlamasıyla ilişkilidir.

---

### ÇİFT 79 (Benzerlik: 0.69)

**Soru 1 (ID: 4ee07c1e-f29d-461c-a813-4c345341b3ec)**
Soru Kökü: Dişeti bağ dokusu hücrelerarası matriksinin inşasında rol alan proteinler değerlendirildiğinde, bağ dokusu fibrillerinin %60'ını ve organik kemik matriksinin %90'ını oluşturan kollajen tipi aşağıdakilerden hangisidir?
Doğru Şık (D): Tip 1 kollajen
Açıklama: Tip 1 kollajen tüm vücut bağ dokularının, derinin, kemiğin organik matriksinin (%90) ve dişeti bağ dokusunun ana yapısal proteinidir. Tip 2 kollajen kıkırdakta, Tip 3 embriyonel dokularda (veya genç retiküler liflerde), Tip 4 ise bazal membranların lamina densasında bulunur. Diş hekimliği bağ dokusu iyileşme mekanizmalarında sentezlenen temel materyal Tip 1 kollajen iplikleridir.

**Soru 2 (ID: 534305c3-3c99-47fd-8847-aef50ee551b7)**
Soru Kökü: Kemik dokusunun organik matriksinin %90'ını tip 1 kollajen oluştururken, geri kalan %10'luk kısım kemiğin mineralizasyonunu düzenleyen çeşitli moleküllerden oluşur. Aşağıdakilerden hangisi bu organik matrikste yer alan non-kollajenöz (kollajen olmayan) proteinlere bir örnektir?
Doğru Şık (A): Osteokalsin
Açıklama: Osteokalsin ve osteonektin, kemik organik matriksinde bulunan ve mineralizasyona yardım eden non-kollajenöz proteinlerdir. Fibronektin ve laminin genel bağ dokusu ve epitel ataşman proteinleri iken, filaggrin gingival epitelin keratinizasyonunda rol oynar. Tip I kollajen dışındaki bu küçük protein oranları kemik kalitesi için esastır.

---

### ÇİFT 80 (Benzerlik: 0.69)

**Soru 1 (ID: 80d8b5dd-9dc5-4c21-88f7-0524c0f2373e)**
Soru Kökü: Dişin erüpsiyonu sırasında azalmış mine epitelinin ortadan kalkmasıyla bağ dokusunun mine ile temas ettiği servikal bölgelerde oluşan, klasik sement yapısından farklı olarak lif içermeyen sement tipi aşağıdakilerden hangisidir?
Doğru Şık (B): Hücresiz fibrilsiz sement
Açıklama: Hücresiz fibrilsiz sement, esas olarak minenin servikal kısmında bulunan ve bağ dokusunun gelişim defekti sonucu doğrudan mineyle temasıyla biriken atipik bir sement tabakasıdır. Hücresiz ekstrinsik fibrilli sement kök yüzeyinde ana tutunmayı sağlarken, fibrilsiz tip sadece mine üzerinde hücresiz ve fibrilsiz bir kalsifiye birikinti olarak yer alır. Dişin destek aparatında fonksiyonel bir görevi yoktur.

**Soru 2 (ID: 95f8de71-adbc-4f85-b104-1e5080ef835a)**
Soru Kökü: Dişin kökünün apikal üçte birlik kısmında ve furkasyon bölgelerinde yer alan, mekanik gerilimlere ve atrizyona karşı oklüzal boyu korumak için hızlıca sentezlenen 'reaktif sement' tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Hücreli karışık tabakalı sement
Açıklama: Hücreli karışık tabakalı sement, özellikle apikal üçlü ve furkasyonlarda lokalizedir; mekanik gerilim, mezial migrasyon ve oklüzal atrizyonu kompanze etmek için sementositler tarafından hızla üretilir. Hem intrinsik hem de ekstrinsik lifleri bir arada barındırdığı için 'karışık tabakalı' olarak adlandırılır. Hızlı yapımı nedeniyle hücresiz sementten daha az kalsifiye ve daha düzensizdir.

---

### ÇİFT 81 (Benzerlik: 0.69)

**Soru 1 (ID: 6cbb6163-fff7-4f36-8119-c43d01a127da)**
Soru Kökü: Aşağıdaki anatomik yapılardan hangisi, dişi alveol kemiğine bağlayarak fonksiyonel bir bütünlük oluşturan periodonsiyum dokularından biri **değildir**?
Doğru Şık (B): Pulpa dokusu
Açıklama: Periodonsiyum; dıştan içeriye doğru dişeti (gingiva), alveolar kemik, periodontal ligament ve sementten oluşan destek dokuların bütünüdür. Pulpa dokusu dişin içsel (endodontik) canlılığını sağlayan yapılardan olup, çevresel destek dokusu olan periodonsiyum komponentleri arasında yer almaz. Çeldirici olan sement, dişin sert dokusu olmasına rağmen embriyolojik ve fonksiyonel olarak periodonsiyumun ayrılmaz bir parçasıdır.

**Soru 2 (ID: b8a5ee4f-aabe-476f-92a0-326ecc1d6e38)**
Soru Kökü: Aşağıdaki periodontal yapılardan hangisi, sağlıklı bir bireyde keratinize dişeti dokusunun koronal (üst) ve apikal (alt) anatomik sınırlarını doğru olarak belirler?
Doğru Şık (A): Gingival marjin ile mukogingival birleşim arası
Açıklama: Keratinize dişeti bütünü, hem serbest dişetini hem de yapışık dişetini kapsayan bir anatomik ünite olduğu için koronal sınırı dişi yaka gibi saran 'gingival marjin', apikal sınırı ise alveolar mukoza ile ayrıldığı nokta olan 'mukogingival birleşim'dir. Sadece gingival groove (dişeti yivi) alınırsa, serbest dişeti dışarıda bırakılmış olur.

---

### ÇİFT 82 (Benzerlik: 0.69)

**Soru 1 (ID: 52d6b3af-6bc6-45bd-944e-c52c2ac123ed)**
Soru Kökü: Periodonsiyumda ilerleyen yaşa bağlı gelişen hücresel yaşlanma, yapısal ve morfolojik değişiklikler incelendiğinde, aşağıdakilerden hangisi birey yaşlandıkça miktar/kalınlık olarak belirgin şekilde **artış** gösteren anatomik parametrelerden biridir?
Doğru Şık (E): Dişin kök apikal bölgesi ve lingual yüzeyindeki sement kalınlığı
Açıklama: Sementasyon yaşam boyu dinamik biçimde apozisyonel olarak apikal ve furkasyon bölgelerinde devam ettiği için yaşlanmayla birlikte total sement kalınlığı (özellikle kök ucunda) gençliğe kıyasla 5-10 katına kadar artar. Yaşlılıkta bunun tam aksine epitel stratumları incelir, hücre yenilenme hızı yavaşlar, osteoblastik apozisyon osteoklastik yıkımın gerisinde kalır. Bu nedenle sementteki bu yığılma hipertrofisi atrizyonu kompanze etmeye dönük fi zyolojik bir telafi mekanizması olarak okunur.

**Soru 2 (ID: d115bd04-9193-483e-8c9d-b8806fb396a7)**
Soru Kökü: Yaşlı bir hastanın dişeti dokusunun histolojik incelemesinde, epitel ile bağ dokusu arasındaki sınırın genç bireylere kıyasla yapısal değişime uğradığı saptanmıştır.

Bu bölgedeki yaşa bağlı en karakteristik morfolojik değişiklik aşağıdakilerden hangisidir?
Doğru Şık (B): Rete-peg (epitelyal girinti) görüntüsünde düzleşme
Açıklama: Yaşlanmayla birlikte dişeti epitelinin bağ dokusuna yaptığı girintiler olan rete-peg'lerin (epitelyal kretler) boylarında kısalma ve düzleşme meydana gelir. Bu düzleşme, epitel ile bağ dokusu arasındaki yüzey alanını daraltır ve dokunun mekanik kuvvetlere karşı dayanıklılığını azaltır. Hiperkeratoz yerine keratinizasyon azalması görülür.

---

### ÇİFT 83 (Benzerlik: 0.69)

**Soru 1 (ID: e0b032db-b70e-421f-bfc7-38a734f7e211)**
Soru Kökü: Kırk yaşında sistemik ve periodontal olarak sağlıklı bir bireyin alveolar kemiği incelendiğinde, mineralize kemik matriksindeki lakünlerde bulunan, yıldız şeklinde uzantılara sahip olan ve kanalcıklar (kanaliküller) sistemiyle mekanosensör olarak görev yaparak kemiğin remodelasyonunu yöneten olgun hücre tipi aşağıdakilerden hangisidir?
Doğru Şık (A): Osteositler
Açıklama: Osteositler, kendi ürettikleri matriks içinde hapsolmuş olgun osteoblastlardır. Lakünler içinde yer alırlar ve kanaliküller aracılığıyla birbirleriyle iletişim kurarak kemik üzerindeki mekanik gerilimleri algılayıp (mekanosensör) remodeling sürecini yönetirler. Osteoblastlar kemik yüzeyinde aktif matriks üretirken, osteoklastlar dev yıkım hücreleridir.

**Soru 2 (ID: f9895d61-312d-4812-9e79-bc6bf027c56b)**
Soru Kökü: İlerleyen yaşla birlikte alveoler kemikte rezorpsiyonun apozisyondan (kemik yapımı) daha baskın hale gelmesinin temel hücresel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Osteoblast sayısının azalmasına karşılık osteoklast sayısının değişmemesi
Açıklama: Alveol kemiğinde fizyolojik yaşlanmanın en belirgin hücresel yansıması, yapım hücresi olan osteoblastların sayısının ve mitotik aktivitesinin azalmasıdır. Yıkım hücresi olan osteoklastların sayısı ise değişmez. Bu durum, remodeling dengesini yıkan tarafın lehine bozar ve apozisyona kıyasla net rezorpsiyon miktarının daha fazla olmasına yol açar.

---

### ÇİFT 84 (Benzerlik: 0.69)

**Soru 1 (ID: ac43f7c7-85e9-4b2b-af95-29c75158f1e8)**
Soru Kökü: Çok köklü posterior dişlerin periodontal anatomisi, tek köklü dişlere kıyasla lateral okluzal kuvvetlere ekstra stabilite sağlayan spesifik lif demetleri içerir. Yalnızca çok köklü dişlerde bulunan ve köklerin birleşim alanındaki sementten kemiğe ışınsal olarak bağlanan periodontal ligament grubu aşağıdakilerden hangisidir?
Doğru Şık (D): İnterradiküler lifler
Açıklama: İnterradiküler lifler isminden de anlaşılabileceği gibi yalnızca birden fazla kökü olan dişlerin furkasyon çatısı altında sementten başlayıp, interradiküler kemik septumuna uzanan yelpaze şekilli fibrillerdir. Transseptal lifler kökler arasında değil, komşu iki komşu dişin servikal sementleri arasında interdental kretin üst kısmında uzanan dişeti fibrilleridir. İnterradiküler lifler çok köklü dişin rotasyonel devrilme hareketlerini güçlü biçimde engeller.

**Soru 2 (ID: f648691b-3451-4367-8601-e5bdaa8216d2)**
Soru Kökü: Periodontal ligament lif grupları dişin fonksiyonel kuvvetlere karşı adaptasyonunu sağlar. Vertikal çiğneme kuvvetlerini karşılayarak alveol kemiğinde gerilime dönüştüren ve sayıca en fazla olan temel lif grubu aşağıdakilerden hangisidir?
Doğru Şık (C): Oblik lifler
Açıklama: Oblik lifler periodontal ligamentin en geniş ve sayıca en fazla olan lif grubudur; koronal yönde kök doğrultulu seyrederek vertikal okluzal kuvvetleri şok absorpsiyonu ile karşılarlar. Alveolar kret lifleri ise oblik olarak zıt yönde seyrederek dişin ekstrüzyonuna ve lateral kuvvetlere direnç gösterir, vertikal kuvvetlerde temel taşıyıcı değildirler. Dişlerin dikey kuvvetleri en iyi tolere edebilmesinin mekanik altyapısı bu lif grubudur.

---

### ÇİFT 85 (Benzerlik: 0.69)

**Soru 1 (ID: a320ac40-f691-45e1-ad62-6ae411483855)**
Soru Kökü: Dişeti epitelini oluşturan tabakalar incelendiğinde, sağlıklı non-keratinize sulkuler epitelde aşağıdaki tabakalardan hangisinin bulunması **beklenmez**?
Doğru Şık (D): Stratum corneum
Açıklama: Sulkuler epitel non-keratinize çok katlı yassı epitel karakterindedir ve parakeratinize/ortokeratinize oral epitelden farklı olarak stratum corneum ve stratum granulosum tabakalarını içermez. En güçlü çeldirici olan stratum spinosum tüm epitel tiplerinde hücrelerin yassılaşmaya başladığı temel bir tabaka olarak mevcuttur. Bakteriyel ürünlerin geçişine izin veren bu non-keratinize yapı, sulkusun yarı geçirgen membran karakterini belirler.

**Soru 2 (ID: f4a4b885-f03e-44e4-93b1-62a1beb8fc17)**
Soru Kökü: Gingival epitel katmanları içerisinde hücrelerin yassılaşmaya başladığı çok sıralı tabakayı temsil eden stratum spinosumda, aşağıdaki hücresel veya yapısal elemanlardan hangisinin bulunması **beklenmez**?
Doğru Şık (D): Hücre içi ve çekirdekte yoğun bazofilik keratohiyalin granülleri
Açıklama: Keratohiyalin granülleri, stratum spinosumda değil, bir üst tabaka olan stratum granülozumda bulunur ve hücrelerin bazofilik boyanmasından sorumludur. Stratum spinosum ise hücrelerin yassılaşmaya başladığı, tonofilaman bakımından zengin ve üst kısımlarında keratinosmos (Odland cisimleri) barındıran tabakadır. Odland cisimleri bariyer fonksiyonu için lipid salgılar.

---

### ÇİFT 86 (Benzerlik: 0.69)

**Soru 1 (ID: 505211d1-f213-4534-aab7-ab4a9ddccc58)**
Soru Kökü: Yapışık dişetinin klinik özelliklerinden biri olan ve bağ dokusu papillerinin epitele doğru yaptığı girintilerden (retepeg) kaynaklanan pürtüklü yüzey görünümü (stippling) ile ilgili aşağıdaki ifadelerden hangisi **doğrudur**?
Doğru Şık (D): Genellikle 5 yaş civarında klinik olarak görülmeye başlanır.
Açıklama: Stippling (pürtüklülük) yenidoğan döneminde mevcut değildir; genellikle 5 yaş civarında görülmeye başlar ve erişkin yaşta artarak yaşlılıkta tekrar azalır. Marjinal sınırlarda düzleşme varken interdental papilin orta kısımlarında pürtüklülük izlenir. Stippling oluşumu doğrudan keratinizasyon derecesi ve bağ dokusundaki rete-peg yapılarıyla ilişkilidir.

**Soru 2 (ID: 9131e20c-9ca2-411c-838e-54195361b7dc)**
Soru Kökü: Sağlıklı gingiva yüzeyinde portakal kabuğu görünümü veren 'stippling' yapısının mikroskobik temeli incelendiğinde, bu pürtüklü yüzeyin oluşmasını sağlayan asıl mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): Bağ dokusu fibrillerinin epitel altındaki sonlanma yerleri ve rete peg girintileri
Açıklama: Stippling (portakal kabuğu görüntüsü), bağ dokusunun papiller tabakasının epitele doğru yaptığı girintiler (rete pegler) ve kemiğe uzanan dikey kolajen lif demetlerinin oluşturduğu çöküntüler/çıkıntılar sonucu meydana gelir. Bu mekanik bağlantı sistemi, dokuyu kemiğe sıkıca bağlarken yüzeyde pürtüklü bir topografi oluşturur. Serbest dişetinde kemiğe doğrudan dik lif uzantısı zayıf olduğu için stippling görülmez, yapışık dişetine özgüdür.

---

### ÇİFT 87 (Benzerlik: 0.69)

**Soru 1 (ID: d33f3422-e9bf-4732-9b78-ace8d8bc9295)**
Soru Kökü: Gingivanın apikale migrasyonuyla dişin klinik kronunun açığa çıkması olarak tanımlanan pasif erupsiyon ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Günümüzde tamamen fizyolojik ve kaçınılmaz bir yaşlanma süreci olarak kabul edilir.
Açıklama: Pasif erupsiyon geçmişte fizyolojik bir yaşlanma süreci olarak düşünülse de, günümüzde periodontal dokulardaki patolojik bir yıkım süreci olarak kabul edilmektedir. Diğer şıklar pasif erupsiyonun anatomik ilerleyişini ve birleşim epitelinin apikal migrasyonunu doğru tanımlamaktadır. Kök yüzeyinin açığa çıkması fizyolojik bir gereklilik değil, bir patolojinin sonucudur.

**Soru 2 (ID: eb2ff8c5-be22-455d-a566-c468075ceb94)**
Soru Kökü: Yaşlanma sürecinin dişeti epiteli üzerindeki etkilerine ilişkin aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Dişeti epitelinde hücresel kalınlaşma ve keratinizasyon derecesinde artış görülür.
Açıklama: Yaşlanma ile birlikte dişeti epitelinde kalınlaşma değil, aksine incelme ve keratinizasyon derecesinde azalma görülür. Bu yapısal incelme ve keratin kaybı, epitelin antijenlere karşı geçirgenliğini artırarak travmalara karşı daha frajil (kırılgan) hale gelmesine neden olur. Rete-peglerdeki düzleşme de bu doku zayıflamasının bir parçasıdır.

---

