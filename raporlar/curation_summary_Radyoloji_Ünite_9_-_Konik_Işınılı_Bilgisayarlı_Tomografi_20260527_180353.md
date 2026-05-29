# ⚔️ Ölüm Maçı Raporu — Radyoloji — Ünite 9 - Konik Işınılı Bilgisayarlı Tomografi

*Üretim: 2026-05-27 18:03* · Karar verici: **DeepSeek-v4-pro**

| Metrik | Değer |
|---|---|
| Toplam şüpheli çift | 26 |
| İkisi de korundu | 22 |
| Elenen soru | 4 |
| Atlanan | 0 |

---

## 1. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 81% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 1.00
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=1.00]: Sorular aynı kavramı test etmesine rağmen farklı yönelimler (tanım vs. klinik yaklaşım) içerdiği için kopya değildir; her ikisi de ayrı becerileri ölçer. | analiz: Her iki soru da beam hardening (ışın sertleşmesi) artefaktını ele alsa da, ilk soru olayın tanımını ve adını sorgularken ikinci soru aynı artefaktı minimize etmek için klinik stratejiyi sorgulamaktadır. Bu nedenle farklı yönelimlerde (tanım vs. tedavi yönetimi) ve farklı bilgi düzeylerini test eden bağımsız sorulardır.

**SORU 1** · `3dbc4933-06b3-40e9-bed2-8eac8c5dff1c`

> Elli beş yaşında erkek hasta, çok sayıda implant ve köprü restorasyonuna sahiptir. KIBT taraması incelenirken iki yoğun metal obje arasında siyah bantlar ve çizgiler şeklinde izlenen kayıp değer alanları görülmüştür. Yüksek enerjili fotonların tercihen geçip düşük enerjili fotonların absorbe edilmesi (ışın sertleşmesi) sonucu oluşan bu fenomene ne ad verilir?

- **A)** Aliasing etkisi
- **B)** Beam hardening artefaktı ✅
- **C)** Parsiyel hacim etkisi
- **D)** Konik ışın süzülmesi
- **E)** Undersampling

*Doğru cevap:* **B**

*Açıklama:* X-ışını objeyi geçerken polikromatik demet içindeki düşük enerjili fotonların emilip, yüksek enerjili fotonların 'sertleşerek' yoluna devam etmesi 'beam hardening' fenomenidir. İki metalik obje (implant) arasında oluştuğunda ortasında veri kayıplarının (siyah bantlar) olduğu yok olma/kayıp değer artefaktları yaratır.

**SORU 2** · `c34af4b3-4bc4-49b4-9954-0c72191e4b5e`

> Elli beş yaşındaki erkek hasta, posterior bölgelerinde birden fazla metal destekli porselen kron restorasyonu taşımaktadır. Mandibular anterior bölgedeki kistik lezyon için KIBT planlanmaktadır. Ancak hekim, hastanın ağzındaki metalik restorasyonların x-ışınının düşük enerjili fotonlarını absorbe ederek "ışın sertleşmesi" (beam hardening) artefaktı oluşturacağından ve bu durumun lezyon sınırlarında siyah bantlar yaratacağından endişelenmektedir. Bu hastada artefaktı minimize etmek için hekimin uygulaması gereken **en uygun** strateji aşağıdakilerden hangisidir?

- **A)** Cihazın miliamper (mA) değerini en düşük seviyeye indirerek dedektörün metalden sinyal almasını fiziksel olarak engellemek
- **B)** Lokalize FOV boyutunu seçerek sadece mandibular anterior bölgeyi taramak ve ısırtma çubuğu/pamuk rulo kullanarak dental arkları birbirinden ayırmak ✅
- **C)** FOV boyutunu iskeletsel boyuta kadar genişleterek metalin yarattığı negatif piksel ortalamasını çevre dokulara yayarak silikleştirmek
- **D)** Projeksiyon hızını düşürerek rotasyon sırasında elde edilen kesit sayısını azaltmak ve cihazın metalle temas süresini en aza indirmek
- **E)** Yüksek çözünürlük yerine büyük voksel seçimi yaparak artefakt sınırlarını dikdörtgen pikseller içinde eritmek

*Doğru cevap:* **B**

*Açıklama:* Beam hardening (ışın sertleşmesi) artefaktı, düşük enerjili x-ışınlarının metal yüzeyinde takılıp absorbe olması, ancak yüksek enerjili kısmın geçerek dedektörde çizgisel kayıplar (siyah bantlar ve çanak görünümleri) oluşturmasıdır. KIBT pratiğinde bu etkinin hedef bölgeyi (mandibular anterior) maskelemesini önlemenin temel klinik yolu; hedef dışındaki metalleri (maxiller kuronları vb.) tarama alanının (FOV) dışında bırakmak ve alt-üst dişlerin temasını keserek artefaktın iz düşümünü anatomik plandan uzaklaştırmaktır. MAs düşürmek aksine gürültüyü maksimize eder, FOV büyütmek saçılmayı artırarak artefaktı güçlendirir.


---

## 2. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 80% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 1.00
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=1.00]: Soru kökleri farklı teknik manipülasyonları (projeksiyon sayısı artışı vs. rotasyon açısı azalışı) sorguladığından ve doğru şıklar farklı kavramları işaret ettiğinden, iki soru da değerlidir. | analiz: İlk soru projeksiyon sayısının artırılmasının etkilerini sorgularken, ikinci soru rotasyon açısının azaltılmasının etkilerini sorgulamaktadır. Her iki soru farklı parametreleri ve sonuçlarını test ettiği için aynı kopya değildir.

**SORU 1** · `4026a339-6662-4355-8e87-2c0fa171fdd6`

> KIBT taraması sırasında elde edilen projeksiyon görüntüsü sayısının artırılması (örneğin 150 yerine 1000 projeksiyon alınması) ile ilgili:

I. Görüntünün uzaysal çözünürlüğü artar.
II. Hastanın aldığı radyasyon dozu artar.
III. Çekim süresi uzayacağı için hareket artefaktı ihtimali azalır.

ifadelerinden hangileri doğrudur?

- **A)** Yalnız I
- **B)** Yalnız II
- **C)** I ve III
- **D)** II ve III
- **E)** I ve II ✅

*Doğru cevap:* **E**

*Açıklama:* Projeksiyon sayısının artması cihaza daha fazla bilgi (data) sağlar, bu da gürültüyü azaltır ve daha küçük voksel boyutlarında rekonstrüksiyona izin vererek uzaysal çözünürlüğü (I) artırır. Ancak tüp daha uzun süre aktif kalacağı için hem radyasyon dozu (II) artar, hem de tarama süresi uzayacağı için hastanın hareket etme ihtimali artar (III yanlıştır). Doğru yargılar I ve II'dir.

**SORU 2** · `77340991-5d62-43f3-aaff-8b9648e4b38a`

> KIBT cihazlarında x-ışını tüpü ve dedektörün hasta etrafındaki rotasyon açısının (yörünge arkının) standart 360 derece yerine 180 dereceye düşürülerek (yarım tarama) uygulanması durumunda aşağıdakilerden hangilerinin gerçekleşmesi beklenir?

I. Radyasyon dozu ve ışınlama süresi azalır.
II. Görüntü matrisindeki elektronik gürültü (noise) azalır.
III. Hastanın yutkunma veya solunuma bağlı hareket artefaktı riski düşer.

- **A)** Yalnız II
- **B)** I ve II
- **C)** I ve III ✅
- **D)** II ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Rotasyon açısının 180 dereceye düşürülmesi çekim süresini yarıya indirir, bu da hastanın aldığı radyasyon dozunu doğrudan azaltır (I doğru) ve kısa sürede işlem bittiği için yutkunma/titreme (hareket) artefaktı riskini çok düşürür (III doğru). Ancak toplanan açısal veri havuzu küçüldüğü (az projeksiyon elde edildiği) için bilgi eksikliğinden kaynaklanan undersampling gelişir ve görüntüdeki gürültü azalmaz, aksine belirgin şekilde artar (II yanlış).


---

## 3. 🔴 ELENDİ → `e9db44d8-a8f0-4b30-8c5b-771e7c24b005`

- **Benzerlik:** 80% (—)  ·  **Karar:** `keep_1`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_1 | güven=0.95]: Aynı bilgiyi aynı yönelimle sordukları için kopyadır; soru 1 daha zengin klinik kurguya sahip olduğundan korunur. | analiz: İki soru da maksiller sinüste kubbe şeklinde, düzgün sınırlı homojen opasitenin retansiyon psödokisti olduğunu sorgulamakta; aynı kavram ve aynı doğru cevap. Açıklamalar benzer düzeyde öğretici olmakla birlikte, soru 1 implant planlaması ve panoramik yetersizliği gibi ek klinik bağlam içerir.

**SORU 1** · `00f8bea7-8dd2-4457-90f5-e2caabac663f`

> Kırk yaşındaki asemptomatik erkek hastadan, sol maksiller posterior bölgeye implant planlaması amacıyla KIBT alınmıştır. Panoramik radyografide net seçilemeyen bir detay, KIBT koronal kesitlerinde netleştirilmiştir: Maksiller sinüs tabanından sinüs lümenine doğru genişleyen, düzgün sınırlı, kubbe şeklinde, etrafındaki sinüs mukozasında genel bir kalınlaşma veya hava yolunda tam bir kapanma izlenmeyen homojen radyoopak bir kitle saptanmıştır. Tarif edilen bu bulgunun **en olası** radyografik tanısı aşağıdakilerden hangisidir?

- **A)** Akut maksiller sinüzit (pansinüzit)
- **B)** Maksiller sinüs yassı hücreli karsinomu
- **C)** Antral kemik septumu
- **D)** Odontojenik osteom
- **E)** Retansiyon psödokisti (Müköz ekstravazasyon kisti) ✅

*Doğru cevap:* **E**

*Açıklama:* Maksiller sinüs zemininden kubbe şeklinde yükselen, sınırları belirli ve sinüsün geri kalan duvarlarında enflamatuar kalınlaşma barındırmayan sıvı dolu asimetrik yapılar retansiyon psödokisti olarak tanımlanır. Mukus bezlerinin tıkanmasıyla oluşan bu yapılar epitelyal gerçek bir döşemeye sahip olmadıkları için "psödokist" adını alırlar. Akut sinüzitte sinüs duvarının tamamında kalınlaşma (panoz) veya sıvı seviyesi görülür. Antral septum ise kemik kökenli bir kalkandır (septumdur), kistik/opak sıvı görünümü vermez.

**SORU 2** · `e9db44d8-a8f0-4b30-8c5b-771e7c24b005`

> 25 yaşında erkek hasta, ortodontik muayene öncesi alınan büyük FOV KIBT görüntüsünde tesadüfen değerlendirilmiştir. Sağ maksiller sinüs tabanından lümene doğru uzanan, geniş tabanlı, iyi sınırlı ve kubbe (dome) şeklinde bir radyoopasite izlenmektedir. Sinüsün geri kalan mukozasında herhangi bir kalınlaşma veya komşu dişlerde periapikal lezyon saptanmamıştır. Bu bulgular ışığında en olası radyografik tanı aşağıdakilerden hangisidir?

- **A)** Antral septum
- **B)** Odontojenik enfeksiyona bağlı mukozal kalınlaşma
- **C)** Retansiyon psödokisti ✅
- **D)** Karsinom invazyonu
- **E)** Tonsilolit

*Doğru cevap:* **C**

