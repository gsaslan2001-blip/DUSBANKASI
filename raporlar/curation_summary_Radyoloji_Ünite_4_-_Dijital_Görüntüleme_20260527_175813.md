# ⚔️ Ölüm Maçı Raporu — Radyoloji — Ünite 4 - Dijital Görüntüleme

*Üretim: 2026-05-27 17:58* · Karar verici: **DeepSeek-v4-pro**

| Metrik | Değer |
|---|---|
| Toplam şüpheli çift | 10 |
| İkisi de korundu | 10 |
| Elenen soru | 0 |
| Atlanan | 0 |

---

## 1. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 84% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Her iki soru da FOV ile ilgili olmasına rağmen farklı ilkeleri (ALARA vs. rezolüsyon-matriks ilişkisi) sorguladığı için birlikte kalmalıdır. | analiz: İlk soru ALARA prensibi ve FOV boyutunun gereksiz yere maksimumda kullanılmaması gerektiğini sorgularken, ikinci soru sabit matrikste FOV değişiminin rezolüsyona etkisini sorgulamaktadır. Farklı alt-kavramları test eden bu sorular kopya değildir.

**SORU 1** · `e07260b6-d856-4edf-89fb-fa0773d27842`

> 55 yaşında erkek hasta kliniğe panoramik ve kesitsel üç boyutlu görüntüleme amacıyla başvurmuştur. Cihazın FOV (Field of View / Görüntüleme alanı) özellikleri dikkate alındığında aşağıdaki ifadelerden hangisi **yanlıştır**?

- **A)** İncelenecek hedefin boyutu baz alınarak mümkün olan en dar şekilde seçilmelidir.
- **B)** Matriks boyutu sabit tutulduğunda FOV artarsa geometrik çözünürlük azalır.
- **C)** Bölgenin anatomik hacminden bağımsız olarak tanı için daima maksimum FOV boyutu kullanılmalıdır. ✅
- **D)** Dijital radyolojide sensörün tarayabildiği aktif fiziksel alanı ifade eder.
- **E)** Gereksiz doz alımını engellemek için sadece endikasyon alanını kapsamalıdır.

*Doğru cevap:* **C**

*Açıklama:* ALARA (As Low As Reasonably Achievable) prensipleri gereği FOV sadece hedeflenen patoloji veya bölgeye yetecek büyüklükte olmalı, asla körü körüne maksimum boyutta kullanılmamalıdır. Matriks boyutu sabitken geniş bir FOV seçmek piksellerin büyümesine, dolayısıyla detay rezolüsyonunun düşmesine (noise artışına) neden olur. Daha dar bir FOV hastanın radyasyon yükünü ciddi ölçüde azaltırken tanı değerini yükseltir.

**SORU 2** · `fb2aaf22-f21a-4b98-9bc9-9c6b727e6bcb`

> 55 yaşında erkek hasta kliniğe panoramik görüntüleme amacıyla başvurmuştur. Cihazın matriks boyutu sabit tutulup, farklı bir FOV (Field of View) seçilerek çekim yapılmıştır. FOV seçimi, rezolüsyon ve matriks ilişkisi göz önüne alındığında aşağıdaki ifadelerden hangisi **yanlıştır**?

- **A)** Dijital radyolojide FOV, sensörün görüntülediği fiziksel alanın genişliğidir.
- **B)** Panoramik gibi ekstraoral çekimlerde FOV büyüdükçe hastanın maruz kaldığı hedef bölge genişler.
- **C)** Matriks sabitken FOV artırıldığında, mevcut piksellerin kapladığı alan genişleyeceği için geometrik çözünürlük azalır.
- **D)** FOV azaldıkça sensör matriksteki pikselleri küçülterek geometrik çözünürlüğün aynı oranda düşmesine neden olur. ✅
- **E)** Klinik muayene ve endikasyona göre, patolojinin boyutuna yetecek en uygun minimal FOV seçilmelidir.

*Doğru cevap:* **D**

*Açıklama:* Matriks boyutu sabitken (örneğin 1024x1024) FOV daraltılırsa, bu sabit pikseller daha küçük bir anatomik alana sıkışır ve birim alana düşen piksel yoğunluğu (çözünürlük) artar; düşmez. FOV'un artması (genişlemesi) ise aynı sayıda pikselin daha geniş alana dağılmasını sağlayacağından rezolüsyonu olumsuz etkiler. Bu temel geometrik oran kuralı dijital planlamada altın standarttır.


---

## 2. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 79% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı konuyu farklı açılardan (klinik müdahale vs. fiziksel mekanizma) sorguladığı için birbirini tamamlayıcı niteliktedir ve her ikisi de veritabanında kalmalıdır. | analiz: İki soru da kuantum beneklenmesini ele almasına rağmen, Soru 1 bu sorunu çözmek için yapılacak parametre değişikliğini (mAs artırma) sorgularken, Soru 2 kuantum beneklenmesinin oluşum mekanizmasını (foton yetersizliği) sorgulamaktadır. Farklı yönelimler ve farklı doğru şıklar içerdiklerinden aynı bilgiyi tekrar sormamaktadırlar.

