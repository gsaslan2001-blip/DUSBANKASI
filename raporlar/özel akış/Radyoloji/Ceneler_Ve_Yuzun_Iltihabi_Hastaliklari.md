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

### ÇİFT 1 (Benzerlik: 0.83)

**Soru 1 (ID: 043a6408-db27-43ac-83c2-93b8d5169b8f)**
Soru Kökü: Mandibular üçüncü molar dişinde tekrarlayan perikoronal enfeksiyon öyküsü olan 22 yaşındaki hastanın radyolojik muayenesinde kronikliğe işaret eden bulgular aranmaktadır. Aşağıdakilerden hangisi bu hastada beklenen tekrarlayan/kronik radyolojik özelliklerden biri **değildir**?
Doğru Şık (A): Kemik defektinin dişin kronunu sirküler olarak tüm yüzeylerden çevrelemesi
Açıklama: Kronik ve tekrarlayan perikoronit vakalarında kemik defekti dişin distal ya da mezial yüzü ile sınırlıdır; sirküler olarak tüm yüzeyleri çepeçevre sarmaz. Ayrıca retromolar defekt, folikül kalınlaşması ve komşu diş kökünde rezorpsiyon ileri kronik dönemin tipik radyolojik belirteçleridir.

**Soru 2 (ID: 8fcf89c2-b2e3-4331-bd93-99729c226e9b)**
Soru Kökü: Uzun süredir tekrarlayan perikoronal enfeksiyon atakları geçiren hastanın radyografisinde, etkilenen mandibular 3. molar diş bölgesinde izlenmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Enfeksiyonun uyarımı ile kemik yüzeyinde soğan kabuğu tarzı yeni kemik yapımı
Açıklama: Kronik perikoronal enfeksiyonlarda folikül kalınlaşması, komşu diş kökü rezorpsiyonu ve dişin mesial/distaliyle sınırlı retromolar kemik defekti beklenir. Soğan kabuğu görünümü (ikinci bir kemik tabakası oluşumu) ise kronik perikoronitin değil, enfeksiyonun kemik iliğini geçip periostu uyardığı proliferatif periostitis (osteomyelit) tablosunun radyolojik özelliğidir. Bu nedenle perikoronitte izlenmez.

---

### ÇİFT 2 (Benzerlik: 0.83)

**Soru 1 (ID: 043a6408-db27-43ac-83c2-93b8d5169b8f)**
Soru Kökü: Mandibular üçüncü molar dişinde tekrarlayan perikoronal enfeksiyon öyküsü olan 22 yaşındaki hastanın radyolojik muayenesinde kronikliğe işaret eden bulgular aranmaktadır. Aşağıdakilerden hangisi bu hastada beklenen tekrarlayan/kronik radyolojik özelliklerden biri **değildir**?
Doğru Şık (A): Kemik defektinin dişin kronunu sirküler olarak tüm yüzeylerden çevrelemesi
Açıklama: Kronik ve tekrarlayan perikoronit vakalarında kemik defekti dişin distal ya da mezial yüzü ile sınırlıdır; sirküler olarak tüm yüzeyleri çepeçevre sarmaz. Ayrıca retromolar defekt, folikül kalınlaşması ve komşu diş kökünde rezorpsiyon ileri kronik dönemin tipik radyolojik belirteçleridir.

**Soru 2 (ID: 6b491260-89bd-4891-8556-00544fabf60d)**
Soru Kökü: Uzun süreli ve sık tekrarlayan perikoronal enfeksiyon olgularında, inflamatuar yıkıma bağlı olarak radyografik incelemede retromolar sahada belirli değişiklikler izlenir. Aşağıdakilerden hangisi kronik perikoronitisin radyografik bulguları arasında yer **almaz**?
Doğru Şık (A): Periodontal ligamentte tam obliterasyon ve kök ankilozu
Açıklama: Tekrarlayan perikoronitis kemik rezorpsiyonuna yol açarak distal veya mesialde defektler, folikül sınırlarında kalınlaşma veya komşu dişte baskı kaynaklı rezorpsiyon oluşturabilir. Ancak perikoronitis bir inflamatuar süreçtir ve dişin ankilozuna (ligamentin tamamen kemikleşmesi) yol açması tipik veya beklenen radyografik bir bulgu değildir; enflamasyon aksine boşluk yaratır.

---

### ÇİFT 3 (Benzerlik: 0.80)

**Soru 1 (ID: 3d07f2a9-4ee7-40dd-b985-2a93b2c95fe9)**
Soru Kökü: Sistemik olarak kullanılan bifosfonatların yan etkisi olan osteonekrozun, ekstremitelerdeki uzun kemiklere kıyasla anatomik olarak hemen hemen her zaman maksiller ve mandibular bölgede (çene kemiklerinde) görülmesinin en güçlü hücresel farmakokinetik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Çene kemiklerinin döngü (turnover) hızının çok yüksek olması nedeniyle ilacın hedef dokuda aşırı emilimi ve birikimi
Açıklama: Çene kemiklerindeki kemik döngü hızı (turnover), çiğneme kuvvetleri ve sürekli diş fonksiyonu nedeniyle diğer uzun iskelet kemiklerine göre çok daha fazladır. Yüksek turnover, aktif kemik bölgelerine spesifik afinitesi olan bifosfonatların çene alveol kemiğinde çok daha yüksek dozlarda birikmesine yol açar.

**Soru 2 (ID: ef07c115-53c3-42d0-97e8-16bbb69bb894)**
Soru Kökü: Prostat kanseri kemik metastazı tedavisi için intravenöz bifosfonat kullanan 72 yaşındaki hastanın alt sol birinci molar dişi enfeksiyon nedeniyle çekilmiştir. Aylar geçmesine rağmen yara yeri kapanmamış ve kemik dokusu açığa çıkmıştır.
Vücudun tamamı ilaca maruz kalmasına rağmen, bifosfonata bağlı osteonekrozun uzun kemiklerden ziyade spesifik olarak çene kemiklerinde görülmesinin en temel patofizyolojik ve histolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Çene kemiklerinin döngü (turnover) hızının çok fazla olması ve buna bağlı yüksek oranda ilacı depolaması
Açıklama: Çenelerde (özellikle alveolar krette) diş hareketleri, sürekli çiğneme kuvvetleri ve diş destek dokularının remodelasyon ihtiyacı nedeniyle kemik metabolizması (turnover hızı) diğer iskelet kemiklerine oranla yaklaşık 10 kat daha hızlıdır. Osteoklastik ve osteoblastik aktivitenin bu kadar yoğun olduğu bir bölgeye kan dolaşımıyla çok daha fazla oranda bifosfonat ulaşır ve depolanır. Ek olarak ağız mukozasının travmaya açık ve bakteri dolu olması lokal tetikleyici rol oynar.

---

### ÇİFT 4 (Benzerlik: 0.80)

**Soru 1 (ID: 1b5a5629-1a03-4c99-9c4a-91585a684ced)**
Soru Kökü: SAPHO sendromu kapsamında çene osteomiyelitine eşlik eden klinik bulgular değerlendirilirken dermatolojik ve romatolojik majör belirteçler aranır. Aşağıdakilerden hangisi çoklu sistemik tutulum gösteren bu sendromun isim bileşenlerinden biri **değildir**?
Doğru Şık (B): Sistemik lupus eritematozus
Açıklama: SAPHO sendromunun açılımı; Synovitis (sinovit), Acne (akne), Pustulosis (püstüloz), Hyperostosis (hiperostoz) ve Osteomyelitis (osteomiyelit) kelimelerinin baş harflerinden oluşur. Sistemik lupus eritematozus (SLE) bu sendromun bir bileşeni değildir.

**Soru 2 (ID: d224ca31-ce43-403a-8a15-2ec026bd9630)**
Soru Kökü: Çenelerde özellikle kronik seyirli osteomiyelit bulgularıyla da ilişkilendirilebilen ve bir dizi spesifik mukokutanöz / iskeletsel bulgunun baş harflerinden ismini alan SAPHO sendromunun klasik tıbbi bileşenleri aşağıdakilerin hangisinde eksiksiz verilmiştir?
Doğru Şık (D): Sinovit, akne, püstüloz, hiperostoz, osteomiyelit
Açıklama: SAPHO sendromu; S (Sinovitis - inflamatuar artrit), A (Akne - özellikle şiddetli formlar), P (Püstüloz - palmoplantar veya sedef), H (Hiperostoz - osteosklerotik genişleme) ve O (Osteomiyelit) bulgularını içeren nadir bir idiyopatik romatizmal-otoimmün tablodur. Bu hastalarda gelişen osteomiyelit bakteriyel bir enfeksiyondan ziyade, steril oto-inflamatuar bir mekanizmayla ortaya çıktığından antibiyotiklere yanıt vermez ve sendromun klasik 5'li bulgusunun tanınması teşhiste esastır.

---

### ÇİFT 5 (Benzerlik: 0.80)

**Soru 1 (ID: 1b5a5629-1a03-4c99-9c4a-91585a684ced)**
Soru Kökü: SAPHO sendromu kapsamında çene osteomiyelitine eşlik eden klinik bulgular değerlendirilirken dermatolojik ve romatolojik majör belirteçler aranır. Aşağıdakilerden hangisi çoklu sistemik tutulum gösteren bu sendromun isim bileşenlerinden biri **değildir**?
Doğru Şık (B): Sistemik lupus eritematozus
Açıklama: SAPHO sendromunun açılımı; Synovitis (sinovit), Acne (akne), Pustulosis (püstüloz), Hyperostosis (hiperostoz) ve Osteomyelitis (osteomiyelit) kelimelerinin baş harflerinden oluşur. Sistemik lupus eritematozus (SLE) bu sendromun bir bileşeni değildir.

**Soru 2 (ID: 80092470-35c0-459c-b78a-ace14903a215)**
Soru Kökü: İnatçı mandibular ağrı ve radyografik sklerozis bulguları nedeniyle kronik osteomiyelit şüphesiyle incelenen bir hastanın sistemik anamnezinde; tekrarlayan inflamatuar eklem ağrıları (sinovit), şiddetli sivilce şikayetleri (akne püstüloza), palmoplantar püstülozis (sedef hastalığı benzeri bulgular) ve genel kemik kütlesinde artış (kazanılmış hiperostoz) saptanmıştır. Bu tablo, çene lezyonunun **en olası** etiyolojisi olarak aşağıdakilerden hangisini işaret etmektedir?
Doğru Şık (A): SAPHO sendromu
Açıklama: SAPHO sendromu; Sinovit (inflamatuar artrit), Akne (püstüloza), Püstüloz (sedef, palmoplantar püstülozis), Hiperostoz (kazanılmış) ve Osteomiyelit kelimelerinin baş harflerinden oluşan spesifik bir sistemik tablodur. Bu hastalarda çene kemiklerinde sıklıkla sklerozla karakterize olan diffüz kronik osteomiyelit izlenir ve tanı bu sistemik triad/pentad bulgularıyla koyulur.

---

### ÇİFT 6 (Benzerlik: 0.80)

**Soru 1 (ID: 6b491260-89bd-4891-8556-00544fabf60d)**
Soru Kökü: Uzun süreli ve sık tekrarlayan perikoronal enfeksiyon olgularında, inflamatuar yıkıma bağlı olarak radyografik incelemede retromolar sahada belirli değişiklikler izlenir. Aşağıdakilerden hangisi kronik perikoronitisin radyografik bulguları arasında yer **almaz**?
Doğru Şık (A): Periodontal ligamentte tam obliterasyon ve kök ankilozu
Açıklama: Tekrarlayan perikoronitis kemik rezorpsiyonuna yol açarak distal veya mesialde defektler, folikül sınırlarında kalınlaşma veya komşu dişte baskı kaynaklı rezorpsiyon oluşturabilir. Ancak perikoronitis bir inflamatuar süreçtir ve dişin ankilozuna (ligamentin tamamen kemikleşmesi) yol açması tipik veya beklenen radyografik bir bulgu değildir; enflamasyon aksine boşluk yaratır.

**Soru 2 (ID: 8fcf89c2-b2e3-4331-bd93-99729c226e9b)**
Soru Kökü: Uzun süredir tekrarlayan perikoronal enfeksiyon atakları geçiren hastanın radyografisinde, etkilenen mandibular 3. molar diş bölgesinde izlenmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Enfeksiyonun uyarımı ile kemik yüzeyinde soğan kabuğu tarzı yeni kemik yapımı
Açıklama: Kronik perikoronal enfeksiyonlarda folikül kalınlaşması, komşu diş kökü rezorpsiyonu ve dişin mesial/distaliyle sınırlı retromolar kemik defekti beklenir. Soğan kabuğu görünümü (ikinci bir kemik tabakası oluşumu) ise kronik perikoronitin değil, enfeksiyonun kemik iliğini geçip periostu uyardığı proliferatif periostitis (osteomyelit) tablosunun radyolojik özelliğidir. Bu nedenle perikoronitte izlenmez.

---

### ÇİFT 7 (Benzerlik: 0.79)

**Soru 1 (ID: 5d321b14-faa8-4f80-b8a8-4987f7736991)**
Soru Kökü: 65 yaşında postmenopozal osteoporoz hastası kadın, son 5 yıldır kesintisiz olarak oral bifosfonat tedavisi görmektedir. Hasta, ağzındaki problemli dişlerin çekimi ve implantasyon tedavisi için hekimine ilacı kaç gün bırakırsa vücudundan tamamen atılacağını sormaktadır.
Bifosfonatların hidroksiapatite irreversibl bağlanma kinetiği göz önüne alındığında, bu ilaçların iskelet sistemindeki ortalama kalış süresi (yarılanma ömrü) hangi zaman dilimi ile ifade edilir?
Doğru Şık (A): 1 ila 10 yıl arası
Açıklama: Bifosfonatlar kemik yapısındaki hidroksiapatit kristallerine öylesine güçlü entegre olurlar ki, osteoklastlar bu kemiği rezorbe etmedikçe matriks içinde hapis kalırlar. Bu biyolojik tutulum nedeniyle kemikteki yarılanma ömürleri 1 ila 10 yılı bulur. Yani ilacı sadece işlemden birkaç hafta veya ay önce kesmek, kemik içinde zaten birikmiş ve yıllarca kalacak olan kümülatif dozun toksisite riskini ortadan kaldırmaz.

**Soru 2 (ID: 70fcffe3-26e7-4e27-bfb1-0af50022b598)**
Soru Kökü: Damar yoluyla infüze edilen veya oral alınan bifosfonatların sistemik kan plazmasındaki yarılanma ömrü sadece 0,5-2 saat gibi kısa bir süre olmasına rağmen, ilaç çok uzun yıllar boyunca kemik yapısında stabilitesini korur.
İlacın kan dolaşımından çok hızlı şekilde çekilip yalnızca iskelet sistemine çökmesi, etken maddenin biyokimyasal olarak kemikteki hangi spesifik bileşene sahip olduğu yüksek afinite ile açıklanır?
Doğru Şık (E): İnorganik hidroksiapatit kristalleri
Açıklama: Bifosfonatlar, kemiğin inorganik (mineral) porsiyonunu oluşturan hidroksiapatit kristallerine karşı olağanüstü yüksek bir kimyasal afinite (bağlanma gücü) sergilerler. Bu sayede dolaşıma giren ilacın büyük kısmı birkaç saat içinde hidroksiapatit havuzunda depolanır. Organik bileşen olan Tip 1 kollajene veya doğrudan hücrelere değil, kalsifiye matrikse bağlanarak bölgeye gelen osteoklastı hedef alırlar.

---

### ÇİFT 8 (Benzerlik: 0.79)

**Soru 1 (ID: b81ed3ca-912b-4a1b-9e34-52cec9faf472)**
Soru Kökü: Radyografide çene kemiğinde diş kökleriyle ilişkili radyoopak lezyonlar saptanan iki farklı hastanın değerlendirilmesinde; birinci hastada ilgili diş non-vital iken, ikinci hastada diş çürüksüz ve vitaldir. Bu ayırıcı tanı prensibine göre 'Kondanse Osteitis' (fokal skleroze osteomyelitis) tanısı için aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (B): Etken dişin enfekte kök kanal sistemine endodontik tedavi uygulandıktan sonra lezyon genellikle gerileme gösterir.
Açıklama: Kondanse osteitis (skleroze osteitis), non-vital bir dişteki düşük toksisiteli pulpa enfeksiyonunun yarattığı lokal proliferatif kemik uyarımıdır. Etken, enfekte kanal sistemi olduğundan, dişin endodontik olarak başarılı şekilde tedavi edilmesi (bakteriyel kaynağın kurutulması) sonrasında kemikteki sklerotik alan genellikle geriler ve normalleşir.

**Soru 2 (ID: d7f094f0-6742-46ae-9d4f-b9bde8e00412)**
Soru Kökü: Radyografik muayenede alt çene posterior bölgede sınırları diffüz, çevresinde radyolüsent bir alan bulunmayan radyopak bir lezyon saptanmıştır. İlgili diş vitaldir ve herhangi bir klinik belirti yoktur. Bu bulgular doğrultusunda, lezyonun osteoskleroz tanısı almasını sağlayan ve kondanse osteitisten ayıran en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): İlgili dişin vital olması ve intraosseöz enfeksiyon kaynağının bulunmaması
Açıklama: Osteoskleroz vital dişin apikalinde bulunurken, kondanse osteitis enfekte ya da nonvital dişin (pulpa dejenerasyonu) neden olduğu intraosseöz enfeksiyonla birliktedir. Her ikisi de radyopak sklerotik alan yaratmasına rağmen enfeksiyon kaynağının yokluğu ve vitalite osteoskleroz için ayırıcıdır.

---

### ÇİFT 9 (Benzerlik: 0.79)

**Soru 1 (ID: 69d0d834-a7c8-4bee-8add-f9a2ced50ce9)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişinde devamlı bir dolgunluk hissi, ısırmayla artan ağrı ve palpasyon hassasiyeti şikayetiyle başvuruyor. Akut apikal periodontitis tanısı konan bu tabloda, periapikal bölgedeki pulpal irritanın doku destrüksiyonuna neden olacak kadar güçlü olması durumunda hastalığın bir sonraki aşaması ne olacaktır?
Doğru Şık (D): Pü (pus) formasyonu ve apse oluşumu
Açıklama: Akut apikal periodontitiste enflamasyon ilerler ve irritasyon doku harabiyeti yapacak yoğunluğa ulaşırsa, nötrofillerin lizozomal yıkımıyla pü (pus) oluşur. Bu birikim doku içi basıncı artırarak şiddetli zonklayıcı ağrı yapar ve klinik olarak tablo akut periapikal apseye evrilir. Kist ve skleroz oluşumu akut değil, kronik sürecin bulgularıdır.

**Soru 2 (ID: c01f5698-ea0e-4723-876f-9b092a337c7b)**
Soru Kökü: Otuz beş yaşındaki erkek hasta, üst sağ birinci büyük azı dişinde sürekli bir dolgunluk hissi ve palpasyonda ağrı şikayetiyle başvurmuştur. Radyografide periodontal aralıkta genişleme izlenmiş, ancak apsede görülen fluktuasyon veya fluktuan şişlik saptanmamıştır. Bu klinik tablonun akut apikal periodontitis aşamasında olduğunu ve henüz apikal apseye dönüşmediğini gösteren hücresel düzeydeki karakteristik aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitis aşamasında, kemik harabiyetine neden olacak osteoklastik hücre aktivasyonu henüz başlamamıştır. Eğer irritan ajan doku destrüksiyonuna neden olacak kadar güçlü bir seviyeye ulaşırsa püy formasyonu ve ardından apse oluşumu gerçekleşir. A ve D şıkları granülom ve kronik apse gibi kronik lezyonları, B şıkkı ise akut dentoalveolar apsenin mekanizmasını tanımlar.

---

### ÇİFT 10 (Benzerlik: 0.78)

**Soru 1 (ID: 043a6408-db27-43ac-83c2-93b8d5169b8f)**
Soru Kökü: Mandibular üçüncü molar dişinde tekrarlayan perikoronal enfeksiyon öyküsü olan 22 yaşındaki hastanın radyolojik muayenesinde kronikliğe işaret eden bulgular aranmaktadır. Aşağıdakilerden hangisi bu hastada beklenen tekrarlayan/kronik radyolojik özelliklerden biri **değildir**?
Doğru Şık (A): Kemik defektinin dişin kronunu sirküler olarak tüm yüzeylerden çevrelemesi
Açıklama: Kronik ve tekrarlayan perikoronit vakalarında kemik defekti dişin distal ya da mezial yüzü ile sınırlıdır; sirküler olarak tüm yüzeyleri çepeçevre sarmaz. Ayrıca retromolar defekt, folikül kalınlaşması ve komşu diş kökünde rezorpsiyon ileri kronik dönemin tipik radyolojik belirteçleridir.

**Soru 2 (ID: d476b3e5-583a-41fc-9e0f-de896212cbc1)**
Soru Kökü: 21 yaşında erkek hasta, sol alt yirmi yaş dişi bölgesinde ani başlayan şiddetli ağrı ve ağız açmada kısıtlılık şikayetiyle başvurmuştur. İlgili bölgede dişi örten gingival flep altında yiyecek birikimi ve belirgin eritem saptanmıştır. Semptomların henüz yeni başladığı bu akut perikoronal enfeksiyon olgusunun radyografik değerlendirmesinde **en olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kısa süreli bir olgu olduğu için kemik defekti izlenmez ve folikül sınırları normaldir.
Açıklama: Akut ve kısa süreli perikoronal enfeksiyon olgularında henüz kemik yıkımı başlamadığı için kemik defekti yoktur ve folikül sınırları normal olarak izlenir. Retromolar kemik defekti, folikül sınırlarında kalınlaşma ve komşu diş kökünde rezorbsiyon; akut ataklardan ziyade tekrarlayan ve uzun süreli kronik perikoronit vakalarının radyolojik bulgularıdır. Erken dönemde yalnızca yumuşak doku semptomları hakimdir.

---

### ÇİFT 11 (Benzerlik: 0.78)

**Soru 1 (ID: 02e163f8-ae27-4f4c-a6b9-7e406c6cf5c3)**
Soru Kökü: Ludwig anjini gelişen bir hastada hava yolu güvenliği sağlanamaz ve acil tedavi uygulanmazsa ölümcül sistemik komplikasyonlar ortaya çıkabilir. Aşağıdakilerden hangisi hastalığın agresif ilerlemesiyle görülebilecek komplikasyonlar arasında **yer almaz**?
Doğru Şık (D): Maksiller sinüs içinde lokalize flegmon oluşumu
Açıklama: Ludwig anjini tedavi edilmezse solunum tıkanıklığı, septisemi, karotis arter erozyonu ve kavernöz sinüs trombozu gibi majör boyun/kraniyal damar komplikasyonlarına neden olur. Alt çene boşluklarından kaynaklanan enfeksiyonun maksiller sinüs içine flegmon olarak yerleşmesi tipik bir Ludwig anjini komplikasyonu değildir.

**Soru 2 (ID: 51a9946d-1721-45bc-b0a5-1c5f8597b84a)**
Soru Kökü: Ludwig anjini tablosuna sahip bir hastanın acil serviste hızlı ve agresif tedavi edilmemesi durumunda aşağıda verilen komplikasyonlardan hangisinin gelişmesi **en az olasıdır**?
Doğru Şık (C): Multiple radyopak sekestr formasyonu
Açıklama: Ludwig anjini, boyun ve ağız tabanı boşluklarını tutan şiddetli bir yumuşak doku flegmonu ve selülitidir. Komplikasyonları hava yolu tıkanıklığı, septisemi, komşuluk yoluyla karotis erozyonu ve kavernöz sinüs trombozudur. Multiple sekestr formasyonu ise yumuşak doku selülitinin değil, kemik iliğini nekroza uğratan kronik osteomyelitin majör bulgusudur.

---

### ÇİFT 12 (Benzerlik: 0.77)

**Soru 1 (ID: d6c0bdb8-7eac-4220-8e50-1d7b6b8071c9)**
Soru Kökü: Diş çekiminden aylar sonra alınan radyografide, çekim boşluğunda kalmış diş kökünü taklit eden, ortası ince radyolüsent çizgili bir radyopak alan izlenmektedir. Bu oluşumun kalmış kök parçası yerine soket sklerozisi olarak tanımlanmasına yardımcı olan radyolojik belirteç aşağıdakilerden hangisidir?
Doğru Şık (C): Soket duvarına ait periodontal aralık ve lamina duranın hala izlenebilmesi
Açıklama: Soket sklerozisinde iyileşme soket kenarından başlayıp içeriye doğru devam eder ve ortada ince bir radyolüsent çizgi oluşturarak diş kökünü taklit eder. Gerçek bir diş kökü ile ayırıcı tanısında, asıl dişin çekildiği soketin kendine ait periodontal aralığının ve lamina durasının (soket sınırlarının) izlenmesi klinisyene yardımcı olur.

**Soru 2 (ID: df8d4fce-a191-4d66-9643-32df5ec3ceb6)**
Soru Kökü: Rutin panoramik radyografi kontrolünde, hastanın mandibulasında daha önce çekilmiş bir diş soketinde kalan bir kök parçasını andıran radyopak bir alan fark edilmiştir. Bu bulgunun gerçekten kırık bir diş kökü **olmadığını** ve bir 'soket sklerozisi' olduğunu doğrulamak için incelenmesi gereken radyolojik yapılar hangi seçenekte doğru verilmiştir?
Doğru Şık (B): Periodontal aralık ve lamina dura varlığı
Açıklama: Diş çekim boşluğunun zamanla sklerotik kemikle dolması soket sklerozisi olarak adlandırılır ve ortasında radyolüsent bir çizgi (damar-sinir paketini taklit eden) bırakarak kalmış diş köküne çok benzer. Kalan gerçek bir kök parçasını soket sklerozisinden ayıran en önemli özellik, gerçek kökün etrafında hala periodontal ligament boşluğunun ve radyoopak lamina duranın seçilebilmesidir; soket sklerozisinde bu yapılar bulunmaz.

---

### ÇİFT 13 (Benzerlik: 0.77)

**Soru 1 (ID: 8fcf89c2-b2e3-4331-bd93-99729c226e9b)**
Soru Kökü: Uzun süredir tekrarlayan perikoronal enfeksiyon atakları geçiren hastanın radyografisinde, etkilenen mandibular 3. molar diş bölgesinde izlenmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Enfeksiyonun uyarımı ile kemik yüzeyinde soğan kabuğu tarzı yeni kemik yapımı
Açıklama: Kronik perikoronal enfeksiyonlarda folikül kalınlaşması, komşu diş kökü rezorpsiyonu ve dişin mesial/distaliyle sınırlı retromolar kemik defekti beklenir. Soğan kabuğu görünümü (ikinci bir kemik tabakası oluşumu) ise kronik perikoronitin değil, enfeksiyonun kemik iliğini geçip periostu uyardığı proliferatif periostitis (osteomyelit) tablosunun radyolojik özelliğidir. Bu nedenle perikoronitte izlenmez.

**Soru 2 (ID: d476b3e5-583a-41fc-9e0f-de896212cbc1)**
Soru Kökü: 21 yaşında erkek hasta, sol alt yirmi yaş dişi bölgesinde ani başlayan şiddetli ağrı ve ağız açmada kısıtlılık şikayetiyle başvurmuştur. İlgili bölgede dişi örten gingival flep altında yiyecek birikimi ve belirgin eritem saptanmıştır. Semptomların henüz yeni başladığı bu akut perikoronal enfeksiyon olgusunun radyografik değerlendirmesinde **en olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kısa süreli bir olgu olduğu için kemik defekti izlenmez ve folikül sınırları normaldir.
Açıklama: Akut ve kısa süreli perikoronal enfeksiyon olgularında henüz kemik yıkımı başlamadığı için kemik defekti yoktur ve folikül sınırları normal olarak izlenir. Retromolar kemik defekti, folikül sınırlarında kalınlaşma ve komşu diş kökünde rezorbsiyon; akut ataklardan ziyade tekrarlayan ve uzun süreli kronik perikoronit vakalarının radyolojik bulgularıdır. Erken dönemde yalnızca yumuşak doku semptomları hakimdir.

---

