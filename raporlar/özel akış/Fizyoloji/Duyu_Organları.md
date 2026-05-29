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

### ÇİFT 1 (Benzerlik: 1.00)

**Soru 1 (ID: 04ddfed1-fd77-4ebf-837e-275635ec26fd)**
Soru Kökü: Elli iki yaşında erkek hasta, son yıllarda gazete okurken yazıları net görebilmek için sayfayı gözünden uzaklaştırmak zorunda kaldığını ifade ediyor. Uzağı görmesinde herhangi bir problemi olmayan hastanın bu durumu, lens elastikiyetinin kaybı nedeniyle siliyer kas kasılsa bile lens kırıcılığının artırılamaması ile açıklanıyor. Bu klinik tablonun fizyolojik mekanizmasını tanımlayan kavram aşağıdakilerden hangisidir?
Doğru Şık (C): Prespiyopi
Açıklama: Yaşlanma ile birlikte lensin elastikiyetini kaybetmesi sonucu, silyer kasın kasılmasına rağmen lensin bombeliğini artıramaması ve akomodasyon gücünün azalmasına prespiyopi denir. Hipermetropi de yakını görememe tablosu yaratsa da, bu durum yaşa bağlı fonksiyon kaybından ziyade göz küresinin anatomik olarak kısa olması veya lensteki primer kırıcılık azalması nedeniyledir. Prespiyopi her emetrop bireyde beklenen fizyolojik bir süreçtir.

**Soru 2 (ID: 2c67852f-a3c5-4731-a0b5-ccdfa2d7f4e2)**
Soru Kökü: Elli iki yaşında erkek hasta, son yıllarda gazete okurken yazıları net görebilmek için sayfayı gözünden uzaklaştırmak zorunda kaldığını ifade ediyor. Uzağı görmesinde herhangi bir problemi olmayan hastanın bu durumu, lens elastikiyetinin kaybı nedeniyle siliyer kas kasılsa bile lens kırıcılığının artırılamaması ile açıklanıyor. Bu klinik tablonun fizyolojik mekanizmasını tanımlayan kavram aşağıdakilerden hangisidir?
Doğru Şık (C): Prespiyopi
Açıklama: Yaşlanma ile birlikte lensin elastikiyetini kaybetmesi sonucu, silyer kasın kasılmasına rağmen lensin bombeliğini artıramaması ve akomodasyon gücünün azalmasına prespiyopi denir. Hipermetropi de yakını görememe tablosu yaratsa da, bu durum yaşa bağlı fonksiyon kaybından ziyade göz küresinin anatomik olarak kısa olması veya lensteki primer kırıcılık azalması nedeniyledir. Prespiyopi her emetrop bireyde beklenen fizyolojik bir süreçtir.

---

### ÇİFT 2 (Benzerlik: 1.00)

**Soru 1 (ID: 4bf9955d-7a85-4cd2-81f1-2123090b4ddb)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

**Soru 2 (ID: cd4f618d-00f8-4ac1-8946-909803f93ad6)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

---

### ÇİFT 3 (Benzerlik: 1.00)

**Soru 1 (ID: 5c4628c4-a767-4c6c-b1de-adb7821b551a)**
Soru Kökü: Altmış iki yaşında kadın hasta, görme alanında daralma ve göz içi basıncında artış (24 mmHg) bulgularıyla değerlendiriliyor. Glokom tanısı konulan hastada, humör aköz drenajının anatomik bir tıkanıklık nedeniyle yetersiz olduğu saptanıyor. Bu hastada sıvının ön kamaradan ekstraoküler venöz sisteme aktarılamamasına yol açan asıl boşalma kanalı aşağıdakilerden hangisidir?
Doğru Şık (D): Schlemm kanalı
Açıklama: Humör aköz, ön kamarayı terk ederken limbus seviyesindeki Schlemm kanalına, oradan da aköz venler aracılığıyla ekstraoküler venöz sisteme boşalır ve normal göz içi basıncını 15 mmHg civarında tutar. Silyer uzantılar sıvının drene edildiği değil üretildiği yerdir. Tıkanıklık veya direnç artışı uzun süre devam ederse optik sinir sıkışır ve körlükle sonuçlanan glokom tablosu ortaya çıkar.

**Soru 2 (ID: 67b3f727-e9c3-4604-88c5-646b3a59f276)**
Soru Kökü: Altmış iki yaşında kadın hasta, görme alanında daralma ve göz içi basıncında artış (24 mmHg) bulgularıyla değerlendiriliyor. Glokom tanısı konulan hastada, humör aköz drenajının anatomik bir tıkanıklık nedeniyle yetersiz olduğu saptanıyor. Bu hastada sıvının ön kamaradan ekstraoküler venöz sisteme aktarılamamasına yol açan asıl boşalma kanalı aşağıdakilerden hangisidir?
Doğru Şık (D): Schlemm kanalı
Açıklama: Humör aköz, ön kamarayı terk ederken limbus seviyesindeki Schlemm kanalına, oradan da aköz venler aracılığıyla ekstraoküler venöz sisteme boşalır ve normal göz içi basıncını 15 mmHg civarında tutar. Silyer uzantılar sıvının drene edildiği değil üretildiği yerdir. Tıkanıklık veya direnç artışı uzun süre devam ederse optik sinir sıkışır ve körlükle sonuçlanan glokom tablosu ortaya çıkar.

---

### ÇİFT 4 (Benzerlik: 1.00)

**Soru 1 (ID: 4f976d31-368b-486f-be7c-1da4404afb03)**
Soru Kökü: Işık uyarısıyla fotoreseptör (basil) hücresinin dış segmentinde cGMP'ye bağımlı sodyum kanalları kapanmasına rağmen, hücrenin istirahat potansiyelinden hiperpolarize duruma geçmesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Hiperpolarizasyon, sinaptik transmitterin salınımını artırarak bipolar hücreleri aktive eder.
Açıklama: Işık uyarısıyla fotoreseptör hücresi hiperpolarize olduğunda sinaptik terminaldeki voltaj kapılı kalsiyum kanalları kapanır ve sinaptik alana salınan inhibitör nörotransmitter (glutamat) salınımı artmaz, tam aksine azalır; bu azalma bipolar hücrelerin uyarılarak görme sinyalini iletmesine neden olur. Hücrenin hiperpolarize olmasının temel nedeni, sodyum kanalları kapansa bile iç segmentteki Na+-K+ ATPaz pompasının iyonları sürekli olarak hücre dışına pompalamasıdır. Retinada sadece ganglion hücreleri aksiyon potansiyeli üretir.

**Soru 2 (ID: 9f38112b-2a0a-4497-8e7a-2bf42854768b)**
Soru Kökü: Işık uyarısıyla fotoreseptör (basil) hücresinin dış segmentinde cGMP'ye bağımlı sodyum kanalları kapanmasına rağmen, hücrenin istirahat potansiyelinden hiperpolarize duruma geçmesiyle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Hiperpolarizasyon, sinaptik transmitterin salınımını artırarak bipolar hücreleri aktive eder.
Açıklama: Işık uyarısıyla fotoreseptör hücresi hiperpolarize olduğunda sinaptik terminaldeki voltaj kapılı kalsiyum kanalları kapanır ve sinaptik alana salınan inhibitör nörotransmitter (glutamat) salınımı artmaz, tam aksine azalır; bu azalma bipolar hücrelerin uyarılarak görme sinyalini iletmesine neden olur. Hücrenin hiperpolarize olmasının temel nedeni, sodyum kanalları kapansa bile iç segmentteki Na+-K+ ATPaz pompasının iyonları sürekli olarak hücre dışına pompalamasıdır. Retinada sadece ganglion hücreleri aksiyon potansiyeli üretir.

---

### ÇİFT 5 (Benzerlik: 1.00)

**Soru 1 (ID: 7ea65796-7d68-4942-9f52-046735a843d4)**
Soru Kökü: Otogenetik inceleme yapılan bir yenidoğanda, iç kulakta skala mediada yer alan korti organındaki tüy hücrelerinin mekanotransdüksiyon yeteneğinde kusur saptanıyor. Biyopside, baziler membranın titreşimi sırasında sterosilyaların kinosilyumlara doğru bükülmesini sağlayan ve sterosilyaları apikalden bir örtü gibi örten jelatinöz yapının sentezlenemediği görülüyor. Fonksiyonu kaybolan bu yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Tektorial membran
Açıklama: Korti organındaki işitme ile görevli tüy hücrelerinin sterosilyaları, hemen üzerlerinde yer alan jelatinöz yapılı tektorial membran içine gömülüdür. Baziler membran ses dalgasıyla yukarı doğru hareket ettiğinde, sterosilyalar nispeten sabit duran tektorial membrana sürtünerek kinosilyuma doğru bükülür ve potasyum kanalları mekanik olarak açılır. Otolitik membran vestibüler sistemde yer alırken, Reissner membranı işitmeyle doğrudan mekanik bağı olmayan ve skala vestibuli ile mediayı ayıran zardır.

**Soru 2 (ID: 8e2d9c1f-66e0-439f-a6b3-4f19b23e90ce)**
Soru Kökü: Otogenetik inceleme yapılan bir yenidoğanda, iç kulakta skala mediada yer alan korti organındaki tüy hücrelerinin mekanotransdüksiyon yeteneğinde kusur saptanıyor. Biyopside, baziler membranın titreşimi sırasında sterosilyaların kinosilyumlara doğru bükülmesini sağlayan ve sterosilyaları apikalden bir örtü gibi örten jelatinöz yapının sentezlenemediği görülüyor. Fonksiyonu kaybolan bu yapı aşağıdakilerden hangisidir?
Doğru Şık (B): Tektorial membran
Açıklama: Korti organındaki işitme ile görevli tüy hücrelerinin sterosilyaları, hemen üzerlerinde yer alan jelatinöz yapılı tektorial membran içine gömülüdür. Baziler membran ses dalgasıyla yukarı doğru hareket ettiğinde, sterosilyalar nispeten sabit duran tektorial membrana sürtünerek kinosilyuma doğru bükülür ve potasyum kanalları mekanik olarak açılır. Otolitik membran vestibüler sistemde yer alırken, Reissner membranı işitmeyle doğrudan mekanik bağı olmayan ve skala vestibuli ile mediayı ayıran zardır.

---

### ÇİFT 6 (Benzerlik: 1.00)

**Soru 1 (ID: 3631336f-33ed-49e8-9d42-24632f252bb6)**
Soru Kökü: Santral sinir sisteminde araknoid ile piamater arasındaki subaraknoid alanda dolaşan ve total miktarı yaklaşık 150 ml olan beyin-omurilik sıvısının (BOS) ana üretim yeri aşağıdakilerden hangisidir?
Doğru Şık (B): Koroid pleksuslar
Açıklama: Beyin-omurilik sıvısı (BOS), ventriküllerin içinde yer alan vasküler yapılar olan koroid pleksuslar tarafından üretilir ve subaraknoid alanda dolaşır. Araknoid villuslar (veya pakiyoni granülasyonları) sıvının üretim yeri değil, dural venöz sinüslere emilerek sistemik dolaşıma katıldığı reabsorbsiyon alanlarıdır. Sıvı üretimi, plazmanın ultrafiltrasyonu ve aktif sekretuvar süreçlerle sağlanır.

**Soru 2 (ID: e7dbb9b4-c9b8-4ebf-af20-37305889300f)**
Soru Kökü: Santral sinir sisteminde araknoid ile piamater arasındaki subaraknoid alanda dolaşan ve total miktarı yaklaşık 150 ml olan beyin-omurilik sıvısının (BOS) ana üretim yeri aşağıdakilerden hangisidir?
Doğru Şık (B): Koroid pleksuslar
Açıklama: Beyin-omurilik sıvısı (BOS), ventriküllerin içinde yer alan vasküler yapılar olan koroid pleksuslar tarafından üretilir ve subaraknoid alanda dolaşır. Araknoid villuslar (veya pakiyoni granülasyonları) sıvının üretim yeri değil, dural venöz sinüslere emilerek sistemik dolaşıma katıldığı reabsorbsiyon alanlarıdır. Sıvı üretimi, plazmanın ultrafiltrasyonu ve aktif sekretuvar süreçlerle sağlanır.

---

### ÇİFT 7 (Benzerlik: 1.00)

**Soru 1 (ID: 885f06e2-2e00-4414-bb92-d9f51aecf706)**
Soru Kökü: Sağlıklı ve herhangi bir kırma kusuru bulunmayan istirahat halindeki bir gözün kırma ortamlarının (kornea ve lens) akomodasyonsuz toplam statik kırılma gücü kaç diyoptridir?
Doğru Şık (D): +59
Açıklama: Normal (emetrop) ve akomodasyon yapmayan bir gözün toplam statik kırma gücü yaklaşık +59 diyoptridir. Bu kırma gücünün en büyük kısmı +40 diyoptri ile korneaya, geri kalanı ise +12 diyoptri ile lense aittir. Gözde kırma kusurunun olmaması, dışarıdan paralel gelen ışınların statik kırılma ile doğrudan retina üzerinde odaklanabildiğini gösterir.