**SORU 1** · `25ce193a-65b9-4f19-8414-ed393bedf217`

> Konvansiyonel ve dijital radyografilerde görüntü kirliliğinin (noise) en temel kaynağı kuantum beneklenmesidir. Kuantum beneklenmesini azaltarak görüntü homojenliğini artırmak isteyen bir klinisyenin radyografik çekim parametrelerinde aşağıdaki değişikliklerden hangisini yapması en akılcıdır?

- **A)** Tüp akımını (mAs) artırarak reseptöre ulaşan foton sayısını çoğaltmak ✅
- **B)** Kilovoltajı (kVp) artırarak ışının penetrasyon gücünü maksimuma çıkarmak
- **C)** Hızlı (yüksek rezolüsyonlu) görüntü alıcı sensörler tercih etmek
- **D)** Fokal spot ile obje arasındaki mesafeyi uzatarak difüzyonu engellemek
- **E)** Analog-dijital çeviricinin bit derinliğini azaltmak

*Doğru cevap:* **A**

*Açıklama:* Kuantum beneklenmesi, detektöre ulaşan x-ışını fotonlarının yetersizliği (foton açlığı) nedeniyle oluşur ve bu durum görüntünün pürüzlü, benekli görünmesine yol açar. Bu sorunu çözmenin temel mekanik kuralı, tüpten çıkan foton sayısını belirleyen mAs (miliamper-saniye) değerini artırmaktır. Çeldirici olarak verilen kVp artırımı ve hızlı alıcı kullanımı, kontrastı düşürüp mottle etkisini daha belirgin hale getirebileceğinden yanlış müdahalelerdir; aksine yavaş reseptör, düşük kVp ve yüksek mAs ideal kombinasyondur.

**SORU 2** · `3ea0ccdd-727f-4e25-ba61-2fb4592ae81b`

> Konvansiyonel ve dijital radyografide görüntü kalitesini ciddi şekilde düşüren ve en temel gürültü (noise) kaynağı olan 'Kuantum beneklenmesinin' fiziksel oluşum mekanizması aşağıdakilerden hangisidir?

- **A)** Dedektör yapısındaki amorf selenyum kristallerinin düzensiz dizilimi
- **B)** Sintilatör ekranın kalınlığına bağlı ikincil foton saçılımı
- **C)** Sensöre ve ekrana ulaşan x-ışını foton sayısının istatistiksel olarak yetersiz kalması ✅
- **D)** Fosfor plaktaki baryum florobromid tabakasının nemlenmesi
- **E)** CMOS sensörlerde her pikselin izole elektrik şarjı üretmesi

*Doğru cevap:* **C**

*Açıklama:* Kuantum beneklenmesi (quantum mottle), x-ışını demetinin doğasındaki rastgelelikten kaynaklanır ve sensöre birim alanda yeterli sayıda x-ışını fotonu çarpmadığında (düşük mAs/kVp veya yavaş reseptör) piksel üzerinde homojen olmayan, kumlu/benekli bir desen yaratır. Tamamen dedektöre ulaşan foton azlığına bağlı istatistiksel bir gürültüdür.


---

## 3. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 78% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: İki soru aynı bilgiyi farklı kök yapıları (negatif/pozitif) ve farklı sorgulama amaçları (uyumsuz ifade / neden-sonuç) ile test ettiğinden, her ikisi de değerli varyasyonlardır. | analiz: Soru 1, direkt sistemlerle bağdaşmayan ifadeyi (sintilatör zorunluluğu) sorgularken, Soru 2 direkt sistemlerin yüksek çözünürlük nedenini (sintilatör yokluğuna bağlı saçılma azalması) sorgulamaktadır. Aynı kavramı test etseler de, ilki olumsuz ('değildir'), ikincisi olumlu ve nedensel bir yönelime sahiptir; bu farklı soru tipi tanımına girer.

**SORU 1** · `037fbc5f-91ae-430a-abc1-c56c2553cc3c`

> Ekstraoral radyografide kullanılan flat panel dedektör tiplerinden 'Direkt Sistemler' ile ilgili aşağıdaki ifadelerden hangisi dedektör bileşenleri ve çalışma mekanizmasıyla bağdaşır **değildir**?

- **A)** Fotoiletken olarak çoğunlukla amorf selenyum (a-Se) kullanılır.
- **B)** X-ışını enerjisinin ara bir form olan ışığa çevrilmesi için sintilatör tabakası zorunludur. ✅
- **C)** Elektronik algılama ve okuma işlemi için ince film transistör (TFT) dizilimi kullanılır.
- **D)** Ara dönüşüm olmadığı için ışık fotonlarının saçılması yaşanmaz ve görüntü keskinliği artar.
- **E)** Objeyi geçen x-ışınları fotoiletkenlerde doğrudan elektron bazlı yük değişimine neden olur.

*Doğru cevap:* **B**

*Açıklama:* Flat panel dedektörlerdeki direkt sistemler, x-ışınını aracı bir tabaka (sintilatör) olmadan fotoiletken aracılığıyla doğrudan elektriğe (elektrona) çevirir. Sintilatör tabakası (gadolinyum oksisülfit, sezyum iyodür) görünür ışık oluşturarak çalıştığı için sacede 'İndirekt Flat Panel' sistemlerin kalbidir. Direkt sistemler bu difüzyonu pas geçtiği için daha keskin imajlar verir.