*Açıklama:* Maksiller sinüs tabanından kaynaklanan, kortikal sınır bırakmayan, mukozal tabanı izleyen ve sinüsün geri kalan kısmında generalize bir kalınlaşma yaratmayan kubbe şeklindeki homojen opasiteler retansiyon psödokistlerinin tipik görünümüdür. Odontojenik enfeksiyona bağlı kalınlaşma genellikle sinüs tabanında daha geniş alana yayılan, diş köküyle direkt ilişkili kalın bir bant şeklinde izlenir. Antral septum ise kemik kaynaklı dikensi/bölücü bir radyoopak hattan oluşur.


---

## 4. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 79% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.70
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.70]: Sorular, aynı konuyu farklı yönelimlerle (kombinasyon vs tek parametre) sorguladığı için varyasyon olarak değerlidir ve ikisi de kalmalıdır. | analiz: İki soru da aksesuar kanal şüphesi olan hastalarda KIBT parametrelerini sorgulamaktadır. Ancak 1. soru en küçük FOV ve voksel boyutu kombinasyonunu sorarken, 2. soru yalnızca en küçük voksel boyutunun seçilmesini sormaktadır. Farklı cevap seçenekleri ve soru kökündeki yönelim (kombinasyon vs tek parametre) nedeniyle aynı bilgiyi aynı açıdan test etmemektedirler.

**SORU 1** · `8c04f04a-56ca-414e-befb-ee552cc1e2d3`

> 32 yaşında kadın hasta, daha önce kök kanal tedavisi görmüş sol üst birinci molar dişinde devam eden perküsyon hassasiyeti şikayetiyle başvurmuştur. Konvansiyonel periapikal radyografide belirgin bir lezyon veya eksik kanal izlenememiştir. MB2 kanal şüphesiyle KIBT çekilmesi planlanan bu hastada, en yüksek diagnostik doğruluğa ulaşmak için x-ışını cihazında hangi parametre kombinasyonu seçilmelidir?

- **A)** Geniş görüntüleme alanı (FOV) ve büyük voksel boyutu
- **B)** Geniş görüntüleme alanı (FOV) ve izotropik olmayan voksel
- **C)** Dar görüntüleme alanı (FOV) ve yüksek kVp / düşük mA
- **D)** Orta görüntüleme alanı (FOV) ve uzun rotasyon süresi
- **E)** En küçük görüntüleme alanı (FOV) ve en küçük voksel boyutu ✅

*Doğru cevap:* **E**

*Açıklama:* Kök kanal sistemi anomalileri, aksesuar kanallar ve kök rezorpsiyonları gibi yüksek uzaysal çözünürlük gerektiren durumlarda, cihazın izin verdiği en küçük voksel boyutu kullanılmalıdır. Görüntüleme alanının (FOV) küçültülmesi ise hem skatter radyasyonu azaltarak kontrastı iyileştirir hem de voksellerin küçülmesine olanak tanıyarak ince yapılar arasındaki ayrımı maksimize eder. Geniş FOV kullanımı bu tarz incelemelerde gürültüyü artırıp detayı kaybettirir.

**SORU 2** · `f4ef3cad-4c11-46fa-80a0-935b70ae2f69`

> 35 yaşında erkek hasta, sol maksiller santral dişindeki inatçı endodontik enfeksiyon nedeniyle sevk edilmiştir. Dişte aksesuar kanal şüphesi mevcuttur. Klinisyen, KIBT sisteminde küçük yapıların ayrımını maksimum seviyeye çıkarmak istemektedir. Bu amaçla aşağıdaki ışınlama parametrelerinden hangisinin tercih edilmesi en uygundur?

- **A)** En küçük voksel boyutunun seçilmesi ✅
- **B)** Fokal spot çapının en büyük değere ayarlanması
- **C)** Projeksiyon görüntüsü sayısının azaltılması
- **D)** Maksillo-mandibular geniş FOV moduna geçilmesi
- **E)** Kilovoltaj (kVp) değerinin en düşük seviyede tutulması

*Doğru cevap:* **A**

*Açıklama:* Aksesuar kanal, kök çatlağı veya internal rezorpsiyon gibi detaylı mikro-anatomik incelemeler yüksek uzaysal çözünürlük gerektirir ve bu da doğrudan en küçük voksel boyutunun seçilmesiyle sağlanır. Fokal spot çapının büyütülmesi veya projeksiyon sayısının azaltılması görüntüyü bulanıklaştırır ve penumbrayı artırır. Endodontik değerlendirmelerde altın standart küçük FOV ve küçük voksel kombinasyonudur.


---

## 5. 🔴 ELENDİ → `0202de07-a74b-47c0-bf15-199913dfb9ac`

- **Benzerlik:** 79% (—)  ·  **Karar:** `keep_2`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_2 | güven=0.95]: İki soru aynı kavramı (kare hızı) sorguluyor; 2. sorunun açıklaması daha kapsamlı ve mekanizmayı içeriyor, bu nedenle 2. soru tutulmalı. | analiz: Her iki soru da KIBT'te dedektörün saniyede oluşturduğu ve bilgisayara aktardığı projeksiyon görüntüsü sayısını ifade eden 'kare hızı' (frame rate) terimini sorgulamaktadır. Soru kökleri farklı kelimelerle yazılmış olsa da aynı bilgiyi ve aynı doğru şıkkı test etmektedir. Bu nedenle kopyadır. Açıklama kalitesi ve klinik derinlik açısından 2. soru daha öğretici ve ayrıntılıdır.

**SORU 1** · `0202de07-a74b-47c0-bf15-199913dfb9ac`

> KIBT çekimi sırasında cihazın dedektörünün saniyede oluşturduğu ve milisaniyeler içerisinde bilgisayara aktardığı projeksiyon görüntüsü sayısını ifade eden görüntü kazanım hızı terimi aşağıdakilerden hangisidir?

- **A)** Uzaysal çözünürlük oranı
- **B)** Kare hızı (Frame rate) ✅
- **C)** Rotasyon frekansı
- **D)** Işınlama döngüsü
- **E)** Voksel oluşturma hızı

*Doğru cevap:* **B**

*Açıklama:* Dedektörün görüntü kazancı sırasındaki hızına ve birim zamanda ürettiği projeksiyon (ham veri) sayısına 'kare hızı' (frame rate) denir. Bu hız rotasyon açısı ve hızı ile birleşerek toplam elde edilecek ham veri sayısını belirler.

**SORU 2** · `96245b40-c173-4194-b105-35a00d0603ea`

> KIBT cihazlarında, hastanın etrafında yapılan rotasyonel tarama sırasında yüzlerce projeksiyon görüntüsünün algılanıp bilgisayara milisaniyeler içerisinde aktarılması sürecindeki dedektör yakalama ve iletim hızına verilen teknik isim aşağıdakilerden hangisidir?

- **A)** İzotropik dönüşüm
- **B)** Miliamper saniye (mAs)
- **C)** Fokal spot limiti
- **D)** Kare hızı (frame rate) ✅
- **E)** Tüp soğuma indeksi

*Doğru cevap:* **D**

*Açıklama:* Dedektörün x-ışını fotonlarını karşılayıp oluşturduğu şarjı dijital sinyal olarak saniyedeki belirli okuma/iletme sayısıyla bilgisayara aktarma hızına kare hızı (frame rate) denir. Yüksek kare hızına sahip dedektörler, rotasyon esnasında bulanıklık yaratmadan daha fazla sayıda (veya daha kısa sürede) net projeksiyon verisi elde edebilme kapasitesine sahiptir.


---

## 6. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 79% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 1.00
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=1.00]: Sorular farklı kavramları (FOV büyüklüğü ve rotasyon açısı) sorguladığı için aynı soru değildir; her ikisi de değerlidir. | analiz: İlk soru FOV boyutunun (küçük vs büyük) etkilerini sorgularken, ikinci soru rotasyon arkının (360 vs 180 derece) etkilerini sorgulamaktadır. Farklı parametreler üzerine kurulu bu iki soru aynı bilgi parçasını test etmemektedir, bu nedenle kopya değildir.

**SORU 1** · `4f9bce29-b16e-498d-ba88-5772abcce688`

> Maksillofasiyal KIBT görüntüleme sırasında büyük FOV (15-21 cm) yerine dentoalveoler küçük FOV (<8 cm) alanının tercih edilmesi durumunda klinik görüntüleme dinamiğinde aşağıdaki değişikliklerden hangisi meydana gelir?

I. Oluşan skatter (saçılan) radyasyon azalır.
II. Hedef dokuya uygulanan efektif radyasyon dozu düşer.
III. Objeden geçen diverjan foton artışına bağlı görüntü distorsiyonu artar.

- **A)** Yalnız I
- **B)** Yalnız III
- **C)** I ve II ✅
- **D)** II ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Küçük FOV kullanılması, hastanın ışınlanan doku hacmini daralttığı için hem saçılan skatter foton miktarını keskin şekilde azaltır (I doğru) hem de total ve efektif radyasyon dozunu ciddi oranda düşürür (II doğru). Işının diverjanlığına (dağılım açısına) bağlı görüntü distorsiyonu ve artefaktlar FOV büyüdükçe artar, dar FOV'da ise merkezi odak kullanıldığı için bu distorsiyonlar azalır (III yanlış). Doğru cevap I ve II.

**SORU 2** · `77340991-5d62-43f3-aaff-8b9648e4b38a`

> KIBT cihazlarında x-ışını tüpü ve dedektörün hasta etrafındaki rotasyon açısının (yörünge arkının) standart 360 derece yerine 180 dereceye düşürülerek (yarım tarama) uygulanması durumunda aşağıdakilerden hangilerinin gerçekleşmesi beklenir?

I. Radyasyon dozu ve ışınlama süresi azalır.
II. Görüntü matrisindeki elektronik gürültü (noise) azalır.
III. Hastanın yutkunma veya solunuma bağlı hareket artefaktı riski düşer.

- **A)** Yalnız II
- **B)** I ve II
- **C)** I ve III ✅
- **D)** II ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Rotasyon açısının 180 dereceye düşürülmesi çekim süresini yarıya indirir, bu da hastanın aldığı radyasyon dozunu doğrudan azaltır (I doğru) ve kısa sürede işlem bittiği için yutkunma/titreme (hareket) artefaktı riskini çok düşürür (III doğru). Ancak toplanan açısal veri havuzu küçüldüğü (az projeksiyon elde edildiği) için bilgi eksikliğinden kaynaklanan undersampling gelişir ve görüntüdeki gürültü azalmaz, aksine belirgin şekilde artar (II yanlış).


---

## 7. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 79% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.90
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.90]: İki soru farklı kavramları (scatter vs streak) sorguladığı için ikisi de değerlidir; aynı soru köküne sahip değillerdir. | analiz: Soru 1 'Saçılma (Scatter) artefaktını', Soru 2 ise mekanizması saçılma olan 'Streak (çizgisel) artefaktı' sormaktadır. Doğru şıklar farklı kavramlardır: biri mekanizma, diğeri görünüm. Aynı bilgi parçasını test etmezler; bu nedenle kopya değildir.

**SORU 1** · `3b1056c3-6aea-4b1c-b368-502a39f8d547`

> Kırk beş yaşındaki kadın hastanın sağ maksiller molar bölgesine yerleştirilen implantın etrafını değerlendirmek amacıyla KIBT alınmıştır. Hekim, implant çevresinde beam hardening artefaktına çok benzeyen ancak, fotonların dokularla etkileşimi sonrasında orijinal doğrusal yörüngesinden rastgele sapmasıyla ortaya çıkan çizgisel (streak) yansımalar izlemiştir. Hekimin görüntüde izlediği ve yüksek yoğunluklu objelerin etrafında belirginleşen bu inherent artefakt aşağıdakilerden hangisidir?

- **A)** Parsiyel hacmin ortalanması artefaktı
- **B)** Aliasing (çentikli örtüşme) artefaktı
- **C)** Çift kontur (yanlış kayıt) artefaktı
- **D)** Undersampling (yetersiz veri örneği) artefaktı
- **E)** Saçılma (Scatter) artefaktı ✅