**Soru 2 (ID: e2f8ee2d-1647-4ff2-8d2b-6018e7286b79)**
Soru Kökü: Sağlıklı ve herhangi bir kırma kusuru bulunmayan istirahat halindeki bir gözün kırma ortamlarının (kornea ve lens) akomodasyonsuz toplam statik kırılma gücü kaç diyoptridir?
Doğru Şık (D): +59
Açıklama: Normal (emetrop) ve akomodasyon yapmayan bir gözün toplam statik kırma gücü yaklaşık +59 diyoptridir. Bu kırma gücünün en büyük kısmı +40 diyoptri ile korneaya, geri kalanı ise +12 diyoptri ile lense aittir. Gözde kırma kusurunun olmaması, dışarıdan paralel gelen ışınların statik kırılma ile doğrudan retina üzerinde odaklanabildiğini gösterir.

---

### ÇİFT 8 (Benzerlik: 1.00)

**Soru 1 (ID: da61b075-8285-42bc-8fe4-adf5de0dc1d9)**
Soru Kökü: Kırk beş yaşında erkek hasta, şiddetli baş ağrısı şikayetiyle acil servise başvuruyor. Lomber ponksiyon planlanan hastaya yatar pozisyonda işlem uygulandığında, ölçülen beyin-omurilik sıvısı (BOS) basıncının normal fizyolojik sınırlarda olduğu saptanıyor. Bu hastada ölçülen ortalama BOS basıncı değeri aşağıdakilerden hangisidir?
Doğru Şık (A): 130 mmH2O
Açıklama: Yatan bir kişide normal fizyolojik beyin-omurilik sıvısı (BOS) basıncı ortalama 130 mmH2O seviyesindedir. 10 değeri mmH2O cinsinden değil mmHg cinsinden ifade edildiğinde (10 mmHg) doğru kabul edilebilir, birim karmaşası yaratmak sıklıkla kullanılan bir çeldiricidir. BOS basıncının klinik olarak yüksek ölçülmesi kafaiçi basınç artışının önemli bir bulgusudur.

**Soru 2 (ID: f555e138-95a6-433f-88a6-7deb32beeb61)**
Soru Kökü: Kırk beş yaşında erkek hasta, şiddetli baş ağrısı şikayetiyle acil servise başvuruyor. Lomber ponksiyon planlanan hastaya yatar pozisyonda işlem uygulandığında, ölçülen beyin-omurilik sıvısı (BOS) basıncının normal fizyolojik sınırlarda olduğu saptanıyor. Bu hastada ölçülen ortalama BOS basıncı değeri aşağıdakilerden hangisidir?
Doğru Şık (A): 130 mmH2O
Açıklama: Yatan bir kişide normal fizyolojik beyin-omurilik sıvısı (BOS) basıncı ortalama 130 mmH2O seviyesindedir. 10 değeri mmH2O cinsinden değil mmHg cinsinden ifade edildiğinde (10 mmHg) doğru kabul edilebilir, birim karmaşası yaratmak sıklıkla kullanılan bir çeldiricidir. BOS basıncının klinik olarak yüksek ölçülmesi kafaiçi basınç artışının önemli bir bulgusudur.

---

### ÇİFT 9 (Benzerlik: 1.00)

**Soru 1 (ID: 3fdbfc92-3bfa-4479-8134-1d447fd0e8fe)**
Soru Kökü: Silyer uzantılar tarafından salgılanan humör aközün, üretildiği noktadan Schlemm kanalına ulaşmadan önce izlediği fizyolojik akış yolu aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (A): Arka kamara → Pupilla → Ön kamara
Açıklama: Humör aköz silyer uzantılar tarafından üretildikten sonra ilk olarak arka kamaraya salgılanır, ardından zonula lifleri arasından ve pupilladan geçerek ön kamaraya akar. Schlemm kanalı akışın başlangıç veya orta yolu değil, sıvının ön kamarayı terk ederek venöz sisteme aktarıldığı drenaj (boşalma) bölgesidir. Sıvının bu sürekli akışı, kornea ve lens gibi avasküler yapıların metabolik desteğini sağlar.

**Soru 2 (ID: a98d11ed-1fec-4809-9005-5d8d627c9620)**
Soru Kökü: Silyer uzantılar tarafından salgılanan humör aközün, üretildiği noktadan Schlemm kanalına ulaşmadan önce izlediği fizyolojik akış yolu aşağıdakilerin hangisinde doğru verilmiştir?
Doğru Şık (A): Arka kamara → Pupilla → Ön kamara
Açıklama: Humör aköz silyer uzantılar tarafından üretildikten sonra ilk olarak arka kamaraya salgılanır, ardından zonula lifleri arasından ve pupilladan geçerek ön kamaraya akar. Schlemm kanalı akışın başlangıç veya orta yolu değil, sıvının ön kamarayı terk ederek venöz sisteme aktarıldığı drenaj (boşalma) bölgesidir. Sıvının bu sürekli akışı, kornea ve lens gibi avasküler yapıların metabolik desteğini sağlar.

---

### ÇİFT 10 (Benzerlik: 1.00)

**Soru 1 (ID: 185fefd8-4a82-4855-a770-b16602190f02)**
Soru Kökü: Yaşlılığa bağlı olarak gelişen ve lens elastikiyetinin kaybı sonucu ortaya çıkan prespiyopi tablosunun optik düzeltilmesinde, hastanın tek bir gözlükle hem uzağı hem yakını görebilmesini sağlayan mercek tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Bifokal gözlük
Açıklama: Prespiyopi tedavisinde, hastanın uzağa bakarken gözünün kendi var olan statik kırma gücünü kullanmasını, yakına bakarken ise akomodasyon eksikliğini telafi etmesini sağlayan bifokal (iki odaklı) gözlükler kullanılır. İnce kenarlı mercekler genel hipermetropi tedavisinde, silindirik mercekler ise dikey/yatay kırıcılık farkı olan astigmatizmada tercih edilir. Bifokal camlar dinamik kırıcılık kaybını spesifik olarak kompanze eder.

**Soru 2 (ID: 580182d3-1772-4feb-961c-2b4eb218b78c)**
Soru Kökü: Yaşlılığa bağlı olarak gelişen ve lens elastikiyetinin kaybı sonucu ortaya çıkan prespiyopi tablosunun optik düzeltilmesinde, hastanın tek bir gözlükle hem uzağı hem yakını görebilmesini sağlayan mercek tipi aşağıdakilerden hangisidir?
Doğru Şık (E): Bifokal gözlük
Açıklama: Prespiyopi tedavisinde, hastanın uzağa bakarken gözünün kendi var olan statik kırma gücünü kullanmasını, yakına bakarken ise akomodasyon eksikliğini telafi etmesini sağlayan bifokal (iki odaklı) gözlükler kullanılır. İnce kenarlı mercekler genel hipermetropi tedavisinde, silindirik mercekler ise dikey/yatay kırıcılık farkı olan astigmatizmada tercih edilir. Bifokal camlar dinamik kırıcılık kaybını spesifik olarak kompanze eder.

---

### ÇİFT 11 (Benzerlik: 1.00)

**Soru 1 (ID: 89c77c10-301d-44ef-a9c8-ce219e4bbe6a)**
Soru Kökü: Göz küresinin anatomik yapısını oluşturan üç temel tabaka incelendiğinde, en dışta yer alan ve gözü koruyan fibröz tabaka aşağıdaki yapı çiftlerinden hangisini içerir?
Doğru Şık (B): Sklera ve Kornea
Açıklama: Göz küresinin en dışta yer alan fibröz tabakası, arka kısımda opak beyaz renkli sklera ve ön kısımda ışığı kıran saydam korneadan oluşur. İris ve silyer cisim koroid ile birlikte orta kısımdaki vasküler tabakayı (uvea) oluştururken, retina en içteki nöral tabakayı temsil eder. Fibröz tabaka yapısal bütünlüğü sağlayarak göz içi basınca karşı direnç oluşturur.

**Soru 2 (ID: f1cd98c0-754c-4d4a-aa97-072a2fad805b)**
Soru Kökü: Göz küresinin anatomik yapısını oluşturan üç temel tabaka incelendiğinde, en dışta yer alan ve gözü koruyan fibröz tabaka aşağıdaki yapı çiftlerinden hangisini içerir?
Doğru Şık (B): Sklera ve Kornea
Açıklama: Göz küresinin en dışta yer alan fibröz tabakası, arka kısımda opak beyaz renkli sklera ve ön kısımda ışığı kıran saydam korneadan oluşur. İris ve silyer cisim koroid ile birlikte orta kısımdaki vasküler tabakayı (uvea) oluştururken, retina en içteki nöral tabakayı temsil eder. Fibröz tabaka yapısal bütünlüğü sağlayarak göz içi basınca karşı direnç oluşturur.

---

### ÇİFT 12 (Benzerlik: 1.00)

**Soru 1 (ID: 0182770a-bff9-43c3-a38f-5a67098804e7)**
Soru Kökü: Havadaki ses dalgalarının dış kulak yolundan iç kulağa iletilmesi sırasında, timpanik zardaki mekanik titreşimleri oval pencereye taşıyarak sesin sıvı ortamda amplifiye edilmesini sağlayan orta kulak kemikçikleri dıştan içe doğru hangi sırayla dizilmiştir?
Doğru Şık (A): Malleus - İnkus - Stapes
Açıklama: Orta kulakta ses titreşimlerini ileten kemikçik zinciri timpanik zardan başlayıp oval pencereye doğru sırasıyla malleus (çekiç), inkus (örs) ve stapes (üzengi) şeklinde dizilmiştir. Malleus doğrudan timpanik zarın iç yüzüne tutunurken, stapes tabanı kohleanın oval penceresine oturur; bu yapısal düzenek havadaki ses titreşimleri ile sıvı ortam arasında empedans eşleştirmesi yaparak sesi yaklaşık 22 kat amplifiye eder.

**Soru 2 (ID: 0a022ed0-efa3-4403-a7ee-ad5e5a40aba4)**
Soru Kökü: Havadaki ses dalgalarının dış kulak yolundan iç kulağa iletilmesi sırasında, timpanik zardaki mekanik titreşimleri oval pencereye taşıyarak sesin sıvı ortamda amplifiye edilmesini sağlayan orta kulak kemikçikleri dıştan içe doğru hangi sırayla dizilmiştir?
Doğru Şık (A): Malleus - İnkus - Stapes
Açıklama: Orta kulakta ses titreşimlerini ileten kemikçik zinciri timpanik zardan başlayıp oval pencereye doğru sırasıyla malleus (çekiç), inkus (örs) ve stapes (üzengi) şeklinde dizilmiştir. Malleus doğrudan timpanik zarın iç yüzüne tutunurken, stapes tabanı kohleanın oval penceresine oturur; bu yapısal düzenek havadaki ses titreşimleri ile sıvı ortam arasında empedans eşleştirmesi yaparak sesi yaklaşık 22 kat amplifiye eder.

---

### ÇİFT 13 (Benzerlik: 1.00)

**Soru 1 (ID: 3ae78282-2e30-44a4-a7a6-2afb7f588452)**
Soru Kökü: Uyku-uyanıklık siklusunun (diürnal ritm) düzenlenmesinde hipotalamusun suprakiazmatik nükleusundan (SCN) çıkan sinyaller, pineal bezden melatonin salınımını artırır. Bu uyarıcı noradrenerjik sinyaller pineal beze aşağıdaki yapıların hangisi aracılığıyla ulaşır?
Doğru Şık (C): Süperior servikal gangliyon
Açıklama: Suprakiazmatik nükleus (SCN), uyku-uyanıklık döngüsünü düzenlerken pineal beze giden sempatik noradrenerjik sinyalleri süperior servikal gangliyon üzerinden iletir. Parasempatik yolaklara ait olan sfenopalatin, silyer, otik ve submandibular gangliyonların melatonin sekresyonu veya SCN ile doğrudan bir bağlantısı yoktur. Bu sempatik aktivasyon, iç saat (inner-clock) mekanizmasının karanlıkta melatonin üretimini tetiklemesini sağlar.

**Soru 2 (ID: 9175afd3-2c2d-4f91-8ec8-ad754ad97992)**
Soru Kökü: Uyku-uyanıklık siklusunun (diürnal ritm) düzenlenmesinde hipotalamusun suprakiazmatik nükleusundan (SCN) çıkan sinyaller, pineal bezden melatonin salınımını artırır. Bu uyarıcı noradrenerjik sinyaller pineal beze aşağıdaki yapıların hangisi aracılığıyla ulaşır?
Doğru Şık (C): Süperior servikal gangliyon
Açıklama: Suprakiazmatik nükleus (SCN), uyku-uyanıklık döngüsünü düzenlerken pineal beze giden sempatik noradrenerjik sinyalleri süperior servikal gangliyon üzerinden iletir. Parasempatik yolaklara ait olan sfenopalatin, silyer, otik ve submandibular gangliyonların melatonin sekresyonu veya SCN ile doğrudan bir bağlantısı yoktur. Bu sempatik aktivasyon, iç saat (inner-clock) mekanizmasının karanlıkta melatonin üretimini tetiklemesini sağlar.

---

### ÇİFT 14 (Benzerlik: 1.00)

**Soru 1 (ID: 3ccf8a23-13ec-4219-a12e-0efb50b7c04b)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

**Soru 2 (ID: 6c779f7f-0097-4470-8767-ea9220937c99)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

---

### ÇİFT 15 (Benzerlik: 1.00)