### ÇİFT 14 (Benzerlik: 0.77)

**Soru 1 (ID: 6328e575-b496-486c-89d0-1c3fc87b4309)**
Soru Kökü: 62 yaşında osteoporoz hastası kadın, mandibula lingual bölgesinde 1 cm boyutunda açığa çıkmış, üzeri pürülan eksuda ile kaplı ve çevre mukozasında ciddi eritem saptanan bir lezyon ile başvuruyor. Şiddetli ağrısı olan hastanın panoramik radyografisinde hafif kortikal düzensizlik izleniyor.
AAOMS tarafından tanımlanan Evre II tablosuyla tam uyumlu olan bu hastanın ilk güncel tedavi basamağı olarak aşağıdakilerden hangisi doğrudan uygulanmalıdır?
Doğru Şık (C): Antiseptik gargara ve analjeziklere ek olarak, bakteriyel kontrol için topikal veya sistemik antibiyotik başlanması
Açıklama: Bifosfonat ilişkili nekrozda Evre II'nin ana klinik komponenti ağrısız kemik ekspozisyonuna 'sekonder enfeksiyon ve yumuşak doku enflamasyonunun' eklenmesidir (eritem, ağrı, eksuda). Tedavide ilk kural enfeksiyon tablosunu hafifletmektir. Bu nedenle hastalara klorheksidinli gargaralar eşliğinde geniş spektrumlu sistemik (penisilin/metronidazol vb.) antibiyotikler reçete edilerek medikal non-cerrahi baskılama uygulanır. Blok rezeksiyon ancak fistül-fraktür gibi Evre III komplikasyonlarında gündeme gelebilir.

**Soru 2 (ID: 75cdca2f-59ff-45ef-8f9d-a30f60ec8699)**
Soru Kökü: Altmış beş yaşındaki kadın hasta, alt çenesinde sürekli ağrı ve şişlik şikayetiyle başvurmuştur. İntraoral muayenede sekonder lokal enfeksiyon bulgularıyla birlikte ağrılı ve pürülan ekspoze kemik saptanmış, ancak çenede patolojik fraktür veya cilde açılan ekstraoral fistül izlenmemiştir. IV bifosfonat öyküsü olan bu hastanın AAOMS sınıflamasına göre klinik evresi ve önerilen güncel konservatif tedavi yaklaşımı aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (D): Evre 2 — Antiseptik gargara, analjeziklere ek olarak sistemik antibiyotik ve/veya antifungal farmakoterapi
Açıklama: Ağrılı ekspoze kemik ve yumuşak doku enfeksiyonu Evre 2 BRONJ bulgusudur. Fraktür/fistül olsaydı Evre 3 olurdu. Evre 2 için önerilen cerrahi olmayan tedavi; antiseptik gargara ve analjeziklere ilaveten sistemik antibiyotik ve/veya antifungal kullanımını kapsar.

---

### ÇİFT 15 (Benzerlik: 0.76)

**Soru 1 (ID: a962119a-5be2-4aa4-88f4-dd44edb58e04)**
Soru Kökü: Mandibulada litik, kötü tanımlanmış kemik yıkımı ve periosteal reaktif yeni kemik oluşumu ile klinik ve radyolojik olarak osteomiyeliti taklit edebilen, ancak osteomiyelitte sıkça görülen sklerotik kemik reaksiyonunu nadiren uyaran ayırıcı tanı patolojisi aşağıdakilerden hangisidir?
Doğru Şık (A): Langerhans hücreli histiyositoz
Açıklama: Langerhans hücreli histiyositoz, litik kötü tanımlanmış kemik yıkımına neden olur ve sıklıkla osteomiyeliti andıran periosteal reaktif yeni kemik oluşumuyla sonuçlanır. Ancak osteomiyelitin iç kısımlarda yarattığı sklerotik kemik reaksiyonunu uyarmaz. Bu ince fark, iki lezyonun ayırıcı tanısında kritik önem taşır.

**Soru 2 (ID: e9eb45b6-2cd8-4d16-9844-28a499661c49)**
Soru Kökü: Çenelerde hızlı litik kemik yıkımı ve periosteal yeni kemik reaksiyonu oluşturan hastalıkların radyolojik görünümleri osteomyeliti taklit edebilir ve yanlış tanıya yol açabilir. Aşağıdaki lezyonlardan hangisi mandibulada destrüktif osteomyelit benzeri bu kemik yıkım paternini oluşturan, primer ayırıcı tanıda yer alan durumlardan biri **değildir**?
Doğru Şık (C): Osteoma
Açıklama: Osteosarkom, lenfoma/lösemi, skuamöz hücreli karsinom invazyonu ve Langerhans hücreli histiyositoz; kemikte agresif litik yıkım yapan, sınırları belirsiz destrüksiyona yol açan ve periostu uyararak reaktif yeni kemik oluşumu (osteomyelite benzer sekestr veya soğan kabuğu) yapabilen hastalıklardır. Osteoma ise iyi sınırlı, son derece yavaş büyüyen, dışarıya doğru ekzofitik uzanan benign bir kortikal kemik hamartomudur ve agresif osteomyelit yıkımını taklit etmez.

---

### ÇİFT 16 (Benzerlik: 0.76)

**Soru 1 (ID: 395467ca-dc65-4311-9c01-766f15c76440)**
Soru Kökü: Akut apikal periodontitis ile akut periapikal apse patogenezi hücresel düzeyde karşılaştırıldığında, akut apikal periodontitisin henüz apseleşmemiş erken dönemini spesifik kılan en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitiste doku yıkımına yol açacak olan makrofaj ve osteoklast gibi hücrelerin aktivasyonu daha başlamamıştır; olay vasküler genişleme ve ödem düzeyindedir. İrritan yeterince güçlüyse pürülan sıvı (pus) oluşur ve tablo akut periapikal apseye dönüşerek kemik yıkımını başlatır. Granülasyon ve epitel kavitasyonu ise kronik fazın özellikleridir.

**Soru 2 (ID: c01f5698-ea0e-4723-876f-9b092a337c7b)**
Soru Kökü: Otuz beş yaşındaki erkek hasta, üst sağ birinci büyük azı dişinde sürekli bir dolgunluk hissi ve palpasyonda ağrı şikayetiyle başvurmuştur. Radyografide periodontal aralıkta genişleme izlenmiş, ancak apsede görülen fluktuasyon veya fluktuan şişlik saptanmamıştır. Bu klinik tablonun akut apikal periodontitis aşamasında olduğunu ve henüz apikal apseye dönüşmediğini gösteren hücresel düzeydeki karakteristik aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitis aşamasında, kemik harabiyetine neden olacak osteoklastik hücre aktivasyonu henüz başlamamıştır. Eğer irritan ajan doku destrüksiyonuna neden olacak kadar güçlü bir seviyeye ulaşırsa püy formasyonu ve ardından apse oluşumu gerçekleşir. A ve D şıkları granülom ve kronik apse gibi kronik lezyonları, B şıkkı ise akut dentoalveolar apsenin mekanizmasını tanımlar.

---

### ÇİFT 17 (Benzerlik: 0.76)

**Soru 1 (ID: 6b491260-89bd-4891-8556-00544fabf60d)**
Soru Kökü: Uzun süreli ve sık tekrarlayan perikoronal enfeksiyon olgularında, inflamatuar yıkıma bağlı olarak radyografik incelemede retromolar sahada belirli değişiklikler izlenir. Aşağıdakilerden hangisi kronik perikoronitisin radyografik bulguları arasında yer **almaz**?
Doğru Şık (A): Periodontal ligamentte tam obliterasyon ve kök ankilozu
Açıklama: Tekrarlayan perikoronitis kemik rezorpsiyonuna yol açarak distal veya mesialde defektler, folikül sınırlarında kalınlaşma veya komşu dişte baskı kaynaklı rezorpsiyon oluşturabilir. Ancak perikoronitis bir inflamatuar süreçtir ve dişin ankilozuna (ligamentin tamamen kemikleşmesi) yol açması tipik veya beklenen radyografik bir bulgu değildir; enflamasyon aksine boşluk yaratır.

**Soru 2 (ID: d476b3e5-583a-41fc-9e0f-de896212cbc1)**
Soru Kökü: 21 yaşında erkek hasta, sol alt yirmi yaş dişi bölgesinde ani başlayan şiddetli ağrı ve ağız açmada kısıtlılık şikayetiyle başvurmuştur. İlgili bölgede dişi örten gingival flep altında yiyecek birikimi ve belirgin eritem saptanmıştır. Semptomların henüz yeni başladığı bu akut perikoronal enfeksiyon olgusunun radyografik değerlendirmesinde **en olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kısa süreli bir olgu olduğu için kemik defekti izlenmez ve folikül sınırları normaldir.
Açıklama: Akut ve kısa süreli perikoronal enfeksiyon olgularında henüz kemik yıkımı başlamadığı için kemik defekti yoktur ve folikül sınırları normal olarak izlenir. Retromolar kemik defekti, folikül sınırlarında kalınlaşma ve komşu diş kökünde rezorbsiyon; akut ataklardan ziyade tekrarlayan ve uzun süreli kronik perikoronit vakalarının radyolojik bulgularıdır. Erken dönemde yalnızca yumuşak doku semptomları hakimdir.

---

### ÇİFT 18 (Benzerlik: 0.76)

**Soru 1 (ID: 2fe30cf1-b6e9-42ea-9d64-c084ef5e72eb)**
Soru Kökü: İleri evre yassı hücreli karsinom tedavisi sonrası sol mandibulada osteoradyonekroz gelişen 65 yaşında bir kadın hastanın tedavisi planlanmaktadır. Bölgedeki mevcut enfeksiyonun çevre yumuşak dokulara invazyon derinliğini veya primer tümörün olası lokal nüksünü (rekürrens) birbirinden ayırmak klinik muayene ile mümkün olmamıştır.
Bu durumda, yumuşak doku ilişkisini haritalamak için tercih edilmesi gereken en ideal radyolojik görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Kontrastlı MRG (Manyetik Rezonans Görüntüleme)
Açıklama: Osteoradyonekroz hastalarında sert dokuyu ilgilendiren yıkım en iyi BT ile değerlendirilse de, hastalığın çevre yumuşak dokuya sızması, ödemli reaksiyonları ve özellikle primer tümörün aynı bölgede nüks edip etmediğinin tespiti için sıvı ve vasküler yapılara duyarlı olan MRG kullanılır. Yumuşak dokunun ayrıntılı kontrastlanması için iv Gadolinyum türevi ajanlar içeren kontrastlı MRG altın standart görüntüleme yöntemidir.

**Soru 2 (ID: f3293d69-e0bc-4ec0-9654-966e150ab1e0)**
Soru Kökü: 35 yaşında kadın hasta, alt çenesinde ani başlayan ağrı, şişlik ve ateş şikayetiyle başvuruyor. Panoramik radyografide henüz belirgin bir kemik yıkımı izlenmeyen hastada, erken evre akut osteomiyelite bağlı anormal kemik iliği ödemini değerlendirmek isteniyor. 
Bu hastada kemik iliği ödemini en erken ve en net gösterecek görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (C): T2 ağırlıklı manyetik rezonans görüntüleme (MRG)
Açıklama: Osteomiyelitin erken akut fazında kemik yıkımı %30-50 seviyesine ulaşana kadar konvansiyonel grafiler ve BT yetersiz kalabilir, ancak enflamatuar sıvı artışına bağlı kemik iliği ödemi ilk olarak gelişir. MRG'nin T2 ağırlıklı serileri, dokulardaki sıvı (ödem, püy) içeriğine karşı son derece duyarlı olduğu için kemik iliğindeki bu anormal ödemi en iyi tespit eden tetkiktir. T1 ağırlıklı kesitler yağ dokusu ve anatomi için kullanılırken, sıvı bazlı patolojiler T2 kesitlerde hiperintens (parlak) olarak öne çıkar.

---

### ÇİFT 19 (Benzerlik: 0.76)

**Soru 1 (ID: 133a9202-43d9-437c-9869-51056a2267d2)**
Soru Kökü: Mandibular bölgede geniş restorasyonlu ve kanal tedavili bir dişin apeksinde kondanse osteitise bağlı sklerotik kemik izlenmektedir. İlgili dişin çekimi sonrasında bu bölgeye implant planlanırken osseointegrasyon ve iyileşmenin güç olacağı düşünülmektedir. Bu zorluğun temel doku nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Oluşan sklerotik kemik dokusunun belirgin şekilde daha az vaskülarize olması
Açıklama: Kondanse osteitis alanlarında yeni kemik depozisyonu kemik iliği boşluklarını doldurur. Ortaya çıkan bu sklerotik kemik dokusu normale göre çok daha az vaskülarizedir, bu da kanlanmanın kısıtlanmasına neden olarak implant uygulamalarında iyileşmeyi zorlaştırır. Diğer şıklardaki enfeksiyöz veya hücresel faktörler bu spesifik komplikasyonun birincil nedeni değildir.

**Soru 2 (ID: 823c61a7-6088-4139-a0af-6b4fcfb72583)**
Soru Kökü: Otuz beş yaşında erkek hastanın mandibular sağ bölgesine dental implant planlanmaktadır. Çekilmiş olan birinci büyük azı dişinin soket bölgesinde yoğun, sklerotik kemik dokusu (kondanse osteitis sekeli) olduğu tespit edilmiştir. Bu bölgeye implant yerleştirilirken osseointegrasyon ve iyileşme sürecinde yaşanabilecek riskin temel anatomik nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Sklerotik kemiğin daha az vaskülarize olması nedeniyle kanlanmanın ve iyileşmenin yetersiz kalması
Açıklama: Sklerotik kemik, yoğun kemik depozisyonu nedeniyle medüller alanları ve trabeküler boşlukları daralmış bir yapıdır. Bu durum kemiğin vaskülarizasyonunun (kanlanmasının) ciddi şekilde azalmasına neden olur. Dental implant iyileşmesinde neovaskülarizasyon kritik olduğundan, az vaskülarize sklerotik kemikte osseointegrasyon gecikebilir veya implant kaybı riski artabilir.

---

### ÇİFT 20 (Benzerlik: 0.75)

**Soru 1 (ID: 14fac124-710b-408c-817b-3c1f5bbdc9b2)**
Soru Kökü: Kronik osteomyelit vakalarının yönetiminde sekestranın (nekrotik kemik adacığının) boyutlarının, lokalizasyonunun ve iç yapısının saptanması cerrahi sekestrektomi açısından hayati önem taşır. Çok yoğun sklerotik kemiğe sahip olgularda dahi kemik içi yapıyı ve sekestrayı ortaya çıkarmak için **en üstün ve tercih edilen** görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Bilgisayarlı Tomografi (BT) veya Koni Işınlı BT (KIBT)
Açıklama: Kronik osteomyelitte korteks kalınlaştığında veya spongiyöz kemik yoğun bir skleroza uğradığında (özellikle süperpozisyon olan mandibulada), iki boyutlu filmlerde sekestrı görmek zorlaşır. Kemiğin ince kesitsel detaylarını, sekestrı ve iç yapıyı göstermekte en güvenilir yöntem BT (veya KIBT) dir. MRG yumuşak doku veya ilik ödemi için iyidir ancak kalsifiye kemik içi detayı (sekestr) saptamakta BT kadar üstün değildir.

**Soru 2 (ID: d1af38ab-8d67-4b95-961a-14c5b7456fae)**
Soru Kökü: Kronik osteomiyelit tanısıyla takip edilen bir hastanın tedavi planlaması için çekilen Bilgisayarlı Tomografi (BT) kesitlerinde, nekroze olmuş ölü kemik parçası (sekestr) aranmaktadır. BT kesitlerinde bu sekestrın, kendini çevreleyen sağlam kemiğe göre relatif radyolojik dansite görünümü genellikle nasıldır?
Doğru Şık (C): Çevreleyen kemikten daha radyoopak görünür
Açıklama: Kronik osteomiyelitte sekestrum (ölü kemik parçası), çevreleyen canlı ve rezorpsiyona uğramakta olan (dolayısıyla dansitesi azalmış) enflamatuar kemikten daha radyoopak (sklerotik) görünür. BT, özellikle bu yoğun sklerotik kemiğe sahip olgularda iç yapıyı ve sekestrayı saptamak için en üstün yöntemdir.

---

### ÇİFT 21 (Benzerlik: 0.75)

**Soru 1 (ID: d229e40e-4068-47ba-b4da-ea42201559f2)**
Soru Kökü: Uzun dönemli bifosfonat tedavisi planlanan veya halihazırda ilacı kullanmakta olan hastaların dental süreçlerinin yönetimiyle ilgili yayınlanan uluslararası dernek (ADA, AAOMS, CAOMS) kuralları referans alındığında, aşağıdaki klinik yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (B): İlacı uzun süredir kullanan hastalarda, kronu tamamen harabiyete uğramış periapikali sağlıklı dişler de risk oluşturduğu için acilen ve agresif olarak çekilmelidir.
Açıklama: Bifosfonat birikimi olan hastalarda mukoza bütünlüğünü bozan diş çekimleri, osteonekrozun tetiklenmesindeki 1 numaralı risk faktörüdür. Bu nedenle restorasyonu imkansız hale gelmiş ancak radyolojik apikal enfeksiyon belirtisi olmayan dişler için en güvenli ve önerilen tedavi şekli, dişi 'çekmek yerine' kronu diş eti seviyesinden keserek kökü asemptomatik biçimde kanal tedavisi ile (dekoronasyon) çene kemiği içinde bırakmaktır.

**Soru 2 (ID: de618eef-8f76-471d-b1f3-934c632cc558)**
Soru Kökü: Uzun yıllardır oral bifosfonat kullanan 60 yaşındaki diyabetik hastada oklüzal çürüklü bir diş saptanmıştır. Olası bir osteonekrozu (BRONJ) tetiklememek adına planlanacak dental tedavinin tipi oldukça önemlidir. Aşağıdaki işlemlerden hangisi bu hasta grubunda yüksek risk barındırmaz ve primer hekim tarafından genel pratikte güvenle uygulanabilir?
Doğru Şık (C): Kök kanal tedavisi, kompozit restorasyon ve subgingival olmayan non-invaziv periodontal debridman
Açıklama: Bifosfonat alanlarda kanama, kemik frezleme ve kemiği ağız florasına açan travmatik flep işlemlerinden kaçınılmalıdır. Bu nedenle rutin kuron/köprü restorasyonları, standart kök kanal tedavileri (taşkınlık yapılmamasına özen gösterilerek) ve kret altı küretaj içermeyen non-invaziv yüzeysel periodontal işlemler tam güvenlikle uygulanabilen, risk oluşturmayan işlemlerdir.

---

### ÇİFT 22 (Benzerlik: 0.75)

**Soru 1 (ID: 12df3869-0038-4b6f-b231-627e128f84aa)**
Soru Kökü: Baş boyun kanseri nedeniyle 60 Gray radyoterapi öyküsü olan bir hastada, çene kemiklerinde azalan damarlanma sonucu osteoradyonekroz (radyasyon osteomiyeliti) riski mevcuttur. Bu tabloda, ekstraoral şişlik, fistül veya pürülan drenaj gibi diğer enflamatuar bulgular henüz ortaya çıkmadan ilk karşılaşılan klinik uyarıcı işaret aşağıdakilerden hangisidir?
Doğru Şık (A): Yoğun ağrı
Açıklama: Osteoradyonekrozda kemikte hücre azalması ve kronik hipoksi mevcuttur. Drenaj, ekspansiyon veya şişlik gibi klasik enfeksiyon/osteomiyelit bulguları ortaya çıkmadan çok daha önce, radyasyon almış bölgede izlenen ilk işaret, tipik olarak sinsi ve yoğun bir ağrıdır.

**Soru 2 (ID: ff2e957a-a090-4711-aed2-cd4deb322ad8)**
Soru Kökü: Baş-boyun kanseri nedeniyle daha önce yoğun terapötik ışınlama (40-80 gray) almış bir hastada, uygulanan protetik işlemlerin tahrişi sonrasında çene kemiğinde ciddi ağrı, şişlik ve fistül formasyonu gözlenmiştir. Gelişen bu klinik tablo (osteoradyonekroz), etiyopatogenezi gereği hangi klasik triad (üçlü mekanizma) ile açıklanır?
Doğru Şık (D): Radyasyon + Travma + İnfeksiyon
Açıklama: Osteoradyonekroz (Radyasyon Osteomyeliti), klasik olarak 'Radyasyon + Travma + İnfeksiyon' formülü ile ifade edilir. Radyasyon, kemikteki damar yapısını ve hücreleri (hipovasküler, hiposelüler, hipoksik) azaltarak kemiği dış etkilere karşı savunmasız bırakır; bunun üzerine eklenen küçük bir cerrahi/protez travması ve sonrasındaki ikincil enfeksiyon kemik nekrozunu tetikler.

---

### ÇİFT 23 (Benzerlik: 0.75)

**Soru 1 (ID: 395467ca-dc65-4311-9c01-766f15c76440)**
Soru Kökü: Akut apikal periodontitis ile akut periapikal apse patogenezi hücresel düzeyde karşılaştırıldığında, akut apikal periodontitisin henüz apseleşmemiş erken dönemini spesifik kılan en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitiste doku yıkımına yol açacak olan makrofaj ve osteoklast gibi hücrelerin aktivasyonu daha başlamamıştır; olay vasküler genişleme ve ödem düzeyindedir. İrritan yeterince güçlüyse pürülan sıvı (pus) oluşur ve tablo akut periapikal apseye dönüşerek kemik yıkımını başlatır. Granülasyon ve epitel kavitasyonu ise kronik fazın özellikleridir.

**Soru 2 (ID: 896fbe27-e295-47fb-b65f-f88d6915f379)**
Soru Kökü: Akut periapikal (dentoalveolar) apse gelişiminde, infeksiyonun periapikal dokulara ulaşmasının temel kaynağı aşağıdakilerden hangisidir?
Doğru Şık (C): İnfekte kök kanalı
Açıklama: Akut dentoalveolar apse, temel olarak kök kanalından kaynaklanan enfeksiyonun apikal foramenden periapikal dokulara geçmesiyle oluşur. Diğer dokular komşuluk yoluyla enfekte olabilir ancak birincil inflamatuar odak ve enfeksiyon kaynağı her zaman nekrotik ve enfekte kök kanalıdır. Periodontal ligament patolojileri ise daha çok periodontal apse tablosu oluşturur.

---

### ÇİFT 24 (Benzerlik: 0.75)

**Soru 1 (ID: 6602d316-dbe3-4edb-92be-a0d9e2efa7b5)**
Soru Kökü: Klinik seyrine ve süresine göre incelendiğinde osteomyelit fazları farklı radyolojik ve klinik isimlendirmeler alır. Aşağıdakilerden hangisi hastalığın **akut fazında** (Akut Evre) değerlendirilen tablolardan biri **değildir**?
Doğru Şık (D): Kronik diffüz sklerozan osteomiyelit
Açıklama: Akut evre hastalıkları; akut süpüratif, piyojenik, subakut süpüratif ve (çocuklarda daha çok izlenen akut/subakut bir form olan) Garre osteomyeliti/proliferatif periostitistir. Kronik diffüz sklerozan osteomiyelit ise adından da anlaşılacağı üzere hücresel yanıtın tamamen değiştiği ve kemik üretiminin/sklerozunun ön plana çıktığı kronik faza aittir.

**Soru 2 (ID: 841fd6ec-6323-4614-b636-decdec786995)**
Soru Kökü: Kemik iliğinin inflamasyonu olarak tanımlanan osteomiyelitin hastalık süreci akut ve kronik olarak farklı varyantlara ayrılır.
Aşağıdakilerden hangisi hastalığın akut evre varyantları veya reaksiyonlarından biri **değildir**?
Doğru Şık (D): Garré’nin nonsupuratif sklerozan osteiti
Açıklama: Garré’nin kronik nonsupuratif sklerozan osteiti, inflamasyonun düşük virülanslı seyredip organizmanın proliferatif periosteal yanıtıyla (soğan kabuğu) kendini gösterdiği osteomiyelitin kronik formudur. Akut süpüratif ve subakut piyojenik tablolar hastalığın hızlı ilerleyen ve destrüktif akut evrelerine aittir. Garre osteomiyeliti yavaş seyirli olup kemikte nekrozdan çok skleroz ve kemik depozisyonuyla ilerleyen kronik bir fazdır.

---

### ÇİFT 25 (Benzerlik: 0.75)

**Soru 1 (ID: 2fe30cf1-b6e9-42ea-9d64-c084ef5e72eb)**
Soru Kökü: İleri evre yassı hücreli karsinom tedavisi sonrası sol mandibulada osteoradyonekroz gelişen 65 yaşında bir kadın hastanın tedavisi planlanmaktadır. Bölgedeki mevcut enfeksiyonun çevre yumuşak dokulara invazyon derinliğini veya primer tümörün olası lokal nüksünü (rekürrens) birbirinden ayırmak klinik muayene ile mümkün olmamıştır.
Bu durumda, yumuşak doku ilişkisini haritalamak için tercih edilmesi gereken en ideal radyolojik görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Kontrastlı MRG (Manyetik Rezonans Görüntüleme)
Açıklama: Osteoradyonekroz hastalarında sert dokuyu ilgilendiren yıkım en iyi BT ile değerlendirilse de, hastalığın çevre yumuşak dokuya sızması, ödemli reaksiyonları ve özellikle primer tümörün aynı bölgede nüks edip etmediğinin tespiti için sıvı ve vasküler yapılara duyarlı olan MRG kullanılır. Yumuşak dokunun ayrıntılı kontrastlanması için iv Gadolinyum türevi ajanlar içeren kontrastlı MRG altın standart görüntüleme yöntemidir.

**Soru 2 (ID: cdc8af1d-62bf-40d5-a557-b2289ae2ad0f)**
Soru Kökü: Osteoradyonekroz şüphesi taşıyan hastada, kemik dokusundaki sekestr komplikasyonları ile çevre yumuşak doku tutulumunu ve olası primer ağız kanserinin nüksünü birbirinden ayırt etmek için tercih edilmesi gereken **en optimal** radyolojik algoritma aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (E): Kemik için BT, yumuşak doku ve kanser nüksü için kontrastlı MRG
Açıklama: Osteoradyonekrozda kemik komplikasyonları ve sekestr tespiti en iyi Bilgisayarlı Tomografi (BT) ile değerlendirilir. Eş zamanlı yumuşak doku enfeksiyon yayılımı veya ışınlanmış ağız kanserinin nüksünü değerlendirmek için ise en hassas görüntüleme yöntemi kontrastlı MRG'dir.

---

### ÇİFT 26 (Benzerlik: 0.74)

**Soru 1 (ID: 80092470-35c0-459c-b78a-ace14903a215)**
Soru Kökü: İnatçı mandibular ağrı ve radyografik sklerozis bulguları nedeniyle kronik osteomiyelit şüphesiyle incelenen bir hastanın sistemik anamnezinde; tekrarlayan inflamatuar eklem ağrıları (sinovit), şiddetli sivilce şikayetleri (akne püstüloza), palmoplantar püstülozis (sedef hastalığı benzeri bulgular) ve genel kemik kütlesinde artış (kazanılmış hiperostoz) saptanmıştır. Bu tablo, çene lezyonunun **en olası** etiyolojisi olarak aşağıdakilerden hangisini işaret etmektedir?
Doğru Şık (A): SAPHO sendromu
Açıklama: SAPHO sendromu; Sinovit (inflamatuar artrit), Akne (püstüloza), Püstüloz (sedef, palmoplantar püstülozis), Hiperostoz (kazanılmış) ve Osteomiyelit kelimelerinin baş harflerinden oluşan spesifik bir sistemik tablodur. Bu hastalarda çene kemiklerinde sıklıkla sklerozla karakterize olan diffüz kronik osteomiyelit izlenir ve tanı bu sistemik triad/pentad bulgularıyla koyulur.