*Doğru cevap:* **E**

*Açıklama:* Saçılma (scatter) artefaktı, x-ışını fotonlarının hasta dokusuna girdikten sonra yön değiştirerek dedektöre düz bir çizgi halinde değil sapmış olarak ulaşmasıdır. Titanyum implant gibi yüksek yoğunluklu materyallerin çevresinde bu saçılan ışınlar, tıpkı metalin ışını absorbe ettiği ışın sertleşmesi (beam hardening) artefaktında olduğu gibi çizgisel (streak) distorsiyonlara neden olur. Parsiyel hacim doku eşiği ile, aliasing eksik görüntü sayısı (undersampling) ile, çift kontur ise fiziksel hareketle ilişkilidir.

**SORU 2** · `f500cfe8-f5cf-432b-b58f-91443485ffa0`

> KIBT taramasında x-ışınlarının hasta dokusuyla etkileştikten sonra orijinal yolundan sapması sonucu dedektörde asılsız veriler oluşturduğu gözlenmiştir. Bu mekanizma sonucu radyografide beam hardening (ışın sertleşmesi) artefaktına da görsel olarak oldukça benzeyen artefakt tipi aşağıdakilerden hangisidir?

- **A)** Streak (çizgisel) artefakt ✅
- **B)** Çift kontur artefaktı
- **C)** Aliasing artefaktı
- **D)** Parsiyel hacim artefaktı
- **E)** Yüzük (ring) artefaktı

*Doğru cevap:* **A**

*Açıklama:* X-ışınlarının doku içerisinde Compton saçılması gibi etkileşimlerle yolundan sapması (scatter), kalın kesitlerde veya yoğun alanların çevresinde koyu/açık bantlar şeklinde 'streak (çizgisel) artefakta' yol açar. Bu görüntü diagnostik açıdan ışın sertleşmesi artefaktıyla sık sık karışır.


---

## 8. 🔴 ELENDİ → `d7141612-9c7f-4d59-a0aa-d707e8550c43`

- **Benzerlik:** 78% (—)  ·  **Karar:** `keep_1`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_1 | güven=0.95]: İki soru aynı FOV kategorisini ve boyutunu sorgulamakta, yani kopyadır; klinik derinlik ve açıklama kalitesi benzer olduğundan ilk soru (travma senaryosu) korunabilir. | analiz: Her iki soru da KIBT'te iskeletsel FOV (15-21 cm) kullanımını sorguluyor. Birinci soru mandibula kırığı ve TME tutulumu, ikinci soru ortognatik cerrahi planlaması için gerekli anatomik yapıları içerecek FOV'u sormakta. Her ikisi de aynı kavramı (iskeletsel FOV) ve aynı boyut aralığını (15-21 cm) hedeflemektedir; klinik senaryo farklılığı test edilen bilgiyi değiştirmemektedir.

**SORU 1** · `7008b80f-23e7-4f01-badd-6e8339780501`

> 25 yaşında erkek hasta motosiklet kazası sonrası acil servise getirilmiştir. Klinik muayenede mandibula simfiz bölgesinde ve sağ temporomandibular eklem (TME) bölgesinde palpasyonla şiddetli ağrı saptanmıştır. Çene kemikleri ve her iki kondili tam olarak değerlendirebilmek için KIBT çekimi planlanmıştır.
Bu hastada tüm kırık hatlarını tek bir taramada içine alabilecek en uygun FOV (görüntüleme alanı) kategorisi aşağıdakilerden hangisidir?

- **A)** İskeletsel (15-21 cm) ✅
- **B)** Dentoalveoler (<8 cm)
- **C)** Maksillo-mandibular (8-15 cm)
- **D)** Tek ark (5-7 cm)
- **E)** Arklar-arası (7-10 cm)

*Doğru cevap:* **A**

*Açıklama:* Mandibula simfizi ile birlikte her iki temporomandibular eklemin (kondillerin) aynı hacme sığdırılabilmesi için vertikal boyutu geniş bir FOV gereklidir. Maksillo-mandibular FOV (8-15 cm) her iki çeneyi içine alsa da kondilleri kapsamayabilir. Hem alt/üst çeneyi hem de TME'yi içine alan, kraniyofasiyal yapıları gösteren kategori iskeletsel FOV'dur (15-21 cm). Dentoalveoler kategoriler sadece dişleri hedefler.

**SORU 2** · `d7141612-9c7f-4d59-a0aa-d707e8550c43`

> Yirmi iki yaşındaki erkek hasta, iskeletsel Sınıf III maloklüzyon tedavisi için ortognatik cerrahi hazırlığındadır. Ortodontist ve çene cerrahı, maksilla ve mandibula ile birlikte kafa tabanının ve fasiyal kemiklerin üç boyutlu sefalometrik analizini yapmak istemektedir. Bu klinik endikasyon için seçilmesi gereken **en uygun** KIBT görüntüleme alanı (FOV) kategorisi ve boyutu aşağıdakilerden hangisidir?

- **A)** Dentoalveolar FOV / 8 cm'den küçük
- **B)** Maksillo-mandibular FOV / 8-15 cm arası
- **C)** İskeletsel FOV / 15-21 cm arası ✅
- **D)** Tek ark FOV / 5-7 cm arası
- **E)** Lokalize FOV / 5 cm'den küçük

*Doğru cevap:* **C**

*Açıklama:* Ortodontik 3D sefalometrik analizler ve ortognatik cerrahi planlaması için alt ve üst çeneye ek olarak kafatası kaidesi ile fasiyal sınırların da değerlendirilebilmesi istenir. Bu yapılar maksillo-mandibular sınırları (15 cm'i) aştığı için 15-21 cm aralığındaki iskeletsel (kraniyofasiyal) FOV kullanımı gereklidir. Dentoalveoler ve lokalize çekimler cerrahi sınırlar ve kafa kaidesini dışarıda bıraktığından sefalometrik analiz verisi sağlayamaz.


---

## 9. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 78% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı olguyu farklı bilgi düzeylerinde sorguluyor: biri sınıflandırma, diğeri tanımlama. Her ikisi de DUS kapsamında değerli varyasyonlardır. | analiz: Soru 1 'iğne yastığı etkisi'nin ait olduğu ana kategoriyi (geometrik distorsiyonu) sorgularken, Soru 2 bu etkinin kendi adını (iğne yastığı etkisi) sormaktadır. Aynı kavramın farklı yönlerini (kategori ve spesifik terim) test eden bu iki soru birbirinin kopyası değildir.

**SORU 1** · `337b9bd1-d189-40eb-8dd4-e12155f1202d`

> KIBT sistemlerindeki uzaysal kalibrasyon hataları veya donanımsal hizalama sorunlarına bağlı olarak, rekonstrükte edilen objelerin morfolojik sınırlarının bükülerek normal formundan sapmasına yol açan 'iğne yastığı etkisi' (pincushion effect) radyolojik görüntülemede hangi ana kategori altında değerlendirilir?

- **A)** Hareket (Motion) artefaktı
- **B)** Işın sertleşmesi (Beam hardening)
- **C)** Geometrik distorsiyon ✅
- **D)** Düşük kontrast çözünürlüğü
- **E)** Aliasing (Örtüşme) artefaktı

*Doğru cevap:* **C**

*Açıklama:* İğne yastığı etkisi (pincushion effect), projeksiyon geometrisi sırasında x-ışını demetinin dış kenarlarındaki fotonların merkezdekilere oranla dedektöre farklı açılarla ulaşması veya kalibrasyon eksikliği sonucu oluşan bir geometrik distorsiyon türüdür. Bu durum, düz çizgilerin bükülmüş gibi görünmesine yol açarak cihazın geometrik kesinliğini (çizgisel ve hacimsel ölçüm doğruluğunu) doğrudan bozar. Işın sertleşmesi veya hareket artefaktları radyasyonun doku absorbsiyonu veya hasta ile ilgili dinamik faktörlerdir.

**SORU 2** · `96b921ee-17db-44c7-a6db-fdb140bf1efd`

> KIBT cihazlarında x-ışını projeksiyon geometrisinden kaynaklanan ve alınan ölçümlerdeki geometrik kesinliği bozarak objelerin kenarlarında distorsiyona neden olan özgün etkiye ne ad verilir?

- **A)** Çanak artefaktı
- **B)** Parsiyel hacim etkisi
- **C)** Işın sertleşmesi
- **D)** İğne yastığı etkisi ✅
- **E)** Halka (ring) artefaktı

*Doğru cevap:* **D**

*Açıklama:* Geometrik distorsiyonun klinik yansımalarından biri olan ve objelerin anatomik kenarlarında içe doğru eğilme şeklinde boyut/şekil bozulmasına sebep olan duruma 'iğne yastığı (pincushion) etkisi' denir. Bu durum volumetrik ölçüm hatalarına yol açabilir.


---

## 10. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 77% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı konuya ait farklı alt-kavramları sorguladığı için her ikisi de değerlidir ve veritabanında kalmalıdır. | analiz: Her iki soru da KIBT'te gürültü azaltma konusunu sorguluyor ancak farklı kullanıcı kontrollü parametrelere odaklanıyor: ilki maruz kalma parametrelerini (kV/mA) artırmayı, ikincisi görüntüleme alanını (FOV) küçültmeyi doğru yanıt olarak veriyor. Bu nedenle aynı bilgi parçasını test etmiyorlar; farklı stratejileri ölçüyorlar.

**SORU 1** · `6e3ecb41-dd25-42d5-a1c2-b3ca8e89e2d5`

> 60 yaşında erkek hasta, implant cerrahisi öncesi KIBT ile değerlendiriliyor. Görüntülerde kemik trabekülasyonunu maskeleyen ve teşhisi zorlaştıran belirgin elektronik gürültü (noise) tespit ediliyor. Cihaza bağlı donanımsal mesafe faktörleri sabit kabul edildiğinde, radyoloji uzmanının bir sonraki çekimde gürültüyü azaltmak için 'kullanıcıya bağlı' parametreler üzerinden yapacağı en etkili modifikasyon aşağıdakilerden hangisidir?

- **A)** Tüp fokal spotunu 0.5 mm'den 0.3 mm'ye düşürmek
- **B)** Radyasyon dozunu düşürmek için miliamperi yarıya indirmek
- **C)** Dedektör ile hasta arasındaki mesafeyi manuel olarak artırmak
- **D)** Cihazın izin verdiği sınırlar dahilinde kilovoltaj ve miliamperi artırmak ✅
- **E)** X-ışını projeksiyon sayısını (kare hızını) dramatik olarak azaltmak

*Doğru cevap:* **D**

*Açıklama:* Görüntüdeki elektronik gürültü, dedektöre ulaşan foton sinyalinin yeterli homojeniteye ve yoğunluğa sahip olmamasından kaynaklanır. Kullanıcının müdahale edebileceği en temel çözüm, x-ışını demetinin miktarını (miliamper artışı) ve dokuyu delip geçme gücünü (kilovoltaj artışı) yükselterek dedektöre düşen sinyali güçlendirmektir. Miliamperi düşürmek veya projeksiyon sayısını azaltmak gürültüyü belirgin şekilde daha da kötüleştirecek faktörlerdir.

**SORU 2** · `922b6c5c-2a51-4e97-b9c3-4ba02511282b`

> 40 yaşında erkek hasta, gömülü yirmi yaş dişi çekimi öncesi mandibular kanal ilişkisini belirlemek üzere KIBT taramasına alınıyor. Çekim sonrası elde edilen kesitlerde trabeküler ve kortikal kemik sınırlarında yoğun karlanma (gürültü) fark ediliyor. Cihazın dedektör kapasitesi sınırları zorlanmadan, hekimin bir sonraki benzer taramada bu elektronik gürültüyü en aza indirmek için uygulayabileceği en etkili radyografik modifikasyon aşağıdakilerden hangisidir?