**Soru 1 (ID: 20e95d8a-5941-4e54-b2f9-eef42d01229b)**
Soru Kökü: Beyin-omurilik sıvısı (BOS) ile kan plazmasının biyokimyasal içeriği karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): BOS glukoz ve protein seviyeleri kan plazmasındaki seviyelere eşittir.
Açıklama: Beyin-omurilik sıvısındaki (BOS) glukoz, aminoasitler, kolesterol ve protein konsantrasyonları kan plazmasına göre belirgin şekilde daha düşüktür. BOS ve kan arasında bikarbonat, sodyum ve total osmolarite birbirine yaklaşık olarak eşitken; BOS klor ve magnezyum düzeyleri kandan daha yüksektir. Bu asimetrik iyon ve metabolit dağılımı koroid pleksustaki seçici taşıyıcı sistemler aracılığıyla sürdürülür.

**Soru 2 (ID: df91ceb6-26d7-4090-8a1e-b2aa1e12762e)**
Soru Kökü: Beyin-omurilik sıvısı (BOS) ile kan plazmasının biyokimyasal içeriği karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): BOS glukoz ve protein seviyeleri kan plazmasındaki seviyelere eşittir.
Açıklama: Beyin-omurilik sıvısındaki (BOS) glukoz, aminoasitler, kolesterol ve protein konsantrasyonları kan plazmasına göre belirgin şekilde daha düşüktür. BOS ve kan arasında bikarbonat, sodyum ve total osmolarite birbirine yaklaşık olarak eşitken; BOS klor ve magnezyum düzeyleri kandan daha yüksektir. Bu asimetrik iyon ve metabolit dağılımı koroid pleksustaki seçici taşıyıcı sistemler aracılığıyla sürdürülür.

---

### ÇİFT 16 (Benzerlik: 0.87)

**Soru 1 (ID: 9175afd3-2c2d-4f91-8ec8-ad754ad97992)**
Soru Kökü: Uyku-uyanıklık siklusunun (diürnal ritm) düzenlenmesinde hipotalamusun suprakiazmatik nükleusundan (SCN) çıkan sinyaller, pineal bezden melatonin salınımını artırır. Bu uyarıcı noradrenerjik sinyaller pineal beze aşağıdaki yapıların hangisi aracılığıyla ulaşır?
Doğru Şık (C): Süperior servikal gangliyon
Açıklama: Suprakiazmatik nükleus (SCN), uyku-uyanıklık döngüsünü düzenlerken pineal beze giden sempatik noradrenerjik sinyalleri süperior servikal gangliyon üzerinden iletir. Parasempatik yolaklara ait olan sfenopalatin, silyer, otik ve submandibular gangliyonların melatonin sekresyonu veya SCN ile doğrudan bir bağlantısı yoktur. Bu sempatik aktivasyon, iç saat (inner-clock) mekanizmasının karanlıkta melatonin üretimini tetiklemesini sağlar.

**Soru 2 (ID: fade2a5b-e40f-44b0-bf67-dd4ba41362a9)**
Soru Kökü: Suprakiazmatik nükleustan (SCN) çıkan ve pineal bezden melatonin salgısını uyaran sempatik noradrenerjik sinyaller aşağıdaki anatomik yapıların hangisi üzerinden aktarılır?
Doğru Şık (E): Süperior servikal ganglion
Açıklama: Suprakiazmatik nükleus, uyku-uyanıklık döngüsünü (diürnal ritm) kontrol eden 'iç saat' (inner-clock) mekanizmasıdır. Bu nükleustan çıkan lifler, süperior servikal gangliyon üzerinden sempatik noradrenerjik sinyaller aracılığıyla pineal beze ulaşır ve melatonin salınımını artırır. Silyer veya otik gibi parasempatik gangliyonların bu uyanıklık yolağı ile doğrudan ilişkisi yoktur.

---

### ÇİFT 17 (Benzerlik: 0.87)

**Soru 1 (ID: 3ae78282-2e30-44a4-a7a6-2afb7f588452)**
Soru Kökü: Uyku-uyanıklık siklusunun (diürnal ritm) düzenlenmesinde hipotalamusun suprakiazmatik nükleusundan (SCN) çıkan sinyaller, pineal bezden melatonin salınımını artırır. Bu uyarıcı noradrenerjik sinyaller pineal beze aşağıdaki yapıların hangisi aracılığıyla ulaşır?
Doğru Şık (C): Süperior servikal gangliyon
Açıklama: Suprakiazmatik nükleus (SCN), uyku-uyanıklık döngüsünü düzenlerken pineal beze giden sempatik noradrenerjik sinyalleri süperior servikal gangliyon üzerinden iletir. Parasempatik yolaklara ait olan sfenopalatin, silyer, otik ve submandibular gangliyonların melatonin sekresyonu veya SCN ile doğrudan bir bağlantısı yoktur. Bu sempatik aktivasyon, iç saat (inner-clock) mekanizmasının karanlıkta melatonin üretimini tetiklemesini sağlar.

**Soru 2 (ID: fade2a5b-e40f-44b0-bf67-dd4ba41362a9)**
Soru Kökü: Suprakiazmatik nükleustan (SCN) çıkan ve pineal bezden melatonin salgısını uyaran sempatik noradrenerjik sinyaller aşağıdaki anatomik yapıların hangisi üzerinden aktarılır?
Doğru Şık (E): Süperior servikal ganglion
Açıklama: Suprakiazmatik nükleus, uyku-uyanıklık döngüsünü (diürnal ritm) kontrol eden 'iç saat' (inner-clock) mekanizmasıdır. Bu nükleustan çıkan lifler, süperior servikal gangliyon üzerinden sempatik noradrenerjik sinyaller aracılığıyla pineal beze ulaşır ve melatonin salınımını artırır. Silyer veya otik gibi parasempatik gangliyonların bu uyanıklık yolağı ile doğrudan ilişkisi yoktur.

---

### ÇİFT 18 (Benzerlik: 0.84)

**Soru 1 (ID: 3e32580a-3ecb-4eaa-b74a-d6a27b974994)**
Soru Kökü: Retinaya ışık düştüğünde reseptör hücrelerinde meydana gelen biyokimyasal olaylar dizisinde aşağıdakilerden hangisi doğrudan gözlenir?
Doğru Şık (A): 11-cis-retinalin fotoizomerize olarak all-trans-retinal formuna dönüşmesi
Açıklama: Işık retinaya düştüğünde rodopsinin yapısında bulunan 11-cis-retinal enerji absorbe ederek all-trans-retinal formuna izomerize olur. Bu konformasyon değişikliği G-proteini olan transdusini uyarır, fosfodiesteraz enzimi aracılığıyla hücre içi cGMP'yi azaltır ve cGMP-kapılı sodyum kanallarını kapatır. Sodyum girişinin durmasıyla hücre hiperpolarize olur ve karanlıkta devam eden transmitter salınımı inhibe edilir.

**Soru 2 (ID: 4bf9955d-7a85-4cd2-81f1-2123090b4ddb)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

---

### ÇİFT 19 (Benzerlik: 0.84)

**Soru 1 (ID: 3e32580a-3ecb-4eaa-b74a-d6a27b974994)**
Soru Kökü: Retinaya ışık düştüğünde reseptör hücrelerinde meydana gelen biyokimyasal olaylar dizisinde aşağıdakilerden hangisi doğrudan gözlenir?
Doğru Şık (A): 11-cis-retinalin fotoizomerize olarak all-trans-retinal formuna dönüşmesi
Açıklama: Işık retinaya düştüğünde rodopsinin yapısında bulunan 11-cis-retinal enerji absorbe ederek all-trans-retinal formuna izomerize olur. Bu konformasyon değişikliği G-proteini olan transdusini uyarır, fosfodiesteraz enzimi aracılığıyla hücre içi cGMP'yi azaltır ve cGMP-kapılı sodyum kanallarını kapatır. Sodyum girişinin durmasıyla hücre hiperpolarize olur ve karanlıkta devam eden transmitter salınımı inhibe edilir.

**Soru 2 (ID: cd4f618d-00f8-4ac1-8946-909803f93ad6)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

---

### ÇİFT 20 (Benzerlik: 0.84)

**Soru 1 (ID: 8fcc3823-22d1-451c-a3ca-413e4309be9e)**
Soru Kökü: Koku duyusunun hücresel ve moleküler mekanizmaları ile ilgili aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Doğadaki her bir koku molekülü için spesifik, tek tip bir reseptör hücresi bulunur
Açıklama: Koku sisteminde 'kokulara özel reseptör hücresi yoktur'. Bipolar koku nöronları birden fazla koku molekülüne yanıt verebilir ve algılanan spesifik koku, aktive olan reseptör popülasyonlarının beyindeki kombinatoryal şifrelenmesiyle (pattern recognition) belirlenir. Bu hücrelerin mitozla bölünebilen nadir nöronlardan olması da klinik yenilenme açısından kritiktir.

**Soru 2 (ID: 97012ef6-3ac6-4b60-ad81-dad59bf453c9)**
Soru Kökü: Koku duyusunun hücresel ve reseptör fizyolojisi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Her spesifik koku çeşidi için özel olarak farklılaşmış sadece o kokuyu algılayan tekil reseptör tipleri bulunur.
Açıklama: Koku reseptör hücreleri spesifik olarak sadece tek bir moleküle değil, farklı kokulara yanıt verebilen çoklu reaktivite gösterir; yani her koku için özel bir reseptör yoktur. Koku molekülü bağlandığında G proteini aktive olur, artan hücre içi cAMP ile Na+/Ca++ kanalları açılarak membran depolarizasyonu başlar. Ayrıca bu reseptörler, insanda mitozla çoğalabilen nadir nöron popülasyonlarındandır.

---

### ÇİFT 21 (Benzerlik: 0.84)

**Soru 1 (ID: 69902259-bf67-417f-9be5-306058887706)**
Soru Kökü: Nöronlarda aksiyon potansiyelini takip eden refrakter periyotlar ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Mutlak refrakter periyodun temel mekanizması voltaj kapılı potasyum kanallarının yavaş kapanmasıdır.
Açıklama: Mutlak refrakter periyodun sebebi potasyum kanallarının durumu değil, voltaj kapılı sodyum kanallarının inaktivasyon kapılarının kapanmasıdır. Bu inaktivasyon kapıları, membran potansiyeli istirahat değerine veya ona çok yakın bir değere dönünceye kadar açılmaz ve hücre uyarılamaz. Voltaj bağımlı potasyum kanallarının yavaş kapanması ise hiperpolarizasyondan sorumludur.

**Soru 2 (ID: b47da32c-711f-4432-9694-8bab443a409b)**
Soru Kökü: Uyarılabilir bir nöronda membran potansiyelindeki değişim evreleri ve refrakter periyotlar ile ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): Rölatif refrakter periyot boyunca hücre hiçbir şiddetteki uyarana cevap veremez ve yeni bir potansiyel kesinlikle oluşturulamaz.
Açıklama: Rölatif refrakter periyot boyunca hücre istirahat potansiyeline dönme aşamasındadır ve inaktivasyon kapıları kısmen açılmaya başlamıştır; bu dönemde normalden daha güçlü (şiddetli) bir uyaran verilirse yeni bir aksiyon potansiyeli pekala oluşturulabilir. Hiçbir uyarana yanıt verilmeyen dönem mutlak (absolü) refrakter periyottur.

---

### ÇİFT 22 (Benzerlik: 0.83)

**Soru 1 (ID: 14d7ccc5-820b-4341-b09d-00e2e72c179c)**
Soru Kökü: Beyin-omurilik sıvısı (BOS) ve kan plazması elektrolit düzeyleri incelendiğinde, aşağıdakilerden hangisinin BOS konsantrasyonu kandaki seviyesinden daha yüksek **değildir**?
Doğru Şık (D): Potasyum
Açıklama: Beyin-omurilik sıvısında (BOS) magnezyum, klorür, kreatinin ve pCO2 seviyeleri kan plazmasından daha yüksektir. Ancak potasyum, kalsiyum, glukoz, aminoasitler, kolesterol ve protein düzeyleri kanda BOS'a göre daha yüksektir. Bu iyonik fark, merkezi sinir sistemindeki nöronların elektriksel uyarılabilirliğini korumak için sağlanan spesifik bir gradiyenttir.

**Soru 2 (ID: df91ceb6-26d7-4090-8a1e-b2aa1e12762e)**
Soru Kökü: Beyin-omurilik sıvısı (BOS) ile kan plazmasının biyokimyasal içeriği karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): BOS glukoz ve protein seviyeleri kan plazmasındaki seviyelere eşittir.
Açıklama: Beyin-omurilik sıvısındaki (BOS) glukoz, aminoasitler, kolesterol ve protein konsantrasyonları kan plazmasına göre belirgin şekilde daha düşüktür. BOS ve kan arasında bikarbonat, sodyum ve total osmolarite birbirine yaklaşık olarak eşitken; BOS klor ve magnezyum düzeyleri kandan daha yüksektir. Bu asimetrik iyon ve metabolit dağılımı koroid pleksustaki seçici taşıyıcı sistemler aracılığıyla sürdürülür.

---

### ÇİFT 23 (Benzerlik: 0.83)

**Soru 1 (ID: 07b7aceb-8f5e-4493-86c4-c5a5a101bcc7)**
Soru Kökü: Katekolaminlerin metabolizması (eliminasyonu) ve yıkım enzimleri hakkında aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (A): MAO (Mono Amin Oksidaz), nöron dışında (sinaptik aralıkta) noradrenalini yıkan temel ekstraselüler enzimdir.
Açıklama: MAO, mitokondriyal (intraselüler) bir enzimdir ve geri alınan veya sitoplazmada serbest kalan noradrenalini presinaptik terminal içinde yıkar. Nöron dışında (sinaptik aralık ve hedef dokularda) katekolaminleri yıkan asıl enzim COMT'dur. Bu intraselüler vs. ekstraselüler lokalizasyon farkı klasik bir farmakoloji yanılgısıdır.