**Soru 2 (ID: d224ca31-ce43-403a-8a15-2ec026bd9630)**
Soru Kökü: Çenelerde özellikle kronik seyirli osteomiyelit bulgularıyla da ilişkilendirilebilen ve bir dizi spesifik mukokutanöz / iskeletsel bulgunun baş harflerinden ismini alan SAPHO sendromunun klasik tıbbi bileşenleri aşağıdakilerin hangisinde eksiksiz verilmiştir?
Doğru Şık (D): Sinovit, akne, püstüloz, hiperostoz, osteomiyelit
Açıklama: SAPHO sendromu; S (Sinovitis - inflamatuar artrit), A (Akne - özellikle şiddetli formlar), P (Püstüloz - palmoplantar veya sedef), H (Hiperostoz - osteosklerotik genişleme) ve O (Osteomiyelit) bulgularını içeren nadir bir idiyopatik romatizmal-otoimmün tablodur. Bu hastalarda gelişen osteomiyelit bakteriyel bir enfeksiyondan ziyade, steril oto-inflamatuar bir mekanizmayla ortaya çıktığından antibiyotiklere yanıt vermez ve sendromun klasik 5'li bulgusunun tanınması teşhiste esastır.

---

### ÇİFT 27 (Benzerlik: 0.74)

**Soru 1 (ID: 9b880fc5-7fa6-43f8-82f4-aae412930232)**
Soru Kökü: Yirmi dokuz yaşında kadın hastanın mandibular sol birinci büyük azı dişine sekiz ay önce endodontik tedavi uygulanmıştır. Kontrol radyografisinde, daha önce dişin apikalinde tespit edilen "kondanse osteitis" lezyonunda belirgin bir küçülme ve gerileme olduğu saptanmıştır. Bu radyografik düzelmenin temel biyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Endodontik tedavi ile düşük virülanslı inflamatuar irritanın ortadan kalkması
Açıklama: Kondanse osteitis bir enflamatuar reaksiyon olduğundan, irritan etkenin (kök kanalı içindeki toksin ve bakterilerin) başarılı bir endodontik tedavi ile ortadan kaldırılmasıyla kemikteki hücresel yapı normal dengesine döner. Artmış osteoblastik aktivite durur ve kemik remodelajı sonucu sklerotik görünüm genellikle geriler ve trabeküler kemik normale döner. Kök kanal patlarının doğrudan kemik eriticiliği bu düzelmeyi açıklamaz.

**Soru 2 (ID: b81ed3ca-912b-4a1b-9e34-52cec9faf472)**
Soru Kökü: Radyografide çene kemiğinde diş kökleriyle ilişkili radyoopak lezyonlar saptanan iki farklı hastanın değerlendirilmesinde; birinci hastada ilgili diş non-vital iken, ikinci hastada diş çürüksüz ve vitaldir. Bu ayırıcı tanı prensibine göre 'Kondanse Osteitis' (fokal skleroze osteomyelitis) tanısı için aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (B): Etken dişin enfekte kök kanal sistemine endodontik tedavi uygulandıktan sonra lezyon genellikle gerileme gösterir.
Açıklama: Kondanse osteitis (skleroze osteitis), non-vital bir dişteki düşük toksisiteli pulpa enfeksiyonunun yarattığı lokal proliferatif kemik uyarımıdır. Etken, enfekte kanal sistemi olduğundan, dişin endodontik olarak başarılı şekilde tedavi edilmesi (bakteriyel kaynağın kurutulması) sonrasında kemikteki sklerotik alan genellikle geriler ve normalleşir.

---

### ÇİFT 28 (Benzerlik: 0.74)

**Soru 1 (ID: 1367e638-367e-4163-a47e-17ea26e141c3)**
Soru Kökü: Çenelerde değişen derecelerde yaygın skleroz, rezorpsiyon ve periosteal hiperplazi ile karakterize edilen kronik osteomiyelitin ayırıcı tanısı değerlendirilmektedir.
Aşağıdaki hastalıklardan hangisi, özellikle tek bir odakla sınırlı kalmayıp tüm mandibulayı difüz olarak etkilemesi nedeniyle kronik diffüz osteomiyelit ile ayırıcı tanıya giren **başlıca** patolojidir?
Doğru Şık (B): Paget hastalığı
Açıklama: Osteomiyelit ilerlediğinde geniş alanlarda osteolitik-osteosklerotik mikst dokular yaratarak kemik silüetini bozar. Paget hastalığı (osteitis deformans), lokal bir enfeksiyona bağlı olmaksızın tüm kemiği (çoğunlukla tüm mandibulayı veya maksillayı) aynı anda etkileyerek hipersementoz ve 'pamuk atığı' şeklindeki yaygın mikst opasiteler ile karakterizedir. Fokal veya periapikal displaziler sınırlı bölgeleri etkilerken, Paget hastalığının tüm mandibulayı tutan dağınık doğası osteomiyelitin diffüz formunu birebir taklit eder.

**Soru 2 (ID: e9eb45b6-2cd8-4d16-9844-28a499661c49)**
Soru Kökü: Çenelerde hızlı litik kemik yıkımı ve periosteal yeni kemik reaksiyonu oluşturan hastalıkların radyolojik görünümleri osteomyeliti taklit edebilir ve yanlış tanıya yol açabilir. Aşağıdaki lezyonlardan hangisi mandibulada destrüktif osteomyelit benzeri bu kemik yıkım paternini oluşturan, primer ayırıcı tanıda yer alan durumlardan biri **değildir**?
Doğru Şık (C): Osteoma
Açıklama: Osteosarkom, lenfoma/lösemi, skuamöz hücreli karsinom invazyonu ve Langerhans hücreli histiyositoz; kemikte agresif litik yıkım yapan, sınırları belirsiz destrüksiyona yol açan ve periostu uyararak reaktif yeni kemik oluşumu (osteomyelite benzer sekestr veya soğan kabuğu) yapabilen hastalıklardır. Osteoma ise iyi sınırlı, son derece yavaş büyüyen, dışarıya doğru ekzofitik uzanan benign bir kortikal kemik hamartomudur ve agresif osteomyelit yıkımını taklit etmez.

---

### ÇİFT 29 (Benzerlik: 0.74)

**Soru 1 (ID: 0986e59a-b184-4658-bcd4-96f6ef94e09c)**
Soru Kökü: Kırk yaşında kadın hasta, estetik amaçla başvurduğunda sol üst lateral dişinde renklenme tespit ediliyor. İlgili dişte derin bir çürük bulunup vitalite testlerine yanıt vermemektedir. Radyografide dişin apikalinde lamina dura kaybı izleniyor. Periapikal granülom şüphesi bulunan bu diş için uygulanması gereken öncelikli tedavi aşağıdakilerden hangisidir?
Doğru Şık (A): Kök kanal (endodontik) tedavisi
Açıklama: Periapikal granülomlar, infekte kök kanalından gelen irritasyon nedeniyle oluştukları için birincil tedavi yaklaşımı her zaman irritanın kaynağının yok edilmesidir. Bu da standart endodontik (kök kanal) tedavisi ile sağlanır. Sadece kanal tedavisi ile granülomların büyük bir çoğunluğu iyileşir; apikal rezeksiyon veya çekim, standart kanal tedavisinin başarısız olduğu durumlarda ikinci seçeneklerdir.

**Soru 2 (ID: 233bc945-8384-42c7-b158-49d455132bc8)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta, sağ üst birinci büyük azı dişinde sadece ara sıra hissettiği çok hafif bir rahatsızlık şikayetiyle başvuruyor. Radyografik incelemede apikal bölgede sınırları belirgin olmayan ve radyopak sklerotik trabeküllerle çevrili bir radyolüsent alan tespit ediliyor. Pü formasyonu ara sıra mukozadan drene olmaktadır. Bu hastada izlenen klinik tablo (kronik periapikal apse) için en uygun genel tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (D): Endodontik tedavi
Açıklama: Kronik periapikal apsede enfeksiyon kaynağı dişin içindeki nekrotik kanaldır ve tedavisi genel olarak endodontik tedavidir. Kök kanalının dezenfekte edilip doldurulmasıyla irritan ortadan kalkar ve periapikal bölgedeki sklerotik tablo zamanla iyileşir. Sadece antibiyotik vermek enfeksiyon kaynağını yok etmediği için tedavide tek başına anlamsızdır.

---

### ÇİFT 30 (Benzerlik: 0.74)

**Soru 1 (ID: 1367e638-367e-4163-a47e-17ea26e141c3)**
Soru Kökü: Çenelerde değişen derecelerde yaygın skleroz, rezorpsiyon ve periosteal hiperplazi ile karakterize edilen kronik osteomiyelitin ayırıcı tanısı değerlendirilmektedir.
Aşağıdaki hastalıklardan hangisi, özellikle tek bir odakla sınırlı kalmayıp tüm mandibulayı difüz olarak etkilemesi nedeniyle kronik diffüz osteomiyelit ile ayırıcı tanıya giren **başlıca** patolojidir?
Doğru Şık (B): Paget hastalığı
Açıklama: Osteomiyelit ilerlediğinde geniş alanlarda osteolitik-osteosklerotik mikst dokular yaratarak kemik silüetini bozar. Paget hastalığı (osteitis deformans), lokal bir enfeksiyona bağlı olmaksızın tüm kemiği (çoğunlukla tüm mandibulayı veya maksillayı) aynı anda etkileyerek hipersementoz ve 'pamuk atığı' şeklindeki yaygın mikst opasiteler ile karakterizedir. Fokal veya periapikal displaziler sınırlı bölgeleri etkilerken, Paget hastalığının tüm mandibulayı tutan dağınık doğası osteomiyelitin diffüz formunu birebir taklit eder.

**Soru 2 (ID: 78156f2f-4c23-4ba7-90fe-efad84e7e245)**
Soru Kökü: Çenelerin diffüz radyoopak lezyonlarının incelenmesinde; kronik diffüz sklerozan osteomiyelit ile karışabilen, aslında primer olarak fibro-osseöz bir patoloji olan ancak hastalığın ileri evrelerinde avasküler kitlelerin enfekte olmasıyla ikincil bir osteomiyelit tablosunun da sıklıkla eklendiği hastalık aşağıdakilerden hangisidir?
Doğru Şık (A): Florid semento-osseöz displazi
Açıklama: Florid semento-osseöz displazi, çenelerin 3 veya 4 kadranını birden tutan ve zamanla olgunlaşarak büyük aselüler (kötü kanlanan) radyoopak kütlelere dönüşen bir fibro-osseöz hastalıktır. Bu dens kitleler hipovasküler olduğu için, diş çekimi veya periodontal ceplerden ulaşan bakteriler kolaylıkla ikincil bir osteomiyelit başlatır. Her iki durumda da çenelerde yaygın skleroz izlenir ve sıklıkla enfeksiyon eklendiği için birbirlerinin en güçlü klinik ayırıcı tanısıdırlar.

---

### ÇİFT 31 (Benzerlik: 0.74)

**Soru 1 (ID: 9f06f37f-b16d-4664-8f8d-67eca6d945a4)**
Soru Kökü: Baş-boyun bölgesi malignitelerinin tedavisinde yüksek doz (40-80 gray) terapötik radyasyon alan hastalarda çenelerde osteoradyonekroz gelişmesinin hücresel düzeydeki temel fizyopatolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik damar yapısında geri dönüşümsüz obstrüksiyon, hücre sayısında azalma ve kronik hipoksi tablosunun oluşması
Açıklama: Radyoterapi (özellikle 40 Gy üstü) kemiği besleyen kapiller damar ağında endarteritis obliterans'a (damar lümeninin kapanması) neden olur. Kemiğin kanlanması kesildiği için, osteositler ve iliğin hücresel elemanları beslenemeyerek ölür. Böylece radyasyona maruz kalan kemik; hipoksik (oksijensiz), hipovasküler (damarsız) ve hiposelüler (hücresiz) kalarak enfeksiyona karşı tüm direnç mekanizmasını yitirir ve minimal bir travmada dahi osteoradyonekroza sürüklenir.

**Soru 2 (ID: ff2e957a-a090-4711-aed2-cd4deb322ad8)**
Soru Kökü: Baş-boyun kanseri nedeniyle daha önce yoğun terapötik ışınlama (40-80 gray) almış bir hastada, uygulanan protetik işlemlerin tahrişi sonrasında çene kemiğinde ciddi ağrı, şişlik ve fistül formasyonu gözlenmiştir. Gelişen bu klinik tablo (osteoradyonekroz), etiyopatogenezi gereği hangi klasik triad (üçlü mekanizma) ile açıklanır?
Doğru Şık (D): Radyasyon + Travma + İnfeksiyon
Açıklama: Osteoradyonekroz (Radyasyon Osteomyeliti), klasik olarak 'Radyasyon + Travma + İnfeksiyon' formülü ile ifade edilir. Radyasyon, kemikteki damar yapısını ve hücreleri (hipovasküler, hiposelüler, hipoksik) azaltarak kemiği dış etkilere karşı savunmasız bırakır; bunun üzerine eklenen küçük bir cerrahi/protez travması ve sonrasındaki ikincil enfeksiyon kemik nekrozunu tetikler.

---

### ÇİFT 32 (Benzerlik: 0.74)

**Soru 1 (ID: 2644bef0-529c-4031-a6c2-4bfd1cfd45b1)**
Soru Kökü: American Dental Association (ADA) klinik pratik kılavuzuna göre, kronik oral bifosfonat kullanan ve ağzında yaygın dental sorunları olan bir hastada acil olmayan rutin dental cerrahiler (örn. planlı çekimler, lokalize flap operasyonları) planlanırken çenedeki iyileşme rezervini korumak adına her bir sekstant arası bırakılması önerilen spesifik zaman aralığı (dinlendirme süresi) aşağıdakilerden hangisidir?
Doğru Şık (D): 2 ay
Açıklama: ADA, osteonekroz riskini dağıtmak ve kemik iyileşme kapasitesini (turnover yorgunluğunu) dengelemek için, acil olmayan cerrahi/dental prosedürlerde her altılı bölge (sekstant) işlemleri arasında en az 2 aylık bir zaman aralığı (dinlendirme) bırakılmasını önermektedir.

**Soru 2 (ID: 47821772-30f9-4fef-af0a-d3f73ecd2227)**
Soru Kökü: Canadian Association of Oral and Maxillofacial Surgeons (CAOMS) ve AAOMS kılavuzlarına göre yaklaşımlar incelendiğinde, uzun süredir oral bifosfonat kullanan bir hastada periapikal apse sebebiyle **acil diş çekimi endikasyonu** doğduğunda CAOMS'un önerdiği spesifik ilaç yönetimi protokolü aşağıdakilerden hangisidir?
Doğru Şık (E): Tıp doktoru konsültasyonu ile bifosfonatın hemen kesilmesi ve çekim yarasının tamamen iyileşmesine kadar ilacın kullanılmaması
Açıklama: CAOMS kılavuzuna göre acil dental tedavi (ör. apse, çekim) gerektiren durumlarda, medikal konsültasyon ile bifosfonatın derhal kesilmesi ve soket epitelizasyonu (yara iyileşmesi) tamamen sağlanıncaya kadar ilacın tekrar kullanılmaması önerilir. AAOMS ise acil olmayan tedaviler için 3 ay kuralını işletir.

---

### ÇİFT 33 (Benzerlik: 0.74)

**Soru 1 (ID: 62ae620e-06bd-492b-b1d3-f2d0f9502705)**
Soru Kökü: Bifosfonat grubu ajanlar, moleküler yapılarındaki yan zincir farklılıklarına göre birinci kuşak (alkilbifosfonatlar) ve ikinci/üçüncü kuşak (aminobifosfonatlar) olmak üzere temelde ikiye ayrılır.
İkinci ve üçüncü kuşak olan nitrojen içeren bifosfonatların, birinci kuşak nitrojen içermeyen bifosfonatlara karşı en belirgin klinik avantajı aşağıdakilerden hangisidir?
Doğru Şık (B): Osteoklastik kemik yıkımı inhibisyonunda farmakolojik olarak daha yüksek potans ve etkiye sahip olmaları
Açıklama: Zoledronik asit, alendronat gibi nitrojen içeren bifosfonatlar, nitrojen içermeyen gruba (örn. etidronat) kıyasla osteoklastik yıkımı inhibe etmede çok daha güçlü ve etkilidir. Hatta bu güçlü etki nedeniyle hücre döngüsüne müdahale ederek çok daha sık ve şiddetli olarak çene kemiği osteonekrozuna sebep olurlar. Karaciğerde değil, metabolize olmadan direkt böbrek yoluyla atılırlar.

**Soru 2 (ID: bc39a30c-1c34-4bef-9008-4adfbe4d63e5)**
Soru Kökü: İkinci ve üçüncü kuşak nitrojen içeren aminobifosfonatlar (zoledronat, ibandronat vb.), organizmadaki yıkım ve atılım yolları açısından incelendiğinde aşağıdaki metabolik özelliklerden hangisini sergilerler?
Doğru Şık (B): Vücutta herhangi bir enzim sistemiyle metabolik değişime uğramadan direkt böbreklerden süzülerek atılırlar.
Açıklama: Nitrojen içeren (aminobifosfonat) grubu ilaçlar, vücutta karaciğer dahil hiçbir organ veya sitokrom enzimi tarafından hidrolize ya da kimyasal değişime uğratılamaz. İlacın kemiğe bağlanmayan fazlalık kısmı, kan plazmasından tamamen aynı kimyasal formla glomerüllerden süzülerek idrar (böbrek) yoluyla atılır. Bu nedenle ilacın yan etkilerinden biri de renal toksisitedir.

---

### ÇİFT 34 (Benzerlik: 0.74)

**Soru 1 (ID: 47821772-30f9-4fef-af0a-d3f73ecd2227)**
Soru Kökü: Canadian Association of Oral and Maxillofacial Surgeons (CAOMS) ve AAOMS kılavuzlarına göre yaklaşımlar incelendiğinde, uzun süredir oral bifosfonat kullanan bir hastada periapikal apse sebebiyle **acil diş çekimi endikasyonu** doğduğunda CAOMS'un önerdiği spesifik ilaç yönetimi protokolü aşağıdakilerden hangisidir?
Doğru Şık (E): Tıp doktoru konsültasyonu ile bifosfonatın hemen kesilmesi ve çekim yarasının tamamen iyileşmesine kadar ilacın kullanılmaması
Açıklama: CAOMS kılavuzuna göre acil dental tedavi (ör. apse, çekim) gerektiren durumlarda, medikal konsültasyon ile bifosfonatın derhal kesilmesi ve soket epitelizasyonu (yara iyileşmesi) tamamen sağlanıncaya kadar ilacın tekrar kullanılmaması önerilir. AAOMS ise acil olmayan tedaviler için 3 ay kuralını işletir.

**Soru 2 (ID: d229e40e-4068-47ba-b4da-ea42201559f2)**
Soru Kökü: Uzun dönemli bifosfonat tedavisi planlanan veya halihazırda ilacı kullanmakta olan hastaların dental süreçlerinin yönetimiyle ilgili yayınlanan uluslararası dernek (ADA, AAOMS, CAOMS) kuralları referans alındığında, aşağıdaki klinik yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (B): İlacı uzun süredir kullanan hastalarda, kronu tamamen harabiyete uğramış periapikali sağlıklı dişler de risk oluşturduğu için acilen ve agresif olarak çekilmelidir.
Açıklama: Bifosfonat birikimi olan hastalarda mukoza bütünlüğünü bozan diş çekimleri, osteonekrozun tetiklenmesindeki 1 numaralı risk faktörüdür. Bu nedenle restorasyonu imkansız hale gelmiş ancak radyolojik apikal enfeksiyon belirtisi olmayan dişler için en güvenli ve önerilen tedavi şekli, dişi 'çekmek yerine' kronu diş eti seviyesinden keserek kökü asemptomatik biçimde kanal tedavisi ile (dekoronasyon) çene kemiği içinde bırakmaktır.

---

### ÇİFT 35 (Benzerlik: 0.73)

**Soru 1 (ID: 43f4c7ea-8077-4465-8694-b6c0bc97f3e9)**
Soru Kökü: Periapikal granülomun patogenezi histopatolojik olarak incelendiğinde, inflamasyonun yayılması ve vasküler basıncın artması sonucu oluşan kemik rezorbsiyon alanında, nekrotik kemik ve yumuşak dokunun yerini alan temel biyolojik doku aşağıdakilerden hangisidir?
Doğru Şık (C): Granülasyon dokusu
Açıklama: Periapikal granülom oluşum sürecinde, artan vasküler basınç ve inflamatuar hücre sitokinleri lokalize kemik rezorpsiyonuna yol açar. Vücut bölgeyi onarmak ve enfeksiyonu sınırlamak adına nekrotik doku ve kemiğin olduğu alana yoğun kapiller damar ve inflamatuar hücre (lenfosit, plazma hücresi, makrofaj) içeren granülasyon dokusunu doldurur. Fibröz skar veya sement yapımı aktif inflamasyon safhasında değil, inaktif iyileşme safhalarında görülür.

**Soru 2 (ID: c1fa4701-52d1-4ba6-833e-c9a9c65e65ec)**
Soru Kökü: Periapikal granülomun kronik irritasyonu altında kalan apikal dokularda, bir sonraki safha olarak radiküler kist formasyonuna geçiş izlenebilir. Kavitasyonun iç yüzeyini döşeyecek olan hücresel proliferasyon patogenezde aşağıdakilerden hangisinden köken alır?
Doğru Şık (C): Granülom içerisindeki Malassez epitel artıklarının proliferasyona uğraması
Açıklama: Radiküler kist (periapikal kist), granülom evresinden sonra bölgedeki inflamatuar sitokinlerin odontogenez kalıntısı olan Hertwig epitel kını (Malassez epitel artıkları) hücrelerini uyarmasıyla başlar. Bu hücreler prolifere olarak granülomun ortasında kistik bir kavitasyon oluşturur ve kistin epitel döşemesini meydana getirir.

---

### ÇİFT 36 (Benzerlik: 0.73)

**Soru 1 (ID: 6328e575-b496-486c-89d0-1c3fc87b4309)**
Soru Kökü: 62 yaşında osteoporoz hastası kadın, mandibula lingual bölgesinde 1 cm boyutunda açığa çıkmış, üzeri pürülan eksuda ile kaplı ve çevre mukozasında ciddi eritem saptanan bir lezyon ile başvuruyor. Şiddetli ağrısı olan hastanın panoramik radyografisinde hafif kortikal düzensizlik izleniyor.
AAOMS tarafından tanımlanan Evre II tablosuyla tam uyumlu olan bu hastanın ilk güncel tedavi basamağı olarak aşağıdakilerden hangisi doğrudan uygulanmalıdır?
Doğru Şık (C): Antiseptik gargara ve analjeziklere ek olarak, bakteriyel kontrol için topikal veya sistemik antibiyotik başlanması
Açıklama: Bifosfonat ilişkili nekrozda Evre II'nin ana klinik komponenti ağrısız kemik ekspozisyonuna 'sekonder enfeksiyon ve yumuşak doku enflamasyonunun' eklenmesidir (eritem, ağrı, eksuda). Tedavide ilk kural enfeksiyon tablosunu hafifletmektir. Bu nedenle hastalara klorheksidinli gargaralar eşliğinde geniş spektrumlu sistemik (penisilin/metronidazol vb.) antibiyotikler reçete edilerek medikal non-cerrahi baskılama uygulanır. Blok rezeksiyon ancak fistül-fraktür gibi Evre III komplikasyonlarında gündeme gelebilir.

**Soru 2 (ID: de618eef-8f76-471d-b1f3-934c632cc558)**
Soru Kökü: Uzun yıllardır oral bifosfonat kullanan 60 yaşındaki diyabetik hastada oklüzal çürüklü bir diş saptanmıştır. Olası bir osteonekrozu (BRONJ) tetiklememek adına planlanacak dental tedavinin tipi oldukça önemlidir. Aşağıdaki işlemlerden hangisi bu hasta grubunda yüksek risk barındırmaz ve primer hekim tarafından genel pratikte güvenle uygulanabilir?
Doğru Şık (C): Kök kanal tedavisi, kompozit restorasyon ve subgingival olmayan non-invaziv periodontal debridman
Açıklama: Bifosfonat alanlarda kanama, kemik frezleme ve kemiği ağız florasına açan travmatik flep işlemlerinden kaçınılmalıdır. Bu nedenle rutin kuron/köprü restorasyonları, standart kök kanal tedavileri (taşkınlık yapılmamasına özen gösterilerek) ve kret altı küretaj içermeyen non-invaziv yüzeysel periodontal işlemler tam güvenlikle uygulanabilen, risk oluşturmayan işlemlerdir.

---

### ÇİFT 37 (Benzerlik: 0.73)

**Soru 1 (ID: 043a6408-db27-43ac-83c2-93b8d5169b8f)**
Soru Kökü: Mandibular üçüncü molar dişinde tekrarlayan perikoronal enfeksiyon öyküsü olan 22 yaşındaki hastanın radyolojik muayenesinde kronikliğe işaret eden bulgular aranmaktadır. Aşağıdakilerden hangisi bu hastada beklenen tekrarlayan/kronik radyolojik özelliklerden biri **değildir**?
Doğru Şık (A): Kemik defektinin dişin kronunu sirküler olarak tüm yüzeylerden çevrelemesi
Açıklama: Kronik ve tekrarlayan perikoronit vakalarında kemik defekti dişin distal ya da mezial yüzü ile sınırlıdır; sirküler olarak tüm yüzeyleri çepeçevre sarmaz. Ayrıca retromolar defekt, folikül kalınlaşması ve komşu diş kökünde rezorpsiyon ileri kronik dönemin tipik radyolojik belirteçleridir.

**Soru 2 (ID: 69c9998f-b937-4c4c-b63b-32424ed7f563)**
Soru Kökü: Uzun süreli ve düşük virülanslı bir pulpal enfeksiyonu takiben gelişen kronik periapikal absede, lezyonun kronikliğini işaret eden radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Radyolüsent alanı çevreleyen, kalınlığı değişen sklerotik trabeküller
Açıklama: Kronik periapikal apsede çoğunlukla sınırları belirgin olmayan radyolüsent alan mevcuttur ve bu alan, kalınlığı değişen radyopak sklerotik trabeküller ile çevrilidir. Bu sklerotik yapı doğrudan lezyonun kronikliğinin göstergesidir. Diffüz genişleme akut başlangıcı, soğan kabuğu görünümü ise osteomiyelit reaksiyonunu düşündürür.

---

### ÇİFT 38 (Benzerlik: 0.73)

**Soru 1 (ID: 75cdca2f-59ff-45ef-8f9d-a30f60ec8699)**
Soru Kökü: Altmış beş yaşındaki kadın hasta, alt çenesinde sürekli ağrı ve şişlik şikayetiyle başvurmuştur. İntraoral muayenede sekonder lokal enfeksiyon bulgularıyla birlikte ağrılı ve pürülan ekspoze kemik saptanmış, ancak çenede patolojik fraktür veya cilde açılan ekstraoral fistül izlenmemiştir. IV bifosfonat öyküsü olan bu hastanın AAOMS sınıflamasına göre klinik evresi ve önerilen güncel konservatif tedavi yaklaşımı aşağıdakilerin hangisinde doğru eşleştirilmiştir?
Doğru Şık (D): Evre 2 — Antiseptik gargara, analjeziklere ek olarak sistemik antibiyotik ve/veya antifungal farmakoterapi
Açıklama: Ağrılı ekspoze kemik ve yumuşak doku enfeksiyonu Evre 2 BRONJ bulgusudur. Fraktür/fistül olsaydı Evre 3 olurdu. Evre 2 için önerilen cerrahi olmayan tedavi; antiseptik gargara ve analjeziklere ilaveten sistemik antibiyotik ve/veya antifungal kullanımını kapsar.