**SORU 2** · `364fd7c4-7e58-4b7d-b071-a3a05ba6b396`

> Baş-boyun görüntülemesinde kullanılan flat (yassı) panel dedektörler, sistem tasarımına göre direkt ve indirekt olarak ikiye ayrılır. Direkt dönüşümlü flat panel sistemlerin, indirekt sistemlere kıyasla daha yüksek görüntü keskinliği (rezolüsyon) sağlamasının asıl nedeni aşağıdakilerden hangisidir?

- **A)** Görüntü okuma işleminde TFT (Thin Film Transistor) diziliminin kullanılmaması
- **B)** Analog-dijital dönüştürücü (ADC) birimlerinin daha yüksek bit derinliğinde çalışması
- **C)** Sintilatör tabakası bulunmadığından görünür ışık fotonlarının saçılma etkisinin ortadan kalkması ✅
- **D)** Fotoiletken olarak gadolinyum oksisülfit kullanılarak elektron aktarımının hızlandırılması
- **E)** Dinamik aralığın kısıtlanarak düşük dozdaki radyasyonun piksel dışında bırakılması

*Doğru cevap:* **C**

*Açıklama:* Direkt flat panel sistemlerde, x-ışını amorf selenyum (a-Se) gibi bir fotoiletkene çarparak doğrudan elektriksel yüke dönüşür; arada ışığa çevirme basamağı (sintilatör) olmadığı için fotonların sağa sola yayılarak görüntü bulanıklığı (saçılma) yaratması engellenir. İndirekt sistemlerde kullanılan sintilatörlerin kalınlığı arttıkça verim artar ancak foton difüzyonu nedeniyle keskinlik azalır. Klinik kullanımda amorf selenyumlu direkt panellerin tercih nedeni bu yüksek uzaysal çözünürlüktür.


---

## 4. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 77% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Soru kökleri farklı koşulları (ışık maruziyeti vs. zaman gecikmesi) vurguluyor ve aynı kavramın (F-merkezi elektron kaybı) farklı tetikleyicilerini test ediyor; bu nedenle kopya değil, varyasyondur. | analiz: Her iki soru da fosfor plak görüntü kalitesinin bozulmasıyla ilgilidir; ancak birinci soruda bozulmanın nedeni ortam ışığına maruz kalmadır (ışık kaynaklı solma), ikinci soruda ise taramadaki gecikmedir (spontan termal solma). Farklı klinik senaryolaru farklı mekanizmaları sorgulamaktadır. Bu nedenle sorular aynı bilgi parçasını aynı yönelimle tekrarlamamaktadır; ikisi de ayrı ayrı değerlidir.

**SORU 1** · `4d9b553c-96ec-4812-bb22-54d07496481a`

> 50 yaşında bir hastadan alınan periapikal fosfor plak, koruyucu kılıfından çıkarıldıktan sonra tarayıcının meşgul olması nedeniyle yaklaşık 15 dakika floresan aydınlatmalı banko üzerinde bekletilmiştir. Taranan bu plaktan elde edilen imajda, standart sürede taranan filmlere kıyasla belirgin bir 'gürültü (noise)' ve düşük densite izlenmiştir. Görüntü kalitesindeki bu radyografik bozulmanın temel moleküler mekanizması aşağıdakilerden hangisidir?

- **A)** F merkezinde yüksek enerjili konumda tutulmuş elektronların ortam ışığı ile salınarak latent görüntünün zayıflaması ✅
- **B)** X-ışını foton sayısının yetersizliğine bağlı olarak kuantum beneklenmesinin artması
- **C)** Plak yüzeyindeki baryum florobromid kristallerinin nem ile reaksiyona girerek degradasyona uğraması
- **D)** Sistemin bit derinliği kodlamasında düşük frekanslı analog sinyallerin voltaj kaybı yaşaması
- **E)** Europium iyonlarının valens bandından kondüksiyon bandına geçiş sürecinin duraksaması

*Doğru cevap:* **A**

*Açıklama:* Fosfor plaklarda x-ışını uyarımıyla F merkezinde hapsolan elektronlar (latent görüntü) kararsızdır ve ortam ışığına (özellikle beyaz/floresan ışığa) maruz kaldıklarında kendiliğinden enerji kaybederek valens bandına geri dönerler. Bu elektron kaybı, tarayıcıda okunacak sinyalin zayıflamasına, dolayısıyla görüntüde düşük densite ve gürültü (noise) artefaktına yol açar. Kuantum beneklenmesi ise ışınlama dozunun baştan yetersiz (düşük mAs) olmasından kaynaklanan ayrı bir sorundur.

**SORU 2** · `cf455dd9-c36f-45ef-8996-31baa2d4be7c`

> Klinikte 35 yaşındaki erkek hastanın teşhisi için fosfor plak (PSP) ile periapikal radyografi alınmış, ancak klinik yoğunluk nedeniyle plak ışınlamadan 45 dakika sonra tarayıcıya yerleştirilmiştir. Elde edilen görüntünün diagnostik kalitesinde izlenen zayıflamanın temel mekanizması aşağıdakilerden hangisidir?