**Soru 2 (ID: 13ead7cc-0727-46b3-bdb8-f6be5cc666a3)**
Soru Kökü: Adrenerjik sinapslarda salınan katekolaminlerin inaktivasyon süreçleri ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): MAO enzimi, ekstraselüler alandaki (sinaptik boşluktaki) katekolamin yıkımından primer sorumlu enzimdir.
Açıklama: Mono Amin Oksidaz (MAO) enzimi sinaptik boşlukta değil, nöron terminalinin içinde (mitokondri membranında) bulunur ve sitoplazmadaki vezikül dışı serbest katekolaminleri yıkar. Nöron dışında ve ekstraselüler boşlukta katekolamin inaktivasyonundan sorumlu primer enzim Katekol-O-Metil Transferaz (COMT)'tır.

---

### ÇİFT 24 (Benzerlik: 0.83)

**Soru 1 (ID: 14d7ccc5-820b-4341-b09d-00e2e72c179c)**
Soru Kökü: Beyin-omurilik sıvısı (BOS) ve kan plazması elektrolit düzeyleri incelendiğinde, aşağıdakilerden hangisinin BOS konsantrasyonu kandaki seviyesinden daha yüksek **değildir**?
Doğru Şık (D): Potasyum
Açıklama: Beyin-omurilik sıvısında (BOS) magnezyum, klorür, kreatinin ve pCO2 seviyeleri kan plazmasından daha yüksektir. Ancak potasyum, kalsiyum, glukoz, aminoasitler, kolesterol ve protein düzeyleri kanda BOS'a göre daha yüksektir. Bu iyonik fark, merkezi sinir sistemindeki nöronların elektriksel uyarılabilirliğini korumak için sağlanan spesifik bir gradiyenttir.

**Soru 2 (ID: 20e95d8a-5941-4e54-b2f9-eef42d01229b)**
Soru Kökü: Beyin-omurilik sıvısı (BOS) ile kan plazmasının biyokimyasal içeriği karşılaştırıldığında aşağıdaki ifadelerden hangisi **yanlıştır**?
Doğru Şık (E): BOS glukoz ve protein seviyeleri kan plazmasındaki seviyelere eşittir.
Açıklama: Beyin-omurilik sıvısındaki (BOS) glukoz, aminoasitler, kolesterol ve protein konsantrasyonları kan plazmasına göre belirgin şekilde daha düşüktür. BOS ve kan arasında bikarbonat, sodyum ve total osmolarite birbirine yaklaşık olarak eşitken; BOS klor ve magnezyum düzeyleri kandan daha yüksektir. Bu asimetrik iyon ve metabolit dağılımı koroid pleksustaki seçici taşıyıcı sistemler aracılığıyla sürdürülür.

---

### ÇİFT 25 (Benzerlik: 0.82)

**Soru 1 (ID: 01f93e45-68a7-428d-adf4-b66c81406012)**
Soru Kökü: 45 yaşında kadın hasta, yüzündeki mimik kırışıklıklarının tedavisi için kliniğe başvuruyor ve lokal botulinum toksin tip A (Botoks) enjeksiyonu uygulanıyor. Bu toksinin hedeflenen kaslarda flaks paralizi ve gevşeme oluşturmasını sağlayan etki mekanizması aşağıdakilerden hangisidir?
Doğru Şık (D): SNAP-25 proteinini bloke ederek veziküllerden asetilkolin ekzositozunu engellemesi
Açıklama: Botulinum toksinleri sinir-kas kavşağında presinaptik uçta bulunan SNARE kompleks proteinlerini parçalayarak asetilkolin salınımını engeller; tip A ve E spesifik olarak SNAP-25'i bloke eder. Bu ekzositoz bloğu kas hücresine uyarı gitmesini engelleyerek istenilen flaks paralizi (gevşek felç) tablosunu oluşturur. İnhibitör ara nöronlarda glisin salınımını durduran ve spastik felce neden olan etken ise tetanoz toksinidir.

**Soru 2 (ID: 8a193d89-ee3e-4947-ab06-0bc2cd7d9d79)**
Soru Kökü: 40 yaşında kadın hasta, özofagusta yutma zorluğu yaratan akalazya hastalığı nedeniyle gastroenteroloji kliniğine başvuruyor. Endoskopik olarak alt özofagus sfinkterine Botulinum toksini (Botoks) enjeksiyonu planlanıyor. Bu tedavinin sfinkteri gevşetmesini sağlayan mekanizma aşağıdakilerden hangisidir?
Doğru Şık (A): SNARE kompleks proteinlerini (SNAP-25/Sinaptobrevin) parçalayarak asetilkolin ekzositozunu engellemesi
Açıklama: Botulinum toksini, sinir uçlarına spesifik olarak girip SNARE kompleksindeki proteinleri (SNAP-25 veya sinaptobrevin) yıkar. Bu yıkım, asetilkolin dolu veziküllerin membrana füzyonunu durdurur. Nörotransmitter salınamayınca hedef kas uyarılamaz ve flaks (gevşek) paralizi oluşur, bu da akalazya veya kas spazmı tedavisinde kullanılır.

---

### ÇİFT 26 (Benzerlik: 0.82)

**Soru 1 (ID: ae79a7a9-7686-437a-8934-5644537c9607)**
Soru Kökü: Yakındaki bir objeye odaklanmak için gözün optik kırıcı gücünün artırıldığı akomodasyon refleksi sırasında gerçekleşen nöromekanik olayların anatomik zinciri aşağıdaki seçeneklerin hangisinde doğru sıra ile verilmiştir?
Doğru Şık (A): M. siliaris kasılır -> Zonula liflerinin gerginliği azalır -> Lensin ön-arka çapı ve kalınlığı artar
Açıklama: Göz yakındaki bir objeye odaklandığında, parasempatik uyarım M. siliaris kasının sirküler liflerini kasarak silyer cismin korneaya doğru ilerlemesini sağlar. Bu pozisyon değişikliği, istirahat halindeyken merceği gergin tutan asıcı bağların (zonula liflerinin) gevşemesine neden olur. Gerilimi ortadan kalkan lens, kapsülünün kendi doğal elastikiyetinden dolayı şişkinleşerek (kalınlaşarak) kırma gücünü foveaya düşecek şekilde artırır.

**Soru 2 (ID: f11f1a92-476e-4ab3-a23f-12ab80cfebd5)**
Soru Kökü: Okuma sırasında yakına odaklanan bir bireyde net görüşü sağlamak için devreye giren akomodasyon mekanizmasının reseptör-efektör ilişkisi aşağıdakilerden hangisinde doğru sıralanmıştır?
Doğru Şık (B): M. siliaris kasılır, zonula lifleri gevşer.
Açıklama: Yakına odaklanma (akomodasyon) sırasında parasempatik uyarıyla M. siliaris kasılarak siliyer halkayı merkeze doğru daraltır, bu daralma lense asılı olan zonula liflerinin üzerindeki gerilimi ortadan kaldırır. Zonula liflerinin gevşemesiyle serbest kalan lens kendi doğal elastikiyeti sayesinde küreselleşir, ön-arka çapı artarak kırıcılığı (+ diyoptrisi) yükselir. En yaygın yanılgı siliyer kasın kasılmasıyla bağların da gerileceğinin sanılmasıdır; anatomik olarak bu mekanizma ters çalışır.

---

### ÇİFT 27 (Benzerlik: 0.80)

**Soru 1 (ID: 7ef9bbbc-e520-4e13-a968-57fe098a52e9)**
Soru Kökü: Aşağıdakilerden hangisi koku duyusunun (Olfaksiyon) burun mukozasından kortikal seviyeye iletimi sırasındaki hücresel fizyoloji mekanizmaları açısından **yanlıştır**?
Doğru Şık (C): Doğadaki her özgün kimyasal koku molekülüne karşılık gelen spesifik, tek tip bir reseptör hücre grubu bulunur.
Açıklama: Koku reseptör sisteminde her bir spesifik koku molekülüne (örneğin kahve veya gül) ait izole, tekil reseptör tipleri bulunmaz. Birçok koku hücresi birbirinden farklı koku molekülleri ile uyarılabilir, kortikal koku algısı bu reseptör ağlarının çapraz elektriksel uyarılma paternlerinin (kombinasyonlarının) beyinde analiz edilmesiyle gerçekleşir. 'Kokulara özel spesifik reseptör yoktur' temel kuraldır.

**Soru 2 (ID: 97012ef6-3ac6-4b60-ad81-dad59bf453c9)**
Soru Kökü: Koku duyusunun hücresel ve reseptör fizyolojisi ile ilgili aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (C): Her spesifik koku çeşidi için özel olarak farklılaşmış sadece o kokuyu algılayan tekil reseptör tipleri bulunur.
Açıklama: Koku reseptör hücreleri spesifik olarak sadece tek bir moleküle değil, farklı kokulara yanıt verebilen çoklu reaktivite gösterir; yani her koku için özel bir reseptör yoktur. Koku molekülü bağlandığında G proteini aktive olur, artan hücre içi cAMP ile Na+/Ca++ kanalları açılarak membran depolarizasyonu başlar. Ayrıca bu reseptörler, insanda mitozla çoğalabilen nadir nöron popülasyonlarındandır.

---

### ÇİFT 28 (Benzerlik: 0.80)

**Soru 1 (ID: 5fb96d34-e18b-4590-923e-1b368aaac5e8)**
Soru Kökü: Sempatik nöronların ve adrenal medullanın temel ürünleri olan katekolaminlerin sentez süreci sitoplazmada başlayıp vezikül içinde devam eden aşamalardan oluşur. Bu reaksiyon zincirinde genel üretim hızını belirleyen (hız kısıtlayıcı) basamakta görev yapan enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Tirozin hidroksilaz
Açıklama: Katekolamin sentezinin ilk basamağında tirozin amino asidi, tirozin hidroksilaz enzimi aracılığıyla DOPA'ya (dihidroksifenil alanin) çevrilir. Bu basamak reaksiyonun en yavaş işleyen kısmıdır ve sentezin hız kısıtlayıcı aşamasını oluşturur. Oksijen ve tetrahidrobiyopterin kofaktör olarak kullanılır.

**Soru 2 (ID: 8518b624-4b13-487c-8477-c036642e0403)**
Soru Kökü: Katekolaminlerin (dopamin, nörepinefrin, epinefrin) biyosentezi sırasında hız kısıtlayıcı basamağı katalizleyen enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Tirozin hidroksilaz
Açıklama: Katekolaminlerin sentezi tirozin amino asidi ile başlar ve tirozini DOPA'ya (dihidroksifenilalanin) dönüştüren tirozin hidroksilaz enzimi reaksiyon zincirinin hız kısıtlayıcı (en yavaş ve regüle edilen) basamağıdır. Daha sonra sırasıyla DOPA-dekarboksilaz ile dopamin, dopamin-β-hidroksilaz ile nörepinefrin oluşur. COMT ise sentezde değil, katekolaminlerin yıkımında görev alan bir enzimdir.

---

### ÇİFT 29 (Benzerlik: 0.79)

**Soru 1 (ID: 0fc36a42-054a-4996-ab0d-84e82f8e7122)**
Soru Kökü: Besinlerin asidik içeriğinin algılanmasını sağlayan 'ekşi' tat duyusunun kemotransdüksiyon mekanizması aşağıdakilerden hangisine dayanır?
Doğru Şık (B): H+ iyonlarının ENaC ve HCN kanallarından hücreye girerek K+ kanallarını kapatması
Açıklama: Ekşi tat duyusu ortama salınan H+ (hidrojen) iyonları tarafından oluşturulur. Bu iyonlar ENaC (amilorid duyarlı epitelyal Na+ kanalı) ve HCN (hiperpolarizasyonla aktive olan siklik nükleotid kapılı kanal) kanalları aracılığıyla hücre içine girer ve potasyum (K+) sızıntı kanallarını bloke ederek depolarizasyona yol açar. Gustducin tatlı ve acı yollarında çalışır.

**Soru 2 (ID: 3510fcd2-f61a-416a-a343-25821d9f036a)**
Soru Kökü: Yirmi iki yaşındaki öğrenci yoğun asitli bir gıda tükettiğinde, dilinin epitelinde güçlü bir ekşi tat algısı oluşuyor ve kortekse eylem potansiyelleri tetikleniyor. Bu tat uyaranının hücre membranında reseptör potansiyeli yaratmasını sağlayan spesifik transdüksiyon mekanizması aşağıdakilerden hangisidir?
Doğru Şık (B): Hidrojen iyonlarının kanallardan geçerek bazal potasyum sızıntı kanallarını bloke etmesi
Açıklama: Ekşi tat duyusu, asidik gıdaların serbest bıraktığı yoğun Hidrojen (H+) protonları tarafından tetiklenir. Bu hidrojen iyonları ENaC ve HCN katyon kanallarından içeri sızarak hücre membranındaki potasyum kanallarını bloke eder. Potasyumun dışarı çıkamaması pozitif yükün hücrede hapis kalmasını sağlar ve nörotransmitter salınımı için gereken depolarizasyonu başlatır; T1R kaskadı tatlı için, gustducin aracılı kaskad ise acı/tatlı içindir.

---

### ÇİFT 30 (Benzerlik: 0.79)