- **A)** Tarama bölgesini büyüterek maksillofasiyal (büyük) FOV tercih etmek
- **B)** X-ışını tüpündeki anot hedef açısını daraltmak
- **C)** Rekonstrüksiyon sırasında filtre kullanımını tamamen devre dışı bırakmak
- **D)** Klinik amacın elverdiği en küçük Görüntüleme Alanını (FOV) seçmek ✅
- **E)** Hasta dozunu kısıtlamak amacıyla miliamper-saniye (mAs) değerini minimuma indirmek

*Doğru cevap:* **D**

*Açıklama:* Radyografik görüntülerdeki gürültü, dedektöre ulaşan hatalı/saçılmış fotonlardan ve yetersiz sinyalden beslenir. Görüntüleme alanı (FOV) ne kadar büyük olursa, doku kitlesi içerisinde saçılan (skatter) x-ışını miktarı o kadar artar ve bu saçılan ışınlar dedektörde karlanma (noise) oluşturur. Hekimin yalnızca incelenmek istenen bölgeyi kapsayan küçük bir FOV seçmesi skatter radyasyonunu mekanik olarak azaltır, böylece hem hastanın dozu düşer hem de dedektöre giden gürültülü sinyal azalarak kontrast kalitesi iyileşir.


---

## 11. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 77% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.80
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.80]: Sorular aynı konuyu farklı yanlış ifadeler üzerinden sorguladığı için aynı bilgi tekrarı değildir; her biri ayrı bir klinik bilgiyi ölçer. | analiz: Her iki soru da konik ışın etkisiyle ilgili yanlış ifadeyi sormaktadır, ancak doğru cevaplar farklı yanlış bilgilere işaret etmektedir: Soru 1 rotasyon hızının etkisini, Soru 2 ise beam hardening ile karıştırılmasını sorgular. Bu nedenle farklı alt-kavramları test ederler.

**SORU 1** · `18f738b1-d65a-4119-936a-5472bf97e527`

> Konik ışın (cone-beam) etkisi, KIBT cihazlarının geometrik doğasından kaynaklanan spesifik bir zafiyettir. Bu artefakt türüyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?

- **A)** X-ışını demetinin x ve y ekseninde diverjan yapıda olması nedeniyle ortaya çıkar
- **B)** Görüntü hacminin en üst ve en alt kısımlarındaki anatomik yapılar sadece tek taraflı ışınlanır
- **C)** Oluşan görüntüde distorsiyon ve artmış periferal gürültü meydana gelir
- **D)** KIBT gantrisinin rotasyon hızının yavaşlatılması ile klinik olarak tamamen elimine edilir ✅
- **E)** İncelenecek hedef bölgenin (ROI) tarama alanının ortasında, x-ışınının horizontal düzleminde konumlandırılması ile bu etki azaltılabilir

*Doğru cevap:* **D**

*Açıklama:* Konik ışın etkisi cihazın fiziksel ışın geometrisi (konik sapma) ile ilgili olduğundan, rotasyon hızının yavaşlatılması ile engellenemez; bu donanımsal bir inherent (yapısal) artefakttır. Üreticiler bunu yazılımsal rekonstrüksiyon algoritmalarıyla düzeltmeye çalışır, klinisyenler ise hastayı pozisyonlandırırken teşhis konulacak spesifik yapıyı ışının en düz geçtiği gantri merkezine (horizontal düzleme) yerleştirerek kenarlardaki diverjant sapmadan (periferal noise) korunurlar.

**SORU 2** · `9590a97c-df07-4360-903a-645ed4f5c007`

> X-ışını ışınının diverjan yapısından kaynaklanan ve x-ışını kaynağının hasta etrafında yatay düzlemde dönmesiyle spesifik bir görüntü bozulmasına yol açan 'Konik ışın etkisi (Cone beam effect)' hakkında verilen bilgilerden hangisi **yanlıştır**?

- **A)** Periferik bölgelerde daha fazla gürültü (noise) izlenmesine neden olur
- **B)** Görüntüleme alanının merkezinde değil, en üst ve en alt yapılarında maksimum distorsiyon yaratır
- **C)** Üreticiler tarafından geliştirilen konik ışın rekonstrüksiyon algoritmaları ile etkisi azaltılabilir
- **D)** Beam hardening artefaktı gibi iki yoğun obje arasında çanak görünümüne neden olur ✅
- **E)** İlgilenilen bölgenin (ROI) yatay düzlemde merkezi olarak konumlandırılmasıyla klinik etkisi en aza indirilir

*Doğru cevap:* **D**

*Açıklama:* Konik ışın etkisi, diverjan ışınların periferdeki yapıları sadece tek bir taraftan ışınlayabilmesi nedeniyle tarama hacminin alt ve üst kenarlarında distorsiyona ve periferal gürültüye sebep olur. İlgilenilen ROI yatay düzlem merkezine alınarak etkisi azaltılır. Ancak iki yoğun obje arasında çanak görünümüne/siyah bantlara sebep olan olay 'ışın sertleşmesi (beam hardening)' artefaktıdır, konik ışın diverjanı değil.


---

## 12. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 77% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.99
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.99]: Sorular farklı sinüsleri (frontal vs etmoid) ve farklı görüntüleme düzlemlerini (sagital vs koronal) sorgulamaktadır; aynı bilgi parçasını tekrar etmez. | analiz: İlk soru sagital KIBT'de nazal kemiğin üzerindeki en üst pnömatize boşluğu (frontal sinüs) sorgularken, ikinci soru koronal KIBT'de orbita medial duvarları arasında petek görünümlü çok sayıda havalı boşluğu (etmoid sinüs) sorgulamaktadır. Farklı anatomik yapılar ve farklı kesit düzlemleri test edildiğinden kopya değildir.

**SORU 1** · `0684c51a-1d7b-47d9-a9b5-e9d84caeca35`

> Sagital KIBT rekonstrüksiyonlarında, nazal kemiğin superiorunda yer alan ve paranazal sinüs ağacı değerlendirmesi sırasında en üstte incelenen pnömatize boşluk aşağıdakilerden hangisidir?

- **A)** Frontal sinüs ✅
- **B)** Maksiller sinüs
- **C)** Etmoid sinüs
- **D)** Sfenoid sinüs
- **E)** Mastoid antrum

*Doğru cevap:* **A**

*Açıklama:* Frontal sinüs, KIBT sagital kesitlerinde frontal kemik içerisinde, nazal kemik ve etmoid kemiğin superiorunda konumlanan en apikal pnömatize boşluktur. Maksiller sinüs maksilla gövdesinde (inferiorda), sfenoid sinüs sella turcica'nın hemen altında (posteriorda) ve mastoid antrum temporal kemikte yer alır. Çoklu paranazal sinüs tutulumu (pansinüzit) şüphesinde bu boşlukların sagittal ilişkilerinin ardışık incelenmesi tanıya yardımcıdır.

**SORU 2** · `c6ca5645-8a04-477d-bd95-d4cc25054826`

> KIBT koronal kesitlerinde, her iki göz çukuru (orbita) medial duvarları arasında ve nazal kavitenin üst lateral komşuluğunda yer alan petek şeklindeki çok sayıda küçük havalı boşluk aşağıdakilerden hangisidir?

- **A)** Maxillary sinus
- **B)** Frontal sinus
- **C)** Sphenoid sinus
- **D)** Ethmoidal sinus ✅
- **E)** Mastoid antrum

*Doğru cevap:* **D**

*Açıklama:* Ethmoidal sinüsler, diğer büyük sinüslerin aksine petek görünümlü çok sayıda küçük havalı hücrelerden (ethmoid air cells) oluşur ve orbita ile nazal kavite arasında yer alır. Maksiller sinüs çok daha inferior konumda maksilla gövdesi içindedir. Frontal sinüs ise doğrudan alın kemiğinin içindeki geniş boşluktur.


---

## 13. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 1.00
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=1.00]: Sorular farklı KIBT fizik prensiplerini (FOV boyutu vs geometrik mesafeler) test ettiği için bilgi tekrarı yoktur; her ikisi de değerli varyasyonlardır. | analiz: Birinci soru FOV boyutunun değişmesinin (büyük vs küçük) etkilerini sorgularken, ikinci soru kaynak-obje ve obje-dedektör mesafelerinin geometrik kombinasyonunun etkilerini sorgulamaktadır. Farklı fiziksel parametreler ve farklı klinik yönelimler söz konusudur; aynı bilgiyi tekrar sorgulamamaktadır.

**SORU 1** · `4f9bce29-b16e-498d-ba88-5772abcce688`

> Maksillofasiyal KIBT görüntüleme sırasında büyük FOV (15-21 cm) yerine dentoalveoler küçük FOV (<8 cm) alanının tercih edilmesi durumunda klinik görüntüleme dinamiğinde aşağıdaki değişikliklerden hangisi meydana gelir?

I. Oluşan skatter (saçılan) radyasyon azalır.
II. Hedef dokuya uygulanan efektif radyasyon dozu düşer.
III. Objeden geçen diverjan foton artışına bağlı görüntü distorsiyonu artar.

- **A)** Yalnız I
- **B)** Yalnız III
- **C)** I ve II ✅
- **D)** II ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Küçük FOV kullanılması, hastanın ışınlanan doku hacmini daralttığı için hem saçılan skatter foton miktarını keskin şekilde azaltır (I doğru) hem de total ve efektif radyasyon dozunu ciddi oranda düşürür (II doğru). Işının diverjanlığına (dağılım açısına) bağlı görüntü distorsiyonu ve artefaktlar FOV büyüdükçe artar, dar FOV'da ise merkezi odak kullanıldığı için bu distorsiyonlar azalır (III yanlış). Doğru cevap I ve II.

**SORU 2** · `eb9e1ebb-59f1-4c46-8a8c-623527375dd0`

> KIBT cihaz geometrisinde X-ışını Kaynağı-Obje Mesafesinin (KOM) uzun tutulması ve Obje-Dedektör Mesafesinin (ODM) kısa olması bazı spesifik fiziksel değişikliklere neden olur.

I. Penumbra azalır ve görüntü keskinliği artar.
II. Görüntüdeki magnifikasyon (büyüme) artar.
III. Dokudan saçılan skatter radyasyonun dedektöre ulaşma ihtimali artar.

Yukarıdaki ifadelerden hangileri bu spesifik geometri kombinasyonunun (Uzun KOM + Kısa ODM) sonuçlarıdır?

- **A)** Yalnız I
- **B)** Yalnız II
- **C)** I ve III ✅
- **D)** II ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Uzun Kaynak-Obje Mesafesi (KOM) ışınların daha paralel gelmesini sağlayarak penumbrayı azaltır ve keskinliği artırır. Aynı zamanda magnifikasyonu (büyütmeyi) da azaltır, bu yüzden II. öncül yanlıştır. Kısa Obje-Dedektör Mesafesi (ODM) kullanmak, hastanın arkasından çıkan ve saçılan fotonların (skatter) uzayda dağılamadan dedektöre düşmesine sebep olduğu için skatter kirliliğini artırır. Dolayısıyla I ve III doğru etkilerdir.


---

## 14. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular farklı parametreleri (mAs vs FOV) ve farklı mekanizmaları sorgulamakta, bu nedenle her ikisi de ayrı bir klinik bilgiyi değerlendirmektedir. | analiz: Her iki soru da KIBT'de gürültü azaltma ile ilgilidir ancak farklı mekanizmaları sorgulamaktadır: birincisi mAs artışının sinyal ve gürültü üzerindeki etkisini, ikincisi ise gürültüyü azaltmak için FOV küçültmenin saçılmayı önleme mekanizmasını test etmektedir. Doğru şıklar ve soru kökleri aynı bilgi parçasını aynı yönelimle sormadığı için kopya değildir.