- **A)** F-merkezinde tutulan yüksek enerjili elektronların kendiliğinden valens bandına dönmesi ✅
- **B)** Europium iyonlarının uyarılmış $Eu^{+3}$ formundan kalıcı $Eu^{+4}$ formuna okside olması
- **C)** Plak yüzeyindeki baryum florobromid kristallerinin ortam nemini absorbe etmesi
- **D)** Plağın ortam sıcaklığına bağlı olarak lazer ışığı ile uyarılma eşiğinin yükselmesi
- **E)** Görüntü sensöründeki transistörlerin yük kapasitesinin zamanla deşarj olması

*Doğru cevap:* **A**

*Açıklama:* Fosfor plaklarda latent görüntü, x-ışını ile uyarılan valens bandındaki elektronların kondüksiyon bandına geçerek 'F-merkezi' adı verilen tuzaklarda birikmesiyle oluşur; ancak bu durum metastabildir ve elektronlar zamanla kendiliğinden valens bandına geri döner (salınır). İkinci en güçlü çeldirici olan oksidasyon teorisi yanlıştır çünkü Europium sadece $Eu^{+2}$ ve $Eu^{+3}$ arasında döngüsel bir değişim yaşar. Kaliteli bir görüntü için taramanın ışınlamayı takiben ideal olarak ilk 10 dakika içinde yapılması şarttır.


---

## 5. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 1.00
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=1.00]: Sorular farklı bilgi parçalarını (mekanizma vs. süre) test etmektedir; biri diğerinin tekrarı değildir. | analiz: Her iki soru da fosfor plak teknolojisiyle ilgili olsa da, ilki gecikmeli taramanın görüntü kalitesindeki bozulmanın moleküler mekanizmasını sorgularken, ikincisi kabul edilebilir maksimum bekleme süresini sorgulamaktadır. Aynı kavramı farklı yönlerden ölçtükleri için kopya değildirler.

**SORU 1** · `4d9b553c-96ec-4812-bb22-54d07496481a`

> 50 yaşında bir hastadan alınan periapikal fosfor plak, koruyucu kılıfından çıkarıldıktan sonra tarayıcının meşgul olması nedeniyle yaklaşık 15 dakika floresan aydınlatmalı banko üzerinde bekletilmiştir. Taranan bu plaktan elde edilen imajda, standart sürede taranan filmlere kıyasla belirgin bir 'gürültü (noise)' ve düşük densite izlenmiştir. Görüntü kalitesindeki bu radyografik bozulmanın temel moleküler mekanizması aşağıdakilerden hangisidir?

- **A)** F merkezinde yüksek enerjili konumda tutulmuş elektronların ortam ışığı ile salınarak latent görüntünün zayıflaması ✅
- **B)** X-ışını foton sayısının yetersizliğine bağlı olarak kuantum beneklenmesinin artması
- **C)** Plak yüzeyindeki baryum florobromid kristallerinin nem ile reaksiyona girerek degradasyona uğraması
- **D)** Sistemin bit derinliği kodlamasında düşük frekanslı analog sinyallerin voltaj kaybı yaşaması
- **E)** Europium iyonlarının valens bandından kondüksiyon bandına geçiş sürecinin duraksaması

*Doğru cevap:* **A**

*Açıklama:* Fosfor plaklarda x-ışını uyarımıyla F merkezinde hapsolan elektronlar (latent görüntü) kararsızdır ve ortam ışığına (özellikle beyaz/floresan ışığa) maruz kaldıklarında kendiliğinden enerji kaybederek valens bandına geri dönerler. Bu elektron kaybı, tarayıcıda okunacak sinyalin zayıflamasına, dolayısıyla görüntüde düşük densite ve gürültü (noise) artefaktına yol açar. Kuantum beneklenmesi ise ışınlama dozunun baştan yetersiz (düşük mAs) olmasından kaynaklanan ayrı bir sorundur.

**SORU 2** · `7363122e-6759-4bde-a0de-4ebfa334dab4`

> Yoğun çalışan bir diş kliniğinde hastadan fosfor plak ile görüntü alınmış ancak acil bir hasta nedeniyle plağın tarayıcıda okutulması gecikmiştir. Fosfor plaktaki F-merkezlerinde tutulan elektronların zamanla kendiliğinden sönümlenerek görüntü kalitesinde kayıp yaratmaması için, ışınlama ile tarama arasında geçebilecek kabul edilebilir maksimum süre ne kadardır?

- **A)** 1 dakika
- **B)** 3 dakika
- **C)** 5 dakika
- **D)** 7 dakika
- **E)** 10 dakika ✅

*Doğru cevap:* **E**