**Soru 1 (ID: 41be8aa7-bd57-4118-8ba1-246bf2e15b79)**
Soru Kökü: Katekolamin sentez yolağı belirli basamaklar dahilinde ilerleyerek tirozin aminoasidinden epinefrin üretimiyle sonuçlanır. Adrenerjik sinapslarda gerçekleşen bu reaksiyon zincirinde tüm yolak için **hız kısıtlayıcı** enzimi temsil eden seçenek aşağıdakilerden hangisidir?
Doğru Şık (D): Tirozin hidroksilaz
Açıklama: Katekolamin sentezindeki ana hız kısıtlayıcı basamak tirozinin DOPA'ya dönüşümünü katalizleyen Tirozin Hidroksilaz enzimidir. Dopamin-beta-hidroksilaz vezikül içerisinde etkilidir ve noradrenalin sentezler; PNMT ise sitoplazmada adrenal medullada epinefrin üretimini sağlar.

**Soru 2 (ID: 8518b624-4b13-487c-8477-c036642e0403)**
Soru Kökü: Katekolaminlerin (dopamin, nörepinefrin, epinefrin) biyosentezi sırasında hız kısıtlayıcı basamağı katalizleyen enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Tirozin hidroksilaz
Açıklama: Katekolaminlerin sentezi tirozin amino asidi ile başlar ve tirozini DOPA'ya (dihidroksifenilalanin) dönüştüren tirozin hidroksilaz enzimi reaksiyon zincirinin hız kısıtlayıcı (en yavaş ve regüle edilen) basamağıdır. Daha sonra sırasıyla DOPA-dekarboksilaz ile dopamin, dopamin-β-hidroksilaz ile nörepinefrin oluşur. COMT ise sentezde değil, katekolaminlerin yıkımında görev alan bir enzimdir.

---

### ÇİFT 31 (Benzerlik: 0.79)

**Soru 1 (ID: 3e32580a-3ecb-4eaa-b74a-d6a27b974994)**
Soru Kökü: Retinaya ışık düştüğünde reseptör hücrelerinde meydana gelen biyokimyasal olaylar dizisinde aşağıdakilerden hangisi doğrudan gözlenir?
Doğru Şık (A): 11-cis-retinalin fotoizomerize olarak all-trans-retinal formuna dönüşmesi
Açıklama: Işık retinaya düştüğünde rodopsinin yapısında bulunan 11-cis-retinal enerji absorbe ederek all-trans-retinal formuna izomerize olur. Bu konformasyon değişikliği G-proteini olan transdusini uyarır, fosfodiesteraz enzimi aracılığıyla hücre içi cGMP'yi azaltır ve cGMP-kapılı sodyum kanallarını kapatır. Sodyum girişinin durmasıyla hücre hiperpolarize olur ve karanlıkta devam eden transmitter salınımı inhibe edilir.

**Soru 2 (ID: 761742dd-9612-407b-b459-a134a7a59154)**
Soru Kökü: Aşağıdakilerden hangisi retinada ışığın algılanması sürecinde (fototransdüksiyon kaskadı) meydana gelen fizyolojik olaylardan biri **değildir**?
Doğru Şık (D): Sodyum kanallarının açılarak hücrede güçlü bir depolarizasyon dalgası oluşturması
Açıklama: Işık uyarısı fotoreseptörlerde sodyum kanallarının açılmasına değil, aksine cGMP miktarının düşmesi sonucu cGMP-bağımlı Na+ kanallarının kapanmasına neden olur. İç segmentteki Na-K pompası sodyumu atmaya devam ettiği için hücre hiperpolarize (-70 mV) olur ve karanlıkta sürekli salınan inhibitör glutamat salınımı kesilir. Bu benzersiz sinyal transdüksiyonunda nöronun ışığa yanıtı uyarılma değil, susturulma şeklindedir.

---

### ÇİFT 32 (Benzerlik: 0.79)

**Soru 1 (ID: e0b44d08-86a1-4f50-b1d8-b39a384b404c)**
Soru Kökü: Tetanoz toksininin santral sinir sisteminde spastik paralizi oluşturmasına neden olan hücresel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (B): Retrograd taşınarak omurilikteki inhibitör ara nöronlardan GABA ve glisin salınımını bloke etmesi
Açıklama: Tetanoz toksini motor nöron aksonlarından retrograd yolla omuriliğe taşınır ve burada Renshaw hücreleri gibi inhibitör ara nöronlara girer. Bu nöronlarda sinaptobrevin proteinini parçalayarak GABA ve glisin salınımını engeller. İnhibisyon ortadan kalktığı için motor nöronlar aşırı uyarılır ve tetanik (spastik) kasılmalar ortaya çıkar.

**Soru 2 (ID: e33b56f1-99ca-4600-8ea2-b75ceaa56f9f)**
Soru Kökü: Otuz beş yaşındaki inşaat işçisi, ayağına paslı çivi batmasından birkaç gün sonra çenesinde kilitlenme (trismus) ve tüm vücudunda şiddetli tonik spazmlar (spastik paralizi) gelişerek acile getiriliyor. Tetanoz enfeksiyonu saptanan bu hastadaki aşırı kasılmaların hücresel etyolojisi aşağıdakilerden hangisidir?
Doğru Şık (B): Spinal korddaki inhibitör ara nöronlardan GABA ve glisin salınımının engellenmesi
Açıklama: Tetanoz toksini nöromusküler kavşaktan presinaptik terminale girer, retrograd taşınma ile spinal korda (motor nöron somasına) ulaşır ve burada inhibitör ara nöronların (Renshaw hücreleri vb.) salgıladığı inhibitör nörotransmitterlerin (GABA ve Glisin) ekzositozunu bloke eder. İnhibitör kontrol kalkan motor nöronlar aşırı ateşleme yaparak spastik paraliziye (tetani) yol açarlar.

---

### ÇİFT 33 (Benzerlik: 0.78)

**Soru 1 (ID: 91573aa0-5c49-4688-851a-f06cf8185ec2)**
Soru Kökü: I. Göz irisi radial kasında alfa-1 reseptör aracılı midriyazis
II. Kalp sinoatriyal düğümde beta-1 reseptör aracılı hız artışı
III. Karaciğerde alfa-1 ve beta-2 reseptör aracılı glikojenolizis

Yukarıda verilen reseptör ve organ yanıtı eşleşmelerinden hangileri sempatik sistem stimülasyonuna ait doğru fizyolojik etkilerdir?
Doğru Şık (E): I, II ve III
Açıklama: Sempatik sinir sistemi aktivasyonu 'savaş veya kaç' yanıtını oluşturur. Bu kapsamda gözde radial kas kasılarak göz bebeği büyür (alfa-1, midriyazis). Kalpte SA düğüm uyarılır ve atım hızı artar (beta-1, pozitif kronotrop). Kana glukoz sağlamak amacıyla karaciğerde glikojenin yıkımı uyarılır (alfa-1 ve beta-2, glikojenolizis). Verilen üç öncül de sempatik etkilere ait doğru eşleşmelerdir.

**Soru 2 (ID: f065ba67-75ee-4539-b024-f430ba056ea6)**
Soru Kökü: Sempatik sinir sisteminde Beta (β) adrenerjik reseptörlerin uyarılmasıyla vücutta çeşitli organlarda metabolik ve dinamik değişiklikler meydana gelir. Bu uyarının sonuçları arasında;
I. Pankreas adacık hücrelerinden insülin ve glukagon salınımının artması
II. Bronşiyal düz kasta gevşeme (bronkodilatasyon)
III. Kalbin atım sayısında (kronotropik) ve kasılma gücünde (inotropik) artış
etkilerinden hangileri gözlenir?
Doğru Şık (E): I, II ve III
Açıklama: Sempatik sistemde Beta uyarısı pankreasta insülin ve glukagonu artırırken (Alfa uyarısı ikisini de azaltır), solunum yollarında Beta-2 uyarısı gevşeme yapar. Kalpte ise Beta-1 uyarısı SA nodda (+) kronotrop ve ventrikülde (+) inotrop etki oluşturur. Üç etki de sempatik Beta uyarısının klasik mekanizmalarıdır.

---

### ÇİFT 34 (Benzerlik: 0.78)

**Soru 1 (ID: 7ef9bbbc-e520-4e13-a968-57fe098a52e9)**
Soru Kökü: Aşağıdakilerden hangisi koku duyusunun (Olfaksiyon) burun mukozasından kortikal seviyeye iletimi sırasındaki hücresel fizyoloji mekanizmaları açısından **yanlıştır**?
Doğru Şık (C): Doğadaki her özgün kimyasal koku molekülüne karşılık gelen spesifik, tek tip bir reseptör hücre grubu bulunur.
Açıklama: Koku reseptör sisteminde her bir spesifik koku molekülüne (örneğin kahve veya gül) ait izole, tekil reseptör tipleri bulunmaz. Birçok koku hücresi birbirinden farklı koku molekülleri ile uyarılabilir, kortikal koku algısı bu reseptör ağlarının çapraz elektriksel uyarılma paternlerinin (kombinasyonlarının) beyinde analiz edilmesiyle gerçekleşir. 'Kokulara özel spesifik reseptör yoktur' temel kuraldır.

**Soru 2 (ID: 8fcc3823-22d1-451c-a3ca-413e4309be9e)**
Soru Kökü: Koku duyusunun hücresel ve moleküler mekanizmaları ile ilgili aşağıda verilen ifadelerden hangisi **yanlıştır**?
Doğru Şık (D): Doğadaki her bir koku molekülü için spesifik, tek tip bir reseptör hücresi bulunur
Açıklama: Koku sisteminde 'kokulara özel reseptör hücresi yoktur'. Bipolar koku nöronları birden fazla koku molekülüne yanıt verebilir ve algılanan spesifik koku, aktive olan reseptör popülasyonlarının beyindeki kombinatoryal şifrelenmesiyle (pattern recognition) belirlenir. Bu hücrelerin mitozla bölünebilen nadir nöronlardan olması da klinik yenilenme açısından kritiktir.

---

### ÇİFT 35 (Benzerlik: 0.78)

**Soru 1 (ID: 3e6b7859-a918-4c93-b024-87536fd6be59)**
Soru Kökü: Koku duyusu epitelinde, koku veren maddenin G proteinine bağlanması sonrası reseptör potansiyelini (depolarizasyon) başlatan primer moleküler olay dizisi aşağıdakilerden hangisidir?
Doğru Şık (A): İntraselüler cAMP artışına bağlı Na+/Ca+2 kanallarının açılması
Açıklama: Koku transdüksiyon kaskadında; koku molekülü G proteinini aktive eder, adenilat siklaz uyarılır ve hücre içi cAMP artar. Bu ikincil haberci artışı membran üzerindeki Na+ ve Ca+2 kanallarını açarak depolarizasyona neden olur. IP3 artışı acı ve tatlı duyusunda, cGMP yıkımı görmede, mekanik bükülme ise işitmede aktif olan mekanizmalardır.

**Soru 2 (ID: b32e2433-96f1-4a35-bb57-cb8065a2de73)**
Soru Kökü: Koku molekülleri koku epiteli mukusunda çözünüp bipolar reseptör nöronların dendritlerindeki reseptörlere bağlandığında başlayan hücresel sinyal yolağında, depolarizasyonu tetikleyecek sodyum ve kalsiyum iyon kanallarının açılmasını sağlayan molekül aşağıdakilerden hangisidir?
Doğru Şık (A): İntraselüler siklik AMP (cAMP)
Açıklama: Koku nöronlarının membranı üzerinde yer alan reseptörlere koku maddesi bağlandığında özgül bir olfaktör G proteini aktifleşir. Bu G proteini doğrudan adenilat siklaz enzimini uyararak hücre içi ATP'den cAMP üretimini hızlandırır. Sentezlenen cAMP, koku reseptör hücresindeki katyon kanallarını açarak içeriye sodyum ve kalsiyum girmesini sağlar, böylece nöronda jeneratör potansiyel (depolarizasyon) oluşturulur.

---

### ÇİFT 36 (Benzerlik: 0.78)

**Soru 1 (ID: 4aee0218-94ed-40cc-8270-c547a56477dd)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, son aylarda gazete okurken yazıları uzaklaştırma ihtiyacı hissettiğini belirterek kliniğe başvuruyor. Muayenede presbiyopi saptanıyor. Bu fizyopatolojik sürecin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Lensin elastikiyetini yitirmesine bağlı dinamik kırıcılık gücünün azalması
Açıklama: Yaşa bağlı gelişen presbiyopi, lens dokusunun zamanla sertleşerek doğal elastikiyetini yitirmesi sonucu akomodasyon (kalınlaşarak kırıcılığı artırma) yeteneğinin kalıcı olarak azalmasıdır. Göz küresinin ön-arka çapının uzaması eksenel miyopinin, korneanın farklı asimetrik kırıcılığı ise astigmatizmanın mekanizmasıdır. Bu yaşa bağlı dokusal skleroz, dinamik kırılmanın bozulmasına yol açarak sadece yakın görüşü bozar.

**Soru 2 (ID: f014ee8d-5ac5-4e66-b653-9964d153cb83)**
Soru Kökü: 55 yaşındaki kadın hasta, okuma sırasında kitabı eskisinden daha uzak bir mesafede tutma ihtiyacı hissettiğini belirtiyor. Uzağı görmesinde problem olmayan bu hastada yakını görme bozukluğunun altında yatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Lensin yaşa bağlı olarak elastikiyetini kaybetmesi
Açıklama: Presbiyopi, yaşlanmaya bağlı olarak lensin doğal elastikiyetini yitirmesi sonucu akomodasyon (dinamik kırılma) kapasitesinin azalması durumudur. Göz küresinin uzun olması miyopiye, siliar kasın aşırı kasılması hipermetropideki kompanzasyon mekanizmasına aittir. Lensin esnekliğini kaybetmesi, siliar kas kasılsa dahi lensin yeterince bombeliğini artıramamasına ve yakının net görülememesine yol açar.