**SORU 1** · `6073db0c-8401-4767-8055-8dec6da4f644`

> Kırk beş yaşındaki erkek hasta, posterior mandibuladaki implant planlaması için KIBT çekimine yönlendiriliyor. Hekim, implant bölgesindeki trabeküler yapıyı daha net görmek ve görüntüdeki "karlanma" (gürültü) miktarını azaltmak istemektedir. Bu amaçla cihaz panelinden miliamper-saniye (mAs) değerini artıran hekimin, görüntüde aşağıdaki değişikliklerden hangisini elde etmesi beklenir?

- **A)** Dedektör sinyalinde artış ve gürültüde azalma ✅
- **B)** Dedektör sinyalinde azalma ve gürültüde artış
- **C)** Uzaysal çözünürlükte doğrudan artış
- **D)** Fokal spot alanının daralmasına bağlı netlik artışı
- **E)** Görüntüleme hacmindeki saçılma radyasyonunda belirgin düşüş

*Doğru cevap:* **A**

*Açıklama:* Miliamper-saniye (mAs) değerinin artırılması, tüpten çıkan foton miktarını artırarak dedektöre ulaşan ve okunan sinyalin (dedektör verimliliğinin) yükselmesini sağlar, bu da homojen olmayan piksel yansımalarını gidererek gürültüyü azaltır. MAs artışı doğrudan voksel boyutunu küçültmediği için uzaysal çözünürlüğü fiziksel olarak artırmaz, sadece var olan görüntüyü daha temiz hale getirir. Saçılma radyasyonunu azaltmanın temel yolu ise mAs ile oynamak değil, FOV boyutunu küçültmektir.

**SORU 2** · `922b6c5c-2a51-4e97-b9c3-4ba02511282b`

> 40 yaşında erkek hasta, gömülü yirmi yaş dişi çekimi öncesi mandibular kanal ilişkisini belirlemek üzere KIBT taramasına alınıyor. Çekim sonrası elde edilen kesitlerde trabeküler ve kortikal kemik sınırlarında yoğun karlanma (gürültü) fark ediliyor. Cihazın dedektör kapasitesi sınırları zorlanmadan, hekimin bir sonraki benzer taramada bu elektronik gürültüyü en aza indirmek için uygulayabileceği en etkili radyografik modifikasyon aşağıdakilerden hangisidir?

- **A)** Tarama bölgesini büyüterek maksillofasiyal (büyük) FOV tercih etmek
- **B)** X-ışını tüpündeki anot hedef açısını daraltmak
- **C)** Rekonstrüksiyon sırasında filtre kullanımını tamamen devre dışı bırakmak
- **D)** Klinik amacın elverdiği en küçük Görüntüleme Alanını (FOV) seçmek ✅
- **E)** Hasta dozunu kısıtlamak amacıyla miliamper-saniye (mAs) değerini minimuma indirmek

*Doğru cevap:* **D**

*Açıklama:* Radyografik görüntülerdeki gürültü, dedektöre ulaşan hatalı/saçılmış fotonlardan ve yetersiz sinyalden beslenir. Görüntüleme alanı (FOV) ne kadar büyük olursa, doku kitlesi içerisinde saçılan (skatter) x-ışını miktarı o kadar artar ve bu saçılan ışınlar dedektörde karlanma (noise) oluşturur. Hekimin yalnızca incelenmek istenen bölgeyi kapsayan küçük bir FOV seçmesi skatter radyasyonunu mekanik olarak azaltır, böylece hem hastanın dozu düşer hem de dedektöre giden gürültülü sinyal azalarak kontrast kalitesi iyileşir.


---

## 15. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı bilgiyi değil, KIBT parametrelerinin farklı yönlerini sorguladığı için her ikisi de değerlidir. | analiz: İlk soru KIBT'ta projeksiyon sayısının artırılmasının etkilerini sorgularken, ikinci soru aynı klinik senaryoda küçük FOV tercihinin sonuçlarını sorgulamaktadır. Farklı parametreler (projeksiyon sayısı vs. FOV boyutu) üzerinden farklı kavramlar test edildiğinden kopya değildir.

**SORU 1** · `4026a339-6662-4355-8e87-2c0fa171fdd6`

> KIBT taraması sırasında elde edilen projeksiyon görüntüsü sayısının artırılması (örneğin 150 yerine 1000 projeksiyon alınması) ile ilgili:

I. Görüntünün uzaysal çözünürlüğü artar.
II. Hastanın aldığı radyasyon dozu artar.
III. Çekim süresi uzayacağı için hareket artefaktı ihtimali azalır.

ifadelerinden hangileri doğrudur?

- **A)** Yalnız I
- **B)** Yalnız II
- **C)** I ve III
- **D)** II ve III
- **E)** I ve II ✅

*Doğru cevap:* **E**

*Açıklama:* Projeksiyon sayısının artması cihaza daha fazla bilgi (data) sağlar, bu da gürültüyü azaltır ve daha küçük voksel boyutlarında rekonstrüksiyona izin vererek uzaysal çözünürlüğü (I) artırır. Ancak tüp daha uzun süre aktif kalacağı için hem radyasyon dozu (II) artar, hem de tarama süresi uzayacağı için hastanın hareket etme ihtimali artar (III yanlıştır). Doğru yargılar I ve II'dir.

**SORU 2** · `4f9bce29-b16e-498d-ba88-5772abcce688`

> Maksillofasiyal KIBT görüntüleme sırasında büyük FOV (15-21 cm) yerine dentoalveoler küçük FOV (<8 cm) alanının tercih edilmesi durumunda klinik görüntüleme dinamiğinde aşağıdaki değişikliklerden hangisi meydana gelir?

I. Oluşan skatter (saçılan) radyasyon azalır.
II. Hedef dokuya uygulanan efektif radyasyon dozu düşer.
III. Objeden geçen diverjan foton artışına bağlı görüntü distorsiyonu artar.

- **A)** Yalnız I
- **B)** Yalnız III
- **C)** I ve II ✅
- **D)** II ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Küçük FOV kullanılması, hastanın ışınlanan doku hacmini daralttığı için hem saçılan skatter foton miktarını keskin şekilde azaltır (I doğru) hem de total ve efektif radyasyon dozunu ciddi oranda düşürür (II doğru). Işının diverjanlığına (dağılım açısına) bağlı görüntü distorsiyonu ve artefaktlar FOV büyüdükçe artar, dar FOV'da ise merkezi odak kullanıldığı için bu distorsiyonlar azalır (III yanlış). Doğru cevap I ve II.


---

## 16. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı konu (implant çevresi artefaktlar) üzerine olsa da farklı alt-kavramları (scatter vs beam hardening) sorgulamaktadır, bu nedenle her ikisi de korunmalıdır. | analiz: İlk soru, foton saçılması sonucu oluşan streç artefaktını (scatter) sorgularken, ikinci soru ışın sertleşmesi (beam hardening) artefaktını sorgulamaktadır. Her iki artefakt da metal obje çevresinde benzer görüntü verebilse de, farklı fiziksel mekanizmalardan kaynaklanır ve ayrı ayrı bilinmesi gerekir. Bu nedenle farklı bilgiyi test eden değerli sorulardır.

**SORU 1** · `3b1056c3-6aea-4b1c-b368-502a39f8d547`

> Kırk beş yaşındaki kadın hastanın sağ maksiller molar bölgesine yerleştirilen implantın etrafını değerlendirmek amacıyla KIBT alınmıştır. Hekim, implant çevresinde beam hardening artefaktına çok benzeyen ancak, fotonların dokularla etkileşimi sonrasında orijinal doğrusal yörüngesinden rastgele sapmasıyla ortaya çıkan çizgisel (streak) yansımalar izlemiştir. Hekimin görüntüde izlediği ve yüksek yoğunluklu objelerin etrafında belirginleşen bu inherent artefakt aşağıdakilerden hangisidir?

- **A)** Parsiyel hacmin ortalanması artefaktı
- **B)** Aliasing (çentikli örtüşme) artefaktı
- **C)** Çift kontur (yanlış kayıt) artefaktı
- **D)** Undersampling (yetersiz veri örneği) artefaktı
- **E)** Saçılma (Scatter) artefaktı ✅

*Doğru cevap:* **E**

*Açıklama:* Saçılma (scatter) artefaktı, x-ışını fotonlarının hasta dokusuna girdikten sonra yön değiştirerek dedektöre düz bir çizgi halinde değil sapmış olarak ulaşmasıdır. Titanyum implant gibi yüksek yoğunluklu materyallerin çevresinde bu saçılan ışınlar, tıpkı metalin ışını absorbe ettiği ışın sertleşmesi (beam hardening) artefaktında olduğu gibi çizgisel (streak) distorsiyonlara neden olur. Parsiyel hacim doku eşiği ile, aliasing eksik görüntü sayısı (undersampling) ile, çift kontur ise fiziksel hareketle ilişkilidir.

**SORU 2** · `3dbc4933-06b3-40e9-bed2-8eac8c5dff1c`

> Elli beş yaşında erkek hasta, çok sayıda implant ve köprü restorasyonuna sahiptir. KIBT taraması incelenirken iki yoğun metal obje arasında siyah bantlar ve çizgiler şeklinde izlenen kayıp değer alanları görülmüştür. Yüksek enerjili fotonların tercihen geçip düşük enerjili fotonların absorbe edilmesi (ışın sertleşmesi) sonucu oluşan bu fenomene ne ad verilir?

- **A)** Aliasing etkisi
- **B)** Beam hardening artefaktı ✅
- **C)** Parsiyel hacim etkisi
- **D)** Konik ışın süzülmesi
- **E)** Undersampling

*Doğru cevap:* **B**

*Açıklama:* X-ışını objeyi geçerken polikromatik demet içindeki düşük enerjili fotonların emilip, yüksek enerjili fotonların 'sertleşerek' yoluna devam etmesi 'beam hardening' fenomenidir. İki metalik obje (implant) arasında oluştuğunda ortasında veri kayıplarının (siyah bantlar) olduğu yok olma/kayıp değer artefaktları yaratır.


---

## 17. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı temel kavramı (KIBT endodontik uygulamaları) sorgulasa da, farklı yanlış bilgileri hedef aldıkları ve doğru şıklar farklı kavramları işaret ettiği için her ikisi de değerlidir. | analiz: İlk soru KIBT'nin dentoalveoler travmada süperpozisyonlu 2D inceleme sağladığı yanlış ifadesini sorgularken; ikinci soru KIBT'nin pulpa vitalitesini değerlendiremeyeceğini sorgular. Aynı konu (KIBT endodontik kullanımı) olsa da farklı yanlış bilgileri test ederler ve doğru cevapları farklı kavramlardır (3D görüntüleme vs. pulpa değerlendirmesi). Bu nedenle kopya değildir.

**SORU 1** · `7aa33ba2-66d4-44c6-a874-25fe854e8699`

> KIBT'nin endodontik uygulamalarıyla ve dentoalveoler değerlendirmeleriyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?

- **A)** Karmaşık kök kanal anatomisi şüphesinde eklenti kanallar saptanabilir.
- **B)** Eksternal ve internal kök rezorpsiyonları ayırıcı tanıda kesin olarak izlenebilir.
- **C)** İnvaziv servikal rezorpsiyonların sınırları ve yayılım yönü değerlendirilebilir.
- **D)** Dentoalveoler travmaların teşhisinde süperpozisyonlu iki boyutlu inceleme imkanı verir. ✅
- **E)** Endodontik tedavi öncesi veya sonrası gelişen apikal komplikasyonlar saptanabilir.