*Açıklama:* Fosfor plaktaki F-merkezleri yarı kararlı olduğu için ışınlama sonrasında elektronlar ortam ısısı veya sızıntı ışık nedeniyle kendiliğinden salınmaya başlar ve maksimum 10 dakika içerisinde okutulması görüntü kaybını sınırlar. Eğer plak karanlık ve serin bir kılıfta tutulmuyorsa, bu sürenin aşılması ciddi veri/kontrast kaybına ve yeniden çekim gerekliliğine (gereksiz radyasyona) neden olur. Daha kısa süreler pratik klinik akışında engel yaratır ancak 10 dakikalık fizyolojik tavan mutlaka korunmalıdır.


---

## 6. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı gerçeği sorgulamaz; farklı artefakt nedenlerini ve mekanizmalarını test eder. Her ikisi de klinik bağlamda değerli ve öğreticidir. | analiz: Her iki soru da fosfor plak (PSP) görüntüleme artefaktlarıyla ilgili olsa da, farklı mekanizmaları sorgulamaktadır. Soru 1, plakların ortam ışığına maruz kalması sonucu elektronların silinmesini; Soru 2 ise tarama gecikmesi nedeniyle F-merkezindeki elektronların kendiliğinden bozunmasını hedeflemektedir. Doğru şıklar ve açıklamalar farklı kavramlara işaret ettiğinden, sorular kopya değildir.

**SORU 1** · `653b97cf-1c80-4ef7-9049-a3209fd01719`

> Kliniğe sabah gelen asistan, akşamdan karanlık odaya kaldırılmamış ve masa üzerinde düzensiz şekilde üst üste bırakılmış bir miktar fosfor plak (PSP) kasetini kullanarak hastadan seri radyografiler almıştır. Görüntülerin değerlendirilmesinde, sadece istifin en üstünde yer alan plağın görüntüsünün çok düşük densitede (soluk) olduğu, altındakilerin ise normal olduğu saptanmıştır. Bu spesifik artefaktın nedeni aşağıdakilerden hangisidir?

- **A)** Plakların birbiri üzerinde statik elektrik üretmesi
- **B)** En üstteki kasetin x-ışını cihazına gereğinden yakın konumlandırılması
- **C)** En üstteki plağın depo elektronlarının ortam ışığına maruz kalarak silinmesi ✅
- **D)** Kuantum beneklenmesinin yansıma yaparak sadece üst yüzeyi etkilemesi
- **E)** Röntgen cihazı konunun plağı tam ortalamadan ışınlaması

*Doğru cevap:* **C**

*Açıklama:* Fosfor plaklarda latent görüntü F-merkezinde tutulan elektronlarla sağlanır. Eğer plaklar ışık geçirmeyen kutularda saklanmazsa ve ortam ışığına (floresan, güneş vb.) maruz kalırsa, bu uyarıcı ışık F-merkezindeki elektronların rastgele salınmasına neden olarak plağın 'kısmen silinmesine' yol açar. Bu hatalı depolama artefaktı düşük densiteli, soluk bir görüntü ile sonuçlanır.

**SORU 2** · `cf455dd9-c36f-45ef-8996-31baa2d4be7c`

> Klinikte 35 yaşındaki erkek hastanın teşhisi için fosfor plak (PSP) ile periapikal radyografi alınmış, ancak klinik yoğunluk nedeniyle plak ışınlamadan 45 dakika sonra tarayıcıya yerleştirilmiştir. Elde edilen görüntünün diagnostik kalitesinde izlenen zayıflamanın temel mekanizması aşağıdakilerden hangisidir?

- **A)** F-merkezinde tutulan yüksek enerjili elektronların kendiliğinden valens bandına dönmesi ✅
- **B)** Europium iyonlarının uyarılmış $Eu^{+3}$ formundan kalıcı $Eu^{+4}$ formuna okside olması
- **C)** Plak yüzeyindeki baryum florobromid kristallerinin ortam nemini absorbe etmesi
- **D)** Plağın ortam sıcaklığına bağlı olarak lazer ışığı ile uyarılma eşiğinin yükselmesi
- **E)** Görüntü sensöründeki transistörlerin yük kapasitesinin zamanla deşarj olması

*Doğru cevap:* **A**

*Açıklama:* Fosfor plaklarda latent görüntü, x-ışını ile uyarılan valens bandındaki elektronların kondüksiyon bandına geçerek 'F-merkezi' adı verilen tuzaklarda birikmesiyle oluşur; ancak bu durum metastabildir ve elektronlar zamanla kendiliğinden valens bandına geri döner (salınır). İkinci en güçlü çeldirici olan oksidasyon teorisi yanlıştır çünkü Europium sadece $Eu^{+2}$ ve $Eu^{+3}$ arasında döngüsel bir değişim yaşar. Kaliteli bir görüntü için taramanın ışınlamayı takiben ideal olarak ilk 10 dakika içinde yapılması şarttır.


---

## 7. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular farklı alt-kavramları sorguluyor: biri görüntü kalitesi yanılgısını, diğeri yapısal farkı test ediyor. | analiz: İki soru aynı konuyu (CCD vs CMOS sensörler) işlese de farklı yönlerden sorgulamaktadır: Birincisi görüntü kalitesi eşitliği ile ilgili yanlış bir ifadeyi, ikincisi ise CMOS'un yapısal farklılığını (piksel izolasyonu) test eder. Aynı doğru kavramı tekrar sormazlar, bu nedenle kopya değildir.