**Soru 2 (ID: 8060c1a3-6362-4a11-9385-3cb314bff539)**
Soru Kökü: 70 yaşında multipl miyelom hastası, sağ maksillada palatinal bölgede ağrısız ve asemptomatik ekspoze kemik varlığı ile kliniğe başvurmuştur. Yapılan intraoral muayenede sadece kemik ekspozisyonu izlenmiş, etrafında herhangi bir apse, eritem, ödem veya ekstraoral fistül varlığı saptanmamıştır.
AAOMS (American Association of Oral and Maxillofacial Surgeons) 2007 sınıflamasına göre, bu hastanın medikasyona bağlı çene kemiği nekrozu tablosu hangi klinik evrede değerlendirilir?
Doğru Şık (E): Evre I
Açıklama: AAOMS sınıflamasına göre; Evre 1'de hasta klinik olarak asemptomatiktir (ağrı veya şişlik yoktur) ancak sadece kemik ekspozisyonu bulunur. Hastada sekonder enfeksiyona bağlı ağrı ve yumuşak doku şişliği geliştiğinde Evre 2'ye geçer. Ekstraoral fistül, patolojik fraktür veya maksiller sinüs iştiraki gibi komplikasyonlar sürece eklendiğinde tablo Evre 3 olarak kategorize edilir. Sorudaki hasta sadece ağrısız ekspozisyona sahip olduğu için Evre 1'dedir.

---

### ÇİFT 39 (Benzerlik: 0.73)

**Soru 1 (ID: 1367e638-367e-4163-a47e-17ea26e141c3)**
Soru Kökü: Çenelerde değişen derecelerde yaygın skleroz, rezorpsiyon ve periosteal hiperplazi ile karakterize edilen kronik osteomiyelitin ayırıcı tanısı değerlendirilmektedir.
Aşağıdaki hastalıklardan hangisi, özellikle tek bir odakla sınırlı kalmayıp tüm mandibulayı difüz olarak etkilemesi nedeniyle kronik diffüz osteomiyelit ile ayırıcı tanıya giren **başlıca** patolojidir?
Doğru Şık (B): Paget hastalığı
Açıklama: Osteomiyelit ilerlediğinde geniş alanlarda osteolitik-osteosklerotik mikst dokular yaratarak kemik silüetini bozar. Paget hastalığı (osteitis deformans), lokal bir enfeksiyona bağlı olmaksızın tüm kemiği (çoğunlukla tüm mandibulayı veya maksillayı) aynı anda etkileyerek hipersementoz ve 'pamuk atığı' şeklindeki yaygın mikst opasiteler ile karakterizedir. Fokal veya periapikal displaziler sınırlı bölgeleri etkilerken, Paget hastalığının tüm mandibulayı tutan dağınık doğası osteomiyelitin diffüz formunu birebir taklit eder.

**Soru 2 (ID: 9f3e7a56-a9e7-4c3b-9eb2-e6f0bf20dab0)**
Soru Kökü: Çene kemiklerinde kanlanma bozukluğu (hipovaskülarizasyon) yaratarak bölgesel doku direncini düşüren ve sekonder enfeksiyonlarla osteomyelite zemin hazırlayan lokal kemik hastalıkları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Hipersementoz
Açıklama: Radyoterapi (radyasyon), osteopetrozis (mermer kemik), Paget hastalığı ve sementoosseöz displazi; kemiğin fizyolojik yapısını bozup medüller damarlanmasını azaltarak osteomyelite (özellikle iskemik kökenli) yatkınlık yaratır. Hipersementoz ise kök yüzeyinde anormal sement birikimidir, çevre kemiğin genel kanlanmasını bozarak osteomyelit zemini hazırlamaz.

---

### ÇİFT 40 (Benzerlik: 0.73)

**Soru 1 (ID: 69d0d834-a7c8-4bee-8add-f9a2ced50ce9)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişinde devamlı bir dolgunluk hissi, ısırmayla artan ağrı ve palpasyon hassasiyeti şikayetiyle başvuruyor. Akut apikal periodontitis tanısı konan bu tabloda, periapikal bölgedeki pulpal irritanın doku destrüksiyonuna neden olacak kadar güçlü olması durumunda hastalığın bir sonraki aşaması ne olacaktır?
Doğru Şık (D): Pü (pus) formasyonu ve apse oluşumu
Açıklama: Akut apikal periodontitiste enflamasyon ilerler ve irritasyon doku harabiyeti yapacak yoğunluğa ulaşırsa, nötrofillerin lizozomal yıkımıyla pü (pus) oluşur. Bu birikim doku içi basıncı artırarak şiddetli zonklayıcı ağrı yapar ve klinik olarak tablo akut periapikal apseye evrilir. Kist ve skleroz oluşumu akut değil, kronik sürecin bulgularıdır.

**Soru 2 (ID: bc68f5be-d995-44e2-b006-9bdd63dfb714)**
Soru Kökü: Otuz beş yaşında erkek hasta, sol alt çenede başlayan spontan ve zonklayıcı tarzda ağrı şikayetiyle başvuruyor. Klinik muayenede 36 numaralı dişte derin bir çürük izleniyor, diş palpasyon ve perküsyona hassas, ancak sıcak ve soğuk uyarana yanıt vermiyor. Bu klinik tabloda pulpanın termal uyaranlara duyarsız olmasının temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (A): Pulpanın nekrotik olması
Açıklama: Akut periapikal apse tablosunda ilgili dişin pulpası artık tamamen canlılığını yitirmiş (nekrotik) durumdadır. Pulpa içi sinir lifleri dejenere olduğu için soğuk, sıcak, tatlı gibi uyaranlara duyarlılık göstermez. Ancak periapikal bölgedeki enflamatuar ödem nedeniyle dişte soketten yükselme ve perküsyona şiddetli hassasiyet mevcuttur.

---

### ÇİFT 41 (Benzerlik: 0.73)

**Soru 1 (ID: 0ffcac2e-666c-4ff9-892e-a2931657c0c9)**
Soru Kökü: Akut osteomyelit gelişen bir mandibulada, radyolojik değerlendirmede mineralizasyon kaybına bağlı olarak gözlemlenecek **erken dönem (ilk) bulgusu** aşağıdakilerden hangisidir?
Doğru Şık (D): Kemiğin radyolojik dansitesinde hafif bir azalma
Açıklama: Akut osteomyelitin çok erken döneminde enfeksiyon henüz süngerimsi kemikteki mineral matriksini yeterince yıkmadığı için kemik defekti net görülmez; sadece iltihabi ödem ve minör rezorpsiyona bağlı olarak 'kemiğin dansitesinde hafif bir azalma' izlenir. Sekestr oluşumu, belirgin kemik yıkımı ve sklerozis (ikinci kemik tabakası) kronikleştikçe ve haftalar ilerledikçe görünür hale gelir.

**Soru 2 (ID: 398e397f-d12a-424c-8aa3-3b6d3ebb4b8e)**
Soru Kökü: Genç bir erkek hastada mandibula posterior bölgeden alınan radyografide; enfeksiyonun kemik dış yüzeyine doğru ilerleyerek periostu uyarması sonucunda ana kortekse paralel, ikinci bir radyopak kemik tabakasının oluştuğu ('soğan kabuğu' görünümü) tespit edilmiştir. Bu spesifik radyolojik görünümün temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomyelit vakalarında inflamatuar yanıtla periosteumda uyarılmış reaktif yeni kemik oluşumu
Açıklama: Proliferatif periostitiste (veya osteomyelitin periostu uyardığı formalarda), irin korteksi geçerek periostu kaldırır; ancak genç hastalarda periost yüksek osteojenik kapasiteye sahip olduğu için enfeksiyona reaksiyon olarak hemen altına yeni, ince bir kemik tabakası serer. Bu işlemin ardışık tekrarları radyografide eşmerkezli 'soğan kabuğu' radyopasitelerini (reaktif periosteal kemik) yaratır.

---

### ÇİFT 42 (Benzerlik: 0.73)

**Soru 1 (ID: 6fc733a7-bc48-4b90-885e-ad44a923fae3)**
Soru Kökü: 45 yaşında bir erkek hasta, son 3 gündür sağ mandibulasında giderek artan şiddetli zonklayıcı ağrı, dudak köşesinde uyuşukluk (parestezi) ve komşu dişlerde sallanma (mobilite) şikayetiyle başvurmuştur. Muayenede pürülan drenaj, ateş ve lökositoz tespit edilmiştir. Bu bulgular ışığında hastadaki **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (A): Akut osteomyelit
Açıklama: Erkeklerde ve mandibulada daha sık görülen, hızlı başlayan zonklayıcı ağrı, dişlerde mobilite, pürülan drenaj, ateş, lökositoz ve enfeksiyonun inferior alveolar siniri sıkıştırmasına/hasarına bağlı gelişen 'alt dudak parestezisi' Akut Osteomyelit'in tipik ve tanısal klinik tablosudur. Apikal periodontitiste yaygın dudak parestezisi beklenmez.

**Soru 2 (ID: 8f0e5aae-bec1-4829-a591-c229393b914d)**
Soru Kökü: 38 yaşında erkek hasta, alt çenesinde hızla gelişen şiddetli ağrı, ateş, yorgunluk ve boyun bölgesinde lenfadenopati bulgularıyla başvurmuştur. Klinik tetkiklerde mandibulada yer alan akut osteomyelit tanısı kesinleşmiştir. Epidemiyolojik verilere göre çenelerde izlenen osteomiyelitlerin **en yaygın** kaynak odağı aşağıdakilerden hangisidir?
Doğru Şık (E): Devital bir dişin periapikal lezyonu
Açıklama: Osteomyelitler pek çok farklı yoldan gelişebilse de, çenelerde kemik iliğine ulaşan enfeksiyonun açık ara en yaygın kaynağı çürük ve pulpa nekrozu sonucu gelişen 'devital bir dişin periapikal lezyonu'dur. Pulpadan kemiğe sürekli püy ve toksin akışı, konak direnci düştüğünde akut yayılıma dönüşür.

---

### ÇİFT 43 (Benzerlik: 0.72)

**Soru 1 (ID: 233bc945-8384-42c7-b158-49d455132bc8)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta, sağ üst birinci büyük azı dişinde sadece ara sıra hissettiği çok hafif bir rahatsızlık şikayetiyle başvuruyor. Radyografik incelemede apikal bölgede sınırları belirgin olmayan ve radyopak sklerotik trabeküllerle çevrili bir radyolüsent alan tespit ediliyor. Pü formasyonu ara sıra mukozadan drene olmaktadır. Bu hastada izlenen klinik tablo (kronik periapikal apse) için en uygun genel tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (D): Endodontik tedavi
Açıklama: Kronik periapikal apsede enfeksiyon kaynağı dişin içindeki nekrotik kanaldır ve tedavisi genel olarak endodontik tedavidir. Kök kanalının dezenfekte edilip doldurulmasıyla irritan ortadan kalkar ve periapikal bölgedeki sklerotik tablo zamanla iyileşir. Sadece antibiyotik vermek enfeksiyon kaynağını yok etmediği için tedavide tek başına anlamsızdır.

**Soru 2 (ID: 69d0d834-a7c8-4bee-8add-f9a2ced50ce9)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişinde devamlı bir dolgunluk hissi, ısırmayla artan ağrı ve palpasyon hassasiyeti şikayetiyle başvuruyor. Akut apikal periodontitis tanısı konan bu tabloda, periapikal bölgedeki pulpal irritanın doku destrüksiyonuna neden olacak kadar güçlü olması durumunda hastalığın bir sonraki aşaması ne olacaktır?
Doğru Şık (D): Pü (pus) formasyonu ve apse oluşumu
Açıklama: Akut apikal periodontitiste enflamasyon ilerler ve irritasyon doku harabiyeti yapacak yoğunluğa ulaşırsa, nötrofillerin lizozomal yıkımıyla pü (pus) oluşur. Bu birikim doku içi basıncı artırarak şiddetli zonklayıcı ağrı yapar ve klinik olarak tablo akut periapikal apseye evrilir. Kist ve skleroz oluşumu akut değil, kronik sürecin bulgularıdır.

---

### ÇİFT 44 (Benzerlik: 0.72)

**Soru 1 (ID: 91c982d0-aff9-4c7e-a24a-e1a833e21d3f)**
Soru Kökü: Kronik osteomiyelitin radyografik incelemesinde izlenen kemik trabekül mimarisi ve nekrotik alanın yapısal özellikleri ile ilgili aşağıdaki ifadelerden hangisi doğrudur?
Doğru Şık (A): Trabeküler model ile granüler patern arasında kademeli geçiş izlenir ve sekestr çevre kemikten daha radyoopak görünür.
Açıklama: Kronik osteomiyelitte kemik iliğindeki destrüksiyon ile proliferasyon alanları iç içe geçerek granüler bir patern oluşturur. Hastalık sürecinde kanlanması kesilerek ölen kemik parçası (sekestr) canlılığını kaybettiği için dekalsifikasyona uğramaz ve rezorbe olan (radyolüsentleşen) inflamatuar çevre dokusuna kıyasla kontrast oluşturarak daha radyoopak (beyaz) görülür. Buzlu cam görünümü fibröz displazinin; pamuk atığı kalsifikasyonlar ise Paget hastalığının radyolojik marker'larıdır.

**Soru 2 (ID: d1af38ab-8d67-4b95-961a-14c5b7456fae)**
Soru Kökü: Kronik osteomiyelit tanısıyla takip edilen bir hastanın tedavi planlaması için çekilen Bilgisayarlı Tomografi (BT) kesitlerinde, nekroze olmuş ölü kemik parçası (sekestr) aranmaktadır. BT kesitlerinde bu sekestrın, kendini çevreleyen sağlam kemiğe göre relatif radyolojik dansite görünümü genellikle nasıldır?
Doğru Şık (C): Çevreleyen kemikten daha radyoopak görünür
Açıklama: Kronik osteomiyelitte sekestrum (ölü kemik parçası), çevreleyen canlı ve rezorpsiyona uğramakta olan (dolayısıyla dansitesi azalmış) enflamatuar kemikten daha radyoopak (sklerotik) görünür. BT, özellikle bu yoğun sklerotik kemiğe sahip olgularda iç yapıyı ve sekestrayı saptamak için en üstün yöntemdir.

---

### ÇİFT 45 (Benzerlik: 0.72)

**Soru 1 (ID: 47821772-30f9-4fef-af0a-d3f73ecd2227)**
Soru Kökü: Canadian Association of Oral and Maxillofacial Surgeons (CAOMS) ve AAOMS kılavuzlarına göre yaklaşımlar incelendiğinde, uzun süredir oral bifosfonat kullanan bir hastada periapikal apse sebebiyle **acil diş çekimi endikasyonu** doğduğunda CAOMS'un önerdiği spesifik ilaç yönetimi protokolü aşağıdakilerden hangisidir?
Doğru Şık (E): Tıp doktoru konsültasyonu ile bifosfonatın hemen kesilmesi ve çekim yarasının tamamen iyileşmesine kadar ilacın kullanılmaması
Açıklama: CAOMS kılavuzuna göre acil dental tedavi (ör. apse, çekim) gerektiren durumlarda, medikal konsültasyon ile bifosfonatın derhal kesilmesi ve soket epitelizasyonu (yara iyileşmesi) tamamen sağlanıncaya kadar ilacın tekrar kullanılmaması önerilir. AAOMS ise acil olmayan tedaviler için 3 ay kuralını işletir.

**Soru 2 (ID: de618eef-8f76-471d-b1f3-934c632cc558)**
Soru Kökü: Uzun yıllardır oral bifosfonat kullanan 60 yaşındaki diyabetik hastada oklüzal çürüklü bir diş saptanmıştır. Olası bir osteonekrozu (BRONJ) tetiklememek adına planlanacak dental tedavinin tipi oldukça önemlidir. Aşağıdaki işlemlerden hangisi bu hasta grubunda yüksek risk barındırmaz ve primer hekim tarafından genel pratikte güvenle uygulanabilir?
Doğru Şık (C): Kök kanal tedavisi, kompozit restorasyon ve subgingival olmayan non-invaziv periodontal debridman
Açıklama: Bifosfonat alanlarda kanama, kemik frezleme ve kemiği ağız florasına açan travmatik flep işlemlerinden kaçınılmalıdır. Bu nedenle rutin kuron/köprü restorasyonları, standart kök kanal tedavileri (taşkınlık yapılmamasına özen gösterilerek) ve kret altı küretaj içermeyen non-invaziv yüzeysel periodontal işlemler tam güvenlikle uygulanabilen, risk oluşturmayan işlemlerdir.

---

### ÇİFT 46 (Benzerlik: 0.72)

**Soru 1 (ID: 61805eaf-9e44-4ce9-a318-7b64027bc6cd)**
Soru Kökü: Mandibular molar diş apikalinde radyoopak lezyon izlenen bir hastada kondanse osteitis ön tanısı konmuştur. Bu lezyonun ayırıcı tanısında radyografik olarak radyoopasite verebilen lezyonlar dikkate alınmalıdır. Aşağıdakilerden hangisi kondanse osteitisin ayırıcı tanısında yer alan radyoopak lezyonlardan biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist karakteristik olarak radyolüsent (koyu renkli) bir lezyondur ve sınırları belirgin, kortikal kemik çevrili olabilir. Kondanse osteitis ise proliferatif yeni kemik yapımı nedeniyle radyopak (açık renkli) izlenir. Bu nedenle osteoskleroz, hipersementoz ve semental displazi gibi radyopak patolojiler ayırıcı tanıda yer alırken, kist radyolüsent olmasıyla kolayca ayırt edilir.

**Soru 2 (ID: b81ed3ca-912b-4a1b-9e34-52cec9faf472)**
Soru Kökü: Radyografide çene kemiğinde diş kökleriyle ilişkili radyoopak lezyonlar saptanan iki farklı hastanın değerlendirilmesinde; birinci hastada ilgili diş non-vital iken, ikinci hastada diş çürüksüz ve vitaldir. Bu ayırıcı tanı prensibine göre 'Kondanse Osteitis' (fokal skleroze osteomyelitis) tanısı için aşağıdakilerden hangisi **doğrudur**?
Doğru Şık (B): Etken dişin enfekte kök kanal sistemine endodontik tedavi uygulandıktan sonra lezyon genellikle gerileme gösterir.
Açıklama: Kondanse osteitis (skleroze osteitis), non-vital bir dişteki düşük toksisiteli pulpa enfeksiyonunun yarattığı lokal proliferatif kemik uyarımıdır. Etken, enfekte kanal sistemi olduğundan, dişin endodontik olarak başarılı şekilde tedavi edilmesi (bakteriyel kaynağın kurutulması) sonrasında kemikteki sklerotik alan genellikle geriler ve normalleşir.

---

### ÇİFT 47 (Benzerlik: 0.72)

**Soru 1 (ID: bc39a30c-1c34-4bef-9008-4adfbe4d63e5)**
Soru Kökü: İkinci ve üçüncü kuşak nitrojen içeren aminobifosfonatlar (zoledronat, ibandronat vb.), organizmadaki yıkım ve atılım yolları açısından incelendiğinde aşağıdaki metabolik özelliklerden hangisini sergilerler?
Doğru Şık (B): Vücutta herhangi bir enzim sistemiyle metabolik değişime uğramadan direkt böbreklerden süzülerek atılırlar.
Açıklama: Nitrojen içeren (aminobifosfonat) grubu ilaçlar, vücutta karaciğer dahil hiçbir organ veya sitokrom enzimi tarafından hidrolize ya da kimyasal değişime uğratılamaz. İlacın kemiğe bağlanmayan fazlalık kısmı, kan plazmasından tamamen aynı kimyasal formla glomerüllerden süzülerek idrar (böbrek) yoluyla atılır. Bu nedenle ilacın yan etkilerinden biri de renal toksisitedir.

**Soru 2 (ID: e79f6eac-65ec-4d89-a500-cac530737414)**
Soru Kökü: Osteoklastik kemik rezorpsiyonunu inhibe eden bifosfonatlar yapısal özelliklerine göre farklı metabolik yollar izlerler. Bu bağlamda, nitrojen içeren (aminobifosfonatlar) ve nitrojen içermeyen (alkilbifosfonatlar) bifosfonatların vücuttan atılım süreciyle ilgili aşağıdaki farmakokinetik ifadelerden hangisi doğrudur?
Doğru Şık (D): Nitrojen içermeyenler osteoklastlar tarafından metabolize edilirken, nitrojen içerenler metabolik değişime uğramadan böbreklerden atılır.
Açıklama: Birinci kuşak olan nitrojen içermeyen alkilbifosfonatlar osteoklastlar tarafından hücre içinde metabolize edilerek etkinlik gösterir. İkinci ve üçüncü kuşak olan nitrojen içeren aminobifosfonatlar ise daha etkilidir ve hiçbir metabolik değişime (yıkıma) uğramadan direkt olarak böbreklerden atılırlar.

---

### ÇİFT 48 (Benzerlik: 0.72)

**Soru 1 (ID: 0aaf5b6e-546f-48f2-a1e5-2c3fb2b6a84d)**
Soru Kökü: Diş kaynaklı lokal enfeksiyonlardan olan 'Akut Periapikal Apse' ile 'Akut Perikoronal Enfeksiyon' durumlarının klinik özellikleri karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Akut perikoronitiste ilgili dişin kronik kök absesi nedeniyle her zaman komşu diş apikallerinde şiddetli kemik erimesi izlenir.
Açıklama: Akut perikoronitis, yarı gömülü dişin üzerindeki yumuşak dokunun (gingival flebin) enfeksiyonudur; kök absesi veya apikal bir patoloji değildir. Erken dönemde çevre kemik defekti veya komşu kök yıkımı görülmez. Komşu kök rezorpsiyonu, akut fazın değil ancak çok uzun yıllar süren kronik irritasyon vakalarının bir bulgusu olabilir.

**Soru 2 (ID: b5bb1a0d-a510-45a3-8347-85f4153ad10c)**
Soru Kökü: Akut perikoronal enfeksiyon tablosunda, enfeksiyonun yayıldığı fasyal alanlara ve sistemik dolaşıma karışmasına bağlı olarak çeşitli bulgular ortaya çıkabilir. Aşağıdakilerden hangisi şiddetli bir perikoronitisin lokal veya sistemik belirtilerinden biri **değildir**?
Doğru Şık (E): İlgili diş pulpasının enfeksiyon nedeniyle akut nekroza uğraması
Açıklama: Perikoronitis dişin çevresindeki yumuşak dokunun (operkülum ve diş eti) enfeksiyonudur. Ağrı, trismus, ateş ve lenfadenopati gibi yaygın yumuşak doku semptomları yapar. Ancak enfeksiyon mineden veya sementten pulpaya doğrudan giremeyeceği için diş pulpasının sırf perikoronitise bağlı akut nekroza uğraması beklenen bir bulgu değildir. Dişin vitalitesi genellikle korunur.

---

### ÇİFT 49 (Benzerlik: 0.72)

**Soru 1 (ID: 5544351e-99ed-409c-8390-a5d6f7f841b2)**
Soru Kökü: Kemikte osteomiyelit enfeksiyonunun başlayabilmesi için bakteriyel virülansın ötesinde, savunma sisteminin zayıflaması veya lokal kemik damarlanmasının bozulması gerekir. Aşağıdaki sistemik patolojilerden hangisi, kaynak metne göre kemikte spesifik olarak hipovasküler duruma yol açarak osteomiyelite doğrudan predispozan faktör oluşturur?
Doğru Şık (B): Osteopetrozis
Açıklama: Radyasyon, osteopetrozis, Paget hastalığı ve sementoosseöz displazi çene kemiklerinde hipovasküler duruma (damarlanmada azalma) yol açarak enfeksiyona karşı savunmayı ciddi anlamda düşürür ve osteomiyelite direkt olarak zemin hazırlar. Sementoma (Sementoosseöz displazi dışındaki bağlamda fokal kalsifikasyonlar) doğrudan bir risk faktörü olarak sınıflandırılmamıştır.

**Soru 2 (ID: 9f3e7a56-a9e7-4c3b-9eb2-e6f0bf20dab0)**
Soru Kökü: Çene kemiklerinde kanlanma bozukluğu (hipovaskülarizasyon) yaratarak bölgesel doku direncini düşüren ve sekonder enfeksiyonlarla osteomyelite zemin hazırlayan lokal kemik hastalıkları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Hipersementoz
Açıklama: Radyoterapi (radyasyon), osteopetrozis (mermer kemik), Paget hastalığı ve sementoosseöz displazi; kemiğin fizyolojik yapısını bozup medüller damarlanmasını azaltarak osteomyelite (özellikle iskemik kökenli) yatkınlık yaratır. Hipersementoz ise kök yüzeyinde anormal sement birikimidir, çevre kemiğin genel kanlanmasını bozarak osteomyelit zemini hazırlamaz.

---

### ÇİFT 50 (Benzerlik: 0.72)

**Soru 1 (ID: 14fac124-710b-408c-817b-3c1f5bbdc9b2)**
Soru Kökü: Kronik osteomyelit vakalarının yönetiminde sekestranın (nekrotik kemik adacığının) boyutlarının, lokalizasyonunun ve iç yapısının saptanması cerrahi sekestrektomi açısından hayati önem taşır. Çok yoğun sklerotik kemiğe sahip olgularda dahi kemik içi yapıyı ve sekestrayı ortaya çıkarmak için **en üstün ve tercih edilen** görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Bilgisayarlı Tomografi (BT) veya Koni Işınlı BT (KIBT)
Açıklama: Kronik osteomyelitte korteks kalınlaştığında veya spongiyöz kemik yoğun bir skleroza uğradığında (özellikle süperpozisyon olan mandibulada), iki boyutlu filmlerde sekestrı görmek zorlaşır. Kemiğin ince kesitsel detaylarını, sekestrı ve iç yapıyı göstermekte en güvenilir yöntem BT (veya KIBT) dir. MRG yumuşak doku veya ilik ödemi için iyidir ancak kalsifiye kemik içi detayı (sekestr) saptamakta BT kadar üstün değildir.

**Soru 2 (ID: 2fe30cf1-b6e9-42ea-9d64-c084ef5e72eb)**
Soru Kökü: İleri evre yassı hücreli karsinom tedavisi sonrası sol mandibulada osteoradyonekroz gelişen 65 yaşında bir kadın hastanın tedavisi planlanmaktadır. Bölgedeki mevcut enfeksiyonun çevre yumuşak dokulara invazyon derinliğini veya primer tümörün olası lokal nüksünü (rekürrens) birbirinden ayırmak klinik muayene ile mümkün olmamıştır.
Bu durumda, yumuşak doku ilişkisini haritalamak için tercih edilmesi gereken en ideal radyolojik görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Kontrastlı MRG (Manyetik Rezonans Görüntüleme)
Açıklama: Osteoradyonekroz hastalarında sert dokuyu ilgilendiren yıkım en iyi BT ile değerlendirilse de, hastalığın çevre yumuşak dokuya sızması, ödemli reaksiyonları ve özellikle primer tümörün aynı bölgede nüks edip etmediğinin tespiti için sıvı ve vasküler yapılara duyarlı olan MRG kullanılır. Yumuşak dokunun ayrıntılı kontrastlanması için iv Gadolinyum türevi ajanlar içeren kontrastlı MRG altın standart görüntüleme yöntemidir.

---

### ÇİFT 51 (Benzerlik: 0.72)

**Soru 1 (ID: 14fac124-710b-408c-817b-3c1f5bbdc9b2)**
Soru Kökü: Kronik osteomyelit vakalarının yönetiminde sekestranın (nekrotik kemik adacığının) boyutlarının, lokalizasyonunun ve iç yapısının saptanması cerrahi sekestrektomi açısından hayati önem taşır. Çok yoğun sklerotik kemiğe sahip olgularda dahi kemik içi yapıyı ve sekestrayı ortaya çıkarmak için **en üstün ve tercih edilen** görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Bilgisayarlı Tomografi (BT) veya Koni Işınlı BT (KIBT)
Açıklama: Kronik osteomyelitte korteks kalınlaştığında veya spongiyöz kemik yoğun bir skleroza uğradığında (özellikle süperpozisyon olan mandibulada), iki boyutlu filmlerde sekestrı görmek zorlaşır. Kemiğin ince kesitsel detaylarını, sekestrı ve iç yapıyı göstermekte en güvenilir yöntem BT (veya KIBT) dir. MRG yumuşak doku veya ilik ödemi için iyidir ancak kalsifiye kemik içi detayı (sekestr) saptamakta BT kadar üstün değildir.