*Doğru cevap:* **D**

*Açıklama:* KIBT'nin en önemli özelliği projeksiyon görüntülerini birleştirerek "üç boyutlu" hacimsel veri seti oluşturması ve süperpozisyonu tamamen ortadan kaldırmasıdır. Dentoalveoler travmalarda KIBT kullanılması iki boyutlu değil, aksiyal, koronal ve sagital eksenlerde üç boyutlu (kesitsel) değerlendirme imkanı sunar. Diğer şıklardaki endodontik hedeflerin tümü KIBT'nin sağladığı kesitsel veri avantajıyla gerçekleşir.

**SORU 2** · `b2925ca9-e678-4d91-80ed-f276cff21cc0`

> KIBT görüntüleme sistemlerinin klinik çözünürlükleri gün geçtikçe iyileşmekte ve endodontik teşhis planlamalarında rutin pratiklere girmektedir. Aşağıdaki durumlardan hangisi KIBT'nin endodontik teşhis amacıyla tercih edildiği spesifik endikasyon alanlarından biri **değildir**?

- **A)** Pulpanın vasküler vitalite durumunun değerlendirilerek reversibl-irreversibl pulpitis ayrımının radyografik olarak yapılması ✅
- **B)** Karmaşık veya C-shape morfolojiye sahip dişlerde olası aksesuar kanalların, lateral veya furkasyon perforasyonlarının tespiti
- **C)** Konvansiyonel radyografilerin spesifik tanı vermediği durumlarda (kortikal duvar ile maskelenen) apikal lezyonların teşhisi
- **D)** Dentoalveolar travma olgularında alveolar kemik kırık hatlarının ve lüksasyon derecelerinin takip edilmesi
- **E)** Servikal bölgede yerleşim gösteren eksternal veya invaziv kök rezorpsiyonlarının sınırlarının ve pulpa ile ilişkisinin belirlenmesi

*Doğru cevap:* **A**

*Açıklama:* KIBT radyolojik olarak mineralize dokuları, süperpozisyondan kurtarılmış üç boyutlu sert doku geometrilerini ve periapikal kemik kavitasyonlarını (osteolizis) harika bir şekilde gösterir. Ancak pulpanın içindeki kan akımını, yumuşak dokunun enflamasyon seviyesini, vasküler dolaşımı veya vitalitesini KIBT veya hiçbir röntgen cihazı gösteremez. Bu ayrımlar sadece klinik termal/elektrik pulpa testleri ve kavite hazırlığı sırasındaki reaksiyonlar ile belirlenir.


---

## 18. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.90
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.90]: Sorular benzer konseptte olsa da doğru şıklar ve verilen aralıklar farklı olduğundan kopya değildir; her ikisi de farklı sınıflamayı sorgular ve korunmalıdır. | analiz: Her iki soru da KIBT FOV boyutlarını sorguluyor ancak farklı sınıflamalar ve farklı sayısal aralıklar kullanıyor. İlki 'arclar-arası' için 7-10 cm, ikincisi 'maksillo-mandibular' için 8-15 cm vermiş. Aynı kavramı test etselerdi eşleşen bir cevap olurdu, ancak burada cevaplar farklı, dolayısıyla aynı soru değil.

**SORU 1** · `58131be0-cf34-48a1-8ade-b8cf312076c0`

> Dental KIBT cihazlarında görüntüleme alanı (FOV) hastanın ihtiyacına göre ayarlanabilir. Hem alt hem üst diş kavislerini aynı anda içeren ancak iskeletsel referans noktalarına kadar uzanmayan "Arklar-arası" FOV seçeneğinin boyut aralığı aşağıdakilerden hangisidir?

- **A)** 5 cm'den küçük
- **B)** 5-7 cm
- **C)** 7-10 cm ✅
- **D)** 10-15 cm
- **E)** 15-21 cm

*Doğru cevap:* **C**

*Açıklama:* Kaynak metindeki alternatif FOV sınıflamasına göre lokalize (<5 cm), tek ark (5-7 cm), arklar-arası (7-10 cm), maksillofasiyal (10-15 cm) ve kraniyofasiyal (>15 cm) boyutlar tanımlanmıştır. Arklar arası inceleme 7-10 cm'lik silindirik yüksekliğe karşılık gelir.

**SORU 2** · `c3e3f3e2-8358-48d0-ae0f-8d1eb8cd29f5`

> KIBT cihazlarında, hem maksilla hem de mandibulanın tam olarak izlenebildiği ancak kafatasının tamamının veya iskeletsel kafa kaidesinin kapsanmadığı maksillo-mandibular görüntüleme alanı (FOV) boyutu genellikle aşağıdakilerden hangisidir?

- **A)** 5 cm'den küçük
- **B)** 8-15 cm arası ✅
- **C)** 15-21 cm arası
- **D)** 21 cm'den büyük
- **E)** 5-7 cm arası

*Doğru cevap:* **B**

*Açıklama:* Görüntüleme hacmi (FOV) KIBT terminolojisinde anatomik kapsama alanlarına bölünmüştür: Dentoalveoler alanlar 8 cm'den küçükken, her iki çeneyi de kapsayan maksillo-mandibular FOV 8 ile 15 cm arasında değişir. İskeletsel yapılar için 15-21 cm, tüm kafa veya baş-boyun taramaları için ise 21 cm üzeri FOV'lar kullanılır. 5 cm altı alanlar lokalize, diş bazlı endodontik/cerrahi çekimler için ayrılmıştır.


---

## 19. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı kavramı farklı açılardan test etmektedir; biri yarım taramanın etkilerini, diğeri doz azaltma yöntemlerini sorgular. | analiz: İlk soru yarım taramanın radyasyon dozu, gürültü ve hareket artefaktı üzerindeki spesifik etkilerini sorgularken; ikinci soru radyasyon dozunu azaltan parametre değişimlerini genel olarak sorgulamakta ve yarım taramayı bu seçeneklerden biri olarak sunmaktadır. Soru kökleri ve hedefledikleri bilgi farklıdır, bu nedenle kopya değildir.

**SORU 1** · `77340991-5d62-43f3-aaff-8b9648e4b38a`

> KIBT cihazlarında x-ışını tüpü ve dedektörün hasta etrafındaki rotasyon açısının (yörünge arkının) standart 360 derece yerine 180 dereceye düşürülerek (yarım tarama) uygulanması durumunda aşağıdakilerden hangilerinin gerçekleşmesi beklenir?

I. Radyasyon dozu ve ışınlama süresi azalır.
II. Görüntü matrisindeki elektronik gürültü (noise) azalır.
III. Hastanın yutkunma veya solunuma bağlı hareket artefaktı riski düşer.

- **A)** Yalnız II
- **B)** I ve II
- **C)** I ve III ✅
- **D)** II ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Rotasyon açısının 180 dereceye düşürülmesi çekim süresini yarıya indirir, bu da hastanın aldığı radyasyon dozunu doğrudan azaltır (I doğru) ve kısa sürede işlem bittiği için yutkunma/titreme (hareket) artefaktı riskini çok düşürür (III doğru). Ancak toplanan açısal veri havuzu küçüldüğü (az projeksiyon elde edildiği) için bilgi eksikliğinden kaynaklanan undersampling gelişir ve görüntüdeki gürültü azalmaz, aksine belirgin şekilde artar (II yanlış).

**SORU 2** · `c731ed7a-4742-4736-bc3a-b61d34c53f4f`

> KIBT cihazlarında klinisyen tarafından kontrol edilebilen veya cihazın sistemine entegre edilmiş parametreler radyasyon dozu ile doğrudan ilişkilidir.
Aşağıdaki parametre değişimlerinden hangileri hastanın alacağı radyasyon dozunu azaltmaya yöneliktir?
I. Konvansiyonel görüntü güçlendiriciler yerine Flat Panel Dedektör (FPD) kullanımı
II. Işınlama esnasında rotasyon arkının 360 derece yerine 180 dereceye düşürülmesi
III. Görüntüleme alanının (FOV) daraltılarak lokalize tarama yapılması
IV. Tüp miliamper (mA) değerinin artırılması

- **A)** I, II ve III ✅
- **B)** I ve III
- **C)** II ve IV
- **D)** I, III ve IV
- **E)** II, III ve IV

*Doğru cevap:* **A**

*Açıklama:* Flat panel dedektörler x-ışını duyarlılığı yüksek olduğu için düşük doz gerektirir. Rotasyon arkının kısaltılması ışınlama süresini düşürerek dozu azaltır. FOV hacminin küçültülmesi efektif dozu dramatik biçimde düşürür. Ancak tüp miliamper (mA) değerinin artırılması, tüpten çıkan foton sayısını artıracağı için gürültüyü azaltır fakat hasta dozunu doğrudan yükseltir.


---