**SORU 1** · `1cc30c07-c083-47ff-b0d4-16be13d6a678`

> Ağız içi dijital görüntüleme sistemlerinden olan CCD (Charged-Coupled-Device) ve CMOS (Complementary Metal Oxide Semiconductors) sensörlerin karşılaştırılmasıyla ilgili aşağıdakilerden hangisi **yanlıştır**?

- **A)** CMOS sistemler, boyutlarının daha küçük olması sayesinde CCD sistemlere göre daha az enerji harcarlar.
- **B)** CMOS sensörlerde bilgilerin iletilmesi, ışığa duyarlı diyotların yanında bulunan transistörlerle sağlanır.
- **C)** CCD sensörlerde karşılaşılan şarj kaçaklarına bağlı parlama problemi CMOS sensörlerde oluşmaz.
- **D)** CCD sensörlerin çözünürlük ve görüntü kalitesi, CMOS sensörlerden belirgin şekilde üstündür. ✅
- **E)** Her iki sistem de x-ışınına yüksek duyarlılık göstererek hastanın aldığı radyasyon dozunu azaltır.

*Doğru cevap:* **D**

*Açıklama:* CCD ve CMOS sensörlerin iç yapıları (şarj okunma yöntemleri ve transistör mimarileri) farklılık gösterse de, elde edilen imajların kalitesi ve uzaysal çözünürlükleri birbirine eşdeğerdir. Klinik pratikte birinin diğerine belirgin bir görüntü kalitesi üstünlüğü yoktur. CMOS'un temel avantajı CCD'deki parlama (blooming) problemini izole pikselleri sayesinde engellemesi ve daha az güç tüketmesidir.

**SORU 2** · `dd0e83da-e842-42b5-9021-0d9ebea54770`

> Günümüzde diş hekimliğinde maliyeti daha düşük olması nedeniyle CCD'nin yerini sıkça alan CMOS (Complementary Metal Oxide Semiconductor) sensörlerinin, CCD'ye göre spesifik yapısal farkı aşağıdakilerden hangisidir?

- **A)** X-ışınını okumak yerine sadece ortamdaki kızılötesi ışınlarla çalışması.
- **B)** Her bir pikselin yanındaki piksellerden izole edilerek doğrudan bağımsız bir transistöre bağlı olması. ✅
- **C)** Rezolüsyon kapasitesinin konvansiyonel filmlerin 10 katına ulaşması.
- **D)** Sadece ekstraoral sistemler için üretilip, boyutunun küçültülememesi.
- **E)** Sintilatör kullanımını tamamen ortadan kaldırarak kuantum beneklenmesini sıfırlaması.

*Doğru cevap:* **B**

*Açıklama:* CMOS teknolojisinde her piksel bağımsız bir dönüşüm elemanı (transistör ve voltaj güçlendirici) içerir ve pikseller arası komşuluk elektriksel olarak izoledir; CCD'de ise yükler hat boyunca yan yana aktarılarak okunur. Bu özellik CMOS sistemlerin daha az elektrik harcamasını ve sistemde şarj kaçaklarına bağlı parlama probleminin (blooming) engellenmesini sağlar. Görüntü kalitesi açısından CCD ile birbirlerine çok yakındırlar.


---

## 8. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Aynı kavramı (fosfor plak artefaktı) farklı etiyoloji ve klinik görünümlerle sorgulayan iki bağımsız sorudur; her ikisi de ayrı öğrenme hedefi taşır. | analiz: Her iki soru da fosfor plak artefaktlarını sorgulamakla birlikte, birincisi eldiven pudrasının neden olduğu noktacık şeklinde parlaklıkları, ikincisi ise dezenfektan kaynaklı kabarmaya bağlı yuvarlak beyaz lekeleri konu alır. Farklı nedenler, farklı görünümler ve farklı soru yönelimleri (birincisi görüntü bulgusu, ikincisi mekanizma) içerdiklerinden kopya değildir.

**SORU 1** · `a7ba4ec5-9f2c-49c3-b10e-50ee50fb3d99`

> Fosfor plakların koruyucu kılıflara yerleştirilmesi aşamasında radyoloji personelinin uygun el hijyeni sağlamaması ve pudralı muayene eldiveni kullanması dijital imajda tipik bir kirlilik artefaktına yol açar. Eldivenden dökülen pudra partiküllerinin fosfor plağın okuyucu yüzeyine yapışması, ekrandaki radyografik görüntüde aşağıdakilerden hangisi şeklinde izlenir?

- **A)** Kök-kanal dolgusunu taklit eden kalın radyoopak çizgiler
- **B)** Görüntü alanı boyunca izlenen noktacıklar şeklinde parlaklıklar (radyoopasiteler) ✅
- **C)** Görüntünün bir yarısının tamamen beyaz kalması (parsiyel görüntü)
- **D)** Mine sınırlarında keskinliğin tamamen kaybolduğu yaygın bulanıklık
- **E)** Apikal bölgeyi kapatan dairesel büyük radyoopak lekeler

*Doğru cevap:* **B**