**Soru 2 (ID: f3293d69-e0bc-4ec0-9654-966e150ab1e0)**
Soru Kökü: 35 yaşında kadın hasta, alt çenesinde ani başlayan ağrı, şişlik ve ateş şikayetiyle başvuruyor. Panoramik radyografide henüz belirgin bir kemik yıkımı izlenmeyen hastada, erken evre akut osteomiyelite bağlı anormal kemik iliği ödemini değerlendirmek isteniyor. 
Bu hastada kemik iliği ödemini en erken ve en net gösterecek görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (C): T2 ağırlıklı manyetik rezonans görüntüleme (MRG)
Açıklama: Osteomiyelitin erken akut fazında kemik yıkımı %30-50 seviyesine ulaşana kadar konvansiyonel grafiler ve BT yetersiz kalabilir, ancak enflamatuar sıvı artışına bağlı kemik iliği ödemi ilk olarak gelişir. MRG'nin T2 ağırlıklı serileri, dokulardaki sıvı (ödem, püy) içeriğine karşı son derece duyarlı olduğu için kemik iliğindeki bu anormal ödemi en iyi tespit eden tetkiktir. T1 ağırlıklı kesitler yağ dokusu ve anatomi için kullanılırken, sıvı bazlı patolojiler T2 kesitlerde hiperintens (parlak) olarak öne çıkar.

---

### ÇİFT 52 (Benzerlik: 0.72)

**Soru 1 (ID: 2644bef0-529c-4031-a6c2-4bfd1cfd45b1)**
Soru Kökü: American Dental Association (ADA) klinik pratik kılavuzuna göre, kronik oral bifosfonat kullanan ve ağzında yaygın dental sorunları olan bir hastada acil olmayan rutin dental cerrahiler (örn. planlı çekimler, lokalize flap operasyonları) planlanırken çenedeki iyileşme rezervini korumak adına her bir sekstant arası bırakılması önerilen spesifik zaman aralığı (dinlendirme süresi) aşağıdakilerden hangisidir?
Doğru Şık (D): 2 ay
Açıklama: ADA, osteonekroz riskini dağıtmak ve kemik iyileşme kapasitesini (turnover yorgunluğunu) dengelemek için, acil olmayan cerrahi/dental prosedürlerde her altılı bölge (sekstant) işlemleri arasında en az 2 aylık bir zaman aralığı (dinlendirme) bırakılmasını önermektedir.

**Soru 2 (ID: ad4037a0-5f51-4a1f-a878-a5252d2e14b2)**
Soru Kökü: Sistemik kemik metastazı veya malign hiperkalsemi nedeniyle kısa süre içinde intravenöz (IV) bifosfonat tedavisine başlanması planlanan bir hastada, restorasyon imkanı olmayan dişlerin profikaltik çekimi gerçekleştirilmiştir. Çekim boşluklarında tam mukozal kapanmanın (primer epitelizasyon) sağlanıp sistemik bifosfonat ilacına güvenle başlanabilmesi için hastanın cerrahi sonrası en az ne kadar süre (gün) beklenmesi tıp pratiğinde tavsiye edilmektedir?
Doğru Şık (A): 14 - 21 gün
Açıklama: IV bifosfonatlara başlanmadan önce diş hekimi hastayı değerlendirip cerrahi işlemleri bitirmelidir. Diş çekimi yapıldıysa, yumuşak doku kapanması ve yara bölgesinin güvenli bir şekilde iyileşebilmesi için ilaca başlanmadan önce asgari 14-21 gün beklenmelidir.

---

### ÇİFT 53 (Benzerlik: 0.72)

**Soru 1 (ID: 494e5553-dbaa-400a-92fd-9d10047428ad)**
Soru Kökü: Akut periapikal apse tablosu tedavi edilmediğinde veya drene edilmediğinde çevre dokulara yayılarak çeşitli ciddi patolojilere neden olabilir. Aşağıdakilerden hangisi bu progresif tablonun beklenen yayılım komplikasyonlarından biri **değildir**?
Doğru Şık (E): Kondanse osteitis
Açıklama: Akut periapikal apse direnaj bulamazsa çevre fasyal boşluklara yayılarak selülit, flegmon, osteomyelit veya cilt-mukoza fistülleri oluşturabilir. Kondanse osteitis ise akut değil, düşük virülanslı kronik bir enfeksiyona karşı kemiğin verdiği sklerotik (proliferatif) bir yanıttır ve akut apsenin hızlı yayılım komplikasyonu değildir.

**Soru 2 (ID: 896fbe27-e295-47fb-b65f-f88d6915f379)**
Soru Kökü: Akut periapikal (dentoalveolar) apse gelişiminde, infeksiyonun periapikal dokulara ulaşmasının temel kaynağı aşağıdakilerden hangisidir?
Doğru Şık (C): İnfekte kök kanalı
Açıklama: Akut dentoalveolar apse, temel olarak kök kanalından kaynaklanan enfeksiyonun apikal foramenden periapikal dokulara geçmesiyle oluşur. Diğer dokular komşuluk yoluyla enfekte olabilir ancak birincil inflamatuar odak ve enfeksiyon kaynağı her zaman nekrotik ve enfekte kök kanalıdır. Periodontal ligament patolojileri ise daha çok periodontal apse tablosu oluşturur.

---

### ÇİFT 54 (Benzerlik: 0.72)

**Soru 1 (ID: 62ae620e-06bd-492b-b1d3-f2d0f9502705)**
Soru Kökü: Bifosfonat grubu ajanlar, moleküler yapılarındaki yan zincir farklılıklarına göre birinci kuşak (alkilbifosfonatlar) ve ikinci/üçüncü kuşak (aminobifosfonatlar) olmak üzere temelde ikiye ayrılır.
İkinci ve üçüncü kuşak olan nitrojen içeren bifosfonatların, birinci kuşak nitrojen içermeyen bifosfonatlara karşı en belirgin klinik avantajı aşağıdakilerden hangisidir?
Doğru Şık (B): Osteoklastik kemik yıkımı inhibisyonunda farmakolojik olarak daha yüksek potans ve etkiye sahip olmaları
Açıklama: Zoledronik asit, alendronat gibi nitrojen içeren bifosfonatlar, nitrojen içermeyen gruba (örn. etidronat) kıyasla osteoklastik yıkımı inhibe etmede çok daha güçlü ve etkilidir. Hatta bu güçlü etki nedeniyle hücre döngüsüne müdahale ederek çok daha sık ve şiddetli olarak çene kemiği osteonekrozuna sebep olurlar. Karaciğerde değil, metabolize olmadan direkt böbrek yoluyla atılırlar.

**Soru 2 (ID: e79f6eac-65ec-4d89-a500-cac530737414)**
Soru Kökü: Osteoklastik kemik rezorpsiyonunu inhibe eden bifosfonatlar yapısal özelliklerine göre farklı metabolik yollar izlerler. Bu bağlamda, nitrojen içeren (aminobifosfonatlar) ve nitrojen içermeyen (alkilbifosfonatlar) bifosfonatların vücuttan atılım süreciyle ilgili aşağıdaki farmakokinetik ifadelerden hangisi doğrudur?
Doğru Şık (D): Nitrojen içermeyenler osteoklastlar tarafından metabolize edilirken, nitrojen içerenler metabolik değişime uğramadan böbreklerden atılır.
Açıklama: Birinci kuşak olan nitrojen içermeyen alkilbifosfonatlar osteoklastlar tarafından hücre içinde metabolize edilerek etkinlik gösterir. İkinci ve üçüncü kuşak olan nitrojen içeren aminobifosfonatlar ise daha etkilidir ve hiçbir metabolik değişime (yıkıma) uğramadan direkt olarak böbreklerden atılırlar.

---

### ÇİFT 55 (Benzerlik: 0.72)

**Soru 1 (ID: c01f5698-ea0e-4723-876f-9b092a337c7b)**
Soru Kökü: Otuz beş yaşındaki erkek hasta, üst sağ birinci büyük azı dişinde sürekli bir dolgunluk hissi ve palpasyonda ağrı şikayetiyle başvurmuştur. Radyografide periodontal aralıkta genişleme izlenmiş, ancak apsede görülen fluktuasyon veya fluktuan şişlik saptanmamıştır. Bu klinik tablonun akut apikal periodontitis aşamasında olduğunu ve henüz apikal apseye dönüşmediğini gösteren hücresel düzeydeki karakteristik aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitis aşamasında, kemik harabiyetine neden olacak osteoklastik hücre aktivasyonu henüz başlamamıştır. Eğer irritan ajan doku destrüksiyonuna neden olacak kadar güçlü bir seviyeye ulaşırsa püy formasyonu ve ardından apse oluşumu gerçekleşir. A ve D şıkları granülom ve kronik apse gibi kronik lezyonları, B şıkkı ise akut dentoalveolar apsenin mekanizmasını tanımlar.

**Soru 2 (ID: d476b3e5-583a-41fc-9e0f-de896212cbc1)**
Soru Kökü: 21 yaşında erkek hasta, sol alt yirmi yaş dişi bölgesinde ani başlayan şiddetli ağrı ve ağız açmada kısıtlılık şikayetiyle başvurmuştur. İlgili bölgede dişi örten gingival flep altında yiyecek birikimi ve belirgin eritem saptanmıştır. Semptomların henüz yeni başladığı bu akut perikoronal enfeksiyon olgusunun radyografik değerlendirmesinde **en olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kısa süreli bir olgu olduğu için kemik defekti izlenmez ve folikül sınırları normaldir.
Açıklama: Akut ve kısa süreli perikoronal enfeksiyon olgularında henüz kemik yıkımı başlamadığı için kemik defekti yoktur ve folikül sınırları normal olarak izlenir. Retromolar kemik defekti, folikül sınırlarında kalınlaşma ve komşu diş kökünde rezorbsiyon; akut ataklardan ziyade tekrarlayan ve uzun süreli kronik perikoronit vakalarının radyolojik bulgularıdır. Erken dönemde yalnızca yumuşak doku semptomları hakimdir.

---

### ÇİFT 56 (Benzerlik: 0.71)

**Soru 1 (ID: 233bc945-8384-42c7-b158-49d455132bc8)**
Soru Kökü: Yirmi sekiz yaşında kadın hasta, sağ üst birinci büyük azı dişinde sadece ara sıra hissettiği çok hafif bir rahatsızlık şikayetiyle başvuruyor. Radyografik incelemede apikal bölgede sınırları belirgin olmayan ve radyopak sklerotik trabeküllerle çevrili bir radyolüsent alan tespit ediliyor. Pü formasyonu ara sıra mukozadan drene olmaktadır. Bu hastada izlenen klinik tablo (kronik periapikal apse) için en uygun genel tedavi yaklaşımı aşağıdakilerden hangisidir?
Doğru Şık (D): Endodontik tedavi
Açıklama: Kronik periapikal apsede enfeksiyon kaynağı dişin içindeki nekrotik kanaldır ve tedavisi genel olarak endodontik tedavidir. Kök kanalının dezenfekte edilip doldurulmasıyla irritan ortadan kalkar ve periapikal bölgedeki sklerotik tablo zamanla iyileşir. Sadece antibiyotik vermek enfeksiyon kaynağını yok etmediği için tedavide tek başına anlamsızdır.

**Soru 2 (ID: 9b880fc5-7fa6-43f8-82f4-aae412930232)**
Soru Kökü: Yirmi dokuz yaşında kadın hastanın mandibular sol birinci büyük azı dişine sekiz ay önce endodontik tedavi uygulanmıştır. Kontrol radyografisinde, daha önce dişin apikalinde tespit edilen "kondanse osteitis" lezyonunda belirgin bir küçülme ve gerileme olduğu saptanmıştır. Bu radyografik düzelmenin temel biyolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Endodontik tedavi ile düşük virülanslı inflamatuar irritanın ortadan kalkması
Açıklama: Kondanse osteitis bir enflamatuar reaksiyon olduğundan, irritan etkenin (kök kanalı içindeki toksin ve bakterilerin) başarılı bir endodontik tedavi ile ortadan kaldırılmasıyla kemikteki hücresel yapı normal dengesine döner. Artmış osteoblastik aktivite durur ve kemik remodelajı sonucu sklerotik görünüm genellikle geriler ve trabeküler kemik normale döner. Kök kanal patlarının doğrudan kemik eriticiliği bu düzelmeyi açıklamaz.

---

### ÇİFT 57 (Benzerlik: 0.71)

**Soru 1 (ID: 135b8703-0e51-4072-be32-a11b66199dfc)**
Soru Kökü: 28 yaşında kadın hasta, mandibulada geniş bir alana yayılan, sınırları tam seçilemeyen radyoopasite (skleroz) tablosu ile diş hekimliğine sevk edilmiştir. Radyolojik olarak hastanın sklerozan osteomiyelit varyantlarından birine sahip olduğu düşünülmektedir.
Aşağıdakilerden hangisi çene kemiklerinde artmış radyoopasite ile karakterize edilen bu kronik sklerozan grubunun varyantları veya ilgili klinik formları arasında **bulunmaz**?
Doğru Şık (E): Akut süpüratif osteomiyelit
Açıklama: Akut süpüratif osteomiyelit, hastalığın hızla ilerleyen, bol pü üreten ve destrüktif litik fazı olup radyolojik olarak bir skleroz (kemik yapımı/yoğunlaşması) üretmez. Tam tersine kemiği yıkarak radyolüsensiye neden olur. Fokal skleroz, diffüz skleroz, primer kronik varyant ve Garre'nin proliferatif periostiti ise savunma hücrelerinin uyarılarak yoğun hiperkalsifiye yeni kemik ürettikleri kronik-sklerozan tablolardır.

**Soru 2 (ID: 1367e638-367e-4163-a47e-17ea26e141c3)**
Soru Kökü: Çenelerde değişen derecelerde yaygın skleroz, rezorpsiyon ve periosteal hiperplazi ile karakterize edilen kronik osteomiyelitin ayırıcı tanısı değerlendirilmektedir.
Aşağıdaki hastalıklardan hangisi, özellikle tek bir odakla sınırlı kalmayıp tüm mandibulayı difüz olarak etkilemesi nedeniyle kronik diffüz osteomiyelit ile ayırıcı tanıya giren **başlıca** patolojidir?
Doğru Şık (B): Paget hastalığı
Açıklama: Osteomiyelit ilerlediğinde geniş alanlarda osteolitik-osteosklerotik mikst dokular yaratarak kemik silüetini bozar. Paget hastalığı (osteitis deformans), lokal bir enfeksiyona bağlı olmaksızın tüm kemiği (çoğunlukla tüm mandibulayı veya maksillayı) aynı anda etkileyerek hipersementoz ve 'pamuk atığı' şeklindeki yaygın mikst opasiteler ile karakterizedir. Fokal veya periapikal displaziler sınırlı bölgeleri etkilerken, Paget hastalığının tüm mandibulayı tutan dağınık doğası osteomiyelitin diffüz formunu birebir taklit eder.

---

### ÇİFT 58 (Benzerlik: 0.71)

**Soru 1 (ID: 670708f6-f296-4e7f-8033-26dd58dcddfa)**
Soru Kökü: Bifosfonatların çene kemiklerinde ciddi osteonekroz yapabilme potansiyelleri, kemik rezorpsiyonunu hücresel düzeyde bozmasından kaynaklanmaktadır.
Aşağıdakilerden hangisi bifosfonatların osteoklastik yıkımı inhibe ettiği hücresel mekanizmalardan biri **bulunmaz**?
Doğru Şık (C): Yüksek dozlarda verildiğinde kemik iliğindeki osteoblast diferansiyasyonunu çok güçlü şekilde uyarıp hiperkalsifikasyon yapmak
Açıklama: Bifosfonatlar osteoklast fonksiyonunu ve kemik rezorpsiyonunu bloke ederek kemik kütlesini korurlar. Terapötik (çok düşük) dozlarda osteoblast differansiyasyonunu uyarabildikleri bildirilse de, sistemik hastalıklar için yüksek dozlarda verildiklerinde osteoblastik aktiviteyi asla stimüle etmezler; tam tersine osteoblastlar üzerinde sitotoksik etki oluşturarak onların da apoptoza uğramasına ve kemik yapımının tamamen durmasına yol açarlar. C seçeneği mekanizmaya tamamen terstir.

**Soru 2 (ID: 8e46ea2d-7b34-443c-94f9-122958e31cff)**
Soru Kökü: Osteoklastları inhibe ederek kemik yapım-yıkım dengesini sağlayan bifosfonatlar, çene osteonekrozu (BRONJ) riskine rağmen medikal tedavilerde yaygın olarak kullanılmaktadır.
Bu ilaç sınıfı, vücutta fizyolojik olarak mineralizasyonu düzenleyen ancak hızla yıkılan hangi endojen molekülün metabolize olmayan sentetik analoğu olarak tasarlanmıştır?
Doğru Şık (A): İnorganik pirofosfatlar
Açıklama: Bifosfonatlar, normalde vücutta bulunan ve hidroksiapatit kristallerinin büyümesini engelleyen endojen 'inorganik pirofosfat' moleküllerinin sentetik analoglarıdır. Vücuttaki pirofosfatlar doku enzimlerince çok hızlı yıkılırken, bifosfonat formunda molekülün merkezindeki oksijen atomunun karbonla değiştirilmesi enzimatik sindirimi bloke eder, bu sayede kemik dokuda uzun yıllar metabolize olmadan stabilitesini korur.

---

### ÇİFT 59 (Benzerlik: 0.71)

**Soru 1 (ID: 9930e8ea-20be-4c7b-adfb-090c21020c1d)**
Soru Kökü: 62 yaşındaki bir kadın hasta, sağ mandibulasında diş çekimi sonrası aylar geçmesine rağmen iyileşmeyen, mukoza bütünlüğünün bozulduğu ve kemiğin açıkta kaldığı bir saha ile başvurmuştur. Hastanın radyografisinde osteolitik alanlar ve belirgin radyopak sekestrlar izlenmektedir. Klinik görünümü kronik osteomyelite çok benzeyen bu tablonun 'Osteoradyonekroz' olduğunu doğrulamak için hastadan alınacak **en belirleyici** tıbbi anamnez bilgisi aşağıdakilerden hangisidir?
Doğru Şık (D): Baş-boyun bölgesinde yer alan bir tümör için terapötik ışınlama tedavisi görmüş olması
Açıklama: Osteoradyonekroz; radyolojik ve klinik (ağrı, açık nekrotik kemik, sekestr, enfeksiyon) olarak osteomiyelitten ayrılamaz. Tanıyı kesinleştiren tek unsur, hastanın o bölgeye yönelik 'radyoterapi (terapötik ışınlama)' hikayesinin varlığıdır. Bifosfonat hikayesi olsaydı bu MRONJ (ilaca bağlı osteonekroz) olurdu.

**Soru 2 (ID: e60f70e4-5b09-46b0-8d30-fb65d132d0a3)**
Soru Kökü: Amerikan Ağız ve Çene-Yüz Cerrahları Birliği (AAOMS) kriterlerine göre, bir hastaya kesin olarak 'bifosfonatla ilişkili çene osteonekrozu' tanısı konulabilmesi için üç temel klinik ve anamnez şartının eş zamanlı olarak sağlanması aranır. Aşağıdakilerden hangisi bu kesin tanı kriterlerinden biri **değildir**?
Doğru Şık (D): Radyolojik değerlendirmede sınırları belirgin bir kemik içi sekestr formasyonunun izlenmesi
Açıklama: AAOMS BRONJ (MRONJ) tanı kriterleri 3 adettir: 1) Devam eden veya geçmişte bifosfonat tedavisi almak, 2) Baş-boyun radyoterapisi öyküsünün OLMAMASI (osteoradyonekrozu dışlamak için), 3) Maksilla/mandibulada en az 8 haftadır kapanmayan ekspoze nekrotik kemik varlığı. Radyolojik sekestr görünümü BRONJ'a veya genel osteomiyelite eşlik edebilir ancak tanı koydurucu spesifik 'kriter' listesinde yer almaz.

---

### ÇİFT 60 (Benzerlik: 0.71)

**Soru 1 (ID: 70fcffe3-26e7-4e27-bfb1-0af50022b598)**
Soru Kökü: Damar yoluyla infüze edilen veya oral alınan bifosfonatların sistemik kan plazmasındaki yarılanma ömrü sadece 0,5-2 saat gibi kısa bir süre olmasına rağmen, ilaç çok uzun yıllar boyunca kemik yapısında stabilitesini korur.
İlacın kan dolaşımından çok hızlı şekilde çekilip yalnızca iskelet sistemine çökmesi, etken maddenin biyokimyasal olarak kemikteki hangi spesifik bileşene sahip olduğu yüksek afinite ile açıklanır?
Doğru Şık (E): İnorganik hidroksiapatit kristalleri
Açıklama: Bifosfonatlar, kemiğin inorganik (mineral) porsiyonunu oluşturan hidroksiapatit kristallerine karşı olağanüstü yüksek bir kimyasal afinite (bağlanma gücü) sergilerler. Bu sayede dolaşıma giren ilacın büyük kısmı birkaç saat içinde hidroksiapatit havuzunda depolanır. Organik bileşen olan Tip 1 kollajene veya doğrudan hücrelere değil, kalsifiye matrikse bağlanarak bölgeye gelen osteoklastı hedef alırlar.

**Soru 2 (ID: 8e46ea2d-7b34-443c-94f9-122958e31cff)**
Soru Kökü: Osteoklastları inhibe ederek kemik yapım-yıkım dengesini sağlayan bifosfonatlar, çene osteonekrozu (BRONJ) riskine rağmen medikal tedavilerde yaygın olarak kullanılmaktadır.
Bu ilaç sınıfı, vücutta fizyolojik olarak mineralizasyonu düzenleyen ancak hızla yıkılan hangi endojen molekülün metabolize olmayan sentetik analoğu olarak tasarlanmıştır?
Doğru Şık (A): İnorganik pirofosfatlar
Açıklama: Bifosfonatlar, normalde vücutta bulunan ve hidroksiapatit kristallerinin büyümesini engelleyen endojen 'inorganik pirofosfat' moleküllerinin sentetik analoglarıdır. Vücuttaki pirofosfatlar doku enzimlerince çok hızlı yıkılırken, bifosfonat formunda molekülün merkezindeki oksijen atomunun karbonla değiştirilmesi enzimatik sindirimi bloke eder, bu sayede kemik dokuda uzun yıllar metabolize olmadan stabilitesini korur.

---

### ÇİFT 61 (Benzerlik: 0.71)

**Soru 1 (ID: 61805eaf-9e44-4ce9-a318-7b64027bc6cd)**
Soru Kökü: Mandibular molar diş apikalinde radyoopak lezyon izlenen bir hastada kondanse osteitis ön tanısı konmuştur. Bu lezyonun ayırıcı tanısında radyografik olarak radyoopasite verebilen lezyonlar dikkate alınmalıdır. Aşağıdakilerden hangisi kondanse osteitisin ayırıcı tanısında yer alan radyoopak lezyonlardan biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist karakteristik olarak radyolüsent (koyu renkli) bir lezyondur ve sınırları belirgin, kortikal kemik çevrili olabilir. Kondanse osteitis ise proliferatif yeni kemik yapımı nedeniyle radyopak (açık renkli) izlenir. Bu nedenle osteoskleroz, hipersementoz ve semental displazi gibi radyopak patolojiler ayırıcı tanıda yer alırken, kist radyolüsent olmasıyla kolayca ayırt edilir.

**Soru 2 (ID: e9eb45b6-2cd8-4d16-9844-28a499661c49)**
Soru Kökü: Çenelerde hızlı litik kemik yıkımı ve periosteal yeni kemik reaksiyonu oluşturan hastalıkların radyolojik görünümleri osteomyeliti taklit edebilir ve yanlış tanıya yol açabilir. Aşağıdaki lezyonlardan hangisi mandibulada destrüktif osteomyelit benzeri bu kemik yıkım paternini oluşturan, primer ayırıcı tanıda yer alan durumlardan biri **değildir**?
Doğru Şık (C): Osteoma
Açıklama: Osteosarkom, lenfoma/lösemi, skuamöz hücreli karsinom invazyonu ve Langerhans hücreli histiyositoz; kemikte agresif litik yıkım yapan, sınırları belirsiz destrüksiyona yol açan ve periostu uyararak reaktif yeni kemik oluşumu (osteomyelite benzer sekestr veya soğan kabuğu) yapabilen hastalıklardır. Osteoma ise iyi sınırlı, son derece yavaş büyüyen, dışarıya doğru ekzofitik uzanan benign bir kortikal kemik hamartomudur ve agresif osteomyelit yıkımını taklit etmez.

---

### ÇİFT 62 (Benzerlik: 0.71)

**Soru 1 (ID: 513b4512-68f7-4082-8bca-049789c85cc9)**
Soru Kökü: 55 yaşında kontrolsüz diyabet hastası erkek, alt çenesindeki diş kaynaklı enfeksiyonun hızla yayılması sonrası boynunda 'boğa boynu' olarak adlandırılan geniş bir şişlik, tahta sertliğinde dil ve ağız açmada kısıtlılık ile başvurmuştur. Muayenede dokuların kangrenli hale geldiği görülmüştür. Bu klinik tablo **en spesifik** olarak aşağıdakilerden hangisi ile tanımlanır?
Doğru Şık (D): Ludwig anjini
Açıklama: Submandibular, submental ve sublingual fasial boşlukların iki taraflı, eşzamanlı olarak enfekte olması, dokuların tahta sertliğini alarak (flegmonöz selülit) kangrenli hale gelebilmesi ve boynun ciddi şekilde şişmesi (boğa boynu) Ludwig anjininin tipik, yaşamı tehdit eden klinik manifestasyonudur. Osteomyelit türleri lokalize kemik destrüksiyonu ve sekestr yapar, bu düzeyde bilateral yumuşak doku boğulmasına neden olmazlar.

**Soru 2 (ID: b6b5df17-2bfb-47ee-9a6e-8e55e8937790)**
Soru Kökü: Kırk yaşındaki erkek hasta, alt çenesindeki şiddetli ağrı, yutma güçlüğü ve boyun bölgesinde 'boğa boynu' tarzı şişlikle acil servise getirilmiştir. Klinik muayenede hastanın ağzının açık kaldığı ve dilinin yukarı itildiği saptanmıştır. Bu hastada gelişen Ludwig anjininde, enfeksiyonun bilateral (iki taraflı) olarak yayılım gösterdiği üç yüz boşluğu aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (E): Submandibular, submental, sublingual
Açıklama: Ludwig anjini, her iki taraftaki submandibular, submental ve sublingual boşlukları (toplamda üç çift yüz boşluğu) bilateral olarak tutan şiddetli ve hızla yayılan bir flegmondur. Bu boşlukların ödemi dili yukarı ve arkaya iterek solunum yolunu tehdit eder.

---

### ÇİFT 63 (Benzerlik: 0.71)

**Soru 1 (ID: 670708f6-f296-4e7f-8033-26dd58dcddfa)**
Soru Kökü: Bifosfonatların çene kemiklerinde ciddi osteonekroz yapabilme potansiyelleri, kemik rezorpsiyonunu hücresel düzeyde bozmasından kaynaklanmaktadır.
Aşağıdakilerden hangisi bifosfonatların osteoklastik yıkımı inhibe ettiği hücresel mekanizmalardan biri **bulunmaz**?
Doğru Şık (C): Yüksek dozlarda verildiğinde kemik iliğindeki osteoblast diferansiyasyonunu çok güçlü şekilde uyarıp hiperkalsifikasyon yapmak
Açıklama: Bifosfonatlar osteoklast fonksiyonunu ve kemik rezorpsiyonunu bloke ederek kemik kütlesini korurlar. Terapötik (çok düşük) dozlarda osteoblast differansiyasyonunu uyarabildikleri bildirilse de, sistemik hastalıklar için yüksek dozlarda verildiklerinde osteoblastik aktiviteyi asla stimüle etmezler; tam tersine osteoblastlar üzerinde sitotoksik etki oluşturarak onların da apoptoza uğramasına ve kemik yapımının tamamen durmasına yol açarlar. C seçeneği mekanizmaya tamamen terstir.