## 20. 🔴 ELENDİ → `c34af4b3-4bc4-49b4-9954-0c72191e4b5e`

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_1`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_1 | güven=0.95]: Her iki soru aynı klinik müdahaleyi sorgulamaktadır; 1. sorunun açıklaması daha net ve hedefe yöneliktir. | analiz: Her iki soru da KIBT'de metalik restorasyonlardan kaynaklanan beam hardening artefaktını minimize etmek için dental arkların ayrılmasını doğru cevap olarak vermektedir. Soru kökleri farklı klinik senaryolar sunsa da (maksiller sinüs vs mandibular anterior), test ettikleri temel bilgi aynıdır: artefaktı önlemenin en etkili yolu arkları ayırmaktır. Bu nedenle sorular kopya niteliğindedir. 1. sorunun açıklaması daha doğrudan ve öğreticidir.

**SORU 1** · `4e8a5dc5-3a3e-4d27-b638-ff2b05bf3986`

> Maksillofasiyal bölgede yaygın altın ve kuron-köprü restorasyonları bulunan bir hastada, maksiller sağ sinüs patolojisi şüphesiyle KIBT çekilecektir. Klinisyen, protetik materyallerden kaynaklanıp tüm çevre dokuyu siyah çanak hatları şeklinde örtecek olan ışın sertleşmesi (beam hardening) artefaktından endişe etmektedir. Radyoloji teknikerinin bu artefaktın sinüs bölgesini gizlemesini engellemek için tarama öncesi yapacağı en etkili fiziksel işlem aşağıdakilerden hangisidir?

- **A)** Kare hızını (frame rate) en düşük limite indirmek
- **B)** Pamuk rulo veya ısırtma plağı ile dental arkları (alt ve üst çeneyi) birbirinden uzaklaştırarak ayırmak ✅
- **C)** Kilovoltaj (kVp) değerini 90'dan 70'e düşürerek yumuşak çekim yapmak
- **D)** Görüntüleme alanını sadece restorasyonlu dişleri içine alacak şekilde küçültmek
- **E)** Tüpün rotasyon arkını 360 dereceden 180 dereceye indirmek

*Doğru cevap:* **B**

*Açıklama:* Geniş veya multipl metalik restorasyonları olan hastalarda, oklüzyonda kapalı bir çene tarandığında tüm metallerin ışın sertleşmesi ve skatter artefaktları birbirine karışarak üst çene sinüs tabanını bile gizleyecek karanlık yansımalara neden olur. Çözüm olarak araya pamuk rulo, spatül veya ısırttırma bloğu konularak mandibular ark maksiller arktan fiziksel olarak uzaklaştırılır (ayrılır). Bu şekilde alt metallerin artefaktı yukarı ulaşmadan anatomik pencere temizlenmiş olur.

**SORU 2** · `c34af4b3-4bc4-49b4-9954-0c72191e4b5e`

> Elli beş yaşındaki erkek hasta, posterior bölgelerinde birden fazla metal destekli porselen kron restorasyonu taşımaktadır. Mandibular anterior bölgedeki kistik lezyon için KIBT planlanmaktadır. Ancak hekim, hastanın ağzındaki metalik restorasyonların x-ışınının düşük enerjili fotonlarını absorbe ederek "ışın sertleşmesi" (beam hardening) artefaktı oluşturacağından ve bu durumun lezyon sınırlarında siyah bantlar yaratacağından endişelenmektedir. Bu hastada artefaktı minimize etmek için hekimin uygulaması gereken **en uygun** strateji aşağıdakilerden hangisidir?

- **A)** Cihazın miliamper (mA) değerini en düşük seviyeye indirerek dedektörün metalden sinyal almasını fiziksel olarak engellemek
- **B)** Lokalize FOV boyutunu seçerek sadece mandibular anterior bölgeyi taramak ve ısırtma çubuğu/pamuk rulo kullanarak dental arkları birbirinden ayırmak ✅
- **C)** FOV boyutunu iskeletsel boyuta kadar genişleterek metalin yarattığı negatif piksel ortalamasını çevre dokulara yayarak silikleştirmek
- **D)** Projeksiyon hızını düşürerek rotasyon sırasında elde edilen kesit sayısını azaltmak ve cihazın metalle temas süresini en aza indirmek
- **E)** Yüksek çözünürlük yerine büyük voksel seçimi yaparak artefakt sınırlarını dikdörtgen pikseller içinde eritmek

*Doğru cevap:* **B**

*Açıklama:* Beam hardening (ışın sertleşmesi) artefaktı, düşük enerjili x-ışınlarının metal yüzeyinde takılıp absorbe olması, ancak yüksek enerjili kısmın geçerek dedektörde çizgisel kayıplar (siyah bantlar ve çanak görünümleri) oluşturmasıdır. KIBT pratiğinde bu etkinin hedef bölgeyi (mandibular anterior) maskelemesini önlemenin temel klinik yolu; hedef dışındaki metalleri (maxiller kuronları vb.) tarama alanının (FOV) dışında bırakmak ve alt-üst dişlerin temasını keserek artefaktın iz düşümünü anatomik plandan uzaklaştırmaktır. MAs düşürmek aksine gürültüyü maksimize eder, FOV büyütmek saçılmayı artırarak artefaktı güçlendirir.


---

## 21. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.80
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.80]: Soru kökleri aynı konuyu sorgulasa da, birincisi kombinasyon, ikincisi tek faktör üzerine odaklandığı için farklı yönelimlerdedir. | analiz: Her iki soru da KIBT'de uzaysal çözünürlüğü artırma parametrelerini sorgulamaktadır. Ancak birinci soru 'en ideal parametre kombinasyonu'nu (dar FOV + küçük voksel + yüksek projeksiyon) sorarken, ikinci soru 'en uygun parametre' olarak yalnızca küçük voksel boyutunu işaret etmiştir. Bu nedenle sordukları bilgi parçası ve yönelim farklıdır.

**SORU 1** · `9a560f94-f1cc-434f-8086-6762be2a4542`

> 28 yaşında erkek hasta, bisiklet kazası sonrası maksiller anterior bölgede şüpheli horizontal kök fraktürü tanısıyla KIBT çekimine alınacaktır. Kırık hattı çok ince (hairline fracture) olduğu için cihazın izin verdiği en keskin çözünürlük parametrelerine ihtiyaç duyulmaktadır. Doz endişesinin ikinci planda olduğu bu akut travma senaryosunda, optimum uzaysal çözünürlük için en ideal parametre kombinasyonu aşağıdakilerden hangisidir?

- **A)** Geniş FOV + Büyük Voksel Boyutu + Kesintili Düşük Frekans
- **B)** Dar FOV + Büyük Voksel Boyutu + 180 derece ark
- **C)** Dar FOV + Küçük Voksel Boyutu + Yüksek kVp ile Düşük mAs
- **D)** Dar FOV (Lokalize) + Küçük Voksel Boyutu + Yüksek Projeksiyon Sayısı ✅
- **E)** Geniş FOV + Küçük Voksel Boyutu + Düşük Projeksiyon Sayısı

*Doğru cevap:* **D**

*Açıklama:* İnce saç teli veya çatlak seviyesindeki anatomik bozuklukları saptayabilmek için KIBT'de uzaysal çözünürlüğün maksimize edilmesi şarttır. Dar (lokalize) FOV seçimi skatteri radikal şekilde engeller. Küçük voksel boyutu milimetrik yapıları birbirinden ayrıştırır. Çok sayıda ham projeksiyon (örneğin 360 derece arkta >500 projeksiyon) alınması ise aliasing'i engeller, datayı zenginleştirir ve voksel matriksinin en net şekilde (sharpness) oluşturulmasına imkan tanır.

**SORU 2** · `f4ef3cad-4c11-46fa-80a0-935b70ae2f69`

> 35 yaşında erkek hasta, sol maksiller santral dişindeki inatçı endodontik enfeksiyon nedeniyle sevk edilmiştir. Dişte aksesuar kanal şüphesi mevcuttur. Klinisyen, KIBT sisteminde küçük yapıların ayrımını maksimum seviyeye çıkarmak istemektedir. Bu amaçla aşağıdaki ışınlama parametrelerinden hangisinin tercih edilmesi en uygundur?

- **A)** En küçük voksel boyutunun seçilmesi ✅
- **B)** Fokal spot çapının en büyük değere ayarlanması
- **C)** Projeksiyon görüntüsü sayısının azaltılması
- **D)** Maksillo-mandibular geniş FOV moduna geçilmesi
- **E)** Kilovoltaj (kVp) değerinin en düşük seviyede tutulması

*Doğru cevap:* **A**

*Açıklama:* Aksesuar kanal, kök çatlağı veya internal rezorpsiyon gibi detaylı mikro-anatomik incelemeler yüksek uzaysal çözünürlük gerektirir ve bu da doğrudan en küçük voksel boyutunun seçilmesiyle sağlanır. Fokal spot çapının büyütülmesi veya projeksiyon sayısının azaltılması görüntüyü bulanıklaştırır ve penumbrayı artırır. Endodontik değerlendirmelerde altın standart küçük FOV ve küçük voksel kombinasyonudur.


---

## 22. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 76% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular aynı bölgeyi sorgulasalar da birincisi iki yapıyı (mastoid antrum ve semisirküler kanallar), ikincisi tek bir yapıyı (mastoid antrum) hedef alır; bu nedenle farklı alt kavramları test ederler. | analiz: Her iki soru da KIBT'de mastoid antrumu sorgulamaktadır ancak ilk soru aynı kesitte semisirküler kanalları da istemekte, ikinci soru ise yalnızca havalı boşluğu sormaktadır. Bu nedenle farklı bilgi düzeylerini ve farklı anatomik yapıları test ederler.

**SORU 1** · `27b39c3b-a51a-45e7-b171-8a9d2e1054bc`

> KIBT aksiyal kesitlerinde temporomandibular eklemin posterior komşulukları incelenirken, dış kulak yolunun (external auditory canal) posteriorunda yer alan içi hava dolu boşluklu yapı (I) ve daha medialde iç kulağa ait kıvrımlı yapılar (II) izlenmektedir. Bu anatomik yapılar aşağıdakilerden hangileridir?

- **A)** I: Sphenoid sinus — II: Vomer
- **B)** I: Pterygopalatine fossa — II: Ear ossicles
- **C)** I: Mastoid antrum — II: Semicircular canals ✅
- **D)** I: Ethmoid sinus — II: Clivus
- **E)** I: Maxillary sinus — II: Genial tubercle

*Doğru cevap:* **C**

*Açıklama:* Temporal kemiğin KIBT ile incelenmesinde, dış kulak yolunun posteriorunda mastoid hava hücrelerinin açıldığı mastoid antrum izlenirken, petröz parça içerisinde medialde denge fonksiyonundan sorumlu semisirküler kanallar (semicircular canals) görülür. Sfenoid ve etmoid sinüsler daha anterior ve medial yerleşimlidir.

**SORU 2** · `56f9c40a-39a3-4b10-bfaf-37103e5c1540`

> KIBT aksiyal kesitinde kulak bölgesi anatomisi değerlendirilirken, kulak kemikçiklerinin (ear ossicles) posteriorunda yer alan, temporal kemiğin petromastoid parçası içerisindeki havalı boşluk aşağıdakilerden hangisidir?

- **A)** Maksiller sinüs
- **B)** Sfenoid sinüs
- **C)** Orofarenks
- **D)** Pterigopalatin fossa
- **E)** Mastoid antrum ✅

*Doğru cevap:* **E**

*Açıklama:* Mastoid antrum, temporal kemiğin mastoid çıkıntısı içerisinde yer alan ve orta kulak boşluğu ile iştirakli olan geniş havalı boşluktur. Aksiyal KIBT kesitlerinde kafatasının posterolateralinde, kulak kemikçiklerinin ve eksternal işitme kanalının gerisinde bal peteği benzeri radyolüsent alanların merkezinde bulunur. Pterigopalatin fossa ve maksiller sinüs anterior yüz anatomisine aittir.


---

## 23. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 75% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 1.00
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=1.00]: Sorular aynı gerçeği farklı yönelimlerle (düşük vs yüksek örnekleme) sorguladığından her ikisi de değerli varyasyonlardır. | analiz: Soru 1 düşük örnekleme (undersampling) sonuçlarını sorgularken, Soru 2 yüksek projeksiyon sayısının avantaj ve dezavantajını sorgulamaktadır. Aynı konu olmasına rağmen farklı yönlerden (negatif ve pozitif) ve farklı klinik çıktılar üzerinden değerlendirme yapılmıştır. Bu nedenle sorular kopya değildir.

**SORU 1** · `75aeed6d-fe07-490c-b17a-4d51323eed47`

> Bir KIBT taraması sırasında x-ışını kaynağının rotasyonu boyunca elde edilen temel projeksiyon görüntülerinin sayısının gereğinden az tutulması (düşük örnekleme), görüntünün kalitesi üzerinde çeşitli problemlere yol açar.
Aşağıdakilerden hangisi bu düşük örnekleme durumunda beklenen bir sonuç **değildir**?

- **A)** Aliasing (örtüşme) artefaktının artması
- **B)** Görüntüde ince çizgiler şeklinde gürültü oluşması
- **C)** Keskin anatomik kenarların görüntüdeki netliğinin bozulması
- **D)** Uzaysal çözünürlüğün artması ✅
- **E)** Datanın yanlış kayda maruz kalması

*Doğru cevap:* **D**

*Açıklama:* Projeksiyon sayısının (kare hızı ve ışınlama süresine bağlı olarak) düşük tutulması, uzaysal çözünürlüğü artırmaz; aksine azaltır. Az sayıda projeksiyon elde edildiğinde (undersampling), veri yetersizliğinden ötürü keskin kenarlarda çentiklenme (aliasing) ve ekran kenarında çizgiler şeklinde gürültü artefaktları oluşur. Çok sayıda projeksiyon ise bilgi yoğunluğunu ve uzaysal çözünürlüğü artırır.

**SORU 2** · `eb96f683-0777-427c-a90b-e9f4885741b4`

> KIBT çekiminde yüksek sayıda projeksiyon görüntüsü elde edilmesinin görüntü kalitesi ve klinik süreç üzerine etkileri büyük bir öneme sahiptir. Projeksiyon sayısının artırılmasıyla hedeflenen temel klinik kazanım ve beraberinde getirdiği **en belirgin** dezavantaj aşağıdakilerden hangisinde birlikte verilmiştir?

- **A)** Gürültü azalır – Işınlama ve rekonstrüksiyon süresi uzar ✅
- **B)** Uzaysal çözünürlük düşer – Hastanın alacağı radyasyon dozu azalır
- **C)** Saçılma (scatter) artar – Artefakt gelişme riski ve topuk etkisi azalır
- **D)** Hareket artefaktı azalır – Metalik ışın sertleşmesi belirgin şekilde artar
- **E)** Görüntüleme alanı (FOV) daralır – Tüpün soğuma süresi kısalır

*Doğru cevap:* **A**

*Açıklama:* Çok sayıda projeksiyon görüntüsü kullanmak, lümenden veya dokudan daha fazla veri toplanmasını sağladığı için gürültüyü (noise) etkin biçimde azaltır ve uzaysal çözünürlüğü iyileştirir. Ancak bu fazla verinin dezavantajlı faturası, hastanın sistem içinde daha uzun süre ışın alması (artan doz ve uzayan süre), bununla bağlantılı tüp ısınma/rekonstrüksiyon süreçlerinin uzaması ve harekete bağlı artefakt riskinin teorik olarak artmasıdır. Çözünürlükte düşüş veya FOV daralması projeksiyon sayısı artışının bir sonucu değildir.


---

## 24. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 75% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular farklı FOV kategorilerini sorguluyor, aynı bilgiyi tekrar etmiyor; her ikisi de değerli varyasyonlar. | analiz: Soru 1 maksillo-mandibular FOV (8-15 cm) aralığını sorgularken, Soru 2 baş-boyun FOV (>21 cm) aralığını sorgulamaktadır. Farklı anatomik kapsama alanları ve farklı doğru şıklarla ayrı bilgileri test ettikleri için kopya değildir.

**SORU 1** · `c3e3f3e2-8358-48d0-ae0f-8d1eb8cd29f5`

> KIBT cihazlarında, hem maksilla hem de mandibulanın tam olarak izlenebildiği ancak kafatasının tamamının veya iskeletsel kafa kaidesinin kapsanmadığı maksillo-mandibular görüntüleme alanı (FOV) boyutu genellikle aşağıdakilerden hangisidir?

- **A)** 5 cm'den küçük
- **B)** 8-15 cm arası ✅
- **C)** 15-21 cm arası
- **D)** 21 cm'den büyük
- **E)** 5-7 cm arası

*Doğru cevap:* **B**

*Açıklama:* Görüntüleme hacmi (FOV) KIBT terminolojisinde anatomik kapsama alanlarına bölünmüştür: Dentoalveoler alanlar 8 cm'den küçükken, her iki çeneyi de kapsayan maksillo-mandibular FOV 8 ile 15 cm arasında değişir. İskeletsel yapılar için 15-21 cm, tüm kafa veya baş-boyun taramaları için ise 21 cm üzeri FOV'lar kullanılır. 5 cm altı alanlar lokalize, diş bazlı endodontik/cerrahi çekimler için ayrılmıştır.

**SORU 2** · `ed1792b6-e0ca-4a5f-b00b-bc429dd8541d`

> Havayolu analizi, kraniyofasiyal asimetri ve boyun bölgesini de içine alan kapsamlı multidisipliner değerlendirmelerde tercih edilen "baş-boyun" FOV (Görüntüleme Alanı) boyutu KIBT cihazlarında genellikle hangi aralığı ifade eder?

- **A)** 5-7 cm arası
- **B)** 8-10 cm arası
- **C)** 10-15 cm arası
- **D)** 21 cm'den büyük ✅
- **E)** 15-21 cm arası

*Doğru cevap:* **D**

*Açıklama:* Havayolu değerlendirmesi, baş ve boynun bütüncül yumuşak doku ilişkilerini de içine alan kapsamlı kraniyofasiyal muayeneler KIBT sınırlarının en geniş olduğu modları gerektirir. Bu tür baş-boyun tarama modları standart anatomik büyüklüğe sahip erişkin bir bireyde 21 cm'den büyük silindirik/konik hacim (FOV) ölçüleriyle mümkündür. İskeletsel sınır (15-21 cm) genellikle boynun yumuşak doku detayları ve alt servikal vertebra limitleri için yetersiz kalır.


---

## 25. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 75% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.70
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.70]: Sorular aynı kavramı farklı yönelimlerle (etki vs. eylem) sorguladığından kopya değildir; her ikisi de değerli varyasyonlardır. | analiz: Her iki soru da KIBT'da gürültü azaltma amacıyla tüp çıkış parametrelerinin artırılmasına odaklanmaktadır. Ancak birinci soru özellikle mAs artışının etkisini sorgularken, ikinci soru kullanıcı tarafından yapılacak modifikasyonu (kV ve mA artışı) sormaktadır. Bu nedenle aynı temel bilgiyi farklı açılardan test etmektedirler.

**SORU 1** · `6073db0c-8401-4767-8055-8dec6da4f644`

> Kırk beş yaşındaki erkek hasta, posterior mandibuladaki implant planlaması için KIBT çekimine yönlendiriliyor. Hekim, implant bölgesindeki trabeküler yapıyı daha net görmek ve görüntüdeki "karlanma" (gürültü) miktarını azaltmak istemektedir. Bu amaçla cihaz panelinden miliamper-saniye (mAs) değerini artıran hekimin, görüntüde aşağıdaki değişikliklerden hangisini elde etmesi beklenir?

- **A)** Dedektör sinyalinde artış ve gürültüde azalma ✅
- **B)** Dedektör sinyalinde azalma ve gürültüde artış
- **C)** Uzaysal çözünürlükte doğrudan artış
- **D)** Fokal spot alanının daralmasına bağlı netlik artışı
- **E)** Görüntüleme hacmindeki saçılma radyasyonunda belirgin düşüş

*Doğru cevap:* **A**

*Açıklama:* Miliamper-saniye (mAs) değerinin artırılması, tüpten çıkan foton miktarını artırarak dedektöre ulaşan ve okunan sinyalin (dedektör verimliliğinin) yükselmesini sağlar, bu da homojen olmayan piksel yansımalarını gidererek gürültüyü azaltır. MAs artışı doğrudan voksel boyutunu küçültmediği için uzaysal çözünürlüğü fiziksel olarak artırmaz, sadece var olan görüntüyü daha temiz hale getirir. Saçılma radyasyonunu azaltmanın temel yolu ise mAs ile oynamak değil, FOV boyutunu küçültmektir.

**SORU 2** · `6e3ecb41-dd25-42d5-a1c2-b3ca8e89e2d5`

> 60 yaşında erkek hasta, implant cerrahisi öncesi KIBT ile değerlendiriliyor. Görüntülerde kemik trabekülasyonunu maskeleyen ve teşhisi zorlaştıran belirgin elektronik gürültü (noise) tespit ediliyor. Cihaza bağlı donanımsal mesafe faktörleri sabit kabul edildiğinde, radyoloji uzmanının bir sonraki çekimde gürültüyü azaltmak için 'kullanıcıya bağlı' parametreler üzerinden yapacağı en etkili modifikasyon aşağıdakilerden hangisidir?

- **A)** Tüp fokal spotunu 0.5 mm'den 0.3 mm'ye düşürmek
- **B)** Radyasyon dozunu düşürmek için miliamperi yarıya indirmek
- **C)** Dedektör ile hasta arasındaki mesafeyi manuel olarak artırmak
- **D)** Cihazın izin verdiği sınırlar dahilinde kilovoltaj ve miliamperi artırmak ✅
- **E)** X-ışını projeksiyon sayısını (kare hızını) dramatik olarak azaltmak

*Doğru cevap:* **D**

*Açıklama:* Görüntüdeki elektronik gürültü, dedektöre ulaşan foton sinyalinin yeterli homojeniteye ve yoğunluğa sahip olmamasından kaynaklanır. Kullanıcının müdahale edebileceği en temel çözüm, x-ışını demetinin miktarını (miliamper artışı) ve dokuyu delip geçme gücünü (kilovoltaj artışı) yükselterek dedektöre düşen sinyali güçlendirmektir. Miliamperi düşürmek veya projeksiyon sayısını azaltmak gürültüyü belirgin şekilde daha da kötüleştirecek faktörlerdir.


---

## 26. 🟢 İKİSİ DE KORUNDU

- **Benzerlik:** 75% (—)  ·  **Karar:** `keep_both`  ·  **Güven:** 0.95
- **Gerekçe:** deepseek-v4-pro [keep_both | güven=0.95]: Sorular farklı alt-kavramları test ediyor: biri gürültü azaltma stratejileri, diğeri FOV değişiminin fiziksel etkileri. Aynı bilgi tekrarı yoktur. | analiz: İlk soru, KIBT'da elektronik gürültüyü minimize etmek için voksel boyutu, mAs ve FOV ile ilgili stratejileri sorgulamaktadır. İkinci soru, büyük FOV yerine küçük FOV kullanımının radyasyon dozu, skatter ve distorsiyon üzerindeki etkilerini sorgulamaktadır. Soru kökleri ve doğru şıklar farklı bilgileri test etmektedir. İlk soru stratejileri, ikinci soru ise sonuçları hedeflemektedir. Bu nedenle sorular aynı kavramı tekrar sorgulamamaktadır.

**SORU 1** · `23d5454c-3ce3-44f8-a707-ecd0ba4c3cdf`

> KIBT sisteminde optimal görüntü kalitesine ulaşmak için görüntü üzerinde biriken elektronik gürültüyü (noise) minimize etmek gereklidir. Bu amacı sağlamak için kullanıcı veya cihaz kalibrasyonunda aşağıdaki değişikliklerden hangilerinin yapılması doğru bir stratejidir?

I. Voksel boyutunu küçültmek
II. Işınlama faktörlerinden miliamperi (mAs) artırmak
III. Taranan görüş alanını (FOV) daraltmak

- **A)** Yalnız I
- **B)** Yalnız II
- **C)** II ve III ✅
- **D)** I ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Işınlanan doku hacmi ne kadar büyükse o kadar skatter gürültü oluşur, bu nedenle FOV daraltılmalıdır (III doğru). X-ışını foton sayısı (mAs) artırıldığında dedektöre vuran güçlü sinyal oranı artar ve elektriksel/skatter gürültü bastırılır (II doğru). Ancak voksel boyutunu küçültmek (I), her pikselin yakaladığı ortalama foton sayısını (signal kapasitesini) böldüğü için görüntüyü kumlu/gürültülü hale getirir; gürültüyü azaltmak için voksel büyütülmelidir.

**SORU 2** · `4f9bce29-b16e-498d-ba88-5772abcce688`

> Maksillofasiyal KIBT görüntüleme sırasında büyük FOV (15-21 cm) yerine dentoalveoler küçük FOV (<8 cm) alanının tercih edilmesi durumunda klinik görüntüleme dinamiğinde aşağıdaki değişikliklerden hangisi meydana gelir?

I. Oluşan skatter (saçılan) radyasyon azalır.
II. Hedef dokuya uygulanan efektif radyasyon dozu düşer.
III. Objeden geçen diverjan foton artışına bağlı görüntü distorsiyonu artar.

- **A)** Yalnız I
- **B)** Yalnız III
- **C)** I ve II ✅
- **D)** II ve III
- **E)** I, II ve III

*Doğru cevap:* **C**

*Açıklama:* Küçük FOV kullanılması, hastanın ışınlanan doku hacmini daralttığı için hem saçılan skatter foton miktarını keskin şekilde azaltır (I doğru) hem de total ve efektif radyasyon dozunu ciddi oranda düşürür (II doğru). Işının diverjanlığına (dağılım açısına) bağlı görüntü distorsiyonu ve artefaktlar FOV büyüdükçe artar, dar FOV'da ise merkezi odak kullanıldığı için bu distorsiyonlar azalır (III yanlış). Doğru cevap I ve II.


---