---

### ÇİFT 37 (Benzerlik: 0.77)

**Soru 1 (ID: 6c779f7f-0097-4470-8767-ea9220937c99)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

**Soru 2 (ID: e75a49d7-46b7-4764-86de-7cb2a3245781)**
Soru Kökü: Fotoreseptörlerde ışığın kimyasal sinyale dönüştürülmesi kaskadında, metarodopsin II'nin uyardığı transdusin adlı G proteininin aktive olmasıyla gerçekleşen doğrudan intraselüler mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Hücre içi cGMP miktarının azalması
Açıklama: Transdusin aktivasyonu, hücre içindeki fosfodiesteraz enzimini aktive eder ve bu enzim cGMP'yi 5'-GMP'ye yıkarak hücre içi cGMP miktarını hızla azaltır. cGMP miktarındaki bu düşüş, sodyum kanallarının kapanmasına neden olarak hiperpolarizasyon yaratır; diğer şıklardaki kalsiyum girişi veya IP3 artışı farklı duyu kaskadlarının (ör. tat, koku) mekanizmalarıdır. Görme transdüksiyonunun temeli 'cGMP yıkımı'dır.

---

### ÇİFT 38 (Benzerlik: 0.77)

**Soru 1 (ID: 89f1c92b-d74e-4481-bcef-f5ae3cacb0ed)**
Soru Kökü: Tat reseptörlerinde 'acı' duyusunun algılanmasında, strikinin gibi moleküllerin T2R reseptörünü uyardıktan sonra hücre içi sinyal iletiminde gerçekleştirdiği temel modülasyon aşağıdakilerden hangisidir?
Doğru Şık (C): IP3 miktarını artırarak hücre zarındaki K+ kanallarını bloke etmesi
Açıklama: Acı tat mekanizmasında, moleküller gustducin ilişkili T2R reseptörlerine bağlanır, bu da intraselüler IP3 (İnozitol trifosfat) ve Ca+2 miktarını artırır. IP3 artışı potasyum (K+) kanallarını selektif olarak bloke eder, potasyum dışarı çıkamadığı için hücre depolarize olur. ENaC sodyum (tuzlu), HCN ise hidrojen (ekşi) kanallarıdır.

**Soru 2 (ID: b70fcbe1-17c0-4f1a-ba3c-8042e23c4ff2)**
Soru Kökü: Bazı toksik alkaloid moleküllerin dildeki T2R reseptörlerine bağlanması sonucu oluşan acı tat uyarısı, hücrede silsilevi bir biyokimyasal reaksiyon başlatır. Bu reaksiyonda G-proteini aktivasyonunu izleyen moleküler ikincil mesajcı olayı aşağıdakilerden hangisidir?
Doğru Şık (B): Gustducin ilişkili sinyalin hücre içi IP3 miktarını artırarak kalsiyum salınımını tetiklemesi
Açıklama: Striknin veya kinin gibi acı tat duyusunu oluşturan maddeler, G-proteini 'gustducin' ile kenetli hücre zarı T2R reseptörlerini aktive eder. Gustducin'in ayrışmasıyla aktive olan intraselüler yolda Inositol Trifosfat (IP3) seviyesi artar. IP3, endoplazmik retikulumdan hücre içi kalsiyumu serbest bırakarak potasyum kanallarını bloke eder ve tat impulsunu başlatacak nörotransmitterin sinaps boşluğuna dökülmesini sağlar.

---

### ÇİFT 39 (Benzerlik: 0.77)

**Soru 1 (ID: 3ccf8a23-13ec-4219-a12e-0efb50b7c04b)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

**Soru 2 (ID: e75a49d7-46b7-4764-86de-7cb2a3245781)**
Soru Kökü: Fotoreseptörlerde ışığın kimyasal sinyale dönüştürülmesi kaskadında, metarodopsin II'nin uyardığı transdusin adlı G proteininin aktive olmasıyla gerçekleşen doğrudan intraselüler mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Hücre içi cGMP miktarının azalması
Açıklama: Transdusin aktivasyonu, hücre içindeki fosfodiesteraz enzimini aktive eder ve bu enzim cGMP'yi 5'-GMP'ye yıkarak hücre içi cGMP miktarını hızla azaltır. cGMP miktarındaki bu düşüş, sodyum kanallarının kapanmasına neden olarak hiperpolarizasyon yaratır; diğer şıklardaki kalsiyum girişi veya IP3 artışı farklı duyu kaskadlarının (ör. tat, koku) mekanizmalarıdır. Görme transdüksiyonunun temeli 'cGMP yıkımı'dır.

---

### ÇİFT 40 (Benzerlik: 0.77)

**Soru 1 (ID: ae79a7a9-7686-437a-8934-5644537c9607)**
Soru Kökü: Yakındaki bir objeye odaklanmak için gözün optik kırıcı gücünün artırıldığı akomodasyon refleksi sırasında gerçekleşen nöromekanik olayların anatomik zinciri aşağıdaki seçeneklerin hangisinde doğru sıra ile verilmiştir?
Doğru Şık (A): M. siliaris kasılır -> Zonula liflerinin gerginliği azalır -> Lensin ön-arka çapı ve kalınlığı artar
Açıklama: Göz yakındaki bir objeye odaklandığında, parasempatik uyarım M. siliaris kasının sirküler liflerini kasarak silyer cismin korneaya doğru ilerlemesini sağlar. Bu pozisyon değişikliği, istirahat halindeyken merceği gergin tutan asıcı bağların (zonula liflerinin) gevşemesine neden olur. Gerilimi ortadan kalkan lens, kapsülünün kendi doğal elastikiyetinden dolayı şişkinleşerek (kalınlaşarak) kırma gücünü foveaya düşecek şekilde artırır.

**Soru 2 (ID: c557ae58-937c-4315-bfda-0ceb767c7b7c)**
Soru Kökü: Bir kişinin uzağa bakarken aniden yakındaki bir objeye odaklanması sürecinde (akomodasyon) gerçekleşen fizyolojik değişim aşağıdakilerden hangisidir?
Doğru Şık (E): Zonula liflerinin gerginliğinin azalması
Açıklama: Akomodasyon sırasında M. siliaris kasılır, bu kasılma lense tutunan zonula liflerinin gerginliğini azaltır ve elastik lensin ön-arka çapı artarak bombeliği/kırıcılığı yükselir. M. siliaris'in kasılması ile zonula liflerinin gerilmesi karıştırılan bir mekanizmadır; kas kasıldığında sfinkterik etkiyle lens üzerindeki çekme kuvvetini gevşetir. Bu durum dinamik kırılmanın temel biyofiziksel sürecidir.

---

### ÇİFT 41 (Benzerlik: 0.77)

**Soru 1 (ID: 41be8aa7-bd57-4118-8ba1-246bf2e15b79)**
Soru Kökü: Katekolamin sentez yolağı belirli basamaklar dahilinde ilerleyerek tirozin aminoasidinden epinefrin üretimiyle sonuçlanır. Adrenerjik sinapslarda gerçekleşen bu reaksiyon zincirinde tüm yolak için **hız kısıtlayıcı** enzimi temsil eden seçenek aşağıdakilerden hangisidir?
Doğru Şık (D): Tirozin hidroksilaz
Açıklama: Katekolamin sentezindeki ana hız kısıtlayıcı basamak tirozinin DOPA'ya dönüşümünü katalizleyen Tirozin Hidroksilaz enzimidir. Dopamin-beta-hidroksilaz vezikül içerisinde etkilidir ve noradrenalin sentezler; PNMT ise sitoplazmada adrenal medullada epinefrin üretimini sağlar.

**Soru 2 (ID: 5fb96d34-e18b-4590-923e-1b368aaac5e8)**
Soru Kökü: Sempatik nöronların ve adrenal medullanın temel ürünleri olan katekolaminlerin sentez süreci sitoplazmada başlayıp vezikül içinde devam eden aşamalardan oluşur. Bu reaksiyon zincirinde genel üretim hızını belirleyen (hız kısıtlayıcı) basamakta görev yapan enzim aşağıdakilerden hangisidir?
Doğru Şık (A): Tirozin hidroksilaz
Açıklama: Katekolamin sentezinin ilk basamağında tirozin amino asidi, tirozin hidroksilaz enzimi aracılığıyla DOPA'ya (dihidroksifenil alanin) çevrilir. Bu basamak reaksiyonun en yavaş işleyen kısmıdır ve sentezin hız kısıtlayıcı aşamasını oluşturur. Oksijen ve tetrahidrobiyopterin kofaktör olarak kullanılır.

---

### ÇİFT 42 (Benzerlik: 0.77)

**Soru 1 (ID: 0b879c12-d0bd-4fd2-a26e-c4f31caa7177)**
Soru Kökü: Rutin bir oftalmoskopik göz dibi muayenesinde göze giren arterlerin ve çıkan venlerin retinayı delerek geçtiği, aynı zamanda ganglion hücre aksonlarının gözü terk ettiği dairesel alan izlenmektedir. Tam bu alan üzerine düşen ışık ışınlarının algılanamamasının ('kör nokta' oluşmasının) histolojik nedeni nedir?
Doğru Şık (C): Bu lokalizasyonda basil veya koni fotoreseptör hücrelerinin anatomik olarak hiç bulunmaması
Açıklama: Optik disk (Papilla nervi optici), retinada yer alan tüm gangliyon hücre aksonlarının birleşerek optik siniri oluşturduğu ve vasküler yapıların göz küresini terk ettiği anatomik çıkış noktasıdır. Bu bölgede histolojik olarak ne basil ne de koni fotoreseptörü bulunur; ışığı elektriksel sinyale dönüştürecek reseptör olmadığı için buraya düşen görüntüler algılanamaz ve 'kör nokta' olarak adlandırılır.

**Soru 2 (ID: da3e442c-2f07-4ca5-a76f-a6bed7129df9)**
Soru Kökü: Göz dibi muayenesinde optik disk (papilla nervi optici) bölgesi anatomik ve fonksiyonel olarak incelenmektedir. Çevresel retinanın aksine bu bölgenin ışığı algılayamaması ve 'kör nokta' oluşturmasının temel hücresel gerekçesi aşağıdakilerden hangisidir?
Doğru Şık (D): Bölgenin tamamen ganglion hücre aksonları ve santral damarlardan oluşup koni/basil içermemesi
Açıklama: Papilla nervi optici (optik disk), retinadaki tüm ganglion hücrelerinin şeffaf aksonlarının birleşerek optik siniri (N. opticus) oluşturduğu ve göz küresini terk ettiği yegane fizyolojik geçiş kapısıdır. Anatomik olarak burası saf sinir teli ve santral damarlardan ibaret olup, ışığı elektriğe dönüştüren koni ve basil hücrelerini kesinlikle içermediği için üzerine düşen ışık algılanamaz (kör nokta).

---

### ÇİFT 43 (Benzerlik: 0.76)

**Soru 1 (ID: 69902259-bf67-417f-9be5-306058887706)**
Soru Kökü: Nöronlarda aksiyon potansiyelini takip eden refrakter periyotlar ile ilgili olarak aşağıdakilerden hangisi **yanlıştır**?
Doğru Şık (D): Mutlak refrakter periyodun temel mekanizması voltaj kapılı potasyum kanallarının yavaş kapanmasıdır.
Açıklama: Mutlak refrakter periyodun sebebi potasyum kanallarının durumu değil, voltaj kapılı sodyum kanallarının inaktivasyon kapılarının kapanmasıdır. Bu inaktivasyon kapıları, membran potansiyeli istirahat değerine veya ona çok yakın bir değere dönünceye kadar açılmaz ve hücre uyarılamaz. Voltaj bağımlı potasyum kanallarının yavaş kapanması ise hiperpolarizasyondan sorumludur.

**Soru 2 (ID: f813df6a-e297-43fa-a7c9-fd9f07e124a7)**
Soru Kökü: Aksiyon potansiyeli döngüsü sırasında, nöronun ne kadar güçlü bir uyaran verilirse verilsin yeni bir aksiyon potansiyeli oluşturamayacağı yaklaşık 1 milisaniyelik bir zaman dilimi bulunur. 'Mutlak (absolü) refrakter periyot' olarak adlandırılan bu sürecin temel hücresel nedeni aşağıdakilerden hangisidir?
Doğru Şık (D): Voltaj kapılı sodyum kanallarının inaktivasyon kapılarının kapalı pozisyonda kilitlenmesi
Açıklama: Aksiyon potansiyelinin pik yapmasıyla birlikte voltaj kapılı sodyum kanallarının 'inaktivasyon kapıları' kapanır. Bu kapılar, hücrenin membran potansiyeli repolarize olup istirahat (dinlenim) veya ona yakın bir değere dönünceye kadar tekrar açılmaz. Bu yapısal kilitlenme durumu nedeniyle hücre bu evrede hiçbir uyarıyı kabul edemez; bu sürece mutlak (absolü) refrakter periyot denir.

---

### ÇİFT 44 (Benzerlik: 0.76)