*Açıklama:* Pudra partikülleri, fosfor plağın aktif yüzeyine yapıştığında tarama esnasında lazer ışığının kristallerle etkileşimini mikro düzeyde bloke eder. Bunun sonucunda dijital görüntü üzerinde saçılmış, yaygın 'noktacıklar şeklinde parlaklıklar (beyaz benekler)' izlenir. Kök-kanal dolgusu taklidi plağın çizilmesiyle, yaygın bulanıklık ise hareket artefaktıyla ilgilidir.

**SORU 2** · `d36f482c-106c-4e7a-8c05-78df83d35fdd`

> Kliniğin radyoloji departmanında kullanılan fosfor plakların taranması sonucu elde edilen bazı görüntülerde 'yuvarlak şekilli lokalize beyaz lekeler' saptanmıştır. Çapraz enfeksiyon kontrol protokolü incelendiğinde asistanın yaptığı bir işlem hatasının bu artefakta neden olduğu anlaşılmıştır. Bu artefaktın oluşumuna yol açan ve yüzey kirlenmesi kaynaklı mekanizma aşağıdakilerden hangisidir?

- **A)** Fosfor plağın tarayıcı rulo mekanizmasında sürtünmeye bağlı statik elektrik üretmesi
- **B)** Eldiven pudrasının plak yüzeyine dökülerek lazeri yansıtması
- **C)** Fosfor plağın dış plastik kılıfla birlikte makasla kesilerek yırtılması
- **D)** Koruyucu kılıfın yüzey dezenfektanı ile aşırı silinmesi sonucu kabarması ✅
- **E)** Cihaz içindeki lazer ışığının kalibrasyon bozukluğu

*Doğru cevap:* **D**

*Açıklama:* Fosfor plakların temizliği sırasında, dışarıdan uygulanan dezenfektan solüsyon koruyucu tabakanın yapısını bozarak plağın üzerinde kabarcıklar (kabarmalar) oluşturabilir. Bu fiziksel kabarık alanlar tarayıcı lazerini bloke ederek görüntü üzerinde tipik 'yuvarlak şekilli beyaz lekeler' oluşturur. Eldiven pudrası yuvarlak leke değil yaygın ince noktacıklar yaparken, makasla kesme işlemi net beyaz kırık hatları (çizgiler) yaratır.


---

## 9. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 75% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı gerçeği sormuyor; biri maksimum süreyi, diğeri mekanizmayı sorguluyor. Farklı yönelimler olduğu için her ikisi de değerli varyasyonlardır. | analiz: Her iki soru da fosfor plak görüntülemede gecikmenin etkisini sorguluyor, ancak ilki kabul edilebilir maksimum süreyi (10 dakika) sorarken ikincisi görüntü kalitesindeki zayıflamanın temel mekanizmasını (F-merkezindeki elektronların valens bandına dönmesi) sorguluyor. Bu farklı bilgi alanlarıdır; biri ezber bir süre, diğeri fiziksel mekanizmadır. Aynı kopya tanımına uymazlar.

**SORU 1** · `7363122e-6759-4bde-a0de-4ebfa334dab4`

> Yoğun çalışan bir diş kliniğinde hastadan fosfor plak ile görüntü alınmış ancak acil bir hasta nedeniyle plağın tarayıcıda okutulması gecikmiştir. Fosfor plaktaki F-merkezlerinde tutulan elektronların zamanla kendiliğinden sönümlenerek görüntü kalitesinde kayıp yaratmaması için, ışınlama ile tarama arasında geçebilecek kabul edilebilir maksimum süre ne kadardır?

- **A)** 1 dakika
- **B)** 3 dakika
- **C)** 5 dakika
- **D)** 7 dakika
- **E)** 10 dakika ✅

*Doğru cevap:* **E**

*Açıklama:* Fosfor plaktaki F-merkezleri yarı kararlı olduğu için ışınlama sonrasında elektronlar ortam ısısı veya sızıntı ışık nedeniyle kendiliğinden salınmaya başlar ve maksimum 10 dakika içerisinde okutulması görüntü kaybını sınırlar. Eğer plak karanlık ve serin bir kılıfta tutulmuyorsa, bu sürenin aşılması ciddi veri/kontrast kaybına ve yeniden çekim gerekliliğine (gereksiz radyasyona) neden olur. Daha kısa süreler pratik klinik akışında engel yaratır ancak 10 dakikalık fizyolojik tavan mutlaka korunmalıdır.

**SORU 2** · `cf455dd9-c36f-45ef-8996-31baa2d4be7c`

> Klinikte 35 yaşındaki erkek hastanın teşhisi için fosfor plak (PSP) ile periapikal radyografi alınmış, ancak klinik yoğunluk nedeniyle plak ışınlamadan 45 dakika sonra tarayıcıya yerleştirilmiştir. Elde edilen görüntünün diagnostik kalitesinde izlenen zayıflamanın temel mekanizması aşağıdakilerden hangisidir?