**Soru 2 (ID: b8144cad-60b1-4aba-9eee-209de33ba1b9)**
Soru Kökü: Malign tümörlerin kemik metastazlarını önlemek amacıyla multipl miyelom gibi durumlarda sistemik olarak uygulanan bifosfonatların, osteoklastları baskılayan anti-rezorptif özellikleri dışında, metastaz sürecini doğrudan sekteye uğratan farmakodinamik etkisi aşağıdakilerden hangisidir?
Doğru Şık (C): Damarsal daralmalara neden olan anjiyogenezisi sistemik olarak engellemeleri
Açıklama: Bifosfonatlar, metastatik tümör hücrelerinin kemik dokusunda yerleşip yeni damar ağı kurmasını (anjiyogenezis) güçlü şekilde engelleyerek damarsal daralmalara neden olurlar. Kanlanmanın (anjiyogenezisin) bozulması metastaz zincirinin durdurulmasındaki ana yan etki mekanizmalarından biridir.

---

### ÇİFT 64 (Benzerlik: 0.71)

**Soru 1 (ID: 61805eaf-9e44-4ce9-a318-7b64027bc6cd)**
Soru Kökü: Mandibular molar diş apikalinde radyoopak lezyon izlenen bir hastada kondanse osteitis ön tanısı konmuştur. Bu lezyonun ayırıcı tanısında radyografik olarak radyoopasite verebilen lezyonlar dikkate alınmalıdır. Aşağıdakilerden hangisi kondanse osteitisin ayırıcı tanısında yer alan radyoopak lezyonlardan biri **değildir**?
Doğru Şık (E): Radiküler kist
Açıklama: Radiküler kist karakteristik olarak radyolüsent (koyu renkli) bir lezyondur ve sınırları belirgin, kortikal kemik çevrili olabilir. Kondanse osteitis ise proliferatif yeni kemik yapımı nedeniyle radyopak (açık renkli) izlenir. Bu nedenle osteoskleroz, hipersementoz ve semental displazi gibi radyopak patolojiler ayırıcı tanıda yer alırken, kist radyolüsent olmasıyla kolayca ayırt edilir.

**Soru 2 (ID: d7f094f0-6742-46ae-9d4f-b9bde8e00412)**
Soru Kökü: Radyografik muayenede alt çene posterior bölgede sınırları diffüz, çevresinde radyolüsent bir alan bulunmayan radyopak bir lezyon saptanmıştır. İlgili diş vitaldir ve herhangi bir klinik belirti yoktur. Bu bulgular doğrultusunda, lezyonun osteoskleroz tanısı almasını sağlayan ve kondanse osteitisten ayıran en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): İlgili dişin vital olması ve intraosseöz enfeksiyon kaynağının bulunmaması
Açıklama: Osteoskleroz vital dişin apikalinde bulunurken, kondanse osteitis enfekte ya da nonvital dişin (pulpa dejenerasyonu) neden olduğu intraosseöz enfeksiyonla birliktedir. Her ikisi de radyopak sklerotik alan yaratmasına rağmen enfeksiyon kaynağının yokluğu ve vitalite osteoskleroz için ayırıcıdır.

---

### ÇİFT 65 (Benzerlik: 0.71)

**Soru 1 (ID: 12df3869-0038-4b6f-b231-627e128f84aa)**
Soru Kökü: Baş boyun kanseri nedeniyle 60 Gray radyoterapi öyküsü olan bir hastada, çene kemiklerinde azalan damarlanma sonucu osteoradyonekroz (radyasyon osteomiyeliti) riski mevcuttur. Bu tabloda, ekstraoral şişlik, fistül veya pürülan drenaj gibi diğer enflamatuar bulgular henüz ortaya çıkmadan ilk karşılaşılan klinik uyarıcı işaret aşağıdakilerden hangisidir?
Doğru Şık (A): Yoğun ağrı
Açıklama: Osteoradyonekrozda kemikte hücre azalması ve kronik hipoksi mevcuttur. Drenaj, ekspansiyon veya şişlik gibi klasik enfeksiyon/osteomiyelit bulguları ortaya çıkmadan çok daha önce, radyasyon almış bölgede izlenen ilk işaret, tipik olarak sinsi ve yoğun bir ağrıdır.

**Soru 2 (ID: 9f06f37f-b16d-4664-8f8d-67eca6d945a4)**
Soru Kökü: Baş-boyun bölgesi malignitelerinin tedavisinde yüksek doz (40-80 gray) terapötik radyasyon alan hastalarda çenelerde osteoradyonekroz gelişmesinin hücresel düzeydeki temel fizyopatolojik mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik damar yapısında geri dönüşümsüz obstrüksiyon, hücre sayısında azalma ve kronik hipoksi tablosunun oluşması
Açıklama: Radyoterapi (özellikle 40 Gy üstü) kemiği besleyen kapiller damar ağında endarteritis obliterans'a (damar lümeninin kapanması) neden olur. Kemiğin kanlanması kesildiği için, osteositler ve iliğin hücresel elemanları beslenemeyerek ölür. Böylece radyasyona maruz kalan kemik; hipoksik (oksijensiz), hipovasküler (damarsız) ve hiposelüler (hücresiz) kalarak enfeksiyona karşı tüm direnç mekanizmasını yitirir ve minimal bir travmada dahi osteoradyonekroza sürüklenir.

---

### ÇİFT 66 (Benzerlik: 0.71)

**Soru 1 (ID: 2644bef0-529c-4031-a6c2-4bfd1cfd45b1)**
Soru Kökü: American Dental Association (ADA) klinik pratik kılavuzuna göre, kronik oral bifosfonat kullanan ve ağzında yaygın dental sorunları olan bir hastada acil olmayan rutin dental cerrahiler (örn. planlı çekimler, lokalize flap operasyonları) planlanırken çenedeki iyileşme rezervini korumak adına her bir sekstant arası bırakılması önerilen spesifik zaman aralığı (dinlendirme süresi) aşağıdakilerden hangisidir?
Doğru Şık (D): 2 ay
Açıklama: ADA, osteonekroz riskini dağıtmak ve kemik iyileşme kapasitesini (turnover yorgunluğunu) dengelemek için, acil olmayan cerrahi/dental prosedürlerde her altılı bölge (sekstant) işlemleri arasında en az 2 aylık bir zaman aralığı (dinlendirme) bırakılmasını önermektedir.

**Soru 2 (ID: de618eef-8f76-471d-b1f3-934c632cc558)**
Soru Kökü: Uzun yıllardır oral bifosfonat kullanan 60 yaşındaki diyabetik hastada oklüzal çürüklü bir diş saptanmıştır. Olası bir osteonekrozu (BRONJ) tetiklememek adına planlanacak dental tedavinin tipi oldukça önemlidir. Aşağıdaki işlemlerden hangisi bu hasta grubunda yüksek risk barındırmaz ve primer hekim tarafından genel pratikte güvenle uygulanabilir?
Doğru Şık (C): Kök kanal tedavisi, kompozit restorasyon ve subgingival olmayan non-invaziv periodontal debridman
Açıklama: Bifosfonat alanlarda kanama, kemik frezleme ve kemiği ağız florasına açan travmatik flep işlemlerinden kaçınılmalıdır. Bu nedenle rutin kuron/köprü restorasyonları, standart kök kanal tedavileri (taşkınlık yapılmamasına özen gösterilerek) ve kret altı küretaj içermeyen non-invaziv yüzeysel periodontal işlemler tam güvenlikle uygulanabilen, risk oluşturmayan işlemlerdir.

---

### ÇİFT 67 (Benzerlik: 0.71)

**Soru 1 (ID: 398e397f-d12a-424c-8aa3-3b6d3ebb4b8e)**
Soru Kökü: Genç bir erkek hastada mandibula posterior bölgeden alınan radyografide; enfeksiyonun kemik dış yüzeyine doğru ilerleyerek periostu uyarması sonucunda ana kortekse paralel, ikinci bir radyopak kemik tabakasının oluştuğu ('soğan kabuğu' görünümü) tespit edilmiştir. Bu spesifik radyolojik görünümün temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomyelit vakalarında inflamatuar yanıtla periosteumda uyarılmış reaktif yeni kemik oluşumu
Açıklama: Proliferatif periostitiste (veya osteomyelitin periostu uyardığı formalarda), irin korteksi geçerek periostu kaldırır; ancak genç hastalarda periost yüksek osteojenik kapasiteye sahip olduğu için enfeksiyona reaksiyon olarak hemen altına yeni, ince bir kemik tabakası serer. Bu işlemin ardışık tekrarları radyografide eşmerkezli 'soğan kabuğu' radyopasitelerini (reaktif periosteal kemik) yaratır.

**Soru 2 (ID: b7323cd6-3357-45da-aaf7-d466c6ba936f)**
Soru Kökü: Alt çenesinde akut başlangıçlı ağrı, ateş, sistemik kırgınlık ve şişlik şikayetiyle başvuran pediyatrik bir hastanın KIBT incelemesinde; mandibula inferior korteksi boyunca yeni kemik katmanlarının üst üste birikmesiyle oluşan tipik 'soğan kabuğu' (onion-skin) radyografik reaksiyonu tespit edilmiştir.
Hastanın klinik bulguları ve bu spesifik proliferatif periosteal yanıtı göz önüne alındığında, tablonun temel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Akut osteomiyelitte medüller enflamasyonun periosteumu uyararak radyopak yeni kemik çizgileri oluşturması
Açıklama: Genç popülasyonda görülen soğan kabuğu reaksiyonu, kemik iliğinden hızla dışarı (kortekse) doğru taşan pürülan infiltratın (akut osteomiyelit tablosu), kemik zarı olan periosteumu fiziksel olarak itmesi ve bu irritasyona cevap olarak periostun kortekse paralel düz ince radyoopak şeritler (yeni kemik) oluşturmasıdır. Güneş ışını radyopasitesi osteosarkomun; pamuk atığı radyopasitesi Paget hastalığının spesifik izidir. Çenelerde soğan kabuğu belirtisi inflamatuar periostitin tescilli radyografik işaretidir.

---

### ÇİFT 68 (Benzerlik: 0.71)

**Soru 1 (ID: 02e163f8-ae27-4f4c-a6b9-7e406c6cf5c3)**
Soru Kökü: Ludwig anjini gelişen bir hastada hava yolu güvenliği sağlanamaz ve acil tedavi uygulanmazsa ölümcül sistemik komplikasyonlar ortaya çıkabilir. Aşağıdakilerden hangisi hastalığın agresif ilerlemesiyle görülebilecek komplikasyonlar arasında **yer almaz**?
Doğru Şık (D): Maksiller sinüs içinde lokalize flegmon oluşumu
Açıklama: Ludwig anjini tedavi edilmezse solunum tıkanıklığı, septisemi, karotis arter erozyonu ve kavernöz sinüs trombozu gibi majör boyun/kraniyal damar komplikasyonlarına neden olur. Alt çene boşluklarından kaynaklanan enfeksiyonun maksiller sinüs içine flegmon olarak yerleşmesi tipik bir Ludwig anjini komplikasyonu değildir.

**Soru 2 (ID: 2802552e-b1a8-4924-8d37-56cd34ca592e)**
Soru Kökü: Ludwig anjini tanısı konulan hastada, enfeksiyonun yayıldığı fasial boşluklar arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (A): Pterigomandibular boşluk
Açıklama: Ludwig anjini tanısı için enfeksiyonun çene altı ve ağız tabanındaki üç ana fasial boşluğu; submandibular, submental ve sublingual boşlukları bilateral (iki taraflı) olarak tutması gerekir. Pterigomandibular boşluk bu klasik triadın primer bir parçası değildir; oradaki enfeksiyon daha çok trismus ile izole şekilde prezente olur.

---

### ÇİFT 69 (Benzerlik: 0.71)

**Soru 1 (ID: 6cdf0e0b-9599-423e-9977-8573821772b2)**
Soru Kökü: Yirmi bir yaşında erkek öğrenci, sağ alt arka bölgesinde şiddetli ağrı, ağız açmada zorluk (trismus) ve kötü tat şikayetiyle acil servise başvuruyor. Klinik muayenede ilgili bölgede dişi örten mukozal yapıda eritem ve ödem izleniyor. İltihabi hastalıklar içinde perikoronal infeksiyona çenelerde istatistiksel olarak en sık neden olan diş aşağıdakilerden hangisidir?
Doğru Şık (D): Mandibular üçüncü molar
Açıklama: Perikoronitis, büyük oranda çenelerde sürme yeri bulamayan veya anatomik pozisyonu gereği yarı sürmüş pozisyonda kalan mandibular üçüncü molar (yirmi yaş) dişlerinde izlenir. Yer darlığı ve operkülumun çiğneme travmasına açık olması sebebiyle mandibular 3. molarlar en yüksek risk grubundadır.

**Soru 2 (ID: d476b3e5-583a-41fc-9e0f-de896212cbc1)**
Soru Kökü: 21 yaşında erkek hasta, sol alt yirmi yaş dişi bölgesinde ani başlayan şiddetli ağrı ve ağız açmada kısıtlılık şikayetiyle başvurmuştur. İlgili bölgede dişi örten gingival flep altında yiyecek birikimi ve belirgin eritem saptanmıştır. Semptomların henüz yeni başladığı bu akut perikoronal enfeksiyon olgusunun radyografik değerlendirmesinde **en olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kısa süreli bir olgu olduğu için kemik defekti izlenmez ve folikül sınırları normaldir.
Açıklama: Akut ve kısa süreli perikoronal enfeksiyon olgularında henüz kemik yıkımı başlamadığı için kemik defekti yoktur ve folikül sınırları normal olarak izlenir. Retromolar kemik defekti, folikül sınırlarında kalınlaşma ve komşu diş kökünde rezorbsiyon; akut ataklardan ziyade tekrarlayan ve uzun süreli kronik perikoronit vakalarının radyolojik bulgularıdır. Erken dönemde yalnızca yumuşak doku semptomları hakimdir.

---

### ÇİFT 70 (Benzerlik: 0.71)

**Soru 1 (ID: 0aaf5b6e-546f-48f2-a1e5-2c3fb2b6a84d)**
Soru Kökü: Diş kaynaklı lokal enfeksiyonlardan olan 'Akut Periapikal Apse' ile 'Akut Perikoronal Enfeksiyon' durumlarının klinik özellikleri karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Akut perikoronitiste ilgili dişin kronik kök absesi nedeniyle her zaman komşu diş apikallerinde şiddetli kemik erimesi izlenir.
Açıklama: Akut perikoronitis, yarı gömülü dişin üzerindeki yumuşak dokunun (gingival flebin) enfeksiyonudur; kök absesi veya apikal bir patoloji değildir. Erken dönemde çevre kemik defekti veya komşu kök yıkımı görülmez. Komşu kök rezorpsiyonu, akut fazın değil ancak çok uzun yıllar süren kronik irritasyon vakalarının bir bulgusu olabilir.

**Soru 2 (ID: d476b3e5-583a-41fc-9e0f-de896212cbc1)**
Soru Kökü: 21 yaşında erkek hasta, sol alt yirmi yaş dişi bölgesinde ani başlayan şiddetli ağrı ve ağız açmada kısıtlılık şikayetiyle başvurmuştur. İlgili bölgede dişi örten gingival flep altında yiyecek birikimi ve belirgin eritem saptanmıştır. Semptomların henüz yeni başladığı bu akut perikoronal enfeksiyon olgusunun radyografik değerlendirmesinde **en olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kısa süreli bir olgu olduğu için kemik defekti izlenmez ve folikül sınırları normaldir.
Açıklama: Akut ve kısa süreli perikoronal enfeksiyon olgularında henüz kemik yıkımı başlamadığı için kemik defekti yoktur ve folikül sınırları normal olarak izlenir. Retromolar kemik defekti, folikül sınırlarında kalınlaşma ve komşu diş kökünde rezorbsiyon; akut ataklardan ziyade tekrarlayan ve uzun süreli kronik perikoronit vakalarının radyolojik bulgularıdır. Erken dönemde yalnızca yumuşak doku semptomları hakimdir.

---

### ÇİFT 71 (Benzerlik: 0.71)

**Soru 1 (ID: 395467ca-dc65-4311-9c01-766f15c76440)**
Soru Kökü: Akut apikal periodontitis ile akut periapikal apse patogenezi hücresel düzeyde karşılaştırıldığında, akut apikal periodontitisin henüz apseleşmemiş erken dönemini spesifik kılan en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitiste doku yıkımına yol açacak olan makrofaj ve osteoklast gibi hücrelerin aktivasyonu daha başlamamıştır; olay vasküler genişleme ve ödem düzeyindedir. İrritan yeterince güçlüyse pürülan sıvı (pus) oluşur ve tablo akut periapikal apseye dönüşerek kemik yıkımını başlatır. Granülasyon ve epitel kavitasyonu ise kronik fazın özellikleridir.

**Soru 2 (ID: 69d0d834-a7c8-4bee-8add-f9a2ced50ce9)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişinde devamlı bir dolgunluk hissi, ısırmayla artan ağrı ve palpasyon hassasiyeti şikayetiyle başvuruyor. Akut apikal periodontitis tanısı konan bu tabloda, periapikal bölgedeki pulpal irritanın doku destrüksiyonuna neden olacak kadar güçlü olması durumunda hastalığın bir sonraki aşaması ne olacaktır?
Doğru Şık (D): Pü (pus) formasyonu ve apse oluşumu
Açıklama: Akut apikal periodontitiste enflamasyon ilerler ve irritasyon doku harabiyeti yapacak yoğunluğa ulaşırsa, nötrofillerin lizozomal yıkımıyla pü (pus) oluşur. Bu birikim doku içi basıncı artırarak şiddetli zonklayıcı ağrı yapar ve klinik olarak tablo akut periapikal apseye evrilir. Kist ve skleroz oluşumu akut değil, kronik sürecin bulgularıdır.

---

### ÇİFT 72 (Benzerlik: 0.70)

**Soru 1 (ID: 0aaf5b6e-546f-48f2-a1e5-2c3fb2b6a84d)**
Soru Kökü: Diş kaynaklı lokal enfeksiyonlardan olan 'Akut Periapikal Apse' ile 'Akut Perikoronal Enfeksiyon' durumlarının klinik özellikleri karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): Akut perikoronitiste ilgili dişin kronik kök absesi nedeniyle her zaman komşu diş apikallerinde şiddetli kemik erimesi izlenir.
Açıklama: Akut perikoronitis, yarı gömülü dişin üzerindeki yumuşak dokunun (gingival flebin) enfeksiyonudur; kök absesi veya apikal bir patoloji değildir. Erken dönemde çevre kemik defekti veya komşu kök yıkımı görülmez. Komşu kök rezorpsiyonu, akut fazın değil ancak çok uzun yıllar süren kronik irritasyon vakalarının bir bulgusu olabilir.

**Soru 2 (ID: 395467ca-dc65-4311-9c01-766f15c76440)**
Soru Kökü: Akut apikal periodontitis ile akut periapikal apse patogenezi hücresel düzeyde karşılaştırıldığında, akut apikal periodontitisin henüz apseleşmemiş erken dönemini spesifik kılan en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitiste doku yıkımına yol açacak olan makrofaj ve osteoklast gibi hücrelerin aktivasyonu daha başlamamıştır; olay vasküler genişleme ve ödem düzeyindedir. İrritan yeterince güçlüyse pürülan sıvı (pus) oluşur ve tablo akut periapikal apseye dönüşerek kemik yıkımını başlatır. Granülasyon ve epitel kavitasyonu ise kronik fazın özellikleridir.

---

### ÇİFT 73 (Benzerlik: 0.70)

**Soru 1 (ID: 69d0d834-a7c8-4bee-8add-f9a2ced50ce9)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişinde devamlı bir dolgunluk hissi, ısırmayla artan ağrı ve palpasyon hassasiyeti şikayetiyle başvuruyor. Akut apikal periodontitis tanısı konan bu tabloda, periapikal bölgedeki pulpal irritanın doku destrüksiyonuna neden olacak kadar güçlü olması durumunda hastalığın bir sonraki aşaması ne olacaktır?
Doğru Şık (D): Pü (pus) formasyonu ve apse oluşumu
Açıklama: Akut apikal periodontitiste enflamasyon ilerler ve irritasyon doku harabiyeti yapacak yoğunluğa ulaşırsa, nötrofillerin lizozomal yıkımıyla pü (pus) oluşur. Bu birikim doku içi basıncı artırarak şiddetli zonklayıcı ağrı yapar ve klinik olarak tablo akut periapikal apseye evrilir. Kist ve skleroz oluşumu akut değil, kronik sürecin bulgularıdır.

**Soru 2 (ID: 6fc733a7-bc48-4b90-885e-ad44a923fae3)**
Soru Kökü: 45 yaşında bir erkek hasta, son 3 gündür sağ mandibulasında giderek artan şiddetli zonklayıcı ağrı, dudak köşesinde uyuşukluk (parestezi) ve komşu dişlerde sallanma (mobilite) şikayetiyle başvurmuştur. Muayenede pürülan drenaj, ateş ve lökositoz tespit edilmiştir. Bu bulgular ışığında hastadaki **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (A): Akut osteomyelit
Açıklama: Erkeklerde ve mandibulada daha sık görülen, hızlı başlayan zonklayıcı ağrı, dişlerde mobilite, pürülan drenaj, ateş, lökositoz ve enfeksiyonun inferior alveolar siniri sıkıştırmasına/hasarına bağlı gelişen 'alt dudak parestezisi' Akut Osteomyelit'in tipik ve tanısal klinik tablosudur. Apikal periodontitiste yaygın dudak parestezisi beklenmez.

---

### ÇİFT 74 (Benzerlik: 0.70)

**Soru 1 (ID: 14fac124-710b-408c-817b-3c1f5bbdc9b2)**
Soru Kökü: Kronik osteomyelit vakalarının yönetiminde sekestranın (nekrotik kemik adacığının) boyutlarının, lokalizasyonunun ve iç yapısının saptanması cerrahi sekestrektomi açısından hayati önem taşır. Çok yoğun sklerotik kemiğe sahip olgularda dahi kemik içi yapıyı ve sekestrayı ortaya çıkarmak için **en üstün ve tercih edilen** görüntüleme yöntemi aşağıdakilerden hangisidir?
Doğru Şık (E): Bilgisayarlı Tomografi (BT) veya Koni Işınlı BT (KIBT)
Açıklama: Kronik osteomyelitte korteks kalınlaştığında veya spongiyöz kemik yoğun bir skleroza uğradığında (özellikle süperpozisyon olan mandibulada), iki boyutlu filmlerde sekestrı görmek zorlaşır. Kemiğin ince kesitsel detaylarını, sekestrı ve iç yapıyı göstermekte en güvenilir yöntem BT (veya KIBT) dir. MRG yumuşak doku veya ilik ödemi için iyidir ancak kalsifiye kemik içi detayı (sekestr) saptamakta BT kadar üstün değildir.

**Soru 2 (ID: cdc8af1d-62bf-40d5-a557-b2289ae2ad0f)**
Soru Kökü: Osteoradyonekroz şüphesi taşıyan hastada, kemik dokusundaki sekestr komplikasyonları ile çevre yumuşak doku tutulumunu ve olası primer ağız kanserinin nüksünü birbirinden ayırt etmek için tercih edilmesi gereken **en optimal** radyolojik algoritma aşağıdakilerin hangisinde birlikte verilmiştir?
Doğru Şık (E): Kemik için BT, yumuşak doku ve kanser nüksü için kontrastlı MRG
Açıklama: Osteoradyonekrozda kemik komplikasyonları ve sekestr tespiti en iyi Bilgisayarlı Tomografi (BT) ile değerlendirilir. Eş zamanlı yumuşak doku enfeksiyon yayılımı veya ışınlanmış ağız kanserinin nüksünü değerlendirmek için ise en hassas görüntüleme yöntemi kontrastlı MRG'dir.

---

### ÇİFT 75 (Benzerlik: 0.70)

**Soru 1 (ID: 6328e575-b496-486c-89d0-1c3fc87b4309)**
Soru Kökü: 62 yaşında osteoporoz hastası kadın, mandibula lingual bölgesinde 1 cm boyutunda açığa çıkmış, üzeri pürülan eksuda ile kaplı ve çevre mukozasında ciddi eritem saptanan bir lezyon ile başvuruyor. Şiddetli ağrısı olan hastanın panoramik radyografisinde hafif kortikal düzensizlik izleniyor.
AAOMS tarafından tanımlanan Evre II tablosuyla tam uyumlu olan bu hastanın ilk güncel tedavi basamağı olarak aşağıdakilerden hangisi doğrudan uygulanmalıdır?
Doğru Şık (C): Antiseptik gargara ve analjeziklere ek olarak, bakteriyel kontrol için topikal veya sistemik antibiyotik başlanması
Açıklama: Bifosfonat ilişkili nekrozda Evre II'nin ana klinik komponenti ağrısız kemik ekspozisyonuna 'sekonder enfeksiyon ve yumuşak doku enflamasyonunun' eklenmesidir (eritem, ağrı, eksuda). Tedavide ilk kural enfeksiyon tablosunu hafifletmektir. Bu nedenle hastalara klorheksidinli gargaralar eşliğinde geniş spektrumlu sistemik (penisilin/metronidazol vb.) antibiyotikler reçete edilerek medikal non-cerrahi baskılama uygulanır. Blok rezeksiyon ancak fistül-fraktür gibi Evre III komplikasyonlarında gündeme gelebilir.

**Soru 2 (ID: 9930e8ea-20be-4c7b-adfb-090c21020c1d)**
Soru Kökü: 62 yaşındaki bir kadın hasta, sağ mandibulasında diş çekimi sonrası aylar geçmesine rağmen iyileşmeyen, mukoza bütünlüğünün bozulduğu ve kemiğin açıkta kaldığı bir saha ile başvurmuştur. Hastanın radyografisinde osteolitik alanlar ve belirgin radyopak sekestrlar izlenmektedir. Klinik görünümü kronik osteomyelite çok benzeyen bu tablonun 'Osteoradyonekroz' olduğunu doğrulamak için hastadan alınacak **en belirleyici** tıbbi anamnez bilgisi aşağıdakilerden hangisidir?
Doğru Şık (D): Baş-boyun bölgesinde yer alan bir tümör için terapötik ışınlama tedavisi görmüş olması
Açıklama: Osteoradyonekroz; radyolojik ve klinik (ağrı, açık nekrotik kemik, sekestr, enfeksiyon) olarak osteomiyelitten ayrılamaz. Tanıyı kesinleştiren tek unsur, hastanın o bölgeye yönelik 'radyoterapi (terapötik ışınlama)' hikayesinin varlığıdır. Bifosfonat hikayesi olsaydı bu MRONJ (ilaca bağlı osteonekroz) olurdu.

---

### ÇİFT 76 (Benzerlik: 0.70)

**Soru 1 (ID: 5d321b14-faa8-4f80-b8a8-4987f7736991)**
Soru Kökü: 65 yaşında postmenopozal osteoporoz hastası kadın, son 5 yıldır kesintisiz olarak oral bifosfonat tedavisi görmektedir. Hasta, ağzındaki problemli dişlerin çekimi ve implantasyon tedavisi için hekimine ilacı kaç gün bırakırsa vücudundan tamamen atılacağını sormaktadır.
Bifosfonatların hidroksiapatite irreversibl bağlanma kinetiği göz önüne alındığında, bu ilaçların iskelet sistemindeki ortalama kalış süresi (yarılanma ömrü) hangi zaman dilimi ile ifade edilir?
Doğru Şık (A): 1 ila 10 yıl arası
Açıklama: Bifosfonatlar kemik yapısındaki hidroksiapatit kristallerine öylesine güçlü entegre olurlar ki, osteoklastlar bu kemiği rezorbe etmedikçe matriks içinde hapis kalırlar. Bu biyolojik tutulum nedeniyle kemikteki yarılanma ömürleri 1 ila 10 yılı bulur. Yani ilacı sadece işlemden birkaç hafta veya ay önce kesmek, kemik içinde zaten birikmiş ve yıllarca kalacak olan kümülatif dozun toksisite riskini ortadan kaldırmaz.