**Soru 1 (ID: c557ae58-937c-4315-bfda-0ceb767c7b7c)**
Soru Kökü: Bir kişinin uzağa bakarken aniden yakındaki bir objeye odaklanması sürecinde (akomodasyon) gerçekleşen fizyolojik değişim aşağıdakilerden hangisidir?
Doğru Şık (E): Zonula liflerinin gerginliğinin azalması
Açıklama: Akomodasyon sırasında M. siliaris kasılır, bu kasılma lense tutunan zonula liflerinin gerginliğini azaltır ve elastik lensin ön-arka çapı artarak bombeliği/kırıcılığı yükselir. M. siliaris'in kasılması ile zonula liflerinin gerilmesi karıştırılan bir mekanizmadır; kas kasıldığında sfinkterik etkiyle lens üzerindeki çekme kuvvetini gevşetir. Bu durum dinamik kırılmanın temel biyofiziksel sürecidir.

**Soru 2 (ID: f11f1a92-476e-4ab3-a23f-12ab80cfebd5)**
Soru Kökü: Okuma sırasında yakına odaklanan bir bireyde net görüşü sağlamak için devreye giren akomodasyon mekanizmasının reseptör-efektör ilişkisi aşağıdakilerden hangisinde doğru sıralanmıştır?
Doğru Şık (B): M. siliaris kasılır, zonula lifleri gevşer.
Açıklama: Yakına odaklanma (akomodasyon) sırasında parasempatik uyarıyla M. siliaris kasılarak siliyer halkayı merkeze doğru daraltır, bu daralma lense asılı olan zonula liflerinin üzerindeki gerilimi ortadan kaldırır. Zonula liflerinin gevşemesiyle serbest kalan lens kendi doğal elastikiyeti sayesinde küreselleşir, ön-arka çapı artarak kırıcılığı (+ diyoptrisi) yükselir. En yaygın yanılgı siliyer kasın kasılmasıyla bağların da gerileceğinin sanılmasıdır; anatomik olarak bu mekanizma ters çalışır.

---

### ÇİFT 45 (Benzerlik: 0.76)

**Soru 1 (ID: 3ccf8a23-13ec-4219-a12e-0efb50b7c04b)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

**Soru 2 (ID: 3e32580a-3ecb-4eaa-b74a-d6a27b974994)**
Soru Kökü: Retinaya ışık düştüğünde reseptör hücrelerinde meydana gelen biyokimyasal olaylar dizisinde aşağıdakilerden hangisi doğrudan gözlenir?
Doğru Şık (A): 11-cis-retinalin fotoizomerize olarak all-trans-retinal formuna dönüşmesi
Açıklama: Işık retinaya düştüğünde rodopsinin yapısında bulunan 11-cis-retinal enerji absorbe ederek all-trans-retinal formuna izomerize olur. Bu konformasyon değişikliği G-proteini olan transdusini uyarır, fosfodiesteraz enzimi aracılığıyla hücre içi cGMP'yi azaltır ve cGMP-kapılı sodyum kanallarını kapatır. Sodyum girişinin durmasıyla hücre hiperpolarize olur ve karanlıkta devam eden transmitter salınımı inhibe edilir.

---

### ÇİFT 46 (Benzerlik: 0.76)

**Soru 1 (ID: 3e32580a-3ecb-4eaa-b74a-d6a27b974994)**
Soru Kökü: Retinaya ışık düştüğünde reseptör hücrelerinde meydana gelen biyokimyasal olaylar dizisinde aşağıdakilerden hangisi doğrudan gözlenir?
Doğru Şık (A): 11-cis-retinalin fotoizomerize olarak all-trans-retinal formuna dönüşmesi
Açıklama: Işık retinaya düştüğünde rodopsinin yapısında bulunan 11-cis-retinal enerji absorbe ederek all-trans-retinal formuna izomerize olur. Bu konformasyon değişikliği G-proteini olan transdusini uyarır, fosfodiesteraz enzimi aracılığıyla hücre içi cGMP'yi azaltır ve cGMP-kapılı sodyum kanallarını kapatır. Sodyum girişinin durmasıyla hücre hiperpolarize olur ve karanlıkta devam eden transmitter salınımı inhibe edilir.

**Soru 2 (ID: 6c779f7f-0097-4470-8767-ea9220937c99)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

---

### ÇİFT 47 (Benzerlik: 0.76)

**Soru 1 (ID: 2c67852f-a3c5-4731-a0b5-ccdfa2d7f4e2)**
Soru Kökü: Elli iki yaşında erkek hasta, son yıllarda gazete okurken yazıları net görebilmek için sayfayı gözünden uzaklaştırmak zorunda kaldığını ifade ediyor. Uzağı görmesinde herhangi bir problemi olmayan hastanın bu durumu, lens elastikiyetinin kaybı nedeniyle siliyer kas kasılsa bile lens kırıcılığının artırılamaması ile açıklanıyor. Bu klinik tablonun fizyolojik mekanizmasını tanımlayan kavram aşağıdakilerden hangisidir?
Doğru Şık (C): Prespiyopi
Açıklama: Yaşlanma ile birlikte lensin elastikiyetini kaybetmesi sonucu, silyer kasın kasılmasına rağmen lensin bombeliğini artıramaması ve akomodasyon gücünün azalmasına prespiyopi denir. Hipermetropi de yakını görememe tablosu yaratsa da, bu durum yaşa bağlı fonksiyon kaybından ziyade göz küresinin anatomik olarak kısa olması veya lensteki primer kırıcılık azalması nedeniyledir. Prespiyopi her emetrop bireyde beklenen fizyolojik bir süreçtir.

**Soru 2 (ID: 4aee0218-94ed-40cc-8270-c547a56477dd)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, son aylarda gazete okurken yazıları uzaklaştırma ihtiyacı hissettiğini belirterek kliniğe başvuruyor. Muayenede presbiyopi saptanıyor. Bu fizyopatolojik sürecin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Lensin elastikiyetini yitirmesine bağlı dinamik kırıcılık gücünün azalması
Açıklama: Yaşa bağlı gelişen presbiyopi, lens dokusunun zamanla sertleşerek doğal elastikiyetini yitirmesi sonucu akomodasyon (kalınlaşarak kırıcılığı artırma) yeteneğinin kalıcı olarak azalmasıdır. Göz küresinin ön-arka çapının uzaması eksenel miyopinin, korneanın farklı asimetrik kırıcılığı ise astigmatizmanın mekanizmasıdır. Bu yaşa bağlı dokusal skleroz, dinamik kırılmanın bozulmasına yol açarak sadece yakın görüşü bozar.

---

### ÇİFT 48 (Benzerlik: 0.76)

**Soru 1 (ID: 04ddfed1-fd77-4ebf-837e-275635ec26fd)**
Soru Kökü: Elli iki yaşında erkek hasta, son yıllarda gazete okurken yazıları net görebilmek için sayfayı gözünden uzaklaştırmak zorunda kaldığını ifade ediyor. Uzağı görmesinde herhangi bir problemi olmayan hastanın bu durumu, lens elastikiyetinin kaybı nedeniyle siliyer kas kasılsa bile lens kırıcılığının artırılamaması ile açıklanıyor. Bu klinik tablonun fizyolojik mekanizmasını tanımlayan kavram aşağıdakilerden hangisidir?
Doğru Şık (C): Prespiyopi
Açıklama: Yaşlanma ile birlikte lensin elastikiyetini kaybetmesi sonucu, silyer kasın kasılmasına rağmen lensin bombeliğini artıramaması ve akomodasyon gücünün azalmasına prespiyopi denir. Hipermetropi de yakını görememe tablosu yaratsa da, bu durum yaşa bağlı fonksiyon kaybından ziyade göz küresinin anatomik olarak kısa olması veya lensteki primer kırıcılık azalması nedeniyledir. Prespiyopi her emetrop bireyde beklenen fizyolojik bir süreçtir.

**Soru 2 (ID: 4aee0218-94ed-40cc-8270-c547a56477dd)**
Soru Kökü: Kırk beş yaşındaki erkek hasta, son aylarda gazete okurken yazıları uzaklaştırma ihtiyacı hissettiğini belirterek kliniğe başvuruyor. Muayenede presbiyopi saptanıyor. Bu fizyopatolojik sürecin temel mekanizması aşağıdakilerden hangisidir?
Doğru Şık (C): Lensin elastikiyetini yitirmesine bağlı dinamik kırıcılık gücünün azalması
Açıklama: Yaşa bağlı gelişen presbiyopi, lens dokusunun zamanla sertleşerek doğal elastikiyetini yitirmesi sonucu akomodasyon (kalınlaşarak kırıcılığı artırma) yeteneğinin kalıcı olarak azalmasıdır. Göz küresinin ön-arka çapının uzaması eksenel miyopinin, korneanın farklı asimetrik kırıcılığı ise astigmatizmanın mekanizmasıdır. Bu yaşa bağlı dokusal skleroz, dinamik kırılmanın bozulmasına yol açarak sadece yakın görüşü bozar.

---

### ÇİFT 49 (Benzerlik: 0.76)

**Soru 1 (ID: 80941240-90e9-4e59-87c4-afd1b44d0b11)**
Soru Kökü: Dil üzerinden algılanan spesifik tat duyularından bazılarında, reseptör membranındaki G proteini (gustducin) uyarımı hücre içinde İnozitol trifosfat (IP3) artışına neden olarak potasyum kanallarını bloke eder. Aşağıdaki tat eşleşmelerinden hangisi tanımlanan bu IP3 bağımlı hücre içi ikincil haberci yolağını kullanır?
Doğru Şık (C): Acı ve tatlı
Açıklama: Tatlı moleküller T1R2/T1R3 reseptörleri aracılığıyla, bazı acı maddeler ise T2R reseptörleri aracılığıyla gustducin isimli G proteinini aktive eder. Her iki yolak da hücre içi IP3 seviyelerini artırarak potasyum kanallarının kapanmasına ve kalsiyum salınımına yol açar. Ekşi tat ortamdaki H+ iyonunun K+ kanallarını direkt blokajıyla, tuzlu tat ise Na+ iyonlarının ENaC kanalından hücreye pasif girişiyle uyarılır.

**Soru 2 (ID: c1b6cf54-cb6c-4511-a931-012605d6d28e)**
Soru Kökü: Tatlı duyusunun oluşturulması mekanizmasında hücre içi kaskadda görev alan elemanlar değerlendirildiğinde;

I. G proteini olan Gustducin aktivasyonu
II. İntraselüler inozitol trifosfat (IP3) artışı
III. Potasyum (K+) kanallarının doğrudan açılarak repolarizasyon yapması

Yukarıda verilen moleküler olaylardan hangileri doğru tanımlanmıştır?
Doğru Şık (A): I ve II
Açıklama: Tatlı moleküller T1R2/T1R3 reseptörüne bağlandıktan sonra Gustducin adlı G proteinini aktive eder (I doğru). Bu kaskad fosfolipaz C'yi uyararak IP3 miktarını artırır (II doğru). Ancak IP3 artışı potasyum kanallarını açmaz, aksine BLOKE eder (kapatır); bu sayede pozitif yükler hücrede kalarak depolarizasyon tetiklenir (III yanlış). Acı tatlı moleküler ortaklığı K+ blokajına dayanır.

---

### ÇİFT 50 (Benzerlik: 0.76)

**Soru 1 (ID: 4aef2515-5afe-4d2a-bc63-48c1189fb7d6)**
Soru Kökü: Sağlıklı bir emetrop gözün yakın mesafedeki bir objeyi net görebilmesi için dinamik kırılma (akomodasyon) yaparken geliştirdiği refleks mekanizmaları arasında aşağıdakilerden hangisi yer alır?
Doğru Şık (B): Pupilla konstriksiyonu (miyozis)
Açıklama: Akomodasyon (uyum) refleksinin üç temel nörofizyolojik bileşeni vardır: Lensin kırma kuvvetinin artması (kalınlaşması), ışık miktarını ve sferik aberasyonları azaltmak için pupilla konstriksiyonu ve her iki gözün odaklanacak objeye yöneldiği içe bakış (konverjans). Yakına odaklanıldığında m. siliaris kasılır, bu da zonula liflerini gevşeterek lensin kendi elastikiyetiyle kalınlaşmasını sağlar.

**Soru 2 (ID: f11f1a92-476e-4ab3-a23f-12ab80cfebd5)**
Soru Kökü: Okuma sırasında yakına odaklanan bir bireyde net görüşü sağlamak için devreye giren akomodasyon mekanizmasının reseptör-efektör ilişkisi aşağıdakilerden hangisinde doğru sıralanmıştır?
Doğru Şık (B): M. siliaris kasılır, zonula lifleri gevşer.
Açıklama: Yakına odaklanma (akomodasyon) sırasında parasempatik uyarıyla M. siliaris kasılarak siliyer halkayı merkeze doğru daraltır, bu daralma lense asılı olan zonula liflerinin üzerindeki gerilimi ortadan kaldırır. Zonula liflerinin gevşemesiyle serbest kalan lens kendi doğal elastikiyeti sayesinde küreselleşir, ön-arka çapı artarak kırıcılığı (+ diyoptrisi) yükselir. En yaygın yanılgı siliyer kasın kasılmasıyla bağların da gerileceğinin sanılmasıdır; anatomik olarak bu mekanizma ters çalışır.

---

### ÇİFT 51 (Benzerlik: 0.76)

**Soru 1 (ID: 4bf9955d-7a85-4cd2-81f1-2123090b4ddb)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

**Soru 2 (ID: 6c779f7f-0097-4470-8767-ea9220937c99)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

---