- **A)** F-merkezinde tutulan yüksek enerjili elektronların kendiliğinden valens bandına dönmesi ✅
- **B)** Europium iyonlarının uyarılmış $Eu^{+3}$ formundan kalıcı $Eu^{+4}$ formuna okside olması
- **C)** Plak yüzeyindeki baryum florobromid kristallerinin ortam nemini absorbe etmesi
- **D)** Plağın ortam sıcaklığına bağlı olarak lazer ışığı ile uyarılma eşiğinin yükselmesi
- **E)** Görüntü sensöründeki transistörlerin yük kapasitesinin zamanla deşarj olması

*Doğru cevap:* **A**

*Açıklama:* Fosfor plaklarda latent görüntü, x-ışını ile uyarılan valens bandındaki elektronların kondüksiyon bandına geçerek 'F-merkezi' adı verilen tuzaklarda birikmesiyle oluşur; ancak bu durum metastabildir ve elektronlar zamanla kendiliğinden valens bandına geri döner (salınır). İkinci en güçlü çeldirici olan oksidasyon teorisi yanlıştır çünkü Europium sadece $Eu^{+2}$ ve $Eu^{+3}$ arasında döngüsel bir değişim yaşar. Kaliteli bir görüntü için taramanın ışınlamayı takiben ideal olarak ilk 10 dakika içinde yapılması şarttır.


---

## 10. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 75% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 1.00
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=1.00]: Sorular farklı artefakt türlerini (ışık maruziyeti vs. kağıt baskısı) sorguladığı için her ikisi de değerlidir. | analiz: Her iki soru da fosfor plak (PSP) artefaktlarını sorgulamakla birlikte, farklı neden ve görüntü bulgularını test etmektedir. Birinci soru ortam ışığına maruz kalma sonucu soluk görüntü oluşumunu, ikinci soru ise plak üzerinde kağıt unutulmasına bağlı yazı artefaktını sorgulamaktadır. Doğru şıklar ve açıklamalar farklıdır, bu nedenle aynı bilgiyi tekrar sorgulamamaktadırlar.

**SORU 1** · `653b97cf-1c80-4ef7-9049-a3209fd01719`

> Kliniğe sabah gelen asistan, akşamdan karanlık odaya kaldırılmamış ve masa üzerinde düzensiz şekilde üst üste bırakılmış bir miktar fosfor plak (PSP) kasetini kullanarak hastadan seri radyografiler almıştır. Görüntülerin değerlendirilmesinde, sadece istifin en üstünde yer alan plağın görüntüsünün çok düşük densitede (soluk) olduğu, altındakilerin ise normal olduğu saptanmıştır. Bu spesifik artefaktın nedeni aşağıdakilerden hangisidir?

- **A)** Plakların birbiri üzerinde statik elektrik üretmesi
- **B)** En üstteki kasetin x-ışını cihazına gereğinden yakın konumlandırılması
- **C)** En üstteki plağın depo elektronlarının ortam ışığına maruz kalarak silinmesi ✅
- **D)** Kuantum beneklenmesinin yansıma yaparak sadece üst yüzeyi etkilemesi
- **E)** Röntgen cihazı konunun plağı tam ortalamadan ışınlaması

*Doğru cevap:* **C**

*Açıklama:* Fosfor plaklarda latent görüntü F-merkezinde tutulan elektronlarla sağlanır. Eğer plaklar ışık geçirmeyen kutularda saklanmazsa ve ortam ışığına (floresan, güneş vb.) maruz kalırsa, bu uyarıcı ışık F-merkezindeki elektronların rastgele salınmasına neden olarak plağın 'kısmen silinmesine' yol açar. Bu hatalı depolama artefaktı düşük densiteli, soluk bir görüntü ile sonuçlanır.

**SORU 2** · `e2c8094e-8aa6-42e9-8b79-775ba0f19b65`

> Fosfor plak görüntüleme iş akışında, klinikte yaşanan yoğunluk nedeniyle x-ışını almış ve latent görüntü barındıran plağın üzerinde, hasta bilgilerinin bulunduğu basılı bir kağıt unutulmuş ve tarama öncesi bekletme işlemi bu şekilde gerçekleşmiştir. Tarama sonrası ekrana yansıyan dijital imajda izlenecek temel artefakt aşağıdakilerden hangisidir?

- **A)** Plağın ortam ışığından tamamen korunmasına bağlı kontrast artışı
- **B)** Süperpoze olmuş çift görüntü (double exposure) artefaktı
- **C)** Kağıttaki liflerin oluşturduğu yaygın radyoopak beneklenme
- **D)** Kon-kat (cone-cut) benzeri çevresel beyaz alanlar
- **E)** Bekleme süresi içinde yazının plağa yansımasına bağlı yazı görüntüsü artefaktı ✅

*Doğru cevap:* **E**

*Açıklama:* Latent görüntü taşıyan fosfor plakların üzerinde yazılı kağıtların veya basılı evrakların bekletilmesi ve taramanın gecikmesi durumunda, mürekkep yoğunluğu ve ortam ışığının kağıt üzerinden plağa yansımasındaki difüzyon farkı nedeniyle 'yazı görüntüsü artefaktı' izlenir. Bu, fosfor plağın hassasiyetini ve bekletme koşullarının önemini gösteren spesifik bir kullanıcı hatasıdır. Çift görüntü ise plağın silinmeden ikinci kez ışınlanmasıyla olur.


---