**Soru 2 (ID: ad4037a0-5f51-4a1f-a878-a5252d2e14b2)**
Soru Kökü: Sistemik kemik metastazı veya malign hiperkalsemi nedeniyle kısa süre içinde intravenöz (IV) bifosfonat tedavisine başlanması planlanan bir hastada, restorasyon imkanı olmayan dişlerin profikaltik çekimi gerçekleştirilmiştir. Çekim boşluklarında tam mukozal kapanmanın (primer epitelizasyon) sağlanıp sistemik bifosfonat ilacına güvenle başlanabilmesi için hastanın cerrahi sonrası en az ne kadar süre (gün) beklenmesi tıp pratiğinde tavsiye edilmektedir?
Doğru Şık (A): 14 - 21 gün
Açıklama: IV bifosfonatlara başlanmadan önce diş hekimi hastayı değerlendirip cerrahi işlemleri bitirmelidir. Diş çekimi yapıldıysa, yumuşak doku kapanması ve yara bölgesinin güvenli bir şekilde iyileşebilmesi için ilaca başlanmadan önce asgari 14-21 gün beklenmelidir.

---

### ÇİFT 77 (Benzerlik: 0.70)

**Soru 1 (ID: 49b609dd-b34b-44aa-9330-937637917c19)**
Soru Kökü: İltihaplı periosteal kemiğin bir kısmında harabiyet izlenen akut osteomiyelit tablosunun ayırıcı tanısında, infiltratif karakteri nedeniyle öncelikle aşağıdaki malign neoplazmlardan hangisi **düşünülmelidir**?
Doğru Şık (E): Skuamöz hücreli karsinom
Açıklama: Akut osteomiyelitte periosteal yeni kemik yapımı enflamasyonla birlikte yıkıma uğradığında, radyolojik ve klinik tablo malign bir tümörün kemik invazyonunu taklit eder. Skuamöz hücreli karsinom ve osteosarkom gibi agresif neoplaziler mandibulada benzer destrüktif periosteal yanıtı oluşturabilir. Fibröz displazi, kemiği içeriden genişleterek displastik yapı oluşturur ancak periostu litik tarzda tahrip etme eğiliminde değildir. Bu tür agresif kortikal yıkımlarda daima primer veya metastatik karsinomlar ekart edilmelidir.

**Soru 2 (ID: e9eb45b6-2cd8-4d16-9844-28a499661c49)**
Soru Kökü: Çenelerde hızlı litik kemik yıkımı ve periosteal yeni kemik reaksiyonu oluşturan hastalıkların radyolojik görünümleri osteomyeliti taklit edebilir ve yanlış tanıya yol açabilir. Aşağıdaki lezyonlardan hangisi mandibulada destrüktif osteomyelit benzeri bu kemik yıkım paternini oluşturan, primer ayırıcı tanıda yer alan durumlardan biri **değildir**?
Doğru Şık (C): Osteoma
Açıklama: Osteosarkom, lenfoma/lösemi, skuamöz hücreli karsinom invazyonu ve Langerhans hücreli histiyositoz; kemikte agresif litik yıkım yapan, sınırları belirsiz destrüksiyona yol açan ve periostu uyararak reaktif yeni kemik oluşumu (osteomyelite benzer sekestr veya soğan kabuğu) yapabilen hastalıklardır. Osteoma ise iyi sınırlı, son derece yavaş büyüyen, dışarıya doğru ekzofitik uzanan benign bir kortikal kemik hamartomudur ve agresif osteomyelit yıkımını taklit etmez.

---

### ÇİFT 78 (Benzerlik: 0.70)

**Soru 1 (ID: 47821772-30f9-4fef-af0a-d3f73ecd2227)**
Soru Kökü: Canadian Association of Oral and Maxillofacial Surgeons (CAOMS) ve AAOMS kılavuzlarına göre yaklaşımlar incelendiğinde, uzun süredir oral bifosfonat kullanan bir hastada periapikal apse sebebiyle **acil diş çekimi endikasyonu** doğduğunda CAOMS'un önerdiği spesifik ilaç yönetimi protokolü aşağıdakilerden hangisidir?
Doğru Şık (E): Tıp doktoru konsültasyonu ile bifosfonatın hemen kesilmesi ve çekim yarasının tamamen iyileşmesine kadar ilacın kullanılmaması
Açıklama: CAOMS kılavuzuna göre acil dental tedavi (ör. apse, çekim) gerektiren durumlarda, medikal konsültasyon ile bifosfonatın derhal kesilmesi ve soket epitelizasyonu (yara iyileşmesi) tamamen sağlanıncaya kadar ilacın tekrar kullanılmaması önerilir. AAOMS ise acil olmayan tedaviler için 3 ay kuralını işletir.

**Soru 2 (ID: 6328e575-b496-486c-89d0-1c3fc87b4309)**
Soru Kökü: 62 yaşında osteoporoz hastası kadın, mandibula lingual bölgesinde 1 cm boyutunda açığa çıkmış, üzeri pürülan eksuda ile kaplı ve çevre mukozasında ciddi eritem saptanan bir lezyon ile başvuruyor. Şiddetli ağrısı olan hastanın panoramik radyografisinde hafif kortikal düzensizlik izleniyor.
AAOMS tarafından tanımlanan Evre II tablosuyla tam uyumlu olan bu hastanın ilk güncel tedavi basamağı olarak aşağıdakilerden hangisi doğrudan uygulanmalıdır?
Doğru Şık (C): Antiseptik gargara ve analjeziklere ek olarak, bakteriyel kontrol için topikal veya sistemik antibiyotik başlanması
Açıklama: Bifosfonat ilişkili nekrozda Evre II'nin ana klinik komponenti ağrısız kemik ekspozisyonuna 'sekonder enfeksiyon ve yumuşak doku enflamasyonunun' eklenmesidir (eritem, ağrı, eksuda). Tedavide ilk kural enfeksiyon tablosunu hafifletmektir. Bu nedenle hastalara klorheksidinli gargaralar eşliğinde geniş spektrumlu sistemik (penisilin/metronidazol vb.) antibiyotikler reçete edilerek medikal non-cerrahi baskılama uygulanır. Blok rezeksiyon ancak fistül-fraktür gibi Evre III komplikasyonlarında gündeme gelebilir.

---

### ÇİFT 79 (Benzerlik: 0.70)

**Soru 1 (ID: de618eef-8f76-471d-b1f3-934c632cc558)**
Soru Kökü: Uzun yıllardır oral bifosfonat kullanan 60 yaşındaki diyabetik hastada oklüzal çürüklü bir diş saptanmıştır. Olası bir osteonekrozu (BRONJ) tetiklememek adına planlanacak dental tedavinin tipi oldukça önemlidir. Aşağıdaki işlemlerden hangisi bu hasta grubunda yüksek risk barındırmaz ve primer hekim tarafından genel pratikte güvenle uygulanabilir?
Doğru Şık (C): Kök kanal tedavisi, kompozit restorasyon ve subgingival olmayan non-invaziv periodontal debridman
Açıklama: Bifosfonat alanlarda kanama, kemik frezleme ve kemiği ağız florasına açan travmatik flep işlemlerinden kaçınılmalıdır. Bu nedenle rutin kuron/köprü restorasyonları, standart kök kanal tedavileri (taşkınlık yapılmamasına özen gösterilerek) ve kret altı küretaj içermeyen non-invaziv yüzeysel periodontal işlemler tam güvenlikle uygulanabilen, risk oluşturmayan işlemlerdir.

**Soru 2 (ID: ef07c115-53c3-42d0-97e8-16bbb69bb894)**
Soru Kökü: Prostat kanseri kemik metastazı tedavisi için intravenöz bifosfonat kullanan 72 yaşındaki hastanın alt sol birinci molar dişi enfeksiyon nedeniyle çekilmiştir. Aylar geçmesine rağmen yara yeri kapanmamış ve kemik dokusu açığa çıkmıştır.
Vücudun tamamı ilaca maruz kalmasına rağmen, bifosfonata bağlı osteonekrozun uzun kemiklerden ziyade spesifik olarak çene kemiklerinde görülmesinin en temel patofizyolojik ve histolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Çene kemiklerinin döngü (turnover) hızının çok fazla olması ve buna bağlı yüksek oranda ilacı depolaması
Açıklama: Çenelerde (özellikle alveolar krette) diş hareketleri, sürekli çiğneme kuvvetleri ve diş destek dokularının remodelasyon ihtiyacı nedeniyle kemik metabolizması (turnover hızı) diğer iskelet kemiklerine oranla yaklaşık 10 kat daha hızlıdır. Osteoklastik ve osteoblastik aktivitenin bu kadar yoğun olduğu bir bölgeye kan dolaşımıyla çok daha fazla oranda bifosfonat ulaşır ve depolanır. Ek olarak ağız mukozasının travmaya açık ve bakteri dolu olması lokal tetikleyici rol oynar.

---

### ÇİFT 80 (Benzerlik: 0.70)

**Soru 1 (ID: 398e397f-d12a-424c-8aa3-3b6d3ebb4b8e)**
Soru Kökü: Genç bir erkek hastada mandibula posterior bölgeden alınan radyografide; enfeksiyonun kemik dış yüzeyine doğru ilerleyerek periostu uyarması sonucunda ana kortekse paralel, ikinci bir radyopak kemik tabakasının oluştuğu ('soğan kabuğu' görünümü) tespit edilmiştir. Bu spesifik radyolojik görünümün temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (E): Osteomyelit vakalarında inflamatuar yanıtla periosteumda uyarılmış reaktif yeni kemik oluşumu
Açıklama: Proliferatif periostitiste (veya osteomyelitin periostu uyardığı formalarda), irin korteksi geçerek periostu kaldırır; ancak genç hastalarda periost yüksek osteojenik kapasiteye sahip olduğu için enfeksiyona reaksiyon olarak hemen altına yeni, ince bir kemik tabakası serer. Bu işlemin ardışık tekrarları radyografide eşmerkezli 'soğan kabuğu' radyopasitelerini (reaktif periosteal kemik) yaratır.

**Soru 2 (ID: 8fcf89c2-b2e3-4331-bd93-99729c226e9b)**
Soru Kökü: Uzun süredir tekrarlayan perikoronal enfeksiyon atakları geçiren hastanın radyografisinde, etkilenen mandibular 3. molar diş bölgesinde izlenmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Enfeksiyonun uyarımı ile kemik yüzeyinde soğan kabuğu tarzı yeni kemik yapımı
Açıklama: Kronik perikoronal enfeksiyonlarda folikül kalınlaşması, komşu diş kökü rezorpsiyonu ve dişin mesial/distaliyle sınırlı retromolar kemik defekti beklenir. Soğan kabuğu görünümü (ikinci bir kemik tabakası oluşumu) ise kronik perikoronitin değil, enfeksiyonun kemik iliğini geçip periostu uyardığı proliferatif periostitis (osteomyelit) tablosunun radyolojik özelliğidir. Bu nedenle perikoronitte izlenmez.

---

### ÇİFT 81 (Benzerlik: 0.70)

**Soru 1 (ID: 69d0d834-a7c8-4bee-8add-f9a2ced50ce9)**
Soru Kökü: Kırk beş yaşında erkek hasta, dişinde devamlı bir dolgunluk hissi, ısırmayla artan ağrı ve palpasyon hassasiyeti şikayetiyle başvuruyor. Akut apikal periodontitis tanısı konan bu tabloda, periapikal bölgedeki pulpal irritanın doku destrüksiyonuna neden olacak kadar güçlü olması durumunda hastalığın bir sonraki aşaması ne olacaktır?
Doğru Şık (D): Pü (pus) formasyonu ve apse oluşumu
Açıklama: Akut apikal periodontitiste enflamasyon ilerler ve irritasyon doku harabiyeti yapacak yoğunluğa ulaşırsa, nötrofillerin lizozomal yıkımıyla pü (pus) oluşur. Bu birikim doku içi basıncı artırarak şiddetli zonklayıcı ağrı yapar ve klinik olarak tablo akut periapikal apseye evrilir. Kist ve skleroz oluşumu akut değil, kronik sürecin bulgularıdır.

**Soru 2 (ID: d476b3e5-583a-41fc-9e0f-de896212cbc1)**
Soru Kökü: 21 yaşında erkek hasta, sol alt yirmi yaş dişi bölgesinde ani başlayan şiddetli ağrı ve ağız açmada kısıtlılık şikayetiyle başvurmuştur. İlgili bölgede dişi örten gingival flep altında yiyecek birikimi ve belirgin eritem saptanmıştır. Semptomların henüz yeni başladığı bu akut perikoronal enfeksiyon olgusunun radyografik değerlendirmesinde **en olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kısa süreli bir olgu olduğu için kemik defekti izlenmez ve folikül sınırları normaldir.
Açıklama: Akut ve kısa süreli perikoronal enfeksiyon olgularında henüz kemik yıkımı başlamadığı için kemik defekti yoktur ve folikül sınırları normal olarak izlenir. Retromolar kemik defekti, folikül sınırlarında kalınlaşma ve komşu diş kökünde rezorbsiyon; akut ataklardan ziyade tekrarlayan ve uzun süreli kronik perikoronit vakalarının radyolojik bulgularıdır. Erken dönemde yalnızca yumuşak doku semptomları hakimdir.

---

### ÇİFT 82 (Benzerlik: 0.70)

**Soru 1 (ID: 0658e3a2-e5d1-4873-b11b-e65b546e04ef)**
Soru Kökü: Bifosfonata bağlı çene osteonekrozu (BRONJ) gelişimi için ilaç kullanım süresi klinik açıdan kritik bir risk faktörüdür. Cerrahi işlem planlanırken sistemik risklerin bağımsız olarak değerlendirildiği hastalarda, oral ve intravenöz (IV) bifosfonatlar için osteonekroz tehlikesinin belirgin şekilde arttığı kabul edilen eşik kullanım süreleri aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (B): Oral: 36 ay / IV: 12 ay
Açıklama: Bifosfonat risk faktörleri tablosuna göre; oral yolla alınan bifosfonatların 36 ay veya daha uzun süre kullanımı ile intravenöz (IV) yolla alınan bifosfonatların 12 ay veya daha uzun süre kullanımı lokal cerrahilerde yüksek osteonekroz riski oluşturur.

**Soru 2 (ID: 2644bef0-529c-4031-a6c2-4bfd1cfd45b1)**
Soru Kökü: American Dental Association (ADA) klinik pratik kılavuzuna göre, kronik oral bifosfonat kullanan ve ağzında yaygın dental sorunları olan bir hastada acil olmayan rutin dental cerrahiler (örn. planlı çekimler, lokalize flap operasyonları) planlanırken çenedeki iyileşme rezervini korumak adına her bir sekstant arası bırakılması önerilen spesifik zaman aralığı (dinlendirme süresi) aşağıdakilerden hangisidir?
Doğru Şık (D): 2 ay
Açıklama: ADA, osteonekroz riskini dağıtmak ve kemik iyileşme kapasitesini (turnover yorgunluğunu) dengelemek için, acil olmayan cerrahi/dental prosedürlerde her altılı bölge (sekstant) işlemleri arasında en az 2 aylık bir zaman aralığı (dinlendirme) bırakılmasını önermektedir.

---

### ÇİFT 83 (Benzerlik: 0.70)

**Soru 1 (ID: 43f4c7ea-8077-4465-8694-b6c0bc97f3e9)**
Soru Kökü: Periapikal granülomun patogenezi histopatolojik olarak incelendiğinde, inflamasyonun yayılması ve vasküler basıncın artması sonucu oluşan kemik rezorbsiyon alanında, nekrotik kemik ve yumuşak dokunun yerini alan temel biyolojik doku aşağıdakilerden hangisidir?
Doğru Şık (C): Granülasyon dokusu
Açıklama: Periapikal granülom oluşum sürecinde, artan vasküler basınç ve inflamatuar hücre sitokinleri lokalize kemik rezorpsiyonuna yol açar. Vücut bölgeyi onarmak ve enfeksiyonu sınırlamak adına nekrotik doku ve kemiğin olduğu alana yoğun kapiller damar ve inflamatuar hücre (lenfosit, plazma hücresi, makrofaj) içeren granülasyon dokusunu doldurur. Fibröz skar veya sement yapımı aktif inflamasyon safhasında değil, inaktif iyileşme safhalarında görülür.

**Soru 2 (ID: 67732deb-ff1b-4f89-b86c-ae6dce09fc2c)**
Soru Kökü: Nonvital bir dişin apekisinde en sık görülen ve enfekte kök kanalından kaynaklanan yoğun, uzun süreli irritasyonun bir sonucu olan lezyon aşağıdakilerden hangisidir?
Doğru Şık (A): Periapikal granülom
Açıklama: Periapikal granülom (kronik apikal periodontitis), pulpal enfeksiyona karşı savunma mekanizmasının ürettiği granülasyon dokusu olup nonvital dişlerin apikalinde en sık karşılaşılan patolojidir. Kök ucundaki uzun süreli düşük virülanslı irritasyon sonucu nekrotik kemik ve yumuşak dokunun yerini granülasyon dokusu alır. Radiküler kist ise granülomdan daha sonra, epitel proliferasyonu ile gelişen sekonder bir durumdur.

---

### ÇİFT 84 (Benzerlik: 0.70)

**Soru 1 (ID: 72504021-515b-40d0-86f8-5142315c5cf2)**
Soru Kökü: Çene kemiklerinde sıklıkla sebebi belli olmayan, ancak reperatif bir hadise ve anormal streslere karşı kemiğin verdiği bir fizyolojik cevap olduğu düşünülen, infeksiyon varlığı gerektirmeyen radyopak lezyon aşağıdakilerden hangisidir?
Doğru Şık (E): Osteoskleroz
Açıklama: Osteoskleroz, sıklıkla vital dişlerin çevresinde izlenen, enfeksiyöz bir kaynağı olmayan, reperatif (tamir edici) veya anormal okluzal streslere bağlı fizyolojik kemik yoğunlaşmasıdır. Kondanse osteitis (skleroze osteitis) ise klinik görünüm olarak benzese de, non-vital veya enfekte bir dişin düşük dereceli toksisitesine karşı verilen patolojik bir kemik reaksiyonudur.

**Soru 2 (ID: d7f094f0-6742-46ae-9d4f-b9bde8e00412)**
Soru Kökü: Radyografik muayenede alt çene posterior bölgede sınırları diffüz, çevresinde radyolüsent bir alan bulunmayan radyopak bir lezyon saptanmıştır. İlgili diş vitaldir ve herhangi bir klinik belirti yoktur. Bu bulgular doğrultusunda, lezyonun osteoskleroz tanısı almasını sağlayan ve kondanse osteitisten ayıran en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): İlgili dişin vital olması ve intraosseöz enfeksiyon kaynağının bulunmaması
Açıklama: Osteoskleroz vital dişin apikalinde bulunurken, kondanse osteitis enfekte ya da nonvital dişin (pulpa dejenerasyonu) neden olduğu intraosseöz enfeksiyonla birliktedir. Her ikisi de radyopak sklerotik alan yaratmasına rağmen enfeksiyon kaynağının yokluğu ve vitalite osteoskleroz için ayırıcıdır.

---

### ÇİFT 85 (Benzerlik: 0.70)

**Soru 1 (ID: 395467ca-dc65-4311-9c01-766f15c76440)**
Soru Kökü: Akut apikal periodontitis ile akut periapikal apse patogenezi hücresel düzeyde karşılaştırıldığında, akut apikal periodontitisin henüz apseleşmemiş erken dönemini spesifik kılan en temel özellik aşağıdakilerden hangisidir?
Doğru Şık (B): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitiste doku yıkımına yol açacak olan makrofaj ve osteoklast gibi hücrelerin aktivasyonu daha başlamamıştır; olay vasküler genişleme ve ödem düzeyindedir. İrritan yeterince güçlüyse pürülan sıvı (pus) oluşur ve tablo akut periapikal apseye dönüşerek kemik yıkımını başlatır. Granülasyon ve epitel kavitasyonu ise kronik fazın özellikleridir.

**Soru 2 (ID: 43f4c7ea-8077-4465-8694-b6c0bc97f3e9)**
Soru Kökü: Periapikal granülomun patogenezi histopatolojik olarak incelendiğinde, inflamasyonun yayılması ve vasküler basıncın artması sonucu oluşan kemik rezorbsiyon alanında, nekrotik kemik ve yumuşak dokunun yerini alan temel biyolojik doku aşağıdakilerden hangisidir?
Doğru Şık (C): Granülasyon dokusu
Açıklama: Periapikal granülom oluşum sürecinde, artan vasküler basınç ve inflamatuar hücre sitokinleri lokalize kemik rezorpsiyonuna yol açar. Vücut bölgeyi onarmak ve enfeksiyonu sınırlamak adına nekrotik doku ve kemiğin olduğu alana yoğun kapiller damar ve inflamatuar hücre (lenfosit, plazma hücresi, makrofaj) içeren granülasyon dokusunu doldurur. Fibröz skar veya sement yapımı aktif inflamasyon safhasında değil, inaktif iyileşme safhalarında görülür.

---

### ÇİFT 86 (Benzerlik: 0.70)

**Soru 1 (ID: 69c9998f-b937-4c4c-b63b-32424ed7f563)**
Soru Kökü: Uzun süreli ve düşük virülanslı bir pulpal enfeksiyonu takiben gelişen kronik periapikal absede, lezyonun kronikliğini işaret eden radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Radyolüsent alanı çevreleyen, kalınlığı değişen sklerotik trabeküller
Açıklama: Kronik periapikal apsede çoğunlukla sınırları belirgin olmayan radyolüsent alan mevcuttur ve bu alan, kalınlığı değişen radyopak sklerotik trabeküller ile çevrilidir. Bu sklerotik yapı doğrudan lezyonun kronikliğinin göstergesidir. Diffüz genişleme akut başlangıcı, soğan kabuğu görünümü ise osteomiyelit reaksiyonunu düşündürür.

**Soru 2 (ID: 6b491260-89bd-4891-8556-00544fabf60d)**
Soru Kökü: Uzun süreli ve sık tekrarlayan perikoronal enfeksiyon olgularında, inflamatuar yıkıma bağlı olarak radyografik incelemede retromolar sahada belirli değişiklikler izlenir. Aşağıdakilerden hangisi kronik perikoronitisin radyografik bulguları arasında yer **almaz**?
Doğru Şık (A): Periodontal ligamentte tam obliterasyon ve kök ankilozu
Açıklama: Tekrarlayan perikoronitis kemik rezorpsiyonuna yol açarak distal veya mesialde defektler, folikül sınırlarında kalınlaşma veya komşu dişte baskı kaynaklı rezorpsiyon oluşturabilir. Ancak perikoronitis bir inflamatuar süreçtir ve dişin ankilozuna (ligamentin tamamen kemikleşmesi) yol açması tipik veya beklenen radyografik bir bulgu değildir; enflamasyon aksine boşluk yaratır.

---

### ÇİFT 87 (Benzerlik: 0.70)

**Soru 1 (ID: 9f3e7a56-a9e7-4c3b-9eb2-e6f0bf20dab0)**
Soru Kökü: Çene kemiklerinde kanlanma bozukluğu (hipovaskülarizasyon) yaratarak bölgesel doku direncini düşüren ve sekonder enfeksiyonlarla osteomyelite zemin hazırlayan lokal kemik hastalıkları arasında aşağıdakilerden hangisi **yer almaz**?
Doğru Şık (E): Hipersementoz
Açıklama: Radyoterapi (radyasyon), osteopetrozis (mermer kemik), Paget hastalığı ve sementoosseöz displazi; kemiğin fizyolojik yapısını bozup medüller damarlanmasını azaltarak osteomyelite (özellikle iskemik kökenli) yatkınlık yaratır. Hipersementoz ise kök yüzeyinde anormal sement birikimidir, çevre kemiğin genel kanlanmasını bozarak osteomyelit zemini hazırlamaz.

**Soru 2 (ID: e9eb45b6-2cd8-4d16-9844-28a499661c49)**
Soru Kökü: Çenelerde hızlı litik kemik yıkımı ve periosteal yeni kemik reaksiyonu oluşturan hastalıkların radyolojik görünümleri osteomyeliti taklit edebilir ve yanlış tanıya yol açabilir. Aşağıdaki lezyonlardan hangisi mandibulada destrüktif osteomyelit benzeri bu kemik yıkım paternini oluşturan, primer ayırıcı tanıda yer alan durumlardan biri **değildir**?
Doğru Şık (C): Osteoma
Açıklama: Osteosarkom, lenfoma/lösemi, skuamöz hücreli karsinom invazyonu ve Langerhans hücreli histiyositoz; kemikte agresif litik yıkım yapan, sınırları belirsiz destrüksiyona yol açan ve periostu uyararak reaktif yeni kemik oluşumu (osteomyelite benzer sekestr veya soğan kabuğu) yapabilen hastalıklardır. Osteoma ise iyi sınırlı, son derece yavaş büyüyen, dışarıya doğru ekzofitik uzanan benign bir kortikal kemik hamartomudur ve agresif osteomyelit yıkımını taklit etmez.

---

### ÇİFT 88 (Benzerlik: 0.70)

**Soru 1 (ID: 5544351e-99ed-409c-8390-a5d6f7f841b2)**
Soru Kökü: Kemikte osteomiyelit enfeksiyonunun başlayabilmesi için bakteriyel virülansın ötesinde, savunma sisteminin zayıflaması veya lokal kemik damarlanmasının bozulması gerekir. Aşağıdaki sistemik patolojilerden hangisi, kaynak metne göre kemikte spesifik olarak hipovasküler duruma yol açarak osteomiyelite doğrudan predispozan faktör oluşturur?
Doğru Şık (B): Osteopetrozis
Açıklama: Radyasyon, osteopetrozis, Paget hastalığı ve sementoosseöz displazi çene kemiklerinde hipovasküler duruma (damarlanmada azalma) yol açarak enfeksiyona karşı savunmayı ciddi anlamda düşürür ve osteomiyelite direkt olarak zemin hazırlar. Sementoma (Sementoosseöz displazi dışındaki bağlamda fokal kalsifikasyonlar) doğrudan bir risk faktörü olarak sınıflandırılmamıştır.

**Soru 2 (ID: e03872ad-72a6-47e2-8357-7e39c3656bc8)**
Soru Kökü: Kemik dokusunda enfeksiyonun yerleşebilmesi için, bakteri girişinin yanı sıra immün sistemin baskılanması veya sistemik bir yetmezlik hali kişiyi osteomyelite predispoze hale getirir. Aşağıdakilerden hangisi osteomyelit gelişimine zemin hazırlayan sistemik faktörlerden biri **değildir**?
Doğru Şık (A): Romatoid artrit
Açıklama: Kaynak metne göre osteomyelite predispozan sistemik durumlar; diabetes mellitus, malarya, anemi, malnütrisyon, malignensi, AIDS, intravenöz ilaç kullanımı, sigara ve alkoldür. Romatoid artrit kronik bir otoimmün eklem hastalığıdır ancak doğrudan osteomyelit için klasik bir predispozan faktör olarak listelenmez.

---

### ÇİFT 89 (Benzerlik: 0.70)

**Soru 1 (ID: 2644bef0-529c-4031-a6c2-4bfd1cfd45b1)**
Soru Kökü: American Dental Association (ADA) klinik pratik kılavuzuna göre, kronik oral bifosfonat kullanan ve ağzında yaygın dental sorunları olan bir hastada acil olmayan rutin dental cerrahiler (örn. planlı çekimler, lokalize flap operasyonları) planlanırken çenedeki iyileşme rezervini korumak adına her bir sekstant arası bırakılması önerilen spesifik zaman aralığı (dinlendirme süresi) aşağıdakilerden hangisidir?
Doğru Şık (D): 2 ay
Açıklama: ADA, osteonekroz riskini dağıtmak ve kemik iyileşme kapasitesini (turnover yorgunluğunu) dengelemek için, acil olmayan cerrahi/dental prosedürlerde her altılı bölge (sekstant) işlemleri arasında en az 2 aylık bir zaman aralığı (dinlendirme) bırakılmasını önermektedir.