### ÇİFT 52 (Benzerlik: 0.76)

**Soru 1 (ID: 6c779f7f-0097-4470-8767-ea9220937c99)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

**Soru 2 (ID: cd4f618d-00f8-4ac1-8946-909803f93ad6)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

---

### ÇİFT 53 (Benzerlik: 0.76)

**Soru 1 (ID: 3ccf8a23-13ec-4219-a12e-0efb50b7c04b)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

**Soru 2 (ID: cd4f618d-00f8-4ac1-8946-909803f93ad6)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

---

### ÇİFT 54 (Benzerlik: 0.76)

**Soru 1 (ID: 3ccf8a23-13ec-4219-a12e-0efb50b7c04b)**
Soru Kökü: Görme elektrofizyolojisinde, rodopsinin ışıkla uyarılması sonucu oluşan all-trans-retinal konformasyonel değişikliklere uğrayarak aktif bir ara ürüne dönüşür. G proteini olan transdusini doğrudan uyararak cGMP miktarının azalmasına neden olan bu aktif molekül aşağıdakilerden hangisidir?
Doğru Şık (C): Metarodopsin II
Açıklama: 11-cis-retinalin all-trans-retinal haline dönüşmesinin ardından molekül konformasyon değiştirerek aktif form olan metarodopsin II'yi oluşturur; metarodopsin II doğrudan heterotrimerik bir G proteini olan transdusini uyarır. Transdusin ise cGMP fosfodiesterazı aktive eden aracı bir enzimatik köprüdür, transdusini ilk tetikleyen aktifleşmiş rodopsin ara ürünü metarodopsin II'dir. Metarodopsin II yıkımı tamamlandığında sinyal de sonlanır.

**Soru 2 (ID: 4bf9955d-7a85-4cd2-81f1-2123090b4ddb)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

---

### ÇİFT 55 (Benzerlik: 0.76)

**Soru 1 (ID: 4bf9955d-7a85-4cd2-81f1-2123090b4ddb)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

**Soru 2 (ID: 761742dd-9612-407b-b459-a134a7a59154)**
Soru Kökü: Aşağıdakilerden hangisi retinada ışığın algılanması sürecinde (fototransdüksiyon kaskadı) meydana gelen fizyolojik olaylardan biri **değildir**?
Doğru Şık (D): Sodyum kanallarının açılarak hücrede güçlü bir depolarizasyon dalgası oluşturması
Açıklama: Işık uyarısı fotoreseptörlerde sodyum kanallarının açılmasına değil, aksine cGMP miktarının düşmesi sonucu cGMP-bağımlı Na+ kanallarının kapanmasına neden olur. İç segmentteki Na-K pompası sodyumu atmaya devam ettiği için hücre hiperpolarize (-70 mV) olur ve karanlıkta sürekli salınan inhibitör glutamat salınımı kesilir. Bu benzersiz sinyal transdüksiyonunda nöronun ışığa yanıtı uyarılma değil, susturulma şeklindedir.

---

### ÇİFT 56 (Benzerlik: 0.76)

**Soru 1 (ID: 761742dd-9612-407b-b459-a134a7a59154)**
Soru Kökü: Aşağıdakilerden hangisi retinada ışığın algılanması sürecinde (fototransdüksiyon kaskadı) meydana gelen fizyolojik olaylardan biri **değildir**?
Doğru Şık (D): Sodyum kanallarının açılarak hücrede güçlü bir depolarizasyon dalgası oluşturması
Açıklama: Işık uyarısı fotoreseptörlerde sodyum kanallarının açılmasına değil, aksine cGMP miktarının düşmesi sonucu cGMP-bağımlı Na+ kanallarının kapanmasına neden olur. İç segmentteki Na-K pompası sodyumu atmaya devam ettiği için hücre hiperpolarize (-70 mV) olur ve karanlıkta sürekli salınan inhibitör glutamat salınımı kesilir. Bu benzersiz sinyal transdüksiyonunda nöronun ışığa yanıtı uyarılma değil, susturulma şeklindedir.

**Soru 2 (ID: cd4f618d-00f8-4ac1-8946-909803f93ad6)**
Soru Kökü: Retina reseptör hücrelerine ışık düştüğünde fototransdüksiyon kaskadı başlar. Sinyal dönüşümü sürecinde ışığın fotoreseptörlerde neden olduğu ilk fizyokimyasal reaksiyon aşağıdakilerden hangisidir?
Doğru Şık (B): 11-cis-retinalin all-trans-retinale fotoizomerize olması
Açıklama: Fototransdüksiyon kaskadının ilk basamağında, retinaya düşük ya da yüksek şiddette ışık düşmesiyle rodopsinin yapısında bulunan 11-cis-retinal molekülü fotoizomerize olarak all-trans-retinal formuna dönüşür. All-trans formun 11-cis forma geri dönüşü ışık kaskadı değil, pigment tabakasında gerçekleşen bir biyokimyasal rejenerasyon olayıdır. Bu fotoizomerizasyon molekülün uzaysal yapısını değiştirerek G protein mekanizmasını aktifleştiren zinciri başlatır.

---

### ÇİFT 57 (Benzerlik: 0.76)

**Soru 1 (ID: 7672f460-b015-46ce-a238-e014affc39fd)**
Soru Kökü: Retinanın histolojik tabakalanması içinde lokal devre nöronları olarak görev yapan horizontal hücrelerin temel fonksiyonel lokalizasyonu ve bağlandığı hücre grubu aşağıdakilerden hangisidir?
Doğru Şık (A): Dış pleksiform tabakada reseptör hücre uzantılarını diğer hücrelere bağlamak
Açıklama: Horizontal hücreler, retinanın dış pleksiform tabakasında yerleşir ve primer olarak fotoreseptörleri (koni ve basiller) birbirine ve bipolar hücrelere bağlayarak lateral inhibisyon üzerinden görsel kontrastı artırır. Amakrin hücreler ise iç pleksiform tabakada yer alarak gangliyon hücreleri ile bipolar hücreler arasında bağlantı kurar. Pigment veya glia hücreleriyle ilgileri yoktur.

**Soru 2 (ID: a2648bd6-5595-4323-85b7-7343baf4a0f3)**
Soru Kökü: Retinada fotoreseptör hücreler ile bipolar nöronların sinaps yaptığı ve horizontal hücrelerin de reseptör hücre uzantılarını birbirine bağladığı histolojik alan aşağıdakilerden hangisidir?
Doğru Şık (B): Dış pleksiform tabaka
Açıklama: Retinanın dış pleksiform tabakası, fotoreseptörlerin (basil ve koni) bipolar ve horizontal hücrelerle ilk sinaptik bağlantılarını kurduğu ağsı bölgedir. İç pleksiform tabaka ise amakrin hücrelerin gangliyon hücrelerini birbirine bağladığı daha proksimal bir alandır. Nükleer tabakalar sinaps alanı değil, hücre gövdelerinin bulunduğu morfolojik katmanlardır.

---

### ÇİFT 58 (Benzerlik: 0.75)

**Soru 1 (ID: 2c67852f-a3c5-4731-a0b5-ccdfa2d7f4e2)**
Soru Kökü: Elli iki yaşında erkek hasta, son yıllarda gazete okurken yazıları net görebilmek için sayfayı gözünden uzaklaştırmak zorunda kaldığını ifade ediyor. Uzağı görmesinde herhangi bir problemi olmayan hastanın bu durumu, lens elastikiyetinin kaybı nedeniyle siliyer kas kasılsa bile lens kırıcılığının artırılamaması ile açıklanıyor. Bu klinik tablonun fizyolojik mekanizmasını tanımlayan kavram aşağıdakilerden hangisidir?
Doğru Şık (C): Prespiyopi
Açıklama: Yaşlanma ile birlikte lensin elastikiyetini kaybetmesi sonucu, silyer kasın kasılmasına rağmen lensin bombeliğini artıramaması ve akomodasyon gücünün azalmasına prespiyopi denir. Hipermetropi de yakını görememe tablosu yaratsa da, bu durum yaşa bağlı fonksiyon kaybından ziyade göz küresinin anatomik olarak kısa olması veya lensteki primer kırıcılık azalması nedeniyledir. Prespiyopi her emetrop bireyde beklenen fizyolojik bir süreçtir.

**Soru 2 (ID: f014ee8d-5ac5-4e66-b653-9964d153cb83)**
Soru Kökü: 55 yaşındaki kadın hasta, okuma sırasında kitabı eskisinden daha uzak bir mesafede tutma ihtiyacı hissettiğini belirtiyor. Uzağı görmesinde problem olmayan bu hastada yakını görme bozukluğunun altında yatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Lensin yaşa bağlı olarak elastikiyetini kaybetmesi
Açıklama: Presbiyopi, yaşlanmaya bağlı olarak lensin doğal elastikiyetini yitirmesi sonucu akomodasyon (dinamik kırılma) kapasitesinin azalması durumudur. Göz küresinin uzun olması miyopiye, siliar kasın aşırı kasılması hipermetropideki kompanzasyon mekanizmasına aittir. Lensin esnekliğini kaybetmesi, siliar kas kasılsa dahi lensin yeterince bombeliğini artıramamasına ve yakının net görülememesine yol açar.

---

### ÇİFT 59 (Benzerlik: 0.75)

**Soru 1 (ID: 04ddfed1-fd77-4ebf-837e-275635ec26fd)**
Soru Kökü: Elli iki yaşında erkek hasta, son yıllarda gazete okurken yazıları net görebilmek için sayfayı gözünden uzaklaştırmak zorunda kaldığını ifade ediyor. Uzağı görmesinde herhangi bir problemi olmayan hastanın bu durumu, lens elastikiyetinin kaybı nedeniyle siliyer kas kasılsa bile lens kırıcılığının artırılamaması ile açıklanıyor. Bu klinik tablonun fizyolojik mekanizmasını tanımlayan kavram aşağıdakilerden hangisidir?
Doğru Şık (C): Prespiyopi
Açıklama: Yaşlanma ile birlikte lensin elastikiyetini kaybetmesi sonucu, silyer kasın kasılmasına rağmen lensin bombeliğini artıramaması ve akomodasyon gücünün azalmasına prespiyopi denir. Hipermetropi de yakını görememe tablosu yaratsa da, bu durum yaşa bağlı fonksiyon kaybından ziyade göz küresinin anatomik olarak kısa olması veya lensteki primer kırıcılık azalması nedeniyledir. Prespiyopi her emetrop bireyde beklenen fizyolojik bir süreçtir.

**Soru 2 (ID: f014ee8d-5ac5-4e66-b653-9964d153cb83)**
Soru Kökü: 55 yaşındaki kadın hasta, okuma sırasında kitabı eskisinden daha uzak bir mesafede tutma ihtiyacı hissettiğini belirtiyor. Uzağı görmesinde problem olmayan bu hastada yakını görme bozukluğunun altında yatan temel mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Lensin yaşa bağlı olarak elastikiyetini kaybetmesi
Açıklama: Presbiyopi, yaşlanmaya bağlı olarak lensin doğal elastikiyetini yitirmesi sonucu akomodasyon (dinamik kırılma) kapasitesinin azalması durumudur. Göz küresinin uzun olması miyopiye, siliar kasın aşırı kasılması hipermetropideki kompanzasyon mekanizmasına aittir. Lensin esnekliğini kaybetmesi, siliar kas kasılsa dahi lensin yeterince bombeliğini artıramamasına ve yakının net görülememesine yol açar.

---

### ÇİFT 60 (Benzerlik: 0.75)

**Soru 1 (ID: 761742dd-9612-407b-b459-a134a7a59154)**
Soru Kökü: Aşağıdakilerden hangisi retinada ışığın algılanması sürecinde (fototransdüksiyon kaskadı) meydana gelen fizyolojik olaylardan biri **değildir**?
Doğru Şık (D): Sodyum kanallarının açılarak hücrede güçlü bir depolarizasyon dalgası oluşturması
Açıklama: Işık uyarısı fotoreseptörlerde sodyum kanallarının açılmasına değil, aksine cGMP miktarının düşmesi sonucu cGMP-bağımlı Na+ kanallarının kapanmasına neden olur. İç segmentteki Na-K pompası sodyumu atmaya devam ettiği için hücre hiperpolarize (-70 mV) olur ve karanlıkta sürekli salınan inhibitör glutamat salınımı kesilir. Bu benzersiz sinyal transdüksiyonunda nöronun ışığa yanıtı uyarılma değil, susturulma şeklindedir.

**Soru 2 (ID: e75a49d7-46b7-4764-86de-7cb2a3245781)**
Soru Kökü: Fotoreseptörlerde ışığın kimyasal sinyale dönüştürülmesi kaskadında, metarodopsin II'nin uyardığı transdusin adlı G proteininin aktive olmasıyla gerçekleşen doğrudan intraselüler mekanizma aşağıdakilerden hangisidir?
Doğru Şık (C): Hücre içi cGMP miktarının azalması
Açıklama: Transdusin aktivasyonu, hücre içindeki fosfodiesteraz enzimini aktive eder ve bu enzim cGMP'yi 5'-GMP'ye yıkarak hücre içi cGMP miktarını hızla azaltır. cGMP miktarındaki bu düşüş, sodyum kanallarının kapanmasına neden olarak hiperpolarizasyon yaratır; diğer şıklardaki kalsiyum girişi veya IP3 artışı farklı duyu kaskadlarının (ör. tat, koku) mekanizmalarıdır. Görme transdüksiyonunun temeli 'cGMP yıkımı'dır.

---