**Soru 2 (ID: d229e40e-4068-47ba-b4da-ea42201559f2)**
Soru Kökü: Uzun dönemli bifosfonat tedavisi planlanan veya halihazırda ilacı kullanmakta olan hastaların dental süreçlerinin yönetimiyle ilgili yayınlanan uluslararası dernek (ADA, AAOMS, CAOMS) kuralları referans alındığında, aşağıdaki klinik yaklaşımlardan hangisi **yanlıştır**?
Doğru Şık (B): İlacı uzun süredir kullanan hastalarda, kronu tamamen harabiyete uğramış periapikali sağlıklı dişler de risk oluşturduğu için acilen ve agresif olarak çekilmelidir.
Açıklama: Bifosfonat birikimi olan hastalarda mukoza bütünlüğünü bozan diş çekimleri, osteonekrozun tetiklenmesindeki 1 numaralı risk faktörüdür. Bu nedenle restorasyonu imkansız hale gelmiş ancak radyolojik apikal enfeksiyon belirtisi olmayan dişler için en güvenli ve önerilen tedavi şekli, dişi 'çekmek yerine' kronu diş eti seviyesinden keserek kökü asemptomatik biçimde kanal tedavisi ile (dekoronasyon) çene kemiği içinde bırakmaktır.

---

### ÇİFT 90 (Benzerlik: 0.70)

**Soru 1 (ID: 47821772-30f9-4fef-af0a-d3f73ecd2227)**
Soru Kökü: Canadian Association of Oral and Maxillofacial Surgeons (CAOMS) ve AAOMS kılavuzlarına göre yaklaşımlar incelendiğinde, uzun süredir oral bifosfonat kullanan bir hastada periapikal apse sebebiyle **acil diş çekimi endikasyonu** doğduğunda CAOMS'un önerdiği spesifik ilaç yönetimi protokolü aşağıdakilerden hangisidir?
Doğru Şık (E): Tıp doktoru konsültasyonu ile bifosfonatın hemen kesilmesi ve çekim yarasının tamamen iyileşmesine kadar ilacın kullanılmaması
Açıklama: CAOMS kılavuzuna göre acil dental tedavi (ör. apse, çekim) gerektiren durumlarda, medikal konsültasyon ile bifosfonatın derhal kesilmesi ve soket epitelizasyonu (yara iyileşmesi) tamamen sağlanıncaya kadar ilacın tekrar kullanılmaması önerilir. AAOMS ise acil olmayan tedaviler için 3 ay kuralını işletir.

**Soru 2 (ID: ad4037a0-5f51-4a1f-a878-a5252d2e14b2)**
Soru Kökü: Sistemik kemik metastazı veya malign hiperkalsemi nedeniyle kısa süre içinde intravenöz (IV) bifosfonat tedavisine başlanması planlanan bir hastada, restorasyon imkanı olmayan dişlerin profikaltik çekimi gerçekleştirilmiştir. Çekim boşluklarında tam mukozal kapanmanın (primer epitelizasyon) sağlanıp sistemik bifosfonat ilacına güvenle başlanabilmesi için hastanın cerrahi sonrası en az ne kadar süre (gün) beklenmesi tıp pratiğinde tavsiye edilmektedir?
Doğru Şık (A): 14 - 21 gün
Açıklama: IV bifosfonatlara başlanmadan önce diş hekimi hastayı değerlendirip cerrahi işlemleri bitirmelidir. Diş çekimi yapıldıysa, yumuşak doku kapanması ve yara bölgesinin güvenli bir şekilde iyileşebilmesi için ilaca başlanmadan önce asgari 14-21 gün beklenmelidir.

---

### ÇİFT 91 (Benzerlik: 0.70)

**Soru 1 (ID: 6cdf0e0b-9599-423e-9977-8573821772b2)**
Soru Kökü: Yirmi bir yaşında erkek öğrenci, sağ alt arka bölgesinde şiddetli ağrı, ağız açmada zorluk (trismus) ve kötü tat şikayetiyle acil servise başvuruyor. Klinik muayenede ilgili bölgede dişi örten mukozal yapıda eritem ve ödem izleniyor. İltihabi hastalıklar içinde perikoronal infeksiyona çenelerde istatistiksel olarak en sık neden olan diş aşağıdakilerden hangisidir?
Doğru Şık (D): Mandibular üçüncü molar
Açıklama: Perikoronitis, büyük oranda çenelerde sürme yeri bulamayan veya anatomik pozisyonu gereği yarı sürmüş pozisyonda kalan mandibular üçüncü molar (yirmi yaş) dişlerinde izlenir. Yer darlığı ve operkülumun çiğneme travmasına açık olması sebebiyle mandibular 3. molarlar en yüksek risk grubundadır.

**Soru 2 (ID: 6fc733a7-bc48-4b90-885e-ad44a923fae3)**
Soru Kökü: 45 yaşında bir erkek hasta, son 3 gündür sağ mandibulasında giderek artan şiddetli zonklayıcı ağrı, dudak köşesinde uyuşukluk (parestezi) ve komşu dişlerde sallanma (mobilite) şikayetiyle başvurmuştur. Muayenede pürülan drenaj, ateş ve lökositoz tespit edilmiştir. Bu bulgular ışığında hastadaki **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (A): Akut osteomyelit
Açıklama: Erkeklerde ve mandibulada daha sık görülen, hızlı başlayan zonklayıcı ağrı, dişlerde mobilite, pürülan drenaj, ateş, lökositoz ve enfeksiyonun inferior alveolar siniri sıkıştırmasına/hasarına bağlı gelişen 'alt dudak parestezisi' Akut Osteomyelit'in tipik ve tanısal klinik tablosudur. Apikal periodontitiste yaygın dudak parestezisi beklenmez.

---

### ÇİFT 92 (Benzerlik: 0.69)

**Soru 1 (ID: 6fc733a7-bc48-4b90-885e-ad44a923fae3)**
Soru Kökü: 45 yaşında bir erkek hasta, son 3 gündür sağ mandibulasında giderek artan şiddetli zonklayıcı ağrı, dudak köşesinde uyuşukluk (parestezi) ve komşu dişlerde sallanma (mobilite) şikayetiyle başvurmuştur. Muayenede pürülan drenaj, ateş ve lökositoz tespit edilmiştir. Bu bulgular ışığında hastadaki **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (A): Akut osteomyelit
Açıklama: Erkeklerde ve mandibulada daha sık görülen, hızlı başlayan zonklayıcı ağrı, dişlerde mobilite, pürülan drenaj, ateş, lökositoz ve enfeksiyonun inferior alveolar siniri sıkıştırmasına/hasarına bağlı gelişen 'alt dudak parestezisi' Akut Osteomyelit'in tipik ve tanısal klinik tablosudur. Apikal periodontitiste yaygın dudak parestezisi beklenmez.

**Soru 2 (ID: c01f5698-ea0e-4723-876f-9b092a337c7b)**
Soru Kökü: Otuz beş yaşındaki erkek hasta, üst sağ birinci büyük azı dişinde sürekli bir dolgunluk hissi ve palpasyonda ağrı şikayetiyle başvurmuştur. Radyografide periodontal aralıkta genişleme izlenmiş, ancak apsede görülen fluktuasyon veya fluktuan şişlik saptanmamıştır. Bu klinik tablonun akut apikal periodontitis aşamasında olduğunu ve henüz apikal apseye dönüşmediğini gösteren hücresel düzeydeki karakteristik aşağıdakilerden hangisidir?
Doğru Şık (C): Kemik harabiyetine neden olacak hücre aktivasyonunun henüz başlamamış olması
Açıklama: Akut apikal periodontitis aşamasında, kemik harabiyetine neden olacak osteoklastik hücre aktivasyonu henüz başlamamıştır. Eğer irritan ajan doku destrüksiyonuna neden olacak kadar güçlü bir seviyeye ulaşırsa püy formasyonu ve ardından apse oluşumu gerçekleşir. A ve D şıkları granülom ve kronik apse gibi kronik lezyonları, B şıkkı ise akut dentoalveolar apsenin mekanizmasını tanımlar.

---

### ÇİFT 93 (Benzerlik: 0.69)

**Soru 1 (ID: 4039cb0e-36e1-45e2-a864-874bd35c7f69)**
Soru Kökü: 55 yaşında erkek hasta, alt çenede inatçı ağrı, parestezi ve aralıklı pürülan drenaj şikayetleriyle başvuruyor. KIBT incelemesinde çevre kemikten daha radyoopak dev sekestr alanları ve granüler kemik paterni tespit edilerek kronik osteomiyelit tanısı konuluyor.
Bu hastanın klinik tablosu medikal ve lokal müdahalelere direnç gösterdiğinde uygulanması gereken en uygun kombine cerrahi-medikal yaklaşım aşağıdakilerden hangisidir?
Doğru Şık (C): Hiperbarik oksijen tedavisi, uzun süreli antibiyotik kullanımı ve sekestrektomi
Açıklama: Kronik osteomiyelitte gelişen nekrotik odakların kan damarı ağı tamamen çöktüğü için sistemik antibiyotikler lezyon merkezine ulaşamaz. Bu nedenle ölü kemik dokusunun fiziksel olarak çıkarılması (sekestrektomi veya dekortikasyon), doku oksijenasyonunu ve anjiyogenezi artırmak için hiperbarik oksijen (HBO) desteği sağlanması ve nüksü önlemek için çok uzun süreli (aylar süren) spesifik antibiyotik kullanılması zorunludur. Kortikosteroid ve radyoterapi kemik savunmasını daha da yıkacağı için kesinlikle kontrendikedir.

**Soru 2 (ID: 6328e575-b496-486c-89d0-1c3fc87b4309)**
Soru Kökü: 62 yaşında osteoporoz hastası kadın, mandibula lingual bölgesinde 1 cm boyutunda açığa çıkmış, üzeri pürülan eksuda ile kaplı ve çevre mukozasında ciddi eritem saptanan bir lezyon ile başvuruyor. Şiddetli ağrısı olan hastanın panoramik radyografisinde hafif kortikal düzensizlik izleniyor.
AAOMS tarafından tanımlanan Evre II tablosuyla tam uyumlu olan bu hastanın ilk güncel tedavi basamağı olarak aşağıdakilerden hangisi doğrudan uygulanmalıdır?
Doğru Şık (C): Antiseptik gargara ve analjeziklere ek olarak, bakteriyel kontrol için topikal veya sistemik antibiyotik başlanması
Açıklama: Bifosfonat ilişkili nekrozda Evre II'nin ana klinik komponenti ağrısız kemik ekspozisyonuna 'sekonder enfeksiyon ve yumuşak doku enflamasyonunun' eklenmesidir (eritem, ağrı, eksuda). Tedavide ilk kural enfeksiyon tablosunu hafifletmektir. Bu nedenle hastalara klorheksidinli gargaralar eşliğinde geniş spektrumlu sistemik (penisilin/metronidazol vb.) antibiyotikler reçete edilerek medikal non-cerrahi baskılama uygulanır. Blok rezeksiyon ancak fistül-fraktür gibi Evre III komplikasyonlarında gündeme gelebilir.

---

### ÇİFT 94 (Benzerlik: 0.69)

**Soru 1 (ID: 6b491260-89bd-4891-8556-00544fabf60d)**
Soru Kökü: Uzun süreli ve sık tekrarlayan perikoronal enfeksiyon olgularında, inflamatuar yıkıma bağlı olarak radyografik incelemede retromolar sahada belirli değişiklikler izlenir. Aşağıdakilerden hangisi kronik perikoronitisin radyografik bulguları arasında yer **almaz**?
Doğru Şık (A): Periodontal ligamentte tam obliterasyon ve kök ankilozu
Açıklama: Tekrarlayan perikoronitis kemik rezorpsiyonuna yol açarak distal veya mesialde defektler, folikül sınırlarında kalınlaşma veya komşu dişte baskı kaynaklı rezorpsiyon oluşturabilir. Ancak perikoronitis bir inflamatuar süreçtir ve dişin ankilozuna (ligamentin tamamen kemikleşmesi) yol açması tipik veya beklenen radyografik bir bulgu değildir; enflamasyon aksine boşluk yaratır.

**Soru 2 (ID: b5bb1a0d-a510-45a3-8347-85f4153ad10c)**
Soru Kökü: Akut perikoronal enfeksiyon tablosunda, enfeksiyonun yayıldığı fasyal alanlara ve sistemik dolaşıma karışmasına bağlı olarak çeşitli bulgular ortaya çıkabilir. Aşağıdakilerden hangisi şiddetli bir perikoronitisin lokal veya sistemik belirtilerinden biri **değildir**?
Doğru Şık (E): İlgili diş pulpasının enfeksiyon nedeniyle akut nekroza uğraması
Açıklama: Perikoronitis dişin çevresindeki yumuşak dokunun (operkülum ve diş eti) enfeksiyonudur. Ağrı, trismus, ateş ve lenfadenopati gibi yaygın yumuşak doku semptomları yapar. Ancak enfeksiyon mineden veya sementten pulpaya doğrudan giremeyeceği için diş pulpasının sırf perikoronitise bağlı akut nekroza uğraması beklenen bir bulgu değildir. Dişin vitalitesi genellikle korunur.

---

### ÇİFT 95 (Benzerlik: 0.69)

**Soru 1 (ID: 5ff4a31f-223b-47ea-a6e8-f69dd8fef913)**
Soru Kökü: Uzun süredir IV aminobifosfonat kullanan onkoloji hastasının rutin panoramik radyografisi incelenmektedir. İntraoral muayenede henüz klinik olarak bir mukoza açıklığı (kemik ekspozisyonu) gerçekleşmemesine rağmen, radyografide bu ilaca bağlı gelişecek metabolik kemik değişimlerinin en erken habercisi (prodromal bulgusu) olarak değerlendirilen görüntü aşağıdakilerden hangisidir?
Doğru Şık (C): Diş köklerini çevreleyen periodontal ligament sınırında lamina dura'nın osteosklerozisi
Açıklama: Bifosfonatların yarattığı kemik mineralizasyon bozuklukları ve osteonekrozun ilk radyolojik habercisi, lamina dura'nın patolojik olarak kalınlaşıp belirginleşmesidir (osteosklerozis). Bu bulgu sonrasında yaygın skleroz veya ekspoze sekestrlar ortaya çıkar.

**Soru 2 (ID: ef07c115-53c3-42d0-97e8-16bbb69bb894)**
Soru Kökü: Prostat kanseri kemik metastazı tedavisi için intravenöz bifosfonat kullanan 72 yaşındaki hastanın alt sol birinci molar dişi enfeksiyon nedeniyle çekilmiştir. Aylar geçmesine rağmen yara yeri kapanmamış ve kemik dokusu açığa çıkmıştır.
Vücudun tamamı ilaca maruz kalmasına rağmen, bifosfonata bağlı osteonekrozun uzun kemiklerden ziyade spesifik olarak çene kemiklerinde görülmesinin en temel patofizyolojik ve histolojik nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Çene kemiklerinin döngü (turnover) hızının çok fazla olması ve buna bağlı yüksek oranda ilacı depolaması
Açıklama: Çenelerde (özellikle alveolar krette) diş hareketleri, sürekli çiğneme kuvvetleri ve diş destek dokularının remodelasyon ihtiyacı nedeniyle kemik metabolizması (turnover hızı) diğer iskelet kemiklerine oranla yaklaşık 10 kat daha hızlıdır. Osteoklastik ve osteoblastik aktivitenin bu kadar yoğun olduğu bir bölgeye kan dolaşımıyla çok daha fazla oranda bifosfonat ulaşır ve depolanır. Ek olarak ağız mukozasının travmaya açık ve bakteri dolu olması lokal tetikleyici rol oynar.

---

### ÇİFT 96 (Benzerlik: 0.69)

**Soru 1 (ID: 6fc733a7-bc48-4b90-885e-ad44a923fae3)**
Soru Kökü: 45 yaşında bir erkek hasta, son 3 gündür sağ mandibulasında giderek artan şiddetli zonklayıcı ağrı, dudak köşesinde uyuşukluk (parestezi) ve komşu dişlerde sallanma (mobilite) şikayetiyle başvurmuştur. Muayenede pürülan drenaj, ateş ve lökositoz tespit edilmiştir. Bu bulgular ışığında hastadaki **en olası** teşhis aşağıdakilerden hangisidir?
Doğru Şık (A): Akut osteomyelit
Açıklama: Erkeklerde ve mandibulada daha sık görülen, hızlı başlayan zonklayıcı ağrı, dişlerde mobilite, pürülan drenaj, ateş, lökositoz ve enfeksiyonun inferior alveolar siniri sıkıştırmasına/hasarına bağlı gelişen 'alt dudak parestezisi' Akut Osteomyelit'in tipik ve tanısal klinik tablosudur. Apikal periodontitiste yaygın dudak parestezisi beklenmez.

**Soru 2 (ID: d476b3e5-583a-41fc-9e0f-de896212cbc1)**
Soru Kökü: 21 yaşında erkek hasta, sol alt yirmi yaş dişi bölgesinde ani başlayan şiddetli ağrı ve ağız açmada kısıtlılık şikayetiyle başvurmuştur. İlgili bölgede dişi örten gingival flep altında yiyecek birikimi ve belirgin eritem saptanmıştır. Semptomların henüz yeni başladığı bu akut perikoronal enfeksiyon olgusunun radyografik değerlendirmesinde **en olası** bulgu aşağıdakilerden hangisidir?
Doğru Şık (A): Kısa süreli bir olgu olduğu için kemik defekti izlenmez ve folikül sınırları normaldir.
Açıklama: Akut ve kısa süreli perikoronal enfeksiyon olgularında henüz kemik yıkımı başlamadığı için kemik defekti yoktur ve folikül sınırları normal olarak izlenir. Retromolar kemik defekti, folikül sınırlarında kalınlaşma ve komşu diş kökünde rezorbsiyon; akut ataklardan ziyade tekrarlayan ve uzun süreli kronik perikoronit vakalarının radyolojik bulgularıdır. Erken dönemde yalnızca yumuşak doku semptomları hakimdir.

---

### ÇİFT 97 (Benzerlik: 0.69)

**Soru 1 (ID: 670708f6-f296-4e7f-8033-26dd58dcddfa)**
Soru Kökü: Bifosfonatların çene kemiklerinde ciddi osteonekroz yapabilme potansiyelleri, kemik rezorpsiyonunu hücresel düzeyde bozmasından kaynaklanmaktadır.
Aşağıdakilerden hangisi bifosfonatların osteoklastik yıkımı inhibe ettiği hücresel mekanizmalardan biri **bulunmaz**?
Doğru Şık (C): Yüksek dozlarda verildiğinde kemik iliğindeki osteoblast diferansiyasyonunu çok güçlü şekilde uyarıp hiperkalsifikasyon yapmak
Açıklama: Bifosfonatlar osteoklast fonksiyonunu ve kemik rezorpsiyonunu bloke ederek kemik kütlesini korurlar. Terapötik (çok düşük) dozlarda osteoblast differansiyasyonunu uyarabildikleri bildirilse de, sistemik hastalıklar için yüksek dozlarda verildiklerinde osteoblastik aktiviteyi asla stimüle etmezler; tam tersine osteoblastlar üzerinde sitotoksik etki oluşturarak onların da apoptoza uğramasına ve kemik yapımının tamamen durmasına yol açarlar. C seçeneği mekanizmaya tamamen terstir.

**Soru 2 (ID: 7dd587d1-dd41-4ea9-96d1-089148015c8c)**
Soru Kökü: Bifosfonatların kemik hücreleri üzerindeki regülasyon etkileri uygulanan doza bağımlı olarak ciddi değişkenlik gösterir. Plazma konsantrasyonu tedavi edici dozlarda olduğunda osteoblast diferansiyasyonunu uyaran bu ajanlar, çok yüksek dozlarda osteoblastlar üzerinde spesifik olarak nasıl bir yıkıcı etki gösterirler?
Doğru Şık (E): Doğrudan sitotoksik etki göstererek ilgili osteoblastların programlanmış hücre ölümüne (apoptozise) neden olurlar
Açıklama: Bifosfonatlar terapötik dengeli dozlarda osteoblast diferansiyasyonunu uyarırken, yüksek dozlarda tam tersi bir davranış sergileyerek osteoblastlar üzerinde sitotoksik etki (hücre zehirlenmesi) gösterir ve onları apoptozise (programlı ölüm) zorlarlar. Bu durum osteonekroz patofizyolojisinde kemik yapımının neden durduğunu açıklar.

---

### ÇİFT 98 (Benzerlik: 0.69)

**Soru 1 (ID: 47821772-30f9-4fef-af0a-d3f73ecd2227)**
Soru Kökü: Canadian Association of Oral and Maxillofacial Surgeons (CAOMS) ve AAOMS kılavuzlarına göre yaklaşımlar incelendiğinde, uzun süredir oral bifosfonat kullanan bir hastada periapikal apse sebebiyle **acil diş çekimi endikasyonu** doğduğunda CAOMS'un önerdiği spesifik ilaç yönetimi protokolü aşağıdakilerden hangisidir?
Doğru Şık (E): Tıp doktoru konsültasyonu ile bifosfonatın hemen kesilmesi ve çekim yarasının tamamen iyileşmesine kadar ilacın kullanılmaması
Açıklama: CAOMS kılavuzuna göre acil dental tedavi (ör. apse, çekim) gerektiren durumlarda, medikal konsültasyon ile bifosfonatın derhal kesilmesi ve soket epitelizasyonu (yara iyileşmesi) tamamen sağlanıncaya kadar ilacın tekrar kullanılmaması önerilir. AAOMS ise acil olmayan tedaviler için 3 ay kuralını işletir.

**Soru 2 (ID: e60f70e4-5b09-46b0-8d30-fb65d132d0a3)**
Soru Kökü: Amerikan Ağız ve Çene-Yüz Cerrahları Birliği (AAOMS) kriterlerine göre, bir hastaya kesin olarak 'bifosfonatla ilişkili çene osteonekrozu' tanısı konulabilmesi için üç temel klinik ve anamnez şartının eş zamanlı olarak sağlanması aranır. Aşağıdakilerden hangisi bu kesin tanı kriterlerinden biri **değildir**?
Doğru Şık (D): Radyolojik değerlendirmede sınırları belirgin bir kemik içi sekestr formasyonunun izlenmesi
Açıklama: AAOMS BRONJ (MRONJ) tanı kriterleri 3 adettir: 1) Devam eden veya geçmişte bifosfonat tedavisi almak, 2) Baş-boyun radyoterapisi öyküsünün OLMAMASI (osteoradyonekrozu dışlamak için), 3) Maksilla/mandibulada en az 8 haftadır kapanmayan ekspoze nekrotik kemik varlığı. Radyolojik sekestr görünümü BRONJ'a veya genel osteomiyelite eşlik edebilir ancak tanı koydurucu spesifik 'kriter' listesinde yer almaz.

---

### ÇİFT 99 (Benzerlik: 0.69)

**Soru 1 (ID: 02e163f8-ae27-4f4c-a6b9-7e406c6cf5c3)**
Soru Kökü: Ludwig anjini gelişen bir hastada hava yolu güvenliği sağlanamaz ve acil tedavi uygulanmazsa ölümcül sistemik komplikasyonlar ortaya çıkabilir. Aşağıdakilerden hangisi hastalığın agresif ilerlemesiyle görülebilecek komplikasyonlar arasında **yer almaz**?
Doğru Şık (D): Maksiller sinüs içinde lokalize flegmon oluşumu
Açıklama: Ludwig anjini tedavi edilmezse solunum tıkanıklığı, septisemi, karotis arter erozyonu ve kavernöz sinüs trombozu gibi majör boyun/kraniyal damar komplikasyonlarına neden olur. Alt çene boşluklarından kaynaklanan enfeksiyonun maksiller sinüs içine flegmon olarak yerleşmesi tipik bir Ludwig anjini komplikasyonu değildir.

**Soru 2 (ID: 40e3ce5c-bab2-4a93-a39b-dd3ccf64735a)**
Soru Kökü: Ciddi boyun enfeksiyonlarının seyri, ayırıcı tanı ve komplikasyonları bakımından farklılıklar gösterir. Ludwig anjini bulguları ile osteomyelit bulgularının klinik entegrasyonu düşünüldüğünde, Ludwig anjini gelişmiş bir hastayı hayatta tutmak için izlenmesi gereken **en kritik (acil)** anatomik bulgu ve risk aşağıdakilerden hangisidir?
Doğru Şık (C): Kas dokusu arasına sızan irinin dili orofarinkse iterek oluşturacağı solunum tıkanıklığı
Açıklama: Ludwig anjininde mortalitenin bir numaralı nedeni 'asfiksi' yani solunum yolu tıkanıklığıdır. Flegmon nedeniyle ağız tabanı (mylohyoid kas) yukarı doğru deplase olur, bu da dil kitlesini geriye ve yukarıya (orofarinkse) iterek hava yolunu fiziksel olarak tıkar. Parestezi, sekestr ve patolojik kırıklar osteomyelitin; kalsifikasyonlar ise kronik lenfadenitlerin konusu olup acil mortalite sebepleri değildir.

---

### ÇİFT 100 (Benzerlik: 0.69)

**Soru 1 (ID: 67732deb-ff1b-4f89-b86c-ae6dce09fc2c)**
Soru Kökü: Nonvital bir dişin apekisinde en sık görülen ve enfekte kök kanalından kaynaklanan yoğun, uzun süreli irritasyonun bir sonucu olan lezyon aşağıdakilerden hangisidir?
Doğru Şık (A): Periapikal granülom
Açıklama: Periapikal granülom (kronik apikal periodontitis), pulpal enfeksiyona karşı savunma mekanizmasının ürettiği granülasyon dokusu olup nonvital dişlerin apikalinde en sık karşılaşılan patolojidir. Kök ucundaki uzun süreli düşük virülanslı irritasyon sonucu nekrotik kemik ve yumuşak dokunun yerini granülasyon dokusu alır. Radiküler kist ise granülomdan daha sonra, epitel proliferasyonu ile gelişen sekonder bir durumdur.

**Soru 2 (ID: 69c9998f-b937-4c4c-b63b-32424ed7f563)**
Soru Kökü: Uzun süreli ve düşük virülanslı bir pulpal enfeksiyonu takiben gelişen kronik periapikal absede, lezyonun kronikliğini işaret eden radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Radyolüsent alanı çevreleyen, kalınlığı değişen sklerotik trabeküller
Açıklama: Kronik periapikal apsede çoğunlukla sınırları belirgin olmayan radyolüsent alan mevcuttur ve bu alan, kalınlığı değişen radyopak sklerotik trabeküller ile çevrilidir. Bu sklerotik yapı doğrudan lezyonun kronikliğinin göstergesidir. Diffüz genişleme akut başlangıcı, soğan kabuğu görünümü ise osteomiyelit reaksiyonunu düşündürür.

---

### ÇİFT 101 (Benzerlik: 0.69)

**Soru 1 (ID: 69c9998f-b937-4c4c-b63b-32424ed7f563)**
Soru Kökü: Uzun süreli ve düşük virülanslı bir pulpal enfeksiyonu takiben gelişen kronik periapikal absede, lezyonun kronikliğini işaret eden radyolojik bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Radyolüsent alanı çevreleyen, kalınlığı değişen sklerotik trabeküller
Açıklama: Kronik periapikal apsede çoğunlukla sınırları belirgin olmayan radyolüsent alan mevcuttur ve bu alan, kalınlığı değişen radyopak sklerotik trabeküller ile çevrilidir. Bu sklerotik yapı doğrudan lezyonun kronikliğinin göstergesidir. Diffüz genişleme akut başlangıcı, soğan kabuğu görünümü ise osteomiyelit reaksiyonunu düşündürür.

**Soru 2 (ID: 8fcf89c2-b2e3-4331-bd93-99729c226e9b)**
Soru Kökü: Uzun süredir tekrarlayan perikoronal enfeksiyon atakları geçiren hastanın radyografisinde, etkilenen mandibular 3. molar diş bölgesinde izlenmesi **beklenmeyen** bulgu aşağıdakilerden hangisidir?
Doğru Şık (E): Enfeksiyonun uyarımı ile kemik yüzeyinde soğan kabuğu tarzı yeni kemik yapımı
Açıklama: Kronik perikoronal enfeksiyonlarda folikül kalınlaşması, komşu diş kökü rezorpsiyonu ve dişin mesial/distaliyle sınırlı retromolar kemik defekti beklenir. Soğan kabuğu görünümü (ikinci bir kemik tabakası oluşumu) ise kronik perikoronitin değil, enfeksiyonun kemik iliğini geçip periostu uyardığı proliferatif periostitis (osteomyelit) tablosunun radyolojik özelliğidir. Bu nedenle perikoronitte izlenmez.

---

